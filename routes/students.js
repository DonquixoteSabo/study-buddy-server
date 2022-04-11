import express from 'express';

import StudentsModel from '../models/students.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const matchingStudent = await StudentsModel.findOne({ _id: id });

  res.json({ students: matchingStudent });
});

// TODO Refactor this endpoint because for sure its not optimal
router.get('/search/:phrase', async (req, res) => {
  let { phrase } = req.params;
  phrase = phrase.toLowerCase().split(' ');
  const data = await StudentsModel.find();
  let matchingStudents = [];

  matchingStudents = data.filter(
    student =>
      student.firstName.toLowerCase().includes(phrase[0]) ||
      student.lastName.toLowerCase().includes(phrase[0])
  );

  if (phrase.length > 1) {
    matchingStudents = matchingStudents.filter(
      student =>
        student.firstName.toLowerCase().includes(phrase[1]) ||
        student.lastName.toLowerCase().includes(phrase[1])
    );
  }

  res.json({ students: matchingStudents });
});

router.get('/', (req, res) => {
  res.json({ error: 'Please provide the student ID' });
});

export default router;
