import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('login')
  async login(@Body('name') name: string, @Body('password') password: string) {
    return this.usersService.login(name, password);
  }
}
