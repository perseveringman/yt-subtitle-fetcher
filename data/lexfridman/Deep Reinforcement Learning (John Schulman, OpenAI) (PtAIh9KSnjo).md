---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "PtAIh9KSnjo"
title: "Deep Reinforcement Learning (John Schulman, OpenAI)"
video_url: "https://www.youtube.com/watch?v=PtAIh9KSnjo"
thumbnail_url: "https://i.ytimg.com/vi/PtAIh9KSnjo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=PtAIh9KSnjo"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 5235
duration_human: "1:27:15"
view_count: 67614
like_count: 775
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:24:08.368Z"
---

# Deep Reinforcement Learning (John Schulman, OpenAI)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=PtAIh9KSnjo
- video_id: PtAIh9KSnjo
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:27:15
- view_count: 67614
- like_count: 775
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning
- categories: Science & Technology

## Description

The talks at the Deep Learning School on September 24/25, 2016 were amazing. I clipped out individual talks  from the full live streams and provided links to each below in case that's useful for people who want to watch specific talks several times (like I do). Please check out the official website (http://www.bayareadlschool.org) and full live streams below.

Having read, watched, and presented deep learning material over the past few years, I have to say that this is one of the best collection of introductory deep learning talks I've yet encountered. Here are links to the individual talks and the full live streams for the two days:

1. Foundations of Deep Learning (Hugo Larochelle, Twitter) - https://youtu.be/zij_FTbJHsk
2. Deep Learning for Computer Vision (Andrej Karpathy, OpenAI) - https://youtu.be/u6aEYuemt0M
3. Deep Learning for Natural Language Processing (Richard Socher, Salesforce) - https://youtu.be/oGk1v1jQITw
4. TensorFlow Tutorial (Sherry Moore, Google Brain) - https://youtu.be/Ejec3ID_h0w
5. Foundations of Unsupervised Deep Learning (Ruslan Salakhutdinov, CMU) - https://youtu.be/rK6bchqeaN8
6. Nuts and Bolts of Applying Deep Learning (Andrew Ng) - https://youtu.be/F1ka6a13S9I
7. Deep Reinforcement Learning (John Schulman, OpenAI) - https://youtu.be/PtAIh9KSnjo
8. Theano Tutorial (Pascal Lamblin, MILA) - https://youtu.be/OU8I1oJ9HhI
9. Deep Learning for Speech Recognition (Adam Coates, Baidu) - https://youtu.be/g-sndkf7mCs
10. Torch Tutorial (Alex Wiltschko, Twitter) - https://youtu.be/L1sHcj3qDNc
11. Sequence to Sequence Deep Learning (Quoc Le, Google) - https://youtu.be/G5RY_SUJih4
12. Foundations and Challenges of Deep Learning (Yoshua Bengio) - https://youtu.be/11rsu_WwZTc

Full Day Live Streams:
Day 1: https://youtu.be/eyovmAtoUx0
Day 2: https://youtu.be/9dXiAecyJrY

Go to http://www.bayareadlschool.org for more information on the event, speaker bios, slides, etc. Huge thanks to the organizers (Shubho Sengupta et al) for making this event happen.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
so good morning

00:00:04 --> 00:00:10
everyone so I'm going to talk about uh

00:00:07 --> 00:00:12
some of the core methods in deep

00:00:10 --> 00:00:15
reinforcement

00:00:11 --> 00:00:18
learning um so the aim of this talk is

00:00:14 --> 00:00:21
as follows um first I'll do a brief

00:00:17 --> 00:00:22
introduction to what deepl is and um

00:00:20 --> 00:00:26
whether it might make sense to apply it

00:00:21 --> 00:00:28
in your problem um I'll talk about uh

00:00:25 --> 00:00:31
some of the core uh

00:00:27 --> 00:00:34
techniques uh so they're on the one hand

00:00:30 --> 00:00:35
we have the policy gradient methods uh

00:00:33 --> 00:00:38
then on the other hand we have uh

00:00:34 --> 00:00:40
methods that uh learn a q function

00:00:37 --> 00:00:43
including Q learning and

00:00:39 --> 00:00:45
sarsa and um I'll talk a little at the

00:00:42 --> 00:00:48
nd about what are the pros and cons of

00:00:44 --> 00:00:50
these different

00:00:47 --> 00:00:52
methods so first what is reinforcement

00:00:49 --> 00:00:54
learning um it's a branch of machine

00:00:52 --> 00:00:57
learning cons uh concerned with taking

00:00:53 --> 00:01:01
sequences of actions um

00:00:56 --> 00:01:02
so um often uh it's described in in

00:01:00 --> 00:01:05
terms of an agent inter interacting with

00:01:01 --> 00:01:07
e previously unknown environment um

00:01:04 --> 00:01:09
and it's trying to maximize some kind of

00:01:06 --> 00:01:11
cumulative reward some kind of reward

00:01:08 --> 00:01:14
function that we've defined um

00:01:10 --> 00:01:16
accumulated over time and uh pretty much

00:01:13 --> 00:01:17
any kind of task where you have some

00:01:15 --> 00:01:19
kind of goal that you want to achieve

00:01:16 --> 00:01:23
can be stated in these terms uh so this

00:01:18 --> 00:01:23
an extremely General uh

00:01:23 --> 00:01:29
formulation uh what's deep reinforcement

00:01:25 --> 00:01:30
learning it's pretty simple it's just uh

00:01:28 --> 00:01:33
reinforcement learning where you're

00:01:29 --> 00:01:37
using uh neural networks uh as function

00:01:32 --> 00:01:38
approximators um so uh the interesting

00:01:36 --> 00:01:41
thing about reinforcement learning and

00:01:37 --> 00:01:43
contrast to supervised learning is um

00:01:40 --> 00:01:44
it's actually not totally obvious what

00:01:42 --> 00:01:46
you should use your neural network to

00:01:43 --> 00:01:47
approximate in reinforcement learning

00:01:45 --> 00:01:49
and there are different kinds of

00:01:46 --> 00:01:51
algorithms that approximate different

00:01:48 --> 00:01:53
hings so uh one choice is to use the

00:01:50 --> 00:01:56
neural network to approximate your

00:01:52 --> 00:01:59
policy which is uh how the agent chooses

00:01:55 --> 00:02:00
its actions um another choice is to

00:01:58 --> 00:02:03
approximate the value functions which

00:02:00 --> 00:02:05
measure how good or bad uh different

00:02:02 --> 00:02:09
states are or how or

00:02:04 --> 00:02:10
actions and um last you can use the um

00:02:08 --> 00:02:13
you can try to learn a model of the

00:02:09 --> 00:02:16
system a Dynamics model uh which will

00:02:12 --> 00:02:16
make predictions about next States and

00:02:16 --> 00:02:22
rewards okay so I'll now give a few

00:02:19 --> 00:02:24
examples of different um different

00:02:21 --> 00:02:26
places where you might apply

00:02:23 --> 00:02:29
reinforcement learning and what the

00:02:25 --> 00:02:31
observations and uh actions would be uh

00:02:28 --> 00:02:35
so one example is

00:02:30 --> 00:02:37
robotics um so here you could imagine a

00:02:34 --> 00:02:38
robot where the observations are the

00:02:36 --> 00:02:41
camera images and the joint angles of

00:02:37 --> 00:02:44
the robot um the actions are the joint

00:02:40 --> 00:02:47
orqus you're applying and

00:02:43 --> 00:02:49
um the reward is going to depend on what

00:02:46 --> 00:02:52
you want the robot to do so so this is

00:02:49 --> 00:02:55
omething we uh as the algorithm

00:02:51 --> 00:02:57
designer get to Define so uh the rewards

00:02:54 --> 00:03:00
could be uh to stay balanced uh to

00:02:56 --> 00:03:02
navigate to some Target location or

00:02:59 --> 00:03:03
something more abstract like Serve and

00:03:01 --> 00:03:07
Protect

00:03:02 --> 00:03:10
humans uh so reinforcement learning has

00:03:06 --> 00:03:12
also been used in a lot of um more

00:03:09 --> 00:03:14
practical applications um well

00:03:11 --> 00:03:16
applications that have been practical in

00:03:13 --> 00:03:20
the past uh I think robotics will be

00:03:15 --> 00:03:24
very practical in the future um but uh

00:03:19 --> 00:03:27
for example um one uh one area is um

00:03:23 --> 00:03:28
Inventory management uh so this is just

00:03:26 --> 00:03:29
one example of how you could use

00:03:27 --> 00:03:31
reinforcement learning for a

00:03:28 --> 00:03:34
decision-making problem

00:03:30 --> 00:03:38
uh so you you have to decide how much to

00:03:33 --> 00:03:39
stock up on uh of every item and uh your

00:03:37 --> 00:03:42
observations would be your current

00:03:39 --> 00:03:43
inventory levels um actions would be how

00:03:41 --> 00:03:47
much of each item you're going to

00:03:42 --> 00:03:50
purchase and uh reward is your

00:03:46 --> 00:03:53
profit uh so people in operations

00:03:49 --> 00:03:58
research this is uh this is a subfield

00:03:52 --> 00:04:00
um study this kind of problem a lot

00:03:57 --> 00:04:02
um okay there are also a lot of uh

00:04:00 --> 00:04:04
machine learning problems where people

00:04:01 --> 00:04:06
have started to apply reinforcement

00:04:03 --> 00:04:09
learning

00:04:05 --> 00:04:12
techniques so uh one example is um

00:04:08 --> 00:04:13
attention um so the idea in attention is

00:04:11 --> 00:04:15
you don't want to look at the whole

00:04:12 --> 00:04:18
input at once uh you want to just focus

00:04:14 --> 00:04:20
on part of it uh so uh one example of

00:04:17 --> 00:04:23
this is um with a large image you might

00:04:19 --> 00:04:25
want to just crop out part of it and uh

00:04:22 --> 00:04:28
use that and just do detection on that

00:04:24 --> 00:04:30
part of the image um so uh here your

00:04:27 --> 00:04:32
observation would be your current image

00:04:29 --> 00:04:36
window action is where to look or where

00:04:31 --> 00:04:37
to crop your image um and uh reward is

00:04:35 --> 00:04:39
um your whether you make a

00:04:37 --> 00:04:43
classification error or

00:04:38 --> 00:04:46
not so here the um the actions are

00:04:42 --> 00:04:47
trying to um here you have to um try to

00:04:45 --> 00:04:50
choose the right area of the image to

00:04:46 --> 00:04:53
look at so you'll do the correct

00:04:49 --> 00:04:55
classification um reinforcement learning

00:04:52 --> 00:04:59
has also been used in um structured

00:04:54 --> 00:05:01
prediction problems um which haven't uh

00:04:58 --> 00:05:02
which in the past

00:05:00 --> 00:05:05
weren't considered to be reinforcement

00:05:01 --> 00:05:08
learning problems uh but it turns out

00:05:04 --> 00:05:10
hat um like to actually properly solve

00:05:07 --> 00:05:12
them it it actually is a reinforcement

00:05:09 --> 00:05:15
learning problem uh so machine

00:05:11 --> 00:05:18
translation for example

00:05:14 --> 00:05:19
um uh you so you get a sour a sentence

00:05:17 --> 00:05:22
in the source language and you have to

00:05:19 --> 00:05:25
emit a sentence in the target language

00:05:21 --> 00:05:27
um and uh you can uh here your

00:05:24 --> 00:05:29
observations are the sentence in the

00:05:26 --> 00:05:31
source language you're emitting one word

00:05:28 --> 00:05:33
at a time in the Target l language and

00:05:30 --> 00:05:35
uh you have some reward function that

00:05:32 --> 00:05:38
looks at the whole sentence and tells

00:05:34 --> 00:05:40
you how good your translation was um so

00:05:37 --> 00:05:42
since this is non-differentiable and

00:05:39 --> 00:05:44
it's um you yeah you can't just uh like

00:05:42 --> 00:05:46
differentiate through the whole thing

00:05:43 --> 00:05:48
and do gradiant to sent so um it turns

00:05:45 --> 00:05:50
out you have to do um you can use a

00:05:47 --> 00:05:53
policy gradient method to optimize your

00:05:49 --> 00:05:55
translation system um so people have

00:05:52 --> 00:05:58
started to do

00:05:54 --> 00:06:02
that okay so that's just those are just

00:05:57 --> 00:06:05
a few examples um not exhaustive at all

00:06:01 --> 00:06:07
um but uh I just want to uh since I just

00:06:04 --> 00:06:10
want to say a little bit about how

00:06:06 --> 00:06:13
reinforcement learning fits into um the

00:06:10 --> 00:06:15
um fits into the picture of all the

00:06:12 --> 00:06:20
other um types of machine learning

00:06:14 --> 00:06:22
problems so previous um I mean previous

00:06:19 --> 00:06:24
uh courses in this uh series have talked

00:06:21 --> 00:06:26
about uh supervised learning and un

00:06:23 --> 00:06:28
supervised learning so how does uh

00:06:25 --> 00:06:31
reinforcement learning relate to them

00:06:27 --> 00:06:33
how is it different um so let's just uh

00:06:30 --> 00:06:35
first compare it to let's look at

00:06:32 --> 00:06:37
supervised learning so in supervised

00:06:34 --> 00:06:40
learning first um the environment

00:06:36 --> 00:06:42
samples an input output pair from some

00:06:39 --> 00:06:45
distribution

00:06:41 --> 00:06:50
row um the agent makes a prediction um

00:06:44 --> 00:06:52
why hat using its function f and uh it

00:06:49 --> 00:06:55
receives some loss which tells it if it

00:06:51 --> 00:06:57
made the right prediction or the wrong

00:06:54 --> 00:06:59
prediction um so the interpretation is

00:06:56 --> 00:07:02
um environment asks the agent a question

00:06:58 --> 00:07:06
and then tells the right

00:07:01 --> 00:07:08
answer um so contextual Bandits are um

00:07:05 --> 00:07:10
ake this problem a little harder in

00:07:07 --> 00:07:13
that they give um The Learning agent a

00:07:09 --> 00:07:15
little bit less information um so now

00:07:12 --> 00:07:17
the environment samples an input um but

00:07:14 --> 00:07:20
notice that there's not a correct output

00:07:16 --> 00:07:22
associated with it um then the agent

00:07:19 --> 00:07:25
akes an

00:07:21 --> 00:07:28
action and uh the agent receives some

00:07:24 --> 00:07:31
cost which is from um some probability

00:07:27 --> 00:07:33
distribution so here um C is the cost

00:07:30 --> 00:07:35
we're sampling it from some probability

00:07:32 --> 00:07:37
distribution um and the agent doesn't

00:07:34 --> 00:07:40
know what this probability distribution

00:07:36 --> 00:07:43
is so that's what makes the problem

00:07:39 --> 00:07:45
hard um so environment asks the agent a

00:07:42 --> 00:07:47
question and uh the agent answers and

00:07:44 --> 00:07:49
the environment gives her a noisy score

00:07:46 --> 00:07:49
on the

00:07:49 --> 00:07:55
answer um so this is applied um this

00:07:52 --> 00:07:57
actually has a lot of applications so

00:07:54 --> 00:08:00
personalized recommendations is one big

00:07:56 --> 00:08:03
one along with advertising so um you

00:07:59 --> 00:08:05
have to besides um like uh customers who

00:08:02 --> 00:08:07
liked this I mean you for you have a

00:08:04 --> 00:08:08
customer and you know what they liked in

00:08:06 --> 00:08:10
the past so you have to make a

00:08:07 --> 00:08:12
prediction about what they're going to

00:08:09 --> 00:08:15
like in the future uh so you show them

00:08:11 --> 00:08:17
appropriate ads or links like what

00:08:14 --> 00:08:19
either like what ad what book you want

00:08:16 --> 00:08:21
o try to advertise to them or what

00:08:18 --> 00:08:25
video you want to show them and so

00:08:20 --> 00:08:26
n um so here you can the big difference

00:08:24 --> 00:08:28
between this and the supervised learning

00:08:25 --> 00:08:30
setting is you don't have access to the

00:08:27 --> 00:08:32
function uh the Lost function trying to

00:08:29 --> 00:08:34
ptimize so in particular you can't

00:08:31 --> 00:08:36
differentiate through it um we don't

00:08:33 --> 00:08:38
know the process that generates C so we

00:08:35 --> 00:08:40
can't um compute the grading of the loss

00:08:37 --> 00:08:43
function and use that to tune the

00:08:39 --> 00:08:46
agent's parameters so that makes it uh

00:08:42 --> 00:08:48
so that makes the problem a bit harder

00:08:45 --> 00:08:49
or you you have to use a different kind

00:08:47 --> 00:08:52
of

00:08:48 --> 00:08:54
algorithm um lastly uh reinforcement

00:08:51 --> 00:08:56
learning is um almost the same as the

00:08:53 --> 00:08:57
contextual Bandit setting except now the

00:08:55 --> 00:09:01
nvironment is

00:08:56 --> 00:09:03
tateful so now instead of sampling um

00:09:00 --> 00:09:06
the initial state from scratch every

00:09:02 --> 00:09:10
time step uh from the same distribution

00:09:05 --> 00:09:12
um the um State evolves over time uh so

00:09:09 --> 00:09:15
you have some transition probability

00:09:11 --> 00:09:18
distribution called P here where um the

00:09:14 --> 00:09:21
state X subt is uh conditioned on

00:09:17 --> 00:09:21
the previous state and the previous

00:09:21 --> 00:09:27
action and uh that makes the problem

00:09:23 --> 00:09:29
quite a bit harder because now well for

00:09:26 --> 00:09:31
a number of reasons uh for one thing the

00:09:28 --> 00:09:34
inputs you're getting depend on what

00:09:30 --> 00:09:36
actions you're taking so now that makes

00:09:33 --> 00:09:38
it harder to develop a stable reliable

00:09:35 --> 00:09:41
algorithm because now as the agent

00:09:37 --> 00:09:43
starts to learn it gets different inputs

00:09:40 --> 00:09:46
o that can lead to all sorts of um

00:09:42 --> 00:09:48
outof control um

00:09:45 --> 00:09:50
behavior and it also means you have

00:09:47 --> 00:09:53
delayed effects because uh since the

00:09:49 --> 00:09:55
system is stateful um uh you might need

00:09:52 --> 00:09:59
to take a lot of actions to get into the

00:09:54 --> 00:10:01
right state so um you might need to um

00:09:58 --> 00:10:06
you can't just greedily every time step

00:10:00 --> 00:10:06
you have to uh you have to think ahead

00:10:06 --> 00:10:11
effectively okay so just to summarize

00:10:08 --> 00:10:13
these differences there are two

00:10:10 --> 00:10:15
differences the first one is you don't

00:10:12 --> 00:10:16
have full analytic access to the

00:10:14 --> 00:10:19
function you're trying to optimize you

00:10:15 --> 00:10:21
have to query it through

00:10:18 --> 00:10:23
interaction uh second uh you're

00:10:20 --> 00:10:25
interacting with a stateful world which

00:10:22 --> 00:10:27
means that the input you get is going to

00:10:24 --> 00:10:29
depend on your previous actions and if

00:10:26 --> 00:10:31
you just take the first of those

00:10:28 --> 00:10:33
differences uh between supervised

00:10:30 --> 00:10:35
learning and reinforcement learning you

00:10:32 --> 00:10:37
get the contextual Bandit setting so

00:10:34 --> 00:10:37
that's sort of halfway in

00:10:37 --> 00:10:43
between okay so uh I realized that there

00:10:40 --> 00:10:45
uh multiple this audience probably has

00:10:42 --> 00:10:48
people with different interests uh some

00:10:44 --> 00:10:50
people are um doing research and want to

00:10:47 --> 00:10:53
know about what's the latest in the

00:10:49 --> 00:10:54
research world and some people are um

00:10:52 --> 00:10:57
want to apply these machine learning

00:10:53 --> 00:11:00
techniques to practical applications um

00:10:56 --> 00:11:03
so this slide is um for the latter group

00:10:59 --> 00:11:05
of people um so if you're wondering um

00:11:02 --> 00:11:07
if you have some problem where you think

00:11:04 --> 00:11:08
reinforcement learning might be relevant

00:11:06 --> 00:11:13
and you're wondering if you should apply

00:11:08 --> 00:11:15
reinforcement learning um so first uh I

00:11:12 --> 00:11:18
should say that the answer might be no

00:11:14 --> 00:11:19
it might be Overkill especially uh deep

00:11:17 --> 00:11:22
reinforcement learning so this is a set

00:11:18 --> 00:11:24
of fairly new techniques where it's not

00:11:21 --> 00:11:28
going to work out of the box very well

00:11:23 --> 00:11:29
um and uh it's these techniques aren't

00:11:27 --> 00:11:31
hat well established so they require a

00:11:28 --> 00:11:34
lot of they have a lot of knobs to be

00:11:30 --> 00:11:36
tuned so uh it might be Overkill and

00:11:33 --> 00:11:39
yeah these techniques aren't that well

00:11:36 --> 00:11:41
established at the moment so it might be

00:11:38 --> 00:11:46
worth investigating some other methods

00:11:40 --> 00:11:47
first um so one one so if your problem

00:11:45 --> 00:11:50
has a small number of parameters you're

00:11:47 --> 00:11:53
trying to optimize over and um you have

00:11:49 --> 00:11:57
a simulator that you can uh like just do

00:11:52 --> 00:11:59
lots of experiments on um then

00:11:56 --> 00:12:01
derivative free optimization methods are

00:11:58 --> 00:12:03
likely to be better than reinforcement

00:12:00 --> 00:12:06
learning or they're likely to be easier

00:12:02 --> 00:12:09
to get working um so these methods just

00:12:05 --> 00:12:11
uh look at um they just you give them a

00:12:08 --> 00:12:12
blackbox function where you put in a

00:12:10 --> 00:12:15
parameter vector and it'll give you a

00:12:11 --> 00:12:18
noisy estimate of the score and these

00:12:14 --> 00:12:20
algorithms will just optimize uh over

00:12:17 --> 00:12:22
the parameters of that blackbox I mean

00:12:19 --> 00:12:25
that are being put into that black box

00:12:21 --> 00:12:28
um so uh yeah there's a variety of

00:12:24 --> 00:12:29
different methods um for derivative free

00:12:27 --> 00:12:31
optimization but these are easier to

00:12:28 --> 00:12:34
understand than reinforcement learning

00:12:30 --> 00:12:38
and they do kind of work out of the

00:12:33 --> 00:12:41
box um okay a lot of problems are

00:12:37 --> 00:12:42
actually um can be seen as cont

00:12:40 --> 00:12:44
extual banded problems and the

00:12:41 --> 00:12:46
statefulness Of The World Isn't that

00:12:43 --> 00:12:49
relevant um so for example in

00:12:45 --> 00:12:51
advertising um this is where people

00:12:48 --> 00:12:52
look at advertising as a

00:12:50 --> 00:12:54
contextual Bandit problem most of the

00:12:51 --> 00:12:56
time because you decide what ad to

00:12:53 --> 00:13:01
present the user with and then they

00:12:55 --> 00:13:03
either um click on it or they don't um

00:13:00 --> 00:13:04
but it's really um the user is kind of

00:13:02 --> 00:13:06
stateful because if you show them a

00:13:03 --> 00:13:10
terrible ad uh they might just go and

00:13:05 --> 00:13:13
ownload ad block uh so uh there is like

00:13:09 --> 00:13:15
your actions do have some repercussions

00:13:12 --> 00:13:17
um but um often you can just approximate

00:13:14 --> 00:13:21
it as being a contextual Bandit problem

00:13:16 --> 00:13:22
where there is no state so uh there's a

00:13:20 --> 00:13:24
better theoretical understanding of

00:13:21 --> 00:13:26
contextual Bandit problems uh and

00:13:24 --> 00:13:30
methods that are that have some

00:13:25 --> 00:13:31
guarantees so in that case um so if it

00:13:29 --> 00:13:33
is a contextual banit problem you might

00:13:30 --> 00:13:37
want to use those kind of algorithms

00:13:32 --> 00:13:41
instead um and lastly um the um

00:13:36 --> 00:13:43
operations research field has been uh

00:13:40 --> 00:13:46
using um these methods for a while on

00:13:42 --> 00:13:50
real problems and um they have a set of

00:13:45 --> 00:13:52
methods um which are um just pretty much

00:13:49 --> 00:13:56
the basic algorithms uh policy iteration

00:13:52 --> 00:13:58
and value iteration but they're um sort

00:13:55 --> 00:14:00
of well um they're welldeveloped ways of

00:13:57 --> 00:14:01
doing feature engineering for these

00:13:59 --> 00:14:04
problems that end up working pretty

00:14:00 --> 00:14:06
decently so these uh techniques are also

00:14:03 --> 00:14:09
worth considering instead of trying to

00:14:05 --> 00:14:09
throw a big neural network at

00:14:09 --> 00:14:15
it okay so now well now that I've talked

00:14:12 --> 00:14:17
about what why not to use deep

00:14:14 --> 00:14:20
reinforcement learning or what it's not

00:14:16 --> 00:14:22
good for um I'll just talk about um some

00:14:19 --> 00:14:24
recent uh success stories in deep

00:14:21 --> 00:14:25
reinforcement learning which are

00:14:23 --> 00:14:27
achievements that probably wouldn't have

00:14:24 --> 00:14:31
been possible using these other

00:14:26 --> 00:14:34
techniques um so um a a few years ago

00:14:30 --> 00:14:38
there is a pretty um influential result

00:14:33 --> 00:14:42
um by uh Min all from Deep Mind uh where

00:14:37 --> 00:14:44
they used um a deep Q learning algorithm

00:14:41 --> 00:14:46
um to play Atari games using the screen

00:14:43 --> 00:14:47
images as

00:14:45 --> 00:14:50
input

00:14:46 --> 00:14:52
um and uh that's hard because you have

00:14:49 --> 00:14:53
these G these games are you're trying to

00:14:51 --> 00:14:54
do different things in all these games

00:14:52 --> 00:14:56
and there're some of them are kind of

00:14:54 --> 00:14:59
complicated so it's pretty remarkable

00:14:55 --> 00:15:02
that you can just use a simple uh that a

00:14:58 --> 00:15:04
simple algorithm can solve them all um

00:15:01 --> 00:15:07
this the same algorithm can solve them

00:15:03 --> 00:15:11
all uh so since then people have also um

00:15:06 --> 00:15:13
solved or or solv this domain using uh

00:15:10 --> 00:15:15
policy gradients and another algorithm

00:15:12 --> 00:15:18
called

00:15:14 --> 00:15:21
agger um so another big uh

00:15:17 --> 00:15:26
groundbreaking result was um beating a

00:15:20 --> 00:15:28
um a champion level player at go um also

00:15:25 --> 00:15:32
by Deep Mind um using a combination of

00:15:27 --> 00:15:35
um super learning from uh like from

00:15:31 --> 00:15:38
expert games plus policy gradients to

00:15:34 --> 00:15:42
fine-tune the supervised learning policy

00:15:37 --> 00:15:44
um plus Monte Carlo tree search um plus

00:15:41 --> 00:15:46
value functions to make the search work

00:15:43 --> 00:15:49
better so a combination of techniques

00:15:45 --> 00:15:49
and reinforcement

00:15:48 --> 00:15:54
learning um robotic so some of my

00:15:51 --> 00:15:57
colleagues at uh Berkeley had some um

00:15:53 --> 00:15:59
very nice results uh learning in real

00:15:56 --> 00:16:02
time how to do manipulation tasks um

00:15:59 --> 00:16:06
using an algorithm called guided policy

00:16:01 --> 00:16:09
search um using the PR2

00:16:05 --> 00:16:11
robot um and uh some of my colleagues

00:16:08 --> 00:16:16
and I have um been working on robotic

00:16:10 --> 00:16:16
Locomotion um using um policy gradient

00:16:15 --> 00:16:21
methods and uh people have been working

00:16:18 --> 00:16:24
on Locomotion for a while and have been

00:16:20 --> 00:16:26
able to achieve pretty good results uh

00:16:23 --> 00:16:29
using uh very like highly engineered

00:16:25 --> 00:16:31
omain specific methods but um

00:16:28 --> 00:16:34
previously there hadn't been much

00:16:30 --> 00:16:36
success using general methods to solve

00:16:33 --> 00:16:39
it and last uh there have been some

00:16:35 --> 00:16:42
recent results um playing 3D games using

00:16:38 --> 00:16:44
policy gradients um in fact there was

00:16:41 --> 00:16:47
even a contest I heard about a couple

00:16:43 --> 00:16:50
days ago with this new visz Doom uh task

00:16:46 --> 00:16:53
which um is pretty nice so you might

00:16:49 --> 00:16:56
want to check out viz

00:16:52 --> 00:16:59
Doom okay so that's that's it for the

00:16:55 --> 00:17:01
highle overview uh part of this um now

00:16:58 --> 00:17:05
I'm going to start getting into the

00:17:00 --> 00:17:05
actual formalism and the technical

00:17:05 --> 00:17:13
details okay so the basic object uh in

00:17:10 --> 00:17:16
uh the field of reinforcement learning

00:17:12 --> 00:17:19
is the markof decision process um so the

00:17:15 --> 00:17:21
markof decision process is defined by

00:17:18 --> 00:17:23
the following components you have a

00:17:20 --> 00:17:26
state space this is all the different

00:17:22 --> 00:17:28
states of the system uh the action space

00:17:26 --> 00:17:32
these are all the actions the agent can

00:17:27 --> 00:17:35
take and you have um this probability

00:17:31 --> 00:17:37
distribution um which uh which

00:17:34 --> 00:17:39
determines the probability of next date

00:17:36 --> 00:17:43
and reward so R is the reward S Prime is

00:17:38 --> 00:17:44
the next state s and a are the actions

00:17:42 --> 00:17:46
o it's a conditional probability

00:17:43 --> 00:17:48
distribution sometime sometimes people

00:17:45 --> 00:17:49
split this out into a separate reward

00:17:47 --> 00:17:51
function but that's basically an

00:17:48 --> 00:17:54
equivalent

00:17:50 --> 00:17:58
formulation okay and sometimes there's

00:17:53 --> 00:18:00
ome extra objects to find um will

00:17:57 --> 00:18:02
'll be interested in the we'll we'll

00:17:59 --> 00:18:04
consider an an initial State

00:18:01 --> 00:18:07
distribution so this is um the world

00:18:03 --> 00:18:09
starts out in a certain

00:18:06 --> 00:18:11
State and uh the typical optimization

00:18:08 --> 00:18:14
problem you want to solve given this mdp

00:18:10 --> 00:18:17
is to maximize expected cumulative

00:18:13 --> 00:18:19
reward though there are various um ways

00:18:16 --> 00:18:22
of defining that more precisely which

00:18:18 --> 00:18:22
I'll go into uh

00:18:22 --> 00:18:28
later okay so there are various

00:18:25 --> 00:18:30
different settings of reinforcement

00:18:27 --> 00:18:32
learning um where you define a slightly

00:18:29 --> 00:18:34
different optimization problem the one

00:18:31 --> 00:18:38
we'll be most concerned with is called

00:18:33 --> 00:18:40
the episodic setting so here the agents

00:18:37 --> 00:18:44
experience is split up into a um a

00:18:39 --> 00:18:46
series of episodes which have um finite

00:18:43 --> 00:18:49
length so in each

00:18:45 --> 00:18:50
episode uh we first sample the initial

00:18:48 --> 00:18:54
state of the world from some probability

00:18:49 --> 00:18:57
distribution me and then um the agent uh

00:18:53 --> 00:19:01
keeps on acting until um the world ends

00:18:56 --> 00:19:03
up in some terminal state

00:19:00 --> 00:19:06
um so just to give a example of what

00:19:03 --> 00:19:08
erminal States might be like and how an

00:19:05 --> 00:19:12
epis episodic um reinforcement learning

00:19:08 --> 00:19:14
problem might look um so one example is

00:19:11 --> 00:19:16
um when termination is good and you want

00:19:13 --> 00:19:19
o terminate the episode as fast as

00:19:15 --> 00:19:21
possible uh so if we imagine setting up

00:19:18 --> 00:19:23
a task with some kind of Taxi robot that

00:19:20 --> 00:19:25
should get to the destination as fast as

00:19:22 --> 00:19:29
possible then the episode would be like

00:19:24 --> 00:19:30
one trip and uh it's terminate it's

00:19:28 --> 00:19:32
trying to terminate the episode as fast

00:19:29 --> 00:19:36
as

00:19:31 --> 00:19:39
possible um another example is um a

00:19:35 --> 00:19:40
waiter robot um where you have a fixed

00:19:38 --> 00:19:42
length shift but the waiter has to

00:19:39 --> 00:19:44
accumulate it has to do as well as

00:19:41 --> 00:19:47
possible during that shift so there the

00:19:43 --> 00:19:52
pisode has a fixed length um the waiter

00:19:46 --> 00:19:54
has to say maximize tips or uh customer

00:19:51 --> 00:19:56
happiness um and then you could imagine

00:19:53 --> 00:19:58
another kind of task where uh

00:19:55 --> 00:20:00
termination is bad and you want the

00:19:57 --> 00:20:03
pisode to last as long as possible um

00:20:00 --> 00:20:06
so you can view life as an example of

00:20:02 --> 00:20:10
that um but also you could imagine

00:20:05 --> 00:20:12
having a a walking robot um where uh you

00:20:09 --> 00:20:15
want it to walk as far as possible

00:20:11 --> 00:20:15
before it falls

00:20:14 --> 00:20:21
over and in this setting it's pretty

00:20:17 --> 00:20:24
easy to find to Define what the goal is

00:20:20 --> 00:20:25
um to we just want to maximize the

00:20:23 --> 00:20:28
xpectation of the total reward per

00:20:24 --> 00:20:28
episode

00:20:29 --> 00:20:35
okay and the last object we're going to

00:20:31 --> 00:20:37
introduce here is um a policy so the

00:20:34 --> 00:20:40
policy is just the function that the

00:20:36 --> 00:20:42
agent uses to choose its

00:20:39 --> 00:20:45
actions so we have deterministic

00:20:41 --> 00:20:47
policies which are just uh the policy is

00:20:44 --> 00:20:49
denoted by pi so we have the action is

00:20:46 --> 00:20:53
just some function of the state and uh

00:20:49 --> 00:20:56
we also have U stochastic policies where

00:20:52 --> 00:20:56
the policy is a conditional probability

00:20:55 --> 00:21:01
distribution um so here is just we're

00:20:58 --> 00:21:03
just going to make a little bit more

00:21:00 --> 00:21:07
precise um the setting of The episodic

00:21:02 --> 00:21:10
mdp um so first we sample the initial

00:21:06 --> 00:21:14
state from this distribution me um then

00:21:10 --> 00:21:16
we um then we get uh we sample the first

00:21:13 --> 00:21:18
action from the policy a Zer from the

00:21:15 --> 00:21:20
policy then we sample next state and

00:21:17 --> 00:21:23
reward uh from the transition

00:21:19 --> 00:21:26
probability distribution and so on until

00:21:22 --> 00:21:29
we reach a terminal State s subt and

00:21:25 --> 00:21:32
then um the quantity we care about is

00:21:28 --> 00:21:35
the sum of all these rewards r0 plus R1

00:21:31 --> 00:21:38
dot dot dot plus r subt minus one and um

00:21:34 --> 00:21:41
we want to maximize yeah so Ada is Ada

00:21:37 --> 00:21:44
of Pi is just defined as the um expected

00:21:40 --> 00:21:44
total reward of the policy

00:21:44 --> 00:21:50
Pi here's a picture that um illustrates

00:21:47 --> 00:21:53
exactly the same thing so you can look

00:21:49 --> 00:21:53
at it as a graphical

00:21:54 --> 00:22:01
model okay and lastly um in the policy

00:21:58 --> 00:22:03
gradient section in particular we're

00:22:00 --> 00:22:05
going to be interested in parameterized

00:22:02 --> 00:22:09
policies so here we have a parameter

00:22:04 --> 00:22:12
Vector um Theta which specifies U which

00:22:08 --> 00:22:14
specifies exactly what the policy is so

00:22:11 --> 00:22:16
um for example the family of policies

00:22:13 --> 00:22:19
could be just a neural n you have a

00:22:15 --> 00:22:21
certain neural network architecture and

00:22:18 --> 00:22:23
Theta specifies all the weights of this

00:22:20 --> 00:22:23
neural

00:22:23 --> 00:22:28
network so we could have a a

00:22:25 --> 00:22:30
deterministic policy of course or

00:22:27 --> 00:22:33
stochastic policy

00:22:30 --> 00:22:35
um and if you're wondering like

00:22:32 --> 00:22:37
concretely what would a policy look like

00:22:34 --> 00:22:39
I mean how do you use a neural network

00:22:36 --> 00:22:41
to represent your policy it's actually

00:22:38 --> 00:22:42
exactly you do exactly the same thing

00:22:40 --> 00:22:45
you would do if this were a

00:22:41 --> 00:22:49
classification or a regression problem

00:22:44 --> 00:22:52
uh so uh in so s here the state here is

00:22:48 --> 00:22:55
your input and the action is your output

00:22:51 --> 00:22:58
um so um if you have a discrete action

00:22:54 --> 00:23:00
space a discret set of actions um then

00:22:57 --> 00:23:02
um you would use a Network that outputs

00:22:59 --> 00:23:04
a vector of probabilities the

00:23:01 --> 00:23:06
probabilities of the different actions

00:23:03 --> 00:23:09
this is exactly like a

00:23:05 --> 00:23:11
classifier and if you have a continuous

00:23:08 --> 00:23:14
action space um you you would have your

00:23:10 --> 00:23:16
neural network output the mean and uh

00:23:13 --> 00:23:18
the diagonal of a covariance matrix of a

00:23:15 --> 00:23:21
gaussian distribution um so this is just

00:23:17 --> 00:23:22
like you're doing regression so you can

00:23:20 --> 00:23:25
use the same kind of architectures You'

00:23:21 --> 00:23:25
use in supervis

00:23:26 --> 00:23:32
learning okay so that's uh that's just

00:23:29 --> 00:23:35
he that's it for the formalism of

00:23:31 --> 00:23:39
mdps so now I'm going to go into policy

00:23:34 --> 00:23:40
gradient methods which are one uh Broad

00:23:38 --> 00:23:44
and general class of reinforcement

00:23:39 --> 00:23:44
learning methods which are um quite

00:23:44 --> 00:23:50
ffective so to give a brief overview of

00:23:47 --> 00:23:52
this

00:23:49 --> 00:23:55
um here's here's the intuition of what

00:23:51 --> 00:23:57
policy grading methods are going to do

00:23:54 --> 00:24:00
um so here capital R means the sum of

00:23:57 --> 00:24:03
rewards of the whole episode episode um

00:23:59 --> 00:24:05
so our optimization problem is we want

00:24:02 --> 00:24:08
o maximize the expectation of the total

00:24:04 --> 00:24:10
reward um given our parameterized policy

00:24:07 --> 00:24:13
Pi sub

00:24:09 --> 00:24:16
Theta and um the intuition of how our

00:24:12 --> 00:24:17
algorithm is going to work is um we

00:24:15 --> 00:24:19
're going to collect a bunch of

00:24:16 --> 00:24:22
trajectories I mean this is just run a

00:24:18 --> 00:24:23
bunch of episodes using our policy and

00:24:21 --> 00:24:26
then we want to make the good

00:24:22 --> 00:24:27
trajectories more probable so I mean

00:24:25 --> 00:24:29
some of the trajectories were lucky and

00:24:26 --> 00:24:31
they were really good some of them

00:24:28 --> 00:24:34
the agent was unlucky and they were bad

00:24:30 --> 00:24:36
and um The Good the ones that were good

00:24:33 --> 00:24:37
meaning there was high reward um that

00:24:35 --> 00:24:40
means the agent probably took good

00:24:36 --> 00:24:42
actions there so we want to uh increase

00:24:39 --> 00:24:45
the probability of the actions from

00:24:41 --> 00:24:47
those trajectories so um so the most

00:24:44 --> 00:24:49
basic version of uh policy gradient

00:24:46 --> 00:24:51
methods just try to make the good

00:24:48 --> 00:24:52
trajectories more probable without

00:24:50 --> 00:24:54
rying to figure out which were the good

00:24:51 --> 00:24:57
actions and which were the bad actions

00:24:53 --> 00:25:00
um slightly better methods or more um

00:24:56 --> 00:25:01
elaborate methods uh TR to figure out

00:24:59 --> 00:25:03
which actions were good and which ones

00:25:00 --> 00:25:05
were bad and then they try to make the

00:25:02 --> 00:25:08
good actions more

00:25:04 --> 00:25:10
probable and um lastly there's another

00:25:07 --> 00:25:13
class of methods which um which actually

00:25:09 --> 00:25:16
try to push the actions towards better

00:25:12 --> 00:25:17
actions so they differentiate the loss

00:25:15 --> 00:25:19
function with respect to the actions and

00:25:16 --> 00:25:21
they try to push the actions to better

00:25:18 --> 00:25:24
actions um so we're mostly going to talk

00:25:20 --> 00:25:24
about one and two

00:25:26 --> 00:25:31
here oh there's a question

00:25:32 --> 00:25:39
oh uh yeah good question so um well

00:25:36 --> 00:25:42
we're maximizing over the policy we're

00:25:38 --> 00:25:44
trying to find uh the best policy but

00:25:41 --> 00:25:46
here um the policy is assumed to be

00:25:43 --> 00:25:49
parameterized so there's some parameter

00:25:45 --> 00:25:50
Vector Theta that specifies the policy

00:25:48 --> 00:25:52
and now we just want to maximize with

00:25:49 --> 00:25:56
respect to

00:25:51 --> 00:25:56
Theta any other

00:25:55 --> 00:26:02
questions okay

00:25:58 --> 00:26:05
um so there's a very um a very

00:26:01 --> 00:26:06
fundamental fundamental concept which is

00:26:04 --> 00:26:10
called the score function grading

00:26:05 --> 00:26:12
estimator uh which um underlies policy

00:26:09 --> 00:26:13
gradient methods so actually to

00:26:11 --> 00:26:16
introduce this we're not going to talk

00:26:12 --> 00:26:18
about policies and RL at all we're just

00:26:15 --> 00:26:21
going to assume uh we have some

00:26:17 --> 00:26:24
xpectation we have expectation of f ofx

00:26:20 --> 00:26:27
where X is sampled from some uh

00:26:23 --> 00:26:29
parameterized probability

00:26:26 --> 00:26:31
distribution so we want to compute uh

00:26:28 --> 00:26:34
the gring of this expectation with

00:26:30 --> 00:26:36
respect to Theta um so there's a general

00:26:33 --> 00:26:38
formula um that'll do this and the way

00:26:35 --> 00:26:41
ou derive it is you just write the

00:26:37 --> 00:26:44
xpectation as an integral um and then

00:26:40 --> 00:26:46
you just um move some things around uh

00:26:43 --> 00:26:49
you you swap the integral with the

00:26:45 --> 00:26:51
derivative and you um you turn it back

00:26:48 --> 00:26:53
into an expectation and uh what you get

00:26:50 --> 00:26:56
at the end is this bottom line which

00:26:52 --> 00:26:58
says that you take the expectation of

00:26:55 --> 00:27:01
unction value times grad log

00:26:57 --> 00:27:03
probability

00:27:00 --> 00:27:04
uh so the in this is an unbiased

00:27:02 --> 00:27:06
estimator of the

00:27:03 --> 00:27:08
gradient meaning if we get enough

00:27:05 --> 00:27:11
samples it'll Converge on the right

00:27:07 --> 00:27:13
hing um so uh the way you can compute

00:27:10 --> 00:27:15
this estimator meaning the way you can

00:27:12 --> 00:27:19
get a noisy estimate of the grading of

00:27:14 --> 00:27:22
the expectation is you um just collect

00:27:18 --> 00:27:24
one you just get one sample um from this

00:27:21 --> 00:27:27
distribution and then you compute then

00:27:24 --> 00:27:29
you multiply F ofx times grad log

00:27:26 --> 00:27:33
probability

00:27:29 --> 00:27:36
um so uh the only requirement for being

00:27:32 --> 00:27:38
able to use this estimator is uh we need

00:27:35 --> 00:27:40
to be able to compute the probability

00:27:37 --> 00:27:42
density I mean we need to be able to an

00:27:39 --> 00:27:43
alytically compute it and we need to

00:27:41 --> 00:27:49
be able to differentiate it with respect

00:27:42 --> 00:27:49
o Theta and um often it needs to be

00:27:48 --> 00:27:55
differentiable um there's another uh way

00:27:52 --> 00:27:57
of deriving it using important sampling

00:27:54 --> 00:27:59
so you write down the important sampling

00:27:56 --> 00:28:01
estimator for the expectation and then

00:27:58 --> 00:28:04
you just uh swap the derivative with the

00:28:00 --> 00:28:07
xpectation and you get the same

00:28:03 --> 00:28:11
thing okay so so now let me just give a

00:28:06 --> 00:28:11
little bit of intuition about this

00:28:10 --> 00:28:19
estimator oops okay so f ofx is

00:28:14 --> 00:28:21
measuring how good the sample X is um so

00:28:18 --> 00:28:23
that means that so G hat here is our

00:28:20 --> 00:28:27
gradient estimator meaning this is what

00:28:22 --> 00:28:29
we get if we take one sample X subi and

00:28:26 --> 00:28:32
we compute our estimator this is our

00:28:28 --> 00:28:35
estimate of the gradient um so if we

00:28:31 --> 00:28:38
move in Direction Gat um that pushes up

00:28:34 --> 00:28:41
the log probability of our sample xabi

00:28:37 --> 00:28:43
n proportion to how good it is so if we

00:28:40 --> 00:28:45
have really good um if we got a really

00:28:42 --> 00:28:47
good function value then we're going to

00:28:44 --> 00:28:49
try to push up its log probability a lot

00:28:46 --> 00:28:51
and if it was a bad function value then

00:28:48 --> 00:28:55
we're not going to try to push it up

00:28:50 --> 00:28:55
very much so it's pretty simple

00:28:55 --> 00:29:01
intuition um the really nice thing is um

00:28:59 --> 00:29:05
this is valid even if f ofx is

00:29:00 --> 00:29:06
discontinuous or if f ofx is um unknown

00:29:04 --> 00:29:08
meaning you only uh you don't get to

00:29:05 --> 00:29:12
differentiate it you just get to see the

00:29:07 --> 00:29:14
function values um or um the sample

00:29:11 --> 00:29:16
space um is a discrete set so X doesn't

00:29:13 --> 00:29:19
even have to be continuous um and this

00:29:15 --> 00:29:22
um quite uh this is quite remarkable

00:29:18 --> 00:29:24
actually that you don't even need to

00:29:21 --> 00:29:26
have access to the full um you don't

00:29:23 --> 00:29:27
need to know exactly um what the

00:29:25 --> 00:29:29
function is that you're optimizing you

00:29:26 --> 00:29:34
just have to be able to query

00:29:28 --> 00:29:37
um for the function value um and this

00:29:33 --> 00:29:39
means this is a way of um being able to

00:29:36 --> 00:29:41
differentiate um

00:29:38 --> 00:29:44
functions through a system that has

00:29:40 --> 00:29:48
non-differentiable pieces um so for

00:29:43 --> 00:29:50
example in um in robotic Locomotion one

00:29:47 --> 00:29:52
issue is that um you have contacts

00:29:49 --> 00:29:55
between the robot's foot and the ground

00:29:51 --> 00:29:57
and um contact you make and break

00:29:54 --> 00:30:00
contact and that causes a discontinuous

00:29:56 --> 00:30:02
change in the Dynamics um so that makes

00:29:59 --> 00:30:03
it really hard to do smooth optimization

00:30:01 --> 00:30:06
techniques to come up with the right

00:30:02 --> 00:30:08
Behavior so when you use this kind of um

00:30:05 --> 00:30:10
grading estimator along with policy

00:30:07 --> 00:30:14
gradients which I'm going to uh talk

00:30:10 --> 00:30:16
about very soon um you can actually just

00:30:13 --> 00:30:18
uh differentiate you can optimize this

00:30:15 --> 00:30:20
ystem um even though it has

00:30:17 --> 00:30:22
differentiable pieces in

00:30:19 --> 00:30:25
it

00:30:21 --> 00:30:27
okay so

00:30:24 --> 00:30:29
uh okay so here's another little picture

00:30:26 --> 00:30:33
of what's going on so we have our

00:30:28 --> 00:30:35
function f ofx um which we're trying to

00:30:32 --> 00:30:38
maximize the expectation of and then we

00:30:34 --> 00:30:40
have our probability density P ofx um so

00:30:37 --> 00:30:42
we just sample a bunch of values from

00:30:39 --> 00:30:46
our probability density those are the

00:30:41 --> 00:30:47
blue dots on the x axis and um then uh

00:30:45 --> 00:30:50
we

00:30:46 --> 00:30:54
um so then we we look at the function

00:30:49 --> 00:30:56
values and um we're trying to push the

00:30:53 --> 00:30:59
uh probability distribution so that the

00:30:55 --> 00:31:02
probability goes up at um these samples

00:30:58 --> 00:31:05
in proportion to the function value um

00:31:01 --> 00:31:06
so over on the right side of the curve

00:31:04 --> 00:31:09
uh that means we're trying to push that

00:31:05 --> 00:31:10
F uh probability value up really hard

00:31:08 --> 00:31:13
and on the left side we're pushing it up

00:31:10 --> 00:31:15
softly uh so what's going to happen is

00:31:12 --> 00:31:18
the probability density is going to

00:31:14 --> 00:31:21
slide to the right if you can imagine a

00:31:17 --> 00:31:23
sort of physical analogy

00:31:20 --> 00:31:25
there okay so that's that's the score

00:31:22 --> 00:31:29
function gradient estimator this is a

00:31:24 --> 00:31:32
general technique um it can be used in

00:31:28 --> 00:31:35
various machine learning problems

00:31:31 --> 00:31:38
um now we're going to apply it to the

00:31:34 --> 00:31:40
reinforcement learning setting and um

00:31:37 --> 00:31:42
we're going to take our random variable

00:31:39 --> 00:31:45
X to be a whole

00:31:41 --> 00:31:46
trajectory um so the trajectory consists

00:31:44 --> 00:31:50
of State action reward State action

00:31:46 --> 00:31:53
reward and so on until the end of the

00:31:49 --> 00:31:57
pisode and uh now um to get our

00:31:52 --> 00:31:59
gradient estimator uh to get the um uh

00:31:56 --> 00:32:01
to get the gradient of the expected

00:31:58 --> 00:32:04
reward all we've got to do is um compute

00:32:00 --> 00:32:05
the grad log probability uh times the

00:32:03 --> 00:32:09
total

00:32:04 --> 00:32:11
reward so um so this uh probability of

00:32:08 --> 00:32:14
the trajectory that sounds like a really

00:32:10 --> 00:32:17
unfriendly quantity because uh there's

00:32:13 --> 00:32:19
uh a long complicated process that's

00:32:16 --> 00:32:23
generates this trajectory with lots of

00:32:18 --> 00:32:25
uh lots of time steps but um log um okay

00:32:22 --> 00:32:28
so we can write out what this process is

00:32:24 --> 00:32:30
what this probability density is um so

00:32:27 --> 00:32:32
we have uh it's just a product of

00:32:29 --> 00:32:35
probabilities we've got our initial uh

00:32:31 --> 00:32:37
we've got our mu of s0 which is just our

00:32:34 --> 00:32:40
initial State distribution and then

00:32:36 --> 00:32:42
every time step we have um we sample the

00:32:39 --> 00:32:44
action according to Pi and we sample the

00:32:41 --> 00:32:45
next state and reward according to our

00:32:43 --> 00:32:48
Dynamics

00:32:44 --> 00:32:49
model so uh log turns that product into

00:32:47 --> 00:32:53
a

00:32:49 --> 00:32:56
sum and here's the cool part um

00:32:52 --> 00:33:00
everything that doesn't um contain Theta

00:32:55 --> 00:33:02
drops out um so the thing is we didn't

00:32:59 --> 00:33:04
know uh there are parts of this um

00:33:01 --> 00:33:07
probability uh distribution P of to

00:33:03 --> 00:33:09
given Theta that we don't have access to

00:33:06 --> 00:33:10
so if this is reinforcement learning uh

00:33:08 --> 00:33:13
we don't assume that we know the

00:33:09 --> 00:33:16
Dynamics model of the system we just

00:33:12 --> 00:33:21
find out about it by sampling uh by

00:33:15 --> 00:33:23
doing sample doing episodes um so um so

00:33:20 --> 00:33:27
since this uh product turns into a sum

00:33:22 --> 00:33:30
all the the pieces uh like the log uh

00:33:26 --> 00:33:34
log P there and the log me uh which we

00:33:29 --> 00:33:37
don't know just drop out so it doesn't

00:33:33 --> 00:33:40
matter um and uh what we get in the end

00:33:36 --> 00:33:44
is um we get a sum of log probab sum of

00:33:39 --> 00:33:47
uh log probabilities of actions so grad

00:33:43 --> 00:33:51
log Pi of action given

00:33:46 --> 00:33:52
State um so our formula looks like um

00:33:50 --> 00:33:55
our formula for the grading of the

00:33:51 --> 00:33:58
xpectation is just the expectation over

00:33:54 --> 00:33:59
trajectories of um total reward of the

00:33:57 --> 00:34:02
trajectory

00:33:58 --> 00:34:05
times grad um grad of the sum of all the

00:34:01 --> 00:34:05
log

00:34:05 --> 00:34:12
probs so the interpretation of this is

00:34:08 --> 00:34:13
um we're uh taking our good trajectories

00:34:11 --> 00:34:16
and we're trying to increase their

00:34:13 --> 00:34:18
probability in proportion to how good

00:34:15 --> 00:34:20
they are um and you can think of this as

00:34:17 --> 00:34:22
uh being similar to supervised learning

00:34:19 --> 00:34:24
where we treat the good trajectories

00:34:21 --> 00:34:26
with high rewards as um positive

00:34:23 --> 00:34:29
xamples in our supervised learning

00:34:25 --> 00:34:31
problem so we're using those to train

00:34:28 --> 00:34:33
the policy and which actions are good

00:34:30 --> 00:34:36
we're basically treating those actions

00:34:32 --> 00:34:36
as positive

00:34:37 --> 00:34:43
xamples okay now we can improve this

00:34:40 --> 00:34:46
formula a little bit um so that was just

00:34:42 --> 00:34:48
uh the most basic uh I mean this is an

00:34:45 --> 00:34:50
unbiased estimator for the policy

00:34:47 --> 00:34:52
gradient so uh if we just take that

00:34:49 --> 00:34:55
expression inside the expectation on the

00:34:51 --> 00:34:58
right hand side and we take one sample

00:34:54 --> 00:34:59
of that it has the right mean so if we

00:34:57 --> 00:35:00
just get enough of them we're going to

00:34:58 --> 00:35:03
get the policy

00:34:59 --> 00:35:06
gradient um okay so that's um but we can

00:35:02 --> 00:35:07
also write down some other formulas uh

00:35:05 --> 00:35:09
that have the same mean but have lower

00:35:07 --> 00:35:12
variance so we can come up with better

00:35:08 --> 00:35:13
estimators for the policy gradient um

00:35:11 --> 00:35:15
and that's actually quite important

00:35:12 --> 00:35:18
because the one from the previous slide

00:35:14 --> 00:35:20
is really bad when you have uh a long a

00:35:17 --> 00:35:22
large number of time steps meaning it

00:35:19 --> 00:35:25
has really high

00:35:21 --> 00:35:27
variance so uh the first thing we can do

00:35:24 --> 00:35:29
is you uh we can use the temporal

00:35:26 --> 00:35:32
structure of the problem

00:35:28 --> 00:35:34
um by the way to derive these next bunch

00:35:31 --> 00:35:35
of formulas it just takes a bunch of

00:35:33 --> 00:35:38
really straightforward manipulation

00:35:34 --> 00:35:39
where you move around expectations um

00:35:37 --> 00:35:42
and I'm not going to go through all the

00:35:38 --> 00:35:45
math um but uh I'll just say what the

00:35:41 --> 00:35:45
formulas

00:35:44 --> 00:35:51
are so um okay so we can repeat the same

00:35:48 --> 00:35:53
argument from the previous slide um to

00:35:50 --> 00:35:56
just derive the gradient estimator for a

00:35:52 --> 00:35:59
single reward term so we end up with

00:35:55 --> 00:36:00
at reward term times the grad some of

00:35:58 --> 00:36:03
log

00:35:59 --> 00:36:06
probs and just summing over that we get

00:36:02 --> 00:36:09
a new formula um where we're not

00:36:05 --> 00:36:11
multiplying the sum of the the grad log

00:36:08 --> 00:36:14
prob of the whole thing times the sum of

00:36:10 --> 00:36:17
all rewards now um so let's look at that

00:36:13 --> 00:36:20
bottom formula um now we have a sum over

00:36:16 --> 00:36:22
time of grad log probability of the

00:36:19 --> 00:36:26
action at time that time times the sum

00:36:21 --> 00:36:28
of future rewards um so so now I mean in

00:36:25 --> 00:36:30
the formula from the previous slide we

00:36:27 --> 00:36:32
would have had all the rewards in that

00:36:29 --> 00:36:35
sum um but now we just have the future

00:36:31 --> 00:36:37
wards and um that kind of makes sense

00:36:34 --> 00:36:40
because um an action can't affect the

00:36:36 --> 00:36:42
probability of the um previous rewards

00:36:39 --> 00:36:44
uh so to figure out if the action is

00:36:41 --> 00:36:47
good we should have only we should only

00:36:43 --> 00:36:49
be looking at the future

00:36:46 --> 00:36:51
wards so this is a slightly better

00:36:48 --> 00:36:53
formula than the one on the previous

00:36:50 --> 00:36:58
lide meaning it has this exact same

00:36:52 --> 00:37:00
an um except uh different uh the expr

00:36:57 --> 00:37:03
inside the expectation there has lower

00:36:59 --> 00:37:06
variance um and we can further reduce

00:37:02 --> 00:37:09
the variance by introducing a

00:37:05 --> 00:37:12
baseline um so now uh we can take any

00:37:08 --> 00:37:15
old function uh B which takes in a state

00:37:11 --> 00:37:19
and it outputs a real number and um we

00:37:14 --> 00:37:22
can subtract it from our sum of future

00:37:18 --> 00:37:26
wards and um we didn't affect the mean

00:37:21 --> 00:37:29
of the um estimator at all so we yeah we

00:37:25 --> 00:37:32
didn't change uh the expect At All by

00:37:28 --> 00:37:32
introducing this

00:37:32 --> 00:37:38
Baseline um so yeah for any choice of B

00:37:34 --> 00:37:39
this gives us an unbiased estimator by

00:37:37 --> 00:37:42
the way if you're not that familiar with

00:37:38 --> 00:37:46
e terminology of estimators what I'm

00:37:41 --> 00:37:48
saying is uh we have a um expectation um

00:37:45 --> 00:37:51
on the right hand side of that for uh

00:37:47 --> 00:37:52
formula uh and uh the quantity inside

00:37:50 --> 00:37:55
that expectation is What's called the

00:37:51 --> 00:37:57
stimator and um if we get a bunch of

00:37:54 --> 00:37:59
samples uh then we can get an estimate

00:37:56 --> 00:38:00
of um

00:37:58 --> 00:38:02
of the thing on the left hand side which

00:37:59 --> 00:38:05
is what we care

00:38:01 --> 00:38:08
about so um so when I say it's an

00:38:04 --> 00:38:09
unbiased estimator that just means that

00:38:07 --> 00:38:11
well that just means that this equation

00:38:08 --> 00:38:12
is correct meaning that the thing on the

00:38:10 --> 00:38:14
right hand side equals the thing on the

00:38:12 --> 00:38:17
left hand

00:38:13 --> 00:38:20
side um so yeah this works for any

00:38:16 --> 00:38:23
choice of Baseline and um a near optimal

00:38:19 --> 00:38:26
choice is to use the expected return so

00:38:22 --> 00:38:26
the expected sum of future

00:38:26 --> 00:38:33
wards and uh the interpretation of

00:38:28 --> 00:38:35
that is um if we took an action we only

00:38:32 --> 00:38:37
want to increase the probability of the

00:38:34 --> 00:38:40
action if it was a good action um so how

00:38:36 --> 00:38:42
do we tell if it was a good action well

00:38:39 --> 00:38:44
the sum of rewards after that action

00:38:41 --> 00:38:47
should have been better than expected um

00:38:43 --> 00:38:49
so the B ofs is the expected sum of

00:38:46 --> 00:38:50
rewards and we're just taking the

00:38:48 --> 00:38:53
difference between the measured thing

00:38:49 --> 00:38:53
and the expected

00:38:53 --> 00:38:58
thing yeah

00:38:55 --> 00:39:01
okay so uh that's

00:38:58 --> 00:39:04
okay that's the that that was a pretty

00:39:00 --> 00:39:06
key thing for variance reduction um and

00:39:03 --> 00:39:08
I'm going to introduce one last um

00:39:05 --> 00:39:09
variance reduction technique and

00:39:07 --> 00:39:12
actually all three of these are really

00:39:08 --> 00:39:14
important so um basically nothing's

00:39:11 --> 00:39:15
going to work um except for maybe really

00:39:13 --> 00:39:19
small scale problems unless you do these

00:39:14 --> 00:39:22
things um so the last variance reduction

00:39:18 --> 00:39:25
technique is to to use discounts um

00:39:21 --> 00:39:27
so um the discount Factor um ignores

00:39:24 --> 00:39:30
delayed effects between actions and

00:39:26 --> 00:39:31
Rewards so what we we're going to do

00:39:29 --> 00:39:34
here looks kind of like a hack but

00:39:30 --> 00:39:37
here's an explanation for it um which

00:39:33 --> 00:39:38
is instead of taking the sum of rewards

00:39:36 --> 00:39:42
uh we're going to take a discounted sum

00:39:37 --> 00:39:45
of rewards meaning that um we uh we add

00:39:41 --> 00:39:49
this exponential Factor uh gamma so that

00:39:44 --> 00:39:51
um when so when we're multiplying the

00:39:48 --> 00:39:54
grad log probability by some future

00:39:50 --> 00:39:57
award uh we multiply it by some uh

00:39:53 --> 00:40:00
quantity that decays with time so people

00:39:56 --> 00:40:03
typically use like gamma equals 99 or

00:39:59 --> 00:40:06
gamma equals 095 uh so that means like

00:40:02 --> 00:40:09
if you Ed 099 that means after 100 time

00:40:05 --> 00:40:12
steps um you're going to be um uh you're

00:40:08 --> 00:40:15
going to be reducing the reward by a

00:40:11 --> 00:40:19
factor of one over e so um so you're

00:40:14 --> 00:40:21
xponentially um you're decaying the um

00:40:18 --> 00:40:25
effect of the future rewards and the

00:40:20 --> 00:40:26
intuition is that um an action uh the

00:40:24 --> 00:40:29
action shouldn't affect rewards really

00:40:26 --> 00:40:33
far in the future like the system should

00:40:28 --> 00:40:34
um the s u the like the assumption is

00:40:32 --> 00:40:36
that the system doesn't have really

00:40:33 --> 00:40:39
long-term memory and it's sort of resets

00:40:35 --> 00:40:41
it's or or the there aren't effect the

00:40:38 --> 00:40:44
ffects aren't that far delayed uh so

00:40:40 --> 00:40:48
you can just ignore um the interaction

00:40:43 --> 00:40:49
between action and a a reward way way in

00:40:47 --> 00:40:52
the

00:40:48 --> 00:40:54
future that's the uh intuition um so now

00:40:51 --> 00:40:55
instead of taking the Baseline to be the

00:40:53 --> 00:40:58
xpected sum of future rewards we want

00:40:54 --> 00:40:59
o do a discounted sum uh so now were

00:40:57 --> 00:41:03
measuring if the action was better than

00:40:58 --> 00:41:05
expected according to this um like the

00:41:02 --> 00:41:08
according to the discounted

00:41:04 --> 00:41:10
sum um and now there's a more General

00:41:07 --> 00:41:12
class of formulas that looks like the

00:41:09 --> 00:41:13
one that I just wrote so this this one

00:41:11 --> 00:41:16
that's on the top of the slide is pretty

00:41:13 --> 00:41:18
good and um this is like almost as good

00:41:15 --> 00:41:22
as anything you're going to do to within

00:41:17 --> 00:41:24
a small constant Factor uh but um

00:41:21 --> 00:41:28
there's there's a more General class of

00:41:23 --> 00:41:31
ormulas that um look like um grad log

00:41:27 --> 00:41:33
probability times uh some quantity a hat

00:41:30 --> 00:41:36
which we call the advantage estimate and

00:41:32 --> 00:41:38
this is in general just going to be um

00:41:35 --> 00:41:41
an estimate of um this is an it has a

00:41:38 --> 00:41:44
more a precise definition which is how

00:41:40 --> 00:41:47
much uh how like how much was this

00:41:43 --> 00:41:50
action um better than the um average

00:41:46 --> 00:41:52
action taken by the policy but in but

00:41:49 --> 00:41:53
informally this just means how much

00:41:51 --> 00:41:57
better was the action then

00:41:52 --> 00:41:58
expected so and and this formula makes a

00:41:56 --> 00:41:59
lot of sense because we we want to

00:41:57 --> 00:42:01
increase the probability of the good

00:41:58 --> 00:42:04
actions and de decrease the probability

00:42:00 --> 00:42:06
of the bad ones so we should um we

00:42:03 --> 00:42:09
should increase it in proportion to the

00:42:05 --> 00:42:09
goodness of the

00:42:09 --> 00:42:14
action okay so just to summarize so I

00:42:12 --> 00:42:15
just told you there's this gradient

00:42:13 --> 00:42:17
estimator meaning there's this

00:42:14 --> 00:42:19
expression you can compute which gives

00:42:16 --> 00:42:20
you a noisy estimate of the policy

00:42:18 --> 00:42:23
gradient so how do you actually turn

00:42:19 --> 00:42:28
this into an algorithm uh so this is

00:42:22 --> 00:42:30
illy algorithm s uh so um so here's

00:42:27 --> 00:42:33
what the algorithm looks like it's

00:42:29 --> 00:42:36
pretty much what you'd expect uh you um

00:42:32 --> 00:42:38
you take your policy um you initialize

00:42:35 --> 00:42:41
your policy parameter and your Baseline

00:42:37 --> 00:42:46
function um you uh for each it each

00:42:40 --> 00:42:48
iteration you um execute the um the uh

00:42:45 --> 00:42:52
current policy to get a bunch of whole

00:42:47 --> 00:42:54
pisodes meaning whole trajectories and

00:42:51 --> 00:42:56
um each time step in the each trajectory

00:42:53 --> 00:42:58
ou should compute the return meaning

00:42:55 --> 00:43:00
the sum of rewards following that time

00:42:57 --> 00:43:02
step the sum of discounted rewards and

00:42:59 --> 00:43:05
the advantage estimate which is um the

00:43:01 --> 00:43:08
sum of discounted rewards minus the

00:43:04 --> 00:43:10
Baseline uh then you refit the Baseline

00:43:07 --> 00:43:14
by trying to um make the Baseline

00:43:09 --> 00:43:16
function equal the returns uh and then

00:43:13 --> 00:43:18
um you update the policy using a policy

00:43:15 --> 00:43:20
gradient estimator so you're just doing

00:43:17 --> 00:43:23
SGD while updating the Baseline as you

00:43:19 --> 00:43:23
go

00:43:24 --> 00:43:33
along yeah so that's that's the vanilla

00:43:27 --> 00:43:36
policy gradient algorithm um and this is

00:43:32 --> 00:43:38
um I'll briefly talk this has been used

00:43:35 --> 00:43:40
to obtain some pretty good results so

00:43:37 --> 00:43:43
it's not um that bad of an algorithm but

00:43:39 --> 00:43:46
um there there several different

00:43:42 --> 00:43:46
directions that it can be

00:43:46 --> 00:43:53
improved so one one uh issue that you

00:43:49 --> 00:43:55
run into um is with step sizes um so in

00:43:52 --> 00:43:58
supervised learning step sizes aren't

00:43:54 --> 00:44:01
hat big of a deal um

00:43:57 --> 00:44:04
because uh maybe you take too big of a

00:44:00 --> 00:44:07
step um but that's okay um you'll fix it

00:44:03 --> 00:44:09
he next update and um your uh current

00:44:06 --> 00:44:10
function your current classifier for

00:44:08 --> 00:44:13
example doesn't affect what inputs

00:44:09 --> 00:44:16
you're getting so even if you just um

00:44:12 --> 00:44:17
are doing really uh even if your network

00:44:15 --> 00:44:19
is just kind of thrashing around for a

00:44:16 --> 00:44:21
while because you're taking too big

00:44:18 --> 00:44:24
steps uh that's not going to cause any

00:44:20 --> 00:44:28
problems um but

00:44:24 --> 00:44:29
um uh yeah and reinfor so yeah so step

00:44:27 --> 00:44:32
sizes aren't that big of a deal you can

00:44:28 --> 00:44:33
just anal them uh you can start off with

00:44:31 --> 00:44:37
a large step size and anal them down to

00:44:32 --> 00:44:39
zero and that um works pretty well um in

00:44:36 --> 00:44:41
reinforcement learning if you take too

00:44:38 --> 00:44:43
big of a step you might wreck your

00:44:40 --> 00:44:45
policy um and even if you don't actually

00:44:42 --> 00:44:48
change the network that much so you

00:44:44 --> 00:44:50
don't lose all your nice features um you

00:44:47 --> 00:44:52
might just change its Behavior a

00:44:49 --> 00:44:54
little too much and now it's going to do

00:44:51 --> 00:44:56
something totally different and visit a

00:44:53 --> 00:44:59
totally different part of State space um

00:44:55 --> 00:45:00
so since in reinforcement learning the

00:44:58 --> 00:45:02
system is stateful and your state

00:44:59 --> 00:45:06
distribution depends on your policy that

00:45:01 --> 00:45:09
makes that like brings uh a really a

00:45:05 --> 00:45:11
different problem and uh now like after

00:45:08 --> 00:45:12
you took that step the next batch of

00:45:10 --> 00:45:14
data you're going to get was collected

00:45:11 --> 00:45:19
by the bad policy and now you're never

00:45:13 --> 00:45:19
going to recover because you just forgot

00:45:18 --> 00:45:25
everything

00:45:20 --> 00:45:27
yeah so um One Way um that uh my

00:45:24 --> 00:45:30
colleagues and I well one way to fix

00:45:26 --> 00:45:32
this is to try to um to try to stop the

00:45:29 --> 00:45:35
basically try to stop the policy from

00:45:31 --> 00:45:37
taking too big of a step so um you can

00:45:34 --> 00:45:40
look at the K Divergence between the um

00:45:36 --> 00:45:41
old policy and the new policy um like

00:45:39 --> 00:45:44
before the update and after the update

00:45:41 --> 00:45:45
and make sure that um the uh

00:45:43 --> 00:45:47
distributions aren't that different so

00:45:44 --> 00:45:49
you're not taking too big of a step it's

00:45:46 --> 00:45:50
kind of an obvious thing to do uh so my

00:45:48 --> 00:45:53
colleagues and I developed an algorithm

00:45:49 --> 00:45:55
called trust region policy optimization

00:45:52 --> 00:45:57
um which looks at the yeah looks at the

00:45:54 --> 00:46:00
action distributions and tries to make

00:45:56 --> 00:46:03
sure the K Divergence isn't too large

00:45:59 --> 00:46:05
and uh there's this is very closely

00:46:02 --> 00:46:09
related to previous meth natural policy

00:46:04 --> 00:46:11
gradient methods which uh which are

00:46:08 --> 00:46:14
based on um which are doing something

00:46:10 --> 00:46:18
similar but usually it's not um set up

00:46:13 --> 00:46:18
as a hard constraint on the K

00:46:19 --> 00:46:26
Divergence so another um type of

00:46:22 --> 00:46:29
extension of policy gradient methods is

00:46:25 --> 00:46:32
um to do more uh to use value uh value

00:46:28 --> 00:46:34
functions to do um more variance

00:46:31 --> 00:46:38
reduction um instead of just using them

00:46:33 --> 00:46:40
as a baseline you can also um you can

00:46:37 --> 00:46:43
use them more aggressively and introduce

00:46:39 --> 00:46:46
some bias um so I won't go into the

00:46:42 --> 00:46:50
details in this talk um but um sometimes

00:46:45 --> 00:46:50
these are called actor critic methods

00:46:51 --> 00:46:58
um there's also another type of approach

00:46:54 --> 00:47:01
which I briefly touched on in the um

00:46:57 --> 00:47:02
earlier slide um where instead of just

00:47:00 --> 00:47:04
rying to increase the probability of

00:47:01 --> 00:47:05
the good actions you actually

00:47:03 --> 00:47:07
differentiate your loss with respect to

00:47:04 --> 00:47:09
the actions um this is like the

00:47:06 --> 00:47:12
reparameterization trick which is used

00:47:08 --> 00:47:14
um for um like for density modeling and

00:47:11 --> 00:47:17
unsupervised learning

00:47:14 --> 00:47:19
um so uh here you're trying to instead

00:47:16 --> 00:47:21
of just increasing the probability of

00:47:18 --> 00:47:23
the good actions you're trying to push

00:47:20 --> 00:47:26
the actions towards better

00:47:22 --> 00:47:29
actions and I'd say both of these bullet

00:47:25 --> 00:47:32
points um you're um potentially

00:47:28 --> 00:47:34
decreasing your variance a lot but at

00:47:31 --> 00:47:36
he cost of increasing bias so it's

00:47:33 --> 00:47:38
actually U makes the algorithms a little

00:47:35 --> 00:47:41
harder to um like to understand and to

00:47:37 --> 00:47:43
get them working because um with high

00:47:40 --> 00:47:45
variance if you just uh crank up the

00:47:42 --> 00:47:47
amount of data you can always drive your

00:47:44 --> 00:47:50
variants down as much as you want but

00:47:46 --> 00:47:51
with bias even if no matter how much

00:47:49 --> 00:47:53
data you get you're not going to get rid

00:47:50 --> 00:47:55
of the bias so if your grading is

00:47:52 --> 00:47:59
pointing in the wrong direction then

00:47:54 --> 00:47:59
you're not going to learn anything

00:47:59 --> 00:48:05
okay so now uh that that's it for the

00:48:01 --> 00:48:07
policy gradient section of this um this

00:48:04 --> 00:48:10
talk um so I wanted to show a quick

00:48:06 --> 00:48:12
video of uh some work that my colleagues

00:48:09 --> 00:48:15
and I did on learning Locomotion

00:48:11 --> 00:48:18
controllers with policy gradient methods

00:48:14 --> 00:48:20
which I think um well I found pretty

00:48:17 --> 00:48:23
exciting when I saw it uh

00:48:19 --> 00:48:26
so hopefully

00:48:22 --> 00:48:29
it's you find it

00:48:25 --> 00:48:31
interesting so here what we've got is a

00:48:28 --> 00:48:33
um humanoid a

00:48:30 --> 00:48:36
simulated let's see it okay yeah it's a

00:48:32 --> 00:48:38
simulated humanoid robot um in a physics

00:48:35 --> 00:48:40
imulator a realistic physics simulator

00:48:37 --> 00:48:43
called

00:48:39 --> 00:48:46
Moko and uh it has a neural network

00:48:42 --> 00:48:49
policy uh which takes in um The Joint

00:48:45 --> 00:48:50
angles of the robot and uh maybe some

00:48:48 --> 00:48:52
and a little bit of other kinematic

00:48:49 --> 00:48:55
information like joint it's got joint

00:48:51 --> 00:48:57
velocities and also um positions of the

00:48:54 --> 00:48:59
different um Links of the robot so

00:48:56 --> 00:49:02
that's what the input is it's pretty

00:48:58 --> 00:49:05
much the raw um state of the robot like

00:49:01 --> 00:49:07
no clever feature engineering there and

00:49:04 --> 00:49:10
um the output is going to be the joint

00:49:06 --> 00:49:12
orqus which are set 100 times a second

00:49:09 --> 00:49:15
so we're just mapping from joint angles

00:49:11 --> 00:49:15
to joint

00:49:14 --> 00:49:20
orqus and uh we Define a reward

00:49:16 --> 00:49:22
function which is to move forward as

00:49:19 --> 00:49:27
fast as possible so it gets a reward for

00:49:21 --> 00:49:30
moving forward and um it gets a uh so um

00:49:26 --> 00:49:31
the episode ends when it its head goes

00:49:29 --> 00:49:33
below a certain height meaning it fell

00:49:30 --> 00:49:35
over so that's basically the setup there

00:49:33 --> 00:49:39
was a little bit of tweaking for the

00:49:35 --> 00:49:41
reward function but um not too extensive

00:49:38 --> 00:49:44
um

00:49:40 --> 00:49:44
so

00:49:50 --> 00:49:56
whoops yeah so you can see first it just

00:49:53 --> 00:49:59
Falls forward a lot of times and then

00:49:55 --> 00:50:04
slowly it starts to develop a uh half

00:49:58 --> 00:50:04
decent looking walk and

00:50:03 --> 00:50:09
uh eventually it gets it down pretty

00:50:05 --> 00:50:11
well and at the very end of this um it

00:50:08 --> 00:50:14
could just keep running uh indefinitely

00:50:10 --> 00:50:15
so I think it was actually stable in a

00:50:13 --> 00:50:17
strong sense meaning I could just leave

00:50:14 --> 00:50:18
it for 15 minutes and it wouldn't fall

00:50:16 --> 00:50:22
over it would just keep

00:50:17 --> 00:50:25
going so uh here's another um robot

00:50:21 --> 00:50:27
model that um we just created without

00:50:24 --> 00:50:30
oo much thought I mean we just decided

00:50:27 --> 00:50:32
to put a bunch of legs on this thing um

00:50:29 --> 00:50:36
and uh so we don't even know how this

00:50:32 --> 00:50:38
thing is supposed to walk um and uh just

00:50:35 --> 00:50:40
give it to the same algorithm and it

00:50:37 --> 00:50:42
just figures out some kind of crazy way

00:50:39 --> 00:50:44
to walk

00:50:41 --> 00:50:46
um so that's the nice thing about

00:50:43 --> 00:50:49
reinforcement learning uh you don't even

00:50:45 --> 00:50:51
eed to know what you want it to do um I

00:50:48 --> 00:50:54
think this is also the physics are a

00:50:50 --> 00:50:54
little unrealistic here

00:50:55 --> 00:51:01
but here we set up up we used this um a

00:50:57 --> 00:51:03
similar model to the one in the first uh

00:51:00 --> 00:51:05
demo but uh here we just give it a

00:51:02 --> 00:51:07
reward for having its head at a certain

00:51:04 --> 00:51:09
height so there's a re word telling it

00:51:06 --> 00:51:11
o get its head up as high as possible

00:51:08 --> 00:51:13
and then it figures out how to get up

00:51:10 --> 00:51:13
off the

00:51:14 --> 00:51:21
ground oh let's see um I have I have low

00:51:18 --> 00:51:25
battery uh does anyone have a charger

00:51:21 --> 00:51:25
that I could

00:51:28 --> 00:51:33
oh thanks a lot you're a

00:51:42 --> 00:51:47
lifesaver okay any questions about

00:51:44 --> 00:51:49
policy gradients before I move on to the

00:51:46 --> 00:51:49
next

00:51:50 --> 00:51:55
part m

00:51:56 --> 00:52:02
oh yeah so the question was is the

00:51:58 --> 00:52:03
system time invariant uh yes the that's

00:52:02 --> 00:52:06
assumed that it's

00:52:05 --> 00:52:10
tationary oh right and also that it

00:52:07 --> 00:52:12
doesn't change from one episode to the

00:52:09 --> 00:52:14
next of course in some real world

00:52:11 --> 00:52:15
problems that might not be the case so

00:52:13 --> 00:52:16
that's I think that's also an

00:52:14 --> 00:52:19
interesting problem setting where you

00:52:16 --> 00:52:19
have a non-stationary

00:52:24 --> 00:52:29
environment um so the question question

00:52:26 --> 00:52:31
was uh for the Baseline to learn a good

00:52:28 --> 00:52:33
Baseline uh do you need to know the

00:52:30 --> 00:52:35
Dynamics of the system um so no you can

00:52:32 --> 00:52:38
just learn it by doing

00:52:35 --> 00:52:39
regression you just uh estimate the

00:52:37 --> 00:52:41
mpirical returns and then you do

00:52:38 --> 00:52:45
regression to try to uh fit a function

00:52:40 --> 00:52:45
to that

00:53:09 --> 00:53:15
yeah so the question is

00:53:11 --> 00:53:17
um there's a discount factor which um

00:53:14 --> 00:53:20
causes the um which should cause the

00:53:17 --> 00:53:22
policy to disregard any effects that are

00:53:19 --> 00:53:25
delayed by more than a 100 time steps so

00:53:21 --> 00:53:27
um how does it still work that this guy

00:53:24 --> 00:53:29
learns how to stand up um even though

00:53:26 --> 00:53:32
that might take more than 100 time steps

00:53:28 --> 00:53:34
is that correct yeah um so yeah you're

00:53:31 --> 00:53:36
right um and in fact I would say that

00:53:33 --> 00:53:38
hese methods um aren't guaranteed to

00:53:36 --> 00:53:42
work well if you have more than a 100

00:53:37 --> 00:53:44
time steps uh so sometimes they work

00:53:41 --> 00:53:46
anyway often they work anyway but

00:53:43 --> 00:53:47
here's no guarantee um so I think

00:53:45 --> 00:53:49
there's actually something pretty

00:53:46 --> 00:53:51
fundamental missing in how uh like how

00:53:48 --> 00:53:54
to deal with really long time scales and

00:53:50 --> 00:53:55
people have recently been thinking about

00:53:53 --> 00:53:58
hierarchical reinforcement learning

00:53:54 --> 00:54:00
where you have um different levels of uh

00:53:57 --> 00:54:03
detail of the system where you might

00:53:59 --> 00:54:06
have a like one level of description

00:54:02 --> 00:54:07
where you have a um like a short time a

00:54:05 --> 00:54:10
small time step and then you have

00:54:06 --> 00:54:12
successively larger time steps and uh

00:54:09 --> 00:54:14
you can that allows you to plan over

00:54:11 --> 00:54:15
much longer Horizons um so that's

00:54:13 --> 00:54:17
omething that's currently in active

00:54:14 --> 00:54:19
area of research but yeah I would say

00:54:16 --> 00:54:21
that none of these methods are going to

00:54:18 --> 00:54:24
um do are guaranteed to do anything

00:54:20 --> 00:54:27
reasonable if you have uh more than one

00:54:23 --> 00:54:30
over one minus gamma time steps uh

00:54:26 --> 00:54:30
between action and

00:54:34 --> 00:54:40
reward oh yeah so in this kind of task

00:54:37 --> 00:54:43
if you introduced terrain or something

00:54:39 --> 00:54:45
could it uh I think if it didn't if you

00:54:42 --> 00:54:47
didn't train it to deal with terrain

00:54:44 --> 00:54:49
then it um then it might fail it

00:54:46 --> 00:54:51
probably would fail actually I don't

00:54:48 --> 00:54:53
hink it would fail because uh the funny

00:54:50 --> 00:54:56
thing about these policies are actually

00:54:52 --> 00:54:58
really robust because um you train them

00:54:55 --> 00:55:00
with the stochastic policy policy um so

00:54:57 --> 00:55:04
there's a lot of noise being generated

00:54:59 --> 00:55:07
by the policy itself um so in practice

00:55:03 --> 00:55:09
uh it's um it's actually so it's able to

00:55:06 --> 00:55:11
deal with huge noise introduced by the

00:55:08 --> 00:55:14
policy and as a result um I found that

00:55:10 --> 00:55:16
if you um change the Dynamics parameters

00:55:13 --> 00:55:18
a little it can usually still work but

00:55:15 --> 00:55:19
yeah there's no guarantee that it'll do

00:55:17 --> 00:55:22
anything if you give it something you

00:55:18 --> 00:55:24
didn't train it for um I I think that

00:55:21 --> 00:55:25
you probably could train it um this do

00:55:23 --> 00:55:27
the same kind of training with uh

00:55:24 --> 00:55:32
terrain I didn't have any terrain so I

00:55:26 --> 00:55:32
didn't try it but that would be nice to

00:55:31 --> 00:55:37
try okay I'm going to move on to the

00:55:34 --> 00:55:40
next part of the talk uh feel free if

00:55:36 --> 00:55:40
you have more questions to find me

00:55:46 --> 00:55:51
afterwards okay so now I'm going to talk

00:55:48 --> 00:55:54
about a different uh type of

00:55:50 --> 00:55:58
reinforcement learning

00:55:53 --> 00:56:00
algorithm so okay so these uh

00:55:57 --> 00:56:02
so the previous kind of methods are

00:55:59 --> 00:56:05
distinguished by the fact that they

00:56:01 --> 00:56:06
learn they explicitly represent a policy

00:56:04 --> 00:56:08
which is the function that chooses your

00:56:05 --> 00:56:11
actions and they try to optimize it with

00:56:07 --> 00:56:12
respect to the parameters of the policy

00:56:10 --> 00:56:15
um so the nice thing about the policy

00:56:12 --> 00:56:16
gradient methods we just talked about is

00:56:14 --> 00:56:19
that you're optimizing the thing you

00:56:16 --> 00:56:21
care about um so and you're optimizing

00:56:18 --> 00:56:23
it with gradient descent so that makes

00:56:20 --> 00:56:26
it kind of easy to understand what's

00:56:22 --> 00:56:27
going on um because if you take if

00:56:25 --> 00:56:29
you're getting the proper grading

00:56:26 --> 00:56:31
estimate and you take small enough steps

00:56:28 --> 00:56:32
then you should be improving I mean of

00:56:30 --> 00:56:36
course you still could get stuck in a

00:56:31 --> 00:56:37
local minimum but at least uh or you get

00:56:35 --> 00:56:39
stuck in a bad local minimum but at

00:56:36 --> 00:56:41
least it's a local minimum and you can

00:56:38 --> 00:56:44
use the our understanding of

00:56:40 --> 00:56:47
optimization to figure out what's going

00:56:43 --> 00:56:49
on so these next class of methods are a

00:56:46 --> 00:56:51
little different because um they're not

00:56:48 --> 00:56:52
optimizing the policy directly uh

00:56:50 --> 00:56:56
they're learning something else called a

00:56:51 --> 00:56:57
q function uh which measures how good um

00:56:55 --> 00:57:00
State action pairs are are so it

00:56:56 --> 00:57:02
measures um I'll I'll say that more

00:56:59 --> 00:57:05
formally L later but it's just measuring

00:57:01 --> 00:57:10
how good the actions are um

00:57:04 --> 00:57:14
and uh these methods are actually um the

00:57:09 --> 00:57:17
se are um able to ex exactly solve um

00:57:13 --> 00:57:19
dps efficiently in uh the setting where

00:57:16 --> 00:57:21
you have a finite number of states and

00:57:18 --> 00:57:23
actions um so these are these are the

00:57:20 --> 00:57:26
preferred methods for exactly solving

00:57:22 --> 00:57:30
them in in those settings um but um you

00:57:25 --> 00:57:34
can apply them uh with um continuous

00:57:29 --> 00:57:36
States and actions and um using um using

00:57:33 --> 00:57:37
expressive function approximators like

00:57:35 --> 00:57:39
neural

00:57:36 --> 00:57:41
networks but it's a little harder to

00:57:38 --> 00:57:43
understand um what's going on in these

00:57:40 --> 00:57:44
methods like when they're going to work

00:57:42 --> 00:57:49
and when they're not going to

00:57:43 --> 00:57:52
work so um I'll Define um the relevant

00:57:48 --> 00:57:55
quantities here uh so the Q function is

00:57:51 --> 00:57:57
defined as uh the expected sum of

00:57:54 --> 00:58:00
rewards um when we condition on

00:57:56 --> 00:58:03
the first state and the first action um

00:57:59 --> 00:58:08
so we're conditioning on s0 equals s a0

00:58:02 --> 00:58:10
equals a and we're um we're and the Q

00:58:07 --> 00:58:12
function is the expected discounted sum

00:58:09 --> 00:58:14
of rewards uh when we're acting under

00:58:11 --> 00:58:16
the policy

00:58:13 --> 00:58:19
Pi

00:58:15 --> 00:58:22
so um by convention I'm starting out

00:58:19 --> 00:58:26
with uh time Step Zero I could have also

00:58:21 --> 00:58:29
said that um we're taking RT plus RT + 1

00:58:25 --> 00:58:31
plus RT plus two and so on uh but since

00:58:28 --> 00:58:34
we're assuming the system is stationary

00:58:30 --> 00:58:35
it should be exactly the same so just by

00:58:33 --> 00:58:38
convention I'm going to say that the

00:58:34 --> 00:58:41
first I'm going to always use time Z 1

00:58:37 --> 00:58:43
two three and so on Just for ease of

00:58:40 --> 00:58:45
notation so the Q function is just

00:58:42 --> 00:58:48
elling you how good and this state

00:58:45 --> 00:58:50
action pair is under your current policy

00:58:47 --> 00:58:54
um the value function well the state

00:58:49 --> 00:58:58
value function usually called V is uh

00:58:53 --> 00:59:00
just um conditioning on the state

00:58:57 --> 00:59:02
it's uh telling you how good that state

00:58:59 --> 00:59:04
is what's the expected reward at that

00:59:01 --> 00:59:06
State and lastly there's an the

00:59:03 --> 00:59:08
advantage function is the difference

00:59:05 --> 00:59:10
between the Q function and the state

00:59:07 --> 00:59:12
value function meaning how much better

00:59:09 --> 00:59:13
is that action than uh what the policy

00:59:11 --> 00:59:15
would have

00:59:12 --> 00:59:18
done we're not going to talk about

00:59:15 --> 00:59:20
Advantage functions in this section but

00:59:17 --> 00:59:22
it was actually this corresponds to the

00:59:19 --> 00:59:26
notion of Advantage estimator uh we

00:59:21 --> 00:59:28
briefly mentioned in the previous

00:59:25 --> 00:59:30
ection so here we're going to consider

00:59:27 --> 00:59:32
um methods that explicitly store and

00:59:29 --> 00:59:36
update the Q function instead of the

00:59:31 --> 00:59:38
policy and um updates them using uh what

00:59:35 --> 00:59:38
are called Bellman

00:59:38 --> 00:59:46
equations so um so the Bellman equation

00:59:43 --> 00:59:48
um so a Bellman equation in general is a

00:59:45 --> 00:59:50
consistency equation that should be

00:59:47 --> 00:59:53
satisfied by a value

00:59:49 --> 00:59:57
function um so here um I'm writing down

00:59:52 --> 01:00:01
the Bellman equation for QP and

00:59:56 --> 01:00:04
um what it's saying is that um the um

01:00:00 --> 01:00:07
expected sum of rewards should be um the

01:00:03 --> 01:00:09
first reward plus this expected sum of

01:00:06 --> 01:00:11
rewards at after the first time step so

01:00:08 --> 01:00:14
it's saying something pretty simple

01:00:10 --> 01:00:17
that's um so r0 is the first reward uh V

01:00:13 --> 01:00:22
Pi of S1 is just um adding up all the

01:00:16 --> 01:00:24
rewards at after at After Time Step

01:00:21 --> 01:00:27
Zero um

01:00:23 --> 01:00:29
so uh in the second equation we write

01:00:26 --> 01:00:31
out this relationship just involving the

01:00:28 --> 01:00:34
Q function so we have a consistency

01:00:30 --> 01:00:34
equation that the Q function should

01:00:36 --> 01:00:42
satisfy um we can slightly generalize

01:00:38 --> 01:00:45
this to use um ktime steps instead of

01:00:41 --> 01:00:48
just one time step so uh we can expand

01:00:44 --> 01:00:50
out the um expectation the expected sum

01:00:47 --> 01:00:53
of rewards to write write out K rewards

01:00:50 --> 01:00:55
explicitly and then uh cap it off with

01:00:52 --> 01:00:59
e value function at the very end which

01:00:54 --> 01:00:59
accounts for all the rewards after

01:00:59 --> 01:01:04
that okay so here's the Bellman equation

01:01:02 --> 01:01:06
from the previous slide so now I'm going

01:01:04 --> 01:01:09
to introduce a very important concept

01:01:05 --> 01:01:13
called a Bellman

01:01:08 --> 01:01:16
backup so uh so we have this equation

01:01:12 --> 01:01:19
that the uh value the um value function

01:01:15 --> 01:01:21
Q Pi should satisfy um but we don't know

01:01:18 --> 01:01:24
Q let's assume we don't know Q Pi so

01:01:20 --> 01:01:27
let's say we have some uh some other Q

01:01:23 --> 01:01:30
function um so we Define this Bellman

01:01:26 --> 01:01:33
backup operator that that operates on an

01:01:29 --> 01:01:36
arbitrary Q function so it maps The Q

01:01:32 --> 01:01:38
function to a new Q function and uh it's

01:01:35 --> 01:01:40
defined by just taking the right hand

01:01:37 --> 01:01:44
side of the Bellman equation and uh

01:01:39 --> 01:01:49
plugging in um our Q function our new Q

01:01:43 --> 01:01:49
function Q instead of the um Q

01:01:49 --> 01:01:57
Pi so uh Q Pi is a fix point of this

01:01:53 --> 01:02:00
operator u meaning if we apply the

01:01:56 --> 01:02:05
backup operator we get it the same thing

01:01:59 --> 01:02:08
back and um and very nicely if we keep

01:02:04 --> 01:02:10
applying this backup operator repeatedly

01:02:07 --> 01:02:13
to any old arbitrary initial um Q

01:02:09 --> 01:02:15
function Q the series will converge to Q

01:02:13 --> 01:02:19
Pi which is the fix point of the

01:02:14 --> 01:02:19
operator so that's

01:02:18 --> 01:02:26
uh yeah so that's um so that way you can

01:02:22 --> 01:02:28
uh you can um

01:02:25 --> 01:02:30
one way you can use an iterative

01:02:27 --> 01:02:33
algorithm to estimate Q Pi by taking any

01:02:29 --> 01:02:36
old initial Q function and repeatedly

01:02:32 --> 01:02:38
applying this backup

01:02:35 --> 01:02:40
operator um so now there's another kind

01:02:37 --> 01:02:43
of Q function that we're going to

01:02:39 --> 01:02:46
introduce uh called qar so the previous

01:02:42 --> 01:02:48
Q function Q Pi was this is the uh

01:02:45 --> 01:02:51
telling you uh the value function under

01:02:47 --> 01:02:53
the current under some policy Pi so it

01:02:50 --> 01:02:57
only makes sense with regard to some

01:02:52 --> 01:03:00
particular fixed policy Pi qar um

01:02:56 --> 01:03:04
is going to be um is going to involve

01:02:59 --> 01:03:06
the optimal policy instead so um so qar

01:03:03 --> 01:03:09
is just defined as the Q function of the

01:03:05 --> 01:03:11
optimal policy so here we have Pi star

01:03:08 --> 01:03:14
the optimal policy and qar is just the Q

01:03:10 --> 01:03:16
function of the optimal policy and um it

01:03:13 --> 01:03:20
also happens to be uh the pointwise

01:03:15 --> 01:03:25
maximum over all policies of uh the Q

01:03:19 --> 01:03:25
function um at each state action pair

01:03:25 --> 01:03:33
so uh so the optimal policy is

01:03:29 --> 01:03:35
deterministic and um it should satisfy

01:03:32 --> 01:03:37
this equation that um it takes the

01:03:34 --> 01:03:39
argmax of the optimal Q function so

01:03:36 --> 01:03:42
recall that the Q function tells you

01:03:38 --> 01:03:45
r expected return if you take the um

01:03:41 --> 01:03:46
the given action um so obviously the

01:03:44 --> 01:03:49
optimal policy should take the action

01:03:45 --> 01:03:52
that has the best expected return so

01:03:48 --> 01:03:57
that's why um that's why this last

01:03:51 --> 01:03:57
equation is um evident um

01:03:56 --> 01:04:03
so um so now now that we know this

01:03:59 --> 01:04:04
property of the optimal policy uh we can

01:04:02 --> 01:04:08
rewrite the Bellman

01:04:03 --> 01:04:10
equation so uh so on the that that first

01:04:07 --> 01:04:12
equation is that's just the Bellman

01:04:09 --> 01:04:15
equation from the previous slides for

01:04:11 --> 01:04:18
given policy Pi um now um we can take

01:04:14 --> 01:04:19
that expectation over actions and

01:04:17 --> 01:04:21
replace it by what the optimal policy is

01:04:19 --> 01:04:24
going to do which is just going to take

01:04:20 --> 01:04:26
it's going to take the argmax of the

01:04:23 --> 01:04:29
optimal Q function there's a typo on my

01:04:25 --> 01:04:34
slide that should say qar um inside of

01:04:28 --> 01:04:35
um on the right hand side so um so now

01:04:33 --> 01:04:38
e have a Bellman equation that the

01:04:34 --> 01:04:38
optimal policy should

01:04:38 --> 01:04:44
satisfy now we can do the same thing

01:04:40 --> 01:04:47
with the backup operator um so um we we

01:04:43 --> 01:04:49
take that Bellman equation and we uh

01:04:46 --> 01:04:52
plug in an arbitrary Q function on the

01:04:48 --> 01:04:54
right hand side instead of the optimal Q

01:04:51 --> 01:04:59
function

01:04:53 --> 01:05:01
qar um so qar um is a fixed point of

01:04:58 --> 01:05:04
this Bellman operator that's just a

01:05:00 --> 01:05:08
restatement of the Bellman

01:05:03 --> 01:05:10
equation and uh again if we reply um

01:05:07 --> 01:05:12
this Bellman operator repeatedly to an

01:05:09 --> 01:05:16
arbitrary initial Q function it

01:05:11 --> 01:05:19
converges to qar which is the optimal Q

01:05:15 --> 01:05:21
function this is um the BAC F fixo

01:05:18 --> 01:05:25
theorem in both cases can be used to

01:05:20 --> 01:05:25
prove it

01:05:26 --> 01:05:32
okay so based on these ideas um there

01:05:29 --> 01:05:35
are two classic algorithms for exactly

01:05:31 --> 01:05:36
solving mdps these are sometimes called

01:05:34 --> 01:05:38
ynamic programming algorithms because

01:05:35 --> 01:05:40
they're actually quite related to the

01:05:37 --> 01:05:42
kind of dynamic programming algorithms

01:05:39 --> 01:05:44
that are used to solve uh search

01:05:41 --> 01:05:47
problems

01:05:43 --> 01:05:49
um so one is called value iteration and

01:05:46 --> 01:05:51
you just initialize your Q function

01:05:48 --> 01:05:56
arbitrarily and you repeatedly do

01:05:50 --> 01:05:56
Bellman backups until it converges

01:05:55 --> 01:06:02
uh the second one is called policy

01:05:57 --> 01:06:06
iteration um you initialize your policy

01:06:01 --> 01:06:08
arbitrarily uh then uh each step you uh

01:06:05 --> 01:06:12
first can compute um either exactly or

01:06:07 --> 01:06:15
approximately uh the Q function of that

01:06:11 --> 01:06:17
policy and then uh you update your

01:06:14 --> 01:06:20
policy to be the greedy policy for the Q

01:06:17 --> 01:06:22
function you just computed uh so that

01:06:19 --> 01:06:25
means that uh you your new policy just

01:06:22 --> 01:06:27
akes the argmax of the Q function so it

01:06:24 --> 01:06:29
akes the action that's best according

01:06:26 --> 01:06:29
to that Q

01:06:30 --> 01:06:36
function um so I didn't say anything

01:06:32 --> 01:06:38
about how you compute QP uh so one way

01:06:35 --> 01:06:40
to do it is to compute it um you can

01:06:37 --> 01:06:42
compute it exactly because it happens

01:06:39 --> 01:06:45
that the Bellman equation for QP is a

01:06:41 --> 01:06:48
linear system equations so often you can

01:06:44 --> 01:06:50
just solve them exactly um more commonly

01:06:47 --> 01:06:51
well if you have a large scale problem

01:06:49 --> 01:06:54
you might not be able to solve this

01:06:50 --> 01:06:56
ystem uh so what people often do is

01:06:53 --> 01:06:59
they do um a finite number of bellman

01:06:55 --> 01:07:01
backups uh which gives you which doesn't

01:06:58 --> 01:07:05
exactly Converge on Q Pi but it gives

01:07:01 --> 01:07:05
you something that's approximately Q

01:07:06 --> 01:07:12
Pi okay so that's um I just told you

01:07:09 --> 01:07:14
algorithms that you can Implement if you

01:07:11 --> 01:07:17
have full access to the mdp like you

01:07:13 --> 01:07:19
know the whole table of probabilities um

01:07:16 --> 01:07:20
but in reinforcement learning usually

01:07:18 --> 01:07:22
the assumption is that you don't know

01:07:20 --> 01:07:23
any of these probability distributions

01:07:21 --> 01:07:25
you don't know the reward function you

01:07:22 --> 01:07:28
don't know the transition probabilities

01:07:24 --> 01:07:30
o all these things things have to be um

01:07:27 --> 01:07:31
estimated from data or they have to or

01:07:29 --> 01:07:35
you're only able to access the system

01:07:30 --> 01:07:38
through interaction so now it turns out

01:07:34 --> 01:07:40
hat these uh algorithms can be um also

01:07:37 --> 01:07:42
implemented if you only access the

01:07:39 --> 01:07:44
system through interactions which is

01:07:41 --> 01:07:48
kind of remarkable I

01:07:43 --> 01:07:50
think um so so the way it works is um so

01:07:47 --> 01:07:53
let's recall our backup formulas for Q

01:07:49 --> 01:07:53
pi and

01:07:54 --> 01:08:01
qar um so we can um so we can in both

01:07:58 --> 01:08:04
cases we have this a certain quantity

01:08:00 --> 01:08:07
inside an expectation in both both cases

01:08:03 --> 01:08:10
we can compute an unbiased estimator um

01:08:06 --> 01:08:12
of the right of that quantity inside the

01:08:09 --> 01:08:15
xpectation just using a single sample

01:08:11 --> 01:08:18
meaning uh if we have uh if we sampled

01:08:14 --> 01:08:20
some data from our system um using any

01:08:17 --> 01:08:23
old policy uh

01:08:19 --> 01:08:25
then uh we can get an unbiased estimator

01:08:22 --> 01:08:27
of the quantity on the right hand side

01:08:24 --> 01:08:29
of those expectations

01:08:26 --> 01:08:31
I mean the quantity on inside of the

01:08:28 --> 01:08:34
right hand

01:08:30 --> 01:08:36
expectations so basically we can do an

01:08:33 --> 01:08:40
approximate version of this uh Bellman

01:08:35 --> 01:08:40
backup uh which is

01:08:40 --> 01:08:45
unbiased um and uh even with this noise

01:08:43 --> 01:08:47
so we're doing a noisy version of the

01:08:44 --> 01:08:49
Bellman backup even with this noise it

01:08:46 --> 01:08:51
can be proven that if you do if you

01:08:48 --> 01:08:53
choose your step size appropriately with

01:08:50 --> 01:08:59
e right schedule you're still going to

01:08:52 --> 01:09:02
converge to um QP um or qar um depending

01:08:58 --> 01:09:02
uh on which algorithm you're

01:09:01 --> 01:09:08
implementing okay so now well well I'll

01:09:04 --> 01:09:10
say at this point that this is uh pretty

01:09:07 --> 01:09:13
much the fundamental idea and now you

01:09:09 --> 01:09:16
can uh you can come up with algorithms

01:09:12 --> 01:09:17
uh that can be applied in the uh

01:09:15 --> 01:09:18
reinforcement learning setting where

01:09:16 --> 01:09:21
you're just accessing the system through

01:09:17 --> 01:09:24
sampling and you can also uh start

01:09:20 --> 01:09:26
introducing function approximation here

01:09:23 --> 01:09:28
so in I haven't said anything about what

01:09:25 --> 01:09:30
he Q function is I've just told you

01:09:27 --> 01:09:31
it's a function of state and action um

01:09:29 --> 01:09:34
but now we can start having neural

01:09:31 --> 01:09:38
network Q functions for

01:09:33 --> 01:09:40
example um so uh so we can parameterize

01:09:37 --> 01:09:44
the Q function with the neural network

01:09:39 --> 01:09:46
um let's call it Q Theta um and now um

01:09:43 --> 01:09:47
instead of doing the Bellman backup I

01:09:45 --> 01:09:49
mean it doesn't make sense to do the

01:09:46 --> 01:09:51
Bellman backup exactly because we're not

01:09:48 --> 01:09:54
just setting the values of the neural

01:09:50 --> 01:09:56
network output um the best we can do is

01:09:53 --> 01:09:59
try to um like encourage the neural

01:09:55 --> 01:10:02
network to have some output values so

01:09:58 --> 01:10:03
what we do is instead of doing the um

01:10:01 --> 01:10:06
the way we do this backup is we set up a

01:10:02 --> 01:10:08
lease squares problem uh so we write

01:10:05 --> 01:10:10
down this quadratic objective that says

01:10:07 --> 01:10:12
that the Q function should be

01:10:09 --> 01:10:14
approximately equal to the back upb

01:10:11 --> 01:10:16
value and then we just minimize it with

01:10:13 --> 01:10:19
uh

01:10:15 --> 01:10:21
SGD um so one version of this algorithm

01:10:18 --> 01:10:24
uh which was introduced about 10 years

01:10:20 --> 01:10:25
ago called neural fitted Q iteration um

01:10:23 --> 01:10:28
well it works exactly the way you'd

01:10:24 --> 01:10:31
expect you you sample trajectories um

01:10:27 --> 01:10:35
using your current policy uh which might

01:10:30 --> 01:10:37
be um determined by the Q function or it

01:10:34 --> 01:10:41
could be any old policy as it turns out

01:10:36 --> 01:10:42
um and uh then you um you solve the

01:10:40 --> 01:10:47
lease squares problem where you're

01:10:41 --> 01:10:48
trying to minimize um this quadratic um

01:10:46 --> 01:10:52
you you try to minimize this quadratic

01:10:47 --> 01:10:56
error which is um based on the um

01:10:51 --> 01:10:58
Bellman backup the backup for qar

01:10:55 --> 01:11:00
so

01:10:57 --> 01:11:02
um one thing I haven't mentioned so far

01:11:00 --> 01:11:04
is what do you actually use as your

01:11:01 --> 01:11:06
policy so I said sample trajectory using

01:11:03 --> 01:11:09
your policy um so if you have a Q

01:11:06 --> 01:11:12
function you can turn it into a policy

01:11:08 --> 01:11:14
um by just uh taking the action that has

01:11:11 --> 01:11:16
the highest Q value that's what you

01:11:13 --> 01:11:18
typically do so the Q function measures

01:11:15 --> 01:11:19
the goodness of all your actions so you

01:11:17 --> 01:11:22
can easily turn that into a policy by

01:11:18 --> 01:11:25
taking your best action or by taking

01:11:21 --> 01:11:27
actions um where uh the log probability

01:11:24 --> 01:11:28
is um proportional the goodness or

01:11:26 --> 01:11:31
something like

01:11:27 --> 01:11:35
that so you you might take typically

01:11:30 --> 01:11:38
probability is uh is exponential of Q

01:11:34 --> 01:11:40
value um over some kind of temperature

01:11:37 --> 01:11:43
parameter um that's called boltzman

01:11:39 --> 01:11:45
exploration um whereas um if you use

01:11:42 --> 01:11:48
just the um greedy if you just take the

01:11:44 --> 01:11:50
argmax that's called the greedy policy

01:11:47 --> 01:11:52
so um it turns out that with these kind

01:11:49 --> 01:11:56
of Q learning algorithms you don't have

01:11:51 --> 01:11:58
to execute the greedy policy um to for

01:11:55 --> 01:12:00
learning to work um there's you actually

01:11:57 --> 01:12:03
have some freedom in what policy you can

01:11:59 --> 01:12:05
execute um which is actually one very

01:12:02 --> 01:12:08
nice property of these algorithms that

01:12:04 --> 01:12:11
you can use an exploration technique um

01:12:07 --> 01:12:13
which uh where your policy is actively

01:12:10 --> 01:12:16
trying to reach um new states or do

01:12:12 --> 01:12:19
something new and uh still learn the

01:12:15 --> 01:12:23
correct uh still uh converge still move

01:12:18 --> 01:12:23
towards qar or QP as the case may

01:12:23 --> 01:12:29
be okay so that's uh

01:12:25 --> 01:12:31
so that's a um a very basic neural

01:12:28 --> 01:12:33
fitted Q iteration is sort of a basic

01:12:30 --> 01:12:35
way of doing this a more recent

01:12:32 --> 01:12:37
algorithm that's gotten a lot of

01:12:34 --> 01:12:40
attention is the one that was um from M

01:12:36 --> 01:12:41
at all from Deep Mind uh which is

01:12:39 --> 01:12:44
basically an online version of this

01:12:40 --> 01:12:48
algorithm uh with a with a couple of um

01:12:43 --> 01:12:50
useful tweaks in it so um and but

01:12:47 --> 01:12:53
actually when you look at the two tricks

01:12:49 --> 01:12:55
they're actually kind of um very um they

01:12:52 --> 01:12:58
make a lot of sense if you just think

01:12:54 --> 01:13:01
about what valuator is doing so uh one

01:12:57 --> 01:13:03
technique is uh you use this uh

01:13:00 --> 01:13:07
replay pool where it's a rolling history

01:13:02 --> 01:13:08
of your past data and um that's just the

01:13:06 --> 01:13:11
data you're going to use to fit your Q

01:13:07 --> 01:13:14
function um so that makes sure you have

01:13:10 --> 01:13:18
like a representative sample of data um

01:13:13 --> 01:13:20
to uh fit your Q function to and um the

01:13:17 --> 01:13:23
second the second uh idea is to use a

01:13:19 --> 01:13:25
Target Network um so instead of using

01:13:22 --> 01:13:28
your Q current Q function and just doing

01:13:24 --> 01:13:31
Bellman backups on that um you have some

01:13:27 --> 01:13:32
lagged version of your Q function so you

01:13:30 --> 01:13:35
have this target Network which is a copy

01:13:31 --> 01:13:37
of your Q function at some earlier time

01:13:34 --> 01:13:38
and you use that in the backups so that

01:13:36 --> 01:13:40
also um if you think about value

01:13:37 --> 01:13:42
iteration uh you're trying to you have

01:13:40 --> 01:13:44
your old Q function and you're trying to

01:13:41 --> 01:13:46
make the new one equal to the backup

01:13:43 --> 01:13:47
version of the old one so using the

01:13:45 --> 01:13:49
target Network just is sort of the

01:13:46 --> 01:13:52
natural thing to do if you're trying to

01:13:48 --> 01:13:55
implement value iteration in an online

01:13:52 --> 01:13:57
way um so and there have been many

01:13:54 --> 01:13:59
extensions for post since then I've got

01:13:56 --> 01:14:03
a bunch of citations at the bottom of

01:13:58 --> 01:14:08
the slide um so this algorithm the d uh

01:14:02 --> 01:14:12
dqn algorithm uh is um is using the um

01:14:07 --> 01:14:14
backup B which is the backup for qar um

01:14:11 --> 01:14:17
remember that I also introduced this

01:14:13 --> 01:14:20
other backup BP which is the backup for

01:14:16 --> 01:14:22
qpy um so so there's another algorithm

01:14:19 --> 01:14:26
like a very classic algorithm called

01:14:21 --> 01:14:30
sarsa uh which um is an online way of um

01:14:25 --> 01:14:32
doing the bpy backup essentially um well

01:14:29 --> 01:14:37
it's sort of an online version of policy

01:14:31 --> 01:14:39
iteration um uh but uh so it's it's

01:14:36 --> 01:14:42
actually um found to work as well um or

01:14:38 --> 01:14:45
better than DQ well better than using

01:14:41 --> 01:14:48
the B backup in some settings um not all

01:14:44 --> 01:14:51
settings so I think the jury's still out

01:14:47 --> 01:14:55
um on exactly um how these things

01:14:50 --> 01:14:57
compare um but uh it's I think um it's

01:14:54 --> 01:14:59
worth considering both policy iteration

01:14:56 --> 01:15:00
and value iteration and and all the

01:14:58 --> 01:15:02
different online versions of these

01:14:59 --> 01:15:05
algorithms and taking them seriously

01:15:01 --> 01:15:08
because it's not clear right now exactly

01:15:04 --> 01:15:12
which are how how they all compare each

01:15:07 --> 01:15:12
other in the function approximation

01:15:11 --> 01:15:18
setting okay so that's uh that's the

01:15:15 --> 01:15:21
overview of all the technical parts and

01:15:17 --> 01:15:24
now I just have a couple conclusion

01:15:20 --> 01:15:26
slides um so so let me just summarize

01:15:23 --> 01:15:29
the current state of affairs I

01:15:25 --> 01:15:30
introduced uh two kinds of algorithms uh

01:15:28 --> 01:15:32
policy grading algorithms which

01:15:29 --> 01:15:35
explicitly represent a policy and

01:15:31 --> 01:15:38
optimize it and um Q function learning

01:15:34 --> 01:15:40
algorithms which explicitly represent a

01:15:37 --> 01:15:42
q function which is the goodness of

01:15:39 --> 01:15:45
different actions and use that to

01:15:41 --> 01:15:47
implicitly represent a policy um so so

01:15:44 --> 01:15:50
policy gradient methods there's a lot of

01:15:46 --> 01:15:52
um uh so there have been some successes

01:15:49 --> 01:15:54
with different kinds different variants

01:15:51 --> 01:15:56
of it so you have vanilla policy

01:15:53 --> 01:16:00
gradient methods um there is a recent

01:15:55 --> 01:16:04
paper um on this uh a3c method um which

01:15:59 --> 01:16:07
is an async uh implementation of it uh

01:16:03 --> 01:16:10
which gets very good results um there's

01:16:06 --> 01:16:12
also um another kind of methods are the

01:16:09 --> 01:16:14
natural policy gradient methods trust

01:16:11 --> 01:16:17
region methods oh so the video I showed

01:16:13 --> 01:16:19
you was obtained using uh trust region

01:16:16 --> 01:16:21
policy optimization which is one of

01:16:18 --> 01:16:23
these in the second category so that

01:16:20 --> 01:16:25
makes it um I think these trust region

01:16:22 --> 01:16:27
methods and natural policy gradient

01:16:24 --> 01:16:30
methods are are uh More Sample efficient

01:16:26 --> 01:16:33
han the um vanilla methods because uh

01:16:29 --> 01:16:34
you end up um you're doing more than one

01:16:32 --> 01:16:37
uh grading update with each little bit

01:16:33 --> 01:16:39
of data you collect so with the vanilla

01:16:36 --> 01:16:41
policy gradient you just compute one

01:16:38 --> 01:16:42
little gradient estimate and then you

01:16:40 --> 01:16:44
throw it away with natural policy

01:16:41 --> 01:16:46
gradient you're solving a little

01:16:43 --> 01:16:47
optimization problem with it so you get

01:16:45 --> 01:16:52
more juice out of

01:16:46 --> 01:16:56
it um so that's um that's what we have

01:16:51 --> 01:16:58
in the policy gradient World um and uh

01:16:55 --> 01:17:02
in the Q function world we have uh the

01:16:57 --> 01:17:06
dqn algorithm and some of its relatives

01:17:01 --> 01:17:07
um and these are sort of uh descendants

01:17:05 --> 01:17:10
of value

01:17:06 --> 01:17:13
iteration um where you're approximating

01:17:09 --> 01:17:17
the Bellman backup using value iteration

01:17:12 --> 01:17:19
um and then sarsa is um also it's

01:17:16 --> 01:17:21
related to policy

01:17:18 --> 01:17:23
iteration

01:17:20 --> 01:17:26
um these are both different I mean these

01:17:22 --> 01:17:27
are uh estimating different they're

01:17:25 --> 01:17:29
dealing with different Bellman equations

01:17:26 --> 01:17:31
o it's kind of interesting that both

01:17:28 --> 01:17:33
kinds of methods work and they all

01:17:30 --> 01:17:35
they're both they have fairly similar

01:17:32 --> 01:17:39
behaviors as a turns

01:17:34 --> 01:17:41
out um so here's what I would say the um

01:17:38 --> 01:17:45
here's how I would compare them and this

01:17:40 --> 01:17:47
um like anecdotal evidence but uh I

01:17:44 --> 01:17:49
think this is the consensus right now um

01:17:47 --> 01:17:52
the Q function methods are more sample

01:17:49 --> 01:17:54
fficient when they work um but uh they

01:17:51 --> 01:17:56
don't work as generally as policy

01:17:53 --> 01:17:58
gradient methods and it's it's a little

01:17:55 --> 01:18:00
harder to figure out what's going on uh

01:17:57 --> 01:18:01
when they don't work um and that kind of

01:17:59 --> 01:18:03
makes sense because in the policy

01:18:00 --> 01:18:04
gradient methods you're optimizing

01:18:02 --> 01:18:07
exactly the thing you care about with

01:18:04 --> 01:18:08
gradient descent whereas with Q function

01:18:06 --> 01:18:10
methods you're doing something indirect

01:18:07 --> 01:18:12
where you're optim you're trying to

01:18:09 --> 01:18:14
learn a q function and then you're

01:18:11 --> 01:18:17
hoping that it gives you a good

01:18:13 --> 01:18:19
policy um and yeah so I would also point

01:18:16 --> 01:18:22
out that there um there are also some

01:18:19 --> 01:18:24
confounds so it's hard to make a good

01:18:21 --> 01:18:26
conclusion at this point because people

01:18:23 --> 01:18:29
use um uh

01:18:25 --> 01:18:30
different um like time Horizons in the

01:18:28 --> 01:18:32
policy gradient methods versus the Q

01:18:29 --> 01:18:35
function methods so they do one step

01:18:31 --> 01:18:36
look ahads on the Q functions and

01:18:34 --> 01:18:39
multi-step look ahads on the policy

01:18:35 --> 01:18:41
gradients so it's not clear if the extra

01:18:38 --> 01:18:44
if the differences come from like using

01:18:40 --> 01:18:46
different time Horizons or um some

01:18:43 --> 01:18:48
differences in how the algorithms are

01:18:45 --> 01:18:50
working because you're either doing

01:18:47 --> 01:18:53
regression for a q function versus uh

01:18:49 --> 01:18:56
learning a policy using policy

01:18:52 --> 01:18:58
gradients um so just to summarize it I

01:18:55 --> 01:19:00
would say here here are some of our core

01:18:57 --> 01:19:05
model free reinforcement learning

01:18:59 --> 01:19:08
algorithms and uh they oh whoops I'm

01:19:04 --> 01:19:11
issing a word in the First Column which

01:19:07 --> 01:19:13
I think should say uh like reliability

01:19:10 --> 01:19:15
and robustness uh so this just means

01:19:12 --> 01:19:18
like is it going to work on um new

01:19:14 --> 01:19:22
problems without um like without

01:19:17 --> 01:19:25
parameter tuning um or is it going to um

01:19:21 --> 01:19:28
ysteriously either work or not work um

01:19:24 --> 01:19:32
so this this would be my um slightly

01:19:27 --> 01:19:34
sloppy summary of um all these different

01:19:31 --> 01:19:36
algorithms I would say there's still

01:19:33 --> 01:19:38
some room for improvement um there might

01:19:35 --> 01:19:40
be some improvements in the basic

01:19:37 --> 01:19:42
methods because uh there's some nice

01:19:39 --> 01:19:44
properties of the Q function methods um

01:19:41 --> 01:19:46
that we don't have in the policy

01:19:43 --> 01:19:49
gradient methods like you can easily do

01:19:45 --> 01:19:50
ff you can easily um explore with a

01:19:48 --> 01:19:53
different policy than the one that

01:19:50 --> 01:19:55
you're um learning the Q function for

01:19:52 --> 01:19:57
and that's really important um you can

01:19:54 --> 01:20:00
do that very easily with policy grading

01:19:56 --> 01:20:02
methods um whereas the policy grading

01:19:59 --> 01:20:05
methods just seem like they're more um

01:20:01 --> 01:20:08
you can just apply them and they're like

01:20:04 --> 01:20:09
more likely to work and uh it's well

01:20:07 --> 01:20:13
understood what's going

01:20:09 --> 01:20:14
on so I think yeah there's still I don't

01:20:12 --> 01:20:17
know if it's possible to get the best of

01:20:13 --> 01:20:20
both worlds but that's uh that's the

01:20:16 --> 01:20:23
Hope um and that's it for my talk thank

01:20:19 --> 01:20:23
you

01:20:28 --> 01:20:31
any

01:20:39 --> 01:20:44
questions oh yeah so in model-based

01:20:41 --> 01:20:47
reinforcement learning uh what lines of

01:20:43 --> 01:20:49
research do I find most

01:20:46 --> 01:20:51
interesting I think the work uh from my

01:20:48 --> 01:20:53
colleagues on guided policy search is

01:20:50 --> 01:20:57
very nice so I would say that's a kind

01:20:52 --> 01:20:57
of modelbased reinforcement learning um

01:20:56 --> 01:21:02
I also like um there's some methods that

01:20:59 --> 01:21:04
are using the model for faster learning

01:21:01 --> 01:21:06
like for variance reduction so there's a

01:21:03 --> 01:21:10
paper called stochastic value gradients

01:21:05 --> 01:21:10
that I like a lot

01:21:09 --> 01:21:16
um I think it's a pretty wide openen

01:21:12 --> 01:21:18
area so I don't think there have been a

01:21:15 --> 01:21:20
lot of really compelling results uh

01:21:17 --> 01:21:22
where you're able to learn extremely

01:21:19 --> 01:21:24
fast uh like you're able to learn with

01:21:21 --> 01:21:26
much better sample efficiency using a

01:21:23 --> 01:21:28
model so it's seems like that should be

01:21:25 --> 01:21:32
possible but I don't think it's been

01:21:27 --> 01:21:35
demonstrated um yet so maybe in the next

01:21:31 --> 01:21:36
couple years we'll see that

01:21:34 --> 01:21:39
happen

01:21:35 --> 01:21:41
hello uh

01:21:38 --> 01:21:43
i uh thanks for the talk so I have a

01:21:40 --> 01:21:46
question is that is it true or not true

01:21:42 --> 01:21:49
that um most of this problem require

01:21:45 --> 01:21:53
some kind of simulated uh world to to uh

01:21:48 --> 01:21:57
run experiments in the episodes right oh

01:21:52 --> 01:21:58
yeah so um are you asking um does this

01:21:56 --> 01:22:03
work in the real world is that the

01:21:57 --> 01:22:04
question or does um yeah I would say um

01:22:02 --> 01:22:06
it it does work if you have a lot of

01:22:03 --> 01:22:08
patience and you're willing to execute

01:22:05 --> 01:22:11
this thing for a while so the um

01:22:07 --> 01:22:14
Locomotion results I showed um add up to

01:22:10 --> 01:22:15
about two weeks of real time uh so it's

01:22:13 --> 01:22:18
actually not that bad especially when

01:22:14 --> 01:22:20
you consider uh that babies toddlers

01:22:17 --> 01:22:22
take a while to learn how to walk

01:22:19 --> 01:22:24
properly even though Evolution already

01:22:21 --> 01:22:30
puts in a lot of uh built-in information

01:22:24 --> 01:22:32
um so uh i' I'd say um maybe yeah I'd

01:22:29 --> 01:22:33
say it it's it can be run in the real

01:22:31 --> 01:22:36
world some of my colleagues in Berkeley

01:22:32 --> 01:22:38
are doing uh some experiments where they

01:22:35 --> 01:22:40
are running just regular reinforcement

01:22:37 --> 01:22:44
learning algorithms in the real world um

01:22:39 --> 01:22:46
very brave um but uh I hope to see some

01:22:43 --> 01:22:48
nice results from that

01:22:45 --> 01:22:51
soon thank

01:22:47 --> 01:22:56
you hi uh thanks for your talk here on

01:22:50 --> 01:22:57
the other side here um I was wondering

01:22:55 --> 01:23:01
what was your intuition on the Lost

01:22:56 --> 01:23:04
surface of those uh deep reinforcement

01:23:00 --> 01:23:07
learning optimization problems and um

01:23:03 --> 01:23:10
aybe especially how it evolves in the

01:23:06 --> 01:23:12
from the as the policy learns and I

01:23:09 --> 01:23:15
should specify in the policy G in

01:23:12 --> 01:23:16
case so I think the situation is a

01:23:14 --> 01:23:18
little bit different in reinforcement

01:23:15 --> 01:23:22
learning from in supervised learning uh

01:23:17 --> 01:23:26
so in reinforcement learning the uh loss

01:23:21 --> 01:23:30
you have um you have one kind of local

01:23:25 --> 01:23:33
Minima um in policy space um so for

01:23:29 --> 01:23:34
example um let's say you want your so

01:23:32 --> 01:23:36
I'm going keep going back to The

01:23:33 --> 01:23:37
Locomotion example because I spent a lot

01:23:35 --> 01:23:40
of time on it but uh let's say you want

01:23:37 --> 01:23:42
your robot to walk um there's one local

01:23:39 --> 01:23:44
minimum where it just stands and it

01:23:41 --> 01:23:45
doesn't bother to walk because there's

01:23:43 --> 01:23:47
too much penalty for falling over and

01:23:44 --> 01:23:49
there's another local minimum where it

01:23:46 --> 01:23:52
just Dives forward because uh it gets a

01:23:49 --> 01:23:57
little bit of reward for that before it

01:23:51 --> 01:23:59
falls to its Doom um so uh so even so I

01:23:56 --> 01:24:02
think that that's actually the the hard

01:23:58 --> 01:24:05
part about the uh like the optimization

01:24:01 --> 01:24:07
problem is actually Define is because of

01:24:04 --> 01:24:08
the different be space of behaviors and

01:24:06 --> 01:24:11
actually has nothing to do with the

01:24:07 --> 01:24:14
neural network um so I've also found

01:24:10 --> 01:24:17
that um yeah it matters surprisingly

01:24:13 --> 01:24:18
little what kind of architecture you use

01:24:16 --> 01:24:20
um like what kind of neural network

01:24:17 --> 01:24:22
architecture you use because I think the

01:24:20 --> 01:24:24
most of the hardness and the weirdness

01:24:21 --> 01:24:27
of the problem comes from uh like what

01:24:23 --> 01:24:28
he Behavior space looks like rather

01:24:26 --> 01:24:31
than what the actual numerical

01:24:27 --> 01:24:34
optimization landscape looks

01:24:30 --> 01:24:38
like cool thank

01:24:33 --> 01:24:41
you so uh there are many problems where

01:24:37 --> 01:24:43
uh the reward is only observed uh at the

01:24:40 --> 01:24:46
nd of the task so in the final in the

01:24:42 --> 01:24:48
terminal state in each episode uh and

01:24:45 --> 01:24:50
you don't see rewards uh in intermediate

01:24:47 --> 01:24:52
States so how much harder do these

01:24:49 --> 01:24:54
problems become for deep reinforcement

01:24:51 --> 01:24:56
learning in your experience thanks yeah

01:24:53 --> 01:24:57
so you have

01:24:55 --> 01:25:02
if you don't get the reward until the

01:24:56 --> 01:25:04
nd then um then you can't

01:25:01 --> 01:25:06
um well then it's probably it might be

01:25:03 --> 01:25:09
harder to learn yeah I I don't have

01:25:05 --> 01:25:10
anything uh anything precise to say

01:25:08 --> 01:25:13
about that I think it's going to be

01:25:09 --> 01:25:16
harder if you have less if your rewards

01:25:12 --> 01:25:18
are further away yeah so so for example

01:25:15 --> 01:25:20
for your uh in your video for the last

01:25:17 --> 01:25:23
example of getting up and getting the

01:25:19 --> 01:25:25
ad above a certain height for example

01:25:22 --> 01:25:27
that could be one where you only get a

01:25:24 --> 01:25:29
plus one if you're above and you don't

01:25:26 --> 01:25:31
get anything below are you doing

01:25:28 --> 01:25:32
something that was kind of if you get

01:25:30 --> 01:25:35
your head higher then you still get

01:25:31 --> 01:25:37
something partial yeah so I think we uh

01:25:34 --> 01:25:40
came up with a reward like distance from

01:25:36 --> 01:25:41
height squared um which made the problem

01:25:39 --> 01:25:44
easier um yeah the problem would have

01:25:41 --> 01:25:45
been a lot harder if you get zero reward

01:25:43 --> 01:25:48
until you get your head above the height

01:25:44 --> 01:25:50
um and it's actually um that would be a

01:25:47 --> 01:25:53
problem of exploration which is that you

01:25:49 --> 01:25:55
have to um explore all the different

01:25:52 --> 01:25:59
states be to figure out where you're

01:25:54 --> 01:26:03
going to get good reward

01:25:58 --> 01:26:05
thanks okay uh one last question okay uh

01:26:02 --> 01:26:07
so I have a question about how do you

01:26:04 --> 01:26:08
choose to quantize your space time

01:26:06 --> 01:26:11
because in your Locomotion example you

01:26:07 --> 01:26:14
clearly has the continuous

01:26:10 --> 01:26:16
ystem right uh yeah so it's actually

01:26:13 --> 01:26:19
really important how you Discord eyesee

01:26:15 --> 01:26:23
time like what time step you use because

01:26:18 --> 01:26:24
um if because the algorithm has um I

01:26:22 --> 01:26:28
mean the algorithm does care about what

01:26:24 --> 01:26:31
he time step is so it's not like um

01:26:27 --> 01:26:33
yeah because you um you have discount

01:26:30 --> 01:26:36
factors and you're also sampling a

01:26:32 --> 01:26:39
different action at every time step so

01:26:35 --> 01:26:43
um yeah so if you choose too small of a

01:26:38 --> 01:26:45
Time step then uh you then the rewards

01:26:42 --> 01:26:47
will be delayed by more time steps so

01:26:44 --> 01:26:50
that makes the like the credit

01:26:46 --> 01:26:52
assignment harder and also um your

01:26:49 --> 01:26:54
exploration will be more like a random

01:26:51 --> 01:26:55
walk because you're changing your mind

01:26:53 --> 01:26:57
really frequently

01:26:54 --> 01:26:59
so yeah the time step is pretty

01:26:56 --> 01:27:04
important and I'd say that's um that's a

01:26:58 --> 01:27:04
flaw in current methods okay thank

01:27:05 --> 01:27:09
[Applause]

01:27:09 --> 01:27:17
you thank you so take a short break we

01:27:12 --> 01:27:17
convene in 15 minutes

<!-- YOUTUBE_TRANSCRIPT_END -->
