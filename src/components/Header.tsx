// components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md border-b border-slate-200 bg-white/70">
      <div className="max-w-[1100px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-200 to-white border border-slate-200 shadow" />
          <div className="font-bold tracking-tight">im2col — визуально</div>
        </div>
        <nav>
          <a
            href="#explain"
            className="inline-flex rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:-translate-y-px transition"
          >
            К пояснениям
          </a>
        </nav>
      </div>
    </header>
  );
}
