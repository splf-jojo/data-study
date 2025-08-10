// components/illustrations/ToMatrix.tsx
export default function ToMatrix() {
  return (
    <svg
      className="w-full h-auto max-w-[520px]"
      viewBox="0 0 420 220"
      role="img"
      aria-label="Расплющивание в матрицу"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="#9ca3af" />
        </marker>
      </defs>
      <rect
        x="20"
        y="20"
        width="60"
        height="160"
        rx="10"
        fill="url(#g1)"
        stroke="#c7d2fe"
      />
      <rect
        x="90"
        y="20"
        width="60"
        height="160"
        rx="10"
        fill="url(#g1)"
        stroke="#c7d2fe"
      />
      <rect
        x="160"
        y="20"
        width="60"
        height="160"
        rx="10"
        fill="url(#g1)"
        stroke="#c7d2fe"
      />
      <path
        d="M230 100 H300"
        stroke="#9ca3af"
        strokeWidth="3"
        markerEnd="url(#arrow)"
      />
      <rect
        x="308"
        y="30"
        width="90"
        height="140"
        rx="10"
        fill="#ffffff"
        stroke="#e5e7eb"
      />
      <g stroke="#e5e7eb">
        <line x1="308" y1="60" x2="398" y2="60" />
        <line x1="308" y1="90" x2="398" y2="90" />
        <line x1="308" y1="120" x2="398" y2="120" />
        <line x1="308" y1="150" x2="398" y2="150" />
      </g>
      <text x="22" y="18" fontSize="12" fill="#6b7280">
        C×k×k столбики
      </text>
      <text x="308" y="24" fontSize="12" fill="#6b7280">
        (L × Ck²)
      </text>
    </svg>
  );
}
