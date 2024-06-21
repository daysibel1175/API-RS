import prismaClient from "../prisma/index";

interface CreateEducadorProps {
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
}

class CreateServiceEducador {
  async execute({
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
  }: CreateEducadorProps) {
    const fields = {name    ,
        email   ,           
        cpf     ,       
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
        password   ,  
        termos   };

    for (const [key, value] of Object.entries(fields)) {
      if (!value) {
        throw new Error(`Preencha o campo ${key}`);
      }
    }
    const existingUser = await prismaClient.educadorSocial.findFirst({
      where: {
        OR: [
          { cpf: cpf },
          { email: email }
        ],
      },
    });

    if (existingUser) {
      throw new Error ("Usuario ya existe" );
  
    }
    const educador = await prismaClient.educadorSocial.create({
      data: {
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
        day,
        hour   ,
        notes   ,
        password   ,  
        termos  ,   
      },
    });

    return educador;
  }
}

export { CreateServiceEducador};