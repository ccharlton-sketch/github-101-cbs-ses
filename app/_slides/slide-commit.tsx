import { Camera, MessageSquare, History, Check } from "lucide-react";

function CommitIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[-6deg]">
        <Camera className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center rotate-[6deg]">
        <MessageSquare className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute bottom-10 right-16 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[8deg]">
        <History className="h-7 w-7 text-[#DD7A5C]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8">
          <svg width="240" height="150" viewBox="0 0 240 150" fill="none">
            <line x1="30" y1="120" x2="30" y2="30" stroke="#0176D3" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" cy="120" r="8" fill="#0176D3" />
            <circle cx="30" cy="75" r="8" fill="#0176D3" />
            <circle cx="30" cy="30" r="8" fill="#DD7A5C" />
            <text x="50" y="34" fontSize="13" fontWeight="600" fill="#DD7A5C">fix the header</text>
            <text x="50" y="79" fontSize="13" fontWeight="600" fill="#6B7280">update copy</text>
            <text x="50" y="124" fontSize="13" fontWeight="600" fill="#6B7280">initial build</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

const CHECKLIST = [
  { label: "A saved moment:", text: "Locks in exactly what I changed." },
  { label: "A short note attached:", text: "A message describing what changed and why." },
  { label: "A trail, not one file:", text: "Stacks right on top of theirs." },
];

export function SlideCommit() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          <span className="text-[#0176D3]">Commit</span>: Saving My Edit
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Once my change was ready on that branch, committing saved it as a snapshot, with a note about what I did and why.
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
            The moment I commit, my fix has its own record sitting right next to theirs.
          </p>
        </div>
      </div>

      <CommitIllustration />
    </div>
  );
}
