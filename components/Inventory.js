import React, {Component}  from 'react';
import BookView from "./BookView";
import {fbase} from "../fbase";

class Inventory extends Component {

    constructor(){
        super();
        this.state = {
            books:[]
        }
    }

    componentDidMount() {
        this.ref= fbase.syncState('bookstore/books', {
            context: this,
            state:'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref)

    }
    render (){
        const booklisting= this.state.books.map(book => {
             return <BookView  key={book.name} book={book} addOrder={this.props.addOrder}/>
        })

        return (
            <div className='inventory col-md-6'>
                <h2>Lista książek</h2>
                {booklisting}
            </div>
        )
    }
}

export default Inventory