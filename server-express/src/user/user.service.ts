import { getRepository } from 'typeorm';
import { Comment_Entity } from './user.entity';

export class UserService {

  async execute() {
    const repo = await getRepository(Comment_Entity).find();
    return repo;
  }

}
