// app/page.tsx
import Header from "@/components/Header";
import CodeBlock from "@/components/CodeBlock";
import ExplainRow from "@/components/ExplainRow";
import GridHW from "@/components/illustrations/GridHW";
import PaddingStride from "@/components/illustrations/PaddingStride";
import ToMatrix from "@/components/illustrations/ToMatrix";
import { IM2COL_FULL, STEP1, STEP2, STEP3 } from "@/lib/code/im2col";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="max-w-[1100px] mx-auto px-4 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="m-0 text-lg font-bold tracking-tight">
                Функция <code className="font-[var(--font-fira)]">im2col</code>{" "}
                (Python)
              </h2>
            </div>

            <CodeBlock
              title="Python"
              language="python"
              code={IM2COL_FULL}
              expandable
            />

            <p className="text-sm text-slate-500 mt-2">
              Подсветка — VSCode Light+ (Prism). Шрифт кода — Fira Code.
            </p>
          </div>
        </section>

        {/* ПОЯСНЕНИЯ */}
        <section
          id="explain"
          className="max-w-[1100px] mx-auto px-4 py-8 space-y-7"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <ExplainRow
            caption="Шаг 1 — Параметры и размеры выхода"
            code={STEP1}
            right={<GridHW />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <ExplainRow
            caption="Шаг 2 — Паддинг и буфер cols"
            code={STEP2}
            right={<PaddingStride />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <ExplainRow
            caption="Шаг 3 — Из тензора в матрицу для GEMM"
            code={STEP3}
            right={<ToMatrix />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
      </main>

      <footer className="border-t border-slate-200 mt-6">
        <div className="max-w-[1100px] mx-auto px-4 py-6 text-center text-sm text-slate-500">
          Сделано с любовью к понятному коду · Fira Code · Prism VSCode Light+
        </div>
      </footer>
    </>
  );
}
