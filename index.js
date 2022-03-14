import express from 'express';
import cors from 'cors';

import studentsRouters from './routes/students.js';
import groupsRouters from './routes/groups.js';

const app = express();

app.use(cors());
app.use('/students', studentsRouters);
app.use('/groups', groupsRouters);
 
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("HEllo, it's me");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
