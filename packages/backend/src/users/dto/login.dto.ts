import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    description: '用户名'
  })
  name: string;
  @ApiProperty({
    description: '密码'
  })
  password: string
}
