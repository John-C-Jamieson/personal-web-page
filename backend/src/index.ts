import express from 'express';

const app = express();
const port = 3001;

// Sample API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express backend!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
