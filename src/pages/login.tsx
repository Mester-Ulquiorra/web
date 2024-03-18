import { Elysia } from "elysia";
import LoginLayout from "../layouts/LoginLayout";
import LoginButton from "../components/LoginButton";

export default new Elysia().get("/login", () => {
  return (
    <LoginLayout title="Login">
      <h1 class={"text-12"}>Welcome to Ulquiorra</h1>
      <LoginButton />
    </LoginLayout>
  );
});
