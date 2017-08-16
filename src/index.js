import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Header from './components/header';
import Slides from './components/slides';
import Cifras from './components/cifras';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('bs-example-navbar-collapse-1'));
ReactDOM.render(<Slides />, document.getElementById('slides'));
ReactDOM.render(<Cifras />, document.getElementById('cifras'));
registerServiceWorker();
