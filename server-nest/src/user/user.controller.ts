import { Controller, Body, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { DataModel } from '../models/data.model';


@Controller('user')
export class UserController {
  constructor(private findService: UserService){}

  @Get("allcomments")
  async getAll() {
    return await this.findService.execute();
  }

  @Post('addcomment')
  async save(@Body() comment: DataModel){
    await this.findService.createComment(comment);
    return { "add": "success" };
  }
}
