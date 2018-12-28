import React, {Component} from 'react'

class OrderView extends Component {
    render(){
        return(
            <div className='orderView row'>
                <div className='col-md-8'>
                    <span>{this.props.book.name}</span>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-danger' onClick={(event) =>this.props.removeFromOrder(this.props.book.name)}>usuń</button>
                </div>
            </div>
        )
    }
}

export default OrderView