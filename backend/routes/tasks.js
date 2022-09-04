const express = require('express');
const router = express.Router();
const fetchproject = require('../middleware/fetchproject');
const Tasks = require('../models/Tasks');
const { body, validationResult } = require('express-validator');

//Route 1:  get all projects: GET "/api/tasks/fetchalltasks"  Login required
router.get('/fetchalltasks',fetchproject, async(req, res) => {
    try {
        const project = await Tasks.find({project: req.project});
        res.json(project);
    } catch (error) {
        res.json({message: error.message});
        res.status(500).send("Internal server error occured");
    }
})

//Route 2:  add a new task: POST "/api/tasks/addtasks"  Login required
router.post('/addtask',fetchproject, [
    body('title', 'Title should be of minimum 1 characters').isLength({ min: 1 }),
    body('description', 'Length of description should be atleast 1').isLength({ min: 1 }),
], async(req, res) => {
    //if there are error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {title, description, duedate} = req.body;
    try {
        const task = new Tasks({
            title, description, duedate, project: req.project
        })
        const savedTasks = await task.save();
        res.json(savedTasks);
    } catch (error) {
        res.json({message: error.message});
        res.status(500).send("Internal server error occured");
    }  
})

module.exports = router;