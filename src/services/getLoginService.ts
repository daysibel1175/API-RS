import prismaClient from "../prisma";
import bcrypt from "bcrypt"; // Importa bcrypt

interface GetLoginProps {
  email: string;
  password: string;
}

class GetLogin {
  async execute({ email, password }: GetLoginProps) {
    console.log('Contraseña ingresada por el usuario:', password);

    if (!email || !password) {
      throw new Error("Preciso do Email e Senha");
    }

    const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
      prismaClient.lider.findFirst({
        where: {
          email,
        },
      }),
      prismaClient.psicologo.findFirst({
        where: {
          email,
        },
      }),
      prismaClient.educadorSocial.findFirst({
        where: {
          email,
        },
      }),
    ]);
  
    let userResult = null;

    if (liderResult) {
      userResult = liderResult;
    } else if (psicologoResult) {
      userResult = psicologoResult;
    } else if (educadorSocialResult) {
      userResult = educadorSocialResult;
    } else {
      throw new Error("Email não encontrado!");
    }

   
    // Solicitar la contraseña almacenada encriptada
    const storedHashedPassword = userResult.password;

    // Mostrar las dos contraseñas para comparación
    console.log('Contraseña ingresada por el usuario:', password);
    console.log('Contraseña almacenada encriptada:', storedHashedPassword);

    // Comparar las contraseñas
    const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

    if (!passwordMatch) {
      // Mostrar el error con las dos contraseñas
      throw new Error(
        `Senha inválida! \nContraseña ingresada: ${password} \nContraseña almacenada: ${storedHashedPassword}`
      );
    }

    const username = userResult.name;
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





