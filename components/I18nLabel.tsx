



export default function I18nLabel(props: I18nProps) {
  const MIN_SKELETON_MS = 700;

  const { lines: skeletonLines = 1, style: skeletonStyle = "" } =
    props.skeletonProps ?? {};

  const label = props.label ?? "Missing label";
  return "Missing label" !== label
    ? (
      <div
        class={`animate-fade-in transition-opacity ${props.style ?? ""}`}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    )
    : (
      <div class={`${props.style} ${skeletonStyle}`}>
        <Skeleton lines={skeletonLines} />
      </div>
    );
}

export interface I18nProps {
  label?: string;
  labelKey?: string;
  style?: string;
  skeletonProps?: SkeletonProps;
}

export interface SkeletonProps {
  lines?: number;
  style?: string;
}

function Skeleton({ lines = 2 }: { lines?: number }) {
  return (
    <div class="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          class={`h-2 bg-nigreydo rounded ${
            i === lines - 1 ? "w-2/3" : "w-5/6"
          }`}
        />
      ))}
    </div>
  );
}
