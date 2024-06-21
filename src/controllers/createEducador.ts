import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServiceEducador } from "../services/createServiceEducador";

class CreateEducador {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
        id,
        name    ,
        email   ,           
        cpf     ,       
          birthDate   ,
        phoneNumber   ,         
        rede_social   ,       
        certificate   ,         
          profession  ,
        state   ,
        city,
        neighborhood,
      availability,
        day   ,
        hour   ,
        notes   ,
        password   ,  
        termos  , 
    } = request.body as {
        id:string;
        name     :string;
        email   :string ;           
        cpf     :string ;       
          birthDate:Date;
        phoneNumber   :string ;         
        rede_social   :string ;       
        certificate   :string ;         
          profession   :string
        state    :string;
        city:string;
        neighborhood:string;
      availability:string;
        day    :string;
        hour    :string;
        notes    :string;
        password    :string;  
        termos   : boolean  ;     
    };

    const service = new CreateServiceEducador();
    const educador = await service.execute({
        id,
        name    ,
        email   ,           
        cpf     ,       
          birthDate   ,
        phoneNumber   ,         
        rede_social   ,       
        certificate   ,         
          profession  ,
        state   ,
        city,
        neighborhood,
      availability,
        day   ,
        hour   ,
        notes   ,
        password   ,  
        termos  , 
    });

    reply.send(educador);
  }
}

export { CreateEducador };