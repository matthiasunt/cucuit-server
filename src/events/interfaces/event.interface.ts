import { Document } from 'mongoose';

export interface Event extends Document {
  readonly date: Date;
  readonly name: string;
  readonly description: string;
}
