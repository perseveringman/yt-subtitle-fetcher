---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "7ROelYvo8f0"
title: "MIT AGI: Building machines that see, learn, and think like people (Josh Tenenbaum)"
video_url: "https://www.youtube.com/watch?v=7ROelYvo8f0"
thumbnail_url: "https://i.ytimg.com/vi/7ROelYvo8f0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=7ROelYvo8f0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-02-08T18:46:06.000Z"
upload_date: "2018-02-08"
duration_seconds: 5709
duration_human: "1:35:09"
view_count: 212793
like_count: 4060
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:20:29.625Z"
---

# MIT AGI: Building machines that see, learn, and think like people (Josh Tenenbaum)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=7ROelYvo8f0
- video_id: 7ROelYvo8f0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-02-08T18:46:06.000Z
- upload_date: 2018-02-08
- duration: 1:35:09
- view_count: 212793
- like_count: 4060
- has_subtitle: true
- language: en
- availability: public
- tags: mit, artificial intelligence, artificial general intelligence, human-level intelligence, robotics, deep learning, machine learning, free, open, josh tenenbaum, brain and cognitive science
- categories: Science & Technology

## Description

This is a talk by Josh Tenenbaum for course 6.S099: Artificial General Intelligence. This class is free and open to everyone. Our goal is to take an engineering approach to exploring possible paths toward building human-level intelligence for a better world.

INFO:
Course website: https://agi.mit.edu
Contact: agi@mit.edu
Playlist: https://goo.gl/tC9bHs

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
today we have Josh Tenenbaum he's a

00:00:02 --> 00:00:07
professor here at MIT leading the

00:00:04 --> 00:00:10
computational cognitive science group

00:00:06 --> 00:00:13
among many other topics and cognition

00:00:09 --> 00:00:14
and intelligence he is fascinated with

00:00:12 --> 00:00:18
e question of how human beings learn

00:00:13 --> 00:00:20
so much from so little and how these

00:00:17 --> 00:00:22
insights can lead to build AI systems

00:00:19 --> 00:00:25
that are much more efficient at learning

00:00:21 --> 00:00:34
from data so please give Josh a warm

00:00:24 --> 00:00:37
welcome all right thank you very much

00:00:33 --> 00:00:39
thanks for having me decided to be part

00:00:36 --> 00:00:40
of what looks like really quite a very

00:00:38 --> 00:00:43
impressive lineup especially starting

00:00:39 --> 00:00:45
after today and it's I think quite a

00:00:42 --> 00:00:46
great opportunity to get to see

00:00:44 --> 00:00:49
perspectives on artificial intelligence

00:00:45 --> 00:00:52
from many of the leaders in industry and

00:00:48 --> 00:00:55
other entities working on this this

00:00:51 --> 00:00:56
great quest so I'm going to talk to you

00:00:54 --> 00:00:58
about some of the work that we do in our

00:00:55 --> 00:01:00
group but also I'm gonna try to give a

00:00:57 --> 00:01:02
broader perspective reflective of a

00:00:59 --> 00:01:04
number of MIT faculty especially those

00:01:01 --> 00:01:06
who are affiliated with the Center for

00:01:03 --> 00:01:08
brains minds and machines so you can see

00:01:05 --> 00:01:10
up there on my affiliation academically

00:01:07 --> 00:01:12
I'm part of brain and cognitive science

00:01:09 --> 00:01:14
or course nine I'm also part of csail

00:01:11 --> 00:01:16
but I'm also part of the Center for

00:01:13 --> 00:01:18
brains minds and machines which is an

00:01:15 --> 00:01:20
NSF funded Center Science and Technology

00:01:17 --> 00:01:21
Center which really stands for the

00:01:19 --> 00:01:23
bridge between the science and the

00:01:20 --> 00:01:25
ngineering of intelligence

00:01:22 --> 00:01:27
it literally straddles Vassar Street and

00:01:24 --> 00:01:28
that we have csail and DCs members we

00:01:26 --> 00:01:31
also have partners at Harvard and other

00:01:27 --> 00:01:32
academic institutions and again what we

00:01:30 --> 00:01:34
stand for I want to try to convey some

00:01:31 --> 00:01:36
of the specific things we're doing in

00:01:33 --> 00:01:38
the center and where we want to go with

00:01:35 --> 00:01:41
a vision that really is about jointly

00:01:37 --> 00:01:43
pursuing the science the basic science

00:01:40 --> 00:01:45
of how intelligence arises in the human

00:01:42 --> 00:01:48
mind and brain and also the engineering

00:01:44 --> 00:01:50
enterprise of how to build something

00:01:47 --> 00:01:51
increasingly like human intelligence in

00:01:49 --> 00:01:53
machines and we deeply believe that

00:01:51 --> 00:01:55
hese two projects have something to do

00:01:52 --> 00:01:58
with each other and our best pursued

00:01:54 --> 00:01:59
jointly now it's really exciting time to

00:01:57 --> 00:02:02
be doing anything related to

00:01:58 --> 00:02:03
intelligence or certainly to AI for all

00:02:01 --> 00:02:04
the reasons that you know brought you

00:02:02 --> 00:02:07
all here I don't have to tell you this

00:02:03 --> 00:02:09
we have all these ways in which AI is

00:02:06 --> 00:02:11
kind of finally here we finally live in

00:02:08 --> 00:02:12
the era of something like real practical

00:02:10 --> 00:02:14
AI

00:02:11 --> 00:02:16
or for those who've been around for a

00:02:13 --> 00:02:18
while and have seen some of the rises

00:02:15 --> 00:02:20
and falls you know AI is back in a big

00:02:17 --> 00:02:22
way but from my perspective and I think

00:02:19 --> 00:02:24
maybe this reflects you know why we

00:02:21 --> 00:02:26
distinguish what we might call a GI from

00:02:23 --> 00:02:28
AI we we don't really have any real AI

00:02:25 --> 00:02:31
basically we have what I like to call AI

00:02:27 --> 00:02:33
technologies which are systems that do

00:02:30 --> 00:02:35
things we used to think that only humans

00:02:32 --> 00:02:37
could do and now we have machines that

00:02:34 --> 00:02:39
do them often quite well maybe even

00:02:36 --> 00:02:42
better than any human who's ever lived

00:02:38 --> 00:02:44
right like a machine that plays go but

00:02:41 --> 00:02:45
none of these systems I would say are

00:02:43 --> 00:02:47
truly intelligent none of them have

00:02:44 --> 00:02:48
anything like common sense none of them

00:02:46 --> 00:02:51
have anything like the flexible

00:02:47 --> 00:02:53
general-purpose intelligence that each

00:02:50 --> 00:02:55
of you might use to learn every one of

00:02:52 --> 00:02:57
these skills or tasks right each of

00:02:54 --> 00:02:59
these systems had to be built by large

00:02:56 --> 00:03:01
teams of engineers working together

00:02:58 --> 00:03:03
often for a number of years out often at

00:03:00 --> 00:03:05
great cost to somebody who's willing to

00:03:02 --> 00:03:07
pay for it and each of them just does

00:03:04 --> 00:03:10
one thing so alphago might beat the

00:03:06 --> 00:03:13
worlds best but it can't drive to the

00:03:09 --> 00:03:15
match or even tell you that go it what

00:03:12 --> 00:03:16
go is it can't even tell you the go is a

00:03:14 --> 00:03:19
game because it doesn't even know what a

00:03:15 --> 00:03:21
game is right so what's missing why what

00:03:18 --> 00:03:23
is it that makes every one of your

00:03:20 --> 00:03:25
brains maybe you can't beat you know the

00:03:22 --> 00:03:27
world's best didn't go but any one of

00:03:24 --> 00:03:29
you can get behind the wheel of a car I

00:03:26 --> 00:03:32
think of this because my daughter is

00:03:28 --> 00:03:34
gonna turn 16 tomorrow if she lived in

00:03:31 --> 00:03:36
California she'd have a driver's license

00:03:33 --> 00:03:39
it's a little bit down the line for us

00:03:35 --> 00:03:40
here in Massachusetts but you know she

00:03:38 --> 00:03:43
didn't have to be specially engineered

00:03:39 --> 00:03:45
by billion dollar startups and you know

00:03:42 --> 00:03:46
she got really into chess recently and

00:03:44 --> 00:03:48
now she's taught herself chess by

00:03:45 --> 00:03:50
playing just you know a handful of games

00:03:47 --> 00:03:52
basically I mean she can do any one of

00:03:49 --> 00:03:54
these activities and any one of us can

00:03:51 --> 00:03:56
so what is it what's that what makes up

00:03:53 --> 00:04:00
the difference well there's many things

00:03:55 --> 00:04:02
right I'll talk about the the focus for

00:03:59 --> 00:04:06
us and our research and a lot of us

00:04:01 --> 00:04:09
again in CBMM is summarized here um what

00:04:05 --> 00:04:11
drives the success is right now in

00:04:08 --> 00:04:13
AI especially in industry okay and all

00:04:10 --> 00:04:15
these AI technologies is many many

00:04:12 --> 00:04:17
things many things but what's what where

00:04:14 --> 00:04:18
the progress has been made most recently

00:04:16 --> 00:04:21
and what's getting most of the attention

00:04:17 --> 00:04:23
is of course deep learning but other

00:04:20 --> 00:04:24
kinds of machine learning technologies

00:04:22 --> 00:04:26
which essentially represent the

00:04:23 --> 00:04:28
maturation of a decades-long

00:04:25 --> 00:04:30
for to solve the problem of pattern

00:04:27 --> 00:04:33
recognition that means taking data and

00:04:29 --> 00:04:34
finding patterns in the data that tells

00:04:32 --> 00:04:37
you something you care about like how to

00:04:33 --> 00:04:39
label a class or how to predict some

00:04:36 --> 00:04:40
other signal okay

00:04:38 --> 00:04:43
and pattern recognition is great it's an

00:04:39 --> 00:04:45
important part of intelligence and it's

00:04:42 --> 00:04:48
reasonable to say the deep learning as a

00:04:44 --> 00:04:50
technology has really made great strides

00:04:47 --> 00:04:52
on pattern recognition and maybe even

00:04:49 --> 00:04:54
you know has coming close to solving the

00:04:51 --> 00:04:56
problems of pattern recognition but

00:04:53 --> 00:04:57
intelligence is about many other things

00:04:55 --> 00:05:00
intelligence is about a lot more in

00:04:56 --> 00:05:02
particular it's about modeling the world

00:04:59 --> 00:05:05
and think about all the activities that

00:05:01 --> 00:05:06
a human does so model the world that

00:05:04 --> 00:05:08
go beyond just say recognizing

00:05:05 --> 00:05:10
patterns and data but actually trying to

00:05:07 --> 00:05:13
explain and understand what we see for

00:05:09 --> 00:05:15
instance okay or to be able to imagine

00:05:12 --> 00:05:17
things that we've never seen that never

00:05:14 --> 00:05:19
seen maybe even very different from

00:05:16 --> 00:05:20
anything we've ever seen but might want

00:05:18 --> 00:05:23
o see and then to meet to set those as

00:05:19 --> 00:05:25
goals to make plans and solve problems

00:05:22 --> 00:05:28
needed to make those things real or

00:05:24 --> 00:05:29
thinking about learning again the you

00:05:27 --> 00:05:31
know some kinds of learning can be

00:05:28 --> 00:05:32
thought of as pattern recognition if

00:05:30 --> 00:05:34
you're learning sufficient statistics or

00:05:31 --> 00:05:36
weights in a neural net that are used

00:05:33 --> 00:05:38
for those purposes but many activities

00:05:35 --> 00:05:40
of learning are about building out new

00:05:37 --> 00:05:42
models right either refining reusing

00:05:39 --> 00:05:43
improving old models or actually

00:05:41 --> 00:05:45
building fundamentally new models as

00:05:42 --> 00:05:47
you've experienced more of the world and

00:05:44 --> 00:05:48
then think about sharing our models

00:05:46 --> 00:05:50
communicating our models to others

00:05:47 --> 00:05:54
modeling their models learning from them

00:05:49 --> 00:05:55
all these activities of modeling these

00:05:53 --> 00:05:58
are at the heart of human intelligence

00:05:54 --> 00:06:00
and it requires a much broader set of

00:05:57 --> 00:06:01
tools so I want to talk about the ways

00:05:59 --> 00:06:03
we're studying these activities of

00:06:00 --> 00:06:05
modeling the world and something in a

00:06:02 --> 00:06:06
pretty non-technical way about what are

00:06:04 --> 00:06:09
the kind of tools that allow us to

00:06:05 --> 00:06:11
capture these abilities now I think it's

00:06:08 --> 00:06:12
I want to be very honest up front and to

00:06:10 --> 00:06:14
say this is just the beginning of a

00:06:11 --> 00:06:17
story right when you look at deep

00:06:14 --> 00:06:18
learning successes that itself is a

00:06:16 --> 00:06:19
story that goes back decades I'll say a

00:06:17 --> 00:06:21
little bit about that history in a

00:06:18 --> 00:06:23
minute but where we are now is just

00:06:20 --> 00:06:25
looking forward to a future when we

00:06:22 --> 00:06:28
might be able to capture these abilities

00:06:24 --> 00:06:29
you know at a really mature engineering

00:06:27 --> 00:06:31
scale and I would say we are far from

00:06:28 --> 00:06:34
being able to capture the all the ways

00:06:30 --> 00:06:36
in which humans richly flexibly quickly

00:06:33 --> 00:06:37
build models of the world at the kind of

00:06:35 --> 00:06:40
scale that say Silicon Valley wants

00:06:36 --> 00:06:42
either big tech companies like Google or

00:06:39 --> 00:06:45
soft or IBM or Facebook or small

00:06:41 --> 00:06:47
startups right we can get there and I

00:06:44 --> 00:06:49
think what what I want to talk to you

00:06:46 --> 00:06:50
about here is one route for trying to

00:06:48 --> 00:06:53
get there and this is the route that

00:06:49 --> 00:06:55
CBMM stands for the idea that by reverse

00:06:52 --> 00:06:57
ngineering how intelligence works in

00:06:54 --> 00:06:58
the human mind and brain that will give

00:06:56 --> 00:07:01
us a route to engineering these

00:06:57 --> 00:07:02
abilities in machines when we say

00:07:00 --> 00:07:04
reverse engineering we're talking about

00:07:01 --> 00:07:06
science but doing science like engineers

00:07:03 --> 00:07:07
this is our fundamental principle that

00:07:05 --> 00:07:09
if we approach cognitive science and

00:07:06 --> 00:07:11
neuroscience like an engineer where so

00:07:08 --> 00:07:13
the output of our science isn't just a

00:07:10 --> 00:07:15
description of the brain or the mind in

00:07:12 --> 00:07:16
words but in the same terms that an

00:07:14 --> 00:07:18
engineer would use to build an

00:07:15 --> 00:07:19
intelligence system then that will be

00:07:17 --> 00:07:22
both the basis for a much more rigorous

00:07:18 --> 00:07:24
and deeply insightful science but also

00:07:21 --> 00:07:25
direct translation of those insights

00:07:23 --> 00:07:29
into engineering applications

00:07:24 --> 00:07:31
now I said before I talk a little about

00:07:28 --> 00:07:33
history what I mean by that is is this

00:07:30 --> 00:07:34
again if if part of what brought you

00:07:32 --> 00:07:35
here is deep learning and I know even if

00:07:33 --> 00:07:37
you've never heard of deep learning

00:07:34 --> 00:07:40
before which I'm sure is unlikely you

00:07:36 --> 00:07:42
saw some you know a good spectrum of

00:07:39 --> 00:07:45
that in the in the overview session last

00:07:41 --> 00:07:47
night okay it's really interesting and

00:07:44 --> 00:07:49
important to look back on the history of

00:07:46 --> 00:07:50
where did techniques for deep learning

00:07:48 --> 00:07:52
come from or reinforcement learning

00:07:49 --> 00:07:54
those are the two tools in the in the

00:07:51 --> 00:07:55
current machine learning arsenal that

00:07:53 --> 00:07:57
are getting the most attention things

00:07:54 --> 00:07:59
like back propagation or end to end

00:07:56 --> 00:08:00
stochastic gradient descent or temporal

00:07:58 --> 00:08:02
difference learning or cue learning

00:07:59 --> 00:08:04
here's a few papers from the literature

00:08:01 --> 00:08:05
you know maybe some of you have read

00:08:03 --> 00:08:07
these original papers here's here's the

00:08:04 --> 00:08:09
original paper by rumelhart Hinton and

00:08:06 --> 00:08:10
colleagues in which they introduced the

00:08:08 --> 00:08:12
back propagation algorithm for training

00:08:09 --> 00:08:14
multi-layer perceptrons right

00:08:11 --> 00:08:16
multi-layer neural networks here's the

00:08:13 --> 00:08:17
original perceptron paper by Rosenblatt

00:08:15 --> 00:08:19
which introduced the one layer version

00:08:16 --> 00:08:21
of that architecture and the basic

00:08:18 --> 00:08:23
perceptron learning algorithm here's the

00:08:20 --> 00:08:25
first paper on sort of the temporal

00:08:22 --> 00:08:26
difference learning method for

00:08:24 --> 00:08:28
einforcement learning from Sutton and

00:08:25 --> 00:08:30
Bartow here's the original Bolton

00:08:27 --> 00:08:33
machine paper also by Hinton and

00:08:29 --> 00:08:35
colleagues which you know again is a

00:08:32 --> 00:08:36
those you don't know that architecture

00:08:34 --> 00:08:40
they give a kind of probabilistic

00:08:35 --> 00:08:43
undirected multi-layer perceptron or for

00:08:39 --> 00:08:44
example before there were LS TMS if you

00:08:42 --> 00:08:46
know about current recurrent neural

00:08:43 --> 00:08:48
network architecture earlier as much

00:08:45 --> 00:08:49
simpler versions of the same idea were

00:08:47 --> 00:08:51
proposed by Jeff Elman and his simple

00:08:48 --> 00:08:53
recurrent networks the reason I want to

00:08:50 --> 00:08:55
put up the original papers here

00:08:52 --> 00:08:57
for you to look at both when they were

00:08:54 --> 00:08:59
published and where they were published

00:08:56 --> 00:09:01
so if you look at the dates you'll see

00:08:58 --> 00:09:04
papers going back to you know the the

00:09:00 --> 00:09:06
80s but even the 60s or even the 1950s

00:09:03 --> 00:09:07
and look at where they were published

00:09:05 --> 00:09:09
most of them were published in

00:09:06 --> 00:09:11
psychology journals so the journal

00:09:08 --> 00:09:12
psychological review if you don't know

00:09:10 --> 00:09:14
it is like the leading journal of

00:09:11 --> 00:09:16
theoretical psychology and mathematical

00:09:13 --> 00:09:18
psychology okay or cognitive science the

00:09:15 --> 00:09:20
Journal of the cognitive science Society

00:09:17 --> 00:09:21
or the the backdrop paper was published

00:09:19 --> 00:09:23
in Nature which is a general interest

00:09:20 --> 00:09:25
science journal but by people who are

00:09:22 --> 00:09:27
mostly affiliated with an Institute for

00:09:24 --> 00:09:29
cognitive science in San Diego so what

00:09:26 --> 00:09:31
you see here is already a long history

00:09:28 --> 00:09:33
of scientists thinking like engineers

00:09:30 --> 00:09:34
these are people who are in psychology

00:09:32 --> 00:09:36
or cognitive science departments and

00:09:33 --> 00:09:39
publishing in those places but by

00:09:35 --> 00:09:41
formalizing even very basic insights

00:09:38 --> 00:09:44
about how humans might learn or how you

00:09:40 --> 00:09:46
know brains might learn in the right

00:09:43 --> 00:09:48
kind of math that led to of course

00:09:45 --> 00:09:49
progress on the science side but it led

00:09:47 --> 00:09:51
to all the engineering that we see now

00:09:48 --> 00:09:54
it wasn't sufficient right we needed we

00:09:50 --> 00:09:56
needed of course lots of innovations and

00:09:53 --> 00:09:58
advances in computing hardware and

00:09:55 --> 00:10:01
software systems right but this is where

00:09:57 --> 00:10:02
the basic the basic math came from and

00:10:00 --> 00:10:05
it came from doing science like an

00:10:01 --> 00:10:06
engineer so what I want to talk about in

00:10:04 --> 00:10:08
our vision is what is the future of this

00:10:05 --> 00:10:09
look like if we were to look 50 years

00:10:07 --> 00:10:12
into the future what would we be looking

00:10:08 --> 00:10:13
back on now or you know over this time

00:10:11 --> 00:10:15
scale well here's that here's a

00:10:12 --> 00:10:17
long-term research roadmap that reflects

00:10:14 --> 00:10:19
ome of my ambitions and some of our

00:10:16 --> 00:10:21
centers goals and many others too right

00:10:18 --> 00:10:23
we'd like to be able to address basic

00:10:20 --> 00:10:25
questions fundamental questions of what

00:10:22 --> 00:10:27
it is to be and to think like a human

00:10:24 --> 00:10:29
questions for example of consciousness

00:10:26 --> 00:10:32
or meaning in language or real learning

00:10:28 --> 00:10:33
right questions like you know even

00:10:31 --> 00:10:37
beyond the individual like questions of

00:10:32 --> 00:10:39
culture or creativity so our big ideas

00:10:36 --> 00:10:41
up there and for each of these there are

00:10:38 --> 00:10:42
basic scientific questions right how do

00:10:40 --> 00:10:44
we become aware of the world in

00:10:41 --> 00:10:45
ourselves in it starts with perception

00:10:43 --> 00:10:47
but it really turns into awareness

00:10:44 --> 00:10:49
of yourself and of the world

00:10:46 --> 00:10:52
and what we might call consciousness

00:10:48 --> 00:10:53
right or how does a word start to have a

00:10:51 --> 00:10:55
meaning what really is a meaning and how

00:10:52 --> 00:10:57
does a child grasp it or how did

00:10:54 --> 00:10:58
children actually learn what do babies

00:10:56 --> 00:11:00
brains actually start with are they

00:10:57 --> 00:11:01
blank slates or do they start with some

00:10:59 --> 00:11:03
kind of cognitive structure and then

00:11:00 --> 00:11:05
what is real learning look like these

00:11:02 --> 00:11:06
are just some of the questions that were

00:11:04 --> 00:11:08
we're interested in working on

00:11:05 --> 00:11:10
or when we talked about culture we mean

00:11:07 --> 00:11:12
how do you learn all the things you

00:11:09 --> 00:11:13
didn't directly experience right but

00:11:11 --> 00:11:14
hat somehow you got from the

00:11:12 --> 00:11:17
accumulation of knowledge in society

00:11:13 --> 00:11:19
over many generations or how do you ever

00:11:16 --> 00:11:20
think of new ideas or answers to new

00:11:18 --> 00:11:21
questions how do you think of the new

00:11:19 --> 00:11:24
questions themselves how do you decide

00:11:20 --> 00:11:26
what to think about these are all key

00:11:23 --> 00:11:27
activities of human intelligence when we

00:11:25 --> 00:11:29
talk about how we model the world where

00:11:26 --> 00:11:30
our models come from what we do with our

00:11:28 --> 00:11:32
models this is what we're talking about

00:11:29 --> 00:11:34
and if we could get machines that could

00:11:31 --> 00:11:35
o these things well again on the bottom

00:11:33 --> 00:11:39
row think of all the actual real

00:11:34 --> 00:11:40
engineering payoffs now in our Center in

00:11:38 --> 00:11:42
both my own activities and a lot of what

00:11:39 --> 00:11:44
my group does these days and what a

00:11:41 --> 00:11:45
number of other colleagues in the Center

00:11:43 --> 00:11:47
for brains minds and machines do as well

00:11:44 --> 00:11:49
as you know brought very broadly people

00:11:46 --> 00:11:51
in VCS and csail one place where we work

00:11:48 --> 00:11:53
on the beginnings of these problems in

00:11:50 --> 00:11:55
the near term this is the long term like

00:11:52 --> 00:11:56
think 50 years okay maybe short or maybe

00:11:54 --> 00:12:00
longer I don't know but think well

00:11:55 --> 00:12:02
beyond well beyond 10 years but in the

00:11:59 --> 00:12:04
short term 5 to 10 years a lot of our

00:12:01 --> 00:12:06
focus is around visual intelligence and

00:12:03 --> 00:12:08
there's many reasons for that again we

00:12:05 --> 00:12:09
can build on the successes of deep

00:12:07 --> 00:12:11
networks and a lot of pattern

00:12:08 --> 00:12:12
recognition and machine vision it's a

00:12:10 --> 00:12:13
good way to put these ideas into

00:12:11 --> 00:12:16
practice when we when we look at the

00:12:12 --> 00:12:18
actual brain the visual system in the

00:12:15 --> 00:12:20
brain in the human and other mammalian

00:12:17 --> 00:12:21
brains for example is really very

00:12:19 --> 00:12:23
clearly the best understood part of the

00:12:20 --> 00:12:25
brain and at a circuit level it's the

00:12:22 --> 00:12:27
part of the brain that's most inspired

00:12:24 --> 00:12:30
current deep learning and neural network

00:12:26 --> 00:12:32
systems but even there there's things

00:12:29 --> 00:12:34
which we still don't really understand

00:12:31 --> 00:12:36
like engineers so here's an example of a

00:12:33 --> 00:12:38
basic problem in visual intelligence

00:12:35 --> 00:12:42
that we and others in the centre are

00:12:37 --> 00:12:45
trying to solve look around you and you

00:12:41 --> 00:12:46
feel like there's a whole world around

00:12:44 --> 00:12:48
you and there is a whole world around

00:12:45 --> 00:12:50
you feel like your brain captures it but

00:12:47 --> 00:12:52
what what the actual sense data that's

00:12:49 --> 00:12:53
coming in through your eyes looks more

00:12:51 --> 00:12:55
like this photograph here where you can

00:12:52 --> 00:12:57
see there's a crowd scene but it's

00:12:54 --> 00:12:59
mostly blurry except for a small region

00:12:56 --> 00:13:01
of high resolution in the center so that

00:12:58 --> 00:13:02
corresponds biologically to what part of

00:13:00 --> 00:13:04
the images in your fovea that's the

00:13:01 --> 00:13:06
central region of cells in the retina

00:13:03 --> 00:13:09
where you have really high-resolution

00:13:05 --> 00:13:10
visual data the size of your phobia is

00:13:08 --> 00:13:12
roughly like if you hold out your thumb

00:13:09 --> 00:13:13
at arm's length it's a little bit bigger

00:13:11 --> 00:13:16
than that but not much bigger right

00:13:12 --> 00:13:18
most of the image in terms of the actual

00:13:15 --> 00:13:20
information coming in and a bottom-up

00:13:17 --> 00:13:20
sense to your brain is really quite

00:13:19 --> 00:13:23
blurry

00:13:19 --> 00:13:25
but somehow by looking at just one part

00:13:22 --> 00:13:27
and then by secada around or making a

00:13:24 --> 00:13:29
few eye movements you get a few glimpses

00:13:26 --> 00:13:30
each not much bigger than the size of

00:13:28 --> 00:13:31
your thumb at arm's length

00:13:29 --> 00:13:33
somehow you stitch that information

00:13:30 --> 00:13:35
together into what feels like and really

00:13:32 --> 00:13:37
is a rich representation of the whole

00:13:34 --> 00:13:39
world around you and when I say around

00:13:36 --> 00:13:42
you I mean literally around you so

00:13:38 --> 00:13:44
here's another kind of demonstration um

00:13:41 --> 00:13:46
without turning around nobody's allowed

00:13:43 --> 00:13:48
to turn around ask yourself what's

00:13:45 --> 00:13:49
behind you now the answer is going to be

00:13:47 --> 00:13:51
different for different people depending

00:13:48 --> 00:13:53
on where you're sitting right for most

00:13:50 --> 00:13:55
of you you might think well there's I

00:13:52 --> 00:13:56
think there's a person pretty close

00:13:54 --> 00:13:58
behind me all right you know you're in a

00:13:55 --> 00:13:59
crowded auditorium although you haven't

00:13:57 --> 00:14:02
seen that person you know that they're

00:13:58 --> 00:14:04
there right for people in the very back

00:14:01 --> 00:14:05
row you know there isn't a person behind

00:14:03 --> 00:14:07
you and you're conscious of being in the

00:14:04 --> 00:14:08
back row right you might be conscious

00:14:06 --> 00:14:10
that there's a wall right behind you but

00:14:07 --> 00:14:13
now for the people who are in the room

00:14:09 --> 00:14:15
not in the very back think about how far

00:14:12 --> 00:14:17
behind you is the back like where's the

00:14:14 --> 00:14:18
nearest wall behind you so we can get

00:14:16 --> 00:14:20
maybe we can call out try a little

00:14:17 --> 00:14:21
demonstration so I don't know I'm

00:14:19 --> 00:14:23
pointing to someone there can you see

00:14:20 --> 00:14:26
phrase say something if you think I'm

00:14:22 --> 00:14:27
pointing at you well I could have been

00:14:25 --> 00:14:28
pointing at you but I'm pointing someone

00:14:26 --> 00:14:30
behind you okay I'll point to you yeah

00:14:27 --> 00:14:32
I'm pointing to you all right

00:14:29 --> 00:14:33
so how far is the nearest wall no you

00:14:31 --> 00:14:36
can't turn around you've blown your

00:14:32 --> 00:14:38
chance right without turning around okay

00:14:35 --> 00:14:39
so you you were laughs okay do you see

00:14:37 --> 00:14:41
I'm pointing to you there with the tie

00:14:38 --> 00:14:47
okay so without turning around how far

00:14:40 --> 00:14:50
is the nearest wall behind you that's

00:14:46 --> 00:14:53
orry how far five meters okay well I

00:14:49 --> 00:14:56
mean that might be about right no other

00:14:52 --> 00:14:59
people can turn around how about you how

00:14:55 --> 00:15:03
far is the nearest wall behind you

00:14:58 --> 00:15:05
ten meters okay that might be right yeah

00:15:02 --> 00:15:09
ow about here

00:15:04 --> 00:15:10
how what do you think twenty okay see

00:15:08 --> 00:15:11
yeah since I didn't grow up in the

00:15:09 --> 00:15:14
metric system I barely know but yeah I

00:15:10 --> 00:15:17
mean I mean the point is that like

00:15:13 --> 00:15:19
you're you're you each of you is is not

00:15:16 --> 00:15:20
surely not exactly right but you're

00:15:18 --> 00:15:22
certainly within an order of magnitude

00:15:19 --> 00:15:23
and I guess if we actually tried to

00:15:21 --> 00:15:25
measure you know you're probably my

00:15:22 --> 00:15:27
guess is you're probably right within

00:15:24 --> 00:15:28
you know fifty percent or less often you

00:15:26 --> 00:15:31
know maybe just twenty percent error

00:15:27 --> 00:15:32
okay so how do you know this I mean even

00:15:30 --> 00:15:34
if it's not what did you say twenty

00:15:31 --> 00:15:36
meters even if it's not twenty meters

00:15:33 --> 00:15:38
it's probably closer to 20 meters than

00:15:35 --> 00:15:40
it is to 5 or 10 meters and then it is

00:15:37 --> 00:15:41
250 meters so how do you know this you

00:15:39 --> 00:15:43
haven't turned around in a while right

00:15:40 --> 00:15:46
but some part of your brain is tracking

00:15:43 --> 00:15:50
the whole world around you right and how

00:15:45 --> 00:15:51
many people are behind you yeah like a

00:15:49 --> 00:15:53
few hundred right I mean I don't know if

00:15:50 --> 00:15:56
it's 200 or 300 or but it's not a

00:15:52 --> 00:15:59
thousand I mean I don't think so and

00:15:55 --> 00:16:01
it's certainly not ten or 20 or 50 right

00:15:58 --> 00:16:02
so you track these things and you use

00:16:00 --> 00:16:05
them to plan your actions

00:16:01 --> 00:16:08
okay so again think about how instantly

00:16:04 --> 00:16:10
effortlessly and very reliably okay your

00:16:07 --> 00:16:12
brain computes all these things so the

00:16:09 --> 00:16:14
people and objects around you and it's

00:16:11 --> 00:16:15
not just you know approximations

00:16:13 --> 00:16:17
certainly when we're talking about

00:16:14 --> 00:16:19
what's what's behind you in space

00:16:16 --> 00:16:20
there's a lot of imprecision but when it

00:16:18 --> 00:16:21
comes to reaching for things right in

00:16:19 --> 00:16:23
front of you

00:16:20 --> 00:16:25
very precise shape and physical property

00:16:22 --> 00:16:26
estimates needed to pick up and

00:16:24 --> 00:16:28
manipulate objects and then when it

00:16:25 --> 00:16:29
comes to people it's not just the

00:16:27 --> 00:16:31
xistence of the people but something

00:16:28 --> 00:16:32
about what's in their head right you

00:16:30 --> 00:16:34
track whether someone's paying attention

00:16:31 --> 00:16:35
to you and you're talking to them what

00:16:33 --> 00:16:37
hey might want from you what they might

00:16:34 --> 00:16:39
be thinking about you what they might be

00:16:36 --> 00:16:41
thinking about other people okay so when

00:16:38 --> 00:16:42
we talk about visual intelligence this

00:16:40 --> 00:16:44
the whole stuff we're talking about

00:16:41 --> 00:16:47
and you can start to see how it turns

00:16:43 --> 00:16:49
into basic questions I think of not of

00:16:46 --> 00:16:51
what we might call the beginnings of

00:16:48 --> 00:16:54
consciousness at least our awareness of

00:16:50 --> 00:16:56
ourself in the world and of ourselves as

00:16:53 --> 00:16:58
a self in the world but also other

00:16:55 --> 00:16:59
aspects of higher-level intelligence and

00:16:57 --> 00:17:01
cognition that are not just about

00:16:58 --> 00:17:04
perception like symbols right to

00:17:00 --> 00:17:06
describe even to ourselves what's around

00:17:03 --> 00:17:06
us and where we are and what we can do

00:17:05 --> 00:17:08
with it

00:17:05 --> 00:17:10
you have to go beyond just what we would

00:17:07 --> 00:17:13
normally call the stuff of perception to

00:17:09 --> 00:17:14
say the thoughts in somebody's head and

00:17:12 --> 00:17:17
your own thoughts about that okay so

00:17:13 --> 00:17:19
what we've been doing in CBMM is trying

00:17:16 --> 00:17:21
to develop an architecture for visual

00:17:18 --> 00:17:22
intelligence and I'm not going to go

00:17:20 --> 00:17:24
into any of the details of how this

00:17:21 --> 00:17:26
works and this is just notional this is

00:17:23 --> 00:17:27
just a picture it's like a just a sketch

00:17:25 --> 00:17:30
from a grant proposal of what we say we

00:17:26 --> 00:17:32
want to do but it's based on a lot of

00:17:29 --> 00:17:33
scientific understanding of how the

00:17:31 --> 00:17:35
brain works there are different parts of

00:17:32 --> 00:17:37
the brain that correspond to these

00:17:34 --> 00:17:38
different modules in our architecture as

00:17:36 --> 00:17:40
well as some kind of emerging

00:17:37 --> 00:17:42
engineering way to try to capture at the

00:17:39 --> 00:17:44
software and maybe even hardware levels

00:17:41 --> 00:17:46
how these modules might work so we talk

00:17:43 --> 00:17:48
about a sort of an early module of a

00:17:45 --> 00:17:50
visual or perceptual stream which

00:17:47 --> 00:17:51
like bottom-up visual or other

00:17:49 --> 00:17:53
perceptual input that's the kind of

00:17:50 --> 00:17:54
thing that is pretty close to what we

00:17:52 --> 00:17:57
currently have and say deep

00:17:53 --> 00:17:59
convolutional neural networks but then

00:17:56 --> 00:18:01
we talk about some kind of the output of

00:17:58 --> 00:18:03
that isn't just pattern class labels but

00:18:00 --> 00:18:05
what we call the cognitive core core

00:18:02 --> 00:18:07
cognition so we get an understanding of

00:18:04 --> 00:18:09
space and objects there physics

00:18:06 --> 00:18:11
other people their minds that's the real

00:18:08 --> 00:18:14
stuff of cognition that has to be the

00:18:10 --> 00:18:16
output of perception but somehow we have

00:18:13 --> 00:18:18
to we have we have to have this is what

00:18:15 --> 00:18:19
we call the brain OS in this picture we

00:18:17 --> 00:18:22
have to get there by stitching together

00:18:18 --> 00:18:23
the bottom-up inputs from glimpse here a

00:18:21 --> 00:18:25
little bit here and there

00:18:22 --> 00:18:28
and accessing prior knowledge that comes

00:18:24 --> 00:18:30
from our memory systems to tell us how

00:18:27 --> 00:18:32
to stitch these things together into the

00:18:29 --> 00:18:34
really core cognitive representations of

00:18:31 --> 00:18:35
what's out there in the world and then

00:18:33 --> 00:18:39
if we're going to start to talk about it

00:18:34 --> 00:18:41
in language or to build plans on top of

00:18:38 --> 00:18:43
what we have seen and understood that's

00:18:40 --> 00:18:46
where we talk about symbols coming into

00:18:42 --> 00:18:50
the picture ok the building blocks of

00:18:45 --> 00:18:52
language and plans and so on so now we

00:18:49 --> 00:18:54
might say well ok this is an

00:18:51 --> 00:18:56
architecture that is brain inspired and

00:18:53 --> 00:18:57
cognitively inspired and and we're

00:18:55 --> 00:18:59
planning to turn into real engineering

00:18:56 --> 00:19:01
and you can say well do we need that

00:18:58 --> 00:19:02
maybe you know again I know this is a

00:19:00 --> 00:19:03
question you considered in the first

00:19:01 --> 00:19:05
lecture

00:19:02 --> 00:19:07
maybe the engineering toolkit that's

00:19:04 --> 00:19:09
currently been making a lot of progress

00:19:06 --> 00:19:11
in let's say industry maybe that's good

00:19:08 --> 00:19:13
enough maybe you know let's take deep

00:19:10 --> 00:19:15
learning but to stand for a broader set

00:19:12 --> 00:19:17
of modern pattern recognition based and

00:19:14 --> 00:19:20
reinforcement learning based tools and

00:19:16 --> 00:19:22
say ok well maybe that can scale up to

00:19:19 --> 00:19:24
this and you might you know it but maybe

00:19:21 --> 00:19:25
that's that's possible I'm happy in the

00:19:23 --> 00:19:29
question period of people want to debate

00:19:24 --> 00:19:31
this my sense is no I think that it's

00:19:28 --> 00:19:33
not when I say no I don't mean like it

00:19:30 --> 00:19:35
can't happen or it won't happen what I

00:19:32 --> 00:19:37
mean is the highest value the highest

00:19:34 --> 00:19:39
expected route right now is to take this

00:19:36 --> 00:19:41
more science-based reverse engineering

00:19:38 --> 00:19:43
approach and that if at least if you

00:19:40 --> 00:19:45
follow the current trajectory that

00:19:42 --> 00:19:47
industry incentives especially optimized

00:19:44 --> 00:19:49
for it's not even really trying to take

00:19:46 --> 00:19:51
us to these things so think about for

00:19:48 --> 00:19:53
example a case study of visual

00:19:50 --> 00:19:55
intelligence that is in some ways as

00:19:52 --> 00:19:57
pattern recognition very much of a

00:19:54 --> 00:19:59
success it's again been mostly driven by

00:19:56 --> 00:19:59
industry it's something that if you read

00:19:58 --> 00:20:02
in the

00:19:58 --> 00:20:04
Jews or even play around with in certain

00:20:01 --> 00:20:06
of it publicly available datasets feels

00:20:03 --> 00:20:07
like we've made great progress and this

00:20:05 --> 00:20:09
an aspect of visual intelligence

00:20:06 --> 00:20:12
which is sometimes called image

00:20:08 --> 00:20:15
captioning it's bate or mapping images

00:20:11 --> 00:20:16
to text you know basically there's been

00:20:14 --> 00:20:18
a bunch of systems here's a couple of

00:20:15 --> 00:20:20
press releases I guess this one's about

00:20:17 --> 00:20:22
Google Google's AI can now capture

00:20:19 --> 00:20:25
images almost as well as humans

00:20:21 --> 00:20:27
here's ones about Microsoft a couple of

00:20:24 --> 00:20:28
years ago I think there were something

00:20:26 --> 00:20:30
like eight papers all released onto

00:20:27 --> 00:20:32
archive around the same time from

00:20:29 --> 00:20:33
basically all the major industry

00:20:31 --> 00:20:36
computer vision groups as well as a

00:20:32 --> 00:20:38
couple of academic partners okay which

00:20:35 --> 00:20:40
all driven by basically the same data

00:20:37 --> 00:20:42
set produced by some Microsoft

00:20:39 --> 00:20:44
researchers and other collaborators

00:20:41 --> 00:20:46
trained a combination of deep

00:20:43 --> 00:20:47
convolutional neural networks you know

00:20:45 --> 00:20:48
state of the art visual pattern

00:20:46 --> 00:20:50
recognition with recurrent neural

00:20:47 --> 00:20:52
networks which had recently been

00:20:49 --> 00:20:54
developed for you know basically kinds

00:20:51 --> 00:20:55
of neural statistical language modeling

00:20:53 --> 00:20:57
lued them together and produced a

00:20:54 --> 00:21:00
system which which which made very

00:20:56 --> 00:21:02
impressive results in a big training set

00:20:59 --> 00:21:03
and a held-out test set where the goal

00:21:01 --> 00:21:06
was to take an image and write a

00:21:02 --> 00:21:08
sentence like a short sentence caption

00:21:05 --> 00:21:09
that that would seem like the kind of

00:21:07 --> 00:21:12
way a human would describe that image

00:21:08 --> 00:21:14
and these systems you know surpassed

00:21:11 --> 00:21:16
human level accuracy on the held-out

00:21:13 --> 00:21:18
est set from a big training set but

00:21:15 --> 00:21:19
what you can see when you really dig

00:21:17 --> 00:21:21
into these things is there's often a lot

00:21:18 --> 00:21:22
of what I would call data set

00:21:20 --> 00:21:24
overfitting it's not overfitting to the

00:21:21 --> 00:21:25
training set but it's overfitting to

00:21:23 --> 00:21:27
whatever are the particular

00:21:24 --> 00:21:30
characteristics of this data set you

00:21:26 --> 00:21:31
know wherever ever came from certain set

00:21:29 --> 00:21:33
of photographs and certain ways of

00:21:30 --> 00:21:36
captioning them okay which even a big

00:21:32 --> 00:21:37
data set it's not about quantity it's

00:21:35 --> 00:21:41
more about the quality the nature of

00:21:36 --> 00:21:43
what people are doing all right so one

00:21:40 --> 00:21:45
way to test this system is to apply it

00:21:42 --> 00:21:48
o what seems like basically the same

00:21:44 --> 00:21:50
problem but not within the a certain

00:21:47 --> 00:21:52
curated or built data set and there's a

00:21:49 --> 00:21:54
convenient Twitter bot that lets you do

00:21:51 --> 00:21:56
this so there's something called the pic

00:21:53 --> 00:21:58
desk bot which takes one of the state of

00:21:55 --> 00:22:00
the art industry AI captioning systems a

00:21:57 --> 00:22:02
very good one again this is not meant to

00:21:59 --> 00:22:03
I'm not trying to critique these systems

00:22:01 --> 00:22:04
for what they're trying to do I'm just

00:22:02 --> 00:22:06
rying to point out what they don't

00:22:03 --> 00:22:09
really even try to do so this takes the

00:22:05 --> 00:22:11
microsoft caption bot and just every

00:22:08 --> 00:22:13
couple of hours takes a random image

00:22:10 --> 00:22:15
from the web captions it and upload

00:22:12 --> 00:22:16
the results to Twitter and a couple of

00:22:14 --> 00:22:18
months ago when I prepared a first

00:22:15 --> 00:22:20
version of this talk I just took a few

00:22:17 --> 00:22:22
days in the life of this Twitter bot I

00:22:19 --> 00:22:24
didn't take every single image but I

00:22:21 --> 00:22:25
took you know most of the images in a

00:22:23 --> 00:22:27
way that was meant to be representative

00:22:24 --> 00:22:29
of the successes and the kinds of

00:22:26 --> 00:22:30
ailures that such a system will make so

00:22:28 --> 00:22:32
we can go through this and it's a little

00:22:30 --> 00:22:34
bit entertaining and I think quite

00:22:31 --> 00:22:38
informative so here's just a somewhat

00:22:33 --> 00:22:40
random sample of a few days in the life

00:22:37 --> 00:22:43
of one of these caption BOTS so here we

00:22:39 --> 00:22:45
have a picture of a person holding for

00:22:42 --> 00:22:46
tonight my screen is very small here and

00:22:44 --> 00:22:47
I can't read up there so maybe you'll

00:22:45 --> 00:22:49
have to tell me was that but a person

00:22:46 --> 00:22:50
holding a cell phone I guess I'll just

00:22:48 --> 00:22:51
read along with you so have a person

00:22:49 --> 00:22:53
holding a cell phone well it's not a

00:22:50 --> 00:22:54
person holding a cell phone but it's

00:22:52 --> 00:22:56
kind of close it's a person holding some

00:22:53 --> 00:22:57
kind of machine so I don't even know

00:22:55 --> 00:22:59
hat that is but it's some kind of

00:22:56 --> 00:23:02
musical instrument right

00:22:58 --> 00:23:04
so that's a mixed success or failure

00:23:01 --> 00:23:05
here's some pretty good one a group of

00:23:03 --> 00:23:07
people on a on a field playing football

00:23:04 --> 00:23:11
that's I would call that a you know a

00:23:06 --> 00:23:13
result maybe even A+ here's a group of

00:23:10 --> 00:23:15
people standing on top of a mountain

00:23:12 --> 00:23:16
so less good there's a mountain but as

00:23:14 --> 00:23:18
far as I can tell there's no people but

00:23:15 --> 00:23:20
hese systems like to see people because

00:23:17 --> 00:23:21
of both the combination because in the

00:23:19 --> 00:23:22
data set they were trained on there's a

00:23:20 --> 00:23:26
lot of people and people often talk

00:23:21 --> 00:23:27
about people okay I mean and the fact

00:23:25 --> 00:23:30
hat you can appreciate both what I said

00:23:26 --> 00:23:31
and why it's funny that's there you did

00:23:29 --> 00:23:32
some of my cognitive activities that

00:23:30 --> 00:23:34
his system is not even trying to do

00:23:31 --> 00:23:36
kay here we've got a building with the

00:23:33 --> 00:23:39
cake I'll go through these fast building

00:23:35 --> 00:23:40
with the cake a large stone building

00:23:38 --> 00:23:41
with the clock tower I think that's

00:23:39 --> 00:23:43
pretty good I'd give that like a b-plus

00:23:40 --> 00:23:45
there's no clock but it's plausibly

00:23:42 --> 00:23:46
right there might be a clock in there

00:23:44 --> 00:23:48
's definitely something like that

00:23:45 --> 00:23:50
here's a truck parked on the side of a

00:23:47 --> 00:23:52
building I don't know maybe a b-minus

00:23:49 --> 00:23:53
there there is a car on the side of a

00:23:51 --> 00:23:55
building but it's not a truck and it's

00:23:52 --> 00:23:56
it's not doesn't seem like the

00:23:54 --> 00:24:00
main thing in the image okay

00:23:55 --> 00:24:03
here's a necklace made of bananas here's

00:23:59 --> 00:24:04
a large ship in the water this is pretty

00:24:02 --> 00:24:06
good I give this like an a-minus or

00:24:03 --> 00:24:08
b-plus because there is a ship in the

00:24:05 --> 00:24:09
water but it's not very large it's

00:24:07 --> 00:24:11
really more of like a tugboat or

00:24:08 --> 00:24:12
something here's a sign sitting on the

00:24:10 --> 00:24:14
grass you know in some sense that's

00:24:11 --> 00:24:15
great no but it but in another sense

00:24:13 --> 00:24:17
it's really missing what's actually

00:24:14 --> 00:24:18
interesting and important and meaningful

00:24:16 --> 00:24:21
to humans

00:24:17 --> 00:24:24
here's a

00:24:20 --> 00:24:27
garden is in the dirt a pizza

00:24:23 --> 00:24:28
sitting on top of the building a small

00:24:26 --> 00:24:29
house with the red brick building that's

00:24:27 --> 00:24:31
pretty good although a kind of weird way

00:24:28 --> 00:24:33
of saying it a vintage photo of a pond

00:24:30 --> 00:24:34
that's good they like vintage photos a

00:24:32 --> 00:24:36
group of people that are standing in the

00:24:33 --> 00:24:37
grass near a bridge again there's two

00:24:35 --> 00:24:38
people and there's some grass and

00:24:36 --> 00:24:41
there's a bridge but it's really not

00:24:38 --> 00:24:44
what's going on a person in the yard

00:24:40 --> 00:24:45
okay kind of a group of people standing

00:24:43 --> 00:24:46
on top of the boat there's a boat

00:24:44 --> 00:24:48
here's a group of people they're

00:24:45 --> 00:24:51
standing but again it's what the

00:24:47 --> 00:24:53
sentence that you see is is more based

00:24:50 --> 00:24:54
on a bias of what people have said in

00:24:52 --> 00:24:57
the past about images that are only

00:24:53 --> 00:24:58
vaguely like this a clock tower is a

00:24:56 --> 00:25:00
little at night that's really I think

00:24:57 --> 00:25:01
pretty impressive a large clock mounted

00:24:59 --> 00:25:04
to the side of the building a little bit

00:25:00 --> 00:25:06
less so a snow-covered feel very good a

00:25:03 --> 00:25:08
building with snow on the ground a

00:25:05 --> 00:25:11
little bit less good there's no snow

00:25:07 --> 00:25:12
hite some people who I don't know them

00:25:10 --> 00:25:14
but I bet that's probably right because

00:25:11 --> 00:25:16
face identifying faces and recognizing

00:25:14 --> 00:25:17
people who are famous because they won

00:25:15 --> 00:25:20
you know medals and the Olympics

00:25:16 --> 00:25:21
probably I would trust current pattern

00:25:19 --> 00:25:23
recognition systems to get that a

00:25:20 --> 00:25:26
painting of a base in front of a mirror

00:25:22 --> 00:25:29
less good also a famous person there but

00:25:25 --> 00:25:31
we didn't get him a person walking in

00:25:28 --> 00:25:34
the rain again there is sort of a person

00:25:30 --> 00:25:37
and there's some puddles but not you

00:25:33 --> 00:25:39
know a group of stuffed animals a car

00:25:36 --> 00:25:42
parked in a parking lot that's good a

00:25:38 --> 00:25:44
car parked in front of a building less

00:25:41 --> 00:25:47
good a plate with a fork and knife a

00:25:43 --> 00:25:49
clear blue sky okay so you get the idea

00:25:46 --> 00:25:51
gain like if you actually go and play

00:25:48 --> 00:25:53
with the system partly because I think

00:25:50 --> 00:25:55
Mike but my friends at Microsoft told me

00:25:52 --> 00:25:57
they've improved at some you know I this

00:25:54 --> 00:25:59
partly for entertainment values you

00:25:56 --> 00:26:00
know I chose what also would be the

00:25:58 --> 00:26:02
funnier example so I'm quite I want to

00:25:59 --> 00:26:03
be quite honest about it and these are

00:26:01 --> 00:26:07
I'm not trying to take away what our

00:26:02 --> 00:26:08
impressive AI technologies but I think

00:26:06 --> 00:26:10
it's clear that there's a sense of

00:26:07 --> 00:26:11
understanding any one of these images

00:26:09 --> 00:26:14
that it's important to see that even

00:26:10 --> 00:26:15
when it seems to be correct right if it

00:26:13 --> 00:26:17
can make the kind of errors that it

00:26:14 --> 00:26:19
makes that even when it seems to be

00:26:16 --> 00:26:21
correct it's probably not doing what

00:26:18 --> 00:26:23
you're doing and it's probably not even

00:26:20 --> 00:26:24
trying to scale towards the dimensions

00:26:22 --> 00:26:26
of intelligence that we think about when

00:26:23 --> 00:26:28
we're talking about human intelligence

00:26:25 --> 00:26:30
okay another way to put this I'm going

00:26:27 --> 00:26:32
to show you a really insightful blog

00:26:29 --> 00:26:34
post from one of your other speakers so

00:26:31 --> 00:26:34
in a couple of days I'm not sure you're

00:26:33 --> 00:26:36
going to have Andre

00:26:33 --> 00:26:40
Karpov a who's one of the leading people

00:26:35 --> 00:26:41
in deep learning this is a really great

00:26:39 --> 00:26:44
blog post he wrote a couple of years ago

00:26:40 --> 00:26:46
when he was I think still at Stanford he

00:26:43 --> 00:26:49
got his PhD from Stanford he did he

00:26:45 --> 00:26:51
worked at Google a little bit on some

00:26:48 --> 00:26:53
arly big neural net AI projects there

00:26:50 --> 00:26:56
he was an open AI he was one of the

00:26:52 --> 00:26:58
founders of open AI and recently he

00:26:55 --> 00:27:01
joined Tesla as their director of AI

00:26:57 --> 00:27:03
research but about five years ago he was

00:27:00 --> 00:27:05
looking at the state of computer vision

00:27:02 --> 00:27:07
from a human intelligence point of view

00:27:04 --> 00:27:08
and and lamenting how far away we were

00:27:06 --> 00:27:10
okay so this is the title of his blog

00:27:07 --> 00:27:12
post the state of computer vision

00:27:09 --> 00:27:16
ai-nai we are really really far away

00:27:11 --> 00:27:17
and he took this image which was a sort

00:27:15 --> 00:27:20
of a famous image in its own right it

00:27:17 --> 00:27:21
was a popular image of Obama back when

00:27:19 --> 00:27:23
he was president kind of playing around

00:27:20 --> 00:27:25
as he liked to do when he was on tour so

00:27:22 --> 00:27:26
if you take a look at this you can see

00:27:24 --> 00:27:28
you probably all can recognize the

00:27:25 --> 00:27:30
previous President of the United States

00:27:27 --> 00:27:32
but you can also get the sense of where

00:27:29 --> 00:27:33
he is and what's going on and you might

00:27:31 --> 00:27:35
see people smiling and you might get the

00:27:32 --> 00:27:38
sense that he's playing a joke on

00:27:34 --> 00:27:39
someone can you see that right so how do

00:27:37 --> 00:27:42
you know that he's playing a joke and

00:27:38 --> 00:27:44
what that joke is well as Andre goes on

00:27:41 --> 00:27:45
to talk about in his blog post too if

00:27:43 --> 00:27:48
you think about all the things that that

00:27:44 --> 00:27:50
you have to really deploy in your mind

00:27:47 --> 00:27:52
to understand that it's a huge list of

00:27:49 --> 00:27:53
course it starts with seeing people and

00:27:51 --> 00:27:55
objects and maybe doing some face

00:27:52 --> 00:27:57
recognition but you have to do things

00:27:54 --> 00:27:59
like for example notice his foot on the

00:27:56 --> 00:28:01
scale and understand enough about how

00:27:58 --> 00:28:02
scales work that when a foot presses

00:28:00 --> 00:28:04
down it exerts force that the scale is

00:28:02 --> 00:28:06
ensitive doesn't just magically measure

00:28:03 --> 00:28:08
people's weight but it does that somehow

00:28:05 --> 00:28:10
through force you have to see who can

00:28:07 --> 00:28:11
see that he's doing that and who can't

00:28:09 --> 00:28:13
who cannot see that he's doing that

00:28:10 --> 00:28:15
right in particularly the person on the

00:28:12 --> 00:28:16
scale and why some people can see that

00:28:14 --> 00:28:18
he's doing that and can see that some

00:28:15 --> 00:28:21
other people can't see it why that makes

00:28:17 --> 00:28:23
it funny to them okay and someday we

00:28:20 --> 00:28:26
should have machines that can understand

00:28:22 --> 00:28:28
this but hopefully you can see why what

00:28:25 --> 00:28:31
I would I what the kind of architecture

00:28:27 --> 00:28:34
that I'm talking about would be the

00:28:30 --> 00:28:36
building blocks of the ingredients to be

00:28:33 --> 00:28:37
able to get them to do that now I when I

00:28:35 --> 00:28:39
again I prepared a version of this talk

00:28:36 --> 00:28:41
a few months ago and I wrote to Andre

00:28:38 --> 00:28:43
and I said I was gonna use this and I

00:28:40 --> 00:28:45
was curious if he how what you know if

00:28:42 --> 00:28:47
he had any reflections on this and where

00:28:44 --> 00:28:48
he thought we were relative to five

00:28:46 --> 00:28:50
years ago because a certain

00:28:47 --> 00:28:53
a lot of progress has been made but he

00:28:49 --> 00:28:54
said here's his email I hope he doesn't

00:28:52 --> 00:28:56
mind me sharing it but I mean again he's

00:28:53 --> 00:28:57
a very honest person and that's one of

00:28:55 --> 00:28:59
the many reasons why he's such an

00:28:56 --> 00:29:01
important person right now in AI okay

00:28:58 --> 00:29:02
he's both very technically strong and

00:29:00 --> 00:29:04
honest about what we can do what we

00:29:01 --> 00:29:06
can't do and as he says well what does

00:29:03 --> 00:29:07
he say it's nice to hear from you it's

00:29:05 --> 00:29:10
funny you should bring this up I was

00:29:06 --> 00:29:11
also thinking about writing a a return

00:29:09 --> 00:29:12
to this and in short basically I don't

00:29:10 --> 00:29:14
believe we've made very much progress

00:29:11 --> 00:29:16
right he points out that in his long

00:29:13 --> 00:29:17
list of things that you'd need to

00:29:15 --> 00:29:19
understand the image we have made

00:29:16 --> 00:29:21
progress on some the ability to again

00:29:18 --> 00:29:23
detect people and do face recognition

00:29:20 --> 00:29:25
for well-known individuals okay but

00:29:22 --> 00:29:27
hat's kind of about it all right

00:29:24 --> 00:29:28
and he wasn't particularly optimistic

00:29:26 --> 00:29:30
that the current route that's being

00:29:27 --> 00:29:33
pursued an industry is is anywhere close

00:29:29 --> 00:29:36
to solving or even really trying to

00:29:32 --> 00:29:39
solve these larger questions um if we

00:29:35 --> 00:29:41
give this image to that caption bot you

00:29:38 --> 00:29:43
know what we see is again represents the

00:29:40 --> 00:29:44
same point so here's the caption bot it

00:29:42 --> 00:29:46
says I think it's a group of people

00:29:43 --> 00:29:50
standing next to a man in a suit and tie

00:29:45 --> 00:29:51
right so that's right right as far as it

00:29:49 --> 00:29:54
goes it just doesn't go far enough and

00:29:50 --> 00:29:56
the current the current ideas of built a

00:29:53 --> 00:29:59
data set train a deep learning algorithm

00:29:55 --> 00:30:02
on it and then repeat um aren't really

00:29:58 --> 00:30:04
even I would venture trying to get to

00:30:01 --> 00:30:05
what we're talking about or here's

00:30:03 --> 00:30:07
another I'll just give you one other

00:30:04 --> 00:30:09
example of a couple of photographs from

00:30:06 --> 00:30:12
y recent vacation and a nice warm

00:30:08 --> 00:30:14
tropical look how which I think

00:30:11 --> 00:30:18
illustrates ways in which again the gap

00:30:13 --> 00:30:20
where we have machines that can say beat

00:30:17 --> 00:30:22
he world's best at go but can't even

00:30:19 --> 00:30:24
beat a child at tick-tack-toe

00:30:21 --> 00:30:26
now what do I mean by that well you know

00:30:23 --> 00:30:27
of course we can build we don't even

00:30:25 --> 00:30:28
eed reinforcement learning or deep

00:30:26 --> 00:30:31
learning to build a machine that can

00:30:27 --> 00:30:32
they can win or tie do is do optimally

00:30:30 --> 00:30:34
in tic-tac-toe but think about this this

00:30:32 --> 00:30:38
a real tic-tac-toe game which I saw

00:30:33 --> 00:30:39
on the grass outside my hotel right what

00:30:37 --> 00:30:40
do you have to do to look at this and

00:30:38 --> 00:30:42
recognize that it's a tic-tac-toe game

00:30:39 --> 00:30:43
you have to see the objects you have to

00:30:41 --> 00:30:45
see what's you know in some sense

00:30:42 --> 00:30:47
there's a three by three grid but it's

00:30:44 --> 00:30:49
only abstract right it's only

00:30:46 --> 00:30:53
delimited by this these ropes or strings

00:30:48 --> 00:30:56
okay it's not actually a grid in any

00:30:52 --> 00:30:57
simple geometric sense all right but yet

00:30:55 --> 00:30:58
a child can look at that and indeed

00:30:56 --> 00:31:00
here's an actual child who was looking

00:30:57 --> 00:31:02
at it and recognized oh it's a game of

00:30:59 --> 00:31:02
tic-tac-toe and even know what they need

00:31:01 --> 00:31:04
to do to win

00:31:01 --> 00:31:05
we put the X and completed and now

00:31:03 --> 00:31:08
they've got three in a row right that's

00:31:04 --> 00:31:09
literally child's play okay

00:31:07 --> 00:31:10
ou showed this sort of thing though to

00:31:08 --> 00:31:13
ne of these you know image

00:31:09 --> 00:31:15
understanding caption BOTS and I think

00:31:12 --> 00:31:17
it's a close-up of a sign okay again

00:31:14 --> 00:31:21
it's not like saying that this is a

00:31:16 --> 00:31:24
close-up of a sign is is not the same

00:31:20 --> 00:31:26
thing I would venture as a as a

00:31:23 --> 00:31:28
cognitive or computational activity

00:31:25 --> 00:31:29
that's going to give us what we need to

00:31:27 --> 00:31:31
say recognize the objects to recognize

00:31:28 --> 00:31:33
it as a game to understand the goal and

00:31:30 --> 00:31:35
how to plan to achieve those goals

00:31:32 --> 00:31:36
whereas this kind of architecture is

00:31:34 --> 00:31:39
designed to try to do all of these

00:31:35 --> 00:31:42
things ultimately right and I bring in

00:31:38 --> 00:31:44
these examples of games or jokes to

00:31:41 --> 00:31:47
really show where perception goes to

00:31:43 --> 00:31:49
cognition you know that and all the way

00:31:46 --> 00:31:52
up to symbols right so to get objects

00:31:48 --> 00:31:54
and forces and mental states that's the

00:31:51 --> 00:31:57
cognitive core but to be able to get

00:31:53 --> 00:31:59
goals and plans and what do I do or how

00:31:56 --> 00:32:02
do I talk about it that's symbols okay

00:31:58 --> 00:32:03
here's another way into this and it's

00:32:01 --> 00:32:05
one that also motivates I think a lot of

00:32:02 --> 00:32:07
really good work on the engineering side

00:32:04 --> 00:32:10
and a lot of our interest in the science

00:32:06 --> 00:32:12
side is think about robotics and think

00:32:09 --> 00:32:14
about what do you have to do to you know

00:32:11 --> 00:32:16
hat is the brain have to be light to

00:32:13 --> 00:32:18
control the body so again you're gonna

00:32:15 --> 00:32:21
hear from shortly I think maybe it's

00:32:17 --> 00:32:23
next week from Mark raybert who's one of

00:32:20 --> 00:32:25
the founders of Boston Dynamics which is

00:32:22 --> 00:32:28
one of my favorite companies anywhere

00:32:24 --> 00:32:31
they're without doubt the leading maker

00:32:27 --> 00:32:33
of humanoid robots legged locomoting

00:32:30 --> 00:32:36
robots in industry they have all sorts

00:32:32 --> 00:32:38
of other really cool robots robots like

00:32:35 --> 00:32:40
dogs robots that have all you know I

00:32:37 --> 00:32:42
think you'll even get to see a live

00:32:39 --> 00:32:44
demonstration of my new robots this

00:32:41 --> 00:32:47
really awesome impressive stuff okay um

00:32:43 --> 00:32:48
but what about the minds and brains of

00:32:46 --> 00:32:51
these robots well again if you ask mark

00:32:47 --> 00:32:52
ask them how much of human-like

00:32:50 --> 00:32:55
cognition do they have in their robots

00:32:51 --> 00:32:56
and I think he would say very little in

00:32:54 --> 00:32:59
fact we have asked him that and he would

00:32:55 --> 00:33:01
say very little he has said very little

00:32:58 --> 00:33:03
he's actually one of the advisors of our

00:33:00 --> 00:33:05
Center and I think in many ways were

00:33:02 --> 00:33:07
very much on the same page we both want

00:33:04 --> 00:33:08
o know how do you build the kind of

00:33:06 --> 00:33:12
intelligence that can control these

00:33:07 --> 00:33:13
bodies like the way a human does alright

00:33:11 --> 00:33:15
um here's another example of an industry

00:33:12 --> 00:33:15
robotics effort this is Google's arm

00:33:14 --> 00:33:17
farm

00:33:14 --> 00:33:18
where you know they've they've got lots

00:33:16 --> 00:33:20
of robot arms and they're trying to

00:33:17 --> 00:33:21
train them to pick up objects using

00:33:19 --> 00:33:23
various kinds of deep learning and

00:33:20 --> 00:33:24
reinforcement learning techniques and I

00:33:22 --> 00:33:26
think it's one approach I just think

00:33:23 --> 00:33:28
it's very very different from the way

00:33:25 --> 00:33:30
humans learn to say control their body

00:33:27 --> 00:33:32
and manipulate objects and you can see

00:33:29 --> 00:33:33
that in terms of things that go back to

00:33:31 --> 00:33:34
what you were saying when you're

00:33:32 --> 00:33:36
introducing me right think about how

00:33:33 --> 00:33:38
quickly we learn things right here you

00:33:35 --> 00:33:40
have these the arm farm is trying to

00:33:37 --> 00:33:42
generate you know effectively maybe if

00:33:39 --> 00:33:45
not infinite but hundreds of thousands

00:33:41 --> 00:33:46
millions of examples of reaches and

00:33:44 --> 00:33:49
pickups of objects even with just a

00:33:45 --> 00:33:50
single gripper and yet a child who in

00:33:48 --> 00:33:53
some ways can't control their body

00:33:49 --> 00:33:55
nearly as well as robots can be

00:33:52 --> 00:33:57
controlled at the low level and is able

00:33:54 --> 00:33:59
to do so much more so I'll show you two

00:33:56 --> 00:34:01
f my favorite videos from YouTube here

00:33:58 --> 00:34:03
which motivate some of the research that

00:34:00 --> 00:34:04
we're doing the one on the left is a one

00:34:02 --> 00:34:06
and a half year old and the other ones a

00:34:03 --> 00:34:08
one year old so just watch this one and

00:34:05 --> 00:34:15
a half year old here doing a popular

00:34:07 --> 00:34:15
activity for many kids as a playing hmm

00:34:14 --> 00:34:22
you see video up there I'd okay there we

00:34:19 --> 00:34:25
go okay so he's he's on doing this

00:34:21 --> 00:34:28
tacking Cup activity alright he's

00:34:24 --> 00:34:30
tacking up cups to make a tall tower

00:34:27 --> 00:34:31
he's got a stack of three and what you

00:34:29 --> 00:34:33
can see for the first part of this video

00:34:30 --> 00:34:35
is it looks like he's trying to make a

00:34:32 --> 00:34:37
second stack and that he's trying to

00:34:34 --> 00:34:39
pick up at once basically he's trying to

00:34:36 --> 00:34:42
make a stack of two that'll go on the

00:34:38 --> 00:34:44
stack of three and you know he's trying

00:34:41 --> 00:34:48
to debug his plan because it's it got a

00:34:43 --> 00:34:49
little bit stuck here but and think

00:34:47 --> 00:34:51
about I mean again if you know anything

00:34:48 --> 00:34:52
about robots manipulating objects even

00:34:50 --> 00:34:54
just what he just did no robot can

00:34:51 --> 00:34:57
decide to do that and actually do it

00:34:53 --> 00:34:58
right at some point he's almost got it

00:34:56 --> 00:35:00
's a little bit tricky but at some

00:34:57 --> 00:35:03
point he's gonna get that stack of two

00:34:59 --> 00:35:04
he realizes he has to move that object

00:35:02 --> 00:35:06
out of the way look at what he just did

00:35:03 --> 00:35:07
move it out of the way use two hands to

00:35:05 --> 00:35:09
pick it up and now he's got a stack of

00:35:06 --> 00:35:10
two on a stack of three and suddenly you

00:35:08 --> 00:35:12
know subgoal completed he's now got a

00:35:09 --> 00:35:14
stack of five and he gives himself a

00:35:11 --> 00:35:16
hand because he know he knows he

00:35:13 --> 00:35:18
accomplished a keyway point along the

00:35:15 --> 00:35:20
way to his final goal that's a kind of

00:35:17 --> 00:35:22
early symbolic cognition right to

00:35:19 --> 00:35:24
understand that I'm trying to build a

00:35:21 --> 00:35:25
tall tower but a tower is made up of

00:35:23 --> 00:35:27
little towers it's you know it can end

00:35:24 --> 00:35:29
and you can take a tower and put it on

00:35:26 --> 00:35:29
top of another tower or stack a stack on

00:35:28 --> 00:35:31
us

00:35:28 --> 00:35:33
a can you have a bigger stack right so

00:35:30 --> 00:35:35
think about how he goes from bottom up

00:35:32 --> 00:35:36
erception to the objects of the physics

00:35:34 --> 00:35:39
needed to manipulate the objects to the

00:35:35 --> 00:35:41
ability to make even those early kinds

00:35:38 --> 00:35:42
of symbolic plans at some point he keeps

00:35:40 --> 00:35:45
doing this he puts another stack on

00:35:41 --> 00:35:48
there I'll just jump to the end

00:35:45 --> 00:35:51
oops sorry you missed it so he he gets

00:35:47 --> 00:35:53
really excited and he gives himself

00:35:50 --> 00:35:56
another big hand but falls over okay

00:35:52 --> 00:35:58
again Boston Dynamics now has robots

00:35:55 --> 00:36:01
that could pick themselves up after that

00:35:57 --> 00:36:02
's really impressive again but all

00:36:00 --> 00:36:03
the other stuff to get to that point we

00:36:01 --> 00:36:05
don't really know how to do in a robotic

00:36:02 --> 00:36:07
setting or think about this baby here

00:36:04 --> 00:36:09
this is a younger baby this is one of

00:36:06 --> 00:36:13
the Internet's very most popular videos

00:36:08 --> 00:36:15
because it features a baby and a cat and

00:36:12 --> 00:36:17
but the babies doing something

00:36:14 --> 00:36:19
interesting he's got the same cups but

00:36:16 --> 00:36:21
he's decided he's again decided to try a

00:36:18 --> 00:36:24
new thing so this think about creativity

00:36:20 --> 00:36:26
he's decided that his goal is to stack

00:36:23 --> 00:36:28
up cups on the back of a cat I guess

00:36:25 --> 00:36:30
he's asking how many cups can I fit on

00:36:27 --> 00:36:33
the back of a cat well three let's see

00:36:29 --> 00:36:36
can I fit more let's try another one

00:36:32 --> 00:36:38
okay well he can't fit more than three

00:36:35 --> 00:36:40
it turns out and then he then does it's

00:36:37 --> 00:36:42
not working so he changes his goal now

00:36:39 --> 00:36:43
his goal appears to be to get the cups

00:36:41 --> 00:36:45
on the other side of the cat now watch

00:36:42 --> 00:36:46
that part when he reaches back behind

00:36:44 --> 00:36:47
him there that's I'll just pause it

00:36:45 --> 00:36:49
here for a moment

00:36:46 --> 00:36:51
umm someone he just reached back there

00:36:48 --> 00:36:54
that's a particularly striking moment in

00:36:50 --> 00:36:56
the video it shows a very strong form of

00:36:53 --> 00:36:59
what we call in cognitive science object

00:36:55 --> 00:37:01
permanence okay that's the idea that you

00:36:58 --> 00:37:03
represent objects as these permanent

00:37:00 --> 00:37:05
enduring entities in the world even when

00:37:02 --> 00:37:06
you can't see them in this case he

00:37:04 --> 00:37:08
hadn't seen or touched that object

00:37:05 --> 00:37:09
behind him for like at least a minute

00:37:07 --> 00:37:11
right maybe much longer I don't know and

00:37:08 --> 00:37:13
yet he still knew it was there and he

00:37:10 --> 00:37:15
was able to incorporate it in his plan

00:37:12 --> 00:37:16
right there's a moment before that when

00:37:14 --> 00:37:17
he's about to reach for it but then he

00:37:15 --> 00:37:19
sees this other one right and it's only

00:37:16 --> 00:37:20
when he's now exhausted all the other

00:37:18 --> 00:37:21
objects here that he can see he's like

00:37:19 --> 00:37:24
okay now time to get this object and

00:37:21 --> 00:37:26
bring it into play right so think about

00:37:23 --> 00:37:28
what has to be going on in his brain for

00:37:25 --> 00:37:30
him to be able to do that right that's

00:37:27 --> 00:37:32
like the analog of you understanding

00:37:29 --> 00:37:34
what's behind you okay um it's not that

00:37:31 --> 00:37:35
hese things are impossible to capture

00:37:33 --> 00:37:37
machines far from it it's just that like

00:37:34 --> 00:37:39
training a deep neural network or any

00:37:36 --> 00:37:40
kind of pattern recognition system we

00:37:38 --> 00:37:42
don't think is going to do it but we

00:37:39 --> 00:37:42
think by reverse engineering how it

00:37:41 --> 00:37:44
works in the brain

00:37:41 --> 00:37:46
we might be able to do it I think we can

00:37:43 --> 00:37:48
do it okay it's not just humans that

00:37:45 --> 00:37:51
do this kind of activity here's a couple

00:37:47 --> 00:37:52
of again rather famous videos you can

00:37:50 --> 00:37:54
watch all of these on YouTube

00:37:51 --> 00:37:58
crows are famous object manipulators and

00:37:53 --> 00:38:01
tool users but also orangutangs other

00:37:57 --> 00:38:03
primates rodents we can watch if we just

00:38:00 --> 00:38:05
hey let me pause this one for a second

00:38:02 --> 00:38:07
if we watch this orangutan here he's got

00:38:04 --> 00:38:11
a bunch of big legos and over the course

00:38:06 --> 00:38:13
of this video he's building up a stack

00:38:10 --> 00:38:18
legos it's really quite impressive

00:38:12 --> 00:38:20
you're just jumping to the end there's

00:38:17 --> 00:38:22
actually some controversy out there of

00:38:19 --> 00:38:24
whether this video is a fake but the

00:38:21 --> 00:38:26
controversy isn't about you know it's

00:38:23 --> 00:38:28
not like whether it was I don't know

00:38:25 --> 00:38:30
dumb with computer animation some people

00:38:27 --> 00:38:32
think the video was actually filmed

00:38:29 --> 00:38:33
backwards that a human built up the

00:38:31 --> 00:38:35
stack and the orangutan just slowly

00:38:32 --> 00:38:36
disassembled it piece by piece and it

00:38:34 --> 00:38:38
urns out it's remarkably hard to tell

00:38:35 --> 00:38:39
whether it's played forward or backwards

00:38:37 --> 00:38:41
in time and people have argued over

00:38:38 --> 00:38:42
little details because you know it would

00:38:40 --> 00:38:44
be quite impressive if an orangutan

00:38:41 --> 00:38:46
actually was able to build up this

00:38:43 --> 00:38:47
really impressive stack of Legos but I

00:38:45 --> 00:38:49
would submit that it would be almost as

00:38:46 --> 00:38:51
impressive if he disassembled it think

00:38:48 --> 00:38:53
about the activity I mean if I wanted to

00:38:50 --> 00:38:54
disassemble that the easiest thing to do

00:38:52 --> 00:38:55
would just be to knock it over

00:38:53 --> 00:38:57
that's really all most robots could do

00:38:54 --> 00:38:59
but to piece by piece disassemble it

00:38:56 --> 00:39:01
even if it's played backwards like this

00:38:58 --> 00:39:04
that's still a really impressive act of

00:39:00 --> 00:39:06
symbolic planning on physical objects or

00:39:03 --> 00:39:08
here you've got this this famous Mouse

00:39:05 --> 00:39:12
this you can find on the internet under

00:39:07 --> 00:39:13
the mouse versus cracker video and what

00:39:11 --> 00:39:16
you'll see here over the course of this

00:39:12 --> 00:39:18
video is a mouse valiantly and mostly

00:39:15 --> 00:39:20
hopelessly struggling with a cracker

00:39:17 --> 00:39:21
that they're hoping to bring back to

00:39:19 --> 00:39:25
their nest I guess it's a very appealing

00:39:20 --> 00:39:27
big meal and at some point after just

00:39:24 --> 00:39:29
rying to get it over the over the wall

00:39:26 --> 00:39:31
at some point the mouse just gives up

00:39:28 --> 00:39:33
because it's just never gonna happen and

00:39:30 --> 00:39:36
he just goes away except that because

00:39:32 --> 00:39:38
ven Mouse's can dream or mice can dream

00:39:35 --> 00:39:41
some point he decides okay I'm just

00:39:37 --> 00:39:42
gonna come out for one more try and he

00:39:40 --> 00:39:44
tries one more time and this time

00:39:41 --> 00:39:46
valiantly gets it over yeah isn't that

00:39:43 --> 00:39:48
very impressive congratulations guys

00:39:45 --> 00:39:49
okay you don't have to clap form you can

00:39:47 --> 00:39:52
clap for me at the end or clap for

00:39:48 --> 00:39:53
whoever later okay but I want to applaud

00:39:51 --> 00:39:55
the mouse there every time I see that

00:39:52 --> 00:39:56
okay but again think what had to be

00:39:54 --> 00:39:58
going on in his brain

00:39:55 --> 00:40:00
able to do that all right it's a crazy

00:39:57 --> 00:40:03
thing and yet he formulated the goal and

00:39:59 --> 00:40:05
was able to achieve it I'll just show

00:40:02 --> 00:40:07
one more video that is really more about

00:40:04 --> 00:40:08
science these other ones are you know

00:40:06 --> 00:40:10
some of them actually were from

00:40:07 --> 00:40:12
scientific experiments but this is one

00:40:09 --> 00:40:14
that motivates a lot of the science that

00:40:11 --> 00:40:16
I do and it's to me it sets up kind of a

00:40:13 --> 00:40:19
grand cognitive science challenge for AI

00:40:15 --> 00:40:20
and robotics it's from an experiment

00:40:18 --> 00:40:22
with humans again eighteen month olds or

00:40:19 --> 00:40:23
one-and-a-half year old so the the kids

00:40:21 --> 00:40:25
in this experiment were the same age is

00:40:22 --> 00:40:27
the first baby I showed you the one who

00:40:24 --> 00:40:29
did the stacking and 18 months is really

00:40:26 --> 00:40:31
a very very good age to study if you're

00:40:28 --> 00:40:32
interested in intelligence for reasons

00:40:30 --> 00:40:35
we can talk about later if you're

00:40:31 --> 00:40:37
interested this is from a very famous

00:40:34 --> 00:40:38
experiment done by two psychologists

00:40:36 --> 00:40:41
Felix Warren akin and Michael Tomasello

00:40:37 --> 00:40:44
and it was studying the spontaneous

00:40:40 --> 00:40:45
helping behavior of young children it

00:40:43 --> 00:40:48
also contrasted humans and chimps and

00:40:44 --> 00:40:49
the punchline is that chips sometimes do

00:40:47 --> 00:40:51
things that are kind of like what this

00:40:48 --> 00:40:54
human did but not nearly as reliably or

00:40:50 --> 00:40:56
as flexibly okay so not nearly it is and

00:40:53 --> 00:40:59
I'll show you a particular kind of

00:40:55 --> 00:41:01
unusual situation where human kids had

00:40:58 --> 00:41:02
relatively little trouble figuring out

00:41:00 --> 00:41:04
kind of what to do or even whether they

00:41:01 --> 00:41:06
should do it whereas basically no chimp

00:41:03 --> 00:41:08
did what you're gonna see humans

00:41:05 --> 00:41:10
ometimes doing here so the experimenter

00:41:07 --> 00:41:13
in this movie I'll turn on the sound

00:41:09 --> 00:41:16
here if you can hear it the experimenter

00:41:12 --> 00:41:20
is the tall guy and the participant is

00:41:15 --> 00:41:23
the little kid in the corner there there

00:41:19 --> 00:41:24
's sound but no words right and at

00:41:22 --> 00:41:26
some point he stops and then the kid

00:41:23 --> 00:41:28
just does whatever they want to do so

00:41:25 --> 00:41:32
watch what he does he goes over he opens

00:41:27 --> 00:41:35
the cabinet looks inside then he steps

00:41:31 --> 00:41:37
back and he looks up at felix and then

00:41:34 --> 00:41:39
looks down okay and then the action is

00:41:36 --> 00:41:40
completed now well wonder I want you to

00:41:38 --> 00:41:42
watch it one more time and think about

00:41:39 --> 00:41:44
what's gotta be going inside the kid's

00:41:41 --> 00:41:46
head to understand this to understand

00:41:43 --> 00:41:47
like so it seems like what it looks like

00:41:45 --> 00:41:49
to us is the kid figured out that this

00:41:46 --> 00:41:51
guy needed help and helped him and the

00:41:48 --> 00:41:53
paper is full of many other situations

00:41:50 --> 00:41:55
like this this is just one OK but the

00:41:52 --> 00:41:57
key idea is that the situation is

00:41:54 --> 00:41:58
omewhat novel people have seen people

00:41:56 --> 00:42:01
holding books and opening cabinets but

00:41:57 --> 00:42:02
probably it's very rare to see this kind

00:42:00 --> 00:42:04
of situation exactly right it's

00:42:01 --> 00:42:05
different in some important details from

00:42:03 --> 00:42:06
what you might have seen before and

00:42:04 --> 00:42:08
there's other ones in there that are

00:42:05 --> 00:42:09
ally truly novel because they just

00:42:07 --> 00:42:12
made up a machine right there

00:42:08 --> 00:42:14
okay but somehow he has to understand

00:42:11 --> 00:42:15
causally from the way the guy's banging

00:42:13 --> 00:42:17
the books against the thing that it's

00:42:14 --> 00:42:19
sort it's sort of both a symbol but

00:42:16 --> 00:42:21
it's also somehow he's got to understand

00:42:18 --> 00:42:23
what he can do and what he can't do and

00:42:20 --> 00:42:25
then what the kid can do to help and

00:42:22 --> 00:42:30
I'll show this again but really just

00:42:24 --> 00:42:35
watch the main part I want you to see is

00:42:29 --> 00:42:38
I'll just sort of skip ahead so watch

00:42:34 --> 00:42:40
this part here let's say I'll just jump

00:42:37 --> 00:42:42
right when he watch right now he's about

00:42:39 --> 00:42:44
o look up he looks up and makes eye

00:42:41 --> 00:42:49
contact and then his eyes look down so

00:42:44 --> 00:42:51
again he looks up he looks up and then a

00:42:48 --> 00:42:54
saccade a sudden rapid eye movement down

00:42:50 --> 00:42:56
to his hands up down okay so that's

00:42:53 --> 00:42:59
again that's this brain OS in action

00:42:55 --> 00:43:02
right he's making one glance small

00:42:58 --> 00:43:04
glance at the big guy's eyes just to

00:43:01 --> 00:43:07
make eye contact to see to get a signal

00:43:03 --> 00:43:08
did I understand what you wanted and did

00:43:06 --> 00:43:11
you did you register that joint

00:43:07 --> 00:43:12
attention and then he makes a prediction

00:43:10 --> 00:43:14
about what the guy's gonna do so he

00:43:11 --> 00:43:15
looks right down he doesn't just like

00:43:13 --> 00:43:18
look around randomly he looks right down

00:43:14 --> 00:43:20
to the guy's hands to track the action

00:43:17 --> 00:43:21
that he expects to see happening if I

00:43:19 --> 00:43:23
did the right thing to help you then I

00:43:20 --> 00:43:25
expect you're gonna put the books there

00:43:22 --> 00:43:26
okay so you can see these things

00:43:24 --> 00:43:28
happening and we want to know what's

00:43:25 --> 00:43:30
going on inside the mind that guides all

00:43:27 --> 00:43:32
of that all right so that's the sort of

00:43:29 --> 00:43:34
big scientific agenda that we're working

00:43:31 --> 00:43:36
on over the next few years where we

00:43:33 --> 00:43:39
think some kind of human understanding

00:43:35 --> 00:43:41
of human intelligence in scientific

00:43:38 --> 00:43:43
terms could lead to all sorts of AI

00:43:40 --> 00:43:45
payoffs in particular suppose we could

00:43:42 --> 00:43:46
build a robot that could do what this

00:43:44 --> 00:43:48
kid and many other kids and these

00:43:45 --> 00:43:49
xperiments do just say help you out

00:43:47 --> 00:43:51
around the house without having to be

00:43:48 --> 00:43:53
programmed or even really instructed

00:43:50 --> 00:43:54
just to kind of get a sense oh yeah you

00:43:52 --> 00:43:57
need to have at that shirt let me help

00:43:53 --> 00:43:59
you out okay even 18 month olds will do

00:43:56 --> 00:44:00
that sometimes not very reliably or

00:43:58 --> 00:44:02
effectively sometimes they'll try to

00:43:59 --> 00:44:04
help and really do the opposite right

00:44:01 --> 00:44:07
but imagine if you could take the the

00:44:03 --> 00:44:10
flexible understanding of humans actions

00:44:06 --> 00:44:11
goals and so on and make those reliable

00:44:09 --> 00:44:14
ngineering technology that would be

00:44:10 --> 00:44:15
very useful and it would also be related

00:44:13 --> 00:44:18
to say machines that you can actually

00:44:14 --> 00:44:20
start to talk to and trust in some ways

00:44:17 --> 00:44:21
right that shared understanding so how

00:44:19 --> 00:44:22
are we gonna do this well let me spend

00:44:20 --> 00:44:24
the rest of the time

00:44:21 --> 00:44:26
talking about how we try to do this

00:44:23 --> 00:44:28
right some of the some of the technology

00:44:25 --> 00:44:30
that we're building both in our group

00:44:27 --> 00:44:32
and more broadly to try to make these

00:44:29 --> 00:44:35
kinds of architectures real and I'll

00:44:31 --> 00:44:37
talk about two or three technical ideas

00:44:34 --> 00:44:39
again not in any detail all right

00:44:36 --> 00:44:43
um what is the idea of a probabilistic

00:44:38 --> 00:44:46
program so this is a kind of a you think

00:44:42 --> 00:44:48
of it as a computational abstraction

00:44:45 --> 00:44:49
that we can use to capture the

00:44:47 --> 00:44:51
common-sense knowledge of this core

00:44:48 --> 00:44:53
cognition so when I say we have an

00:44:50 --> 00:44:55
intuitive understanding of physical

00:44:52 --> 00:44:57
objects in people's goals how do I build

00:44:54 --> 00:44:59
a model of that model you have in the

00:44:56 --> 00:45:01
ad probabilistic programs a little bit

00:44:58 --> 00:45:03
more technically our one way to

00:45:00 --> 00:45:05
understand them is as a generalization

00:45:02 --> 00:45:06
of Bayesian networks or other kinds of

00:45:04 --> 00:45:09
directed graphical models if you know

00:45:05 --> 00:45:12
those okay but where instead of defining

00:45:08 --> 00:45:16
a probability model on a graph you

00:45:11 --> 00:45:19
define it on a program and thereby have

00:45:15 --> 00:45:20
access to a much more expressive toolkit

00:45:18 --> 00:45:22
of knowledge representation so data

00:45:19 --> 00:45:24
structures other kinds of algorithmic

00:45:21 --> 00:45:26
tools for representing knowledge okay

00:45:23 --> 00:45:28
but you still have access to the ability

00:45:25 --> 00:45:30
to do probabilistic inference like in a

00:45:27 --> 00:45:33
graphical model but also causal

00:45:30 --> 00:45:34
inference in a directed graphical model

00:45:32 --> 00:45:36
so for those of you who know about

00:45:33 --> 00:45:37
graphical models that might make some

00:45:35 --> 00:45:39
sense to you but just more broadly what

00:45:36 --> 00:45:41
his is think of this as as a toolkit

00:45:38 --> 00:45:44
hat allows us to combine several of the

00:45:40 --> 00:45:45
best ideas not just of the recent deep

00:45:43 --> 00:45:47
learning era but over if you look back

00:45:44 --> 00:45:49
over the whole scope of AI and as well

00:45:46 --> 00:45:52
as cognitive science I think there's

00:45:48 --> 00:45:53
three or four ideas there and more but

00:45:51 --> 00:45:55
definitely like three ideas we could

00:45:52 --> 00:45:57
really put up there that have proven

00:45:54 --> 00:45:59
their worth and have have had have risen

00:45:56 --> 00:46:01
and fallen in terms of each of these had

00:45:58 --> 00:46:03
ideas when the mainstream of the field

00:46:00 --> 00:46:04
thought this was totally the way to go

00:46:02 --> 00:46:07
and every other idea was was obviously a

00:46:03 --> 00:46:09
waste of time and also had its time when

00:46:06 --> 00:46:11
many people thought it was a waste of

00:46:08 --> 00:46:13
time okay and these three big ideas I

00:46:10 --> 00:46:15
would say are first of all the idea of

00:46:12 --> 00:46:17
symbolic representation or symbolic

00:46:14 --> 00:46:19
languages for knowledge representation

00:46:16 --> 00:46:21
probabilistic inference in generative

00:46:18 --> 00:46:23
models to capture uncertainty ambiguity

00:46:20 --> 00:46:25
learning from sparse data and in their

00:46:22 --> 00:46:28
hierarchical setting learning to learn

00:46:24 --> 00:46:30
right and then of course the recent

00:46:27 --> 00:46:32
developments with neural inspired

00:46:29 --> 00:46:34
architectures for pattern recognition

00:46:31 --> 00:46:36
okay each of these things each of these

00:46:33 --> 00:46:38
ideas symbolic languages

00:46:35 --> 00:46:40
probabilistic inference and neural

00:46:37 --> 00:46:41
networks has some distinctive strengths

00:46:39 --> 00:46:43
that are real weak points of the other

00:46:40 --> 00:46:45
approaches right so to take one example

00:46:42 --> 00:46:47
but I haven't really talked about here

00:46:44 --> 00:46:49
people in the but I but you but you

00:46:46 --> 00:46:51
mentioned as an outstanding challenge

00:46:48 --> 00:46:53
for neural networks transfer learning

00:46:50 --> 00:46:54
we're learning to take knowledge across

00:46:52 --> 00:46:56
a number of previous tasks to transfer

00:46:53 --> 00:46:57
to others this is a real challenge and

00:46:55 --> 00:47:00
has always been a challenge in a neural

00:46:56 --> 00:47:02
net ok but is something that's addressed

00:46:59 --> 00:47:04
very naturally and very scalable in for

00:47:01 --> 00:47:05
example a hierarchical Bayesian model

00:47:03 --> 00:47:07
and if you look at some of the recent

00:47:04 --> 00:47:09
attempts really interesting attempts

00:47:06 --> 00:47:10
within the deep learning world to try to

00:47:08 --> 00:47:12
get kinds of transfer learning and

00:47:09 --> 00:47:15
learning to learn they're really cool ok

00:47:11 --> 00:47:16
but many of them are in some ways kind

00:47:14 --> 00:47:19
of reinventing within a neural network

00:47:15 --> 00:47:21
paradigm ideas that people you know

00:47:18 --> 00:47:23
maybe just 10 or 15 years ago developed

00:47:20 --> 00:47:25
in very sophisticated ways in let's say

00:47:22 --> 00:47:27
hierarchical Bayesian models ok and a

00:47:24 --> 00:47:29
lot of attempts to get sort of symbolic

00:47:26 --> 00:47:31
algorithm like behavior in neural

00:47:28 --> 00:47:33
networks again are really you know

00:47:30 --> 00:47:34
they're very small steps towards

00:47:32 --> 00:47:37
omething which is a very mature

00:47:33 --> 00:47:39
technology in computer systems and

00:47:36 --> 00:47:41
programming languages probabilistic

00:47:38 --> 00:47:43
programs I'll just sort of advertise

00:47:40 --> 00:47:45
mostly are a way to combine the

00:47:42 --> 00:47:47
strengths of all of these approaches to

00:47:44 --> 00:47:49
have knowledge representations which are

00:47:46 --> 00:47:50
as expressive as anything that anybody

00:47:48 --> 00:47:52
ever did in the symbolic paradigm that

00:47:49 --> 00:47:55
are as flexible at dealing with

00:47:51 --> 00:47:56
uncertainty and sparse data as anything

00:47:54 --> 00:47:58
in the probabilistic paradigm but that

00:47:55 --> 00:48:01
also can support pattern recognition

00:47:57 --> 00:48:03
tools to be able to for example to do

00:48:00 --> 00:48:05
very fast efficient inference in very

00:48:02 --> 00:48:07
complex scenarios and there's a number

00:48:04 --> 00:48:08
of probably that's that that's the kind

00:48:06 --> 00:48:11
of conceptual framework there's a number

00:48:07 --> 00:48:12
of actually implemented tools I'm point

00:48:10 --> 00:48:14
wo here on the slide a number of

00:48:11 --> 00:48:15
probablistic programming languages which

00:48:13 --> 00:48:17
you can go explore

00:48:14 --> 00:48:18
for example there's one that was

00:48:16 --> 00:48:20
developed in our group a few years ago

00:48:17 --> 00:48:22
almost 10 years ago now called church

00:48:19 --> 00:48:23
which was the antecedent of some of

00:48:21 --> 00:48:25
these other languages built on a

00:48:22 --> 00:48:26
functional programming course a church

00:48:24 --> 00:48:28
is a probablistic programming language

00:48:25 --> 00:48:31
built on the lambda calculus or really

00:48:27 --> 00:48:34
in Lisp basically but there are many

00:48:30 --> 00:48:35
other more modern tools especially if

00:48:33 --> 00:48:38
you are interested in neural networks

00:48:34 --> 00:48:40
there are tools like for example pyro or

00:48:37 --> 00:48:43
prob torch or Bayes flow that try to

00:48:39 --> 00:48:45
combine all these ideas in a or for

00:48:42 --> 00:48:46
example Jen here which is a project of

00:48:44 --> 00:48:49
the Koch men's singles probably the

00:48:45 --> 00:48:50
computing group these are all things

00:48:48 --> 00:48:51
which are

00:48:49 --> 00:48:54
just in the very beginning stages very

00:48:50 --> 00:48:56
alpha but you can find out more

00:48:53 --> 00:48:57
about them online or by writing to their

00:48:55 --> 00:49:00
creators and I think this is a this is a

00:48:57 --> 00:49:01
very exciting place where the

00:48:59 --> 00:49:05
convergence of a number of different AI

00:49:00 --> 00:49:06
tools are happening and when and this

00:49:04 --> 00:49:08
will be absolutely necessary for making

00:49:05 --> 00:49:10
the kind of architecture that I'm

00:49:07 --> 00:49:12
talking about work another key idea

00:49:09 --> 00:49:15
which we've been building on in our lab

00:49:11 --> 00:49:17
and I think again many people are using

00:49:14 --> 00:49:18
some version of this idea but maybe a

00:49:16 --> 00:49:21
little bit different from the way we're

00:49:17 --> 00:49:23
doing it is what what version of this

00:49:20 --> 00:49:25
idea that I'd like to talk about is what

00:49:22 --> 00:49:27
I call the game engine in the head so

00:49:24 --> 00:49:29
this is the idea that it's really what

00:49:26 --> 00:49:31
he programs are about when I talk about

00:49:28 --> 00:49:32
problems tick programs I haven't said

00:49:30 --> 00:49:33
anything about what kind of programs

00:49:31 --> 00:49:35
we're using we're just basically these

00:49:33 --> 00:49:37
probablistic programming languages at

00:49:34 --> 00:49:39
heir best and Church the language that

00:49:36 --> 00:49:41
was developed by Noah Goodman and

00:49:38 --> 00:49:43
Vikash and others and Dan Roy and our

00:49:40 --> 00:49:45
group some 10 years ago was intended to

00:49:42 --> 00:49:47
be a turing-complete probabilistic

00:49:44 --> 00:49:49
programming language so any probability

00:49:46 --> 00:49:51
model that was computable or for whose

00:49:48 --> 00:49:53
inferences conditional inferences are

00:49:50 --> 00:49:55
computable you could represent in these

00:49:52 --> 00:49:57
languages but that that leaves

00:49:54 --> 00:49:58
completely open what what I'm actually

00:49:56 --> 00:50:01
gonna what what kind of proto I'm gonna

00:49:57 --> 00:50:03
write to model the world and I've been

00:50:00 --> 00:50:05
very inspired in the last few years by

00:50:02 --> 00:50:08
thinking about the kinds of programs

00:50:04 --> 00:50:09
that are in modern video game engines so

00:50:07 --> 00:50:11
again I'm probably most of you are

00:50:08 --> 00:50:12
familiar with these but if you're and

00:50:10 --> 00:50:13
increasingly they're playing a role in

00:50:11 --> 00:50:15
all sorts of ways an AI but these are

00:50:12 --> 00:50:17
tools that were developed by the video

00:50:14 --> 00:50:21
game industry to allow a game designer

00:50:16 --> 00:50:22
to make a new game with without having

00:50:20 --> 00:50:24
to do most of in some sense many must

00:50:21 --> 00:50:26
have the hard technical work bison from

00:50:23 --> 00:50:29
scratch but rather to focus on the

00:50:25 --> 00:50:30
characters the world the story okay the

00:50:28 --> 00:50:33
things that are more interesting for

00:50:29 --> 00:50:36
designing a novel game in particular we

00:50:32 --> 00:50:38
if we want a player to explore some so

00:50:35 --> 00:50:39
new three-dimensional world but to have

00:50:37 --> 00:50:42
them be able to interact with the world

00:50:38 --> 00:50:44
in real time and to render nice looking

00:50:41 --> 00:50:46
raphics in in real time in an

00:50:43 --> 00:50:47
interactive way as the player moves

00:50:45 --> 00:50:49
around and explores the world or if you

00:50:46 --> 00:50:50
want to populate the world with

00:50:48 --> 00:50:53
non-player characters that will behave

00:50:49 --> 00:50:54
in a even vaguely intelligent way okay

00:50:52 --> 00:50:56
game engines give you tools for doing

00:50:53 --> 00:50:58
all of this without having to write all

00:50:55 --> 00:51:00
of graphics from scratch or all of

00:50:57 --> 00:51:02
physics the rules of physics from

00:50:59 --> 00:51:03
scratch so what are called game physics

00:51:01 --> 00:51:05
engines

00:51:02 --> 00:51:07
and in some sense are a set of

00:51:04 --> 00:51:09
principles but also hacks from Newtonian

00:51:06 --> 00:51:11
mechanics and other areas of physics

00:51:08 --> 00:51:13
that allow you to simulate plausible

00:51:10 --> 00:51:16
looking physical interactions in very

00:51:12 --> 00:51:18
complex world very approximately but

00:51:15 --> 00:51:19
very fast there's also what's called

00:51:17 --> 00:51:22
game AI which are basically very simple

00:51:18 --> 00:51:24
planning models so let's say I want to

00:51:21 --> 00:51:25
have an AI in the game that is like

00:51:23 --> 00:51:27
unguarded that gardens of base and a

00:51:24 --> 00:51:29
player is gonna attack the space so back

00:51:26 --> 00:51:31
in the old Atari days like when I was a

00:51:28 --> 00:51:32
kid you know the guards would just be

00:51:30 --> 00:51:34
like random things that would fire

00:51:31 --> 00:51:36
missiles kind of randomly in random

00:51:33 --> 00:51:37
directions at random times right but

00:51:35 --> 00:51:39
let's say you want a guard to be a

00:51:36 --> 00:51:41
little intelligent so to actually look

00:51:38 --> 00:51:42
around him oh and I see the player and

00:51:40 --> 00:51:44
then to actually start shooting at you

00:51:41 --> 00:51:46
and to even maybe pursue you so that

00:51:43 --> 00:51:48
requires putting a little AI in the game

00:51:45 --> 00:51:51
and you do that by having basically

00:51:47 --> 00:51:53
simple agent models in the game so what

00:51:50 --> 00:51:54
we think and some of you might think

00:51:52 --> 00:51:56
this is crazy and some of you might

00:51:53 --> 00:51:58
hink this is very natural idea I get

00:51:55 --> 00:52:01
both kinds of reactions what we think is

00:51:57 --> 00:52:03
that these tools of you know past

00:52:00 --> 00:52:04
approximate renderers physics engines

00:52:02 --> 00:52:06
and sort of very simple kinds of AI

00:52:03 --> 00:52:09
planning are an interesting first

00:52:05 --> 00:52:10
approximation to the kinds of

00:52:08 --> 00:52:12
common-sense knowledge representations

00:52:09 --> 00:52:14
that evolution has built into our brains

00:52:11 --> 00:52:17
o when we talk about the cognitive core

00:52:13 --> 00:52:19
or how do babies start what's what you

00:52:16 --> 00:52:22
know ways in which a baby's brain isn't

00:52:18 --> 00:52:24
a blank slate one interesting idea is

00:52:21 --> 00:52:26
that it starts with something like these

00:52:23 --> 00:52:28
tools and then wrapped inside a

00:52:25 --> 00:52:29
framework for probabilistic inference

00:52:27 --> 00:52:31
that's what we mean by promising

00:52:28 --> 00:52:33
programs that can support many

00:52:30 --> 00:52:35
activities of common sense perception

00:52:32 --> 00:52:37
and thinking so I'll just give you one

00:52:34 --> 00:52:40
xample what we call this intuitive

00:52:36 --> 00:52:41
physics engine okay so this is work that

00:52:39 --> 00:52:43
we did in our groups that Pete Battaglia

00:52:40 --> 00:52:46
nd Jess Hamrick did started this work

00:52:42 --> 00:52:49
about five years ago now

00:52:45 --> 00:52:51
here we showed people you know in some

00:52:48 --> 00:52:52
sense and this is this is also an

00:52:50 --> 00:52:53
illustration of a kind of experiment

00:52:51 --> 00:52:55
hat you might do what you might keep

00:52:52 --> 00:52:57
talking about science like I'll show you

00:52:54 --> 00:52:59
now a couple of experiments right so we

00:52:56 --> 00:53:00
would show people simple physical scenes

00:52:58 --> 00:53:02
like these blocks world scenes and ask

00:52:59 --> 00:53:04
them to make a number of judgments and

00:53:01 --> 00:53:06
the model we built does it basically a

00:53:03 --> 00:53:09
little bit of probabilistic inference in

00:53:05 --> 00:53:11
a game style physics engine it perceives

00:53:08 --> 00:53:12
the physical state and imagines a few

00:53:10 --> 00:53:14
different possible ways the world could

00:53:11 --> 00:53:16
go over the next one or two seconds to

00:53:13 --> 00:53:17
answer questions like will the stack of

00:53:15 --> 00:53:19
blocks fall

00:53:16 --> 00:53:21
or if they fall how far will they fall

00:53:18 --> 00:53:23
or which way will they fall or what

00:53:20 --> 00:53:25
would happen if say one of the colored

00:53:22 --> 00:53:27
one color of blocks are one material

00:53:24 --> 00:53:28
ike the green stuff is ten times

00:53:26 --> 00:53:30
heavier than the gray stuff or vice

00:53:27 --> 00:53:32
versa how will that change the direction

00:53:29 --> 00:53:34
of fall or look at those red and yellow

00:53:31 --> 00:53:36
stack blocks some of which look like

00:53:33 --> 00:53:39
they should be falling but aren't so why

00:53:35 --> 00:53:41
can you infer from the fact that they're

00:53:38 --> 00:53:43
not fall in that one color block is much

00:53:40 --> 00:53:46
eavier than the other let me show you a

00:53:42 --> 00:53:49
sort of a slightly weird task it's in a

00:53:45 --> 00:53:51
behavioral experiment sometimes we we do

00:53:48 --> 00:53:53
weird things so that we can test ways in

00:53:50 --> 00:53:55
which you use your knowledge that you

00:53:52 --> 00:53:57
didn't just you know learn from pattern

00:53:54 --> 00:53:59
recognition but use it to do new kinds

00:53:56 --> 00:54:01
of tasks that you'd never seen before so

00:53:58 --> 00:54:03
here's a task which you know many of you

00:54:00 --> 00:54:04
have maybe seen me talk about these

00:54:02 --> 00:54:05
things so you might have seen this task

00:54:03 --> 00:54:07
but probably only if you saw me give a

00:54:04 --> 00:54:09
talk around here before we call this the

00:54:06 --> 00:54:12
red yellow task and again we'll make

00:54:08 --> 00:54:14
this one interactive so imagine that the

00:54:11 --> 00:54:16
blocks on the table are knocked hard

00:54:13 --> 00:54:18
enough to bump the tables bumped hard

00:54:15 --> 00:54:20
enough to knock some of the blocks onto

00:54:17 --> 00:54:21
the floor so you tell me is it more

00:54:19 --> 00:54:24
likely to be red blocks or yellow blocks

00:54:20 --> 00:54:29
what do you say red okay good

00:54:23 --> 00:54:41
how about here yellow good how about

00:54:28 --> 00:54:44
here uh-huh here here okay here here

00:54:41 --> 00:54:45
okay so

00:54:43 --> 00:54:47
you just experience for yourself what

00:54:44 --> 00:54:48
it's like to be an objective one of

00:54:46 --> 00:54:50
these experience we just did the

00:54:47 --> 00:54:52
xperiment here the data is all captured

00:54:49 --> 00:54:55
on video sort of right okay you could

00:54:51 --> 00:54:56
see that sometimes people were very

00:54:54 --> 00:54:58
quick other times people were slower

00:54:55 --> 00:54:59
sometimes there was a lot of consensus

00:54:57 --> 00:55:01
ometimes there was a little bit less

00:54:58 --> 00:55:02
consensus right

00:55:00 --> 00:55:04
hat reflects uncertainty so again

00:55:01 --> 00:55:07
there's a long history of studying this

00:55:03 --> 00:55:09
cientifically that you know you could

00:55:06 --> 00:55:10
but you can see something you can see

00:55:08 --> 00:55:13
the probabilistic inference at work

00:55:09 --> 00:55:15
probabilistic inference over what well I

00:55:12 --> 00:55:17
would say one way to describe it is over

00:55:14 --> 00:55:19
one or a few short low precision

00:55:16 --> 00:55:21
simulations of the physics of these

00:55:18 --> 00:55:24
scenes so here is what I mean by this

00:55:20 --> 00:55:25
I'm gonna show you a video of a game

00:55:23 --> 00:55:27
ngine reconstruction of one of these

00:55:24 --> 00:55:30
scenes that simulates a small bump so

00:55:26 --> 00:55:32
here's a small bubble here's the same

00:55:29 --> 00:55:34
scene with a big bump okay now notice

00:55:31 --> 00:55:36
that at the micro level different things

00:55:33 --> 00:55:38
happen but at the cognitive or macro

00:55:35 --> 00:55:39
level that matters for common sense

00:55:37 --> 00:55:41
reasoning the same thing happened namely

00:55:38 --> 00:55:43
all the yellow blocks went over onto one

00:55:40 --> 00:55:45
side of the table and few or none of the

00:55:42 --> 00:55:46
red blocks did so it didn't matter reach

00:55:44 --> 00:55:48
of those simulations you ran in your

00:55:45 --> 00:55:49
head you'd get the same answer in this

00:55:47 --> 00:55:52
case right this is one that's very easy

00:55:48 --> 00:55:53
and high confidence and quick also you

00:55:51 --> 00:55:55
didn't have to run the simulation for

00:55:52 --> 00:55:56
very long you only have to run it for a

00:55:54 --> 00:55:58
few time steps like that to see what's

00:55:55 --> 00:56:00
gonna happen or similarly here you only

00:55:57 --> 00:56:01
have to run it for a few time steps okay

00:55:59 --> 00:56:03
and it doesn't have to be even very

00:56:00 --> 00:56:05
accurate even a fair amount of

00:56:02 --> 00:56:06
imprecision will give you basically the

00:56:04 --> 00:56:08
same answer at the level that matters

00:56:05 --> 00:56:10
for common sense so that's the kind of

00:56:07 --> 00:56:12
thing our model does it runs a few low

00:56:09 --> 00:56:14
precision simulations for a few time

00:56:11 --> 00:56:15
steps but if you take the average of

00:56:13 --> 00:56:17
what happens there and you compare that

00:56:14 --> 00:56:18
with people's judgments you get results

00:56:16 --> 00:56:21
like what I show you here the

00:56:17 --> 00:56:22
scatterplot shows on the y-axis the

00:56:20 --> 00:56:24
average judgments of people on the

00:56:21 --> 00:56:25
x-axis the average judgments of this

00:56:23 --> 00:56:27
model and it does a pretty good job it's

00:56:24 --> 00:56:29
not perfect but the model basically

00:56:26 --> 00:56:31
captures people's graded sense of what's

00:56:28 --> 00:56:35
going on in this scene and many of these

00:56:30 --> 00:56:36
others okay and it doesn't do it with

00:56:34 --> 00:56:37
any learning but I'll come back to that

00:56:35 --> 00:56:39
in a second it just does it by

00:56:36 --> 00:56:42
probabilistic reasoning over a game

00:56:38 --> 00:56:44
physics simulation now we can use and we

00:56:41 --> 00:56:46
have used the same kind of technology to

00:56:43 --> 00:56:49
capture in very simple forms really just

00:56:45 --> 00:56:50
proofs of concept at this point the kind

00:56:48 --> 00:56:51
of common-sense physical scene

00:56:49 --> 00:56:53
understanding in child in a child

00:56:50 --> 00:56:56
playing with blocks or other objects or

00:56:52 --> 00:56:57
in what might go on in a young child

00:56:55 --> 00:56:58
understanding of other people's actions

00:56:56 --> 00:56:59
what we

00:56:57 --> 00:57:01
called the intuitive psychology engine

00:56:58 --> 00:57:03
where now the probabilistic programs are

00:57:00 --> 00:57:05
defined over these kind of very simple

00:57:02 --> 00:57:07
planning and perception programs and I

00:57:04 --> 00:57:09
won't go into any details I'll just

00:57:06 --> 00:57:10
point to a couple of papers that my

00:57:08 --> 00:57:12
group played a very small role in but we

00:57:09 --> 00:57:14
provided some models which together with

00:57:11 --> 00:57:16
some infant researchers people working

00:57:13 --> 00:57:18
on both of these are experiments that

00:57:15 --> 00:57:20
were done with 10 or 12 month

00:57:17 --> 00:57:22
infants so younger than even some of the

00:57:19 --> 00:57:24
babies I showed you before but basically

00:57:21 --> 00:57:27
like that youngest baby the one with the

00:57:23 --> 00:57:29
cat here's an example of showing simple

00:57:26 --> 00:57:32
physical scenes these are moving objects

00:57:28 --> 00:57:34
to 12 month olds where they saw a few

00:57:31 --> 00:57:36
objects bouncing around inside a gumball

00:57:33 --> 00:57:38
machine and after some point in time the

00:57:35 --> 00:57:39
scene gets occluded you'll see the scene

00:57:37 --> 00:57:41
is occluded and then after another

00:57:38 --> 00:57:43
period of time one of the objects will

00:57:40 --> 00:57:45
appear at the bottom and the question is

00:57:42 --> 00:57:47
that the object you expected to see

00:57:44 --> 00:57:49
or not is its expected or surprising the

00:57:46 --> 00:57:51
standard way you study what infants know

00:57:48 --> 00:57:53
is by is by what's called looking time

00:57:50 --> 00:57:54
thods just like an adult if I show you

00:57:52 --> 00:57:56
something that's surprising you might

00:57:53 --> 00:57:59
look longer okay if you're bored you'll

00:57:55 --> 00:58:01
ook away all right so you can do that

00:57:58 --> 00:58:03
same kind of thing with infants and by

00:58:00 --> 00:58:05
measuring how long they look at a scene

00:58:02 --> 00:58:07
you can measure whether you've shown

00:58:04 --> 00:58:07
them something surprising or not all

00:58:06 --> 00:58:08
right

00:58:06 --> 00:58:11
people have there are literally hundreds

00:58:07 --> 00:58:13
of studies if not more using looking

00:58:10 --> 00:58:15
time measures to study what infants know

00:58:12 --> 00:58:17
but only with this paper that we

00:58:14 --> 00:58:19
published a few years ago did we have a

00:58:16 --> 00:58:22
quantitative model we're able to show a

00:58:18 --> 00:58:23
relation between inverse probability in

00:58:21 --> 00:58:25
this case and surprise so things which

00:58:22 --> 00:58:27
were objectively lower probability under

00:58:24 --> 00:58:28
one of these probabilistic physics

00:58:26 --> 00:58:31
imulations across a number of different

00:58:27 --> 00:58:32
manipulations of how fast the objects

00:58:30 --> 00:58:34
were where they were when the scene was

00:58:31 --> 00:58:35
occluded how long the delay was various

00:58:33 --> 00:58:37
physically relevant variables how many

00:58:34 --> 00:58:40
objects there were one type or another

00:58:36 --> 00:58:42
infants expectations connected with this

00:58:39 --> 00:58:44
model or another paper that we published

00:58:41 --> 00:58:46
that one was was done that the

00:58:43 --> 00:58:48
xperiments that were done by era note

00:58:45 --> 00:58:50
ggless and Luca bananas lab here is a

00:58:47 --> 00:58:52
study that was done just recently by

00:58:49 --> 00:58:54
sherry Lu inless spell keys lab at there

00:58:51 --> 00:58:56
at Harvard but they're part they're

00:58:53 --> 00:58:58
partners with us and CBMM which was

00:58:55 --> 00:58:59
about infants understanding of goals so

00:58:57 --> 00:59:01
this is more like again understanding of

00:58:58 --> 00:59:02
agents and intuitive psychology

00:59:00 --> 00:59:06
we're in again in very simple cartoon

00:59:01 --> 00:59:07
scenes you show an infant an agent that

00:59:05 --> 00:59:09
seems to be doing something like an

00:59:06 --> 00:59:11
imated cartoon character but it jumps

00:59:08 --> 00:59:13
over a wall or

00:59:10 --> 00:59:16
olls up a hill or it jumps over a gap

00:59:12 --> 00:59:17
and the question is basically how much

00:59:15 --> 00:59:19
does the agent want the goal that it

00:59:16 --> 00:59:21
seems to be trying to achieve and what

00:59:18 --> 00:59:23
his study showed okay and the models

00:59:20 --> 00:59:25
here we're done by Tomer omen was that

00:59:22 --> 00:59:28
infants appeared to be sensitive to the

00:59:24 --> 00:59:30
physical work done by the agent the more

00:59:27 --> 00:59:32
work the agent did in a sense of the

00:59:29 --> 00:59:36
integral of force applied over a path

00:59:31 --> 00:59:38
e more the infant's thought the agent

00:59:35 --> 00:59:40
wanted the goal we think of this as

00:59:37 --> 00:59:42
representing what we've sometimes called

00:59:39 --> 00:59:45
the naive utility calculus so the idea

00:59:41 --> 00:59:47
that there's a basic calculus of cost

00:59:44 --> 00:59:49
and benefit you know we take actions

00:59:46 --> 00:59:51
which are a little bit costly to achieve

00:59:48 --> 00:59:53
goal states which give us some reward

00:59:50 --> 00:59:55
that's the most basic way the oldest way

00:59:52 --> 00:59:56
to think about rational intentional

00:59:54 --> 00:59:57
action and it seems that even

00:59:55 --> 00:59:59
ten-month-old

00:59:56 --> 01:00:00
understand some version of that where

00:59:58 --> 01:00:01
the cost can be measured in physical

00:59:59 --> 01:00:03
terms

01:00:00 --> 01:00:06
okay I see I'm running a little bit

01:00:02 --> 01:00:07
behind on time and and I wanted to leave

01:00:05 --> 01:00:09
some time for discussion so I'll I'll

01:00:06 --> 01:00:10
just go very quickly through a couple of

01:00:08 --> 01:00:12
other things and and Lee and happy to

01:00:09 --> 01:00:14
stay around at the end for discussion

01:00:11 --> 01:00:16
okay

01:00:13 --> 01:00:18
the what I showed you here was the

01:00:15 --> 01:00:20
science where does the engineering go so

01:00:17 --> 01:00:23
ne way one thing you can do with this

01:00:19 --> 01:00:25
say build a machine system that can

01:00:22 --> 01:00:27
look not a little animated cartoon like

01:00:24 --> 01:00:28
these baby experiments but a real person

01:00:26 --> 01:00:30
doing something and again combine

01:00:27 --> 01:00:33
physical COFF and constraints of actions

01:00:29 --> 01:00:35
with some understanding of the agents

01:00:32 --> 01:00:38
utilities that's the math of planning to

01:00:34 --> 01:00:40
figure out what they want it so look in

01:00:37 --> 01:00:43
this scene here and see if you can judge

01:00:39 --> 01:00:45
which object that the woman is reaching

01:00:42 --> 01:00:47
for so you can see there's there's a

01:00:44 --> 01:00:49
grid of four by four objects there's

01:00:46 --> 01:00:50
ixteen objects here and she's gonna be

01:00:48 --> 01:00:52
reaching for one of them raise it's

01:00:49 --> 01:00:53
gonna play in slow motion but raise your

01:00:51 --> 01:00:55
hand when you know which one she's

01:00:52 --> 01:00:56
reaching for ok so just watch and raise

01:00:54 --> 01:01:02
your hand when you know which one she

01:00:55 --> 01:01:04
wants okay so most of

01:01:01 --> 01:01:05
they're up by now alright and notice I

01:01:03 --> 01:01:07
was looking at your hands not here but

01:01:04 --> 01:01:09
went but what happened is most of the

01:01:06 --> 01:01:12
hands were up at the about the time when

01:01:08 --> 01:01:12
that gray or the one that - line shot up

01:01:11 --> 01:01:15
okay

01:01:11 --> 01:01:17
that's not human data you provided the

01:01:14 --> 01:01:19
data this is our model so our model is

01:01:16 --> 01:01:21
predicting more or less when you're able

01:01:18 --> 01:01:22
to say what her goal was okay it's well

01:01:20 --> 01:01:24
before she actually touched the object

01:01:21 --> 01:01:27
how does the model work again I'll skip

01:01:23 --> 01:01:28
the details but it does the same kind of

01:01:26 --> 01:01:31
thing that that our models of those

01:01:27 --> 01:01:32
infants did namely it but in this case

01:01:30 --> 01:01:34
it does it with a full body model from

01:01:31 --> 01:01:36
robotics so we use what's called the mu

01:01:33 --> 01:01:39
Joko physics engine which is a standard

01:01:35 --> 01:01:40
tool in robotics for planning physically

01:01:38 --> 01:01:43
efficient reaches of say a humanoid

01:01:39 --> 01:01:46
robot and we say we can give this

01:01:42 --> 01:01:47
planner program a goal object as input

01:01:45 --> 01:01:49
we can give it each of the possible goal

01:01:46 --> 01:01:51
objects as input and say plan the most

01:01:48 --> 01:01:52
physically efficient action so the one

01:01:50 --> 01:01:54
that uses like the least energy to get

01:01:51 --> 01:01:55
o that object and then we can do a

01:01:53 --> 01:01:57
Bayesian inference this is the

01:01:54 --> 01:02:00
probabilistic inference part the program

01:01:56 --> 01:02:02
is them is the MU Joker planner okay but

01:01:59 --> 01:02:04
hen we can say I want to do Bayesian

01:02:01 --> 01:02:06
inference to work backwards from what I

01:02:03 --> 01:02:08
observed which was the action to the

01:02:05 --> 01:02:09
input to that program what goal was

01:02:07 --> 01:02:12
provided as input to the planner and

01:02:08 --> 01:02:14
here you can see the full array of four

01:02:11 --> 01:02:15
by four possible inputs and those bars

01:02:13 --> 01:02:17
that are moving up and down that's the

01:02:14 --> 01:02:19
Bayesian posterior probability of how

01:02:16 --> 01:02:22
likely each of those was to be the goal

01:02:18 --> 01:02:23
and what you can see is it converges on

01:02:21 --> 01:02:25
the right answer at least well it turns

01:02:22 --> 01:02:26
out to be the ground truth right answer

01:02:24 --> 01:02:28
but it's also the right answer according

01:02:25 --> 01:02:31
to what people think with about the same

01:02:27 --> 01:02:33
kind of data that people took now you

01:02:30 --> 01:02:34
might say well okay I'm sure if I just

01:02:32 --> 01:02:35
wanted to build a system that could

01:02:33 --> 01:02:37
etect what somebody was reaching for I

01:02:34 --> 01:02:40
could generate a training data set of

01:02:36 --> 01:02:42
this sort of scene and train something

01:02:39 --> 01:02:44
up to analyze patterns of motion but

01:02:41 --> 01:02:45
again because the engine in your head

01:02:43 --> 01:02:47
actually does something we think more

01:02:44 --> 01:02:49
like this it does what we call inverse

01:02:46 --> 01:02:51
planning over a physics model it can

01:02:48 --> 01:02:52
apply to much more interesting scenes

01:02:50 --> 01:02:54
that you haven't really seen much of

01:02:51 --> 01:02:56
before so take the scene on the left

01:02:53 --> 01:02:58
right where again you see somebody

01:02:55 --> 01:03:00
reaching for one of a four by four array

01:02:57 --> 01:03:01
of objects but what you see is a strange

01:02:59 --> 01:03:04
kind of reach can you see why he's doing

01:03:00 --> 01:03:06
that strange reach up there it's a

01:03:03 --> 01:03:08
little small but what is you can see

01:03:05 --> 01:03:10
that he's reaching over something right

01:03:07 --> 01:03:12
it's actually a pane of glass right you

01:03:09 --> 01:03:15
see that and then there's this other guy

01:03:11 --> 01:03:16
who's helping him who sees what he wants

01:03:14 --> 01:03:18
and hands

01:03:15 --> 01:03:20
the thing he wants so how does the firt

01:03:17 --> 01:03:21
he guy in the foreground see the other

01:03:19 --> 01:03:23
guy's goal

01:03:20 --> 01:03:25
how does he and for his goal and know

01:03:22 --> 01:03:26
how to help him and then how do we look

01:03:24 --> 01:03:28
at the two of them and figure out who's

01:03:25 --> 01:03:30
trying to help who or that in a scene

01:03:27 --> 01:03:31
like this one here that it's not

01:03:29 --> 01:03:32
somebody trying to help somebody but

01:03:30 --> 01:03:35
rather the opposite

01:03:31 --> 01:03:36
okay so here's a model on the left of

01:03:34 --> 01:03:37
how that might work right and we think

01:03:35 --> 01:03:39
this is the kind of model needed to

01:03:36 --> 01:03:42
tackle this sort of challenge here right

01:03:38 --> 01:03:44
basically it's a model it's a we take

01:03:41 --> 01:03:46
this model of planning sort of maximal

01:03:43 --> 01:03:47
expected utility planning which you can

01:03:45 --> 01:03:50
run backwards but then we recursively

01:03:46 --> 01:03:52
nest these models inside each other so

01:03:49 --> 01:03:54
we say an agent is helping another agent

01:03:51 --> 01:03:56
if this agent is acting apparently to us

01:03:53 --> 01:03:59
eems to be maximizing an expected

01:03:55 --> 01:04:01
utility that's a positive function of

01:03:58 --> 01:04:02
that agents expectation about another

01:04:00 --> 01:04:05
agents expected utility and that's what

01:04:01 --> 01:04:06
it means to be a helper hindering is

01:04:04 --> 01:04:09
ort of the opposite if one seems to be

01:04:05 --> 01:04:11
trying to lower somebody else's utility

01:04:08 --> 01:04:13
okay and we've used these same kind of

01:04:10 --> 01:04:14
models to also describe infants

01:04:12 --> 01:04:17
understanding of helping and hindering

01:04:13 --> 01:04:19
in a range of scenes I'll just say one

01:04:16 --> 01:04:20
last word about learning because

01:04:18 --> 01:04:23
verybody wants to know about learning

01:04:19 --> 01:04:25
and and the the key thing here and it's

01:04:22 --> 01:04:27
definitely part of any picture of AGI

01:04:24 --> 01:04:28
but the thought I want to leave you on

01:04:26 --> 01:04:30
is really about what learning is about

01:04:27 --> 01:04:32
ok I'll be just a few more slides and

01:04:29 --> 01:04:34
then I'll stop I promise none of the

01:04:32 --> 01:04:35
models I showed you so far really did

01:04:33 --> 01:04:38
any learning they certainly didn't do

01:04:34 --> 01:04:39
any task specific learning ok we set up

01:04:37 --> 01:04:41
a probable state program and then we let

01:04:38 --> 01:04:42
it to inference now that's not to say

01:04:40 --> 01:04:44
that we don't think people learn to do

01:04:41 --> 01:04:47
these things we do but the real learning

01:04:43 --> 01:04:49
oes on when you're much younger right

01:04:46 --> 01:04:51
everything I showed you in basic form

01:04:48 --> 01:04:54
even a one-year-old baby can do ok the

01:04:50 --> 01:04:55
basic learning goes on to support these

01:04:53 --> 01:04:57
kinds of abilities not that there isn't

01:04:54 --> 01:04:59
learning beyond one year but the basic

01:04:56 --> 01:05:01
way you learn to say solve these physics

01:04:58 --> 01:05:04
problems is what goes on in your baton

01:05:00 --> 01:05:06
in the brain of a child between 0 and 12

01:05:03 --> 01:05:07
months so this is just an example of

01:05:05 --> 01:05:09
some phenomena that come from the

01:05:06 --> 01:05:10
literature on infant cognitive

01:05:08 --> 01:05:12
development these are very rough

01:05:09 --> 01:05:13
timelines you can take pictures of this

01:05:11 --> 01:05:15
if you like this is always a popular

01:05:12 --> 01:05:16
slide because it really is quite

01:05:14 --> 01:05:18
inspiring I think and I can give you

01:05:15 --> 01:05:20
lots of literature pointers but I'm

01:05:17 --> 01:05:23
summarizing in very broad strokes with

01:05:19 --> 01:05:25
big error bars what we've learned in the

01:05:22 --> 01:05:28
field of infant cognitive development

01:05:24 --> 01:05:29
about when and how kids seem to have to

01:05:27 --> 01:05:32
at least come to certain understand

01:05:28 --> 01:05:34
of basic aspects of physics so if you

01:05:31 --> 01:05:36
really want to study how people learn to

01:05:33 --> 01:05:38
be intelligent a lot of what you have to

01:05:35 --> 01:05:39
study are kids at this age you have to

01:05:37 --> 01:05:41
study what's already in their brain at

01:05:38 --> 01:05:43
zero months and what they learn and how

01:05:40 --> 01:05:45
they learn between four six eight ten

01:05:42 --> 01:05:49
twelve and so on and on up beyond that

01:05:44 --> 01:05:51
okay now well effectively what that

01:05:48 --> 01:05:53
amounts to we think is if what you're

01:05:50 --> 01:05:55
learning is something like a let's say

01:05:52 --> 01:05:58
an intuitive game physics engine to

01:05:54 --> 01:05:59
capture these basic abilities then what

01:05:57 --> 01:06:01
we need if we're gonna try to

01:05:58 --> 01:06:02
reverse-engineer that is what we might

01:06:00 --> 01:06:04
hink of as a program learning program

01:06:01 --> 01:06:05
if your knowledge is in the form of a

01:06:03 --> 01:06:07
program then you have to have programs

01:06:04 --> 01:06:08
that build other programs right this is

01:06:06 --> 01:06:10
what I was talking about the beginning

01:06:07 --> 01:06:13
about learning as building models of the

01:06:09 --> 01:06:15
world or ultimately if you think what we

01:06:12 --> 01:06:17
start off with is something like a game

01:06:14 --> 01:06:18
ngine that can play any game then what

01:06:16 --> 01:06:20
you have to learn is the program of the

01:06:17 --> 01:06:21
game that you're actually playing or the

01:06:19 --> 01:06:23
many different games that you might be

01:06:20 --> 01:06:25
playing over your life so think of

01:06:22 --> 01:06:26
learning as like programming the game

01:06:24 --> 01:06:28
ngine in your head to fit with your

01:06:25 --> 01:06:30
experience and and to fit with the

01:06:27 --> 01:06:32
possibilities that you seem like you can

01:06:29 --> 01:06:34
take now this is what you could call the

01:06:31 --> 01:06:35
hard problem of learning if you come to

01:06:33 --> 01:06:37
learning from say neural networks or

01:06:34 --> 01:06:39
other tools and machine learning right

01:06:36 --> 01:06:40
so what makes machine makes most of

01:06:38 --> 01:06:41
machine learning go right now and

01:06:39 --> 01:06:43
certainly what makes neural network so

01:06:40 --> 01:06:46
appealing is that you can set up a

01:06:42 --> 01:06:47
basically a big function approximator

01:06:45 --> 01:06:49
that can approximate many of the

01:06:46 --> 01:06:51
functions you might want to do in a

01:06:48 --> 01:06:52
certain application or task but in a way

01:06:50 --> 01:06:55
that's end-to-end differentiable and

01:06:51 --> 01:06:56
with a meaningful cost function so you

01:06:54 --> 01:06:58
can have one of these nice optimization

01:06:55 --> 01:06:59
landscapes you can compute the gradients

01:06:57 --> 01:07:03
and basically just roll downhill until

01:06:58 --> 01:07:04
you get to an optimal solution but if

01:07:02 --> 01:07:05
you're talking about learning as

01:07:03 --> 01:07:07
omething like search in the space of

01:07:04 --> 01:07:09
programs we don't know how to do

01:07:06 --> 01:07:10
anything like that yet we don't know how

01:07:08 --> 01:07:12
to set this up as any kind of a nice

01:07:09 --> 01:07:15
optimization problem with any notion of

01:07:11 --> 01:07:17
smoothness or gradients okay rather what

01:07:14 --> 01:07:19
we need is a instead of learning as like

01:07:16 --> 01:07:21
rolling downhill effectively right a

01:07:18 --> 01:07:24
process which just if you're willing to

01:07:20 --> 01:07:26
wait long enough you know some you know

01:07:23 --> 01:07:28
simple algorithm will take care of think

01:07:25 --> 01:07:30
of what we call the idea of learning as

01:07:27 --> 01:07:32
programming there's a popular metaphor

01:07:29 --> 01:07:34
in cognitive development called the

01:07:31 --> 01:07:36
child of scientists which emphasizes

01:07:33 --> 01:07:38
children as active theory builders and

01:07:35 --> 01:07:40
children's play as a kind of kind of

01:07:37 --> 01:07:42
casual experimentation but this is the

01:07:39 --> 01:07:43
algorithmic complement to that what we

01:07:41 --> 01:07:45
could call the child as

01:07:42 --> 01:07:47
or around MIT will say the child is

01:07:44 --> 01:07:49
hacker but the rest of the world if you

01:07:46 --> 01:07:50
say child is hacker they think of

01:07:48 --> 01:07:51
something someone who breaks into your

01:07:49 --> 01:07:53
email and steals your credit card

01:07:50 --> 01:07:55
numbers we all know that hacking is you

01:07:52 --> 01:07:58
know making your code more awesome right

01:07:54 --> 01:08:00
if your knowledge is some kind of code

01:07:57 --> 01:08:02
or legal library of programs then

01:07:59 --> 01:08:04
learning is all the ways that a child

01:08:01 --> 01:08:06
hacks on their code to make it more

01:08:03 --> 01:08:08
awesome that more awesome can mean more

01:08:05 --> 01:08:10
accurate but it can also mean faster

01:08:07 --> 01:08:12
more elegant more transportable to other

01:08:09 --> 01:08:14
applications or their tasks more

01:08:11 --> 01:08:16
xplainable to others maybe just more

01:08:13 --> 01:08:17
ntertaining okay children do all of

01:08:15 --> 01:08:19
them have all of those goals and

01:08:16 --> 01:08:21
learning and the activities by which

01:08:18 --> 01:08:24
they make their code more awesome also

01:08:20 --> 01:08:26
correspond to many of the activities of

01:08:23 --> 01:08:28
coding alright so think about all the

01:08:25 --> 01:08:29
ways on a day-to-day basis you might

01:08:27 --> 01:08:32
make your code more awesome

01:08:28 --> 01:08:34
all right you might tune you might have

01:08:31 --> 01:08:36
a big library of existing functions with

01:08:33 --> 01:08:37
some parameters that you can tune on a

01:08:35 --> 01:08:39
data set that's basically what you do

01:08:36 --> 01:08:40
with backprop or stochastic gradient

01:08:38 --> 01:08:42
descent in training a deep learning

01:08:39 --> 01:08:43
system but think about all the ways in

01:08:41 --> 01:08:45
which you might actually modify the

01:08:42 --> 01:08:47
underlying function so write new code or

01:08:44 --> 01:08:49
take old code from some other thing and

01:08:46 --> 01:08:51
map it over here or make a whole new

01:08:48 --> 01:08:53
library of code or refactor your code to

01:08:50 --> 01:08:56
some other you know some other basis for

01:08:52 --> 01:08:58
that that will work more robustly and be

01:08:55 --> 01:09:00
more extensible or transpiling or

01:08:57 --> 01:09:03
compiling right or even just commenting

01:08:59 --> 01:09:05
your code or asking someone else for

01:09:02 --> 01:09:06
their code ok again these are all ways

01:09:04 --> 01:09:09
that we make our code more awesome and

01:09:05 --> 01:09:10
children's learning has analogs all of

01:09:08 --> 01:09:12
these that we would want to understand

01:09:09 --> 01:09:14
as an engineer from an algorithmic point

01:09:11 --> 01:09:16
of view so in our group we've been

01:09:13 --> 01:09:18
working on on various early steps

01:09:15 --> 01:09:20
towards this and again we don't have

01:09:17 --> 01:09:22
anything like program writing programs

01:09:19 --> 01:09:24
at the level of children's learning

01:09:21 --> 01:09:25
algorithms but one example of something

01:09:23 --> 01:09:27
that we did in our group which you might

01:09:24 --> 01:09:29
not have thought of being about this but

01:09:26 --> 01:09:31
it's definitely the AI work we did that

01:09:28 --> 01:09:33
got the most attention in the last

01:09:30 --> 01:09:34
couple of years from our group we had

01:09:32 --> 01:09:36
this paper that was in science it was

01:09:33 --> 01:09:39
actually on the cover of science sort of

01:09:35 --> 01:09:40
just hit the market at the right time if

01:09:38 --> 01:09:42
you like and it got about a hundred

01:09:39 --> 01:09:43
times more publicity than anything else

01:09:41 --> 01:09:45
I've ever done which is partly a

01:09:42 --> 01:09:46
testament to the really great work that

01:09:44 --> 01:09:49
Brendan Lake who was the first author

01:09:45 --> 01:09:51
did for his PhD here but much more so

01:09:48 --> 01:09:53
just about the hunger for AI systems at

01:09:50 --> 01:09:55
he time when we published this in 2015

01:09:52 --> 01:09:57
and we built a machine system that the

01:09:54 --> 01:09:59
way we described it what

01:09:56 --> 01:10:00
doing human level concept learning four

01:09:58 --> 01:10:02
simple concept very simple visual

01:09:59 --> 01:10:04
concepts these handwritten characters in

01:10:01 --> 01:10:06
many of the world's alphabets for those

01:10:03 --> 01:10:07
of you who know the famous Emnes data

01:10:05 --> 01:10:09
set in the data set of handwritten

01:10:06 --> 01:10:12
digits 0 through 10 or 30 through 9

01:10:08 --> 01:10:13
sorry that drove so much good research

01:10:11 --> 01:10:16
in deep learning and pattern recognition

01:10:12 --> 01:10:17
it did that not because Jana Kuhn who

01:10:15 --> 01:10:19
put that together or Geoff Hinton who

01:10:16 --> 01:10:21
did a lot of work on deep learning with

01:10:18 --> 01:10:23
M Nez they were interested fundamentally

01:10:20 --> 01:10:25
in character recognition that they saw

01:10:22 --> 01:10:26
that as a very simple testbed for

01:10:24 --> 01:10:29
developing more general ideas and

01:10:25 --> 01:10:31
similarly we did this work on getting

01:10:28 --> 01:10:34
machines to do what we kind of one-shot

01:10:30 --> 01:10:36
learning of generative models also to

01:10:33 --> 01:10:38
develop more general ideas we saw this

01:10:35 --> 01:10:40
as learning very simple little mini

01:10:37 --> 01:10:41
probabilistic programs in this case what

01:10:39 --> 01:10:43
are those programs they're the programs

01:10:40 --> 01:10:45
you use to draw a character so ask

01:10:42 --> 01:10:47
yourself how can you look at any one of

01:10:44 --> 01:10:49
these characters and see in a sense how

01:10:46 --> 01:10:51
somebody might draw it the way we tested

01:10:48 --> 01:10:52
this in our system was this little

01:10:50 --> 01:10:55
visual Turing test where we showed

01:10:51 --> 01:10:57
people one character in a novel alphabet

01:10:54 --> 01:10:58
and we said draw another one and then we

01:10:56 --> 01:11:01
compared nine people like say on the

01:10:57 --> 01:11:03
left and nine samples from our machine

01:11:00 --> 01:11:05
say on the right and we said we asked

01:11:02 --> 01:11:06
other people could you tell which was

01:11:04 --> 01:11:08
the human drawing another example or

01:11:05 --> 01:11:10
imagining another example in which was

01:11:07 --> 01:11:11
the machine and people couldn't tell

01:11:09 --> 01:11:13
when I said ones on the left ones on the

01:11:10 --> 01:11:14
right I don't actually remember and on

01:11:12 --> 01:11:16
different ones you can see if you can

01:11:13 --> 01:11:17
tell it's very hard to tell can you tell

01:11:15 --> 01:11:19
which is for each one of these

01:11:16 --> 01:11:21
characters which new set of examples

01:11:18 --> 01:11:24
were drawn by a human versus a machine

01:11:20 --> 01:11:26
here's the right answer and probably you

01:11:23 --> 01:11:28
couldn't tell the way we did this was by

01:11:25 --> 01:11:29
assembling a simple kind of program

01:11:27 --> 01:11:31
learning program right

01:11:28 --> 01:11:32
so we basically said when you draw a

01:11:30 --> 01:11:34
character you're assembling strokes and

01:11:31 --> 01:11:37
sub strokes with goals and sub goals

01:11:33 --> 01:11:38
that produce ink on the page and when

01:11:36 --> 01:11:40
you see a character you're working

01:11:37 --> 01:11:41
backwards to figure out what was the

01:11:39 --> 01:11:44
program the most efficient program that

01:11:40 --> 01:11:45
did that so you're basically inverting a

01:11:43 --> 01:11:47
probabilistic program doing Bayesian

01:11:44 --> 01:11:49
inference to the program most likely to

01:11:46 --> 01:11:52
have generated what you saw this is one

01:11:48 --> 01:11:54
small step we think towards being able

01:11:51 --> 01:11:55
to learn programs to being able to learn

01:11:53 --> 01:11:57
something ultimately like a whole game

01:11:54 --> 01:11:59
ngine program the last thing I'll leave

01:11:56 --> 01:12:00
you with is just a pointer to sort of

01:11:58 --> 01:12:02
work in action

01:11:59 --> 01:12:04
right so this is some work being done by

01:12:01 --> 01:12:05
a current PhD student who works partly

01:12:03 --> 01:12:07
with me but also with armando salar

01:12:04 --> 01:12:10
Lezama and cecil this is kevin Ellis

01:12:06 --> 01:12:11
it's an example of what's now I think

01:12:09 --> 01:12:13
again a

01:12:10 --> 01:12:15
urging exciting area and AI well beyond

01:12:12 --> 01:12:17
anything that we're doing is the is

01:12:14 --> 01:12:18
combining techniques from where amando

01:12:16 --> 01:12:20
comes from which is the world of

01:12:17 --> 01:12:22
programming languages not machine

01:12:19 --> 01:12:24
learning or AI but tools from

01:12:21 --> 01:12:26
programming languages which can be used

01:12:23 --> 01:12:28
to automatically synthesize code okay

01:12:25 --> 01:12:29
with the machine learning toolkit in

01:12:27 --> 01:12:32
this case a kind of Bayesian Men and a

01:12:28 --> 01:12:34
minimum description length idea to be

01:12:31 --> 01:12:35
able to make again what is really one

01:12:33 --> 01:12:37
small step towards machines that can

01:12:34 --> 01:12:40
learn programs by basically trying to

01:12:36 --> 01:12:42
efficiently find the shortest simplest

01:12:39 --> 01:12:44
program which can capture some data set

01:12:41 --> 01:12:46
so we think by combining these kinds of

01:12:43 --> 01:12:48
tools in this case let's say from

01:12:45 --> 01:12:49
Bayesian inference over programs with a

01:12:47 --> 01:12:52
number of tools that have been developed

01:12:48 --> 01:12:53
in other areas of computer science that

01:12:51 --> 01:12:55
don't look anything or haven't been

01:12:52 --> 01:12:57
considered to be machine learning or AI

01:12:54 --> 01:12:59
like programming languages it's one of

01:12:56 --> 01:13:01
the many ways that going forward we're

01:12:58 --> 01:13:03
gonna be able to build smarter more

01:13:00 --> 01:13:05
human-like machines so just to end then

01:13:02 --> 01:13:08
what I've tried to tell you here is

01:13:04 --> 01:13:10
taught first of all identify the ways in

01:13:07 --> 01:13:11
which human intelligence goes beyond

01:13:09 --> 01:13:14
pattern recognition to really all these

01:13:10 --> 01:13:15
activities of modeling the world okay to

01:13:13 --> 01:13:17
give you a sense of some of the domains

01:13:14 --> 01:13:18
where we can start to study this in

01:13:16 --> 01:13:22
common sense scene understanding for

01:13:17 --> 01:13:24
example or you know something like

01:13:21 --> 01:13:25
one-shot learning for example like what

01:13:23 --> 01:13:28
we were just doing there or learning is

01:13:24 --> 01:13:30
programming the engine in your head okay

01:13:27 --> 01:13:32
and to give you a sense of some of the

01:13:29 --> 01:13:35
technical tools probabilistic programs

01:13:31 --> 01:13:36
program synthesis game engines for

01:13:34 --> 01:13:38
example as well as a little bit of deep

01:13:35 --> 01:13:40
learning that bringing together we're

01:13:37 --> 01:13:43
starting to be able to make these things

01:13:39 --> 01:13:45
real okay now that's the science agenda

01:13:42 --> 01:13:46
nd the reverse engineering agenda but

01:13:44 --> 01:13:48
hink about for those of you who are

01:13:45 --> 01:13:50
interested in technology what are the

01:13:47 --> 01:13:53
many big AI frontiers that this opens up

01:13:49 --> 01:13:54
so the one I'm most excited about is

01:13:52 --> 01:13:56
this idea which is which I've

01:13:53 --> 01:13:57
highlighted here in our big research

01:13:55 --> 01:13:59
agenda this is one I'm most excited

01:13:56 --> 01:14:01
about to work on for the you know it

01:13:58 --> 01:14:03
could be the rest of my career honestly

01:14:00 --> 01:14:05
but it's really what is what is the

01:14:02 --> 01:14:08
oldest and maybe the best dream of AI

01:14:04 --> 01:14:10
researchers of how to build a human-like

01:14:07 --> 01:14:12
intelligence system a real a GI system

01:14:09 --> 01:14:14
it's the idea that Turing proposed when

01:14:11 --> 01:14:15
he proposed the Turing test or Marvin

01:14:13 --> 01:14:17
Minsky proposed this at different times

01:14:14 --> 01:14:19
in his life or many people have proposed

01:14:16 --> 01:14:20
this right which is to build a system

01:14:18 --> 01:14:22
that grows into intelligence the way a

01:14:19 --> 01:14:24
human does that starts like a baby and

01:14:21 --> 01:14:25
learns like a child

01:14:23 --> 01:14:27
tried to show you how we're starting to

01:14:24 --> 01:14:29
be able to understand those things what

01:14:26 --> 01:14:32
a baby's mind starts with how children

01:14:29 --> 01:14:33
actually learn and looking forward we

01:14:31 --> 01:14:35
might we might imagine that someday

01:14:32 --> 01:14:36
we'll be able to build machines that can

01:14:34 --> 01:14:39
do this I think we can actually start

01:14:35 --> 01:14:40
working on this right now and we're and

01:14:38 --> 01:14:42
that's something that we're doing in our

01:14:39 --> 01:14:44
group so if that kind of thing excites

01:14:41 --> 01:14:45
you then I encourage you to work on it

01:14:43 --> 01:14:47
maybe even with us or if any one of

01:14:44 --> 01:14:50
these other activities of human

01:14:46 --> 01:14:51
intelligence excite you I think taking

01:14:49 --> 01:14:53
the kind of science-based reverse

01:14:50 --> 01:14:54
ngineering approach that we're doing

01:14:52 --> 01:14:57
and then trying to put that into

01:14:53 --> 01:14:59
engineering practice it's it's this is

01:14:56 --> 01:15:01
a this is not just a possible

01:14:58 --> 01:15:03
route but I think it's it's quite

01:15:00 --> 01:15:05
possibly the most valuable route that

01:15:02 --> 01:15:07
you could work on right now to try to

01:15:04 --> 01:15:08
actually achieve at least some kind of

01:15:06 --> 01:15:11
artificial general intelligence

01:15:07 --> 01:15:13
specially the kind of intelligence AI

01:15:10 --> 01:15:15
system that's going to live in a human

01:15:12 --> 01:15:16
world and interact with human there's

01:15:14 --> 01:15:18
many kinds of AI systems that could live

01:15:15 --> 01:15:19
in worlds of data that none of us can

01:15:17 --> 01:15:20
understand or will ever live in

01:15:18 --> 01:15:22
ourselves but if you want to build

01:15:19 --> 01:15:24
machines that can live in our world and

01:15:21 --> 01:15:26
interact with us the way we are used to

01:15:23 --> 01:15:28
interacting with other people then I

01:15:25 --> 01:15:29
think this is a route that you should

01:15:27 --> 01:15:33
consider okay thank you

01:15:28 --> 01:15:33
[Applause]

01:15:38 --> 01:15:43
hi there so early in the talk you

01:15:41 --> 01:15:45
expressed some skepticism about whether

01:15:42 --> 01:15:47
or not industry would get us to

01:15:44 --> 01:15:49
understanding human level intelligence

01:15:46 --> 01:15:51
it seems that there's a couple of trends

01:15:48 --> 01:15:52
that favor industry one is the industry

01:15:50 --> 01:15:54
is better than that academia

01:15:51 --> 01:15:57
ccumulating resources and plowing back

01:15:53 --> 01:15:58
into the topic and it seems at the

01:15:56 --> 01:16:01
moment we've got a bit of brain drain

01:15:57 --> 01:16:03
going on form academia into industry and

01:16:00 --> 01:16:04
that seems like a on going trend yeah if

01:16:02 --> 01:16:07
you look at something like learning to

01:16:03 --> 01:16:10
fly or learning to fly into space then

01:16:06 --> 01:16:13
it looks like a story is one of Industry

01:16:09 --> 01:16:14
kind of taking over the field and going

01:16:12 --> 01:16:17
off on its own yeah a little bit

01:16:13 --> 01:16:18
academia academics still have a role but

01:16:16 --> 01:16:20
industry kind of dominates so yes is

01:16:17 --> 01:16:22
industry going to overtake the field you

01:16:19 --> 01:16:23
think well that's a really good question

01:16:21 --> 01:16:25
and it's got several good questions

01:16:22 --> 01:16:27
packed into one there right I didn't

01:16:24 --> 01:16:30
mean to say I didn't this wasn't meant

01:16:26 --> 01:16:32
o say go academia bad industry right

01:16:29 --> 01:16:34
what I was taught what I what I tried to

01:16:31 --> 01:16:36
say was the approaches that are

01:16:33 --> 01:16:38
currently getting the most attention in

01:16:35 --> 01:16:39
dustry and they're really because

01:16:37 --> 01:16:40
they're really the most valuable ones

01:16:38 --> 01:16:42
right now for the short term you know

01:16:39 --> 01:16:44
any industry is really focused on what

01:16:41 --> 01:16:46
it can do what are the value

01:16:43 --> 01:16:47
propositions on basically a two year

01:16:45 --> 01:16:48
time scale at most I mean if you ask say

01:16:46 --> 01:16:51
Google researchers to take the most

01:16:47 --> 01:16:53
prominent example it's pretty much what

01:16:50 --> 01:16:56
hey'll all tell you okay maybe maybe

01:16:52 --> 01:16:57
things that might you know pay off

01:16:55 --> 01:16:59
initially in two years but maybe take

01:16:56 --> 01:17:01
five years or more to really develop but

01:16:58 --> 01:17:03
if if you can't show that it's gonna do

01:17:00 --> 01:17:04
something practical for us in two years

01:17:02 --> 01:17:05
in a way that matters for our bottom

01:17:03 --> 01:17:09
line then it's not really worth doing

01:17:04 --> 01:17:10
okay so what when we say what I'm

01:17:08 --> 01:17:13
talking about is the technologies which

01:17:09 --> 01:17:15
right now industry sees as meeting that

01:17:12 --> 01:17:17
specification and what I'm saying is

01:17:14 --> 01:17:20
right now I think those that's that's

01:17:16 --> 01:17:22
not where the route is to something like

01:17:19 --> 01:17:24
human-like but not the most valuable

01:17:21 --> 01:17:26
promising route to human-like kinds of

01:17:23 --> 01:17:29
AI systems all right but I hope that

01:17:25 --> 01:17:30
like in the cases you said you know the

01:17:28 --> 01:17:32
basic research that we're doing now will

01:17:29 --> 01:17:34
be successful enough that it will get

01:17:31 --> 01:17:36
he attention of industry when the time

01:17:33 --> 01:17:39
is right but I think so you know I mean

01:17:35 --> 01:17:41
I hope at some point you know it won't

01:17:38 --> 01:17:42
it will only at least the engineering

01:17:40 --> 01:17:45
side will have to be done in industry

01:17:41 --> 01:17:47
not just in academia but you're also

01:17:44 --> 01:17:48
pointing to issues of like brain drain

01:17:46 --> 01:17:49
and other things like that

01:17:47 --> 01:17:51
but I think it's these are real issues

01:17:48 --> 01:17:52
confronting our community I think

01:17:50 --> 01:17:54
everybody knows this and I'm

01:17:51 --> 01:17:56
this will come up multiple times here

01:17:53 --> 01:17:59
which is you know I think we have to

01:17:55 --> 01:18:01
find ways to even now to combine the

01:17:58 --> 01:18:04
best of the idea of the energy and the

01:18:00 --> 01:18:06
resources of academia and industry if we

01:18:03 --> 01:18:08
want to keep doing basically something

01:18:05 --> 01:18:10
interesting right if we will if we just

01:18:07 --> 01:18:12
want to redefine AI to be well whatever

01:18:09 --> 01:18:15
people currently call AI but scaled up

01:18:11 --> 01:18:17
well then then then fine forget about it

01:18:14 --> 01:18:19
and or if we just want to say let me and

01:18:16 --> 01:18:20
people like me do what we're doing at

01:18:18 --> 01:18:23
what industry would consider a snail's

01:18:19 --> 01:18:25
pace on toy problems okay fine but if

01:18:22 --> 01:18:27
we want to if you know if I want

01:18:24 --> 01:18:29
o take what I'm doing to the level that

01:18:26 --> 01:18:31
will really be you know paying off

01:18:28 --> 01:18:33
that level the industry can appreciate

01:18:30 --> 01:18:36
or just that really has technological

01:18:32 --> 01:18:38
impact on a broad scale right or I think

01:18:35 --> 01:18:39
if industry wants to take what it's

01:18:37 --> 01:18:42
doing and really build machines that are

01:18:38 --> 01:18:43
actually intelligent right our machine

01:18:41 --> 01:18:45
learning that actually learns like a

01:18:42 --> 01:18:47
person then I think we need each other

01:18:44 --> 01:18:48
now and not just in some point in the

01:18:46 --> 01:18:50
future so this is a general challenge

01:18:47 --> 01:18:52
for MIT and for everywhere and for

01:18:49 --> 01:18:54
Google I mean we just spent a few days

01:18:51 --> 01:18:57
talking to Google about exactly this

01:18:53 --> 01:18:59
sue that this was a talk I prepared

01:18:56 --> 01:19:01
partly for that purpose so we wanted to

01:18:58 --> 01:19:02
raise those issues and and it's just I

01:19:00 --> 01:19:03
mean really there I don't know what I

01:19:01 --> 01:19:07
mean well rather I can think of some

01:19:02 --> 01:19:09
solutions to that problem of what you

01:19:06 --> 01:19:10
could call brain drain from the academic

01:19:08 --> 01:19:12
point of view or what you could call

01:19:09 --> 01:19:14
just narrowing in into certain local

01:19:11 --> 01:19:16
minima in the industry point of view but

01:19:13 --> 01:19:18
hey will require the leadership of both

01:19:15 --> 01:19:20
academic institutions like MIT and

01:19:17 --> 01:19:21
companies like Google being creative

01:19:19 --> 01:19:22
about how they might work together in

01:19:20 --> 01:19:24
ways that are a little bit outside of

01:19:21 --> 01:19:28
their comfort zone I hope that will

01:19:23 --> 01:19:29
start to happen including at MIT and at

01:19:27 --> 01:19:31
many other universities and at companies

01:19:28 --> 01:19:32
like Google and many others and I think

01:19:30 --> 01:19:35
we need it to happen for the health of

01:19:31 --> 01:19:39
all parties concerned okay thank you

01:19:34 --> 01:19:42
very much things I'm curious about sort

01:19:38 --> 01:19:44
of the premise that you gave that one of

01:19:41 --> 01:19:46
the big gaps missing at determining

01:19:43 --> 01:19:50
intelligence is the fact that we need to

01:19:45 --> 01:19:52
teach machines how to recognize models

01:19:49 --> 01:19:57
and I'm curious as to what you think

01:19:51 --> 01:19:59
sort of non goal oriented cognitive

01:19:56 --> 01:20:01
activity comes into play they're things

01:19:58 --> 01:20:05
like feelings and emotions

01:20:00 --> 01:20:09
and and y-you don't think that might not

01:20:04 --> 01:20:12
necessarily be like that the no I'm I

01:20:08 --> 01:20:13
was born in questo the only reason

01:20:11 --> 01:20:16
emotions didn't appear on my slide is

01:20:12 --> 01:20:17
because there's a few reasons but the

01:20:15 --> 01:20:19
slide is only so big I wanted the font

01:20:16 --> 01:20:22
o be big readable for such an important

01:20:18 --> 01:20:26
slide I've had versions of my slide in

01:20:21 --> 01:20:27
which I do talk about that okay it's not

01:20:25 --> 01:20:29
hat I think feelings or emotions aren't

01:20:26 --> 01:20:31
important I think they are important and

01:20:28 --> 01:20:33
I used to not have many insights on it

01:20:30 --> 01:20:35
about what to do about them but actually

01:20:32 --> 01:20:38
partly based on some of my colleagues

01:20:34 --> 01:20:39
here at MIT BCS Laura Schultz and

01:20:37 --> 01:20:41
Rebecca Saxe two of my cognitive

01:20:38 --> 01:20:45
colleagues in who I work closely with

01:20:40 --> 01:20:47
ey've been starting to do research on

01:20:44 --> 01:20:48
how people understand emotions both

01:20:46 --> 01:20:49
eir own and others and we've been

01:20:47 --> 01:20:50
starting to work with them on

01:20:48 --> 01:20:52
computational models so that's actually

01:20:49 --> 01:20:54
something I'm actively interested in and

01:20:51 --> 01:20:56
even working on but I would say and

01:20:53 --> 01:20:56
again for those of you who study emotion

01:20:55 --> 01:20:59
to know about this actually you're gonna

01:20:55 --> 01:21:00
have Lisa coming in right oh so she's

01:20:58 --> 01:21:02
gonna basically say a version of the

01:20:59 --> 01:21:04
same thing I think the deepest way to

01:21:01 --> 01:21:05
understand she's one of the world's

01:21:03 --> 01:21:07
experts on this the deepest way to

01:21:04 --> 01:21:09
understand emotion is very much based on

01:21:06 --> 01:21:11
our mental models of ourselves of the

01:21:08 --> 01:21:14
situation we're in and of other people

01:21:10 --> 01:21:17
right think about for example all of the

01:21:13 --> 01:21:18
different I mean if you you know if you

01:21:16 --> 01:21:19
think about it I mean again Lisa will

01:21:17 --> 01:21:21
talk all about this but if you think

01:21:18 --> 01:21:22
about emotion as just a very small set

01:21:20 --> 01:21:25
of what are sometimes called basic

01:21:21 --> 01:21:30
emotions like being happy or angry or

01:21:24 --> 01:21:32
sad or you know those are a small number

01:21:29 --> 01:21:35
of them right there's usually only few

01:21:31 --> 01:21:37
right you might not say you might see

01:21:34 --> 01:21:38
that it's somehow like very basic things

01:21:36 --> 01:21:41
that are opposed to some kind of

01:21:37 --> 01:21:42
cognitive activity but think about all

01:21:40 --> 01:21:45
the different words we have for emotion

01:21:41 --> 01:21:48
right for example think about an a

01:21:44 --> 01:21:50
famous cognitive emotion like regret

01:21:47 --> 01:21:53
what does it mean to feel regret or

01:21:49 --> 01:21:55
frustration right just to know both for

01:21:52 --> 01:21:57
yourself when you're not just feeling

01:21:54 --> 01:21:59
kind of down or negative but you're

01:21:56 --> 01:22:01
feeling regret that that means something

01:21:58 --> 01:22:03
like I have to feel like there's a

01:22:00 --> 01:22:06
situation that came out differently from

01:22:02 --> 01:22:08
how I hoped and I realize I could have

01:22:05 --> 01:22:09
done something differently right so that

01:22:07 --> 01:22:11
means you have to be able to understand

01:22:08 --> 01:22:13
you have to have a model you have to be

01:22:10 --> 01:22:14
able to do a kind of counterfactual

01:22:12 --> 01:22:15
reasoning and to think oh if only I had

01:22:13 --> 01:22:16
acted to differ

01:22:14 --> 01:22:17
way then I can predict that the world

01:22:16 --> 01:22:19
would have come out differently and

01:22:16 --> 01:22:21
that's the situation I wanted but

01:22:18 --> 01:22:24
instead it came up this other way right

01:22:20 --> 01:22:25
or think about frustration again that

01:22:23 --> 01:22:27
requires something like understanding

01:22:24 --> 01:22:28
okay I've tried a bunch of times I

01:22:26 --> 01:22:30
thought this would work but it doesn't

01:22:27 --> 01:22:32
seem to be working maybe I'm ready to

01:22:29 --> 01:22:34
give up though those are all those are

01:22:31 --> 01:22:36
very important human emotions

01:22:33 --> 01:22:37
we have to understand to understand

01:22:35 --> 01:22:39
ourselves we need that to understand

01:22:37 --> 01:22:41
other people to understand communication

01:22:38 --> 01:22:43
but those are all filtered through the

01:22:40 --> 01:22:45
kinds of models of action that I was

01:22:42 --> 01:22:47
just the ones I was talking about here

01:22:44 --> 01:22:49
with these say cost-benefit analyses of

01:22:46 --> 01:22:50
action so what I'm so I'm just trying to

01:22:48 --> 01:22:53
say I think this is very basic stuff

01:22:49 --> 01:22:56
that will be the basis for building I

01:22:52 --> 01:22:57
think better engineering style models of

01:22:55 --> 01:22:59
the full spectrum of human emotion

01:22:56 --> 01:23:00
beyond just like well I'm feeling good

01:22:58 --> 01:23:02
or bad or scared okay

01:22:59 --> 01:23:04
and if I think when you see Lisa she

01:23:01 --> 01:23:09
will in her own way say something very

01:23:03 --> 01:23:11
similar interesting thanks yeah thanks

01:23:08 --> 01:23:13
Josh for your nice talk so all is about

01:23:10 --> 01:23:15
human cognition and try to build a model

01:23:12 --> 01:23:17
to mimic those cognition but you don't

01:23:14 --> 01:23:19
how much could help you to understand

01:23:16 --> 01:23:20
how the circuit implement those things

01:23:18 --> 01:23:23
hmm I mean like these circuits in the

01:23:19 --> 01:23:25
brain yeah yeah that's the is that what

01:23:22 --> 01:23:28
you work on by any chance is that what

01:23:24 --> 01:23:31
you work on by any chance yeah yeah yeah

01:23:27 --> 01:23:32
so so in the Center for brains minds of

01:23:30 --> 01:23:34
machines as well as in brain and

01:23:31 --> 01:23:36
cognitive science yeah we I have a

01:23:33 --> 01:23:38
number of colleagues who study the

01:23:35 --> 01:23:39
actual hardware basis of this stuff in

01:23:37 --> 01:23:41
the brain and that includes like the

01:23:38 --> 01:23:42
large-scale architecture of the brain

01:23:40 --> 01:23:44
say like what Nancy kanwisher

01:23:41 --> 01:23:45
Rebecca Saxe studied with functional

01:23:43 --> 01:23:47
brain imaging or the more detailed

01:23:44 --> 01:23:49
circuitry which usually requires

01:23:46 --> 01:23:50
recording from say non-human brains

01:23:48 --> 01:23:52
right at the level of individual neurons

01:23:49 --> 01:23:54
and connections between neurons all

01:23:51 --> 01:23:56
right so I'm very interested in those

01:23:53 --> 01:23:58
things although it's not mostly what I

01:23:55 --> 01:24:00
work on right but I would say you know

01:23:57 --> 01:24:02
again liking in many other areas of

01:23:59 --> 01:24:04
science certainly in neuroscience the

01:24:01 --> 01:24:05
kind of work I'm talking about here in a

01:24:03 --> 01:24:08
sort of classic reductionist program

01:24:04 --> 01:24:10
sets the target for what we might look

01:24:07 --> 01:24:12
for like if I if I just want to go I

01:24:09 --> 01:24:15
mean I I would I would I would assert

01:24:11 --> 01:24:18
right or my working conjecture is that

01:24:14 --> 01:24:20
if if you do the kind of work that I'm

01:24:17 --> 01:24:21
talking about here it gives you the

01:24:19 --> 01:24:24
right targets or gives you a candidate

01:24:20 --> 01:24:26
set of targets to look for what are the

01:24:23 --> 01:24:29
neural circuits computing right whereas

01:24:25 --> 01:24:31
if you just go in and just say

01:24:28 --> 01:24:33
poking around in the brain or have some

01:24:30 --> 01:24:34
idea that what you're gonna try to do is

01:24:32 --> 01:24:36
find the neural circuits which underlie

01:24:33 --> 01:24:38
behavior without a sense of the

01:24:35 --> 01:24:41
computations needed to produce those

01:24:37 --> 01:24:43
behaviors I don't I think it's gonna be

01:24:40 --> 01:24:44
very difficult to eat to know what to

01:24:42 --> 01:24:47
look for and to know when you've found

01:24:43 --> 01:24:49
even viable answers so I think that's

01:24:46 --> 01:24:52
you know that's the standard kind of

01:24:48 --> 01:24:55
reductionist program but it's not that's

01:24:51 --> 01:24:57
it's not I also think it's it's not one

01:24:54 --> 01:24:59
that is I'm divorced from the study of

01:24:56 --> 01:25:01
neural circuits it's also one if you

01:24:58 --> 01:25:04
look at the broad picture of reverse

01:25:00 --> 01:25:05
ngineering it's one where we're neural

01:25:03 --> 01:25:08
circuits and understanding the circuits

01:25:04 --> 01:25:10
in the brain play an absolutely critical

01:25:07 --> 01:25:12
role okay I would say the mate as an

01:25:09 --> 01:25:14
when you look at the brain at the

01:25:11 --> 01:25:15
hardware level as an engineer I'm mostly

01:25:13 --> 01:25:16
looking at the software level right but

01:25:14 --> 01:25:19
when you look at the hardware level

01:25:15 --> 01:25:21
there are some remarkable properties one

01:25:18 --> 01:25:23
remarkable property again is you know

01:25:20 --> 01:25:25
how much parallelism there is and in

01:25:22 --> 01:25:25
many ways how fast the computations are

01:25:24 --> 01:25:27
okay

01:25:24 --> 01:25:29
neurons are slow but the computations

01:25:26 --> 01:25:31
intelligence are very fast so how do we

01:25:28 --> 01:25:33
get elements that are in some sense

01:25:30 --> 01:25:35
quite slow in their time constant to

01:25:32 --> 01:25:36
produce such intelligent behavior so

01:25:34 --> 01:25:38
quickly that's a great mystery and I

01:25:35 --> 01:25:40
think if we understood that it would

01:25:37 --> 01:25:42
have payoff for building all sorts of

01:25:39 --> 01:25:45
you know Apple basically application

01:25:41 --> 01:25:47
embedded circuits okay but also maybe

01:25:44 --> 01:25:49
most important is the power consumption

01:25:46 --> 01:25:51
and again many people have-have have

01:25:48 --> 01:25:52
noted this right if you look at the

01:25:50 --> 01:25:54
power consumption the power that the

01:25:51 --> 01:25:58
brain consumes like what did I eat today

01:25:53 --> 01:26:00
okay almost nothing um my daughter who's

01:25:57 --> 01:26:02
again she's doing an internship here she

01:25:59 --> 01:26:04
literally yesterday all she ate was a

01:26:01 --> 01:26:06
burrito and yet she wrote 300 lines of

01:26:03 --> 01:26:09
code for her internship project on

01:26:05 --> 01:26:10
really cool computational linguistics

01:26:08 --> 01:26:12
projects so somehow she turned a burrito

01:26:09 --> 01:26:15
into you know a model of child language

01:26:11 --> 01:26:16
acquisition okay but how did she do that

01:26:14 --> 01:26:18
or how do any of us do this right um

01:26:15 --> 01:26:20
we're if you look at the power that we

01:26:17 --> 01:26:22
consume when we simulate even a very

01:26:19 --> 01:26:24
small chunk of cortex on our

01:26:21 --> 01:26:26
conventional hardware or we do any kind

01:26:23 --> 01:26:28
of machine learning thing we have

01:26:25 --> 01:26:30
systems which are very very very very

01:26:27 --> 01:26:33
far from the power of the human brain

01:26:29 --> 01:26:36
computationally but in terms of physical

01:26:32 --> 01:26:38
energy consumed way way past what any

01:26:35 --> 01:26:41
individual brain is doing so how do we

01:26:37 --> 01:26:42
get circuitry of any sort biological or

01:26:40 --> 01:26:45
just any physical circuit

01:26:41 --> 01:26:47
o be as smart as we are with as little

01:26:44 --> 01:26:49
nergy as we are this is this is a huge

01:26:46 --> 01:26:51
problem for basically every area of

01:26:48 --> 01:26:54
engineering right if you want to if you

01:26:50 --> 01:26:56
want to have any kind of robot the power

01:26:53 --> 01:26:58
consumption is a key bottleneck same for

01:26:55 --> 01:27:01
self-driving cars if we want to build AI

01:26:57 --> 01:27:03
without contributing to global warming

01:27:00 --> 01:27:05
and climate change let alone use AI to

01:27:02 --> 01:27:07
solve climate change we really need to

01:27:04 --> 01:27:10
address these issues and the brain is a

01:27:06 --> 01:27:11
huge guide there right I think

01:27:09 --> 01:27:12
there are some people who are really

01:27:10 --> 01:27:15
starting to think about this how can we

01:27:11 --> 01:27:18
say for example build somehow brain

01:27:14 --> 01:27:19
spired computers which are very very

01:27:17 --> 01:27:21
low-power but maybe only approximate so

01:27:18 --> 01:27:23
I'm thinking here of Joe Bates I don't

01:27:20 --> 01:27:25
know if none of you know Joe he's he's

01:27:22 --> 01:27:27
been around MIT and other places for

01:27:24 --> 01:27:30
quite a while can I tell them about your

01:27:26 --> 01:27:32
company so so Joe has a start-up in

01:27:29 --> 01:27:33
Kendall Square called singular computing

01:27:31 --> 01:27:35
and they have some very interesting

01:27:32 --> 01:27:38
ideas including some actual implemented

01:27:34 --> 01:27:40
technology for low power approximate

01:27:37 --> 01:27:42
computing in a sort of a brain like way

01:27:39 --> 01:27:44
that might lead to possibly even like

01:27:41 --> 01:27:46
the ability to build something this is

01:27:43 --> 01:27:47
Joe's dream to built in this about the

01:27:45 --> 01:27:50
size of this table but that has a

01:27:46 --> 01:27:51
billion course a billion cores and runs

01:27:49 --> 01:27:53
on a reasonable kind of power

01:27:50 --> 01:27:55
consumption I would love to have such a

01:27:52 --> 01:27:57
machine if anybody wants to help Joe

01:27:54 --> 01:27:59
build it I think he'd love to talk to

01:27:56 --> 01:28:02
you but that's it's one of a number of

01:27:58 --> 01:28:04
ideas I mean Google X people are working

01:28:01 --> 01:28:06
on similar things probably most of the

01:28:03 --> 01:28:08
major chip companies are also inspired

01:28:05 --> 01:28:09
by this idea and I think even if you

01:28:07 --> 01:28:11
don't didn't think you were interested

01:28:08 --> 01:28:13
in the brain if you want to build the

01:28:10 --> 01:28:15
kind of AI were talking about and run it

01:28:12 --> 01:28:17
on physical Hardware of any sort and

01:28:14 --> 01:28:20
understanding how the brain circuits

01:28:16 --> 01:28:22
compute what they do what what I'm

01:28:19 --> 01:28:24
talking about with as little power as

01:28:21 --> 01:28:27
they do I don't know any better place to

01:28:23 --> 01:28:29
look it seems like a lot of the

01:28:26 --> 01:28:31
improvements in AI have been driven by

01:28:28 --> 01:28:33
increasing like computational power yeah

01:28:30 --> 01:28:36
ow far you would you say me like GPUs

01:28:32 --> 01:28:38
or CMU yeah yeah how far would you say

01:28:35 --> 01:28:41
we are from hardware that could run a

01:28:37 --> 01:28:43
general artificial intelligence of the

01:28:40 --> 01:28:45
kind that I'm talking about yeah I don't

01:28:42 --> 01:28:48
know I'll start with a billion cores and

01:28:44 --> 01:28:49
then we'll see I mean I I think we're I

01:28:47 --> 01:28:50
mean I think I think

01:28:48 --> 01:28:52
there's no way to answer that question

01:28:49 --> 01:28:55
in a way that software independent I

01:28:51 --> 01:28:57
don't know how to do that right but I

01:28:54 --> 01:29:00
think that

01:28:56 --> 01:29:02
it's and and you know I don't know like

01:28:59 --> 01:29:04
when you say how far are we

01:29:01 --> 01:29:06
you mean how far am i with the resources

01:29:03 --> 01:29:07
I have right now how far am i if if

01:29:05 --> 01:29:09
Google decides to put all of its

01:29:06 --> 01:29:11
resources at my disposal like they might

01:29:08 --> 01:29:14
if I were working at deepmind

01:29:10 --> 01:29:16
I don't know the answer to that question

01:29:13 --> 01:29:19
I but I think the I think what we can

01:29:15 --> 01:29:21
say is this um individual neurons I mean

01:29:18 --> 01:29:23
again this goes back to another reason

01:29:20 --> 01:29:24
to study neural circuits um if you look

01:29:22 --> 01:29:26
at what we currently call neural

01:29:23 --> 01:29:28
networks in the AI side the model of a

01:29:25 --> 01:29:31
neuron is this very very simple thing

01:29:27 --> 01:29:32
right individual neurons are not only

01:29:30 --> 01:29:34
much more complex but have a lot more

01:29:31 --> 01:29:37
computational power it's not clear how

01:29:33 --> 01:29:39
they use it or whether they use it but I

01:29:36 --> 01:29:41
think it's just as likely that a neuron

01:29:38 --> 01:29:42
is something like a rail you write is

01:29:40 --> 01:29:44
that a neuron is something like a

01:29:41 --> 01:29:47
computer like under one neuron in your

01:29:43 --> 01:29:51
brain is more like a CPU node okay maybe

01:29:46 --> 01:29:53
and thus the ten billion or trillion you

01:29:50 --> 01:29:56
know the large number of neurons in your

01:29:52 --> 01:29:58
brain I think it's like 10 billion

01:29:55 --> 01:30:01
cortical pyramidal neurons or something

01:29:57 --> 01:30:02
might be like 10 billion cores okay for

01:30:00 --> 01:30:04
example that's at least as plausible I

01:30:01 --> 01:30:06
think to me as any other estimate so and

01:30:03 --> 01:30:08
I think so I think we're on the

01:30:05 --> 01:30:10
definitely on the underside with very

01:30:07 --> 01:30:12
big error bars so I completely agree

01:30:09 --> 01:30:14
that or if this is what you might be

01:30:11 --> 01:30:16
suggesting and may you know going back

01:30:13 --> 01:30:17
to my answer to your question I don't

01:30:15 --> 01:30:18
hink we're gonna get to what I'm

01:30:16 --> 01:30:21
talking about that anything like a real

01:30:17 --> 01:30:23
brain scale without major innovations on

01:30:20 --> 01:30:24
the hardware side and you know it's it's

01:30:22 --> 01:30:27
interesting that what drove those

01:30:23 --> 01:30:29
innovations in that support current a I

01:30:26 --> 01:30:33
was mostly not AI it was the video game

01:30:28 --> 01:30:34
industry I'm when I point to the video

01:30:32 --> 01:30:36
game engine in your head that's a

01:30:33 --> 01:30:37
similar thing that was driven by the

01:30:35 --> 01:30:40
video game industry on the software side

01:30:36 --> 01:30:42
I think we should all play as many video

01:30:39 --> 01:30:43
games as we can and contribute to the

01:30:41 --> 01:30:46
growth of the video game industry

01:30:42 --> 01:30:48
because no because I mean I mean you can

01:30:45 --> 01:30:49
see this in very like there are

01:30:47 --> 01:30:51
companies out there for example there's

01:30:48 --> 01:30:54
a company called improbable which is a

01:30:50 --> 01:30:56
London company London based startup a

01:30:53 --> 01:30:57
pretty sizable start-up at this point

01:30:55 --> 01:31:00
which is building something that they

01:30:56 --> 01:31:02
call spatial OS which is it's a it's not

01:30:59 --> 01:31:04
a hardware idea but it's a

01:31:01 --> 01:31:06
kind of software idea for very very big

01:31:03 --> 01:31:08
distributed computing environments to

01:31:05 --> 01:31:10
run much much more complex realistic

01:31:07 --> 01:31:11
simulations of the world for

01:31:09 --> 01:31:13
much more interesting immersive

01:31:10 --> 01:31:14
permanent videogames I think that's one

01:31:12 --> 01:31:17
thing that might hopefully that will

01:31:13 --> 01:31:19
ead to more fun new kinds of games but

01:31:16 --> 01:31:21
hat's one example of where we might

01:31:18 --> 01:31:23
look to that industry to drive some of

01:31:20 --> 01:31:25
the you know just computer systems

01:31:22 --> 01:31:28
really hardware and software systems

01:31:24 --> 01:31:29
that we'll take we'll take our game to

01:31:27 --> 01:31:32
the next level

01:31:28 --> 01:31:35
just understanding on the algorithmic

01:31:31 --> 01:31:36
level or cognitive level is just to

01:31:34 --> 01:31:39
understanding the learning the meaning

01:31:35 --> 01:31:41
of learning would be how to predict but

01:31:38 --> 01:31:44
on the circuit level is different but at

01:31:40 --> 01:31:46
he what level on the circuit level well

01:31:43 --> 01:31:48
of course it's different right but

01:31:45 --> 01:31:49
already you I think you made a mistake

01:31:47 --> 01:31:50
there honestly like you said the

01:31:48 --> 01:31:52
cognitive level is learning how to

01:31:49 --> 01:31:53
predict but I'm not sure what you mean

01:31:51 --> 01:31:55
by that there's many things you could

01:31:52 --> 01:31:56
mean and are what our cognitive science

01:31:54 --> 01:31:57
is about is learning which of those

01:31:55 --> 01:31:58
versions like I don't think it's

01:31:56 --> 01:32:00
learning how to predict

01:31:57 --> 01:32:02
I think it's learning what you need to

01:31:59 --> 01:32:03
know to plan actions and to a map you

01:32:01 --> 01:32:05
know all those things like it's not just

01:32:02 --> 01:32:07
about predicting it's because there are

01:32:04 --> 01:32:09
things we can imagine so that you would

01:32:06 --> 01:32:10
never predict because there never happen

01:32:08 --> 01:32:12
unless we somehow make the world

01:32:09 --> 01:32:14
ifferent so generalizations are you're

01:32:11 --> 01:32:16
not predicting okay when your model

01:32:13 --> 01:32:17
could generalize but especially in the

01:32:15 --> 01:32:18
transfer learning that you are

01:32:16 --> 01:32:20
interested in a few hundred of neurons

01:32:17 --> 01:32:23
in prefrontal cortex they have

01:32:19 --> 01:32:27
generalize a lot yes but not kind of a

01:32:22 --> 01:32:29
Bayesian model do that you said but a

01:32:26 --> 01:32:31
thean model won't do that or they don't

01:32:28 --> 01:32:32
do it the way a Bayesian model does for

01:32:30 --> 01:32:35
sure because that's in the abstract

01:32:31 --> 01:32:37
level well I mean how do you really know

01:32:34 --> 01:32:40
like and what does it mean to say that

01:32:36 --> 01:32:41
some neurons do it like so maybe another

01:32:39 --> 01:32:43
way to put this is to say look we have a

01:32:40 --> 01:32:45
certain math that we use to capture

01:32:42 --> 01:32:48
these you could call it abstract I call

01:32:44 --> 01:32:49
it software level abstractions right I

01:32:47 --> 01:32:51
mean all engineering is based on some

01:32:48 --> 01:32:53
kind of abstraction but you might have a

01:32:50 --> 01:32:54
circuit level abstraction a certain kind

01:32:52 --> 01:32:56
of hardware level that you're interested

01:32:53 --> 01:32:58
in describing the brain at and I'm

01:32:55 --> 01:32:59
ostly working out or starting from a

01:32:57 --> 01:33:01
more software level of abstraction right

01:32:58 --> 01:33:03
hey're all distractions we're not

01:33:00 --> 01:33:04
alking about molecules here right we're

01:33:02 --> 01:33:07
talking about some abstract notion of

01:33:03 --> 01:33:08
maybe a circuit or of a program okay

01:33:06 --> 01:33:11
right now it's a really interesting

01:33:07 --> 01:33:12
question if I look at some circuits how

01:33:10 --> 01:33:13
do I know what program they're

01:33:11 --> 01:33:15
implementing right if I look at the

01:33:12 --> 01:33:16
circuits in this machine could I tell

01:33:14 --> 01:33:18
what program they're implementing well

01:33:15 --> 01:33:19
maybe but certainly it would be a lot

01:33:17 --> 01:33:20
easier if I knew something about what

01:33:18 --> 01:33:21
programs they might

01:33:19 --> 01:33:23
implementing before I start to look at

01:33:20 --> 01:33:25
he circuitry if I just looked at the

01:33:22 --> 01:33:27
circuitry without knowing what a program

01:33:24 --> 01:33:29
was or what programs the thing might be

01:33:26 --> 01:33:31
doing or what kind of programming

01:33:28 --> 01:33:34
components would be mapable to circuits

01:33:31 --> 01:33:35
in different ways right I don't even

01:33:33 --> 01:33:36
know how to begin to answer that

01:33:34 --> 01:33:37
question

01:33:35 --> 01:33:40
so I think you know we've made some

01:33:36 --> 01:33:42
progress at understanding what neurons

01:33:39 --> 01:33:44
are doing in certain low-level parts of

01:33:41 --> 01:33:45
sensory system and certain parts of the

01:33:43 --> 01:33:47
motor system like primary motor cortex

01:33:44 --> 01:33:48
like basically the parts of the neurons

01:33:46 --> 01:33:51
that are closest to the inputs and

01:33:47 --> 01:33:53
outputs of the brain right where we

01:33:50 --> 01:33:55
don't eat when you can say we don't need

01:33:52 --> 01:33:58
the kind of software abstractions that

01:33:54 --> 01:34:00
I'm talking about or where we sort of

01:33:57 --> 01:34:01
agree on what those things already are

01:33:59 --> 01:34:03
so we can make enough progress on

01:34:00 --> 01:34:05
knowing what to look for and how to how

01:34:02 --> 01:34:07
to know when we found it but if you want

01:34:04 --> 01:34:08
o talk about flexible planning things

01:34:06 --> 01:34:11
that are more like cognition that you

01:34:07 --> 01:34:13
know go on in prefrontal cortex right I

01:34:10 --> 01:34:15
this point I don't I don't think that

01:34:12 --> 01:34:16
just by recording from those neurons

01:34:14 --> 01:34:18
we're gonna be able to answer those

01:34:15 --> 01:34:20
questions in a meaningful engineering

01:34:17 --> 01:34:22
way a way that that any engineer

01:34:19 --> 01:34:24
software a hardware whatever could

01:34:21 --> 01:34:25
really say yeah okay I get it I get

01:34:23 --> 01:34:27
hose insights in a way that I can

01:34:24 --> 01:34:29
engineer with and that's what my goal is

01:34:26 --> 01:34:30
right so my goal that's my goal to do at

01:34:28 --> 01:34:32
he software level the hardware level or

01:34:29 --> 01:34:34
the entire systems level connecting them

01:34:31 --> 01:34:36
and I think that you know we can do that

01:34:33 --> 01:34:37
by taking what we're doing and bringing

01:34:35 --> 01:34:39
into contact with people studying neural

01:34:36 --> 01:34:41
circuits but I don't think you can you

01:34:38 --> 01:34:42
can leave this level out and just go

01:34:40 --> 01:34:43
straight to the neural circuits and I

01:34:41 --> 01:34:45
think the more you have the more

01:34:42 --> 01:34:47
progress we make the more we can help

01:34:44 --> 01:34:48
eople who are studying at the neural

01:34:46 --> 01:34:50
circuit level and they can help us

01:34:47 --> 01:34:51
address these other engineering

01:34:49 --> 01:34:53
questions that we don't really have

01:34:50 --> 01:34:55
access to like the power issue or the

01:34:52 --> 01:34:57
speed issue thank you okay thanks that

01:34:54 --> 01:34:58
was great I thought maybe it'd give

01:34:56 --> 01:35:02
Jessica Han

01:34:57 --> 01:35:02
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
