import { asset } from "$fresh/runtime.ts";
import I18nText from "../islands/I18nText.tsx";

export default function Hero() {
  return (
    <div class=" h-screen flex items-center justify-center bg-nigredo">
      <div class="relative sm:mt-14 sm:mb-14 mt-12 mb-4 flex flex-col items-center gap-y-5 md:flex-row">
          <div class="z-10">
            <h1 class="text-4xl font-bold">
              Firstname Lastname<span class="text-rubedo animate-pulse">.</span>
            </h1>
            <h2 text-2xl font-semibold>
              <I18nText labelKey="hero.job.title" />
            </h2>
          </div>
          <div class="absolute bottom-20 -right-52 z-0 h-36 w-36">
            <img
              class="scale-100 rounded-full"
              src={asset("avatar.jpg")}
            />
          </div>
      </div>
    </div>
  );
}
