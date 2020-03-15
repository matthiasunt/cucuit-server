import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  inviteUrl: String,
  topic: String,
  startDate: Date, // ISO Date
  userName: String,
  language: String,
  image: String,
});

