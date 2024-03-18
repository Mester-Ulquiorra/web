import { Elysia } from "elysia";
import LoginLayout from "../layouts/LoginLayout";

export default new Elysia().get("/loginfailed", () => {
  return (
    <LoginLayout title="Login failed">
      <h1 class={"text-12"}>Login failed!</h1>
      <a
        href="/login"
        class={
          "rd-2 text-6 transition-125 bg-[--primary] p-2 font-bold text-[--on-primary] hover:bg-[--secondary]"
        }
      >
        Please try again
      </a>
    </LoginLayout>
  );
});
