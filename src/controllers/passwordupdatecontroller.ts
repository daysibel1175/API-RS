// passwordController.ts

import { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePasswordById } from "../services/psicologopasswordupdateService"; 

class UpdatePasswordHandler {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {id} = request.query as {id:string}
    const {password} = request.query as {password:string}


    const updatePassword = new  UpdatePasswordById();
    const newPassword = await updatePassword.execute({id, password});

    reply.send(newPassword);
  }
}

export { UpdatePasswordHandler };
