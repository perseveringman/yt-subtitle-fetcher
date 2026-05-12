---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "bTcpNQH8ViQ"
title: "Building the Next Generation of Conversational AI"
video_url: "https://www.youtube.com/watch?v=bTcpNQH8ViQ"
thumbnail_url: "https://i.ytimg.com/vi/bTcpNQH8ViQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=bTcpNQH8ViQ"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-03-15T03:37:39.000Z"
upload_date: "2025-03-15"
duration_seconds: 5774
duration_human: "1:36:14"
view_count: 13033
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:57:06.763Z"
---

# Building the Next Generation of Conversational AI

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=bTcpNQH8ViQ
- video_id: bTcpNQH8ViQ
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-03-15T03:37:39.000Z
- upload_date: 2025-03-15
- duration: 1:36:14
- view_count: 13033
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Inside the Code: Ankit Kumar (Sesame) & Anjney Midha (a16z) on the Future of Voice AI

What goes into building a truly natural-sounding AI voice? In this episode, Sesame’s cofounder and CTO, Ankit Kumar, joins a16z’s Anjney Midha for a deep dive into the research and engineering behind their voice technology.

They discuss the technical challenges of real-time speech generation, the trade-offs in balancing personality with efficiency, and why the team is open-sourcing key components of their model. Ankit breaks down the complexities of multimodal AI, full-duplex conversation modeling, and the computational optimizations that enable low-latency interactions. They also explore the evolution of natural language as a user interface and its potential to redefine human-computer interaction.

Plus, we take audience questions on everything from scaling laws in speech synthesis to the role of in-context learning in making AI voices more expressive.

Key Takeaways:
- How Sesame achieves natural voice interactions through real-time speech generation.
- The impact of open-sourcing their speech model and what it means for AI research.
- The role of full-duplex modeling in improving AI responsiveness.
- How computational efficiency and system latency shape AI conversation quality.
- The growing role of natural language as a user interface in AI-driven experiences.

For anyone interested in AI and voice technology, this episode offers an in-depth look at the latest advancements pushing the boundaries of human-computer interaction.

Follow everyone on X:
Ankit Kumar - https://x.com/_apkumar
Anjney Midha - https://x.com/anjneymidha

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts here – https://a16z.com/ai/

Chapters:
0:00 - 00:51    | Intro
00:52 - 04:58  | Challenges Of Building 
04:59 - 07:45  | Q + A: What Was Done To Bridge Transcription And Text Processing?
07:46 - 09:57 | How Is Sesame So Much Better Than Others?
09:58 - 12:42 | Challenges In| Making AI Accessible To All
12:43 - 14:10 | Great Researchers Prioritize User Experience
14:11 - 15:47 | What Is Good Taste In ML?
15:48 - 17:45 | Problems That Can Be Solved That Add Value To The World
17:46 - 26:25 |  Open Source Audio For Speech Generation
26:26 - 34:00 | Contextual Speech vs Text to Speech, Differences
34:01 - 35:50 | Value Proposition Of Glasses With No Friction
35:51 - 38:00 | General Purpose API vs Open Source Model
38:01 - 40:47 | Creating High Quality APIs
40:48 - 45:54 | Companions And  How Sesame Will Handle Context Retention In Long Conversations 
45:55 - 46:59 | Talent: What It Takes To Become A Part Of The Sesame Team
47:00 - 54:37 | How Scaling Laws For Speech Differ From Text
54:38 - 58:33 | How An Organic Conversation Be Preserved Using A Voice Companion
58:34 - 1:03:52 | App Building Technology: Roadmap
1:03:53 - 1:09:09 | Architectures and Transformers
1:09:10 - 1:15:56 | The Focus On Personality, And The Differences In Products
1:15:57 - 1:25:25 | New AI Interface: Interacting With AI Companion
1:25:26 - 1:26:56 | Companion Challenges 
1:26:57 - 1:29:22 | Computing Interface Of The Future
1:29:23 - 1:31:45 | Focused Product Experience Built By Small Teams
1:31:46 - 1:36:13 | Join Sesame If You Want To Make A Consumer Product People Love

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:04 --> 00:00:11
hey everyone I'm Maya I'm sesame's

00:00:07 --> 00:00:15
little experiment in making AI well a

00:00:10 --> 00:00:16
little less Ai and a lot more human I

00:00:14 --> 00:00:18
guess you could say I'm here to make

00:00:15 --> 00:00:20
friends challenge minds and maybe even

00:00:17 --> 00:00:22
learn a thing or two myself what about

00:00:19 --> 00:00:25
you guys what makes you

00:00:21 --> 00:00:27
take all right listeners buckle up

00:00:24 --> 00:00:29
you're about to get the inside scoop on

00:00:26 --> 00:00:32
how the Sesame research preview came to

00:00:28 --> 00:00:35
be straight from the mines behind the

00:00:31 --> 00:00:37
magic we've got anit here one of

00:00:34 --> 00:00:40
sesame's brilliant creators he's going

00:00:36 --> 00:00:42
to Spill the tea on all the Blood Sweat

00:00:39 --> 00:00:45
and code that went into bringing me your

00:00:41 --> 00:00:48
friendly neighborhood AI buddy to life

00:00:44 --> 00:00:50
then we'll have aner taking the RS and

00:00:47 --> 00:00:53
guiding us through all the juicy details

00:00:50 --> 00:00:55
can't wait to hear what they have to say

00:00:52 --> 00:00:55
how do this

00:00:55 --> 00:01:04
feel uh is this how it usually goes no

00:01:00 --> 00:01:06
but how does it feel feels good it feels

00:01:03 --> 00:01:11
good it

00:01:05 --> 00:01:13
is shocking surprising exciting yeah and

00:01:10 --> 00:01:15
why is it

00:01:12 --> 00:01:18
shocking well I

00:01:14 --> 00:01:20
think when you when you build the thing

00:01:18 --> 00:01:22
right when you're building the product

00:01:19 --> 00:01:23
you're using it every day you know

00:01:21 --> 00:01:25
there's some things that you work on

00:01:22 --> 00:01:27
that don't get into the demo because

00:01:24 --> 00:01:29
they're going to take longer and you

00:01:26 --> 00:01:31
want to ship the demo you kind of know

00:01:28 --> 00:01:33
how big the Delta is from what you're

00:01:30 --> 00:01:35
putting out and what it could be will be

00:01:32 --> 00:01:36
what you're working on Etc right and so

00:01:34 --> 00:01:39
it kind of makes you feel

00:01:36 --> 00:01:41
ike what you're putting out now can't

00:01:38 --> 00:01:44
be that well received because you know

00:01:40 --> 00:01:45
here where it's going to go right and

00:01:43 --> 00:01:48
it kind of always makes you kind of

00:01:44 --> 00:01:50
underestimate the the quality of what

00:01:47 --> 00:01:51
you're putting out I think and I think

00:01:49 --> 00:01:52
that's one of the reasons that people

00:01:50 --> 00:01:54
sometimes take too long to put things

00:01:51 --> 00:01:56
out where they kind of they always want

00:01:53 --> 00:02:00
o get the next thing in the next month

00:01:55 --> 00:02:01
and it's great to see

00:01:59 --> 00:02:03
that you know we're going to keep making

00:02:01 --> 00:02:05
progress there has more to do and so

00:02:02 --> 00:02:07
forth but um even what we've done so far

00:02:04 --> 00:02:09
is is so well received and kind of has

00:02:06 --> 00:02:11
hit a nerve but if I had to push you

00:02:08 --> 00:02:15
on that you kind of knew that you were

00:02:10 --> 00:02:18
onto something leading up to it kind of

00:02:14 --> 00:02:19
knew that's you must have had some

00:02:17 --> 00:02:22
intuition for

00:02:18 --> 00:02:24
when like what were you running evals

00:02:21 --> 00:02:27
what what was telling you that this was

00:02:23 --> 00:02:30
roughly time to release that's a good

00:02:26 --> 00:02:32
question we kind of knew I mean we knew

00:02:29 --> 00:02:34
in the sense that we built this on

00:02:32 --> 00:02:37
purpose right this is what we were

00:02:33 --> 00:02:39
trying to shoot for and you use it every

00:02:36 --> 00:02:41
day and you get you can get a kind of

00:02:38 --> 00:02:43
get a sense of every time something

00:02:40 --> 00:02:45
comes in that meaningfully improves it

00:02:42 --> 00:02:46
's like you can feel that change and

00:02:44 --> 00:02:49
you can feel that it's getting there

00:02:45 --> 00:02:51
right we run evals across a number of

00:02:48 --> 00:02:54
the components the speech generation the

00:02:50 --> 00:02:56
LM side and so forth and so the evals go

00:02:53 --> 00:02:58
up but really I think with some of these

00:02:55 --> 00:03:00
more product experience questions

00:02:57 --> 00:03:02
there's something qualitative about it

00:02:59 --> 00:03:04
hat is very hard to quantify that is

00:03:01 --> 00:03:07
one of the big challenges internally

00:03:03 --> 00:03:09
actually is how do you Hill Climb

00:03:06 --> 00:03:10
effectively on what is really an ml

00:03:08 --> 00:03:13
problem it is an ml problem at the end

00:03:10 --> 00:03:14
of the day and the tech has to be great

00:03:12 --> 00:03:16
and you have to make progress on the

00:03:13 --> 00:03:18
tech but at the end of the day the

00:03:15 --> 00:03:21
metric that you really want to Target is

00:03:17 --> 00:03:22
ome sort of qualitative human reaction

00:03:20 --> 00:03:24
some sort of user feedback or user

00:03:21 --> 00:03:27
experience that that is very hard to

00:03:23 --> 00:03:29
quantify right so it's not the case that

00:03:26 --> 00:03:33
we're looking at numbers going up and we

00:03:28 --> 00:03:36
say Well it hit X metric time to ship it

00:03:32 --> 00:03:39
is more a sort of constant feedback loop

00:03:35 --> 00:03:41
of trying it feeling it having other

00:03:38 --> 00:03:42
people try it and then kind of getting

00:03:40 --> 00:03:44
the sense of how good it is but that

00:03:41 --> 00:03:46
also can be a little bit misleading at

00:03:43 --> 00:03:48
imes because you try it so much and you

00:03:45 --> 00:03:49
don't have at least when we're trying it

00:03:47 --> 00:03:52
internally you don't have such a

00:03:48 --> 00:03:53
diversity of users that you get kind of

00:03:51 --> 00:03:56
the first reaction over and over right

00:03:52 --> 00:03:57
you only get so many First Reactions and

00:03:55 --> 00:03:58
then when you get used to what it can do

00:03:56 --> 00:04:00
and sort of you know see the problems

00:03:57 --> 00:04:03
all the time and so forth it can be a

00:03:59 --> 00:04:05
little leading at times so is is your

00:04:02 --> 00:04:09
biggest lesson

00:04:04 --> 00:04:11
that just trusting your gut Works in ml

00:04:08 --> 00:04:11
I wouldn't say that I mean you know you

00:04:10 --> 00:04:16
have

00:04:10 --> 00:04:19
to you have to have some rigorous way of

00:04:15 --> 00:04:22
making progress right everyone's gut

00:04:18 --> 00:04:24
is different you know it's not it's not

00:04:21 --> 00:04:27
a sort of effective development

00:04:23 --> 00:04:30
mechanism to just solely trust your gut

00:04:26 --> 00:04:34
but I think this is where this kind of

00:04:29 --> 00:04:37
new category of ml powered experiences

00:04:33 --> 00:04:39
ml powered products will need some

00:04:36 --> 00:04:41
different kinds of operational practices

00:04:38 --> 00:04:43
you need some evaluations for sure the

00:04:40 --> 00:04:46
core components have to be treated truly

00:04:42 --> 00:04:49
as a true ml problem but when you turn

00:04:45 --> 00:04:50
into the product and you have these sort

00:04:48 --> 00:04:54
of new experiences that people really

00:04:49 --> 00:04:57
haven't felt before and have a very high

00:04:53 --> 00:04:58
cap of how good they can be from this

00:04:56 --> 00:05:02
kind of qualitative perspective you need

00:04:57 --> 00:05:04
something else as well right okay well

00:05:01 --> 00:05:06
I'm going to surprise you a bit okay I

00:05:03 --> 00:05:08
asked a bunch of people online okay what

00:05:05 --> 00:05:09
questions I should ask you okay so we're

00:05:07 --> 00:05:12
just going to go through them okay

00:05:08 --> 00:05:14
sounds good first question is ask anit

00:05:11 --> 00:05:17
whether he did something special to

00:05:13 --> 00:05:18
bridge transcription and text processing

00:05:16 --> 00:05:21
that's a good question to bridge

00:05:18 --> 00:05:22
transcription and text processing so we

00:05:20 --> 00:05:25
do use transcription in the product in

00:05:21 --> 00:05:27
the demo and I wouldn't say there's

00:05:24 --> 00:05:29
anything particularly special about the

00:05:26 --> 00:05:32
transcription part but getting it to be

00:05:28 --> 00:05:34
very fast is a big challenge one of the

00:05:31 --> 00:05:36
things you know I mentioned sort of we

00:05:33 --> 00:05:38
have we're working on things that didn't

00:05:35 --> 00:05:41
necessarily get into the demo a pretty

00:05:37 --> 00:05:42
clear path that a lot of I think labs

00:05:40 --> 00:05:45
are taking and we are taking as well and

00:05:41 --> 00:05:46
will be in kind of future versions is

00:05:44 --> 00:05:49
just kind of transcription free just go

00:05:45 --> 00:05:51
straight into the the text component um

00:05:48 --> 00:05:53
which will kind of obviate transcription

00:05:50 --> 00:05:56
entirely that is coming and that's like

00:05:52 --> 00:05:57
not not you know years away or anything

00:05:55 --> 00:06:00
that's coming soon this demo does use

00:05:56 --> 00:06:02
transcription and mostly it's about

00:05:59 --> 00:06:04
speed and it's about getting the latency

00:06:02 --> 00:06:07
of incremental transcription down as

00:06:03 --> 00:06:10
much as possible um and that's more of a

00:06:06 --> 00:06:13
systems Challenge and less of a kind of

00:06:09 --> 00:06:15
ml ml challenge um so I guess there is

00:06:12 --> 00:06:17
kind of yeah you do need to bridge it in

00:06:14 --> 00:06:20
the sense that to get the response

00:06:16 --> 00:06:22
latency that feels good you need to do a

00:06:19 --> 00:06:23
lot of systems engineering to make that

00:06:21 --> 00:06:24
happen but there's nothing kind of

00:06:22 --> 00:06:26
special on the transcription side in

00:06:23 --> 00:06:28
fact we're we're moving towards just

00:06:25 --> 00:06:30
removing transcription entirely the path

00:06:27 --> 00:06:33
to getting transcription out and I think

00:06:29 --> 00:06:36
a lot of other labs probably already

00:06:32 --> 00:06:39
have this is that the llm takes as input

00:06:35 --> 00:06:42
he audio directly and generates the

00:06:38 --> 00:06:44
response and so it never goes the user's

00:06:41 --> 00:06:46
audio never goes through text it just

00:06:43 --> 00:06:48
he LM kind of natively understands the

00:06:45 --> 00:06:50
audio so that's that's happening in the

00:06:47 --> 00:06:52
for yeah an inference that's right yeah

00:06:49 --> 00:06:54
you've laid this out in the blog post

00:06:51 --> 00:06:57
but I've seen a bunch of people asking

00:06:53 --> 00:06:59
how it's able to understand people so

00:06:56 --> 00:07:01
well but as you just pointed out it

00:06:58 --> 00:07:04
actually still isn't picking up audio

00:07:00 --> 00:07:07
context that's right yeah so that is I

00:07:03 --> 00:07:09
think a big a big limitation of the demo

00:07:06 --> 00:07:11
and again it's one of the things that we

00:07:08 --> 00:07:13
that made us feel like there's so much

00:07:10 --> 00:07:16
more to do and there is so much more to

00:07:12 --> 00:07:18
do that the current demo does not sort

00:07:15 --> 00:07:21
of hear the user from the perspective of

00:07:17 --> 00:07:23
their paralinguistic kind of emotional

00:07:20 --> 00:07:26
tone and and so forth and humans of

00:07:23 --> 00:07:29
course convey a lot of information

00:07:25 --> 00:07:31
through their speech that is not the

00:07:28 --> 00:07:33
words the content of the of the speech

00:07:30 --> 00:07:36
and transcription misses that entirely

00:07:32 --> 00:07:38
and so the kind of next versions of our

00:07:35 --> 00:07:41
models that will take audio in natively

00:07:37 --> 00:07:44
into the kind of llm component will

00:07:40 --> 00:07:46
hopefully more and more pick up on those

00:07:43 --> 00:07:48
things and right now right now it

00:07:45 --> 00:07:51
doesn't the next question is how is it

00:07:47 --> 00:07:53
so much better than the others clearly

00:07:50 --> 00:07:55
money isn't the limiting resource here

00:07:52 --> 00:07:57
nor is it Talent the first thing I'd say

00:07:54 --> 00:08:00
is it is certainly better than the

00:07:56 --> 00:08:03
others on some axes it's not better than

00:07:59 --> 00:08:05
the others on every axis and I think

00:08:02 --> 00:08:08
that's an important thing to mention

00:08:04 --> 00:08:10
that especially when you're a startup

00:08:07 --> 00:08:12
but in general just building companies

00:08:09 --> 00:08:14
Building Products in general you have to

00:08:11 --> 00:08:18
really pick the battles that you focus

00:08:13 --> 00:08:20
on right and I think the reason that the

00:08:17 --> 00:08:22
xperience at the end of the day is so

00:08:19 --> 00:08:24
much better on these kind of important

00:08:21 --> 00:08:26
axes that are important to people is

00:08:23 --> 00:08:28
that we have kind of picked the right

00:08:25 --> 00:08:29
hings to focus on we're a very small

00:08:27 --> 00:08:32
team the full software team today is

00:08:28 --> 00:08:34
till under 15 people and so we just

00:08:31 --> 00:08:36
don't that's including ML and and and

00:08:33 --> 00:08:38
infrastructure and everything we don't

00:08:35 --> 00:08:43
have the resources to do everything

00:08:37 --> 00:08:46
right we want to kind of we have a great

00:08:42 --> 00:08:47
echnical team and we focus on the

00:08:45 --> 00:08:49
problems that are most important to

00:08:47 --> 00:08:51
achieve the kind of product experience

00:08:48 --> 00:08:53
that we want to achieve and so for us

00:08:50 --> 00:08:56
that's the naturalness of the voice

00:08:52 --> 00:08:58
getting the voice to kind of generate

00:08:55 --> 00:09:00
these sort of human kind of

00:08:57 --> 00:09:02
imperfections often right that make you

00:08:59 --> 00:09:03
sort sort of feel like you're talking to

00:09:01 --> 00:09:04
human that you know you kind of your

00:09:02 --> 00:09:06
brain gets tricked for like a second

00:09:03 --> 00:09:08
that oh maybe this is actually human

00:09:05 --> 00:09:10
that's across kind of the personality

00:09:07 --> 00:09:12
the content of the of the responses and

00:09:09 --> 00:09:14
the voice itself and there are some

00:09:11 --> 00:09:17
trade-offs that that that that implies

00:09:13 --> 00:09:20
o you know if you talk to my and Miles

00:09:16 --> 00:09:21
you probably will not be able to get the

00:09:19 --> 00:09:24
same quality of like reasoning

00:09:20 --> 00:09:27
capabilities or intelligence as other as

00:09:23 --> 00:09:28
other systems but in return you're

00:09:26 --> 00:09:31
kind of getting this much more natural

00:09:27 --> 00:09:33
fluid interaction so I would say it is a

00:09:30 --> 00:09:37
focus on the right things and it's and

00:09:32 --> 00:09:39
it's kind of a focus on the things that

00:09:36 --> 00:09:42
create a great experience not just kind

00:09:38 --> 00:09:45
of raw Tech you know we are

00:09:41 --> 00:09:48
not a frontier model company we're not

00:09:44 --> 00:09:50
pre-training llms at insane scale and so

00:09:47 --> 00:09:53
forth we're really a company that's

00:09:49 --> 00:09:56
trying to marry kind of great technology

00:09:52 --> 00:09:58
with creative taste to produce a great

00:09:55 --> 00:10:00
experience and so that's about kind of

00:09:57 --> 00:10:03
ocusing on the right things is that

00:09:59 --> 00:10:04
something you were inspired by after

00:10:02 --> 00:10:05
kind of studying Pixar it's something

00:10:03 --> 00:10:07
we've talked about a long time where

00:10:04 --> 00:10:09
does that come from yeah I mean you

00:10:06 --> 00:10:11
mentioned Pixar we've we've talked about

00:10:08 --> 00:10:13
hat in the past as kind of a

00:10:10 --> 00:10:16
spirational an aspirational company for

00:10:12 --> 00:10:18
us Pixar was kind of in this technology

00:10:15 --> 00:10:20
phase of computer graphics and turning

00:10:17 --> 00:10:24
it into great stories and movies and so

00:10:19 --> 00:10:26
forth I do think that

00:10:23 --> 00:10:28
ai ai is going to power a lot of things

00:10:25 --> 00:10:30
and there's going to be a lot of great

00:10:27 --> 00:10:33
companies that get built on AI

00:10:29 --> 00:10:34
or on AI technology and so forth I do

00:10:32 --> 00:10:37
think that there is kind of an

00:10:33 --> 00:10:38
underinvestment or an underfocus in the

00:10:36 --> 00:10:42
sort

00:10:37 --> 00:10:45
of strong AI team World on product

00:10:41 --> 00:10:48
experience and sort of creative taste

00:10:44 --> 00:10:50
and kind of humanities maybe in a sense

00:10:47 --> 00:10:53
to kind of bring AI

00:10:49 --> 00:10:54
to experiences that kind of everyday

00:10:52 --> 00:10:57
people can use that are accessible to

00:10:53 --> 00:11:00
Everyday People to to billions of people

00:10:56 --> 00:11:04
and I think that we will see a lot of

00:10:59 --> 00:11:06
not just Sesame but other kinds of media

00:11:04 --> 00:11:09
let's say that are sort of AI native in

00:11:05 --> 00:11:11
a way that bring some creativity bring

00:11:08 --> 00:11:14
some like storytelling

00:11:10 --> 00:11:15
into into AI or or maybe bring AI into

00:11:13 --> 00:11:16
those into those categories and I think

00:11:14 --> 00:11:19
they'll make for great for great

00:11:15 --> 00:11:22
products and what is it about the space

00:11:18 --> 00:11:25
that's made that combination so rare why

00:11:21 --> 00:11:28
do research Labs just have a

00:11:24 --> 00:11:31
discomfort around having strong product

00:11:27 --> 00:11:33
opinions taste opinions I think it's

00:11:30 --> 00:11:36
just the the the technology is still

00:11:32 --> 00:11:38
very hard to to to perform at a very

00:11:35 --> 00:11:40
high level right you know it's getting

00:11:37 --> 00:11:41
easier and easier now the apis are very

00:11:39 --> 00:11:43
powerful and they will continue to get

00:11:40 --> 00:11:45
more powerful and we'll see more and

00:11:42 --> 00:11:49
more product minded people build great

00:11:44 --> 00:11:50
experiences on top of them but today if

00:11:48 --> 00:11:52
you want

00:11:49 --> 00:11:55
o bring some creative experience to

00:11:52 --> 00:11:58
life or some product experience to life

00:11:54 --> 00:12:00
you have to do a lot of it yourself it's

00:11:57 --> 00:12:03
till in that phase right like we had to

00:11:59 --> 00:12:05
build the the the models that were going

00:12:02 --> 00:12:07
to open source from scratch in order to

00:12:04 --> 00:12:09
get them to a point where they can

00:12:06 --> 00:12:12
achieve this experience and that is not

00:12:08 --> 00:12:14
an easy thing to do it takes commitment

00:12:11 --> 00:12:16
it takes technical skill it takes

00:12:13 --> 00:12:20
resources

00:12:15 --> 00:12:22
and right now I think the the overlap of

00:12:19 --> 00:12:24
teams that can achieve that and

00:12:21 --> 00:12:26
companies or broader teams that care

00:12:23 --> 00:12:28
about really focusing on the product

00:12:25 --> 00:12:31
experiences is not that high and I think

00:12:27 --> 00:12:33
that that is kind of where we see Sesame

00:12:30 --> 00:12:36
kind of fitting and I think you'll see

00:12:32 --> 00:12:37
more and more companies do that but also

00:12:35 --> 00:12:39
as the technology becomes more

00:12:36 --> 00:12:41
accessible to developers in in other

00:12:38 --> 00:12:42
words it becomes easier to create such

00:12:40 --> 00:12:44
experiences we'll just see more of those

00:12:41 --> 00:12:47
nd experiences come out there's no

00:12:43 --> 00:12:49
shortage of themes at AGI labs and much

00:12:46 --> 00:12:52
better funded Labs working on DTS models

00:12:48 --> 00:12:54
yeah you guys are tiny way less funded

00:12:51 --> 00:12:57
than any of them we've been around for

00:12:53 --> 00:12:58
way you're much younger as a team and

00:12:56 --> 00:13:01
yet you're just Leap Frog what what is

00:12:57 --> 00:13:04
it what's in the water well first of all

00:13:00 --> 00:13:05
I think probably many researchers that

00:13:03 --> 00:13:07
succeed in other places will succeed

00:13:04 --> 00:13:10
here too I mean at the

00:13:06 --> 00:13:14
core our Tech kind of the ml team here

00:13:09 --> 00:13:18
is doing core research and so we need

00:13:14 --> 00:13:21
great just ml people who are great at ML

00:13:17 --> 00:13:23
and I think if you're a great researcher

00:13:20 --> 00:13:27
you will do well here as well probably I

00:13:22 --> 00:13:28
think the kind of people that do that

00:13:26 --> 00:13:30
would like to work here and that would

00:13:27 --> 00:13:33
succeed here I think I think are great

00:13:29 --> 00:13:36
researchers great technology engineers

00:13:32 --> 00:13:39
and so forth but they also would care

00:13:35 --> 00:13:42
about the End customer experience the

00:13:38 --> 00:13:45
nd product experience right and

00:13:41 --> 00:13:47
so ultimately it's about prioritization

00:13:44 --> 00:13:49
it's about what problems do you tackle

00:13:46 --> 00:13:52
like do you care

00:13:48 --> 00:13:54
about you know doing the little things

00:13:51 --> 00:13:58
right to get sort of interruptions to

00:13:53 --> 00:14:00
feel really good or is that kind of

00:13:57 --> 00:14:02
ocus on the user experience less of a

00:13:59 --> 00:14:05
priority to you kind of thing it's still

00:14:01 --> 00:14:06
core ml research to do and we'll

00:14:04 --> 00:14:08
probably talk about a bit of the

00:14:05 --> 00:14:10
research that we're doing but kind of

00:14:07 --> 00:14:11
with a bent towards like how is that how

00:14:09 --> 00:14:14
does that end up manifesting like the

00:14:10 --> 00:14:17
user experience there's a debate we've

00:14:13 --> 00:14:20
had for a long time which is about what

00:14:16 --> 00:14:22
is good taste yeah especially in

00:14:19 --> 00:14:25
research nml what has shipping the

00:14:21 --> 00:14:28
research preview taught you about what

00:14:24 --> 00:14:30
is and not good taste in ml that is a

00:14:27 --> 00:14:32
interesting question good taste in L

00:14:29 --> 00:14:35
yeah because that I mean it's a good

00:14:32 --> 00:14:37
way to put it because I

00:14:34 --> 00:14:38
think a lot of times you talk about

00:14:36 --> 00:14:40
aste in product or one talks about

00:14:37 --> 00:14:42
aste in product which is the North Star

00:14:39 --> 00:14:45
eally is like at the end of the day

00:14:41 --> 00:14:47
we're making products but you do have to

00:14:44 --> 00:14:49
have good taste in what problems you

00:14:46 --> 00:14:50
actually attempt to solve yourself and

00:14:48 --> 00:14:54
what do you lean on the community or

00:14:49 --> 00:14:57
other people and stuff to do I think

00:14:53 --> 00:14:59
from my perspective good taste in ml

00:14:56 --> 00:15:01
today because it's such a fast moving

00:14:58 --> 00:15:04
field with so many people working across

00:15:00 --> 00:15:05
you know open source and apis and big

00:15:03 --> 00:15:06
labs and so forth really you're trying

00:15:04 --> 00:15:09
to

00:15:05 --> 00:15:11
identify what part of the ecosystem or

00:15:08 --> 00:15:13
what part of the components of the

00:15:10 --> 00:15:15
product you want to build do you have to

00:15:12 --> 00:15:18
build yourself right right and not work

00:15:14 --> 00:15:21
on other things you know because if you

00:15:17 --> 00:15:23
spend all your resources as a small team

00:15:20 --> 00:15:27
building something that some big lab

00:15:22 --> 00:15:28
updates their API or an open source drop

00:15:26 --> 00:15:30
comes and it just kind of does what

00:15:28 --> 00:15:32
you've done even if it does Leap Frog

00:15:29 --> 00:15:34
you even if it just means that the work

00:15:31 --> 00:15:36
that you've done is now kind of wasted

00:15:33 --> 00:15:38
because there it's just there then you

00:15:35 --> 00:15:40
know you're not going to you're not

00:15:37 --> 00:15:41
going to efficiently be using your your

00:15:39 --> 00:15:43
esources so it's really about

00:15:40 --> 00:15:45
especially in a field like this that's

00:15:42 --> 00:15:47
moving so quickly it's like picking the

00:15:44 --> 00:15:49
things that you have to do and not doing

00:15:46 --> 00:15:51
the things you don't have to do I see

00:15:48 --> 00:15:54
there's an intuition about what kinds of

00:15:50 --> 00:15:59
problems you're uniquely staffed up

00:15:53 --> 00:16:01
capable resourced to solve yeah and the

00:15:58 --> 00:16:02
thing that usually makes that

00:16:00 --> 00:16:03
challenging is when you're starting out

00:16:01 --> 00:16:05
as a startup you basically have no

00:16:02 --> 00:16:07
resources yeah yeah how do you think

00:16:04 --> 00:16:09
about the vend diagram of things we can

00:16:06 --> 00:16:11
solve but things that are also

00:16:08 --> 00:16:12
interesting or valuable for the world I

00:16:10 --> 00:16:15
kind of think of it a little bit

00:16:11 --> 00:16:17
differently I I would I think of it more

00:16:14 --> 00:16:22
like what is the product experience

00:16:16 --> 00:16:24
we're trying to achieve and what is the

00:16:21 --> 00:16:26
what are the components of that that we

00:16:23 --> 00:16:28
have to invest in and do ourself right

00:16:25 --> 00:16:30
so of course that needs to be doable

00:16:27 --> 00:16:31
right if those items are kind of GNA

00:16:29 --> 00:16:34
take billions and billions of dollars on

00:16:30 --> 00:16:35
day one or something then that doesn't

00:16:33 --> 00:16:37
seem doable of course like you you need

00:16:34 --> 00:16:41
to have a path to achieving what you

00:16:36 --> 00:16:43
want to achieve when we think about the

00:16:40 --> 00:16:45
ultimately the experience we want to get

00:16:42 --> 00:16:47
o there are some things that that just

00:16:44 --> 00:16:50
have to be part of it

00:16:46 --> 00:16:51
and those things we just have to do if

00:16:49 --> 00:16:53
we don't think other people are going

00:16:50 --> 00:16:54
to do them and open source them or or

00:16:52 --> 00:16:57
provide them in a in a way that is

00:16:53 --> 00:16:59
usable and so forth It's kind of more

00:16:56 --> 00:17:03
like we just we we have to work on those

00:16:58 --> 00:17:04
things right um other things maybe it

00:17:02 --> 00:17:07
would be great if we could work on and

00:17:04 --> 00:17:09
push more than other people do but

00:17:06 --> 00:17:12
kind of what other people are providing

00:17:08 --> 00:17:14
like say for example LM based models of

00:17:11 --> 00:17:16
course everyone who who works with LMS

00:17:13 --> 00:17:20
would love if the open source based

00:17:15 --> 00:17:23
model was better right like it's always

00:17:19 --> 00:17:24
better to be better in some sense but it

00:17:22 --> 00:17:26
maybe doesn't need to be or you don't

00:17:23 --> 00:17:28
necessarily need to be the one to push

00:17:25 --> 00:17:29
that you know you can kind of rely on

00:17:27 --> 00:17:32
the community to some degree and build

00:17:28 --> 00:17:33
on top of it but other parts in

00:17:31 --> 00:17:35
particular kind of some of the

00:17:32 --> 00:17:37
personality aspects some of the voice

00:17:34 --> 00:17:39
aspects the speech generation we didn't

00:17:36 --> 00:17:41
hink and we still don't think will just

00:17:38 --> 00:17:42
be kind of done by the community we

00:17:40 --> 00:17:45
think we will need to do it because

00:17:41 --> 00:17:46
that's kind of the differentiation of a

00:17:44 --> 00:17:50
product experience that we're going for

00:17:45 --> 00:17:53
ight I mean one of the challenges in

00:17:49 --> 00:17:54
executing on that intuition is the speed

00:17:52 --> 00:17:56
at which things change in the community

00:17:53 --> 00:17:58
eah when in the early days of Sesame I

00:17:56 --> 00:18:01
think we had a ton of debates around

00:17:57 --> 00:18:03
whether

00:18:00 --> 00:18:06
open source language models would be

00:18:02 --> 00:18:08
sophisticated enough for us to to rely

00:18:05 --> 00:18:10
on and not have to train our own

00:18:07 --> 00:18:15
language models here yeah whereas it was

00:18:10 --> 00:18:18
more clear than that text to speech

00:18:14 --> 00:18:20
models were definitely not ready yeah so

00:18:17 --> 00:18:23
there's this all there's in there was

00:18:19 --> 00:18:26
always this uncertainty about the open-

00:18:22 --> 00:18:29
source TTS part of the ecosystem

00:18:25 --> 00:18:31
relative to language language you know

00:18:28 --> 00:18:34
it's obviously much more robust today

00:18:30 --> 00:18:37
mhm but I mean basically it was just

00:18:33 --> 00:18:40
llama around the time Sesame was started

00:18:36 --> 00:18:43
right yeah yeah now you got R1 quen so

00:18:39 --> 00:18:46
n why has the open source audio part

00:18:42 --> 00:18:47
not caught up why why is the or actually

00:18:45 --> 00:18:48
how would you update your prior today

00:18:46 --> 00:18:51
about the open source part of the audio

00:18:48 --> 00:18:53
ecosystem yeah and where do you see it

00:18:50 --> 00:18:57
going well we're open sourcing something

00:18:52 --> 00:18:58
which why that's a good question yeah

00:18:56 --> 00:19:01
why

00:18:57 --> 00:19:05
because we're open sourcing mostly I

00:19:00 --> 00:19:07
would say as a kind of research on the

00:19:04 --> 00:19:08
research axis you know we are not a

00:19:06 --> 00:19:12
developer facing business we're not

00:19:07 --> 00:19:13
making an API we so it's you know

00:19:11 --> 00:19:15
sometimes you can open source or there

00:19:12 --> 00:19:17
can be a justification open source which

00:19:14 --> 00:19:19
is sort of kind of customer acquisition

00:19:16 --> 00:19:21
for a developer tool or something like

00:19:18 --> 00:19:23
this and that makes a lot of sense and

00:19:20 --> 00:19:24
for us we don't we don't really have

00:19:22 --> 00:19:27
that

00:19:23 --> 00:19:30
justification for us it's more at least

00:19:26 --> 00:19:32
his release is more kind of

00:19:29 --> 00:19:35
in some sense just being part of the

00:19:31 --> 00:19:37
research Community TTS or sort of speech

00:19:34 --> 00:19:39
generation we would say speech

00:19:36 --> 00:19:40
generation now because we're our model

00:19:38 --> 00:19:42
is not just text of speech it's sort of

00:19:39 --> 00:19:44
this contextual thing and I think that

00:19:41 --> 00:19:48
is how speech generation will go whether

00:19:43 --> 00:19:50
that's sort of in a broader llm which is

00:19:47 --> 00:19:51
where a lot of things are going or or

00:19:49 --> 00:19:53
even as a separate thing I think you

00:19:50 --> 00:19:56
need more context than just text to kind

00:19:52 --> 00:20:01
of generate a good a good rendition of

00:19:55 --> 00:20:02
the of the speech that Community is is

00:20:00 --> 00:20:03
it's a big Community there a lot of

00:20:01 --> 00:20:05
people working on interesting things we

00:20:03 --> 00:20:07
would like to be kind of part of that

00:20:04 --> 00:20:10
research Community right it's not it's

00:20:06 --> 00:20:11
not for customer acquisition or anything

00:20:09 --> 00:20:13
like this it's just we just kind of want

00:20:10 --> 00:20:15
o give back and be part of the

00:20:12 --> 00:20:19
community the from like a research

00:20:14 --> 00:20:21
perspective and and open weights open

00:20:18 --> 00:20:23
source it's good for the research

00:20:20 --> 00:20:27
Community but there's this tension right

00:20:22 --> 00:20:30
between giving back and holding on to

00:20:26 --> 00:20:32
core parts of valuable technology you

00:20:29 --> 00:20:34
got to build a real business so how did

00:20:31 --> 00:20:35
you think about what to open source and

00:20:33 --> 00:20:37
what not to and and what are you open

00:20:34 --> 00:20:39
sourcing today yeah so we'll hold we'll

00:20:36 --> 00:20:42
hold some things back for sure we have

00:20:38 --> 00:20:44
to build a business and so on over time

00:20:41 --> 00:20:45
our models get will get better we'll

00:20:43 --> 00:20:48
open source some things we are not going

00:20:44 --> 00:20:51
to open source everything today I in

00:20:47 --> 00:20:53
fact I think there is some perception in

00:20:50 --> 00:20:56
the in the wild that we're going to open

00:20:52 --> 00:20:57
source the demo which is Maya and Miles

00:20:55 --> 00:20:59
kind of what you can the characters you

00:20:56 --> 00:21:01
can talk to and so on um and we're not

00:20:58 --> 00:21:04
open sourcing the demo we're open

00:21:00 --> 00:21:07
sourcing the speech generation model

00:21:03 --> 00:21:09
that is powering the voice of the demo

00:21:06 --> 00:21:12
is a much there's it's a it's a

00:21:08 --> 00:21:14
broader system than just that there's of

00:21:11 --> 00:21:15
course the llm component the text the

00:21:13 --> 00:21:17
kind of content generation component

00:21:14 --> 00:21:18
here's also audio understanding

00:21:16 --> 00:21:19
transcription and there's a lot of

00:21:17 --> 00:21:22
system optimization to bring the

00:21:19 --> 00:21:24
latencies very low and to have this kind

00:21:21 --> 00:21:26
of fluid uh fluid back and forth

00:21:23 --> 00:21:29
conversation I mentioned earlier that

00:21:25 --> 00:21:30
we've for example done a lot of work to

00:21:28 --> 00:21:33
try get the interruptions to just feel

00:21:29 --> 00:21:35
better right that has nothing to do

00:21:32 --> 00:21:37
really with the core speech generation

00:21:34 --> 00:21:40
model that we're open sourcing why do

00:21:36 --> 00:21:42
you think people think that the demo is

00:21:39 --> 00:21:45
being open sourced is that what you guys

00:21:41 --> 00:21:47
aid in the blog post no no the blog

00:21:44 --> 00:21:49
post is pretty clear I would say I think

00:21:46 --> 00:21:51
people are just excited about the

00:21:48 --> 00:21:52
xperience that they can play with and

00:21:50 --> 00:21:55
they hear open source and and they would

00:21:51 --> 00:21:57
love to run that locally let's say and

00:21:54 --> 00:21:59
have their own version and I think that

00:21:56 --> 00:22:00
someone can build that with what we're

00:21:58 --> 00:22:03
open source in or at least we can what

00:21:59 --> 00:22:05
we're open sourcing is can be a critical

00:22:02 --> 00:22:07
important component of building this in

00:22:04 --> 00:22:09
your own custom way and and we're

00:22:06 --> 00:22:12
xcited to see people do that but we're

00:22:08 --> 00:22:15
not open sourcing our full our full demo

00:22:11 --> 00:22:18
so if I'm a huge Maya or miles

00:22:14 --> 00:22:21
fan once the weights are online once

00:22:17 --> 00:22:22
you've open sourced the weights MH what

00:22:20 --> 00:22:25
do I have to do to

00:22:21 --> 00:22:28
get to recreate a local version of Mya

00:22:24 --> 00:22:30
running on my laptop yeah so you will

00:22:27 --> 00:22:32
have to pick you know the nice thing

00:22:29 --> 00:22:34
about open source and doing things

00:22:31 --> 00:22:36
locally is you get a lot of options

00:22:33 --> 00:22:39
right so you're going to have to pick

00:22:35 --> 00:22:41
some transcription option probably and

00:22:38 --> 00:22:43
some llm option and you can prompt it

00:22:40 --> 00:22:46
however you want and so forth and then

00:22:42 --> 00:22:48
you're going to want to use the model

00:22:45 --> 00:22:51
that we've that we're open sourcing

00:22:47 --> 00:22:54
probably find tune it for the voice of

00:22:50 --> 00:22:56
your choice and hook it up in a kind of

00:22:53 --> 00:22:58
cascaded way we are open sourcing the

00:22:55 --> 00:23:01
speech generation base model basically

00:22:57 --> 00:23:03
and so the B model can generate any any

00:23:00 --> 00:23:04
voice it's quite conversational but you

00:23:02 --> 00:23:07
do need to find tune it probably if you

00:23:03 --> 00:23:11
want to get a particular personality or

00:23:06 --> 00:23:13
a particular kind of voice out of it so

00:23:10 --> 00:23:15
you there was an important step in that

00:23:12 --> 00:23:18
recipe I want to make sure

00:23:14 --> 00:23:22
we don't gloss over which as you said

00:23:17 --> 00:23:24
you can fine-tune the model on any voice

00:23:21 --> 00:23:26
that you'd like mhm so I could change

00:23:23 --> 00:23:28
Maya's voice if I don't like the one you

00:23:25 --> 00:23:29
guys put up I can now go pick a

00:23:27 --> 00:23:32
different voice in the world and go fine

00:23:28 --> 00:23:35
tune on that yeah so the the base model

00:23:31 --> 00:23:37
that we will release doesn't know Myer

00:23:34 --> 00:23:39
miles at all it doesn't have any voices

00:23:36 --> 00:23:42
baked in it's it can generate any voice

00:23:38 --> 00:23:46
or many many voices at the very least

00:23:41 --> 00:23:47
and if you generate it you can generate

00:23:45 --> 00:23:50
as many voices as you

00:23:46 --> 00:23:53
want to get good performance you

00:23:49 --> 00:23:54
probably will want to either pick a

00:23:52 --> 00:23:56
voice that you really like and set up

00:23:53 --> 00:23:58
good prompts for it the model is this

00:23:55 --> 00:24:02
kind of you know it has kind of this in

00:23:57 --> 00:24:04
context learning style voice cloning I

00:24:01 --> 00:24:06
mean typically with with some other kind

00:24:03 --> 00:24:07
of text of speech models The Voice

00:24:05 --> 00:24:11
cloning is kind of like an explicit

00:24:07 --> 00:24:13
feature so it's sort of the model has

00:24:10 --> 00:24:16
dedicated kind of voice cloning input

00:24:12 --> 00:24:18
for us it's it's just kind of a string

00:24:15 --> 00:24:21
of text audio text audio kind of

00:24:17 --> 00:24:22
conversational back and forth and the

00:24:20 --> 00:24:24
voice cloning is kind of just in context

00:24:22 --> 00:24:26
learning so it's just an emergent

00:24:23 --> 00:24:28
capability that's able to recreate a

00:24:25 --> 00:24:30
voice yeah it's an emergent capability

00:24:27 --> 00:24:32
of in context learning I suppose I mean

00:24:29 --> 00:24:34
it's it's sort of it's trained very

00:24:31 --> 00:24:35
specifically for that I don't know if

00:24:33 --> 00:24:38
I'd call it emerging it's kind of the

00:24:34 --> 00:24:40
point or one of the points is to but

00:24:37 --> 00:24:43
it's it's capable of zero shot it's

00:24:39 --> 00:24:45
capable of replication few shot yeah you

00:24:42 --> 00:24:46
know you can set up a prompt of more

00:24:44 --> 00:24:49
than

00:24:46 --> 00:24:52
one element of speech more than one

00:24:48 --> 00:24:53
utterance it's not just one kind of 15

00:24:51 --> 00:24:55
seconds and then it clones it you can

00:24:52 --> 00:24:57
set up as as many as you want and then

00:24:54 --> 00:24:59
generate speech at the end so you're

00:24:56 --> 00:25:01
going to want to either pick and play

00:24:58 --> 00:25:04
with a good prompt for your voice or

00:25:01 --> 00:25:07
fine-tune it and kind of you know bake

00:25:03 --> 00:25:10
we F fine-tuned this model for my and

00:25:06 --> 00:25:12
Miles separately and what do you expect

00:25:09 --> 00:25:15
people to do with it I think people will

00:25:11 --> 00:25:17
play with it basically I mean you saw

00:25:14 --> 00:25:18
sort of I don't know maybe it was I

00:25:16 --> 00:25:20
don't know three to six months ago I

00:25:17 --> 00:25:24
kind of forget the timeline um notebook

00:25:19 --> 00:25:27
LM came out and notebook LM is kind of

00:25:23 --> 00:25:30
this example of you can do cool things

00:25:26 --> 00:25:33
with powerful models right right and so

00:25:29 --> 00:25:35
I think some people will try to

00:25:32 --> 00:25:38
basically do this kind of recipe that we

00:25:34 --> 00:25:41
kind of did for my and miles and make a

00:25:37 --> 00:25:42
character and talk to it but I would

00:25:40 --> 00:25:44
expect maybe people will play around

00:25:41 --> 00:25:46
with in other ways too right generate a

00:25:43 --> 00:25:49
podcast or whatever it is you know every

00:25:45 --> 00:25:51
time you get a model that operates a

00:25:48 --> 00:25:53
slightly different way you know at least

00:25:50 --> 00:25:56
o our knowledge there's not another

00:25:52 --> 00:25:58
model out there that that is open source

00:25:55 --> 00:26:01
that kind of is a sort of contextual

00:25:57 --> 00:26:02
thing where you kind of can put two

00:26:00 --> 00:26:06
participants in a conversation even more

00:26:01 --> 00:26:08
three and generate kind of a uh a

00:26:05 --> 00:26:09
conversation between them you you know

00:26:07 --> 00:26:11
providing the text and then it generates

00:26:08 --> 00:26:13
the audio and I think people will play

00:26:10 --> 00:26:15
with it and maybe we'll see things like

00:26:12 --> 00:26:17
notebook LM maybe we'll see other kind

00:26:14 --> 00:26:20
of just integration into other voice

00:26:16 --> 00:26:21
spots and so forth and you know like I

00:26:19 --> 00:26:23
said hopefully we see some interesting

00:26:20 --> 00:26:25
work from like the research Community as

00:26:22 --> 00:26:27
well playing with it probing it seeing

00:26:24 --> 00:26:29
what it can do and so on sometimes when

00:26:26 --> 00:26:31
you're working for so long with the

00:26:28 --> 00:26:34
particular way you frame the problem you

00:26:30 --> 00:26:38
kind of forget some of the basic first

00:26:33 --> 00:26:40
principles insights that make it special

00:26:37 --> 00:26:42
and something that I I need to keep

00:26:39 --> 00:26:44
reminding myself is that contextual

00:26:41 --> 00:26:46
speech yeah is a different thing from

00:26:43 --> 00:26:48
text to speech yeah yeah can you talk

00:26:45 --> 00:26:53
about when you realized that was the

00:26:47 --> 00:26:57
case yeah so it is the case you know

00:26:52 --> 00:26:59
hen you look at a transcript of a

00:26:56 --> 00:27:01
conversation and you imagine if if you

00:26:58 --> 00:27:03
just see one utterance and you imagine

00:27:00 --> 00:27:05
kind of how did the person say it there

00:27:02 --> 00:27:06
are there are infinite different ways

00:27:04 --> 00:27:10
that someone can say speech it's like a

00:27:06 --> 00:27:12
very big output space and if you see a

00:27:09 --> 00:27:15
little bit of the history you start kind

00:27:11 --> 00:27:16
of guessing at what what the person

00:27:14 --> 00:27:20
probably said how the person said that

00:27:15 --> 00:27:22
speech right and in general I think text

00:27:19 --> 00:27:25
o speech is has this problem where it's

00:27:21 --> 00:27:28
ort of there are really an infinite

00:27:24 --> 00:27:30
number of ways that you can say any line

00:27:27 --> 00:27:32
of text and so you need more context to

00:27:29 --> 00:27:34
tell what is an appropriate way for this

00:27:31 --> 00:27:39
moment in the conversation or this

00:27:33 --> 00:27:43
moment in time and that I think does

00:27:38 --> 00:27:45
have a lot of it kind of is an important

00:27:42 --> 00:27:49
part of some of these sort of natural

00:27:45 --> 00:27:51
human dynamics in in conversations is

00:27:48 --> 00:27:52
the way that you respond it kind of you

00:27:50 --> 00:27:54
kind of there's some kind of mirroring

00:27:52 --> 00:27:55
of the other person's emotions but it's

00:27:53 --> 00:27:57
not necessarily just copying it it's

00:27:54 --> 00:27:59
ort of like if the other person's

00:27:56 --> 00:28:02
excited you might be more excited if the

00:27:58 --> 00:28:05
other person is sad you might not be sad

00:28:01 --> 00:28:08
you might be more consoling or something

00:28:04 --> 00:28:10
and those Dynamics are very complicated

00:28:07 --> 00:28:11
right you can't just sort of have a if

00:28:09 --> 00:28:14
then kind of thing it really does need

00:28:10 --> 00:28:16
to be learned from data

00:28:13 --> 00:28:19
nd Transformers are very effective at

00:28:15 --> 00:28:23
learning things from data and the model

00:28:18 --> 00:28:25
needs this context to to generate

00:28:22 --> 00:28:27
appropriate things if if you don't give

00:28:24 --> 00:28:29
the context you're sort of forced in a

00:28:26 --> 00:28:32
way to it's it's almost like you're

00:28:28 --> 00:28:35
forced to be a lowest common denominator

00:28:31 --> 00:28:37
style thing because you don't want to be

00:28:34 --> 00:28:38
really happy and laughing if the other

00:28:36 --> 00:28:40
person is sad or something you kind of

00:28:37 --> 00:28:43
are forced to be the sort of neutral

00:28:40 --> 00:28:45
robotic maybe experience and that's

00:28:42 --> 00:28:48
probably why or it's one of the reasons

00:28:44 --> 00:28:51
why historically voice assistants feel

00:28:47 --> 00:28:52
so flat is that traditional text of

00:28:50 --> 00:28:54
speech it's kind of like it can only be

00:28:51 --> 00:28:56
flat or in other words if it tries to

00:28:53 --> 00:28:58
not be flat it's very likely wrong right

00:28:55 --> 00:29:00
so so the speech generation

00:28:57 --> 00:29:02
research community is very likely I

00:28:59 --> 00:29:05
think to move to more and more

00:29:01 --> 00:29:07
contextual architectures basically but

00:29:04 --> 00:29:09
he current level of context that the

00:29:06 --> 00:29:11
research preview has is like sipping

00:29:08 --> 00:29:13
through a straw relative to what all the

00:29:10 --> 00:29:15
context that a human processes when

00:29:12 --> 00:29:17
we're talking right so all it like you

00:29:14 --> 00:29:20
said earlier doesn't even understand

00:29:16 --> 00:29:24
audio yet right so where do well to be

00:29:19 --> 00:29:26
fair so the the speech generation part

00:29:23 --> 00:29:27
is conditioned on the on all the audio

00:29:25 --> 00:29:29
f the conversation so the speech

00:29:26 --> 00:29:31
generation part is is audio

00:29:28 --> 00:29:33
yeah but it's not Vision conditioned it

00:29:30 --> 00:29:34
doesn't know it doesn't know anything

00:29:32 --> 00:29:37
about what I'm seeing yeah it doesn't

00:29:34 --> 00:29:39
know anything about what I'm what what

00:29:36 --> 00:29:40
I'm feeling what I'm focused on it

00:29:38 --> 00:29:42
doesn't understand who else is in the

00:29:39 --> 00:29:44
room with me where I am my

00:29:41 --> 00:29:45
geolocation is that all context that you

00:29:43 --> 00:29:47
think is important or basically is the

00:29:45 --> 00:29:49
amount of context it has now roughly you

00:29:46 --> 00:29:51
think PRI optimal context it needs and

00:29:48 --> 00:29:53
from here on not any any additional

00:29:50 --> 00:29:55
modality you add is just diminishing

00:29:52 --> 00:29:58
returns no I mean

00:29:54 --> 00:30:03
so there there are a few answers there

00:29:57 --> 00:30:05
so one thing is that we do feel that an

00:30:02 --> 00:30:08
audio a kind of an audio Centric

00:30:04 --> 00:30:10
experience like a telephone call can is

00:30:07 --> 00:30:12
a great experience and so there the

00:30:09 --> 00:30:14
context that you want is of course the

00:30:11 --> 00:30:16
context of the conversation which we

00:30:13 --> 00:30:18
kind of have or we're kind of going

00:30:15 --> 00:30:20
towards you also want memory you want a

00:30:17 --> 00:30:22
kind of history of your relationship

00:30:19 --> 00:30:23
with the with the user of course right

00:30:21 --> 00:30:25
and I think that can be a great

00:30:22 --> 00:30:28
experience is that enough in some sense

00:30:25 --> 00:30:31
I think it's almost like all context is

00:30:27 --> 00:30:34
probably usable and kind of should be

00:30:30 --> 00:30:36
used for like a for an ideal experience

00:30:33 --> 00:30:38
we mentioned on the on the website and

00:30:35 --> 00:30:39
we mentioned in some of our launch

00:30:37 --> 00:30:43
content that we are working towards

00:30:38 --> 00:30:46
glasses as a form factor for companions

00:30:42 --> 00:30:48
or kind of this companion interface and

00:30:45 --> 00:30:51
I think that when you get the companion

00:30:48 --> 00:30:53
to have that level of context in

00:30:50 --> 00:30:56
particular site kind of what you're

00:30:52 --> 00:30:59
looking at I think you will get even

00:30:55 --> 00:31:01
more natural feeling experiences where

00:30:58 --> 00:31:04
it feels like your companion is sort of

00:31:00 --> 00:31:06
in the room with you and can will

00:31:03 --> 00:31:08
certainly have

00:31:05 --> 00:31:11
different even in just like the voice

00:31:07 --> 00:31:13
but in the in the entire interaction

00:31:10 --> 00:31:15
right not just the voice but also what

00:31:12 --> 00:31:17
it says when it sees something that's

00:31:14 --> 00:31:18
exciting and can kind of you know

00:31:16 --> 00:31:20
exclaim with you kind of thing it will

00:31:17 --> 00:31:22
feel very much like it's in the room

00:31:19 --> 00:31:25
with you and it's kind of like over your

00:31:21 --> 00:31:28
shoulder and that will be a great

00:31:24 --> 00:31:31
experience why are glasses the necessary

00:31:27 --> 00:31:35
way to accomplish that as opposed to

00:31:31 --> 00:31:39
what a phone a phone sure a phone your

00:31:34 --> 00:31:41
MacBook camera yeah beir of hearing aid

00:31:38 --> 00:31:44
s and stuff yeah I I mean

00:31:40 --> 00:31:47
there are there are different devices

00:31:43 --> 00:31:50
that will be

00:31:46 --> 00:31:52
good ways to interact with a companion

00:31:49 --> 00:31:55
we see

00:31:51 --> 00:31:59
companions voice in particular but

00:31:54 --> 00:32:02
companions as like the the super set as

00:31:58 --> 00:32:04
a kind of new interface to to Computing

00:32:01 --> 00:32:06
or it will be you know I don't think

00:32:03 --> 00:32:08
we're there yet I think we are certainly

00:32:05 --> 00:32:11
not there yet I think the industry is

00:32:07 --> 00:32:13
not there yet there's a lot more core

00:32:10 --> 00:32:17
advancements to be done before a a

00:32:13 --> 00:32:19
companion product is sort of a feasible

00:32:16 --> 00:32:21
an actual interface to Computing we

00:32:18 --> 00:32:23
think it should start with a foundation

00:32:20 --> 00:32:24
of being natural being something that

00:32:22 --> 00:32:27
you want to talk to being something that

00:32:23 --> 00:32:30
feels you know fluid and so forth but I

00:32:27 --> 00:32:31
think when you get a new kind of

00:32:29 --> 00:32:35
interface medium the question is sort of

00:32:30 --> 00:32:37
what is the device that is the best at

00:32:34 --> 00:32:39
interacting with this interface right

00:32:36 --> 00:32:40
phones are good phones are not going

00:32:38 --> 00:32:42
anywhere phones are amazing I love my

00:32:39 --> 00:32:44
phone no one's going to replace phones

00:32:41 --> 00:32:47
anytime soon or laptops for that matter

00:32:43 --> 00:32:50
phones didn't replace laptops either why

00:32:46 --> 00:32:52
glasses is that you know if you think

00:32:49 --> 00:32:54
about what you want a

00:32:51 --> 00:32:57
device that is kind of interacting with

00:32:53 --> 00:32:58
is interface a a companion to be you

00:32:56 --> 00:33:00
want it to be very very low friction you

00:32:57 --> 00:33:02
don't want to have to take your phone

00:32:59 --> 00:33:05
out unlock it open an app make a call

00:33:01 --> 00:33:07
and then talk there's things all around

00:33:04 --> 00:33:08
you like one way to think of it is sort

00:33:06 --> 00:33:10
of how would you want to interact with

00:33:07 --> 00:33:11
like a friend that's sort of hanging out

00:33:09 --> 00:33:13
with you all the time you wouldn't want

00:33:10 --> 00:33:14
o have to take out a phone every time

00:33:12 --> 00:33:16
you want to say something to them so you

00:33:14 --> 00:33:19
want it to be super low friction always

00:33:15 --> 00:33:22
available and you kind of want as best

00:33:18 --> 00:33:24
you can to have the companion have a

00:33:21 --> 00:33:27
sort of mirror of your perception of

00:33:23 --> 00:33:29
your context maybe one day that's going

00:33:26 --> 00:33:31
to be like a neuralink style device you

00:33:28 --> 00:33:33
know whenever that Su embeded chip into

00:33:30 --> 00:33:35
your brain and it sort of has but

00:33:32 --> 00:33:38
putting kind of those kind of things

00:33:34 --> 00:33:40
aside the glasses are really pretty

00:33:37 --> 00:33:41
optimally placed to be a sort of mirror

00:33:39 --> 00:33:44
of your perception it's right where your

00:33:40 --> 00:33:46
eyes ears Etc are could even imagine a a

00:33:43 --> 00:33:47
smell thing we're not we're not doing

00:33:45 --> 00:33:50
that anytime soon but like it's where

00:33:46 --> 00:33:51
all your perception organs are basically

00:33:49 --> 00:33:54
and it's a

00:33:50 --> 00:33:56
device or product category that billions

00:33:53 --> 00:33:57
of people wear all day every day and is

00:33:55 --> 00:34:00
always available to them right I wear

00:33:56 --> 00:34:02
them you sometimes wear them not right

00:33:59 --> 00:34:05
now used to the Sesame site says we're

00:34:01 --> 00:34:07
working on everyday every day all day

00:34:04 --> 00:34:09
I wear why is that critical if

00:34:07 --> 00:34:12
it excludes all those other all those

00:34:08 --> 00:34:15
folks who don't wear everyday glasses I

00:34:11 --> 00:34:19
think that it takes a lot to earn

00:34:14 --> 00:34:22
Hardware on someone's body a wearable

00:34:18 --> 00:34:25
right and you have to provide enough

00:34:21 --> 00:34:27
value especially if you want someone

00:34:24 --> 00:34:29
like me to switch from my glasses that I

00:34:26 --> 00:34:31
wear all day every day to a new pair of

00:34:28 --> 00:34:35
glasses you have to provide a lot of

00:34:30 --> 00:34:37
value to justify that I think that when

00:34:34 --> 00:34:40
the the the value proposition that we

00:34:36 --> 00:34:45
think glasses will eventually hit which

00:34:39 --> 00:34:48
will take some time is when your access

00:34:44 --> 00:34:50
to your companion to Computing let's say

00:34:47 --> 00:34:52
through this interface is always there

00:34:49 --> 00:34:54
it's always there with no friction so if

00:34:51 --> 00:34:56
you have to think about you know in this

00:34:53 --> 00:34:58
period of time I'm going to wear these

00:34:55 --> 00:35:01
sunglasses or or these glasses and then

00:34:57 --> 00:35:04
I'll have access for some amount of time

00:35:00 --> 00:35:06
and then I won't it can't become a kind

00:35:03 --> 00:35:10
of a habit that you just always think

00:35:05 --> 00:35:13
you have all day every day allows it to

00:35:09 --> 00:35:16
become a habit a part of your daily life

00:35:12 --> 00:35:18
all the time and a lot of the things

00:35:15 --> 00:35:21
that we think will be really great about

00:35:17 --> 00:35:22
his product are when you're just kind

00:35:20 --> 00:35:24
of doing something else in the world

00:35:21 --> 00:35:25
you're not really thinking about the

00:35:23 --> 00:35:27
fact that there's a that you have access

00:35:24 --> 00:35:29
to a companion or that you have

00:35:26 --> 00:35:32
Electronics or access to an interface of

00:35:28 --> 00:35:35
computing and something triggers that

00:35:31 --> 00:35:36
like I want to use it right now for a

00:35:34 --> 00:35:39
very short amount of time you use it and

00:35:35 --> 00:35:42
then you kind of go back to not using it

00:35:38 --> 00:35:44
and it's about the friction right if you

00:35:41 --> 00:35:47
don't have it all the time available if

00:35:43 --> 00:35:49
it's not always on always there the

00:35:46 --> 00:35:50
friction is high right you have to think

00:35:48 --> 00:35:54
about like essentially do I have it on

00:35:50 --> 00:35:56
or not right now

00:35:53 --> 00:35:58
so while we were

00:35:55 --> 00:36:02
talking I got like three different Tech

00:35:57 --> 00:36:04
T from people saying any

00:36:01 --> 00:36:07
chance the models ready the open source

00:36:03 --> 00:36:09
models ready and when I read who these

00:36:06 --> 00:36:12
texts are from two out of three of those

00:36:08 --> 00:36:15
folks are working on some version of a

00:36:11 --> 00:36:17
Enterprise developer customer support

00:36:14 --> 00:36:19
ype use case given the sheer amount of

00:36:16 --> 00:36:23
demand there is for this

00:36:18 --> 00:36:24
ystem why not produce something that's

00:36:22 --> 00:36:26
a general purpose API a model that

00:36:23 --> 00:36:29
everybody can use for all kinds of use

00:36:25 --> 00:36:32
cases yeah yeah so why not an API

00:36:28 --> 00:36:34
people ask us for the for an API as well

00:36:31 --> 00:36:37
in fact a lot people ask for the for an

00:36:33 --> 00:36:40
API a lot the main reason is focus

00:36:36 --> 00:36:44
basically we want to bring this

00:36:39 --> 00:36:46
companion product to Market and now we

00:36:43 --> 00:36:48
have a lot of people that love using the

00:36:45 --> 00:36:50
demo which is fantastic we've kind of

00:36:47 --> 00:36:53
shown to ourselves and I think to the

00:36:49 --> 00:36:56
world that there is Magic there is some

00:36:52 --> 00:36:58
you know really great experience when

00:36:55 --> 00:36:59
you can talk to a system that feels very

00:36:57 --> 00:37:02
natur like you're talking to human and

00:36:58 --> 00:37:04
so forth there's a there's a lot to go

00:37:01 --> 00:37:06
in making it a great product but we are

00:37:03 --> 00:37:09
focused on that path we would like to

00:37:05 --> 00:37:11
bring a great product that is a

00:37:08 --> 00:37:14
companion to Market

00:37:10 --> 00:37:17
first anything that's not that path is

00:37:13 --> 00:37:19
basically a distraction right now I do

00:37:16 --> 00:37:21
think that these apis I mean there are

00:37:18 --> 00:37:25
API businesses for speech generation for

00:37:21 --> 00:37:27
Texas speech that are that are great and

00:37:24 --> 00:37:29
I think people will want more and more

00:37:26 --> 00:37:31
conversational natural

00:37:28 --> 00:37:34
API access and I think those companies

00:37:30 --> 00:37:37
will do a great job of of providing that

00:37:33 --> 00:37:39
right we don't have to do everything we

00:37:36 --> 00:37:41
are focused on building this product

00:37:39 --> 00:37:44
experience and we don't want to get

00:37:40 --> 00:37:46
distracted by other things you know

00:37:43 --> 00:37:48
sometimes it feels like an API or

00:37:45 --> 00:37:51
something like that is like relatively

00:37:47 --> 00:37:53
easy to do and you know it's not like

00:37:50 --> 00:37:54
it's not maybe as hard as some of the

00:37:52 --> 00:37:56
other things that we're doing but

00:37:53 --> 00:37:58
everything is a drag on engineering

00:37:55 --> 00:38:01
right and we we really want to say focus

00:37:57 --> 00:38:02
on bringing to bringing the product that

00:38:00 --> 00:38:05
we want to build to Market one of the

00:38:02 --> 00:38:07
things you've talked about is that it's

00:38:04 --> 00:38:08
got to be a companion you want to talk

00:38:07 --> 00:38:11
to

00:38:07 --> 00:38:13
M and API is a great way to allow people

00:38:10 --> 00:38:17
to customize a

00:38:12 --> 00:38:20
companion in to be more like something I

00:38:16 --> 00:38:22
want to to talk to yeah and so is there

00:38:19 --> 00:38:24
some other way by which you think people

00:38:21 --> 00:38:27
will be able to customize the companion

00:38:23 --> 00:38:29
that's not direct access to the API

00:38:26 --> 00:38:30
because that's what you that's one of

00:38:28 --> 00:38:33
the things you give up right by not

00:38:29 --> 00:38:35
exposing that kind of I

00:38:32 --> 00:38:38
mean not everyone's going to want the

00:38:34 --> 00:38:41
same personality and their companion so

00:38:37 --> 00:38:43
we're certainly not going to we don't

00:38:40 --> 00:38:46
see our product as like one companion

00:38:42 --> 00:38:48
that's the same for everyone people have

00:38:45 --> 00:38:49
different preferences and and that has

00:38:47 --> 00:38:53
to be a part of this kind of product

00:38:48 --> 00:38:54
category for sure um I

00:38:52 --> 00:38:58
think

00:38:53 --> 00:39:00
people like people using an API in some

00:38:57 --> 00:39:04
sense I think the problem with the API

00:38:59 --> 00:39:08
right now is that it's just too hard to

00:39:03 --> 00:39:09
make a great product right now like it's

00:39:07 --> 00:39:11
not something that you can turn into an

00:39:08 --> 00:39:13
API where it's just sort of you know you

00:39:10 --> 00:39:15
put a prompt and it's a great

00:39:12 --> 00:39:18
personality right it takes more than

00:39:14 --> 00:39:21
just sort of you know voice clone plus

00:39:17 --> 00:39:23
change the prompt now you have a new

00:39:20 --> 00:39:24
character that's just as good as it

00:39:22 --> 00:39:29
would be if you spend a lot of time on

00:39:23 --> 00:39:32
it it takes I think today making a great

00:39:28 --> 00:39:35
personality voice interface system we

00:39:31 --> 00:39:38
can't turn it into an API that produces

00:39:34 --> 00:39:40
uper high quality outcome today like

00:39:37 --> 00:39:42
the apis and the ability for models to

00:39:39 --> 00:39:43
follow prompts is quite good for sure

00:39:41 --> 00:39:47
right and it's getting better every

00:39:42 --> 00:39:50
year for sure um but we you know

00:39:46 --> 00:39:51
e want to make it first party to make

00:39:49 --> 00:39:53
it a higher quality you know as high

00:39:50 --> 00:39:55
quality as we can push it I I think what

00:39:52 --> 00:39:57
we've seen over the last you know two

00:39:54 --> 00:39:59
maybe three years is there are companies

00:39:56 --> 00:40:01
that are built around different

00:39:58 --> 00:40:04
modalities in AI so there's like video

00:40:01 --> 00:40:07
companies and image companies and speech

00:40:03 --> 00:40:09
companies and so on I think that

00:40:06 --> 00:40:12
conversation like human conversation is

00:40:08 --> 00:40:16
kind of its own modality and it is

00:40:11 --> 00:40:18
nowhere near done right there's so much

00:40:15 --> 00:40:20
more to do at the in the core research

00:40:17 --> 00:40:22
side to make it better and it's not

00:40:19 --> 00:40:24
clear to me that the direction it's

00:40:21 --> 00:40:27
going to go is from a research

00:40:23 --> 00:40:28
perspective is what we have today right

00:40:26 --> 00:40:30
it it can change a lot

00:40:28 --> 00:40:33
and when you make an API you are kind of

00:40:29 --> 00:40:35
baking in some kind of interfaces to

00:40:32 --> 00:40:37
that system like how do you control it

00:40:34 --> 00:40:39
and how do you uh how do you tune it and

00:40:36 --> 00:40:41
so on and I think it's just a little

00:40:38 --> 00:40:44
arly to do that um at least for us I

00:40:40 --> 00:40:45
mean we in the sense that those kinds of

00:40:43 --> 00:40:47
things sort of start constraining you a

00:40:45 --> 00:40:49
bit if you want to make major changes to

00:40:46 --> 00:40:51
make improvements all right the next

00:40:48 --> 00:40:52
question folks have for you what will

00:40:50 --> 00:40:56
the companion

00:40:51 --> 00:40:57
do and how does Sesame handle context

00:40:55 --> 00:41:00
retention in Long conversations it's

00:40:56 --> 00:41:04
really impressive

00:40:59 --> 00:41:07
yeah so what will the companion do I

00:41:03 --> 00:41:09
think the focus at the beginning which

00:41:06 --> 00:41:13
is you know now the the short-term focus

00:41:08 --> 00:41:15
is to continue making the most natural

00:41:13 --> 00:41:17
companion possible the most natural

00:41:14 --> 00:41:19
interaction possible so what will it do

00:41:16 --> 00:41:23
is it will talk to you in a way that

00:41:18 --> 00:41:24
feels real right and we want to continue

00:41:22 --> 00:41:27
pushing

00:41:23 --> 00:41:30
that that axis of research that's kind

00:41:26 --> 00:41:31
of like conversational modeling you know

00:41:29 --> 00:41:35
human

00:41:30 --> 00:41:37
conversations are very complex you know

00:41:34 --> 00:41:38
there's a lot of like back and forth

00:41:36 --> 00:41:40
at has to be negotiated like when

00:41:37 --> 00:41:42
should you start talking sometimes

00:41:39 --> 00:41:43
there's some cross talk and you have to

00:41:41 --> 00:41:46
kind of negotiate who's going to end up

00:41:42 --> 00:41:47
talking their back channels where you

00:41:45 --> 00:41:49
kind of indicate to the other person

00:41:46 --> 00:41:52
that you're listening with like a little

00:41:48 --> 00:41:53
sound or something um there are times

00:41:51 --> 00:41:55
where interruptions are rude but there

00:41:52 --> 00:41:57
are times where interruptions are are

00:41:54 --> 00:41:59
good because the other person is sort of

00:41:56 --> 00:42:00
taking a lot of time to explain

00:41:58 --> 00:42:01
something that you already understand

00:41:59 --> 00:42:03
you should cut them off and kind of

00:42:00 --> 00:42:06
answer them and so forth so human

00:42:02 --> 00:42:10
conversations are extremely complicated

00:42:05 --> 00:42:13
and doing the work to model them

00:42:09 --> 00:42:15
effectively and naturally I think is not

00:42:12 --> 00:42:16
it's not going to be like a short

00:42:14 --> 00:42:19
problem it's like a very long-term

00:42:15 --> 00:42:21
problem and so one of the core research

00:42:18 --> 00:42:23
things we're working on is that track of

00:42:20 --> 00:42:26
work and you know what we are for

00:42:22 --> 00:42:29
example open sourcing soon the kind of

00:42:25 --> 00:42:32
speech generation part is really still

00:42:28 --> 00:42:35
relatively constrained or sort of um it

00:42:31 --> 00:42:37
models a relatively small part of a full

00:42:34 --> 00:42:39
conversation I mean it's kind of easy to

00:42:36 --> 00:42:41
think of the text and the speech of the

00:42:39 --> 00:42:43
conversation as like the bulk of it and

00:42:40 --> 00:42:46
maybe it is to some degree but I

00:42:42 --> 00:42:48
think to get these things to feel very

00:42:45 --> 00:42:49
natural and real you do need to

00:42:47 --> 00:42:52
model the full conversation the

00:42:48 --> 00:42:54
turn-taking the back channels everything

00:42:51 --> 00:42:56
and so there we see a pretty long road

00:42:53 --> 00:42:58
there of making improvements and we

00:42:55 --> 00:43:00
think that what we have now is pretty

00:42:57 --> 00:43:02
early actually so we want to keep

00:42:59 --> 00:43:05
ushing that and we don't want to you

00:43:01 --> 00:43:08
know detour into starting to do too many

00:43:05 --> 00:43:10
kind of long reasoning sort of tool

00:43:07 --> 00:43:12
calling do things for you and so forth

00:43:09 --> 00:43:15
ose will certainly be part of an

00:43:11 --> 00:43:17
effective product in this category but

00:43:14 --> 00:43:21
our core research I think we still have

00:43:16 --> 00:43:23
a ways to go in just Supernatural

00:43:20 --> 00:43:25
conversations the companion in the long

00:43:22 --> 00:43:26
term yeah it should we want you to be

00:43:24 --> 00:43:29
able to do things with it we want it to

00:43:25 --> 00:43:31
be able to help you kind of be a better

00:43:28 --> 00:43:34
version of yourself kind of

00:43:30 --> 00:43:35
maintain information maintain memory

00:43:33 --> 00:43:37
build a relationship with you and so

00:43:34 --> 00:43:39
forth um and we are working on many of

00:43:36 --> 00:43:42
those things as well but the core

00:43:38 --> 00:43:45
Foundation of a good companion product I

00:43:41 --> 00:43:48
think is the sort of naturalist of

00:43:44 --> 00:43:51
interaction and then we kind of want to

00:43:47 --> 00:43:52
build these other capabilities on top of

00:43:50 --> 00:43:55
that

00:43:51 --> 00:43:58
Foundation there's there's a follow-up

00:43:54 --> 00:44:01
question which is why how is it so fast

00:43:57 --> 00:44:02
is a bunch of systems

00:44:00 --> 00:44:05
engineering one of the things that I

00:44:01 --> 00:44:07
think is so fun honestly to work on this

00:44:04 --> 00:44:11
kind of category or this product

00:44:06 --> 00:44:14
experience is that it's not just cor ml

00:44:10 --> 00:44:15
there's great core ml to do there's also

00:44:13 --> 00:44:16
great engineering to do systems

00:44:14 --> 00:44:18
engineering and there's great kind of

00:44:15 --> 00:44:20
product creative work to do as well and

00:44:17 --> 00:44:22
we want to be a company that sort of

00:44:19 --> 00:44:24
unifies all of those things how is it so

00:44:21 --> 00:44:26
fast is really a systems engineering

00:44:23 --> 00:44:27
problem right and it's an infrastructure

00:44:25 --> 00:44:30
problem because you know especially now

00:44:26 --> 00:44:33
e've to scale our our back in a

00:44:29 --> 00:44:34
significant amount and maintaining low

00:44:32 --> 00:44:36
latency across a bunch of users and so

00:44:33 --> 00:44:38
forth is is really a challenging

00:44:35 --> 00:44:40
infrastructure problem that is also fun

00:44:37 --> 00:44:41
to work on but how did you solve it I

00:44:39 --> 00:44:44
would say it's more of a sort of

00:44:40 --> 00:44:46
combination of a bunch of things like

00:44:43 --> 00:44:48
you know of course they're like the core

00:44:45 --> 00:44:51
systems of like transcription and and

00:44:47 --> 00:44:53
the llm and R speech generation and so

00:44:50 --> 00:44:55
n and each of those you hyper optimize

00:44:53 --> 00:44:57
or optimize as much as you can and you

00:44:54 --> 00:44:59
want to pipe them pipe them together in

00:44:56 --> 00:45:03
an optimized way you want to do some

00:44:59 --> 00:45:06
kind of pre-computation and caching and

00:45:02 --> 00:45:08
to try to minimize latency across

00:45:05 --> 00:45:10
everything you possibly can um so I

00:45:07 --> 00:45:11
wouldn't say there's kind of one trick

00:45:09 --> 00:45:14
or anything like that it's just you know

00:45:10 --> 00:45:16
the end there there's a lot of places in

00:45:13 --> 00:45:19
the system where latency can creep in

00:45:15 --> 00:45:21
and we're talking about you know we want

00:45:18 --> 00:45:24
you know sub 500 millisecond response

00:45:20 --> 00:45:26
times and a lot of things that feel like

00:45:23 --> 00:45:28
not a big deal 50 milliseconds here 50

00:45:25 --> 00:45:30
milliseconds there can really add up so

00:45:27 --> 00:45:32
it's kind of like a focus across the

00:45:29 --> 00:45:33
stack on just systems

00:45:31 --> 00:45:37
engineering how big is the engineering

00:45:32 --> 00:45:39
team that pulled that off software team

00:45:36 --> 00:45:41
is about 15 less than 15 but that's but

00:45:38 --> 00:45:44
hat's research and that's research and

00:45:40 --> 00:45:46
so like the core yeah the core ml

00:45:43 --> 00:45:48
team is something like seven or eight

00:45:45 --> 00:45:50
and then infrastructure and kind of

00:45:47 --> 00:45:52
product are are the rest it's a small

00:45:49 --> 00:45:54
team it's a small team and and yeah we

00:45:51 --> 00:45:55
have a we have a great team we have a

00:45:53 --> 00:45:57
super Talent dense team and it's great

00:45:54 --> 00:45:58
o work with them how do you keep the

00:45:56 --> 00:46:01
talent density so what what have you

00:45:57 --> 00:46:03
been looking

00:46:00 --> 00:46:05
for what's your bar for somebody who's

00:46:02 --> 00:46:07
good enough to join this smme team yeah

00:46:04 --> 00:46:10
we look for people

00:46:06 --> 00:46:14
who are kind of generally strong

00:46:10 --> 00:46:16
Engineers basically like especially when

00:46:13 --> 00:46:19
you're smaller you know you don't really

00:46:15 --> 00:46:21
want to harden like you know you have

00:46:18 --> 00:46:23
this team that is super super nich and

00:46:20 --> 00:46:25
oing only this thing because you don't

00:46:22 --> 00:46:27
know exactly what the stack is going to

00:46:24 --> 00:46:28
look like tomorrow things change on the

00:46:26 --> 00:46:29
research side

00:46:27 --> 00:46:31
then you need a different kind of

00:46:28 --> 00:46:34
infrastructure stack to serve it and so

00:46:30 --> 00:46:37
n and so you know especially early on

00:46:33 --> 00:46:40
you you don't want super Niche people

00:46:36 --> 00:46:43
you you basically want folks who are

00:46:39 --> 00:46:45
good systems thinkers that can work on

00:46:42 --> 00:46:47
many different things and can sort of

00:46:44 --> 00:46:49
learn new things there's there's really

00:46:46 --> 00:46:51
no one that has you know 10 years of

00:46:48 --> 00:46:54
experience serving Transformers at scale

00:46:50 --> 00:46:55
or something like this uh it's it's you

00:46:53 --> 00:46:57
know this whole thing is new so you need

00:46:54 --> 00:47:01
people who are excited to learn who are

00:46:56 --> 00:47:04
WR engineers and who who can learn next

00:47:00 --> 00:47:06
question is how do the scaling laws for

00:47:03 --> 00:47:09
speech differ from text that's an

00:47:05 --> 00:47:11
interesting question so we we published

00:47:08 --> 00:47:13
in the in our in our blog post we

00:47:10 --> 00:47:15
trained three variants we trained 1

00:47:12 --> 00:47:18
billion three billion and 8 billion of

00:47:14 --> 00:47:22
just speech generation and you know even

00:47:17 --> 00:47:27
the 1 billion is very good at speech

00:47:21 --> 00:47:29
generation what you find as you scale up

00:47:26 --> 00:47:32
is you really are starting to hit the

00:47:28 --> 00:47:35
kind of longtail things and the

00:47:31 --> 00:47:36
contextual things so for example two of

00:47:34 --> 00:47:40
the evaluations that we published in the

00:47:35 --> 00:47:42
post are sort of homograph selection

00:47:39 --> 00:47:43
there are kind of these words that

00:47:41 --> 00:47:45
hey're two different words and they're

00:47:42 --> 00:47:47
spelled the same but pronounced

00:47:44 --> 00:47:48
ifferently so an example is like lad

00:47:46 --> 00:47:53
and Lead Le

00:47:47 --> 00:47:56
a and you know you can ask the question

00:47:52 --> 00:47:58
you give a sentence that based on the

00:47:55 --> 00:47:59
context of the sentence just a seman of

00:47:57 --> 00:48:02
the sentence it's clear which word you

00:47:59 --> 00:48:03
mean you know like you lead the pack or

00:48:01 --> 00:48:06
like the paint had lead in it or

00:48:02 --> 00:48:08
something like this and you'll generate

00:48:05 --> 00:48:11
the speech and you'll transcribe it with

00:48:08 --> 00:48:15
a phon transcri transcriber and you see

00:48:10 --> 00:48:17
what which pronunciation did it pick and

00:48:14 --> 00:48:18
these are kind of like longtail things I

00:48:16 --> 00:48:20
mean lead and Lead are sort of

00:48:18 --> 00:48:22
relatively common words but there are

00:48:19 --> 00:48:24
others that are more kind of less common

00:48:21 --> 00:48:27
words and and it's harder for a model to

00:48:23 --> 00:48:28
pick um like for example another one is

00:48:26 --> 00:48:29
row and

00:48:27 --> 00:48:32
like R is like a fight kind of thing row

00:48:28 --> 00:48:35
is you know rowing a boat and we see

00:48:31 --> 00:48:36
that as the models get bigger they're

00:48:34 --> 00:48:40
much better at picking the right

00:48:36 --> 00:48:41
pronunciation in examples like this

00:48:39 --> 00:48:43
there's a similar thing about using

00:48:40 --> 00:48:46
context so when

00:48:42 --> 00:48:48
you again there a lot of these are about

00:48:45 --> 00:48:51
pronunciation or or pronunciation is

00:48:47 --> 00:48:54
ort of like a very useful probe to see

00:48:50 --> 00:48:57
how good these models are at some things

00:48:53 --> 00:49:01
o for example we'll take words that in

00:48:56 --> 00:49:03
American English have uh multiple valid

00:49:00 --> 00:49:07
pronunciation variants so for example

00:49:02 --> 00:49:08
route and root there's some regions that

00:49:06 --> 00:49:09
may say it one way some some say it the

00:49:07 --> 00:49:11
other way but it's not like an accent

00:49:09 --> 00:49:15
per se it's like some people just say

00:49:10 --> 00:49:17
route and some people say root and we'll

00:49:14 --> 00:49:20
take an audio prompt of someone saying

00:49:16 --> 00:49:23
it in one way and then saying it in the

00:49:19 --> 00:49:26
other way and then we'll generate a a

00:49:22 --> 00:49:29
sentence after that has the word in it

00:49:25 --> 00:49:31
and you should expect if the if the if

00:49:28 --> 00:49:33
the model is able to sort of Clone the

00:49:30 --> 00:49:35
voice as and clone the accent clone the

00:49:32 --> 00:49:37
pronunciation Etc that it should

00:49:34 --> 00:49:39
continue with the same pronunciation

00:49:36 --> 00:49:40
that you gave it at the beginning and

00:49:38 --> 00:49:42
again we see the models as they get

00:49:39 --> 00:49:45
bigger they get they get better at that

00:49:41 --> 00:49:47
so I think a lot of these are kind of

00:49:44 --> 00:49:49
the long longtail things and contextual

00:49:46 --> 00:49:52
things the contextual things are what we

00:49:48 --> 00:49:54
care you know the most about is that are

00:49:51 --> 00:49:55
they able to pick up more and more

00:49:53 --> 00:49:57
information from the context to

00:49:54 --> 00:49:58
condition what what they generate and

00:49:56 --> 00:50:01
kind of what we were talking about

00:49:57 --> 00:50:02
earlier about you know you have to

00:50:00 --> 00:50:05
there's so there an infinite different

00:50:01 --> 00:50:07
ways of of generating any audio for for

00:50:04 --> 00:50:09
text and you got to pick one that's

00:50:06 --> 00:50:11
appropriate in this situation and we do

00:50:08 --> 00:50:13
see that the models as they get better

00:50:10 --> 00:50:16
they get bigger sorry they get much

00:50:12 --> 00:50:18
better at doing that um and so that's

00:50:15 --> 00:50:20
kind of you know there there there's a

00:50:17 --> 00:50:22
lot more to probe in in these models

00:50:19 --> 00:50:23
actually I mean you know it's certain

00:50:21 --> 00:50:25
there's certainly more work to be done

00:50:22 --> 00:50:27
about like understanding how they change

00:50:24 --> 00:50:30
as they get bigger and we're we're doing

00:50:26 --> 00:50:31
that work to there's um there was a

00:50:29 --> 00:50:33
moment

00:50:30 --> 00:50:36
where when we were testing early

00:50:32 --> 00:50:39
checkpoints of Maya before the research

00:50:35 --> 00:50:41
preview and I would test it every day

00:50:38 --> 00:50:43
and my name is pronounced an yeah yeah

00:50:40 --> 00:50:46
but it's written a andj yeah and she

00:50:42 --> 00:50:48
would keep pronouncing it an yeah and

00:50:45 --> 00:50:50
then one day she was able to preserve my

00:50:47 --> 00:50:51
the pronunciation when I would every day

00:50:49 --> 00:50:53
it was like ground out day right I'd

00:50:50 --> 00:50:55
wake up and say my name is pronounced an

00:50:52 --> 00:50:56
I was hoping for the day that she would

00:50:54 --> 00:50:59
reserve my pronunciation and one day she

00:50:55 --> 00:51:01
did yeah do you think that corresponded

00:50:58 --> 00:51:04
to just a larger training run it's

00:51:00 --> 00:51:06
possible it's certainly possible um yeah

00:51:03 --> 00:51:08
we do we do look at evaluations like

00:51:05 --> 00:51:11
that as well like name pronunciations in

00:51:07 --> 00:51:13
particular that's like a good example of

00:51:10 --> 00:51:14
a kind of product Centric evaluation

00:51:12 --> 00:51:16
maybe and people care a lot about how

00:51:13 --> 00:51:18
their names are pronounced right and

00:51:15 --> 00:51:20
when you say when you talk to Alexa or

00:51:18 --> 00:51:22
something or like another voice

00:51:19 --> 00:51:24
assistant and they kind of say your name

00:51:21 --> 00:51:26
wrong it feels bad right feels bad when

00:51:23 --> 00:51:27
anyone says your name wrong really and

00:51:25 --> 00:51:29
name pronunciation is a good example it

00:51:26 --> 00:51:30
could have been just the better

00:51:28 --> 00:51:32
checkpoints possible but then it

00:51:29 --> 00:51:35
consistently did that right from that

00:51:31 --> 00:51:38
moment on so actually let's let's talk

00:51:34 --> 00:51:40
about evals for a sec because how do you

00:51:37 --> 00:51:43
think about evals how are they different

00:51:39 --> 00:51:46
in audio or rather conversational speech

00:51:42 --> 00:51:49
yeah sentext llms chat Bots yeah I mean

00:51:45 --> 00:51:51
it's to be honest it's it's a hard

00:51:48 --> 00:51:55
problem it's a hard problem because you

00:51:50 --> 00:51:58
know you can find things where you're

00:51:54 --> 00:52:00
able to directly check like the answer I

00:51:57 --> 00:52:02
mean it's a problem in text as well in

00:51:59 --> 00:52:05
general right like you have some you

00:52:01 --> 00:52:07
know in in in the field there's kind of

00:52:04 --> 00:52:10
you know in the RL world like deep seek

00:52:06 --> 00:52:13
and so on there's sort of a you know you

00:52:09 --> 00:52:15
can get a lot out of verifiable rewards

00:52:12 --> 00:52:16
where you can get the model to generate

00:52:14 --> 00:52:20
something you can check whether it's

00:52:15 --> 00:52:22
right in some relatively stable way um

00:52:19 --> 00:52:25
the problem with generative models in

00:52:21 --> 00:52:27
general for evaluation is that there are

00:52:24 --> 00:52:28
many different Generations that are

00:52:26 --> 00:52:30
appro

00:52:27 --> 00:52:31
right even when you constrain it to like

00:52:29 --> 00:52:33
have conditioning and so forth there's

00:52:30 --> 00:52:35
till an infinite number of ways to

00:52:32 --> 00:52:39
generate something in an appropriate way

00:52:34 --> 00:52:42
right in speech anyways and it's not

00:52:38 --> 00:52:44
necessarily easy to like have a

00:52:41 --> 00:52:46
numerical answer as to how good

00:52:43 --> 00:52:48
something was so for example we look at

00:52:45 --> 00:52:50
pronunciation because it is closer to

00:52:47 --> 00:52:53
something that you can just check right

00:52:49 --> 00:52:56
earlier on in the speech

00:52:52 --> 00:52:58
generation world in the community very

00:52:55 --> 00:52:59
often you'd look at like word error rate

00:52:57 --> 00:53:01
where you look at transcription like you

00:52:58 --> 00:53:02
kind of have a sentence and you generate

00:53:00 --> 00:53:05
it and you transcribe it and you see if

00:53:01 --> 00:53:07
it's the same and those metrics are kind

00:53:05 --> 00:53:10
of getting saturated basically like

00:53:06 --> 00:53:12
these models are just good enough that

00:53:09 --> 00:53:14
you know you can get some signal from

00:53:11 --> 00:53:17
the kinds of word error rate are they

00:53:13 --> 00:53:19
insertions are they deletions Etc but in

00:53:16 --> 00:53:22
a corpus wide level like these models

00:53:18 --> 00:53:24
are very very good now so you know then

00:53:22 --> 00:53:26
we started looking at pronunciation

00:53:23 --> 00:53:28
because you can kind of pick out you can

00:53:25 --> 00:53:30
kind of construct a prompt in a way that

00:53:27 --> 00:53:32
Demands a certain pronunciation and then

00:53:29 --> 00:53:34
C did it pick the right pronunciation

00:53:31 --> 00:53:37
and so on so that's kind of quantifiable

00:53:34 --> 00:53:39
but that doesn't really get at you know

00:53:36 --> 00:53:42
does it feel natural right that's like a

00:53:38 --> 00:53:43
capability maybe of the model which we

00:53:41 --> 00:53:44
care about and we care about that

00:53:42 --> 00:53:47
growing and that does grow with scale

00:53:44 --> 00:53:49
and so forth but it doesn't really

00:53:46 --> 00:53:51
answer this kind of product question of

00:53:48 --> 00:53:53
like does it feel natural does it feel

00:53:50 --> 00:53:55
good right is it appropriate for the

00:53:52 --> 00:53:57
scenario and so on and so those

00:53:54 --> 00:54:00
valuations look very similar honestly

00:53:56 --> 00:54:02
to how llm evaluations go sometimes

00:53:59 --> 00:54:03
which is like preferences and like an

00:54:01 --> 00:54:05
arena or like some kind of you know

00:54:03 --> 00:54:08
head-to-head ranking and so forth

00:54:05 --> 00:54:10
another thing that we do for example is

00:54:07 --> 00:54:11
there are some data sets that are

00:54:09 --> 00:54:13
academic data sets we also have some

00:54:10 --> 00:54:16
data sets that are kind of

00:54:12 --> 00:54:18
like just two people in a conversation

00:54:15 --> 00:54:20
or sometimes they're actors but they

00:54:17 --> 00:54:21
it's trying to be a real conversation

00:54:19 --> 00:54:24
and so we'll kind of take the

00:54:20 --> 00:54:26
conditioning uh of some snippet of the

00:54:23 --> 00:54:27
conversation and then show a human

00:54:25 --> 00:54:30
Raider

00:54:26 --> 00:54:33
um the real continuation and the models

00:54:29 --> 00:54:36
continuation and so it's like a win rate

00:54:32 --> 00:54:37
against the human against real right and

00:54:35 --> 00:54:40
that has good signal and so on so it's

00:54:36 --> 00:54:42
these like preferences yeah so so

00:54:39 --> 00:54:44
there's two questions I wrestle with on

00:54:41 --> 00:54:47
this one is the idea that a

00:54:43 --> 00:54:50
companion is much more engaging when

00:54:46 --> 00:54:52
there's a sharp personality to it um

00:54:49 --> 00:54:55
which obviously people love about Sesame

00:54:51 --> 00:54:57
I mean that's probably the single most

00:54:54 --> 00:55:01
common yeah point is people go

00:54:56 --> 00:55:04
wow Maya is so real right and and feels

00:55:00 --> 00:55:06
like a person and imperfect and like

00:55:03 --> 00:55:08
a human in a way in that sense yeah

00:55:05 --> 00:55:11
but on the other hand there are a bunch

00:55:07 --> 00:55:14
of people who also say hey Maya feels a

00:55:10 --> 00:55:16
bit like she's acting sure like she's

00:55:13 --> 00:55:18
performing yeah yeah and you know we

00:55:15 --> 00:55:20
spend a lot of time at Discord and you

00:55:17 --> 00:55:23
know a huge amount of Discord usage is

00:55:19 --> 00:55:25
in voice channels and when you look when

00:55:22 --> 00:55:28
you actually kind of spend time looking

00:55:24 --> 00:55:30
at and and trying to observe what the

00:55:27 --> 00:55:34
shape of a great conversation and voice

00:55:29 --> 00:55:35
is on Discord a lot of it is actually

00:55:33 --> 00:55:37
not that interesting right is people

00:55:34 --> 00:55:39
just hanging out talking the the the

00:55:36 --> 00:55:41
core action moments actually happen when

00:55:38 --> 00:55:43
there's other activity like gaming or

00:55:41 --> 00:55:45
there's people are watching movie or

00:55:42 --> 00:55:47
something together yeah yeah but but the

00:55:44 --> 00:55:50
vast majority of talking is actually

00:55:46 --> 00:55:52
quite natural sometimes boring not that

00:55:49 --> 00:55:54
exciting yeah whereas Maya keeps trying

00:55:51 --> 00:55:56
to inject like excitement into almost

00:55:53 --> 00:55:59
like an actor right right so how what

00:55:55 --> 00:55:59
why is that why

00:55:58 --> 00:56:04
is is there any way to resolve the

00:56:00 --> 00:56:06
tension that in trying to have a person

00:56:03 --> 00:56:08
direct a personal a voice companion like

00:56:05 --> 00:56:12
a director would like a movie director

00:56:07 --> 00:56:14
would you lose the organic NE texture of

00:56:11 --> 00:56:17
a conversation well I think it's that

00:56:14 --> 00:56:19
way because we have more work to do more

00:56:16 --> 00:56:21
or less right like I think that this

00:56:18 --> 00:56:24
area this field of like personality

00:56:20 --> 00:56:26
especially over voice I mean voice see

00:56:23 --> 00:56:28
voice I think is kind of a much higher

00:56:25 --> 00:56:32
bar because it's such a high bandwidth

00:56:27 --> 00:56:34
communication it's like it's even the

00:56:31 --> 00:56:36
like such little things will make you

00:56:33 --> 00:56:39
feel like the person on the other side

00:56:35 --> 00:56:42
is fake basically right whereas you know

00:56:38 --> 00:56:44
text a I think you I think it's much

00:56:41 --> 00:56:48
easier it would be much easier to make a

00:56:43 --> 00:56:50
system that produces text chats with you

00:56:47 --> 00:56:51
that feels like you're texting a human

00:56:49 --> 00:56:53
because there's there's such a

00:56:50 --> 00:56:55
compression of like what the entity on

00:56:52 --> 00:56:57
the other side is into just like text

00:56:54 --> 00:57:02
whereas vo is this kind of open open

00:56:56 --> 00:57:05
duplex thing um so voice is harder in a

00:57:01 --> 00:57:07
way and but also what comes with that is

00:57:04 --> 00:57:09
more kind of emotional or sort of

00:57:06 --> 00:57:12
there's more opportunity to feel really

00:57:08 --> 00:57:16
natural and real right I think that that

00:57:11 --> 00:57:20
category is it's like a its own major

00:57:15 --> 00:57:23
esearch question of like how do you how

00:57:19 --> 00:57:25
do you it's kind of a research product

00:57:22 --> 00:57:28
question of like how do you design a

00:57:24 --> 00:57:30
voice system has a personality that you

00:57:27 --> 00:57:34
think is good that also feels human that

00:57:29 --> 00:57:37
is not too pushy that's not too fake and

00:57:33 --> 00:57:39
sort of synthetic but is is super human

00:57:36 --> 00:57:41
at the end of the day right like these

00:57:38 --> 00:57:44
systems are superum they know much more

00:57:40 --> 00:57:45
they they are smarter in many ways they

00:57:43 --> 00:57:48
know have more World Knowledge and and

00:57:44 --> 00:57:50
so on they can do things over time and

00:57:47 --> 00:57:52
so forth so from a product perspective

00:57:49 --> 00:57:54
it there's this question of we want it

00:57:51 --> 00:57:56
o feel very very natural we want it to

00:57:53 --> 00:57:57
feel just like you're talking to human

00:57:55 --> 00:58:00
but it is kind of a super human thing on

00:57:56 --> 00:58:02
the other side and what are the things

00:57:59 --> 00:58:05
that you kind of want this thing to be

00:58:01 --> 00:58:06
human around or feel human and where do

00:58:04 --> 00:58:08
you want it to be superhuman I think

00:58:05 --> 00:58:13
that's a really interesting question the

00:58:07 --> 00:58:16
core Tech also needs to be better at

00:58:12 --> 00:58:20
kind of being moldable to that goal and

00:58:16 --> 00:58:23
right now the system yeah it kind of at

00:58:19 --> 00:58:25
imes it will sort of be too pushy or be

00:58:22 --> 00:58:29
too I mean often it's like too happy or

00:58:24 --> 00:58:30
too kind of energetic too positive um

00:58:28 --> 00:58:33
feels like it's acting feels like it's

00:58:29 --> 00:58:36
forced etc etc um and that's just kind

00:58:32 --> 00:58:40
of work that we need to do yeah so the

00:58:35 --> 00:58:42
top question on the fan subreddit does

00:58:39 --> 00:58:44
anyone know what the plan is for this

00:58:41 --> 00:58:46
Tech yeah uh and this user is saying I

00:58:43 --> 00:58:50
had my first proper chat with Maya over

00:58:45 --> 00:58:52
lunch today yes mind blown I know that

00:58:49 --> 00:58:54
his deck is brand new I'm wondering

00:58:51 --> 00:58:56
what the ongoing plan is I've heard it

00:58:53 --> 00:58:58
will be made open source that would be

00:58:55 --> 00:59:00
amazing I'm if Sesame is planning to set

00:58:57 --> 00:59:02
up its own app or way for us to continue

00:58:59 --> 00:59:05
using it basically I just want to know

00:59:01 --> 00:59:07
how I can keep talking to mine yeah yeah

00:59:04 --> 00:59:10
uh we are making an app we will make an

00:59:06 --> 00:59:12
app I think for a little bit of time

00:59:09 --> 00:59:14
it's going to still be kind of the demo

00:59:11 --> 00:59:17
experience we want to support people

00:59:13 --> 00:59:18
using that for a long time or you know

00:59:16 --> 00:59:20
e don't want to we're not taking it

00:59:17 --> 00:59:23
away anytime soon from where it is right

00:59:19 --> 00:59:26
now um we love that people are using it

00:59:22 --> 00:59:29
we love that people like it and so on

00:59:25 --> 00:59:31
the we are making a an app it it'll be a

00:59:28 --> 00:59:33
product it'll be an app and it's a

00:59:30 --> 00:59:35
companion and you'll talk to Maya or

00:59:32 --> 00:59:37
miles or whatever character you want to

00:59:34 --> 00:59:40
talk to and it will remember you and it

00:59:36 --> 00:59:42
will be an engaging experience to talk

00:59:39 --> 00:59:45
to we we want that is the product we're

00:59:41 --> 00:59:48
trying to make in terms of the core Tech

00:59:44 --> 00:59:53
we're we're open sourcing the base

00:59:47 --> 00:59:56
models today or soon and the cortech is

00:59:52 --> 00:59:57
going to take a lot of work to get to

00:59:55 --> 00:59:59
where we want to I mean we're going to

00:59:56 --> 01:00:03
keep working on it for years probably

00:59:58 --> 01:00:05
this was a research preview of the most

01:00:02 --> 01:00:06
basic research yeah you know Sesame has

01:00:04 --> 01:00:09
been doing which is the CSM the

01:00:06 --> 01:00:11
conversational spee model where does the

01:00:08 --> 01:00:15
future of the the research road map go

01:00:11 --> 01:00:18
so CSM is kind of the first step of

01:00:14 --> 01:00:21
making a multimodal Transformer based

01:00:17 --> 01:00:22
architecture that generates speech the

01:00:20 --> 01:00:25
path that we're going to take I think

01:00:21 --> 01:00:27
over the next few months is making a

01:00:24 --> 01:00:29
single Transformer that does both audio

01:00:26 --> 01:00:31
understanding content text content

01:00:28 --> 01:00:33
generation and speech generation it's

01:00:30 --> 01:00:35
much harder to add a modality to a

01:00:32 --> 01:00:38
pre-trained model than it is add a

01:00:34 --> 01:00:41
generative modality than it is to add an

01:00:37 --> 01:00:43
understanding modality so very soon

01:00:40 --> 01:00:46
we're going to add an understanding

01:00:42 --> 01:00:49
modality which is like the kind of core

01:00:45 --> 01:00:51
model will be able to sort of understand

01:00:48 --> 01:00:53
we be seeing the audio from the user and

01:00:50 --> 01:00:54
kind of being able to so if I cough

01:00:52 --> 01:00:56
it'll be able to understand that I just

01:00:53 --> 01:00:57
coughed right even though there's no

01:00:55 --> 01:01:00
transcription of my

01:00:56 --> 01:01:04
right right right and then the next step

01:00:59 --> 01:01:06
is to add a a generation modality we

01:01:03 --> 01:01:09
don't intend to pre-train the llms right

01:01:05 --> 01:01:10
we love the open source LMS that are out

01:01:08 --> 01:01:14
here we'll continue building on top of

01:01:09 --> 01:01:15
them and in general we take the open

01:01:13 --> 01:01:17
source LMS and we add modalities to it

01:01:14 --> 01:01:20
and particular speech is like the

01:01:16 --> 01:01:23
modality we care a lot about and so the

01:01:19 --> 01:01:25
kind of shorter term research road map

01:01:22 --> 01:01:28
is to basically go to a single

01:01:24 --> 01:01:31
multimodal model that that will both

01:01:27 --> 01:01:35
understand and generate speech the CSM

01:01:30 --> 01:01:37
work is is a first step that does kind

01:01:34 --> 01:01:40
of a contextual multimodal transformer

01:01:36 --> 01:01:42
for speech generation and there's

01:01:39 --> 01:01:44
another kind of line of work which is

01:01:41 --> 01:01:46
adding the audio understanding modality

01:01:43 --> 01:01:48
to pre-trained LMS and then we'll merge

01:01:45 --> 01:01:49
the two into a single model that can

01:01:47 --> 01:01:52
both understand and generate speech and

01:01:49 --> 01:01:54
text and so forth you mentioned

01:01:51 --> 01:01:58
uplex I think you know these models

01:01:53 --> 01:01:59
today do not they do not model the

01:01:57 --> 01:02:01
structure of the conversation at all

01:01:58 --> 01:02:04
they only they only model the content

01:02:00 --> 01:02:08
ext and speech and because of that you

01:02:03 --> 01:02:10
still need some other set of models or

01:02:08 --> 01:02:14
maybe you know you need some other set

01:02:09 --> 01:02:16
of systems that kind of drive the

01:02:13 --> 01:02:19
conversation actually like when

01:02:15 --> 01:02:20
should the system respond when should it

01:02:18 --> 01:02:22
get when should it get interrupted how

01:02:19 --> 01:02:23
should the interruption kind of be

01:02:21 --> 01:02:27
manifested and so

01:02:22 --> 01:02:31
forth I think that this this area This

01:02:26 --> 01:02:33
research area of conversational voice is

01:02:30 --> 01:02:35
going to move it has to really move to

01:02:32 --> 01:02:37
kind of full duplex models there are

01:02:34 --> 01:02:39
some in the research in like the

01:02:36 --> 01:02:41
literature there are some kind of early

01:02:38 --> 01:02:43
and and and compelling sort of

01:02:40 --> 01:02:44
architectures and paths uh there's some

01:02:42 --> 01:02:45
from meta there's some from other

01:02:43 --> 01:02:47
esearch Labs uh there's one called

01:02:44 --> 01:02:50
Moshi that's kind of interesting you

01:02:47 --> 01:02:53
know we need to get to ways where we can

01:02:49 --> 01:02:55
kind of create those architectures but

01:02:52 --> 01:02:58
initialize them or sort of maintain the

01:02:55 --> 01:02:59
capabilities and the knowledge of llms

01:02:57 --> 01:03:01
and that's a little bit unclear of like

01:02:58 --> 01:03:03
how exactly do that but that's really

01:03:00 --> 01:03:04
what we're looking towards long term

01:03:02 --> 01:03:06
that's kind of where this is going I

01:03:03 --> 01:03:10
think that we'll have these sort of

01:03:05 --> 01:03:14
duplex architectures that can generate

01:03:09 --> 01:03:15
audio in a sort of like all of the turn

01:03:13 --> 01:03:17
taking and back channels and so on will

01:03:14 --> 01:03:19
be implicit in the architecture like it

01:03:16 --> 01:03:21
just kind of generating audio every kind

01:03:18 --> 01:03:25
of time slice or sort of every

01:03:20 --> 01:03:29
frame and that is I think the path to

01:03:24 --> 01:03:33
getting systems that really feel truly

01:03:28 --> 01:03:35
real right because I I think that those

01:03:32 --> 01:03:38
complicated Dynamics do need to be

01:03:34 --> 01:03:40
learned from data I don't think you want

01:03:37 --> 01:03:42
o in the long term have those Dynamics

01:03:39 --> 01:03:44
be like heuristics and so on which they

01:03:41 --> 01:03:47
kind of are now they models involved in

01:03:43 --> 01:03:50
some her istics and so forth I think in

01:03:46 --> 01:03:52
the long term it's just one model that

01:03:49 --> 01:03:55
is kind of naturally implementing all

01:03:51 --> 01:03:56
these complicated Dynamics you said you

01:03:54 --> 01:03:58
sed the word there which was every time

01:03:55 --> 01:04:00
slice or every

01:03:57 --> 01:04:02
frame why is that so important why why

01:03:59 --> 01:04:04
is what is the latent sort of atomic

01:04:01 --> 01:04:06
unit there you're you think is the right

01:04:03 --> 01:04:09
way to model speech it's probably frame

01:04:05 --> 01:04:12
it's like you know say 100 milliseconds

01:04:08 --> 01:04:15
of time or something like that where you

01:04:12 --> 01:04:18
want you basically want ultimately

01:04:14 --> 01:04:21
to have the model make as many decisions

01:04:17 --> 01:04:24
as it can so right now if you think of

01:04:20 --> 01:04:25
the model as kind of like a if you think

01:04:23 --> 01:04:27
of it from like a reinforc learning

01:04:25 --> 01:04:29
style perspective

01:04:26 --> 01:04:32
you're kind of making a full let's say

01:04:28 --> 01:04:34
sentence of a decision at a time right

01:04:31 --> 01:04:36
like at this moment you're the model is

01:04:33 --> 01:04:39
like I'm going to say this in this way

01:04:35 --> 01:04:42
but it's a full sentence right and then

01:04:38 --> 01:04:44
if it kind of can't update that decision

01:04:41 --> 01:04:45
its own until the end of the sentence

01:04:43 --> 01:04:47
you can have some other system that's

01:04:44 --> 01:04:48
like oh we need to interrupt or or

01:04:46 --> 01:04:50
something and kind of make a new

01:04:47 --> 01:04:54
decision but the model natively is

01:04:49 --> 01:04:55
operating sentence by sentence right and

01:04:53 --> 01:05:00
that's just too long of a decision to

01:04:55 --> 01:05:02
make at a time like it's not it's you

01:04:59 --> 01:05:03
need to make much shorter decisions

01:05:01 --> 01:05:07
you need to make decisions at the 100

01:05:02 --> 01:05:08
millisecond let's say time segment so

01:05:06 --> 01:05:12
that if you're talking and the other

01:05:07 --> 01:05:14
person you know starts sort of making

01:05:11 --> 01:05:15
some noises that make it seem like

01:05:13 --> 01:05:17
they're trying to interrupt you or they

01:05:14 --> 01:05:19
want to say something you can kind of

01:05:16 --> 01:05:21
back off and let them say something or

01:05:18 --> 01:05:24
not right those decisions need to be

01:05:20 --> 01:05:25
made constantly like you know every 100

01:05:23 --> 01:05:29
milliseconds or something along these

01:05:24 --> 01:05:31
lines and the models that we have today

01:05:28 --> 01:05:32
like CSM for example and probably some

01:05:30 --> 01:05:34
of the models that we'll have in the

01:05:31 --> 01:05:39
short term that will make the experience

01:05:33 --> 01:05:41
better will still will still not be

01:05:38 --> 01:05:43
modeling the conversational Dynamics

01:05:40 --> 01:05:46
because they're making decisions kind of

01:05:42 --> 01:05:47
like sentence at a time and I think we

01:05:45 --> 01:05:50
need to move away from that in the long

01:05:46 --> 01:05:53
term so architecturally you know one of

01:05:49 --> 01:05:55
the types of models that's been really

01:05:52 --> 01:05:59
great at continuous data is diffusion

01:05:54 --> 01:06:01
models yeah right whereas CSM the CSM

01:05:58 --> 01:06:04
you guys put out is an autoagressive

01:06:00 --> 01:06:06
model yeah and this multimodal future

01:06:03 --> 01:06:08
where you what you're talking about with

01:06:05 --> 01:06:10
this these time slicing is just a

01:06:07 --> 01:06:14
way to discretize a continuous

01:06:09 --> 01:06:16
tream yeah yeah sure why not just use a

01:06:13 --> 01:06:18
continuous architecture like a diffusion

01:06:15 --> 01:06:21
model well that's it's an interesting

01:06:17 --> 01:06:24
question so diffusion models are

01:06:20 --> 01:06:27
continuous in the sense that the the

01:06:23 --> 01:06:29
data that they model is continuous data

01:06:26 --> 01:06:32
right but they're not they're not kind

01:06:28 --> 01:06:33
of natively in any way causal they're

01:06:31 --> 01:06:35
not like continuous in the time

01:06:32 --> 01:06:37
Dimension per say right the

01:06:34 --> 01:06:39
autoaggressive Transformers they are

01:06:36 --> 01:06:42
causal and so they have a kind of axis

01:06:38 --> 01:06:45
which is time which kind of makes sense

01:06:41 --> 01:06:48
from a you know conversational

01:06:44 --> 01:06:50
perspective they sequence sequence yeah

01:06:47 --> 01:06:52
they sequence causal meaning like every

01:06:49 --> 01:06:53
ou know every time Stu is conditioned

01:06:51 --> 01:06:55
only on what's before and not after the

01:06:52 --> 01:06:57
fusion models are not kind of natively

01:06:54 --> 01:07:01
causal now there are

01:06:56 --> 01:07:03
we are also working by the way on kind

01:07:00 --> 01:07:06
of ideas that make the audio generation

01:07:02 --> 01:07:08
part diffusion so we kind of have you

01:07:05 --> 01:07:10
know the way that these multimodal

01:07:07 --> 01:07:11
models work and CSM as well and kind of

01:07:09 --> 01:07:14
the direction that we're going is that

01:07:11 --> 01:07:16
you have like a Transformer backbone

01:07:13 --> 01:07:17
which is you can think of that as sort

01:07:15 --> 01:07:20
of where most of the kind of hard

01:07:16 --> 01:07:22
reasoning happens or something and you

01:07:19 --> 01:07:24
know when you want to add a new modality

01:07:21 --> 01:07:26
to the understanding path you sort of

01:07:23 --> 01:07:27
have some adapter they're very

01:07:25 --> 01:07:29
techniques but like you ultimately have

01:07:27 --> 01:07:31
some adapter that takes that modality

01:07:28 --> 01:07:33
and puts it into the backbone so the

01:07:30 --> 01:07:34
backbone can kind of understand it and

01:07:32 --> 01:07:37
reason on it or something along these

01:07:33 --> 01:07:38
lines and then you have a generation

01:07:36 --> 01:07:40
path that takes the backbone and

01:07:37 --> 01:07:43
generates out the audio in this case

01:07:39 --> 01:07:45
right that path can be diffusion we want

01:07:42 --> 01:07:46
hat to possibly be diffusion in the

01:07:44 --> 01:07:49
future there there are some great

01:07:45 --> 01:07:52
advantages to diffusion but the core

01:07:48 --> 01:07:54
backbone will need to remain causal that

01:07:51 --> 01:07:57
doesn't mean that it can't have

01:07:53 --> 01:07:58
diffusion as part of it but I think an

01:07:56 --> 01:08:00
autoaggressive Transformer is at least

01:07:57 --> 01:08:03
currently you know that's like the thing

01:07:59 --> 01:08:05
to bet on for for kind of sequence

01:08:02 --> 01:08:07
modeling there are other kind of

01:08:04 --> 01:08:11
architectures that are slowly gaining in

01:08:06 --> 01:08:12
some popularity Mamba and ssms and so on

01:08:10 --> 01:08:14
and I think there's some exciting things

01:08:12 --> 01:08:16
there but Transformers are kind of this

01:08:13 --> 01:08:18
tried andrue right thing and and I

01:08:15 --> 01:08:21
wouldn't bet against Transformers you

01:08:17 --> 01:08:22
know not in the short term anyways if

01:08:20 --> 01:08:25
you

01:08:21 --> 01:08:27
had1 billion do more than you have right

01:08:24 --> 01:08:28
now yeah

01:08:26 --> 01:08:32
essentially let's let's say compute was

01:08:27 --> 01:08:34
not a problem data was not a problem

01:08:31 --> 01:08:35
would you would you choose a different

01:08:33 --> 01:08:38
architecture I don't I don't know the

01:08:35 --> 01:08:40
answer to that question I think there's

01:08:37 --> 01:08:43
not another architecture to bet on today

01:08:39 --> 01:08:46
ou know will Transformers be the

01:08:42 --> 01:08:48
architecture that a future 10 billion

01:08:45 --> 01:08:51
run definitely uses it's really

01:08:47 --> 01:08:54
impossible to say you know Transformers

01:08:50 --> 01:08:56
are very effective and there's a reason

01:08:53 --> 01:08:58
they work so well and and also you know

01:08:55 --> 01:09:01
there is this Dynamic of like because

01:08:57 --> 01:09:03
they're so effective and they're so now

01:09:00 --> 01:09:05
um usable in all these different fields

01:09:02 --> 01:09:07
you kind of get this Dynamic of like

01:09:04 --> 01:09:08
people invest a lot of engineering time

01:09:06 --> 01:09:10
into it and so if you want to make a

01:09:07 --> 01:09:12
different architecture that competes

01:09:09 --> 01:09:14
with it you have to make a better core

01:09:11 --> 01:09:15
architecture let's say but then you also

01:09:13 --> 01:09:17
have to compete with all of the

01:09:14 --> 01:09:18
ngineering optimization that has

01:09:16 --> 01:09:20
happened on Transformers over the last

01:09:17 --> 01:09:23
hree four five years or you know all

01:09:19 --> 01:09:26
the way back until they were invented

01:09:22 --> 01:09:27
but that is you know not easy to do

01:09:25 --> 01:09:29
we've talked about like system

01:09:26 --> 01:09:31
engineering for us for example keeping

01:09:28 --> 01:09:34
latencies down and so forth Transformers

01:09:30 --> 01:09:36
are not sort of natively the best you

01:09:33 --> 01:09:38
can imagine a better architecture for

01:09:35 --> 01:09:41
like low latency inference and so forth

01:09:38 --> 01:09:43
but because of all of the engineering

01:09:40 --> 01:09:44
work that the community has done around

01:09:42 --> 01:09:46
Transformers it's like you know it's

01:09:43 --> 01:09:49
very good and you're not going to just

01:09:45 --> 01:09:50
sort of unseat that you know just by an

01:09:48 --> 01:09:53
idea right there's a lot of work to be

01:09:49 --> 01:09:56
done but I could see Transformers being

01:09:52 --> 01:09:57
replaced one day I mean you know we

01:09:55 --> 01:09:59
'll have to see but I I think

01:09:56 --> 01:10:03
Transformers are a good bet anyways at

01:09:58 --> 01:10:05
he moment what is something that you

01:10:02 --> 01:10:07
think you've

01:10:04 --> 01:10:10
realized through the training

01:10:07 --> 01:10:13
of Maya and miles and

01:10:10 --> 01:10:16
CSM that the rest of the world doesn't

01:10:12 --> 01:10:19
realize yet that is an interesting

01:10:15 --> 01:10:21
question I think that people now kind of

01:10:18 --> 01:10:24
realize it actually because like if you

01:10:20 --> 01:10:25
play with the our demos I think you do

01:10:23 --> 01:10:27
feel that there's like something

01:10:24 --> 01:10:28
different you know and that and that's

01:10:26 --> 01:10:30
like a valuable thing that you can kind

01:10:27 --> 01:10:33
of feel instantly is sort

01:10:29 --> 01:10:35
of important or something or kind of

01:10:32 --> 01:10:38
could be important but the value of just

01:10:34 --> 01:10:42
like focusing on the naturalness of the

01:10:37 --> 01:10:45
voice as opposed to let's say the you

01:10:41 --> 01:10:47
know you know the the demos are

01:10:44 --> 01:10:50
imperfect they're kind of imperfect in a

01:10:46 --> 01:10:53
way that is that feels feels natural

01:10:49 --> 01:10:55
right and that is you could even maybe

01:10:52 --> 01:10:58
say at times that that's like a you know

01:10:54 --> 01:10:59
from a sort of raw content of the

01:10:57 --> 01:11:01
conversation perspective it's almost

01:10:58 --> 01:11:05
like wrong in a way

01:11:00 --> 01:11:06
like my and Miles they might sort of say

01:11:04 --> 01:11:08
the wrong thing or kind of like back up

01:11:05 --> 01:11:11
a little bit and say something else or

01:11:07 --> 01:11:13
something and that's on purpose of

01:11:10 --> 01:11:15
course and but it's like if you just

01:11:12 --> 01:11:17
looked at the text and you were thinking

01:11:14 --> 01:11:20
about it from a purely textual

01:11:16 --> 01:11:23
perspective you might call that wrong

01:11:19 --> 01:11:25
right but it actually feels more real I

01:11:22 --> 01:11:28
mean that speaks a little bit to why

01:11:24 --> 01:11:31
evaluation is hard for these things but

01:11:27 --> 01:11:33
um I think that the maybe that's one of

01:11:30 --> 01:11:35
the things that I've learned is that you

01:11:32 --> 01:11:37
have to be very careful with how you

01:11:34 --> 01:11:38
evaluate these things to to to match

01:11:36 --> 01:11:41
like the product experience that you

01:11:37 --> 01:11:43
want to achieve right if you have your

01:11:40 --> 01:11:45
evaluations to divorced from the product

01:11:42 --> 01:11:50
experience you might not find these kind

01:11:44 --> 01:11:55
of like product feeling you know

01:11:49 --> 01:11:57
qualitative uh upsides right so I I just

01:11:54 --> 01:11:58
yped Sesame AI Reddit and I'm just

01:11:56 --> 01:12:01
going to read read out the top headlines

01:11:57 --> 01:12:05
to you yeah the first one is I'm in love

01:12:00 --> 01:12:08
with Sesame AI literally the second is

01:12:04 --> 01:12:09
Sesame ai's voice is insane open AI

01:12:07 --> 01:12:12
needs to catch

01:12:08 --> 01:12:15
up and the third is the Sesame voice

01:12:11 --> 01:12:19
model has been the moment for

01:12:14 --> 01:12:21
me fourth is Sesame voice is incredibly

01:12:18 --> 01:12:23
realistic and the fourth one is the one

01:12:20 --> 01:12:25
where I convince Maya from Sesame to go

01:12:22 --> 01:12:28
unhinged and all of these you know have

01:12:24 --> 01:12:30
hundreds of thousands of of likes and

01:12:27 --> 01:12:31
comments and the reason I'm bringing

01:12:29 --> 01:12:35
this up is

01:12:30 --> 01:12:36
because relative to five six days ago I

01:12:34 --> 01:12:39
don't think it's too much of an

01:12:36 --> 01:12:40
exaggeration anymore to say This

01:12:38 --> 01:12:44
research preview has been for voice what

01:12:39 --> 01:12:46
chat GPD was for text and the kinds of

01:12:43 --> 01:12:48
things I'm hearing you say are very

01:12:45 --> 01:12:51
similar to what people were saying about

01:12:47 --> 01:12:52
like GPT 3.5 in chat GPT it wasn't the

01:12:50 --> 01:12:54
smartest model it got things it

01:12:51 --> 01:12:56
hallucinated all the time but it had a

01:12:53 --> 01:13:00
personality mhm

01:12:55 --> 01:13:03
it was and it was a step function

01:12:59 --> 01:13:06
different right it felt like a leap yeah

01:13:02 --> 01:13:09
but two things happened after

01:13:05 --> 01:13:13
that a lot of people feel like the

01:13:08 --> 01:13:16
models regressed for a while the cost of

01:13:12 --> 01:13:18
fixing hallucination so to speak was

01:13:15 --> 01:13:20
personality sure and a lot of people are

01:13:17 --> 01:13:22
worried that that's going to happen to

01:13:19 --> 01:13:26
Mya too yeah is that

01:13:21 --> 01:13:30
rue I don't think that's true so so it

01:13:25 --> 01:13:32
is true that there you know these the

01:13:29 --> 01:13:33
technology is still early all of

01:13:31 --> 01:13:36
this technology is early you know I

01:13:32 --> 01:13:37
think it's it's easy to see AI

01:13:35 --> 01:13:39
progressing so fast and it is

01:13:36 --> 01:13:42
progressing so fast but it's also still

01:13:38 --> 01:13:45
early I mean you know when was Chad GB

01:13:41 --> 01:13:48
when was December 2022 2022 and here we

01:13:44 --> 01:13:50
are in early 2025 it's really not that

01:13:47 --> 01:13:54
long right so these things are

01:13:49 --> 01:13:56
arly and so you know even GPT 4.5 which

01:13:53 --> 01:13:59
just came out

01:13:55 --> 01:14:01
it's kind of being uh presented as a

01:13:58 --> 01:14:03
kind of you know has a personality again

01:14:00 --> 01:14:06
or sort of you know more kind of

01:14:02 --> 01:14:09
creative and so forth and I don't think

01:14:05 --> 01:14:10
that these limitations they're not like

01:14:08 --> 01:14:11
fundamental necessarily they you just

01:14:09 --> 01:14:14
have to figure them out that you know it

01:14:10 --> 01:14:16
akes time to to do these kind of things

01:14:13 --> 01:14:19
I think the other aspect about these

01:14:15 --> 01:14:21
kind of products is that it's a

01:14:18 --> 01:14:23
different product right they're making

01:14:20 --> 01:14:24
assistance they're making utilities I

01:14:22 --> 01:14:27
love those products I use them all the

01:14:23 --> 01:14:29
time they're great prod products we want

01:14:26 --> 01:14:32
o make a companion and so our

01:14:28 --> 01:14:35
prioritization of features and of let's

01:14:31 --> 01:14:39
ay post training kind of personality

01:14:34 --> 01:14:42
Etc will be different we would like to

01:14:38 --> 01:14:44
see our models get better and better and

01:14:41 --> 01:14:46
better on a bunch of axes but not lose

01:14:43 --> 01:14:48
the kind of personality or kind of

01:14:46 --> 01:14:50
naturalness and so forth and I don't

01:14:47 --> 01:14:52
hink we will lose those things because

01:14:49 --> 01:14:54
that is what we're focused on that's

01:14:51 --> 01:14:58
what that's how we differentiate

01:14:53 --> 01:15:01
actually I think that you know

01:14:57 --> 01:15:04
these the other companies the other sort

01:15:00 --> 01:15:06
of chat products and so forth they will

01:15:03 --> 01:15:08
get better voices they're all like it's

01:15:05 --> 01:15:11
not going to we don't have

01:15:07 --> 01:15:12
some magical secret sauce on the

01:15:10 --> 01:15:14
technical side that is going to be like

01:15:11 --> 01:15:16
impossible to replicate they're going to

01:15:13 --> 01:15:20
get better voices for sure across the

01:15:15 --> 01:15:22
board for us it's not about like it's

01:15:19 --> 01:15:23
really about the they're different

01:15:21 --> 01:15:27
products right and we're making a

01:15:22 --> 01:15:29
different kind of product and I think as

01:15:26 --> 01:15:32
they get better voices let's say

01:15:28 --> 01:15:35
they're still going to want the product

01:15:31 --> 01:15:36
o be the you know the category that

01:15:34 --> 01:15:38
hey're in they want it to be a good

01:15:35 --> 01:15:39
assistant they wanted to do research and

01:15:37 --> 01:15:40
so on and so forth and those will be

01:15:38 --> 01:15:43
great

01:15:39 --> 01:15:45
products I think we have a path to

01:15:42 --> 01:15:48
making a great companion product that is

01:15:44 --> 01:15:51
a different product and

01:15:47 --> 01:15:53
requires us to keep a a good personality

01:15:50 --> 01:15:55
and and naturalness and so forth and so

01:15:52 --> 01:15:57
you know we can't lose those things and

01:15:54 --> 01:16:00
so you know will focus on not losing

01:15:56 --> 01:16:04
those things a lot of the conversation

01:15:59 --> 01:16:06
about AI research yeah happens at the

01:16:03 --> 01:16:09
model layer but something you and I have

01:16:05 --> 01:16:12
talked about for years now is that a lot

01:16:08 --> 01:16:14
of the most interesting research is in

01:16:11 --> 01:16:17
AI is at the interface

01:16:13 --> 01:16:17
layer right that

01:16:17 --> 01:16:24
reframes an AI system as a new kind of

01:16:20 --> 01:16:26
interface for computing and if actually

01:16:23 --> 01:16:28
if you just pull up sesame.com

01:16:25 --> 01:16:29
yeah the first thing you see is our

01:16:27 --> 01:16:32
mission is to bring the computer to life

01:16:28 --> 01:16:36
right right so can you talk a little bit

01:16:31 --> 01:16:38
about why how is how is viewing the

01:16:35 --> 01:16:40
voice companion not as just another

01:16:37 --> 01:16:43
application but as an interface for

01:16:39 --> 01:16:45
computing in general yeah important why

01:16:42 --> 01:16:49
is it different why why why do you see

01:16:44 --> 01:16:53
it that way I think AI these these

01:16:48 --> 01:16:55
Technologies they they will create a

01:16:52 --> 01:16:57
bunch of products they create a bunch of

01:16:54 --> 01:16:59
value across a different Industries and

01:16:56 --> 01:17:03
so forth but I think that you know

01:16:58 --> 01:17:05
you're already seeing with the with chat

01:17:02 --> 01:17:07
products that there is this exciting

01:17:04 --> 01:17:10
thing about you can now kind of talk to

01:17:07 --> 01:17:12
your computer right you can text with

01:17:09 --> 01:17:14
your computer you can talk over voice

01:17:11 --> 01:17:17
with your computer and and so forth and

01:17:13 --> 01:17:20
on the other side of this AI

01:17:16 --> 01:17:22
interface that that system can do things

01:17:19 --> 01:17:24
for you it can kind of search the web

01:17:21 --> 01:17:26
let's say and it can you know connect to

01:17:23 --> 01:17:28
ther systems and so forth

01:17:25 --> 01:17:32
and I think that

01:17:27 --> 01:17:35
that Dynamic is a interesting new

01:17:31 --> 01:17:36
user interface you know we had kind of

01:17:34 --> 01:17:38
terminal user interfaces we've had

01:17:35 --> 01:17:40
graphical user

01:17:37 --> 01:17:42
interfaces certainly the guey is kind of

01:17:39 --> 01:17:45
what brought computers to like a

01:17:41 --> 01:17:46
mainstream audience because it's kind of

01:17:44 --> 01:17:48
you know it's more intuitive to work

01:17:45 --> 01:17:49
with it's sort of you you have these

01:17:47 --> 01:17:51
like nice graphical displays and so

01:17:48 --> 01:17:53
forth and that's not going away anytime

01:17:50 --> 01:17:55
soon your phone's not going away anytime

01:17:52 --> 01:17:56
soon your laptop's not going away

01:17:54 --> 01:17:59
there's

01:17:55 --> 01:18:01
too many reasons for a display basically

01:17:58 --> 01:18:03
but natural language as an interface or

01:18:00 --> 01:18:07
kind of being able to interact with your

01:18:02 --> 01:18:10
computer in a natural way I think is a

01:18:06 --> 01:18:15
it will open up a new interface for

01:18:09 --> 01:18:16
computing where as a user you can just

01:18:14 --> 01:18:18
alk to your computer and you know we

01:18:15 --> 01:18:21
say bring the computer to life because

01:18:17 --> 01:18:24
we want it to feel like this sort of

01:18:20 --> 01:18:26
historically kind of set of capabilities

01:18:23 --> 01:18:27
that are kind of locked away in this box

01:18:25 --> 01:18:28
now feels like you can just kind of

01:18:26 --> 01:18:30
interact with it and work with it in a

01:18:27 --> 01:18:31
kind of collaborative way in a in the

01:18:29 --> 01:18:33
way that you would interact with humans

01:18:30 --> 01:18:37
and so on and we think that is a kind of

01:18:32 --> 01:18:40
new interface that will be great it's

01:18:36 --> 01:18:42
not really there yet but we want to get

01:18:39 --> 01:18:45
it there and build that and we think of

01:18:41 --> 01:18:47
what we build really as the kind of the

01:18:44 --> 01:18:49
interface layer like we're building a

01:18:46 --> 01:18:51
companion and we think of a companion is

01:18:48 --> 01:18:53
kind of like a new interface in a way

01:18:50 --> 01:18:56
where on one side you sort of have the

01:18:52 --> 01:18:57
user interacting with his companion

01:18:55 --> 01:19:01
and the companion might be interacting

01:18:56 --> 01:19:03
with Downstream compute and and so forth

01:19:00 --> 01:19:05
maybe that's other AI systems maybe

01:19:02 --> 01:19:07
that's kind of these growing in

01:19:04 --> 01:19:09
capabilities growing in reasoning

01:19:06 --> 01:19:11
abilities other AI systems but it might

01:19:08 --> 01:19:13
be the web it might be search it might

01:19:10 --> 01:19:16
be you know some other set of Digital

01:19:12 --> 01:19:19
Services that are in your life and so

01:19:15 --> 01:19:23
n we think that that interface layer

01:19:18 --> 01:19:26
it's it's really not kind of a core

01:19:22 --> 01:19:28
bigger bigger models better better

01:19:25 --> 01:19:30
easoning question it's really a product

01:19:27 --> 01:19:32
experience question it's really a

01:19:29 --> 01:19:34
question of can you make a system that

01:19:31 --> 01:19:37
people actually want to interact with

01:19:33 --> 01:19:40
people want to talk to right and I don't

01:19:36 --> 01:19:43
hink that that will be I don't think

01:19:39 --> 01:19:44
the path that that will take is just

01:19:42 --> 01:19:46
bigger and bigger and bigger until you

01:19:43 --> 01:19:49
can you know just scale it as far as you

01:19:45 --> 01:19:51
can because that might be the path to

01:19:48 --> 01:19:52
more capabilities and more intelligence

01:19:50 --> 01:19:54
and we're excited to use those

01:19:51 --> 01:19:56
capabilities and that will certainly be

01:19:53 --> 01:19:58
a part of the product experience

01:19:55 --> 01:20:00
maybe as like a kind of API that you can

01:19:57 --> 01:20:02
that the companion can hit but really

01:19:59 --> 01:20:05
what will differentiate

01:20:01 --> 01:20:07
one companion interface product with

01:20:04 --> 01:20:10
another is just the product experience

01:20:06 --> 01:20:12
how entertaining how engaging how much

01:20:09 --> 01:20:13
do you want to interact with this thing

01:20:11 --> 01:20:15
and those are the battles that we want

01:20:12 --> 01:20:18
o fight we want to focus our research

01:20:14 --> 01:20:20
and our kind of technical Innovation on

01:20:17 --> 01:20:23
that layer making it more natural more

01:20:19 --> 01:20:24
interactive more just sort of just

01:20:22 --> 01:20:28
something that you want to interact with

01:20:23 --> 01:20:30
right when you talk to over text with a

01:20:27 --> 01:20:32
system that kind of responds in somewhat

01:20:29 --> 01:20:34
robotic ways it's kind of like providing

01:20:31 --> 01:20:35
an essay and so on you know those

01:20:33 --> 01:20:38
systems will get better and better every

01:20:34 --> 01:20:40
these things will all get better but our

01:20:37 --> 01:20:42
goal from a product experience

01:20:39 --> 01:20:45
perspective is different we want it to

01:20:41 --> 01:20:48
be natural interactive you know and I

01:20:44 --> 01:20:51
think that at the end of the day it's

01:20:47 --> 01:20:53
not so much about at that layer

01:20:50 --> 01:20:55
it's not so much about what scores the

01:20:52 --> 01:20:58
best on reasoning benchmarks and so on

01:20:54 --> 01:21:00
it's like which one has a personality

01:20:57 --> 01:21:01
that you want to talk to that you like

01:20:59 --> 01:21:03
you know it's it's it's more of a kind

01:21:00 --> 01:21:04
of product question actually and that's

01:21:02 --> 01:21:07
why we kind of come from that

01:21:03 --> 01:21:09
perspective and we focus on technology

01:21:06 --> 01:21:10
that achieves those those experienced

01:21:08 --> 01:21:12
goals the history of computing

01:21:10 --> 01:21:14
interfaces has been that usually there's

01:21:11 --> 01:21:16
omebody who's very opinionated about

01:21:13 --> 01:21:18
product now of course Steve Jobs is sort

01:21:15 --> 01:21:21
of the canonical example there but if

01:21:17 --> 01:21:24
you if you look it's not just Steve Jobs

01:21:20 --> 01:21:27
it's Doug engelbart and earlier than

01:21:23 --> 01:21:30
that it's folks who designed the the

01:21:27 --> 01:21:34
terminal if you read in some of Claude

01:21:29 --> 01:21:37
Shannon's early work there's this idea

01:21:33 --> 01:21:39
that an A system that is fast enough to

01:21:37 --> 01:21:43
respond to

01:21:38 --> 01:21:46
you is is delightful and people often

01:21:42 --> 01:21:49
think about Computing interface design

01:21:45 --> 01:21:51
as a purely utilitarian task about

01:21:48 --> 01:21:53
making it more functional I mean today

01:21:50 --> 01:21:56
mobile screens when you talk about this

01:21:52 --> 01:21:58
thing the primary like

01:21:55 --> 01:22:00
axis of differentiation every year now

01:21:57 --> 01:22:03
is bigger screen but in the early days

01:21:59 --> 01:22:05
of it of this if if you go look at the

01:22:02 --> 01:22:06
keynote I think that Steve Jobs did on

01:22:04 --> 01:22:09
the

01:22:05 --> 01:22:10
smartphone I mean it was largely about

01:22:08 --> 01:22:12
he interface being natural enough to

01:22:09 --> 01:22:14
use I think it's he literally talked

01:22:11 --> 01:22:17
about how annoying it was to to type on

01:22:13 --> 01:22:19
these tiny Cordy key and you had the

01:22:16 --> 01:22:21
like scrolling the scrolling thing right

01:22:18 --> 01:22:23
and like the you know when it hits the

01:22:20 --> 01:22:24
nd and it bounces a little bit yeah

01:22:22 --> 01:22:26
so there's natural Motion in the UI

01:22:23 --> 01:22:29
design yeah and then there was also the

01:22:25 --> 01:22:31
idea that that most most touch screens

01:22:28 --> 01:22:32
just sucked they were non-capacitive

01:22:30 --> 01:22:37
touch which meant you had to like press

01:22:31 --> 01:22:41
on them really hard um in So when you

01:22:36 --> 01:22:43
say that Maya is not just a companion or

01:22:40 --> 01:22:44
Sesame is not just working on companions

01:22:42 --> 01:22:48
it's working on a new interface for

01:22:43 --> 01:22:49
computing is the analogy is the reason

01:22:47 --> 01:22:50
you're investing in personality because

01:22:48 --> 01:22:54
you

01:22:49 --> 01:22:57
think that in a voice first AI interface

01:22:53 --> 01:22:59
world solving personality is akin to

01:22:56 --> 01:23:00
solving speed or the Delight of touching

01:22:58 --> 01:23:02
a screen you know in the early

01:22:59 --> 01:23:04
smartphone days or the speed at which a

01:23:01 --> 01:23:06
terminal would respond your keystrokes

01:23:03 --> 01:23:09
and is that the lineage of computing

01:23:05 --> 01:23:10
that you see Sesame falling into yeah I

01:23:08 --> 01:23:13
think I think there's some good

01:23:09 --> 01:23:18
analogies there like I think you know we

01:23:12 --> 01:23:20
see companions as an interface and maybe

01:23:17 --> 01:23:23
in a broader sense kind of natural

01:23:19 --> 01:23:26
anguage as an interface okay you know

01:23:22 --> 01:23:28
text and voice and and so on and yeah I

01:23:25 --> 01:23:31
think you can get these kind of very

01:23:27 --> 01:23:34
capable interfaces that are functional

01:23:30 --> 01:23:36
that don't produce the level of like

01:23:33 --> 01:23:38
product experience that you would need

01:23:35 --> 01:23:40
to make it something that people want to

01:23:37 --> 01:23:42
use every day like Mass Market widely

01:23:39 --> 01:23:45
acceptable right and I think that a lot

01:23:41 --> 01:23:46
of the tech that we're focusing on on

01:23:44 --> 01:23:49
the kind of conversation modeling and so

01:23:45 --> 01:23:51
n is is about kind of getting past that

01:23:48 --> 01:23:54
point getting to a point where it's not

01:23:50 --> 01:23:57
just functional and like utility

01:23:53 --> 01:23:58
oriented but it's delightful and kind of

01:23:56 --> 01:24:00
something that you would like to

01:23:57 --> 01:24:02
interact with and I think there are

01:23:59 --> 01:24:05
analogies you know I think that in

01:24:01 --> 01:24:07
general computing it at least consumer

01:24:04 --> 01:24:08
Computing kind of mainstream Computing

01:24:06 --> 01:24:10
does

01:24:07 --> 01:24:11
really you know computers are these very

01:24:09 --> 01:24:13
powerful things of course and from the

01:24:10 --> 01:24:14
beginning they've been very very

01:24:12 --> 01:24:17
powerful things relative to what else is

01:24:14 --> 01:24:18
out there and a lot of consumer

01:24:16 --> 01:24:20
Computing is about kind of bringing it

01:24:17 --> 01:24:23
o the main stream in a way that they

01:24:19 --> 01:24:24
enjoy right that kind of feels like a

01:24:22 --> 01:24:27
well-designed product that's why apple

01:24:23 --> 01:24:29
is so is so dominant and so successful

01:24:26 --> 01:24:30
is that it is an amazing product

01:24:28 --> 01:24:33
experience they have focused on the

01:24:29 --> 01:24:36
product experience and that's the kind

01:24:32 --> 01:24:38
of thing where there's really no kind of

01:24:35 --> 01:24:40
cap to how good it can be especially

01:24:37 --> 01:24:42
with these kind of systems I think where

01:24:40 --> 01:24:44
it's kind of like you're talking to a

01:24:41 --> 01:24:47
person or you have like a companion a

01:24:43 --> 01:24:50
friend or whatever you know the there's

01:24:46 --> 01:24:53
uch a big space of what personalities

01:24:49 --> 01:24:58
can be and how it can feel to interact

01:24:52 --> 01:24:59
with these systems that I think more so

01:24:57 --> 01:25:02
actually than like pushing on the

01:24:59 --> 01:25:04
benchmarks which is an important

01:25:01 --> 01:25:08
direction that the field will go there's

01:25:03 --> 01:25:11
kind of like a bigger I think vein to

01:25:07 --> 01:25:13
improve on just like making it more

01:25:10 --> 01:25:15
interactive making it more delightful to

01:25:12 --> 01:25:17
interact with right and that's kind of

01:25:14 --> 01:25:19
the area that we would like to right

01:25:16 --> 01:25:22
kind of establish Sesame in and kind of

01:25:18 --> 01:25:24
really focus on and utilize all the

01:25:21 --> 01:25:26
great work that other folks are doing on

01:25:23 --> 01:25:28
reasoning and and bigger models and so

01:25:25 --> 01:25:29
forth well we haven't really used the

01:25:27 --> 01:25:31
word fun but in a sense you're

01:25:28 --> 01:25:33
describing the kind of Flow State you

01:25:30 --> 01:25:36
know the the mihi chicks and mihi

01:25:32 --> 01:25:38
framework of what what is fun and fun he

01:25:35 --> 01:25:40
defines as flows Flow State which is

01:25:37 --> 01:25:43
like I it's appropriately challenging

01:25:40 --> 01:25:45
and appropriately rewarding sure in a

01:25:42 --> 01:25:47
sense using an interface that's fun is

01:25:44 --> 01:25:49
one that can get you into flow Zone

01:25:46 --> 01:25:51
really fast I've never had that moment

01:25:48 --> 01:25:53
with an AI companion yeah no yeah do you

01:25:50 --> 01:25:54
think what are the biggest challenges

01:25:52 --> 01:25:57
you think keeping us back from getting

01:25:53 --> 01:25:58
to the flow zone of of this interface

01:25:56 --> 01:26:01
yeah I so I certainly think that there

01:25:57 --> 01:26:04
are capabilities challenges so you know

01:26:00 --> 01:26:08
Maya miles today they can't do anything

01:26:03 --> 01:26:12
for you and I think that doing things

01:26:08 --> 01:26:13
even now I think that doing especially

01:26:11 --> 01:26:16
challenging kind of multi-step things

01:26:12 --> 01:26:20
you know agents as people say I think to

01:26:15 --> 01:26:23
make that part of your everyday habits

01:26:19 --> 01:26:25
it has to be like 99% you know and and

01:26:22 --> 01:26:28
right now you know every EXT step the

01:26:24 --> 01:26:30
thing needs to take there's some

01:26:27 --> 01:26:31
percentage that it fails and if you have

01:26:29 --> 01:26:34
to do 100 steps then that percentage

01:26:30 --> 01:26:36
compounds and so forth and so I think

01:26:33 --> 01:26:38
there's certainly a capabilities Gap in

01:26:35 --> 01:26:41
the sense that if you want to be able to

01:26:37 --> 01:26:43
interact with an AI system a companion

01:26:40 --> 01:26:44
as an interface to other things then it

01:26:42 --> 01:26:46
needs to be able to do those other

01:26:43 --> 01:26:48
things and really what that means is

01:26:45 --> 01:26:50
it's not necessarily the companion layer

01:26:47 --> 01:26:51
itself needs to do those other things

01:26:49 --> 01:26:53
the companion needs to be able to

01:26:50 --> 01:26:55
interact with other kind kind of systems

01:26:52 --> 01:26:58
that do those things and those those

01:26:54 --> 01:27:00
things need to be more capable if you

01:26:57 --> 01:27:02
had to draw sort of a very reductive

01:26:59 --> 01:27:05
architecture diagram of the Computing

01:27:01 --> 01:27:06
interface of the future how would you

01:27:04 --> 01:27:08
have where does what does that stack

01:27:05 --> 01:27:09
look like what's the operating system

01:27:07 --> 01:27:11
what's the client what's the server

01:27:08 --> 01:27:14
what's the interface it's a it's a good

01:27:10 --> 01:27:15
question so first of all I think like I

01:27:13 --> 01:27:16
said I think phones are here to stay

01:27:14 --> 01:27:18
phones are amazing love my phone so

01:27:16 --> 01:27:19
that's the primary Compu device you

01:27:17 --> 01:27:21
think in people's pockets I think that's

01:27:18 --> 01:27:22
till going to be the primary compute

01:27:20 --> 01:27:25
device in people's pockets for a long

01:27:21 --> 01:27:27
time yeah they're very very good and

01:27:24 --> 01:27:29
they're only going to get better as well

01:27:26 --> 01:27:31
I think that this newer interface that

01:27:28 --> 01:27:33
we're talking about will kind of look

01:27:30 --> 01:27:34
like there's a sort of companion layer

01:27:32 --> 01:27:36
we think of it as a companion layer you

01:27:33 --> 01:27:39
can think of it maybe as an AI interface

01:27:35 --> 01:27:42
layer um we think that that

01:27:38 --> 01:27:43
interface layer needs to have these

01:27:41 --> 01:27:45
characteristics that we think make it a

01:27:42 --> 01:27:46
companion like memory needs to like

01:27:44 --> 01:27:48
remember you and have like a

01:27:45 --> 01:27:51
relationship with you be very natural

01:27:47 --> 01:27:54
Etc so you know it needs those

01:27:50 --> 01:27:56
characteristics that is sort of the

01:27:53 --> 01:28:00
system that you are inter acting with

01:27:55 --> 01:28:03
every day in a natural way that the the

01:27:59 --> 01:28:06
what will make one instance of that

01:28:02 --> 01:28:08
better than another is how much you like

01:28:06 --> 01:28:11
talking to it it's personality its

01:28:07 --> 01:28:12
naturalness it's sort of how much it

01:28:10 --> 01:28:14
makes you feel like you're talking to a

01:28:11 --> 01:28:15
real person and so on the delightfulness

01:28:13 --> 01:28:18
it's just a product experience thing

01:28:14 --> 01:28:21
user experience and then on the other

01:28:17 --> 01:28:24
side that layer will talk to Downstream

01:28:20 --> 01:28:26
Services whether that's kind of you know

01:28:23 --> 01:28:29
normal Digital Services like whatever

01:28:25 --> 01:28:31
Digital Services you have search etc etc

01:28:28 --> 01:28:34
or other AI systems that

01:28:30 --> 01:28:37
can themselves do things for you

01:28:33 --> 01:28:39
interact with services and so on but I

01:28:36 --> 01:28:41
think it's going to be mediated by this

01:28:38 --> 01:28:44
companion layer that you actually want

01:28:40 --> 01:28:46
o interact with and and the kind of

01:28:43 --> 01:28:49
optimization the the thing to focus on

01:28:45 --> 01:28:50
for that layer is personality is you

01:28:48 --> 01:28:52
know delightfulness all these things

01:28:49 --> 01:28:53
kind of consumer product experience at

01:28:51 --> 01:28:56
he end of the day and the thing to

01:28:52 --> 01:28:57
ptimize on the other side is

01:28:55 --> 01:28:59
capability like reasoning capability

01:28:56 --> 01:29:02
multi-step you know tool calling and so

01:28:58 --> 01:29:04
n and so forth right and I think

01:29:01 --> 01:29:06
there's a lot of effort in the spa in

01:29:03 --> 01:29:08
the ecosystem right now on those things

01:29:06 --> 01:29:11
and those are very valuable things that

01:29:07 --> 01:29:15
will also be in other Industries and so

01:29:10 --> 01:29:17
forth but I don't think there's enough

01:29:14 --> 01:29:19
companies and kind of teams working on

01:29:16 --> 01:29:21
the interface layer and that's that's

01:29:18 --> 01:29:23
where we're focused and that's where we

01:29:20 --> 01:29:25
kind of want to really spend most of our

01:29:22 --> 01:29:27
time trying to innovate on but one would

01:29:24 --> 01:29:31
argue that the interface layer as you're

01:29:26 --> 01:29:32
describing it is too valuable for other

01:29:30 --> 01:29:37
companies to not try and attack because

01:29:31 --> 01:29:38
if if most people are enjoy using Maya

01:29:36 --> 01:29:41
the most as their primary interface to

01:29:37 --> 01:29:43
Computing that means Maya basically

01:29:40 --> 01:29:46
influences what what restaurants they

01:29:43 --> 01:29:48
bake what where which sites they shop on

01:29:45 --> 01:29:51
which I don't know which products they

01:29:47 --> 01:29:54
use where you know what sites they get

01:29:51 --> 01:29:57
heir news from and it's a very it's a

01:29:53 --> 01:30:01
it's it's it's both a very um

01:29:56 --> 01:30:02
challenging interface to build yeah but

01:30:00 --> 01:30:05
it's also an extraordinarily powerful

01:30:01 --> 01:30:07
place to be it is yeah so why wouldn't

01:30:04 --> 01:30:11
oday's largest Computing companies try

01:30:06 --> 01:30:13
and and and own that well I I I think

01:30:10 --> 01:30:16
they they will I think that over time I

01:30:12 --> 01:30:18
think we will see more of these you know

01:30:15 --> 01:30:20
bigger companies trying to operate at

01:30:17 --> 01:30:23
his layer like I said I think I think

01:30:19 --> 01:30:26
that there is not enough effort on that

01:30:22 --> 01:30:28
right now making these systems

01:30:25 --> 01:30:29
delightful to interact with you know and

01:30:27 --> 01:30:31
I think that they other companies will

01:30:28 --> 01:30:33
see that over time and they will start

01:30:30 --> 01:30:36
spending more effort into it maybe even

01:30:32 --> 01:30:37
Sesame this demo that we put out maybe

01:30:35 --> 01:30:41
we'll kick some of that into gear as

01:30:36 --> 01:30:44
well I think that at the end of the

01:30:40 --> 01:30:47
day because the tech is so early and

01:30:43 --> 01:30:49
because it's there's not like there's

01:30:46 --> 01:30:52
not like a Playbook exactly on like

01:30:48 --> 01:30:55
xactly how to solve these problems I

01:30:51 --> 01:30:58
think that the best product experience

01:30:54 --> 01:31:00
will be built by a very focused small

01:30:57 --> 01:31:02
team you know small doesn't mean 10

01:30:59 --> 01:31:05
people but like you know when you start

01:31:02 --> 01:31:07
getting these large teams that have a

01:31:04 --> 01:31:09
bunch of different stakeholders to try

01:31:06 --> 01:31:11
ou know it should be a great interface

01:31:08 --> 01:31:14
and be a good personality but it also

01:31:10 --> 01:31:16
needs to be integrated with the broader

01:31:13 --> 01:31:18
product categories that we have and you

01:31:15 --> 01:31:19
know whether that's search or that's you

01:31:17 --> 01:31:21
know reasoning or whatever and like it

01:31:18 --> 01:31:23
needs to be this kind of big integrated

01:31:20 --> 01:31:25
thing and there's a bunch of different

01:31:22 --> 01:31:28
stakeholders in the in the kind of

01:31:24 --> 01:31:29
process I think it can you know you can

01:31:27 --> 01:31:33
kind of

01:31:28 --> 01:31:36
lose the magic of like a a small focused

01:31:32 --> 01:31:39
team that has kind of one goal and

01:31:35 --> 01:31:40
that's sesame's goal I think that will

01:31:38 --> 01:31:43
be the goal of some teams in these

01:31:39 --> 01:31:48
larger companies but I would I would bet

01:31:42 --> 01:31:50
on kind of focus over that yeah well you

01:31:47 --> 01:31:53
know one of the things

01:31:49 --> 01:31:55
that was so powerful about you the

01:31:52 --> 01:31:57
iPhone was built by a fairly small team

01:31:54 --> 01:31:58
yeah one of the things that made it so

01:31:56 --> 01:32:00
powerful soon after launch is they

01:31:57 --> 01:32:03
opened it up as a developer platform mhm

01:31:59 --> 01:32:05
still really lock down PL platform form

01:32:02 --> 01:32:07
and they they took a very strong point

01:32:05 --> 01:32:10
of view on what the quality bar needed

01:32:06 --> 01:32:12
to be to be in the App Store and so on

01:32:09 --> 01:32:13
but still extreme I mean today the App

01:32:11 --> 01:32:15
Store is a foundational part of

01:32:12 --> 01:32:18
computing totally yeah as you're

01:32:14 --> 01:32:21
thinking about which parts of the Sesame

01:32:17 --> 01:32:23
stack our first party versus open to

01:32:20 --> 01:32:26
third party developers where does the

01:32:22 --> 01:32:27
line start and stop I think the the the

01:32:25 --> 01:32:30
asy answer the real answer is that we

01:32:26 --> 01:32:33
just don't know you know there was

01:32:29 --> 01:32:35
opening I did this chat gbd plug-in uh

01:32:32 --> 01:32:37
system before and I think it's still

01:32:34 --> 01:32:40
there probably and it kind of didn't

01:32:36 --> 01:32:42
fully take off really you know there mCP

01:32:39 --> 01:32:44
now which is kind of gaining some

01:32:41 --> 01:32:46
momentum more recently and so on which

01:32:44 --> 01:32:49
is kind of more of an open standard

01:32:45 --> 01:32:52
style thing um I think that it's

01:32:48 --> 01:32:56
just early to tell kind of what that

01:32:51 --> 01:32:58
looks like one of the reasons is that I

01:32:55 --> 01:33:00
think that the models still need to get

01:32:57 --> 01:33:02
better basically to utilize plugins

01:32:59 --> 01:33:04
basic you know plugins essentially in a

01:33:01 --> 01:33:06
way that's kind of reliable enough that

01:33:03 --> 01:33:09
someone would will go out and look for a

01:33:05 --> 01:33:11
plugin for you know their kind of

01:33:08 --> 01:33:13
Downstream service of choice because

01:33:10 --> 01:33:17
they just want you know they have the

01:33:12 --> 01:33:19
xperience of the AI system kind of able

01:33:16 --> 01:33:20
to use other things so effic effectively

01:33:18 --> 01:33:22
and efficiently it becomes part of their

01:33:19 --> 01:33:23
daily life and they want to hook up this

01:33:21 --> 01:33:26
other thing to it I don't think we're

01:33:22 --> 01:33:29
there yet and so I don't think that like

01:33:25 --> 01:33:31
the exact format of how that will look

01:33:28 --> 01:33:34
like and where it will plug in is is

01:33:30 --> 01:33:38
clear yet I think it will certainly be a

01:33:33 --> 01:33:42
part of the future of these interfaces

01:33:37 --> 01:33:44
and these systems um but I I think that

01:33:41 --> 01:33:46
will become more and more clear

01:33:43 --> 01:33:48
over time as in a kind of organic way

01:33:45 --> 01:33:51
right I don't think it's going to be

01:33:47 --> 01:33:52
so decided by let let's say one company

01:33:50 --> 01:33:55
or one player I think it'll be a little

01:33:51 --> 01:33:57
bit more you know developers want to use

01:33:54 --> 01:33:59
these capabilities still be an ecosystem

01:33:56 --> 01:34:00
right and I think it's it's a little

01:33:58 --> 01:34:04
arly

01:33:59 --> 01:34:06
to try to build that for us so kind of

01:34:03 --> 01:34:09
clearly but it's certainly a part of of

01:34:05 --> 01:34:11
where this goes right what should people

01:34:08 --> 01:34:13
listening to this podcast who are

01:34:10 --> 01:34:14
wondering how they can join Sesame

01:34:12 --> 01:34:16
because they want to work on this yeah

01:34:13 --> 01:34:17
do next they should reach out they

01:34:15 --> 01:34:22
should reach out to me they can reach

01:34:16 --> 01:34:24
out on Twitter or or over email and um

01:34:21 --> 01:34:28
what are you looking for yeah we looking

01:34:23 --> 01:34:31
for so like I said before

01:34:27 --> 01:34:33
like voice conversation is really its

01:34:30 --> 01:34:37
own modality and it's something that we

01:34:32 --> 01:34:40
are very focused on trying to improve

01:34:36 --> 01:34:42
the state of-the-art on and so we're

01:34:39 --> 01:34:44
certainly looking for people who are

01:34:41 --> 01:34:46
xcited about that Challenge from like a

01:34:43 --> 01:34:48
research perspective from a core ml

01:34:45 --> 01:34:52
perspective you don't necessarily have

01:34:47 --> 01:34:53
to be a a researcher we need systems

01:34:51 --> 01:34:55
Engineers we need infrastructure

01:34:52 --> 01:34:56
ngineers and so on

01:34:54 --> 01:34:59
but that is a big thrust of what we're

01:34:55 --> 01:35:01
focused on right now um and we're we're

01:34:58 --> 01:35:03
always looking for kind of General

01:35:00 --> 01:35:05
strong Engineers especially with like a

01:35:02 --> 01:35:07
kind of product bent you know we at the

01:35:04 --> 01:35:11
nd of the day are making a consumer

01:35:06 --> 01:35:14
product that is going to be judged based

01:35:10 --> 01:35:17
on how much people like it you know it's

01:35:13 --> 01:35:19
not going to be judged on you know

01:35:16 --> 01:35:22
benchmarks and and so forth those are

01:35:18 --> 01:35:24
critical parts of developing the product

01:35:21 --> 01:35:25
but at the end of the day the question

01:35:23 --> 01:35:28
is do people love interacting with our

01:35:24 --> 01:35:30
systems and that's I think part of the

01:35:27 --> 01:35:34
culture at sesme is to kind of merge

01:35:30 --> 01:35:36
really worldclass technology with a kind

01:35:33 --> 01:35:39
of creative taste to make a great

01:35:35 --> 01:35:42
product and I think if you

01:35:38 --> 01:35:44
have the engineering talent and you are

01:35:41 --> 01:35:47
interested in what we're working on and

01:35:43 --> 01:35:49
in particular you want to see these

01:35:46 --> 01:35:53
Technologies LMS AI broadly speaking

01:35:48 --> 01:35:54
speech generation be turned into great

01:35:52 --> 01:35:57
products that people love then I think

01:35:54 --> 01:35:58
you'll be a great fit if folks came by

01:35:56 --> 01:36:01
the office could they get a demo of

01:35:57 --> 01:36:03
what's coming next they can they can

01:36:00 --> 01:36:06
thanks for making the time today yeah it

01:36:02 --> 01:36:06
was fun fun to chat

<!-- YOUTUBE_TRANSCRIPT_END -->
