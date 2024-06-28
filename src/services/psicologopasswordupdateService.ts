import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prismaClient = new PrismaClient();

interface UpdatePasswordByIdProps {
  id: string;
  password: string;
}

class UpdatePasswordById {
  async execute({ id, password }: UpdatePasswordByIdProps) {
    if (!id || !password) {
      throw new Error("Precisa das credenciais");
    }

    let user;
    const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
      prismaClient.lider.findFirst({
        where: { id },
      }),
      prismaClient.psicologo.findFirst({
        where: { id },
      }),
      prismaClient.educadorSocial.findFirst({
        where: { id },
      }),
    ]);

    for (const result of [liderResult, psicologoResult, educadorSocialResult]) {
      if (result) {
        user = result;
        break; // Found user, stop searching
      }
    }

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (liderResult) {
      await prismaClient.lider.update({
        where: { id: id },
        data: { password: hashedPassword },
      });
    } else if (psicologoResult) {
      await prismaClient.psicologo.update({
        where: { id: id },
        data: { password: hashedPassword },
      });
    } else if (educadorSocialResult) {
      await prismaClient.educadorSocial.update({
        where: { id: id },
        data: { password: hashedPassword },
      });
    }

    return { message: "Senha atualizada com sucesso" };
  }
}

export { UpdatePasswordById };









