import * as mongoose from 'mongoose';

export const CucuSchema = new mongoose.Schema({
  inviteUrl: String,
  topic: String,
  startDate: Date,
  createdDate: Date,
  userName: String,
  language: String,
  avatarId: String,
  clickCounter: Number,
});

