const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config()

const app = express(); 
app.use(cors());

app.use(express.urlencoded({extended:true}));  
app.use(express.json())

app.use('/',express.static(__dirname+'/public'));  // add the static in order to see it 

app.listen(process.env.PORT,() => {
    console.log(`run on ${process.env.PORT}`)
})


const story_router = require('./routes/story.js');

app.use('/api/story', story_router)  // using this route for the fetch
