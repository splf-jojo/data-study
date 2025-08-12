import Link from "next/link";
import { ReactNode } from "react";
import Header from "@/components/Header";
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
          <nav className="space-y-2">
            {DOCS.map((doc) => (
              <Link
                key={doc.slug}
                href={doc.href}
                className={
                  doc.slug === slug
                    ? "block font-bold text-slate-900"
                    : "block text-slate-600 hover:text-slate-900"
                }
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4">
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
      </div>
    </>
  );
}

