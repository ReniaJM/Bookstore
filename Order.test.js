import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Order from "./components/Order";

configure({adapter: new Adapter()})
describe('order test', () =>{
    it('order renders without crashing', () => {
        const div = document.createElement('div');
        const order= []
        ReactDOM.render(<Order order={order} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot matches', () =>{
        const order= []
        const wrapper =shallow (<Order order={order} />)
        expect(wrapper).toMatchSnapshot();
    })
})