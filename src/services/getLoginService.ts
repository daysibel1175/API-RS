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
    const findLogin = await prismaClient.user.findFirst({
        where:{
            email: email,
            password: password
        }
})
if(!findLogin){
    throw new Error ("conta nao existe!")
}
 await prismaClient.user.findFirst({
    where:{
       email: findLogin.email,
       password: findLogin.password
    }
 })
 return { message: "login feito"}
  }
}

export { GetLogin };




