// Reference : https://ko.reactjs.org/docs/state-and-lifecycle.html

import React, {Component} from 'react';
import Timer from  './Timer';
import './App.css';

export default class App extends Component{ // with create react app, babel, you can use state without constructor(alternative class syntax) 

 constructor(props){
     super(props);
     this.state={
       count:1,
       timer:true
     };
     this.multiply=this.multiply.bind(this);
     this.divide=this.divide.bind(this);
     this.onoffTimer=this.onoffTimer.bind(this);
     // this.props=props
 }

 multiply(){
     this.setState((prevState, prevProps)=>
     ({count : prevState.count*2}), ()=> console.log(this.state.count)
     )
 }

 divide(){
   this.setState((state) => {
     if(state.count>=1){
       return {
       count: Math.round(state.count/2)
      }
     }
   }, () => console.log(this.state.count))
 }

 onoffTimer(){
   this.setState((state) => ({timer : !state.timer})
   )
 }

 componentDidMount(){
   console.log("App : componentDidMount");
 }

 componentDidUpdate(){
   console.log("App : componentDidUpdate");
 }

 render(){
   let {count, timer} = this.state;
   let {multiply, divide, onoffTimer}=this;
   return(
     <div>
       <h1>Current : {count}</h1>
       <div>
          <button className='button1' onClick={multiply}>Multiply</button>
          <button className='button1' onClick={divide}>Divide</button>
       </div>
       <button id='button2' onClick={onoffTimer}>ON/OFF</button>
       {timer ? <Timer /> : <></>}
    </div>
   )
 }

}