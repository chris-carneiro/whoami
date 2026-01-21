import { asset } from "fresh/runtime";
import I18nText from "../islands/I18nText.tsx";

export default function Hero() {
  return (
    <>
      <div class="min-h-screen w-full bg-nigredo flex items-center justify-center">
        <div class="flex flex-col items-center gap-2">
          <div class="relative flex flex-col sm:inline-block">
            <div class="relative flex flex-col-reverse sm:items-start sm:text-left sm:inline-block">
              <h1 class="relative z-10 text-4xl font-bold sm:whitespace-nowrap">
                Firstname Lastname{" "}
                <span class="text-rubedo animate-pulse">.</span>
              </h1>

              <img
                src={asset("avatar.jpg")}
                class="mb-4 /* space below avatar on mobile */ rounded-full pointer-events-none sm:mb-0 sm:h-24 sm:w-24 /* Smaller on bigger screens */ sm:absolute sm:-top-20 sm:right-0 sm:translate-x-1/2"
              />
            </div>
            <h2 class="text-2xl font-semibold">
              <I18nText labelKey="hero.job.title" />
            </h2>
          </div>

          <section class="w-full max-w-7xl mx-auto my-16 md:my-24 lg:my-32 px-8 lg:px-16 2xl:px-0 flex flex-col gap-8 md:gap-16 justify-self-auto">
            <div class="relative flex flex-col items-center gap-y-5">
              <p class="text-justify leading-relaxed">
                <I18nText labelKey="hero.intro" />
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
