import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });
const port = process.env.PORT || 8888;

app.setErrorHandler((error, req, reply) => {
  reply.code(400).send({ message: error.message });
});
app.listen({
  port:8888, 
  host:'0.0.0.0'
})
const start = async () => {
  try {
    await app.register(cors);
    await app.register(routes);
    console.log(`API REST funcionando en el puerto ${port}`);
  } catch (err) {
    console.error("Error al iniciar el servidor:", err);
    process.exit(1);
  }
};

start();
