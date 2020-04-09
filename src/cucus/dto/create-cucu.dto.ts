export class CreateCucuDto {
  readonly inviteUrl: string;
  readonly topic: string;
  readonly description: string;
  readonly type: string;
  readonly startDate: Date;
  createdDate: Date;
  readonly userName: string;
  readonly language: string;
  readonly avatarId: string;
  clickCounter: number;
}
