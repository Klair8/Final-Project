const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
// const say = require('say');
const { db } = require('./config/db.js'); // connect to the database

dotenv.config()

const app = express(); 
app.use(cors());

app.use(express.urlencoded({extended:true}));  
app.use(express.json())

app.use('/',express.static(__dirname+'/public'));  // add the static in order to see it 

app.listen(process.env.PORT,() => {
    console.log(`run on ${process.env.PORT}`)
})


app.get("/message", (req, res) => {
  res.json({ message: "you are connected" });
});

const story_router = require('./routes/story.js');

app.use('/api/story', story_router)  // using this route for the fetch


// for speech to text before and after sending it in front
// const readStoryAloud = () => {
// db('storiestest').where({ id: 1 }).first().then((data) => {
//   if (data) {
//     console.log('datascript',data)
//     say.speak(data.story, 'Amelie', 1);
//   }
// }).catch((error) => {
//   console.error(error);
// })
// }


