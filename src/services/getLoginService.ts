import prismaClient from "../prisma";

interface GetLoginProps {
  email: string;
  password: string;
}

class GetLogin {
  async execute({ email, password }: GetLoginProps) {
    if (!email || !password) {
      throw new Error("Preciso do Email e Senha");
    }

    const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
      prismaClient.lider.findFirst({
        where: {
          email,
          password, // Use password hashing for security (see note below)
        },
      }),
      prismaClient.psicologo.findFirst({
        where: {
          email,
          password, // Use password hashing for security (see note below)
        },
      }),
      prismaClient.educadorSocial.findFirst({
        where: {
          email,
          password, // Use password hashing for security (see note below)
        },
      }),
    ]);

    if (!liderResult && !psicologoResult && !educadorSocialResult) {
      const emailExists = await prismaClient.psicologo.findFirst({
        where: { email },
      });

      if (!emailExists) {
        throw new Error("Email não encontrado!");
      } else {
        throw new Error("Senha inválida!");
      }
    }

    const username = liderResult?.name || psicologoResult?.name || educadorSocialResult?.name;

    let roleMessage = "";

    if (liderResult?.name) {
      roleMessage = "Lider";
    } else if (psicologoResult?.name) {
      roleMessage = "Psicologo";
    } else if (educadorSocialResult?.name) {
      roleMessage = "Educadorsocial";
    } else {
      roleMessage = "usuario não tem rol.";
    }

    const user = { username, roleMessage };

    return user;
  }
}

export { GetLogin };






