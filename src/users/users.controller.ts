import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  // param 使用
  // https://docs.nestjs.com/controllers#route-parameters
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }
}
