import { PropsWithChildren } from "@kitajs/html";
import { Discord } from "./Icons";
import { getAPIRoute } from "../scripts/api";

export default function LoginButton({}: PropsWithChildren) {
  const loginRoute = getAPIRoute("auth");
  return (
    <form action={loginRoute} hx-disable>
      <button
        class={
          "rd-2 transition-125 text-6 inline-flex gap-2 bg-[--primary] p-2 font-bold text-[--on-primary] selection:bg-[--secondary] selection:text-[--on-secondary] hover:bg-[--secondary] hover:text-[--on-secondary]"
        }
        type="submit"
      >
        Login to <Discord />
      </button>
    </form>
  );
}
