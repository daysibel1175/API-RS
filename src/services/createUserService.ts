import prismaClient from "../../src/prisma/index";

interface CreateUserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  organization: string;
  cnpj: string;
  area: string;
  state: string;
  address: string;
  notes: string;
  password: string;
  termos: boolean;
}

class CreateService {
  async execute({
    id,
    name,
    email,
    cpf,
    phoneNumber,
    organization,
    cnpj,
    area,
    state,
    address,
    notes,
    password,
    termos,
  }: CreateUserProps) {
    const fields = { name, email, cpf, phoneNumber, organization, cnpj, area, state, address, password, termos };

    for (const [key, value] of Object.entries(fields)) {
      if (!value) {
        throw new Error(`Preencha o campo ${key}`);
      }
    }
    const existingUser = await prismaClient.lider.findFirst({
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
    const cliente = await prismaClient.lider.create({
      data: {
        id,
        name,
        email,
        cpf,
        phoneNumber,
        organization,
        cnpj,
        area,
        state,
        address,
        notes,
        password,
        termos,
      },
    });

    return cliente;
  }
}

export { CreateService };
