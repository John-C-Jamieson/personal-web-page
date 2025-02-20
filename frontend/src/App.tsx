import React, { useEffect, useState } from 'react';
import './styles/index.css';
import Home from './pages/Home';

const App: React.FC = () => {
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
            <Home />
        </div>
    );
};

export default App;
