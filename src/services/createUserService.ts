import prismaClient from "../../src/prisma/index";

interface CreateUserProps {
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
  password:string;
}

class CreateService {
  async execute({
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
  }: CreateUserProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const cliente = await prismaClient.user.create({
      data: {
        name,
        lastName,
        email,
        cpf,
        birthDate,
        phoneNumber,
        volunteerType,
        crm,
        area,
        state,
        availability,
        notes,
        password,      
      },
    });

    return cliente;
  }
}

export { CreateService };


