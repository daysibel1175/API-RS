// criptografar senhas existentes
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

class PasswordEncrypter {
  private readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async encryptPasswordsForLeaders(): Promise<void> {
    const leaders = await this.prismaClient.lider.findMany();
    for (const leader of leaders) {
      const hashedPassword = await bcrypt.hash(leader.password, 10);
      await this.prismaClient.lider.update({
        where: { id: leader.id },
        data: { password: hashedPassword },
      });
    }
    console.log("Encriptación de contraseñas completada para Líderes.");
  }

  async encryptPasswordsForPsychologists(): Promise<void> {
    const psychologists = await this.prismaClient.psicologo.findMany();
    for (const psychologist of psychologists) {
      const hashedPassword = await bcrypt.hash(psychologist.password, 10);
      await this.prismaClient.psicologo.update({
        where: { id: psychologist.id },
        data: { password: hashedPassword },
      });
    }
    console.log("Encriptación de contraseñas completada para Psicólogos.");
  }

  async encryptPasswordsForSocialEducators(): Promise<void> {
    const socialEducators = await this.prismaClient.educadorSocial.findMany();
    for (const socialEducator of socialEducators) {
      const hashedPassword = await bcrypt.hash(socialEducator.password, 10);
      await this.prismaClient.educadorSocial.update({
        where: { id: socialEducator.id },
        data: { password: hashedPassword },
      });
    }
    console.log("Encriptación de contraseñas completada para Educadores Sociais.");
  }

  async encryptAllPasswords(): Promise<void> {
    await this.encryptPasswordsForLeaders();
    await this.encryptPasswordsForPsychologists();
    await this.encryptPasswordsForSocialEducators();
    console.log("Proceso de encriptación de contraseñas general completado.");
  }
}

// Crea una instancia de PrismaClient
const prisma = new PrismaClient();

// Crea una instancia de PasswordEncrypter
const passwordEncrypter = new PasswordEncrypter(prisma);

// Llama al método encryptAllPasswords
passwordEncrypter.encryptAllPasswords()
  .then(() => {
    console.log('Proceso de encriptación de contraseñas completado.');
    // Puedes realizar otras acciones aquí después de la encriptación.
  })
  .catch((error) => {
    console.error('Error al encriptar contraseñas:', error);
  });

