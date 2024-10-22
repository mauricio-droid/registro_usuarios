import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


@Module({
  imports: [ModulesModule, TypeOrmModule.forRoot({
    //conexión con la base de datos
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123",
    "database": "registro_usuarios_db",
    "entities": [join(__dirname, '**', '*.entity.{ts,js}')],
    "synchronize": true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
