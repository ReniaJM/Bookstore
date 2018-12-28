import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from "./Header";

configure({adapter: new Adapter()})
describe('header test', () =>{
    it('header renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('header changes text according to state', () =>{
        const wrapper =shallow (<Header/>)
        console.log(wrapper.debug())
        expect(wrapper.find('h2').text()).toBe('black book')
        wrapper.setState({
            bookstorename:'white book'
        })
        expect(wrapper.find('h2').text()).toBe('white book')
    })
    it('header state changes after clicked on div',() =>{
        const wrapper =shallow (<Header/>)
        expect(wrapper.state().bookstorename).toBe('black book')
        wrapper.find('.header').simulate('click')
        expect(wrapper.state().bookstorename).toBe('white book')
    })
    it('snapshot matches', () =>{
        const wrapper =shallow (<Header/>)
        expect(wrapper).toMatchSnapshot();
    })
})