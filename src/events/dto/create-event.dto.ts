export class CreateEventDto {
  readonly inviteUrl: string;
  readonly topic: string;
  readonly startDate: Date; // ISO Date
  readonly userName: string;
  readonly language: string;
  readonly image: string;
}
