---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "HKBhP9JISF0"
title: "Sterling Anderson, Co-Founder, Aurora - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=HKBhP9JISF0"
thumbnail_url: "https://i.ytimg.com/vi/HKBhP9JISF0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=HKBhP9JISF0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-03-14T14:26:08.000Z"
upload_date: "2018-03-14"
duration_seconds: 2238
duration_human: "37:18"
view_count: 36572
like_count: 516
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:18:46.993Z"
---

# Sterling Anderson, Co-Founder, Aurora - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=HKBhP9JISF0
- video_id: HKBhP9JISF0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-03-14T14:26:08.000Z
- upload_date: 2018-03-14
- duration: 37:18
- view_count: 36572
- like_count: 516
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018, computer vision, industry, aurora, tesla, autopilot, design, google, waymo, cmu
- categories: Science & Technology

## Description

This is a talk by Sterling Anderson for course 6.S094: Deep Learning for Self-Driving Cars (2018 version). Sterling is the Co-Founder of Aurora, previously head of the Tesla Autopilot team. This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

INFO:
Course website: https://selfdrivingcars.mit.edu
Contact: deepcars@mit.edu

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
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
today we have sterling Anderson he's the

00:00:02 --> 00:00:09
co-founder of Aurora an exciting new

00:00:05 --> 00:00:10
self-driving car company previously he

00:00:08 --> 00:00:13
was the head of the Tesla auto pilot

00:00:09 --> 00:00:15
eam that brought both the first the

00:00:12 --> 00:00:18
second generation auto pilot to life

00:00:14 --> 00:00:21
before that he did his PhD at MIT

00:00:17 --> 00:00:23
working on shared human machine control

00:00:20 --> 00:00:25
of ground vehicles the very thing I've

00:00:22 --> 00:00:29
been harping on over and over in this

00:00:24 --> 00:00:31
class and now he's back at MIT to talk

00:00:28 --> 00:00:35
with us please give him a warm welcome

00:00:30 --> 00:00:35
[Applause]

00:00:35 --> 00:00:40
thank you it's good to be here I was

00:00:38 --> 00:00:42
telling Lex just before I think it's

00:00:39 --> 00:00:44
been a little while since I've been back

00:00:41 --> 00:00:46
after the Institute and it's great to be

00:00:43 --> 00:00:49
here I want to apologize in advance I've

00:00:45 --> 00:00:52
just landed this afternoon from Korea

00:00:48 --> 00:00:55
via Germany where I've been spending the

00:00:51 --> 00:00:57
last week and so I may speak a little

00:00:54 --> 00:01:00
slower than normal please bear with me

00:00:56 --> 00:01:00
if I become incoherent or slurred my

00:00:59 --> 00:01:03
speech

00:00:59 --> 00:01:05
somebody flag at 2:00 and Lola will try

00:01:02 --> 00:01:07
to make corrections so tonight I thought

00:01:04 --> 00:01:09
I'd chat with you a little bit about my

00:01:06 --> 00:01:11
journey over the last decade it's been

00:01:08 --> 00:01:14
just over ten years since I was at MIT a

00:01:10 --> 00:01:15
lot has changed a lot has changed for

00:01:13 --> 00:01:19
the better in the self-driving community

00:01:14 --> 00:01:21
and I've been privileged to be a part of

00:01:18 --> 00:01:22
many of those changes and so I wanted to

00:01:20 --> 00:01:23
talk with you a little bit about some of

00:01:21 --> 00:01:25
the things that I've learned some of the

00:01:22 --> 00:01:29
things that I've experienced and then

00:01:24 --> 00:01:30
maybe end by talking about sort of where

00:01:28 --> 00:01:33
we go from here and and what the next

00:01:29 --> 00:01:35
steps are both for you know the industry

00:01:32 --> 00:01:37
at large but also for the company that

00:01:34 --> 00:01:41
we're building that as Lex mention is

00:01:36 --> 00:01:44
called Aurora to start out with and

00:01:40 --> 00:01:46
there are a few sort of key phases or

00:01:43 --> 00:01:49
transitions in my journey over the last

00:01:45 --> 00:01:53
10 years as Lex mentioned when I started

00:01:48 --> 00:01:55
MIT I worked with Carly on Yemma Amelio

00:01:52 --> 00:01:59
Fazoli's John Leonard a few others on

00:01:54 --> 00:02:02
some of these sort of shared adaptive

00:01:58 --> 00:02:04
automation approaches I'll talk a little

00:02:01 --> 00:02:06
bit about those

00:02:03 --> 00:02:10
from there I spent some time at Tesla

00:02:05 --> 00:02:12
where I first led the Model X program as

00:02:09 --> 00:02:15
we both finish the development and

00:02:11 --> 00:02:18
ultimately launched I took over the

00:02:14 --> 00:02:23
autopilot program where we introduced a

00:02:17 --> 00:02:25
number of new both active safety but

00:02:22 --> 00:02:28
also sort of you know enhanced

00:02:24 --> 00:02:30
convenience features from auto steer to

00:02:27 --> 00:02:32
adaptive cruise control that were able

00:02:29 --> 00:02:34
refine in a few unique ways and we'll

00:02:31 --> 00:02:36
talk a little bit about that and then

00:02:33 --> 00:02:39
from there in December of last year of

00:02:35 --> 00:02:41
2016 I guess now we started a new

00:02:38 --> 00:02:43
company called Aurora and I'll tell you

00:02:40 --> 00:02:48
a little bit about that so to start out

00:02:42 --> 00:02:49
with when I KN OIT was 2007 the DARPA

00:02:47 --> 00:02:52
urban challenge is were well underway at

00:02:48 --> 00:02:55
hat stage and one of the things that we

00:02:51 --> 00:02:57
wanted to do is find a way to address

00:02:54 --> 00:03:01
ome of these safety issues in human

00:02:56 --> 00:03:03
driving earlier than potentially full

00:03:00 --> 00:03:05
self-driving Qadeer and so we developed

00:03:02 --> 00:03:07
what became known as the intelligent

00:03:04 --> 00:03:10
co-pilot what you see here is a

00:03:06 --> 00:03:11
simulation of that operating I'll tell

00:03:09 --> 00:03:14
you a little bit more about that in just

00:03:10 --> 00:03:16
a second but to explain a little bit

00:03:13 --> 00:03:19
about the the methodology the innovation

00:03:15 --> 00:03:22
the key approach that we took that was

00:03:18 --> 00:03:23
lightly different from what in

00:03:21 --> 00:03:26
traditional planning control theory we

00:03:22 --> 00:03:29
re doing was instead of designing in

00:03:25 --> 00:03:33
path space for the robot we instead

00:03:28 --> 00:03:36
found a way to identify plan optimize

00:03:32 --> 00:03:39
and design a controller subject to a set

00:03:35 --> 00:03:40
of constraints rather than paths and so

00:03:38 --> 00:03:42
what we were doing is looking for Hama

00:03:39 --> 00:03:45
top Eastern environment so imagine for a

00:03:41 --> 00:03:47
moment an environment that's pockmarked

00:03:44 --> 00:03:51
by objects by their vehicles by

00:03:46 --> 00:03:53
pedestrians etc if you were to create

00:03:50 --> 00:03:56
the Voronoi diagram through that

00:03:52 --> 00:03:59
environment you would have a set of each

00:03:55 --> 00:04:01
unique set of paths or Hama top is

00:03:58 --> 00:04:03
continuously deformable paths that will

00:04:00 --> 00:04:05
take you from one one location to

00:04:03 --> 00:04:07
another through it

00:04:04 --> 00:04:09
if you then turn that into its dual

00:04:06 --> 00:04:11
which is the de'longhi triangulation of

00:04:08 --> 00:04:13
set environment presuming that you've

00:04:10 --> 00:04:15
got convex obstacles you can then tile

00:04:12 --> 00:04:18
those together rather trivially to

00:04:14 --> 00:04:21
create a set of homotopy sand

00:04:17 --> 00:04:24
transitions across which those paths can

00:04:20 --> 00:04:26
stake out sort of a given set of

00:04:23 --> 00:04:29
options for the human eye turns out

00:04:25 --> 00:04:32
humans tend to this tends to be a more

00:04:28 --> 00:04:34
intuitive way of imposing certain

00:04:31 --> 00:04:38
constraints on human operation rather

00:04:33 --> 00:04:41
than enforcing that the ego vehicle

00:04:37 --> 00:04:43
stick to some arbitrary position within

00:04:40 --> 00:04:47
you know some distance of a safe path

00:04:42 --> 00:04:49
you instead look to enforce only that

00:04:46 --> 00:04:51
he that the state of the vehicle remain

00:04:48 --> 00:04:53
within a constraint bounded and

00:04:50 --> 00:04:55
imensional tube in state space those

00:04:52 --> 00:04:58
constraints being spatial imagine for a

00:04:54 --> 00:05:00
moment edges of the roadway or you know

00:04:57 --> 00:05:04
circumventing various objects in the

00:04:59 --> 00:05:08
roadway imagine them also being dynamic

00:05:03 --> 00:05:11
right so limits of tire tire friction

00:05:07 --> 00:05:14
imposed limits on side slip angles and

00:05:10 --> 00:05:15
so using that what we did is found a way

00:05:13 --> 00:05:18
to create those Hammurabi's forwards

00:05:14 --> 00:05:21
imulate the trajectory of the vehicle

00:05:17 --> 00:05:24
given its current state and some optimal

00:05:20 --> 00:05:26
set of controls inputs that would

00:05:23 --> 00:05:28
optimize its stability through that we

00:05:25 --> 00:05:31
use model creative control in that work

00:05:27 --> 00:05:35
and then taking that forward simulated

00:05:30 --> 00:05:37
trajectory computing some metric of

00:05:34 --> 00:05:41
threat for instance if the objective

00:05:36 --> 00:05:43
function for that minimize the or

00:05:40 --> 00:05:45
maximize stability or minimize some some

00:05:42 --> 00:05:48
of these parameters like wheel side slip

00:05:44 --> 00:05:51
then wheel side slip is a fairly good

00:05:47 --> 00:05:54
indication of how threatening that

00:05:50 --> 00:05:56
optimal maneuver is becoming and so what

00:05:53 --> 00:05:58
we did is then use that in a modulation

00:05:55 --> 00:06:01
of control between the human and the car

00:05:57 --> 00:06:03
such that should the car ever find

00:06:00 --> 00:06:05
itself in a state where that forward

00:06:02 --> 00:06:07
simulated optimal trajectory is very

00:06:04 --> 00:06:09
near the limits of what the vehicle and

00:06:06 --> 00:06:11
it can actually handle we will have

00:06:08 --> 00:06:13
transition control fully to the to the

00:06:11 --> 00:06:15
vehicle to the automated system so that

00:06:12 --> 00:06:16
it can avoid an accident

00:06:14 --> 00:06:18
and then it transitions back in some

00:06:15 --> 00:06:22
manner and we played with a number of

00:06:17 --> 00:06:26
different methods of transitioning this

00:06:21 --> 00:06:28
control to ensure that that we didn't

00:06:25 --> 00:06:30
hrow off the human mental model which

00:06:27 --> 00:06:32
was which was one of the key concerns we

00:06:29 --> 00:06:35
also wanted to make sure that we were

00:06:31 --> 00:06:37
able to arrest accidents before they

00:06:34 --> 00:06:42
happen what you see here is a simulation

00:06:36 --> 00:06:44
that was fairly faithful to the behavior

00:06:41 --> 00:06:47
we saw in test drivers up at Dearborn in

00:06:43 --> 00:06:49
Dearborn Michigan Ford provided was

00:06:46 --> 00:06:52
provided us with a Jaguar s-type to test

00:06:48 --> 00:06:53
his on and what we did so what you see

00:06:51 --> 00:06:56
here is there's a blue vehicle in the

00:06:52 --> 00:06:59
gray vehicle both in both cases we have

00:06:55 --> 00:07:01
a poorly tuned driver model in this case

00:06:58 --> 00:07:03
if your pursuit controller with a fairly

00:07:00 --> 00:07:06
short look ahead shorter than would be

00:07:02 --> 00:07:10
appropriate given this scenario in these

00:07:05 --> 00:07:12
dynamics the grey vehicle is without the

00:07:09 --> 00:07:14
intelligent copilot in the loop

00:07:11 --> 00:07:17
you'll notice that obviously the driver

00:07:14 --> 00:07:19
becomes unstable loses control and

00:07:16 --> 00:07:23
leaves the safe roadway the co-pilot

00:07:18 --> 00:07:25
remember is in is interested not in

00:07:22 --> 00:07:28
following any given path it doesn't care

00:07:24 --> 00:07:32
where the vehicle lands on this road why

00:07:27 --> 00:07:34
provided it remains inside the road in

00:07:31 --> 00:07:37
the blue vehicles case it's the exact

00:07:33 --> 00:07:39
same human driver model now with the

00:07:36 --> 00:07:43
copilot in the loop you'll notice that

00:07:38 --> 00:07:45
as as this scenario continues what you

00:07:42 --> 00:07:48
see here on the left is the green is in

00:07:44 --> 00:07:49
this green bar is the portion of

00:07:47 --> 00:07:51
available control authorities being

00:07:48 --> 00:07:52
taken by the automated system you'll

00:07:50 --> 00:07:54
notice that it never exceeds half of the

00:07:51 --> 00:07:56
available control which is to say that

00:07:53 --> 00:07:59
he steering inputs received by the

00:07:55 --> 00:08:01
vehicle end up being a blend of what the

00:07:58 --> 00:08:06
human and what the automation are

00:08:00 --> 00:08:09
providing and what what results is a

00:08:05 --> 00:08:11
path for the blue vehicle that actually

00:08:08 --> 00:08:14
better tracks the humans intended

00:08:10 --> 00:08:17
trajectory then even the copilot

00:08:13 --> 00:08:18
understood right again the copilot is

00:08:16 --> 00:08:21
keeping the vehicle stable it's keeping

00:08:17 --> 00:08:24
it on the road the human is healing to

00:08:20 --> 00:08:25
the centerline of that roadway so there

00:08:23 --> 00:08:27
was some very interesting things that

00:08:24 --> 00:08:28
came out of this there were a lot of we

00:08:26 --> 00:08:30
did a lot of

00:08:27 --> 00:08:32
work in understanding what kind of

00:08:29 --> 00:08:35
eedback was most natural to provide to

00:08:31 --> 00:08:36
a human our biggest concern was if you

00:08:34 --> 00:08:39
throw off a human's mental model by

00:08:35 --> 00:08:42
causing the vehicles at behaviors to

00:08:38 --> 00:08:43
deviate from what they expect it to do

00:08:41 --> 00:08:45
in response to British control inputs

00:08:42 --> 00:08:47
that could be a problem so we tried

00:08:44 --> 00:08:48
various things from you know adjusting

00:08:46 --> 00:08:52
for instance one of the one of the key

00:08:47 --> 00:08:55
questions that we had early on was if we

00:08:51 --> 00:08:58
couple the computer control and the

00:08:54 --> 00:09:02
human control via planetary gear and

00:08:57 --> 00:09:03
allow the human to feel a actually a

00:09:01 --> 00:09:05
backwards torque to what the vehicle is

00:09:02 --> 00:09:08
doing so the car starts to turn right

00:09:04 --> 00:09:09
human will feel the wheel turn left

00:09:07 --> 00:09:11
hey'll see it start to turn left

00:09:08 --> 00:09:13
is that more confusing or less confusing

00:09:10 --> 00:09:15
they're human and it turns out it

00:09:12 --> 00:09:18
depends on how experienced a human is

00:09:14 --> 00:09:20
ome some drivers will modulate their

00:09:17 --> 00:09:21
input space on the torque feedback that

00:09:19 --> 00:09:22
hey feel through the wheel and it for

00:09:20 --> 00:09:25
instance a very experienced driver

00:09:21 --> 00:09:28
expects to feel the wheel pull left when

00:09:24 --> 00:09:30
they're turning right however less

00:09:27 --> 00:09:32
experienced drivers in response to

00:09:29 --> 00:09:33
seeing the wheel turning opposite to

00:09:31 --> 00:09:35
what the what the car supposed to be

00:09:32 --> 00:09:37
doing this for a rather confusing

00:09:34 --> 00:09:40
experience so there were a lot of really

00:09:36 --> 00:09:45
interesting human interface challenges

00:09:39 --> 00:09:46
that we were dealing with here we ended

00:09:44 --> 00:09:52
up working through a lot of that

00:09:45 --> 00:09:55
developing a number of sort of micro

00:09:51 --> 00:09:57
applications for it one of those at the

00:09:54 --> 00:09:59
time Gill Pratt was leading a DARPA

00:09:56 --> 00:10:03
program focused on what they call the

00:09:58 --> 00:10:06
time maximal mobility manipulation we

00:10:02 --> 00:10:09
decided to see what this system could do

00:10:05 --> 00:10:11
in application to unmanned ground

00:10:08 --> 00:10:14
vehicles so in this case what you see is

00:10:10 --> 00:10:17
a human driver sitting at a remote

00:10:13 --> 00:10:20
console as one would when operating an

00:10:16 --> 00:10:23
unmanned vehicle for instance in the

00:10:19 --> 00:10:27
military what you see on the left top

00:10:22 --> 00:10:29
left is the top-down view of what the

00:10:26 --> 00:10:32
vehicle sees I should have played this

00:10:28 --> 00:10:34
in repeat mode with bounding boxes

00:10:31 --> 00:10:37
bounding various cones and what we did

00:10:33 --> 00:10:41
is we set up about 20 drivers 2020 test

00:10:36 --> 00:10:43
subjects looking at this this

00:10:40 --> 00:10:46
troll screen and operating the vehicle

00:10:42 --> 00:10:50
through this track and we set this up as

00:10:45 --> 00:10:54
a race with prizes for the winners as

00:10:49 --> 00:10:56
one would expect and penalize them for

00:10:53 --> 00:10:57
every barrel they hit if they knocked

00:10:55 --> 00:10:59
over the barrel I think they got a

00:10:56 --> 00:11:00
five-second penalty if they brushed a

00:10:58 --> 00:11:03
barrel they got a one-second penalty and

00:10:59 --> 00:11:04
they were to cross they work across the

00:11:02 --> 00:11:05
field as fast as possible they couldn't

00:11:03 --> 00:11:07
hey had no line-of-sight connection the

00:11:04 --> 00:11:09
vehicle and we played with some things

00:11:06 --> 00:11:11
on their interface we did you know we

00:11:08 --> 00:11:14
caused it to drop out occasionally we

00:11:10 --> 00:11:16
delayed it as one would realistically

00:11:13 --> 00:11:20
expect in the field and then we either

00:11:15 --> 00:11:21
engaged or didn't engage the copilot to

00:11:19 --> 00:11:22
try to understand what effect that had

00:11:20 --> 00:11:24
on their performance and their

00:11:21 --> 00:11:27
experience and what we found was not

00:11:23 --> 00:11:29
surprisingly the incidence of collisions

00:11:26 --> 00:11:31
declined it climbed by about 72% when

00:11:28 --> 00:11:36
the copilot was engaged versus when it

00:11:30 --> 00:11:37
was not we also found that you know even

00:11:35 --> 00:11:40
with that seventy-two percent decline in

00:11:36 --> 00:11:42
collisions the speed increased by I'm

00:11:39 --> 00:11:46
blanking on the the amount but it was

00:11:41 --> 00:11:48
you know 20 to 30 percentage finally in

00:11:45 --> 00:11:51
perhaps the most interesting to me after

00:11:47 --> 00:11:53
every run I would ask the driver and

00:11:50 --> 00:11:54
again these were blind tests they didn't

00:11:52 --> 00:11:56
know if the copilot was active or not

00:11:53 --> 00:11:58
and I would ask them how much control

00:11:55 --> 00:12:01
did you feel like you had over the

00:11:57 --> 00:12:03
vehicle and I found that there was a

00:12:00 --> 00:12:05
statistically significant increase of

00:12:02 --> 00:12:08
about 12% when the copilot was engaged

00:12:04 --> 00:12:10
in that is to say drivers reported

00:12:07 --> 00:12:12
feeling more control of the vehicle 12%

00:12:09 --> 00:12:14
more of the time when the copilot was

00:12:11 --> 00:12:16
engaged and when it wasn't and then

00:12:13 --> 00:12:18
oticed the statistics it turns out they

00:12:15 --> 00:12:21
actually at the average level of control

00:12:17 --> 00:12:23
the the copilot was taking was 43% so

00:12:20 --> 00:12:25
they were reporting that they felt more

00:12:22 --> 00:12:28
in control when in fact there were 43

00:12:24 --> 00:12:31
percent less in control which was which

00:12:27 --> 00:12:34
was interesting and I think a bears a

00:12:30 --> 00:12:37
little bit on sort of the human psyche

00:12:33 --> 00:12:38
in terms of you know they were reporting

00:12:36 --> 00:12:40
the vehicle was doing what I wanted to

00:12:37 --> 00:12:43
do maybe not what I told it to do which

00:12:39 --> 00:12:46
was which was kind of fun observation

00:12:42 --> 00:12:48
and and fun too I think I think the most

00:12:45 --> 00:12:49
enjoyable part of this was getting

00:12:47 --> 00:12:51
together with the with the whole group

00:12:48 --> 00:12:53
at the end of the study and presenting

00:12:50 --> 00:12:54
some of this and seeing some of the

00:12:52 --> 00:12:58
reaction

00:12:53 --> 00:13:04
so from there you know we looked at a

00:12:57 --> 00:13:05
few other areas my Carl um and I looked

00:13:03 --> 00:13:07
at a few different opportunities to

00:13:04 --> 00:13:09
commercialize this again this was years

00:13:06 --> 00:13:11
ago and the industry was in a very

00:13:08 --> 00:13:13
different place than it is today we

00:13:10 --> 00:13:16
started a company first called gimlet

00:13:12 --> 00:13:18
hen another called ride this is the

00:13:15 --> 00:13:22
logo it may look familiar to you we

00:13:17 --> 00:13:27
turned that into we at the time it

00:13:21 --> 00:13:30
intended to roll this out across various

00:13:26 --> 00:13:34
automakers in their operations at the

00:13:29 --> 00:13:36
time very few saw self-driving as a

00:13:33 --> 00:13:40
technology was really gonna impact their

00:13:35 --> 00:13:43
business going forward they were in fact

00:13:39 --> 00:13:46
even even ride-sharing at the time was a

00:13:42 --> 00:13:51
fairly new concept that was I think to a

00:13:45 --> 00:13:55
large degree viewed as unproven so as I

00:13:50 --> 00:13:55
mentioned December of last year i

00:13:55 --> 00:14:03
co-founded aurora with a couple of folks

00:13:59 --> 00:14:04
who have been making significant

00:14:02 --> 00:14:07
progress in this space for many years at

00:14:03 --> 00:14:09
Chris Urmson who formerly led Google's

00:14:06 --> 00:14:10
elf-driving car group at drew back now

00:14:08 --> 00:14:13
as a professor at Carnegie Mellon

00:14:09 --> 00:14:16
University exceptional machine learning

00:14:12 --> 00:14:17
in apply machine learning was one of the

00:14:15 --> 00:14:19
founding members of Ober self-driving

00:14:16 --> 00:14:22
car team and led autonomy and perception

00:14:18 --> 00:14:24
there we felt like we had a unique

00:14:21 --> 00:14:28
opportunity at the convergence of a few

00:14:23 --> 00:14:31
things one the automotive world has

00:14:27 --> 00:14:33
really come into the full-on realization

00:14:30 --> 00:14:34
that self-driving and particularly

00:14:32 --> 00:14:36
self-driving and ride-sharing and

00:14:33 --> 00:14:38
vehicle electrification are three

00:14:35 --> 00:14:41
vectors that will change the industry

00:14:37 --> 00:14:45
that was something that didn't exist ten

00:14:40 --> 00:14:48
years ago two significant advances have

00:14:44 --> 00:14:49
been made in you know some of these

00:14:47 --> 00:14:52
machine learning techniques in

00:14:48 --> 00:14:55
particular deep learning and other

00:14:51 --> 00:14:57
neural network network approaches in the

00:14:54 --> 00:15:01
computers that run them and the

00:14:56 --> 00:15:04
availability of you know low-power GPU

00:15:00 --> 00:15:07
and TPU options to really do that well

00:15:03 --> 00:15:09
in sensing technologies

00:15:06 --> 00:15:11
in high-resolution radar and a lot of

00:15:08 --> 00:15:13
the light our development so it's really

00:15:10 --> 00:15:14
a unique time in the self-driving world

00:15:12 --> 00:15:17
a lot of these things are really coming

00:15:13 --> 00:15:19
together now and we felt like by

00:15:16 --> 00:15:21
bringing together an experienced team we

00:15:18 --> 00:15:26
had an interesting opportunity to build

00:15:20 --> 00:15:29
from a clean sheet a new platform a new

00:15:25 --> 00:15:30
self-driving architecture that leverage

00:15:28 --> 00:15:34
the latest advances in most Reichman fly

00:15:29 --> 00:15:37
machine learning together with our

00:15:33 --> 00:15:38
experience of where

00:15:36 --> 00:15:40
some of the pitfalls tend to be down the

00:15:37 --> 00:15:41
road as you develop these systems

00:15:39 --> 00:15:43
because you don't tend to see them early

00:15:40 --> 00:15:45
on they tend to express themselves as

00:15:42 --> 00:15:47
you get into the long tail of corner

00:15:44 --> 00:15:51
cases that you end up needing to resolve

00:15:46 --> 00:15:53
so we've built that team we have offices

00:15:50 --> 00:15:54
in Palo Alto California and Pittsburgh

00:15:52 --> 00:15:56
Pennsylvania

00:15:53 --> 00:15:58
we've got fleets of vehicles operating

00:15:55 --> 00:16:01
in both pallet on Pennsylvania a couple

00:15:57 --> 00:16:03
of weeks ago we announced that

00:16:00 --> 00:16:03
Volkswagen Group one of the largest

00:16:02 --> 00:16:05
automakers in the world

00:16:02 --> 00:16:08
Ondine Motor Company also one of the

00:16:05 --> 00:16:10
largest automakers in the world have

00:16:07 --> 00:16:12
both partnered with Aurora we will be

00:16:09 --> 00:16:15
developing and are developing with them

00:16:11 --> 00:16:19
a set of platforms and ultimately will

00:16:14 --> 00:16:20
scale that our technology on their

00:16:18 --> 00:16:23
vehicles across the world and one of the

00:16:19 --> 00:16:26
important the important elements of

00:16:22 --> 00:16:28
building Lexus is Lex before coming out

00:16:25 --> 00:16:29
here what this group would be most

00:16:27 --> 00:16:31
interested in hearing one of the things

00:16:28 --> 00:16:32
that he mentioned was what does it take

00:16:30 --> 00:16:35
to build a self-driving you know build a

00:16:31 --> 00:16:37
new company in a space like this one of

00:16:34 --> 00:16:39
the things that we found very important

00:16:36 --> 00:16:43
was a business model that was

00:16:38 --> 00:16:45
non-threatening to others we recognized

00:16:42 --> 00:16:47
that our strengths and our experience

00:16:44 --> 00:16:51
over the last in my case a decade in

00:16:47 --> 00:16:53
Chris's case almost two really lies in

00:16:50 --> 00:16:56
the development of the self-driving

00:16:52 --> 00:16:58
systems not in building vehicles that I

00:16:55 --> 00:17:00
have had some experience there but but

00:16:57 --> 00:17:03
in developing the self-driving so our

00:16:59 --> 00:17:05
feeling was if our mission is to get

00:17:02 --> 00:17:08
a technology to market as quickly as

00:17:04 --> 00:17:10
broadly as safely as possible that

00:17:07 --> 00:17:12
mission is best served by playing our

00:17:09 --> 00:17:15
position and working well with others

00:17:11 --> 00:17:17
who can play theirs which is why you see

00:17:14 --> 00:17:19
the model that we've adopted and is now

00:17:16 --> 00:17:20
you'll start to see some of the fruits

00:17:18 --> 00:17:21
of that it through the

00:17:19 --> 00:17:23
partnerships with some of these

00:17:20 --> 00:17:26
automakers so the end of the day our

00:17:22 --> 00:17:29
aspiration in our hope is that this

00:17:25 --> 00:17:31
technology that that is so important the

00:17:28 --> 00:17:34
world in increasing safety in improving

00:17:30 --> 00:17:35
access to transportation in improving

00:17:33 --> 00:17:39
efficiency in the utilization of our

00:17:34 --> 00:17:40
oadways in our cities I mean I this is

00:17:38 --> 00:17:42
maybe the first stock I've ever given

00:17:39 --> 00:17:44
where I didn't start by rattling off

00:17:41 --> 00:17:46
statistics about safety and all the

00:17:43 --> 00:17:46
se other things if you haven't heard

00:17:45 --> 00:17:48
them yet

00:17:45 --> 00:17:51
you should look them up there they're

00:17:47 --> 00:17:54
stark right the fact that most vehicles

00:17:50 --> 00:17:56
in the United States today have an

00:17:53 --> 00:17:59
average on average three parking space

00:17:55 --> 00:18:02
as space is allocated to them the amount

00:17:58 --> 00:18:05
of land that's taken up across the world

00:18:01 --> 00:18:10
in housing vehicles that are used less

00:18:04 --> 00:18:11
than 5% of the time the number of people

00:18:09 --> 00:18:13
I think in the United States the

00:18:10 --> 00:18:16
stimate has spent somewhere between 6

00:18:12 --> 00:18:17
and 15 million people don't have access

00:18:15 --> 00:18:19
to the transportation they need either

00:18:16 --> 00:18:21
the because they're elderly or disabled

00:18:18 --> 00:18:25
or you know one of many other factors

00:18:20 --> 00:18:27
and so this technology is potentially

00:18:24 --> 00:18:30
one of the most impactful for our

00:18:26 --> 00:18:31
society in the coming years it's a

00:18:29 --> 00:18:34
tremendously exciting technological

00:18:30 --> 00:18:36
challenge and you know the confluence of

00:18:33 --> 00:18:39
those two things I think is a really

00:18:35 --> 00:18:41
unique opportunity for engineers and

00:18:38 --> 00:18:43
others who are not engineers who really

00:18:40 --> 00:18:45
want to get involved to play a role in

00:18:42 --> 00:18:48
changing our changing our world going

00:18:44 --> 00:18:50
forward so with that maybe I'll maybe

00:18:47 --> 00:18:52
I'll stop with this and we can go to go

00:18:49 --> 00:18:52
to questions

00:18:54 --> 00:19:03
I am Wayne - hello thanks for coming um

00:18:59 --> 00:19:05
I'm a question a lot of self-driving car

00:19:02 --> 00:19:07
companies are making extensive use of

00:19:04 --> 00:19:09
lidar but you don't see a lot of that

00:19:06 --> 00:19:11
with Tesla wanted to know if you had any

00:19:08 --> 00:19:13
thoughts about that yeah I don't want to

00:19:10 --> 00:19:16
talk about Tesla too much in terms of

00:19:12 --> 00:19:17
our specific any anything that wasn't

00:19:15 --> 00:19:21
public information I'm not going to get

00:19:16 --> 00:19:22
into you I will say that for Aurora we

00:19:20 --> 00:19:24
believe that the right approach is

00:19:21 --> 00:19:27
getting the market quickly and you get

00:19:23 --> 00:19:28
o market and doing so safely and you

00:19:26 --> 00:19:30
get to market most quickly and safely if

00:19:27 --> 00:19:33
you leverage multiple modalities

00:19:29 --> 00:19:35
including layer these are the

00:19:32 --> 00:19:36
just to clarify what's running the

00:19:34 --> 00:19:40
background these are all just aurora

00:19:35 --> 00:19:42
videos of our cars driving on various

00:19:39 --> 00:19:44
test routes yeah hi I'm Luke ramzan from

00:19:41 --> 00:19:46
the stone school a lot of so a lot of

00:19:43 --> 00:19:48
customers have visceral type connections

00:19:45 --> 00:19:50
to their automobile I was wondering how

00:19:47 --> 00:19:52
you see that market the car enthusiast

00:19:49 --> 00:19:55
market being affected by AVS and then

00:19:51 --> 00:19:56
vice versa how the how the AVS will be

00:19:54 --> 00:19:58
designed around those type of oh yeah

00:19:55 --> 00:19:59
customers yeah it's a good question

00:19:57 --> 00:20:05
thanks for asking but I am one of those

00:19:58 --> 00:20:09
nthusiasts I very much appreciate being

00:20:04 --> 00:20:11
able to drive a car in certain settings

00:20:08 --> 00:20:14
I very much don't appreciate driving in

00:20:10 --> 00:20:18
others right I remember distinctly

00:20:13 --> 00:20:20
several evenings I almost literally

00:20:17 --> 00:20:24
pounding my steering wheel sitting in

00:20:19 --> 00:20:27
Quogue in in Boston traffic you know on

00:20:23 --> 00:20:30
my way to somewhere I do the same in San

00:20:26 --> 00:20:32
Francisco I think the opportunity really

00:20:29 --> 00:20:35
is to turn that it turned sort of

00:20:31 --> 00:20:37
personal vehicle ownership and driving

00:20:34 --> 00:20:42
into more of a sport and something you

00:20:36 --> 00:20:47
do for leisure I see it a gentleman

00:20:41 --> 00:20:51
some time ago asked me to talk hey don't

00:20:46 --> 00:20:53
you think this is a problem for the

00:20:50 --> 00:20:56
country I think you meant the world if

00:20:52 --> 00:20:57
people don't learn how to drive that's

00:20:55 --> 00:21:01
just something a human should know how

00:20:56 --> 00:21:04
to do my perspective is it's as much of

00:21:00 --> 00:21:06
a problem as people not intrinsically

00:21:03 --> 00:21:07
knowing how to ride a horse today if you

00:21:05 --> 00:21:09
want to know how to ride a horse go ride

00:21:06 --> 00:21:12
a horse if you want to you want to race

00:21:08 --> 00:21:13
a car go to a racetrack or go out to you

00:21:11 --> 00:21:16
know a mountain road that's been

00:21:12 --> 00:21:17
allocated for it ultimately I think I

00:21:15 --> 00:21:19
think there is an important place for

00:21:16 --> 00:21:21
that because I certainly agree with you

00:21:18 --> 00:21:25
I'm very much a vehicle enthusiast

00:21:20 --> 00:21:28
myself but I think there is so much

00:21:24 --> 00:21:30
opportunity here in alleviating some of

00:21:27 --> 00:21:32
these other problems particularly in

00:21:29 --> 00:21:37
places where it's not fun to drive that

00:21:31 --> 00:21:37
I think there's a place for both yeah

00:21:39 --> 00:21:44
yeah

00:21:41 --> 00:21:47
congratulations on the partnership that

00:21:43 --> 00:21:50
was announced recently I think so I have

00:21:46 --> 00:21:52
a two-part question the first one is so

00:21:49 --> 00:21:54
we heard last week from I think there

00:21:51 --> 00:21:55
was a gentleman from talking about

00:21:53 --> 00:21:59
how long they have been working on this

00:21:54 --> 00:22:03
autonomous car technology and you simply

00:21:58 --> 00:22:05
have rammed up extremely fast so is

00:22:02 --> 00:22:06
there a licensing model that you have

00:22:04 --> 00:22:10
taken that I mean how are you able to

00:22:05 --> 00:22:13
commercialize the technology in one year

00:22:09 --> 00:22:16
so just to be clear we're not actually

00:22:12 --> 00:22:19
commercializing we're just to

00:22:15 --> 00:22:21
distinguish we are partnering and

00:22:18 --> 00:22:23
eveloping vehicles and Walter may be

00:22:20 --> 00:22:26
running pilots as we announced you know

00:22:22 --> 00:22:29
e could to ago with the Moya shuttles

00:22:25 --> 00:22:31
we are however I will distinguish that

00:22:28 --> 00:22:33
from broad commercialization of the

00:22:30 --> 00:22:37
technology and I don't want to get too

00:22:32 --> 00:22:40
much into you know the nuances of that

00:22:36 --> 00:22:42
business model I will say that it is is

00:22:39 --> 00:22:45
one that's done in very close

00:22:41 --> 00:22:47
partnership with our automotive partners

00:22:44 --> 00:22:49
because you know they at the end of the

00:22:46 --> 00:22:50
day they understand their cars they

00:22:48 --> 00:22:54
understand their customers they have

00:22:49 --> 00:22:56
distribution networks they are you know

00:22:53 --> 00:22:58
our automotive partners are fairly well

00:22:55 --> 00:23:00
positioned it provided they have the

00:22:57 --> 00:23:01
right support in developing a

00:22:59 --> 00:23:04
self-driving technology the fairly

00:23:00 --> 00:23:07
well positioned to you know roll

00:23:03 --> 00:23:09
it out of the scale so the second part

00:23:06 --> 00:23:11
of my question is again looking at this

00:23:08 --> 00:23:14
you know pace of adoption and the

00:23:10 --> 00:23:16
maturity of technology do you see like

00:23:13 --> 00:23:19
an open source model for autonomous you

00:23:15 --> 00:23:24
know cars as they become more and more

00:23:18 --> 00:23:27
unclear I am not convinced that an open

00:23:23 --> 00:23:33
source model is what gets to market most

00:23:26 --> 00:23:36
quickly in the long run it's not clear

00:23:32 --> 00:23:38
to me what will happen I think there

00:23:35 --> 00:23:41
will be a handful of successful

00:23:37 --> 00:23:44
self-driving stacks that will make it

00:23:40 --> 00:23:49
nowhere near the number of self-driving

00:23:43 --> 00:23:49
companies today but a handful I think

00:23:50 --> 00:23:56
two questions one is in invariably a new

00:23:53 --> 00:23:58
product development there's typically

00:23:55 --> 00:24:00
two types of bottlenecks there's a

00:23:57 --> 00:24:03
technological bottleneck and an economic

00:23:59 --> 00:24:05
bottleneck right so technological

00:24:02 --> 00:24:07
bottleneck might be a you know the

00:24:04 --> 00:24:08
sensors aren't good enough or the

00:24:06 --> 00:24:10
machine learning algorithms aren't good

00:24:07 --> 00:24:12
enough and so on I'd be interested to

00:24:09 --> 00:24:14
hear and it'll shift obviously over time

00:24:11 --> 00:24:16
so I'd be interested to know what you

00:24:13 --> 00:24:18
would say is the current thing that if

00:24:15 --> 00:24:20
hey yeah if this part of the of the

00:24:17 --> 00:24:22
architecture was ten times better we

00:24:19 --> 00:24:24
would and that on the economic side I'd

00:24:21 --> 00:24:27
be interested to know you know gee if if

00:24:23 --> 00:24:28
sensors were 100 times cheaper then so

00:24:26 --> 00:24:30
it'd be interested to hear your

00:24:27 --> 00:24:33
perspective on that's a great question

00:24:29 --> 00:24:35
let me start with the economic side of

00:24:32 --> 00:24:39
it and just to get that at the wake is a

00:24:34 --> 00:24:41
little bit quicker answer the economics

00:24:38 --> 00:24:46
of operating a self-driving vehicle and

00:24:40 --> 00:24:48
a shared network today would close that

00:24:45 --> 00:24:51
business case closes even with high

00:24:47 --> 00:24:53
costs of sensors that is not that is not

00:24:50 --> 00:24:56
what's stopping us and that's part of

00:24:52 --> 00:24:59
why the the gentleman earlier who asked

00:24:55 --> 00:25:02
you know should use lighter or not if

00:24:58 --> 00:25:05
your target is to initially deploy these

00:25:01 --> 00:25:07
in fleets you would be wise to start at

00:25:04 --> 00:25:09
he top end of the market develop and

00:25:06 --> 00:25:12
eploy a system that's as capable as

00:25:08 --> 00:25:14
possible as quickly as possible and then

00:25:11 --> 00:25:16
costs it down over time and you can do

00:25:13 --> 00:25:18
that as computer vision and precision

00:25:15 --> 00:25:22
recall increase today they're not good

00:25:17 --> 00:25:24
enough right and so so economically

00:25:21 --> 00:25:26
depending on your model of going to

00:25:23 --> 00:25:29
market and we believe that the right

00:25:25 --> 00:25:29
model is through

00:25:30 --> 00:25:38
mobility services you can cost out your

00:25:35 --> 00:25:40
cost down the center inevitably you know

00:25:37 --> 00:25:41
there's no unobtainium in light our

00:25:39 --> 00:25:43
units today

00:25:40 --> 00:25:44
there's no reason fundamentally that he

00:25:42 --> 00:25:45
should conserve a light our unit will

00:25:43 --> 00:25:48
ead you to a seventy thousand dollar

00:25:44 --> 00:25:50
price point right however if you build

00:25:47 --> 00:25:51
anything in low enough volumes is going

00:25:49 --> 00:25:53
to be expensive

00:25:50 --> 00:25:55
many of these things will work their way

00:25:52 --> 00:25:57
into the standard automotive process

00:25:54 --> 00:25:59
they'll work their way into Tier one

00:25:56 --> 00:26:01
suppliers and when they do the

00:25:58 --> 00:26:03
automotive community has shown

00:26:00 --> 00:26:04
themselves to be exceptional at driving

00:26:02 --> 00:26:07
those costs down and so I expect them to

00:26:03 --> 00:26:09
come way down to your other question

00:26:06 --> 00:26:11
technological bottlenecks and challenges

00:26:08 --> 00:26:15
one of the key challenges of

00:26:10 --> 00:26:19
self-driving rima is and remains that of

00:26:14 --> 00:26:22
orecasting the intent and B and future

00:26:18 --> 00:26:23
behaviors of other actors both in

00:26:21 --> 00:26:26
response to one another but also in

00:26:22 --> 00:26:29
response to your own decisions in motion

00:26:25 --> 00:26:31
that's a perception problem but it's

00:26:28 --> 00:26:35
omething more than a perception problem

00:26:30 --> 00:26:36
it's also a you know prediction and you

00:26:34 --> 00:26:38
know there there are a number of

00:26:35 --> 00:26:40
different things that come together to

00:26:37 --> 00:26:44
have that have to come together to solve

00:26:39 --> 00:26:45
this we're excited about some of the

00:26:43 --> 00:26:48
tools that we're using and interleaving

00:26:44 --> 00:26:51
various of modern machine learning

00:26:47 --> 00:26:54
techniques throughout the system to do

00:26:50 --> 00:26:56
things like project our own behaviors

00:26:53 --> 00:26:57
that were learned for the ego vehicle on

00:26:55 --> 00:26:59
others and assume that they'll behave as

00:26:56 --> 00:27:01
we would had we been in that situation

00:26:58 --> 00:27:05
like an expert system kind of approach

00:27:00 --> 00:27:06
yeah yeah you you assume nominal

00:27:04 --> 00:27:09
behavior and you guard against off

00:27:05 --> 00:27:12
nominal right but it's it's very much

00:27:08 --> 00:27:14
it's not a solved problem I wouldn't say

00:27:11 --> 00:27:18
it's it's very much as you get into that

00:27:13 --> 00:27:20
really long tail of development when

00:27:17 --> 00:27:22
you're no longer you know putting out

00:27:19 --> 00:27:23
demonstration videos but you're instead

00:27:21 --> 00:27:26
just putting your head down and eking

00:27:22 --> 00:27:28
out those you know fine on lines that's

00:27:25 --> 00:27:34
the kind of problem you tend to deal

00:27:27 --> 00:27:36
with again so this question isn't

00:27:33 --> 00:27:38
necessarily about the development of

00:27:35 --> 00:27:40
self-driving cars but more like an

00:27:37 --> 00:27:42
ethics question when you're putting

00:27:39 --> 00:27:44
human lives into like the hands of

00:27:41 --> 00:27:45
software isn't there always the

00:27:43 --> 00:27:47
possibility

00:27:44 --> 00:27:50
for like outside agents with malicious

00:27:46 --> 00:27:53
intent to use it for their own gain and

00:27:49 --> 00:27:55
how do you guys if you do have a plan

00:27:52 --> 00:28:02
how do you intend to protect against

00:27:54 --> 00:28:02
yeah so security is a very real

00:28:03 --> 00:28:09
aspect

00:28:04 --> 00:28:11
so we saw it's a constant game of cat

00:28:08 --> 00:28:14
and mouse and so I think it just

00:28:10 --> 00:28:15
requires a very good

00:28:13 --> 00:28:18
you know team and a concerted effort

00:28:14 --> 00:28:20
over time I I don't think I don't think

00:28:17 --> 00:28:23
you solve at once and I certainly

00:28:19 --> 00:28:26
wouldn't pretend to have a plan that

00:28:22 --> 00:28:28
solves it and is done with it we're we

00:28:25 --> 00:28:30
try to leverage best practices where

00:28:27 --> 00:28:32
we can in the fundamental architecture

00:28:29 --> 00:28:35
of the system to make it less exposed

00:28:31 --> 00:28:37
and in particular key parts of the

00:28:34 --> 00:28:40
system was exposed to nefarious actions

00:28:36 --> 00:28:42
of others but at the end of the day it's

00:28:39 --> 00:28:47
just a constant is a constant

00:28:41 --> 00:28:50
development effort thank you for being

00:28:46 --> 00:28:52
here so I had a question about what

00:28:49 --> 00:28:54
opportunities self-driving cars open up

00:28:51 --> 00:28:56
since driving has kind of been designed

00:28:53 --> 00:28:58
around like a human being at the center

00:28:55 --> 00:29:01
since the beginning if you put a

00:28:57 --> 00:29:03
computer at the center what you know

00:29:00 --> 00:29:05
society-wide differences and maybe even

00:29:02 --> 00:29:07
like within individual car differences

00:29:04 --> 00:29:09
that open up like you know could cars go

00:29:06 --> 00:29:11
150 miles an hour on the highway and get

00:29:08 --> 00:29:13
places much faster what cars be like

00:29:10 --> 00:29:14
look differently when a human

00:29:12 --> 00:29:16
doesn't need to be paying attention and

00:29:13 --> 00:29:20
stuff like that yeah I think the answer

00:29:15 --> 00:29:23
is yes the and that's that something is

00:29:19 --> 00:29:25
very exciting right so one of the I

00:29:22 --> 00:29:28
think one of the unique opportunities

00:29:24 --> 00:29:29
that automakers in particular have when

00:29:27 --> 00:29:31
self-driving technology gets

00:29:28 --> 00:29:33
incorporated into their vehicles is they

00:29:30 --> 00:29:34
can do things like play like

00:29:32 --> 00:29:36
differentiate the user experience they

00:29:33 --> 00:29:40
can provide services

00:29:35 --> 00:29:43
you know augmented reality services or

00:29:39 --> 00:29:45
you know location services many other

00:29:42 --> 00:29:47
sort of it opens a new window into an

00:29:44 --> 00:29:51
entirely new market that automakers

00:29:46 --> 00:29:54
haven't historically played in and it

00:29:50 --> 00:29:56
allows them to change the the very

00:29:53 --> 00:30:02
vehicles themselves as you've mentioned

00:29:55 --> 00:30:04
the interior can change as we validate

00:30:01 --> 00:30:06
some of these self-driving systems and

00:30:03 --> 00:30:08
confirm that they do in fact reduce the

00:30:05 --> 00:30:11
collision the the rate of collisions is

00:30:07 --> 00:30:16
we hope they will you can start to pull

00:30:10 --> 00:30:17
out a lot of the extra you know mass and

00:30:15 --> 00:30:19
other things that we've added to

00:30:16 --> 00:30:20
vehicles to make them more passively

00:30:18 --> 00:30:23
safe right

00:30:19 --> 00:30:26
roll cages crumple zones airbags you

00:30:22 --> 00:30:28
know a lot of these things you know

00:30:25 --> 00:30:31
presumably in a world where we don't

00:30:27 --> 00:30:37
crash there is there is much less need

00:30:30 --> 00:30:40
for passive safety systems so yes I have

00:30:36 --> 00:30:42
a question about the go no-go tests that

00:30:39 --> 00:30:44
you conduct for certain features like

00:30:41 --> 00:30:46
you mentioned the throttle control where

00:30:43 --> 00:30:48
you slow down the throttle assuming that

00:30:45 --> 00:30:51
he driver has pressed the wrong wrong

00:30:47 --> 00:30:52
pedal when you test when you decide to

00:30:50 --> 00:30:54
launch that feature how do you know it's

00:30:51 --> 00:30:55
definitely going to work in all

00:30:53 --> 00:30:57
scenarios because your data set might

00:30:54 --> 00:30:59
not be oh it's a it's a it's a

00:30:56 --> 00:31:03
statistical evaluation every case right

00:30:58 --> 00:31:05
you're right there you will this is this

00:31:02 --> 00:31:07
part of the art of self-driving

00:31:04 --> 00:31:10
vehicle development is you will never

00:31:06 --> 00:31:17
have comprehensively captured every case

00:31:09 --> 00:31:19
very scenario that is as my some of you

00:31:16 --> 00:31:21
may want to correct me on this I think

00:31:18 --> 00:31:23
that's an unbounded set it may in fact

00:31:20 --> 00:31:25
be bounded at some point but I think

00:31:22 --> 00:31:27
it's on and so you'll never you know

00:31:24 --> 00:31:28
there actually have characterized

00:31:26 --> 00:31:31
everything what you will have done

00:31:27 --> 00:31:33
hopefully if you do it right is you will

00:31:30 --> 00:31:35
have established with a reasonable

00:31:32 --> 00:31:36
degree of confidence that you can

00:31:34 --> 00:31:38
perform at a level of safety that's

00:31:35 --> 00:31:40
better than the average human driver and

00:31:37 --> 00:31:41
once you've reached that threshold and

00:31:39 --> 00:31:43
you're confident that you've reached

00:31:40 --> 00:31:47
that threshold I think it the

00:31:42 --> 00:31:51
opportunity to launch is is real and you

00:31:46 --> 00:31:54
should seriously consider it so thank

00:31:50 --> 00:31:57
you for your talk today first and my

00:31:53 --> 00:31:58
question is self-driving seems to be

00:31:56 --> 00:32:01
able to ultimately take over the world

00:31:57 --> 00:32:04
to some extent but just like other

00:32:00 --> 00:32:06
technologists today they open up new

00:32:03 --> 00:32:11
opportunities but also bring in adverse

00:32:05 --> 00:32:13
ffects so how do you respond to fear

00:32:10 --> 00:32:15
and nected effects that may come in one

00:32:12 --> 00:32:18
day and especially what do you see as

00:32:14 --> 00:32:21
the positive and active implications of

00:32:17 --> 00:32:24
uture day self-driving positive and

00:32:20 --> 00:32:24
negative implications

00:32:23 --> 00:32:29
o the positive ones like kind of listed

00:32:25 --> 00:32:31
and you'll find your favorite press

00:32:28 --> 00:32:36
article and they'll list them as well

00:32:30 --> 00:32:39
the negative ones in the near term I do

00:32:35 --> 00:32:42
worry a little bit about the

00:32:38 --> 00:32:44
displacement of jobs not a little bit

00:32:41 --> 00:32:48
his will happen it happens with every

00:32:43 --> 00:32:51
technology like this I think it's

00:32:47 --> 00:32:53
incumbent on us to find a good way of

00:32:50 --> 00:32:55
transitioning those who are employed in

00:32:52 --> 00:33:00
some of the transportation sectors that

00:32:54 --> 00:33:03
will be affected into better work right

00:32:59 --> 00:33:05
here are a few opportunities that are

00:33:02 --> 00:33:07
interesting in that regard but I think

00:33:04 --> 00:33:09
it's an important thing to start

00:33:06 --> 00:33:12
discussing now because it's gonna take

00:33:08 --> 00:33:14
you know a few years and you know by the

00:33:11 --> 00:33:16
time we got these self-driving systems

00:33:13 --> 00:33:18
on the roads really starting to place

00:33:15 --> 00:33:22
that labor I'd really like to have a new

00:33:17 --> 00:33:25
home for it now I I'm kasha from the

00:33:21 --> 00:33:27
Sloan School my question was more about

00:33:24 --> 00:33:30
your business model again with

00:33:26 --> 00:33:32
partnering with both VW and he and a and

00:33:29 --> 00:33:34
you're just perspective and how you were

00:33:31 --> 00:33:36
able to effectively do that

00:33:33 --> 00:33:39
did not one of them want to go sort of

00:33:35 --> 00:33:41
exclusive with you and what was your

00:33:38 --> 00:33:45
sort of thought process about that yeah

00:33:40 --> 00:33:46
so our our mission as I mentioned used

00:33:44 --> 00:33:52
to get the technology to market broadly

00:33:45 --> 00:33:54
and quickly and safely we are you know

00:33:51 --> 00:33:56
have been and remain convinced that the

00:33:53 --> 00:33:59
right way to do that is by providing it

00:33:55 --> 00:34:02
o as much the industry as possible

00:33:58 --> 00:34:04
to every automaker who shares our vision

00:34:01 --> 00:34:07
in our approach and we were pleased to

00:34:03 --> 00:34:10
see that both Volkswagen Group and I'm

00:34:06 --> 00:34:12
assuming you all know the scope of

00:34:09 --> 00:34:16
Volkswagen right this is a massive

00:34:11 --> 00:34:20
automaker Hyundai Motor also very large

00:34:15 --> 00:34:22
across Hyundai Kia and Genesis they both

00:34:19 --> 00:34:26
shared our vision of how we should do

00:34:21 --> 00:34:31
this which was important to us they both

00:34:25 --> 00:34:34
shared you know a a keen interest in

00:34:30 --> 00:34:36
making a difference at scale through

00:34:33 --> 00:34:38
their platforms Volkswagen has you know

00:34:36 --> 00:34:39
I can give very admirable set of

00:34:37 --> 00:34:41
initiatives around electric and vehicle

00:34:38 --> 00:34:44
lectrification a few other things Honda

00:34:40 --> 00:34:46
is doing similar things and so you know

00:34:43 --> 00:34:49
for us it was important that we enable

00:34:45 --> 00:34:51
veryone and that was kind of what

00:34:48 --> 00:34:53
Aurora was started to do hi I had a

00:34:50 --> 00:34:55
question now that I see a lot of

00:34:52 --> 00:34:56
companies are coming up with

00:34:54 --> 00:34:59
self-driving cars right so most of the

00:34:55 --> 00:35:02
cars are pretty much all the technology

00:34:58 --> 00:35:04
is bound only to the car so would we see

00:35:01 --> 00:35:05
something like an open network where car

00:35:03 --> 00:35:07
communicate with each other regardless

00:35:04 --> 00:35:10
of which company they come from and

00:35:06 --> 00:35:11
would this in any way you know increase

00:35:09 --> 00:35:13
the safety or the performance of

00:35:10 --> 00:35:15
vehicles and stuff like that yeah I

00:35:12 --> 00:35:17
think I think you're getting it vehicle

00:35:14 --> 00:35:18
to vehicle vehicle infrastructure type

00:35:16 --> 00:35:21
communication there there efforts

00:35:17 --> 00:35:25
ongoing in that and it certainly it's

00:35:20 --> 00:35:26
only positive right the having that

00:35:24 --> 00:35:29
information available to you

00:35:25 --> 00:35:30
can only make things better the

00:35:28 --> 00:35:32
challenge has historically been with

00:35:29 --> 00:35:33
vehicle the vehicle and back to

00:35:31 --> 00:35:35
particular vehicle to infrastructure or

00:35:32 --> 00:35:39
vice versa

00:35:34 --> 00:35:40
it doesn't scale well one and two it's

00:35:38 --> 00:35:43
been slow it's been much slower and

00:35:39 --> 00:35:46
coming than our development and so when

00:35:42 --> 00:35:48
we develop these systems we develop them

00:35:45 --> 00:35:50
without the expectation that those that

00:35:47 --> 00:35:52
hose communication protocol are

00:35:49 --> 00:35:54
available to us will certainly protect

00:35:51 --> 00:35:57
for them and it will certainly be you

00:35:53 --> 00:35:59
know a benefit once or once they're here

00:35:56 --> 00:36:02
but until then many of the hard problems

00:35:58 --> 00:36:04
that I would have welcomed 10 years ago

00:36:01 --> 00:36:06
to have a beacon on every traffic light

00:36:03 --> 00:36:08
hat just told me at state rather than

00:36:05 --> 00:36:10
having to perceive it I would have

00:36:07 --> 00:36:13
certainly used those ten years ago

00:36:09 --> 00:36:14
now they're less significant because

00:36:12 --> 00:36:15
we've kind of worked our way through a

00:36:13 --> 00:36:17
lot of the problems that would have

00:36:14 --> 00:36:21
solved thank you for your talk my

00:36:16 --> 00:36:24
question is what's your opinion about

00:36:20 --> 00:36:27
cooperation of self-driving vehicles so

00:36:23 --> 00:36:29
maybe I think if you can control a group

00:36:26 --> 00:36:31
of self-driving vehicles at the same

00:36:28 --> 00:36:33
time you can achieve a lot of benefits

00:36:30 --> 00:36:35
to the traffic yes that is where one of

00:36:32 --> 00:36:37
the that is where a lot of the benefits

00:36:34 --> 00:36:39
come from and infrastructure utilization

00:36:36 --> 00:36:42
or and is in ride-sharing with

00:36:38 --> 00:36:45
autonomous vehicles and and specifically

00:36:41 --> 00:36:48
ou know the better we understand demand

00:36:44 --> 00:36:51
patterns people movement goods movement

00:36:47 --> 00:36:54
he better we can sort of optimally

00:36:50 --> 00:36:56
allocate these vehicles and at locations

00:36:53 --> 00:36:59
where they're needed so yes that's that

00:36:55 --> 00:37:00
certainly that that coordination this is

00:36:58 --> 00:37:03
where as I mentioned these three vectors

00:36:59 --> 00:37:06
of vehicle electrification ride-sharing

00:37:02 --> 00:37:07
autonomy or transfer mobility as a

00:37:05 --> 00:37:09
service and autonomy

00:37:06 --> 00:37:13
really come together with a unique value

00:37:08 --> 00:37:17
proposition yeah okay thank you yeah

00:37:12 --> 00:37:17
thank you so much for a great talking

<!-- YOUTUBE_TRANSCRIPT_END -->
