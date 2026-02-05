import { marked } from "marked";

import { useEffect, useState } from "preact/hooks";

export default function I18nText({ labelKey, style, skeletonLines }: I18nProps) {
  const [html, setHtml] = useState<string>("");

  // useEffect(() => {
  //   async function load() {
  //     const label = await getLabel(labelKey);
  //     setHtml(marked.parse(label, { async: false }) as string);
  //   }
  //   load();
  // }, []);
  const MIN_SKELETON_MS = 600;

  useEffect(() => {
    let mounted = true;

    async function load() {
      const start = performance.now();

      const label = await getLabel(labelKey);
      const parsed = marked.parse(label, { async: false }) as string;

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_SKELETON_MS - elapsed);

      setTimeout(() => {
        if (mounted) setHtml(parsed);
      }, remaining);
    }

    load();
    return () => {
      mounted = false;
    };
  }, [labelKey]);

  return (
    html
      ? (
        <>
          <div
            class={html
              ? `animate-fade-in transition-opacity
        ${style ?? ""}`
              : `animate-pulse`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </>
      )
      : (
        <>
          <div class={`${style ?? ""}`}>
             <Skeleton lines={skeletonLines}/>
          </div>
        </>
      )
  );
}

export interface I18nProps {
  labelKey: string;
  style?: string;
  skeletonLines: number;
}

async function getLabel(labelKey: string): Promise<string> {
  const response = await fetch(`/api/lang/label?labelkey=${labelKey}`);

  return await response.json();
}


function Skeleton({ lines = 2 }: { lines?: number }) {
  return (
    <div class="mx-auto w-full max-w-3xl my-4">
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
    </div>
  );
}
