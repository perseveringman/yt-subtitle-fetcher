---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "UPGB-hsAoVY"
title: "The Powerful Alternative To Fine-Tuning"
video_url: "https://www.youtube.com/watch?v=UPGB-hsAoVY"
thumbnail_url: "https://i.ytimg.com/vi/UPGB-hsAoVY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=UPGB-hsAoVY"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-02-27T15:00:55.000Z"
upload_date: "2026-02-27"
duration_seconds: 1186
duration_human: "19:46"
view_count: 53834
like_count: 968
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-05-12T03:22:45.094Z"
---

# The Powerful Alternative To Fine-Tuning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=UPGB-hsAoVY
- video_id: UPGB-hsAoVY
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-02-27T15:00:55.000Z
- upload_date: 2026-02-27
- duration: 19:46
- view_count: 53834
- like_count: 968
- has_subtitle: true
- language: en
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

Poetiq is a new startup founded by former DeepMind researchers that recently achieved a major jump on the ARC-AGI benchmark by layering a recursive self-improvement system on top of existing models. In this episode of Lightcone, Poetiq's Founder & CEO Ian Fischer joined us to discuss how small teams can build “reasoning harnesses” that outperform base models, what that means for startups and why automating prompt engineering may be one of the most powerful levers in AI today.

Chapters:
00:00 – Intro
00:40 – What Is Poetiq?
01:07 – Recursive Self-Improvement Explained
02:07 – The Fine-Tuning Trap
02:59 – “Stilts” for LLMs
03:14 – Recursive Self-Improvement vs. Fine-Tuning
05:05 – Taking the Top Spot on ARC-AGI
06:37 – Beating Claude on Humanity’s Last Exam
08:40 – How the Meta-System Works
10:26 – Beyond RL: A New S-Curve
11:32 – Automating Prompt Engineering
13:37 – From 5% to 95% Performance
14:50 – Early Access & Putting Your Agent on Stilts
16:17 – From YC Founder to DeepMind Researcher
18:29 – Advice for Engineers in the AI Era


Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
The world is changing so quickly. This

00:00:01 --> 00:00:07
probably a little bit obvious, but

00:00:03 --> 00:00:10
you should just try things and and like

00:00:06 --> 00:00:14
very day do something with AI. Last

00:00:09 --> 00:00:16
summer, I took a weekend and used um

00:00:13 --> 00:00:19
GPT5 to help me build an iPhone app. I

00:00:15 --> 00:00:21
hadn't done that in a decade. And yeah,

00:00:18 --> 00:00:22
it's so fast and so easy. And that was,

00:00:20 --> 00:00:24
you know, an age ago. That was like 8

00:00:21 --> 00:00:26
months ago. Uh now it's even faster and

00:00:23 --> 00:00:28
easier. Don't limit yourself. like

00:00:26 --> 00:00:30
anything that you imagine, you should

00:00:27 --> 00:00:32
just try to use AI and see how far you

00:00:29 --> 00:00:36
can get with it and you'll be, you know,

00:00:31 --> 00:00:36
making the world better.

00:00:40 --> 00:00:45
Welcome to another episode of the Light

00:00:42 --> 00:00:48
Cone. Ian Fischer is the co-founder and

00:00:44 --> 00:00:51
co-CEO of Poetic, which is building

00:00:47 --> 00:00:53
recursively self-improving AI reasoning

00:00:50 --> 00:00:55
harnesses for LLMs. Previously, he spent

00:00:52 --> 00:00:58
a decade as a researcher at Google

00:00:54 --> 00:01:00
DeepMind and founded a mobile devtools

00:00:57 --> 00:01:01
company through YC years ago. Welcome,

00:00:59 --> 00:01:02
Ian.

00:01:00 --> 00:01:04
>> Thank you. I'm so happy to be here.

00:01:01 --> 00:01:06
>> What is Poetic? How's it different than

00:01:03 --> 00:01:08
RL? You know, how's it different than

00:01:05 --> 00:01:10
context engineering?

00:01:07 --> 00:01:12
>> At Poetic, what we're building is a

00:01:09 --> 00:01:14
recursively self-improving system. And

00:01:11 --> 00:01:16
so, recursive self-improvement is this

00:01:14 --> 00:01:18
uh, you know, kind of the holy grail of

00:01:15 --> 00:01:20
AI where the AI is making itself

00:01:17 --> 00:01:22
smarter. The core insight that we had is

00:01:19 --> 00:01:24
that uh we could do recursive

00:01:21 --> 00:01:27
self-improvement far faster and cheaper

00:01:24 --> 00:01:30
than all of the other ways that people

00:01:26 --> 00:01:31
had been proposing to do this. Uh and so

00:01:29 --> 00:01:34
bviously I'm I can't go into details

00:01:30 --> 00:01:36
about what that what that is um what our

00:01:33 --> 00:01:39
particular approach is but um most of

00:01:35 --> 00:01:43
the approaches out there involve you

00:01:38 --> 00:01:45
know they require you to train a new LLM

00:01:42 --> 00:01:47
from scratch and training LLMs from

00:01:44 --> 00:01:49
scratch costs you know hundreds of

00:01:46 --> 00:01:50
millions of dollars and takes uh months

00:01:48 --> 00:01:52
of effort and so the

00:01:49 --> 00:01:53
>> and then anthropic or openi will come

00:01:51 --> 00:01:54
along and just eat your lunch in the

00:01:52 --> 00:01:56
next model release

00:01:54 --> 00:01:58
>> right right and you know of course

00:01:55 --> 00:01:59
anthropic and openi and google they're

00:01:57 --> 00:02:01
xploring train recursive

00:01:58 --> 00:02:04
self-improvement but typically at that

00:02:00 --> 00:02:06
level of um having the you know having

00:02:03 --> 00:02:08
to train a new model uh for every step

00:02:06 --> 00:02:10
of self-improvement that they do.

00:02:07 --> 00:02:12
>> I mean that seems like actually the like

00:02:09 --> 00:02:15
defining thing that a startup really

00:02:11 --> 00:02:16
wants. Like I know that I want to

00:02:14 --> 00:02:18
take advantage of whatever the next

00:02:15 --> 00:02:20
model is, but the second you're in

00:02:17 --> 00:02:22
fine-tuning land, I'm spending, you

00:02:19 --> 00:02:24
know, millions to hundreds of millions

00:02:21 --> 00:02:26
of dollars and then guess what? like it

00:02:23 --> 00:02:28
I just lit it on fire cuz you know the

00:02:25 --> 00:02:30
next version of the frontier model comes

00:02:27 --> 00:02:33
out and I'll never catch up. Whereas

00:02:29 --> 00:02:35
like working with your systems means

00:02:32 --> 00:02:37
that I will always have the thing that

00:02:34 --> 00:02:39
is uh better than the thing that's out

00:02:36 --> 00:02:40
of box and that's sort of like the holy

00:02:38 --> 00:02:41
grail.

00:02:39 --> 00:02:43
>> Yeah, we think that this is uh

00:02:40 --> 00:02:45
incredibly valuable to anybody who's

00:02:42 --> 00:02:47
building on top of uh large language

00:02:44 --> 00:02:49
models and we don't view the uh you know

00:02:46 --> 00:02:52
the frontier models as competitors.

00:02:48 --> 00:02:53
They're, you know, they're the ones that

00:02:51 --> 00:02:55
were using the stilts, you know,

00:02:52 --> 00:02:58
building stilts to stand on top of, but

00:02:54 --> 00:02:59
uh if we didn't have that, um that

00:02:57 --> 00:03:00
foundational layer, then, you know,

00:02:58 --> 00:03:02
poetic couldn't exist.

00:02:59 --> 00:03:04
>> Yeah. I mean, being the smartest model,

00:03:01 --> 00:03:06
uh you know, it's a game of inches

00:03:03 --> 00:03:06
actually and like so those inches matter

00:03:05 --> 00:03:07
a lot,

00:03:05 --> 00:03:08
>> right? Right.

00:03:06 --> 00:03:10
>> How do we actually get started? I mean,

00:03:07 --> 00:03:13
you've built something that, uh,

00:03:09 --> 00:03:16
basically any startup could use that,

00:03:12 --> 00:03:19
uh, it's sort of like stilts really. We

00:03:15 --> 00:03:21
have built a system that um uh can

00:03:18 --> 00:03:24
automatically generate systems for your

00:03:20 --> 00:03:26
particular problem that will always

00:03:23 --> 00:03:29
outperform the underlying language

00:03:25 --> 00:03:30
models and without kind of the massive

00:03:28 --> 00:03:32
xpense as you're saying about the

00:03:29 --> 00:03:33
bitter lesson where you know what would

00:03:31 --> 00:03:35
you what would you have done without

00:03:32 --> 00:03:36
poetic you probably would have said okay

00:03:34 --> 00:03:38
we're going to first collect a large

00:03:35 --> 00:03:40
data set you know like tens of thousands

00:03:37 --> 00:03:42
of examples for our particular problem

00:03:39 --> 00:03:44
that we're working on and we're going to

00:03:41 --> 00:03:45
fine-tune you know the best model we can

00:03:43 --> 00:03:47
put get our hands

00:03:44 --> 00:03:48
uh maybe that's you know one of the

00:03:46 --> 00:03:50
frontier models or maybe it's an open

00:03:47 --> 00:03:52
weights model doesn't particularly

00:03:49 --> 00:03:53
matter. you're going to spend a lot of

00:03:51 --> 00:03:56
money on that fine-tuning. The the

00:03:52 --> 00:03:57
compute is so expensive. Uh and then at

00:03:55 --> 00:03:59
he end of it, you have something that

00:03:56 --> 00:04:02
uh you know works better than the thing

00:03:58 --> 00:04:04
that you fine-tuned on top of, but by

00:04:01 --> 00:04:05
then a new model's come out and it's

00:04:03 --> 00:04:07
better than the thing that you

00:04:04 --> 00:04:09
fine-tuned. You know, you fine-tuned,

00:04:06 --> 00:04:13
you know, like 3 years ago on top of GPT

00:04:08 --> 00:04:15
3.5 or whatever and then GPD 404 comes

00:04:12 --> 00:04:16
out and it just blows you out of the

00:04:14 --> 00:04:18
water. And so, are you going to do that

00:04:15 --> 00:04:20
again or are you going to go out of

00:04:17 --> 00:04:23
business? And like in some cases the the

00:04:19 --> 00:04:26
latter with poetic uh what we end up

00:04:22 --> 00:04:28
giving you is a uh you know people are

00:04:25 --> 00:04:30
calling these things harnesses now but

00:04:27 --> 00:04:31
you know or a gentic system or whatever

00:04:29 --> 00:04:34
you want to call it that sits on top of

00:04:30 --> 00:04:36
one or more language models and it just

00:04:33 --> 00:04:38
performs better than them. Uh and when

00:04:35 --> 00:04:41
the new model comes out that same

00:04:37 --> 00:04:43
harness is uh perfectly compatible with

00:04:40 --> 00:04:45
it. Uh and you don't need to change

00:04:42 --> 00:04:47
anything to get the uh you know an even

00:04:44 --> 00:04:49
uh bigger performance bump.

00:04:46 --> 00:04:52
Additionally, we can, you know, continue

00:04:48 --> 00:04:54
to optimize for this new model, whatever

00:04:51 --> 00:04:57
the new model is that you want to use,

00:04:54 --> 00:04:59
uh, and, you know, make it even better.

00:04:56 --> 00:05:01
Uh, but you, you don't lose out on, you

00:04:58 --> 00:05:03
know, hundreds of millions of dollars.

00:05:00 --> 00:05:06
In fact, we do this so much more

00:05:02 --> 00:05:06
cheaply, uh, than fine-tuning would cost

00:05:05 --> 00:05:08
as well.

00:05:05 --> 00:05:09
>> And you've done this actually a bunch of

00:05:07 --> 00:05:10
times, right? Like I remember when you

00:05:08 --> 00:05:13
first came out with your paper in

00:05:09 --> 00:05:16
December of last year, uh you shot to

00:05:12 --> 00:05:18
the top of ARC AGI V2 and then you've

00:05:15 --> 00:05:19
done this a bunch of times for other

00:05:17 --> 00:05:20
benchmarks too. What you know what was

00:05:18 --> 00:05:23
that like?

00:05:19 --> 00:05:25
>> ARGI v2 was this was kind of you us

00:05:22 --> 00:05:26
coming out of stealth letting people

00:05:24 --> 00:05:29
know that we could um tackle these

00:05:26 --> 00:05:31
really hard problems. Uh and in

00:05:28 --> 00:05:34
particular, you know, we wanted to show

00:05:30 --> 00:05:36
that our system could generate these um

00:05:33 --> 00:05:38
what we call, you know, we call our

00:05:35 --> 00:05:40
system like the poetic meta system can

00:05:37 --> 00:05:43
generate uh reasoning systems that are

00:05:39 --> 00:05:46
um highly effective. Gemini 3 had deep

00:05:42 --> 00:05:48
think had just come out. Uh and they

00:05:45 --> 00:05:50
were, you know, really quite uh

00:05:47 --> 00:05:53
dramatically at the top of the

00:05:49 --> 00:05:56
leaderboard at 45%. Uh and two days

00:05:52 --> 00:05:59
later we release our results where um uh

00:05:55 --> 00:06:01
we were showing that we could get uh a

00:05:58 --> 00:06:02
lot higher than that. Uh

00:06:00 --> 00:06:04
>> so they come out with soda and then you

00:06:01 --> 00:06:07
come in right above them every single

00:06:04 --> 00:06:09
time which is like wild to see honestly.

00:06:06 --> 00:06:11
That's what it's like to have stilt you

00:06:08 --> 00:06:13
know like whatever model comes out you

00:06:10 --> 00:06:14
can be taller than that one with poetic

00:06:12 --> 00:06:16
which is like that's so awesome.

00:06:14 --> 00:06:19
>> Yeah. So the interesting thing is that

00:06:15 --> 00:06:21
uh we were half the cost of Gemini 3

00:06:18 --> 00:06:23
deep think because we were building on

00:06:20 --> 00:06:26
top of Gemini 3 Pro which is a much

00:06:22 --> 00:06:28
eaper model um but we still got uh in

00:06:25 --> 00:06:30
the end a 9 percentage point improvement

00:06:27 --> 00:06:34
on the official verification. So they

00:06:29 --> 00:06:37
were at 45% and we and like 70s

00:06:33 --> 00:06:38
omething dollars and we were at 54% and

00:06:36 --> 00:06:40
$32 per problem.

00:06:37 --> 00:06:43
>> So recently you guys just announced some

00:06:39 --> 00:06:45
incredible results for humanity's last

00:06:42 --> 00:06:50
exam. Can you tell us more about those?

00:06:44 --> 00:06:52
>> Humanity's last exam is a a set of 2500

00:06:49 --> 00:06:54
really really hard questions written by

00:06:51 --> 00:06:57
experts in uh many different domains.

00:06:53 --> 00:06:59
They're they're meant to be uh

00:06:56 --> 00:07:02
challenging even for uh PhDs in those

00:06:58 --> 00:07:05
fields. AI hasn't passed it yet. Uh but

00:07:01 --> 00:07:07
we got to 55% which is almost two

00:07:04 --> 00:07:10
percentage points higher than the the

00:07:06 --> 00:07:14
previous uh state-of-the-art which came

00:07:09 --> 00:07:18
out just last week uh from uh Anthropic

00:07:13 --> 00:07:20
with Claude Opus 4.6. They got 53.1% and

00:07:17 --> 00:07:22
we got 55% on it.

00:07:19 --> 00:07:25
>> And one thing that uh humanity last exam

00:07:21 --> 00:07:28
doesn't publish is the cost of getting

00:07:24 --> 00:07:31
those results. In your case, this run

00:07:27 --> 00:07:32
was done with less than around six

00:07:30 --> 00:07:34
figure. How much was it?

00:07:31 --> 00:07:37
>> We didn't publish any uh cost for this,

00:07:33 --> 00:07:39
but I can say that the the optimization

00:07:36 --> 00:07:40
costs us less than 100k. Yeah.

00:07:38 --> 00:07:44
>> Which is impressive because each of

00:07:39 --> 00:07:46
these big foundation modeled train runs

00:07:43 --> 00:07:48
are in the hundreds of millions of

00:07:45 --> 00:07:50
dollars. And you guys, as a company,

00:07:47 --> 00:07:52
you're only seven people.

00:07:49 --> 00:07:54
>> That's right. Yeah. Yeah. Seven uh seven

00:07:51 --> 00:07:54
research scientists and research

00:07:53 --> 00:07:57
engineers. Yeah.

00:07:53 --> 00:07:58
>> That's impressive. And I think the thing

00:07:56 --> 00:08:00
that's very interesting about your

00:07:57 --> 00:08:02
approach is sort of taking a very

00:07:59 --> 00:08:04
scientific approach to the emergent

00:08:01 --> 00:08:06
behaviors that a lot of the best

00:08:03 --> 00:08:09
founders are doing with models. I think

00:08:05 --> 00:08:12
a lot of uh founders that get very good

00:08:08 --> 00:08:14
results for agents, they treat the

00:08:11 --> 00:08:16
underlying model as a common layer that

00:08:13 --> 00:08:20
you can switch in between. And there's

00:08:15 --> 00:08:22
certain tasks for example for GPD 5.2

00:08:19 --> 00:08:24
two like very hard to verify bugs gets

00:08:21 --> 00:08:27
ent to that versus architecture that

00:08:23 --> 00:08:29
gets sent to claw 4.6 six, but you're

00:08:26 --> 00:08:33
kind of doing this automatically instead

00:08:28 --> 00:08:34
of having a human conducting is uh very

00:08:32 --> 00:08:36
impressive. I think there's something

00:08:33 --> 00:08:38
more special going on underneath. Can

00:08:35 --> 00:08:40
you tell us a bit about how it works?

00:08:37 --> 00:08:41
>> Yeah, it sounds magical. So, what can

00:08:39 --> 00:08:42
you tell us?

00:08:40 --> 00:08:44
>> Right. You're you're So, you're getting

00:08:41 --> 00:08:48
at a core a really core thing. You know,

00:08:43 --> 00:08:50
these harnesses, they are um code,

00:08:47 --> 00:08:52
prompts, data, you know, built on top of

00:08:49 --> 00:08:54
one or more language models, right? And

00:08:51 --> 00:08:57
so this is something that in principle

00:08:53 --> 00:09:00
you can build by hand um or with like

00:08:56 --> 00:09:02
cloud code or whatever. But uh in in

00:08:59 --> 00:09:04
practice it takes a lot of work to do

00:09:01 --> 00:09:07
these to to you know have all the

00:09:03 --> 00:09:10
insights uh to make this uh to make

00:09:06 --> 00:09:11
these work well. And so the core

00:09:09 --> 00:09:14
technology that we've developed at

00:09:10 --> 00:09:15
poetic is uh recursive self-improvement.

00:09:13 --> 00:09:17
So we we have a recursively

00:09:14 --> 00:09:20
self-improving uh system which we call

00:09:16 --> 00:09:22
the poetic meta system. the output of

00:09:19 --> 00:09:25
that system is systems that solve hard

00:09:21 --> 00:09:26
problems. Um where a hard problem is you

00:09:24 --> 00:09:28
know something that you if you gave it

00:09:25 --> 00:09:30
o GPT52

00:09:27 --> 00:09:32
uh it would struggle to give you a

00:09:29 --> 00:09:35
reliable robust result you know just to

00:09:32 --> 00:09:38
use an example. So this is a a very big

00:09:34 --> 00:09:40
advantage for us. We can generate these

00:09:37 --> 00:09:42
systems in a much more automated manner.

00:09:39 --> 00:09:43
uh which means that we can do it much

00:09:41 --> 00:09:46
more quickly and much more cheaply than

00:09:42 --> 00:09:48
if you hired a team yourself to try to

00:09:45 --> 00:09:51
make um your own you know your own agent

00:09:47 --> 00:09:54
o solve your particular task. But not

00:09:50 --> 00:09:55
only that um since you know this is

00:09:53 --> 00:09:57
really an automated optimization

00:09:54 --> 00:09:59
process. If you already have done that

00:09:56 --> 00:10:01
work you you know you're a you're a

00:09:58 --> 00:10:02
startup that's like going after a

00:10:00 --> 00:10:03
particular vertical and you've put

00:10:01 --> 00:10:04
ogether you know you think you

00:10:02 --> 00:10:06
nderstand your your problem pretty

00:10:03 --> 00:10:08
well. You've put together your agent and

00:10:05 --> 00:10:10
you you uh you know maybe it's working

00:10:07 --> 00:10:11
pretty well but you know you can get

00:10:09 --> 00:10:13
something better or you really need

00:10:10 --> 00:10:17
something better. Um then you can bring

00:10:12 --> 00:10:19
that to us uh and we can optimize uh

00:10:16 --> 00:10:21
that entire agent or pieces of that

00:10:18 --> 00:10:22
agent. So we could optimize just the

00:10:20 --> 00:10:24
prompts, just the reasoning strategies.

00:10:22 --> 00:10:26
Uh there's a lot of different things

00:10:23 --> 00:10:27
that we can do uh depending on your

00:10:25 --> 00:10:28
particular needs.

00:10:26 --> 00:10:30
>> It sounds like this is a complete

00:10:27 --> 00:10:32
different paradigm than RL because we

00:10:29 --> 00:10:34
nt through the scurve of regular

00:10:32 --> 00:10:38
pre-training

00:10:33 --> 00:10:41
RL with when OpenAI released 01 and now

00:10:37 --> 00:10:43
this feels like a new one. It sounds

00:10:40 --> 00:10:44
pecial. It sounds it rhymes a lot with

00:10:42 --> 00:10:46
RNN's

00:10:43 --> 00:10:49
>> which is a whole different paradigm than

00:10:45 --> 00:10:50
RL, right? It's going to depend on

00:10:48 --> 00:10:52
the particular task, the particular type

00:10:49 --> 00:10:54
of problem that we're going after that

00:10:51 --> 00:10:56
we're trying to solve. Um, and the

00:10:53 --> 00:10:59
underlying models that we're working

00:10:55 --> 00:11:02
with. But, uh, effectively you could say

00:10:58 --> 00:11:03
like each model or each set of models

00:11:01 --> 00:11:06
that we're working with will have it

00:11:02 --> 00:11:08
heir own uh, scurve. The poetic system,

00:11:05 --> 00:11:10
the poetic meta system itself is also

00:11:07 --> 00:11:11
going to have its own scurve. And so as

00:11:09 --> 00:11:13
the poetic meta system gets better and

00:11:10 --> 00:11:15
as the underlying models get better, you

00:11:12 --> 00:11:17
'll find that the uh you know the

00:11:14 --> 00:11:18
S-curve that you're dealing with keeps

00:11:16 --> 00:11:21
hifting higher and higher until

00:11:17 --> 00:11:22
ultimately either you saturate or like

00:11:20 --> 00:11:24
>> reach AGI.

00:11:21 --> 00:11:25
>> Yeah. Reach AGI, reach super

00:11:23 --> 00:11:27
intelligences. Yeah.

00:11:24 --> 00:11:28
>> Given its stilts, you might like hit the

00:11:26 --> 00:11:29
ceiling first then.

00:11:27 --> 00:11:32
>> That's the goal, right? Yeah,

00:11:28 --> 00:11:34
>> you want to hit the ceiling first with

00:11:31 --> 00:11:37
>> I think a lot of startups that we work

00:11:33 --> 00:11:39
with um and then in my spare time I you

00:11:36 --> 00:11:41
know do a bunch of context engineering

00:11:38 --> 00:11:43
and then the thing is we're sort of like

00:11:40 --> 00:11:46
tuning it tuning evals tuning like we're

00:11:42 --> 00:11:48
context stuffing ourselves. What does

00:11:45 --> 00:11:51
that even feel like to have a you know

00:11:47 --> 00:11:52
recursively self-improving version of

00:11:50 --> 00:11:56
like prompt engineering and context

00:11:51 --> 00:11:58
engineering? we don't spend a lot of

00:11:55 --> 00:12:01
time looking at the particular data that

00:11:57 --> 00:12:03
we're working with. Uh instead, we're

00:12:00 --> 00:12:06
letting the poetic meta system look at

00:12:02 --> 00:12:07
hat data and and so like the meta

00:12:05 --> 00:12:10
system, you know, if it if it thinks

00:12:06 --> 00:12:12
that it needs to put more things into

00:12:09 --> 00:12:13
context, it do more context stuffing or

00:12:11 --> 00:12:15
whatever, it'll it'll do that. If it

00:12:12 --> 00:12:19
needs to like generate a bunch of

00:12:14 --> 00:12:21
examples um uh to get the get better

00:12:18 --> 00:12:22
performance, it'll do that for you,

00:12:20 --> 00:12:25
right? It it was pretty interesting to

00:12:21 --> 00:12:29
look at the um prompt outputs in

00:12:24 --> 00:12:31
particular I'd say for ArcGI in that you

00:12:28 --> 00:12:33
know I think you can read those and say

00:12:30 --> 00:12:36
well that's not what a human would have

00:12:32 --> 00:12:38
written uh pretty clearly and and it's

00:12:36 --> 00:12:40
you know there's some unexpected stuff

00:12:37 --> 00:12:42
and you know it made some really simple

00:12:39 --> 00:12:44
xamples and one of the examples is

00:12:41 --> 00:12:45
actually wrong but we didn't change it.

00:12:43 --> 00:12:48
We're like well this is you know this is

00:12:44 --> 00:12:50
the thing that it output we'll just

00:12:47 --> 00:12:52
leave it be. um you know we don't want

00:12:49 --> 00:12:55
o go in and monkey around with things

00:12:51 --> 00:12:57
and so historically in machine learning

00:12:54 --> 00:12:59
you always you know is like the the rule

00:12:56 --> 00:13:01
was you have to know your data set

00:12:58 --> 00:13:04
really well um but now we're kind of

00:13:00 --> 00:13:06
outsourcing that to the AI itself where

00:13:03 --> 00:13:08
the AI is it's the AI's job to

00:13:05 --> 00:13:11
understand the data set and figure out

00:13:07 --> 00:13:13
where are the failure modes um and where

00:13:10 --> 00:13:16
are the kind of robust reasoning

00:13:12 --> 00:13:19
strategies that uh the model that that

00:13:15 --> 00:13:20
he agent could uh use um to get better

00:13:18 --> 00:13:21
performance.

00:13:19 --> 00:13:23
>> How much of it is like much you the

00:13:20 --> 00:13:25
output is much better prompts and then

00:13:22 --> 00:13:28
how much of it is like the harness

00:13:24 --> 00:13:29
itself uh context stuffing or

00:13:27 --> 00:13:31
summarizing in the right way or

00:13:28 --> 00:13:34
eranking in the right way so that like

00:13:30 --> 00:13:36
you you have some number of like mega

00:13:33 --> 00:13:38
LLM calls and then how do you get the

00:13:35 --> 00:13:40
most out of um each of those calls?

00:13:37 --> 00:13:44
>> Yeah. And so that definitely varies per

00:13:40 --> 00:13:46
problem. But uh what we've seen, in

00:13:43 --> 00:13:48
fact, our our last paper at DeepMind was

00:13:45 --> 00:13:51
not doing this recursive self-improving

00:13:47 --> 00:13:53
stuff, but we were um we were showing

00:13:50 --> 00:13:56
that you could build these harnesses um

00:13:52 --> 00:13:59
anually to solve really hard problems.

00:13:55 --> 00:14:01
And what we saw is there is that uh you

00:13:58 --> 00:14:02
know, we manually optimized the prompts

00:14:00 --> 00:14:04
really hard for these very hard

00:14:01 --> 00:14:06
problems. And that got us a little bit

00:14:03 --> 00:14:08
of the way uh in this particular case.

00:14:06 --> 00:14:10
you know the the hardest the hardest

00:14:07 --> 00:14:13
ask we were working on we got like to

00:14:09 --> 00:14:16
5% performance with Gemini 1.5 flash

00:14:12 --> 00:14:19
this was a while ago and then when we

00:14:15 --> 00:14:22
added on the the reasoning strategies we

00:14:18 --> 00:14:25
nt from 5% to 95%

00:14:21 --> 00:14:27
>> uh and so this is typically what we see

00:14:24 --> 00:14:28
you know like everybody's out there kind

00:14:26 --> 00:14:30
of doing some amount I wouldn't say

00:14:27 --> 00:14:31
everybody but many people are out there

00:14:29 --> 00:14:34
kind of doing some amount of automated

00:14:30 --> 00:14:36
prop pro prompt optimization you know

00:14:33 --> 00:14:37
Jeepa is this very popular paper

00:14:35 --> 00:14:38
everybody's kind of implementing that

00:14:36 --> 00:14:42
will get you some performance

00:14:37 --> 00:14:45
improvements, but it's very far from uh

00:14:41 --> 00:14:47
everything that you can get uh if you

00:14:44 --> 00:14:48
actually think about these reasoning

00:14:46 --> 00:14:50
strategies that are really going to be

00:14:47 --> 00:14:51
written in code rather than in in just

00:14:49 --> 00:14:55
better prompts.

00:14:50 --> 00:14:57
>> So if startups want to use poetic to put

00:14:54 --> 00:14:58
heir agent on stilts, what should they

00:14:56 --> 00:15:00
do?

00:14:57 --> 00:15:02
>> Yeah, so right now uh we haven't

00:14:59 --> 00:15:05
released anything yet, but uh if you go

00:15:01 --> 00:15:07
to poetic.ai, AI. Uh there is a button

00:15:04 --> 00:15:09
you can click to get uh sign up for

00:15:06 --> 00:15:12
early access. And if you're a startup uh

00:15:08 --> 00:15:14
or a company who has a really hard

00:15:11 --> 00:15:17
problem uh and you've tried everything

00:15:13 --> 00:15:19
that you can to make it uh reliable and

00:15:16 --> 00:15:21
robust and you just can't get all the

00:15:18 --> 00:15:23
way there, you you need something more,

00:15:20 --> 00:15:25
then uh let us know. We're looking for

00:15:22 --> 00:15:27
problems like that. Uh so just tell us

00:15:24 --> 00:15:29
what it is that you're working

00:15:26 --> 00:15:30
on and uh we'll reach out. You'll be the

00:15:28 --> 00:15:32
first to know when we're when we're

00:15:29 --> 00:15:33
ady to work with you. I mean, if

00:15:31 --> 00:15:36
you're at the top of um humanity's last

00:15:32 --> 00:15:39
exam, then I mean, that's that's pretty

00:15:35 --> 00:15:41
big. So, it's you're all you're already

00:15:38 --> 00:15:43
all the way out there at soda and then I

00:15:40 --> 00:15:45
guess the stilts basically let any

00:15:42 --> 00:15:48
agentic company become soda.

00:15:44 --> 00:15:50
>> That's the idea. Yeah. Yeah. And you

00:15:47 --> 00:15:52
know, we view the ArcGI results and the

00:15:49 --> 00:15:54
humanities last exam results as showing

00:15:51 --> 00:15:56
kind of two different uh capabilities

00:15:53 --> 00:15:58
that we have. We can really improve your

00:15:55 --> 00:16:00
easoning and we can really improve uh

00:15:57 --> 00:16:01
deep knowledge extraction uh from these

00:15:59 --> 00:16:02
models

00:16:00 --> 00:16:04
>> and then you're just totally vaccinated

00:16:02 --> 00:16:04
against the bitter lesson.

00:16:03 --> 00:16:07
>> Exactly.

00:16:04 --> 00:16:09
>> YC's next batch is now taking

00:16:06 --> 00:16:12
applications. Got a startup in you?

00:16:08 --> 00:16:14
Apply at y combinator.com/apply.

00:16:11 --> 00:16:17
It's never too early and filling out the

00:16:13 --> 00:16:18
app will level up your idea. Okay, back

00:16:16 --> 00:16:20
to the video.

00:16:18 --> 00:16:22
>> Slight sort of change change of topic,

00:16:19 --> 00:16:24
but something I was curious about. Uh so

00:16:21 --> 00:16:27
you arrived at Google over a decade ago

00:16:23 --> 00:16:29
when they acquired your first YC startup

00:16:26 --> 00:16:31
at portable. A portable was it's porting

00:16:28 --> 00:16:33
mobile apps crossplatform right like

00:16:30 --> 00:16:37
Android or or whatever. It's quite

00:16:32 --> 00:16:40
different to um recursive self-improving

00:16:36 --> 00:16:43
AGI. Um how did you make that leap? What

00:16:39 --> 00:16:44
happened once you got to Google? Um what

00:16:42 --> 00:16:46
made you think that you maybe wanted to

00:16:43 --> 00:16:47
shift out and do something different?

00:16:45 --> 00:16:50
And just would love to hear that story.

00:16:46 --> 00:16:54
the acquisition uh was this amazing

00:16:49 --> 00:16:56
opportunity to um reflect on what I

00:16:53 --> 00:17:00
really wanted to be doing next, right?

00:16:55 --> 00:17:01
Like Google was in, you know, itself is

00:16:59 --> 00:17:05
a place where you can do so many

00:17:00 --> 00:17:09
different things. Uh so I spent some

00:17:04 --> 00:17:11
time thinking about um where uh where I

00:17:08 --> 00:17:15
wanted to go next in in uh in my

00:17:10 --> 00:17:17
journey. I realized that the problems

00:17:14 --> 00:17:21
that I was most excited about were

00:17:16 --> 00:17:24
ally actually AI and uh and robotics.

00:17:20 --> 00:17:27
Um and the best people in the world,

00:17:23 --> 00:17:30
many of them in those fields were at

00:17:26 --> 00:17:35
Google at the time. Uh and so I went and

00:17:29 --> 00:17:38
talked to them. they uh let me come join

00:17:34 --> 00:17:40
you know a new AI robotics team uh in

00:17:38 --> 00:17:43
Google research which was this amazing

00:17:39 --> 00:17:45
opportunity for me since that wasn't my

00:17:42 --> 00:17:46
background my background was like uh

00:17:44 --> 00:17:48
computer security and then this

00:17:45 --> 00:17:50
crossplatform mobile you know it's

00:17:47 --> 00:17:53
ystems building uh stuff I was able to

00:17:49 --> 00:17:55
join this team and I I'll tell you the

00:17:52 --> 00:17:58
truth that uh I very quickly realized

00:17:54 --> 00:18:00
that uh hardware is hard uh and I didn't

00:17:57 --> 00:18:01
really want to be doing robotics is more

00:17:59 --> 00:18:05
aspirational at that moment

00:18:00 --> 00:18:08
uh but I was really um uh passionate

00:18:04 --> 00:18:10
about machine learning. So I just uh uh

00:18:07 --> 00:18:12
made a very hard switch into just doing

00:18:09 --> 00:18:15
machine learning research uh and did

00:18:11 --> 00:18:17
that for you know about a decade at

00:18:14 --> 00:18:17
Google and and then Google and then deep

00:18:16 --> 00:18:20
mind.

00:18:16 --> 00:18:22
>> What's maybe some advice that you have

00:18:19 --> 00:18:25
today for engineers who want to get into

00:18:21 --> 00:18:27
sort of more of the AI side probably the

00:18:24 --> 00:18:29
applied AI and build startups around AI

00:18:26 --> 00:18:31
like how should they think about that?

00:18:28 --> 00:18:33
You know, the world is changing so

00:18:30 --> 00:18:36
quickly. This is probably a little bit

00:18:32 --> 00:18:39
obvious, but you should just try things

00:18:35 --> 00:18:42
and and like every day uh do something

00:18:38 --> 00:18:43
with AI. Always try to

00:18:41 --> 00:18:48
push yourself to find the boundaries of

00:18:42 --> 00:18:50
what they're capable of. Uh and uh and

00:18:47 --> 00:18:54
build the things that you that you want

00:18:49 --> 00:18:56
o build, right? Um, even even for me,

00:18:53 --> 00:19:00
you know, last summer I took a weekend

00:18:55 --> 00:19:02
and used um GPT5 to help me build an

00:18:59 --> 00:19:04
iPhone app. I hadn't I hadn't done that

00:19:01 --> 00:19:06
in a decade. So fast.

00:19:03 --> 00:19:08
>> Yeah, it's so fast and so easy. And that

00:19:05 --> 00:19:10
was, you know, that was an, you know, an

00:19:07 --> 00:19:12
age ago. That was like eight months ago.

00:19:09 --> 00:19:14
Uh, now it's even faster and easier.

00:19:11 --> 00:19:15
Don't limit yourself. Like anything that

00:19:13 --> 00:19:17
you imagine, you should just try to use

00:19:14 --> 00:19:19
AI and see how far you can get with it

00:19:16 --> 00:19:21
and you'll be, you know, making the

00:19:18 --> 00:19:23
world better. That's all we have time

00:19:20 --> 00:19:25
for today, but Ian, thank you so much

00:19:22 --> 00:19:27
for giving us all Stilts. Uh, we can't

00:19:24 --> 00:19:30
wait to use it at YC. I can't wait to

00:19:26 --> 00:19:32
use it for Gary's list. I mean, there's

00:19:29 --> 00:19:33
just so much to do. So,

00:19:31 --> 00:19:36
>> yeah, thank you for having me. This was

00:19:32 --> 00:19:36
a lot of fun.

<!-- YOUTUBE_TRANSCRIPT_END -->
