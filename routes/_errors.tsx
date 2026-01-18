import { HttpError } from "https://jsr.io/@fresh/core/2.2.0/src/error.ts";
import { PageProps } from "https://jsr.io/@fresh/core/2.2.0/src/render.ts";


export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return <h1>404 - Page not found</h1>;
    }
  }

  return <h1>Oh no...</h1>;
}