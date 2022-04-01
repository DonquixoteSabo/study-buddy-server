import express from 'express';
import { addExam, deleteExam, getAllExams } from '../controllers/exams.js';

const router = express.Router();

router.get('/', getAllExams);

router.post('/', addExam);

router.delete('/:id', deleteExam);

export default router;
