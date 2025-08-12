// components/ExplainRow.tsx
import CodeBlock from "./CodeBlock";

type Props = {
  caption: string;
  code: string;
  right: React.ReactNode; // иллюстрация
  language?: string;
};

export default function ExplainRow({
  caption,
  code,
  right,
  language = "python",
}: Props) {
  return (
    <article className="grid gap-10 md:grid-cols-2 items-stretch ">
      <div>
        <h3 className="mb-3 text-base font-bold tracking-tight">{caption}</h3>
        <CodeBlock language={language} code={code} />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 grid place-items-center min-h-[220px]">
        {right}
      </div>
    </article>
  );
}
