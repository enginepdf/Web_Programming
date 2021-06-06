import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor() {
    super();
    this.state = '';
  }

  componentDidMount() {
   
  }

  render() {
    const { } = this.state;
    return (
      <div className="App">
          <Modal>
            <Children />
          </Modal>
      </div>
    );
  }
}

export default App;