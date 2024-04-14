import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudiantesService {
    private EstudianteRepository;
    constructor(EstudianteRepository: Repository<Estudiante>);
    create(createEstudianteDto: CreateEstudianteDto): Promise<CreateEstudianteDto & Estudiante>;
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
    update(id: number, UpdateEstudianteDto: UpdateEstudianteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
