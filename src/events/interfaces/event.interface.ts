import { Document } from 'mongoose';

export interface Event extends Document {
  readonly date: Date;
  readonly title: string;
  readonly description: string;
}
