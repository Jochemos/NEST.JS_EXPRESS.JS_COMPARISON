import { getRepository } from 'typeorm';
import CommentEntity from '../../database/entities/user.entity.ts';
import DataModel from '../../database/dto/data.model.ts';

export default class UserService {
  async execute(): Promise<CommentEntity[]> {
    return await getRepository(CommentEntity).find();
  }

  async createComment(comment: DataModel): Promise<any> {
    const repo = getRepository(CommentEntity);
    const result = repo.create(comment);
    await repo.save(result);
  }
}
