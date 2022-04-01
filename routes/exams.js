import express from 'express';
import ExamsModel from '../models/exams.js';
import dateFormat from 'dateformat';

const router = express.Router();

// const examSchema = mongoose.Schema({
//   title: String,
//   date: {
//     prettyDate: String,
//     date: Date,
//   },
//   hour: String,
//   content: String,
// });

router.get('/', async (req, res) => {
  try {
    const allExams = await ExamsModel.find();
    res.json({ allExams });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  let title = req.query.title;
  let content = req.query.content;
  let hour = req.query.hour;
  let date = req.query.date;
  console.log(req.query.date);

  date = new Date(date);
  date = date.getUTCDate();

  const newExam = new ExamsModel({
    title,
    content,
    hour,
    date: {
      prettyDate: dateFormat(date, 'dd/mm'),
      unixDate: req.query.date,
    },
  });

  try {
    await newExam.save();
    res.json(newExam);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

//ADDING NEW NOTE
// localhost:5000/notes/?title="TITLE"12&content=Hello how u doin
// router.post('', addNewNote);
//
// router.delete('/:id', deleteNote);

export default router;
