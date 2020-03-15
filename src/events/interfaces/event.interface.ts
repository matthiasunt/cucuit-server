import { Document } from 'mongoose';

export interface Event extends Document {
  readonly inviteUrl: string;
  readonly topic: string;
  readonly description: string,
  readonly startDate: Date; // ISO Date
  readonly userName: string;
  readonly language: string;
  readonly image: string;
}
