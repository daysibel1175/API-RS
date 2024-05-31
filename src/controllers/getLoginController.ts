import { FastifyRequest, FastifyReply } from "fastify";
import { GetLogin } from "../services/getLoginService";

class GetLoginController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {email, password} = request.query as {email:string, password:string}
    const getLogin = new GetLogin();
    const Login = await getLogin.execute({email, password});

    reply.send(Login);
  }
}

export { GetLoginController };




