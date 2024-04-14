import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Estudiante {
    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    nombreCompleto: string;

    @Column()
    matricula: string;

    @Column()
    carrera: string;

    @Column()
    curp: string;

    @Column()
    grupo: string;

    @Column()
    cuatrimestre: string;

    @Column()
    fechaNacimiento: string;

    @Column()
    sexo: string;

    @Column()
    division: string;

    @Column()
    seguro: string;

    @Column({ default: false })
    reingreso: boolean;
}
