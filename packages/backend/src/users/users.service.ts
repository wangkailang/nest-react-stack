import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../password/password.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtDto } from './dto/jwt.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await this.passwordService.hashPassword(createUserDto.password);

    try {
      return await this.prismaService.user.create({
        data: {
          ...createUserDto,
          password: hashPassword
        }
      });
    } catch (e) {
      throw new Error(e);
    }
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

  // 参考 https://github.com/notiz-dev/nestjs-prisma-starter/blob/main/src/services/auth.service.ts
  async login(name: string, password: string): Promise<{ access_token: string }> {
    const user = await this.prismaService.user.findUnique({
      where: { name }
    });

    if (!user) {
      throw new NotFoundException(`No user found for name: ${name}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    return {
      access_token: this.generateAccessToken({ username: user.name, sub: user.id })
    };

  }

  private generateAccessToken(userDto: JwtDto): string {
    return this.jwtService.sign(userDto);
  }
}
