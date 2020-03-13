import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  date: Date,
  title: String,
  description: String,
});
