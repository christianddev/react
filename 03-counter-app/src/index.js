import React from 'react';
import ReactDom from 'react-dom';
import FirtsApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divroot = document.querySelector('#root');

// ReactDom.render(<FirtsApp saludo="Hola desde index" />, divroot)
ReactDom.render(<CounterApp  />, divroot)
