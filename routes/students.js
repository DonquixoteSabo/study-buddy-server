import express from 'express';

import {
  getStudentById,
  searchStudents,
  handleError,
} from '../controllers/students.js';

const router = express.Router();

router.get('/:id', getStudentById);

router.get('/search/:phrase', searchStudents);

router.get('/', handleError);

export default router;
