import { asset } from "fresh/runtime";
import I18nText from "../islands/I18nText.tsx";
import { BsGithub, BsLinkedin } from "@preact-icons/bs";
import { ExternalLink } from "./ExternalLink.tsx";

// export default function Hero() {
//   return (
//     <>
//       <div class="min-h-screen min-w-0 w-full bg-nigredo flex items-center justify-center my-4">
//         <div class="flex flex-col items-center gap-2">
//           <div class="relative flex flex-col sm:inline-block py-8 sm:py-16">
//             <div class="relative flex min-w-0 flex-col items-center sm:items-start sm:text-left sm:inline-block">
//               <img
//                 src={asset("avatar.jpg")}
//                 class="mb-4 rounded-full pointer-events-none sm:mb-0 sm:h-40 sm:w-40 sm:absolute sm:-top-36 sm:right-0 sm:translate-x-1/2"
//               />
//               <h1 class="relative text-center z-10 text-xl sm:text-3xl md:text-4xl my-1.5 font-bold">
//                 Firstname Lastname{" "}
//                 <span class="text-rubedo animate-pulse">.</span>
//               </h1>

//               <I18nText
//                 labelKey="hero.job.title"
//                 style="text-xl md:text-3xl font-semibold"
//               />
//             </div>
//           </div>
//           <div class="relative flex flex-col sm:inline-block">
//             <section class="w-full min-w-0 mx-auto px-8 sm:px-16 md:px-20 flex flex-col gap-8 sm:gap-16 justify-self-auto">
//               <div class="relative flex flex-col items-center gap-y-5
//             min-h-96 md:min-h-60 lg:min-h-48">
//                 <I18nText
//                   labelKey="hero.intro"
//                   style="text-justify md:text-xl sm:text-lg leading-relaxed text-albedo"
//                 />
//               </div>
//             </section>
//             <div class="flex flex-row-reverse gap-4 w-full p-8 sm:p-16 md:p-20">
//               <ExternalLink
//                 href="/github"
//                 aria-label="GitHub profile"
//                 className="inline-flex items-center"
//               >
//                 <BsGithub size={32} />
//               </ExternalLink>

//               <ExternalLink
//                 href="/linkedin"
//                 aria-label="Linkedin profile"
//                 className="inline-flex items-center"
//               >
//                 <BsLinkedin size={32} />
//               </ExternalLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function Hero() {
  return (
    <section class="min-h-screen bg-nigredo flex items-center">
      {/* width container */}
      <div class="mx-auto w-full max-w-6xl px-[clamp(1.5rem,4vw,3rem)] flex flex-col justify-between">
        <div class="relative flex flex-col gap-12">
          {/* Header */}

          <header class="relative">
            <h1 class="text-xl sm:text-3xl md:text-4xl font-bold">
              Firstname Lastname<span class="text-rubedo">.</span>
            </h1>

            <I18nText
              labelKey="hero.job.title"
              style="text-xl md:text-3xl font-semibold"
            />
          </header>

          <div class="mt-8">
            <I18nText
              labelKey="hero.intro"
              style="min-h-[10rem] md:min-h-[8rem] text-justify md:text-xl leading-relaxed text-albedo"
            />
          </div>

          {/* Social links */}
          <div class="flex justify-end pb-6">
            <footer class="flex gap-4">
              <ExternalLink href="/github" aria-label="GitHub">
                <BsGithub size={32} />
              </ExternalLink>

              <ExternalLink href="/linkedin" aria-label="LinkedIn">
                <BsLinkedin size={32} />
              </ExternalLink>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
