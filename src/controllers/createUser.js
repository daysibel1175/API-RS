"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const createUserService_1 = require("../services/createUserService");
class CreateUser {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, email, cpf, birthDate, phoneNumber, volunteerType, crm, area, state, availability, notes, password } = request.body;
            const service = new createUserService_1.CreateService();
            const cliente = yield service.execute({
                name,
                lastName,
                email,
                cpf,
                birthDate,
                phoneNumber,
                volunteerType,
                crm,
                area,
                state,
                availability,
                notes,
                password
            });
            reply.send(cliente);
        });
    }
}
exports.CreateUser = CreateUser;
