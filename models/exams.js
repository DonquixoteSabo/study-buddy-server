import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  title: String,
  date: {
    prettyDate: String,
    unixDate: String,
  },
  hour: String,
  content: String,
});

const ExamModel = mongoose.model('Exams', examSchema);

export default ExamModel;
