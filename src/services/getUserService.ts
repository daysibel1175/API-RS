import prismaClient from "../prisma"; 

class GetUser {
  async execute() {
    const users = await prismaClient.lider.findMany(); 

    return users; //
  }
}

export { GetUser };
