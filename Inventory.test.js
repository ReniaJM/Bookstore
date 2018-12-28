import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Inventory from "./components/Inventory";

configure({adapter: new Adapter()})
describe('inventory test', () =>{
    it('inventory renders without crashing', () => {
        const div = document.createElement('div');
        const books = [];
        ReactDOM.render(<Inventory books={books}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot matches', () =>{
        const books = [];
        const wrapper =shallow (<Inventory books={books}/>)
        expect(wrapper).toMatchSnapshot();
    })
})