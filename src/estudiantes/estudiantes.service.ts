import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudiantesService {

  constructor(
    @InjectRepository(Estudiante)
    private EstudianteRepository: Repository<Estudiante>
  ) {

  }
  async create(createEstudianteDto: CreateEstudianteDto) {
    return await this.EstudianteRepository.save(createEstudianteDto);
  }

  async findAll() {
    return await this.EstudianteRepository.find();
  }

  async findOne(id: number) {
    return await this.EstudianteRepository.findOne({  });
  }

  async update(id: number, UpdateEstudianteDto: UpdateEstudianteDto) {
    return await this.EstudianteRepository.update( id, UpdateEstudianteDto);
  }

  async remove(id: number) {
    return await this.EstudianteRepository.delete(id);
  }
}
