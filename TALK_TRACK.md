# GitHub 101 for CBS SEs: Talk Track

Rough speaking notes for each slide. These are a starting point, adjust to how the room is reacting.

---

## Slide 1: Title

"Today's not really about GitHub as a tool. It's about a problem a lot of us have run into without realizing GitHub was the fix. I'm going to walk through a real situation I hit, and by the end you'll understand the handful of things GitHub actually does. Then I'll show it live, connected to my own Claude Code and Cursor setup."

Keep this short, it's just setting expectations. Don't explain any concepts yet.

---

## Slide 2: The Story

"Here's what actually happened. A teammate built a client site using Claude Code. Looked great. Then I needed to change something on it, just a small fix.

Except I couldn't. I had no link to open it, since it only existed on their laptop. I had no way to edit it myself. And I couldn't even leave a comment on what I wanted changed, I could only Slack them and wait.

Every fix meant pinging them and waiting until they had time. That's the whole problem this talk solves."

Pause here. This is the hook, let it land before moving on.

---

## Slide 3: Repo

"The first piece that would have fixed this is the repo. A repository, or repo, is just the project folder, all the files, images, and history for one project, in one place, on GitHub instead of on someone's laptop.

If that site had lived in a repo, it wouldn't matter whose machine built it. It's not tied to one person anymore, it's tied to one shared home. And access to that repo is what opens the door, add someone to it, and they have a way in.

This is the one thing that would have let me in at all."

If people ask "so it's like a shared drive," that's a fine analogy, run with it.

---

## Slide 4: Clone

"Once I have access to a repo, I need my own copy of it to actually work with. That's a clone. It downloads the whole project onto my machine, not a zip file someone emailed me, the real thing: every file, every commit, the full history.

You only do this once per project. After that, if your teammate makes more changes, you don't clone again, you pull, which just grabs what's new. But the first time, it's a clone.

I don't have to ask them to send me anything. I just clone it."

Worth calling out explicitly: clone is once, pull is repeatable. That distinction is exactly what came up when I was double-checking this deck.

---

## Slide 5: Branch

"Now I have the project on my machine. But I'm not going to edit it directly, because that copy is basically the same as what they're presenting tomorrow. If I mess it up, I've broken their working version.

So I make a branch: my own separate space to work in. Nothing on my branch touches the original. It's just a private sandbox, room to try something, get it wrong, and try again, all without any risk to what already works.

If I mess something up here, their original is completely untouched."

Good moment to mention: this is what makes it safe for AI tools to make changes too, the branch is the safety net.

---

## Slide 6: Commit

"Once my edit is actually done on that branch, I commit it. A commit is a saved snapshot, it locks in exactly what I changed, along with a short note describing what and why.

It's not overwriting anything. Each commit stacks right on top of the last one, so there's a trail, not just one file that keeps changing shape.

The moment I commit, my fix has its own record sitting right next to theirs."

If someone asks "so is a commit like saving a Word doc," say: closer to saving a version with a label on it, and you can go back to any earlier one.

---

## Slide 7: Push

"My commit is saved, but so far it only exists on my machine. Push sends it up to GitHub, to my branch specifically, not to main, not into their version.

Once it's pushed, my teammate can see the change and review it on their own time. Nobody had to be online with me while I made it.

At this point, my work is off my machine and sitting on GitHub. But it's not part of the real project yet. That's the next step."

This is the natural place to remind the room: push does not equal merge. Set that up before the next slide.

---

## Slide 8: Merge

"Here's the part people usually assume happens automatically, and it doesn't. Pushing a commit never merges anything into main. Merging is always a separate, deliberate action.

What actually happens: I open a pull request, basically a formal request that says 'take what's on my branch and fold it into main.' Depending on how the repo is set up, that PR might need someone to review and approve it first, or if I have the right permissions, I might be able to merge it myself.

Either way, someone has to click merge. That's the exact moment my branch actually becomes part of the shared project. Everything before that, the commit, the push, is just getting the change ready and visible. This is the step where my one fix becomes everyone's fix."

If someone asks who can merge: it depends on the repo's permissions and whether branch protection rules are turned on, not a fixed rule. Worth a live example if you have one.

---

## Slide 9: Recap & Demo Handoff

"So that's the whole loop: a repo to hold the project, a clone to get my own copy, a branch to edit safely, a commit to save the work, a push to send it back, and a merge to make it official.

None of this required me to know any commands yet, that's intentional. Now I want to actually show you this live: my own Claude Code, Cursor, and Codex setup, connected to GitHub, so you can see these same six steps happen in real time."

Transition directly into the live demo from here, don't leave a gap.
