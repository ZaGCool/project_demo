import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import Tick from './components/Tick';

function UpdateFn() {
    ReactDOM.render( < Tick / > ,
        document.getElementById('root')
    );
}

UpdateFn();