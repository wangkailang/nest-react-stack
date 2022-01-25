import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({
    description: '标题'
  })
  title: string;
  @ApiProperty({
    description: '内容'
  })
  content: string
}
