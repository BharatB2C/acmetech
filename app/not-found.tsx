import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-[120px] font-bold text-[#f5f5f7] leading-none select-none">404</p>
      <h1 className="text-3xl font-bold text-[#1d1d1f] mt-4 mb-3">Page Not Found</h1>
      <p className="text-[#6e6e73] text-lg max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-7 py-3.5 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
