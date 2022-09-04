const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  project:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project'
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  duedate:{
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('task', TaskSchema);