import React from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react';

export const Error = ({ message = 'Unable to fetch data at the moment. Please try again later.', onRetry }) => {
  function handleRetry() {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  }

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center bg-paper px-4 py-12 text-ink">
      <div className="hard-shadow w-full max-w-md rounded-2xl border-2 border-ink bg-paper p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-brick">
          <AlertTriangle className="h-8 w-8 text-paper" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink">Oops! Something went wrong</h2>
        <p className="mt-2 text-ink/70">{message}</p>
        <button
          type="button"
          onClick={handleRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-brick px-6 py-2.5 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  )
}
export default Error;
