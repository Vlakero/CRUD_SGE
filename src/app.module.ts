import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiantes/entities/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'',
      entities:[Estudiante],
      synchronize:true

    }),
    EstudiantesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
