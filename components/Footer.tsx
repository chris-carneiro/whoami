import I18nLabel from "./I18nLabel.tsx";

import { ExternalLink } from "./ExternalLink.tsx";

export interface FooterProps {
  labels?: Record<string, string>;
}

export default function Footer(props: FooterProps) {
  const footerLabel = props?.labels?.["footer.hireme"] ?? "footer.hireme";
  console.log("footer props", footerLabel);

  return (
    <footer class="sm:sticky bottom-0 bg-nigreydo min-h-9">
      <div class="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-(--breakpoint-xl) mx-auto w-full sm:px-6 md:px-8 text-base">
        <div class="flex flex-row items-center gap-1.5">
          <div class="min-w-32 min-h-8 flex items-center">
            <I18nLabel
              label={footerLabel}
              style="text-citrinitas font-bold animate-pulse"
            />
          </div>
          <div class="min-h-8 flex items-center">
            <ExternalLink href="https://www.malt.fr/profile/christophecarneiro" aria-label="Malt profile">
              <img
                src="/malt_logo.svg"
                alt="The malt.com freelancer platform pink logo"
                height={32}
                width={60}
              />
            </ExternalLink>
          </div>
        </div>

        <div class="flex items-center gap-8 min-h-8">
          <ExternalLink href="https://github.com/chris-carneiro/whoami">
            Source
          </ExternalLink>

          <ExternalLink href="https://mit-license.org">
            License
          </ExternalLink>

          <div class="min-w-40 flex items-center">
            <ExternalLink href="https://fresh.deno.dev">
              <img
                width="147"
                height="37"
                src="https://fresh.deno.dev/fresh-badge-dark.svg"
                alt="Made with Fresh"
              />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
