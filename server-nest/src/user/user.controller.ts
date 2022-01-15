import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private findService: UserService){}

  @Get("allcomments")
  async getAll() {
    return await this.findService.execute();
  }
}
