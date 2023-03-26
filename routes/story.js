const express = require('express');

const  {_getStory} = require('../controllers/story.js'); 

const router = express.Router()  
 
router.get('/', _getStory)  

module.exports = router 
   
    