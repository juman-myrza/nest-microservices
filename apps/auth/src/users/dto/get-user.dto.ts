import { IsEmpty, IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  @IsEmpty()
  _id: string;
}
