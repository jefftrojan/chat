import { useState } from 'react';
import './App.css';

function App() {
  const  [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
     {!loggedIn ? (
      <div className='login'>
        <div className='inputs'>

            <input 
          type='text'
          placeholder='username'

          />
          <input 
          type="text"
          placeholder='chatroom id'
          />
        </div>
      
      <button>Enter chatroom</button>

      </div>

     ) : (
      <h1> You are logged in </h1>
     )}
    </div>
  );
}

export default App;
