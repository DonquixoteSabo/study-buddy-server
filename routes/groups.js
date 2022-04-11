import express from 'express';

import {
  getAllGroups,
  getStudentsByGroup,
  handleError,
} from '../controllers/groups.js';

const router = express.Router();

router.get('/getGroups', getAllGroups);

router.get('/:group', getStudentsByGroup);
 
router.get('/', handleError);

export default router;
