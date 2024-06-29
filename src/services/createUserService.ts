import prismaClient from "../../src/prisma/index";
import bcrypt from "bcrypt"; 

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
    const normalizedEmail = email.toLowerCase();
    const existingUser = await prismaClient.lider.findFirst({
      where: {
        OR: [
          { cpf: cpf },
          { email: normalizedEmail }
        ],
      },
    });

    if (existingUser) {
      throw new Error ("Usuario ja existe" );
  
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const cliente = await prismaClient.lider.create({
      data: {
        id,
        name,
        email: normalizedEmail,
        cpf,
        phoneNumber,
        organization,
        cnpj,
        area,
        state,
        address,
        notes,
        password: hashedPassword,
        termos,
      },
    });

    return cliente;
  }
}

export { CreateService };
