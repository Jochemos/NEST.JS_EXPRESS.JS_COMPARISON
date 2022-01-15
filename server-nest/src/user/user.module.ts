import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment_Entity } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment_Entity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
