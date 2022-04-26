import StudentsModel from '../models/students.js';

export const getStudentById = async (req, res) => {
  const { id } = req.params;
  let matchingStudent = [];
  try {
    matchingStudent = await StudentsModel.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }

  res.json({ students: matchingStudent });
};

// TODO Refactor this endpoint because for sure its not optimal
export const searchStudents = async (req, res) => {
  let { phrase } = req.params;

  phrase = phrase.toLowerCase().split(' ');
  const data = await StudentsModel.find();
  let matchingStudents = [];

  matchingStudents = data.filter(
    student =>
      student.firstName.toLowerCase().includes(phrase[0]) ||
      student.lastName.toLowerCase().includes(phrase[0])
  );

  if (phrase.length > 1) {
    matchingStudents = matchingStudents.filter(
      student =>
        student.firstName.toLowerCase().includes(phrase[1]) ||
        student.lastName.toLowerCase().includes(phrase[1])
    );
  }

  res.json({ students: matchingStudents });
};

export const handleError = (req, res) => res.json({ students: [] });
