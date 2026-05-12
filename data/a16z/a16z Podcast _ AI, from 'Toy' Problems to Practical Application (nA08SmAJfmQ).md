---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "nA08SmAJfmQ"
title: "a16z Podcast | AI, from 'Toy' Problems to Practical Application"
video_url: "https://www.youtube.com/watch?v=nA08SmAJfmQ"
thumbnail_url: "https://i.ytimg.com/vi/nA08SmAJfmQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=nA08SmAJfmQ"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:41:02.000Z"
upload_date: "2019-01-02"
duration_seconds: 2063
duration_human: "34:23"
view_count: 403
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:57:17.731Z"
---

# a16z Podcast | AI, from 'Toy' Problems to Practical Application

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=nA08SmAJfmQ
- video_id: nA08SmAJfmQ
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:41:02.000Z
- upload_date: 2019-01-02
- duration: 34:23
- view_count: 403
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

When you have “a really hot, frothy space” like AI, even the most basic questions — like what is it good for, how do you make sure your data is in shape, and so on — aren’t answered. This is just as true for the companies eager to adopt the technology and get into the space, as it is for those building companies around that space, observes Joe Spisak, Head of Partnerships at Amazon Web Services. “People treat it like magic,” adds a16z general partner Martin Casado.

This magical realism is especially true of AI, because by definition — i.e., machines learning — there is a bit of a “black box” between what you put in and what you get out of it. Which may be fine… Except when you have to completely change the data being fed into that black box, or you’re shooting for a completely different target to come out of it. That’s why, observes Scott Clark, CEO and co-founder of SigOpt, “an untuned, sophisticated system will underperform a tuned simple system” almost every time.

So what does this mean for organizations going from so-called “toy” problems in R&D to real business results tied to KPIs and ROI? In this episode of the a16z Podcast, Casado, Clark, and Spisak (in conversation with Sonal Chokshi) share their thoughts on what’s happening and what’s needed for AI in practice, given their vantage points working with both large companies and AI startups. What does it mean for data scientists and domain experts? For differentiation and advantage? Because even though we finally have widely available building blocks for AI, we need the scaffolding too… and only then can we build something powerful on top of it.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi everyone welcome to the a 6 and Z

00:00:02 --> 00:00:07
podcast I'm sonal given all the ongoing

00:00:05 --> 00:00:08
excitement around artificial

00:00:06 --> 00:00:09
intelligence deep learning and machine

00:00:07 --> 00:00:11
learning especially with the nips

00:00:08 --> 00:00:13
conference this coming week today we're

00:00:10 --> 00:00:16
talking about what happens when we go

00:00:12 --> 00:00:18
from so-called toy problems to practical

00:00:15 --> 00:00:20
AI in production the conversation is

00:00:17 --> 00:00:21
also part of our ongoing series on AI

00:00:19 --> 00:00:23
and practice you can find other pass on

00:00:20 --> 00:00:25
upcoming episodes on our website under

00:00:22 --> 00:00:27
that tag but joining us for this episode

00:00:24 --> 00:00:29
we have Jose B sack who leads strategic

00:00:26 --> 00:00:32
and programmatic partnerships for Amazon

00:00:28 --> 00:00:33
Web Services so has a front row seat on

00:00:31 --> 00:00:34
what's happening with a bunch of

00:00:32 --> 00:00:37
companies interested in AI and machine

00:00:33 --> 00:00:39
learning we have Scott Clark who's a CEO

00:00:36 --> 00:00:41
and co-founder of Sagat which provides

00:00:38 --> 00:00:43
optimization as a service and then we

00:00:40 --> 00:00:44
have general partner martine casado

00:00:42 --> 00:00:47
the discussion covers everything from

00:00:43 --> 00:00:49
taxonomy of startups and methods for AI

00:00:46 --> 00:00:51
to a brief debate about whether AI means

00:00:48 --> 00:00:52
the end of theory or not and we also

00:00:50 --> 00:00:54
discuss the problems of data and

00:00:51 --> 00:00:56
optimization as well as the pros and

00:00:53 --> 00:00:58
cons of machine learning as a service

00:00:55 --> 00:01:00
and touch on the theme of the API

00:00:57 --> 00:01:02
economy but we begin by quickly

00:00:59 --> 00:01:03
reflecting on where we are right now

00:01:01 --> 00:01:06
hat are we seeing what companies

00:01:02 --> 00:01:07
adopting AI beyond R and D the first

00:01:05 --> 00:01:11
voice you'll hear is Scott followed by

00:01:06 --> 00:01:12
Joe why no so I think AI is kind of this

00:01:10 --> 00:01:14
in this unique position that it hasn't

00:01:11 --> 00:01:16
been in historically before all the

00:01:13 --> 00:01:18
pieces are coming together people have

00:01:15 --> 00:01:20
the datasets now they have the tooling

00:01:18 --> 00:01:22
and of the open-source community it's

00:01:19 --> 00:01:22
been huge in that with tools like MX net

00:01:21 --> 00:01:24
and tensorflow

00:01:21 --> 00:01:26
being widely adopted and production

00:01:23 --> 00:01:28
alized and now they have the

00:01:25 --> 00:01:30
infrastructure readily available with

00:01:27 --> 00:01:32
ings like AWS and all these new Nvidia

00:01:29 --> 00:01:34
chips in addition to a whole bunch of

00:01:31 --> 00:01:35
api's to make a lot of the hiccup and

00:01:33 --> 00:01:37
like difficult parts of the system

00:01:34 --> 00:01:40
easier and easier and so the combination

00:01:36 --> 00:01:42
of all these things together means that

00:01:39 --> 00:01:44
instead of spending a decade in the R&D

00:01:41 --> 00:01:46
lab to try to come up with something now

00:01:43 --> 00:01:48
a couple of data scientists can make

00:01:45 --> 00:01:51
real business impact almost immediately

00:01:47 --> 00:01:52
with the AI go to market I mean as AWS I

00:01:50 --> 00:01:55
think we have more than 2 million

00:01:51 --> 00:01:56
customers now on our platform you can

00:01:54 --> 00:01:57
imagine all the inbound that we get

00:01:55 --> 00:02:00
where all these customers want to get

00:01:56 --> 00:02:02
into AI it's today's mobile first right

00:01:59 --> 00:02:04
I think sundar Pichai actually even in

00:02:01 --> 00:02:06
one of his big talks of the State of the

00:02:03 --> 00:02:08
Union at Google called Google and AI

00:02:05 --> 00:02:10
first company yeah which was quite a big

00:02:07 --> 00:02:12
shift totally Microsoft has switched

00:02:09 --> 00:02:14
from a mobile first over two and a half

00:02:11 --> 00:02:16
irst now as well so I I think

00:02:13 --> 00:02:18
one sees there's actual business value

00:02:15 --> 00:02:20
the funny thing that I've seen is a lot

00:02:17 --> 00:02:21
of this what we were calling AI today

00:02:19 --> 00:02:24
was really just you know statistical

00:02:20 --> 00:02:27
predictions or like you know using basic

00:02:23 --> 00:02:29
regression techniques a little bit and

00:02:26 --> 00:02:31
is such a buzzword like financial firms

00:02:28 --> 00:02:33
they use really basic techniques and

00:02:30 --> 00:02:35
they call it AI so we see financial

00:02:32 --> 00:02:37
services getting disrupted we see

00:02:34 --> 00:02:38
healthcare life sciences preventive

00:02:36 --> 00:02:40
maintenance is looking at all the the

00:02:37 --> 00:02:43
sensor data on big machinery on

00:02:39 --> 00:02:45
airplanes on all kinds of equipment and

00:02:42 --> 00:02:46
trying to predict failures in the future

00:02:44 --> 00:02:48
this is actually one of the top use

00:02:45 --> 00:02:50
cases that I'm seeing recently why does

00:02:47 --> 00:02:52
AI uniquely help in that context or in

00:02:49 --> 00:02:54
this specific ml deep learning because

00:02:51 --> 00:02:56
of all these sensors now sprinkled all

00:02:53 --> 00:02:58
over these be machine all your airplanes

00:02:55 --> 00:02:59
your vehicle now is full of sensors you

00:02:57 --> 00:03:01
could take all that data you can

00:02:58 --> 00:03:04
actually predict a lot further into time

00:03:00 --> 00:03:06
or learn a lot more from the data over

00:03:03 --> 00:03:09
longer time series series of time it's

00:03:05 --> 00:03:11
one of those industries that is catching

00:03:08 --> 00:03:13
you up there they're kind of sitting on

00:03:10 --> 00:03:14
a goldmine of data but data doesn't

00:03:12 --> 00:03:16
equal AI I have a lot of those kind of

00:03:13 --> 00:03:17
larger customers they come to me and

00:03:15 --> 00:03:19
they say I have all this data what

00:03:16 --> 00:03:21
should I do now how do I do this AI

00:03:18 --> 00:03:23
think I get that so much and you know we

00:03:20 --> 00:03:24
have to even step back and say okay

00:03:22 --> 00:03:26
let's go build a day delay because you

00:03:23 --> 00:03:27
have to spare it data sources you know

00:03:25 --> 00:03:28
let's talk about the problem you're

00:03:26 --> 00:03:31
trying to solve

00:03:27 --> 00:03:33
like actually start with the question

00:03:30 --> 00:03:35
hell are we doing with you know what

00:03:32 --> 00:03:36
is it we're trying to do here you

00:03:34 --> 00:03:37
talk about hyper parameter tuning are

00:03:35 --> 00:03:38
you want you could talk about you know

00:03:36 --> 00:03:40
cleansing data and prepping data and

00:03:37 --> 00:03:42
entertain data and deploying it at scale

00:03:39 --> 00:03:44
and on IFT devices but if you're not

00:03:41 --> 00:03:45
actually understanding the problem you

00:03:43 --> 00:03:47
really want to solve when you see

00:03:44 --> 00:03:49
business value and a derivative problem

00:03:46 --> 00:03:50
that is really the ROI like how do you

00:03:48 --> 00:03:53
define the ROI and which problems to

00:03:49 --> 00:03:54
solve because there's problem that can

00:03:52 --> 00:03:56
be discovered I'm tracking something

00:03:53 --> 00:03:58
like five or six hundred use cases

00:03:55 --> 00:04:00
internally there are sales folks are

00:03:57 --> 00:04:01
coming to us and saying hey I got this

00:03:59 --> 00:04:03
problem I get this problem I got this

00:04:00 --> 00:04:04
problem I get this problem which are the

00:04:02 --> 00:04:06
ones that are salient enough to do

00:04:03 --> 00:04:07
driving ROI and this is something that

00:04:05 --> 00:04:09
comes up all the time with us but for

00:04:06 --> 00:04:11
you to even apply an optimization

00:04:08 --> 00:04:12
algorithm you need to know what you're

00:04:10 --> 00:04:14
aiming for yeah right

00:04:11 --> 00:04:16
so it needs to be tied to business value

00:04:13 --> 00:04:17
you need to be able to articulate like

00:04:15 --> 00:04:20
maybe if I'm building a fraud detection

00:04:16 --> 00:04:22
system maybe naively accuracy is the

00:04:19 --> 00:04:24
most important thing you could think of

00:04:21 --> 00:04:26
but if you catch all the $1 fraudulent

00:04:23 --> 00:04:27
ransactions and miss the million dollar

00:04:25 --> 00:04:28
ones that's actually bad for the

00:04:26 --> 00:04:29
business

00:04:27 --> 00:04:31
o it requires a lot of domain expertise

00:04:28 --> 00:04:33
and I think this goes into needing

00:04:30 --> 00:04:36
specialized datasets for every

00:04:32 --> 00:04:38
individual application but also unique

00:04:35 --> 00:04:40
targets and goals to shoot for and then

00:04:37 --> 00:04:41
once you have this complicated system

00:04:39 --> 00:04:43
and you have a target that you're

00:04:40 --> 00:04:45
shooting for then it becomes an

00:04:42 --> 00:04:46
optimization problem but if you don't

00:04:44 --> 00:04:48
have that data and you don't have that

00:04:45 --> 00:04:50
arget you need to figure out what it is

00:04:47 --> 00:04:51
you're even trying to achieve well

00:04:49 --> 00:04:53
what's interesting hearing you're

00:04:50 --> 00:04:55
talking about is like hey you know every

00:04:52 --> 00:04:57
time you have like a really hot frothy

00:04:54 --> 00:04:59
space even the most basic questions or

00:04:56 --> 00:05:00
an answer like something as simple as

00:04:58 --> 00:05:02
like what is AI good for what can you

00:04:59 --> 00:05:03
apply to etc and I think every time

00:05:01 --> 00:05:05
you've got these kind of new buzzy

00:05:02 --> 00:05:07
things like people treat it like magic

00:05:04 --> 00:05:10
they're like you know I have like

00:05:06 --> 00:05:12
standard retro thing I add magic and

00:05:09 --> 00:05:13
then I get something amazing hey I in a

00:05:11 --> 00:05:15
box and boom you're up and running

00:05:12 --> 00:05:18
so I actually categorize startups that

00:05:14 --> 00:05:20
come in in one of four buckets and the

00:05:17 --> 00:05:22
AI spectrum from like kind of the most

00:05:19 --> 00:05:24
basic to the most science fiction and

00:05:21 --> 00:05:25
here the following so there are

00:05:23 --> 00:05:28
companies that come in that have been

00:05:24 --> 00:05:31
doing you know hardcore ml stuff for a

00:05:27 --> 00:05:32
long time but they haven't called it AI

00:05:30 --> 00:05:34
they're probably older techniques

00:05:31 --> 00:05:35
probably nothing the kind of latest DNN

00:05:33 --> 00:05:37
stuff or whatever and then they start

00:05:34 --> 00:05:39
calling it AI because they know that

00:05:36 --> 00:05:40
AAS profit the second one and the

00:05:38 --> 00:05:41
one that I tend to focus the most on

00:05:39 --> 00:05:43
they actually understand what you can

00:05:40 --> 00:05:45
apply AI to so they're like you know

00:05:42 --> 00:05:46
it's good for these things to solve

00:05:44 --> 00:05:47
these problems they're taking that that

00:05:45 --> 00:05:49
are playing into an existing problem of

00:05:46 --> 00:05:50
doing an you startup so those I spend

00:05:48 --> 00:05:51
the most time with just because they

00:05:49 --> 00:05:52
understand the technology they normally

00:05:50 --> 00:05:53
have the core team they understand the

00:05:51 --> 00:05:55
problem

00:05:52 --> 00:05:56
the third ones are really interesting to

00:05:54 --> 00:05:57
me and I'm getting more and more

00:05:55 --> 00:05:59
interested in them but like it takes a

00:05:56 --> 00:06:01
little bit of a region I call them the

00:05:58 --> 00:06:03
nd of theory so interesting so what

00:06:00 --> 00:06:06
hey do is they basically believe that

00:06:02 --> 00:06:07
you can apply AI to a problems where you

00:06:05 --> 00:06:08
don't have to have a theory beforehand

00:06:06 --> 00:06:09
you don't need to know what you're

00:06:07 --> 00:06:12
looking for so for example let's say

00:06:08 --> 00:06:13
ou've got a bunch of security data you

00:06:11 --> 00:06:14
don't know what to look for it in there

00:06:12 --> 00:06:16
will tell you what to look at or maybe

00:06:13 --> 00:06:18
you've got a bunch of marketing data you

00:06:15 --> 00:06:19
don't really know if there's something

00:06:17 --> 00:06:20
there but will tell you what to look at

00:06:18 --> 00:06:22
so you don't have to have a theory of

00:06:19 --> 00:06:23
what we're looking for but we'll apply

00:06:21 --> 00:06:25
it and give you a theory and then the

00:06:22 --> 00:06:26
fourth the most science fictiony these

00:06:24 --> 00:06:28
are the ones I don't give a lot of

00:06:25 --> 00:06:30
credibility to they basically want a to

00:06:27 --> 00:06:32
solve their product market fit problem

00:06:29 --> 00:06:34
they basically say I don't really know

00:06:31 --> 00:06:35
hat company to build you know so what

00:06:33 --> 00:06:37
I'm gonna do is I'm gonna enter a space

00:06:34 --> 00:06:38
I'm gonna add AI and then like that like

00:06:36 --> 00:06:40
basically tell me what company or

00:06:37 --> 00:06:41
product to build and those I think

00:06:39 --> 00:06:42
that's mostly just kind of which will

00:06:40 --> 00:06:43
thinking I don't think it's gonna

00:06:41 --> 00:06:45
ctually solve like what company to

00:06:42 --> 00:06:47
build I love that taxonomy and it's

00:06:44 --> 00:06:49
funny because what you described as the

00:06:46 --> 00:06:51
nd of theory which by the way was a

00:06:48 --> 00:06:53
cover Chris Anderson wrote for Wired

00:06:50 --> 00:06:53
making this argument that in the age of

00:06:52 --> 00:06:55
big data

00:06:52 --> 00:06:57
you don't need theory because you have

00:06:54 --> 00:06:59
so much data you can essentially mine it

00:06:56 --> 00:07:01
o learn what you don't know and yet you

00:06:58 --> 00:07:02
have this chicken egg problem that

00:07:00 --> 00:07:04
you're describing where the ideal case

00:07:01 --> 00:07:06
for the companies you might work with is

00:07:03 --> 00:07:08
that they have a goal or something

00:07:05 --> 00:07:09
they're trying to do so how do you see

00:07:07 --> 00:07:11
people actually navigate so I think a

00:07:08 --> 00:07:12
lot of times in machine learning and

00:07:10 --> 00:07:14
artificial intelligence you can kind of

00:07:11 --> 00:07:15
break it into two camps there's the

00:07:13 --> 00:07:17
completely like supervised learning

00:07:14 --> 00:07:18
algorithm where you know what you're

00:07:16 --> 00:07:19
going for and you just want an algorithm

00:07:17 --> 00:07:21
that can do that better than anything

00:07:18 --> 00:07:23
and those generally have big data sets

00:07:20 --> 00:07:25
they're discovering themselves versus

00:07:22 --> 00:07:29
and unsupervised which is the contrast

00:07:24 --> 00:07:30
exactly so the idea is I have a bunch of

00:07:28 --> 00:07:32
raud data and I just want to minimize

00:07:29 --> 00:07:35
fraud and so I can come up with some

00:07:31 --> 00:07:36
sort of metric that I care about this is

00:07:34 --> 00:07:38
correlated with business value and I

00:07:35 --> 00:07:39
just want to maximize that metric then

00:07:37 --> 00:07:41
you have unsupervised learning

00:07:38 --> 00:07:43
algorithms and this can fall into things

00:07:40 --> 00:07:45
around like anomaly detection or it's

00:07:42 --> 00:07:47
just like here's a big soup or lake of

00:07:44 --> 00:07:49
data show me interesting things well

00:07:46 --> 00:07:50
they're they're contexts that I was

00:07:48 --> 00:07:52
thinking of when I think of unsupervised

00:07:49 --> 00:07:54
I also think of cases like the recent

00:07:51 --> 00:07:56
news about alpha zero and the algorithm

00:07:53 --> 00:07:58
kind of learning on its own from no data

00:07:55 --> 00:08:00
that was a reinforcement learning case

00:07:57 --> 00:08:04
is that technically unsupervised well so

00:07:59 --> 00:08:04
then I guess you could say there's a

00:08:05 --> 00:08:10
reinforcement learning yeah and I mean

00:08:07 --> 00:08:11
it may have started with no data but

00:08:09 --> 00:08:14
it's generating it as it goes along

00:08:10 --> 00:08:15
she's kind of going cumulative so that's

00:08:13 --> 00:08:16
a third category and it would one-shot

00:08:14 --> 00:08:18
cuz remember there's a big move for

00:08:15 --> 00:08:19
awhile with like one-shot learning type

00:08:17 --> 00:08:21
of algorithms would that also go in that

00:08:18 --> 00:08:23
category what I'm trying to get at is a

00:08:20 --> 00:08:24
difference between small data and big

00:08:22 --> 00:08:26
data basically and where those fit in

00:08:23 --> 00:08:27
your taxonomy yeah so the nice thing

00:08:25 --> 00:08:28
about something like unsupervised

00:08:26 --> 00:08:30
learning and the nice thing in general

00:08:27 --> 00:08:31
with all of these is you can kind of

00:08:29 --> 00:08:33
composite them together depending on

00:08:30 --> 00:08:35
what you're doing so for something like

00:08:32 --> 00:08:38
a natural language processing task if

00:08:34 --> 00:08:39
you maybe have some end goal like you

00:08:37 --> 00:08:41
want to have some sort of conversational

00:08:38 --> 00:08:42
AI system or you want to be able to do

00:08:40 --> 00:08:44
question-and-answer over some blank

00:08:41 --> 00:08:50
large corpus you're very carefully

00:08:43 --> 00:08:52
avoiding the word bot which I love last

00:08:49 --> 00:08:54
year but basically what you can do there

00:08:51 --> 00:08:57
is take an unsupervised learning

00:08:53 --> 00:08:59
to kind of learn the features of the

00:08:56 --> 00:09:01
language itself and then apply a

00:08:58 --> 00:09:03
supervised learning algorithm on top of

00:09:00 --> 00:09:05
that feature representation that you've

00:09:02 --> 00:09:06
learned and so this is the nice thing

00:09:04 --> 00:09:08
about like you don't have to have the

00:09:05 --> 00:09:10
Machine necessarily know English to

00:09:07 --> 00:09:12
start because you feed it in all of

00:09:09 --> 00:09:15
these different examples and it learns

00:09:11 --> 00:09:17
ways to represent that which then can be

00:09:14 --> 00:09:18
aimed at a specific goal like answering

00:09:16 --> 00:09:20
these questions traditionally those

00:09:17 --> 00:09:21
systems are thought of as independent

00:09:19 --> 00:09:23
hough and they fall into these kind of

00:09:20 --> 00:09:25
three categories and machine learning

00:09:22 --> 00:09:27
but what's really interesting when we're

00:09:24 --> 00:09:29
seeing a lot of customers do is start to

00:09:26 --> 00:09:31
treat that like an entire pipeline this

00:09:28 --> 00:09:33
does make it a lot more complicated it

00:09:30 --> 00:09:34
makes it more computationally intensive

00:09:32 --> 00:09:36
so leveraging some of the new

00:09:33 --> 00:09:38
technologies is incredibly important for

00:09:35 --> 00:09:40
doing that but it also makes it a harder

00:09:37 --> 00:09:42
optimization problem as well because

00:09:39 --> 00:09:44
you've taken a system with a lot of

00:09:41 --> 00:09:45
knobs and levers that's normally been

00:09:43 --> 00:09:47
optimized be a trial and error and now

00:09:44 --> 00:09:48
you're making it twice as large you're

00:09:46 --> 00:09:50
making it combin entirely more complex

00:09:47 --> 00:09:52
yeah that complexity grows exponentially

00:09:49 --> 00:09:54
and so some of the standard techniques

00:09:51 --> 00:09:56
that people do like trying to solve this

00:09:53 --> 00:09:58
tuning problem in their head or via

00:09:55 --> 00:10:00
brute force just completely fall flat

00:09:57 --> 00:10:01
Scott do you think AI is the end of

00:09:59 --> 00:10:06
theory like do we have to like stop

00:10:00 --> 00:10:07
knowing the way we think about it is one

00:10:05 --> 00:10:09
of these aspects of machine learning is

00:10:06 --> 00:10:11
unsupervised learning you just throw a

00:10:09 --> 00:10:14
bunch of data at the problem and try to

00:10:10 --> 00:10:16
have the data learn on its own you're

00:10:13 --> 00:10:18
not aiming for a specific goal that's

00:10:15 --> 00:10:19
the end of the review yeah this goes in

00:10:17 --> 00:10:21
with it and of theory in the sense that

00:10:18 --> 00:10:23
you're not asking a question you're not

00:10:20 --> 00:10:25
shooting for a specific objective you're

00:10:22 --> 00:10:28
just trying to create these patterns and

00:10:24 --> 00:10:29
formulate some sort of maybe it's

00:10:27 --> 00:10:32
anomaly detection or you're just trying

00:10:28 --> 00:10:34
to look for something interesting yeah I

00:10:31 --> 00:10:35
know I'm doing exactly and it's a

00:10:33 --> 00:10:37
clustering algorithms it's all these

00:10:34 --> 00:10:40
sorts of things that are incredibly

00:10:36 --> 00:10:41
useful and now we have large enough

00:10:39 --> 00:10:44
datasets that it's becoming incredibly

00:10:40 --> 00:10:46
necessary tool because you can't

00:10:43 --> 00:10:48
necessarily ask every single question

00:10:45 --> 00:10:50
and hope to get an answer or you don't

00:10:47 --> 00:10:51
want to do like what some of the like

00:10:49 --> 00:10:53
psychology research is suffering with

00:10:50 --> 00:10:54
right now is this like p-value hacking

00:10:52 --> 00:10:57
it of like if you ask enough questions

00:10:53 --> 00:10:59
than just like statistically you might

00:10:56 --> 00:11:02
get a spurious answer it's actually a

00:10:58 --> 00:11:04
false positive context exactly and so

00:11:01 --> 00:11:06
the idea is if I can just give it a

00:11:03 --> 00:11:07
bunch of data and then it comes up with

00:11:05 --> 00:11:09
e question

00:11:06 --> 00:11:12
for me or I can go back and say oh this

00:11:08 --> 00:11:14
really interesting this actually I

00:11:11 --> 00:11:15
know how I'm gonna leverage this to then

00:11:13 --> 00:11:17
ask this question that I would have

00:11:14 --> 00:11:18
never asked before I think that's

00:11:16 --> 00:11:20
becoming extremely powerful you'd

00:11:17 --> 00:11:23
painted a three level taxonomy of

00:11:19 --> 00:11:24
supervised unsupervised and

00:11:22 --> 00:11:26
reinforcement learning so where are you

00:11:23 --> 00:11:27
then on the end of theory I think

00:11:25 --> 00:11:29
there's gonna be need for all of it to

00:11:26 --> 00:11:31
be honest when it comes down to solving

00:11:28 --> 00:11:33
a very specific business problem like

00:11:30 --> 00:11:36
fraud detection you don't want the

00:11:32 --> 00:11:37
algorithm to learn on its own just let a

00:11:35 --> 00:11:39
lot of fraud through as you slowly come

00:11:36 --> 00:11:40
up with many of what the world looks

00:11:38 --> 00:11:42
like you want to solve this very

00:11:39 --> 00:11:44
specific supervised learning algorithm

00:11:41 --> 00:11:45
or when you're training a car or

00:11:43 --> 00:11:47
something like that how to drive a car

00:11:44 --> 00:11:49
you don't necessarily want it just to

00:11:46 --> 00:11:50
like go get into a million accidents as

00:11:48 --> 00:11:53
it slowly learns like what does steering

00:11:49 --> 00:11:55
even mean it needs to be somewhat more

00:11:52 --> 00:11:57
directed that being said in the security

00:11:54 --> 00:11:59
space if it's more like anomaly

00:11:56 --> 00:12:00
detection that might be something

00:11:58 --> 00:12:03
different because you don't necessarily

00:11:59 --> 00:12:05
know what all different breaches could

00:12:02 --> 00:12:07
look like and so you need to kind of do

00:12:04 --> 00:12:09
this more unsupervised like clustering

00:12:06 --> 00:12:10
based approach I do want to quickly ask

00:12:08 --> 00:12:12
you to define what is optimization

00:12:09 --> 00:12:14
because when I hear that word I think of

00:12:11 --> 00:12:15
like the McKinsey word like optimization

00:12:13 --> 00:12:18
of the workforce I know you mean it in

00:12:14 --> 00:12:19
the context of algorithmic optimization

00:12:17 --> 00:12:21
but could you break it down friend yeah

00:12:18 --> 00:12:22
we think of optimization for the more

00:12:20 --> 00:12:25
mathematical perspective

00:12:21 --> 00:12:26
so there's inputs to some system and one

00:12:24 --> 00:12:29
or more outputs that you want to

00:12:25 --> 00:12:30
maximize so you have an AI fraud

00:12:28 --> 00:12:32
etection system and there's lots of

00:12:29 --> 00:12:35
configuration parameters that make that

00:12:31 --> 00:12:36
actually work yeah and so we think of

00:12:34 --> 00:12:38
optimization in the sense of how do you

00:12:35 --> 00:12:40
set all those configuration parameters

00:12:37 --> 00:12:42
those hyper parameters and architectural

00:12:39 --> 00:12:44
parameters of a deep learning system in

00:12:41 --> 00:12:46
order to get the most accurate fraud

00:12:43 --> 00:12:47
etection and a lot of that by

00:12:45 --> 00:12:49
definition has always been trial and

00:12:46 --> 00:12:51
error yeah and so typically that's how

00:12:48 --> 00:12:53
people solve this problem

00:12:50 --> 00:12:54
this is why Google will pay like a

00:12:52 --> 00:12:56
million dollars for someone with ten

00:12:53 --> 00:12:58
years of deep learning experiences is

00:12:55 --> 00:13:01
that intuition that's built up but just

00:12:57 --> 00:13:02
like how unique datasets are helpful for

00:13:00 --> 00:13:04
solving unique problems unique

00:13:01 --> 00:13:06
algorithms and kind of unique

00:13:03 --> 00:13:07
configurations can get you quite a bit

00:13:05 --> 00:13:10
better than the one-size-fits-all

00:13:06 --> 00:13:12
approach a lot of times that hard-won

00:13:09 --> 00:13:14
intuition doesn't actually transfer to a

00:13:11 --> 00:13:16
completely new type of problem you could

00:13:13 --> 00:13:18
know everything in the world about a DNN

00:13:15 --> 00:13:19
and then you apply it to

00:13:17 --> 00:13:21
a recurrent neural network or whatever

00:13:18 --> 00:13:23
it may be and it becomes much more

00:13:20 --> 00:13:24
difficult to kind of you have to start

00:13:22 --> 00:13:26
from scratch right

00:13:23 --> 00:13:27
it doesn't say practically speaking very

00:13:25 --> 00:13:30
few startups can afford that type of a

00:13:26 --> 00:13:32
10 million dollar ten ten years of

00:13:29 --> 00:13:34
experience type of hire yeah exactly so

00:13:32 --> 00:13:36
this goes a little bit also to what you

00:13:33 --> 00:13:37
were saying earlier Joe about how

00:13:35 --> 00:13:40
because when you talk about optimization

00:13:36 --> 00:13:41
and the inputs that you were putting in

00:13:39 --> 00:13:43
and then you're tuning your hyper

00:13:40 --> 00:13:44
parameters and getting something out

00:13:42 --> 00:13:46
hat's when you were talking earlier

00:13:43 --> 00:13:47
about this fact that all these companies

00:13:45 --> 00:13:49
have these data sets and the biggest

00:13:46 --> 00:13:50
question is how to actually clean and

00:13:48 --> 00:13:52
process their data set because obviously

00:13:49 --> 00:13:53
it's garbage in garbage out oh that's

00:13:51 --> 00:13:55
right you really have to get the data in

00:13:52 --> 00:13:57
shape yeah that is a foundational prob

00:13:54 --> 00:13:58
data is a foundational problem today

00:13:56 --> 00:14:00
it's so easy to go grab a jupiter

00:13:57 --> 00:14:02
notebook but web frontend that you can

00:13:59 --> 00:14:04
execute code in cells so i can basically

00:14:01 --> 00:14:06
have a jupiter notebook full of Python

00:14:03 --> 00:14:07
and heavily annotated most of the

00:14:05 --> 00:14:09
classes these days and deep learning or

00:14:06 --> 00:14:10
using jupiter notebooks and today

00:14:08 --> 00:14:12
there's just so many jupiter notebooks

00:14:09 --> 00:14:14
out there that people have built you

00:14:11 --> 00:14:17
know different solutions or or tutorials

00:14:13 --> 00:14:18
on there's this explosion of tutorials

00:14:16 --> 00:14:21
and code that's out there but these

00:14:17 --> 00:14:22
largely are all toy examples and if you

00:14:20 --> 00:14:24
want to get serious if you actually

00:14:21 --> 00:14:26
wanna optimize these for actual real

00:14:23 --> 00:14:29
world usage there's probably two really

00:14:25 --> 00:14:31
big pieces that someone just can't

00:14:28 --> 00:14:33
automate or really bring kind of a

00:14:30 --> 00:14:34
pre-canned one-size-fits-all solution

00:14:32 --> 00:14:36
we're kind of entering that golden age

00:14:33 --> 00:14:38
of applied applied machine learning

00:14:35 --> 00:14:40
applied AI you know five years ago when

00:14:37 --> 00:14:42
I was hanging out at Berkeley and seeing

00:14:39 --> 00:14:44
the talks from Jitendra Alex Peter veal

00:14:41 --> 00:14:45
and and the folks there and I would see

00:14:43 --> 00:14:47
some of these these breakthroughs in

00:14:44 --> 00:14:49
computer vision and Jitendra has that

00:14:46 --> 00:14:50
image that he always shows every

00:14:48 --> 00:14:52
ear about I think there's a beggar on

00:14:50 --> 00:14:54
the street right he's got a cup hanging

00:14:51 --> 00:14:56
out and there's someone walking by and

00:14:53 --> 00:14:58
it's the quotation is always is this guy

00:14:55 --> 00:14:59
gonna and put money in his cup or not

00:14:57 --> 00:15:01
and the algorithm is supposed to predict

00:14:58 --> 00:15:02
hat so there's a really cool things

00:15:00 --> 00:15:04
that were happening 5 or 6 years ago

00:15:01 --> 00:15:05
those are being operationalized now it's

00:15:03 --> 00:15:06
cale so you're basically saying that

00:15:04 --> 00:15:08
we're at a moment because I've actually

00:15:05 --> 00:15:10
heard the opposite I think we're both

00:15:07 --> 00:15:12
right though which is that a lot of the

00:15:09 --> 00:15:14
work and the buzz is all algorithms in

00:15:11 --> 00:15:16
academia and actually translating it

00:15:13 --> 00:15:18
into practice is and it hasn't been

00:15:15 --> 00:15:20
operationalized to you I think is been

00:15:17 --> 00:15:22
operationalized by big companies like

00:15:19 --> 00:15:25
Amazon and Facebook and obviously the

00:15:21 --> 00:15:27
larger deep tech companies I think we're

00:15:24 --> 00:15:29
at the precipice here of having all of

00:15:26 --> 00:15:31
the the kind of foundational pieces

00:15:28 --> 00:15:32
automated to the point where I think

00:15:30 --> 00:15:33
having the prowl

00:15:31 --> 00:15:35
that you want to solve in mind is

00:15:32 --> 00:15:36
obviously important having the data in a

00:15:34 --> 00:15:39
place where it you know can be trained

00:15:35 --> 00:15:40
it's clean it's annotated especially

00:15:38 --> 00:15:42
supervised when I say we're on the

00:15:39 --> 00:15:44
precipice I believe it's the supervised

00:15:41 --> 00:15:46
you know machine learning world is just

00:15:43 --> 00:15:47
exploding with applications obviously

00:15:45 --> 00:15:49
unsupervised deep reinforcement learning

00:15:46 --> 00:15:52
it's still in the bleeding edge when you

00:15:48 --> 00:15:54
talk about having RL applied and salic

00:15:51 --> 00:15:56
autonomous driving having a car driving

00:15:53 --> 00:15:57
around and learned how to drive you know

00:15:55 --> 00:15:59
by crashing a million times isn't

00:15:56 --> 00:16:02
ractable as a you know is an algorithm

00:15:58 --> 00:16:03
so it's you know be able to do all that

00:16:01 --> 00:16:05
simulation in the cloud and then

00:16:02 --> 00:16:07
transfer domains it's still not a solved

00:16:04 --> 00:16:09
problem you said there were two areas at

00:16:06 --> 00:16:11
startups so the parameter problem and

00:16:08 --> 00:16:13
ata I think the data engineering aspect

00:16:10 --> 00:16:15
of things is understated for machine

00:16:12 --> 00:16:16
learning AI I see like a lot of our our

00:16:14 --> 00:16:18
partners that have been helping our

00:16:15 --> 00:16:20
customers over the last number of years

00:16:17 --> 00:16:22
there are a lot of big data size and

00:16:19 --> 00:16:23
they've been using Hadoop and spark and

00:16:21 --> 00:16:25
they've been dabbling in machine

00:16:22 --> 00:16:26
learning and advanced analytics over

00:16:24 --> 00:16:28
that time they've actually built up a

00:16:25 --> 00:16:29
good amount of data engineering skills

00:16:27 --> 00:16:31
o I think those are still really

00:16:28 --> 00:16:32
valuable and you think those will

00:16:30 --> 00:16:34
transfer to this type of I think so I

00:16:32 --> 00:16:37
the thing is they're not experts in the

00:16:33 --> 00:16:39
algorithms and an optimization for

00:16:36 --> 00:16:40
example but I also think that deployment

00:16:38 --> 00:16:41
is getting to the point now where it's

00:16:39 --> 00:16:43
almost push-button with a lot of these

00:16:40 --> 00:16:44
API so we're talking about you can

00:16:42 --> 00:16:46
deploy to an endpoint and do new

00:16:43 --> 00:16:48
predictions you don't on any mobile

00:16:45 --> 00:16:51
device it can kind of just bolt on top

00:16:47 --> 00:16:52
and be this value add as opposed to

00:16:50 --> 00:16:54
something that's rip and replace I'm

00:16:51 --> 00:16:58
completely agnostic that a framework

00:16:53 --> 00:17:00
you're using the infrastructure and the

00:16:57 --> 00:17:01
objective that you're shooting for when

00:16:59 --> 00:17:03
it comes to AI being practical I think

00:17:00 --> 00:17:05
the two bookends are the following and

00:17:02 --> 00:17:07
the most commonly thought of one bookend

00:17:04 --> 00:17:08
is it's still academic it's not useful

00:17:06 --> 00:17:11
it's not applicable and then the other

00:17:07 --> 00:17:13
book in is a is magic and like the a is

00:17:10 --> 00:17:14
magic book and basically says you know

00:17:12 --> 00:17:18
it's about data and these magical

00:17:13 --> 00:17:19
gorithms so whoever has the data and

00:17:17 --> 00:17:21
the algorithm wins and then like

00:17:18 --> 00:17:23
basically everything's automated and the

00:17:20 --> 00:17:25
reality of practicality is in the middle

00:17:22 --> 00:17:27
which is like yeah it's not it's not you

00:17:24 --> 00:17:29
can just like throw data at the problem

00:17:26 --> 00:17:30
and throw one algorithms problem and

00:17:28 --> 00:17:32
like QED you're done you've got a

00:17:29 --> 00:17:34
company you have to have the right data

00:17:31 --> 00:17:35
it's very domain-specific you have to

00:17:33 --> 00:17:38
have the right algorithm and

00:17:34 --> 00:17:41
optimizations like every use case of AI

00:17:37 --> 00:17:43
requires specific tweaking in a massive

00:17:40 --> 00:17:45
problem space to get a useful

00:17:42 --> 00:17:47
solution and so it's

00:17:44 --> 00:17:49
magic it is absolutely practical so it's

00:17:46 --> 00:17:51
not you know academic but it requires

00:17:48 --> 00:17:53
you know at some level I feel like the

00:17:50 --> 00:17:55
complexity has moved not necessarily

00:17:52 --> 00:17:57
disappeared right it's like you've moved

00:17:54 --> 00:17:58
complexity from Upland writing code to

00:17:56 --> 00:18:00
now it's basically an optimization

00:17:57 --> 00:18:03
problem in a data problem how much is

00:17:59 --> 00:18:05
like the tweaking and the data unique

00:18:02 --> 00:18:07
per problem is it per vertical is it per

00:18:04 --> 00:18:09
like how do you even think about that

00:18:06 --> 00:18:11
here's so much work involved with

00:18:08 --> 00:18:12
actually getting the data ready pointing

00:18:10 --> 00:18:14
at the right direction and things like

00:18:11 --> 00:18:16
that and over the last two years we've

00:18:13 --> 00:18:19
actually seen this huge transformation

00:18:15 --> 00:18:20
where it used to be this toy problem

00:18:18 --> 00:18:22
where it was like we want to do deep

00:18:19 --> 00:18:24
learning and whatever that means we just

00:18:21 --> 00:18:25
want to do something and optimization

00:18:23 --> 00:18:26
actually isn't super important there

00:18:24 --> 00:18:28
because it's just like can I stand

00:18:25 --> 00:18:30
something up it was a coding problem

00:18:27 --> 00:18:32
before but once you actually start to

00:18:29 --> 00:18:34
apply it to something then it's how do I

00:18:31 --> 00:18:36
extract as much value as possible out of

00:18:33 --> 00:18:38
this how do i scale this as quickly as

00:18:35 --> 00:18:40
possible how do I deploy this and have

00:18:37 --> 00:18:42
it be a reliable system and so some of

00:18:39 --> 00:18:45
these bottlenecks that were historically

00:18:41 --> 00:18:47
in making practical a I have started to

00:18:44 --> 00:18:49
shift into these more deployment

00:18:46 --> 00:18:51
optimization I it's actually really good

00:18:48 --> 00:18:53
to hear the rings is not just all hype

00:18:50 --> 00:18:55
and it's all like quite here yet we're

00:18:52 --> 00:18:58
actually a very exciting middle point of

00:18:54 --> 00:19:00
the Fortune 100 two years ago had fun

00:18:57 --> 00:19:02
playing to kind of accelerate the R&D

00:18:59 --> 00:19:05
phase of certain things but now those

00:19:01 --> 00:19:07
same systems are in production and every

00:19:04 --> 00:19:10
little piece of optimization matters and

00:19:06 --> 00:19:11
for every single problem it's a

00:19:09 --> 00:19:14
completely different type of

00:19:10 --> 00:19:17
optimization you can take a problem

00:19:13 --> 00:19:19
that's really good at classifying Street

00:19:16 --> 00:19:20
like the Google Street View data set

00:19:18 --> 00:19:22
where it's like pictures of houses and

00:19:19 --> 00:19:24
you want to be able to read the address

00:19:21 --> 00:19:26
off of it and that's a kind of classic

00:19:23 --> 00:19:28
omputer science computer vision problem

00:19:25 --> 00:19:30
and then you want to do a different type

00:19:27 --> 00:19:32
of classification you might need to have

00:19:29 --> 00:19:34
a completely different architecture for

00:19:31 --> 00:19:35
your neural net so you're saying just a

00:19:33 --> 00:19:38
pause on that for a minute that while

00:19:34 --> 00:19:40
some of the skills may transfer and the

00:19:37 --> 00:19:41
mindsets may transfer and even some of

00:19:39 --> 00:19:44
the way you might think of the models

00:19:40 --> 00:19:46
may transfer the optimization tricks you

00:19:43 --> 00:19:48
se our custom and special to each of

00:19:45 --> 00:19:50
these cases well yeah the intuition for

00:19:47 --> 00:19:53
how to configure these systems does not

00:19:49 --> 00:19:57
ransfer which is why you need to retune

00:19:52 --> 00:19:58
reoptimize and reconfigure these systems

00:19:56 --> 00:19:58
to make sure they're maximizing that

00:19:57 --> 00:20:00
business

00:19:57 --> 00:20:02
a little bit more about why it doesn't

00:19:59 --> 00:20:04
ransfer yeah so I mean back to a

00:20:01 --> 00:20:06
Martines point like to a certain aspect

00:20:03 --> 00:20:08
some of these deep learning systems are

00:20:05 --> 00:20:10
kind of magical in the way that they

00:20:07 --> 00:20:12
work they're very difficult to explain

00:20:09 --> 00:20:14
what's actually happening under the hood

00:20:11 --> 00:20:16
a black box problem exactly but the the

00:20:13 --> 00:20:18
problem with the black box is if you

00:20:15 --> 00:20:19
have a black box with 20 different knobs

00:20:17 --> 00:20:21
and levers in it and you're trying to

00:20:18 --> 00:20:24
get some result out of the end when you

00:20:20 --> 00:20:25
completely change what's being fed into

00:20:23 --> 00:20:26
that black box if a completely different

00:20:24 --> 00:20:29
data set or you're shooting for a

00:20:25 --> 00:20:31
completely different target like all of

00:20:28 --> 00:20:33
that intuition on how you set those

00:20:30 --> 00:20:34
knobs and levers is now completely

00:20:32 --> 00:20:37
worthless and so you need a new way to

00:20:33 --> 00:20:38
very efficiently and automatically set

00:20:36 --> 00:20:40
hat for that new problem and that's

00:20:37 --> 00:20:43
true every time the data set changes

00:20:39 --> 00:20:44
every time you add a new data set maybe

00:20:42 --> 00:20:45
you have an unsupervised learning

00:20:43 --> 00:20:47
algorithm learning feature

00:20:44 --> 00:20:50
presentation every time you add a new

00:20:46 --> 00:20:52
feature pointed at a new problem and one

00:20:49 --> 00:20:55
thing that we found is that like an

00:20:51 --> 00:20:59
untuned sophisticated system will

00:20:54 --> 00:21:00
underperform a tuned simple system you

00:20:58 --> 00:21:02
can take a simple machine learning

00:20:59 --> 00:21:04
algorithm like a random forest and it's

00:21:01 --> 00:21:06
always going to give you like a b-

00:21:03 --> 00:21:08
answer you can take a sophisticated deep

00:21:05 --> 00:21:09
learning algorithm and if you don't tune

00:21:07 --> 00:21:11
it properly it's going to give you a

00:21:08 --> 00:21:13
terrible random answer but if you tuned

00:21:10 --> 00:21:15
it properly and train it properly it's

00:21:12 --> 00:21:17
gonna beat a human in a practical

00:21:14 --> 00:21:21
podcast can I indulge a philosophical

00:21:16 --> 00:21:22
question is actually pretty lay about

00:21:20 --> 00:21:24
he technology behind this so I'm gonna

00:21:21 --> 00:21:25
start with what seems to be a probably

00:21:23 --> 00:21:27
an entirely different metaphor but

00:21:24 --> 00:21:29
imagine like you're cleaning your house

00:21:26 --> 00:21:31
and you're trying to get rid of dust

00:21:28 --> 00:21:32
right so to get rid of the dust one

00:21:30 --> 00:21:33
thing you do is you can open the door

00:21:31 --> 00:21:34
and you can sweep the dust out of the

00:21:32 --> 00:21:35
house and the dusk on another thing you

00:21:33 --> 00:21:37
can do is you can basically just move

00:21:34 --> 00:21:38
dust around and you're like oh it looks

00:21:36 --> 00:21:40
better under the bed I sometimes think

00:21:37 --> 00:21:42
about complexity this way which is like

00:21:39 --> 00:21:45
are we just moving complexity from like

00:21:41 --> 00:21:49
basically writing coding algorithms to

00:21:44 --> 00:21:50
manipulating data and optimization but

00:21:48 --> 00:21:52
here's still the same amount of

00:21:49 --> 00:21:54
complexity or have we reduced complexity

00:21:51 --> 00:21:57
with AI do you see what I'm saying like

00:21:53 --> 00:21:58
I was getting just out of the house are

00:21:56 --> 00:22:01
we just moving it around into a separate

00:21:57 --> 00:22:02
problem domain I love that question

00:22:00 --> 00:22:04
I'd say socially a combination of the

00:22:01 --> 00:22:06
two because it practically when you are

00:22:03 --> 00:22:08
moving the dust from your house you do

00:22:05 --> 00:22:11
get it into these little piles and then

00:22:07 --> 00:22:12
you move it out of the house some of

00:22:10 --> 00:22:14
these more sophisticated

00:22:11 --> 00:22:16
algorithms are making it better because

00:22:13 --> 00:22:18
the distributed dust problem is much

00:22:15 --> 00:22:20
arder than cleaning up a pile of

00:22:17 --> 00:22:21
beautiful so so basically you're

00:22:19 --> 00:22:23
creating like the mounds of dust and

00:22:20 --> 00:22:25
then you can kind of focus on getting

00:22:22 --> 00:22:27
the dust of it exactly so the two-step

00:22:24 --> 00:22:28
rocess there is a reduction in

00:22:26 --> 00:22:29
complexity to get to the goal it's not

00:22:27 --> 00:22:31
like you're just moving around the dust

00:22:28 --> 00:22:32
in the house what you're gonna see is a

00:22:30 --> 00:22:34
lot of the complexity we talked about

00:22:31 --> 00:22:36
get automated I mean you'll see us to

00:22:33 --> 00:22:39
try and drive those piles out of the

00:22:35 --> 00:22:43
door as well automated dust collection

00:22:38 --> 00:22:44
and one of my all-time favorite books is

00:22:42 --> 00:22:47
Philip Pullman's His Dark Materials

00:22:43 --> 00:22:50
trilogy and I always think of dust in

00:22:46 --> 00:22:52
that context so this is like only dust

00:22:49 --> 00:22:54
beautiful okay so I have a question for

00:22:51 --> 00:22:56
you guys then especially Joe given that

00:22:53 --> 00:22:58
you work at AWS and Scott from your

00:22:55 --> 00:23:00
vantage point is this gonna come about

00:22:57 --> 00:23:02
because one thing I always hear about is

00:22:59 --> 00:23:04
debates about ml as a service and AI as

00:23:01 --> 00:23:06
a service and whether that's gonna be

00:23:03 --> 00:23:07
the way that these services are gonna be

00:23:05 --> 00:23:09
delivered and there seems to be a lot of

00:23:06 --> 00:23:10
hype around that in and of itself I'd

00:23:08 --> 00:23:12
love to hear you guys have thoughts on

00:23:09 --> 00:23:14
that I mean I guess you know the the

00:23:11 --> 00:23:16
diplomatic answer is we have to to

00:23:13 --> 00:23:19
support them all I mean we see you know

00:23:15 --> 00:23:20
layers of abstraction that are valuable

00:23:18 --> 00:23:22
to two different types of users

00:23:19 --> 00:23:25
researchers aren't gonna use an API

00:23:21 --> 00:23:26
obviously because it's you know they

00:23:24 --> 00:23:27
can't do anything with it there's no

00:23:25 --> 00:23:29
knobs there's nothing to break and do

00:23:26 --> 00:23:31
anything with data scientists are not

00:23:28 --> 00:23:34
experts so they need some level of

00:23:30 --> 00:23:35
automation or or helping a helping hand

00:23:33 --> 00:23:37
on things like you know optimization

00:23:34 --> 00:23:38
give me the end of the metagame I'm

00:23:36 --> 00:23:39
diplomatic answer is then there's a

00:23:37 --> 00:23:41
whole bunch of guys who don't know what

00:23:38 --> 00:23:43
hey're doing and they need some type of

00:23:40 --> 00:23:44
API but it needs to be flexible enough

00:23:42 --> 00:23:46
where they could start to bring their

00:23:43 --> 00:23:50
own data in because even today you know

00:23:45 --> 00:23:52
just being the self deprecating amazon

00:23:49 --> 00:23:54
guy we have services that aren't they're

00:23:51 --> 00:23:55
not very flexible like our image

00:23:53 --> 00:23:57
recognition service is really cool and

00:23:54 --> 00:23:58
it does a lot of great things but I

00:23:56 --> 00:24:00
can't actually bring my own data to it

00:23:57 --> 00:24:02
and I can't actually optimize and

00:23:59 --> 00:24:03
customize for my problem well in your

00:24:01 --> 00:24:05
defense I will say that when you are

00:24:02 --> 00:24:07
delivering a service to people there are

00:24:04 --> 00:24:08
xpectations and consistencies and

00:24:06 --> 00:24:10
things you have to do to scale but

00:24:07 --> 00:24:12
clearly all the experiments that people

00:24:09 --> 00:24:13
have to make you can't actually have

00:24:11 --> 00:24:14
this one size fits all when you build a

00:24:12 --> 00:24:16
service like that you build it for the

00:24:13 --> 00:24:18
lowest common denominator and it's being

00:24:15 --> 00:24:20
used by c-span it's being used by you

00:24:17 --> 00:24:23
know travel sites when it comes down to

00:24:19 --> 00:24:25
if I wanted to apply this for biometric

00:24:22 --> 00:24:25
security in my corporation I want to

00:24:24 --> 00:24:28
train it on

00:24:24 --> 00:24:38
a whole bunch of data the fingerprint

00:24:27 --> 00:24:39
daters pictures of sub Scott it's not

00:24:37 --> 00:24:41
good enough to probably be visualizing

00:24:38 --> 00:24:42
your data and looking at all the pretty

00:24:40 --> 00:24:44
pictures anymore so business

00:24:41 --> 00:24:45
intelligence is kind of moving into data

00:24:43 --> 00:24:47
science you need insights that's like a

00:24:44 --> 00:24:49
big theme I don't want to say bi is dead

00:24:46 --> 00:24:50
but it's you know it's on its last leg I

00:24:48 --> 00:24:53
think everyone wants to move to two more

00:24:49 --> 00:24:55
predictions actionable prescriptive

00:24:52 --> 00:24:56
analytics and you can't do that when

00:24:54 --> 00:24:58
you're just kind of looking at pretty

00:24:55 --> 00:25:00
pictures so I think we're seeing just

00:24:57 --> 00:25:02
his mass transition from bi you know

00:24:59 --> 00:25:03
analysts over to data scientists yeah

00:25:01 --> 00:25:05
they don't know a whole lot about

00:25:02 --> 00:25:06
machine learning I think they're gonna

00:25:04 --> 00:25:07
get to the point where they can push a

00:25:05 --> 00:25:10
button and they can use an extra boost

00:25:06 --> 00:25:12
algorithm and then optimize my boom I'm

00:25:09 --> 00:25:14
getting a great result I know the domain

00:25:11 --> 00:25:16
that I'm in I know the data I know the

00:25:13 --> 00:25:17
problem I'm trying to solve whether it's

00:25:15 --> 00:25:18
an extra boost or a deep neural net I

00:25:16 --> 00:25:20
really don't care as long as my end

00:25:17 --> 00:25:23
predictions are are accurate you're

00:25:19 --> 00:25:24
getting the answers you need what's your

00:25:22 --> 00:25:26
view on the AI is a service debate I

00:25:23 --> 00:25:28
actually think that there's room for

00:25:25 --> 00:25:29
both so there's kind of machine learning

00:25:27 --> 00:25:31
as a service that this kind of generic

00:25:28 --> 00:25:33
one size fits all and then there's these

00:25:30 --> 00:25:35
more specialized tools and the way that

00:25:32 --> 00:25:37
we like to think about it is like in the

00:25:34 --> 00:25:39
arly 90s when the web was coming online

00:25:36 --> 00:25:42
and everything like that if you didn't

00:25:38 --> 00:25:44
have a website like a one size fits all

00:25:41 --> 00:25:47
just like get me an e-commerce shop

00:25:43 --> 00:25:48
online or something like that that zero

00:25:46 --> 00:25:50
to one was very transformative for

00:25:47 --> 00:25:51
people but I would still argue it's

00:25:49 --> 00:25:53
till true for small and medium-sized

00:25:50 --> 00:25:55
businesses that are like on Shopify and

00:25:52 --> 00:25:56
yeah so we think it Shopify is more of

00:25:54 --> 00:25:58
the like machine learning as a service

00:25:55 --> 00:25:59
option where it's just like I need

00:25:57 --> 00:26:01
something and I don't really know what

00:25:58 --> 00:26:02
I'm doing but I just need something and

00:26:00 --> 00:26:04
that zero to one can be incredibly

00:26:01 --> 00:26:06
powerful yeah that being says as

00:26:03 --> 00:26:09
businesses start to differentiate

00:26:05 --> 00:26:11
themselves on their AI strategy as they

00:26:08 --> 00:26:13
start to hire data scientists and doing

00:26:10 --> 00:26:15
this bespoke knowledge and these custom

00:26:12 --> 00:26:16
data sets and things like that now you

00:26:14 --> 00:26:17
don't want the one-size-fits-all

00:26:15 --> 00:26:19
solution you want to build a company

00:26:16 --> 00:26:22
like Amazon where you can really

00:26:18 --> 00:26:24
optimize every aspect of that website to

00:26:21 --> 00:26:26
really make the most out of it takes

00:26:23 --> 00:26:27
them from that one to two but I still

00:26:25 --> 00:26:29
think there's this need especially in

00:26:26 --> 00:26:31
the immediate term to help people go

00:26:28 --> 00:26:35
from zero to one one thing which is

00:26:30 --> 00:26:37
different than IT industry in the past

00:26:34 --> 00:26:39
is it seems pretty clear because the

00:26:36 --> 00:26:41
value is in data and because

00:26:38 --> 00:26:44
value is an optimization that the

00:26:40 --> 00:26:45
infrastructure layer will be free or

00:26:43 --> 00:26:47
maybe not free but lows come to matter

00:26:44 --> 00:26:49
what I mean by that is in the past if I

00:26:46 --> 00:26:51
were gonna give you a computing

00:26:48 --> 00:26:52
infrastructure I would charge you for

00:26:50 --> 00:26:54
that computing infrastructure and like

00:26:51 --> 00:26:56
the tooling and everything else around

00:26:53 --> 00:26:59
that but it seems like the tooling is

00:26:55 --> 00:27:01
omething that people are happy to build

00:26:58 --> 00:27:03
and offer for free attending layer of

00:27:00 --> 00:27:05
abstraction whether it's a service or

00:27:02 --> 00:27:06
not and so I think from an industry

00:27:04 --> 00:27:07
perspective that's a very different

00:27:05 --> 00:27:09
horizontal ization than we've seen in

00:27:07 --> 00:27:12
the past so what does it mean when you

00:27:08 --> 00:27:13
have horizontal versus vertical AI

00:27:11 --> 00:27:14
layered so in the past like a lot of

00:27:12 --> 00:27:16
times tooling was something you could

00:27:13 --> 00:27:18
monetize like purify was a billion

00:27:15 --> 00:27:19
dollar company that basically sold the

00:27:17 --> 00:27:20
debugger right all the tooling and all

00:27:18 --> 00:27:22
the infrastructure in order to build

00:27:19 --> 00:27:25
application was very much monetizable

00:27:21 --> 00:27:26
for AI because there's so much value in

00:27:24 --> 00:27:28
optimization there's so much value in

00:27:25 --> 00:27:29
data it's almost like this tooling

00:27:27 --> 00:27:32
infrastructure layer is something that

00:27:28 --> 00:27:34
you know is being offered or given or

00:27:31 --> 00:27:35
you know many players are just offering

00:27:33 --> 00:27:37
for free and there now if there is

00:27:34 --> 00:27:39
libraries and things on top of services

00:27:36 --> 00:27:41
and then the actual value is the

00:27:38 --> 00:27:43
vertical application of those two

00:27:40 --> 00:27:46
whatever so for example if I look across

00:27:42 --> 00:27:48
a I startups the ones that tend to be

00:27:45 --> 00:27:49
getting the most traction have taken AI

00:27:47 --> 00:27:50
and applied it to a vertical problem

00:27:48 --> 00:27:52
they have access to a proprietary data

00:27:49 --> 00:27:54
set or they've done a specific sort of

00:27:51 --> 00:27:56
optimization and now there's a vertical

00:27:53 --> 00:27:58
focus towards something as opposed to

00:27:55 --> 00:28:00
I've got this very horizontal kind of

00:27:57 --> 00:28:02
generic AI later I think that's the game

00:27:59 --> 00:28:04
of the big players like the Amazons or

00:28:01 --> 00:28:06
the googles and so I think from an

00:28:03 --> 00:28:08
industry-wide in the startup perspective

00:28:05 --> 00:28:10
I really think vertical focus is how

00:28:07 --> 00:28:11
e're gonna see the gains of the

00:28:09 --> 00:28:14
nterprise as opposed to what we've seen

00:28:10 --> 00:28:15
in the past in computer science which is

00:28:13 --> 00:28:16
the more horizontal I completely agree

00:28:14 --> 00:28:17
you know over the last three or four

00:28:15 --> 00:28:20
years I've seen a number of startups

00:28:16 --> 00:28:21
come to me whether I was at Intel and

00:28:19 --> 00:28:23
working with Intel capital or not

00:28:20 --> 00:28:26
with Amazon and they would say hey I can

00:28:22 --> 00:28:27
scale up training of deep neural nets so

00:28:25 --> 00:28:29
much better than everyone else and I

00:28:26 --> 00:28:30
provide their algorithms you know come

00:28:28 --> 00:28:33
work with us or come by us or whatever

00:28:29 --> 00:28:34
they were looking for and I think no

00:28:32 --> 00:28:37
longer your point about vertical ization

00:28:33 --> 00:28:38
is absolutely valid and I see the ones

00:28:36 --> 00:28:41
that are successful are the ones that

00:28:37 --> 00:28:43
have a really nice mixture of kind of AI

00:28:40 --> 00:28:45
research the ones that that have kind of

00:28:42 --> 00:28:48
one foot in research on the algorithms

00:28:44 --> 00:28:51
have really deep expertise but they also

00:28:47 --> 00:28:52
are mixed with true domain experts in

00:28:50 --> 00:28:53
the vertical that they're trying to work

00:28:51 --> 00:28:54
in

00:28:52 --> 00:28:57
so for example if it's a medical imaging

00:28:53 --> 00:28:59
startup if you don't have a hospital

00:28:56 --> 00:29:00
you're working with to provide you data

00:28:58 --> 00:29:02
if you don't have doctors if you don't

00:28:59 --> 00:29:05
have clinicians that you're working with

00:29:01 --> 00:29:06
or have on staff frankly I don't see a

00:29:04 --> 00:29:08
whole lot of legitimacy to what you're

00:29:05 --> 00:29:10
doing I've seen startups that overfit to

00:29:07 --> 00:29:11
a public data set when I was at in town

00:29:09 --> 00:29:13
they say this is fantastic look at us

00:29:10 --> 00:29:15
we're getting 99% accuracy on this

00:29:12 --> 00:29:20
managing debt it said we're worth you

00:29:14 --> 00:29:22
know $190 come by our invest in us if

00:29:19 --> 00:29:24
that's me wasn't a value prop so I

00:29:21 --> 00:29:26
completely see the mixture of domain

00:29:23 --> 00:29:30
expertise in a vertical along with the

00:29:25 --> 00:29:31
AI expertise and illustrative compared

00:29:29 --> 00:29:33
back to how it used to be so I listen I

00:29:30 --> 00:29:34
used to have a friend I went to college

00:29:32 --> 00:29:36
with he built applications if you'd go

00:29:34 --> 00:29:38
after different verticals but he was

00:29:35 --> 00:29:40
like a domain in specific application

00:29:37 --> 00:29:43
developers he built like booking systems

00:29:39 --> 00:29:44
for like kennels and veterinarians and

00:29:42 --> 00:29:45
then lodging systems he didn't have to

00:29:43 --> 00:29:47
know he'd go and talk I don't see what

00:29:44 --> 00:29:48
hey wanted yeah they need build an

00:29:46 --> 00:29:50
application so like you know like he

00:29:47 --> 00:29:51
could build basically a horizontal

00:29:49 --> 00:29:52
company that was selling to these

00:29:50 --> 00:29:54
different verticals but if you look at

00:29:51 --> 00:29:56
AI like like in order to add something

00:29:53 --> 00:29:57
of value to these domains you have to

00:29:55 --> 00:29:59
understand the data you have to

00:29:56 --> 00:30:00
understand the use and you have to

00:29:58 --> 00:30:01
understand the optimization is almost

00:29:59 --> 00:30:03
like these companies are becoming these

00:30:00 --> 00:30:05
very vertically focused companies are

00:30:02 --> 00:30:06
the ones that are successful whereas

00:30:04 --> 00:30:07
like you know kind of IT folks were

00:30:05 --> 00:30:09
normally used to thinking of these as

00:30:06 --> 00:30:11
horizontally we've made the argument in

00:30:08 --> 00:30:13
our own podcast on weird the machine

00:30:10 --> 00:30:15
learning edge for startups will be and

00:30:12 --> 00:30:16
how they can compete with the googles

00:30:14 --> 00:30:17
and the other folks would have these

00:30:15 --> 00:30:19
huge in-house teams and it is

00:30:16 --> 00:30:20
essentially along these lines of this

00:30:18 --> 00:30:22
vertical part but I love it also in the

00:30:19 --> 00:30:24
big picture of that this idea of

00:30:21 --> 00:30:25
augmentation and having all these tools

00:30:23 --> 00:30:27
give you the superpowers but you still

00:30:24 --> 00:30:28
have this human skill in how's that

00:30:26 --> 00:30:30
's the domain expert that's right

00:30:27 --> 00:30:31
you're talking about brutalization is

00:30:29 --> 00:30:33
going to be a huge part of that and

00:30:30 --> 00:30:35
going after you have very specific

00:30:32 --> 00:30:37
problems with very specific datasets but

00:30:34 --> 00:30:39
specialization along that horizontal

00:30:36 --> 00:30:40
ayer and I think is going to be key

00:30:38 --> 00:30:43
like I don't think there's going to be a

00:30:39 --> 00:30:46
one-size-fits-all everything but if

00:30:42 --> 00:30:50
there's specific parts of that journey

00:30:45 --> 00:30:53
to getting to practical productionize

00:30:49 --> 00:30:56
day.i system that humans are bad at or

00:30:52 --> 00:30:58
that can be automated if you are laser

00:30:55 --> 00:31:00
focused on that specific specialization

00:30:57 --> 00:31:02
like optimization data collection would

00:30:59 --> 00:31:03
be another data version would be another

00:31:01 --> 00:31:06
like like general things that are

00:31:02 --> 00:31:08
scaffolding exactly to

00:31:05 --> 00:31:10
do the AI problem scaffoldings are the

00:31:07 --> 00:31:12
perfect way to put it but then every

00:31:09 --> 00:31:14
building that the scaffolding is wrapped

00:31:11 --> 00:31:16
around is unique isn't it exactly

00:31:13 --> 00:31:18
do people know the difference between if

00:31:15 --> 00:31:19
it's a data problem or an AI problem and

00:31:17 --> 00:31:21
how do they know because if you have

00:31:18 --> 00:31:23
like people who have legacy skills who

00:31:20 --> 00:31:24
are coming up to speed like is it

00:31:22 --> 00:31:27
obvious I think the data problem is the

00:31:23 --> 00:31:29
first like layer and maslov's hierarchy

00:31:26 --> 00:31:32
of AI like you need to actually have the

00:31:28 --> 00:31:34
data then you need to be able to

00:31:31 --> 00:31:35
understand the business context of what

00:31:33 --> 00:31:37
you're aiming for and do a lot of the

00:31:34 --> 00:31:39
data engineering to make sure that you

00:31:36 --> 00:31:40
can actually leverage that data in some

00:31:38 --> 00:31:42
way that it's not just in filing

00:31:39 --> 00:31:44
cabinets somewhere yeah

00:31:41 --> 00:31:45
then there's the tooling and the

00:31:43 --> 00:31:46
infrastructure for actually like

00:31:44 --> 00:31:48
training some of these more

00:31:45 --> 00:31:49
sophisticated algorithms and then

00:31:47 --> 00:31:50
actually optimization just sits at the

00:31:48 --> 00:31:52
very top that's for it to be amazing

00:31:49 --> 00:31:54
when I think of the Maslow's hierarchy

00:31:51 --> 00:31:56
of needs in the psychological sense it's

00:31:53 --> 00:31:57
really about like the basics and the

00:31:55 --> 00:31:59
survival things and then the

00:31:56 --> 00:32:00
aspirational stuff at the top but

00:31:58 --> 00:32:02
optimization is a means to an end it's

00:31:59 --> 00:32:03
not the end in and of itself but the way

00:32:01 --> 00:32:05
I think about Muslims hierarchy is like

00:32:02 --> 00:32:06
once you get to the top then you kind of

00:32:04 --> 00:32:08
have everything in order and you're like

00:32:05 --> 00:32:10
doing it right and then you can go to

00:32:07 --> 00:32:12
getting bands and the optimization is

00:32:09 --> 00:32:14
about like that last mile of now I'm

00:32:11 --> 00:32:15
applying it to a business problem how do

00:32:13 --> 00:32:17
I make as much money as possible as

00:32:14 --> 00:32:19
efficiently as possible I mean there are

00:32:16 --> 00:32:21
the number of partners that provide

00:32:18 --> 00:32:23
foundational api's for example for a LP

00:32:20 --> 00:32:25
for a natural language processing you

00:32:22 --> 00:32:28
can take your text throw it into their

00:32:24 --> 00:32:30
API get sentiment get named entities you

00:32:27 --> 00:32:32
know get you know parts of speech out

00:32:29 --> 00:32:34
basic things for NLP and and integrate

00:32:31 --> 00:32:36
that into a larger workflow and not have

00:32:33 --> 00:32:38
to go and find a corpus of data annotate

00:32:35 --> 00:32:40
it clean it figure out what algorithm to

00:32:37 --> 00:32:42
use train and figure how to deploy it

00:32:39 --> 00:32:45
all that is basically a restful api away

00:32:41 --> 00:32:46
from most api call from all these that's

00:32:44 --> 00:32:49
a case where you're using the api to

00:32:45 --> 00:32:50
like pull in different data streams but

00:32:48 --> 00:32:52
i also think of companies like ship oh

00:32:49 --> 00:32:54
and they give shipping as a service yeah

00:32:51 --> 00:32:56
essentially through an api and I

00:32:53 --> 00:32:57
think is really interesting because what

00:32:55 --> 00:32:59
I love about this is about

00:32:56 --> 00:33:01
democratization of all these things

00:32:58 --> 00:33:02
across ecosystem because you essentially

00:33:00 --> 00:33:03
have all these superpowers you're

00:33:01 --> 00:33:05
pulling on these api's are giving you

00:33:02 --> 00:33:07
this super power and that super power

00:33:04 --> 00:33:09
you're consuming it that way in order to

00:33:06 --> 00:33:10
do whatever the hell you want as a

00:33:08 --> 00:33:13
company and what you're buying with that

00:33:09 --> 00:33:14
API is really data is the is the data

00:33:12 --> 00:33:17
that they've collected perhaps an

00:33:13 --> 00:33:19
notated trained on which is you know a

00:33:16 --> 00:33:20
really great thing for most companies

00:33:18 --> 00:33:21
because there

00:33:19 --> 00:33:23
gonna go build a system like and and the

00:33:20 --> 00:33:25
way that we think about this is if

00:33:22 --> 00:33:26
you're in business there's something

00:33:24 --> 00:33:28
that you're good at there's some way

00:33:25 --> 00:33:29
that you differentiate yourselves from

00:33:27 --> 00:33:31
your competitors and you should

00:33:28 --> 00:33:33
outsource everything else focus on what

00:33:30 --> 00:33:36
you're great at and then bolt api's

00:33:32 --> 00:33:38
around them to supercharge it if I'm in

00:33:35 --> 00:33:40
a medical imaging vertical you know

00:33:37 --> 00:33:41
focus startup I want to hire guys that

00:33:39 --> 00:33:42
are focused on that vertical you might

00:33:40 --> 00:33:45
want to hire the radiology I once

00:33:41 --> 00:33:47
xactly the early days of web I remember

00:33:44 --> 00:33:49
there was this like move of talking

00:33:46 --> 00:33:51
about tech innovation as like

00:33:48 --> 00:33:53
combinatorial innovation and I think is

00:33:50 --> 00:33:54
kind of a buzzy word but I actually

00:33:52 --> 00:33:56
think it makes sense in this context one

00:33:53 --> 00:33:57
of my favorite writers is Brian Arthur

00:33:55 --> 00:33:59
who wrote the nature of technology and

00:33:56 --> 00:34:01
how it evolves and he did a lot of

00:33:58 --> 00:34:03
undamental work in complexity economics

00:34:00 --> 00:34:05
anyway it's really interesting but this

00:34:02 --> 00:34:06
idea that you can take all these

00:34:04 --> 00:34:08
different pieces and kind of we combine

00:34:05 --> 00:34:10
them in ways that are creating entirely

00:34:07 --> 00:34:11
new things that's always our innovation

00:34:09 --> 00:34:13
has happened and now it's happening on a

00:34:10 --> 00:34:15
grander scale with these things which i

00:34:12 --> 00:34:17
think is amazing and beautiful a single

00:34:14 --> 00:34:19
person can do now it would have taken a

00:34:16 --> 00:34:21
team of researchers a decade ago well

00:34:18 --> 00:34:23
thank you guys for joining the a6 and

00:34:20 --> 00:34:25
say bye guys thank you thank you thank

00:34:22 --> 00:34:25
you so much

<!-- YOUTUBE_TRANSCRIPT_END -->
