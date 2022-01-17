import {
  Controller,
  Body,
  Get,
  Post,
} from '@nestjs/common';
import DataModel from 'database/dto/data.model';
import UserService from 'src/user/user.service';

@Controller('anonymous')
export default class UserController {
  constructor(private findService: UserService) {}

  @Get('allcomments')
  async getAll() {
    return await this.findService.execute();
  }

  @Post('addcomment')
  async save(@Body() comment: DataModel) {
    await this.findService.createComment(comment);
  }
}
