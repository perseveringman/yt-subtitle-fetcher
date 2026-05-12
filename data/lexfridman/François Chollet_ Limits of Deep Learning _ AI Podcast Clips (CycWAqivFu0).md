---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "CycWAqivFu0"
title: "François Chollet: Limits of Deep Learning | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=CycWAqivFu0"
thumbnail_url: "https://i.ytimg.com/vi/CycWAqivFu0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=CycWAqivFu0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-10-10T19:38:22.000Z"
upload_date: "2019-10-10"
duration_seconds: 634
duration_human: "10:34"
view_count: 20350
like_count: 523
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:56:32.914Z"
---

# François Chollet: Limits of Deep Learning | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=CycWAqivFu0
- video_id: CycWAqivFu0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-10-10T19:38:22.000Z
- upload_date: 2019-10-10
- duration: 10:34
- view_count: 20350
- like_count: 523
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, machine learning, keras, tensorflow, generalization, agi, reasoning, common sense, francois chollet, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Francois Chollet from Sep 2019. New full episodes every Mon & Thu and 1-2 new clips or a new non-podcast video on all other days. You can watch the full conversation here: https://www.youtube.com/watch?v=Bo8MY4JpiXE
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on iTunes:
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Note: I select clips with insights from these much longer conversation with the hope of helping make these ideas more accessible and discoverable. Ultimately, this podcast is a small side hobby for me with the goal of sharing and discussing ideas. For now, I post a few clips every Tue & Fri. I did a poll and 92% of people either liked or loved the posting of daily clips, 2% were indifferent, and 6% hated it, some suggesting that I post them on a separate YouTube channel. I hear the 6% and partially agree, so am torn about the whole thing. I tried creating a separate clips channel but the YouTube algorithm makes it very difficult for that channel to grow unless the main channel is already very popular. So for a little while, I'll keep posting clips on the main channel. I ask for your patience and to see these clips as supporting the dissemination of knowledge contained in nuanced discussion. If you enjoy it, consider subscribing, sharing, and commenting.

François Chollet is the creator of Keras, which is an open source deep learning library that is designed to enable fast, user-friendly experimentation with deep neural networks. It serves as an interface to several deep learning libraries, most popular of which is TensorFlow, and it was integrated into TensorFlow main codebase a while back. Aside from creating an exceptionally useful and popular library, François is also a world-class AI researcher and software engineer at Google, and is definitely an outspoken, if not controversial, personality in the AI world, especially in the realm of ideas around the future of artificial intelligence.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:08
what do you think of the current limits

00:00:03 --> 00:00:13
of deep learning if we look specifically

00:00:07 --> 00:00:15
at these function approximator x' that

00:00:12 --> 00:00:18
ries to generalize from data they've

00:00:14 --> 00:00:21
you've talked about local versus extreme

00:00:17 --> 00:00:23
generalization you mentioned the neural

00:00:20 --> 00:00:27
networks don't generalize well humans do

00:00:22 --> 00:00:29
so there's this gap so and you've also

00:00:26 --> 00:00:31
mentioned that generalization extreme

00:00:28 --> 00:00:33
generalization requires something like a

00:00:30 --> 00:00:35
reasoning to fill those gaps so how can

00:00:32 --> 00:00:39
we start trying to build systems like

00:00:34 --> 00:00:42
that all right yes so this is this is by

00:00:38 --> 00:00:47
design right deplaning models are like

00:00:41 --> 00:00:50
huge parametric models differentiable so

00:00:46 --> 00:00:52
continuous that go from an input space

00:00:49 --> 00:00:53
to an output space and they're trained

00:00:51 --> 00:00:56
with gradient descent so they're

00:00:52 --> 00:00:59
trying-- pretty much point by point they

00:00:55 --> 00:01:02
are learning a continuous geometric

00:00:58 --> 00:01:05
morphing from from an input vector space

00:01:01 --> 00:01:08
to not put vector space all right and

00:01:04 --> 00:01:10
because this is done point by points a

00:01:07 --> 00:01:14
deep neural network can only make sense

00:01:09 --> 00:01:16
of points in experience space that are

00:01:13 --> 00:01:19
very close to think that it has already

00:01:15 --> 00:01:23
seen in strain data at best it can do

00:01:18 --> 00:01:25
interpolation across points but that

00:01:22 --> 00:01:27
means you know that means in order to

00:01:24 --> 00:01:30
train your network you need a dense

00:01:26 --> 00:01:33
sampling of the input cross ad with

00:01:29 --> 00:01:36
space almost a point-by-point sampling

00:01:32 --> 00:01:38
which can be very expensive if you're

00:01:35 --> 00:01:40
dealing with complex real-world problems

00:01:37 --> 00:01:44
like autonomous driving for instance or

00:01:39 --> 00:01:46
car robotics is it's doable if you're

00:01:43 --> 00:01:47
looking at the subset of the visual

00:01:45 --> 00:01:49
space but even then still fairly

00:01:46 --> 00:01:51
expensive used in in millions of

00:01:48 --> 00:01:54
examples and it's only going to be able

00:01:50 --> 00:01:56
to make sense of things that are very

00:01:53 --> 00:01:58
close to waste as seen before and in

00:01:55 --> 00:02:00
contrast to that well of course you have

00:01:57 --> 00:02:02
human intelligence but even if you're

00:01:59 --> 00:02:05
not looking at human intelligence you

00:02:01 --> 00:02:07
can look at very simple rules algorithms

00:02:04 --> 00:02:11
if you have a symbolic rule it can

00:02:06 --> 00:02:14
actually apply to a very very large set

00:02:10 --> 00:02:17
of inputs because it is abstract

00:02:13 --> 00:02:20
it is not obtained by doing a

00:02:16 --> 00:02:22
point-by-point mapping right for

00:02:19 --> 00:02:24
instance if you try to learn a sorting

00:02:21 --> 00:02:26
algorithm using a deep neural network

00:02:23 --> 00:02:28
well you're very much limited to

00:02:25 --> 00:02:31
learning point by point

00:02:27 --> 00:02:35
well the sorted representation of this

00:02:30 --> 00:02:39
pecific list is like but instead you

00:02:34 --> 00:02:41
could have a very simple sorting

00:02:38 --> 00:02:44
algorithm written in a few lines maybe

00:02:40 --> 00:02:49
it's just you know two nested loops and

00:02:43 --> 00:02:51
it can process any list at all because

00:02:48 --> 00:02:53
it is abstract because it is a set of

00:02:50 --> 00:02:55
rules so deep learning is really like

00:02:52 --> 00:02:57
point by point geometric morphine's

00:02:54 --> 00:03:01
more things train whistle and essence

00:02:56 --> 00:03:04
and meanwhile abstract rules can

00:03:00 --> 00:03:06
generalize much better and I think the

00:03:03 --> 00:03:09
future is reach combine the two so how

00:03:05 --> 00:03:11
do we do you think combine the two how

00:03:08 --> 00:03:16
do we combine good point by point

00:03:10 --> 00:03:19
functions with programs which is what

00:03:15 --> 00:03:21
symbolic AI type systems yeah at which

00:03:18 --> 00:03:24
levels the combination happen and you

00:03:20 --> 00:03:25
know obviously we're jumping into the

00:03:23 --> 00:03:28
realm of where there's no good answers

00:03:24 --> 00:03:31
it just kind of ideas and intuitions and

00:03:27 --> 00:03:34
so on well if you look at the really

00:03:30 --> 00:03:36
successful AI systems today I think they

00:03:33 --> 00:03:38
are already hybrid systems that are

00:03:35 --> 00:03:40
combining symbolic AI which is deep

00:03:37 --> 00:03:44
learning for instance success robotics

00:03:39 --> 00:03:47
ystems are already mostly model-based

00:03:43 --> 00:03:49
rule-based things like planning

00:03:46 --> 00:03:51
algorithms and so on at the same time

00:03:48 --> 00:03:54
they're using deep learning as

00:03:50 --> 00:03:56
perception modules sometimes they're

00:03:53 --> 00:03:59
using deep learning as a way to inject a

00:03:55 --> 00:04:01
fuzzy intuition into a rule-based

00:03:58 --> 00:04:05
process if you look at a system like an

00:04:00 --> 00:04:07
a self-driving car it's not just one big

00:04:04 --> 00:04:09
end when your network you know that

00:04:06 --> 00:04:11
wouldn't work at all precisely because

00:04:08 --> 00:04:14
in order to train that you need a dense

00:04:10 --> 00:04:16
sampling of experience space when it

00:04:13 --> 00:04:18
comes to driving which is completely

00:04:15 --> 00:04:23
unrealistic obviously

00:04:17 --> 00:04:26
instead this a driving car is mostly

00:04:22 --> 00:04:29
symbolic you know it's software it's

00:04:25 --> 00:04:32
programmed by hand it's mostly based on

00:04:28 --> 00:04:35
explicit models in this case mostly 3d

00:04:31 --> 00:04:38
models of the of the environment around

00:04:34 --> 00:04:40
the car but it's interfacing with the

00:04:37 --> 00:04:42
real world using deep learning modules

00:04:39 --> 00:04:44
right so the deep learning there serves

00:04:41 --> 00:04:46
is a way to convert the raw sensory

00:04:43 --> 00:04:49
information to something usable by

00:04:45 --> 00:04:52
symbolic systems okay well it's

00:04:48 --> 00:04:55
lingering that a little more so dense

00:04:51 --> 00:04:58
sampling from input to output you said

00:04:54 --> 00:05:00
it's obviously very difficult is it

00:04:57 --> 00:05:03
possible in the case of sin driving even

00:04:59 --> 00:05:07
let's say still driving itself driving

00:05:02 --> 00:05:09
permit for many people but let's not

00:05:06 --> 00:05:12
even talk about self driving let's talk

00:05:08 --> 00:05:15
about steering so staying inside the

00:05:11 --> 00:05:17
lane lines following yeah it's

00:05:14 --> 00:05:18
definitely a problem cancel reason and

00:05:16 --> 00:05:21
two in the planning model but that's

00:05:17 --> 00:05:23
like one small subset on a second yeah I

00:05:20 --> 00:05:25
don't like your jumping from the extreme

00:05:22 --> 00:05:30
so easily because I disagree with you on

00:05:24 --> 00:05:32
that I think well it's it's not obvious

00:05:29 --> 00:05:34
to me that you can solve Lane following

00:05:31 --> 00:05:36
it's no it's not it's not obvious I

00:05:33 --> 00:05:40
think it's doable I think in general you

00:05:35 --> 00:05:42
know there is no hard limitations to

00:05:39 --> 00:05:46
what you can learn with a deep neural

00:05:41 --> 00:05:50
network as long as this the search space

00:05:45 --> 00:05:52
like is rich enough is flexible enough

00:05:49 --> 00:05:54
and as long as you have this dense

00:05:51 --> 00:05:56
sampling of the input cross output space

00:05:53 --> 00:05:59
the problem is that you know distance

00:05:55 --> 00:06:01
sampling could mean anything from 10,000

00:05:58 --> 00:06:04
examples to like trillions and trillions

00:06:00 --> 00:06:06
o that's that's my question so what's

00:06:03 --> 00:06:08
your intuition and if you could just

00:06:05 --> 00:06:10
give it a chance

00:06:07 --> 00:06:12
and think what kind of problems can be

00:06:09 --> 00:06:17
solved by getting a huge amounts of data

00:06:11 --> 00:06:20
nd thereby creating a dense mapping so

00:06:16 --> 00:06:23
let's think about natural language

00:06:19 --> 00:06:27
dialogue the Turing test do you think

00:06:22 --> 00:06:31
the Turing test can be solved with a

00:06:26 --> 00:06:33
neural network alone well the deterrent

00:06:30 --> 00:06:36
est is all about tricking people into

00:06:32 --> 00:06:38
believing they turn into human

00:06:35 --> 00:06:44
othing that's actually very difficult

00:06:37 --> 00:06:45
because it's more about exploiting human

00:06:43 --> 00:06:47
perception and not so much about

00:06:44 --> 00:06:50
intelligence there's a big difference

00:06:46 --> 00:06:51
between mimicking in Asian behavior and

00:06:49 --> 00:06:54
actually engage in behavior so okay

00:06:50 --> 00:06:56
let's look at maybe the elect surprised

00:06:53 --> 00:06:57
and so on the different formulations of

00:06:55 --> 00:07:00
the natural language conversation that

00:06:56 --> 00:07:02
are less about mimicking and more about

00:06:59 --> 00:07:04
maintaining a fun conversation that

00:07:01 --> 00:07:05
lasts for 20 minutes mm-hmm that's a

00:07:03 --> 00:07:08
little less about mimicking and that's

00:07:04 --> 00:07:10
more about I mean it's still mimicking

00:07:07 --> 00:07:12
but it's more about being able to carry

00:07:09 --> 00:07:13
forward a conversation with all the

00:07:11 --> 00:07:17
tangents that happen in dialogue and so

00:07:12 --> 00:07:20
n do you think that problem is learn

00:07:16 --> 00:07:22
herbal with this kind of well the neural

00:07:19 --> 00:07:25
network that does the point-to-point

00:07:21 --> 00:07:26
mapping so I think it would be very very

00:07:24 --> 00:07:29
challenging to do this with deep

00:07:25 --> 00:07:29
learning I don't think it's out of the

00:07:28 --> 00:07:33
question

00:07:28 --> 00:07:35
either I wouldn't read out the space of

00:07:32 --> 00:07:37
problems that can be solved or the large

00:07:34 --> 00:07:40
neural network what's your sense about

00:07:36 --> 00:07:43
he spaces those problems so useful

00:07:39 --> 00:07:44
problems for us in theory it's it's

00:07:42 --> 00:07:49
infinite right you can solve any problem

00:07:43 --> 00:07:53
in practice while deplaning is great fit

00:07:48 --> 00:07:57
for perception problems in general any

00:07:52 --> 00:08:00
problem which is not really able to

00:07:56 --> 00:08:02
explicit and crafted rules or rules that

00:07:59 --> 00:08:05
you can generate device exhaustive

00:08:01 --> 00:08:09
search or some program space so

00:08:04 --> 00:08:12
perception artificial intuition as long

00:08:08 --> 00:08:13
as you have a sufficient ring there

00:08:11 --> 00:08:16
and that's the question I mean

00:08:12 --> 00:08:18
perception there's interpretation and

00:08:15 --> 00:08:20
understanding of the scene yeah which

00:08:17 --> 00:08:24
seems to be outside the reach of current

00:08:19 --> 00:08:25
perceptual systems so do you think

00:08:23 --> 00:08:28
larger networks will be able to start to

00:08:24 --> 00:08:31
understand the physics and the physics

00:08:27 --> 00:08:33
of the scene the three-dimensional

00:08:30 --> 00:08:35
structure and relationships divisors in

00:08:32 --> 00:08:39
the scene and so on or really that's

00:08:34 --> 00:08:42
where symbology has to step in well it's

00:08:38 --> 00:08:45
always possible

00:08:41 --> 00:08:48
to solve these problems with with the

00:08:44 --> 00:08:50
planning is just extremely inefficient a

00:08:47 --> 00:08:52
model would be an explicit rule-based

00:08:49 --> 00:08:54
abstract model would be a law officer

00:08:51 --> 00:08:56
far better and more compressed

00:08:53 --> 00:08:59
representation of physics then learning

00:08:55 --> 00:09:00
justice mapping between in this

00:08:58 --> 00:09:02
ituation this thing happens if you

00:08:59 --> 00:09:04
change the situation like slightly then

00:09:01 --> 00:09:06
this other thing happens and so on do

00:09:03 --> 00:09:09
you think is possible to automatically

00:09:05 --> 00:09:12
generate the programs that would require

00:09:09 --> 00:09:14
that kind of reasoning our dessert have

00:09:11 --> 00:09:16
to so the word expert systems fail

00:09:13 --> 00:09:19
there's so many facts about the world

00:09:15 --> 00:09:24
had to be encoded in thing is possible

00:09:18 --> 00:09:25
to learn those logical statements that

00:09:23 --> 00:09:28
are true about the world and their

00:09:24 --> 00:09:30
elationships do you think I mean that's

00:09:27 --> 00:09:32
kind of what you're improving at a basic

00:09:29 --> 00:09:34
level is trying to do right yeah except

00:09:31 --> 00:09:37
it's it's much harder to firmly

00:09:33 --> 00:09:38
statements about the world compared to

00:09:36 --> 00:09:41
family ting mathematical statements

00:09:37 --> 00:09:44
about the world you know tend

00:09:40 --> 00:09:47
to be subjective so can you can you

00:09:43 --> 00:09:50
learn rule-based

00:09:46 --> 00:09:52
models yes yes differently that's the

00:09:49 --> 00:09:56
this is a field of program synthesis

00:09:51 --> 00:09:59
however today we just don't really know

00:09:55 --> 00:10:02
how to do it so it's very much a grad

00:09:58 --> 00:10:05
search or research problem and so we are

00:10:01 --> 00:10:06
limited to you know the sort of at

00:10:04 --> 00:10:08
recession raster

00:10:05 --> 00:10:10
algorithms that we have today personally

00:10:07 --> 00:10:13
I think changing algorithms are very

00:10:09 --> 00:10:16
promising though I was like genetic

00:10:12 --> 00:10:16
programming genic priming Zack

00:10:21 --> 00:10:24
you

<!-- YOUTUBE_TRANSCRIPT_END -->
