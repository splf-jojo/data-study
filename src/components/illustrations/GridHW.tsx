// components/illustrations/GridHW.tsx
export default function GridHW() {
  return (
    <svg
      className="w-full h-auto max-w-[520px]"
      viewBox="0 0 340 240"
      role="img"
      aria-label="Сетка H×W и окно k×k"
    >
      <rect
        x="10"
        y="10"
        width="220"
        height="220"
        rx="10"
        fill="#f9fafb"
        stroke="#e5e7eb"
      />
      <g transform="translate(20,20)">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={c * 44}
              y={r * 44}
              width="40"
              height="40"
              fill="#f3f4f6"
              stroke="#e5e7eb"
            />
          ))
        )}
        <rect
          x="44"
          y="44"
          width="84"
          height="84"
          rx="6"
          fill="#e0e7ff"
          stroke="#93c5fd"
        />
      </g>
      <text x="250" y="40" fontSize="12" fill="#6b7280">
        H×W
      </text>
      <text x="250" y="65" fontSize="12" fill="#6b7280">
        k×k окно
      </text>
    </svg>
  );
}
