---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "k2ZLQC8P7dc"
title: "François Chollet: Why Scaling Alone Isn’t Enough for AGI"
video_url: "https://www.youtube.com/watch?v=k2ZLQC8P7dc"
thumbnail_url: "https://i.ytimg.com/vi/k2ZLQC8P7dc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=k2ZLQC8P7dc"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-03-27T14:00:55.000Z"
upload_date: "2026-03-27"
duration_seconds: 3444
duration_human: "57:24"
view_count: 41409
like_count: 831
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:21:15.310Z"
---

# François Chollet: Why Scaling Alone Isn’t Enough for AGI

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=k2ZLQC8P7dc
- video_id: k2ZLQC8P7dc
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-03-27T14:00:55.000Z
- upload_date: 2026-03-27
- duration: 57:24
- view_count: 41409
- like_count: 831
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

François Chollet has spent years asking a different question than most of the AI world. Instead of scaling what already works, he’s trying to understand what intelligence actually is—and how to build it from first principles. In this episode of Lightcone, he traces that path from his early work on deep learning to the creation of the ARC prize, and the launch of ARC V3, a new benchmark designed to measure something deeper than performance: the ability to learn, adapt, and reason efficiently in entirely new environments. He explains why today’s systems may be hitting limits, what recent breakthroughs really mean, and why reaching true general intelligence may require a fundamentally different approach.

00:00 - AGI by 2030?
00:31 - Introducing Ndea: A New Path Beyond Deep Learning
01:08 - A New ML Paradigm 
01:30 - Replacing neural nets with compact symbolic programs
03:04 - Why Ndea Isn’t Competing With Coding Agents
05:20 - Why Everyone Might Be Wrong About Scaling LLMs
07:22 - Why Coding Agents Suddenly Work So Well
08:50 - The Limits of LLMs in Non-Verifiable Domains
10:48 - What AGI Actually Means (And Why Most Definitions Are Wrong)
13:30 - Why Deep Learning Hits a Wall 
14:00 - ARC’s Origin Story
18:20 - ARC Benchmarks Explained: From V1 to V3
22:49 - The RL Loop Powering Coding Agents Today
27:03 - ARC-AGI V3: Measuring “Agentic Intelligence”
31:14 - Inside the ARC Game Studio
35:31 - Could AGI Fit in 10,000 Lines of Code?
44:01 - Building Ndea: From Idea to Compounding Research Stack
46:46 - The Future of ARC: Benchmarks That Evolve With AI
47:21 - Why There’s Still Huge Opportunity for New AI Paradigms
53:37 - How to Build a Breakout Open Source Project - Lessons From Kera
56:39 - Advice For How To Think About AI

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
I think we're probably looking at AGI

00:00:02 --> 00:00:10
2030 around the time uh that we're going

00:00:06 --> 00:00:13
to be releasing like maybe AR 6 or AR 7.

00:00:09 --> 00:00:14
You're not going to stop uh AI progress.

00:00:12 --> 00:00:17
I think I think it's too late for that.

00:00:14 --> 00:00:19
And so the next question is okay like AI

00:00:16 --> 00:00:20
progress is here. Uh it's actually going

00:00:18 --> 00:00:22
to keep accelerating. How do you make

00:00:19 --> 00:00:23
use of it? How do you leverage? How do

00:00:21 --> 00:00:27
you ride the wave? That's the question

00:00:22 --> 00:00:27
to ask.

00:00:31 --> 00:00:36
Today we're lucky to be joined by France

00:00:33 --> 00:00:39
Chole, founder of the ARK Prize, a

00:00:35 --> 00:00:43
global competition to solve the ARC AGI

00:00:38 --> 00:00:45
benchmark. His latest project is NDIA, a

00:00:42 --> 00:00:48
lab exploring a new paradigm in frontier

00:00:44 --> 00:00:49
AI research. Francois is one of the best

00:00:47 --> 00:00:52
people in the world to help us

00:00:48 --> 00:00:54
understand the current AI moment and

00:00:51 --> 00:00:55
where all of this is going. Franuis,

00:00:53 --> 00:00:58
thank you so much for joining us today

00:00:54 --> 00:00:59
and congrats on the launch of Arc AGI

00:00:57 --> 00:01:00
V3.

00:00:58 --> 00:01:02
>> Thanks so much for having me. I'm super

00:00:59 --> 00:01:03
excited to be here. Super exciting time

00:01:01 --> 00:01:05
to talk about AI.

00:01:02 --> 00:01:07
>> So Fran, tell us a little bit about

00:01:04 --> 00:01:09
India. So what exactly is it and what

00:01:06 --> 00:01:12
are you guys trying to achieve,

00:01:08 --> 00:01:15
>> right? So NDI is this new AGI research

00:01:11 --> 00:01:17
lab and we are trying some very

00:01:14 --> 00:01:19
different ideas and so our goal is

00:01:16 --> 00:01:20
basically to build this new branch of

00:01:18 --> 00:01:24
machine learning that will be much

00:01:19 --> 00:01:24
closer to optimal unlike unlike deep

00:01:23 --> 00:01:27
learning.

00:01:23 --> 00:01:29
>> All of us right now are sort of taken by

00:01:26 --> 00:01:31
what's going on with code. Uh I have

00:01:28 --> 00:01:34
sort of this viral moment right now

00:01:30 --> 00:01:36
here I got to 40,000 stars this morning

00:01:33 --> 00:01:38
>> on uh GStack. So it's like, oh, this is

00:01:35 --> 00:01:40
an open source project that now is one

00:01:37 --> 00:01:43
of the biggest ones and I have more than

00:01:39 --> 00:01:45
a 100 PRs from contributors to deal

00:01:42 --> 00:01:46
with. I guess you're, you know, one of

00:01:44 --> 00:01:48
the best people to talk to about this

00:01:46 --> 00:01:50
because you're you're actually literally

00:01:48 --> 00:01:52
coming up with something that is a

00:01:49 --> 00:01:54
totally different pathway.

00:01:51 --> 00:01:56
>> That's right. That's right. So uh what

00:01:53 --> 00:01:59
we're doing at India is uh we're doing

00:01:55 --> 00:02:00
program synthesis research. And when I

00:01:58 --> 00:02:02
talk about program synthesis, often

00:01:59 --> 00:02:04
people ask me, oh, so are you doing like

00:02:01 --> 00:02:06
codegen? are you building an alternative

00:02:03 --> 00:02:07
to coding agents and that's actually not

00:02:05 --> 00:02:10
at all what we are doing. We are working

00:02:06 --> 00:02:12
at a much much more uh much lower level

00:02:09 --> 00:02:14
than that. Uh what we're actually doing

00:02:11 --> 00:02:16
is that we are trying to build a new

00:02:13 --> 00:02:19
branch of machine learning an

00:02:15 --> 00:02:20
alternative to deep learning itself uh

00:02:18 --> 00:02:22
rather than like coding agents. Coding

00:02:19 --> 00:02:24
agents are like this very very high

00:02:21 --> 00:02:26
level last layer piece of the stack and

00:02:23 --> 00:02:28
we're actually trying to rebuild the

00:02:25 --> 00:02:30
whole stack on top of different

00:02:27 --> 00:02:33
foundations. So we're building a new

00:02:29 --> 00:02:35
learning substrate that's very different

00:02:32 --> 00:02:38
from you know parametric learning deep

00:02:34 --> 00:02:41
learning. So if you go back to uh the

00:02:38 --> 00:02:43
problem of machine learning you have

00:02:40 --> 00:02:45
some input data some target data and

00:02:42 --> 00:02:47
you're trying to find a function that

00:02:44 --> 00:02:51
will map the inputs to the targets that

00:02:46 --> 00:02:53
will hopefully generalize to new inputs.

00:02:50 --> 00:02:55
And uh if you're doing deep learning

00:02:52 --> 00:02:57
what you're doing is that you have this

00:02:54 --> 00:02:58
parametric curve that serves as your as

00:02:56 --> 00:03:00
your function as your model and you're

00:02:57 --> 00:03:03
trying to fit the parameters of the

00:02:59 --> 00:03:05
curve via cron descent. And this is

00:03:02 --> 00:03:07
basically what we're doing uh except

00:03:04 --> 00:03:10
we're replacing the parametric curve

00:03:06 --> 00:03:12
with a symbolic model that is meant to

00:03:09 --> 00:03:16
be as small as possible. It's like the

00:03:12 --> 00:03:18
simplest uh possible uh model to explain

00:03:15 --> 00:03:20
the data to model what's going on. uh

00:03:17 --> 00:03:23
and of course if you're doing that you

00:03:19 --> 00:03:25
cannot apply descent anymore. So we are

00:03:22 --> 00:03:27
building something that we call symbolic

00:03:24 --> 00:03:30
descent which is like the symbolic space

00:03:26 --> 00:03:32
quivalent of grand descent. The idea is

00:03:29 --> 00:03:36
to build this new machine learning

00:03:31 --> 00:03:39
engine that's giving you uh extremely

00:03:35 --> 00:03:41
concise symbolic models of the data

00:03:38 --> 00:03:43
you're feeding into it and then we're

00:03:40 --> 00:03:44
going to make it scale. And so

00:03:42 --> 00:03:46
everything you're doing with machine

00:03:43 --> 00:03:48
learning today with parametric curves,

00:03:45 --> 00:03:52
we should be able to do it uh with

00:03:47 --> 00:03:55
symbolic models in the future in a in a

00:03:51 --> 00:03:57
way that will be much much closer to

00:03:54 --> 00:03:59
ptimality. Much closer to optimality in

00:03:56 --> 00:04:02
the sense that you're going to need much

00:03:58 --> 00:04:03
less data to obtain the models. The

00:04:01 --> 00:04:05
models are going to run much more

00:04:02 --> 00:04:07
fficiently at at inference time because

00:04:04 --> 00:04:08
they're going to be so small. And

00:04:06 --> 00:04:10
because they're so small, they will also

00:04:07 --> 00:04:12
generalize much better and compose much

00:04:09 --> 00:04:15
better. you know the the minimum

00:04:11 --> 00:04:16
description length principle that the

00:04:14 --> 00:04:19
model of the data that is most likely to

00:04:15 --> 00:04:20
generalize is the shortest and I think

00:04:18 --> 00:04:22
you cannot find a model like this if

00:04:20 --> 00:04:24
you're doing parametric learning you

00:04:21 --> 00:04:25
need to you need to try symbolic

00:04:23 --> 00:04:27
>> that's fascinating

00:04:24 --> 00:04:28
>> so the rest of the industry is just

00:04:26 --> 00:04:31
pouring more and more billions of

00:04:27 --> 00:04:33
dollars down an approach that was set

00:04:30 --> 00:04:35
years ago can you like help make the

00:04:32 --> 00:04:36
case for why you think that it's the

00:04:34 --> 00:04:38
right thing to explore alternate

00:04:36 --> 00:04:39
approaches instead of just to keep

00:04:37 --> 00:04:40
utting more money into the current

00:04:38 --> 00:04:42
approach

00:04:39 --> 00:04:44
>> I mean everybody body is uh is uh uh you

00:04:41 --> 00:04:46
know building on top of the LLM stack

00:04:43 --> 00:04:48
these days which makes sense because you

00:04:45 --> 00:04:50
know the the returns are there like it's

00:04:47 --> 00:04:53
actually working so it would seem very

00:04:49 --> 00:04:55
sensible for everybody to just be doing

00:04:52 --> 00:04:57
uh what seems to be the the the

00:04:54 --> 00:04:59
currently most productive path uh but

00:04:56 --> 00:05:01
artic it's it's counterproductive to

00:04:58 --> 00:05:04
have everybody working on the same thing

00:05:00 --> 00:05:06
like I personally don't think that uh

00:05:03 --> 00:05:08
machine learning or AI in 50 years is

00:05:06 --> 00:05:10
till going to be built on this stag I

00:05:07 --> 00:05:12
think this is a stag that is uh very

00:05:09 --> 00:05:15
price maybe it even gets us to ag but

00:05:11 --> 00:05:18
it's not as efficient as it should be. I

00:05:14 --> 00:05:21
think it's inevitable that uh the world

00:05:17 --> 00:05:23
of AI will trend over time towards

00:05:20 --> 00:05:27
optimality and so I'm trying to sort of

00:05:22 --> 00:05:29
like leaprog directly uh to optimality

00:05:26 --> 00:05:31
like to build to build the foundations

00:05:28 --> 00:05:34
of optimal AI today but in general you

00:05:30 --> 00:05:35
know our vision is very ambitious and

00:05:33 --> 00:05:37
I'm not saying that we're going to be

00:05:34 --> 00:05:40
successful like we have maybe a 10 or

00:05:36 --> 00:05:43
15% chance of success uh but that is

00:05:39 --> 00:05:45
enough uh that it's worth trying right

00:05:42 --> 00:05:48
and I think in general like among among

00:05:44 --> 00:05:50
listeners. If you have uh a big idea and

00:05:47 --> 00:05:53
it has very low chance of success, but

00:05:49 --> 00:05:54
uh if it works, it's going to be big and

00:05:52 --> 00:05:55
no one else is going to be working on

00:05:53 --> 00:05:57
it, right? It's it's not something

00:05:54 --> 00:05:59
popular. It's not something if you don't

00:05:56 --> 00:06:01
do it, no one else will do it. And this

00:05:58 --> 00:06:03
basically our situation. If you're in

00:06:00 --> 00:06:04
this situation, then then you should you

00:06:02 --> 00:06:05
should should try a chance, you know,

00:06:03 --> 00:06:07
should should go and work on it.

00:06:04 --> 00:06:08
>> I mean, that's almost like the mission

00:06:06 --> 00:06:09
statement of why cominator, the thing

00:06:07 --> 00:06:10
that you just said.

00:06:08 --> 00:06:11
>> Yeah.

00:06:09 --> 00:06:13
The reason it's important is that

00:06:10 --> 00:06:14
again, if we don't do it, no one else

00:06:12 --> 00:06:16
will do it, right? So it's worth trying.

00:06:13 --> 00:06:17
Even if we don't succeed, it's worth

00:06:15 --> 00:06:19
trying.

00:06:16 --> 00:06:20
>> Has the success well very specifically

00:06:18 --> 00:06:23
of the coding agents I guess built on

00:06:19 --> 00:06:25
top of the LLM stack like has their

00:06:22 --> 00:06:26
success surprised you at all in

00:06:24 --> 00:06:27
particular like say over the last 6

00:06:25 --> 00:06:28
months or so?

00:06:26 --> 00:06:30
>> Yeah, absolutely. I think it has

00:06:27 --> 00:06:32
urprised many people. It definitely did

00:06:29 --> 00:06:34
surprise me. If you look at why

00:06:31 --> 00:06:35
everything is is starting to work so

00:06:33 --> 00:06:38
well with squinging agents, it's really

00:06:34 --> 00:06:41
because uh code provides you with a

00:06:37 --> 00:06:42
verifiable reward signal. And I think

00:06:40 --> 00:06:45
right now we're in this situation where

00:06:41 --> 00:06:47
any problem where the solutions you

00:06:44 --> 00:06:48
propose can be uh uh formally verified

00:06:46 --> 00:06:50
and you can actually trust the reward

00:06:47 --> 00:06:53
signal. It's not just some guess made by

00:06:49 --> 00:06:55
a model. Any domain like this uh can be

00:06:52 --> 00:06:58
fully automated with current technology

00:06:54 --> 00:07:00
with with the LM based stack and uh code

00:06:57 --> 00:07:02
is sort of like the first domain to fall

00:06:59 --> 00:07:04
but there will be many others in the

00:07:01 --> 00:07:06
future. I think mathematics is also is

00:07:03 --> 00:07:08
also primed to see a revolution in next

00:07:06 --> 00:07:10
few years for the same reasons again

00:07:07 --> 00:07:13
because the domain just gives you

00:07:09 --> 00:07:15
verifiable rewards. I guess the

00:07:12 --> 00:07:18
challenge for a formally verified domain

00:07:14 --> 00:07:20
is you have to

00:07:17 --> 00:07:22
somehow take a domain and make it

00:07:19 --> 00:07:24
verifiable which is the trick I mean

00:07:21 --> 00:07:26
code is very natural you could test

00:07:23 --> 00:07:28
here's bugs compiles etc and

00:07:25 --> 00:07:31
mathematics as well where there all the

00:07:27 --> 00:07:33
orems and proofs work out I guess it

00:07:30 --> 00:07:36
becomes more nebulous when you go couple

00:07:32 --> 00:07:39
degrees off where there fields that are

00:07:35 --> 00:07:40
not naturally formally verified and you

00:07:38 --> 00:07:43
need to come up with a

00:07:39 --> 00:07:46
>> again with some sort of a function

00:07:42 --> 00:07:48
to come up with that reward that makes

00:07:45 --> 00:07:51
it verifiable with very fuzzy things

00:07:47 --> 00:07:53
like let's say English language and

00:07:50 --> 00:07:55
composing the perfect essay.

00:07:52 --> 00:07:56
>> How do you make that formally

00:07:54 --> 00:07:58
verifiable?

00:07:55 --> 00:08:00
>> Yeah. Yeah. Absolutely. I mean writing

00:07:57 --> 00:08:03
essays is you know the typical example

00:07:59 --> 00:08:04
of a domain that's not verifiable. And

00:08:02 --> 00:08:06
so what you're going to see is that

00:08:04 --> 00:08:09
progress of reasoning models and and

00:08:06 --> 00:08:11
basel on this type of of of domain is is

00:08:08 --> 00:08:13
you know is going to be very slow

00:08:10 --> 00:08:16
because the stack we're using like the

00:08:12 --> 00:08:18
LM stack is very very reliant on its

00:08:15 --> 00:08:21
training data. It's basically just

00:08:17 --> 00:08:23
operationalizing the train data and for

00:08:20 --> 00:08:26
writing essays the train data is coming

00:08:22 --> 00:08:29
from uh human experts like annotating uh

00:08:25 --> 00:08:30
answers and that's costly. So you're

00:08:28 --> 00:08:32
going to see this very very slow

00:08:29 --> 00:08:34
progress. Maybe maybe it's even going to

00:08:31 --> 00:08:36
stall. But but for any any verifiable

00:08:33 --> 00:08:39
domain like take code for instance what

00:08:35 --> 00:08:41
was the big unlock is uh when uh when

00:08:38 --> 00:08:43
people started creating this codebased

00:08:40 --> 00:08:47
like training environment uh for for

00:08:42 --> 00:08:48
post training uh where the the the

00:08:46 --> 00:08:51
reward signal the verification signal is

00:08:47 --> 00:08:53
provided by things like uh unit tests

00:08:50 --> 00:08:55
and so on. And so that means that uh the

00:08:52 --> 00:08:57
model was not just working from human

00:08:54 --> 00:09:01
pro annotations. It was actually trying

00:08:56 --> 00:09:03
its own things uh verifying the answer

00:09:00 --> 00:09:05
and uh and generating a lot lot more

00:09:02 --> 00:09:08
string data in the process. So a much

00:09:04 --> 00:09:10
denser coverage of the problem space and

00:09:07 --> 00:09:13
not just coverage in terms of like is is

00:09:09 --> 00:09:15
the answer right or wrong but also

00:09:12 --> 00:09:18
starting to build uh models of the

00:09:14 --> 00:09:20
xecution traces right. uh so that the

00:09:17 --> 00:09:22
models could start incorporating a an

00:09:19 --> 00:09:24
execution model very much the way that

00:09:21 --> 00:09:26
uh uh human programmers you know when

00:09:23 --> 00:09:27
they look at code they're sort of like

00:09:25 --> 00:09:29
xecuting the code in their minds they

00:09:26 --> 00:09:31
keep track of value variables and

00:09:28 --> 00:09:32
so on is also what the models are trying

00:09:30 --> 00:09:34
to do now and this is why it's working

00:09:31 --> 00:09:37
so well and it's possible because you're

00:09:33 --> 00:09:38
working with this very formal fully

00:09:36 --> 00:09:40
verifiable environment you cannot do

00:09:37 --> 00:09:42
that with assess you cannot do that with

00:09:39 --> 00:09:45
you know law or or many other problems

00:09:41 --> 00:09:48
>> I think I really like how you define

00:09:44 --> 00:09:50
intelligence and how we measure it which

00:09:47 --> 00:09:52
brings to the question of uh also

00:09:49 --> 00:09:53
sharing having you share the history of

00:09:51 --> 00:09:56
uh ARGI.

00:09:52 --> 00:09:59
>> Yeah. So my my definition of uh general

00:09:55 --> 00:10:01
intelligence you know many people around

00:09:58 --> 00:10:03
the industry these days they say uh AGI

00:10:00 --> 00:10:06
is going to be a system that can

00:10:02 --> 00:10:09
automate most economically economically

00:10:05 --> 00:10:12
valuable tasks and to me that definition

00:10:08 --> 00:10:13
is it's about automation it's not about

00:10:11 --> 00:10:17
intelligence not about general

00:10:12 --> 00:10:18
intelligence so my definition is uh AGI

00:10:16 --> 00:10:21
is basically going to be a system that

00:10:17 --> 00:10:24
can approach any new problem any new

00:10:20 --> 00:10:28
task any new domain and make sense of it

00:10:23 --> 00:10:31
like model it become competent at it uh

00:10:27 --> 00:10:33
with the same degree of efficiency as a

00:10:30 --> 00:10:34
human could. So meaning it's going to

00:10:32 --> 00:10:37
need basically the same amount of

00:10:33 --> 00:10:39
training data uh and training computes

00:10:36 --> 00:10:40
as as a human would which is which is

00:10:38 --> 00:10:43
very little like humans are really

00:10:39 --> 00:10:46
uh data efficient. So general

00:10:42 --> 00:10:48
intelligence is human level skill

00:10:45 --> 00:10:51
acquisition efficiency on the on the

00:10:47 --> 00:10:53
same scope of tasks that uh humans could

00:10:50 --> 00:10:55
potentially uh round to do.

00:10:52 --> 00:10:57
>> Do you think it's possible that we will

00:10:54 --> 00:10:59
accomplish the first definition of AGI,

00:10:56 --> 00:11:02
the automate most economically useful

00:10:58 --> 00:11:02
work before we accomplish your

00:11:01 --> 00:11:03
definition?

00:11:01 --> 00:11:06
>> Absolutely. I think that's that's a

00:11:02 --> 00:11:08
trajectory that we're on right now. And

00:11:05 --> 00:11:10
I think it's already true that in

00:11:07 --> 00:11:13
principle current technology can fully

00:11:09 --> 00:11:15
automate at human level or beyond any

00:11:12 --> 00:11:17
domain where you have uh verifiable

00:11:14 --> 00:11:19
rewards, right? And code code being the

00:11:16 --> 00:11:22
first one. And I think figuring out AGI,

00:11:18 --> 00:11:24
figuring out like human level uh you

00:11:21 --> 00:11:27
know learning efficiency over arbitrary

00:11:23 --> 00:11:29
tasks that's probably going to take a

00:11:26 --> 00:11:30
different sort of technology different a

00:11:28 --> 00:11:33
different mindset different approach. Do

00:11:29 --> 00:11:36
you think that LMS can be bent to have

00:11:32 --> 00:11:37
the same sample efficiency as humans or

00:11:35 --> 00:11:39
do you think it's like fundamentally

00:11:36 --> 00:11:41
just impossible and we need a new

00:11:38 --> 00:11:42
approach and that's that's the thing

00:11:40 --> 00:11:44
that you're hoping hoping to solve

00:11:41 --> 00:11:46
>> with enough comput everything starts

00:11:43 --> 00:11:47
looking like everything else every like

00:11:45 --> 00:11:49
computer is a great equalizer every

00:11:46 --> 00:11:52
approach starts looking the same and I

00:11:48 --> 00:11:54
think it's possible in principle to

00:11:51 --> 00:11:57
build something that looks a lot like a

00:11:53 --> 00:11:59
GI on top of the LLM stack uh but it's

00:11:56 --> 00:12:00
not going to be LLMs per se it's going

00:11:58 --> 00:12:02
to

00:11:59 --> 00:12:04
this new layer perhaps you know it's

00:12:01 --> 00:12:05
going to be even a few layers above not

00:12:03 --> 00:12:08
just one layer above but a few layers

00:12:04 --> 00:12:10
above uh but you can build it on top of

00:12:07 --> 00:12:11
LLM because LM are kind of computer

00:12:09 --> 00:12:13
ight I see

00:12:10 --> 00:12:16
>> uh I do believe however this would be

00:12:12 --> 00:12:18
the wrong thing to do because it would

00:12:15 --> 00:12:21
be very inefficient I think AI AI

00:12:17 --> 00:12:23
research will have to trend towards not

00:12:20 --> 00:12:26
just efficiency but in fact optimality

00:12:22 --> 00:12:28
over time and for this reason future AI

00:12:25 --> 00:12:31
in a few decades uh it's not going to be

00:12:27 --> 00:12:34
this harness on top of a reasoning model

00:12:30 --> 00:12:36
on top of a basel is going to be much

00:12:33 --> 00:12:38
lower than that.

00:12:35 --> 00:12:40
>> To Diana's question, do you want to talk

00:12:37 --> 00:12:41
about how you actually designed ARGI and

00:12:39 --> 00:12:43
why it's a good barometer of that?

00:12:40 --> 00:12:45
>> I mean I you know I've been doing deep

00:12:42 --> 00:12:48
learning for a very very long time and

00:12:44 --> 00:12:50
initially my my my tech my mindset was

00:12:47 --> 00:12:51
that deep learning was going to be able

00:12:49 --> 00:12:53
to do everything.

00:12:50 --> 00:12:55
>> You were the creative at KAS before even

00:12:52 --> 00:12:56
all the other frameworks became very

00:12:54 --> 00:12:57
popular.

00:12:55 --> 00:13:00
>> That that's right. That's right. I was a

00:12:56 --> 00:13:02
trained deploying model uh uh for

00:12:59 --> 00:13:07
natural language processing in fact

00:13:01 --> 00:13:09
>> in uh 2014 and uh from that work uh you

00:13:06 --> 00:13:11
know I actually started uh developing

00:13:08 --> 00:13:14
this open source library which I I

00:13:10 --> 00:13:17
released uh in fact uh exactly 11 years

00:13:13 --> 00:13:18
ago uh March March 2015

00:13:16 --> 00:13:20
>> uh so it was kas and and then it got

00:13:17 --> 00:13:23
popular and then I'd end up uh sort of

00:13:19 --> 00:13:25
like doing less of the research that I

00:13:22 --> 00:13:27
started kas for and more of

00:13:24 --> 00:13:28
working on the framework itself. just

00:13:26 --> 00:13:30
because it has really really good

00:13:27 --> 00:13:32
product market fit. And so my my take

00:13:30 --> 00:13:34
you know around that time around like

00:13:31 --> 00:13:36
2015 2016 was that deep learning was

00:13:33 --> 00:13:38
extremely general that you could do

00:13:35 --> 00:13:40
everything with deep learning that you

00:13:37 --> 00:13:43
didn't need in anything else. It was

00:13:39 --> 00:13:44
training complete. So uh my tech was

00:13:42 --> 00:13:47
basically that deep learning was

00:13:43 --> 00:13:48
differentiable programming. Uh so

00:13:46 --> 00:13:50
anything you would do with software you

00:13:47 --> 00:13:52
could in principle train a deep learning

00:13:49 --> 00:13:56
model on the right inputs and outputs to

00:13:51 --> 00:14:00
do the same thing. And uh in uh 2016 I

00:13:55 --> 00:14:02
was doing uh research at Google brain on

00:13:59 --> 00:14:06
trying to train deep learning models to

00:14:02 --> 00:14:08
help with uh reasoning problems and in

00:14:05 --> 00:14:12
particular uh first order logic problems

00:14:08 --> 00:14:14
uh uh theorem proving and so on. And I

00:14:11 --> 00:14:18
started finding that you could not

00:14:13 --> 00:14:20
really get cryion descent to encode uh

00:14:18 --> 00:14:23
sort of like cresing style

00:14:19 --> 00:14:25
algorithms. It was not because the

00:14:22 --> 00:14:27
models could not represent these

00:14:24 --> 00:14:30
algorithms. It was because cryion

00:14:26 --> 00:14:32
descent could not find them. Right? So

00:14:29 --> 00:14:34
the problem was that it wasn't about

00:14:31 --> 00:14:36
deep learning not being train or

00:14:33 --> 00:14:37
anything like that. Like that was not

00:14:35 --> 00:14:40
he problem. The problem was cryon

00:14:36 --> 00:14:42
descent right descent would not find

00:14:39 --> 00:14:44
generalizable programs. It would instead

00:14:41 --> 00:14:47
uh end up doing uh overfeit pattern

00:14:43 --> 00:14:48
matching right over over sequences of uh

00:14:46 --> 00:14:49
input tokens

00:14:47 --> 00:14:52
>> which I guess people could argue like

00:14:48 --> 00:14:54
that's what's happening. I mean this see

00:14:51 --> 00:14:55
what's happening today in a in a in a

00:14:53 --> 00:14:57
slightly

00:14:54 --> 00:14:58
>> it's it's a slightly high higher level

00:14:56 --> 00:14:59
version of

00:14:57 --> 00:15:01
>> it's with a lot of data so it doesn't

00:14:58 --> 00:15:03
feel like overfitting because the data

00:15:00 --> 00:15:04
has a lot more distribution

00:15:02 --> 00:15:06
>> with a lot more data and also I think

00:15:03 --> 00:15:08
models today uh they're a lot more

00:15:05 --> 00:15:09
compressive of the data which is why

00:15:07 --> 00:15:12
where they they generalize better

00:15:08 --> 00:15:14
>> all models are wrong but some models are

00:15:11 --> 00:15:17
useful and then I guess what I'm hearing

00:15:13 --> 00:15:17
is like your method might find the right

00:15:16 --> 00:15:19
model

00:15:16 --> 00:15:22
>> that's right that's uh that's uh where

00:15:18 --> 00:15:24
the idea came from and I was like,

00:15:21 --> 00:15:26
you know, at the time in back in 2016,

00:15:23 --> 00:15:30
2017, I was like, okay, we're going to

00:15:25 --> 00:15:31
need a a benchmark to capture the ideas.

00:15:29 --> 00:15:33
>> Uh we're going to need a program

00:15:30 --> 00:15:36
synthesis benchmark.

00:15:32 --> 00:15:37
>> And uh my my mental model for that was

00:15:35 --> 00:15:39
ImageNet.

00:15:36 --> 00:15:41
>> I was like, oh, I'm going to make the

00:15:38 --> 00:15:43
imageet of reasoning. So, I started

00:15:40 --> 00:15:46
brainstorming a few ideas around like

00:15:42 --> 00:15:49
2017. I explored many different things.

00:15:45 --> 00:15:52
Uh I tried working with uh in part solar

00:15:48 --> 00:15:54
automator like u a setup where you show

00:15:51 --> 00:15:56
a model uh solar automator outputs and

00:15:53 --> 00:15:58
it must recreate uh the program that

00:15:56 --> 00:16:01
generated them like that sort of thing.

00:15:57 --> 00:16:05
Uh and eventually I settled on the uh

00:16:00 --> 00:16:06
RGI format uh around like early 2018.

00:16:04 --> 00:16:08
You know I was doing this on the side.

00:16:05 --> 00:16:11
It was a side project like my main

00:16:07 --> 00:16:13
project was uh developing kas at Google.

00:16:10 --> 00:16:17
I wasn't moving very that very fast uh

00:16:12 --> 00:16:20
on that. Uh so summer 2018 uh I wrote

00:16:16 --> 00:16:22
the ARC task editor and then I started

00:16:19 --> 00:16:24
just making lots of tasks by hand and

00:16:21 --> 00:16:27
about one year later I had made 10,000

00:16:23 --> 00:16:29
tasks and so I wrote up uh the paper

00:16:26 --> 00:16:31
that was explaining what this was about

00:16:28 --> 00:16:34
what the big idea was like intelligence

00:16:30 --> 00:16:37
as as skill acquisition efficiency and

00:16:33 --> 00:16:41
I published all of that in in 2019.

00:16:36 --> 00:16:44
In parallel, GB3 2020 was coming out and

00:16:40 --> 00:16:47
starting to show signs until the chat

00:16:43 --> 00:16:50
GBD moment around 2022, end of the year

00:16:46 --> 00:16:51
and the industry took off with that and

00:16:49 --> 00:16:53
this was one of the benchmark that it

00:16:50 --> 00:16:55
was really performing really badly and

00:16:52 --> 00:16:57
it was very obscure. I don't think many

00:16:54 --> 00:17:00
people knew about it. It was mostly

00:16:56 --> 00:17:01
niche research communities that maybe

00:16:59 --> 00:17:03
read your paper.

00:17:00 --> 00:17:05
>> Yeah, people who worked on programs this

00:17:02 --> 00:17:07
knew about it. uh but a lot of people

00:17:04 --> 00:17:08
who worked on on deep learning on

00:17:06 --> 00:17:10
scaling up LLMs they didn't really care

00:17:07 --> 00:17:14
for it and part of the reason why is

00:17:09 --> 00:17:17
because LMS did not work well or at all

00:17:13 --> 00:17:18
on the benchmark but benchmark to

00:17:16 --> 00:17:20
capture the attention of the research

00:17:18 --> 00:17:24
community it needs to start working a

00:17:19 --> 00:17:25
little right uh if it's too hard people

00:17:23 --> 00:17:27
are are just going to dismiss it

00:17:24 --> 00:17:31
>> you're just ahead of your time clearly

00:17:26 --> 00:17:33
because we're not on ARC AGI one anymore

00:17:30 --> 00:17:35
and then two is reaching saturation

00:17:32 --> 00:17:36
And then that's right

00:17:34 --> 00:17:37
>> three is out now.

00:17:35 --> 00:17:40
>> Yes.

00:17:36 --> 00:17:44
>> And I think the cool thing about RKGI it

00:17:39 --> 00:17:46
has been a very good barometer for the

00:17:43 --> 00:17:49
industry of the big changes that

00:17:45 --> 00:17:54
happened because V1 was not working at

00:17:48 --> 00:17:56
all for a long time until 2025

00:17:53 --> 00:17:59
when reasoning models came out. Right.

00:17:55 --> 00:18:03
>> Yeah. Absolutely. If you look at uh PRI

00:17:58 --> 00:18:06
performance on arc v1 first and then v2

00:18:02 --> 00:18:09
uh so bas uh we're scoring extremely low

00:18:05 --> 00:18:13
on v1 like sub 10% basically and I mean

00:18:08 --> 00:18:16
it was true of uh the original like GP3

00:18:12 --> 00:18:18
scoring zero but that's even true of the

00:18:15 --> 00:18:19
latest basel lamps today you know as of

00:18:17 --> 00:18:20
March

00:18:18 --> 00:18:22
>> without reason without reasoning

00:18:19 --> 00:18:25
>> without reasoning yeah so the base

00:18:21 --> 00:18:27
models so performance of of basel lamps

00:18:24 --> 00:18:30
on on v1 stayed very very low even

00:18:26 --> 00:18:33
though in the meantime you know we had

00:18:29 --> 00:18:35
scaled up these models by 50,000x right

00:18:32 --> 00:18:37
so it was really telling you that you

00:18:34 --> 00:18:39
know more scale scaling up pre-training

00:18:36 --> 00:18:41
alone was not going to crack the

00:18:38 --> 00:18:43
benchmark this was not enough to

00:18:40 --> 00:18:47
demonstrate that the model had fluid

00:18:42 --> 00:18:50
intelligence and then uh the moment uh

00:18:46 --> 00:18:52
models started performing well on ark1

00:18:49 --> 00:18:56
was with the first reasoning models in

00:18:51 --> 00:18:58
part uh the openi 01 and then 03 uh

00:18:55 --> 00:19:00
models which by the way they were

00:18:57 --> 00:19:02
demonstrated by openi on arc because it

00:18:59 --> 00:19:04
was the one unsaturated reasoning

00:19:01 --> 00:19:06
benchmark that was really showing that

00:19:03 --> 00:19:08
his model was different that that new

00:19:05 --> 00:19:11
capabilities that we had not seen before

00:19:07 --> 00:19:13
and so with reasoning models you start

00:19:10 --> 00:19:16
seeing this sudden like step function

00:19:12 --> 00:19:18
change uh on on ark1 and so ar1 was

00:19:15 --> 00:19:21
really the benchmark that signaled that

00:19:18 --> 00:19:22
this moment in time something was

00:19:20 --> 00:19:22
happening and

00:19:21 --> 00:19:24
>> something big

00:19:21 --> 00:19:27
>> yeah something big like new capabilities

00:19:23 --> 00:19:29
were emerging like reasoning was new and

00:19:26 --> 00:19:31
ifferent and it was actually not

00:19:28 --> 00:19:34
obvious at the time like you know I

00:19:30 --> 00:19:36
don't know if you remember when uh when

00:19:33 --> 00:19:37
03 uh preview was was announced by open

00:19:35 --> 00:19:38
eye

00:19:36 --> 00:19:42
>> that was end of 2024 actually

00:19:37 --> 00:19:45
>> yeah December 2024 and like sure it was

00:19:41 --> 00:19:48
like huge like step function progress on

00:19:44 --> 00:19:50
arc uh but it was very expensive we did

00:19:47 --> 00:19:52
not really have product market fit

00:19:49 --> 00:19:54
effectively but if you looked at uh at

00:19:51 --> 00:19:57
arc results you knew that this was big

00:19:53 --> 00:19:59
and important and Then we released AR2

00:19:56 --> 00:20:02
which was the same format but uh more

00:19:58 --> 00:20:04
difficult like with more uh uh

00:20:01 --> 00:20:07
composition uh at the level of the the

00:20:03 --> 00:20:08
reasoning chains. And what happened

00:20:06 --> 00:20:11
is that so the the earliest reasoning

00:20:08 --> 00:20:14
models started very very low on R2 and

00:20:10 --> 00:20:17
then around the same time as coding

00:20:13 --> 00:20:20
agents started working you saw this

00:20:16 --> 00:20:23
>> yeah so very very recent just few months

00:20:19 --> 00:20:26
ago you saw this uh very very fast like

00:20:22 --> 00:20:29
saturation of R2 and so again like R2

00:20:25 --> 00:20:30
signaled that yes there was this this

00:20:28 --> 00:20:32
new set of capabilities emerging. I

00:20:30 --> 00:20:34
think the benchmark did a really good

00:20:31 --> 00:20:37
job at capturing the advant of reasoning

00:20:33 --> 00:20:38
models and then the advance uh of

00:20:36 --> 00:20:41
agentic coding like this this new

00:20:37 --> 00:20:43
paradigm where if you have uh verifiable

00:20:40 --> 00:20:45
rewards then you can basically fully

00:20:42 --> 00:20:48
automate uh the domain which by the way

00:20:44 --> 00:20:49
is true of arc like arc does provide a

00:20:47 --> 00:20:51
verifiable reward

00:20:48 --> 00:20:54
>> I guess for v2 what what caused the so

00:20:50 --> 00:20:56
ne was clearly reasoning two a

00:20:53 --> 00:20:58
benchmark doesn't care how you solve it

00:20:55 --> 00:21:02
I guess embedded in what you said like

00:20:57 --> 00:21:04
were people using codegen to then solve.

00:21:01 --> 00:21:08
>> That's right. So not not necessarily

00:21:03 --> 00:21:11
codegen uh per se but uh the frontier

00:21:07 --> 00:21:13
labs have been targeting arc v2 and uh

00:21:10 --> 00:21:16
the progress you saw on arc v2 is

00:21:12 --> 00:21:18
actually a result uh of this very very

00:21:15 --> 00:21:20
large scale targeting. So what you can

00:21:17 --> 00:21:24
do to solve RG2 is you ask your

00:21:20 --> 00:21:26
easoning model to make more tasks like

00:21:23 --> 00:21:28
those in the benchmark uh and then you

00:21:25 --> 00:21:31
try to solve them using let's say let's

00:21:27 --> 00:21:32
ay program induction for instance uh

00:21:30 --> 00:21:34
still using your reasoning model then

00:21:32 --> 00:21:37
you verify the solution again it's

00:21:33 --> 00:21:40
verifiable so you can you can trust uh

00:21:36 --> 00:21:42
the answer um and then you fine-tune the

00:21:39 --> 00:21:44
model on the successful reasoning chains

00:21:41 --> 00:21:45
and then you keep repeating like you

00:21:43 --> 00:21:47
generate new tasks you solve them you

00:21:44 --> 00:21:50
verify the solution you fine tune the

00:21:46 --> 00:21:52
model on the reasoning chains and um you

00:21:49 --> 00:21:54
can keep doing this millions of times

00:21:51 --> 00:21:55
right like you just need to spend more

00:21:53 --> 00:21:57
money

00:21:54 --> 00:21:59
>> this is the RL loop that happening yeah

00:21:56 --> 00:22:01
>> and the the new paradigm in AI is

00:21:58 --> 00:22:03
basically that any domain where this is

00:22:00 --> 00:22:07
true where you have the ability to join

00:22:02 --> 00:22:09
these this true uh verification signals

00:22:06 --> 00:22:10
you you can run this this kind of loop

00:22:08 --> 00:22:13
right if you can run this kind of loop

00:22:10 --> 00:22:15
you can mine uh you can brute force mine

00:22:12 --> 00:22:17
ffectively the entire space and get

00:22:14 --> 00:22:18
extremely high performance. This is

00:22:16 --> 00:22:21
basically the the process through which

00:22:17 --> 00:22:23
AR2 was saturated. So what it tells you

00:22:20 --> 00:22:25
is that it's not so much that the models

00:22:22 --> 00:22:27
have higher fluid intelligence uh than

00:22:24 --> 00:22:30
they did with the with the first

00:22:26 --> 00:22:32
models. It's just that you have this new

00:22:29 --> 00:22:35
paradigm of post training. And this is

00:22:31 --> 00:22:37
exactly what led to agency coding. So it

00:22:34 --> 00:22:37
does matter. It is it is valuable. It is

00:22:36 --> 00:22:40
useful.

00:22:36 --> 00:22:42
>> It's not that the models are smarter.

00:22:39 --> 00:22:45
It's that they're suddenly more useful.

00:22:42 --> 00:22:47
It is possible to be more useful in

00:22:44 --> 00:22:49
particular domains without being

00:22:46 --> 00:22:50
smarter. Yeah, clearly because that's

00:22:48 --> 00:22:54
means good things for me. I'm not

00:22:50 --> 00:22:56
getting any smarter right now like at

00:22:53 --> 00:22:58
you know age 45. But you know I can

00:22:55 --> 00:23:00
learn how to do things and that's sort

00:22:57 --> 00:23:01
of what's happening with the models as

00:22:59 --> 00:23:04
of like late.

00:23:00 --> 00:23:05
>> Yeah, absolutely. When it comes to uh

00:23:03 --> 00:23:08
competency, there's always a trade-off

00:23:04 --> 00:23:09
between intelligence and knowledge. If

00:23:07 --> 00:23:11
you have more knowledge, if you have

00:23:08 --> 00:23:14
better training, uh you need less

00:23:10 --> 00:23:16
intelligence to be competent. And that's

00:23:13 --> 00:23:19
exactly uh what happened with the the

00:23:16 --> 00:23:21
rise of coding agents, right? The models

00:23:18 --> 00:23:24
don't have higher fluid intelligence per

00:23:20 --> 00:23:26
se. They don't have like a higher uh IQ,

00:23:23 --> 00:23:28
so to speak. It's just that they're way

00:23:25 --> 00:23:30
better trained, and they're way better

00:23:27 --> 00:23:31
trained in in two ways. So, they're not

00:23:29 --> 00:23:33
just trying to autocomplete code

00:23:30 --> 00:23:36
anymore. They're actually trained via

00:23:32 --> 00:23:37
trial and error in these

00:23:35 --> 00:23:39
posturing environments with you know

00:23:36 --> 00:23:42
true reward signals and also they're

00:23:38 --> 00:23:45
trained uh to embed this uh model of

00:23:41 --> 00:23:47
code execution right where they they

00:23:44 --> 00:23:50
learn to keep track of the

00:23:46 --> 00:23:52
value of variables uh uh over an

00:23:49 --> 00:23:53
execution cycle and that's what what's

00:23:51 --> 00:23:56
leading to this extremely strong product

00:23:52 --> 00:23:57
market fit of agency coding today and

00:23:55 --> 00:23:58
it's really it's completely changing

00:23:56 --> 00:24:00
software engineering

00:23:57 --> 00:24:03
>> this happened not too long ago the

00:23:59 --> 00:24:06
saturation we actually at the founders

00:24:02 --> 00:24:07
of poetic that came and spoke about the

00:24:05 --> 00:24:10
approach

00:24:06 --> 00:24:12
>> which is really sounds like this new way

00:24:09 --> 00:24:14
of uh getting LM to perform is building

00:24:11 --> 00:24:16
this agent hardness right and the

00:24:13 --> 00:24:20
hardness is basically structuring a

00:24:16 --> 00:24:22
problem domain into something that can

00:24:19 --> 00:24:25
be formally verified and they did that

00:24:21 --> 00:24:27
basically for ARC v2 which when they

00:24:24 --> 00:24:29
released it they were at the top of the

00:24:26 --> 00:24:30
benchmark but then the crazy thing is I

00:24:28 --> 00:24:33
actually worked with a company in the

00:24:29 --> 00:24:35
winter 26 batch not too long ago called

00:24:32 --> 00:24:39
Confluence Labs which actually ended up

00:24:34 --> 00:24:41
saturating the V2 results with 97% and I

00:24:38 --> 00:24:43
think their task cost was uh a lot more

00:24:40 --> 00:24:45
fficient too and the approach they

00:24:42 --> 00:24:48
basically took is similar to this. I

00:24:44 --> 00:24:52
think they built the harnesses on top of

00:24:47 --> 00:24:55
it in order to get the LMS to to go and

00:24:51 --> 00:24:56
build different tasks and program

00:24:54 --> 00:24:58
through it.

00:24:55 --> 00:25:00
>> Yeah. which then for me I was like wow

00:24:58 --> 00:25:03
is this batch and during the batch they

00:24:59 --> 00:25:05
only worked on it for a couple of months

00:25:02 --> 00:25:06
and they were able to saturate this

00:25:04 --> 00:25:08
batch that has been around for a long

00:25:05 --> 00:25:08
time. It's like something special is

00:25:07 --> 00:25:09
happening.

00:25:07 --> 00:25:12
>> Yeah. Yeah. There's a lot of progress

00:25:08 --> 00:25:14
right now. It's driven by a custom

00:25:11 --> 00:25:16
harnesses around the task and the

00:25:13 --> 00:25:19
harness is basically a way for the the

00:25:15 --> 00:25:22
human programmer to um input into the

00:25:18 --> 00:25:25
model like higher level like uh solution

00:25:21 --> 00:25:27
strategies basically. I mean to me the

00:25:24 --> 00:25:30
fact that you need humans to engineer

00:25:26 --> 00:25:32
these harnesses is also a sign that

00:25:29 --> 00:25:34
we're we're short of AGI today because

00:25:31 --> 00:25:35
if we had AGI you know AI would just

00:25:33 --> 00:25:37
make its own harness it would not need

00:25:34 --> 00:25:40
to be told how to solve a problem it

00:25:36 --> 00:25:41
will just figure it out but it is very

00:25:39 --> 00:25:44
effective like harnesses I don't think

00:25:40 --> 00:25:46
they get us closer to AGI in any sense

00:25:43 --> 00:25:48
but it's a very valuable area of

00:25:45 --> 00:25:50
research because that can lead to task

00:25:47 --> 00:25:52
automation at scale

00:25:49 --> 00:25:55
>> YC's next batch is now taking

00:25:51 --> 00:25:57
applications got a startup in Apply at y

00:25:54 --> 00:25:59
combinator.com/apply.

00:25:56 --> 00:26:02
It's never too early and filling out the

00:25:58 --> 00:26:03
app will level up your idea. Okay, back

00:26:01 --> 00:26:06
to the video.

00:26:02 --> 00:26:08
>> Can you tell us about then what V3 is

00:26:05 --> 00:26:09
going to measure that's uh just got

00:26:07 --> 00:26:11
released?

00:26:08 --> 00:26:14
>> Yeah, absolutely. So, if you look at V1,

00:26:10 --> 00:26:18
V2, uh it was really focusing on your

00:26:13 --> 00:26:20
ability to uh produce like causal models

00:26:17 --> 00:26:22
uh of a pattern that was just given to

00:26:19 --> 00:26:25
you like the data was given to you. Uh

00:26:21 --> 00:26:29
so it was static, it was uh passive and

00:26:24 --> 00:26:31
really focused on uh modeling and uh v3

00:26:28 --> 00:26:34
is completely different. We are trying

00:26:30 --> 00:26:36
to measure uh agentic intelligence. So

00:26:33 --> 00:26:38
it's interactive, it's active like the

00:26:35 --> 00:26:41
data is not provided to you. You must go

00:26:37 --> 00:26:43
get it. The idea is that your agent is

00:26:40 --> 00:26:46
dropped into a new environment which is

00:26:42 --> 00:26:49
kind of like a a mini video game. And

00:26:45 --> 00:26:51
it's not provided any instructions. It's

00:26:48 --> 00:26:53
not told what to do. it's not told uh

00:26:50 --> 00:26:56
what the goal even is or what the

00:26:52 --> 00:26:59
controls even are and it must figure out

00:26:55 --> 00:27:01
everything on its own via trial and

00:26:58 --> 00:27:04
error. So we are we are not just uh

00:27:00 --> 00:27:07
measuring you know the uh the AI's

00:27:03 --> 00:27:09
ability to model its environment we're

00:27:06 --> 00:27:11
also looking at uh its exploration

00:27:08 --> 00:27:14
efficiency its ability to acquire goals

00:27:10 --> 00:27:17
on its own like goal setting and of

00:27:13 --> 00:27:18
course its ability to plan uh through

00:27:16 --> 00:27:21
the model of the environment that's

00:27:17 --> 00:27:23
created and and to execute the plan. Uh

00:27:20 --> 00:27:25
and so together, you know, all all of

00:27:22 --> 00:27:28
these abilities, we call that agentic

00:27:24 --> 00:27:30
intelligence. And we are looking for AI

00:27:27 --> 00:27:32
systems that could learn to play these

00:27:29 --> 00:27:35
games and and you know, crack them with

00:27:31 --> 00:27:37
e same degree of action efficiency as

00:27:34 --> 00:27:38
a human. If you look at the human, they

00:27:36 --> 00:27:40
are dropped into this new environment.

00:27:38 --> 00:27:43
They they try a few things. They start

00:27:39 --> 00:27:44
understanding how things work. Uh they

00:27:42 --> 00:27:46
can they can solve the environment, you

00:27:43 --> 00:27:48
know, in in a few hundreds to thousands

00:27:46 --> 00:27:50
factions. We're trying to look for AI

00:27:47 --> 00:27:52
systems that could match uh this

00:27:49 --> 00:27:55
efficiency. And by the way, we know that

00:27:51 --> 00:27:57
all of these test environments in R3 are

00:27:54 --> 00:27:59
solvable by humans with no prior

00:27:56 --> 00:28:02
training because we actually uh tested

00:27:58 --> 00:28:04
them uh on on regular people. Yeah. At

00:28:01 --> 00:28:06
first, you just see this screen and you

00:28:03 --> 00:28:08
know you have these keys available,

00:28:05 --> 00:28:11
but you don't know what they do and you

00:28:07 --> 00:28:12
must figure out everything from scratch.

00:28:10 --> 00:28:13
And humans are really good at that by

00:28:11 --> 00:28:16
the way. They're really good at

00:28:12 --> 00:28:18
exploring efficiently at making sense of

00:28:15 --> 00:28:20
something new and eventually cracking

00:28:17 --> 00:28:22
the game. And frontier models today,

00:28:19 --> 00:28:25
they're not very good at it. If the

00:28:21 --> 00:28:27
reasoning models cracked V1 and the like

00:28:24 --> 00:28:30
reinforcement learning environments

00:28:26 --> 00:28:33
cracked V2, did do we need a new advance

00:28:29 --> 00:28:35
to crack V3? Did the did do even the

00:28:32 --> 00:28:37
best techniques currently like not work?

00:28:34 --> 00:28:39
>> Yeah, I mean, I'm pretty curious to see

00:28:36 --> 00:28:41
how Frontier Labs are going to react to

00:28:38 --> 00:28:44
V3 and how they're going to start to

00:28:40 --> 00:28:46
target it. um it is designed to be more

00:28:43 --> 00:28:48
sistant uh to the same kind of

00:28:45 --> 00:28:50
darkness strategy as what we saw for V2

00:28:47 --> 00:28:54
in particular. Like of course you can

00:28:49 --> 00:28:58
try to just make more AR3 like games and

00:28:53 --> 00:29:01
then train your agents uh in them. Um

00:28:58 --> 00:29:04
but the thing is we've uh deliberately

00:29:00 --> 00:29:06
tried to create a private set of

00:29:03 --> 00:29:08
environments that is significantly

00:29:05 --> 00:29:09
different from the public set like you

00:29:07 --> 00:29:11
can look at the public set. actually

00:29:08 --> 00:29:12
giving you that much information about

00:29:10 --> 00:29:15
what's in the private set.

00:29:11 --> 00:29:16
>> Uh in the private set you will have very

00:29:14 --> 00:29:17
different games with very different

00:29:15 --> 00:29:20
concepts

00:29:16 --> 00:29:22
>> and also the public set is meant to be

00:29:19 --> 00:29:24
substantially easier performance on the

00:29:21 --> 00:29:25
public set is not actually it's not

00:29:23 --> 00:29:27
representative of how well the system

00:29:24 --> 00:29:29
would prioritize. So for this reason

00:29:26 --> 00:29:31
it's going to be harder to target

00:29:28 --> 00:29:33
>> and that makes it a better test of fluid

00:29:30 --> 00:29:36
intelligence as opposed to a test of how

00:29:32 --> 00:29:36
much effort you put into into cracking

00:29:35 --> 00:29:38
it.

00:29:35 --> 00:29:39
>> I'm so curious how do you come up with

00:29:37 --> 00:29:42
ese games? They're so creative.

00:29:38 --> 00:29:45
>> Yeah, we set up an entire uh video game

00:29:42 --> 00:29:48
studio, right, to to create them. Uh so

00:29:44 --> 00:29:50
we got over 250 games. Uh and you know,

00:29:47 --> 00:29:52
they they're pretty quick to play. Like

00:29:49 --> 00:29:55
ach game takes you maybe 10 minutes or

00:29:51 --> 00:29:57
or a bit less uh uh to play from

00:29:54 --> 00:30:00
scratch, like upon first contact. And we

00:29:56 --> 00:30:02
have like 250 plus. And uh we set up

00:29:59 --> 00:30:05
this uh very productive game studio

00:30:01 --> 00:30:07
where we had any given week we had

00:30:04 --> 00:30:10
multiple games uh in progress. We're

00:30:06 --> 00:30:12
like this this pipeline uh including you

00:30:09 --> 00:30:15
know design implementation uh review

00:30:11 --> 00:30:17
human testing and and and many many

00:30:14 --> 00:30:20
iteration cycles to to to make sure that

00:30:16 --> 00:30:21
he the game comes out right. Who who's

00:30:19 --> 00:30:24
working in the studio?

00:30:20 --> 00:30:26
>> Right. Uh we yeah we hired a team of

00:30:24 --> 00:30:27
game developers and we built our own

00:30:25 --> 00:30:29
game engine.

00:30:26 --> 00:30:31
>> Wow. So so it's actually people who like

00:30:28 --> 00:30:33
previously worked in the game in the in

00:30:30 --> 00:30:34
the video game industry.

00:30:32 --> 00:30:36
>> That's right. That's right. So, one

00:30:33 --> 00:30:39
thing to keep in mind though is that the

00:30:35 --> 00:30:41
games in Oxy are unique, right? They're

00:30:38 --> 00:30:44
they're trying to not borrow elements,

00:30:40 --> 00:30:46
concepts from previous video games. Uh

00:30:43 --> 00:30:49
they're built entirely on top of core

00:30:45 --> 00:30:51
knowledge prior like things like just

00:30:48 --> 00:30:53
you know elementary knowledge like

00:30:50 --> 00:30:56
basic physics uh understanding of

00:30:52 --> 00:30:58
objects uh understanding of the notion

00:30:55 --> 00:31:02
of agents for instance like an agent in

00:30:57 --> 00:31:04
objects with goals and int intentions.

00:31:01 --> 00:31:07
Um but we we're not incorporating any

00:31:03 --> 00:31:10
language any like cultural symbols like

00:31:06 --> 00:31:12
you know arrows for instance uh or the

00:31:09 --> 00:31:14
color green meaning go and color red

00:31:11 --> 00:31:16
meaning star that sort of thing. Uh

00:31:13 --> 00:31:18
there's no external knowledge that's

00:31:15 --> 00:31:19
involved uh in these games.

00:31:17 --> 00:31:20
>> It's like one of those uh IQ tests that

00:31:18 --> 00:31:21
are just pattern matching but now it has

00:31:20 --> 00:31:24
time series.

00:31:20 --> 00:31:27
>> Yeah. Uh it's not just time series it's

00:31:23 --> 00:31:31
interactive. must create your own path

00:31:26 --> 00:31:34
rough game space, right? You you must

00:31:30 --> 00:31:36
>> you know in in in an acutest like

00:31:33 --> 00:31:39
problem like you know what ARK one and

00:31:35 --> 00:31:41
two is the data that you must model is

00:31:38 --> 00:31:43
provided to you. You already have the

00:31:40 --> 00:31:46
data you just you just need to find the

00:31:42 --> 00:31:48
causal rule to explain it with AR3

00:31:45 --> 00:31:50
actually must gather the data

00:31:47 --> 00:31:51
>> uh and you must do so efficiently. Like

00:31:49 --> 00:31:53
of course you could say well I'm just

00:31:50 --> 00:31:56
going to you know brute force mine uh

00:31:52 --> 00:31:58
the space of every possible game state

00:31:55 --> 00:32:00
and then I find the solution. You cannot

00:31:57 --> 00:32:01
do that because if you try to do that

00:31:59 --> 00:32:03
you would score extremely low even if

00:32:00 --> 00:32:05
you manage to solve the level uh because

00:32:02 --> 00:32:07
you're scored on your efficiency. You

00:32:04 --> 00:32:09
must match human level efficiency.

00:32:06 --> 00:32:12
>> It's funny it's like almost coming full

00:32:08 --> 00:32:15
circle. This level of AGI

00:32:11 --> 00:32:17
with games sort of is the match pair to

00:32:14 --> 00:32:19
pen AI writing. I mean, you know, Tom

00:32:16 --> 00:32:21
Brown, uh, one of the co-founders of

00:32:18 --> 00:32:25
Anthropic, had to write like the harness

00:32:20 --> 00:32:28
code to allow like the, you know, preGPT

00:32:24 --> 00:32:31
AI at OpenAI to play Starcraft.

00:32:27 --> 00:32:34
>> Yeah. Yeah. OpenAI worked on on uh in

00:32:30 --> 00:32:36
part on on Dota 2. uh they had the

00:32:33 --> 00:32:39
openi5 model which was if I recall

00:32:35 --> 00:32:42
correctly. So this was like not just pre

00:32:38 --> 00:32:44
GPD but also mostly pre transformers

00:32:41 --> 00:32:45
because they were working with a stack

00:32:43 --> 00:32:47
of LSTM

00:32:44 --> 00:32:50
>> uh layers if I recall correctly and even

00:32:46 --> 00:32:53
before open pony uh deep mine worked a

00:32:50 --> 00:32:56
lot on video game uh uh you know solving

00:32:52 --> 00:32:58
video games via deep aisle uh and they

00:32:55 --> 00:33:01
were the first to do uh Atari games

00:32:57 --> 00:33:03
right back in 2013 that you know they

00:33:00 --> 00:33:05
were very very early very very visionary

00:33:02 --> 00:33:07
in that sense to to work on on this

00:33:04 --> 00:33:09
problem so early with methods which are

00:33:06 --> 00:33:12
still very modern methods. So the big

00:33:08 --> 00:33:17
difference is that if you look at um at

00:33:11 --> 00:33:19
games for instance you're training uh on

00:33:16 --> 00:33:22
the same environment as what you use

00:33:18 --> 00:33:25
for testing. So effectively you're just

00:33:21 --> 00:33:28
rying to memorize the best strategies.

00:33:24 --> 00:33:31
you're trying to uh at at training time

00:33:28 --> 00:33:35
xplore the full uh space of possible

00:33:30 --> 00:33:36
game states and productionize

00:33:34 --> 00:33:39
operationalize

00:33:35 --> 00:33:40
uh that knowledge into into into the

00:33:38 --> 00:33:43
model and then at inference time you're

00:33:40 --> 00:33:45
basically just recalling that knowledge

00:33:42 --> 00:33:49
and that's explicitly what we're trying

00:33:44 --> 00:33:51
to avoid with AR 3. Uh you're not

00:33:48 --> 00:33:52
playing games uh that you've seen

00:33:50 --> 00:33:54
before. You're not playing games that

00:33:51 --> 00:33:57
you've been trained on like for millions

00:33:53 --> 00:33:59
of files. Like the OpenI5 model for

00:33:56 --> 00:34:02
instance was playing a restricted

00:33:58 --> 00:34:04
version of Dota 2 and it was trained on

00:34:01 --> 00:34:06
like tens of thousands of hours of

00:34:03 --> 00:34:08
gameplay effectively. I think maybe in

00:34:05 --> 00:34:10
millions just an insane amount of

00:34:07 --> 00:34:12
training data. With AR 3, you're being

00:34:09 --> 00:34:14
evaluated on games that you're seeing

00:34:11 --> 00:34:18
for the very first time and every action

00:34:14 --> 00:34:20
you spend exploring is counted towards

00:34:17 --> 00:34:22
your efficiency score. Right? So you're

00:34:19 --> 00:34:24
ally focused on measuring fluid

00:34:21 --> 00:34:26
intelligence, your ability to

00:34:23 --> 00:34:29
efficiently explore, efficiently produce

00:34:25 --> 00:34:33
a world model uh of the environment and

00:34:28 --> 00:34:35
then use this model uh to infer goals uh

00:34:32 --> 00:34:37
plan towards these goals uh and and

00:34:34 --> 00:34:40
eventually crack the game. One of the

00:34:36 --> 00:34:42
arguments for um you know India is that

00:34:39 --> 00:34:45
you're able to do all of the intelligent

00:34:41 --> 00:34:47
asks for you know an arc task might be

00:34:44 --> 00:34:49
like.3

00:34:46 --> 00:34:52
you know cents for an arc task but you

00:34:48 --> 00:34:53
know for the same task on a foundation

00:34:51 --> 00:34:56
model with LLMs it's you know a dollar

00:34:52 --> 00:34:58
to $10 and then there's this other

00:34:55 --> 00:35:02
aspect that we've been tracking where it

00:34:57 --> 00:35:05
seems like uh more and more intelligence

00:35:01 --> 00:35:07
um at least on the LLM side uh can be

00:35:04 --> 00:35:10
distilled down into smaller and smaller

00:35:06 --> 00:35:12
models. And so on the one hand like

00:35:09 --> 00:35:14
they're scaling up but then they're like

00:35:11 --> 00:35:17
distilling smarter and smarter small

00:35:13 --> 00:35:19
models. I guess your approach might

00:35:16 --> 00:35:22
indicate that it's not billions of

00:35:18 --> 00:35:25
parameters like the you know achieving

00:35:21 --> 00:35:28
AGI might not be you know sort of

00:35:24 --> 00:35:30
inherently a scale thing at all. There's

00:35:27 --> 00:35:32
a platonic ideal of the NDIA model that

00:35:29 --> 00:35:32
achieves AGI.

00:35:31 --> 00:35:34
>> Yeah. Yeah.

00:35:31 --> 00:35:36
>> Do you ever think about it in terms of

00:35:33 --> 00:35:38
like well it would fit on a floppy disc?

00:35:35 --> 00:35:39
>> Well, okay. There there are two things

00:35:37 --> 00:35:41
to separate. There's the sort of like

00:35:38 --> 00:35:43
fluid intelligence engine.

00:35:40 --> 00:35:46
>> I think it's going to be a very very

00:35:42 --> 00:35:49
small code base uh and a very small set

00:35:45 --> 00:35:51
of models associated with it and it's

00:35:48 --> 00:35:53
probably going to be on the order of

00:35:50 --> 00:35:56
megabytes, right? And then you have the

00:35:52 --> 00:35:59
knowledge base so to speak uh that's

00:35:55 --> 00:36:02
going to be uh layered below this this

00:35:58 --> 00:36:04
fluid intelligence engine like you know

00:36:01 --> 00:36:06
fluid intelligence has to draw on some

00:36:03 --> 00:36:08
knowledge and that knowledge is going to

00:36:05 --> 00:36:10
take up a lot more space. I think it's

00:36:07 --> 00:36:12
it's important to to differentiate

00:36:09 --> 00:36:14
the two. I do believe that you know when

00:36:11 --> 00:36:17
we create a GI retrospectively it will

00:36:13 --> 00:36:19
turn out that it's a code base that's

00:36:16 --> 00:36:22
less than 10,000 lines of code

00:36:18 --> 00:36:25
>> and that if you had if you had known

00:36:21 --> 00:36:27
about it back in the in the 1980s you

00:36:24 --> 00:36:29
could have done AGI back then using the

00:36:26 --> 00:36:30
comput resources available back then

00:36:28 --> 00:36:32
>> wow that's a crazy prediction

00:36:29 --> 00:36:34
>> that's I I think retrospectively this

00:36:31 --> 00:36:35
will turn out to be to be true.

00:36:33 --> 00:36:37
>> Wow. So it was just like hiding under

00:36:34 --> 00:36:39
our noses in plain sight for like 40

00:36:36 --> 00:36:39
years. It took us like 40 years to

00:36:38 --> 00:36:40
figure it out.

00:36:38 --> 00:36:42
>> That's right. That's right.

00:36:39 --> 00:36:44
>> Well, that second thing sounds like

00:36:41 --> 00:36:45
Douglas Lenat's like psych project. Or

00:36:43 --> 00:36:47
is that the wrong way to think about it?

00:36:44 --> 00:36:49
It's like there's sort of knowledge

00:36:46 --> 00:36:50
about the world

00:36:48 --> 00:36:53
>> and then there's methods like the

00:36:50 --> 00:36:55
program what I hear is like the program

00:36:52 --> 00:36:56
ight be 10,000 lines and then it

00:36:54 --> 00:36:58
operates on like

00:36:55 --> 00:37:00
>> on knowledge base that's very large. So

00:36:57 --> 00:37:02
the problem with psych uh I mean there

00:36:59 --> 00:37:04
were many issues with it but one of the

00:37:01 --> 00:37:05
big issues is that uh there was no

00:37:03 --> 00:37:07
learning involved.

00:37:04 --> 00:37:08
>> Yeah. It's just the knowledge like

00:37:06 --> 00:37:10
>> the knowledge wasn't crafted.

00:37:07 --> 00:37:11
>> It's like purely symbolic knowledge and

00:37:09 --> 00:37:14
it was probably inaccurate.

00:37:10 --> 00:37:17
>> The way you want to be building a GI is

00:37:13 --> 00:37:19
that you want to be removing humans uh

00:37:16 --> 00:37:20
from from the improvement loop as much

00:37:18 --> 00:37:23
as possible. You don't want a system

00:37:19 --> 00:37:25
where every improvement in system

00:37:22 --> 00:37:27
capability has to involve a human

00:37:24 --> 00:37:29
engineer doing something. And it's

00:37:26 --> 00:37:32
actually the strength uh of deep

00:37:28 --> 00:37:33
learning and foundation models is that

00:37:31 --> 00:37:35
you can just scale up the knowledge

00:37:32 --> 00:37:38
base. Like an LLM is effectively

00:37:34 --> 00:37:40
knowledge base. It's a bank uh of uh of

00:37:37 --> 00:37:43
you know modular uh vector programs that

00:37:40 --> 00:37:45
map patterns of input tokens to patterns

00:37:42 --> 00:37:46
of output tokens. And you can you can

00:37:44 --> 00:37:48
scale up that knowledge base by just

00:37:45 --> 00:37:51
adding training data and training

00:37:47 --> 00:37:52
compute with no further human

00:37:50 --> 00:37:54
involvement. I mean, of course, there's

00:37:51 --> 00:37:55
till a little bit of human involvement

00:37:53 --> 00:37:57
in in making sure the train job

00:37:54 --> 00:38:00
completes, but it's it's minor. You've

00:37:56 --> 00:38:02
managed to remove humans uh from this

00:37:59 --> 00:38:04
improvement as much as possible. And

00:38:01 --> 00:38:06
that's also uh what we want for our

00:38:03 --> 00:38:08
system. We want a system that's uh

00:38:05 --> 00:38:10
self-improving where the improvements

00:38:07 --> 00:38:13
are compounding, meaning that every time

00:38:10 --> 00:38:15
the system increases capabilities, it's

00:38:12 --> 00:38:16
also increasing the rate at which it

00:38:14 --> 00:38:18
increases its capabilities.

00:38:15 --> 00:38:21
>> I think this is a PGism. It's like, I'm

00:38:17 --> 00:38:23
sorry the essay is so long. uh if I had

00:38:20 --> 00:38:25
more time I would make it shorter.

00:38:22 --> 00:38:28
>> Yeah. When you're looking at at a hard

00:38:24 --> 00:38:30
problem it's actually harder to produce

00:38:27 --> 00:38:32
a short elegant concise solution than a

00:38:30 --> 00:38:34
messy overengineered solution.

00:38:31 --> 00:38:36
>> Yeah, you can brute force it but you

00:38:33 --> 00:38:38
know the more elegant version is very

00:38:35 --> 00:38:40
short and that's kind of like what

00:38:37 --> 00:38:42
you said with how this might come about.

00:38:39 --> 00:38:45
This is this is yeah this is literally

00:38:41 --> 00:38:47
the shape of the type of AI approach uh

00:38:44 --> 00:38:51
we are creating and I think this is also

00:38:46 --> 00:38:55
the shape uh of science itself like

00:38:50 --> 00:38:57
science is fundamentally a a symbolic

00:38:54 --> 00:39:00
ompression process where you're looking

00:38:56 --> 00:39:02
at a big mess of observations like you

00:38:59 --> 00:39:03
know the the position of planets in the

00:39:01 --> 00:39:07
sky or something like that and you're

00:39:02 --> 00:39:09
compressing that down to uh a very

00:39:06 --> 00:39:12
simple symbolic rule. You're saying like

00:39:08 --> 00:39:14
yeah like all these you know thousands

00:39:11 --> 00:39:16
of observations actually just all uh

00:39:13 --> 00:39:18
this one simple equation that's symbolic

00:39:15 --> 00:39:21
ompression and to do this by the way uh

00:39:17 --> 00:39:23
you need the model uh to be symbolic

00:39:20 --> 00:39:25
like you you could not fit a curve and

00:39:22 --> 00:39:27
say well you know that that curve is my

00:39:24 --> 00:39:30
model that would never be optimal it

00:39:26 --> 00:39:31
would never be concise or elegant enough

00:39:29 --> 00:39:33
and that's not what science is doing.

00:39:30 --> 00:39:35
Science is not about curve fitting.

00:39:32 --> 00:39:37
Science is about finding the equation,

00:39:34 --> 00:39:39
finding the most compressive symbolic

00:39:36 --> 00:39:41
model of your pile of observation. And

00:39:38 --> 00:39:43
that's the process that you're trying to

00:39:40 --> 00:39:45
recreate in software form. Like you

00:39:42 --> 00:39:47
could say that uh the NDI approach to

00:39:44 --> 00:39:50
program synthesis is that we are

00:39:46 --> 00:39:52
building science incarnate science the

00:39:49 --> 00:39:55
scientific method in in algorithmic

00:39:51 --> 00:39:59
form. I'm curious if you compare it to

00:39:54 --> 00:40:00
biology. Clearly LMS don't learn the way

00:39:58 --> 00:40:02
that humans do cuz no baby reads the

00:39:59 --> 00:40:04
whole internet. Do you think program

00:40:01 --> 00:40:06
synthesis is closer to the way that

00:40:03 --> 00:40:09
humans learn or do you think that's yet

00:40:05 --> 00:40:10
a third branch where even if program

00:40:08 --> 00:40:12
synthesis is correct there will be some

00:40:10 --> 00:40:14
yet as undiscovered third way to do it

00:40:12 --> 00:40:18
which is the thing that we do

00:40:13 --> 00:40:20
>> I think so uh I do think humans do some

00:40:17 --> 00:40:22
amount of program synthesis I think the

00:40:19 --> 00:40:24
way humans learn and the way the the

00:40:21 --> 00:40:26
human mind works is very messy it's not

00:40:23 --> 00:40:28
like there's one simple elegant

00:40:25 --> 00:40:31
principle behind it all it's an

00:40:27 --> 00:40:33
implementation of fundamental principles

00:40:30 --> 00:40:35
the fundamental principles of of

00:40:32 --> 00:40:38
intelligence which you know I think we

00:40:34 --> 00:40:40
can identify these principles and

00:40:37 --> 00:40:43
reimplement intelligence from scratch

00:40:40 --> 00:40:45
from first principles in a way that will

00:40:42 --> 00:40:47
be much more efficient than the human

00:40:44 --> 00:40:49
brain. I think the human brain is messy

00:40:46 --> 00:40:52
and it's it can be a good source of

00:40:48 --> 00:40:55
inspiration for AI but I think it would

00:40:51 --> 00:40:56
be counterproductive to just try uh to

00:40:54 --> 00:40:59
you know observe it and reimplement it

00:40:55 --> 00:41:01
like uh and and and make it biologically

00:40:58 --> 00:41:02
plausible. Uh I think that's

00:41:00 --> 00:41:03
counterpart. That's not what we're

00:41:01 --> 00:41:05
trying to do at India. We're really

00:41:02 --> 00:41:07
trying to find what are the first

00:41:04 --> 00:41:10
principles of intelligence and what is

00:41:06 --> 00:41:11
the system that would best implement

00:41:09 --> 00:41:15
hem. But yeah, I do believe the human

00:41:10 --> 00:41:16
mind does at the highest level uh

00:41:14 --> 00:41:17
something that looks a lot like

00:41:15 --> 00:41:20
programs. It's like we're currently

00:41:16 --> 00:41:22
building causal models of our

00:41:19 --> 00:41:24
surroundings like we're we're describing

00:41:21 --> 00:41:27
our surroundings in our mind as you know

00:41:24 --> 00:41:30
a set of objects and agents and and

00:41:26 --> 00:41:32
relations uh pin objects uh that are

00:41:29 --> 00:41:35
fundamentally symbolic and causal in

00:41:31 --> 00:41:39
ature. This is exactly the process that

00:41:34 --> 00:41:41
lets us uh generalize so well and adapt

00:41:38 --> 00:41:44
so well to novelty on the fly. I'm

00:41:40 --> 00:41:47
curious about NDIA the company and as

00:41:43 --> 00:41:49
you're as you're building it um we've

00:41:46 --> 00:41:50
all here heard of the OpenAI founding

00:41:48 --> 00:41:52
story and something that's always struck

00:41:49 --> 00:41:54
with me is just like both Sam and Greg

00:41:51 --> 00:41:55
say that it was a little odd in the

00:41:53 --> 00:41:58
arly days cuz you didn't actually know

00:41:54 --> 00:41:59
hat to do just like bunch of people

00:41:57 --> 00:42:01
like hanging out in an apartment. I

00:41:58 --> 00:42:02
would love to hear kind of what's that

00:42:00 --> 00:42:05
been like for India like what did like

00:42:01 --> 00:42:06
the day one look like and just maybe for

00:42:04 --> 00:42:09
just people who are interested in

00:42:05 --> 00:42:10
starting these alternative approaches

00:42:08 --> 00:42:12
who don't have sort of a researchy

00:42:09 --> 00:42:12
background how should they think about

00:42:11 --> 00:42:14
hat

00:42:11 --> 00:42:16
>> yeah so we we started on day one with

00:42:13 --> 00:42:19
e symbolic learning vision like we

00:42:15 --> 00:42:20
basically knew that we wanted to do uh

00:42:18 --> 00:42:22
symbolic program synthesis that we

00:42:19 --> 00:42:25
wanted to create a new approach to

00:42:21 --> 00:42:27
machine learning where you replace

00:42:24 --> 00:42:29
parameter curves with the shortest

00:42:26 --> 00:42:31
possible symbolic models and And the big

00:42:28 --> 00:42:34
question was okay so how do we find

00:42:30 --> 00:42:36
these models? We started from uh the the

00:42:33 --> 00:42:38
base idea which is still the idea

00:42:35 --> 00:42:41
that we're following today which is that

00:42:37 --> 00:42:44
we are doing we are going to do uh deep

00:42:40 --> 00:42:46
learning guided program search that you

00:42:43 --> 00:42:48
have a a symbolic search space to

00:42:45 --> 00:42:50
explore and it's big it's in fact

00:42:47 --> 00:42:53
communal you're not going to make

00:42:49 --> 00:42:55
progress uh if you just use brute force

00:42:52 --> 00:42:58
uh it's not going to scale uh you have

00:42:54 --> 00:43:00
to break the comal wall and the way to

00:42:57 --> 00:43:02
do it is to add is to add uh deep

00:42:59 --> 00:43:05
learning guidance it's actually very

00:43:01 --> 00:43:07
similar to uh the principles that end

00:43:04 --> 00:43:09
something like alpha or alpha zero. So

00:43:06 --> 00:43:11
it was our our starting point. We also

00:43:08 --> 00:43:12
you know didn't have very clear ideas

00:43:10 --> 00:43:14
about how to how to build it. So we we

00:43:11 --> 00:43:17
tried many different things. We tried

00:43:13 --> 00:43:21
many many different ideas and um it took

00:43:16 --> 00:43:24
us half a year roughly uh to to to get

00:43:20 --> 00:43:26
o good foundations uh where we we could

00:43:23 --> 00:43:27
start building a system that compounds.

00:43:25 --> 00:43:29
And I think that's what's really

00:43:26 --> 00:43:30
important uh when when doing a lab like

00:43:28 --> 00:43:32
this that you don't want to be in a

00:43:29 --> 00:43:34
situation where you're you're constantly

00:43:31 --> 00:43:38
trying something new. It's not reusing

00:43:34 --> 00:43:39
any learnings, any findings uh from the

00:43:37 --> 00:43:42
previous approaches. You want you want a

00:43:38 --> 00:43:44
compounding stack. You want to build

00:43:41 --> 00:43:45
reusable foundations and then the next

00:43:43 --> 00:43:48
layer and then the next layer and the

00:43:44 --> 00:43:49
the and of course you you want to be

00:43:47 --> 00:43:52
building onto the right foundation. So

00:43:48 --> 00:43:54
don't uh commit to the to the foundation

00:43:51 --> 00:43:56
layer too early, but also make sure that

00:43:53 --> 00:43:58
some point you're building this this

00:43:55 --> 00:43:59
compounding structure and that that's

00:43:57 --> 00:44:00
the situation that that we're in

00:43:58 --> 00:44:02
ow.

00:43:59 --> 00:44:05
>> Is ARK 3 the end or will there be an ARK

00:44:01 --> 00:44:05
four, five, six? Can you keep making it

00:44:04 --> 00:44:07
harder?

00:44:04 --> 00:44:09
>> Yeah. Yeah. I think there there will

00:44:06 --> 00:44:12
absolutely be ARK 4 and and AR five. I

00:44:08 --> 00:44:14
mean, we're currently planning ARK 5. Um

00:44:11 --> 00:44:16
the the point of the AKGI benchmark

00:44:13 --> 00:44:18
series is not to say that well, you

00:44:15 --> 00:44:21
know, here's this test. if you pass it,

00:44:17 --> 00:44:23
this is a GI. Um, instead what we're

00:44:20 --> 00:44:26
trying to do is we're target we're

00:44:22 --> 00:44:29
targeting uh the residual gap of fair

00:44:25 --> 00:44:32
capabilities like frontier is advancing

00:44:28 --> 00:44:34
and we're saying well uh if you compare

00:44:31 --> 00:44:36
it to to to human abilities there

00:44:33 --> 00:44:38
's all these tasks all these things

00:44:35 --> 00:44:40
it's now doing well so we're going to

00:44:37 --> 00:44:43
create a benchmark to target that. uh

00:44:40 --> 00:44:44
and so it's a moving target, right? It's

00:44:42 --> 00:44:46
it's not fixed point. It's a moving

00:44:43 --> 00:44:49
target. So there will be ARK 4 which

00:44:45 --> 00:44:51
will be uh in the spirit of ARK 3 but

00:44:48 --> 00:44:54
more focused on continual learning and

00:44:50 --> 00:44:55
curriculum learning at longer time

00:44:53 --> 00:44:57
scales. So you're you're going to have

00:44:54 --> 00:45:00
fewer games uh but they're going to have

00:44:56 --> 00:45:02
way more levels and the levels are going

00:44:59 --> 00:45:04
to be compounding meaning that for for

00:45:01 --> 00:45:06
each level you need to reuse stuff that

00:45:03 --> 00:45:07
you've learned before. Then there's

00:45:05 --> 00:45:09
going to be Ark 5. And I'm actually

00:45:06 --> 00:45:11
really really excited about Ark 5. It's

00:45:08 --> 00:45:14
very very new and different and it's all

00:45:10 --> 00:45:16
about invention and I mean you will see

00:45:13 --> 00:45:18
what that means. Eventually

00:45:15 --> 00:45:21
I expect we will we will run out of

00:45:17 --> 00:45:24
things to test like as uh as we get

00:45:20 --> 00:45:26
closer to AGI um eventually there will

00:45:23 --> 00:45:29
be no measurable difference uh between

00:45:25 --> 00:45:31
human capabilities and part human

00:45:28 --> 00:45:33
learning efficiency and and frontier AI

00:45:30 --> 00:45:35
and when that happens when when it

00:45:32 --> 00:45:37
becomes effectively impossible to

00:45:34 --> 00:45:39
measure the gap this is the GI moment.

00:45:36 --> 00:45:42
Well, then the machines will take over

00:45:38 --> 00:45:43
and then they will create ARC ASI one.

00:45:41 --> 00:45:44
>> Yes. ARS

00:45:42 --> 00:45:45
>> and then it'll continue from there.

00:45:43 --> 00:45:48
Yeah.

00:45:44 --> 00:45:51
>> Yeah. If you had to put a guess, I mean

00:45:47 --> 00:45:54
years, decades, months.

00:45:50 --> 00:45:57
uh my timeline to AGR, you know, if you

00:45:53 --> 00:46:00
just try to to extrapolate from

00:45:56 --> 00:46:02
the the current rate of progress and the

00:45:59 --> 00:46:05
amount of investment that's going into

00:46:01 --> 00:46:08
not just the LLM stack, but also like uh

00:46:04 --> 00:46:10
side ideas, side bets that might work

00:46:07 --> 00:46:13
out like you know, NDI for instance, I

00:46:09 --> 00:46:14
think we're probably looking at AGI

00:46:12 --> 00:46:18
2030,

00:46:13 --> 00:46:20
early 2030s uh most likely. So around

00:46:17 --> 00:46:24
the time uh that you are going to be

00:46:19 --> 00:46:26
releasing like maybe AR 6 or AR 7 uh

00:46:23 --> 00:46:28
that's probably going to be a GI.

00:46:25 --> 00:46:32
>> You guys are doing a different approach

00:46:27 --> 00:46:34
to LLM. Um do you think there's room for

00:46:31 --> 00:46:35
more startups to explore other new

00:46:33 --> 00:46:37
approaches and are there any other ones

00:46:34 --> 00:46:38
that you think are promising but don't

00:46:36 --> 00:46:40
have time to explore yourself?

00:46:38 --> 00:46:42
>> Yeah, absolutely. I mean there are many

00:46:39 --> 00:46:44
different approaches that you could try.

00:46:42 --> 00:46:46
I've said like compute is is a great

00:46:43 --> 00:46:48
equalizer. I think if you look at the

00:46:46 --> 00:46:52
amount of comput and resources that

00:46:47 --> 00:46:54
we've thrown at uh deep learning and and

00:46:51 --> 00:46:56
gradient descent and and scaling that up

00:46:53 --> 00:46:59
if you had thrown the same amount of

00:46:55 --> 00:47:01
investment into almost anything else you

00:46:58 --> 00:47:03
would also have seen extremely exciting

00:47:00 --> 00:47:05
results like genetic algorithms for

00:47:02 --> 00:47:07
instance uh if you try to scale up

00:47:04 --> 00:47:09
genetic algorithms I mean I'm sure you

00:47:06 --> 00:47:11
can do incredible things with that um

00:47:08 --> 00:47:14
you could in fact probably do new

00:47:10 --> 00:47:16
science uh because uh that's based on

00:47:13 --> 00:47:18
search and search is the is is the best

00:47:15 --> 00:47:21
fit for uh automating the scientific

00:47:17 --> 00:47:24
method. uh I think so right now there's

00:47:20 --> 00:47:25
also like approaches that uh build on

00:47:23 --> 00:47:27
top of the current stack with their

00:47:24 --> 00:47:30
slightly alternative like uh state space

00:47:26 --> 00:47:32
models for instance uh there's the the

00:47:29 --> 00:47:35
XLSM architecture like you you can

00:47:31 --> 00:47:37
basically you know current frontier is

00:47:34 --> 00:47:39
it's it's a stack of things and you you

00:47:36 --> 00:47:41
can take any layer in the stack and try

00:47:38 --> 00:47:43
to propose an alternative like if you

00:47:40 --> 00:47:45
propose an alternative architecture uh

00:47:42 --> 00:47:47
you can be doing for instance like yeah

00:47:44 --> 00:47:49
like more like uh recurrent models

00:47:46 --> 00:47:52
instead of transformers uh for for the

00:47:48 --> 00:47:53
architecture. Uh or you can do even

00:47:51 --> 00:47:56
lower level. You're going to be like,

00:47:52 --> 00:47:57
okay, we're still going to be training

00:47:55 --> 00:47:59
uh parametric curves, but you're going

00:47:56 --> 00:48:00
to get rid of cranes descent, right?

00:47:58 --> 00:48:02
We're going to use like search. Maybe

00:48:00 --> 00:48:04
you're going to do new evolution. Uh

00:48:01 --> 00:48:07
that's that's lower level. And the

00:48:03 --> 00:48:09
lowest level is uh the the level where

00:48:06 --> 00:48:12
we're operating where we're saying

00:48:08 --> 00:48:14
well actually uh forget about curves uh

00:48:11 --> 00:48:15
forget about parametric, forget about

00:48:13 --> 00:48:18
crown descent. We're just going to do

00:48:14 --> 00:48:20
something completely different. Um and I

00:48:17 --> 00:48:23
think if you want to build optimal AI,

00:48:20 --> 00:48:25
you're kind of forced to go back to the

00:48:22 --> 00:48:29
foundation of the stack. It cannot be

00:48:24 --> 00:48:29
like uh uh one one layer added on top of

00:48:28 --> 00:48:31
the pile.

00:48:28 --> 00:48:33
>> So do you think for aspiring researchers

00:48:30 --> 00:48:34
to want to do a new neolab with a

00:48:32 --> 00:48:37
different approach, they should be

00:48:33 --> 00:48:38
reading research papers from the 70s or

00:48:36 --> 00:48:41
80s and

00:48:38 --> 00:48:43
>> go deeply in those with approaches that

00:48:40 --> 00:48:46
were not as invested nowadays. That is

00:48:42 --> 00:48:49
actually a great idea because uh earlier

00:48:45 --> 00:48:51
in the in the history of the EI research

00:48:48 --> 00:48:53
timeline, people were exploring more

00:48:50 --> 00:48:55
things and very different things. You've

00:48:52 --> 00:48:58
had this sort of like collapse of

00:48:54 --> 00:49:00
everything into one approach. It's

00:48:57 --> 00:49:03
actually kind of a bad idea. Uh like

00:48:59 --> 00:49:04
consider that not too long ago, like

00:49:02 --> 00:49:06
about about 20 years ago,

00:49:03 --> 00:49:09
>> we had the collapse into SVMs, too.

00:49:05 --> 00:49:10
>> Yeah. I mean it wasn't I wouldn't

00:49:08 --> 00:49:12
describe it as a collapse because there

00:49:09 --> 00:49:14
weren't that many people doing SVMs and

00:49:11 --> 00:49:18
AI was a much much uh smaller field back

00:49:14 --> 00:49:21
then but there was this uh uh widespread

00:49:17 --> 00:49:23
understanding that neural networks were

00:49:20 --> 00:49:25
a failed approach that neuronet

00:49:22 --> 00:49:27
works didn't work and it it was waste

00:49:24 --> 00:49:30
of time to to keep trying right

00:49:26 --> 00:49:33
>> yeah no even even in the in the in the

00:49:29 --> 00:49:36
late 2000s this was a set of things

00:49:32 --> 00:49:38
basically like when I got into into AI

00:49:35 --> 00:49:39
people are telling me like hey neuronet

00:49:37 --> 00:49:42
works don't try that I was like yeah

00:49:38 --> 00:49:44
but it it looks a lot like what the

00:49:41 --> 00:49:45
brain is doing like I'm I'm interested

00:49:43 --> 00:49:47
in that if everybody is working on

00:49:44 --> 00:49:49
something you are discarding ideas that

00:49:46 --> 00:49:52
will uh actually turn out to be very

00:49:48 --> 00:49:54
productive ideas right and yeah like

00:49:51 --> 00:49:55
back in the 70s back in the 80s people

00:49:53 --> 00:49:57
are trying more things and I think

00:49:54 --> 00:50:01
genetic algorithms actually a very good

00:49:56 --> 00:50:03
example of that uh I think this is an

00:50:00 --> 00:50:05
approach that has a tremendous amount of

00:50:02 --> 00:50:07
potential but there's there's not too

00:50:04 --> 00:50:08
many people are looking into scaling it

00:50:06 --> 00:50:10
up uh deeply.

00:50:07 --> 00:50:12
>> Are there any characteristics that you

00:50:09 --> 00:50:14
would be looking for? I mean is it as

00:50:11 --> 00:50:18
imple as like if there's a scaling law

00:50:13 --> 00:50:21
that could happen then even if it's a

00:50:17 --> 00:50:23
different or is it is that too like you

00:50:20 --> 00:50:26
know thinking by analogy

00:50:22 --> 00:50:27
>> I think you are looking for approaches

00:50:25 --> 00:50:29
that scale.

00:50:26 --> 00:50:30
>> Yeah. Uh I think it's it's a

00:50:28 --> 00:50:32
non-starter. If you're working on

00:50:29 --> 00:50:34
something but the only way to increase

00:50:31 --> 00:50:37
the capabilities of the system is to

00:50:33 --> 00:50:39
have uh human engineers and researchers

00:50:36 --> 00:50:42
pend time on it, it will not work

00:50:38 --> 00:50:44
because even if the idea is very clever

00:50:41 --> 00:50:45
and very elegant and works really well,

00:50:43 --> 00:50:47
capabilities are going to be bounded.

00:50:44 --> 00:50:50
They're going to be bounded by human

00:50:46 --> 00:50:52
investment. Right? You want to be in a

00:50:49 --> 00:50:54
setup where the system can improve its

00:50:51 --> 00:50:55
capabilities with no human in the loop,

00:50:53 --> 00:50:57
with no human.

00:50:54 --> 00:51:00
like don't just do it the way we did it

00:50:56 --> 00:51:02
like 10 years ago. Do it with the idea

00:50:59 --> 00:51:03
that recursive self-improvement is baked

00:51:01 --> 00:51:05
in at the beginning.

00:51:02 --> 00:51:06
>> Yeah. Not necessarily recursive

00:51:04 --> 00:51:08
self-improvement because deep learning

00:51:05 --> 00:51:11
for instance not is not recursively

00:51:07 --> 00:51:14
self-improving but with the idea of

00:51:10 --> 00:51:15
scaling up with no human bottlenecks.

00:51:13 --> 00:51:17
You want to remove the human from from

00:51:14 --> 00:51:19
the improvement loop. The great strength

00:51:16 --> 00:51:23
of deep learning is that the models got

00:51:18 --> 00:51:24
better and better simply by adding uh uh

00:51:22 --> 00:51:26
training training compute and training

00:51:23 --> 00:51:29
data. I mean it's it's a little bit of

00:51:25 --> 00:51:31
caricature because of course just adding

00:51:28 --> 00:51:32
these factors requires a lot of human

00:51:30 --> 00:51:35
involvement but basically that's the

00:51:31 --> 00:51:37
idea that you have this decoupling from

00:51:34 --> 00:51:39
uh the improvement curve and the amount

00:51:36 --> 00:51:40
of human effort that's needed to be

00:51:38 --> 00:51:42
injected into the system.

00:51:39 --> 00:51:44
>> I guess or human effort that's already

00:51:41 --> 00:51:45
happened because the LMS do actually

00:51:43 --> 00:51:46
require an enormous amount of human

00:51:44 --> 00:51:47
effort. It's just it was the human

00:51:45 --> 00:51:48
effort to build the internet and we'd

00:51:46 --> 00:51:52
already built it.

00:51:47 --> 00:51:54
>> Yeah. Actually less and less now uh that

00:51:51 --> 00:51:56
we are doing uh training in interactive

00:51:53 --> 00:51:57
rifiable environments

00:51:55 --> 00:51:59
>> because then

00:51:56 --> 00:52:01
>> you only need a small amount of human

00:51:58 --> 00:52:03
effort to create the environment and

00:52:00 --> 00:52:04
from that small amount of effort you're

00:52:02 --> 00:52:06
creating exponentially more

00:52:03 --> 00:52:09
training data. But at first I think to

00:52:05 --> 00:52:13
sort of like prime the machine you need

00:52:08 --> 00:52:16
this tremendous amount uh of uh of uh uh

00:52:12 --> 00:52:18
uman generated abstractions encoded in

00:52:15 --> 00:52:21
text data and if you if you don't start

00:52:17 --> 00:52:23
from that you you cannot get the system

00:52:20 --> 00:52:25
into this loop. Do you have any advice

00:52:22 --> 00:52:28
for me uh starting a open source

00:52:24 --> 00:52:33
project? Things to do, things not to do

00:52:27 --> 00:52:35
in uh in the AI space because I am uh

00:52:32 --> 00:52:38
not sure how I signed up for this in the

00:52:34 --> 00:52:40
last 14 days, but I think I have I don't

00:52:37 --> 00:52:43
know on the order of like 10 to 30,000

00:52:40 --> 00:52:44
people using GStack every day.

00:52:42 --> 00:52:49
>> Yeah, it's wild.

00:52:43 --> 00:52:50
>> Yeah. And I don't know like I have a job

00:52:48 --> 00:52:53
I guess like you know what was it like

00:52:49 --> 00:52:54
to start Keras and how did you keep

00:52:52 --> 00:52:56
maintaining it? How what's a good

00:52:53 --> 00:52:58
maintainer like what did you learn from

00:52:55 --> 00:52:58
that? I don't know this might be a whole

00:52:57 --> 00:53:01
hour.

00:52:57 --> 00:53:02
>> Yeah I mean lots lots of learnings from

00:53:00 --> 00:53:04
>> too many things

00:53:01 --> 00:53:06
>> from growing growing kas. Uh so right

00:53:03 --> 00:53:08
now I'm less involved with it. Uh

00:53:05 --> 00:53:09
there's a big team at Google that's

00:53:07 --> 00:53:12
working on it and they're doing an

00:53:08 --> 00:53:14
amazing job. So it is possible to not

00:53:11 --> 00:53:16
you know to put people together to like

00:53:13 --> 00:53:18
>> it is possible to start something. It is

00:53:15 --> 00:53:20
possible to start something and and and

00:53:17 --> 00:53:22
then get more people involved and at

00:53:19 --> 00:53:24
some point it becomes its own thing.

00:53:21 --> 00:53:26
It's just you know it used to be your

00:53:23 --> 00:53:28
baby but now it's all it's all grown up.

00:53:25 --> 00:53:30
It's all adult and and and going on with

00:53:27 --> 00:53:33
its own life. So if you ask me the the

00:53:29 --> 00:53:35
factors that really made car successful

00:53:32 --> 00:53:39
um I mean first of all is that there was

00:53:34 --> 00:53:41
this big focus on uh making the the API

00:53:38 --> 00:53:43
simple and intuitive. There was this big

00:53:40 --> 00:53:46
focus on usability and this was

00:53:42 --> 00:53:48
inspired by scikitlearn like scikitlearn

00:53:45 --> 00:53:51
was sort of like the og uh machine

00:53:47 --> 00:53:53
learning library for python and what

00:53:50 --> 00:53:55
made it successful was that it was so

00:53:52 --> 00:53:58
easy to get started with it. So at first

00:53:54 --> 00:54:00
I was like okay uh I'm going to package

00:53:57 --> 00:54:02
uh all this functionality I've created

00:53:59 --> 00:54:04
under a really really simple API going

00:54:01 --> 00:54:06
to be like the second API that was like

00:54:03 --> 00:54:09
the big idea. The focus on usability is

00:54:05 --> 00:54:11
not just making sure the API is simple.

00:54:08 --> 00:54:13
It's also making sure the entire on

00:54:10 --> 00:54:15
boarding experience is nice and easy

00:54:12 --> 00:54:17
like the docs should be very

00:54:14 --> 00:54:20
informative. You should, you know, the

00:54:16 --> 00:54:22
doc should be not just telling you about

00:54:19 --> 00:54:25
how to use this thing, but they should

00:54:21 --> 00:54:26
actually be teaching you about the

00:54:24 --> 00:54:28
domain in the first place because the

00:54:25 --> 00:54:30
folks who land on your website,

00:54:27 --> 00:54:31
they're not going to be already deep

00:54:29 --> 00:54:33
learning experts. They're going to be

00:54:30 --> 00:54:35
people looking to maybe start using deep

00:54:32 --> 00:54:37
learning. And so you you have to teach

00:54:34 --> 00:54:40
them not just how to use the tool, but

00:54:36 --> 00:54:42
what the tool is good for um and and the

00:54:39 --> 00:54:44
ntire field around it. And then uh you

00:54:41 --> 00:54:47
know you have to put a lot of investment

00:54:43 --> 00:54:49
into community building. Um one thing we

00:54:46 --> 00:54:51
uh we did a bit at Google in fact you

00:54:48 --> 00:54:53
know Google made it kind kind of

00:54:50 --> 00:54:56
difficult and and I was sad about that

00:54:52 --> 00:54:58
is uh hire your power users

00:54:55 --> 00:55:00
>> like hire your fans. This this is a

00:54:57 --> 00:55:04
really really good idea like find find

00:54:59 --> 00:55:06
the the most enthusiastic users from

00:55:03 --> 00:55:07
your community and and and just hire

00:55:05 --> 00:55:07
them on your team.

00:55:06 --> 00:55:11
>> Amazing.

00:55:06 --> 00:55:12
>> Yeah. and uh these are the always the

00:55:10 --> 00:55:14
best people, right?

00:55:11 --> 00:55:16
>> All right, time to start gstack.org. Uh

00:55:13 --> 00:55:18
put in a bunch of my own money and then

00:55:15 --> 00:55:20
hire a bunch of people to work on it.

00:55:17 --> 00:55:22
That sounds good. I think you've been a

00:55:19 --> 00:55:24
leader in pioneer and we're so lucky to

00:55:21 --> 00:55:26
have you sit with us. There are people

00:55:23 --> 00:55:28
watching who are at the beginning of

00:55:25 --> 00:55:30
their, you know, adulthood even like

00:55:27 --> 00:55:33
their certainly their professional

00:55:29 --> 00:55:34
careers uh or actually like people just

00:55:32 --> 00:55:37
around the world. They're like trying to

00:55:33 --> 00:55:40
understand like what does this mean as

00:55:36 --> 00:55:43
intelligence becomes broadly applicable

00:55:39 --> 00:55:44
like what would you tell you know if you

00:55:42 --> 00:55:45
were 18 right now what would you tell

00:55:43 --> 00:55:47
them

00:55:44 --> 00:55:50
>> yeah I mean there's a lot of people

00:55:46 --> 00:55:53
today who are very uh pessimistic very

00:55:50 --> 00:55:55
negative takes about the the rise in the

00:55:52 --> 00:55:58
capabilities they say oh you know uh I'm

00:55:54 --> 00:56:00
going to be out of a job soon uh there's

00:55:57 --> 00:56:03
going to be mass unemployment uh AI is

00:55:59 --> 00:56:05
just going to take over completely and

00:56:02 --> 00:56:07
my my tech is actually you know the more

00:56:04 --> 00:56:09
expertise you have but

00:56:06 --> 00:56:12
hings like programming for instance the

00:56:08 --> 00:56:15
better you're able to use and leverage

00:56:11 --> 00:56:18
these tools for your own benefit and

00:56:14 --> 00:56:20
with the right kind of expertise uh all

00:56:17 --> 00:56:22
this AI progress is actually empowerment

00:56:19 --> 00:56:23
like it's something that you can

00:56:21 --> 00:56:25
leverage for yourself I mean that's

00:56:22 --> 00:56:26
exactly what you did with your

00:56:24 --> 00:56:27
project right

00:56:25 --> 00:56:30
>> and yeah more people should have this

00:56:26 --> 00:56:33
mindset of trying to learn as much as

00:56:29 --> 00:56:36
possible not just about AI uh but about

00:56:32 --> 00:56:38
he the domain that they want uh uh to

00:56:35 --> 00:56:42
apply AI to, right? So that they should

00:56:38 --> 00:56:44
seek to turn this uh uh this

00:56:41 --> 00:56:46
new development into an opportunity

00:56:43 --> 00:56:48
into into a tool they can use for

00:56:45 --> 00:56:49
themselves to improve their own lives. I

00:56:47 --> 00:56:51
think that's that's the right mindset

00:56:48 --> 00:56:53
because you know you're not going to

00:56:50 --> 00:56:55
stop uh AI progress. I think I think

00:56:52 --> 00:56:57
it's too late for that. And so the next

00:56:54 --> 00:56:59
question is okay like AI progress is

00:56:56 --> 00:57:01
here. Uh it's actually going to keep

00:56:58 --> 00:57:02
accelerating. How do you make use of it?

00:57:00 --> 00:57:04
How do you leverage? How do you ride a

00:57:01 --> 00:57:06
wave? That's the question to ask.

00:57:03 --> 00:57:08
>> I wish we could uh keep going for a

00:57:05 --> 00:57:09
couple hours cuz I'm sure we could.

00:57:07 --> 00:57:10
Francois, thank you so much for spending

00:57:08 --> 00:57:14
time with us.

00:57:09 --> 00:57:14
>> Thanks so much for having me.

<!-- YOUTUBE_TRANSCRIPT_END -->
