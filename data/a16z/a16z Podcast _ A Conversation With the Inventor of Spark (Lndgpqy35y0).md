---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Lndgpqy35y0"
title: "a16z Podcast | A Conversation With the Inventor of Spark"
video_url: "https://www.youtube.com/watch?v=Lndgpqy35y0"
thumbnail_url: "https://i.ytimg.com/vi/Lndgpqy35y0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Lndgpqy35y0"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:29:25.000Z"
upload_date: "2019-01-02"
duration_seconds: 1143
duration_human: "19:03"
view_count: 132
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:40:29.970Z"
---

# a16z Podcast | A Conversation With the Inventor of Spark

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Lndgpqy35y0
- video_id: Lndgpqy35y0
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:29:25.000Z
- upload_date: 2019-01-02
- duration: 19:03
- view_count: 132
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

One of the most active and fastest growing open source big data cluster computing projects is Apache Spark, which was originally developed at U.C. Berkeley's AMPLab and is now used by internet giants and other companies around the world. Including, as announced most recently, IBM.

In this Q&A with Spark inventor Matei Zaharia -- also the CTO and co-founder of Databricks (and a professor at MIT) -- on the heels of the recent Spark Summit, we cover the difference between Hadoop MapReduce and Spark; what are the ingredients of a successful open source project; and the story of how Spark almost helped a friend win a million dollars.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hello everyone welcome to the a6 & Z

00:00:02 --> 00:00:07
podcast I'm sonal and I'm here today

00:00:04 --> 00:00:10
with Matassa Hara the CTO and co-founder

00:00:06 --> 00:00:12
of data BRICS which is the primary

00:00:09 --> 00:00:14
company driving and developing spark and

00:00:11 --> 00:00:15
we're actually just coming out of the

00:00:13 --> 00:00:18
spark summit which took place this week

00:00:14 --> 00:00:20
and it's one of the biggest events for

00:00:17 --> 00:00:22
developers who are working on spark for

00:00:19 --> 00:00:23
companies that are interested in spark

00:00:21 --> 00:00:25
and pretty much for anyone who cares

00:00:22 --> 00:00:27
about trends in the big data space just

00:00:24 --> 00:00:29
o start off matei just start by just

00:00:26 --> 00:00:32
giving us a description of what spark is

00:00:28 --> 00:00:34
o spark is software for processing

00:00:31 --> 00:00:36
large volumes of data on a cluster and

00:00:33 --> 00:00:38
the things that make it unique are first

00:00:35 --> 00:00:41
of all it has a very powerful

00:00:37 --> 00:00:43
programming model that lets you do many

00:00:40 --> 00:00:45
kinds of advanced analytics and

00:00:42 --> 00:00:47
processing such as machine learning or

00:00:44 --> 00:00:49
graph computation or stream processing

00:00:46 --> 00:00:52
and second is designed to be very easy

00:00:48 --> 00:00:54
to use much easier to use than previous

00:00:51 --> 00:00:55
ystems for working with large data so

00:00:53 --> 00:00:58
what were some of the previous systems

00:00:54 --> 00:01:00
for working with large data sets before

00:00:57 --> 00:01:04
SPARC the most widely used system was

00:00:59 --> 00:01:06
probably MapReduce which was invented at

00:01:03 --> 00:01:09
Google and popularized through the open

00:01:05 --> 00:01:11
source Hadoop project and you know

00:01:08 --> 00:01:14
MapReduce itself was it was a major step

00:01:10 --> 00:01:15
over just writing distributed programs

00:01:13 --> 00:01:18
from scratch but it was still very

00:01:14 --> 00:01:20
difficult to to adopt and use and and

00:01:17 --> 00:01:22
led to very complicated applications and

00:01:19 --> 00:01:24
also very poor performance in some of

00:01:21 --> 00:01:26
them so what were some of the reasons

00:01:23 --> 00:01:28
for inventing SPARC in the first place

00:01:25 --> 00:01:30
then I mean besides the problems and in

00:01:27 --> 00:01:32
the limitations of that were you just

00:01:29 --> 00:01:33
rying to solve the problems of Map

00:01:31 --> 00:01:34
Reduce or were you actually trying to do

00:01:32 --> 00:01:37
something different

00:01:33 --> 00:01:39
yeah it's a good question so we started

00:01:36 --> 00:01:41
building SPARC after several years of

00:01:38 --> 00:01:43
working on MapReduce and working with

00:01:40 --> 00:01:46
companies that were very early on using

00:01:42 --> 00:01:49
MapReduce I was a PhD student at UC

00:01:45 --> 00:01:52
Berkeley and we actually started working

00:01:48 --> 00:01:54
with Hadoop users back in 2007 and I did

00:01:51 --> 00:01:56
for example an internship at Facebook

00:01:53 --> 00:01:58
when Facebook was only about 300 people

00:01:55 --> 00:02:00
and they were just starting to set up

00:01:57 --> 00:02:02
Hadoop and in all these companies I saw

00:01:59 --> 00:02:04
that there was a lot of potential to

00:02:01 --> 00:02:06
putting together large data sets and

00:02:03 --> 00:02:08
processing them on a cluster but they

00:02:05 --> 00:02:10
were all hitting the same kind of

00:02:07 --> 00:02:12
limitations and they all wanted to do

00:02:09 --> 00:02:14
more with it so basically our lab

00:02:11 --> 00:02:15
created spark

00:02:13 --> 00:02:17
to address these divided nation you know

00:02:14 --> 00:02:18
let's go take a step back for a moment

00:02:16 --> 00:02:21
and talk again about your experience at

00:02:17 --> 00:02:23
Facebook though why was the problem

00:02:20 --> 00:02:25
challenging there I mean BIC Tate has

00:02:22 --> 00:02:26
been around forever so what about that

00:02:24 --> 00:02:29
problem was interesting and different

00:02:25 --> 00:02:31
hat made you want something better than

00:02:28 --> 00:02:34
what you already had like what was it

00:02:30 --> 00:02:36
about that data I guess so Facebook like

00:02:33 --> 00:02:39
other companies starting to you

00:02:35 --> 00:02:41
know to use business data was able to

00:02:38 --> 00:02:43
collect a lot of very valuable data

00:02:40 --> 00:02:46
bout how users are interacting with it

00:02:42 --> 00:02:48
and Facebook was also going very quickly

00:02:45 --> 00:02:50
so they were adding you know many tens

00:02:47 --> 00:02:52
of millions of users every few months

00:02:49 --> 00:02:54
and you know they definitely couldn't

00:02:51 --> 00:02:56
just talk to every user or even send

00:02:53 --> 00:02:58
someone to every country where Facebook

00:02:55 --> 00:03:00
was used and figure out how people are

00:02:57 --> 00:03:02
using the site so they needed to use

00:02:59 --> 00:03:04
this data to improve this user

00:03:01 --> 00:03:07
experience so there are two things that

00:03:03 --> 00:03:08
made it especially challenging one was

00:03:06 --> 00:03:10
the scale of the data which was you know

00:03:07 --> 00:03:13
much higher than you could do with

00:03:09 --> 00:03:16
traditional tools and the second one was

00:03:12 --> 00:03:18
how many different people within

00:03:15 --> 00:03:20
Facebook wanted to interact with it it

00:03:17 --> 00:03:23
wasn't just one person or one team doing

00:03:19 --> 00:03:25
it it was many people often with not you

00:03:22 --> 00:03:27
know not not that many technical skills

00:03:24 --> 00:03:29
o I need it to be very easy to work

00:03:26 --> 00:03:31
with this data what was a limitation of

00:03:28 --> 00:03:33
like why wasn't what was in place

00:03:30 --> 00:03:36
MapReduce I guess you're describing

00:03:32 --> 00:03:39
enough so MapReduce was was actually

00:03:35 --> 00:03:41
great for running sort of large batch

00:03:38 --> 00:03:43
jobs that kind of scan through the whole

00:03:40 --> 00:03:46
data and and summarize all of it and

00:03:42 --> 00:03:48
give you an answer but it was designed

00:03:45 --> 00:03:51
mainly you know for jobs that take tens

00:03:47 --> 00:03:52
of minutes to hours MapReduce initially

00:03:50 --> 00:03:55
came out of Google where it was used for

00:03:51 --> 00:03:57
web indexing and the whole point was are

00:03:54 --> 00:03:59
we'll run this giant job every night and

00:03:56 --> 00:04:02
in the morning it's built a new index of

00:03:58 --> 00:04:03
the web but what Facebook wanted to do

00:04:01 --> 00:04:06
was different they had a lot of

00:04:02 --> 00:04:08
questions that they wanted to ask almost

00:04:05 --> 00:04:10
interactively and there's a person

00:04:07 --> 00:04:13
sitting there who launches a you know a

00:04:09 --> 00:04:15
question at the cluster and needs to get

00:04:12 --> 00:04:16
an answer back and it wasn't very well

00:04:14 --> 00:04:18
suited for that so it's more like to

00:04:15 --> 00:04:20
move fast and break things kind of model

00:04:17 --> 00:04:22
at Facebook where you want to like just

00:04:19 --> 00:04:24
deploy code or we're more importantly

00:04:21 --> 00:04:27
quickly iterate in real times you got

00:04:23 --> 00:04:28
your future testing and get ya know

00:04:26 --> 00:04:30
different future tests

00:04:27 --> 00:04:32
but just in general when you work with

00:04:29 --> 00:04:34
data you want to ask multiple questions

00:04:31 --> 00:04:36
repeatedly when you're doing ad hoc

00:04:33 --> 00:04:37
exploration of the data as opposed to

00:04:35 --> 00:04:39
you know when you have a certain

00:04:36 --> 00:04:41
application that you know okay I'm just

00:04:38 --> 00:04:42
going to hunt this every night so the

00:04:40 --> 00:04:44
second feature that you mentioned about

00:04:41 --> 00:04:46
he usability I mean I feel like it's

00:04:43 --> 00:04:48
obvious we care about things being

00:04:45 --> 00:04:49
pretty and easy to use because we no one

00:04:47 --> 00:04:50
wants to deal with the kludgy interface

00:04:48 --> 00:04:52
I mean does that really matter in this

00:04:49 --> 00:04:54
case because if you're really an insider

00:04:51 --> 00:04:55
who knows how to work with data do you

00:04:53 --> 00:04:58
even really need to care about that the

00:04:54 --> 00:05:00
interesting thing is nobody wants only

00:04:57 --> 00:05:03
the insiders to work with data basically

00:04:59 --> 00:05:05
everyone wants to be able to access it

00:05:02 --> 00:05:07
directly actually there was a great

00:05:04 --> 00:05:10
keynote about this at the SPARC summit

00:05:06 --> 00:05:12
by Gloria Lau where she said that also

00:05:09 --> 00:05:14
the insiders themselves don't want to be

00:05:11 --> 00:05:16
answering questions for other people you

00:05:13 --> 00:05:17
know if they have the specialized skills

00:05:15 --> 00:05:19
if there are data scientists for example

00:05:16 --> 00:05:21
they'd prefer to be doing something

00:05:18 --> 00:05:23
advanced and the other users outside

00:05:20 --> 00:05:25
would be for it to ask the questions

00:05:22 --> 00:05:26
themselves so ease of use was quite

00:05:24 --> 00:05:28
important so one of the most interesting

00:05:25 --> 00:05:29
announcements that came out of the SPARC

00:05:27 --> 00:05:31
summit that I think a lot of people saw

00:05:28 --> 00:05:35
it was the announcement that IBM is

00:05:30 --> 00:05:37
backing SPARC basically iBM is is doing

00:05:34 --> 00:05:39
two things first of all it's investing

00:05:36 --> 00:05:41
in the development of spark you know

00:05:38 --> 00:05:43
much in the summer in a similar way as

00:05:40 --> 00:05:46
to how they've invested in other

00:05:42 --> 00:05:49
technologies such as Java or Linux they

00:05:45 --> 00:05:51
see a spark as a key technology and

00:05:48 --> 00:05:55
actually putting developer resources and

00:05:50 --> 00:05:57
second IBM is also moving some of its

00:05:54 --> 00:05:59
internal products and product lines to

00:05:56 --> 00:06:01
use spark or to offer spark to customers

00:05:58 --> 00:06:03
because they think it you know it will

00:06:00 --> 00:06:05
improve these products to build them on

00:06:02 --> 00:06:07
spark so does that mean that IBM's

00:06:04 --> 00:06:09
basically making a big bet on the cloud

00:06:06 --> 00:06:11
in a bigger way than ever before I think

00:06:08 --> 00:06:14
it's much more than the cloud I think

00:06:10 --> 00:06:16
even though the cloud is one you know

00:06:13 --> 00:06:18
that IBM is is interested in expanding

00:06:15 --> 00:06:20
and they have huge business lines that

00:06:17 --> 00:06:23
are completely unrelated to the cloud in

00:06:19 --> 00:06:26
in solutions and consulting and also

00:06:22 --> 00:06:28
in products and services such as Watson

00:06:25 --> 00:06:30
or data based products and so on and you

00:06:27 --> 00:06:32
know I hope that what will happen is

00:06:29 --> 00:06:35
really great interact integration

00:06:31 --> 00:06:36
between these products and spark were

00:06:34 --> 00:06:37
there any other major news or

00:06:35 --> 00:06:40
interesting things that you saw any

00:06:36 --> 00:06:41
other interesting keynotes or trends

00:06:39 --> 00:06:43
that you think are

00:06:40 --> 00:06:45
for audience to know about what came out

00:06:42 --> 00:06:47
of spark summit this year one of the

00:06:44 --> 00:06:49
coolest ones I saw was a talk from

00:06:46 --> 00:06:51
Toyota about how they use spark to

00:06:48 --> 00:06:54
improve you know to basically look at

00:06:50 --> 00:06:56
social media feedback what people are

00:06:53 --> 00:06:58
writing about their cars and figure out

00:06:55 --> 00:07:00
hings like oh is the problem with the

00:06:57 --> 00:07:02
brakes and the PIA I saw how they can

00:06:59 --> 00:07:04
improve their products as a result of

00:07:01 --> 00:07:06
this so you have a car company that's

00:07:03 --> 00:07:07
basically using social media is big data

00:07:05 --> 00:07:08
because it's real-time and it's fast and

00:07:06 --> 00:07:11
I probably got a ton of feedback and

00:07:07 --> 00:07:14
they're using spark to figure out how to

00:07:10 --> 00:07:16
change their product in real time right

00:07:13 --> 00:07:17
hey're not using it to deal with it in

00:07:15 --> 00:07:19
real time but they're using it just to

00:07:16 --> 00:07:21
get a lot more insight into how their

00:07:18 --> 00:07:24
vehicles behave once they're out there

00:07:20 --> 00:07:26
so you know what one example is if

00:07:23 --> 00:07:28
people report you know say some noise

00:07:25 --> 00:07:31
coming from the brakes or something like

00:07:27 --> 00:07:33
that now they might hear about this you

00:07:30 --> 00:07:34
know if a person goes and talks to their

00:07:32 --> 00:07:36
mechanic but there might be many other

00:07:33 --> 00:07:38
people who just ask their friends online

00:07:35 --> 00:07:40
and ask oh look I hear this kind of

00:07:37 --> 00:07:42
weird you know scratching sound from my

00:07:39 --> 00:07:45
car so and and it's actually very hard

00:07:41 --> 00:07:47
to take this kind of text data which you

00:07:44 --> 00:07:49
know might say well the people have many

00:07:46 --> 00:07:51
different ways of describing say

00:07:48 --> 00:07:53
this noise problem and actually

00:07:50 --> 00:07:55
understand it and classify it cluster

00:07:52 --> 00:07:58
together all the messages about a

00:07:54 --> 00:08:00
specific problem but for the engineers

00:07:57 --> 00:08:02
at Toyota who you know are trying to

00:07:59 --> 00:08:04
design the next car or to figure out you

00:08:01 --> 00:08:06
know any potential issues with the

00:08:03 --> 00:08:07
current components it's very useful to

00:08:05 --> 00:08:09
have this not it that makes a lot of

00:08:06 --> 00:08:11
sense so they're basically analyzing

00:08:08 --> 00:08:12
this big social media data set get that

00:08:10 --> 00:08:13
insight

00:08:11 --> 00:08:15
where's many other interesting things

00:08:12 --> 00:08:18
that you saw coming out of it apart from

00:08:14 --> 00:08:20
Toyota we also saw a lot of other great

00:08:17 --> 00:08:22
companies starting to talk about the use

00:08:19 --> 00:08:24
of spark so you know we've known about

00:08:21 --> 00:08:26
some of them for a while but it's nice

00:08:23 --> 00:08:28
to see you know companies talking

00:08:25 --> 00:08:30
publicly about interesting applications

00:08:27 --> 00:08:32
they've built so so some of the other

00:08:29 --> 00:08:36
highlights for example included Netflix

00:08:31 --> 00:08:38
Capital One at PBS summits we also had

00:08:35 --> 00:08:41
Goldman Sachs and and Novartis in the

00:08:37 --> 00:08:43
biotech one other questions just on the

00:08:40 --> 00:08:46
big picture side you know I'm fascinated

00:08:42 --> 00:08:47
by the tension between open and closed

00:08:45 --> 00:08:49
and when it comes to the open source

00:08:46 --> 00:08:50
topic in the open source community as

00:08:48 --> 00:08:53
well and one of the things that I think

00:08:49 --> 00:08:54
is really interesting is that every side

00:08:52 --> 00:08:56
of open has an

00:08:53 --> 00:08:58
have closed as well and the evolution of

00:08:55 --> 00:09:00
open source historically as well as now

00:08:57 --> 00:09:02
always involves corporate big corporate

00:08:59 --> 00:09:05
players getting in the game as well as a

00:09:01 --> 00:09:07
lot of individual developers academics

00:09:04 --> 00:09:09
how does that sort of affect the

00:09:06 --> 00:09:10
cosystem in general I want to love to

00:09:08 --> 00:09:12
hear your thoughts about that and also

00:09:09 --> 00:09:15
how that applies to spark so the spark

00:09:11 --> 00:09:18
community is already very large it's

00:09:14 --> 00:09:19
actually the most active open source

00:09:17 --> 00:09:22
project and data processing in general

00:09:18 --> 00:09:24
as far as we can tell and it has many

00:09:21 --> 00:09:26
companies are participating in it and I

00:09:23 --> 00:09:28
think we've been able to grow the

00:09:25 --> 00:09:30
community in a way that everyone gets

00:09:27 --> 00:09:32
what they want out of it and there

00:09:29 --> 00:09:34
aren't really any major tensions between

00:09:31 --> 00:09:36
the companies working on it and people

00:09:33 --> 00:09:38
trying to keep certain things closed or

00:09:35 --> 00:09:40
not is there something unique about this

00:09:37 --> 00:09:42
that's allowing that to happen so I

00:09:39 --> 00:09:44
think it's just a matter of the culture

00:09:41 --> 00:09:46
in the project and setting it up early

00:09:43 --> 00:09:48
on to be very welcoming to contributors

00:09:45 --> 00:09:50
and to actually you know have people

00:09:47 --> 00:09:52
converge on on how they're going to work

00:09:49 --> 00:09:55
together you know how they keep it

00:09:51 --> 00:09:58
stable and reliable so we started doing

00:09:54 --> 00:10:00
that you know back from the UC Berkeley

00:09:57 --> 00:10:02
days when we had other people contribute

00:09:59 --> 00:10:04
to it and I think we just have that

00:10:01 --> 00:10:06
pattern in place and it's sort of best

00:10:03 --> 00:10:08
for every contributor that's involved

00:10:05 --> 00:10:09
there's been plenty of open source

00:10:07 --> 00:10:11
projects that have not reached this kind

00:10:08 --> 00:10:13
of scale or grown as fast and the

00:10:10 --> 00:10:14
cosystem you're describing not it's

00:10:12 --> 00:10:16
just not random chance that it ended up

00:10:13 --> 00:10:18
there I guess what I'm really interested

00:10:15 --> 00:10:19
in is that you are the creator we're the

00:10:17 --> 00:10:21
most popular and fastest growing open

00:10:18 --> 00:10:23
source projects ever what are some of

00:10:20 --> 00:10:25
the ingredients of a successful open

00:10:22 --> 00:10:27
source project like what does it take to

00:10:24 --> 00:10:29
kind of get here for other people

00:10:26 --> 00:10:30
working in open source yeah so I should

00:10:28 --> 00:10:32
say you know from the beginning that you

00:10:29 --> 00:10:34
know we didn't we certainly didn't

00:10:31 --> 00:10:36
imagine that spark would be this widely

00:10:33 --> 00:10:38
used when we started and it's only you

00:10:35 --> 00:10:40
know it's kind of been a feedback loop

00:10:37 --> 00:10:43
as we saw people being excited in it we

00:10:39 --> 00:10:45
also you know decided to spend a lot of

00:10:42 --> 00:10:47
time to make it better and and to foster

00:10:44 --> 00:10:50
the community around it but I think

00:10:46 --> 00:10:52
there are several things that helped so

00:10:49 --> 00:10:55
first of all spark was actually tackling

00:10:51 --> 00:10:57
a problem a real problem that people had

00:10:54 --> 00:10:59
and that more and more people were

00:10:56 --> 00:11:01
beginning to have in the future which

00:10:58 --> 00:11:02
was the problem of working with really

00:11:00 --> 00:11:04
large scale data sets so it kind of

00:11:01 --> 00:11:06
resonated with the real need people

00:11:03 --> 00:11:07
automatic yes exactly and I need that

00:11:05 --> 00:11:09
was also going over

00:11:06 --> 00:11:11
time so obviously and why there wasn't

00:11:08 --> 00:11:14
much else they could use so obviously

00:11:10 --> 00:11:16
that's helpful second we had a really

00:11:13 --> 00:11:18
fantastic set of people working on the

00:11:15 --> 00:11:21
project and I think it's especially

00:11:17 --> 00:11:23
important when you begin a project when

00:11:20 --> 00:11:25
it goes you know from the original

00:11:22 --> 00:11:27
initial team to bigger and bigger teams

00:11:24 --> 00:11:29
because you're going to need a really

00:11:26 --> 00:11:32
great team to work with it in the future

00:11:28 --> 00:11:34
the people at UC Berkeley and the people

00:11:31 --> 00:11:36
we got at database to work on spark are

00:11:33 --> 00:11:40
just a really fantastic team that's able

00:11:35 --> 00:11:41
to build great software very quickly yes

00:11:39 --> 00:11:43
o the people aspect of it is exactly

00:11:40 --> 00:11:46
because it is a community open Scott yes

00:11:42 --> 00:11:48
definitely and and third apart from the

00:11:45 --> 00:11:50
sort of core team that was around at

00:11:47 --> 00:11:52
early on we tried from the beginning to

00:11:49 --> 00:11:55
be very engaged with the community and

00:11:51 --> 00:11:56
to foster new contributors help them

00:11:54 --> 00:11:59
actually contribute to the project and

00:11:55 --> 00:12:01
learn how to do things and actually

00:11:58 --> 00:12:03
participate and hundreds of people that

00:12:00 --> 00:12:05
do that you know many people might only

00:12:02 --> 00:12:06
send in one or two patches but we've

00:12:04 --> 00:12:08
tried to make the barrier for that

00:12:05 --> 00:12:11
extremely low so that they can actually

00:12:07 --> 00:12:13
help out it takes some some effort to do

00:12:10 --> 00:12:15
that because at the beginning you know

00:12:12 --> 00:12:17
if you're someone working on it every

00:12:14 --> 00:12:19
day and that someone comes in and once

00:12:16 --> 00:12:21
helped you know to get some idea in it's

00:12:18 --> 00:12:23
always faster for you to do it yourself

00:12:20 --> 00:12:24
than to help this other person but you

00:12:22 --> 00:12:27
have to do that you have to help them

00:12:23 --> 00:12:29
get set up and help them contribute in

00:12:26 --> 00:12:31
order to actually go the total set of

00:12:28 --> 00:12:32
people who can contribute so is there

00:12:30 --> 00:12:34
just like a lot of documentation on

00:12:31 --> 00:12:35
their project then or I mean what really

00:12:33 --> 00:12:37
makes them easier to be able to

00:12:34 --> 00:12:39
contribute then look what concretely

00:12:36 --> 00:12:41
eah yeah so there's several things so

00:12:38 --> 00:12:43
first you know first even before anyone

00:12:40 --> 00:12:45
contributes they have to be able to use

00:12:42 --> 00:12:47
it so there's been a lot of focus on

00:12:44 --> 00:12:50
making spark very easy to download and

00:12:46 --> 00:12:52
use and having as much documentation and

00:12:49 --> 00:12:55
examples out of the box as possible and

00:12:51 --> 00:12:58
we're still doing a lot to expand this

00:12:54 --> 00:13:00
actually the second thing you need is

00:12:57 --> 00:13:03
you know once people are actually trying

00:12:59 --> 00:13:05
to send in patches or to try to

00:13:02 --> 00:13:07
understand something about the project

00:13:04 --> 00:13:09
you do have to talk with them to review

00:13:06 --> 00:13:11
the patches and so on and you know and

00:13:08 --> 00:13:12
help them actually get them in and the

00:13:10 --> 00:13:14
third thing I need that's really

00:13:11 --> 00:13:15
important to keep a project moving

00:13:13 --> 00:13:18
quickly is just really great

00:13:14 --> 00:13:19
infrastructure for testing checking the

00:13:17 --> 00:13:21
quality making sure that it continues to

00:13:18 --> 00:13:23
be good and by investing in this kind

00:13:20 --> 00:13:25
infrastructure much the same as you do

00:13:22 --> 00:13:28
in any other engineering organization

00:13:24 --> 00:13:30
you can then end up moving a lot faster

00:13:27 --> 00:13:32
so these are the things we we spend time

00:13:29 --> 00:13:33
on the most interesting thing about open

00:13:31 --> 00:13:35
source is an ecosystem that grows up

00:13:32 --> 00:13:37
around it because otherwise why I have

00:13:34 --> 00:13:38
it even be open source could you talk a

00:13:36 --> 00:13:39
little bit more about but I've actually

00:13:37 --> 00:13:42
seen you share a chart that shows a

00:13:38 --> 00:13:45
really rich ecosystem going around spark

00:13:41 --> 00:13:47
and why that matters yeah definitely

00:13:44 --> 00:13:49
eah so over the the past few years

00:13:46 --> 00:13:52
we've seen a lot of vote a lot of other

00:13:48 --> 00:13:54
open source projects integrate with

00:13:51 --> 00:13:56
spark and build on top of it and really

00:13:53 --> 00:13:59
put together you know this this set of

00:13:55 --> 00:14:02
software you can use together to build

00:13:58 --> 00:14:04
applications so in particular you know

00:14:01 --> 00:14:05
one of the things we size many of the

00:14:03 --> 00:14:08
projects that were built on top of

00:14:04 --> 00:14:11
Hadoop such as hive which is a sequel

00:14:07 --> 00:14:13
processing at scale and pig and mahout

00:14:10 --> 00:14:15
for machine learning are starting to

00:14:12 --> 00:14:17
hunt on top of spark as well so that

00:14:14 --> 00:14:19
users of those can can get you know the

00:14:16 --> 00:14:21
speed ups and the benefits from using

00:14:18 --> 00:14:24
spark and we've also seen quite a few of

00:14:20 --> 00:14:27
the of the data storage projects for

00:14:23 --> 00:14:30
example MongoDB or Cassandra or attack

00:14:26 --> 00:14:32
yarn or many of the no sequel key-value

00:14:29 --> 00:14:34
stories now connecting to spark offering

00:14:31 --> 00:14:36
ways to heat the data in and for spark

00:14:33 --> 00:14:38
users that's exciting because it means

00:14:35 --> 00:14:39
they can write an application against

00:14:37 --> 00:14:42
spark and use it against data and all

00:14:38 --> 00:14:43
these storage systems they don't have to

00:14:41 --> 00:14:46
change the application to talk to each

00:14:42 --> 00:14:48
one so I think even beyond the activity

00:14:45 --> 00:14:51
happening and in spark itself these

00:14:47 --> 00:14:53
projects are on top and on the side are

00:14:50 --> 00:14:55
one of the most valuable things for the

00:14:52 --> 00:14:58
users and in fact wasn't spark itself

00:14:54 --> 00:15:00
isn't spark itself able to sit on top of

00:14:57 --> 00:15:02
Hadoop for those that use the Hadoop

00:14:59 --> 00:15:05
file storage so yeah definitely from the

00:15:01 --> 00:15:07
beginning we design spark to consider

00:15:04 --> 00:15:09
you know on top of Hadoop and to talk to

00:15:06 --> 00:15:11
her Dube but we also left it open so

00:15:08 --> 00:15:13
that you can hone it in other

00:15:10 --> 00:15:15
environments and you know we basically

00:15:12 --> 00:15:17
our philosophy in it is to try to

00:15:14 --> 00:15:18
integrate with all the these kind of

00:15:16 --> 00:15:21
environments where data can be stored

00:15:17 --> 00:15:23
and give users a one really simple way

00:15:20 --> 00:15:24
to work with the data no matter where it

00:15:22 --> 00:15:26
is you've talked about the community

00:15:23 --> 00:15:27
ou've talked about all the successful

00:15:25 --> 00:15:30
ingredients of an open source project

00:15:26 --> 00:15:32
but I guess I'm kind of fascinated by

00:15:29 --> 00:15:33
the story of an inventor and we haven't

00:15:31 --> 00:15:35
opportunity to talk to an inventor of a

00:15:32 --> 00:15:37
really interesting thing

00:15:34 --> 00:15:40
and I want to hear a little bit more

00:15:36 --> 00:15:43
color on what that was like one of the

00:15:39 --> 00:15:46
most interesting ones was Lester Mackey

00:15:42 --> 00:15:50
who was a PhD student and the same year

00:15:45 --> 00:15:52
as me and his he was actually on the

00:15:49 --> 00:15:53
team that got second place in the

00:15:51 --> 00:15:55
Netflix challenge they were extremely

00:15:52 --> 00:15:56
close to winning the whole challenge

00:15:54 --> 00:15:58
what was a Netflix challenge good for

00:15:55 --> 00:16:00
our audiences to remind people what it

00:15:57 --> 00:16:02
was yeah the Netflix the Netflix

00:15:59 --> 00:16:04
challenge was this $1,000,000 price to

00:16:01 --> 00:16:06
improve the accuracy of movie

00:16:03 --> 00:16:08
recommendations on Netflix so Netflix

00:16:05 --> 00:16:10
released this data set and said oh

00:16:07 --> 00:16:12
currently we can predict you know users

00:16:09 --> 00:16:15
core for a movie - you know something

00:16:11 --> 00:16:18
like within 0.85 and if you can increase

00:16:14 --> 00:16:19
this point you know if you can decrease

00:16:17 --> 00:16:22
the just point eight or something like

00:16:18 --> 00:16:23
that we'll give you a million dollars so

00:16:21 --> 00:16:26
it was an open challenge very

00:16:22 --> 00:16:27
large-scale to encourage innovation in

00:16:25 --> 00:16:30
this area okay so what happened with

00:16:26 --> 00:16:32
Lester yeah so so Lester was one of the

00:16:29 --> 00:16:34
people who had you know he was

00:16:31 --> 00:16:36
developing a ton of new algorithms and

00:16:33 --> 00:16:38
combination of algorithms for this

00:16:35 --> 00:16:40
problem he had this pretty large data

00:16:37 --> 00:16:41
set especially for that time and he

00:16:39 --> 00:16:43
wanted to run these very quickly so it's

00:16:40 --> 00:16:46
actually one of the applications that I

00:16:42 --> 00:16:48
first tried to support in spark was you

00:16:45 --> 00:16:49
know the recommendation algorithm he was

00:16:47 --> 00:16:53
working on so did you win the network's

00:16:48 --> 00:16:55
prize well he has his team won won

00:16:52 --> 00:16:57
second place so they didn't quite make

00:16:54 --> 00:16:58
it but they were at least get something

00:16:56 --> 00:17:00
for winning second place I mean first

00:16:57 --> 00:17:06
place got 1 million dollars I did again

00:16:59 --> 00:17:08
I'm not sure told us talk about another

00:17:05 --> 00:17:10
transition here which is the transition

00:17:07 --> 00:17:12
from an open-source project to becoming

00:17:09 --> 00:17:13
a commercial one and and part of what

00:17:11 --> 00:17:15
you guys are doing obviously is is

00:17:12 --> 00:17:16
involved in that can you talk a little

00:17:14 --> 00:17:17
bit more about the transition of what

00:17:15 --> 00:17:19
hat takes to move from open-source to

00:17:16 --> 00:17:21
commercial application that people

00:17:18 --> 00:17:24
actually use and have expectations of

00:17:20 --> 00:17:27
yeah definitely so you know so as we saw

00:17:23 --> 00:17:29
a spark do very well in in the in the

00:17:26 --> 00:17:31
open source domain we we wanted to start

00:17:28 --> 00:17:33
a company around that - really hard in

00:17:30 --> 00:17:36
it and to bring it to a much wider class

00:17:32 --> 00:17:39
of commercial users and you know we

00:17:35 --> 00:17:42
really wanted to find a model that lets

00:17:38 --> 00:17:45
it continue to be fully open source and

00:17:41 --> 00:17:48
continue to be a successful project that

00:17:44 --> 00:17:50
way for everyone participating in it

00:17:47 --> 00:17:53
raditionally it's it's always been

00:17:49 --> 00:17:55
attention in companies that you know

00:17:52 --> 00:17:57
that try to commercialize open-source

00:17:54 --> 00:17:58
projects because you know they build all

00:17:56 --> 00:18:01
this great stuff and then they kind of

00:17:57 --> 00:18:02
give it away for free and you know they

00:18:00 --> 00:18:03
ou know it's it's this tension between

00:18:01 --> 00:18:06
all are there some things we just

00:18:02 --> 00:18:09
shouldn't put into it or you know how

00:18:05 --> 00:18:11
else can we actually have you know power

00:18:08 --> 00:18:14
as a successful business around it so

00:18:10 --> 00:18:16
the way we're doing this at databases is

00:18:13 --> 00:18:18
actually quite different and I think

00:18:15 --> 00:18:20
it's a it's a very nice a very powerful

00:18:17 --> 00:18:22
model for doing this which is that we're

00:18:19 --> 00:18:24
offering spark in a cloud service let's

00:18:21 --> 00:18:26
talk about why that it's like why why

00:18:23 --> 00:18:27
are you guys doing that and actually why

00:18:25 --> 00:18:29
is that so different why don't other

00:18:26 --> 00:18:33
people do that we're offering spark has

00:18:28 --> 00:18:35
a you know cloud service and what that

00:18:32 --> 00:18:37
means is you know it's the same spark

00:18:34 --> 00:18:39
that anyone else gets in the open source

00:18:36 --> 00:18:41
all the libraries all the improvements

00:18:38 --> 00:18:43
we put into the engine you can just

00:18:40 --> 00:18:44
download them and run them yourselves or

00:18:42 --> 00:18:46
if you want you know you can talk to a

00:18:43 --> 00:18:49
vendor that provides support on it

00:18:45 --> 00:18:51
yourself and there isn't any tension for

00:18:48 --> 00:18:53
us between you know do we put something

00:18:50 --> 00:18:55
in spark or does it become some kind of

00:18:52 --> 00:18:57
premium feature thank you mate a is

00:18:54 --> 00:19:00
great hearing your story an evolution of

00:18:56 --> 00:19:01
spark and and what it is and thank you

00:18:59 --> 00:19:04
everyone and that's another episode of

00:19:00 --> 00:19:04
the a6 and Z podcast

<!-- YOUTUBE_TRANSCRIPT_END -->
