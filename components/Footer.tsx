import { ExternalLink } from "./ExternalLink.tsx";

export default function Footer() {
  return (
    <footer class="sm:sticky bottom-0 bg-nigreydo">
      <div class="flex flex-col sm:flex-row gap-4 py-2 justify-between items-center max-w-(--breakpoint-xl) mx-auto w-full sm:px-6 md:px-8 text-base">
        <div class="flex gap-8">
          <ExternalLink
            href="https://github.com/chris-carneiro/whoami"
            class="text-foreground-secondary hover:underline"
          >
            Source
          </ExternalLink>
          <ExternalLink
            href="https://mit-license.org"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground-secondary hover:underline"
          >
            License
          </ExternalLink>
        </div>

        <div>
          <ExternalLink
            href="https://fresh.deno.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="147"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
