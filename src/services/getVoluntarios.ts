import prismaClient from "../prisma"; 

class GetVoluntarios {
  async execute() {
    const psicologo = await prismaClient.psicologo.findMany(); 
    const educador = await prismaClient.educadorSocial.findMany();
    return { psicologo, educador }; //
  }
}

export { GetVoluntarios };