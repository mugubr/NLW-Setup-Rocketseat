//Back-end API RESTful
import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes)
//Prisma (ORM)
//npx prisma init --datasource-provider <DB>
//npx prisma migrate dev
//npx prisma studio

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running at http://localhost:3333");
  });
