import prismaClient from "../prisma"; 


interface GetLoginProps{
   email:string;
   password:string;
}

class GetLogin {
  async execute({email, password} : GetLoginProps){
    if(!email || !password){
        throw new Error("Preciso do Email e Senha")
    }
    
    const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
      prismaClient.lider.findFirst({
        where: {
          email: email,
          password: password,
        },
      }),
      prismaClient.psicologo.findFirst({
        where: {
          email: email,
          password: password,
        },
      }),
      prismaClient.educadorSocial.findFirst({
        where: {
          email: email,
          password: password,
        },
      }),
    ]);

    if (!liderResult && !psicologoResult && !educadorSocialResult) {
    throw new Error ("conta nao existe!")
}
const username = liderResult?.name || psicologoResult?.name || educadorSocialResult?.name;

return username;

  }
}

export { GetLogin };




