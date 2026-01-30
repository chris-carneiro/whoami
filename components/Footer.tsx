import I18nText from "../islands/I18nText.tsx";
import { ExternalLink } from "./ExternalLink.tsx";

export default function Footer() {
  return (
    <footer class="sm:sticky bottom-0 bg-nigreydo">
      <div class="flex flex-col sm:flex-row gap-4 py-2 justify-between items-center max-w-(--breakpoint-xl) mx-auto w-full sm:px-6 md:px-8 text-base">
        <div class="flex flex-row items-center gap-1.5">
          <I18nText labelKey="footer.hireme" style="text-citrinitas font-bold animate-pulse"/>
          <div class="flex">
            <ExternalLink
              href="https://www.malt.fr/profile/christophecarneiro"
              aria-label="Malt profile"
              
            >
              <img
                src="/malt_logo.svg"
                alt="The malt.com freelancer platform pink logo"
                height={32}
                width={60}
              />
            </ExternalLink>
          </div>
        </div>

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

        {/* <div class="flex flex-row-reverse w-full px-2">
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
        </div> */}
      </div>
    </footer>
  );
}
