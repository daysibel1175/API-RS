import prismaClient from "../prisma"; 

class GetUser {
  async execute() {
    const users = await prismaClient.user.findMany(); 

    return users; //
  }
}

export { GetUser };
