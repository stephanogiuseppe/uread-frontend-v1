import { Column } from './Column.model';
import { User } from './User.model';
import { Comment } from './Comment.model';

export class Post {
  title: string;
  image: string;
  description: string;
  tags: string;
  likes: number;
  valid: boolean;
  active: boolean;
  column: Column;
  author: User;
  comments: Array<Comment>;
  createdAt: Date;
}
