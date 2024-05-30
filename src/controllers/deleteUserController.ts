import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUser } from "../services/deleteService";

class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {id} = request.query as {id:string}

    const deleteUser = new  DeleteUser();
    const cliente = await deleteUser.execute({id});

    reply.send(cliente);
  }
}

export {  DeleteUserController };
