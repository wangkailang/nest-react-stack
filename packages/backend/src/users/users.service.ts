import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto
    })
  }

  findAll() {
    return this.prismaService.user.findMany({ where: {} })
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      }
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto
    })
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id }
    })
  }
}
