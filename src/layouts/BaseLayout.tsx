import { PropsWithChildren } from "@kitajs/html";
import Head from "../components/layout/Head";

export default function BaseLayout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <Head title={title ? `${title} | Ulquiorra` : "Ulquiorra"} />
      </head>
      <body class={"grid"}>
        <main class={"overflow-auto p-4"}>{children}</main>
      </body>
    </html>
  );
}
