import { BsTranslate } from "@preact-icons/bs";
import { Lang } from "../utils/lang.ts";

interface Props {
  lang: Lang;
}

export default function Header({ lang }: Props) {
  return (
    <header class="sticky top-0 z-10 px-4 max-w-full text-left text-albedo bg-nigreydo">
      <div class="mx-auto flex gap-3 items-center justify-between w-full max-w-(--breakpoint-xl)">
        <Prompt />
        <div class="flex flex-row items-center">
          <BsTranslate />
          {/* <LanguageSwitch lang={lang} /> */}
        </div>
      </div>
    </header>
  );
}

function Prompt() {
  return (
    <div>
      <span className="text-albedo">
        &gt;
        <span class="animate-blink">_</span>
      </span>
      {/* Commands */}
      {
        /* <span className="ml-4 text-citrinitas">{name}</span>
      <span className="text-rubedo animate-pulse">.</span> */
      }
    </div>
  );
}
