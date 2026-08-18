import { FolderGit2, PackageCheck, GitBranch, GitCommit, ArrowUpFromLine, GitPullRequest } from "lucide-react";

const STEPS = [
  { icon: FolderGit2, label: "Repo" },
  { icon: PackageCheck, label: "Clone" },
  { icon: GitBranch, label: "Branch" },
  { icon: GitCommit, label: "Commit" },
  { icon: ArrowUpFromLine, label: "Push" },
  { icon: GitPullRequest, label: "Merge" },
];

function ConclusionIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-10 flex flex-col items-center gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <div className="text-lg font-bold text-gray-900">{step.label}</div>
                {i < STEPS.length - 1 && (
                  <div className="w-px h-6 bg-gray-200 ml-4" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function SlideConclusion() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Now, Let's See It Live</h1>
        <p className="text-xl text-gray-700 mb-10">
          That's the whole story: a repo to hold the project, a clone to get a copy, a branch to edit safely, a commit to save the work, a push to send it back, and a merge to make it official.
        </p>

        <div className="p-8 bg-gradient-to-r from-[#032D60] to-[#0176D3] rounded-xl text-white">
          <p className="text-2xl font-medium">
            Next up: my own Claude Code, Cursor, and Codex setup, connected to GitHub, live.
          </p>
        </div>
      </div>

      <ConclusionIllustration />
    </div>
  );
}
