import Link from "next/link";
import { ReactNode } from "react";
import Header from "@/components/Header";
import TOC from "@/components/TOC";
import { DOCS } from "@/lib/docs";

interface DocPageProps {
  slug: string;
  children: ReactNode;
}

export default function DocPage({ slug, children }: DocPageProps) {
  const index = DOCS.findIndex((d) => d.slug === slug);
  const prev = index > 0 ? DOCS[index - 1] : null;
  const next = index < DOCS.length - 1 ? DOCS[index + 1] : null;

  return (
    <>
      <Header />
      <div className="flex">
        <aside className="hidden md:block w-48 shrink-0 border-r border-slate-200 p-4">
          <nav className="space-y-1">
            {DOCS.map((doc) => (
              <Link
                key={doc.slug}
                href={doc.href}
                className={
                  doc.slug === slug
                    ? "block rounded px-2 py-1 bg-slate-100 font-medium text-slate-900"
                    : "block rounded px-2 py-1 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1 flex justify-center relative lg:px-8">
          <main className="max-w-[1100px] w-full px-4">
            {children}
            <div className="flex justify-between mt-8">
              {prev ? (
                <Link href={prev.href} className="text-slate-600 hover:text-slate-900">
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={next.href} className="text-slate-600 hover:text-slate-900">
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </main>
          <div className="hidden lg:block sticky top-32 w-48 shrink-0 ml-8">
            <TOC />
          </div>
        </div>
      </div>
    </>
  );
}

