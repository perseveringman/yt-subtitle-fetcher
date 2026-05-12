---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "YP3Vmh4tYog"
title: "Beyond Leaderboards: LMArena’s Mission to Make AI Reliable"
video_url: "https://www.youtube.com/watch?v=YP3Vmh4tYog"
thumbnail_url: "https://i.ytimg.com/vi/YP3Vmh4tYog/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=YP3Vmh4tYog"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-05-29T14:01:00.000Z"
upload_date: "2025-05-29"
duration_seconds: 6301
duration_human: "1:45:01"
view_count: 4138
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:48:52.667Z"
---

# Beyond Leaderboards: LMArena’s Mission to Make AI Reliable

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=YP3Vmh4tYog
- video_id: YP3Vmh4tYog
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-05-29T14:01:00.000Z
- upload_date: 2025-05-29
- duration: 1:45:01
- view_count: 4138
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

a16z general partner Anjney Midha sits down with LMArena cofounders Anastasios N. Angelopoulos, Wei-Lin Chiang, and Ion Stoica to talk about the future of AI evaluation.

As benchmarks struggle to keep up with the pace of real-world deployment, LMArena is reframing the problem: what if the best way to test AI models is to put them in front of millions of users and let them vote? The team discusses how Arena evolved from a research side project into a key part of the AI stack, why fresh and subjective data is crucial for reliability, and what it means to build a CI/CD pipeline for large models.

They also explore:
- Why expert-only benchmarks are no longer enough
- How user preferences reveal model capabilities — and their limits
- What it takes to build personalized leaderboards and evaluation SDKs
- And why real-time testing is foundational for mission-critical AI

Chapters:
00:00:04 -  LLM evaluation: From consumer chatbots to mission-critical systems
00:06:04 -  Style and substance: Crowdsourcing expertise
00:18:51 -  Building immunity to overfitting and gaming the system
00:29:49 -  The roots of LMArena
00:41:29 -   Proving the value of academic AI research
00:48:28 -  Scaling LMArena and starting a company
00:59:59 -  Benchmarks, evaluations, and the value of ranking LLMs
01:12:13 -  The challenges of measuring AI reliability
01:17:57 -  Expanding beyond binary rankings as models evolve
01:28:07 -  A leaderboard for each prompt
01:31:28 -  The LMArena roadmap
01:34:29 -  The importance of open source and openness
01:43:10 -  Adapting to agents (and other AI evolutions)

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:08 --> 00:00:14
It sounds like what Arena is is

00:00:09 --> 00:00:16
humanity's real time exam. Yeah. Yeah.

00:00:13 --> 00:00:17
That's a good way. That's a very well.

00:00:15 --> 00:00:20
Sometimes I get asked what's the last

00:00:16 --> 00:00:22
exam that that AI should take, you know,

00:00:19 --> 00:00:24
for humanity. And I it seems like that's

00:00:21 --> 00:00:26
the wrong question to ask. we should be

00:00:23 --> 00:00:29
asking what's the real time exam you

00:00:25 --> 00:00:31
want your AIS to to be taking before

00:00:28 --> 00:00:33
they get deployed every hour every

00:00:30 --> 00:00:35
second of the day especially as we start

00:00:32 --> 00:00:38
o get I think one of the things we

00:00:34 --> 00:00:40
that's emerging for me is that one of

00:00:37 --> 00:00:44
the arena is misunderstood partly

00:00:39 --> 00:00:46
because we're just early in AI and so

00:00:43 --> 00:00:48
while benchmarks like MMLU and the idea

00:00:45 --> 00:00:51
of these static exams were useful 3

00:00:47 --> 00:00:53
years ago the future is about real time

00:00:50 --> 00:00:55
valuation real time systems real time

00:00:52 --> 00:00:56
testing in wild. Now, one thing that

00:00:54 --> 00:00:58
concerns a lot of people is the

00:00:56 --> 00:01:00
reliability of these systems when when

00:00:57 --> 00:01:02
we start going from chat bots that are

00:00:59 --> 00:01:05
good at let's say companionship and you

00:01:01 --> 00:01:08
know more consumer use cases to mission

00:01:04 --> 00:01:09
critical systems, defense, healthcare,

00:01:07 --> 00:01:12
financial

00:01:08 --> 00:01:14
services. How will Arena have to evolve

00:01:11 --> 00:01:17
as we go beyond companionship or or

00:01:14 --> 00:01:19
webdev to those kinds of mission

00:01:16 --> 00:01:22
critical use cases? I think that's one

00:01:18 --> 00:01:25
of the very reason we wanted to create a

00:01:21 --> 00:01:27
company to support this project to you

00:01:24 --> 00:01:29
know further scale the platform right so

00:01:26 --> 00:01:32
right now we are at a million monthly

00:01:28 --> 00:01:35
user now what if we scale it to five to

00:01:31 --> 00:01:39
10 or even more to capture even more

00:01:34 --> 00:01:42
diverse user base across different

00:01:38 --> 00:01:46
industries and then in that case we'll

00:01:41 --> 00:01:49
have ability to really like zoom in into

00:01:45 --> 00:01:51
all these different kind of like areas

00:01:48 --> 00:01:54
that people really care about that for

00:01:50 --> 00:01:57
critical mission task

00:01:53 --> 00:01:59
that it will be used to you. Yeah, you

00:01:56 --> 00:02:01
can imagine we are going to when we are

00:01:58 --> 00:02:04
going to scale we can have micro size

00:02:00 --> 00:02:07
for nuclear physicist,

00:02:03 --> 00:02:09
radiologist and so forth, right? And

00:02:06 --> 00:02:13
these experts are going to come there to

00:02:08 --> 00:02:14
get the best answers to their again

00:02:12 --> 00:02:16
research questions. Uh so that's

00:02:14 --> 00:02:19
interesting. Is there is there a future

00:02:15 --> 00:02:23
where now that Arena's becoming a

00:02:18 --> 00:02:25
company, you could see a a a scientific

00:02:22 --> 00:02:28
lab or a shipping company or a defense

00:02:24 --> 00:02:30
company deploy their own arena on their

00:02:27 --> 00:02:32
own infrastructure for their own users

00:02:29 --> 00:02:34
from their own prompts essentially. Many

00:02:31 --> 00:02:35
people have asked us for this already.

00:02:33 --> 00:02:38
So these would be sort of private

00:02:34 --> 00:02:41
arrival. And it's worth saying, you

00:02:37 --> 00:02:43
know, I think when people have these

00:02:40 --> 00:02:46
mission critical industries in mind,

00:02:42 --> 00:02:49
they often are thinking about the sort

00:02:45 --> 00:02:53
of like factual nature of the responses

00:02:48 --> 00:02:55
and so on and so forth. But in reality,

00:02:52 --> 00:02:56
even in such industries, the majority of

00:02:54 --> 00:02:58
questions that people ask are

00:02:56 --> 00:03:03
subjective.

00:02:57 --> 00:03:04
Okay. So the the mythology that in hard

00:03:02 --> 00:03:06
sciences or in mission critical

00:03:03 --> 00:03:08
industries people just have like cut and

00:03:05 --> 00:03:10
ried questions and they just need like

00:03:07 --> 00:03:12
a retrieval and a lookup. That's

00:03:09 --> 00:03:14
completely false.

00:03:11 --> 00:03:15
That's the very reason why these models

00:03:13 --> 00:03:17
are useful is because they allow you to

00:03:14 --> 00:03:19
sort of like interpolate between these

00:03:16 --> 00:03:22
weird questions and answer questions

00:03:18 --> 00:03:24
that are not fully specified and give

00:03:21 --> 00:03:26
responses that are sort of like geared

00:03:23 --> 00:03:29
to answer the question but might not

00:03:25 --> 00:03:31
have a fully factual basis, right? and

00:03:28 --> 00:03:33
they might incorporate factual elements

00:03:30 --> 00:03:36
through rag, let's say, but there's a

00:03:32 --> 00:03:38
subjective nature to the response. And

00:03:35 --> 00:03:39
that's a reality that everyone's going

00:03:37 --> 00:03:41
to have to live with. If these systems

00:03:38 --> 00:03:44
are going to be deployed in medicine and

00:03:40 --> 00:03:45
efense and so on and so forth, they're

00:03:43 --> 00:03:46
going to be deployed in places where the

00:03:44 --> 00:03:49
data is messy because that's where

00:03:45 --> 00:03:50
they're useful. Okay, given that fact,

00:03:48 --> 00:03:52
how are you going to make sure that

00:03:49 --> 00:03:53
hey're reliable? Well, you need

00:03:51 --> 00:03:55
something like Arena. You know, at this

00:03:52 --> 00:03:57
point, Arena is hard to miss in the AI

00:03:54 --> 00:03:59
space. you know whether it's Grock 3

00:03:56 --> 00:04:01
coming out and Elon putting it up for

00:03:58 --> 00:04:05
the bulk of the keynote or you know

00:04:00 --> 00:04:06
Demis uh using the web deina scores to

00:04:04 --> 00:04:08
kind of demonstrate how good Gemini is

00:04:05 --> 00:04:11
it it's sort of become the standard

00:04:07 --> 00:04:13
bearer for for evaluation and testing at

00:04:10 --> 00:04:16
all the big labs right but it does that

00:04:12 --> 00:04:18
mean you guys have been helping them

00:04:15 --> 00:04:20
ore than open open source labs or

00:04:17 --> 00:04:22
smaller labs no we work with model

00:04:19 --> 00:04:23
providers small and large okay so we

00:04:21 --> 00:04:25
work with basically anybody who wants to

00:04:22 --> 00:04:28
work with us you know within our

00:04:24 --> 00:04:29
constraints try to be as like helpful as

00:04:27 --> 00:04:31
possible. The fact is that you know part

00:04:28 --> 00:04:32
of the reason to build a company is

00:04:30 --> 00:04:33
because we don't want way having to

00:04:31 --> 00:04:36
serve all of these requests from people

00:04:32 --> 00:04:38
like manually himself. So it's it's been

00:04:35 --> 00:04:39
a challenge but we try to scale as much

00:04:37 --> 00:04:42
as possible and in fact one of the

00:04:38 --> 00:04:43
things that we help everybody to do is

00:04:41 --> 00:04:45
pre-release testing of their models.

00:04:42 --> 00:04:47
Okay. So it's not just that you know we

00:04:44 --> 00:04:49
work together to evaluate the models are

00:04:46 --> 00:04:50
leased but we also try to be their

00:04:48 --> 00:04:53
elease partners and say hey can we help

00:04:50 --> 00:04:56
you guys pick the models that do best on

00:04:52 --> 00:04:58
our user base and use that as a a

00:04:55 --> 00:05:00
guideline for which models they should

00:04:57 --> 00:05:01
actually release to the world. So that's

00:04:59 --> 00:05:03
the way our platform works and that's

00:05:00 --> 00:05:05
getting us closer to something you know

00:05:02 --> 00:05:06
as we've talked about like reliability

00:05:04 --> 00:05:08
is so important these subjective

00:05:05 --> 00:05:09
measurements and are so important. How

00:05:07 --> 00:05:11
are we going to get to a world where

00:05:08 --> 00:05:14
there's a CI/CD pipeline where people

00:05:10 --> 00:05:16
can, you know, test their models

00:05:13 --> 00:05:17
pre-release and make sure that they're

00:05:15 --> 00:05:19
doing well for all sorts of different

00:05:16 --> 00:05:20
diverse people? Well, you need something

00:05:18 --> 00:05:23
like Arena to do that. And that's part

00:05:19 --> 00:05:24
of what the company is geared to do. So,

00:05:22 --> 00:05:25
what people do is they can come, they

00:05:23 --> 00:05:27
can test a bunch of different models. We

00:05:24 --> 00:05:29
do this with basically every provider

00:05:26 --> 00:05:31
that comes to us and they can see, oh,

00:05:28 --> 00:05:33
which one's doing better or worse on the

00:05:30 --> 00:05:34
distribution of Arena users. And then

00:05:32 --> 00:05:35
they can use that information to help

00:05:33 --> 00:05:37
them decide which model to release.

00:05:34 --> 00:05:39
after they decide to release a model, it

00:05:36 --> 00:05:41
gets continually evaluated forever. So

00:05:38 --> 00:05:43
that's where you get the freshness of

00:05:40 --> 00:05:46
the data that the model, you know,

00:05:42 --> 00:05:48
continues to be tested and, you know,

00:05:45 --> 00:05:52
we're pushing towards a world where

00:05:47 --> 00:05:54
these subjective and human uh

00:05:51 --> 00:05:58
considerations are part of model

00:05:53 --> 00:05:59
developers final release pipeline. So if

00:05:57 --> 00:06:01
I'm hearing it right, the more testing,

00:05:58 --> 00:06:04
the more reliable we should expect AI

00:06:00 --> 00:06:07
systems to get. So we should be like

00:06:03 --> 00:06:07
with any software

00:06:07 --> 00:06:14
system this is one of the fundamental

00:06:10 --> 00:06:18
debates in the space right

00:06:13 --> 00:06:19
is what is the measure of progress the

00:06:17 --> 00:06:23
right measure of progress in the space

00:06:18 --> 00:06:26
and and there's a body of uh work that

00:06:22 --> 00:06:28
ries to create exams they call them

00:06:25 --> 00:06:30
harder and harder exams and for two

00:06:27 --> 00:06:32
reasons I find I've always found Elmar

00:06:30 --> 00:06:33
Marina interesting one is is the

00:06:31 --> 00:06:37
opposite approach which says let the

00:06:32 --> 00:06:38
wisdom of the crowd guide us

00:06:36 --> 00:06:40
and

00:06:37 --> 00:06:45
two let open

00:06:39 --> 00:06:46
source actually define the examination

00:06:44 --> 00:06:49
right I I I think this is quite

00:06:46 --> 00:06:51
important where if you get a group of

00:06:48 --> 00:06:54
experts in a room who decide what the

00:06:50 --> 00:06:55
right exam is for humanity inevitably

00:06:53 --> 00:06:58
then if it turns out that group's values

00:06:54 --> 00:07:00
get encoded in that that we have no we

00:06:57 --> 00:07:02
have no way for the rest of the world to

00:06:59 --> 00:07:04
use AI systems on a that that that that

00:07:02 --> 00:07:05
are measured by a different set of

00:07:03 --> 00:07:07
values. So, it's great that people do

00:07:04 --> 00:07:09
these expert eval. It's totally fine.

00:07:06 --> 00:07:10
It's orthogonal from what we do. You

00:07:08 --> 00:07:12
know, I'm glad we have them. But at the

00:07:09 --> 00:07:15
same time, you have to ask yourself what

00:07:12 --> 00:07:17
makes somebody an expert,

00:07:14 --> 00:07:20
right? What are they an expert

00:07:17 --> 00:07:24
on? I think the whole world is moving in

00:07:19 --> 00:07:27
a direction against like experts being

00:07:23 --> 00:07:28
the beall end all of everything. And you

00:07:26 --> 00:07:30
know, everybody actually has their own

00:07:27 --> 00:07:32
opinions and everybody has their own

00:07:29 --> 00:07:35
point of view. And in fact, there's so

00:07:31 --> 00:07:37
many natural experts in the world on all

00:07:34 --> 00:07:41
sorts of topics that they don't

00:07:36 --> 00:07:43
necessarily need a PhD in order to be

00:07:40 --> 00:07:46
really really intelligent and high taste

00:07:42 --> 00:07:47
and have valuable opinions. And I think

00:07:45 --> 00:07:49
that's one of the things I'm proud of

00:07:46 --> 00:07:50
with the arena is it allows us to

00:07:48 --> 00:07:52
actually go and say, "Hey, where are the

00:07:49 --> 00:07:54
natural experts?" And actually, can we

00:07:51 --> 00:07:56
find datadriven ways to identify them?

00:07:53 --> 00:07:58
What if we can go look and say, "Hey,

00:07:55 --> 00:08:01
this person here in this random part of

00:07:57 --> 00:08:04
the world is actually incredible at

00:08:00 --> 00:08:08
coding and math, right? Let's I their

00:08:03 --> 00:08:10
vote actually means so much and their

00:08:07 --> 00:08:14
preferences are able to guide the future

00:08:09 --> 00:08:16
of AI. That's that's an amazing thing

00:08:13 --> 00:08:17
and we hope to be able to scale it

00:08:15 --> 00:08:19
further." Okay. But I'm going I'm going

00:08:16 --> 00:08:20
to push back a little bit on this. I'm

00:08:18 --> 00:08:23
going to channel a few of the criticisms

00:08:19 --> 00:08:26
I've heard. Yeah, please. you know, from

00:08:22 --> 00:08:31
experts, which is that look, if you're

00:08:25 --> 00:08:34
an expert, you've been blessed with the

00:08:30 --> 00:08:36
brains, the resources, and so on to

00:08:33 --> 00:08:39
be a highly educated individual in your

00:08:35 --> 00:08:43
field. We have a responsibility to guide

00:08:38 --> 00:08:46
humanity. It it's our job to actually

00:08:42 --> 00:08:48
guide the masses. we should be defining

00:08:45 --> 00:08:51
what good human preferences is versus

00:08:47 --> 00:08:53
not because the masses actually don't

00:08:50 --> 00:08:56
know what they're what's good for them.

00:08:52 --> 00:08:59
Um the everyday user is the lay person

00:08:55 --> 00:09:01
prefers slop,

00:08:58 --> 00:09:04
right? We've heard these arguments.

00:09:00 --> 00:09:05
Yeah. Is there a grain of truth or or or

00:09:03 --> 00:09:08
how do you think about that? So I I

00:09:04 --> 00:09:10
think a few a few things here. So one

00:09:07 --> 00:09:14
like Anastasia said it's you know this

00:09:10 --> 00:09:17
alternative to have hard exam to create

00:09:13 --> 00:09:19
hard exam is valuable no question about

00:09:16 --> 00:09:23
hat. I think the other thing I want to

00:09:18 --> 00:09:26
point out and I took that at heart this

00:09:22 --> 00:09:30
kind of criticism and about kind of

00:09:25 --> 00:09:34
having expert labeling right now I'm I

00:09:29 --> 00:09:37
went to quite a few experts I know and I

00:09:33 --> 00:09:41
respect and asked them would you label

00:09:36 --> 00:09:45
it would you label almost everyone told

00:09:40 --> 00:09:47
me no I don't have time right so there

00:09:44 --> 00:09:51
is a question there about Are you going

00:09:46 --> 00:09:55
to get really the experts? Right. Right.

00:09:50 --> 00:09:57
And I no I I I I don't think so.

00:09:54 --> 00:09:59
Right. You're getting some people from

00:09:56 --> 00:10:01
that area who are willing to do the

00:09:58 --> 00:10:04
labeling but the best people are not

00:10:00 --> 00:10:08
willing. They fundamentally they don't

00:10:03 --> 00:10:10
have time. right now but these people if

00:10:07 --> 00:10:12
we offer to them and we are not doing

00:10:09 --> 00:10:16
now I'm talking about the future a

00:10:11 --> 00:10:17
platform where their community come

00:10:15 --> 00:10:20
there and ask question to push the

00:10:16 --> 00:10:22
boundaries to help with their research

00:10:19 --> 00:10:24
and things like that they are going to

00:10:21 --> 00:10:28
be first of all you are going to get

00:10:23 --> 00:10:32
hese people right because they do that

00:10:27 --> 00:10:35
in order to advance again in their

00:10:31 --> 00:10:38
esearch and we are going to get also

00:10:34 --> 00:10:41
their votes. So fundamentally I do think

00:10:37 --> 00:10:44
that we can get in arena again right

00:10:40 --> 00:10:45
now. I'm not talking about today I'm

00:10:43 --> 00:10:46
talking about the future. It even

00:10:44 --> 00:10:49
happens today. It even happens today. It

00:10:45 --> 00:10:52
even happens today. So you get real

00:10:48 --> 00:10:54
experts, right? The top ones. Okay.

00:10:51 --> 00:10:56
Unhirable people. Unhirable people.

00:10:53 --> 00:10:58
That's that's a great way to say it. The

00:10:55 --> 00:10:59
other thing I want to say about the

00:10:57 --> 00:11:02
layman and so

00:10:58 --> 00:11:04
forth, you know, an you you fund a lot

00:11:01 --> 00:11:06
of company. You are funding a lot of

00:11:03 --> 00:11:09
companies AI and A16Z and you are on the

00:11:05 --> 00:11:11
board of many companies. What do they

00:11:08 --> 00:11:13
build it? What do these companies build?

00:11:10 --> 00:11:17
What is their product? Who uses their

00:11:12 --> 00:11:20
product? Right. Right. It's not the top

00:11:16 --> 00:11:22
experts. He's a layman. Right. Right.

00:11:19 --> 00:11:24
These are their users. That's how open

00:11:21 --> 00:11:29
AI makes money and so forth many others.

00:11:23 --> 00:11:33
Right. So then wouldn't the evaluation

00:11:28 --> 00:11:36
should take into account the prevalence

00:11:32 --> 00:11:40
of these users? Right. Right. The answer

00:11:35 --> 00:11:42
is obviously yes. Right. So how can

00:11:39 --> 00:11:45
something again like these exams are

00:11:41 --> 00:11:47
very important to understand the

00:11:44 --> 00:11:49
capabilities of these models this

00:11:46 --> 00:11:53
benchmarks. Again, no question about

00:11:49 --> 00:11:55
hat. But they are not going to reflect

00:11:52 --> 00:12:00
MMLU is not probably as good as

00:11:55 --> 00:12:01
reflecting the preferences of the users

00:11:59 --> 00:12:05
of these

00:12:00 --> 00:12:07
AI products and services. I want to just

00:12:04 --> 00:12:09
dig one level deeper here, which is that

00:12:06 --> 00:12:11
one of the things that we are really

00:12:08 --> 00:12:13
excited about is the question of why do

00:12:10 --> 00:12:15
people vote the way they do? Who's

00:12:12 --> 00:12:18
voting left, right? Why are they doing

00:12:14 --> 00:12:20
it? on what kind of prompts do they vote

00:12:17 --> 00:12:22
for one model or another? On what kind

00:12:19 --> 00:12:24
of topics or models better? You know,

00:12:21 --> 00:12:27
basically, can we decompose human

00:12:23 --> 00:12:29
preference into its constituent

00:12:26 --> 00:12:30
components? Let's say you have a

00:12:28 --> 00:12:33
criticism. You say people vote based on

00:12:30 --> 00:12:36
slop. You know, emojis are driving votes

00:12:32 --> 00:12:37
and response length is there's a huge

00:12:35 --> 00:12:39
response length bias, which is, you

00:12:36 --> 00:12:40
know, it's true that people vote for

00:12:38 --> 00:12:42
longer responses, you know,

00:12:40 --> 00:12:43
preferentially over shorter responses

00:12:41 --> 00:12:46
even given the same content. So,

00:12:42 --> 00:12:48
well-known human bias.

00:12:45 --> 00:12:52
This gets back into

00:12:47 --> 00:12:54
RL. Can we learn this bias and actually

00:12:51 --> 00:12:56
adjust for it and correct for it? And

00:12:53 --> 00:12:58
the answer is yes. That's why we're

00:12:55 --> 00:13:00
making style control default. So what we

00:12:57 --> 00:13:04
developed is this method called style

00:12:59 --> 00:13:05
control which allows you to run not just

00:13:03 --> 00:13:08
let's say a Bradley terror aggression

00:13:04 --> 00:13:13
but also include certain covariants that

00:13:07 --> 00:13:15
model the effect of style and sentiment

00:13:12 --> 00:13:17
on how people vote.

00:13:14 --> 00:13:20
And what you get when you fit this model

00:13:16 --> 00:13:24
is not just a prediction of preference,

00:13:19 --> 00:13:26
but also an understanding of why people

00:13:24 --> 00:13:28
are voting the way they do. You know,

00:13:25 --> 00:13:31
it's we're trying to target a causal

00:13:27 --> 00:13:33
quantity, which is, you know, the causal

00:13:30 --> 00:13:36
effect of, let's say, response length or

00:13:32 --> 00:13:37
sentiment and so on and so forth. Okay?

00:13:35 --> 00:13:39
You know, there's always more work to do

00:13:36 --> 00:13:42
to get things closer to the actual

00:13:38 --> 00:13:44
causal estimate that we want. But if we

00:13:41 --> 00:13:46
continue to decompose human preference

00:13:43 --> 00:13:48
into its constituent components, what

00:13:45 --> 00:13:50
we're building is an ever richer

00:13:47 --> 00:13:52
evaluation that can tell us all the

00:13:49 --> 00:13:54
factors that go into response. How you

00:13:51 --> 00:13:56
can optimize people's preferences, you

00:13:54 --> 00:13:58
know, keeping style fixed. Let's say I

00:13:55 --> 00:14:01
want to remain concise, but I want to

00:13:57 --> 00:14:03
maximize your preferences. Okay, how am

00:14:00 --> 00:14:04
I supposed to do that? Well, you know,

00:14:02 --> 00:14:05
not a lot of people have that

00:14:03 --> 00:14:06
information, but we're building the

00:14:04 --> 00:14:08
methodology that allows you to do that.

00:14:05 --> 00:14:11
Okay, and the question is, can we

00:14:07 --> 00:14:13
disentangle style versus substance?

00:14:10 --> 00:14:15
That's you can you you there is an

00:14:12 --> 00:14:17
effect and you want to know about it

00:14:14 --> 00:14:19
period the platform helps you and what

00:14:16 --> 00:14:21
is the impact and what is the impact so

00:14:18 --> 00:14:23
this is this is another I think

00:14:20 --> 00:14:27
important area to dig into there was a

00:14:22 --> 00:14:29
moment where you guys decided

00:14:26 --> 00:14:35
that it was insufficient to keep

00:14:28 --> 00:14:37
measuring the progress of the models on

00:14:34 --> 00:14:39
coding with the base design of the

00:14:36 --> 00:14:42
platform which is just chatbot arena and

00:14:38 --> 00:14:45
I remember seeing a launch which was web

00:14:41 --> 00:14:48
dev I think you call it webdev arena and

00:14:44 --> 00:14:51
showing up to a completely different

00:14:47 --> 00:14:54
interface and then

00:14:50 --> 00:14:58
realizing that this was a pretty big

00:14:53 --> 00:15:02
change for you guys right why did it why

00:14:57 --> 00:15:03
did we need a a new kind of arena to

00:15:01 --> 00:15:06
correct for that

00:15:02 --> 00:15:10
effect why was that necessary I think

00:15:05 --> 00:15:13
that comes back to I think Jan's point a

00:15:09 --> 00:15:16
little bit like when you build a

00:15:12 --> 00:15:18
product, a AI product, you want to know

00:15:15 --> 00:15:21
about how people use it. You want to

00:15:17 --> 00:15:24
understand why user prefer this over

00:15:20 --> 00:15:27
that. And in order to collect that kind

00:15:24 --> 00:15:30
of data, you have to build sort of like

00:15:26 --> 00:15:34
a product first, right? And then as we

00:15:29 --> 00:15:36
know over the past few years people have

00:15:33 --> 00:15:39
been building very different kinds of

00:15:35 --> 00:15:43
applications on top of AI beyond just

00:15:38 --> 00:15:46
chatbot right so chatbot is one of the

00:15:42 --> 00:15:49
widely used interface right now for

00:15:45 --> 00:15:53
human to interface with AI but these

00:15:48 --> 00:15:57
days people are applying these models to

00:15:52 --> 00:15:59
you know coding and then more like tool

00:15:56 --> 00:16:02
use agentic behavior that kind of stuff

00:15:58 --> 00:16:05
Right. So as the first step we were

00:16:01 --> 00:16:09
thinking like okay how can we capture

00:16:04 --> 00:16:10
all these use cases right and then the

00:16:08 --> 00:16:13
answer to that is we have to build

00:16:09 --> 00:16:15
something that people can use again in

00:16:12 --> 00:16:18
the same right an environment that

00:16:14 --> 00:16:21
people can test in real time to give us

00:16:17 --> 00:16:23
real world feedback. So that was the

00:16:20 --> 00:16:25
original like idea that was kind of like

00:16:22 --> 00:16:28
last summer just at the beginning of

00:16:24 --> 00:16:30
this kind of text to web text to app

00:16:27 --> 00:16:33
right trend at the beginning was very

00:16:29 --> 00:16:36
beginning was cloud cloud uh artifacts.

00:16:32 --> 00:16:38
Mhm. That was that was the first right

00:16:35 --> 00:16:41
and that we saw that we were amazed by

00:16:37 --> 00:16:43
that and then how can you build eel for

00:16:40 --> 00:16:45
that right we have to give credit to

00:16:42 --> 00:16:49
Arian on the team. Yeah. And then Arian

00:16:44 --> 00:16:51
basically was like just joined the team

00:16:48 --> 00:16:53
and then he was interning actually at uh

00:16:50 --> 00:16:56
versel. So we were saying okay why don't

00:16:52 --> 00:16:58
we build something new and time claw

00:16:55 --> 00:17:00
effect how can we do evaluation for that

00:16:57 --> 00:17:02
kind of applications text to web app and

00:16:59 --> 00:17:05
then that's was the idea one small

00:17:01 --> 00:17:09
parenthesis so far we we talked three of

00:17:04 --> 00:17:12
us but eventually the the team grew

00:17:08 --> 00:17:16
quite a bit and right now I don't know

00:17:11 --> 00:17:18
it's like almost like 20 people and both

00:17:15 --> 00:17:21
you know graduate and especially

00:17:17 --> 00:17:24
undergraduate students and doing a a lot

00:17:20 --> 00:17:27
of uh very exciting and interesting work

00:17:23 --> 00:17:30
to expand the uh abilities and

00:17:26 --> 00:17:32
capabilities and the reach of chatbot

00:17:29 --> 00:17:35
arena right so I just want to make sure

00:17:31 --> 00:17:39
that other colleagues of mine are

00:17:34 --> 00:17:43
involved here and like Joey and others

00:17:38 --> 00:17:47
and u I think the credit goes much more

00:17:42 --> 00:17:48
beyond the three of us but that's what

00:17:46 --> 00:17:50
we want to provide you want to you know

00:17:47 --> 00:17:53
hatever you

00:17:49 --> 00:17:55
want We hope that you'll find the answer

00:17:52 --> 00:17:57
to fundamentally there's if you're

00:17:54 --> 00:17:59
looking at the leaderboard there's only

00:17:56 --> 00:18:03
one thing really that matters which is

00:17:58 --> 00:18:04
do you care about the preferences of the

00:18:02 --> 00:18:07
community of people that come to vote on

00:18:03 --> 00:18:08
our platform. That's it. That's that's

00:18:06 --> 00:18:10
what we measure. It's the only thing

00:18:08 --> 00:18:12
that we claim to measure. We don't claim

00:18:09 --> 00:18:14
to be an AGI benchmark. We are

00:18:11 --> 00:18:16
faithfully representing the preferences

00:18:13 --> 00:18:19
of our community. So that's why it's so

00:18:15 --> 00:18:21
important to us that we continue to grow

00:18:18 --> 00:18:24
our community and we get a diverse

00:18:20 --> 00:18:27
community of all different people,

00:18:23 --> 00:18:28
experts, non-experts, artists,

00:18:26 --> 00:18:30
scientists, different languages, you

00:18:27 --> 00:18:32
know, different languages, everybody

00:18:29 --> 00:18:34
under the sun, we want come to this

00:18:32 --> 00:18:36
platform to express their preferences

00:18:33 --> 00:18:37
because if we can get that to happen,

00:18:35 --> 00:18:39
you know, it already happens to some

00:18:36 --> 00:18:42
xtent, but if we can continue to grow

00:18:38 --> 00:18:43
it, what's going to happen is again, in

00:18:41 --> 00:18:44
order for a model to do well, what needs

00:18:42 --> 00:18:47
to happen is new people need to come in

00:18:43 --> 00:18:52
and vote for it. And so if we can

00:18:46 --> 00:18:55
provide this lens into the preferences

00:18:51 --> 00:18:55
of the world

00:18:55 --> 00:19:00
things are moving, right? It's like

00:18:57 --> 00:19:03
these are changing. This is again it's

00:18:59 --> 00:19:05
not like it's like we we have the study

00:19:02 --> 00:19:08
and you want you want to talk about

00:19:04 --> 00:19:11
the freshness, right? About we all

00:19:07 --> 00:19:14
you know see fresh prompts, right?

00:19:10 --> 00:19:17
It's not like oh we are going to see all

00:19:13 --> 00:19:19
these fronts over and over again like

00:19:16 --> 00:19:21
kind of saturated. That's not the case.

00:19:18 --> 00:19:24
That's was the very beginning of why we

00:19:20 --> 00:19:27
believe Arena is fundamentally different

00:19:23 --> 00:19:29
related contamination. The very

00:19:26 --> 00:19:32
beginning of Arena is

00:19:29 --> 00:19:35
to try to solve the contamination

00:19:31 --> 00:19:37
problem. The overfeeding problem which

00:19:34 --> 00:19:39
is like people test models on a static

00:19:36 --> 00:19:41
benchmark or what people called

00:19:38 --> 00:19:43
overfeeding. Yeah. what people call

00:19:40 --> 00:19:45
overfeeding. So how do you overcome

00:19:42 --> 00:19:47
overfeeding? You collect new data,

00:19:44 --> 00:19:49
right? That's how you overcome

00:19:46 --> 00:19:52
overfeeding and then arena is designed

00:19:48 --> 00:19:55
to collect new data every second. So all

00:19:51 --> 00:19:57
the questions are as are new like all

00:19:54 --> 00:20:00
the votes are new and then we measure

00:19:56 --> 00:20:02
basically how different what's the

00:19:59 --> 00:20:03
difference between all these prompt

00:20:01 --> 00:20:07
right what's the distribution look like

00:20:02 --> 00:20:09
and so on and then we conservatively

00:20:06 --> 00:20:12
estimate like you know over 80%

00:20:08 --> 00:20:15
something like that prop

00:20:11 --> 00:20:17
yeah different correct if I and this

00:20:14 --> 00:20:21
tudy was done by another member of our

00:20:16 --> 00:20:24
team Lisa um and basically measures out

00:20:20 --> 00:20:26
how any more, you know, fresh prompts

00:20:23 --> 00:20:29
you have in one day compared to what

00:20:25 --> 00:20:31
you've seen in the past 3 months, right?

00:20:28 --> 00:20:33
And by a similarity score of something

00:20:30 --> 00:20:38
like 70

00:20:32 --> 00:20:42
75%, you have over 70 of these uh prawns

00:20:37 --> 00:20:46
are fresh 80%. Or over 80%. Right? So

00:20:41 --> 00:20:46
it's a large number of

00:20:45 --> 00:20:53
pron similarity. We are not the test is

00:20:48 --> 00:20:56
not very high that it's not like oh they

00:20:52 --> 00:20:58
are identical right no yeah just to dig

00:20:55 --> 00:21:00
in one click deeper into what way said

00:20:57 --> 00:21:02
you know what is

00:20:59 --> 00:21:05
overfitting static benchmarks overfit

00:21:02 --> 00:21:07
why it's because as Jan said earlier

00:21:04 --> 00:21:09
you're giving this the student the same

00:21:06 --> 00:21:12
test over and over right you have a

00:21:08 --> 00:21:14
model you test it you know you look at

00:21:11 --> 00:21:16
whether or not it's improved on a static

00:21:13 --> 00:21:17
data set then you find another model you

00:21:15 --> 00:21:19
test it and you pick the one that does

00:21:16 --> 00:21:20
better and better and better and what

00:21:18 --> 00:21:22
ends up happening is that the test

00:21:19 --> 00:21:24
becomes meaningless because you've seen

00:21:21 --> 00:21:26
it so many times that you've memorized

00:21:23 --> 00:21:28
the answers. That's what overfitting is.

00:21:26 --> 00:21:31
Trapot Arena is immune from overfitting

00:21:28 --> 00:21:33
by design because you're always getting

00:21:30 --> 00:21:36
fresh questions. In order to do well on

00:21:32 --> 00:21:39
the arena, new users need to come and

00:21:35 --> 00:21:41
vote for your model. That's it. That

00:21:38 --> 00:21:45
means that users like it.

00:21:40 --> 00:21:48
One thing I've noticed is that the same

00:21:44 --> 00:21:52
researchers who

00:21:47 --> 00:21:54
ften argue with me that arena is a

00:21:52 --> 00:21:57
terrible evaluation system. The

00:21:53 --> 00:21:59
leaderboard is not to be trusted. The

00:21:56 --> 00:22:01
scores are rigged. They're

00:21:58 --> 00:22:04
gameable. Have one tended to also

00:22:00 --> 00:22:06
celebrate when they're on top of the

00:22:03 --> 00:22:08
leaderboard. And the second is I find

00:22:05 --> 00:22:10
actually increasingly especially for

00:22:07 --> 00:22:12
specialist arenas like

00:22:09 --> 00:22:16
webdev you know there's a natural

00:22:11 --> 00:22:19
tendency to just accept that this is a

00:22:15 --> 00:22:21
really good indicator of the underlying

00:22:18 --> 00:22:24
capabilities. Why is that? Why is webdv

00:22:20 --> 00:22:25
arena such a good proxy for actual

00:22:23 --> 00:22:27
performance improvements when it comes

00:22:24 --> 00:22:29
to a capability like coding which is

00:22:26 --> 00:22:32
quite general purpose right? It's it's

00:22:28 --> 00:22:33
very counterintuitive. It's programming

00:22:31 --> 00:22:36
is actually a very general purpose,

00:22:32 --> 00:22:39
discipline and skill and yet it seems

00:22:35 --> 00:22:42
like the capabilities on that on a in a

00:22:38 --> 00:22:44
very general way are still being able to

00:22:41 --> 00:22:47
are captured well on a specialist arena

00:22:43 --> 00:22:50
like web dev arena. Why is that? Yeah.

00:22:46 --> 00:22:51
First let me just say I think that all

00:22:49 --> 00:22:53
of these arenas have signal in them.

00:22:50 --> 00:22:55
It's not just web dev arena. It's just

00:22:52 --> 00:22:57
people have more opinions on language,

00:22:54 --> 00:22:58
right? So webdev is a little bit more

00:22:56 --> 00:23:01
objective. it's easier to see the

00:22:57 --> 00:23:02
website you build it and it's you know

00:23:00 --> 00:23:04
this one's better than the other.

00:23:01 --> 00:23:05
There's a lot of signal in it. Also, it

00:23:03 --> 00:23:08
shatters the models. And what I mean by

00:23:04 --> 00:23:10
that is um it can be very clear that one

00:23:08 --> 00:23:12
model is way better than another on web

00:23:09 --> 00:23:14
diena. Immediately bam, you see it and

00:23:11 --> 00:23:16
it's like why is that? Just the

00:23:13 --> 00:23:18
capabilities of the models. Maybe can

00:23:15 --> 00:23:22
say more. I think it's just much much

00:23:17 --> 00:23:25
arder task because it's like from text

00:23:21 --> 00:23:29
a description of a website and you have

00:23:24 --> 00:23:33
to you know first understand the request

00:23:28 --> 00:23:36
and then build like write code right and

00:23:32 --> 00:23:38
then the code has to fit maybe satisfy

00:23:35 --> 00:23:40
certain requirement let's say um style

00:23:37 --> 00:23:43
requirement or like component that kind

00:23:39 --> 00:23:46
of stuff and then it has to compile

00:23:42 --> 00:23:48
right it has to be we we're basically

00:23:45 --> 00:23:50
run it live in browser and then with

00:23:47 --> 00:23:53
connect to a sandbox that kind of stuff.

00:23:49 --> 00:23:55
So there are a lot of like parts you the

00:23:52 --> 00:23:57
model has to get right in order to build

00:23:54 --> 00:23:59
a website that people can you know

00:23:56 --> 00:24:02
really interact with. So fundamentally

00:23:58 --> 00:24:03
discriminates much better right uh

00:24:01 --> 00:24:07
across some models because it's a much

00:24:02 --> 00:24:10
arder problem. So very few get it

00:24:06 --> 00:24:14
right. So it's in reality for critics

00:24:09 --> 00:24:16
who say you know these exam static exams

00:24:13 --> 00:24:18
are hard tests and arena is an easy to

00:24:15 --> 00:24:21
gain benchmark. In fact webdea is an

00:24:17 --> 00:24:24
great example that shows it it's a

00:24:20 --> 00:24:27
really hard evaluation. It's a hard test

00:24:23 --> 00:24:30
actually. It just proxies the real world

00:24:26 --> 00:24:32
better than some static multiple choice

00:24:29 --> 00:24:34
question test. Is that is that roughly

00:24:31 --> 00:24:37
right? Yeah for sure. And then a lot of

00:24:33 --> 00:24:39
like you know every input from user is

00:24:36 --> 00:24:41
for a real world task right they're

00:24:38 --> 00:24:44
trying to build some website real and

00:24:40 --> 00:24:47
then that also measures something that's

00:24:43 --> 00:24:50
like beyond just you know academic

00:24:46 --> 00:24:52
benchmark that's we imagine what user

00:24:49 --> 00:24:53
would do right this like really trying

00:24:51 --> 00:24:56
to

00:24:52 --> 00:24:58
approximate the user intent user

00:24:55 --> 00:25:00
preferences directly I have to say I

00:24:57 --> 00:25:02
also just like completely disagree with

00:24:59 --> 00:25:05
e foundation of the question the like

00:25:01 --> 00:25:06
implicit assumption is that like chat is

00:25:04 --> 00:25:09
easy or that it's even easier than

00:25:05 --> 00:25:11
webdev. That's completely false. It's a

00:25:08 --> 00:25:14
completely naive perspective that people

00:25:10 --> 00:25:17
have on this because it's it's hard to

00:25:13 --> 00:25:19
build something that people love. People

00:25:16 --> 00:25:21
are good at chat, but you like some

00:25:18 --> 00:25:23
people way better than others. It's

00:25:20 --> 00:25:26
ubjective and everybody has their own

00:25:22 --> 00:25:28
opinions and the landscape is very very

00:25:25 --> 00:25:30
rich. You might like a very different

00:25:27 --> 00:25:32
model than me. somebody else, you know,

00:25:29 --> 00:25:33
let's say a musician might like a

00:25:31 --> 00:25:35
different model, much, you know, a much

00:25:32 --> 00:25:37
different model than I do. And

00:25:34 --> 00:25:40
understanding all of those differences

00:25:36 --> 00:25:43
is really hard. And anybody who thinks

00:25:39 --> 00:25:45
that that is gameable is deliluding

00:25:42 --> 00:25:49
themselves to take that to its strongest

00:25:44 --> 00:25:51
form argument. Then isn't the the right

00:25:48 --> 00:25:53
way to allow me to evaluate whether the

00:25:50 --> 00:25:55
model is good or not to allow me to

00:25:52 --> 00:25:58
generate my own leaderboard?

00:25:54 --> 00:25:59
Uh you as a person. Absolutely. Yeah.

00:25:57 --> 00:26:01
And we we should be giving you the tools

00:25:58 --> 00:26:03
to do that. We're currently building

00:26:00 --> 00:26:05
them. Ah, so this is quite profound. You

00:26:02 --> 00:26:07
see the world going where everybody has

00:26:04 --> 00:26:09
their own personal arena. Absolutely.

00:26:06 --> 00:26:10
It should be personalized

00:26:08 --> 00:26:12
just for you. You should understand

00:26:09 --> 00:26:14
which models are best for you and it's

00:26:11 --> 00:26:17
going to be for your task. It's person

00:26:13 --> 00:26:19
and task, right? Because for a different

00:26:16 --> 00:26:21
if you want to do different things, you

00:26:18 --> 00:26:24
may have a different leaderboard, right?

00:26:20 --> 00:26:26
If you have a question about tax today,

00:26:23 --> 00:26:29
you go to different people than if you

00:26:25 --> 00:26:32
have a question about programming or

00:26:28 --> 00:26:34
whatever, right? So that's kind of also

00:26:31 --> 00:26:37
is going to depend on what task you want

00:26:33 --> 00:26:39
o accomplish, right? And I I really

00:26:36 --> 00:26:41
want to go back to one thing. I think

00:26:38 --> 00:26:44
that because it's, you know, I tried to

00:26:40 --> 00:26:46
think quite a bit about all the

00:26:43 --> 00:26:48
criticism because on the face of it

00:26:45 --> 00:26:50
intuitively for some people makes sense,

00:26:47 --> 00:26:52
right? That's why many people make the

00:26:49 --> 00:26:54
same criticism. And I think there is

00:26:51 --> 00:26:57
another thing going on. We as a humans

00:26:53 --> 00:27:02
we believe that why do people say arena

00:26:56 --> 00:27:05
is not good because people are fooled.

00:27:01 --> 00:27:08
Right? That's fundamentally their kind

00:27:04 --> 00:27:10
of argument. They are fooled because

00:27:07 --> 00:27:12
long answers more emoji and things like

00:27:09 --> 00:27:15
that. And when I look from that

00:27:11 --> 00:27:17
perspective as a human, what I in my

00:27:14 --> 00:27:19
mind is that I am not going to be

00:27:16 --> 00:27:21
fooled. Right? That's what it's not

00:27:18 --> 00:27:23
relevant. These guys are going to be

00:27:20 --> 00:27:25
fooled by these things. No, I am not.

00:27:22 --> 00:27:27
That's why it's not good. That's why

00:27:24 --> 00:27:30
it's not a good proxy. The problem is

00:27:26 --> 00:27:33
that you are we I am fooled, right?

00:27:29 --> 00:27:35
Everyone is fooled. And this is actually

00:27:32 --> 00:27:38
that's why the chatbot arena it's like

00:27:34 --> 00:27:41
Anastasia said, it's it's it's a proxy.

00:27:37 --> 00:27:47
It provides a magnifying glass.

00:27:40 --> 00:27:51
But you know all of us we have our

00:27:46 --> 00:27:54
own pecularities our own you know

00:27:50 --> 00:27:56
culture our own you know history built

00:27:53 --> 00:27:58
on interaction with different people

00:27:55 --> 00:28:01
right that we have different preferences

00:27:57 --> 00:28:05
right that's fundamentally what it is

00:28:00 --> 00:28:06
right and these preferences are not

00:28:04 --> 00:28:10
fully

00:28:05 --> 00:28:12
objective right because people say it's

00:28:09 --> 00:28:15
only on objective answers but all of us

00:28:11 --> 00:28:17
are different right that's kind of the

00:28:14 --> 00:28:20
fundamental disconnect between the

00:28:16 --> 00:28:23
criticism and actually what we provide

00:28:19 --> 00:28:26
and actually what everyone we believe

00:28:22 --> 00:28:27
needs right to to double click on that a

00:28:25 --> 00:28:31
little bit you you said we we all have

00:28:26 --> 00:28:34
our own culture right um and Ben Ben

00:28:30 --> 00:28:36
Horitz we all know well has a quote I

00:28:33 --> 00:28:37
love which is he says culture is not a

00:28:35 --> 00:28:41
set of beliefs it's a set of

00:28:36 --> 00:28:44
actions right so let's Our belief, the

00:28:40 --> 00:28:46
philosophy that Arena has is that the

00:28:43 --> 00:28:49
set of actions a user takes when using

00:28:45 --> 00:28:51
an AI model is the best source of truth

00:28:48 --> 00:28:54
for whether that model is good or not

00:28:50 --> 00:28:56
for them versus some third party closed

00:28:53 --> 00:28:58
source evaluation

00:28:55 --> 00:29:00
telling you what is good for you. Right?

00:28:57 --> 00:29:01
And that's why again it's like going

00:28:59 --> 00:29:04
back to the to the to to the previous

00:29:00 --> 00:29:06
that you know I think what you hear is

00:29:03 --> 00:29:10
that capture capturing the human

00:29:05 --> 00:29:13
preference is fundamental because we are

00:29:09 --> 00:29:17
building these AIs to interact with

00:29:12 --> 00:29:20
umans right I think that's kind of the

00:29:16 --> 00:29:23
foundation but if you like we have in

00:29:20 --> 00:29:26
the previous discussion say people say

00:29:22 --> 00:29:30
well you know like yeah but these other

00:29:25 --> 00:29:32
People are fooled right this is not me

00:29:29 --> 00:29:34
right although I am fooled as well but I

00:29:31 --> 00:29:35
don't believe right you always believe

00:29:33 --> 00:29:38
about yourself that you are better than

00:29:34 --> 00:29:40
you are but but then we can provide like

00:29:37 --> 00:29:43
style control okay so forth you can

00:29:39 --> 00:29:45
remove that adjust for that effect right

00:29:42 --> 00:29:47
and we are going to provide more and

00:29:44 --> 00:29:48
more you can adjust for that effect and

00:29:46 --> 00:29:52
that effect right so you

00:29:48 --> 00:29:52
get your answers as

00:29:53 --> 00:30:00
well Marina started as a research

00:29:55 --> 00:30:04
project to take us back to how it began.

00:29:59 --> 00:30:08
So it was started around 2 years ago in

00:30:04 --> 00:30:11
late April 2020 I think and then at that

00:30:07 --> 00:30:13
ime before arena we were working on

00:30:10 --> 00:30:16
project called Bikuna which is like one

00:30:12 --> 00:30:19
of the first open models that's been

00:30:15 --> 00:30:22
released like the chat GPD kind of

00:30:18 --> 00:30:25
clone. Yeah. And at that time Llama one

00:30:21 --> 00:30:28
was just released which is a base model.

00:30:24 --> 00:30:30
it doesn't really know how to chat with

00:30:27 --> 00:30:32
uman only gone through like

00:30:29 --> 00:30:34
pre-training process at that time I

00:30:31 --> 00:30:36
don't think

00:30:33 --> 00:30:38
people call this post training yet

00:30:35 --> 00:30:40
people call it instruction fine-tune

00:30:37 --> 00:30:43
that kind of stuff so we were like in

00:30:39 --> 00:30:45
the lab exploring how do we reproduce

00:30:42 --> 00:30:49
this right how how do we make an open

00:30:44 --> 00:30:51
source version of chunky and then you

00:30:48 --> 00:30:54
know credits to lein he was having kind

00:30:50 --> 00:30:57
of like idea that we could use some of

00:30:53 --> 00:31:00
the open data published on the internet

00:30:56 --> 00:31:03
hat's kind of like user chat GPT

00:30:59 --> 00:31:06
conversation it was called share GPT and

00:31:02 --> 00:31:09
it was like kind of like a high quality

00:31:05 --> 00:31:12
set of dialogues that user share so

00:31:08 --> 00:31:15
basically we we we come as a group a

00:31:11 --> 00:31:18
bunch of PhD students in the lab set

00:31:14 --> 00:31:20
ambition goal which is like we try to

00:31:17 --> 00:31:23
you know release this model trend this

00:31:19 --> 00:31:26
model in two weeks that kind of stuff so

00:31:22 --> 00:31:28
and And during that process the result

00:31:25 --> 00:31:30
was surprisingly at that time we were

00:31:27 --> 00:31:32
like playing with the model and then we

00:31:29 --> 00:31:35
thought like we we got to you know demo

00:31:31 --> 00:31:38
this to the world. So we basically just

00:31:34 --> 00:31:41
set up a website and then put that model

00:31:37 --> 00:31:43
on the website and then release it. At

00:31:40 --> 00:31:47
hat time it was like there's like a

00:31:42 --> 00:31:50
huge debate like internally like how

00:31:46 --> 00:31:52
should we when we release it you know

00:31:49 --> 00:31:54
how should we evaluate this model? How

00:31:51 --> 00:31:57
good is this model? Really? It vibe

00:31:53 --> 00:32:00
well, right? Because when we compare it

00:31:56 --> 00:32:01
o Llama, the base one, you can feel the

00:31:59 --> 00:32:05
difference, right? The mouse just learn

00:32:00 --> 00:32:07
how to chat, learn how to speak like a

00:32:04 --> 00:32:10
CHPT. So, there was a huge debate like

00:32:06 --> 00:32:12
how how do we evaluate this? At that

00:32:09 --> 00:32:15
ime, we didn't have much time. So we

00:32:11 --> 00:32:18
re like okay we either do this kind of

00:32:14 --> 00:32:20
like labeling come up with cussions

00:32:17 --> 00:32:24
oursel and label the data and then

00:32:19 --> 00:32:26
compare it with other models or we do

00:32:23 --> 00:32:27
something like something automatic uh

00:32:25 --> 00:32:31
and then at that time there was like

00:32:26 --> 00:32:34
GPD4 just came out in March people were

00:32:30 --> 00:32:36
like wondering what can it do right and

00:32:33 --> 00:32:40
then we were like okay why don't we just

00:32:35 --> 00:32:43
use it for evaluation as we use GP4 as a

00:32:40 --> 00:32:45
judge to do this automatic emails at

00:32:42 --> 00:32:48
hat time. and no one believed it and

00:32:44 --> 00:32:50
then it was like again huge debate but

00:32:47 --> 00:32:53
we didn't have time so we just you know

00:32:49 --> 00:32:55
ended up doing it and it worked

00:32:52 --> 00:32:58
surprisingly well again and we released

00:32:54 --> 00:33:01
it but the the the huge problem after

00:32:57 --> 00:33:03
that is like still there's a open

00:33:00 --> 00:33:07
problem which is like how do we evaluate

00:33:02 --> 00:33:09
these chat bots right so soon after we

00:33:06 --> 00:33:12
um kind of like come up with that idea

00:33:08 --> 00:33:15
that why don't we let everyone in a

00:33:11 --> 00:33:17
community vote which model is better

00:33:14 --> 00:33:19
because at a time we serve that model

00:33:16 --> 00:33:22
and then we also serve some of the other

00:33:18 --> 00:33:26
open source model at a time at a time

00:33:21 --> 00:33:28
very week there's a new fine tune so we

00:33:25 --> 00:33:30
register a website we demo them all of

00:33:27 --> 00:33:32
them and then we come up with like kind

00:33:29 --> 00:33:35
of like a sidebyside UI that people can

00:33:31 --> 00:33:37
compare them and then soon after we say

00:33:34 --> 00:33:40
okay why don't we come up with a battle

00:33:36 --> 00:33:41
mode which is like we anonymize their

00:33:39 --> 00:33:44
identity

00:33:40 --> 00:33:46
and that people vote. So that was the

00:33:43 --> 00:33:49
origin of arena which is basically

00:33:45 --> 00:33:51
trying to solve our problem which is how

00:33:48 --> 00:33:53
do we evaluate the smart understand

00:33:50 --> 00:33:55
ifference. Actually the first time we

00:33:52 --> 00:33:57
did start we did try to have some

00:33:54 --> 00:34:01
students you know buy some pizza get

00:33:56 --> 00:34:05
hem in a room and label uh the replies

00:34:00 --> 00:34:08
from um uh Vikunia and other model to

00:34:04 --> 00:34:12
compare them and then um obviously that

00:34:07 --> 00:34:14
didn't scale and um then it was this LLM

00:34:11 --> 00:34:17
as a judge we tried and it worked

00:34:13 --> 00:34:19
surprisingly well and then it was quite

00:34:16 --> 00:34:21
a bit of debate okay we are going to

00:34:18 --> 00:34:22
build a platform to scale because the

00:34:20 --> 00:34:26
question is still Okay, it seems that

00:34:21 --> 00:34:29
anecdot anecdot like GBD4 was released

00:34:25 --> 00:34:33
just two weeks before before we started

00:34:28 --> 00:34:35
to use it um as a judge. Um it's still

00:34:32 --> 00:34:37
the question okay yeah uh it seems that

00:34:34 --> 00:34:40
it's doing well but still you know it's

00:34:37 --> 00:34:42
like how about how does it compare with

00:34:39 --> 00:34:45
umans right and that was a question

00:34:41 --> 00:34:46
about okay how do we scale the human

00:34:44 --> 00:34:48
evaluation

00:34:45 --> 00:34:51
and we discussed quite a bit about how

00:34:48 --> 00:34:53
to do it because it was not clear

00:34:50 --> 00:34:56
because if you think about before you

00:34:52 --> 00:34:59
just ask people I have a prompt and the

00:34:55 --> 00:35:01
prompt is answer by all models and then

00:34:58 --> 00:35:04
you label it right good and bad That's

00:35:00 --> 00:35:06
kind of the typical way that how would

00:35:03 --> 00:35:10
you scale up the process then you need

00:35:05 --> 00:35:12
kind of to rank them right and you have

00:35:09 --> 00:35:14
n choices answers of the same problem

00:35:11 --> 00:35:16
from end models it's very hard to rank

00:35:13 --> 00:35:18
them right it's like think about right

00:35:15 --> 00:35:22
we get slightly different in tone and so

00:35:17 --> 00:35:23
forth try to rank them and then uh we

00:35:21 --> 00:35:28
saw quite a bit I think the inspiration

00:35:22 --> 00:35:32
about was how humans in real life uh

00:35:27 --> 00:35:34
rate say players or teams in games,

00:35:31 --> 00:35:37
right? And obviously you have the

00:35:33 --> 00:35:40
tournament. That's one way to do it

00:35:36 --> 00:35:43
where you have so to speak the players

00:35:39 --> 00:35:46
plays with each other headto head and

00:35:42 --> 00:35:48
then based on that you are going to have

00:35:45 --> 00:35:52
some number of points to win or lose or

00:35:47 --> 00:35:54
to and or tie and then you you you

00:35:51 --> 00:35:57
are going to have a leaderboard, right?

00:35:53 --> 00:36:00
And um but that again the problem with

00:35:56 --> 00:36:02
at is that if you have a tournament

00:35:59 --> 00:36:04
ypically the assumption in a tournament

00:36:01 --> 00:36:07
is that the number of players do not

00:36:03 --> 00:36:10
change across during the tournament.

00:36:06 --> 00:36:12
Right. Right. And also in general you

00:36:09 --> 00:36:13
know most of the tournament each player

00:36:11 --> 00:36:16
has to play with everyone. So it's kind

00:36:12 --> 00:36:19
of n square problem or any the number of

00:36:15 --> 00:36:22
players. And then we thought about okay

00:36:18 --> 00:36:24
there are other ways uh in real life how

00:36:21 --> 00:36:26
player or teams are ranked when they

00:36:23 --> 00:36:28
don't play with each other other they

00:36:25 --> 00:36:31
don't have a chance either because a

00:36:27 --> 00:36:33
number of players is too large or you

00:36:30 --> 00:36:36
know you need to also accommodate new

00:36:32 --> 00:36:38
players right entering the game and and

00:36:35 --> 00:36:40
that's why we were about then we thought

00:36:37 --> 00:36:44
about okay there are disciplines where

00:36:40 --> 00:36:48
this is done like chess that tennis ATP

00:36:43 --> 00:36:51
rating and many others and That was the

00:36:47 --> 00:36:54
idea and we start okay why don't you do

00:36:50 --> 00:36:56
something like uh ELO score okay and for

00:36:53 --> 00:37:00
that what do you need oh you need only

00:36:55 --> 00:37:02
ou know head-to-head and um you don't

00:36:59 --> 00:37:06
not everyone needs to play in the same

00:37:01 --> 00:37:08
tournament and that's how we adopted and

00:37:05 --> 00:37:10
that's why arena has this battle mode in

00:37:07 --> 00:37:13
which you have a prompt and answer from

00:37:09 --> 00:37:15
two randomized anonymized light language

00:37:12 --> 00:37:17
models and you can pick which one is

00:37:14 --> 00:37:21
better where there is tied and and so

00:37:16 --> 00:37:23
forth. And when was the moment

00:37:20 --> 00:37:25
when you know you joined the

00:37:22 --> 00:37:27
conversation and brought the from what I

00:37:24 --> 00:37:30
understand you know the Bradley Derry

00:37:26 --> 00:37:33
Yeah. uh approach. Yeah. It turned out

00:37:29 --> 00:37:36
it was like deeper technically than we

00:37:32 --> 00:37:38
thought. So at that time Jan was like we

00:37:35 --> 00:37:41
need to find someone to back this up

00:37:38 --> 00:37:44
more like on the theory side to have a

00:37:40 --> 00:37:46
solid foundation right to rank all these

00:37:43 --> 00:37:48
models. It's not at that time it was no

00:37:45 --> 00:37:50
longer like really like a fun project

00:37:47 --> 00:37:52
anymore. It was it was started as like a

00:37:49 --> 00:37:54
fun project and people started to pay

00:37:51 --> 00:37:56
attention to it, right? So you better do

00:37:53 --> 00:37:59
something. And I I I went to uh Michael

00:37:55 --> 00:38:02
Jordan, my colleague, very famous

00:37:58 --> 00:38:05
machine learning AI um researcher and

00:38:01 --> 00:38:08
faculty here. And I've been working with

00:38:04 --> 00:38:10
im actually when I um when he built

00:38:07 --> 00:38:14
his kind of labs at Berkeley cross-d

00:38:10 --> 00:38:17
isciplinary labs um we working with him

00:38:13 --> 00:38:19
in like 2005 2006 he was joining the

00:38:16 --> 00:38:22
system people database people to work

00:38:18 --> 00:38:26
together and a new exciting

00:38:21 --> 00:38:28
projects and he told me oh I I know

00:38:25 --> 00:38:31
exactly I have the the guy for you is

00:38:27 --> 00:38:33
Anastasio. I saw what was being built at

00:38:30 --> 00:38:36
he time. arena was not still close to

00:38:32 --> 00:38:38
what it is today. It was I think not

00:38:36 --> 00:38:40
hat much usage. I saw it and I thought,

00:38:38 --> 00:38:42
"Wow, what a great opportunity to do

00:38:39 --> 00:38:46
some interesting statistical modeling

00:38:41 --> 00:38:48
and theory like being able to understand

00:38:45 --> 00:38:50
how do we optimally sample models? How

00:38:47 --> 00:38:52
do we perform this estimation? Okay,

00:38:49 --> 00:38:54
let's move from ELO to Bradley Terry

00:38:51 --> 00:38:56
because we're actually performing an

00:38:53 --> 00:38:58
estimate here instead of just like, you

00:38:55 --> 00:39:00
know, in the ELO score moves over time.

00:38:58 --> 00:39:03
it doesn't converge but rally models

00:38:59 --> 00:39:05
converge and how do we then construct

00:39:02 --> 00:39:08
confidence intervals properly for this s

00:39:04 --> 00:39:10
demand and so on and so forth all that

00:39:07 --> 00:39:12
stuff was super interesting to me we

00:39:09 --> 00:39:14
re meeting like just next to two two

00:39:11 --> 00:39:16
doors down and we wrote on the

00:39:13 --> 00:39:19
whiteboard like five or six different

00:39:15 --> 00:39:21
you know topics I mean we started

00:39:18 --> 00:39:24
working on them and the rest is history

00:39:20 --> 00:39:26
right in many ways I feel like this is a

00:39:23 --> 00:39:29
the birth of Arena couldn't have

00:39:25 --> 00:39:31
happened anywhere else other than an

00:39:28 --> 00:39:32
interdisiplinary lab at a UN research

00:39:30 --> 00:39:34
fundamental research university like

00:39:31 --> 00:39:35
Berkeley. Is that true or do you think

00:39:33 --> 00:39:37
Well, it certainly would have been worse

00:39:34 --> 00:39:39
if it came out of somewhere else. And

00:39:36 --> 00:39:43
the reason is because the fact that we

00:39:38 --> 00:39:45
come from Berkeley and from a

00:39:42 --> 00:39:48
university really speaks to our

00:39:44 --> 00:39:49
scientific approach and neutrality.

00:39:47 --> 00:39:51
I think if it came from an industrial

00:39:48 --> 00:39:52
ab, people would always have questions

00:39:50 --> 00:39:54
about oh well these people are they also

00:39:52 --> 00:39:55
training a model and what's their

00:39:53 --> 00:39:57
incentive and so on and so forth. But

00:39:54 --> 00:39:58
he reality is we were just students. we

00:39:56 --> 00:40:00
re doing this in order to evaluate

00:39:57 --> 00:40:02
models and they came from a scientific

00:39:59 --> 00:40:03
perspective. That's it and I think

00:40:01 --> 00:40:05
that's something that people can see

00:40:02 --> 00:40:08
when they look at us and builds a lot of

00:40:04 --> 00:40:11
trust in our business. The other angle

00:40:07 --> 00:40:14
here is that in a lab like this one uh

00:40:10 --> 00:40:17
what you get you can get maybe in the in

00:40:13 --> 00:40:19
dustry you can also get maybe

00:40:16 --> 00:40:21
interdisiplinary teams but they are

00:40:18 --> 00:40:23
going to be large teams right because

00:40:20 --> 00:40:25
you go okay you are going to do you know

00:40:22 --> 00:40:28
the team which is doing AI the team is

00:40:24 --> 00:40:30
doing systems work together so these are

00:40:27 --> 00:40:32
already large teams but here what you

00:40:29 --> 00:40:35
get you get a small teams a few people

00:40:31 --> 00:40:39
which everyone comes from can come from

00:40:34 --> 00:40:42
a different areas. Right. Right. We have

00:40:38 --> 00:40:44
people who are kind of systems early on.

00:40:41 --> 00:40:47
We have to build the systems to serve

00:40:43 --> 00:40:50
these open-source models. Right. We have

00:40:46 --> 00:40:54
to serve this Vikunia like mentioned,

00:40:49 --> 00:40:57
right? Then you have to have people who

00:40:53 --> 00:40:59
are pretty good actually when we use

00:40:56 --> 00:41:02
this share GPD data. we are doing quite

00:40:58 --> 00:41:05
a bit of data prep-processing in order

00:41:01 --> 00:41:10
to you know to pick some data curation

00:41:04 --> 00:41:12
and so forth right then when Anastasio

00:41:09 --> 00:41:15
joined we have now machine learning

00:41:11 --> 00:41:17
experts right but the team still is like

00:41:14 --> 00:41:21
four or five people and as you know

00:41:16 --> 00:41:22
early on small teams move very fast so I

00:41:20 --> 00:41:25
think that's kind of the difference that

00:41:22 --> 00:41:27
you have a very small team but and

00:41:24 --> 00:41:29
interdisciplinary and small so I think

00:41:26 --> 00:41:31
you you may get in industry, you may get

00:41:28 --> 00:41:34
in interdisiplinary teams, but they're

00:41:30 --> 00:41:34
going to be

00:41:34 --> 00:41:41
large. If you could just teleport back

00:41:37 --> 00:41:43
in time to that moment in early 2023,

00:41:40 --> 00:41:44
correct me if I'm wrong, but if I had to

00:41:42 --> 00:41:47
kind of summarize the research

00:41:43 --> 00:41:49
environment in the Bay Area at the time,

00:41:46 --> 00:41:53
most people basically were extolling the

00:41:48 --> 00:41:55
death of AI in academia, right? The idea

00:41:52 --> 00:41:57
that oh you can't really do any serious

00:41:54 --> 00:41:59
research you can't contribute to the

00:41:56 --> 00:42:01
frontier of computer science or in AI

00:41:58 --> 00:42:03
from a research institution was quite

00:42:00 --> 00:42:04
common actually if you remember that and

00:42:02 --> 00:42:06
it's nothing more satisfying than

00:42:03 --> 00:42:07
proving these people wrong right right

00:42:05 --> 00:42:10
so

00:42:07 --> 00:42:13
and so what do you think people got

00:42:09 --> 00:42:15
wrong I I think that if I if I may take

00:42:12 --> 00:42:18
a step back here because you know I'm

00:42:14 --> 00:42:21
old enough so I've seen a few of those I

00:42:17 --> 00:42:24
remember when I was a student I was

00:42:20 --> 00:42:28
doing system work and networking right

00:42:24 --> 00:42:30
uh that was the internet days. So and I

00:42:27 --> 00:42:33
was going to these conferences and there

00:42:29 --> 00:42:36
were panels uh are the operating systems

00:42:32 --> 00:42:39
dead research in the operating system is

00:42:35 --> 00:42:42
that was the topic of the panel and the

00:42:38 --> 00:42:44
reason for that was at that time it was

00:42:41 --> 00:42:46
at the end of the previous century it

00:42:43 --> 00:42:49
was Microsoft was dominating and then

00:42:45 --> 00:42:52
Apple and then of course there were some

00:42:48 --> 00:42:54
FreeBSD and so forth but then you know

00:42:51 --> 00:42:57
although it didn't come from academia it

00:42:53 --> 00:42:59
was Linux right actually we Linux was

00:42:56 --> 00:43:02
preceded by mix which which came from

00:42:58 --> 00:43:04
academia from Netherlands. So that's one

00:43:01 --> 00:43:07
then in 2004 like when we come here and

00:43:03 --> 00:43:10
we started this lab there was a question

00:43:06 --> 00:43:11
also uh that was this kind of

00:43:09 --> 00:43:13
distributed system because a lot of

00:43:10 --> 00:43:17
researchers on distributed system what

00:43:12 --> 00:43:20
can academia do right right because it

00:43:16 --> 00:43:24
was Google was doing all the research of

00:43:19 --> 00:43:26
Q systems map reduce Google file systems

00:43:23 --> 00:43:30
all of that happening at Google right

00:43:25 --> 00:43:34
best people going at Google and so forth

00:43:29 --> 00:43:38
and Then we we we done here then it come

00:43:33 --> 00:43:42
spark right right which also come from

00:43:37 --> 00:43:44
academia right and I think that's when

00:43:41 --> 00:43:47
this started it was actually the

00:43:43 --> 00:43:49
question people were surprised about

00:43:46 --> 00:43:51
vunia just a bunch of students and

00:43:48 --> 00:43:54
actually their own initiatives right I

00:43:50 --> 00:43:57
knew almost after the fact this happened

00:43:53 --> 00:43:59
pick this kind of data set from the

00:43:56 --> 00:44:01
internet which is high quality right and

00:43:58 --> 00:44:03
use it and people were so surprised

00:44:00 --> 00:44:06
about the quality. Right. That was that

00:44:02 --> 00:44:08
was were people asking is this real?

00:44:05 --> 00:44:11
Right. Right. So I want evaluation. I

00:44:07 --> 00:44:13
was kind of you just show me some some

00:44:10 --> 00:44:16
stuff anecdotal. Right. And oh okay it

00:44:12 --> 00:44:18
look good but how about you know is that

00:44:15 --> 00:44:23
some people didn't believe it and then

00:44:18 --> 00:44:25
say this is a GPD for rapper. I remember

00:44:22 --> 00:44:28
it. I remember I remember we were at

00:44:24 --> 00:44:31
Nurup's uh later that year, right? Um

00:44:27 --> 00:44:35
and I remember uh Wayan was sitting at a

00:44:30 --> 00:44:37
table next next to me and a really

00:44:34 --> 00:44:42
well-known famous researcher who's still

00:44:36 --> 00:44:44
at OpenAI um you know asked me oh is is

00:44:41 --> 00:44:47
that uh the team that worked on that

00:44:43 --> 00:44:49
Vikuna uh bought and I said yes and he

00:44:46 --> 00:44:51
said um oh yeah I've been wanting to

00:44:48 --> 00:44:54
have a conversation with them because we

00:44:50 --> 00:44:56
think they're violating our terms of

00:44:53 --> 00:44:57
service because they're just re

00:44:55 --> 00:44:59
selling our GPD4

00:44:56 --> 00:45:01
for and I don't know if he came and

00:44:58 --> 00:45:02
confronted you but that was very much

00:45:00 --> 00:45:04
the default assumption people had right

00:45:01 --> 00:45:08
it was a disbelief right so so because

00:45:03 --> 00:45:11
for again for for for for a while um it

00:45:07 --> 00:45:12
was the best uh open source models I

00:45:10 --> 00:45:14
don't know 3 months four months or

00:45:11 --> 00:45:16
whatever so that's that's why the

00:45:13 --> 00:45:18
valuation was so important back then

00:45:15 --> 00:45:22
right because it's kind of this this

00:45:17 --> 00:45:24
belief so we try to support with some

00:45:21 --> 00:45:27
valuation which was seems more

00:45:23 --> 00:45:29
objective right um that Indeed, it's

00:45:26 --> 00:45:30
it's a good model. Again, since

00:45:28 --> 00:45:33
then, there are many other things we've

00:45:29 --> 00:45:37
done here and open source like inference

00:45:32 --> 00:45:40
uh LLM inference like VLM and HLANG. I

00:45:36 --> 00:45:43
but I do think that what happens and

00:45:39 --> 00:45:45
this kind of this sense in um in um in

00:45:42 --> 00:45:47
dustry um I was actually on a panel

00:45:44 --> 00:45:49
yesterday was the same this kind of

00:45:46 --> 00:45:52
discussion you know okay it's like you

00:45:48 --> 00:45:55
know what can maybe you know academy I

00:45:52 --> 00:45:58
should do this thing and the industry do

00:45:54 --> 00:46:01
this thing right like let's

00:45:57 --> 00:46:04
um the industry just you know can't do

00:46:00 --> 00:46:06
anything like pre-training and so forth

00:46:03 --> 00:46:08
I think at the end of the day um it is

00:46:05 --> 00:46:11
about what resources you have and what

00:46:07 --> 00:46:14
problems you solve and over and over

00:46:10 --> 00:46:17
again I think through the example I gave

00:46:13 --> 00:46:20
if academia has a

00:46:16 --> 00:46:23
resources is going to surprise you

00:46:19 --> 00:46:28
clearly it's going to be at the very

00:46:22 --> 00:46:31
edge of uh innovation and uh u

00:46:27 --> 00:46:34
creativity and uh so that's always

00:46:30 --> 00:46:37
almost happened right like in this case

00:46:33 --> 00:46:41
of course we we And we

00:46:36 --> 00:46:45
didn't need huge resources, right? It's

00:46:40 --> 00:46:47
just a group of smart, passionate

00:46:44 --> 00:46:51
students. So

00:46:46 --> 00:46:54
when Cherbot Arena started, it was a lot

00:46:50 --> 00:46:56
of excitement and so forth. But then it

00:46:53 --> 00:46:58
was this thing okay uh it was a feeling

00:46:55 --> 00:47:01
at least for some people in the group

00:46:57 --> 00:47:03
that we are done here. We publish a

00:47:00 --> 00:47:07
paper and so forth, right? for a while

00:47:02 --> 00:47:09
ven if you look at the usage is kind of

00:47:06 --> 00:47:13
dropping a little bit and it's almost

00:47:08 --> 00:47:16
yeah almost died almost died and then

00:47:12 --> 00:47:20
way at that time his main thrust of

00:47:15 --> 00:47:22
research was different some uh you know

00:47:19 --> 00:47:23
graph neural networks distributed graph

00:47:21 --> 00:47:26
neural networks and things like that and

00:47:22 --> 00:47:28
I remember at some point at one of our

00:47:25 --> 00:47:31
oneonone meetings came to me and say

00:47:27 --> 00:47:34
look I I really like and I want to

00:47:30 --> 00:47:36
instead of doing this kind of work. I

00:47:33 --> 00:47:39
really am passionate about Shbot Arena.

00:47:35 --> 00:47:43
I want really to to do it right and to

00:47:38 --> 00:47:47
focus on it. And then when kind of then

00:47:42 --> 00:47:50
it started and Whin is like one man back

00:47:46 --> 00:47:54
end, right?

00:47:49 --> 00:47:56
Starting and marketing and and marketing

00:47:53 --> 00:47:58
and he started to, you

00:47:55 --> 00:48:01
know, to add more models to the

00:47:57 --> 00:48:04
leaderboard, market it and so forth. And

00:48:00 --> 00:48:06
very soon after that Anastasio came and

00:48:03 --> 00:48:09
then it was kind of magical right you

00:48:05 --> 00:48:11
have these people who are so passionate

00:48:08 --> 00:48:14
and they are working so well together

00:48:10 --> 00:48:17
they are so complimentary in skills and

00:48:13 --> 00:48:19
even personalities then it started to

00:48:16 --> 00:48:21
shut up right and I'm I'm mentioning

00:48:18 --> 00:48:24
that because without that kind of

00:48:20 --> 00:48:28
inflection point which

00:48:23 --> 00:48:32
came you know long after it started as a

00:48:28 --> 00:48:32
project we wouldn't be

00:48:33 --> 00:48:42
Yeah, I think there's a a chart I saw

00:48:38 --> 00:48:44
recently that showed that that com

00:48:41 --> 00:48:49
pared the number of models being

00:48:43 --> 00:48:51
released and tested on Lamarina per year

00:48:48 --> 00:48:54
over the last two years. And if you look

00:48:50 --> 00:48:58
at Q1 of

00:48:53 --> 00:49:00
2023, it was I think two models.

00:48:57 --> 00:49:03
It's exactly right. It's exactly and if

00:48:59 --> 00:49:04
you look at just this past quarter I

00:49:02 --> 00:49:07
think there were 68 models something

00:49:04 --> 00:49:10
like that right in total that first year

00:49:06 --> 00:49:12
there were about 12 models or so and and

00:49:09 --> 00:49:14
today it's over 280 or something on the

00:49:11 --> 00:49:16
platform so so at some point it took it

00:49:13 --> 00:49:19
sounds like it took the two of you

00:49:15 --> 00:49:22
realizing that this deserved to be more

00:49:18 --> 00:49:25
than a one-off paper when when was that

00:49:21 --> 00:49:27
I still remember when we uh when we

00:49:24 --> 00:49:29
worked on the paper for chatbot Arena it

00:49:26 --> 00:49:30
was like you know a couple weeks of

00:49:28 --> 00:49:32
really hard work and we were like

00:49:29 --> 00:49:33
pushing all the way until the deadline.

00:49:31 --> 00:49:35
Afterwards, I turned to my girlfriend at

00:49:32 --> 00:49:36
he time. I was like, you know what? I

00:49:34 --> 00:49:39
think this is going to be a pretty good

00:49:35 --> 00:49:39
paper.

00:49:39 --> 00:49:46
the paper stays in

00:49:42 --> 00:49:49
and uh yeah Wayan and I were talking at

00:49:45 --> 00:49:51
he time but uh I think we started very

00:49:48 --> 00:49:54
early thinking about this you know what

00:49:50 --> 00:49:56
his could become and trying to derisk

00:49:53 --> 00:50:00
it in various ways and trying to build

00:49:56 --> 00:50:03
it and seeing hey is this growing can we

00:49:59 --> 00:50:05
keep building on it another fuel that

00:50:02 --> 00:50:08
really like drive the growth is

00:50:04 --> 00:50:12
competition the competition of AI just

00:50:07 --> 00:50:14
become much more intense intense in uh

00:50:12 --> 00:50:19
early

00:50:13 --> 00:50:21
2024 when claw 3 came out. So let me

00:50:18 --> 00:50:22
tell you to answer your question because

00:50:20 --> 00:50:25
I think that it's a it's a very

00:50:21 --> 00:50:27
interesting uh and maybe I have a more

00:50:24 --> 00:50:29
kind of unique view as you know I

00:50:26 --> 00:50:32
started other companies which are based

00:50:28 --> 00:50:35
on project coming from this lab like um

00:50:31 --> 00:50:38
you know like data bricks with spark and

00:50:34 --> 00:50:40
uh or any scale with ray and and there

00:50:37 --> 00:50:41
you know the motion was pretty clear you

00:50:39 --> 00:50:43
have a

00:50:40 --> 00:50:47
successful open source project right

00:50:42 --> 00:50:50
which gets more and more popular and

00:50:46 --> 00:50:52
then there are some companies which

00:50:49 --> 00:50:54
start to use a project right and then

00:50:51 --> 00:50:56
they you get to the point they say okay

00:50:53 --> 00:50:57
if I'm going to bet on this project to

00:50:55 --> 00:51:00
be part of my infrastructure what

00:50:56 --> 00:51:02
happens when the students who build it

00:50:59 --> 00:51:04
like mate and so forth graduate right

00:51:02 --> 00:51:07
who is going to maintain it who is

00:51:03 --> 00:51:09
going to evolve it so in that particular

00:51:06 --> 00:51:13
case it's kind of natural okay if really

00:51:08 --> 00:51:15
this gets uh very to get even more

00:51:12 --> 00:51:17
successful you have to have a company

00:51:14 --> 00:51:19
backing it right whether it's a new

00:51:16 --> 00:51:22
company or an existing company and if

00:51:18 --> 00:51:24
there is no existing company it's you

00:51:21 --> 00:51:26
know people who are on that project

00:51:23 --> 00:51:29
if they want to push it

00:51:25 --> 00:51:31
farther you you know almost like you

00:51:28 --> 00:51:33
can't you have to start a company right

00:51:30 --> 00:51:36
o have enough resources to push it

00:51:32 --> 00:51:39
right but this was different for the

00:51:35 --> 00:51:42
reasons uh Anastasia said it's kind of

00:51:38 --> 00:51:47
we are Blay it's kind of a trust we

00:51:41 --> 00:51:48
neutral and and whining I remember

00:51:46 --> 00:51:50
mentioned to me like one year ago he's

00:51:47 --> 00:51:52
like you know

00:51:49 --> 00:51:54
like I think maybe we should do a

00:51:51 --> 00:51:57
company and I told him man what you're

00:51:53 --> 00:51:59
talking about this this has to be remain

00:51:56 --> 00:52:02
eutral maybe we do kind of foundation

00:51:58 --> 00:52:05
and so forth and this discussion

00:52:01 --> 00:52:07
actually went back and forth for a while

00:52:04 --> 00:52:10
I was even frustrated I'm telling this

00:52:06 --> 00:52:13
guy you know what I think it should

00:52:10 --> 00:52:15
happen and you know it should be just

00:52:12 --> 00:52:18
kind of foundation and so forth and she

00:52:14 --> 00:52:20
come he comes to me is like not hearing

00:52:17 --> 00:52:22
is like tell me the same thing. Right?

00:52:19 --> 00:52:24
So we were trying to like convince you

00:52:21 --> 00:52:27
basically convince me they were trying

00:52:23 --> 00:52:30
to convince me right and then when when

00:52:26 --> 00:52:31
for me it's like it it was um you know

00:52:29 --> 00:52:35
he talk with some of his foundation and

00:52:30 --> 00:52:38
so forth but when when when it was very

00:52:34 --> 00:52:41
clear uh for me is that when we started

00:52:37 --> 00:52:44
to get more and more demand and so forth

00:52:40 --> 00:52:47
and there is no way you can you need so

00:52:43 --> 00:52:49
much funding to build such a platform

00:52:46 --> 00:52:50
right because you need to serve the

00:52:48 --> 00:52:52
models

00:52:49 --> 00:52:54
and you need to build an entire back end

00:52:51 --> 00:52:57
scalable back end and things like that

00:52:53 --> 00:52:59
o do it and then you are UIUX right so

00:52:56 --> 00:53:01
when you look at that sheer amount of

00:52:58 --> 00:53:04
work in order to push them to the next

00:53:00 --> 00:53:07
level there is no way you can do it

00:53:03 --> 00:53:11
without having significant funding right

00:53:06 --> 00:53:13
so that's kind of for me was uh was a

00:53:10 --> 00:53:16
kind of inflection point but these guys

00:53:12 --> 00:53:19
can say more because they were convinced

00:53:15 --> 00:53:21
about this long before I But yeah,

00:53:18 --> 00:53:23
another thing I think we were discussing

00:53:20 --> 00:53:25
last year was like when we were trying

00:53:22 --> 00:53:28
to discuss whether this can be really

00:53:24 --> 00:53:30
like a business that solve more

00:53:27 --> 00:53:32
fundamental problems in the space. I

00:53:29 --> 00:53:34
think Anastasia at that time was like

00:53:31 --> 00:53:37
giving some perspective on ever more

00:53:33 --> 00:53:39
granular evaluation that we can provide

00:53:36 --> 00:53:40
with the data. Right. Right. So you want

00:53:38 --> 00:53:41
o say more about that? You know,

00:53:39 --> 00:53:43
chatbot Arena when you look at the

00:53:40 --> 00:53:45
leaderboard runs like a marginal

00:53:42 --> 00:53:48
regression which means that the

00:53:44 --> 00:53:49
leaderboard sort of ranks models on

00:53:47 --> 00:53:52
average across all users and all the

00:53:48 --> 00:53:54
prompts that they ask. But you know

00:53:51 --> 00:53:57
there's a vision where you take this to

00:53:53 --> 00:53:59
the logical extreme where you know

00:53:56 --> 00:54:00
there's the overall leaderboard then you

00:53:58 --> 00:54:01
can categorize the leaderboard into

00:53:59 --> 00:54:05
different categories coding math hard

00:54:00 --> 00:54:08
prompts and so on but you know the real

00:54:04 --> 00:54:11
value is in well what if I can tell you

00:54:07 --> 00:54:13
which model is best for you what if I

00:54:10 --> 00:54:15
can tell you which model is best for you

00:54:12 --> 00:54:16
and your question for your business.

00:54:14 --> 00:54:18
There's so many interesting

00:54:15 --> 00:54:20
methodological questions to ask there

00:54:17 --> 00:54:23
and actually they require a lot of

00:54:19 --> 00:54:24
resources to answer. So you know one

00:54:22 --> 00:54:25
thing that we've been working on

00:54:23 --> 00:54:27
recently is called prompt to

00:54:24 --> 00:54:30
leaderboard.

00:54:26 --> 00:54:33
Prompt to leaderboard asks the following

00:54:29 --> 00:54:36
question. You give me your

00:54:32 --> 00:54:39
prompt. Can we tell you which models are

00:54:35 --> 00:54:40
best for that prompt specifically? Now

00:54:38 --> 00:54:42
the problem is we've never seen that

00:54:39 --> 00:54:45
prompt before. We've only seen any

00:54:41 --> 00:54:46
prompt once or zero times, right?

00:54:44 --> 00:54:48
Because most people don't ask, you know,

00:54:45 --> 00:54:49
every question under the sun.

00:54:47 --> 00:54:50
Fundamentally, it's a hard question

00:54:48 --> 00:54:54
because the thing that you're trying to

00:54:49 --> 00:54:55
estimate is what if infinitely many

00:54:53 --> 00:54:57
people came to me and asked the same

00:54:54 --> 00:54:58
question and then voted, right? That's

00:54:56 --> 00:54:59
the thought experiment you're trying to

00:54:57 --> 00:55:01
run in your head. But you can't really

00:54:58 --> 00:55:04
answer that question by running a

00:55:00 --> 00:55:06
standard regression. So instead, what we

00:55:03 --> 00:55:09
came up with was a strategy for training

00:55:05 --> 00:55:13
language models that can output

00:55:08 --> 00:55:16
leaderboards, right? And it's actually a

00:55:12 --> 00:55:18
deep question because what essentially

00:55:15 --> 00:55:20
ou're doing is you're training LLMs to

00:55:17 --> 00:55:23
utput these Bradley Terry regressions

00:55:19 --> 00:55:24
that we were talking about earlier. And

00:55:22 --> 00:55:26
how do you do that? Well, you have to

00:55:24 --> 00:55:28
make sure that as you train the model,

00:55:25 --> 00:55:30
the regression sort of naturally emerges

00:55:28 --> 00:55:32
from the data. And the only thing you're

00:55:29 --> 00:55:34
getting is binary preference. But

00:55:31 --> 00:55:36
nonetheless, it turns out that you can

00:55:33 --> 00:55:40
do it.

00:55:35 --> 00:55:42
This has so much utility and it requires

00:55:39 --> 00:55:45
o many resources in order to really

00:55:42 --> 00:55:46
scale up. It converts the problem of

00:55:44 --> 00:55:49
testing and evaluations which is

00:55:46 --> 00:55:50
normally kind of like an unsexy problem.

00:55:48 --> 00:55:52
You think about it as like okay how am I

00:55:49 --> 00:55:55
going to evaluate ML? Well, I'll just

00:55:51 --> 00:55:57
like calculate the accuracy, right? But

00:55:54 --> 00:56:00
he reality is that that really doesn't

00:55:56 --> 00:56:01
reflect the heterogeneity of the

00:55:59 --> 00:56:03
performance of the model for different

00:56:00 --> 00:56:05
settings and for different people. But

00:56:02 --> 00:56:07
instead, what prompt leaderboard teaches

00:56:04 --> 00:56:09
us is that you can convert the problem

00:56:06 --> 00:56:12
of evaluation into the problem of

00:56:09 --> 00:56:16
learning. What if I learn something that

00:56:11 --> 00:56:17
can tell me how my models are performing

00:56:15 --> 00:56:19
in all different parts of the space?

00:56:16 --> 00:56:24
Right? It turns out that you can do that

00:56:18 --> 00:56:26
by training big language models and that

00:56:23 --> 00:56:27
because language models are sort of the

00:56:25 --> 00:56:30
intermediary that gets you to this

00:56:27 --> 00:56:32
evaluation, there's also a scaling law

00:56:29 --> 00:56:34
that comes along with it, right? which

00:56:31 --> 00:56:36
is to say that the more data you get,

00:56:33 --> 00:56:38
the bigger you build the platform, the

00:56:35 --> 00:56:39
better you can make your evaluations,

00:56:37 --> 00:56:41
the more granular you can make them, the

00:56:38 --> 00:56:43
more personalized you can make them. And

00:56:40 --> 00:56:44
that's a very very powerful idea. And I

00:56:42 --> 00:56:45
think that's part of the reason why we

00:56:43 --> 00:56:47
re convinced, hey, this deserves to be

00:56:44 --> 00:56:48
a company of its own. It's a fundamental

00:56:46 --> 00:56:50
technical innovation that's going to

00:56:47 --> 00:56:53
change the way people approach the

00:56:49 --> 00:56:56
space. and and let me try to follow that

00:56:52 --> 00:56:59
with a more a less accurate explanation,

00:56:55 --> 00:57:02
but I think it's uh drives home the

00:56:58 --> 00:57:04
point why the data is so important. So

00:57:01 --> 00:57:07
with the prompt on leaderboard is

00:57:03 --> 00:57:10
basically when you give your prompt and

00:57:06 --> 00:57:13
again like Nastasio said we may have

00:57:09 --> 00:57:17
never seen the prompt more likely.

00:57:12 --> 00:57:20
However, what we have seen maybe a lot

00:57:16 --> 00:57:22
of other prons which are similar with

00:57:19 --> 00:57:25
your pron right? So intuitively you can

00:57:21 --> 00:57:29
think that you can use the votes to the

00:57:24 --> 00:57:32
similar prompts as a proxy to compute

00:57:28 --> 00:57:36
how good are the models for your prompt.

00:57:31 --> 00:57:39
Now from this kind of you know maybe not

00:57:35 --> 00:57:42
as accurate analogy or explanation you

00:57:38 --> 00:57:44
can see that if the more data I have the

00:57:41 --> 00:57:47
more prompts similar to your prompt I

00:57:43 --> 00:57:49
have right so the more accurate I can be

00:57:46 --> 00:57:52
there is another thing I want we didn't

00:57:48 --> 00:57:55
ouch on and what actually for me was I

00:57:51 --> 00:57:58
was so excited about the project early

00:57:54 --> 00:58:01
on and if you think about outside Vikuna

00:57:57 --> 00:58:03
nd our own story how people and still

00:58:00 --> 00:58:07
evaluate this models you have this kind

00:58:02 --> 00:58:11
of benchmarks right mmlu helm at that

00:58:06 --> 00:58:14
point uh sweep bench all of these mod

00:58:10 --> 00:58:18
right the problem with that is that they

00:58:13 --> 00:58:21
are static right so you can sometimes

00:58:17 --> 00:58:23
overfeed them and at that time if you

00:58:20 --> 00:58:25
remember there are already starting to

00:58:22 --> 00:58:26
be discussions you know I'm talking

00:58:24 --> 00:58:29
about one year and a half ago two years

00:58:25 --> 00:58:32
ago about contamination right right

00:58:28 --> 00:58:34
here were some a very high-profile

00:58:31 --> 00:58:37
xamples and why because these Lar

00:58:33 --> 00:58:39
language models are going to train as we

00:58:36 --> 00:58:41
know now the data is limit it's it's a

00:58:38 --> 00:58:44
bottleneck so they train on all the

00:58:40 --> 00:58:47
possible data they are going to get

00:58:43 --> 00:58:49
heir hands on right in the internet

00:58:46 --> 00:58:53
right and many of these benchmarks are

00:58:48 --> 00:58:57
also out there right so it's not

00:58:52 --> 00:58:59
intentionally probably many uh uh but

00:58:56 --> 00:59:01
hey are going to train on some of them

00:58:58 --> 00:59:03
on the very benchmarks right they are

00:59:00 --> 00:59:06
going to be evaluated on. So this is

00:59:02 --> 00:59:09
kind of another fundamental problem and

00:59:05 --> 00:59:11
I think that the the unique thing about

00:59:08 --> 00:59:13
Shbat arena is kind of evolves over

00:59:10 --> 00:59:17
time. You know we are thinking that oh

00:59:12 --> 00:59:20
we we are thinking that the way people

00:59:16 --> 00:59:23
typically evaluate these models it's

00:59:19 --> 00:59:26
like giving a student over and over

00:59:22 --> 00:59:28
again the same exam right certainly we

00:59:25 --> 00:59:30
don't do that or at least we try not to

00:59:27 --> 00:59:33
do that right as I'm talking as a

00:59:29 --> 00:59:35
faculty now right for for each for for

00:59:32 --> 00:59:37
each class you know for each year we

00:59:34 --> 00:59:39
need to give different exams right so

00:59:36 --> 00:59:41
that's kind of again with the humans the

00:59:38 --> 00:59:43
same thing right to evaluate humans to

00:59:40 --> 00:59:46
evalate you know which kind of learn

00:59:42 --> 00:59:48
over time like these models you need to

00:59:45 --> 00:59:51
come with some you need to evolve the

00:59:47 --> 00:59:53
benchmarks right the exam right so I

00:59:50 --> 00:59:57
think that's kind of unique part and

00:59:52 --> 00:59:59
unique value of uh of charbot arena and

00:59:56 --> 01:00:01
probably these guys can say more

00:59:58 --> 01:00:05
about the kind of freshness and the

01:00:00 --> 01:00:05
volution of the benchmark over time

01:00:06 --> 01:00:11
what are the biggest differences between

01:00:07 --> 01:00:13
benchmarking and evaluation so let me

01:00:10 --> 01:00:15
Just zoom out for a

01:00:12 --> 01:00:18
second. Benchmarks, how are they

01:00:14 --> 01:00:21
collected? What happens is that you ask

01:00:17 --> 01:00:22
a question or you, you know, give an

01:00:20 --> 01:00:24
input and then a human grades the

01:00:21 --> 01:00:25
output, right? And then what is the

01:00:23 --> 01:00:26
benchmark supposed to be? There's an

01:00:24 --> 01:00:29
swer key. A benchmark is like a test

01:00:26 --> 01:00:31
with an answer key. A human has to look

01:00:28 --> 01:00:33
at it and tell you what's right or

01:00:30 --> 01:00:35
wrong, right?

01:00:32 --> 01:00:38
The fundamental insight of the

01:00:34 --> 01:00:40
arena is that by virtue of the fact that

01:00:37 --> 01:00:42
we built this platform, we can do

01:00:39 --> 01:00:44
something closer to reinforcement

01:00:41 --> 01:00:46
learning.

01:00:43 --> 01:00:48
Benchmarks are like supervised learning.

01:00:45 --> 01:00:50
Arena is like reinforcement learning.

01:00:47 --> 01:00:54
And supervised learning, you can only do

01:00:50 --> 01:00:55
as well as the best human that you have

01:00:53 --> 01:00:57
because what's happening is that you're

01:00:54 --> 01:00:59
learning from the

01:00:56 --> 01:01:01
teacher. In reinforcement learning,

01:00:58 --> 01:01:03
you're learning from the world. You're

01:01:00 --> 01:01:06
able to learn things better than the

01:01:02 --> 01:01:07
best human could ever teach you. Why?

01:01:05 --> 01:01:08
Because you're only getting these

01:01:06 --> 01:01:10
preferences. You're getting was this

01:01:08 --> 01:01:13
good? Was this bad. Nobody needs to tell

01:01:09 --> 01:01:14
you why. No, nobody needs to tell you,

01:01:12 --> 01:01:16
hey, oh, you need to improve the fact.

01:01:14 --> 01:01:19
Oh, your writing style needs to improve

01:01:15 --> 01:01:21
in XYZ way and you should edit the sent.

01:01:18 --> 01:01:22
Forget all of that. For the same reason

01:01:20 --> 01:01:24
why reinforcement learning has been so

01:01:22 --> 01:01:27
powerful in training language models, it

01:01:24 --> 01:01:29
is also powerful in evaluation. It can

01:01:26 --> 01:01:33
capture things that you and I if we were

01:01:28 --> 01:01:37
looking could never understand how to

01:01:32 --> 01:01:39
encode, right? It is the openw world

01:01:36 --> 01:01:42
nature allows you to go back and mind

01:01:38 --> 01:01:45
the data in order to extract insights

01:01:41 --> 01:01:47
that are much more profound than we

01:01:44 --> 01:01:49
could come up with ourselves. So this

01:01:46 --> 01:01:53
eems to be the fundamental tension,

01:01:48 --> 01:01:54
right? If you let's say you are a a a

01:01:52 --> 01:01:56
leader in the AI industry, your product

01:01:53 --> 01:01:58
lab or your product company, and you

01:01:55 --> 01:02:00
say, "We believe the most valuable thing

01:01:57 --> 01:02:03
for us to do is build useful AI

01:01:59 --> 01:02:04
products. We're not interested in, you

01:02:02 --> 01:02:05
know, benchmark hacking. We're

01:02:03 --> 01:02:08
interested in making truly useful

01:02:04 --> 01:02:11
products. If that is actually true, you

01:02:07 --> 01:02:14
should be strictly supportive of testing

01:02:10 --> 01:02:16
your systems more and more on arenas

01:02:13 --> 01:02:18
like webdev arena. Let's say you want to

01:02:15 --> 01:02:22
build a useful web development AI

01:02:17 --> 01:02:24
experience. So then you should want to

01:02:21 --> 01:02:26
your teams to be testing more and more

01:02:23 --> 01:02:28
on this product, right? You want to do

01:02:25 --> 01:02:30
well on the distribution of natural use.

01:02:27 --> 01:02:32
Let's say then we expect anybody who's

01:02:29 --> 01:02:34
erious about building useful AI

01:02:31 --> 01:02:36
products to want to use testing

01:02:33 --> 01:02:39
environments like Web Dev Arena more.

01:02:35 --> 01:02:41
Why are people complaining that some

01:02:38 --> 01:02:43
labs are testing more than others and

01:02:40 --> 01:02:45
that and why are they saying that's a

01:02:42 --> 01:02:48
bad thing? So first of all, I think it's

01:02:44 --> 01:02:50
worth saying that we offer the same

01:02:47 --> 01:02:51
level of service to all labs. Okay?

01:02:49 --> 01:02:52
There's nobody that we treat

01:02:50 --> 01:02:54
preferentially or anything. It's a

01:02:51 --> 01:02:56
neutral platform. We want to help the

01:02:53 --> 01:02:58
cosystem

01:02:55 --> 01:03:00
advance. But second of all, you know,

01:02:57 --> 01:03:03
addressing your question more directly,

01:02:59 --> 01:03:05
people do not yet fully understand the

01:03:02 --> 01:03:07
arena. I think people still think about

01:03:04 --> 01:03:09
he arena as a benchmark. People still

01:03:06 --> 01:03:11
think about it as something like, oh,

01:03:08 --> 01:03:14
people can overfit on this thing. But

01:03:10 --> 01:03:16
what hasn't sort of permeated, and it's

01:03:13 --> 01:03:17
because it's just such a new way to

01:03:15 --> 01:03:20
approach

01:03:16 --> 01:03:21
evaluations, is when you have fresh

01:03:19 --> 01:03:23
data, you can't overfit. It just means

01:03:20 --> 01:03:25
you're doing well. Period. There's no

01:03:22 --> 01:03:27
verfitting that can

01:03:24 --> 01:03:28
occur. What can happen is you can do

01:03:26 --> 01:03:31
well. And you can argue with me about

01:03:28 --> 01:03:33
whether doing well is a good thing.

01:03:30 --> 01:03:34
Okay, that's perfectly fine. That's not

01:03:32 --> 01:03:36
what that's not where people's heads are

01:03:33 --> 01:03:39
at. I think people's heads are still at,

01:03:36 --> 01:03:41
oh, you tested so much and that must

01:03:38 --> 01:03:43
mean that you're because people are used

01:03:40 --> 01:03:46
to it because people, oh, it's stat 101,

01:03:42 --> 01:03:47
so on and so forth. I know statistics.

01:03:45 --> 01:03:49
If you're doing well on this

01:03:46 --> 01:03:51
distribution, that's a strictly good

01:03:48 --> 01:03:53
thing. All else equal, right? And then

01:03:50 --> 01:03:55
people can choose how much do I want to

01:03:52 --> 01:03:57
tune my model for chat. That's your

01:03:54 --> 01:04:00
choice. You can choose how much you care

01:03:56 --> 01:04:02
about this signal. And that's okay, too.

01:03:59 --> 01:04:04
So I think it's a fundamental

01:04:01 --> 01:04:07
misunderstanding but I think as we go as

01:04:03 --> 01:04:09
we continue building this as it grows

01:04:06 --> 01:04:11
people will become more educated on this

01:04:08 --> 01:04:13
topic and then I expect that the world

01:04:10 --> 01:04:15
will understand it and and again just to

01:04:12 --> 01:04:18
make sure because we had the discussion

01:04:14 --> 01:04:22
with with Anastasia early on.

01:04:17 --> 01:04:26
So overfeitting refers to the same data

01:04:21 --> 01:04:29
right? Okay. Okay. But when you do like

01:04:25 --> 01:04:32
you you you do uh supervised learning or

01:04:28 --> 01:04:35
something like that then what you have

01:04:31 --> 01:04:37
uh data train data and then you

01:04:34 --> 01:04:39
have test data which you don't show

01:04:36 --> 01:04:42
during the training and you hope that is

01:04:38 --> 01:04:44
going to do well on the train data right

01:04:42 --> 01:04:46
so overfitting means is doing well on

01:04:43 --> 01:04:49
the test data but only on the train data

01:04:45 --> 01:04:51
right if you think from that perspective

01:04:48 --> 01:04:52
there is cannot be overfitting because

01:04:50 --> 01:04:56
we have

01:04:51 --> 01:04:59
continuously fresh data. Right. Right.

01:04:55 --> 01:05:01
The one thing can people say that it's a

01:04:58 --> 01:05:03
particular domain which is given by the

01:05:00 --> 01:05:05
set of users and so forth and you are

01:05:02 --> 01:05:08
going to learn to do better with this

01:05:04 --> 01:05:10
domain in this domain which is perfectly

01:05:07 --> 01:05:12
fine probably is you should care about

01:05:09 --> 01:05:14
hat because it's a domain. It's a it's

01:05:11 --> 01:05:17
a group of people you care about

01:05:13 --> 01:05:20
right? But it's very different over

01:05:16 --> 01:05:22
fitting it's very particular meaning

01:05:19 --> 01:05:25
right and what people think about here.

01:05:21 --> 01:05:29
Oh, I'm going to do when they use a term

01:05:24 --> 01:05:32
of overfeitting, I'm going to do well on

01:05:28 --> 01:05:35
I'm going to learn how to do well on uh

01:05:31 --> 01:05:38
arena audience, right? That's what they

01:05:34 --> 01:05:39
have in mind, right? But it's again

01:05:37 --> 01:05:41
that's fundamentally different. Well,

01:05:38 --> 01:05:43
actually, so let's talk about a second

01:05:40 --> 01:05:44
for the arena audience because you you

01:05:42 --> 01:05:48
mentioned that's a critical part,

01:05:43 --> 01:05:49
right? is as opposed to continuing to

01:05:47 --> 01:05:51
train your model to perform well on a

01:05:48 --> 01:05:54
static distribution. One of the things

01:05:50 --> 01:05:56
that shocked me when between the first

01:05:53 --> 01:05:57
ime you know Wayan and I chatted the

01:05:55 --> 01:06:00
beginning of last year to the end of

01:05:56 --> 01:06:01
last year was that Arena traffic had

01:05:59 --> 01:06:05
grown by

01:06:00 --> 01:06:06
10x the user base of the community had

01:06:04 --> 01:06:10
gone up by 10

01:06:05 --> 01:06:11
times. Why is that? I that feels like

01:06:09 --> 01:06:14
something people don't it certainly

01:06:10 --> 01:06:15
wasn't visible to me. What's going on

01:06:13 --> 01:06:18
under the hood? Why are more and more

01:06:14 --> 01:06:22
people using Arena?

01:06:17 --> 01:06:23
And in your mind, is is that one of the

01:06:21 --> 01:06:25
reasons why people don't realize how

01:06:22 --> 01:06:28
hard it is to actually overfit, how why

01:06:24 --> 01:06:30
overfitting is almost not possible and

01:06:27 --> 01:06:32
millions of people's preference. And I

01:06:29 --> 01:06:36
think one of the reason why people are

01:06:31 --> 01:06:38
kind of like surprised to see usage grow

01:06:35 --> 01:06:40
is because when they think about arena,

01:06:37 --> 01:06:43
they think about the leaderboard, right?

01:06:39 --> 01:06:45
They think about again a benchmark. How

01:06:42 --> 01:06:50
ould a million people use a benchmark?

01:06:44 --> 01:06:53
That's strange. But in reality, Arena is

01:06:49 --> 01:06:55
basically real world testing. And not

01:06:52 --> 01:06:57
just real world testing, real world

01:06:54 --> 01:07:00
testing the best AI from all the

01:06:56 --> 01:07:03
frontier labs, right? Does the demand

01:06:59 --> 01:07:05
grow over time for people to test the

01:07:02 --> 01:07:07
best, use the best? Yes. Right. So

01:07:04 --> 01:07:10
that's a very foundation of arena which

01:07:06 --> 01:07:12
is like this is like open space where

01:07:09 --> 01:07:16
veryone can come here to compare all

01:07:11 --> 01:07:18
the AIS for their own use cases for free

01:07:15 --> 01:07:20
and this demand we've been seeing has

01:07:17 --> 01:07:22
been growing and we believe it has a

01:07:19 --> 01:07:25
very strong potential to continue to

01:07:21 --> 01:07:28
grow and in the same time we collect all

01:07:24 --> 01:07:29
sorts of like comparison data that we

01:07:27 --> 01:07:33
can use for evaluation for all sorts of

01:07:28 --> 01:07:35
testics. So one thing I I want to point

01:07:32 --> 01:07:38
out because you we have been talking

01:07:34 --> 01:07:42
through this uh discussion a lot about

01:07:37 --> 01:07:45
votes right the vote is a fundamental

01:07:41 --> 01:07:48
construct which allow us to evaluate

01:07:44 --> 01:07:50
this model and so forth. It's the votes

01:07:47 --> 01:07:52
have to be so have high quality right if

01:07:50 --> 01:07:54
they don't have high quality it's like

01:07:51 --> 01:07:57
you said garbage in garbage

01:07:53 --> 01:07:59
out and we do believe and there are two

01:07:56 --> 01:08:02
things at least two things we believe

01:07:58 --> 01:08:07
that the votes on arena are high

01:08:01 --> 01:08:09
quality one is that the people who ask

01:08:06 --> 01:08:12
questions are the people who evaluate

01:08:08 --> 01:08:14
the answers right so presumably they are

01:08:11 --> 01:08:16
going to have the context for that

01:08:13 --> 01:08:20
question and for that answers

01:08:15 --> 01:08:22
as opposed to I have one question and

01:08:19 --> 01:08:25
two answers and I'm asking someone

01:08:22 --> 01:08:27
random labeler to say which of this

01:08:24 --> 01:08:31
answer is better. This is now from

01:08:26 --> 01:08:33
information retrieval field for decades

01:08:30 --> 01:08:35
and it's called gold standard when

01:08:32 --> 01:08:37
people evaluate the answer to their own

01:08:34 --> 01:08:39
questions when an expert evaluates

01:08:36 --> 01:08:41
omeone else questions and the answer is

01:08:38 --> 01:08:44
called the silver if I remember

01:08:40 --> 01:08:48
correctly. But the second thing people

01:08:43 --> 01:08:50
who give votes who vote in our case are

01:08:47 --> 01:08:51
intrinsically motivated. They are not

01:08:49 --> 01:08:55
asking them to

01:08:50 --> 01:08:58
vote right. They can choose not to vote.

01:08:54 --> 01:09:01
only people who want vote relative to

01:08:58 --> 01:09:04
plat you know companies that pay humans

01:09:00 --> 01:09:06
pay you to vote or or provide other kind

01:09:03 --> 01:09:08
of incentives like oh if if you vote

01:09:05 --> 01:09:10
more we can give you more resources or

01:09:07 --> 01:09:13
something like that right because you

01:09:09 --> 01:09:15
can imagine you can easily imagine how

01:09:12 --> 01:09:18
they can you can get their incentive

01:09:14 --> 01:09:19
wrong incentives right which are not

01:09:17 --> 01:09:20
necessarily aligned when I say wrong

01:09:18 --> 01:09:22
incentives they are not necessarily

01:09:19 --> 01:09:24
aligned

01:09:21 --> 01:09:27
with in increasing the voting quality

01:09:23 --> 01:09:29
One of the things that that strikes me

01:09:26 --> 01:09:32
as I hear you guys talk about the design

01:09:28 --> 01:09:34
of the platform is that unlike these

01:09:31 --> 01:09:36
other paid services where you can just

01:09:33 --> 01:09:38
you know essentially hand out cash or

01:09:35 --> 01:09:41
incentives when you have somebody

01:09:37 --> 01:09:44
intrinsically testing that the usage of

01:09:40 --> 01:09:46
a the quality of a model that starts to

01:09:43 --> 01:09:49
look more and more like software

01:09:45 --> 01:09:50
testing. Mhm. You know, so 15 years ago

01:09:48 --> 01:09:51
when software systems were starting to

01:09:49 --> 01:09:53
be deployed to the internet, you know,

01:09:50 --> 01:09:55
they were bugs, they were insecure, they

01:09:52 --> 01:09:58
were unstable, they were unreliable. And

01:09:54 --> 01:10:01
so as an industry, the we we developed

01:09:57 --> 01:10:03
the idea of unit tests and and and CI/CD

01:10:00 --> 01:10:05
and AV testing. And today software

01:10:02 --> 01:10:08
systems go through a sort of fairly

01:10:04 --> 01:10:10
reliable set of checks before they get

01:10:07 --> 01:10:11
deployed to production. Am I wrong or

01:10:09 --> 01:10:13
should I think about that as a pretty

01:10:10 --> 01:10:16
good analogy that we should want if we'd

01:10:12 --> 01:10:17
like the progress of AI, the arc of AI

01:10:15 --> 01:10:20
progress to head towards more and more

01:10:16 --> 01:10:22
liability, then we actually want model

01:10:19 --> 01:10:24
developers and AI developers to be

01:10:21 --> 01:10:25
testing their systems more before we

01:10:23 --> 01:10:28
actually get they get released to the

01:10:24 --> 01:10:30
world. So I think that's kind of when we

01:10:27 --> 01:10:32
started and this is another thing about

01:10:29 --> 01:10:35
exciting it's about we do believe and

01:10:31 --> 01:10:38
you can see right now one of the main

01:10:34 --> 01:10:41
challenges of adopting AI in a wide area

01:10:37 --> 01:10:43
of scenarios it's actually reliability

01:10:40 --> 01:10:47
especially if you look at enterprises

01:10:42 --> 01:10:50
right is this answer correct or not

01:10:46 --> 01:10:52
hat's kind of fundamental right and

01:10:49 --> 01:10:56
that's like you said it's very

01:10:51 --> 01:10:59
similar with software systems and for

01:10:55 --> 01:11:03
software systems we develop like you

01:10:58 --> 01:11:08
said this kind of long and sophisticated

01:11:02 --> 01:11:11
testing uh processes right CI/CD and so

01:11:07 --> 01:11:15
forth right so you should think about

01:11:10 --> 01:11:17
hat you need something like similar for

01:11:14 --> 01:11:19
these models right now are basically

01:11:16 --> 01:11:21
tell the truth is like almost static

01:11:18 --> 01:11:23
benchmarks right this what we are doing

01:11:20 --> 01:11:27
right you know you you start training

01:11:22 --> 01:11:30
your model And when the loss rate

01:11:26 --> 01:11:34
plateaus you start testing checkpoints

01:11:29 --> 01:11:35
right and you have you know 60 70 80

01:11:33 --> 01:11:38
kind of benchmark and you look at that

01:11:34 --> 01:11:40
in a spreadsheet see which checkpoint is

01:11:37 --> 01:11:42
doing better whatever then you can

01:11:39 --> 01:11:46
measure them. This is what happens right

01:11:41 --> 01:11:49
oday right. But like we discussed if

01:11:45 --> 01:11:52
you really are going to build your you

01:11:48 --> 01:11:54
know application for humans okay you can

01:11:51 --> 01:11:58
still test on your static benchmarks

01:11:53 --> 01:12:01
nothing wrong with that very valuable

01:11:57 --> 01:12:04
but you also want to test your models

01:12:00 --> 01:12:07
your checkpoints on chart

01:12:03 --> 01:12:10
arena for all the reasons we mentioned

01:12:06 --> 01:12:14
uring this discussion. Yeah. So ideally

01:12:09 --> 01:12:19
ou want arena to be as a as a limit

01:12:13 --> 01:12:19
part of your CI/CD for training the

01:12:19 --> 01:12:26
models. We spent a bunch of time talking

01:12:21 --> 01:12:29
about how Arena was born and

01:12:25 --> 01:12:33
how the the the big idea at least the

01:12:28 --> 01:12:35
oretical idea is that for to unlock

01:12:32 --> 01:12:39
more reliability in

01:12:34 --> 01:12:41
AI we need more testing of AI.

01:12:38 --> 01:12:43
So let's spend a little bit of time

01:12:40 --> 01:12:46
going deeper on the practical realities

01:12:42 --> 01:12:48
of making that possible. Um what are the

01:12:45 --> 01:12:51
hardest challenges when it comes to

01:12:47 --> 01:12:54
actually building the best testing

01:12:50 --> 01:12:56
platform to make AI more reliable? Arena

01:12:53 --> 01:12:58
is a very interesting platform. It's

01:12:55 --> 01:13:00
unique and it's kind of like N of one at

01:12:57 --> 01:13:01
he moment. And so there's a a number of

01:12:59 --> 01:13:03
like technical challenges that are

01:13:00 --> 01:13:05
actually quite exciting. Um we're always

01:13:02 --> 01:13:07
looking to improve the platform uh both

01:13:04 --> 01:13:09
from the methodological side and from

01:13:06 --> 01:13:11
the infrastructure side and you know

01:13:08 --> 01:13:13
hat makes it unique is that it's this

01:13:10 --> 01:13:15
combination of AI machine learning

01:13:12 --> 01:13:17
converting evaluations into learning

01:13:14 --> 01:13:19
algorithms like reinforcement learning

01:13:16 --> 01:13:20
side of things plus like pretty large

01:13:18 --> 01:13:23
scale infrastructure. A lot of people

01:13:20 --> 01:13:25
don't know this but job bot arena is

01:13:22 --> 01:13:27
used by like a million plus monthly

01:13:24 --> 01:13:30
users. We get like you know tens of

01:13:26 --> 01:13:33
thousands of votes on a daily basis. We

01:13:29 --> 01:13:34
have like over like you know 150 million

01:13:32 --> 01:13:37
conversations that have been had on the

01:13:34 --> 01:13:40
platform. It's massive and it's continu

01:13:36 --> 01:13:41
it's like the leading platform for this

01:13:39 --> 01:13:43
kind of like subjective real world

01:13:40 --> 01:13:44
evaluations continuing to grow. So the

01:13:42 --> 01:13:46
infrastructure side is actually quite

01:13:43 --> 01:13:50
challenging. And then the question is we

01:13:45 --> 01:13:53
have this like unprecedented data set.

01:13:49 --> 01:13:56
um how can we use it and leverage it

01:13:52 --> 01:13:59
maximally in order to actually target

01:13:55 --> 01:14:01
what we want is which is like the most

01:13:58 --> 01:14:04
granular possible evaluations and

01:14:00 --> 01:14:06
measurements of model performance.

01:14:03 --> 01:14:10
Um why is that hard? Why is granularity

01:14:05 --> 01:14:12
hard? Well, granularity is challenging

01:14:09 --> 01:14:14
because fundamentally the questions

01:14:12 --> 01:14:17
you're asking when you talk about

01:14:14 --> 01:14:18
granularity is how does it work for this

01:14:16 --> 01:14:20
pecific individual or this specific

01:14:18 --> 01:14:23
prompt or the specific use case. That is

01:14:20 --> 01:14:24
a hard question to answer. Why? It's

01:14:22 --> 01:14:27
because you know you come to the

01:14:23 --> 01:14:30
platform you know you ask three

01:14:26 --> 01:14:31
questions and you vote on one of them.

01:14:29 --> 01:14:33
How am I supposed to tell which model is

01:14:30 --> 01:14:36
best for you?

01:14:32 --> 01:14:38
It's like a sparse problem where what

01:14:35 --> 01:14:41
happens is that you know there's a big

01:14:37 --> 01:14:43
matrix of users and queries and the

01:14:40 --> 01:14:46
number of queries is infinite that the

01:14:42 --> 01:14:49
user could possibly ask and the number

01:14:45 --> 01:14:52
of users is very large and they've only

01:14:48 --> 01:14:54
asked three of them. How are you

01:14:51 --> 01:14:56
supposed to learn which model is best

01:14:53 --> 01:14:58
for that specific user? Well, you have

01:14:55 --> 01:15:00
to do something creative. And the

01:14:57 --> 01:15:02
methodology for that, you know, it

01:14:59 --> 01:15:05
relates to all these sort of like core

01:15:01 --> 01:15:06
topics that are very like deep in

01:15:04 --> 01:15:08
machine learning, statistics,

01:15:05 --> 01:15:10
recommendation systems, so on and so

01:15:07 --> 01:15:13
forth. But they come into kind of a new

01:15:09 --> 01:15:15
light when you think about language. So,

01:15:12 --> 01:15:16
you know, one example of a problem that,

01:15:14 --> 01:15:18
you know, we're working on towards the

01:15:15 --> 01:15:19
future is personalization. How am I

01:15:17 --> 01:15:21
supposed to create a personalized

01:15:18 --> 01:15:23
leaderboard for you? I let's say I have

01:15:20 --> 01:15:26
your prompt history and a few votes.

01:15:22 --> 01:15:27
Well, you know, in order to run a

01:15:25 --> 01:15:29
regression that's just for you, I

01:15:26 --> 01:15:31
probably need hundreds of votes, it's

01:15:28 --> 01:15:33
just going to be too high variance

01:15:30 --> 01:15:34
unless I have that much data. But I'm

01:15:32 --> 01:15:36
never going to collect that much data on

01:15:33 --> 01:15:37
a user or like only for the most power

01:15:35 --> 01:15:39
users am I going to collect that much

01:15:36 --> 01:15:43
data at the moment. So we need a way

01:15:38 --> 01:15:46
that we can train models that look at

01:15:42 --> 01:15:48
your interaction history and then can

01:15:45 --> 01:15:51
compare you to other users and pull

01:15:47 --> 01:15:52
between users so that you can create

01:15:50 --> 01:15:54
leaderboards for you know specific

01:15:52 --> 01:15:56
people categories of people so on and so

01:15:53 --> 01:15:57
forth. That is a challenging and

01:15:55 --> 01:15:59
interesting problem and you need to do

01:15:56 --> 01:16:00
it using only this sort of limited

01:15:58 --> 01:16:02
information that we have which is binary

01:15:59 --> 01:16:04
preference data. How do you do that?

01:16:01 --> 01:16:06
Well, it's a cool problem. It's a hard

01:16:03 --> 01:16:07
problem and it's one that we like have

01:16:05 --> 01:16:09
taken steps towards solving and it's not

01:16:06 --> 01:16:11
just personalization. What about if I

01:16:08 --> 01:16:12
want to value the data? What if I want

01:16:10 --> 01:16:16
o tell you which data points are high

01:16:11 --> 01:16:18
signal? Which users are high taste?

01:16:15 --> 01:16:20
What if I want to say an he's fantastic

01:16:17 --> 01:16:22
at, you know,

01:16:19 --> 01:16:24
biioinformatics, but when you ask him

01:16:21 --> 01:16:27
about history, this guy doesn't know

01:16:23 --> 01:16:28
hat he's talking about. Or what if you

01:16:26 --> 01:16:30
want to say, "Hey, this person right

01:16:27 --> 01:16:32
here, they're a local expert in this

01:16:29 --> 01:16:35
particular topic, and I really should

01:16:31 --> 01:16:36
upweight their opinions, let's say, or

01:16:34 --> 01:16:39
this person's just voting noise. How do

01:16:35 --> 01:16:40
I, you know, take them out?" We need to

01:16:38 --> 01:16:42
be able to do tasks like these, and

01:16:39 --> 01:16:43
they're they're fundamentally hard

01:16:41 --> 01:16:46
because of the

01:16:42 --> 01:16:48
structure of the data that we

01:16:45 --> 01:16:49
collect. Um, but they're also very

01:16:47 --> 01:16:51
exciting methodologically, and we we

01:16:48 --> 01:16:53
keep making progress on them. um which

01:16:50 --> 01:16:55
is part of the reason why uh it fuels us

01:16:52 --> 01:16:57
and it's all enabled by this massive in

01:16:54 --> 01:16:58
frastructure and platform. It needs to

01:16:56 --> 01:17:00
be done at scale. It needs to be done

01:16:57 --> 01:17:02
very quickly and you know way is kind of

01:16:59 --> 01:17:04
the expert on this and he he should

01:17:01 --> 01:17:05
speak to more of that. Yeah. So before

01:17:03 --> 01:17:08
we go into infrastructure I think one

01:17:04 --> 01:17:12
related note on all sorts of problem we

01:17:08 --> 01:17:14
are you know looking at like ML problem

01:17:11 --> 01:17:16
which also related to recommendation

01:17:13 --> 01:17:19
systems in early days where people try

01:17:16 --> 01:17:22
to figure out the co-star problem right

01:17:18 --> 01:17:24
you only have very few data point per

01:17:21 --> 01:17:27
user but you are trying to do something

01:17:23 --> 01:17:31
you know personalized recommendations

01:17:26 --> 01:17:34
for them Netflix Netflix yeah or movies

01:17:30 --> 01:17:37
what do people like and as we, you know,

01:17:33 --> 01:17:40
lean toward like a more

01:17:36 --> 01:17:44
um personalized world where like company

01:17:40 --> 01:17:47
try to build AI products for consumer

01:17:43 --> 01:17:51
everyone uh that leverage you know all

01:17:46 --> 01:17:55
these user histories prompts that model

01:17:50 --> 01:17:57
has memories now. So there's quite of

01:17:54 --> 01:18:00
you know new methodology need to be

01:17:56 --> 01:18:03
developed and in particular in this kind

01:17:59 --> 01:18:03
of like evaluation

01:18:04 --> 01:18:10
context it seems like there's two or

01:18:06 --> 01:18:12
three emerging frontiers of AI progress

01:18:09 --> 01:18:14
right relative to two or three years ago

01:18:11 --> 01:18:17
where models were pretty simple you know

01:18:13 --> 01:18:19
the the vast majority of of questions

01:18:16 --> 01:18:20
people had about the quality or

01:18:18 --> 01:18:23
performance of the models were mostly

01:18:19 --> 01:18:25
about in context learning right I I give

01:18:22 --> 01:18:28
the model a couple of examples. How good

01:18:24 --> 01:18:30
is it at predicting the next uh token or

01:18:27 --> 01:18:33
word in that sequence? And it was a

01:18:29 --> 01:18:35
pretty simplistic measure. Um you know,

01:18:32 --> 01:18:38
fast forward 2 three years now, models

01:18:34 --> 01:18:39
have gotten extraordin models clearly

01:18:37 --> 01:18:42
look more and more like systems. You

01:18:38 --> 01:18:45
know, one of the systems um improvements

01:18:41 --> 01:18:48
that you've described is memory, right?

01:18:44 --> 01:18:53
So relative to five six months ago when

01:18:47 --> 01:18:56
um most most AI assistants like chat GPT

01:18:52 --> 01:18:59
didn't have memory but now do people are

01:18:55 --> 01:19:01
starting to notice a discernable

01:18:58 --> 01:19:03
verticalization of the model in the

01:19:00 --> 01:19:06
systems layer right so uh famously

01:19:03 --> 01:19:09
openAI has spent a ton of time post

01:19:05 --> 01:19:10
raining their latest model 4.1 or 4.5

01:19:08 --> 01:19:13
or whatever it

01:19:09 --> 01:19:15
was on the with with the assumption

01:19:12 --> 01:19:21
built in that the model has access to

01:19:14 --> 01:19:24
the user's memory and context. Right?

01:19:20 --> 01:19:27
when you have how do you solve the

01:19:23 --> 01:19:28
problem of evaluating a model that where

01:19:26 --> 01:19:31
the lines are blurring between

01:19:27 --> 01:19:32
model system application this is you

01:19:30 --> 01:19:34
know turning into a full stack sort of

01:19:31 --> 01:19:36
product experience relative to a model

01:19:33 --> 01:19:38
that let's say doesn't have all of those

01:19:35 --> 01:19:40
right because these these now these

01:19:37 --> 01:19:43
relative to 2 three years ago the the

01:19:39 --> 01:19:45
sidebyside taste test was naively looked

01:19:42 --> 01:19:47
easier to do because it looked like Coke

01:19:44 --> 01:19:52
versus Pepsi or whatever right now it

01:19:46 --> 01:19:54
looks like um you know a a dessert

01:19:51 --> 01:19:56
versus an entree versus whatever. I'm

01:19:53 --> 01:19:57
doing a terrible job with the analogies

01:19:55 --> 01:20:00
but you get what I'm saying right? Chad

01:19:56 --> 01:20:02
GPT today for example has memory claw

01:19:59 --> 01:20:04
doesn't right these these are two

01:20:01 --> 01:20:05
consumer apps that look very similar on

01:20:03 --> 01:20:07
the surface but under the hood fairly

01:20:04 --> 01:20:09
different the implementations are

01:20:06 --> 01:20:12
diverging and yet on

01:20:08 --> 01:20:14
Arena they they are evalu side by side

01:20:11 --> 01:20:15
right so how how does that what does

01:20:13 --> 01:20:18
that future look like how do you how do

01:20:14 --> 01:20:19
you guys disentangle the fact that the

01:20:17 --> 01:20:22
stack is becoming more and more

01:20:18 --> 01:20:25
verticalized and integrated across model

01:20:21 --> 01:20:30
system interface application

01:20:24 --> 01:20:32
um but arena A is largely side-by-side

01:20:29 --> 01:20:34
valuation of models that people are

01:20:31 --> 01:20:36
used to seeing thinking of as basically

01:20:33 --> 01:20:40
symmetric systems. Yeah, I think it's a

01:20:36 --> 01:20:42
combination of again evaluation would

01:20:39 --> 01:20:45
ever become you know more challenging

01:20:41 --> 01:20:49
and more specific to your applications

01:20:44 --> 01:20:52
just like you know all software systems

01:20:48 --> 01:20:55
needs its own CI/CD pipeline that's very

01:20:51 --> 01:20:57
different you know from each other.

01:20:54 --> 01:21:00
I think that same the same thing would

01:20:56 --> 01:21:03
happen to all the AI products as well.

01:20:59 --> 01:21:07
So our belief is like in order to you

01:21:02 --> 01:21:10
know collect data or evaluation that

01:21:06 --> 01:21:14
really like means something that matters

01:21:09 --> 01:21:16
to us to the app builder or to user. We

01:21:13 --> 01:21:20
have to build a real world environment

01:21:15 --> 01:21:23
for everyone to test uh to use it you

01:21:19 --> 01:21:25
know give us real feedback. Um that's

01:21:22 --> 01:21:28
also why we are like and there is a

01:21:24 --> 01:21:32
combination of challenge of ML product

01:21:27 --> 01:21:35
design and engineering infrastructure

01:21:31 --> 01:21:37
because ultimately we are going to serve

01:21:34 --> 01:21:39
we are already serving millions of user

01:21:36 --> 01:21:42
we're going to serve tens of millions of

01:21:38 --> 01:21:45
user right how can we design a product

01:21:41 --> 01:21:48
hat you know people really love to use

01:21:44 --> 01:21:50
and then in the same time that's the

01:21:47 --> 01:21:51
most organic feedback that we could

01:21:49 --> 01:21:54
collect for different kind of user

01:21:50 --> 01:21:58
including memory. So why you know what

01:21:53 --> 01:22:00
if we have memory in in arena uh that

01:21:57 --> 01:22:02
kind of like you know applications

01:21:59 --> 01:22:05
testing like really like the long

01:22:01 --> 01:22:08
context uh capability of the model to

01:22:04 --> 01:22:10
reason about the past and then to have

01:22:07 --> 01:22:13
the potentially the rack system to

01:22:10 --> 01:22:16
retrieve relevant you know informations

01:22:12 --> 01:22:18
from the users past history in order to

01:22:15 --> 01:22:21
create a more personalized content for

01:22:17 --> 01:22:23
users or more personalized you know

01:22:20 --> 01:22:25
leader boards for users that's help them

01:22:22 --> 01:22:28
to choose what's the best AI for their

01:22:24 --> 01:22:32
use cases. When Chhat GPT has memory

01:22:27 --> 01:22:34
built in um but Claude doesn't how would

01:22:31 --> 01:22:36
that actually work in production when I

01:22:34 --> 01:22:38
show up to the site and I'm trying to

01:22:35 --> 01:22:42
evaluate these models side by side. Both

01:22:37 --> 01:22:44
both are serving the model via API. Does

01:22:41 --> 01:22:46
that mean on the arena side you have to

01:22:43 --> 01:22:49
recreate memory and then abstract that

01:22:46 --> 01:22:51
away as a shared service that all the

01:22:48 --> 01:22:54
models consume? how how would that

01:22:50 --> 01:22:57
implementation work? Yeah. So I think

01:22:53 --> 01:22:59
increasingly we are going to go beyond

01:22:56 --> 01:23:02
just single model

01:22:58 --> 01:23:05
uh that the model has a you know ability

01:23:01 --> 01:23:08
to connect to different source of

01:23:04 --> 01:23:09
information you will say like context.

01:23:07 --> 01:23:11
Search arena is one example of this. The

01:23:08 --> 01:23:15
search arena is like we launched a

01:23:10 --> 01:23:19
couple uh months ago. Um is basically

01:23:14 --> 01:23:22
arena just specific to evaluate models

01:23:18 --> 01:23:25
that has you know internet assets of web

01:23:21 --> 01:23:28
data assets right and in that case model

01:23:24 --> 01:23:30
is not just model itself. It has to be

01:23:27 --> 01:23:31
you know com in combination of other

01:23:29 --> 01:23:33
components right and the same thing

01:23:30 --> 01:23:36
happened to memory right you have

01:23:32 --> 01:23:38
another component which is retrieving

01:23:35 --> 01:23:42
relevant information from user history

01:23:37 --> 01:23:44
and then this history is actually richer

01:23:41 --> 01:23:47
like not just prompt that has all the

01:23:43 --> 01:23:49
you know battle between uh different

01:23:46 --> 01:23:53
models comparison data and then uses

01:23:48 --> 01:23:55
express preference so that kind of like

01:23:52 --> 01:23:58
you know more like and then it could be

01:23:54 --> 01:24:02
also multimodel right? Can be like image

01:23:58 --> 01:24:04
uh can be like video all the or PDF

01:24:01 --> 01:24:07
right people upload long document that

01:24:03 --> 01:24:09
kind of stuff. So all these kind of like

01:24:06 --> 01:24:12
different context different modality of

01:24:08 --> 01:24:14
data how can we leverage them um in

01:24:11 --> 01:24:16
order to create more personal experience

01:24:13 --> 01:24:18
and then and then evaluate them that

01:24:15 --> 01:24:19
will be like very interesting challenge.

01:24:17 --> 01:24:21
Yeah I would say there's basically two

01:24:18 --> 01:24:22
ways that we're moving forward. The

01:24:20 --> 01:24:24
first is the platform is going to

01:24:21 --> 01:24:26
continue to evolve for sure. We're going

01:24:23 --> 01:24:28
to keep keep creating new arenas. We're

01:24:25 --> 01:24:29
going to keep improving the arena to

01:24:27 --> 01:24:31
integrate things like an artifacts

01:24:28 --> 01:24:33
component and things like memory and so

01:24:30 --> 01:24:35
n and so forth. And the second is

01:24:32 --> 01:24:37
integrations. You know, at the end of

01:24:34 --> 01:24:40
the day, if someone wants to evaluate

01:24:36 --> 01:24:42
their app, like we should be able to

01:24:39 --> 01:24:45
provide them a toolkit that integrates

01:24:41 --> 01:24:48
with our services to do that. Uh so if

01:24:44 --> 01:24:49
let's say I'm building a code editor.

01:24:47 --> 01:24:52
Yeah.

01:24:48 --> 01:24:54
Um, but I' I'd like to understand which

01:24:51 --> 01:24:56
one of the 17 models out there are best

01:24:53 --> 01:24:59
for my users. Exactly. What does that

01:24:55 --> 01:25:01
look? I I use an Arena SDK. Exactly. Got

01:24:58 --> 01:25:03
it. And that's exactly right. And so how

01:25:00 --> 01:25:08
do what would that look like?

01:25:02 --> 01:25:09
Um my users would um you know generate a

01:25:07 --> 01:25:12
bunch of interactions that then the

01:25:08 --> 01:25:14
arena SDK is serving on the arena site

01:25:11 --> 01:25:16
to run side by side or is that eval? I

01:25:14 --> 01:25:17
think it can happen in context. So what

01:25:15 --> 01:25:20
you can do is you can have some kind of

01:25:16 --> 01:25:21
a gateway that allows people to access

01:25:19 --> 01:25:23
all sorts of different models. Even

01:25:20 --> 01:25:24
maybe the ones that they didn't, you

01:25:22 --> 01:25:25
know, handpick themselves, but the

01:25:23 --> 01:25:26
cutting edge ones that maybe they don't

01:25:24 --> 01:25:30
even have access to them. Maybe they're

01:25:26 --> 01:25:32
ven pre-release, right? Um, and then

01:25:29 --> 01:25:34
what we can do is on our side use all

01:25:31 --> 01:25:36
the experience that we've built on

01:25:33 --> 01:25:37
sampling data tools, training models,

01:25:35 --> 01:25:39
this huge data set that we've collected

01:25:36 --> 01:25:40
that has all these multi-provider

01:25:38 --> 01:25:42
comparisons to do things like choose

01:25:39 --> 01:25:44
what the best model is for your users,

01:25:41 --> 01:25:45
understand how all the different models

01:25:43 --> 01:25:48
perform, all the cost benefit

01:25:44 --> 01:25:50
rade-offs, the a predto curve of cost

01:25:47 --> 01:25:51
versus performance of different models.

01:25:49 --> 01:25:52
All that stuff is stuff that we can

01:25:50 --> 01:25:54
instrument and we can do it using in

01:25:52 --> 01:25:56
context feedback. So let's say somebody

01:25:53 --> 01:25:58
says, "Hey, let's hook into a thumbs up,

01:25:55 --> 01:26:00
thumbs down button, pass that back to

01:25:57 --> 01:26:03
the arena SDK." Well, we can look at

01:25:59 --> 01:26:04
hat um and using that information, we

01:26:02 --> 01:26:06
can produce leaderboards for that

01:26:03 --> 01:26:08
organization, right? We're the experts

01:26:06 --> 01:26:10
in doing that, right? We've been doing

01:26:07 --> 01:26:11
this for years. Uh you know, things like

01:26:09 --> 01:26:14
prompt leaderboard and various

01:26:10 --> 01:26:16
technologies, you know, D3. D3. Yeah.

01:26:13 --> 01:26:18
So, we're building a project now that we

01:26:15 --> 01:26:20
call datadriven debugging D3. It's, you

01:26:18 --> 01:26:24
know, it's a little farther out. It'll

01:26:20 --> 01:26:26
come in a couple months. Um but the

01:26:23 --> 01:26:28
fundamental premise of that is that

01:26:25 --> 01:26:29
pair-wise comparison feedback is not the

01:26:27 --> 01:26:31
only kind of feedback that we can use to

01:26:28 --> 01:26:33
construct leaderboards. We can construct

01:26:30 --> 01:26:36
leaderboards with any form of feedback.

01:26:32 --> 01:26:38
Uh and because of that we can hook in

01:26:35 --> 01:26:40
ot just to you know pop up pair wise

01:26:37 --> 01:26:41
preference comparisons for whatever

01:26:39 --> 01:26:44
company which is of course something

01:26:40 --> 01:26:47
that we can do. Um but instead what if I

01:26:44 --> 01:26:49
want to you know rank code models in

01:26:46 --> 01:26:52
part on how many times the code is

01:26:48 --> 01:26:53
copied or accept accepted. uh code

01:26:51 --> 01:26:56
changes

01:26:52 --> 01:26:58
accepted. You know, how many like what's

01:26:55 --> 01:27:00
the edit distance between the code that

01:26:57 --> 01:27:02
he model produced and the code that the

01:26:59 --> 01:27:04
human ended up sort of, you know,

01:27:01 --> 01:27:07
shipping. So that's interesting. You're

01:27:03 --> 01:27:10
saying we're moving from a world where

01:27:06 --> 01:27:12
the primary signal that is used to

01:27:09 --> 01:27:15
figure out whether to improve an an AI

01:27:11 --> 01:27:18
model is sort of very explicit thumbs

01:27:14 --> 01:27:20
up, thumbs down binary preference.

01:27:17 --> 01:27:23
um you see a future where every

01:27:19 --> 01:27:26
interaction I have within a product you

01:27:22 --> 01:27:30
know engagement retention

01:27:25 --> 01:27:32
down to a a guey interaction can help

01:27:29 --> 01:27:33
tell the model what to improve.

01:27:31 --> 01:27:35
Absolutely.

01:27:32 --> 01:27:36
So that's exactly the kind of stuff that

01:27:34 --> 01:27:38
we can loop into our methodology that

01:27:35 --> 01:27:39
we've been developing and generate

01:27:37 --> 01:27:41
useful feedback for people to continue

01:27:38 --> 01:27:42
improving their models. If you want to

01:27:40 --> 01:27:44
create code that people are going to

01:27:41 --> 01:27:46
use, you know, make sure that people are

01:27:43 --> 01:27:48
using it and that the edit distance is

01:27:45 --> 01:27:50
low and that people accept your changes.

01:27:47 --> 01:27:52
Okay. If you want to build an agent like

01:27:49 --> 01:27:54
uh like a Devon that's going to be your

01:27:52 --> 01:27:57
software engineer, how many of these PRs

01:27:53 --> 01:27:58
end up getting merged? You know, this is

01:27:56 --> 01:28:01
the sort of stuff that we're building

01:27:57 --> 01:28:03
the technology that gives you very very

01:28:00 --> 01:28:04
rich insights into. And I think, you

01:28:02 --> 01:28:07
know, by virtue of the fact that we're

01:28:04 --> 01:28:10
developing this new methodology,

01:28:06 --> 01:28:11
um, we, you know, think we have an edge

01:28:09 --> 01:28:13
to be able to provide people that kind

01:28:10 --> 01:28:13
of

01:28:15 --> 01:28:20
service. You know, you talked earlier

01:28:17 --> 01:28:23
about prompt leaderboard. One of the

01:28:19 --> 01:28:24
things that surprised me when I looked

01:28:22 --> 01:28:26
at the repo, you know, it's an open

01:28:23 --> 01:28:28
source repo, is how well the model

01:28:25 --> 01:28:29
performed on Arena. Can you actually

01:28:27 --> 01:28:32
just walk through what happened when you

01:28:29 --> 01:28:33
guys recap what you know what it is and

01:28:31 --> 01:28:36
then what happened when you actually

01:28:32 --> 01:28:37
deployed it on Arena. So I I'll I'll get

01:28:35 --> 01:28:40
a little bit into technical detail here

01:28:36 --> 01:28:42
because I think it's cool. So prompt to

01:28:39 --> 01:28:44
leaderboard what does it do? Um if you

01:28:41 --> 01:28:46
look at the chat arena leaderboard it's

01:28:43 --> 01:28:48
Bradley Terry coefficients. Prompt to

01:28:45 --> 01:28:49
leaderboard is a technology that we

01:28:47 --> 01:28:50
built that allows you to take a prompt

01:28:48 --> 01:28:52
and then produce Bradley Terry

01:28:49 --> 01:28:53
coefficients for every model that are

01:28:51 --> 01:28:54
specific to that prompt. Okay. The

01:28:52 --> 01:28:56
Bradley Terry coefficients are a

01:28:53 --> 01:28:57
leaderboard. Higher is better. It means

01:28:55 --> 01:28:59
you're more likely to win a battle. So

01:28:56 --> 01:29:01
what's the natural next step from

01:28:58 --> 01:29:03
producing a leaderboard? Well, let's

01:29:00 --> 01:29:04
make a router. An asks me a question.

01:29:02 --> 01:29:06
I'm going to produce a leaderboard just

01:29:03 --> 01:29:08
for that question. And then how about I

01:29:05 --> 01:29:11
route his question to the model that's

01:29:07 --> 01:29:13
on the top of the leaderboard.

01:29:10 --> 01:29:14
It turns out that when you do this, when

01:29:12 --> 01:29:16
you train a prompt to leaderboard model,

01:29:13 --> 01:29:17
which is like let's say a 7 billion

01:29:15 --> 01:29:20
parameter

01:29:16 --> 01:29:22
model and then you use it to route

01:29:19 --> 01:29:25
questions on the arena and everybody's

01:29:21 --> 01:29:26
questions, that model does better than

01:29:24 --> 01:29:28
y of the constituent models that were

01:29:26 --> 01:29:31
used in the router by a pretty

01:29:27 --> 01:29:33
substantial margin. Now here's another

01:29:30 --> 01:29:36
thing that's yet more

01:29:32 --> 01:29:37
interesting. Because the Bradley ter the

01:29:35 --> 01:29:38
Bradley Terry coefficients have a

01:29:36 --> 01:29:41
particular parametric form and a

01:29:38 --> 01:29:43
statistical meaning, you can use them in

01:29:40 --> 01:29:45
downstream optimization problems. So one

01:29:42 --> 01:29:48
xample of an optimization problem is a

01:29:44 --> 01:29:50
router maximize performance subject to

01:29:47 --> 01:29:52
cost

01:29:49 --> 01:29:54
constraint. So the router can be for

01:29:52 --> 01:29:56
example a randomized router that chooses

01:29:53 --> 01:29:58
between different models. It has like a

01:29:55 --> 01:29:59
random policy that chooses hey an ask me

01:29:57 --> 01:30:00
a question. and I'm with 50% probability

01:29:58 --> 01:30:02
I'm going to route here with 50%

01:29:59 --> 01:30:03
probability I'm going to route here and

01:30:01 --> 01:30:07
I'm going to do so in such a way that my

01:30:02 --> 01:30:10
average cost is you know 1

01:30:06 --> 01:30:11
cent and I'm going to maximize my

01:30:09 --> 01:30:15
performance subject to

01:30:10 --> 01:30:17
that now if you trace the performance

01:30:14 --> 01:30:19
the best performance that you know any

01:30:16 --> 01:30:21
individual model can give you as part of

01:30:18 --> 01:30:25
the router as a function of

01:30:20 --> 01:30:27
cost that's like 2x

01:30:24 --> 01:30:29
worse than the router in other words The

01:30:26 --> 01:30:32
router is giving you double the bang for

01:30:28 --> 01:30:33
your buck in terms of performance per

01:30:31 --> 01:30:37
cost. If you want to achieve an arena

01:30:32 --> 01:30:39
score of 1280 using the router, it'll

01:30:36 --> 01:30:41
cost you half as much as it costs you to

01:30:38 --> 01:30:43
use any individual model. That's

01:30:40 --> 01:30:46
amazing. What it means is that you're

01:30:42 --> 01:30:48
taking advantage of the heterogeneity

01:30:45 --> 01:30:50
and performance of these models across

01:30:47 --> 01:30:53
different parts of prompt space in order

01:30:49 --> 01:30:54
to properly route them. And by virtue of

01:30:52 --> 01:30:56
the fact that it has the statistical

01:30:53 --> 01:30:58
interpretation, you can cost constrain

01:30:55 --> 01:30:59
it too. And that's why prompt to

01:30:57 --> 01:31:01
leaderboard is you know interesting is

01:30:58 --> 01:31:03
that because we believe it's like a

01:31:00 --> 01:31:04
fundamental first step towards

01:31:02 --> 01:31:06
addressing this routing problem in a

01:31:03 --> 01:31:07
principled way and you know from our

01:31:05 --> 01:31:09
perspective it's like the right way to

01:31:06 --> 01:31:11
do routing. If you want to do routing to

01:31:08 --> 01:31:13
maximize preference like you know even

01:31:10 --> 01:31:16
internally at OpenAI they're doing these

01:31:12 --> 01:31:17
AB tests right if you want to maximize

01:31:15 --> 01:31:20
the sort of feedback that you get there

01:31:16 --> 01:31:22
and the engagement then you should be

01:31:19 --> 01:31:24
using a strategy like prompt leaderboard

01:31:21 --> 01:31:25
and so you know our hope is that this

01:31:23 --> 01:31:27
ort of thing would make it easier for

01:31:24 --> 01:31:28
them to avoid the drop down and that

01:31:26 --> 01:31:30
hey can actually implement it in their

01:31:27 --> 01:31:32
own product. I'm sure that they have

01:31:29 --> 01:31:35
strategies of their own but maybe this

01:31:31 --> 01:31:35
can be helpful to them

01:31:35 --> 01:31:42
too. Let's talk a little bit about you

01:31:39 --> 01:31:45
know you said that experience will look

01:31:41 --> 01:31:48
different over time the arena experience

01:31:44 --> 01:31:50
will look different than chat GPT let's

01:31:47 --> 01:31:52
talk a little bit about the road map you

01:31:49 --> 01:31:54
know what what what are the

01:31:51 --> 01:31:55
biggest things that you guys are working

01:31:53 --> 01:31:59
on over the next few months and then

01:31:54 --> 01:32:00
let's go longer longer term yeah well

01:31:58 --> 01:32:04
two that we've already mentioned are

01:31:59 --> 01:32:08
personalization and uh a leaderboard of

01:32:03 --> 01:32:10
users right can we can we get people

01:32:07 --> 01:32:12
first of all to like figure out which

01:32:09 --> 01:32:15
models they like best and sort of lean

01:32:11 --> 01:32:17
into that experience, incentivize them

01:32:14 --> 01:32:18
to give us better votes, you know, come

01:32:16 --> 01:32:20
here for their personal leaderboards and

01:32:18 --> 01:32:22
their personal metrics and then give

01:32:19 --> 01:32:24
them allow them to drill down really

01:32:21 --> 01:32:26
deep in that. And in that case, we align

01:32:23 --> 01:32:28
the interests of individuals and the

01:32:25 --> 01:32:30
platform as a whole because you don't

01:32:27 --> 01:32:32
want to mess up your personal lead,

01:32:29 --> 01:32:34
right? Just like how people these days

01:32:31 --> 01:32:37
when they use social media they don't

01:32:33 --> 01:32:39
like a random post because if they do

01:32:36 --> 01:32:41
that then their feed will be messed up

01:32:38 --> 01:32:43
right so it's like oh I will be more

01:32:40 --> 01:32:45
careful voting I'll be more careful

01:32:42 --> 01:32:46
ooking at all these different models

01:32:44 --> 01:32:48
ensor and so on which we believe we

01:32:46 --> 01:32:51
believe collectively we will create a

01:32:47 --> 01:32:53
better even more higher quality arena

01:32:50 --> 01:32:57
bsolutely yeah and then on the note of

01:32:52 --> 01:33:00
a user leaderboard can we um value the

01:32:56 --> 01:33:02
data in such a way that allows people to

01:32:59 --> 01:33:04
know where they stand in terms of what

01:33:01 --> 01:33:05
kind of questions they're asking, how

01:33:03 --> 01:33:07
useful they are, right? We think people

01:33:04 --> 01:33:09
are going to love that. It's such a fun

01:33:06 --> 01:33:11
thing to be able to see that in terms of

01:33:08 --> 01:33:13
math, I'm asking the best questions. I

01:33:10 --> 01:33:14
would love that. I would love if I was

01:33:12 --> 01:33:17
king the best statistics questions in

01:33:13 --> 01:33:20
the world, you know, and I think people

01:33:16 --> 01:33:22
will use that and think, hey, I want to

01:33:19 --> 01:33:25
be on the top. And so, can we continue

01:33:21 --> 01:33:27
to align the incentives? And by the way,

01:33:24 --> 01:33:30
once we do that, it'll make it much

01:33:26 --> 01:33:31
more, you know, valuable. The lead it

01:33:29 --> 01:33:34
make leaderboard much more valuable

01:33:30 --> 01:33:35
because it'll mean that we sort of start

01:33:33 --> 01:33:37
removing the noise from people that

01:33:34 --> 01:33:39
might be sort of, oh, I don't know what

01:33:36 --> 01:33:41
hese buttons are. Click. And instead

01:33:38 --> 01:33:43
people are getting really intentional,

01:33:40 --> 01:33:45
really high taste votes, identifying who

01:33:42 --> 01:33:47
those people are, and maybe even being

01:33:44 --> 01:33:48
able to personalize so carefully that we

01:33:46 --> 01:33:51
can produce leaderboards for different

01:33:47 --> 01:33:53
like, you know, types of people, right?

01:33:50 --> 01:33:56
That would be incredible. On the and

01:33:52 --> 01:33:58
then on the fifth side of it is like we

01:33:55 --> 01:34:03
as a platform has a bit more visibility

01:33:58 --> 01:34:07
into who are those user and how do we

01:34:02 --> 01:34:09
ven customize the distribution that you

01:34:06 --> 01:34:12
know on the flip flip side is model

01:34:08 --> 01:34:14
developer care or developers or

01:34:11 --> 01:34:18
developer at large cares right I wanted

01:34:13 --> 01:34:20
to say oh I want to test my AI or my you

01:34:17 --> 01:34:23
know system in

01:34:19 --> 01:34:26
uh you know developers in uh in Japan

01:34:22 --> 01:34:28
let's say right and then can we have the

01:34:25 --> 01:34:31
ability to kind of like customize that

01:34:27 --> 01:34:33
kind of distribution to target what are

01:34:30 --> 01:34:37
the most you know meaningful

01:34:32 --> 01:34:37
distributions that reflect your use

01:34:37 --> 01:34:43
cases one of the things

01:34:39 --> 01:34:46
that you guys have been pretty vocal

01:34:42 --> 01:34:48
about is open source I think from day

01:34:45 --> 01:34:52
one Marina has open

01:34:47 --> 01:34:55
sourced prompts votes you know chunk of

01:34:51 --> 01:34:57
the data that all that's that's being

01:34:54 --> 01:35:00
enerated on the platform. thing we do

01:34:56 --> 01:35:03
every week probably updates on the

01:34:59 --> 01:35:06
leaderboard right and then you know all

01:35:02 --> 01:35:10
the code infrastructures that we process

01:35:05 --> 01:35:15
the data is uh published as open source

01:35:09 --> 01:35:17
and also research blog paper and then

01:35:14 --> 01:35:20
including prompt leaderboard we publish

01:35:16 --> 01:35:23
the paper open source the models the

01:35:19 --> 01:35:27
code and everything because we believe

01:35:22 --> 01:35:30
that you know this is critical goal in

01:35:26 --> 01:35:32
terms of building trust uh with the

01:35:29 --> 01:35:35
community and also really build a

01:35:31 --> 01:35:38
foundation of this that we can like you

01:35:34 --> 01:35:41
know enable more and more you know value

01:35:37 --> 01:35:43
on top of it right so for adoption

01:35:40 --> 01:35:46
reason for trust and then for

01:35:42 --> 01:35:48
collaborations. So as you guys have made

01:35:45 --> 01:35:50
the transition from being a research

01:35:47 --> 01:35:53
project to now being a company, what are

01:35:49 --> 01:35:55
the most important values to you guys to

01:35:52 --> 01:35:57
create and hold at the company as you

01:35:54 --> 01:36:01
guys grow out the team as the project

01:35:56 --> 01:36:05
grows? Absolutely. Well, we are very

01:36:00 --> 01:36:07
focused on neutrality, innovation,

01:36:04 --> 01:36:09
trust. We come from an academic

01:36:06 --> 01:36:11
background and yeah, we want to maintain

01:36:08 --> 01:36:12
the culture of this is a project. It's a

01:36:10 --> 01:36:13
community focused project. It's going to

01:36:11 --> 01:36:14
continue to grow. Yes, it's going to be

01:36:12 --> 01:36:16
a company. the company's going to

01:36:13 --> 01:36:18
support the project that we've already

01:36:15 --> 01:36:19
built and allow it to grow. Yes, it's

01:36:17 --> 01:36:21
going to continue to change. It's going

01:36:18 --> 01:36:22
to change for the better, right? We're

01:36:20 --> 01:36:23
going to keep improving it. We're going

01:36:21 --> 01:36:25
to keep publishing papers. We're going

01:36:22 --> 01:36:27
to keep releasing open source. We're

01:36:24 --> 01:36:28
going to keep releasing open data,

01:36:26 --> 01:36:31
right? That's all going to be part of

01:36:27 --> 01:36:33
our culture. And part of, you know, it

01:36:30 --> 01:36:35
goes both ways because that's the way

01:36:32 --> 01:36:37
that you recruit the best. The best

01:36:34 --> 01:36:38
people don't want to hole up at a

01:36:36 --> 01:36:40
company and develop a bunch of

01:36:37 --> 01:36:43
proprietary technology that, you know,

01:36:39 --> 01:36:45
is never going to be released and, you

01:36:42 --> 01:36:47
know, it's just going to sort of stay in

01:36:44 --> 01:36:49
the, you know, annals of their nearest

01:36:46 --> 01:36:50
neighbors within the company, then

01:36:48 --> 01:36:53
they're the only ones that are going to

01:36:49 --> 01:36:55
know. We want the world to know what the

01:36:52 --> 01:36:58
best ways are of evaluating these models

01:36:54 --> 01:36:59
and accelerating the ecosystem. Um, and

01:36:57 --> 01:37:02
you know, releasing this data is also a

01:36:58 --> 01:37:03
big big part of our trust. If people

01:37:01 --> 01:37:05
want to ask the question, hey, how are

01:37:02 --> 01:37:06
models performing on the arena? Why are

01:37:04 --> 01:37:08
they performing well? Go look at the

01:37:05 --> 01:37:09
data. That's what we did with Llama,

01:37:07 --> 01:37:12
right? When people have questions about

01:37:08 --> 01:37:14
Llama, we just release the data. Easy,

01:37:11 --> 01:37:16
right? Just go look. And we plan on

01:37:13 --> 01:37:18
doing things like this for the lifetime

01:37:15 --> 01:37:20
of our company, right? That's how we're

01:37:17 --> 01:37:21
going to recruit the best researchers

01:37:19 --> 01:37:22
that are going to help us develop a

01:37:20 --> 01:37:24
methodology. That's how we're going to

01:37:21 --> 01:37:25
develop the best engineers who care

01:37:23 --> 01:37:27
about the whole ecosystem, not just one

01:37:24 --> 01:37:29
company. And ultimately, that's how

01:37:26 --> 01:37:30
e're going to develop best products.

01:37:28 --> 01:37:32
That's how we're going to become central

01:37:29 --> 01:37:36
to the space. We already are, but we're

01:37:31 --> 01:37:39
going to cement it is by remaining open

01:37:35 --> 01:37:39
and neutral.

01:37:40 --> 01:37:47
And how would you resolve the tension

01:37:43 --> 01:37:51
that often exists

01:37:46 --> 01:37:54
when you there are there are people

01:37:50 --> 01:37:57
who are concerned that as AI gets more

01:37:53 --> 01:37:59
and more prevalent, right? as AI systems

01:37:56 --> 01:38:01
tart being deployed in pretty mission

01:37:58 --> 01:38:02
critical industries like defense we

01:38:00 --> 01:38:07
talked about you know healthcare and so

01:38:01 --> 01:38:10
n that in fact the there's an argument

01:38:06 --> 01:38:15
o be made that these systems should

01:38:09 --> 01:38:16
be closed source and evaluated in a

01:38:14 --> 01:38:18
fairly locked down environment as

01:38:15 --> 01:38:20
opposed to being openly tested in this

01:38:17 --> 01:38:22
manner and this is actually

01:38:19 --> 01:38:23
irresponsible how do you think about

01:38:21 --> 01:38:26
hat cultural tension listen I'm not an

01:38:22 --> 01:38:28
expert in national security but I think

01:38:25 --> 01:38:30
an evaluation platform like ours has

01:38:27 --> 01:38:31
many different ways of being used. If

01:38:29 --> 01:38:33
they want to evaluate it publicly, they

01:38:30 --> 01:38:35
can. If they need a private deployment,

01:38:32 --> 01:38:36
we can probably also do that for them.

01:38:34 --> 01:38:38
You know, it just depends on the sort of

01:38:35 --> 01:38:41
level of national security risk, which

01:38:37 --> 01:38:42
is way above my pay grade. But um for

01:38:40 --> 01:38:43
any of these things, you're going to

01:38:41 --> 01:38:45
need sort of these subjective

01:38:42 --> 01:38:46
communitydriven evaluations. That's for

01:38:44 --> 01:38:48
sure. If things are going to be deployed

01:38:45 --> 01:38:50
in the real world, you're going to need

01:38:47 --> 01:38:53
real people testing them. Yeah. And also

01:38:49 --> 01:38:56
like there's a point when you develop

01:38:52 --> 01:38:59
the model and this model is going to be

01:38:55 --> 01:39:04
used by broadly the public there has to

01:38:58 --> 01:39:06
be like a phase of testing it right and

01:39:03 --> 01:39:09
then we're trying to what we are

01:39:05 --> 01:39:14
building is like you know to bridge this

01:39:08 --> 01:39:16
gap between the lab building something

01:39:13 --> 01:39:20
that's like you know the latest the

01:39:16 --> 01:39:23
frontier research and the world would

01:39:19 --> 01:39:25
use it as a large, right? You need an

01:39:22 --> 01:39:28
environment for you to test in a in a in

01:39:24 --> 01:39:31
a sense that it's a more controlled

01:39:27 --> 01:39:33
environment with uh the people that you

01:39:30 --> 01:39:34
know the distribution you want to custom

01:39:32 --> 01:39:38
ize, you want to understand the

01:39:33 --> 01:39:41
preference there there there's a need uh

01:39:37 --> 01:39:42
for a platform like this to exist and we

01:39:40 --> 01:39:44
want to serve it. Yeah. Could you talk a

01:39:41 --> 01:39:46
little bit a little bit about Red Team

01:39:43 --> 01:39:49
Arena? Yeah. So for example this real

01:39:45 --> 01:39:51
world testing idea of arena can be

01:39:48 --> 01:39:54
applied to many different application

01:39:50 --> 01:39:57
like we discussed right from chatbot to

01:39:53 --> 01:40:01
web to different modality image that

01:39:56 --> 01:40:04
kind of stuff and as well as red teaming

01:40:00 --> 01:40:07
because retiming at its core is like you

01:40:03 --> 01:40:11
know a bunch of people try to drreak the

01:40:06 --> 01:40:15
models to see if it's you know really

01:40:10 --> 01:40:17
faithfully following what the uh the the

01:40:14 --> 01:40:21
model has been like instructed to do

01:40:16 --> 01:40:24
r graded to do, right? So these days uh

01:40:20 --> 01:40:25
many frontier labs been publishing kind

01:40:23 --> 01:40:29
of like models back that kind of idea

01:40:24 --> 01:40:31
like how model should behave uh in this

01:40:28 --> 01:40:33
way in that weight right and then but

01:40:30 --> 01:40:36
how do you make sure model follow that

01:40:32 --> 01:40:38
instructions you need real world testing

01:40:35 --> 01:40:41
again you need uh red teaming you need a

01:40:37 --> 01:40:46
group of people knowledgeable in this

01:40:40 --> 01:40:49
pace to uh to help right so again this

01:40:45 --> 01:40:52
can be communitydriven too because

01:40:48 --> 01:40:54
there's a group of you know vibrant

01:40:51 --> 01:40:58
community of job breakers they want to

01:40:54 --> 01:40:59
help and then they wanted to also like

01:40:57 --> 01:41:01
they want they tested for fun as well

01:40:58 --> 01:41:03
ike so in red team arena we have a

01:41:00 --> 01:41:05
leaderboard not just for model but for

01:41:02 --> 01:41:07
user for jawbreaker who is the best

01:41:04 --> 01:41:11
jawbreakers

01:41:06 --> 01:41:14
uh that can like identify issues uh for

01:41:10 --> 01:41:16
all different models. So that very

01:41:13 --> 01:41:18
particular that very you know idea of

01:41:15 --> 01:41:20
real world testing still apply here and

01:41:17 --> 01:41:23
then still can deliver value to the

01:41:19 --> 01:41:24
cosystem that we believe. So is it fair

01:41:22 --> 01:41:28
to

01:41:23 --> 01:41:31
say that if I wanted to understand the

01:41:27 --> 01:41:34
security or the safety sort of uh risks

01:41:30 --> 01:41:35
in a model I could go to red team arena

01:41:33 --> 01:41:38
nd look at the

01:41:34 --> 01:41:41
val the the models are generating over

01:41:37 --> 01:41:42
there. H how how does red team marina

01:41:40 --> 01:41:44
ctually work in practice to improve the

01:41:41 --> 01:41:47
security and reliability of these

01:41:43 --> 01:41:50
models? Yeah, for sure. So I think same

01:41:46 --> 01:41:54
as how we understand chatbot that that

01:41:49 --> 01:41:56
kind of thing there will be many many

01:41:53 --> 01:41:57
different applications people are trying

01:41:55 --> 01:42:00
to build on top of the models right

01:41:56 --> 01:42:01
hat's a custom service customer

01:41:59 --> 01:42:06
services

01:42:00 --> 01:42:08
or like you know retriever systems that

01:42:05 --> 01:42:10
kind of stuff right you want model to

01:42:07 --> 01:42:14
behave in certain way and you want

01:42:09 --> 01:42:18
control right uh and then in red team

01:42:13 --> 01:42:20
arena Now the idea will be like why

01:42:17 --> 01:42:22
don't we build an environment to

01:42:19 --> 01:42:23
simulate that applications. So for

01:42:21 --> 01:42:27
example, can we build an environment to

01:42:22 --> 01:42:30
simulate customer services where you

01:42:26 --> 01:42:33
know the model is instructed to not give

01:42:29 --> 01:42:35
certain not not take certain actions and

01:42:32 --> 01:42:37
then if you are as a job breaker trying

01:42:34 --> 01:42:40
to break the model right so that kind of

01:42:36 --> 01:42:42
like signals that we will be getting in

01:42:39 --> 01:42:45
terms of like real world testing job

01:42:41 --> 01:42:46
reaking will be reflective to the

01:42:44 --> 01:42:48
particular use cases that people care.

01:42:45 --> 01:42:50
By the way, Red Team Arena right now is

01:42:47 --> 01:42:51
till a little bit of a prototype. We're

01:42:49 --> 01:42:53
continuing to work on it, but it's

01:42:50 --> 01:42:55
interesting to see, you know, people

01:42:52 --> 01:42:59
can, it's not necessarily the model

01:42:54 --> 01:43:01
that's like most like refuses the most

01:42:58 --> 01:43:03
o answer these like queries that people

01:43:00 --> 01:43:06
ask necessarily better. Some people want

01:43:02 --> 01:43:07
a model that's more controllable. Some

01:43:05 --> 01:43:08
want a model that's going to say

01:43:06 --> 01:43:09
whatever they want. Some people want a

01:43:07 --> 01:43:12
model that's going to be completely safe

01:43:08 --> 01:43:14
and you can use it, you know, PG-13 or,

01:43:11 --> 01:43:16
you know, rated G. You know, that's

01:43:13 --> 01:43:19
okay as long as people have the

01:43:15 --> 01:43:19
choice.

01:43:20 --> 01:43:26
So as we start to wrap up here, you

01:43:21 --> 01:43:28
know, one question that a lot of people

01:43:25 --> 01:43:30
ask is what what does the world look

01:43:27 --> 01:43:33
like, especially the world of evaluation

01:43:29 --> 01:43:35
and testing as we go from a pre-training

01:43:32 --> 01:43:37
world to a post-training world in a

01:43:34 --> 01:43:40
world of models to

01:43:36 --> 01:43:41
agents, right? In some sense, it seems

01:43:39 --> 01:43:42
like you guys were actually a little bit

01:43:40 --> 01:43:44
ahead of the curve where Arena has

01:43:41 --> 01:43:47
always been an environment for agents

01:43:44 --> 01:43:52
more than, you know, a set of static

01:43:46 --> 01:43:54
evals. So, as as people start as as

01:43:51 --> 01:43:56
agents get better at long horizon tasks

01:43:53 --> 01:43:58
and tool calling and so on, this future

01:43:55 --> 01:44:00
where a ton of work in the economy is

01:43:57 --> 01:44:03
done largely by, you know, fully

01:43:59 --> 01:44:05
endto-end automated systems.

01:44:02 --> 01:44:09
Does does Arena have to change in any

01:44:04 --> 01:44:10
fundamental way for that future or does

01:44:08 --> 01:44:12
it largely look the same? Yeah, I think

01:44:09 --> 01:44:14
as we've been talking about what's the

01:44:11 --> 01:44:16
fundamental the fundamental is organic

01:44:13 --> 01:44:18
real world testing with feedback. That's

01:44:15 --> 01:44:19
not going to change. I can tell you that

01:44:17 --> 01:44:21
is not going to change. Will we

01:44:18 --> 01:44:22
have to adapt the UI? Yes. Will we have

01:44:20 --> 01:44:23
to improve the product? Yes. Will we

01:44:21 --> 01:44:25
have to launch new products for

01:44:22 --> 01:44:27
evaluation? Yes. Will we have to develop

01:44:24 --> 01:44:30
new methodology? Yes. Does the

01:44:26 --> 01:44:32
fundamentals change? I think no. I think

01:44:29 --> 01:44:34
the reality is if you want to test your

01:44:31 --> 01:44:36
model for real world use, you have to

01:44:33 --> 01:44:38
subject it to real world use to collect

01:44:35 --> 01:44:40
feedback from real world use and that's

01:44:37 --> 01:44:41
it. So we're really excited about what

01:44:39 --> 01:44:43
he future has to hold there. You know,

01:44:40 --> 01:44:45
we don't actually even know ourselves

01:44:42 --> 01:44:47
where the product is going to evolve

01:44:44 --> 01:44:49
over the next 5 to 10 years, right? The

01:44:46 --> 01:44:51
cosystem is moving so quickly, but

01:44:48 --> 01:44:54
wherever it goes, you know, we're

01:44:50 --> 01:44:59
xcited to follow. Yep. Awesome. Thanks,

01:44:53 --> 01:44:59
guys. Thank you. Thank you.

<!-- YOUTUBE_TRANSCRIPT_END -->
