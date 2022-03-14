import express from 'express';

import data from '../data/data.js';

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const matchingStudent = data.filter(student => student.id.$oid === id);

  res.json(matchingStudent);
});

export default router;
