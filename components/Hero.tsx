import I18nLabel from "./I18nLabel.tsx";
import { ExternalLink } from "./ExternalLink.tsx";

// Fix Cumulative Layout shift by giving container div a min height

export interface HeroProps {
  heroTitle?: string;
  heroIntro?: string
}

export default function Hero(props: HeroProps) {

  return (
    <section class="min-h-screen bg-nigredo flex items-center">
      <div class="mx-auto w-full max-w-6xl px-[clamp(1.5rem,4vw,3rem)] flex flex-col justify-between">
        <div class="flex flex-col gap-12">
          <div class="flex min-h-28 md:min-h-24">
            <header>
              <div class="text-xl sm:text-3xl md:text-4xl font-bold">
                Chris Carneiro<span class="text-rubedo">.</span>
              </div>

              <div class="min-h-10">
                <I18nLabel
                  label={props.heroTitle}
                  style="text-xl md:text-3xl font-semibold my-4"
                />
              </div>
            </header>
          </div>

          <div class="min-h-60dvh sm:min-h-72">
            <I18nLabel
              label={props.heroIntro}
              style="text-justify md:text-xl leading-relaxed text-albedo"
            />
          </div>

          <div class="flex justify-end">
            <footer class="flex gap-4">
              <ExternalLink
                href="https://github.com/chris-carneiro"
                aria-label="GitHub"
              >
                <img src="/github.png" alt="LinkedIn" class="h-8 w-auto" />

              </ExternalLink>

              <ExternalLink
                href="https://www.linkedin.com/in/chriscarneiro/"
                aria-label="LinkedIn"
              >
                <img src="/linkedin-white.png" alt="LinkedIn" class="h-8 w-auto" />
              </ExternalLink>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
