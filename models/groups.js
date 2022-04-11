import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
  group: String,
});

const GroupsModel = mongoose.model('Groups', groupSchema);

export default GroupsModel;
