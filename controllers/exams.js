import ExamsModel from '../models/exams.js';
import dateFormat from 'dateformat';

export const getAllExams = async (req, res) => {
  try {
    const allExams = await ExamsModel.find();
    res.json({ allExams });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const addExam = async (req, res) => {
  const title = req.query.title;
  const content = req.query.content;
  const hour = req.query.hour;
  const unixTimeStamp = req.query.date;
  const date = new Date(unixTimeStamp * 1000);

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
};

export const deleteExam = async (req, res) => {
  const { id } = req.params;
  try {
    await ExamsModel.deleteOne({ _id: id });
    res.json({ message: 'You cancelled class' });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
