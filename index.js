import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import studentsRouters from './routes/students.js';
import groupsRouters from './routes/groups.js';
import notesRouters from './routes/notes.js';
import examsRouters from './routes/exams.js';

const app = express();

app.use(cors());
app.use('/students', studentsRouters);
app.use('/notes', notesRouters);
app.use('/groups', groupsRouters);
app.use('/exams', examsRouters);

const PORT = process.env.PORT || 5000;

// modify password and to env-variables
const CONNECTION_URL = `mongodb+srv://teacherstudybuddy:HXMu2gHaFJY3IjOC@studybuddy.h2pht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(err => console.log(err.message));

app.get('/', (req, res) => {
  res.json({ hello: "Hello, it's me" });
});

// app.listen(PORT, () => {
//   console.log(`Server is listening on ${PORT}`);
// });
