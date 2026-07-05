'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-serif text-[#E0BFB8] mb-4">Oops, something went wrong.</h2>
      <p className="text-gray-300 text-lg mb-8 max-w-md">
        We&apos;re sorry, but there was an error loading this page.
      </p>
      <button
        onClick={reset}
        className="bg-[#E0BFB8] text-[#1A1A1A] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}