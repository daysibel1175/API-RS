import { FastifyRequest, FastifyReply } from "fastify";
import { GetVoluntarios } from "../services/getVoluntarios";

class GetvoluntariosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getVoluntarios = new GetVoluntarios();
    const clientes = await getVoluntarios.execute();

    reply.send(clientes);
  }
}

export { GetvoluntariosController };