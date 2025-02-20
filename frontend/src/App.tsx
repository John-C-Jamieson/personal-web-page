import React, { useEffect, useState } from 'react';
import './App.css';
import ColorfulComponent from './components/ColorfulComponent';

function App() {
  const [message, setMessage] = useState('Loading message...');
  useEffect(() => {
    fetch('/api/message')
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => {
          console.error('Error fetching message:', err);
          setMessage('Error fetching message');
        });
  }, []);
    return (
        <div className="App">
            <h1>Welcome to the Colorful React App!</h1>
            <p>{message}</p>
            <ColorfulComponent />
        </div>
    );
}

export default App;
