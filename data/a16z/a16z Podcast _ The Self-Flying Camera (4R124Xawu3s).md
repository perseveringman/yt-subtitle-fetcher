---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "4R124Xawu3s"
title: "a16z Podcast | The Self-Flying Camera"
video_url: "https://www.youtube.com/watch?v=4R124Xawu3s"
thumbnail_url: "https://i.ytimg.com/vi/4R124Xawu3s/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=4R124Xawu3s"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:42:10.000Z"
upload_date: "2019-01-02"
duration_seconds: 1364
duration_human: "22:44"
view_count: 62
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:53:24.331Z"
---

# a16z Podcast | The Self-Flying Camera

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=4R124Xawu3s
- video_id: 4R124Xawu3s
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:42:10.000Z
- upload_date: 2019-01-02
- duration: 22:44
- view_count: 62
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Now that we've finally reached the age of the truly autonomous commercial small drone -- and in this case, a self-flying camera -- what happens when you take the pilot out of the loop? And what becomes possible that wasn't possible before? That's what this episode of the a16z Podcast covers, with Adam Bry, co-founder and CEO of Skydio, and a16z general partner Chris Dixon, in conversation with Hanne Tidnam.

Beginning with the evolution of the technology that got us here and then going deep under the hood into the tech that makes this possible from propellers to perception, the conversation also covers what it's like to use a drone that follows you around seamlessly; how autonomous drones are different from autonomous cars; and finally, how our relationship and interactions with computers of all kinds will change as they become increasingly powered by AI.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hi and welcome to the a 16z podcast I'm

00:00:02 --> 00:00:08
Hannah and we're talking today with Adam

00:00:04 --> 00:00:10
Bree co-founder and CEO of sky do and a

00:00:07 --> 00:00:11
16 zj neural partner Chris Dixon about

00:00:09 --> 00:00:13
what happens now that we're reaching

00:00:10 --> 00:00:16
truly autonomous drones in this case

00:00:12 --> 00:00:17
cell flying cameras what it means when

00:00:15 --> 00:00:19
you take the pilot out of the loop and

00:00:16 --> 00:00:21
what becomes possible that wasn't

00:00:18 --> 00:00:23
possible before we take a deep dive

00:00:20 --> 00:00:25
under the hood into the tech that makes

00:00:22 --> 00:00:26
this work from propellers to perception

00:00:24 --> 00:00:28
then talk about what autonomy will

00:00:25 --> 00:00:31
enable and what we can build on top of

00:00:27 --> 00:00:33
it to finally how our relationship and

00:00:30 --> 00:00:34
interactions with computers of all kinds

00:00:32 --> 00:00:37
will change as they become increasingly

00:00:33 --> 00:00:39
powered by a AI let's start by maybe

00:00:36 --> 00:00:41
talking a little bit about the evolution

00:00:38 --> 00:00:43
of drone technology where are we now

00:00:40 --> 00:00:45
hat did it take for us to get here in a

00:00:42 --> 00:00:46
lot of ways the products that we have

00:00:44 --> 00:00:48
today essentially grew out of RC

00:00:45 --> 00:00:50
airplanes and RC helicopters this is

00:00:47 --> 00:00:53
tuff that's been around for a long time

00:00:49 --> 00:00:55
30 or 40 years Electric Power was a huge

00:00:52 --> 00:00:57
transition point and then the

00:00:54 --> 00:00:59
combination of cell phone sensors with

00:00:56 --> 00:01:00
an imaging device just turned out to be

00:00:58 --> 00:01:02
very powerful and that's what's caused

00:00:59 --> 00:01:04
kind of the recent spike in attention in

00:01:01 --> 00:01:07
the space so the Hara dime with existing

00:01:03 --> 00:01:08
drones that are available today is

00:01:06 --> 00:01:11
essentially they're manually flown

00:01:07 --> 00:01:13
devices but still it required a pilot

00:01:10 --> 00:01:15
about yeah there needs to be a human

00:01:12 --> 00:01:17
learning how to use it and directing it

00:01:14 --> 00:01:19
yeah exactly you buy the thing you hold

00:01:16 --> 00:01:21
joysticks you're essentially the pilot

00:01:18 --> 00:01:23
and you're responsible for flying and

00:01:20 --> 00:01:24
controlling it and if you're an expert

00:01:22 --> 00:01:26
if you're proficient at that you can do

00:01:23 --> 00:01:28
some pretty cool things but it's a very

00:01:25 --> 00:01:29
difficult thing to master and I would

00:01:27 --> 00:01:31
say a typical experience for a lot of

00:01:28 --> 00:01:33
people is they take it out of the box

00:01:30 --> 00:01:35
and they crash it into a tree so it

00:01:32 --> 00:01:37
feels like an industry that is still

00:01:34 --> 00:01:39
very very early compared to what's

00:01:36 --> 00:01:40
physically possible there's all these

00:01:38 --> 00:01:42
great notions of what you might want to

00:01:39 --> 00:01:43
do with a drone you know on the consumer

00:01:41 --> 00:01:46
side having this camera that makes it

00:01:42 --> 00:01:48
easy to capture amazing video and for

00:01:45 --> 00:01:50
commercial applications like inspection

00:01:47 --> 00:01:52
mapping monitoring security but most of

00:01:49 --> 00:01:54
them we think at their core in order to

00:01:51 --> 00:01:57
really work and in order to really scale

00:01:53 --> 00:02:00
need an autonomous foundation and so our

00:01:56 --> 00:02:02
focus is on giving the drone the ability

00:01:59 --> 00:02:03
to fly itself intelligently which is a

00:02:01 --> 00:02:05
very simple idea but it's a very

00:02:02 --> 00:02:08
technically challenging thing to deliver

00:02:04 --> 00:02:10
on can you explain why the autonomy is

00:02:07 --> 00:02:13
o important what the human failing is

00:02:09 --> 00:02:14
that makes that change everything I mean

00:02:12 --> 00:02:17
I can use an analogy

00:02:13 --> 00:02:19
imagine if on your iPhone if you wanted

00:02:16 --> 00:02:21
to take a picture with it and you push

00:02:18 --> 00:02:23
the wrong button at the wrong time it

00:02:20 --> 00:02:25
would irreparably destroy itself I think

00:02:22 --> 00:02:27
we'd all agree that that would be like a

00:02:24 --> 00:02:29
pretty big barrier not really workable

00:02:26 --> 00:02:30
to using iPhones and there probably

00:02:28 --> 00:02:31
wouldn't be nearly as many of them out

00:02:29 --> 00:02:33
here and people probably wouldn't like

00:02:30 --> 00:02:35
them as much as they do and that's

00:02:32 --> 00:02:38
basically where we are in the drone

00:02:34 --> 00:02:40
industry now we think autonomy is a huge

00:02:37 --> 00:02:42
nabler just at that basic level of

00:02:39 --> 00:02:45
being able to trust these devices to do

00:02:41 --> 00:02:48
reasonable things in every situation it

00:02:44 --> 00:02:49
removes the need for the operator to be

00:02:47 --> 00:02:51
paying attention to it or flying it at

00:02:48 --> 00:02:53
all times which depending on what you're

00:02:50 --> 00:02:54
doing can be pretty huge I also think

00:02:52 --> 00:02:55
going back to our iphone analogy one

00:02:53 --> 00:02:58
thing the iPhone enabled because it

00:02:54 --> 00:03:00
abstracted away you know things like GPS

00:02:57 --> 00:03:02
and accelerometers and made it really

00:02:59 --> 00:03:05
easy for software developers to access

00:03:01 --> 00:03:06
those things it allowed for example an

00:03:04 --> 00:03:08
uber and lyft an Instagram and all sorts

00:03:06 --> 00:03:09
of things to focus just on the kind of

00:03:07 --> 00:03:11
application development side of things

00:03:08 --> 00:03:13
o a loud app developers to be app

00:03:10 --> 00:03:15
developers mm-hmm and provided the phone

00:03:12 --> 00:03:16
operating system provided all the

00:03:14 --> 00:03:16
functionality of the box and so

00:03:15 --> 00:03:18
longer-term

00:03:15 --> 00:03:20
in my view that you know sort of

00:03:17 --> 00:03:22
autonomy knowing the drone will avoid

00:03:19 --> 00:03:24
obstacles be able to do kind of

00:03:21 --> 00:03:27
high-level functionality like identify

00:03:23 --> 00:03:29
people and objects will eventually allow

00:03:26 --> 00:03:30
software developers to build

00:03:28 --> 00:03:33
applications in the same way they did on

00:03:29 --> 00:03:35
the phone yeah exactly the iPhone in a

00:03:32 --> 00:03:36
lot of ways it's basically the big

00:03:34 --> 00:03:38
touchscreen that you can put whatever

00:03:35 --> 00:03:39
you want on and it abstracts away the

00:03:37 --> 00:03:41
hardware and makes it possible to just

00:03:38 --> 00:03:42
use that screen to interface with the

00:03:40 --> 00:03:45
user for a bunch of different

00:03:41 --> 00:03:47
applications with drones autonomy is

00:03:44 --> 00:03:49
likely to be sort of that key layer that

00:03:46 --> 00:03:51
separates sort of the underlying physics

00:03:48 --> 00:03:52
worrying about collisions worrying about

00:03:50 --> 00:03:55
a lot of the nitty-gritty robotics

00:03:51 --> 00:03:56
navigation problems with the application

00:03:54 --> 00:03:59
so that if you wanted to do roof

00:03:55 --> 00:04:00
inspection you could be an expert in how

00:03:58 --> 00:04:03
roof inspection works and the workflows

00:03:59 --> 00:04:04
there and right for that rather than

00:04:02 --> 00:04:07
having to worry about what the drones

00:04:03 --> 00:04:09
doing for commercial applications you

00:04:06 --> 00:04:10
don't actually want a pilot flying every

00:04:08 --> 00:04:12
drone like you just want to push a

00:04:09 --> 00:04:13
button have the thing do its mission or

00:04:11 --> 00:04:15
have many of them do their missions and

00:04:12 --> 00:04:17
then get the data back that you care

00:04:14 --> 00:04:19
about and that's what autonomy will

00:04:16 --> 00:04:22
enable sort of taking that core layer

00:04:18 --> 00:04:23
and making it possible to do a lot of

00:04:21 --> 00:04:25
different kinds of things on top of it

00:04:22 --> 00:04:27
well let's talk about the autonomy is it

00:04:24 --> 00:04:28
he same kind of autonomy that goes into

00:04:26 --> 00:04:29
say

00:04:27 --> 00:04:32
self-driving cars how is it different

00:04:28 --> 00:04:35
from different modes of autonomous

00:04:31 --> 00:04:36
robotics across-the-board so in order to

00:04:34 --> 00:04:38
make a fully autonomous system we've

00:04:35 --> 00:04:40
really designed it for autonomy from the

00:04:37 --> 00:04:42
ground up so it's not sort of like an

00:04:39 --> 00:04:43
afterthought where we strapped on some

00:04:41 --> 00:04:46
xtra sensors there are a lot of

00:04:42 --> 00:04:47
similarities to self-driving cars and we

00:04:45 --> 00:04:49
call our first product a self flying

00:04:46 --> 00:04:52
camera for that reason because it's

00:04:48 --> 00:04:53
taking control itself but the way that

00:04:51 --> 00:04:55
he algorithms are designed are

00:04:52 --> 00:04:57
specifically tailored for flight so

00:04:54 --> 00:04:59
where as a car relies on the structure

00:04:56 --> 00:05:01
of the road and staying in its lane

00:04:58 --> 00:05:02
right there are certain Givens yeah

00:05:00 --> 00:05:04
there's there's a lot of Givens on the

00:05:02 --> 00:05:06
road that you can't take for granted in

00:05:03 --> 00:05:08
the air with a car your goal is

00:05:05 --> 00:05:09
basically just to follow the rules the

00:05:07 --> 00:05:11
perfect self-driving car is just gonna

00:05:08 --> 00:05:13
follow the rules and be predictable

00:05:10 --> 00:05:15
whereas with drones we do a lot of just

00:05:12 --> 00:05:16
sort of general 3d reasoning

00:05:14 --> 00:05:19
understanding the scene in every

00:05:15 --> 00:05:22
direction in any time and it's kind of a

00:05:18 --> 00:05:24
different set of challenges in some ways

00:05:21 --> 00:05:26
it's harder in some ways it's easier but

00:05:23 --> 00:05:27
it's also a regime that sort of allows

00:05:25 --> 00:05:29
for a lot more inherent freedom and

00:05:26 --> 00:05:31
there's just sort of more of a creative

00:05:28 --> 00:05:33
aspect to it it's interesting when you

00:05:30 --> 00:05:34
talk about the Givens on the road you

00:05:32 --> 00:05:36
know that you think about like a static

00:05:33 --> 00:05:38
road that you're I mean do you guys have

00:05:35 --> 00:05:39
to factor in things like wind and

00:05:37 --> 00:05:41
breezes or is that just a much older

00:05:38 --> 00:05:43
obvious technology because it's

00:05:40 --> 00:05:44
basically like a helicopter you know how

00:05:42 --> 00:05:46
do you think about moving through space

00:05:43 --> 00:05:48
like that yeah you're right I mean there

00:05:45 --> 00:05:50
are a lot of variables in play and

00:05:47 --> 00:05:52
there's a lot of things that are sort of

00:05:49 --> 00:05:54
taken for granted in manually flown

00:05:51 --> 00:05:55
drones that oh if that comes up the

00:05:53 --> 00:05:57
pilots just going to be able to deal

00:05:54 --> 00:05:59
with like what like a giant gust of wind

00:05:56 --> 00:06:01
for example or so you feel it you can

00:05:58 --> 00:06:02
see it yeah yeah if you're flying it

00:06:00 --> 00:06:04
manually in a big gust of wind comes up

00:06:02 --> 00:06:06
you'll see it and you'll respond

00:06:03 --> 00:06:07
appropriately and if you're next to a

00:06:05 --> 00:06:08
building you'll probably fly away from

00:06:06 --> 00:06:11
that building to make sure you don't get

00:06:07 --> 00:06:12
blown into it and you know if you couple

00:06:10 --> 00:06:14
that with you have a low battery or

00:06:11 --> 00:06:16
something else like there's there's just

00:06:13 --> 00:06:18
a lot of things happening and one of the

00:06:15 --> 00:06:20
challenges has been building a system

00:06:17 --> 00:06:22
that can reason intelligently in all

00:06:19 --> 00:06:24
these different situations and are you

00:06:21 --> 00:06:26
sing cameras to do that too or what are

00:06:23 --> 00:06:28
the other ways you collect instant data

00:06:25 --> 00:06:30
bout physical movement so actually when

00:06:27 --> 00:06:32
we register through a sensor called an

00:06:29 --> 00:06:34
IMU which is an inertial measurement

00:06:31 --> 00:06:36
unit so this is an example of where

00:06:33 --> 00:06:38
phone technology has kind of transferred

00:06:35 --> 00:06:40
over into robotics your phone has an IMU

00:06:37 --> 00:06:42
in it so it can tell which way is north

00:06:39 --> 00:06:44
and it can tell what it's orientation

00:06:41 --> 00:06:46
and so we use basically exactly the same

00:06:43 --> 00:06:48
component and you can actually use that

00:06:45 --> 00:06:50
o sense the force that's being applied

00:06:47 --> 00:06:52
to the vehicle externally and so it's

00:06:49 --> 00:06:54
constantly seeing the force that it's

00:06:51 --> 00:06:56
experiencing from the world and then

00:06:53 --> 00:06:57
using that to estimate what's causing

00:06:55 --> 00:06:59
that and what it should do about that

00:06:56 --> 00:07:00
and the drones are constrained on the

00:06:58 --> 00:07:01
sensors in a different way than with

00:06:59 --> 00:07:02
cars

00:07:00 --> 00:07:04
yeah there's much stricter limits around

00:07:01 --> 00:07:06
the sensing and compute than you can

00:07:03 --> 00:07:07
carry and that's because of the size of

00:07:05 --> 00:07:08
it because of the size and the weight

00:07:06 --> 00:07:10
everything that you're carrying you have

00:07:07 --> 00:07:12
to have propulsion to lift off of the

00:07:09 --> 00:07:13
ground so for example lidar is very

00:07:11 --> 00:07:15
popular with the self-driving cars and

00:07:12 --> 00:07:16
it's not feasible for drones well it's

00:07:14 --> 00:07:18
feasible for drones but it's not gonna

00:07:15 --> 00:07:20
work very well we did a lot of work with

00:07:17 --> 00:07:23
lidar but the vehicles were super heavy

00:07:19 --> 00:07:25
super expensive so when we started sky

00:07:22 --> 00:07:27
do we made a big bet on vision because

00:07:24 --> 00:07:28
we felt like the progress that's

00:07:26 --> 00:07:30
happening in computer vision now

00:07:27 --> 00:07:33
especially with deep learning but even

00:07:29 --> 00:07:36
in sort of traditional geometric vision

00:07:32 --> 00:07:37
is just super fast and the amount of

00:07:35 --> 00:07:39
information that's in images is

00:07:36 --> 00:07:41
incredibly rich extracting that

00:07:38 --> 00:07:43
information is challenging but the tools

00:07:40 --> 00:07:45
to do that keep getting better and we're

00:07:42 --> 00:07:46
ally riding that wave we have 13

00:07:44 --> 00:07:49
cameras on the device they see in every

00:07:45 --> 00:07:50
direction and then at its core it has a

00:07:48 --> 00:07:54
super powerful computer we're using the

00:07:49 --> 00:07:56
Nvidia tx1 which is basically like a

00:07:53 --> 00:07:58
deep learning supercomputer that uses

00:07:55 --> 00:07:59
the same GPU designed the same

00:07:57 --> 00:08:02
architecture that's found in their cloud

00:07:58 --> 00:08:04
compute systems and all of that is

00:08:01 --> 00:08:06
necessary to run the software and flight

00:08:03 --> 00:08:08
algorithms that give it the autonomous

00:08:05 --> 00:08:10
behavior so break it down for what does

00:08:07 --> 00:08:12
that actually mean in sky dio's case

00:08:09 --> 00:08:14
you're using cameras plus intelligence

00:08:11 --> 00:08:16
instead of lidar right what are the

00:08:13 --> 00:08:17
layers that make that work we've

00:08:15 --> 00:08:19
developed what we call the sky do

00:08:16 --> 00:08:21
autonomy engine and that's basically the

00:08:18 --> 00:08:24
complete system that does all the

00:08:20 --> 00:08:26
perception decision-making and control

00:08:23 --> 00:08:28
of the vehicle so it's a technically

00:08:25 --> 00:08:31
very complex thing but it's actually

00:08:27 --> 00:08:32
fairly intuitive to understand what it's

00:08:30 --> 00:08:34
doing because it's similar in a lot of

00:08:31 --> 00:08:36
ways to what people do like it basically

00:08:33 --> 00:08:38
processes visual information it uses the

00:08:35 --> 00:08:40
visual information to figure out the 3d

00:08:37 --> 00:08:42
structure of the scene so where

00:08:39 --> 00:08:44
verything is and then it builds up sort

00:08:41 --> 00:08:45
of a deeper understanding of what the

00:08:43 --> 00:08:47
different kinds of objects are so in

00:08:44 --> 00:08:48
particular we care about people we care

00:08:46 --> 00:08:51
about objects that we might run into and

00:08:47 --> 00:08:53
then all of that information goes into a

00:08:50 --> 00:08:54
planning system that balances a bunch of

00:08:52 --> 00:08:55
different objectives about what the

00:08:53 --> 00:08:58
drones trying to a cop

00:08:54 --> 00:08:59
it's trying to capture some video you

00:08:57 --> 00:09:01
definitely don't want to run into things

00:08:58 --> 00:09:03
we need to obey the maneuvering limits

00:09:00 --> 00:09:05
of the device so all of these things are

00:09:02 --> 00:09:07
constantly being traded off for it to

00:09:04 --> 00:09:09
decide what it should do thinking about

00:09:06 --> 00:09:11
how this tool is navigating when it's

00:09:08 --> 00:09:13
following you around and mapping its way

00:09:10 --> 00:09:14
through space a different kind of space

00:09:12 --> 00:09:16
right because it's Aaron how does it

00:09:13 --> 00:09:18
actually do that how does that work how

00:09:15 --> 00:09:20
does it choose where it's going so one

00:09:17 --> 00:09:21
of the keys to getting intelligent

00:09:19 --> 00:09:23
behavior is you actually have to predict

00:09:20 --> 00:09:24
what's going to happen because if you

00:09:22 --> 00:09:26
don't predict what's going to happen you

00:09:23 --> 00:09:29
end up being purely myopic and you just

00:09:25 --> 00:09:31
react to whatever just happened the path

00:09:28 --> 00:09:32
planning algorithm is actually

00:09:30 --> 00:09:34
predicting about four seconds into the

00:09:31 --> 00:09:36
future so it's looking at what you're

00:09:33 --> 00:09:37
doing it's looking at the environment

00:09:35 --> 00:09:39
around it

00:09:36 --> 00:09:40
's reasoning and then it's using all

00:09:38 --> 00:09:43
of these sort of future possibilities to

00:09:39 --> 00:09:44
figure out what it should do and even

00:09:42 --> 00:09:46
though it's predicting four seconds into

00:09:43 --> 00:09:49
the future it's not waiting to the end

00:09:45 --> 00:09:51
of those four seconds to then decide

00:09:48 --> 00:09:52
what to do it's constantly doing that so

00:09:50 --> 00:09:55
many times a second it's making these

00:09:51 --> 00:09:56
predictions with the latest information

00:09:54 --> 00:09:58
about what you're doing and what the

00:09:55 --> 00:10:00
nvironment around it is doing and then

00:09:57 --> 00:10:02
updating its notion of what it should do

00:09:59 --> 00:10:03
based on that how about some in the

00:10:01 --> 00:10:04
design choices you're making as you're

00:10:02 --> 00:10:06
combining these different types of

00:10:03 --> 00:10:08
technology right the propeller aspect

00:10:05 --> 00:10:09
and the weight and the cameras and like

00:10:07 --> 00:10:10
how they're all fitting together the

00:10:08 --> 00:10:12
whole stack what were your

00:10:09 --> 00:10:15
considerations so I think one of the

00:10:11 --> 00:10:16
overall things here this general idea of

00:10:14 --> 00:10:18
like the RC helicopter that's gotten

00:10:15 --> 00:10:19
better and better but then there's this

00:10:17 --> 00:10:21
other sort of paradigm of like what if

00:10:18 --> 00:10:23
this thing's a flying computer and we've

00:10:20 --> 00:10:24
kind of come at it more from that

00:10:22 --> 00:10:26
direction and that's reflected in a lot

00:10:23 --> 00:10:28
of the design choices we made it so we

00:10:25 --> 00:10:30
really do think about it more like a

00:10:27 --> 00:10:31
flying computer and we've tried to make

00:10:29 --> 00:10:35
aesthetic design choices that reflect

00:10:30 --> 00:10:37
hat so one example of this is that we

00:10:34 --> 00:10:39
built in this perimeter blade guard

00:10:36 --> 00:10:41
structure as a first-class citizen of

00:10:38 --> 00:10:43
the device so it's made out of carbon

00:10:40 --> 00:10:45
fiber to be super light and stiff and it

00:10:42 --> 00:10:47
means that you don't have exposed

00:10:44 --> 00:10:49
propellers around the under chop off

00:10:46 --> 00:10:51
your finger yeah so it gives it a

00:10:48 --> 00:10:53
significant safety benefit for flying

00:10:50 --> 00:10:55
around people but it also I think is

00:10:52 --> 00:10:56
just closer to the kinds of things that

00:10:54 --> 00:10:58
we're used to sliding into and out of

00:10:55 --> 00:11:01
backpacks because it's just sort of this

00:10:57 --> 00:11:03
ingle compact thing that you can like

00:11:00 --> 00:11:05
hold anywhere you want and is easy to

00:11:02 --> 00:11:07
manage yourself as opposed to having

00:11:04 --> 00:11:08
propeller blades sticking off and

00:11:06 --> 00:11:09
landing gear hanging down and things

00:11:07 --> 00:11:10
like this

00:11:08 --> 00:11:12
o we've talked a bunch about the

00:11:09 --> 00:11:14
under-the-hood technology how about on a

00:11:11 --> 00:11:15
more basic level what the personal

00:11:13 --> 00:11:17
experience is like of how the technology

00:11:14 --> 00:11:19
actually works when you first begin

00:11:16 --> 00:11:22
using it so like the goal is to make it

00:11:18 --> 00:11:24
really easy to capture amazing videos

00:11:21 --> 00:11:26
from this dynamic perspective that you

00:11:23 --> 00:11:27
wouldn't otherwise be able to get of you

00:11:25 --> 00:11:29
doing your favorite activities so

00:11:26 --> 00:11:30
there's a lot of complex technology

00:11:28 --> 00:11:32
under the hood to make it all possible

00:11:29 --> 00:11:35
but the end-user experience is pretty

00:11:31 --> 00:11:37
simple the way this works is you take it

00:11:34 --> 00:11:38
out of your backpack you turn it on and

00:11:36 --> 00:11:40
you're controlling it from your

00:11:37 --> 00:11:43
smartphone so you can hold it in your

00:11:39 --> 00:11:44
hand and swipe up to take off and it'll

00:11:42 --> 00:11:46
take off from your hand it'll fly away

00:11:43 --> 00:11:48
from you and turn around and look at you

00:11:45 --> 00:11:49
we have a deep neural network that's

00:11:47 --> 00:11:51
been trained against a bunch of

00:11:48 --> 00:11:52
different data sets some of it our own

00:11:50 --> 00:11:55
some of it open source data sets to

00:11:51 --> 00:11:56
recognize people robustly so when it

00:11:54 --> 00:11:58
looks at you it'll know that you're a

00:11:55 --> 00:12:00
person it builds up a unique visual

00:11:57 --> 00:12:02
identifier of what you look like based

00:11:59 --> 00:12:03
on your appearance your clothing things

00:12:01 --> 00:12:05
like this and it'll use that to tell you

00:12:02 --> 00:12:08
apart from other people in the scene and

00:12:04 --> 00:12:09
after that you can put your phone away

00:12:07 --> 00:12:12
and you're done and it'll just follow

00:12:08 --> 00:12:13
you it'll avoid obstacles it sees in

00:12:11 --> 00:12:16
every direction and you can go for a run

00:12:12 --> 00:12:18
you can go hiking biking skiing things

00:12:15 --> 00:12:20
like this and it will move itself in a

00:12:17 --> 00:12:22
nice smooth way and give you video that

00:12:19 --> 00:12:24
literally looks like it was filmed by a

00:12:21 --> 00:12:26
professional film crew no longer have to

00:12:23 --> 00:12:28
be staring up at it yeah I mean it looks

00:12:25 --> 00:12:29
like you have a Hollywood crew there

00:12:27 --> 00:12:31
with like booms and dollies and these

00:12:28 --> 00:12:32
things like moving a camera around but

00:12:30 --> 00:12:35
it's just doing all of it itself through

00:12:31 --> 00:12:36
software it's like a two-step magic

00:12:34 --> 00:12:38
trick or the first step

00:12:35 --> 00:12:39
eople see the drone fly around and

00:12:37 --> 00:12:42
follow you and when the drone does that

00:12:38 --> 00:12:43
it's moving a lot right to navigate with

00:12:41 --> 00:12:45
all the stabilization both hardware and

00:12:42 --> 00:12:46
software stabilization people are

00:12:44 --> 00:12:48
shocked about the video looks afterwards

00:12:46 --> 00:12:50
it's not just the tracking it's the

00:12:47 --> 00:12:52
actual quality of the image that you're

00:12:49 --> 00:12:55
getting how do you think storytelling

00:12:51 --> 00:12:57
starts to change when we're now enabled

00:12:54 --> 00:12:58
to be at the star of your own movie like

00:12:56 --> 00:13:00
that you know when the point of view

00:12:57 --> 00:13:02
just becomes sort of you and your life

00:12:59 --> 00:13:03
and it's technologically possible to

00:13:01 --> 00:13:05
just let that unfold how do you think

00:13:02 --> 00:13:07
that starts to change I think it's

00:13:04 --> 00:13:08
really exciting I mean I think we're

00:13:06 --> 00:13:10
still very early days on all this stuff

00:13:07 --> 00:13:13
but if you just think about how

00:13:09 --> 00:13:14
fundamental cameras are to our daily

00:13:12 --> 00:13:16
lives now like the major use case for

00:13:13 --> 00:13:18
smartphones is taking pictures and

00:13:15 --> 00:13:20
videos this is the feature that gets the

00:13:17 --> 00:13:22
most attention there we have you know

00:13:19 --> 00:13:23
huge social networks that are built up

00:13:21 --> 00:13:25
rimarily

00:13:22 --> 00:13:27
on top of sharing picture and video and

00:13:24 --> 00:13:29
the ability of a camera to understand

00:13:26 --> 00:13:32
what it's looking at and move itself in

00:13:28 --> 00:13:35
autonomously capture footage I think is

00:13:31 --> 00:13:37
going to be like a really powerful

00:13:34 --> 00:13:39
ingredient in the world in a lot of

00:13:36 --> 00:13:41
different ways it's a totally new tool

00:13:38 --> 00:13:43
yeah and you know the most interesting

00:13:40 --> 00:13:45
pictures and video are generally of

00:13:42 --> 00:13:46
people over the last six months of

00:13:44 --> 00:13:47
development we've had a bunch of

00:13:45 --> 00:13:49
prototypes around the company we've done

00:13:46 --> 00:13:51
a lot of internal testing we've also had

00:13:48 --> 00:13:53
external beta testers and one of the

00:13:50 --> 00:13:55
xciting things to us is seeing the

00:13:52 --> 00:13:57
footage that comes back there's these

00:13:54 --> 00:13:59
wacky creative ones work yeah what stuff

00:13:56 --> 00:14:00
do people do so we had an employee who

00:13:58 --> 00:14:01
basically made a music video in his

00:13:59 --> 00:14:03
driveway

00:14:00 --> 00:14:05
we're like he had the camera flying he

00:14:02 --> 00:14:07
was dancing around and there was this

00:14:04 --> 00:14:09
interaction between him and the device

00:14:06 --> 00:14:11
that resulted in this video that's kind

00:14:08 --> 00:14:12
of captivating to watch that you really

00:14:10 --> 00:14:14
wouldn't get any other way like it's not

00:14:11 --> 00:14:16
like he was gonna fire a film crew to

00:14:13 --> 00:14:18
come and film this thing in his driveway

00:14:15 --> 00:14:20
but with the device with almost no

00:14:17 --> 00:14:22
pre-planning he could just put it in the

00:14:19 --> 00:14:24
air and get this this kind of amazing

00:14:21 --> 00:14:27
thing I want to talk about like how this

00:14:23 --> 00:14:29
actually feels you know how its first

00:14:26 --> 00:14:31
recognizes you and the relationship you

00:14:28 --> 00:14:32
kind of develop with your drone right

00:14:30 --> 00:14:35
because it's really now a relationship

00:14:31 --> 00:14:37
thing how does that play out what does

00:14:34 --> 00:14:39
it feel like I think it's impossible not

00:14:36 --> 00:14:41
o personify it really and we like that

00:14:38 --> 00:14:43
I mean it responds to you it acts

00:14:40 --> 00:14:45
intelligently based on what you do and

00:14:42 --> 00:14:47
what's around it and so there is this

00:14:44 --> 00:14:49
kind of like fun aspect of it's like

00:14:46 --> 00:14:52
it's sort of your companion the real

00:14:48 --> 00:14:53
element of the product experience well

00:14:51 --> 00:14:54
it also makes it part of your life in a

00:14:52 --> 00:14:56
different way fraid you're not just a

00:14:53 --> 00:14:57
bug under a microscope it's also

00:14:55 --> 00:14:59
interesting when you talk about the

00:14:56 --> 00:15:00
point of view changing right there's a

00:14:58 --> 00:15:02
perceptual distance there's a

00:14:59 --> 00:15:04
perspective there's a perspective shift

00:15:01 --> 00:15:05
it seems to me like that's an

00:15:03 --> 00:15:07
interesting kind of like mental

00:15:04 --> 00:15:09
consciousness shift that happens when

00:15:06 --> 00:15:12
you start seeing yourself from that

00:15:08 --> 00:15:14
other perspective the broader trend is

00:15:11 --> 00:15:16
kind of a new thing in computing where

00:15:13 --> 00:15:17
basically for the entire history of

00:15:15 --> 00:15:20
computers they've been these static

00:15:16 --> 00:15:21
objects that you like type on or tap on

00:15:19 --> 00:15:23
and it you know at the end of the day

00:15:20 --> 00:15:25
almost all computing results and just

00:15:22 --> 00:15:27
showing you an image on a screen that

00:15:24 --> 00:15:29
hen you react to and so the ability of

00:15:26 --> 00:15:32
a computer to sense its environment and

00:15:28 --> 00:15:34
act in the physical world and that's

00:15:31 --> 00:15:36
basically what a robot is but we're

00:15:33 --> 00:15:36
ntering this new sort of world where

00:15:35 --> 00:15:37
the

00:15:35 --> 00:15:39
kinds of things are possible it's so

00:15:36 --> 00:15:41
much more dynamic relationship just from

00:15:38 --> 00:15:42
a technology point of view that people

00:15:40 --> 00:15:44
started to see it's like Alexa and

00:15:41 --> 00:15:46
products like this and generally they're

00:15:43 --> 00:15:48
sort of you know there's been all of

00:15:45 --> 00:15:50
this incredible progress in AI in the

00:15:47 --> 00:15:52
last a couple years but I think still a

00:15:49 --> 00:15:54
lot of it hasn't reached you know

00:15:51 --> 00:15:55
production products yet but we're gonna

00:15:53 --> 00:15:58
see more and more over the next couple

00:15:54 --> 00:16:00
of years computing devices that that do

00:15:57 --> 00:16:02
feel like active agents like active

00:15:59 --> 00:16:04
agents that's a really good way to put

00:16:01 --> 00:16:05
it and most public is thinking now of AI

00:16:03 --> 00:16:07
is this like dialogue but the

00:16:04 --> 00:16:08
relationship with you is silent you're

00:16:06 --> 00:16:11
not talking to it you're not telling it

00:16:07 --> 00:16:12
o follow you it's all like implicit and

00:16:10 --> 00:16:15
silent yeah I mean it's kind of like

00:16:11 --> 00:16:16
physical like it's in your space and

00:16:14 --> 00:16:18
it's responding to what you do I mean in

00:16:15 --> 00:16:20
a lot of ways you control it through

00:16:17 --> 00:16:21
your motion like not through gestures

00:16:19 --> 00:16:24
but through how you're actually

00:16:20 --> 00:16:26
physically moving so right now the drone

00:16:23 --> 00:16:28
is designed primarily for consumer use

00:16:25 --> 00:16:30
cases imagining down the road what do

00:16:27 --> 00:16:32
you think other possibly use cases for

00:16:29 --> 00:16:34
autonomous drones are there are a lot of

00:16:31 --> 00:16:36
exciting things on the commercial side

00:16:33 --> 00:16:39
and in a lot of ways I would say it's

00:16:35 --> 00:16:41
kind of less mature and wide open than

00:16:38 --> 00:16:43
consumer even general possibilities of

00:16:40 --> 00:16:45
using drones to automate collecting data

00:16:42 --> 00:16:47
that either isn't collected today but

00:16:44 --> 00:16:49
should be or is kind of difficult and

00:16:46 --> 00:16:51
manual and slow to get so we mentioned

00:16:48 --> 00:16:53
roof inspection there's this fairly

00:16:50 --> 00:16:55
manual slow painful process where people

00:16:52 --> 00:16:57
actually have to get on a ladder climb

00:16:54 --> 00:17:00
onto a roof look for physical damage to

00:16:56 --> 00:17:01
inventory it for insurance purposes you

00:16:59 --> 00:17:02
know it's not a particularly efficient

00:17:00 --> 00:17:04
hing it's pretty dangerous to the

00:17:01 --> 00:17:06
people to do it this could be done super

00:17:03 --> 00:17:07
efficiently by a drone but flying it

00:17:05 --> 00:17:09
manually to do that would be hard

00:17:06 --> 00:17:12
people's roofs have trees and powerlines

00:17:08 --> 00:17:13
and things like this around and so you

00:17:11 --> 00:17:14
don't want like the world the best drone

00:17:12 --> 00:17:16
pilot to have to go out to your house to

00:17:13 --> 00:17:18
safely fly this thing around doesn't

00:17:15 --> 00:17:20
scale to make it work there's a lot of

00:17:17 --> 00:17:22
other things like that where autonomy

00:17:19 --> 00:17:24
could have a really big impact

00:17:21 --> 00:17:26
construction sites have become actually

00:17:23 --> 00:17:28
pop today's case for drones the drone

00:17:25 --> 00:17:29
flies over and looks at the state of the

00:17:27 --> 00:17:30
construction make sure things are put

00:17:28 --> 00:17:32
away safely

00:17:29 --> 00:17:35
ou know sees how the progress is going

00:17:31 --> 00:17:37
check the inventory levels yeah you know

00:17:34 --> 00:17:39
infrastructure inspection mining bridges

00:17:36 --> 00:17:41
you know make sure it's not gonna fall

00:17:38 --> 00:17:42
these things are very hard to inspect

00:17:40 --> 00:17:45
but humans a lot of these things are

00:17:41 --> 00:17:47
basically like efficiently digitizing

00:17:44 --> 00:17:49
the physical world in some ways that

00:17:46 --> 00:17:52
data can be like tracked over time

00:17:48 --> 00:17:54
and issues and errors can be found

00:17:51 --> 00:17:56
mm-hmm there's something in the order of

00:17:53 --> 00:17:57
like 10 to 20 million jobs in the US

00:17:55 --> 00:17:59
where people have to climb things like

00:17:56 --> 00:18:00
for example the most dangerous job in

00:17:58 --> 00:18:02
America is climbing cell towers to

00:17:59 --> 00:18:03
inspect them they have to be inspected

00:18:01 --> 00:18:05
every like six months or something to

00:18:02 --> 00:18:07
see if the equipment's working and yeah

00:18:04 --> 00:18:09
it's like for safety issues things like

00:18:06 --> 00:18:11
this there's a hundred thousand rigs in

00:18:08 --> 00:18:13
the world and the salt water can corrode

00:18:10 --> 00:18:15
the steel and then you have you know gas

00:18:12 --> 00:18:16
and fire and you can imagine the bad

00:18:14 --> 00:18:18
things that can happen if you don't

00:18:15 --> 00:18:20
inspect it properly and today it's a

00:18:17 --> 00:18:22
very you know manual intense process

00:18:19 --> 00:18:23
I met a company recently using drones to

00:18:21 --> 00:18:25
do that in all these cases they're all

00:18:22 --> 00:18:26
using kind of manually piloted drones

00:18:24 --> 00:18:28
and so the big constraint is they have

00:18:25 --> 00:18:30
to have these expert pilots that's right

00:18:27 --> 00:18:32
because imagine if obviously if you hit

00:18:29 --> 00:18:34
something it could be catastrophic it's

00:18:31 --> 00:18:36
precisely for all the things that the

00:18:33 --> 00:18:37
human scale is not enough but we're so

00:18:35 --> 00:18:39
we've still until this point been held

00:18:36 --> 00:18:40
back by the human scale now suddenly

00:18:38 --> 00:18:42
that's out of the picture so I'm just

00:18:39 --> 00:18:45
gonna ask when those humans are out of

00:18:41 --> 00:18:47
the picture in this new autonomous drone

00:18:44 --> 00:18:49
cosystem where are the roles for the

00:18:46 --> 00:18:50
humans and that I think they're still

00:18:48 --> 00:18:51
humans it's just the human doesn't have

00:18:49 --> 00:18:53
to do the dangerous job and you can do

00:18:50 --> 00:18:54
it more efficiently but you're still

00:18:52 --> 00:18:56
going to need all sorts of things around

00:18:53 --> 00:18:59
like an insurance case around kind of

00:18:55 --> 00:19:00
analyzing the claim and paying it out

00:18:58 --> 00:19:02
and doing all the kind of work and

00:18:59 --> 00:19:04
bringing a drone out there I think it's

00:19:01 --> 00:19:05
all leverage so it means that like the

00:19:03 --> 00:19:07
people who are involved or working at a

00:19:04 --> 00:19:10
much higher level of abstraction and

00:19:06 --> 00:19:11
commanding a lot of resources to get the

00:19:09 --> 00:19:15
data in an efficient way it's about the

00:19:10 --> 00:19:16
strategy of data kind of yeah yeah and

00:19:14 --> 00:19:19
then making decisions afterwards

00:19:15 --> 00:19:21
about like what do we need to do like

00:19:18 --> 00:19:23
based on whatever we've learned the

00:19:20 --> 00:19:24
history of technology is you know it's

00:19:22 --> 00:19:26
there's a sort of fundamental asymmetry

00:19:23 --> 00:19:27
where it's easy to imagine the jobs that

00:19:25 --> 00:19:29
go away and hard to imagine the ones

00:19:26 --> 00:19:30
that are created yeah but the history of

00:19:28 --> 00:19:32
it shows that you know with every new

00:19:29 --> 00:19:34
technology wave yeah there are things

00:19:31 --> 00:19:35
that were done before that become

00:19:33 --> 00:19:37
obviated but there's a whole new set of

00:19:34 --> 00:19:38
things that come along yeah

00:19:36 --> 00:19:40
drone pilot wasn't even a job

00:19:37 --> 00:19:42
description five years ago and

00:19:39 --> 00:19:44
fundamentally I think drones are likely

00:19:41 --> 00:19:46
to enable a lot more new areas of

00:19:43 --> 00:19:48
creativity new kinds of value to be

00:19:45 --> 00:19:51
created if one of the big limits to the

00:19:47 --> 00:19:53
drone space which we're now achieving is

00:19:50 --> 00:19:55
autonomy what's the next state of the

00:19:52 --> 00:19:57
art what are we pushing up against next

00:19:54 --> 00:19:59
I mean I think you can look at birds as

00:19:56 --> 00:20:00
an example of what's possible like how

00:19:58 --> 00:20:02
far is a drone that you buy today from

00:19:59 --> 00:20:03
what a bird is capable of I would say

00:20:01 --> 00:20:05
pretty far

00:20:02 --> 00:20:08
these things are kind of like bulky and

00:20:04 --> 00:20:09
ifficult to manage and autonomy and

00:20:07 --> 00:20:12
intelligence seems like one key element

00:20:08 --> 00:20:15
of that but a lot of the hardware design

00:20:11 --> 00:20:17
aspects also I mean I think are like

00:20:14 --> 00:20:19
relatively early and immature and it

00:20:16 --> 00:20:22
hasn't been possible until now to build

00:20:18 --> 00:20:23
a small lightweight device with a bunch

00:20:21 --> 00:20:25
of onboard intelligence a bunch of

00:20:22 --> 00:20:28
sensing and electric power system all

00:20:24 --> 00:20:29
packed into one there are some really

00:20:27 --> 00:20:31
powerful new combinations of those

00:20:28 --> 00:20:33
things that we're gonna start to see

00:20:30 --> 00:20:36
merge over the next few years this is

00:20:32 --> 00:20:37
part of a broader wave which is if you

00:20:35 --> 00:20:39
just go back and look at the history of

00:20:36 --> 00:20:42
computing we had the mainframes URI

00:20:38 --> 00:20:43
hesita for every 10,000 people or

00:20:41 --> 00:20:45
hundred thousand people then you had pcs

00:20:42 --> 00:20:47
ort of one for every ten people and

00:20:44 --> 00:20:48
then you had you know smartphones we

00:20:46 --> 00:20:50
have three billion smartphones sort of a

00:20:47 --> 00:20:51
computer per person or we're gonna get

00:20:49 --> 00:20:54
o that point and now we're gonna start

00:20:50 --> 00:20:56
o see kind of 10 plus computers per

00:20:53 --> 00:20:58
son and that means you know computers

00:20:55 --> 00:21:02
embedded around your house at the office

00:20:57 --> 00:21:04
in the air and drones in your car you

00:21:01 --> 00:21:05
know VR AR headsets

00:21:03 --> 00:21:07
I think we're on the cusp of this kind

00:21:04 --> 00:21:09
of Cambrian explosion of computing

00:21:06 --> 00:21:11
devices a little galaxy around hm yeah a

00:21:08 --> 00:21:14
little galaxy around all empowered by AI

00:21:10 --> 00:21:17
is the critical ingredient which lets

00:21:13 --> 00:21:19
these devices understand and interact

00:21:16 --> 00:21:22
with the real world and new interfaces

00:21:18 --> 00:21:23
like speech and gestures and yeah the

00:21:21 --> 00:21:25
ability just to walk around and have it

00:21:22 --> 00:21:26
follow you jester's you may not even be

00:21:24 --> 00:21:28
aware of great that's right and then

00:21:25 --> 00:21:29
just and then just the ability to

00:21:27 --> 00:21:31
understand the environment and the

00:21:28 --> 00:21:32
second-order implications of this I

00:21:30 --> 00:21:34
think are really profound which is you

00:21:31 --> 00:21:35
know we don't even know yet what people

00:21:33 --> 00:21:37
are going to do with these devices and

00:21:34 --> 00:21:40
all the applications you know if you

00:21:36 --> 00:21:42
said to somebody in 2005 there's going

00:21:39 --> 00:21:43
to be these amazing smart phones I don't

00:21:41 --> 00:21:45
hink people would have predicted some

00:21:42 --> 00:21:47
of the applications that people develop

00:21:44 --> 00:21:48
so for example ride-sharing it wasn't a

00:21:46 --> 00:21:50
widespread prediction right and so I

00:21:47 --> 00:21:52
think there'll be things like that once

00:21:49 --> 00:21:54
developers and creative people have

00:21:51 --> 00:21:55
drones in their hands drones that are

00:21:53 --> 00:21:57
fully programmable sort of flying

00:21:54 --> 00:21:59
computers and what are all the new

00:21:56 --> 00:22:01
things they come up with it's going to

00:21:58 --> 00:22:03
be I think a really exciting time of the

00:22:00 --> 00:22:05
next three to five years as we discover

00:22:02 --> 00:22:06
that well if you had to take a wild

00:22:04 --> 00:22:08
guess and say okay this is the human

00:22:05 --> 00:22:10
behavior that I think is gonna change

00:22:07 --> 00:22:11
what would you say one of the first ways

00:22:09 --> 00:22:13
we're gonna start seeing human behavior

00:22:10 --> 00:22:15
change because of this self flying

00:22:12 --> 00:22:16
camera people call me an optimist but I

00:22:14 --> 00:22:18
think a lot of what computing does

00:22:15 --> 00:22:20
democratizes things that were only

00:22:17 --> 00:22:22
available previously to you know super

00:22:19 --> 00:22:23
wealthy people today someone with an

00:22:21 --> 00:22:25
iPhone and Google has more information

00:22:22 --> 00:22:27
the president's tates did 20 years

00:22:24 --> 00:22:29
ago right similarly like you you could

00:22:26 --> 00:22:30
film things like you could do ask I do

00:22:28 --> 00:22:32
but you had to have a Hollywood film

00:22:29 --> 00:22:34
crew right now you're democratizing that

00:22:31 --> 00:22:36
in the same way that you know iMovie

00:22:33 --> 00:22:38
sort of democratize film editing what

00:22:35 --> 00:22:39
happens then right what happens sort of

00:22:37 --> 00:22:41
second order to that well I guess we're

00:22:38 --> 00:22:43
on the way to soon finding out thank you

00:22:40 --> 00:22:46
both so much for joining us on the a 16z

00:22:42 --> 00:22:46
podcast

<!-- YOUTUBE_TRANSCRIPT_END -->
