import { asset } from "$fresh/runtime.ts";
import I18nText from "../islands/I18nText.tsx";

export default function Hero() {
  return (
    <div class="bg-nigredo flex flex-col items-center justify-between">
      <div class="mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
        <div class="animate-bounce-once">
          <img
            class="scale-100 h-36 w-36 rounded-full"
            src={asset("avatar.jpg")}
            alt="avatar"
          />
        </div>
        <div class="space-y-2 text-center md:text-left">
          <h1 class="text-2xl font-bold sm:text-4xl">
            {/* <Balancer> */}
            <span class="bg-clip-text">
              <I18nText labelKey="hero.title"/>
            </span>
            {/* </Balancer> */}
          </h1>
          <h2 class="text-md font-medium sm:text-xl">
            Materia
          </h2>
        </div>
      </div>
      <div class="hidden pb-2 sm:block">
        {
          /* <a href="#about-me" class="motion-safe:animate-bounce">
          {ArrowDownIcon}
        </a> */
        }
      </div>
      <div class="block sm:hidden" />
    </div>
  );
}
