import { EN, FR, Lang } from "../utils.ts";

export interface Props {
  lang: Lang;
}

export default function LanguageSwitch({ lang }: Props) {
  return (
    <select
      onChange={(e) => {
        location.href = `/${e.currentTarget.value}`;
      }}
    >
      <option value="fr" selected={lang === FR}>{FR}</option>
      <option value="en" selected={lang === EN}>{EN}</option>
    </select>
  );
}
