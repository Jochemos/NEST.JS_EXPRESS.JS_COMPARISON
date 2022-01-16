import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Comment_Entity } from './user.entity';
import { DataModel } from '../models/data.model';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Comment_Entity)
  private user: Repository<Comment_Entity>
  ){}

  public async execute(): Promise<Comment_Entity[]> {
    return await this.user.find();
  }

  public async createComment(comment: DataModel): Promise<any> {
    const repo = getRepository(Comment_Entity);
    const result = repo.create(comment);
    await this.user.insert(result);
  }

}
