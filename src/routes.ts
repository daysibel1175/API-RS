import fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUser } from "./controllers/createUser";
import { GetUserController } from "./controllers/getUserController";
import { DeleteUserController } from "./controllers/deleteUserController";
import { GetLoginController } from "./controllers/getLoginController";
import { CreatePsicologo } from "./controllers/createPsicologo";
import { GetvoluntariosController } from "./controllers/getvoluntariosController";
import { CreateEducador } from "./controllers/createEducador";
import { UpdatePasswordHandler } from "./controllers/passwordupdatecontroller";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post(
    "/cadastro/lideres",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUser().handle(request, reply);
    }
  );

  fastify.post(
    "/cadastro/psicologos",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreatePsicologo().handle(request, reply);
    }
  );

  fastify.post(
    "/cadastro/educador",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateEducador().handle(request, reply);
    }
  );

  fastify.get(
    "/lideres",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetUserController().handle(request, reply);
    }
  );
  fastify.put(
    "/atualizarSenha",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdatePasswordHandler().handle(request, reply);
    }
  );
  fastify.get(
    "/voluntarios",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetvoluntariosController().handle(request, reply);
    }
  );
  fastify.post(
    "/login/usuarios",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetLoginController().handle(request, reply);
    }
  );
  fastify.delete(
    "/delete",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );
}
