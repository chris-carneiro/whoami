import { PageProps } from "fresh";
import { Head } from "fresh/runtime";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>~ whoami</title>
      </Head>
      <body class="bg-nigredo text-citrinitas">
        <Component />
      </body>
    </html>
  );
}
