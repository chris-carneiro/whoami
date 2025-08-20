import LanguageSwitch from "../islands/LanguageSwitch.tsx";

interface HeaderProps {
  name: string;
}

export default function Header() {
  return <TerminalHeader name="Firstname Lastname" />;
}

function TerminalHeader(header: HeaderProps) {
  return (
    <header className="px-4 py-2 max-w-full text-left bg-nigredo text-citrinitas">
      <div className="mx-auto flex justify-between max-w-screen-xl">
        <Prompt name={header.name} />
        <LanguageSwitch />
      </div>
    </header>
  );
}

function Prompt({ name }: { name: string }) {
  return (
    <div>
      <span className="text-albedo">&gt; ~</span>
      <span className="ml-4 text-citrinitas">{name}</span>
      <span className="text-rubedo">.</span>
    </div>
  );
}
