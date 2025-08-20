import { useContext } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";


export default function DynamicTranslate() {
  const {labels} = useContext(TranslationContext)!;
  return <p>CSR: {labels.language}</p>;
}