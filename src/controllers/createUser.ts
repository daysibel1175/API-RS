import { FastifyRequest, FastifyReply } from "fastify";
import { CreateService } from "../services/createUserService";

class CreateUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      id            ,  
  name          ,
  email         ,   
  cpf           ,   
  birthDate    , 
  phoneNumber   ,
  organization ,
  area          ,
  rede_social   ,
  state         ,
  notes         ,
  password      ,
    } = request.body as {
      id            :string;  
  name          :string;
  email         :string;   
  cpf           :string;   
  birthDate    :string; 
  phoneNumber   :string;
  organization :string;
  area          :string;
  rede_social   :string;
  state         :string;
  notes         :string;
  password      :string;
    };

    const service = new CreateService();
    const cliente = await service.execute({
      id            ,  
      name          ,
      email         ,   
      cpf           ,   
      birthDate    , 
      phoneNumber   ,
      organization ,
      area          ,
      rede_social   ,
      state         ,
      notes         ,
      password      ,
    });

    reply.send(cliente);
  }
}

export { CreateUser };
