import { PageProps } from "fresh";
import { Experiences } from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import { State } from "../utils/global.ts";
import { loadLabels } from "../i18n/labels.ts";

export default function Home(ctx: PageProps<unknown, State>) {
  const labels = loadLabels(ctx.state.lang);
  // console.log("index", labels);

  return (
    <>
      <Header lang={ctx.state.lang} />
      <Hero labels= {labels}/>
      <Experiences labels={labels}/>
      <Footer labels={labels}/>
    </>
  );
}
