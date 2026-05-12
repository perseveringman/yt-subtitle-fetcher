---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "MQ6pP65o7OM"
title: "MIT 6.S094: Deep Reinforcement Learning"
video_url: "https://www.youtube.com/watch?v=MQ6pP65o7OM"
thumbnail_url: "https://i.ytimg.com/vi/MQ6pP65o7OM/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=MQ6pP65o7OM"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-01-25T14:25:34.000Z"
upload_date: "2018-01-25"
duration_seconds: 3475
duration_human: "57:55"
view_count: 73360
like_count: 919
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:21:12.580Z"
---

# MIT 6.S094: Deep Reinforcement Learning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=MQ6pP65o7OM
- video_id: MQ6pP65o7OM
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-01-25T14:25:34.000Z
- upload_date: 2018-01-25
- duration: 57:55
- view_count: 73360
- like_count: 919
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018
- categories: Science & Technology

## Description

This is lecture 3 of course 6.S094: Deep Learning for Self-Driving Cars (2018 version). This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

OUTLINE:
0:00 - AI Pipeline from Sensors to Action
8:25 - Reinforcement Learning
23:50 - Deep Reinforcement Learning
36:00 - AlphaGo
41:50 - DeepTraffic
54:35 - Conclusion

INFO:
Slides: http://bit.ly/2HcI7Ns
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: https://goo.gl/SLCb1y

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

LINKS:
Playlist: https://goo.gl/SLCb1y
Lecture 1: Deep Learning - https://youtu.be/-6INDaLcuJY
Lecture 2: Self-Driving Cars - https://youtu.be/_OCjqIgxwHw
Lecture 3: Deep Reinforcement Learning - https://youtu.be/MQ6pP65o7OM
Lecture 4: Computer Vision - https://youtu.be/CLOAswsxudo
Lecture 5: Deep Learning for Human Sensing - https://youtu.be/Z2GfE8pLyxc

Guest talk: Sacha Arnoud, Waymo - https://youtu.be/LSX3qdy0dFg
Guest talk: Emilio Frazolli, nuTonomy - https://youtu.be/dWSbItd0HEA
Guest talk: Sterling Anderson, Aurora - https://youtu.be/HKBhP9JISF0

2017:
Guest talk: Sertac Karaman, MIT - https://youtu.be/0fLSf3NO0-s
Guest talk: Chris Gerdes, Stanford - https://youtu.be/LDprUza7yT4

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:09
today we will talk about deep

00:00:01 --> 00:00:12
reinforcement learning the question we

00:00:08 --> 00:00:16
would like to explore it's to which

00:00:11 --> 00:00:20
degree we can teach systems to act to

00:00:15 --> 00:00:23
perceive and act in this world from data

00:00:19 --> 00:00:26
so let's take a step back and think of

00:00:22 --> 00:00:28
what is the full range of tasks then

00:00:25 --> 00:00:31
artificial intelligence system needs to

00:00:27 --> 00:00:35
accomplish here's the stack from top to

00:00:30 --> 00:00:37
bottom top the input bottom output the

00:00:34 --> 00:00:41
nvironment at the top the world that

00:00:36 --> 00:00:44
he agent is operating in sensed by

00:00:40 --> 00:00:46
sensors taking in the world outside and

00:00:43 --> 00:00:51
converting it to raw data interpretable

00:00:45 --> 00:00:55
by machines sensor data and from that

00:00:50 --> 00:00:59
raw sensor data you extract features you

00:00:54 --> 00:01:02
extract structure from that data such

00:00:58 --> 00:01:05
that you can input it make sense of it

00:01:01 --> 00:01:11
discriminate separate understand the

00:01:04 --> 00:01:13
data and as we discussed you form higher

00:01:10 --> 00:01:16
and higher order representations a

00:01:12 --> 00:01:18
hierarchy of representations based on

00:01:15 --> 00:01:24
which the machine learning techniques

00:01:17 --> 00:01:27
can then be applied once the machine

00:01:23 --> 00:01:29
learning techniques the understanding as

00:01:26 --> 00:01:31
I mentioned converts the data into

00:01:28 --> 00:01:33
features into higher order

00:01:30 --> 00:01:36
epresentations and into simple

00:01:32 --> 00:01:37
actionable useful information we

00:01:35 --> 00:01:39
aggregate that information into

00:01:36 --> 00:01:41
knowledge we take the pieces of

00:01:38 --> 00:01:43
knowledge extracted from the data

00:01:40 --> 00:01:49
through the machine learning techniques

00:01:42 --> 00:01:52
and to build a taxonomy a library of

00:01:48 --> 00:01:58
knowledge and with that knowledge we

00:01:51 --> 00:02:02
reason an aging estas to reason to

00:01:57 --> 00:02:05
aggregate to connect pieces of data it's

00:02:01 --> 00:02:07
een in the recent past or the distant

00:02:04 --> 00:02:10
past to make sense of the world that's

00:02:06 --> 00:02:12
operating in and finally to make a plan

00:02:09 --> 00:02:14
of how to act in that world based on its

00:02:11 --> 00:02:18
objectives based on what it wants to

00:02:13 --> 00:02:20
accomplished as I mentioned a simple but

00:02:17 --> 00:02:23
commonly accepted definition of

00:02:19 --> 00:02:26
intelligence is a system that's able to

00:02:22 --> 00:02:28
accomplish complex goals so system

00:02:25 --> 00:02:30
that's operating in the environment in

00:02:27 --> 00:02:33
this world must have a goal must have an

00:02:29 --> 00:02:35
objective function a reward function and

00:02:32 --> 00:02:38
based on that it forms a plan and takes

00:02:34 --> 00:02:40
action and because there operates in

00:02:37 --> 00:02:44
many cases in the physical world

00:02:39 --> 00:02:46
it must have tools effectors with which

00:02:43 --> 00:02:48
it applies the actions to change

00:02:45 --> 00:02:51
something about the world that's the

00:02:47 --> 00:02:55
full stack of an artificial intelligence

00:02:50 --> 00:02:59
system that acts in the world and the

00:02:54 --> 00:03:03
question is what kind of task can such a

00:02:58 --> 00:03:05
system take on what kind of task can an

00:03:02 --> 00:03:09
artificial intelligence system learn as

00:03:04 --> 00:03:12
we understand AI today we will talk

00:03:08 --> 00:03:14
about the advancement of deeper

00:03:11 --> 00:03:16
enforcement learning approaches and some

00:03:13 --> 00:03:19
of the fascinating ways it's able to

00:03:15 --> 00:03:22
take much of the stack and treat it as

00:03:18 --> 00:03:25
an end-to-end learning problem but we

00:03:21 --> 00:03:27
look at games we look at simple

00:03:24 --> 00:03:29
formalized worlds while it's still

00:03:26 --> 00:03:33
impressive beautiful and unprecedented

00:03:28 --> 00:03:37
accomplishments it's nevertheless formal

00:03:32 --> 00:03:41
tasks can we then move beyond games and

00:03:36 --> 00:03:46
into expert tasks of medical diagnosis

00:03:40 --> 00:03:50
of design and into natural language and

00:03:45 --> 00:03:58
finally the human level tasks of emotion

00:03:49 --> 00:04:00
imagination consciousness let's once

00:03:57 --> 00:04:04
again review the stack in practicality

00:03:59 --> 00:04:08
in the tools we have the input for

00:04:03 --> 00:04:11
obots operating in the world from cars

00:04:07 --> 00:04:15
to humanoid to drones as light our

00:04:10 --> 00:04:18
camera radar GPS stereo cameras audio

00:04:14 --> 00:04:20
microphone networking for communication

00:04:17 --> 00:04:24
and the various ways to measure

00:04:19 --> 00:04:28
kinematics with IMU

00:04:23 --> 00:04:30
the raw sensory data is then processed

00:04:27 --> 00:04:32
features of form to representations are

00:04:29 --> 00:04:34
formed and multiple higher and higher

00:04:31 --> 00:04:36
order representations

00:04:33 --> 00:04:39
that's what deep learning gets us before

00:04:35 --> 00:04:42
neural networks before the advent of

00:04:38 --> 00:04:44
before the recent successes of neural

00:04:41 --> 00:04:46
networks to go deeper and therefore be

00:04:43 --> 00:04:49
able to form high order representations

00:04:45 --> 00:04:52
of the data that was done by experts by

00:04:48 --> 00:04:54
human experts today networks are able to

00:04:51 --> 00:04:56
do that that's the representation piece

00:04:53 --> 00:04:59
and on top of the representation piece

00:04:55 --> 00:05:01
the final layers these networks are able

00:04:58 --> 00:05:05
to accomplish the supervised learning

00:05:00 --> 00:05:09
tasks the generative tasks and the

00:05:04 --> 00:05:11
unsupervised clustering tasks through

00:05:08 --> 00:05:14
machine learning that's what we talked

00:05:10 --> 00:05:17
about a little in lecture one and we'll

00:05:13 --> 00:05:21
continue tomorrow and Wednesday

00:05:16 --> 00:05:22
that's supervised learning and you can

00:05:20 --> 00:05:26
think about the output of those networks

00:05:21 --> 00:05:28
as simple clean useful valuable

00:05:25 --> 00:05:32
information that's the knowledge and

00:05:27 --> 00:05:35
that knowledge can be in the form of

00:05:31 --> 00:05:38
single numbers it could be regression

00:05:34 --> 00:05:40
continuous variables it could be a

00:05:37 --> 00:05:46
sequence of numbers it can be images

00:05:39 --> 00:05:48
audio sentences text speech once that

00:05:45 --> 00:05:52
knowledge is extracted and aggregated

00:05:47 --> 00:05:55
how do we connect it in multi resolution

00:05:51 --> 00:05:59
always form hierarchies of ideas connect

00:05:54 --> 00:06:02
ideas the trivial silly example is

00:05:58 --> 00:06:05
connecting images activity recognition

00:06:01 --> 00:06:08
and audio for example if it looks like a

00:06:04 --> 00:06:11
duck quacks like a duck and swims like a

00:06:07 --> 00:06:12
duck we do not currently have approaches

00:06:10 --> 00:06:15
that effectively integrate this

00:06:11 --> 00:06:18
information to produce a higher

00:06:14 --> 00:06:23
confidence estimate that is in fact the

00:06:17 --> 00:06:26
duck and the planning piece the task of

00:06:22 --> 00:06:28
taking the sensory information fusing

00:06:25 --> 00:06:31
the sensory information and making

00:06:27 --> 00:06:34
action control and longer-term plans

00:06:30 --> 00:06:36
based on that information as we'll

00:06:33 --> 00:06:39
discuss today

00:06:35 --> 00:06:40
are more and more amenable to the

00:06:38 --> 00:06:43
learning approach to the deep learning

00:06:39 --> 00:06:45
approach but to date have been the most

00:06:42 --> 00:06:47
successful and non learning optimization

00:06:44 --> 00:06:49
based approaches like with the several

00:06:46 --> 00:06:52
of the guest speakers we have including

00:06:48 --> 00:06:57
the creator of this robot Atlas in

00:06:51 --> 00:06:59
Boston Dynamics so the question how much

00:06:56 --> 00:07:02
of the stack can be learned and to end

00:06:58 --> 00:07:04
from the input to the output we know we

00:07:01 --> 00:07:06
can learn the representation and the

00:07:03 --> 00:07:09
knowledge from the representation and to

00:07:05 --> 00:07:14
knowledge even with the kernel methods

00:07:08 --> 00:07:18
of SVM and certainly with with neural

00:07:13 --> 00:07:22
networks mapping from representation to

00:07:17 --> 00:07:23
information has been where the primary

00:07:21 --> 00:07:27
success of machine learning over the

00:07:22 --> 00:07:30
past three decades has been mapping from

00:07:26 --> 00:07:32
raw sensory data to knowledge that's

00:07:29 --> 00:07:35
where the success the automated

00:07:31 --> 00:07:38
representation learning of deep learning

00:07:34 --> 00:07:41
has been a success going straight from

00:07:37 --> 00:07:44
raw data to knowledge the open question

00:07:40 --> 00:07:47
for us today and beyond is if we can

00:07:43 --> 00:07:49
expand the red box there of what can be

00:07:46 --> 00:07:52
learned and to end from sensory data to

00:07:48 --> 00:07:54
reasoning so aggregating forming higher

00:07:51 --> 00:07:58
epresentations of the extracted

00:07:53 --> 00:08:00
knowledge and forming plans and acting

00:07:57 --> 00:08:03
in this world from the raw sensory data

00:07:59 --> 00:08:06
we will show the incredible fact that

00:08:02 --> 00:08:08
we're able to do CERN exactly what's

00:08:05 --> 00:08:10
hown here and to end with deeper

00:08:07 --> 00:08:13
enforcement learning on trivial tasks in

00:08:09 --> 00:08:15
a generalizable way the question is

00:08:12 --> 00:08:18
whether that can then move on to

00:08:15 --> 00:08:24
real-world tasks of autonomous vehicles

00:08:17 --> 00:08:27
of humanoid robotics and so on that's

00:08:23 --> 00:08:29
the open question so today let's talk

00:08:26 --> 00:08:32
about reinforcement learning there's

00:08:28 --> 00:08:32
three types of machine learning

00:08:31 --> 00:08:38
supervised

00:08:34 --> 00:08:41
unsupervised are the categories at the

00:08:37 --> 00:08:43
xtremes in relative to the amount of

00:08:40 --> 00:08:45
human and human input that's required

00:08:42 --> 00:08:48
for supervised learning every piece of

00:08:44 --> 00:08:51
data that's used for teaching these

00:08:47 --> 00:08:53
systems is first labeled by human beings

00:08:50 --> 00:08:57
and unsupervised learning on the right

00:08:52 --> 00:09:02
is no data is labeled by human beings in

00:08:56 --> 00:09:05
between is some sparse input from humans

00:09:01 --> 00:09:08
emi-supervised learning is when only

00:09:04 --> 00:09:10
part of the data is provided by humans

00:09:07 --> 00:09:12
ground truth and the rest must be

00:09:09 --> 00:09:15
inferred generalized by the system and

00:09:11 --> 00:09:18
that's what reinforcement learning Falls

00:09:14 --> 00:09:21
reinforcement learning has shown there

00:09:17 --> 00:09:25
with the cats as I said every successful

00:09:20 --> 00:09:29
presentation must include cats they're

00:09:24 --> 00:09:31
supposed to be Pavlov's cats and ringing

00:09:28 --> 00:09:33
a bell and every time they ring a bell

00:09:30 --> 00:09:37
they're given food and they learn this

00:09:32 --> 00:09:42
process the goal of reinforcement

00:09:36 --> 00:09:45
learning is to learn from sparse reward

00:09:41 --> 00:09:48
ata from learn from sparse supervised

00:09:44 --> 00:09:50
ata and take advantage of the fact that

00:09:47 --> 00:09:52
in simulation or in the real world there

00:09:49 --> 00:09:56
is a temporal consistency to the world

00:09:51 --> 00:09:57
there is a temporal dynamics that

00:09:55 --> 00:10:00
follows from state to state the state

00:09:56 --> 00:10:03
through time and so you can propagate

00:09:59 --> 00:10:05
information even if the information that

00:10:02 --> 00:10:07
you're received about the the

00:10:04 --> 00:10:09
supervision the ground truth is sparse

00:10:06 --> 00:10:12
you can follow that information back

00:10:08 --> 00:10:14
through time to infer something about

00:10:11 --> 00:10:17
he reality of what happened before then

00:10:13 --> 00:10:19
even if your reward signals were weak so

00:10:16 --> 00:10:23
it's using the fact that the physical

00:10:18 --> 00:10:26
world evolves through time and some some

00:10:22 --> 00:10:30
sort of predictable way to take sparse

00:10:25 --> 00:10:32
information and generalize it over the

00:10:29 --> 00:10:34
ntirety of the experience as being

00:10:31 --> 00:10:37
learned so we apply this the two

00:10:33 --> 00:10:41
problems today we'll talk about deep

00:10:36 --> 00:10:43
traffic as a methodology deep

00:10:40 --> 00:10:47
reinforcement learning so deep traffic

00:10:42 --> 00:10:50
is a competition that we ran last year

00:10:46 --> 00:10:52
and expanded significantly this year and

00:10:49 --> 00:10:55
I'll talk about some of the details and

00:10:51 --> 00:10:57
how the folks in this room can on your

00:10:54 --> 00:11:00
smart phone today or if you have a

00:10:56 --> 00:11:02
laptop training agent while I'm talking

00:10:59 --> 00:11:05
training a neural network in the browser

00:11:01 --> 00:11:08
some of the things we've added our we've

00:11:04 --> 00:11:10
added the capability we've now turned it

00:11:07 --> 00:11:12
into a multi agent deeper enforcement

00:11:09 --> 00:11:15
learning problem where you can control

00:11:11 --> 00:11:19
up to ten cars within your network

00:11:14 --> 00:11:22
perhaps less significant but pretty cool

00:11:18 --> 00:11:25
is the ability to customize the way the

00:11:21 --> 00:11:28
agent looks so you can upload and people

00:11:24 --> 00:11:30
have to an absurd degree have already

00:11:27 --> 00:11:32
begun doing so uploading different

00:11:29 --> 00:11:35
images instead of the car that's shown

00:11:31 --> 00:11:39
there as long as it maintains the

00:11:34 --> 00:11:42
dimensions shown here is a SpaceX rocket

00:11:38 --> 00:11:45
he competition is hosted on the website

00:11:41 --> 00:11:48
self-driving cars that MIT ID you slash

00:11:44 --> 00:11:52
deep traffic will return to this later

00:11:47 --> 00:11:55
the code is on github with some more

00:11:51 --> 00:11:57
information a starter code and a paper

00:11:54 --> 00:12:01
describing some of the fundamental

00:11:56 --> 00:12:04
insights that will help you win at this

00:12:00 --> 00:12:07
competition is an archive

00:12:03 --> 00:12:11
so from supervised learning in lecture

00:12:06 --> 00:12:16
one to today supervised learning we can

00:12:10 --> 00:12:18
think of as memorization of ground truth

00:12:15 --> 00:12:21
data in order to form representations

00:12:17 --> 00:12:24
that generalizes from that ground truth

00:12:20 --> 00:12:27
reinforcement learning is we can think

00:12:23 --> 00:12:31
of as a way to brute force propagate

00:12:26 --> 00:12:38
that information the sparse information

00:12:30 --> 00:12:42
through time to to assign quality reward

00:12:37 --> 00:12:46
to state that does not directly have a

00:12:41 --> 00:12:48
reward to make sense of this world when

00:12:45 --> 00:12:51
the rewards are sparse but are connected

00:12:47 --> 00:12:56
through time you can think of that as

00:12:50 --> 00:13:00
reasoning so the

00:12:55 --> 00:13:03
through time is modeled in most

00:12:59 --> 00:13:06
reinforcement learning approaches very

00:13:02 --> 00:13:08
simply that there's an agent taking an

00:13:05 --> 00:13:11
action in a state and receiving a little

00:13:07 --> 00:13:14
reward and the agent operating in an

00:13:10 --> 00:13:16
environment execute an action receives

00:13:13 --> 00:13:18
an observed state and new state and

00:13:15 --> 00:13:23
receives their reward this process

00:13:17 --> 00:13:26
continues over and over and some

00:13:22 --> 00:13:28
xamples we can think of any of the

00:13:25 --> 00:13:32
video games some of which we'll talk

00:13:27 --> 00:13:37
about today like Atari breakout as the

00:13:31 --> 00:13:41
nvironment the agent is the paddle each

00:13:36 --> 00:13:44
action that the agent takes has an

00:13:40 --> 00:13:46
influence on the evolution of the

00:13:43 --> 00:13:49
nvironment and the success is measured

00:13:45 --> 00:13:52
by some reward mechanism in this case

00:13:48 --> 00:13:56
points are given by the game and every

00:13:51 --> 00:13:59
game has a different point scheme that

00:13:55 --> 00:14:02
must be converted normalized into a way

00:13:58 --> 00:14:04
that's interpreted by the system and the

00:14:01 --> 00:14:10
goal is to maximize those points

00:14:03 --> 00:14:12
maximize the reward the continuous

00:14:09 --> 00:14:13
problem of card pole by balancing the

00:14:11 --> 00:14:16
goal is to balance the pole on top of a

00:14:12 --> 00:14:19
moving cart the state is the angle the

00:14:15 --> 00:14:22
angular speed the position of horizontal

00:14:18 --> 00:14:24
velocity the actions are the horizontal

00:14:21 --> 00:14:27
force applied to the cart and the reward

00:14:23 --> 00:14:29
is one at each time step if the pole is

00:14:26 --> 00:14:32
till upright

00:14:28 --> 00:14:34
all the

00:14:31 --> 00:14:41
first-person shooters the video games is

00:14:33 --> 00:14:44
now Starcraft the strategy games in case

00:14:40 --> 00:14:46
of first-person shooter and doom what is

00:14:43 --> 00:14:48
the goal the environment is the game the

00:14:45 --> 00:14:51
goal is to eliminate all opponents the

00:14:47 --> 00:14:54
state is the raw game pixels coming in

00:14:50 --> 00:14:58
the actions is moving up down left right

00:14:53 --> 00:15:01
and so on and the reward is positive

00:14:57 --> 00:15:05
when eliminating an opponent and

00:15:00 --> 00:15:05
negative when the agent is eliminated

00:15:05 --> 00:15:11
industrial robotics been packin with a

00:15:09 --> 00:15:13
robotic arm the goal is to pick up a

00:15:10 --> 00:15:16
device from a box and put it into a

00:15:12 --> 00:15:18
container the state is the raw pixels of

00:15:15 --> 00:15:22
the real world that the robot observes

00:15:17 --> 00:15:23
the actions are the possible actions of

00:15:21 --> 00:15:24
the robot the different degrees of

00:15:22 --> 00:15:26
reedom are moving through those degrees

00:15:23 --> 00:15:29
moving the different actuators to

00:15:25 --> 00:15:31
realize of the position of the arm and

00:15:28 --> 00:15:33
the reward is positive when placing a

00:15:30 --> 00:15:37
device successfully and negative

00:15:32 --> 00:15:40
otherwise everything could be modeled in

00:15:36 --> 00:15:44
this way Markov decision process there's

00:15:39 --> 00:15:47
a state as zero action a zero and reward

00:15:43 --> 00:15:49
received a new state is achieved again

00:15:46 --> 00:15:53
action rewards state action rewards

00:15:48 --> 00:15:56
tate until a terminal state is reached

00:15:52 --> 00:16:00
and the major components of

00:15:55 --> 00:16:02
reinforcement learning is a policy some

00:15:59 --> 00:16:03
kind of plan of what to do in every

00:16:01 --> 00:16:09
single state what kind of action to

00:16:02 --> 00:16:12
perform a value function a some kind of

00:16:08 --> 00:16:14
sense of what is a good state to be in

00:16:11 --> 00:16:20
of what is a good action to take in a

00:16:13 --> 00:16:22
state and sometimes a model that the

00:16:19 --> 00:16:25
agent represents the environment with

00:16:21 --> 00:16:27
some kind of sense of the environment

00:16:24 --> 00:16:29
its operating in the dynamics of that

00:16:26 --> 00:16:32
environment that's useful for making

00:16:28 --> 00:16:35
decisions about actions let's take a

00:16:31 --> 00:16:35
trivial example

00:16:35 --> 00:16:42
a grid world of three by four twelve

00:16:38 --> 00:16:45
squares we start at the bottom left and

00:16:41 --> 00:16:49
their task with walking about this world

00:16:44 --> 00:16:52
to maximize reward they're awarded at

00:16:48 --> 00:16:54
he top right is a plus 1 and a 1 square

00:16:51 --> 00:16:57
below that is a negative 1 and every

00:16:53 --> 00:17:01
step you take is a punishment or is a

00:16:56 --> 00:17:05
negative reward of 0.04 so what is the

00:17:00 --> 00:17:08
optimal policy in this world now when

00:17:04 --> 00:17:12
everything is deterministic perhaps this

00:17:07 --> 00:17:15
the policy when you start the bottom

00:17:11 --> 00:17:16
left well because every step hurts every

00:17:14 --> 00:17:18
step has a negative reward

00:17:15 --> 00:17:21
then you want to take the shortest path

00:17:17 --> 00:17:23
to the maximum square with a maximum

00:17:20 --> 00:17:28
reward when the state space is

00:17:22 --> 00:17:32
non-deterministic as presented before

00:17:27 --> 00:17:34
with a probability of 0.8 when you

00:17:31 --> 00:17:38
choose to go up you go up but with

00:17:33 --> 00:17:42
probability 0.1 you go left and point 1

00:17:37 --> 00:17:47
you go right unfair again much like life

00:17:41 --> 00:17:49
that would be the optimal policy what is

00:17:46 --> 00:17:51
the Keith observation here that every

00:17:48 --> 00:17:55
single state in the space must have a

00:17:50 --> 00:17:58
plan because you can't because then a

00:17:54 --> 00:18:01
non-deterministic aspect of the control

00:17:57 --> 00:18:02
you can't control where you're going to

00:18:00 --> 00:18:05
end up so you must have a plan for every

00:18:01 --> 00:18:07
place that's the policy having an action

00:18:04 --> 00:18:10
an optimal action to take in every

00:18:06 --> 00:18:12
single state now suppose we change the

00:18:09 --> 00:18:15
reward structure and for every step we

00:18:11 --> 00:18:18
take there's a negative reward is a

00:18:14 --> 00:18:19
negative 2 so it really hurts there's a

00:18:17 --> 00:18:23
high punishment for every single step we

00:18:19 --> 00:18:25
take so no matter what we always take

00:18:22 --> 00:18:28
the shortest path the optimal policy is

00:18:24 --> 00:18:31
to take the shortest path to the to the

00:18:27 --> 00:18:36
only spot on the board that doesn't

00:18:30 --> 00:18:40
result in punishment if we decrease the

00:18:35 --> 00:18:44
reward of each step to negative 0.1 the

00:18:39 --> 00:18:47
policy changes whether

00:18:43 --> 00:18:50
some extra degree of wandering

00:18:46 --> 00:18:53
encouraged and as we go further and

00:18:50 --> 00:18:57
further in lowering the punishment as

00:18:52 --> 00:19:01
before to negative 0.04 more wandering

00:18:56 --> 00:19:07
and more wandering is allowed and when

00:19:00 --> 00:19:13
we finally turn the reward into positive

00:19:06 --> 00:19:16
so every step it every step is increases

00:19:12 --> 00:19:19
the reward then there's a significant

00:19:15 --> 00:19:22
incentive to to stay on the board

00:19:18 --> 00:19:22
without ever reaching the destination

00:19:21 --> 00:19:27
kind of like college for a lot of people

00:19:27 --> 00:19:35
so the value function the way we think

00:19:30 --> 00:19:39
about the value of a state or the value

00:19:34 --> 00:19:42
of anything in the environment is the

00:19:38 --> 00:19:45
reward were likely to receive in the

00:19:41 --> 00:19:48
future and the way we see the reward

00:19:44 --> 00:19:52
were likely to receive as we discount

00:19:47 --> 00:19:53
he future award because we can't always

00:19:51 --> 00:19:57
count on it

00:19:52 --> 00:20:00
here Gama further and further out into

00:19:56 --> 00:20:03
the future more and more discounts

00:19:59 --> 00:20:06
decreases the reward the importance of

00:20:02 --> 00:20:08
the reward received and the good

00:20:05 --> 00:20:10
strategy is taking the sum of these

00:20:07 --> 00:20:12
rewards and maximizing it maximizing the

00:20:09 --> 00:20:14
scoundrel ward

00:20:11 --> 00:20:20
that's what reinforcement learning hopes

00:20:13 --> 00:20:24
to achieve and with cue learning we use

00:20:19 --> 00:20:29
any policy to estimate the value of

00:20:23 --> 00:20:33
taking an action in a state so off

00:20:28 --> 00:20:35
policy forget policy we move about the

00:20:32 --> 00:20:38
world and use the bellman equation here

00:20:34 --> 00:20:40
on the bottom to continuously update our

00:20:37 --> 00:20:46
estimate of how good a certain action is

00:20:39 --> 00:20:47
in a certain state so we don't need this

00:20:45 --> 00:20:49
allows us to operate in a much

00:20:46 --> 00:20:51
larger state space in a much larger

00:20:48 --> 00:20:53
action space we move about this world

00:20:50 --> 00:20:56
through simulation or in the real world

00:20:52 --> 00:20:58
taking actions and updating our estimate

00:20:55 --> 00:21:02
of how good certain actions are over

00:20:57 --> 00:21:05
I'm the new state at the left is the is

00:21:01 --> 00:21:07
the updated value the old state is the

00:21:04 --> 00:21:09
starting value for the equation and we

00:21:06 --> 00:21:14
update that old state estimation with

00:21:08 --> 00:21:19
e sum of the reward received by taking

00:21:13 --> 00:21:23
action s tax action a and state us and

00:21:18 --> 00:21:26
the maximum reward that's possible to be

00:21:22 --> 00:21:31
received in the following states

00:21:25 --> 00:21:33
discounted that update is decreased with

00:21:30 --> 00:21:36
a learning rate the higher the learning

00:21:32 --> 00:21:39
rate the more value we the the faster

00:21:35 --> 00:21:41
will learn the more value we assigned to

00:21:38 --> 00:21:44
new information that's simple that's it

00:21:41 --> 00:21:48
hat's Q learning the simple update rule

00:21:43 --> 00:21:53
allows us to to explore the world and as

00:21:47 --> 00:21:54
we explore get more and more information

00:21:52 --> 00:21:57
about what's good to do in this world

00:21:53 --> 00:21:59
and there's always a balance in the

00:21:56 --> 00:22:00
various problem spaces we'll discuss

00:21:58 --> 00:22:06
there's always a balance between

00:21:59 --> 00:22:07
exploration and exploitation as you form

00:22:05 --> 00:22:09
a better and better estimate of the Q

00:22:06 --> 00:22:12
function of what actions are good to

00:22:08 --> 00:22:15
take you start to get a sense of what is

00:22:11 --> 00:22:16
the best action to take but it's not a

00:22:14 --> 00:22:18
perfect sense it's still an

00:22:15 --> 00:22:20
approximation and so there's value of

00:22:17 --> 00:22:22
exploration but the better and better

00:22:19 --> 00:22:26
your estimate becomes the less and less

00:22:21 --> 00:22:27
exploration has a benefit so usually we

00:22:25 --> 00:22:30
want to explore a lot in the beginning

00:22:26 --> 00:22:32
and less and less so towards the end and

00:22:29 --> 00:22:35
when we finally release the system out

00:22:31 --> 00:22:39
into the world and wish it to operate

00:22:34 --> 00:22:41
its best then we have it operate as a

00:22:38 --> 00:22:43
greedy system always taking the optimal

00:22:40 --> 00:22:47
action according to the q2 key value

00:22:42 --> 00:22:50
function and everything I'm talking

00:22:46 --> 00:22:54
about now is permit rised and our

00:22:49 --> 00:22:57
parameters that are very important for

00:22:53 --> 00:23:00
winning the deep traffic competition

00:22:56 --> 00:23:05
which is using this very algorithm with

00:22:59 --> 00:23:08
a neural network at its core so for sin

00:23:04 --> 00:23:11
table representation of a cue function

00:23:07 --> 00:23:15
where the y-axis is state four states s

00:23:10 --> 00:23:19
one two three four and the x-axis is

00:23:14 --> 00:23:21
actions a one two three four we can

00:23:18 --> 00:23:24
think of this table as randomly

00:23:20 --> 00:23:26
initiated or initiated initialized in

00:23:23 --> 00:23:29
any kind of way that's not

00:23:25 --> 00:23:30
representative of actual reality and as

00:23:28 --> 00:23:32
we move about this world and we take

00:23:29 --> 00:23:35
actions we update this table with the

00:23:31 --> 00:23:38
bellman equation shown up top and here

00:23:34 --> 00:23:41
slides now are online you can see a

00:23:37 --> 00:23:43
simple pseudocode algorithm of how to

00:23:40 --> 00:23:47
update it how to run this bellman

00:23:42 --> 00:23:49
equation and over time the approximation

00:23:46 --> 00:23:52
becomes the optimal cue table

00:23:49 --> 00:23:56
the problem is when that cue table it

00:23:51 --> 00:23:59
becomes exponential in size when we take

00:23:55 --> 00:24:02
in raw sensory information as we do with

00:23:58 --> 00:24:05
cameras with deep crash or with deep

00:24:01 --> 00:24:08
traffic it's taking the full grid space

00:24:04 --> 00:24:11
and taking that information the raw the

00:24:07 --> 00:24:14
raw grid pixels of deep traffic and when

00:24:10 --> 00:24:18
you take the arcade games here they're

00:24:13 --> 00:24:20
taking the raw pixels of the game or

00:24:17 --> 00:24:24
when we take go the game of go when it's

00:24:19 --> 00:24:28
taking the units the the board the raw

00:24:23 --> 00:24:32
state of the board as the input the

00:24:27 --> 00:24:36
potential state space the number of

00:24:31 --> 00:24:39
possible combinations of what states it

00:24:35 --> 00:24:41
possible is extremely large larger than

00:24:38 --> 00:24:44
we can certainly hold the memory and

00:24:40 --> 00:24:46
larger that we can ever be able to

00:24:43 --> 00:24:49
accurately approximate through the

00:24:45 --> 00:24:52
bellman equation over time through

00:24:48 --> 00:24:55
simulation through the simple update of

00:24:52 --> 00:24:58
the bellman equation so this is where

00:24:54 --> 00:25:00
deep reinforcement learning comes in

00:24:57 --> 00:25:02
eural networks are really good

00:24:59 --> 00:25:05
approximate errs they're really good at

00:25:01 --> 00:25:08
exactly this task of learning this kind

00:25:04 --> 00:25:08
of cue table

00:25:09 --> 00:25:14
so as we started with supervised

00:25:11 --> 00:25:16
learning or neural networks helped us

00:25:13 --> 00:25:18
memorize patterns using supervised

00:25:15 --> 00:25:20
ground true data and we'll move to

00:25:17 --> 00:25:26
reinforcement learning that hopes to

00:25:19 --> 00:25:29
propagate outcomes to knowledge deep

00:25:25 --> 00:25:31
learning allows us to do so on much

00:25:28 --> 00:25:35
larger state spaces are much larger

00:25:30 --> 00:25:39
action spaces which means it's

00:25:34 --> 00:25:44
generalizable it's much more capable to

00:25:38 --> 00:25:47
deal with the raw stuff of sensory data

00:25:43 --> 00:25:48
which means it's much more capable to

00:25:46 --> 00:25:56
deal with the broad variation of real

00:25:47 --> 00:25:59
world applications and it does so

00:25:55 --> 00:26:02
because it's able to learn the

00:25:58 --> 00:26:08
representations as we discussed on

00:26:01 --> 00:26:10
Monday the understanding comes from

00:26:07 --> 00:26:13
converting the raw sensory information

00:26:09 --> 00:26:16
into into simple useful information

00:26:12 --> 00:26:18
based on which the action in this

00:26:15 --> 00:26:20
particular state can be taken in the

00:26:17 --> 00:26:23
same exact way so instead of the cue

00:26:19 --> 00:26:25
table instead of this cue function we

00:26:22 --> 00:26:27
plug in a neural network where the input

00:26:24 --> 00:26:31
is the state space no matter how complex

00:26:26 --> 00:26:36
and the output is a value for each of

00:26:30 --> 00:26:39
the actions that you could take input is

00:26:35 --> 00:26:44
the state output is the value of the

00:26:38 --> 00:26:48
function it's simple this is deep Q

00:26:43 --> 00:26:50
Network DQ one at the core of the

00:26:47 --> 00:26:52
success of deep mind a lot of the cool

00:26:49 --> 00:26:55
stuff you see about video games D

00:26:51 --> 00:26:58
queuing or variants of DQ and our play

00:26:54 --> 00:27:04
this is water first with a nature paper

00:26:57 --> 00:27:06
a deep mind the success came of playing

00:27:03 --> 00:27:09
the different games including Atari

00:27:05 --> 00:27:09
games

00:27:10 --> 00:27:19
how are these things trained very

00:27:12 --> 00:27:21
similar to supervised learning the

00:27:18 --> 00:27:26
bellman equation up top

00:27:20 --> 00:27:33
it takes the reward and the discounted

00:27:25 --> 00:27:35
expected reward from future states the

00:27:32 --> 00:27:37
loss function here for neural network

00:27:34 --> 00:27:41
and you'll now work learners with a loss

00:27:36 --> 00:27:44
function it takes the reward received at

00:27:40 --> 00:27:46
he current state does a forward pass

00:27:43 --> 00:27:50
through a neural network to estimate the

00:27:45 --> 00:27:53
value of the future state of the best

00:27:49 --> 00:27:58
action to take in the future state and

00:27:52 --> 00:28:00
then subtract that from the forward pass

00:27:57 --> 00:28:03
through the network for the current

00:27:59 --> 00:28:06
state in action so you take the

00:28:02 --> 00:28:07
difference between what your a Q

00:28:05 --> 00:28:10
estimator

00:28:06 --> 00:28:15
then you'll network believes the value

00:28:09 --> 00:28:18
of the current state is and what it more

00:28:14 --> 00:28:20
likely is to be based on the value of

00:28:17 --> 00:28:27
the future states that are reachable

00:28:19 --> 00:28:32
based on the actions you can take here's

00:28:26 --> 00:28:34
the algorithm input is the state output

00:28:31 --> 00:28:36
is the Q value for each action or in

00:28:33 --> 00:28:39
this diagram input is the state in

00:28:35 --> 00:28:42
action and the output is the Q value

00:28:38 --> 00:28:48
it's very similar architectures so given

00:28:41 --> 00:28:51
a transition of s a are s prime s

00:28:47 --> 00:28:57
current state taking an action receiving

00:28:50 --> 00:29:01
reward and achieving US prime state the

00:28:56 --> 00:29:02
update is to a feed-forward pass

00:29:00 --> 00:29:05
through the network for the current

00:29:01 --> 00:29:08
state do a feed-forward pass for each of

00:29:04 --> 00:29:10
the possible actions taken in the next

00:29:07 --> 00:29:14
state and that's how we compute the two

00:29:09 --> 00:29:18
parts of the loss function and update

00:29:13 --> 00:29:20
the weights using back propagation again

00:29:17 --> 00:29:23
loss function back propagation is how

00:29:19 --> 00:29:26
the network is trained this has actually

00:29:22 --> 00:29:31
been around for much longer than the

00:29:25 --> 00:29:36
deep mind a few tricks made it made it

00:29:30 --> 00:29:41
really work experience replays the

00:29:35 --> 00:29:42
biggest one so as the games are played

00:29:40 --> 00:29:46
through simulation or if it's a physical

00:29:41 --> 00:29:50
system as it acts in the world it's

00:29:45 --> 00:29:53
actually collecting the observations

00:29:49 --> 00:29:55
into a library of experiences and that

00:29:52 --> 00:29:58
raining is performed by randomly

00:29:54 --> 00:30:01
sampling the library in the past by

00:29:57 --> 00:30:04
randomly sampling the previous

00:30:00 --> 00:30:06
experiences and batches so you're not

00:30:03 --> 00:30:08
always training on the natural

00:30:06 --> 00:30:10
continuous evolution of the system

00:30:07 --> 00:30:13
you're training on randomly picked

00:30:09 --> 00:30:16
batches of those experiences that's like

00:30:12 --> 00:30:19
huge it's a it's a seems like a subtle

00:30:15 --> 00:30:24
trick but it's a really important one so

00:30:18 --> 00:30:28
the system doesn't over fit a particular

00:30:23 --> 00:30:34
evolution of this of the game of the

00:30:27 --> 00:30:36
simulation another important again

00:30:33 --> 00:30:38
subtle trick as in a lot of deep

00:30:35 --> 00:30:42
learning approaches the subtle tricks

00:30:37 --> 00:30:45
make all the difference is fixing the

00:30:41 --> 00:30:48
target network for the loss function if

00:30:44 --> 00:30:50
you notice you have to use the neural

00:30:47 --> 00:30:53
network thick the singly neural network

00:30:49 --> 00:30:58
the gqi network to estimate the value of

00:30:52 --> 00:31:04
the current state and action pair and

00:30:57 --> 00:31:07
next so using it multiple times and as

00:31:03 --> 00:31:09
you perform that operation you're

00:31:06 --> 00:31:11
updating the network which means the

00:31:08 --> 00:31:14
target function inside that loss

00:31:10 --> 00:31:16
function is always changing so you're

00:31:13 --> 00:31:18
the very nature your loss function is

00:31:15 --> 00:31:21
changing all the time as you're learning

00:31:17 --> 00:31:23
and that's a big problem for stability

00:31:20 --> 00:31:26
that can create big problems for the

00:31:22 --> 00:31:29
learning process so this little trick is

00:31:25 --> 00:31:34
to fix the network and only update it

00:31:28 --> 00:31:38
every safe thousand steps so as you

00:31:33 --> 00:31:40
train the network the the network that's

00:31:37 --> 00:31:44
used to compute the target function

00:31:39 --> 00:31:46
inside the loss function is fixed it

00:31:43 --> 00:31:49
produces a more stable computation on a

00:31:45 --> 00:31:52
loss function so the ground doesn't

00:31:48 --> 00:31:56
shift under you as you're trying to find

00:31:51 --> 00:31:58
a minimal for the loss function the loss

00:31:55 --> 00:32:02
function doesn't change in unpredictable

00:31:57 --> 00:32:06
difficult to understand ways and reward

00:32:01 --> 00:32:09
clipping which is always true with

00:32:05 --> 00:32:11
general systems that are operating it's

00:32:09 --> 00:32:15
eeking to operate in the generalized

00:32:10 --> 00:32:18
way is for very for these various games

00:32:14 --> 00:32:20
the points are different some some

00:32:17 --> 00:32:22
points are low some points are high some

00:32:19 --> 00:32:24
go positive and negative and they're all

00:32:21 --> 00:32:27
normalized to a point where the good

00:32:23 --> 00:32:30
points or the positive points are a 1

00:32:26 --> 00:32:33
and negative points are a negative 1

00:32:29 --> 00:32:36
that's reward clipping simplify the

00:32:32 --> 00:32:39
reward structure and because a lot of

00:32:35 --> 00:32:44
the games are 30 FPS or 60 FPS and the

00:32:38 --> 00:32:46
actions are not it's not valuable to

00:32:43 --> 00:32:48
take actions at such a high rate inside

00:32:45 --> 00:32:50
of these as particularly Atari games

00:32:47 --> 00:32:53
then you only take an action every four

00:32:49 --> 00:32:55
steps while still taking in the frames

00:32:52 --> 00:32:58
as part of the temporal window to make

00:32:54 --> 00:33:02
decisions tricks but hopefully gives you

00:32:57 --> 00:33:06
a sense of the kind of things necessary

00:33:01 --> 00:33:08
for both seminal papers like this one

00:33:05 --> 00:33:10
and for the more important

00:33:07 --> 00:33:12
accomplishment of winning deep traffic

00:33:09 --> 00:33:15
is that

00:33:11 --> 00:33:20
he tricks make all the difference here

00:33:14 --> 00:33:22
on the bottom is the circle is when the

00:33:19 --> 00:33:25
technique is used in the x1 it's not

00:33:21 --> 00:33:27
looking at replay and target takes

00:33:24 --> 00:33:29
target network and experience replay

00:33:26 --> 00:33:32
when both are used for the game of

00:33:28 --> 00:33:33
breakout River raid sea quests and Space

00:33:31 --> 00:33:35
Invaders

00:33:32 --> 00:33:39
the higher the number the better it is

00:33:34 --> 00:33:41
the more points achieved so when it

00:33:38 --> 00:33:43
gives you a sense that when replay and

00:33:40 --> 00:33:45
target both gives significant

00:33:42 --> 00:33:50
improvements in the performance of the

00:33:44 --> 00:33:55
system order of magnitude improvements

00:33:49 --> 00:34:00
two orders of magnitude for breakup and

00:33:54 --> 00:34:04
here is pseudocode of implementing dq1

00:33:59 --> 00:34:09
the learning the key thing to notice and

00:34:03 --> 00:34:12
you can look to the slides is the the

00:34:08 --> 00:34:15
loop the while loop of playing through

00:34:11 --> 00:34:18
the games and selecting the actions to

00:34:14 --> 00:34:23
play is not part of the training it's

00:34:17 --> 00:34:26
part of the saving the observations

00:34:22 --> 00:34:28
the state action reward next state

00:34:25 --> 00:34:31
observation is saving them into replay

00:34:27 --> 00:34:33
memory into that library and then you

00:34:30 --> 00:34:37
sample randomly from that replay memory

00:34:32 --> 00:34:41
to then train the network based on the

00:34:36 --> 00:34:44
loss function and with probability up up

00:34:40 --> 00:34:47
top with the probability epsilon select

00:34:43 --> 00:34:50
a random action that epsilon is the

00:34:46 --> 00:34:52
probability of exploration that

00:34:49 --> 00:34:56
decreases that's something you'll see in

00:34:51 --> 00:34:58
deep traffic as well is the rate at

00:34:55 --> 00:35:00
which that exploration decreases over

00:34:57 --> 00:35:03
time through the training process you

00:34:59 --> 00:35:06
want to explore a lot first and less and

00:35:02 --> 00:35:09
less over time so this algorithm is

00:35:05 --> 00:35:13
being able to accomplish in 2015 and

00:35:08 --> 00:35:19
since a lot of incredible things things

00:35:12 --> 00:35:23
that made the AI world think that we

00:35:18 --> 00:35:27
re onto something that

00:35:22 --> 00:35:29
general AI is within reach for the first

00:35:26 --> 00:35:32
ime that raw sensor information was

00:35:28 --> 00:35:34
used to create a system that acts and

00:35:31 --> 00:35:36
makes sense of the world make sense of

00:35:33 --> 00:35:38
the physics of the world enough to be

00:35:35 --> 00:35:43
able to succeed in it from very little

00:35:37 --> 00:35:43
information but these games are trivial

00:35:42 --> 00:35:51
even though there is a lot of them this

00:35:48 --> 00:35:53
dqn approach has been able to outperform

00:35:50 --> 00:35:55
a lot of the Atari games

00:35:52 --> 00:35:57
that's what's been reported on

00:35:54 --> 00:36:01
outperform the human level performance

00:35:56 --> 00:36:06
but again these games are trivial what I

00:36:00 --> 00:36:07
think and perhaps biased I'm biased but

00:36:05 --> 00:36:09
one of the greatest accomplishments of

00:36:06 --> 00:36:13
artificial intelligence in the last

00:36:08 --> 00:36:20
decade at least from the philosophical

00:36:12 --> 00:36:25
or the research perspective is alphago 0

00:36:19 --> 00:36:28
first alphago and then alphago 0 its

00:36:24 --> 00:36:31
deepmind system that beat the best in

00:36:27 --> 00:36:36
the world in a game of go so what's the

00:36:30 --> 00:36:39
game of go it's simple I won't get into

00:36:35 --> 00:36:43
the rules but basically it's a 19 by 19

00:36:38 --> 00:36:46
board shown on the bottom of the slide

00:36:42 --> 00:36:51
for the bottom row of the table for a

00:36:45 --> 00:36:54
board of 19 by 19 the number of legal

00:36:50 --> 00:36:58
game positions is 2 times 10 to the

00:36:53 --> 00:37:01
power of 170 it's a very large number of

00:36:57 --> 00:37:04
possible positions to consider any one

00:37:00 --> 00:37:08
time especially the game evolves the

00:37:03 --> 00:37:13
number of possible moves is huge much

00:37:07 --> 00:37:15
larger than in chess so that's why AI

00:37:12 --> 00:37:22
the community thought that this game is

00:37:14 --> 00:37:27
not solvable until 2016 when alphago

00:37:21 --> 00:37:31
used this use human expert position play

00:37:26 --> 00:37:33
to seed in a supervised way

00:37:30 --> 00:37:36
reinforcement learning approach and I'll

00:37:32 --> 00:37:37
describe in a little bit of detail and a

00:37:35 --> 00:37:43
couple of slides here

00:37:36 --> 00:37:48
to beat the best in the world and then

00:37:42 --> 00:37:53
alphago 0 that is the accomplishment of

00:37:47 --> 00:38:00
the decade for me in AI is being able to

00:37:52 --> 00:38:05
play with no training data on human

00:37:59 --> 00:38:08
expert games and beat the best in the

00:38:04 --> 00:38:13
world in an extremely complex game this

00:38:07 --> 00:38:18
not Atari this is and this is a much

00:38:12 --> 00:38:19
igher order difficulty game and that

00:38:17 --> 00:38:22
and the quality of players that is

00:38:18 --> 00:38:25
competing in is much higher and it's

00:38:21 --> 00:38:27
able to extremely quickly here to

00:38:24 --> 00:38:30
achieve a rating that's better than

00:38:26 --> 00:38:33
alphago and better than the different

00:38:29 --> 00:38:36
variants of alphago and certainly better

00:38:32 --> 00:38:40
than the best of the human players in 21

00:38:35 --> 00:38:44
days of self play so how does it work

00:38:39 --> 00:38:46
all of these approaches much much like

00:38:43 --> 00:38:50
the previous ones the traditional ones

00:38:45 --> 00:38:54
that are not based on deep learning are

00:38:49 --> 00:38:58
using Monte Carlo tree search MCTS

00:38:53 --> 00:39:01
which is when you have such a large

00:38:57 --> 00:39:07
state space you start at a board and you

00:39:00 --> 00:39:11
play and you choose moves with some

00:39:06 --> 00:39:13
xploitation exploration balancing

00:39:10 --> 00:39:16
choosing to explore totally new

00:39:12 --> 00:39:18
positions or to go deep in the positions

00:39:15 --> 00:39:20
you know are good until the bottom of

00:39:17 --> 00:39:21
the game is reached until the final

00:39:19 --> 00:39:25
state is reached and then you back

00:39:20 --> 00:39:27
propagate the quality of the choices you

00:39:24 --> 00:39:29
made leading to that position

00:39:26 --> 00:39:35
and in that way you learn the value of

00:39:28 --> 00:39:38
board positions and play that's been

00:39:34 --> 00:39:42
used by the most successful go playing

00:39:37 --> 00:39:44
engines before and alphago since but you

00:39:42 --> 00:39:46
might be able to guess what's the

00:39:43 --> 00:39:49
difference with alphago verse to the

00:39:45 --> 00:39:51
previous approaches they use the neural

00:39:48 --> 00:39:56
network

00:39:50 --> 00:39:58
as the intuition quote-unquote - what

00:39:55 --> 00:40:07
are the good states what are the good

00:39:57 --> 00:40:10
next board positions to explore and the

00:40:06 --> 00:40:14
key things again the tricks make all the

00:40:09 --> 00:40:17
difference that made alphago zero work

00:40:13 --> 00:40:20
and work much better than alphago is

00:40:16 --> 00:40:24
first because there was no expert play

00:40:19 --> 00:40:24
instead of human games

00:40:23 --> 00:40:33
alphago used that very same Monte Carlo

00:40:28 --> 00:40:35
tree search algorithm MCTS to do an

00:40:32 --> 00:40:37
intelligent look ahead based on the

00:40:34 --> 00:40:41
neural network prediction of where dove

00:40:36 --> 00:40:43
the good States to take it checked that

00:40:40 --> 00:40:48
instead of human expert play it checked

00:40:42 --> 00:40:51
how good indeed are those states it's a

00:40:47 --> 00:40:53
simple look ahead action that does the

00:40:50 --> 00:40:55
ground truth that does the target

00:40:52 --> 00:40:57
correction that produces the loss

00:40:54 --> 00:41:00
function the second part is the

00:40:56 --> 00:41:02
multitask learning what's now called

00:40:59 --> 00:41:05
multitask learning is the networkers is

00:41:01 --> 00:41:07
quote-unquote two-headed in the sense

00:41:04 --> 00:41:10
that first it outputs the probability of

00:41:06 --> 00:41:12
which move to take the obvious thing and

00:41:09 --> 00:41:14
it's also producing a probability of

00:41:11 --> 00:41:16
winning and there's a few ways to

00:41:13 --> 00:41:19
combine that information and

00:41:15 --> 00:41:22
continuously train both parts of the

00:41:18 --> 00:41:24
network depending on the choice taken so

00:41:21 --> 00:41:27
you want to take the best choice in the

00:41:23 --> 00:41:29
short term and achieve the positions

00:41:26 --> 00:41:31
that are highly a slightly hood of

00:41:28 --> 00:41:38
winning for the player that's whose turn

00:41:30 --> 00:41:41
it is and another big step is that they

00:41:37 --> 00:41:43
updated from 2015 the updated of the

00:41:40 --> 00:41:45
state-of-the-art architecture which are

00:41:42 --> 00:41:49
now the architecture that one imagenet

00:41:44 --> 00:41:51
as the residual networks ResNet for

00:41:48 --> 00:41:54
imagenet those that's it

00:41:50 --> 00:41:57
and those little changes made all the

00:41:53 --> 00:41:59
difference so that takes us to deep

00:41:56 --> 00:42:02
traffic and the eight billion hours

00:41:58 --> 00:42:02
tuck in traffic

00:42:02 --> 00:42:09
America's pastime so we tried to

00:42:04 --> 00:42:13
simulate driving that behavior layer of

00:42:08 --> 00:42:15
driving so not the immediate control not

00:42:12 --> 00:42:18
he motion planning but beyond that on

00:42:14 --> 00:42:22
top on top of those control decisions

00:42:17 --> 00:42:23
the human interpretable decisions of

00:42:21 --> 00:42:27
changing lane of speeding up slowing

00:42:22 --> 00:42:29
down modeling that in a micro traffic

00:42:26 --> 00:42:31
simulation framework that's popular in

00:42:28 --> 00:42:35
traffic engineering the kind of shown

00:42:30 --> 00:42:37
here we apply deep reinforcement

00:42:34 --> 00:42:40
learning to that I'll call it deep

00:42:36 --> 00:42:42
traffic the goal is to achieve the

00:42:39 --> 00:42:45
highest average speed over a long period

00:42:41 --> 00:42:48
of time weaving in and out of traffic

00:42:44 --> 00:42:50
for students here the requirement is to

00:42:47 --> 00:42:56
follow the tutorial and achieve a speed

00:42:49 --> 00:42:59
of 65 miles an hour and if you really

00:42:55 --> 00:43:03
want to achieve a speed over 70 miles an

00:42:58 --> 00:43:07
hour which is what's acquired to win and

00:43:02 --> 00:43:11
perhaps upload your own image to make

00:43:06 --> 00:43:14
sure you look good doing it what you

00:43:10 --> 00:43:18
should do clear instructions to compete

00:43:13 --> 00:43:20
read the tutorial you can change

00:43:17 --> 00:43:22
parameters in the code box on that

00:43:19 --> 00:43:25
website cars done on mighty dad you size

00:43:21 --> 00:43:27
deep traffic click the white button that

00:43:24 --> 00:43:29
says apply code which applies the code

00:43:26 --> 00:43:32
that you write these are the parameters

00:43:28 --> 00:43:35
that you specify then you'll network it

00:43:31 --> 00:43:37
applies those parameters creates the

00:43:34 --> 00:43:39
architecture do you specify and now you

00:43:36 --> 00:43:41
have a network written in JavaScript

00:43:39 --> 00:43:44
living in the browser ready to be

00:43:40 --> 00:43:47
trained then you click the blue button

00:43:43 --> 00:43:51
that says run training and that trains

00:43:46 --> 00:43:53
the network much faster than one's

00:43:50 --> 00:43:57
actually being visualized in the browser

00:43:52 --> 00:43:59
a thousand times faster by evolving the

00:43:56 --> 00:44:01
game making decisions taking in the grid

00:43:58 --> 00:44:03
space as I'll talk about here in a

00:44:00 --> 00:44:06
second the speed limit is 80 miles an

00:44:02 --> 00:44:09
hour based on the various adjustments

00:44:05 --> 00:44:10
were made to the game reaching 80 miles

00:44:08 --> 00:44:14
an hour is certainly impossible an

00:44:09 --> 00:44:16
average and reaching some of the speeds

00:44:13 --> 00:44:19
that we've achieved last year

00:44:15 --> 00:44:21
it's much much much more difficult

00:44:18 --> 00:44:25
finally when you're happy and the

00:44:20 --> 00:44:29
training is done submit the model to

00:44:24 --> 00:44:31
competition for those super eager

00:44:28 --> 00:44:35
dedicated students you can do so every

00:44:30 --> 00:44:40
five minutes and to visualize your

00:44:34 --> 00:44:42
submission you can click the request

00:44:39 --> 00:44:46
visualization specifying the custom

00:44:41 --> 00:44:48
image and the color okay

00:44:45 --> 00:44:49
so here's the simulation speed limit 80

00:44:47 --> 00:44:53
miles an hour

00:44:48 --> 00:44:55
cars 20 on the screen one of them is a

00:44:52 --> 00:44:58
red one in this case that's that one is

00:44:54 --> 00:45:00
controlled by a neural network its speed

00:44:57 --> 00:45:04
it's allowed the actions of speed up

00:44:59 --> 00:45:11
slow down change lanes left-right or

00:45:03 --> 00:45:14
stay exactly the same the other cars are

00:45:10 --> 00:45:17
pretty dumb they speed up slow down turn

00:45:13 --> 00:45:20
left right but they don't have a purpose

00:45:16 --> 00:45:22
in their existence they do so randomly

00:45:19 --> 00:45:26
or at least purpose has not been

00:45:21 --> 00:45:29
discovered the road the car the speed

00:45:25 --> 00:45:33
the road is a grid space an occupancy

00:45:28 --> 00:45:41
grid that specifies when it's empty

00:45:32 --> 00:45:44
it's set to a B meaning that the the

00:45:40 --> 00:45:46
grid value is whatever speed is

00:45:43 --> 00:45:49
achievable if you were inside that grid

00:45:45 --> 00:45:52
and when there's other cars that are

00:45:48 --> 00:45:54
going slow the value in that grid is the

00:45:51 --> 00:45:56
speed of that car that's the state space

00:45:53 --> 00:45:58
that's the state representation and you

00:45:55 --> 00:46:01
can choose how much what slice that

00:45:57 --> 00:46:07
state space you take in that's the input

00:46:00 --> 00:46:09
o the neural network for a visual

00:46:06 --> 00:46:12
Asian purposes you can choose normal

00:46:08 --> 00:46:16
speed or fast speed for watching the

00:46:11 --> 00:46:19
network operate and there's display

00:46:15 --> 00:46:20
options to help you build intuition

00:46:18 --> 00:46:23
about the network takes in and what

00:46:19 --> 00:46:26
space that car is operating in the

00:46:22 --> 00:46:28
default is no extra information is added

00:46:25 --> 00:46:31
then there's the learning input which

00:46:27 --> 00:46:33
visualizes exactly which part of the

00:46:30 --> 00:46:37
road the is serves as the input to the

00:46:32 --> 00:46:38
network then there is the safety system

00:46:36 --> 00:46:40
which I'll describe in a little bit

00:46:37 --> 00:46:43
which is all the parts of the road the

00:46:39 --> 00:46:45
car is not allowed to go into because it

00:46:42 --> 00:46:46
would result in a collision and that

00:46:44 --> 00:46:51
with JavaScript would be very difficult

00:46:45 --> 00:46:53
o animate and the full map here's a

00:46:50 --> 00:46:58
safety system you could think of this

00:46:52 --> 00:47:00
ystem as a CC basic radar ultrasonic

00:46:57 --> 00:47:03
sensors helping you avoid the obvious

00:46:59 --> 00:47:05
collisions to obviously detectable

00:47:02 --> 00:47:07
objects around you and the task for this

00:47:04 --> 00:47:12
red car for the steel Network is to move

00:47:06 --> 00:47:14
about this space is to move about the

00:47:11 --> 00:47:18
space under the constraints of the

00:47:13 --> 00:47:20
safety system the red shows all the

00:47:17 --> 00:47:24
parts of the grid it's not able to move

00:47:19 --> 00:47:27
into so the goal for the car is to not

00:47:23 --> 00:47:33
get stuck in traffic it's make big

00:47:26 --> 00:47:33
sweeping motions to avoid crowds of cars

00:47:32 --> 00:47:39
the input like DQ n is the state space

00:47:35 --> 00:47:42
the output is the value of the different

00:47:38 --> 00:47:45
actions and based on the epsilon

00:47:41 --> 00:47:48
parameter through training and through

00:47:44 --> 00:47:51
inference evaluation process you choose

00:47:47 --> 00:47:54
how much exploration you want to do

00:47:50 --> 00:47:58
these are all parameters the learning is

00:47:53 --> 00:47:58
done in the browser on your own computer

00:47:58 --> 00:48:07
utilizing only the CPU the action space

00:48:03 --> 00:48:08
there's five giving you some of the

00:48:06 --> 00:48:11
variables here perhaps you go back to

00:48:07 --> 00:48:15
the slides to look at it the brain quote

00:48:10 --> 00:48:19
unquote is the thing that takes in the

00:48:14 --> 00:48:20
state and the reward takes a four

00:48:18 --> 00:48:23
passed through the state and produce to

00:48:19 --> 00:48:26
the next action the brain is where the

00:48:22 --> 00:48:29
neural network is contained both of the

00:48:25 --> 00:48:33
training and the evaluation the learning

00:48:28 --> 00:48:36
input can be controlled in width forward

00:48:32 --> 00:48:38
length and backward length lane side

00:48:35 --> 00:48:40
number of lanes to the side that you see

00:48:37 --> 00:48:43
patches ahead as the patches ahead that

00:48:39 --> 00:48:48
you see patches behind as patches behind

00:48:42 --> 00:48:50
the you see mu this year can control the

00:48:47 --> 00:48:54
number of agents that are controlled by

00:48:50 --> 00:49:01
the neural network anywhere from one to

00:48:53 --> 00:49:03
ten and the evaluation is performed

00:49:00 --> 00:49:06
exactly the same way you have to achieve

00:49:02 --> 00:49:09
the highest average speed for the agents

00:49:05 --> 00:49:13
the very critical thing here is the

00:49:08 --> 00:49:18
agents are not aware of each other so

00:49:12 --> 00:49:21
they're not jointly jointly planning the

00:49:17 --> 00:49:24
network is trained under the joint

00:49:20 --> 00:49:25
objective of achieving the average speed

00:49:23 --> 00:49:28
for all of them

00:49:24 --> 00:49:31
but the actions are taking in a greedy

00:49:27 --> 00:49:34
way for each it's very interesting what

00:49:30 --> 00:49:36
can be learned in this way because this

00:49:33 --> 00:49:39
kinds of approaches are scalable to an

00:49:35 --> 00:49:42
arbitrary number of cars and you could

00:49:38 --> 00:49:45
imagine us plopping down the best cars

00:49:41 --> 00:49:48
from this class together and having them

00:49:44 --> 00:49:53
compete in this way the best neural

00:49:47 --> 00:49:56
networks because they're full in their

00:49:52 --> 00:49:58
greedy operation the number of networks

00:49:55 --> 00:50:02
that can concurrently operate is fully

00:49:57 --> 00:50:08
scaleable there's a lot of parameters

00:50:01 --> 00:50:11
the temporal window the layers the many

00:50:07 --> 00:50:12
layers types that can be added here's a

00:50:10 --> 00:50:15
fully connected layer with tenure ons

00:50:11 --> 00:50:17
the activation functions all of these

00:50:14 --> 00:50:21
things can be customized as specified in

00:50:16 --> 00:50:24
the tutorial the final layer a fully

00:50:20 --> 00:50:27
connected layer with output a five

00:50:23 --> 00:50:30
regression giving the value of each of

00:50:26 --> 00:50:32
the five actions and there's a lot of

00:50:29 --> 00:50:33
more specific parameters some of which

00:50:31 --> 00:50:40
ave this

00:50:32 --> 00:50:44
just from gamma to epsilon to experience

00:50:39 --> 00:50:48
replay size to learning rate in temporal

00:50:43 --> 00:50:52
window the optimizer the learning rate

00:50:47 --> 00:50:55
momentum batch size l2 l1 to K for

00:50:51 --> 00:50:57
egularization and so on there's a big

00:50:54 --> 00:50:59
white button that says apply code that

00:50:56 --> 00:51:01
you press that kills all the work you've

00:50:58 --> 00:51:03
done up to this point so be careful

00:51:00 --> 00:51:07
doing it it should be doing it only at

00:51:02 --> 00:51:09
he very beginning if you happen to

00:51:06 --> 00:51:11
leave your computer running in training

00:51:08 --> 00:51:14
for several days as as folks have done

00:51:10 --> 00:51:16
the blue training button you press and

00:51:13 --> 00:51:19
it trains based on the parameters you

00:51:15 --> 00:51:21
specify and the network state gets

00:51:18 --> 00:51:23
hipped to the main simulation from time

00:51:20 --> 00:51:25
to time so the thing you see in the

00:51:22 --> 00:51:27
browser as you open up the web site is

00:51:24 --> 00:51:30
running then the same network that's

00:51:26 --> 00:51:31
being trained and regularly it updates

00:51:29 --> 00:51:33
that network so it's getting better and

00:51:30 --> 00:51:36
better even if the training takes weeks

00:51:32 --> 00:51:38
for you it's constantly updating the

00:51:35 --> 00:51:40
network you see on the left so if the

00:51:37 --> 00:51:42
car for the network that you're training

00:51:39 --> 00:51:47
is just standing in place and not moving

00:51:41 --> 00:51:49
it's probably time to restart and change

00:51:46 --> 00:51:53
the parameters maybe add a few layers to

00:51:48 --> 00:51:55
your network number of iterations is

00:51:52 --> 00:51:59
certainly an important parameter to

00:51:54 --> 00:52:01
control and the evaluation is something

00:51:58 --> 00:52:03
we've done a lot of worked on since last

00:52:00 --> 00:52:08
year to remove the degree of randomness

00:52:02 --> 00:52:10
to remove the the incentive to submit

00:52:07 --> 00:52:12
he same code over and over again to

00:52:09 --> 00:52:16
hope to produce a higher reward a higher

00:52:11 --> 00:52:18
evaluation score the method for

00:52:15 --> 00:52:24
evaluation is we collect the average

00:52:17 --> 00:52:28
speed over ten runs about 45 seconds of

00:52:23 --> 00:52:31
game each not minutes 45 simulated

00:52:27 --> 00:52:33
seconds and there is five hundreds of

00:52:30 --> 00:52:36
those and we take the median speed of

00:52:32 --> 00:52:38
the 500 runs it's done server-side so

00:52:35 --> 00:52:43
extremely difficult to cheat I urge you

00:52:37 --> 00:52:44
to try you can try it locally there's a

00:52:42 --> 00:52:46
start evaluation run but that one

00:52:43 --> 00:52:47
doesn't count that's just for you to

00:52:45 --> 00:52:50
feel better

00:52:46 --> 00:52:52
by you network that's that should

00:52:49 --> 00:52:53
produce a result that's very similar to

00:52:51 --> 00:52:57
the one we were produced on the server

00:52:52 --> 00:52:59
it's to build your own intuition and as

00:52:56 --> 00:53:02
I said we significantly reduce the

00:52:58 --> 00:53:04
influence of randomness so the the score

00:53:01 --> 00:53:07
the speed you get for the network you

00:53:03 --> 00:53:11
design should be very similar with every

00:53:06 --> 00:53:13
valuation loading is saving if the

00:53:10 --> 00:53:15
network is huge and you want to switch

00:53:12 --> 00:53:17
computers you can save the network it

00:53:14 --> 00:53:19
saves both the architecture of the

00:53:16 --> 00:53:23
network and the weights and the on the

00:53:18 --> 00:53:27
network and you can load it back in

00:53:22 --> 00:53:29
obviously when you load it in it's not

00:53:26 --> 00:53:32
saving any of the data you've already

00:53:28 --> 00:53:36
done you can't do transfer learning with

00:53:31 --> 00:53:38
javascript in the browser yet submitting

00:53:35 --> 00:53:40
your network submit model to competition

00:53:37 --> 00:53:43
and make sure you run training first

00:53:39 --> 00:53:45
otherwise it'll be initiated the way to

00:53:42 --> 00:53:45
initiate it randomly and will not do so

00:53:44 --> 00:53:48
well

00:53:44 --> 00:53:51
you can resubmit us off and you like and

00:53:47 --> 00:53:53
the highest score is what counts the

00:53:50 --> 00:53:56
coolest part is you can load your custom

00:53:52 --> 00:54:00
image specify colors and request the

00:53:55 --> 00:54:02
visualization we have not yet shown the

00:53:59 --> 00:54:05
visualization but I promise you it's

00:54:01 --> 00:54:07
going to be awesome again read the

00:54:04 --> 00:54:09
tutorial change the parameters in the

00:54:06 --> 00:54:12
code box click apply code run training

00:54:08 --> 00:54:14
everybody in this room on the way home

00:54:11 --> 00:54:16
on the train hopefully not in your car

00:54:13 --> 00:54:19
should be able to do this in the browser

00:54:15 --> 00:54:20
and then you can visualize request

00:54:18 --> 00:54:23
visualization because it's an expensive

00:54:19 --> 00:54:28
process you have to want it for us to do

00:54:22 --> 00:54:28
it because we have to run in server-side

00:54:27 --> 00:54:35
competition link is there github starter

00:54:31 --> 00:54:36
code is there and the details for those

00:54:34 --> 00:54:40
that truly want to win is in the archive

00:54:35 --> 00:54:42
paper so the question that will come up

00:54:39 --> 00:54:45
throughout is whether these

00:54:41 --> 00:54:47
reinforcement learning approaches are at

00:54:44 --> 00:54:52
all or rather if action planning control

00:54:46 --> 00:54:55
is amenable to learning certainly in the

00:54:51 --> 00:54:57
case of driving we can't do it alpha go

00:54:54 --> 00:55:00
zero did we can

00:54:56 --> 00:55:03
learn from scratch from self play

00:54:59 --> 00:55:08
because that will result in millions of

00:55:02 --> 00:55:10
crashes in order to learn to avoid the

00:55:07 --> 00:55:13
crashes unless we're working like we are

00:55:09 --> 00:55:16
deep crash on the RC car or we're

00:55:12 --> 00:55:17
working in a simulation so we can look

00:55:15 --> 00:55:19
at export data we can look at driver

00:55:16 --> 00:55:21
data which we have a lot of and learn

00:55:18 --> 00:55:25
from it's an open question whether this

00:55:20 --> 00:55:27
applicable to date and I'll bring up

00:55:24 --> 00:55:31
two companies because they're both guest

00:55:26 --> 00:55:33
speakers deep IRL is not involved in the

00:55:30 --> 00:55:37
most successful robots operating in the

00:55:32 --> 00:55:43
real world in the case of Boston

00:55:36 --> 00:55:46
Dynamics most of the perception control

00:55:42 --> 00:55:49
and planning like in this robot does not

00:55:45 --> 00:55:53
involve learning approaches except with

00:55:49 --> 00:55:57
minimal addition on the perception side

00:55:52 --> 00:56:00
best of our knowledge and certainly the

00:55:56 --> 00:56:02
same is true with Wei MO as the speaker

00:55:59 --> 00:56:04
on Friday will talk about deep learning

00:56:01 --> 00:56:07
is used a little bit in perception on

00:56:03 --> 00:56:10
top but most of the work is done from

00:56:06 --> 00:56:13
the sensors and the optimization base

00:56:10 --> 00:56:15
the model-based approaches trajectory

00:56:12 --> 00:56:18
generation and optimizing which

00:56:14 --> 00:56:24
trajectory trajectory is best to avoid

00:56:17 --> 00:56:26
collisions deep IRL is not involved and

00:56:23 --> 00:56:28
coming back and back again

00:56:25 --> 00:56:31
the unexpected local POC is a high

00:56:27 --> 00:56:32
reward which arises in all of these

00:56:30 --> 00:56:36
situations and apply in the real world

00:56:31 --> 00:56:38
so for the cat video that's pretty short

00:56:35 --> 00:56:40
where the cats are ringing the bell and

00:56:37 --> 00:56:47
they're learning that the ring in the

00:56:39 --> 00:56:49
bell is is mapping to food I urge you to

00:56:46 --> 00:56:52
think about how that can evolve over

00:56:48 --> 00:56:55
time in unexpected ways they may not

00:56:51 --> 00:56:59
have a desirable effect where the final

00:56:54 --> 00:57:02
reward is in the form of food and the

00:56:58 --> 00:57:02
intended effect is to ring the bell

00:57:02 --> 00:57:07
that's

00:57:03 --> 00:57:09
ASAT comes in for the artificial general

00:57:06 --> 00:57:12
intelligence course in two weeks that

00:57:08 --> 00:57:16
something will explore extensively its

00:57:11 --> 00:57:19
how these reinforcement learning

00:57:15 --> 00:57:23
planning algorithms will evolve in ways

00:57:18 --> 00:57:25
they're not expected and how we can

00:57:22 --> 00:57:29
constrain them how we can design reward

00:57:24 --> 00:57:32
functions that result in safe operation

00:57:28 --> 00:57:36
so I encourage you to come to the talk

00:57:31 --> 00:57:39
on Friday at 1:00 p.m. as a reminder so

00:57:35 --> 00:57:41
1:00 p.m. not 7:00 p.m. in Stata 32 one

00:57:38 --> 00:57:44
two three and two the awesome talks in

00:57:40 --> 00:57:48
two weeks from Boston Dynamics to Ray

00:57:43 --> 00:57:50
Kurzweil and so on for AGI now tomorrow

00:57:47 --> 00:57:53
e'll talk about computer vision and

00:57:49 --> 00:57:57
psyche fuse thank you everybody

00:57:52 --> 00:57:57
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
