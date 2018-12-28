import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderView from "./OrderView";

configure({adapter: new Adapter()})
describe('order test', () =>{
    it('snapshot matches', () =>{
        const book= {
            name: 'Book title'
        }
        const wrapper =shallow (<OrderView  book={book}/>)
        expect(wrapper).toMatchSnapshot();
    })

    it('title of the book is displayed as in props', () =>{
        const book= {
            name: 'Book title'
        }
        const wrapper =shallow (<OrderView  book={book}/>)
        expect(wrapper.find('.orderView').find('span').text()).toBe(book.name)
    })
})