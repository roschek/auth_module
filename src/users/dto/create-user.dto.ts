import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'some@mail.com', description:'email'})
    readonly email: string;
    @ApiProperty({ example: '12345', description:'Пароль'})
    readonly password: string;
}
