---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "video"
video_id: "Dli5slNaJu0"
title: "I Hated Every Coding Agent, So I Built My Own — Mario Zechner (Pi)"
video_url: "https://www.youtube.com/watch?v=Dli5slNaJu0"
thumbnail_url: "https://i.ytimg.com/vi/Dli5slNaJu0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Dli5slNaJu0"
channel: "Mastra"
channel_name: "Mastra"
channel_id: "UCTYjNDUYsrt7DrwU11fdyhQ"
uploader_id: "@mastra-ai"
published_at: "2026-03-31T13:10:07.000Z"
upload_date: "2026-03-31"
duration_seconds: 1635
duration_human: "27:15"
view_count: 149638
like_count: 4636
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-20T11:10:52.870Z"
---

# I Hated Every Coding Agent, So I Built My Own — Mario Zechner (Pi)

## Video Summary
- source_type: video
- video_url: https://www.youtube.com/watch?v=Dli5slNaJu0
- video_id: Dli5slNaJu0
- channel_name: Mastra
- channel_id: UCTYjNDUYsrt7DrwU11fdyhQ
- uploader_id: @mastra-ai
- uploader_url: https://www.youtube.com/@mastra-ai
- published_at: 2026-03-31T13:10:07.000Z
- upload_date: 2026-03-31
- duration: 27:15
- view_count: 149638
- like_count: 4636
- has_subtitle: true
- language: en-US
- availability: public
- tags: pi coding agent, Mario Zechner, Claude Code, coding agents, terminal coding agent, OpenClaw, TerminalBench, Aider, OpenCode, Amp Sourcegraph, Codex CLI, context engineering, extensible agents, TypeScript, open source, developer tools, AI agents, libGDX, vibe coding, agent harness, Ghostty, Mitchell Hashimoto, prompt caching, AI Engineer London
- categories: Entertainment

## Description

Game development veteran, creator of libGDX, and 17-year open-source contributor Mario Zechner tells the story of how he ended up building pi, his own minimal, opinionated terminal coding agent.

It started in April 2025 when Peter Steinberger and Armin Ronacher (Flask, Sentry) dragged him into an overnight AI hackathon. Within weeks, Mario was hooked on Claude Code — until he wasn't. There was feature bloat, hidden context injection that changed daily, the infamous terminal flicker, and zero extensibility for power users.

He then surveyed the alternatives — Codex CLI, Amp, OpenCode... Eventually, he came across Terminus — an agent that gives the model nothing but a tmux session and raw keystrokes. If that's enough for the model to perform, what are all those extra features actually doing?

Mario's thesis: we're still in the "messing around and finding out" stage, and coding agents need to become more malleable so developers can experiment faster.

Pi is his answer: four tools (read, write, edit, bash), the shortest system prompt of any major agent, tree-structured sessions, full cost tracking, hot-reloading TypeScript extensions, and nothing injected behind your back. No MCP, no sub-agents, no plan mode — but all of it buildable in minutes through extensions.

The community has already shipped pi-annotate (visual frontend feedback), pi-messenger (a multi-agent chatroom), and someone even got Doom running. On TerminalBench, pi with Claude Opus 4.5 landed right behind Terminus — before it even had compaction.

🔗 LINKS & RESOURCES
pi coding agent: https://pi.dev
Mario Zechner: https://mariozechner.at
Peter Steinberger / OpenClaw: https://github.com/steipete
Armin Ronacher: https://lucumr.pocoo.org
Claude Code: https://docs.anthropic.com/en/docs/claude-code
Aider: https://aider.chat
OpenCode: https://github.com/anthropics/opencode
Amp (Sourcegraph): https://sourcegraph.com/amp
TerminalBench: https://terminalbench.com
Ghostty: https://ghostty.org
Vouch: https://github.com/mitchellh/vouch
libGDX: https://libgdx.com

AI Engineer London is a community meetup for engineers and founders building with AI, covering everything from agent frameworks and RAG pipelines to LLMs in production. Each event features technical talks, live demos, and hands-on networking. This talk was recorded at AI Engineer London #10, hosted by Tessl, in collaboration with AI Engineer London.

AI ENGINEER LONDON
📅 Events: https://lu.ma/aiengineerlondon
💼 LinkedIn: https://linkedin.com/company/ai-engineer-london-meetup

📚 MASTRA RESOURCES
Mastra: https://mastra.ai
Learn Mastra in the world's first MCP-Based Course: https://mastra.ai/course
Principles of Building AI Agents (Book): https://mastra.ai/books/principles-of-building-ai-agents
Patterns for Building AI Agents (New Book): https://mastra.ai/books/patterns-of-building-ai-agents

MASTRA?
Mastra is an open-source TypeScript framework designed for building and shipping AI-powered applications and agents with minimal friction. It supports the full lifecycle of agent development—from prototype to production. You can integrate it with frontend and backend stacks (e.g., React, Next.js, Node) or run agents as standalone services. If you're a JavaScript or TypeScript developer looking to build an agentic or AI-powered product without starting from first principles, Mastra provides the scaffolding, tools, and integrations to accelerate that process.

📑 CHAPTERS
00:00 Intro
02:17 The history of coding agents: ChatGPT → Copilot → Aider → Claude Code
04:52 What Claude Code got right — and where it became a spaceship
06:04 Claude Code Drawbacks
09:39 Claude Code Alternatives
11:38 OpenCode's compaction problem and prompt cache busting
12:51 Why LSP feedback mid-edit is a terrible idea
14:26 OpenCode's architecture issues and security vulnerability
16:06 TerminalBench and Terminus
18:13 Mario's Two Theses
19:08 Introducing pi — strip everything, build a minimal extensible core
20:01 The system prompt
21:18 What's not in pi — and what you build instead
22:40 Extensions: custom tools, custom UI, hot reloading
24:00 Community extensions
24:59 Tree-structured sessions, cost tracking, HTML export
25:33 TerminalBench results
25:54 Open source under siege and human verification

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
[music]

00:00:02 --> 00:00:08
>> Hi, my name is Mario. I hail from the

00:00:04 --> 00:00:11
land of Arnold Schwarzenegger, which you

00:00:08 --> 00:00:13
probably haven't noticed yet based on my

00:00:10 --> 00:00:14
very good English.

00:00:12 --> 00:00:16
I want to preface this with we've been

00:00:14 --> 00:00:19
running around with our 4-year-old the

00:00:15 --> 00:00:22
ntire day through London. So we went to

00:00:18 --> 00:00:23
dinosaurs, mummies, Nando's obviously.

00:00:21 --> 00:00:24
Uh

00:00:22 --> 00:00:27
>> [laughter]

00:00:23 --> 00:00:30
>> Uh and stuff I have already forgotten.

00:00:26 --> 00:00:32
I'm very very tired and if you don't

00:00:29 --> 00:00:35
understand anything I say, just raise

00:00:31 --> 00:00:36
your hand and and say grandpa wake up.

00:00:34 --> 00:00:39
Sure.

00:00:35 --> 00:00:41
Um the reason I'm here is actually

00:00:38 --> 00:00:43
another person which is here incognito

00:00:40 --> 00:00:46
day. Let's call him uh

00:00:42 --> 00:00:48
Steter Pineburger.

00:00:45 --> 00:00:48
>> [laughter]

00:00:47 --> 00:00:54
>> Um back in 2025, I think somewhere

00:00:51 --> 00:00:58
around April.

00:00:53 --> 00:01:00
He told me and Armin Ronacher, which you

00:00:57 --> 00:01:01
might also know of last fame and sentry

00:00:59 --> 00:01:03
fame.

00:01:00 --> 00:01:05
Dudes, those coding agents, they

00:01:02 --> 00:01:07
actually work now.

00:01:04 --> 00:01:07
I was like, oh shut the [ __ ] up.

00:01:06 --> 00:01:10
>> [laughter]

00:01:06 --> 00:01:12
>> Sorry, I'm also using swear words. Um

00:01:09 --> 00:01:15
totally not. And a month later we teamed

00:01:11 --> 00:01:17
up at this flat for 24 hours overnight

00:01:14 --> 00:01:20
and just let ourselves uh

00:01:16 --> 00:01:22
get um immersed by the clankers, by the

00:01:19 --> 00:01:25
wipe code and by the wipe slop. And

00:01:21 --> 00:01:28
since then none of us have really were

00:01:24 --> 00:01:29
sleeping anymore basically.

00:01:27 --> 00:01:32
So we're

00:01:28 --> 00:01:34
building stuff, lots of stuff.

00:01:31 --> 00:01:35
Most of which we actually never used

00:01:33 --> 00:01:37
because that's the new thing in

00:01:34 --> 00:01:39
2025-2026.

00:01:36 --> 00:01:41
We build a lot of stuff, but we don't

00:01:38 --> 00:01:43
build a lot of stuff we actually use. We

00:01:40 --> 00:01:46
wrote a lot of stuff uh

00:01:42 --> 00:01:48
and eventually that culminated in me

00:01:45 --> 00:01:50
thinking,

00:01:47 --> 00:01:51
I hate all the existing coding agents or

00:01:49 --> 00:01:54
harnesses.

00:01:50 --> 00:01:56
How hard can it be to write one myself?

00:01:53 --> 00:01:58
And Peter was like, oh I just want to do

00:01:55 --> 00:02:01
a thing. Nobody's probably going to hear

00:01:57 --> 00:02:02
about it and uh it's going to be a

00:02:00 --> 00:02:04
personal assistant because that's what I

00:02:01 --> 00:02:06
always wanted to have and yeah, most of

00:02:03 --> 00:02:08
you probably know how his story went. So

00:02:05 --> 00:02:10
today I'm going to tell you my much less

00:02:07 --> 00:02:12
impressive story, but I I hope I can

00:02:09 --> 00:02:14
transport a couple of learnings as we

00:02:11 --> 00:02:15
say in the industry.

00:02:13 --> 00:02:17
Um

00:02:14 --> 00:02:20
that I was able to gather in the past

00:02:16 --> 00:02:22
couple months. So pi.

00:02:19 --> 00:02:24
In the beginning there was cloud code.

00:02:21 --> 00:02:26
Actually, there was copy and pasting

00:02:23 --> 00:02:28
from chat GPT, right? We all did that in

00:02:25 --> 00:02:30
the beginning 2023.

00:02:27 --> 00:02:33
Uh then there was who remembers the

00:02:29 --> 00:02:34
original GitHub co-pilot?

00:02:32 --> 00:02:36
Yeah, actually how many of you are

00:02:33 --> 00:02:38
ngineers?

00:02:35 --> 00:02:41
How many of you are using coding agents

00:02:37 --> 00:02:44
like cursor, cloud code? Okay.

00:02:40 --> 00:02:46
Uh popularity contest cloud code?

00:02:43 --> 00:02:49
CodeX CLI?

00:02:45 --> 00:02:49
Cursor?

00:02:48 --> 00:02:52
Open?

00:02:48 --> 00:02:55
>> versus? Yeah. Open code? Anti-gravity.

00:02:51 --> 00:02:56
Oh that's not a lot. Anybody using this?

00:02:54 --> 00:02:57
>> [laughter]

00:02:55 --> 00:02:59
>> I like you.

00:02:56 --> 00:03:02
We're going to have a beer later.

00:02:58 --> 00:03:04
Anyway, so this was basically

00:03:01 --> 00:03:06
what happened, right? In 2025 and

00:03:03 --> 00:03:08
before. Start with copy and pasting from

00:03:05 --> 00:03:10
chat GPT. It's all mostly broken. It's

00:03:07 --> 00:03:12
mostly single functions, stuff you don't

00:03:09 --> 00:03:13
want to write. Then you got GitHub

00:03:11 --> 00:03:15
co-pilot inside of your Visual Studio

00:03:13 --> 00:03:17
code where you just tap tap tap to

00:03:14 --> 00:03:19
happiness, which did work sometimes,

00:03:17 --> 00:03:21
mostly didn't. Sometimes it would also

00:03:18 --> 00:03:25
just verbatimly

00:03:20 --> 00:03:27
um recite GPL code like John Carmack's

00:03:24 --> 00:03:29
inverse square root and stuff like that,

00:03:26 --> 00:03:31
which was a lot of fun.

00:03:28 --> 00:03:35
And then there was Aider. Anybody

00:03:30 --> 00:03:37
remember Aider? Yes. Old people, hello.

00:03:34 --> 00:03:37
Um

00:03:36 --> 00:03:39
Yeah.

00:03:37 --> 00:03:41
You have gray hair. You obviously know

00:03:38 --> 00:03:44
Aider. Um

00:03:40 --> 00:03:46
There was also Auto GPT. Um probably not

00:03:43 --> 00:03:46
a lot there. Okay.

00:03:45 --> 00:03:47
>> [laughter]

00:03:45 --> 00:03:49
>> He knows all the things.

00:03:47 --> 00:03:51
Um

00:03:48 --> 00:03:53
And then eventually there was cloud

00:03:50 --> 00:03:56
code. Um I think they released it in

00:03:52 --> 00:03:57
November actually as a beta in 2024, but

00:03:55 --> 00:04:00
it really only became

00:03:56 --> 00:04:02
used um more

00:03:59 --> 00:04:05
Say again? February. Yeah, February,

00:04:01 --> 00:04:07
March, something like that 2025. And I

00:04:04 --> 00:04:09
was like, I love it. It's awesome. The

00:04:06 --> 00:04:11
cloud team is also awesome. They're on

00:04:08 --> 00:04:13
socials and they're all very good people

00:04:10 --> 00:04:16
and very talented people.

00:04:12 --> 00:04:17
Um and they basically created the entire

00:04:15 --> 00:04:21
genre. I know there were precursors like

00:04:16 --> 00:04:23
Aider and Auto GPT, but nothing did this

00:04:20 --> 00:04:25
and this was basically the whole agentic

00:04:22 --> 00:04:27
search thing. So instead of like cursor

00:04:24 --> 00:04:29
going into your code base, indexing

00:04:26 --> 00:04:31
things, constructing ASTs and indexing

00:04:28 --> 00:04:34
that as well and it kind of and not

00:04:30 --> 00:04:36
really working. Um they just said, eh we

00:04:33 --> 00:04:39
reinforcement trained our models to just

00:04:36 --> 00:04:41
use file tools, bash tools to explore

00:04:38 --> 00:04:42
your code base ad hoc and find the

00:04:40 --> 00:04:44
places that it needs to find to

00:04:41 --> 00:04:46
understand the code and then modify the

00:04:43 --> 00:04:48
code. And this worked so well

00:04:46 --> 00:04:50
that yeah, we stopped sleeping because

00:04:47 --> 00:04:53
we all of a sudden could produce so much

00:04:49 --> 00:04:55
more code than we could before by hand.

00:04:52 --> 00:04:58
Back then it was simple and predictable

00:04:54 --> 00:05:02
and actually fit my workflow perfectly

00:04:57 --> 00:05:02
fine, but then

00:05:01 --> 00:05:08
They fell into the trap into which most

00:05:04 --> 00:05:10
of us probably fall. The clankers can

00:05:07 --> 00:05:11
write so much code, why not just let it

00:05:09 --> 00:05:13
write all the features you could ever

00:05:11 --> 00:05:15
imagine, right? Isn't that great? Let's

00:05:12 --> 00:05:16
just add this feature and that feature

00:05:14 --> 00:05:18
and this feature and that feature and

00:05:15 --> 00:05:20
eventually you end up with

00:05:17 --> 00:05:22
Homer Simpson's I don't even know what

00:05:19 --> 00:05:24
it's called. I call it a spaceship. And

00:05:22 --> 00:05:26
cloud code is now a spaceship. It does

00:05:23 --> 00:05:28
o many things that you actually

00:05:25 --> 00:05:31
probably ever use like 5% of what it

00:05:27 --> 00:05:34
offers. You only know about 10% in total

00:05:30 --> 00:05:35
and the rest the 90% that's left over

00:05:33 --> 00:05:37
that's kind of like the dark matter of

00:05:34 --> 00:05:40
AI agents. Nobody knows what it's

00:05:36 --> 00:05:41
actually doing. And I personally find

00:05:39 --> 00:05:44
this not to be very helpful because I

00:05:40 --> 00:05:46
still think that you kind of need to

00:05:43 --> 00:05:49
know what the agent is doing. This guy

00:05:45 --> 00:05:52
might disagree to some degree.

00:05:48 --> 00:05:54
Um and we're here at Tessel and they

00:05:51 --> 00:05:56
also like context management, right? Or

00:05:53 --> 00:05:57
context engineering as we've called it.

00:05:55 --> 00:05:59
And I

00:05:56 --> 00:06:01
eventually found that cloud code was not

00:05:58 --> 00:06:03
a good tool when it comes to

00:06:00 --> 00:06:05
bservability and actually managing your

00:06:02 --> 00:06:07
context.

00:06:04 --> 00:06:09
Um then there was also this. Who likes

00:06:06 --> 00:06:11
this about cloud code? Like the immense

00:06:08 --> 00:06:12
amounts of flicker, unexplainable

00:06:10 --> 00:06:14
flicker. Well actually I know how to

00:06:12 --> 00:06:16
explain it and why it happens, but they

00:06:13 --> 00:06:18
still haven't fixed it.

00:06:15 --> 00:06:20
Here's Tariq, he's really great. I I

00:06:17 --> 00:06:22
love him. He is their dev rel guy mostly

00:06:19 --> 00:06:24
on Twitter and he's amazing.

00:06:21 --> 00:06:27
But sometimes he also says questionable

00:06:23 --> 00:06:29
stuff like our terminal user interface

00:06:26 --> 00:06:31
is now a game engine. Now you have to

00:06:28 --> 00:06:32
know I have a game development

00:06:30 --> 00:06:33
background. Like that's where I come

00:06:31 --> 00:06:35
from and if I read something like this

00:06:32 --> 00:06:37
then it kind of hurts me a little bit

00:06:34 --> 00:06:39
because it's a freaking terminal user

00:06:36 --> 00:06:40
interface, dude. It's not a game engine,

00:06:38 --> 00:06:40
trust me.

00:06:39 --> 00:06:42
>> [laughter]

00:06:39 --> 00:06:43
>> The only reason you think it's a game

00:06:41 --> 00:06:45
ngine is because you're using react in

00:06:42 --> 00:06:47
your terminal interface and it takes

00:06:44 --> 00:06:51
like 12 milliseconds to re-layout your

00:06:46 --> 00:06:53
entire user interface graph. Just don't

00:06:50 --> 00:06:54
do that, man. You don't it's not a game

00:06:52 --> 00:06:56
ngine, right?

00:06:53 --> 00:06:59
So and then uh Mitchell who is writing

00:06:55 --> 00:07:02
Ghosty was like, dude that's offensive,

00:06:58 --> 00:07:03
man. Like don't blame it on Ghosty or

00:07:01 --> 00:07:04
any other terminal. Your code is

00:07:02 --> 00:07:05
garbage.

00:07:03 --> 00:07:06
>> [laughter]

00:07:04 --> 00:07:11
>> Terminals can render it like a hundreds

00:07:05 --> 00:07:11
of frames per second uh

00:08:09 --> 00:08:14
point, which would basically mess with

00:08:11 --> 00:08:16
your existing workflows. It was just not

00:08:13 --> 00:08:17
a stable tool. And now I understand it

00:08:15 --> 00:08:18
from their perspective, they need to

00:08:16 --> 00:08:20
experiment and they have a huge user

00:08:17 --> 00:08:22
base and it's really hard to experiment

00:08:19 --> 00:08:25
when you have a huge user base.

00:08:21 --> 00:08:27
But they did not care. So all of us had

00:08:24 --> 00:08:29
to suffer, right? You you're working

00:08:26 --> 00:08:31
with this new tool, you try to

00:08:28 --> 00:08:34
create predictable workflows

00:08:30 --> 00:08:36
and then [snorts] the tool vendor

00:08:33 --> 00:08:38
changes a tiny little thing under the

00:08:35 --> 00:08:40
hood that makes the LLM go crazy with

00:08:37 --> 00:08:41
your existing workflows. That's just not

00:08:39 --> 00:08:43
sustainable. I need control over that. I

00:08:40 --> 00:08:47
can't rely on them

00:08:42 --> 00:08:49
providing me a stable kind of thing. Um

00:08:46 --> 00:08:51
So

00:08:48 --> 00:08:54
I believe as a consequence of their UI

00:08:50 --> 00:08:55
design, um they need to reduce the

00:08:53 --> 00:08:57
amount of visibility you have. I

00:08:54 --> 00:08:58
personally don't like that too much, but

00:08:56 --> 00:08:59
hat's just a personal preference. I

00:08:57 --> 00:09:01
understand that most people will be

00:08:58 --> 00:09:04
happy with the amount of information

00:09:00 --> 00:09:06
that cloud code will present you. Um

00:09:03 --> 00:09:09
There is zero model choice obviously

00:09:05 --> 00:09:11
because it's a Anthropic native tool so

00:09:08 --> 00:09:13
to speak. That's not a downside because

00:09:10 --> 00:09:16
cloud models models are I like them.

00:09:12 --> 00:09:18
Like they're really good. Um

00:09:15 --> 00:09:20
And there's almost zero extensibility

00:09:17 --> 00:09:21
and you might find this kind of funny

00:09:19 --> 00:09:23
because they have this whole hook system

00:09:20 --> 00:09:26
and all of that, but if you compare it

00:09:22 --> 00:09:29
o what pi allows you to do, it's it's

00:09:25 --> 00:09:32
not as deeply integrated. Um it's also

00:09:28 --> 00:09:35
basically based on running a process

00:09:31 --> 00:09:38
when the hook event starts, which is

00:09:34 --> 00:09:40
very expensive um if you have to start

00:09:37 --> 00:09:43
up that process over and over again.

00:09:39 --> 00:09:45
So eventually I I I soured on cloud

00:09:42 --> 00:09:47
code, not because it was terrible. It

00:09:44 --> 00:09:50
was just it did it stopped being a fit

00:09:46 --> 00:09:52
for me. It became a fit for a lot more

00:09:49 --> 00:09:53
people over that period. So obviously

00:09:51 --> 00:09:55
they did they're doing things right,

00:09:52 --> 00:09:57
right? But not for me.

00:09:54 --> 00:10:00
Because I'm old.

00:09:56 --> 00:10:02
So then I was looking around for options

00:09:59 --> 00:10:03
and there is Codex CLI which I really

00:10:01 --> 00:10:06
didn't like in the beginning both the

00:10:02 --> 00:10:08
user interface as well as the model.

00:10:05 --> 00:10:10
That has changed at least with respect

00:10:07 --> 00:10:11
o the model. Codex is really pretty

00:10:09 --> 00:10:14
good now.

00:10:10 --> 00:10:17
And there's Amp. The team behind that

00:10:13 --> 00:10:20
used to work at Sourcegraph. They

00:10:16 --> 00:10:21
How do you this spin off of Sourcegraph?

00:10:19 --> 00:10:24
Graph. And there is super good

00:10:20 --> 00:10:26
engineers. They they they managed to

00:10:23 --> 00:10:28
build a commercial coding harness where

00:10:25 --> 00:10:29
they take away features instead of

00:10:27 --> 00:10:32
adding them.

00:10:28 --> 00:10:34
And most of the choices make a lot of

00:10:31 --> 00:10:35
sense to me. Um

00:10:33 --> 00:10:37
So yeah, if you're looking for a

00:10:34 --> 00:10:39
commercial coding harness, I would

00:10:36 --> 00:10:42
efinitely recommend Amp to you because

00:10:38 --> 00:10:44
it's really good. Factory Troy

00:10:41 --> 00:10:46
kind of similar spiel um

00:10:43 --> 00:10:48
also really good although they're not as

00:10:45 --> 00:10:50
experimental as Amp.

00:10:47 --> 00:10:52
And then there's Open Code which is the

00:10:49 --> 00:10:54
open source uh coding harness a lot of

00:10:51 --> 00:10:56
people use, right?

00:10:53 --> 00:10:59
So I have a history with open source.

00:10:55 --> 00:11:01
I've been in open source for well

00:10:58 --> 00:11:03
uh 17 years.

00:11:00 --> 00:11:04
I've managed big and small open source

00:11:02 --> 00:11:04
projects.

00:11:03 --> 00:11:06
Uh

00:11:03 --> 00:11:09
so that's near and dear to my heart and

00:11:05 --> 00:11:13
so I thought I'd give Open Code a

00:11:08 --> 00:11:14
try because that's close to me, right?

00:11:12 --> 00:11:17
And next to Amp, they have one of the

00:11:13 --> 00:11:19
most grounded or pragmatic teams in the

00:11:16 --> 00:11:21
space. They don't hype you up with

00:11:18 --> 00:11:22
features you probably never use. They

00:11:20 --> 00:11:24
try to um

00:11:22 --> 00:11:26
kind of conserve a happy path that's

00:11:23 --> 00:11:28
very stable. Um

00:11:25 --> 00:11:30
And they also have pretty good thoughts

00:11:27 --> 00:11:32
on what coding agents mean for us as a

00:11:29 --> 00:11:33
profession which I personally can

00:11:31 --> 00:11:35
identify with.

00:11:32 --> 00:11:37
Um

00:11:34 --> 00:11:38
The problem with Open Code is that it's

00:11:36 --> 00:11:39
also not very good at managing your

00:11:37 --> 00:11:42
context.

00:11:38 --> 00:11:45
Uh for example on each turn

00:11:42 --> 00:11:48
it's calling session compaction.prune

00:11:44 --> 00:11:52
which does the following. It prunes all

00:11:47 --> 00:11:55
tool results um before the last 40,000

00:11:51 --> 00:11:57
tokens. Now who here knows what prompt

00:11:54 --> 00:11:59
caching is?

00:11:56 --> 00:12:00
Right. What does this do to your prompt

00:11:58 --> 00:12:03
cache?

00:11:59 --> 00:12:05
Lost the prompt cache. Yes.

00:12:02 --> 00:12:08
So Open Code and Anthropic had an

00:12:04 --> 00:12:10
interesting history and eventually

00:12:07 --> 00:12:11
Anthropic in my opinion

00:12:09 --> 00:12:14
um

00:12:10 --> 00:12:15
rightly so said, "Dudes, that's just not

00:12:13 --> 00:12:17
going to happen, right?"

00:12:14 --> 00:12:19
And there was never a public kind of

00:12:17 --> 00:12:21
thing about this, but Tarik explains it

00:12:18 --> 00:12:23
here. If you come to a gym and don't

00:12:20 --> 00:12:26
behave and and abuse the infrastructure

00:12:22 --> 00:12:28
so to speak, you're going to get banned.

00:12:25 --> 00:12:29
And I think

00:12:27 --> 00:12:31
I don't have any evidence for that, but

00:12:28 --> 00:12:33
I think that's the reason

00:12:30 --> 00:12:35
why there is this animosity between

00:12:32 --> 00:12:36
Anthropic and Open Code. And I can

00:12:34 --> 00:12:38
totally agree

00:12:35 --> 00:12:40
or at least I think that Anthropic is

00:12:37 --> 00:12:43
clearly in the right here. Um don't mess

00:12:39 --> 00:12:45
with the infrastructure.

00:12:42 --> 00:12:47
Um then there's also other stuff like

00:12:44 --> 00:12:49
Open Code comes with LSP language server

00:12:46 --> 00:12:52
protocol support out of the box. Coming

00:12:48 --> 00:12:54
back to context engineering

00:12:51 --> 00:12:57
let's say you give your agent the task

00:12:53 --> 00:12:58
of modifying a bunch of files. What does

00:12:56 --> 00:13:01
that mean in practice? It will make a

00:12:57 --> 00:13:03
bunch of edits um

00:13:00 --> 00:13:04
one after the the other

00:13:02 --> 00:13:08
to a bunch of files.

00:13:03 --> 00:13:11
How probable is it that after the first

00:13:07 --> 00:13:13
edit out of 10 edits so to speak, the

00:13:10 --> 00:13:15
code will compile?

00:13:12 --> 00:13:16
What happens if you modify your code

00:13:14 --> 00:13:17
line by line?

00:13:15 --> 00:13:20
How long does it take for it to

00:13:16 --> 00:13:21
stabilize again and compiles cleanly?

00:13:19 --> 00:13:23
It doesn't. It won't compile after the

00:13:21 --> 00:13:25
first edit, probably not after the

00:13:22 --> 00:13:27
second edit and so on and so forth. So

00:13:24 --> 00:13:30
if you then turn around and say, "Hey,

00:13:26 --> 00:13:32
dear LSP server, I just edited one line

00:13:29 --> 00:13:34
in this file. Is it broken?" Then the

00:13:31 --> 00:13:37
LSP server will say, "Yes, it's really

00:13:33 --> 00:13:39
broken." And what this feature does it

00:13:36 --> 00:13:42
then injects this error directly

00:13:38 --> 00:13:43
after the tool call as a kind of

00:13:41 --> 00:13:45
eedback

00:13:42 --> 00:13:46
to the model, "Oh, what you just did is

00:13:44 --> 00:13:47
wrong."

00:13:45 --> 00:13:49
And the model is like

00:13:46 --> 00:13:50
"What the [ __ ] dude? I'm I'm not done

00:13:48 --> 00:13:52
diting things. Why are you telling me

00:13:49 --> 00:13:54
this? Obviously it's not wrong." But if

00:13:51 --> 00:13:56
you do this often enough, the model will

00:13:53 --> 00:13:58
just give up and that leads to very bad

00:13:55 --> 00:14:00
outcomes. Um

00:13:57 --> 00:14:03
So I'm not a fan of LSP. I think it's a

00:13:59 --> 00:14:04
very terrible idea to have that enabled.

00:14:02 --> 00:14:06
There is natural synchronization points

00:14:03 --> 00:14:08
where you want to have linting and type

00:14:05 --> 00:14:10
checking and all of that and that is

00:14:07 --> 00:14:13
when the agent think it's done.

00:14:09 --> 00:14:13
Only then.

00:14:13 --> 00:14:20
This has changed recently. This is a

00:14:15 --> 00:14:20
single session of Open Code.

00:14:19 --> 00:14:25
But every message becomes its own JSON

00:14:21 --> 00:14:27
file. Every single message becomes its

00:14:24 --> 00:14:29
own JSON file on disk.

00:14:26 --> 00:14:31
That indicates to me that there wasn't a

00:14:28 --> 00:14:32
lot of thought put into the architecture

00:14:30 --> 00:14:34
of the whole thing.

00:14:31 --> 00:14:36
And if I lose trust in that, I don't

00:14:33 --> 00:14:37
want to use that tool anymore.

00:14:35 --> 00:14:40
Again, I think the team is actually

00:14:36 --> 00:14:42
really good. I think they iterated super

00:14:39 --> 00:14:44
quickly and built something that's super

00:14:41 --> 00:14:46
useful to a lot of people obviously.

00:14:43 --> 00:14:48
It's just again decisions that I

00:14:45 --> 00:14:50
wouldn't have made that made me decide

00:14:47 --> 00:14:52
to build my own.

00:14:49 --> 00:14:53
Then there was also this Open Code comes

00:14:51 --> 00:14:55
with a

00:14:52 --> 00:14:56
um a server by default. The so the

00:14:54 --> 00:14:59
current architecture is based on a

00:14:56 --> 00:15:00
server and clients connect to it and the

00:14:58 --> 00:15:02
terminal user interface is one of the

00:14:59 --> 00:15:04
clients. There's also a desktop

00:15:01 --> 00:15:05
interface and I don't know.

00:15:03 --> 00:15:08
That turned out to be a security

00:15:04 --> 00:15:10
vulnerability with remote code execution

00:15:07 --> 00:15:13
baked in by default. And that's also

00:15:10 --> 00:15:15
like if you're so proud of your server

00:15:12 --> 00:15:17
infrastructure or server architecture

00:15:14 --> 00:15:19
then I would assume

00:15:16 --> 00:15:21
you're grown-up engineers that thought

00:15:18 --> 00:15:23
about security as well. And apparently

00:15:20 --> 00:15:24
that didn't happen. And this was open

00:15:22 --> 00:15:26
for a long time.

00:15:23 --> 00:15:27
And again, I'm not blaming anyone here.

00:15:25 --> 00:15:29
This is stuff that just happens if

00:15:26 --> 00:15:32
you're working in an industry that's

00:15:28 --> 00:15:33
operating at a break break breakneck

00:15:31 --> 00:15:35
speed that we haven't seen before,

00:15:32 --> 00:15:38
right? It's just I don't want to use

00:15:34 --> 00:15:40
that tool if that is a thing.

00:15:37 --> 00:15:42
So

00:15:39 --> 00:15:44
so this was my observations with regards

00:15:41 --> 00:15:46
to existing coding harnesses and Android

00:15:43 --> 00:15:49
would have been something I could have

00:15:45 --> 00:15:51
used, but again no control. In case of

00:15:48 --> 00:15:53
Amp, even decide what models you can use

00:15:50 --> 00:15:56
and it's only a single model for a

00:15:52 --> 00:15:57
single type of task and that's not me.

00:15:55 --> 00:15:58
In terms of Troy, I think it's a little

00:15:56 --> 00:16:01
bit more open.

00:15:58 --> 00:16:03
But at the time when I tried it out, um

00:16:00 --> 00:16:04
it just didn't

00:16:02 --> 00:16:07
I I didn't see a big

00:16:03 --> 00:16:08
um advantage over Cloud Code.

00:16:06 --> 00:16:10
>> [snorts]

00:16:07 --> 00:16:12
>> And then I looked into benchmarks for

00:16:09 --> 00:16:14
entirely different reasons and found

00:16:11 --> 00:16:16
Terminal Bench. Who knows what Terminal

00:16:13 --> 00:16:18
Bench is?

00:16:15 --> 00:16:19
Okay, basically it's a coding or an

00:16:17 --> 00:16:22
agent

00:16:18 --> 00:16:24
evaluation harness

00:16:21 --> 00:16:28
which has a bunch of computer use and

00:16:23 --> 00:16:29
programming related um um

00:16:27 --> 00:16:32
Sorry.

00:16:28 --> 00:16:34
Old and tired because we're all old.

00:16:31 --> 00:16:37
It has a bunch of computer use and

00:16:33 --> 00:16:40
coding related tasks that an agent or

00:16:36 --> 00:16:42
the LLM inside an agent harness um needs

00:16:39 --> 00:16:45
to uh fulfill. I think it's about 20 uh

00:16:41 --> 00:16:48
82 or so. And they're very diverse.

00:16:44 --> 00:16:49
They're from fix my Windows setup to um

00:16:47 --> 00:16:52
code me a Monte Carlo simulation or

00:16:48 --> 00:16:54
something like that. Um

00:16:51 --> 00:16:55
and they have a leaderboard and on that

00:16:53 --> 00:16:58
leaderboard you see the combination of

00:16:54 --> 00:16:59
coding agent harness and model, right?

00:16:57 --> 00:17:02
Um

00:16:58 --> 00:17:03
they have their own coding agent called

00:17:01 --> 00:17:07
Terminus.

00:17:03 --> 00:17:08
And I think it's brilliant because

00:17:06 --> 00:17:10
it's one of the best performing

00:17:07 --> 00:17:11
harnesses in the benchmark. You're going

00:17:09 --> 00:17:14
to see it later on.

00:17:10 --> 00:17:17
Uh what exactly does it do? Well, all

00:17:13 --> 00:17:19
the model gets uh is

00:17:16 --> 00:17:21
a tmux session and all it can do is send

00:17:18 --> 00:17:24
keystrokes to it and read back the the

00:17:20 --> 00:17:26
VT code sequences that are emitted.

00:17:23 --> 00:17:28
So this is like

00:17:25 --> 00:17:31
the smallest most minimal interface uh a

00:17:27 --> 00:17:33
model can have uh to to your computer,

00:17:30 --> 00:17:35
right? And this performs

00:17:33 --> 00:17:37
like top of the line of the entire

00:17:34 --> 00:17:39
leaderboard.

00:17:36 --> 00:17:41
So what does this tell us about existing

00:17:38 --> 00:17:43
coding agents harnesses? Do we need all

00:17:40 --> 00:17:46
these features for the models to

00:17:42 --> 00:17:46
actually perform?

00:17:45 --> 00:17:50
For me personally, this is not just

00:17:47 --> 00:17:52
about the model actually being good.

00:17:49 --> 00:17:54
It's also about me as the user the human

00:17:51 --> 00:17:55
having a way to interact with my agent

00:17:53 --> 00:17:59
with the model. And Terminus is

00:17:54 --> 00:18:01
obviously not the user experience or

00:17:58 --> 00:18:02
developer experience that I want.

00:18:00 --> 00:18:04
But it tells us that all of these

00:18:01 --> 00:18:06
features all of these coding harnesses

00:18:03 --> 00:18:08
have might not neces-

00:18:05 --> 00:18:11
might not be necessary to um

00:18:07 --> 00:18:12
get good results out of agents.

00:18:10 --> 00:18:14
So no file tools, no sub agents, no web

00:18:11 --> 00:18:16
search, or nothing.

00:18:13 --> 00:18:18
Two theses is based on all of these

00:18:15 --> 00:18:20
findings. We are in the messing around

00:18:17 --> 00:18:21
and finding out stage and nobody has any

00:18:19 --> 00:18:23
idea what the perfect coding agent

00:18:20 --> 00:18:24
should look like or what the perfect

00:18:22 --> 00:18:27
coding harness should look like. We're

00:18:23 --> 00:18:29
trying both minimalism and going full

00:18:26 --> 00:18:31
spaceship swarms and teams of agents and

00:18:28 --> 00:18:34
no control and full autonomy and

00:18:30 --> 00:18:35
whatever. I think that's not

00:18:33 --> 00:18:36
done yet. We haven't answered the

00:18:34 --> 00:18:38
question what this should look like

00:18:35 --> 00:18:39
ideally and what will become the

00:18:37 --> 00:18:40
industry standard.

00:18:38 --> 00:18:43
And the second thing is we need better

00:18:39 --> 00:18:45
ways to mess around uh with coding

00:18:42 --> 00:18:48
agents. That is we need them to be able

00:18:44 --> 00:18:50
to self-modify them uh selves and become

00:18:47 --> 00:18:52
malleable so we can quickly experiment

00:18:49 --> 00:18:54
with ideas and see if this is something

00:18:51 --> 00:18:57
we can make like an industry standard a

00:18:53 --> 00:18:58
new workflow that we probably all going

00:18:56 --> 00:19:00
to adapt.

00:18:58 --> 00:19:02
So the basic idea was and it's very

00:18:59 --> 00:19:04
simple and not rocket science, strip

00:19:01 --> 00:19:05
away everything and build a minimal

00:19:03 --> 00:19:06
extensible core.

00:19:04 --> 00:19:08
>> [snorts]

00:19:05 --> 00:19:10
>> There's some creature comforts. It's not

00:19:07 --> 00:19:13
a blank slate.

00:19:09 --> 00:19:15
So that's Pi um and the general motto is

00:19:12 --> 00:19:17
uh adapt your coding agent to your needs

00:19:14 --> 00:19:20
instead of the other way around.

00:19:16 --> 00:19:22
It comes with four packages uh

00:19:19 --> 00:19:24
an AI package which is basically just a

00:19:21 --> 00:19:26
simple abstraction over multiple

00:19:23 --> 00:19:28
providers which all speak different

00:19:25 --> 00:19:29
ransport protocols.

00:19:27 --> 00:19:32
Um so it's very easy to talk to all the

00:19:28 --> 00:19:34
providers and switch between them in the

00:19:31 --> 00:19:36
same context or same session.

00:19:33 --> 00:19:37
Um the agent core which is just a a

00:19:35 --> 00:19:39
generalized agent loop with tool

00:19:37 --> 00:19:40
invocations, verification, and so on and

00:19:38 --> 00:19:42
so forth.

00:19:39 --> 00:19:44
And streaming um

00:19:41 --> 00:19:46
uh a terminal user interface that's like

00:19:43 --> 00:19:47
600 lines of code.

00:19:45 --> 00:19:49
>> [laughter]

00:19:46 --> 00:19:50
>> And works really well surprisingly

00:19:48 --> 00:19:53
uh because it wasn't written by a

00:19:49 --> 00:19:56
clanker. Um and the coding agent itself

00:19:52 --> 00:19:58
which is both an SDK that that you can

00:19:55 --> 00:20:01
use head in headless mode

00:19:57 --> 00:20:03
or a full terminal user interface coding

00:20:00 --> 00:20:05
agent.

00:20:02 --> 00:20:08
This is the entire system prompt.

00:20:05 --> 00:20:09
There's nothing more there.

00:20:07 --> 00:20:14
Compared to other coding harnesses

00:20:08 --> 00:20:14
ystem prompts. That's in tokens. Yeah.

00:20:13 --> 00:20:18
It turns out frontier models are heavily

00:20:15 --> 00:20:21
RL trained to know what the coding agent

00:20:17 --> 00:20:23
is. So, why do you keep telling them

00:20:20 --> 00:20:26
that they're a coding agent and how they

00:20:22 --> 00:20:28
should do coding tasks, right?

00:20:25 --> 00:20:31
Um.

00:20:27 --> 00:20:32
YOLO by default. Why is that?

00:20:30 --> 00:20:35
Most coding agent harnesses at the

00:20:31 --> 00:20:39
moment have two modes, either

00:20:34 --> 00:20:40
agent can do whatever it wants or agent

00:20:38 --> 00:20:41
um

00:20:39 --> 00:20:43
gets to ask you, "Do you really want to

00:20:40 --> 00:20:45
delete this file? Do you really want to

00:20:42 --> 00:20:45
list the files in this directory?" And

00:20:44 --> 00:20:48
so on and so forth. And there's

00:20:44 --> 00:20:50
different shades of gray here, but at

00:20:47 --> 00:20:52
he end of the day it boils down to the

00:20:49 --> 00:20:54
user needs to approve an action by the

00:20:51 --> 00:20:55
agent and then we are safe. And I think

00:20:53 --> 00:20:57
that's wrong because that leads to

00:20:55 --> 00:20:59
fatigue and people will either turn it

00:20:56 --> 00:21:01
off entirely, YOLO mode, or just sit

00:20:59 --> 00:21:02
here and type enter without reading

00:21:00 --> 00:21:04
anything. So, I don't think that's a

00:21:01 --> 00:21:06
solution. Containerization is also not a

00:21:03 --> 00:21:07
solution if you're worried about

00:21:05 --> 00:21:09
exfiltration of data and prompt

00:21:06 --> 00:21:10
injections, but I think that's the only

00:21:08 --> 00:21:13
thing

00:21:09 --> 00:21:16
that you I think that's the best basis

00:21:12 --> 00:21:18
compared to guardrails like approval or

00:21:16 --> 00:21:20
dialogues.

00:21:17 --> 00:21:21
It only has four tools, read a file,

00:21:19 --> 00:21:23
write a file, edit a file, and bash.

00:21:20 --> 00:21:25
Bash is all you need. What's not in

00:21:22 --> 00:21:26
there? No MCP, no sub agents, no plan

00:21:24 --> 00:21:27
load, no background bash, no built-in

00:21:25 --> 00:21:30
to-do's.

00:21:26 --> 00:21:33
Here's what you can do instead. For MCP,

00:21:29 --> 00:21:35
use CLI tools plus skills or build an

00:21:32 --> 00:21:36
extension, which we'll see in a bit.

00:21:34 --> 00:21:39
Uh, no sub agents. Why? Because they're

00:21:35 --> 00:21:42
not as observable. Instead, use tmux and

00:21:38 --> 00:21:43
spawn the agent again.

00:21:41 --> 00:21:46
You have full control over the agent's

00:21:42 --> 00:21:47
outputs and inputs and can

00:21:45 --> 00:21:49
uh, see everything that's happening in

00:21:47 --> 00:21:53
the sub agent. Interestingly enough,

00:21:48 --> 00:21:56
code codes spawn uh, team mode now does

00:21:52 --> 00:21:58
exactly this basically as well.

00:21:55 --> 00:22:00
No plan load. Write a plan MD file. You

00:21:57 --> 00:22:03
have a persistent artifact instead of

00:21:59 --> 00:22:05
some janky UI that doesn't really fit

00:22:02 --> 00:22:06
into your terminal viewport

00:22:04 --> 00:22:07
uh, and you can reuse it across multiple

00:22:05 --> 00:22:09
sessions.

00:22:06 --> 00:22:12
Um, no background bash. Don't need it.

00:22:08 --> 00:22:13
We have tmux. It's the same thing.

00:22:11 --> 00:22:16
And no built-in to-do's. Write a to-do

00:22:12 --> 00:22:18
MD. Same thing. Or

00:22:15 --> 00:22:20
build all of this yourself the way you

00:22:17 --> 00:22:22
like it. And this is what Pi allows you

00:22:19 --> 00:22:24
by being super extensible. So, you can

00:22:21 --> 00:22:27
extend tools, custom you can give the

00:22:23 --> 00:22:29
LLM tools that you define. I think no

00:22:26 --> 00:22:32
ther coding agent harness currently

00:22:28 --> 00:22:33
offers that unless you fork open code.

00:22:32 --> 00:22:35
You don't need to hear it. You just

00:22:32 --> 00:22:38
write a simple TypeScript file and it

00:22:34 --> 00:22:40
gets loaded automatically.

00:22:37 --> 00:22:41
You can also write custom UI.

00:22:39 --> 00:22:44
Uh, skills are obviously in there,

00:22:40 --> 00:22:45
prompt templates, uh, themes

00:22:43 --> 00:22:48
uh, and you can bundle all of that up,

00:22:44 --> 00:22:49
put it on NPM or Git, and install it

00:22:47 --> 00:22:50
with a single command, which is very

00:22:48 --> 00:22:53
nice.

00:22:49 --> 00:22:54
And everything hot reloads. So, I

00:22:52 --> 00:22:57
develop my own extensions that are

00:22:53 --> 00:23:00
project or task specific um, in Pi

00:22:57 --> 00:23:03
nside the project

00:22:59 --> 00:23:06
and uh, as the uh, agent modifies the

00:23:02 --> 00:23:08
xtension, I just reload

00:23:05 --> 00:23:10
and it immediately updates

00:23:07 --> 00:23:12
uh, all of the

00:23:09 --> 00:23:14
running code, which is very nice. And in

00:23:11 --> 00:23:15
practice that means you can do custom

00:23:13 --> 00:23:17
compaction. I think that's one of the

00:23:14 --> 00:23:19
things that people should experiment

00:23:16 --> 00:23:20
more because all of compact of the

00:23:18 --> 00:23:21
compaction implementations currently are

00:23:19 --> 00:23:23
not good.

00:23:20 --> 00:23:25
Uh, permission gates, you can easily

00:23:22 --> 00:23:26
implement them in 50 lines of code and

00:23:24 --> 00:23:28
can uh, cover what all the other agent

00:23:25 --> 00:23:31
harnesses do if you want that. Custom

00:23:27 --> 00:23:33
providers, register proxies or off

00:23:30 --> 00:23:34
self-hosted models, don't care. You

00:23:32 --> 00:23:36
don't need me to do this for you. You

00:23:33 --> 00:23:37
can do this and actually your clankery

00:23:35 --> 00:23:39
can do it for you.

00:23:36 --> 00:23:41
Uh, or override any built-in tool.

00:23:38 --> 00:23:42
Modify how read, write, edit, and bash

00:23:40 --> 00:23:44
work.

00:23:41 --> 00:23:45
Don't care. I I have a version of read,

00:23:43 --> 00:23:48
write, edit, and bash that works through

00:23:44 --> 00:23:50
SSH on a remote machine.

00:23:47 --> 00:23:52
For me, that took 5 minutes to

00:23:49 --> 00:23:54
implement. And it works.

00:23:51 --> 00:23:56
Uh, and you have full tree access, so

00:23:53 --> 00:23:59
you can actually write entirely custom

00:23:55 --> 00:24:01
UI in the coding agent.

00:23:58 --> 00:24:03
Code code shipped slash by the way, it

00:24:00 --> 00:24:06
ook 5 minutes for somebody to replicate

00:24:02 --> 00:24:07
that in Pi with more features.

00:24:05 --> 00:24:09
Uh, Pi messenger, I have no idea what

00:24:06 --> 00:24:11
it's doing, but apparently it's like a

00:24:08 --> 00:24:14
chat room for multiple Pi agents that

00:24:10 --> 00:24:16
hen communicate which then has custom

00:24:13 --> 00:24:19
UI where you can look what they're doing

00:24:15 --> 00:24:22
and yeah, it just works. Uh.

00:24:18 --> 00:24:24
Um, or Pi mess if you forge just

00:24:21 --> 00:24:26
do play a game while the agent is

00:24:23 --> 00:24:28
running, right? You can do that.

00:24:25 --> 00:24:30
Um, or Pi annotate. Um

00:24:27 --> 00:24:31
open up the website you're working on

00:24:29 --> 00:24:34
currently and annotate stuff in the

00:24:30 --> 00:24:36
front end and give feedback to the agent

00:24:33 --> 00:24:38
directly in line.

00:24:35 --> 00:24:40
Feed it back into the context, have it

00:24:37 --> 00:24:41
modify the thing.

00:24:39 --> 00:24:43
Uh, or

00:24:40 --> 00:24:44
something I use is file switch. I don't

00:24:42 --> 00:24:46
want to switch over to an IDE or editor.

00:24:43 --> 00:24:48
I just want to quickly look at the file

00:24:45 --> 00:24:50
that's been modified. So, all of this is

00:24:47 --> 00:24:52
extensions. None of this is built-in and

00:24:49 --> 00:24:54
it takes people usually a couple of

00:24:51 --> 00:24:57
minutes to an afternoon to build all of

00:24:53 --> 00:24:58
this the way they wanted to.

00:24:56 --> 00:24:59
Pi web access, also don't know what it's

00:24:57 --> 00:25:00
doing.

00:24:58 --> 00:25:02
>> [laughter]

00:24:59 --> 00:25:04
>> Uh, Pi also comes with tree structure.

00:25:01 --> 00:25:07
Not going to explain that. Just look at

00:25:03 --> 00:25:09
pi.dev. Um, your session is a tree, not

00:25:06 --> 00:25:11
a linear list of chats. So, you can

00:25:08 --> 00:25:13
basically do sub agents by read all the

00:25:10 --> 00:25:14
files in the directory, summarize this,

00:25:12 --> 00:25:17
go back to my my root of the

00:25:13 --> 00:25:19
conversation, take the summary with me

00:25:16 --> 00:25:20
and do the actual work.

00:25:18 --> 00:25:23
Um.

00:25:19 --> 00:25:25
Nothing is injected behind your back.

00:25:22 --> 00:25:27
Agent skills, full cost tracking. A lot

00:25:24 --> 00:25:29
of harnesses don't do this. Yeah, open

00:25:26 --> 00:25:30
code does it not well.

00:25:28 --> 00:25:33
Uh,

00:25:29 --> 00:25:34
HTML export, JSON formats, headless JSON

00:25:32 --> 00:25:36
streaming, blah blah blah. Does it

00:25:33 --> 00:25:38
actually work? Well, terminal bench. Let

00:25:35 --> 00:25:41
me zoom in here. I can't. This is

00:25:37 --> 00:25:43
amazing. Here's Pi

00:25:40 --> 00:25:46
right behind Terminus 2

00:25:42 --> 00:25:47
uh, using Cloud Opus 4.5. That was back

00:25:45 --> 00:25:49
in October where Pi didn't even have

00:25:46 --> 00:25:50
compaction.

00:25:48 --> 00:25:52
Right?

00:25:49 --> 00:25:53
Uh, demo time. Skipping that. Rage

00:25:51 --> 00:25:55
against the clankers because they are

00:25:52 --> 00:25:56
breaking open source.

00:25:54 --> 00:25:59
If you are associated with this guy's

00:25:55 --> 00:26:00
project, then you will have hundreds of

00:25:58 --> 00:26:02
people coming

00:25:59 --> 00:26:05
from

00:26:01 --> 00:26:07
open claw to your repository and spam

00:26:04 --> 00:26:09
you with clanker filth and slop.

00:26:06 --> 00:26:10
Um, so I had to invent a couple of

00:26:08 --> 00:26:13
measures.

00:26:09 --> 00:26:15
I invented OSS vacation. So, I just

00:26:12 --> 00:26:17
close issues and PRs for a couple of

00:26:14 --> 00:26:19
weeks and work on things on my own.

00:26:16 --> 00:26:21
Anything that's important will be

00:26:18 --> 00:26:24
reported later on anyways.

00:26:20 --> 00:26:25
Or in the Discord. And then I also

00:26:23 --> 00:26:27
implemented a

00:26:24 --> 00:26:29
custom access kind of scheme where I

00:26:26 --> 00:26:32
have a markdown file in the repository.

00:26:28 --> 00:26:33
If somebody opens a PR without being in

00:26:31 --> 00:26:35
without their account name being in that

00:26:32 --> 00:26:37
markdown file, the PR gets auto closed.

00:26:34 --> 00:26:40
I don't care. First, introduce yourself

00:26:36 --> 00:26:42
in a human voice via an issue. Write an

00:26:39 --> 00:26:44
issue that's not longer than a display

00:26:41 --> 00:26:45
long because everything else is clanker

00:26:43 --> 00:26:47
slop, probably.

00:26:44 --> 00:26:49
And once you did that, I'm happy to

00:26:46 --> 00:26:51
looks good to me you. So, you get into

00:26:48 --> 00:26:53
that file and can now submit PRs to the

00:26:50 --> 00:26:55
repository. All I'm asking is human

00:26:52 --> 00:26:57
verification. And Mitchell from Ghost it

00:26:54 --> 00:26:58
hen took this and took the

00:26:56 --> 00:26:59
uh,

00:26:57 --> 00:27:01
built a project called vouch, which is

00:26:58 --> 00:27:03
more easily applicable to your own open

00:27:00 --> 00:27:07
source repository. [music]

00:27:02 --> 00:27:07
And that is Pi. Go forth and try it.

00:27:08 --> 00:27:11
>> [music]

<!-- YOUTUBE_TRANSCRIPT_END -->
