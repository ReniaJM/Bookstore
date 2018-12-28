import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AdminPanel from "./components/AdminPanel";

configure({adapter: new Adapter()})
describe('adminpanel test', () =>{
    it('adminpanel renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot matches', () =>{
        const wrapper =shallow (<AdminPanel/>)
        expect(wrapper).toMatchSnapshot();
    })
})