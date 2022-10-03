import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {RolesService} from './roles.service';
import {Role} from './roles.model';
import {CreateRoleDto} from './dto/create-role.dto';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @ApiOperation({ summary: 'Создание роли', })
    @ApiResponse({status: 200, type: Role})

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.createRole(roleDto)
    }

    @ApiOperation({ summary: 'Получение ролей', })
    @ApiResponse({status: 200, type: [Role]})

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value)
    }
}
