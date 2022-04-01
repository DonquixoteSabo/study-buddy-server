import mongoose from 'mongoose';

// export interface Class {
//   _id: string;
//   data: string;
//   hour: string;
//   title: string;
// }

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
