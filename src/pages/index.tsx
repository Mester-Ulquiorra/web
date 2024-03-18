import { Elysia } from "elysia";
import BaseLayout from "../layouts/BaseLayout";

export default new Elysia().get("/", () => {
  return (
    <BaseLayout>
      <h1>Hello Bun</h1>
    </BaseLayout>
  );
});
