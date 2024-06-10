import { FastifyRequest, FastifyReply } from "fastify";
import { CreateService } from "../services/createUserService";

class CreateUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      id,
      name,
      email,
      cpf,
      phoneNumber,
      organization,
      cnpj,
      area,
      state,
      address,
      notes,
      password,
      termos,
    } = request.body as {
      id: string;
      name: string;
      email: string;
      cpf: string;
      phoneNumber: string;
      organization: string;
      cnpj: string;
      area: string;
      state: string;
      address: string;
      notes: string;
      password: string;
      termos: boolean;
    };

    const service = new CreateService();
    const cliente = await service.execute({
      id,
      name,
      email,
      cpf,
      phoneNumber,
      organization,
      cnpj,
      area,
      state,
      address,
      notes,
      password,
      termos,
    });

    reply.send(cliente);
  }
}

export { CreateUser };
