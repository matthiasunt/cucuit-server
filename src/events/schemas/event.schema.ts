import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  inviteUrl: String,
  topic: String,
  startDate: Date, // ISO Date
  userName: String,
  language: String,
  imageData: String,
});

// https://hangouts.google.com/call/B1JC24NwIfcVoQyCSq00AEEI
// https://join.skype.com/cJnfLxgVuWeN

