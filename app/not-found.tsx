import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-manrope font-extrabold leading-none text-primary">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-slate-900">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-agdasima max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white rounded-lg font-manrope font-semibold text-base hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-300 text-slate-700 rounded-lg font-manrope font-semibold text-base hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View Projects
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </main>
  );
}
