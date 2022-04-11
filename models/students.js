import mongoose from 'mongoose';

const studentsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  attendance: Number,
  average: Number,
  group: String,
  course: String,
});

const StudentsModel = mongoose.model('Students', studentsSchema);

export default StudentsModel;
