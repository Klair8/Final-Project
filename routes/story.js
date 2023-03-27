const express = require('express');

const  {_getStory, _getStoryById} = require('../controllers/story.js'); 

const router = express.Router()  
 
router.get('/', _getStory)  
router.get('/:id', _getStoryById)

module.exports = router 
   
    