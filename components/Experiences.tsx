import I18nText from "../islands/I18nText.tsx";

export function Experiences() {
  return (
    <>
      <div class="flex flex-col gap-8 md:gap-16 px-10 my-6 justify-self-auto">
        <h1 class="sm:text-3xl text-2xl font-semibold text-albedo">
          Experience
        </h1>
        <Experience name="chanel" />
        <Experience name="kayentis" />
        <Experience name="open"/>
        <Experience name="wifitoggler" />
        <Experience name="laroueverte" />
        <Experience name="astek" />
        <Experience name="inilead" />
        <Experience name="comarch" />
        <Experience name="capgemini" />
      </div>
    </>
  );
}

export interface ExperienceProps {
  name: string;
  class?: string;
}

function Experience(experience: ExperienceProps) {
  return (
    <>
      <section
        class={`w-full min-w-0 max-w-7xl mx-auto mb-4 sm:px-10 text-lg sm:text-xl ${experience.class}`}
      >
        <I18nText
          labelKey={`experiences.${experience.name}.jobtitle`}
          style="font-semibold sm:text-3xl mb-1.5"
        />

        <I18nText
          labelKey={`experiences.${experience.name}.details`}
          style="font-semibold sm:text-xl text-lg"
        />

        <I18nText
          labelKey={`experiences.${experience.name}.description`}
          style="text-justify leading-relaxed my-4 text-albedo"
        />
      </section>
    </>
  );
}
