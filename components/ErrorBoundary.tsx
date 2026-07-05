'use client';

import React, { useState, useEffect } from 'react';

export default function ErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Application error:', error);
      setHasError(true);
      setError(error.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event);
      setHasError(true);
      setError(new Error('Unhandled promise rejection'));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif text-[#E0BFB8] mb-4">Oops, something went wrong.</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-md">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#E0BFB8] text-[#1A1A1A] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
}