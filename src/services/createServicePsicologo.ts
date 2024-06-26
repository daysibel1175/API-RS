import prismaClient from "../prisma/index";

interface CreatePsicologoProps {
  id: string;
  name     :string;
  email     :string;         
  cpf       :string;          
  birthDate       :Date; 
  phoneNumber     :string;          
  rede_social     :string;        
  crp     :string;          
  specialization     :string;
  state     :string;
  day    :string;
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
    day,
    hour    ,
    notes    ,
    password    ,    
    termos   ,    
  }: CreatePsicologoProps) {
    const fields = { name    ,
      email    ,         
      cpf      ,          
      phoneNumber    ,          
      crp    ,          
      specialization    ,
      state    ,
      day,
      hour    ,
      password    ,    
      termos   ,   };

  for (const [key, value] of Object.entries(fields)) {
    if (!value) {
      throw new Error(`Preencha o campo ${key}`);
    }
  }
  const normalizedEmail = email.toLowerCase();
  const existingUser = await prismaClient.educadorSocial.findFirst({
    where: {
      OR: [
        { cpf: cpf },
        { email: normalizedEmail }
      ],
    },
  });
  if (existingUser) {
    throw new Error ("Usuario ya existe" );

  }
    const psicologo = await prismaClient.psicologo.create({
      data: {
        id,
        name    ,
        email: normalizedEmail,       
        cpf      ,          
          birthDate      , 
        phoneNumber    ,          
        rede_social    ,        
        crp    ,          
        specialization    ,
        state,
        day,
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
