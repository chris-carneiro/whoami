
import { Experiences } from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import { loadLabels } from "../i18n/labels.ts";
import { define, Lang } from "../utils.ts";

export default define.page(function Home(ctx) {
  const labels = loadLabels(ctx.state.lang as Lang);
  console.log("labels loaded", labels?.["hero.job.title"] ?? "not loaded")
  return (
    <div>
      <Header />
      <Hero labels={labels} />
      <Experiences labels={labels} />
      <Footer labels={labels} />
    </div>
  );
});
