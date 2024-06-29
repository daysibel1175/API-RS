import prismaClient from "../prisma";

interface RecoveryPasswordProps {
  email?: string;
  phoneNumber?: string;
}

class RecoveryService {
  async execute({ email, phoneNumber }: RecoveryPasswordProps) {
    if (!email || !phoneNumber) {
      throw new Error("Por favor, ingresa el correo electrónico o el número de teléfono para la recuperación de contraseña.");
    }
    const normalizedEmail = email.toLowerCase();

    // Genera un token o código de verificación (puedes usar una librería específica)
    const verificationCode = generateVerificationCode();

    const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
      prismaClient.lider.findFirst({
        where: {
          OR: [
            { email: normalizedEmail },
            { phoneNumber: phoneNumber },
          ],
        },
      }),
      prismaClient.psicologo.findFirst({
        where: {
          OR: [
            { email: normalizedEmail },
            { phoneNumber: phoneNumber },
          ],
        },
      }),
      prismaClient.educadorSocial.findFirst({
        where: {
          OR: [
            { email: normalizedEmail },
            { phoneNumber: phoneNumber },
          ],
        },
      }),
    ]);

    if (liderResult || psicologoResult || educadorSocialResult) {
      const user = liderResult || psicologoResult || educadorSocialResult;
      const username = user?.name || '';

      // Envía el token o código al usuario (por correo electrónico o SMS)
      sendVerificationCode(username, verificationCode);

      return username;
    } else {
      throw new Error("La cuenta no existe.");
    }
  }
}

// Función para generar un código de verificación aleatorio
function generateVerificationCode() {
  // Implementa tu lógica aquí (puede ser un número aleatorio o un token JWT)
  // Por ejemplo:
  return Math.floor(Math.random() * 1000000).toString();
}

// Función para enviar el código al usuario (correo electrónico o SMS)
function sendVerificationCode(username: string, code: string) {
  // Implementa el envío del código aquí (puedes usar servicios de correo o SMS)
  // Por ejemplo:
  console.log(`Se envió el código de verificación ${code} a ${username}`);
}

export { RecoveryService };




