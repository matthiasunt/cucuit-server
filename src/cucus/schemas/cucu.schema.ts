import * as mongoose from 'mongoose';

export const CucuSchema = new mongoose.Schema({
  inviteUrl: String,
  topic: String,
  description: String,
  type: String,
  startDate: Date,
  createdDate: Date,
  userName: String,
  language: String,
  avatarId: String,
  clickCounter: Number,
  uid: String,
});

// Hide uid
// CucuSchema.methods.toJSON = () => {
//   const cucu = this.toObject();
//   delete cucu.uid;
//   return cucu;
// };

