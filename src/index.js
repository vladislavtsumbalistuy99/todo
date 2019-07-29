import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/ToDo/ToDo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './logic/reducer.js'

const store = createStore(reducer)

ReactDOM.render(<Provider store = { store }> <ToDo /> </Provider>, document.getElementById('root'));
