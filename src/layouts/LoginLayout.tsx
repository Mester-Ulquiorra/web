import Head from "../components/layout/Head";
import { PropsWithChildren } from "@kitajs/html";

export default function LoginLayout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <html lang="en">
      <head>
        <Head title={`${title} | Ulquiorra`} />
      </head>
      <body
        class={
          "flex-justify-center flex-items-center flex min-h-dvh flex-col gap-4 bg-[--bg] text-center text-[--text]"
        }
        hx-boost="true"
      >
        {children}
      </body>
    </html>
  );
}
