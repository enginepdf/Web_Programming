import React, { useState, useEffect } from 'react';  // useState, useEffect are hooks

function App() { //  functional component
    
  const [items, setItems] = useState([])  // initial state is []
  
  useEffect(()=> { // serving the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount
    fetch('')
      .then(res => res.json())
      .then(data => {setItems(data)});  
  },[items]) // run when 'items' changes. 
             // [] : same as componentDidMount
  return (
            <div>
                <button onClick={() => console.log(items)}>Items</button>
            </div>
         );
}

export default App;