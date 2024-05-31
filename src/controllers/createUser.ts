import { FastifyRequest, FastifyReply } from "fastify";
import { CreateService } from "../services/createUserService";

class CreateUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      name,
    lastName,
    email,
    cpf   ,
    birthDate   ,
    phoneNumber ,
    volunteerType,
    crm,
    area,
    state,
    availability,
    notes,
    password       
    } = request.body as {
      name: string;
  lastName: string;
  email: string;
  cpf  :string;
  birthDate    :string;
  phoneNumber:string;
  volunteerType: string;
  crm: string;
  area: string;
  state: string;
  availability: string;
  notes: string;
  password     :   string
    };

    const service = new CreateService();
    const cliente = await service.execute({
      name,
      lastName,
      email,
      cpf   ,
      birthDate   ,
      phoneNumber ,
      volunteerType,
      crm,
      area,
      state,
      availability,
      notes,
      password       
    });

    reply.send(cliente);
  }
}

export { CreateUser };
