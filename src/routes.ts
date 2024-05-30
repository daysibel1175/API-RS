import fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUser } from "./controllers/createUser";
import {GetUserController} from "./controllers/getUserController"
import { DeleteUserController } from "./controllers/deleteUserController";
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
    "/cadastro",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUser().handle(request, reply);
    }
  );

  fastify.get(
    "/clientes",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetUserController().handle(request, reply);
    }
  );
  fastify.delete(
    "/delete",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );
}
