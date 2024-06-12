import { FastifyRequest, FastifyReply } from "fastify";
import { CreateServicePsicologo } from "../services/createServicePsicologo";

class CreatePsicologo {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
        id,
    name    ,
    email    ,         
    cpf      ,          
      birthDate      , 
    phoneNumber    ,          
    rede_social    ,        
    crp    ,          
    specialization    ,
    state    ,
    day    ,
    hour    ,
    notes    ,
    password    ,    
    termos   ,
    } = request.body as {
        id: string;
        name     :string;
        email     :string;         
        cpf       :string;          
        birthDate       :string; 
        phoneNumber     :string;          
        rede_social     :string;        
        crp     :string;          
        specialization     :string;
        state     :string;
        day     :string;
        hour     :string;
        notes     :string;
        password     :string;    
        termos    : boolean   
    };

    const service = new CreateServicePsicologo();
    const psicologo = await service.execute({
        id,
        name    ,
        email    ,         
        cpf      ,          
          birthDate      , 
        phoneNumber    ,          
        rede_social    ,        
        crp    ,          
        specialization    ,
        state    ,
        day    ,
        hour    ,
        notes    ,
        password    ,    
        termos   ,
    });

    reply.send(psicologo);
  }
}

export { CreatePsicologo };