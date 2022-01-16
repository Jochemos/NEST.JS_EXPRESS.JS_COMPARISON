import { getRepository } from 'typeorm';
import { Comment_Entity } from './user.entity';
import { DataModel } from '../models/data.model';

export class UserService {

  async execute(): Promise<Comment_Entity[]> {
    const repo = await getRepository(Comment_Entity).find();
    return repo;
  }

  async createComment(comment: DataModel): Promise<any> {
    const repo = getRepository(Comment_Entity);
    const result = repo.create(comment);
    await repo.save(result);
  }

}
