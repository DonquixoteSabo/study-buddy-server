import GroupsModel from '../models/groups.js';
import StudentsModel from '../models/students.js';

export const getAllGroups = async (req, res) => {
  try {
    const data = await GroupsModel.find();
    const groups = data.map(item => item.group);
    res.json({ groups });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const getStudentsByGroup = async (req, res) => {
  try {
    const matchingStudents = await StudentsModel.find({
      group: req.params.group.toUpperCase(),
    });

    res.json({ students: matchingStudents });
  } catch (error) {
    console.log(error);
    res.json({ students: [], message: error.message });
  }
};

export const handleError = (req, res) =>
  res.json({ error: 'Please provide the group ID' });
