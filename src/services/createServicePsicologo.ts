import prismaClient from "../prisma/index";

interface CreatePsicologoProps {
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
  data     :string;
  hour     :string;
  notes     :string;
  password     :string;    
  termos    : boolean     
  

}

class CreateServicePsicologo {
  async execute({
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
    data    ,
    hour    ,
    notes    ,
    password    ,    
    termos   ,    
  }: CreatePsicologoProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const psicologo = await prismaClient.psicologo.create({
      data: {
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
        data    ,
        hour    ,
        notes    ,
        password    ,    
        termos   ,    
      },
    });

    return psicologo;
  }
}

export { CreateServicePsicologo };
