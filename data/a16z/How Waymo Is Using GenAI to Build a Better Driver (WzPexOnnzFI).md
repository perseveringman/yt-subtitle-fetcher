---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "WzPexOnnzFI"
title: "How Waymo Is Using GenAI to Build a Better Driver"
video_url: "https://www.youtube.com/watch?v=WzPexOnnzFI"
thumbnail_url: "https://i.ytimg.com/vi/WzPexOnnzFI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=WzPexOnnzFI"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2024-08-05T14:00:24.000Z"
upload_date: "2024-08-05"
duration_seconds: 2203
duration_human: "36:43"
view_count: 5630
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:07:25.125Z"
---

# How Waymo Is Using GenAI to Build a Better Driver

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=WzPexOnnzFI
- video_id: WzPexOnnzFI
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2024-08-05T14:00:24.000Z
- upload_date: 2024-08-05
- duration: 36:43
- view_count: 5630
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Waymo co-CEO Dmitri Dolgov discusses how genAI is propelling Waymo’s autonomous vehicles to the next level, especially with an additional simulation layer on top of Waymo’s existing AI/ML stack. 

Waymo co-CEO Dmitri Dolgov joined a16z general partner David George to discuss how Waymo is using genAI to help them build safer, sustainable, and more accessible transportation. In the conversation, Dmitri talks about the potential of embodied AI, the value of simulations and building training data, and his approach to leading a company focused on solving the challenges of building AI that can navigate the real world.

[00:01:22] The early days of autonomous vehicles
[00:05:27] Layering genAI into traditional AI/ML
[00:09:42] The value of simulation
[00:15:56] The hard part about integrating AI in autonomous systems
[00:22:45] AI in the real world
[00:28:47] Where does Waymo go from here?
[00:37:21] Dmitri's learnings from hard problems

This conversation is part of our AI Revolution series, which features some of the most impactful builders in the field of AI discussing and debating where we are, where we’re going, and the big open questions in AI. Find more content from our AI Revolution series on www.a16z.com/AIRevolution.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hey guys I'm Sarah Wang General partner

00:00:02 --> 00:00:09
on the a16z growth team welcome back to

00:00:05 --> 00:00:11
ur AI Revolution series in this series

00:00:08 --> 00:00:14
we talk to the Gen Builders who are

00:00:10 --> 00:00:17
Transforming Our World to understand one

00:00:13 --> 00:00:19
where we are two where we're going and

00:00:16 --> 00:00:21
three the big open questions in the

00:00:18 --> 00:00:25
field Our Guest this episode is Dimitri

00:00:20 --> 00:00:27
dolgov the co-ceo of weo Dimitri has led

00:00:24 --> 00:00:29
weo to solve some of the biggest

00:00:26 --> 00:00:31
challenges in bringing AI to the real

00:00:28 --> 00:00:33
world and after tens of millions of

00:00:30 --> 00:00:35
miles of testing wh Mo's vehicles have

00:00:33 --> 00:00:38
shown themselves to be safer and more

00:00:34 --> 00:00:40
liable than human drivers myself

00:00:37 --> 00:00:42
included Dimitri has a unique

00:00:39 --> 00:00:44
perspective given that his work has

00:00:41 --> 00:00:47
panned multiple AIML development Cycles

00:00:43 --> 00:00:49
across decades he was an early pioner in

00:00:46 --> 00:00:51
self-driving cars working with Toyota

00:00:48 --> 00:00:53
nd Stanford on darpa's Grand Challenge

00:00:50 --> 00:00:56
before joining Google's self-driving car

00:00:52 --> 00:00:58
project which then evolved into wh Mo in

00:00:55 --> 00:01:00
this conversation from a closed door

00:00:57 --> 00:01:02
event with a16z General partner David

00:00:59 --> 00:01:05
George Dimitri talks about the potential

00:01:01 --> 00:01:07
of embodied AI the value of simulations

00:01:04 --> 00:01:09
and building training data and his

00:01:06 --> 00:01:11
approach to Leading a company focused on

00:01:08 --> 00:01:14
solving some of the world's hardest

00:01:10 --> 00:01:17
problems without further Ado here's

00:01:13 --> 00:01:17
Dimitri in conversation with

00:01:21 --> 00:01:27
[Music]

00:01:22 --> 00:01:29
David but maybe to start take us back to

00:01:26 --> 00:01:30
Stanford if you will and that was when

00:01:28 --> 00:01:33
you first started working on the the

00:01:30 --> 00:01:36
DARPA project and maybe give us a little

00:01:32 --> 00:01:39
bit of your history of how you ended up

00:01:35 --> 00:01:42
from there to here my introduction to

00:01:38 --> 00:01:45
autonomous vehicles was when I was doing

00:01:41 --> 00:01:48
a post do uh as at Stanford that you

00:01:44 --> 00:01:50
just mentioned David uh this was uh

00:01:47 --> 00:01:52
during I got get pretty lucky with the

00:01:49 --> 00:01:54
timing of it this was when the DARPA

00:01:51 --> 00:01:55
Grand challenges were happening DARPA is

00:01:53 --> 00:01:58
the defense Advanced research project

00:01:54 --> 00:02:00
agency that started these competitions

00:01:57 --> 00:02:03
uh with the goal of boosting uh this

00:01:59 --> 00:02:06
field of autonomous vehicles uh and the

00:02:02 --> 00:02:09
one uh that I got involved in was in uh

00:02:05 --> 00:02:11
2007 uh that was called the DARPA Urban

00:02:08 --> 00:02:14
challenge uh so the the setup there was

00:02:10 --> 00:02:15
it's kind of like a toy version of you

00:02:13 --> 00:02:17
know what we've been working on since

00:02:14 --> 00:02:19
then uh it was kind of supposed to mimic

00:02:16 --> 00:02:21
the you know driving an urban

00:02:18 --> 00:02:23
environment so they can created an fake

00:02:20 --> 00:02:25
City on an abandoned air base and they

00:02:22 --> 00:02:27
populated it with a bunch of uh

00:02:24 --> 00:02:28
autonomous vehicles a bunch of human

00:02:26 --> 00:02:32
drivers and they you know they had them

00:02:27 --> 00:02:35
do you know various tasks uh so that was

00:02:31 --> 00:02:37
uh kind of my introduction to this whole

00:02:34 --> 00:02:39
field and it was a bit of a I think you

00:02:36 --> 00:02:41
know dark these challenges are often by

00:02:38 --> 00:02:43
people in Industry considered kind of a

00:02:40 --> 00:02:46
foundational pivotal moment uh for this

00:02:42 --> 00:02:48
whole field uh and it was definitely

00:02:45 --> 00:02:51
that for me it was like a you know light

00:02:47 --> 00:02:53
bulb light switch moment uh that like

00:02:51 --> 00:02:55
really got me hooked what was like the

00:02:52 --> 00:02:58
hardware and software that you guys had

00:02:55 --> 00:03:01
at that point is this this 2007 yeah

00:02:57 --> 00:03:03
know was uh you know a very high

00:03:00 --> 00:03:06
level not unlike what we talk about

00:03:02 --> 00:03:07
oday you know a car that you know has

00:03:05 --> 00:03:09
ome instrumentation so you can you know

00:03:06 --> 00:03:11
tell what to do and you get some you

00:03:08 --> 00:03:13
know feedback back then you have you

00:03:10 --> 00:03:15
know it's called a pose system and a

00:03:12 --> 00:03:17
bunch of you know uh uh inertial

00:03:14 --> 00:03:19
measurement system accelerometers

00:03:16 --> 00:03:20
gyroscopes that kind of tell you in GPS

00:03:18 --> 00:03:22
tells you how you're moving through

00:03:19 --> 00:03:24
space and it has sensors you raders

00:03:21 --> 00:03:25
lighters and cameras you know the same

00:03:23 --> 00:03:28
stuff we still use today and then

00:03:24 --> 00:03:30
there's a computer um that you know gets

00:03:27 --> 00:03:31
the sensor data in and then tells the

00:03:29 --> 00:03:33
car what to do do and a bunch of

00:03:30 --> 00:03:35
software and you know software had you

00:03:32 --> 00:03:37
know perception components and

00:03:34 --> 00:03:40
ecision-making planning components and

00:03:36 --> 00:03:41
some AI but of course everything you

00:03:39 --> 00:03:44
know that we had like each one of those

00:03:40 --> 00:03:46
things uh over that you know how long

00:03:43 --> 00:03:47
has it been almost 18 years more than

00:03:45 --> 00:03:49
that has changed drastically right so

00:03:46 --> 00:03:52
when we talk about AI today versus AI we

00:03:48 --> 00:03:53
had you know back in 2007 2009 you know

00:03:51 --> 00:03:54
nothing in common and similarly

00:03:52 --> 00:03:56
everything else has changed you know the

00:03:53 --> 00:03:58
sensor are not the same computers are

00:03:55 --> 00:04:01
not the same yeah of course so then okay

00:03:57 --> 00:04:02
so take us so at that point that was the

00:04:00 --> 00:04:04
pivotal that was like the light bulb

00:04:01 --> 00:04:07
moment and then at that point you said

00:04:03 --> 00:04:09
okay I'm at Stanford I want to make this

00:04:06 --> 00:04:11
my career right is that and then and

00:04:08 --> 00:04:13
then was Toyota and then where did it go

00:04:10 --> 00:04:15
from there I don't know if I thought

00:04:12 --> 00:04:17
about in those terms I was like like

00:04:14 --> 00:04:18
this is this is the future I want to

00:04:16 --> 00:04:20
make it happen I want to be building

00:04:17 --> 00:04:23
this thing career okay you know that can

00:04:19 --> 00:04:25
later uh but it it was that was the next

00:04:22 --> 00:04:29
step that was the next big step is um a

00:04:24 --> 00:04:30
number of us uh from the DARPA challenge

00:04:28 --> 00:04:32
competitions uh started the Google

00:04:29 --> 00:04:36
self-driving uh project it was about a

00:04:31 --> 00:04:37
dozen of us uh then in 2009 uh came

00:04:35 --> 00:04:39
together at Google with support an

00:04:36 --> 00:04:41
excitment from Larry and Sergey uh to

00:04:38 --> 00:04:45
see you know if we can take it to the

00:04:40 --> 00:04:47
next uh step and uh um uh that then you

00:04:44 --> 00:04:50
know we worked on it for a few years and

00:04:46 --> 00:04:51
that project then became wayo in 2016

00:04:49 --> 00:04:54
and we've been on this path uh since

00:04:50 --> 00:04:56
then okay so we have this new big

00:04:53 --> 00:04:57
breakthrough in generative AI uh some

00:04:55 --> 00:05:00
would say it's new some would say it's

00:04:56 --> 00:05:04
70 years in the making um how do you

00:04:59 --> 00:05:07
think about layering advances that have

00:05:03 --> 00:05:09
come from generative AI to what many

00:05:06 --> 00:05:12
would describe as more traditional AI or

00:05:08 --> 00:05:13
machine learning techniques that were

00:05:11 --> 00:05:16
kind of the building blocks for

00:05:12 --> 00:05:17
self-driving technology up to that point

00:05:15 --> 00:05:19
uh yeah you know great question so maybe

00:05:16 --> 00:05:21
I can you know generative AI is kind of

00:05:18 --> 00:05:22
a broad term so I can you know maybe

00:05:20 --> 00:05:25
take a little bit of a step back and

00:05:21 --> 00:05:27
talk about kind of the role that AI

00:05:24 --> 00:05:30
plays in autonomous vehicles and kind of

00:05:26 --> 00:05:33
how we saw the various breakthroughs in

00:05:29 --> 00:05:36
AI map to the space of our Tas right so

00:05:32 --> 00:05:39
uh as you mentioned you know AI has been

00:05:35 --> 00:05:41
part of self-driving orous vehicles from

00:05:38 --> 00:05:43
the earliest days was you know back when

00:05:40 --> 00:05:45
we started was very different kind of AI

00:05:42 --> 00:05:47
you know ml kind of classical main

00:05:44 --> 00:05:48
decision trays you know classical

00:05:46 --> 00:05:51
computer Visions with kind of hand

00:05:47 --> 00:05:57
engineered features you know kernels and

00:05:50 --> 00:06:00
so forth uh and um uh then you know one

00:05:56 --> 00:06:02
of the first really important

00:05:59 --> 00:06:04
breakthrough throughs that uh uh

00:06:01 --> 00:06:06
appened in Ai and computer vision but

00:06:03 --> 00:06:10
really was important for our St uh for

00:06:05 --> 00:06:12
our task was the uh advancement in

00:06:09 --> 00:06:14
convolutional neural networks right

00:06:11 --> 00:06:17
around you know 2012 right many of you

00:06:13 --> 00:06:19
are probably familiar with alexnet and

00:06:16 --> 00:06:21
you know the imag net competition this

00:06:18 --> 00:06:24
where Alex net you know blew away uh

00:06:20 --> 00:06:27
out of the water all other uh approaches

00:06:23 --> 00:06:28
So that obviously has had very strong

00:06:26 --> 00:06:30
implications for our domain like how you

00:06:27 --> 00:06:31
do uh computer vision and not just on

00:06:29 --> 00:06:34
cameras right how you run you know you

00:06:30 --> 00:06:36
can use conet to interpret what's around

00:06:33 --> 00:06:37
you and do kind of object detection and

00:06:35 --> 00:06:39
classification from camera data from

00:06:36 --> 00:06:41
lighter data from your Imaging Radars so

00:06:39 --> 00:06:44
that was that was kind of a big boost

00:06:40 --> 00:06:47
around that you know 2012 2013 time

00:06:43 --> 00:06:48
frame um and then we we uh played with

00:06:46 --> 00:06:50
ose approaches and you know try to

00:06:47 --> 00:06:52
extend the use of confence to other

00:06:49 --> 00:06:53
domains you just a little Beyond

00:06:51 --> 00:06:56
perception with you know some

00:06:52 --> 00:06:59
interesting but limited success uh then

00:06:55 --> 00:07:01
you another uh big uh very important

00:06:58 --> 00:07:04
breakthrough happen around

00:07:00 --> 00:07:07
2017 when Transformers came around it

00:07:03 --> 00:07:09
had a really huge impact on language

00:07:06 --> 00:07:11
understanding language models

00:07:08 --> 00:07:14
um um you know machine translation so

00:07:10 --> 00:07:15
forth and uh for us it was a really

00:07:13 --> 00:07:19
important breakthrough that really

00:07:15 --> 00:07:21
allowed us to take a Mel in AI uh to new

00:07:18 --> 00:07:24
areas well beyond perception and so if

00:07:20 --> 00:07:26
you think about and if you Transformers

00:07:23 --> 00:07:27
and the impact that they had on language

00:07:25 --> 00:07:29
kind of the intuition is that they're

00:07:26 --> 00:07:30
good at kind of you know uh

00:07:28 --> 00:07:33
understanding and predicting uh and

00:07:29 --> 00:07:37
generating sequences of words right uh

00:07:32 --> 00:07:39
and uh in our case we think about in our

00:07:36 --> 00:07:40
domain think about the tasks of you know

00:07:38 --> 00:07:43
understanding and predicting what you

00:07:40 --> 00:07:44
know people will do like other actors in

00:07:42 --> 00:07:45
the scene or the task of decision-

00:07:43 --> 00:07:48
making and planning your own

00:07:44 --> 00:07:50
trajectories or in simulation kind of

00:07:47 --> 00:07:51
generating your generative AI you know

00:07:49 --> 00:07:54
our version of gener AI kind of

00:07:50 --> 00:07:56
generating behaviors uh of how the world

00:07:53 --> 00:07:58
will evolve uh that kind of these

00:07:55 --> 00:08:01
behavioral like these sequences are not

00:07:57 --> 00:08:02
unlike sentences right operating the

00:08:00 --> 00:08:04
state of objects and there's kind of

00:08:01 --> 00:08:06
local continuity but then the global

00:08:03 --> 00:08:07
context of the scene really matters so

00:08:05 --> 00:08:08
this is where we saw some really

00:08:06 --> 00:08:10
exciting breakthroughs in Behavior

00:08:07 --> 00:08:12
prediction and decision- making and

00:08:09 --> 00:08:14
simulation uh and then you know since

00:08:11 --> 00:08:17
then we've been on this trend of you

00:08:13 --> 00:08:19
know models getting bigger uh the people

00:08:16 --> 00:08:22
started building foundational models for

00:08:18 --> 00:08:24
you know multitasks and U most recently

00:08:21 --> 00:08:26
all of the I guess the last couple of

00:08:23 --> 00:08:29
years all the breakthroughs in uh large

00:08:25 --> 00:08:32
language models modern uh State uh

00:08:28 --> 00:08:34
modern day uh generative AI uh visual

00:08:31 --> 00:08:35
anguage models where you kind of align

00:08:33 --> 00:08:39
uh image understanding and language

00:08:34 --> 00:08:40
understanding and uh there's been uh

00:08:38 --> 00:08:43
most recently one thing I'm pretty

00:08:39 --> 00:08:44
excited about is kind of the uh the

00:08:42 --> 00:08:47
intersection or combination of the two

00:08:43 --> 00:08:49
so that that's what we've been uh uh

00:08:46 --> 00:08:51
very focused on at weo most recently is

00:08:48 --> 00:08:55
taking kind of the AI backbone and all

00:08:50 --> 00:08:58
of the AI the weo AI that is uh over the

00:08:54 --> 00:09:00
years we've build up uh that is really

00:08:57 --> 00:09:02
proficient at this task of autonomous uh

00:08:59 --> 00:09:05
driving and combining it with kind of

00:09:01 --> 00:09:07
the general World knowledge and

00:09:04 --> 00:09:09
understanding of these you know VMS one

00:09:06 --> 00:09:12
of the things that you just mentioned is

00:09:08 --> 00:09:14
uh the role of simulation um and how

00:09:11 --> 00:09:16
that has been you guys have had major

00:09:13 --> 00:09:19
breakthroughs in the use of

00:09:15 --> 00:09:20
simulation and this idea in you know the

00:09:18 --> 00:09:24
the recent breakthroughs in

00:09:19 --> 00:09:26
generative AI um around synthetic data

00:09:23 --> 00:09:30
nd its usefulness is somewhat in

00:09:25 --> 00:09:32
question I would say in your field this

00:09:29 --> 00:09:34
IDE of synthetic data and simulation is

00:09:31 --> 00:09:36
extremely useful and you've proven that

00:09:33 --> 00:09:37
so maybe you could just talk about the

00:09:35 --> 00:09:40
simulation technology you guys have

00:09:36 --> 00:09:43
built um how it's allowed you to scale

00:09:39 --> 00:09:45
um you know build that real world

00:09:42 --> 00:09:47
understanding um you know and maybe how

00:09:44 --> 00:09:49
it's changed in the last few years yeah

00:09:46 --> 00:09:52
definitely uh it's it is super

00:09:48 --> 00:09:55
important uh in our field and the

00:09:52 --> 00:09:58
largely if you think about this question

00:09:54 --> 00:10:00
of you evaluating the driver like you

00:09:57 --> 00:10:02
know is it good enough it's you know how

00:09:59 --> 00:10:05
do you answer that there's you know a

00:10:01 --> 00:10:06
lot of metrics and a lot of uh you know

00:10:04 --> 00:10:10
uh data sets you have to build up and

00:10:05 --> 00:10:12
then you you uh how do you evaluate the

00:10:09 --> 00:10:14
latest version of your system well you

00:10:11 --> 00:10:16
can just you know uh throw it on the

00:10:13 --> 00:10:19
physical world and then you uh see what

00:10:15 --> 00:10:21
happens you have to do an simulation but

00:10:18 --> 00:10:23
of course the new system behaves

00:10:20 --> 00:10:26
differently from what you know might

00:10:22 --> 00:10:28
have happened uh in the world otherwise

00:10:25 --> 00:10:29
so you have to have a realistic Clos

00:10:27 --> 00:10:31
Loop simulation to give you you know

00:10:28 --> 00:10:33
confidence it's inal so that that is one

00:10:30 --> 00:10:34
of the most important needs for the

00:10:32 --> 00:10:37
simulation uh you've also mentioned

00:10:33 --> 00:10:39
synthetic data guess that's another uh

00:10:36 --> 00:10:41
area where simulation allows you to have

00:10:38 --> 00:10:43
ry high leverage you just got to

00:10:40 --> 00:10:44
explore the long tail of events right

00:10:42 --> 00:10:46
maybe there's something interesting that

00:10:43 --> 00:10:48
you have seen in the physical world and

00:10:45 --> 00:10:49
but you know you want to modify that

00:10:47 --> 00:10:51
scenario and you want to kind of turn

00:10:48 --> 00:10:53
one event into thousands or tens of

00:10:50 --> 00:10:54
thousands of variations of that scenario

00:10:52 --> 00:10:56
you know how do you do that you know

00:10:53 --> 00:10:59
this is where the simulation comes in uh

00:10:55 --> 00:11:02
and then you know lastly uh uh if you

00:10:58 --> 00:11:05
know some times want to like uh

00:11:01 --> 00:11:07
evaluate and train on things uh that

00:11:04 --> 00:11:10
you've never seen even though are very

00:11:06 --> 00:11:12
vast uh experience so there this is

00:11:09 --> 00:11:14
where purely synthetic simulations come

00:11:11 --> 00:11:16
in that are not based on anything that

00:11:13 --> 00:11:18
you have seen in the physical world uh

00:11:15 --> 00:11:22
so in terms of technologies that that go

00:11:17 --> 00:11:23
into play I mean uh it's a lot and that

00:11:21 --> 00:11:25
is like a huge generative AI

00:11:22 --> 00:11:29
problem what but but what's really

00:11:24 --> 00:11:31
important is that that uh simulator is

00:11:28 --> 00:11:34
realistic right it has to be realistic

00:11:30 --> 00:11:36
in terms of your you know sensor or

00:11:33 --> 00:11:39
perception realism right as you uh it

00:11:35 --> 00:11:42
has to be uh realistic in terms of the

00:11:39 --> 00:11:45
behaviors that uh you see from other

00:11:41 --> 00:11:47
Dynamic actors right you have you know

00:11:44 --> 00:11:48
uh if they other actors are not behaving

00:11:46 --> 00:11:49
in a realistic way like if you know

00:11:47 --> 00:11:51
pedestrians are not walking the way they

00:11:49 --> 00:11:55
do in the real world you need to be able

00:11:50 --> 00:11:58
to quantify the kind of the the the uh

00:11:54 --> 00:12:01
scenarios that uh you create in

00:11:57 --> 00:12:03
simulation to to the realism and the

00:12:00 --> 00:12:04
rate of currence in the physical world

00:12:02 --> 00:12:07
right it's you know very crazy to sample

00:12:04 --> 00:12:09
something very you know easy to sample

00:12:06 --> 00:12:10
something totally crazy in simulator but

00:12:08 --> 00:12:12
hen you know what do you do with that

00:12:10 --> 00:12:14
so I think that that brings me to the

00:12:11 --> 00:12:15
third point of you know realism is that

00:12:13 --> 00:12:17
it has to be kind of realistic and

00:12:14 --> 00:12:19
quantifiable at the macro level at the

00:12:16 --> 00:12:20
statistical level so there's you can

00:12:18 --> 00:12:22
imagine there's a lot of work that goes

00:12:19 --> 00:12:24
into building the simulator that is you

00:12:21 --> 00:12:25
know large scale and has you know that

00:12:23 --> 00:12:27
level of realism across those

00:12:24 --> 00:12:29
categories and if kind of intuitively

00:12:27 --> 00:12:31
think about it you know to build a good

00:12:28 --> 00:12:32
river you need to have a very good

00:12:30 --> 00:12:34
simulator but to have a good simulator

00:12:31 --> 00:12:36
you actually have to build models of

00:12:33 --> 00:12:37
like realistic pedestrians and cyclists

00:12:35 --> 00:12:39
and drivers right so it's you know you

00:12:36 --> 00:12:41
kind of do that iteratively yeah of

00:12:38 --> 00:12:44
course and then by having this

00:12:40 --> 00:12:46
imulation software that is very good at

00:12:43 --> 00:12:49
mimicking real world uh and very usable

00:12:45 --> 00:12:52
in the sense that you can create

00:12:48 --> 00:12:54
variables in the scenes you can actually

00:12:51 --> 00:12:57
give the driver multiples of the amount

00:12:53 --> 00:12:58
of experience that they have on the road

00:12:56 --> 00:13:00
that's exactly right in real m is that

00:12:57 --> 00:13:03
right that's exactly right we've driven

00:13:00 --> 00:13:05
you know tens of millions uh of miles in

00:13:02 --> 00:13:07
the physical world and at this point

00:13:04 --> 00:13:09
we've driven more than 15 million miles

00:13:06 --> 00:13:11
in uh full autonomy what we call you

00:13:08 --> 00:13:12
know wrer only mode um but we've driven

00:13:10 --> 00:13:14
you know tens of billions of miles in

00:13:11 --> 00:13:17
simulation so you get you know orders of

00:13:13 --> 00:13:21
magnitude of a amplifier speaking of

00:13:16 --> 00:13:24
multiples of miles driven uh one of the

00:13:20 --> 00:13:27
hotly debated Topics in the AI world

00:13:24 --> 00:13:29
today is this concept of scaling laws so

00:13:26 --> 00:13:31
how do you think about scaling laws as

00:13:28 --> 00:13:34
it relates to autonomous driving is it

00:13:30 --> 00:13:37
miles driven is it certain experience

00:13:33 --> 00:13:39
had is it compute like what are what are

00:13:36 --> 00:13:43
the ways that you think about

00:13:38 --> 00:13:45
hat um so model size matters so we I

00:13:42 --> 00:13:50
seeing um you know scaling laws applied

00:13:44 --> 00:13:51
a lot of uh typical you know old school

00:13:49 --> 00:13:54
models are you know severely

00:13:50 --> 00:13:55
undertrained uh and uh so if you have a

00:13:53 --> 00:13:57
bigger model you have data that actually

00:13:54 --> 00:13:59
does help you uh you just have more

00:13:56 --> 00:14:02
capacity they generalize better uh so we

00:13:58 --> 00:14:04
are seeing uh scaling laws apply there

00:14:01 --> 00:14:07
uh data of course usually matters right

00:14:03 --> 00:14:10
um and uh but it's not just you know

00:14:06 --> 00:14:12
counting the miles right or hours it has

00:14:09 --> 00:14:14
to be you know the right kind of data

00:14:11 --> 00:14:16
that you know teaches the models or

00:14:13 --> 00:14:19
trains the models to be you good at the

00:14:15 --> 00:14:21
rare cases um that that you care about

00:14:18 --> 00:14:23
uh and then you know there is a bit of a

00:14:20 --> 00:14:24
then you know wrinkle because then you

00:14:22 --> 00:14:27
have to you can build those very large

00:14:23 --> 00:14:28
models but in our space it has to run on

00:14:26 --> 00:14:30
board the car right so you are somewhat

00:14:27 --> 00:14:33
comp St

00:14:29 --> 00:14:36
it into your you know onard system but

00:14:32 --> 00:14:37
we do see uh Trend which is you know

00:14:35 --> 00:14:39
Common Trend and we see that play out in

00:14:36 --> 00:14:40
our space where you're much better off

00:14:38 --> 00:14:42
training a huge model and then

00:14:39 --> 00:14:44
distilling it into a smaller model than

00:14:41 --> 00:14:46
just training small models yeah I'm

00:14:43 --> 00:14:48
going to shift gears a little bit and

00:14:45 --> 00:14:49
I'm going to do a uh sort of simplifying

00:14:47 --> 00:14:52
statement which is probably going to

00:14:48 --> 00:14:56
drive you crazy um but the DARPA school

00:14:52 --> 00:14:58
of thought is um you know there's sort

00:14:55 --> 00:15:00
of a a rules-based approach right a more

00:14:57 --> 00:15:03
traditional kind kind of AI based

00:14:59 --> 00:15:06
approach um with a massive amount of

00:15:02 --> 00:15:08
volume and you document edge cases and

00:15:05 --> 00:15:12
then the model then learns how to react

00:15:07 --> 00:15:14
o those um the more recent approaches

00:15:11 --> 00:15:17
from some other large players and

00:15:13 --> 00:15:19
startups would say hey we just have ai

00:15:16 --> 00:15:21
from the start make all the decisions

00:15:18 --> 00:15:23
and to end you don't need to have sort

00:15:20 --> 00:15:25
of all that pattern recognition and

00:15:22 --> 00:15:27
learning you know like the in to-end

00:15:24 --> 00:15:30
riving that that is kind of a tagline

00:15:26 --> 00:15:33
out there um what is your interpretation

00:15:29 --> 00:15:35
of that approach and what elements of

00:15:32 --> 00:15:39
that approach have you taken and applied

00:15:34 --> 00:15:41
inside of wio yeah know I I think it's

00:15:38 --> 00:15:43
kind of you know sometimes it's a you

00:15:40 --> 00:15:45
know the way people talk about it is

00:15:42 --> 00:15:48
kind of a a this weird dichotomy is it

00:15:44 --> 00:15:52
his or that yeah of course but it's not

00:15:47 --> 00:15:54
it's that and then some right so it is

00:15:51 --> 00:15:57
you know big models it is end to-end

00:15:53 --> 00:16:00
models yeah it is uh gener of AI and

00:15:56 --> 00:16:03
combining you know these models with v

00:15:59 --> 00:16:05
right but the the problem is it's not

00:16:02 --> 00:16:07
enough right right so I mean like we all

00:16:04 --> 00:16:09
know the the limitations of those models

00:16:06 --> 00:16:10
right and that's and we've seen you know

00:16:08 --> 00:16:12
Through The Years A lot of these

00:16:09 --> 00:16:13
breakthroughs in AI right you know

00:16:11 --> 00:16:15
conness Transformers you know big end

00:16:13 --> 00:16:18
to-end Foundation models they're huge

00:16:14 --> 00:16:20
boost to us and you know what we've been

00:16:17 --> 00:16:24
uh doing at that wayon through the

00:16:19 --> 00:16:26
history of our project is kind of uh

00:16:23 --> 00:16:27
constantly applying and pushing forward

00:16:25 --> 00:16:29
these state of art techniques ourselves

00:16:26 --> 00:16:30
in com some cases but then applying them

00:16:28 --> 00:16:32
to our domain and what we've been

00:16:29 --> 00:16:34
learning is that they really give you a

00:16:31 --> 00:16:36
huge boost but they're just not enough

00:16:33 --> 00:16:38
right right so the kind of the the the

00:16:35 --> 00:16:39
me has always been that you can take

00:16:37 --> 00:16:43
you know your kind of latest and

00:16:38 --> 00:16:45
greatest uh technology of the day and

00:16:42 --> 00:16:47
it's fairly easy to get started right

00:16:44 --> 00:16:48
like you know like the curves always

00:16:46 --> 00:16:49
look like that and they like they've

00:16:47 --> 00:16:51
been the curves have been shaping but

00:16:48 --> 00:16:52
he really hard problems on that in that

00:16:50 --> 00:16:55
remaining

00:16:51 --> 00:16:56
0.1% and there it's not enough so right

00:16:54 --> 00:16:58
so then you have to do stuff on top of

00:16:55 --> 00:17:00
that right so yes you can take you know

00:16:57 --> 00:17:02
adays uh you can take take you know

00:16:59 --> 00:17:04
an endtoend model uh go from sensor to

00:17:01 --> 00:17:05
you know trajectories or ACC creation uh

00:17:03 --> 00:17:06
you typically you don't build them in

00:17:04 --> 00:17:08
one stage you build them in stages but

00:17:05 --> 00:17:09
you know you can do like back propop

00:17:07 --> 00:17:11
through the whole thing so you know the

00:17:08 --> 00:17:14
concept is very very valid uh you can

00:17:10 --> 00:17:16
you know combine it and you know with a

00:17:13 --> 00:17:18
VM and then you know you you you add

00:17:15 --> 00:17:20
closed loop simulation some sort and you

00:17:17 --> 00:17:22
know you're Off to the Races you can

00:17:19 --> 00:17:24
have a great demo like almost out of the

00:17:21 --> 00:17:27
box you can have you know an uh an ades

00:17:23 --> 00:17:29
or a driver assist system but that's not

00:17:26 --> 00:17:30
enough to go all the way to full

00:17:28 --> 00:17:32
autonomy so that's where really a lot of

00:17:29 --> 00:17:33
the hard work happens so I guess the

00:17:31 --> 00:17:35
question is you know not as it this or

00:17:32 --> 00:17:37
that it's you know this and then what

00:17:34 --> 00:17:40
else do you need to take it all the way

00:17:36 --> 00:17:41
to have the confidence in you know so

00:17:39 --> 00:17:43
that you can actually remove the driver

00:17:40 --> 00:17:44
and go for full autonomy and that's a

00:17:42 --> 00:17:47
ton of work that's a ton of work through

00:17:43 --> 00:17:49
the entire kind of life cycle of these

00:17:46 --> 00:17:50
models and the entire system right so it

00:17:48 --> 00:17:52
starts with training like how do you

00:17:49 --> 00:17:55
train how do you architect these models

00:17:51 --> 00:17:57
how do you uh you know evaluate them

00:17:54 --> 00:17:58
then you know if you put in bigger

00:17:56 --> 00:17:59
system the models themselves are not

00:17:57 --> 00:18:01
enough so you have to do things around

00:17:58 --> 00:18:03
them you have to you know they

00:18:00 --> 00:18:05
have uh modern gener of AI is great but

00:18:02 --> 00:18:08
here are some issues with you know

00:18:04 --> 00:18:09
hallucinations likeability exactly

00:18:07 --> 00:18:12
so you know they they have some

00:18:08 --> 00:18:14
weaknesses in kind of uh goal oriented

00:18:11 --> 00:18:16
uh planning and policymaking and kind of

00:18:13 --> 00:18:18
understanding this you know 3D Spa

00:18:15 --> 00:18:19
operating in this 3D spatial world right

00:18:17 --> 00:18:21
so you have to add you know something on

00:18:18 --> 00:18:22
top of that we talked a little bit about

00:18:20 --> 00:18:24
he simulator that's a really hard

00:18:21 --> 00:18:26
problem in of itself and then you know

00:18:23 --> 00:18:27
once you have something uh you know once

00:18:25 --> 00:18:29
you deploy it and you learn how do you

00:18:26 --> 00:18:30
feed that back so I guess this is where

00:18:28 --> 00:18:32
all of the really really hard work

00:18:29 --> 00:18:33
happens so it's not like end to endend

00:18:31 --> 00:18:34
versus something else it is end to

00:18:32 --> 00:18:37
endend and you know big foundation

00:18:33 --> 00:18:38
models and then like and then the hard

00:18:36 --> 00:18:41
work and then all the hard work yeah it

00:18:37 --> 00:18:43
otally makes sense uh that is a great

00:18:40 --> 00:18:45
segue into all of the progress that you

00:18:42 --> 00:18:48
guys have made right writing in the wayo

00:18:45 --> 00:18:50
for those who have done it is an

00:18:47 --> 00:18:52
extraordinary experience it's not to say

00:18:49 --> 00:18:53
that you have solved all of these

00:18:51 --> 00:18:57
complex tasks but you you've solved a

00:18:52 --> 00:19:00
lot of them what are some of the biggest

00:18:56 --> 00:19:02
AI or data problems that you still feel

00:18:59 --> 00:19:05
ike you're facing today and the short

00:19:01 --> 00:19:08
answer is going to be you know uh taking

00:19:04 --> 00:19:10
it to you know the next order of

00:19:07 --> 00:19:11
magnitude of scale multiple orders of

00:19:09 --> 00:19:13
magnitude of scale and with that come

00:19:11 --> 00:19:16
you know additional improvements that we

00:19:12 --> 00:19:18
need to make it you know a great service

00:19:15 --> 00:19:20
right but you know just to to level set

00:19:17 --> 00:19:24
and make uh uh in terms of where we are

00:19:19 --> 00:19:27
today you know we are uh you know

00:19:23 --> 00:19:30
driving in uh all kinds of conditions

00:19:26 --> 00:19:32
we're driving you know 24/7 in San

00:19:29 --> 00:19:33
Francisco in Phoenix you know a little

00:19:31 --> 00:19:36
bit those are the most mature markets

00:19:32 --> 00:19:39
but also in LA and in Austin and you

00:19:35 --> 00:19:41
know all of the complexity that you see

00:19:38 --> 00:19:42
you go drive around the city right all

00:19:40 --> 00:19:45
kinds of weather conditions whether it's

00:19:41 --> 00:19:47
you know fog or you know storms or you

00:19:44 --> 00:19:49
dust storms or you know uh rainstorms

00:19:46 --> 00:19:51
down here like all of that all of those

00:19:48 --> 00:19:53
are conditions that we do operate in

00:19:50 --> 00:19:56
right uh so then I you think about you

00:19:52 --> 00:19:58
know what makes it uh a great you know

00:19:55 --> 00:20:00
customer experience right like what what

00:19:57 --> 00:20:02
does it take if you you know grow bu you

00:19:59 --> 00:20:03
know next you know orders of magnitude

00:20:01 --> 00:20:05
there's a lot of improvements that we

00:20:02 --> 00:20:06
want to make so that it's becomes a

00:20:04 --> 00:20:08
better service for you to get from point

00:20:05 --> 00:20:10
A to point B right like uh we ask for

00:20:07 --> 00:20:12
feedback from our writers uh all a lot

00:20:09 --> 00:20:14
of feedback we get is has to do with the

00:20:11 --> 00:20:15
quality of your pickup and drop

00:20:13 --> 00:20:17
applications right so we're learning

00:20:14 --> 00:20:20
from users like we want to make it a

00:20:16 --> 00:20:22
magical seamless you know delightful

00:20:19 --> 00:20:23
experience from the time you kind of you

00:20:21 --> 00:20:25
know start the app on your phone to when

00:20:22 --> 00:20:26
you get on destination so that that's a

00:20:24 --> 00:20:29
lot of the work that we're doing right

00:20:25 --> 00:20:31
now yeah pick up and drop off for what

00:20:28 --> 00:20:35
it's worth is an extraordinarily hard

00:20:30 --> 00:20:36
problem right like do you kind of block

00:20:34 --> 00:20:39
a little bit of a driveway if you're in

00:20:35 --> 00:20:41
an urban location and then have a sensor

00:20:38 --> 00:20:43
that says oh actually I just saw

00:20:40 --> 00:20:45
somebody opening a garage door I need to

00:20:42 --> 00:20:47
get out of the way um you know how far

00:20:44 --> 00:20:49
down the street is acceptable to go pull

00:20:46 --> 00:20:51
or if you're in a parking lot where in

00:20:48 --> 00:20:53
the parking lot do you go like this is

00:20:50 --> 00:20:55
an extraordinarily hard problem but to

00:20:52 --> 00:20:56
your point it's huge for user experience

00:20:54 --> 00:20:58
that's exactly right right and just you

00:20:55 --> 00:21:00
know I think that's a good example of

00:20:57 --> 00:21:02
like hey just one thing one of the many

00:20:59 --> 00:21:04
things that we have to build in order

00:21:01 --> 00:21:06
for this to be an awesome product right

00:21:03 --> 00:21:08
not just like a technology demonstrator

00:21:05 --> 00:21:12
and I think you've just like you hit

00:21:07 --> 00:21:14
exactly you know the uh on a few things

00:21:11 --> 00:21:16
that make you know something that kind

00:21:13 --> 00:21:18
of at the uh the face of it might seem

00:21:15 --> 00:21:19
fairly straightforward right okay you

00:21:17 --> 00:21:21
know I know there's a place on the map

00:21:19 --> 00:21:22
and I need to pull over like how hard

00:21:20 --> 00:21:24
can it be right but really if it's a

00:21:21 --> 00:21:25
complicated you a dense Urban

00:21:23 --> 00:21:28
environment there's a lot of these

00:21:24 --> 00:21:29
factors right is there like you know

00:21:27 --> 00:21:30
another vehicle that you're going to be

00:21:28 --> 00:21:32
blocking is there a garage door that's

00:21:29 --> 00:21:34
opening right like you know what what is

00:21:31 --> 00:21:36
the most convenient place for the user

00:21:33 --> 00:21:39
to pick off what is the so it really

00:21:35 --> 00:21:41
gets into this yeah the depth and the

00:21:38 --> 00:21:43
subtlety of understanding the you know

00:21:40 --> 00:21:45
the the the semantics and the dynamic

00:21:42 --> 00:21:47
nature of this driving task and you know

00:21:44 --> 00:21:49
doing things that are you know safe

00:21:46 --> 00:21:52
comfortable and predictable and it lead

00:21:48 --> 00:21:54
to a a nice seamless Pleasant delightful

00:21:51 --> 00:21:57
customer experience of course okay so

00:21:53 --> 00:21:59
you've mentioned this stat but 15

00:21:56 --> 00:22:00
million miles I know the numbers

00:21:58 --> 00:22:02
probably a little bit bigger than that

00:21:59 --> 00:22:04
but you you just released it Tuesday

00:22:01 --> 00:22:08
eah it's it's growing by the by the day

00:22:03 --> 00:22:10
um 15 million autonomous mes driven

00:22:07 --> 00:22:12
that's incredible um even more

00:22:09 --> 00:22:16
impressive and you didn't share this

00:22:11 --> 00:22:19
tat yet it results in 3.5 times fewer

00:22:15 --> 00:22:21
accidents than human drivers is that

00:22:18 --> 00:22:23
right and I think 3.5x is the reduction

00:22:20 --> 00:22:25
in injury and then it's about 2x

00:22:22 --> 00:22:28
reduction in the police reportable kind

00:22:24 --> 00:22:31
of lower severity incidents this sort of

00:22:27 --> 00:22:34
comes to a question of um both kind of

00:22:30 --> 00:22:36
regulatory and and you know kind of

00:22:33 --> 00:22:38
business or ethical judgment what is the

00:22:35 --> 00:22:40
right level that you want to get to

00:22:37 --> 00:22:41
bviously you want to constantly get

00:22:39 --> 00:22:43
better but is there a level at which you

00:22:40 --> 00:22:46
say okay we're good enough and that's

00:22:42 --> 00:22:50
acceptable to Regulators yeah so there's

00:22:45 --> 00:22:52
no uh you know simple super simple short

00:22:49 --> 00:22:53
answer right right I think it starts

00:22:51 --> 00:22:55
with that it starts with those

00:22:52 --> 00:22:56
statistics that you just mentioned like

00:22:54 --> 00:22:58
at the end of the day what you care

00:22:55 --> 00:23:00
about is that rows are safer so then you

00:22:57 --> 00:23:02
look at those numbers that you where we

00:22:59 --> 00:23:04
operate today uh and we have you know

00:23:01 --> 00:23:07
strong empirical evidence that uh our

00:23:03 --> 00:23:09
cars are in those areas safer than human

00:23:06 --> 00:23:12
drivers so on balance that means a

00:23:08 --> 00:23:14
reduction in you know collisions and and

00:23:11 --> 00:23:17
harm

00:23:13 --> 00:23:18
uh um then you actually on top of the

00:23:16 --> 00:23:20
numbers we've been publishing this

00:23:18 --> 00:23:22
the you're quoting the latest numbers

00:23:19 --> 00:23:24
that we shared consistently you know

00:23:21 --> 00:23:27
sharing uh numbers as as our service

00:23:23 --> 00:23:29
scales up and uh grows uh if you can

00:23:26 --> 00:23:32
also bring in you know an additional

00:23:28 --> 00:23:34
ens of you know what how much did you

00:23:31 --> 00:23:35
contribute to a collision and we

00:23:33 --> 00:23:37
actually published I think it was based

00:23:35 --> 00:23:39
on about 4 million miles 3.8 million

00:23:36 --> 00:23:42
miles we published a joint study with

00:23:38 --> 00:23:44
Swiss AR which is I think the largest

00:23:41 --> 00:23:46
global reinsurer in the world and the

00:23:43 --> 00:23:49
way they look at it is you know who

00:23:45 --> 00:23:51
contributed to an event and there we saw

00:23:48 --> 00:23:55
uh like the same theme but the numbers

00:23:50 --> 00:23:59
were uh very strong that feel was a 76%

00:23:54 --> 00:24:01
reduction in uh um police kind of uh

00:23:58 --> 00:24:04
proper prop damage collisions and it was

00:24:00 --> 00:24:06
an 100% reduction in claims around

00:24:03 --> 00:24:08
bodily injury so if you kind of bring in

00:24:05 --> 00:24:10
that lens I think the story becomes even

00:24:07 --> 00:24:11
more compelling right ex compelling

00:24:09 --> 00:24:13
right but there are some collisions

00:24:10 --> 00:24:14
where you know we'd be and that's the

00:24:12 --> 00:24:16
bulk of the events that we see it' be

00:24:13 --> 00:24:18
stopped at a red light uh and then

00:24:15 --> 00:24:21
somebody just plows into you right sure

00:24:17 --> 00:24:23
so um uh but then uh like we I think you

00:24:20 --> 00:24:26
know we do know it's it's a new

00:24:22 --> 00:24:28
technology it's a new product so um it

00:24:25 --> 00:24:30
is held to a higher standard uh so we

00:24:27 --> 00:24:32
when we think about our safety and our

00:24:30 --> 00:24:34
Readiness you know framing methodology

00:24:31 --> 00:24:36
we don't stop at just the race right we

00:24:33 --> 00:24:39
build over the years as you know one of

00:24:35 --> 00:24:41
the uh uh huge areas of investment and

00:24:38 --> 00:24:42
experience over the years like how you

00:24:40 --> 00:24:44
know what else do you need so we have

00:24:41 --> 00:24:45
done and we have done a number of other

00:24:43 --> 00:24:47
different things and we've published

00:24:44 --> 00:24:48
some of our methodologies we've shared

00:24:46 --> 00:24:50
our radness framework uh you know we do

00:24:48 --> 00:24:52
all other things like we actually not

00:24:49 --> 00:24:55
just statistically but on you know

00:24:51 --> 00:24:57
specific events we build models of uh an

00:24:54 --> 00:25:00
intentive very good human driver like

00:24:56 --> 00:25:01
not distracted human a you know good

00:24:59 --> 00:25:03
question whether such a driver exist

00:25:00 --> 00:25:05
right but that's kind of what we compare

00:25:02 --> 00:25:06
our driver to right and it's a model

00:25:04 --> 00:25:08
ike it's then it's you know in

00:25:05 --> 00:25:10
particular scenario we evaluate

00:25:07 --> 00:25:11
ourselves versus that model of human

00:25:09 --> 00:25:13
driver and we hold ourselves to the bar

00:25:11 --> 00:25:15
of you know doing well compared to that

00:25:12 --> 00:25:16
very high standard and then you know you

00:25:14 --> 00:25:19
pursue other you know validation

00:25:15 --> 00:25:21
methodologies so my that that's my

00:25:18 --> 00:25:23
answer is that it's the you the

00:25:20 --> 00:25:25
aggregate of all of those methodologies

00:25:22 --> 00:25:27
that you know that that we look at to

00:25:24 --> 00:25:29
decide that yes you know the system is

00:25:26 --> 00:25:32
ready enough to be deployed in scale I'd

00:25:28 --> 00:25:34
love for you to talk about um what you

00:25:31 --> 00:25:36
think maybe today and in the future

00:25:33 --> 00:25:39
about Market structure

00:25:35 --> 00:25:42
competition um and what kind of role you

00:25:38 --> 00:25:45
envision weo playing so the way we think

00:25:41 --> 00:25:47
about you know weo and our company is

00:25:44 --> 00:25:50
that we are building a generalizable

00:25:46 --> 00:25:53
driver that's the core of it and that's

00:25:49 --> 00:25:57
the core of the mission of uh making uh

00:25:52 --> 00:25:59
Transportation safe and accessible right

00:25:56 --> 00:26:01
and uh

00:25:59 --> 00:26:04
we're talking about right hailing uh

00:26:00 --> 00:26:05
today that's our main most mature

00:26:03 --> 00:26:08
primary application but you know we

00:26:05 --> 00:26:09
nvision a future where our the wayo

00:26:07 --> 00:26:11
driver will deploy be deployed in other

00:26:09 --> 00:26:13
commercial applications right there's

00:26:10 --> 00:26:16
deliveries there's Trucking there's

00:26:12 --> 00:26:17
personally owned Vehicles right so in

00:26:15 --> 00:26:21
all of those you know our guiding

00:26:16 --> 00:26:25
principle would be to uh think about the

00:26:20 --> 00:26:27
Golden Market strategy in in a way that

00:26:24 --> 00:26:30
uh accelerates uh access to this

00:26:26 --> 00:26:33
technology and gets you know a depl as

00:26:29 --> 00:26:34
you know uh broadly uh you know well of

00:26:32 --> 00:26:36
course doing it gradually and

00:26:33 --> 00:26:39
eliberately and safely but you know as

00:26:35 --> 00:26:42
quickly and U and broadly as possible uh

00:26:38 --> 00:26:44
so with that as our ging principle we're

00:26:41 --> 00:26:46
going to explore different uh commercial

00:26:43 --> 00:26:48
structures different partnership

00:26:45 --> 00:26:50
structures for example in Phoenix today

00:26:47 --> 00:26:52
uh we have a partnership with Uber uh

00:26:49 --> 00:26:55
and right healing both in right healing

00:26:51 --> 00:26:57
and in Uber Eats where so in Phoenix we

00:26:54 --> 00:26:59
have our own app you can download the

00:26:56 --> 00:27:00
weo app and you take a ride on hour our

00:26:58 --> 00:27:03
vehicle will show up and take it where

00:26:59 --> 00:27:05
you want to go uh uh that's you know one

00:27:02 --> 00:27:07
way to experience our product another

00:27:04 --> 00:27:08
one is through the Uber app we have a

00:27:06 --> 00:27:11
partnership where you can get through

00:27:07 --> 00:27:13
Uber uh app matched with a you know our

00:27:10 --> 00:27:14
product the wio driver the weo vehicle

00:27:12 --> 00:27:16
and it's the same experience right but

00:27:14 --> 00:27:18
his is uh another way for us to

00:27:15 --> 00:27:20
accelerate and give you know more people

00:27:17 --> 00:27:22
to experience full autonomy and it gives

00:27:19 --> 00:27:24
us a chance to kind of you know think

00:27:21 --> 00:27:26
about the different uh go to market

00:27:23 --> 00:27:29
strategies right one is you know uh us

00:27:25 --> 00:27:30
you know having you know more of Our Own

00:27:28 --> 00:27:32
app the other one is more of a you know

00:27:29 --> 00:27:33
driver as a service or somebody else's

00:27:31 --> 00:27:36
Network so we'll you know still early

00:27:33 --> 00:27:38
days but we will iterate and but all you

00:27:35 --> 00:27:39
know in service of that main principle

00:27:37 --> 00:27:42
that's amazing yeah that's going to be

00:27:38 --> 00:27:44
uh that's going to be exciting um maybe

00:27:41 --> 00:27:46
on back to the vehicle what about the

00:27:43 --> 00:27:48
hardware stack that you use you and I

00:27:45 --> 00:27:49
have talked a bunch about you know you

00:27:47 --> 00:27:52
said like hey going all the way back to

00:27:48 --> 00:27:54
DARPA um you know was kind of the same

00:27:51 --> 00:27:57
stuff right it's you know it's sensor

00:27:53 --> 00:27:58
they've Advanced quite considerably but

00:27:56 --> 00:28:02
um you know you still use you know

00:27:57 --> 00:28:04
radars in lar um do you think that

00:28:01 --> 00:28:08
remains the future path for autonomous

00:28:03 --> 00:28:10
driving lar specifically uh yeah no I I

00:28:07 --> 00:28:13
mean uh the sensors

00:28:10 --> 00:28:16
are uh

00:28:12 --> 00:28:19
physically uh different right they have

00:28:16 --> 00:28:21
ach one cameras blers radar they have

00:28:18 --> 00:28:22
their you know benefits each one brings

00:28:20 --> 00:28:24
their own benefits right you know

00:28:21 --> 00:28:25
cameras obviously give you color and

00:28:23 --> 00:28:28
they give you high you know very high

00:28:24 --> 00:28:31
resolution uh lighters uh kind of give

00:28:27 --> 00:28:33
you you know a direct 3D measurement uh

00:28:30 --> 00:28:34
of your environment and they're an

00:28:32 --> 00:28:36
active sensor right so kind of bring

00:28:34 --> 00:28:38
their own energy pitch dark when there's

00:28:35 --> 00:28:40
no you know external light source you

00:28:37 --> 00:28:42
know you still get uh you know the seat

00:28:39 --> 00:28:44
just as well as they do during the day

00:28:41 --> 00:28:47
ou know better in some cases uh and

00:28:43 --> 00:28:49
then you know radar uh is uh you know

00:28:46 --> 00:28:50
very good at like punching through just

00:28:48 --> 00:28:52
you know different physics different

00:28:49 --> 00:28:54
wavelengths right so if you build an

00:28:51 --> 00:28:57
Imaging uh radar which we do uh

00:28:53 --> 00:28:59
ourselves um you know it allows us to

00:28:56 --> 00:29:01
you know give you an additional

00:28:58 --> 00:29:03
redundancy layer and it has benefits

00:29:00 --> 00:29:04
also an active sensor it can directly

00:29:02 --> 00:29:08
measure you know through do velocity of

00:29:04 --> 00:29:10
other objects and it can you know uh um

00:29:07 --> 00:29:12
degrades differently and more gracefully

00:29:09 --> 00:29:15
in some weather conditions like you know

00:29:11 --> 00:29:17
very dense fog you know or very uh so

00:29:14 --> 00:29:20
you know they all have their benefits so

00:29:16 --> 00:29:24
if you uh you know our approach has been

00:29:19 --> 00:29:25
to you know use all of them right and

00:29:23 --> 00:29:27
yeah that's how you have redundancy and

00:29:24 --> 00:29:30
that's how you get an extra boost in

00:29:26 --> 00:29:33
capability of the system um and you know

00:29:29 --> 00:29:35
e are on you know fif today deployed

00:29:32 --> 00:29:37
and in fifth and working to deploy the

00:29:34 --> 00:29:39
sixth generation of our sensors and you

00:29:36 --> 00:29:42
know over those Generations we've uh

00:29:38 --> 00:29:43
improved uh you know reliability we've

00:29:41 --> 00:29:45
improved you know capability and

00:29:42 --> 00:29:47
performance and we've brought down the

00:29:44 --> 00:29:49
cost very significantly right so uh yeah

00:29:46 --> 00:29:50
I think the the trend you know for us

00:29:48 --> 00:29:53
that you know using all three modalities

00:29:49 --> 00:29:55
just makes a lot of sense uh again you

00:29:52 --> 00:29:56
know you might make different trade-offs

00:29:54 --> 00:29:58
if you are building a driver assist

00:29:55 --> 00:30:00
system versus a fully autonomous vehicle

00:29:57 --> 00:30:04
where you you know that last 1% really

00:29:59 --> 00:30:07
matters yeah absolutely um one of

00:30:03 --> 00:30:11
the observations that we have from the

00:30:06 --> 00:30:15
very early days of this wave of

00:30:10 --> 00:30:18
llms is that there has been sort of

00:30:14 --> 00:30:21
already a massive uh race of like cost

00:30:17 --> 00:30:23
reduction and many would argue that it's

00:30:20 --> 00:30:26
ort of a process of commoditization

00:30:22 --> 00:30:28
already even though it's very early days

00:30:25 --> 00:30:31
um I would say the observation from

00:30:28 --> 00:30:33
autonomous driving over many many years

00:30:30 --> 00:30:36
now is kind of the opposite thing

00:30:32 --> 00:30:38
there's been a thinning of the field um

00:30:35 --> 00:30:40
you know it's proven to be much much

00:30:37 --> 00:30:43
arder than expected can you just talk

00:30:39 --> 00:30:44
about maybe why that's the case you know

00:30:42 --> 00:30:47
they always had this property that it's

00:30:43 --> 00:30:49
very easy to get started but it's very

00:30:46 --> 00:30:51
insanely difficult to get it you know

00:30:48 --> 00:30:53
all the way you know to full autonomy so

00:30:50 --> 00:30:57
that you can remove the driver um and

00:30:52 --> 00:31:00
you there there's uh maybe a few uh

00:30:56 --> 00:31:03
factors that contribute to that um one

00:30:59 --> 00:31:06
is you know compared to the llms and you

00:31:02 --> 00:31:08
know kind of AI in the digital world

00:31:05 --> 00:31:09
right you you have to operate in the

00:31:07 --> 00:31:12
physical world the physical world is

00:31:08 --> 00:31:14
messy uh it is noisy and you know it can

00:31:11 --> 00:31:16
be quite humbling right there's all

00:31:13 --> 00:31:19
kinds of you know uncertainty and noise

00:31:15 --> 00:31:22
uh that you can kind of pull you out of

00:31:19 --> 00:31:24
distribution if you will right uh so

00:31:21 --> 00:31:27
that that that's one thing that that

00:31:23 --> 00:31:29
makes this very difficult um and uh

00:31:26 --> 00:31:33
secondly it's

00:31:28 --> 00:31:36
uh safety right sure uh these you know

00:31:32 --> 00:31:39
AI systems you know in some domain you

00:31:35 --> 00:31:42
know this is creativity and it's great

00:31:38 --> 00:31:44
in our domain the cost of mistakes or

00:31:41 --> 00:31:46
you know lack of you know accuracy has

00:31:43 --> 00:31:48
very serious consequences right so that

00:31:45 --> 00:31:51
that says the bar very very high

00:31:47 --> 00:31:52
and and the last thing is that it is uh

00:31:50 --> 00:31:54
you have you know you have to operate in

00:31:51 --> 00:31:56
real time and you're you're putting

00:31:53 --> 00:31:58
these systems on fast moving vehicles

00:31:55 --> 00:31:59
and you have to you know milliseconds

00:31:57 --> 00:32:00
matter right have to make the decisions

00:31:58 --> 00:32:02
very quickly so I think it's you know

00:32:00 --> 00:32:06
the combination of those factors that

00:32:01 --> 00:32:07
really you know together lead to you

00:32:05 --> 00:32:09
know the that the trend that you've been

00:32:06 --> 00:32:11
seeing is that like you know it it it's

00:32:08 --> 00:32:12
an end right you have to be excellent

00:32:10 --> 00:32:13
and this and this and this and then

00:32:11 --> 00:32:15
right it's all of the above the bar is

00:32:12 --> 00:32:17
very very high for you know every

00:32:14 --> 00:32:18
component of the system and how you put

00:32:16 --> 00:32:20
hem together but you know there there's

00:32:17 --> 00:32:23
big advances and they you know boost you

00:32:19 --> 00:32:24
and they profill the system forward but

00:32:22 --> 00:32:25
hey're no silver bullets right and

00:32:23 --> 00:32:27
there's they're no shortcuts if you're

00:32:24 --> 00:32:29
talking about full autonomy and because

00:32:26 --> 00:32:32
of that lack of Tolerance for errors you

00:32:28 --> 00:32:35
have a very high bar for safety you have

00:32:31 --> 00:32:37
a very high burden from Regulators you

00:32:34 --> 00:32:40
know it's it's it's very costly to go

00:32:36 --> 00:32:42
through all those processes um and so it

00:32:39 --> 00:32:43
makes sense and I'm very grateful

00:32:41 --> 00:32:46
that you guys have seen it through

00:32:42 --> 00:32:48
despite all the humbling experiences uh

00:32:45 --> 00:32:50
that you uh that you had along the way

00:32:47 --> 00:32:54
it's uh it's been a long journey but

00:32:49 --> 00:32:58
it's uh you know for me and the many

00:32:53 --> 00:33:00
people at wayo it is super exciting and

00:32:57 --> 00:33:02
very very rewarding to finally you know

00:32:59 --> 00:33:04
see it become reality know we talk about

00:33:01 --> 00:33:05
safety and AI in in many contexts right

00:33:03 --> 00:33:08
it's a big question right but you know

00:33:05 --> 00:33:09
here we are in this application of AI in

00:33:07 --> 00:33:11
the fiscal world we have you know at

00:33:08 --> 00:33:13
his point a pretty robust and

00:33:10 --> 00:33:16
increasing body of evidence that you

00:33:12 --> 00:33:18
know we are seeing like tangible safety

00:33:15 --> 00:33:20
benefits so that that's very exciting

00:33:17 --> 00:33:22
yeah I always say to people it was a

00:33:19 --> 00:33:24
long journey and very costly and

00:33:21 --> 00:33:27
expensive along the way but this is

00:33:23 --> 00:33:30
probably the most powerful manifestation

00:33:26 --> 00:33:31
of AI that we have ail able to us in the

00:33:29 --> 00:33:33
world today I mean you can get in

00:33:30 --> 00:33:35
a car without a driver and it's safer

00:33:32 --> 00:33:36
than having a human and that's just

00:33:34 --> 00:33:39
remarkable what were some of those

00:33:35 --> 00:33:41
humbling events along the way in those

00:33:38 --> 00:33:44
arly days first couple ear

00:33:40 --> 00:33:48
days

00:33:43 --> 00:33:52
oh sorry um I remember one there's one

00:33:47 --> 00:33:53
route uh uh that we did that started I

00:33:51 --> 00:33:55
think it started in monw then went

00:33:52 --> 00:33:57
hrough pal Alto then went you know

00:33:54 --> 00:33:59
through the mountains to Highway 1 then

00:33:56 --> 00:34:02
took Highway one to to San Francisco and

00:33:59 --> 00:34:03
I think you know went around the city a

00:34:01 --> 00:34:06
little bit and like actually finished

00:34:02 --> 00:34:08
for lar street so like 2009 that is

00:34:05 --> 00:34:10
really complicated 100 miles from

00:34:07 --> 00:34:12
beginning to end right so human drivers

00:34:09 --> 00:34:14
would fail at that task I think so yeah

00:34:11 --> 00:34:16
yeah so uh you know we're doing it

00:34:13 --> 00:34:18
one day and then we're driving kind of

00:34:15 --> 00:34:19
made it through the mon palala Park

00:34:17 --> 00:34:21
we're driving through the mountains and

00:34:18 --> 00:34:24
it's foggy it's early morning and then

00:34:20 --> 00:34:27
we're like seeing objects and you know

00:34:23 --> 00:34:29
objects me like random stuff on the road

00:34:26 --> 00:34:31
in front of us there like a bucket and

00:34:28 --> 00:34:33
like a shoe and then there's like at

00:34:30 --> 00:34:35
some point we come across like a a you

00:34:32 --> 00:34:37
know a a rusty bicycle like okay what's

00:34:34 --> 00:34:39
going on there and make then we cat you

00:34:36 --> 00:34:42
eventually and the car you know doesn't

00:34:38 --> 00:34:43
you know uh you handles it okay maybe

00:34:41 --> 00:34:45
not super smoothly but you know we we

00:34:42 --> 00:34:47
didn't get stuck and we catch up to like

00:34:44 --> 00:34:49
this uh this dump truck that has all

00:34:46 --> 00:34:51
kind of stuff on it and just you know

00:34:48 --> 00:34:53
periodically losing things that present

00:34:50 --> 00:34:55
obstacles to the car like this is like a

00:34:52 --> 00:34:57
cartoon you know continuation of

00:34:54 --> 00:35:00
anomalies being thrown at you guys uh

00:34:56 --> 00:35:02
that's uh that's pretty cool um okay

00:34:59 --> 00:35:05
last question and I'm going to tee you

00:35:01 --> 00:35:08
p to do some recruiting probably but um

00:35:04 --> 00:35:12
if you were in the shoes of the audience

00:35:07 --> 00:35:14
here and just kind of seeking your first

00:35:11 --> 00:35:17
job um I'm going to take something that

00:35:13 --> 00:35:18
you said which is like I can see your

00:35:16 --> 00:35:21
passion and excitement for doing the

00:35:17 --> 00:35:23
startup thing right and like you know

00:35:20 --> 00:35:26
kind of longing back for those days is

00:35:22 --> 00:35:29
so cool um what advice would you have

00:35:26 --> 00:35:34
for these folks in where to go whether

00:35:29 --> 00:35:36
it's type of company type of role

00:35:33 --> 00:35:40
industry or anything

00:35:35 --> 00:35:43
else way more this is what I'm saying

00:35:39 --> 00:35:45
EAS just te you right up yeah yeah I you

00:35:42 --> 00:35:46
know i' say find a pro I mean we're

00:35:44 --> 00:35:48
talking about AI today but I say find a

00:35:45 --> 00:35:49
problem that matters you know problem

00:35:47 --> 00:35:53
that matters to the world problem that

00:35:48 --> 00:35:54
matters to you uh chances are it's going

00:35:52 --> 00:35:59
to be a hard

00:35:53 --> 00:36:01
one um you many things you know worth

00:35:58 --> 00:36:05
doing have that property so don't get

00:36:00 --> 00:36:09
discouraged by you know the unknown by

00:36:04 --> 00:36:11
what others might tell you and uh you

00:36:08 --> 00:36:13
know start building and then you know

00:36:10 --> 00:36:15
keep building and don't look back a huge

00:36:12 --> 00:36:18
congratulations on all the progress you

00:36:14 --> 00:36:21
guys have made and as a very happy

00:36:17 --> 00:36:23
customer thank you for building it um

00:36:20 --> 00:36:26
and we really appreciate you being here

00:36:22 --> 00:36:29
so let's hear for Dimitri

00:36:25 --> 00:36:29
[Applause]

00:36:35 --> 00:36:39
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
