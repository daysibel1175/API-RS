import prismaClient from "../prisma"; 

interface DeleteUserProps{
    id:string
}

class DeleteUser {
  async execute({id} : DeleteUserProps){
    if(!id){
        throw new Error("Precisa do id")
    }
    const findUser = await prismaClient.user.findFirst({
        where:{
            id:id
        }
})
if(!findUser){
    throw new Error ("cliente nao existe!")
}
 await prismaClient.user.delete({
    where:{
        id: findUser.id
    }
 })
 return { message: "Usuario Deletado"}
  }
}

export { DeleteUser };