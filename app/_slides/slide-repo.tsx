import { FolderGit2, Cloud, Boxes, Users, Check } from "lucide-react";

function RepoIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[-6deg]">
        <Cloud className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center rotate-[6deg]">
        <Users className="h-7 w-7 text-[#0176D3]" />
      </div>
      <div className="absolute bottom-10 right-16 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[8deg]">
        <Boxes className="h-7 w-7 text-[#DD7A5C]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
            <FolderGit2 className="h-9 w-9 text-[#0176D3]" />
          </div>
          <div className="text-sm font-semibold text-gray-500">client-site repo</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100" />
            <div className="w-8 h-8 rounded-full bg-orange-100" />
            <div className="w-8 h-8 rounded-full bg-blue-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

const CHECKLIST = [
  { label: "Not on one laptop:", text: "It lives on GitHub, not just on someone's machine." },
  { label: "One project, one home:", text: "The client site gets its own repo, separate from everything else." },
  { label: "Access opens the door:", text: "Add me to the repo, and I have a way in." },
];

export function SlideRepo() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          <span className="text-[#0176D3]">Repo</span>: Where the Project Lives
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A repository, or repo, is the project folder: files, images, and history, all in one place on GitHub.
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
            The repo is the one thing that would have let me in at all.
          </p>
        </div>
      </div>

      <RepoIllustration />
    </div>
  );
}
