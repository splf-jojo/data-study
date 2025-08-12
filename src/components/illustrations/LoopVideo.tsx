// components/LoopVideo.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Source = { src: string; type?: string };

type Props = {
  src?: string;
  sources?: Source[];
  poster?: string;
  controls?: boolean;
  loop?: boolean;
  className?: string;
};

export default function LoopVideo({
  src,
  sources,
  poster,
  controls = true,
  loop = true,
  className = "rounded-2xl border border-slate-200 shadow-sm overflow-hidden aspect-video bg-black/80",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  // Автопауза при уходе из экрана
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !el) return;
        if (!started) return; // если ещё не стартовали, не трогаем
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  function handleFirstHover() {
    const el = videoRef.current;
    if (!el || started) return;
    el.play().catch(() => {});
    setStarted(true);
  }

  const hasMultiple = Array.isArray(sources) && sources.length > 0;

  return (
    <div className={className} onMouseEnter={handleFirstHover}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={poster}
        muted
        playsInline
        controls={controls}
        loop={loop}
      >
        {hasMultiple ? (
          sources!.map((s, i) => <source key={i} src={s.src} type={s.type} />)
        ) : src ? (
          <source src={src} />
        ) : null}
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}
