import express from 'express';

import data from '../data/data.js';

const router = express.Router();

router.get('/getGroups', (req, res) => {
  let groups = [...new Set(data.map(student => student.group))];
  groups = groups.sort();
  res.json({ groups: groups });
});

router.get('/:group', (req, res) => {
  let matchingStudents = data
    .filter(student => student.group === req.params.group.toUpperCase())
    .sort((a, b) =>
      a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    );

  res.json({ students: matchingStudents });
});

router.get('/', (req, res) => {
  res.json({ error: 'Please provide the group ID' });
});

export default router;
