---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "B4VFErkx0m4"
title: "Chris Re"
video_url: "https://www.youtube.com/watch?v=B4VFErkx0m4"
thumbnail_url: "https://i.ytimg.com/vi/B4VFErkx0m4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=B4VFErkx0m4"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-15T19:43:40.000Z"
upload_date: "2017-07-15"
duration_seconds: 1294
duration_human: "21:34"
view_count: 149
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:28:32.791Z"
---

# Chris Re

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=B4VFErkx0m4
- video_id: B4VFErkx0m4
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-15T19:43:40.000Z
- upload_date: 2017-07-15
- duration: 21:34
- view_count: 149
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:08 --> 00:00:13
perfect thanks yeah so I'm excited to

00:00:11 --> 00:00:14
tell you about some work that we've been

00:00:12 --> 00:00:16
doing over the last couple years in my

00:00:13 --> 00:00:18
lab uh which is on a system called Deep

00:00:15 --> 00:00:20
dive which is what we call a dark data

00:00:17 --> 00:00:22
system now uh during this talk I won't

00:00:19 --> 00:00:24
have time to sort of partial out credit

00:00:21 --> 00:00:25
o all the people who deserve it but

00:00:23 --> 00:00:26
here are a bunch of people on this team

00:00:24 --> 00:00:28
and a bunch of people who uh I didn't

00:00:25 --> 00:00:29
put on the slide uh everything I'm going

00:00:27 --> 00:00:31
to talk about is open source so if

00:00:28 --> 00:00:32
there's details that are missing

00:00:30 --> 00:00:36
please go ahead and check out the open

00:00:31 --> 00:00:38
source so uh deep dive is what we call a

00:00:35 --> 00:00:40
dark data system so these are the types

00:00:37 --> 00:00:42
of system that start with things like

00:00:39 --> 00:00:44
mails web pages unstructured

00:00:41 --> 00:00:46
information in tables increasingly

00:00:43 --> 00:00:48
images and the goal of those un the of

00:00:45 --> 00:00:49
these dark Data Systems is to take all

00:00:47 --> 00:00:51
that information which is inaccessible

00:00:49 --> 00:00:53
to machines and basically create Rich

00:00:50 --> 00:00:56
structured data out of it sort of

00:00:52 --> 00:00:59
traditional SQL style databases out of

00:00:55 --> 00:00:59
these text tables and figures now this

00:00:58 --> 00:01:01
a problem that people have been

00:00:59 --> 00:01:03
working on for a couple of decades but

00:01:00 --> 00:01:05
very recently there's been a kind of an

00:01:02 --> 00:01:07
exciting development in this area which

00:01:04 --> 00:01:08
is that the quality of these kinds of

00:01:06 --> 00:01:10
systems has dramatically improved and

00:01:08 --> 00:01:12
I'll tell you about our work in this

00:01:09 --> 00:01:13
area but there are a number of systems

00:01:11 --> 00:01:15
that have shown that it's actually

00:01:12 --> 00:01:17
possible to build these ETL pipelines

00:01:14 --> 00:01:19
these pipelines that extract transform

00:01:16 --> 00:01:21
and load information with higher quality

00:01:18 --> 00:01:23
than humans in some in some very simple

00:01:20 --> 00:01:25
settings and we've compared in our work

00:01:22 --> 00:01:26
against things like human annotators and

00:01:24 --> 00:01:28
science but also increasingly we've been

00:01:25 --> 00:01:30
comparing against people from

00:01:27 --> 00:01:31
corporations and inside the Enterprise

00:01:29 --> 00:01:33
and actually building these ETL

00:01:30 --> 00:01:35
pipelines in a short amount of time and

00:01:32 --> 00:01:36
in some ways with higher quality than

00:01:34 --> 00:01:39
humans and I'm going to validate those

00:01:35 --> 00:01:41
claims in the middle of the talk now

00:01:39 --> 00:01:43
hen you look at that claim you may say

00:01:40 --> 00:01:45
well this is a little bit strange if I

00:01:42 --> 00:01:46
think about ETL as a process there

00:01:44 --> 00:01:48
ally are sort of three separate

00:01:45 --> 00:01:49
problems that people have been working

00:01:47 --> 00:01:51
on and if you go to any conference on

00:01:48 --> 00:01:53
this topic you'll see entire tracks

00:01:50 --> 00:01:55
about how to extract data that's go into

00:01:52 --> 00:01:56
the text and find the mentions and

00:01:54 --> 00:01:58
entities you're interested in another

00:01:55 --> 00:02:00
track about how once you've extracted

00:01:57 --> 00:02:02
those entities how do I integrate them

00:01:59 --> 00:02:03
with my existing structured database and

00:02:01 --> 00:02:05
once I have those two databases actually

00:02:02 --> 00:02:07
merged how do I clean up the information

00:02:04 --> 00:02:08
so that it's usable for all the

00:02:06 --> 00:02:10
downstream analytics and those are sort

00:02:07 --> 00:02:12
of three separate problems that people

00:02:09 --> 00:02:14
have been studying for a while now in

00:02:11 --> 00:02:16
Deep dive we took sort of a strange

00:02:13 --> 00:02:17
academic approach to this and said what

00:02:15 --> 00:02:19
if we viewed all of them as essentially

00:02:17 --> 00:02:21
one statistical inference problem so

00:02:18 --> 00:02:23
we're going to view all of these three

00:02:20 --> 00:02:24
problems holistically together now at

00:02:22 --> 00:02:26
first glance this sounds like an insane

00:02:24 --> 00:02:28
solution why would I take three hard

00:02:25 --> 00:02:30
problems that really haven't been solved

00:02:27 --> 00:02:33
and stick them all together what could

00:02:29 --> 00:02:34
possibly uh gained by doing this and

00:02:32 --> 00:02:36
really there are two things that make me

00:02:33 --> 00:02:38
think this is not an insane idea the

00:02:35 --> 00:02:40
first one is in every application we

00:02:37 --> 00:02:41
actually built we had all three of these

00:02:39 --> 00:02:43
problems you always have to do

00:02:40 --> 00:02:45
extraction integration and cleaning so

00:02:42 --> 00:02:47
we really weren't making the problem any

00:02:44 --> 00:02:49
more difficult a second issue is that by

00:02:46 --> 00:02:51
doing probabilistic or statistical

00:02:48 --> 00:02:52
inference we could actually focus on the

00:02:50 --> 00:02:54
part of the pipeline that was most

00:02:51 --> 00:02:56
relevant for end to-end application

00:02:53 --> 00:02:57
quality so in contrast if you think

00:02:55 --> 00:02:59
about the way that people build these

00:02:56 --> 00:03:01
xtraction and integration and cleaning

00:02:58 --> 00:03:03
systems they tend to overe extract over

00:03:00 --> 00:03:04
integrate and Over clean because they

00:03:02 --> 00:03:06
have no idea if their cleaning or

00:03:03 --> 00:03:08
extraction is actually going to prove

00:03:05 --> 00:03:10
the end application goal that they're

00:03:07 --> 00:03:11
interested in in contrast we can build a

00:03:09 --> 00:03:13
pipeline first which may not be very

00:03:10 --> 00:03:15
high quality and then use probabilistic

00:03:12 --> 00:03:17
inference as a way to say where should

00:03:14 --> 00:03:18
we spend our effort next and the

00:03:16 --> 00:03:20
reduction in effort can sometimes be

00:03:17 --> 00:03:21
orders of magnitude as we've seen in

00:03:19 --> 00:03:23
some of the applications we built in our

00:03:20 --> 00:03:25
lab

00:03:22 --> 00:03:27
okay now another goal of Deep dive is to

00:03:24 --> 00:03:29
try and make it accessible to people who

00:03:26 --> 00:03:30
are not computer scientists as much as

00:03:28 --> 00:03:32
possible and I would not claim that we

00:03:29 --> 00:03:34
succeeded in this goal but we've made it

00:03:31 --> 00:03:36
substantially easier people in

00:03:33 --> 00:03:38
bioengineering in law enforcement have

00:03:35 --> 00:03:40
actually written programs against Deep

00:03:37 --> 00:03:42
dive and gotten value out of it right

00:03:39 --> 00:03:44
now to do that what we've done is raised

00:03:41 --> 00:03:45
ramatically the level of abstraction

00:03:43 --> 00:03:47
that you write programs against Deep

00:03:44 --> 00:03:49
dive compared to other machine learning

00:03:46 --> 00:03:51
tools in particular you cannot write

00:03:48 --> 00:03:53
down an algorithm inside Deep dive you

00:03:51 --> 00:03:54
only specify things like the features

00:03:52 --> 00:03:57
the random variables and the

00:03:53 --> 00:03:59
correlations completely decoupling how

00:03:56 --> 00:04:01
that inference problem is actually

00:03:58 --> 00:04:03
solved now if you do this you have a

00:04:00 --> 00:04:05
real serious problem and it's anytime

00:04:02 --> 00:04:07
that you remove something with an

00:04:04 --> 00:04:08
abstraction you put more burden on the

00:04:06 --> 00:04:10
system and so what we realized a couple

00:04:07 --> 00:04:12
of years ago was that if we were ever

00:04:09 --> 00:04:14
going to make this Vision succeed we had

00:04:11 --> 00:04:16
to go and build basically huge scalable

00:04:13 --> 00:04:17
inference engines and so in the second

00:04:15 --> 00:04:19
part of the talk I'll describe what

00:04:16 --> 00:04:20
we've been doing there to try and take

00:04:18 --> 00:04:22
advantage of Modern Hardware and in

00:04:19 --> 00:04:24
particular the parilis that Modern

00:04:21 --> 00:04:27
Hardware exploits to be able to build

00:04:23 --> 00:04:29
these scalable inference engines right

00:04:26 --> 00:04:31
so before all that a problem motivated

00:04:28 --> 00:04:33
Deep dive and the problem I'll just

00:04:30 --> 00:04:35
motivate for you is a purely scientific

00:04:32 --> 00:04:36
question so as we started to walk around

00:04:34 --> 00:04:38
campus one of the things that we

00:04:35 --> 00:04:40
realized were that all the scientists

00:04:37 --> 00:04:42
that were around us were able to access

00:04:39 --> 00:04:44
information that they had never seen

00:04:41 --> 00:04:46
before so in a way like never before

00:04:43 --> 00:04:48
scientific information was accessible to

00:04:45 --> 00:04:50
them they know the keywords they know

00:04:47 --> 00:04:52
the topic they can go out there and get

00:04:49 --> 00:04:54
he PDF the problem they faced was that

00:04:51 --> 00:04:56
for even the narrowest of scientific

00:04:53 --> 00:04:57
questions they couldn't possibly read

00:04:55 --> 00:04:59
all the information that was relevant to

00:04:56 --> 00:05:01
them or even a significant fraction of

00:04:58 --> 00:05:02
it so this is why say the scientific

00:05:00 --> 00:05:04
knowledge is accessible in a way like

00:05:02 --> 00:05:08
never before but it's not really

00:05:03 --> 00:05:10
readable right now

00:05:07 --> 00:05:11
orse today some of the most pressing

00:05:09 --> 00:05:12
problems that we were interested in our

00:05:10 --> 00:05:14
lab and our collaborators were

00:05:12 --> 00:05:16
interested in are what we call

00:05:13 --> 00:05:17
macroscopic problems these are problems

00:05:15 --> 00:05:18
where we have to take all this

00:05:16 --> 00:05:20
information that's available out there

00:05:17 --> 00:05:22
and assemble it in one place and then

00:05:19 --> 00:05:24
and only then can we make an estimate

00:05:21 --> 00:05:26
about what we're interested in so for

00:05:23 --> 00:05:28
example in climate and biodiversity we

00:05:25 --> 00:05:30
would want to build the basically the

00:05:27 --> 00:05:31
world's biggest fossil record where

00:05:29 --> 00:05:33
very Foss was found anywhere in the

00:05:30 --> 00:05:35
planet put that in one structured

00:05:32 --> 00:05:38
atabase and then relatively simple

00:05:34 --> 00:05:40
analytics would tell us you know what's

00:05:37 --> 00:05:41
going on with various die offs over time

00:05:39 --> 00:05:42
and we could do that analysis if we

00:05:40 --> 00:05:45
could get that information which is

00:05:41 --> 00:05:47
buried in PDFs and charts into a

00:05:44 --> 00:05:49
structured database now climate and

00:05:46 --> 00:05:50
biodiversity isn't unique in this way at

00:05:48 --> 00:05:51
Stanford we've been doing a bunch of

00:05:49 --> 00:05:53
work in health and we have some things I

00:05:50 --> 00:05:55
can talk about offline and also

00:05:52 --> 00:05:57
financial markets is another area where

00:05:54 --> 00:05:59
these uh there's this integration of a

00:05:56 --> 00:06:00
massive amount of information to try and

00:05:58 --> 00:06:02
make a best effort but I'm going to talk

00:05:59 --> 00:06:03
about climate and biodiversity

00:06:01 --> 00:06:06
because it's the first one we actually

00:06:02 --> 00:06:08
built so we ask this very naive question

00:06:05 --> 00:06:09
since the since the literature is not

00:06:07 --> 00:06:11
readable could we build a machine to

00:06:08 --> 00:06:13
read for us now I don't mean that it's

00:06:10 --> 00:06:15
going to read like poetry it's not going

00:06:12 --> 00:06:17
to read and feel like it's getting moved

00:06:14 --> 00:06:18
by the words I literally mean that it's

00:06:16 --> 00:06:20
going to go from the process of the bits

00:06:17 --> 00:06:22
that come in that are unstructured to

00:06:19 --> 00:06:23
the nice structured database now

00:06:21 --> 00:06:25
unfortunately that process requires

00:06:22 --> 00:06:27
inference it's not as simple as just

00:06:24 --> 00:06:28
copying the bits that appear on the page

00:06:26 --> 00:06:30
and putting them in a structured

00:06:27 --> 00:06:32
atabase and we want to be able to do

00:06:29 --> 00:06:34
that process as automatically as

00:06:31 --> 00:06:36
possible okay so let me show you

00:06:34 --> 00:06:38
something that we'd like to read and I

00:06:35 --> 00:06:39
don't expect you to read it right now

00:06:37 --> 00:06:41
okay it's too small but this is the kind

00:06:38 --> 00:06:43
of information we'd like to a paper we'd

00:06:40 --> 00:06:45
like to read a scientific paper we'd

00:06:42 --> 00:06:48
like to read for this biodiversity

00:06:44 --> 00:06:50
application so in this this table right

00:06:47 --> 00:06:52
here we have information that we'd like

00:06:49 --> 00:06:54
to extract so here we've actually seen

00:06:51 --> 00:06:57
that in this region called obora we have

00:06:54 --> 00:06:58
this genus more of alam crias was a kind

00:06:56 --> 00:07:00
of cockroach if you love cockroaches

00:06:57 --> 00:07:01
this is really hot stuff you want to

00:06:59 --> 00:07:03
know that this cockroach was found in

00:07:00 --> 00:07:04
obora me I personally don't care but

00:07:02 --> 00:07:08
you'd probably want to know it if you

00:07:03 --> 00:07:09
were a cockroach Enthusiast right so in

00:07:07 --> 00:07:11
any event if you think about the

00:07:08 --> 00:07:13
computer science that you'd have to do

00:07:10 --> 00:07:14
to be able to extract this information

00:07:12 --> 00:07:16
you'd have to make a bunch of choices so

00:07:13 --> 00:07:17
if you think concretely about the

00:07:15 --> 00:07:20
program you'd have to write you'd have

00:07:16 --> 00:07:22
to say is obora a region or not is Mor

00:07:19 --> 00:07:24
of alam MCAS a Genus a species what is

00:07:21 --> 00:07:26
it how have to deal with the OCR the

00:07:23 --> 00:07:27
optical character recognition and make

00:07:25 --> 00:07:29
sure I'm grouping the terms correctly

00:07:26 --> 00:07:31
I'd have to make a choice that actually

00:07:28 --> 00:07:33
a relation was expressed visually in

00:07:30 --> 00:07:35
this uh in this table and I'd like to be

00:07:32 --> 00:07:38
able to learn that pattern so that I can

00:07:34 --> 00:07:40
repeat this and save some work even if I

00:07:37 --> 00:07:43
saw all those lowlevel issues I still

00:07:39 --> 00:07:45
have another problem the obora that's in

00:07:42 --> 00:07:47
my table here turns out that there are

00:07:44 --> 00:07:49
40 different regions inside my data set

00:07:46 --> 00:07:51
hat are informally referred to as aora

00:07:48 --> 00:07:52
so even if I solve all what all those

00:07:50 --> 00:07:54
lowlevel or what we call mention level

00:07:51 --> 00:07:56
challenges I still have these higher

00:07:53 --> 00:07:58
level entity level challenges to try and

00:07:55 --> 00:08:00
resolve the information of which obor

00:07:57 --> 00:08:02
I'm talking about now in this example we

00:07:59 --> 00:08:04
get uh deceptively uh lucky we're

00:08:01 --> 00:08:07
actually much less lucky than it seems

00:08:03 --> 00:08:08
here in the text of the article the body

00:08:06 --> 00:08:10
of the article we actually get this

00:08:07 --> 00:08:12
great sentence that says the obor site

00:08:09 --> 00:08:14
is situated and then it gives a

00:08:11 --> 00:08:15
description and here we get the GPS

00:08:13 --> 00:08:17
coordinates and so if we could go into

00:08:14 --> 00:08:19
the text and indeed we do go into the

00:08:16 --> 00:08:21
text and read this information and again

00:08:18 --> 00:08:23
make all of those little choices about

00:08:20 --> 00:08:24
what the text means we could potentially

00:08:22 --> 00:08:26
link these two pieces of information and

00:08:23 --> 00:08:28
get very high value data the kind of

00:08:25 --> 00:08:31
data that a person would be able to

00:08:27 --> 00:08:33
extract from reading this information

00:08:30 --> 00:08:35
right so this isn't vaporware this is

00:08:32 --> 00:08:36
actually something we built it's called

00:08:34 --> 00:08:40
paleo Deep dive it's been live for for a

00:08:35 --> 00:08:41
while now here's how it works so we want

00:08:39 --> 00:08:43
o extract this higher coverage fossil

00:08:40 --> 00:08:45
record that's what we're after and

00:08:42 --> 00:08:47
basically this is what people were doing

00:08:44 --> 00:08:49
bunch of PDFs come in and they try to

00:08:46 --> 00:08:51
type into a standard SQL database what

00:08:48 --> 00:08:53
hey read in those PDFs where they found

00:08:50 --> 00:08:54
a fossil and what rock formation and

00:08:52 --> 00:08:57
what time

00:08:53 --> 00:08:58
period what we're going to do instead is

00:08:56 --> 00:09:00
we're going to take that text if you

00:08:57 --> 00:09:01
like and OCR and all the rest and

00:08:59 --> 00:09:02
basically basically do statistical

00:09:00 --> 00:09:04
inference to try and predict the most

00:09:01 --> 00:09:05
likely database that the humans would

00:09:03 --> 00:09:07
have filled out given all the

00:09:04 --> 00:09:10
observations from text and NLP tools and

00:09:07 --> 00:09:12
all the rest that we run over the Corpus

00:09:09 --> 00:09:14
okay now our approach is a little bit

00:09:11 --> 00:09:16
insane or aggressive every one of those

00:09:13 --> 00:09:18
choices that you would have made if you

00:09:15 --> 00:09:19
had written the ETL script we're going

00:09:17 --> 00:09:21
to basically ask you to write down a

00:09:18 --> 00:09:23
random variable and that random variable

00:09:20 --> 00:09:24
is going to say I don't know I don't

00:09:22 --> 00:09:27
know which obor I'm talking about but

00:09:23 --> 00:09:29
it's one of these 45 I don't know if

00:09:26 --> 00:09:31
oror is the word is a location or if

00:09:28 --> 00:09:33
it's a Genus but it's only a set of

00:09:30 --> 00:09:34
three or four possibilities we're going

00:09:32 --> 00:09:36
to let you write down those random

00:09:33 --> 00:09:38
variables all of those choices and then

00:09:36 --> 00:09:40
we're going to basically build a very

00:09:37 --> 00:09:41
large Factor graph so a a set of random

00:09:39 --> 00:09:43
variables and their correlations and

00:09:40 --> 00:09:45
we're going to process them in some of

00:09:42 --> 00:09:47
our applications right now these Factor

00:09:44 --> 00:09:49
graphs become hundreds of terabytes in

00:09:46 --> 00:09:51
size so if we were to write them all out

00:09:48 --> 00:09:53
o dis which we actually don't but the

00:09:50 --> 00:09:54
point is is that to be able to pull this

00:09:52 --> 00:09:56
Vision off of being having this very

00:09:53 --> 00:09:58
high level programming language we're

00:09:55 --> 00:10:00
going to have to do very scalable

00:09:57 --> 00:10:02
statistical inference right so if you've

00:09:59 --> 00:10:03
seen this area you've probably said well

00:10:01 --> 00:10:05
okay fine people have tried approaches

00:10:02 --> 00:10:06
like this but the quality is never very

00:10:04 --> 00:10:08
good it's you know you'd still prefer

00:10:05 --> 00:10:10
humans humans actually aren't that

00:10:07 --> 00:10:12
expensive let's just pay them to do it

00:10:09 --> 00:10:13
so a couple years ago we compared to

00:10:11 --> 00:10:15
this database called paleodb and these

00:10:12 --> 00:10:16
numbers are a little bit out of date but

00:10:14 --> 00:10:18
his was something where people weren't

00:10:15 --> 00:10:21
in pain there were actually 300 or so

00:10:17 --> 00:10:22
volunteers reading papers and putting

00:10:20 --> 00:10:24
that information into a database they

00:10:22 --> 00:10:26
spent over a decade on this and in fact

00:10:23 --> 00:10:28
hey spent two continuous person decades

00:10:25 --> 00:10:30
ince we have the logs reading the

00:10:27 --> 00:10:32
information typing it into a database

00:10:29 --> 00:10:35
okay so we

00:10:31 --> 00:10:36
decided let's make a machine version of

00:10:34 --> 00:10:37
this that we called paleo Deep dive

00:10:35 --> 00:10:39
we'll put a single graduate student on

00:10:36 --> 00:10:41
it what could possibly go wrong so we

00:10:39 --> 00:10:43
put this one graduate student who's

00:10:40 --> 00:10:45
phenomenal soang who did this and he

00:10:42 --> 00:10:46
decided he was going to build a system

00:10:44 --> 00:10:48
now I'm going to skip the two years of

00:10:45 --> 00:10:49
him crying tears of blood to get the

00:10:47 --> 00:10:51
thing to work but after that it turned

00:10:48 --> 00:10:54
on it was great from my perspective it

00:10:50 --> 00:10:56
was you know like two minutes so we turn

00:10:53 --> 00:10:58
the machine on and we read about 10

00:10:55 --> 00:10:59
times more documents now why do we read

00:10:57 --> 00:11:00
10 times more documents it's a machine

00:10:58 --> 00:11:02
it doesn't get tired pipe in as many

00:11:00 --> 00:11:05
bits as possible the thing runs in now

00:11:01 --> 00:11:06
under an hour We're Not constrained by

00:11:04 --> 00:11:09
the amount of data that we're reading

00:11:05 --> 00:11:11
okay you may ask why only a factor of 10

00:11:08 --> 00:11:13
why not a factor of 100 and the usual

00:11:10 --> 00:11:15
glib summary I give is that Publishers

00:11:12 --> 00:11:17
are criminals I've sort of softened my

00:11:14 --> 00:11:19
stance uh we can't get access to the

00:11:16 --> 00:11:21
data because Publishers have said yes to

00:11:18 --> 00:11:23
us but we can't legally get access to

00:11:20 --> 00:11:25
about another order of magnitude of data

00:11:22 --> 00:11:27
okay so there's more data out there to

00:11:24 --> 00:11:29
read it's not a technological barrier

00:11:26 --> 00:11:32
even when in that 10x more data there's

00:11:28 --> 00:11:34
100 fold more data that we could extract

00:11:31 --> 00:11:36
from that these are what we call

00:11:33 --> 00:11:38
subjective tonic opinions this is I look

00:11:35 --> 00:11:40
at a fossil where does it belong in the

00:11:37 --> 00:11:42
Tree of Life relatively boring data but

00:11:39 --> 00:11:43
it's something that is littered

00:11:41 --> 00:11:45
throughout these reports and throughout

00:11:42 --> 00:11:47
hese papers and what we see here is the

00:11:44 --> 00:11:49
first reason why I would argue that you

00:11:46 --> 00:11:51
don't want people doing these extraction

00:11:48 --> 00:11:53
tasks we get about an order of magnitude

00:11:50 --> 00:11:55
more data that's data in the same papers

00:11:52 --> 00:11:57
that they were reading basically they

00:11:54 --> 00:11:59
just weren't extracting it they were you

00:11:56 --> 00:12:01
know distracted they didn't want to do

00:11:58 --> 00:12:03
it it was a painful task they check the

00:12:00 --> 00:12:05
document and say that it's marked off

00:12:02 --> 00:12:07
and it's sort of lost to the ages some

00:12:04 --> 00:12:09
fraction of that

00:12:06 --> 00:12:11
information now the second thing to look

00:12:08 --> 00:12:13
at is when we extract a piece of

00:12:10 --> 00:12:15
information how accurate is it and the

00:12:12 --> 00:12:16
first question to really ask is how

00:12:14 --> 00:12:18
accurate is a person so we looked at

00:12:15 --> 00:12:20
his one task where someone reads

00:12:17 --> 00:12:23
particularly an a location and they try

00:12:19 --> 00:12:25
and match the rock formation or location

00:12:22 --> 00:12:26
to the the real canonical name so they

00:12:24 --> 00:12:28
read they read the article and they

00:12:25 --> 00:12:30
actually have to put in the correct real

00:12:27 --> 00:12:32
world name of a of a location how often

00:12:29 --> 00:12:34
does a volunteer get that right and we

00:12:31 --> 00:12:36
assessed this we found that the paleodb

00:12:33 --> 00:12:38
volunteers were accurate about 84% of

00:12:35 --> 00:12:41
the time so what are they making

00:12:37 --> 00:12:43
mistakes on in that 16% a rough summary

00:12:40 --> 00:12:44
is the following when they read the

00:12:42 --> 00:12:46
paper they have some background

00:12:44 --> 00:12:49
knowledge these for rock formations

00:12:45 --> 00:12:50
change names over time I read someck

00:12:48 --> 00:12:52
formation I say oh my gosh it's called

00:12:49 --> 00:12:53
by a new name I should call it by the

00:12:51 --> 00:12:56
new name not the old name that's written

00:12:52 --> 00:12:57
in the text when they're right this is

00:12:55 --> 00:12:59
good data you know they've improved the

00:12:57 --> 00:13:01
quality of your data it's it's up to

00:12:58 --> 00:13:03
date when they're wrong it's kind of

00:13:00 --> 00:13:05
catastrophic because you can't possibly

00:13:02 --> 00:13:07
rerun the human computation the two

00:13:04 --> 00:13:10
decades long computation to make sure

00:13:06 --> 00:13:11
that that thing is fixed up even when

00:13:09 --> 00:13:13
they're right it's not great and the

00:13:10 --> 00:13:15
reason it's not great is that it's not

00:13:12 --> 00:13:17
done systematically one annotator is

00:13:14 --> 00:13:19
doing it but another annotator is not

00:13:16 --> 00:13:20
and so your data is kind of a mishmash

00:13:18 --> 00:13:23
of different conventions of how to

00:13:19 --> 00:13:26
populate this data

00:13:22 --> 00:13:27
now our machine in contrast is a

00:13:25 --> 00:13:28
function of a small number of rules it's

00:13:26 --> 00:13:30
tatistical but it's really only a

00:13:27 --> 00:13:31
function of a small number of rules and

00:13:29 --> 00:13:33
training data and so it can be trained

00:13:30 --> 00:13:35
by experts to be closer to what they

00:13:32 --> 00:13:37
want to see than the volunteers and so

00:13:34 --> 00:13:39
not surprisingly our quality is actually

00:13:36 --> 00:13:41
higher on this predicate that is doing

00:13:38 --> 00:13:43
this formation extraction than people

00:13:40 --> 00:13:44
now in both of these cases we've picked

00:13:42 --> 00:13:46
things where we're better than our

00:13:43 --> 00:13:47
competitors better than the human

00:13:45 --> 00:13:49
competitors and we compared across all

00:13:46 --> 00:13:50
the predicates in some predicates it's

00:13:48 --> 00:13:52
basically a wash there's information

00:13:49 --> 00:13:54
that humans and machines are equally

00:13:51 --> 00:13:56
good at but we're never any worse and in

00:13:53 --> 00:13:59
some cases we're substantially

00:13:55 --> 00:14:00
better so our hope when we saw this was

00:13:58 --> 00:14:01
that we could actually extend this

00:13:59 --> 00:14:03
throughout all of different kinds of

00:14:00 --> 00:14:04
Sciences so we not only doing the tree

00:14:02 --> 00:14:06
of life but things in drug repurposing

00:14:03 --> 00:14:07
and genomics we've actually used this

00:14:05 --> 00:14:09
inside a couple of companies which I'm

00:14:06 --> 00:14:12
happy to talk about offline and we even

00:14:08 --> 00:14:14
won one of the uh major NLP competitions

00:14:11 --> 00:14:18
using this approach last year with Chris

00:14:13 --> 00:14:20
Manning's group okay now one thing that

00:14:17 --> 00:14:21
you may have seen here was that actually

00:14:19 --> 00:14:23
there's a database and we're basically

00:14:20 --> 00:14:26
adding tles to it and one thing that

00:14:22 --> 00:14:27
I'll skip over a little bit quickly is

00:14:25 --> 00:14:29
that there are situations that we can

00:14:26 --> 00:14:31
use this information in which there's no

00:14:28 --> 00:14:33
datab and one thing we've been working

00:14:30 --> 00:14:35
on a lot is this human trafficking

00:14:32 --> 00:14:37
application with DARPA and basically the

00:14:34 --> 00:14:39
idea is to go out and read a bunch of

00:14:36 --> 00:14:41
web text that is about people being

00:14:38 --> 00:14:43
advertised sexual Services being

00:14:40 --> 00:14:45
advertised to try and identify who's

00:14:42 --> 00:14:47
trafficked or not okay now it turns out

00:14:44 --> 00:14:48
o do this that basically what we're

00:14:46 --> 00:14:50
doing is building like the world's best

00:14:48 --> 00:14:52
prostitution pricing model which is a

00:14:49 --> 00:14:54
little bit weird but that's what we're

00:14:51 --> 00:14:56
doing to try and identify who is

00:14:53 --> 00:14:57
potentially trafficked and one bit about

00:14:55 --> 00:14:59
hat that's quite interesting is not

00:14:56 --> 00:15:00
only can we do this with high quality

00:14:58 --> 00:15:02
but there actually taking counter

00:14:59 --> 00:15:04
measures against us over time as it

00:15:01 --> 00:15:06
urns out we actually start to make some

00:15:03 --> 00:15:09
real arrest in this domain okay so I'll

00:15:06 --> 00:15:10
skip over the details of the application

00:15:08 --> 00:15:12
um but I will say that it's actually an

00:15:09 --> 00:15:14
active use and we can actually get high

00:15:11 --> 00:15:16
Precision values and we're in extending

00:15:13 --> 00:15:18
uh Pilots to more law enforcement

00:15:15 --> 00:15:20
agencies over the next couple months

00:15:17 --> 00:15:22
okay now the last thing that I wanted to

00:15:19 --> 00:15:24
talk about was basically the trends that

00:15:21 --> 00:15:27
are coming up that make us build the

00:15:23 --> 00:15:28
ngine the way we have built this engine

00:15:26 --> 00:15:30
and we as I mentioned we're getting rid

00:15:27 --> 00:15:31
of algorithms we will choose the

00:15:29 --> 00:15:33
algorithm for you and our trick is we're

00:15:30 --> 00:15:34
going to choose the dumbest algorithm I

00:15:32 --> 00:15:36
can imagine which is Gib sampling and

00:15:33 --> 00:15:39
we're just going to run it as blazingly

00:15:35 --> 00:15:42
fast as we can okay so to do that we

00:15:38 --> 00:15:43
need a really really fast uh we really

00:15:41 --> 00:15:45
fast engine and it turns out that

00:15:42 --> 00:15:48
Modern Hardware has one particular

00:15:44 --> 00:15:49
feature that's really helpful to us and

00:15:47 --> 00:15:52
that feature is massive amounts of fine

00:15:48 --> 00:15:54
grain parallelism simd parallelism

00:15:51 --> 00:15:56
ulticore parallelism Numa those are all

00:15:53 --> 00:15:58
things we need to take advantage of to

00:15:55 --> 00:16:00
go in some cases orders of magnitude

00:15:57 --> 00:16:03
faster than competitor systems on these

00:15:59 --> 00:16:05
tasks okay now one thing I want to

00:16:02 --> 00:16:06
highlight here is that when we build

00:16:04 --> 00:16:08
these systems it's really a systems

00:16:05 --> 00:16:10
problem it's a computer science systems

00:16:07 --> 00:16:12
problem we're always balancing two

00:16:09 --> 00:16:14
factors that are in sort of fighting

00:16:11 --> 00:16:15
with each other and those two factors

00:16:13 --> 00:16:17
here are what we call statistical

00:16:14 --> 00:16:19
efficiency and Hardware efficiency so

00:16:16 --> 00:16:21
statistical efficiency is basically the

00:16:18 --> 00:16:23
number of steps the algorithm is going

00:16:20 --> 00:16:24
to take until it converges this is what

00:16:22 --> 00:16:26
optimization and machine learning people

00:16:23 --> 00:16:28
have been working on for quite a while

00:16:26 --> 00:16:30
on the other side of the coin is

00:16:27 --> 00:16:31
Hardware efficiency this is basically

00:16:29 --> 00:16:33
those Primitives that the hardware

00:16:30 --> 00:16:34
xposes that in some cases can be orders

00:16:32 --> 00:16:37
of magnitude more efficient than the

00:16:33 --> 00:16:40
conventional you know one step at a time

00:16:36 --> 00:16:41
kinds of operations okay so we studied

00:16:39 --> 00:16:42
this and it turns out that various

00:16:40 --> 00:16:44
models are in different parts in this

00:16:41 --> 00:16:46
tradeoff but I want to illustrate for

00:16:43 --> 00:16:48
you why these trade-off space is

00:16:45 --> 00:16:49
entirely different that is why it's a

00:16:47 --> 00:16:52
new trade-off space and classical

00:16:48 --> 00:16:53
trade-off space uh don't sort of suffice

00:16:51 --> 00:16:55
and to do that I'm going to show you one

00:16:52 --> 00:16:57
result which just illustrates that

00:16:54 --> 00:17:00
classical models of uh sequential uh

00:16:56 --> 00:17:02
evaluation you can completely throw way

00:16:59 --> 00:17:04
okay so the crash course in machine

00:17:01 --> 00:17:06
learning for this slide is the following

00:17:03 --> 00:17:08
uh we're going to look at these problems

00:17:05 --> 00:17:11
where we're trying to find some X we're

00:17:07 --> 00:17:12
going to minimize X subject to Yi which

00:17:10 --> 00:17:14
are a bunch of data and we're going to

00:17:11 --> 00:17:15
try and minimize a loss function and

00:17:13 --> 00:17:17
we're going to have billions of these

00:17:14 --> 00:17:18
terms in this sum and this captures

00:17:16 --> 00:17:20
things like deep learning and

00:17:17 --> 00:17:23
classification and recommendation these

00:17:19 --> 00:17:25
are linearly separable problems okay now

00:17:22 --> 00:17:26
it turns out to solve these problems

00:17:24 --> 00:17:28
there's actually an emerging theory

00:17:25 --> 00:17:30
about why this is true but people

00:17:27 --> 00:17:32
basically use one simp very very stupid

00:17:29 --> 00:17:35
algorithm called stochastic gradient

00:17:31 --> 00:17:37
descent okay and the way SGD works is a

00:17:34 --> 00:17:40
very simple idea you have an estimate at

00:17:36 --> 00:17:42
some time XK you could grab one term

00:17:39 --> 00:17:43
from the sum you take a gradient you

00:17:41 --> 00:17:45
compute the direction that's going to

00:17:42 --> 00:17:46
minimize you the opposite of the

00:17:44 --> 00:17:47
direction of the gradient and you update

00:17:45 --> 00:17:49
it and all that's important for us is

00:17:46 --> 00:17:51
you're just going to update this many

00:17:48 --> 00:17:53
many many times and have billions

00:17:50 --> 00:17:54
of these tiny little iterations and so

00:17:52 --> 00:17:56
from A System's perspective if you're

00:17:53 --> 00:17:57
thinking about what the hardware sees

00:17:55 --> 00:18:00
it's seeing billions of these tiny tiny

00:17:56 --> 00:18:02
little iterations okay now why that's

00:17:59 --> 00:18:03
important as I Illustrated as I talked

00:18:01 --> 00:18:05
about before is that Modern Hardware

00:18:02 --> 00:18:07
hasn't been getting straight line fast

00:18:04 --> 00:18:09
for a while it's just been giving us

00:18:06 --> 00:18:12
wider and wider processing units more

00:18:08 --> 00:18:13
parallelism in fine grain ways and the

00:18:11 --> 00:18:16
problem is this seems like a very

00:18:12 --> 00:18:18
natively sequential algorithm you read

00:18:15 --> 00:18:20
an X you update a few components and you

00:18:17 --> 00:18:21
write it back it seems like it's got to

00:18:19 --> 00:18:23
be natively sequential it doesn't seem

00:18:20 --> 00:18:25
like it's going to be possible to really

00:18:22 --> 00:18:28
exploit parallelism for

00:18:24 --> 00:18:31
it so what we decided to do to do this

00:18:27 --> 00:18:32
was a a kind of a stupid idea but it

00:18:30 --> 00:18:34
actually worked quite well so if you

00:18:31 --> 00:18:35
know how processors work they

00:18:33 --> 00:18:37
communicate with each other by locks

00:18:34 --> 00:18:38
they take a lock and say it's my turn to

00:18:36 --> 00:18:40
write the value it's my turn to read the

00:18:37 --> 00:18:42
value and they go through a locking

00:18:39 --> 00:18:44
protocol what we decided to do for these

00:18:41 --> 00:18:46
statistical algorithms was essentially

00:18:43 --> 00:18:48
throw away all the Locking just comment

00:18:45 --> 00:18:49
hem out entirely this is a technique

00:18:47 --> 00:18:50
that we called Hog Wild which has an

00:18:48 --> 00:18:53
exclamation point and will be important

00:18:49 --> 00:18:55
in a slide or two and basically you just

00:18:52 --> 00:18:56
oss away the locks right now we did

00:18:54 --> 00:18:58
slightly more than toss away the locks

00:18:55 --> 00:19:00
we've proved an embarrassing number of

00:18:57 --> 00:19:02
theorems that say under what conditions

00:18:59 --> 00:19:04
on sparity and what ways of getting

00:19:01 --> 00:19:06
Paralis simd Paralis you know we're able

00:19:03 --> 00:19:08
to actually do this and get linear

00:19:05 --> 00:19:10
speedups but we're able to basically

00:19:07 --> 00:19:12
prove situations under which throwing

00:19:09 --> 00:19:13
away the Locking actually doesn't damage

00:19:11 --> 00:19:15
the statistical efficiency of the

00:19:12 --> 00:19:17
algorithm and as a result we can take

00:19:14 --> 00:19:19
advantage of all that Hardware goodness

00:19:16 --> 00:19:20
that's underneath the covers okay now I

00:19:18 --> 00:19:22
have to share one thing with you because

00:19:19 --> 00:19:23
this is the height of my academic

00:19:21 --> 00:19:25
achievement and you'll see that it has

00:19:22 --> 00:19:28
to do with the exclamation point so this

00:19:25 --> 00:19:29
a project adom uh slide so if you

00:19:27 --> 00:19:32
haven't paid attention to deep learning

00:19:28 --> 00:19:34
recently uh the world goes like this

00:19:31 --> 00:19:36
Google recognizes cats Microsoft

00:19:33 --> 00:19:38
recognizes dogs AI overlords take over

00:19:35 --> 00:19:40
the universe so I think that's the

00:19:37 --> 00:19:42
clear succession anyway so a

00:19:39 --> 00:19:44
while ago last year Microsoft released

00:19:41 --> 00:19:45
their project Adam and they had a great

00:19:43 --> 00:19:47
demo where they were showing they were

00:19:44 --> 00:19:48
leasing you know recognizing Shih Tzus

00:19:46 --> 00:19:50
with Windows phones uh using deep

00:19:48 --> 00:19:52
learning and the reason I will love

00:19:49 --> 00:19:54
Microsoft forever is the following quote

00:19:51 --> 00:19:55
that appeared in Wired Magazine they

00:19:53 --> 00:19:58
claimed that they were using a

00:19:54 --> 00:20:00
technology called of all things Hog Wild

00:19:57 --> 00:20:01
now two things about this made me very

00:19:59 --> 00:20:03
happy the first is they got the

00:20:00 --> 00:20:05
xclamation point correct so I was

00:20:02 --> 00:20:08
really really happy my troll heart was

00:20:04 --> 00:20:10
filled and the second thing was they

00:20:07 --> 00:20:12
said the author said of all things like

00:20:09 --> 00:20:14
she was genuinely like thought it was

00:20:11 --> 00:20:16
insane that a billion dollar Corporation

00:20:13 --> 00:20:18
would base something as stupid on the

00:20:15 --> 00:20:20
name Hog Wild so I was I was really

00:20:17 --> 00:20:22
happy I I hit all my buttons okay anyway

00:20:19 --> 00:20:24
but being serious the reason I show this

00:20:21 --> 00:20:26
particular result is that this idea that

00:20:23 --> 00:20:28
we can relax consistency in

00:20:25 --> 00:20:29
fundamentally new ways to run these

00:20:27 --> 00:20:31
statistical algorithms to take advantage

00:20:29 --> 00:20:33
of Hardware is sort of just in its

00:20:30 --> 00:20:35
infancy we've basically done a couple of

00:20:32 --> 00:20:37
parlor tricks and those parlor tricks

00:20:34 --> 00:20:39
have allowed us to get you know 10 100 a

00:20:36 --> 00:20:40
thousand times faster than competitor

00:20:38 --> 00:20:41
systems because we're actually taking

00:20:39 --> 00:20:43
advantage of what the hardware is giving

00:20:40 --> 00:20:45
us but there's a lot more to do here and

00:20:43 --> 00:20:47
there's a bunch of great work that's

00:20:44 --> 00:20:50
going on with people using these ideas

00:20:46 --> 00:20:52
uh and More in different settings okay

00:20:49 --> 00:20:54
so to conclude I basically just told you

00:20:51 --> 00:20:55
two things one is that these dark Data

00:20:53 --> 00:20:57
Systems these knowledge bases help with

00:20:54 --> 00:20:59
what we call macroscopic questions we're

00:20:56 --> 00:21:01
ally interested in this idea of going

00:20:58 --> 00:21:03
Beyond just look doing fact lookup

00:21:00 --> 00:21:04
queries to basically integrating all the

00:21:02 --> 00:21:06
information that's available about a

00:21:03 --> 00:21:08
particular topic putting that in one

00:21:05 --> 00:21:10
place and then answering questions on

00:21:07 --> 00:21:12
top of it the other thing that I

00:21:09 --> 00:21:13
llustrated for you was that to be able

00:21:11 --> 00:21:15
to build this system we needed to build

00:21:13 --> 00:21:17
scalable inference engines and to do

00:21:14 --> 00:21:19
that we had to be able to relax

00:21:16 --> 00:21:21
consistency and that is one technique

00:21:18 --> 00:21:23
but it's one that we think keeps coming

00:21:20 --> 00:21:25
back and may come back in other forms

00:21:22 --> 00:21:27
for Energy Efficiency for performance

00:21:24 --> 00:21:28
and so on thank you so much for your

00:21:26 --> 00:21:32
time

00:21:27 --> 00:21:32
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
