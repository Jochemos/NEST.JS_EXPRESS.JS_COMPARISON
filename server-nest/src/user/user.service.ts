import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment_Entity } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Comment_Entity)
  private user: Repository<Comment_Entity>
  ){}

  public async execute(): Promise<Comment_Entity[]> {
    return await this.user.find();
  }

}
