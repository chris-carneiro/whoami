import { asset } from "fresh/runtime";
import I18nText from "../islands/I18nText.tsx";

export default function Hero() {
  return (
    <>
      <div class="min-h-screen min-w-0 w-full bg-nigredo flex items-center justify-center">
        <div class="flex flex-col items-center gap-2">
          <div class="relative flex flex-col sm:inline-block py-16">
            <div class="relative flex min-w-0 flex-col-reverse items-center sm:items-start sm:text-left sm:inline-block">
              <h1 class="relative z-10 text-5xl my-1.5 font-bold whitespace-nowrap ">
                Firstname Lastname{" "}
                <span class="text-rubedo animate-pulse">.</span>
              </h1>

              <img
                src={asset("avatar.jpg")}
                class="mb-4 /* space below avatar on mobile */ rounded-full pointer-events-none sm:mb-0 sm:h-40 sm:w-40 /* Smaller on bigger screens */ sm:absolute sm:-top-36 sm:right-0 sm:translate-x-1/2"
              />
            </div>
            <h2 class="text-3xl font-semibold">
              <I18nText labelKey="hero.job.title" />
            </h2>
          </div>
          <div class="relative flex flex-col sm:inline-block">
            <section class="w-full min-w-0 max-w-7xl mx-auto px-12 sm:px-20 flex flex-col gap-8 md:gap-16 justify-self-auto">
              <div class="relative flex flex-col items-center gap-y-5 
            min-h-96 md:min-h-60 lg:min-h-48">
                <I18nText
                  labelKey="hero.intro"
                  style="text-justify text-xl leading-relaxed text-albedo"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
