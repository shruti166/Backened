const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 8000;

const limiter = rateLimit({
    windowMs : 60 * 1000,
    max: 10
})

app.get('/api', limiter, (req, res)=> {
    res.send('Hello world')
})

app.listen(port, ()=> {
    console.log('listening on port no 8000')
})