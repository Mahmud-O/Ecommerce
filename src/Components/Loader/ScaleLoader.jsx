import React from 'react'

export default function ScaleLoading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4" role="status" aria-label="Loading">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-4 w-4 animate-bounce rounded-full border-2 border-ink bg-marigold"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="font-display text-xl font-bold text-ink">Loading the souq…</p>
    </div>
  )
}
