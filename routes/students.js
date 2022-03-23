import express from 'express';

import data from '../data/data.js';

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const matchingStudent = data.filter(student => student.id.$oid === id);

  res.json({ students: matchingStudent });
});

router.get('/search/:phrase', (req, res) => {
  let { phrase } = req.params;
  phrase = phrase.toLowerCase().split(' ');
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
