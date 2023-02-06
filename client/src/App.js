import { useState, useEffect } from 'react';
import io from 'socket.io-client'
import './App.css';


let socket;
const conn_port = 'localhost:8080';

function App() {
  const  [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('')
  const [username, setUsername] = useState('')

  useEffect(()=>{
    socket=io(conn_port)
  }, []);

  const connectToRoom = ()=> {
    socket.emit('join_room', room);
  }


  return (
    <div className="App">
     {!loggedIn ? (
      <div className='login'>
        <div className='inputs'>

            <input 
          type='text'
          placeholder='username'
          onChange={(e) => {setUsername(e.target.value)}}

          />
          <input 
          type="text"
          placeholder='chatroom id'
          onChange={(e) => {setRoom(e.target.value)}}
          />
        </div>
      
      <button onClick={connectToRoom}>Enter chatroom</button>

      </div>

     ) : (
      <h1> You are logged in </h1>
     )}
    </div>
  );
}

export default App;
