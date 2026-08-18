export function SlideHero() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF]">
      <div className="space-y-8 px-12">
        <h1 className="text-7xl font-bold text-white">
          GitHub 101 for<br />Solutions Engineers
        </h1>
        <p className="text-3xl text-white/90 font-light">
          Why version control matters, even if you've never touched a command line.
        </p>
      </div>
    </div>
  );
}
