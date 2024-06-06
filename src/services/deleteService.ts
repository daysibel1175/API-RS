import prismaClient from "../prisma"; 

interface DeleteUserProps{
    id:string
}

class DeleteUser {
  async execute({id} : DeleteUserProps){
    if(!id){
        throw new Error("Precisa do id")
    }
    const findUser = await prismaClient.lider.findFirst({
        where:{
            id:id
        }
})
if(!findUser){
    throw new Error ("cliente nao existe!")
}
 await prismaClient.lider.delete({
    where:{
        id: findUser.id
    }
 })
 return { message: "Usuario Deletado"}
  }
}

export { DeleteUser };