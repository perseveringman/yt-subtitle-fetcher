---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "g-WeCOUYBrk"
title: "Marc Andreessen & Amjad Masad on “Good Enough” AI, AGI, and the End of Coding"
video_url: "https://www.youtube.com/watch?v=g-WeCOUYBrk"
thumbnail_url: "https://i.ytimg.com/vi/g-WeCOUYBrk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=g-WeCOUYBrk"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-10-23T15:02:28.000Z"
upload_date: "2025-10-23"
duration_seconds: 4316
duration_human: "1:11:56"
view_count: 44472
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:32:12.435Z"
---

# Marc Andreessen & Amjad Masad on “Good Enough” AI, AGI, and the End of Coding

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=g-WeCOUYBrk
- video_id: g-WeCOUYBrk
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-10-23T15:02:28.000Z
- upload_date: 2025-10-23
- duration: 1:11:56
- view_count: 44472
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Amjad Masad, founder and CEO of Replit, joins a16z’s Marc Andreessen and Erik Torenberg to discuss the new world of AI agents, the future of programming, and how software itself is beginning to build software.

They trace the history of computing to the rise of AI agents that can now plan, reason, and code for hours without breaking, and explore how Replit is making it possible for anyone to create complex applications in natural language. Amjad explains how RL unlocked reasoning for modern models, why verification loops changed everything, whether LLMs are hitting diminishing returns, and if “good enough” AI might actually block progress toward true general intelligence.

00:00 Intro
00:37 Programming in Plain English
03:00 The Vision Behind Replit
05:15 From Machine Code to English Code
07:00 Building Apps with AI Agents
09:30 When the Agent Becomes the Programmer
11:00 Long-Horizon Reasoning and Coherence
13:45 Reinforcement Learning and Problem Solving
17:30 The Verification Loop and Multi-Agent Systems
21:15 Watching AI Work Like a Human Programmer
23:45 From Stochastic Parrots to Real Reasoning
26:00 Why Coding Is Advancing Faster Than Other Fields
30:15 Verifiable Domains: Math, Code, and Physics
33:45 The AGI Debate: Are We on Track?
37:45 Transfer Learning and the Limits of Human Intelligence
41:15 Functional AGI and Automating Labor
45:20 GPT-5, Diminishing Returns, and Lost “Humanity”
53:10 Creativity, Reasoning, and Finding Truth in AI
57:30 The Origins of Replit and Early Coding Days
01:03:00 Hacking His University and Getting Caught
01:08:00 The Redemption and Lessons Learned for the AI Age

Stay Updated: 
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Resources:
Follow Amjad on X: https://x.com/amasad
Follow Marc on X: https://x.com/pmarca
Find a16z on X: https://x.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Listen to the a16z Podcast on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX
Listen to the a16z Podcast on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
We're dealing with magic here that we I

00:00:01 --> 00:00:05
think probably all would have thought

00:00:02 --> 00:00:06
was impossible 5 years ago or certainly

00:00:04 --> 00:00:07
10 years ago. This is the most amazing

00:00:05 --> 00:00:09
technology ever and it's moving really

00:00:06 --> 00:00:10
fast and yet we're still like really

00:00:08 --> 00:00:12
disappointed. Like it's not moving fast

00:00:09 --> 00:00:13
enough and like it's like maybe right on

00:00:11 --> 00:00:14
the verge of stalling out. We should

00:00:12 --> 00:00:16
both be like hyper excited but also on

00:00:14 --> 00:00:18
the verge of like slitting our wrists

00:00:15 --> 00:00:18
cuz like you know the gravy train is

00:00:17 --> 00:00:19
coming to an end,

00:00:17 --> 00:00:21
>> right?

00:00:18 --> 00:00:23
>> It is faster but it's not at computer

00:00:20 --> 00:00:24
speed, right? What we expect computer

00:00:22 --> 00:00:25
speed to be. It's sort of like watching

00:00:23 --> 00:00:29
a person work.

00:00:24 --> 00:00:31
>> It's like watching John Carmarmac

00:00:28 --> 00:00:33
>> the world. Okay. the world's the world's

00:00:30 --> 00:00:37
best programmer on a stimulus.

00:00:32 --> 00:00:37
>> On a stimulant. Yeah, that's right.

00:00:37 --> 00:00:42
>> So, let's start with um let's assume

00:00:39 --> 00:00:44
that I'm a sort of a novice programmer.

00:00:41 --> 00:00:46
So, maybe I'm a student um uh or maybe

00:00:44 --> 00:00:47
I'm just somebody, you know, I took a

00:00:45 --> 00:00:48
few coding classes and I've hacked

00:00:46 --> 00:00:50
around a little bit or like I don't

00:00:47 --> 00:00:52
know, I do Excel macros or something

00:00:49 --> 00:00:54
like that, but I'm like not less. I'm

00:00:51 --> 00:00:56
not like a master craftsman at coding.

00:00:53 --> 00:00:58
Um and you know people somebody tells me

00:00:55 --> 00:01:01
about replet and and specifically AI um

00:00:58 --> 00:01:02
AI and Replet like what's my what's my

00:01:00 --> 00:01:04
experience uh when when I launch in with

00:01:01 --> 00:01:06
what replet is today with AI.

00:01:03 --> 00:01:08
>> Yeah I I would um I I think the

00:01:06 --> 00:01:10
xperience of someone with no coding

00:01:07 --> 00:01:11
experience or some coding experience is

00:01:09 --> 00:01:12
largely the same when you go into

00:01:10 --> 00:01:15
replet. Okay.

00:01:11 --> 00:01:17
>> The first thing we try to do is get all

00:01:14 --> 00:01:18
the nonsense away from like setting up

00:01:16 --> 00:01:20
development environment and all of that

00:01:17 --> 00:01:22
stuff and just have you focus on your

00:01:19 --> 00:01:24
idea. So what do you want to build? Do

00:01:21 --> 00:01:25
you want to build a product? Do you want

00:01:23 --> 00:01:27
o solve a problem? Do you want to do a

00:01:24 --> 00:01:29
data vis visualization? So the prompt

00:01:26 --> 00:01:31
box is really open for you. You can put

00:01:28 --> 00:01:33
in anything there. So let's say you want

00:01:30 --> 00:01:35
o, you know, build a startup. You have

00:01:32 --> 00:01:38
an idea for a startup. I would I would

00:01:34 --> 00:01:40
start with like a paragraph long kind of

00:01:37 --> 00:01:43
description of what I want to build. Uh

00:01:40 --> 00:01:44
the agents will read that. It will

00:01:42 --> 00:01:46
>> you just type just type

00:01:43 --> 00:01:48
>> standard English. Standard English. You

00:01:45 --> 00:01:50
just type it in. I want to build a I

00:01:47 --> 00:01:52
want to sell I want to sell crepes. I

00:01:49 --> 00:01:54
want to sell crepes online. So you just

00:01:51 --> 00:01:56
like type in I want to talk.

00:01:53 --> 00:01:57
>> You can it literally could be that four

00:01:55 --> 00:02:00
words or five words. Okay.

00:01:56 --> 00:02:01
>> Or it could be if you're if you have a

00:01:59 --> 00:02:03
programming language you prefer or stack

00:02:00 --> 00:02:05
you prefer, you could do that. But we

00:02:02 --> 00:02:06
actually prefer not for you not to do

00:02:04 --> 00:02:08
that because we're going to pick the

00:02:05 --> 00:02:11
best thing for we're going to classify

00:02:08 --> 00:02:13
the best stack for that request. Right?

00:02:10 --> 00:02:15
>> It's a if it's a data app, we'll pick

00:02:12 --> 00:02:17
Python and stream whatever. If it's like

00:02:14 --> 00:02:19
a web app, we'll pick JavaScript and

00:02:16 --> 00:02:19
Postgress and things like that. So you

00:02:18 --> 00:02:21
just type that

00:02:18 --> 00:02:22
>> or you can decide you can decide you can

00:02:20 --> 00:02:24
say and I want to do it I know Python or

00:02:21 --> 00:02:25
I'm learning Python in school and I want

00:02:23 --> 00:02:26
o do it in Python.

00:02:24 --> 00:02:28
>> That's right. The cool thing about

00:02:25 --> 00:02:30
Replet is you know we we've been around

00:02:27 --> 00:02:32
for almost 10 years now and we built all

00:02:29 --> 00:02:33
this infrastructure. Replet runs any

00:02:31 --> 00:02:35
programming language. So if you're

00:02:32 --> 00:02:36
comfortable with Python you can go in

00:02:34 --> 00:02:36
and do that for sure.

00:02:35 --> 00:02:38
>> Okay.

00:02:35 --> 00:02:40
>> And then just again I know this is

00:02:37 --> 00:02:41
obvious people have used it but like I'm

00:02:39 --> 00:02:42
dealing in English.

00:02:40 --> 00:02:43
>> Yes.

00:02:41 --> 00:02:46
>> So okay go ahead.

00:02:42 --> 00:02:47
>> Yes. You're fully in English. I mean,

00:02:45 --> 00:02:50
you know, just a, you know, a little bit

00:02:46 --> 00:02:53
of of sort of background here, like when

00:02:49 --> 00:02:55
um when I I came here and pitched to you

00:02:52 --> 00:02:56
like 10 years ago or like whatever 7

00:02:54 --> 00:02:56
years ago,

00:02:55 --> 00:02:58
>> right?

00:02:55 --> 00:03:01
>> Uh what we were saying is we were

00:02:58 --> 00:03:02
xactly describing this future is that

00:03:00 --> 00:03:03
>> uh everyone would want to build

00:03:01 --> 00:03:05
software, right?

00:03:02 --> 00:03:08
>> And the thing that's kind of getting in

00:03:04 --> 00:03:10
people's ways is all the uh what Fred

00:03:08 --> 00:03:12
Brooks called the accidental complexity

00:03:09 --> 00:03:14
of programming, right? They're like

00:03:11 --> 00:03:17
ssential complexity which is like how

00:03:13 --> 00:03:19
do I bring my startup to market and how

00:03:16 --> 00:03:21
do I build a business and all of that

00:03:18 --> 00:03:23
accidental complexity is what package

00:03:20 --> 00:03:25
manager do I use all of that stuff we've

00:03:22 --> 00:03:29
been abstracting away that for so many

00:03:24 --> 00:03:31
ears so you can just um and the last

00:03:28 --> 00:03:31
hing we had to abstract away is code

00:03:30 --> 00:03:33
>> right

00:03:30 --> 00:03:36
>> I had this realization last year which

00:03:32 --> 00:03:37
is I think we you know built an amazing

00:03:35 --> 00:03:38
platform but the business is not

00:03:36 --> 00:03:40
performing and the reason the business

00:03:37 --> 00:03:42
is not performing is that code is the

00:03:39 --> 00:03:45
bottleneck like yes all the other stuff

00:03:41 --> 00:03:47
is important to solve but syntax is

00:03:44 --> 00:03:49
till an issue like you know syntax is

00:03:46 --> 00:03:51
just an unnatural thing for people so

00:03:48 --> 00:03:52
ultimately English is the programming

00:03:50 --> 00:03:52
language

00:03:51 --> 00:03:56
>> right

00:03:51 --> 00:03:57
>> I I just does it work with other other

00:03:55 --> 00:03:57
world languages other than English at

00:03:56 --> 00:03:59
his point

00:03:56 --> 00:04:01
>> yes you can write in Japanese and we

00:03:58 --> 00:04:02
have a lot of users especially Japanese

00:04:00 --> 00:04:04
that tends to be very

00:04:01 --> 00:04:06
>> so does it support these days like for a

00:04:03 --> 00:04:07
does a support every language or is it

00:04:05 --> 00:04:08
still do you still have to do like

00:04:06 --> 00:04:10
custom work to craft a new new language

00:04:07 --> 00:04:12
>> no most most you know uh mainstream

00:04:09 --> 00:04:14
dream language that has like 100 million

00:04:11 --> 00:04:14
plus people that speak it. AI is pretty

00:04:13 --> 00:04:15
good at it.

00:04:13 --> 00:04:16
>> Okay. Yeah.

00:04:14 --> 00:04:19
>> Yeah. Wow.

00:04:15 --> 00:04:20
>> So, uh I I I did a bit of a bit of

00:04:18 --> 00:04:22
historical research recently for for

00:04:20 --> 00:04:23
some reason. I just want to just

00:04:21 --> 00:04:25
understand the moment we're in and

00:04:22 --> 00:04:27
because it's such a special moment. It's

00:04:24 --> 00:04:31
I think it's important to contextualize

00:04:26 --> 00:04:34
it and I I I read this quote from

00:04:30 --> 00:04:37
Gracehopper. So, Gracehopper invented

00:04:33 --> 00:04:39
the compiler as you know. uh at the time

00:04:36 --> 00:04:41
people were uh you know programming in

00:04:38 --> 00:04:43
machine code and that's what programmers

00:04:40 --> 00:04:44
do that's what the specialists do

00:04:42 --> 00:04:46
>> yes

00:04:43 --> 00:04:48
>> and she said you know specialists will

00:04:45 --> 00:04:49
always be a specialist they have to

00:04:47 --> 00:04:51
learn the underlying machinery of

00:04:48 --> 00:04:53
computers but I want to get to a world

00:04:50 --> 00:04:54
where people are programming English

00:04:52 --> 00:04:57
that's what she said that's before

00:04:53 --> 00:04:58
karpathy right that's like you know 75

00:04:56 --> 00:05:01
years ago

00:04:57 --> 00:05:03
>> uh and and and that's why I invented the

00:05:00 --> 00:05:05
compiler and in her mind like C

00:05:02 --> 00:05:05
programming is English

00:05:04 --> 00:05:07
>> right

00:05:04 --> 00:05:09
>> uh But that, you know, that really

00:05:06 --> 00:05:11
didn't uh that was just the start of it.

00:05:08 --> 00:05:14
You had C and then you go higher level

00:05:10 --> 00:05:16
Python and JavaScript. And I think it

00:05:13 --> 00:05:16
we're at a moment where it's the next

00:05:15 --> 00:05:17
step,

00:05:15 --> 00:05:19
>> right?

00:05:16 --> 00:05:20
>> Instead of typing syntax, you're

00:05:18 --> 00:05:22
actually typing thoughts, you know,

00:05:19 --> 00:05:23
which is what we ultimately want.

00:05:21 --> 00:05:24
>> And the machine writes the code

00:05:22 --> 00:05:24
>> and the machine writes the code,

00:05:23 --> 00:05:26
>> right? Right.

00:05:23 --> 00:05:27
>> Um yeah, I remember it. you're you're

00:05:25 --> 00:05:29
probably not old enough uh to remember

00:05:26 --> 00:05:30
but I I remember when when I was a kid

00:05:28 --> 00:05:32
it was um you know there there were were

00:05:30 --> 00:05:34
higher level languages you know by the

00:05:31 --> 00:05:34
70s like like basic and so forth and

00:05:33 --> 00:05:37
forran

00:05:33 --> 00:05:38
>> and C and C but um uh there were still

00:05:36 --> 00:05:40
you know you still would run into people

00:05:37 --> 00:05:41
who were doing assembly programming

00:05:39 --> 00:05:43
assembly language which by the way you

00:05:40 --> 00:05:44
still do you know like game companies or

00:05:42 --> 00:05:46
whatever still do assembly to to to get

00:05:43 --> 00:05:47
>> and they were hating on the kids that

00:05:45 --> 00:05:48
were doing basic. Oh well so so the

00:05:46 --> 00:05:50
assembly people were hating the kids

00:05:47 --> 00:05:51
doing basic but there were also older

00:05:49 --> 00:05:52
coders who hated on the assembly

00:05:50 --> 00:05:54
programmers for doing assembly and not

00:05:51 --> 00:05:56
and not no no no not doing

00:05:54 --> 00:05:57
direct machine code right not doing

00:05:55 --> 00:05:59
direct zero in one machine code because

00:05:56 --> 00:06:00
as because assembly assembly so

00:05:58 --> 00:06:02
people don't know assembly language is

00:06:00 --> 00:06:04
ort of this very low-level programming

00:06:01 --> 00:06:06
language that sort of compiles to actual

00:06:03 --> 00:06:08
machine code and if and if it's

00:06:05 --> 00:06:09
it's incomprehensible gibberish to

00:06:07 --> 00:06:10
most program even most programmers

00:06:08 --> 00:06:11
>> you're writing an octal or something

00:06:09 --> 00:06:13
>> you're writing like very very close to

00:06:10 --> 00:06:15
the hardware but even still it's still a

00:06:12 --> 00:06:17
language that compiles to zeros and ones

00:06:14 --> 00:06:19
>> um whereas the actual real programmers

00:06:16 --> 00:06:20
actually wrote in zeros and ones. And so

00:06:18 --> 00:06:21
there there's always there's always this

00:06:19 --> 00:06:23
tendency, you know, for the for the for

00:06:20 --> 00:06:23
the pros to be, you know, look on the

00:06:22 --> 00:06:24
nose.

00:06:22 --> 00:06:25
>> Yeah.

00:06:23 --> 00:06:26
>> And say, you know, the new people are

00:06:24 --> 00:06:27
being are being, you know, basically

00:06:25 --> 00:06:28
sloppy. They don't understand what's

00:06:26 --> 00:06:30
happening. You know, they don't really

00:06:27 --> 00:06:31
understand the machine. And then, of

00:06:29 --> 00:06:32
course, you know, with with the higher

00:06:30 --> 00:06:34
level with the higher level abstractions

00:06:31 --> 00:06:36
do is they make they democratize. The

00:06:33 --> 00:06:39
absolute irony is I was part of the

00:06:35 --> 00:06:41
JavaScript revolution. I was at Facebook

00:06:38 --> 00:06:42
uh before starting repled and we built

00:06:40 --> 00:06:45
he modern JavaScript stack. We built

00:06:42 --> 00:06:47
ReactJS and all the tooling around it

00:06:44 --> 00:06:49
>> and we got a lot of hate from from the

00:06:46 --> 00:06:52
programmers that you should type you

00:06:48 --> 00:06:54
know vanilla JavaScript directly and

00:06:51 --> 00:06:56
>> um I was like okay whatever and then

00:06:53 --> 00:06:57
that you and now that's mainstream and

00:06:55 --> 00:07:00
then those guys that built their careers

00:06:56 --> 00:07:02
on the last wave we invented are hating

00:06:59 --> 00:07:04
on this new wave and so just you know

00:07:01 --> 00:07:06
people never change. Okay, got it. Okay,

00:07:03 --> 00:07:07
so you you're typing English I want to

00:07:05 --> 00:07:08
sell crepes online. I want to do this. I

00:07:06 --> 00:07:09
want to have a t-shirt. Whatever the

00:07:07 --> 00:07:10
business is. Okay. What what happens

00:07:08 --> 00:07:13
then?

00:07:09 --> 00:07:16
>> Yeah. and then uh uh replet agent will

00:07:12 --> 00:07:18
show you what it understood. So it's

00:07:15 --> 00:07:20
trying to build um a common

00:07:17 --> 00:07:21
understanding between you and it and I

00:07:19 --> 00:07:23
think there's a lot of things we can do

00:07:20 --> 00:07:25
better there in terms of UI but for now

00:07:22 --> 00:07:27
it'll show you a list of tasks.

00:07:24 --> 00:07:29
>> It'll tell you I'm going to go set up a

00:07:26 --> 00:07:31
database because you need to store your

00:07:28 --> 00:07:33
data somewhere. Uh we need to set up

00:07:30 --> 00:07:35
Shopify or Stripe because we need to

00:07:32 --> 00:07:37
accept payments. Uh and then it shows

00:07:34 --> 00:07:39
you this list and gives you two options

00:07:36 --> 00:07:41
initially. Do you want to start with a

00:07:38 --> 00:07:43
design so that we can iterate back and

00:07:40 --> 00:07:44
forth to get lock that design down or do

00:07:42 --> 00:07:46
you want to build a full thing?

00:07:43 --> 00:07:48
>> Hey, if you want to build a full thing,

00:07:45 --> 00:07:51
we'll go for 20, 30, 40 minutes.

00:07:48 --> 00:07:53
>> Uh, and the a and be like the agent will

00:07:50 --> 00:07:55
tell you go here, install the app.

00:07:52 --> 00:07:57
>> Uh, I'm going to go set up the database,

00:07:54 --> 00:07:59
do the migrations, write the SQL, you

00:07:56 --> 00:08:01
know, build the site. I'm going to also

00:07:58 --> 00:08:05
test it. So this is a recent innovation

00:08:00 --> 00:08:07
we did with um agent 3 is that after it

00:08:04 --> 00:08:10
writes the software spins up a browser

00:08:06 --> 00:08:12
goes around and tests in the browser and

00:08:09 --> 00:08:14
then any issue it kind of iterates kind

00:08:11 --> 00:08:15
of goes and fix the code. So it'll spend

00:08:13 --> 00:08:16
20 30 minutes building that I'll send

00:08:14 --> 00:08:18
you a notification it'll tell you the

00:08:15 --> 00:08:19
app is ready. And so you can test it on

00:08:17 --> 00:08:22
your phone. You can go back to your

00:08:18 --> 00:08:24
computer. You'll see maybe you'll find a

00:08:21 --> 00:08:26
bug or an issue, you'll describe it to

00:08:23 --> 00:08:28
the agent, say, "Hey, it's not exactly

00:08:25 --> 00:08:30
doing what I expected." Uh or if it's

00:08:27 --> 00:08:32
perfect and and you're ready to go and

00:08:29 --> 00:08:33
that's it. You know, 20 minutes. By the

00:08:31 --> 00:08:35
way, there's a lot of examples where

00:08:32 --> 00:08:38
people just get their idea in 20 30

00:08:34 --> 00:08:38
minutes, which is amazing. Um you just

00:08:37 --> 00:08:39
hit publish.

00:08:37 --> 00:08:43
>> Mhm.

00:08:38 --> 00:08:45
>> You hit you hit publish. Um

00:08:42 --> 00:08:48
couple clicks, you'll be up in the

00:08:44 --> 00:08:50
cloud. we'll set up a a virtual machine

00:08:47 --> 00:08:51
in the cloud. The database is deployed.

00:08:49 --> 00:08:52
Everything's done and now you have a

00:08:50 --> 00:08:55
production database.

00:08:51 --> 00:08:57
>> So, think about the steps needed just

00:08:54 --> 00:08:59
wo or 3 years ago in order to get to

00:08:56 --> 00:09:00
that step. You have to set up your local

00:08:58 --> 00:09:02
development environment. You have to

00:08:59 --> 00:09:03
sign up for an AWS account. You have to

00:09:01 --> 00:09:05
provision the databases, the virtual

00:09:02 --> 00:09:08
machines, you have to create the entire

00:09:04 --> 00:09:10
pip deployment pipeline. All of that is

00:09:07 --> 00:09:12
done for you. And it just, you know, a

00:09:09 --> 00:09:15
kid can do it, a lay person can do it.

00:09:11 --> 00:09:17
If you're a programmer and uh you're

00:09:14 --> 00:09:18
curious about what the agent did, the

00:09:16 --> 00:09:20
cool thing about replet because we have

00:09:17 --> 00:09:22
this history of being an IDE, you can

00:09:19 --> 00:09:24
peel the layers. You can open the file

00:09:21 --> 00:09:26
tree and you could look at the files.

00:09:23 --> 00:09:27
You can open gits, you can push it to

00:09:25 --> 00:09:29
GitHub, you can connect it to your

00:09:26 --> 00:09:31
editor if you want, you can open it in

00:09:28 --> 00:09:32
Emacs. So the cool thing about Replet,

00:09:30 --> 00:09:35
yes, it is a vibe coding platform that

00:09:31 --> 00:09:36
abstracts away all the complexities, but

00:09:34 --> 00:09:37
all the layers are there for you to look

00:09:35 --> 00:09:39
at.

00:09:36 --> 00:09:41
>> Right. So let's go let's go back to um

00:09:38 --> 00:09:43
that was great, but let's go back to you

00:09:40 --> 00:09:44
said it. It it gives you that the a the

00:09:42 --> 00:09:45
agent gives you you you say I've got my

00:09:43 --> 00:09:47
idea. You plug it in and it says it

00:09:44 --> 00:09:48
gives you this list of things and then

00:09:46 --> 00:09:49
you and then when you describe it you

00:09:47 --> 00:09:51
said I'm going to do this. I'm going to

00:09:48 --> 00:09:53
do that. The eye there in that case was

00:09:50 --> 00:09:55
the agent as opposed to the user. Yes.

00:09:52 --> 00:09:56
>> And so the the agent lists the set of

00:09:54 --> 00:09:58
things that it's going to do and then

00:09:55 --> 00:09:59
the agent actually does those things.

00:09:57 --> 00:10:01
>> Agent does those things. Yeah. That

00:09:58 --> 00:10:04
hat's a that's a that's a very

00:10:00 --> 00:10:06
important point. when we did this shift,

00:10:03 --> 00:10:08
we hadn't realized internally at Replet

00:10:05 --> 00:10:10
how much the actual user stopped being

00:10:08 --> 00:10:11
the human user and it's actually the

00:10:09 --> 00:10:11
agent programmer,

00:10:10 --> 00:10:14
>> right?

00:10:10 --> 00:10:17
>> So, one really uh funny thing happened

00:10:13 --> 00:10:19
is we had servers in Asia uh and we the

00:10:16 --> 00:10:20
reason we had servers in Asia because we

00:10:18 --> 00:10:24
wanted our Indian or you know Japanese

00:10:20 --> 00:10:28
users to be to have a you know shorter

00:10:23 --> 00:10:29
uh time to the servers. uh when we

00:10:27 --> 00:10:31
launched the agent their experience got

00:10:28 --> 00:10:33
significantly worse and we're like what

00:10:30 --> 00:10:34
happened like it's supposed to be faster

00:10:32 --> 00:10:37
well turns out it's worse it's because

00:10:33 --> 00:10:39
the AIS are sitting in uh in United

00:10:36 --> 00:10:41
States and so the the programmer is

00:10:38 --> 00:10:42
actually in United States it's you're

00:10:40 --> 00:10:44
sending the request to the programmer

00:10:41 --> 00:10:46
and the programmer is interfacing with a

00:10:43 --> 00:10:48
machine across the world and so yes

00:10:45 --> 00:10:51
uddenly the agent is the programmer

00:10:47 --> 00:10:52
okay so like the the ter ter you know

00:10:50 --> 00:10:54
new terminology agent is a software

00:10:51 --> 00:10:56
program that is basically using the rest

00:10:54 --> 00:10:58
of the

00:10:55 --> 00:11:00
as if it were a as if it were a human

00:10:57 --> 00:11:02
user, but it's not. It's a it's a bot.

00:10:59 --> 00:11:04
>> That's right. It has access to tools

00:11:01 --> 00:11:07
uch as write a file, edit a file,

00:11:03 --> 00:11:10
delete a file, uh uh search the package

00:11:06 --> 00:11:12
index, install a package, uh provision a

00:11:09 --> 00:11:14
database, provision object object

00:11:11 --> 00:11:16
storage. It is a programmer that has the

00:11:13 --> 00:11:17
tools and interface. It has a sort of an

00:11:15 --> 00:11:19
interface

00:11:16 --> 00:11:21
>> that that is very similar to a human

00:11:18 --> 00:11:23
programmer. And then um you know we'll

00:11:20 --> 00:11:26
talk more about how this all works but a

00:11:22 --> 00:11:28
debate inside the AI industry um is with

00:11:25 --> 00:11:29
ese was kind of this you know this

00:11:27 --> 00:11:30
idea now of having agents that do things

00:11:28 --> 00:11:32
on your behalf and then go out you know

00:11:30 --> 00:11:33
go go out and kind of accomplish

00:11:31 --> 00:11:35
missions. Um there's this you know kind

00:11:32 --> 00:11:37
of debate which is okay how like

00:11:34 --> 00:11:38
obviously you know it's a big deal even

00:11:36 --> 00:11:39
to have an AI agent that can do

00:11:37 --> 00:11:40
relatively simple things to do complex

00:11:38 --> 00:11:42
things of course is you know one of the

00:11:39 --> 00:11:44
great technical challenges of the last

00:11:41 --> 00:11:45
80 years you know to to do that and then

00:11:43 --> 00:11:47
there's sort of this question of like

00:11:44 --> 00:11:49
can the agent go out and run and operate

00:11:46 --> 00:11:51
on its own for 5 minutes you know for

00:11:48 --> 00:11:54
15 minutes for an hour for 8 hours

00:11:50 --> 00:11:55
and and meaning like sort of like how

00:11:53 --> 00:11:57
long does it maintain coherence like how

00:11:54 --> 00:11:59
long does it actually like stay in full

00:11:56 --> 00:12:01
control of it of its faculties and not

00:11:58 --> 00:12:02
kind of spin out because at least the

00:12:00 --> 00:12:04
arly early agents or the the early AIS,

00:12:01 --> 00:12:05
if if you set them off to do this, they

00:12:03 --> 00:12:06
might be able to run for two or three

00:12:04 --> 00:12:07
minutes, then they would they would

00:12:05 --> 00:12:09
start to get confused and go down rabbit

00:12:06 --> 00:12:11
holes and, you know, kind of kind of

00:12:08 --> 00:12:13
spin out. Um, more recently, more

00:12:10 --> 00:12:14
cently, um, uh, you know, we've seen

00:12:12 --> 00:12:16
that that that that agents can run a lot

00:12:13 --> 00:12:18
longer and and do more complex tasks.

00:12:15 --> 00:12:20
Like, where are we on the curve of

00:12:17 --> 00:12:22
agents being able to run for how long

00:12:19 --> 00:12:23
and for what complexity tasks before

00:12:21 --> 00:12:25
they break?

00:12:22 --> 00:12:27
>> That's that's absolutely the the I think

00:12:24 --> 00:12:30
the main metric we're looking at. even

00:12:26 --> 00:12:32
back in 2023, you know, had the idea for

00:12:29 --> 00:12:34
software agents, you know, four or five

00:12:31 --> 00:12:36
years ago now. The problem every time we

00:12:33 --> 00:12:38
attempt them, the the problem of

00:12:35 --> 00:12:40
coherence, you know, they'll they'll go

00:12:37 --> 00:12:42
n for a minute or two and then they'll

00:12:39 --> 00:12:44
just, you know, they compound in errors

00:12:41 --> 00:12:45
in a way that they just can't recover.

00:12:43 --> 00:12:46
>> Um,

00:12:44 --> 00:12:47
>> and you can actually see it, right?

00:12:45 --> 00:12:48
Because they actually they actually, if

00:12:46 --> 00:12:50
you watch watch them operate, they get

00:12:47 --> 00:12:52
increasingly confused and then, you

00:12:49 --> 00:12:53
know, maybe even deranged. Yeah, they

00:12:51 --> 00:12:55
vary the range and they they go into

00:12:52 --> 00:12:57
very weird areas and sometimes they

00:12:54 --> 00:13:00
start speaking Chinese and doing really

00:12:56 --> 00:13:04
weird things and um but I would say

00:12:59 --> 00:13:06
sometime around last year we maybe

00:13:03 --> 00:13:10
crossed the 3 four five minute mark

00:13:06 --> 00:13:13
>> and it felt to us that okay we're on a

00:13:09 --> 00:13:15
path where long re you know long horizon

00:13:12 --> 00:13:18
reasoning is getting solved

00:13:14 --> 00:13:18
>> uh and so we made we made a bet and I I

00:13:17 --> 00:13:21
tell my team

00:13:17 --> 00:13:22
>> so long horizon reasoning meaning

00:13:20 --> 00:13:24
like dealing in like

00:13:21 --> 00:13:27
facts and logic

00:13:23 --> 00:13:29
>> um in a in a sort of complex way and

00:13:26 --> 00:13:30
then long horizon being over a long

00:13:28 --> 00:13:31
period of time. Yes.

00:13:29 --> 00:13:32
>> With many many steps to a reasoning

00:13:30 --> 00:13:33
process.

00:13:31 --> 00:13:35
>> Yeah, that's right. So if you think

00:13:32 --> 00:13:37
about the way large language models work

00:13:34 --> 00:13:38
is that they have a context. This

00:13:36 --> 00:13:41
context is basically the memory all the

00:13:37 --> 00:13:43
text all your prompt and also all the

00:13:40 --> 00:13:45
internal talk that the AI is doing as

00:13:42 --> 00:13:46
it's reasoning. So when the AI is

00:13:44 --> 00:13:48
reasoning it's actually talking to

00:13:45 --> 00:13:50
itself. It's like oh now I need to go

00:13:47 --> 00:13:52
set up a database. Well, what what kind

00:13:49 --> 00:13:54
of tool do I have? Oh, there's a tool

00:13:51 --> 00:13:56
here that says Postgress. Okay, let me

00:13:53 --> 00:13:58
try using that. Okay, I use that. I got

00:13:55 --> 00:13:59
feedback. Let me look at the feedback

00:13:57 --> 00:14:03
and read it. And it'll read the

00:13:58 --> 00:14:07
feedback. And so the that that prompt

00:14:02 --> 00:14:10
box or context is where both the user

00:14:06 --> 00:14:12
input, the environment input, and the

00:14:09 --> 00:14:14
internal thoughts of the machine are all

00:14:11 --> 00:14:16
within. It's sort of like a program

00:14:13 --> 00:14:18
emory in in memory space. And so

00:14:15 --> 00:14:21
reasoning over that was the challenge

00:14:18 --> 00:14:24
for a long time. That's when AIs just

00:14:20 --> 00:14:26
like went off track and now they're able

00:14:23 --> 00:14:28
to kind of think through this entire

00:14:25 --> 00:14:31
thing and and maintain coherence. And

00:14:28 --> 00:14:34
there's there's now techniques around uh

00:14:30 --> 00:14:36
compression of contacts. So there still

00:14:33 --> 00:14:38
context length is still a problem,

00:14:35 --> 00:14:41
right? So I would say LM today, you

00:14:38 --> 00:14:43
know, they're marketed as a million uh

00:14:40 --> 00:14:46
token uh length, which is like a million

00:14:42 --> 00:14:48
words almost. uh in reality it's about

00:14:45 --> 00:14:51
200,000 and then they start to struggle.

00:14:47 --> 00:14:54
So we do a lot of uh you know we stop we

00:14:50 --> 00:14:56
compress the memory. So if a memory if

00:14:53 --> 00:14:57
a portion of the memory is saying

00:14:55 --> 00:15:00
that I'm getting all the logs from the

00:14:56 --> 00:15:02
database you can summarize you know

00:14:59 --> 00:15:05
paragraphs of logs with one statement or

00:15:01 --> 00:15:06
the database setup that's it right and

00:15:04 --> 00:15:09
so every once in a while we'll compress

00:15:05 --> 00:15:11
the context so that we make sure we

00:15:08 --> 00:15:13
maintain coherence so that there's a lot

00:15:10 --> 00:15:15
of innovation happened outside of the

00:15:12 --> 00:15:17
foundation models as well in order to to

00:15:14 --> 00:15:19
enable that long context coherence. So

00:15:16 --> 00:15:20
what was the what was the key technical

00:15:18 --> 00:15:21
breakthrough at the in the foundation

00:15:19 --> 00:15:22
models that made this possible do you

00:15:20 --> 00:15:23
think?

00:15:21 --> 00:15:26
>> I think it's RL I think it's uh

00:15:22 --> 00:15:29
reinforcement learning. So the way

00:15:25 --> 00:15:33
pre-training works is you know uh they

00:15:28 --> 00:15:35
uh pre-training is a uh the first step

00:15:32 --> 00:15:36
of training a large language model. It

00:15:34 --> 00:15:39
reads a piece of text. It covers the

00:15:36 --> 00:15:42
last words and tries to guess it. That's

00:15:38 --> 00:15:45
how it's trained. That doesn't really

00:15:41 --> 00:15:48
imply long context reasoning. it it you

00:15:44 --> 00:15:49
know it it turns out to be very very

00:15:47 --> 00:15:52
effective. It can learn language that

00:15:48 --> 00:15:56
way. But the reason we weren't able to

00:15:51 --> 00:15:58
move past that limitation is that that

00:15:55 --> 00:16:01
modality of training just wasn't good

00:15:57 --> 00:16:04
enough. And what you want is you want a

00:16:00 --> 00:16:06
type of problem solving over a uh over

00:16:03 --> 00:16:09
long context. So what reinforcement

00:16:05 --> 00:16:13
learning uh uh especially from code

00:16:08 --> 00:16:17
xecution gave us is the ability to for

00:16:12 --> 00:16:19
the machine to for the LLM to roll out

00:16:16 --> 00:16:23
what we call trajectories in AI. So

00:16:18 --> 00:16:26
trajectory is a uh stepbystep reasoning

00:16:22 --> 00:16:28
chain in order to reach a solution. So

00:16:25 --> 00:16:30
uh the way uh as I understand

00:16:27 --> 00:16:32
reinforcement learning works is they put

00:16:29 --> 00:16:36
he LM in a programming environment like

00:16:32 --> 00:16:39
replet and say hey here's a pro here's a

00:16:35 --> 00:16:42
codebase here's a bug in the codebase

00:16:38 --> 00:16:44
and we want you to solve it. Um now the

00:16:41 --> 00:16:45
human trainer already knows what the

00:16:43 --> 00:16:47
solution would look like. So we have a

00:16:44 --> 00:16:48
pull request that we have on GitHub so

00:16:46 --> 00:16:51
we know exactly or we have a unit test

00:16:47 --> 00:16:53
hat we can run and verify the solution.

00:16:50 --> 00:16:54
So what it does is it rolls out a lot of

00:16:52 --> 00:16:56
different trajectories. Those they

00:16:53 --> 00:16:58
sample the model and maybe one of those

00:16:56 --> 00:17:01
trajectories will reach and a lot of

00:16:57 --> 00:17:04
them will just go go off off track but

00:17:00 --> 00:17:06
one of them will reach the solution by

00:17:03 --> 00:17:08
solving the bug and it reinforces on

00:17:05 --> 00:17:10
that. So that that gets a reward and the

00:17:07 --> 00:17:11
model gets trained that okay you know

00:17:09 --> 00:17:13
this is how you solve these type of

00:17:10 --> 00:17:14
problems. So that's how we're able to

00:17:12 --> 00:17:16
extend these reasoning chains.

00:17:14 --> 00:17:19
>> Got it. and and how it's a two-part

00:17:16 --> 00:17:22
question is how how how good how good

00:17:18 --> 00:17:24
are the models now at long long long

00:17:21 --> 00:17:26
reasoning and and I would say and how do

00:17:23 --> 00:17:28
we know like how how is that

00:17:25 --> 00:17:31
established? Um

00:17:27 --> 00:17:35
there is a nonprofit called meter um

00:17:30 --> 00:17:38
that is uh measuring

00:17:34 --> 00:17:41
uh useful has a benchmark to measure uh

00:17:37 --> 00:17:44
ow long a model runs while maintaining

00:17:40 --> 00:17:45
coherence and doing useful useful things

00:17:43 --> 00:17:47
whether it's programming or other

00:17:44 --> 00:17:50
benchmark tasks that they've done. uh

00:17:46 --> 00:17:53
and they put up a paper I think uh late

00:17:49 --> 00:17:58
last year that said every seven months

00:17:52 --> 00:17:59
>> uh the the minutes that a model can run

00:17:57 --> 00:18:02
is doubling.

00:17:58 --> 00:18:05
>> So you go from 2 minutes to you know 4

00:18:01 --> 00:18:06
minutes in 7 months I think they vastly

00:18:04 --> 00:18:07
underestimated that.

00:18:05 --> 00:18:09
>> Is that right? Vastly it's doubling.

00:18:06 --> 00:18:12
It's doubling more often than 7 months.

00:18:08 --> 00:18:14
>> We so Asian 3 we measure that you know

00:18:11 --> 00:18:17
very closely uh and we measure that in

00:18:13 --> 00:18:18
real tasks from real users. So we're not

00:18:16 --> 00:18:20
doing benchmarking. We're actually doing

00:18:17 --> 00:18:22
AB tests and we're looking at the data

00:18:19 --> 00:18:25
that how users are successful or not.

00:18:21 --> 00:18:27
>> For us, the the absolute sign of success

00:18:24 --> 00:18:28
is you made an app and you published it.

00:18:26 --> 00:18:29
Because when you publish it, you're

00:18:27 --> 00:18:31
paying extra money. You're saying this

00:18:28 --> 00:18:33
app is economically useful. I'm going to

00:18:30 --> 00:18:36
publish it. So that's as clear-cut as

00:18:32 --> 00:18:38
possible. And so what we're seeing is in

00:18:35 --> 00:18:39
agent one, the agent could run for 2

00:18:37 --> 00:18:41
minutes

00:18:38 --> 00:18:43
>> and then and then perhaps struggle.

00:18:40 --> 00:18:46
Agent two came out in February, it ran

00:18:42 --> 00:18:47
for 20 minutes. Agent 3 200 minutes.

00:18:45 --> 00:18:49
>> Okay,

00:18:46 --> 00:18:51
>> 200. Some users are pushing it to like

00:18:48 --> 00:18:54
12 hours and things like that. I'm less

00:18:50 --> 00:18:57
confident that it is as good and when it

00:18:53 --> 00:19:00
goes to these stratospheres, but at like

00:18:56 --> 00:19:03
2 3 hours timeline, it is really it's

00:18:59 --> 00:19:04
it's it's insanely good. And and

00:19:02 --> 00:19:08
the main innovation outside of the

00:19:03 --> 00:19:11
models is a verification loop. Actually,

00:19:07 --> 00:19:13
uh I remember reading um a research

00:19:10 --> 00:19:16
paper from Nvidia. So what Nvidia did is

00:19:12 --> 00:19:19
they're trying to uh write um GPU

00:19:15 --> 00:19:22
kernels uh using deepseek and that was

00:19:18 --> 00:19:24
like perhaps 7 months ago when deepseek

00:19:21 --> 00:19:26
came out and what they found is that if

00:19:23 --> 00:19:28
we add a verifier in the loop if we can

00:19:25 --> 00:19:30
run the kernel and verify it's working

00:19:27 --> 00:19:32
we're able to run deepseeek for like 20

00:19:29 --> 00:19:35
minutes and it it was generating

00:19:31 --> 00:19:37
actually optimized kernels

00:19:34 --> 00:19:40
>> and so I was like okay the next thing

00:19:36 --> 00:19:44
for us obviously as an as a sort of a

00:19:39 --> 00:19:45
gent lab or like applay our company.

00:19:43 --> 00:19:47
We're not doing the foundation model

00:19:44 --> 00:19:49
stuff, but we're doing a lot of research

00:19:46 --> 00:19:51
on top of that. And so, okay, we know

00:19:48 --> 00:19:53
that agents can run for 10 20 minutes

00:19:50 --> 00:19:57
now or LLMs can stay coherent for

00:19:52 --> 00:19:59
longer, but for you to push them to 200,

00:19:56 --> 00:20:00
300 minutes, you need a verifier in the

00:19:58 --> 00:20:04
loop. So, that's why we spend all our

00:20:00 --> 00:20:07
time uh creating scaffolds to make it so

00:20:03 --> 00:20:09
that the agent can spin up a browser and

00:20:06 --> 00:20:11
o computer use style testing. So once

00:20:08 --> 00:20:13
you put that in the middle, what's

00:20:10 --> 00:20:17
happening is it works for 20 minutes uh

00:20:12 --> 00:20:19
spin up another agent uh spins up a a

00:20:16 --> 00:20:21
browser tests the work of the previous

00:20:18 --> 00:20:25
agent. So it's a multi- aent system

00:20:20 --> 00:20:28
>> and if it is uh if it founds a bug it

00:20:24 --> 00:20:30
starts a new trajectory and says okay

00:20:27 --> 00:20:31
good work let's summarize what you did

00:20:29 --> 00:20:33
the last 20 minutes

00:20:30 --> 00:20:35
>> now that be that plus what the bug that

00:20:32 --> 00:20:36
we found that's a prompt for a new

00:20:34 --> 00:20:37
trajectory right

00:20:35 --> 00:20:38
>> so you stack those on each other and you

00:20:36 --> 00:20:40
can go endlessly but

00:20:37 --> 00:20:42
>> so it's like a mar like setting up a

00:20:39 --> 00:20:43
marathon or like a relay race

00:20:41 --> 00:20:44
>> as long as as long as each step is done

00:20:42 --> 00:20:45
properly you could do in sort of an

00:20:43 --> 00:20:47
infinite number of steps

00:20:44 --> 00:20:48
>> that's right that's right you can always

00:20:46 --> 00:20:50
compress the previous step into a

00:20:47 --> 00:20:52
paragraph And that becomes a prompt. So

00:20:49 --> 00:20:52
it's it's an agent prompting the next

00:20:51 --> 00:20:53
agent.

00:20:51 --> 00:20:55
>> Right. Right. Right. That's amazing. So

00:20:52 --> 00:20:56
um and then when when an agent like when

00:20:54 --> 00:20:58
a modern agent like running on modern

00:20:55 --> 00:21:00
LM that are trained this way when

00:20:57 --> 00:21:02
it let's say it runs for 200 minutes

00:20:59 --> 00:21:03
like when you watch the agent run is it

00:21:01 --> 00:21:06
like running is it like processing

00:21:02 --> 00:21:08
through like logic and tasks at the same

00:21:05 --> 00:21:09
pace that like a human being is or

00:21:07 --> 00:21:13
slower or faster? I

00:21:08 --> 00:21:16
>> it's actually I would say it is faster

00:21:12 --> 00:21:18
but not that much significantly faster.

00:21:15 --> 00:21:19
It's not at computer speed, right? What

00:21:17 --> 00:21:20
we expect computer speed to be.

00:21:18 --> 00:21:21
>> It's like watching a per like if you

00:21:19 --> 00:21:23
watch if you if it's describing what

00:21:20 --> 00:21:24
it's doing, it's sort of like watching a

00:21:22 --> 00:21:27
person work.

00:21:23 --> 00:21:27
>> It's like watching John Carmarmacine

00:21:26 --> 00:21:30
work.

00:21:26 --> 00:21:32
>> The world Okay. The world's

00:21:29 --> 00:21:32
the world's best programmer.

00:21:31 --> 00:21:34
>> Yeah.

00:21:31 --> 00:21:34
>> The world's best programmer on a stim on

00:21:33 --> 00:21:36
a stimulant.

00:21:33 --> 00:21:38
>> On a stimulant. Yeah, that's right.

00:21:35 --> 00:21:40
>> Working for you. Working for you.

00:21:37 --> 00:21:42
>> Yeah. There. So, it's very fast and you

00:21:39 --> 00:21:44
can see the uh file diffs running

00:21:41 --> 00:21:45
through, but every once in a while it'll

00:21:43 --> 00:21:47
stop and it'll start thinking. I'll show

00:21:44 --> 00:21:48
you the reasoning. Yeah. It's like, I

00:21:46 --> 00:21:50
did this and I did this. Am I on the

00:21:47 --> 00:21:51
right track? It kind of really tries to

00:21:49 --> 00:21:54
reflect, right?

00:21:50 --> 00:21:55
>> Uh and then it might review its work and

00:21:53 --> 00:21:58
ecide the next step or it might kick

00:21:54 --> 00:22:00
into the testing agent or you know, so

00:21:57 --> 00:22:02
you're seeing it do all of that and

00:21:59 --> 00:22:04
every once in a while it calls the tool

00:22:01 --> 00:22:06
for example, it stops and says, well, we

00:22:03 --> 00:22:12
ran into an issue. you know, Postgress

00:22:05 --> 00:22:14
um 15 is not um compatible with this,

00:22:11 --> 00:22:15
you know, database ORM package that that

00:22:13 --> 00:22:17
I have.

00:22:14 --> 00:22:18
>> Um okay, this is a problem I haven't

00:22:16 --> 00:22:21
seen before. I'm going to go search the

00:22:17 --> 00:22:23
web. So, it has a web search tool. Go do

00:22:20 --> 00:22:24
that. And so, it looks like a human

00:22:22 --> 00:22:25
programmer, right?

00:22:23 --> 00:22:27
>> And it's really fascinating to watch.

00:22:24 --> 00:22:29
It's one of my favorite things to do is

00:22:26 --> 00:22:31
just to watch the tool chain and

00:22:28 --> 00:22:34
reasoning chain and the testing chain.

00:22:30 --> 00:22:35
And it's yeah it is like watching a

00:22:33 --> 00:22:36
hyperproductive programmer

00:22:34 --> 00:22:38
>> right so you know we're kind of getting

00:22:35 --> 00:22:40
into here kind of the holy grail of AI

00:22:37 --> 00:22:42
which is sort of you know generalized

00:22:39 --> 00:22:44
reasoning um you know by the machine um

00:22:41 --> 00:22:47
so uh you mentioned this a couple times

00:22:43 --> 00:22:49
but this idea of a of a verification so

00:22:46 --> 00:22:51
just for folks on the listening to

00:22:48 --> 00:22:52
podcast who maybe aren't in the details

00:22:50 --> 00:22:54
let me try to describe this and see see

00:22:51 --> 00:22:56
if I have it right so like a just a just

00:22:53 --> 00:22:57
a large language model the way you would

00:22:55 --> 00:22:58
exper you would have experienced with

00:22:56 --> 00:23:00
like Chad GPT out of the gate two years

00:22:57 --> 00:23:02
ago or whatever would have been it's

00:22:59 --> 00:23:04
like And it's incredible how fluid uh it

00:23:01 --> 00:23:06
is at language. Um it's incredible how

00:23:03 --> 00:23:07
good it is at like writing Shakespearean

00:23:05 --> 00:23:09
sonnetss or rap lyrics. It's it's

00:23:06 --> 00:23:10
amazing how good it is at human

00:23:08 --> 00:23:12
conversation. But if you start to ask it

00:23:10 --> 00:23:15
like problems that involve like rational

00:23:11 --> 00:23:17
thinking uh or problem solving all of a

00:23:14 --> 00:23:18
sudden like you math or the math the

00:23:16 --> 00:23:20
whole show and and in the very beginning

00:23:17 --> 00:23:21
it was you could ask if you ask it very

00:23:19 --> 00:23:22
basic math problems, you know, it would

00:23:20 --> 00:23:24
not be able to do them.

00:23:21 --> 00:23:25
>> That's right. Uh but then even when it

00:23:23 --> 00:23:26
got better at those, if you started to

00:23:24 --> 00:23:28
ask it to like, you know, it it could

00:23:26 --> 00:23:29
maybe add two small numbers together,

00:23:27 --> 00:23:30
but it couldn't add two large numbers

00:23:28 --> 00:23:32
together. Or if it could add two large

00:23:29 --> 00:23:32
numbers, it couldn't multiply them.

00:23:31 --> 00:23:33
Yeah.

00:23:31 --> 00:23:34
>> And it's just like, all right, this is

00:23:32 --> 00:23:36
And then it had this there was this

00:23:34 --> 00:23:37
famous the famous was the straw the

00:23:35 --> 00:23:39
strawberry test, the famous strawberry

00:23:36 --> 00:23:39
test, which is how many Rs are in the

00:23:38 --> 00:23:40
word strawberry.

00:23:38 --> 00:23:41
>> That's right.

00:23:39 --> 00:23:42
>> And there was this long period where it

00:23:40 --> 00:23:44
kept it would it would just guess

00:23:41 --> 00:23:45
wrong. It would say there were only two

00:23:43 --> 00:23:49
Rs in the word strawberry. And it turns

00:23:44 --> 00:23:50
out there are three. Um, so, um, so it

00:23:48 --> 00:23:51
was this thing and so people were and

00:23:49 --> 00:23:53
there was even this term that was being

00:23:50 --> 00:23:55
used kind of the the slur that was being

00:23:52 --> 00:23:55
used at the time was stoastic parrot.

00:23:54 --> 00:23:56
>> Yeah,

00:23:54 --> 00:23:59
>> I was thinking clanker.

00:23:55 --> 00:24:01
>> Well, well, clanker is the is the new

00:23:58 --> 00:24:03
slur. Clank clanker. Clanker is just the

00:24:00 --> 00:24:05
full-on racial slur against AI as a

00:24:02 --> 00:24:08
species. Um, but the technical critique

00:24:04 --> 00:24:10
was so-called stoastic par stoastic

00:24:07 --> 00:24:11
means random. Uh so sort of random

00:24:09 --> 00:24:13
parrot me meaning basically that this

00:24:10 --> 00:24:14
thing was sort of the large language

00:24:12 --> 00:24:16
models were like a they were like a

00:24:13 --> 00:24:17
mirage where they were like repeating

00:24:15 --> 00:24:18
back to you things that they thought

00:24:16 --> 00:24:20
hat you wanted to hear but they didn't

00:24:17 --> 00:24:21
>> in a way it's true in the in the pure

00:24:19 --> 00:24:23
pre-training LLM world

00:24:20 --> 00:24:24
>> right for the for the very basic layer

00:24:22 --> 00:24:25
but then what happened is as you said

00:24:23 --> 00:24:27
over the last year or something there

00:24:24 --> 00:24:29
was this layering in of of

00:24:26 --> 00:24:29
reinforcement learning and then but the

00:24:28 --> 00:24:31
key to

00:24:28 --> 00:24:33
>> it's not new crucially it's like it's

00:24:30 --> 00:24:34
alpha go right so

00:24:32 --> 00:24:36
>> describe so describe that for a second.

00:24:33 --> 00:24:40
Yeah. So we we had this breakthrough

00:24:35 --> 00:24:43
before in uh 2015 was the Alph Go

00:24:39 --> 00:24:46
breakthrough. I think 2015 2016 where it

00:24:42 --> 00:24:48
is emerging of sort of uh you know the

00:24:45 --> 00:24:50
the you would know a lot better than

00:24:47 --> 00:24:53
me the old AI debate between the

00:24:49 --> 00:24:54
connectionists uh the the people who who

00:24:52 --> 00:24:58
thinks neuronet networks are the true

00:24:53 --> 00:25:00
sort of way of doing AI and the symbolic

00:24:57 --> 00:25:02
systems I think or like the people that

00:24:59 --> 00:25:04
hink that you know discrete reasonings

00:25:01 --> 00:25:06
fates and knowledge bases whatever this

00:25:03 --> 00:25:08
the way to go and so there was there

00:25:05 --> 00:25:10
was a merging of these two worlds where

00:25:07 --> 00:25:13
the way AlphaG go worked is it had a

00:25:09 --> 00:25:15
neural network but it had a Monte Carlo

00:25:12 --> 00:25:17
research algorithm on top of that. So

00:25:14 --> 00:25:19
the neural network would generate uh

00:25:16 --> 00:25:22
would would like uh generate a list of

00:25:18 --> 00:25:24
potential moves uh and then you had a

00:25:21 --> 00:25:27
more discrete algorithm sort those moves

00:25:23 --> 00:25:30
and find the best based on just uh tree

00:25:26 --> 00:25:31
search based on just trying to verify

00:25:29 --> 00:25:35
again this sort of a verifier in the

00:25:30 --> 00:25:39
loop trying to verify which move might

00:25:34 --> 00:25:41
yield the best based on more classical

00:25:38 --> 00:25:44
way of doing algorithms. Um, and so that

00:25:40 --> 00:25:47
's a resurgence of of that movement

00:25:43 --> 00:25:50
where we have this amazing generative uh

00:25:46 --> 00:25:53
neural network that is the the LLM and

00:25:49 --> 00:25:54
now let's layer on more discrete ways of

00:25:52 --> 00:25:56
trying to verify whether it's doing the

00:25:53 --> 00:25:58
right thing or not and let's put that in

00:25:55 --> 00:26:00
a training loop and once you do that the

00:25:57 --> 00:26:03
LLM will start gaining new capabilities

00:26:00 --> 00:26:04
uch as uh reasoning over math and code

00:26:02 --> 00:26:05
and things like that.

00:26:03 --> 00:26:06
>> Exactly. Right. Okay. And then that's

00:26:04 --> 00:26:08
great. And then and then the the key

00:26:05 --> 00:26:11
thing there though for for RL to work

00:26:07 --> 00:26:13
for LMS to reason the key is that it be

00:26:10 --> 00:26:15
a a problem statement that there is a

00:26:12 --> 00:26:17
defined and verifiable answer. That's

00:26:14 --> 00:26:19
right. Is that right? And so and and and

00:26:16 --> 00:26:20
you might think about this as like let's

00:26:18 --> 00:26:21
give a bunch of examples like in

00:26:19 --> 00:26:23
medicine this might be like um you know

00:26:20 --> 00:26:25
a diagnosis that like a panel of human

00:26:22 --> 00:26:27
doctors agrees with um or or or by the

00:26:24 --> 00:26:29
way or a diagnosis that actually you

00:26:26 --> 00:26:32
know solves the condition. Um in law

00:26:28 --> 00:26:33
this would be a um you know a a argument

00:26:31 --> 00:26:36
hat in front of a jury actually results

00:26:32 --> 00:26:38
in an acquitt or or something like that.

00:26:35 --> 00:26:40
Um in u math it's an equation that

00:26:37 --> 00:26:41
actually solves properly. Uh in physics

00:26:39 --> 00:26:42
it's a result that actually works in the

00:26:40 --> 00:26:43
real world.

00:26:41 --> 00:26:45
>> I don't know in civil engineering it's a

00:26:42 --> 00:26:46
bridge that doesn't collapse. Right. So

00:26:44 --> 00:26:50
so so there there there's always some

00:26:45 --> 00:26:52
test is that the first two do not

00:26:49 --> 00:26:57
work very well just yet. like the the

00:26:51 --> 00:26:58
like I would say uh law and healthcare

00:26:56 --> 00:27:02
they're still a little too squishy a

00:26:57 --> 00:27:03
little too soft it's unlike math or code

00:27:01 --> 00:27:05
like the way that they're training on

00:27:02 --> 00:27:07
math they're using this uh sort of like

00:27:04 --> 00:27:09
a program language uh provable language

00:27:06 --> 00:27:12
called lean for proofs right so you can

00:27:08 --> 00:27:14
run a lean statement you can run a

00:27:11 --> 00:27:16
computer code uh perhaps you can run a

00:27:13 --> 00:27:18
physics simulation or civil engineering

00:27:15 --> 00:27:20
uh sort of physics simulation but you

00:27:17 --> 00:27:22
can't run a diagnosis

00:27:19 --> 00:27:23
>> okay So I would say the

00:27:21 --> 00:27:24
>> but you could verify it with human

00:27:22 --> 00:27:27
swers or or not.

00:27:23 --> 00:27:30
>> Yeah. So that that's a more RL HF in a

00:27:26 --> 00:27:33
way. So it is not the like sort of

00:27:29 --> 00:27:36
autonomous RL train like fully scalable

00:27:32 --> 00:27:38
autonomous which is why coding is moving

00:27:35 --> 00:27:41
faster than any other domain is because

00:27:37 --> 00:27:43
we can we we can generate these problems

00:27:40 --> 00:27:45
and verify them on the fly. But there's

00:27:42 --> 00:27:46
two but with coding as anybody who's

00:27:44 --> 00:27:47
coded knows there's coding there's two

00:27:45 --> 00:27:48
tests which is one is does the code

00:27:46 --> 00:27:48
compile

00:27:47 --> 00:27:49
>> right

00:27:47 --> 00:27:51
>> and then the other is does it produce

00:27:48 --> 00:27:52
the right output and just because it

00:27:50 --> 00:27:54
compiles doesn't mean it produces the

00:27:51 --> 00:27:55
right output and I you tell me but

00:27:53 --> 00:27:56
verifying that it's the correct output

00:27:54 --> 00:27:58
is harder

00:27:55 --> 00:28:03
>> yeah sobbench

00:27:57 --> 00:28:07
is a collection of uh verified pull

00:28:02 --> 00:28:10
request end state uh so so it is it is

00:28:06 --> 00:28:12
not just about compiling we so they they

00:28:09 --> 00:28:15
group of scientists sobbench is the main

00:28:11 --> 00:28:17
benchmark used to test whether AI is

00:28:14 --> 00:28:20
good at software engineering tasks and

00:28:16 --> 00:28:24
we're almost saturating that. So last

00:28:19 --> 00:28:27
year we're at like maybe 5% early 24 or

00:28:23 --> 00:28:29
less and now we're like 82% or something

00:28:26 --> 00:28:31
like that with cloth on at 4.5 that's

00:28:28 --> 00:28:33
tate-of-the-art and that's like a

00:28:30 --> 00:28:35
really nice health climb that's

00:28:32 --> 00:28:37
happening right now. uh and basically

00:28:34 --> 00:28:39
they went and looked on GitHub. They

00:28:36 --> 00:28:42
found the the you know most complex

00:28:38 --> 00:28:44
repositories. They found bug statements

00:28:41 --> 00:28:46
that are very clear uh and they found

00:28:44 --> 00:28:48
ProQuest that actually solve those bug

00:28:46 --> 00:28:50
statements with unit tests and

00:28:47 --> 00:28:53
everything. So there is an existing

00:28:49 --> 00:28:55
corpus on GitHub of tasks that that the

00:28:52 --> 00:28:57
AIS can can solve and you can also

00:28:54 --> 00:29:01
generate them. Those are not too hard to

00:28:56 --> 00:29:05
generate uh you know what's called

00:29:00 --> 00:29:07
synthetic uh data. Uh uh but but you're

00:29:04 --> 00:29:10
right it's not infinitely scalable um

00:29:06 --> 00:29:12
because you you some human verifiers

00:29:09 --> 00:29:13
till need to kind of look at the at the

00:29:11 --> 00:29:15
task but maybe the foundation models

00:29:12 --> 00:29:16
have found a way to have the synthetic

00:29:14 --> 00:29:17
training go all the way

00:29:15 --> 00:29:19
>> right and then what's happening I think

00:29:16 --> 00:29:20
because what's happening is the

00:29:18 --> 00:29:21
foundation model companies are in some

00:29:19 --> 00:29:23
cases they are hire they're actually

00:29:20 --> 00:29:24
hiring human experts to generate new

00:29:22 --> 00:29:25
training data. Yes.

00:29:23 --> 00:29:27
>> So they're actually hiring

00:29:24 --> 00:29:29
mathematicians and physicists and coders

00:29:26 --> 00:29:30
to basically sit and you know they're

00:29:28 --> 00:29:32
hiring they're they're hiring

00:29:30 --> 00:29:32
human programmers putting them on the

00:29:31 --> 00:29:36
cocaine. Yes.

00:29:32 --> 00:29:38
>> Um and having them probably coffee um uh

00:29:36 --> 00:29:39
and having them actually write code and

00:29:37 --> 00:29:41
then and then write code in a way where

00:29:38 --> 00:29:42
there's a known result of the code

00:29:40 --> 00:29:44
running such that the this RO loop can

00:29:42 --> 00:29:45
be trained properly. That's right. And

00:29:43 --> 00:29:47
then the other the other and then the

00:29:44 --> 00:29:48
other thing these companies are doing is

00:29:46 --> 00:29:50
as you said they're building systems

00:29:47 --> 00:29:52
where the software itself generates the

00:29:49 --> 00:29:54
training data, generates the tests,

00:29:51 --> 00:29:56
generates the valid the validated

00:29:53 --> 00:29:56
results and and that's soal synthetic

00:29:55 --> 00:29:59
training data.

00:29:55 --> 00:30:01
>> That's right. And but yeah, but but

00:29:58 --> 00:30:03
again those work in the very hard

00:30:00 --> 00:30:04
omains. It works to some extent in the

00:30:02 --> 00:30:06
software domains

00:30:03 --> 00:30:07
>> and I think there's some transfer

00:30:05 --> 00:30:09
learning we can you can see the

00:30:06 --> 00:30:11
reasoning work when it comes to you know

00:30:08 --> 00:30:13
tools like deep research and things like

00:30:10 --> 00:30:16
that but we're not making as fast as

00:30:12 --> 00:30:18
progress in the in the more soft domain.

00:30:15 --> 00:30:21
>> So so say softer domains meaning like

00:30:17 --> 00:30:23
domains in which it's harder harder or

00:30:20 --> 00:30:25
even impossible to actually verify

00:30:22 --> 00:30:27
correctness of of result in a sort of a

00:30:24 --> 00:30:29
deterministic factual grounded

00:30:26 --> 00:30:30
>> non-controversial way. Like if you have

00:30:28 --> 00:30:36
a a chronic disease, you could you could

00:30:30 --> 00:30:39
have you know you have a POTS or uh you

00:30:35 --> 00:30:40
know whatever EDS syndrome or and

00:30:38 --> 00:30:43
they're all they're all clusters and

00:30:39 --> 00:30:45
it's because it it is the domain of

00:30:42 --> 00:30:47
abstraction. It is not as concrete as

00:30:44 --> 00:30:49
code and math and things like that. So I

00:30:46 --> 00:30:49
think there's still a long ways to go

00:30:48 --> 00:30:50
there.

00:30:48 --> 00:30:52
>> Right. So sort of the more concrete the

00:30:49 --> 00:30:54
problem like it's the concretness of the

00:30:51 --> 00:30:55
problem that is the key variable not the

00:30:53 --> 00:30:56
difficulty of the problem. Would that be

00:30:54 --> 00:30:58
a way to think about it?

00:30:55 --> 00:31:01
>> Yeah. Yeah. I think the the uh

00:30:57 --> 00:31:03
concreteness in a sense of can you get a

00:31:00 --> 00:31:04
true or false ver verifiable

00:31:02 --> 00:31:06
>> right but like in any domain in any

00:31:03 --> 00:31:07
domain of human effort in which there's

00:31:05 --> 00:31:08
a verifiable answer we should expect

00:31:06 --> 00:31:08
extremely rapid progress.

00:31:07 --> 00:31:09
>> Yes.

00:31:08 --> 00:31:10
>> Right.

00:31:08 --> 00:31:11
>> Yes. Absolutely. And I I think that's

00:31:09 --> 00:31:12
what we're saying.

00:31:10 --> 00:31:13
>> Right. And that and that for sure

00:31:11 --> 00:31:15
includes math. That for sure includes

00:31:12 --> 00:31:15
physics for sure includes chemistry. For

00:31:14 --> 00:31:16
sure includes

00:31:14 --> 00:31:17
>> large areas of code.

00:31:15 --> 00:31:18
>> That's right.

00:31:16 --> 00:31:19
>> Right. What what else does that include

00:31:17 --> 00:31:21
do you think?

00:31:18 --> 00:31:23
>> Bio like we're seeing with a protein

00:31:20 --> 00:31:24
>> genomic. Yeah. Okay. Right.

00:31:22 --> 00:31:29
>> Yeah. Yeah. Things like that. I think

00:31:24 --> 00:31:31
some some areas of robotics, right? Um

00:31:28 --> 00:31:33
there's a clear outcome, right?

00:31:30 --> 00:31:34
>> Uh but but it's not that many. I mean,

00:31:32 --> 00:31:35
surprisingly,

00:31:33 --> 00:31:37
>> well, it depends.

00:31:34 --> 00:31:38
>> Yeah, depends on your point of view.

00:31:36 --> 00:31:40
That's some people might say that's a

00:31:37 --> 00:31:42
lot. Um so, uh and then um you you

00:31:40 --> 00:31:43
mentioned that we you mentioned the pace

00:31:41 --> 00:31:44
of improvement. So, what would you

00:31:42 --> 00:31:46
expect from the pace of improvement

00:31:43 --> 00:31:48
going forward for this?

00:31:45 --> 00:31:51
>> I I think we're we're ripping on coding.

00:31:47 --> 00:31:53
Like I think I think it's just it's

00:31:50 --> 00:31:56
going like I think it's going to be like

00:31:52 --> 00:31:59
what we're working on with with agent

00:31:55 --> 00:32:00
floor right now um is by by next year we

00:31:58 --> 00:32:03
think you're going to be sitting instead

00:31:59 --> 00:32:05
of rep in front of replet and you're

00:32:02 --> 00:32:08
shooting off multiple agents at a time.

00:32:04 --> 00:32:11
You're like planning a new feature. Um

00:32:07 --> 00:32:13
so I I want you know social network on

00:32:10 --> 00:32:17
top of my storefront and another one is

00:32:12 --> 00:32:19
like hey um refactor the database. Hey,

00:32:16 --> 00:32:20
in and you're running parallel agents.

00:32:18 --> 00:32:21
So, you have five 10 agents kind of

00:32:19 --> 00:32:23
working in the background and they're

00:32:20 --> 00:32:26
merging the code and taking care of all

00:32:22 --> 00:32:27
of that, but you also have a really nice

00:32:25 --> 00:32:29
interface on top of that that you're

00:32:26 --> 00:32:31
doing design and you're interacting with

00:32:28 --> 00:32:33
AI in a more creative way. Uh maybe

00:32:30 --> 00:32:36
using visuals and charts and things like

00:32:32 --> 00:32:38
that. So, there's a multimodal angle of

00:32:35 --> 00:32:41
that of that interaction. So I think you

00:32:37 --> 00:32:43
know creating software is going to be

00:32:40 --> 00:32:46
such an exciting

00:32:42 --> 00:32:50
uh area and and and I think that the lay

00:32:45 --> 00:32:51
person will be as good as a what a

00:32:49 --> 00:32:53
senior software engineer that works at

00:32:50 --> 00:32:57
Google uh is today. So I think I think

00:32:52 --> 00:33:00
that's happening very soon. Um but but

00:32:56 --> 00:33:01
you know I don't see them and be curious

00:32:59 --> 00:33:04
about your point of view but like my

00:33:00 --> 00:33:07
experience between as as a sort of a you

00:33:03 --> 00:33:09
know on the let's say healthcare side or

00:33:06 --> 00:33:11
more you know write me an essay side or

00:33:08 --> 00:33:13
more creative side haven't seen as much

00:33:10 --> 00:33:15
of a rapid improvement as what we're

00:33:12 --> 00:33:16
seeing in code. So so I think I think

00:33:14 --> 00:33:19
code is going to go to the moon. Math is

00:33:15 --> 00:33:22
probably as well some some you know

00:33:18 --> 00:33:23
scientific domains bio things like that

00:33:21 --> 00:33:25
hose are are going to move really fast.

00:33:22 --> 00:33:27
>> Yeah. So there's this there's this

00:33:24 --> 00:33:29
weird dynamic see if you

00:33:26 --> 00:33:30
agree with this and Eric also curious

00:33:28 --> 00:33:31
your point of view on this like there's

00:33:29 --> 00:33:32
this weird dynamic that we have and we

00:33:30 --> 00:33:33
have this in the office here a lot and I

00:33:31 --> 00:33:34
also have this with like the leading of

00:33:32 --> 00:33:35
entrepreneurs a lot which is this thing

00:33:33 --> 00:33:37
of like

00:33:34 --> 00:33:38
>> like wow this is the most amazing

00:33:36 --> 00:33:39
technology ever and it's moving really

00:33:37 --> 00:33:42
fast and yet we're still like really

00:33:38 --> 00:33:44
disappointed um and like it's not moving

00:33:41 --> 00:33:46
fast enough and like it's like maybe

00:33:43 --> 00:33:47
right on the verge of stalling out

00:33:45 --> 00:33:49
>> and like you know we should both be like

00:33:46 --> 00:33:50
hyper excited but also on the verge of

00:33:48 --> 00:33:52
like slitting our wrists because like

00:33:49 --> 00:33:52
you know the gravy train is coming to an

00:33:51 --> 00:33:54
end,

00:33:51 --> 00:33:56
>> right? And and I always wonder it's like

00:33:53 --> 00:33:57
you know on the one hand it's like okay

00:33:55 --> 00:33:59
like you know not all I don't know

00:33:56 --> 00:34:00
ladders go to the moon like just because

00:33:58 --> 00:34:01
something you know looks like it works

00:33:59 --> 00:34:02
or you know doesn't mean it's going to

00:34:00 --> 00:34:04
you know be able to you're going to be

00:34:01 --> 00:34:06
able to scale it up and have it work you

00:34:03 --> 00:34:07
know to the fullest extent. Um uh you

00:34:05 --> 00:34:09
know so like it's important to like

00:34:06 --> 00:34:11
recognize practical limits and not just

00:34:08 --> 00:34:12
extrapolate everything to infinity. Um

00:34:10 --> 00:34:14
on the other hand like you know we're

00:34:11 --> 00:34:15
dealing with magic here that we I think

00:34:13 --> 00:34:17
probably all would have thought was

00:34:14 --> 00:34:17
impossible 5 years ago or certainly 10

00:34:16 --> 00:34:19
years ago.

00:34:16 --> 00:34:20
>> Like I I didn't you know look I I you

00:34:18 --> 00:34:22
know I got my CS degree in the late '

00:34:19 --> 00:34:23
80s early 90s. I I never I didn't think

00:34:21 --> 00:34:25
I would live to see any of this, right?

00:34:22 --> 00:34:27
Like this is just amazing that this is

00:34:24 --> 00:34:27
actually happening in in in my lifetime.

00:34:26 --> 00:34:29
>> Um

00:34:26 --> 00:34:31
>> but but there's a huge bet on AGI,

00:34:28 --> 00:34:33
right? like whether it's the foundation

00:34:30 --> 00:34:35
models uh I think you know now the

00:34:32 --> 00:34:38
ntire US economy is sort of a bet on

00:34:34 --> 00:34:40
AGI and and there are crucial questions

00:34:37 --> 00:34:43
to ask whether are we on track to AGI or

00:34:40 --> 00:34:44
not because there are some ways that I

00:34:42 --> 00:34:48
can tell you it doesn't seem like we're

00:34:43 --> 00:34:49
on track to AGI because we uh because

00:34:47 --> 00:34:51
there doesn't seem to be transfer

00:34:48 --> 00:34:54
learning across these domains that are

00:34:50 --> 00:34:56
you know significance right so

00:34:53 --> 00:34:58
if we get a lot better at code

00:34:55 --> 00:35:00
we're not immediately getting better at

00:34:57 --> 00:35:02
like generalized reasoning we need to go

00:34:59 --> 00:35:04
also you know get training data and

00:35:01 --> 00:35:08
create RL environment for bio or

00:35:03 --> 00:35:10
chemistry or physics or math or law or

00:35:07 --> 00:35:12
so so and this this has been the sort of

00:35:09 --> 00:35:15
point of discussion now in the AI

00:35:11 --> 00:35:18
community after the Darkish and Richard

00:35:14 --> 00:35:20
Sutton uh interview where uh you know

00:35:17 --> 00:35:23
Richard Sutton kind of poured this cold

00:35:19 --> 00:35:25
water on the on the bitter lesson. So

00:35:22 --> 00:35:27
everyone was using this uh essay that he

00:35:24 --> 00:35:30
wrote called the bitter lesson. The idea

00:35:26 --> 00:35:35
is that there are um infinitely scalable

00:35:29 --> 00:35:38
ways of uh doing uh uh AI research and

00:35:34 --> 00:35:40
and and anytime you can pour more

00:35:37 --> 00:35:42
compute and more data and go more

00:35:39 --> 00:35:44
performance out you're just you know

00:35:41 --> 00:35:48
that's the ultimate way of getting to

00:35:43 --> 00:35:51
AGI and some people you know interpreted

00:35:47 --> 00:35:53
that interview that perhaps he's

00:35:50 --> 00:35:57
doubtful that even we're even on a on a

00:35:52 --> 00:35:59
bitter uh lessened path here and perhaps

00:35:56 --> 00:36:02
the current training regime is actually

00:35:58 --> 00:36:04
very much the opposite in which we we

00:36:01 --> 00:36:06
are so dependent on human data and human

00:36:03 --> 00:36:10
notation and and all of that stuff. So

00:36:06 --> 00:36:12
I think the I I agree with you. I mean

00:36:09 --> 00:36:14
as a company we're we're excited about

00:36:11 --> 00:36:16
where things are headed but but there's

00:36:13 --> 00:36:18
a question of like are we on

00:36:15 --> 00:36:21
track to AGI or not and be curious what

00:36:17 --> 00:36:22
you think. So, so and you know Ilia I

00:36:20 --> 00:36:24
think you know Ilioskcover makes a makes

00:36:21 --> 00:36:25
a specific form of this argument which

00:36:23 --> 00:36:26
is basically like we're just literally

00:36:24 --> 00:36:28
running out of training data. It's a

00:36:25 --> 00:36:29
fossil fuel argument right like if we

00:36:27 --> 00:36:30
slurped all the training fundamentally

00:36:28 --> 00:36:31
we've slurped all the data off the

00:36:29 --> 00:36:33
internet that is where almost all the

00:36:30 --> 00:36:34
data is at this point. There's a little

00:36:32 --> 00:36:35
bit more data that's in like you know

00:36:33 --> 00:36:37
private dark pool somewhere that we're

00:36:34 --> 00:36:38
going to go get but like

00:36:36 --> 00:36:39
>> we have it all and then right we're

00:36:37 --> 00:36:40
in this business now trying to

00:36:38 --> 00:36:42
generate new data but generating new

00:36:39 --> 00:36:43
data is hard and expensive you know

00:36:41 --> 00:36:44
compared to just like slurping things

00:36:42 --> 00:36:46
off the internet. So

00:36:43 --> 00:36:47
>> there are these arguments. Um you know

00:36:45 --> 00:36:48
having said that you know you get into

00:36:46 --> 00:36:49
definitional questions here really quick

00:36:47 --> 00:36:50
which are kind of a rabbit hole but

00:36:48 --> 00:36:52
having said that like you mentioned

00:36:49 --> 00:36:53
transfer learning. So transfer learning

00:36:51 --> 00:36:55
is the ability of the machine to right

00:36:52 --> 00:36:56
o be an expert in one domain and then

00:36:54 --> 00:36:57
generalize that into another

00:36:55 --> 00:36:58
domain.

00:36:56 --> 00:37:00
>> My answer to that is like have you met

00:36:57 --> 00:37:01
people?

00:36:59 --> 00:37:04
>> Um and how many people do you know are

00:37:00 --> 00:37:06
able to do transfer learning?

00:37:03 --> 00:37:08
>> Not many. Right. Well because there's

00:37:05 --> 00:37:10
>> quite the opposite actually. The nerdier

00:37:07 --> 00:37:12
they are in a certain domain the kind of

00:37:09 --> 00:37:14
you know often they have blind spots. We

00:37:11 --> 00:37:15
joke about how everyone's just [ __ ]

00:37:13 --> 00:37:17
in one area or they make some like

00:37:14 --> 00:37:19
massive mistake and and like don't trust

00:37:16 --> 00:37:19
hem on this but on this other topic you

00:37:18 --> 00:37:20
know

00:37:18 --> 00:37:21
>> right? Yeah. Well and this is a

00:37:19 --> 00:37:22
well-known thing among like for example

00:37:20 --> 00:37:23
public intellect. So this happens

00:37:22 --> 00:37:25
there's actually been whole books

00:37:22 --> 00:37:26
written about this on so-called public

00:37:24 --> 00:37:27
intellectuals. So you get these people

00:37:25 --> 00:37:29
who show up on TV and they're experts

00:37:26 --> 00:37:30
and what happens is they're like an

00:37:28 --> 00:37:31
expert in economics right and then they

00:37:29 --> 00:37:32
show up on TV and they talk about

00:37:30 --> 00:37:34
politics and they don't know anything

00:37:31 --> 00:37:36
about politics right or they don't know

00:37:33 --> 00:37:37
anything about like medicine or they

00:37:35 --> 00:37:38
don't know anything about the law or

00:37:36 --> 00:37:39
they don't know anything about

00:37:37 --> 00:37:41
computers. You know, this is the Paul

00:37:38 --> 00:37:42
Gregman talking about how the internet's

00:37:40 --> 00:37:42
going to be no more significant than the

00:37:41 --> 00:37:43
fax machine.

00:37:41 --> 00:37:44
>> Facts.

00:37:42 --> 00:37:45
>> He's a brilliant economist. He has no

00:37:43 --> 00:37:46
idea what a how a computer works.

00:37:44 --> 00:37:50
>> Is he a brilliant economist?

00:37:45 --> 00:37:53
>> Well, at one at one point at one point

00:37:49 --> 00:37:55
, let's get even if even if

00:37:52 --> 00:37:57
he's a brilliant Well, this is the thing

00:37:54 --> 00:37:57
like what does that mean? Like should a

00:37:56 --> 00:37:59
brilliant economist be able to

00:37:56 --> 00:38:01
extrapolate, you know, the internet is

00:37:58 --> 00:38:03
a good question. But um but the point

00:38:00 --> 00:38:04
being like even if he is a you know,

00:38:02 --> 00:38:07
take any take anybody Oh, by the way, or

00:38:03 --> 00:38:08
like Ein like Einstein's like actually

00:38:06 --> 00:38:10
my favorite example. I think you'd agree

00:38:07 --> 00:38:12
Einstein was a brilliant physicist.

00:38:09 --> 00:38:13
>> He was like a he was he was a Stalinist.

00:38:11 --> 00:38:15
Like he was just he was Yeah. He was a

00:38:12 --> 00:38:16
socialist and he was a Stalinist and he

00:38:14 --> 00:38:17
was like he thought like Stalin was

00:38:15 --> 00:38:18
fantastic.

00:38:16 --> 00:38:19
>> Out still.

00:38:17 --> 00:38:20
>> Yeah. Okay. All right.

00:38:18 --> 00:38:22
>> True socialism.

00:38:19 --> 00:38:25
>> All right. All right. Einstein, you

00:38:21 --> 00:38:26
know, I'll I'll

00:38:24 --> 00:38:28
take your word for it. But like

00:38:25 --> 00:38:29
once he got into politics, he was just

00:38:27 --> 00:38:30
like totally loopy or or you know, even

00:38:28 --> 00:38:32
right or wrong. It's just he just

00:38:29 --> 00:38:33
sounded like all of a sudden like an

00:38:31 --> 00:38:35
undergraduate lunatic, like somebody in

00:38:32 --> 00:38:36
a dorm room. Like he there was no

00:38:34 --> 00:38:38
transfer learning from physics into

00:38:35 --> 00:38:40
politics. like he he didn't listen right

00:38:37 --> 00:38:41
or wrong he didn't there was no there

00:38:39 --> 00:38:43
was clearly there was nothing new in his

00:38:40 --> 00:38:44
political analysis it was the same wrote

00:38:42 --> 00:38:46
routine [ __ ] you get out of

00:38:44 --> 00:38:48
>> you know yeah so so in a way the

00:38:45 --> 00:38:51
argument you're making is like we maybe

00:38:47 --> 00:38:53
already a human level AI I mean perhaps

00:38:50 --> 00:38:55
the definition of AGI is is is something

00:38:52 --> 00:38:56
totally different is like above human

00:38:54 --> 00:38:58
level that something that totally

00:38:55 --> 00:38:59
generalizes across domains it's it's not

00:38:57 --> 00:39:01
something that we've seen

00:38:58 --> 00:39:02
>> yeah like we've ideal yeah I was saying

00:39:00 --> 00:39:03
we we've we've and you know look we

00:39:01 --> 00:39:06
should we should shoot big but we we've

00:39:02 --> 00:39:08
idealized a a we've idealized a goal

00:39:05 --> 00:39:10
um that may be idealized in a way that

00:39:07 --> 00:39:11
like number one it's just it it's it's

00:39:09 --> 00:39:12
like so far beyond what people can do

00:39:10 --> 00:39:14
that it's you're no longer it's no

00:39:12 --> 00:39:16
longer relevant comparison to people and

00:39:13 --> 00:39:17
usually AGI is defined as you know

00:39:15 --> 00:39:18
able to do everything better than a

00:39:16 --> 00:39:19
person can

00:39:17 --> 00:39:20
>> and it's like well okay so if doing

00:39:18 --> 00:39:22
everything better than a person can it's

00:39:20 --> 00:39:23
like if a person can't do any transfer

00:39:21 --> 00:39:25
learning at all

00:39:22 --> 00:39:26
>> right doing even a little little bit a

00:39:24 --> 00:39:28
marginal bit might might actually be

00:39:26 --> 00:39:29
tter or it might not matter just

00:39:27 --> 00:39:31
because no no human can do it and so

00:39:28 --> 00:39:32
therefore you just you just stack up the

00:39:30 --> 00:39:34
domains there's also this well-known

00:39:31 --> 00:39:35
phenomenon in AI with you know t

00:39:33 --> 00:39:37
ypically this works the other way which

00:39:34 --> 00:39:38
there's a phenomenon AI AI engineers

00:39:36 --> 00:39:40
always complain about and scientists

00:39:37 --> 00:39:41
always complain about which is the

00:39:39 --> 00:39:43
definition of AI is always the next

00:39:40 --> 00:39:45
hing that that the machine can't do and

00:39:42 --> 00:39:46
so like the definition for of AI for a

00:39:44 --> 00:39:47
long time was like can it beat humans at

00:39:45 --> 00:39:48
chess

00:39:46 --> 00:39:50
>> and then the minute it could beat humans

00:39:47 --> 00:39:51
at chess that was no longer AI that was

00:39:49 --> 00:39:53
just like oh that's just like boring

00:39:50 --> 00:39:54
>> that's computer chess it became

00:39:52 --> 00:39:55
>> computer chess it's just like boring and

00:39:53 --> 00:39:57
now it's an app on your iPhone and

00:39:54 --> 00:39:58
nobody nobody and nobody cares right and

00:39:56 --> 00:40:00
it's immediately then

00:39:57 --> 00:40:01
>> cheering test was the test and then we

00:39:59 --> 00:40:02
passed it and nobody

00:40:00 --> 00:40:04
>> we blew this is a really big deal

00:40:01 --> 00:40:05
>> there was no celebration

00:40:03 --> 00:40:07
>> there was no parties That's exactly

00:40:04 --> 00:40:08
right. There was no for 80 years the

00:40:06 --> 00:40:10
Turing test I mean they made a movie

00:40:07 --> 00:40:11
about it like the whole thing that was

00:40:09 --> 00:40:12
the thing and like we blew right through

00:40:10 --> 00:40:14
it and nobody even registered it. Nobody

00:40:12 --> 00:40:15
cares. It gets no credit for it. We're

00:40:13 --> 00:40:17
just like ah it's still you know

00:40:14 --> 00:40:19
complete p piece of [ __ ] like

00:40:16 --> 00:40:21
>> right and so there's this thing where so

00:40:18 --> 00:40:22
the AI scientists are are are used to

00:40:20 --> 00:40:23
complaining basically that they're that

00:40:21 --> 00:40:25
hey're they're being they're always

00:40:22 --> 00:40:26
being judged against the next thing as

00:40:24 --> 00:40:27
opposed to all the things they've

00:40:25 --> 00:40:29
already they've already solved.

00:40:26 --> 00:40:30
>> Um uh but but that's maybe the other

00:40:28 --> 00:40:33
side of it which is they're also putting

00:40:29 --> 00:40:34
out for themselves um an unreasonable

00:40:32 --> 00:40:36
goal. an an unreasonable goal and then

00:40:33 --> 00:40:38
doing this sort of self flagagillation

00:40:35 --> 00:40:39
kind of along the way and and and I I

00:40:37 --> 00:40:40
kind of wonder yeah I I wonder kind of

00:40:38 --> 00:40:42
which way that cuts.

00:40:39 --> 00:40:43
>> Yeah. Yeah. It's an interesting question

00:40:41 --> 00:40:46
like I started thinking about this idea

00:40:42 --> 00:40:49
of like it doesn't matter whether it's

00:40:45 --> 00:40:52
truly AGI and the way I define AGI is

00:40:48 --> 00:40:54
that you put in a AI system in any

00:40:51 --> 00:40:56
environment and efficiently learns right

00:40:53 --> 00:40:58
>> um you know it doesn't have to have that

00:40:55 --> 00:40:59
much prior knowledge in order to kind of

00:40:57 --> 00:41:01
learn something but also can transfer

00:40:58 --> 00:41:04
that knowledge across different domains.

00:41:00 --> 00:41:07
Um but you know we can get to like

00:41:03 --> 00:41:10
functional AGI and what functional AGI

00:41:06 --> 00:41:13
is is just yeah collect data on every uh

00:41:09 --> 00:41:16
useful uh economic activity in uh in the

00:41:12 --> 00:41:18
world today and train an LLM on top of

00:41:15 --> 00:41:20
that or train the same foundation model

00:41:17 --> 00:41:22
on top of that and and we we'll go we'll

00:41:19 --> 00:41:24
target every sector economy and and you

00:41:21 --> 00:41:26
can automate a big part of labor that

00:41:23 --> 00:41:28
way. So I think I think yeah I think

00:41:26 --> 00:41:31
we're on that track for sure.

00:41:27 --> 00:41:32
>> Right. um you tweeted after GBG5 came

00:41:30 --> 00:41:34
out that you were feeling the

00:41:31 --> 00:41:36
diminishing returns. Yeah. What were you

00:41:33 --> 00:41:37
expecting and but and and what needs to

00:41:35 --> 00:41:39
be done? Do we need another breakthrough

00:41:36 --> 00:41:39
to get back to the pace of growth or

00:41:38 --> 00:41:41
what are your thoughts there?

00:41:38 --> 00:41:43
>> I mean this this whole discussion is is

00:41:40 --> 00:41:47
ort of about that and and my feeling is

00:41:42 --> 00:41:50
that uh you know GPT5 uh got good at

00:41:46 --> 00:41:52
verifiable domains. It didn't feel that

00:41:49 --> 00:41:54
much better at anything else. the more

00:41:51 --> 00:41:56
human angle of it. It felt like it

00:41:53 --> 00:42:00
regressed and like you had this uh sort

00:41:55 --> 00:42:03
of uh Reddit pitchfork uh sort of uh

00:41:59 --> 00:42:05
movement against against Sam and Open AI

00:42:02 --> 00:42:07
because they felt like they lost a

00:42:04 --> 00:42:12
friend. Gupta felt a lot more human and

00:42:06 --> 00:42:14
closer uh whereas GT5 felt a lot more

00:42:11 --> 00:42:15
robotic, you know, very in its head kind

00:42:13 --> 00:42:18
of trying to think through through

00:42:14 --> 00:42:20
everything. And um and so I I I would

00:42:17 --> 00:42:24
have just expected like when we went

00:42:19 --> 00:42:26
from GP2 2 to 3, it was clear it was

00:42:23 --> 00:42:29
getting a lot more human. It was uh a

00:42:25 --> 00:42:31
lot closer to our experience. It can you

00:42:28 --> 00:42:33
can feel like it's actually all it gets

00:42:30 --> 00:42:35
me like there's something about it that

00:42:32 --> 00:42:40
understands the world better. Similarly

00:42:34 --> 00:42:43
3 to four to five didn't feel like it

00:42:39 --> 00:42:46
was a better overall

00:42:42 --> 00:42:48
being as it were. But is that is that is

00:42:45 --> 00:42:51
that a is the question there

00:42:48 --> 00:42:54
like is it emotionality? Is it partly

00:42:50 --> 00:42:56
emotionality but but again partly like I

00:42:53 --> 00:42:59
like to ask models like very

00:42:55 --> 00:43:02
controversial uh things. Um can it

00:42:58 --> 00:43:03
reason through

00:43:01 --> 00:43:07
uh I don't know how deep we want to go

00:43:02 --> 00:43:08
here but like um what happened with

00:43:06 --> 00:43:10
World Trade 7,

00:43:07 --> 00:43:10
>> right?

00:43:09 --> 00:43:12
>> Sure.

00:43:09 --> 00:43:14
>> It's an interesting question, right?

00:43:11 --> 00:43:16
Like I'm not I'm not putting out a

00:43:13 --> 00:43:18
theory, but like it's interesting like

00:43:15 --> 00:43:20
how did it you know and and can it can

00:43:17 --> 00:43:23
it think through controversial questions

00:43:20 --> 00:43:26
>> in the same way that it can go think

00:43:22 --> 00:43:28
through a coding problem and there

00:43:25 --> 00:43:30
hasn't been any movement there like the

00:43:27 --> 00:43:31
all the reasoning and all of that stuff

00:43:29 --> 00:43:34
I haven't se and not just that you know

00:43:30 --> 00:43:37
that's a cute example but like um co

00:43:33 --> 00:43:37
right like you know the origins of co

00:43:36 --> 00:43:41
right

00:43:36 --> 00:43:42
>> you know go you know dig up GPT4 or

00:43:40 --> 00:43:44
other models

00:43:41 --> 00:43:46
and go to GPT5, you're not going to find

00:43:43 --> 00:43:47
that much difference of okay, let's

00:43:45 --> 00:43:49
reason together. Let's try to figure out

00:43:46 --> 00:43:51
what was the origins of CO because it's

00:43:48 --> 00:43:53
till an unanswered question, you know,

00:43:50 --> 00:43:54
and I don't see them making progress in

00:43:52 --> 00:43:55
that. I mean, you play a lot with them.

00:43:53 --> 00:43:56
Do you feel like

00:43:54 --> 00:43:57
>> I use it differently? I don't know,

00:43:55 --> 00:44:00
maybe I have different expectations. Um,

00:43:56 --> 00:44:02
I I'm I the way I my main use case

00:43:59 --> 00:44:04
actually is sort of sort of PhD and

00:44:01 --> 00:44:05
everything at my beck and call. Um, and

00:44:03 --> 00:44:07
so I'm I'm trying to get it to explain

00:44:04 --> 00:44:08
things to me more than I'm trying to

00:44:06 --> 00:44:10
like, you know, have conversations with

00:44:07 --> 00:44:10
it. Maybe maybe I'm just unusual with

00:44:09 --> 00:44:11
at. But

00:44:09 --> 00:44:13
>> and that that that gets back

00:44:10 --> 00:44:15
>> well. So what I what I what I found

00:44:12 --> 00:44:17
specifically is uh a combination of like

00:44:14 --> 00:44:19
GPT5 Pro plus deep reasoning or like

00:44:16 --> 00:44:22
Rock 4 heavy like the you know the the

00:44:18 --> 00:44:24
highest end models um u like that um you

00:44:21 --> 00:44:25
know they now basically generate 30 to

00:44:23 --> 00:44:28
40 page you know essentially books on

00:44:24 --> 00:44:30
demand on any topic. Um and so anytime I

00:44:27 --> 00:44:31
get curious about something you just

00:44:29 --> 00:44:33
ake it maybe it's my version of it but

00:44:30 --> 00:44:35
it's something like I don't like a good

00:44:32 --> 00:44:37
here's a good example. um when when when

00:44:34 --> 00:44:38
a when an advanced economy puts a tariff

00:44:36 --> 00:44:40
on on on a raw m you know on a raw

00:44:37 --> 00:44:40
material or on a finished good like who

00:44:39 --> 00:44:42
pays

00:44:39 --> 00:44:43
>> you know is it is it the consumer is it

00:44:41 --> 00:44:45
he is it the importer is it the

00:44:42 --> 00:44:46
xporter or is it the producer and and

00:44:44 --> 00:44:48
this actually a very complicated it

00:44:45 --> 00:44:49
urns out very complicated question it's

00:44:47 --> 00:44:51
a big big big thing that economists

00:44:48 --> 00:44:52
tudy a lot and it's just like okay who

00:44:50 --> 00:44:53
you know who pays and what I found like

00:44:51 --> 00:44:54
for that kind of thing is it's

00:44:52 --> 00:44:56
outstanding

00:44:53 --> 00:44:58
>> well well but but it's outstanding at um

00:44:55 --> 00:45:00
sort of going out of the web getting

00:44:57 --> 00:45:01
information synthesizing it

00:44:59 --> 00:45:04
>> correct it it gives me it gives me a

00:45:00 --> 00:45:06
synthesized 20 30 40 p basically tops

00:45:03 --> 00:45:08
out 40 p 40 40 pages of PDF. Yeah.

00:45:05 --> 00:45:10
>> Um uh but I can get I can get up to 40

00:45:07 --> 00:45:11
pages of PDF but it's a completely

00:45:09 --> 00:45:13
coherent and as far as I can tell for

00:45:10 --> 00:45:15
everything I've cross-cheed a completely

00:45:12 --> 00:45:17
like it like world class like if I hired

00:45:14 --> 00:45:19
you know for a question like that if I

00:45:16 --> 00:45:21
hired like a great you know econ

00:45:18 --> 00:45:22
posttock at Stanford who just like went

00:45:20 --> 00:45:23
out and did that work like it would

00:45:21 --> 00:45:25
maybe be that good.

00:45:22 --> 00:45:27
>> Yeah. Um but then but then of course the

00:45:24 --> 00:45:29
significance is it's like it's like you

00:45:26 --> 00:45:30
know at least for this is true for many

00:45:28 --> 00:45:30
domains you know kind of PhD and

00:45:29 --> 00:45:33
everything and so

00:45:30 --> 00:45:34
>> but but this is synthesizing knowledge

00:45:32 --> 00:45:36
not trying to create new knowledge.

00:45:33 --> 00:45:37
>> Well but this this gets to the this sort

00:45:35 --> 00:45:38
of you know of course the you get into

00:45:36 --> 00:45:40
the angels dancing on the head of a pin

00:45:37 --> 00:45:41
thing which is like what what you know

00:45:39 --> 00:45:43
hat's the difference how many how much

00:45:40 --> 00:45:45
new knowledge ever actually is there

00:45:42 --> 00:45:46
anyway? What do you actually expect from

00:45:44 --> 00:45:48
people when you ask them questions? Um,

00:45:46 --> 00:45:49
and so what what I'm looking for is

00:45:47 --> 00:45:51
like, yes, explain this to me in like

00:45:48 --> 00:45:53
the the the clearest, most

00:45:50 --> 00:45:54
sophisticated, most complex, most like

00:45:52 --> 00:45:56
complete way that it's possible for

00:45:53 --> 00:45:58
somebody to, you know, for a real expert

00:45:55 --> 00:45:58
o be able to to to explain things to

00:45:57 --> 00:46:00
me.

00:45:57 --> 00:46:01
>> Um, and that's what I use it for. And

00:45:59 --> 00:46:02
again, as far as I can tell from the

00:46:00 --> 00:46:03
crossing, like I'm getting, you know,

00:46:01 --> 00:46:05
like almost like basically 100 out of

00:46:02 --> 00:46:08
100, like I don't even think I've had an

00:46:04 --> 00:46:09
issue in months where it's like had had

00:46:07 --> 00:46:10
a problem in it.

00:46:08 --> 00:46:12
>> And it's like, yeah, you can say, yeah,

00:46:10 --> 00:46:13
synthesizing is supposed to create new

00:46:11 --> 00:46:14
information, but like it's it's

00:46:12 --> 00:46:16
generating a 40 p. He's basically

00:46:13 --> 00:46:16
generating a 40-page book.

00:46:15 --> 00:46:19
>> That's amazing.

00:46:15 --> 00:46:20
>> That's like incredibly like fluid. It's,

00:46:18 --> 00:46:23
you know, it's it's it's it's you know,

00:46:19 --> 00:46:24
the the logical coherence of the entire

00:46:22 --> 00:46:27
like it's it's a great writing. Like if

00:46:23 --> 00:46:28
you if you evaluated an a a human

00:46:26 --> 00:46:30
author on it, you would say, "Wow,

00:46:27 --> 00:46:32
that's a great author." You know, do are

00:46:29 --> 00:46:33
people who write books, you know,

00:46:31 --> 00:46:35
creating new knowledge? Well, yeah.

00:46:32 --> 00:46:37
Well, sort of not because a lot of what

00:46:34 --> 00:46:38
hey're doing is building on everything

00:46:36 --> 00:46:40
that came before them is synthesizing a

00:46:37 --> 00:46:42
mind, but also like a book is a creative

00:46:39 --> 00:46:44
accomplishment, right? And so,

00:46:41 --> 00:46:46
>> yeah, one of the thing I'm I'm I'm I'm

00:46:43 --> 00:46:50
interested in I'm hoping AI could help

00:46:46 --> 00:46:52
us solve is just like how confusing the

00:46:49 --> 00:46:54
information ecosystem right now. You

00:46:51 --> 00:46:55
know, everything feels like propaganda.

00:46:53 --> 00:46:57
Like it doesn't feel like you're getting

00:46:54 --> 00:46:59
real information from anywhere. So, I I

00:46:56 --> 00:47:00
really want an AI that could help me

00:46:58 --> 00:47:02
reason from first principles about

00:46:59 --> 00:47:05
what's happening in the world for me to

00:47:01 --> 00:47:07
actually get real information. and and

00:47:04 --> 00:47:09
maybe that's an unreasonable sort of ask

00:47:06 --> 00:47:11
of of the AI researchers, but but I

00:47:08 --> 00:47:13
don't think we're we have made any

00:47:10 --> 00:47:14
progress there. So maybe I'm over focus.

00:47:12 --> 00:47:16
Yeah, maybe I'm over in being in my my

00:47:14 --> 00:47:17
line or maybe I'm over focused on ar

00:47:15 --> 00:47:19
guing at people as opposed to um

00:47:16 --> 00:47:21
trying to get as trying to get underline

00:47:18 --> 00:47:22
truth. But well here here's the thing I

00:47:20 --> 00:47:24
do a lot with this is I just say like

00:47:22 --> 00:47:26
take take a provocative point of view um

00:47:23 --> 00:47:29
and then steel man the position take

00:47:25 --> 00:47:30
your co thing steel so I often I often

00:47:28 --> 00:47:32
pair these steel man the position that

00:47:29 --> 00:47:33
it was a lab leak um and steel man the

00:47:31 --> 00:47:35
position that it was natural origins

00:47:32 --> 00:47:36
>> um and and again like is this creativity

00:47:34 --> 00:47:38
or not? I don't know. But like what

00:47:35 --> 00:47:40
comes back is like 30 pages each of like

00:47:37 --> 00:47:41
wow like that is like the most

00:47:39 --> 00:47:42
compelling case in the world I can

00:47:40 --> 00:47:43
imagine with like every you know

00:47:41 --> 00:47:45
everything marshaled against it like the

00:47:42 --> 00:47:45
argument structured in like the most

00:47:44 --> 00:47:46
possible

00:47:44 --> 00:47:48
>> part of the reason that started

00:47:45 --> 00:47:50
happening is because it stopped being

00:47:47 --> 00:47:52
taboo to talk about a human origin when

00:47:50 --> 00:47:54
it was taboo

00:47:51 --> 00:47:56
>> the the AIS would like talk will you

00:47:54 --> 00:48:00
know talk down to like oh you're a

00:47:55 --> 00:48:02
conspiracy theorist and so yes uh so

00:47:59 --> 00:48:03
there's a there's a you know period of

00:48:01 --> 00:48:05
time and so it takes something truly

00:48:02 --> 00:48:06
controversial and they actually they

00:48:04 --> 00:48:09
can't reason about it because of

00:48:05 --> 00:48:10
all RLHF and answers all the limitations

00:48:08 --> 00:48:11
and as as you know I won't pick no

00:48:09 --> 00:48:13
specific ones here but like there there

00:48:10 --> 00:48:14
are certain certain big models that will

00:48:12 --> 00:48:15
still lecture you

00:48:13 --> 00:48:17
>> that you're a bad person for asking that

00:48:14 --> 00:48:18
question but but you know like I just

00:48:16 --> 00:48:20
here some of them are just like really

00:48:18 --> 00:48:21
open now to you know being able

00:48:19 --> 00:48:26
to do these things

00:48:20 --> 00:48:28
>> um and then um uh yeah so um okay uh

00:48:25 --> 00:48:30
yeah so okay so yeah so there's this

00:48:27 --> 00:48:31
yeah so so basically like ultimately

00:48:29 --> 00:48:33
what you're looking for like the

00:48:30 --> 00:48:35
ultimate thing would be if there's

00:48:32 --> 00:48:36
omething that's like I don't I think

00:48:34 --> 00:48:37
anybody's really defined this really

00:48:35 --> 00:48:38
well because it's not because again it's

00:48:36 --> 00:48:40
like the conventional all the

00:48:37 --> 00:48:41
conventional definitions of AGI are like

00:48:39 --> 00:48:41
basically comparing to people.

00:48:40 --> 00:48:42
>> Yeah.

00:48:40 --> 00:48:45
>> And there there and there it's always

00:48:41 --> 00:48:48
like you know it's the conventional

00:48:44 --> 00:48:50
explanations of of of um of uh of AGI

00:48:47 --> 00:48:51
always for me struck me a lot like the

00:48:49 --> 00:48:52
debate around like whether a

00:48:50 --> 00:48:54
self-driving car works or not which is

00:48:51 --> 00:48:56
does a self-driving car work because

00:48:53 --> 00:48:58
it's a perfect driver uh or does it work

00:48:55 --> 00:48:59
because it is a is better than the human

00:48:57 --> 00:49:01
driver and better than the human driver

00:48:58 --> 00:49:02
I think is actually quite you know just

00:49:00 --> 00:49:04
like with the the chess thing and the go

00:49:01 --> 00:49:05
thing. I actually think like that that

00:49:03 --> 00:49:06
's like a real thing. And then and

00:49:04 --> 00:49:08
then and then there's the like

00:49:05 --> 00:49:09
is it a perfect driver which is you know

00:49:07 --> 00:49:10
hat they're obviously the the

00:49:08 --> 00:49:12
self-driving car companies are working

00:49:09 --> 00:49:13
for but then I think you're looking for

00:49:11 --> 00:49:14
something beyond the perfect driver.

00:49:12 --> 00:49:17
You're looking for the car who like

00:49:13 --> 00:49:19
knows where to go. So I I I I'm of two

00:49:16 --> 00:49:21
minds, right? So one mind is the sort of

00:49:18 --> 00:49:23
practical entrepreneur, right?

00:49:20 --> 00:49:26
>> Uh and I just I have so many toys to

00:49:22 --> 00:49:28
play with to build like stop AI progress

00:49:25 --> 00:49:29
today and replet will continue to get

00:49:27 --> 00:49:31
better for the next 5 years. like

00:49:28 --> 00:49:33
there's so much we can do just on the

00:49:30 --> 00:49:34
app uh app layer and the infrastructure

00:49:32 --> 00:49:36
layer.

00:49:33 --> 00:49:38
>> So you know I but but I think that will

00:49:36 --> 00:49:40
you know the the foundation models will

00:49:37 --> 00:49:41
continue to get better as well and so

00:49:39 --> 00:49:44
it's it's a very exciting time in our

00:49:40 --> 00:49:46
industry. Um the other mind is more

00:49:43 --> 00:49:48
academic because as a kid I've always

00:49:45 --> 00:49:50
been interested in the nature of

00:49:47 --> 00:49:52
consciousness, nature of intelligence. I

00:49:49 --> 00:49:54
was always interested in AI and reading

00:49:51 --> 00:49:57
the literature there and I would point

00:49:53 --> 00:49:59
o the RL uh literature. So Richard

00:49:56 --> 00:50:01
Soden, there's another guy I think

00:49:58 --> 00:50:03
co-founder of deep mind Shane Lag wrote

00:50:00 --> 00:50:07
a paper trying to define what AGI

00:50:02 --> 00:50:09
is. Um and in there I think that the

00:50:06 --> 00:50:13
definition of AI I think is the is the

00:50:08 --> 00:50:15
original perhaps correct one which is uh

00:50:12 --> 00:50:17
efficient continual learning.

00:50:14 --> 00:50:19
>> Okay. Like if you if you truly want to

00:50:16 --> 00:50:21
build an artificial general intelligence

00:50:18 --> 00:50:24
that you can drop in any domain, you can

00:50:20 --> 00:50:28
drop in a car without that much prior

00:50:23 --> 00:50:30
knowledge about cars and within um you

00:50:27 --> 00:50:32
know how long does it take a human to to

00:50:29 --> 00:50:34
learn how to drive you within months be

00:50:31 --> 00:50:36
able to drive a car really well, you

00:50:33 --> 00:50:38
know, generalized skill sort of

00:50:35 --> 00:50:40
generalized skill acquisition,

00:50:37 --> 00:50:42
generalized understanding acquisition,

00:50:39 --> 00:50:44
generalized reasoning acquisition. And I

00:50:41 --> 00:50:46
think that's the thing that will like

00:50:43 --> 00:50:48
truly change the world. That's the thing

00:50:45 --> 00:50:50
that would give us a better

00:50:47 --> 00:50:52
understanding of of the human mind of

00:50:49 --> 00:50:55
human consciousness and that's the thing

00:50:52 --> 00:50:58
that will like propel us to the next uh

00:50:54 --> 00:51:00
level of human civilization.

00:50:57 --> 00:51:05
on a civilization level that's a really

00:50:59 --> 00:51:05
deep question but separ

00:51:05 --> 00:51:08
but but there's an academic aspect of it

00:51:06 --> 00:51:10
hat I'm really

00:51:07 --> 00:51:11
>> so what and what odds what if we're on

00:51:09 --> 00:51:12
Kelsey today what what odds

00:51:10 --> 00:51:16
do we place on that

00:51:11 --> 00:51:18
>> I I I'm kind of bearish on on on true

00:51:15 --> 00:51:21
AGI breakthrough because

00:51:17 --> 00:51:25
>> what we built is so useful and

00:51:20 --> 00:51:27
economically valuable uh so in a way

00:51:24 --> 00:51:29
>> good enough good enough is the enemy

00:51:26 --> 00:51:30
Yeah. Yeah. Do do you remember that

00:51:28 --> 00:51:31
essay? Um,

00:51:29 --> 00:51:31
>> worse is better.

00:51:30 --> 00:51:33
>> Worse is better.

00:51:30 --> 00:51:33
Worse is better. And

00:51:32 --> 00:51:34
and

00:51:32 --> 00:51:36
>> so there's like a local there's like a

00:51:33 --> 00:51:37
trap. There's like a local local maximum

00:51:35 --> 00:51:39
trap. We're in a local maximum

00:51:36 --> 00:51:41
>> local maximum trap where it's because

00:51:38 --> 00:51:42
it's good enough for so

00:51:40 --> 00:51:43
much economically productive work.

00:51:41 --> 00:51:45
>> Yes.

00:51:42 --> 00:51:47
>> It relieves the pressure um in the

00:51:44 --> 00:51:48
system to create the generalized answer.

00:51:46 --> 00:51:50
>> Yes. And and then you have the weirdos

00:51:47 --> 00:51:51
like Rich Sutton and others that are

00:51:49 --> 00:51:52
still trying to go that down that path

00:51:50 --> 00:51:55
and maybe they'll succeed,

00:51:52 --> 00:51:57
>> right? Uh but there's enormous

00:51:54 --> 00:51:58
optimization energy behind the current

00:51:56 --> 00:51:59
hing that we're hell climbing on this

00:51:57 --> 00:52:00
like local maximum.

00:51:58 --> 00:52:02
>> Right. Right. Right. And and the irony

00:52:00 --> 00:52:03
of it is everybody's worried about like

00:52:01 --> 00:52:04
the you know the gazillions of dollars

00:52:02 --> 00:52:06
going into building out all this stuff

00:52:03 --> 00:52:07
and and so the the the most ironic thing

00:52:05 --> 00:52:08
in the world would be if the gazillions

00:52:06 --> 00:52:09
of dollars are going into the local

00:52:07 --> 00:52:10
maximum.

00:52:08 --> 00:52:11
>> That's right.

00:52:09 --> 00:52:12
>> As as opposed to a counterfactual world

00:52:10 --> 00:52:13
in which they're going into solving the

00:52:11 --> 00:52:14
general problem.

00:52:12 --> 00:52:16
>> But but it's also potentially

00:52:13 --> 00:52:18
irrational. Like maybe the general

00:52:15 --> 00:52:21
problem is actually you know not within

00:52:17 --> 00:52:22
our lifetimes. Who knows? Right. Um, h

00:52:20 --> 00:52:23
>> how much further do you think like do

00:52:21 --> 00:52:25
you think we squeeze most of the juice

00:52:22 --> 00:52:27
out of out of LLMs in general then? Or

00:52:24 --> 00:52:29
are there any other research directions

00:52:26 --> 00:52:30
that you're particularly um excited

00:52:28 --> 00:52:32
about?

00:52:29 --> 00:52:35
>> Well, that's the thing. I think the

00:52:31 --> 00:52:37
problem is there aren't that that many.

00:52:34 --> 00:52:39
I I think the the the breakthroughs in

00:52:36 --> 00:52:41
RL are incredibly exciting, but we also

00:52:38 --> 00:52:43
knew about them now for like over 10

00:52:40 --> 00:52:45
years where you marry generative uh

00:52:42 --> 00:52:48
systems with uh with tree search and

00:52:44 --> 00:52:50
things like that. Um but but there's a

00:52:47 --> 00:52:53
lot more to go there and I think again

00:52:49 --> 00:52:54
the the the the original minds behind

00:52:52 --> 00:52:56
reinforcement learning are trying to go

00:52:53 --> 00:52:58
down that path and try to kind of

00:52:55 --> 00:53:01
bootstrap intelligence from scratch. Uh

00:52:57 --> 00:53:03
Carmarmac is is going down that path as

00:53:00 --> 00:53:05
far as I understand Carmarmac you

00:53:02 --> 00:53:06
guys may be invested but the the you

00:53:04 --> 00:53:08
know they're they're not trying to go

00:53:05 --> 00:53:10
down the LLM path. So there are people

00:53:07 --> 00:53:13
that are trying to do that but I'm not

00:53:09 --> 00:53:14
seeing a lot of progress or outcome

00:53:12 --> 00:53:15
there but I watch it kind of from far.

00:53:13 --> 00:53:17
Although, you know, for all we know,

00:53:14 --> 00:53:19
it's already there's already a bot on X

00:53:16 --> 00:53:20
somewhere.

00:53:18 --> 00:53:21
>> You know, you know, you never know. It

00:53:19 --> 00:53:22
might not be a big announcement. It

00:53:20 --> 00:53:24
might just be a you know, one day

00:53:22 --> 00:53:25
there's just like a bot on X that starts

00:53:23 --> 00:53:27
winning all the arguments.

00:53:24 --> 00:53:30
>> Yeah, it could be

00:53:26 --> 00:53:30
>> or a code a user read and all of a

00:53:29 --> 00:53:32
sudden it's

00:53:30 --> 00:53:34
>> generating incredible software. Um,

00:53:31 --> 00:53:35
okay. Let's uh let's spend our remaining

00:53:33 --> 00:53:37
minutes. Let's let's let's talk about

00:53:34 --> 00:53:39
you. So, uh so uh so how so yeah, take

00:53:36 --> 00:53:41
us start from the beginning with your uh

00:53:38 --> 00:53:42
with your life and how how did you get

00:53:40 --> 00:53:43
from being born to being

00:53:41 --> 00:53:45
in Silicon Valley?

00:53:42 --> 00:53:45
>> Okay.

00:53:44 --> 00:53:46
um

00:53:44 --> 00:53:48
>> in two minutes. Yeah,

00:53:45 --> 00:53:51
>> I'm just I'm joking. But

00:53:47 --> 00:53:54
>> yeah, I I got introduced to computers uh

00:53:50 --> 00:53:57
very very early on. And so for whatever

00:53:53 --> 00:53:59
eason, so I was born in Aman, Jordan

00:53:56 --> 00:54:01
>> and for whatever reason, my my dad who

00:53:58 --> 00:54:04
was just a government engineer at the

00:54:00 --> 00:54:06
time uh decided that computers were

00:54:03 --> 00:54:08
important and he didn't have a lot of

00:54:05 --> 00:54:10
money took out of that, bought a

00:54:07 --> 00:54:11
computer. It was the first computer in

00:54:09 --> 00:54:15
their in our neighborhood. first

00:54:10 --> 00:54:17
computer of anyone I know. And I just

00:54:14 --> 00:54:19
one of my earliest memories I was 6

00:54:16 --> 00:54:21
years old just watching my dad unpack

00:54:18 --> 00:54:25
this machine and sort of open up this

00:54:20 --> 00:54:28
huge manual and kind of finger type CD

00:54:24 --> 00:54:30
LS MKDIR and like I would, you know, be

00:54:27 --> 00:54:32
hind his shoulder and just like

00:54:29 --> 00:54:34
watching him, you know, type these

00:54:31 --> 00:54:37
commands and seeing the sort of machine

00:54:33 --> 00:54:38
kind of respond and do exactly what he's

00:54:36 --> 00:54:42
asked it to do. Um,

00:54:38 --> 00:54:42
>> pop in Tylenol as your

00:54:41 --> 00:54:45
Exactly.

00:54:43 --> 00:54:48
Autism activated.

00:54:44 --> 00:54:49
>> Of course, you have to.

00:54:47 --> 00:54:52
>> You have to.

00:54:48 --> 00:54:53
>> Exactly. What kind of um what kind of

00:54:51 --> 00:54:56
computer was it?

00:54:52 --> 00:54:59
>> Uh it was uh an IBM as far as I

00:54:56 --> 00:55:01
remember. It was IBM PC.

00:54:58 --> 00:55:03
>> What year was this? Uh 1993.

00:55:00 --> 00:55:04
>> 1993. Okay. So, it's DOS. So, did it

00:55:02 --> 00:55:06
have Windows at that point or

00:55:04 --> 00:55:07
>> No, it didn't have Windows.

00:55:05 --> 00:55:08
>> Right before Windows. right before

00:55:06 --> 00:55:10
Windows, but I think Windows had been

00:55:08 --> 00:55:12
out, but you would add

00:55:09 --> 00:55:14
>> you it was an add-on. You wouldn't boot

00:55:11 --> 00:55:17
it up. So, we I think we bought the disc

00:55:13 --> 00:55:19
for uh for uh for Windows and you had to

00:55:16 --> 00:55:21
kind of uh bootloaded, you know, from

00:55:18 --> 00:55:23
the disk and and it will open Windows

00:55:20 --> 00:55:25
and you can click around. It wasn't that

00:55:22 --> 00:55:26
interesting cuz there wasn't a lot on

00:55:24 --> 00:55:29
it. So, a lot of time I just spend in

00:55:26 --> 00:55:32
DOSs and writing batch files and opening

00:55:28 --> 00:55:35
ames and messing around with that. Um

00:55:31 --> 00:55:37
but it wasn't until Visual Basic that I

00:55:34 --> 00:55:39
started. So like after Windows 95 that I

00:55:36 --> 00:55:43
started making real software, right?

00:55:38 --> 00:55:45
>> Uh and the first idea I had was um I I

00:55:42 --> 00:55:47
used to be a huge gamer. So I used I

00:55:44 --> 00:55:50
used to go to these uh Lang gaming cafes

00:55:46 --> 00:55:52
and play Counter Strike and I would go

00:55:49 --> 00:55:53
there and you know the whole thing is

00:55:51 --> 00:55:55
full of computers but they don't use any

00:55:52 --> 00:55:57
software to run their business. M it was

00:55:54 --> 00:55:59
just like people running around just

00:55:56 --> 00:56:01
like writing down your machine number,

00:55:58 --> 00:56:02
how much time you spend on it and how

00:56:00 --> 00:56:04
much did you pay and kind of tapping

00:56:02 --> 00:56:06
your shoulders like hey you need to pay

00:56:03 --> 00:56:07
a little more for that. And I asked him

00:56:05 --> 00:56:09
like why don't you like just build a

00:56:06 --> 00:56:11
piece of software that allows me to log

00:56:08 --> 00:56:12
in and have a time or whatever. And I

00:56:10 --> 00:56:14
was like yeah we don't know how to do

00:56:11 --> 00:56:16
that. And I was like okay I think I know

00:56:13 --> 00:56:18
how to do that. So I spent I was like 12

00:56:15 --> 00:56:20
or something like that. I spent like 2

00:56:17 --> 00:56:22
years building that uh and then went out

00:56:19 --> 00:56:24
and tried to sell it and was able to

00:56:21 --> 00:56:27
sell it uh and was making so much money.

00:56:23 --> 00:56:30
I remember McDonald's opened uh in

00:56:26 --> 00:56:31
Jordan uh around the time when I was 13

00:56:29 --> 00:56:33
14. I took my entire class to

00:56:30 --> 00:56:36
McDonald's. It was very expensive, but I

00:56:32 --> 00:56:40
was balling it all this money and I was

00:56:35 --> 00:56:44
howing off um and uh and so that was

00:56:39 --> 00:56:47
the first uh business that I uh created.

00:56:43 --> 00:56:49
And then when it came to and at the time

00:56:46 --> 00:56:51
I started kind of learning about AI, you

00:56:48 --> 00:56:54
know, reading sci-fi and all of that

00:56:50 --> 00:56:56
stuff. And when it came time to go to

00:56:53 --> 00:56:58
college, uh I didn't want to go to

00:56:55 --> 00:57:01
computer science because I felt like

00:56:58 --> 00:57:03
coding is on its way to get automated. I

00:57:00 --> 00:57:04
remember using these um wizards. Do you

00:57:02 --> 00:57:05
remember wizards?

00:57:03 --> 00:57:07
>> Yes.

00:57:04 --> 00:57:10
>> Wizards basically. It's like extremely

00:57:06 --> 00:57:10
crude early bots or that generate code.

00:57:09 --> 00:57:11
Yeah.

00:57:09 --> 00:57:13
>> Yeah. And I remember you could like, you

00:57:10 --> 00:57:14
know, type in a few things like here's

00:57:12 --> 00:57:16
my project, here's what it does,

00:57:13 --> 00:57:18
whatever, and then click click click and

00:57:15 --> 00:57:19
just like scaffold a lot of code. I was

00:57:17 --> 00:57:21
like, oh, I think that's the future.

00:57:18 --> 00:57:21
Like coding is such a

00:57:20 --> 00:57:23
>> it's almost

00:57:20 --> 00:57:26
>> yeah it's solved you know why why should

00:57:22 --> 00:57:28
I go into coding I was okay if AI can do

00:57:25 --> 00:57:29
the code what should I do well someone

00:57:27 --> 00:57:31
eds to build and maintain the

00:57:28 --> 00:57:33
computers and so I went to the computer

00:57:30 --> 00:57:36
engineering and and and did that for a

00:57:32 --> 00:57:39
while uh but then rediscovered my love

00:57:35 --> 00:57:42
for for programming uh reading program

00:57:38 --> 00:57:43
essays on lisp and things like that and

00:57:41 --> 00:57:46
uh started messing around with scheme

00:57:42 --> 00:57:48
and programming languages like that um

00:57:45 --> 00:57:50
but then I found it incredibly difficult

00:57:47 --> 00:57:52
o just like learn different programming

00:57:49 --> 00:57:54
languages. I didn't have a laptop at the

00:57:51 --> 00:57:57
time. And so every time I go to like

00:57:53 --> 00:57:59
wanting to learn Python or Java, I would

00:57:56 --> 00:58:02
go to the computer lab, download

00:57:58 --> 00:58:04
gigabytes of software, try to set it up,

00:58:01 --> 00:58:07
type a little bit of code, try to run

00:58:03 --> 00:58:11
it, you know, run into missing DL issue

00:58:06 --> 00:58:14
or and I was like, man, this is so

00:58:10 --> 00:58:17
primitive. Like at the time it was 2008

00:58:13 --> 00:58:19
something like that you know we had uh

00:58:16 --> 00:58:22
Google Docs, we had Gmail, you could

00:58:18 --> 00:58:24
like open the browser uh and partly

00:58:21 --> 00:58:26
thanks to you and be able to kind of uh

00:58:24 --> 00:58:29
use software on the internet and I

00:58:25 --> 00:58:30
thought the web is the ultimate software

00:58:28 --> 00:58:32
platform like everything should go on

00:58:30 --> 00:58:34
the web. Okay, who's building an online

00:58:32 --> 00:58:36
development environment, right? And and

00:58:33 --> 00:58:39
no one, right? And it felt like I w I

00:58:35 --> 00:58:41
found like $100 bill on the, you know,

00:58:38 --> 00:58:43
on the floor of Grand Association. Like

00:58:40 --> 00:58:45
surely someone should be building this,

00:58:42 --> 00:58:46
but no, no one was building this. And so

00:58:44 --> 00:58:47
I was like, okay, I'll I'll try to build

00:58:45 --> 00:58:50
it.

00:58:46 --> 00:58:52
>> And I got something done in like a

00:58:49 --> 00:58:54
couple hours. Uh, which was a text box.

00:58:51 --> 00:58:55
You type in some JavaScript. We And

00:58:53 --> 00:58:58
there's a there's a button that says

00:58:54 --> 00:59:00
eval. You click eval and evaluates. It

00:58:57 --> 00:59:03
shows you in a in an alert box, right?

00:58:59 --> 00:59:04
Right. So oneplus 1 2 I was like oh I

00:59:02 --> 00:59:06
have a programming environment. I showed

00:59:04 --> 00:59:08
it to my friends people started using

00:59:05 --> 00:59:10
it. I added a few additional things like

00:59:07 --> 00:59:12
saving the program. I was like okay all

00:59:09 --> 00:59:14
right this is there's there's a real

00:59:11 --> 00:59:16
idea here. People love it. And then

00:59:13 --> 00:59:18
again it took me two two or three years

00:59:15 --> 00:59:19
to actually be able to build anything

00:59:17 --> 00:59:22
because you know the browser can only

00:59:18 --> 00:59:25
run JavaScript. And it took a

00:59:21 --> 00:59:27
breakthrough at the time. Uh, Moisella

00:59:24 --> 00:59:31
had a research project called mcripton

00:59:26 --> 00:59:33
that allowed you to uh compile different

00:59:30 --> 00:59:36
uh programming languages like C, C++

00:59:32 --> 00:59:38
into JavaScript. And for the browser to

00:59:35 --> 00:59:40
be able to run something like Python, I

00:59:37 --> 00:59:41
needed to compile C, Python to

00:59:39 --> 00:59:45
JavaScript. So I was the first to do it

00:59:40 --> 00:59:46
in the world. uh so built uh contributed

00:59:44 --> 00:59:50
to that project and built a lot of the

00:59:45 --> 00:59:52
scaffolding around it and we uh my

00:59:49 --> 00:59:54
friends and I compiled Python into

00:59:51 --> 00:59:56
JavaScript and I was like okay we did it

00:59:54 --> 00:59:59
for Python let's do it for Ruby let's do

00:59:55 --> 01:00:01
it for Lo and that's how the emergence

00:59:58 --> 01:00:02
of the idea for replet came is that when

01:00:00 --> 01:00:05
you need a ripple you should get it you

01:00:01 --> 01:00:06
should replet it and so ripple is is the

01:00:04 --> 01:00:07
most primitive programming environment

01:00:05 --> 01:00:09
possible so I added all these

01:00:06 --> 01:00:11
programming languages and again all this

01:00:08 --> 01:00:12
time my friends were using it and

01:00:10 --> 01:00:15
excited about

01:00:11 --> 01:00:17
And I was on GitHub at the time and just

01:00:14 --> 01:00:18
my standard thing is like when I make a

01:00:16 --> 01:00:20
piece of software is open source it. And

01:00:17 --> 01:00:22
so I was open sourcing all the things I

01:00:19 --> 01:00:24
was you know years building just like

01:00:22 --> 01:00:26
this underlying infrastructure to be

01:00:23 --> 01:00:29
able to just run code in the browser

01:00:25 --> 01:00:32
>> and then it went viral uh went viral in

01:00:28 --> 01:00:35
hacker news and it coincided with the

01:00:31 --> 01:00:37
MOO era. So massively online courses

01:00:34 --> 01:00:39
Udacity was coming online Corsera and

01:00:36 --> 01:00:42
most famously Code Academy. Right.

01:00:38 --> 01:00:43
So, Code Academy uh was the first kind

01:00:41 --> 01:00:45
of website that allowed you to code in

01:00:42 --> 01:00:47
the browser interactively and learn how

01:00:44 --> 01:00:49
to code. And they built a lot of it on

01:00:46 --> 01:00:50
my software that I was open sourcing all

01:00:48 --> 01:00:51
the way from Jordan. And so, I remember

01:00:49 --> 01:00:53
seeing them on Hacker News and they were

01:00:50 --> 01:00:55
going super viral. I was like, "Hey,

01:00:52 --> 01:00:56
that's, you know, I I recognize this.

01:00:54 --> 01:00:57
What are you using?" And so, I left the

01:00:55 --> 01:01:00
Hacker News comments. I was like, "Oh,

01:00:56 --> 01:01:02
you're using my my open source package."

01:00:59 --> 01:01:03
And so, they reached out to me. They uh

01:01:01 --> 01:01:04
they're like, "Hey, would like to hire

01:01:02 --> 01:01:05
you." I was like, "I'm not interested. I

01:01:03 --> 01:01:08
want to start a startup. I want to

01:01:04 --> 01:01:10
start this thing called Replet." and and

01:01:07 --> 01:01:11
they're like, "Well, no, you know, you

01:01:09 --> 01:01:13
should come work with us. We can we can

01:01:10 --> 01:01:15
do the same stuff." And I kept saying,

01:01:12 --> 01:01:17
"No." I was like, "Okay, I'll contract

01:01:14 --> 01:01:18
with you." They were paying me $12 an

01:01:16 --> 01:01:19
hour. I was really excited about it.

01:01:17 --> 01:01:22
Back from Oman.

01:01:18 --> 01:01:23
>> Um, but they came out to their to their

01:01:21 --> 01:01:25
credit. They came out of Jordan to

01:01:22 --> 01:01:27
recruit me and spend a few a few days

01:01:24 --> 01:01:29
there. And then I, you know, I kept

01:01:26 --> 01:01:32
saying no. And in the end, they gave me

01:01:28 --> 01:01:33
an offer I can't refuse. Um, and they

01:01:31 --> 01:01:34
got me an O1 visa. Came to the United

01:01:32 --> 01:01:35
States.

01:01:33 --> 01:01:38
>> That's when you moved. So when when was

01:01:34 --> 01:01:38
the first cuz you were born what year to

01:01:37 --> 01:01:40
>> 1987

01:01:37 --> 01:01:41
>> 87. What was the first year that you

01:01:39 --> 01:01:42
could remember where you had the idea

01:01:40 --> 01:01:44
that you might not live your life in

01:01:42 --> 01:01:45
Jordan and that you might you might

01:01:43 --> 01:01:47
actually move to the US?

01:01:44 --> 01:01:47
>> Uh when I watched Pirates of Silicon

01:01:46 --> 01:01:48
Valley.

01:01:46 --> 01:01:50
>> Is that right? Okay. Got it. All right.

01:01:47 --> 01:01:53
>> Uh maybe

01:01:50 --> 01:01:54
98 or 99. I don't know when it came out.

01:01:52 --> 01:01:54
>> Okay. That might be a good place to

01:01:53 --> 01:01:56
>> Yeah.

01:01:54 --> 01:01:57
>> Is it worth telling the hacker story

01:01:55 --> 01:01:59
because there's a version of the world

01:01:56 --> 01:02:00
where you didn't actually like if that

01:01:58 --> 01:02:01
changed maybe you wouldn't have gone to

01:01:59 --> 01:02:04
America.

01:02:00 --> 01:02:05
>> Right. Right. Yeah. So uh in in school I

01:02:03 --> 01:02:07
was programming the whole time you so I

01:02:04 --> 01:02:09
just want to start businesses. I just

01:02:06 --> 01:02:11
like I'm exploding with ideas all the

01:02:08 --> 01:02:12
time. And like the reason Replet exists

01:02:10 --> 01:02:14
is because I have ideas all the time. I

01:02:12 --> 01:02:16
just want to go type on the computer and

01:02:13 --> 01:02:18
like build them. Um so I wasn't going to

01:02:15 --> 01:02:20
school. It was like incredibly boring

01:02:17 --> 01:02:22
for me. Uh and part of the reason why

01:02:19 --> 01:02:23
Replet has a mobile app today is because

01:02:21 --> 01:02:26
I always wanted to program under the

01:02:22 --> 01:02:28
desk just to do things.

01:02:25 --> 01:02:31
>> Um and so the at school they kept

01:02:28 --> 01:02:33
failing me uh for attendance. you know,

01:02:30 --> 01:02:36
so I would get A's, but I just didn't

01:02:32 --> 01:02:38
show up and so they they would fail me.

01:02:35 --> 01:02:40
And so I felt it was incredibly unfair.

01:02:37 --> 01:02:42
And all my friends were graduating now.

01:02:39 --> 01:02:45
This year was like 2011. I've been like

01:02:41 --> 01:02:46
for 6 years in college. It should be

01:02:44 --> 01:02:48
like a three or four year. And I was

01:02:46 --> 01:02:52
like incredibly depressed. I really

01:02:47 --> 01:02:54
wanted to be in Silicon Valley. And so I

01:02:51 --> 01:02:55
was like, "Oh, what if I changed my

01:02:53 --> 01:02:56
grades?"

01:02:54 --> 01:03:00
>> There we go.

01:02:56 --> 01:03:06
>> The university database. And um and and

01:02:59 --> 01:03:10
so I went into my parents uh uh basement

01:03:05 --> 01:03:11
uh and uh implemented uh the polyphasic

01:03:09 --> 01:03:13
sleep. Are you familiar with that?

01:03:10 --> 01:03:15
>> I I I I am

01:03:12 --> 01:03:17
>> uh Leonardo da Vinci's uh polyphysic

01:03:14 --> 01:03:19
sleep. I didn't hear from Ronaldo da

01:03:16 --> 01:03:20
Vinci. I heard it from Seinfeld cuz uh

01:03:18 --> 01:03:22
there's an episode where John Kamemer

01:03:19 --> 01:03:24
goes on on

01:03:21 --> 01:03:26
>> poly sleep what 20 minutes every four

01:03:23 --> 01:03:28
hours. 20 minutes every 24 hours. And

01:03:26 --> 01:03:29
yes, and this this somehow is going to

01:03:27 --> 01:03:31
work well. And it

01:03:28 --> 01:03:31
>> Yeah. And and hacking, if you've ever

01:03:30 --> 01:03:32
done anything,

01:03:30 --> 01:03:34
>> as the meme goes, this this has never

01:03:32 --> 01:03:35
worked for anybody else, but it might

01:03:33 --> 01:03:37
work for me.

01:03:34 --> 01:03:39
>> Yes.

01:03:36 --> 01:03:41
>> And a lot of what hacking is is that

01:03:38 --> 01:03:43
you're you're coming up with ideas for

01:03:40 --> 01:03:44
like finding certain security holes and

01:03:42 --> 01:03:46
like writing a script and then running

01:03:43 --> 01:03:47
that script and that script will take

01:03:45 --> 01:03:49
like a 20 30 minutes to run and so

01:03:46 --> 01:03:51
you'll take that, you know, 20 30

01:03:48 --> 01:03:53
minutes to sleep and go on. So I spent

01:03:50 --> 01:03:55
wo weeks just going mad like trying to

01:03:52 --> 01:03:59
hack into the university database and uh

01:03:54 --> 01:04:01
finally I found um a way I found a SQL

01:03:58 --> 01:04:03
injection somewhere on the site uh and I

01:04:00 --> 01:04:06
found a way to like be able to edit the

01:04:02 --> 01:04:07
records but I didn't want to risk

01:04:05 --> 01:04:10
it. So I went to my neighbor who's going

01:04:06 --> 01:04:11
to the same school. Uh I think till this

01:04:09 --> 01:04:14
day no one caught him. But I went to him

01:04:10 --> 01:04:16
and I said um hey uh I have this way to

01:04:13 --> 01:04:17
change grades like would you want to be

01:04:15 --> 01:04:19
my guinea pig? And I was honest about

01:04:16 --> 01:04:21
it. I was like I'm not going to do it.

01:04:18 --> 01:04:23
are you open to doing?

01:04:20 --> 01:04:25
He's like, "Yeah, yeah, yeah." They call

01:04:22 --> 01:04:28
his human trials.

01:04:24 --> 01:04:31
This is how medicine works.

01:04:27 --> 01:04:33
So, so we we went and and and uh we went

01:04:30 --> 01:04:35
and changed his grades and he he went

01:04:32 --> 01:04:38
and pulled his transcript and the you

01:04:34 --> 01:04:39
know, the update wasn't wasn't there and

01:04:37 --> 01:04:42
went back to the basement. Well, turned

01:04:38 --> 01:04:43
out that I had access to the uh slave

01:04:41 --> 01:04:45
database. I didn't have access to

01:04:42 --> 01:04:47
ambassador database.

01:04:44 --> 01:04:49
>> So, find a way through the network

01:04:46 --> 01:04:51
privilege escalation. It was an Oracle

01:04:48 --> 01:04:53
database that had a vulnerability and

01:04:50 --> 01:04:55
then found the real database and then I

01:04:52 --> 01:04:59
just, you know, did it for myself. Uh,

01:04:54 --> 01:05:01
changed the grades and went and pulled

01:04:58 --> 01:05:05
my scrcripts and sure enough it actually

01:05:00 --> 01:05:08
changed. Went and bought the the the

01:05:04 --> 01:05:11
gown, went to the graduation parties,

01:05:07 --> 01:05:14
uh, did all that. We're graduating. Um,

01:05:10 --> 01:05:16
and then one day I'm at home. It's like

01:05:13 --> 01:05:20
maybe 6:00 or 7:00 p.m. I get a you know

01:05:15 --> 01:05:21
the the telephone at home rings

01:05:19 --> 01:05:24
ominous ominous ring

01:05:20 --> 01:05:26
>> Santa

01:05:23 --> 01:05:28
um hello and he's like hey this is the

01:05:25 --> 01:05:30
university registration system and I

01:05:27 --> 01:05:32
knew the guy that run it. Uh he's like

01:05:29 --> 01:05:34
look you know we we we're having this

01:05:31 --> 01:05:37
problem. The system's been down all day

01:05:33 --> 01:05:39
and it keeps coming back to your record.

01:05:36 --> 01:05:41
there's an anomaly in your record where

01:05:38 --> 01:05:44
you're both pass you have a passing

01:05:40 --> 01:05:46
rade but you're also banned from that

01:05:43 --> 01:05:48
uh final exam of subject I was like oh

01:05:45 --> 01:05:51
[ __ ] well turns out the database is not

01:05:47 --> 01:05:53
normalized so typically that when they

01:05:50 --> 01:05:55
ban you from an exam the the grades

01:05:52 --> 01:05:57
resets to 35 out of 100 but apparently

01:05:54 --> 01:05:59
there's a boolean flag and by the way

01:05:56 --> 01:06:01
all the column names in the database are

01:05:58 --> 01:06:03
single single letters that was the

01:06:00 --> 01:06:03
hardest thing is security by obscurity

01:06:02 --> 01:06:05
>> right

01:06:02 --> 01:06:07
>> and turns out there's a flag that I

01:06:04 --> 01:06:10
didn't track so when when when when you

01:06:06 --> 01:06:13
go over attendance um uh when you don't

01:06:10 --> 01:06:14
attend and they they they want to fail

01:06:12 --> 01:06:16
you, they they ban you from the final

01:06:13 --> 01:06:19
exam. So, I changed the grades and that

01:06:15 --> 01:06:21
that created uh an issue and

01:06:18 --> 01:06:23
brought down the system. So, they were

01:06:20 --> 01:06:26
calling me and I thought at the time I

01:06:22 --> 01:06:28
was like, you know, I could I could

01:06:25 --> 01:06:31
potentially lie and I'll it'll be a huge

01:06:27 --> 01:06:34
issue or I just like I'll just I'll just

01:06:30 --> 01:06:35
fess up. Yeah. So, I said, hey, listen,

01:06:33 --> 01:06:37
look, um yeah, I might know something

01:06:34 --> 01:06:40
about it. Hey, let me let me come uh

01:06:36 --> 01:06:42
tomorrow and kind of talk to you about

01:06:39 --> 01:06:44
what happened. So, I go in and I open

01:06:41 --> 01:06:45
the door and it's the deans of all the

01:06:43 --> 01:06:47
schools. It's a computer science

01:06:44 --> 01:06:49
computer. They were all working on it

01:06:46 --> 01:06:51
for like days because it's like it's

01:06:48 --> 01:06:53
a very computerheavy, you

01:06:50 --> 01:06:54
know, university and it was like a

01:06:52 --> 01:06:56
problem

01:06:53 --> 01:06:58
>> and they're all kind of really intrigued

01:06:55 --> 01:07:00
about what happened. And so I pull up a

01:06:57 --> 01:07:02
whiteboard and started explaining what I

01:06:59 --> 01:07:04
did and and everyone was engaged. I gave

01:07:01 --> 01:07:06
them a lecture basically. your oral exam

01:07:03 --> 01:07:07
for your PhD.

01:07:05 --> 01:07:08
This is great.

01:07:06 --> 01:07:10
>> They were they were they were really

01:07:07 --> 01:07:12
excited and uh and I think I it was

01:07:09 --> 01:07:13
endearing to them. I was like, "Oh, wow.

01:07:11 --> 01:07:14
This is a this is a very interesting

01:07:12 --> 01:07:17
problem."

01:07:13 --> 01:07:20
>> Um and then I was like, "Okay, great.

01:07:16 --> 01:07:22
Thank you." And I was like, "Hey, wait,

01:07:19 --> 01:07:25
>> wait. We don't know what to do with you.

01:07:21 --> 01:07:26
Do we send you to jail? Do we

01:07:24 --> 01:07:29
>> And uh I was like, "Hey, we have to

01:07:26 --> 01:07:31
escalate to the university um uh

01:07:28 --> 01:07:34
president." and and he he was a great

01:07:30 --> 01:07:36
man and I think uh he gave me a second

01:07:33 --> 01:07:38
chance in life and I went to him and I

01:07:35 --> 01:07:40
uh you know I I explained the situation

01:07:37 --> 01:07:41
I said like I'm really frustrated. I

01:07:39 --> 01:07:43
need to graduate. I need to get on with

01:07:40 --> 01:07:46
my life. I've been here for six years

01:07:42 --> 01:07:48
and I just can't sit in in in school the

01:07:45 --> 01:07:51
stuff I already know. I'm a really good

01:07:47 --> 01:07:52
programmer. Uh and and he gave me a

01:07:50 --> 01:07:54
Spider-Man line at the time. was like

01:07:51 --> 01:07:55
with great power comes great

01:07:53 --> 01:07:56
responsibility and you have a great

01:07:54 --> 01:07:58
power and you know and it really

01:07:55 --> 01:08:01
affected me and I think he he was right

01:07:57 --> 01:08:02
at the moment and and so he said well

01:08:00 --> 01:08:04
we're going to let you go but you're

01:08:01 --> 01:08:07
going to have to help the system

01:08:03 --> 01:08:09
administrators secure the system

01:08:06 --> 01:08:10
>> uh for the summer I was like happy to do

01:08:08 --> 01:08:13
it and I show up and all the programmers

01:08:10 --> 01:08:15
there hate me hate my gut%

01:08:12 --> 01:08:16
>> and uh they they would lock me out like

01:08:14 --> 01:08:18
I would see them they would be outside I

01:08:16 --> 01:08:19
would knock on the door and nobody would

01:08:17 --> 01:08:21
listen it's like they don't want to let

01:08:18 --> 01:08:23
me in I try to help them a little bit

01:08:20 --> 01:08:26
hey theyen't and collaborative and so I

01:08:22 --> 01:08:28
was like all right whatever. Uh and so

01:08:25 --> 01:08:31
it came time for me to actually

01:08:27 --> 01:08:33
graduate. It was the final project and

01:08:30 --> 01:08:35
one of the computer science dean came to

01:08:32 --> 01:08:37
me and he said look I I need to call a

01:08:34 --> 01:08:39
favor. I was a big part of the reason we

01:08:36 --> 01:08:41
kind of let you go and we didn't kind of

01:08:38 --> 01:08:44
prosecute you. Uh so I want you to work

01:08:40 --> 01:08:46
with me on the um on the final project

01:08:43 --> 01:08:48
and it's going to be around security and

01:08:45 --> 01:08:50
hacking. I was like no I'm I'm done with

01:08:47 --> 01:08:51
at [ __ ] like I just want to I just

01:08:49 --> 01:08:53
want to build programming environments

01:08:50 --> 01:08:55
and things like that. Uh and he's like

01:08:52 --> 01:08:56
no you have to do it. I was like okay.

01:08:54 --> 01:08:58
So I I thought I' do something more

01:08:56 --> 01:09:00
productive. So I wrote a security

01:08:57 --> 01:09:02
scanner uh that was very proud of that

01:08:59 --> 01:09:03
kind of crawls the different side

01:09:01 --> 01:09:06
that tries to do SQL injection and all

01:09:02 --> 01:09:07
sorts of things. Um and actually my

01:09:05 --> 01:09:08
security scanner found another

01:09:06 --> 01:09:09
vulnerability in the system.

01:09:07 --> 01:09:11
>> Amazing.

01:09:08 --> 01:09:13
>> And so I went to the defense and he's

01:09:10 --> 01:09:15
like you need to run this security

01:09:12 --> 01:09:16
scanner live and show that there's a

01:09:14 --> 01:09:18
vulnerability. And I didn't understand

01:09:15 --> 01:09:21
what was going on at the time, but I

01:09:17 --> 01:09:22
just okay. So I gave the presentation

01:09:20 --> 01:09:24
about how the system works and I was

01:09:21 --> 01:09:25
like, oh, let's run it. And it showed

01:09:23 --> 01:09:26
that there's security vulnerability.

01:09:24 --> 01:09:29
Okay, let's get let's try to get a

01:09:25 --> 01:09:31
shell. So the system automatically runs

01:09:28 --> 01:09:34
all the security stuff and it gets you

01:09:30 --> 01:09:36
a shell. And then the other

01:09:33 --> 01:09:39
dean that turned out he was giving the

01:09:35 --> 01:09:41
mandate to secure the system. And now I

01:09:38 --> 01:09:45
started to realize I'm a pawn in some

01:09:40 --> 01:09:47
kind of rivalry here. and and his his

01:09:44 --> 01:09:49
face turned red and he's like, "No, it's

01:09:46 --> 01:09:52
impossible. You know, we secured the

01:09:48 --> 01:09:54
system. You're lying." I was like, "You

01:09:51 --> 01:09:56
know, you're accusing me of lying." All

01:09:53 --> 01:09:59
right. What should we know? Should we

01:09:55 --> 01:10:00
know your um uh your salary or your

01:09:58 --> 01:10:02
password? What do you want me to look

01:09:59 --> 01:10:03
up? And I was like, "Yeah, I look up my

01:10:01 --> 01:10:06
password." So, I I look up his his

01:10:02 --> 01:10:07
password. Uh and it was like gibberish.

01:10:05 --> 01:10:08
It was encrypted. And I was like, "Oh,

01:10:06 --> 01:10:09
that's not my password. See, you're

01:10:07 --> 01:10:11
lying." I was like, "Well, there's a

01:10:08 --> 01:10:14
decrypt function that the programmers

01:10:10 --> 01:10:16
put in there." So I I do decrypt and it

01:10:13 --> 01:10:18
shows his password. It was something

01:10:15 --> 01:10:21
embarrassing. I forgot I forgot what it

01:10:17 --> 01:10:22
was. And so he gets up really angry,

01:10:20 --> 01:10:25
shakes my hand and leaves to change his

01:10:21 --> 01:10:27
password. Uh so that I I was able to

01:10:24 --> 01:10:29
hack into the university another time.

01:10:26 --> 01:10:31
Luckily I I was able to graduate, gave

01:10:28 --> 01:10:34
them the software, they secured the

01:10:30 --> 01:10:36
system. But um but yeah, later on I

01:10:33 --> 01:10:38
would realize that yeah, he wanted to

01:10:35 --> 01:10:38
embarrass the other guy, which was why I

01:10:37 --> 01:10:40
was in the middle.

01:10:38 --> 01:10:41
>> Politics. Well, I think the the moral

01:10:39 --> 01:10:43
of the story is if if you can

01:10:40 --> 01:10:44
successfully hack into your school

01:10:42 --> 01:10:45
system and change your grade, you

01:10:43 --> 01:10:46
deserve the grade and you deserve to

01:10:44 --> 01:10:47
graduate.

01:10:45 --> 01:10:48
>> I I think so.

01:10:46 --> 01:10:50
>> And and and just for any for any parents

01:10:47 --> 01:10:51
out there just children out there, you

01:10:49 --> 01:10:53
can just you can see you can site you

01:10:50 --> 01:10:54
can sight site me as the moral you can

01:10:52 --> 01:10:56
site you can set out to me as the moral

01:10:54 --> 01:10:59
authority moral authority on this.

01:10:55 --> 01:11:03
One maybe lesson I think that is very

01:10:58 --> 01:11:06
relevant for the AI age. Uh I think that

01:11:02 --> 01:11:09
he traditional sort of more conformous

01:11:05 --> 01:11:11
path is paying less and less dividends

01:11:08 --> 01:11:14
and I think uh you know kids coming up

01:11:10 --> 01:11:16
today should use all the tools available

01:11:13 --> 01:11:19
to be able to discover and chart their

01:11:15 --> 01:11:22
own paths cuz I feel like just you know

01:11:18 --> 01:11:24
listening to the traditional advice and

01:11:21 --> 01:11:27
oing the same things that people have

01:11:23 --> 01:11:30
always done is just not as it's not

01:11:26 --> 01:11:31
working out as much as as we'd like.

01:11:29 --> 01:11:34
>> Thanks for coming on the podcast. Thank

01:11:30 --> 01:11:34
you, man. Fantastic.

01:11:41 --> 01:11:45
Wow.

01:11:45 --> 01:11:49
Wow.

<!-- YOUTUBE_TRANSCRIPT_END -->
