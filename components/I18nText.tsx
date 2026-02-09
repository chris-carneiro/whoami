import { marked } from "marked";

import { useEffect, useState } from "preact/hooks";

export default function I18nText(props: I18nProps) {
  const MIN_SKELETON_MS = 700;

  const { lines: skeletonLines = 1, style: skeletonStyle = "" } =
    props.skeletonProps ?? {};

  // const [html, setHtml] = useState<string>("");
  // useEffect(() => {
  //   let mounted = true;

  //   async function load() {
  //     const start = performance.now();

  //     const label = await getLabel(props.labelKey);
  //     const parsed = marked.parse(label, { async: false }) as string;

  //     const elapsed = performance.now() - start;
  //     const remaining = Math.max(0, MIN_SKELETON_MS - elapsed);

  //     setTimeout(() => {
  //       if (mounted) setHtml(parsed);
  //     }, remaining);
  //   }

  //   load();
  //   return () => {
  //     mounted = false;
  //   };
  // }, [props.labelKey]);

  return props.label
    ? (
      <div
        class={`animate-fade-in transition-opacity ${props.style ?? ""}`}
        dangerouslySetInnerHTML={{ __html: props.label}}
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

async function getLabel(labelKey: string): Promise<string> {
  const response = await fetch(`/api/lang/label?labelkey=${labelKey}`);

  return await response.json();
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
