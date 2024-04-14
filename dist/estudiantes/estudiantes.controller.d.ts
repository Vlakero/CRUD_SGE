import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudiantesController {
    private readonly estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    create(createEstudianteDto: CreateEstudianteDto): Promise<CreateEstudianteDto & import("./entities/estudiante.entity").Estudiante>;
    findAll(): Promise<import("./entities/estudiante.entity").Estudiante[]>;
    findOne(id: string): Promise<import("./entities/estudiante.entity").Estudiante>;
    update(id: string, updateEstudianteDto: UpdateEstudianteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
