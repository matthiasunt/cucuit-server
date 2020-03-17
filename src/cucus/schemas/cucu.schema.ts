import * as mongoose from 'mongoose';

export const CucuSchema = new mongoose.Schema({
  inviteUrl: String,
  topic: String,
  startDateString: String,
  userName: String,
  language: String,
  avatarId: String,
  clickCounter: Number,
});

