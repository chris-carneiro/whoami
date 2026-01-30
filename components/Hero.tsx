import { asset } from "fresh/runtime";
import I18nText from "../islands/I18nText.tsx";
import { BsGithub, BsLinkedin } from "@preact-icons/bs";
import { ExternalLink } from "./ExternalLink.tsx";

export default function Hero() {
  return (
    <>
      <div class="min-h-screen min-w-0 w-full bg-nigredo flex items-center justify-center my-4">
        <div class="flex flex-col items-center gap-2">
          <div class="relative flex flex-col sm:inline-block py-8 sm:py-16">
            <div class="relative flex min-w-0 flex-col items-center sm:items-start sm:text-left sm:inline-block">
              <img
                src={asset("avatar.jpg")}
                class="mb-4 rounded-full pointer-events-none sm:mb-0 sm:h-40 sm:w-40 sm:absolute sm:-top-36 sm:right-0 sm:translate-x-1/2"
              />
              <h1 class="relative text-center z-10 text-xl sm:text-3xl md:text-4xl my-1.5 font-bold">
                Firstname Lastname{" "}
                <span class="text-rubedo animate-pulse">.</span>
              </h1>
              <h2 class="relative text-xl md:text-3xl font-semibold">
                <I18nText labelKey="hero.job.title" />
              </h2>
            </div>
          </div>
          <div class="relative flex flex-col sm:inline-block">
            <section class="w-full min-w-0 mx-auto px-8 sm:px-16 md:px-20 flex flex-col gap-8 sm:gap-16 justify-self-auto">
              <div class="relative flex flex-col items-center gap-y-5 
            min-h-96 md:min-h-60 lg:min-h-48">
                <I18nText
                  labelKey="hero.intro"
                  style="text-justify md:text-xl sm:text-lg leading-relaxed text-albedo"
                />
              </div>
            </section>
            <div class="flex flex-row-reverse gap-4 w-full p-8 sm:p-16 md:p-20">
              <ExternalLink
                href="https://github.com/chris-carneiro"
                aria-label="GitHub profile"
                className="inline-flex items-center"
              >
                <BsGithub size={32} />
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/chriscarneiro/"
                aria-label="Linkedin profile"
                className="inline-flex items-center"
              >
                <BsLinkedin size={32} />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
