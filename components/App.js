import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import '../index.css'

class App extends Component {

    constructor(){
        super()
        this.state= {
            order:[]
        }
    }
    addOrder =(book)=>{
        this.setState({
            order: [...this.state.order, book]
        })

    }

    removeFromOrder = (title) =>{
        this.setState({
            order: this.state.order.filter(book => title!== book.name)
        })
    };

  render() {
    return (
      <div className="app container">
          <Header/>
        <div className='row'>
            <Order removeFromOrder= {this.removeFromOrder} order={this.state.order} />
            <Inventory addBooksArray ={this.state.addBooksArray} addOrder= {this.addOrder}/>
        </div>

      </div>
    );
  }
}

export default App;
