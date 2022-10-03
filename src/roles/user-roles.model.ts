import {Column, Model, DataType, Table, ForeignKey} from 'sequelize-typescript';
import {Role} from './roles.model';
import {User} from '../users/users.model';

interface UserRolesCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends  Model<UserRoles, UserRolesCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}
