import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly age: string;
  @IsString()
  readonly gender: string;
  @IsString()
  readonly roles: string;
}
