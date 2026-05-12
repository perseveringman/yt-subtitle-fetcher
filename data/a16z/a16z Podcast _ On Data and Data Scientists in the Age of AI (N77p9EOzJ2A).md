---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "N77p9EOzJ2A"
title: "a16z Podcast | On Data and Data Scientists in the Age of AI"
video_url: "https://www.youtube.com/watch?v=N77p9EOzJ2A"
thumbnail_url: "https://i.ytimg.com/vi/N77p9EOzJ2A/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=N77p9EOzJ2A"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:41:06.000Z"
upload_date: "2019-01-02"
duration_seconds: 583
duration_human: "9:43"
view_count: 190
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:57:06.937Z"
---

# a16z Podcast | On Data and Data Scientists in the Age of AI

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=N77p9EOzJ2A
- video_id: N77p9EOzJ2A
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:41:06.000Z
- upload_date: 2019-01-02
- duration: 9:43
- view_count: 190
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Data, data, everywhere, nor any drop to drink. Or so would say Coleridge, if he were a big company CEO trying to use A.I. today -- because even when you have a ton of data, there's not always enough signal to get anything meaningful from AI.

Why? Because, "like they say, it's 'garbage in, garbage out' -- what matters is what you have in between," reminds Databricks co-founder (and director of the RISElab at U.C. Berkeley) Ion Stoica. And even then it's still not just about data operations, emphasizes SigOpt co-founder Scott Clark; your data scientists need to really understand "What's actually right for my business and what am I actually aiming for?" And then get there as efficiently as possible.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi everyone welcome to the a 6 & Z

00:00:02 --> 00:00:08
podcast today's episode continuing our

00:00:05 --> 00:00:10
series on translating AI into practice

00:00:07 --> 00:00:12
is one of our shorter bites based on a

00:00:09 --> 00:00:15
panel discussion that took place at a

00:00:11 --> 00:00:15
recent annual a6 and z summit event just

00:00:14 --> 00:00:18
last month

00:00:14 --> 00:00:19
operating partner Frank Chen who put out

00:00:17 --> 00:00:22
a micro set on getting started with AI

00:00:18 --> 00:00:24
earlier this year talks with Yan Strika

00:00:21 --> 00:00:27
co-founder of data bricks and Scott

00:00:23 --> 00:00:28
Clarke co-founder of cig opt and both

00:00:26 --> 00:00:29
ave been on this podcast if you wanna

00:00:27 --> 00:00:32
hear more from them in other episodes

00:00:28 --> 00:00:33
about the cold start problem for

00:00:31 --> 00:00:36
companies getting started with AI

00:00:32 --> 00:00:38
especially focusing on the role of data

00:00:35 --> 00:00:42
scientists and domain experts in this

00:00:37 --> 00:00:44
context you guys now between the two of

00:00:41 --> 00:00:46
you have now sort of been with the

00:00:43 --> 00:00:48
customer on their journeys from sort of

00:00:45 --> 00:00:50
day one until they have models in

00:00:47 --> 00:00:52
production and so what advice do you

00:00:49 --> 00:00:54
have for people who aren't Google Amazon

00:00:51 --> 00:00:55
Facebook Apple to realize machine

00:00:53 --> 00:00:57
learning what do they need to do on day

00:00:54 --> 00:01:00
one we have many enterprise companies

00:00:56 --> 00:01:03
and out of them over 70% actually they

00:00:59 --> 00:01:05
have AI projects and what we see

00:01:02 --> 00:01:08
actually if you take the step back there

00:01:04 --> 00:01:11
are three stages the first stage is to

00:01:07 --> 00:01:13
make sure that you have the data many

00:01:10 --> 00:01:16
times this takes more than actually

00:01:12 --> 00:01:18
building the machine learning or AI

00:01:15 --> 00:01:21
model the second thing is about once you

00:01:17 --> 00:01:23
have the data to become so to speak to

00:01:20 --> 00:01:27
perationalizes to become a data-driven

00:01:22 --> 00:01:29
company to figure out what are the KPIs

00:01:26 --> 00:01:32
key performance indicators which are

00:01:28 --> 00:01:34
going to be driving your business you

00:01:31 --> 00:01:36
need to take this KPI is based on the

00:01:33 --> 00:01:39
data and operationalize meanings to have

00:01:35 --> 00:01:41
reports dashboard and so forth and now

00:01:38 --> 00:01:44
once you have this then you are going to

00:01:40 --> 00:01:47
start and use machine learning and AI to

00:01:43 --> 00:01:50
improve this kpi's so that's kind of the

00:01:46 --> 00:01:52
journey so that sounds great you have

00:01:49 --> 00:01:55
this sort of very methodical process

00:01:51 --> 00:01:57
oriented roadmap to get from here to

00:01:54 --> 00:01:59
there so tell me where can I go wrong

00:01:56 --> 00:02:01
where are the pitfalls where have you

00:01:58 --> 00:02:05
seen people get stuck on this journey

00:02:00 --> 00:02:06
eah at every single one of those stages

00:02:04 --> 00:02:08
there are pitfalls that you're going to

00:02:05 --> 00:02:10
need to try to avoid

00:02:07 --> 00:02:12
from just making sure that you have the

00:02:09 --> 00:02:14
right data that it represents what's

00:02:11 --> 00:02:17
actually happening in the real world to

00:02:13 --> 00:02:19
defining those KPIs and metrics there

00:02:16 --> 00:02:21
needs to be this huge contextual

00:02:18 --> 00:02:23
component and I think that's where data

00:02:20 --> 00:02:25
science is moving towards as more and

00:02:22 --> 00:02:27
more of these more arduous tasks its

00:02:24 --> 00:02:28
automated that you need to be able to

00:02:26 --> 00:02:30
say what's actually right for my

00:02:27 --> 00:02:32
business and what am I actually aiming

00:02:29 --> 00:02:35
for and then of course it's how do I get

00:02:31 --> 00:02:37
here as efficiently as possible again I

00:02:34 --> 00:02:40
cannot emphasize enough how important is

00:02:36 --> 00:02:42
the data and this is a continuous

00:02:39 --> 00:02:44
process you need to devote resources on

00:02:41 --> 00:02:45
a continuous basis to make sure the data

00:02:43 --> 00:02:48
is correct because you know you are

00:02:44 --> 00:02:50
going to get data from your sources you

00:02:47 --> 00:02:53
are going to change the software which

00:02:49 --> 00:02:56
logs some of the data everywhere you can

00:02:52 --> 00:02:59
have mistakes can happen and

00:02:55 --> 00:03:00
like they say you know garbage in

00:02:58 --> 00:03:02
garbage out no matter what it's house

00:02:59 --> 00:03:04
map is what you have in between so

00:03:01 --> 00:03:06
that's number one so you really need to

00:03:03 --> 00:03:10
be paranoid about your data collection

00:03:05 --> 00:03:12
the accuracy of your data I think the

00:03:09 --> 00:03:14
other thing is when I said about the

00:03:11 --> 00:03:17
second stage typically it's about

00:03:13 --> 00:03:18
figuring out what are the KPIs

00:03:16 --> 00:03:21
that's all you know actually when you

00:03:17 --> 00:03:22
hire data scientists actually having

00:03:20 --> 00:03:25
data scientists which have a good

00:03:21 --> 00:03:28
understanding about your business or can

00:03:24 --> 00:03:30
work with people the business people

00:03:27 --> 00:03:33
it's extremely important

00:03:29 --> 00:03:34
fundamentally data science is about you

00:03:32 --> 00:03:37
know you're not Romney's now statistics

00:03:33 --> 00:03:40
and you know to know math and of course

00:03:36 --> 00:03:42
machine learning but you need to either

00:03:39 --> 00:03:46
be a domain expert in what you are doing

00:03:41 --> 00:03:47
or work well with domain experts so I

00:03:45 --> 00:03:49
had asked what are the pitfalls where

00:03:46 --> 00:03:51
can it go wrong I'm gonna ask the

00:03:48 --> 00:03:55
inverse of that questions so number one

00:03:50 --> 00:03:57
is productivity of people it's hard as

00:03:54 --> 00:03:59
you know getting hiring best data

00:03:56 --> 00:04:01
scientist and retaining them it's a nice

00:03:58 --> 00:04:03
best thing you can do is to make them

00:04:00 --> 00:04:04
ore productive even more to make your

00:04:02 --> 00:04:07
organization more productive by allowing

00:04:03 --> 00:04:09
them to share the artifacts they build

00:04:06 --> 00:04:10
in terms of models which everyone is the

00:04:08 --> 00:04:13
organization sometimes it will be as

00:04:09 --> 00:04:15
imple as using a model as writing the

00:04:12 --> 00:04:18
sequel query so I think that's a very

00:04:14 --> 00:04:22
important aspect the other one which is

00:04:17 --> 00:04:24
related with that time-to-market right

00:04:21 --> 00:04:26
it's basically you know there have many

00:04:23 --> 00:04:29
companies we can cut the time tomorrow

00:04:25 --> 00:04:31
from idea to product by one or remind

00:04:28 --> 00:04:33
you I want to go back to this sort of

00:04:30 --> 00:04:36
getting started the cold start problem

00:04:32 --> 00:04:37
right in AI cuz I've met with hundreds

00:04:35 --> 00:04:39
of companies now who are beginning their

00:04:36 --> 00:04:41
AI journeys and if I were to summarize

00:04:38 --> 00:04:43
their frustration it would be this it's

00:04:40 --> 00:04:46
like you Silicon Valley guys drive me

00:04:42 --> 00:04:48
crazy you told me I couldn't run on bare

00:04:45 --> 00:04:50
metal I had to run on hypervisors and

00:04:47 --> 00:04:51
then you said I can't run in my own data

00:04:49 --> 00:04:53
center I have to run in the cloud and

00:04:50 --> 00:04:55
then you have to build an iPhone app

00:04:52 --> 00:04:58
that's native you can't just do mobile

00:04:54 --> 00:05:00
web and you have to do big data analysis

00:04:57 --> 00:05:01
and get really good at analysis and now

00:04:59 --> 00:05:03
like you're coming and telling me I have

00:05:00 --> 00:05:05
to do AI and machine learning like I

00:05:02 --> 00:05:07
can't keep up there's too much stuff so

00:05:04 --> 00:05:09
as you think about the companies that

00:05:06 --> 00:05:11
have been successful with their projects

00:05:08 --> 00:05:14
how do they get over the cold start

00:05:10 --> 00:05:15
problem do they hire consultants do they

00:05:13 --> 00:05:17
repurpose internal engineers do they

00:05:14 --> 00:05:19
send into training classes do they hire

00:05:16 --> 00:05:21
people from all of these data science

00:05:18 --> 00:05:23
boot camps yes so I think it's it's a

00:05:20 --> 00:05:25
very hard problem so as any hard

00:05:22 --> 00:05:27
problems that is now single silver

00:05:24 --> 00:05:30
bullet so we try to solve this problem

00:05:26 --> 00:05:33
by emphasizing on different aspects

00:05:29 --> 00:05:35
everything from education deployment and

00:05:32 --> 00:05:37
so forth the one thing I want to also

00:05:34 --> 00:05:39
mention again from our observation the

00:05:36 --> 00:05:42
small companies actually they start with

00:05:38 --> 00:05:44
e AI mindset they're building the AI

00:05:41 --> 00:05:46
platform to solve a specific problem as

00:05:43 --> 00:05:48
opposed to being an incumbent that's

00:05:45 --> 00:05:50
then trying to apply AI to what they

00:05:47 --> 00:05:51
already have but let me talk a little

00:05:49 --> 00:05:54
bit about the enterprise you know there

00:05:50 --> 00:05:56
are 50 years or even some cases over 100

00:05:53 --> 00:05:58
year old companies so they want to use

00:05:55 --> 00:06:01
AI again to improve their business

00:05:57 --> 00:06:02
competitivity so what we see is that the

00:06:00 --> 00:06:05
nterprise which are the most successful

00:06:01 --> 00:06:08
they go all-in what do I mean is because

00:06:04 --> 00:06:10
they have multiple projects is not only

00:06:07 --> 00:06:13
one project and yes you can try with one

00:06:09 --> 00:06:16
project and so forth to kind of test it

00:06:12 --> 00:06:19
but at the end of the day it's hard when

00:06:15 --> 00:06:20
you start a data science AI project to

00:06:18 --> 00:06:23
know is very successful in many cases

00:06:19 --> 00:06:24
goes down to the fact that even after

00:06:22 --> 00:06:26
you have the data it may not be enough

00:06:24 --> 00:06:29
to get the kind of improvement you

00:06:25 --> 00:06:31
expect so is think about is like hedging

00:06:28 --> 00:06:34
these other companies who have multiple

00:06:30 --> 00:06:36
projects they are doing you know some of

00:06:33 --> 00:06:37
these projects are going to be

00:06:35 --> 00:06:40
access for but not all of them can be

00:06:37 --> 00:06:42
successful do we know companies which

00:06:39 --> 00:06:44
actually very technical and sample the

00:06:41 --> 00:06:45
project fails because there is not

00:06:43 --> 00:06:47
enough data so you believe that it's

00:06:44 --> 00:06:49
enough data but it's not enough is that

00:06:46 --> 00:06:51
it's not enough signal at least is what

00:06:48 --> 00:06:52
we've seen and one of the things we see

00:06:50 --> 00:06:53
is different than kind of these

00:06:51 --> 00:06:54
traditional approaches is that

00:06:52 --> 00:06:57
cold-start

00:06:53 --> 00:06:59
used to take maybe a decade to kind of

00:06:56 --> 00:07:01
move from your own bare-metal data

00:06:58 --> 00:07:03
centers to the cloud and things like

00:07:00 --> 00:07:05
that but now like all the pieces are

00:07:02 --> 00:07:07
kind of coming together for a I like a

00:07:04 --> 00:07:08
lot of these traditional bottlenecks

00:07:06 --> 00:07:10
that would have traditionally taken the

00:07:07 --> 00:07:13
nterprise oh we need to do this over

00:07:09 --> 00:07:15
five ten years now you can kind of get

00:07:12 --> 00:07:17
up and running very quickly like the the

00:07:14 --> 00:07:19
pieces are there to move very quickly so

00:07:16 --> 00:07:21
I think that cold start problem where it

00:07:18 --> 00:07:22
used to be this huge threshold where you

00:07:20 --> 00:07:25
had to get over is now becoming easier

00:07:21 --> 00:07:26
and easier and there's less of an excuse

00:07:24 --> 00:07:28
why you're not actually doing it to be

00:07:25 --> 00:07:31
honest that's a perfect springboard to

00:07:27 --> 00:07:32
my last question which is we're in this

00:07:30 --> 00:07:35
cycle right now where the tools are

00:07:31 --> 00:07:37
improving rapidly right and so what used

00:07:34 --> 00:07:39
to be a black art can now be an API call

00:07:36 --> 00:07:42
million-dollar data science integers now

00:07:38 --> 00:07:44
it's an API call away so if I'm an

00:07:41 --> 00:07:46
organization shouldn't I just wait for

00:07:43 --> 00:07:48
the tools to get better like why do I

00:07:45 --> 00:07:49
need data science or maybe another way

00:07:47 --> 00:07:52
to ask the question is how does the data

00:07:48 --> 00:07:54
science job change over the next two

00:07:51 --> 00:07:55
years as the tools get much better I

00:07:53 --> 00:07:57
think it's all about that context so

00:07:55 --> 00:07:59
nce again tensorflow is an incredible

00:07:56 --> 00:08:01
tool it's a way to kind of get up and

00:07:58 --> 00:08:03
running very quickly with deep learning

00:08:00 --> 00:08:04
but it's only as good as what you

00:08:02 --> 00:08:07
pointed at and this happens all the time

00:08:04 --> 00:08:09
we can tune any underlying system we can

00:08:06 --> 00:08:11
only tune it towards the metrics you

00:08:08 --> 00:08:13
point us at we'll hit any target in the

00:08:10 --> 00:08:14
world but if you point us at the wrong

00:08:12 --> 00:08:16
target we'll hit that wrong target

00:08:13 --> 00:08:18
better than anything else in the world

00:08:15 --> 00:08:20
and so the idea is you still need the

00:08:17 --> 00:08:22
data scientists to really understand

00:08:19 --> 00:08:24
what it is that you're trying to achieve

00:08:21 --> 00:08:26
as a business and how does that relate

00:08:23 --> 00:08:28
to your customers relate to your unique

00:08:25 --> 00:08:29
data sets and how do you actually

00:08:27 --> 00:08:31
differentiate yourselves from your

00:08:28 --> 00:08:33
competitors and I think there's going to

00:08:30 --> 00:08:35
be a lot of tools that make it easier to

00:08:32 --> 00:08:36
do that but at the end of the day you

00:08:34 --> 00:08:38
need to know where you want to go with

00:08:35 --> 00:08:41
e business yeah so I cannot agree more

00:08:37 --> 00:08:43
so fundamentally like we discussed many

00:08:40 --> 00:08:45
times is the most important things is to

00:08:42 --> 00:08:47
figure out what are your business

00:08:44 --> 00:08:48
objectives and whatever you improve the

00:08:46 --> 00:08:51
related with this business

00:08:47 --> 00:08:54
Jakob's so that's why the data science

00:08:50 --> 00:08:56
they have to be accurately aware about

00:08:53 --> 00:09:00
he context and all these tools it just

00:08:55 --> 00:09:04
allows them to get there faster to build

00:08:59 --> 00:09:06
to process more data to hit this target

00:09:03 --> 00:09:08
faster like you said but if the studies

00:09:05 --> 00:09:10
are wrong but they are not going to move

00:09:07 --> 00:09:13
the needle is not much you can do

00:09:09 --> 00:09:14
everybody wants to do AI but it it

00:09:12 --> 00:09:17
doesn't really help to do it for the

00:09:13 --> 00:09:18
sake of just doing it just checking a

00:09:16 --> 00:09:20
box and saying okay now we're doing AI

00:09:17 --> 00:09:22
isn't enough you need to know what it is

00:09:19 --> 00:09:24
you're shooting for and sometimes in

00:09:21 --> 00:09:26
like financial services that might be

00:09:23 --> 00:09:28
relatively easy I just want to make as

00:09:25 --> 00:09:29
much money as possible but in other

00:09:27 --> 00:09:31
industries it might be more difficult

00:09:28 --> 00:09:33
and setting up that success criteria

00:09:30 --> 00:09:35
early will be helpful to make sure that

00:09:32 --> 00:09:38
you build towards the right goal and

00:09:34 --> 00:09:40
then eventually optimize towards it well

00:09:37 --> 00:09:41
Scott Yun thank you for joining us thank

00:09:39 --> 00:09:45
you

00:09:40 --> 00:09:45
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
