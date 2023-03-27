const {db} = require('../config/db.js'); 


const getStory = () =>{    // get all the items
    return db('storiestest')  // ma database
    .select('id','name','story')
    .orderBy('name')  // why ID isnt working
    .returning('*')
}


const getStoryById = (pid) => {
    return db('storiestes')
    .select('id','name','price')
    .where({id:pid})
  }
  

module.exports ={  // module to export the query
    getStory,
    getStoryById
    }
  