---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "bVP3q8-e4sE"
title: "a16z Podcast | The Cloud Atlas to Real Quantum Computing"
video_url: "https://www.youtube.com/watch?v=bVP3q8-e4sE"
thumbnail_url: "https://i.ytimg.com/vi/bVP3q8-e4sE/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=bVP3q8-e4sE"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:39:35.000Z"
upload_date: "2019-01-02"
duration_seconds: 1515
duration_human: "25:15"
view_count: 129
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:02:37.905Z"
---

# a16z Podcast | The Cloud Atlas to Real Quantum Computing

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=bVP3q8-e4sE
- video_id: bVP3q8-e4sE
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:39:35.000Z
- upload_date: 2019-01-02
- duration: 25:15
- view_count: 129
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

A funny thing happened on the way to quantum computing: Unlike other major shifts in classic computing before it, it begins -- not ends -- with The Cloud. That's because quantum computers today are more like "physics experiments in a can" that most companies can't use yet -- unless you use software, not just as cloud infrastructure for accessing this computing power commercially but for also building the killer app on top of it. What will that killer app be? With quantum virtual machines and special languages for connecting and trading off classic and quantum computing, companies and developers may be able to help figure that out, not to mention get ahead of this next computing platform (before it surprises them).

Ok, sounds great. Only the old rules don't all apply: You have to fundamentally rethink algorithms for quantum computing, just as with previous waves of high-performance computing before it -- from CPU to GPU to TPU and now to QPU. Because as chips evolve, so do algorithms, and vice versa, in an iterative way. But the chicken-egg question of which came first (the algorithm or the specialized hardware for running it?) doesn't matter as much because the answer itself involves herding chickens: "You're trying to get all of these independent processes to run and cooperate with each other to produce an answer and do so in a way that was faster" than the other way before it, observes Jeff Cordova, interim head of software engineering at quantum computing startup Rigetti Computing. "In hindsight, we really care about the statistical model, not watching the entire movie", shares general partner Vijay Pande, based on his own experiences in the world of high-performance computing.

In this episode of the a16z Podcast (in conversation with Sonal Chokshi), Cordova and Pande talk all about the realities of engineering -- and using -- the next computing platform beyond scientific research and hardening it into practical, commercial, industrial-scale reality. Luckily, the cloud provides a map to get us there, today.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
hi everyone welcome to the a 6nc podcast

00:00:02 --> 00:00:06
I am sonal and we're here today to talk

00:00:03 --> 00:00:07
more about quantum computing and for

00:00:05 --> 00:00:09
those of you that want more of like a

00:00:06 --> 00:00:11
primer on what it is and how it works

00:00:08 --> 00:00:12
definitely listen to our other podcast

00:00:10 --> 00:00:14
but you don't have to listen to that

00:00:11 --> 00:00:15
other podcast for this one the goal

00:00:13 --> 00:00:17
today is really talk about what it means

00:00:14 --> 00:00:18
to actually build something that's so

00:00:16 --> 00:00:20
cutting edge like that's the buzzword

00:00:17 --> 00:00:21
that we throw around so lightly and what

00:00:19 --> 00:00:22
we'd like to do in this podcast is

00:00:20 --> 00:00:24
actually really like break that down and

00:00:21 --> 00:00:26
joining us to have that conversation we

00:00:23 --> 00:00:27
have jeff cordova who's the head of

00:00:25 --> 00:00:29
software engineering at Righetti and

00:00:26 --> 00:00:31
then we also have a cnc general partner

00:00:28 --> 00:00:33
Vijay Pandey who's on the board of

00:00:30 --> 00:00:34
Akkadian has a long history actually in

00:00:32 --> 00:00:36
the world of high performance competing

00:00:33 --> 00:00:38
because you used to do fold at home you

00:00:35 --> 00:00:40
know there's been a long history of

00:00:37 --> 00:00:42
advances in computer architecture you

00:00:39 --> 00:00:44
know the computers that we learned as

00:00:41 --> 00:00:45
kids were very straightforward but then

00:00:43 --> 00:00:47
with high performance massively parallel

00:00:44 --> 00:00:49
machines like folding at home we

00:00:46 --> 00:00:51
couldn't just take our algorithms and

00:00:48 --> 00:00:54
convert it you'd have to really rethink

00:00:50 --> 00:00:55
the problem when you say highly parallel

00:00:53 --> 00:00:57
machines you literally mean like

00:00:54 --> 00:00:58
thousands and thousands of computers

00:00:56 --> 00:01:00
running in parallel next to each other

00:00:57 --> 00:01:01
or not necessarily physically close to

00:00:59 --> 00:01:02
each other I mean in fact in your case

00:01:00 --> 00:01:04
it was just tribute across other

00:01:01 --> 00:01:06
people's downtime on their laptops it

00:01:03 --> 00:01:08
was like steady yeah I think I said he

00:01:05 --> 00:01:11
came out basically 6 months before we

00:01:07 --> 00:01:12
did so this was first as October of 2004

00:01:10 --> 00:01:13
the projects now been running for almost

00:01:11 --> 00:01:16
20 years so instead of finding alien

00:01:12 --> 00:01:18
worlds you guys are focusing on protein

00:01:15 --> 00:01:19
folding yeah exactly and understanding

00:01:17 --> 00:01:21
especially the intersection of what

00:01:18 --> 00:01:22
compute could do in biology in that case

00:01:20 --> 00:01:24
they're doing calculations for

00:01:21 --> 00:01:25
understanding aspects of biology of

00:01:23 --> 00:01:27
protein and the interesting thing about

00:01:24 --> 00:01:30
hat at least my recollection of it is

00:01:26 --> 00:01:31
that no one thought that algorithm would

00:01:29 --> 00:01:34
work it didn't look anything like the

00:01:30 --> 00:01:35
previous algorithms except that it was

00:01:33 --> 00:01:37
also doing some kind of chemistry that

00:01:34 --> 00:01:39
was interesting and then they deployed

00:01:36 --> 00:01:40
it and they got it working and they

00:01:38 --> 00:01:43
continued to make it work and now it's

00:01:39 --> 00:01:44
like the primary way that you can fold

00:01:42 --> 00:01:46
proteins in some ways they're right

00:01:43 --> 00:01:48
hose impossible was impossible to take

00:01:45 --> 00:01:50
xisting algorithms and just like shove

00:01:47 --> 00:01:52
it down to a very different architecture

00:01:49 --> 00:01:54
you basically had to rethink the problem

00:01:51 --> 00:01:55
and we went through this again when GPUs

00:01:53 --> 00:01:58
came out we actually were some of the

00:01:54 --> 00:02:01
first applications on GPUs even before

00:01:57 --> 00:02:03
programming languages exist on ji-hae

00:02:00 --> 00:02:04
GPUs we mean graphical processing units

00:02:02 --> 00:02:06
like the kind of Nvidia makes and other

00:02:03 --> 00:02:07
companies make that were originally used

00:02:05 --> 00:02:08
for the gaming industry but they're now

00:02:06 --> 00:02:11
being used widely deployed in machine

00:02:07 --> 00:02:12
learning exactly yeah GPUs have a great

00:02:10 --> 00:02:13
flowing point performance useful for

00:02:11 --> 00:02:15
calculation and

00:02:12 --> 00:02:18
again we have to rethink the algorithm

00:02:14 --> 00:02:19
now for massively parallel GPUs and I

00:02:17 --> 00:02:21
think what we're seeing now with cloud

00:02:18 --> 00:02:23
computing is yet again our rethinking of

00:02:20 --> 00:02:25
the problem like how we're gonna take

00:02:22 --> 00:02:27
something that's so powerful yet so

00:02:24 --> 00:02:29
different and and try to do something

00:02:26 --> 00:02:31
really grand with it one of the the key

00:02:28 --> 00:02:32
things to understand here is what

00:02:30 --> 00:02:35
quantum computing is and how it compares

00:02:31 --> 00:02:37
to classical computing Vijay was talking

00:02:34 --> 00:02:38
about in the early days of Vasiliy

00:02:36 --> 00:02:40
parallel machines there was kind of an

00:02:37 --> 00:02:42
expression amongst the engineers writing

00:02:39 --> 00:02:44
software for those which is it's like

00:02:41 --> 00:02:47
trying to herd chickens you're trying to

00:02:43 --> 00:02:49
get all of these independent processes

00:02:46 --> 00:02:51
to run and cooperate with each other to

00:02:48 --> 00:02:52
produce an answer and do so in a way

00:02:50 --> 00:02:55
that was faster than just running on a

00:02:51 --> 00:02:56
really fast CPU why does it matter by

00:02:54 --> 00:02:58
the way that it was faster than running

00:02:55 --> 00:02:59
on a really fast CPU but if you can get

00:02:57 --> 00:03:00
good enough results on the alternative

00:02:58 --> 00:03:02
why would you even bother because it

00:02:59 --> 00:03:04
because you can scale the problem up

00:03:01 --> 00:03:06
because in theory you can then add more

00:03:03 --> 00:03:07
processors and even scale up further and

00:03:05 --> 00:03:09
that was the whole promise of parallel

00:03:06 --> 00:03:11
computing which started you know several

00:03:08 --> 00:03:14
decades ago and really honestly with

00:03:10 --> 00:03:17
systems like CUDA what's Gouda CUDA

00:03:13 --> 00:03:19
is the invidious language for doing

00:03:16 --> 00:03:21
parallel processing ok and there's no

00:03:18 --> 00:03:23
language yet like CUDA for GPUs to your

00:03:20 --> 00:03:25
point well there actually is quantum

00:03:22 --> 00:03:26
Universal instruction language I love

00:03:24 --> 00:03:28
that as quill I love the play on that

00:03:25 --> 00:03:30
word it kind of brings to mind pen in

00:03:27 --> 00:03:32
hand and you're doing stuff yeah I know

00:03:29 --> 00:03:34
the way that it is similar to the CUDA

00:03:31 --> 00:03:37
language for GPUs is it sews together

00:03:33 --> 00:03:39
the way you interface quantum computers

00:03:36 --> 00:03:41
with classical computers and without

00:03:38 --> 00:03:43
hat it might be difficult to actually

00:03:40 --> 00:03:45
use near-term quantum computers and the

00:03:42 --> 00:03:46
reason for that is just because unlike

00:03:44 --> 00:03:48
classical computers which you can kind

00:03:45 --> 00:03:51
of run for days and weeks or in perhaps

00:03:47 --> 00:03:52
years at a time quantum computers kind

00:03:50 --> 00:03:53
of run in bursts of a hundred

00:03:51 --> 00:03:55
microseconds they're not quite stable

00:03:52 --> 00:03:57
yet like you don't have the full control

00:03:54 --> 00:03:59
but they're getting they're getting so

00:03:56 --> 00:04:00
we can run them for longer periods of

00:03:58 --> 00:04:02
time in that period of time you can do

00:03:59 --> 00:04:04
incredibly interesting and complex

00:04:01 --> 00:04:07
calculations that you actually can't be

00:04:03 --> 00:04:09
done at least theoretically on classical

00:04:06 --> 00:04:11
computers but you need a place to store

00:04:08 --> 00:04:12
the results and to interrogate the

00:04:10 --> 00:04:14
results and to do other kinds of

00:04:11 --> 00:04:15
classical post-processing on the data

00:04:13 --> 00:04:17
that you produce out of the quantum

00:04:14 --> 00:04:18
computer so there needs to be a way to

00:04:16 --> 00:04:20
interface the two that's where cool

00:04:17 --> 00:04:23
comes in is is hooking together the

00:04:19 --> 00:04:25
classical and in quantum machine we call

00:04:22 --> 00:04:27
that classical quantum hybrid computing

00:04:24 --> 00:04:29
this is now becoming a common pair

00:04:26 --> 00:04:33
at first there was just a CPU then CPU

00:04:28 --> 00:04:34
plus GPU CPU plus TPU right so central

00:04:32 --> 00:04:36
processor unit geographical processing

00:04:33 --> 00:04:38
unit - tensor processing units and

00:04:35 --> 00:04:39
processing unit each one of these things

00:04:37 --> 00:04:41
are specialized hardware for a

00:04:38 --> 00:04:42
particular task and that can do things

00:04:40 --> 00:04:43
that the other ones really just can't

00:04:41 --> 00:04:45
but you know it's interesting because

00:04:42 --> 00:04:47
you painted that as a continuum like CPU

00:04:44 --> 00:04:49
- cheap - GPU to GPU and there is some

00:04:46 --> 00:04:51
sort of continuum like effect but it

00:04:48 --> 00:04:52
feels like when you move into quantum

00:04:50 --> 00:04:53
computing that it's actually more

00:04:51 --> 00:04:55
discrete than continuous like you're

00:04:52 --> 00:04:57
actually doing something very

00:04:54 --> 00:04:59
qualitatively different yeah it's a

00:04:56 --> 00:05:01
completely different type of computation

00:04:58 --> 00:05:02
GPUs were intended for graphics but

00:05:00 --> 00:05:05
powerful for many things and now

00:05:01 --> 00:05:07
optimize a bit for machine learning GPUs

00:05:04 --> 00:05:08
have been designed from the ground up

00:05:06 --> 00:05:09
for machine learning and there's

00:05:07 --> 00:05:11
interesting pros and cons of each

00:05:08 --> 00:05:12
approach calling computing is actually

00:05:10 --> 00:05:15
different still we've done a little bit

00:05:11 --> 00:05:16
more for me about how I mean first off

00:05:14 --> 00:05:18
understanding the hardware is probably

00:05:16 --> 00:05:22
going to be important part of things I

00:05:17 --> 00:05:23
mean like to prob code a CPU okay no to

00:05:21 --> 00:05:25
code a GPU you actually have to

00:05:22 --> 00:05:26
understand memory access and things like

00:05:24 --> 00:05:28
that reasonably well to have a high

00:05:25 --> 00:05:30
performing a loretta

00:05:27 --> 00:05:32
fact that we have to rethink our

00:05:29 --> 00:05:34
algorithms is really nothing new the way

00:05:31 --> 00:05:36
that people would understand protein

00:05:33 --> 00:05:38
folding is that they would run one very

00:05:35 --> 00:05:41
long trajectory and then sort of watch

00:05:37 --> 00:05:42
the movie of what happened and all of

00:05:40 --> 00:05:44
this is inherently stochastic and

00:05:41 --> 00:05:45
statistical anyways and so once you

00:05:43 --> 00:05:47
realize what you really want to be doing

00:05:44 --> 00:05:49
is statistical inference you can do

00:05:46 --> 00:05:52
sucessful inference with many shorter

00:05:48 --> 00:05:53
trajectories anji standards can became a

00:05:51 --> 00:05:55
complete sort of different way to think

00:05:52 --> 00:05:57
about the problems and in the end in

00:05:54 --> 00:05:58
hindsight we really care about the the

00:05:56 --> 00:06:00
statistical model not the movie so many

00:05:58 --> 00:06:02
problems have been done because the way

00:05:59 --> 00:06:03
they didn't done because we've had only

00:06:01 --> 00:06:05
access to classical computers okay so

00:06:02 --> 00:06:06
but how does this apply then to quantum

00:06:04 --> 00:06:08
computing so you do have to think about

00:06:05 --> 00:06:10
he hardware but this is maybe on maybe

00:06:07 --> 00:06:12
a notch above that where you have to

00:06:09 --> 00:06:14
think about that nature the noise models

00:06:11 --> 00:06:15
and other aspects that are more unique

00:06:13 --> 00:06:17
to the hardware the appealing thing

00:06:14 --> 00:06:19
about con computing is that it allows

00:06:16 --> 00:06:21
you to take advantage of these mixed

00:06:18 --> 00:06:23
States to be able to take to the cue

00:06:20 --> 00:06:25
classical operations and do it in

00:06:22 --> 00:06:28
essentially in one step yeah one way

00:06:24 --> 00:06:30
that we think about it is that nature is

00:06:27 --> 00:06:32
inherently quantum mechanical you look

00:06:29 --> 00:06:33
outside and you see the light bouncing

00:06:31 --> 00:06:34
off the trees and that's a quantum

00:06:32 --> 00:06:36
echanical process and it turns out it's

00:06:33 --> 00:06:38
very difficult to do lots of those

00:06:35 --> 00:06:40
simulations on a classical computer

00:06:37 --> 00:06:41
because a classical computer isn't

00:06:39 --> 00:06:43
quantum-mechanical thing it's

00:06:40 --> 00:06:45
deterministic boolean logic you can kind

00:06:42 --> 00:06:47
of think of quantum mechanics as

00:06:44 --> 00:06:49
probabilistic in nature so one of the

00:06:46 --> 00:06:51
rethink of the algorithms that you have

00:06:48 --> 00:06:52
to do is that we have to rethink how one

00:06:50 --> 00:06:54
constructs algorithms so that the

00:06:51 --> 00:06:56
outcome of them is in probabilistic

00:06:53 --> 00:06:58
sense what would the answer we're

00:06:55 --> 00:07:01
seeking no that's a very different way

00:06:57 --> 00:07:03
of thinking about about anything frankly

00:07:00 --> 00:07:05
more used to more cause and effect in

00:07:02 --> 00:07:07
our life and we see this macroscopic

00:07:04 --> 00:07:08
ause an effect that's deterministic it

00:07:06 --> 00:07:10
happens the same way all the time

00:07:07 --> 00:07:11
but these quantum processors actually

00:07:09 --> 00:07:13
give you different answers every time

00:07:10 --> 00:07:15
you run them and engineering the reality

00:07:12 --> 00:07:17
of quantum computing how does that play

00:07:14 --> 00:07:18
out in practice well what one thing one

00:07:16 --> 00:07:20
thing that you end up having to do when

00:07:17 --> 00:07:22
you write quantum algorithms is you have

00:07:19 --> 00:07:24
to run them a lot of times and then take

00:07:21 --> 00:07:26
statistics on the answer to find out but

00:07:23 --> 00:07:27
he answer that nature would give is and

00:07:25 --> 00:07:30
that's a very different way of thinking

00:07:26 --> 00:07:31
about computation it's it turns out in

00:07:29 --> 00:07:32
at least in computer science over the

00:07:30 --> 00:07:35
last couple of decades that these

00:07:31 --> 00:07:38
probabilistic algorithms and the like

00:07:34 --> 00:07:40
have become very important in in solving

00:07:37 --> 00:07:43
large-scale problems you can kind of

00:07:39 --> 00:07:45
sample a large enough space of answers

00:07:42 --> 00:07:46
to get a pretty good answer even though

00:07:44 --> 00:07:48
you haven't looked through the whole

00:07:45 --> 00:07:49
space and it turns out that quantum

00:07:47 --> 00:07:52
computers can actually search

00:07:48 --> 00:07:55
combinatorially a huge space for certain

00:07:51 --> 00:07:57
kinds of problems and actually find the

00:07:54 --> 00:07:58
real thing that nature would do and

00:07:56 --> 00:08:00
that's just a fascinating concept to

00:07:57 --> 00:08:01
think of what you could do with that

00:07:59 --> 00:08:02
's just fascinating to me especially

00:08:00 --> 00:08:04
because I think about the history of

00:08:01 --> 00:08:07
just of Statistics and the whole science

00:08:03 --> 00:08:09
was built on this idea of having limited

00:08:06 --> 00:08:10
sample size and sample sets and then you

00:08:08 --> 00:08:12
kind of move to this world where it

00:08:09 --> 00:08:13
changed entire fields like when I think

00:08:11 --> 00:08:14
of the early days of natural language

00:08:12 --> 00:08:16
processing versus now where you have

00:08:13 --> 00:08:17
huge data sets to actually be able to

00:08:15 --> 00:08:19
learn on versus having to be

00:08:16 --> 00:08:21
parsimonious about your calculations and

00:08:18 --> 00:08:21
how you go about it and now what you're

00:08:20 --> 00:08:23
saying which i think is completely

00:08:20 --> 00:08:25
mind-boggling is you don't have to go at

00:08:22 --> 00:08:27
he sample set you can go to the reality

00:08:24 --> 00:08:29
of the actual population capital it's

00:08:26 --> 00:08:30
pretty neat yeah and so here's an

00:08:28 --> 00:08:32
interesting thing is that for a

00:08:29 --> 00:08:33
classical computer its power goes like 2

00:08:31 --> 00:08:36
to the N for a quantum computer goes

00:08:32 --> 00:08:38
like 2 to the Q which itself is 2 to the

00:08:35 --> 00:08:40
N and with the new technologies using

00:08:37 --> 00:08:42
silicon qubits the number of qubits

00:08:39 --> 00:08:44
follows Moore's law and so in this case

00:08:41 --> 00:08:46
the number the number of qubits is more

00:08:43 --> 00:08:47
akin to like the number of transistors

00:08:45 --> 00:08:49
and so here the size of the quantum

00:08:46 --> 00:08:51
computer would roughly double every year

00:08:48 --> 00:08:52
so it's like 2 to the 2 to the end and

00:08:50 --> 00:08:54
here's why

00:08:51 --> 00:08:56
is going to catch a lot of people by

00:08:53 --> 00:08:57
surprise which is it what will happen is

00:08:55 --> 00:08:59
a qualm computer at first will seem like

00:08:56 --> 00:09:01
it won't be all that useful it'll be

00:08:59 --> 00:09:03
low the number of qubits that you need

00:09:00 --> 00:09:05
maybe you need a hundred qubits to solve

00:09:02 --> 00:09:07
the problem and the existing machine

00:09:04 --> 00:09:09
only has 64 and so a classic computer

00:09:06 --> 00:09:11
would easily transfer but then the next

00:09:08 --> 00:09:13
year the quantum computer has 128 qubits

00:09:10 --> 00:09:14
and suddenly it handily beats any

00:09:12 --> 00:09:16
classic computer that ever existed for

00:09:14 --> 00:09:17
that problem you know what that is it's

00:09:15 --> 00:09:19
actually just basically something that's

00:09:16 --> 00:09:21
extremely difficult for human beings to

00:09:18 --> 00:09:22
process mentally in our own computer

00:09:20 --> 00:09:24
sloshing around in our heads which is

00:09:21 --> 00:09:25
exponential thinking in general when

00:09:23 --> 00:09:27
this is hyper exponential which makes it

00:09:24 --> 00:09:29
even harder and I think what that means

00:09:26 --> 00:09:31
is that for different applications

00:09:28 --> 00:09:33
there'll be a different number of qubits

00:09:30 --> 00:09:35
that will be that boundary from where

00:09:32 --> 00:09:38
the classical machine loses and because

00:09:34 --> 00:09:39
you have Moore's law kicked in here it

00:09:37 --> 00:09:41
will just be this very sharp change

00:09:38 --> 00:09:42
people will think the quantum computer

00:09:40 --> 00:09:43
won't be useful and all of a sudden it

00:09:41 --> 00:09:45
will dominate so it's like the classic

00:09:42 --> 00:09:47
example where it happens very fast very

00:09:44 --> 00:09:49
suddenly like it's accelerating

00:09:46 --> 00:09:51
basically I would say the couple decades

00:09:48 --> 00:09:54
I've spent Selleck invalids I've seen

00:09:50 --> 00:09:55
the movie a couple times of

00:09:53 --> 00:09:57
and only a couple times because there

00:09:54 --> 00:09:59
isn't happened very often and one of the

00:09:56 --> 00:10:00
lessons I've learned from that is that

00:09:58 --> 00:10:02
it takes it takes a lot of people to

00:09:59 --> 00:10:04
build a new market it's it's not

00:10:01 --> 00:10:06
possible for one company to build a new

00:10:03 --> 00:10:08
market and you get innovations from all

00:10:05 --> 00:10:09
over the place and at some point you

00:10:07 --> 00:10:11
reach that accelerating point then and

00:10:08 --> 00:10:12
then the whole ecosystem benefits but

00:10:10 --> 00:10:13
here's some real fundamental building

00:10:11 --> 00:10:15
blocks when you say that you've seen

00:10:12 --> 00:10:17
that movie before but a few times there

00:10:14 --> 00:10:19
are some things that have to happen in

00:10:16 --> 00:10:20
order for that to become a reality

00:10:18 --> 00:10:22
and when you think about the history of

00:10:19 --> 00:10:23
computing and I actually think we should

00:10:21 --> 00:10:25
be careful about this too because we

00:10:22 --> 00:10:26
can't necessarily extrapolate from the

00:10:24 --> 00:10:28
history of classical computing but

00:10:25 --> 00:10:29
hat's all we have to go on so that said

00:10:27 --> 00:10:31
how do we think it's gonna play out

00:10:28 --> 00:10:32
given what we observed before and where

00:10:30 --> 00:10:34
we're going next one thing to not forget

00:10:31 --> 00:10:36
is that people have been working on

00:10:33 --> 00:10:38
quantum computing for a couple decades

00:10:35 --> 00:10:41
and the kind of the remarkable thing is

00:10:37 --> 00:10:43
all of that work has reached a point

00:10:40 --> 00:10:44
where it's moved from research into

00:10:42 --> 00:10:46
engineering in terms of building the

00:10:43 --> 00:10:49
machine and that's why we believe that

00:10:45 --> 00:10:52
we can build anti BM and Microsoft and

00:10:48 --> 00:10:54
Google and the other players in this

00:10:51 --> 00:10:55
ecosystem can also believe that has to

00:10:53 --> 00:10:57
do with the fact that they use the

00:10:54 --> 00:10:59
technology that was been perfected in

00:10:56 --> 00:11:01
Silicon Valley in other places over many

00:10:58 --> 00:11:03
decades so we know how to we know

00:11:00 --> 00:11:04
how to make these lots of them if we get

00:11:02 --> 00:11:05
it the first one working when you say we

00:11:03 --> 00:11:07
know how to make it

00:11:04 --> 00:11:09
hat no how it's a it's the know-how of

00:11:06 --> 00:11:11
semiconductor manufacturing the

00:11:08 --> 00:11:13
superconducting circuits we made are

00:11:10 --> 00:11:15
using standard semiconductor

00:11:12 --> 00:11:17
manufacturing technologies what's

00:11:14 --> 00:11:18
complicated about them is writing the

00:11:16 --> 00:11:19
software to figure out how to how to

00:11:17 --> 00:11:22
make them do what they're supposed to do

00:11:18 --> 00:11:24
and that that's there's a lot of really

00:11:21 --> 00:11:25
interesting physics and mathematics and

00:11:23 --> 00:11:26
computer science that goes into that

00:11:24 --> 00:11:28
yeah with that said though I think this

00:11:25 --> 00:11:30
reminds me of the early days of

00:11:27 --> 00:11:33
computing we're just getting your hands

00:11:29 --> 00:11:35
on the device is sort of getting a

00:11:32 --> 00:11:37
ticket to sort of something that is

00:11:34 --> 00:11:39
really a part of the future but most

00:11:36 --> 00:11:41
kids won't be able to have a qualm

00:11:38 --> 00:11:43
computer in their in their house they're

00:11:41 --> 00:11:45
probably a couple million dollars and

00:11:42 --> 00:11:46
like that like with cloud efforts or

00:11:44 --> 00:11:48
something where this could be so much

00:11:45 --> 00:11:50
more broadly available what do you mean

00:11:47 --> 00:11:51
by the economics won't necessarily have

00:11:49 --> 00:11:53
the Moore's law property of becoming

00:11:50 --> 00:11:55
cheaper necessarily it will it's just

00:11:52 --> 00:11:57
hat these are more akin to maybe the

00:11:54 --> 00:11:58
arly days of IBM mainframe and so there

00:11:56 --> 00:12:01
will be a few of them in the world at

00:11:57 --> 00:12:04
first but the differences in those early

00:12:00 --> 00:12:06
days IBM mainframes you know a kid in

00:12:03 --> 00:12:08
Asia or in the Midwest but not people

00:12:05 --> 00:12:09
have access to one no but what it's

00:12:07 --> 00:12:11
funny is that the analogy works in

00:12:08 --> 00:12:12
another way though that is similar which

00:12:10 --> 00:12:14
is that was the original cloud and the

00:12:11 --> 00:12:15
sense of physically located because

00:12:13 --> 00:12:17
frankly we don't really care what the

00:12:14 --> 00:12:19
cloud is located right and today we just

00:12:16 --> 00:12:21
care about sharing and time sharing that

00:12:18 --> 00:12:22
hose resources and in those days people

00:12:20 --> 00:12:24
did actually have check-in and check-out

00:12:21 --> 00:12:25
sheets to go use the mainframe for

00:12:23 --> 00:12:26
whatever application there was but I

00:12:24 --> 00:12:28
think the point that you're making even

00:12:25 --> 00:12:30
more valuable is that when it does go

00:12:27 --> 00:12:32
into so many hands to that kid in Asia

00:12:29 --> 00:12:34
the kid in the Midwest somewhere else

00:12:31 --> 00:12:36
we are completely surprised by the

00:12:33 --> 00:12:38
applications people come up with because

00:12:35 --> 00:12:41
we the inventors have never been good at

00:12:37 --> 00:12:43
inventing predicting what their tools

00:12:40 --> 00:12:44
will lead to of what people can do when

00:12:42 --> 00:12:47
you put that ingenuity in people's hands

00:12:43 --> 00:12:49
yeah building cloud access into how you

00:12:46 --> 00:12:50
get at a quantum computer will quicken

00:12:48 --> 00:12:52
the pace at which the killer apps are

00:12:49 --> 00:12:53
found instead of there being one like

00:12:51 --> 00:12:55
there wasn't the early days of the PC

00:12:52 --> 00:12:56
and electronic spread we might see a

00:12:54 --> 00:12:58
half a dozen of them pop up all of a

00:12:56 --> 00:13:00
sudden I mean it just feels like very

00:12:57 --> 00:13:02
premature to be talking about cloud

00:12:59 --> 00:13:03
computing before quantum computing when

00:13:01 --> 00:13:05
you think about the history of classical

00:13:02 --> 00:13:08
computing and how long it actually took

00:13:04 --> 00:13:10
us to get went to an AWS like state so a

00:13:07 --> 00:13:12
where are we and be like what's your

00:13:09 --> 00:13:14
view on where we should go to get that

00:13:11 --> 00:13:16
's really that's really an excellent

00:13:13 --> 00:13:18
question so it turns out that we

00:13:15 --> 00:13:19
actually have quantum computers today

00:13:17 --> 00:13:21
we're

00:13:18 --> 00:13:22
it's just that their software their

00:13:20 --> 00:13:24
software simulators we call em and

00:13:21 --> 00:13:26
wantin virtual machine you can run a

00:13:23 --> 00:13:30
quantum virtual machine in software up

00:13:25 --> 00:13:33
to about 30 or so qubits and what that

00:13:29 --> 00:13:35
means is that people can access and

00:13:32 --> 00:13:37
practice quantum programming on a

00:13:34 --> 00:13:39
quantum simulator before the hardware's

00:13:36 --> 00:13:41
here and get ready that's mind boggling

00:13:38 --> 00:13:42
I'm glad you brought that up because we

00:13:40 --> 00:13:44
need to hear that the number one

00:13:41 --> 00:13:46
question I usually get asked is well gee

00:13:43 --> 00:13:48
is quantum computing real or science

00:13:45 --> 00:13:49
fiction when's it going to be here and

00:13:47 --> 00:13:51
the answer is it's here now but it's in

00:13:48 --> 00:13:53
the form of software and that will

00:13:50 --> 00:13:54
eventually be surpassed with a real

00:13:52 --> 00:13:55
piece of hardware but you can actually

00:13:53 --> 00:13:57
do a real quantum programming on the

00:13:54 --> 00:13:59
software that's important because I

00:13:56 --> 00:14:01
think that wasn't true in the previous

00:13:58 --> 00:14:03
world of computing right and we had no

00:14:00 --> 00:14:04
cloud we couldn't write access to a

00:14:02 --> 00:14:07
piece of software to everybody providing

00:14:03 --> 00:14:08
cloud access to quantum computing in the

00:14:06 --> 00:14:10
quantum simulator in the early days has

00:14:07 --> 00:14:12
kind of two main values and and that

00:14:09 --> 00:14:14
falls into two camps there's customers

00:14:11 --> 00:14:16
who are interested in how do you use

00:14:13 --> 00:14:17
quantum computing or quantum algorithms

00:14:15 --> 00:14:19
to solve a problem that I have and then

00:14:16 --> 00:14:21
on the other side we have this entire

00:14:18 --> 00:14:22
community of enthusiasts the people who

00:14:20 --> 00:14:24
are going to find those killer apps

00:14:21 --> 00:14:27
I would actually even maybe very

00:14:23 --> 00:14:28
simplified simply simplify it to people

00:14:26 --> 00:14:30
who have needs and people who have once

00:14:27 --> 00:14:31
and essentially just kind of getting

00:14:29 --> 00:14:34
right in the middle of that yeah and

00:14:30 --> 00:14:36
having a centralized place to both to

00:14:33 --> 00:14:38
express the need and put the solutions

00:14:35 --> 00:14:40
there for those as well the big point

00:14:37 --> 00:14:42
you were making is that we're trying to

00:14:39 --> 00:14:44
get to this place where we can use cloud

00:14:41 --> 00:14:47
eployments including cloud simulations

00:14:43 --> 00:14:49
as a way to get there what happens next

00:14:46 --> 00:14:51
after that happens I think I think that

00:14:48 --> 00:14:54
once the cloud is cloud access to a

00:14:50 --> 00:14:56
quantum computation that's available

00:14:53 --> 00:14:58
then we can trying to reinvent these

00:14:55 --> 00:15:01
algorithms as quantum programs so an

00:14:57 --> 00:15:02
example that a lot of people are

00:15:00 --> 00:15:04
thinking about is how do you make

00:15:01 --> 00:15:05
machine learning go faster machine

00:15:03 --> 00:15:07
learning has an inner loop or an inner

00:15:04 --> 00:15:09
part of the algorithm that's an

00:15:06 --> 00:15:10
optimization step an optimization step

00:15:08 --> 00:15:12
has to literally look through all

00:15:09 --> 00:15:14
combinations of things to find the right

00:15:11 --> 00:15:16
answer and so the cloud will help

00:15:13 --> 00:15:18
facilitate the discovery of such

00:15:15 --> 00:15:20
algorithms and then secondly it'll help

00:15:17 --> 00:15:22
you couple to the classical computer so

00:15:19 --> 00:15:24
that you can trade-off between the

00:15:21 --> 00:15:27
classical and where you can you can use

00:15:23 --> 00:15:29
cloud computing resources for your HPC

00:15:26 --> 00:15:30
or high-performance computing and you

00:15:28 --> 00:15:32
can couple up to a quantum computer so

00:15:29 --> 00:15:33
k so what I'm basically hearing is

00:15:31 --> 00:15:35
cloud while in classical computing took

00:15:32 --> 00:15:38
a while to get there cloud is actually

00:15:34 --> 00:15:39
now sort of like a pseudo infrastructure

00:15:37 --> 00:15:41
it's sort of a way basically for us to

00:15:38 --> 00:15:43
stitch together the reality where we

00:15:40 --> 00:15:44
want to be yeah it's it's a very natural

00:15:42 --> 00:15:46
delivery mechanism the natural delivery

00:15:43 --> 00:15:47
mechanism so why does that matter so

00:15:45 --> 00:15:48
that's because that's actually more

00:15:46 --> 00:15:51
about the consumption model and more

00:15:47 --> 00:15:54
about the go-to-market I mean SAS is

00:15:50 --> 00:15:56
really unique capabilities in terms of

00:15:53 --> 00:15:57
the fact that you ship one thing you

00:15:55 --> 00:16:00
don't have to support all these on-prem

00:15:56 --> 00:16:02
and and that's a whole separate sort of

00:15:59 --> 00:16:04
discussion I think here cloud alone is

00:16:01 --> 00:16:06
just very much empowerment and the

00:16:03 --> 00:16:08
ability to get this in many people's

00:16:05 --> 00:16:10
hands but all those other aspects will

00:16:07 --> 00:16:11
ayer on top once we get to the point

00:16:09 --> 00:16:13
hat there are these killer algorithms

00:16:10 --> 00:16:14
o beyond the delivery there's also this

00:16:12 --> 00:16:16
component though of stitching together

00:16:13 --> 00:16:17
this world of classic and quantum

00:16:15 --> 00:16:19
computing because it seems like the only

00:16:16 --> 00:16:21
way you'd be able to do that is by

00:16:18 --> 00:16:22
having cloud as a connective tissue

00:16:20 --> 00:16:24
which in those two worlds well it's not

00:16:21 --> 00:16:27
he only thing you need software and in

00:16:23 --> 00:16:29
particular you need some way of handing

00:16:26 --> 00:16:31
off the computation from the quantum

00:16:28 --> 00:16:33
piece to the classical piece and well

00:16:30 --> 00:16:35
can facilitate this transfer of

00:16:32 --> 00:16:37
information from the quantum computer to

00:16:34 --> 00:16:39
the classical computer and back like you

00:16:36 --> 00:16:40
can't actually store data on these

00:16:38 --> 00:16:42
quantum computers they're just literally

00:16:39 --> 00:16:43
at right now just compute engines just

00:16:41 --> 00:16:45
he amazing compute engine almost like

00:16:42 --> 00:16:46
Urkel process almost like a coprocessor

00:16:44 --> 00:16:49
ight so you have to have the data

00:16:45 --> 00:16:51
someplace else and so you need another

00:16:48 --> 00:16:53
place for the quantum computer to

00:16:50 --> 00:16:56
interface with the gift that data into

00:16:52 --> 00:16:57
store it's I think it's also important

00:16:55 --> 00:16:59
o understand that the other reason for

00:16:56 --> 00:17:01
clauses in days gone by we would build

00:16:58 --> 00:17:03
these complicated machines and we would

00:17:00 --> 00:17:05
install them on customer sites and

00:17:02 --> 00:17:07
premise well a quantum computer requires

00:17:04 --> 00:17:11
a cryogenic cooling system okay and it

00:17:06 --> 00:17:12
requires a special thermal and vibration

00:17:10 --> 00:17:14
stabilized platforms the quantum

00:17:11 --> 00:17:15
processors like the size of a quarter

00:17:13 --> 00:17:17
the rest of its the size of two or three

00:17:14 --> 00:17:20
refrigerators to house it and keep it

00:17:16 --> 00:17:24
cool at like a barely above zero degrees

00:17:19 --> 00:17:25
Kelvin way more complicated all that

00:17:23 --> 00:17:26
yeah yeah yep

00:17:24 --> 00:17:28
you lose cooling in the refrigerator

00:17:25 --> 00:17:30
maybe you damage the whole thing right

00:17:27 --> 00:17:31
so you never really at least in the

00:17:29 --> 00:17:33
arly days want to ever put those things

00:17:30 --> 00:17:34
on a customer site you want to put them

00:17:32 --> 00:17:36
in a secure facility someplace and

00:17:33 --> 00:17:38
provide cloud access or remote access

00:17:35 --> 00:17:40
you know so that's the other reason that

00:17:37 --> 00:17:42
what's the right delivery mechanism for

00:17:39 --> 00:17:43
this technology right when I should go

00:17:41 --> 00:17:44
back to this idea of the hybrid it's

00:17:42 --> 00:17:46
just so fascinating to me because one

00:17:43 --> 00:17:46
debate that plays out when you think of

00:17:45 --> 00:17:48
custom

00:17:45 --> 00:17:49
adopting next platform you had these

00:17:47 --> 00:17:51
arly adopters who are risk takers are

00:17:48 --> 00:17:52
gonna get ahead they're gonna try to

00:17:50 --> 00:17:54
adopt the new thing before it so they

00:17:51 --> 00:17:55
get a competitive edge and then you have

00:17:53 --> 00:17:56
people who are shy laggers and they sort

00:17:54 --> 00:17:58
of follow after everyone else has done

00:17:55 --> 00:18:00
it and yet people in the middle which I

00:17:57 --> 00:18:02
suspect as a reality of the fortune 500

00:17:59 --> 00:18:04
global 2000 where they're really want to

00:18:01 --> 00:18:05
get ahead but there's this tension

00:18:03 --> 00:18:07
between adopting something new and

00:18:04 --> 00:18:09
sticking to what you know in the old and

00:18:06 --> 00:18:12
one of the things I think is fascinating

00:18:08 --> 00:18:15
is that people a lot of people have done

00:18:11 --> 00:18:17
hybrid cloud in classical computing as a

00:18:14 --> 00:18:19
way to sort of straddle both worlds and

00:18:16 --> 00:18:21
maybe not the ideal because you actually

00:18:18 --> 00:18:24
want to leapfrog and go to cloud versus

00:18:20 --> 00:18:26
doing this intermediary step however in

00:18:23 --> 00:18:28
the case of quantum computing it's a

00:18:25 --> 00:18:30
necessity it's the only way to currently

00:18:27 --> 00:18:33
get there is what I'm hearing you say

00:18:29 --> 00:18:35
it's it's it's the it's a it's the right

00:18:32 --> 00:18:37
path to the first ones just because if

00:18:34 --> 00:18:39
we go back to the complexity of

00:18:36 --> 00:18:41
operating these systems that are

00:18:38 --> 00:18:43
ssentially physics experiments and I

00:18:40 --> 00:18:44
can the customers want the power they

00:18:42 --> 00:18:47
don't want the hassle of having to

00:18:43 --> 00:18:49
manage and operate these things now we

00:18:46 --> 00:18:50
have this beautiful thing called cloud

00:18:48 --> 00:18:52
computing and cloud access and so we

00:18:49 --> 00:18:53
actually understand how to build that

00:18:51 --> 00:18:55
infrastructure and host those systems

00:18:52 --> 00:18:58
and provide the right API calls and so

00:18:54 --> 00:19:00
n even beyond just cloud there's aspect

00:18:57 --> 00:19:01
of micro services that plays in that is

00:18:59 --> 00:19:03
very naturally because you can imagine

00:19:00 --> 00:19:05
quantum micro services that do a variety

00:19:02 --> 00:19:06
of things and that in a day where you

00:19:04 --> 00:19:08
have different servers doing different

00:19:05 --> 00:19:09
hings you're just doing API calls this

00:19:07 --> 00:19:11
would be just another server doing and

00:19:08 --> 00:19:12
that unique type of API call yeah and I

00:19:10 --> 00:19:14
think it's actually interesting cuz we

00:19:11 --> 00:19:15
talked briefly about VMs and virtual

00:19:13 --> 00:19:18
machines earlier and it's it's a next

00:19:14 --> 00:19:19
phase breaking things down to that sort

00:19:17 --> 00:19:20
of micro level yeah but the other thing

00:19:18 --> 00:19:22
that I think is really fascinating is

00:19:19 --> 00:19:23
how that plays out organizationally

00:19:21 --> 00:19:26
because then you have software

00:19:22 --> 00:19:27
developers and and product managers who

00:19:25 --> 00:19:29
are essentially running their own little

00:19:26 --> 00:19:30
business units many business units for

00:19:28 --> 00:19:32
owning their own projects soup-to-nuts

00:19:29 --> 00:19:33
right because it sort of self-contained

00:19:31 --> 00:19:35
in these little content and they'll

00:19:32 --> 00:19:36
bring in things as needed well I love

00:19:34 --> 00:19:37
hearing that to you because it's

00:19:35 --> 00:19:39
actually a way for big companies to

00:19:36 --> 00:19:40
actually embrace these experiments

00:19:38 --> 00:19:42
without even having to know what's

00:19:39 --> 00:19:43
erved inside the box yeah exactly

00:19:41 --> 00:19:44
because you don't have to you really

00:19:42 --> 00:19:46
don't have to that's out of the whole

00:19:43 --> 00:19:47
point of the whole cloud in the first

00:19:45 --> 00:19:48
place right there's kind of another way

00:19:46 --> 00:19:50
to think about cloud 2 which is this

00:19:47 --> 00:19:52
vertically integrated stack of

00:19:49 --> 00:19:54
Technology so at the very bottom you

00:19:51 --> 00:19:56
have you know the compute power itself

00:19:53 --> 00:19:58
and the operating systems and then I'll

00:19:55 --> 00:19:59
tear up from that you've got some

00:19:57 --> 00:20:01
intermediate programming layer

00:19:58 --> 00:20:03
and at the very top you have API

00:20:00 --> 00:20:04
services and micro services and things

00:20:02 --> 00:20:06
like that when there's gonna be a bunch

00:20:03 --> 00:20:08
of other hardware that's classical in a

00:20:05 --> 00:20:10
cloud like you know your network

00:20:07 --> 00:20:12
stack and your storage stack and your

00:20:09 --> 00:20:13
other classical compute stack

00:20:11 --> 00:20:15
on the software side though it's

00:20:12 --> 00:20:17
literally a soup to nuts ground-up

00:20:14 --> 00:20:19
effort where you have to build the

00:20:16 --> 00:20:21
operating system to run the quantum

00:20:18 --> 00:20:23
processor then up above that you need to

00:20:20 --> 00:20:25
actually build the quantum algorithms

00:20:22 --> 00:20:27
and quantum programming language so that

00:20:24 --> 00:20:29
you can program the quantum a group so

00:20:26 --> 00:20:30
nce it's all in one place you can kind

00:20:28 --> 00:20:32
of provide independent access to those

00:20:29 --> 00:20:34
different tiers depending on who wants

00:20:31 --> 00:20:36
to do stuff you can basically interact

00:20:33 --> 00:20:37
with that tower of software in different

00:20:35 --> 00:20:39
ways depending on what the level of

00:20:36 --> 00:20:41
granularity you want one question I have

00:20:38 --> 00:20:43
is when I think of a vertical stack

00:20:40 --> 00:20:45
seems like that's a problem it's too big

00:20:42 --> 00:20:47
for a single startup to tackle like it's

00:20:44 --> 00:20:49
omething that a Google can do and IBM

00:20:46 --> 00:20:51
can do why would I start up be able to

00:20:48 --> 00:20:53
do this vertical stacks are very

00:20:50 --> 00:20:55
difficult to build I so I agree with you

00:20:52 --> 00:20:56
about that but there's a couple of

00:20:54 --> 00:20:58
different things that make them

00:20:55 --> 00:21:00
difficult to build one is just the rate

00:20:57 --> 00:21:01
at which you can iterate on the

00:20:59 --> 00:21:02
different components to see what the

00:21:00 --> 00:21:04
vertical ization looks like you might

00:21:01 --> 00:21:06
guess incorrectly and usually do guess

00:21:03 --> 00:21:08
incorrectly then yeah these layers

00:21:05 --> 00:21:10
actually are next to each other but with

00:21:07 --> 00:21:12
rapid iteration you can find out exactly

00:21:09 --> 00:21:13
what the layers are and the closer they

00:21:11 --> 00:21:15
are the more you can iterate yeah this

00:21:12 --> 00:21:17
just the discovery of what those layers

00:21:14 --> 00:21:18
are and what the right layers are is an

00:21:16 --> 00:21:20
extremely important problem and I think

00:21:17 --> 00:21:22
a startup has a massive advantage or

00:21:19 --> 00:21:24
just because startups are essentially

00:21:21 --> 00:21:27
engines for agile engineering themselves

00:21:23 --> 00:21:29
our optimization boom I think it's it's

00:21:26 --> 00:21:30
maybe even more essential for building a

00:21:28 --> 00:21:32
quantum computer because there's so many

00:21:29 --> 00:21:34
different pieces that need to be quickly

00:21:31 --> 00:21:36
iterated on to figure out how they fit

00:21:33 --> 00:21:38
ogether and this is the difference

00:21:35 --> 00:21:39
between engineering and science the hard

00:21:37 --> 00:21:41
science problems have been solved but

00:21:38 --> 00:21:43
how do you build a superconducting qubit

00:21:40 --> 00:21:46
now do you send it a radio frequency

00:21:42 --> 00:21:48
data to program it the hard part now is

00:21:45 --> 00:21:49
going through all the different ways

00:21:47 --> 00:21:52
that these things can be hooked together

00:21:48 --> 00:21:53
to build a reliable machine there's an

00:21:51 --> 00:21:55
engineering problem now but it does

00:21:52 --> 00:21:57
require like rapid iteration and fast

00:21:54 --> 00:21:59
agile engineering teams in order to

00:21:56 --> 00:22:01
solve that problem okay so for people

00:21:58 --> 00:22:03
who are developers or engineers thinking

00:22:00 --> 00:22:04
about getting into quantum computing

00:22:02 --> 00:22:05
what does that mean for the people who

00:22:03 --> 00:22:07
are actually working on this stuff and

00:22:04 --> 00:22:09
who are trying to adopt this stuff

00:22:06 --> 00:22:10
wherever they are in that you know cycle

00:22:08 --> 00:22:11
of wanting to get ahead or catch up

00:22:09 --> 00:22:13
later

00:22:10 --> 00:22:14
well I'll use an analogy from there

00:22:12 --> 00:22:16
of Intel when they invented the

00:22:13 --> 00:22:17
microprocessor there was no there was no

00:22:15 --> 00:22:19
engineer that was called a

00:22:16 --> 00:22:20
microprocessor engineer it was a

00:22:18 --> 00:22:23
combination of electrical engineering

00:22:19 --> 00:22:24
and fabrication technology and maybe

00:22:22 --> 00:22:28
ven some computer science and so

00:22:23 --> 00:22:30
intimated investment to build a whole

00:22:27 --> 00:22:31
team of microprocessor engineers to

00:22:29 --> 00:22:33
figure out how to build the first

00:22:30 --> 00:22:34
microprocessor and actually build the

00:22:32 --> 00:22:38
successive generations and why does that

00:22:33 --> 00:22:40
matter it matters because the first

00:22:37 --> 00:22:41
hing you build isn't the thing that is

00:22:39 --> 00:22:43
usually the thing that dominates the

00:22:40 --> 00:22:44
market you have to do many iterations of

00:22:42 --> 00:22:47
it to finally get there you need a

00:22:43 --> 00:22:48
combination of skills in order to be the

00:22:46 --> 00:22:50
Jew the quantum engineer that's gonna

00:22:47 --> 00:22:52
build these machines you know the four

00:22:49 --> 00:22:54
thousand four microprocessor the very

00:22:51 --> 00:22:56
first microprocessor was built as I

00:22:53 --> 00:22:58
understand it for a calculator but it

00:22:55 --> 00:23:00
had that early application which could

00:22:57 --> 00:23:01
get to market and I think WOM chemistry

00:22:59 --> 00:23:03
could be that application that's

00:23:00 --> 00:23:06
omething now that one can do but

00:23:02 --> 00:23:10
here's limits in the accuracy due to

00:23:05 --> 00:23:12
the expense and time so the four n atoms

00:23:09 --> 00:23:14
of the most expensive algorithms scale

00:23:11 --> 00:23:17
like n factorial now there are more

00:23:13 --> 00:23:19
fficient algorithms that go like and Q

00:23:16 --> 00:23:21
door n to the sixth but those types of

00:23:18 --> 00:23:23
algorithms are often not sufficiently

00:23:20 --> 00:23:25
accurate to go after areas where real

00:23:22 --> 00:23:27
chemistry happens where bonds break or

00:23:24 --> 00:23:28
you look at excited state electrons

00:23:26 --> 00:23:29
we're talking about nature is going to

00:23:27 --> 00:23:31
computing it's like what nature really

00:23:28 --> 00:23:32
does yeah and especially a lot of

00:23:30 --> 00:23:35
interesting applications from a

00:23:31 --> 00:23:37
commercial point of view are enzymes all

00:23:34 --> 00:23:38
the chemistry you know so so this is

00:23:36 --> 00:23:40
omething where a quantum computer could

00:23:37 --> 00:23:42
be able to do calculations that are

00:23:39 --> 00:23:44
ither much bigger and much higher

00:23:41 --> 00:23:45
accuracy or where I could would be

00:23:43 --> 00:23:48
ssentially much bigger at higher as

00:23:44 --> 00:23:50
much add much higher accuracy and and

00:23:47 --> 00:23:52
with a state of a machine that

00:23:49 --> 00:23:53
doesn't have to be this hundred thousand

00:23:51 --> 00:23:54
Cupid machine to do something

00:23:52 --> 00:23:56
interesting it could be much smaller and

00:23:53 --> 00:23:57
isn't there also actually stuff you

00:23:55 --> 00:23:59
cannot even do in classical computers

00:23:56 --> 00:24:02
today with for computational chemistry

00:23:58 --> 00:24:04
it depends on the number of atoms so

00:24:01 --> 00:24:07
like you can do this full calculation

00:24:03 --> 00:24:08
for like tens maybe a hundred atoms but

00:24:06 --> 00:24:09
you probably couldn't it'd be very

00:24:07 --> 00:24:12
difficult I think I do it for a thousand

00:24:08 --> 00:24:16
atoms or 1000 chemistry is everywhere

00:24:11 --> 00:24:17
and that's you think about energy when

00:24:15 --> 00:24:19
you drive a car it's going through

00:24:16 --> 00:24:20
chemical reactions when you your

00:24:18 --> 00:24:23
proteins in your body are working those

00:24:19 --> 00:24:25
are chemical reactions I mean your

00:24:22 --> 00:24:26
plants are going and using fertilizer

00:24:24 --> 00:24:28
and all this stuff it's all chemistry

00:24:25 --> 00:24:30
there could be one that gets into market

00:24:27 --> 00:24:31
and that we start seeing use and uptake

00:24:29 --> 00:24:33
and that's where it starts getting

00:24:30 --> 00:24:35
interesting because once there is an

00:24:32 --> 00:24:37
application and these things become

00:24:34 --> 00:24:38
cheaper and more ubiquitous I think

00:24:36 --> 00:24:39
we're going to see the second or third

00:24:37 --> 00:24:41
or the fourth or fifth and it's going to

00:24:38 --> 00:24:44
roll from there one of the surprising

00:24:40 --> 00:24:47
aspects of quantum computing is that

00:24:43 --> 00:24:49
scientists and mathematicians and

00:24:46 --> 00:24:52
computer and computer engineers don't

00:24:48 --> 00:24:54
really know all of the problems that can

00:24:51 --> 00:24:56
be solved by a quantum computer we just

00:24:53 --> 00:24:58
know some of them and that's not how

00:24:55 --> 00:24:59
classical computing work it was always

00:24:57 --> 00:25:01
the case that if you could solve a

00:24:58 --> 00:25:02
classical computer problem a classical a

00:25:00 --> 00:25:04
small classical computer then it would

00:25:01 --> 00:25:06
just automatically work better on a big

00:25:03 --> 00:25:08
classical computer but we don't actually

00:25:05 --> 00:25:09
know that class of problems that can be

00:25:07 --> 00:25:11
solved on quantum computers yet and that

00:25:08 --> 00:25:13
itself is a pretty interesting mystery

00:25:10 --> 00:25:17
well that's great thank you guys for

00:25:12 --> 00:25:17
joining the a 6nz podcast thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
