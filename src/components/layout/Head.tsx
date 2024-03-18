interface Props {
  title: string;
}

export default function Head({ title }: Props) {
  return (
    <head>
      <meta charset="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <link rel="stylesheet" href="/public/uno.css"></link>
      <link rel="stylesheet" href="/public/style.css"></link>
      <title safe>{title}</title>
      <meta
        name="description"
        content="A GUI for Mester's Ulquiorra Discord bot"
      ></meta>
      <script src="https://unpkg.com/htmx.org@1.9.11"></script>
    </head>
  );
}
