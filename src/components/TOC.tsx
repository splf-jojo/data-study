"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u0400-\u04FF\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  // Сбор заголовков и отслеживание активного пункта
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("main h2, main h3")
    ) as HTMLElement[];

    const hs = elements.map((el) => {
      const text = el.textContent || "";
      if (!el.id) {
        el.id = slugify(text);
      }
      return { id: el.id, text };
    });

    setHeadings(hs);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block sticky top-32 w-48 shrink-0 text-sm">
      <div className="mb-2 text-xs text-slate-500">On this page</div>
      <ul className="relative border-s border-slate-200 ps-4 space-y-2">
        {headings.map((h) => (
          <li key={h.id} className="relative">
            <a
              href={`#${h.id}`}
              className={`${
                active === h.id ? "font-bold" : ""
              } block hover:underline`}
            >
              {h.text}
            </a>
            {active === h.id && (
              <span className="absolute -left-4 top-1/2 h-3/4 w-px -translate-y-1/2 bg-slate-700" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
