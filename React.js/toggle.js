class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        onOff: false
      };
    }
  
    toggle = () => {
      this.setState({
        onOff: !this.state.onOff    
      });
    }

    // toggle = () => {
    //     this.setState(prevState => ({ 
    //         onOff: !prevState.onOff
    //     })
    // }