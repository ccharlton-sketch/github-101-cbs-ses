import { Laptop, EyeOff, PencilOff, MessageSquareOff, Check } from "lucide-react";

function StoryIllustration() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-orange-50 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[-6deg]">
        <EyeOff className="h-7 w-7 text-[#DD7A5C]" />
      </div>
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center rotate-[6deg]">
        <PencilOff className="h-7 w-7 text-[#DD7A5C]" />
      </div>
      <div className="absolute bottom-10 right-16 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center rotate-[8deg]">
        <MessageSquareOff className="h-7 w-7 text-[#DD7A5C]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
            <Laptop className="h-8 w-8 text-[#0176D3]" />
          </div>
          <div className="w-32 h-2 rounded-full bg-gray-200" />
          <div className="w-24 h-2 rounded-full bg-gray-200" />
          <div className="text-sm font-semibold text-gray-500">one laptop, one person</div>
        </div>
      </div>
    </div>
  );
}

const CHECKLIST = [
  { label: "Can't view it:", text: "No link to open. It only lived on their laptop." },
  { label: "Can't edit it:", text: "No way in for me to make the change myself." },
  { label: "Can't comment:", text: "Just a Slack message, and a wait." },
];

export function SlideStory() {
  return (
    <div className="h-full grid grid-cols-2 gap-16 px-16 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">The Site I Couldn't Touch</h1>
        <p className="text-xl text-gray-700 mb-8">
          A teammate built a client site with Claude Code. It looked great. Then I needed to change something on it.
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
            Every fix meant pinging them and waiting until they had time to make it.
          </p>
        </div>
      </div>

      <StoryIllustration />
    </div>
  );
}
