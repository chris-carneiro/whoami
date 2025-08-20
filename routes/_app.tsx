import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

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
          <link rel="stylesheet" href="/styles.css" />
        </Head>
        <body class="bg-albedo text-nigredo">
          <Component />
        </body>
      </html>
  );
}
