import I18nLabel from "./I18nLabel.tsx";

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
        <Experience
          jobTitle={props.labels?.[labelkey("chanel", "jobtitle")]}
          details={props.labels?.[labelkey("chanel", "details")]}
          description={props.labels?.[labelkey("chanel", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("kayentis", "jobtitle")]}
          details={props.labels?.[labelkey("kayentis", "details")]}
          description={props.labels?.[labelkey("kayentis", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("open", "jobtitle")]}
          details={props.labels?.[labelkey("open", "details")]}
          description={props.labels?.[labelkey("open", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("wifitoggler", "jobtitle")]}
          details={props.labels?.[labelkey("wifitoggler", "details")]}
          description={props.labels?.[labelkey("wifitoggler", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("laroueverte", "jobtitle")]}
          details={props.labels?.[labelkey("laroueverte", "details")]}
          description={props.labels?.[labelkey("laroueverte", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("astek", "jobtitle")]}
          details={props.labels?.[labelkey("astek", "details")]}
          description={props.labels?.[labelkey("astek", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("inilead", "jobtitle")]}
          details={props.labels?.[labelkey("inilead", "details")]}
          description={props.labels?.[labelkey("inilead", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("comarch", "jobtitle")]}
          details={props.labels?.[labelkey("comarch", "details")]}
          description={props.labels?.[labelkey("comarch", "description")]}
        />
        <Experience
          jobTitle={props.labels?.[labelkey("capgemini", "jobtitle")]}
          details={props.labels?.[labelkey("capgemini", "details")]}
          description={props.labels?.[labelkey("capgemini", "description")]}
        />
      </div>
    </>
  );

  function labelkey(company: string, section: string) {
    return `experiences.${company}.${section}`;
  }
}

export interface ExperienceProps {
  jobTitle?: string;
  details?: string;
  description?: string;
  class?: string;
}

function Experience(experience: ExperienceProps) {
  return (
    <>
      <section
        class={`w-full min-w-0 max-w-7xl mx-auto mb-4 sm:px-10 text-lg sm:text-xl ${experience.class}`}
      >
        <I18nLabel
          label={experience.jobTitle}
          style="font-semibold sm:text-3xl mb-1.5"
        />

        <I18nLabel
          label={experience.details}
          style="font-semibold sm:text-xl text-lg"
        />

        <I18nLabel
          label={experience.description}
          style="text-justify leading-relaxed my-4 text-albedo"
        />
      </section>
    </>
  );
}
