import express from 'express';

//controllers
import { addNewNote, deleteNote, getAllNotes } from '../controllers/notes.js';

const router = express.Router();

router.get('/', getAllNotes);

//ADDING NEW NOTE
// localhost:5000/notes/?title="TITLE"12&content=Hello how u doin
router.post('/', addNewNote);

router.delete('/:id', deleteNote);

export default router;
