"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const typeorm_1 = require("typeorm");
let Estudiante = class Estudiante {
};
exports.Estudiante = Estudiante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estudiante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "nombreCompleto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "curp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "cuatrimestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "division", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "seguro", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Estudiante.prototype, "reingreso", void 0);
exports.Estudiante = Estudiante = __decorate([
    (0, typeorm_1.Entity)()
], Estudiante);
//# sourceMappingURL=estudiante.entity.js.map