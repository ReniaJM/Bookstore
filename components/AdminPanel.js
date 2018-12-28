import React, {Component} from 'react'
import {fbase, fireApp} from "../fbase";

class AdminPanel extends Component {

    constructor(){
        super()
        this.state ={
            books:[],
            book:{
                name: '',
                author:'',
                description: '',
                onStock: true,
                image:''
            },
            loggedIn: false,
            email: '',
            password: ''
        }
    }

    handleChange =  (event) => {
       let newbook;
        if(event.target.name === 'onStock'){
             newbook= {
                ...this.state.book,
                [event.target.name]: event.target.checked
            }
        }else{
              newbook= {
                ...this.state.book,
                [event.target.name]: event.target.value

            }
        }
        this.setState({
            book: newbook
        })
    }

    handleLogginChange =(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    addNewBook = (event) => {
        event.preventDefault();
        let newbook = {...this.state.book};
        if(Array.isArray(this.state.books)) {
            this.setState({books: [...this.state.books, newbook]
            })} else {
                this.setState({books: [newbook]})
            }

        this.setState({
            book: {
                name: '',
                author:'',
                description: '',
                onStock: true,
                image:''
            }
        });
    };

    componentDidMount() {
        this.ref= fbase.syncState('bookstore/books', {
            context: this,
            state:'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref)

    }

    autenticate =(event)=>{
        event.preventDefault();
        fireApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() =>{
                this.setState({
                    loggedIn:true
                })

            })
            .catch((err)=>{
                console.log(err)
            })

        this.setState({
           loggedIn:true
        })
    }

    render (){
        return (
            <div>
                {!this.state.loggedIn &&
                <form onSubmit={this.autenticate}>
                    <input type="text" placeholder='email' id='email_bs' name='email' className='form-control' value={this.state.email}
                           onChange={this.handleLogginChange}/>
                    <input type="password" placeholder='password' name='password' id='password_bs' className='form-control' value={this.state.password}  onChange={this.handleLogginChange} />
                    <button type='submit' className='btn btn-primary'>Zaloguj</button>
                </form>
                }
                {this.state.loggedIn &&
                <div className='adminpanel col-md-4'><h2>panel admina</h2>
                    <form onSubmit={this.addNewBook}>
                        <div className='form-group'>
                            <input type="text" placeholder='Nazwa książki' id='name' name='name'
                                   className='form-control'
                                   onChange={this.handleChange} value={this.state.book.name}/>
                        </div>
                        <div className='form-group'>
                            <input type="text" placeholder='Autor książki' id='author' name='author'
                                   className='form-control' onChange={this.handleChange}
                                   value={this.state.book.author}/>
                        </div>
                        <div className='form-group'>
                        <textarea placeholder='Opis książki' id='description' name='description'
                                  className='form-control' onChange={this.handleChange}
                                  value={this.state.book.description}/>
                        </div>
                        <div className='form-group'>
                            <input type="checkbox" id='onStock' name='onStock' className='form-check-input'
                                   onChange={this.handleChange} value={this.state.book.onStock}/>
                            <label htmlFor='bookOnStock' className='form-check-label'>Na stanie</label>
                        </div>
                        <div className='form-group'>
                        <textarea placeholder='Zdjęcie książki' id='image' name='image' className='form-control'
                                  onChange={this.handleChange} value={this.state.book.image}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Dodaj</button>
                    </form>
                </div>
                }
            </div>);
    }
}

export default AdminPanel