import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      onoff: true,
      number: 0
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button
            onClick={() =>
              this.setState(state => ({
                onoff: !state.onoff
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                number: state.number+1
              }))
            }
          >
            increment the number
          </button>
          {this.state.onoff ? <Lifecycles number={this.state.number} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
