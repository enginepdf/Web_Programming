import React from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props); // to use 'this' keyword
    this.div = document.createElement('div');  
  }

  componentDidMount() {
    modal.appendChild(this.div);
  }

  componentWillUnmount() {
    modal.removeChild(this.div);
  }

  render() {
    return ReactDOM.createPortal(  // https://reactjs.org/docs/portals.html    
      this.props.children,
      this.div,
    );  // (child, container)   container to be wrapped by child
  }
}

export default Modal;

/*

<Modal>
  <Component />
</Modal>

*/