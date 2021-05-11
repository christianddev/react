import React from 'react';
import {shallow} from 'enzyme';
import CunterApp from '../CounterApp';

describe('CounterApp.test.js', () =>{
    
    let wrapper = shallow(<CunterApp/>);
    beforeEach(() => {
        wrapper = shallow(<CunterApp/>);
    });

    test('should show CunterApp', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should value equal to 10', () => {
        const value = wrapper.find('h2').text().trim(); 
        expect(value).toEqual('10');
    })
    
    test('should value equal to 100', () => {
        const wrapper = shallow(<CunterApp value={100}/>);
        const value = wrapper.find('h2').text().trim(); 
        expect(value).toEqual('100');
    })

    test('should add value +1', () => {
        wrapper.find('button').at(2).simulate('click'); 
        const value = wrapper.find('h2').text().trim(); 
        expect(value).toEqual('11');
    })

    test('should reduce value -1', () => {
        wrapper.find('button').at(0).simulate('click'); 
        const value = wrapper.find('h2').text().trim(); 
        expect(value).toEqual('9');
    })

    test('should set value to 15', () => {
        const wrapper = shallow(<CunterApp value={15}/>);  
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(1).simulate('click'); 
        const value = wrapper.find('h2').text().trim(); 
        expect(value).toEqual('15');
    })
})