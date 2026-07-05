import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-6xl font-serif text-[#E0BFB8] mb-4">404</h2>
      <p className="text-gray-300 text-lg mb-8 max-w-md">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Link href="/">
        <button className="bg-[#E0BFB8] text-[#1A1A1A] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
          Return Home
        </button>
      </Link>
    </div>
  );
}