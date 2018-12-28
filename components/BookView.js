import React, {Component} from 'react'

class BookView extends Component {
    render(){
        return(
            <div className='bookView row'>
                <div className='col-md-4'>
                    <img src={this.props.book.image} alt={this.props.book.name} width='75' height='100'/>
                </div>
                <div className='col-md-4'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-danger'onClick={(event) =>this.props.addOrder(this.props.book)}>dodaj</button>
                </div>
            </div>
        )
    }
}

export default BookView