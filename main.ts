import { Elysia } from "elysia";
import index from "./src/pages/index";
import login from "./src/pages/login";
import { staticPlugin } from "@elysiajs/static";
import { html } from "@elysiajs/html";
import loginfailed from "./src/pages/loginfailed";

const PORT = 80;
new Elysia()
  .use(staticPlugin())
  .use(html())
  .use(index)
  .use(login)
  .use(loginfailed)
  .listen(PORT);

console.log(`Listening on http://localhost:${PORT}`);
