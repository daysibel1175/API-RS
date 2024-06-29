import prismaClient from "../prisma/index";
import bcrypt from "bcrypt"; 

interface CreatePsicologoProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  birthDate: Date;
  phoneNumber: string;
  rede_social: string;
  crp: string;
  specialization: string;
  state: string;
  day: string;
  hour: string;
  notes: string;
  password: string;
  termos: boolean;
}

class CreateServicePsicologo {
  async execute({
    id,
    name,
    email,
    cpf,
    birthDate,
    phoneNumber,
    rede_social,
    crp,
    specialization,
    state,
    day,
    hour,
    notes,
    password,
    termos,
  }: CreatePsicologoProps) {
    const fields = {
      name,
      email,
      cpf,
      phoneNumber,
      crp,
      specialization,
      state,
      day,
      hour,
      password,
      termos,
    };

    for (const [key, value] of Object.entries(fields)) {
      if (!value) {
        throw new Error(`Preencha o campo ${key}`);
      }
    }

    const normalizedEmail = email.toLowerCase();
    const existingUser = await prismaClient.psicologo.findFirst({
      where: {
        OR: [{ cpf: cpf }, { email: normalizedEmail }],
      },
    });

    if (existingUser) {
      throw new Error("Usuário já existe");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const psicologo = await prismaClient.psicologo.create({
      data: {
        id,
        name,
        email: normalizedEmail,
        cpf,
        birthDate,
        phoneNumber,
        rede_social,
        crp,
        specialization,
        state,
        day,
        hour,
        notes,
        password: hashedPassword, 
        termos,
      },
    });

    return psicologo;
  }
}

export { CreateServicePsicologo };
