import { Document } from 'mongoose';

export interface Cucu extends Document {
  readonly inviteUrl: string;
  readonly topic: string;
  readonly startDateString: string; // ISO Date
  readonly userName: string;
  readonly language: string;
  readonly image: string;
}
