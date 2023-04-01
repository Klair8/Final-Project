const {db} = require('../config/db.js'); 


const getStory = () =>{    // get all the items
    return db('storyeng')  // ma database
    .select('id','title','description','story', 'author')
    .orderBy('title')  
    .returning('*')
}


const getStoryById = (pid) => {
    return db('storyeng')
    .select('id','title','description','author')
    .where({id:pid})
  }
  

module.exports ={  // module to export the query
    getStory,
    getStoryById
    }
  