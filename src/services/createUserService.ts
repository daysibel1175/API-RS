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
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
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
