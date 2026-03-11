import { ExperienceData } from "../i18n/labels.ts";
import I18nLabel from "./I18nLabel.tsx";

export interface ExperiencesProps {
  experiences: ExperienceData[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div class="flex flex-col gap-8 md:gap-16 px-10 my-6 justify-self-auto">
      <h1 class="sm:text-3xl text-2xl font-semibold text-albedo">
        Experience
      </h1>
      {experiences.map((exp, company) => <Experience key={company} {...exp} />)}
    </div>
  );
}

function Experience({ jobtitle, details, description }: ExperienceData) {
  return (
    <section class="w-full min-w-0 max-w-7xl mx-auto mb-4 sm:px-10 text-lg sm:text-xl">
      <I18nLabel label={jobtitle} style="font-semibold sm:text-3xl mb-1.5" />
      <I18nLabel label={details} style="font-semibold sm:text-xl text-lg" />
      <I18nLabel
        label={description}
        style="text-justify leading-relaxed my-4 text-albedo"
      />
    </section>
  );
}
