import {Column, Model, DataType, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users'})
export class User extends  Model<User, UserCreationAttrs> {

    @ApiProperty({ example: '1', description:'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'some@mail.com', description:'email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: '12345', description:'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isBanned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @Column({type: DataType.STRING, allowNull: true})
    name: string;
}
