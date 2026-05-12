---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "NKNYKYoDSNA"
title: "The Future of AI Video: How Fal.ai is Making AI Video Faster & Easier"
video_url: "https://www.youtube.com/watch?v=NKNYKYoDSNA"
thumbnail_url: "https://i.ytimg.com/vi/NKNYKYoDSNA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=NKNYKYoDSNA"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-08-01T16:00:46.000Z"
upload_date: "2025-08-01"
duration_seconds: 2302
duration_human: "38:22"
view_count: 6975
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:41:41.511Z"
---

# The Future of AI Video: How Fal.ai is Making AI Video Faster & Easier

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=NKNYKYoDSNA
- video_id: NKNYKYoDSNA
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-08-01T16:00:46.000Z
- upload_date: 2025-08-01
- duration: 38:22
- view_count: 6975
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Fal co-ounder and CEO Burkay Gur and head of engineering Batuhan Taskaya join a16z general partner Jennifer Li to discuss how they built a generative AI inference platform that's optimized for speed, performance, and user experience.

If you've been experimenting with image, video, and audio models, the chances are you've been both blown away by how good they're becoming, and also a little perturbed by how long they can take to generate. If you've been using a platform like Fal, however, your experience on the latter point might be more positive.

In this episode, Fal cofounder and CEO Burkay Gur and head of engineering Batuhan Taskaya join a16z general partner Jennifer Li to discuss how they built an inference platform — or, as they call it, a generative media cloud — that's optimized for speed, performance, and user experience. These are core features for a great product, yes, and also ones borne of necessity as the early team obsessively engineered around its meager GPU capacity at the height of the AI infrastructure crunch.

But this is more than a story about infrastructure. As you'll hear, they also delve into sales and hiring strategy; the team's overall excitement over these emerging modalities; and the trends they're seeing as competition in the world of video models, especially, heats up. 

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

Follow everyone on X here:
https://x.com/burkaygur
https://x.com/isidentical
https://x.com/jenniferhli

Timestamps:
00:00 Introduction 
01:06 Co-founder of Fal.ai, Burkay Gur, Discusses the Origins of Fal
01:44 Recruiting Batuhan Taskaya, Mascot of Fal
03:00 Batuhan Shares His Background With Python and Excitement Around Fal
04:53 “Technical Curiosity” and Tackling Use Cases”
08:24  Optimization, With Only 8 GPUs
09:56 Where We Are With: Diffusion Models vs Language Models
12:27 AI Video, Adoption and Capabilities
14:19 Creative Use Cases With Prompting and Finetuning
16:57 Finetuning Workflows and Demands
18:05 Winners In the Image Camp and Video Camp
20:30 Determining Which Models To Serve To Developers
21:31 The Strategy Behind Fal and the Infrastructure
24:45 Critical Infrastructure Pieces 
27:13 Optimization That Has Delivered the Largest Gain
28:05 Is Speed Is A Moat?
29:00 Structuring the Team (Balancing Engineering and GTM)
31:42 “In Order To Win, You Have To Win The Market”
34:17 Being Customer Centric With Open Channels, Company Culture
35:52 The Future Of Generative Video, Distribution and Opportunities
36:31 Undiscovered Areas and Use Cases

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
In general, there is still a lot of

00:00:02 --> 00:00:07
demand for image models and there seems

00:00:04 --> 00:00:10
to be some kind of convergence on like

00:00:06 --> 00:00:12
quality, but then each model really has

00:00:09 --> 00:00:14
its own differentiation. With video,

00:00:11 --> 00:00:16
we're earlier in the competition.

00:00:13 --> 00:00:18
There's still a lot of leaprogging

00:00:15 --> 00:00:19
happening. There's just so much more to

00:00:17 --> 00:00:22
build and there's just like, you know,

00:00:18 --> 00:00:24
we haven't hit like a quality bar where

00:00:21 --> 00:00:27
there's just like marginal improvements.

00:00:23 --> 00:00:29
We're not there yet. So over there it's

00:00:26 --> 00:00:31
like more fierce competition and it's

00:00:28 --> 00:00:33
very hard to predict what's going

00:00:30 --> 00:00:34
to happen next month. It's like that's

00:00:32 --> 00:00:37
we're operating at the scales of like

00:00:34 --> 00:00:39
weeks at this point. I remember when

00:00:36 --> 00:00:42
Sora came out even in our team people

00:00:38 --> 00:00:44
were like oh my god OpenAI is like so

00:00:41 --> 00:00:45
far ahead that no one's going to be able

00:00:43 --> 00:00:47
to catch up and then like Luma released

00:00:44 --> 00:00:49
their model, Runway released their

00:00:46 --> 00:00:51
model, Cling released their model,

00:00:48 --> 00:00:52
Minimax released and every release like

00:00:50 --> 00:00:54
if you're not the best you're not

00:00:51 --> 00:00:55
releasing generally that's how it works.

00:00:53 --> 00:00:57
You can never like say oh this is the

00:00:54 --> 00:00:59
model and then this is not going to have

00:00:56 --> 00:01:01
any competition for like even a month

00:00:58 --> 00:01:02
right like even like two weeks is like I

00:01:00 --> 00:01:06
think that we are operating at like

00:01:01 --> 00:01:06
weeks as I said

00:01:06 --> 00:01:12
we started about 4 years ago the origin

00:01:09 --> 00:01:14
story is I I used to work at Coinbase

00:01:11 --> 00:01:16
and they had a lot of infra issues with

00:01:14 --> 00:01:19
respect to machine learning and fraud

00:01:15 --> 00:01:20
was a big problem there so I kind of

00:01:18 --> 00:01:22
grew up in that environment where like

00:01:19 --> 00:01:25
we're just constantly fighting with

00:01:21 --> 00:01:27
fraud using machine learning models. And

00:01:24 --> 00:01:28
the initial idea had a lot to do with

00:01:26 --> 00:01:30
building these pipelines for for

00:01:27 --> 00:01:33
companies to be able to like train these

00:01:29 --> 00:01:36
models. But about a year and a half into

00:01:32 --> 00:01:37
us starting the company, Chhat GPT

00:01:35 --> 00:01:39
happened, Delhi happened, the whole

00:01:36 --> 00:01:43
world of machine learning and AI

00:01:38 --> 00:01:44
changed. So we sort of adopted uh as as

00:01:42 --> 00:01:47
things were developing.

00:01:43 --> 00:01:49
>> We're going to definitely dig into the

00:01:46 --> 00:01:52
2021 wind shift happening on on the

00:01:48 --> 00:01:54
multimedia side. But before we go there,

00:01:51 --> 00:01:57
how did you meet and recruit Bottoan,

00:01:53 --> 00:02:00
the foul guy now? He is the the mascot

00:01:56 --> 00:02:02
uh on Twitter of of F.

00:01:59 --> 00:02:04
>> Yeah, we're both from Turkey and like I

00:02:01 --> 00:02:06
first saw Batwan online. I was pretty

00:02:03 --> 00:02:10
curious about his work on on Python.

00:02:06 --> 00:02:12
He's a pretty big Python contributor. I

00:02:09 --> 00:02:15
just DM'd him on Twitter and we had a

00:02:11 --> 00:02:18
call and we had just started the company

00:02:14 --> 00:02:19
and he was in I think Poland.

00:02:17 --> 00:02:23
>> Yes.

00:02:18 --> 00:02:26
uh in a in a dorm room I think

00:02:22 --> 00:02:28
>> and I was pitching f like hey you know

00:02:25 --> 00:02:30
e're doing a lot of Python stuff would

00:02:27 --> 00:02:32
you come join us and initially it was

00:02:29 --> 00:02:34
like very much an intro call and I think

00:02:31 --> 00:02:35
at the time you know he was working on

00:02:33 --> 00:02:38
something else it wasn't going to work

00:02:34 --> 00:02:40
out few months later we actually raised

00:02:37 --> 00:02:42
from you guys so this time I was like

00:02:39 --> 00:02:44
okay we have some funding great

00:02:41 --> 00:02:48
investors I'll go pitch it again and

00:02:43 --> 00:02:50
this time we got on a call again and he

00:02:47 --> 00:02:52
happened to be leaving and then believe

00:02:49 --> 00:02:54
it or not when I said hey like we just

00:02:51 --> 00:02:56
raised from and it's not announced yet

00:02:53 --> 00:02:57
we're going to recruit a lot of people

00:02:55 --> 00:02:59
like you're going to be one of the first

00:02:56 --> 00:03:00
people to join that's when he was really

00:02:58 --> 00:03:02
con convinced

00:02:59 --> 00:03:05
>> I'm really glad to be a very small

00:03:01 --> 00:03:06
contributor in this Helen acquisition

00:03:04 --> 00:03:09
what were you doing in Poland

00:03:05 --> 00:03:10
>> I went there for a university but I

00:03:08 --> 00:03:12
dropped out in like the third week or

00:03:09 --> 00:03:14
something was preparing to leave Poland

00:03:11 --> 00:03:16
go back to Turkey continue working you

00:03:13 --> 00:03:18
know at developer tools I want to

00:03:15 --> 00:03:20
explore like different options like I

00:03:17 --> 00:03:21
come from a developer tools background

00:03:19 --> 00:03:22
if you consider compilers and

00:03:20 --> 00:03:24
programming languages developer tools. I

00:03:21 --> 00:03:26
just wanted to work on those a bits and

00:03:23 --> 00:03:29
I was like leaving a data company. So I

00:03:25 --> 00:03:31
wanted to do more like deep developer

00:03:28 --> 00:03:34
tools but then seeing burka seeing your

00:03:30 --> 00:03:35
cam the excitement around the product I

00:03:33 --> 00:03:37
think the traction was just starting to

00:03:34 --> 00:03:39
come up for the product and seeing that

00:03:36 --> 00:03:40
seeing what I can bring to the table

00:03:38 --> 00:03:42
convinced okay these guys are the best

00:03:39 --> 00:03:44
people I've ever seen in my life vibes

00:03:41 --> 00:03:47
wise I want to work with them for the

00:03:43 --> 00:03:50
next decade let's just let me just join.

00:03:46 --> 00:03:50
Awesome. So you and Gorkham Vive sniped

00:03:49 --> 00:03:52
for fun.

00:03:49 --> 00:03:54
>> Yes. Yes.

00:03:51 --> 00:03:57
>> And you also got into Python at a very

00:03:53 --> 00:03:58
oung age. Maybe tell the story of how

00:03:56 --> 00:03:59
you got to

00:03:57 --> 00:04:01
>> I I first started doing operating

00:03:58 --> 00:04:03
systems even before compilers. And one

00:04:00 --> 00:04:04
component of building like your own

00:04:02 --> 00:04:06
operating system which is like very

00:04:03 --> 00:04:08
basic you know a super basic kernel and

00:04:05 --> 00:04:09
then like some sort of graphical user

00:04:07 --> 00:04:11
interface is writing your own shell

00:04:08 --> 00:04:13
anguage. So I started building that and

00:04:10 --> 00:04:15
the the thing that I enjoyed the most of

00:04:12 --> 00:04:17
all that operating system journey from

00:04:14 --> 00:04:20
like writing a custom bootloader to you

00:04:16 --> 00:04:21
know writing a custom file system was

00:04:19 --> 00:04:23
this like shell language. So I started

00:04:20 --> 00:04:25
oing more on programming languages and

00:04:22 --> 00:04:27
my go-to language was Python. So it was

00:04:24 --> 00:04:29
natural for me to just like go jump in

00:04:26 --> 00:04:31
see understand how the fundamentals of

00:04:28 --> 00:04:33
Python worked and from that point

00:04:30 --> 00:04:36
onwards I was able to go start doing

00:04:32 --> 00:04:38
small patches contribute understand like

00:04:35 --> 00:04:39
you know what the community wanted like

00:04:37 --> 00:04:41
it was also like my introduction to

00:04:38 --> 00:04:43
being like an open source contributor

00:04:40 --> 00:04:44
and I I started contributing I think a

00:04:42 --> 00:04:46
year and a half later I became one of

00:04:43 --> 00:04:49
the committers and the maintainers for

00:04:45 --> 00:04:51
the parser core compiler and some of the

00:04:48 --> 00:04:53
parts of the interpreter that was one of

00:04:50 --> 00:04:54
the you know most favorable and highest

00:04:52 --> 00:04:57
learning experience that I've ever Going

00:04:53 --> 00:05:00
back to the pivot into the direction of

00:04:56 --> 00:05:03
generative media in 2021, all the rage

00:04:59 --> 00:05:03
was about large language models.

00:05:02 --> 00:05:07
>> Yes.

00:05:02 --> 00:05:09
>> But when you and Gorham saw this shift,

00:05:06 --> 00:05:10
>> you picked generative media, which is

00:05:08 --> 00:05:12
image, video,

00:05:09 --> 00:05:13
>> audio models.

00:05:11 --> 00:05:15
>> Why did you make that choice?

00:05:12 --> 00:05:18
>> The way we got into this, I I remember

00:05:14 --> 00:05:21
this like so vividly. This was like

00:05:17 --> 00:05:24
November. It was a Thanksgiving member

00:05:20 --> 00:05:24
on a call. You were in a cabin somewhere

00:05:23 --> 00:05:26
upstate.

00:05:23 --> 00:05:29
>> That's right. I I was living in New York

00:05:25 --> 00:05:30
for like one year. I I was in upstate

00:05:28 --> 00:05:32
New York. We had a Python runtime at

00:05:29 --> 00:05:36
hat time. And the idea was we think the

00:05:31 --> 00:05:37
next big thing is going to be workloads

00:05:35 --> 00:05:39
running in a Python cloud. We just

00:05:36 --> 00:05:41
hought Python is the next biggest

00:05:38 --> 00:05:44
hing. And we got a lot of inspiration

00:05:40 --> 00:05:45
from Snowflake success with SQL. We

00:05:43 --> 00:05:48
thought like Python is the next big

00:05:44 --> 00:05:51
thing. And this is pre chachipiti or

00:05:47 --> 00:05:52
preboom of AI models in general. we're

00:05:50 --> 00:05:54
just like sitting there and we're

00:05:51 --> 00:05:55
thinking about what's the Python

00:05:53 --> 00:05:57
workload that's going to be really

00:05:54 --> 00:05:59
big. The more we we saw the

00:05:56 --> 00:06:02
xcitement around language models, image

00:05:58 --> 00:06:05
models, the less excited we felt about

00:06:01 --> 00:06:07
he old school enterprise workloads,

00:06:04 --> 00:06:09
right? And and that was one thing that

00:06:06 --> 00:06:11
we were like, okay, it really feels like

00:06:08 --> 00:06:13
the big opportunity is in these new

00:06:10 --> 00:06:15
kinds of models and especially the

00:06:12 --> 00:06:18
scale, how large of a scale you have to

00:06:14 --> 00:06:20
run these models. That basically brought

00:06:17 --> 00:06:23
us to LLMs or image models. This

00:06:19 --> 00:06:25
November, we're just sitting there

00:06:22 --> 00:06:27
trying to run stable diffusion 15. We

00:06:24 --> 00:06:30
just kept asking ourselves, why the heck

00:06:26 --> 00:06:33
is it so damn slow? I remember SD15

00:06:29 --> 00:06:34
taking 19 seconds, maybe 10 plus seconds

00:06:32 --> 00:06:37
to like run.

00:06:33 --> 00:06:37
>> We had a lot of patience back then to

00:06:36 --> 00:06:39
come up.

00:06:36 --> 00:06:42
>> We had Banan at the time like we were

00:06:38 --> 00:06:44
like five or six people and I mean he he

00:06:41 --> 00:06:45
has like amazing experience in like

00:06:43 --> 00:06:48
compilers and you know performance

00:06:44 --> 00:06:50
ngineering. We just went super deep

00:06:47 --> 00:06:52
into SD15 and just like optimized the

00:06:49 --> 00:06:54
ll out of it. That was like really the

00:06:51 --> 00:06:56
start of it and it it didn't really have

00:06:53 --> 00:06:58
anything to do with we think this is

00:06:55 --> 00:07:00
going to be massive. It really started

00:06:57 --> 00:07:02
with like a technical curiosity which

00:06:59 --> 00:07:05
is I think like really interesting

00:07:01 --> 00:07:08
and and you know we did that extremely

00:07:04 --> 00:07:10
well and then that became our like wedge

00:07:07 --> 00:07:13
into tackling some of these use cases

00:07:09 --> 00:07:16
and and people started like associating

00:07:12 --> 00:07:18
us with speed and performance and from

00:07:15 --> 00:07:20
there on we made more directional bets

00:07:17 --> 00:07:22
and like business decision decisions

00:07:19 --> 00:07:25
that that kind of brought us to like the

00:07:21 --> 00:07:28
overall media story which is less to do

00:07:24 --> 00:07:29
with tech and so much more to do with

00:07:27 --> 00:07:31
e market.

00:07:28 --> 00:07:34
>> People tend to forget that back at those

00:07:30 --> 00:07:36
days there was a very massive GPU crunch

00:07:33 --> 00:07:37
because it was like even before the AI

00:07:35 --> 00:07:40
investments and stable division was

00:07:36 --> 00:07:41
popping up. Chibity was going crazy. I

00:07:39 --> 00:07:43
remember like we even tried to run

00:07:40 --> 00:07:45
stable division on hugging face and

00:07:42 --> 00:07:46
there was like a 3,000% queue like

00:07:44 --> 00:07:48
hugging face had this Q system and like

00:07:46 --> 00:07:50
just suddenly submit per prompt. So it

00:07:47 --> 00:07:52
was also like coming from like a

00:07:49 --> 00:07:55
necessity where the GPU resource was

00:07:51 --> 00:07:56
very scarce you know like you you had to

00:07:54 --> 00:07:58
maximize the efficiency

00:07:55 --> 00:07:59
>> competing with the language model uh

00:07:57 --> 00:08:01
workloads

00:07:58 --> 00:08:03
>> exactly where you were essentially

00:08:00 --> 00:08:05
trying to get allocation to that little

00:08:02 --> 00:08:06
amount of GPUs that's given to you as a

00:08:04 --> 00:08:09
startup right like Google had zero

00:08:05 --> 00:08:11
incentive to give us uh GPUs back at the

00:08:08 --> 00:08:13
days I remember our koda was eight GPUs

00:08:10 --> 00:08:15
total like all of our system and we were

00:08:12 --> 00:08:17
trying to make do with that and I think

00:08:14 --> 00:08:18
we were able to extract an insane amount

00:08:16 --> 00:08:20
of value just by optim optimizing these

00:08:17 --> 00:08:22
programs going to the first principles

00:08:19 --> 00:08:24
trying to understand why the slow where

00:08:21 --> 00:08:24
are the bottlenecks and how can we

00:08:23 --> 00:08:27
resolve those

00:08:23 --> 00:08:30
>> since you mentioned you have to get a

00:08:26 --> 00:08:33
lot of compute and iterations out of

00:08:29 --> 00:08:34
just eight GPUs where did you even start

00:08:32 --> 00:08:37
with optimization

00:08:33 --> 00:08:39
>> for me like this was my first time entry

00:08:36 --> 00:08:41
into machine learning performance space

00:08:38 --> 00:08:42
as Brookai mentioned I come from like a

00:08:40 --> 00:08:43
traditional compilers background and

00:08:42 --> 00:08:46
everything is like performance

00:08:42 --> 00:08:47
ngineering like you just take a program

00:08:45 --> 00:08:49
profile it under different conditions

00:08:46 --> 00:08:50
figure out where's the bottlenecks and

00:08:48 --> 00:08:52
try to understand why isn't this

00:08:50 --> 00:08:54
operating at the maximum achievable

00:08:51 --> 00:08:56
speed for your CPU for your clock speed

00:08:53 --> 00:08:58
whatever I did the same math with GPUs

00:08:55 --> 00:08:59
this is the GPU this is the horsepower

00:08:57 --> 00:09:01
this is the maximum achievable flops

00:08:58 --> 00:09:03
that I could get out of the GPU and this

00:09:00 --> 00:09:05
how much flops this workload needs

00:09:02 --> 00:09:07
what is the difference there and then

00:09:04 --> 00:09:10
you start noticing patterns where simple

00:09:06 --> 00:09:11
calculation might be getting blocked and

00:09:09 --> 00:09:13
not being able to utilize the fullage

00:09:10 --> 00:09:15
the GPU so you start sharding these

00:09:12 --> 00:09:17
workloads uh threading them in in a way

00:09:14 --> 00:09:19
that's much more efficient you figure

00:09:16 --> 00:09:20
out common patterns within the execution

00:09:18 --> 00:09:22
layer that you can group together. So

00:09:19 --> 00:09:23
like figuring out these small

00:09:21 --> 00:09:25
bottlenecks and then picking up from

00:09:22 --> 00:09:27
there one one optimization by

00:09:24 --> 00:09:29
optimization but it's like extremely

00:09:26 --> 00:09:30
satisfying work just going it like going

00:09:28 --> 00:09:33
down on speed. There was a lot of work

00:09:30 --> 00:09:35
around the quality as well that I can

00:09:32 --> 00:09:37
talk more doing this optimization space

00:09:34 --> 00:09:39
just like and it was December I had

00:09:36 --> 00:09:41
nothing else to do. So when you combine

00:09:38 --> 00:09:43
these two you you get these like our

00:09:40 --> 00:09:45
optimization sets that we did for stable

00:09:42 --> 00:09:46
diffusion you know just much more

00:09:44 --> 00:09:48
fficient kernels for the workloads that

00:09:46 --> 00:09:50
we were targeting and making sure this

00:09:47 --> 00:09:52
like a pluggable system. So when the

00:09:49 --> 00:09:53
new model comes we could just apply the

00:09:51 --> 00:09:55
same set of optimizations.

00:09:52 --> 00:09:56
>> Most efficient kernels is the best

00:09:54 --> 00:09:57
Christmas gift.

00:09:55 --> 00:09:59
>> It is the best Christmas gift. Yeah.

00:09:56 --> 00:10:02
>> Back then a lot of the inference

00:09:58 --> 00:10:04
platforms and Python clouds if that was

00:10:01 --> 00:10:06
even a thing are agnostic of different

00:10:03 --> 00:10:08
ype of workloads. But today we're

00:10:05 --> 00:10:10
certainly seeing file emerging as the

00:10:07 --> 00:10:13
leader of generative media workflows and

00:10:09 --> 00:10:15
as the company the first company that's

00:10:12 --> 00:10:18
uh coining and defining that term. Where

00:10:14 --> 00:10:19
are we in these two path of diffusion

00:10:17 --> 00:10:20
models or generative media versus

00:10:18 --> 00:10:23
language model?

00:10:19 --> 00:10:27
>> The point when it kind of clicked for us

00:10:22 --> 00:10:29
was actually I think Llama 2 was a a

00:10:26 --> 00:10:32
pretty pretty big turning point. When

00:10:28 --> 00:10:34
Llama 2 got released, there was this big

00:10:31 --> 00:10:35
rush towards inference platforms in

00:10:33 --> 00:10:36
general. You know, we're going to host

00:10:34 --> 00:10:37
hat and we're going to host the image

00:10:35 --> 00:10:39
models and we're going to host

00:10:36 --> 00:10:40
everything. Everything that runs on GP,

00:10:38 --> 00:10:42
we're going to host it. One of the

00:10:39 --> 00:10:44
reasons I remember this also very

00:10:41 --> 00:10:46
vividly like one one of the the key

00:10:43 --> 00:10:48
reason we didn't want to do it. It was

00:10:45 --> 00:10:50
going to take a lot of time to optimize.

00:10:47 --> 00:10:52
We were just putting so much effort on

00:10:49 --> 00:10:54
image models. So we just didn't have the

00:10:51 --> 00:10:56
resources. I think at the time we're

00:10:53 --> 00:10:58
probably still like six, seven people.

00:10:55 --> 00:11:01
And then the other reason was these

00:10:57 --> 00:11:03
image models there's so much demand and

00:11:00 --> 00:11:05
the use cases are starting to appear and

00:11:02 --> 00:11:07
it's looking like its own thing. Why

00:11:04 --> 00:11:10
don't we just focus here? Build

00:11:06 --> 00:11:12
something that's more clearly targeted

00:11:09 --> 00:11:14
towards its own users. That was kind of

00:11:11 --> 00:11:17
like the first moment where we said

00:11:13 --> 00:11:19
there's something here that is is kind

00:11:16 --> 00:11:21
of special about these models. Maybe

00:11:18 --> 00:11:23
they should be its own market. Like

00:11:20 --> 00:11:25
maybe we should be a specific platform

00:11:22 --> 00:11:28
for just images. And we had the idea

00:11:24 --> 00:11:30
that if we can do really good images, we

00:11:27 --> 00:11:32
can probably do really good video. We

00:11:29 --> 00:11:34
can probably do really good audio and

00:11:31 --> 00:11:36
like full experiences. just imagine like

00:11:33 --> 00:11:39
where where this can go and I think we

00:11:36 --> 00:11:41
had like a very early on very like

00:11:38 --> 00:11:42
strong conviction around how the space

00:11:40 --> 00:11:45
is going to evolve and that it's going

00:11:41 --> 00:11:47
to evolve into its own market and that

00:11:44 --> 00:11:48
's when we said okay like we're

00:11:46 --> 00:11:51
going to just focus on here we're going

00:11:47 --> 00:11:53
to beat the drum of generative media we

00:11:50 --> 00:11:55
want to be the torchbearer of the space

00:11:52 --> 00:11:57
and we're just going to be super focused

00:11:54 --> 00:12:00
here a few months after that I think

00:11:56 --> 00:12:02
Sora got announced and that was like

00:11:59 --> 00:12:05
definitely the right bet we were just so

00:12:01 --> 00:12:08
happy that, you know, someone proved

00:12:04 --> 00:12:09
ourselves right and we got really

00:12:07 --> 00:12:12
excited and like we doubled down even

00:12:08 --> 00:12:14
more on our messaging. I remember like

00:12:11 --> 00:12:16
going and changing the website copy like

00:12:13 --> 00:12:18
this is it you know this is what we're

00:12:15 --> 00:12:20
going to push and so we can talk about

00:12:17 --> 00:12:22
he whole arc what are the types of

00:12:19 --> 00:12:24
things people were building back then

00:12:21 --> 00:12:26
and like how that's changing a lot has

00:12:23 --> 00:12:28
happened I think even like in this in

00:12:25 --> 00:12:29
this short period of time

00:12:27 --> 00:12:32
>> definitely and you you put out a

00:12:28 --> 00:12:34
prediction that 2025 will be the tipping

00:12:31 --> 00:12:36
point of AI video of course announced it

00:12:33 --> 00:12:38
quite a bit earlier than that but now we

00:12:35 --> 00:12:40
are seeing a plethora of video models

00:12:37 --> 00:12:42
what's behind that prediction

00:12:39 --> 00:12:45
>> there was a very big push from Chinese

00:12:41 --> 00:12:48
labs in particular that initially when

00:12:44 --> 00:12:50
they were first pushing these models out

00:12:47 --> 00:12:52
it wasn't very clear like what was

00:12:49 --> 00:12:54
happening and it took some time for

00:12:51 --> 00:12:56
especially like in the west like for

00:12:53 --> 00:12:58
people to realize like what's going on

00:12:55 --> 00:13:00
so this we we kind of caught on this

00:12:57 --> 00:13:03
fairly early like sort of was like

00:12:59 --> 00:13:05
February and then in September time

00:13:02 --> 00:13:09
frame I think we first saw like Miniaax

00:13:04 --> 00:13:11
come out and it was like kind of foreign

00:13:08 --> 00:13:13
to to to everyone on and like people

00:13:10 --> 00:13:15
would just see things on Twitter and

00:13:12 --> 00:13:18
Instagram and get very like surprised

00:13:14 --> 00:13:20
about it and we thought it is starting

00:13:17 --> 00:13:22
and it's going to just go blow up from

00:13:19 --> 00:13:24
here. That was kind of the the bet we

00:13:21 --> 00:13:26
re making uh that you know we're going

00:13:23 --> 00:13:29
to have more models, we're going to have

00:13:25 --> 00:13:31
more capable models and here we are

00:13:28 --> 00:13:34
>> with Google's VO3 coming up. It sounds

00:13:30 --> 00:13:36
like your 2025 bet is correct again.

00:13:33 --> 00:13:38
Yes, I mean definitely what we see

00:13:35 --> 00:13:41
internally is every time there's a big

00:13:37 --> 00:13:43
shift in capabilities of models, the

00:13:40 --> 00:13:45
adoption and the use cases just it's

00:13:42 --> 00:13:47
like a step function. It just keeps

00:13:44 --> 00:13:49
growing. We're just I think scratching

00:13:46 --> 00:13:51
the surface. Audio is cool, but like

00:13:48 --> 00:13:53
there is actually really interesting

00:13:50 --> 00:13:54
things that like the V model is doing

00:13:52 --> 00:13:56
for example. It's very good at comedic

00:13:54 --> 00:13:58
timing for example. That's something

00:13:55 --> 00:14:00
like people say like and if you look at

00:13:57 --> 00:14:02
a lot of the like you know shorts people

00:13:59 --> 00:14:04
create it's like really freaking good.

00:14:01 --> 00:14:06
So there's things that you just

00:14:03 --> 00:14:08
experience with these models that like

00:14:05 --> 00:14:10
it's hard to kind of point out what they

00:14:07 --> 00:14:12
are, but these things are getting better

00:14:09 --> 00:14:13
and these are the things that like

00:14:11 --> 00:14:16
consumers and and enterprises are

00:14:12 --> 00:14:18
looking for in these models. So these

00:14:15 --> 00:14:19
capabilities are going to keep growing,

00:14:17 --> 00:14:22
keep getting better this year and next

00:14:18 --> 00:14:25
year. And one big learning from even our

00:14:21 --> 00:14:27
side on the modality bifurcation is

00:14:24 --> 00:14:28
given these are different workflows and

00:14:26 --> 00:14:32
ifferent workflows too like people are

00:14:28 --> 00:14:34
using image video models more as a chain

00:14:31 --> 00:14:36
workflow where you process image remove

00:14:33 --> 00:14:39
background you improve the resolution

00:14:35 --> 00:14:41
you add some more color pallets on top

00:14:38 --> 00:14:44
of it and then turn it into potentially

00:14:40 --> 00:14:46
more produced image or even video. It's

00:14:43 --> 00:14:49
a pretty complex and bespoke custom

00:14:45 --> 00:14:51
workflow that requires not just the

00:14:48 --> 00:14:52
inference engine itself but also how you

00:14:50 --> 00:14:55
built this workflow on top of it. The

00:14:52 --> 00:14:57
whole confi community are focused on

00:14:54 --> 00:15:00
that and that's just very different from

00:14:56 --> 00:15:02
language model. It it is like language

00:14:59 --> 00:15:04
models are very generalizable with just

00:15:01 --> 00:15:06
like an example you know we can zero

00:15:03 --> 00:15:08
shot oneshot most of the stuff that you

00:15:05 --> 00:15:10
can get but especially with the initial

00:15:07 --> 00:15:12
image models the the quality was not

00:15:09 --> 00:15:15
here to oneshot your generations right

00:15:11 --> 00:15:16
like editing or like upscaling you know

00:15:14 --> 00:15:18
rem background whatever it didn't

00:15:15 --> 00:15:21
generalize it was just a text to image

00:15:17 --> 00:15:22
model and conf UI thanks to conf UI

00:15:20 --> 00:15:24
people start discovering that you can

00:15:21 --> 00:15:26
just chain multiple stuff you can chain

00:15:23 --> 00:15:28
text image model and then do use the

00:15:25 --> 00:15:29
same thing as image to image to refine

00:15:27 --> 00:15:31
the image, change the image a bit or

00:15:28 --> 00:15:33
upscale the latence to get like a higher

00:15:30 --> 00:15:35
esolution image. So these like

00:15:32 --> 00:15:37
workflows started getting out and as

00:15:34 --> 00:15:39
oon as we started seeing that we we

00:15:36 --> 00:15:40
start thinking how can we make this more

00:15:38 --> 00:15:42
fficient because like one one thing

00:15:39 --> 00:15:44
this this worked well with consumer but

00:15:41 --> 00:15:46
it didn't scale up for as APIs it didn't

00:15:43 --> 00:15:48
like you know there was like different

00:15:45 --> 00:15:50
dependencies and every part of the stack

00:15:47 --> 00:15:52
is going to be optimized differently. So

00:15:49 --> 00:15:53
we even built our own workflows product

00:15:51 --> 00:15:55
just seeing the adoption of these

00:15:52 --> 00:15:57
multiple different models getting

00:15:54 --> 00:15:58
chained together or the same model

00:15:56 --> 00:16:00
getting used differently and then people

00:15:58 --> 00:16:02
are expecting to put a prompt then and

00:15:59 --> 00:16:03
get a result back you know for their own

00:16:01 --> 00:16:05
use case. I think that's really great

00:16:02 --> 00:16:07
for us to see this like happening

00:16:04 --> 00:16:09
because that means more creative use

00:16:06 --> 00:16:10
cases can appear even from the least

00:16:08 --> 00:16:12
capable models

00:16:09 --> 00:16:13
>> and that's part of the reason why even

00:16:11 --> 00:16:15
though there are a lot of attention on

00:16:12 --> 00:16:17
these diffusion transformer models as

00:16:14 --> 00:16:19
well that can get the end results

00:16:16 --> 00:16:21
through through just prompting with a

00:16:18 --> 00:16:24
lot of controllability you still need

00:16:20 --> 00:16:26
this more fine grain control on the

00:16:23 --> 00:16:28
image model itself. It just adds more

00:16:25 --> 00:16:31
capabilities into the overall pipeline.

00:16:28 --> 00:16:33
We also saw fine tuning being like a

00:16:30 --> 00:16:35
major component to this where if I have

00:16:32 --> 00:16:36
to guess I think there's been 1,000

00:16:34 --> 00:16:38
times more fine-tunings in the image

00:16:36 --> 00:16:40
space than the language space. People

00:16:37 --> 00:16:42
also fine-tune language models but not

00:16:39 --> 00:16:44
his much because this was the only way

00:16:41 --> 00:16:46
ou could provide context. Now there

00:16:43 --> 00:16:48
's like GPT image one high dreams

00:16:45 --> 00:16:50
edit model black force laps is a context

00:16:47 --> 00:16:52
model that gets additional context but

00:16:49 --> 00:16:54
we still see people fine-tuning for

00:16:51 --> 00:16:56
particular tasks you know like virtual

00:16:53 --> 00:16:58
tryon or characters products to get the

00:16:55 --> 00:17:00
highest amount of consistency out of it.

00:16:57 --> 00:17:03
Talking about the fine-tuning workflows

00:16:59 --> 00:17:05
and demand, we have seen a lot of

00:17:02 --> 00:17:07
difference in just like people focusing

00:17:04 --> 00:17:10
on more large scale pre-training or

00:17:06 --> 00:17:13
large scale post-training workflows

00:17:09 --> 00:17:16
where a lot of developers on fall are

00:17:12 --> 00:17:18
more doing these Laura training and

00:17:15 --> 00:17:20
building their you know unique styles.

00:17:17 --> 00:17:22
Is that deliberate from the file side to

00:17:19 --> 00:17:24
focus more on that type of workloads

00:17:21 --> 00:17:25
versus going all the way back to large

00:17:23 --> 00:17:26
pre-training and why did you make that

00:17:24 --> 00:17:28
decision

00:17:25 --> 00:17:29
>> is a generative media cloud ourselves I

00:17:27 --> 00:17:31
think we we are trying to target both

00:17:28 --> 00:17:33
use cases but the one that has the

00:17:30 --> 00:17:35
highest volume in terms of being able to

00:17:32 --> 00:17:37
use as an API we saw the finetuning was

00:17:34 --> 00:17:39
the most effective solution because it

00:17:36 --> 00:17:41
cost less there's so much opportunity

00:17:38 --> 00:17:43
for other people to use it versus like

00:17:40 --> 00:17:44
there's much less amount of people who

00:17:42 --> 00:17:46
can do the post training themselves but

00:17:44 --> 00:17:48
we now have like postraining solutions

00:17:45 --> 00:17:50
and distillation solutions for these

00:17:47 --> 00:17:52
large models that people can come give

00:17:49 --> 00:17:54
their data and get something out of it.

00:17:51 --> 00:17:55
And then we have been doing this one

00:17:53 --> 00:17:57
like we we even did one of these

00:17:54 --> 00:17:59
xamples with Freepic. We train like a

00:17:56 --> 00:18:01
we train an open source a model in

00:17:58 --> 00:18:02
collaboration with them called Flight

00:18:00 --> 00:18:05
and that was trained fully on commercial

00:18:02 --> 00:18:06
data using our proprietary training and

00:18:04 --> 00:18:08
ata processing stack.

00:18:05 --> 00:18:11
>> Talking about the open and closed source

00:18:07 --> 00:18:13
models, who is winning in both the image

00:18:10 --> 00:18:16
camp and also the video camp and how

00:18:12 --> 00:18:18
does th prepare for both sides of

00:18:15 --> 00:18:20
workloads? Yeah. So, the winner is

00:18:17 --> 00:18:22
literally changing monthtomonth. That's

00:18:19 --> 00:18:24
that's what we're seeing. It's like a

00:18:21 --> 00:18:26
fierce competition. It's very difficult

00:18:24 --> 00:18:29
o predict what's going to be the

00:18:25 --> 00:18:31
biggest model this month. In general,

00:18:28 --> 00:18:33
there is still a lot of demand for image

00:18:30 --> 00:18:36
models and there seems to be some kind

00:18:32 --> 00:18:38
of convergence on like quality, but then

00:18:35 --> 00:18:39
each model really has its own

00:18:37 --> 00:18:43
differentiation. Just to give some

00:18:38 --> 00:18:46
xamples like Imagen 3, imagen 4 very

00:18:42 --> 00:18:48
good at like character consistency. Flux

00:18:45 --> 00:18:50
amazing at having an ecosystem of

00:18:47 --> 00:18:53
different tooling, you know, so that

00:18:49 --> 00:18:56
like you can just kind of use an

00:18:52 --> 00:18:59
existing workflow someone's built, you

00:18:55 --> 00:19:01
know, or a fine-tune. Each model really

00:18:58 --> 00:19:03
brings its own capabilities. And I think

00:19:00 --> 00:19:04
foundation model companies also know

00:19:02 --> 00:19:07
this, right? Like they need to have

00:19:03 --> 00:19:09
their own edge also. So they they kind

00:19:06 --> 00:19:11
of play into their strengths and they

00:19:08 --> 00:19:12
all have their one thing that

00:19:10 --> 00:19:15
hey're like really very good at. With

00:19:11 --> 00:19:17
video, we're earlier in the competition.

00:19:14 --> 00:19:19
There's still a lot of leaprogging

00:19:16 --> 00:19:20
happening. There's just so much more to

00:19:18 --> 00:19:23
build and there's just like, you know,

00:19:19 --> 00:19:25
we haven't hit like a quality bar where

00:19:22 --> 00:19:27
there's just like marginal improvements.

00:19:24 --> 00:19:30
We're not there yet. So over there, it's

00:19:26 --> 00:19:32
like more fierce competition and it's

00:19:29 --> 00:19:33
very hard to predict what's going

00:19:31 --> 00:19:35
to happen next month. It's like that's

00:19:32 --> 00:19:38
we're operating at the scales of like

00:19:34 --> 00:19:41
weeks at this point. Our leaderboard is

00:19:38 --> 00:19:43
essentially the traffic that models

00:19:40 --> 00:19:44
are getting and that just keeps changing

00:19:42 --> 00:19:46
all the time.

00:19:43 --> 00:19:48
>> I remember when Sora came out even in

00:19:45 --> 00:19:51
our team people were like oh my god

00:19:47 --> 00:19:52
OpenAI is like so far ahead that no

00:19:50 --> 00:19:54
ne's going to be able to catch up and

00:19:51 --> 00:19:56
then like Luma released their model,

00:19:53 --> 00:19:58
Runway released their model, Cling

00:19:55 --> 00:19:59
released their model, Minx released and

00:19:57 --> 00:20:00
every release like if you're not the

00:19:58 --> 00:20:02
best you're not releasing generally

00:20:00 --> 00:20:03
that's how it works. So like everyone

00:20:01 --> 00:20:05
who's releasing is on the top and then

00:20:02 --> 00:20:07
like other players start entering like

00:20:04 --> 00:20:10
open source Genmo released their model,

00:20:06 --> 00:20:13
Tencent released Hunan, Alivo released

00:20:09 --> 00:20:15
one the competition is like very fierce

00:20:12 --> 00:20:17
and just seeing like V3 got released and

00:20:14 --> 00:20:20
two weeks later I remember seeing like

00:20:16 --> 00:20:22
bite dance C dance model just like

00:20:19 --> 00:20:24
leaprog them in the arena. You can never

00:20:21 --> 00:20:25
like say oh this is the model and then

00:20:23 --> 00:20:27
this is not going to have any

00:20:24 --> 00:20:29
competition for like even a month right

00:20:26 --> 00:20:30
like even like two weeks is like I think

00:20:28 --> 00:20:31
that we are operating at like two weeks

00:20:29 --> 00:20:34
as I said

00:20:30 --> 00:20:36
>> do you stay pretty agnostic for all the

00:20:33 --> 00:20:38
model uniqueness and quality or do you

00:20:36 --> 00:20:40
also poke around whenever a new model

00:20:37 --> 00:20:41
aunch to figure out if this model is

00:20:39 --> 00:20:43
uniquely good at this thing and just

00:20:40 --> 00:20:46
like generate a bunch of image and

00:20:42 --> 00:20:48
videos to know how to let's say serve

00:20:45 --> 00:20:50
the model to your developers. I think we

00:20:47 --> 00:20:51
built such a team that people are

00:20:49 --> 00:20:54
interested even if they weren't working

00:20:50 --> 00:20:56
at fall on which model is excels at what

00:20:53 --> 00:20:58
like they they know everything and like

00:20:55 --> 00:21:00
luckily we partner with these companies

00:20:57 --> 00:21:01
o we get to play with them before the

00:20:59 --> 00:21:03
release so that we can advise our

00:21:00 --> 00:21:04
customers because they are the ones that

00:21:02 --> 00:21:07
are asking us oh guys what is the best

00:21:04 --> 00:21:09
model for doing product photoshops or

00:21:06 --> 00:21:11
doing you know virtual tryon and we are

00:21:08 --> 00:21:12
the ones that is advising them and like

00:21:10 --> 00:21:15
getting playing with these models having

00:21:11 --> 00:21:17
a feel even like six month or 9 month

00:21:14 --> 00:21:19
old models might excel at something and

00:21:16 --> 00:21:21
people are like very sticking with it

00:21:18 --> 00:21:23
because it's it's like really good at

00:21:20 --> 00:21:24
logo generation let's say and that's

00:21:22 --> 00:21:27
a phenomenon that we're seeing

00:21:24 --> 00:21:29
like the best model of today might be

00:21:26 --> 00:21:30
st for generic tasks but there's very

00:21:28 --> 00:21:32
specialized task that people are using

00:21:30 --> 00:21:35
even like older models for that

00:21:31 --> 00:21:37
>> on this point more and more file start

00:21:34 --> 00:21:39
o become this two-sided marketplace

00:21:36 --> 00:21:42
where on one side you have a lot of this

00:21:38 --> 00:21:44
developer attention customers and users

00:21:41 --> 00:21:45
that have unique use cases that coming

00:21:43 --> 00:21:48
to you for the device and also for the

00:21:44 --> 00:21:49
API endpoints on these uh image video

00:21:47 --> 00:21:51
models on the other side because you

00:21:48 --> 00:21:53
have this developer attention which is

00:21:50 --> 00:21:56
awesome and more and more signing up

00:21:52 --> 00:21:58
every every day every week the model

00:21:55 --> 00:22:02
players wants to you know expose their

00:21:57 --> 00:22:04
models to the end users as well. Is this

00:22:01 --> 00:22:07
trategy sort of deliberate from from

00:22:03 --> 00:22:10
day one or it happened given this sort

00:22:06 --> 00:22:12
of booming of of diffusion models or or

00:22:09 --> 00:22:15
creative models and what's the strategy

00:22:11 --> 00:22:18
now? I would actually date this back to

00:22:14 --> 00:22:20
another moment where I think Clling was

00:22:17 --> 00:22:22
being released or it was released and it

00:22:19 --> 00:22:24
wasn't clear like where it's coming

00:22:21 --> 00:22:26
from, how does one run it and

00:22:24 --> 00:22:28
>> I remember there was this guessing game

00:22:25 --> 00:22:28
of like what is this model? Where is it

00:22:27 --> 00:22:29
from?

00:22:27 --> 00:22:30
>> Yes. Yeah.

00:22:28 --> 00:22:32
>> And why is it so good?

00:22:29 --> 00:22:34
>> Exactly. Like like Yeah. So, so it was a

00:22:32 --> 00:22:37
mystery to a lot of people and like I

00:22:34 --> 00:22:41
think we've really helped kind of bring

00:22:36 --> 00:22:43
those models to like the market here and

00:22:40 --> 00:22:45
you know it wasn't necessarily

00:22:42 --> 00:22:47
deliberate it just it was just something

00:22:44 --> 00:22:50
like we just felt very strong urge

00:22:46 --> 00:22:53
because we just saw such demand from

00:22:49 --> 00:22:55
our customers. So, you know, being

00:22:52 --> 00:22:58
a generative media platform, we

00:22:54 --> 00:23:00
just had to do it. And that sort of

00:22:57 --> 00:23:02
created a very interesting, like you

00:22:59 --> 00:23:05
said, like marketplace dynamics where

00:23:01 --> 00:23:07
after doing that a few times and I think

00:23:04 --> 00:23:11
after seeing how successful these models

00:23:06 --> 00:23:12
got, a lot of other companies actually

00:23:10 --> 00:23:14
wanted to come list things on fall. So

00:23:11 --> 00:23:16
that that sort of created a good

00:23:13 --> 00:23:19
flywheel effect for us where developers

00:23:15 --> 00:23:21
are at file because there's like these

00:23:18 --> 00:23:23
cool models and then you know model

00:23:20 --> 00:23:24
isters want to list on file because

00:23:22 --> 00:23:27
there's all the all the developers

00:23:24 --> 00:23:29
enterprises that we work with. So so

00:23:26 --> 00:23:31
luckily that turned into it its own

00:23:28 --> 00:23:33
business model for us essentially and

00:23:30 --> 00:23:35
yeah it's been it's been very

00:23:32 --> 00:23:36
successful. Another interesting angle

00:23:34 --> 00:23:39
there is that because of our success in

00:23:36 --> 00:23:41
like hosting open source models and like

00:23:38 --> 00:23:43
running this infrastructure extremely

00:23:40 --> 00:23:45
well, we also help some of these

00:23:42 --> 00:23:47
companies optimize their workloads,

00:23:44 --> 00:23:49
prepare them for launch day and help

00:23:46 --> 00:23:50
them benefit the infrastructure that

00:23:48 --> 00:23:52
we've built

00:23:49 --> 00:23:54
>> capacity planning and also anticipating

00:23:51 --> 00:23:57
what's the the peak uh and spiky

00:23:53 --> 00:23:59
workloads and also how to load balance.

00:23:56 --> 00:24:00
People generally overlook that aspect of

00:23:58 --> 00:24:02
the business because we don't really

00:23:59 --> 00:24:03
talk about our infrastructure that much

00:24:01 --> 00:24:05
because we think it's table stakes,

00:24:02 --> 00:24:07
right? Like every like if you want to do

00:24:04 --> 00:24:09
great inference engineering, you need to

00:24:06 --> 00:24:11
have like great infrastructure. We have

00:24:08 --> 00:24:14
an amazing infrastructure team. We're

00:24:10 --> 00:24:16
managing tens of thousands of GPUs at at

00:24:13 --> 00:24:18
certain peak points and to do that like

00:24:15 --> 00:24:20
we're essentially building a distributed

00:24:17 --> 00:24:22
supercomputer getting chunks of compute

00:24:19 --> 00:24:23
from like different vendors making sure

00:24:21 --> 00:24:25
all the workloads can be orchestrated

00:24:22 --> 00:24:28
and can scale up can scale down have

00:24:24 --> 00:24:30
access to super fast distributed file

00:24:27 --> 00:24:31
system to load the model weights.

00:24:29 --> 00:24:33
There's so many different problems there

00:24:30 --> 00:24:34
that we don't talk about but it's like

00:24:32 --> 00:24:36
it's a challenge that every foundation

00:24:33 --> 00:24:38
model company is trying to build inhouse

00:24:35 --> 00:24:39
and we are essentially trying to help

00:24:37 --> 00:24:40
them. You don't have to build this

00:24:38 --> 00:24:42
yourself. We built it. You can deploy

00:24:39 --> 00:24:43
our workloads here. You can optimize

00:24:41 --> 00:24:45
your inference while you deployed. And

00:24:42 --> 00:24:46
then when you need to scale, we're going

00:24:44 --> 00:24:48
to be there for you.

00:24:45 --> 00:24:50
>> Let's talk about that aspect. Speed is

00:24:47 --> 00:24:52
literally running through everything

00:24:49 --> 00:24:55
about the company. How you catch up with

00:24:51 --> 00:24:57
every new model launches, how you run

00:24:54 --> 00:24:59
every model, open source especially

00:24:56 --> 00:25:02
optimize it to, you know, the fastest

00:24:58 --> 00:25:04
speed on the market possible. And also

00:25:01 --> 00:25:06
how you spin up and down these uh

00:25:03 --> 00:25:08
different workloads, different models

00:25:05 --> 00:25:10
given this massive infrastructure. it's

00:25:07 --> 00:25:13
just permeating through the whole

00:25:09 --> 00:25:15
business. How have you gained the

00:25:12 --> 00:25:17
knowledge of what are the the critical

00:25:14 --> 00:25:19
inf infrastructure pieces that you need

00:25:16 --> 00:25:22
to really build from ground up versus

00:25:18 --> 00:25:25
let's say leveraging maybe one of the

00:25:21 --> 00:25:27
three cloud providers and where which

00:25:24 --> 00:25:28
layer are you have you strategically

00:25:26 --> 00:25:30
placed bets on that needs to be owned in

00:25:27 --> 00:25:32
house as a secret sauce

00:25:29 --> 00:25:33
>> from the start we were like okay when

00:25:31 --> 00:25:35
you remember the 8 GPU codas that I

00:25:32 --> 00:25:37
mentioned we were like okay we're never

00:25:34 --> 00:25:38
going to be able to get capacity

00:25:36 --> 00:25:41
allocation from hyperscalers as a

00:25:37 --> 00:25:42
seedstage startup back then And we we

00:25:40 --> 00:25:44
decided okay we're going to build a

00:25:41 --> 00:25:46
multicloud system with our own

00:25:43 --> 00:25:47
orchestration on top of it. We tried

00:25:45 --> 00:25:49
like we tried using Kubernetes other

00:25:46 --> 00:25:52
solutions but we found them to be too

00:25:48 --> 00:25:54
slow for cold starts because till to to

00:25:51 --> 00:25:56
that date like no one cared enough to

00:25:53 --> 00:25:57
start a workload and shut it down like

00:25:55 --> 00:25:59
after a request finished and start

00:25:56 --> 00:26:00
another one in like less than a second.

00:25:58 --> 00:26:02
You know when you were trying to do when

00:25:59 --> 00:26:03
we were trying to do multi cloud

00:26:01 --> 00:26:05
kubernetes we were seeing like 5second

00:26:02 --> 00:26:07
elays to orchestrate a single container

00:26:04 --> 00:26:09
just to for the to start and like 5

00:26:06 --> 00:26:11
seconds might be acceptable for like web

00:26:08 --> 00:26:12
workloads but not for our case where 5

00:26:10 --> 00:26:14
seconds of GPU time was very precious.

00:26:12 --> 00:26:16
So we started building our own

00:26:13 --> 00:26:17
orchestration system to be multicloud.

00:26:15 --> 00:26:19
And when you when you go multicloud,

00:26:16 --> 00:26:21
another big component is you need to be

00:26:18 --> 00:26:23
able to have access to the same data.

00:26:20 --> 00:26:26
And for our system to have the same

00:26:22 --> 00:26:28
level of developer comfortability as

00:26:25 --> 00:26:29
like other products, we needed file

00:26:27 --> 00:26:31
system to be accessible because like you

00:26:28 --> 00:26:33
know using S3 doesn't have the same

00:26:30 --> 00:26:34
level of comfort. So we built our own

00:26:32 --> 00:26:36
distributed file system storage using

00:26:34 --> 00:26:38
like uh existing solutions building

00:26:35 --> 00:26:40
stuff on top of us building

00:26:37 --> 00:26:42
multi-layered caching so we could cache

00:26:39 --> 00:26:44
at the data center within the nodes

00:26:41 --> 00:26:45
within nodes memory because like these

00:26:43 --> 00:26:47
nodes come with like two terabyte of RAM

00:26:44 --> 00:26:49
so like building all these solutions

00:26:46 --> 00:26:52
it's just like seeing it's it's a

00:26:48 --> 00:26:54
endless performance engineering work

00:26:51 --> 00:26:55
just going faster and faster there's no

00:26:53 --> 00:26:57
limit till like everything's at the

00:26:54 --> 00:26:58
light speed you know everything's at

00:26:56 --> 00:27:01
heical maximum we still have a long way

00:26:57 --> 00:27:02
to go but we have come a long way and

00:27:00 --> 00:27:03
this is one of the parts part of the

00:27:01 --> 00:27:05
infrastructure that you know our

00:27:02 --> 00:27:08
infrastructure team which is amazing is

00:27:04 --> 00:27:10
handling and helping serving our own you

00:27:08 --> 00:27:12
know applied ML and inference

00:27:09 --> 00:27:14
ngineering parts of the team they're

00:27:11 --> 00:27:14
like literally the service provider for

00:27:13 --> 00:27:16
those

00:27:13 --> 00:27:19
>> which optimization if you can recollect

00:27:15 --> 00:27:20
or recall has delivered the largest

00:27:18 --> 00:27:22
performance gain

00:27:19 --> 00:27:24
>> for infrastructure I guess distributed

00:27:21 --> 00:27:26
file system caching was one of the

00:27:23 --> 00:27:28
biggest points you know just making

00:27:25 --> 00:27:30
sure that if I load the same

00:27:27 --> 00:27:31
model weights in the same data center I

00:27:29 --> 00:27:33
can just read from my peers which I'm

00:27:30 --> 00:27:35
connected the 100 gigabit and if I use

00:27:32 --> 00:27:37
it from the same node I can read from

00:27:34 --> 00:27:38
the NVME. This was like a very big

00:27:36 --> 00:27:40
turning point versus not using like any

00:27:37 --> 00:27:42
caching and going to Google Cloud

00:27:39 --> 00:27:44
Storage or S3 every time you want to

00:27:41 --> 00:27:46
load model weights. This shaved off like

00:27:43 --> 00:27:48
a single amount of time and like this is

00:27:45 --> 00:27:49
till not like widely adopted because

00:27:47 --> 00:27:51
people don't really have the same issues

00:27:48 --> 00:27:53
when they're using a single cloud. If

00:27:50 --> 00:27:55
you're just using GKE or Amazon's like

00:27:52 --> 00:27:56
EKS, you're just using a single cluster

00:27:54 --> 00:27:58
and then you can have your storage

00:27:55 --> 00:28:00
there. But like this is these are the

00:27:57 --> 00:28:02
new challenges that we were like

00:27:59 --> 00:28:04
building for that enable like that

00:28:01 --> 00:28:06
required these sort of extremely well

00:28:03 --> 00:28:08
taught distributed caching systems.

00:28:05 --> 00:28:11
>> And do you fundamentally believe speed

00:28:07 --> 00:28:13
is a mode? However, you optimized for

00:28:10 --> 00:28:16
the model to run really fast and also

00:28:12 --> 00:28:18
how fast you can I guess optimize to the

00:28:15 --> 00:28:20
best performance point possible in that

00:28:17 --> 00:28:21
ime. When I look for open source, if I

00:28:19 --> 00:28:23
evaluate our inference engine from a

00:28:20 --> 00:28:26
year ago to open source today, it's

00:28:22 --> 00:28:28
falling behind because open source is

00:28:25 --> 00:28:30
catching up. I don't see inference

00:28:27 --> 00:28:32
ngineering speed as like that more.

00:28:29 --> 00:28:34
It's always focus and being one step

00:28:31 --> 00:28:36
ahead. Always being at the peak, right?

00:28:33 --> 00:28:38
Always putting if open source has a

00:28:35 --> 00:28:40
great idea, adopt it and then build your

00:28:37 --> 00:28:41
stuff on top of it. It's it's like if

00:28:39 --> 00:28:43
you're just saying, "Oh, I built this

00:28:40 --> 00:28:44
great thing. Here's the good set of

00:28:42 --> 00:28:46
kernels." it's going to get outdated

00:28:43 --> 00:28:48
because Nvidia has like 50 people

00:28:45 --> 00:28:49
working on these sort of stuff. I don't

00:28:47 --> 00:28:51
know Meta has like 100 people working on

00:28:48 --> 00:28:53
this stuff. So for us it's always this

00:28:50 --> 00:28:55
our focus running these diffusion

00:28:52 --> 00:28:57
models diffusion transformers extremely

00:28:54 --> 00:28:58
fast and whatever we can do we are just

00:28:56 --> 00:29:00
going to be try to one step ahead have

00:28:58 --> 00:29:01
this focus and then always be at the

00:28:59 --> 00:29:03
dge

00:29:00 --> 00:29:05
>> and how do you structure the team to

00:29:02 --> 00:29:08
keep up with what's happening I guess

00:29:04 --> 00:29:10
both at the big labs but also at the

00:29:07 --> 00:29:12
re are probably at this point a dozen

00:29:09 --> 00:29:14
or two dozens of generative media

00:29:11 --> 00:29:16
companies are developing different

00:29:13 --> 00:29:18
styles and types of models. What is

00:29:15 --> 00:29:20
cutting edge? what is the best

00:29:17 --> 00:29:22
performance price point for whether it's

00:29:19 --> 00:29:24
image generation or video generation

00:29:21 --> 00:29:27
like it sort of is a constant you know

00:29:23 --> 00:29:29
moving target and and for you to provide

00:29:26 --> 00:29:31
the best price quality for your end user

00:29:28 --> 00:29:33
and customers you kind of have to stay

00:29:30 --> 00:29:35
very educated about the whole market so

00:29:32 --> 00:29:37
how have you I guess structured the team

00:29:34 --> 00:29:40
to to do that

00:29:36 --> 00:29:43
>> I think pretty early on we put a lot of

00:29:39 --> 00:29:46
effort in engineering obviously like I

00:29:42 --> 00:29:47
think until we were like 28 people or so

00:29:45 --> 00:29:50
we were all engineers years and I think

00:29:46 --> 00:29:52
like the 28th hire was a non-engineer.

00:29:49 --> 00:29:56
So like our core is like very

00:29:51 --> 00:29:58
engineering heavy but around that time

00:29:55 --> 00:29:59
like the business was also picking up

00:29:57 --> 00:30:02
and we thought that we also have to have

00:29:58 --> 00:30:05
a very strong business team like go to

00:30:01 --> 00:30:07
market team. So these were very very

00:30:04 --> 00:30:09
important to us and I think in false

00:30:06 --> 00:30:12
culture we are results driven we are

00:30:08 --> 00:30:14
ally revenue driven that basically

00:30:11 --> 00:30:17
meant that like we have to be just as

00:30:13 --> 00:30:20
good at go to market as as engineering

00:30:16 --> 00:30:22
so you know we have a small go to market

00:30:19 --> 00:30:24
eam we're currently 40 people we have a

00:30:21 --> 00:30:26
smallish go to market team it's like six

00:30:23 --> 00:30:28
people up until that point you know we

00:30:25 --> 00:30:31
re doing founder le sales like three

00:30:27 --> 00:30:34
four like all of us like four of us in

00:30:30 --> 00:30:35
addition to that six people and then the

00:30:33 --> 00:30:37
rest of the team is like pretty much

00:30:34 --> 00:30:39
engineering and within engineering I

00:30:36 --> 00:30:41
mean but can talk more towards it but

00:30:38 --> 00:30:43
we're responsible for optimizing the

00:30:40 --> 00:30:46
whole journey of a request essentially

00:30:42 --> 00:30:49
so there's infra engineers performance

00:30:45 --> 00:30:51
ngineers there's product engineers

00:30:48 --> 00:30:53
right so we can deliver this whole

00:30:50 --> 00:30:56
technology in like a really amazing

00:30:52 --> 00:30:58
usable way and then we have a massive

00:30:55 --> 00:31:00
applied ML engineering team and that's

00:30:57 --> 00:31:02
like you know one of our I think

00:30:59 --> 00:31:03
secret sauces I believe the team is like

00:31:01 --> 00:31:04
10 11 people

00:31:02 --> 00:31:06
>> love anyone

00:31:04 --> 00:31:08
>> half the more than half the engineering

00:31:05 --> 00:31:10
team is applied ML and these are the

00:31:07 --> 00:31:13
folks who are literally like obsessed

00:31:10 --> 00:31:15
about you know this market and this

00:31:12 --> 00:31:18
pace getting all these models put them

00:31:14 --> 00:31:20
in production um being like the experts

00:31:17 --> 00:31:22
for our customers to answer any

00:31:19 --> 00:31:24
questions they have and within this team

00:31:21 --> 00:31:26
even so we have we have some folks that

00:31:23 --> 00:31:28
like sit outside of this team that focus

00:31:25 --> 00:31:30
on performance but within this team we

00:31:27 --> 00:31:33
also have like performance engineers

00:31:29 --> 00:31:35
ome that are like more customerf facing

00:31:32 --> 00:31:37
some that are more like post- trainining

00:31:34 --> 00:31:40
fine-tuning uh focused so it's it's

00:31:36 --> 00:31:42
really a mix and and that that team is

00:31:39 --> 00:31:42
like you know bulk of our engineering

00:31:41 --> 00:31:44
team

00:31:41 --> 00:31:47
>> let's talk about go to market enterprise

00:31:44 --> 00:31:50
because it's so it's so fascinating to

00:31:46 --> 00:31:52
me how obsessed of these 28 engineers

00:31:49 --> 00:31:53
are at the business problems because

00:31:51 --> 00:31:55
it's very rare to find when you're

00:31:52 --> 00:31:57
already so deep into the infrastructure

00:31:54 --> 00:32:00
and performance engineering at the same

00:31:56 --> 00:32:02
time solving really bespoke customer

00:31:59 --> 00:32:04
problems right I've not met any other

00:32:01 --> 00:32:07
engineering teams that are so customer

00:32:03 --> 00:32:10
focused, customer obsessed and also

00:32:06 --> 00:32:13
market driven too. Even for the founders

00:32:09 --> 00:32:14
yourselves being just very forward in

00:32:12 --> 00:32:17
having the sales conversations with

00:32:13 --> 00:32:19
customers leaning into enterprise sales,

00:32:16 --> 00:32:22
it is just a very interesting and unique

00:32:18 --> 00:32:24
culture. Do you think that's also a

00:32:21 --> 00:32:26
deliberate decision or it's more being

00:32:23 --> 00:32:28
pulled by this customerdriven uh

00:32:25 --> 00:32:29
development uh fashion? How did it come

00:32:28 --> 00:32:31
about?

00:32:28 --> 00:32:33
>> It's very deliberate. It's just like I

00:32:30 --> 00:32:36
think it's part of our culture. We tend

00:32:32 --> 00:32:38
to hire people that are very ambitious.

00:32:35 --> 00:32:41
I mean in order to win you have to win

00:32:37 --> 00:32:43
the market like you have to win these

00:32:40 --> 00:32:45
customers and have them work with you,

00:32:42 --> 00:32:48
right? So like it really means that you

00:32:44 --> 00:32:50
know we have to not only like build

00:32:47 --> 00:32:52
amazing technology but like we have to

00:32:49 --> 00:32:55
also like grow the business. We heard a

00:32:51 --> 00:32:58
lot about enterprise sales right and

00:32:54 --> 00:33:00
like from including you in fact like you

00:32:57 --> 00:33:02
introduced us to our first like you know

00:32:59 --> 00:33:05
sales adviser I think with technical

00:33:01 --> 00:33:09
founders engineering general there is

00:33:04 --> 00:33:11
this like massive skepticism about sales

00:33:08 --> 00:33:13
famously like engineers hate to like

00:33:10 --> 00:33:15
talk to sales people or be marketed to

00:33:12 --> 00:33:16
you know all this all this stuff and

00:33:14 --> 00:33:18
yeah I think I think it was hey like

00:33:16 --> 00:33:20
let's listen to you know what people are

00:33:18 --> 00:33:22
saying they've seen thousands of

00:33:19 --> 00:33:26
companies there there must be some merit

00:33:21 --> 00:33:28
o that and initially I think even we

00:33:25 --> 00:33:29
felt a little bit uncomfortable but it

00:33:27 --> 00:33:32
didn't take that long I think once we

00:33:28 --> 00:33:34
saw the results we were just like okay

00:33:31 --> 00:33:37
like this is something we really need to

00:33:33 --> 00:33:40
be doing so I think we're just you know

00:33:36 --> 00:33:43
gami batan like we're just very open to

00:33:39 --> 00:33:46
learning and and adapting and and do

00:33:42 --> 00:33:48
whatever it takes to like really win and

00:33:45 --> 00:33:49
you know that's that's kind of what

00:33:47 --> 00:33:51
actually ended up happening there

00:33:48 --> 00:33:53
and and like we

00:33:50 --> 00:33:55
We got a very good hang of it very fast

00:33:52 --> 00:33:58
and and we had some really amazing

00:33:54 --> 00:34:00
people like supporting us and and yeah

00:33:57 --> 00:34:03
and you know we got so into it I think

00:34:00 --> 00:34:05
we like couldn't let it go and we did

00:34:02 --> 00:34:08
like founder sale founder net sales for

00:34:04 --> 00:34:10
so long and then eventually we said okay

00:34:07 --> 00:34:12
like you know we can actually hire a

00:34:09 --> 00:34:15
team we can scale this turn this into

00:34:11 --> 00:34:16
like a you know machine and and you know

00:34:14 --> 00:34:18
that's that's kind of what we've been

00:34:15 --> 00:34:20
doing and it's been very successful

00:34:17 --> 00:34:22
>> we we are like really customer centric

00:34:19 --> 00:34:23
when consider a company. I think we

00:34:21 --> 00:34:26
might be one of the company like we

00:34:22 --> 00:34:28
might in the in the top leaderboard of

00:34:25 --> 00:34:29
Slack connects across all Slack users.

00:34:27 --> 00:34:30
You know we have Slack connects with

00:34:28 --> 00:34:32
almost all of our customers. The

00:34:29 --> 00:34:34
channels are open. So engineers are

00:34:32 --> 00:34:36
inside the channels like every channel

00:34:33 --> 00:34:38
might have like an average three four

00:34:35 --> 00:34:40
different engineers from applied ML team

00:34:37 --> 00:34:41
product. We are like very centric and

00:34:39 --> 00:34:43
that's the sort of profile that we try

00:34:40 --> 00:34:44
to hire with sales as well. People who

00:34:42 --> 00:34:46
are going to listen to these customers,

00:34:43 --> 00:34:48
people who are here to serve the

00:34:45 --> 00:34:49
customers not sell stuff. I think that

00:34:47 --> 00:34:51
arises from the fact that we're coming

00:34:48 --> 00:34:53
from an engineering background. We don't

00:34:50 --> 00:34:55
want stuff to be sold to us. We want

00:34:52 --> 00:34:56
people to serve us, help us, grow with

00:34:54 --> 00:34:57
us, partner with us. And that's the

00:34:55 --> 00:34:59
profile that we have been hiring.

00:34:56 --> 00:35:01
>> I think that's a really great point is

00:34:58 --> 00:35:02
ales today, especially when you're

00:35:00 --> 00:35:04
selling infrastructure as well as dev

00:35:02 --> 00:35:07
tooling. It's very different from let's

00:35:03 --> 00:35:09
ay 5 10 years ago when you're building

00:35:06 --> 00:35:11
this beautiful deck and talking about a

00:35:08 --> 00:35:13
lot of the performance and trades of

00:35:10 --> 00:35:15
what you get from a third party vendor

00:35:12 --> 00:35:17
versus building in-house. It's very much

00:35:14 --> 00:35:18
about how you can learn with us even

00:35:16 --> 00:35:21
faster and how we can be embedded with

00:35:17 --> 00:35:23
your problem so we can serve that demand

00:35:20 --> 00:35:25
as well just because the speed of

00:35:22 --> 00:35:27
iteration that nobody has a perfect

00:35:24 --> 00:35:29
knowledge but you have a very unique

00:35:26 --> 00:35:31
insights about how generative models

00:35:28 --> 00:35:33
work and you can serve the customers

00:35:30 --> 00:35:34
best when you're so entrenched with them

00:35:32 --> 00:35:36
and I have introduced a lot of sales

00:35:33 --> 00:35:38
advisors or sales leaders to companies

00:35:35 --> 00:35:40
but I think you guys have embraced it

00:35:37 --> 00:35:41
perfectly and really it shows from the

00:35:39 --> 00:35:43
company culture

00:35:40 --> 00:35:45
>> yeah we want our sales people to be

00:35:42 --> 00:35:47
advocates for the customers so that we

00:35:44 --> 00:35:49
don't drop the ball on their future

00:35:46 --> 00:35:50
quests, on their needs. We always are

00:35:48 --> 00:35:53
there to serve them. Making that the

00:35:49 --> 00:35:55
culture thing worked really well for us.

00:35:52 --> 00:35:59
>> Last question. If you put yourself a

00:35:54 --> 00:36:02
year or two ahead in 2026 or 2027, if

00:35:58 --> 00:36:04
generative video do not take off or as

00:36:01 --> 00:36:06
big as it is, what would be the reason

00:36:03 --> 00:36:08
that caused the slop?

00:36:05 --> 00:36:10
>> I think it's impossible that it doesn't

00:36:07 --> 00:36:11
ake off. It's here. It's all over my

00:36:09 --> 00:36:12
feed. I I don't know about your

00:36:10 --> 00:36:14
Instagram feed, but like

00:36:11 --> 00:36:16
>> I couldn't tell which ones are real,

00:36:13 --> 00:36:17
which ones are not these days.

00:36:15 --> 00:36:19
>> It's it's it's one of those things I

00:36:16 --> 00:36:20
think like it's it's too late now, you

00:36:18 --> 00:36:22
know, it's like, you know, cats out of

00:36:19 --> 00:36:24
the box. I think the question is more

00:36:21 --> 00:36:26
like how is it going to be distributed

00:36:24 --> 00:36:28
across like different industries? Where

00:36:25 --> 00:36:30
are the biggest opportunities and like

00:36:27 --> 00:36:31
how can we actually go invest in those

00:36:29 --> 00:36:33
areas

00:36:30 --> 00:36:35
>> and what are the areas that you see

00:36:32 --> 00:36:37
opportunities but not enough developers

00:36:34 --> 00:36:39
are paying attention or figured out that

00:36:36 --> 00:36:41
hese could be use cases or these could

00:36:38 --> 00:36:43
be interesting products to build on top

00:36:40 --> 00:36:45
of file that you feel is underrated or

00:36:42 --> 00:36:49
underdiscovered now. Yeah, we have like

00:36:44 --> 00:36:51
a god's view on like all the things

00:36:48 --> 00:36:54
people are building which is very very

00:36:50 --> 00:36:56
fun and and we see lots of very

00:36:53 --> 00:37:00
interesting things when we talk about

00:36:55 --> 00:37:02
his among ourselves. I think what we

00:36:59 --> 00:37:03
all agree is that we're very excited

00:37:01 --> 00:37:06
about the net new use cases,

00:37:02 --> 00:37:08
recreational, you know, image

00:37:05 --> 00:37:10
neration, like people just like having

00:37:07 --> 00:37:13
fun with it and that becoming like now

00:37:09 --> 00:37:15
video that becoming maybe like short

00:37:12 --> 00:37:17
playable games or whatever. Like those

00:37:14 --> 00:37:19
kinds of things are going to start

00:37:16 --> 00:37:21
happening as these models get bigger.

00:37:18 --> 00:37:23
We're most excited about these net new

00:37:20 --> 00:37:25
use cases, which is not to say like

00:37:22 --> 00:37:28
verything else is small, but it really

00:37:24 --> 00:37:30
feels like these technologies are so

00:37:27 --> 00:37:32
powerful that like we're going to get a

00:37:29 --> 00:37:35
lot of net new things being built on

00:37:32 --> 00:37:37
top. Yeah, I'm for for one example, very

00:37:34 --> 00:37:39
excited about the the real time

00:37:36 --> 00:37:40
generated ads that's placed in videos

00:37:38 --> 00:37:43
too because I that's always been the

00:37:40 --> 00:37:45
dream of how you can adapt the

00:37:42 --> 00:37:48
advertising in a video in a show

00:37:44 --> 00:37:50
>> to display certain products, but now it

00:37:47 --> 00:37:51
seems very much possible given what's

00:37:49 --> 00:37:53
happening in the generative media world

00:37:50 --> 00:37:56
and also just all the IKEA rooms

00:37:52 --> 00:37:59
unpacking videos are so fascinating.

00:37:55 --> 00:38:00
>> They're great. I mean like cat Olympics.

00:37:58 --> 00:38:03
>> Yep. Exactly.

00:37:59 --> 00:38:03
>> Yeah, those are very Those are amazing.

00:38:02 --> 00:38:05
Yes,

00:38:02 --> 00:38:07
>> even the interviewers themselves,

00:38:04 --> 00:38:09
they're going to be AI generated. That's

00:38:06 --> 00:38:11
>> true. True. But it won't be this fun of

00:38:08 --> 00:38:14
a conversation.

00:38:10 --> 00:38:15
>> Thank you so much, Batan Burkai. This is

00:38:13 --> 00:38:17
awesome. Really great to have you guys.

00:38:14 --> 00:38:20
>> Thank you for hosting us. Of course.

00:38:16 --> 00:38:20
Yeah.

<!-- YOUTUBE_TRANSCRIPT_END -->
