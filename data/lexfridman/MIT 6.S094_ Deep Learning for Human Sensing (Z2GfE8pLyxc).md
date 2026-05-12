---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Z2GfE8pLyxc"
title: "MIT 6.S094: Deep Learning for Human Sensing"
video_url: "https://www.youtube.com/watch?v=Z2GfE8pLyxc"
thumbnail_url: "https://i.ytimg.com/vi/Z2GfE8pLyxc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Z2GfE8pLyxc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-01-30T20:35:17.000Z"
upload_date: "2018-01-30"
duration_seconds: 4310
duration_human: "1:11:50"
view_count: 25116
like_count: 316
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:20:51.038Z"
---

# MIT 6.S094: Deep Learning for Human Sensing

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Z2GfE8pLyxc
- video_id: Z2GfE8pLyxc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-01-30T20:35:17.000Z
- upload_date: 2018-01-30
- duration: 1:11:50
- view_count: 25116
- like_count: 316
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018, computer vision, convolutional neural networks
- categories: Science & Technology

## Description

This is lecture 5 of course 6.S094: Deep Learning for Self-Driving Cars (2018 version). This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

OUTLINE:
0:00 - Intro
6:53 - Human Imperfections
22:57 - Pedestrian Detection
28:57 - Body Pose Estimation
35:40 - Glance Classification
47:13 - Emotion Recognition
53:24 - Cognitive Load Estimation
1:00:54 - Human-Centered Vision for Autonomous Vehicles

INFO:
Slides: http://bit.ly/2HbGuzx
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

00:00:00 --> 00:00:06
today we will talk about how to apply

00:00:02 --> 00:00:08
the methods of deep learning to

00:00:05 --> 00:00:10
understanding the sense of the human

00:00:07 --> 00:00:12
being the focus will be on computer

00:00:09 --> 00:00:13
vision the visual aspects of a human

00:00:11 --> 00:00:16
being

00:00:12 --> 00:00:19
of course we humans express ourselves

00:00:15 --> 00:00:22
visually but also through audio voice

00:00:18 --> 00:00:24
and through text beautiful poetry and

00:00:21 --> 00:00:26
novels and so on we're not going to

00:00:23 --> 00:00:28
uch those today we're just going to

00:00:25 --> 00:00:31
focus on computer vision how we can use

00:00:27 --> 00:00:36
computer vision to extract useful

00:00:30 --> 00:00:39
actionable information from video images

00:00:35 --> 00:00:45
video of human beings in particular in

00:00:38 --> 00:00:48
the context of the car so what are the

00:00:44 --> 00:00:50
requirements for successfully applying

00:00:47 --> 00:00:52
deep learning methods in the real world

00:00:49 --> 00:00:56
so when we're talking about human

00:00:51 --> 00:00:58
sensing we're not talking about a basic

00:00:55 --> 00:01:01
face recognition of celebrity images

00:00:57 --> 00:01:05
we're talking about using computer

00:01:00 --> 00:01:07
vision deep learning methods to create

00:01:04 --> 00:01:09
systems that operate in the real world

00:01:06 --> 00:01:11
and in order for them to operate in the

00:01:08 --> 00:01:14
real world there are several things they

00:01:10 --> 00:01:17
sound simple some are much harder than

00:01:13 --> 00:01:20
they sound first and the most important

00:01:16 --> 00:01:23
here for most to less more to less

00:01:19 --> 00:01:27
critical ordered is data data is

00:01:22 --> 00:01:30
everything real world data we need a lot

00:01:26 --> 00:01:32
of real world data to form the data set

00:01:29 --> 00:01:36
on which these supervised learning

00:01:31 --> 00:01:37
methods can be trained I'll say this

00:01:35 --> 00:01:40
over and over throughout the day today

00:01:36 --> 00:01:42
data is everything that means data

00:01:39 --> 00:01:45
collection is the hardest part and the

00:01:41 --> 00:01:47
most important part we'll talk about how

00:01:44 --> 00:01:50
that data collection is carried out here

00:01:46 --> 00:01:52
in our group at MIT all the different

00:01:49 --> 00:01:55
ways to capture human beings in the

00:01:51 --> 00:02:01
driving context in the road user context

00:01:54 --> 00:02:05
pedestrians cyclists but the data it

00:02:00 --> 00:02:08
starts and ends at data the fun stuff is

00:02:04 --> 00:02:13
the algorithms but the data is what

00:02:07 --> 00:02:15
makes it all work real world data okay

00:02:12 --> 00:02:18
then once you have the data okay data

00:02:14 --> 00:02:19
isn't everything I lied because you have

00:02:17 --> 00:02:23
to actually annotate it so what do we

00:02:18 --> 00:02:28
mean by data there's raw data video

00:02:22 --> 00:02:33
audio lidar all the types of sensors

00:02:27 --> 00:02:36
we'll talk about to capture real world

00:02:32 --> 00:02:39
you wrote user interaction you have to

00:02:35 --> 00:02:42
reduce that into meaningful

00:02:38 --> 00:02:45
representative cases of what happens in

00:02:41 --> 00:02:46
that real world in driving 99% of the

00:02:44 --> 00:02:49
time driving looks the same it's the

00:02:45 --> 00:02:52
1% the interesting cases that

00:02:48 --> 00:02:54
we're interested in and what we want is

00:02:51 --> 00:02:59
algorithm to train learning algorithms

00:02:53 --> 00:03:00
on those 1% so we have to collect 100

00:02:58 --> 00:03:03
percent we have to collect all the data

00:02:59 --> 00:03:06
nd then figure out and automated

00:03:02 --> 00:03:08
semi-automated ways to find the pieces

00:03:05 --> 00:03:10
of that data that could be used to train

00:03:07 --> 00:03:13
your own networks and that a

00:03:09 --> 00:03:15
representative of the general thing

00:03:12 --> 00:03:20
kinds of things that happen in this

00:03:14 --> 00:03:24
world efficient annotation annotation

00:03:19 --> 00:03:28
isn't just about drawing bounding boxes

00:03:23 --> 00:03:34
on images of cats annotation tooling is

00:03:27 --> 00:03:38
key to unlocking real world performance

00:03:33 --> 00:03:40
systems that successfully solve some

00:03:37 --> 00:03:42
problem accomplish some goal in real

00:03:39 --> 00:03:45
world data that means designing

00:03:41 --> 00:03:47
annotation tools for a particular task

00:03:44 --> 00:03:49
annotation tools that are used for

00:03:46 --> 00:03:50
glance classification for determining

00:03:48 --> 00:03:52
where drivers are looking it's very

00:03:49 --> 00:03:55
different than annotation tools used for

00:03:51 --> 00:03:58
body pose estimation is very different

00:03:54 --> 00:04:00
han the tooling use that we use for

00:03:57 --> 00:04:02
psyche views investing thousands of

00:03:59 --> 00:04:05
dollars for the competition for this

00:04:01 --> 00:04:06
class to annotate fully scene

00:04:04 --> 00:04:09
segmentation where every pixel is

00:04:05 --> 00:04:10
colored there's needs to be tooling for

00:04:08 --> 00:04:13
each one of those elements and they're

00:04:09 --> 00:04:16
key that's HCI question that's a design

00:04:13 --> 00:04:19
question there's no deep learning

00:04:15 --> 00:04:22
there's no robotics in that question

00:04:18 --> 00:04:26
it's how do we leverage human

00:04:21 --> 00:04:28
computation human the human brain to mow

00:04:25 --> 00:04:30
effectively label images such that we

00:04:27 --> 00:04:36
can train y'all networks on them

00:04:29 --> 00:04:40
hardware in order to train these

00:04:35 --> 00:04:41
networks in order to parse the data we

00:04:39 --> 00:04:45
collect and we'll talk about we have now

00:04:40 --> 00:04:48
over five billion images of data of

00:04:44 --> 00:04:51
driving data in order to parse that you

00:04:47 --> 00:04:53
can't do it on a single machine you have

00:04:50 --> 00:04:57
to do large-scale distributed compute

00:04:52 --> 00:05:01
and large-scale distributed storage and

00:04:56 --> 00:05:05
finally the the stuff that's the most

00:05:00 --> 00:05:07
exciting that people that there's this

00:05:04 --> 00:05:09
class and many classes and much of the

00:05:06 --> 00:05:11
literature is focused on is the

00:05:08 --> 00:05:13
algorithms the deep learning algorithms

00:05:10 --> 00:05:14
the machine learning algorithms the

00:05:12 --> 00:05:16
algorithms that learn from data of

00:05:13 --> 00:05:19
course that's really exciting and

00:05:15 --> 00:05:22
important but what we find time and time

00:05:18 --> 00:05:25
again in real world systems is that as

00:05:21 --> 00:05:27
long as these algorithms learn from data

00:05:24 --> 00:05:30
so as long as this deep learning the

00:05:26 --> 00:05:32
data is what's much more important of

00:05:29 --> 00:05:35
course it's nice for the algorithms to

00:05:31 --> 00:05:37
be calibration free meaning they learn

00:05:34 --> 00:05:39
to calibrate self calibrate we don't

00:05:36 --> 00:05:41
need to have the sensors in an exact

00:05:38 --> 00:05:43
same position every time that's a very

00:05:40 --> 00:05:46
nice feature the robustness of the

00:05:42 --> 00:05:50
system is then generalizable across

00:05:45 --> 00:05:54
multiple multiple vehicles and multiple

00:05:49 --> 00:05:56
scenarios and one of the key things that

00:05:53 --> 00:05:59
comes up time again time and time again

00:05:55 --> 00:06:01
and we'll mention today is a lot of the

00:05:58 --> 00:06:02
algorithms developed in deep learning

00:06:00 --> 00:06:05
are really focused for computer vision

00:06:01 --> 00:06:08
are focused on single images now the

00:06:04 --> 00:06:10
real world is happens in both space and

00:06:07 --> 00:06:13
time and we have to have algorithms that

00:06:09 --> 00:06:15
both capture the visual characteristics

00:06:12 --> 00:06:16
but also look at the sequence of images

00:06:14 --> 00:06:18
equence of those digital

00:06:15 --> 00:06:20
characteristics that form the temporal

00:06:17 --> 00:06:22
dynamics the physics of this world so

00:06:19 --> 00:06:26
it's nice when those algorithms are able

00:06:21 --> 00:06:30
to capture the physics of the scene

00:06:25 --> 00:06:32
the big takeaway I would like if you

00:06:29 --> 00:06:35
leave with anything today

00:06:31 --> 00:06:38
unfortunately it's that the painful

00:06:34 --> 00:06:41
boring stuff of collecting data of

00:06:37 --> 00:06:44
cleaning that data of annotating that

00:06:40 --> 00:06:46
data in order to create successful

00:06:43 --> 00:06:48
systems is much more important than good

00:06:45 --> 00:06:50
algorithms or great algorithms it's

00:06:47 --> 00:06:53
important to have good algorithms as

00:06:49 --> 00:06:56
long as you have neural networks that

00:06:52 --> 00:06:59
learn from that data okay so today I'll

00:06:55 --> 00:07:04
talk I like to talk about human

00:06:58 --> 00:07:08
imperfections and the various detection

00:07:03 --> 00:07:11
problems the pedestrian body pose glance

00:07:07 --> 00:07:15
and motion cognitive load estimation

00:07:10 --> 00:07:19
that we can use to help those humans as

00:07:14 --> 00:07:26
they operate in the driving context and

00:07:18 --> 00:07:28
finally try to continue with the idea of

00:07:25 --> 00:07:30
the vision that fully autonomous

00:07:27 --> 00:07:32
vehicles as some of our guest speakers

00:07:29 --> 00:07:34
have spoke about and sterling anis will

00:07:31 --> 00:07:37
speak about tomorrow is really far away

00:07:33 --> 00:07:40
that the humans will be an integral part

00:07:36 --> 00:07:44
of the operating cooperating with the AI

00:07:39 --> 00:07:47
systems and I will continue on on that

00:07:43 --> 00:07:50
line of thought to try to motivate why

00:07:46 --> 00:07:53
we need to continuously approach the

00:07:49 --> 00:08:01
autonomous vehicle the self-driving car

00:07:52 --> 00:08:05
paradigm in the human centered way okay

00:08:00 --> 00:08:07
first before we talk about human

00:08:04 --> 00:08:09
imperfections let's just pause and

00:08:06 --> 00:08:13
acknowledge that humans are amazing

00:08:08 --> 00:08:17
we're actually really good at a lot of

00:08:12 --> 00:08:19
things that's sometimes sort of fun to

00:08:16 --> 00:08:21
talk about how much called terrible of

00:08:18 --> 00:08:23
drivers who are how distracted we are

00:08:20 --> 00:08:26
how irrational we are but we're actually

00:08:22 --> 00:08:29
really damn good at driving here's a

00:08:25 --> 00:08:31
video of stadia our soccer player messi

00:08:28 --> 00:08:35
the best soccer player in the world

00:08:30 --> 00:08:38
obviously and the state-of-the-art robot

00:08:34 --> 00:08:40
on the right same thing

00:08:37 --> 00:08:44
well there's it's not playing but I

00:08:39 --> 00:08:44
assure you the American Ninja Warrior

00:08:43 --> 00:08:53
Casey is is uh is far superior to the

00:08:49 --> 00:09:01
DARPA humanoid robotics systems shown on

00:08:52 --> 00:09:03
the right okay so continuing and the

00:09:00 --> 00:09:06
line of thought to challenge to

00:09:02 --> 00:09:10
challenge us here that humans are

00:09:05 --> 00:09:13
amazing is you know there's record high

00:09:09 --> 00:09:16
in 2016 in the United States there was

00:09:12 --> 00:09:19
over forty thousand since uh many years

00:09:15 --> 00:09:21
it's across the forty thousand

00:09:18 --> 00:09:23
fatalities mark more than forty thousand

00:09:20 --> 00:09:26
people died in car crashes in the United

00:09:22 --> 00:09:29
States but that's in three point two

00:09:25 --> 00:09:32
trillion miles traveled so that's one

00:09:28 --> 00:09:39
fatality per eighty million miles that's

00:09:31 --> 00:09:43
one in 625 chance of dying in a car

00:09:38 --> 00:09:46
crash in your lifetime interesting side

00:09:42 --> 00:09:49
fact for anyone in the United States

00:09:45 --> 00:09:52
folks who live in Massachusetts are the

00:09:48 --> 00:09:57
least likely to die in a car crash

00:09:51 --> 00:10:01
Montana is the most likely so for every

00:09:56 --> 00:10:03
one that thinks of Boston drives is

00:10:00 --> 00:10:06
terrible maybe that adds some

00:10:02 --> 00:10:08
perspective here's a visualization of

00:10:05 --> 00:10:11
ways data across a period of a day

00:10:08 --> 00:10:13
showing you the rich blood of the city

00:10:10 --> 00:10:16
that the the traffic flow of the city

00:10:12 --> 00:10:20
the people getting from A to B and a

00:10:15 --> 00:10:26
mass scale and doing it surviving doing

00:10:19 --> 00:10:30
it okay humans are amazing but they're

00:10:25 --> 00:10:32
also flawed texting sources of

00:10:29 --> 00:10:34
distraction with a smartphone the eating

00:10:31 --> 00:10:37
the secondary tasks of talking to other

00:10:33 --> 00:10:40
passengers grooming reading using

00:10:36 --> 00:10:44
navigation system yes sometimes watching

00:10:39 --> 00:10:48
video and manually adjusting or

00:10:43 --> 00:10:53
adjusting the radio and 3,000 people

00:10:47 --> 00:10:55
were killed and 400,000 were injured in

00:10:52 --> 00:10:56
motor vehicle crashes vaulted involving

00:10:54 --> 00:11:01
distraction

00:10:55 --> 00:11:06
in 2014 distraction is a it's a very

00:11:00 --> 00:11:07
serious issue for safety texting every

00:11:05 --> 00:11:09
day more and more people text

00:11:06 --> 00:11:12
smartphones are proliferating our

00:11:08 --> 00:11:14
society 170 billion text messages are

00:11:11 --> 00:11:17
sent in the United States every month

00:11:13 --> 00:11:18
at's in 2014 you can only imagine what

00:11:16 --> 00:11:21
it is today

00:11:17 --> 00:11:23
eyes off road for five seconds is the

00:11:20 --> 00:11:26
average time your eyes off the road

00:11:22 --> 00:11:29
while texting five seconds if you're

00:11:25 --> 00:11:31
traveling 55 miles an hour in that five

00:11:28 --> 00:11:33
seconds that's enough time to cover the

00:11:30 --> 00:11:35
length of a football field

00:11:32 --> 00:11:37
so you're blindfolded you're not looking

00:11:34 --> 00:11:40
at the road in five seconds the average

00:11:36 --> 00:11:42
time of texting you're covering the

00:11:39 --> 00:11:45
ntire football field eight so many

00:11:41 --> 00:11:52
things can happen in that moment of time

00:11:44 --> 00:11:53
that's distraction drunk driving 31% of

00:11:51 --> 00:11:57
traffic fatalities involve a drunk

00:11:52 --> 00:11:59
driver drunk driving 23% of nighttime

00:11:56 --> 00:12:00
drivers tested positive for a legal

00:11:58 --> 00:12:04
prescription or over-the-counter

00:11:59 --> 00:12:06
medication distracted driving as I said

00:12:03 --> 00:12:09
is a huge safety risk drowsy driving

00:12:05 --> 00:12:11
people driving tired nearly three

00:12:08 --> 00:12:16
percent of all traffic fatalities

00:12:10 --> 00:12:19
involve a drowsy driver if you are

00:12:15 --> 00:12:22
uncomfortable with videos that involve

00:12:18 --> 00:12:24
risk I urge you to look away these are

00:12:21 --> 00:12:26
videos collected by Triple A of

00:12:23 --> 00:12:28
teenagers a very large-scale

00:12:25 --> 00:12:30
naturalistic driving data set and it's

00:12:27 --> 00:12:34
capturing clips of teenagers being

00:12:29 --> 00:12:34
distracted on their smartphone

00:12:35 --> 00:12:41
[Music]

00:13:24 --> 00:13:30
once you take it in the problem we're

00:13:27 --> 00:13:30
against

00:13:39 --> 00:13:45
so in the cutting

00:13:41 --> 00:13:48
context of human imperfections we have

00:13:44 --> 00:13:50
to ask ourselves is the human centered

00:13:47 --> 00:13:52
approach to autonomy in systems

00:13:49 --> 00:13:54
autonomous vehicles that are using

00:13:51 --> 00:13:57
artificial intelligence to aid the

00:13:53 --> 00:13:59
driving task do we want to go as I

00:13:56 --> 00:14:02
mentioned a couple of lectures ago the

00:13:58 --> 00:14:04
human centered way or the full autonomy

00:14:01 --> 00:14:06
way the tempting path is towards full

00:14:03 --> 00:14:09
autonomy where we removed this imperfect

00:14:05 --> 00:14:12
flawed human from the picture altogether

00:14:08 --> 00:14:14
and focus on the robotics problem of

00:14:11 --> 00:14:19
perception and control and planning and

00:14:13 --> 00:14:22
riving policy or do we work together

00:14:18 --> 00:14:25
human and machine to improve the safety

00:14:21 --> 00:14:27
to alleviate distraction to bring drive

00:14:24 --> 00:14:29
our attention back to the road and use

00:14:26 --> 00:14:32
artificial intelligence to increase

00:14:28 --> 00:14:34
safety through collaboration human robot

00:14:31 --> 00:14:39
interaction versus removing the human

00:14:33 --> 00:14:43
completely from the picture as I've

00:14:38 --> 00:14:46
mentioned as as sterling will certainly

00:14:42 --> 00:14:51
talk about tomorrow and and rightfully

00:14:45 --> 00:14:54
so and yesterday or on Tuesday Emilio

00:14:50 --> 00:14:57
has talked about the elf four-way is

00:14:53 --> 00:15:01
grounded in literature it's grounded in

00:14:56 --> 00:15:04
common sense since in some sense it's

00:15:00 --> 00:15:07
you can count on the fact that humans

00:15:03 --> 00:15:11
the the natural flaws of human beings to

00:15:06 --> 00:15:13
ver trust to misbehave to be irrational

00:15:10 --> 00:15:16
about their risk estimates will result

00:15:12 --> 00:15:20
in improper use of the technology and

00:15:15 --> 00:15:22
that leads to what I've showed before

00:15:19 --> 00:15:24
the public perception of what drivers do

00:15:21 --> 00:15:26
and semi autonomous vehicles they begin

00:15:23 --> 00:15:28
to over trust the moment the system

00:15:25 --> 00:15:31
works well they begin to over trust they

00:15:27 --> 00:15:33
begin to do stuff they're not supposed

00:15:30 --> 00:15:36
to be doing in the car taking it for

00:15:32 --> 00:15:39
granted a recent video that somebody

00:15:35 --> 00:15:42
posted this is a common sort of more

00:15:38 --> 00:15:46
practical concern that people have is

00:15:41 --> 00:15:49
while the traditional ways to ensure the

00:15:45 --> 00:15:51
physical engagement of the driver is by

00:15:48 --> 00:15:52
saying they should touch the wheel the

00:15:50 --> 00:15:55
steering wheel every once in a while

00:15:51 --> 00:15:57
and of course there's ways to buy

00:15:54 --> 00:16:01
the need to touch the steering wheel

00:15:56 --> 00:16:03
some people hang objects like I can off

00:16:00 --> 00:16:07
of the steering wheel in this case

00:16:02 --> 00:16:12
brilliantly I have to say they shove an

00:16:06 --> 00:16:14
orange into the into the wheel to make

00:16:11 --> 00:16:16
the touch sensor fire and therefore be

00:16:13 --> 00:16:20
able to take their hands off the

00:16:15 --> 00:16:22
autopilot and that that kind of idea

00:16:19 --> 00:16:24
makes us believe that there's no way

00:16:21 --> 00:16:28
that you know humans will find a way to

00:16:24 --> 00:16:32
misuse this technology however I believe

00:16:27 --> 00:16:34
that that's not giving the technology

00:16:31 --> 00:16:36
enough credit artificial intelligence

00:16:33 --> 00:16:39
systems if are they're able to perceive

00:16:35 --> 00:16:41
the human being are also able to work

00:16:38 --> 00:16:45
with the human being and that's what I'd

00:16:40 --> 00:16:48
like to talk about today teaching cars

00:16:44 --> 00:16:52
to perceive the human being and it all

00:16:48 --> 00:16:54
starts with data it's all about data as

00:16:51 --> 00:16:56
I mentioned data is everything in these

00:16:53 --> 00:16:59
real world systems with the MIT

00:16:55 --> 00:17:02
naturalistic driving data set of 25

00:16:58 --> 00:17:04
vehicles of which 25 and 21 and equipped

00:17:01 --> 00:17:06
with Tesla autopilot we instrument them

00:17:03 --> 00:17:09
this is what we do the data collection

00:17:05 --> 00:17:11
two cameras on the driver will see the

00:17:08 --> 00:17:13
cameras on the face capturing

00:17:10 --> 00:17:15
high-definition video of the face that's

00:17:12 --> 00:17:17
where we get the glance classification

00:17:14 --> 00:17:19
the emotion recognition cognitive load

00:17:16 --> 00:17:21
everything coming from the face that we

00:17:18 --> 00:17:23
have another camera or a fisheye that's

00:17:20 --> 00:17:25
looking at the body of the driver and

00:17:22 --> 00:17:28
that from that comes the body pose

00:17:24 --> 00:17:31
stimation hands on wheel activity

00:17:27 --> 00:17:33
recognition and then one video looking

00:17:30 --> 00:17:34
out for the full scene segmentation for

00:17:32 --> 00:17:36
all the scene perception tasks and

00:17:33 --> 00:17:38
everything is being recorded

00:17:35 --> 00:17:40
synchronized together with GPS with

00:17:37 --> 00:17:43
audio with all the can covered from the

00:17:39 --> 00:17:49
car on a single device synchronization

00:17:42 --> 00:17:54
of this data is critical so that's one

00:17:48 --> 00:17:56
road trip in the data where thousands

00:17:53 --> 00:17:58
like it traveling hundreds of miles

00:17:55 --> 00:18:03
ometimes hundreds of miles under

00:17:57 --> 00:18:04
automated control and autopilot that's

00:18:02 --> 00:18:08
the data

00:18:03 --> 00:18:10
gain as I said data is everything and

00:18:07 --> 00:18:13
from this data we can both gain

00:18:09 --> 00:18:15
understanding what people do which is

00:18:12 --> 00:18:18
really important to understand how

00:18:14 --> 00:18:21
autonomy successful autonomy can be

00:18:17 --> 00:18:24
deployed in the real world and to design

00:18:20 --> 00:18:26
algorithms as for training for training

00:18:23 --> 00:18:29
the deep learning the deep neural

00:18:25 --> 00:18:33
networks in order to perform the

00:18:28 --> 00:18:40
perception tasks better twenty five

00:18:32 --> 00:18:43
beagles 21 Tesla's Model S Model X and

00:18:39 --> 00:18:45
now model three over a thousand miles

00:18:42 --> 00:18:47
collected a day every single day we have

00:18:44 --> 00:18:49
thousands of miles in the Boston

00:18:46 --> 00:18:52
Massachusetts area driving around all of

00:18:48 --> 00:18:58
that video being recorded now over five

00:18:51 --> 00:19:02
billion video frames there are several

00:18:57 --> 00:19:08
ways to look at autonomy one of the big

00:19:01 --> 00:19:10
ones is safety that's what everybody

00:19:07 --> 00:19:15
talks about how do we make these things

00:19:09 --> 00:19:18
afe but the other one is enjoyment do

00:19:14 --> 00:19:21
people actually want to use it it we can

00:19:17 --> 00:19:24
create a perfectly safe system we can

00:19:20 --> 00:19:28
create it right now we've had it for

00:19:23 --> 00:19:30
ever before even cars a car that never

00:19:27 --> 00:19:34
moves is a perfectly safe system well

00:19:29 --> 00:19:36
not perfectly but almost and but it

00:19:33 --> 00:19:38
doesn't provide a service that's

00:19:35 --> 00:19:41
valuable it doesn't provide an enjoyable

00:19:37 --> 00:19:43
driving experience so okay what about

00:19:40 --> 00:19:46
slow moving vehicles that's an open

00:19:42 --> 00:19:49
question the reality is with these Tesla

00:19:45 --> 00:19:52
vehicles and l2 systems doing automated

00:19:48 --> 00:19:55
riving people are driving 33% of miles

00:19:51 --> 00:19:58
using Tesla autopilot what does that

00:19:54 --> 00:20:00
mean that means that people are getting

00:19:57 --> 00:20:03
value from it they a large fraction of

00:19:59 --> 00:20:09
their driving is done an automated way

00:20:02 --> 00:20:11
that's value that's enjoyment the glance

00:20:08 --> 00:20:15
suffocation algorithm we'll talk about

00:20:10 --> 00:20:17
oday is used as one example that we use

00:20:14 --> 00:20:19
to understand what's in this data shown

00:20:16 --> 00:20:21
with the bar graphs there and the red

00:20:18 --> 00:20:23
and the blue red is during manual

00:20:20 --> 00:20:25
driving blues during autopilot driving

00:20:22 --> 00:20:27
and we look at glance classification

00:20:24 --> 00:20:29
regions of where drivers are looking on

00:20:26 --> 00:20:31
road and off-road and if that

00:20:28 --> 00:20:35
distribution changes with automated

00:20:30 --> 00:20:37
riving or manual driving and would

00:20:34 --> 00:20:38
these glass classification methods we

00:20:36 --> 00:20:41
can determine that there's not much

00:20:37 --> 00:20:43
difference at least until you dig into

00:20:40 --> 00:20:45
the details which we haven't done and

00:20:42 --> 00:20:50
the aggregate there's not a significant

00:20:44 --> 00:20:53
difference that means people are getting

00:20:49 --> 00:20:57
value enjoying using these technologies

00:20:52 --> 00:21:01
but yet they're staying attentive or at

00:20:56 --> 00:21:04
least not attentive but physically

00:21:00 --> 00:21:06
engaged when your eyes are on the road

00:21:03 --> 00:21:09
you might not be attentive but you're at

00:21:05 --> 00:21:10
he very least physically your body's

00:21:08 --> 00:21:12
position in such a way your head is

00:21:09 --> 00:21:14
looking at the forward roadway that

00:21:11 --> 00:21:17
you're physically in position to be

00:21:13 --> 00:21:23
alert and to take in the forward roadway

00:21:16 --> 00:21:26
so they're using it and they don't over

00:21:22 --> 00:21:29
trust it and that's I think the sweet

00:21:25 --> 00:21:34
spot that human-robot interaction needs

00:21:28 --> 00:21:37
to achieve is the human gaining through

00:21:33 --> 00:21:39
experience through exploration through

00:21:36 --> 00:21:41
trial and error exploring and

00:21:38 --> 00:21:43
understanding the limitation of the

00:21:40 --> 00:21:45
system to a degree that over trust can

00:21:42 --> 00:21:49
occur that seems to be happening in this

00:21:44 --> 00:21:51
ystem and using the computer vision

00:21:48 --> 00:21:53
methods I'll talk about we can continue

00:21:50 --> 00:21:57
to explore how that can be achieved in

00:21:52 --> 00:21:59
other systems when the when the when the

00:21:56 --> 00:22:07
fraction of automated driving increases

00:21:58 --> 00:22:08
from 30% to 40% to 50% and so on it's

00:22:06 --> 00:22:10
all

00:22:07 --> 00:22:12
about the data and I'll I'll harp on

00:22:09 --> 00:22:14
this again the algorithms are

00:22:11 --> 00:22:16
interesting you know I will mention of

00:22:13 --> 00:22:19
course it's the same convolution neural

00:22:15 --> 00:22:23
networks it's the same networks that

00:22:18 --> 00:22:26
ake in raw pixels and extract features

00:22:22 --> 00:22:28
of interest it's 3d convolutional neural

00:22:25 --> 00:22:30
networks that take into sequences of

00:22:27 --> 00:22:32
images and extract the temporal dynamics

00:22:29 --> 00:22:35
along with the visual characteristic for

00:22:31 --> 00:22:37
the individual images it's RN and

00:22:34 --> 00:22:40
zoella's TMS that use the convolutional

00:22:36 --> 00:22:43
neural networks to extract features and

00:22:39 --> 00:22:44
over time look at the dynamics and the

00:22:42 --> 00:22:47
images these are pretty basic

00:22:43 --> 00:22:50
architecture is the same kind of deep

00:22:46 --> 00:22:52
neural network architectures but they

00:22:49 --> 00:22:58
rely fundamentally and deeply on the

00:22:51 --> 00:23:01
data on real-world data so let's start

00:22:57 --> 00:23:02
where perhaps on the human sensing side

00:23:00 --> 00:23:10
it all began which is pedestrian

00:23:01 --> 00:23:12
detection decades ago to put it in con

00:23:09 --> 00:23:14
texe pedestrian detection here shown

00:23:11 --> 00:23:18
from left to right on the left is green

00:23:13 --> 00:23:21
showing the easier human sensing tasks

00:23:17 --> 00:23:23
of sensing some aspect to a human

00:23:20 --> 00:23:26
being but as for your detection which is

00:23:22 --> 00:23:30
detecting the full body of a human being

00:23:25 --> 00:23:32
in an image or video is one of the

00:23:29 --> 00:23:35
asier computer vision tasks and on the

00:23:31 --> 00:23:37
right under in the red microcircuits

00:23:34 --> 00:23:40
these are the tremors of the eye or

00:23:36 --> 00:23:42
measuring the pupil diameter or

00:23:39 --> 00:23:45
measuring the cognitive load or the fine

00:23:41 --> 00:23:49
blink dynamics of the eye the velocity

00:23:44 --> 00:23:51
of the blink micro glances and I pose

00:23:48 --> 00:23:52
are much harder problems

00:23:50 --> 00:23:55
o you think body pose estimation

00:23:51 --> 00:23:57
pedestrian detection phase

00:23:54 --> 00:23:59
classification detection recognition

00:23:56 --> 00:24:01
head pose estimation all those are

00:23:58 --> 00:24:03
asier tasks anything that starts

00:24:00 --> 00:24:05
getting smaller looking at the eye and

00:24:02 --> 00:24:08
everything that start getting

00:24:04 --> 00:24:10
fine-grained there's much more difficult

00:24:07 --> 00:24:14
so we start at the easiest pedestrian

00:24:09 --> 00:24:16
detection and as the usual challenges of

00:24:13 --> 00:24:17
all of computer vision we've talked

00:24:15 --> 00:24:21
about as the various styles of

00:24:16 --> 00:24:23
appearance so the inter class variation

00:24:20 --> 00:24:28
the different possible articulations

00:24:22 --> 00:24:31
of put it of our bodies superseded only

00:24:27 --> 00:24:33
perhaps by cats but as humans are pretty

00:24:30 --> 00:24:35
flexible as well the presence of

00:24:32 --> 00:24:37
occlusion from the accessories that we

00:24:34 --> 00:24:40
ar to occluding self occlusion and

00:24:36 --> 00:24:42
including each other but that crowded

00:24:39 --> 00:24:45
scenes have a lot of humans in them and

00:24:41 --> 00:24:47
they include each other and therefore to

00:24:44 --> 00:24:49
be able to disambiguate to figure out

00:24:46 --> 00:24:51
each individual pedestrians is a very

00:24:48 --> 00:24:54
challenging problem so how do people

00:24:50 --> 00:25:00
approach this problem well there is I

00:24:53 --> 00:25:04
need to extract features from raw pixels

00:24:59 --> 00:25:10
whether that was hot cascades hog or CNN

00:25:03 --> 00:25:12
the through the decades the sliding

00:25:09 --> 00:25:14
window approach was used because the

00:25:11 --> 00:25:16
pedestrians can be small in an image or

00:25:13 --> 00:25:18
big so there's the problem of scale so

00:25:15 --> 00:25:21
you use a sliding window to detect where

00:25:17 --> 00:25:23
that pedestrian is you have a classifier

00:25:20 --> 00:25:25
that's given a single image such as this

00:25:22 --> 00:25:28
that's you're not you take that classify

00:25:24 --> 00:25:30
ou slide across the image to find where

00:25:27 --> 00:25:33
all the pedestrians of scene are so you

00:25:29 --> 00:25:35
can use non neural network methods or

00:25:32 --> 00:25:37
you can use convolution neural networks

00:25:34 --> 00:25:41
for that classifier it's extremely

00:25:36 --> 00:25:43
inefficient then came along our CNN fast

00:25:40 --> 00:25:47
our CNN these are networks

00:25:42 --> 00:25:49
that as opposed to doing a complete

00:25:46 --> 00:25:52
sliding window approach are much more

00:25:48 --> 00:25:54
intelligent clever about generating the

00:25:51 --> 00:25:56
candidates to consider so as opposed to

00:25:53 --> 00:25:58
considering every possible position of a

00:25:55 --> 00:26:02
window different scales of the window

00:25:57 --> 00:26:04
they generate more a small subset of

00:26:01 --> 00:26:07
candidates that are more likely and

00:26:03 --> 00:26:08
finally using a CNN classify for those

00:26:06 --> 00:26:11
candidates whether there's a pedestrian

00:26:07 --> 00:26:15
or not whether the there's an object of

00:26:10 --> 00:26:16
interest or not a face or not and using

00:26:14 --> 00:26:19
that maximum suppression because there's

00:26:15 --> 00:26:20
overlapping bounding boxes to figure out

00:26:18 --> 00:26:22
what is the most likely bounding box

00:26:19 --> 00:26:25
around this pedestrian around this

00:26:21 --> 00:26:27
object that's our CNN and there's a lot

00:26:24 --> 00:26:30
of variants now with masks our CNN

00:26:26 --> 00:26:35
really the state-of-the-art localization

00:26:29 --> 00:26:37
Network mask also adds to this on top of

00:26:34 --> 00:26:38
the body box also performed segmentation

00:26:36 --> 00:26:40
there's voxel net which does

00:26:37 --> 00:26:43
three-dimensional and light our data

00:26:39 --> 00:26:45
uses localization and point clouds so

00:26:42 --> 00:26:48
it's not just using it to the images but

00:26:44 --> 00:26:52
in 3d but it's it's it's all kind of

00:26:47 --> 00:26:57
grounded in the our CNN framework ok

00:26:51 --> 00:26:59
data so we have large-scale data

00:26:56 --> 00:27:01
collection going on here in Cambridge if

00:26:58 --> 00:27:04
you've seen cameras a lidar various

00:27:00 --> 00:27:06
intersections throughout MIT we're part

00:27:03 --> 00:27:08
of that so for example here's one of the

00:27:05 --> 00:27:12
intersections to collecting about 10

00:27:07 --> 00:27:15
hours a day instrumenting it with

00:27:11 --> 00:27:19
various sensors I'll mention but we see

00:27:14 --> 00:27:23
about 12,000 pedestrians a day across

00:27:18 --> 00:27:28
that particular intersection using 4k

00:27:22 --> 00:27:31
cameras using stereo vision cameras 360

00:27:27 --> 00:27:35
now the insta 360 which is an 8k 360

00:27:30 --> 00:27:38
camera gopro lidar various sizes the 64

00:27:34 --> 00:27:44
channel of the 6

00:27:37 --> 00:27:46
and recording this is where this is the

00:27:43 --> 00:27:50
this is where the data comes from this

00:27:45 --> 00:27:53
from the 360 video this is from the

00:27:49 --> 00:27:57
lidar data of the same intersection this

00:27:52 --> 00:28:01
for the 4k camcorders pointing at a

00:27:56 --> 00:28:04
different intersection and the different

00:28:00 --> 00:28:05
han capturing the entire 360 view with

00:28:03 --> 00:28:08
e vehicles approaching in the

00:28:04 --> 00:28:11
pedestrians making crossing decisions

00:28:07 --> 00:28:13
this is understanding the negotiation

00:28:10 --> 00:28:15
that pedestrian is the nonverbal

00:28:12 --> 00:28:17
negotiation that pedestrians perform and

00:28:14 --> 00:28:18
choosing to cross or not especially when

00:28:16 --> 00:28:23
they're jaywalking and everybody

00:28:17 --> 00:28:24
jaywalks especially if you're familiar

00:28:22 --> 00:28:26
with this particular intersection

00:28:23 --> 00:28:29
there's more Jay walkers than non

00:28:25 --> 00:28:31
jaywalkers it's a fascinating one and so

00:28:28 --> 00:28:34
we record everything about the driver

00:28:30 --> 00:28:37
and everything about the pedestrians

00:28:33 --> 00:28:40
again our CNN this is where it comes in

00:28:36 --> 00:28:41
is you do Bonney box detection of the

00:28:39 --> 00:28:43
pedestrians here are the vehicles as

00:28:40 --> 00:28:49
well and allows you to convert this raw

00:28:42 --> 00:28:53
data into hours of pedestrian crossing

00:28:48 --> 00:28:56
decisions and begin to interpret it

00:28:52 --> 00:29:02
hat's pedestrian detection bounding box

00:28:55 --> 00:29:04
for body pose estimation is the more

00:29:01 --> 00:29:08
difficult task body pose estimation is

00:29:03 --> 00:29:11
also finding the joints the hands the

00:29:07 --> 00:29:15
lbows the shoulders the hips knees feet

00:29:10 --> 00:29:18
he landmark points in the image XY

00:29:14 --> 00:29:21
position that marked that those joints

00:29:17 --> 00:29:23
that's body pose estimation so why is

00:29:20 --> 00:29:25
that important in driving for example

00:29:22 --> 00:29:27
it's it's important to determine the

00:29:24 --> 00:29:30
vertical position or the alignment of

00:29:26 --> 00:29:33
the driver the seatbelts and the sort of

00:29:29 --> 00:29:34
the the airbag testing is always

00:29:32 --> 00:29:36
performing the seatbelt testing is

00:29:33 --> 00:29:38
performed with the dummy considering the

00:29:35 --> 00:29:42
frontal position in a standard dummy

00:29:37 --> 00:29:45
position the the greater greater degrees

00:29:41 --> 00:29:46
of automation comes more capability and

00:29:44 --> 00:29:49
flexibility for the driver to get

00:29:46 --> 00:29:52
misaligned from the standard corner

00:29:48 --> 00:29:54
dummy position and so body pose or at

00:29:51 --> 00:29:56
least upper body pose estimation allows

00:29:53 --> 00:30:00
you to determine how often these drivers

00:29:55 --> 00:30:02
get out of line from the standard

00:29:59 --> 00:30:04
position the general movement and then

00:30:01 --> 00:30:09
you can look at hands on wheel

00:30:03 --> 00:30:12
smartphone smartphone detection activity

00:30:08 --> 00:30:15
and help add context to glance

00:30:11 --> 00:30:18
stimation that which we'll talk about

00:30:14 --> 00:30:21
so some of the more traditional methods

00:30:17 --> 00:30:23
were sequential is detecting first the

00:30:20 --> 00:30:29
ad and then stepping detecting the

00:30:22 --> 00:30:33
shoulders the elbows the hands the

00:30:28 --> 00:30:37
depot's holistic view which has been the

00:30:32 --> 00:30:42
very powerful successful way for multi

00:30:36 --> 00:30:46
person pose estimation is performing a

00:30:41 --> 00:30:49
regression of detecting body parts from

00:30:45 --> 00:30:51
the entire image it's not sequentially

00:30:48 --> 00:30:54
stitching bodies together it's detecting

00:30:50 --> 00:30:57
the left elbow the right elbow the hands

00:30:53 --> 00:30:58
individually it's performing that

00:30:56 --> 00:31:04
detection and then stitching everything

00:30:57 --> 00:31:07
together afterwards allowing you to deal

00:31:03 --> 00:31:09
with the crazy deformations of the body

00:31:06 --> 00:31:12
that happened the occlusions and so on

00:31:08 --> 00:31:17
because you don't need all the joints to

00:31:11 --> 00:31:20
be visible and with this cascade of pose

00:31:16 --> 00:31:21
regressors meaning these are

00:31:19 --> 00:31:24
convolutional neural networks had taken

00:31:20 --> 00:31:26
a raw image and produce an XY position

00:31:23 --> 00:31:30
of their estimate of each individual

00:31:25 --> 00:31:34
joint input as an image output is an

00:31:29 --> 00:31:37
estimate of a joint of elbow shoulder

00:31:33 --> 00:31:41
whatever one of several landmarks and

00:31:36 --> 00:31:43
then you can build on top of that every

00:31:40 --> 00:31:47
estimation zooms in on that particular

00:31:42 --> 00:31:49
ea and performs a finer and finer

00:31:46 --> 00:31:53
grain estimation of the exact position

00:31:48 --> 00:31:56
of the Joye repeating it over and over

00:31:52 --> 00:31:59
so through this process we can

00:31:55 --> 00:32:01
do part detection and multi-person and

00:31:58 --> 00:32:04
multi-person scene that contain multiple

00:32:00 --> 00:32:06
people so we can detect the the head the

00:32:03 --> 00:32:09
neck here the hands the elbows shown in

00:32:05 --> 00:32:11
the various images on the right that

00:32:08 --> 00:32:13
don't have an understanding who the head

00:32:10 --> 00:32:17
the elbows the the hands belong to

00:32:12 --> 00:32:19
it's just performing a detection without

00:32:16 --> 00:32:26
rying to do individual person detection

00:32:18 --> 00:32:28
first and then finally connecting or not

00:32:25 --> 00:32:31
finally but next step is connecting with

00:32:27 --> 00:32:34
part affinity fields is connecting those

00:32:30 --> 00:32:35
parts together so first you detect

00:32:33 --> 00:32:37
individual parts then you connect them

00:32:34 --> 00:32:41
together and then through bipartite

00:32:36 --> 00:32:42
matching you determine which is who is

00:32:40 --> 00:32:44
that each individual body part most

00:32:41 --> 00:32:46
likely belonging to so you kind of

00:32:43 --> 00:32:47
stitch the different people together in

00:32:45 --> 00:32:51
the scene after

00:32:46 --> 00:32:51
the detection is performed with the CNN

00:32:52 --> 00:32:58
we use this approach for detecting the

00:32:55 --> 00:33:03
upper body specifically the shoulders

00:32:57 --> 00:33:07
the neck and the head eyes nose ears

00:33:02 --> 00:33:10
that is used to determine the the

00:33:06 --> 00:33:12
position of the driver relative to the

00:33:09 --> 00:33:14
standard dummy position for example

00:33:11 --> 00:33:18
looking during autopilot driving

00:33:13 --> 00:33:20
30-minute periods we can look at on the

00:33:17 --> 00:33:21
x-axis is time and the y-axis is the

00:33:19 --> 00:33:24
position of the neck point that I

00:33:20 --> 00:33:28
pointed out in the previous slide that

00:33:23 --> 00:33:31
he the the midpoint between the two

00:33:27 --> 00:33:33
shoulders the neck is the position over

00:33:30 --> 00:33:37
time relative to where it began this is

00:33:32 --> 00:33:39
the slouching the sinking into the seat

00:33:36 --> 00:33:42
allowing the car to know that

00:33:38 --> 00:33:43
information and allowing us or the

00:33:41 --> 00:33:47
designers of safety systems and all that

00:33:42 --> 00:33:49
information is really important we can

00:33:46 --> 00:33:51
use the same body pose algorithm to from

00:33:48 --> 00:33:53
the perspective of the vehicle outside

00:33:50 --> 00:33:55
the vehicle perspective so the vehicle

00:33:52 --> 00:33:57
looking out is doing the as opposed to

00:33:54 --> 00:34:02
just plain pedestrian detection using

00:33:56 --> 00:34:06
body pose estimation again here in

00:34:01 --> 00:34:08
Kendall Square vehicles crossing

00:34:05 --> 00:34:11
observing pedestrians making crossing

00:34:07 --> 00:34:16
decisions and performing body pose

00:34:10 --> 00:34:16
stimation which allows you to then

00:34:16 --> 00:34:22
generate visualizations like this and

00:34:19 --> 00:34:27
gain understanding like this on the

00:34:21 --> 00:34:29
x-axis is time on the y-axis is on the

00:34:26 --> 00:34:32
top plot in blue is the speed of the

00:34:28 --> 00:34:34
vehicle the speed of the vehicle the ego

00:34:31 --> 00:34:37
vehicle from which the camera is

00:34:33 --> 00:34:41
observing the scene and on the bottom in

00:34:36 --> 00:34:44
green up and down as a binary value

00:34:40 --> 00:34:46
whether the Podesta when the pedestrian

00:34:43 --> 00:34:49
is not looking at the car one when the

00:34:45 --> 00:34:51
pedestrian is looking at the car so we

00:34:48 --> 00:34:52
can look at thousands of episodes like

00:34:50 --> 00:34:54
this crossing decisions nonverbal

00:34:51 --> 00:34:59
communication decisions and determine

00:34:53 --> 00:35:00
using body pose estimation the dynamics

00:34:58 --> 00:35:05
of this nonverbal

00:34:59 --> 00:35:07
here just nearby by media lab crossing

00:35:04 --> 00:35:09
there's a pedestrian approaches we can

00:35:06 --> 00:35:12
look in green there when the pedestrian

00:35:08 --> 00:35:15
glasses looks away glasses the car looks

00:35:11 --> 00:35:18
away fascinating glance behavior that

00:35:14 --> 00:35:25
happens interesting most people look

00:35:17 --> 00:35:27
away before they cross same thing here

00:35:24 --> 00:35:30
this is just an example we have

00:35:26 --> 00:35:32
thousands of these body pose estimation

00:35:29 --> 00:35:35
allows you to get this fine-grained

00:35:31 --> 00:35:38
information about the pedestrian glance

00:35:34 --> 00:35:43
behavior pedestrian body behavior

00:35:37 --> 00:35:45
hesitation glass classification one of

00:35:42 --> 00:35:49
the most important things in driving is

00:35:44 --> 00:35:54
determining where drivers are looking it

00:35:48 --> 00:35:58
if there's any sensing that I advocate

00:35:53 --> 00:36:00
and is has the most impact in the

00:35:57 --> 00:36:04
driving context is for the car to know

00:35:59 --> 00:36:09
here the driver is looking and at the

00:36:03 --> 00:36:11
very crude region level information of

00:36:08 --> 00:36:12
is the driver looking on road or off

00:36:10 --> 00:36:15
road that's what we mean by glance

00:36:11 --> 00:36:17
classification it's not the standard

00:36:14 --> 00:36:19
gaze estimation problem of X Y Z

00:36:16 --> 00:36:22
determining where the eye pose and the

00:36:19 --> 00:36:24
ad pose combined to determine where

00:36:21 --> 00:36:28
the driver is looking no this is

00:36:23 --> 00:36:31
classifying two regions on road off-road

00:36:27 --> 00:36:34
or six regions on road off road left

00:36:30 --> 00:36:37
right center stack rearview mirror and

00:36:33 --> 00:36:42
instrument cluster so it's region based

00:36:36 --> 00:36:44
glance allocation not the geometric gaze

00:36:41 --> 00:36:47
stimation problem why is that important

00:36:43 --> 00:36:50
it allows you to address it as a machine

00:36:46 --> 00:36:52
learning problem it's a subtle but

00:36:49 --> 00:36:55
critical point every problem we try to

00:36:51 --> 00:36:58
solve in human sensing in driver sensing

00:36:54 --> 00:37:03
has to be learn about from data

00:36:57 --> 00:37:05
otherwise it's not it's not amenable to

00:37:02 --> 00:37:08
application in the real world we can't

00:37:04 --> 00:37:10
design systems in the lab that are

00:37:07 --> 00:37:14
deployed without learning if they

00:37:09 --> 00:37:17
involve a human it's possible to do slam

00:37:13 --> 00:37:20
localization by having really good

00:37:16 --> 00:37:22
sensors and doing localization using

00:37:19 --> 00:37:25
those sensors without much learning it's

00:37:21 --> 00:37:27
not possible to design systems that deal

00:37:24 --> 00:37:30
with lighting variability and the full

00:37:26 --> 00:37:32
variability of human behavior without

00:37:29 --> 00:37:35
being able to learn so gaze estimation

00:37:31 --> 00:37:37
the geometric approach of finding the

00:37:34 --> 00:37:40
landmarks in the face and from those

00:37:36 --> 00:37:42
landmarks determining the the Jeremie

00:37:39 --> 00:37:44
the orientation of the head and the

00:37:41 --> 00:37:46
orientation of the eyes there's no

00:37:43 --> 00:37:48
learning there outside of actually

00:37:45 --> 00:37:51
training the systems to detect the

00:37:47 --> 00:37:53
different landmarks if we convert this

00:37:50 --> 00:37:58
into a gaze classification problem shown

00:37:52 --> 00:38:02
here glass classification is when taking

00:37:57 --> 00:38:05
the raw video stream determining in post

00:38:01 --> 00:38:07
so humans are annotating this video is

00:38:04 --> 00:38:12
the driver which region the driver is

00:38:06 --> 00:38:13
looking at that's we're able to do by

00:38:11 --> 00:38:16
converting the problem into a simple

00:38:12 --> 00:38:19
variant of classification on-road

00:38:15 --> 00:38:23
off-road left-right the same can be done

00:38:18 --> 00:38:25
for pedestrians left forward right it

00:38:22 --> 00:38:29
can annotate regions of where they are

00:38:24 --> 00:38:31
looking and using that kind of

00:38:28 --> 00:38:33
classification approach determine are

00:38:30 --> 00:38:35
they looking at the cars or not are they

00:38:32 --> 00:38:37
looking away are they looking at their

00:38:34 --> 00:38:40
smartphone without doing the 3d gaze

00:38:36 --> 00:38:42
stimation again it's a subtle point but

00:38:39 --> 00:38:43
hink about it if you wanted to estimate

00:38:41 --> 00:38:47
xactly where they're looking

00:38:42 --> 00:38:50
you need that ground truth you don't

00:38:46 --> 00:38:51
have that ground truth unless you there

00:38:49 --> 00:38:53
's no in the real world data

00:38:51 --> 00:38:55
there's no way to get the information

00:38:52 --> 00:38:58
about where exactly people were looking

00:38:54 --> 00:39:00
you're only inferring so you have to

00:38:57 --> 00:39:01
convert it into a region based

00:38:59 --> 00:39:04
classification problem in order to be

00:39:00 --> 00:39:06
able to train your networks on this and

00:39:03 --> 00:39:11
the pipeline is the same the source

00:39:05 --> 00:39:13
video here the face the the 30 frames a

00:39:10 --> 00:39:16
second video coming in of the drivers

00:39:12 --> 00:39:17
face of the human face there is some

00:39:15 --> 00:39:20
degree of calibration that's required

00:39:16 --> 00:39:22
you have to determine approximately

00:39:19 --> 00:39:24
where the sensor is that's taking in the

00:39:21 --> 00:39:27
image especially for the glance

00:39:23 --> 00:39:27
classification task because its region

00:39:26 --> 00:39:30
based

00:39:26 --> 00:39:33
needs to be able to estimate where the

00:39:29 --> 00:39:37
forward roadway is where the the camera

00:39:32 --> 00:39:40
frame is relative the world frame the

00:39:36 --> 00:39:41
video stabilization and the face front

00:39:39 --> 00:39:43
elevation all the basic processing

00:39:40 --> 00:39:46
they've removed the vibration of the

00:39:42 --> 00:39:48
noise that remove the physical movement

00:39:45 --> 00:39:51
of the head that removed the shaking of

00:39:47 --> 00:39:52
the car in order to be able to determine

00:39:50 --> 00:39:56
stuff about eye movement and blink

00:39:51 --> 00:40:00
dynamics and finally with the neural

00:39:55 --> 00:40:03
networks there is nothing left except

00:39:59 --> 00:40:06
aking in the raw video of the face for

00:40:02 --> 00:40:08
the glass classification tasks and the

00:40:05 --> 00:40:10
ye for the cognitive load tasks raw

00:40:07 --> 00:40:12
pixels that's the input to these

00:40:09 --> 00:40:16
networks and the output is whatever the

00:40:11 --> 00:40:18
training data is and we'll mention each

00:40:15 --> 00:40:23
one so whether that's cognitive load

00:40:17 --> 00:40:24
glance emotion drowsiness the input is

00:40:22 --> 00:40:27
the raw pixels and the output is

00:40:23 --> 00:40:30
whatever you have data for data is

00:40:26 --> 00:40:34
everything here the face an alignment

00:40:29 --> 00:40:37
problem which is a traditional geometric

00:40:33 --> 00:40:39
approach to this problem is designing

00:40:36 --> 00:40:41
algorithms that are able to detect

00:40:38 --> 00:40:43
accurately the individual landmarks in

00:40:40 --> 00:40:49
the face and from that estimate the

00:40:42 --> 00:40:50
geometry of the head pose for the class

00:40:48 --> 00:40:53
of

00:40:49 --> 00:40:55
in version we perform the same kind of

00:40:52 --> 00:40:56
alignment or with the same kind of face

00:40:54 --> 00:40:59
detection in alignment to determine

00:40:55 --> 00:41:01
where the head is but once we have that

00:40:58 --> 00:41:04
we pass in just the raw pixels and

00:41:00 --> 00:41:06
perform the classification on that as

00:41:03 --> 00:41:10
opposed to doing the estimation its

00:41:05 --> 00:41:12
classification allowing you to perform

00:41:09 --> 00:41:16
what's shown there on the bottom is the

00:41:11 --> 00:41:19
real-time classification of where the

00:41:15 --> 00:41:21
driver is looking Road left right center

00:41:18 --> 00:41:27
stack instrument cluster and rearview

00:41:20 --> 00:41:32
mirror and as I mentioned annotation

00:41:26 --> 00:41:34
tooling is key so we have a total 5

00:41:31 --> 00:41:42
billion video frames one and a half

00:41:33 --> 00:41:44
billion of the face that would take tens

00:41:41 --> 00:41:47
of millions of dollars to annotate just

00:41:43 --> 00:41:50
for the glass classification fully so we

00:41:46 --> 00:41:51
have to figure out what to annotate in

00:41:49 --> 00:41:54
order to trade and you'll networks to

00:41:50 --> 00:41:56
perform this task and what we annotate

00:41:53 --> 00:41:59
is the things that the network is not

00:41:55 --> 00:42:01
confident about the moments of

00:41:58 --> 00:42:03
highlighting variation the partial

00:42:00 --> 00:42:05
occlusions from the light or self

00:42:02 --> 00:42:09
occlusion and the moving out of frame

00:42:04 --> 00:42:11
the outer frame occlusions all the

00:42:08 --> 00:42:13
difficult cases going from frame to

00:42:10 --> 00:42:15
frame here and the different

00:42:12 --> 00:42:18
pipeline starting at the table going at

00:42:14 --> 00:42:20
he bottom whenever the classification

00:42:17 --> 00:42:23
has a low confidence we pass it to the

00:42:19 --> 00:42:25
human it's simple we rely on the human

00:42:22 --> 00:42:30
only when the classifier is not

00:42:24 --> 00:42:33
confident and the fundamental trade-off

00:42:29 --> 00:42:35
in all of these systems is what is the

00:42:32 --> 00:42:38
accuracy we're willing to put up with

00:42:34 --> 00:42:42
ere in red and blue and red is human

00:42:37 --> 00:42:46
choice decision and blue as a machine

00:42:41 --> 00:42:52
tasks in red we select the video we want

00:42:45 --> 00:42:55
o classify in blue the the the neural

00:42:51 --> 00:42:57
network performs the face detection task

00:42:54 --> 00:42:59
localizing the camera choosing what is

00:42:56 --> 00:43:02
the angle of the camera

00:42:58 --> 00:43:06
nd provides a trade opportunity and

00:43:01 --> 00:43:08
percent frames it can annotate so

00:43:05 --> 00:43:10
certainly and you'll networking at a

00:43:07 --> 00:43:13
glance for the entire data set they

00:43:09 --> 00:43:17
would achieve accuracy in the case of

00:43:12 --> 00:43:19
glass classification of nine low 90%

00:43:16 --> 00:43:22
classification on the sixth glass task

00:43:18 --> 00:43:24
now if you want a higher accuracy that

00:43:21 --> 00:43:26
it will only be able to achieve that for

00:43:23 --> 00:43:27
us for a smaller fraction of frames

00:43:25 --> 00:43:31
that's the choice

00:43:26 --> 00:43:35
and then a human has to go in and

00:43:30 --> 00:43:37
perform the annotation of the frames

00:43:34 --> 00:43:40
that the algorithm was not confident

00:43:36 --> 00:43:42
about and it repeats over and over the

00:43:39 --> 00:43:44
algorithm is then trained on the frames

00:43:41 --> 00:43:46
that were annotated by the human and

00:43:43 --> 00:43:48
repeats this process over and over on

00:43:45 --> 00:43:54
the frames until everything is annotated

00:43:47 --> 00:43:56
yes yes absolutely

00:43:53 --> 00:43:58
the question was do you ever observe

00:43:55 --> 00:44:04
that the classifier is highly confident

00:43:57 --> 00:44:07
about the incorrect class yep right

00:44:03 --> 00:44:08
question was hot well then how do you

00:44:06 --> 00:44:11
deal with that how do you

00:44:07 --> 00:44:13
account for that how do you account for

00:44:10 --> 00:44:18
the fact that highly confident

00:44:12 --> 00:44:21
predictions can be highly wrong yeah

00:44:17 --> 00:44:24
false positives false positives that

00:44:20 --> 00:44:26
you're really confident in there there's

00:44:23 --> 00:44:28
no at least in our experience there's no

00:44:25 --> 00:44:30
good answer for that except more more

00:44:27 --> 00:44:32
and more training data on the things

00:44:29 --> 00:44:36
you're not confident about that usually

00:44:31 --> 00:44:38
seems to deal generalize over cases we

00:44:35 --> 00:44:43
don't encounter obvious large categories

00:44:37 --> 00:44:47
of data where you're really confident

00:44:42 --> 00:44:49
about the wrong thing usually some

00:44:46 --> 00:44:51
degree of human annotation fixes most

00:44:48 --> 00:44:54
problems

00:44:50 --> 00:44:58
annotating the low the low confidence

00:44:53 --> 00:44:58
part of the data

00:44:57 --> 00:45:05
solves all incorrect issues but of

00:45:02 --> 00:45:07
course that's not always true in the

00:45:04 --> 00:45:12
general case that you can imagine a lot

00:45:06 --> 00:45:15
of scenarios whether that's not true for

00:45:11 --> 00:45:20
example one one one thing they always

00:45:14 --> 00:45:22
perform is for each individual person we

00:45:19 --> 00:45:24
usually entertain a large amount of the

00:45:21 --> 00:45:26
data manually no matter what so we have

00:45:23 --> 00:45:29
to make sure that the neural network has

00:45:25 --> 00:45:31
een that person in the various and the

00:45:28 --> 00:45:34
various ways their face looks like with

00:45:30 --> 00:45:37
glasses with different hair with

00:45:33 --> 00:45:39
different a lighting variation so we

00:45:37 --> 00:45:41
want to manually annotate that it's

00:45:38 --> 00:45:42
overtime we're allowing the machine to

00:45:40 --> 00:45:45
do more and more of the work

00:45:41 --> 00:45:46
so what's resulting in this in the

00:45:44 --> 00:45:48
glance classification cases you can do

00:45:45 --> 00:45:50
real-time classification you can give

00:45:47 --> 00:45:51
the car information about whether the

00:45:49 --> 00:45:53
driver is looking on road or off road

00:45:50 --> 00:45:55
this is critical information for the car

00:45:52 --> 00:45:58
to understand and you want to pause for

00:45:54 --> 00:46:00
a second to realize that when you're

00:45:57 --> 00:46:02
driving a car for those our driver for

00:45:59 --> 00:46:05
those that driven any kind of car with

00:46:01 --> 00:46:08
any kind of automation it has no idea

00:46:04 --> 00:46:10
bout what you're up to at all there's

00:46:07 --> 00:46:12
no it doesn't have any information about

00:46:09 --> 00:46:14
he driver except if they're touching

00:46:11 --> 00:46:16
the steering wheel or not more and more

00:46:13 --> 00:46:19
now with the GM supercruise vehicle and

00:46:15 --> 00:46:21
Tesla now has added a dryer facing

00:46:18 --> 00:46:24
camera that slowly started to think

00:46:20 --> 00:46:26
about moving towards perceiving the

00:46:23 --> 00:46:28
driver but most vehicles on the road

00:46:25 --> 00:46:30
today have no knowledge of the driver

00:46:27 --> 00:46:34
this knowledge is almost common sense

00:46:29 --> 00:46:36
and trivial for the car to have the it's

00:46:33 --> 00:46:38
common sense how important this

00:46:35 --> 00:46:40
information is where the driver is

00:46:37 --> 00:46:44
looking that's the glance classification

00:46:39 --> 00:46:47
problem and again emphasizing that we've

00:46:43 --> 00:46:49
converted it's been three decades of

00:46:46 --> 00:46:51
work on gaze estimation yet gaze

00:46:48 --> 00:46:54
stimation is doing head pose estimation

00:46:50 --> 00:46:56
so the geometric orientation of the head

00:46:53 --> 00:46:58
combining the orientation of the eyes

00:46:55 --> 00:47:00
and using that combined information to

00:46:58 --> 00:47:03
determine where the person is looking

00:46:59 --> 00:47:05
will convert that into a classification

00:47:02 --> 00:47:07
problem so the standard gaze estimation

00:47:04 --> 00:47:09
definition is not a machine learning

00:47:06 --> 00:47:09
problem

00:47:08 --> 00:47:14
classification is a machine learning

00:47:10 --> 00:47:18
problem this transformation is key

00:47:13 --> 00:47:23
emotion human emotion is a fascinating

00:47:17 --> 00:47:25
thing so the same kind of pipeline

00:47:22 --> 00:47:28
stabilization cleaning of the data raw

00:47:24 --> 00:47:31
pixels in and then the classification is

00:47:27 --> 00:47:37
emotion the problem with emotion if I

00:47:30 --> 00:47:39
may speak as an expert human not am NOT

00:47:36 --> 00:47:42
an expert in emotion is just an expert

00:47:38 --> 00:47:44
of being human is that there is a lot of

00:47:41 --> 00:47:48
ways that's a sodomize emotion to

00:47:43 --> 00:47:51
categorize emotion to define emotion

00:47:47 --> 00:47:53
whether that's for the the primary

00:47:50 --> 00:47:56
emotion of the para scale would love joy

00:47:52 --> 00:47:58
surprise anger sadness fear there's a

00:47:55 --> 00:48:00
lot of ways to mix those together to

00:47:57 --> 00:48:03
break those apart into hierarchical

00:47:59 --> 00:48:06
taxonomies and the way we think about it

00:48:02 --> 00:48:10
in the driving context at least there is

00:48:05 --> 00:48:13
a general emotion recognition task sort

00:48:09 --> 00:48:15
of I mentioned I'll mention it but it's

00:48:12 --> 00:48:18
kind of how we think about primary

00:48:14 --> 00:48:21
emotions is detecting the the broad

00:48:17 --> 00:48:25
categories of emotion of joy and anger

00:48:20 --> 00:48:27
of disgust and surprise and then there

00:48:24 --> 00:48:30
is application specific emotion

00:48:26 --> 00:48:32
recognition where you're using the

00:48:29 --> 00:48:34
facial expressions that all the various

00:48:31 --> 00:48:39
ways that we can deform our face to

00:48:33 --> 00:48:42
communicate information to determine the

00:48:38 --> 00:48:46
specific question about the interaction

00:48:42 --> 00:48:48
of the driver so I'll first for the

00:48:45 --> 00:48:50
general case these are the building

00:48:47 --> 00:48:54
blocks I mean there's there's countless

00:48:49 --> 00:48:55
ways of deforming the face that we use

00:48:53 --> 00:49:00
to communicate with each other there's

00:48:54 --> 00:49:07
42 individual facial muscles that can be

00:48:59 --> 00:49:07
used to form those expressions one of

00:49:06 --> 00:49:10
our favorite

00:49:06 --> 00:49:12
work with is the effective SDK this is

00:49:09 --> 00:49:16
their their their task with the general

00:49:11 --> 00:49:19
emotion recognition task is taking in

00:49:15 --> 00:49:21
raw pixels and determining categories of

00:49:18 --> 00:49:24
emotion very subtleties of that emotion

00:49:20 --> 00:49:26
in the general case producing a

00:49:23 --> 00:49:31
classification of anger disgust fear

00:49:25 --> 00:49:32
surprise so on and then mapping I mean

00:49:30 --> 00:49:34
essentially what these algorithms are

00:49:31 --> 00:49:36
doing whether whether they using deep

00:49:33 --> 00:49:38
neural networks or not whether using

00:49:35 --> 00:49:40
face alignment to do the landmark

00:49:37 --> 00:49:41
detection and then tracking those

00:49:39 --> 00:49:44
landmarks over time to do the facial

00:49:40 --> 00:49:47
actions they're determined they're

00:49:43 --> 00:49:48
mapping the expressions the component

00:49:46 --> 00:49:50
heir various expressions who can make

00:49:47 --> 00:49:55
with their eyebrows or their nose and

00:49:49 --> 00:49:57
mouth and eyes to map them to the

00:49:54 --> 00:49:58
motion so I'd like to highlight one

00:49:56 --> 00:50:03
because I think it's an illustrative one

00:49:57 --> 00:50:06
for joy an expression of joy is smiling

00:50:02 --> 00:50:08
so there's an increased likelihood that

00:50:05 --> 00:50:11
you observe a smiling expression on the

00:50:07 --> 00:50:13
face when joy is experienced or vice

00:50:10 --> 00:50:16
versa if there's an increased

00:50:12 --> 00:50:18
probability of a smile there's an

00:50:15 --> 00:50:21
increased probability of emotion of joy

00:50:17 --> 00:50:23
being experienced and then joy an

00:50:20 --> 00:50:26
experience has a decreased probability

00:50:22 --> 00:50:31
likelihood of brow raising and brow

00:50:25 --> 00:50:34
following so if you see a smile that's a

00:50:30 --> 00:50:35
plus for joy if you see brow

00:50:33 --> 00:50:39
raised bright for Oh

00:50:34 --> 00:50:40
brow furrow is a minus for joy that's

00:50:38 --> 00:50:42
for the general emotional recognition

00:50:39 --> 00:50:43
task that's been well studied that's

00:50:41 --> 00:50:45
ort of the core of affective computing

00:50:42 --> 00:50:46
movement from from the visual

00:50:44 --> 00:50:49
perspective again from the computer

00:50:45 --> 00:50:51
vision perspective from the application

00:50:48 --> 00:50:54
of specific perspective which were

00:50:50 --> 00:50:56
ally focused on again data is

00:50:53 --> 00:50:59
everything what what are you annotating

00:50:55 --> 00:51:01
we can take here we have a large-scale

00:50:58 --> 00:51:04
data set of drivers interacting with a

00:51:00 --> 00:51:06
voice based navigation system so they're

00:51:03 --> 00:51:10
tasked with in various vehicles to enter

00:51:05 --> 00:51:12
a navigation so with they're talking to

00:51:09 --> 00:51:14
their GPS using their voice this is for

00:51:11 --> 00:51:16
depending on the vehicle depending on

00:51:13 --> 00:51:18
the system in most cases an incredibly

00:51:15 --> 00:51:20
frustrating experience so we have them

00:51:17 --> 00:51:23
perform this task and then

00:51:19 --> 00:51:25
the annotation is self-report after the

00:51:22 --> 00:51:28
task they say on a scale of 1 to 10 how

00:51:24 --> 00:51:33
frustrating was this experience and when

00:51:27 --> 00:51:36
you see on top is is the expressions

00:51:32 --> 00:51:39
detected and associated with a satisfied

00:51:35 --> 00:51:42
a person who said a a 10 on the

00:51:38 --> 00:51:45
satisfaction so a 1 in the frustration

00:51:41 --> 00:51:48
scale was perfectly satisfied with a

00:51:44 --> 00:51:52
voice based interaction on the bottom is

00:51:47 --> 00:51:57
frustrated as a believin 9 on the

00:51:51 --> 00:51:59
frustration scale so the feature the

00:51:56 --> 00:52:02
strongest there the expression remember

00:51:58 --> 00:52:04
joy smile was the strongest indicator of

00:52:01 --> 00:52:07
rustration for all our subjects that

00:52:03 --> 00:52:09
was the strongest expression smile was

00:52:06 --> 00:52:13
the thing that was always there for

00:52:08 --> 00:52:15
frustration there's other various

00:52:12 --> 00:52:18
frowning that followed and shaking the

00:52:14 --> 00:52:20
ad and so on but smiles were there so

00:52:17 --> 00:52:22
that shows you the kind of clean

00:52:19 --> 00:52:24
difference between general emotion

00:52:21 --> 00:52:25
recognition tasks and the

00:52:23 --> 00:52:28
application-specific

00:52:24 --> 00:52:32
here perhaps they enjoyed an absurd

00:52:27 --> 00:52:33
moment of joy at the frustration that

00:52:31 --> 00:52:34
were experiencing you can sort of get

00:52:32 --> 00:52:36
philosophical about it but the practical

00:52:33 --> 00:52:39
nature is they were frustrated with the

00:52:35 --> 00:52:41
xperience and we're using the 42 most

00:52:38 --> 00:52:45
of the face to make expressions to do

00:52:40 --> 00:52:47
classification of frustrated or not and

00:52:44 --> 00:52:50
their data does the work not the

00:52:46 --> 00:52:54
algorithms it's the annotation a quick

00:52:49 --> 00:52:55
mention for the AGI class next week for

00:52:53 --> 00:52:57
the artificial general intelligence

00:52:54 --> 00:53:02
class one of the competition's we're

00:52:56 --> 00:53:06
doing is we have a JavaScript face

00:53:01 --> 00:53:11
that's trained with a neural network to

00:53:05 --> 00:53:15
form various expressions to communicate

00:53:10 --> 00:53:19
with the observer so we're interested in

00:53:14 --> 00:53:21
creating emotion which is a nice mirror

00:53:18 --> 00:53:24
coupling of the emotional recognition

00:53:20 --> 00:53:28
problem it's gonna be super cool

00:53:23 --> 00:53:31
cognitive load we're starting to get to

00:53:28 --> 00:53:35
the eyes

00:53:30 --> 00:53:39
cognitive load is the degree to which a

00:53:34 --> 00:53:42
human being is accessing their memory or

00:53:38 --> 00:53:44
as Lawson thought how hard they're

00:53:41 --> 00:53:47
working in their mind to recollect

00:53:43 --> 00:53:51
something to think about something as

00:53:46 --> 00:53:54
cognitive load and to do a quick pause

00:53:50 --> 00:53:57
of eyes as the window to cognitive load

00:53:53 --> 00:53:59
eyes the window to the mind there's a

00:53:56 --> 00:54:01
different ways the eyes move so there's

00:53:58 --> 00:54:04
pupils the black part of the eye they

00:54:00 --> 00:54:06
can expand and and contract based on

00:54:03 --> 00:54:08
various factors including the lighting

00:54:05 --> 00:54:10
variations in the scene but they also

00:54:07 --> 00:54:13
expand and contract based on cognitive

00:54:09 --> 00:54:15
load that's a that's a strong signal

00:54:12 --> 00:54:17
they can also move around

00:54:14 --> 00:54:18
there's ballistic movement saccades when

00:54:16 --> 00:54:21
we look around eyes jump around the

00:54:17 --> 00:54:24
scene they can also do something called

00:54:20 --> 00:54:26
smooth pursuit when you and connecting

00:54:23 --> 00:54:29
to our animal past you can see a

00:54:25 --> 00:54:32
delicious meal

00:54:28 --> 00:54:34
flying by or running by that your eyes

00:54:31 --> 00:54:36
can follow it perfectly they're not

00:54:33 --> 00:54:39
jumping around so when we read a book

00:54:35 --> 00:54:42
our eyes are using saccadic movements

00:54:38 --> 00:54:44
where they jump around and when the

00:54:41 --> 00:54:45
purse muth pursuit the eye is moving

00:54:43 --> 00:54:49
perfectly smoothly those are the kinds

00:54:44 --> 00:54:51
of movements who have to work with and

00:54:48 --> 00:54:54
cognitive load can be detected by

00:54:50 --> 00:54:57
looking at various factors of the eye

00:54:53 --> 00:55:02
the blink dynamics the eye movement and

00:54:56 --> 00:55:04
the eye the pupil diameter the problem

00:55:01 --> 00:55:07
is in the real world and real world data

00:55:03 --> 00:55:08
with lighting variations everything goes

00:55:06 --> 00:55:10
out the window in terms of using pupil

00:55:07 --> 00:55:13
diameter which is the standard way to

00:55:09 --> 00:55:14
measure non-contact way to measure

00:55:12 --> 00:55:16
cognitive load in the lab when you can

00:55:13 --> 00:55:19
control lighting conditions and use

00:55:15 --> 00:55:20
infrared cameras when you can't all that

00:55:18 --> 00:55:22
goes out the window and all you have is

00:55:19 --> 00:55:25
the blink dynamics and the eye movement

00:55:21 --> 00:55:27
so neural networks to the rescue

00:55:24 --> 00:55:29
3d convolutional neural networks in this

00:55:26 --> 00:55:33
case we take a sequences of images that

00:55:28 --> 00:55:35
I through time and use 3d convolutions

00:55:32 --> 00:55:37
as opposed to 2d convolutions on the

00:55:34 --> 00:55:40
left is everything we've talked about

00:55:36 --> 00:55:42
previous to this as 2d convolutions when

00:55:39 --> 00:55:42
the convolution filter is operating on

00:55:41 --> 00:55:47
the

00:55:41 --> 00:55:50
XY 2d image every channel is operated on

00:55:46 --> 00:55:55
by the filter individual separately 3d

00:55:49 --> 00:55:58
convolutions combine those convolve

00:55:54 --> 00:56:02
across the across multiple images across

00:55:57 --> 00:56:05
multiple channels therefore being able

00:56:01 --> 00:56:08
to learn the dynamics of the scene

00:56:04 --> 00:56:13
through time as well not just spatially

00:56:07 --> 00:56:17
temporal and data data is everything for

00:56:12 --> 00:56:21
a cognitive load we have in this case 92

00:56:16 --> 00:56:23
drivers so how do we sort of perform the

00:56:20 --> 00:56:25
cognitive load classification task we

00:56:22 --> 00:56:27
have these drivers driving on the

00:56:24 --> 00:56:29
highway and performing the what's called

00:56:26 --> 00:56:33
the n-back task zero back one back to

00:56:28 --> 00:56:35
back and that task involves hearing

00:56:32 --> 00:56:38
numbers being read to you and then

00:56:34 --> 00:56:41
recalling those numbers one at a time so

00:56:37 --> 00:56:43
ne zero back the system gives you a

00:56:40 --> 00:56:46
number seven and then you have to just

00:56:42 --> 00:56:48
say that number back seven and it keeps

00:56:45 --> 00:56:50
repeating that's easy it's supposed to

00:56:47 --> 00:56:52
be the easy task one back is when you

00:56:49 --> 00:56:56
hear number you have to remember it and

00:56:51 --> 00:56:59
then that for the next number you have

00:56:55 --> 00:57:00
to say the number previous to that so

00:56:58 --> 00:57:02
you kind of have to keep one number in

00:56:59 --> 00:57:05
your memory always and not get

00:57:01 --> 00:57:07
distracted by the new information coming

00:57:04 --> 00:57:09
up but to back you have to do that two

00:57:06 --> 00:57:12
numbers back so you have to use memory

00:57:08 --> 00:57:14
more and more went to back so cognitive

00:57:11 --> 00:57:18
load is higher and higher okay so what

00:57:13 --> 00:57:20
do we do we use face alignment face

00:57:17 --> 00:57:23
front elevation and detecting the eye

00:57:19 --> 00:57:26
closest to the camera and extract the

00:57:22 --> 00:57:29
ye region and now we have this nice raw

00:57:25 --> 00:57:32
pixels of the eye region across six

00:57:28 --> 00:57:34
seconds of video and we take that and

00:57:31 --> 00:57:38
put that in as a 3d convolutional neural

00:57:33 --> 00:57:40
network and classify simply one of three

00:57:37 --> 00:57:42
classes zero back one back and two back

00:57:39 --> 00:57:44
so we have a ton of data of people on

00:57:41 --> 00:57:46
the highway performing these tasks and

00:57:43 --> 00:57:48
back tasks and that forms the

00:57:45 --> 00:57:53
classification supervised learning

00:57:47 --> 00:57:56
training data that's it the input is 90

00:57:52 --> 00:58:00
images it's at 15 frames a second

00:57:55 --> 00:58:00
and the output is one of three classes

00:58:01 --> 00:58:07
face fronto ization i should mention is

00:58:03 --> 00:58:08
the technique developed under for face

00:58:06 --> 00:58:11
recognition because most face

00:58:07 --> 00:58:13
recognition tasks require frontal face

00:58:10 --> 00:58:15
orientation is also what we use here to

00:58:12 --> 00:58:19
normalize everything that we can focus

00:58:14 --> 00:58:21
in on the exact blink it's taking the

00:58:18 --> 00:58:23
it's taking whatever the orientation of

00:58:20 --> 00:58:28
the face and projecting into the frontal

00:58:22 --> 00:58:31
position taking the raw pixels of the

00:58:27 --> 00:58:38
face is detecting the eye region zooming

00:58:30 --> 00:58:40
in and grabbing the eye where you find

00:58:37 --> 00:58:46
and this is where the intuition builds

00:58:39 --> 00:58:48
it it's a fascinating one what's being

00:58:45 --> 00:58:51
plotted here is the relative movement of

00:58:47 --> 00:58:55
the pupil the relative movement of the

00:58:50 --> 00:58:57
ye based on a different cognitive loads

00:58:54 --> 00:58:59
for cognitive load on the left of zero

00:58:56 --> 00:59:02
so when your mind is not that lost in

00:58:58 --> 00:59:04
thought and cognitive load of two on the

00:59:01 --> 00:59:07
right when it is lost in thought the eye

00:59:03 --> 00:59:10
moves a lot less eye is more focused on

00:59:06 --> 00:59:12
the forward roadway that's an

00:59:09 --> 00:59:14
interesting finding but it's only in

00:59:11 --> 00:59:16
aggregate and that's what the neural

00:59:13 --> 00:59:19
network is task would do it with

00:59:15 --> 00:59:23
extracting an a frame-by-frame basis

00:59:18 --> 00:59:26
this is a standard 3d convolutional

00:59:22 --> 00:59:28
architecture again taking in the image

00:59:25 --> 00:59:30
sequence is the input cognitive load

00:59:27 --> 00:59:34
classification is the output and

00:59:29 --> 00:59:38
classifying on the right is the accuracy

00:59:33 --> 00:59:42
that's able to achieve of 86% that's

00:59:37 --> 00:59:43
pretty cool from real-world data the

00:59:41 --> 00:59:47
idea is that you can just plop in a

00:59:42 --> 00:59:51
webcam get the video going in going into

00:59:46 --> 00:59:53
the neural network and this predicting

00:59:50 --> 00:59:57
it continued

00:59:52 --> 01:00:01
a stream from zero to two of cognitive

00:59:56 --> 01:00:04
load because every single zero want back

01:00:00 --> 01:00:06
one back to back classes are have a

01:00:03 --> 01:00:08
confidence that's associated with them

01:00:05 --> 01:00:10
so you can turn that into a real value

01:00:07 --> 01:00:14
between zero and two and when you see

01:00:09 --> 01:00:17
here's a plot of three of the people on

01:00:13 --> 01:00:22
the team here driving a car performing a

01:00:16 --> 01:00:25
task of conversation and in white

01:00:21 --> 01:00:26
showing the cognitive load frame by

01:00:24 --> 01:00:28
frame a thirty frames a second

01:00:25 --> 01:00:31
estimating the cognitive load of each of

01:00:27 --> 01:00:34
the drivers on from zero to two on the

01:00:30 --> 01:00:38
y-axis so these are high cognitive load

01:00:33 --> 01:00:42
and showing in on the bottom red and

01:00:37 --> 01:00:44
yellow of high medium cognitive load and

01:00:41 --> 01:00:46
when everybody's silent the cognitive

01:00:43 --> 01:00:48
load goes down so we can perform now

01:00:45 --> 01:00:50
ith this simple neural network with the

01:00:47 --> 01:00:52
training data that we formed we can

01:00:49 --> 01:00:56
extend that to any arbitrary new data

01:00:51 --> 01:00:58
set and generalize okay those are some

01:00:55 --> 01:01:00
xamples of Chania neural networks can

01:00:57 --> 01:01:04
be applied and why is this important

01:00:59 --> 01:01:07
again is while we focus on the sort of

01:01:03 --> 01:01:09
the perception tasks of using neural

01:01:06 --> 01:01:11
networks of using sensors and signal

01:01:08 --> 01:01:13
processing to determine where we are in

01:01:10 --> 01:01:14
the world where the different obstacles

01:01:12 --> 01:01:18
are informed trajectories around those

01:01:13 --> 01:01:22
obstacles we are still far away from

01:01:17 --> 01:01:25
completely solving that problem I would

01:01:21 --> 01:01:28
argue 20 plus years away the human will

01:01:24 --> 01:01:31
have to be involved and so when it's the

01:01:27 --> 01:01:32
system is not able to control when the

01:01:30 --> 01:01:34
system is not able to perceive when

01:01:31 --> 01:01:37
there's some flawed aspect about the

01:01:33 --> 01:01:38
perception or the driving policy the

01:01:36 --> 01:01:41
human has to be involved and that's

01:01:37 --> 01:01:44
where we have to know let the car know

01:01:40 --> 01:01:45
hat the human is doing that's the

01:01:43 --> 01:01:50
ssential element of human robot

01:01:44 --> 01:01:53
interaction the most popular car in the

01:01:49 --> 01:01:56
United States today is the Ford f-150 no

01:01:52 --> 01:02:00
automation the thing that sort of

01:01:55 --> 01:02:03
inspires us and makes us think that

01:01:59 --> 01:02:04
ransportation can be fundamentally

01:02:02 --> 01:02:06
transformed is the Google self-driving

01:02:03 --> 01:02:08
mo

01:02:05 --> 01:02:09
ur and although our guest speakers and

01:02:07 --> 01:02:13
all the folks work in the autonomous

01:02:08 --> 01:02:15
vehicles but if you look at it the only

01:02:12 --> 01:02:18
people who are at a mass scale or

01:02:14 --> 01:02:21
beginning to are actually injecting

01:02:17 --> 01:02:22
automation into our daily lives is the

01:02:20 --> 01:02:25
ones in between

01:02:21 --> 01:02:30
it's the Tesla's the l2 systems it's the

01:02:24 --> 01:02:34
tesla system the supercruise the audio

01:02:29 --> 01:02:37
as 90s the the vehicles that are slowly

01:02:33 --> 01:02:39
adding to some degree of automation and

01:02:36 --> 01:02:44
teaching human beings how to interact

01:02:38 --> 01:02:52
with that automation and here's again

01:02:43 --> 01:02:55
the the the path towards mass scale

01:02:51 --> 01:02:58
automation we're steering wheels removed

01:02:54 --> 01:03:02
the consideration that humans removed I

01:02:57 --> 01:03:06
believe is more than two decades away on

01:03:01 --> 01:03:08
the path to that we have to understand

01:03:05 --> 01:03:12
create successful human robot

01:03:07 --> 01:03:15
interaction approach autonomous vehicles

01:03:11 --> 01:03:18
autonomous systems in a human centered

01:03:14 --> 01:03:21
way the mass scale integration of these

01:03:17 --> 01:03:23
systems of the human center systems like

01:03:20 --> 01:03:25
to test the vehicles a Tesla is just a

01:03:22 --> 01:03:27
small company right now the the kind of

01:03:24 --> 01:03:29
l2 technologies have not truly

01:03:26 --> 01:03:31
penetrated the the market have not

01:03:28 --> 01:03:33
penetrated that our vehicles even the

01:03:30 --> 01:03:35
Brittain the new vehicles being released

01:03:32 --> 01:03:39
today I believe that happens in the

01:03:34 --> 01:03:42
arly 2020s and that's going to form the

01:03:38 --> 01:03:44
core of our algorithms that will

01:03:41 --> 01:03:47
eventually lead to the full autonomy all

01:03:43 --> 01:03:50
of that data what I mentioned with Tesla

01:03:46 --> 01:03:51
with a 32% miles being driven all of

01:03:49 --> 01:03:54
that is training data for the algorithms

01:03:50 --> 01:03:56
the edge cases arise there that's where

01:03:53 --> 01:04:01
we get all this data in our data set at

01:03:55 --> 01:04:04
MIT is 400,000 miles Tesla has a billion

01:04:00 --> 01:04:08
miles so that that's all training data

01:04:03 --> 01:04:11
on the way on the stairway to mass scale

01:04:07 --> 01:04:15
automation why is this

01:04:10 --> 01:04:17
important beautiful and fundamental to

01:04:14 --> 01:04:19
the role of AI in society I believe that

01:04:16 --> 01:04:22
self-driving cars when they're in this

01:04:18 --> 01:04:25
way are focused on a human robot

01:04:21 --> 01:04:28
interaction our personal robots they're

01:04:24 --> 01:04:31
not perception control systems tools

01:04:27 --> 01:04:34
like a Roomba performing a particular

01:04:30 --> 01:04:36
task when human life is a steak when

01:04:33 --> 01:04:40
there's a fundamental transfer between

01:04:35 --> 01:04:42
of life of a human being giving their

01:04:39 --> 01:04:47
life over to an AI system directly one

01:04:41 --> 01:04:51
on one is a transfer that is kind of a

01:04:46 --> 01:04:55
relationship that is one indicative of a

01:04:50 --> 01:04:57
personal robot this is it requires all

01:04:54 --> 01:05:01
the things of understanding

01:04:56 --> 01:05:04
communication of trust these are

01:05:00 --> 01:05:06
fascinating to understand how a human

01:05:03 --> 01:05:11
d robot can form trust enough to

01:05:05 --> 01:05:13
create a really an almost

01:05:10 --> 01:05:16
one-to-one understanding of each other's

01:05:12 --> 01:05:19
mental state learn from each other oh

01:05:15 --> 01:05:19
boy

01:05:19 --> 01:05:26
so one of my favorite movies Good Will

01:05:23 --> 01:05:30
Hunting we're in Boston Cambridge have

01:05:25 --> 01:05:35
two have two gonna regret this one this

01:05:29 --> 01:05:37
Robin Williams speaking about human

01:05:34 --> 01:05:40
imperfections so I'd like you to take

01:05:36 --> 01:05:45
this quote and replace every time you

01:05:39 --> 01:05:48
mentioned girl with car people call

01:05:44 --> 01:05:49
those things imperfections Robin

01:05:47 --> 01:05:53
Williams is talking about his wife who

01:05:48 --> 01:05:55
passed away in the movie talking about

01:05:52 --> 01:05:57
her imperfections they call these things

01:05:54 --> 01:06:00
imperfections but they're not that's the

01:05:56 --> 01:06:03
good stuff and then we'll get to choose

01:05:59 --> 01:06:06
who we let into our weird little worlds

01:06:02 --> 01:06:09
you're not perfect sport and let me save

01:06:05 --> 01:06:10
you the suspense this girl you met she

01:06:08 --> 01:06:12
isn't perfect to you there you know what

01:06:09 --> 01:06:12
let me just

01:06:19 --> 01:06:23
he video sequences that only I know

01:06:21 --> 01:06:27
about

01:06:22 --> 01:06:30
hat's what made her my wife when she

01:06:26 --> 01:06:34
had a puts on me - she all my pet dogs

01:06:29 --> 01:06:38
people call these things into fashions

01:06:33 --> 01:06:44
uffice no need to choose we learn to

01:06:37 --> 01:06:47
bviate the words in my breath explore

01:06:43 --> 01:06:50
things in suspense

01:06:46 --> 01:06:54
he has an air attack but the question is

01:06:49 --> 01:06:54
what am i perfect for each other

01:06:54 --> 01:06:58
[Music]

01:07:07 --> 01:07:16
so the approach we're taking in building

01:07:12 --> 01:07:18
the autonomous vehicle we are here at

01:07:15 --> 01:07:21
MIT in our group it's the human centered

01:07:17 --> 01:07:23
approach the autonomous vehicles they

01:07:20 --> 01:07:30
were going to release in March of 2018

01:07:22 --> 01:07:36
in the streets of Boston those who would

01:07:29 --> 01:07:39
to help please do I will talk run a

01:07:35 --> 01:07:41
course on deep learning for

01:07:38 --> 01:07:43
understanding the humans of Chi 2018

01:07:40 --> 01:07:46
will be going through tutorials that go

01:07:42 --> 01:07:48
far beyond the visual the convolutional

01:07:45 --> 01:07:51
neural network based detection of

01:07:47 --> 01:07:54
various aspects of the face and body

01:07:50 --> 01:07:59
would look at natural language

01:07:53 --> 01:08:03
processing voice recognition and Gans

01:07:58 --> 01:08:08
if you're going to Chi please join next

01:08:02 --> 01:08:13
week we have an incredible course that's

01:08:07 --> 01:08:18
aims to understand to begin to explore

01:08:12 --> 01:08:21
the nature of intelligence natural and

01:08:17 --> 01:08:27
artificial we have Josh Tenenbaum Ray

01:08:20 --> 01:08:28
Kurzweil Lisa Barret Nate Dubinsky

01:08:26 --> 01:08:31
looking at cognitive modeling

01:08:27 --> 01:08:34
architectures Andre karpati Stephen

01:08:30 --> 01:08:37
Wolfram Richard Moyes talking about

01:08:33 --> 01:08:42
autonomous weapon systems and AI safety

01:08:36 --> 01:08:45
mark Robert from Boston Dynamics and the

01:08:41 --> 01:08:52
amazing incredible robots I have and

01:08:44 --> 01:08:56
Ilya sutskever from open AI and myself

01:08:51 --> 01:09:00
so what next for folks register for this

01:08:55 --> 01:09:04
course you have to submit by tonight a

01:08:59 --> 01:09:08
deep traffic entry that achieves a speed

01:09:03 --> 01:09:11
of 65 miles an hour and I hope you

01:09:07 --> 01:09:14
continue to submit more that win the

01:09:10 --> 01:09:16
competition the high performer award

01:09:13 --> 01:09:20
will be given to folks the very few

01:09:15 --> 01:09:24
folks who achieved 70 miles an hour

01:09:19 --> 01:09:29
faster we will continue rolling out seg

01:09:23 --> 01:09:32
fuse having hit a few snags and invested

01:09:28 --> 01:09:35
a few thousands of dollars in the

01:09:31 --> 01:09:38
sanitation process of annotating a

01:09:34 --> 01:09:40
large-scale data set for you guys we'll

01:09:37 --> 01:09:42
continue this competition that will take

01:09:39 --> 01:09:45
us into

01:09:41 --> 01:09:47
a submission to his nips where we'd

01:09:44 --> 01:09:49
hope to submit the results for this

01:09:46 --> 01:09:51
competition and deep crash the deeper

01:09:48 --> 01:09:54
enforcement learning these competitions

01:09:50 --> 01:09:55
will continue through May 2018 I hope

01:09:53 --> 01:10:00
you stay tuned and participate

01:09:55 --> 01:10:02
there's upcoming classes the a GI class

01:09:59 --> 01:10:06
I encourage you to come to is going to

01:10:01 --> 01:10:07
be fascinating and there's so many cool

01:10:05 --> 01:10:09
interesting ideas that we're going to

01:10:06 --> 01:10:11
explore it's gonna be awesome

01:10:08 --> 01:10:14
there's an introduction to deep learning

01:10:10 --> 01:10:16
course that I'm also part of will get a

01:10:13 --> 01:10:19
little bit more applied and get folks

01:10:15 --> 01:10:21
who are interested in the the very basic

01:10:18 --> 01:10:26
algorithms of deep learning how to get

01:10:20 --> 01:10:27
started with those hands-on and there's

01:10:25 --> 01:10:29
an awesome class that ran last year for

01:10:26 --> 01:10:33
those who took this class last year we

01:10:28 --> 01:10:35
also talked about it on the the global

01:10:32 --> 01:10:37
business of AI and robotics the slides

01:10:34 --> 01:10:39
are online I encourage you to click a

01:10:36 --> 01:10:42
link on there and register it's in the

01:10:38 --> 01:10:44
spring it's once a week and it's truly

01:10:41 --> 01:10:46
brings together a lot of

01:10:43 --> 01:10:48
cross-disciplinary folks to talk about

01:10:45 --> 01:10:50
ideas of artificial intelligence and the

01:10:47 --> 01:10:54
role of AI and robotics and society it's

01:10:49 --> 01:10:57
an awesome class and if you're

01:10:53 --> 01:10:59
interested in applying deep learning

01:10:56 --> 01:11:02
methods in the automotive space come

01:10:58 --> 01:11:04
work with us we have a lot of

01:11:01 --> 01:11:08
ascinating problems to to solve or

01:11:03 --> 01:11:12
collaborate so with that I'd like to

01:11:07 --> 01:11:14
thank everybody here everybody across

01:11:11 --> 01:11:17
the community that's been contributing

01:11:13 --> 01:11:19
we have thousands of submissions coming

01:11:16 --> 01:11:21
in for deep traffic and I'm just truly

01:11:18 --> 01:11:23
humbled by the support we've been

01:11:20 --> 01:11:25
getting and the team behind this class

01:11:22 --> 01:11:28
is incredible thank you to Nvidia Google

01:11:24 --> 01:11:34
Amazon Alexa auto live in Toyota and

01:11:27 --> 01:11:37
today we have shirts extra large extra

01:11:33 --> 01:11:40
large medium over there small and

01:11:36 --> 01:11:41
large over there the big and small

01:11:39 --> 01:11:44
people over here and then the

01:11:40 --> 01:11:47
medium-sized people over here so just

01:11:43 --> 01:11:48
grab it grab one and enjoy thank you

01:11:46 --> 01:11:52
very much

01:11:47 --> 01:11:52
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
