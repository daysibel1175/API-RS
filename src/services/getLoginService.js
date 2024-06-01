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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLogin = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetLogin {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            if (!email || !password) {
                throw new Error("Preciso do Email e Senha");
            }
            const findLogin = yield prisma_1.default.user.findFirst({
                where: {
                    email: email,
                    password: password
                }
            });
            if (!findLogin) {
                throw new Error("conta nao existe!");
            }
            yield prisma_1.default.user.findFirst({
                where: {
                    email: findLogin.email,
                    password: findLogin.password
                }
            });
            // Obtener el nombre de usuario
            const username = findLogin.name;
            return username;
        });
    }
}
exports.GetLogin = GetLogin;
