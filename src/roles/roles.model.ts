import {Column, Model, DataType, Table, BelongsToMany} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {User} from '../users/users.model';
import {UserRoles} from './user-roles.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles'})
export class Role extends  Model<Role, RoleCreationAttrs> {

    @ApiProperty({ example: '1', description:'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'ADMIN', description:'Значение роли пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: 'some description', description:'Какое-то описание'})
    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
