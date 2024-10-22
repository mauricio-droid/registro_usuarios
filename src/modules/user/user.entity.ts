import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//Modelo de la tabla Usuario

@Entity('usuario')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    fecha_nacimiento: string;

    @Column()
    correo: string;

    @Column()
    tipo_cliente: string;
}