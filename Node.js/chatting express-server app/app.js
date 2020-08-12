// eslint-disable-next-line

var chat=document.querySelector('#chats');
let msgs;

const app = {
  server: 'http://localhost:9999/messages',
  init : function(){
    // setInterval(app.fetch(), 1000)
  },
  fetch :  function(){
    window.fetch(app.server, {
    method: 'GET'
  })
    .then(function(res) {
      return res.json();
    })
    .then((data)=>{
      msgs=JSON.parse(data);
      console.log(msgs)
      this.listup(msgs.results);
      this.roomlist(msgs.results);
      
    })
    // .catch((err) => console.log(err));
  },

  clearMessages: function(){
    clearMessages();
  },
  renderMessage: function(message){
      app.fetch(message);
  },

  roomlist : function(msgdata){
    let list=msgdata.reduce((acc, cur)=>{
      if(!acc.includes(cur.roomname)){
         acc.push(cur.roomname)
      }
      return acc;
  }, [])
  // console.log(list)
  let roomselect = document.querySelector('#room');

     for(let i=0; i<list.length ;  i++){
      let op=document.createElement('OPTION')
      op.text=list[i];
      op.value=list[i];
      
      roomselect.appendChild(op);
      }
      roomselect.onchange=function(){
        app.clearMessages();
        let filtered=msgdata.filter((data) => {
         return data.roomname===this.value});
         app.listup(filtered);
     }
    
    // roomselect.onchange=function(){
    //     app.clearMessages();
    //       let location='http://localhost:9999/messages?roomname='+this.value;
    //       console.log(location)
    //       window.fetch(location, {
    //       method: 'GET'
    //     })
    //       .then(function(res) {
    //         return res.json();
    //       })
    //       .then((data)=>{
    //         msgs=data
           
    //         app.listup(msgs);
    //       })
    //       // .catch((err) => console.log(err));
    //     }

  },

  send : function(message){

    // var chat=document.querySelector('#chats');
    // let li=document.createElement('li');
    //     li.className='list';
    //     li.textContent=`${message.username}: ${message.text}`;
    //     chat.prepend(li);
    
    window.fetch(app.server, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      return response.json();
    })
    // .then(json => {
    // //   console.log(json);
    //   // message sent!
    // });
     },
     
    clearMessages : function(){
      var chat=document.querySelector('#chats');
      while(chat.hasChildNodes()){
          chat.removeChild(chat.firstChild)
      }
   },

   listup : function(items){
    if(Array.isArray(items)){
      if(items.length>=11){
      for(let i=items.length-10; i <items.length ; i++){
       let li=document.createElement('li');
       li.className='list';
       li.textContent=`${items[i].username}: ${items[i].text}`;
       chat.prepend(li);
      }
    } 
      else 
      for(let i=0; i <items.length ; i++){
        let li=document.createElement('li');
        li.className='list';
        li.textContent=`${items[i].username}: ${items[i].text}`;
        chat.prepend(li);
      }
     }
    }
  }




 let submitbtn=document.querySelector('#submit');
 submitbtn.addEventListener('click', function(){
     let tweet=document.querySelector('#tweet')
     let roomy=document.querySelector('#roomy');
    let message = {
        username: 'H',
        text: tweet.value,
        roomname: roomy.value
      };
     app.send(message)
     tweet.value='';
     roomy.value='';
     app.clearMessages();
     app.fetch();
 });


// setTimeout(init(), 1000)   
app.init()
app.fetch()

