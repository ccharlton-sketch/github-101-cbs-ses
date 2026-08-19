# GitHub 101 for CBS SEs: Talk Track

Rough speaking notes for each slide, plus the live demo. These are a starting point, adjust to how the room is reacting.

---

## Slide 1: Title

"Today's not really about GitHub as a tool. It's about a problem a lot of us have run into without realizing GitHub was the fix. Before I tell you the story, let's see what you already think. I'm going to ask you three questions, no wrong answers yet, just shout out what you'd guess."

Keep this short, it's just setting expectations. Don't explain any concepts yet.

---

## Quiz 1: Where does it live?

"When you build something with Claude Code, Codex, or Cursor, where does it actually live?"

Let the room call out guesses, then click Reveal. "Only on your own computer. Not the Salesforce file system, not some cloud the AI tool is managing for you. It's a folder on your laptop, same as any other file you've ever created."

This is the setup for the whole talk, land it clearly before moving on.

---

## Quiz 2: How do you collaborate?

"So if it's just sitting on your laptop, how do you actually collaborate with someone else on it?"

Let people answer out loud, they'll usually say screen-share or Slack the files. Reveal: "Right, that's basically it today. Screen-share, or zip it and send it over Slack. Neither one lets someone actually get in and make changes themselves."

Good moment to pause, this is the real pain everyone in the room has felt.

---

## Quiz 3: Undoing a change

"Last one. You ask Claude Code or Cursor to make a change, and it's wrong. How do you get back to the version that worked?"

Reveal: "You ask the AI to undo it, and hope it remembers what the old version looked like. There's no real button for this. No safety net, just the AI's memory of your own project."

"Keep those three answers in your head, because everything in this talk is going to fix one of them."

---

## Slide 2: The Story

"Here's what actually happened to me. I'd been building a demo for weeks. All of it lived in one folder, on one laptop. Then I needed to send it to someone, and realized I had no good way to do that.

No backup, if that laptop died, the project died with it. No easy way to share, my only option was zipping files and emailing them. No history, if I broke something, there was no way back to a working version.

One dead hard drive, and weeks of work would just be gone. So I decided to fix it, before I found out the hard way."

Pause here. This is the hook, let it land before moving on. It's the same three gaps the quiz just surfaced, now with stakes attached.

---

## Slide 3: Repo

"The first piece that fixes this is the repo. A repository, or repo, is just the project folder, all the files, images, and history for one project, in one place, on GitHub instead of on my laptop.

It's not tied to one machine anymore. It's got its own home. And it's not a zip file I have to remember to re-send, it's a link, anyone I share the repo with can open it instantly.

The repo alone would have saved my project the moment my laptop was at risk."

If people ask "so it's like a shared drive," that's a fine analogy, run with it.

---

## Slide 4: Commit

"Now I'm actually building. As I work, I commit. A commit is a saved snapshot, it locks in exactly what I changed right now, along with a short note describing what and why.

It's not overwriting anything. Each commit stacks right on top of the last one, so there's a trail I can always step back to, not just one file that keeps changing shape.

But a commit alone still only lives on my laptop. That's what push is for."

If someone asks "is a commit like saving a Word doc," say: closer to saving a version with a label on it, and you can go back to any earlier one.

---

## Slide 5: Push

"A commit by itself hasn't gone anywhere; it's still just on my machine. Push is what sends it up to GitHub.

Once it's pushed: my commits are backed up for real, and the project is ready to share, anyone I want to show it to just needs a link.

Backed up. A week later, I'd find out just how much that mattered."

Good spot to flag: commit is local, push is the step that leaves your laptop. That distinction is exactly what the second quiz question sets up.

---

## Slide 6: Clone

"A week later, my laptop actually died. I borrowed a new one, and cloned the repo, downloading the whole project from GitHub straight onto a machine that had never touched it before.

Everything came with it: every file and every past commit, not just a snapshot. It didn't matter that the new laptop had never seen this project, it arrived exactly the same. Every commit I'd made was right there, down to the last one before push.

The exact disaster from the start of this talk. This time, it was a non-event."

This is the payoff slide, let it land. It directly answers Quiz 1: the code was never really safe until it left the laptop.

---

## Slide 7: Recap & Demo Handoff

"So that's the whole loop: a repo to hold the project, commits to save your work, a push to send it to GitHub, and a clone to get it back onto any machine when you need to.

None of this required me to know any commands ahead of time, that's intentional. Now I want to show you this live."

Transition directly into the live demo from here, don't leave a gap.

---

## Live Demo

Rough sequence, narrate each step out loud as you do it so the room connects the concept slide to the real action.

**1. Authorize GitHub in Claude Code / Cursor / Codex**

Show the auth flow (or that it's already connected, same idea as `gh auth status`). "This is the one-time step, connecting your AI tool to your GitHub account. After this, everything I do is really just me, working through the AI tool, but talking to GitHub underneath."

**2. Ask Claude to look at your GitHub repos**

Have it list your repos live, e.g. "show me my GitHub repos" or similar. "Notice I didn't open a browser and go to github.com. I just asked, and it looked. That's the repo access from Slide 3, made real."

**3. Make a change to a local file**

Pick something small and visible (a color, a headline, some copy). Show the file *before* and *after* side by side if you can.

"Right now, this change only exists on my laptop. If you went to GitHub right now and refreshed the repo, you would not see this. That's commit versus push, it's not real to anyone else yet."

**4. Commit and push**

Narrate as you go: "Now I'm committing, that's the local snapshot. And now I'm pushing, that's the moment it actually leaves my laptop."

**5. Watch it deploy live on Heroku**

Flip to the Heroku dashboard's activity feed / release log right after the push. "Watch this, the push to GitHub is what's triggering this build, automatically. No separate deploy step, no me running another command. GitHub push is the deploy."

Wait for the new release to show as current, then reload the live app URL to show the change is now visible to anyone, not just you.

"That's the whole story, in under two minutes, live: your code went from being trapped on one laptop, to backed up, to shared with an entire room, automatically."

Good closing line, let the deployed page sit on screen for a moment before wrapping up.
