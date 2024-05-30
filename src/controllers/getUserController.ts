import { FastifyRequest, FastifyReply } from "fastify";
import { GetUser } from "../services/getUserService";

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getUser = new GetUser();
    const clientes = await getUser.execute();

    reply.send(clientes);
  }
}

export { GetUserController };

