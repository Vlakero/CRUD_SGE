"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstudianteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estudiante_dto_1 = require("./create-estudiante.dto");
class UpdateEstudianteDto extends (0, mapped_types_1.PartialType)(create_estudiante_dto_1.CreateEstudianteDto) {
}
exports.UpdateEstudianteDto = UpdateEstudianteDto;
//# sourceMappingURL=update-estudiante.dto.js.map