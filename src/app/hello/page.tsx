import DocPage from "@/components/DocPage";

export default function HelloPage() {
  return (
    <DocPage slug="hello">
      <section className="py-10">
        <h1 className="text-2xl font-bold mb-4">Hello</h1>
        <p className="text-slate-700">Эта страница создана для демонстрации новой навигации.</p>
      </section>
    </DocPage>
  );
}

