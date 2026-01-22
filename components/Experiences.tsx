import I18nText from "../islands/I18nText.tsx";

export function Experiences() {
  return (
    <>
      <div class="flex flex-col gap-8 md:gap-16 px-10 justify-self-auto">
        <h1 class="text-3xl font-semibold text-albedo">
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
        class={`w-full min-w-0 max-w-7xl mx-auto mb-4 sm:px-10 text-xl ${experience.class}`}
      >
        <I18nText
          labelKey={`experiences.${experience.name}.jobtitle`}
          style="font-semibold text-3xl mb-1.5"
        />

        <I18nText
          labelKey={`experiences.${experience.name}.details`}
          style="font-semibold text-xl"
        />

        <I18nText
          labelKey={`experiences.${experience.name}.description`}
          style="text-justify leading-relaxed my-4 text-albedo"
        />
      </section>
    </>
  );
}
