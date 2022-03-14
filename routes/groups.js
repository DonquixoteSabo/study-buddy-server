import express from 'express';

import data from '../data/data.js';

const router = express.Router();

router.get('/:group', (req, res) => {
  const { group } = req.params;
 
  let matchingStudents = data
    .filter(student => student.group === group.toUpperCase())
    .sort((a, b) =>
      a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    );

  res.json(matchingStudents);
});

export default router;
