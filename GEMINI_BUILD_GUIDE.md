# GitHub 101 for Solutions Engineers — Build Guide for Gemini

A story-driven, 8-slide deck. Each slide is full-bleed (16:9), one idea per slide, generous whitespace, no bullet-heavy walls of text.

## Color scheme

| Role | Color | Hex |
|---|---|---|
| Primary brand blue (headlines, icons, accents) | Salesforce Blue | `#0176D3` |
| Dark navy (gradient start, deep accents) | Navy | `#032D60` |
| Light blue (gradient end, highlights) | Sky Blue | `#1B96FF` |
| Card background | Very light blue | `blue-50` / approx `#EFF6FF`–`#F0F7FF` |
| Card left border accent | Same as primary blue | `#0176D3` |
| Body text | Dark gray | `#1F2937` (gray-800) / `#374151` (gray-700) |
| Headline text | Near-black | `#111827` (gray-900) |
| Page background | White | `#FFFFFF` |

Fonts: any clean modern sans-serif (e.g. Inter, Helvetica Neue, Arial). Headlines bold, body text regular weight.

## Recurring layout pattern (slides 2–7)

Every "concept" slide (not the title or closing slide) follows this same template:

1. **Top row:** a large rounded-square icon badge (light blue background, blue icon) sitting to the left of the headline, side by side.
2. **Headline:** bold, dark gray/black, large (biggest text on the slide besides the title slide).
3. **Subhead:** one sentence, medium gray-blue tone, directly under the headline.
4. **Three-card row:** three equal-width cards side by side, light blue background, a colored left border stripe, each with its own small round icon badge, a short bold heading, and one short line of supporting text.
5. **Callout strip at the bottom:** a full-width light gray bar with a left blue border stripe, containing one punchy closing sentence in slightly larger text than the card body copy.

The title slide and closing slide break this pattern (described separately below).

---

## Slide 1 — Title

**Layout:** Full-bleed gradient background, no icon, centered text, both horizontally and vertically.

**Background:** Diagonal gradient from dark navy `#032D60` (top-left) through primary blue `#0176D3` to sky blue `#1B96FF` (bottom-right).

**Text (white, centered):**
- Headline (very large, bold, white): "GitHub 101 for Solutions Engineers"
- Subhead (large, white at ~90% opacity, lighter weight): "Why version control matters, even if you've never touched a command line."

No icon, no cards, no callout on this slide.

---

## Slide 2 — The Story

**Icon badge (top, next to headline):** Laptop icon.

**Headline:** "The Site I Couldn't Touch"

**Subhead:** "A teammate built a client site with Claude Code. It looked great. Then I needed to change something on it."

**Three cards:**
1. Icon: eye with a slash through it (view-blocked). Heading: "Can't view it." Text: "No link to open. It only lived on their laptop."
2. Icon: pencil with a slash through it (edit-blocked). Heading: "Can't edit it." Text: "No way in for me to make the change myself."
3. Icon: speech bubble with a slash through it (comment-blocked). Heading: "Can't comment." Text: "Just a Slack message, and a wait."

**Callout:** "Every fix meant pinging them and waiting until they had time to make it."

---

## Slide 3 — Repo

**Icon badge:** Folder icon with a small git-branch mark on it (a "project folder" icon).

**Headline:** "Repo: Where the Project Lives"

**Subhead:** "A repository, or repo, is the project folder: files, images, and history, all in one place on GitHub."

**Three cards:**
1. Icon: cloud. Heading: "Not on one laptop." Text: "It lives on GitHub, not just on someone's machine."
2. Icon: stacked boxes. Heading: "One project, one home." Text: "The client site gets its own repo, separate from everything else."
3. Icon: people/group. Heading: "Access opens the door." Text: "Add me to the repo, and I have a way in."

**Callout:** "The repo is the one thing that would have let me in at all."

---

## Slide 4 — Pull

**Icon badge:** Arrow pointing down into a tray/line (download icon).

**Headline:** "Pull: Getting My Own Copy"

**Subhead:** "Pull downloads the whole project onto my machine. Not a zip file someone emailed me, the real thing."

**Three cards:**
1. Icon: package with a checkmark. Heading: "The full project." Text: "Every file and every commit, not just the latest version."
2. Icon: small clock. Heading: "On demand." Text: "Whenever I need it, without asking anyone first."
3. Icon: circular refresh arrows. Heading: "Always current." Text: "Their latest changes come down with it too."

**Callout:** "I don't have to ask them to send me anything. I just pull it."

---

## Slide 5 — Branch

**Icon badge:** Git-branch icon (three connected nodes forming a fork).

**Headline:** "Branch: My Own Space to Edit"

**Subhead:** "A branch is my own copy to work in, so I can change the site without touching the version they're presenting tomorrow."

**Three cards:**
1. Icon: two overlapping squares (copy icon). Heading: "A separate copy." Text: "Split off just for my change."
2. Icon: shield with a checkmark. Heading: "The original stays put." Text: "Nothing on my branch touches theirs."
3. Icon: beaker/flask. Heading: "Room to experiment." Text: "Try it, get it wrong, try again."

**Callout:** "If I mess something up, their original is untouched."

---

## Slide 6 — Commit

**Icon badge:** Git-commit icon (a dot on a line).

**Headline:** "Commit: Saving My Edit"

**Subhead:** "Once my change was ready on that branch, committing saved it as a snapshot, with a note about what I did and why."

**Three cards:**
1. Icon: camera. Heading: "A saved moment." Text: "Locks in exactly what I changed."
2. Icon: speech bubble/message. Heading: "A short note attached." Text: "A message describing what changed and why."
3. Icon: clock/history icon. Heading: "A trail, not one file." Text: "Stacks right on top of theirs."

**Callout:** "The moment I commit, my fix has its own record sitting right next to theirs."

---

## Slide 7 — Push

**Icon badge:** Arrow pointing up out of a tray/line (upload icon).

**Headline:** "Push: Sending My Change Back"

**Subhead:** "Push sends my edit back to the shared project. My teammate can see it, and nobody had to be in the room while I made it."

**Three cards:**
1. Icon: arrow pointing up (upload). Heading: "My branch goes up." Text: "Uploads my commits to the shared repo."
2. Icon: eye. Heading: "They can see the change." Text: "My teammate reviews it on their own time."
3. Icon: checkmark in a circle. Heading: "It joins the project." Text: "Once merged, the fix is just part of the site."

**Callout:** "This is the point where I stop needing them online just to get my own work done."

---

## Slide 8 — Recap & Demo Handoff

**Layout:** Breaks from the standard template. No single large icon next to the headline. Instead:

**Headline:** "Now, Let's See It Live"

**Subhead:** "That's the whole story: a repo to hold the project, a pull to get a copy, a branch to edit safely, a commit to save the work, and a push to send it back."

**Row of 5 small recap chips (not 3 cards, five equal columns), each with a small blue icon stacked above a bold blue label, on a very light blue-to-sky-blue gradient background:**
1. Folder/project icon → "Repo"
2. Download-arrow icon → "Pull"
3. Git-branch icon → "Branch"
4. Git-commit icon → "Commit"
5. Upload-arrow icon → "Push"

**Closing banner (instead of the light-gray callout strip):** A full-width rounded box with a dark navy-to-blue gradient background (`#032D60` to `#0176D3`) and white text: "Next up: my own Claude Code, Cursor, and Codex setup, connected to GitHub, live."

---

## Notes for whoever builds this in Gemini

- Keep every slide's text as short as what's written above. The goal is a handful of words per card, not paragraphs.
- Icons should be simple, single-color line icons in the primary blue, never multi-color or photographic.
- Maintain the same icon-badge shapes throughout: rounded-square badges for the "big" headline icon, circular badges for the small card icons.
- Slide order matters: Title → Story → Repo → Pull → Branch → Commit → Push → Recap. This follows the real sequence of what a person actually does (get the repo, pull a copy, branch to edit, commit the edit, push it back).
