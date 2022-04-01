import express from 'express';
import { addExam, deleteExam, getAllExams } from '../controllers/exams.js';

const router = express.Router();

router.get('/', getAllExams);

router.post('/', addExam);

router.delete('/:id', deleteExam);

//ADDING NEW NOTE
// localhost:5000/notes/?title="TITLE"12&content=Hello how u doin
// router.post('', addNewNote);
//
// router.delete('/:id', deleteNote);

export default router;
