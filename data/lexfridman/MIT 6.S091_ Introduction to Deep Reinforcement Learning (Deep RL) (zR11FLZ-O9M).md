---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "zR11FLZ-O9M"
title: "MIT 6.S091: Introduction to Deep Reinforcement Learning (Deep RL)"
video_url: "https://www.youtube.com/watch?v=zR11FLZ-O9M"
thumbnail_url: "https://i.ytimg.com/vi/zR11FLZ-O9M/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=zR11FLZ-O9M"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-01-24T17:20:33.000Z"
upload_date: "2019-01-24"
duration_seconds: 4049
duration_human: "1:07:29"
view_count: 364356
like_count: 6714
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:14:09.078Z"
---

# MIT 6.S091: Introduction to Deep Reinforcement Learning (Deep RL)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=zR11FLZ-O9M
- video_id: zR11FLZ-O9M
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-01-24T17:20:33.000Z
- upload_date: 2019-01-24
- duration: 1:07:29
- view_count: 364356
- like_count: 6714
- has_subtitle: true
- language: en
- availability: public
- tags: introduction, basics, mit, deep rl, ai, deep learning, machine learning, reinforcement learning, robotics, tensorflow, github, alphazero, alphago, dqn, policy, ai safety, openai, deepmind, simulation, tutorial, model-based, value-based, policy optimization, lex, lex mit
- categories: Science & Technology

## Description

First lecture of MIT course 6.S091: Deep Reinforcement Learning, introducing the fascinating field of Deep RL. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Slides: http://bit.ly/2HtcoHV
Playlist: http://bit.ly/deep-learning-playlist

OUTLINE:
0:00 - Introduction
2:14 - Types of learning
6:35 - Reinforcement learning in humans
8:22 - What can be learned from data?
12:15 - Reinforcement learning framework
14:06 - Challenge for RL in real-world applications
15:40 - Component of an RL agent
17:42 - Example: robot in a room
23:05 - AI safety and unintended consequences
26:21 - Examples of RL systems
29:52 - Takeaways for real-world impact
31:25 - 3 types of RL: model-based, value-based, policy-based
35:28 - Q-learning
38:40 - Deep Q-Networks (DQN)
48:00 - Policy Gradient (PG)
50:36 - Advantage Actor-Critic (A2C & A3C)
52:52 - Deep Deterministic Policy Gradient (DDPG)
54:12 - Policy Optimization (TRPO and PPO)
56:03 - AlphaZero
1:00:50 - Deep RL in real-world applications 
1:03:09 - Closing the RL simulation gap
1:04:44 - Next step in Deep RL

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
today I'd like to overview the exciting

00:00:02 --> 00:00:08
field of deep reinforcement learning

00:00:04 --> 00:00:11
introduced overview and provide you some

00:00:07 --> 00:00:14
of the basics I think it's one of the

00:00:10 --> 00:00:19
most exciting fields in artificial

00:00:13 --> 00:00:21
intelligence it's marrying the power and

00:00:18 --> 00:00:24
the ability of deep neural networks to

00:00:20 --> 00:00:29
represent and comprehend the world with

00:00:23 --> 00:00:33
e ability to act on that understanding

00:00:28 --> 00:00:35
on that representation taking as a whole

00:00:32 --> 00:00:39
that's really what the creation of

00:00:34 --> 00:00:41
intelligent beings is understand the

00:00:38 --> 00:00:42
world and act and the exciting

00:00:40 --> 00:00:45
breakthroughs that recently have

00:00:41 --> 00:00:47
happened captivate our imagination about

00:00:44 --> 00:00:49
what's possible and that's why this is

00:00:46 --> 00:00:51
my favorite area of deep learning and

00:00:48 --> 00:00:54
artificial intelligence in general and I

00:00:50 --> 00:00:56
hope you feel the same so what is deep

00:00:53 --> 00:00:59
reinforcement learning we've talked

00:00:55 --> 00:01:02
about deep learning which is taking

00:00:58 --> 00:01:05
samples of data being able to in a

00:01:01 --> 00:01:07
supervised way compress encode the

00:01:04 --> 00:01:10
representation that data in the way that

00:01:06 --> 00:01:13
you can reason about it I would take

00:01:09 --> 00:01:16
that power and apply it to the world

00:01:12 --> 00:01:20
where sequential decisions are to be

00:01:15 --> 00:01:25
made so it's looking at problems and

00:01:19 --> 00:01:27
formulations of tasks where an agent an

00:01:24 --> 00:01:31
intelligent system has to make a

00:01:26 --> 00:01:34
sequence of decisions and the decisions

00:01:30 --> 00:01:39
that are made have an effect on the

00:01:33 --> 00:01:41
world around the agent how how do all of

00:01:38 --> 00:01:43
us any intelligent being that it's

00:01:40 --> 00:01:46
tasked with operating in the world how

00:01:42 --> 00:01:47
did he learn anything especially when

00:01:45 --> 00:01:50
you know very little in the beginning

00:01:46 --> 00:01:52
it's trial and error is the fundamental

00:01:49 --> 00:01:57
process by which reinforcement learning

00:01:51 --> 00:01:59
agents learn and the deep part of deep

00:01:56 --> 00:02:02
reinforcement learning is neural

00:01:58 --> 00:02:06
networks as using the frameworks and

00:02:01 --> 00:02:09
reinforcement learning where the neural

00:02:05 --> 00:02:12
network is doing the representation of

00:02:08 --> 00:02:14
the world based on which the actions are

00:02:11 --> 00:02:14
made

00:02:13 --> 00:02:19
and we have to take a step back when we

00:02:16 --> 00:02:22
look at the types of learning sometimes

00:02:18 --> 00:02:25
the terminology itself can confuse us to

00:02:21 --> 00:02:27
the fundamentals there are supervised

00:02:24 --> 00:02:29
learning there semi-supervised learning

00:02:26 --> 00:02:31
there's unsupervised learning there's

00:02:28 --> 00:02:33
reinforcement learning and there's this

00:02:30 --> 00:02:35
feeling that supervised learning is

00:02:32 --> 00:02:37
really the only one where you have to

00:02:34 --> 00:02:39
perform the manual annotation where you

00:02:36 --> 00:02:44
have to do the large-scale supervision

00:02:38 --> 00:02:47
that's not the case every type of

00:02:43 --> 00:02:52
machine learning is supervised learning

00:02:46 --> 00:02:54
it's supervised by a loss function or a

00:02:51 --> 00:02:57
function that tells you what's good and

00:02:53 --> 00:03:00
what's bad you know even looking at our

00:02:56 --> 00:03:03
own existence is how we humans figure

00:02:59 --> 00:03:05
out what's good and bad there's all

00:03:02 --> 00:03:07
kinds of sources direct and indirect by

00:03:04 --> 00:03:10
which our morals and ethics we figure

00:03:06 --> 00:03:11
out what's good and bad the difference

00:03:09 --> 00:03:14
we supervised and unsupervised and

00:03:10 --> 00:03:16
reinforcement learning is the source of

00:03:13 --> 00:03:19
that supervision what's implied when you

00:03:15 --> 00:03:22
say unsupervised is that the cost of

00:03:18 --> 00:03:26
human labor required to attain the

00:03:21 --> 00:03:29
supervision is low but it's never

00:03:25 --> 00:03:32
Turtles all the way down it's Turtles

00:03:28 --> 00:03:35
and then there's a human at the bottom

00:03:31 --> 00:03:40
there at some point there needs to be

00:03:34 --> 00:03:42
human intervention human input to

00:03:39 --> 00:03:44
provide what's good and what's bad and

00:03:41 --> 00:03:45
this will arise in reinforcement

00:03:43 --> 00:03:48
learning as well I have to remember that

00:03:44 --> 00:03:49
because the challenges and the exciting

00:03:47 --> 00:03:53
opportunities of reinforcement learning

00:03:48 --> 00:03:56
lie in the fact of how do we get that

00:03:52 --> 00:03:58
supervision in the most efficient way

00:03:55 --> 00:04:00
possible but supervision nevertheless is

00:03:57 --> 00:04:03
required for any system that has an

00:03:59 --> 00:04:06
input and an output that's trying to

00:04:02 --> 00:04:08
learn like a neural network does to

00:04:05 --> 00:04:10
provide an output that's good he needs

00:04:07 --> 00:04:12
omebody to say what's good and what's

00:04:09 --> 00:04:14
bad for you curious about that there's

00:04:11 --> 00:04:16
been a few books a couple written

00:04:13 --> 00:04:19
throughout the last few centuries from

00:04:15 --> 00:04:22
Socrates to Nietzsche I recommend the

00:04:18 --> 00:04:23
latter especially so let's look at

00:04:21 --> 00:04:27
supervised learning and reinforcement

00:04:22 --> 00:04:28
learning let like to propose a way to

00:04:26 --> 00:04:32
think about the difference

00:04:27 --> 00:04:35
that is illustrative and useful when we

00:04:31 --> 00:04:37
start talking about the techniques so

00:04:34 --> 00:04:43
supervised learning is taking a bunch of

00:04:36 --> 00:04:45
examples of data and learning from those

00:04:42 --> 00:04:49
xamples where a ground truth provides

00:04:44 --> 00:04:51
you the compressed semantic meaning of

00:04:48 --> 00:04:54
what's in that data and from those

00:04:50 --> 00:04:58
xamples one by one whether it's

00:04:53 --> 00:05:01
equences or single samples we learn

00:04:57 --> 00:05:05
what how to then few take future such

00:05:00 --> 00:05:09
samples and interpret them reinforcement

00:05:04 --> 00:05:12
learning is teaching what we teach an

00:05:08 --> 00:05:15
agent through experience not by showing

00:05:11 --> 00:05:17
a singular sample of a data set but by

00:05:14 --> 00:05:19
putting them out into the world the

00:05:16 --> 00:05:21
distinction there the essential element

00:05:18 --> 00:05:24
of reinforcement learning then for us

00:05:20 --> 00:05:29
now we'll talk about a bunch of

00:05:23 --> 00:05:31
algorithms but the essential design step

00:05:28 --> 00:05:34
is to provide the world in which to

00:05:30 --> 00:05:38
experience the agent learns from the

00:05:33 --> 00:05:40
world the from the world it gets the

00:05:37 --> 00:05:42
dynamics of that world the physics of

00:05:39 --> 00:05:45
the world from that world that gets the

00:05:41 --> 00:05:49
rewards what's good and bad and us as

00:05:44 --> 00:05:51
designers of that agent do not just have

00:05:48 --> 00:05:56
to do the algorithm we have to do design

00:05:50 --> 00:06:00
the the world in which that agent is

00:05:55 --> 00:06:02
trying to solve a task the design of the

00:05:59 --> 00:06:04
world is the process of reinforcement

00:06:01 --> 00:06:06
learning the design of examples the

00:06:03 --> 00:06:10
annotation of examples is the world of

00:06:05 --> 00:06:12
supervised learning and the essential

00:06:09 --> 00:06:15
perhaps the most difficult element of

00:06:11 --> 00:06:19
reinforcement learning is the reward the

00:06:14 --> 00:06:22
good versus bad here a baby starts

00:06:18 --> 00:06:26
walking across the room we want to

00:06:21 --> 00:06:28
define success as a baby walking across

00:06:25 --> 00:06:31
the room and reaching the destination

00:06:27 --> 00:06:33
that's success and failure is the

00:06:30 --> 00:06:36
inability to reach that destination

00:06:32 --> 00:06:38
simple and reinforcement learning in

00:06:35 --> 00:06:38
humans

00:06:37 --> 00:06:44
the way we learn from these very few

00:06:40 --> 00:06:48
examples appear to learn from very few

00:06:44 --> 00:06:49
examples of trial and error is a mystery

00:06:47 --> 00:06:51
a beautiful mystery full of open

00:06:48 --> 00:06:54
questions it could be from the huge

00:06:50 --> 00:06:55
amount of data 230 million years worth

00:06:53 --> 00:06:59
of bipedal data there who've been

00:06:54 --> 00:07:02
walking what mammals walking ability to

00:06:58 --> 00:07:05
walk or 500 million years the ability to

00:07:01 --> 00:07:07
see having eyes so that's the the

00:07:04 --> 00:07:08
hardware side somehow genetically

00:07:06 --> 00:07:10
encoded in us is the ability to

00:07:07 --> 00:07:14
comprehend this world extremely

00:07:09 --> 00:07:15
efficiently it could be through not the

00:07:13 --> 00:07:20
hardware not the five hundred million

00:07:14 --> 00:07:24
years but the the few minutes hours days

00:07:19 --> 00:07:27
months maybe even years in the very

00:07:23 --> 00:07:29
beginning were born the ability to learn

00:07:26 --> 00:07:32
really quickly through observation to

00:07:28 --> 00:07:33
aggregate that information filter all

00:07:31 --> 00:07:36
the junk that you don't need and be able

00:07:32 --> 00:07:38
to learn really quickly through

00:07:35 --> 00:07:40
imitation learning through observation

00:07:37 --> 00:07:43
the way for walking that might mean

00:07:39 --> 00:07:47
observing others talk the idea there is

00:07:42 --> 00:07:49
if there was no other around we would

00:07:46 --> 00:07:50
never be able to learn this the

00:07:48 --> 00:07:54
fundamentals of this walking or as

00:07:49 --> 00:07:57
efficiently it's through observation and

00:07:53 --> 00:08:00
then it could be the algorithm totally

00:07:56 --> 00:08:04
not understood is the algorithm that our

00:07:59 --> 00:08:06
brain uses to learn the backpropagation

00:08:03 --> 00:08:09
that's an artificial neural networks the

00:08:05 --> 00:08:12
same kind of processes not understood in

00:08:08 --> 00:08:14
the brain that could be the key so I

00:08:11 --> 00:08:17
want you to think about that as we talk

00:08:13 --> 00:08:19
about the very trivial by comparison

00:08:16 --> 00:08:21
accomplishments and reinforcement

00:08:18 --> 00:08:26
learning and how do we take the next

00:08:20 --> 00:08:30
steps but it nevertheless is exciting to

00:08:25 --> 00:08:34
have machines that learn how to act in

00:08:29 --> 00:08:37
the world the process of learning for

00:08:33 --> 00:08:39
those who have fallen in love with

00:08:36 --> 00:08:42
artificial intelligence the process of

00:08:38 --> 00:08:44
learning is thought of as intelligence

00:08:41 --> 00:08:47
it's the ability to know very little and

00:08:43 --> 00:08:49
through experience examples interaction

00:08:46 --> 00:08:52
with the world in whatever medium

00:08:48 --> 00:08:54
whether it's data or simulation so on

00:08:51 --> 00:08:56
be able to form much richer and

00:08:53 --> 00:08:57
interesting representations of that

00:08:55 --> 00:08:59
world be able to act in that world

00:08:56 --> 00:09:01
that's that's the dream

00:08:58 --> 00:09:03
so let's look at this stack of what an

00:09:00 --> 00:09:07
age what it means to be an agent in this

00:09:02 --> 00:09:10
world from top the input to the bottom

00:09:06 --> 00:09:12
the output is the there's an environment

00:09:09 --> 00:09:15
we have to sense that environment we

00:09:11 --> 00:09:19
have just a few tools as humans have

00:09:14 --> 00:09:21
several sensory systems on cars you can

00:09:18 --> 00:09:23
have lidar camera

00:09:20 --> 00:09:27
stereo vision audio microphone

00:09:22 --> 00:09:29
tworking GPS IMU sensor so on whatever

00:09:26 --> 00:09:31
obot you can think about there's a way

00:09:28 --> 00:09:33
to sense that world and you have this

00:09:30 --> 00:09:36
raw sensory data and then once you have

00:09:32 --> 00:09:38
the raw sensory data you're tasked with

00:09:35 --> 00:09:40
representing that data in such a way

00:09:37 --> 00:09:43
that you can make sense of it as opposed

00:09:39 --> 00:09:46
to all the the raw sensors and the I the

00:09:42 --> 00:09:49
cones and so on that taking just giant

00:09:45 --> 00:09:53
stream of high bandwidth information we

00:09:48 --> 00:09:55
have to be able to form higher

00:09:52 --> 00:09:57
abstractions of features based on which

00:09:54 --> 00:10:00
we can reason from edges to corners to

00:09:56 --> 00:10:02
faces and so on that's exactly what deep

00:09:59 --> 00:10:05
learning neural networks have stepped in

00:10:01 --> 00:10:07
to be able to in an automated fashion

00:10:04 --> 00:10:09
with as little human input as possible

00:10:06 --> 00:10:12
be able to form higher-order

00:10:08 --> 00:10:15
epresentations of that information then

00:10:11 --> 00:10:16
there is the the learning aspect

00:10:14 --> 00:10:18
building on top of the greater

00:10:15 --> 00:10:20
abstractions form through the

00:10:17 --> 00:10:21
representations be able to accomplish

00:10:19 --> 00:10:23
something useful well--there's

00:10:21 --> 00:10:26
discriminative tasks a generative task

00:10:22 --> 00:10:27
and so on based on the representation be

00:10:25 --> 00:10:31
able to make sense of the data be able

00:10:27 --> 00:10:33
to generate new data and so on from

00:10:30 --> 00:10:35
sequence the sequence to sequence the

00:10:32 --> 00:10:37
sample from Sam of the sequence and so

00:10:34 --> 00:10:43
n and so forth to actions as we'll talk

00:10:36 --> 00:10:46
about and then there is the ability to

00:10:42 --> 00:10:50
aggregate all the information has been

00:10:45 --> 00:10:53
received in the past to the useful

00:10:49 --> 00:10:57
information that's pertinent to the task

00:10:52 --> 00:10:58
at hand it's the thing the old it looks

00:10:56 --> 00:11:01
like a duck quacks like a duck swims

00:10:57 --> 00:11:02
like a duck three different data sets

00:11:00 --> 00:11:05
I'm sure there's state-of-the-art

00:11:01 --> 00:11:08
algorithms for the three image class

00:11:04 --> 00:11:10
education audio recognition video

00:11:07 --> 00:11:14
classification - activity recognition so

00:11:09 --> 00:11:16
n aggregating those three together is

00:11:13 --> 00:11:18
till an open problem and that could be

00:11:15 --> 00:11:19
the last piece again I want you to think

00:11:17 --> 00:11:22
about as we think about reinforcement

00:11:18 --> 00:11:24
learning agents how do we play how do we

00:11:21 --> 00:11:28
transfer from the game of Atari to the

00:11:23 --> 00:11:31
game of go to the game of dota to the

00:11:27 --> 00:11:36
game of a robot navigating an uncertain

00:11:30 --> 00:11:38
environment in the real world and once

00:11:35 --> 00:11:40
you have that once you sense the raw

00:11:37 --> 00:11:44
orld once you have a representation of

00:11:39 --> 00:11:47
that world then we need to act which is

00:11:43 --> 00:11:49
provide actions within the constraints

00:11:46 --> 00:11:52
of the world in such a way that we

00:11:48 --> 00:11:55
believe can get us towards success the

00:11:51 --> 00:11:57
promise excitement of deep learning is

00:11:54 --> 00:12:00
the part of the stack that converts

00:11:56 --> 00:12:02
raw data into meaningful representations

00:11:59 --> 00:12:06
the promise the dream of deeper

00:12:01 --> 00:12:08
enforcement learning is going beyond and

00:12:05 --> 00:12:11
building an agent that uses that

00:12:07 --> 00:12:15
representation and acts achieve success

00:12:10 --> 00:12:17
in the world that's super exciting the

00:12:14 --> 00:12:22
framework and the formulation

00:12:16 --> 00:12:24
reinforcement learning at its simplest

00:12:21 --> 00:12:26
is that there's an environment and

00:12:23 --> 00:12:29
there's an agent that acts in that

00:12:25 --> 00:12:33
environment the agent senses the

00:12:28 --> 00:12:35
nvironment by a by some observation

00:12:32 --> 00:12:39
well there's partial or complete

00:12:34 --> 00:12:42
observation of the environment and it

00:12:38 --> 00:12:44
gives the environment and action it acts

00:12:41 --> 00:12:46
in that environment and through the

00:12:43 --> 00:12:49
action the environment changes in some

00:12:45 --> 00:12:52
way and then a new observation occurs

00:12:48 --> 00:12:53
and then also as you provide they

00:12:51 --> 00:12:57
actually make the observations you

00:12:52 --> 00:13:00
receive a reward in most formulations of

00:12:56 --> 00:13:05
this of this framework this entire

00:12:59 --> 00:13:07
system has no memory that the the only

00:13:04 --> 00:13:09
thing you two could be concerned about

00:13:06 --> 00:13:12
as a state you came from the state you

00:13:08 --> 00:13:14
arrived in and the reward received the

00:13:11 --> 00:13:16
open question here is what can't be

00:13:13 --> 00:13:17
modeled in this kind of way can we model

00:13:15 --> 00:13:20
all of it

00:13:16 --> 00:13:24
from from human life to the game of go

00:13:19 --> 00:13:27
can all this be model in this way and

00:13:23 --> 00:13:30
what are is this a good way to formulate

00:13:26 --> 00:13:32
the learning problem of robotic systems

00:13:29 --> 00:13:36
in the real world in simulated world

00:13:31 --> 00:13:39
those are the open questions the

00:13:35 --> 00:13:42
nvironment could be fully observable or

00:13:38 --> 00:13:44
partially observable like in poker

00:13:41 --> 00:13:47
it could be single agent or multi agent

00:13:43 --> 00:13:51
Atari versus driving like deep traffic

00:13:46 --> 00:13:54
deterministic or stochastic static

00:13:50 --> 00:13:56
versus dynamic static is in chess

00:13:53 --> 00:13:58
dynamic again and driving in most

00:13:55 --> 00:14:01
real-world applications the screen

00:13:57 --> 00:14:04
versus continuous like games chess or

00:14:00 --> 00:14:05
continuous and carpal balancing a polo

00:14:03 --> 00:14:08
n a cart

00:14:04 --> 00:14:16
he challenge for RL in real world

00:14:07 --> 00:14:16
applications is that as a reminder

00:14:15 --> 00:14:23
supervised learning is teaching by

00:14:19 --> 00:14:25
example learning by example teaching

00:14:22 --> 00:14:27
from our perspective reinforcement

00:14:24 --> 00:14:30
learning is teaching by experience and

00:14:26 --> 00:14:31
the way we provide experience the

00:14:29 --> 00:14:34
reinforcement learning agents currently

00:14:30 --> 00:14:37
for the most part is through simulation

00:14:33 --> 00:14:41
or through highly constrained real-world

00:14:36 --> 00:14:47
scenarios so the challenge is in the

00:14:40 --> 00:14:50
fact that most of the successes is with

00:14:46 --> 00:14:54
systems environments that are simulated

00:14:49 --> 00:14:58
so there's two ways to then close this

00:14:53 --> 00:15:03
gap to directions of research and work

00:14:57 --> 00:15:05
one is to improve the algorithms improve

00:15:02 --> 00:15:07
the ability of the algorithm student to

00:15:04 --> 00:15:09
form policies that are transferable

00:15:06 --> 00:15:11
across all kinds of domains including

00:15:08 --> 00:15:13
the real world including especially in

00:15:10 --> 00:15:17
the real world so train and simulation

00:15:12 --> 00:15:17
transfer to the real world

00:15:16 --> 00:15:22
or is we improve the simulation in such

00:15:20 --> 00:15:24
a way that the fidelity of the

00:15:21 --> 00:15:26
simulation increased increases to the

00:15:23 --> 00:15:31
point where the gap between reality and

00:15:25 --> 00:15:34
simulation is is minimal to a degree

00:15:30 --> 00:15:36
that things learn the simulation are

00:15:33 --> 00:15:39
directly trivially transferable to the

00:15:35 --> 00:15:39
real world

00:15:39 --> 00:15:48
okay the major components of an RL agent

00:15:42 --> 00:15:52
an agent operates based on a strategy

00:15:47 --> 00:15:55
called the policy it sees the world it

00:15:51 --> 00:15:59
makes a decision that's a policy makes a

00:15:54 --> 00:16:01
decision how to act sees the reward sees

00:15:58 --> 00:16:03
a new state acts sees a reward

00:16:00 --> 00:16:06
she's new States and acts and this

00:16:02 --> 00:16:13
repeats forever until a terminal state

00:16:05 --> 00:16:17
the value function is the estimate of

00:16:12 --> 00:16:20
how good a state is or how good a state

00:16:16 --> 00:16:23
action pair is meaning taking an action

00:16:19 --> 00:16:27
in a particular state how good is that

00:16:22 --> 00:16:29
ability to evaluate that and then the

00:16:26 --> 00:16:32
model different from the environment

00:16:28 --> 00:16:34
from the perspective the agent so the

00:16:31 --> 00:16:36
nvironment has a model based on which

00:16:33 --> 00:16:38
it operates and then the agent has a

00:16:35 --> 00:16:42
representation best understanding of

00:16:37 --> 00:16:46
that model so the purpose for an RL

00:16:41 --> 00:16:49
agent in this simply formulated

00:16:45 --> 00:16:52
framework is to maximize reward the way

00:16:48 --> 00:16:56
that the reward mathematically and

00:16:51 --> 00:16:59
practically is talked about is with a

00:16:55 --> 00:17:02
discounted framework so we discount

00:16:58 --> 00:17:04
further and further future award so the

00:17:01 --> 00:17:06
reward that's farther into the future is

00:17:03 --> 00:17:09
means less to us in terms of

00:17:05 --> 00:17:12
maximization than reward that's in the

00:17:08 --> 00:17:15
near term and so why do we discount it

00:17:11 --> 00:17:17
so first a lot of it is a math trick to

00:17:14 --> 00:17:19
be able to prove certain aspects analyze

00:17:16 --> 00:17:22
certain aspects of convergence and in

00:17:18 --> 00:17:25
general on a more philosophical sense

00:17:21 --> 00:17:28
because environments either are or can

00:17:24 --> 00:17:30
be thought of a stochastic random it's

00:17:27 --> 00:17:31
very difficult to there's a degree of

00:17:29 --> 00:17:33
uncertainty

00:17:30 --> 00:17:38
which makes it difficult to really

00:17:32 --> 00:17:40
estimate the the the reward they'll be

00:17:37 --> 00:17:43
in the future because of the ripple

00:17:39 --> 00:17:46
ffect of the uncertainty let's look at

00:17:42 --> 00:17:49
an example a simple one helps us

00:17:45 --> 00:17:53
understand policy's rewards actions

00:17:48 --> 00:17:55
there's a robot in the room there's 12

00:17:52 --> 00:17:58
cells in which you can step it starts in

00:17:54 --> 00:18:00
the bottom left it tries to get rewards

00:17:57 --> 00:18:03
on the on the top right there's a plus

00:17:59 --> 00:18:05
one it's a really good thing at the top

00:18:02 --> 00:18:07
right wants to get there by walking

00:18:04 --> 00:18:09
around there's a negative 1 which is

00:18:06 --> 00:18:11
really bad you wants to avoid that

00:18:08 --> 00:18:15
Square and the choice of action is this

00:18:10 --> 00:18:18
up-down left-right for actions so you

00:18:14 --> 00:18:21
could think of there being a negative

00:18:17 --> 00:18:23
reward of point 0 4 for each step so

00:18:20 --> 00:18:25
there's a cost to each step and there's

00:18:22 --> 00:18:26
a stochastic nature to this world

00:18:24 --> 00:18:29
potentially we'll talk about both

00:18:25 --> 00:18:31
deterministic stochastic so in the in

00:18:28 --> 00:18:35
the stochastic case when you choose the

00:18:30 --> 00:18:39
action up with an 80% probability with

00:18:34 --> 00:18:41
an 80% chance you move up but with 10%

00:18:38 --> 00:18:44
chance to move left another 10 move

00:18:40 --> 00:18:45
right so that's the Catholic nature even

00:18:43 --> 00:18:47
though you try to go up you might end up

00:18:44 --> 00:18:52
in a blocks to the left into the right

00:18:46 --> 00:18:55
so for a deterministic world the optimal

00:18:51 --> 00:18:57
policy here given that we always start

00:18:54 --> 00:19:00
in the bottom left is really shortest

00:18:56 --> 00:19:02
path is you know you can't ever because

00:18:59 --> 00:19:04
there's no stochasticity you're never

00:19:01 --> 00:19:05
gonna screw up and just fall into the

00:19:03 --> 00:19:09
hole negative 1 hole that you just

00:19:04 --> 00:19:10
compute the shortest path and walk along

00:19:08 --> 00:19:13
that shortest path why shortest path

00:19:09 --> 00:19:16
because every single step hurts there's

00:19:12 --> 00:19:18
a negative a reward to it point 0 4

00:19:15 --> 00:19:21
so shortest path is the thing that

00:19:17 --> 00:19:24
minimizes the reward shortest path to

00:19:20 --> 00:19:26
the to the plus 1 block ok let's look at

00:19:23 --> 00:19:29
it stochastic world like I mentioned the

00:19:25 --> 00:19:32
80% up and then split to 20 10 % to left

00:19:28 --> 00:19:36
and right how does the policy change

00:19:31 --> 00:19:37
well first of all we need to have we

00:19:35 --> 00:19:39
need to have a plan for every single

00:19:36 --> 00:19:41
block in the area because you might end

00:19:38 --> 00:19:45
up there due to this the castus 'ti of

00:19:40 --> 00:19:46
the world ok the the basic

00:19:44 --> 00:19:51
addition there is that we're trying to

00:19:45 --> 00:19:53
go avoid up the closer you get to the

00:19:50 --> 00:19:58
negative one hole so just try to avoid

00:19:52 --> 00:19:59
up because up the stochastic nature of

00:19:57 --> 00:20:02
up means that you might fall into the

00:19:58 --> 00:20:04
hole with a 10% chance and given the

00:20:01 --> 00:20:06
point zero for step reward you're

00:20:03 --> 00:20:09
willing to take the long way home

00:20:05 --> 00:20:11
in some cases in order to avoid that

00:20:08 --> 00:20:14
possibility the negative one possibility

00:20:10 --> 00:20:16
now let's look at a reward for each step

00:20:13 --> 00:20:19
if it decreases to negative two it

00:20:15 --> 00:20:22
really hurts to take every step then

00:20:18 --> 00:20:24
again we go to the shortest path despite

00:20:21 --> 00:20:26
the fact that there's a stochastic

00:20:23 --> 00:20:28
nature in fact you don't really care

00:20:25 --> 00:20:30
that you step into the negative one hole

00:20:27 --> 00:20:34
because every step really hurts you just

00:20:29 --> 00:20:36
want to get home and then you can play

00:20:33 --> 00:20:40
with this reward structure right yes

00:20:35 --> 00:20:44
instead of negative 2 or negative point

00:20:39 --> 00:20:47
0 4 you can look at negative 0.1 and you

00:20:43 --> 00:20:51
can see immediately that the structure

00:20:46 --> 00:20:55
of the policy it changes so with a

00:20:50 --> 00:20:59
higher value the higher negative reward

00:20:54 --> 00:21:02
free step immediately the urgency of the

00:20:58 --> 00:21:07
agent increases versus the less urgency

00:21:01 --> 00:21:13
the lower the negative reward and when

00:21:06 --> 00:21:16
the reward flips so it's positive the

00:21:12 --> 00:21:19
very step is a positive so the entire

00:21:15 --> 00:21:21
system which is actually quite common in

00:21:18 --> 00:21:23
reinforcement learning the entire system

00:21:20 --> 00:21:25
is full of positive rewards and so that

00:21:22 --> 00:21:30
hen the optimal policy becomes the

00:21:24 --> 00:21:32
longest path is grad school taking as

00:21:29 --> 00:21:39
long as possible never reaching the

00:21:31 --> 00:21:41
destination so what lessons do we draw

00:21:38 --> 00:21:44
from robot in the room two things the

00:21:40 --> 00:21:46
nvironment model the dynamics is just

00:21:43 --> 00:21:48
here in the trivial example the

00:21:45 --> 00:21:51
stochastic nature the difference between

00:21:47 --> 00:21:54
80 percent 100 percent and 50 percent

00:21:50 --> 00:21:56
he model of the world the environment

00:21:53 --> 00:21:57
has a big impact on what the optimal

00:21:55 --> 00:22:00
policy is

00:21:56 --> 00:22:02
and the reward structure most

00:21:59 --> 00:22:09
importantly the thing we can often

00:22:01 --> 00:22:11
control more in our constructs of the

00:22:08 --> 00:22:15
task we try to solve them enforcement is

00:22:10 --> 00:22:17
the what is good and what is bad and how

00:22:14 --> 00:22:19
bad is it and how good is it

00:22:16 --> 00:22:24
he reward structure is a big impact and

00:22:18 --> 00:22:26
that has a complete change like like

00:22:23 --> 00:22:29
Robert Frost say the complete change on

00:22:25 --> 00:22:32
the policy the choices the agent makes

00:22:28 --> 00:22:36
o at when you formulate a reinforcement

00:22:31 --> 00:22:39
learning framework as researchers as

00:22:35 --> 00:22:41
tudents what you often do is you design

00:22:38 --> 00:22:44
the environment you design the world in

00:22:40 --> 00:22:46
which the system learns even when your

00:22:43 --> 00:22:48
ultimate goal is the physical robot it

00:22:45 --> 00:22:50
does still there's a lot of work still

00:22:47 --> 00:22:51
done simulation so you design the world

00:22:49 --> 00:22:54
the parameters of that world and you

00:22:50 --> 00:22:59
also design the reward structure and it

00:22:53 --> 00:23:00
can have a transformative results slight

00:22:58 --> 00:23:03
variations in those parameters going to

00:22:59 --> 00:23:07
huge results on huge differences on the

00:23:02 --> 00:23:11
policy that's arrived and of course the

00:23:06 --> 00:23:16
xample I've shown before I really love

00:23:10 --> 00:23:17
is the impact of the the changing reward

00:23:15 --> 00:23:22
structure might have unintended

00:23:16 --> 00:23:25
consequences and those consequences for

00:23:22 --> 00:23:30
eal-world system can have obviously

00:23:24 --> 00:23:33
highly detrimental costs that are more

00:23:29 --> 00:23:35
than just a failed game of Atari so here

00:23:32 --> 00:23:37
is a human performing the task gate

00:23:34 --> 00:23:41
playing the game of coast runners racing

00:23:36 --> 00:23:45
around the track and so it's when you

00:23:40 --> 00:23:48
finish first and you finish fast you get

00:23:44 --> 00:23:50
a lot of points and so it's natural to

00:23:47 --> 00:23:53
then okay let's do an RL agent and then

00:23:49 --> 00:23:55
optimize this for those points and will

00:23:52 --> 00:23:58
you find out in the game is that you

00:23:54 --> 00:24:01
also get points by picking up the little

00:23:57 --> 00:24:04
green turbo things and with agent

00:24:00 --> 00:24:06
figures out is that you can actually get

00:24:03 --> 00:24:10
a lot more points even

00:24:05 --> 00:24:13
by simply focusing on the green turbos

00:24:09 --> 00:24:15
just

00:24:12 --> 00:24:16
rotating over and over slamming into the

00:24:14 --> 00:24:20
wall fire and everything just picking it

00:24:15 --> 00:24:24
up especially because ability to pick up

00:24:19 --> 00:24:25
those turbos can avoid the terminal

00:24:23 --> 00:24:28
state at the end of finishing the race

00:24:24 --> 00:24:30
in fact finishing the race means you

00:24:27 --> 00:24:31
stop collecting positive reward so you

00:24:29 --> 00:24:37
never want to finish collected turbos

00:24:30 --> 00:24:39
and though that's a trivial example it's

00:24:36 --> 00:24:42
not actually easy to find such examples

00:24:38 --> 00:24:44
but they're out there of unintended

00:24:41 --> 00:24:46
consequences that can have highly

00:24:43 --> 00:24:48
negative detrimental effects when put in

00:24:45 --> 00:24:52
the real world we'll talk about a little

00:24:47 --> 00:24:53
bit of robotics when you put robots for

00:24:51 --> 00:24:55
wheeled ones like autonomous vehicles

00:24:52 --> 00:24:57
into the real world and you have

00:24:54 --> 00:24:59
objective functions that have to

00:24:56 --> 00:25:01
navigate difficult intersections full of

00:24:58 --> 00:25:03
pedestrians you have to form intent

00:25:00 --> 00:25:06
models those pedestrians here you see

00:25:02 --> 00:25:11
cars asserting themselves through dense

00:25:05 --> 00:25:14
intersections taking risks and within

00:25:10 --> 00:25:15
those risks that are taking by us humans

00:25:13 --> 00:25:19
will drive vehicles we have to then

00:25:14 --> 00:25:24
code that ability to take subtle risk

00:25:18 --> 00:25:27
into into AI based control algorithms

00:25:23 --> 00:25:29
perception then you have to think about

00:25:26 --> 00:25:32
at the end of the day there's an

00:25:28 --> 00:25:34
objective function and if that objective

00:25:31 --> 00:25:37
function does not anticipate the green

00:25:33 --> 00:25:38
turbos that are to be collected and then

00:25:36 --> 00:25:44
result in some understand the

00:25:37 --> 00:25:47
consequences could have very negative

00:25:43 --> 00:25:50
ffects especially in situations that

00:25:46 --> 00:25:51
involve human life that's the field of

00:25:49 --> 00:25:54
AI safety and some of the folks will

00:25:50 --> 00:25:57
talk about deep mind and open AI that

00:25:53 --> 00:25:59
are doing incredible work in RL also

00:25:56 --> 00:26:02
have groups that are working on a AI

00:25:58 --> 00:26:05
safety for a very good reason this is a

00:26:01 --> 00:26:07
problem that I believe that artificial

00:26:04 --> 00:26:11
intelligent will define some of the most

00:26:06 --> 00:26:11
impactful positive things in the 21st

00:26:10 --> 00:26:14
century

00:26:10 --> 00:26:17
but I also believe we are nowhere close

00:26:13 --> 00:26:19
to solving some of the fundamental

00:26:16 --> 00:26:20
problems of AI safety that we also need

00:26:18 --> 00:26:23
to address as we

00:26:19 --> 00:26:26
those algorithms okay examples and

00:26:22 --> 00:26:29
reinforcement learning systems all of it

00:26:25 --> 00:26:30
has to do with formulation or rewards

00:26:28 --> 00:26:36
formulation of states and actions you

00:26:29 --> 00:26:39
have the traditional the often used

00:26:35 --> 00:26:41
benchmark of a cart balancing a poll

00:26:38 --> 00:26:44
continuous so the action is the

00:26:40 --> 00:26:46
horizontal force to the cart the goal is

00:26:43 --> 00:26:49
to balance the poll so stays top and the

00:26:45 --> 00:26:51
moving cart and the reward is one in

00:26:48 --> 00:26:54
each time step if the poll is upright in

00:26:50 --> 00:26:56
the state measured by the cart by the

00:26:53 --> 00:27:00
agent is the pole angle angular speed

00:26:55 --> 00:27:03
and of course self sensing of the cart

00:26:59 --> 00:27:05
position and the horizontal velocity

00:27:02 --> 00:27:06
another example here didn't want to

00:27:04 --> 00:27:09
include the video because it's really

00:27:05 --> 00:27:11
disturbing but I do want to include the

00:27:08 --> 00:27:14
slide because it's really important to

00:27:10 --> 00:27:17
think about is by sensing the the raw

00:27:13 --> 00:27:21
pixels learning and teaching an agent to

00:27:16 --> 00:27:25
play a game of doom so the goal there is

00:27:20 --> 00:27:26
to eliminate all opponents the state is

00:27:24 --> 00:27:32
the raw game pixels the action is

00:27:25 --> 00:27:36
up/down shoot reload and so on and the

00:27:31 --> 00:27:38
positive reward is when an opponent is

00:27:35 --> 00:27:42
eliminated and negative one the agent is

00:27:37 --> 00:27:46
eliminated simple I added it here

00:27:41 --> 00:27:49
because again on the topic of AI safety

00:27:45 --> 00:27:51
we have to think about objective

00:27:48 --> 00:27:54
functions and how that translate into

00:27:50 --> 00:27:59
the world of not just autonomous

00:27:53 --> 00:28:01
vehicles but things that even more

00:27:58 --> 00:28:02
directly have harm like autonomous

00:28:00 --> 00:28:06
weapon systems and we have a lecture on

00:28:01 --> 00:28:09
this in the AGI series and on the

00:28:05 --> 00:28:11
robotics platform the manipulate object

00:28:08 --> 00:28:13
manipulation and grasping objects

00:28:10 --> 00:28:15
there's a few benchmarks there's a few

00:28:12 --> 00:28:18
interesting applications learning the

00:28:14 --> 00:28:22
problem of grabbing objects moving

00:28:17 --> 00:28:24
objects manipulating objects rotating

00:28:21 --> 00:28:27
and so on especially when those objects

00:28:23 --> 00:28:29
don't have have complicated shapes and

00:28:26 --> 00:28:31
so the goal is to pick up an object in

00:28:28 --> 00:28:34
the purely in the grasping objects

00:28:30 --> 00:28:35
allenge the state is the visual

00:28:33 --> 00:28:38
racial slurs visual visual base the raw

00:28:34 --> 00:28:41
pixels of the objects the actions is to

00:28:37 --> 00:28:44
move the arm grasp the object pick it up

00:28:40 --> 00:28:46
and obviously it's positive when the

00:28:43 --> 00:28:51
pickup is successful the reason I'm

00:28:45 --> 00:28:53
personally excited by this is because

00:28:50 --> 00:28:56
it'll finally allow us to solve the

00:28:52 --> 00:28:58
problem of the claw which has been

00:28:55 --> 00:29:01
torturing me for many years

00:28:57 --> 00:29:04
I don't know that's not at all why I'm

00:29:00 --> 00:29:06
excited by it okay and then we have to

00:29:03 --> 00:29:07
think about as we get greater and

00:29:05 --> 00:29:10
greater degree of application in the

00:29:07 --> 00:29:13
real world with robotics

00:29:09 --> 00:29:16
like cars the the main focus of my

00:29:12 --> 00:29:18
passion in terms of robotics is how do

00:29:15 --> 00:29:21
we encode some of the things that us

00:29:17 --> 00:29:22
humans encode how do we you know we have

00:29:20 --> 00:29:24
to think about our own objective

00:29:21 --> 00:29:27
function our own reward structure our

00:29:23 --> 00:29:29
own model of the environment about which

00:29:26 --> 00:29:31
we perceive and reasonable in order to

00:29:28 --> 00:29:31
then encode machines that are doing the

00:29:30 --> 00:29:33
same

00:29:30 --> 00:29:35
and I believe autonomous driving is in

00:29:32 --> 00:29:39
that category but to ask questions of

00:29:34 --> 00:29:42
ethics we have to ask questions of of

00:29:38 --> 00:29:44
risk value of human life value of

00:29:41 --> 00:29:45
efficiency money and so on all these in

00:29:43 --> 00:29:48
front of ethical questions that an

00:29:44 --> 00:29:52
autonomous vehicle unfortunately has to

00:29:47 --> 00:29:52
solve before it becomes fully autonomous

00:29:51 --> 00:29:58
o here are the key takeaways of the

00:29:55 --> 00:30:02
real-world impact of reinforcement

00:29:57 --> 00:30:04
learning agents on the deep learning

00:30:01 --> 00:30:06
side okay these neural networks that

00:30:03 --> 00:30:07
form high representation the fun part is

00:30:05 --> 00:30:09
the algorithms all the different

00:30:06 --> 00:30:12
architectures the different

00:30:08 --> 00:30:15
encoder/decoder structures all the

00:30:11 --> 00:30:17
attentions self attention recurrent

00:30:14 --> 00:30:20
Sallust Engr use all the fun

00:30:16 --> 00:30:23
architectures and the data so that and

00:30:19 --> 00:30:27
the ability to leverage different data

00:30:22 --> 00:30:30
sets in order to discriminate better

00:30:26 --> 00:30:34
than perform this Crematory tasks better

00:30:29 --> 00:30:35
than you know MIT does better than stand

00:30:33 --> 00:30:38
for that kind of thing that's the fun

00:30:34 --> 00:30:41
part the hard part is asking good

00:30:37 --> 00:30:42
questions and collecting huge amounts of

00:30:40 --> 00:30:45
data that's representative over the task

00:30:41 --> 00:30:47
that's for real world impact not cvpr

00:30:44 --> 00:30:50
publication real-world impact

00:30:46 --> 00:30:52
a huge amount of data on a deeper

00:30:49 --> 00:30:55
enforcement learning side the key

00:30:51 --> 00:30:56
challenge the fun part again is the

00:30:54 --> 00:30:58
algorithms how do we learn from data

00:30:55 --> 00:31:01
some of the stuff I'll talk about today

00:30:57 --> 00:31:03
the hard part is defining the

00:31:00 --> 00:31:05
nvironment defining the acts of space

00:31:02 --> 00:31:07
and the reward structure as I mentioned

00:31:04 --> 00:31:10
this is the big challenge and the

00:31:06 --> 00:31:12
hardest part is how to crack the gap

00:31:09 --> 00:31:14
between simulation in the real world the

00:31:11 --> 00:31:17
leaping lizard that's the hardest part

00:31:13 --> 00:31:19
we don't even know how to solve that

00:31:16 --> 00:31:22
ransfer learning problem yet for the

00:31:18 --> 00:31:27
real world in fact the three types of

00:31:21 --> 00:31:29
reinforcement learning there's countless

00:31:26 --> 00:31:32
algorithms and there's a lot of ways to

00:31:28 --> 00:31:34
economize them but at the highest level

00:31:31 --> 00:31:38
there's model-based and there's model

00:31:33 --> 00:31:41
free model based algorithms learn the

00:31:37 --> 00:31:45
model of the world so as you interact

00:31:40 --> 00:31:47
with the world you construct your

00:31:44 --> 00:31:51
estimate of how you believe the dynamics

00:31:46 --> 00:31:54
of that world operates the nice thing

00:31:50 --> 00:31:56
about doing that is once you have a

00:31:53 --> 00:32:00
model or an estimate of a model you're

00:31:55 --> 00:32:03
able to anticipate you're able to plan

00:31:59 --> 00:32:07
into the future you're able to use the

00:32:02 --> 00:32:09
model to in a branching way predict how

00:32:06 --> 00:32:12
your actions will change the world

00:32:08 --> 00:32:14
so you can plan far into the future this

00:32:11 --> 00:32:17
the mechanism by which you can you

00:32:13 --> 00:32:19
can do chess in the simplest form

00:32:16 --> 00:32:21
because in chess you don't even need to

00:32:18 --> 00:32:22
learn the model the models learnt is

00:32:20 --> 00:32:24
given to you chess go and so on

00:32:21 --> 00:32:27
the most important way in which they're

00:32:23 --> 00:32:30
different I think is the sample

00:32:26 --> 00:32:32
fficiency is how many examples of data

00:32:29 --> 00:32:34
re needed to be able to successfully

00:32:31 --> 00:32:35
operate in the world and so model based

00:32:33 --> 00:32:39
methods because they're constructing a

00:32:34 --> 00:32:42
model if they can are extremely simple

00:32:38 --> 00:32:43
fficient because once you have a model

00:32:41 --> 00:32:46
you can do all kinds of reasoning that

00:32:42 --> 00:32:50
doesn't require experiencing every

00:32:45 --> 00:32:53
possibility of that model you can unroll

00:32:49 --> 00:32:56
the model to see how the world changes

00:32:52 --> 00:33:00
based on your actions value based

00:32:55 --> 00:33:02
methods are ones that look to estimate

00:32:59 --> 00:33:04
the quality of states the quality of

00:33:01 --> 00:33:09
taking a certain action in the certain

00:33:03 --> 00:33:11
state so they're called off policy

00:33:08 --> 00:33:13
versus the last category that's on

00:33:10 --> 00:33:18
policy what does it mean to be off

00:33:12 --> 00:33:21
policy it means that they constantly

00:33:17 --> 00:33:25
value based agents constantly update how

00:33:20 --> 00:33:28
good is taken action in a state and they

00:33:24 --> 00:33:31
have this model of that goodness of

00:33:27 --> 00:33:34
taking action in a state and they use

00:33:30 --> 00:33:38
that to pick them optimal action they

00:33:33 --> 00:33:40
don't directly learn a policy a strategy

00:33:37 --> 00:33:43
of how to act they learn how good it is

00:33:39 --> 00:33:46
to be in a state and use that goodness

00:33:42 --> 00:33:49
information to then pick the best one

00:33:45 --> 00:33:52
and then every once in a while flip a

00:33:48 --> 00:33:55
coin in order to explore and then policy

00:33:51 --> 00:33:59
based methods our ones that directly

00:33:54 --> 00:34:03
learn a policy function so they take as

00:33:58 --> 00:34:05
input the the world representation of

00:34:02 --> 00:34:09
that world neural networks and this

00:34:04 --> 00:34:12
output a action where the action is

00:34:08 --> 00:34:15
tochastic so okay that's the range of

00:34:11 --> 00:34:18
model-based value based and policy based

00:34:14 --> 00:34:22
here's an image from open AI that I

00:34:17 --> 00:34:24
really like I encourage you to as we

00:34:21 --> 00:34:26
further explore here to look up spinning

00:34:23 --> 00:34:29
up in deeper enforcement learning from

00:34:25 --> 00:34:30
open AI here's an image that texana

00:34:28 --> 00:34:34
mises in the way that I described some

00:34:29 --> 00:34:36
of the recent developments in RL so at

00:34:33 --> 00:34:40
he very top the distinction between

00:34:35 --> 00:34:43
model free RL and model-based RL in

00:34:39 --> 00:34:46
model free RL which is what we'll focus

00:34:42 --> 00:34:50
on today there is a distinction between

00:34:45 --> 00:34:52
policy optimization so on policy methods

00:34:49 --> 00:34:54
and q-learning

00:34:51 --> 00:34:56
which is all policy methods pause

00:34:53 --> 00:34:58
optimizations methods that directly

00:34:55 --> 00:35:00
optimize the policy they'll directly

00:34:57 --> 00:35:04
learn the policy in some way and then

00:34:59 --> 00:35:06
q-learning off policy methods learn like

00:35:03 --> 00:35:08
I mentioned the value of taking a

00:35:05 --> 00:35:13
certain action in the state and from

00:35:07 --> 00:35:14
that learned that learned Q value be

00:35:12 --> 00:35:18
able to

00:35:13 --> 00:35:21
choose how to act in the world so let's

00:35:17 --> 00:35:24
look at a few sample representative

00:35:20 --> 00:35:29
approaches in this space let's start

00:35:23 --> 00:35:31
with the with the one that really was

00:35:28 --> 00:35:34
one of the first great breakthroughs

00:35:30 --> 00:35:37
from google deepmind on the deep IRL

00:35:33 --> 00:35:40
side and solving atari games dqn deep

00:35:36 --> 00:35:43
queue learning networks deep queue

00:35:39 --> 00:35:44
networks and let's take a step back and

00:35:42 --> 00:35:47
think about what cue learning is

00:35:43 --> 00:35:52
q-learning looks at the state action

00:35:46 --> 00:35:54
value function queue that estimates

00:35:51 --> 00:35:57
based on a particular policy or based on

00:35:53 --> 00:36:03
an optimal policy how good is it to take

00:35:56 --> 00:36:06
an action in this state the estimated

00:36:02 --> 00:36:08
reward if I take an action in this state

00:36:05 --> 00:36:11
and continue operating under an optimal

00:36:07 --> 00:36:15
policy it gives you directly a

00:36:10 --> 00:36:16
way to say amongst all the actions I

00:36:14 --> 00:36:19
have which action should that take to

00:36:15 --> 00:36:21
maximize the reward now in the beginning

00:36:18 --> 00:36:24
you know nothing you know you don't have

00:36:20 --> 00:36:26
this value estimation you don't have

00:36:23 --> 00:36:28
this cue function so you have to learn

00:36:25 --> 00:36:30
it and you learn it with a bellman

00:36:27 --> 00:36:32
equation of updating it you take your

00:36:29 --> 00:36:35
current estimate and update it with the

00:36:31 --> 00:36:40
reward you seed received after you take

00:36:34 --> 00:36:43
an action here it's off policy and model

00:36:39 --> 00:36:45
free you don't have to have any estimate

00:36:42 --> 00:36:47
or knowledge of the world you don't have

00:36:44 --> 00:36:50
to have any policy whatsoever all you're

00:36:46 --> 00:36:52
doing is roaming about the world

00:36:49 --> 00:36:53
collecting data when you took a certain

00:36:51 --> 00:36:58
action here award you received and

00:36:52 --> 00:37:03
you're updating gradually this table

00:36:57 --> 00:37:10
where the table has state states on the

00:37:02 --> 00:37:14
y-axis and actions on the x-axis and the

00:37:09 --> 00:37:17
key part there is because you always

00:37:13 --> 00:37:19
have an estimate of what of to take an

00:37:16 --> 00:37:20
action of the value of taking that

00:37:18 --> 00:37:23
action so you can always take the

00:37:19 --> 00:37:25
optimal one but because you know very

00:37:22 --> 00:37:28
little in the beginning that optimal is

00:37:24 --> 00:37:29
going to you have no way of knowing

00:37:27 --> 00:37:31
that's good or not so there's some

00:37:28 --> 00:37:34
degree of expiration the fundamental

00:37:30 --> 00:37:36
aspect of value based methods or ami are

00:37:33 --> 00:37:40
all methods like I said it's trial and

00:37:35 --> 00:37:41
error is exploration so for value based

00:37:39 --> 00:37:43
methods that q-learning

00:37:40 --> 00:37:46
the way that's done is with the flip of

00:37:42 --> 00:37:47
a coin epsilon greedy with a flip of a

00:37:45 --> 00:37:49
coin

00:37:46 --> 00:37:55
you can choose to just take a random

00:37:48 --> 00:37:58
action and you slowly decrease epsilon

00:37:54 --> 00:37:59
to zero as your agent learns more and

00:37:57 --> 00:38:02
more so in the beginning you

00:37:58 --> 00:38:04
explore a lot with epsilon 1 and epsilon

00:38:01 --> 00:38:07
of zero in the end when you're just

00:38:03 --> 00:38:08
acting greedy based on the your

00:38:06 --> 00:38:11
understanding of the world as

00:38:07 --> 00:38:13
represented by the q-value function for

00:38:10 --> 00:38:17
non neural network approaches this is

00:38:12 --> 00:38:21
imply a table the Q this Q function is

00:38:16 --> 00:38:25
a table like I said on the Y State X

00:38:20 --> 00:38:28
actions and in each cell you have a

00:38:24 --> 00:38:30
reward that's at this counter reward

00:38:27 --> 00:38:32
that you estimated to be received there

00:38:29 --> 00:38:35
and as you walk around with this bellami

00:38:31 --> 00:38:38
equation you can update that table but

00:38:34 --> 00:38:40
it's a table nevertheless number of

00:38:37 --> 00:38:41
states times number of actions now if

00:38:39 --> 00:38:46
you look at any practical real-world

00:38:40 --> 00:38:49
problem and an arcade game with raw

00:38:45 --> 00:38:51
sensory input is a very crude first step

00:38:48 --> 00:38:55
towards the real world so raw sensor

00:38:50 --> 00:38:58
information this kind of value iteration

00:38:54 --> 00:39:00
and updating a table is impractical

00:38:57 --> 00:39:03
because here's for a game of break out

00:38:59 --> 00:39:07
if we look at four consecutive frames of

00:39:02 --> 00:39:11
a game of breakout size of the of the

00:39:06 --> 00:39:16
raw sensory input is 84 by 84 pixels

00:39:10 --> 00:39:23
grayscale every pixel has 256 values

00:39:15 --> 00:39:28
that's 256 to the power of whatever 84

00:39:22 --> 00:39:30
times 84 times 4 is whatever it is it's

00:39:27 --> 00:39:33
ignificantly larger the number of atoms

00:39:29 --> 00:39:35
in the universe so the size of this cue

00:39:32 --> 00:39:38
table if we use the traditional approach

00:39:34 --> 00:39:38
is intractable

00:39:39 --> 00:39:46
you'll know it's to the rescue deep RL

00:39:42 --> 00:39:48
is rl+ neural networks where the neural

00:39:45 --> 00:39:52
networks is tasked with taking this in

00:39:47 --> 00:39:53
Valley based methods taking this cue

00:39:51 --> 00:39:57
table and learning a compress

00:39:53 --> 00:39:59
representation of it learning an

00:39:56 --> 00:40:03
approximator for the function from state

00:39:58 --> 00:40:05
action to the value that's what

00:40:02 --> 00:40:08
previously talked about the ability the

00:40:04 --> 00:40:11
powerful ability of neural networks to

00:40:07 --> 00:40:14
form representations from extremely high

00:40:10 --> 00:40:17
dimensional complex raw sensory

00:40:13 --> 00:40:18
information so it's simple the framework

00:40:16 --> 00:40:20
remains for the most part the same in

00:40:17 --> 00:40:24
reinforcement learning

00:40:19 --> 00:40:26
it's just that this cue function for

00:40:23 --> 00:40:28
value based methods becomes a neural

00:40:25 --> 00:40:31
network and becomes an approximator

00:40:27 --> 00:40:33
where the hope is as you navigate the

00:40:30 --> 00:40:36
world and you pick up new knowledge

00:40:32 --> 00:40:38
through the back propagating the

00:40:35 --> 00:40:39
gradient and the loss function that

00:40:37 --> 00:40:42
you're able to form a good

00:40:38 --> 00:40:45
representation of the optimal q function

00:40:41 --> 00:40:46
so using your networks with you'll know

00:40:44 --> 00:40:49
it's a good at which is function

00:40:45 --> 00:40:53
approximator x' and that's DQ 1 deep Q

00:40:48 --> 00:40:56
Network was used to have the initial

00:40:52 --> 00:40:58
incredible nice results on our K games

00:40:55 --> 00:41:00
where the input is the raw sensory

00:40:57 --> 00:41:03
pixels with a few convolutional layers

00:40:59 --> 00:41:08
for the connected layers and the output

00:41:02 --> 00:41:09
is a set of actions you know probability

00:41:07 --> 00:41:10
of taking that action and then you

00:41:08 --> 00:41:13
sample that and you choose the best

00:41:09 --> 00:41:14
action and so this simple agent whether

00:41:12 --> 00:41:18
the neural network that estimates that Q

00:41:13 --> 00:41:21
function very simple network is able to

00:41:17 --> 00:41:23
achieve superhuman performance on many

00:41:20 --> 00:41:25
of these arcade games that excited the

00:41:22 --> 00:41:29
world because it's taking raw sensory

00:41:24 --> 00:41:31
information with a pretty simple network

00:41:28 --> 00:41:33
that doesn't in the beginning understand

00:41:30 --> 00:41:34
any of the physics of the world any of

00:41:32 --> 00:41:38
the dynamics of the environment and

00:41:33 --> 00:41:42
through that intractable space the

00:41:37 --> 00:41:46
intractable state space is able to learn

00:41:41 --> 00:41:53
how to actually do pretty well the loss

00:41:45 --> 00:41:59
function for DQ n has to Q functions one

00:41:52 --> 00:42:01
is the expected the predicted Q value of

00:41:58 --> 00:42:06
a taking an action in a particular state

00:42:00 --> 00:42:08
and the other is the target against

00:42:05 --> 00:42:12
which the loss function is calculated

00:42:07 --> 00:42:15
which is what is the value that you got

00:42:11 --> 00:42:18
once you actually take in that action

00:42:14 --> 00:42:19
and once you've taken that action the

00:42:17 --> 00:42:21
way you calculate the value is by

00:42:18 --> 00:42:25
looking at the next step and choosing

00:42:20 --> 00:42:28
the max to Singh if you take the best

00:42:24 --> 00:42:30
action in the next state what is going

00:42:27 --> 00:42:32
to be the Q function so there's two

00:42:29 --> 00:42:33
estimators going on with in terms of

00:42:31 --> 00:42:37
neural networks those two forward passes

00:42:32 --> 00:42:41
here there's two Q's in this equation so

00:42:36 --> 00:42:43
in traditional DQ n that's just that's

00:42:40 --> 00:42:46
done by a single neural network with a

00:42:42 --> 00:42:49
few tricks and double DQ n that's done

00:42:45 --> 00:42:52
by two neural networks and I mentioned

00:42:48 --> 00:42:56
tricks because with this and with most

00:42:51 --> 00:42:58
of RL tricks tell a lot of the story a

00:42:55 --> 00:43:02
lot of what makes

00:42:57 --> 00:43:07
ystems work is the details in in games

00:43:01 --> 00:43:09
and robotic systems in these cases the

00:43:06 --> 00:43:10
two biggest tricks for DQ n that will

00:43:08 --> 00:43:14
reappear and a lot of value based

00:43:09 --> 00:43:17
methods is experience replay so think of

00:43:14 --> 00:43:21
an agent that plays through these games

00:43:16 --> 00:43:24
as also collecting memories you collect

00:43:20 --> 00:43:28
his bank of memories that can then be

00:43:23 --> 00:43:30
replayed the power of that one of the

00:43:27 --> 00:43:34
central elements of what makes value

00:43:29 --> 00:43:36
based methods attractive is that because

00:43:33 --> 00:43:38
you're not directly estimating the

00:43:35 --> 00:43:40
policy but are learning the quality of

00:43:37 --> 00:43:43
taking an action in a particular state

00:43:39 --> 00:43:46
the you're able to then jump around

00:43:42 --> 00:43:50
through your memory and and play

00:43:45 --> 00:43:52
different aspects of that memory so

00:43:49 --> 00:43:55
learn train the network through the

00:43:51 --> 00:43:59
historical data and then the other trick

00:43:54 --> 00:44:02
simple is like I said that there is so

00:43:59 --> 00:44:05
the loss function has two queues

00:44:01 --> 00:44:07
o you're it's it's a dragon chasing its

00:44:04 --> 00:44:10
own tail it's easy for the loss function

00:44:07 --> 00:44:14
to become unstable so the training does

00:44:09 --> 00:44:15
not converge so the trick of fixing a

00:44:13 --> 00:44:18
target Network is taking one of the

00:44:14 --> 00:44:20
queues and only updating in every X

00:44:17 --> 00:44:21
steps every thousand steps and so on and

00:44:19 --> 00:44:24
taking the same kind of network

00:44:20 --> 00:44:25
it's just fixing it so for the target

00:44:23 --> 00:44:28
network that defines the loss function

00:44:24 --> 00:44:30
just keeping it fixed and only updating

00:44:27 --> 00:44:33
any regulator so you're chasing a fixed

00:44:29 --> 00:44:36
target with a loss function as opposed

00:44:32 --> 00:44:39
to a dynamic one so you can solve a lot

00:44:35 --> 00:44:41
of the Atari games with minimal effort

00:44:38 --> 00:44:44
come up with some creative solutions

00:44:40 --> 00:44:46
here break out here after 10 minutes of

00:44:43 --> 00:44:48
training on the left after a to have 2

00:44:45 --> 00:44:50
hours of training on the right is coming

00:44:47 --> 00:44:52
up with some creative solutions again

00:44:49 --> 00:44:56
it's pretty cool because this is raw

00:44:51 --> 00:44:59
pixels right we're now like there's been

00:44:55 --> 00:45:03
a few years since this breakthrough so

00:44:58 --> 00:45:06
kind of take it for granted but I still

00:45:02 --> 00:45:08
for the most part captivated by just how

00:45:05 --> 00:45:09
beautiful it is that from the raw

00:45:07 --> 00:45:13
sensory information

00:45:08 --> 00:45:15
eural networks are able to learn to act

00:45:12 --> 00:45:18
in a way that actually supersedes humans

00:45:14 --> 00:45:20
in terms of creativity in terms of in

00:45:17 --> 00:45:23
terms of actual raw performance it's

00:45:19 --> 00:45:25
really exciting and games of simple form

00:45:22 --> 00:45:28
is the cleanest way to demonstrate that

00:45:24 --> 00:45:31
and you the the same kind of DQ and

00:45:28 --> 00:45:32
network is able to achieve superhuman

00:45:30 --> 00:45:33
performance and a bunch of different

00:45:31 --> 00:45:35
games

00:45:32 --> 00:45:38
there's improvements to this like dual

00:45:34 --> 00:45:41
DQ one again the q function can be

00:45:37 --> 00:45:43
decomposed which is useful in to the

00:45:40 --> 00:45:46
value estimate of being in that state

00:45:42 --> 00:45:48
and what's called and in future slides

00:45:45 --> 00:45:50
that we called advantage

00:45:47 --> 00:45:52
so the advantage of taking action in

00:45:49 --> 00:45:56
that state the nice thing of the

00:45:51 --> 00:45:59
advantage as a measure is that it's a

00:45:55 --> 00:46:02
measure of the action quality relative

00:45:58 --> 00:46:05
to the average action that could be

00:46:01 --> 00:46:08
taken there so if it's very useful

00:46:04 --> 00:46:10
advantage versus sort of raw reward is

00:46:07 --> 00:46:13
that if all the actions you have to take

00:46:09 --> 00:46:15
are pretty good you want to know well

00:46:12 --> 00:46:16
how much better it is in terms of

00:46:14 --> 00:46:19
optimism

00:46:15 --> 00:46:23
that's a better measure for choosing

00:46:18 --> 00:46:25
actions in a value-based sense so when

00:46:22 --> 00:46:27
you have these two estimates you have

00:46:24 --> 00:46:31
these two streams for neural networking

00:46:26 --> 00:46:33
the dueling DQ n DG QM where one

00:46:30 --> 00:46:38
stimates the value the other the

00:46:32 --> 00:46:42
advantage and that's again that dueling

00:46:37 --> 00:46:45
nature is useful for also on the there

00:46:41 --> 00:46:48
are many states in which the action is

00:46:44 --> 00:46:50
decoupled the quality of the actions is

00:46:47 --> 00:46:54
decouple from the state so many states

00:46:49 --> 00:46:57
it doesn't matter which action you take

00:46:53 --> 00:46:59
so you don't need to learn all the

00:46:56 --> 00:47:02
different complexities all the topology

00:46:58 --> 00:47:06
of different actions when you in a

00:47:01 --> 00:47:08
particular state and another one is

00:47:05 --> 00:47:10
prioritize experience for play like I

00:47:07 --> 00:47:13
said experience replay is really key to

00:47:09 --> 00:47:15
these algorithms and the thing that

00:47:12 --> 00:47:18
sinks some of the policy optimization

00:47:14 --> 00:47:21
methods and experiments replay is

00:47:17 --> 00:47:23
collecting different memories but if you

00:47:20 --> 00:47:27
just sample randomly in those memories

00:47:22 --> 00:47:30
you're now affected the sampled

00:47:26 --> 00:47:32
experiences are really affected by the

00:47:29 --> 00:47:35
frequency of those experience occurred

00:47:31 --> 00:47:37
not their importance so prioritize

00:47:34 --> 00:47:43
xperience replay assigns a priority a

00:47:36 --> 00:47:46
value based on the magnitude of the

00:47:42 --> 00:47:48
temporal difference learned error so the

00:47:45 --> 00:47:51
stuff you have learned the most from

00:47:47 --> 00:47:54
is given a higher priority and therefore

00:47:50 --> 00:47:58
you get to see through the experience

00:47:53 --> 00:48:04
replay process that that particular

00:47:57 --> 00:48:06
experience more often okay moving on to

00:48:03 --> 00:48:10
policy gradients this is on policy

00:48:05 --> 00:48:13
versus q-learning off policy policy

00:48:09 --> 00:48:16
gradient

00:48:12 --> 00:48:19
is directly optimizing the policy where

00:48:15 --> 00:48:25
the input is the raw pixels and the

00:48:18 --> 00:48:27
policy network represents the forms of

00:48:24 --> 00:48:29
representations of that environment

00:48:26 --> 00:48:31
space and as output produces a

00:48:28 --> 00:48:34
stochastic estimate a probability of the

00:48:30 --> 00:48:38
different actions here in the pong the

00:48:33 --> 00:48:40
pixels a single output that produces the

00:48:37 --> 00:48:42
probability of moving the paddle up so

00:48:39 --> 00:48:45
how do pause gradients vanilla policy

00:48:41 --> 00:48:47
grading the very basic works is you

00:48:44 --> 00:48:51
nroll the environment you play through

00:48:46 --> 00:48:54
the environment here pong moving the

00:48:50 --> 00:48:58
paddle up and down and so on collecting

00:48:53 --> 00:49:01
no rewards and only collecting reward at

00:48:57 --> 00:49:04
he very end based on whether you win or

00:49:00 --> 00:49:05
lose every single action you're taking

00:49:03 --> 00:49:07
along the way gets either punished or

00:49:04 --> 00:49:12
ewarded based on whether it led to

00:49:06 --> 00:49:14
victory or defeat this also is

00:49:11 --> 00:49:17
remarkable that this works at all

00:49:13 --> 00:49:20
because the credit assignment there's a

00:49:16 --> 00:49:25
is I mean every single thing you did

00:49:19 --> 00:49:27
along the way is averaged out it's like

00:49:24 --> 00:49:29
muddied it's the reason that policy

00:49:26 --> 00:49:31
gradient methods are more inefficient

00:49:28 --> 00:49:35
but it's still very surprising that it

00:49:30 --> 00:49:38
works at all so the pros versus DQ one

00:49:34 --> 00:49:39
the value based methods is that if the

00:49:37 --> 00:49:41
world is so messy that you can't learn a

00:49:38 --> 00:49:43
q function the nice thing about policy

00:49:40 --> 00:49:45
gradient because it's learning the

00:49:42 --> 00:49:48
policy directly that it will at least

00:49:44 --> 00:49:50
learn a pretty good policy usually in

00:49:47 --> 00:49:52
many cases faster convergence it's able

00:49:49 --> 00:49:54
to deal with stochastic policies so

00:49:51 --> 00:49:56
value based methods can out learners the

00:49:53 --> 00:49:58
gassing policies and it's much more

00:49:55 --> 00:50:02
naturally able to deal with continuous

00:49:57 --> 00:50:07
actions the cons is it's inefficient

00:50:01 --> 00:50:09
versus dqn it's it can become highly

00:50:06 --> 00:50:11
unstable as we'll talk about some

00:50:08 --> 00:50:14
solutions to this during the training

00:50:10 --> 00:50:17
process and the credit assignment so if

00:50:13 --> 00:50:20
we look at the chain of actions that

00:50:16 --> 00:50:22
lead to a positive reward some might be

00:50:19 --> 00:50:24
awesome action some may be good action

00:50:21 --> 00:50:26
some might be terrible actions but that

00:50:23 --> 00:50:28
doesn't matter as long as the death

00:50:25 --> 00:50:31
e nation was good and that's then

00:50:27 --> 00:50:34
every single action along the way gets a

00:50:30 --> 00:50:36
positive reinforcement that's the

00:50:33 --> 00:50:39
downside and there's now improvements to

00:50:35 --> 00:50:44
that advantage actor critic methods a to

00:50:38 --> 00:50:49
see combining the best of value based

00:50:43 --> 00:50:53
methods and policy base methods so

00:50:48 --> 00:50:56
having an actor two networks an actor

00:50:52 --> 00:50:59
which is policy based and that's the one

00:50:55 --> 00:51:01
that's takes the actions samples the

00:50:58 --> 00:51:03
actions from the policy Network and the

00:51:00 --> 00:51:06
critic that measures how good those

00:51:02 --> 00:51:09
actions are and the critic is value

00:51:05 --> 00:51:11
based all right so as opposed to in the

00:51:08 --> 00:51:14
policy update the first equation there

00:51:10 --> 00:51:17
the reward coming from the destination

00:51:13 --> 00:51:19
the that our war being from whether you

00:51:16 --> 00:51:23
won the game or not every single step

00:51:18 --> 00:51:27
along the way you now learn a Q value

00:51:22 --> 00:51:32
function Q s a state and action using

00:51:26 --> 00:51:34
the critic Network so you're able to now

00:51:31 --> 00:51:35
learn about the environment about

00:51:33 --> 00:51:37
evaluating your own actions at every

00:51:35 --> 00:51:40
step so you're much more sample

00:51:36 --> 00:51:43
fficient there's a synchronous from

00:51:39 --> 00:51:46
deep mind and synchronous from open AI

00:51:42 --> 00:51:48
variants of this but of the actor

00:51:45 --> 00:51:50
advantage actor critic framework but

00:51:47 --> 00:51:55
both are highly parallelizable the

00:51:49 --> 00:51:59
difference with a three C the

00:51:55 --> 00:52:02
asynchronous one is that every single

00:51:58 --> 00:52:03
agency just throw these agents operating

00:52:01 --> 00:52:05
in the environment and they're learning

00:52:02 --> 00:52:08
they're rolling out the games and

00:52:04 --> 00:52:11
getting the reward they're updating the

00:52:07 --> 00:52:13
original Network asynchronously the

00:52:10 --> 00:52:16
global network parameters asynchronously

00:52:12 --> 00:52:19
and as a result they're also operating

00:52:15 --> 00:52:22
constantly an outdated versions of that

00:52:18 --> 00:52:25
network the open AI approach that fixes

00:52:21 --> 00:52:28
this is that there's a coordinator that

00:52:24 --> 00:52:30
here's these rounds where everybody all

00:52:27 --> 00:52:32
the agents in parallel are rolling out

00:52:29 --> 00:52:34
he episode but then the coordinator

00:52:31 --> 00:52:36
waits for everybody to finish in order

00:52:33 --> 00:52:38
to make the update to the global network

00:52:35 --> 00:52:39
and then distributes all the same

00:52:37 --> 00:52:42
parameter

00:52:38 --> 00:52:44
to all the agents and so that means that

00:52:41 --> 00:52:47
every iteration starts with the same

00:52:43 --> 00:52:49
global parameters and that has really

00:52:46 --> 00:52:52
nice properties in terms of conversions

00:52:48 --> 00:52:55
and stability of the training process

00:52:51 --> 00:52:58
okay from google deepmind the deep

00:52:54 --> 00:53:02
deterministic policy gradient is

00:52:57 --> 00:53:06
combining the ideas of dqn but dealing

00:53:01 --> 00:53:09
with continuous action spaces so taking

00:53:05 --> 00:53:14
a policy network but instead of the

00:53:08 --> 00:53:17
actor actor critic framework but instead

00:53:13 --> 00:53:18
of picking a stochastic policy having

00:53:16 --> 00:53:20
the actor operator on the since the

00:53:17 --> 00:53:23
casting nature is picking the best

00:53:19 --> 00:53:27
picking a deterministic policy so it's

00:53:22 --> 00:53:30
always choosing the best action but ok

00:53:26 --> 00:53:32
with that the problem quite naturally is

00:53:29 --> 00:53:34
that when the policy is now

00:53:31 --> 00:53:36
deterministic it's able to do continuous

00:53:33 --> 00:53:38
action space but because it's termina

00:53:35 --> 00:53:40
stick it's never exploring so the way we

00:53:37 --> 00:53:43
inject exploration into the system is by

00:53:39 --> 00:53:45
adding noise either adding noise into

00:53:42 --> 00:53:47
the action space on the output or adding

00:53:44 --> 00:53:53
noise into the parameters of the network

00:53:46 --> 00:53:55
that have then that create perturbations

00:53:52 --> 00:53:57
and the actions such that the final

00:53:54 --> 00:53:59
result is that you try different kinds

00:53:56 --> 00:54:01
of things and the the scale of the noise

00:53:58 --> 00:54:03
just like well the epsilon greedy in the

00:54:00 --> 00:54:05
xploration for DQ on the scale of the

00:54:02 --> 00:54:08
noise decreases as you learn more and

00:54:04 --> 00:54:13
more so on the policy optimization side

00:54:07 --> 00:54:13
from open ai and others

00:54:12 --> 00:54:18
we'll do a lecture just on this there's

00:54:15 --> 00:54:22
been a lot of exciting work here the

00:54:17 --> 00:54:26
basic idea of optimization on policy

00:54:21 --> 00:54:30
optimization with PPO and TRP au is

00:54:25 --> 00:54:30
first of all we want to formulate

00:54:29 --> 00:54:38
reinforcement learning as purely an

00:54:32 --> 00:54:42
optimization problem and second of all

00:54:37 --> 00:54:46
if policy optimization the actions you

00:54:41 --> 00:54:48
take influences the rest of your the

00:54:45 --> 00:54:50
optimization process you have to be very

00:54:47 --> 00:54:53
careful about the actions you take in

00:54:49 --> 00:54:56
particular you have to avoid taking

00:54:52 --> 00:54:58
really bad actions when you're

00:54:55 --> 00:55:02
convergence the the training performance

00:54:57 --> 00:55:02
in general collapses so how do we do

00:55:01 --> 00:55:05
that

00:55:01 --> 00:55:07
here's the line search methods which is

00:55:04 --> 00:55:10
where gradient descent or gradient

00:55:06 --> 00:55:13
descent falls under which which is the

00:55:09 --> 00:55:16
how we train deep neural networks is you

00:55:12 --> 00:55:21
first pick a direction of the gradient

00:55:15 --> 00:55:22
and then pick the step size the problem

00:55:20 --> 00:55:24
with that is that can get you into

00:55:22 --> 00:55:28
trouble here there's a nice

00:55:23 --> 00:55:31
visualization walking along a ridge is

00:55:27 --> 00:55:33
it can it can result in you stepping off

00:55:30 --> 00:55:36
that Ridge again the collapsing of the

00:55:32 --> 00:55:39
training process the performance the

00:55:35 --> 00:55:42
trust region is is the underlying idea

00:55:38 --> 00:55:45
here for the for the policy optimization

00:55:41 --> 00:55:47
methods that first pick the step size so

00:55:44 --> 00:55:50
that constrain in various kinds of ways

00:55:46 --> 00:55:53
the the magnitude of the difference to

00:55:49 --> 00:55:56
the weights that's applied and then the

00:55:52 --> 00:55:59
direction so it placing a much higher

00:55:55 --> 00:56:01
priority not choosing bad actions that

00:55:58 --> 00:56:03
can throw you off the optimization path

00:56:00 --> 00:56:06
should actually we should take to that

00:56:02 --> 00:56:08
path and finally the on the model-based

00:56:05 --> 00:56:10
methods and we'll also talk about them

00:56:07 --> 00:56:13
in the robotics side there's a lot of

00:56:09 --> 00:56:15
interesting approaches now where deep

00:56:12 --> 00:56:18
learning is starting to be used for a

00:56:14 --> 00:56:20
model-based methods when the model has

00:56:17 --> 00:56:21
to be learned but of course when the

00:56:19 --> 00:56:24
model doesn't have to be learned it's

00:56:20 --> 00:56:27
given inherent to the game you know the

00:56:23 --> 00:56:30
model like Ingo and chess and so on out

00:56:26 --> 00:56:34
zero has really done incredible stuff so

00:56:29 --> 00:56:36
what's wise what is the model here so

00:56:33 --> 00:56:39
the way that a lot of these games are

00:56:35 --> 00:56:41
approached you know game of Go it's

00:56:38 --> 00:56:42
turn-based one person goes and then

00:56:40 --> 00:56:44
another person goes and there's this

00:56:41 --> 00:56:46
game tree at every point as a set of

00:56:43 --> 00:56:49
actions that could be taken and quickly

00:56:45 --> 00:56:51
if you look at that game tree it's it

00:56:48 --> 00:56:53
becomes you know a girl's exponentially

00:56:50 --> 00:56:55
so it becomes huge a game of go is the

00:56:52 --> 00:56:57
hugest of all in terms of because the

00:56:54 --> 00:57:01
number of choices you have is the

00:56:56 --> 00:57:02
largest and there's chess and then you

00:57:00 --> 00:57:04
know it gets the checkers and then

00:57:01 --> 00:57:07
tic-tac-toe and it's just the the degree

00:57:03 --> 00:57:09
at every step increases decreased based

00:57:06 --> 00:57:12
on the game structure and so the task

00:57:08 --> 00:57:14
for a neural network there is to learn

00:57:11 --> 00:57:18
the quality of the board it's that it's

00:57:13 --> 00:57:24
to learn which boards which game

00:57:17 --> 00:57:27
positions are most likely to result in a

00:57:23 --> 00:57:30
re most useful to explore and a result

00:57:26 --> 00:57:33
in a highly successful state so that

00:57:29 --> 00:57:35
choice of what's good to explore what's

00:57:32 --> 00:57:38
what branch is good to go down is where

00:57:34 --> 00:57:40
we can have neural network step in and

00:57:37 --> 00:57:42
without phago it was pre trained the

00:57:39 --> 00:57:45
first success that beat the world

00:57:41 --> 00:57:48
champion was pre trained on expert games

00:57:44 --> 00:57:53
then with alphago zero

00:57:47 --> 00:57:56
it was no pre training on expert systems

00:57:52 --> 00:57:58
o no imitation learning is just purely

00:57:55 --> 00:58:00
through self play through suggesting

00:57:57 --> 00:58:02
through playing itself new board

00:57:59 --> 00:58:05
positions many of these systems use

00:58:01 --> 00:58:07
Monte Carlo tree search and during the

00:58:04 --> 00:58:09
search balancing exploitation

00:58:06 --> 00:58:10
exploration so going deep on promising

00:58:08 --> 00:58:14
positions based on the estimation then

00:58:09 --> 00:58:19
you'll network or with a flip of a coin

00:58:13 --> 00:58:21
playing under play positions and so this

00:58:18 --> 00:58:23
kind of here you can think of as an

00:58:20 --> 00:58:26
intuition of looking at a board and

00:58:22 --> 00:58:29
estimating how good that board is and

00:58:25 --> 00:58:32
also estimating how good that board is

00:58:28 --> 00:58:34
likely to lead to victory down the end

00:58:31 --> 00:58:37
so as to mean just general quality and

00:58:33 --> 00:58:40
probability of leading to victory then

00:58:36 --> 00:58:43
the next step forward is alpha zero

00:58:39 --> 00:58:47
using the same similar architecture with

00:58:42 --> 00:58:48
MCTS what do you call it research but

00:58:46 --> 00:58:52
applying it to different games and

00:58:47 --> 00:58:54
applying it and competing against other

00:58:51 --> 00:58:58
engines state-of-the-art engines and go

00:58:53 --> 00:59:01
and shogi in chess and outperforming

00:58:57 --> 00:59:05
them with very few very few steps so

00:59:00 --> 00:59:08
here's this model-based approaches which

00:59:04 --> 00:59:10
are really extremely simple efficient if

00:59:07 --> 00:59:12
you can construct us such a model and in

00:59:09 --> 00:59:15
the robotics if you can learn such a

00:59:11 --> 00:59:21
model I can be exceptionally powerful

00:59:14 --> 00:59:24
here beating the the engines which are

00:59:20 --> 00:59:26
far superior to humans already stockfish

00:59:23 --> 00:59:29
can destroy most humans on earth at the

00:59:25 --> 00:59:31
game of chess the ability through

00:59:28 --> 00:59:33
learning through through estimating the

00:59:30 --> 00:59:36
quality of a board to be able to defeat

00:59:32 --> 00:59:39
hese engines is incredible and the the

00:59:35 --> 00:59:43
xciting aspect here versus engines that

00:59:38 --> 00:59:47
don't use neural networks is that the

00:59:42 --> 00:59:49
number its it really has to do with

00:59:46 --> 00:59:53
based on the neural network you explore

00:59:48 --> 00:59:56
certain positions you explore certain

00:59:52 --> 01:00:01
parts of the tree and if you look at

00:59:55 --> 01:00:05
grandmasters human players in chess they

01:00:00 --> 01:00:06
seem to explore very few moves they have

01:00:04 --> 01:00:09
a really good neural network at

01:00:05 --> 01:00:12
estimating which are the likely branches

01:00:08 --> 01:00:16
which would provide value to explore and

01:00:11 --> 01:00:19
on the other side stock fish and so on

01:00:15 --> 01:00:21
are much more brute force in their

01:00:18 --> 01:00:24
estimation for the MCTS and then alpha

01:00:20 --> 01:00:26
zero is a step towards the Grandmaster

01:00:23 --> 01:00:28
is the number of branches need to be

01:00:25 --> 01:00:31
xplored as much much fewer a lot of the

01:00:27 --> 01:00:33
work is done in the representation form

01:00:30 --> 01:00:35
by the neural network it's just super

01:00:32 --> 01:00:38
exciting and then it's able to uh

01:00:34 --> 01:00:42
perform stockfish in chess it's able to

01:00:37 --> 01:00:46
utperform Elmo and shogi and it's

01:00:41 --> 01:00:51
itself in go or the previous iterations

01:00:45 --> 01:00:55
of alphago zero and so on now the

01:00:50 --> 01:00:58
challenge here the sobering truth is

01:00:54 --> 01:01:01
that majority of real world application

01:00:57 --> 01:01:02
of agents that have to act in this world

01:01:00 --> 01:01:06
perceive the world and act in this world

01:01:01 --> 01:01:10
are for the most part not based have no

01:01:05 --> 01:01:13
RL involved so the action is not learned

01:01:09 --> 01:01:15
use neural networks to perceive certain

01:01:12 --> 01:01:19
aspects of the world but ultimately the

01:01:14 --> 01:01:22
action is not is not learned from data

01:01:18 --> 01:01:24
that's true for all most of the

01:01:21 --> 01:01:25
autonomous vehicle companies are all of

01:01:23 --> 01:01:28
the autonomous vehicle companies

01:01:24 --> 01:01:31
operating today and it's true for

01:01:27 --> 01:01:34
obotic manipulation in the industrial

01:01:30 --> 01:01:35
robotics and any of the humanoid robots

01:01:33 --> 01:01:37
have to navigate in this world under

01:01:34 --> 01:01:39
uncertain conditions all the work from

01:01:36 --> 01:01:43
Boston Dynamics doesn't involve any

01:01:38 --> 01:01:46
machine learning as far as we know now

01:01:42 --> 01:01:50
that's beginning to change here with

01:01:45 --> 01:01:54
animal the the recent development where

01:01:49 --> 01:01:55
the certain aspects of the control a

01:01:53 --> 01:01:58
robotic could be learned

01:01:54 --> 01:02:00
you're trying to learn more efficient

01:01:57 --> 01:02:02
movement you're trying to learn more

01:01:59 --> 01:02:04
robust movement on top of the other

01:02:01 --> 01:02:07
controllers so it's quite exciting

01:02:03 --> 01:02:09
through RL to be able to learn some of

01:02:06 --> 01:02:13
the control dynamics here that's able to

01:02:08 --> 01:02:15
teach this particular robot to be able

01:02:12 --> 01:02:17
to get up from arbitrary positions so

01:02:14 --> 01:02:21
it's less hard coding in order to be

01:02:16 --> 01:02:24
able to deal with unexpected nishal

01:02:20 --> 01:02:26
conditions and unexpected perturbations

01:02:23 --> 01:02:29
o that's exciting there in terms of

01:02:25 --> 01:02:30
learning the control dynamics and some

01:02:28 --> 01:02:33
of the driving policy

01:02:29 --> 01:02:33
so maybe behavioral driving behavior

01:02:32 --> 01:02:36
decisions

01:02:32 --> 01:02:39
changing lanes turning and so on that if

01:02:35 --> 01:02:40
you if you were here last week heard

01:02:38 --> 01:02:42
from way moe

01:02:39 --> 01:02:43
they they're starting to use some RL in

01:02:41 --> 01:02:45
terms of the driving policy in order to

01:02:42 --> 01:02:46
especially predict the future they're

01:02:44 --> 01:02:48
trying to anticipate

01:02:45 --> 01:02:50
intent modeling predict what the

01:02:47 --> 01:02:51
pedestrians the cars are going to be

01:02:49 --> 01:02:54
based on environment that are trying to

01:02:50 --> 01:02:58
unroll what's happened recently into the

01:02:53 --> 01:03:00
future and beginning to move beyond sort

01:02:57 --> 01:03:03
of pure end to end on NVIDIA and to end

01:02:59 --> 01:03:05
learning approach of the control

01:03:02 --> 01:03:07
decisions are actually moving to

01:03:04 --> 01:03:13
RL and making long-term planning

01:03:06 --> 01:03:16
decisions but again the challenge is the

01:03:12 --> 01:03:19
gap the leap needed to go from

01:03:15 --> 01:03:21
simulation to real-world all most the

01:03:18 --> 01:03:22
work is done from the design of the

01:03:20 --> 01:03:24
nvironment and the design and the

01:03:21 --> 01:03:26
reward structure and because most of

01:03:23 --> 01:03:29
that work now is in simulation we need

01:03:25 --> 01:03:32
to either develop better algorithms for

01:03:28 --> 01:03:35
transfer learning or close the distance

01:03:31 --> 01:03:38
between simulation in the real world and

01:03:34 --> 01:03:40
also we could think outside the box a

01:03:37 --> 01:03:42
little bit at the conversation with

01:03:39 --> 01:03:45
Peter bill recently one of the leading

01:03:41 --> 01:03:50
researchers in deep RL it kind of on the

01:03:45 --> 01:03:52
side quickly mentioned the the idea is

01:03:49 --> 01:03:55
that we don't need to make simulation

01:03:51 --> 01:03:59
more realistic what we could do is just

01:03:54 --> 01:04:04
create an infinite number of simulations

01:03:58 --> 01:04:07
or very large number of simulations and

01:04:03 --> 01:04:09
the naturally the regularization aspect

01:04:06 --> 01:04:12
of having all those simulations will

01:04:08 --> 01:04:14
make it so that our our reality is just

01:04:11 --> 01:04:16
another sample from those simulations

01:04:13 --> 01:04:18
and so maybe the solution isn't to

01:04:15 --> 01:04:20
create higher fidelity simulation or to

01:04:17 --> 01:04:26
create transfer learning algorithms

01:04:19 --> 01:04:30
maybe it's to build a arbitrary number

01:04:25 --> 01:04:32
of simulations so then that step towards

01:04:29 --> 01:04:34
creating a agent that work that works in

01:04:31 --> 01:04:37
the real world is a trivial one and

01:04:33 --> 01:04:39
maybe that's exactly whoever created the

01:04:36 --> 01:04:45
simulation we're living in and the

01:04:38 --> 01:04:48
multiverse that we're living in did next

01:04:44 --> 01:04:50
steps the lecture videos will have

01:04:47 --> 01:04:52
several in RL will be made all available

01:04:49 --> 01:04:55
on deep learning that MIT ID you will

01:04:51 --> 01:04:58
have several tutorials in RL on github

01:04:54 --> 01:05:02
the link is there and I really like the

01:04:57 --> 01:05:04
ssay from open AI on spinning up as a

01:05:01 --> 01:05:05
deep our researcher you know if you're

01:05:03 --> 01:05:08
interested in getting into research in

01:05:04 --> 01:05:10
RL what are the steps need to take from

01:05:07 --> 01:05:12
the background of developing the

01:05:09 --> 01:05:15
mathematical background prop stat and

01:05:11 --> 01:05:17
multivariate calculus to some of the

01:05:14 --> 01:05:18
basics like it's covered last week on

01:05:16 --> 01:05:21
deep learning some

01:05:17 --> 01:05:23
the basics ideas in RL just terminology

01:05:20 --> 01:05:26
and so on some basic concepts then

01:05:22 --> 01:05:30
picking a framework tends to flow our PI

01:05:25 --> 01:05:33
torch and learn by doing i implemented

01:05:29 --> 01:05:36
guram as i mentioned today those are the

01:05:32 --> 01:05:38
core RL algorithms so implement all isms

01:05:35 --> 01:05:40
from scratch it should only take about

01:05:37 --> 01:05:42
wo hundred three hundred lines of code

01:05:39 --> 01:05:45
there actually when you put it down on

01:05:41 --> 01:05:48
paper quite simple intuitive algorithms

01:05:44 --> 01:05:51
and then read papers about those

01:05:47 --> 01:05:55
algorithms that follow after looking not

01:05:50 --> 01:05:57
for the big waving performance the hand

01:05:54 --> 01:05:58
waving performance but for the tricks

01:05:56 --> 01:06:00
that were used to change these

01:05:57 --> 01:06:03
algorithms the tricks tell a lot of the

01:05:59 --> 01:06:06
story and that's the useful parts that

01:06:02 --> 01:06:08
hey need to learn and iterate fast on

01:06:05 --> 01:06:11
simple benchmark environments so open

01:06:07 --> 01:06:13
the I Jim has provided a lot of easy to

01:06:10 --> 01:06:15
use environments that you can play with

01:06:12 --> 01:06:18
at you can train an agent in minutes

01:06:14 --> 01:06:21
hours as opposed to days and weeks and

01:06:17 --> 01:06:22
so iterating fast is the best way to

01:06:20 --> 01:06:25
learn these algorithms and then on the

01:06:21 --> 01:06:28
research side there's three ways to get

01:06:24 --> 01:06:31
a best paper award right two to publish

01:06:27 --> 01:06:34
and to contribute and have an impact in

01:06:30 --> 01:06:36
the research community in in RL one is

01:06:33 --> 01:06:38
improving existing approach given us a

01:06:35 --> 01:06:41
particular benchmarks there's a few

01:06:37 --> 01:06:43
benchmark datasets environments that are

01:06:40 --> 01:06:44
merging so you want to improve on the

01:06:42 --> 01:06:46
xisting approach some aspect of the

01:06:43 --> 01:06:49
convergence in the performance you can

01:06:45 --> 01:06:51
focus on an unsolved task there's

01:06:48 --> 01:06:55
certain games that just haven't been

01:06:50 --> 01:06:56
solved through their RL formulation or

01:06:54 --> 01:06:59
you can come up with a totally new

01:06:55 --> 01:07:03
problem that hasn't been addressed by RL

01:06:58 --> 01:07:03
before so with that I'd like to thank

01:07:02 --> 01:07:06
you very much

01:07:02 --> 01:07:08
tomorrow I'll hope to see you here for

01:07:05 --> 01:07:08
deep traffic Thanks

01:07:08 --> 01:07:11
you

<!-- YOUTUBE_TRANSCRIPT_END -->
