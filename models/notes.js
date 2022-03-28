import mongoose from 'mongoose';

const notesSchema = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NotesModel = mongoose.model('Notes', notesSchema);

export default NotesModel;
