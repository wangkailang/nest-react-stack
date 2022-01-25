import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: '用户名'
  })
  name: string;
  @ApiProperty({
    description: '用户别名'
  })
  nickName?: string;
  @ApiProperty({
    description: '密码'
  })
  password: string;
  @ApiProperty({
    description: '邮件'
  })
  email?: string;
}
