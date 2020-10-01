import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const SampleApp=()=>{
  return React.createElement(
    'div',
    {}, // tag, attribute, child
    React.createElement('h1',{},'This works!')
  )
}

ReactDOM.render(
  React.createElement(SampleApp),
  document.getElementById('root') // target of 'render()'
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
