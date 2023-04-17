import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'wangxiaobai' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1510106069@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'wangxiaobai' })
  @IsNotEmpty()
  username: string;
}
