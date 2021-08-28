const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://precious:110095128$@cluster0.nepav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(console.log('connected to db'));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Precious is here with the others')
})

app.listen(PORT, (req, res) =>{
    console.log(`server is connected on port ${PORT} `);
})