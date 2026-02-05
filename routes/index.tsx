import { PageProps } from "fresh";
import { Experiences } from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import { State } from "../utils/global.ts";


export default function Home(ctx: PageProps<unknown, State>) {

  return (
    <>
      <Header lang={ctx.state.lang} />
      <Hero />
      <Experiences />
      <Footer />
    </>
  );
}
