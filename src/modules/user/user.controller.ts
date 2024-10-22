import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserDto } from './user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService){}

    //Endpoints del servicio

    @Get()
    async getUsers(): Promise<UserEntity[]>{
        return await this.usersService.getAllUsers();
    }

    @Post()
    async addUser(@Body() user: UserDto): Promise<UserEntity>{
        return await this.usersService.addUser(user);
    }

    @Put(':id')
    async editUser(@Param() params, @Body() user: UserEntity){
        return await this.usersService.editUser(params.id, user);
    }

    @Delete(':id')
    async deleteUser(@Param() params){
        return await this.usersService.deleteUser(params.id);
    }
}
