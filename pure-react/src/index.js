import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Hello from './Hello';

ReactDOM.render(<App />,document.getElementById('root'));
/**
 * react uses the concept of viftual DOM. It creates representation of your component hierarchy and then renders those components by creating real DOM elements and inserting them where you tell it.
 * ReactDOM.redner takes 2 arguments first one is your component/React element, and any other is the a real DOM element that already exists.
 */