
const  {getStory} = require('../module/story.js'); 

  const _getStory =(req,res)=>{   // create the function
    getStory()
  .then(data=>{
      console.log('getStory', data)
      res.json(data)
  })
  .catch(err =>{
      console.log(err)
      res.status(404).json({msgcontr:'error'})
  })
}
  
module.exports ={  // module to export the function
    _getStory
    }