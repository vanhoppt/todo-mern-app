import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now
  },
  fullName: String,
  todoText: String
})

export default mongoose.model('Todo', Schema);
