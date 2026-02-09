import I18nText from "./I18nText.tsx";

export interface ExperiencesProps {
  labels?: Record<string, string>;
}

export function Experiences(props: ExperiencesProps) {
  return (
    <>
      <div class="flex flex-col gap-8 md:gap-16 px-10 my-6 justify-self-auto">
        <h1 class="sm:text-3xl text-2xl font-semibold text-albedo">
          Experience
        </h1>
        <Experience name="chanel" labels={props.labels} />
        <Experience name="kayentis" labels={props.labels} />
        <Experience name="open" labels={props.labels} />
        <Experience name="wifitoggler" labels={props.labels} />
        <Experience name="laroueverte" labels={props.labels} />
        <Experience name="astek" labels={props.labels} />
        <Experience name="inilead" labels={props.labels} />
        <Experience name="comarch" labels={props.labels} />
        <Experience name="capgemini" labels={props.labels} />
      </div>
    </>
  );
}

export interface ExperienceProps {
  labels?: Record<string, string>;
  name: string;
  class?: string;
}

function Experience(experience: ExperienceProps) {
  const jobTitle =
    experience.labels?.[`experiences.${experience.name}.jobtitle`] ??
      "not defined";


  return (
    <>
      <section
        class={`w-full min-w-0 max-w-7xl mx-auto mb-4 sm:px-10 text-lg sm:text-xl ${experience.class}`}
      >
        <I18nText
          label={experience.labels?.[`experiences.${experience.name}.jobtitle`]}
          style="font-semibold sm:text-3xl mb-1.5"
        />

        <I18nText
          label={experience.labels?.[`experiences.${experience.name}.details`]}
          style="font-semibold sm:text-xl text-lg"
        />

        <I18nText
          label={experience.labels
            ?.[`experiences.${experience.name}.description`]}
          style="text-justify leading-relaxed my-4 text-albedo"
          skeletonProps={{ lines: 3 }}
        />
      </section>
    </>
  );
}
