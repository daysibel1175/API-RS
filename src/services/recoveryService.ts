// import prismaClient from "../prisma"; 


// interface RecoveryPasswordProps{
//     email?: string;
//     phoneNumber?: string;
// }

// class RecoveryService {
//   async execute({email, phoneNumber} : RecoveryPasswordProps){
//     if(!email || !phoneNumber){
//         throw new Error("Porfavor insira o email ou telefone de recupercao de senha")
//     }
//     const normalizedEmail = email.toLowerCase();

//     const [liderResult, psicologoResult, educadorSocialResult] = await Promise.all([
//       prismaClient.lider.findFirst({
//         where: {
//             OR: [
//                 { email: normalizedEmail },
//                 { phoneNumber: phoneNumber },
//               ],
//         },
//       }),
//       prismaClient.psicologo.findFirst({
//         where: {
//             OR: [
//                 { email: normalizedEmail },
//                 { phoneNumber: phoneNumber },
//               ],
//         },
//       }),
//       prismaClient.educadorSocial.findFirst({
//         where: {
//             OR: [
//                 { email: normalizedEmail },
//                 { phoneNumber: phoneNumber },
//               ],
//         },
//       }),
//     ]);
    
//     if (liderResult || psicologoResult || educadorSocialResult) {
      
//         const user = liderResult || psicologoResult || educadorSocialResult;
//         const username = user?.name;
  
        
//         return username; 
//       } else {
//         throw new Error("La cuenta no existe");
//       }
    
// }

// }

// export { RecoveryService};




