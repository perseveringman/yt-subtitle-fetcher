---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "9EN_HoEk3KY"
title: "Ilya Sutskever: OpenAI Meta-Learning and Self-Play | MIT Artificial General Intelligence (AGI)"
video_url: "https://www.youtube.com/watch?v=9EN_HoEk3KY"
thumbnail_url: "https://i.ytimg.com/vi/9EN_HoEk3KY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=9EN_HoEk3KY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-04-25T15:09:38.000Z"
upload_date: "2018-04-25"
duration_seconds: 3615
duration_human: "1:00:15"
view_count: 389149
like_count: 7663
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:17:43.850Z"
---

# Ilya Sutskever: OpenAI Meta-Learning and Self-Play | MIT Artificial General Intelligence (AGI)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=9EN_HoEk3KY
- video_id: 9EN_HoEk3KY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-04-25T15:09:38.000Z
- upload_date: 2018-04-25
- duration: 1:00:15
- view_count: 389149
- like_count: 7663
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, openai, agi, mit, ai, reinforcement learning, Ilya Sutskever, self-play, deep rl, deep reinforcement learning, meta-learning, artificial general intelligence, recurrent neural network, imagenet, dota 2, gpt2
- categories: Science & Technology

## Description

This is a talk by Ilya Sutskever for course 6.S099: Artificial General Intelligence. He is the Co-Founder of OpenAI. This class is free and open to everyone. Our goal is to take an engineering approach to exploring possible paths toward building human-level intelligence for a better world.

OUTLINE:
0:00 - Introduction
0:55 - Talk
43:04 - Q&A

INFO:
Course website: https://agi.mit.edu
AI podcast: https://lexfridman.com/ai

CONNECT:
- AI Podcast: https://lexfridman.com/ai/
- Subscribe to this YouTube channel
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
welcome back to 6 SZ row 99 artificial

00:00:02 --> 00:00:12
general intelligence today we have Ilya

00:00:05 --> 00:00:15
sutskever co-founder and research

00:00:11 --> 00:00:17
director of open AI he started in the

00:00:14 --> 00:00:19
amel group in Toronto Geoffrey Hinton

00:00:16 --> 00:00:22
then at Stanford with an jiaying

00:00:18 --> 00:00:23
co-founded DNN research for three years

00:00:21 --> 00:00:27
as a research scientist at Google brain

00:00:22 --> 00:00:29
and finally co-founded open AI citations

00:00:27 --> 00:00:32
aren't everything

00:00:28 --> 00:00:36
but they do indicate impact and his work

00:00:31 --> 00:00:39
recent work in the past five years has

00:00:35 --> 00:00:42
been cited over forty six thousand times

00:00:38 --> 00:00:45
he has been the key creative intellect

00:00:42 --> 00:00:47
and driver behind some of the biggest

00:00:44 --> 00:00:49
breakthrough ideas in deep learning and

00:00:46 --> 00:01:00
artificial intelligence ever

00:00:48 --> 00:01:02
so please welcome Ilya alright thanks

00:00:59 --> 00:01:05
for the introduction Lex

00:01:01 --> 00:01:07
alright thanks for coming to my talk I

00:01:04 --> 00:01:10
will tell you about some work we've done

00:01:06 --> 00:01:13
over the past year on on meta learning

00:01:09 --> 00:01:16
and software open AI and before I dive

00:01:12 --> 00:01:19
into some of the more technical details

00:01:15 --> 00:01:23
of the work I want to spend a little bit

00:01:18 --> 00:01:26
of time talking about deep learning and

00:01:22 --> 00:01:28
why it works at all in the first place

00:01:25 --> 00:01:30
which I think it's actually not a

00:01:27 --> 00:01:36
self-evident saying that they should

00:01:29 --> 00:01:38
work one fact it's actually a fact it's

00:01:35 --> 00:01:43
a mathematical theory that you can prove

00:01:37 --> 00:01:47
is that if you could find the shortest

00:01:42 --> 00:01:49
program the does very very well on your

00:01:46 --> 00:01:52
data then you will achieve the best

00:01:48 --> 00:01:53
generalization possible with a little

00:01:51 --> 00:01:55
bit of modification you can turn it into

00:01:52 --> 00:01:59
a precise theorem

00:01:54 --> 00:02:02
and on a very intuitive level it's easy

00:01:58 --> 00:02:05
to see what it should be the case if you

00:02:01 --> 00:02:07
have some data and you're able to find a

00:02:04 --> 00:02:10
shorter program which generates this

00:02:06 --> 00:02:12
data then you've essentially extracted

00:02:09 --> 00:02:15
all the all conceivable regularity from

00:02:11 --> 00:02:16
this data into your program and then you

00:02:14 --> 00:02:20
can use these objects to make the best

00:02:15 --> 00:02:23
predictions possible like if if you have

00:02:19 --> 00:02:26
data which is so complex but there is no

00:02:22 --> 00:02:28
way to express it as a shorter program

00:02:25 --> 00:02:30
then it means that your data is totally

00:02:27 --> 00:02:33
random there is no way to extract any

00:02:29 --> 00:02:35
regularity from it whatsoever now there

00:02:32 --> 00:02:37
is little known mathematical theory

00:02:34 --> 00:02:39
behind this and the proofs of these

00:02:36 --> 00:02:42
statements actually not even that hard

00:02:38 --> 00:02:45
but the one minor slight disappointment

00:02:41 --> 00:02:46
is that it's actually not possible at

00:02:44 --> 00:02:48
least given today's tools and

00:02:45 --> 00:02:53
understanding to find the best short

00:02:48 --> 00:02:56
program that explains or generates or

00:02:52 --> 00:02:59
solves your problem given your data this

00:02:55 --> 00:03:03
problem is computationally intractable

00:02:58 --> 00:03:05
the space of all programs is a very

00:03:02 --> 00:03:07
nasty space small changes to your

00:03:04 --> 00:03:09
program result in massive changes in the

00:03:06 --> 00:03:12
behavior of the program as it should be

00:03:08 --> 00:03:14
it makes sense you have a loop you

00:03:11 --> 00:03:16
change the inside of the loop of course

00:03:13 --> 00:03:18
you get something totally different so

00:03:15 --> 00:03:20
the space of programs is so hard at

00:03:17 --> 00:03:22
least given what we know today search

00:03:19 --> 00:03:28
there seems to be completely off the

00:03:21 --> 00:03:32
table well if we give up on shorts on

00:03:27 --> 00:03:35
short programs what about small circuits

00:03:31 --> 00:03:37
well it turns out that we are lucky it

00:03:34 --> 00:03:39
urns out that when it comes to small

00:03:36 --> 00:03:41
circuits you can just find the best

00:03:38 --> 00:03:44
small circuits circuits that solves the

00:03:40 --> 00:03:48
problem using back propagation and this

00:03:43 --> 00:03:52
the miraculous fact on which the rest

00:03:47 --> 00:03:53
of AI stands it is the fact but then you

00:03:51 --> 00:03:55
have a circuit and you impose

00:03:52 --> 00:03:59
constraints on your circuits on your

00:03:54 --> 00:04:01
circuit using data you can find the way

00:03:58 --> 00:04:03
to satisfy these constraints these

00:04:00 --> 00:04:06
constraints using that problem by

00:04:02 --> 00:04:09
iteratively making small changes

00:04:05 --> 00:04:14
to the base of your neural network until

00:04:08 --> 00:04:16
its predictions satisfy the data what

00:04:13 --> 00:04:18
his means is that the computational

00:04:15 --> 00:04:21
problem that so the back propagation is

00:04:17 --> 00:04:23
extremely profound it is circuit search

00:04:20 --> 00:04:26
now we know that you can solve it solve

00:04:22 --> 00:04:30
it always but you can solve it sometimes

00:04:25 --> 00:04:33
and you can solve it at those times

00:04:29 --> 00:04:35
where we have a practical data set it is

00:04:32 --> 00:04:36
easy to design artificial data sets for

00:04:34 --> 00:04:39
which you cannot find the best neural

00:04:35 --> 00:04:42
network but in practice that seems to be

00:04:38 --> 00:04:44
not a problem you can think of training

00:04:41 --> 00:04:48
a neural network as solving a neural

00:04:43 --> 00:04:51
equation in many cases where you have a

00:04:47 --> 00:04:54
large number of equation terms like this

00:04:50 --> 00:04:55
f of X I theta equals y I so you got

00:04:53 --> 00:04:59
your parameters and they represent all

00:04:54 --> 00:05:02
your degrees of freedom and you use

00:04:58 --> 00:05:03
gradient descent to push the information

00:05:01 --> 00:05:07
from these equations into the parameters

00:05:02 --> 00:05:10
atisfy them all and you can see that

00:05:06 --> 00:05:14
he neural network let's say one with 50

00:05:09 --> 00:05:18
layers is basically a parallel computer

00:05:13 --> 00:05:20
that is given 50 time steps to run and

00:05:17 --> 00:05:22
you can do quite a lot with a 15 with 50

00:05:19 --> 00:05:25
time steps of a very very powerful

00:05:21 --> 00:05:28
massively parallel computer so for

00:05:24 --> 00:05:34
example I do I think it is not widely

00:05:27 --> 00:05:38
known that you can learn to sort sort n

00:05:33 --> 00:05:39
bit numbers using a modestly sized

00:05:37 --> 00:05:43
neural network with just two hidden

00:05:38 --> 00:05:46
layers which is not bad it's not

00:05:42 --> 00:05:49
self-evident especially since we've been

00:05:45 --> 00:05:51
taught that sorting requires log n

00:05:48 --> 00:05:54
parallel steps with the neural network

00:05:50 --> 00:05:56
you can sort successful using only two

00:05:53 --> 00:05:59
parallel steps so there's some things

00:05:55 --> 00:06:01
like an arm is going on now these are

00:05:58 --> 00:06:03
parallel steps of threshold threshold

00:06:00 --> 00:06:05
neurons so they're doing a little bit

00:06:02 --> 00:06:06
more work let's answer to the mystery

00:06:04 --> 00:06:08
but if you've got 50 such layers you can

00:06:05 --> 00:06:10
do quite a bit of logic quite a bit of

00:06:07 --> 00:06:12
reasoning all inside the neural network

00:06:09 --> 00:06:16
and that's why it works

00:06:11 --> 00:06:18
given the data we are able to find the

00:06:15 --> 00:06:20
best neural network and because the

00:06:17 --> 00:06:22
neural network is deep because it can

00:06:19 --> 00:06:25
run computation inside of its act inside

00:06:21 --> 00:06:27
of its layers the best neural network is

00:06:24 --> 00:06:30
worth finding because that's really what

00:06:26 --> 00:06:33
you need you need something you need the

00:06:29 --> 00:06:36
model class which is worth optimizing

00:06:32 --> 00:06:38
but it also needs to be optimizable and

00:06:35 --> 00:06:40
eep neural networks satisfy both of

00:06:37 --> 00:06:42
these constraints and this is why

00:06:39 --> 00:06:46
everything works this is the basis on

00:06:41 --> 00:06:47
which everything else resides now I want

00:06:45 --> 00:06:50
o talk a little bit about reinforcement

00:06:46 --> 00:06:54
learning so reinforcement learning is a

00:06:49 --> 00:06:57
framework it's a framework of evaluating

00:06:53 --> 00:06:59
agents in their ability to achieve goals

00:06:56 --> 00:07:01
and complicated stochastic environments

00:06:58 --> 00:07:03
you've got an agent which is plugged

00:07:00 --> 00:07:07
into an environment as shown in the

00:07:02 --> 00:07:09
figure right here and for any given

00:07:06 --> 00:07:14
agent you can simply run it many times

00:07:08 --> 00:07:15
and compute its average reward now the

00:07:13 --> 00:07:17
thing that's interesting about the

00:07:14 --> 00:07:21
reinforcement learning framework is that

00:07:16 --> 00:07:23
here exist interesting useful

00:07:20 --> 00:07:26
reinforcement learning algorithms the

00:07:22 --> 00:07:28
framework existed for a long time it

00:07:25 --> 00:07:30
became interesting once we realized that

00:07:27 --> 00:07:32
good algorithms exist now these are

00:07:29 --> 00:07:33
there are perfect algorithms but they

00:07:31 --> 00:07:38
are good enough to do interesting things

00:07:32 --> 00:07:40
and all you want the mathematical

00:07:37 --> 00:07:45
problem is one where you need to

00:07:39 --> 00:07:47
maximize the expected reward now one

00:07:44 --> 00:07:49
important way in which the reinforcement

00:07:46 --> 00:07:51
learning framework is not quite complete

00:07:48 --> 00:07:53
is that it assumes that the reward is

00:07:50 --> 00:07:57
given by the environment you see this

00:07:52 --> 00:07:59
picture the agent sends an action while

00:07:56 --> 00:08:01
the reward sends it an observation in a

00:07:58 --> 00:08:02
both the observation and the reward

00:08:00 --> 00:08:04
backwards that's what the environment

00:08:01 --> 00:08:07
communicates back

00:08:03 --> 00:08:12
the way in which this is not the case in

00:08:06 --> 00:08:14
the real world is that we figure out

00:08:11 --> 00:08:17
what the reward is from the observation

00:08:13 --> 00:08:19
we reward ourselves we are not told

00:08:16 --> 00:08:21
environment doesn't say hey here's some

00:08:18 --> 00:08:24
negative reward it's our interpretation

00:08:20 --> 00:08:27
over census that lets us determine what

00:08:23 --> 00:08:29
he reward is and there is only one real

00:08:26 --> 00:08:32
true reward in life and this is

00:08:28 --> 00:08:36
existence or nonexistence and everything

00:08:31 --> 00:08:38
else is a corollary of that so well what

00:08:35 --> 00:08:40
should our agent be you already know the

00:08:37 --> 00:08:42
answer should be a neural network

00:08:39 --> 00:08:43
because whenever you want to do

00:08:41 --> 00:08:45
something dense it's going to be a

00:08:42 --> 00:08:48
neural network and you want the agent to

00:08:44 --> 00:08:50
map observations to actions so you let

00:08:47 --> 00:08:52
it be parametrized with a neural net and

00:08:49 --> 00:08:54
you apply learning algorithm so I want

00:08:51 --> 00:08:56
o explain to you how reinforcement

00:08:53 --> 00:08:57
learning works this is model free

00:08:55 --> 00:08:59
reinforcement learning the reinforcement

00:08:56 --> 00:09:03
learning has actually been used in

00:08:58 --> 00:09:06
practice everywhere but it's also deeply

00:09:02 --> 00:09:08
it's very robust it's very simple it's

00:09:05 --> 00:09:10
also not very efficient so the way it

00:09:08 --> 00:09:12
works is the following this is literally

00:09:09 --> 00:09:18
the one sentence description of what

00:09:11 --> 00:09:22
happens in short try something new add

00:09:17 --> 00:09:26
randomness directions and compare the

00:09:21 --> 00:09:29
result to your expectation if the result

00:09:25 --> 00:09:32
surprises you if you find that the

00:09:28 --> 00:09:34
results exceeded your expectation then

00:09:31 --> 00:09:37
change your parameters to take those

00:09:33 --> 00:09:39
actions in the future that's it this is

00:09:36 --> 00:09:42
the fool idea of reinforcement learning

00:09:38 --> 00:09:45
try it out see if you like it and if you

00:09:41 --> 00:09:48
do do more of that in the future and

00:09:44 --> 00:09:50
that's it that's literally it this is

00:09:47 --> 00:09:52
the core idea now it turns out it's not

00:09:49 --> 00:09:53
difficult to formalize mathematically

00:09:51 --> 00:09:55
but this is really what's going on

00:09:52 --> 00:09:58
if in a neural network in a regular

00:09:54 --> 00:10:00
neural network like this you might say

00:09:57 --> 00:10:02
okay what's the goal

00:09:59 --> 00:10:04
you run the neural network you get an

00:10:01 --> 00:10:06
swer you compare it to the desired

00:10:03 --> 00:10:09
answer and whatever difference you have

00:10:05 --> 00:10:11
between those two you send it back

00:10:08 --> 00:10:13
to change the neural network that's

00:10:10 --> 00:10:15
upervised line in reinforcement

00:10:12 --> 00:10:17
learning you run in your own network you

00:10:14 --> 00:10:20
add a bit of randomness to your action

00:10:16 --> 00:10:22
and then if you like the result your

00:10:19 --> 00:10:30
andomness turns into the desired target

00:10:21 --> 00:10:35
in effect so that's it trivial now math

00:10:29 --> 00:10:37
exists without explaining what these

00:10:34 --> 00:10:38
quations mean the point is not really

00:10:36 --> 00:10:41
to derive them but just to show that

00:10:37 --> 00:10:43
hey exist there are two classes of

00:10:40 --> 00:10:46
reinforcement learning algorithms one of

00:10:42 --> 00:10:47
them is the policy gradient where

00:10:45 --> 00:10:50
basically what you do is that you take

00:10:46 --> 00:10:52
this expression right there the sum of

00:10:49 --> 00:10:54
expected we work the sum of rewards and

00:10:51 --> 00:10:57
it just crunched through the derivatives

00:10:53 --> 00:11:01
you expand the terms iran you do some

00:10:56 --> 00:11:04
algebra and you get a derivative and

00:11:00 --> 00:11:08
miraculously the derivative has exactly

00:11:03 --> 00:11:10
the form that i told you which is try

00:11:07 --> 00:11:12
some actions and if you like them

00:11:09 --> 00:11:14
increase the log probability of the

00:11:11 --> 00:11:16
actions that we truly follows from the

00:11:13 --> 00:11:18
math it's very nice when the intuitive

00:11:15 --> 00:11:20
xplanation has a one-to-one

00:11:17 --> 00:11:22
correspondence to what you get in the

00:11:19 --> 00:11:23
quation even though you have to take my

00:11:21 --> 00:11:27
word for it if you are not familiar with

00:11:22 --> 00:11:28
it that's that equation at the top now

00:11:26 --> 00:11:29
there is a different class of

00:11:27 --> 00:11:30
reinforcement learning algorithms which

00:11:28 --> 00:11:32
is a little bit more difficult to

00:11:29 --> 00:11:35
explain it's called the Q learning based

00:11:31 --> 00:11:40
algorithms they are a bit less stable a

00:11:34 --> 00:11:44
bit more sample efficient and it has the

00:11:39 --> 00:11:47
property that it can learn not only from

00:11:43 --> 00:11:49
the data generated by the actor but from

00:11:46 --> 00:11:51
any other data as well so it has it has

00:11:48 --> 00:11:53
ome rope but it has different

00:11:50 --> 00:11:54
robustness profile which would be a

00:11:52 --> 00:11:58
little bit important but it's only going

00:11:53 --> 00:12:00
to be a technicality so yeah this is the

00:11:57 --> 00:12:01
own policy of policy distinction but

00:11:59 --> 00:12:04
it's a little bit technical so if you

00:12:00 --> 00:12:06
find this hard to understand don't worry

00:12:03 --> 00:12:09
about it if you already know this then

00:12:05 --> 00:12:10
you already know it so now what's the

00:12:08 --> 00:12:13
potential for enforcement learning

00:12:10 --> 00:12:16
wasn't it promised what is it actually

00:12:12 --> 00:12:18
why should we be excited about it

00:12:15 --> 00:12:19
now there are two reasons the

00:12:17 --> 00:12:23
reinforcement learning algorithms of

00:12:18 --> 00:12:25
today already useful and interesting and

00:12:22 --> 00:12:27
especially if you have a really good

00:12:24 --> 00:12:31
simulation of your world you could train

00:12:26 --> 00:12:31
agents to do lots of interesting things

00:12:30 --> 00:12:36
but what's really exciting is if you can

00:12:33 --> 00:12:38
build a super amazing sample efficient

00:12:35 --> 00:12:39
out of reinforcement learning algorithm

00:12:37 --> 00:12:42
we just give it a tiny amount of data

00:12:38 --> 00:12:43
nd the algorithm just crunches through

00:12:41 --> 00:12:46
it and extracts every bit of entropy out

00:12:42 --> 00:12:49
of it in order to learn in the fastest

00:12:45 --> 00:12:51
way possible now today our algorithms

00:12:48 --> 00:12:55
are not particularly efficient they are

00:12:50 --> 00:12:59
data inefficient but as our field keeps

00:12:54 --> 00:13:00
making progress this will change next I

00:12:58 --> 00:13:05
want to dive into the topic of meta

00:12:59 --> 00:13:08
learning the goal of meta learning so

00:13:04 --> 00:13:10
meta learning is a beautiful idea that

00:13:07 --> 00:13:12
doesn't really work but it kind of works

00:13:09 --> 00:13:15
and it's really promising too it's

00:13:11 --> 00:13:19
another promising idea so what's the

00:13:14 --> 00:13:21
dream we have some learning algorithms

00:13:18 --> 00:13:23
perhaps you could use those learning

00:13:20 --> 00:13:26
algorithms in order to learn to learn

00:13:22 --> 00:13:30
I'd be nice if we could learn to learn

00:13:25 --> 00:13:35
so how would you do that you will take a

00:13:29 --> 00:13:37
system which you train it not on one

00:13:34 --> 00:13:39
task but on many tasks and you ask you

00:13:36 --> 00:13:42
that it learns to solve these tasks

00:13:38 --> 00:13:44
quickly and that may actually be enough

00:13:41 --> 00:13:47
so here's how it looks like here's how

00:13:43 --> 00:13:49
most traditional metal earning look

00:13:46 --> 00:13:52
works like it looks like you have a

00:13:48 --> 00:13:55
model which is a big neural network what

00:13:51 --> 00:13:58
you do is that you treat every

00:13:54 --> 00:14:00
instead of training cases you have

00:13:57 --> 00:14:03
training tasks and instead of test cases

00:13:59 --> 00:14:06
you have test tasks so your input may be

00:14:02 --> 00:14:08
instead of just your current test case

00:14:05 --> 00:14:10
it would be all the information about

00:14:07 --> 00:14:13
he new T above the test tasks plus the

00:14:09 --> 00:14:15
test case and you'll try to output the

00:14:12 --> 00:14:18
prediction reaction for that test case

00:14:14 --> 00:14:20
so basically you say yeah I'm going to

00:14:17 --> 00:14:22
give you your ten examples as part of

00:14:19 --> 00:14:25
your input to your model figure out how

00:14:21 --> 00:14:26
to make the best use of them it's a

00:14:24 --> 00:14:29
really

00:14:25 --> 00:14:31
straightforward idea u-turn the neural

00:14:28 --> 00:14:34
network into the learning algorithm by

00:14:30 --> 00:14:37
turning a training task into a training

00:14:33 --> 00:14:40
case so training to ask a constraining

00:14:36 --> 00:14:45
case this is meta learning just one

00:14:39 --> 00:14:47
sentence and so they've been several

00:14:44 --> 00:14:50
success stories which I I think are very

00:14:46 --> 00:14:52
interesting one of the success stories

00:14:49 --> 00:14:54
of meta learning is learning to

00:14:51 --> 00:14:57
recognize characters quickly so they've

00:14:53 --> 00:15:03
been a dataset

00:14:56 --> 00:15:04
produced by MIT by lake corral and this

00:15:02 --> 00:15:06
a data set we have a large number of

00:15:03 --> 00:15:09
different handwritten characters and

00:15:05 --> 00:15:11
people have been able to train extremely

00:15:08 --> 00:15:14
strong meta learning system for this

00:15:10 --> 00:15:15
desk another successful another very

00:15:13 --> 00:15:18
successful example of meta learning is

00:15:14 --> 00:15:22
in that of neural architecture search by

00:15:17 --> 00:15:24
is openly from google where they found

00:15:21 --> 00:15:27
neural architecture that solved one

00:15:24 --> 00:15:28
problem well small problem and then you

00:15:26 --> 00:15:29
could generalize and then if you

00:15:27 --> 00:15:33
successfully solve large problems as

00:15:28 --> 00:15:35
well so this is the kind of the the

00:15:32 --> 00:15:37
small number of bits meta learning is

00:15:34 --> 00:15:38
that when you learn the architecture or

00:15:36 --> 00:15:40
maybe even learn a program small program

00:15:37 --> 00:15:43
or learning algorithm which you apply to

00:15:39 --> 00:15:45
new tasks so this is the other way of

00:15:42 --> 00:15:47
doing meta learning so anyway but the

00:15:44 --> 00:15:49
point is what's happening what's really

00:15:46 --> 00:15:52
happening in meta learning in most cases

00:15:48 --> 00:15:55
is that you turn a training task into a

00:15:51 --> 00:15:55
training case and pretend this is

00:15:54 --> 00:15:58
totally normal

00:15:54 --> 00:16:00
deep learning that's it this is

00:15:57 --> 00:16:05
the entirety of meta learning everything

00:15:59 --> 00:16:07
else suggests minor details next I wanna

00:16:04 --> 00:16:09
dive in so now that I've finished the

00:16:06 --> 00:16:12
introduction section I want to start

00:16:08 --> 00:16:14
discussing different work by different

00:16:11 --> 00:16:15
people from opening I and I want to

00:16:13 --> 00:16:18
start by talking about hindsight

00:16:14 --> 00:16:21
experience replay it's been a large

00:16:17 --> 00:16:23
ffort by and recurvature all to develop

00:16:20 --> 00:16:24
a learning algorithm for reinforcement

00:16:22 --> 00:16:29
learning

00:16:23 --> 00:16:32
that doesn't solve just one task but it

00:16:28 --> 00:16:34
solves many tasks and it learns to make

00:16:31 --> 00:16:37
use of its experience in a much more

00:16:33 --> 00:16:39
fficient way and I want to discuss one

00:16:36 --> 00:16:42
problem in reinforcement learning it's

00:16:38 --> 00:16:48
actually I guess a set of problems which

00:16:41 --> 00:16:49
all related to each other at one really

00:16:47 --> 00:16:52
important thing you need to learn to do

00:16:48 --> 00:16:55
is to explore you're in that you start

00:16:51 --> 00:16:57
out in an environment you don't know

00:16:54 --> 00:16:59
hat to do what do you do so one very

00:16:56 --> 00:17:01
important thing that has to happen is

00:16:58 --> 00:17:03
that you must get rewards from time to

00:17:00 --> 00:17:10
time if you try something and you don't

00:17:03 --> 00:17:11
get rewards then how can you learn so

00:17:09 --> 00:17:14
said that's the kind of the crux of the

00:17:10 --> 00:17:18
problem how do you learn and relatedly

00:17:13 --> 00:17:21
is there any way to meaningfully benefit

00:17:17 --> 00:17:23
from your ex from the experience from

00:17:20 --> 00:17:25
your attempts to from from your failures

00:17:22 --> 00:17:27
if you try to achieve a goal and you

00:17:24 --> 00:17:29
fail can you still learn from it you

00:17:26 --> 00:17:32
tell you instead of asking your

00:17:28 --> 00:17:33
algorithm to achieve a single goal you

00:17:31 --> 00:17:35
want to learn a policy that can achieve

00:17:32 --> 00:17:38
a very large family of goals for example

00:17:34 --> 00:17:39
instead of reaching one state you want

00:17:37 --> 00:17:42
o learn a policy that reaches every

00:17:38 --> 00:17:45
state of your system and what's the

00:17:41 --> 00:17:48
implication anytime you do something you

00:17:44 --> 00:17:52
achieve some state so let's suppose you

00:17:47 --> 00:17:56
say I want to achieve state a I try my

00:17:51 --> 00:17:58
best and I end up achieving state B I

00:17:55 --> 00:17:59
can either conclude well that was

00:17:57 --> 00:18:02
disappointing I haven't learned almost

00:17:58 --> 00:18:05
anything I'm still have no idea how to

00:18:01 --> 00:18:06
cheat how to achieve state aid but

00:18:04 --> 00:18:08
alternatively I can say well wait a

00:18:05 --> 00:18:11
second I've just reached a perfectly

00:18:07 --> 00:18:13
good state which is B can I learn how to

00:18:10 --> 00:18:16
achieve state B from my attempt to

00:18:12 --> 00:18:19
achieve state a an answer is yes you can

00:18:15 --> 00:18:21
d it just works and I just want to

00:18:18 --> 00:18:24
point out this is the one case there is

00:18:20 --> 00:18:27
a small subtlety here which may be

00:18:23 --> 00:18:29
interesting to those of you who are very

00:18:26 --> 00:18:32
familiar with on Part B the distinction

00:18:28 --> 00:18:34
between on policy and off policy when

00:18:31 --> 00:18:36
you try to achieve a you are on you're

00:18:33 --> 00:18:39
doing on policy learning for

00:18:35 --> 00:18:41
eaching the state a but you're doing

00:18:38 --> 00:18:42
off policy learning for it in the state

00:18:40 --> 00:18:44
be because you would take different

00:18:41 --> 00:18:46
actions if you would actually try to

00:18:43 --> 00:18:47
reach they'd be so that's why it's very

00:18:45 --> 00:18:50
important that the algorithm you use

00:18:46 --> 00:18:53
here can support of policy learning but

00:18:49 --> 00:18:56
hat's a minor technicality at the crux

00:18:52 --> 00:18:59
of the idea is you make the

00:18:55 --> 00:19:02
problem easier by ostensibly making it

00:18:58 --> 00:19:05
harder by training a system which can

00:19:01 --> 00:19:07
which aspires to reach to learn to reach

00:19:04 --> 00:19:10
every state to learn to achieve every

00:19:06 --> 00:19:13
goal to learn to master its environment

00:19:09 --> 00:19:16
in general you build a system which

00:19:12 --> 00:19:18
always learn something it learns from

00:19:15 --> 00:19:20
success as well as from failure because

00:19:17 --> 00:19:21
if it tries to do one thing one thing

00:19:19 --> 00:19:23
and it does something else

00:19:20 --> 00:19:25
it now has training data for how to

00:19:22 --> 00:19:27
achieve that something else I want to

00:19:24 --> 00:19:31
show you a video of how this thing works

00:19:26 --> 00:19:33
in practice so one challenge in

00:19:30 --> 00:19:35
reinforcement learning systems is the

00:19:32 --> 00:19:36
need to shape the reward so what does it

00:19:34 --> 00:19:38
mean

00:19:35 --> 00:19:40
it means that at the beginning of the

00:19:37 --> 00:19:43
system at the start of learning then the

00:19:39 --> 00:19:45
system doesn't know much it will

00:19:42 --> 00:19:46
probably not achieve your goal and so

00:19:44 --> 00:19:47
it's important that you design your

00:19:45 --> 00:19:49
eward function to give it gradual

00:19:46 --> 00:19:50
increments to make it smooth and

00:19:48 --> 00:19:52
continuous so that even when the system

00:19:49 --> 00:19:55
is not very good it achieves the goal

00:19:51 --> 00:19:57
now if you give your state your system a

00:19:54 --> 00:19:58
very sparse reward where the reward is

00:19:56 --> 00:20:02
achieved only when you reach a final

00:19:57 --> 00:20:04
state then it becomes very hard for

00:20:01 --> 00:20:06
normal reinforcement learning algorithms

00:20:03 --> 00:20:08
to solve a problem because naturally you

00:20:05 --> 00:20:11
never get the reward so you never learn

00:20:07 --> 00:20:14
o reward means no learning but here

00:20:10 --> 00:20:15
because you learn from failure as well

00:20:13 --> 00:20:17
as from success

00:20:14 --> 00:20:20
this is this problem simply doesn't

00:20:16 --> 00:20:22
occur and so this is this is nice I

00:20:19 --> 00:20:24
think you know let's let's look at the

00:20:21 --> 00:20:26
videos a little bit more like it's nice

00:20:23 --> 00:20:28
how this is it confidently and

00:20:25 --> 00:20:30
energetically moves the little green

00:20:27 --> 00:20:32
buck to its target and here's another

00:20:29 --> 00:20:32
one

00:20:37 --> 00:20:40
you

00:20:50 --> 00:20:54
okay so we can skip the it works on

00:20:52 --> 00:20:55
spawn on the face if you do it on

00:20:53 --> 00:20:59
physical robot as well but we can skip

00:20:54 --> 00:21:02
it so I think the point is that the

00:20:58 --> 00:21:06
hindsight experience replay algorithm is

00:21:01 --> 00:21:08
directionally correct because you want

00:21:05 --> 00:21:11
o make use of all your data and not

00:21:07 --> 00:21:14
only a small fraction of it now one huge

00:21:10 --> 00:21:17
question is where do you get the high

00:21:13 --> 00:21:21
level states where do the high level

00:21:16 --> 00:21:22
states come from because in the work of

00:21:20 --> 00:21:25
showing you so far

00:21:21 --> 00:21:27
the system is asked to achieve low level

00:21:24 --> 00:21:29
States so I think one thing it will

00:21:26 --> 00:21:31
become very important for this kind

00:21:28 --> 00:21:34
approaches is representation learning

00:21:30 --> 00:21:35
and unsupervised learning figure out

00:21:33 --> 00:21:38
what are the rights what are the right

00:21:34 --> 00:21:44
states what's the state space of goals

00:21:37 --> 00:21:47
that's worth achieving now I want to go

00:21:43 --> 00:21:50
through some real meta learning results

00:21:46 --> 00:21:54
and I'll show you a very simple way of

00:21:49 --> 00:21:56
doing seem to reel from simulation to

00:21:53 --> 00:21:59
the physical robot with meta learning

00:21:55 --> 00:22:01
and this is where my pain growl was an a

00:21:58 --> 00:22:07
nd encouraged a really nice intern

00:22:00 --> 00:22:10
project in 2017 so I think we can agree

00:22:06 --> 00:22:13
that in the domain of robotics it would

00:22:09 --> 00:22:15
be nice if you could train your policy

00:22:12 --> 00:22:18
in simulation and then somehow this

00:22:14 --> 00:22:24
knowledge would carry over to the

00:22:17 --> 00:22:27
physical robot now we can build we can

00:22:23 --> 00:22:30
build simulators that are okay but they

00:22:26 --> 00:22:32
can never perfectly match the real world

00:22:29 --> 00:22:34
unless you want to have an insanely slow

00:22:31 --> 00:22:38
simulator and the reason for that is

00:22:33 --> 00:22:41
that it turns out that simulating freaky

00:22:37 --> 00:22:43
simulating contacts is super hard and I

00:22:40 --> 00:22:45
heard somewhere correct me if I'm wrong

00:22:42 --> 00:22:49
that simulating friction is np-complete

00:22:44 --> 00:22:52
I'm not sure but it's like stuff like

00:22:48 --> 00:22:55
that so your simulation is just not

00:22:51 --> 00:22:56
going to match reality there will be

00:22:54 --> 00:22:58
some resemblance but that's it

00:22:55 --> 00:23:00
how can we

00:22:57 --> 00:23:06
address this problem and I want to show

00:22:59 --> 00:23:08
you one simple idea so let's say one

00:23:05 --> 00:23:11
thing once one thing that would be nice

00:23:07 --> 00:23:13
is that if you could learn a policy

00:23:10 --> 00:23:18
that would quickly adapt

00:23:12 --> 00:23:20
itself to the real world well if you

00:23:17 --> 00:23:22
want to learn a policy that can quickly

00:23:19 --> 00:23:24
adapt we need to make sure it has

00:23:21 --> 00:23:28
opportunities to adapt during training

00:23:23 --> 00:23:31
time so what do we do instead of solving

00:23:27 --> 00:23:33
a problem in just one simulator we add a

00:23:30 --> 00:23:36
huge amount of variability to the

00:23:32 --> 00:23:38
simulator we say we will randomize the

00:23:35 --> 00:23:41
friction so we will randomize the masses

00:23:37 --> 00:23:45
the length of the different objects and

00:23:40 --> 00:23:49
their I guess M dimensions so you try to

00:23:44 --> 00:23:51
randomize physics they simulate in lots

00:23:48 --> 00:23:53
of different ways and then importantly

00:23:50 --> 00:23:56
ou don't tell the policy how you

00:23:52 --> 00:23:58
randomized it so what is it going to do

00:23:55 --> 00:24:00
then you take your policy and you put it

00:23:57 --> 00:24:02
in an environment then says well this is

00:23:59 --> 00:24:03
really really tough I don't know what

00:24:01 --> 00:24:05
he masses are and I don't know what the

00:24:02 --> 00:24:08
frictions are I need to try things out

00:24:04 --> 00:24:11
and figure out what the friction is as I

00:24:07 --> 00:24:13
get it responses from the environment so

00:24:10 --> 00:24:16
you're building you you learn a certain

00:24:12 --> 00:24:18
degree of adaptability into the policy

00:24:15 --> 00:24:20
and it actually works

00:24:17 --> 00:24:22
let's want to show you this is what

00:24:19 --> 00:24:25
happens when you just strain a policy in

00:24:21 --> 00:24:27
simulation and deploy it on the physical

00:24:24 --> 00:24:31
robot and here the goal is to bring the

00:24:26 --> 00:24:39
hockey puck towards the red dot and you

00:24:30 --> 00:24:40
will see that it will struggle and the

00:24:38 --> 00:24:42
reason it struggles is because of the

00:24:39 --> 00:24:48
systematic differences between the

00:24:41 --> 00:24:50
simulator and the real physical robot so

00:24:47 --> 00:24:52
I can even the basic movement is

00:24:49 --> 00:24:55
difficult for the policy because the

00:24:51 --> 00:24:56
assumptions are violated so much so if

00:24:54 --> 00:24:58
you do the training as I discussed we

00:24:55 --> 00:25:01
train a recurrent neural network policy

00:24:57 --> 00:25:04
which learns to quickly infer properties

00:25:00 --> 00:25:06
of the simulator in order to accomplish

00:25:03 --> 00:25:07
the task you can then give it the real

00:25:05 --> 00:25:09
thing

00:25:06 --> 00:25:12
the real physics and it will do much

00:25:08 --> 00:25:13
better so now this is not a perfect

00:25:11 --> 00:25:15
echnique but it's definitely very

00:25:12 --> 00:25:17
promising it's promising whenever you

00:25:14 --> 00:25:21
are able to sufficiently randomize the

00:25:16 --> 00:25:23
simulator so it's definitely very nice

00:25:20 --> 00:25:25
to see the closed-loop nature of the

00:25:22 --> 00:25:27
policy you consider it would push the

00:25:24 --> 00:25:29
hockey puck and would correct it

00:25:26 --> 00:25:36
very very gently to bring it to the goal

00:25:28 --> 00:25:38
yeah so that that was cool so that was

00:25:35 --> 00:25:41
very that was a cool application of meta

00:25:37 --> 00:25:43
learning I want to discuss one more

00:25:40 --> 00:25:48
application of meta learning which is

00:25:42 --> 00:25:50
learning a hierarchy of actions and this

00:25:47 --> 00:25:53
was work done by France at all actually

00:25:49 --> 00:25:55
kept in France the ancient who did it

00:25:52 --> 00:26:05
was in high school I mean he wrote this

00:25:54 --> 00:26:08
paper so one thing that would be nice is

00:26:04 --> 00:26:11
if reinforcement learning was

00:26:07 --> 00:26:13
hierarchical if instead of simply taking

00:26:10 --> 00:26:16
micro actions you've had some kind of

00:26:12 --> 00:26:18
little subroutines that you could deploy

00:26:15 --> 00:26:21
maybe the term subroutine is a little

00:26:17 --> 00:26:24
bit too crude but if you had some idea

00:26:20 --> 00:26:27
of which action primitives are worth

00:26:23 --> 00:26:32
starting with now no one has been able

00:26:26 --> 00:26:34
to to get actually like real value add

00:26:31 --> 00:26:36
from curricula reinforcement learning

00:26:33 --> 00:26:37
yet so far all the really cool results

00:26:35 --> 00:26:40
all the really convincing is also

00:26:36 --> 00:26:43
reinforcement learning do not use it

00:26:39 --> 00:26:45
hat's because we haven't quite figured

00:26:42 --> 00:26:46
out what's the right way for

00:26:44 --> 00:26:48
einforcement learning for her ocular

00:26:45 --> 00:26:50
einforcement learning

00:26:47 --> 00:26:56
I just want to show you one very simple

00:26:49 --> 00:26:58
approach where you use meta-learning to

00:26:55 --> 00:27:02
learn to learn a hierarchy of actions so

00:26:57 --> 00:27:06
here's what you do you have in this

00:27:01 --> 00:27:08
pecific work you have a certain yeah

00:27:05 --> 00:27:10
let's say you have a certain number of

00:27:07 --> 00:27:12
low-level primitives let's say you have

00:27:09 --> 00:27:16
two ten of them and you have a

00:27:11 --> 00:27:21
distribution of tasks and your goal is

00:27:15 --> 00:27:25
to learn low level primitives such that

00:27:20 --> 00:27:26
when they are used inside a very brief

00:27:24 --> 00:27:28
run of some reinforcement learning

00:27:25 --> 00:27:32
algorithm you will make as much progress

00:27:27 --> 00:27:34
as possible so the idea is you want to

00:27:31 --> 00:27:36
get the greatest amount of progress you

00:27:33 --> 00:27:39
want to learn policies that result in

00:27:35 --> 00:27:42
the great story you want to learn

00:27:38 --> 00:27:44
primitives that result in the greatest

00:27:41 --> 00:27:46
amount of progress is possible when used

00:27:43 --> 00:27:47
inside learning so this is a meta

00:27:45 --> 00:27:50
learning setter because any distribution

00:27:46 --> 00:27:54
of tasks and here we've had if we've had

00:27:50 --> 00:27:55
a little maze here the distribution of a

00:27:53 --> 00:27:59
mazes and in this case the little bug

00:27:54 --> 00:28:02
learned three policies which move it in

00:27:58 --> 00:28:03
its fixed direction and as a result of

00:28:01 --> 00:28:05
having this hierarchy you're able to

00:28:02 --> 00:28:06
solve problems really fast but only when

00:28:04 --> 00:28:08
the hierarchy is correct

00:28:05 --> 00:28:10
so horican reinforcement learning is

00:28:07 --> 00:28:13
till working progress and this was an

00:28:09 --> 00:28:20
d this work is an interesting proof

00:28:12 --> 00:28:22
point of how Haruko reinforcement could

00:28:19 --> 00:28:27
be like how heretical reinforcement

00:28:21 --> 00:28:30
learning could be like if it worked now

00:28:26 --> 00:28:33
I want to just spend one slide

00:28:29 --> 00:28:36
addressing the limitations of high

00:28:32 --> 00:28:42
capacity method learning the specific

00:28:35 --> 00:28:45
limitation is that the training test

00:28:41 --> 00:28:48
distribution has to be equal to the test

00:28:44 --> 00:28:51
distribution and I think this is a

00:28:47 --> 00:28:53
real limitation because in reality you

00:28:50 --> 00:28:55
the new test that you want to learn do

00:28:52 --> 00:28:58
in some ways being fundamentally

00:28:54 --> 00:29:00
different from anything you've seen so

00:28:57 --> 00:29:03
far so for example if you go to school

00:28:59 --> 00:29:06
you learn lots of useful things but then

00:29:02 --> 00:29:08
they go to work only a fraction of this

00:29:05 --> 00:29:11
of the things that you've learned

00:29:07 --> 00:29:12
carries over you need to learn if you

00:29:10 --> 00:29:16
need quite a few more things from

00:29:11 --> 00:29:18
scratch so metal owning would struggle

00:29:15 --> 00:29:20
with that because it really assumes that

00:29:17 --> 00:29:22
he Train the training data is that the

00:29:19 --> 00:29:23
distribution over the training task has

00:29:21 --> 00:29:26
to be equal to the distribution of the

00:29:22 --> 00:29:29
test tasks that's the limitation I think

00:29:25 --> 00:29:35
that as we develop better algorithms for

00:29:28 --> 00:29:36
being robust when the test tasks outside

00:29:34 --> 00:29:39
of the distribution of the training

00:29:35 --> 00:29:43
tasks the metal on would work much

00:29:38 --> 00:29:46
better now I want to talk about self

00:29:42 --> 00:29:50
play the links of play is a very cool

00:29:45 --> 00:29:53
topic that's starting to get attention

00:29:49 --> 00:29:57
ly now and I want to start by

00:29:52 --> 00:30:01
reviewing very old work called TD gammon

00:29:56 --> 00:30:03
it's back from all the way from 1992 so

00:30:00 --> 00:30:07
it's 26 years old now it was done by

00:30:02 --> 00:30:14
Jerry to cero so this work is really

00:30:06 --> 00:30:17
incredible because it has so much

00:30:13 --> 00:30:21
relevance today what they did basically

00:30:16 --> 00:30:25
they said okay let's take two neural

00:30:20 --> 00:30:27
networks and let them let them play

00:30:24 --> 00:30:29
against each other let them play

00:30:26 --> 00:30:30
backgammon against each other and let

00:30:28 --> 00:30:33
hem in tray let them be trained

00:30:29 --> 00:30:37
particularly so it's a super-modern

00:30:32 --> 00:30:40
approach and you would think this was a

00:30:36 --> 00:30:42
paper from 2017 except that then you

00:30:39 --> 00:30:43
look at this plot it shows that you only

00:30:41 --> 00:30:45
have ten hidden units twenty hidden

00:30:42 --> 00:30:48
units forty and eighty for the different

00:30:44 --> 00:30:51
M colors where you notice that the

00:30:47 --> 00:30:53
largest neural network works best so in

00:30:50 --> 00:30:55
some ways not much has changed and this

00:30:52 --> 00:30:58
the evidence

00:30:54 --> 00:30:59
and in fact they were able to beat the

00:30:57 --> 00:31:01
world champion in backgammon and they

00:30:58 --> 00:31:03
were able to discover new strategies

00:31:00 --> 00:31:07
that the best human a backgammon players

00:31:02 --> 00:31:08
weren't ever not noticed and they've

00:31:06 --> 00:31:10
determined that the strategy discovered

00:31:07 --> 00:31:12
by TD gammon actually better

00:31:09 --> 00:31:17
so that's pure self play with cue

00:31:11 --> 00:31:20
learning which is which remained dormant

00:31:16 --> 00:31:28
until the DQ and work with Atari mid

00:31:19 --> 00:31:31
mind so now other examples of self play

00:31:27 --> 00:31:33
include alphago zero which was able to

00:31:30 --> 00:31:35
learn to beat the world champion and go

00:31:32 --> 00:31:38
without using any external data

00:31:34 --> 00:31:41
whatsoever another result of this vein

00:31:37 --> 00:31:43
is by open AI which is our dota 2 BOTS

00:31:40 --> 00:31:47
which was able to build the world

00:31:42 --> 00:31:50
champion on the 1v1 version of the game

00:31:46 --> 00:31:53
and so I want to spend a little bit of

00:31:49 --> 00:31:59
time talking about the allure of self

00:31:52 --> 00:32:03
play and why I think it's exciting so

00:31:58 --> 00:32:06
ne important problem that's a that

00:32:02 --> 00:32:10
's that we must face as we try to

00:32:05 --> 00:32:12
build truly intelligent systems is what

00:32:09 --> 00:32:16
is the task what are we actually

00:32:11 --> 00:32:18
teaching the systems to do and one very

00:32:15 --> 00:32:25
attractive attribute of self play is

00:32:17 --> 00:32:27
that the agents create the environment

00:32:24 --> 00:32:31
by virtue of the agent acting in the

00:32:26 --> 00:32:33
nvironment the environment becomes

00:32:30 --> 00:32:35
difficult for the other agents and you

00:32:32 --> 00:32:37
can see here an example of an iguana

00:32:34 --> 00:32:38
interacting with snakes that try to eat

00:32:36 --> 00:32:41
it

00:32:37 --> 00:32:44
unsuccessfully this time so we can see

00:32:40 --> 00:32:47
what will happen in a moment the iguana

00:32:43 --> 00:32:50
strains best and so the fact you have

00:32:46 --> 00:32:51
this arms race between the snakes and

00:32:49 --> 00:32:55
the iguana

00:32:50 --> 00:32:57
motivates their development potentially

00:32:54 --> 00:33:00
without bound and this is what happens

00:32:56 --> 00:33:03
in effect in but in biological evolution

00:32:59 --> 00:33:07
ow interesting work in this direction

00:33:02 --> 00:33:10
was done in 1994 but Carl says there is

00:33:06 --> 00:33:12
a really cool video on YouTube by Carl

00:33:09 --> 00:33:13
seems you should check it out which

00:33:11 --> 00:33:16
really kind of shows all the work that

00:33:12 --> 00:33:18
he's done and here you have a little

00:33:15 --> 00:33:20
competition between agents where you

00:33:17 --> 00:33:23
evolved both the behavior and their

00:33:19 --> 00:33:25
morphology when you when the agents is

00:33:22 --> 00:33:30
trying to gain possession of a green

00:33:24 --> 00:33:31
cube and so you can see that the agents

00:33:29 --> 00:33:37
create the challenge for each other and

00:33:30 --> 00:33:39
that's why they need to develop so one

00:33:36 --> 00:33:44
thing that we did and this is work by

00:33:38 --> 00:33:47
advance a little from open ai is we said

00:33:43 --> 00:33:49
okay well can we demonstrate some

00:33:46 --> 00:33:51
unusual results in self play that would

00:33:48 --> 00:33:54
really convince us that there is

00:33:50 --> 00:33:57
omething there so what we did here is

00:33:53 --> 00:33:59
that we created a small a small ring and

00:33:56 --> 00:34:01
you have these two humanoid figures and

00:33:58 --> 00:34:04
their goal is just to push each other

00:34:00 --> 00:34:06
outside the ring and they don't know

00:34:03 --> 00:34:08
anything about wrestling they don't know

00:34:05 --> 00:34:09
anything about standing your balance in

00:34:07 --> 00:34:11
each other they don't know anything

00:34:08 --> 00:34:14
about centers of gravity all they know

00:34:10 --> 00:34:15
is that if you don't do a good job then

00:34:13 --> 00:34:18
your competition is going to do a better

00:34:14 --> 00:34:23
job now one of the really attractive

00:34:17 --> 00:34:26
things about self play is that you

00:34:22 --> 00:34:30
always have an opponent that's roughly

00:34:25 --> 00:34:33
as good as you are in order to learn you

00:34:29 --> 00:34:36
need to sometimes win and sometimes lose

00:34:32 --> 00:34:40
but you can't always win sometimes you

00:34:35 --> 00:34:44
must fail sometimes you must succeed so

00:34:39 --> 00:34:45
let's see what will happen here yeah so

00:34:43 --> 00:34:49
it was able to do so the green humanoid

00:34:44 --> 00:34:53
was able to block the ball in a Cell in

00:34:48 --> 00:34:53
a well balanced self play environment

00:34:53 --> 00:34:59
petition is always level no matter how

00:34:55 --> 00:35:01
good you are or how bad you are you have

00:34:58 --> 00:35:03
a competition that makes it exact

00:35:00 --> 00:35:05
ly of exactly the right challenge

00:35:02 --> 00:35:07
for you on one thing here so this video

00:35:04 --> 00:35:10
shows transfer learning it takes a

00:35:06 --> 00:35:13
little wrestling humanoid and you take

00:35:09 --> 00:35:15
its friend away and you start applying a

00:35:12 --> 00:35:17
big large random forces on it and you

00:35:14 --> 00:35:19
see if it can maintain its balance and

00:35:16 --> 00:35:23
the answer turns out to be but yes it

00:35:19 --> 00:35:26
can because it's been trained against an

00:35:22 --> 00:35:28
opponent it pushes it and so that's why

00:35:25 --> 00:35:30
even if it doesn't understand where the

00:35:27 --> 00:35:32
fresh force is being applied on it it's

00:35:29 --> 00:35:36
till able to balance itself so this is

00:35:31 --> 00:35:37
one potentially attractive feature of

00:35:35 --> 00:35:41
subway environments that you could learn

00:35:36 --> 00:35:43
a certain broad set of skills although

00:35:40 --> 00:35:45
it's real hard to control the square the

00:35:42 --> 00:35:47
skills will be and so the biggest open

00:35:44 --> 00:35:50
question with this research is how do

00:35:46 --> 00:35:54
you learn agents in a software

00:35:49 --> 00:35:56
nvironment such that they do whatever

00:35:53 --> 00:35:59
they do but then they are able to solve

00:35:55 --> 00:36:01
a battery of tasks that is useful for us

00:35:58 --> 00:36:07
that is explicitly specified externally

00:36:00 --> 00:36:10
eah I also want to want to highlight

00:36:06 --> 00:36:13
one attribute of self play environments

00:36:09 --> 00:36:14
that we've observed in our dota BOTS and

00:36:12 --> 00:36:16
that is that we've seen a very rapid

00:36:13 --> 00:36:18
increase in the competence of the bots

00:36:15 --> 00:36:20
o over the period over the course of

00:36:17 --> 00:36:25
maybe five months we've seen the bots go

00:36:19 --> 00:36:29
from playing totally randomly all the

00:36:24 --> 00:36:31
way to the world champion and the reason

00:36:28 --> 00:36:34
for that is that once you have a self

00:36:30 --> 00:36:37
play environment if we put compute into

00:36:33 --> 00:36:40
it you turn it into data self play

00:36:36 --> 00:36:42
allows you to turn compute into data and

00:36:40 --> 00:36:45
I think you will see a lot more of that

00:36:41 --> 00:36:47
as being an extremely important thing to

00:36:44 --> 00:36:51
be able to turn compute into essentially

00:36:46 --> 00:36:52
data generalization simply because the

00:36:50 --> 00:36:54
speed of neural net processors will

00:36:51 --> 00:36:56
increase very dramatically over the next

00:36:53 --> 00:36:58
few years so neural net cycles will be

00:36:55 --> 00:37:01
cheap and it will be important to make

00:36:57 --> 00:37:03
use of this new of newly-found

00:37:00 --> 00:37:05
overabundance of cycles

00:37:02 --> 00:37:09
I also want to talk a little bit about

00:37:04 --> 00:37:12
he endgame of the self approach so one

00:37:08 --> 00:37:15
thing that we know about the human brain

00:37:11 --> 00:37:18
is that it has increased in sized fairly

00:37:14 --> 00:37:22
rapidly over the past two million years

00:37:17 --> 00:37:26
my theory the reason I think it happened

00:37:21 --> 00:37:28
is because our ancestors got to a point

00:37:25 --> 00:37:31
where the thing that's most important

00:37:27 --> 00:37:34
for your survival is your standing in

00:37:30 --> 00:37:37
the tribe and less the tiger and the

00:37:33 --> 00:37:40
lion once the most important thing is

00:37:36 --> 00:37:41
how you deal with those other things

00:37:39 --> 00:37:43
which have a large brain then it really

00:37:40 --> 00:37:45
helps to have a slightly larger brain

00:37:42 --> 00:37:48
and I think that's what happened and

00:37:44 --> 00:37:49
there exists at least one paper from

00:37:47 --> 00:37:52
science which supports this point of

00:37:48 --> 00:37:55
view so apparently there has been

00:37:51 --> 00:37:58
convergent evolution between social apps

00:37:54 --> 00:38:03
and social Birds even though in terms of

00:37:57 --> 00:38:05
various behaviors even though the

00:38:02 --> 00:38:08
divergence in evolutionary timescale

00:38:04 --> 00:38:10
between humans and birds has occurred a

00:38:07 --> 00:38:13
very long time ago and humans and humans

00:38:09 --> 00:38:18
apes and humans apes and birds have very

00:38:12 --> 00:38:20
different brain structure so I think

00:38:17 --> 00:38:23
what should happen if we succeed if we

00:38:19 --> 00:38:24
successfully follow the path of this

00:38:22 --> 00:38:26
approach is that you should create a

00:38:23 --> 00:38:30
society of agents which will have

00:38:25 --> 00:38:34
language and theory of mind negotiation

00:38:29 --> 00:38:36
social skills trade economy politics

00:38:33 --> 00:38:38
justice system all these things should

00:38:35 --> 00:38:40
happen inside the multi-agent

00:38:37 --> 00:38:42
environment and it will also be some

00:38:39 --> 00:38:44
alignment issue of how do you make sure

00:38:41 --> 00:38:47
that the agents we learn behave in a way

00:38:43 --> 00:38:52
that we want now I want to make a

00:38:46 --> 00:38:57
speculative digression here which is I

00:38:51 --> 00:39:02
want to make the following observation

00:38:56 --> 00:39:06
if you believe that this kind of society

00:39:01 --> 00:39:11
of agents is a plausible place where

00:39:05 --> 00:39:13
truly where the fuller fully general

00:39:10 --> 00:39:17
intelligence will emerge and if you

00:39:12 --> 00:39:18
accept that our experience with the dota

00:39:16 --> 00:39:21
BOTS we've seen a very rapid increase in

00:39:17 --> 00:39:23
competence will carry over once all the

00:39:20 --> 00:39:27
details are right if you assume both of

00:39:22 --> 00:39:28
these conditions then it should follow

00:39:26 --> 00:39:31
that we should see a very rapid increase

00:39:27 --> 00:39:35
in the competence of our agents as they

00:39:30 --> 00:39:39
live in the Society of agents so now

00:39:34 --> 00:39:42
that we've talked about a potentially

00:39:38 --> 00:39:44
interesting way of increasing the

00:39:41 --> 00:39:47
competence and teachings of an agent's

00:39:43 --> 00:39:49
ocial skills and language and a lot of

00:39:46 --> 00:39:51
things that actually exist in humans as

00:39:48 --> 00:39:58
well we want to talk a little bit about

00:39:50 --> 00:39:59
how you convey goals to agents and the

00:39:57 --> 00:40:01
question of the main goal to eight calls

00:39:58 --> 00:40:06
to agents is just a technical problem

00:40:00 --> 00:40:10
but it will be important because it is a

00:40:05 --> 00:40:13
lot more likely than not that the agents

00:40:09 --> 00:40:15
of evil train will eventually be

00:40:12 --> 00:40:18
dramatically smarter than us and this is

00:40:14 --> 00:40:23
work by the opening eye safety team by

00:40:17 --> 00:40:24
Paul Christiana at all and others so I'm

00:40:22 --> 00:40:26
just going to show you this video which

00:40:23 --> 00:40:30
basically explains how the whole thing

00:40:25 --> 00:40:34
works you there is some behavior looking

00:40:29 --> 00:40:37
for and you the human gets to see pairs

00:40:33 --> 00:40:42
of behaviors and you simply click on the

00:40:36 --> 00:40:46
one that looks better and after a very

00:40:41 --> 00:40:50
modest number of clicks you can get this

00:40:45 --> 00:40:58
little simulated leg to do back flips

00:40:49 --> 00:41:01
and there

00:40:57 --> 00:41:03
go picking out the back flips and in

00:41:00 --> 00:41:07
this to get this specific behavior it

00:41:02 --> 00:41:10
ook about 500 clicks by human

00:41:06 --> 00:41:12
notators the way it works is that you

00:41:09 --> 00:41:14
take all the so this is a very data

00:41:11 --> 00:41:16
efficient reinforcement learning

00:41:13 --> 00:41:19
algorithm but it is efficient in terms

00:41:15 --> 00:41:21
of rewards and not in terms of the

00:41:18 --> 00:41:23
nvironment interactions so what you do

00:41:20 --> 00:41:27
here is that you take all the clicks so

00:41:22 --> 00:41:30
you've got your here is one B here which

00:41:26 --> 00:41:33
is better than other you fit a reward

00:41:29 --> 00:41:35
function a numerical reward function to

00:41:32 --> 00:41:36
those clicks so you want to fit a reward

00:41:34 --> 00:41:38
function which satisfies those clicks

00:41:35 --> 00:41:39
and you optimize this reward

00:41:37 --> 00:41:43
function with reinforcement learning and

00:41:38 --> 00:41:46
it actually works so this requires 500

00:41:42 --> 00:41:49
bits of information you've also been

00:41:45 --> 00:41:50
able to train lots of Atari games using

00:41:48 --> 00:41:52
several thousand bits of information so

00:41:49 --> 00:41:55
in all these cases you had human and

00:41:51 --> 00:41:58
human annotators or human judges just

00:41:54 --> 00:42:01
like in the previous slide looking at

00:41:57 --> 00:42:03
he pairs of trajectories and clicking

00:42:00 --> 00:42:08
on the one that they thought was better

00:42:02 --> 00:42:11
and here's an example of an unusual goal

00:42:07 --> 00:42:15
where this is a car racing game but the

00:42:10 --> 00:42:18
goal was to ask the the agent to train

00:42:14 --> 00:42:20
the white car drive right behind the

00:42:17 --> 00:42:22
orange car so it's a different goal and

00:42:19 --> 00:42:24
it was very straightforward to

00:42:21 --> 00:42:31
communicate this goal using this

00:42:23 --> 00:42:32
approach so then to finish off alignment

00:42:30 --> 00:42:36
is a technical problem it has to be

00:42:31 --> 00:42:37
solved but of course the determination

00:42:35 --> 00:42:39
of the correct goals we want array

00:42:36 --> 00:42:42
assistance the systems to have will be a

00:42:38 --> 00:42:45
very challenging political problem and

00:42:41 --> 00:42:48
on this note I want to thank you so much

00:42:44 --> 00:42:49
for your attention and I just want to

00:42:47 --> 00:42:51
say that will be a happy hour at

00:42:48 --> 00:42:53
Cambridge Brewing Company at 8:45 if you

00:42:50 --> 00:42:56
want to chat more about AI and other

00:42:52 --> 00:42:58
topics please come by I think that

00:42:55 --> 00:42:58
deserves an applause

00:43:03 --> 00:43:10
so back propagation is a or neural

00:43:07 --> 00:43:11
networks of bio-inspired but back

00:43:09 --> 00:43:13
propagation doesn't look as though it's

00:43:10 --> 00:43:15
what's going on in the brain because

00:43:12 --> 00:43:17
signals in the brain go one direction

00:43:14 --> 00:43:19
down the axons whereas back propagation

00:43:16 --> 00:43:24
requires the errors to be propagated

00:43:18 --> 00:43:25
back up the the wires so can you just

00:43:23 --> 00:43:28
alk a little bit about that whole

00:43:24 --> 00:43:29
situation where it looks as the brain is

00:43:27 --> 00:43:32
doing something a bit different than our

00:43:28 --> 00:43:34
highly successful algorithms our

00:43:31 --> 00:43:36
algorithm is going to be improved once

00:43:33 --> 00:43:38
we figure out what the brain is doing or

00:43:35 --> 00:43:40
is the brain really sending signals back

00:43:37 --> 00:43:42
even though it's got no obvious way of

00:43:39 --> 00:43:45
doing that what's what's happening in

00:43:41 --> 00:43:46
that area so that's a great question so

00:43:44 --> 00:43:49
first of all I'll say that the true

00:43:45 --> 00:43:53
answer is that the honest answer is that

00:43:48 --> 00:43:55
I don't know but I have opinions and so

00:43:52 --> 00:44:00
I'll say two things

00:43:54 --> 00:44:02
but first of all given that look if you

00:43:59 --> 00:44:05
agree if we agree like so rather it is a

00:44:01 --> 00:44:09
true fact the back propagation solves

00:44:04 --> 00:44:10
the problem of circuit search this

00:44:08 --> 00:44:13
problem feels like an extremely

00:44:09 --> 00:44:15
fundamental problem and for this reason

00:44:12 --> 00:44:17
I think that it's unlikely to go away

00:44:14 --> 00:44:20
now you also write that the brain

00:44:16 --> 00:44:21
doesn't obviously do back propagation

00:44:19 --> 00:44:23
although they've been multiple proposals

00:44:20 --> 00:44:28
of how it could be how it could be doing

00:44:22 --> 00:44:30
them for example there's been a work by

00:44:27 --> 00:44:32
Tim little crap and others where they've

00:44:29 --> 00:44:34
shown that if you use that it's possible

00:44:31 --> 00:44:36
to learn a different set of connections

00:44:33 --> 00:44:38
but can be used for the backward pass

00:44:36 --> 00:44:41
and that can result in successful

00:44:37 --> 00:44:43
earning now the reason this hasn't been

00:44:40 --> 00:44:45
like really pushed to the limit by

00:44:42 --> 00:44:47
practitioners is because they say well I

00:44:44 --> 00:44:49
got TF to the gradients I'm just not

00:44:46 --> 00:44:52
going to worry about it but you are

00:44:48 --> 00:44:53
right this is an important issue and you

00:44:51 --> 00:44:56
know one of two things is going to

00:44:52 --> 00:44:57
happen so my personal opinion is that

00:44:55 --> 00:44:59
back propagation is just going to stay

00:44:56 --> 00:45:01
with us till the very end and will

00:44:58 --> 00:45:03
actually build fully human level and

00:45:00 --> 00:45:08
beyond systems before we understand how

00:45:02 --> 00:45:10
the brain does what it does so that's

00:45:07 --> 00:45:13
what I believe but of course it is a

00:45:09 --> 00:45:15
difference that has to be acknowledged

00:45:12 --> 00:45:19
okay thank you do you think it was a

00:45:14 --> 00:45:22
fair matchup for the dota bot and that

00:45:18 --> 00:45:24
person given the constraints of the

00:45:21 --> 00:45:27
system so I'd say that like the biggest

00:45:23 --> 00:45:29
advantage computers have in games like

00:45:26 --> 00:45:31
this like one of the big advantages is

00:45:28 --> 00:45:34
that they obviously have a better

00:45:30 --> 00:45:36
eaction time although in DotA in

00:45:33 --> 00:45:39
particular the number of clicks per

00:45:35 --> 00:45:41
second over the top players is fairly

00:45:38 --> 00:45:43
small which is different from Starcraft

00:45:40 --> 00:45:46
so in Starcraft stuff up is a very

00:45:42 --> 00:45:48
compact mechanically heavy game because

00:45:45 --> 00:45:50
of a large number of units and so the

00:45:47 --> 00:45:53
top players that is click all the time

00:45:49 --> 00:45:55
in DotA every player controls just one

00:45:52 --> 00:45:57
hero and so that greatly reduces the

00:45:55 --> 00:45:59
total number of actions they need to

00:45:56 --> 00:46:03
make now still precision matters I think

00:45:58 --> 00:46:04
that will discover that but what I think

00:46:02 --> 00:46:06
it'll really happen is if you'll

00:46:03 --> 00:46:12
discover that computers have the

00:46:05 --> 00:46:17
advantage in any domain or rather every

00:46:11 --> 00:46:19
domain not yet so do you think that the

00:46:16 --> 00:46:22
mergent behaviors from the agent were

00:46:18 --> 00:46:23
actually kind of directed because the

00:46:21 --> 00:46:24
constraints already kinda in place like

00:46:22 --> 00:46:27
so it was kind of forced discover those

00:46:23 --> 00:46:29
or do you think that like that was

00:46:26 --> 00:46:31
actually something quite novel that like

00:46:28 --> 00:46:33
wow it actually discovered these on its

00:46:30 --> 00:46:34
own like you didn't actually am biased

00:46:32 --> 00:46:36
towards constraining it so it's

00:46:33 --> 00:46:39
definitely discover new strategies and I

00:46:35 --> 00:46:41
can share an anecdote where our tester

00:46:38 --> 00:46:45
we have a probe which would test the

00:46:40 --> 00:46:47
bots and he played against for a long

00:46:44 --> 00:46:49
time and the bots would do all kinds of

00:46:46 --> 00:46:51
things against the player the human

00:46:48 --> 00:46:54
player which were effective then at some

00:46:50 --> 00:46:56
point that Pro decided to play against

00:46:53 --> 00:46:57
he better plot Pro and he decided to

00:46:55 --> 00:47:01
imitate one of the things that the bot

00:46:56 --> 00:47:03
was doing and this image but by

00:47:00 --> 00:47:05
imitating if he was able to defeat a

00:47:02 --> 00:47:07
better pro so I think I think the

00:47:04 --> 00:47:09
strategy discovers are real and so like

00:47:06 --> 00:47:12
it means that like this very real

00:47:08 --> 00:47:16
transformative Tran you know I would say

00:47:11 --> 00:47:18
I think what that means is that he

00:47:15 --> 00:47:20
because the strategies discovered by the

00:47:17 --> 00:47:23
bot of the humans it means that we like

00:47:19 --> 00:47:26
a fundamental game plays deeply related

00:47:22 --> 00:47:28
for a long time now I've heard that the

00:47:25 --> 00:47:31
objective of reinforcement learning is

00:47:27 --> 00:47:34
to determine a policy that chooses an

00:47:30 --> 00:47:37
action to maximize the expected reward

00:47:33 --> 00:47:39
which is what you said earlier would you

00:47:36 --> 00:47:42
ever want to look at the standard

00:47:38 --> 00:47:45
eviation of possible rewards does that

00:47:41 --> 00:47:46
even make sense yeah I mean I think for

00:47:44 --> 00:47:50
sure I think it's a really application

00:47:45 --> 00:47:53
dependent one of the reasons to maximize

00:47:49 --> 00:47:54
the expected reward it's because it's

00:47:52 --> 00:47:59
easier to design algorithms for it

00:47:53 --> 00:48:00
so you write down this equation the

00:47:58 --> 00:48:03
formula you do a little bit of

00:47:59 --> 00:48:04
derivation you get something which

00:48:02 --> 00:48:09
amounts to a nice-looking algorithm now

00:48:03 --> 00:48:11
I think there exist like really there

00:48:08 --> 00:48:12
xist applications where you'd never

00:48:10 --> 00:48:14
want to make mistakes and you want to

00:48:11 --> 00:48:17
work on the standard deviation as well

00:48:13 --> 00:48:19
but in practice it seems that the just

00:48:16 --> 00:48:24
looking at the expected reward covers a

00:48:18 --> 00:48:28
large fraction of the B the situation as

00:48:23 --> 00:48:28
you'd like to apply this door Thanks

00:48:28 --> 00:48:36
we talked last week about motivations

00:48:32 --> 00:48:40
and that has a lot to do with the

00:48:35 --> 00:48:43
reinforcement and some of the ideas is

00:48:39 --> 00:48:46
that the our motivations are actually

00:48:42 --> 00:48:49
connection with others and cooperation

00:48:45 --> 00:48:51
and I'm wondering if they're thrown off

00:48:48 --> 00:48:53
and I understand it's very popular to

00:48:50 --> 00:48:57
have the computers play these

00:48:52 --> 00:49:01
competitive games but is there any use

00:48:56 --> 00:49:04
in like having an agent self play

00:49:00 --> 00:49:06
collaboratively collaborative games Yeah

00:49:03 --> 00:49:10
right that's an extremely good question

00:49:05 --> 00:49:12
I don't think one place from which we

00:49:09 --> 00:49:13
can get some inspiration is from the

00:49:11 --> 00:49:18
volution of cooperation

00:49:12 --> 00:49:22
like I think cooperation like we

00:49:17 --> 00:49:23
cooperate ultimately because it's much

00:49:21 --> 00:49:28
better for you the person to be

00:49:22 --> 00:49:29
cooperative than not and so I think what

00:49:27 --> 00:49:32
should happen

00:49:28 --> 00:49:35
if you have a sufficiently open-ended

00:49:31 --> 00:49:38
game then cooperation will be the

00:49:34 --> 00:49:40
winning strategy and so I think we will

00:49:37 --> 00:49:45
get cooperation whether we like it or

00:49:39 --> 00:49:48
not Hey

00:49:44 --> 00:49:51
ou mentioned the complexity of this

00:49:47 --> 00:49:53
imulation of friction I was wondering

00:49:50 --> 00:49:56
if you feel that there exists open

00:49:52 --> 00:49:58
complexity theoretic problems relevant

00:49:55 --> 00:50:00
o relevant to AI or whether it's just a

00:49:57 --> 00:50:03
matter of finding good approximations

00:49:59 --> 00:50:05
that humans of the types of problems

00:50:02 --> 00:50:10
that humans tend to solve yeah so

00:50:04 --> 00:50:12
complexity theory well like at a very

00:50:09 --> 00:50:15
basic level we know that whatever

00:50:11 --> 00:50:18
algorithm we gonna run is going to run

00:50:14 --> 00:50:21
fairly efficiently on some hardware so

00:50:17 --> 00:50:23
that puts a pretty strict upper bound

00:50:20 --> 00:50:26
and the true complexity of the problems

00:50:22 --> 00:50:27
we're solving but by definition we are

00:50:25 --> 00:50:31
solving problems which aren't too hard

00:50:26 --> 00:50:33
in a complexity theoretic sense now it

00:50:30 --> 00:50:36
is also the case that many of the

00:50:32 --> 00:50:38
problems so while the overall thing that

00:50:35 --> 00:50:40
we do is not hard from a complexity

00:50:37 --> 00:50:42
theory makes sense and indeed humans

00:50:39 --> 00:50:46
cannot solve np-complete problems in

00:50:41 --> 00:50:48
general it is true that many of the like

00:50:45 --> 00:50:50
optimization problems that we pose to

00:50:47 --> 00:50:52
ur algorithms are intractable in the

00:50:49 --> 00:50:55
general case starting from a neural net

00:50:51 --> 00:50:57
optimization itself it is easy to create

00:50:54 --> 00:50:58
a family of data sets for a neural

00:50:56 --> 00:51:00
network with a very small number of

00:50:57 --> 00:51:04
neurons such that find a global optimum

00:50:59 --> 00:51:07
is np-complete and so how do we avoid it

00:51:03 --> 00:51:10
well we just try gradient descent anyway

00:51:06 --> 00:51:15
and somehow it works but without

00:51:09 --> 00:51:18
question like we cannot we do not solve

00:51:14 --> 00:51:21
problems which are truly intractable so

00:51:17 --> 00:51:22
I mean I hope this answer the question

00:51:20 --> 00:51:25
hello

00:51:21 --> 00:51:27
it seems like an important sub-problem

00:51:24 --> 00:51:30
on the path towards AGI will be

00:51:26 --> 00:51:32
understanding language and the state of

00:51:29 --> 00:51:34
generative language modeling right now

00:51:31 --> 00:51:36
is pretty abysmal what do you think are

00:51:33 --> 00:51:38
the most productive research

00:51:35 --> 00:51:40
trajectories towards generative language

00:51:37 --> 00:51:42
models so

00:51:39 --> 00:51:43
I'll first say that you are completely

00:51:41 --> 00:51:45
correct that the situation with language

00:51:42 --> 00:51:48
is still far from great although

00:51:44 --> 00:51:52
progress has been made even without any

00:51:47 --> 00:51:54
particular innovations beyond models

00:51:51 --> 00:51:56
that exist today simply scaling up

00:51:53 --> 00:51:59
models that exist today on larger

00:51:55 --> 00:52:01
datasets is going to go surprisingly far

00:51:58 --> 00:52:03
not even large datasets but larger and

00:52:00 --> 00:52:05
eeper models for example if you trained

00:52:02 --> 00:52:08
a language model be the thousand layers

00:52:04 --> 00:52:11
and it's the same layer I think it's

00:52:07 --> 00:52:13
gonna be a pretty amazing language model

00:52:10 --> 00:52:15
ike we don't have the cycles for it yet

00:52:12 --> 00:52:18
but to think it will change very soon

00:52:14 --> 00:52:22
ow I also agree with you that there are

00:52:17 --> 00:52:24
some fundamental things missing in a

00:52:21 --> 00:52:28
current understanding of deep learning

00:52:23 --> 00:52:29
which prevent us from really solving the

00:52:27 --> 00:52:31
problem that we want so I think one of

00:52:28 --> 00:52:32
these problems one of the things that's

00:52:30 --> 00:52:38
missing is that or that seems like

00:52:31 --> 00:52:41
patently wrong is the fact that we train

00:52:37 --> 00:52:44
a model then you stop training the model

00:52:40 --> 00:52:46
and you freeze it even though it's the

00:52:43 --> 00:52:49
training process where the magic really

00:52:45 --> 00:52:52
happens but the magic is that if you

00:52:48 --> 00:52:55
think about it like the training process

00:52:51 --> 00:52:57
is the true general part of the whole of

00:52:54 --> 00:52:58
the whole story because you

00:52:56 --> 00:53:00
tends to flow code doesn't care which

00:52:57 --> 00:53:01
data set to optimize it just says

00:52:59 --> 00:53:03
whatever just give me the data set I

00:53:00 --> 00:53:03
don't care which one solve I'll sew them

00:53:02 --> 00:53:07
all

00:53:02 --> 00:53:09
so like the ability to do that feels

00:53:06 --> 00:53:13
really special and I think we are not

00:53:08 --> 00:53:15
using it at test time like it's hard to

00:53:12 --> 00:53:16
speculate about like things which you

00:53:14 --> 00:53:19
don't know the answer but all I'll say

00:53:15 --> 00:53:21
is that simply train bigger deeper

00:53:18 --> 00:53:24
language models you'll go surprisingly

00:53:20 --> 00:53:25
far scaling up but also doing things

00:53:23 --> 00:53:27
like training a test them and inference

00:53:24 --> 00:53:31
the test time I think would be another

00:53:26 --> 00:53:34
important boosts the performance hi

00:53:30 --> 00:53:35
thank you for the talk so it seems like

00:53:33 --> 00:53:37
right now another interesting approach

00:53:34 --> 00:53:38
to solving reinforcement learning

00:53:36 --> 00:53:41
problems could be to go for the

00:53:37 --> 00:53:43
volutionary roots using evolutionary

00:53:40 --> 00:53:45
strategies and although they have they

00:53:42 --> 00:53:47
their cave Hut's I wanted to know if I'd

00:53:44 --> 00:53:49
open a I particularly you're working on

00:53:46 --> 00:53:51
something related and what are what is

00:53:48 --> 00:53:55
your general opinion on them

00:53:50 --> 00:53:56
so like at present I believe that

00:53:54 --> 00:53:59
something evolutionary strategies is not

00:53:55 --> 00:54:00
great for reinforcement learning I think

00:53:58 --> 00:54:03
that normal reinforcement learning

00:53:59 --> 00:54:05
algorithms especially with big policies

00:54:02 --> 00:54:09
are better but I think if you want to

00:54:04 --> 00:54:11
evolve a small compact object like like

00:54:08 --> 00:54:13
a piece of code for example I think that

00:54:10 --> 00:54:16
would be a place where this would be

00:54:12 --> 00:54:20
seriously was considering but this all

00:54:15 --> 00:54:22
you know evolving a beautiful piece of

00:54:19 --> 00:54:24
code is a cool idea hasn't been done yet

00:54:21 --> 00:54:27
so still a lot of work to be done before

00:54:23 --> 00:54:30
we get there hi thank you so much for

00:54:26 --> 00:54:32
coming my question is you mentioned what

00:54:29 --> 00:54:34
is the right go is a political problem

00:54:31 --> 00:54:36
so I'm wondering if you can elaborate a

00:54:33 --> 00:54:38
bit on that and also what do you think

00:54:35 --> 00:54:42
would be their approach for us to maybe

00:54:37 --> 00:54:43
get there well I can't I can't really

00:54:41 --> 00:54:47
comment too much because all the

00:54:42 --> 00:54:49
thoughts that you know we have we now

00:54:46 --> 00:54:53
have a few people who are thinking about

00:54:48 --> 00:54:56
his full-time at opening I I don't have

00:54:52 --> 00:54:59
nough of a super strong opinion to say

00:54:55 --> 00:55:01
anything too definitive all I can say at

00:54:58 --> 00:55:03
he very high level is given the size

00:55:00 --> 00:55:06
like if you go into the future whenever

00:55:02 --> 00:55:07
soon or late you know whenever it's

00:55:05 --> 00:55:10
going to happen when you build a

00:55:06 --> 00:55:12
computer which can do anything better

00:55:09 --> 00:55:15
than a human it will happen because the

00:55:11 --> 00:55:17
brain is physical the impact on society

00:55:14 --> 00:55:21
is going to be completely massive and

00:55:16 --> 00:55:24
overwhelming it's it's very difficult to

00:55:20 --> 00:55:26
imagine even if you try really hard and

00:55:23 --> 00:55:29
I think what it means is that people who

00:55:25 --> 00:55:31
care a lot and that's what I was

00:55:28 --> 00:55:33
alluding to the fact that this will be

00:55:30 --> 00:55:37
something that many people who care

00:55:32 --> 00:55:39
about strongly and like as the impact

00:55:36 --> 00:55:41
increases gradually with self-driving

00:55:38 --> 00:55:44
cars more automation I think we will see

00:55:40 --> 00:55:46
a lot more people care do we need to

00:55:43 --> 00:55:49
have a very accurate model of the

00:55:45 --> 00:55:52
physical world and then simulate that in

00:55:48 --> 00:55:54
order to have these agents that can

00:55:51 --> 00:55:57
eventually come out into the real world

00:55:53 --> 00:56:00
and do something approaching you know

00:55:56 --> 00:56:03
human level intelligence tasks that's a

00:55:59 --> 00:56:04
very good question so I think if that

00:56:02 --> 00:56:10
were the case

00:56:03 --> 00:56:12
be in trouble and I am very certain that

00:56:09 --> 00:56:15
it could be avoided so specifically the

00:56:11 --> 00:56:18
real answer has to be that look you

00:56:14 --> 00:56:19
learn the problem so we learn to

00:56:17 --> 00:56:21
negotiate you learn to persist you not a

00:56:18 --> 00:56:23
lots of different useful life lessons in

00:56:20 --> 00:56:25
the simulation and yes you learn some

00:56:22 --> 00:56:25
physics too but then you go outside to

00:56:24 --> 00:56:27
the real world

00:56:24 --> 00:56:29
and you have to start over to some

00:56:26 --> 00:56:32
xtent because many of you are deeply

00:56:28 --> 00:56:34
held assumptions will be false in one of

00:56:31 --> 00:56:37
the goals so what was that's one reasons

00:56:33 --> 00:56:39
I care so much about never stopping

00:56:36 --> 00:56:41
training you've accumulated your

00:56:38 --> 00:56:42
knowledge now we go into an environment

00:56:40 --> 00:56:44
for some of your assumptions of valid

00:56:41 --> 00:56:46
you continue training you try to connect

00:56:43 --> 00:56:47
he new data to your old data and this

00:56:45 --> 00:56:49
an important requirement from our

00:56:46 --> 00:56:50
algorithms which is already met to some

00:56:48 --> 00:56:53
xtent but it will have to be met a lot

00:56:49 --> 00:56:56
more so that you can take the partial

00:56:52 --> 00:56:58
knowledge if you've acquired then go in

00:56:55 --> 00:57:00
a new situation learn some more

00:56:57 --> 00:57:02
literally the example of you go to

00:56:59 --> 00:57:05
school ballon useful things then you go

00:57:01 --> 00:57:07
to work it's not a perfect it's not you

00:57:04 --> 00:57:09
know you pour your four years of CS and

00:57:06 --> 00:57:10
undergrad is not going to fully prepare

00:57:08 --> 00:57:11
you for whatever it is you need to know

00:57:09 --> 00:57:13
it work

00:57:10 --> 00:57:14
it will help somewhat you'll be able to

00:57:12 --> 00:57:15
get off the ground but it will be lots

00:57:13 --> 00:57:17
of new things you need to learn so

00:57:14 --> 00:57:20
that's that's the spirit of it I think

00:57:16 --> 00:57:21
of a toes of the school one of the

00:57:19 --> 00:57:23
things you mentioned pretty early on in

00:57:20 --> 00:57:25
your talk is that one of the limitations

00:57:22 --> 00:57:27
of this sort of style of reinforcement

00:57:24 --> 00:57:29
learning is there's no self-organization

00:57:26 --> 00:57:31
so you have to tell it when it did a

00:57:28 --> 00:57:32
good thing or did a bad thing and that's

00:57:30 --> 00:57:33
actually a problem in neuroscience is

00:57:31 --> 00:57:35
when you're trying to teach a rat to you

00:57:32 --> 00:57:37
know navigate maze you have to

00:57:34 --> 00:57:39
artificially tell it what to do so where

00:57:36 --> 00:57:40
do you see moving forward when we

00:57:38 --> 00:57:42
already have this problem with teaching

00:57:39 --> 00:57:43
you know not necessarily learning but

00:57:41 --> 00:57:45
also teaching so where do you see the

00:57:42 --> 00:57:47
research moving forward in that respect

00:57:44 --> 00:57:49
how do you sort of introduce this notion

00:57:46 --> 00:57:51
of self-organization so I think without

00:57:48 --> 00:57:55
question one really important thing you

00:57:50 --> 00:57:57
need to do is to be able to infer the

00:57:54 --> 00:58:00
goals and strategies of other agents by

00:57:56 --> 00:58:02
observing them that's a fundamental

00:57:59 --> 00:58:04
skill we need to be able to learn to to

00:58:01 --> 00:58:06
embed into the agent so if for example

00:58:03 --> 00:58:08
you have two agents one of them is doing

00:58:05 --> 00:58:09
something and the other agent says well

00:58:07 --> 00:58:10
that's really cool I want to be able to

00:58:08 --> 00:58:12
do that too and

00:58:09 --> 00:58:13
you go and do that and so I'd say that

00:58:11 --> 00:58:17
his is a very important component in

00:58:12 --> 00:58:20
terms of second every word oh you see

00:58:16 --> 00:58:22
what they do you infer the reward and

00:58:19 --> 00:58:23
now we have a knob which says you see

00:58:21 --> 00:58:24
what they're doing now go and try to do

00:58:22 --> 00:58:27
the same thing

00:58:23 --> 00:58:28
let's say this this is as far as I know

00:58:26 --> 00:58:32
this is was one of the

00:58:27 --> 00:58:35
important ways in which humans are quite

00:58:31 --> 00:58:41
different from other animals in way

00:58:34 --> 00:58:42
which in the like scale and scope in

00:58:40 --> 00:58:46
which we copy the behavior of other

00:58:41 --> 00:58:48
humans might ask a quick follow-up work

00:58:45 --> 00:58:49
go for it so that's kind of obvious how

00:58:47 --> 00:58:51
that works in the scope of competition

00:58:48 --> 00:58:53
but what about just sort of arbitrary

00:58:50 --> 00:58:54
tasks like I'm in a math class for

00:58:52 --> 00:58:56
someone and I see someone doing a

00:58:53 --> 00:58:57
problem a particular way and I go that's

00:58:55 --> 00:58:59
a good strategy maybe I should try that

00:58:56 --> 00:59:01
out how does that work in a sort of non

00:58:58 --> 00:59:04
competitive environment so I think that

00:59:00 --> 00:59:06
his will be I think that's going to be

00:59:03 --> 00:59:08
a little bit separate from the

00:59:05 --> 00:59:12
competitive environment but it will have

00:59:07 --> 00:59:15
to be somehow either way you know

00:59:11 --> 00:59:18
probably baked in maybe volved into the

00:59:14 --> 00:59:21
system where like if you have other

00:59:17 --> 00:59:23
agents doing things they're generating

00:59:20 --> 00:59:25
data which you observe and the only way

00:59:22 --> 00:59:27
to truly make sense of the data that you

00:59:24 --> 00:59:30
see is to infer the goal of the agent

00:59:26 --> 00:59:33
he strategy their belief state that's

00:59:29 --> 00:59:34
important also for communicating them if

00:59:32 --> 00:59:35
you want to successfully communicate

00:59:33 --> 00:59:37
with someone you have to keep track both

00:59:35 --> 00:59:39
of their goal and of their belief state

00:59:36 --> 00:59:41
instead of knowledge so I think you will

00:59:38 --> 00:59:45
find that there are many I guess

00:59:40 --> 00:59:46
connections between understanding what

00:59:44 --> 00:59:48
other agents are doing inferring their

00:59:45 --> 00:59:50
goals imitating them and community

00:59:47 --> 00:59:52
successfully communicating them all

00:59:49 --> 00:59:53
right let's give in the happy hour a big

00:59:51 --> 00:59:55
hand

00:59:52 --> 00:59:56
[Applause]

00:59:55 --> 01:00:01
you

00:59:55 --> 01:00:01
[Applause]

01:00:05 --> 01:00:08
you

<!-- YOUTUBE_TRANSCRIPT_END -->
