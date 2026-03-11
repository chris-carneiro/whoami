export default function I18nLabel(props: I18nProps) {
  const label = props?.label ?? "Missing label";
  return (
    <div
      class={`animate-fade-in transition-opacity ${props.style ?? ""}`}
      // deno-lint-ignore react-no-danger
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
}

export interface I18nProps {
  label?: string;
  labelKey?: string;
  style?: string;
}
