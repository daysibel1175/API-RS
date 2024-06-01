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
exports.routes = void 0;
const createUser_1 = require("./controllers/createUser");
const getUserController_1 = require("./controllers/getUserController");
const deleteUserController_1 = require("./controllers/deleteUserController");
const getLoginController_1 = require("./controllers/getLoginController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.post("/cadastro", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new createUser_1.CreateUser().handle(request, reply);
        }));
        fastify.get("/clientes", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new getUserController_1.GetUserController().handle(request, reply);
        }));
        fastify.get("/login", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new getLoginController_1.GetLoginController().handle(request, reply);
        }));
        fastify.delete("/delete", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new deleteUserController_1.DeleteUserController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
