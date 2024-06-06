import prismaClient from "../../src/prisma/index";

interface CreateUserProps {
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
}

class CreateService {
  async execute({
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
  }: CreateUserProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const cliente = await prismaClient.lider.create({
      data: {
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
      },
    });

    return cliente;
  }
}

export { CreateService };


