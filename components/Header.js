import React, { Component } from 'react';
import {Link} from "react-browser-router";

class Header extends Component {
    constructor(){
        super()
        this.state= {
            bookstorename: 'black book',
            clicked: true,
            textColour: 'black',
            backgroundColor: 'white'
        }
    }
        handleClick=() => {
        if(this.state.clicked){
            this.setState({
                bookstorename: 'white book',
                textColour: 'white',
                backgroundColor: 'black'
            })
        }else{
            this.setState({
                bookstorename: 'black book',
                textColour: 'black',
                backgroundColor: 'white'
            })
        }
        this.setState({
            clicked: !this.state.clicked,
        })
}
    render(){
        let headercss={
            colour: this.state.textColour,
            backgroundColor: this.state.backgroundColor
        }
        return (
            <div className ='row header' style={headercss} onClick={this.handleClick}>
               <h2>{this.state.bookstorename}</h2>
                <Link to ='/admin'><button className='btn btn-info gotoAdmin'>Admin Panel</button></Link>
            </div>
        );
    }
}

export default Header