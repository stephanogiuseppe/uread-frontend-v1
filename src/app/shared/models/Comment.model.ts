import { User } from './User.model';

export class Comment {
  description: string;
  assignedTo: Array<User>;
  createAt: Date;
}
