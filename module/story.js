const {db} = require('../config/db.js'); 


const getStory = () =>{    // get all the items
    return db('stories')  // ma database
    .select('id','title','description','story', 'author','image_url','level','style')
    .orderBy('title')  
    .returning('*')
}


const getStoryById = (pid) => {
    return db('stories')
    .select('id','title','description','story','author','image_url','level','style')
    .where({id:pid})
  }
  

module.exports ={  // module to export the query
    getStory,
    getStoryById
    }
  