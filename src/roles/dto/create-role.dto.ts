import {ApiProperty} from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({ example: 'ADMIN', description:'Значение роли пользователя'})
    readonly value: string;
    @ApiProperty({ example: 'some description', description:'Какое-то описание'})
    readonly description: string;
}
