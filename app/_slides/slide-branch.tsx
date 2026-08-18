import { GitBranch, ShieldCheck, Beaker, Check } from "lucide-react";

function BranchIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[-6deg]">
        <GitBranch className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center rotate-[6deg]">
        <ShieldCheck className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute bottom-10 right-16 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[8deg]">
        <Beaker className="h-7 w-7 text-[#DD7A5C]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8">
          <svg width="280" height="150" viewBox="0 0 280 150" fill="none">
            <line x1="20" y1="40" x2="260" y2="40" stroke="#0176D3" strokeWidth="4" strokeLinecap="round" />
            <path d="M110 40 C 160 40, 160 110, 220 110" stroke="#DD7A5C" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="20" cy="40" r="7" fill="#0176D3" />
            <circle cx="110" cy="40" r="7" fill="#0176D3" />
            <circle cx="260" cy="40" r="7" fill="#0176D3" />
            <circle cx="220" cy="110" r="7" fill="#DD7A5C" />
            <text x="20" y="24" fontSize="13" fontWeight="600" fill="#0176D3">main</text>
            <text x="178" y="132" fontSize="13" fontWeight="600" fill="#DD7A5C">my-edit</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

const CHECKLIST = [
  {
    label: "A private copy:",
    text: "Split off just for my edit, so nothing else on the project is touched.",
  },
  {
    label: "The original stays put:",
    text: "Nothing on my branch affects the version they're presenting tomorrow.",
  },
  {
    label: "Room to experiment:",
    text: "Try it, get it wrong, try again, all without any risk.",
  },
];

export function SlideBranch() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-10 text-gray-900">
          <span className="text-[#0176D3]">Branch</span>: My Own Space to Edit
        </h1>

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
            If I mess something up, their original is untouched.
          </p>
        </div>
      </div>

      <BranchIllustration />
    </div>
  );
}
