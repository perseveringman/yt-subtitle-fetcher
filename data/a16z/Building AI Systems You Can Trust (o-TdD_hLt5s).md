---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "o-TdD_hLt5s"
title: "Building AI Systems You Can Trust"
video_url: "https://www.youtube.com/watch?v=o-TdD_hLt5s"
thumbnail_url: "https://i.ytimg.com/vi/o-TdD_hLt5s/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=o-TdD_hLt5s"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-05-23T14:01:19.000Z"
upload_date: "2025-05-23"
duration_seconds: 2748
duration_human: "45:48"
view_count: 3397
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:49:37.644Z"
---

# Building AI Systems You Can Trust

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=o-TdD_hLt5s
- video_id: o-TdD_hLt5s
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-05-23T14:01:19.000Z
- upload_date: 2025-05-23
- duration: 45:48
- view_count: 3397
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode of AI + a16z, Distributional cofounder and CEO Scott Clark, and a16z partner Matt Bornstein, explore why building trust in AI systems matters more than just optimizing performance metrics. From understanding the hidden complexities of generative AI behavior to addressing the challenges of reliability and consistency, they discuss how to confidently deploy AI in production. 

Why is trust becoming a critical factor in enterprise AI adoption? How do traditional performance metrics fail to capture crucial behavioral nuances in generative AI systems? Scott and Matt dive into these questions, examining non-deterministic outcomes, shifting model behaviors, and the growing importance of robust testing frameworks. 

Among other topics, they cover: 

- The limitations of conventional AI evaluation methods and the need for behavioral testing. 
- How centralized AI platforms help enterprises manage complexity and ensure responsible AI use. 
- The rise of "shadow AI" and its implications for security and compliance. 
- Practical strategies for scaling AI confidently from prototypes to real-world applications.

00:01:00 - What is machine learning?
00:02:20 - The journey from tuning parameters to testing reliability
00:08:05 - Building production AI systems then and now
00:12:37 - Establishing trust in AI systems
00:17:18 - Centralization, platforms, and enterprise IT management
00:26:47 - Scaling AI usage in production 
00:30:53 - How and why to test enterprise AI systems
00:38:10 - Cost management, tech debt, and prompt hygiene
00:41:44 - AI labs and enterprise users: Who influences who?

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
After helping people optimize models for

00:00:02 --> 00:00:06
about a decade and a half, I came to a

00:00:03 --> 00:00:08
really interesting realization that I

00:00:05 --> 00:00:10
was solving the wrong problem. And

00:00:07 --> 00:00:13
foundationally, it was that the thing

00:00:09 --> 00:00:15
that's holding back people getting value

00:00:12 --> 00:00:17
from these AI systems is not

00:00:14 --> 00:00:19
performance. It's not about squeezing

00:00:16 --> 00:00:21
out that last half a percent from some

00:00:18 --> 00:00:23
val function or some performance

00:00:20 --> 00:00:25
metric. It's about being able to

00:00:22 --> 00:00:27
confidently trust these systems. And I

00:00:24 --> 00:00:29
can't tell you how many times over the

00:00:26 --> 00:00:31
decades we would help someone optimize a

00:00:28 --> 00:00:34
system and they would say, "Okay, but

00:00:30 --> 00:00:36
what did you break? What bad behaviors

00:00:33 --> 00:00:38
are you introducing? What lack of

00:00:35 --> 00:00:40
robustness do I now have because I've

00:00:37 --> 00:00:42
overfit this system?" And we're seeing

00:00:40 --> 00:00:45
people do the exact same thing again

00:00:41 --> 00:00:48
today with LLMs where they're focusing

00:00:44 --> 00:00:50
on these highlevel metrics, these end

00:00:47 --> 00:00:52
outputs, these performance evals. And

00:00:49 --> 00:00:55
that ends up masking all of these

00:00:51 --> 00:00:58
potentially undesired behaviors within

00:00:54 --> 00:00:58
the system itself.

00:01:03 --> 00:01:08
So, so can you just define for us what's

00:01:05 --> 00:01:09
machine learning? What's AI? like as

00:01:07 --> 00:01:11
omeone who's who's lived through you

00:01:08 --> 00:01:13
know the ups and downs of this market. I

00:01:10 --> 00:01:15
remember answering a similar question I

00:01:12 --> 00:01:17
think on an A16 podcast maybe eight

00:01:14 --> 00:01:20
years ago. All right. Can maybe we can

00:01:16 --> 00:01:21
pop in the old right here. And uh I

00:01:19 --> 00:01:22
think the answer is somewhat the same

00:01:20 --> 00:01:24
like machine learning is the stuff

00:01:21 --> 00:01:26
that's now become easy and then AI is

00:01:23 --> 00:01:29
all the fun new stuff and then as soon

00:01:25 --> 00:01:30
as it stops becoming the the cutting

00:01:28 --> 00:01:32
edge then it just becomes oh that's just

00:01:30 --> 00:01:34
machine learning. It's not it's not

00:01:31 --> 00:01:35
magic anymore. It's not magic anymore.

00:01:33 --> 00:01:37
And uh I mean you can go all the way

00:01:34 --> 00:01:39
back to the the old like Dartmouth

00:01:36 --> 00:01:42
conference and things like that of like

00:01:38 --> 00:01:43
oh spellch check is AI because that's an

00:01:41 --> 00:01:45
untractable problem but I don't think

00:01:42 --> 00:01:47
anybody would constitute that as AI

00:01:44 --> 00:01:49
today. Now, of course, with generative

00:01:46 --> 00:01:51
AI, I think one of the big differences

00:01:48 --> 00:01:52
is instead of these systems being

00:01:50 --> 00:01:55
focused on just kind of like

00:01:52 --> 00:01:57
classification or regression trying to

00:01:54 --> 00:01:59
determine, yeah, whether something

00:01:56 --> 00:02:02
exists in a set or what the next element

00:01:58 --> 00:02:05
should be, now they're actually much

00:02:01 --> 00:02:07
more interactive and like the types of

00:02:04 --> 00:02:08
applications, the types of ways that you

00:02:06 --> 00:02:12
can use these systems becoming so much

00:02:08 --> 00:02:13
larger because I mean gen is in the the

00:02:11 --> 00:02:15
generative aspect of them is in the

00:02:12 --> 00:02:16
name, but um that's fundamentally

00:02:14 --> 00:02:18
totally different I think and I think

00:02:15 --> 00:02:21
that's opened this whole new wave of

00:02:17 --> 00:02:21
value uh for

00:02:22 --> 00:02:29
enterprises it starts about 10 or 15

00:02:25 --> 00:02:31
years ago with uh my first startup SIGOP

00:02:28 --> 00:02:33
that company was based off of my PhD

00:02:30 --> 00:02:36
research and it was all about how we

00:02:32 --> 00:02:37
help companies optimize AI systems so

00:02:35 --> 00:02:39
how do you get a little bit more

00:02:36 --> 00:02:42
performance out of a very sophisticated

00:02:38 --> 00:02:44
model and so this is in the sort of

00:02:41 --> 00:02:46
traditional machine learning days right

00:02:43 --> 00:02:48
exactly This was all traditional

00:02:45 --> 00:02:51
firstwave ML and AI. The definition of

00:02:48 --> 00:02:53
AI has obviously shifted over the last

00:02:50 --> 00:02:56
decade or so, but it was yeah tuning XG

00:02:52 --> 00:02:57
boost models, tuning like comp nets,

00:02:55 --> 00:02:59
tuning reinforcement learning

00:02:56 --> 00:03:01
algorithms, that sort of thing. But it

00:02:58 --> 00:03:03
was all about how do I tune all the

00:03:00 --> 00:03:05
different parameters and now of course

00:03:02 --> 00:03:07
these parameters still exist with

00:03:04 --> 00:03:09
temperature and different ways that you

00:03:06 --> 00:03:12
can segment various aspects of these

00:03:08 --> 00:03:13
foundational models. But it was all

00:03:11 --> 00:03:15
about how do I get this peak

00:03:12 --> 00:03:16
performance? And we did this for about a

00:03:14 --> 00:03:19
decade and ended up selling the company

00:03:16 --> 00:03:22
to Intel in 2020 where I led the AI and

00:03:18 --> 00:03:24
HPC division for their supercomputing

00:03:21 --> 00:03:26
roup. And after helping people optimize

00:03:23 --> 00:03:28
models for about a decade and a half, I

00:03:25 --> 00:03:30
came to a really interesting realization

00:03:27 --> 00:03:32
that I was solving the wrong problem.

00:03:29 --> 00:03:34
And foundationally, it was that the

00:03:31 --> 00:03:37
thing that's holding back people getting

00:03:33 --> 00:03:39
value from these AI systems is not

00:03:36 --> 00:03:41
performance. It's not about squeezing

00:03:38 --> 00:03:43
out that last half a percent from some

00:03:40 --> 00:03:44
val function or some performance

00:03:42 --> 00:03:47
metric. It's about being able to

00:03:44 --> 00:03:49
confidently trust these systems. And I

00:03:46 --> 00:03:51
can't tell you how many times over the

00:03:48 --> 00:03:54
decades of working with SIGOP and all

00:03:50 --> 00:03:55
going all the way back to my PhD, we

00:03:53 --> 00:03:57
would help someone optimize a system and

00:03:54 --> 00:04:00
they would say, "Okay, well, what did

00:03:56 --> 00:04:02
you break?" Like, "What bad behaviors

00:03:59 --> 00:04:04
are you introducing? What lack of

00:04:01 --> 00:04:07
robustness do I now have because I've

00:04:04 --> 00:04:08
overfit this system?" And we're seeing

00:04:06 --> 00:04:11
people do the exact same thing again

00:04:07 --> 00:04:14
today with LLMs where they're focusing

00:04:10 --> 00:04:16
on these highlevel metrics, these end

00:04:13 --> 00:04:18
outputs, these performance evals, and

00:04:16 --> 00:04:21
that ends up masking all of these

00:04:17 --> 00:04:23
potentially undesired behaviors within

00:04:20 --> 00:04:26
the system itself. But it's really a

00:04:22 --> 00:04:28
much harder problem because instead of

00:04:25 --> 00:04:31
just having a binary output, now you

00:04:27 --> 00:04:33
have maybe more free form text. Maybe

00:04:30 --> 00:04:35
you have an agentic system that can do

00:04:32 --> 00:04:39
all of these different things. and

00:04:34 --> 00:04:41
behavior matters more now than ever. But

00:04:38 --> 00:04:43
here aren't great systems out there to

00:04:40 --> 00:04:44
help you understand, define, and test

00:04:42 --> 00:04:46
hese systems. And that's really what

00:04:43 --> 00:04:48
distributional is aimed to do. It's

00:04:45 --> 00:04:50
trying to attack this problem of

00:04:47 --> 00:04:53
confidence through testing instead of

00:04:49 --> 00:04:55
just optimization through performance

00:04:52 --> 00:04:56
like Sidop was. You were managing a

00:04:54 --> 00:04:58
pretty large team at Intel, right? And

00:04:55 --> 00:05:00
and managing a pretty large customer

00:04:57 --> 00:05:02
base. Was was that part of what kind of

00:04:59 --> 00:05:04
helped you see a different form of this

00:05:01 --> 00:05:07
problem? Definitely. That was a big jump

00:05:03 --> 00:05:09
from managing a team of about 25 when we

00:05:06 --> 00:05:11
re acquired by Intel to to leading a

00:05:08 --> 00:05:13
team of about 200 by the time I left

00:05:10 --> 00:05:15
Intel. I got to see problems at a higher

00:05:12 --> 00:05:16
level and I got to start to see some of

00:05:14 --> 00:05:20
the things that some of our customers

00:05:15 --> 00:05:21
now are frustrated with where yes, it's

00:05:19 --> 00:05:23
great to build these models. Yes, it's

00:05:20 --> 00:05:25
great to have them be performant and

00:05:22 --> 00:05:26
things like that. But at the end of the

00:05:24 --> 00:05:28
day, if you're responsible to your

00:05:25 --> 00:05:31
customers, whether they be internal or

00:05:27 --> 00:05:34
external, you care about reliability.

00:05:30 --> 00:05:36
you care about consistency and we kept

00:05:33 --> 00:05:38
running into problems there and I mean

00:05:35 --> 00:05:40
people are running into this problem

00:05:37 --> 00:05:43
across the Fortune 500 and global 2000

00:05:39 --> 00:05:46
today of okay how do I sleep at night

00:05:42 --> 00:05:48
effectively and I couldn't find a good

00:05:45 --> 00:05:51
solution when I was at Intel I couldn't

00:05:47 --> 00:05:54
figure out a way to outsource this and

00:05:50 --> 00:05:55
so like any good entrepreneur if you

00:05:53 --> 00:05:58
have a problem and then you see it's a

00:05:54 --> 00:06:00
very pervasive problem you can't see the

00:05:57 --> 00:06:01
solution you go try to build it yourself

00:05:59 --> 00:06:03
and it's been really exciting to do that

00:06:00 --> 00:06:05
again the second time again taking all

00:06:02 --> 00:06:08
of those past learnings all those past

00:06:04 --> 00:06:10
mistakes made a ton of mistakes as just

00:06:07 --> 00:06:11
a naive PhD student trying to build a

00:06:09 --> 00:06:12
company I won't force you to go through

00:06:10 --> 00:06:14
the mistakes that you made maybe maybe

00:06:11 --> 00:06:15
that's for a follow-up podcast we'll

00:06:13 --> 00:06:17
need a we'll need a handful of podcasts

00:06:14 --> 00:06:19
to to enumerate all of those but now we

00:06:16 --> 00:06:22
get to do it again and now make all new

00:06:18 --> 00:06:24
mistakes 10 times faster

00:06:21 --> 00:06:27
we work with a lot of founders who cycle

00:06:23 --> 00:06:29
through focus areas very quickly which

00:06:26 --> 00:06:31
can be great that's a great way to to

00:06:28 --> 00:06:33
sort of find product market fit I I

00:06:30 --> 00:06:35
think your

00:06:32 --> 00:06:36
persistence, you know, is rare in a

00:06:34 --> 00:06:40
sense where actually spanning three

00:06:36 --> 00:06:42
companies, you've sort of worked on a a

00:06:39 --> 00:06:44
similar core problem and you're you're

00:06:41 --> 00:06:46
just really almost obsessed with finding

00:06:43 --> 00:06:48
the right way to solve it. What was it

00:06:45 --> 00:06:50
like to sort of have this light bulb

00:06:47 --> 00:06:51
moment where you're like, "Oh crap, I

00:06:49 --> 00:06:53
wasted, you know, x years doing the

00:06:50 --> 00:06:55
wrong form of this." Or is it like, "Oh

00:06:52 --> 00:06:57
my god, this is so exciting. Like, I

00:06:54 --> 00:06:58
finally found the the right angle on

00:06:56 --> 00:06:59
this problem." Or can you just talk a

00:06:57 --> 00:07:01
little personally what that was like for

00:06:58 --> 00:07:03
you? Yeah, I think it's more of the

00:07:00 --> 00:07:06
latter. And one of the joys of being

00:07:02 --> 00:07:08
persistent uh for for better or worse is

00:07:05 --> 00:07:09
that it allows us to really empathize

00:07:07 --> 00:07:12
with the people who are building these

00:07:08 --> 00:07:15
systems. And we've been able to work

00:07:11 --> 00:07:18
with people doing machine learning, AI

00:07:14 --> 00:07:21
for the better half of a decade or more

00:07:17 --> 00:07:22
now. And we we get to see a lot of the

00:07:20 --> 00:07:24
same patterns, a lot of the same

00:07:21 --> 00:07:28
systems, a lot of the same mistakes

00:07:23 --> 00:07:30
being made. and we get to to help them

00:07:27 --> 00:07:31
do a little bit better, do a little bit

00:07:29 --> 00:07:33
more. That's really been one of the

00:07:30 --> 00:07:35
thos of both SIGOP and now

00:07:32 --> 00:07:38
distributional. It's about building

00:07:34 --> 00:07:40
tools to allow these domain experts to

00:07:37 --> 00:07:43
do their expertise better, to do it more

00:07:39 --> 00:07:44
confidently, to really not have to worry

00:07:42 --> 00:07:46
about some of the things that they know

00:07:43 --> 00:07:48
they should be worried about and really

00:07:45 --> 00:07:51
focus on where they can apply their

00:07:48 --> 00:07:53
expertise to make something great. And

00:07:50 --> 00:07:54
it's been great to be able to work with

00:07:52 --> 00:07:56
onestly a lot of the same types of

00:07:54 --> 00:08:00
people. A lot of the people who are now

00:07:56 --> 00:08:01
in charge of building Genai platforms or

00:07:59 --> 00:08:03
productionizing these massive use cases

00:08:00 --> 00:08:06
are the same people who built those

00:08:02 --> 00:08:06
original machine learning

00:08:07 --> 00:08:12
systems. I think one of the main

00:08:09 --> 00:08:15
distinctions

00:08:11 --> 00:08:18
is how atomic some of these units maybe

00:08:14 --> 00:08:21
are. And so with a lot of traditional ML

00:08:17 --> 00:08:24
and AI, it was all about can I make a

00:08:20 --> 00:08:25
specific decision? Can I make a yes no

00:08:23 --> 00:08:27
decision on whether or not I have a

00:08:24 --> 00:08:29
loan? Can I make a specific prediction?

00:08:26 --> 00:08:31
Do I know which direction the stock is

00:08:28 --> 00:08:33
going to go in the next minute or

00:08:30 --> 00:08:37
something like that? And with generative

00:08:32 --> 00:08:40
AI, it becomes much more collaborative

00:08:36 --> 00:08:42
and it's much more expansive in what it

00:08:39 --> 00:08:43
can actually do. from literally just

00:08:41 --> 00:08:45
being able to have a conversation with

00:08:42 --> 00:08:48
it to some of these agentic systems that

00:08:44 --> 00:08:51
we're seeing come up where now you have

00:08:47 --> 00:08:53
a model calling a model calling an MCP

00:08:50 --> 00:08:56
server calling a model making a decision

00:08:52 --> 00:08:58
and these pipelines have always existed

00:08:55 --> 00:09:01
but the kind of endto-end nature of them

00:08:57 --> 00:09:04
and how handsoff they can be how

00:09:00 --> 00:09:06
dependent they can be on internal of

00:09:03 --> 00:09:08
these internal components and how some

00:09:05 --> 00:09:09
of these behaviors can propagate through

00:09:07 --> 00:09:12
the system I think is fundamentally

00:09:08 --> 00:09:14
different from the more atomic like

00:09:11 --> 00:09:17
unit-based almost micros service aspect

00:09:13 --> 00:09:20
of traditional ML and AI systems. So I

00:09:16 --> 00:09:22
guess what does that mean if for like a

00:09:19 --> 00:09:24
product owner what what do they kind of

00:09:21 --> 00:09:26
worry about once something goes to prod

00:09:23 --> 00:09:28
in kind of new AI land versus

00:09:25 --> 00:09:30
traditional machine learning land? Yeah.

00:09:27 --> 00:09:32
So I think some of the concerns are the

00:09:29 --> 00:09:33
same in the sense that they want these

00:09:31 --> 00:09:35
systems to be performant. They have to

00:09:32 --> 00:09:37
do better than whatever the status quo

00:09:34 --> 00:09:39
is today. whether that's a human or

00:09:36 --> 00:09:40
whether that's a traditional machine

00:09:38 --> 00:09:42
learning and AI system. But

00:09:39 --> 00:09:45
fundamentally again and this is the

00:09:41 --> 00:09:47
learning that I I got after doing this

00:09:44 --> 00:09:49
for such a long time focused squarely on

00:09:46 --> 00:09:51
optimization is it's more than just

00:09:48 --> 00:09:53
performance too. It's this behavior of

00:09:50 --> 00:09:56
these systems and it's making sure that

00:09:52 --> 00:09:58
not only does it hit whatever KPI you

00:09:55 --> 00:10:00
want it to do but it also doesn't do the

00:09:57 --> 00:10:03
bad thing. It doesn't have some sort of

00:09:59 --> 00:10:04
undesired behavior. And that undesired

00:10:02 --> 00:10:06
behavior could be I just don't want it

00:10:03 --> 00:10:09
o change dramatically without me

00:10:05 --> 00:10:11
knowing or it could be that I explicitly

00:10:08 --> 00:10:13
don't want it to exhibit a specific bias

00:10:10 --> 00:10:16
or a specific type of

00:10:12 --> 00:10:19
response. And I think the main thing

00:10:15 --> 00:10:22
that's shifted though is just how large

00:10:18 --> 00:10:25
that output space can be. There's really

00:10:21 --> 00:10:28
three main things that make it difficult

00:10:24 --> 00:10:31
o quantify and understand the behavior

00:10:27 --> 00:10:33
of these AI systems. And one is that

00:10:30 --> 00:10:35
hey're inherently non-deterministic.

00:10:32 --> 00:10:37
And so this is true of some traditional

00:10:34 --> 00:10:39
machine learning and AI systems as well.

00:10:36 --> 00:10:41
But basically the idea here is the same

00:10:38 --> 00:10:43
question can get you different answers.

00:10:40 --> 00:10:44
And this non-determinism isn't just that

00:10:42 --> 00:10:46
he exact same question can get you

00:10:43 --> 00:10:48
different answers, but it can also be a

00:10:45 --> 00:10:50
very chaotic system where like slightly

00:10:47 --> 00:10:53
different questions can get you very

00:10:49 --> 00:10:54
different answers. Another aspect of

00:10:52 --> 00:10:57
this is that they're inherently

00:10:53 --> 00:10:58
non-stationary. And so they're literally

00:10:56 --> 00:11:01
shifting underneath you. And this can be

00:10:57 --> 00:11:03
cause your LLM provider decided to

00:11:00 --> 00:11:06
change their infrastructure and then

00:11:02 --> 00:11:08
that changes the way that memory is

00:11:05 --> 00:11:10
accessed which for some reason changes

00:11:07 --> 00:11:12
the the types of responses. Or it can be

00:11:09 --> 00:11:15
cause maybe upstream of your

00:11:11 --> 00:11:17
application somebody added more things

00:11:14 --> 00:11:19
to your vector database or they changed

00:11:16 --> 00:11:21
the retrieval prompt or they changed

00:11:18 --> 00:11:23
something else. These systems are

00:11:20 --> 00:11:25
constantly shifting underneath you when

00:11:22 --> 00:11:27
it comes to a product perspective. And

00:11:24 --> 00:11:29
this gets to this third component of the

00:11:26 --> 00:11:31
complexity of these systems is just

00:11:28 --> 00:11:33
getting larger and larger. Again,

00:11:30 --> 00:11:35
they're no longer these atomic units

00:11:32 --> 00:11:37
where you're just getting a single yes

00:11:34 --> 00:11:39
no answer out of them. It can be these

00:11:36 --> 00:11:41
systems where yeah, you're retrieving

00:11:38 --> 00:11:43
and then you're generating a response

00:11:40 --> 00:11:44
and then that response is being fed into

00:11:42 --> 00:11:46
another system being fed into another

00:11:43 --> 00:11:49
system where maybe an autonomous

00:11:45 --> 00:11:52
decision is being made. And so some of

00:11:48 --> 00:11:54
those issues around non-determinism and

00:11:51 --> 00:11:56
non-stationary end up just propagating

00:11:53 --> 00:11:59
through that system. If it's chaotic at

00:11:56 --> 00:12:01
he beginning and chaotic at every step

00:11:58 --> 00:12:03
along the way, these very small changes

00:12:00 --> 00:12:05
to the input that were creating large

00:12:02 --> 00:12:08
changes to a single output can now

00:12:04 --> 00:12:10
create massive behavioral changes by the

00:12:07 --> 00:12:13
time it actually starts to affect an end

00:12:09 --> 00:12:15
user. And so it's really important and

00:12:12 --> 00:12:17
what I think a lot of firms are running

00:12:14 --> 00:12:19
into right now is if you're only looking

00:12:16 --> 00:12:21
at that last step, if you're only

00:12:18 --> 00:12:23
looking at the systems performance as a

00:12:20 --> 00:12:26
whole, it can be very difficult to

00:12:22 --> 00:12:28
understand when, where, and why

00:12:25 --> 00:12:30
behaviors are shifting within this

00:12:27 --> 00:12:33
application upstream and be able to use

00:12:29 --> 00:12:35
that information to adapt, make changes

00:12:32 --> 00:12:39
to your application, or understand

00:12:34 --> 00:12:39
exactly what's happening.

00:12:40 --> 00:12:47
I think we're pretty rapidly entering a

00:12:42 --> 00:12:48
world where trust in AI systems is even

00:12:46 --> 00:12:49
more important than their raw

00:12:47 --> 00:12:51
performance, right? Because these things

00:12:48 --> 00:12:53
are really good at doing a lot of

00:12:50 --> 00:12:55
different stuff. But how do how do users

00:12:52 --> 00:12:56
how do customers actually accept that?

00:12:54 --> 00:12:58
Is that sort of part of what of what

00:12:56 --> 00:12:59
you're talking about when you describe

00:12:57 --> 00:13:02
this problem? Yeah. And that trust can

00:12:58 --> 00:13:03
come in many different forms. It can be

00:13:01 --> 00:13:06
making sure it's reliable, making sure

00:13:02 --> 00:13:08
it's consistent, or even going so far as

00:13:05 --> 00:13:12
to say making sure that these kind of

00:13:07 --> 00:13:14
latent behaviors are aligned with my

00:13:11 --> 00:13:15
desires. And there's obviously a lot of

00:13:13 --> 00:13:17
great companies out there trying to

00:13:14 --> 00:13:20
solve this at the kind of AGI global

00:13:16 --> 00:13:22
evel. But for individual enterprises,

00:13:19 --> 00:13:25
you want these applications to also be

00:13:22 --> 00:13:27
aligned with your business, with the

00:13:24 --> 00:13:30
values of your business, with your

00:13:26 --> 00:13:31
individual goals, not just trying to

00:13:29 --> 00:13:33
squeeze out a little bit more

00:13:30 --> 00:13:35
click-through rate, a little bit more

00:13:32 --> 00:13:37
trieval performance or whatever. So,

00:13:34 --> 00:13:38
it's almost like the enterprise has to

00:13:36 --> 00:13:40
trust what the model or what the system

00:13:37 --> 00:13:42
is going to do in order for their

00:13:39 --> 00:13:43
customers to kind of trust them. Is is

00:13:41 --> 00:13:46
that sort of a fair way to think about

00:13:42 --> 00:13:48
it? Definitely. And like anything in

00:13:45 --> 00:13:49
life, it's important to trust, but also

00:13:47 --> 00:13:52
to verify. And that's where testing

00:13:48 --> 00:13:54
comes in because you do need to be able

00:13:51 --> 00:13:57
to to trust these systems. But you want

00:13:53 --> 00:14:00
a mechanism to be able to consistently,

00:13:56 --> 00:14:02
reliably, and adaptively verify that

00:13:59 --> 00:14:04
hey're doing this both as you're making

00:14:01 --> 00:14:06
changes, as the world changes underneath

00:14:03 --> 00:14:08
you, and as these models change as well.

00:14:05 --> 00:14:10
And and this is what you're doing at uh

00:14:07 --> 00:14:12
distributional, right? Definitely. So

00:14:09 --> 00:14:15
distributional is an enterprise platform

00:14:11 --> 00:14:17
to allow teams to test these

00:14:14 --> 00:14:20
applications in production to make sure

00:14:16 --> 00:14:23
that they are behaving as expected.

00:14:19 --> 00:14:26
Behavior for these applications ends up

00:14:22 --> 00:14:28
being not just what it produces but how

00:14:25 --> 00:14:30
it produces it. So it's all of these

00:14:27 --> 00:14:33
characteristics potentially of the text

00:14:29 --> 00:14:35
itself. So not just was this a good

00:14:32 --> 00:14:37
answer but maybe what was the toxicity

00:14:34 --> 00:14:39
of the answer? What was the reading

00:14:36 --> 00:14:41
level of the answer? what was the tone?

00:14:38 --> 00:14:43
How long was the answer? All of these

00:14:40 --> 00:14:46
just properties that can be

00:14:42 --> 00:14:49
characteristics of just the language

00:14:45 --> 00:14:51
itself, but if it's part of maybe a rag

00:14:48 --> 00:14:53
system too, it's like what was

00:14:50 --> 00:14:55
retrieved? Is how often is that what's

00:14:52 --> 00:14:57
being retrieved? What were the

00:14:54 --> 00:15:00
timestamps related to these individual

00:14:56 --> 00:15:01
documents? Was it starting to ignore

00:14:59 --> 00:15:04
things that it used to site all the time

00:15:00 --> 00:15:06
or vice versa? And as we start to get

00:15:03 --> 00:15:08
into these agentic systems and a lot of

00:15:05 --> 00:15:09
teams speak about this. I know Google's

00:15:07 --> 00:15:11
deep research team spoke about this

00:15:08 --> 00:15:13
recently. It's like well in the

00:15:10 --> 00:15:15
reasoning step how long did that take?

00:15:12 --> 00:15:17
How many reasoning steps did it take?

00:15:14 --> 00:15:20
All of these are characteristics for how

00:15:16 --> 00:15:23
the model is actually behaving on the

00:15:20 --> 00:15:25
way to that end answer on the way to

00:15:22 --> 00:15:26
that performance metric. And I

00:15:24 --> 00:15:28
definitely don't want to say that

00:15:25 --> 00:15:30
performance doesn't matter because it

00:15:27 --> 00:15:33
definitely does. And that's an aspect of

00:15:29 --> 00:15:34
behavior. You want good behavior. You

00:15:32 --> 00:15:36
want good performance, you want

00:15:33 --> 00:15:39
consistent performance, but it is

00:15:35 --> 00:15:43
fundamentally this very highlevel bit

00:15:38 --> 00:15:45
and it can mask all of these underlying

00:15:42 --> 00:15:47
latent behaviors that could have an

00:15:44 --> 00:15:49
effect on the system. And especially

00:15:46 --> 00:15:52
because these are inherently

00:15:48 --> 00:15:53
non-stationary and chaotic systems, you

00:15:51 --> 00:15:55
want to be able to catch those latent

00:15:52 --> 00:15:57
behaviors as quickly as possible. And

00:15:54 --> 00:15:59
some of them might actually turn out to

00:15:56 --> 00:16:01
be things that you want to be

00:15:58 --> 00:16:03
performance metrics. Much in the same

00:16:00 --> 00:16:05
way that with traditional machine

00:16:02 --> 00:16:07
learning, fraud detection, you want to

00:16:04 --> 00:16:09
be as accurate as

00:16:06 --> 00:16:11
possible. But by detecting that you have

00:16:08 --> 00:16:13
bias, maybe you want to factor that into

00:16:10 --> 00:16:15
your performance metric over time. And

00:16:12 --> 00:16:17
this is about adapting what that desired

00:16:14 --> 00:16:19
behavior over time as you learn more and

00:16:16 --> 00:16:20
more, too. Sounds like the first time I

00:16:18 --> 00:16:22
ever did a job interview. It's not just

00:16:20 --> 00:16:24
what you say, but how you say it.

00:16:21 --> 00:16:26
Exactly. and then what you do as well

00:16:23 --> 00:16:28
too because at the end of the day if you

00:16:25 --> 00:16:29
have a lawyer or something having a high

00:16:27 --> 00:16:30
score on the ELSAT's great but that

00:16:28 --> 00:16:31
doesn't tell you anything about how

00:16:29 --> 00:16:33
they're going to behave in the

00:16:30 --> 00:16:36
courtroom. So AI, you know, bedside

00:16:32 --> 00:16:37
manner or courtroom gravitas. And

00:16:35 --> 00:16:40
there's so many classic examples too

00:16:36 --> 00:16:41
from traditional ML and AI of and you'll

00:16:39 --> 00:16:43
remember some of these, I'm sure, too of

00:16:40 --> 00:16:45
you train a reinforcement learning

00:16:42 --> 00:16:48
algorithm to like pitch a baseball and

00:16:44 --> 00:16:49
it it decides that just running the

00:16:47 --> 00:16:51
baseball up to the catcher is the most

00:16:48 --> 00:16:52
effective way to do it. And you're like,

00:16:50 --> 00:16:54
well, okay, I did just tell you to get

00:16:51 --> 00:16:56
he ball in the mitt. You technically

00:16:54 --> 00:16:58
solved it, but that's not great. But

00:16:55 --> 00:16:59
even in these geni systems, like there's

00:16:57 --> 00:17:02
this classic example that came out

00:16:58 --> 00:17:03
recently of chess, or if you just tell

00:17:01 --> 00:17:05
it to win a chess game and you give it

00:17:02 --> 00:17:08
access to board state, it's going to

00:17:04 --> 00:17:10
rewrite the board state to win. And

00:17:07 --> 00:17:13
that's an example of a behavior where

00:17:10 --> 00:17:14
yes, if the performance metric was games

00:17:12 --> 00:17:20
won, it's got a great performance

00:17:13 --> 00:17:20
metric, but the behavior was it cheated.

00:17:21 --> 00:17:26
One thing that we've seen that's really

00:17:23 --> 00:17:29
interesting over the last year, year and

00:17:25 --> 00:17:32
a half is people have started to shift

00:17:28 --> 00:17:33
from kind of science project prototype

00:17:31 --> 00:17:35
land where they have a bunch of

00:17:32 --> 00:17:38
individual teams trying to roll their

00:17:34 --> 00:17:39
own stack and trying to like build

00:17:37 --> 00:17:42
everything that they need to get

00:17:38 --> 00:17:45
something out individually into starting

00:17:41 --> 00:17:46
to build more centralized platforms.

00:17:44 --> 00:17:49
This is again very similar to what we

00:17:45 --> 00:17:51
saw in the early ML and AI days where

00:17:48 --> 00:17:53
maybe every individual data scientist

00:17:50 --> 00:17:54
was like I'm going to spin up

00:17:52 --> 00:17:56
scikitlearn and I'm going to have all my

00:17:53 --> 00:17:58
data locally and I'm going to have some

00:17:55 --> 00:18:01
model that works incredibly well for

00:17:57 --> 00:18:02
apid prototyping and exploration. But

00:18:00 --> 00:18:04
when it comes to exploiting these models

00:18:02 --> 00:18:06
and really making sure that you can do

00:18:03 --> 00:18:08
it at scale, making sure that the

00:18:05 --> 00:18:10
organization can protect itself, can

00:18:07 --> 00:18:12
really leverage all of its resources,

00:18:09 --> 00:18:14
you want to have more centralized

00:18:11 --> 00:18:17
tooling. And so much in the same way

00:18:13 --> 00:18:19
that we saw the the rise of ML and AI

00:18:16 --> 00:18:21
platforms over the last decade, we're

00:18:18 --> 00:18:23
now starting to see the rise of these

00:18:20 --> 00:18:26
Gen AI platforms. And this has

00:18:22 --> 00:18:27
organizational benefits from again

00:18:25 --> 00:18:31
making sure you can scale, making sure

00:18:26 --> 00:18:33
you have like proper cost allocations,

00:18:30 --> 00:18:35
but it can also really tamp down on a

00:18:32 --> 00:18:37
lot of what we're hearing from CIOS and

00:18:34 --> 00:18:39
CTO's of kind of shadow AI. people

00:18:36 --> 00:18:41
calling models they shouldn't, feeding

00:18:38 --> 00:18:42
them things that they shouldn't,

00:18:40 --> 00:18:45
creating vulnerabilities that they

00:18:42 --> 00:18:48
shouldn't. And so this is the perfect

00:18:44 --> 00:18:50
kind of harness to start to do testing

00:18:47 --> 00:18:53
though as well too because once you have

00:18:49 --> 00:18:55
this centralized Genai platform, once

00:18:52 --> 00:18:58
you have a gateway or a router that's

00:18:54 --> 00:19:00
logging all of your API requests, all of

00:18:57 --> 00:19:02
your traces, etc.,

00:18:59 --> 00:19:04
testing can live on top of those logs,

00:19:01 --> 00:19:06
on top of that data store to give you

00:19:03 --> 00:19:08
this more holistic view across all of

00:19:05 --> 00:19:09
your applications. How are they

00:19:07 --> 00:19:12
behaving? Which ones are behaving

00:19:09 --> 00:19:15
differently? And provide that behavioral

00:19:12 --> 00:19:17
analysis and testing to the end

00:19:14 --> 00:19:19
eveloper for free as part of that

00:19:16 --> 00:19:22
platform. And so is this shadow IT

00:19:18 --> 00:19:24
problem worse with language models and

00:19:21 --> 00:19:27
generative AI compared to compared to

00:19:23 --> 00:19:28
the past? I would say so because

00:19:26 --> 00:19:30
verybody's doing it. You had to know

00:19:27 --> 00:19:32
hat scikitlearn is and you know exactly

00:19:29 --> 00:19:34
and it was a somewhat localized problem

00:19:31 --> 00:19:37
because like you're doing data science

00:19:33 --> 00:19:40
on your laptop versus now I'm just

00:19:36 --> 00:19:42
shipping off a secret IP to some SAS

00:19:39 --> 00:19:43
company or something like that and it's

00:19:41 --> 00:19:45
really easy to do it. You just need an

00:19:42 --> 00:19:47
API key basically. Exactly. I mean it's

00:19:44 --> 00:19:49
great that all these developer tools

00:19:46 --> 00:19:50
exist and they've made it really easy.

00:19:48 --> 00:19:52
The downside is they've made it really

00:19:49 --> 00:19:53
easy for people to do things they

00:19:51 --> 00:19:55
shouldn't do either. And I think a lot

00:19:52 --> 00:19:58
of organizations are starting to realize

00:19:54 --> 00:20:01
that. So, not only do you have kind of

00:19:57 --> 00:20:03
the the benefit of centralization and

00:20:00 --> 00:20:05
scaling and support and things like

00:20:02 --> 00:20:07
that, you're also mitigating the harm

00:20:04 --> 00:20:09
that sometimes is accidentally being

00:20:06 --> 00:20:12
done where it's like, oops, I guess our

00:20:08 --> 00:20:14
code base is now public or whatever it

00:20:11 --> 00:20:16
may be. So if I'm a technology executive

00:20:13 --> 00:20:20
at at a big company right now,

00:20:15 --> 00:20:22
experiencing this phenomenon of little

00:20:19 --> 00:20:23
AI projects popping up everywhere, some

00:20:21 --> 00:20:25
of them doing really well and actually

00:20:22 --> 00:20:27
becoming important parts of our

00:20:24 --> 00:20:29
business, what should I think about

00:20:26 --> 00:20:31
doing just practically speaking to kind

00:20:28 --> 00:20:32
of get my arms around this and what

00:20:30 --> 00:20:35
should I think about building to reach

00:20:32 --> 00:20:37
kind of like this target, you know,

00:20:34 --> 00:20:39
state of like platform nirvana. So, we

00:20:36 --> 00:20:40
see a lot of different variations of

00:20:38 --> 00:20:42
this to be honest across all the

00:20:39 --> 00:20:45
different companies that we're talking

00:20:41 --> 00:20:46
with or working with. And I'd say

00:20:44 --> 00:20:49
there's two things that they're trying

00:20:45 --> 00:20:52
to solve here. One is trying to make a

00:20:48 --> 00:20:54
platform be useful enough to basically

00:20:51 --> 00:20:56
draw in these people who are saying,

00:20:53 --> 00:20:58
"No, don't worry. I've got it covered.

00:20:55 --> 00:21:00
Like, I've built my own stack." And so,

00:20:57 --> 00:21:01
some of that is by providing value ad

00:20:59 --> 00:21:03
services. So, it's like we're going to

00:21:00 --> 00:21:04
take care of scaling for you. We're

00:21:02 --> 00:21:05
going to take care of cost optimization

00:21:03 --> 00:21:08
for you. we're going to take these

00:21:04 --> 00:21:10
things off your plate. And one of the

00:21:07 --> 00:21:11
things that they do is like, well, we'll

00:21:09 --> 00:21:14
build kind of a centralized router so

00:21:10 --> 00:21:15
you can access all of these great LLM

00:21:13 --> 00:21:17
models and we're going to basically

00:21:14 --> 00:21:19
create a store that you can switch

00:21:16 --> 00:21:21
between versions and models and things

00:21:18 --> 00:21:22
like that. We can centralize logging as

00:21:20 --> 00:21:24
part of this. So you don't have to deal

00:21:22 --> 00:21:28
with the fact that this is producing

00:21:24 --> 00:21:31
maybe a large number of logs. And on top

00:21:27 --> 00:21:33
of that too, you can provide testing. So

00:21:30 --> 00:21:35
now we can do this layer of making sure

00:21:32 --> 00:21:37
that you can detect and understand these

00:21:34 --> 00:21:39
underlying behaviors. And this is

00:21:36 --> 00:21:41
fundamentally different than the way a

00:21:38 --> 00:21:43
lot of people are rolling this today

00:21:40 --> 00:21:45
because if you're using one of these

00:21:42 --> 00:21:47
kind of all in one out of the box

00:21:44 --> 00:21:49
platforms focused on developers. They

00:21:46 --> 00:21:51
allow you to get going very quickly, but

00:21:48 --> 00:21:53
maybe they're not logging everything or

00:21:50 --> 00:21:54
maybe they have very rudimentary

00:21:52 --> 00:21:57
monitoring that is just looking at a

00:21:53 --> 00:21:58
handful of performance evals or they

00:21:56 --> 00:22:00
have the ability to kind of look at

00:21:57 --> 00:22:02
individual inputs and outputs and do

00:21:59 --> 00:22:04
hand annotations. But it's very

00:22:01 --> 00:22:06
difficult to do that at scale. And so

00:22:03 --> 00:22:08
for these technology executives, they

00:22:05 --> 00:22:12
need to be able to come up with this way

00:22:07 --> 00:22:14
to create this kind of uniform or lowest

00:22:11 --> 00:22:15
common denominator interface so that

00:22:13 --> 00:22:18
everybody can leverage it. But then they

00:22:14 --> 00:22:19
also have to provide that value ad and

00:22:17 --> 00:22:22
we're seeing this from a lot of

00:22:18 --> 00:22:23
executives to entice people to move onto

00:22:21 --> 00:22:25
that platform. I mean you made an

00:22:22 --> 00:22:26
interesting point about giving

00:22:24 --> 00:22:28
developers a reason to want to get onto

00:22:25 --> 00:22:30
the platform. Like if if I now switch to

00:22:27 --> 00:22:31
my developer hat it's like consume logs

00:22:29 --> 00:22:33
for me that sounds great. I don't know

00:22:30 --> 00:22:34
here to stick logs. Like test for me

00:22:32 --> 00:22:37
that sounds great. I don't like writing

00:22:33 --> 00:22:39
tests. Give me a store that somehow

00:22:36 --> 00:22:41
standardizes like the interface a bunch

00:22:38 --> 00:22:43
across a bunch of different LLMs. Like

00:22:40 --> 00:22:44
that sounds less good to me. It sounds

00:22:42 --> 00:22:46
like you're just like adding a layer

00:22:43 --> 00:22:48
between like the thing I actually want

00:22:45 --> 00:22:50
o use. Just practically speaking, like

00:22:47 --> 00:22:52
what what pieces often come first and

00:22:49 --> 00:22:53
like how do you actually do this if if

00:22:51 --> 00:22:55
like if this is your job? One of the

00:22:52 --> 00:22:58
first pieces that we see is this kind of

00:22:54 --> 00:23:00
gateway or router and some of it is less

00:22:57 --> 00:23:01
a value ad and more of a this is the

00:22:59 --> 00:23:04
only way we're going to let you access

00:23:00 --> 00:23:06
these things. It comes down to some of

00:23:03 --> 00:23:08
these models need to go through a GRC

00:23:05 --> 00:23:10
process. It's like, "We're going to let

00:23:07 --> 00:23:12
you use OpenAI, but we're not going to

00:23:09 --> 00:23:15
let you use hosted DeepSseek or

00:23:11 --> 00:23:17
something like that." And by

00:23:14 --> 00:23:19
centralizing that, they can then start

00:23:16 --> 00:23:21
o rein in some of the chaos. Here are

00:23:18 --> 00:23:23
the 30 different models that we do

00:23:20 --> 00:23:24
support and the 20 different versions of

00:23:22 --> 00:23:26
each that we do support. Oh, wow. So,

00:23:23 --> 00:23:27
you're seeing enterprises will actually

00:23:25 --> 00:23:28
support that because I was sort of

00:23:26 --> 00:23:29
picturing in my mind like you here are

00:23:27 --> 00:23:31
the two or three models you're allowed

00:23:28 --> 00:23:32
to use, but it sounds like you've seen

00:23:30 --> 00:23:33
one company may have 30 models

00:23:31 --> 00:23:36
available. People want to use the right

00:23:32 --> 00:23:37
ool for the job and different models,

00:23:35 --> 00:23:40
different versions have different

00:23:36 --> 00:23:42
radeoffs, different costs, uh different

00:23:39 --> 00:23:44
context windows, different rate limits,

00:23:41 --> 00:23:45
all these sorts of things. And we're

00:23:43 --> 00:23:47
also starting to see more and more

00:23:44 --> 00:23:50
people wanting to fine-tune or create

00:23:46 --> 00:23:52
SLMs or use more kind of static weight

00:23:49 --> 00:23:54
models as well too. And so it ends up

00:23:52 --> 00:23:58
being this difficult infrastructure

00:23:53 --> 00:24:00
problem of hosting against a handful of

00:23:57 --> 00:24:02
non-stationary APIs against a handful of

00:23:59 --> 00:24:05
internal models and things like that.

00:24:01 --> 00:24:06
Creating this uniform interface ends up

00:24:04 --> 00:24:08
being extremely valuable for that

00:24:06 --> 00:24:11
developer to be able to pick and choose

00:24:07 --> 00:24:14
to be able to AB test etc. So one big

00:24:10 --> 00:24:16
complication is that sometimes the

00:24:13 --> 00:24:18
incentives are misaligned. So, OpenAI

00:24:16 --> 00:24:20
obviously wants to create the best

00:24:17 --> 00:24:22
general purpose foundational models, but

00:24:19 --> 00:24:24
an individual business may want a model

00:24:21 --> 00:24:27
that solves a very specific problem a

00:24:23 --> 00:24:29
very specific way very well. And a

00:24:26 --> 00:24:31
developer may just want to be able to

00:24:28 --> 00:24:32
get something stood up and integrated

00:24:30 --> 00:24:36
into their application as quickly as

00:24:31 --> 00:24:38
possible. And so this platform uh

00:24:35 --> 00:24:39
engineer, this technology executive is

00:24:37 --> 00:24:41
kind of stuck between these two things

00:24:38 --> 00:24:43
where they need to be able to provide

00:24:40 --> 00:24:45
access to all of these cool tools and

00:24:42 --> 00:24:47
all of these great abilities while also

00:24:44 --> 00:24:50
making it as easy as possible for the

00:24:46 --> 00:24:52
developer. And so we've seen kind of two

00:24:49 --> 00:24:54
approaches here. One is where they will

00:24:51 --> 00:24:56
everage kind of a geni platform from

00:24:53 --> 00:24:58
aybe a cloud provider and there's many

00:24:55 --> 00:25:01
great examples of this from the various

00:24:57 --> 00:25:02
clouds or build up from best-in-class

00:25:00 --> 00:25:04
tools. They're going to pick the vector

00:25:01 --> 00:25:07
database that fits their needs the best.

00:25:03 --> 00:25:09
They're going to pick the log store that

00:25:06 --> 00:25:11
fits them the best and the testing

00:25:08 --> 00:25:13
solution that fits them the best, etc.

00:25:10 --> 00:25:15
But fundamentally, they're trying to

00:25:12 --> 00:25:17
solve the same problem of fitting these

00:25:14 --> 00:25:19
two puzzle pieces together. Here's all

00:25:16 --> 00:25:22
the great researches that's happening

00:25:18 --> 00:25:24
across the world and changing every day,

00:25:21 --> 00:25:26
and here's what my developers need to

00:25:23 --> 00:25:28
move their things forward. How do I

00:25:25 --> 00:25:31
create this kind of universal kind of

00:25:27 --> 00:25:33
puzzle piece adapter in between and then

00:25:30 --> 00:25:35
provide enough value on top of that? And

00:25:32 --> 00:25:37
so that's a real technical problem. If I

00:25:34 --> 00:25:39
have 30, as you said, 30 models with

00:25:36 --> 00:25:39
variance and fine-tunes and all like

00:25:38 --> 00:25:41
that's actually a real problem that

00:25:38 --> 00:25:43
needs to be solved. Not just I'm going

00:25:40 --> 00:25:44
to I'm going to lock this down. Yeah,

00:25:42 --> 00:25:46
exactly. And something that if you were

00:25:43 --> 00:25:47
just trying to get stand something up,

00:25:45 --> 00:25:49
you're just going to pick one route, one

00:25:46 --> 00:25:51
path, etc.

00:25:48 --> 00:25:53
After you've built that router or

00:25:50 --> 00:25:55
gateway though, the very next obvious

00:25:52 --> 00:25:57
thing to do is say, "Okay, well, this is

00:25:54 --> 00:25:59
actually there's a lot of data going

00:25:56 --> 00:26:00
through this. I should probably log that

00:25:58 --> 00:26:02
data somewhere instead of just throwing

00:25:59 --> 00:26:04
it away." And that's where they start to

00:26:02 --> 00:26:06
to leverage sometimes more

00:26:03 --> 00:26:08
traditional data stores that they have

00:26:05 --> 00:26:11
in place today where it's like, okay, we

00:26:07 --> 00:26:14
already have a way to log API calls or

00:26:10 --> 00:26:16
traces or some of this this richer

00:26:13 --> 00:26:18
information. But once you have those

00:26:15 --> 00:26:20
logs, then you can start to do

00:26:17 --> 00:26:22
analytics, testing, monitoring and

00:26:19 --> 00:26:24
things like that on top of it. And so it

00:26:21 --> 00:26:26
starts to acrue this value and end up

00:26:23 --> 00:26:29
looking more like a traditional platform

00:26:25 --> 00:26:31
as well. And meanwhile, the developer

00:26:28 --> 00:26:34
starts to get some of these these

00:26:30 --> 00:26:35
capabilities kind of off the shelf. And

00:26:33 --> 00:26:36
so they don't have to think about

00:26:34 --> 00:26:38
logging. They don't think about having

00:26:36 --> 00:26:41
to test. They don't have to think about

00:26:37 --> 00:26:42
any of this. They can focus on

00:26:40 --> 00:26:45
fine-tuning their prompts. they can

00:26:41 --> 00:26:48
focus on building these agentic systems

00:26:44 --> 00:26:48
into their current user

00:26:49 --> 00:26:54
workflows. I think a lot of developers,

00:26:52 --> 00:26:57
to your point, when they're trying to

00:26:53 --> 00:26:59
solve a narrow problem, kind of think

00:26:56 --> 00:27:01
they have it covered, right? They've got

00:26:58 --> 00:27:02
a handful of test cases. They just kind

00:27:00 --> 00:27:04
of play with it for a little while. You

00:27:01 --> 00:27:05
know, what people used to call vibe

00:27:03 --> 00:27:07
check. I don't I don't know if that's

00:27:04 --> 00:27:08
till that's still a term in use. Um

00:27:06 --> 00:27:10
what really should they be thinking

00:27:08 --> 00:27:11
about? And from an enterprise

00:27:09 --> 00:27:13
standpoint, what should uh people be

00:27:10 --> 00:27:15
thinking about? We believe that they

00:27:12 --> 00:27:18
should be thinking about the holistic

00:27:14 --> 00:27:20
behavior of these applications at scale.

00:27:17 --> 00:27:22
And so that's not just looking at a

00:27:19 --> 00:27:24
handful of performance checks on a small

00:27:21 --> 00:27:27
data set. That's not just throwing in

00:27:23 --> 00:27:29
your 100 favorite inputs and making sure

00:27:26 --> 00:27:31
that you always get your 100 favorite

00:27:28 --> 00:27:33
outputs. We talked to a lot of firms

00:27:30 --> 00:27:35
that are terrified to cross this AI

00:27:32 --> 00:27:39
confidence gap from I've developed

00:27:34 --> 00:27:41
something that works good in in in

00:27:38 --> 00:27:45
theory. How do I actually scale it up in

00:27:41 --> 00:27:48
practice? And a lot of times we'll talk

00:27:44 --> 00:27:50
to to to uh individuals who say every

00:27:48 --> 00:27:53
single time I bring on a new user, every

00:27:49 --> 00:27:56
single time I add more data to this, it

00:27:52 --> 00:27:58
changes a little bit. And right now I'm

00:27:55 --> 00:28:00
doing that incrementally, but when I

00:27:57 --> 00:28:01
turn on the fire hose, I have no idea

00:27:59 --> 00:28:03
what's going to happen. And I'm

00:28:00 --> 00:28:05
terrified about what that is. And this

00:28:02 --> 00:28:07
can create this gap where things

00:28:04 --> 00:28:10
languish in this prototype phase. They

00:28:06 --> 00:28:12
languish in this I've got this great

00:28:09 --> 00:28:14
proof of concept, but I still am

00:28:11 --> 00:28:16
terrified to turn it on to a million

00:28:13 --> 00:28:18
users, 10 million users, whatever it may

00:28:15 --> 00:28:22
be, or turn it on to real enterprise

00:28:17 --> 00:28:25
value. And so I think the shift in

00:28:21 --> 00:28:28
mindset needs to be not just does it

00:28:24 --> 00:28:30
work the way that I want to to look at

00:28:27 --> 00:28:32
it, but does it work more holistically?

00:28:29 --> 00:28:34
Do you have any good stories about

00:28:31 --> 00:28:36
hings that have gone wrong when people

00:28:33 --> 00:28:38
don't test? Yeah, I mean there's a

00:28:35 --> 00:28:40
handful of stories where people think

00:28:37 --> 00:28:42
that they're doing the right thing,

00:28:39 --> 00:28:44
think that there of course this is a no

00:28:41 --> 00:28:46
regrets value ad to the system and it

00:28:43 --> 00:28:48
ends up having these weird trickle down

00:28:45 --> 00:28:50
effects. And so rag has obviously become

00:28:47 --> 00:28:52
very prevalent uh in a in a wide variety

00:28:49 --> 00:28:53
of industries and people use it for a

00:28:51 --> 00:28:56
lot of different things. We've spoken

00:28:52 --> 00:28:57
with different firms that they were like

00:28:55 --> 00:28:59
okay well I'm just going to continue to

00:28:56 --> 00:29:01
add more and more data to the corpus

00:28:58 --> 00:29:04
because more data is better like of

00:29:00 --> 00:29:06
course but this ends up messing up the

00:29:03 --> 00:29:08
retrieval mechanism. And so where

00:29:05 --> 00:29:10
before it all had very recent data and

00:29:08 --> 00:29:12
it was giving very good responses

00:29:09 --> 00:29:14
because people were asking about things

00:29:11 --> 00:29:16
that had a lot of recency now they put

00:29:13 --> 00:29:19
heir whole history into it. Now it's

00:29:15 --> 00:29:21
grabbing old stuff and pretending like

00:29:18 --> 00:29:23
1902. Yeah, exactly. I wanted last

00:29:20 --> 00:29:26
quarter's earnings and now you're giving

00:29:22 --> 00:29:29
me six quarters ago's earnings. Um or I

00:29:25 --> 00:29:31
wanted this specific entity and that was

00:29:28 --> 00:29:33
relatively unique to begin with, but now

00:29:30 --> 00:29:35
that you've flooded it with all these

00:29:32 --> 00:29:37
other things, I'm picking up all these

00:29:34 --> 00:29:39
things that are kind of around the edges

00:29:36 --> 00:29:40
of it as well too. Have you seen

00:29:38 --> 00:29:43
anything released that upset all their

00:29:39 --> 00:29:45
customers or trading strategy that just

00:29:42 --> 00:29:47
like you know like was a bottomless pit

00:29:44 --> 00:29:50
of money? So thankfully we haven't seen

00:29:46 --> 00:29:53
anything like that quite yet but there's

00:29:49 --> 00:29:56
definitely s I mean hallucination

00:29:52 --> 00:29:58
remains a problem and it's one of these

00:29:55 --> 00:30:00
things where the system can convince

00:29:57 --> 00:30:03
itself that there's evidence that there

00:29:59 --> 00:30:05
isn't or will convince itself that you

00:30:02 --> 00:30:08
want an answer that's different than

00:30:04 --> 00:30:10
what you actually want. And sometimes

00:30:07 --> 00:30:12
that's because it's been given

00:30:09 --> 00:30:14
information that it tries to interpolate

00:30:11 --> 00:30:16
between. Sometimes it's just trying to

00:30:13 --> 00:30:17
fill in the gaps. Like fundamentally

00:30:15 --> 00:30:19
that's what it's uh these systems are

00:30:16 --> 00:30:22
trying to do. And that can lead to

00:30:18 --> 00:30:25
really bad behavior for for users. And

00:30:21 --> 00:30:27
it can lead to another example

00:30:24 --> 00:30:29
is people using the system in the way

00:30:26 --> 00:30:31
that they've always used it, but for

00:30:28 --> 00:30:34
some reason it's starting to trigger all

00:30:30 --> 00:30:36
these guard rails. And it's because

00:30:33 --> 00:30:38
intermediate parts of the system have

00:30:35 --> 00:30:40
transformed it or morphed it in

00:30:37 --> 00:30:41
different ways that all of a sudden it's

00:30:39 --> 00:30:44
flipping a switch somewhere and now

00:30:40 --> 00:30:46
they're getting this this terrible user

00:30:43 --> 00:30:48
experience because they're being told

00:30:45 --> 00:30:50
they violated some policy when in

00:30:47 --> 00:30:54
reality maybe they only changed a single

00:30:49 --> 00:30:54
word in their prompt.

00:30:56 --> 00:31:02
is your belief that AI systems should

00:30:59 --> 00:31:04
basically be tested atomically like like

00:31:01 --> 00:31:06
in the same way that we had unit tests

00:31:03 --> 00:31:08
for for traditional software you can

00:31:05 --> 00:31:10
sort of isolate each piece and make sure

00:31:07 --> 00:31:12
it's performing up to spec. Is is that

00:31:09 --> 00:31:15
sort of the same idea for for AI

00:31:11 --> 00:31:18
systems? I think you need to be able to

00:31:14 --> 00:31:21
quantify the behavior atomically but

00:31:17 --> 00:31:23
hen be able to test across that

00:31:20 --> 00:31:26
behavior more holistically like a

00:31:22 --> 00:31:29
regression test. And so you do want to

00:31:25 --> 00:31:31
be able to quantify the characteristics

00:31:28 --> 00:31:33
of how the retrieval step is happening.

00:31:30 --> 00:31:34
You don't want to just look at the very

00:31:32 --> 00:31:36
end

00:31:33 --> 00:31:39
answer, but you also want to be able to

00:31:35 --> 00:31:41
see how changes and inputs have

00:31:38 --> 00:31:44
propagated through the system. I see.

00:31:40 --> 00:31:47
And so it's a mixture. And and I know

00:31:43 --> 00:31:49
you've done some pretty intense math.

00:31:46 --> 00:31:50
I'm I'm resisting the urge to ask too

00:31:48 --> 00:31:52
many math questions because I know the

00:31:49 --> 00:31:54
two of us will go go a little too far

00:31:51 --> 00:31:55
down the rabbit hole, but I know you

00:31:53 --> 00:31:58
have done some pretty sophisticated work

00:31:54 --> 00:32:00
as a team to think about the right way

00:31:57 --> 00:32:01
to to approach these sorts of tests. Do

00:31:59 --> 00:32:03
you mind giving just a brief overview of

00:32:00 --> 00:32:04
why it's a hard problem and how

00:32:02 --> 00:32:07
you've addressed it. Testing is a is a

00:32:04 --> 00:32:09
difficult problem because I mean just

00:32:06 --> 00:32:12
being able to quantify behavior and

00:32:08 --> 00:32:14
trying to understand what it is that's

00:32:11 --> 00:32:15
like intrinsically happening within

00:32:13 --> 00:32:17
these systems is a very difficult

00:32:14 --> 00:32:19
problem. And this is where we differ a

00:32:16 --> 00:32:22
little bit from maybe traditional

00:32:18 --> 00:32:24
approaches to LLM eval because instead

00:32:21 --> 00:32:27
of trying to come up with a small number

00:32:23 --> 00:32:28
of strong estimators for performance

00:32:26 --> 00:32:32
where we want to be able to conclusively

00:32:28 --> 00:32:34
say A is better than B, instead what we

00:32:31 --> 00:32:37
want is a large number of potentially

00:32:33 --> 00:32:40
weak estimators to be able to determine

00:32:36 --> 00:32:41
whether or not A is different than B.

00:32:39 --> 00:32:43
And you're asking a fundamentally

00:32:40 --> 00:32:45
different mathematical question at that

00:32:42 --> 00:32:47
level because having these weak

00:32:44 --> 00:32:49
estimators that are maybe higher entropy

00:32:46 --> 00:32:53
and things like that can give you an

00:32:48 --> 00:32:55
insight into these these subtle shifts

00:32:52 --> 00:32:58
in the way that the system is behaving

00:32:54 --> 00:33:01
or or acting or processing information

00:32:57 --> 00:33:02
that will then have some end result in

00:33:00 --> 00:33:05
performance that you actually care

00:33:01 --> 00:33:06
about. But being able to correlate that,

00:33:04 --> 00:33:09
being able to go back and root cause and

00:33:05 --> 00:33:12
be able to say, "My performance dropped

00:33:08 --> 00:33:15
because this shifted, because this

00:33:11 --> 00:33:17
component changed, here's evidence of

00:33:14 --> 00:33:19
what distributions shifted. Here's

00:33:16 --> 00:33:21
evidence of the results that are no

00:33:18 --> 00:33:23
longer the same." Can be an extremely

00:33:20 --> 00:33:25
powerful tool to not only give teams

00:33:23 --> 00:33:27
understanding, but allow them to

00:33:24 --> 00:33:30
actually react to this. Because one of

00:33:26 --> 00:33:32
the things we've seen is when your

00:33:29 --> 00:33:34
performance drops that's helpful because

00:33:31 --> 00:33:36
you know something must be broken but it

00:33:33 --> 00:33:38
kicks off this net new research process

00:33:35 --> 00:33:40
to be able to be like okay now I need to

00:33:37 --> 00:33:43
build again from scratch versus

00:33:39 --> 00:33:45
performance dropped because this thing

00:33:42 --> 00:33:47
is not what it used to be that gives you

00:33:44 --> 00:33:50
this this foothold to be able to go fix

00:33:46 --> 00:33:52
that or maybe not all change is bad.

00:33:49 --> 00:33:54
Maybe that's actually something that's

00:33:52 --> 00:33:55
that you want to uh factor into your

00:33:53 --> 00:33:57
performance as well too. I see. So

00:33:54 --> 00:33:59
you're almost saying it's like rather

00:33:56 --> 00:34:00
than a normal software stack where

00:33:58 --> 00:34:02
you're just kind of testing end to end

00:34:00 --> 00:34:04
what's what's happening. You're sort of

00:34:01 --> 00:34:07
saying you've got like some little lab,

00:34:04 --> 00:34:09
you know, subjects in this like glass

00:34:06 --> 00:34:10
tank and you need to attach like all

00:34:08 --> 00:34:12
sorts of little sensors and probes to

00:34:10 --> 00:34:13
see exactly how it's behaving in order

00:34:11 --> 00:34:16
to kind of know what's going on.

00:34:12 --> 00:34:18
Exactly. Exactly. And it's it's really

00:34:15 --> 00:34:20
upping all of those sensors and probes

00:34:17 --> 00:34:23
basically. So don't just see whether or

00:34:19 --> 00:34:25
not lab subject A versus lab subject B

00:34:22 --> 00:34:26
was able to complete the maze but like

00:34:24 --> 00:34:28
what was their heart rate like what was

00:34:25 --> 00:34:30
all these types of things that then

00:34:27 --> 00:34:31
would enable you to say and so and so

00:34:29 --> 00:34:33
are you effectively doing statistical

00:34:30 --> 00:34:35
testing to sort of understand the change

00:34:32 --> 00:34:37
you know in each of these sensors from

00:34:34 --> 00:34:38
one one iteration to the next or or just

00:34:36 --> 00:34:40
again at a very high level how does it

00:34:37 --> 00:34:42
work? So this gets into the the name of

00:34:39 --> 00:34:44
the company. We think of all of these

00:34:41 --> 00:34:46
things as distributional. And so

00:34:43 --> 00:34:48
fundamentally it's not about having a

00:34:45 --> 00:34:50
single input be bad that you might want

00:34:47 --> 00:34:52
o trigger or something, but it's about

00:34:49 --> 00:34:56
holistically how is this behavior

00:34:51 --> 00:34:58
changing in a population setting. How is

00:34:55 --> 00:35:00
one distribution of behavior today

00:34:57 --> 00:35:02
versus a distribution from yesterday?

00:34:59 --> 00:35:04
And that distribution isn't just what's

00:35:02 --> 00:35:07
the distribution of performance, but

00:35:03 --> 00:35:09
his higher dimensional distribution,

00:35:06 --> 00:35:11
this distributional fingerprint of

00:35:08 --> 00:35:13
behavior. How has that shifted? And that

00:35:10 --> 00:35:15
allows you to get these insights which

00:35:12 --> 00:35:18
fundamentally allow you to root cause

00:35:14 --> 00:35:19
and understand your models in a way that

00:35:17 --> 00:35:20
you couldn't otherwise. Which is very

00:35:18 --> 00:35:22
interesting because there's a lot of

00:35:20 --> 00:35:24
talk especially with large language

00:35:21 --> 00:35:25
models about what's what's in

00:35:23 --> 00:35:27
distribution versus what's out of

00:35:24 --> 00:35:29
distribution. and and typically people

00:35:26 --> 00:35:30
are talking about what was sort of well

00:35:28 --> 00:35:32
represented in the training data versus

00:35:29 --> 00:35:33
what wasn't right which is important

00:35:31 --> 00:35:34
because these models tend to do well at

00:35:32 --> 00:35:36
hings that were in their training data

00:35:33 --> 00:35:38
or similar to and not so well at out of

00:35:35 --> 00:35:39
distribution things I've seen very

00:35:37 --> 00:35:40
little actual kind of quantification of

00:35:38 --> 00:35:42
this right there's a few good papers

00:35:39 --> 00:35:45
about it but what you're sort of saying

00:35:41 --> 00:35:46
is for any particular system meaning a

00:35:44 --> 00:35:47
certain set of models in a certain way

00:35:45 --> 00:35:49
with certain set of prompts you can

00:35:46 --> 00:35:51
actually characterize literally what the

00:35:48 --> 00:35:52
distributions are and then and then sort

00:35:50 --> 00:35:54
of check how those change over time yeah

00:35:51 --> 00:35:56
exactly the distributions of the outputs

00:35:53 --> 00:35:59
but also the entire process us to

00:35:56 --> 00:36:01
getting to those outputs and there's a

00:35:58 --> 00:36:03
lot of rich information there and a lot

00:36:00 --> 00:36:05
of it's being masked today by only

00:36:02 --> 00:36:06
looking at individual things. It's very

00:36:04 --> 00:36:08
cool. I mean it's it's really an

00:36:05 --> 00:36:11
industrywide problem and so what is the

00:36:08 --> 00:36:12
what's the benefit to to an enterprise

00:36:10 --> 00:36:14
in the end of deploying distribution or

00:36:12 --> 00:36:16
something like you know a testing

00:36:13 --> 00:36:19
solution in general. Yeah. So it's more

00:36:15 --> 00:36:21
confidence which allows them to tackle

00:36:18 --> 00:36:22
harder problems to be completely honest.

00:36:20 --> 00:36:24
We see some

00:36:21 --> 00:36:27
firms attacking the lowhanging fruit

00:36:23 --> 00:36:29
internal chat bots to like ask questions

00:36:26 --> 00:36:32
about HR because they're afraid to take

00:36:28 --> 00:36:34
that leap to develop the the the

00:36:31 --> 00:36:35
difficult problem because it's so

00:36:33 --> 00:36:37
unwieldy and there is so much risk

00:36:34 --> 00:36:40
associated with it. A lot of the most

00:36:36 --> 00:36:43
valuable use cases also have the most

00:36:39 --> 00:36:45
inherent risk. And testing and

00:36:42 --> 00:36:47
confidence is a way to understand and

00:36:44 --> 00:36:51
mitigate those operational risks whether

00:36:46 --> 00:36:54
they be financial, reputational or

00:36:50 --> 00:36:56
egulatory. So being able to define like

00:36:53 --> 00:36:59
what does reliable mean? It starts with

00:36:55 --> 00:37:01
change. It starts with at least is today

00:36:58 --> 00:37:03
different than yesterday. Like that's a

00:37:00 --> 00:37:05
question you can ask in an

00:37:02 --> 00:37:08
unsupervised way because you don't need

00:37:04 --> 00:37:10
to have any preference between the two.

00:37:07 --> 00:37:12
But then from that you can start to say

00:37:09 --> 00:37:14
okay I liked this change I didn't like

00:37:11 --> 00:37:15
this change. You can start to become

00:37:13 --> 00:37:19
more and more specific about what types

00:37:14 --> 00:37:21
of change are acceptable or not. But

00:37:18 --> 00:37:24
just by being able to see differences

00:37:20 --> 00:37:26
then you can start to apply supervision

00:37:23 --> 00:37:29
start to apply a preference for one

00:37:25 --> 00:37:31
versus the other. And I think

00:37:28 --> 00:37:33
fundamentally people are starting to

00:37:30 --> 00:37:36
kind of acrue more and more

00:37:33 --> 00:37:38
sophistication. Maybe originally they

00:37:35 --> 00:37:41
were just replacing kind of classic NLP

00:37:37 --> 00:37:42
models with LLMs and things like that.

00:37:40 --> 00:37:45
And they're starting to to push the

00:37:42 --> 00:37:47
boundaries of what used to be possible,

00:37:44 --> 00:37:49
not just making it better. Yes, it's

00:37:46 --> 00:37:52
easier than doing LDA to just like hit

00:37:48 --> 00:37:54
an LLM or something like that. But now,

00:37:51 --> 00:37:57
especially with agents, they're starting

00:37:53 --> 00:38:00
to really see what this completely new

00:37:56 --> 00:38:02
frontier. But with that comes a lot of

00:37:59 --> 00:38:05
uncertainty. With that, you need kind of

00:38:02 --> 00:38:07
a flashlight to be able to say, "This is

00:38:04 --> 00:38:11
this is how I understand this. This is

00:38:06 --> 00:38:11
how I can really get confidence."

00:38:12 --> 00:38:17
One thing that we've seen with

00:38:14 --> 00:38:20
enterprises, especially over the last 6

00:38:16 --> 00:38:22
to 12 months, is as they've started to

00:38:19 --> 00:38:25
roll more and more applications into

00:38:21 --> 00:38:26
production, they start to be able to

00:38:24 --> 00:38:28
make different trade-offs and they start

00:38:25 --> 00:38:30
o acrue tech debt to be completely

00:38:27 --> 00:38:32
honest. And that doesn't exist when

00:38:29 --> 00:38:35
you're first building, but of course,

00:38:31 --> 00:38:36
like any technology, it acrus over time.

00:38:34 --> 00:38:38
And so they're starting to try to make

00:38:35 --> 00:38:41
trade-offs between like, hey, can I use

00:38:37 --> 00:38:43
a cheaper model? Can I clean up this

00:38:40 --> 00:38:46
ystem prompt that I've just appended to

00:38:42 --> 00:38:48
ver and over again over the last year?

00:38:45 --> 00:38:50
But in order to make that decision, you

00:38:47 --> 00:38:51
need to understand what the trade-offs

00:38:49 --> 00:38:53
are. What if I switch from this

00:38:50 --> 00:38:56
expensive model to this cheaper model?

00:38:52 --> 00:38:59
What if I refactor my system prompt or

00:38:55 --> 00:39:01
whatever it may be? And so again,

00:38:58 --> 00:39:03
understanding the performance impact is

00:39:00 --> 00:39:06
an aspect of that, but understanding how

00:39:02 --> 00:39:07
does this change the way that I'm

00:39:05 --> 00:39:09
tokenizing things? how does this change

00:39:06 --> 00:39:12
the way that this application is

00:39:08 --> 00:39:14
behaving can also lead to an ability to

00:39:11 --> 00:39:17
make these these decisions in a more

00:39:13 --> 00:39:19
cleareyed way. And like traditional

00:39:16 --> 00:39:21
software, you have a build, you have a

00:39:18 --> 00:39:24
test suite when you're refactoring to

00:39:20 --> 00:39:26
say whether or not you actually made it

00:39:23 --> 00:39:28
cleaner or you broke the build. And by

00:39:25 --> 00:39:30
having good behavioral test coverage,

00:39:27 --> 00:39:32
you can now ask that exact same

00:39:29 --> 00:39:34
questions with these Gen AI apps. Did I

00:39:31 --> 00:39:36
make it better or did I actually break

00:39:33 --> 00:39:37
the build? So, you're saying my system

00:39:35 --> 00:39:39
prompts shouldn't be full of capital

00:39:36 --> 00:39:41
etters and exclamation points and

00:39:38 --> 00:39:44
pleading, "Please, please do what I

00:39:40 --> 00:39:45
ask." Potentially, uh, whatever works

00:39:43 --> 00:39:47
for you. Again, the right tool for the

00:39:44 --> 00:39:51
job. Maybe you can go back and make it

00:39:46 --> 00:39:54
one long capitalization, please, instead

00:39:50 --> 00:39:55
of a hero on Twitter whose whose name I

00:39:53 --> 00:39:57
won't say, who who extracts system

00:39:54 --> 00:39:59
prompts from all the all these things.

00:39:56 --> 00:40:01
And my biggest takeaway from this is

00:39:58 --> 00:40:03
that system prompt often reflects the

00:40:00 --> 00:40:05
organization it came from. like it's

00:40:02 --> 00:40:06
ome new form of Conway's law. You know,

00:40:04 --> 00:40:08
Conway's law is this thing that you kind

00:40:05 --> 00:40:10
of ship your org structure as a software

00:40:07 --> 00:40:12
company. Like I think as an AI like you

00:40:09 --> 00:40:13
know system company or like a prompt

00:40:11 --> 00:40:15
writer you're kind of shipping your org

00:40:12 --> 00:40:18
to it's like the Google one is like very

00:40:14 --> 00:40:19
ou know comprehensive and technical and

00:40:17 --> 00:40:21
ry and then there's the startup one

00:40:18 --> 00:40:23
that's like kind of all over the place.

00:40:20 --> 00:40:25
So, it's an interesting thing you say

00:40:22 --> 00:40:27
like the the system and even the prompt

00:40:24 --> 00:40:29
sent to a language model kind of

00:40:26 --> 00:40:31
reflects the the the organization it's

00:40:28 --> 00:40:33
coming from and kind of like the

00:40:30 --> 00:40:35
behavior they're looking for in a way.

00:40:32 --> 00:40:38
Exactly. And as you modify that or as

00:40:34 --> 00:40:40
you I mean it's nested system prompts

00:40:37 --> 00:40:42
all the way down, right? As you modify

00:40:39 --> 00:40:43
ours that's calling theirs like you're

00:40:41 --> 00:40:45
going to get different behaviors and

00:40:42 --> 00:40:47
it's it's a combinatorial mess even just

00:40:44 --> 00:40:50
selecting a model let alone you

00:40:47 --> 00:40:53
exploring system prompt space yourself.

00:40:49 --> 00:40:55
And again, having at least insight into

00:40:52 --> 00:40:58
the behavioral implications of your

00:40:54 --> 00:41:00
changes is incredibly important because

00:40:57 --> 00:41:02
I mean, fundamentally, once something's

00:40:59 --> 00:41:04
actually making money, once something's

00:41:01 --> 00:41:06
actually useful, you need to take a

00:41:03 --> 00:41:07
little bit more of a conservative stance

00:41:05 --> 00:41:09
to make sure you don't break things as

00:41:06 --> 00:41:10
opposed to just trying to build

00:41:08 --> 00:41:11
something as fast as possible. I just

00:41:09 --> 00:41:13
love the idea of every new person who,

00:41:10 --> 00:41:15
you know, it's like the engineer, then

00:41:12 --> 00:41:16
like the uh compliance person, and the

00:41:14 --> 00:41:18
marketer, everybody's just tacking on to

00:41:16 --> 00:41:20
the prompt. this this poor confused

00:41:17 --> 00:41:22
language model probably has no idea what

00:41:19 --> 00:41:24
o do and some of them are conflicting

00:41:21 --> 00:41:27
and like whatever it may be and uh yeah

00:41:23 --> 00:41:29
policies shift. We've we've uh talked to

00:41:26 --> 00:41:31
a lot of firms that are afraid to change

00:41:28 --> 00:41:33
that prompt because they were like well

00:41:30 --> 00:41:35
the GRC team wanted this line in there

00:41:32 --> 00:41:37
and this team wanted this line in there

00:41:34 --> 00:41:39
and what happens if we combine them?

00:41:36 --> 00:41:40
That's it. But with a system like yours

00:41:38 --> 00:41:42
basically they're able to check how

00:41:40 --> 00:41:44
things change once they once they do

00:41:41 --> 00:41:47
make some of these fixes. That's very

00:41:43 --> 00:41:47
cool.

00:41:47 --> 00:41:53
most of these AI labs are not enterprise

00:41:50 --> 00:41:55
folks which is you know which is which

00:41:52 --> 00:41:57
is fine right you know it's a lot of

00:41:54 --> 00:42:00
very very very smart researchers um who

00:41:56 --> 00:42:02
know their field very very well but yeah

00:42:00 --> 00:42:04
I yeah anyway I'm curious I'm curious if

00:42:01 --> 00:42:05
you see this interface you know because

00:42:03 --> 00:42:08
I guess some of the very big customers

00:42:04 --> 00:42:09
for you know the big labs do have more

00:42:07 --> 00:42:11
influence than you know than ordinary

00:42:08 --> 00:42:14
ou know ordinary devs I mean I think

00:42:10 --> 00:42:15
it's going to be a co-evolution where

00:42:13 --> 00:42:17
obviously

00:42:14 --> 00:42:19
Some of these labs are very focused on

00:42:16 --> 00:42:21
the cutting edge of research and like

00:42:18 --> 00:42:24
pursuing AGI and things like that, but

00:42:20 --> 00:42:25
hey also need to make money. And so

00:42:23 --> 00:42:27
they're going to adapt to what their

00:42:24 --> 00:42:29
users need. And then the industry is

00:42:26 --> 00:42:30
going to adapt to the tools that are

00:42:28 --> 00:42:32
available and it's going to be back and

00:42:29 --> 00:42:35
forth. It's going to be like uh the

00:42:31 --> 00:42:37
finches on the Galapicos Island. And

00:42:34 --> 00:42:39
overall, we're going to get some, I

00:42:36 --> 00:42:40
think, specialization. Certain models

00:42:38 --> 00:42:41
are going to come out. They're going to

00:42:39 --> 00:42:44
solve specific enterprise needs

00:42:40 --> 00:42:46
incredibly well. But in general too, the

00:42:43 --> 00:42:48
enterprise is going to continue to

00:42:45 --> 00:42:50
adapt to, hey, I've got this new tool.

00:42:47 --> 00:42:52
Hey, I have access to this new thing.

00:42:49 --> 00:42:54
How can I make it fit? But

00:42:51 --> 00:42:57
unfortunately, again, I feel like the

00:42:53 --> 00:43:00
platform owner within these enterprises

00:42:56 --> 00:43:02
ends up being this this connector and

00:42:59 --> 00:43:04
they need to be able to be this

00:43:01 --> 00:43:06
interface to this technology while also

00:43:03 --> 00:43:09
providing it in a way that's accessible,

00:43:05 --> 00:43:11
consumable, and understandable and

00:43:08 --> 00:43:13
ultimately fits the needs of the

00:43:10 --> 00:43:14
nterprise. Whether that's through

00:43:12 --> 00:43:17
testing and auditing and things like

00:43:14 --> 00:43:19
that or just scalability. That makes a

00:43:16 --> 00:43:21
lot of sense. And and you're sort of

00:43:18 --> 00:43:22
saying that these enterprise platforms

00:43:20 --> 00:43:24
actually have a pretty important role to

00:43:21 --> 00:43:25
play in like the whole the whole

00:43:23 --> 00:43:26
industry if I'm sort of understanding.

00:43:24 --> 00:43:28
Right. Because the labs put out what

00:43:25 --> 00:43:29
hey put out. Developers love

00:43:27 --> 00:43:31
xperimenting with things. Some of them

00:43:28 --> 00:43:33
work, but if there's nobody connecting

00:43:30 --> 00:43:34
the puzzle pieces as you say, like that

00:43:32 --> 00:43:37
actually could be a real problem.

00:43:33 --> 00:43:39
Definitely. And somebody needs to make

00:43:36 --> 00:43:41
sure that these these models continue to

00:43:38 --> 00:43:43
work, these applications continue to

00:43:40 --> 00:43:45
work over time as well too. And I've

00:43:42 --> 00:43:47
seen this with traditional ML and AI and

00:43:44 --> 00:43:51
this happens in traditional software too

00:43:46 --> 00:43:52
where the developer moves on and then it

00:43:50 --> 00:43:54
needs to be maintained. It needs to stay

00:43:51 --> 00:43:56
up. Yeah. Because we don't we don't have

00:43:53 --> 00:43:58
like AI ops teams yet, right? There's no

00:43:55 --> 00:44:00
dedicated group of people that just like

00:43:57 --> 00:44:01
try to make sure the system is running

00:43:59 --> 00:44:03
in in the way that we do with sort of

00:44:00 --> 00:44:05
traditional, you know, DevOps and things

00:44:02 --> 00:44:06
like that. Who gets paged in the middle

00:44:04 --> 00:44:09
of the night when like, you know, your

00:44:05 --> 00:44:10
AI bot just like sold the office

00:44:08 --> 00:44:12
building by mistake? Exactly. And who

00:44:10 --> 00:44:16
has to figure out what whose fault it

00:44:11 --> 00:44:17
was at the end of the day, too. Um, so

00:44:15 --> 00:44:19
yeah, I think as we see the rise of

00:44:16 --> 00:44:22
these Gen AI platforms, we're going to

00:44:18 --> 00:44:23
see the rise of more AI ops, the people

00:44:21 --> 00:44:26
who have to make sure the system's

00:44:22 --> 00:44:29
working and understand when it isn't and

00:44:25 --> 00:44:31
then fix it. We talked about global

00:44:28 --> 00:44:33
versus local solutions to this

00:44:30 --> 00:44:35
reliability problem. what's your view

00:44:32 --> 00:44:37
hat should be solved kind of by the

00:44:34 --> 00:44:38
industry as a whole versus what what

00:44:36 --> 00:44:41
needs to you know this kind of like

00:44:37 --> 00:44:43
local context definitely so I think

00:44:40 --> 00:44:46
there's aspects of this that are

00:44:42 --> 00:44:48
universal just being able to define some

00:44:45 --> 00:44:51
of these behaviors and detect largecale

00:44:47 --> 00:44:53
changes in them being able to set up a

00:44:50 --> 00:44:56
system that's able to give you that

00:44:52 --> 00:44:59
level of insight again at that extremely

00:44:55 --> 00:45:01
high level but then every individual

00:44:58 --> 00:45:03
team has different behaviors that they

00:45:00 --> 00:45:06
want or things that they don't

00:45:02 --> 00:45:08
want. And so very quickly, you need to

00:45:05 --> 00:45:11
be able to take from a system like ours

00:45:07 --> 00:45:13
an ability to to detect change at a

00:45:10 --> 00:45:15
global level and then be able to go

00:45:12 --> 00:45:17
through a workflow to adapt that and

00:45:14 --> 00:45:19
build up better behavioral test coverage

00:45:16 --> 00:45:22
that becomes more and more specific and

00:45:18 --> 00:45:25
bespoke to your individual application.

00:45:21 --> 00:45:28
But fundamentally that same global level

00:45:24 --> 00:45:29
can help many different teams within an

00:45:27 --> 00:45:32
organization or even across different

00:45:29 --> 00:45:33
organizations get that foothold. And

00:45:31 --> 00:45:35
that's what we're trying to develop with

00:45:32 --> 00:45:38
our platform. But then beyond the

00:45:34 --> 00:45:41
platform itself, that workflow is about

00:45:37 --> 00:45:42
fine-tuning it and specifying it to the

00:45:40 --> 00:45:45
behaviors that you care about

00:45:41 --> 00:45:45
individually.

<!-- YOUTUBE_TRANSCRIPT_END -->
