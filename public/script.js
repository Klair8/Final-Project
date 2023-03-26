const { db } = require('../config/db.js');
const say = require('say');

const getStory=()=>{
db('storiestest').where({ id: 1 }).first().then((data) => {
  if (data) {
    console.log('datascript',data)
    say.speak(data.story, 'Amelie', 1);
  }
}).catch((error) => {
  console.error(error);
})
}
getStory();
