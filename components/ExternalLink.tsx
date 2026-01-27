import { ComponentProps } from "preact";

export function ExternalLink(props: ComponentProps<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
