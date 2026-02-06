import { IS_BROWSER } from "fresh/runtime";
import { marked } from "marked";

import { useState } from "preact/hooks";

export default function I18nText(props: I18nProps) {

  const [html, setHtml] = useState<string>("");
  const MIN_SKELETON_MS = 700;

  const { lines: skeletonLines = 1, style: skeletonStyle = "" } =
    props.skeletonProps ?? {};

  // useEffect(() => {
    if (!IS_BROWSER) return;
  //   let mounted = true;

    async function load() {
  //     // const start = performance.now();

      const label = await getLabel(props.labelKey);
      const parsed = marked.parse(label, { async: false }) as string;
      setHtml(parsed);
  //     // const elapsed = performance.now() - start;
  //     const remaining = Math.max(0, MIN_SKELETON_MS - 200);

  //     setTimeout(() => {
  //       if (mounted) setHtml(parsed);
  //     }, remaining);
    }

    load();
  //   return () => {
  //     mounted = false;
  //   };
  // }, [props.labelKey]);

  return html
    ? (
      <div
        class={`animate-fade-in transition-opacity ${props.style ?? ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
    : (
      <div class={`${props.style} ${skeletonStyle}`}>
        <Skeleton lines={skeletonLines} />
      </div>
    );
}

export interface I18nProps {
  labelKey: string;
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
