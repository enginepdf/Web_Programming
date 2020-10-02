import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps.number);
    return nextProps.number !== this.props.number; // when only true, render invoked
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h2>LIFECYCLES COMPONENT</h2>
        {this.props.number}
      </div>
    );
  }
}

export default Lifecycles;
