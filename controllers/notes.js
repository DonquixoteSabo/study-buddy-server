import NotesModel from '../models/notes.js';

export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.json({ allNotes });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
 
export const addNewNote = async (req, res) => {
  let title = req.query.title;
  let content = req.query.content;

  const newNote = new NotesModel({ title, content });

  if (!title || !content) {
    res.json({
      message:
        'You have to provide both content and title. Be sure to validate user form',
    });
  }

  try {
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await NotesModel.deleteOne({ _id: id });
    res.json({ message: 'You deleted user' });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
