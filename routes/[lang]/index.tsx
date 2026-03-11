import { Experiences } from "../../components/Experiences.tsx";
import Footer from "../../components/Footer.tsx";
import Header from "../../components/Header.tsx";
import Hero from "../../components/Hero.tsx";
import { loadExperiences, loadLabels } from "../../i18n/labels.ts";
import { define, Lang } from "../../utils.ts";

export default define.page(function Home(ctx) {
  const labels = loadLabels(ctx.state.lang as Lang);
  const experiences = loadExperiences(ctx.state.lang as Lang);
  return (
    <>
      <Header lang={ctx.state.lang} />
      <Hero heroTitle={labels["hero.job.title"]} heroIntro={labels["hero.intro"]} />
      <Experiences experiences={experiences} />
      <Footer hireme={labels["footer.hireme"]} />
    </>
  );
});
