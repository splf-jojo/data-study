// app/page.tsx
import DocPage from "@/components/DocPage";
import CodeBlock from "@/components/CodeBlock";
import ExplainRow from "@/components/ExplainRow";
import LoopVideo from "@/components/illustrations/LoopVideo";
import TOC from "@/components/TOC";

import { IM2COL_FULL, STEP4, STEP1, STEP2, STEP3 } from "@/lib/code/im2col";

export default function Page() {
  return (
    <DocPage slug="im2col">
      <div className="flex justify-center relative lg:px-8">
        <main className="max-w-[1100px] w-full px-4">
          {/* HERO */}
          <section className="max-w-[1100px] mx-auto lg:mx-0 px-4 pt-10">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="m-0 text-lg font-bold tracking-tight">
                  Функция{" "}
                  <code className="font-[var(--font-fira)]">im2col</code>{" "}
                  (Python)
                </h2>
              </div>

              <CodeBlock
                title="Python"
                language="python"
                code={IM2COL_FULL}
                expandable
              />
            </div>
          </section>

          {/* ПОЯСНЕНИЯ */}
          <section
            id="explain"
            className="max-w-[1300px] mx-auto lg:mx-0 px-4 py-8 space-y-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <ExplainRow
              caption="Шаг 1 — Параметры и размеры выхода"
              code={STEP1}
              right={
                <LoopVideo
                  src="/videos/ScalarRowMatrixWH_v10.mp4"
                  poster="/videos/ScalarRowMatrixWH_v10.png"
                  // кастомный размер/обёртка через tailwind:
                  className="rounded-2xl border border-slate-200 shadow-md overflow-hidden aspect-video bg-black"
                />
              }
            />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <ExplainRow
              caption="Шаг 2 — Параметры и размеры выхода"
              code={STEP2}
              right={
                <LoopVideo
                  src="/videos/HelloManim.mp4"
                  poster="/videos/HelloManim.png"
                  // кастомный размер/обёртка через tailwind:
                  className="rounded-2xl border border-slate-200 shadow-md overflow-hidden aspect-video bg-black"
                />
              }
            />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <ExplainRow
              caption="Шаг 3 — Паддинг и буфер cols"
              code={STEP3}
              right={
                <LoopVideo
                  src="/videos/demo.mp4"
                  poster="/videos/image.png"
                  // кастомный размер/обёртка через tailwind:
                  className="rounded-2xl border border-slate-200 shadow-md overflow-hidden aspect-video bg-black"
                />
              }
            />

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <ExplainRow
              caption="Шаг 4 — Из тензора в матрицу для GEMM"
              code={STEP4}
              right={
                <LoopVideo
                  src="/videos/cols_reshape.mp4"
                  poster="/videos/cols_reshape.png"
                  // кастомный размер/обёртка через tailwind:
                  className="rounded-2xl border border-slate-200 shadow-md overflow-hidden aspect-video bg-black"
                />
              }
            />
          </section>
        </main>
        <div className="hidden lg:block sticky top-32 w-48 shrink-0 ml-8">
          <TOC />
        </div>
      </div>
    </DocPage>
  );
}
