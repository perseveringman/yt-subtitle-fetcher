---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "MrIFte_rOh0"
title: "What is Deep Reinforcement Learning? (David Silver, DeepMind) | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=MrIFte_rOh0"
thumbnail_url: "https://i.ytimg.com/vi/MrIFte_rOh0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=MrIFte_rOh0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-05-06T20:31:51.000Z"
upload_date: "2020-05-06"
duration_seconds: 838
duration_human: "13:58"
view_count: 24269
like_count: 689
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:09:55.990Z"
---

# What is Deep Reinforcement Learning? (David Silver, DeepMind) | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=MrIFte_rOh0
- video_id: MrIFte_rOh0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-05-06T20:31:51.000Z
- upload_date: 2020-05-06
- duration: 13:58
- view_count: 24269
- like_count: 689
- has_subtitle: true
- language: en
- availability: public
- tags: david silver, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with David Silver (Apr 2020): https://www.youtube.com/watch?v=uPUEq8d73JI
Clips channel (Lex Clips): https://www.youtube.com/lexclips
Main channel (Lex Fridman): https://www.youtube.com/lexfridman
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on Apple Podcasts (iTunes):
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

David Silver leads the reinforcement learning research group at DeepMind and was lead researcher on AlphaGo, AlphaZero and co-lead on AlphaStar, and MuZero and lot of important work in reinforcement learning.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:07
if it's okay can we take a step back and

00:00:03 --> 00:00:10
kind of ask the basic question of what

00:00:06 --> 00:00:13
is to you reinforcement learning so

00:00:09 --> 00:00:17
reinforcement learning is the study and

00:00:12 --> 00:00:21
the science and the problem of

00:00:16 --> 00:00:23
intelligence in the form of an agent

00:00:20 --> 00:00:24
hat interacts with an environment so

00:00:22 --> 00:00:25
the problem is trying to self is

00:00:23 --> 00:00:27
represented by some environment like the

00:00:24 --> 00:00:30
world in which that agent is situated

00:00:26 --> 00:00:33
and the goal of RL is clear that the

00:00:29 --> 00:00:35
agent gets to take actions those actions

00:00:32 --> 00:00:36
have some effect on the environment and

00:00:34 --> 00:00:37
the environment gives back an

00:00:35 --> 00:00:40
observation to the agent saying you know

00:00:36 --> 00:00:42
this is what you see your sense and one

00:00:39 --> 00:00:44
special thing which it gives back is

00:00:41 --> 00:00:45
it's called the reward signal how well

00:00:43 --> 00:00:47
it's doing in the environment and the

00:00:44 --> 00:00:52
reinforcement learning problem is to

00:00:46 --> 00:00:56
simply take actions over time so as to

00:00:51 --> 00:01:00
maximize that reward signal so a couple

00:00:55 --> 00:01:02
of basic questions what types of RL

00:00:59 --> 00:01:05
approaches are there so I don't know if

00:01:01 --> 00:01:08
there's a nice brief in words way to

00:01:04 --> 00:01:12
paint a picture of sort of value based

00:01:07 --> 00:01:14
model based policy based reinforcement

00:01:11 --> 00:01:18
learning yeah so now if we think about

00:01:13 --> 00:01:20
okay so there's this ambitious problem

00:01:17 --> 00:01:21
definition of RL it's really you know

00:01:19 --> 00:01:23
it's truly ambitious it's trying to

00:01:20 --> 00:01:24
capture and encircle all of the things

00:01:22 --> 00:01:26
in which an agent interacts with an

00:01:23 --> 00:01:27
environment and say well how can we

00:01:25 --> 00:01:30
formalize and understand what it means

00:01:26 --> 00:01:31
to to crack that now let's think about

00:01:29 --> 00:01:33
he solution method well how do you

00:01:30 --> 00:01:36
solve a really hard problem like that

00:01:32 --> 00:01:38
well one approach you can take is is to

00:01:35 --> 00:01:41
decompose that that very hard problem

00:01:37 --> 00:01:44
into into pieces that work together to

00:01:40 --> 00:01:45
solve that hard problem and and so you

00:01:43 --> 00:01:47
can kind of look at the decomposition

00:01:44 --> 00:01:50
that's inside the agents head if you

00:01:46 --> 00:01:52
like and ask well what form does that

00:01:49 --> 00:01:53
decomposition take and some of the most

00:01:51 --> 00:01:55
common pieces that people use when

00:01:52 --> 00:01:57
they're kind of putting this system the

00:01:54 --> 00:01:59
solution method together some of the

00:01:56 --> 00:02:01
most common pieces that people use are

00:01:58 --> 00:02:03
whether or not that solution has a value

00:02:00 --> 00:02:05
function that means is it trying to

00:02:02 --> 00:02:06
predict explicitly trying to predict how

00:02:04 --> 00:02:09
much reward it will get in the future

00:02:05 --> 00:02:11
does it have a representation of a

00:02:08 --> 00:02:13
policy that means something which is

00:02:10 --> 00:02:15
deciding how to pick actions is is that

00:02:12 --> 00:02:16
decision-making process explicitly

00:02:14 --> 00:02:19
represented

00:02:15 --> 00:02:21
and is there a model in the system is

00:02:18 --> 00:02:22
there something which is explicitly

00:02:20 --> 00:02:24
trying to predict what will happen in

00:02:21 --> 00:02:28
the environment and so those three

00:02:23 --> 00:02:32
pieces are to me some of the most common

00:02:27 --> 00:02:35
building blocks and I understand the

00:02:31 --> 00:02:37
different choices in RL as choices of

00:02:35 --> 00:02:38
whether or not to use those building

00:02:36 --> 00:02:40
blocks when you're trying to decompose

00:02:37 --> 00:02:43
the solution no should I have a value

00:02:39 --> 00:02:44
function represented so they have a

00:02:42 --> 00:02:47
policy represented should I have a model

00:02:44 --> 00:02:48
represented and there are combinations

00:02:46 --> 00:02:49
of those pieces and of course other

00:02:47 --> 00:02:51
things that you could add to add into

00:02:48 --> 00:02:52
the picture as well but those those

00:02:50 --> 00:02:55
three fundamental choices give rise to

00:02:51 --> 00:02:57
some of the branches of RL with which we

00:02:54 --> 00:03:00
have very familiar and so those as you

00:02:56 --> 00:03:05
mentioned there is the choice of what's

00:02:59 --> 00:03:08
pecified or modeled explicitly and the

00:03:04 --> 00:03:11
idea is that all of these are somehow

00:03:07 --> 00:03:14
implicitly learned within the system so

00:03:10 --> 00:03:16
it's almost the choice of how you

00:03:13 --> 00:03:19
approach a problem do you see those as

00:03:15 --> 00:03:24
fundamental differences are these almost

00:03:18 --> 00:03:25
like small specifics like the details of

00:03:23 --> 00:03:26
how you solve the problem but they're

00:03:24 --> 00:03:31
not fundamentally different from each

00:03:25 --> 00:03:33
other I think the the fundamental idea

00:03:30 --> 00:03:36
is is may be at the higher level the

00:03:32 --> 00:03:39
fundamental idea is the first step of

00:03:35 --> 00:03:41
the decomposition is really to say well

00:03:38 --> 00:03:43
how are we really going to solve any

00:03:40 --> 00:03:45
kind of problem where you're trying to

00:03:42 --> 00:03:47
figure out how to take actions and just

00:03:44 --> 00:03:48
from this stream of observations you

00:03:46 --> 00:03:51
know you've got some agents situated

00:03:47 --> 00:03:52
it's sensorimotor stream and getting all

00:03:50 --> 00:03:53
these observations here and getting to

00:03:51 --> 00:03:55
take these actions and what should it do

00:03:52 --> 00:03:56
how can even broach that problem you

00:03:54 --> 00:03:59
know maybe the complexity of the world

00:03:55 --> 00:04:01
is so great that you can't even imagine

00:03:58 --> 00:04:02
how to build a system that would that

00:04:00 --> 00:04:04
would understand how to deal with that

00:04:01 --> 00:04:06
and so the first step of this

00:04:03 --> 00:04:08
decomposition is to say well you have to

00:04:05 --> 00:04:10
learn the system has to learn for itself

00:04:07 --> 00:04:12
and so note that the reinforcement

00:04:09 --> 00:04:14
learning problem doesn't actually

00:04:11 --> 00:04:16
stipulate that you have to learn but you

00:04:13 --> 00:04:18
could maximize your rewards without

00:04:15 --> 00:04:20
learning it would just I wouldn't do a

00:04:17 --> 00:04:22
very good job event yes so learning is

00:04:19 --> 00:04:24
required because it's the only way to

00:04:21 --> 00:04:26
achieve good performance in any

00:04:23 --> 00:04:29
sufficiently large and complex

00:04:25 --> 00:04:31
environment so so that's the first step

00:04:28 --> 00:04:33
so that's deputy of commonality to all

00:04:30 --> 00:04:35
of the other pieces because now you

00:04:32 --> 00:04:37
might ask well what should you be

00:04:34 --> 00:04:39
learning what is learning even mean you

00:04:36 --> 00:04:42
know in this sense you know learning

00:04:38 --> 00:04:45
might mean well you're trying to update

00:04:41 --> 00:04:47
the parameters of some system which is

00:04:44 --> 00:04:49
then the thing that actually picks the

00:04:46 --> 00:04:51
actions and and those parameters could

00:04:48 --> 00:04:53
be representing anything they could be

00:04:50 --> 00:04:56
parameterizing a value function or a

00:04:52 --> 00:04:58
model or a policy and so in that sense

00:04:55 --> 00:05:00
there's a lot of commonality in that

00:04:57 --> 00:05:01
whatever is being represented there is

00:04:59 --> 00:05:03
the thing which is being learned and

00:05:00 --> 00:05:06
it's being learned with the ultimate

00:05:02 --> 00:05:07
goal of maximizing rewards but that the

00:05:05 --> 00:05:09
way in which you decompose the problem

00:05:06 --> 00:05:11
is is is really what gives the semantics

00:05:08 --> 00:05:14
to the whole system like are you trying

00:05:10 --> 00:05:16
to learn something to predict well like

00:05:13 --> 00:05:17
a value function or a model are you

00:05:15 --> 00:05:20
learning something to perform well like

00:05:16 --> 00:05:22
a policy and and the form of that

00:05:19 --> 00:05:24
objective like it's kind of giving the

00:05:21 --> 00:05:27
semantics to the system and so it really

00:05:23 --> 00:05:28
is at the next level down a fundamental

00:05:26 --> 00:05:31
choice and we have to make those

00:05:27 --> 00:05:33
fundamental choices a system designers

00:05:30 --> 00:05:35
or enable our our algorithms to be able

00:05:32 --> 00:05:38
to learn how to make those choices for

00:05:34 --> 00:05:41
themselves so then the next step you

00:05:37 --> 00:05:43
mentioned the very for the very first

00:05:40 --> 00:05:46
hing you have to deal with is can you

00:05:42 --> 00:05:48
even take in this huge stream of

00:05:45 --> 00:05:52
observations and do anything with it so

00:05:47 --> 00:05:54
the natural next basic question is what

00:05:51 --> 00:05:57
is the what is deeper enforceable

00:05:53 --> 00:06:00
arning and what is this idea of using

00:05:56 --> 00:06:03
neural networks to deal with this huge

00:05:59 --> 00:06:05
incoming stream so amongst all the

00:06:02 --> 00:06:07
approaches for reinforcement learning

00:06:04 --> 00:06:13
deep reinforcement learning is one

00:06:06 --> 00:06:17
family of solution methods that tries to

00:06:12 --> 00:06:18
utilize powerful representations that

00:06:16 --> 00:06:21
are offered by neural networks to

00:06:17 --> 00:06:25
represent any of these different

00:06:20 --> 00:06:27
components of the solution of the agent

00:06:24 --> 00:06:29
like whether it's the value function or

00:06:26 --> 00:06:32
the model or the policy the idea of deep

00:06:28 --> 00:06:33
learning is to say well here's a

00:06:31 --> 00:06:35
powerful tool kit that's so powerful

00:06:32 --> 00:06:37
that it's it's Universal in the sense

00:06:34 --> 00:06:40
that it can represent any function and

00:06:36 --> 00:06:42
it can learn any function and so if we

00:06:39 --> 00:06:43
can leverage that universality that

00:06:41 --> 00:06:45
means that

00:06:42 --> 00:06:47
whatever whatever we need to represent

00:06:44 --> 00:06:49
for our policy or a value function for a

00:06:46 --> 00:06:52
model deep learning can do it so that

00:06:48 --> 00:06:55
deep learning is is one approach that

00:06:51 --> 00:06:58
offers us a toolkit that is has no

00:06:54 --> 00:06:59
ceiling to its performance that as we

00:06:57 --> 00:07:01
start to put more resources into the

00:06:58 --> 00:07:04
system or more memory and more

00:07:00 --> 00:07:06
computation and more more data more

00:07:03 --> 00:07:08
xperience of more interactions with the

00:07:05 --> 00:07:10
nvironment that these are systems that

00:07:07 --> 00:07:11
can just get better and better and

00:07:09 --> 00:07:13
better at doing whatever the job is

00:07:10 --> 00:07:16
they've asked them to do whatever we've

00:07:12 --> 00:07:19
asked that function to represent it can

00:07:16 --> 00:07:20
learn a function that does a better and

00:07:18 --> 00:07:23
better job of representing that that

00:07:19 --> 00:07:24
knowledge whether that knowledge be

00:07:22 --> 00:07:26
stimating how well you're going to do

00:07:23 --> 00:07:28
in the world the value function whether

00:07:25 --> 00:07:30
it's going to be choosing what to do in

00:07:27 --> 00:07:32
the world the policy or whether it's

00:07:29 --> 00:07:33
understanding the world itself what's

00:07:31 --> 00:07:36
going to happen next the model

00:07:32 --> 00:07:40
nevertheless the the the fact that

00:07:35 --> 00:07:42
neural networks are able to learn

00:07:39 --> 00:07:44
incredibly complex representations that

00:07:41 --> 00:07:48
allow you to do the policy the model or

00:07:43 --> 00:07:50
the value function is at least to my

00:07:47 --> 00:07:53
mind exceptionally beautiful and

00:07:49 --> 00:07:56
surprising like what was it is it

00:07:52 --> 00:07:58
surprising was it surprising to you can

00:07:55 --> 00:08:00
you still believe it works as well as it

00:07:57 --> 00:08:03
does do you have good intuition about

00:07:59 --> 00:08:09
why it works at all and works as well as

00:08:02 --> 00:08:14
it does I think let me take two parts to

00:08:08 --> 00:08:16
that question I think it's not

00:08:13 --> 00:08:18
surprising to me that the idea of

00:08:15 --> 00:08:23
reinforcement learning works because in

00:08:17 --> 00:08:24
some sense I think it's the I feel it's

00:08:22 --> 00:08:27
the only thing which can ultimately and

00:08:23 --> 00:08:29
so I feel we have to we have to address

00:08:26 --> 00:08:31
it and there must be success is possible

00:08:28 --> 00:08:34
because we have examples of intelligence

00:08:30 --> 00:08:37
and it must at some level be able to

00:08:33 --> 00:08:40
possible to acquire experience and use

00:08:36 --> 00:08:43
that experience to do better in a way

00:08:39 --> 00:08:44
which is meaningful to environments at

00:08:42 --> 00:08:47
he complexity that humans can deal with

00:08:44 --> 00:08:49
it must be am I surprised that our

00:08:46 --> 00:08:52
current systems can do as well as they

00:08:48 --> 00:08:57
can do I think one of the big surprises

00:08:51 --> 00:09:01
for me and a lot of the community is

00:08:56 --> 00:09:07
really the fact that deep learning can

00:09:00 --> 00:09:10
continue to perform so well despite than

00:09:06 --> 00:09:11
the fact that these neural networks that

00:09:09 --> 00:09:13
hey're representing have these

00:09:10 --> 00:09:17
incredibly nonlinear kind of bumpy

00:09:12 --> 00:09:19
surfaces which to our kind of low

00:09:16 --> 00:09:21
dimensional intuitions make it feel like

00:09:18 --> 00:09:23
surely you're just gonna get stuck and

00:09:20 --> 00:09:25
learning will get stuck because you

00:09:22 --> 00:09:28
won't be able to make any further

00:09:24 --> 00:09:31
progress and yet the big surprise is

00:09:27 --> 00:09:34
that learning continues and and these

00:09:30 --> 00:09:36
what appear to be local Optima turned

00:09:33 --> 00:09:37
out not to be because in high dimensions

00:09:35 --> 00:09:38
when we make really big neural nets

00:09:36 --> 00:09:41
there's always a way out

00:09:37 --> 00:09:44
and there's a way to go even lower and

00:09:40 --> 00:09:45
then he's still not another local Optima

00:09:43 --> 00:09:46
because there's some other pathway that

00:09:44 --> 00:09:48
will take you out and take you lower

00:09:45 --> 00:09:51
still and so no matter where you are

00:09:47 --> 00:09:53
learning can proceed and do better and

00:09:50 --> 00:09:57
breath better without bound

00:09:52 --> 00:10:01
and so that is a surprising and

00:09:56 --> 00:10:05
beautiful property of neural nets which

00:10:00 --> 00:10:07
I find elegant and beautiful and and

00:10:04 --> 00:10:10
somewhat shocking that it turns out to

00:10:06 --> 00:10:14
be the case as you said surely like to

00:10:09 --> 00:10:18
ur low dimensional intuitions that's

00:10:13 --> 00:10:20
urprising yeah yeah we're very we're

00:10:17 --> 00:10:22
very tuned to working within a

00:10:19 --> 00:10:25
three-dimensional environment and so to

00:10:21 --> 00:10:29
start to visualize what a billion

00:10:24 --> 00:10:30
dimensional neural network surface that

00:10:28 --> 00:10:33
you're trying to optimize over what that

00:10:29 --> 00:10:35
even looks like is very hard for us and

00:10:32 --> 00:10:41
so I think that really if you try to

00:10:34 --> 00:10:43
account for for the essentially the AI

00:10:40 --> 00:10:45
winter we're where people gave up on

00:10:42 --> 00:10:47
unil networks I think it's really down

00:10:44 --> 00:10:50
to that that lack of ability to

00:10:46 --> 00:10:51
generalize from from low dimensions to

00:10:49 --> 00:10:53
high dimensions because back then we

00:10:50 --> 00:10:55
re in the low dimensional case people

00:10:52 --> 00:10:58
could only build neural Nets with you

00:10:54 --> 00:11:01
know 50 nodes in them or something and

00:10:57 --> 00:11:03
to to imagine that it might be possible

00:11:00 --> 00:11:04
to build a billion dimensionally on

00:11:02 --> 00:11:05
there and it might have a completely

00:11:03 --> 00:11:08
different qualitatively different

00:11:04 --> 00:11:10
property was very hard to anticipate and

00:11:08 --> 00:11:11
I think even now we're starting to build

00:11:09 --> 00:11:14
the

00:11:10 --> 00:11:16
theory to support that and and it's

00:11:13 --> 00:11:17
incomplete at the moment but all of the

00:11:15 --> 00:11:19
ory seems to be pointing in the

00:11:16 --> 00:11:22
direction that indeed this is an

00:11:18 --> 00:11:23
approach which which truly is universal

00:11:21 --> 00:11:25
both in its representational capacity

00:11:22 --> 00:11:28
which was known but also in its learning

00:11:24 --> 00:11:31
ability which is which is surprising and

00:11:27 --> 00:11:34
it makes one wonder what else were

00:11:30 --> 00:11:37
missing yes for a low demand intuitions

00:11:33 --> 00:11:41
yet there will seem obvious once is

00:11:36 --> 00:11:46
discovered I often wonder you know when

00:11:40 --> 00:11:49
we one day do have a eyes which are

00:11:45 --> 00:11:53
superhuman in their abilities to to

00:11:48 --> 00:11:55
understand the world what will they

00:11:52 --> 00:11:57
think of the algorithms that we

00:11:54 --> 00:11:59
developed back now will it be you know

00:11:56 --> 00:12:03
looking back at these these days and you

00:11:58 --> 00:12:04
know and and and thinking that well will

00:12:02 --> 00:12:07
we look back and feel that these

00:12:03 --> 00:12:09
algorithms were were naive fair steps or

00:12:06 --> 00:12:11
will they still be the fundamental ideas

00:12:08 --> 00:12:15
which are used even in 100 thousand ten

00:12:10 --> 00:12:17
thousand years yeah I Nels and I they'll

00:12:14 --> 00:12:21
watch back to this conversation

00:12:16 --> 00:12:26
and I would the smile maybe a little bit

00:12:20 --> 00:12:31
of a laugh I mean my senses I think it

00:12:25 --> 00:12:33
just like on we used to think that the

00:12:30 --> 00:12:36
Sun revolved around the earth they'll

00:12:32 --> 00:12:39
see our systems of today reinforcement

00:12:35 --> 00:12:42
learning as too complicated that the

00:12:38 --> 00:12:44
answer was simple all along there's

00:12:41 --> 00:12:47
omething I just just think you said in

00:12:43 --> 00:12:49
a game of Go I mean I love the systems

00:12:46 --> 00:12:51
of like cellular automata that there's

00:12:48 --> 00:12:55
imple rules from which incredible

00:12:50 --> 00:12:56
complexity emerges so it feels like

00:12:54 --> 00:12:59
there might be some very simple

00:12:55 --> 00:13:03
approaches just like where Sutton says

00:12:58 --> 00:13:07
right these simple methods or with

00:13:02 --> 00:13:09
compute over time seem to prove to be

00:13:06 --> 00:13:15
the most effective I have 100% agree I

00:13:08 --> 00:13:17
think that if we try to anticipate what

00:13:14 --> 00:13:20
will generalize well into the future

00:13:16 --> 00:13:23
I think it's likely to be the case that

00:13:19 --> 00:13:24
it's the simple clear ideas which will

00:13:22 --> 00:13:25
have the longest legs and what which

00:13:23 --> 00:13:27
will care

00:13:24 --> 00:13:28
furthest into the future nevertheless

00:13:26 --> 00:13:30
we're in a situation where we need to

00:13:27 --> 00:13:32
make things work day and today and

00:13:29 --> 00:13:34
sometimes that requires putting together

00:13:31 --> 00:13:37
more complex systems where we don't have

00:13:33 --> 00:13:40
the full answers yet as to what those

00:13:36 --> 00:13:40
minimal ingredients might be

00:13:45 --> 00:13:48
you

<!-- YOUTUBE_TRANSCRIPT_END -->
