// const { db } = require('../config/db.js');
// const say = require('say');

// const getStory=()=>{
// db('storiestest').where({ id: 1 }).first().then((data) => {
//   if (data) {
//     console.log('datascript',data)
//     say.speak(data.story, 'Amelie', 1);
//   }
// }).catch((error) => {
//   console.error(error);
// })
// }
// getStory();

// const getStory = () => {
//   fetch('/api/story')
//   .then(res => res.json())
//   .then(data=> {
//     showStory(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }
// getAllItems()


// const showStory = (arr) => {
//   const html = arr.map(item => {
//     return `<div>${item.name} ${item.story}</div>`
//   })
//   document.getElementById('root').innerHTML = html.join('')
// }

