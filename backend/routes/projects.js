const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Projects = require('../models/Projects');
const { body, validationResult } = require('express-validator');

//Route 1:  get all projects: GET "/api/projects/fetchallprojects"  Login required
router.get('/fetchallprojects',fetchuser, async(req, res) => {
    try {
        const project = await Projects.find({user: req.user.id});
        res.json(project);
    } catch (error) {
        res.json({message: error.message});
        res.status(500).send("Internal server error occured");
    }
})

//Route 2:  add a new project: POST "/api/projects/addproject"  Login required
router.post('/addproject',fetchuser, [
    body('title', 'Title should be of minimum 1 characters').isLength({ min: 1 }),
    body('field', 'Length of field should be atleast 1').isLength({ min: 1 }),
], async(req, res) => {
    //if there are error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {title, field} = req.body;
    try {
        const project = new Projects({
            title, field, user: req.user.id
        })
        const savedProjects = await project.save();
        // console.log(savedProjects.id);
        res.json(savedProjects);
    } catch (error) {
        res.json({message: error.message});
        res.status(500).send("Internal server error occured");
    }  
})

//Route 4:  delete an existing project: DELETE "/api/projects/deleteproject"  Login required
router.delete('/deleteproject/:id', fetchuser, async(req, res) => {
    try {
        
        //find the note to be deleted and delete it
        let project = await Projects.findById(req.params.id);
        //check if note with given id exist
        if(!project){
            return res.status(404).send("This note is not found");
        }
        //check whether this user owns this note
        if(project.user.toString() !== req.user.id){
            return res.status(401).send("Access denied");
        }

        project = await Projects.findByIdAndDelete(req.params.id);
        res.json({success: "project is deleted succussfully", project: project});
    } catch (error) {
        res.json({message: error.message});
        res.status(500).send("Internal server error occured");
    }
    
})

module.exports = router;