import React from 'react';
import { render } from "@testing-library/react";
import FirtsApp from "../PrimeraApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('PrimeraApp.test.js', () => {
    // test('should show Hola desde index', () => {
    //   const saludo = "Hola desde index";
    //   const {getByText} = render(<FirtsApp saludo={saludo}/>)
    //   expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('should show <FirtsApp/>', () => {
        const saludo = "Hola desde index";
        const wrapper = shallow(<FirtsApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })
    test('should show subtitle - valor por defecto', () => {
        const saludo = "Hola desde index";
        const wrapper = shallow(<FirtsApp saludo={saludo}/>)

        const textSubtitle = wrapper.find('p').text();
        expect(textSubtitle).toBe('subtitle - valor por defecto');
    })

})
