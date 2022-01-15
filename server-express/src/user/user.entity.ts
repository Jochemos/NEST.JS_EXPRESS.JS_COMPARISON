import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


@Entity({ name: 'express_comments' })
export class Comment_Entity {
  @PrimaryGeneratedColumn('increment', { name: 'commentid' })
  commentId: number;

  @Column({ name: 'author' })
  author: string;

  @Column({ name: 'comment', length: 500 })
  comment: string;

  @CreateDateColumn({ name: 'date', type: 'timestamp' })
  created_At: Date;
}
