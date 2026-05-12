---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Q0nGo2-y0xY"
title: "Drago Anguelov (Waymo) - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=Q0nGo2-y0xY"
thumbnail_url: "https://i.ytimg.com/vi/Q0nGo2-y0xY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Q0nGo2-y0xY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-02-12T15:36:20.000Z"
upload_date: "2019-02-12"
duration_seconds: 3915
duration_human: "1:05:15"
view_count: 167963
like_count: 2462
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:13:36.771Z"
---

# Drago Anguelov (Waymo) - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Q0nGo2-y0xY
- video_id: Q0nGo2-y0xY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-02-12T15:36:20.000Z
- upload_date: 2019-02-12
- duration: 1:05:15
- view_count: 167963
- like_count: 2462
- has_subtitle: true
- language: en
- availability: public
- tags: self-driving cars, artificial intelligence, deep learning, machine learning, self driving cars, waymo, google, lex fridman, autonomous cars, computer vision, waymo one, deep learning mit, google self-driving car, robotaxi, driverless cars, reinforcement learning, chauffeurnet, simulation, Drago Anguelov, level 4, level 5, mit lex, self-driving car, autonomous vehicles, self-driving cars 2019, neural networks
- categories: Science & Technology

## Description

Drago Anguelov is a Principal Scientist at Waymo, developing and applying machine learning methods for autonomous vehicle perception and, more generally, in computer vision and robotics. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: http://bit.ly/2S1MVdy

OUTLINE:
0:00 - Introduction
0:47 - Background
1:31 - Waymo story (2009 to today)
4:31 - Long tail of events
8:55 - Perception, prediction, and planning
14:54 - Machine learning at scale
26:43 - Addressing the limits of machine learning
29:38 - Large-scale testing
50:51 - Scaling to dozens and hundreds of cities
54:35 - Q&A

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
all right welcome back to 6sz ro9 for

00:00:02 --> 00:00:08
deep learning for self-driving cars

00:00:04 --> 00:00:11
today we have Drago and glial of

00:00:07 --> 00:00:13
principal scientists at way mo aside

00:00:10 --> 00:00:16
from having the coolest name in

00:00:12 --> 00:00:18
autonomous driving Drago has done a lot

00:00:15 --> 00:00:20
of excellent work in developing applying

00:00:17 --> 00:00:22
machine learning methods to autonomous

00:00:19 --> 00:00:23
vehicle perception and more generally in

00:00:21 --> 00:00:25
computer vision and robotics he's not

00:00:22 --> 00:00:29
helping way mo lead the world in

00:00:24 --> 00:00:33
autonomous driving 10 plus million miles

00:00:28 --> 00:00:35
achieved autonomously to date which is

00:00:32 --> 00:00:38
an incredible accomplishment so it's

00:00:34 --> 00:00:40
exciting to have Drago here with us to

00:00:37 --> 00:00:44
speak please give him a big hand

00:00:39 --> 00:00:48
[Applause]

00:00:43 --> 00:00:49
hi thanks for having me I will tell you

00:00:47 --> 00:00:51
a bit about our work and the the

00:00:48 --> 00:00:54
xciting nature of self-driving and the

00:00:50 --> 00:00:56
problem and our solutions so my talk is

00:00:53 --> 00:00:58
called taming the long tail of

00:00:55 --> 00:01:00
autonomous driving challenges my

00:00:57 --> 00:01:04
background is in perception in robotics

00:00:59 --> 00:01:06
o I did PhD at Stanford with Daphne

00:01:03 --> 00:01:08
Koller and worked closely with one of

00:01:05 --> 00:01:11
the pioneers in the space professor

00:01:07 --> 00:01:12
Sebastian Thrun I spent eight years at

00:01:10 --> 00:01:14
Google doing research on perception also

00:01:11 --> 00:01:17
work on Street View developing deep

00:01:13 --> 00:01:20
models for detection neural net

00:01:16 --> 00:01:23
architectures I was briefly zooks I was

00:01:19 --> 00:01:25
heading the 3d perception gaming jokes

00:01:22 --> 00:01:27
were built another perception system for

00:01:24 --> 00:01:30
autonomous driving and I've been leading

00:01:26 --> 00:01:32
the research team at way more in most

00:01:29 --> 00:01:34
recently

00:01:31 --> 00:01:36
so I want to tell you a little bit about

00:01:33 --> 00:01:40
Weimar when we start way more actually

00:01:35 --> 00:01:42
this month has its 10-year anniversary

00:01:39 --> 00:01:44
it started with Sebastian throng

00:01:41 --> 00:01:47
convinced the Google leadership to try

00:01:43 --> 00:01:49
an exciting new moonshot

00:01:46 --> 00:01:52
and the goal that they set for

00:01:48 --> 00:01:54
themselves was to drive 10 different

00:01:51 --> 00:01:57
segments that were 100 miles long and

00:01:53 --> 00:01:59
later that year they succeeded and drove

00:01:56 --> 00:02:01
an order of magnitude more than anyone

00:01:58 --> 00:02:01
has ever driven

00:02:01 --> 00:02:11
in 2015 we brought this car to the road

00:02:05 --> 00:02:14
it was built ground up as a study in

00:02:10 --> 00:02:18
what fully driverless mobility would be

00:02:13 --> 00:02:22
like in 2015 we put this vehicle in

00:02:17 --> 00:02:24
Austin and it completed the world's

00:02:21 --> 00:02:27
first fully autonomous ride on public

00:02:23 --> 00:02:33
roads and the person inside this car is

00:02:26 --> 00:02:35
a fan of the project that he is blind so

00:02:32 --> 00:02:37
we did not want this to be just a demo

00:02:34 --> 00:02:41
fully driverless experience we worked

00:02:36 --> 00:02:43
hard and in 2017 we launched a fleet of

00:02:40 --> 00:02:47
ully self-driving vehicles on the

00:02:42 --> 00:02:51
streets of in Phoenix metro area

00:02:46 --> 00:02:55
nd we have been doing driverless fully

00:02:50 --> 00:02:55
driverless operations ever since

00:02:55 --> 00:03:02
so I wanted to give you a feel for what

00:02:57 --> 00:03:02
fully driverless experience is like

00:03:01 --> 00:03:07
[Music]

00:03:36 --> 00:03:43
and so we continued last year we

00:03:40 --> 00:03:47
launched our first commercial service in

00:03:42 --> 00:03:50
the metro area of Phoenix there people

00:03:46 --> 00:03:51
can call a web on their phone it can

00:03:49 --> 00:03:54
come pick them up and help them with

00:03:50 --> 00:03:55
errands or go to school and we've been

00:03:53 --> 00:03:58
already learning a lot from these

00:03:54 --> 00:04:00
customers and we're looking to grow and

00:03:57 --> 00:04:03
expand the service and bring it to more

00:03:59 --> 00:04:05
people so in the process of drawing the

00:04:02 --> 00:04:08
service we have driven 10 million miles

00:04:04 --> 00:04:14
on public road is like said and

00:04:07 --> 00:04:18
riverless lis in Enmore also with with

00:04:13 --> 00:04:21
uman drivers to collect data and we've

00:04:17 --> 00:04:23
driven all kinds of scenarios cities

00:04:20 --> 00:04:25
capturing a diverse set of conditions

00:04:22 --> 00:04:30
and a diverse set of situations in which

00:04:24 --> 00:04:30
we develop our systems

00:04:30 --> 00:04:36
I want to tell you I mean about the long

00:04:32 --> 00:04:39
tail of events this is all the things we

00:04:35 --> 00:04:42
need to handle to enable truly sub

00:04:38 --> 00:04:44
driver this future and I guess all the

00:04:41 --> 00:04:46
problems that come with this and offer

00:04:43 --> 00:04:49
some solutions and show you how has been

00:04:45 --> 00:04:52
thinking about these issues so as we

00:04:48 --> 00:04:56
drove 10 million miles of course we

00:04:51 --> 00:04:57
still find scenarios new ones that we

00:04:55 --> 00:04:59
have not seen before we still keep

00:04:56 --> 00:05:02
collecting them right and so when you

00:04:58 --> 00:05:03
think about self-driving vehicles they

00:05:01 --> 00:05:06
need to have the following properties

00:05:02 --> 00:05:08
first a vehicle needs to be capable it

00:05:05 --> 00:05:11
needs to be able to handle the entire

00:05:07 --> 00:05:13
task of driving so you cannot just a

00:05:10 --> 00:05:16
subset and remove the human operator

00:05:12 --> 00:05:17
from the vehicle and also all of these

00:05:15 --> 00:05:21
tasks obviously need to do well and

00:05:17 --> 00:05:25
safely and that is the requirement to

00:05:20 --> 00:05:27
achieving so driving at scale and when

00:05:24 --> 00:05:29
you think about this now the question is

00:05:26 --> 00:05:31
well how many of these capabilities and

00:05:28 --> 00:05:33
how many scenarios do you really need to

00:05:30 --> 00:05:39
handle well it turns out well the world

00:05:32 --> 00:05:41
is quite diverse and complicated and

00:05:38 --> 00:05:43
there is a lot of rare situations and

00:05:40 --> 00:05:46
all of them need to be handled well

00:05:42 --> 00:05:49
right and they call this the long tail

00:05:45 --> 00:05:52
of situations you it's

00:05:48 --> 00:05:53
it's one type of effort to get

00:05:51 --> 00:05:56
yourself driving for the common cases

00:05:52 --> 00:05:59
and then it's another effort to tame

00:05:55 --> 00:06:04
this the rest and they really really

00:05:58 --> 00:06:05
matter and so I'll show you some for

00:06:03 --> 00:06:07
example

00:06:04 --> 00:06:10
this is us driving in the street and

00:06:06 --> 00:06:14
let's see if you can tell what is

00:06:09 --> 00:06:19
unusual in this video you see so this I

00:06:13 --> 00:06:22
can play it one more time so there's a

00:06:18 --> 00:06:25
bicyclist and he is carrying a stop sign

00:06:21 --> 00:06:27
and I don't know where he picked it up

00:06:24 --> 00:06:30
but it's certainly not a stop sign we

00:06:26 --> 00:06:34
need to stop for unlike others right and

00:06:29 --> 00:06:35
so you need to understand that let me

00:06:33 --> 00:06:38
show you another scenario this is

00:06:34 --> 00:06:40
another case where we are happily

00:06:37 --> 00:06:43
staying there and then the vehicle stops

00:06:39 --> 00:06:44
and a big pile of poles comes our way

00:06:42 --> 00:06:47
right and you need to potentially

00:06:43 --> 00:06:50
understand that and learn to avoid it

00:06:46 --> 00:06:51
generally well different types of

00:06:49 --> 00:06:53
objects can fall on the road it's not

00:06:50 --> 00:06:56
just pose here's another interesting

00:06:52 --> 00:06:58
scenario this is happens a lot it's

00:06:55 --> 00:07:01
called construction and there's various

00:06:57 --> 00:07:03
aspects of it one of them is someone

00:07:00 --> 00:07:06
changed clothes Delaine put a bunch of

00:07:02 --> 00:07:08
cones and we learn and this is our

00:07:05 --> 00:07:10
vehicle correctly identifying where it's

00:07:07 --> 00:07:11
upposed to be driving between all of

00:07:09 --> 00:07:15
these cones and and successfully

00:07:10 --> 00:07:18
executing it so yeah we drive for a

00:07:14 --> 00:07:19
while and this is this is something that

00:07:17 --> 00:07:28
is happens fairly often

00:07:18 --> 00:07:32
if you drive a lot another case is this

00:07:27 --> 00:07:35
one I think you can you can understand

00:07:31 --> 00:07:39
what happened here and you can notice

00:07:34 --> 00:07:41
actually so we hear the siren so we we

00:07:38 --> 00:07:43
have the ability to understand sirens to

00:07:40 --> 00:07:45
special vehicles and you can see we hear

00:07:42 --> 00:07:48
it and stop and some guys are much later

00:07:44 --> 00:07:53
than us breaking at the last moment

00:07:47 --> 00:07:57
letting the emergency vehicle pass and

00:07:52 --> 00:07:58
here's another scenario potentially I

00:07:56 --> 00:08:01
want to show you let's see if you can

00:07:57 --> 00:08:01
understand what happened

00:08:01 --> 00:08:08
so let me play one more time did you

00:08:06 --> 00:08:11
guys see

00:08:07 --> 00:08:14
so we stopped at there's a green light

00:08:10 --> 00:08:16
we're about to go and someone goes at

00:08:13 --> 00:08:19
high speed running a red light without

00:08:15 --> 00:08:24
any remorse right and we successfully

00:08:18 --> 00:08:26
stop and prevent issues right and so

00:08:23 --> 00:08:28
metimes you have the rules of the way

00:08:25 --> 00:08:30
and you have your road and people don't

00:08:27 --> 00:08:32
always abide by them and that's

00:08:29 --> 00:08:33
omething that you know I don't want to

00:08:31 --> 00:08:37
just directly go in front of that person

00:08:32 --> 00:08:37
even if they're breaking the law so

00:08:36 --> 00:08:41
hopefully with this I convince you that

00:08:38 --> 00:08:44
he situations that can occur a diverse

00:08:40 --> 00:08:46
and challenging and there's quite a few

00:08:43 --> 00:08:47
of them and I want to take a little bit

00:08:45 --> 00:08:50
on a tour of what makes this challenging

00:08:46 --> 00:08:51
and then tell you some ways in which we

00:08:49 --> 00:08:55
think about it and how we're handling it

00:08:50 --> 00:08:57
and so to do this we're going to delve a

00:08:54 --> 00:08:59
little bit more into the main tasks for

00:08:56 --> 00:09:01
sub driving which is perception

00:08:58 --> 00:09:03
prediction and planning so I'll tell you

00:09:00 --> 00:09:08
a little bit about those right and

00:09:02 --> 00:09:09
perception these are the core AI aspects

00:09:07 --> 00:09:11
of the car usually this task there's

00:09:08 --> 00:09:13
others we can talk about others as well

00:09:10 --> 00:09:15
in a little bit but that let's focus on

00:09:12 --> 00:09:17
this person so perception is mapping

00:09:14 --> 00:09:19
from sensory inputs in potentially prior

00:09:16 --> 00:09:20
knowledge of the environment to seen

00:09:18 --> 00:09:23
representation and that same

00:09:19 --> 00:09:25
presentation can contain objects it

00:09:22 --> 00:09:28
contains in semantics potentially you

00:09:24 --> 00:09:30
can construct the map you can learn

00:09:27 --> 00:09:35
about objects or relationships and so on

00:09:29 --> 00:09:36
and perception the space of things you

00:09:34 --> 00:09:39
need to handle in perception is fairly

00:09:35 --> 00:09:40
hard it's a complex mapping right so you

00:09:38 --> 00:09:44
have sensors the pixels come later

00:09:40 --> 00:09:46
points come or radar scans come and you

00:09:43 --> 00:09:48
have multiple axis of variability in the

00:09:45 --> 00:09:50
nvironment so obviously there's a lot

00:09:47 --> 00:09:54
of objects they have different types

00:09:49 --> 00:09:56
appearance pose is I don't know if you

00:09:53 --> 00:09:57
see this well they're a bunch of people

00:09:55 --> 00:10:00
dressed as dinosaurs in this case people

00:09:56 --> 00:10:03
generally are fairly creative in how

00:09:59 --> 00:10:06
they dress vehicles can also be

00:10:02 --> 00:10:09
different types people come in different

00:10:05 --> 00:10:12
poses and we have seen it all right so

00:10:08 --> 00:10:12
that's one of prospects

00:10:12 --> 00:10:16
there's different environments that

00:10:13 --> 00:10:21
hese objects appear in so there are

00:10:15 --> 00:10:25
times of day seasons day night different

00:10:20 --> 00:10:28
for example highway environment suburban

00:10:24 --> 00:10:29
street and so on and then there's a

00:10:27 --> 00:10:31
different variability axis and this is a

00:10:28 --> 00:10:33
little more slightly more abstract that

00:10:30 --> 00:10:35
different objects can come in these

00:10:32 --> 00:10:37
nvironments in different configurations

00:10:34 --> 00:10:39
and can have different relationships and

00:10:36 --> 00:10:42
so things like occlusion there's a guy

00:10:38 --> 00:10:46
carrying a big board there is

00:10:41 --> 00:10:50
reflections there is smell people riding

00:10:45 --> 00:10:52
on horses and so on and so what am i

00:10:49 --> 00:10:54
showing this because I just want to show

00:10:51 --> 00:10:57
you the space right so in most cases you

00:10:53 --> 00:10:59
care about most objects in most

00:10:56 --> 00:11:00
environments in most reasonable

00:10:58 --> 00:11:02
configurations and that's a space that

00:10:59 --> 00:11:04
you need to map from from the sensor

00:11:01 --> 00:11:06
inputs to a representation that makes

00:11:03 --> 00:11:07
ense and you need if you need to learn

00:11:05 --> 00:11:10
this mapping function or represent it

00:11:06 --> 00:11:12
somehow right and so let's go to the

00:11:09 --> 00:11:13
next step which is prediction so apart

00:11:11 --> 00:11:15
from just understanding what's happening

00:11:12 --> 00:11:18
in the world you need to be able to

00:11:14 --> 00:11:19
anticipate and predict what some of the

00:11:17 --> 00:11:21
actors in the world are going to do the

00:11:18 --> 00:11:24
actors being mostly people and people is

00:11:20 --> 00:11:26
honestly what makes driving quite

00:11:23 --> 00:11:29
challenging this is one of the aspects

00:11:25 --> 00:11:30
that do so it's you know vehicle needs

00:11:28 --> 00:11:33
to be out there and be a full-fledged

00:11:29 --> 00:11:35
traffic scene participant and this

00:11:32 --> 00:11:37
anticipation of agent behavior sometime

00:11:34 --> 00:11:38
needs to be fairly long-term so

00:11:36 --> 00:11:39
metimes when you want to make a

00:11:37 --> 00:11:41
decision you want to validate or

00:11:38 --> 00:11:44
convince yourself it does not interfere

00:11:41 --> 00:11:45
what what anyone else is going to do and

00:11:43 --> 00:11:47
it can go from one second to maybe ten

00:11:44 --> 00:11:49
seconds or more you need to anticipate

00:11:46 --> 00:11:52
the future so what goes into

00:11:48 --> 00:11:54
anticipating the future well you can

00:11:51 --> 00:11:55
watch it past behavior some ones I'm

00:11:53 --> 00:11:58
going this way maybe I will continue I'm

00:11:54 --> 00:12:00
going there maybe I'm very aggressively

00:11:57 --> 00:12:03
walking and maybe I'm more likely to do

00:11:59 --> 00:12:05
aggressive motions in the future high

00:12:02 --> 00:12:07
levels in semantics well I'm in a

00:12:04 --> 00:12:08
presentation room I'm sitting here at

00:12:06 --> 00:12:12
he front giving a talk I'll probably

00:12:07 --> 00:12:15
stay here and continue even though

00:12:11 --> 00:12:18
stranger things have happened

00:12:14 --> 00:12:20
and of course there's subtle appearance

00:12:17 --> 00:12:22
skills so for example if a person's

00:12:19 --> 00:12:24
watching our vehicle and moving towards

00:12:21 --> 00:12:25
them we can be fairly confident they're

00:12:23 --> 00:12:29
paying attention and not going to do

00:12:24 --> 00:12:31
anything particularly dangerous if

00:12:28 --> 00:12:35
someone's not paying attention or being

00:12:30 --> 00:12:37
distracted or you know there is a person

00:12:34 --> 00:12:39
in the car waving at us various gesture

00:12:36 --> 00:12:42
skills the blinkers from the vehicles

00:12:38 --> 00:12:44
these are all signals and and subtle

00:12:41 --> 00:12:45
signals that we need to understand in it

00:12:43 --> 00:12:48
in order to be able to behave well and

00:12:44 --> 00:12:52
last but not least even when you predict

00:12:47 --> 00:12:54
how other agents behave agents also

00:12:51 --> 00:12:55
affected by the other agents in the

00:12:53 --> 00:12:58
nvironment as well so everyone can

00:12:54 --> 00:13:00
affect everyone else and you need to be

00:12:57 --> 00:13:03
mindful of this so I'll give you an

00:12:59 --> 00:13:05
example of this I think this is one of

00:13:02 --> 00:13:07
the issues that really needs to be

00:13:04 --> 00:13:09
thought about we are all interacting

00:13:06 --> 00:13:14
with each other so here's the case our

00:13:08 --> 00:13:17
way move vehicle is driving and there is

00:13:13 --> 00:13:21
two bicyclists in red going around a

00:13:16 --> 00:13:22
parked car and what happens is we

00:13:20 --> 00:13:24
correctly anticipate that as day bike

00:13:21 --> 00:13:27
they will go around the car and we slow

00:13:23 --> 00:13:29
down and let them pass right so we

00:13:26 --> 00:13:31
reasoning that they will interact with

00:13:28 --> 00:13:33
e parked car this is the this is the

00:13:30 --> 00:13:36
prediction our most likely prediction

00:13:32 --> 00:13:38
for the rear bicyclists we anticipate

00:13:35 --> 00:13:40
that they will do this and we correctly

00:13:37 --> 00:13:43
handle this okay so this illustrates

00:13:39 --> 00:13:46
prediction and here planning this is our

00:13:42 --> 00:13:48
decision-making machine it produces

00:13:45 --> 00:13:50
vehicle behavior typically ends up in

00:13:47 --> 00:13:54
control commands to the vehicle

00:13:49 --> 00:13:56
accelerate slow down steer the wheel any

00:13:53 --> 00:13:58
to generate behavior that ultimately has

00:13:55 --> 00:14:00
everal properties to and it's important

00:13:57 --> 00:14:04
o think of them which is safe safety

00:13:59 --> 00:14:08
comes first comfortable for the

00:14:03 --> 00:14:09
passengers and also sends the right

00:14:07 --> 00:14:12
signals to the other traffic

00:14:08 --> 00:14:13
participants you because they can

00:14:11 --> 00:14:17
interact with you and they will react to

00:14:12 --> 00:14:19
your actions you need to be mindful and

00:14:16 --> 00:14:20
you need to of course make progress you

00:14:18 --> 00:14:21
need to deliver your passengers so you

00:14:19 --> 00:14:24
need to trade all of these in a

00:14:20 --> 00:14:25
reasonable way right and it and it can

00:14:23 --> 00:14:27
be

00:14:24 --> 00:14:29
fairly sophisticated reasoning and

00:14:26 --> 00:14:33
complex environments I'll show you just

00:14:28 --> 00:14:35
one scene this is this is the complex I

00:14:32 --> 00:14:37
think school gathering there's bicyclist

00:14:34 --> 00:14:38
railing us vehicles really close the

00:14:36 --> 00:14:41
hand within as a bunch of pedestrians

00:14:37 --> 00:14:45
and we need to make progress and here is

00:14:40 --> 00:14:48
us we're driving and reasonably well in

00:14:44 --> 00:14:50
crowded scenes and that is part of the

00:14:47 --> 00:14:52
prerequisite of bringing this technology

00:14:49 --> 00:14:55
to in all the deaths urban environments

00:14:51 --> 00:14:57
being able to do so how are we going to

00:14:54 --> 00:14:59
do it well I gave it up I'm a machine

00:14:56 --> 00:15:02
learning person I think when you have

00:14:58 --> 00:15:04
this complicated models and systems

00:15:01 --> 00:15:09
machine learning is a really great tool

00:15:03 --> 00:15:13
to model complex actions complex mapping

00:15:08 --> 00:15:16
functions features right and so we're

00:15:12 --> 00:15:18
going to learn our system and we've been

00:15:15 --> 00:15:19
doing this I mean we're not the only one

00:15:17 --> 00:15:22
so obviously this this is now a machine

00:15:18 --> 00:15:24
learning revolution and machine learning

00:15:21 --> 00:15:26
is permeating all parts of the way imma

00:15:23 --> 00:15:28
stack all of these systems that I'm

00:15:25 --> 00:15:30
talking about it helps us perceive the

00:15:27 --> 00:15:33
world it helps us making decisions about

00:15:29 --> 00:15:36
what others are going to do it helps us

00:15:32 --> 00:15:38
make our own decisions and machine

00:15:35 --> 00:15:40
learning is a tool to handle the long

00:15:37 --> 00:15:44
tail right and now tell you a little

00:15:39 --> 00:15:45
more on this how so I have this allegory

00:15:43 --> 00:15:47
about machine learning that I like to

00:15:44 --> 00:15:48
think about so there is a classical

00:15:46 --> 00:15:51
system and there is a machine learning

00:15:47 --> 00:15:54
system and to me a classical system and

00:15:50 --> 00:15:55
I've been there I've done well early

00:15:53 --> 00:15:57
machine learning also systems also can

00:15:54 --> 00:15:59
be a bit classical you're the artisan

00:15:56 --> 00:16:01
you're the expert you have your tools

00:15:58 --> 00:16:02
and you need to build this product and

00:16:00 --> 00:16:04
you have your craft and you go and take

00:16:01 --> 00:16:06
your tools and build it right and it can

00:16:03 --> 00:16:08
fairly quickly get something reasonable

00:16:05 --> 00:16:10
but then it's harder to change it's

00:16:07 --> 00:16:12
harder to evolve if if you learn new

00:16:09 --> 00:16:13
things now I need to go back and maybe

00:16:11 --> 00:16:15
the tools don't quite fit and you need

00:16:12 --> 00:16:17
to essentially keep keep tweaking it and

00:16:14 --> 00:16:19
starts becoming the more complicated the

00:16:16 --> 00:16:22
product becomes the harder it is to do

00:16:18 --> 00:16:26
and machine learning modern machine

00:16:21 --> 00:16:28
learning is like a factory right so

00:16:25 --> 00:16:30
machine learning you build the factory

00:16:27 --> 00:16:33
which is the machine learning

00:16:29 --> 00:16:36
infrastructure and then you feed data in

00:16:32 --> 00:16:40
this Factory and get nice models to

00:16:35 --> 00:16:41
solve your problems right and so kind of

00:16:39 --> 00:16:44
infrastructure is at the heart of this

00:16:40 --> 00:16:47
new paradigm you need to build the

00:16:43 --> 00:16:50
factory all right once you do it now you

00:16:46 --> 00:16:52
can iterate it's scalable right just

00:16:49 --> 00:16:56
keep the right data keep feeding the

00:16:51 --> 00:16:58
machine keeps giving you good models so

00:16:55 --> 00:17:03
what is the ml factory for self-driving

00:16:57 --> 00:17:06
models well roughly it goes

00:17:02 --> 00:17:08
this we have a software release we put

00:17:05 --> 00:17:11
it on the vehicle we're able to drive we

00:17:07 --> 00:17:15
collect data we collect it and

00:17:10 --> 00:17:17
we store it and then we select some some

00:17:14 --> 00:17:19
parts of this data and we send it to

00:17:16 --> 00:17:21
labelers and the label is labeled parts

00:17:18 --> 00:17:23
of the data that we find interesting and

00:17:20 --> 00:17:25
that's the knowledge that we want to

00:17:22 --> 00:17:26
extract from the data these are the

00:17:24 --> 00:17:31
labels they are notations the results we

00:17:25 --> 00:17:33
want for our models right there is and

00:17:30 --> 00:17:35
then what we're going to do is we're

00:17:32 --> 00:17:38
gonna train machine learning models on

00:17:34 --> 00:17:40
this data after we have the models we

00:17:37 --> 00:17:42
will do testing and validation validate

00:17:39 --> 00:17:44
that they're good to put on our vehicles

00:17:41 --> 00:17:47
once they're good to put on our vehicles

00:17:43 --> 00:17:49
we go and collect more data and then the

00:17:46 --> 00:17:51
process starts going again and again

00:17:48 --> 00:17:52
right so you collect more data now you

00:17:50 --> 00:17:55
select new data that you have not

00:17:51 --> 00:17:58
selected before right you add it to your

00:17:54 --> 00:17:59
data set you keep training the model and

00:17:57 --> 00:18:02
iterate iterate iterate it's a nice

00:17:58 --> 00:18:05
scalable set up of course

00:18:01 --> 00:18:07
this needs to be automated it needs to

00:18:04 --> 00:18:10
be scalable itself it's a game of

00:18:06 --> 00:18:13
infrastructure right and at Weimer we

00:18:09 --> 00:18:14
have the beautiful advantage to be

00:18:12 --> 00:18:16
really well set up with regards to the

00:18:13 --> 00:18:18
machine learning infrastructure and I'll

00:18:15 --> 00:18:22
tell you a bit about its ingredients and

00:18:18 --> 00:18:24
how we how we go about it so ingredient

00:18:21 --> 00:18:26
one is computing software infrastructure

00:18:23 --> 00:18:29
and we're part of alphabet Google and we

00:18:25 --> 00:18:31
are able to first of all leverage

00:18:28 --> 00:18:34
tensorflow the deep learning framework

00:18:30 --> 00:18:36
we have access to the experts the throat

00:18:33 --> 00:18:38
pans the flow and know it in-depth we

00:18:35 --> 00:18:40
have data centers to run large-scale

00:18:37 --> 00:18:43
parallel compute and also train models

00:18:39 --> 00:18:46
we have specialized hardware for

00:18:42 --> 00:18:47
training models which you know make it

00:18:45 --> 00:18:51
cheaper and more affordable and faster

00:18:46 --> 00:18:53
so you can iterate better ingredient to

00:18:50 --> 00:18:56
high quality label data we have the

00:18:52 --> 00:18:58
scale to collect and store hundreds and

00:18:55 --> 00:19:02
thousands and more miles to millions of

00:18:57 --> 00:19:05
miles and just collecting a store and

00:19:01 --> 00:19:08
convenience miles is not necessarily

00:19:04 --> 00:19:11
the best thing you can do right because

00:19:07 --> 00:19:13
there is a decreasing utility to the

00:19:10 --> 00:19:15
data so most of the data comes from

00:19:12 --> 00:19:16
common scenarios you may be already good

00:19:14 --> 00:19:18
at them and that's where the long tail

00:19:15 --> 00:19:21
comes right so so it's really important

00:19:18 --> 00:19:23
how you select the data and so this is

00:19:20 --> 00:19:25
important part of this pipeline so while

00:19:22 --> 00:19:27
you're running release on the vehicle we

00:19:24 --> 00:19:29
have a bunch of models we have a bunch

00:19:26 --> 00:19:31
of understanding about the world and you

00:19:28 --> 00:19:33
can we annotate the data as we go and

00:19:30 --> 00:19:35
you can use this knowledge to decide

00:19:32 --> 00:19:38
what data is interesting how to store it

00:19:34 --> 00:19:42
which data we can potentially even

00:19:37 --> 00:19:44
ignore so then once we do that again we

00:19:41 --> 00:19:46
need to be very careful how to select

00:19:43 --> 00:19:47
data we want to select data for examples

00:19:45 --> 00:19:50
that are interesting in some way and

00:19:46 --> 00:19:52
complement capture these long tail cases

00:19:49 --> 00:19:55
that we potentially may not be doing so

00:19:51 --> 00:19:58
well on and so you know for this there

00:19:54 --> 00:20:01
is we have active learning and data

00:19:57 --> 00:20:03
mining pipelines given exemplars find

00:20:00 --> 00:20:06
the rare examples look for parts of your

00:20:02 --> 00:20:08
system which are uncertain or you know

00:20:05 --> 00:20:11
inconsistent over time and and go and

00:20:07 --> 00:20:14
label those cases last but not least we

00:20:10 --> 00:20:15
also produce auto labels so how can you

00:20:13 --> 00:20:18
do that well when you collect data you

00:20:14 --> 00:20:21
also see the future for many of the

00:20:17 --> 00:20:23
objects what they did and so because of

00:20:20 --> 00:20:25
that now knowing the past and the future

00:20:22 --> 00:20:28
you can annotate your data better and

00:20:24 --> 00:20:29
then go back to your model that does not

00:20:27 --> 00:20:33
know the future and try to replicate

00:20:28 --> 00:20:34
that with that model right and so you

00:20:32 --> 00:20:36
need to do all of this is part of the

00:20:33 --> 00:20:39
system ingredient number three high

00:20:35 --> 00:20:41
quality models we're part of larger

00:20:38 --> 00:20:44
alphabet and Google and deepmind and

00:20:40 --> 00:20:47
generally alphabet is the leader in AI

00:20:43 --> 00:20:50
when I was at Google we were very early

00:20:46 --> 00:20:51
on the deep learning revolution I happen

00:20:49 --> 00:20:56
to have the chance to be there at the

00:20:50 --> 00:20:57
time it was 20 2013 when I got on to do

00:20:55 --> 00:20:59
deep learning and a lot of things were

00:20:56 --> 00:21:01
not understood and we were there working

00:20:58 --> 00:21:03
on it earlier than most people and so

00:21:00 --> 00:21:06
through that we had the opportunity and

00:21:02 --> 00:21:08
the chance to develop some of the in my

00:21:05 --> 00:21:11
time the team I managed to invented

00:21:07 --> 00:21:13
neural net architecture like Inception

00:21:10 --> 00:21:15
which became popular later we invented

00:21:12 --> 00:21:17
at the time the state of the art object

00:21:14 --> 00:21:18
detection fast object detector called

00:21:16 --> 00:21:21
SSD

00:21:17 --> 00:21:23
and we want imagenet 2014 and now if you

00:21:20 --> 00:21:24
go to the conference is Google and deep

00:21:22 --> 00:21:26
mine the leaders in perception and

00:21:23 --> 00:21:29
reinforcement learning and smart agents

00:21:25 --> 00:21:31
and you know there is like state of the

00:21:28 --> 00:21:33
art say semantic segmentation networks

00:21:30 --> 00:21:35
pose estimation and so on the object

00:21:32 --> 00:21:37
detection of course goes without saying

00:21:34 --> 00:21:39
and so we collaborate with Google in

00:21:36 --> 00:21:43
deep mountain projects improving our

00:21:38 --> 00:21:45
models and so this is my factory for

00:21:42 --> 00:21:48
self-driving models and I want to tell

00:21:44 --> 00:21:50
you something that kind of captures all

00:21:47 --> 00:21:54
of these ideas infrastructure data and

00:21:49 --> 00:21:57
models in one this is a project we did

00:21:53 --> 00:22:00
recently and today we put online in our

00:21:56 --> 00:22:04
blog about automatic machine learning

00:21:59 --> 00:22:08
for tuning and adjusting architectures

00:22:03 --> 00:22:11
of neural networks so so what what did

00:22:07 --> 00:22:14
we do so there is a team at Google

00:22:10 --> 00:22:17
working on auto ml automatic machine

00:22:13 --> 00:22:18
learning and usually networks themselves

00:22:16 --> 00:22:20
a complex architecture they're crafted

00:22:17 --> 00:22:23
by practitioners - artisans of networks

00:22:19 --> 00:22:24
in some way and sometimes you know we

00:22:22 --> 00:22:25
have very high latency constraints in

00:22:23 --> 00:22:28
the models we have some compute

00:22:24 --> 00:22:29
constraints the network's is specialized

00:22:27 --> 00:22:31
it takes

00:22:28 --> 00:22:33
often people months to find the right

00:22:30 --> 00:22:36
architecture that's most performant low

00:22:32 --> 00:22:37
latency and so on and so there's a way

00:22:35 --> 00:22:41
to offload this work to the machines you

00:22:36 --> 00:22:43
can have machines themselves once you

00:22:40 --> 00:22:44
suppose the problem go and find your

00:22:42 --> 00:22:47
good network architecture that's both

00:22:43 --> 00:22:50
low latency and high performance right

00:22:46 --> 00:22:51
and so that's what we do and we drive in

00:22:49 --> 00:22:53
a lot of scenarios and we as we keep

00:22:50 --> 00:22:56
collecting data and finding your cities

00:22:52 --> 00:22:58
or new examples the architectures may

00:22:55 --> 00:22:59
change and we want to recently find that

00:22:57 --> 00:23:02
and keep evolving that without too much

00:22:58 --> 00:23:03
effort right so so we worked with the

00:23:01 --> 00:23:07
Google researchers and they had a strong

00:23:02 --> 00:23:09
work where they invented well they

00:23:06 --> 00:23:13
developed a system that searched the

00:23:08 --> 00:23:15
space of architectures and found a set

00:23:12 --> 00:23:18
of components of neural networks it's a

00:23:14 --> 00:23:20
small sub Network called mast cell and

00:23:17 --> 00:23:22
this is a diagram of a nerve cell it's a

00:23:19 --> 00:23:24
such set of layers put together that you

00:23:21 --> 00:23:25
can then replicate in the network to

00:23:23 --> 00:23:27
build a larger Network and they

00:23:24 --> 00:23:30
discovered in a small vision dataset it

00:23:26 --> 00:23:31
was called C 410 it has its it's from

00:23:29 --> 00:23:33
the early days of deep learning

00:23:30 --> 00:23:35
it was a very popular date set and you

00:23:32 --> 00:23:38
can quickly trade models and and explore

00:23:34 --> 00:23:41
the large search space so the first

00:23:37 --> 00:23:44
hing we did is it took some problems in

00:23:40 --> 00:23:45
that we have for our stack one of them

00:23:43 --> 00:23:48
being lighter segmentation so you have a

00:23:44 --> 00:23:51
map representation and some lighter

00:23:47 --> 00:23:53
points and you essentially Sigma and the

00:23:50 --> 00:23:55
lighter points you say this is this

00:23:52 --> 00:23:57
point is part of a vehicle that point is

00:23:54 --> 00:24:01
part of vegetation and so on this is a

00:23:56 --> 00:24:07
standard problem so what we first did it

00:24:00 --> 00:24:10
way mo is we explored several hundred

00:24:06 --> 00:24:14
mast cell combinations to see what

00:24:09 --> 00:24:16
performs better on this task and we

00:24:13 --> 00:24:18
thought one of two things happened for

00:24:15 --> 00:24:20
the various versions that we found one

00:24:17 --> 00:24:22
of them is we can find models with

00:24:19 --> 00:24:26
similar quality but much lower latency

00:24:21 --> 00:24:28
and less compute and then there is

00:24:25 --> 00:24:30
models of a bit higher quality at the

00:24:27 --> 00:24:32
same latency it's essentially we found

00:24:29 --> 00:24:35
better models than the human engineers

00:24:31 --> 00:24:39
did and similar results were obtained

00:24:34 --> 00:24:41
for added problems Lane detection as

00:24:38 --> 00:24:43
well with this transfer learning

00:24:40 --> 00:24:45
approach of course you can also do

00:24:42 --> 00:24:48
entrant architecture search so there's

00:24:44 --> 00:24:51
no reason why what was found on C 410 is

00:24:47 --> 00:24:55
best suited for our more specialized

00:24:50 --> 00:24:57
problems and so we went about this more

00:24:54 --> 00:25:01
from the ground up so let's find exactly

00:24:56 --> 00:25:01
deeper search much much larger space

00:25:00 --> 00:25:05
not limited to the nest cells themselves

00:25:02 --> 00:25:08
and so the way to do this is because our

00:25:04 --> 00:25:10
networks are trained on quite a lot of

00:25:07 --> 00:25:12
data and take quite a while to converge

00:25:09 --> 00:25:14
and it takes some compute we went to

00:25:11 --> 00:25:17
define the proxy task this is a smaller

00:25:13 --> 00:25:20
task simplified but correlates with the

00:25:16 --> 00:25:22
larger task and we do this by some

00:25:19 --> 00:25:24
xperimentation of what would be a proxy

00:25:21 --> 00:25:27
task and once we establish a proxy task

00:25:23 --> 00:25:28
now we execute the search algorithms

00:25:26 --> 00:25:31
developed by the Google researchers and

00:25:27 --> 00:25:34
so we train up to 10,000 architectures

00:25:30 --> 00:25:37
with different topology and capacity and

00:25:33 --> 00:25:39
once we find the top hundred models now

00:25:36 --> 00:25:42
e train the large networks on those

00:25:38 --> 00:25:45
models all the way and pick the best

00:25:41 --> 00:25:47
ones right and so this way we can

00:25:44 --> 00:25:50
explore much larger space of network

00:25:46 --> 00:25:53
architectures so what happened so on the

00:25:49 --> 00:25:55
Left this is 4,000 different models

00:25:52 --> 00:25:58
panning the scale and latency and

00:25:54 --> 00:26:00
quality and in red was the transfer

00:25:57 --> 00:26:02
model so act after the first round of

00:25:59 --> 00:26:03
search we actually did not produce the

00:26:01 --> 00:26:06
better model than the transfer which

00:26:02 --> 00:26:07
already leveraged their insight so then

00:26:05 --> 00:26:10
we took the learnings and the best

00:26:06 --> 00:26:11
models from this search and did the

00:26:09 --> 00:26:13
second round the search which was in

00:26:10 --> 00:26:17
yellow which allowed us to beat it in

00:26:12 --> 00:26:19
third is we also executed reinforcement

00:26:16 --> 00:26:21
learning algorithm developed by their

00:26:18 --> 00:26:24
esearchers on 6,000 different

00:26:20 --> 00:26:26
architectures and that one was able to

00:26:23 --> 00:26:30
significantly improve on the red dot

00:26:25 --> 00:26:33
which also significantly improves on the

00:26:29 --> 00:26:35
in-house algorithm

00:26:32 --> 00:26:39
so that's one example where

00:26:34 --> 00:26:42
infrastructure data and models combine

00:26:38 --> 00:26:47
and shows how you can keep automating

00:26:41 --> 00:26:49
the factory that is all good but we keep

00:26:46 --> 00:26:51
finding new examples in the world and

00:26:48 --> 00:26:54
for some situations we have fairly few

00:26:50 --> 00:26:56
examples as well right and so there are

00:26:53 --> 00:26:59
cases where the models are uncertain or

00:26:55 --> 00:27:01
potentially can make mistakes and you

00:26:58 --> 00:27:03
need to be robust to those I mean you

00:27:00 --> 00:27:06
cannot put the product and say well our

00:27:02 --> 00:27:09
network just don't handle some case and

00:27:05 --> 00:27:11
it's so so we have designed a system to

00:27:08 --> 00:27:13
be robust even when ml is not

00:27:10 --> 00:27:15
particularly confident and how do you do

00:27:12 --> 00:27:18
this so one part is of course you want

00:27:14 --> 00:27:20
redundant in complementary sensors so we

00:27:17 --> 00:27:22
have given 360-degree field of view on

00:27:19 --> 00:27:23
our vehicles both in camera lighter and

00:27:21 --> 00:27:26
radar and they're complementary

00:27:22 --> 00:27:28
modalities first of all you know an

00:27:25 --> 00:27:29
object is seen in all of them second of

00:27:27 --> 00:27:32
all they all have different strengths

00:27:28 --> 00:27:33
and different modes of failure and so

00:27:31 --> 00:27:36
whenever one of them tends to fail the

00:27:32 --> 00:27:37
others usually work fine and so that

00:27:35 --> 00:27:40
helps a lot make sure we do not

00:27:36 --> 00:27:40
miss anything

00:27:39 --> 00:27:45
also we design our system to be a hybrid

00:27:42 --> 00:27:48
system and this is the point I want to

00:27:44 --> 00:27:52
make right so I mean some of these

00:27:47 --> 00:27:53
mapping problems or you know problems

00:27:51 --> 00:27:55
with nutria player models are very

00:27:52 --> 00:27:57
complicated they're high dimensional the

00:27:54 --> 00:28:00
image has a lot of pixels lighter has a

00:27:56 --> 00:28:04
lot of lighter points right the networks

00:27:59 --> 00:28:06
can end up pretty big and it may not be

00:28:03 --> 00:28:07
so easy to train with very few examples

00:28:05 --> 00:28:09
with the current state of the art and so

00:28:06 --> 00:28:11
the state of the art keeps improving of

00:28:08 --> 00:28:14
course so this is their zero short and

00:28:10 --> 00:28:16
one-shot learning but we can also well

00:28:13 --> 00:28:18
the state of the art is improving in the

00:28:15 --> 00:28:19
models we can also leverage expert

00:28:17 --> 00:28:24
domain knowledge and so what does that

00:28:18 --> 00:28:26
do so humans can help develop the right

00:28:23 --> 00:28:28
input representations they can put an

00:28:25 --> 00:28:30
expert bias that constrains the

00:28:27 --> 00:28:32
representation to fewer parameters that

00:28:29 --> 00:28:34
already describe the task and then with

00:28:31 --> 00:28:39
at bias it is easier to learn models

00:28:33 --> 00:28:41
with fewer examples and there is also of

00:28:38 --> 00:28:42
course experts can put in their

00:28:40 --> 00:28:44
knowledge in terms of designing the

00:28:41 --> 00:28:47
algorithm which incorporates it as well

00:28:43 --> 00:28:49
right and so our system is this hybrid

00:28:46 --> 00:28:54
it's an example of what that looks for

00:28:48 --> 00:28:56
perception is well with no matter if the

00:28:53 --> 00:28:58
re's cases where the machine learning

00:28:55 --> 00:29:00
system may be not confident we still

00:28:57 --> 00:29:04
have tracks and obstacles from leather

00:28:59 --> 00:29:06
and radar scans and we make sure that we

00:29:03 --> 00:29:08
drive relative to those safely and in

00:29:05 --> 00:29:11
prediction and planning if we're not

00:29:07 --> 00:29:14
confident in our predictions we can

00:29:10 --> 00:29:16
drive more conservatively and over time

00:29:13 --> 00:29:17
as the factory is running and our models

00:29:15 --> 00:29:19
become more powerful of course improve

00:29:16 --> 00:29:24
and we get more data of all the cases

00:29:18 --> 00:29:27
the scope of ml grows right and the

00:29:23 --> 00:29:31
sister the the set of cases that you can

00:29:26 --> 00:29:33
handle with it increases and so there's

00:29:30 --> 00:29:34
two ways to attract attack the tail you

00:29:32 --> 00:29:36
both protect against it but you also

00:29:33 --> 00:29:40
keep growing ml and making a system more

00:29:35 --> 00:29:43
performant I'm going to tell you now how

00:29:39 --> 00:29:44
e deal with large-scale testing which

00:29:42 --> 00:29:47
is another key problem it's very

00:29:43 --> 00:29:51
important in in the pipeline and also in

00:29:46 --> 00:29:54
getting the vehicles on the road so how

00:29:50 --> 00:29:55
do you normally develop a self-driving

00:29:53 --> 00:29:58
algorithm well the ideal thing you're

00:29:54 --> 00:30:00
gonna do is you make your algorithm

00:29:57 --> 00:30:03
change and you would put it on the

00:29:59 --> 00:30:05
vehicle and drive a bunch and say now it

00:30:02 --> 00:30:07
looks in great alright let's make the

00:30:04 --> 00:30:11
next one the problem is I mean we have a

00:30:06 --> 00:30:13
big fleet we have a lot of data but some

00:30:10 --> 00:30:16
of the conditions and situations occur

00:30:12 --> 00:30:18
very very rarely and so if you do this

00:30:15 --> 00:30:20
you're gonna wait a long time

00:30:17 --> 00:30:22
furthermore you don't just want to take

00:30:19 --> 00:30:24
your code and put it on a vehicle you

00:30:21 --> 00:30:26
need to test it even before that you

00:30:23 --> 00:30:28
don't want to like you want very

00:30:25 --> 00:30:31
strongly tested code in public streets

00:30:27 --> 00:30:36
o you can do structured testing we have

00:30:30 --> 00:30:39
a 90 acres air force base place where we

00:30:35 --> 00:30:42
can test very important situations and

00:30:38 --> 00:30:47
situations that occur rarely it's an

00:30:41 --> 00:30:48
example of such a situation and so you

00:30:46 --> 00:30:52
can do this as well so you can select

00:30:47 --> 00:30:55
and deliberately staged safely

00:30:51 --> 00:30:59
conditions occur but now again you

00:30:54 --> 00:31:06
cannot do spore all situations so what

00:30:58 --> 00:31:08
do you do a simulator right and so how

00:31:05 --> 00:31:11
much we need to simulate well we

00:31:07 --> 00:31:13
simulate a lot so we simulate the

00:31:10 --> 00:31:20
quivalent of 25,000 cars virtual cars

00:31:12 --> 00:31:20
driving ten million miles a day and

00:31:20 --> 00:31:27
seven over seven billion miles simulated

00:31:23 --> 00:31:30
it's a key part of our release process

00:31:26 --> 00:31:32
o why do you need to simulate this much

00:31:29 --> 00:31:35
right well I hopefully I convinced you

00:31:31 --> 00:31:38
there is a variety of cases to worry

00:31:34 --> 00:31:43
about and that you need to test right

00:31:37 --> 00:31:45
hrough so far and furthermore it goes

00:31:42 --> 00:31:47
all the way bottom-up so as a change

00:31:44 --> 00:31:49
perception for example slightly

00:31:46 --> 00:31:52
different segmentation or detection the

00:31:48 --> 00:31:54
changes can go through the system and

00:31:51 --> 00:31:56
you know the results can change

00:31:53 --> 00:32:01
significantly and you need to be robust

00:31:55 --> 00:32:01
o this you need to test all the way so

00:32:01 --> 00:32:10
what to simulate one thing you can do is

00:32:06 --> 00:32:12
Teaneck scenarios from scratch working

00:32:09 --> 00:32:15
with safety experts Nitsa and analyzing

00:32:11 --> 00:32:17
water conditions in which typically lead

00:32:14 --> 00:32:18
to accidents so you can do that of

00:32:16 --> 00:32:23
course you can do it manually you can

00:32:17 --> 00:32:25
create them what else could you do well

00:32:22 --> 00:32:28
you want to leverage your driving data

00:32:24 --> 00:32:31
you have all your logs you have a bunch

00:32:27 --> 00:32:33
of situations there right so you can

00:32:30 --> 00:32:36
pick interesting situations from your

00:32:32 --> 00:32:38
logs and furthermore what you can do is

00:32:35 --> 00:32:40
to take all these situations and you any

00:32:37 --> 00:32:43
create variations of this situation so

00:32:39 --> 00:32:46
you get even more scenarios so here's an

00:32:42 --> 00:32:49
example of a log simulation I'll play

00:32:45 --> 00:32:50
Twice first time look at the image this

00:32:48 --> 00:32:54
what happened in the real world the

00:32:49 --> 00:32:56
first time so in the real world we

00:32:53 --> 00:32:59
mostly stayed in the middle lane and

00:32:55 --> 00:33:02
stopped if you see what's happened in

00:32:58 --> 00:33:05
simulation simulation our algorithm

00:33:01 --> 00:33:07
decided this time to merge to the left

00:33:04 --> 00:33:12
lane and stopped and everything was fine

00:33:06 --> 00:33:15
things were safe things were happy what

00:33:11 --> 00:33:19
can go wrong in simulation from logs

00:33:14 --> 00:33:22
well let's say this is another scenario

00:33:18 --> 00:33:24
slightly different visualization our

00:33:21 --> 00:33:27
vehicle when it drove the real world was

00:33:23 --> 00:33:29
where the green vehicle is now in

00:33:26 --> 00:33:33
simulation we drop differently and we

00:33:28 --> 00:33:41
have the blue vehicle right and so we're

00:33:32 --> 00:33:41
driving BAM what happened well there is

00:33:40 --> 00:33:44
a purple

00:33:40 --> 00:33:46
they're pasty purple agent who in the

00:33:43 --> 00:33:49
real world saw that we passed them

00:33:45 --> 00:33:51
safely and so it was safe for them to go

00:33:48 --> 00:33:53
but it's no longer safe because we

00:33:50 --> 00:33:56
changed what we did so the insight is in

00:33:52 --> 00:33:57
simulation our actions affect the

00:33:55 --> 00:34:03
nvironment and it need to be accounted

00:33:56 --> 00:34:05
for so what does that mean if you want

00:34:02 --> 00:34:07
o have effective simulations on a large

00:34:04 --> 00:34:11
scale you need to simulate realistic

00:34:06 --> 00:34:13
driver and pedestrian behavior so you

00:34:10 --> 00:34:16
know you could think of a simple model

00:34:12 --> 00:34:18
well how do you do oxy or what's a good

00:34:15 --> 00:34:20
approximation of a realistic behavior

00:34:17 --> 00:34:23
well you can do a break and swerve model

00:34:19 --> 00:34:26
so you just say well there is some

00:34:22 --> 00:34:28
normal way reactions happen you know I

00:34:25 --> 00:34:30
have a reaction time and braking profile

00:34:27 --> 00:34:31
it may be swerving profile so if an

00:34:29 --> 00:34:34
agency someone in front of them maybe

00:34:30 --> 00:34:35
they just apply it is an algorithm all

00:34:33 --> 00:34:37
right hopefully I convinced you that

00:34:34 --> 00:34:39
behavior can be fairly complicated in

00:34:36 --> 00:34:41
this will not always produce a

00:34:38 --> 00:34:44
believable reaction especially is

00:34:40 --> 00:34:48
complex interactive cases such as merges

00:34:43 --> 00:34:51
lane changes intersections and so on

00:34:47 --> 00:34:55
right so what could you do

00:34:50 --> 00:34:57
you could learn an agent from real

00:34:54 --> 00:34:58
demonstrations well you went and

00:34:56 --> 00:35:00
collected all this data in the world you

00:34:57 --> 00:35:05
have a bunch of it information of how

00:34:59 --> 00:35:08
vehicles pedestrians behave you can

00:35:04 --> 00:35:10
learn the model and use that okay so

00:35:07 --> 00:35:14
what is an agent let's look a little bit

00:35:09 --> 00:35:18
an agent receives sends the information

00:35:13 --> 00:35:21
maybe context about the environment and

00:35:17 --> 00:35:24
it develops a policy it develops a

00:35:20 --> 00:35:26
reaction that's the driver agent in

00:35:23 --> 00:35:29
applies acceleration is steering then

00:35:25 --> 00:35:32
gets new sensor information new map

00:35:28 --> 00:35:34
information place in the map and it

00:35:31 --> 00:35:35
continues and if it's our own vehicle

00:35:33 --> 00:35:37
then you also have a router that's in

00:35:34 --> 00:35:40
explicit intent generator which says

00:35:36 --> 00:35:41
well the passenger wants you to go over

00:35:39 --> 00:35:44
there why don't we try to make a right

00:35:41 --> 00:35:47
urn now so you also get an intent and

00:35:43 --> 00:35:48
this is an agent you know it could be in

00:35:46 --> 00:35:50
simulation it could be in the real world

00:35:47 --> 00:35:51
roughly this is the picture and this is

00:35:49 --> 00:35:53
an end-to-end agent end to end learning

00:35:50 --> 00:35:55
is popular right to its best

00:35:52 --> 00:35:58
approximation if you learn

00:35:54 --> 00:36:00
a good policy this way you can apply it

00:35:57 --> 00:36:03
and have very believable agent reactions

00:35:59 --> 00:36:04
right and so I'm going to tell you a

00:36:02 --> 00:36:06
little bit about work we did in this

00:36:03 --> 00:36:09
direction so we put a paper on archive

00:36:05 --> 00:36:13
about a month ago I believe on we took

00:36:08 --> 00:36:16
60 hours of footage of driving and we

00:36:12 --> 00:36:19
try to see how well we can imitate it

00:36:15 --> 00:36:21
using a deep neural network all right

00:36:18 --> 00:36:23
and so one option is to do exactly the

00:36:20 --> 00:36:28
same to antigen policy but we wanted to

00:36:22 --> 00:36:29
make a task easier how well we have a

00:36:27 --> 00:36:32
good perception system at Weymouth so

00:36:28 --> 00:36:35
why don't we use its products for that

00:36:31 --> 00:36:37
agent also can simplify the input

00:36:34 --> 00:36:40
representation a bit that is good if

00:36:36 --> 00:36:41
bigdhaas becomes easier controllers are

00:36:39 --> 00:36:43
well understood we can use an existing

00:36:40 --> 00:36:45
controller so no need to worry about

00:36:42 --> 00:36:50
acceleration and arcs we can generate

00:36:44 --> 00:36:52
trajectories now if you want to see in a

00:36:49 --> 00:36:54
little more detail to understand the

00:36:51 --> 00:36:56
representation is so we have this is our

00:36:53 --> 00:36:58
agent vehicle which is sub driving

00:36:55 --> 00:37:01
vehicle in this case but could be a

00:36:57 --> 00:37:03
simulation agent and we render an image

00:37:00 --> 00:37:05
with it at the center and potentially we

00:37:02 --> 00:37:08
augment it with some we can we can

00:37:04 --> 00:37:09
generate a little bit of rotation to the

00:37:07 --> 00:37:13
image just so we don't over bias

00:37:08 --> 00:37:15
the orientation a specific way all right

00:37:12 --> 00:37:17
and it's an 80 by 80 box so we roughly

00:37:14 --> 00:37:20
see about 60 meters in front of us and

00:37:16 --> 00:37:23
40 meters to the side in the center and

00:37:19 --> 00:37:26
now we render a road map in this box

00:37:22 --> 00:37:28
which is the map like which lanes you're

00:37:25 --> 00:37:31
allowed to drive on these traffic lights

00:37:27 --> 00:37:32
and generally at intersections we render

00:37:30 --> 00:37:34
what lanes are allowed to go and what

00:37:31 --> 00:37:37
lanes and how the traffic lights

00:37:33 --> 00:37:41
permitted or do not permit it then you

00:37:36 --> 00:37:44
can render speed limits the objects

00:37:40 --> 00:37:46
result of your perception system you

00:37:43 --> 00:37:50
render your current vehicle where it

00:37:45 --> 00:37:53
believes it is and you render the post

00:37:49 --> 00:37:54
history so you you give an image of

00:37:52 --> 00:37:58
where the agents been in the last for a

00:37:53 --> 00:38:00
few steps and so you want and last but

00:37:57 --> 00:38:03
not least you render the intent so the

00:37:59 --> 00:38:04
intent is where you want to go so the

00:38:02 --> 00:38:07
conditions on this intent and this input

00:38:03 --> 00:38:08
you want to predict the future waypoints

00:38:06 --> 00:38:09
for this vehicle right so that's the

00:38:07 --> 00:38:11
task

00:38:08 --> 00:38:15
and you can praise it as a supervised

00:38:10 --> 00:38:16
learning problem man just learn to learn

00:38:14 --> 00:38:18
a policy with this network that

00:38:15 --> 00:38:21
approximates what you've seen in the

00:38:17 --> 00:38:25
world with 60 hours of date course

00:38:20 --> 00:38:27
learning agents there is a well-known

00:38:24 --> 00:38:31
problem it's identified it's called

00:38:26 --> 00:38:33
paper dagger by Stephane Ross who is

00:38:30 --> 00:38:36
actually way more now and Andrew Pannell

00:38:32 --> 00:38:37
so it's easy to make small errors over

00:38:35 --> 00:38:39
time so even though in each step if you

00:38:36 --> 00:38:40
do if you could do a relatively good

00:38:38 --> 00:38:42
estimate if it strings 10 steps together

00:38:39 --> 00:38:46
you can end up very different from where

00:38:41 --> 00:38:49
agents have been before right and there

00:38:45 --> 00:38:51
is techniques to handle this right one

00:38:48 --> 00:38:54
thing we did is synthesize perturbations

00:38:50 --> 00:38:56
o you have a trajectory and we

00:38:53 --> 00:38:57
synthesize the form the trajectory and

00:38:55 --> 00:39:00
force the vehicle to learn to come back

00:38:57 --> 00:39:02
to the middle of the way so that's

00:38:59 --> 00:39:05
omething you can do that's reasonable

00:39:01 --> 00:39:08
now you know if you just have direct

00:39:04 --> 00:39:10
imitation based in supervision we are

00:39:07 --> 00:39:12
trying to pass the vehicle in the street

00:39:09 --> 00:39:18
and it's stopping and never continuing

00:39:11 --> 00:39:21
so now we did perturbations and well it

00:39:17 --> 00:39:23
kind of ran through the vehicle right so

00:39:20 --> 00:39:26
that's not enough so we need more right

00:39:22 --> 00:39:27
it's not actually an easy problem so in

00:39:25 --> 00:39:30
addition to having this

00:39:26 --> 00:39:33
agent RNN which essentially takes the

00:39:29 --> 00:39:35
past and keeps creates memory of its

00:39:32 --> 00:39:38
past decisions and keeps iterating

00:39:34 --> 00:39:40
predicting multiple points in the future

00:39:37 --> 00:39:41
so it predicts the trajectory piecemeal

00:39:39 --> 00:39:45
in the future

00:39:40 --> 00:39:47
how about we also learn about collisions

00:39:44 --> 00:39:49
and staying on the road and so on so

00:39:46 --> 00:39:51
we've meant the network and now the

00:39:48 --> 00:39:53
network starts also produce predicting a

00:39:50 --> 00:39:58
mask for the road and now we have a loss

00:39:52 --> 00:40:00
here I don't know if I can point so here

00:39:57 --> 00:40:02
you have a road mask loss you say hey if

00:39:59 --> 00:40:03
you driver generate motions that take

00:40:01 --> 00:40:06
outside the road that's probably not

00:40:02 --> 00:40:09
good hey if you ever cause collisions

00:40:05 --> 00:40:11
where your perception network which

00:40:08 --> 00:40:13
takes takes the other objects and

00:40:10 --> 00:40:16
predicts their motions to predict here

00:40:12 --> 00:40:19
our motion where the road is in the

00:40:15 --> 00:40:20
other agents motion in the future and

00:40:18 --> 00:40:21
they're trying to make sure there's no

00:40:19 --> 00:40:23
collisions in that we stay on the road

00:40:20 --> 00:40:25
so you add this structural

00:40:22 --> 00:40:28
that adds a lot more constraints to the

00:40:24 --> 00:40:29
system as it trains so it's not

00:40:27 --> 00:40:31
just limited but what's it with what

00:40:28 --> 00:40:32
it's explicitly seeing it allows it to

00:40:30 --> 00:40:35
reason about things it has not

00:40:31 --> 00:40:37
explicitly seen as well and so now

00:40:34 --> 00:40:41
here's an example of us driving with

00:40:36 --> 00:40:42
is network and it can now it can you

00:40:40 --> 00:40:44
can see that we're predicting the future

00:40:41 --> 00:40:46
it with the yellow boxes and we're

00:40:43 --> 00:40:48
driving safely to intersections and

00:40:45 --> 00:40:50
complex scenarios actually handles a lot

00:40:47 --> 00:40:51
of scenarios very well I if you

00:40:49 --> 00:40:55
interested I welcome you to go read the

00:40:50 --> 00:40:58
paper it handles most of the simple

00:40:54 --> 00:41:00
situations fine so now we have our past

00:40:57 --> 00:41:02
wo approaches the passing a parked car

00:40:59 --> 00:41:05
one of them stops in every starts the

00:41:01 --> 00:41:07
other one hits the car now it actually

00:41:04 --> 00:41:11
handles it fine

00:41:06 --> 00:41:13
and beyond that afterwards we can stop

00:41:10 --> 00:41:16
at a stop sign happily which is the red

00:41:12 --> 00:41:17
line over there and it does all of these

00:41:15 --> 00:41:21
operations and what we did beyond this

00:41:16 --> 00:41:22
we took the system has learned to an

00:41:20 --> 00:41:25
imitation data and we actually draw our

00:41:21 --> 00:41:27
eal bueno car with it so we took it to

00:41:24 --> 00:41:30
castle their force base staging grounds

00:41:26 --> 00:41:32
and this is it driving a road it's never

00:41:29 --> 00:41:34
seen before and stopping at stop signs

00:41:31 --> 00:41:37
and so so that's all great we could use

00:41:33 --> 00:41:39
it as an agent simulation world and we

00:41:36 --> 00:41:42
could drive a car with it but it has

00:41:38 --> 00:41:46
ome issues so let's look on the left so

00:41:41 --> 00:41:48
here it is driving and then it was

00:41:45 --> 00:41:50
driving too fast so because our range is

00:41:47 --> 00:41:53
limited it didn't know it had to make a

00:41:49 --> 00:41:54
turn in it over and the third so it just

00:41:52 --> 00:41:58
drove off the road that's one thing that

00:41:53 --> 00:42:00
can happen so you know when one area of

00:41:57 --> 00:42:04
improvement more range hears it is

00:41:59 --> 00:42:07
another time so yellow is by the way

00:42:03 --> 00:42:08
what we did in the real world and green

00:42:06 --> 00:42:13
is what we do in the simulation in that

00:42:07 --> 00:42:14
example and here we're trying to execute

00:42:12 --> 00:42:17
a complex maneuver a u-turn we're

00:42:13 --> 00:42:20
sitting there and we don't try to do it

00:42:16 --> 00:42:24
and we almost do it but not quite and at

00:42:19 --> 00:42:26
least we end up in the driveway and

00:42:23 --> 00:42:28
there is that the interactive situations

00:42:25 --> 00:42:30
when they get really complex this

00:42:27 --> 00:42:35
network also does not do too well right

00:42:29 --> 00:42:36
and so what does that tell us well long

00:42:34 --> 00:42:39
tale came again

00:42:35 --> 00:42:42
testing right there's again you can

00:42:39 --> 00:42:45
learn the policy for a lot of the common

00:42:41 --> 00:42:46
situations but actually in testing some

00:42:44 --> 00:42:48
of the things you really care about is

00:42:45 --> 00:42:49
the long tail you want to test to the

00:42:47 --> 00:42:51
corner cases you want to test in the

00:42:48 --> 00:42:53
scenarios where someone is obnoxious and

00:42:50 --> 00:42:58
adversarial and there's something not

00:42:52 --> 00:43:01
oo kosher right so one way to think of

00:42:57 --> 00:43:03
it is this right this is the

00:43:00 --> 00:43:05
distribution of human behavior and of

00:43:02 --> 00:43:09
course it goes in multiple axis it could

00:43:04 --> 00:43:12
be you know aggressive and conservative

00:43:08 --> 00:43:14
right and then somewhere in between you

00:43:11 --> 00:43:15
could be super expert driver is super

00:43:13 --> 00:43:19
inexperienced and somewhere in between

00:43:15 --> 00:43:24
and so on so like our end-to-end model

00:43:18 --> 00:43:26
it's fairly it's an ambassador's Entei

00:43:23 --> 00:43:28
ssin meaning it could in theory learn

00:43:25 --> 00:43:29
any policy right I mean if you see

00:43:27 --> 00:43:32
verything you want to know about the

00:43:28 --> 00:43:34
nvironment by and large but it's

00:43:31 --> 00:43:36
complex and this is similar a bit to the

00:43:33 --> 00:43:37
models as well some of the models we

00:43:35 --> 00:43:39
talked about before you can end up with

00:43:36 --> 00:43:41
complex model if you have complex input

00:43:38 --> 00:43:43
his is images that are 80 by 80 with

00:43:40 --> 00:43:44
multiple channels it's a large input

00:43:42 --> 00:43:46
space the model can have tens of

00:43:43 --> 00:43:48
millions of parameters now if you have

00:43:45 --> 00:43:50
an example if you have a case where you

00:43:47 --> 00:43:52
have two or three examples in your whole

00:43:49 --> 00:43:54
60 hours of driving there's no guarantee

00:43:51 --> 00:43:57
that your 10 million parameter model

00:43:53 --> 00:43:58
will learn it well right and so it's

00:43:56 --> 00:44:01
really good when you have a lot of

00:43:57 --> 00:44:06
examples it's really trying to do well

00:44:00 --> 00:44:09
in those and then you have the long tail

00:44:05 --> 00:44:11
so what do you do well we can improve

00:44:08 --> 00:44:13
the representation you know we can

00:44:10 --> 00:44:15
improve our model this is you know there

00:44:12 --> 00:44:18
is a lot of room to to keep evolving

00:44:14 --> 00:44:20
this and then this area will keep

00:44:17 --> 00:44:21
expanding right and that's one good

00:44:19 --> 00:44:23
irection there is a lot of interesting

00:44:21 --> 00:44:24
questions how to do that and we're

00:44:22 --> 00:44:26
working on a lot of them is actually

00:44:23 --> 00:44:28
some exciting work hopefully I get to

00:44:25 --> 00:44:29
share with you another time something

00:44:27 --> 00:44:32
else you can do if you remember from my

00:44:28 --> 00:44:34
slide about the hybrid system when you

00:44:31 --> 00:44:36
go to the longtail you can you can do

00:44:33 --> 00:44:39
essentially a similar thing which is

00:44:35 --> 00:44:41
impler biased expert design input

00:44:38 --> 00:44:43
distribution that is much easier to

00:44:40 --> 00:44:46
learn with few examples you can also of

00:44:42 --> 00:44:49
course use expert design models

00:44:45 --> 00:44:50
and so in this case you still will

00:44:48 --> 00:44:53
produce something reasonable by

00:44:49 --> 00:44:55
inputting this human knowledge and you

00:44:52 --> 00:44:58
could have many models I mean there's

00:44:54 --> 00:44:59
not one you could just tune to various

00:44:57 --> 00:45:01
aspects of this distribution you can

00:44:58 --> 00:45:03
have little models for all the aspects

00:45:00 --> 00:45:06
you care about you can mix and match it

00:45:02 --> 00:45:10
so that's another way to do it so let me

00:45:05 --> 00:45:12
tell you about one such a model so the

00:45:09 --> 00:45:14
trajectory optimization agent so we take

00:45:11 --> 00:45:17
inspiration from a motion control theory

00:45:13 --> 00:45:20
and we want to plan a good trajectory

00:45:16 --> 00:45:22
for the vehicle the agent vehicle and

00:45:19 --> 00:45:28
that satisfies a bunch of constraints

00:45:21 --> 00:45:31
and preferences and so one insight to

00:45:27 --> 00:45:33
this is that we already know what the

00:45:30 --> 00:45:35
agent did in the environment last time

00:45:32 --> 00:45:37
so you have fairly strong idea about the

00:45:34 --> 00:45:39
intent and that helps you when you

00:45:36 --> 00:45:41
specify the preferences because you can

00:45:38 --> 00:45:44
say okay well I have give me a

00:45:40 --> 00:45:45
trajectory that minimizes some set of

00:45:43 --> 00:45:48
costs which are preferences on the

00:45:44 --> 00:45:50
trajectory typically called potentials

00:45:47 --> 00:45:52
what is the potential well at different

00:45:49 --> 00:45:55
parts of the trajectory you can add this

00:45:51 --> 00:45:57
attractor potential saying well try to

00:45:54 --> 00:45:58
go where you used to be before for

00:45:56 --> 00:46:00
example and that's the benefit of in

00:45:57 --> 00:46:04
simulation you have observed what was

00:45:59 --> 00:46:05
done so this is a bit simpler and of

00:46:03 --> 00:46:07
course you can have repeller potential

00:46:04 --> 00:46:09
don't hit things don't run into be a

00:46:06 --> 00:46:13
cause right so to first approximation

00:46:08 --> 00:46:16
that's what the roughly looks like and

00:46:12 --> 00:46:18
so now where is the learning right well

00:46:15 --> 00:46:19
it's still machine learning model there

00:46:17 --> 00:46:21
is a presentation these potentials have

00:46:18 --> 00:46:25
parameters it's the steepness of this of

00:46:20 --> 00:46:27
this curve there is sometimes they are

00:46:24 --> 00:46:28
multi-dimensional right there's there's

00:46:26 --> 00:46:33
a few parameters typically we're talking

00:46:27 --> 00:46:36
a few dozen parameters or less all right

00:46:32 --> 00:46:36
and you can learn them too so there is a

00:46:35 --> 00:46:39
technique called inverse reinforcement

00:46:36 --> 00:46:39
learning

00:46:38 --> 00:46:43
want to learn these parameters that

00:46:40 --> 00:46:44
produce trajectories that come close to

00:46:42 --> 00:46:46
the trajectories you've observed in the

00:46:43 --> 00:46:48
real world so it see if you pick a bunch

00:46:45 --> 00:46:49
of trajectories that represent certain

00:46:47 --> 00:46:52
type of behavior you want to model the

00:46:48 --> 00:46:53
tunia parameters to behave like it then

00:46:51 --> 00:46:55
you want to generate reasonable

00:46:52 --> 00:46:58
trajectories continuous in all feasible

00:46:54 --> 00:47:00
that satisfy this right and this is part

00:46:57 --> 00:47:01
of this optimization you can solve this

00:46:59 --> 00:47:04
actually and so then you can tune this

00:47:00 --> 00:47:06
agents so here's some agents I want to

00:47:03 --> 00:47:09
show you so this is a complex

00:47:05 --> 00:47:13
interactive scenario to be a course but

00:47:08 --> 00:47:15
you can see on the left is on the right

00:47:12 --> 00:47:17
is the aggressive guy blue is the agent

00:47:14 --> 00:47:21
red is our vehicle we're testing in

00:47:16 --> 00:47:23
simulation and so let me play one more

00:47:20 --> 00:47:26
time once the sense essentially on the

00:47:22 --> 00:47:27
left is the conservative driver

00:47:25 --> 00:47:32
on the right is the aggressive driver

00:47:26 --> 00:47:34
and they pass us and then use very

00:47:31 --> 00:47:37
different reactions in our vehicle so

00:47:33 --> 00:47:40
the aggressive guy went in pastas and

00:47:36 --> 00:47:42
pushed us further into that Lane and we

00:47:39 --> 00:47:44
much much later in the other case when

00:47:41 --> 00:47:46
you have a conservative driver we are in

00:47:43 --> 00:47:48
front of them and they're not bugging us

00:47:45 --> 00:47:50
and we execute with much cheerier can

00:47:47 --> 00:47:52
switch into the right lane where we want

00:47:49 --> 00:47:54
o go all right so this is agents that

00:47:51 --> 00:47:58
can test your system well now you have

00:47:53 --> 00:48:02
different scenarios in this case

00:47:58 --> 00:48:04
depending what agent you put in and I'll

00:48:01 --> 00:48:06
show you a little more scenarios so it's

00:48:03 --> 00:48:09
not just a - agent game I mean we can do

00:48:05 --> 00:48:13
things like merging from one side of the

00:48:08 --> 00:48:15
highway to the next and this type of

00:48:12 --> 00:48:17
agent can generate fairly reasonable

00:48:14 --> 00:48:18
behaviors it slow slowed down for

00:48:16 --> 00:48:20
knowing slow vehicle in front let the

00:48:17 --> 00:48:23
vehicles on this side pass you and still

00:48:19 --> 00:48:27
completes the mission and you can

00:48:22 --> 00:48:29
generate multiple futures with this

00:48:26 --> 00:48:34
agent so here's an example again on the

00:48:28 --> 00:48:35
right will be an aggressive guy right

00:48:33 --> 00:48:37
and on the left was the more

00:48:34 --> 00:48:39
conservative person the aggressive guy I

00:48:36 --> 00:48:42
found a gap between the two vehicles and

00:48:38 --> 00:48:44
just went for it right and you can test

00:48:41 --> 00:48:47
your stock this way and one more I

00:48:43 --> 00:48:49
wanted to show you is is an aggressive

00:48:46 --> 00:48:50
motorcycle driving so you can have an

00:48:48 --> 00:48:52
agent that tests

00:48:49 --> 00:48:55
you can test the reaction to motorcycle

00:48:51 --> 00:48:57
that they're weaving in the lane right

00:48:54 --> 00:49:00
so I guess what's my takeaway from this

00:48:56 --> 00:49:01
tory about testing in the longtail you

00:48:59 --> 00:49:08
need the Ministry of agents at the

00:49:00 --> 00:49:10
moment right so if you think of it right

00:49:07 --> 00:49:13
and learning from demonstration is key

00:49:09 --> 00:49:15
ou can encode some simple models by

00:49:12 --> 00:49:17
hand but ultimately it's much better the

00:49:14 --> 00:49:19
task of modeling agent behavior is

00:49:16 --> 00:49:21
complex and it's much better learned and

00:49:18 --> 00:49:23
so here's the space the models so you

00:49:20 --> 00:49:25
can have not learned you can just replay

00:49:22 --> 00:49:27
the log like a show then you can you can

00:49:24 --> 00:49:29
have design trajectories for agents -

00:49:26 --> 00:49:31
for this reaction do this for that

00:49:28 --> 00:49:33
reaction do that then you can have the

00:49:30 --> 00:49:34
break and swirl model that mostly

00:49:32 --> 00:49:37
there's someone in front of an agent

00:49:33 --> 00:49:39
just does it deterministic break

00:49:36 --> 00:49:42
trajectory optimization which I just

00:49:38 --> 00:49:43
showed now our mid to mid model and

00:49:41 --> 00:49:45
potentially and to end top-down model

00:49:42 --> 00:49:46
top-down meaning you have like a top

00:49:44 --> 00:49:48
view of the environment there's many

00:49:45 --> 00:49:50
other representations possible this is a

00:49:47 --> 00:49:53
very interesting space ultimately I

00:49:49 --> 00:49:55
wanted to show you there's many possible

00:49:52 --> 00:49:57
agents and they have different utility

00:49:54 --> 00:50:00
and they have different number of

00:49:56 --> 00:50:01
examples you need to train them with and

00:49:59 --> 00:50:03
so one other takeaway I wanted to tell

00:50:00 --> 00:50:06
you is smart agents are critical photon

00:50:02 --> 00:50:09
and it's scale this is something I truly

00:50:05 --> 00:50:10
believe working in the space and this

00:50:08 --> 00:50:13
line of direction is exciting and

00:50:09 --> 00:50:16
ultimately one of the exciting problems

00:50:12 --> 00:50:19
that there's still a lot of interesting

00:50:15 --> 00:50:21
progress to be made and why well you

00:50:18 --> 00:50:23
have accurate models of human behavior

00:50:20 --> 00:50:25
of drivers and pedestrians and they help

00:50:22 --> 00:50:27
achieve several things first you will do

00:50:24 --> 00:50:29
better decisions when you drive yourself

00:50:26 --> 00:50:31
you'll be able to anticipate what others

00:50:28 --> 00:50:34
will do better and that will be helpful

00:50:30 --> 00:50:36
second you can develop a robust

00:50:33 --> 00:50:38
simulation environment with those

00:50:35 --> 00:50:41
insights also very important

00:50:37 --> 00:50:43
hird well our vehicle is also one more

00:50:40 --> 00:50:45
agent in the environment it's an agent

00:50:42 --> 00:50:48
we have more control than the others but

00:50:44 --> 00:50:51
a lot of this inside supply and so this

00:50:47 --> 00:50:54
very exciting and interesting so I

00:50:50 --> 00:50:56
wanted to finish the talk just maybe as

00:50:53 --> 00:50:59
a mental exercise right when you think

00:50:55 --> 00:51:02
of a system that is tackling a complex

00:50:58 --> 00:51:03
AI challenge like self-driving what is

00:51:01 --> 00:51:04
the good properties of the system to

00:51:02 --> 00:51:07
have and how do you think

00:51:03 --> 00:51:09
a scalable system and to me there's this

00:51:06 --> 00:51:11
mental test right we want to grow and

00:51:08 --> 00:51:13
handle and you know bring our service to

00:51:10 --> 00:51:15
more and more environments more and more

00:51:12 --> 00:51:18
cities how do you scale to dozens or

00:51:14 --> 00:51:20
hundreds of cities so as we talked about

00:51:17 --> 00:51:23
he longtail each new environment can

00:51:19 --> 00:51:25
bring new challenges and they can be

00:51:22 --> 00:51:26
complex intersections and cities like

00:51:24 --> 00:51:27
Paris

00:51:25 --> 00:51:29
there's our Lombard Street in San

00:51:26 --> 00:51:32
Francisco and from there there's narrow

00:51:28 --> 00:51:34
streets in European towns there's all

00:51:31 --> 00:51:36
kinds as the long tails keep keeps

00:51:33 --> 00:51:38
coming as you keep driving your

00:51:35 --> 00:51:40
environments in Pittsburgh people drive

00:51:37 --> 00:51:43
the famous Pittsburgh left they take

00:51:39 --> 00:51:45
different precedence than usual the

00:51:42 --> 00:51:48
local customs of driving of behaving all

00:51:44 --> 00:51:49
of this needs to be accounted for as you

00:51:47 --> 00:51:51
expand and this makes the system

00:51:48 --> 00:51:53
potentially more complex or easier

00:51:50 --> 00:51:55
harder to turn to all environments right

00:51:52 --> 00:51:57
but it's important because ultimately

00:51:54 --> 00:51:59
that's the only way you can scale so how

00:51:56 --> 00:52:03
do you what should the scalable process

00:51:58 --> 00:52:06
do so in my mind you let's say have a

00:52:02 --> 00:52:08
very good sobriety system I mean this

00:52:05 --> 00:52:09
very much parallels the factory analogy

00:52:07 --> 00:52:12
I'm just going to repeat it one more

00:52:08 --> 00:52:14
time you take your vehicles we put a

00:52:11 --> 00:52:16
bunch of women cars and we drive a long

00:52:13 --> 00:52:18
time in that environment with drivers

00:52:15 --> 00:52:20
maybe 30 days maybe more at least that

00:52:17 --> 00:52:22
long

00:52:19 --> 00:52:25
and you collect all the data right and

00:52:21 --> 00:52:28
then your system should be able to

00:52:24 --> 00:52:34
improve a lot on the data have collected

00:52:27 --> 00:52:36
right so drive a bunch obviously don't

00:52:33 --> 00:52:37
wanna don't want to chain the system too

00:52:35 --> 00:52:39
much in the real world while it's

00:52:36 --> 00:52:42
driving but you want train it active

00:52:38 --> 00:52:44
you've collected in data about the

00:52:41 --> 00:52:47
nvironment so it needs to be trainable

00:52:43 --> 00:52:50
and collected data it's very important

00:52:46 --> 00:52:52
for a system to be able to quantify or

00:52:49 --> 00:52:57
have a notion to elicit from it whether

00:52:51 --> 00:52:58
it's incorrect or not confident right

00:52:56 --> 00:53:00
because then you can take action and

00:52:57 --> 00:53:02
this is the important property that I

00:52:59 --> 00:53:06
think people should think of when they

00:53:01 --> 00:53:09
design systems how they listed this then

00:53:05 --> 00:53:10
you can take an action you can ask

00:53:08 --> 00:53:12
questions to raters that's fairly legit

00:53:09 --> 00:53:15
ypical active learning is a bit like

00:53:11 --> 00:53:17
this right so and it's usually based in

00:53:14 --> 00:53:18
some amount of low confidence or

00:53:16 --> 00:53:22
surprise

00:53:17 --> 00:53:24
that's the examples you want to to send

00:53:21 --> 00:53:26
and even better

00:53:23 --> 00:53:28
the system could potentially directly

00:53:25 --> 00:53:30
update itself and this is an interesting

00:53:27 --> 00:53:31
question how those systems update

00:53:29 --> 00:53:33
themselves in light of new knowledge and

00:53:30 --> 00:53:39
we have a system that clearly does this

00:53:32 --> 00:53:45
right and typically do it with reasoning

00:53:38 --> 00:53:48
and what is reasoning right so I have an

00:53:44 --> 00:53:51
swer it is one answer there's possibly

00:53:47 --> 00:53:52
others right but one way is you can

00:53:50 --> 00:53:54
check and enforce consistency of view

00:53:51 --> 00:53:55
beliefs and you can look for

00:53:53 --> 00:53:57
explanations of the world that are

00:53:54 --> 00:53:59
consistent and see if you have a

00:53:56 --> 00:54:01
mechanism in the system that can do this

00:53:58 --> 00:54:05
allows the system to improve itself

00:54:00 --> 00:54:06
without necessarily being fed purely

00:54:04 --> 00:54:09
labeled data it can improve yourself

00:54:05 --> 00:54:11
rom just collected data and I think

00:54:08 --> 00:54:13
it's interesting to think of systems

00:54:10 --> 00:54:15
where you can do reasoning and

00:54:12 --> 00:54:20
representations that these models need

00:54:14 --> 00:54:21
to have right and last but not least we

00:54:19 --> 00:54:24
need scalable training and testing

00:54:20 --> 00:54:26
infrastructure right this is part of the

00:54:23 --> 00:54:27
factory I was talking about I'm very

00:54:25 --> 00:54:29
lucky to a mode to have wonderful

00:54:26 --> 00:54:33
infrastructure

00:54:28 --> 00:54:34
and you know it allows this virtuous

00:54:32 --> 00:54:43
cycle to happen

00:54:33 --> 00:54:44
thank you appearance trouble thank you

00:54:42 --> 00:54:46
so much for the talk really appreciate

00:54:43 --> 00:54:49
it so if you were to train off of image

00:54:45 --> 00:54:52
and lidar data a synthetic imaging lidar

00:54:48 --> 00:54:54
data is there would you wait the

00:54:51 --> 00:54:56
synthetic data differently than real

00:54:53 --> 00:54:58
word real-world data when training your

00:54:55 --> 00:55:00
models so there's actually a lot of

00:54:57 --> 00:55:03
interesting research in the field there

00:54:59 --> 00:55:06
are people trained on simulator but also

00:55:02 --> 00:55:10
trained adaptation models that make

00:55:05 --> 00:55:14
simulator data look like real data right

00:55:09 --> 00:55:16
so you're essentially you're trying to

00:55:13 --> 00:55:18
build consistency or it leads to

00:55:15 --> 00:55:20
training on simulator scenarios but if

00:55:17 --> 00:55:22
you learn a mapping from simulator

00:55:19 --> 00:55:24
scenes to real scenes right you could

00:55:21 --> 00:55:26
potentially train on the transformed

00:55:23 --> 00:55:28
simulator data already that's

00:55:25 --> 00:55:30
transforming with other models there's

00:55:27 --> 00:55:32
many ways to do this ultimately right so

00:55:29 --> 00:55:36
achieving realism in simulator is an

00:55:31 --> 00:55:38
open research problem right I assume no

00:55:35 --> 00:55:42
there is a lot of rules that you have to

00:55:37 --> 00:55:46
put into a system to mate to be able to

00:55:41 --> 00:55:49
trust it you know and so how you find

00:55:45 --> 00:55:50
the balance between this automatic

00:55:48 --> 00:55:53
models that you don't get work when

00:55:49 --> 00:55:55
you're not quite sure what does I would

00:55:52 --> 00:55:58
o and rules were your shows it was but

00:55:54 --> 00:56:00
it's not scalable I mean through lots

00:55:57 --> 00:56:03
and lots of testing and analysis right

00:55:59 --> 00:56:05
so you keep you keep keeping track of

00:56:02 --> 00:56:08
the performance of your models and you

00:56:04 --> 00:56:11
see where they come short right and then

00:56:07 --> 00:56:14
those are the areas you most need expert

00:56:10 --> 00:56:16
computing to compliment right but the

00:56:13 --> 00:56:18
balance can change over time right and

00:56:15 --> 00:56:21
it's a natural process of evolution

00:56:17 --> 00:56:23
right so evolving your system as you go

00:56:20 --> 00:56:25
I mean generally you know the MLP growls

00:56:22 --> 00:56:29
is the capabilities in the data sets

00:56:24 --> 00:56:31
girl right so you stressed at the end of

00:56:28 --> 00:56:33
both the first half and the second half

00:56:30 --> 00:56:35
of your talk the importance of

00:56:32 --> 00:56:37
quantifying uncertainty and the

00:56:34 --> 00:56:39
predictions that your models are making

00:56:36 --> 00:56:41
so

00:56:38 --> 00:56:44
have you developed techniques for doing

00:56:40 --> 00:56:46
that with neural nets or are you using

00:56:43 --> 00:56:49
some probabilistic graphical models or

00:56:45 --> 00:56:53
something so a lot of the models and

00:56:48 --> 00:56:55
neural nets there's many ways to capture

00:56:52 --> 00:56:57
this actually I'm just going to give a

00:56:54 --> 00:56:59
general answer and not commenting on

00:56:56 --> 00:57:01
specifically what way I'll be doing I

00:56:58 --> 00:57:02
think first of all there's techniques in

00:57:00 --> 00:57:04
eural nets that can predict whether

00:57:01 --> 00:57:07
they can predict their own uncertainty

00:57:03 --> 00:57:08
fairly well right either directly

00:57:06 --> 00:57:11
regress its uncertainty for certain

00:57:07 --> 00:57:13
products or using samples of networks or

00:57:10 --> 00:57:17
dropout or techniques like this that

00:57:12 --> 00:57:19
also provide the measure of uncertainty

00:57:16 --> 00:57:21
another way of doing uncertainty is to

00:57:18 --> 00:57:24
leverage constraints in the environment

00:57:20 --> 00:57:27
so if you have temporal sequences right

00:57:23 --> 00:57:30
you don't want for example objects to

00:57:26 --> 00:57:32
appear or disappear or generally

00:57:29 --> 00:57:34
unreasonable changes and in the

00:57:31 --> 00:57:37
nvironment or inconsistent prediction

00:57:33 --> 00:57:39
in your models a good areas to look I'm

00:57:36 --> 00:57:41
just wondering do you guys train and

00:57:38 --> 00:57:44
eploy different models depending on

00:57:40 --> 00:57:47
where the car is driving like what city

00:57:43 --> 00:57:52
or do you train and deploy a single

00:57:46 --> 00:57:54
model that adapts to most scenarios well

00:57:51 --> 00:57:57
ideally you would have a lot of the

00:57:53 --> 00:57:59
adapts to most scenarios then you know a

00:57:56 --> 00:58:01
complement is needed yeah so first off

00:57:58 --> 00:58:03
thanks for your talk I find the

00:58:00 --> 00:58:05
simulator work really really exciting

00:58:02 --> 00:58:08
and I was wondering if you could either

00:58:04 --> 00:58:10
talk about talk more about or maybe

00:58:07 --> 00:58:13
provide some insights into simulating

00:58:09 --> 00:58:14
pedestrians because as a pedestrian

00:58:12 --> 00:58:16
myself I feel like my behaviors a lot

00:58:13 --> 00:58:19
less constrained than a vehicle right

00:58:15 --> 00:58:20
and I imagine you I mean there's an

00:58:18 --> 00:58:22
advantage in that you're sensing from a

00:58:19 --> 00:58:23
vehicle and you kind of know your

00:58:21 --> 00:58:25
sensors are like the first person from a

00:58:22 --> 00:58:28
vehicle but not from a pedestrian and

00:58:24 --> 00:58:30
that's correct I mean so if you want to

00:58:27 --> 00:58:32
simulate pedestrians far away in an

00:58:29 --> 00:58:34
environment right and you want to

00:58:32 --> 00:58:37
simulate them as very high-resolution

00:58:33 --> 00:58:38
writing you've collected log data you

00:58:36 --> 00:58:42
may not have the detailed data on that

00:58:37 --> 00:58:44
pedestrian right at the same time the

00:58:41 --> 00:58:46
subtle cues for that pedestrian matter

00:58:43 --> 00:58:48
less at that distance as well because

00:58:45 --> 00:58:50
it's not like you observed them or

00:58:47 --> 00:58:52
eacted to them in the first place so

00:58:49 --> 00:58:52
there is an interesting question at what

00:58:51 --> 00:58:57
fidelity

00:58:51 --> 00:59:00
need to simulate things right and there

00:58:56 --> 00:59:03
is levels of realism in simulation that

00:58:59 --> 00:59:07
some level need to parallel what your

00:59:02 --> 00:59:08
models are paying attention thank you

00:59:06 --> 00:59:12
for the talk it was very interesting

00:59:07 --> 00:59:16
since you you know titled and talked

00:59:11 --> 00:59:19
about it long tail it makes me wonder is

00:59:15 --> 00:59:22
the bulk of the problem solved

00:59:18 --> 00:59:25
o you think well we're gonna have this

00:59:21 --> 00:59:25
figured out and within the next couple

00:59:24 --> 00:59:27
of years

00:59:24 --> 00:59:29
there can be self-driving cars

00:59:26 --> 00:59:33
everywhere or do you think it's closer

00:59:28 --> 00:59:35
to you know actually there could be

00:59:32 --> 00:59:38
decades before we've really worked out

00:59:34 --> 00:59:40
everything necessary what are your

00:59:37 --> 00:59:42
thoughts about the future it's a bit

00:59:39 --> 00:59:44
hard to that's a good question it's a

00:59:41 --> 00:59:49
bit hard to give this prognosis I think

00:59:43 --> 00:59:51
I mean I'm not completely sure I think

00:59:48 --> 00:59:53
one thing I would say is it will take a

00:59:50 --> 00:59:56
while for self-driving cars to roll out

00:59:52 --> 00:59:58
at scale right so this is not a

00:59:55 --> 01:00:00
technology that just determine a crank

00:59:57 --> 01:00:02
and appears everywhere right there's

00:59:59 --> 01:00:04
logistics and algorithms and all this

01:00:01 --> 01:00:06
tuning and testing needed to make sure

01:00:03 --> 01:00:08
it's really safe in the various

01:00:05 --> 01:00:11
environments so it will take some time

01:00:07 --> 01:00:13
when you were talking about prediction

01:00:10 --> 01:00:15
you mentioned looking at a context and

01:00:12 --> 01:00:17
saying if a person or if someone is

01:00:14 --> 01:00:18
looking at us we can assume that they

01:00:16 --> 01:00:20
will behave differently than if they're

01:00:17 --> 01:00:22
not paying attention to what we're doing

01:00:19 --> 01:00:24
potentially is that's something you're

01:00:21 --> 01:00:26
actively doing do you take into

01:00:23 --> 01:00:28
consideration as pedestrians or other

01:00:25 --> 01:00:31
participants in traffic are paying

01:00:27 --> 01:00:34
attention to your vehicles so I can't

01:00:30 --> 01:00:36
comment on our model designs too much

01:00:33 --> 01:00:37
but I think this is generally cues one

01:00:35 --> 01:00:40
eds to pay attention to they're very

01:00:36 --> 01:00:42
significant I mean you know even when

01:00:39 --> 01:00:44
people drive for example there's someone

01:00:41 --> 01:00:46
sitting in the vehicle next to you

01:00:43 --> 01:00:49
waving keep going right in these natural

01:00:45 --> 01:00:52
interactions in the environment that you

01:00:48 --> 01:00:55
know is something you need to think

01:00:51 --> 01:00:58
about in one of you first of all thank

01:00:54 --> 01:01:00
you it's really cool talk in one of your

01:00:57 --> 01:01:03
last slides you talked about resolving

01:00:59 --> 01:01:05
certain uncertainties by the means of

01:01:02 --> 01:01:07
establishing a set of beliefs and

01:01:04 --> 01:01:09
checking to see if they were consist

01:01:06 --> 01:01:12
ready that's my own theory by the way

01:01:08 --> 01:01:14
right but I feel that the concept of

01:01:11 --> 01:01:18
reasoning is under explored in deep

01:01:13 --> 01:01:20
learning and what it means right so if

01:01:17 --> 01:01:22
you read for sky Kahneman type 1 type 2

01:01:19 --> 01:01:29
reasoning we're really good at the

01:01:21 --> 01:01:34
instinctive mapping type of tasks right

01:01:28 --> 01:01:36
so likely some law to meet to maybe high

01:01:33 --> 01:01:38
level perception of the point but the

01:01:35 --> 01:01:41
reasoning part with neural networks

01:01:37 --> 01:01:46
right and generally with models that's a

01:01:40 --> 01:01:48
bit less explored I think it's long term

01:01:45 --> 01:01:53
it's fruitful that's my personal opinion

01:01:47 --> 01:01:54
right I guess the question is going to

01:01:52 --> 01:01:57
ask is if you could elaborate on that

01:01:53 --> 01:01:58
concept in connection with the models

01:01:56 --> 01:02:00
you guys are working with I guess that's

01:01:57 --> 01:02:03
o they'll to give an example from

01:01:59 --> 01:02:06
current work right and there's a lot of

01:02:02 --> 01:02:08
work on weekly supervised learning sure

01:02:05 --> 01:02:09
and that's kind of been a big topic in

01:02:07 --> 01:02:11
2018 and there were a lot of really

01:02:08 --> 01:02:13
strong papers including by Google brain

01:02:10 --> 01:02:17
and nearly angular and crew team and so

01:02:12 --> 01:02:20
n and essentially if you used to read

01:02:16 --> 01:02:22
the books about 3d reconstruction in

01:02:19 --> 01:02:25
geometry and so on alright there's a

01:02:21 --> 01:02:27
bunch of rules you can encode geometric

01:02:24 --> 01:02:30
expectations about the world so when you

01:02:26 --> 01:02:31
have video and when you have 3d outputs

01:02:29 --> 01:02:34
in your models there is certain amount

01:02:30 --> 01:02:37
of consistency one example is ego motion

01:02:33 --> 01:02:39
versus depth estimation there is a very

01:02:36 --> 01:02:41
strong constraint that if you predict

01:02:38 --> 01:02:43
he depth and you predict the gue motion

01:02:40 --> 01:02:45
correctly then you can reproject certain

01:02:42 --> 01:02:47
things and they will look good right and

01:02:44 --> 01:02:48
that's a very strong constraint that's a

01:02:46 --> 01:02:49
consistency and notice about the

01:02:47 --> 01:02:52
nvironment the expected

01:02:48 --> 01:02:54
this can help train your model right and

01:02:51 --> 01:02:56
so more of this type of reasoning may be

01:02:53 --> 01:02:59
interesting you mentioned expert design

01:02:55 --> 01:03:01
algorithms and I was wondering from your

01:02:58 --> 01:03:05
perspective almost from Wayne was

01:03:00 --> 01:03:07
perspective how important are those say

01:03:04 --> 01:03:09
non machine learning type algorithms or

01:03:06 --> 01:03:11
non machine learning type approaches to

01:03:08 --> 01:03:14
tackling the challenges of autonomous

01:03:10 --> 01:03:16
driving could you could you say how

01:03:13 --> 01:03:19
important is which aspect of them of

01:03:15 --> 01:03:21
expert design algorithms every now and

01:03:18 --> 01:03:23
then you just you sprinkle it in like

01:03:20 --> 01:03:25
here we can try expert design algorithms

01:03:22 --> 01:03:26
because we actually understand some

01:03:24 --> 01:03:29
parts of the problem and I was wondering

01:03:25 --> 01:03:30
like what is really important like for

01:03:28 --> 01:03:33
the challenges in autonomous driving

01:03:29 --> 01:03:36
outside of the field of machine learning

01:03:32 --> 01:03:37
I mean generally you want the problem is

01:03:35 --> 01:03:40
you want to be safe in the environment

01:03:36 --> 01:03:42
hat makes that makes it such that you

01:03:39 --> 01:03:46
don't want to make errors in perception

01:03:41 --> 01:03:48
prediction and planning right and the

01:03:45 --> 01:03:49
state of machine learning is not at the

01:03:47 --> 01:03:53
point where it never makes errors

01:03:48 --> 01:03:56
provided the scope that we're currently

01:03:52 --> 01:03:58
addressing and so throughout your start

01:03:55 --> 01:03:59
with the current state of machine

01:03:57 --> 01:04:02
learning it needs to be complemented

01:03:58 --> 01:04:05
right and so we've carefully done it and

01:04:01 --> 01:04:07
I think machine learning as it improves

01:04:04 --> 01:04:11
I think they'll be less and less need to

01:04:06 --> 01:04:13
do it it's somewhat effort intensive

01:04:10 --> 01:04:15
bringing especially in an evolving

01:04:12 --> 01:04:18
system to do that to have a hybrid

01:04:14 --> 01:04:21
system but right now I think this is the

01:04:17 --> 01:04:25
main thing that keeps you able to do

01:04:20 --> 01:04:26
complex behaviors in some cases for

01:04:24 --> 01:04:29
which is very hard to collect data and

01:04:25 --> 01:04:30
you still need to handle then it's then

01:04:28 --> 01:04:32
it's the right thing to do

01:04:29 --> 01:04:34
right so the way I view a time machine

01:04:31 --> 01:04:36
learning personal like I like to doing

01:04:33 --> 01:04:38
better and better that's it we're not

01:04:35 --> 01:04:39
religious it should not be we just need

01:04:37 --> 01:04:41
to solve the problem and right now the

01:04:38 --> 01:04:45
right mix is a hybrid system is my

01:04:40 --> 01:04:48
belief we're really excited to see what

01:04:44 --> 01:04:49
Wei MO has in store for us in 19 so

01:04:47 --> 01:04:52
please give drugged-up again

01:04:48 --> 01:04:54
[Applause]

01:04:51 --> 01:04:54
you

01:04:54 --> 01:04:58
[Applause]

01:05:03 --> 01:05:06
you

<!-- YOUTUBE_TRANSCRIPT_END -->
