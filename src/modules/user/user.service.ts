import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>, //repositorio de tipo Usuario para acceder a la base de datos
    ){}

    //Métodos
    async addUser(user:UserDto): Promise<any> {
        let item = new UserEntity();
        item.nombre = user.nombre;
        item.fecha_nacimiento = user.fecha_nacimiento;
        item.correo = user.correo;
        item.tipo_cliente = user.tipo_cliente;
        const new_user = await this.userRepository.save(item);
        return new_user;
    }

    getAllUsers(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }

    async editUser(id: number, user: UserEntity): Promise<void>{
        let to_edit = await this.userRepository.findOneBy({id});
        let edited = Object.assign(to_edit, user);
        const user_edited = await this.userRepository.save(edited)
    }

    async deleteUser(id: number): Promise<void>{
        await this.userRepository.delete(id);
    }
}
