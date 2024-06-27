// import { FastifyRequest, FastifyReply } from "fastify";
// import { RecoveryService } from "../services/recoveryService";

// class RecoveryPassword {
//   async handle(request: FastifyRequest<{ email?: string; phoneNumber?: string }>, reply: FastifyReply) {
//     const { email, phoneNumber } = request.body as  {email:string, phoneNumber:string};

//     if (!email && !phoneNumber) {
//       throw new Error("Por favor, insira o email ou telefone de recuperação de senha.");
//     }

//     const recoveryService = new RecoveryService();

//     try {
//       const username = await recoveryService.execute({ email, phoneNumber });
//       reply.send({ username }); // Send username in the response
//     } catch (error) {
//       console.error("Error during password recovery:", error);
//       reply.code(500).send({ message: "An error occurred. Please try again later." }); // Handle errors gracefully
//     }
//   }
// }

// export { RecoveryPassword };
