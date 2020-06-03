import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.jsx';
import { BrowserRouter } from 'react-router-dom'
import Scroll from 'Scroll'

ReactDOM.render(<BrowserRouter><Scroll/><App /></BrowserRouter> , document.getElementById('root'))