import { PackageCheck, Clock3, RefreshCw, Check } from "lucide-react";

function CloneIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[-6deg]">
        <PackageCheck className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center rotate-[6deg]">
        <Clock3 className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute bottom-10 right-16 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[8deg]">
        <RefreshCw className="h-7 w-7 text-[#DD7A5C]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0176D3" strokeWidth="2">
              <path d="M6 18a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 0119 18H6z" />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-500">GitHub</div>
          <PackageCheck className="h-8 w-8 text-[#DD7A5C]" />
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#DD7A5C" strokeWidth="2">
              <rect x="3" y="4" width="18" height="12" rx="1" />
              <path d="M2 20h20" />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-500">my machine</div>
        </div>
      </div>
    </div>
  );
}

const CHECKLIST = [
  { label: "The full project:", text: "Every file and every past commit, not just a snapshot." },
  { label: "Onto any machine:", text: "My new laptop had never seen this project before. Didn't matter." },
  { label: "Back to exactly where I left off:", text: "Every commit I'd made was right there, down to the last one before push." },
];

export function SlideClone() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          <span className="text-[#0176D3]">Clone</span>: The Laptop Died. The Project Didn't.
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A week later, my laptop actually died. I borrowed a new one, and cloned the repo, downloading the whole project from GitHub, straight onto a machine that had never touched it before.
        </p>

        <div className="space-y-6">
          {CHECKLIST.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                <Check className="h-4 w-4 text-[#0176D3]" />
              </div>
              <p className="text-xl text-gray-700">
                <span className="font-bold text-gray-900">{item.label}</span> {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border-l-4 border-l-[#0176D3] bg-gray-50 p-5">
          <p className="text-lg text-gray-800">
            The exact disaster from the start of this talk. This time, it was a non-event.
          </p>
        </div>
      </div>

      <CloneIllustration />
    </div>
  );
}
