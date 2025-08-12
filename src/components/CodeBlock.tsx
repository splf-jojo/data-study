// components/CodeBlock.tsx
"use client";

import { useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";

type Props = {
  title?: string;
  language?: string; // "python"
  code: string;
  expandable?: boolean;
};

export default function CodeBlock({
  title = "Python",
  language = "python",
  code,
  expandable,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  // Подсветку делаем на клиенте, чтобы избежать SSR-глитчей
  const highlighted = useMemo(() => {
    const lang = (Prism.languages as any)[language] ?? Prism.languages.markup;
    return Prism.highlight(code, lang, language);
  }, [code, language]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      // Неброское подтверждение — можно заменить на тост
      alert("Скопировано ✔");
    } catch {
      alert("Не удалось скопировать :(");
    }
  }

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-300" />
        </div>
        <span className="ml-auto text-xs text-slate-500">{title}</span>
      </div>

      <div
        className={`pre-scroll ${
          expandable && !expanded
            ? "max-h-[520px] overflow-auto"
            : "overflow-visible"
        }`}
        // предупреждаем Next про возможное несовпадение HTML (мы рендерим подсветку на клиенте)
        suppressHydrationWarning
      >
        <pre className={`language-${language} m-0`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
}
