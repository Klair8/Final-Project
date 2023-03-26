const {db} = require('../config/db.js'); 


const getStory = () =>{    // get all the items
    return db('storiestest')  // ma database
    .select('id','name','story')
    .orderBy('name')  // why ID isnt working
    .returning('*')
}

module.exports ={  // module to export the query
    getStory
    }
  