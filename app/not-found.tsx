import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-60">
      <div className="text-xl font-normal text-zinc-100">Oops</div>
      <div className="text-6xl font-bold text-zinc-100">404</div>
      <div className="text-xl font-normal uppercase text-zinc-100">Page not found</div>

      <Link className="text-base inline-flex items-center leading-tight mt-4 px-4 py-2 bg-zinc-950 border rounded-xl border-zinc-700 text-zinc-100 font-normal transition hover:border-zinc-500 group" aria-label="Back to Home" href="/">
        <span>
          <span className="transition motion-reduce:transition-none">Back to </span>
          <span className="whitespace-nowrap">
            <span className="transition motion-reduce:transition-none">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
            </svg>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
