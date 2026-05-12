---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "SGzMElJ11Cc"
title: "Yann LeCun: Dark Matter of Intelligence and Self-Supervised Learning | Lex Fridman Podcast #258"
video_url: "https://www.youtube.com/watch?v=SGzMElJ11Cc"
thumbnail_url: "https://i.ytimg.com/vi/SGzMElJ11Cc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=SGzMElJ11Cc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2022-01-22T20:09:07.000Z"
upload_date: "2022-01-22"
duration_seconds: 9910
duration_human: "2:45:10"
view_count: 573650
like_count: 7400
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T13:43:50.496Z"
---

# Yann LeCun: Dark Matter of Intelligence and Self-Supervised Learning | Lex Fridman Podcast #258

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=SGzMElJ11Cc
- video_id: SGzMElJ11Cc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2022-01-22T20:09:07.000Z
- upload_date: 2022-01-22
- duration: 2:45:10
- view_count: 573650
- like_count: 7400
- has_subtitle: true
- language: en
- availability: public
- tags: agi, ai, ai podcast, artificial intelligence, artificial intelligence podcast, facebook, lex ai, lex fridman, lex jre, lex mit, lex podcast, machine learning, meta, mit ai, neural network, nyu, reinforcement learning, self supervised learning, yann lecun
- categories: Science & Technology

## Description

Yann LeCun is the Chief AI Scientist at Meta, professor at NYU, Turing Award winner, and one of the seminal researchers in the history of machine learning. Please support this podcast by checking out our sponsors:
- Public Goods: https://publicgoods.com/lex and use code LEX to get $15 off
- Indeed: https://indeed.com/lex to get $75 credit
- ROKA: https://roka.com/ and use code LEX to get 20% off your first order
- NetSuite: http://netsuite.com/lex to get free product tour
- Magic Spoon: https://magicspoon.com/lex and use code LEX to get $5 off

EPISODE LINKS:
Yann's Twitter: https://twitter.com/ylecun
Yann's Facebook: https://www.facebook.com/yann.lecun
Yann's Website: http://yann.lecun.com/
Books and resources mentioned:
Self-supervised learning (article): https://bit.ly/3Aau1DQ

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
0:36 - Self-supervised learning
10:55 - Vision vs language
16:46 - Statistics
22:33 - Three challenges of machine learning
28:22 - Chess
36:25 - Animals and intelligence
46:09 - Data augmentation
1:07:29 - Multimodal learning
1:19:18 - Consciousness
1:24:03 - Intrinsic vs learned ideas
1:28:15 - Fear of death
1:36:07 - Artificial Intelligence
1:49:56 - Facebook AI Research
2:06:34 - NeurIPS
2:22:46 - Complexity
2:31:11 - Music
2:36:06 - Advice for young people

SOCIAL:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Reddit: https://reddit.com/r/lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
the following is a conversation with

00:00:01 --> 00:00:07
john le his second time in the

00:00:03 --> 00:00:12
podcast he is the chief ai scientist at

00:00:06 --> 00:00:14
meta formerly facebook professor at nyu

00:00:11 --> 00:00:16
touring award winner one of the seminal

00:00:13 --> 00:00:19
figures in the history of machine

00:00:16 --> 00:00:21
learning and artificial intelligence

00:00:18 --> 00:00:24
and someone who is brilliant and

00:00:20 --> 00:00:26
opinionated in the best kind of way and

00:00:23 --> 00:00:28
so is always fun to talk to

00:00:25 --> 00:00:30
this is a lex friedman podcast to

00:00:28 --> 00:00:33
support it please check out our sponsors

00:00:29 --> 00:00:36
in the description and now here's my

00:00:32 --> 00:00:39
conversation with yon lacoon

00:00:36 --> 00:00:41
you co-wrote the article self-supervised

00:00:38 --> 00:00:44
learning the dark matter of intelligence

00:00:40 --> 00:00:46
great title by the way with ishan mizrah

00:00:43 --> 00:00:49
so let me ask what is self-supervised

00:00:45 --> 00:00:50
learning and why is it the dark matter

00:00:48 --> 00:00:53
of intelligence

00:00:49 --> 00:00:54
i'll start by the dark matter part

00:00:52 --> 00:00:56
uh

00:00:53 --> 00:01:00
there is obviously a kind of learning

00:00:55 --> 00:01:02
that humans and animals are

00:00:59 --> 00:01:04
doing that we currently are not

00:01:01 --> 00:01:07
reproducing properly with machines with

00:01:03 --> 00:01:09
ai right so the most popular approaches

00:01:06 --> 00:01:11
to machine learning today are

00:01:08 --> 00:01:13
or paradigms i should say are supervised

00:01:10 --> 00:01:16
running and reinforcement learning

00:01:12 --> 00:01:17
and they are extremely inefficient

00:01:15 --> 00:01:20
supervised learning requires many

00:01:16 --> 00:01:22
samples for learning anything

00:01:19 --> 00:01:24
and reinforcement learning requires a

00:01:21 --> 00:01:26
ridiculously large number of

00:01:23 --> 00:01:29
trials and errors to for you know a

00:01:26 --> 00:01:29
system to run anything

00:01:29 --> 00:01:33
and that's why we don't have

00:01:30 --> 00:01:35
self-driving cars

00:01:32 --> 00:01:39
that's a big leap from one to the other

00:01:34 --> 00:01:42
okay so that to solve difficult problems

00:01:38 --> 00:01:44
you have to have a lot of uh human

00:01:41 --> 00:01:46
notation for supervised learning to

00:01:43 --> 00:01:47
work and to solve those difficult

00:01:45 --> 00:01:48
problems with reinforcement learning you

00:01:46 --> 00:01:51
have to have

00:01:47 --> 00:01:52
some way to maybe simulate that problem

00:01:50 --> 00:01:54
such that you can do that large scale

00:01:51 --> 00:01:56
kind of learning that reinforcement

00:01:53 --> 00:01:59
learning requires right so how is it

00:01:55 --> 00:02:01
hat you know most teenagers can learn

00:01:58 --> 00:02:03
to drive a car in about 20 hours of

00:02:00 --> 00:02:05
practice

00:02:02 --> 00:02:06
whereas uh even with millions of hours

00:02:04 --> 00:02:09
of

00:02:05 --> 00:02:10
simulated practice a self-driving car

00:02:08 --> 00:02:12
can't actually learn to drive itself

00:02:10 --> 00:02:14
properly

00:02:11 --> 00:02:15
um and so obviously we're missing

00:02:13 --> 00:02:17
something right and it's quite obvious

00:02:14 --> 00:02:18
for a lot of people that

00:02:16 --> 00:02:19
you know the immediate response you get

00:02:17 --> 00:02:21
from

00:02:18 --> 00:02:23
any people is well you know humans use

00:02:20 --> 00:02:26
their background knowledge

00:02:22 --> 00:02:28
to learn faster and they're right

00:02:25 --> 00:02:30
now how was that background knowledge

00:02:27 --> 00:02:32
acquired and that's the big question

00:02:30 --> 00:02:34
so now you have to ask

00:02:32 --> 00:02:36
you know how do

00:02:33 --> 00:02:37
babies in the first few months of life

00:02:35 --> 00:02:39
learn how the world works

00:02:36 --> 00:02:42
mostly by observation because they can

00:02:38 --> 00:02:43
hardly act in the world

00:02:41 --> 00:02:44
and they learn an enormous amount of

00:02:42 --> 00:02:46
background knowledge about the world

00:02:43 --> 00:02:48
that may be the

00:02:45 --> 00:02:50
basis of what we call common sense

00:02:48 --> 00:02:53
this type of learning

00:02:49 --> 00:02:55
it's not learning a task it's not

00:02:52 --> 00:02:57
being reinforced for anything it's just

00:02:54 --> 00:02:59
observing the world and figuring out how

00:02:56 --> 00:03:00
it works

00:02:58 --> 00:03:02
building world models learning world

00:03:00 --> 00:03:04
models

00:03:01 --> 00:03:05
how do we do this and how do we

00:03:03 --> 00:03:07
reproduce this in in machines so cell

00:03:04 --> 00:03:08
supervision learning

00:03:06 --> 00:03:09
is

00:03:07 --> 00:03:11
you know one

00:03:08 --> 00:03:13
instance or one attempt at trying to

00:03:10 --> 00:03:15
reproduce this kind of learning

00:03:12 --> 00:03:17
okay so

00:03:14 --> 00:03:19
you're looking at just observation so

00:03:16 --> 00:03:21
not even the interacting part of a child

00:03:18 --> 00:03:23
it's just sitting there watching mom and

00:03:20 --> 00:03:25
ad walk around pick up stuff

00:03:22 --> 00:03:27
all of that that's the that's what you

00:03:24 --> 00:03:29
mean by background knowledge perhaps not

00:03:26 --> 00:03:30
even watching mom and dad just you know

00:03:28 --> 00:03:32
atching the world go by

00:03:29 --> 00:03:34
just having eyes open or having eyes

00:03:31 --> 00:03:35
closed or the very act of opening and

00:03:33 --> 00:03:37
closing eyes

00:03:34 --> 00:03:39
that the world appears and disappears

00:03:36 --> 00:03:42
all that basic information

00:03:38 --> 00:03:43
and you're saying in in order to learn

00:03:41 --> 00:03:45
to drive

00:03:42 --> 00:03:48
like the reason humans are able to learn

00:03:44 --> 00:03:49
to drive quickly some faster than others

00:03:47 --> 00:03:51
is because of the background knowledge

00:03:48 --> 00:03:52
they were able to watch cars operate in

00:03:50 --> 00:03:54
the world

00:03:51 --> 00:03:56
in the many years leading up to it the

00:03:53 --> 00:03:57
physics of basics objects all that kind

00:03:55 --> 00:03:59
of stuff that's right i mean the basic

00:03:56 --> 00:04:00
physics of objects you don't even know

00:03:58 --> 00:04:02
you don't even need to know you know how

00:03:59 --> 00:04:03
a car works right because that you can

00:04:01 --> 00:04:05
learn fairly quickly i mean the example

00:04:02 --> 00:04:07
i use very often is uh you're driving

00:04:04 --> 00:04:10
next to a cliff

00:04:06 --> 00:04:12
and you know in advance because of your

00:04:09 --> 00:04:14
you know understanding of intuitive

00:04:11 --> 00:04:15
physics that if you turn the wheel to

00:04:13 --> 00:04:17
the right the car will veer to the right

00:04:14 --> 00:04:19
we'll run off the cliff

00:04:16 --> 00:04:20
all off the cliff and nothing good will

00:04:18 --> 00:04:23
come out of this right

00:04:19 --> 00:04:25
um but if you are a sort of

00:04:22 --> 00:04:26
you know tabularized reinforcement

00:04:24 --> 00:04:29
learning system that doesn't have a

00:04:25 --> 00:04:30
model of the world

00:04:28 --> 00:04:32
you have to repeat falling off this

00:04:29 --> 00:04:34
cliff thousands of times before you

00:04:31 --> 00:04:35
figure out it's a bad idea and then a

00:04:33 --> 00:04:38
few more thousand times before you

00:04:34 --> 00:04:39
figure out how to not do it and then a

00:04:37 --> 00:04:41
few more million times before you figure

00:04:38 --> 00:04:43
out how to not do it in every situation

00:04:40 --> 00:04:45
you ever encounter

00:04:42 --> 00:04:46
so self-supervised learning still has to

00:04:44 --> 00:04:48
have

00:04:45 --> 00:04:51
some source of truth

00:04:47 --> 00:04:53
being told to it by somebody and is so

00:04:50 --> 00:04:54
you have to figure out a way without

00:04:52 --> 00:04:56
human

00:04:53 --> 00:04:58
assistance or without significant amount

00:04:55 --> 00:05:00
of human assistance to get that truth

00:04:57 --> 00:05:02
from the world

00:04:59 --> 00:05:05
so the mystery there is um

00:05:02 --> 00:05:07
how much signal is there how much truth

00:05:04 --> 00:05:08
is there that the world gives you

00:05:06 --> 00:05:10
whether it's the human world

00:05:08 --> 00:05:13
like you watch youtube or something like

00:05:09 --> 00:05:15
that or it's the more natural world

00:05:12 --> 00:05:18
so how much signal is there

00:05:14 --> 00:05:19
so here's the trick there is way more

00:05:17 --> 00:05:21
signal

00:05:18 --> 00:05:23
in sort of a self-supervised setting

00:05:20 --> 00:05:25
than there is in either a supervised or

00:05:22 --> 00:05:28
einforcement setting

00:05:24 --> 00:05:30
and this is going to my you know analogy

00:05:27 --> 00:05:32
of the cake

00:05:29 --> 00:05:34
the you know low cake as someone has

00:05:31 --> 00:05:35
called it where

00:05:33 --> 00:05:38
when you try to figure out how much

00:05:34 --> 00:05:39
information you ask the machine to

00:05:37 --> 00:05:41
predict and how much feedback you give

00:05:38 --> 00:05:43
the machine at every trial

00:05:40 --> 00:05:44
in reinforcement learning you give the

00:05:42 --> 00:05:46
machine a single scaler you tell the

00:05:43 --> 00:05:48
machine you did good you did bad and you

00:05:45 --> 00:05:50
and you only

00:05:47 --> 00:05:51
tell this to the machine once in a while

00:05:49 --> 00:05:54
when i say you it could be the the

00:05:50 --> 00:05:57
universe telling the machine right

00:05:53 --> 00:05:58
but it's just one scalar so as a

00:05:56 --> 00:05:59
consequence there is you you cannot

00:05:57 --> 00:06:01
possibly learn something very

00:05:58 --> 00:06:04
complicated without many many many

00:06:00 --> 00:06:05
trials where you get many many feedbacks

00:06:03 --> 00:06:08
of this type

00:06:04 --> 00:06:09
supervision you you give a few bits to

00:06:07 --> 00:06:12
the machine

00:06:08 --> 00:06:14
at every every sample

00:06:11 --> 00:06:16
t's say you're training a

00:06:13 --> 00:06:18
system on you know recognizing images on

00:06:15 --> 00:06:20
imagenet there is 1000 categories that a

00:06:17 --> 00:06:22
little less than 10 bits of information

00:06:20 --> 00:06:24
per sample

00:06:21 --> 00:06:25
but star supervisory here is a setting

00:06:23 --> 00:06:27
you

00:06:24 --> 00:06:29
ideally we don't know how to do this yet

00:06:26 --> 00:06:31
but ideally you would

00:06:28 --> 00:06:33
show a machine a segment of

00:06:30 --> 00:06:35
a video and then stop the video and ask

00:06:32 --> 00:06:38
me ask the machine to predict what's

00:06:34 --> 00:06:38
going to happen next

00:06:37 --> 00:06:41
so you let the machine predict and then

00:06:39 --> 00:06:44
you let time

00:06:40 --> 00:06:46
go by and show the machine what actually

00:06:43 --> 00:06:48
happened and hope the machine will you

00:06:45 --> 00:06:50
know learn to do a better job at

00:06:47 --> 00:06:52
predicting next time around there's a

00:06:49 --> 00:06:54
huge amount of information you give the

00:06:51 --> 00:06:55
machine because it's an entire video

00:06:53 --> 00:06:58
clip

00:06:54 --> 00:07:00
of uh you know of the future after the

00:06:57 --> 00:07:02
video clip you fed it

00:06:59 --> 00:07:03
in the first place so both for language

00:07:01 --> 00:07:05
and for vision

00:07:02 --> 00:07:07
there's a

00:07:04 --> 00:07:09
subtle seemingly trivial construction

00:07:06 --> 00:07:11
but maybe that's representative of what

00:07:08 --> 00:07:12
is required to create intelligence which

00:07:10 --> 00:07:14
is

00:07:11 --> 00:07:15
filling the gap

00:07:13 --> 00:07:17
so in the

00:07:14 --> 00:07:19
gaps it

00:07:16 --> 00:07:20
sounds dumb but can you

00:07:18 --> 00:07:22
it's

00:07:19 --> 00:07:24
it is possible you can solve all of

00:07:21 --> 00:07:26
intelligence in this way just for both

00:07:23 --> 00:07:27
language

00:07:25 --> 00:07:28
just

00:07:26 --> 00:07:30
give a sentence

00:07:27 --> 00:07:32
and continue it or give a sentence and

00:07:29 --> 00:07:34
there's a gap in it uh

00:07:32 --> 00:07:36
some words blanked out and you fill in

00:07:34 --> 00:07:37
what words go there

00:07:35 --> 00:07:40
for vision

00:07:36 --> 00:07:41
you give a sequence of images

00:07:39 --> 00:07:44
and predict what's going to happen next

00:07:40 --> 00:07:46
or you fill in what happened in between

00:07:43 --> 00:07:49
do you think it's possible that

00:07:45 --> 00:07:51
formulation alone

00:07:48 --> 00:07:53
as a signal for self-supervised learning

00:07:50 --> 00:07:55
can solve intelligence for vision and

00:07:52 --> 00:07:59
language i think that's our best shot at

00:07:54 --> 00:08:01
he moment um so whether this will take

00:07:58 --> 00:08:03
us all the way to you know human level

00:08:00 --> 00:08:04
intelligence or something or just cat

00:08:02 --> 00:08:06
level intelligence

00:08:03 --> 00:08:08
uh it's not clear but

00:08:05 --> 00:08:09
among all the possible approaches that

00:08:07 --> 00:08:11
people have proposed i think is our best

00:08:08 --> 00:08:14
shot so

00:08:10 --> 00:08:16
i think this idea of uh

00:08:13 --> 00:08:18
an intelligent system filling in the

00:08:15 --> 00:08:20
blanks either

00:08:17 --> 00:08:21
you know predicting the future inferring

00:08:19 --> 00:08:23
the past

00:08:20 --> 00:08:25
filling in missing information

00:08:22 --> 00:08:27
uh you know i'm currently filling the

00:08:24 --> 00:08:29
blank of what is behind your head and

00:08:26 --> 00:08:31
what you what your head looks like and

00:08:28 --> 00:08:33
you know from from the back uh because i

00:08:30 --> 00:08:35
have you know basic knowledge about how

00:08:32 --> 00:08:36
humans are made and i don't know if

00:08:34 --> 00:08:38
you're gonna you know what are you gonna

00:08:36 --> 00:08:39
say at which point you're gonna speak

00:08:37 --> 00:08:40
whether you're gonna move your head this

00:08:38 --> 00:08:42
way or that way which way you're gonna

00:08:39 --> 00:08:44
look but i know you're not gonna just

00:08:41 --> 00:08:45
dematerialize and reappear three meters

00:08:43 --> 00:08:48
uh

00:08:44 --> 00:08:50
down the hall uh you know because i know

00:08:47 --> 00:08:52
hat's possible and what's impossible uh

00:08:49 --> 00:08:53
according to into the physics so you

00:08:51 --> 00:08:54
have a model of what's possible what's

00:08:52 --> 00:08:56
impossible and then you'd be very

00:08:53 --> 00:08:58
surprised if it happens and then you'll

00:08:55 --> 00:09:00
have to reconstruct your model

00:08:57 --> 00:09:02
right so that that's the model of the

00:08:59 --> 00:09:03
world it's what tells you you know what

00:09:01 --> 00:09:05
fills in the blanks so given your

00:09:02 --> 00:09:07
partial information

00:09:04 --> 00:09:08
about the state of the world given by

00:09:06 --> 00:09:10
our perception

00:09:07 --> 00:09:12
uh your your model of the world fills in

00:09:09 --> 00:09:14
the missing information and that

00:09:11 --> 00:09:17
includes predicting the future

00:09:13 --> 00:09:18
trodicting the past uh you know

00:09:16 --> 00:09:20
filling in things you don't immediately

00:09:17 --> 00:09:21
perceive and that doesn't have to be

00:09:19 --> 00:09:24
purely

00:09:20 --> 00:09:26
generic vision or visual information or

00:09:23 --> 00:09:28
generic language you can go to specifics

00:09:25 --> 00:09:29
like

00:09:27 --> 00:09:31
predicting

00:09:28 --> 00:09:32
what control decision you make when

00:09:30 --> 00:09:36
you're driving in a lane you have a

00:09:31 --> 00:09:37
sequence of images from a vehicle

00:09:35 --> 00:09:40
and then you could

00:09:36 --> 00:09:42
you have information if you recorded on

00:09:39 --> 00:09:45
video where the car ended up going so

00:09:41 --> 00:09:47
you can go back in time and predict what

00:09:44 --> 00:09:48
he car went based on the visual

00:09:46 --> 00:09:50
information that's very specific domain

00:09:48 --> 00:09:52
specific

00:09:49 --> 00:09:54
right but the question is whether we can

00:09:51 --> 00:09:56
come up with sort of a generic

00:09:53 --> 00:09:56
uh method

00:09:55 --> 00:09:58
for

00:09:55 --> 00:09:59
you know training machines to do this

00:09:57 --> 00:10:02
kind of prediction or filling in the

00:09:58 --> 00:10:04
blanks so right now

00:10:01 --> 00:10:07
uh this type of approach has been

00:10:03 --> 00:10:09
unbelievably successful in the context

00:10:06 --> 00:10:10
of natural language processing uh every

00:10:08 --> 00:10:13
modern natural language processing is

00:10:09 --> 00:10:15
pre-trained in self-supervised manner

00:10:12 --> 00:10:16
to fill in the blanks to you you show it

00:10:14 --> 00:10:17
a sequence of words you remove 10

00:10:15 --> 00:10:19
percent of them and then you train some

00:10:16 --> 00:10:20
gigantic neural net to predict the words

00:10:18 --> 00:10:23
that are missing

00:10:19 --> 00:10:25
that and once you've pre-trained that

00:10:22 --> 00:10:27
network you can use the

00:10:24 --> 00:10:28
internal representation learn by it as

00:10:26 --> 00:10:29
input to

00:10:27 --> 00:10:31
you know

00:10:28 --> 00:10:33
something that you train supervised or

00:10:30 --> 00:10:35
whatever that's been incredibly

00:10:32 --> 00:10:38
successful not so successful in images

00:10:34 --> 00:10:41
although it's making progress

00:10:37 --> 00:10:43
and uh and it's based on uh sort of

00:10:40 --> 00:10:45
manual data augmentation uh we can go

00:10:42 --> 00:10:48
into this later but what has not been

00:10:44 --> 00:10:50
successful yet is training for video so

00:10:47 --> 00:10:52
getting a machine to learn to represent

00:10:49 --> 00:10:54
he visual world for example

00:10:51 --> 00:10:56
by just watching video nobody has really

00:10:53 --> 00:10:58
succeeded in doing this okay well let's

00:10:55 --> 00:11:01
kind of give a high level overview

00:10:57 --> 00:11:02
hat's the difference in

00:11:00 --> 00:11:04
kind

00:11:01 --> 00:11:06
and in difficulty between vision and

00:11:03 --> 00:11:08
language so you said

00:11:05 --> 00:11:10
people haven't been able to

00:11:07 --> 00:11:12
really kind of crack the problem of

00:11:09 --> 00:11:14
vision open in terms of self-supervised

00:11:11 --> 00:11:15
learning but that may not be necessarily

00:11:13 --> 00:11:18
because it's fundamentally more

00:11:14 --> 00:11:21
difficult maybe like when we're talking

00:11:17 --> 00:11:23
about achieving like passing

00:11:20 --> 00:11:24
the turing test and the full spirit of

00:11:22 --> 00:11:26
the turing test in language might be

00:11:24 --> 00:11:29
harder than vision that's that's not

00:11:25 --> 00:11:30
obvious so what in your view which is

00:11:28 --> 00:11:31
harder

00:11:29 --> 00:11:34
or perhaps are they just the same

00:11:30 --> 00:11:35
problem when uh

00:11:33 --> 00:11:37
the farther we get to solving each the

00:11:34 --> 00:11:39
more we realize it's all the same thing

00:11:36 --> 00:11:41
it's all the same cake i think

00:11:38 --> 00:11:43
what i'm looking for are methods that

00:11:40 --> 00:11:45
make make them look essentially like the

00:11:42 --> 00:11:47
same cake but currently they're not and

00:11:44 --> 00:11:48
the main issue

00:11:46 --> 00:11:49
with

00:11:47 --> 00:11:51
learning water models or learning

00:11:48 --> 00:11:52
predictive models

00:11:50 --> 00:11:55
is that

00:11:52 --> 00:11:56
he prediction is never a single

00:11:54 --> 00:11:58
thing

00:11:55 --> 00:12:00
because the world is not entirely

00:11:57 --> 00:12:01
predictable

00:11:59 --> 00:12:02
it may be deterministic or stochastic we

00:12:00 --> 00:12:05
can get into the philosophical

00:12:01 --> 00:12:06
discussion about it but uh but even if

00:12:04 --> 00:12:08
it's deterministic it's not entirely

00:12:05 --> 00:12:09
predictable

00:12:07 --> 00:12:11
and so

00:12:08 --> 00:12:13
if i play

00:12:10 --> 00:12:14
a short video clip and then i ask you to

00:12:12 --> 00:12:16
predict what's going to happen next

00:12:14 --> 00:12:18
here's many many plausible

00:12:15 --> 00:12:19
continuations for that

00:12:17 --> 00:12:22
video clip and the number of

00:12:18 --> 00:12:24
continuation grows with the

00:12:21 --> 00:12:27
interval of time that you're asking the

00:12:23 --> 00:12:28
system to make a prediction uh for

00:12:26 --> 00:12:31
and so

00:12:27 --> 00:12:31
ne big question with supervision is how

00:12:30 --> 00:12:33
you

00:12:30 --> 00:12:34
represent this uncertainty how you

00:12:32 --> 00:12:36
represent

00:12:33 --> 00:12:38
multiple discrete outcomes how you

00:12:35 --> 00:12:40
represent a sort of continuum of

00:12:37 --> 00:12:43
possible outcomes

00:12:39 --> 00:12:45
etc and you know if you are a

00:12:42 --> 00:12:47
sort of a classical machine learning

00:12:44 --> 00:12:50
person you say oh you just represent a

00:12:46 --> 00:12:52
distribution right

00:12:49 --> 00:12:53
and that we know how to do

00:12:51 --> 00:12:55
when we're predicting words missing

00:12:52 --> 00:12:57
words in the text because

00:12:54 --> 00:12:59
uh you can have a neural net give a

00:12:56 --> 00:13:00
score for every word in a dictionary

00:12:58 --> 00:13:02
it's a big you know it's a big list of

00:13:00 --> 00:13:03
numbers you know maybe a hundred

00:13:01 --> 00:13:05
thousand or so and you can turn them

00:13:02 --> 00:13:07
into a probability distribution that

00:13:04 --> 00:13:10
gives that tells you when i say a

00:13:06 --> 00:13:12
sentence you know the

00:13:09 --> 00:13:13
cat is chasing the blank in

00:13:11 --> 00:13:14
the kitchen

00:13:12 --> 00:13:17
you know there are only a few words that

00:13:14 --> 00:13:19
make sense there you know it could be a

00:13:16 --> 00:13:21
mouse or it could be a laser spot or you

00:13:18 --> 00:13:22
know something like that right

00:13:20 --> 00:13:25
uh

00:13:21 --> 00:13:26
and and if i if i say the the blank is

00:13:24 --> 00:13:28
changing the blank in the savannah you

00:13:25 --> 00:13:30
also have a bunch of plausible options

00:13:27 --> 00:13:32
for those two words right

00:13:29 --> 00:13:34
um that that because you you have kind

00:13:31 --> 00:13:35
of a you know underlying reality that

00:13:33 --> 00:13:37
you can refer to to sort of fill in

00:13:34 --> 00:13:38
those those blanks

00:13:36 --> 00:13:40
um

00:13:38 --> 00:13:42
so

00:13:39 --> 00:13:44
you cannot say for sure in the savannah

00:13:41 --> 00:13:47
if it's a you know a lion or cheetah or

00:13:43 --> 00:13:48
whatever you cannot know if it's a

00:13:46 --> 00:13:51
zebra or

00:13:47 --> 00:13:53
glue or you know whatever wildebeest the

00:13:50 --> 00:13:56
same thing um

00:13:52 --> 00:13:57
but uh

00:13:55 --> 00:14:00
but you can represent the uncertainty by

00:13:56 --> 00:14:02
just a long list of numbers now

00:13:59 --> 00:14:04
if i uh if i do the same thing with

00:14:01 --> 00:14:06
video and i ask you to predict a video

00:14:03 --> 00:14:09
clip it's not a discrete set of

00:14:05 --> 00:14:11
potential frames you have to have

00:14:08 --> 00:14:13
somewhere representing a sort of

00:14:10 --> 00:14:14
infinite number of plausible

00:14:12 --> 00:14:16
continuations

00:14:13 --> 00:14:18
of multiple frames in a you know high

00:14:15 --> 00:14:21
dimensional continuous space and we just

00:14:17 --> 00:14:23
have no idea how to do this properly

00:14:20 --> 00:14:25
uh finite high dimensional

00:14:22 --> 00:14:27
so like you because it's fine

00:14:24 --> 00:14:29
dimensional yes just like the words i

00:14:26 --> 00:14:33
try to get it to uh

00:14:28 --> 00:14:35
down to a small finite set of like under

00:14:32 --> 00:14:36
a million something like that something

00:14:34 --> 00:14:38
like that i mean it's kind of ridiculous

00:14:35 --> 00:14:38
that

00:14:37 --> 00:14:40
we're

00:14:37 --> 00:14:43
doing a distribution over every single

00:14:39 --> 00:14:45
possible word for language and it works

00:14:42 --> 00:14:46
it feels like that's a really dumb way

00:14:44 --> 00:14:49
to do it

00:14:45 --> 00:14:52
um like there seems to there seems to be

00:14:48 --> 00:14:54
like there should be some more

00:14:51 --> 00:14:56
compressed representation of the

00:14:53 --> 00:14:58
distribution of the words you're right

00:14:55 --> 00:15:00
about that and so i agree do you have

00:14:57 --> 00:15:02
any interesting ideas about how to

00:14:59 --> 00:15:03
represent all the reality in a

00:15:01 --> 00:15:05
compressed way such you can form a

00:15:02 --> 00:15:06
distribution over it that's one of the

00:15:04 --> 00:15:08
big questions you know how do you do

00:15:05 --> 00:15:10
that right i mean what's what's kind of

00:15:07 --> 00:15:11
you know another thing that that really

00:15:09 --> 00:15:13
is

00:15:10 --> 00:15:15
tupid about um i shouldn't say stupid

00:15:12 --> 00:15:18
but like simplistic about current

00:15:14 --> 00:15:20
approaches to cell supervision in in uh

00:15:17 --> 00:15:22
nlp in text

00:15:19 --> 00:15:24
is that not only do you represent a

00:15:21 --> 00:15:26
giant distribution over words but for

00:15:23 --> 00:15:27
multiple words that are missing those

00:15:25 --> 00:15:31
distributions are essentially

00:15:26 --> 00:15:33
independent of each other

00:15:30 --> 00:15:35
and you know you don't pay too much of a

00:15:32 --> 00:15:37
price for this so you you so you can't

00:15:34 --> 00:15:38
so the you know the system

00:15:36 --> 00:15:40
you know in the the the sentence that i

00:15:37 --> 00:15:42
gave earlier

00:15:39 --> 00:15:44
if he gives a certain probability for a

00:15:41 --> 00:15:46
lion and and uh cheetah and then a

00:15:43 --> 00:15:49
certain probability for

00:15:45 --> 00:15:51
uh you know gazelle uh wildebeest and

00:15:48 --> 00:15:52
and zebra

00:15:50 --> 00:15:54
uh

00:15:51 --> 00:15:56
those two probabilities are independent

00:15:54 --> 00:15:58
of each other

00:15:55 --> 00:15:59
uh and it's not the case that those

00:15:57 --> 00:16:01
things are independent lions actually

00:15:58 --> 00:16:03
attack like bigger animals than than she

00:16:00 --> 00:16:04
does so

00:16:02 --> 00:16:07
you know there's a huge independence

00:16:03 --> 00:16:09
hypothesis in in this process which is

00:16:06 --> 00:16:12
not actually true the reason for this is

00:16:08 --> 00:16:14
that we don't know how to represent uh

00:16:11 --> 00:16:17
properly distributions over

00:16:13 --> 00:16:18
combinatorial uh sequences of symbols

00:16:16 --> 00:16:20
essentially whenever because the number

00:16:18 --> 00:16:22
goes exponentially with the length of

00:16:19 --> 00:16:23
the of the symbols

00:16:21 --> 00:16:25
and so we have to use tricks for this

00:16:22 --> 00:16:27
but um those techniques can

00:16:24 --> 00:16:29
you know get around like don't even deal

00:16:26 --> 00:16:31
with it so

00:16:28 --> 00:16:34
the big question is like would there

00:16:30 --> 00:16:36
be some sort of abstract

00:16:33 --> 00:16:37
latent representation of text

00:16:35 --> 00:16:40
hat would say that

00:16:36 --> 00:16:41
you know when i when i switch

00:16:39 --> 00:16:44
lion for gazelle

00:16:40 --> 00:16:46
lion for cheetah i also have to switch

00:16:43 --> 00:16:47
zebra for gazelle

00:16:45 --> 00:16:49
yeah so

00:16:46 --> 00:16:51
this independence assumption let me

00:16:48 --> 00:16:53
throw some criticism at you that i often

00:16:50 --> 00:16:55
hear and see how you respond

00:16:52 --> 00:16:57
so this kind of filling in the blanks is

00:16:54 --> 00:16:59
just statistics you're not learning

00:16:56 --> 00:17:02
anything

00:16:58 --> 00:17:05
like the deep underlying concepts you're

00:17:01 --> 00:17:08
just mimicking stuff from

00:17:04 --> 00:17:09
the past you're not learning anything

00:17:07 --> 00:17:12
new such that you can use it to

00:17:08 --> 00:17:14
generalize about the world

00:17:11 --> 00:17:17
or okay let me just say the crude

00:17:13 --> 00:17:19
version which is it's just statistics

00:17:16 --> 00:17:21
it's not intelligence uh what do you

00:17:18 --> 00:17:22
have to say to that what do you usually

00:17:20 --> 00:17:24
say to that if you kind of hear this

00:17:21 --> 00:17:25
kind of thing i don't get into those

00:17:23 --> 00:17:28
discussions because they are they're

00:17:24 --> 00:17:30
kind of pointless um so first of all

00:17:27 --> 00:17:32
it's quite possible that intelligence is

00:17:29 --> 00:17:34
just statistics it's just statistics of

00:17:31 --> 00:17:36
a particular kind yes uh where this is

00:17:34 --> 00:17:37
the philosophical question it's kind of

00:17:35 --> 00:17:39
is

00:17:36 --> 00:17:42
intel is it possible that

00:17:38 --> 00:17:45
intelligence is just statistics yeah

00:17:41 --> 00:17:48
but what kind of statistics so

00:17:44 --> 00:17:49
uh if you are asking the question

00:17:47 --> 00:17:51
are the model of the world the models of

00:17:48 --> 00:17:54
the world that we learn um do they have

00:17:50 --> 00:17:56
some notion of causality yes

00:17:53 --> 00:17:57
o if the criticism comes from people

00:17:55 --> 00:17:59
who say

00:17:56 --> 00:18:00
ou know current machine learning system

00:17:58 --> 00:18:01
don't care about causality which by the

00:17:59 --> 00:18:02
way is wrong

00:18:00 --> 00:18:04
uh

00:18:01 --> 00:18:06
you know i agree with them yeah you

00:18:03 --> 00:18:08
should you know your model of the world

00:18:05 --> 00:18:09
should have your actions as one of your

00:18:07 --> 00:18:11
of the inputs

00:18:08 --> 00:18:13
and that will drive you to learn causal

00:18:10 --> 00:18:15
models of the world where you know what

00:18:12 --> 00:18:17
uh intervention in the

00:18:14 --> 00:18:19
world will cause what results or you can

00:18:16 --> 00:18:22
do this by observation of other agents

00:18:18 --> 00:18:23
uh acting in the world and and observing

00:18:21 --> 00:18:27
the effect

00:18:22 --> 00:18:29
uh other humans for example so i think

00:18:26 --> 00:18:31
you know at some level of description uh

00:18:28 --> 00:18:34
intelligence is just statistics

00:18:30 --> 00:18:36
uh but that doesn't mean you don't you

00:18:33 --> 00:18:38
know you won't have models

00:18:35 --> 00:18:40
that have you know deep mechanistic

00:18:37 --> 00:18:42
explanation for what goes on

00:18:39 --> 00:18:43
uh the question is how do you learn them

00:18:41 --> 00:18:44
that's that's the question i'm

00:18:42 --> 00:18:46
interested in

00:18:43 --> 00:18:48
uh because

00:18:45 --> 00:18:50
you know a lot of people who actually

00:18:47 --> 00:18:52
voice their criticism

00:18:49 --> 00:18:53
say that those mechanistic model has to

00:18:51 --> 00:18:54
have to come from someplace else they

00:18:52 --> 00:18:57
have to come from human designers they

00:18:54 --> 00:19:00
have to come from i don't know what and

00:18:56 --> 00:19:01
obviously we learn them

00:18:59 --> 00:19:04
or if we don't learn them as an

00:19:00 --> 00:19:06
individual nature

00:19:03 --> 00:19:08
learn them for us using evolution so

00:19:05 --> 00:19:11
regardless of what you think those

00:19:07 --> 00:19:13
processes have been learned somehow

00:19:10 --> 00:19:15
so if you look at the the human brain

00:19:12 --> 00:19:17
just like when we humans introspect

00:19:14 --> 00:19:19
about how the brain works

00:19:16 --> 00:19:22
it seems like when we think about what

00:19:18 --> 00:19:23
is intelligence we think about

00:19:21 --> 00:19:25
he high level stuff like the models

00:19:22 --> 00:19:27
we've constructed concepts like

00:19:24 --> 00:19:28
cognitive science like concepts of

00:19:26 --> 00:19:30
memory

00:19:27 --> 00:19:32
and reasoning module almost like these

00:19:29 --> 00:19:34
high-level modules

00:19:31 --> 00:19:36
is there's is this service a good

00:19:33 --> 00:19:38
analogy

00:19:35 --> 00:19:40
like are we ignoring

00:19:37 --> 00:19:42
the uh

00:19:39 --> 00:19:44
the dark matter the

00:19:41 --> 00:19:46
basic low-level mechanisms just like

00:19:43 --> 00:19:48
we ignore the way the operating system

00:19:45 --> 00:19:50
works we're just using the

00:19:47 --> 00:19:52
uh the the high-level software we're

00:19:49 --> 00:19:53
ignoring that

00:19:51 --> 00:19:55
the low level

00:19:52 --> 00:19:57
the neural network might be doing

00:19:54 --> 00:19:58
something like statistics

00:19:56 --> 00:20:00
like me

00:19:57 --> 00:20:02
sorry to use this word probably

00:19:59 --> 00:20:04
incorrectly and crudely but doing this

00:20:01 --> 00:20:05
kind of fill in the gap kind of learning

00:20:03 --> 00:20:07
and just kind of updating the model

00:20:04 --> 00:20:10
constantly in order to be able to

00:20:06 --> 00:20:11
support the raw sensory information to

00:20:09 --> 00:20:14
predict it and then adjust to the

00:20:10 --> 00:20:16
prediction when it's wrong but like kyla

00:20:13 --> 00:20:18
when we look at our brain at the high

00:20:15 --> 00:20:20
level it feels like we're doing like

00:20:17 --> 00:20:22
we're playing chess like

00:20:19 --> 00:20:24
we're we're like playing with high level

00:20:21 --> 00:20:25
concepts and we're stitching them

00:20:23 --> 00:20:28
together and we're putting them into

00:20:24 --> 00:20:29
long-term memory but really what's going

00:20:27 --> 00:20:30
underneath

00:20:28 --> 00:20:32
is something we're not able to

00:20:29 --> 00:20:35
introspect which is this kind of

00:20:31 --> 00:20:38
uh simple large neural network that's

00:20:34 --> 00:20:39
just filling in the gaps right well okay

00:20:37 --> 00:20:41
so there's a lot of questions there are

00:20:38 --> 00:20:42
answers there okay so first of all

00:20:40 --> 00:20:44
there's a whole school of thought in

00:20:41 --> 00:20:46
euroscience computational neuroscience

00:20:43 --> 00:20:48
in particular

00:20:45 --> 00:20:50
that likes the idea of predictive coding

00:20:47 --> 00:20:52
which is really related to the idea i

00:20:50 --> 00:20:53
was talking about in self-supervised

00:20:51 --> 00:20:55
learning so everything is about

00:20:52 --> 00:20:57
prediction the essence of intelligence

00:20:54 --> 00:20:58
is the ability to predict

00:20:56 --> 00:21:00
and everything the brain does is trying

00:20:57 --> 00:21:02
to predict

00:20:59 --> 00:21:04
uh predict everything from everything

00:21:01 --> 00:21:07
else okay and that's really sort of the

00:21:03 --> 00:21:09
underlying principle if you want that

00:21:06 --> 00:21:11
uh cell supervisor learning is trying to

00:21:08 --> 00:21:12
kind of reproduce this idea of

00:21:10 --> 00:21:14
prediction that's kind of an essential

00:21:11 --> 00:21:14
mechanism

00:21:13 --> 00:21:17
of

00:21:13 --> 00:21:19
task independent learning if you want

00:21:16 --> 00:21:20
he next step is

00:21:18 --> 00:21:23
what kind of intelligence are you

00:21:19 --> 00:21:24
interested in reproducing and of course

00:21:22 --> 00:21:26
you know we all think about you know

00:21:23 --> 00:21:29
trying to reproduce sort of you know

00:21:25 --> 00:21:30
high-level cognitive processes in humans

00:21:28 --> 00:21:32
but like with machines we're not even at

00:21:29 --> 00:21:34
he level of

00:21:31 --> 00:21:37
even reproducing the

00:21:33 --> 00:21:38
learning processes in a in a cat brain

00:21:36 --> 00:21:40
um you know the most intelligent or

00:21:38 --> 00:21:44
intelligent systems don't don't have as

00:21:39 --> 00:21:46
much common sense as as a house cat

00:21:43 --> 00:21:48
so um how is it that cats learn and you

00:21:45 --> 00:21:49
know cats don't do a whole lot of uh

00:21:47 --> 00:21:52
reasoning they certainly have causal

00:21:48 --> 00:21:54
models they certainly have

00:21:51 --> 00:21:55
uh because you know many cats can figure

00:21:53 --> 00:21:58
out like how they can act on the world

00:21:54 --> 00:22:01
to get what they want um they certainly

00:21:57 --> 00:22:04
have uh a fantastic model of intuitive

00:22:00 --> 00:22:05
physics uh certainly of the the the

00:22:03 --> 00:22:07
dynamics of their own bodies but but

00:22:04 --> 00:22:08
also of praise and things like that

00:22:06 --> 00:22:10
right so

00:22:07 --> 00:22:12
um they they're they're pretty smart

00:22:10 --> 00:22:14
hey only do this with about 800 million

00:22:11 --> 00:22:17
eurons

00:22:13 --> 00:22:18
we are not anywhere close to reproducing

00:22:16 --> 00:22:21
this kind of

00:22:17 --> 00:22:22
thing so to some extent i could i could

00:22:20 --> 00:22:24
say

00:22:21 --> 00:22:27
let's not even worry about like the high

00:22:23 --> 00:22:28
level cognition

00:22:26 --> 00:22:29
and kind of you know long-term planning

00:22:27 --> 00:22:31
and reasoning that humans can do until

00:22:28 --> 00:22:33
we figure out like you know can we even

00:22:30 --> 00:22:36
reproduce what cats are doing

00:22:32 --> 00:22:40
now that said this ability to

00:22:35 --> 00:22:41
learn world models i think is the key to

00:22:39 --> 00:22:43
the possibility of

00:22:40 --> 00:22:45
learning machines that can also reason

00:22:42 --> 00:22:46
so whenever i give a talk i'd say there

00:22:44 --> 00:22:47
are there are three challenges in the

00:22:45 --> 00:22:49
three main challenges in machine

00:22:46 --> 00:22:50
learning the first one is

00:22:48 --> 00:22:52
uh you know getting machines to learn to

00:22:49 --> 00:22:55
represent the world

00:22:51 --> 00:22:57
and proposing salt supervised running

00:22:54 --> 00:22:59
the second is

00:22:56 --> 00:23:01
getting machines to reason in ways that

00:22:58 --> 00:23:02
are compatible with

00:23:00 --> 00:23:03
essentially gradient-based learning

00:23:01 --> 00:23:06
because this is what deep learning is

00:23:02 --> 00:23:07
all about really

00:23:05 --> 00:23:09
and the third one is something we have

00:23:06 --> 00:23:10
no idea how to solve at least i have no

00:23:08 --> 00:23:12
idea to solve

00:23:09 --> 00:23:13
is uh

00:23:11 --> 00:23:16
can we get machines to learn

00:23:12 --> 00:23:17
hierarchical representations of action

00:23:15 --> 00:23:19
plans

00:23:16 --> 00:23:20
you know like you know we know how to

00:23:18 --> 00:23:21
train them to learn hierarchical

00:23:19 --> 00:23:23
representations of

00:23:20 --> 00:23:24
perception you know with computational

00:23:22 --> 00:23:26
nets and things like that and

00:23:23 --> 00:23:28
transformers but what about action plans

00:23:26 --> 00:23:30
can we uh get them to spontaneously

00:23:28 --> 00:23:33
learn good hierarchical representations

00:23:29 --> 00:23:35
of actions also gradient based

00:23:32 --> 00:23:37
yeah all of that you know needs to be

00:23:34 --> 00:23:39
somewhat differentiable so that you can

00:23:36 --> 00:23:40
apply sort of gradient-based learning uh

00:23:38 --> 00:23:42
which is really what deep learning is

00:23:39 --> 00:23:45
about

00:23:42 --> 00:23:50
so it's background

00:23:44 --> 00:23:50
knowledge ability to reason in a way

00:23:49 --> 00:23:54
this differentiable that

00:23:51 --> 00:23:56
is somehow connected deeply integrated

00:23:53 --> 00:23:58
with that background knowledge or builds

00:23:55 --> 00:24:00
on top of that background knowledge and

00:23:57 --> 00:24:02
then given that background knowledge be

00:23:59 --> 00:24:05
able to make hierarchical plans right in

00:24:01 --> 00:24:06
the world so if if you take classical

00:24:04 --> 00:24:08
optimal control there's something in

00:24:05 --> 00:24:09
classical optimal control called

00:24:07 --> 00:24:11
uh

00:24:08 --> 00:24:13
model predictive control

00:24:10 --> 00:24:14
and it's you know it's been around since

00:24:12 --> 00:24:16
the early 60s

00:24:13 --> 00:24:18
nasa uses that to compute trajectories

00:24:15 --> 00:24:21
of rockets and the basic idea is that

00:24:17 --> 00:24:23
you have a pretty predictive model

00:24:20 --> 00:24:26
of the rocket let's say or whatever

00:24:22 --> 00:24:27
system you are you intend to control

00:24:25 --> 00:24:29
which

00:24:26 --> 00:24:30
given the state of the system at time t

00:24:28 --> 00:24:33
and given an action

00:24:29 --> 00:24:35
that you're taking the system so for

00:24:32 --> 00:24:37
ocket to be thrust and you know all the

00:24:34 --> 00:24:38
controls you can have

00:24:36 --> 00:24:40
uh it gives you the state of the system

00:24:37 --> 00:24:41
at time t plus delta t right so

00:24:39 --> 00:24:43
basically a differential equation

00:24:40 --> 00:24:45
something like that

00:24:42 --> 00:24:47
um

00:24:44 --> 00:24:48
and if you have this model and you have

00:24:46 --> 00:24:50
this model

00:24:47 --> 00:24:52
in the form of some sort of neural net

00:24:49 --> 00:24:54
or some sort of uh set of formula that

00:24:51 --> 00:24:55
you can back propagate gradient through

00:24:53 --> 00:24:57
you can do what's called model

00:24:54 --> 00:25:00
predictive control or gradient based

00:24:56 --> 00:25:04
uh model predictive control so you have

00:24:59 --> 00:25:06
uh you can unroll that

00:25:03 --> 00:25:09
model in time you you

00:25:05 --> 00:25:11
feel it a

00:25:08 --> 00:25:14
hypothesized sequence of actions

00:25:10 --> 00:25:16
and then you have some objective

00:25:13 --> 00:25:17
function that measures how well at the

00:25:15 --> 00:25:19
nd of the trajectory the system has

00:25:16 --> 00:25:20
ucceeded or matched what you wanted to

00:25:18 --> 00:25:22
do

00:25:19 --> 00:25:24
um you know is it a robot harm have you

00:25:21 --> 00:25:26
grasped the object you want to grasp if

00:25:23 --> 00:25:28
it's a rocket you know are you at the

00:25:25 --> 00:25:29
right place near the space station

00:25:27 --> 00:25:31
things like that

00:25:28 --> 00:25:33
and by back propagation through time and

00:25:30 --> 00:25:36
again this was invented in the 1960s by

00:25:32 --> 00:25:38
optimal control theorists

00:25:35 --> 00:25:41
you can figure out uh what is the

00:25:37 --> 00:25:44
optimal sequence of actions that will

00:25:40 --> 00:25:46
you know get my system to the the best

00:25:43 --> 00:25:47
final state

00:25:45 --> 00:25:48
so

00:25:46 --> 00:25:50
that's a form of reasoning it's

00:25:47 --> 00:25:52
basically planning and a lot of planning

00:25:49 --> 00:25:53
uh systems in robotics are actually

00:25:51 --> 00:25:55
based on this

00:25:52 --> 00:25:56
and uh

00:25:54 --> 00:25:57
and you can think of this as a form of

00:25:55 --> 00:25:59
reasoning so

00:25:56 --> 00:26:02
you know to take the example of the

00:25:58 --> 00:26:03
teenager driving a car again you have a

00:26:01 --> 00:26:05
pretty good dynamical model of the car

00:26:02 --> 00:26:07
it doesn't need to be very accurate but

00:26:04 --> 00:26:08
you know again that if you

00:26:06 --> 00:26:10
turn the wheel to the right and there is

00:26:07 --> 00:26:11
a cliff you're gonna run off the cliff

00:26:09 --> 00:26:12
right you don't need to have a very

00:26:10 --> 00:26:14
accurate model to predict that

00:26:11 --> 00:26:16
and you can run this in your mind and

00:26:13 --> 00:26:18
ecide not to do it for that reason

00:26:15 --> 00:26:19
because you can predict in advance that

00:26:17 --> 00:26:21
he result is going to be bad so you can

00:26:18 --> 00:26:24
sort of imagine different scenarios

00:26:20 --> 00:26:25
and and then you know employ

00:26:23 --> 00:26:27
uh or take the first step in the

00:26:24 --> 00:26:28
scenario that is most favorable and then

00:26:26 --> 00:26:30
repeat the process of planning that's

00:26:27 --> 00:26:32
called receding horizon model predictive

00:26:29 --> 00:26:34
control so even you know all those

00:26:31 --> 00:26:36
things have names you know uh going back

00:26:33 --> 00:26:37
you know decades um

00:26:35 --> 00:26:40
and so

00:26:36 --> 00:26:41
if you're not not uh you know classical

00:26:39 --> 00:26:43
optimal control the model of the world

00:26:40 --> 00:26:45
is not generally learned

00:26:42 --> 00:26:46
uh there's you know sometimes a few

00:26:44 --> 00:26:48
parameters you have to identify that's

00:26:45 --> 00:26:50
called systems identification but

00:26:47 --> 00:26:51
uh but generally

00:26:49 --> 00:26:53
the model is

00:26:50 --> 00:26:56
mostly deterministic and mostly built by

00:26:52 --> 00:26:58
hand so the big question of ai

00:26:55 --> 00:27:00
think the big challenge of ai for the

00:26:57 --> 00:27:02
next decade is how do we get machines to

00:26:59 --> 00:27:05
learn predictive models of the world

00:27:01 --> 00:27:06
that deal with uncertainty and deal with

00:27:04 --> 00:27:08
e real world in all this complexity so

00:27:05 --> 00:27:11
it's not just the trajectory of a rocket

00:27:08 --> 00:27:12
which you can reduce to first principles

00:27:10 --> 00:27:14
it's not it's not even just a trajectory

00:27:11 --> 00:27:17
of a robot arm which again you can model

00:27:13 --> 00:27:18
by you know careful mathematics but it's

00:27:16 --> 00:27:21
everything else everything you observe

00:27:17 --> 00:27:24
in the world you know people behavior

00:27:20 --> 00:27:26
um you know physical systems that

00:27:23 --> 00:27:29
involve collective phenomena

00:27:25 --> 00:27:32
like water or or you know

00:27:28 --> 00:27:33
trees and you know branches in a tree or

00:27:31 --> 00:27:34
something or

00:27:33 --> 00:27:37
like complex things that you know humans

00:27:35 --> 00:27:39
have no trouble

00:27:36 --> 00:27:41
developing abstract representations in

00:27:38 --> 00:27:42
predictive model for but we still don't

00:27:40 --> 00:27:45
know how to do with machines where do

00:27:41 --> 00:27:48
you put in in these three maybe in the

00:27:44 --> 00:27:51
planning stages

00:27:47 --> 00:27:53
the game theoretic nature of this world

00:27:50 --> 00:27:55
where your actions not only respond to

00:27:52 --> 00:27:58
the dynamic nature of the world the

00:27:54 --> 00:28:00
nvironment but also affected

00:27:57 --> 00:28:02
so if there's other humans involved is

00:27:59 --> 00:28:03
this is this

00:28:01 --> 00:28:05
point number four or is it somehow

00:28:02 --> 00:28:07
integrated into the hierarchical

00:28:04 --> 00:28:09
representation of action in your view i

00:28:06 --> 00:28:11
think it's integrated it's just um it's

00:28:08 --> 00:28:12
just that now your model of the world

00:28:10 --> 00:28:14
has to deal with you know it just makes

00:28:11 --> 00:28:17
it more complicated right the fact that

00:28:13 --> 00:28:18
uh humans are complicated and not easily

00:28:16 --> 00:28:19
predictable

00:28:17 --> 00:28:21
that makes your model of the world much

00:28:18 --> 00:28:24
more complicated that much more

00:28:20 --> 00:28:26
complicated well there's a chat i mean i

00:28:23 --> 00:28:29
suppose chess is an analogy

00:28:25 --> 00:28:33
so monte carlo tree search

00:28:28 --> 00:28:35
there's a i go you go i go you go like

00:28:32 --> 00:28:38
um andre kapatha recently gave a talk at

00:28:34 --> 00:28:39
mit about car doors

00:28:37 --> 00:28:42
i think there's some machine learning

00:28:38 --> 00:28:44
too but mostly car doors and there's a

00:28:41 --> 00:28:46
dynamic nature to the cart like the

00:28:43 --> 00:28:47
person opening the door checking

00:28:45 --> 00:28:49
and he wasn't talking about that he was

00:28:46 --> 00:28:51
talking about the perception problem of

00:28:48 --> 00:28:53
what the ontology of what defines a car

00:28:50 --> 00:28:55
door this big philosophical question but

00:28:52 --> 00:28:57
o me it was interesting because like

00:28:54 --> 00:28:59
it's obvious that the person opening the

00:28:56 --> 00:29:01
car doors they're trying to get out like

00:28:58 --> 00:29:02
here in new york trying to get out of

00:29:00 --> 00:29:04
the car

00:29:01 --> 00:29:05
you slowing down is going to signal

00:29:03 --> 00:29:07
something you speeding up is going to

00:29:04 --> 00:29:08
signal something and that's a dance it's

00:29:06 --> 00:29:10
a

00:29:07 --> 00:29:12
synchronous

00:29:09 --> 00:29:13
chess game i don't know

00:29:11 --> 00:29:16
so

00:29:12 --> 00:29:18
i it feels like um

00:29:15 --> 00:29:20
it's not just i mean i guess you can

00:29:17 --> 00:29:23
integrate all of them into one giant

00:29:19 --> 00:29:25
model like the entirety of the the

00:29:22 --> 00:29:26
se little interactions because it's

00:29:24 --> 00:29:28
not as complicated as chess it's just

00:29:25 --> 00:29:30
like a little dance we do like a little

00:29:27 --> 00:29:32
dance together and then we figure it out

00:29:29 --> 00:29:34
well in some ways it's way more

00:29:31 --> 00:29:36
complicated than chess because uh

00:29:33 --> 00:29:38
because it's continuous it's uncertain

00:29:35 --> 00:29:40
a continuous manner

00:29:37 --> 00:29:42
uh it doesn't feel more complicated but

00:29:39 --> 00:29:44
it doesn't feel more complicated because

00:29:41 --> 00:29:45
that's what we are we've evolved to

00:29:43 --> 00:29:47
solve this is the kind of problem we've

00:29:44 --> 00:29:48
volved to solve and so we're good at it

00:29:46 --> 00:29:51
because you know

00:29:47 --> 00:29:53
nature has made us good at it

00:29:50 --> 00:29:56
nature has not made us good at chess we

00:29:52 --> 00:29:58
completely suck at chess yeah um

00:29:55 --> 00:30:01
in fact that's why we designed it as a

00:29:57 --> 00:30:02
game is to be challenging

00:30:00 --> 00:30:05
and if there is something that you know

00:30:01 --> 00:30:07
recent progress in chess and go

00:30:04 --> 00:30:08
has made us realize is that humans are

00:30:06 --> 00:30:11
ally terrible at those things like

00:30:08 --> 00:30:13
really bad you know there was a story

00:30:10 --> 00:30:16
right before alphago that uh

00:30:12 --> 00:30:17
you know the best go players thought

00:30:15 --> 00:30:19
here were maybe two or three stones

00:30:16 --> 00:30:21
behind you know an ideal player that

00:30:18 --> 00:30:23
hey would call god

00:30:20 --> 00:30:26
uh in fact no they are like nine or ten

00:30:22 --> 00:30:28
stones behind i mean we're just bad

00:30:25 --> 00:30:31
so we're not good at and it's because we

00:30:27 --> 00:30:33
have limited uh working memory we we're

00:30:30 --> 00:30:34
not very good at like doing this uh tree

00:30:32 --> 00:30:36
xploration that you know computers are

00:30:33 --> 00:30:38
much better

00:30:35 --> 00:30:40
at doing than we are but we are much

00:30:37 --> 00:30:41
better at learning differentiable models

00:30:39 --> 00:30:43
of the world

00:30:40 --> 00:30:44
i mean i said differentiable in the kind

00:30:42 --> 00:30:45
of

00:30:43 --> 00:30:47
you know i should say

00:30:44 --> 00:30:48
not differentiable in the sense that you

00:30:46 --> 00:30:50
know we went back for up to it but in

00:30:47 --> 00:30:51
the sense that

00:30:49 --> 00:30:54
our brain has some mechanism for

00:30:50 --> 00:30:56
estimating gradients uh of some kind

00:30:53 --> 00:30:59
yeah and that's what you know makes us

00:30:55 --> 00:31:02
uh efficient so if you have an agent

00:30:58 --> 00:31:04
hat consists of

00:31:01 --> 00:31:06
a a model of the world which you know in

00:31:03 --> 00:31:09
the human brain is basically the entire

00:31:05 --> 00:31:09
front half of your brain

00:31:08 --> 00:31:12
an objective function

00:31:10 --> 00:31:14
which

00:31:11 --> 00:31:16
uh in human in in humans is a

00:31:13 --> 00:31:18
combination of two things there is your

00:31:15 --> 00:31:19
sort of intrinsic motivation module

00:31:17 --> 00:31:21
which is in the basal ganglia you know

00:31:18 --> 00:31:23
at the base of your brain that's the

00:31:20 --> 00:31:26
thing that measures pain and hunger and

00:31:22 --> 00:31:28
things like that like immediate

00:31:25 --> 00:31:30
feelings and emotions

00:31:27 --> 00:31:32
and then there is

00:31:29 --> 00:31:33
you know the equivalent of what people

00:31:31 --> 00:31:36
in reform spectrum called a critic which

00:31:32 --> 00:31:38
is a sort of module that predicts ahead

00:31:35 --> 00:31:40
what the outcome

00:31:37 --> 00:31:42
of a uh

00:31:39 --> 00:31:44
of a situation will be

00:31:41 --> 00:31:46
and so it's it's not a cost function but

00:31:43 --> 00:31:48
it's sort of not an objective function

00:31:45 --> 00:31:50
but it's sort of a

00:31:47 --> 00:31:52
you know trained predictor of the

00:31:49 --> 00:31:54
ultimate objective function and that

00:31:51 --> 00:31:55
also is differentiable and so if all of

00:31:53 --> 00:31:58
this is differentiable your cost

00:31:54 --> 00:31:59
function your your critic your

00:31:57 --> 00:32:01
uh

00:31:58 --> 00:32:02
you know your your role model then you

00:32:00 --> 00:32:04
can use

00:32:01 --> 00:32:06
gradient-based type methods to do

00:32:03 --> 00:32:08
planning to the reasoning to do learning

00:32:05 --> 00:32:11
uh you know to do all the things that

00:32:07 --> 00:32:12
would like an intelligent agent uh

00:32:10 --> 00:32:15
to do

00:32:11 --> 00:32:17
and the gradient-based learning like

00:32:14 --> 00:32:19
what's your intuition that's probably at

00:32:16 --> 00:32:20
he core of what can solve intelligence

00:32:18 --> 00:32:22
so you don't need

00:32:20 --> 00:32:26
like a

00:32:21 --> 00:32:27
logic based reasoning uh in your view i

00:32:25 --> 00:32:29
don't know how to make logic based

00:32:26 --> 00:32:31
reasoning compatible with

00:32:28 --> 00:32:33
efficient learning yeah and

00:32:30 --> 00:32:34
okay i mean there is a big question

00:32:32 --> 00:32:37
perhaps a philosophical question i mean

00:32:33 --> 00:32:39
it's not that philosophical but uh that

00:32:36 --> 00:32:40
we can ask is is that you know all the

00:32:38 --> 00:32:42
learning

00:32:39 --> 00:32:44
algorithms we know from engineering and

00:32:41 --> 00:32:46
computer science

00:32:43 --> 00:32:47
proceed by optimizing some objective

00:32:45 --> 00:32:49
function

00:32:46 --> 00:32:51
yeah right

00:32:48 --> 00:32:52
so one question we may ask is

00:32:51 --> 00:32:55
does learning in the brain minimize an

00:32:53 --> 00:32:58
objective function

00:32:54 --> 00:32:59
it could be a you know a composite of

00:32:57 --> 00:33:01
multiple objective functions but it's

00:32:58 --> 00:33:04
till an objective function

00:33:00 --> 00:33:05
uh second if it does optimize an

00:33:03 --> 00:33:08
objective function

00:33:04 --> 00:33:10
does it do does it do it by

00:33:07 --> 00:33:11
some sort of gradient estimation

00:33:09 --> 00:33:13
you know it doesn't need to be back prop

00:33:10 --> 00:33:15
but you know some way of estimating the

00:33:12 --> 00:33:17
gradient in efficient manner

00:33:14 --> 00:33:20
whose complexity is on the same order of

00:33:16 --> 00:33:21
magnitude as you know actually running

00:33:19 --> 00:33:23
the

00:33:20 --> 00:33:23
inference

00:33:22 --> 00:33:26
because you can't afford to do things

00:33:24 --> 00:33:28
like you know perturbing a weight in

00:33:26 --> 00:33:30
your brain to figure out what the effect

00:33:27 --> 00:33:32
is and then sort of uh you know you can

00:33:30 --> 00:33:35
do sort of estimating gradient by

00:33:31 --> 00:33:37
perturbation it's it to me it seems very

00:33:34 --> 00:33:39
imp implausible that the brain uses some

00:33:36 --> 00:33:42
sort of

00:33:38 --> 00:33:43
you know zeroth order black box gradient

00:33:41 --> 00:33:46
free optimization

00:33:42 --> 00:33:47
because it's so much less efficient than

00:33:45 --> 00:33:50
gradient optimization so it has to have

00:33:46 --> 00:33:52
a way of estimating gradients

00:33:49 --> 00:33:55
is it possible that some kind of logic

00:33:51 --> 00:33:58
based reasoning emerges in pockets as a

00:33:54 --> 00:33:59
useful like you said if the brain is an

00:33:57 --> 00:34:01
objective function maybe it's a

00:33:58 --> 00:34:02
mechanism for creating objective

00:34:00 --> 00:34:04
functions

00:34:01 --> 00:34:07
it's it's a mechanism for

00:34:03 --> 00:34:09
creating knowledge bases for example

00:34:06 --> 00:34:11
that can then be queried like maybe it's

00:34:08 --> 00:34:12
like an efficient representation of

00:34:10 --> 00:34:14
knowledge that's learned in a

00:34:11 --> 00:34:16
gradient-based way or something like

00:34:13 --> 00:34:17
that well so i think there is a lot of

00:34:15 --> 00:34:19
different types of

00:34:16 --> 00:34:20
intelligence so first of all i think the

00:34:18 --> 00:34:22
type of logical reasoning that we think

00:34:20 --> 00:34:23
about

00:34:21 --> 00:34:25
hat we are

00:34:22 --> 00:34:27
you know maybe stemming from

00:34:24 --> 00:34:29
you know sort of classical ai of the

00:34:26 --> 00:34:32
1970s and 80s

00:34:28 --> 00:34:33
i think humans use that relatively

00:34:31 --> 00:34:35
rarely

00:34:32 --> 00:34:38
and are not particularly good at it but

00:34:34 --> 00:34:39
we judge each other based on our ability

00:34:37 --> 00:34:41
to uh

00:34:38 --> 00:34:44
solve those rare problems it's called an

00:34:40 --> 00:34:46
iq test i think so like i'm i'm not very

00:34:43 --> 00:34:48
good at chess

00:34:45 --> 00:34:49
yes i'm judging you this whole time

00:34:47 --> 00:34:51
because

00:34:48 --> 00:34:53
well we we actually with your with your

00:34:50 --> 00:34:54
uh you know heritage i'm sure you're

00:34:52 --> 00:34:57
good at chess

00:34:53 --> 00:34:58
no stereotypes not all stereotypes are

00:34:56 --> 00:35:01
true

00:34:57 --> 00:35:04
well i'm terrible at chess so um

00:35:00 --> 00:35:06
you know but i think perhaps uh another

00:35:03 --> 00:35:07
type of intelligence that i have is this

00:35:05 --> 00:35:09
uh

00:35:06 --> 00:35:11
you know ability of sort of building

00:35:08 --> 00:35:13
models of the world from

00:35:10 --> 00:35:15
uh you know

00:35:12 --> 00:35:16
reasoning obvious obviously but also

00:35:14 --> 00:35:18
data

00:35:15 --> 00:35:20
nd those those models generally are

00:35:17 --> 00:35:20
more kind of analogical right so it's

00:35:20 --> 00:35:24
reasoning by simulation

00:35:22 --> 00:35:26
and by analogy

00:35:23 --> 00:35:28
where you use one model to apply to a

00:35:25 --> 00:35:31
new situation even though you've never

00:35:27 --> 00:35:32
seen that situation you can sort of

00:35:30 --> 00:35:33
connect it to a situation you've

00:35:31 --> 00:35:36
ncountered before

00:35:32 --> 00:35:38
uh and and your reasoning is more

00:35:35 --> 00:35:40
you know akin to some sort of internal

00:35:37 --> 00:35:42
simulation so you you're kind of

00:35:39 --> 00:35:43
stimulating what's happening when you're

00:35:41 --> 00:35:46
building i don't know a box out of wood

00:35:42 --> 00:35:48
or something right you can imagine

00:35:45 --> 00:35:49
in advance like what would be the result

00:35:47 --> 00:35:51
of you know cutting the wood in this

00:35:48 --> 00:35:53
particular way are you going to use you

00:35:50 --> 00:35:54
know screws on nails or whatever

00:35:52 --> 00:35:57
when you are interacting with someone

00:35:54 --> 00:36:00
you also have a model of that person and

00:35:56 --> 00:36:02
sort of interact with that person

00:35:59 --> 00:36:03
you know having this model in mind uh to

00:36:01 --> 00:36:05
kind of

00:36:02 --> 00:36:06
uh tell the person what you think is

00:36:04 --> 00:36:08
useful to them so

00:36:05 --> 00:36:10
i think this

00:36:07 --> 00:36:11
ability to construct most of the

00:36:09 --> 00:36:13
world is

00:36:10 --> 00:36:14
basically the essence the essence of

00:36:12 --> 00:36:17
intelligence

00:36:13 --> 00:36:20
and the ability to use it then to

00:36:16 --> 00:36:23
plan uh actions that will

00:36:19 --> 00:36:26
uh fulfill a particular criterion

00:36:22 --> 00:36:28
of course is is necessary as well so i'm

00:36:25 --> 00:36:30
going to ask you a series of impossible

00:36:27 --> 00:36:31
questions as we keep asking is that been

00:36:29 --> 00:36:33
doing so

00:36:30 --> 00:36:35
if that's the fundamental sort of

00:36:32 --> 00:36:37
dark matter of intelligence this ability

00:36:34 --> 00:36:39
to form a background model what's your

00:36:36 --> 00:36:42
intuition about

00:36:38 --> 00:36:44
how much knowledge is required

00:36:41 --> 00:36:46
you know you know i think dark matter

00:36:43 --> 00:36:48
you put a percentage

00:36:45 --> 00:36:50
on it

00:36:47 --> 00:36:52
of uh the composition of the universe

00:36:49 --> 00:36:56
and how much of it is dark matter how

00:36:51 --> 00:36:59
much of his dark energy how much

00:36:55 --> 00:37:00
information do you think is required to

00:36:58 --> 00:37:02
be a house cat

00:36:59 --> 00:37:04
so you have to be able to uh when you

00:37:01 --> 00:37:07
see a box going it when you see a human

00:37:04 --> 00:37:08
compute the most evil action

00:37:06 --> 00:37:10
if there's a thing that's near an edge

00:37:07 --> 00:37:11
you knock it off

00:37:09 --> 00:37:13
all of that

00:37:10 --> 00:37:14
plus the extra stuff you mentioned which

00:37:12 --> 00:37:16
is a

00:37:13 --> 00:37:19
great self-awareness of the physics of

00:37:15 --> 00:37:20
your of your own body and in the world

00:37:18 --> 00:37:23
how much knowledge is required do you

00:37:20 --> 00:37:25
think to solve it um i don't even know

00:37:22 --> 00:37:26
how to measure

00:37:24 --> 00:37:28
an answer to that question i'm not sure

00:37:25 --> 00:37:33
how to measure it but whatever it is it

00:37:27 --> 00:37:34
fits in about about 800 000 neurons uh

00:37:32 --> 00:37:37
800 million neurons or the

00:37:33 --> 00:37:38
representation does

00:37:36 --> 00:37:39
everything all knowledge everything

00:37:37 --> 00:37:40
right

00:37:38 --> 00:37:42
um

00:37:39 --> 00:37:44
it was less than a billion a dog is two

00:37:41 --> 00:37:46
billion but a cat is less than one

00:37:43 --> 00:37:47
billion

00:37:45 --> 00:37:49
and uh

00:37:46 --> 00:37:51
so multiply that by a thousand and you

00:37:48 --> 00:37:54
get the number of synapses and i think

00:37:50 --> 00:37:56
almost all of it is is learned through

00:37:53 --> 00:37:58
this you know a sort of supervised

00:37:55 --> 00:38:00
running although you know i think a tiny

00:37:57 --> 00:38:01
flavor is learned through reinforcement

00:37:59 --> 00:38:02
running and certainly very little

00:38:00 --> 00:38:04
through

00:38:01 --> 00:38:05
you know classical supervised running

00:38:03 --> 00:38:07
although it's not even clear how

00:38:04 --> 00:38:09
supervised learning actually works in uh

00:38:06 --> 00:38:12
in a biological world

00:38:08 --> 00:38:15
um so i think almost all of it is uh is

00:38:11 --> 00:38:18
elf supervision but it's driven

00:38:14 --> 00:38:20
by uh the the sort of ingrained

00:38:17 --> 00:38:22
objective functions that a cat or human

00:38:19 --> 00:38:24
have at the base of their brain which

00:38:21 --> 00:38:27
kind of drives their

00:38:23 --> 00:38:30
um their behavior so you know nature

00:38:26 --> 00:38:32
tells us uh you're hungry

00:38:29 --> 00:38:34
it doesn't tell us how to feed ourselves

00:38:31 --> 00:38:36
that's that's something that the rest of

00:38:33 --> 00:38:37
our brain has to figure out right

00:38:35 --> 00:38:40
well it's interesting because there

00:38:36 --> 00:38:42
might be more like deeper objective

00:38:39 --> 00:38:42
functions underlying the whole thing

00:38:41 --> 00:38:45
so

00:38:42 --> 00:38:47
hunger may be some kind of

00:38:44 --> 00:38:49
now you go to like neurobiology it might

00:38:46 --> 00:38:50
be just the brain

00:38:48 --> 00:38:53
uh

00:38:50 --> 00:38:55
trying to maintain homeostasis

00:38:52 --> 00:38:58
o hunger is just one of the

00:38:54 --> 00:39:00
human perceivable

00:38:57 --> 00:39:02
symptoms of the brain being unhappy with

00:38:59 --> 00:39:04
e way things are currently right it

00:39:01 --> 00:39:05
could be just like one really dumb

00:39:03 --> 00:39:08
objective function at the core but

00:39:04 --> 00:39:11
hat's how that's how behavior is is

00:39:07 --> 00:39:12
driven uh the the fact that you know the

00:39:10 --> 00:39:14
orbital ganglia

00:39:11 --> 00:39:17
uh drive us to do things that are that

00:39:13 --> 00:39:19
are different from saying a wong tong or

00:39:16 --> 00:39:20
certainly a cat

00:39:18 --> 00:39:22
is what makes you know human nature

00:39:19 --> 00:39:24
versus orangutan nature versus scat

00:39:21 --> 00:39:25
nature

00:39:23 --> 00:39:28
so for example

00:39:24 --> 00:39:29
uh you know our basal ganglia drives us

00:39:27 --> 00:39:31
to

00:39:28 --> 00:39:33
seek the company of

00:39:30 --> 00:39:35
other humans

00:39:32 --> 00:39:37
and that's because nature has figured

00:39:34 --> 00:39:38
out that we need to be social animals

00:39:36 --> 00:39:40
for our species to survive and it's true

00:39:37 --> 00:39:42
of many

00:39:39 --> 00:39:44
primates

00:39:41 --> 00:39:46
it's not true orangutons orangutans are

00:39:43 --> 00:39:48
solitary animals um they don't seek the

00:39:45 --> 00:39:50
company of others in fact they avoid

00:39:47 --> 00:39:51
them

00:39:49 --> 00:39:52
in fact they scream at them when they

00:39:50 --> 00:39:53
come too close because they're

00:39:51 --> 00:39:56
territorial

00:39:52 --> 00:39:57
because for for their survival you know

00:39:55 --> 00:39:59
uh evolution has figured out that's the

00:39:56 --> 00:40:00
best thing

00:39:58 --> 00:40:03
i mean they're occasionally social of

00:39:59 --> 00:40:05
course for you know

00:40:02 --> 00:40:07
reproduction and stuff like that but um

00:40:04 --> 00:40:09
but but they're mostly solitary so

00:40:06 --> 00:40:11
all of those behaviors are not part

00:40:08 --> 00:40:12
of intelligence you know people say oh

00:40:10 --> 00:40:13
you're never going to have intelligent

00:40:11 --> 00:40:15
machines because you know human

00:40:12 --> 00:40:17
intelligence is social but then you look

00:40:14 --> 00:40:19
at orangutans you look at octopus

00:40:16 --> 00:40:21
never know their parents

00:40:18 --> 00:40:23
they barely interact with any other and

00:40:20 --> 00:40:25
they get to be really smart in less

00:40:22 --> 00:40:27
than less than a year in like half a

00:40:24 --> 00:40:28
year

00:40:26 --> 00:40:31
you know in a year they're adults in two

00:40:27 --> 00:40:33
years they're dead so

00:40:30 --> 00:40:35
there are things that we think

00:40:32 --> 00:40:37
as humans are intimately linked with

00:40:34 --> 00:40:40
intelligence like

00:40:36 --> 00:40:43
social interaction like language

00:40:39 --> 00:40:45
we think i think we give way too much

00:40:42 --> 00:40:47
importance to language as a substrate of

00:40:44 --> 00:40:49
intelligence as humans

00:40:46 --> 00:40:52
because we think our reasoning is so

00:40:48 --> 00:40:54
linked with language so for to solve the

00:40:51 --> 00:40:56
house cat intelligence problem you think

00:40:53 --> 00:40:57
you could do it on a desert island you

00:40:55 --> 00:40:59
could have pretty much you could just

00:40:56 --> 00:41:01
have a cat sitting there

00:40:58 --> 00:41:03
um

00:41:00 --> 00:41:06
looking at the waves that the ocean

00:41:02 --> 00:41:08
weighs and figure a lot of it out it

00:41:05 --> 00:41:10
needs to have sort of you know the right

00:41:07 --> 00:41:12
set of drives

00:41:09 --> 00:41:13
uh to kind of

00:41:11 --> 00:41:15
you know get it to do the thing and

00:41:12 --> 00:41:16
learn the appropriate things right but

00:41:14 --> 00:41:18
uh

00:41:16 --> 00:41:21
like for example you know

00:41:17 --> 00:41:23
baby humans are driven to

00:41:20 --> 00:41:25
learn to stand up and walk

00:41:22 --> 00:41:27
okay you know it's not that's kind of

00:41:24 --> 00:41:29
this desire is hard-wired how to do it

00:41:26 --> 00:41:31
precisely is not that's learned

00:41:28 --> 00:41:33
but the desire to to walk move around

00:41:30 --> 00:41:35
and stand up

00:41:32 --> 00:41:37
that's sort of

00:41:34 --> 00:41:39
probably hardwired it's very simple to

00:41:36 --> 00:41:42
hardwire this kind of stuff

00:41:38 --> 00:41:44
oh like the desire to well

00:41:41 --> 00:41:46
that's interesting you're hardwired to

00:41:43 --> 00:41:48
want to walk

00:41:45 --> 00:41:50
that's not a

00:41:47 --> 00:41:51
there's got to be a deeper need for

00:41:49 --> 00:41:53
walking

00:41:50 --> 00:41:55
i think it was probably socially imposed

00:41:52 --> 00:41:56
by society that you need to walk all the

00:41:54 --> 00:41:58
other bipedal

00:41:56 --> 00:42:01
ike a lot of simple animals that you

00:41:57 --> 00:42:03
know would probably work without ever

00:42:00 --> 00:42:06
watching any other members of the

00:42:02 --> 00:42:08
species it seems like a scary thing to

00:42:05 --> 00:42:11
have to do because you suck it by peter

00:42:07 --> 00:42:12
walking at first it seems crawling is

00:42:10 --> 00:42:14
much safer

00:42:11 --> 00:42:16
much more

00:42:13 --> 00:42:18
like why are you in a hurry

00:42:15 --> 00:42:21
well because because you have this thing

00:42:17 --> 00:42:25
that drives you to do it you know um

00:42:20 --> 00:42:26
which is sort of part of uh the sort of

00:42:24 --> 00:42:29
human development is that understood

00:42:25 --> 00:42:30
actually what not entirely no what is

00:42:28 --> 00:42:32
what's the reason to get on two feet

00:42:29 --> 00:42:34
it's really hard like most animals don't

00:42:31 --> 00:42:36
get on two feet well they get on four

00:42:33 --> 00:42:38
feet you know many mammals get on four

00:42:35 --> 00:42:39
feet yeah they very quickly some of them

00:42:37 --> 00:42:42
extremely quickly

00:42:38 --> 00:42:43
but i don't you know like from the last

00:42:41 --> 00:42:44
ime i've interacted with the table

00:42:42 --> 00:42:46
that's much more stable than the thing

00:42:43 --> 00:42:48
then two legs it's just a really hard

00:42:45 --> 00:42:50
problem yeah how many birds have figured

00:42:47 --> 00:42:52
it out with two feet

00:42:49 --> 00:42:54
well technically we can go into ontology

00:42:51 --> 00:42:55
they have four

00:42:53 --> 00:42:57
i guess they have two feet they have two

00:42:54 --> 00:42:59
feet chickens

00:42:56 --> 00:43:02
you know dinosaurs had two feet many of

00:42:58 --> 00:43:04
them allegedly

00:43:01 --> 00:43:06
i'm just now learning that t-rex was

00:43:03 --> 00:43:08
eating grass not other animals t-rex

00:43:05 --> 00:43:11
might have been a friendly

00:43:07 --> 00:43:13
pet what do you think about uh

00:43:10 --> 00:43:15
i don't know if you looked at

00:43:12 --> 00:43:17
he test for general intelligence that

00:43:14 --> 00:43:19
francois chile put together i don't know

00:43:16 --> 00:43:20
if you got a chance to look at that kind

00:43:18 --> 00:43:22
of thing like

00:43:19 --> 00:43:25
what's your intuition about how to solve

00:43:21 --> 00:43:26
like an iq type of test i don't know i

00:43:24 --> 00:43:29
think it's so outside of my radar screen

00:43:26 --> 00:43:31
that it's not really

00:43:28 --> 00:43:34
relevant i think in the short term

00:43:30 --> 00:43:37
well i guess one way to ask another way

00:43:33 --> 00:43:39
perhaps more closer to what

00:43:36 --> 00:43:43
o your work is like how do you solve

00:43:38 --> 00:43:45
mnist uh with very little example data

00:43:42 --> 00:43:46
that's right and that's the answer to

00:43:44 --> 00:43:48
this probably is supervised running just

00:43:45 --> 00:43:49
learn to represent images and then

00:43:47 --> 00:43:50
learning

00:43:48 --> 00:43:51
uh

00:43:49 --> 00:43:53
you know to recognize handwritten digits

00:43:50 --> 00:43:56
on top of this will only require a few

00:43:52 --> 00:43:58
samples and we observe this in humans

00:43:55 --> 00:44:00
right you you show a young child a

00:43:58 --> 00:44:02
picture book with a couple pictures of

00:44:00 --> 00:44:04
an elephant and that's it

00:44:01 --> 00:44:07
he child knows what an elephant is and

00:44:04 --> 00:44:08
we we see this today with practical

00:44:06 --> 00:44:09
systems that we

00:44:07 --> 00:44:11
you know we train image recognition

00:44:08 --> 00:44:12
systems with

00:44:10 --> 00:44:15
uh

00:44:11 --> 00:44:16
enormous amounts of of images either

00:44:14 --> 00:44:19
completely self-supervised or

00:44:15 --> 00:44:20
very weakly supervised for example

00:44:18 --> 00:44:21
you can

00:44:19 --> 00:44:22
train a

00:44:20 --> 00:44:24
neural net to predict uh whatever

00:44:21 --> 00:44:26
hashtag people type on instagram right

00:44:23 --> 00:44:27
hen you can do this with billions of

00:44:25 --> 00:44:29
images because there's billions per day

00:44:26 --> 00:44:30
that are showing up

00:44:28 --> 00:44:31
so the

00:44:29 --> 00:44:33
amount of training data there is

00:44:30 --> 00:44:34
essentially unlimited

00:44:32 --> 00:44:35
and then you take the output

00:44:33 --> 00:44:37
representation

00:44:34 --> 00:44:38
you know a couple layers down from the

00:44:36 --> 00:44:40
output

00:44:37 --> 00:44:42
of what the system learned

00:44:39 --> 00:44:44
and feed this as input to a classifier

00:44:41 --> 00:44:46
for any object in the world that you

00:44:43 --> 00:44:48
want and it works pretty well so that's

00:44:45 --> 00:44:50
transfer learning okay

00:44:47 --> 00:44:52
or weekly supervised

00:44:49 --> 00:44:53
transfer learning uh

00:44:51 --> 00:44:55
people are making very very fast

00:44:52 --> 00:44:57
progress using self-supervised running

00:44:54 --> 00:44:58
uh for for with this kind of scenario as

00:44:56 --> 00:45:01
well

00:44:57 --> 00:45:03
um and you know my guess is that that's

00:45:00 --> 00:45:05
gonna be the future for

00:45:02 --> 00:45:08
self-supervised learning how much

00:45:04 --> 00:45:11
cleaning do you think is needed for

00:45:07 --> 00:45:13
filtering um

00:45:10 --> 00:45:15
uh malicious signal or what's a better

00:45:12 --> 00:45:17
m but like a lot of people use

00:45:14 --> 00:45:20
hashtags on instagram

00:45:16 --> 00:45:22
to uh get like good seo

00:45:19 --> 00:45:23
that doesn't fully represent the

00:45:21 --> 00:45:25
contents of the image

00:45:22 --> 00:45:28
like they'll put a picture of a cat and

00:45:24 --> 00:45:30
hashtag it would like science awesome

00:45:27 --> 00:45:32
fun i don't know all kind of

00:45:29 --> 00:45:34
why would you put science that's not

00:45:31 --> 00:45:36
very good seo the way the way my

00:45:33 --> 00:45:37
colleagues who worked on this project at

00:45:35 --> 00:45:39
uh

00:45:36 --> 00:45:42
at facebook now meta meta

00:45:38 --> 00:45:43
few years ago uh dealt with this is

00:45:41 --> 00:45:45
that they only selected something like

00:45:42 --> 00:45:49
17 000 tags that correspond to kind of

00:45:44 --> 00:45:51
physical things or or situations like

00:45:48 --> 00:45:53
you know that has some visual content

00:45:50 --> 00:45:55
um

00:45:52 --> 00:45:57
so you know

00:45:54 --> 00:45:57
you wouldn't have like tbt or anything

00:45:56 --> 00:46:01
like that

00:45:56 --> 00:46:02
also they keep a very select set of

00:46:00 --> 00:46:04
hashtags is what you're saying yeah okay

00:46:02 --> 00:46:08
but it's still instead on the order of

00:46:03 --> 00:46:09
uh you know 10 to 20 000 so it's fairly

00:46:07 --> 00:46:11
large okay

00:46:08 --> 00:46:12
can you uh tell me about data

00:46:10 --> 00:46:16
ugmentation what the heck is data

00:46:12 --> 00:46:18
ugmentation and how is it used maybe

00:46:15 --> 00:46:19
contrast of learning

00:46:17 --> 00:46:21
for uh

00:46:18 --> 00:46:23
for video what are some cool ideas here

00:46:20 --> 00:46:25
right so data augmentation i mean first

00:46:22 --> 00:46:27
data augmentation you know is the idea

00:46:24 --> 00:46:29
of artificially increasing the size of

00:46:26 --> 00:46:31
your training set by distorting the

00:46:28 --> 00:46:33
images that you have in ways that don't

00:46:30 --> 00:46:34
change the nature of the image right so

00:46:32 --> 00:46:36
you take you you're doing this you can

00:46:34 --> 00:46:38
do data augmentation on any list and

00:46:35 --> 00:46:40
people have done this since the 1990s

00:46:37 --> 00:46:42
right you take a in this digit and you

00:46:39 --> 00:46:44
shift it a little bit or you

00:46:41 --> 00:46:46
change the size or

00:46:43 --> 00:46:49
otate it skew it

00:46:45 --> 00:46:51
you know etc add noise

00:46:48 --> 00:46:53
etc and it it works better if

00:46:50 --> 00:46:54
you train a supervised classifier with

00:46:52 --> 00:46:56
augmented data you're going to get

00:46:53 --> 00:46:59
better results

00:46:55 --> 00:47:03
now it's become really interesting over

00:46:58 --> 00:47:05
the last couple years because

00:47:02 --> 00:47:07
a lot of supervised learning techniques

00:47:04 --> 00:47:08
to pre-train vision systems are based on

00:47:06 --> 00:47:10
data augmentation

00:47:07 --> 00:47:12
and the

00:47:09 --> 00:47:14
basic techniques is originally

00:47:11 --> 00:47:15
inspired by uh

00:47:13 --> 00:47:17
techniques that

00:47:14 --> 00:47:18
i worked on in the early 90s and jeff

00:47:16 --> 00:47:20
intern worked on also in the early 90s

00:47:17 --> 00:47:22
there was sort of parallel

00:47:19 --> 00:47:24
work i used to call this siamese network

00:47:21 --> 00:47:26
so basically you take

00:47:23 --> 00:47:28
two identical copies of the same network

00:47:25 --> 00:47:31
they share the same weights

00:47:27 --> 00:47:32
and you show two

00:47:30 --> 00:47:34
different views of the same object

00:47:31 --> 00:47:36
either those two different views may

00:47:33 --> 00:47:37
have been obtained by data augmentation

00:47:35 --> 00:47:40
or maybe it's two different views of the

00:47:36 --> 00:47:41
same scene from a camera that you moved

00:47:39 --> 00:47:43
or at different times or something like

00:47:40 --> 00:47:45
that right or two pictures of the same

00:47:42 --> 00:47:47
person things like that

00:47:44 --> 00:47:49
and then you train this neural net those

00:47:46 --> 00:47:51
two identical copies of this neural net

00:47:48 --> 00:47:53
o produce an output representation a

00:47:50 --> 00:47:54
vector

00:47:52 --> 00:47:56
in such a way that the representation

00:47:53 --> 00:47:57
for those two

00:47:55 --> 00:47:59
images

00:47:56 --> 00:48:01
are as close to each other as possible

00:47:58 --> 00:48:03
as identical to each other as possible

00:48:00 --> 00:48:06
right because you want the system to

00:48:02 --> 00:48:07
basically learn a function that will

00:48:05 --> 00:48:09
be invariant that will not

00:48:06 --> 00:48:10
change whose output will not change when

00:48:08 --> 00:48:12
you transform those

00:48:09 --> 00:48:14
inputs uh in in those in those

00:48:11 --> 00:48:16
particular ways right

00:48:13 --> 00:48:18
so that's easy to do

00:48:15 --> 00:48:19
what's complicated is how do you make

00:48:17 --> 00:48:21
sure that when you show two images that

00:48:18 --> 00:48:22
are different the system will produce

00:48:20 --> 00:48:24
different things

00:48:21 --> 00:48:26
because if you don't

00:48:23 --> 00:48:29
have a specific provision for this

00:48:26 --> 00:48:30
the system will just ignore the input

00:48:28 --> 00:48:31
when you train it it will end up

00:48:29 --> 00:48:33
ignoring the input and just produce a

00:48:30 --> 00:48:34
constant vector that is the same for

00:48:32 --> 00:48:36
every input right yes that's called a

00:48:33 --> 00:48:37
collapse

00:48:35 --> 00:48:39
now how do you avoid collapse so there's

00:48:36 --> 00:48:41
two ideas

00:48:38 --> 00:48:44
one idea that i proposed in the early

00:48:40 --> 00:48:47
90s with my colleagues at bell labs jane

00:48:43 --> 00:48:49
bromley and a couple other people

00:48:46 --> 00:48:50
which we now call contrastive learning

00:48:48 --> 00:48:52
which is to have negative examples right

00:48:49 --> 00:48:55
so you have pairs

00:48:51 --> 00:48:57
of images that you know are different

00:48:54 --> 00:48:59
and you show them to the network and

00:48:56 --> 00:49:00
uh those two copies and then you you

00:48:58 --> 00:49:01
push the two output vectors away from

00:48:59 --> 00:49:03
each other

00:49:00 --> 00:49:05
and they will eventually guarantee that

00:49:02 --> 00:49:07
hings that are semantically similar

00:49:04 --> 00:49:08
produce similar representations and

00:49:06 --> 00:49:11
things that are different produce

00:49:07 --> 00:49:13
different representations

00:49:10 --> 00:49:15
we actually came up with this idea for a

00:49:12 --> 00:49:18
project of doing signature verification

00:49:14 --> 00:49:20
so we would collect signature

00:49:17 --> 00:49:21
s from like multiple signatures

00:49:19 --> 00:49:22
on the same person and then train a

00:49:20 --> 00:49:24
neural net to produce the same

00:49:21 --> 00:49:25
representation

00:49:23 --> 00:49:26
and then uh

00:49:24 --> 00:49:28
you know

00:49:25 --> 00:49:31
force the system to produce different

00:49:27 --> 00:49:33
representations for different signatures

00:49:30 --> 00:49:35
this was actually the the problem was

00:49:32 --> 00:49:37
proposed by people from uh what was a

00:49:34 --> 00:49:39
subsidiary of atnt at the time called

00:49:36 --> 00:49:41
ncr

00:49:38 --> 00:49:43
and they were interested in storing a

00:49:40 --> 00:49:45
representation of the signature on the

00:49:42 --> 00:49:47
80 bytes of the

00:49:44 --> 00:49:49
magnetic strip of a credit card so we

00:49:46 --> 00:49:51
came up with this idea of having a

00:49:48 --> 00:49:52
neural net with 80 outputs

00:49:50 --> 00:49:54
you know that we would quantize on bytes

00:49:51 --> 00:49:55
o so that we could encode the

00:49:53 --> 00:49:57
and that encoding was then used to

00:49:54 --> 00:49:59
compare whether the signature matches or

00:49:56 --> 00:49:59
not that's right so then you would you

00:49:58 --> 00:50:01
know

00:49:58 --> 00:50:02
sign you would run through the neural

00:50:00 --> 00:50:04
net and then you would compare the

00:50:01 --> 00:50:05
output vector to whatever is stored on

00:50:03 --> 00:50:09
your card it actually worked

00:50:04 --> 00:50:09
it worked but they ended up not using it

00:50:08 --> 00:50:14
because nobody cares actually i mean the

00:50:11 --> 00:50:15
american you know financial payment

00:50:13 --> 00:50:17
system is

00:50:14 --> 00:50:20
incredibly lags in that respect compared

00:50:16 --> 00:50:21
to europe oh with the signatures what's

00:50:19 --> 00:50:23
the purpose of signatures anyway this is

00:50:20 --> 00:50:27
very nobody looks at them nobody cares

00:50:22 --> 00:50:28
yeah it's uh yeah yeah no so so that

00:50:26 --> 00:50:30
's contrastive learning right so you

00:50:27 --> 00:50:32
need positive and negative pairs and the

00:50:29 --> 00:50:34
problem with that is that

00:50:31 --> 00:50:35
you know even though i at the original

00:50:33 --> 00:50:37
paper on this

00:50:34 --> 00:50:39
i'm actually not very positive about it

00:50:36 --> 00:50:40
because it doesn't work in high

00:50:38 --> 00:50:43
dimension if your presentation is high

00:50:39 --> 00:50:45
dimensional there's just too many ways

00:50:42 --> 00:50:46
for two things to be different

00:50:44 --> 00:50:49
and and so you would need lots and lots

00:50:45 --> 00:50:51
of negative pairs

00:50:48 --> 00:50:53
o there is a particular implementation

00:50:50 --> 00:50:56
of this which is relatively recent from

00:50:52 --> 00:50:58
actually the google toronto group

00:50:55 --> 00:51:00
uh where you know jeff intern is the

00:50:57 --> 00:51:03
senior member there it's called sim

00:50:59 --> 00:51:04
clear sim clr

00:51:02 --> 00:51:06
and you know basically a particular way

00:51:03 --> 00:51:08
of implementing this idea of contracting

00:51:05 --> 00:51:09
running the particular objective

00:51:07 --> 00:51:10
function

00:51:08 --> 00:51:12
ow

00:51:09 --> 00:51:14
hat i'm much more

00:51:11 --> 00:51:16
nthusiastic about these days is

00:51:13 --> 00:51:18
non-contrasting methods so other ways to

00:51:15 --> 00:51:19
guarantee that

00:51:17 --> 00:51:20
uh

00:51:18 --> 00:51:21
the

00:51:19 --> 00:51:23
representations would be different for

00:51:20 --> 00:51:25
different

00:51:22 --> 00:51:28
inputs

00:51:24 --> 00:51:30
and it's actually based on an idea that

00:51:27 --> 00:51:32
jeff intern proposed in the early 90s

00:51:29 --> 00:51:34
with a student at the time sue becker

00:51:31 --> 00:51:35
and it's based on the idea of maximizing

00:51:33 --> 00:51:37
the mutual information between the

00:51:34 --> 00:51:39
outputs of the two systems you only show

00:51:36 --> 00:51:41
positive pairs you only show pairs of

00:51:38 --> 00:51:42
images that you know are somewhat

00:51:40 --> 00:51:44
similar

00:51:41 --> 00:51:45
and you train the two networks to be

00:51:43 --> 00:51:47
informative

00:51:44 --> 00:51:49
but also to be

00:51:46 --> 00:51:51
as informative

00:51:48 --> 00:51:53
of each other as possible so basically

00:51:50 --> 00:51:55
one representation has to be predictable

00:51:52 --> 00:51:58
from the other essentially

00:51:54 --> 00:51:59
uh and you know he proposed that idea

00:51:57 --> 00:52:01
had you know

00:51:58 --> 00:52:03
a couple papers in the early 90s and

00:52:00 --> 00:52:05
then nothing was done about it for

00:52:02 --> 00:52:08
decades and i kind of revived this idea

00:52:04 --> 00:52:09
together with my postdocs at fair

00:52:07 --> 00:52:12
uh particularly a postdoc called

00:52:08 --> 00:52:16
stefanoni who's now a junior professor

00:52:11 --> 00:52:18
in in finland at university of alto

00:52:15 --> 00:52:20
we came up with something called that we

00:52:17 --> 00:52:22
call barlow twins

00:52:19 --> 00:52:25
and it's a particular way of maximizing

00:52:21 --> 00:52:27
the information content of

00:52:24 --> 00:52:29
a vector you know using some

00:52:26 --> 00:52:32
hypotheses

00:52:28 --> 00:52:33
and we have kind of a

00:52:31 --> 00:52:35
nother version of it that's more recent

00:52:32 --> 00:52:37
now called vikreg vic reg that that

00:52:34 --> 00:52:39
means variance in variance covariance

00:52:36 --> 00:52:41
regularization and i'm it's the thing

00:52:38 --> 00:52:43
i'm the most excited about in machine

00:52:40 --> 00:52:44
learning in the last 15 years i mean i'm

00:52:42 --> 00:52:47
not i'm really really excited about

00:52:43 --> 00:52:49
his what uh kind of data augmentation

00:52:46 --> 00:52:51
is useful for that non-contrasting

00:52:48 --> 00:52:52
learning method

00:52:50 --> 00:52:55
are we talking about does that not

00:52:51 --> 00:52:57
matter that much or it seems like a very

00:52:54 --> 00:52:59
important part of the step yeah how you

00:52:56 --> 00:53:01
generate the images that are similar but

00:52:58 --> 00:53:02
sufficiently different yeah that's right

00:53:00 --> 00:53:04
it's an important step and it's also an

00:53:01 --> 00:53:07
noying step because you need to have

00:53:03 --> 00:53:09
that knowledge of what the augmentation

00:53:06 --> 00:53:11
you can do that do not change the nature

00:53:08 --> 00:53:12
of the of the object

00:53:10 --> 00:53:14
and so

00:53:11 --> 00:53:15
the standard scenario which you know a

00:53:13 --> 00:53:19
lot of people working in this area are

00:53:14 --> 00:53:20
using is you use uh the the type of

00:53:18 --> 00:53:22
distortion

00:53:19 --> 00:53:24
so so basically you do geometric

00:53:21 --> 00:53:25
distortion so one basically just shifts

00:53:23 --> 00:53:27
the image a little bit it's called

00:53:24 --> 00:53:29
crabbing another one kind of changes the

00:53:26 --> 00:53:31
scale a little bit another one kind of

00:53:28 --> 00:53:33
rotates it another one changes the

00:53:30 --> 00:53:35
colors you know you can do a shift in

00:53:32 --> 00:53:37
color balance or something like that

00:53:34 --> 00:53:39
uh saturation another one sort of blurs

00:53:36 --> 00:53:41
it another one adds noise so you have

00:53:38 --> 00:53:43
like a catalog of kind of standard

00:53:40 --> 00:53:45
things and people try to use the same

00:53:42 --> 00:53:46
ones for different algorithms so that

00:53:44 --> 00:53:48
hey can compare

00:53:45 --> 00:53:49
but some algorithms uh some cell

00:53:47 --> 00:53:51
supervisor algorithm actually can deal

00:53:48 --> 00:53:53
with much bigger

00:53:50 --> 00:53:55
like more aggressive data augmentation

00:53:52 --> 00:53:56
and some don't so

00:53:54 --> 00:53:58
that kind of makes the whole thing

00:53:55 --> 00:54:00
difficult but but that's the kind of

00:53:57 --> 00:54:03
distortions we're talking about and

00:53:59 --> 00:54:04
so you you you you train with those

00:54:02 --> 00:54:06
distortions

00:54:03 --> 00:54:08
and then uh you

00:54:05 --> 00:54:11
chop off the last layer a couple

00:54:07 --> 00:54:13
layers of the of the network

00:54:10 --> 00:54:16
and you use the representation as input

00:54:12 --> 00:54:17
o a classifier you train the classifier

00:54:15 --> 00:54:19
um

00:54:16 --> 00:54:21
on imagenet let's say or whatever and

00:54:18 --> 00:54:22
measure the performance

00:54:20 --> 00:54:24
and

00:54:21 --> 00:54:26
interestingly enough the methods that

00:54:23 --> 00:54:28
are really good at eliminating the

00:54:25 --> 00:54:30
information that is irrelevant which is

00:54:27 --> 00:54:33
the distortions between those images

00:54:29 --> 00:54:35
do a good job at eliminating it

00:54:32 --> 00:54:37
and uh as a consequence you cannot use

00:54:34 --> 00:54:39
those the representations in those

00:54:36 --> 00:54:41
systems for things like object detection

00:54:38 --> 00:54:43
and localization because that

00:54:40 --> 00:54:45
information is gone

00:54:42 --> 00:54:46
so the type of data augmentation you

00:54:44 --> 00:54:48
need to do depends on the task you want

00:54:45 --> 00:54:50
eventually

00:54:47 --> 00:54:51
the system to to solve and the type of

00:54:49 --> 00:54:53
data augmentation standard data

00:54:50 --> 00:54:55
determination that we use today are only

00:54:52 --> 00:54:57
appropriate for object recognition or

00:54:54 --> 00:54:58
image classification they're not

00:54:56 --> 00:55:00
appropriate for things like can you help

00:54:58 --> 00:55:02
me out understand what uh why the

00:54:59 --> 00:55:04
localization is so you're saying it's

00:55:01 --> 00:55:05
just not good at the negative

00:55:03 --> 00:55:06
uh like

00:55:04 --> 00:55:08
classifying the negative so that's why

00:55:05 --> 00:55:11
it can't be used for the localization no

00:55:08 --> 00:55:13
it's just that you train the system

00:55:10 --> 00:55:14
you know you you you give it an image

00:55:12 --> 00:55:16
and then you give it the same image

00:55:13 --> 00:55:18
shifted and scaled and you tell it

00:55:15 --> 00:55:20
hat's the same image

00:55:17 --> 00:55:21
so the system basically is trained to

00:55:19 --> 00:55:22
eliminate the information about position

00:55:20 --> 00:55:24
and size

00:55:21 --> 00:55:26
so now

00:55:23 --> 00:55:27
and now you want to use that oh yeah

00:55:25 --> 00:55:29
like figure out where an object is and

00:55:26 --> 00:55:32
what size is like a bounding box like to

00:55:28 --> 00:55:34
be able to actually okay it can still

00:55:31 --> 00:55:36
find it can still find the object in the

00:55:33 --> 00:55:38
image it's just not very good at finding

00:55:35 --> 00:55:39
the exact boundaries of that object

00:55:37 --> 00:55:41
interesting

00:55:38 --> 00:55:43
which

00:55:40 --> 00:55:45
you know that's an interesting sort of

00:55:42 --> 00:55:47
philosophical question how important how

00:55:44 --> 00:55:50
important is object localization anyway

00:55:46 --> 00:55:52
we're like obsessed by measuring like

00:55:49 --> 00:55:54
image segmentation

00:55:51 --> 00:55:56
obsessed by measuring perfectly knowing

00:55:53 --> 00:55:58
the boundaries of objects when

00:55:55 --> 00:56:00
arguably

00:55:57 --> 00:56:02
that's not

00:55:59 --> 00:56:04
hat essential to understanding what are

00:56:02 --> 00:56:06
the contents of the scene

00:56:03 --> 00:56:09
on the other hand i think evolutionarily

00:56:05 --> 00:56:11
the first vision systems in animals were

00:56:08 --> 00:56:13
basically all about localization very

00:56:10 --> 00:56:15
little about recognition

00:56:12 --> 00:56:17
and in the human brain you have two

00:56:14 --> 00:56:20
separate pathways for

00:56:16 --> 00:56:21
ecognizing the nature of a scene an

00:56:19 --> 00:56:24
object

00:56:20 --> 00:56:26
and localizing objects so you use the

00:56:23 --> 00:56:26
first pathway called a ventral pathway

00:56:25 --> 00:56:29
for

00:56:26 --> 00:56:31
you know telling what you're looking at

00:56:28 --> 00:56:34
he other path for the dorsal pathway is

00:56:30 --> 00:56:36
used for navigation for grasping for

00:56:33 --> 00:56:37
everything else and you know basically a

00:56:35 --> 00:56:39
lot of the things you need for survival

00:56:36 --> 00:56:42
are

00:56:38 --> 00:56:42
localization and detection

00:56:41 --> 00:56:47
is similarity learning or contrast of

00:56:44 --> 00:56:48
learning are these non-contrastive

00:56:46 --> 00:56:49
methods the same as understanding

00:56:47 --> 00:56:51
something

00:56:48 --> 00:56:53
just because you know a distorted cat is

00:56:50 --> 00:56:55
the same as a non-distorted cat does

00:56:52 --> 00:56:57
that mean you understand

00:56:54 --> 00:56:59
what it means to be a cat

00:56:56 --> 00:57:01
o some extent i mean it's a superficial

00:56:58 --> 00:57:03
understanding obviously but like what is

00:57:00 --> 00:57:04
the ceiling of this method do you think

00:57:02 --> 00:57:06
is this just one

00:57:03 --> 00:57:09
trick on the path to

00:57:05 --> 00:57:10
doing cell supervised learning can we go

00:57:08 --> 00:57:12
yeah really really far

00:57:09 --> 00:57:15
i think we can go really far so if we

00:57:11 --> 00:57:17
figure out how to

00:57:14 --> 00:57:18
uh use techniques of that type perhaps

00:57:16 --> 00:57:20
very different but you know the

00:57:18 --> 00:57:21
signature

00:57:19 --> 00:57:23
to

00:57:20 --> 00:57:26
train a system from from video to do

00:57:22 --> 00:57:29
video prediction essentially

00:57:25 --> 00:57:31
i think we'll have a path um you know

00:57:28 --> 00:57:32
towards uh

00:57:30 --> 00:57:35
you know i wouldn't say unlimited but

00:57:31 --> 00:57:36
a path towards some level of

00:57:34 --> 00:57:38
uh

00:57:35 --> 00:57:42
you know physical common sense in

00:57:37 --> 00:57:43
machines and i also think that um

00:57:41 --> 00:57:46
that

00:57:42 --> 00:57:48
ability to learn how the world works

00:57:45 --> 00:57:50
from a sort of high throughput channel

00:57:47 --> 00:57:55
ike like vision

00:57:49 --> 00:57:56
is a necessary step towards uh sort of

00:57:54 --> 00:57:59
real artificial intelligence in other

00:57:55 --> 00:58:00
words i believe in ground intelligence i

00:57:58 --> 00:58:02
don't think we can train a machine to be

00:57:59 --> 00:58:04
intelligent purely from text

00:58:02 --> 00:58:05
because i think the amount of

00:58:03 --> 00:58:09
information about the world that's

00:58:04 --> 00:58:12
contained in text is tiny compared to

00:58:08 --> 00:58:14
what we need to know

00:58:11 --> 00:58:16
so for example let's uh and you know

00:58:13 --> 00:58:18
people have attempted to do this for for

00:58:15 --> 00:58:20
30 years right the psych project and

00:58:17 --> 00:58:21
things like that right of basically kind

00:58:19 --> 00:58:23
of writing down all the facts that are

00:58:20 --> 00:58:24
known and

00:58:22 --> 00:58:26
hoping that some some sort of common

00:58:23 --> 00:58:28
sense will emerge um i think it's

00:58:25 --> 00:58:30
basically hopeless but let me take an

00:58:27 --> 00:58:32
example you take an object

00:58:29 --> 00:58:34
i i describe the situation to you i take

00:58:31 --> 00:58:37
an object i put it on the table and i

00:58:33 --> 00:58:38
push the table it's completely obvious

00:58:36 --> 00:58:40
to you that the object will be pushed

00:58:37 --> 00:58:42
with the table right because it's

00:58:39 --> 00:58:44
itting on it

00:58:41 --> 00:58:45
here's no text in the world i believe

00:58:43 --> 00:58:46
that explains this

00:58:44 --> 00:58:48
and so

00:58:45 --> 00:58:53
if you train a machine as powerful as it

00:58:47 --> 00:58:55
could be you know your gpt 5000

00:58:52 --> 00:58:57
or whatever it is it's never going to

00:58:54 --> 00:59:00
learn about this

00:58:56 --> 00:59:01
um that information is just not is not

00:58:59 --> 00:59:03
present in any text

00:59:00 --> 00:59:05
well the question like with the psyc

00:59:02 --> 00:59:07
project the dream i think is to have

00:59:04 --> 00:59:08
like

00:59:06 --> 00:59:11
10 million

00:59:08 --> 00:59:14
say facts like that

00:59:10 --> 00:59:16
give you a head start

00:59:13 --> 00:59:18
like a parent guiding you

00:59:15 --> 00:59:20
now we humans don't need a parent to

00:59:17 --> 00:59:21
tell us that the table will move uh

00:59:19 --> 00:59:22
sorry the smartphone will move with the

00:59:20 --> 00:59:23
table

00:59:21 --> 00:59:26
but

00:59:22 --> 00:59:28
we get a lot of guidance in other ways

00:59:25 --> 00:59:30
o it's possible that we can give it a

00:59:27 --> 00:59:31
quick shortcut what about cat the guy

00:59:29 --> 00:59:34
knows that

00:59:30 --> 00:59:36
no but they evolved so

00:59:33 --> 00:59:39
no they learn like us

00:59:35 --> 00:59:40
the the sorry the physics of stuff

00:59:38 --> 00:59:42
well

00:59:39 --> 00:59:43
yeah so you're saying it's

00:59:41 --> 00:59:45
uh

00:59:42 --> 00:59:48
see you're putting a lot of intelligence

00:59:44 --> 00:59:50
onto the nurture side not the nature yes

00:59:47 --> 00:59:52
we seem to have um

00:59:49 --> 00:59:54
you know there's a very inefficient

00:59:51 --> 00:59:58
arguably process of evolution that got

00:59:53 --> 01:00:01
us from bacteria to who we are today

00:59:57 --> 01:00:02
started at the bottom now we're here so

01:00:00 --> 01:00:05
true uh

01:00:02 --> 01:00:07
the question is how okay so the question

01:00:04 --> 01:00:09
is how fundamental is that the the

01:00:06 --> 01:00:11
nature of the whole hardware

01:00:08 --> 01:00:12
and then

01:00:10 --> 01:00:14
is there any way to shortcut it if it's

01:00:11 --> 01:00:15
fundamental if it's not if it's most of

01:00:13 --> 01:00:18
intelligence most of the cool stuff

01:00:14 --> 01:00:20
we've been talking about is mostly

01:00:17 --> 01:00:22
nurture mostly trained we figure it out

01:00:19 --> 01:00:25
by observing the world we can form that

01:00:22 --> 01:00:27
uh big beautiful sexy background model

01:00:24 --> 01:00:29
that you're talking about just by

01:00:26 --> 01:00:32
sitting there

01:00:28 --> 01:00:34
then okay then you need to then like

01:00:31 --> 01:00:35
maybe

01:00:33 --> 01:00:37
uh

01:00:34 --> 01:00:38
it is all supervised learning all the

01:00:36 --> 01:00:40
way down

01:00:37 --> 01:00:42
so surprise learning site whatever it is

01:00:39 --> 01:00:44
that makes uh you know human

01:00:41 --> 01:00:46
intelligence different from other

01:00:43 --> 01:00:48
animals which you know a lot of people

01:00:45 --> 01:00:49
think is language and logical reasoning

01:00:47 --> 01:00:51
and this kind of stuff

01:00:48 --> 01:00:53
it cannot be that complicated because it

01:00:50 --> 01:00:55
only popped up in the last million years

01:00:52 --> 01:00:55
yeah

01:00:54 --> 01:00:58
and

01:00:54 --> 01:00:58
you know it it and it only involves you

01:00:57 --> 01:01:00
know

01:00:57 --> 01:01:01
less than one percent of our genome

01:00:59 --> 01:01:04
might be which is the difference between

01:01:00 --> 01:01:06
human genome and gyms or whatever

01:01:03 --> 01:01:07
so uh

01:01:05 --> 01:01:09
it can be that complicated you know it

01:01:06 --> 01:01:10
can be that fundamental i mean the most

01:01:08 --> 01:01:12
of the

01:01:09 --> 01:01:14
so complicated stuff already exist in

01:01:11 --> 01:01:16
cats and dogs and

01:01:13 --> 01:01:18
you know certainly primates non-human

01:01:15 --> 01:01:19
primates

01:01:17 --> 01:01:22
yeah that little thing with humans might

01:01:18 --> 01:01:24
be just uh something about social

01:01:21 --> 01:01:25
interaction and ability to maintain

01:01:23 --> 01:01:29
ideas across

01:01:24 --> 01:01:31
like a collective of people

01:01:28 --> 01:01:33
it's it sounds very dramatic and very

01:01:30 --> 01:01:34
impressive but it probably isn't

01:01:32 --> 01:01:37
mechanistically speaking it is but we're

01:01:33 --> 01:01:40
not there yet like you know we we have i

01:01:36 --> 01:01:44
mean this is number 634 you know in the

01:01:40 --> 01:01:46
list of problems to solve

01:01:43 --> 01:01:49
so basic physics of the world is is

01:01:46 --> 01:01:50
number one what do you um

01:01:48 --> 01:01:53
just a quick

01:01:49 --> 01:01:55
tangent on data augmentation so a lot of

01:01:52 --> 01:01:59
it is

01:01:54 --> 01:02:01
hard-coded versus learned

01:01:58 --> 01:02:03
o you have any intuition that maybe

01:02:00 --> 01:02:04
there could be some weird data

01:02:02 --> 01:02:06
ugmentation

01:02:03 --> 01:02:08
like generative type of data

01:02:05 --> 01:02:10
ugmentation like doing something weird

01:02:07 --> 01:02:12
to images which then

01:02:09 --> 01:02:14
improves the

01:02:11 --> 01:02:15
similarity learning process so not

01:02:13 --> 01:02:18
just kind of dumb

01:02:14 --> 01:02:19
simple distortions but

01:02:17 --> 01:02:21
by you shaking your head just saying

01:02:18 --> 01:02:23
that even simple distortions are enough

01:02:20 --> 01:02:27
i think no i think that augmentation is

01:02:22 --> 01:02:29
a temporary necessary evil

01:02:26 --> 01:02:30
so what people are working on now is is

01:02:28 --> 01:02:34
two things one is

01:02:30 --> 01:02:35
uh the type of self-supervisioning

01:02:33 --> 01:02:37
like trying to to translate the type of

01:02:34 --> 01:02:39
cell suppressant people using language

01:02:36 --> 01:02:42
translating these two images which is

01:02:38 --> 01:02:45
basically denoting autoencoder method

01:02:41 --> 01:02:48
right so you you take an image you you

01:02:44 --> 01:02:50
block you mask some parts of it

01:02:47 --> 01:02:52
and then you you train some giant neural

01:02:49 --> 01:02:54
net to reconstruct the parts that you've

01:02:51 --> 01:02:56
that are that are missing and

01:02:53 --> 01:02:58
until very recently

01:02:56 --> 01:03:00
there was no there was no working

01:02:57 --> 01:03:02
methods for that uh all the autoencoder

01:02:59 --> 01:03:04
type methods for images weren't

01:03:01 --> 01:03:06
producing very good representation but

01:03:03 --> 01:03:08
here's a paper now coming out of

01:03:05 --> 01:03:11
the fair group in menlo park that

01:03:07 --> 01:03:12
actually works very well so

01:03:10 --> 01:03:15
that doesn't require the documentation

01:03:11 --> 01:03:18
that requires only masking

01:03:14 --> 01:03:19
okay only masking for images

01:03:17 --> 01:03:21
uh

01:03:18 --> 01:03:23
okay right so you mask part of the image

01:03:20 --> 01:03:26
and you train a system which you know

01:03:22 --> 01:03:27
in this case is a transformer because

01:03:25 --> 01:03:30
you can you can

01:03:26 --> 01:03:32
the transformer represents the image as

01:03:29 --> 01:03:34
uh non-overlapping patches so it's easy

01:03:31 --> 01:03:36
to mask patches and things like that

01:03:33 --> 01:03:38
okay then my question transfers to that

01:03:35 --> 01:03:41
problem the masking like why should the

01:03:37 --> 01:03:42
mask be a square or rectangle so it

01:03:40 --> 01:03:44
doesn't matter like you know i think

01:03:41 --> 01:03:46
we're gonna come up probably in the

01:03:43 --> 01:03:48
future with sort of uh

01:03:46 --> 01:03:50
you know ways to mask that are is you

01:03:47 --> 01:03:52
know kind of

01:03:49 --> 01:03:54
random essentially well i mean they are

01:03:51 --> 01:03:57
random already but no no but like

01:03:53 --> 01:03:58
something that's challenging

01:03:56 --> 01:04:01
like

01:03:57 --> 01:04:03
optimally challenging so like i mean

01:04:00 --> 01:04:06
maybe it's a metaphor that doesn't apply

01:04:02 --> 01:04:08
but you're it seems like there's an data

01:04:05 --> 01:04:10
ugmentation or masking

01:04:07 --> 01:04:12
there's an interactive element with it

01:04:09 --> 01:04:13
like you're almost like playing with an

01:04:11 --> 01:04:15
image

01:04:12 --> 01:04:16
and like it's like the way we play with

01:04:14 --> 01:04:18
an image in our minds no but it's like

01:04:16 --> 01:04:20
dropout it's like boston machine

01:04:17 --> 01:04:22
training you um

01:04:19 --> 01:04:24
you know every every every time you see

01:04:21 --> 01:04:25
a percept

01:04:23 --> 01:04:26
you also

01:04:24 --> 01:04:30
you you can you can perturb it in some

01:04:26 --> 01:04:32
way and then uh the the principle of the

01:04:30 --> 01:04:34
training procedure

01:04:31 --> 01:04:35
is to minimize the difference of the

01:04:33 --> 01:04:38
output of the representation

01:04:34 --> 01:04:41
between the the clean version and the

01:04:37 --> 01:04:42
corrupted version essentially right and

01:04:40 --> 01:04:44
you you can do this in real time right

01:04:41 --> 01:04:47
so you know what's the machine work like

01:04:43 --> 01:04:48
this right you you you show a percept

01:04:46 --> 01:04:51
and you tell the machine that's a good

01:04:47 --> 01:04:52
combination of activities or your input

01:04:50 --> 01:04:56
neurons

01:04:51 --> 01:04:57
uh and then you either uh

01:04:55 --> 01:04:59
let them

01:04:56 --> 01:05:01
go their merry way without

01:04:58 --> 01:05:03
clamping them to values or you only do

01:05:00 --> 01:05:05
this with a subset yeah and what you're

01:05:02 --> 01:05:06
doing is you're training the system so

01:05:04 --> 01:05:08
that the

01:05:05 --> 01:05:10
stable state of the entire network

01:05:07 --> 01:05:12
is the same regardless of whether it

01:05:09 --> 01:05:14
sees the entire input or whether it is

01:05:11 --> 01:05:15
only part of it

01:05:13 --> 01:05:17
um you know the nozzling autoencoder

01:05:14 --> 01:05:19
method is basically the same thing right

01:05:16 --> 01:05:21
you you're you're training a system to

01:05:18 --> 01:05:23
reproduce the input the complete inputs

01:05:20 --> 01:05:25
and filling the blanks regardless of

01:05:22 --> 01:05:27
which which parts are missing and that's

01:05:24 --> 01:05:28
really the underlying principle and you

01:05:26 --> 01:05:30
could imagine sort of a even in the

01:05:27 --> 01:05:32
brain some sort of neural principle

01:05:29 --> 01:05:34
where you know neurons gonna

01:05:31 --> 01:05:36
oscillate right so they they take their

01:05:34 --> 01:05:37
activity and then temporarily they kind

01:05:35 --> 01:05:38
of shut off

01:05:36 --> 01:05:40
to

01:05:37 --> 01:05:41
you know force the rest of the system to

01:05:39 --> 01:05:42
basically

01:05:40 --> 01:05:45
reconstruct

01:05:42 --> 01:05:47
he input without their help you know

01:05:44 --> 01:05:49
and and and

01:05:46 --> 01:05:51
i mean you could imagine you know you

01:05:48 --> 01:05:52
know more or less biologically possible

01:05:50 --> 01:05:54
processes

01:05:51 --> 01:05:58
and i guess with this uh denoising

01:05:54 --> 01:06:00
auto encoder and masking and data

01:05:57 --> 01:06:02
ugmentation you don't have to worry

01:05:59 --> 01:06:03
about being super efficient

01:06:01 --> 01:06:05
you can just

01:06:02 --> 01:06:06
do as much as you want yeah and get

01:06:04 --> 01:06:08
better over time

01:06:05 --> 01:06:10
because i was thinking like you might

01:06:07 --> 01:06:12
want to be clever about the way you do

01:06:09 --> 01:06:13
all these procedures

01:06:11 --> 01:06:16
you know but

01:06:12 --> 01:06:18
hat's only if it's somehow costly to do

01:06:15 --> 01:06:20
every iteration but it's not really not

01:06:17 --> 01:06:21
really

01:06:19 --> 01:06:22
maybe

01:06:20 --> 01:06:23
and then there is you know data

01:06:21 --> 01:06:26
ugmentation without explicit data

01:06:22 --> 01:06:27
ugmentation is data augmentation by

01:06:25 --> 01:06:30
waiting which is you know the the sort

01:06:26 --> 01:06:31
of video prediction

01:06:29 --> 01:06:34
you're

01:06:30 --> 01:06:36
observing a video clip observing the

01:06:33 --> 01:06:38
you know the continuation of that video

01:06:35 --> 01:06:39
clip and try you try to learn a

01:06:37 --> 01:06:41
representation using those joint

01:06:38 --> 01:06:43
embedding architectures in such a way

01:06:40 --> 01:06:45
that the representation of the future

01:06:42 --> 01:06:47
clip is easily predictable from the

01:06:44 --> 01:06:49
representation of the of the observed

01:06:46 --> 01:06:51
clip

01:06:48 --> 01:06:53
do you think youtube has enough

01:06:50 --> 01:06:55
raw data

01:06:52 --> 01:06:57
from which to learn

01:06:54 --> 01:06:58
how to be a cat

01:06:56 --> 01:06:59
i think so

01:06:57 --> 01:07:02
the

01:06:58 --> 01:07:04
amount of data is not the constraint

01:07:01 --> 01:07:05
no it would require some selection i

01:07:03 --> 01:07:06
think

01:07:04 --> 01:07:08
some

01:07:05 --> 01:07:10
selection of you know maybe the

01:07:07 --> 01:07:12
right type of data you know down the

01:07:09 --> 01:07:13
rabbit hole of just cat videos that

01:07:11 --> 01:07:15
might you might need to watch some

01:07:12 --> 01:07:18
lectures or something

01:07:14 --> 01:07:20
no you wouldn't how meta would that be

01:07:17 --> 01:07:22
if it like watches

01:07:19 --> 01:07:25
lectures about intelligence and then

01:07:21 --> 01:07:29
learns watches your lectures and nyu and

01:07:24 --> 01:07:29
learns from that how to be intelligent

01:07:29 --> 01:07:34
uh what's your uh do you find

01:07:31 --> 01:07:36
multi-modal learning interesting we've

01:07:33 --> 01:07:38
been talking about visual language like

01:07:35 --> 01:07:39
combining those together maybe audio all

01:07:37 --> 01:07:41
those kinds of things there's a lot of

01:07:38 --> 01:07:43
things that i find interesting in the

01:07:40 --> 01:07:45
short term but are not

01:07:42 --> 01:07:46
addressing the important problem that i

01:07:44 --> 01:07:48
think are really kind of the big

01:07:45 --> 01:07:50
challenges so i think you know things

01:07:47 --> 01:07:51
like multitask learning continual

01:07:49 --> 01:07:54
earning

01:07:50 --> 01:07:56
uh you know

01:07:53 --> 01:07:58
adversarial issues i mean those have you

01:07:55 --> 01:08:00
know great practical interests in the

01:07:57 --> 01:08:01
relatively short term

01:07:59 --> 01:08:03
uh possibly but i don't think they're

01:08:00 --> 01:08:04
fundamental you know active learning

01:08:02 --> 01:08:06
even to some extent reinforcement

01:08:03 --> 01:08:07
learning i think

01:08:05 --> 01:08:09
those things will

01:08:06 --> 01:08:12
become either obsolete or

01:08:08 --> 01:08:15
useless or easy

01:08:11 --> 01:08:16
once we figure out how to do

01:08:14 --> 01:08:20
self-improvised representation learning

01:08:15 --> 01:08:22
or or learning predictable models

01:08:19 --> 01:08:24
and so i think that's what you know

01:08:21 --> 01:08:26
the entire community should be focusing

01:08:23 --> 01:08:27
on uh at least people are interested in

01:08:25 --> 01:08:29
sort of fundamental questions or you

01:08:26 --> 01:08:32
know really kind of pushing the envelope

01:08:28 --> 01:08:33
of ai towards the next the next stage

01:08:31 --> 01:08:35
but of course there's like a huge amount

01:08:32 --> 01:08:37
of you know very interesting work to do

01:08:34 --> 01:08:40
in sort of practical questions that have

01:08:36 --> 01:08:42
you know short-term impact well you know

01:08:39 --> 01:08:43
it's it's difficult to talk about the

01:08:41 --> 01:08:45
temporal scale because

01:08:42 --> 01:08:48
all of human civilization will

01:08:44 --> 01:08:50
eventually be destroyed because the the

01:08:47 --> 01:08:53
sun will die out and even if elon

01:08:49 --> 01:08:55
musk is successful multi-planetary

01:08:52 --> 01:08:56
colonization across the galaxy uh

01:08:54 --> 01:08:58
eventually

01:08:55 --> 01:09:01
the entirety of it would just become

01:08:57 --> 01:09:03
giant black holes and um

01:09:00 --> 01:09:05
that's going to take a while though

01:09:02 --> 01:09:06
so but but what i'm saying is then that

01:09:04 --> 01:09:08
logic can be used to say it's all

01:09:05 --> 01:09:10
meaningless

01:09:07 --> 01:09:11
i'm saying all that to say that

01:09:09 --> 01:09:12
multitask learning

01:09:10 --> 01:09:14
[Music]

01:09:11 --> 01:09:16
might be

01:09:13 --> 01:09:18
your song you're calling it practical or

01:09:15 --> 01:09:19
pragmatic or whatever

01:09:17 --> 01:09:23
that might be the thing that achieves

01:09:18 --> 01:09:26
omething very akin to intelligence

01:09:22 --> 01:09:28
while we're trying to solve the more

01:09:25 --> 01:09:30
uh general problem of self-supervised

01:09:27 --> 01:09:32
learning and background knowledge so the

01:09:29 --> 01:09:34
reason i bring that up maybe one

01:09:31 --> 01:09:36
way to ask that question i've been very

01:09:33 --> 01:09:38
impressed by what tesla auto poly team

01:09:35 --> 01:09:40
is doing i don't know if you got a

01:09:37 --> 01:09:41
chance to glance at this particular one

01:09:39 --> 01:09:43
xample of

01:09:40 --> 01:09:45
multi-task learning where they're

01:09:42 --> 01:09:48
literally taking the problem

01:09:44 --> 01:09:51
like i don't know charles darwin starts

01:09:47 --> 01:09:53
tudying animals they're studying

01:09:50 --> 01:09:54
the problem of driving and asking okay

01:09:52 --> 01:09:55
what are all the things you have to

01:09:53 --> 01:09:57
perceive

01:09:54 --> 01:09:58
and

01:09:56 --> 01:10:00
the way they're solving it is one

01:09:57 --> 01:10:01
there's an ontology where you're

01:09:59 --> 01:10:03
bringing that to the table so you're

01:10:00 --> 01:10:04
formulating a bunch of different tasks

01:10:02 --> 01:10:05
it's like over a hundred tasks or

01:10:03 --> 01:10:07
something like that then they're

01:10:04 --> 01:10:09
involved in driving and then they're

01:10:06 --> 01:10:11
deploying it and then getting data back

01:10:08 --> 01:10:13
from people that run into trouble and

01:10:10 --> 01:10:15
they're trying to figure out do we add

01:10:12 --> 01:10:17
tasks do we like we focus on each

01:10:14 --> 01:10:19
individual task separately sure in fact

01:10:16 --> 01:10:21
half so the i would say i'll classify

01:10:18 --> 01:10:23
andre carpathi's talk in two ways so one

01:10:20 --> 01:10:24
was about doors

01:10:22 --> 01:10:26
and the other one about how much image

01:10:23 --> 01:10:27
net sucks

01:10:25 --> 01:10:30
he kept going

01:10:26 --> 01:10:32
back and forth on those two topics which

01:10:29 --> 01:10:34
image that sucks meaning you can't just

01:10:31 --> 01:10:36
use a single benchmark there's so like

01:10:34 --> 01:10:38
you you have to have

01:10:35 --> 01:10:40
like a giant suite of benchmarks to

01:10:37 --> 01:10:42
understand how well your your system

01:10:39 --> 01:10:44
actually i agree with him i mean he's uh

01:10:41 --> 01:10:45
e's a very sensible guy

01:10:43 --> 01:10:48
now

01:10:44 --> 01:10:50
okay it's it's very clear that if you're

01:10:47 --> 01:10:52
faced with a an engineering problem that

01:10:49 --> 01:10:54
you need to solve in a relatively short

01:10:51 --> 01:10:56
ime particularly if you have it almost

01:10:54 --> 01:10:57
breathing down your neck

01:10:55 --> 01:10:59
you're going to have to take shortcuts

01:10:56 --> 01:11:01
right you you

01:10:58 --> 01:11:03
might think about the the fact that

01:11:00 --> 01:11:05
he the the right thing to do in the

01:11:02 --> 01:11:07
long-term solution involves you know

01:11:04 --> 01:11:08
some fancy self-supervisioning but you

01:11:06 --> 01:11:10
have

01:11:07 --> 01:11:13
you know you know almost reading on your

01:11:09 --> 01:11:15
neck uh and you know this involves uh

01:11:12 --> 01:11:17
you know human lives and so

01:11:14 --> 01:11:19
you you have to

01:11:16 --> 01:11:22
basically just do the systematic uh

01:11:18 --> 01:11:22
engineering and you know

01:11:21 --> 01:11:24
uh

01:11:21 --> 01:11:27
fine tuning and refinements and trial

01:11:23 --> 01:11:28
and error and and all that stuff um

01:11:26 --> 01:11:30
there's nothing wrong with that that's

01:11:27 --> 01:11:31
called engineering that's called

01:11:29 --> 01:11:35
you know uh

01:11:30 --> 01:11:38
putting technology out uh in the

01:11:34 --> 01:11:40
world um and and you have to kind

01:11:37 --> 01:11:43
of ironclad it before before you do this

01:11:39 --> 01:11:43
you know

01:11:43 --> 01:11:47
so much for you know grand grand ideas

01:11:45 --> 01:11:49
and principles

01:11:46 --> 01:11:51
um

01:11:48 --> 01:11:53
but you know i'm placing myself sort of

01:11:50 --> 01:11:55
you know some

01:11:52 --> 01:11:57
you know upstream of this queen or quite

01:11:54 --> 01:12:00
a bit of stream of this your plato think

01:11:56 --> 01:12:02
about platonic forms you're you're

01:11:59 --> 01:12:05
platonic because eventually

01:12:01 --> 01:12:07
i want that stuff to get used but uh

01:12:04 --> 01:12:09
it's okay if it takes five or ten years

01:12:06 --> 01:12:11
for the community to realize this is the

01:12:08 --> 01:12:13
right thing to do i've i've done this

01:12:10 --> 01:12:15
before it's been the case before that

01:12:12 --> 01:12:17
you know i've made that case i mean if

01:12:14 --> 01:12:19
you look back in the mid-2000s for

01:12:16 --> 01:12:21
example and you ask yourself the

01:12:18 --> 01:12:24
question okay i want to recognize cars

01:12:20 --> 01:12:24
or faces or whatever

01:12:24 --> 01:12:29
you know i can use convolutional net so

01:12:25 --> 01:12:30
i can use a more conventional

01:12:28 --> 01:12:32
kind of computer vision techniques you

01:12:29 --> 01:12:35
know using uh interest point detectors

01:12:31 --> 01:12:37
or swift density features and you know

01:12:34 --> 01:12:39
sticking an svm on top at that time the

01:12:36 --> 01:12:40
data sets were so small that

01:12:38 --> 01:12:42
hose

01:12:39 --> 01:12:44
methods that use more hand engineering

01:12:41 --> 01:12:46
worked better than companies there was

01:12:43 --> 01:12:48
just not enough data for comnets and

01:12:45 --> 01:12:49
contests were were a little a little

01:12:47 --> 01:12:51
slow with the kind of hardware that was

01:12:48 --> 01:12:54
available at the time

01:12:50 --> 01:12:56
and there was a c change when uh

01:12:53 --> 01:12:58
basically when you know

01:12:55 --> 01:13:00
data sets become bigger and and gpus

01:12:57 --> 01:13:02
became available that that's what

01:12:59 --> 01:13:04
you know those

01:13:01 --> 01:13:06
two of the main factors that basically

01:13:03 --> 01:13:08
made people change their change their

01:13:05 --> 01:13:08
mind

01:13:07 --> 01:13:12
and you can

01:13:08 --> 01:13:15
look at the history of

01:13:11 --> 01:13:17
like all sub-branches of ai or pattern

01:13:14 --> 01:13:19
recognition

01:13:16 --> 01:13:21
and there's a similar trajectory

01:13:18 --> 01:13:23
followed by techniques where people

01:13:20 --> 01:13:25
start by you know engineering the hell

01:13:22 --> 01:13:27
out of it

01:13:24 --> 01:13:28
um you know

01:13:26 --> 01:13:30
be it

01:13:27 --> 01:13:31
optical character recognition

01:13:29 --> 01:13:33
speech recognition

01:13:30 --> 01:13:35
computer vision like image recognition

01:13:32 --> 01:13:38
in general uh natural language

01:13:34 --> 01:13:39
understanding like you know translation

01:13:37 --> 01:13:41
things like that right you start to

01:13:38 --> 01:13:43
engineer the hell out of it

01:13:40 --> 01:13:45
um you start to acquire all knowledge

01:13:42 --> 01:13:46
the prior knowledge you know about image

01:13:44 --> 01:13:49
formation about you know the shape of

01:13:45 --> 01:13:51
characters about you know morphological

01:13:48 --> 01:13:53
operations about like feature extraction

01:13:50 --> 01:13:54
fourier transforms

01:13:52 --> 01:13:56
you know very quickly moments you know

01:13:53 --> 01:13:58
hatever right people have come up with

01:13:55 --> 01:14:00
ousands of ways of representing images

01:13:57 --> 01:14:03
o that they could be easily uh

01:13:59 --> 01:14:05
classified afterwards same for speech

01:14:02 --> 01:14:06
recognition right there is you know two

01:14:04 --> 01:14:09
decades for people to figure out a good

01:14:05 --> 01:14:11
front end uh to pre-process uh

01:14:08 --> 01:14:13
speech signals so that you know the

01:14:10 --> 01:14:15
information about what is being said is

01:14:12 --> 01:14:17
preserved but most of the information

01:14:14 --> 01:14:19
about the identity of the speaker is

01:14:16 --> 01:14:20
gone um

01:14:18 --> 01:14:24
you know kestrel coefficients or

01:14:20 --> 01:14:27
whatever right um and same for for text

01:14:23 --> 01:14:30
right uh you do need entity recognition

01:14:26 --> 01:14:31
and you parse and you you you do tagging

01:14:30 --> 01:14:34
of

01:14:30 --> 01:14:36
of the parts of speech and you know

01:14:33 --> 01:14:38
you do this sort of tree representation

01:14:35 --> 01:14:41
of clauses and all that stuff right

01:14:37 --> 01:14:41
before you can do anything

01:14:41 --> 01:14:46
so

01:14:42 --> 01:14:48
that's how it starts right just engineer

01:14:45 --> 01:14:49
the hell out of it and then you start

01:14:47 --> 01:14:51
having data

01:14:48 --> 01:14:53
nd maybe you have more powerful

01:14:50 --> 01:14:54
computers maybe you know something about

01:14:52 --> 01:14:56
statistical learning so you start using

01:14:54 --> 01:14:57
machine learning and it's usually a

01:14:55 --> 01:14:59
small sliver on top of your kind of

01:14:56 --> 01:15:02
handcrafted system where you know you

01:14:58 --> 01:15:04
extract features by hand okay and now

01:15:01 --> 01:15:05
you know nowadays the standard way of

01:15:03 --> 01:15:06
doing this is that you train the entire

01:15:04 --> 01:15:08
thing end to end with the deep learning

01:15:05 --> 01:15:09
system and it learns its own features

01:15:07 --> 01:15:11
and

01:15:08 --> 01:15:14
you know speech recognition systems

01:15:10 --> 01:15:16
nowadays uh ocr systems are completely

01:15:13 --> 01:15:18
end-to-end it's uh you know it's some

01:15:15 --> 01:15:19
giant neural net that takes raw

01:15:17 --> 01:15:21
aveforms

01:15:18 --> 01:15:23
and produces a sequence of characters

01:15:20 --> 01:15:25
coming out and it's just a huge neural

01:15:22 --> 01:15:27
net right there's no you know minecraft

01:15:24 --> 01:15:29
model there's no language model that is

01:15:26 --> 01:15:31
explicit other than you know something

01:15:28 --> 01:15:32
that's ingrained in the in the sort of

01:15:30 --> 01:15:35
neural language model if you want same

01:15:32 --> 01:15:36
for translation same for all kinds of

01:15:34 --> 01:15:38
stuff so you see this

01:15:35 --> 01:15:40
continuous evolution

01:15:37 --> 01:15:42
from

01:15:39 --> 01:15:44
you know less and less hand crafting and

01:15:41 --> 01:15:45
more and more learning

01:15:43 --> 01:15:46
um

01:15:44 --> 01:15:49
and uh

01:15:45 --> 01:15:51
i i think

01:15:48 --> 01:15:53
it's true in biology as well

01:15:50 --> 01:15:57
so i mean we might disagree about this

01:15:52 --> 01:16:00
maybe not uh in this one little piece at

01:15:56 --> 01:16:02
he end you mentioned active learning

01:15:59 --> 01:16:04
it feels like active learning which is

01:16:01 --> 01:16:06
the selection of data and also the

01:16:03 --> 01:16:08
interactivity needs to be part of this

01:16:05 --> 01:16:10
giant neural network you cannot just be

01:16:07 --> 01:16:12
an observer to do self-supervised

01:16:09 --> 01:16:14
learning you have to well

01:16:11 --> 01:16:17
i don't self supervise learning is just

01:16:13 --> 01:16:19
a word but i would whatever this giant

01:16:16 --> 01:16:22
stack of a neural network that's

01:16:18 --> 01:16:23
automatically learning it feels my

01:16:21 --> 01:16:25
intuition is

01:16:22 --> 01:16:27
that

01:16:24 --> 01:16:31
you have to have a system whether it's a

01:16:26 --> 01:16:33
physical robot or a digital robot that's

01:16:30 --> 01:16:35
interacting with the world

01:16:32 --> 01:16:37
and doing so in a flawed way and

01:16:34 --> 01:16:41
improving over time

01:16:36 --> 01:16:42
in order to to form the self-supervised

01:16:40 --> 01:16:45
learning

01:16:41 --> 01:16:47
well you can't just give it a giant sea

01:16:44 --> 01:16:51
of data okay i agree and i disagree okay

01:16:46 --> 01:16:53
i agree in the sense that i think uh

01:16:50 --> 01:16:54
i agree i agree in two ways the first

01:16:52 --> 01:16:55
way i agree is that if you

01:16:53 --> 01:16:57
want uh

01:16:54 --> 01:16:59
and you certainly need a causal model of

01:16:56 --> 01:17:01
the world that allows you to predict the

01:16:58 --> 01:17:02
consequences of your actions

01:17:00 --> 01:17:05
to train that model you need to take

01:17:01 --> 01:17:06
actions right you need to be able to act

01:17:04 --> 01:17:08
in a world and see the effect

01:17:06 --> 01:17:10
for you to be to learn causal models of

01:17:07 --> 01:17:12
the world well so that's not that's not

01:17:09 --> 01:17:13
obvious because you can observe others

01:17:11 --> 01:17:15
and you can infer

01:17:12 --> 01:17:17
that they're similar to you and then you

01:17:14 --> 01:17:19
can learn from that yeah but then you

01:17:16 --> 01:17:21
have to kind of hardwire that part right

01:17:18 --> 01:17:23
you know mirror neurons and all that

01:17:20 --> 01:17:24
stuff right so um

01:17:22 --> 01:17:26
and it's not clear to me how you would

01:17:23 --> 01:17:27
o this in a machine so

01:17:25 --> 01:17:30
um

01:17:26 --> 01:17:32
so i think the the action part would be

01:17:29 --> 01:17:34
necessary for having causal models of of

01:17:31 --> 01:17:36
the world

01:17:33 --> 01:17:38
the second reason it may be

01:17:35 --> 01:17:39
necessary or at least more efficient is

01:17:37 --> 01:17:40
that

01:17:38 --> 01:17:42
uh

01:17:39 --> 01:17:44
active learning basically you know goes

01:17:41 --> 01:17:45
for the jiggler of what you're what you

01:17:43 --> 01:17:47
don't know right

01:17:44 --> 01:17:49
is this you know obvious

01:17:46 --> 01:17:51
areas of uncertainty

01:17:48 --> 01:17:53
uh about your your world and about the

01:17:50 --> 01:17:54
how the world behaves

01:17:52 --> 01:17:58
and

01:17:54 --> 01:17:59
you can resolve this uncertainty by

01:17:57 --> 01:18:01
systematic exploration of that part that

01:17:58 --> 01:18:03
you don't you don't know and if you know

01:18:00 --> 01:18:04
that you don't know then you know it

01:18:02 --> 01:18:06
makes you curious you kind of look into

01:18:04 --> 01:18:09
situations that

01:18:05 --> 01:18:10
and uh you know across the animal uh

01:18:08 --> 01:18:12
world

01:18:09 --> 01:18:14
ifferent species are different levels

01:18:11 --> 01:18:15
of curiosity right

01:18:13 --> 01:18:16
yeah depending on how they're built

01:18:14 --> 01:18:18
right so

01:18:15 --> 01:18:21
you know cats and rats are incredibly

01:18:17 --> 01:18:23
curious uh dogs not so much i mean less

01:18:20 --> 01:18:25
yeah so it could be useful to have that

01:18:22 --> 01:18:27
kind of curiosity so it'd be useful but

01:18:24 --> 01:18:30
curiosity just makes the process faster

01:18:26 --> 01:18:31
it doesn't make the process exist

01:18:29 --> 01:18:34
he

01:18:30 --> 01:18:36
so what process what learning process

01:18:33 --> 01:18:39
is it that

01:18:35 --> 01:18:41
active learning makes more efficient

01:18:38 --> 01:18:43
and i'm asking that first question uh

01:18:40 --> 01:18:43
you know

01:18:43 --> 01:18:46
we haven't answered that

01:18:44 --> 01:18:49
question yet so you know i worry about

01:18:46 --> 01:18:50
active learning once this question is so

01:18:48 --> 01:18:51
it's the more fundamental question to

01:18:49 --> 01:18:54
ask

01:18:50 --> 01:18:55
and if active learning or

01:18:53 --> 01:18:57
interaction

01:18:54 --> 01:18:59
increases the efficiency of the learning

01:18:56 --> 01:19:01
see sometimes

01:18:58 --> 01:19:04
it becomes very different if the

01:19:00 --> 01:19:06
increase is several orders of magnitude

01:19:03 --> 01:19:08
right like that's true

01:19:05 --> 01:19:10
but fundamentally still the same thing

01:19:08 --> 01:19:11
and building up the intuition about how

01:19:09 --> 01:19:13
to

01:19:10 --> 01:19:15
in a self-supervised way to construct

01:19:12 --> 01:19:16
background models efficient or

01:19:14 --> 01:19:19
inefficient

01:19:15 --> 01:19:21
is um is the core problem

01:19:18 --> 01:19:23
what do you think about yoshi banjos

01:19:20 --> 01:19:25
talking about consciousness

01:19:22 --> 01:19:27
and all of these kinds of concepts okay

01:19:24 --> 01:19:29
um

01:19:26 --> 01:19:31
i don't know what consciousness is

01:19:28 --> 01:19:32
but uh

01:19:30 --> 01:19:34
it's a good opener

01:19:31 --> 01:19:36
and to some extent a lot of the things

01:19:33 --> 01:19:37
that are said about consciousness remind

01:19:35 --> 01:19:39
me of

01:19:36 --> 01:19:41
the questions people were asking

01:19:38 --> 01:19:44
themselves in the 18th century or 17th

01:19:40 --> 01:19:46
century when they discovered that

01:19:43 --> 01:19:47
uh you know how the eye works and the

01:19:45 --> 01:19:49
fact that the image at the back of the

01:19:46 --> 01:19:50
ye was

01:19:48 --> 01:19:52
upside down

01:19:49 --> 01:19:54
right because you have a lens and and so

01:19:51 --> 01:19:56
n your retina the image that forms is

01:19:53 --> 01:19:58
an image of the world but it's upside

01:19:55 --> 01:19:58
down how is it that you see right side

01:19:57 --> 01:20:00
up

01:19:58 --> 01:20:02
and you know with what we know today in

01:19:59 --> 01:20:04
science you know we realize this

01:20:01 --> 01:20:06
question doesn't make any sense

01:20:03 --> 01:20:08
or or is kind of ridiculous in some way

01:20:05 --> 01:20:09
right so i think a lot of what is said

01:20:07 --> 01:20:11
about consciousness is of that nature

01:20:08 --> 01:20:14
now that said there's a lot of really

01:20:10 --> 01:20:15
smart people that uh for whom i have a

01:20:13 --> 01:20:17
lot of respect who are talking about

01:20:14 --> 01:20:20
his topic people like david chalmers

01:20:16 --> 01:20:22
who is the colleague of mine at nyu

01:20:19 --> 01:20:26
i have kind of a

01:20:21 --> 01:20:26
unorthodox folk

01:20:25 --> 01:20:30
speculative

01:20:27 --> 01:20:33
hypothesis about consciousness so we're

01:20:29 --> 01:20:35
talking about this audio world model and

01:20:32 --> 01:20:37
uh i think you know our entire

01:20:34 --> 01:20:41
prefrontal cortex basically is

01:20:36 --> 01:20:42
uh the engine for our world model

01:20:40 --> 01:20:45
but when we are

01:20:42 --> 01:20:47
attending at a particular situation

01:20:44 --> 01:20:49
we're focused on that situation we

01:20:46 --> 01:20:50
basically cannot attend to anything else

01:20:48 --> 01:20:53
and that

01:20:49 --> 01:20:56
seems to suggest

01:20:52 --> 01:20:58
hat we basically have only one

01:20:55 --> 01:21:00
world model engine in our pre-photo

01:20:57 --> 01:21:02
cortex

01:20:59 --> 01:21:04
that engine is configurable to the

01:21:01 --> 01:21:06
situation at hand so we are building a

01:21:03 --> 01:21:08
box out of wood or we are you know

01:21:06 --> 01:21:10
driving uh

01:21:07 --> 01:21:13
down the highway playing chess we we

01:21:10 --> 01:21:14
basically have uh a single model of the

01:21:12 --> 01:21:16
world that we configure into the

01:21:13 --> 01:21:17
situation at hand

01:21:15 --> 01:21:20
which is why we can only attend to one

01:21:16 --> 01:21:21
task at a time

01:21:19 --> 01:21:23
now if there is a task that we do

01:21:20 --> 01:21:26
repeatedly

01:21:22 --> 01:21:27
it it goes from the sort of deliberate

01:21:25 --> 01:21:29
reasoning using model of the world and

01:21:26 --> 01:21:30
prediction and perhaps something like

01:21:28 --> 01:21:32
model predictive control which i was

01:21:29 --> 01:21:34
talking about earlier

01:21:31 --> 01:21:36
to something that is more subconscious

01:21:33 --> 01:21:37
that becomes automatic so i don't know

01:21:35 --> 01:21:39
if you've ever played against a chess

01:21:36 --> 01:21:41
grandmaster

01:21:38 --> 01:21:44
uh you know i get wiped out in you know

01:21:40 --> 01:21:46
10 flies right

01:21:43 --> 01:21:48
and you know i have to think about my

01:21:45 --> 01:21:50
move for

01:21:47 --> 01:21:52
you know like 15 minutes

01:21:49 --> 01:21:54
uh and the person in front of me the

01:21:51 --> 01:21:57
grandmaster you know would just like

01:21:53 --> 01:21:58
react within seconds right

01:21:56 --> 01:22:00
you know he doesn't need to

01:21:57 --> 01:22:01
think about it that's become part of the

01:21:59 --> 01:22:02
subconscious because you know it's

01:22:00 --> 01:22:04
basically just

01:22:01 --> 01:22:05
pattern recognition at this point

01:22:03 --> 01:22:07
um

01:22:04 --> 01:22:09
same you know you the first few hours

01:22:06 --> 01:22:10
you drive a car you're really attentive

01:22:08 --> 01:22:14
you can't do anything else and then

01:22:09 --> 01:22:15
after 20-30 hours of practice 50 hours

01:22:13 --> 01:22:16
you know a subconscious you can talk to

01:22:14 --> 01:22:17
the person next to you you know things

01:22:15 --> 01:22:19
like that right

01:22:16 --> 01:22:20
unless the situation becomes

01:22:18 --> 01:22:21
unpredictable and then you have to stop

01:22:19 --> 01:22:23
talking

01:22:20 --> 01:22:25
so that suggests you only have one model

01:22:22 --> 01:22:26
in your head

01:22:24 --> 01:22:28
and

01:22:25 --> 01:22:29
it might suggest the idea that

01:22:27 --> 01:22:31
consciousness basically is the module

01:22:28 --> 01:22:33
that configures this world model of

01:22:30 --> 01:22:35
yours you know you need to have some

01:22:32 --> 01:22:38
sort of

01:22:34 --> 01:22:39
executive kind of overseer that

01:22:37 --> 01:22:41
configures your word model for the

01:22:38 --> 01:22:43
situation at hand

01:22:40 --> 01:22:45
that that leads to kind of the

01:22:42 --> 01:22:46
really curious concept that

01:22:44 --> 01:22:48
consciousness is not a consequence of

01:22:46 --> 01:22:50
the power of our minds but of the

01:22:48 --> 01:22:52
limitation of our brains

01:22:49 --> 01:22:55
but because we have only one world model

01:22:51 --> 01:22:57
we have to be conscious if we had as

01:22:54 --> 01:22:59
many role models as

01:22:56 --> 01:23:01
there are situations we encounter then

01:22:58 --> 01:23:02
we could do all of them simultaneously

01:23:00 --> 01:23:04
and we wouldn't need this sort of

01:23:01 --> 01:23:05
executive control that we call

01:23:03 --> 01:23:07
consciousness

01:23:04 --> 01:23:09
yeah interesting and somehow maybe that

01:23:06 --> 01:23:11
executive controller

01:23:08 --> 01:23:12
i mean the the hard problem of

01:23:10 --> 01:23:14
consciousness there's some kind of

01:23:11 --> 01:23:15
chemicals in biology that's creating a

01:23:13 --> 01:23:17
feeling

01:23:14 --> 01:23:19
like it feels to experience some of

01:23:16 --> 01:23:23
these things

01:23:18 --> 01:23:24
that's kind of like the hard question is

01:23:22 --> 01:23:26
what the heck is that and why is that

01:23:24 --> 01:23:29
useful maybe the more pragmatic question

01:23:26 --> 01:23:30
why is it useful to feel like

01:23:28 --> 01:23:32
this is really you

01:23:29 --> 01:23:34
experiencing this versus just like

01:23:32 --> 01:23:36
information

01:23:33 --> 01:23:39
being processed

01:23:35 --> 01:23:41
um it could be just a very nice side

01:23:38 --> 01:23:43
ffect of um

01:23:40 --> 01:23:45
of the way we evolved that's just very

01:23:42 --> 01:23:46
useful to

01:23:44 --> 01:23:49
uh

01:23:45 --> 01:23:51
feel a sense of uh ownership to the

01:23:48 --> 01:23:53
decisions you make to the perceptions

01:23:50 --> 01:23:55
you make to the model you're trying to

01:23:52 --> 01:23:57
maintain like you own this thing

01:23:54 --> 01:23:59
and it's the only one you got and if you

01:23:56 --> 01:24:02
lose it it's gonna really suck and so

01:23:58 --> 01:24:04
you should really send the brain some

01:24:01 --> 01:24:04
signals about it

01:24:04 --> 01:24:09
what ideas do you believe might be true

01:24:06 --> 01:24:12
that most or at least many people

01:24:08 --> 01:24:13
disagree with you with

01:24:11 --> 01:24:14
let's say in the space of machine

01:24:12 --> 01:24:16
learning

01:24:13 --> 01:24:17
well it depends who you talk about but

01:24:15 --> 01:24:20
i think

01:24:16 --> 01:24:21
so certainly there is uh

01:24:19 --> 01:24:23
a bunch of people who are nativists

01:24:20 --> 01:24:24
right who think that a lot of the basic

01:24:22 --> 01:24:27
things about the world are kind of

01:24:23 --> 01:24:28
hardwired in our you know minds

01:24:26 --> 01:24:30
things like you know the world is

01:24:27 --> 01:24:33
three-dimensional for example is that

01:24:29 --> 01:24:35
hardwired things like uh you know object

01:24:32 --> 01:24:37
permanence is something that we learn uh

01:24:34 --> 01:24:40
you know before the age of three months

01:24:36 --> 01:24:42
or so or are we born with it and there

01:24:39 --> 01:24:44
are you know very disa you know

01:24:41 --> 01:24:46
hite disagreement among the you know

01:24:43 --> 01:24:47
cognitive scientists

01:24:45 --> 01:24:48
for this

01:24:46 --> 01:24:50
i think those things are actually very

01:24:47 --> 01:24:50
simple to learn

01:24:49 --> 01:24:53
um

01:24:50 --> 01:24:55
you know is it the case that the

01:24:52 --> 01:24:57
oriented edge detectors in v1 are

01:24:54 --> 01:24:58
learned or are they hardwired i think

01:24:56 --> 01:25:00
they are learned they might be learned

01:24:57 --> 01:25:02
before both because it's really easy to

01:24:59 --> 01:25:04
generate signals from the retina that

01:25:01 --> 01:25:06
actually will train edge detectors so

01:25:04 --> 01:25:07
um and again those are

01:25:05 --> 01:25:10
things that can be learned within

01:25:06 --> 01:25:12
minutes of uh opening your eyes right i

01:25:09 --> 01:25:14
mean

01:25:11 --> 01:25:15
you know since the 1990s we have

01:25:13 --> 01:25:18
algorithms that can learn oriented

01:25:14 --> 01:25:19
etectors completely unsupervised with

01:25:17 --> 01:25:20
e equivalent of a few minutes of real

01:25:18 --> 01:25:22
time so

01:25:19 --> 01:25:24
uh so those things have to be learned

01:25:21 --> 01:25:26
um and there's also those you know mit

01:25:23 --> 01:25:27
experiments where you kind of

01:25:25 --> 01:25:29
plug the

01:25:26 --> 01:25:31
optical nerve on the auditory cortex of

01:25:28 --> 01:25:33
a baby ferret right and that auditory

01:25:30 --> 01:25:34
cortex becomes a visual cortex

01:25:32 --> 01:25:36
essentially

01:25:33 --> 01:25:38
so you know clearly

01:25:35 --> 01:25:41
there's running taking place there

01:25:37 --> 01:25:42
so you know i think a lot of what people

01:25:40 --> 01:25:44
think are so basic that they need to be

01:25:41 --> 01:25:45
hardwired

01:25:43 --> 01:25:46
i think a lot of those things are

01:25:44 --> 01:25:48
learned because they are easy to learn

01:25:45 --> 01:25:51
jesus so you put a lot of

01:25:47 --> 01:25:53
value in the power of learning what kind

01:25:50 --> 01:25:54
of things do you suspect might not be

01:25:52 --> 01:25:55
learned

01:25:53 --> 01:25:56
is there something that could not be

01:25:54 --> 01:26:00
learned

01:25:55 --> 01:26:02
so your intrinsic drives are not learned

01:25:59 --> 01:26:03
they they there are the things that you

01:26:01 --> 01:26:06
know make humans uh

01:26:02 --> 01:26:09
uman or make you know

01:26:05 --> 01:26:10
cats different from dogs right it's the

01:26:08 --> 01:26:13
basic drives that are kind of

01:26:09 --> 01:26:14
hard-wired in our basal ganglia

01:26:12 --> 01:26:16
i mean there are people who are working

01:26:13 --> 01:26:17
on on this kind of stuff that's called

01:26:15 --> 01:26:20
intrinsic motivation in the context of

01:26:16 --> 01:26:21
reinforcement learning um so these are

01:26:19 --> 01:26:23
objective functions where the reward

01:26:20 --> 01:26:25
oesn't come from the external world

01:26:22 --> 01:26:27
it's computed by your own brain your own

01:26:24 --> 01:26:29
brain computes

01:26:26 --> 01:26:31
whether you're happy or not right it

01:26:28 --> 01:26:34
measures your degree of uh

01:26:30 --> 01:26:35
comfort or in comfort

01:26:33 --> 01:26:36
and

01:26:34 --> 01:26:38
because it's your brain computing

01:26:35 --> 01:26:40
this presumably knows also how to

01:26:37 --> 01:26:41
estimate gradients of this right so

01:26:39 --> 01:26:44
um

01:26:40 --> 01:26:47
so it's easier to to learn when your

01:26:43 --> 01:26:50
objective is is intrinsic

01:26:46 --> 01:26:52
so that has to be hardwired

01:26:49 --> 01:26:54
the critic that makes long-term

01:26:51 --> 01:26:55
prediction of the outcome which is the

01:26:53 --> 01:26:58
ventual

01:26:54 --> 01:27:00
result of this that's learned

01:26:57 --> 01:27:02
and perception is learned and your model

01:26:59 --> 01:27:04
of the world is learned but let me take

01:27:01 --> 01:27:06
an example of you know why the

01:27:03 --> 01:27:09
critic i mean example of how the critic

01:27:05 --> 01:27:10
might be learned right if i uh if i come

01:27:08 --> 01:27:12
to you um

01:27:09 --> 01:27:14
you know i reach across the table and i

01:27:11 --> 01:27:15
pinch your arm right complete surprise

01:27:13 --> 01:27:17
for you

01:27:14 --> 01:27:18
would not have expected this i was

01:27:16 --> 01:27:20
expecting that the whole time but yes

01:27:17 --> 01:27:22
right let's say for the sake of the

01:27:19 --> 01:27:25
story yes

01:27:21 --> 01:27:27
um okay your visual ganglia is going to

01:27:24 --> 01:27:29
light up because it's going to hurt

01:27:26 --> 01:27:30
right

01:27:28 --> 01:27:33
and now your model of the world includes

01:27:30 --> 01:27:34
the fact that i may pinch you if i

01:27:32 --> 01:27:37
approach my uh

01:27:33 --> 01:27:40
don't trust humans right

01:27:36 --> 01:27:41
my hand to your arm so if i try again

01:27:39 --> 01:27:42
you're gonna recoil and that's your

01:27:40 --> 01:27:44
critic

01:27:41 --> 01:27:46
uh your predictive

01:27:43 --> 01:27:49
you know your predictor of your uh

01:27:46 --> 01:27:50
ultimate pain uh

01:27:49 --> 01:27:52
system

01:27:50 --> 01:27:54
that predicts that something bad is

01:27:51 --> 01:27:56
going to happen when you recoil right to

01:27:53 --> 01:27:58
avoid it so even that can be learned

01:27:55 --> 01:28:00
that is drawing definitely this is what

01:27:57 --> 01:28:02
allows you also to uh you know define

01:27:59 --> 01:28:04
some goals right so

01:28:01 --> 01:28:06
um the fact that you know you're a

01:28:03 --> 01:28:10
school child you wake up in the morning

01:28:05 --> 01:28:11
and you go to school and you know

01:28:09 --> 01:28:13
it's not because you necessarily like

01:28:10 --> 01:28:15
waking up early and going to school but

01:28:12 --> 01:28:17
you know that there is a long-term

01:28:14 --> 01:28:18
objective you're trying to optimize so

01:28:16 --> 01:28:20
ernest becker i'm not sure if you're

01:28:17 --> 01:28:22
familiar with the philosopher he wrote

01:28:19 --> 01:28:24
the book denial of death and his idea is

01:28:21 --> 01:28:26
that one of the core motivations of

01:28:23 --> 01:28:28
human beings is our terror of death our

01:28:25 --> 01:28:29
fear of death

01:28:27 --> 01:28:32
at's what makes us unique from cats

01:28:28 --> 01:28:33
are just surviving they do not have

01:28:31 --> 01:28:34
a

01:28:32 --> 01:28:36
deep

01:28:33 --> 01:28:37
under like

01:28:35 --> 01:28:40
cognizance

01:28:36 --> 01:28:42
introspection that

01:28:39 --> 01:28:44
over the horizon is the end

01:28:41 --> 01:28:45
and he says that i mean there's a terror

01:28:43 --> 01:28:48
management theory that just all these

01:28:44 --> 01:28:50
psychological experiments that show

01:28:47 --> 01:28:52
the basically

01:28:49 --> 01:28:54
this idea that

01:28:51 --> 01:28:58
all of human civilization everything we

01:28:53 --> 01:29:00
create is kind of trying to forget if

01:28:57 --> 01:29:01
even for a brief moment that we're going

01:28:59 --> 01:29:03
to die

01:29:00 --> 01:29:05
when when do you think humans

01:29:02 --> 01:29:07
understand that they're going to die is

01:29:04 --> 01:29:09
it learned early on

01:29:06 --> 01:29:12
also like

01:29:08 --> 01:29:14
i don't know at what point i mean it's a

01:29:11 --> 01:29:16
question like you know at what

01:29:13 --> 01:29:18
point do you realize that you know what

01:29:15 --> 01:29:19
death really is and i think most people

01:29:17 --> 01:29:21
don't actually realize what death is

01:29:18 --> 01:29:22
right i mean most people believe that

01:29:20 --> 01:29:23
you go to heaven or something right well

01:29:21 --> 01:29:26
so

01:29:22 --> 01:29:29
to push back on that what ernest becker

01:29:25 --> 01:29:30
says and um sheldon solomon all of those

01:29:28 --> 01:29:31
folks

01:29:29 --> 01:29:33
and i find those ideas a little bit

01:29:30 --> 01:29:35
compelling is that there is moments in

01:29:32 --> 01:29:37
life early in life a lot of this fun

01:29:34 --> 01:29:39
happens early in life

01:29:36 --> 01:29:42
when you are

01:29:38 --> 01:29:44
uh when you do deeply experience the

01:29:41 --> 01:29:46
terror of this realization and all the

01:29:44 --> 01:29:48
things you think about about religion

01:29:45 --> 01:29:50
all those kinds of things that we kind

01:29:47 --> 01:29:51
of think about more like teenage years

01:29:49 --> 01:29:53
and later

01:29:50 --> 01:29:54
we're talking about way earlier no it's

01:29:52 --> 01:29:57
like seven or eight years or something

01:29:53 --> 01:29:58
like that yeah you realize

01:29:56 --> 01:30:01
holy crap

01:29:57 --> 01:30:03
this is uh like the mystery the terror

01:30:00 --> 01:30:05
like it's almost like you're a little

01:30:02 --> 01:30:07
prey a little baby deer sitting in the

01:30:04 --> 01:30:09
darkness of the jungle of the woods

01:30:06 --> 01:30:12
looking all around you the darkness full

01:30:08 --> 01:30:14
of terror i mean that's that realization

01:30:11 --> 01:30:16
says okay i'm gonna go go back in the

01:30:13 --> 01:30:19
comfort of my mind where there's a well

01:30:15 --> 01:30:21
there is a deep meaning where there's a

01:30:18 --> 01:30:23
maybe like pretend i'm immortal however

01:30:20 --> 01:30:26
way

01:30:22 --> 01:30:28
however kind of idea i can construct to

01:30:25 --> 01:30:30
help me understand that i'm immortal

01:30:27 --> 01:30:32
religion helps with that you can you can

01:30:29 --> 01:30:34
delude yourself in all kinds of ways

01:30:31 --> 01:30:36
like lose yourself in the busyness of

01:30:33 --> 01:30:37
each day have little goals in mind all

01:30:35 --> 01:30:39
those kinds of things to think that it's

01:30:36 --> 01:30:41
going to go on forever and you kind of

01:30:38 --> 01:30:44
know you're going to die yeah and it's

01:30:40 --> 01:30:46
going to be sad but you don't really

01:30:43 --> 01:30:47
understand that you're going to die and

01:30:45 --> 01:30:49
so that's that's their idea and if i

01:30:46 --> 01:30:52
find that compelling

01:30:48 --> 01:30:54
because it does seem to be a core unique

01:30:51 --> 01:30:56
aspect of human nature that we were able

01:30:53 --> 01:30:58
to think that we're going we're able to

01:30:55 --> 01:31:00
really understand

01:30:57 --> 01:31:01
that this life is finite

01:30:59 --> 01:31:02
that seems important

01:31:00 --> 01:31:04
here's a bunch of different things

01:31:01 --> 01:31:05
there so first of all i don't think

01:31:03 --> 01:31:08
there is a qualitative difference

01:31:04 --> 01:31:09
between between us and cats in the term

01:31:07 --> 01:31:12
i think the difference is that we just

01:31:08 --> 01:31:13
have a better long-term

01:31:11 --> 01:31:16
ability to

01:31:12 --> 01:31:17
predict you know in the long term and so

01:31:15 --> 01:31:18
we have a better understanding of how

01:31:16 --> 01:31:20
the world works so we have better

01:31:17 --> 01:31:22
understanding of you know finance of

01:31:19 --> 01:31:25
life and things like that so we have a

01:31:21 --> 01:31:28
better planning engine than cats yeah

01:31:24 --> 01:31:30
okay um but what's the motivation for

01:31:27 --> 01:31:31
planning well i think it's just a

01:31:29 --> 01:31:33
side effect of the fact that we have

01:31:30 --> 01:31:36
just a better planning engine because it

01:31:32 --> 01:31:37
makes us uh as i said you know the

01:31:35 --> 01:31:40
ssence of intelligence is the ability

01:31:36 --> 01:31:41
to predict and so the because we're

01:31:39 --> 01:31:42
smarter

01:31:40 --> 01:31:44
as a side effect we also have this

01:31:41 --> 01:31:46
ability to kind of make predictions

01:31:43 --> 01:31:49
about our own

01:31:45 --> 01:31:51
future existence or lack thereof okay

01:31:48 --> 01:31:53
ou say religion helps with that i think

01:31:50 --> 01:31:55
religion hurts actually

01:31:52 --> 01:31:56
it makes people worry about like you

01:31:54 --> 01:31:58
know what's going to happen after their

01:31:55 --> 01:32:00
death etc

01:31:57 --> 01:32:01
if you believe that you know

01:31:59 --> 01:32:02
you just don't exist after that so like

01:32:00 --> 01:32:04
you know it solves completely the

01:32:01 --> 01:32:06
problem at least you're saying if you

01:32:03 --> 01:32:09
don't believe in god you don't worry

01:32:05 --> 01:32:10
about what happens after death yeah

01:32:08 --> 01:32:11
i don't know why you worry about the

01:32:09 --> 01:32:13
about

01:32:10 --> 01:32:15
you know this life because that's the

01:32:12 --> 01:32:16
only one you have

01:32:14 --> 01:32:18
i think it's well i don't i don't know

01:32:16 --> 01:32:21
if i were to say what ernest becker says

01:32:17 --> 01:32:24
and i said i agree with him more

01:32:20 --> 01:32:27
uh than not is um

01:32:23 --> 01:32:29
you do deeply worry uh if you if you

01:32:26 --> 01:32:32
believe there's no god there's still a

01:32:28 --> 01:32:35
deep worry like of the mystery of it all

01:32:31 --> 01:32:37
ike how does that make any sense that

01:32:34 --> 01:32:39
it just ends i don't think we can

01:32:36 --> 01:32:41
truly understand

01:32:38 --> 01:32:43
that this ride i mean so much of our

01:32:40 --> 01:32:47
life the consciousness the ego

01:32:42 --> 01:32:48
is uh invested in this in this being and

01:32:46 --> 01:32:50
then

01:32:47 --> 01:32:52
science keeps bringing humanity down

01:32:49 --> 01:32:55
from its pedestal

01:32:51 --> 01:32:57
and yeah that's another another example

01:32:54 --> 01:32:59
of it that's wonderful but for us

01:32:56 --> 01:33:01
individual humans we don't like to be

01:32:58 --> 01:33:02
brought down from a pedestal

01:33:00 --> 01:33:04
ike

01:33:01 --> 01:33:06
but see you're fine with it because well

01:33:04 --> 01:33:07
so what ernest becker would say is

01:33:05 --> 01:33:09
you're fine with it because that's just

01:33:06 --> 01:33:11
a more peaceful existence for you but

01:33:08 --> 01:33:13
you're not really fine you're hiding

01:33:10 --> 01:33:15
from in fact some of the people that

01:33:12 --> 01:33:16
experience the deepest trauma

01:33:14 --> 01:33:17
uh that

01:33:15 --> 01:33:20
earlier in life

01:33:16 --> 01:33:22
they often before they seek extensive

01:33:19 --> 01:33:24
therapy will say i'm fine it's like when

01:33:21 --> 01:33:26
you talk to people who are truly angry

01:33:23 --> 01:33:28
how are you doing i'm fine

01:33:25 --> 01:33:30
the question is what's going on

01:33:27 --> 01:33:33
ow i had a near death experience i had

01:33:29 --> 01:33:35
a very bad uh motorbike accident when i

01:33:32 --> 01:33:38
was 17. so

01:33:34 --> 01:33:40
but that didn't have any impact on

01:33:37 --> 01:33:41
my

01:33:39 --> 01:33:43
reflection on that topic so i'm

01:33:40 --> 01:33:45
basically just playing a bit of a

01:33:42 --> 01:33:46
devil's advocate pushing back and

01:33:44 --> 01:33:48
wondering

01:33:45 --> 01:33:50
is it truly possible to accept death and

01:33:47 --> 01:33:52
the flip side that's more interesting i

01:33:49 --> 01:33:55
think for ai and

01:33:51 --> 01:33:58
robotics is how important is it to have

01:33:54 --> 01:34:00
this as one of the suite of motivations

01:33:57 --> 01:34:03
is to

01:33:59 --> 01:34:04
not just avoid

01:34:02 --> 01:34:06
falling off the roof or something like

01:34:03 --> 01:34:07
that but

01:34:05 --> 01:34:08
ponder

01:34:06 --> 01:34:11
the

01:34:07 --> 01:34:13
end of the ride

01:34:10 --> 01:34:15
if you listen to the stoics

01:34:12 --> 01:34:19
it's uh it's a great motivator

01:34:14 --> 01:34:22
it adds a sense of urgency so maybe to

01:34:18 --> 01:34:24
truly fear death or be cognizant of it

01:34:21 --> 01:34:26
might give

01:34:23 --> 01:34:28
a deeper meaning and urgency to the

01:34:25 --> 01:34:29
moment to live

01:34:27 --> 01:34:31
fully

01:34:28 --> 01:34:33
well

01:34:30 --> 01:34:35
maybe i don't disagree with that uh i

01:34:32 --> 01:34:37
mean i think what motivates me here is

01:34:34 --> 01:34:39
uh

01:34:36 --> 01:34:41
you know knowing more about about human

01:34:38 --> 01:34:43
ature i mean i think uh human nature

01:34:40 --> 01:34:45
and human intelligence is a big mystery

01:34:42 --> 01:34:48
it's a scientific mystery

01:34:44 --> 01:34:51
uh in addition to you know philosophical

01:34:47 --> 01:34:52
and etc but you know i'm a true believer

01:34:50 --> 01:34:54
in science so

01:34:51 --> 01:34:57
um

01:34:53 --> 01:34:59
and and and i do have kind of a belief

01:34:56 --> 01:35:03
that for complex systems like like the

01:34:58 --> 01:35:05
brain on the mind the the way to

01:35:02 --> 01:35:07
understand it is try to reproduce it

01:35:04 --> 01:35:09
with you know artifacts that you build

01:35:06 --> 01:35:11
because you know what's essential to it

01:35:08 --> 01:35:12
when you try to build it you know the

01:35:10 --> 01:35:13
same way

01:35:11 --> 01:35:16
i've used this analogy before with you i

01:35:12 --> 01:35:18
believe um the same way we only started

01:35:15 --> 01:35:19
to understand uh

01:35:17 --> 01:35:21
aerodynamics when we started building

01:35:18 --> 01:35:22
airplanes and that helped us understand

01:35:20 --> 01:35:25
how birds fly

01:35:22 --> 01:35:27
ou know so i think there's kind of a

01:35:24 --> 01:35:28
similar process here where

01:35:26 --> 01:35:30
we don't have a theory of a full theory

01:35:28 --> 01:35:32
of intelligence

01:35:29 --> 01:35:34
but building you know intelligent

01:35:31 --> 01:35:35
artifacts will help us perhaps develop

01:35:33 --> 01:35:37
some

01:35:34 --> 01:35:39
you know underlying theory that

01:35:36 --> 01:35:42
encompasses not just artificial

01:35:38 --> 01:35:44
implements but also

01:35:41 --> 01:35:45
human and biological intelligence in

01:35:43 --> 01:35:47
general so you're an interesting person

01:35:44 --> 01:35:50
to ask this question about

01:35:46 --> 01:35:52
sort of all kinds of different other

01:35:49 --> 01:35:54
intelligent entities

01:35:51 --> 01:35:56
or intelligences

01:35:53 --> 01:35:58
what are your thoughts about kind of

01:35:55 --> 01:36:00
like the touring or the chinese room

01:35:57 --> 01:36:03
question

01:35:59 --> 01:36:06
if we create an ai system that exhibits

01:36:02 --> 01:36:08
a lot of properties of intelligence and

01:36:05 --> 01:36:10
consciousness

01:36:07 --> 01:36:13
how comfortable are you thinking of that

01:36:09 --> 01:36:15
entity as intelligent or conscious

01:36:12 --> 01:36:16
o you're trying to build now systems

01:36:14 --> 01:36:18
that have intelligence and there's

01:36:15 --> 01:36:20
metrics about their performance but that

01:36:17 --> 01:36:21
metric

01:36:19 --> 01:36:23
is

01:36:20 --> 01:36:25
external

01:36:22 --> 01:36:28
okay so how are you are you okay calling

01:36:24 --> 01:36:29
a thing intelligent are you going to be

01:36:27 --> 01:36:31
like most humans

01:36:28 --> 01:36:33
and be uh

01:36:30 --> 01:36:35
once again unhappy to be brought down

01:36:32 --> 01:36:37
from a pedestal of consciousness slash

01:36:34 --> 01:36:39
intelligence no i'm i'll be very happy

01:36:36 --> 01:36:42
to

01:36:38 --> 01:36:42
understand

01:36:41 --> 01:36:46
more about human nature human mind and

01:36:43 --> 01:36:48
human intelligence

01:36:45 --> 01:36:49
through the construction of machines

01:36:47 --> 01:36:52
that

01:36:48 --> 01:36:54
have similar abilities and

01:36:51 --> 01:36:57
if a consequence of this is to bring

01:36:53 --> 01:36:58
down humanity one notch down from

01:36:56 --> 01:37:00
it's already okay

01:36:57 --> 01:37:01
i'm just fine with it that's just the

01:36:59 --> 01:37:04
reality of life

01:37:00 --> 01:37:06
um so i'm fine with that now you were

01:37:03 --> 01:37:07
asking me about things that uh opinions

01:37:05 --> 01:37:08
i have that a lot of people may disagree

01:37:06 --> 01:37:10
with

01:37:07 --> 01:37:12
i think

01:37:09 --> 01:37:13
uh

01:37:11 --> 01:37:15
if we think about the design of an

01:37:12 --> 01:37:17
autonomous intelligence system so

01:37:14 --> 01:37:19
assuming that we are somewhat successful

01:37:16 --> 01:37:20
at some at some level

01:37:18 --> 01:37:23
of getting machines to learn models of

01:37:20 --> 01:37:25
the world predicting models of the world

01:37:22 --> 01:37:27
we have we build intrinsic motivation

01:37:24 --> 01:37:29
objective functions to drive the

01:37:26 --> 01:37:30
behavior of that system

01:37:28 --> 01:37:32
the system also has perception modules

01:37:29 --> 01:37:34
that allows it to estimate the state of

01:37:31 --> 01:37:36
the world and then have some way of

01:37:33 --> 01:37:38
iguring out the sequence of actions

01:37:35 --> 01:37:40
that you know to optimize a particular

01:37:37 --> 01:37:42
objective

01:37:39 --> 01:37:44
if it has a critic of the type that was

01:37:41 --> 01:37:46
describing before the thing that makes

01:37:43 --> 01:37:47
you recall your arm the second time i

01:37:45 --> 01:37:49
tried to pinch you

01:37:46 --> 01:37:51
m

01:37:48 --> 01:37:52
intelligent autonomous machine will have

01:37:50 --> 01:37:55
motions

01:37:51 --> 01:37:57
i think emotions are an integral part of

01:37:54 --> 01:37:59
autonomous intelligence

01:37:56 --> 01:38:02
if you have an intelligent system

01:37:58 --> 01:38:04
that is driven by

01:38:01 --> 01:38:06
intrinsic motivation by objectives

01:38:03 --> 01:38:07
if it has

01:38:05 --> 01:38:10
a critic that allows you to predict in

01:38:06 --> 01:38:11
advance whether the outcome of a

01:38:09 --> 01:38:13
situation is going to be good or

01:38:10 --> 01:38:15
bad is going to have emotions it's going

01:38:12 --> 01:38:17
to have fear yes

01:38:14 --> 01:38:18
when it predicts that the outcome is

01:38:16 --> 01:38:21
gonna is gonna be bad

01:38:18 --> 01:38:22
and and something to avoid is gonna have

01:38:20 --> 01:38:23
lation when it predicts it's gonna be

01:38:21 --> 01:38:27
good

01:38:22 --> 01:38:29
um uh if it has drives to

01:38:26 --> 01:38:32
relate with humans um you know in some

01:38:28 --> 01:38:33
ways the way humans have

01:38:31 --> 01:38:35
um

01:38:32 --> 01:38:37
you know it's it's gonna be social right

01:38:34 --> 01:38:39
and so it's gonna have emotions about

01:38:36 --> 01:38:40
attachment and and things of that type

01:38:38 --> 01:38:42
so

01:38:39 --> 01:38:43
um so i think uh you know the the sort

01:38:41 --> 01:38:45
of

01:38:42 --> 01:38:47
sci-fi

01:38:44 --> 01:38:48
thing where you know you see commander

01:38:46 --> 01:38:50
data like having an emotion chip that

01:38:47 --> 01:38:52
you can turn off right

01:38:49 --> 01:38:54
i think that's ridiculous

01:38:51 --> 01:38:56
o i mean here's the difficult

01:38:53 --> 01:38:58
philosophical

01:38:55 --> 01:39:00
social question

01:38:57 --> 01:39:03
do you think there will be a time

01:38:59 --> 01:39:04
like a civil rights movement for robots

01:39:02 --> 01:39:06
where

01:39:03 --> 01:39:10
um okay forget the movement but a

01:39:05 --> 01:39:10
discussion like the supreme court

01:39:09 --> 01:39:16
hat particular kinds of robots

01:39:12 --> 01:39:19
you know particular kinds of systems

01:39:15 --> 01:39:21
um deserve the same rights as humans

01:39:18 --> 01:39:23
because they can suffer

01:39:20 --> 01:39:25
just as humans can

01:39:22 --> 01:39:28
all those kinds of things

01:39:24 --> 01:39:30
well perhaps perhaps not like imagine

01:39:27 --> 01:39:32
that humans were

01:39:29 --> 01:39:34
that that you could uh

01:39:31 --> 01:39:37
you know die and be restored like you

01:39:34 --> 01:39:38
know you could be sort of you know be 3d

01:39:36 --> 01:39:41
reprinted and you know your brain could

01:39:37 --> 01:39:43
be reconstructed in its finest details

01:39:40 --> 01:39:44
our ideas of rights will change in that

01:39:42 --> 01:39:46
case

01:39:43 --> 01:39:48
if you can always just

01:39:45 --> 01:39:50
here's always a backup you could always

01:39:47 --> 01:39:52
restore maybe like the importance of

01:39:49 --> 01:39:55
murder will go down one notch that's

01:39:52 --> 01:39:56
right but also the uh

01:39:54 --> 01:39:58
your your

01:39:55 --> 01:40:00
you know desire to do dangerous things

01:39:57 --> 01:40:04
like you know

01:39:59 --> 01:40:06
doing skydiving or or you know

01:40:03 --> 01:40:07
race car driving

01:40:05 --> 01:40:10
you know car racing all that kind of

01:40:06 --> 01:40:12
stuff you know would probably increase

01:40:09 --> 01:40:13
or or you know airplane aerobatics or

01:40:11 --> 01:40:15
that kind of stuff right yeah it would

01:40:12 --> 01:40:16
be fine to do a lot of those things or

01:40:14 --> 01:40:18
explore

01:40:15 --> 01:40:19
you know dangerous areas and things like

01:40:17 --> 01:40:20
that it would kind of change your

01:40:18 --> 01:40:22
elationship so

01:40:19 --> 01:40:26
now it's very likely that robots would

01:40:21 --> 01:40:28
be like that because you know they'll be

01:40:25 --> 01:40:30
based on perhaps technology that is

01:40:27 --> 01:40:31
omewhat similar to

01:40:29 --> 01:40:33
day's technology and you can you can

01:40:30 --> 01:40:35
always have a backup

01:40:32 --> 01:40:36
so it's possible

01:40:34 --> 01:40:39
i don't know if you like video games but

01:40:35 --> 01:40:42
here's a there's a game called diablo

01:40:38 --> 01:40:44
and um oh my my sons are huge fans of

01:40:41 --> 01:40:46
this yes uh

01:40:43 --> 01:40:47
and in fact they made a game that's

01:40:45 --> 01:40:48
inspired by it

01:40:46 --> 01:40:51
awesome

01:40:47 --> 01:40:53
like built a game my three sons have a

01:40:50 --> 01:40:54
game design studio between them yeah

01:40:52 --> 01:40:56
that's awesome they came out with a game

01:40:54 --> 01:40:58
like it just came out nice again last

01:40:55 --> 01:41:00
year no this was last year earlier about

01:40:57 --> 01:41:01
a year ago that's awesome but so in

01:40:59 --> 01:41:04
diablo there's a something called

01:41:00 --> 01:41:05
hardcore mode which if you die there's

01:41:03 --> 01:41:08
no

01:41:04 --> 01:41:11
you're gone right that's it and so it's

01:41:07 --> 01:41:13
possible with ai systems

01:41:10 --> 01:41:15
for them to be able to operate

01:41:12 --> 01:41:17
successfully and for us to treat them in

01:41:14 --> 01:41:19
a certain way because they have to be

01:41:16 --> 01:41:22
integrated in human society

01:41:18 --> 01:41:24
they have to be able to die no copies

01:41:21 --> 01:41:26
allowed in fact copying is illegal it's

01:41:23 --> 01:41:28
possible with humans as well like

01:41:25 --> 01:41:29
cloning will be illegal even what's

01:41:27 --> 01:41:31
possible because

01:41:28 --> 01:41:32
cloning is not copying right i mean you

01:41:30 --> 01:41:34
don't reproduce the

01:41:31 --> 01:41:36
mind of the person and like

01:41:33 --> 01:41:37
xperience right it's just a delay twin

01:41:35 --> 01:41:39
so

01:41:36 --> 01:41:40
but then it's what we were talking about

01:41:38 --> 01:41:42
with computers that you'll be able to

01:41:39 --> 01:41:44
copy you right you'll be able to

01:41:41 --> 01:41:46
perfectly save pickle

01:41:43 --> 01:41:48
the the

01:41:45 --> 01:41:50
mind state and

01:41:47 --> 01:41:51
it's possible that that would be illegal

01:41:49 --> 01:41:54
because

01:41:50 --> 01:41:55
that goes against um

01:41:53 --> 01:41:56
that will destroy the motivations of the

01:41:54 --> 01:41:58
system

01:41:55 --> 01:42:01
okay so let's say you you have a

01:41:57 --> 01:42:03
domestic robot okay sometime in the

01:42:00 --> 01:42:06
future yes

01:42:02 --> 01:42:08
and uh the domestic robot you know comes

01:42:05 --> 01:42:09
to you kind of somewhat pre-trained you

01:42:07 --> 01:42:11
know it can do a bunch of things yes but

01:42:08 --> 01:42:12
it has a particular personality that

01:42:10 --> 01:42:14
makes it slightly different from the

01:42:11 --> 01:42:16
other robots because that makes them

01:42:13 --> 01:42:18
ore interesting and then because it's

01:42:15 --> 01:42:19
you know it's live with you for five

01:42:17 --> 01:42:23
years you've you've grown some

01:42:18 --> 01:42:25
attachment to it and vice versa and it's

01:42:22 --> 01:42:26
learned a lot about you

01:42:24 --> 01:42:28
or maybe it's not a household robot

01:42:25 --> 01:42:30
maybe it's uh maybe it's a virtual

01:42:27 --> 01:42:32
assistant that lives in your you know

01:42:29 --> 01:42:33
augmented reality glasses or whatever

01:42:31 --> 01:42:35
ight

01:42:32 --> 01:42:36
uh you know the horror movie type thing

01:42:34 --> 01:42:37
right

01:42:35 --> 01:42:40
um

01:42:36 --> 01:42:41
and that system to some extent

01:42:39 --> 01:42:43
he the

01:42:40 --> 01:42:45
intelligence in that system

01:42:42 --> 01:42:47
is a bit like your child or maybe your

01:42:44 --> 01:42:49
phd student in a sense that

01:42:46 --> 01:42:52
here's a lot of you in that in that

01:42:48 --> 01:42:54
machine now right yeah and so

01:42:51 --> 01:42:55
if it were a living thing

01:42:53 --> 01:42:57
you would do this

01:42:54 --> 01:43:00
for free if you want right if it's your

01:42:56 --> 01:43:03
child your child can you know then

01:42:59 --> 01:43:04
live his or her own life and you know

01:43:02 --> 01:43:06
the fact that they learn stuff from you

01:43:03 --> 01:43:09
doesn't mean that you have any ownership

01:43:05 --> 01:43:11
of it right yeah but if it's a robot

01:43:08 --> 01:43:14
hat you've trained perhaps you have

01:43:10 --> 01:43:16
some uh yeah intellectual property claim

01:43:13 --> 01:43:19
about intellectual property oh i thought

01:43:15 --> 01:43:21
you meant like uh permanent value in the

01:43:18 --> 01:43:22
sense this part of you is in well there

01:43:20 --> 01:43:25
is permanent value right so you would

01:43:22 --> 01:43:26
lose a lot if that robot were to be

01:43:24 --> 01:43:28
destroyed and you you had no backup you

01:43:25 --> 01:43:30
would lose a lot you know you a lot of

01:43:27 --> 01:43:32
investment you know kind of like a

01:43:29 --> 01:43:34
uh you know a person dying you know um

01:43:31 --> 01:43:36
that that a friend of a friend of you

01:43:33 --> 01:43:39
was dying or or a co-worker or something

01:43:35 --> 01:43:41
like that um

01:43:38 --> 01:43:43
but also uh you have like

01:43:40 --> 01:43:45
intellectual property rights in the

01:43:42 --> 01:43:47
sense that that

01:43:44 --> 01:43:49
system is fine-tuned to your

01:43:46 --> 01:43:51
particular existence so that's now a

01:43:48 --> 01:43:53
very unique instantiation of that

01:43:50 --> 01:43:55
original background model whatever it

01:43:52 --> 01:43:56
was that arrived

01:43:54 --> 01:43:57
and then there are issues of privacy

01:43:55 --> 01:44:00
right because now

01:43:56 --> 01:44:02
imagine that that robot has its own kind

01:43:59 --> 01:44:04
of volition and decides to work from

01:44:01 --> 01:44:06
someone else yes or kind of you know

01:44:03 --> 01:44:08
thinks

01:44:05 --> 01:44:10
life with you is sort of untenable or

01:44:07 --> 01:44:12
whatever right um

01:44:09 --> 01:44:14
now all the things that that system

01:44:11 --> 01:44:15
learned from you

01:44:13 --> 01:44:16
h

01:44:14 --> 01:44:18
you know how

01:44:15 --> 01:44:19
can you like you know delete all the

01:44:17 --> 01:44:21
personal information that that system

01:44:18 --> 01:44:22
knows about you yeah

01:44:20 --> 01:44:25
i mean that would be kind of an ethical

01:44:21 --> 01:44:28
question like you know can you erase the

01:44:24 --> 01:44:30
mind of a of a intelligent robot

01:44:27 --> 01:44:32
uh to protect your your privacy yeah you

01:44:30 --> 01:44:35
can't do this with humans you can ask

01:44:31 --> 01:44:37
them to shut up but that you don't have

01:44:34 --> 01:44:38
complete power over them can't erase

01:44:36 --> 01:44:40
humans yeah it's the problem with

01:44:37 --> 01:44:42
relationships you know that you break up

01:44:40 --> 01:44:43
you can't you can't erase the other

01:44:41 --> 01:44:45
human

01:44:42 --> 01:44:47
with robots i think it'll have to be the

01:44:44 --> 01:44:51
same thing with robots that that risk

01:44:46 --> 01:44:52
that there has to be um

01:44:50 --> 01:44:54
some

01:44:51 --> 01:44:57
risk to our interactions to truly

01:44:53 --> 01:44:59
experience them deeply it feels like so

01:44:56 --> 01:45:00
you have to be able to lose your robot

01:44:58 --> 01:45:02
friend

01:44:59 --> 01:45:05
and that robot friend to go tweeting

01:45:01 --> 01:45:07
about how much of an you are but

01:45:04 --> 01:45:09
hen are you allowed to you know murder

01:45:06 --> 01:45:10
the robot to protect your private

01:45:08 --> 01:45:13
information yeah probably decides to

01:45:09 --> 01:45:15
leave i have the situation that for

01:45:12 --> 01:45:17
obots with with certain

01:45:14 --> 01:45:20
like it's almost like uh regulation if

01:45:16 --> 01:45:21
you declare your robot to be

01:45:19 --> 01:45:23
let's call it sentient or something like

01:45:20 --> 01:45:25
that like this this robot is designed

01:45:22 --> 01:45:27
for human interaction then you're not

01:45:24 --> 01:45:29
allowed to murder these robots it's the

01:45:26 --> 01:45:31
same as murdering other humans well but

01:45:28 --> 01:45:33
what about you do a backup of the robot

01:45:30 --> 01:45:34
you do preserve on the on on a hard

01:45:32 --> 01:45:36
rive or the equivalent in the future

01:45:33 --> 01:45:37
that might be illegal just like it's

01:45:35 --> 01:45:39
like

01:45:36 --> 01:45:40
priority uh piracy is illegal but it's

01:45:38 --> 01:45:42
your own it's your own robot right but

01:45:39 --> 01:45:45
you can't you don't but then but then

01:45:42 --> 01:45:47
you can wipe out

01:45:44 --> 01:45:49
his brain so the this robot doesn't know

01:45:46 --> 01:45:49
anything about you anymore but you still

01:45:48 --> 01:45:51
have

01:45:48 --> 01:45:53
technically a certain existence because

01:45:50 --> 01:45:55
you backed it up and then there'll be

01:45:52 --> 01:45:57
these great speeches at the supreme

01:45:54 --> 01:45:59
court by saying oh sure you can erase

01:45:56 --> 01:46:01
the mind of the robot just like you can

01:45:58 --> 01:46:03
erase the mind of a human we both can

01:46:00 --> 01:46:06
suffer there'll be some epic like obama

01:46:02 --> 01:46:08
type character with a speech that we we

01:46:05 --> 01:46:09
like the robots and the humans are the

01:46:07 --> 01:46:12
same

01:46:08 --> 01:46:13
we can both suffer we can both hope

01:46:11 --> 01:46:15
we can both

01:46:12 --> 01:46:18
all those all those kinds of things

01:46:14 --> 01:46:20
raise families all that kind of stuff

01:46:17 --> 01:46:22
it's it's uh interesting for these just

01:46:19 --> 01:46:25
like you said emotion seems to be a

01:46:21 --> 01:46:27
fascinatingly powerful aspect of human

01:46:24 --> 01:46:29
interaction human robot

01:46:26 --> 01:46:31
interaction and if they're able to

01:46:28 --> 01:46:33
exhibit emotions

01:46:30 --> 01:46:34
at the end of the day that's probably

01:46:32 --> 01:46:36
going to

01:46:33 --> 01:46:38
have us deeply consider

01:46:35 --> 01:46:41
human rights like what we value in

01:46:37 --> 01:46:43
humans what we value in other animals

01:46:40 --> 01:46:45
that's why robots and ai is great it

01:46:42 --> 01:46:47
makes us ask uh really good questions

01:46:44 --> 01:46:48
the hard questions yeah but

01:46:46 --> 01:46:50
you ask about you asked about the

01:46:47 --> 01:46:52
chinese room type argument you know is

01:46:49 --> 01:46:54
it real if it looks real yeah i think

01:46:51 --> 01:46:56
the chinese room argument is the

01:46:53 --> 01:46:57
ridiculous one so

01:46:55 --> 01:46:58
so for people who don't know chinese

01:46:56 --> 01:47:00
room is

01:46:57 --> 01:47:03
uh you ca you can i don't even know how

01:46:59 --> 01:47:05
to formulate it well but basically

01:47:02 --> 01:47:07
ou can mimic the behavior of an

01:47:04 --> 01:47:11
intelligent system by just following a

01:47:06 --> 01:47:13
giant algorithm code book that tells you

01:47:10 --> 01:47:15
exactly how to respond in exactly each

01:47:12 --> 01:47:17
case but is that really intelligent it's

01:47:14 --> 01:47:19
like a giant lookup table when this

01:47:16 --> 01:47:21
person says this you answer this when

01:47:18 --> 01:47:23
this person says this you answer this

01:47:20 --> 01:47:25
and

01:47:22 --> 01:47:27
if you understand how that works you

01:47:24 --> 01:47:29
have this giant nearly infinite lookup

01:47:26 --> 01:47:31
table is that really intelligence

01:47:28 --> 01:47:33
because intelligence seems to be

01:47:30 --> 01:47:35
a mechanism that's much more interesting

01:47:32 --> 01:47:38
and complex than this lookup table i

01:47:34 --> 01:47:39
don't think so so the i mean the real

01:47:37 --> 01:47:40
question comes down to

01:47:38 --> 01:47:42
do you think

01:47:40 --> 01:47:44
uh

01:47:41 --> 01:47:46
you know you can you can mechanize uh

01:47:43 --> 01:47:48
intelligence in some way even if that

01:47:45 --> 01:47:50
involves uh learning

01:47:47 --> 01:47:51
and the answer is of course yes there's

01:47:49 --> 01:47:53
no question

01:47:50 --> 01:47:56
there's a second question then which is

01:47:52 --> 01:47:58
uh assuming you can uh reproduce

01:47:55 --> 01:48:00
intelligence in sort of different

01:47:57 --> 01:48:01
hardware than biological hardware you

01:47:59 --> 01:48:03
know like computers

01:48:00 --> 01:48:04
uh

01:48:02 --> 01:48:05
can you

01:48:03 --> 01:48:09
know

01:48:04 --> 01:48:11
match uh human intelligence in

01:48:08 --> 01:48:13
all the domains in which

01:48:10 --> 01:48:15
umans are intelligent

01:48:12 --> 01:48:18
is it possible right so that's the

01:48:14 --> 01:48:19
hypothesis of a strong ai the answer to

01:48:17 --> 01:48:21
this

01:48:18 --> 01:48:23
in my opinion is unqualified yes this

01:48:20 --> 01:48:25
will swell happen at some point there's

01:48:22 --> 01:48:26
no question that

01:48:24 --> 01:48:28
machines at some point will become more

01:48:25 --> 01:48:30
intelligent than humans in all domains

01:48:27 --> 01:48:31
where humans are intelligent this is not

01:48:29 --> 01:48:35
for tomorrow it's going to take a long

01:48:30 --> 01:48:38
time regardless of what you know

01:48:34 --> 01:48:41
elon and others have claimed or believed

01:48:38 --> 01:48:44
this is a lot a lot harder than many of

01:48:40 --> 01:48:45
those guys think it is

01:48:43 --> 01:48:47
and many of those guys who thought it

01:48:44 --> 01:48:49
was simpler than that years you know

01:48:46 --> 01:48:51
five years ago now i think it's hard

01:48:48 --> 01:48:52
because it's been five years and they

01:48:50 --> 01:48:54
realize it's it's gonna take a lot

01:48:52 --> 01:48:55
longer

01:48:53 --> 01:48:57
that includes a bunch of people deepmind

01:48:54 --> 01:48:59
for example but um oh interesting i

01:48:56 --> 01:49:01
haven't actually uh touched base with

01:48:58 --> 01:49:02
e deepmind folks but some of it elon

01:49:00 --> 01:49:05
or

01:49:01 --> 01:49:08
uh democracy i mean sometimes

01:49:04 --> 01:49:10
your role you have to kind of

01:49:07 --> 01:49:12
create deadlines that are nearer than

01:49:09 --> 01:49:14
farther away yeah to kind of create an

01:49:11 --> 01:49:16
urgency because you know you have to

01:49:13 --> 01:49:17
believe the impossible as possible in

01:49:15 --> 01:49:19
order to accomplish it and there's of

01:49:16 --> 01:49:20
course a flip side to that coin but it's

01:49:18 --> 01:49:22
a weird

01:49:20 --> 01:49:24
you can't be too cynical if you want to

01:49:21 --> 01:49:26
get something done absolutely i i agree

01:49:23 --> 01:49:27
with that but um

01:49:25 --> 01:49:30
i mean you have to inspire people right

01:49:26 --> 01:49:32
o work on certain ambitious things

01:49:29 --> 01:49:34
um

01:49:31 --> 01:49:36
so you know it's it's uh it's certainly

01:49:33 --> 01:49:38
a lot harder than we believe but there's

01:49:35 --> 01:49:39
no question in my mind that this will

01:49:37 --> 01:49:41
happen and now you know people

01:49:38 --> 01:49:42
are kind of worried about what does that

01:49:40 --> 01:49:43
mean

01:49:41 --> 01:49:45
for humans

01:49:42 --> 01:49:46
they are going to be brought down from

01:49:44 --> 01:49:48
their pedestal you know a bunch of

01:49:46 --> 01:49:50
notches

01:49:47 --> 01:49:51
with that and uh

01:49:49 --> 01:49:52
you know

01:49:50 --> 01:49:54
is that going to be good or bad i mean

01:49:51 --> 01:49:56
it's just going to give more power right

01:49:53 --> 01:49:58
it's an amplifier for human intelligence

01:49:55 --> 01:50:00
really so speaking of doing cool

01:49:57 --> 01:50:01
ambitious things

01:49:59 --> 01:50:03
fair

01:50:00 --> 01:50:06
the facebook ai research group has

01:50:02 --> 01:50:07
recently celebrated its 8th birthday

01:50:05 --> 01:50:09
or

01:50:06 --> 01:50:11
maybe you can correct me on that

01:50:08 --> 01:50:13
looking back what has been

01:50:10 --> 01:50:15
the successes the failures the lessons

01:50:12 --> 01:50:17
learned from the eight years affair and

01:50:14 --> 01:50:18
maybe you can also give context of where

01:50:16 --> 01:50:21
does

01:50:17 --> 01:50:23
the newly minted meta ai

01:50:20 --> 01:50:24
fit into how does it relate to fare

01:50:22 --> 01:50:27
right so let me tell you a little bit

01:50:23 --> 01:50:29
about the organization of all this uh uh

01:50:26 --> 01:50:31
yeah fair was created almost exactly

01:50:28 --> 01:50:33
eight years ago uh it wasn't called fair

01:50:30 --> 01:50:35
yet it took that name a few a few months

01:50:32 --> 01:50:38
later

01:50:34 --> 01:50:40
and at the time i joined facebook there

01:50:37 --> 01:50:42
was a group called the ai group that had

01:50:40 --> 01:50:43
about 12

01:50:41 --> 01:50:45
engineers and a few science a few

01:50:42 --> 01:50:46
scientists like you know ten engineers

01:50:44 --> 01:50:47
and two scientists or something like

01:50:45 --> 01:50:50
that

01:50:46 --> 01:50:51
i ran it for three and a half years as a

01:50:49 --> 01:50:53
director

01:50:50 --> 01:50:55
you know hired the first few scientists

01:50:52 --> 01:50:57
and kind of set up the culture and

01:50:54 --> 01:50:59
organized it you know explain to the

01:50:56 --> 01:51:01
facebook leadership what what

01:50:58 --> 01:51:03
fundamental research was about and how

01:51:00 --> 01:51:05
it can work within uh

01:51:02 --> 01:51:08
industry and how it needs to be open and

01:51:04 --> 01:51:09
everything

01:51:07 --> 01:51:13
and

01:51:08 --> 01:51:14
i think it's been an unqualified success

01:51:12 --> 01:51:18
in the sense that

01:51:13 --> 01:51:20
fair has simultaneously produced

01:51:17 --> 01:51:21
you know top-level research

01:51:19 --> 01:51:23
and advanced the science and the

01:51:20 --> 01:51:27
technology provided tools open source

01:51:22 --> 01:51:30
tools like pytorch and many others

01:51:26 --> 01:51:32
but at the same time has had a direct or

01:51:30 --> 01:51:34
mostly indirect impact

01:51:31 --> 01:51:36
on

01:51:33 --> 01:51:39
facebook at the time now meta

01:51:36 --> 01:51:40
in the sense that a lot of systems

01:51:38 --> 01:51:42
that are

01:51:39 --> 01:51:43
that meta is built around

01:51:41 --> 01:51:45
now are

01:51:42 --> 01:51:47
based on

01:51:44 --> 01:51:49
research projects that

01:51:46 --> 01:51:51
started at at fair so if you were to

01:51:48 --> 01:51:52
take out you know deep learning out of

01:51:50 --> 01:51:54
uh

01:51:51 --> 01:51:56
facebook services now and and meta more

01:51:53 --> 01:51:58
generally uh i mean the

01:51:56 --> 01:52:00
company would literally crumble i mean

01:51:57 --> 01:52:02
it's completely built around

01:51:59 --> 01:52:04
ai these days and it's really

01:52:01 --> 01:52:07
essential to the operations

01:52:03 --> 01:52:08
o what happened after three and a half

01:52:06 --> 01:52:11
years is that

01:52:08 --> 01:52:12
i changed role i became chief scientist

01:52:10 --> 01:52:13
so i'm i'm not doing day-to-day

01:52:11 --> 01:52:15
management of

01:52:12 --> 01:52:17
affair anymore

01:52:14 --> 01:52:19
i'm more of a kind of

01:52:16 --> 01:52:21
you know think about strategy and things

01:52:18 --> 01:52:23
like that and and i carry my i conduct

01:52:20 --> 01:52:24
my own research i've you know my own

01:52:22 --> 01:52:26
kind of research group working on star

01:52:23 --> 01:52:27
supervision and things like this which i

01:52:25 --> 01:52:29
didn't have time to do when i was

01:52:26 --> 01:52:32
director

01:52:28 --> 01:52:34
so now uh fair is run by uh joel pineau

01:52:31 --> 01:52:36
and antoine board

01:52:34 --> 01:52:38
together because fair is kind of split

01:52:35 --> 01:52:40
in two now there's something called fair

01:52:37 --> 01:52:41
labs which is sort of

01:52:39 --> 01:52:43
bottom-up scientist-driven research and

01:52:40 --> 01:52:45
fair excel which is slightly more

01:52:42 --> 01:52:46
organized for bigger projects that

01:52:44 --> 01:52:48
require

01:52:45 --> 01:52:50
a little more kind of focus and more

01:52:47 --> 01:52:52
ngineering support and things like that

01:52:49 --> 01:52:54
so joelle needs fair lab and antoine

01:52:51 --> 01:52:57
bourne leads very where are they located

01:52:54 --> 01:53:00
uh it's always delocalized all over

01:52:56 --> 01:53:02
um so there's no question that the

01:52:59 --> 01:53:03
leadership

01:53:01 --> 01:53:04
of the company

01:53:02 --> 01:53:06
believes that

01:53:03 --> 01:53:09
his was a very worthwhile

01:53:05 --> 01:53:11
investment and what that means is that

01:53:08 --> 01:53:13
uh

01:53:10 --> 01:53:15
it's it's there for the long run

01:53:12 --> 01:53:17
right so there is uh

01:53:14 --> 01:53:18
if you if you want to talk in these

01:53:16 --> 01:53:20
terms which i don't like there's a

01:53:17 --> 01:53:21
business model if you want

01:53:19 --> 01:53:23
where where

01:53:20 --> 01:53:25
uh fair despite being a very fundamental

01:53:22 --> 01:53:27
research lab brings a lot of value to

01:53:24 --> 01:53:30
the company either mostly indirectly

01:53:26 --> 01:53:30
through other groups

01:53:29 --> 01:53:34
now what happened three and a half years

01:53:31 --> 01:53:36
ago when i stepped down is was also the

01:53:33 --> 01:53:40
creation of facebook ai which was

01:53:35 --> 01:53:42
basically a larger organization that

01:53:39 --> 01:53:44
covers fare so fair is included in it

01:53:41 --> 01:53:45
but also has other organizations that

01:53:43 --> 01:53:46
are

01:53:44 --> 01:53:47
uh

01:53:45 --> 01:53:50
focused on

01:53:46 --> 01:53:53
applied research or advanced development

01:53:50 --> 01:53:54
of ai technology that is more you know

01:53:52 --> 01:53:56
focused on the

01:53:53 --> 01:53:58
products of the company so less emphasis

01:53:55 --> 01:53:59
on fundamental research less fundamental

01:53:57 --> 01:54:00
but it's still research i mean there's a

01:53:58 --> 01:54:02
lot of papers coming out of those

01:53:59 --> 01:54:03
organizations and

01:54:01 --> 01:54:05
uh

01:54:02 --> 01:54:07
people are awesome awesome and you know

01:54:04 --> 01:54:11
onderful to interact with and but it

01:54:06 --> 01:54:13
serves uh as kind of uh

01:54:10 --> 01:54:15
a way to you kind of scale up

01:54:12 --> 01:54:17
if you want um

01:54:14 --> 01:54:19
sort of ai technology which you know may

01:54:16 --> 01:54:21
be very experimental and and sort of lab

01:54:18 --> 01:54:24
prototypes into things that are usable

01:54:20 --> 01:54:27
so fair is a subset of meta ai it's fair

01:54:23 --> 01:54:30
become like kfc it it'll just keep the f

01:54:26 --> 01:54:31
nobody cares what the f stands for

01:54:29 --> 01:54:34
we'll know

01:54:30 --> 01:54:35
soon enough uh by uh probably probably

01:54:33 --> 01:54:38
by the end of the

01:54:34 --> 01:54:40
of 2021 this is not a giant change mayor

01:54:37 --> 01:54:41
fair well mayor doesn't sound too good

01:54:39 --> 01:54:43
but

01:54:40 --> 01:54:44
you know the the brand people are kind

01:54:42 --> 01:54:46
of deciding on this

01:54:43 --> 01:54:47
and they've been hesitating for for a

01:54:45 --> 01:54:49
while now and they you know they tell us

01:54:46 --> 01:54:50
they're going to come up with an answer

01:54:48 --> 01:54:52
as to whether fair is going to change

01:54:49 --> 01:54:54
name or whether we're going to change

01:54:51 --> 01:54:55
just the meaning of the f

01:54:53 --> 01:54:57
oh that's a good call i would keep fair

01:54:54 --> 01:54:58
and change the meaning of the f that

01:54:56 --> 01:55:01
would be my preference you know i would

01:54:57 --> 01:55:03
tend i would turn the f into fundamental

01:55:00 --> 01:55:05
oh that's what i researched oh that's

01:55:02 --> 01:55:07
really good yeah then meta ai so this

01:55:04 --> 01:55:09
would be fair affair yeah but you know

01:55:06 --> 01:55:13
people will call it fair right yeah

01:55:08 --> 01:55:15
exactly i like it and now meta ai uh

01:55:12 --> 01:55:16
is part of

01:55:14 --> 01:55:20
the

01:55:15 --> 01:55:21
reality lab so you know

01:55:19 --> 01:55:23
meta now

01:55:20 --> 01:55:24
the new facebook is called meta and it's

01:55:22 --> 01:55:26
kind of

01:55:23 --> 01:55:27
divided into

01:55:25 --> 01:55:28
you know

01:55:26 --> 01:55:31
facebook instagram

01:55:27 --> 01:55:31
whatsapp

01:55:30 --> 01:55:36
and reality lab and reality lab is about

01:55:34 --> 01:55:37
you know ar vr

01:55:35 --> 01:55:39
uh

01:55:36 --> 01:55:41
you know telepresence communication part

01:55:38 --> 01:55:42
uh technology and stuff like that that's

01:55:40 --> 01:55:44
kind of the

01:55:41 --> 01:55:47
you can think of it as the sort of

01:55:44 --> 01:55:50
a combination of um

01:55:46 --> 01:55:51
sort of new products and and technology

01:55:49 --> 01:55:53
part of uh

01:55:50 --> 01:55:55
meta is that where the touch

01:55:52 --> 01:55:56
sensing for robots i saw that you were

01:55:54 --> 01:55:58
posting about that's that's what i

01:55:56 --> 01:56:00
touched on for robotics party fair

01:55:57 --> 01:56:03
actually that's that's it oh it is okay

01:55:59 --> 01:56:04
eah this is also the no but there is

01:56:02 --> 01:56:07
the the other way the

01:56:03 --> 01:56:09
haptic glove right yes that has like

01:56:06 --> 01:56:10
that's more reality that's that's

01:56:08 --> 01:56:11
reality lab

01:56:09 --> 01:56:13
research

01:56:10 --> 01:56:14
i have to have research but by the way

01:56:12 --> 01:56:17
the touch sensors are super interesting

01:56:13 --> 01:56:18
uh like integrating that modality into

01:56:16 --> 01:56:21
the whole

01:56:17 --> 01:56:22
uh sensing uh suite is very interesting

01:56:20 --> 01:56:23
so

01:56:21 --> 01:56:24
uh

01:56:22 --> 01:56:26
what do you think about the metaverse

01:56:23 --> 01:56:28
what do you think about this whole

01:56:25 --> 01:56:31
uh this whole kind of expansion of the

01:56:28 --> 01:56:32
view of the role of facebook and meta in

01:56:30 --> 01:56:34
the world well i made a verse really

01:56:31 --> 01:56:37
should be thought of as the next step in

01:56:33 --> 01:56:39
the internet right sort of

01:56:36 --> 01:56:42
trying to

01:56:38 --> 01:56:44
kind of you know make the experience

01:56:41 --> 01:56:46
more compelling

01:56:43 --> 01:56:48
of you know being

01:56:45 --> 01:56:50
connected either with other people or

01:56:47 --> 01:56:52
with content

01:56:49 --> 01:56:54
and you know we are

01:56:51 --> 01:56:57
volved and trained to

01:56:53 --> 01:56:59
evolve in you know 3d environments where

01:56:56 --> 01:57:01
uh you know we can see other people we

01:56:58 --> 01:57:03
can talk to them when when we're near

01:57:00 --> 01:57:04
them or

01:57:02 --> 01:57:05
you know and other people are far away

01:57:03 --> 01:57:08
can hear us you know things like that

01:57:04 --> 01:57:10
right so it it there's a lot of social

01:57:07 --> 01:57:12
conventions that exist in the real world

01:57:09 --> 01:57:15
that we can try to transpose now what is

01:57:11 --> 01:57:17
going to be eventually the

01:57:14 --> 01:57:19
uh how compelling is it going to be

01:57:16 --> 01:57:20
like our you know uh is it going to be

01:57:18 --> 01:57:21
the case that people are going to be

01:57:19 --> 01:57:23
willing to

01:57:20 --> 01:57:25
do this if they have to wear you know a

01:57:22 --> 01:57:27
huge pair of goggles all day

01:57:24 --> 01:57:30
maybe not right but then again if the

01:57:26 --> 01:57:32
xperience is sufficiently compelling

01:57:29 --> 01:57:34
maybe so or if the device that you have

01:57:31 --> 01:57:36
to wear is just basically a pair of

01:57:33 --> 01:57:37
glasses you know technology makes

01:57:35 --> 01:57:41
ufficient progress for that

01:57:36 --> 01:57:43
um you know ar is a much easier

01:57:40 --> 01:57:45
concept to grasp that you're going to

01:57:42 --> 01:57:46
have you know augmented reality glasses

01:57:44 --> 01:57:48
that

01:57:45 --> 01:57:50
basically contain some sort of you know

01:57:47 --> 01:57:52
virtual assistant that can help you in

01:57:49 --> 01:57:53
your daily lives but at the same time

01:57:51 --> 01:57:55
with the ar you have to contend with

01:57:52 --> 01:57:57
reality with vr you can completely

01:57:54 --> 01:57:59
detach yourself from reality so it gives

01:57:56 --> 01:58:01
you freedom it might be easier to design

01:57:58 --> 01:58:02
worlds in in vr

01:58:00 --> 01:58:05
yeah but you you can imagine how you

01:58:02 --> 01:58:08
know the metaverse being

01:58:04 --> 01:58:10
a mix a mix right or or like you can

01:58:07 --> 01:58:11
have objects that exist in the metaverse

01:58:09 --> 01:58:15
that you know pop up on top of the real

01:58:10 --> 01:58:17
world or only exist in virtual reality

01:58:14 --> 01:58:19
okay let me ask the hard question

01:58:16 --> 01:58:21
oh because all of this was easy so this

01:58:18 --> 01:58:25
was easy uh

01:58:20 --> 01:58:27
the facebook now meta the social network

01:58:24 --> 01:58:30
has been painted by the media as a net

01:58:26 --> 01:58:31
negative for society even destructive

01:58:29 --> 01:58:33
and evil at times

01:58:30 --> 01:58:36
you've pushed back against this

01:58:32 --> 01:58:37
defending facebook can you explain your

01:58:35 --> 01:58:39
defense

01:58:36 --> 01:58:41
yeah so the the description the company

01:58:38 --> 01:58:44
that is being described in the

01:58:40 --> 01:58:46
in some media

01:58:43 --> 01:58:48
uh is not the company we know when we

01:58:45 --> 01:58:50
work inside

01:58:47 --> 01:58:52
and you know

01:58:49 --> 01:58:53
it could be claimed that

01:58:51 --> 01:58:55
a lot of employees are uninformed about

01:58:52 --> 01:58:57
what really goes on in the company but

01:58:54 --> 01:58:58
you know i'm a vice president

01:58:56 --> 01:59:00
i mean i have a pretty good vision of

01:58:58 --> 01:59:02
what goes on you know i don't know

01:58:59 --> 01:59:03
everything obviously i'm not involved in

01:59:01 --> 01:59:05
everything but

01:59:02 --> 01:59:06
certainly not in decision about like you

01:59:04 --> 01:59:07
know content moderation or anything like

01:59:05 --> 01:59:09
this but

01:59:06 --> 01:59:11
i have you know some decent vision

01:59:08 --> 01:59:13
of what goes on

01:59:10 --> 01:59:14
and this evil that is being described i

01:59:12 --> 01:59:16
just don't see it

01:59:13 --> 01:59:17
and then you know i think there is an

01:59:15 --> 01:59:19
easy story

01:59:16 --> 01:59:21
to buy

01:59:18 --> 01:59:23
which is that you know all the bad

01:59:20 --> 01:59:25
things in the in the world and you know

01:59:22 --> 01:59:26
the the reason your friend believe crazy

01:59:24 --> 01:59:28
stuff

01:59:25 --> 01:59:30
um you know there's an easy scapegoat

01:59:28 --> 01:59:33
right in the

01:59:29 --> 01:59:35
uh in in in social media in general uh

01:59:32 --> 01:59:36
facebook in particular

01:59:34 --> 01:59:38
but you have to look at the data like is

01:59:35 --> 01:59:40
it the case

01:59:37 --> 01:59:43
that uh facebook for example uh

01:59:39 --> 01:59:44
polarizes people politically

01:59:42 --> 01:59:46
um are there academic studies that show

01:59:44 --> 01:59:48
this

01:59:45 --> 01:59:49
it the case that uh you know

01:59:47 --> 01:59:51
teenagers uh

01:59:48 --> 01:59:52
think of themselves less if they use

01:59:50 --> 01:59:55
instagram more

01:59:52 --> 01:59:56
is it the case that uh

01:59:54 --> 01:59:59
you know

01:59:55 --> 02:00:02
people get more riled up against

01:59:58 --> 02:00:04
you know opposite sides in a in a debate

02:00:01 --> 02:00:06
or political opinion if they if they are

02:00:03 --> 02:00:07
more on facebook or if they are less

02:00:05 --> 02:00:09
and

02:00:06 --> 02:00:11
study after study

02:00:08 --> 02:00:13
show that none of this is true

02:00:10 --> 02:00:15
this is independent studies by academic

02:00:12 --> 02:00:18
they're not funded by facebook or meta

02:00:14 --> 02:00:19
um you know study by stanford by some of

02:00:17 --> 02:00:21
my colleagues at nyu actually with whom

02:00:18 --> 02:00:23
i have no connection

02:00:20 --> 02:00:24
um you know there's a study recently

02:00:22 --> 02:00:28
they

02:00:23 --> 02:00:28
paid people i think it was in um

02:00:28 --> 02:00:33
in in the former yugoslavia i'm not

02:00:30 --> 02:00:34
exactly sure in what what part but they

02:00:32 --> 02:00:36
paid people to not use facebook for a

02:00:33 --> 02:00:39
while in the

02:00:35 --> 02:00:39
period

02:00:38 --> 02:00:43
before the anniversary of the

02:00:40 --> 02:00:45
serenity

02:00:42 --> 02:00:46
massacres right so you know people get

02:00:44 --> 02:00:47
riled up like should you know should we

02:00:45 --> 02:00:50
have

02:00:46 --> 02:00:52
a celebration i mean a memorial kind of

02:00:49 --> 02:00:55
celebration for it or not so they paid a

02:00:51 --> 02:00:57
bunch of people to not use facebook for

02:00:54 --> 02:00:59
a few weeks

02:00:56 --> 02:01:01
it turns out that

02:00:58 --> 02:01:03
hose people ended up being more

02:01:00 --> 02:01:04
polarized than they were at the

02:01:02 --> 02:01:07
beginning and the people who were more

02:01:03 --> 02:01:09
on facebook were less polarized

02:01:06 --> 02:01:10
there's a study you know from stanford

02:01:08 --> 02:01:12
of uh

02:01:09 --> 02:01:14
economists at stanford that

02:01:11 --> 02:01:16
ried to identify the causes of uh

02:01:13 --> 02:01:18
increasing polarization in the u.s

02:01:15 --> 02:01:21
and it's been going on for 40 years

02:01:17 --> 02:01:23
before you know mark zuckerberg was born

02:01:20 --> 02:01:26
yeah uh continuously

02:01:22 --> 02:01:27
and um and uh so if there is a cause

02:01:25 --> 02:01:28
it's not

02:01:26 --> 02:01:30
facebook or social media so you could

02:01:27 --> 02:01:33
say social media just accelerated but no

02:01:29 --> 02:01:35
i mean it's basically a continuous

02:01:32 --> 02:01:37
uh evolution by some measure of

02:01:34 --> 02:01:38
polarization in the us and then you

02:01:36 --> 02:01:40
compare this with other countries like

02:01:37 --> 02:01:42
uh

02:01:39 --> 02:01:45
the the west half of germany because you

02:01:41 --> 02:01:48
can't go 40 years in east eastside or

02:01:44 --> 02:01:50
denmark or or other countries

02:01:47 --> 02:01:51
and they use facebook just as much and

02:01:49 --> 02:01:53
they're not getting more polarized

02:01:50 --> 02:01:55
they're getting less polarized so if you

02:01:52 --> 02:01:58
want to look for you know a causal

02:01:54 --> 02:02:00
relationship there

02:01:57 --> 02:02:01
you can find a scapegoat but you can't

02:01:59 --> 02:02:03
find the cause now if you want to fix

02:02:00 --> 02:02:06
the problem you have to find the right

02:02:02 --> 02:02:07
cause and what rise me up is that people

02:02:05 --> 02:02:09
now are

02:02:06 --> 02:02:11
accusing facebook of bad deeds that are

02:02:08 --> 02:02:13
done by others and those others are

02:02:10 --> 02:02:15
we're not doing anything about them

02:02:12 --> 02:02:16
and by the way those others include

02:02:14 --> 02:02:18
the owner of the wall street journal in

02:02:15 --> 02:02:20
which all of those papers were published

02:02:17 --> 02:02:22
so i should mention that i'm talking to

02:02:19 --> 02:02:24
shrek mike schrepp for on this podcast

02:02:22 --> 02:02:25
and also mark zuckerberg and probably

02:02:23 --> 02:02:27
these conversations you can have with

02:02:24 --> 02:02:28
em

02:02:26 --> 02:02:30
because it's very interesting to me even

02:02:27 --> 02:02:32
if facebook has

02:02:29 --> 02:02:34
ome measurable negative effect

02:02:31 --> 02:02:35
you can't just consider that in

02:02:33 --> 02:02:37
isolation you have to consider about all

02:02:34 --> 02:02:39
the positive ways that it connects us so

02:02:36 --> 02:02:41
like every technology there's people

02:02:38 --> 02:02:42
it's that question you can't just say

02:02:40 --> 02:02:44
like

02:02:41 --> 02:02:47
uh there's an increase in division

02:02:43 --> 02:02:49
yes probably google search engine has

02:02:46 --> 02:02:50
created increase in division we have to

02:02:48 --> 02:02:52
consider about how much information it

02:02:49 --> 02:02:54
brought to the world like i'm sure

02:02:51 --> 02:02:56
wikipedia created more division if you

02:02:53 --> 02:02:58
just look at the division we have to

02:02:55 --> 02:03:00
look at the full context of the world

02:02:57 --> 02:03:01
and didn't make a better world yeah the

02:02:59 --> 02:03:03
printing press has created more

02:03:00 --> 02:03:05
differences right exactly

02:03:02 --> 02:03:08
so you know when the

02:03:04 --> 02:03:10
printing press was invented uh the first

02:03:07 --> 02:03:12
books that were that were printed were

02:03:09 --> 02:03:14
things like the bible and that allowed

02:03:11 --> 02:03:16
people to read the bible by themselves

02:03:13 --> 02:03:18
not get the message uniquely from

02:03:15 --> 02:03:20
priests in europe

02:03:17 --> 02:03:22
and they created you know the protest

02:03:19 --> 02:03:24
movement and 200 years of religious

02:03:21 --> 02:03:26
persecution and wars

02:03:23 --> 02:03:27
o that's a bad side effect of the

02:03:25 --> 02:03:29
printing press you know social networks

02:03:26 --> 02:03:30
aren't being nearly as bad as the

02:03:28 --> 02:03:34
printing press but nobody would say that

02:03:30 --> 02:03:34
printing price was a bad idea

02:03:33 --> 02:03:37
yeah a lot of it's perception and

02:03:35 --> 02:03:40
there's a lot of different incentives

02:03:36 --> 02:03:43
operating here um maybe a quick comment

02:03:39 --> 02:03:46
since you're one of the top leaders at

02:03:42 --> 02:03:47
facebook and at meta sorry that's in the

02:03:45 --> 02:03:49
tech space

02:03:46 --> 02:03:52
i'm sure facebook involves a lot of

02:03:48 --> 02:03:54
incredible technological uh challenges

02:03:51 --> 02:03:55
that need to be solved a lot of it

02:03:53 --> 02:03:57
probably is on the computer

02:03:54 --> 02:03:59
infrastructure the hardware the i mean

02:03:56 --> 02:04:02
it's just a huge amount

02:03:58 --> 02:04:04
maybe can you give me context about

02:04:01 --> 02:04:06
how much of shrek's life

02:04:03 --> 02:04:08
is ai and how much of it is low level

02:04:05 --> 02:04:10
compute how much of it is

02:04:07 --> 02:04:12
flying all around doing business stuff

02:04:09 --> 02:04:14
and the same with zuckerberg mark

02:04:11 --> 02:04:16
zuckerberg they really focus on ai i

02:04:13 --> 02:04:18
mean certainly uh

02:04:15 --> 02:04:20
in the uh

02:04:17 --> 02:04:21
in the run-up of the creation affair and

02:04:19 --> 02:04:23
for

02:04:20 --> 02:04:24
you know at least a year after that if

02:04:22 --> 02:04:26
not more

02:04:24 --> 02:04:28
mark was was very very much focused on

02:04:26 --> 02:04:31
ai and was spending quite a lot of

02:04:27 --> 02:04:32
effort um on it and that's his style

02:04:30 --> 02:04:34
when he gets interested in something he

02:04:32 --> 02:04:36
reads everything about it

02:04:33 --> 02:04:40
you know he read some of my papers for

02:04:35 --> 02:04:42
example before he joined um

02:04:39 --> 02:04:44
and uh so he he learned a lot about it

02:04:41 --> 02:04:46
like notes

02:04:43 --> 02:04:46
right

02:04:46 --> 02:04:52
and uh uh you know schwepp

02:04:49 --> 02:04:54
was really into it also i mean tripe is

02:04:51 --> 02:04:55
really kind of

02:04:53 --> 02:04:57
um

02:04:54 --> 02:04:58
you know has

02:04:56 --> 02:05:01
omething i've tried to preserve also

02:04:57 --> 02:05:03
despite my uh not so young age which is

02:05:00 --> 02:05:05
a sense of wonder about science and

02:05:02 --> 02:05:08
technology and he certainly certainly

02:05:04 --> 02:05:09
has that um he's also a wonderful person

02:05:07 --> 02:05:10
i mean in terms of

02:05:08 --> 02:05:12
like

02:05:09 --> 02:05:14
as a manager like dealing with people

02:05:11 --> 02:05:17
and everything mark also actually

02:05:13 --> 02:05:18
um so i mean they're very like you know

02:05:16 --> 02:05:20
very human people

02:05:17 --> 02:05:22
for in the case of markets uh shockingly

02:05:19 --> 02:05:25
human you know given his uh

02:05:21 --> 02:05:26
is trajectory um

02:05:24 --> 02:05:28
uh

02:05:25 --> 02:05:29
i mean the personality of him that is

02:05:27 --> 02:05:30
painting in the press is just completely

02:05:28 --> 02:05:32
wrong

02:05:29 --> 02:05:34
yeah but you have to know how to play

02:05:31 --> 02:05:36
the press so that's

02:05:33 --> 02:05:36
i i put some of that responsibility on

02:05:35 --> 02:05:39
him

02:05:35 --> 02:05:39
too you have to

02:05:38 --> 02:05:43
it's like um

02:05:40 --> 02:05:45
you know like the director

02:05:42 --> 02:05:48
the conductor of an orchestra you have

02:05:44 --> 02:05:49
to play the press and the public

02:05:47 --> 02:05:50
in a certain kind of way where you

02:05:48 --> 02:05:52
convey your true self to them if there

02:05:49 --> 02:05:54
is a depth and kindness it's hard and

02:05:51 --> 02:05:57
it's probably not the best

02:05:53 --> 02:05:59
at it so yeah

02:05:56 --> 02:06:01
you have to learn uh and it's it's sad

02:05:58 --> 02:06:04
to see and i'll talk to him about it but

02:06:00 --> 02:06:08
he shrek is slowly stepping down

02:06:03 --> 02:06:10
it's always uh sad to see folks sort of

02:06:07 --> 02:06:13
be there for a long time and slowly

02:06:09 --> 02:06:14
i guess time i think i think he's done

02:06:12 --> 02:06:17
the thing he

02:06:13 --> 02:06:19
set out to do and you know he's he's got

02:06:16 --> 02:06:20
you know

02:06:18 --> 02:06:22
uh

02:06:19 --> 02:06:23
family priorities and stuff like that

02:06:21 --> 02:06:24
and

02:06:22 --> 02:06:26
um

02:06:23 --> 02:06:28
i understand you know after

02:06:25 --> 02:06:30
13 years or something

02:06:27 --> 02:06:32
it's been a good run which in silicon

02:06:29 --> 02:06:34
valley is basically

02:06:31 --> 02:06:36
a lifetime yeah you know because you

02:06:33 --> 02:06:39
know it's dog years so uh in europe's

02:06:36 --> 02:06:41
the conference just wrapped up uh

02:06:38 --> 02:06:43
let me just go back to something else

02:06:40 --> 02:06:45
you posted the paper you co-authored was

02:06:42 --> 02:06:48
rejected from europe

02:06:44 --> 02:06:51
as you said proudly in quotes rejected

02:06:47 --> 02:06:54
can you joke yeah i know

02:06:50 --> 02:06:56
uh can you describe this paper

02:06:53 --> 02:06:59
and like what was the idea in it and

02:06:55 --> 02:07:01
also maybe this is a good opportunity to

02:06:58 --> 02:07:03
ask what are the pros and cons what

02:07:00 --> 02:07:04
works and what doesn't about the review

02:07:02 --> 02:07:05
process

02:07:03 --> 02:07:07
yeah let me talk about the paper first

02:07:04 --> 02:07:09
i'll talk about the review we'll talk

02:07:06 --> 02:07:10
about the review process uh afterwards

02:07:08 --> 02:07:12
um

02:07:09 --> 02:07:14
the paper is called vkrag so this is i

02:07:11 --> 02:07:15
mentioned that before variance in

02:07:13 --> 02:07:18
variance covariance regularization and

02:07:14 --> 02:07:20
it's a technique a non-contrastive

02:07:17 --> 02:07:22
learning technique for

02:07:19 --> 02:07:24
what i call joint embedding architecture

02:07:21 --> 02:07:26
so siamese nets are an example of joint

02:07:23 --> 02:07:27
invading architecture so gentlemen

02:07:25 --> 02:07:30
architecture is

02:07:26 --> 02:07:30
uh

02:07:29 --> 02:07:34
let me back up a little bit right so if

02:07:30 --> 02:07:37
you want to do supervised running

02:07:33 --> 02:07:38
you can you can do it by prediction

02:07:36 --> 02:07:39
so let's say you want to train your

02:07:37 --> 02:07:42
system to predict video right you show

02:07:38 --> 02:07:43
it a video clip and

02:07:41 --> 02:07:45
you train the system to predict the

02:07:42 --> 02:07:47
next the continuation of that video clip

02:07:44 --> 02:07:49
now because you need to handle

02:07:46 --> 02:07:50
uncertainty because there are many you

02:07:48 --> 02:07:52
know many continuations that are

02:07:50 --> 02:07:54
plausible

02:07:51 --> 02:07:56
you need to have you need to handle this

02:07:53 --> 02:07:59
in some way you need to have a way for

02:07:55 --> 02:08:01
the system to be able to produce

02:07:58 --> 02:08:03
multiple predictions

02:08:00 --> 02:08:04
and the way the only way i know to do

02:08:02 --> 02:08:05
this

02:08:03 --> 02:08:08
through what's called a latent

02:08:04 --> 02:08:10
variable so you have some sort of

02:08:07 --> 02:08:12
hidden vector of a variable that you can

02:08:09 --> 02:08:14
vary over a set or draw from a

02:08:11 --> 02:08:16
distribution and as you vary this vector

02:08:13 --> 02:08:18
over a set the output the prediction

02:08:15 --> 02:08:19
varies over a set of plausible

02:08:17 --> 02:08:21
predictions

02:08:18 --> 02:08:25
okay so that's called i call this a

02:08:20 --> 02:08:27
generative latent variable model

02:08:24 --> 02:08:29
okay now there is an alternative to this

02:08:26 --> 02:08:33
to handle uncertainty

02:08:28 --> 02:08:35
and instead of directly predicting the

02:08:32 --> 02:08:36
next frames of the of the of the

02:08:34 --> 02:08:39
clip

02:08:35 --> 02:08:41
you also run those

02:08:38 --> 02:08:43
through another neural net

02:08:40 --> 02:08:45
uh so you now have two neural nets one

02:08:42 --> 02:08:46
that looks at the

02:08:44 --> 02:08:47
uh

02:08:45 --> 02:08:49
you know the

02:08:46 --> 02:08:51
initial segment of the video clip and

02:08:48 --> 02:08:54
another one that looks at the the

02:08:50 --> 02:08:55
continuation during training right

02:08:53 --> 02:08:58
and what what you're trying to do is

02:08:54 --> 02:09:00
learn a representation

02:08:57 --> 02:09:02
of those two video clips that is

02:08:59 --> 02:09:04
maximally informative about the video

02:09:01 --> 02:09:05
clips themselves

02:09:03 --> 02:09:07
but

02:09:04 --> 02:09:09
it's such that you can predict the

02:09:06 --> 02:09:11
representation of the second video clip

02:09:08 --> 02:09:13
from the representation of the first one

02:09:10 --> 02:09:14
asily okay

02:09:12 --> 02:09:16
and you can sort of formalize this in

02:09:13 --> 02:09:17
terms of maximizing virtual information

02:09:15 --> 02:09:18
some stuff like that but it doesn't

02:09:16 --> 02:09:20
matter

02:09:17 --> 02:09:22
what you want is

02:09:19 --> 02:09:23
informative representative represent you

02:09:21 --> 02:09:25
know

02:09:22 --> 02:09:27
informative representations of the two

02:09:24 --> 02:09:29
video clips that are mutually

02:09:26 --> 02:09:30
predictable

02:09:28 --> 02:09:32
what that means is that there's a lot of

02:09:30 --> 02:09:35
details in the second video clips that

02:09:31 --> 02:09:36
are irrelevant

02:09:34 --> 02:09:39
you know

02:09:35 --> 02:09:42
i let's say a video clip consists in you

02:09:38 --> 02:09:44
know a camera panning the scene

02:09:41 --> 02:09:46
there's going to be a piece of that room

02:09:43 --> 02:09:48
that is going to be revealed and i can

02:09:45 --> 02:09:49
somewhat predict what the what that room

02:09:47 --> 02:09:52
is going to look like but i may not be

02:09:48 --> 02:09:53
able to predict the details of the

02:09:51 --> 02:09:55
texture of the ground and where the

02:09:52 --> 02:09:57
tiles are ending and stuff like that

02:09:54 --> 02:09:59
right so those are irrelevant details

02:09:56 --> 02:10:00
that perhaps my representation will

02:09:58 --> 02:10:01
eliminate

02:09:59 --> 02:10:03
and so

02:10:00 --> 02:10:06
what i need is to train this second

02:10:02 --> 02:10:08
neural net in such a way that

02:10:05 --> 02:10:11
uh whenever the the

02:10:08 --> 02:10:14
continuation video clip varies over

02:10:10 --> 02:10:16
all the plausible continuations

02:10:13 --> 02:10:19
the representation doesn't change

02:10:15 --> 02:10:21
got it okay so it's the yeah yeah got it

02:10:18 --> 02:10:23
all over the space of representations

02:10:20 --> 02:10:26
doing the same kind of thing as you're

02:10:22 --> 02:10:28
doing with similarity learning right

02:10:25 --> 02:10:30
yeah so so these are two ways to handle

02:10:27 --> 02:10:32
multi-modality in a prediction right in

02:10:29 --> 02:10:34
the first way you parameterize the

02:10:31 --> 02:10:36
prediction with a latin variable but you

02:10:33 --> 02:10:38
predict pixels essentially right in the

02:10:35 --> 02:10:40
second one you want you don't predict

02:10:37 --> 02:10:41
pixels you predict an abstract

02:10:39 --> 02:10:42
representation of pixels and you

02:10:40 --> 02:10:44
guarantee that this has track

02:10:41 --> 02:10:45
representation

02:10:43 --> 02:10:47
has as much information as possible

02:10:44 --> 02:10:49
about the input but sort of you know

02:10:46 --> 02:10:52
drops all the stuff that you really

02:10:48 --> 02:10:54
can't predict essentially

02:10:51 --> 02:10:55
i used to be a big fan of the first

02:10:53 --> 02:10:58
approach and in fact in this paper with

02:10:54 --> 02:10:59
e chain mishra this this blog post

02:10:57 --> 02:11:01
he dark matter intelligence i was kind

02:10:58 --> 02:11:03
of advocating for this and in the last

02:11:00 --> 02:11:04
year and a half i've completely changed

02:11:02 --> 02:11:06
my mind i'm now a big fan of the second

02:11:04 --> 02:11:09
one

02:11:05 --> 02:11:10
and it's because of

02:11:08 --> 02:11:13
a small collection of algorithms that

02:11:10 --> 02:11:15
have been proposed over the last uh

02:11:12 --> 02:11:18
year and a half or so two years

02:11:14 --> 02:11:20
uh to do this uh including v craig

02:11:17 --> 02:11:21
its predecessor called barbie twins

02:11:19 --> 02:11:24
which i mentioned

02:11:20 --> 02:11:26
uh a method from our friends of deepmind

02:11:23 --> 02:11:29
called byol

02:11:25 --> 02:11:30
and and and there's a bunch of others

02:11:28 --> 02:11:32
now that kind of work similarly so

02:11:29 --> 02:11:34
they're all based on this idea of joint

02:11:31 --> 02:11:36
embedding some of them have an explicit

02:11:33 --> 02:11:38
criterion that is an approximation of

02:11:35 --> 02:11:40
mutual information some others will be

02:11:37 --> 02:11:41
aol work but we don't really know why

02:11:39 --> 02:11:42
and there's been like lots of

02:11:40 --> 02:11:44
theoretical papers but why be where it

02:11:41 --> 02:11:46
works no it's not bad because we take it

02:11:43 --> 02:11:47
out and it still works and

02:11:45 --> 02:11:49
you know blah blah blah i mean so

02:11:46 --> 02:11:51
there's like a big big debate but um

02:11:48 --> 02:11:53
uh but the important point is that we

02:11:50 --> 02:11:55
now have a collection of non-contrastive

02:11:52 --> 02:11:58
joint embedding methods which i think is

02:11:54 --> 02:12:00
the best thing since sliced bread so i'm

02:11:57 --> 02:12:02
super excited about this because i think

02:11:59 --> 02:12:04
it's our best shot

02:12:01 --> 02:12:05
for techniques that would allow us to

02:12:03 --> 02:12:07
kind of build

02:12:04 --> 02:12:09
predictive world models and at the same

02:12:06 --> 02:12:11
time learn hierarchical representations

02:12:08 --> 02:12:13
of the world where what matters about

02:12:10 --> 02:12:15
he world is preserved and what is

02:12:12 --> 02:12:16
irrelevant is eliminated

02:12:14 --> 02:12:18
by the way the representation is the

02:12:15 --> 02:12:20
before and after is

02:12:17 --> 02:12:21
in the space

02:12:19 --> 02:12:24
in a sequence of images or is it for

02:12:20 --> 02:12:25
single images uh it would be either for

02:12:23 --> 02:12:27
a single image for a sequence it doesn't

02:12:24 --> 02:12:28
have to be images this could be applied

02:12:26 --> 02:12:30
to text it could be applied to just

02:12:27 --> 02:12:32
about any signal i'm looking at you know

02:12:29 --> 02:12:33
i'm looking for

02:12:31 --> 02:12:35
methods that are generally applicable

02:12:32 --> 02:12:37
that are not specific to you know one

02:12:34 --> 02:12:39
particular modality you know it could be

02:12:36 --> 02:12:41
audio or whatever got it so what's the

02:12:38 --> 02:12:43
story behind this paper this this paper

02:12:40 --> 02:12:45
is what is is describing one of the one

02:12:42 --> 02:12:47
such method this is this vikrant method

02:12:44 --> 02:12:48
so the cisco authored the first author

02:12:46 --> 02:12:50
is a

02:12:47 --> 02:12:53
student called adrian bard who is a

02:12:49 --> 02:12:56
resident phd student at fair paris

02:12:52 --> 02:12:59
who is co-advised by me and jean ponce

02:12:55 --> 02:13:02
who's a professor at economic superior

02:12:58 --> 02:13:04
also a research director at inria

02:13:01 --> 02:13:06
so this is a wonderful program in france

02:13:03 --> 02:13:08
where phd students can basically do

02:13:05 --> 02:13:11
their phd in industry and that's kind of

02:13:07 --> 02:13:14
what what's happening here

02:13:10 --> 02:13:17
and this paper is a follow-up on

02:13:13 --> 02:13:20
the this bottle twin paper by yeah my

02:13:16 --> 02:13:22
former post dog now stefan dunny uh with

02:13:19 --> 02:13:24
li jing and and yurish montar and a

02:13:21 --> 02:13:25
bunch of other people from from from

02:13:23 --> 02:13:26
fair

02:13:24 --> 02:13:28
and

02:13:25 --> 02:13:30
one of the main criticism from reviewers

02:13:27 --> 02:13:33
is that v craig is not different enough

02:13:29 --> 02:13:36
from battle twins but

02:13:32 --> 02:13:37
you know my impression is that

02:13:35 --> 02:13:40
it's you know

02:13:36 --> 02:13:42
bottle twins with a few bugs fixed

02:13:39 --> 02:13:44
essentially and uh in the end this is

02:13:41 --> 02:13:47
what people will use

02:13:43 --> 02:13:49
right so but you know i'm used to stuff

02:13:46 --> 02:13:50
yeah that assume it being rejected

02:13:48 --> 02:13:52
forward so it might be rejected and

02:13:49 --> 02:13:54
actually exceptional excited because

02:13:51 --> 02:13:56
people use it well it's already decided

02:13:53 --> 02:13:58
like a bunch of times so i mean the the

02:13:55 --> 02:14:01
question is then to the deeper question

02:13:57 --> 02:14:02
about peer review and conferences i mean

02:14:00 --> 02:14:04
computer science is a field is kind of

02:14:01 --> 02:14:05
unique that the conference is highly

02:14:03 --> 02:14:08
prized

02:14:04 --> 02:14:10
that's one right and uh it's interesting

02:14:07 --> 02:14:12
because the peer review process there is

02:14:09 --> 02:14:14
imilar as opposed to journals but it's

02:14:11 --> 02:14:17
accelerated significantly well not

02:14:14 --> 02:14:19
significantly but it goes fast

02:14:16 --> 02:14:21
and it's nice way to get stuff out

02:14:18 --> 02:14:24
quickly uh to be reviewed quickly go to

02:14:20 --> 02:14:26
present it quickly to the community so

02:14:23 --> 02:14:28
not quickly but quicker yeah but

02:14:25 --> 02:14:30
nevertheless it has many of the same

02:14:27 --> 02:14:32
flaws of uh peer review because it's a

02:14:29 --> 02:14:34
limited number of people look at it

02:14:31 --> 02:14:36
here's bias in the following like that

02:14:33 --> 02:14:38
if you if you want to do new ideas

02:14:35 --> 02:14:40
you're going to get pushed back

02:14:37 --> 02:14:41
um they're self-interested people that

02:14:39 --> 02:14:44
kind of

02:14:40 --> 02:14:45
can infer who submitted it

02:14:43 --> 02:14:47
and kind of

02:14:44 --> 02:14:49
you know be cranky about it all that

02:14:46 --> 02:14:51
kind of stuff yeah i mean there's a lot

02:14:48 --> 02:14:53
of you know social phenomena there um

02:14:50 --> 02:14:56
there's one social phenomenon which is

02:14:52 --> 02:14:57
that because the field has been growing

02:14:55 --> 02:14:59
exponentially

02:14:56 --> 02:15:02
the vast majority of people in the field

02:14:58 --> 02:15:03
are extremely junior yeah so as a

02:15:01 --> 02:15:05
consequence and that's just a

02:15:02 --> 02:15:08
consequence of the field growing right

02:15:04 --> 02:15:10
so as the number of the size of the

02:15:07 --> 02:15:12
field kind of starts saturating you you

02:15:09 --> 02:15:16
will have less of that problem

02:15:11 --> 02:15:19
of reviewers being very uh inexperienced

02:15:15 --> 02:15:20
a consequence of this is that you know

02:15:18 --> 02:15:21
young reviewers

02:15:20 --> 02:15:23
i mean

02:15:20 --> 02:15:25
there's a phenomenon which is that

02:15:22 --> 02:15:26
reviewers try to make their life easy

02:15:24 --> 02:15:28
and to make their life easy when

02:15:25 --> 02:15:29
reviewing a paper

02:15:27 --> 02:15:31
is very simple you just have to find a

02:15:28 --> 02:15:33
flaw in the paper right so

02:15:30 --> 02:15:34
basically they see their task as finding

02:15:32 --> 02:15:36
flaws

02:15:33 --> 02:15:38
in papers and most papers have flaws

02:15:35 --> 02:15:41
even the good ones yeah

02:15:37 --> 02:15:43
um so it's it's easy to you know

02:15:40 --> 02:15:45
to do that you your job is

02:15:42 --> 02:15:47
easier as a reviewer

02:15:44 --> 02:15:49
if you just focus on this but what's

02:15:46 --> 02:15:52
important is

02:15:48 --> 02:15:54
like is there a new idea in that paper

02:15:51 --> 02:15:56
that is likely to influence

02:15:53 --> 02:15:58
it doesn't matter if the experiments are

02:15:55 --> 02:15:59
not that great if the protocol is you

02:15:57 --> 02:16:00
know

02:15:58 --> 02:16:02
uh

02:15:59 --> 02:16:05
so so you know things like that as long

02:16:01 --> 02:16:07
as there is a worthy idea in it

02:16:04 --> 02:16:09
hat will influence the way people think

02:16:06 --> 02:16:11
about the problem

02:16:08 --> 02:16:13
um even if they make it better you know

02:16:10 --> 02:16:16
eventually i think that's uh that's

02:16:12 --> 02:16:17
really what what makes a paper useful

02:16:15 --> 02:16:20
and so

02:16:16 --> 02:16:22
this combination of uh social phenomena

02:16:19 --> 02:16:25
creates a a

02:16:21 --> 02:16:26
disease that has plagued you know

02:16:24 --> 02:16:28
other fields in the past like speech

02:16:25 --> 02:16:30
recognition where basically you know

02:16:27 --> 02:16:32
people chase numbers on uh

02:16:29 --> 02:16:33
on benchmarks

02:16:31 --> 02:16:34
and

02:16:32 --> 02:16:37
it's much easier to get a paper

02:16:34 --> 02:16:39
accepted if it brings an incremental

02:16:36 --> 02:16:41
improvement on a

02:16:38 --> 02:16:43
sort of mainstream well-accepted

02:16:40 --> 02:16:44
method

02:16:42 --> 02:16:47
or problem

02:16:44 --> 02:16:49
and those are to me boring papers i mean

02:16:46 --> 02:16:51
they're not useless right because uh

02:16:48 --> 02:16:53
industries you know strives on on those

02:16:50 --> 02:16:54
kind of progress

02:16:52 --> 02:16:55
but they're not the one that i'm

02:16:53 --> 02:16:57
interested in in terms of like new

02:16:54 --> 02:16:59
concepts and new ideas so uh papers that

02:16:56 --> 02:17:01
are really uh

02:16:58 --> 02:17:03
trying to strike kind of new advances

02:17:00 --> 02:17:05
generally don't make it

02:17:02 --> 02:17:08
now thankfully we have archive archive

02:17:04 --> 02:17:10
xactly and then there's uh open review

02:17:07 --> 02:17:12
type of situations where you and then i

02:17:09 --> 02:17:14
mean twitter is a kind of open review

02:17:11 --> 02:17:16
i'm a huge believer that reviews should

02:17:13 --> 02:17:19
be done by thousands of people not two

02:17:15 --> 02:17:20
people i agree uh and so archive

02:17:18 --> 02:17:22
like do you see a future where a lot of

02:17:20 --> 02:17:25
really strong papers it's already the

02:17:21 --> 02:17:27
present but a growing future where it'll

02:17:24 --> 02:17:28
just be archived

02:17:26 --> 02:17:31
and

02:17:27 --> 02:17:33
you're presenting an ongoing continuous

02:17:30 --> 02:17:34
conference called twitter and slash the

02:17:32 --> 02:17:36
internet

02:17:33 --> 02:17:38
uh slash archive sanity andre just

02:17:35 --> 02:17:41
released a new version

02:17:37 --> 02:17:44
uh so just not you know not being so

02:17:40 --> 02:17:45
elitist about this particular uh gating

02:17:43 --> 02:17:47
it's not a question of being elitist or

02:17:44 --> 02:17:48
not it's a question of uh being

02:17:46 --> 02:17:50
basically

02:17:47 --> 02:17:52
uh

02:17:49 --> 02:17:54
recommendation and seal of approvals for

02:17:51 --> 02:17:55
people who don't see themselves as

02:17:53 --> 02:17:58
having the ability to do so by

02:17:54 --> 02:18:00
themselves right so it saves time right

02:17:57 --> 02:18:02
if you rely on other people's opinion

02:17:59 --> 02:18:03
and you trust those people

02:18:01 --> 02:18:07
or those

02:18:02 --> 02:18:09
groups to evaluate a paper

02:18:06 --> 02:18:11
for you

02:18:08 --> 02:18:13
that saves you time because you know you

02:18:10 --> 02:18:15
don't have to like scrutinize uh the

02:18:12 --> 02:18:16
paper as much you know it is brought to

02:18:14 --> 02:18:18
your attention i mean it's a whole idea

02:18:15 --> 02:18:19
of sort of you know collective

02:18:17 --> 02:18:21
recommender system right

02:18:18 --> 02:18:24
so i actually thought about this a lot

02:18:20 --> 02:18:26
um you know about 10 15 years ago uh

02:18:23 --> 02:18:30
because there were discussions at

02:18:25 --> 02:18:32
um nips and you know and were about to

02:18:29 --> 02:18:34
create iclear with yoshi banjo and so i

02:18:31 --> 02:18:37
wrote a document

02:18:33 --> 02:18:39
um kind of describing a reviewing system

02:18:36 --> 02:18:40
which basically was you know you post

02:18:38 --> 02:18:43
your paper on some repository let's say

02:18:39 --> 02:18:45
archive or now could be open review um

02:18:42 --> 02:18:47
and then you can form

02:18:44 --> 02:18:49
uh a reviewing entity which is

02:18:46 --> 02:18:52
equivalent to a reviewing board you know

02:18:48 --> 02:18:54
a journal or a

02:18:51 --> 02:18:56
program committee of a conference

02:18:53 --> 02:18:57
you have to list the members

02:18:55 --> 02:18:58
and then

02:18:56 --> 02:19:01
that

02:18:58 --> 02:19:03
group reviewing entity can choose to

02:19:00 --> 02:19:05
review a particular paper

02:19:02 --> 02:19:07
spontaneously or not there is no

02:19:04 --> 02:19:10
exclusive relationship anymore between a

02:19:06 --> 02:19:11
paper and a venue or reviewing entity

02:19:09 --> 02:19:13
any reviewing entity can review any

02:19:10 --> 02:19:15
paper

02:19:12 --> 02:19:17
or may choose not to

02:19:14 --> 02:19:18
and then you know give an evaluation

02:19:16 --> 02:19:21
it's not published or published it's

02:19:17 --> 02:19:22
just an evaluation and a comment which

02:19:20 --> 02:19:24
would be public

02:19:21 --> 02:19:25
signed by the reviewing entity

02:19:23 --> 02:19:26
and

02:19:24 --> 02:19:27
if it's time by reviewing entity you

02:19:25 --> 02:19:29
know it's one of the members of

02:19:26 --> 02:19:31
reviewing entities so if the reviewing

02:19:28 --> 02:19:32
entity is you know

02:19:30 --> 02:19:34
lex treatments

02:19:31 --> 02:19:37
you know preferred papers right you know

02:19:33 --> 02:19:40
it's like friedman writing a review yes

02:19:36 --> 02:19:41
what so for me one that's a beautiful

02:19:39 --> 02:19:43
uh

02:19:40 --> 02:19:45
system i think but what's in addition to

02:19:42 --> 02:19:48
that it feels like there should be a

02:19:44 --> 02:19:50
reputation system for the reviewers

02:19:47 --> 02:19:51
for the reviewing entities not the

02:19:49 --> 02:19:54
reviewers individually the reviewing

02:19:50 --> 02:19:56
entities sure but even within that there

02:19:53 --> 02:19:58
are viewers too because uh

02:19:55 --> 02:20:00
i it's there's another thing here it's

02:19:57 --> 02:20:02
not just the reputation it's an

02:19:59 --> 02:20:03
incentive for an individual person to do

02:20:01 --> 02:20:06
great

02:20:02 --> 02:20:08
right now in in the academic setting the

02:20:05 --> 02:20:10
incentive is kind of uh

02:20:07 --> 02:20:11
internal just wanting to do a good job

02:20:09 --> 02:20:13
ut honestly that's not a strong enough

02:20:10 --> 02:20:15
incentive to do a really good job in

02:20:12 --> 02:20:16
reading a paper and finding the

02:20:14 --> 02:20:18
beautiful amidst the mistakes and the

02:20:15 --> 02:20:20
flaws and all that kind of stuff right

02:20:17 --> 02:20:23
like if you're the person that first

02:20:19 --> 02:20:24
discovered a powerful paper

02:20:22 --> 02:20:26
and you get to be proud of that

02:20:23 --> 02:20:28
discovery

02:20:25 --> 02:20:29
then that gives a huge incentive to you

02:20:27 --> 02:20:31
that's that's a big part of my proposal

02:20:28 --> 02:20:34
actually i described that as

02:20:30 --> 02:20:35
you know if if your evaluation of papers

02:20:33 --> 02:20:37
is

02:20:34 --> 02:20:38
predictive of future success yes yes

02:20:36 --> 02:20:40
okay

02:20:37 --> 02:20:43
then your reputation should go up as a

02:20:39 --> 02:20:45
reviewing entity

02:20:42 --> 02:20:47
so yeah exactly i mean that

02:20:44 --> 02:20:48
um i even had a master's student who was

02:20:46 --> 02:20:50
a

02:20:47 --> 02:20:52
master student in uh library science and

02:20:49 --> 02:20:54
computer science actually kind of work

02:20:51 --> 02:20:56
out exactly how that should work with

02:20:53 --> 02:20:58
formulas and everything but so in terms

02:20:55 --> 02:20:59
of implementation do you think that's

02:20:57 --> 02:21:01
omething that's doable i mean i've been

02:20:58 --> 02:21:03
sort of you know talking about this to

02:21:00 --> 02:21:06
sort of various people like you know

02:21:02 --> 02:21:08
andrew mccallum who started open review

02:21:05 --> 02:21:10
and the reason why we picked open review

02:21:07 --> 02:21:12
for iclear initially even though it was

02:21:09 --> 02:21:14
very early for them

02:21:11 --> 02:21:16
is because my hope was that

02:21:13 --> 02:21:17
iclear were it was eventually going to

02:21:15 --> 02:21:20
kind of

02:21:16 --> 02:21:23
inaugurate this type of system so iclear

02:21:19 --> 02:21:24
kept the idea of open reviews

02:21:22 --> 02:21:26
o where the reviews are you know

02:21:23 --> 02:21:28
published with the paper which i think

02:21:25 --> 02:21:29
is very useful

02:21:27 --> 02:21:30
but

02:21:28 --> 02:21:32
in many ways that's kind of reverted to

02:21:29 --> 02:21:34
kind of more of a

02:21:31 --> 02:21:36
conventional type conferences for

02:21:33 --> 02:21:37
everything else and that

02:21:35 --> 02:21:40
i mean i

02:21:36 --> 02:21:41
don't run ikea i'm just the president

02:21:39 --> 02:21:43
of the

02:21:40 --> 02:21:45
foundation but um

02:21:42 --> 02:21:46
you know people who run it should make

02:21:44 --> 02:21:48
decisions about how to run it and i'm

02:21:45 --> 02:21:49
not going to tell them

02:21:47 --> 02:21:52
because they're volunteers and i'm

02:21:48 --> 02:21:54
really thankful that they do that so but

02:21:51 --> 02:21:56
i'm saddened by the fact that

02:21:53 --> 02:21:57
we're not being

02:21:55 --> 02:22:01
innovative enough

02:21:56 --> 02:22:02
yeah me too i hope that changes uh yeah

02:22:00 --> 02:22:04
because the communication of science

02:22:01 --> 02:22:06
broadly but communication computer

02:22:03 --> 02:22:08
science ideas

02:22:05 --> 02:22:10
is how you make those ideas have impact

02:22:07 --> 02:22:13
i think yeah and i think you know a lot

02:22:09 --> 02:22:14
of this is um because people have in

02:22:12 --> 02:22:17
their mind

02:22:14 --> 02:22:20
kind of an objective

02:22:16 --> 02:22:22
which is you know fairness for authors

02:22:19 --> 02:22:24
and the ability to count points

02:22:21 --> 02:22:25
basically and and give credits

02:22:23 --> 02:22:28
accurately

02:22:24 --> 02:22:29
but that comes at the expense of the

02:22:27 --> 02:22:31
progress of science

02:22:28 --> 02:22:32
so to some extent we're slowing down the

02:22:30 --> 02:22:35
progress of science

02:22:32 --> 02:22:36
and are we actually achieving fairness

02:22:34 --> 02:22:39
and we're not achieving fairness you

02:22:35 --> 02:22:41
know we have biases you know we're doing

02:22:38 --> 02:22:43
you know double blind review but

02:22:40 --> 02:22:45
uh

02:22:42 --> 02:22:46
you know the the biases are still there

02:22:44 --> 02:22:47
are different different kinds of

02:22:45 --> 02:22:49
biases

02:22:46 --> 02:22:51
you write that the phenomenon of

02:22:48 --> 02:22:53
emergence collective behavior exhibited

02:22:50 --> 02:22:55
by a large collection of simple elements

02:22:52 --> 02:22:56
in interaction

02:22:54 --> 02:22:58
is one of the things that got you into

02:22:56 --> 02:23:01
neural nets in the first place i love

02:22:58 --> 02:23:03
cellular automata i love simple

02:23:00 --> 02:23:06
interacting elements and the things that

02:23:02 --> 02:23:08
emerge from them do you think

02:23:05 --> 02:23:10
we understand how complex systems can

02:23:07 --> 02:23:13
emerge from such simple components that

02:23:09 --> 02:23:14
interact simply no we don't

02:23:12 --> 02:23:18
it's a big mystery also it's a mystery

02:23:13 --> 02:23:21
for physicists a mystery for biologists

02:23:17 --> 02:23:23
you know how is it that uh

02:23:20 --> 02:23:24
the uh universe around us seems to be

02:23:22 --> 02:23:25
increasing in complexity and not

02:23:23 --> 02:23:28
decreasing

02:23:24 --> 02:23:30
i mean that that is a kind of a

02:23:27 --> 02:23:33
curious property of uh physics that

02:23:29 --> 02:23:36
despite the second law of thermodynamics

02:23:32 --> 02:23:38
we seem to be you know evolution and

02:23:35 --> 02:23:41
learning and

02:23:37 --> 02:23:43
etc seems to be can at least locally

02:23:40 --> 02:23:45
to increase

02:23:42 --> 02:23:48
complexity not decrease it so perhaps

02:23:44 --> 02:23:49
the ultimate purpose of the universe is

02:23:47 --> 02:23:51
to just get more complex

02:23:48 --> 02:23:52
have these

02:23:50 --> 02:23:56
i mean

02:23:51 --> 02:23:58
uh small pockets of beautiful complexity

02:23:55 --> 02:24:00
does that to sell your automated these

02:23:57 --> 02:24:03
kinds of emergence and complex systems

02:23:59 --> 02:24:05
give you some intuition or guide

02:24:02 --> 02:24:07
your understanding of machine learning

02:24:04 --> 02:24:09
systems and neural networks and so on or

02:24:06 --> 02:24:11
are these for you right now desperate

02:24:08 --> 02:24:14
concepts well you got it got me into it

02:24:10 --> 02:24:17
you know i uh i discovered the existence

02:24:13 --> 02:24:19
of the perceptron when i was a college

02:24:16 --> 02:24:20
student

02:24:18 --> 02:24:23
you know by really good book and it was

02:24:19 --> 02:24:26
a debate between chomsky and piaget and

02:24:22 --> 02:24:27
seymour pepper from mit was kind of

02:24:25 --> 02:24:29
singing the praise of the perception in

02:24:26 --> 02:24:30
that book and i i the first time i heard

02:24:28 --> 02:24:32
about the learning machine right so i

02:24:30 --> 02:24:34
started digging the literature and i

02:24:31 --> 02:24:36
found those paper those books which were

02:24:33 --> 02:24:37
basically trans transcription of you

02:24:35 --> 02:24:39
know

02:24:36 --> 02:24:41
orkshops or conferences

02:24:38 --> 02:24:43
from the 50s and 60s about

02:24:40 --> 02:24:45
self-organizing systems so there were

02:24:42 --> 02:24:47
there was a series of conferences on

02:24:44 --> 02:24:49
self-organizing systems and the these

02:24:46 --> 02:24:50
books on this um

02:24:48 --> 02:24:51
some of them are

02:24:49 --> 02:24:53
you can actually get them at the

02:24:50 --> 02:24:55
internet archive you know the

02:24:52 --> 02:24:55
digital version

02:24:54 --> 02:24:57
uh

02:24:54 --> 02:25:00
and there are like uh fascinating

02:24:56 --> 02:25:01
articles in there by this guy whose name

02:24:59 --> 02:25:03
has been largely forgotten heinz von

02:25:00 --> 02:25:05
firster

02:25:02 --> 02:25:07
he's a the german physicist who

02:25:04 --> 02:25:10
immigrated to the u.s

02:25:06 --> 02:25:12
and uh worked on self-organizing systems

02:25:09 --> 02:25:14
uh in the in the 50s

02:25:11 --> 02:25:16
and in the 60s he created at you know

02:25:13 --> 02:25:19
serving in urbana champagne he created a

02:25:15 --> 02:25:22
biological computer laboratory bcl

02:25:18 --> 02:25:23
which was you know all about neural nets

02:25:21 --> 02:25:25
unfortunately that was kind of towards

02:25:22 --> 02:25:28
the end of the popularity of neural nets

02:25:24 --> 02:25:29
o that that lab never kind of strived

02:25:27 --> 02:25:31
very much but but he wrote a bunch of

02:25:28 --> 02:25:34
papers about self-organization and

02:25:30 --> 02:25:37
the mystery of self-organization an

02:25:33 --> 02:25:39
example he has is you take imagine you

02:25:36 --> 02:25:40
are in space there's no gravity you have

02:25:38 --> 02:25:43
a big box with uh

02:25:39 --> 02:25:45
magnets in it okay um you know what kind

02:25:42 --> 02:25:47
of rectangular magnets with north pole

02:25:44 --> 02:25:49
on one end southbound on the other end

02:25:46 --> 02:25:51
you shake the box gently and the magnets

02:25:48 --> 02:25:53
will kind of stick to themselves and

02:25:50 --> 02:25:56
probably form a complex structure

02:25:52 --> 02:25:57
um you know spontaneously

02:25:55 --> 02:25:58
ou know that could be an example of

02:25:56 --> 02:25:59
self-organization but you know you have

02:25:57 --> 02:26:02
lots of examples neural nets are an

02:25:58 --> 02:26:03
example of self-organization to

02:26:01 --> 02:26:06
you know in many respects

02:26:02 --> 02:26:07
and it's a it's a bit of a mystery um

02:26:05 --> 02:26:10
you know how

02:26:06 --> 02:26:11
like what what is possible with this um

02:26:09 --> 02:26:12
you know pattern formation in physical

02:26:10 --> 02:26:14
systems

02:26:11 --> 02:26:16
in chaotic system and things like that

02:26:13 --> 02:26:18
you know you know the emergence of life

02:26:15 --> 02:26:19
you know things like that so you know

02:26:17 --> 02:26:20
how does

02:26:18 --> 02:26:22
that happen

02:26:19 --> 02:26:24
it's a it's a big puzzle for for

02:26:21 --> 02:26:25
physicists as well it feels like

02:26:23 --> 02:26:27
understanding this

02:26:24 --> 02:26:29
the the mathematics

02:26:26 --> 02:26:31
of emergence in some constrained

02:26:28 --> 02:26:33
situations might help us create

02:26:30 --> 02:26:36
intelligence

02:26:32 --> 02:26:38
like uh help us add a little spice to

02:26:35 --> 02:26:40
the systems because um you seem to be

02:26:37 --> 02:26:43
able to

02:26:39 --> 02:26:45
in complex systems with emergence to be

02:26:42 --> 02:26:47
able to get a lot from little

02:26:44 --> 02:26:50
and so that seems like a shortcut

02:26:46 --> 02:26:52
o get big leaps in performance

02:26:49 --> 02:26:55
but um but there's there's a missing

02:26:51 --> 02:26:57
conservative concept that we are we

02:26:54 --> 02:26:59
don't have yeah uh and it's uh it's

02:26:56 --> 02:27:02
omething also i've been fascinated by

02:26:58 --> 02:27:04
since uh my undergrad days and it's how

02:27:01 --> 02:27:06
you measure complexity

02:27:03 --> 02:27:08
right so we don't actually have good

02:27:05 --> 02:27:10
ways of measuring or at least we don't

02:27:07 --> 02:27:12
have good ways of interpreting

02:27:09 --> 02:27:13
the measures that we we have at our

02:27:11 --> 02:27:15
disposal like how do you measure the

02:27:12 --> 02:27:17
complexity of something right so there's

02:27:14 --> 02:27:18
all those things you know like you know

02:27:16 --> 02:27:20
common goal of chatting solomon of

02:27:17 --> 02:27:22
complexity of you know the length of the

02:27:19 --> 02:27:24
shortest program that would generate a b

02:27:21 --> 02:27:26
string can be thought of as the

02:27:23 --> 02:27:27
complexity of that bit string right

02:27:25 --> 02:27:29
um

02:27:26 --> 02:27:32
i've been fascinated by that concept the

02:27:28 --> 02:27:34
problem with that is that

02:27:31 --> 02:27:36
complexity is defined up to a

02:27:33 --> 02:27:38
constant which can be very large

02:27:35 --> 02:27:41
right there's there are similar concepts

02:27:37 --> 02:27:44
that are derived from you know

02:27:40 --> 02:27:46
bayesian probability theory

02:27:43 --> 02:27:47
where you know the complexity of

02:27:45 --> 02:27:49
something is

02:27:46 --> 02:27:50
the negative log of its probability

02:27:48 --> 02:27:51
essentially right and you have a

02:27:49 --> 02:27:53
complete equivalence between the two

02:27:50 --> 02:27:54
things

02:27:52 --> 02:27:56
and there you would think you know the

02:27:53 --> 02:27:57
probability is something that's well

02:27:55 --> 02:27:59
defined mathematically which means

02:27:56 --> 02:28:01
complexity is well-defined but it's not

02:27:58 --> 02:28:03
rue you need to have a model of

02:28:00 --> 02:28:04
of the distribution

02:28:02 --> 02:28:06
and you may need to have a prior if

02:28:03 --> 02:28:08
you're doing bayesian inference and the

02:28:05 --> 02:28:09
prior plays the same role as the choice

02:28:07 --> 02:28:12
of the computer with which you measure

02:28:08 --> 02:28:14
your graph complexity and so every

02:28:11 --> 02:28:16
measure of complexity we have has some

02:28:13 --> 02:28:17
arbitrary necessity

02:28:15 --> 02:28:19
um

02:28:16 --> 02:28:22
you know an additive constant which

02:28:18 --> 02:28:24
is can be arbitrarily large and so

02:28:21 --> 02:28:26
you know how can we come up with a good

02:28:23 --> 02:28:27
theory of how things become more complex

02:28:25 --> 02:28:30
if we don't have a good measure of

02:28:26 --> 02:28:32
complexity yeah which we need for this

02:28:29 --> 02:28:34
one way that people study this in the

02:28:31 --> 02:28:36
space of biology the people that study

02:28:33 --> 02:28:38
the origin of life or try to recreate

02:28:35 --> 02:28:40
the life in in the laboratory

02:28:37 --> 02:28:42
and the more interesting one is the

02:28:39 --> 02:28:45
alien one is when we go to other planets

02:28:41 --> 02:28:47
how do we recognize this life

02:28:44 --> 02:28:49
because you know complexity we associate

02:28:46 --> 02:28:51
complexity maybe some level of mobility

02:28:48 --> 02:28:53
with life

02:28:50 --> 02:28:55
you know we have to be able to like have

02:28:52 --> 02:28:58
concrete

02:28:54 --> 02:29:00
algorithms for like

02:28:57 --> 02:29:02
um measuring the level of complexity we

02:28:59 --> 02:29:04
see in order to know the difference

02:29:01 --> 02:29:06
between life and non-life and the

02:29:03 --> 02:29:08
problem is that complexity is in the eye

02:29:05 --> 02:29:11
of the beholder so let me give you an

02:29:07 --> 02:29:14
example if i um if i give you uh

02:29:10 --> 02:29:17
an image of the endless digits right and

02:29:13 --> 02:29:18
i flip through any digits there is some

02:29:16 --> 02:29:20
obviously some

02:29:17 --> 02:29:22
structure to it because

02:29:19 --> 02:29:24
local structure you know neighboring

02:29:21 --> 02:29:26
pixels are correlated uh

02:29:23 --> 02:29:29
across the entire data set

02:29:25 --> 02:29:32
now imagine that

02:29:28 --> 02:29:33
i apply a random permutation to all the

02:29:31 --> 02:29:35
pixels

02:29:32 --> 02:29:38
a fixed random permutation now i show

02:29:34 --> 02:29:40
you those images they will look

02:29:37 --> 02:29:42
you know really disorganized to you more

02:29:39 --> 02:29:43
complex

02:29:41 --> 02:29:45
in fact they're not more complex in

02:29:42 --> 02:29:47
absolute terms they're exactly the same

02:29:44 --> 02:29:49
as originally right and if you knew what

02:29:46 --> 02:29:52
he permutation was you know you could

02:29:48 --> 02:29:53
undo the permutation now

02:29:51 --> 02:29:55
imagine i give you special glasses that

02:29:52 --> 02:29:56
undo that permutation

02:29:54 --> 02:29:59
ow all of a sudden what looked

02:29:56 --> 02:30:00
complicated becomes simple right so if

02:29:58 --> 02:30:03
you have two

02:30:00 --> 02:30:04
if you have you know humans on one end

02:30:02 --> 02:30:06
and then another race of aliens that

02:30:03 --> 02:30:07
sees the universe with permutation

02:30:05 --> 02:30:09
glasses yeah with the permutation

02:30:06 --> 02:30:11
glasses

02:30:08 --> 02:30:13
what we perceive as simple to them is

02:30:10 --> 02:30:15
hardly complicated it's probably heat

02:30:12 --> 02:30:18
yeah heat yeah okay and what they

02:30:14 --> 02:30:21
perceive as simple to us is is random uh

02:30:17 --> 02:30:23
fluctuation it's heat yeah

02:30:20 --> 02:30:24
so truly in the eye of the beholder it

02:30:22 --> 02:30:26
depends what kind of glasses you're

02:30:23 --> 02:30:28
wearing right depends what kind of

02:30:25 --> 02:30:30
algorithm you're running in your

02:30:27 --> 02:30:31
perception system so i don't think we'll

02:30:29 --> 02:30:34
have a theory of intelligence

02:30:30 --> 02:30:38
self-organization evolution things like

02:30:33 --> 02:30:40
that until we have a good handle on

02:30:37 --> 02:30:43
a notion of complexity which we know is

02:30:39 --> 02:30:44
in the higher the eye of the beholder

02:30:42 --> 02:30:47
yeah it's sad to think that we might not

02:30:44 --> 02:30:49
be able to detect or interact with alien

02:30:46 --> 02:30:50
species because we're wearing different

02:30:48 --> 02:30:52
glasses

02:30:49 --> 02:30:53
um because their notion of locality

02:30:51 --> 02:30:55
might be different from ours yeah this

02:30:52 --> 02:30:57
actually connects with fascinating

02:30:54 --> 02:30:58
questions in physics at the moment like

02:30:56 --> 02:31:00
modern physics

02:30:58 --> 02:31:02
quantum physics like you know

02:30:59 --> 02:31:04
questions about like you know can we

02:31:01 --> 02:31:05
recover the information that's lost in a

02:31:03 --> 02:31:07
black hole and things like this right

02:31:04 --> 02:31:09
and uh and that relies on notions of

02:31:06 --> 02:31:11
complexity um

02:31:08 --> 02:31:13
yeah which you know i find i find this

02:31:10 --> 02:31:16
fascinating can you describe your

02:31:12 --> 02:31:17
personal quest to build an expressive

02:31:15 --> 02:31:20
lectronic

02:31:16 --> 02:31:22
wind instrument ewi

02:31:19 --> 02:31:26
what is it what does it take

02:31:22 --> 02:31:27
to uh to build it well i'm a tinkerer i

02:31:25 --> 02:31:29
like building things

02:31:26 --> 02:31:31
i like building things with combinations

02:31:28 --> 02:31:32
of electronics and you know mechanical

02:31:30 --> 02:31:34
stuff

02:31:31 --> 02:31:36
um you know i have a bunch of different

02:31:33 --> 02:31:38
hobbies but um

02:31:35 --> 02:31:40
you know probably my first one was

02:31:37 --> 02:31:41
little was building model airplanes and

02:31:39 --> 02:31:42
stuff like that and i still do that to

02:31:40 --> 02:31:44
some extent

02:31:41 --> 02:31:47
but also electronics i taught myself

02:31:43 --> 02:31:48
electronics before i studied it

02:31:46 --> 02:31:50
and the reason i taught myself

02:31:47 --> 02:31:52
electronics is because of music

02:31:49 --> 02:31:54
my cousin

02:31:51 --> 02:31:56
was an aspiring electronic musician and

02:31:53 --> 02:31:58
he had an analog synthesizer and i was

02:31:55 --> 02:32:00
you know basically modifying it for him

02:31:57 --> 02:32:01
and building sequencers and stuff like

02:31:59 --> 02:32:03
that right for him i was i was in high

02:32:00 --> 02:32:05
school when i was doing this

02:32:02 --> 02:32:06
that's the interesting like progressive

02:32:04 --> 02:32:08
rock like 80s

02:32:05 --> 02:32:10
like what's what's the greatest band of

02:32:07 --> 02:32:12
all time according to yala um

02:32:09 --> 02:32:15
there's two there's too many of them but

02:32:11 --> 02:32:16
you know it's a combination of uh

02:32:15 --> 02:32:22
you know my vision orchestra uh

02:32:18 --> 02:32:26
weather report yes

02:32:21 --> 02:32:26
genesis uh you know yes

02:32:26 --> 02:32:30
gentle giant you know things like that

02:32:28 --> 02:32:32
great

02:32:29 --> 02:32:34
okay so this uh this level of

02:32:31 --> 02:32:35
electronics and this love of music

02:32:33 --> 02:32:38
ombined together right so i was

02:32:34 --> 02:32:39
actually trying to play a

02:32:37 --> 02:32:42
baroque and renaissance

02:32:38 --> 02:32:44
music and i played in a

02:32:41 --> 02:32:46
orchestra when i was in high school in

02:32:43 --> 02:32:48
uh first years of college

02:32:45 --> 02:32:50
and i played the recorder chrome horn a

02:32:47 --> 02:32:53
little bit of oboe you know things like

02:32:49 --> 02:32:54
that so i'm a win instrument player but

02:32:52 --> 02:32:56
i always wanted to play improvised music

02:32:53 --> 02:32:56
even though i don't know anything about

02:32:55 --> 02:32:59
it

02:32:55 --> 02:33:01
uh and the only way i figured you know

02:32:58 --> 02:33:03
short of like learning to play saxophone

02:33:00 --> 02:33:04
was to

02:33:02 --> 02:33:06
play electronic instruments so they

02:33:03 --> 02:33:09
behave like the fingering is similar to

02:33:05 --> 02:33:10
a saxophone but you know you have wide

02:33:08 --> 02:33:13
variety of sound because you control the

02:33:09 --> 02:33:14
synthesizer with it so i had a bunch of

02:33:12 --> 02:33:16
those you know going back to the late

02:33:13 --> 02:33:17
80s

02:33:15 --> 02:33:19
from either

02:33:16 --> 02:33:22
yamaha or

02:33:18 --> 02:33:23
akai they they're both kind of the main

02:33:21 --> 02:33:25
manufacturers of those so they were

02:33:22 --> 02:33:26
classically you know going back several

02:33:24 --> 02:33:27
decades

02:33:25 --> 02:33:29
uh but i've never been completely

02:33:26 --> 02:33:31
satisfied with them because of lack of

02:33:28 --> 02:33:33
exclusivity

02:33:30 --> 02:33:34
and you know those things you know are

02:33:32 --> 02:33:36
somewhat expensive i mean they measure

02:33:33 --> 02:33:38
the breast pressure they measure the lip

02:33:35 --> 02:33:39
ressure and you know

02:33:37 --> 02:33:41
uh

02:33:38 --> 02:33:43
you have like various parameters you can

02:33:40 --> 02:33:45
vary it with fingers but they

02:33:42 --> 02:33:48
they're not really as expressive as

02:33:44 --> 02:33:50
a acoustic instrument right you um you

02:33:47 --> 02:33:51
hear john coltrane play two notes and

02:33:49 --> 02:33:53
you hear you know his john cochrane you

02:33:50 --> 02:33:55
know he's got a unique sound

02:33:52 --> 02:33:57
uh or or mike davis right you can hear

02:33:54 --> 02:34:00
his mice davis

02:33:56 --> 02:34:01
uh playing the trumpet because the the

02:33:59 --> 02:34:03
sound

02:34:00 --> 02:34:06
reflects their

02:34:02 --> 02:34:07
you know physiology basically the shape

02:34:05 --> 02:34:08
of the vocal tract

02:34:06 --> 02:34:11
um

02:34:08 --> 02:34:12
kind of shapes the the sound so how how

02:34:10 --> 02:34:14
do you do this with uh electronic

02:34:12 --> 02:34:16
instrument and i was

02:34:13 --> 02:34:17
many years ago i met a guy called david

02:34:15 --> 02:34:19
wessel he

02:34:16 --> 02:34:21
was a professor at berkeley and

02:34:18 --> 02:34:23
created the

02:34:20 --> 02:34:24
center for like you know music

02:34:22 --> 02:34:26
technology there and he was interested

02:34:24 --> 02:34:28
in that question

02:34:26 --> 02:34:30
and so i kept kind of thinking about

02:34:27 --> 02:34:32
his for many years and finally because

02:34:29 --> 02:34:34
i covered you know i was at home i was

02:34:31 --> 02:34:36
in my workshop my workshop serves also

02:34:33 --> 02:34:37
as my kind of zoom uh

02:34:35 --> 02:34:39
room and

02:34:36 --> 02:34:42
home office and this is in new jersey in

02:34:38 --> 02:34:44
ew jersey and um i started uh

02:34:41 --> 02:34:47
really being serious about you know

02:34:43 --> 02:34:49
building my own ewe instrument what else

02:34:46 --> 02:34:51
is going on in that new jersey workshop

02:34:48 --> 02:34:53
is there some is there some crazy stuff

02:34:50 --> 02:34:55
you built like just or or like left on

02:34:52 --> 02:34:58
the workshop floor

02:34:54 --> 02:35:00
left behind a lot of crazy stuff is uh

02:34:57 --> 02:35:02
you know electronics with built with

02:34:59 --> 02:35:03
microcontrollers of various kinds

02:35:01 --> 02:35:07
and you know

02:35:02 --> 02:35:07
eird flying contraptions

02:35:06 --> 02:35:11
o you still love flying

02:35:08 --> 02:35:14
it's a family disease my my dad got me

02:35:10 --> 02:35:15
into it when i was a kid

02:35:13 --> 02:35:16
and

02:35:14 --> 02:35:19
he was building model airplanes when he

02:35:15 --> 02:35:21
was a kid and uh and he was a mechanical

02:35:18 --> 02:35:24
engineer he taught himself electronics

02:35:20 --> 02:35:25
also so he he built his early radio

02:35:23 --> 02:35:27
control systems in the

02:35:24 --> 02:35:30
late 60s early 70s

02:35:26 --> 02:35:31
um and so that that's what got me into i

02:35:29 --> 02:35:33
mean he got me into kind of you know

02:35:30 --> 02:35:35
engineering and science and technology

02:35:32 --> 02:35:37
do you also have an interest in

02:35:34 --> 02:35:40
appreciation of flight in other forms

02:35:36 --> 02:35:42
like with drones quadropters or do you

02:35:39 --> 02:35:43
do yes is it model airplane the thing

02:35:41 --> 02:35:45
you know i

02:35:42 --> 02:35:47
you know before drones were

02:35:44 --> 02:35:48
you know kind of a

02:35:46 --> 02:35:51
consumer product

02:35:48 --> 02:35:54
um you know i built my own you know with

02:35:50 --> 02:35:56
also building a microcontroller with uh

02:35:53 --> 02:35:58
gyroscopes and accelerometers for

02:35:55 --> 02:35:59
stabilization writing the firmware for

02:35:57 --> 02:36:00
it you know and then when it became kind

02:35:58 --> 02:36:02
of a standard thing you could buy it was

02:35:59 --> 02:36:05
boring you know i stopped doing it it

02:36:01 --> 02:36:07
was not fun anymore um yeah

02:36:04 --> 02:36:09
you were doing it before it was cool

02:36:06 --> 02:36:11
yeah what uh advice would you give to a

02:36:08 --> 02:36:13
young person today in high school and

02:36:10 --> 02:36:14
college that

02:36:12 --> 02:36:16
dreams of doing

02:36:13 --> 02:36:19
something big like young lacoon like

02:36:16 --> 02:36:21
let's talk in the space of intelligence

02:36:18 --> 02:36:23
dreams of having a chance to solve some

02:36:20 --> 02:36:24
fundamental problems in space of

02:36:22 --> 02:36:27
intelligence

02:36:23 --> 02:36:29
both for their career and just in life

02:36:26 --> 02:36:31
being somebody who was a part of

02:36:28 --> 02:36:32
creating something special

02:36:30 --> 02:36:34
so

02:36:31 --> 02:36:36
try to get

02:36:33 --> 02:36:37
interested by big questions things like

02:36:35 --> 02:36:39
you know

02:36:36 --> 02:36:41
hat is intelligence uh

02:36:38 --> 02:36:44
what is the universe made of what's life

02:36:40 --> 02:36:45
all about things like that

02:36:43 --> 02:36:48
um

02:36:44 --> 02:36:50
like even like crazy big questions like

02:36:47 --> 02:36:53
um what's time like nobody knows what

02:36:49 --> 02:36:53
ime is

02:36:53 --> 02:36:57
and

02:36:54 --> 02:36:58
then

02:36:56 --> 02:37:01
learn

02:36:57 --> 02:37:02
basic things like basic methods either

02:37:00 --> 02:37:04
from math from physics or from

02:37:01 --> 02:37:06
engineering

02:37:03 --> 02:37:08
things that have a long shelf life

02:37:05 --> 02:37:09
like if you have a choice between like

02:37:07 --> 02:37:11
you know

02:37:08 --> 02:37:13
learning uh you know mobile programming

02:37:10 --> 02:37:14
on iphone

02:37:12 --> 02:37:17
or quantum mechanics take quantum

02:37:13 --> 02:37:17
echanics

02:37:16 --> 02:37:21
um because you're going to learn things

02:37:18 --> 02:37:23
that you have no idea exist it and you

02:37:20 --> 02:37:26
may not you nev you know you may never

02:37:22 --> 02:37:27
be a quantum physicist

02:37:25 --> 02:37:29
but you will learn about path integrals

02:37:26 --> 02:37:30
and path integrals are used uh

02:37:28 --> 02:37:32
everywhere it's the same formula that

02:37:29 --> 02:37:34
you use for you know bayesian

02:37:31 --> 02:37:36
integration and stuff like that so the

02:37:33 --> 02:37:39
ideas the little ideas

02:37:36 --> 02:37:40
within quantum mechanics

02:37:38 --> 02:37:42
within some of these kind of more

02:37:39 --> 02:37:45
solidified fields will have a longer

02:37:42 --> 02:37:48
shelf life that you'll somehow

02:37:44 --> 02:37:49
use indirectly in in your work learn

02:37:47 --> 02:37:51
classical mechanics like you learn about

02:37:48 --> 02:37:52
lagrangians for example

02:37:50 --> 02:37:54
um

02:37:51 --> 02:37:56
which is like a huge

02:37:53 --> 02:37:58
ly useful concept you know for all

02:37:55 --> 02:38:01
kinds of different things uh

02:37:57 --> 02:38:04
learn uh statistical physics because uh

02:38:00 --> 02:38:05
all the math that comes out of you know

02:38:03 --> 02:38:08
for machine learning

02:38:04 --> 02:38:09
uh basically comes out of uh was figured

02:38:07 --> 02:38:11
out by statistical physicists in the you

02:38:08 --> 02:38:12
know late 19th early 20th century right

02:38:10 --> 02:38:14
so

02:38:12 --> 02:38:16
uh and for some of them actually more

02:38:13 --> 02:38:18
cently for by people like giorgio

02:38:15 --> 02:38:21
perezi who just got a nobel prize for

02:38:17 --> 02:38:23
the replica method among other things um

02:38:20 --> 02:38:26
it's used for a lot of different things

02:38:22 --> 02:38:29
uh you know variational inference

02:38:25 --> 02:38:30
that math comes from statistical physics

02:38:28 --> 02:38:31
o

02:38:29 --> 02:38:33
um

02:38:30 --> 02:38:36
so a lot of those kind of you know

02:38:32 --> 02:38:37
busy courses you know you'll if you do

02:38:35 --> 02:38:39
electrical engineering you take signal

02:38:36 --> 02:38:40
processing you'll you'll learn about

02:38:38 --> 02:38:42
fourier transforms

02:38:39 --> 02:38:44
again something super useful

02:38:41 --> 02:38:48
it's at the basis of things like graph

02:38:43 --> 02:38:51
neural nets which is an entirely new

02:38:47 --> 02:38:52
sub area of you know ai machine learning

02:38:50 --> 02:38:55
deep learning which i think is super

02:38:51 --> 02:38:56
promising for all kinds of applications

02:38:54 --> 02:38:57
omething very promising if you're more

02:38:55 --> 02:38:59
interested in applications is the

02:38:56 --> 02:39:02
applications of ai machine learning and

02:38:58 --> 02:39:04
eep learning to science

02:39:01 --> 02:39:05
or to

02:39:03 --> 02:39:07
science that can help solve big problems

02:39:04 --> 02:39:10
in the world like i have colleagues at

02:39:06 --> 02:39:11
uh at meta at fair

02:39:09 --> 02:39:13
we started this project called open

02:39:10 --> 02:39:15
catalyst and it's

02:39:12 --> 02:39:18
an open project collaborative

02:39:14 --> 02:39:20
and the idea is to use deep learning to

02:39:17 --> 02:39:23
help design

02:39:19 --> 02:39:24
ew chemical compounds or materials that

02:39:22 --> 02:39:26
would facilitate the separation of

02:39:23 --> 02:39:28
hydrogen from oxygen

02:39:25 --> 02:39:31
if you can efficiently separate oxygen

02:39:27 --> 02:39:34
from hydrogen with electricity

02:39:30 --> 02:39:37
ou you solve climate change

02:39:33 --> 02:39:38
it's as simple as that because

02:39:36 --> 02:39:41
you you cover you know some random

02:39:38 --> 02:39:43
desert with uh solar panels

02:39:40 --> 02:39:44
uh and you have have them work all day

02:39:42 --> 02:39:46
produce hydrogen and then you shoot the

02:39:43 --> 02:39:48
adrenaline wherever it's needed you

02:39:45 --> 02:39:49
don't need anything else

02:39:47 --> 02:39:52
uh

02:39:48 --> 02:39:53
you know you you have

02:39:51 --> 02:39:56
controllable

02:39:52 --> 02:39:59
power that's you know can be transported

02:39:55 --> 02:40:00
anywhere so if we if we have a

02:39:58 --> 02:40:04
large-scale efficient

02:40:00 --> 02:40:06
uh energy storage technology like

02:40:03 --> 02:40:07
producing hydrogen

02:40:05 --> 02:40:09
we solve climate change here's another

02:40:06 --> 02:40:11
way to solve climate change

02:40:08 --> 02:40:12
is uh figuring out how to make fusion

02:40:10 --> 02:40:14
work now the problem with fusion is that

02:40:11 --> 02:40:16
you make a super hot plasma and the

02:40:13 --> 02:40:18
plasma is unstable and you can't control

02:40:15 --> 02:40:20
it maybe with deep learning you can find

02:40:17 --> 02:40:21
controllers that will sterilize plasma

02:40:19 --> 02:40:22
nd make you know practical fusion

02:40:20 --> 02:40:24
reactors

02:40:21 --> 02:40:26
i mean that's very speculative but you

02:40:23 --> 02:40:28
know it's worth trying because

02:40:25 --> 02:40:29
um you know

02:40:27 --> 02:40:31
the payoff is huge there's a group at

02:40:28 --> 02:40:33
google working on this led by john platt

02:40:30 --> 02:40:35
so control

02:40:32 --> 02:40:39
convert as many problems in science and

02:40:34 --> 02:40:41
physics and biology and chemistry into a

02:40:38 --> 02:40:42
learnable problem and see if a

02:40:40 --> 02:40:44
machine can learn it

02:40:41 --> 02:40:46
right i mean there's properties of uh

02:40:43 --> 02:40:48
you know complex materials that we don't

02:40:45 --> 02:40:50
understand from first principle for

02:40:47 --> 02:40:53
example right so you know if we could

02:40:49 --> 02:40:55
esign uh new um

02:40:52 --> 02:40:56
you know new materials

02:40:54 --> 02:40:58
uh we could make more efficient

02:40:55 --> 02:41:00
batteries you know we could make maybe

02:40:57 --> 02:41:02
faster electronics we could i mean

02:40:59 --> 02:41:04
there's a lot of things we can imagine

02:41:01 --> 02:41:06
uh doing or you know lighter uh

02:41:03 --> 02:41:08
materials for for cars or airplanes and

02:41:05 --> 02:41:09
things like that maybe better fuel cells

02:41:07 --> 02:41:11
i mean there's all kinds of stuff we can

02:41:08 --> 02:41:13
imagine if we had good fuel cells

02:41:10 --> 02:41:15
hydrogen fuel cells uh we could use them

02:41:12 --> 02:41:18
to power airplanes and you know

02:41:14 --> 02:41:20
transportation wouldn't be uh or cars

02:41:17 --> 02:41:21
and we wouldn't have uh

02:41:19 --> 02:41:23
emission problem uh co2 emission

02:41:20 --> 02:41:26
problems for for

02:41:22 --> 02:41:27
uh air transportation anymore so

02:41:25 --> 02:41:31
there's a lot of those things i think

02:41:26 --> 02:41:32
where ai you know can be used it

02:41:30 --> 02:41:34
and this is not even talking about all

02:41:31 --> 02:41:36
the sort of medicine biology and and

02:41:34 --> 02:41:37
everything like that right

02:41:35 --> 02:41:40
you know like you know

02:41:36 --> 02:41:41
protein folding you know figuring out

02:41:39 --> 02:41:42
like how can you design your proteins

02:41:40 --> 02:41:44
that it sticks to another protein at a

02:41:41 --> 02:41:46
particular site because that's how you

02:41:43 --> 02:41:48
design drugs in the end

02:41:45 --> 02:41:49
um so you know diploma would be used for

02:41:47 --> 02:41:52
all of this and those are kind of you

02:41:48 --> 02:41:54
know would be sort of enormous progress

02:41:51 --> 02:41:56
if we could uh use it for that here's an

02:41:53 --> 02:41:58
example if you take

02:41:55 --> 02:42:02
this is like from recent material

02:41:57 --> 02:42:04
physics you take a monoatomic layer of

02:42:01 --> 02:42:06
graphene right so it's just carbon

02:42:03 --> 02:42:09
a hexagonal mesh and you make this

02:42:05 --> 02:42:11
ingle single atom thick

02:42:08 --> 02:42:13
you put another one on top you twist

02:42:10 --> 02:42:15
hem by some magic number of degrees

02:42:12 --> 02:42:17
three degrees or something

02:42:14 --> 02:42:20
it becomes super conductor

02:42:16 --> 02:42:20
nobody has any idea why

02:42:20 --> 02:42:24
uh i want to know how that was

02:42:21 --> 02:42:25
discovered but that's the kind of thing

02:42:23 --> 02:42:27
that machine learning can actually

02:42:24 --> 02:42:28
discover these well thanks maybe not but

02:42:26 --> 02:42:30
there is uh

02:42:28 --> 02:42:33
a hint perhaps that with machine

02:42:30 --> 02:42:36
learning we could train a system to

02:42:32 --> 02:42:38
basically be a phenomenological model of

02:42:35 --> 02:42:39
some complex emerging phenomenon which

02:42:37 --> 02:42:42
you know

02:42:38 --> 02:42:43
superconductivity is one of those

02:42:41 --> 02:42:45
uh

02:42:42 --> 02:42:46
where you know think the the skeletal

02:42:44 --> 02:42:48
phenomenon is too difficult to describe

02:42:45 --> 02:42:49
from first principles with the current

02:42:47 --> 02:42:51
you know

02:42:48 --> 02:42:53
the usual sort of you know reductionist

02:42:50 --> 02:42:56
ype method but we could

02:42:52 --> 02:42:57
have deep learning systems that predict

02:42:55 --> 02:43:00
he properties

02:42:56 --> 02:43:02
of a system from a description of it

02:42:59 --> 02:43:05
after being trained with sufficiently

02:43:01 --> 02:43:05
many samples

02:43:04 --> 02:43:09
this guy pascal fuad epfl he has a

02:43:07 --> 02:43:10
starter company

02:43:08 --> 02:43:13
that

02:43:09 --> 02:43:15
where he basically trained uh a

02:43:12 --> 02:43:17
convolutional net essentially to

02:43:14 --> 02:43:18
predict the aerodynamic properties of

02:43:16 --> 02:43:20
solids

02:43:17 --> 02:43:22
and you can generate as much data as you

02:43:19 --> 02:43:24
want by just running computational free

02:43:21 --> 02:43:26
dynamics right so you give a

02:43:23 --> 02:43:28
like a

02:43:25 --> 02:43:30
wing

02:43:27 --> 02:43:32
airfoil or something shape of some kind

02:43:29 --> 02:43:34
and you run computational free dynamics

02:43:31 --> 02:43:37
you get as a result the

02:43:33 --> 02:43:39
drag and you know lyft and all that

02:43:36 --> 02:43:41
stuff right and you can you can generate

02:43:38 --> 02:43:43
lots of data train a neural net to make

02:43:40 --> 02:43:44
those predictions and now what you have

02:43:42 --> 02:43:48
is a differentiable model

02:43:44 --> 02:43:49
of let's say dragon and lift as a

02:43:47 --> 02:43:50
function of the shape of that solid and

02:43:48 --> 02:43:52
so you can do backward understand you

02:43:49 --> 02:43:55
can optimize the shape so you get the

02:43:51 --> 02:43:55
properties you want

02:43:54 --> 02:43:59
yeah that's incredible that's incredible

02:43:56 --> 02:44:00
and on top of all that

02:43:58 --> 02:44:01
probably

02:43:59 --> 02:44:04
ou should read a little bit of

02:44:00 --> 02:44:05
literature and a little bit of history

02:44:03 --> 02:44:08
for

02:44:04 --> 02:44:09
inspiration and for wisdom because after

02:44:07 --> 02:44:11
all all these technologies will have to

02:44:08 --> 02:44:15
work in the human world yes and the

02:44:10 --> 02:44:15
human world is complicated

02:44:14 --> 02:44:19
yeah and this is um

02:44:17 --> 02:44:21
an amazing conversation i'm really

02:44:18 --> 02:44:22
honored that you talked with me today

02:44:20 --> 02:44:24
thank you for all the amazing work

02:44:21 --> 02:44:27
you're doing at fair at meta

02:44:23 --> 02:44:28
nd thank you for being so passionate

02:44:26 --> 02:44:30
after all these years about everything

02:44:27 --> 02:44:31
that's going on you're you're a beacon

02:44:29 --> 02:44:33
of hope for the machine learning

02:44:30 --> 02:44:34
community and thank you so much for

02:44:32 --> 02:44:36
spending your valuable time with me

02:44:34 --> 02:44:39
today that was awesome thanks for having

02:44:35 --> 02:44:40
me on that was it was a pleasure

02:44:38 --> 02:44:42
thanks for listening to this

02:44:39 --> 02:44:44
conversation with younla kun to support

02:44:41 --> 02:44:46
his podcast please check out our

02:44:43 --> 02:44:48
sponsors in the description

02:44:45 --> 02:44:51
and now let me leave you with some words

02:44:47 --> 02:44:53
from isaac asimov

02:44:50 --> 02:44:54
your assumptions are your windows on the

02:44:52 --> 02:44:57
world

02:44:53 --> 02:44:59
scrub them off every once in a while or

02:44:56 --> 02:45:01
the light won't come in

02:44:58 --> 02:45:05
thank you for listening and hope to see

02:45:00 --> 02:45:05
you next time

<!-- YOUTUBE_TRANSCRIPT_END -->
