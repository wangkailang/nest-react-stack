import { Injectable } from '@nestjs/common';

const USERS = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
];

@Injectable()
export class UsersService {
  getAll() {
    return USERS;
  }
  getUser(id: number) {
    // TODO 用三个等号会报错 ？
    return USERS.find((item) => item.id == id);
  }
}
