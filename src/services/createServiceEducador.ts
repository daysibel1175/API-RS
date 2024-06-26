import prismaClient from "../prisma/index";
import bcrypt from "bcrypt"; 

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
    const normalizedEmail = email.toLowerCase();
    const existingUser = await prismaClient.educadorSocial.findFirst({
      where: {
        OR: [{ cpf: cpf }, { email: normalizedEmail }],
      },
    });

    if (existingUser) {
      throw new Error ("Usuario ja existe" );
  
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const educador = await prismaClient.educadorSocial.create({
      data: {
        id,
        name    ,
        email: normalizedEmail   ,           
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
        password : hashedPassword ,  
        termos  ,   
      },
    });

    return educador;
  }
}

export { CreateServiceEducador};