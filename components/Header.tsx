import LanguageSwitch from "../islands/LanguageSwitch.tsx";

export default function Header() {
  return (
    <header class="sticky top-0 z-10 px-4 py-2 max-w-full text-left text-citrinitas bg-nigreydo">
      <div class="mx-auto flex justify-between max-w-screen-xl">
        <Prompt />
        <LanguageSwitch />
      </div>
    </header>
  );
}

function Prompt() {
  return (
    <div>
      <span className="text-albedo">&gt; ~</span>
      {/* Commands */}
      {/* <span className="ml-4 text-citrinitas">{name}</span>
      <span className="text-rubedo animate-pulse">.</span> */}
    </div>
  );
}
