import React from 'react'
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <Helmet><title>Not Found — souq.</title></Helmet>
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
        <div className="w-full max-w-lg text-center">
          <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
            Lost in the bazaar
          </span>
          <h1 className="font-display text-9xl font-bold text-persimmon sm:text-[12rem] sm:leading-none">
            404
          </h1>
          <h2 className="font-display mt-4 text-3xl font-bold text-ink">
            Oops! Page not found
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-ink/70">
            The page you&apos;re looking for wandered off into the souq.
            Let&apos;s get you back to the good stuff.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="hard-shadow-sm inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-persimmon px-6 py-3 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              <Home className="h-5 w-5" />
              Shop the souq
            </Link>
            <button
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-6 py-3 font-bold text-ink transition-transform hover:-translate-y-0.5 hover:bg-clay/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
