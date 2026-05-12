---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "WbLQqPw_n88"
title: "Efficient Computing for Deep Learning, Robotics, and AI (Vivienne Sze) | MIT Deep Learning Series"
video_url: "https://www.youtube.com/watch?v=WbLQqPw_n88"
thumbnail_url: "https://i.ytimg.com/vi/WbLQqPw_n88/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=WbLQqPw_n88"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-01-23T20:34:56.000Z"
upload_date: "2020-01-23"
duration_seconds: 4728
duration_human: "1:18:48"
view_count: 58657
like_count: 1509
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:55:53.092Z"
---

# Efficient Computing for Deep Learning, Robotics, and AI (Vivienne Sze) | MIT Deep Learning Series

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=WbLQqPw_n88
- video_id: WbLQqPw_n88
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-01-23T20:34:56.000Z
- upload_date: 2020-01-23
- duration: 1:18:48
- view_count: 58657
- like_count: 1509
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, neural networks, mit deep learning, Vivienne Sze, deep learning hardware, artificial intelligence, machine learning, autonomous navigation, introduction to deep learning
- categories: Science & Technology

## Description

Lecture by Vivienne Sze in January 2020, part of the MIT Deep Learning Lecture Series.

Website: https://deeplearning.mit.edu
Slides: http://bit.ly/2Rm7Gi1
Playlist: http://bit.ly/deep-learning-playlist

LECTURE LINKS:
Twitter: https://twitter.com/eems_mit
YouTube: https://www.youtube.com/channel/UC8cviSAQrtD8IpzXdE6dyug
MIT professional course: http://bit.ly/36ncGam
NeurIPS 2019 tutorial: http://bit.ly/2RhVleO
Tutorial and survey paper: https://arxiv.org/abs/1703.09039
Book coming out in Spring 2020!

OUTLINE:
0:00 - Introduction
0:43 - Talk overview
1:18 - Compute for deep learning
5:48 - Power consumption for deep learning, robotics, and AI
9:23 - Deep learning in the context of resource use
12:29 - Deep learning basics
20:28 - Hardware acceleration for deep learning
57:54 - Looking beyond the DNN accelerator for acceleration
1:03:45 - Beyond deep neural networks

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
we'd have Viviane see here with us she's

00:00:03 --> 00:00:09
a professor here at MIT working in the

00:00:06 --> 00:00:11
very important and exciting space of

00:00:08 --> 00:00:12
developing energy efficient and

00:00:10 --> 00:00:15
high-performance systems for machine

00:00:11 --> 00:00:18
learning computer vision and other

00:00:14 --> 00:00:20
multimedia applications this involves

00:00:17 --> 00:00:22
joint design of algorithms architectures

00:00:19 --> 00:00:24
circus systems to enable optimal

00:00:21 --> 00:00:28
trade-offs between power speed and

00:00:23 --> 00:00:30
quality of results one of the important

00:00:27 --> 00:00:34
differences between the human brain and

00:00:29 --> 00:00:36
AI systems is the energy efficiency of

00:00:33 --> 00:00:39
the brain so Vivian is a world-class

00:00:35 --> 00:00:41
researcher at the forefront of

00:00:38 --> 00:00:44
discovering how we can close that gap so

00:00:40 --> 00:00:46
please give her a warm welcome I'm

00:00:43 --> 00:00:49
really happy to be here to share some of

00:00:45 --> 00:00:51
the research and an overview of this

00:00:48 --> 00:00:52
area efficient computing so actually

00:00:50 --> 00:00:53
what I'm going to be talking about today

00:00:51 --> 00:00:55
is gonna be a little bit broader than

00:00:52 --> 00:00:57
just deep learning will start with deep

00:00:54 --> 00:00:59
learning but we will also move to you

00:00:56 --> 00:01:01
know how we might apply this to robotics

00:00:58 --> 00:01:03
and other AI tasks and why and why it's

00:01:00 --> 00:01:04
really important to have efficient

00:01:02 --> 00:01:07
computing to enable a lot of these

00:01:03 --> 00:01:09
xciting applications also I just want

00:01:06 --> 00:01:11
o mention that a lot of the work I'm

00:01:08 --> 00:01:12
going to present today is not done by

00:01:10 --> 00:01:16
myself but in collaboration with a lot

00:01:11 --> 00:01:17
of folks at MIT over here and of course

00:01:15 --> 00:01:20
if you want access to the slides are

00:01:16 --> 00:01:22
available on our website so given that

00:01:19 --> 00:01:24
it's the deep learning lecture series I

00:01:21 --> 00:01:25
want to first start out talking up a

00:01:23 --> 00:01:27
little bit about deep neural nets so we

00:01:24 --> 00:01:30
know that deep neural Nets has you know

00:01:26 --> 00:01:33
generate a lot of a lot of interest has

00:01:29 --> 00:01:35
a very many very compelling applications

00:01:32 --> 00:01:38
but one of the things that has you know

00:01:34 --> 00:01:40
come in to light over the past few years

00:01:37 --> 00:01:42
is increasing need of compute opene I

00:01:39 --> 00:01:44
actually showed over the past few years

00:01:41 --> 00:01:47
that there's been a significant increase

00:01:43 --> 00:01:49
in the amount of compute that is

00:01:46 --> 00:01:51
required to form deep learning

00:01:48 --> 00:01:52
applications and to do the training for

00:01:50 --> 00:01:54
deep learning over the past few years so

00:01:51 --> 00:01:56
it's actually grown exponentially over

00:01:53 --> 00:01:58
the past few years it's don't grow in

00:01:55 --> 00:02:01
fact by over three hundred thousand

00:01:57 --> 00:02:02
times in terms of the amount of compute

00:02:00 --> 00:02:05
we need to drive and increase the

00:02:01 --> 00:02:07
accuracy a lot of the tasks that we're

00:02:04 --> 00:02:11
trying to achieve at the same time if we

00:02:06 --> 00:02:14
start looking at basically the

00:02:10 --> 00:02:15
nvironmental implications of

00:02:13 --> 00:02:18
all of this processing can be quite

00:02:14 --> 00:02:20
severe so if we look at for example the

00:02:17 --> 00:02:23
carbon footprint of you know training

00:02:19 --> 00:02:24
neural nets if you think of you know the

00:02:22 --> 00:02:27
amount of carbon footprint of flying

00:02:23 --> 00:02:30
across North America from New York to

00:02:26 --> 00:02:33
San Francisco or the carbon footprint of

00:02:29 --> 00:02:35
an average human life you can see that

00:02:32 --> 00:02:38
you know neural networks are orders of

00:02:34 --> 00:02:39
magnitude greater than that so the

00:02:37 --> 00:02:42
nvironmental or carbon footprint

00:02:38 --> 00:02:43
implications of computing for deep

00:02:41 --> 00:02:45
neural nets can be quite severe as well

00:02:42 --> 00:02:47
now this is a lot having to do with

00:02:44 --> 00:02:49
compute in the cloud another important

00:02:46 --> 00:02:51
area where we want to do compute is

00:02:48 --> 00:02:53
actually moving the compute from the

00:02:50 --> 00:02:55
cloud to the edge itself

00:02:52 --> 00:02:57
into the device where a lot of the data

00:02:54 --> 00:02:58
is being collected so why would we want

00:02:56 --> 00:03:03
o do that so there's a couple of

00:02:57 --> 00:03:04
reasons first of all communication so in

00:03:02 --> 00:03:06
a lot of places around the world and

00:03:03 --> 00:03:07
just even a lot of just placing is

00:03:05 --> 00:03:09
generally you might not have a very

00:03:06 --> 00:03:10
strong communication infrastructure

00:03:08 --> 00:03:13
right so you don't want to necessarily

00:03:09 --> 00:03:15
to rely on a communication network in

00:03:12 --> 00:03:17
order to do a lot of these applications

00:03:14 --> 00:03:20
o again you know removing your

00:03:16 --> 00:03:22
tethering from the cloud is important

00:03:19 --> 00:03:24
another reason is a lot of the times

00:03:21 --> 00:03:25
that we you know apply deep learning on

00:03:23 --> 00:03:27
a lot of applications where the data is

00:03:24 --> 00:03:30
very sensitive so you can think about

00:03:26 --> 00:03:31
hings like health care where you're

00:03:29 --> 00:03:34
collecting very sensitive data and so

00:03:30 --> 00:03:35
privacy and security again is really

00:03:33 --> 00:03:37
critical and you would rather than

00:03:34 --> 00:03:40
sending the data to the cloud you'd like

00:03:36 --> 00:03:44
to bring the compute to the data itself

00:03:39 --> 00:03:46
inally another compelling reason for

00:03:43 --> 00:03:48
you know bringing the compute into the

00:03:45 --> 00:03:49
device or into the robot is latency so

00:03:47 --> 00:03:52
this is particularly true for

00:03:48 --> 00:03:53
interactive applications so you can

00:03:51 --> 00:03:55
think of things like autonomous

00:03:52 --> 00:03:58
navigation robotics or self-driving

00:03:54 --> 00:03:59
vehicles where you need to interact with

00:03:57 --> 00:04:01
e real world you can imagine if you're

00:03:58 --> 00:04:03
driving very quickly down the highway

00:04:00 --> 00:04:05
and you detect an obstacle you might not

00:04:02 --> 00:04:07
have enough time to send the data to the

00:04:04 --> 00:04:09
cloud wait for it to be processed and

00:04:06 --> 00:04:11
send the instruction back in so again

00:04:08 --> 00:04:14
you want to move the compute into the

00:04:10 --> 00:04:16
robot or into the vehicle itself okay so

00:04:13 --> 00:04:18
hopefully this is establishing why we

00:04:15 --> 00:04:20
want to move the compute into the edge

00:04:17 --> 00:04:22
but one of the big challenges of doing

00:04:19 --> 00:04:24
processing in the robot or in the device

00:04:21 --> 00:04:25
actually has to do with power

00:04:23 --> 00:04:27
consumption itself so if we take the

00:04:24 --> 00:04:31
self-driving car as an example

00:04:26 --> 00:04:33
been reported that it consumes over 2000

00:04:30 --> 00:04:36
watts of power just for the computation

00:04:32 --> 00:04:38
itself just to process all the sensor

00:04:35 --> 00:04:40
data that it's collecting right and this

00:04:37 --> 00:04:41
actually generates a lot of heat it

00:04:39 --> 00:04:44
akes up a lot of space you can see in

00:04:40 --> 00:04:45
this prototype that's being placed in

00:04:43 --> 00:04:47
all the computes a specs are being

00:04:44 --> 00:04:49
placed in the trunk generates a lot of

00:04:46 --> 00:04:53
heat it generates and often needs water

00:04:48 --> 00:04:55
cooling so this can be a big cost and

00:04:52 --> 00:04:57
logistical challenges for self-driving

00:04:54 --> 00:04:59
vehicles now you can imagine that this

00:04:56 --> 00:05:01
gonna be much more challenging if we

00:04:58 --> 00:05:02
shrink shrink down the form factor of

00:05:00 --> 00:05:04
the device itself to something that is

00:05:01 --> 00:05:06
perhaps portable in your hands you can

00:05:03 --> 00:05:09
think about smaller robots or something

00:05:05 --> 00:05:10
like your smartphone or cell phone in

00:05:08 --> 00:05:12
these particular cases when you think

00:05:09 --> 00:05:15
about portable devices you actually have

00:05:11 --> 00:05:17
ry limited energy capacity and this is

00:05:14 --> 00:05:19
based on the fact that though battery

00:05:16 --> 00:05:21
itself is limited in terms of the size

00:05:18 --> 00:05:23
weight and its cost right so you can't

00:05:20 --> 00:05:26
have very large amount of energy on

00:05:22 --> 00:05:27
these particular devices itself secondly

00:05:25 --> 00:05:29
when you take a look at you know the

00:05:26 --> 00:05:31
mbedded platforms that are currently

00:05:28 --> 00:05:33
used for embedded processing for these

00:05:30 --> 00:05:35
particular applications they tend to

00:05:32 --> 00:05:37
consume you know over 10 watts which is

00:05:34 --> 00:05:38
an order of magnitude higher than the

00:05:36 --> 00:05:40
power consumption that you typically

00:05:37 --> 00:05:42
would allow for for these particular

00:05:39 --> 00:05:43
handheld devices so in these handheld

00:05:41 --> 00:05:45
evices typically you're limited to

00:05:42 --> 00:05:46
under a watt due to the heat dissipation

00:05:44 --> 00:05:50
for example you don't want your cell

00:05:45 --> 00:05:53
phone to get super hot ok so in the past

00:05:49 --> 00:05:54
you know decade or so or decades what we

00:05:52 --> 00:05:56
would do to address this challenge is

00:05:53 --> 00:05:59
that we would wait for transistors

00:05:55 --> 00:06:02
become smaller faster and more efficient

00:05:58 --> 00:06:04
however this has become a challenge over

00:06:01 --> 00:06:07
the past few years so transistors are

00:06:03 --> 00:06:09
not getting more efficient so for

00:06:06 --> 00:06:11
example Moore's Law which typically

00:06:08 --> 00:06:13
makes transistors smaller and faster has

00:06:10 --> 00:06:15
been slowing down and Dennard scaling

00:06:12 --> 00:06:17
which has made transistors more

00:06:14 --> 00:06:19
fficient has also slowed down our

00:06:16 --> 00:06:21
endeth so you can see here over the past

00:06:18 --> 00:06:24
10 years this trend has really flattened

00:06:20 --> 00:06:26
out ok so this is a particular challenge

00:06:23 --> 00:06:28
because we want more and more compute to

00:06:25 --> 00:06:30
drive deep neural network applications

00:06:27 --> 00:06:33
but the transistors are not becoming

00:06:29 --> 00:06:36
more efficient right so what we have to

00:06:32 --> 00:06:37
turn to in order to address this is we

00:06:35 --> 00:06:39
need to turn towards specialized

00:06:36 --> 00:06:40
hardware to achieve the significant

00:06:38 --> 00:06:42
speed

00:06:39 --> 00:06:44
and energy throughputs that we require

00:06:41 --> 00:06:45
for our particular application and we

00:06:43 --> 00:06:46
talked about designing specialized

00:06:44 --> 00:06:48
Harvard this is really about thinking

00:06:45 --> 00:06:51
about how we can redesign the hardware

00:06:47 --> 00:06:54
from the ground up particularly targeted

00:06:50 --> 00:06:56
at these AI deep learning and robotic

00:06:53 --> 00:06:58
tasks that we're really excited about

00:06:55 --> 00:07:01
okay so this notion is not new in fact

00:06:57 --> 00:07:03
it's become extremely popular to do this

00:07:00 --> 00:07:05
over the past few years there's been a

00:07:02 --> 00:07:06
large number of startups and companies

00:07:04 --> 00:07:07
that have focused on building

00:07:05 --> 00:07:10
specialized hardware for deep learning

00:07:06 --> 00:07:12
so in fact New York Times reported I

00:07:09 --> 00:07:13
guess it's two years ago that there's a

00:07:11 --> 00:07:16
record number of startups looking at

00:07:12 --> 00:07:18
building specialized hardware for AI and

00:07:15 --> 00:07:20
for a deep learning okay so we'll talk a

00:07:17 --> 00:07:21
little bit about what specialized

00:07:19 --> 00:07:24
hardware looks like for these particular

00:07:20 --> 00:07:26
applications now if you really care

00:07:23 --> 00:07:28
about energy and power efficiency the

00:07:25 --> 00:07:30
first question you should ask is where

00:07:27 --> 00:07:33
is the power actually going for these

00:07:29 --> 00:07:36
applications and so as it turns out

00:07:32 --> 00:07:38
power is dominated by data movement so

00:07:35 --> 00:07:41
it's actually not the computations

00:07:37 --> 00:07:43
themselves that are expensive but moving

00:07:40 --> 00:07:45
the data to the computation engine

00:07:42 --> 00:07:48
that's expensive so for example I shown

00:07:44 --> 00:07:50
here in blue is you know a range of

00:07:47 --> 00:07:52
power consumption energy consumption for

00:07:49 --> 00:07:55
a variety of types of computations for

00:07:51 --> 00:07:57
example multiplications and additions at

00:07:54 --> 00:07:59
various different Precision's so you

00:07:56 --> 00:08:01
have for example floating point to fixed

00:07:58 --> 00:08:03
point and integer and same with

00:08:00 --> 00:08:05
additions and you can see as it makes

00:08:02 --> 00:08:07
ense as you scale down the precision

00:08:04 --> 00:08:09
the energy consumption of each of these

00:08:06 --> 00:08:11
operations reduce but what's really

00:08:08 --> 00:08:14
surprising here is that if you look

00:08:10 --> 00:08:16
lower at the energy consumption of data

00:08:13 --> 00:08:18
movement right again this is delivering

00:08:15 --> 00:08:20
the input data to do the multiplication

00:08:17 --> 00:08:21
and then you know moving the output of

00:08:19 --> 00:08:24
the multiplication somewhere into memory

00:08:20 --> 00:08:26
it can be very expensive so for example

00:08:23 --> 00:08:29
if you look at the energy consumption of

00:08:25 --> 00:08:31
a 32-bit Reed from an SRAM memory this

00:08:28 --> 00:08:33
an 8 kilobyte SRAM so it's a very

00:08:30 --> 00:08:36
small memory that you would have on the

00:08:32 --> 00:08:39
processor or on the chip itself this is

00:08:35 --> 00:08:41
already going to consume 5 Pico joules

00:08:38 --> 00:08:43
of energy so equivalent or even more

00:08:40 --> 00:08:45
than a 32-bit floating-point mode

00:08:42 --> 00:08:48
multiplied and it's from a very small

00:08:44 --> 00:08:51
memory if you need to read this data

00:08:47 --> 00:08:53
from off chips so outside the processor

00:08:50 --> 00:08:54
for example in DRAM it's going to be

00:08:52 --> 00:08:56
ven more

00:08:53 --> 00:08:59
offensive so in this particular case

00:08:55 --> 00:09:00
we're showing 640 Pico joules in terms

00:08:58 --> 00:09:02
of energy and sequence notice here on

00:08:59 --> 00:09:05
the horizontal axis that this is

00:09:01 --> 00:09:07
basically the this is an exponential

00:09:04 --> 00:09:09
axis so you're talking about orders of

00:09:06 --> 00:09:11
meant to increase in energy in terms of

00:09:08 --> 00:09:13
data movement compared to the compute

00:09:10 --> 00:09:16
itself right so this is a key takeaway

00:09:12 --> 00:09:19
here so if we really want to address the

00:09:15 --> 00:09:21
nergy consumption of these particular

00:09:18 --> 00:09:24
types of processing we really want to

00:09:20 --> 00:09:25
look at reducing data movement okay but

00:09:23 --> 00:09:28
what's the challenge here so if we take

00:09:24 --> 00:09:29
a look at a popular a I robotics or type

00:09:27 --> 00:09:30
of application like autonomous

00:09:28 --> 00:09:32
navigation the real challenge here

00:09:29 --> 00:09:35
though is that these applications use a

00:09:31 --> 00:09:36
lot of data right so for example one of

00:09:34 --> 00:09:38
the things you need to do in autonomous

00:09:35 --> 00:09:40
navigation is what we call semantic

00:09:37 --> 00:09:42
understanding so you need to be able to

00:09:39 --> 00:09:43
identify you know which pixel belongs to

00:09:41 --> 00:09:45
what so for example in this scene you

00:09:42 --> 00:09:47
need to know that this pixel represents

00:09:44 --> 00:09:49
the ground this pixel represents the sky

00:09:46 --> 00:09:51
this pixel represents you know a person

00:09:48 --> 00:09:53
itself okay so this important type of

00:09:50 --> 00:09:55
processing often if you're traveling

00:09:52 --> 00:09:58
quickly you want to be able to do this

00:09:54 --> 00:10:00
at a very high frame rate you might need

00:09:57 --> 00:10:01
to have large resolution so for example

00:09:59 --> 00:10:04
typically if you want HD images you're

00:10:00 --> 00:10:06
talking about 2 million pixels per frame

00:10:03 --> 00:10:07
and then often if you also want to be

00:10:05 --> 00:10:09
able to detect objects at different

00:10:06 --> 00:10:11
scales or see objects that are far away

00:10:08 --> 00:10:13
ou need to do what we call data

00:10:10 --> 00:10:15
expansion for example build a pyramid

00:10:12 --> 00:10:16
for this and this would increase the

00:10:14 --> 00:10:18
amount of pixels or amount of data you

00:10:15 --> 00:10:21
need to process by you know one or two

00:10:17 --> 00:10:22
rders of magnitude so that's a huge

00:10:20 --> 00:10:25
amount of data that you have to process

00:10:21 --> 00:10:27
right off the back there another type of

00:10:24 --> 00:10:28
processing or understand that you want

00:10:26 --> 00:10:30
o do for Thomas navigation is what we

00:10:27 --> 00:10:31
call it geometric understanding and

00:10:29 --> 00:10:33
that's when you're kind of navigating

00:10:30 --> 00:10:35
you want to build a 3d map of the world

00:10:32 --> 00:10:39
that's around you and you can imagine

00:10:34 --> 00:10:40
the longer you travel for the larger the

00:10:38 --> 00:10:42
map you're gonna build and again that's

00:10:39 --> 00:10:45
going to be more data that you're gonna

00:10:41 --> 00:10:47
have to process and compute on ok so

00:10:44 --> 00:10:48
this is a significant challenge for

00:10:46 --> 00:10:51
autonomous navigation in terms of

00:10:47 --> 00:10:53
mounted data other aspects of Thomas

00:10:50 --> 00:10:56
navigations also other applications like

00:10:52 --> 00:10:58
AR VR and so on is understanding your

00:10:55 --> 00:11:00
environment right so a typical thing you

00:10:57 --> 00:11:03
might need to do is to do depth

00:10:59 --> 00:11:05
estimation so for example if I give you

00:11:02 --> 00:11:07
an image can you estimate the distance

00:11:04 --> 00:11:10
of how far a given pixel is from

00:11:07 --> 00:11:11
and also semantic segmentation we just

00:11:09 --> 00:11:14
alked about that before so these are

00:11:10 --> 00:11:15
important types of ways to understand

00:11:13 --> 00:11:18
your environment when you're trying to

00:11:14 --> 00:11:20
navigate I mean it should be no surprise

00:11:17 --> 00:11:22
to you that in order to do these types

00:11:19 --> 00:11:25
of processing the state-of-the-art

00:11:21 --> 00:11:28
approaches utilize deep neural nets

00:11:24 --> 00:11:30
right but the challenge here that these

00:11:27 --> 00:11:32
deep neural nets often require several

00:11:29 --> 00:11:34
hundred millions of operations and

00:11:31 --> 00:11:36
weights to do the computation so when

00:11:33 --> 00:11:38
you try and compare it to something like

00:11:35 --> 00:11:40
you would all have on your phone for

00:11:37 --> 00:11:42
example video compression you're talking

00:11:39 --> 00:11:44
about you know two to three orders of

00:11:41 --> 00:11:46
magnitude increase in computational

00:11:43 --> 00:11:48
complexity so this is significant

00:11:45 --> 00:11:50
challenge because if we'd like to have

00:11:47 --> 00:11:52
you know deep neural networks be as

00:11:49 --> 00:11:54
ubiquitous as something like video

00:11:51 --> 00:11:56
compression we really have to figure out

00:11:53 --> 00:11:58
how to address this computational

00:11:55 --> 00:11:59
complexity we also know that deep neural

00:11:57 --> 00:12:01
networks are not just used for

00:11:58 --> 00:12:03
understanding the environment or

00:12:00 --> 00:12:05
autonomous navigation but it's really

00:12:02 --> 00:12:07
become the cornerstone of many AI

00:12:04 --> 00:12:10
applications from computer vision speech

00:12:06 --> 00:12:11
recognition gameplay and even medical

00:12:09 --> 00:12:14
applications and I'm sure a lot of these

00:12:10 --> 00:12:16
have been covered through this course so

00:12:13 --> 00:12:18
briefly I'm just gonna give a quick

00:12:15 --> 00:12:20
overview of some of the key components

00:12:17 --> 00:12:21
and deep neural nets not because you

00:12:19 --> 00:12:23
know I'm sure all of you understand it

00:12:20 --> 00:12:26
but because since this area is very

00:12:22 --> 00:12:27
popular the terminology can vary from

00:12:25 --> 00:12:29
discipline to discipline so I'll just do

00:12:26 --> 00:12:32
a brief overview to align ourselves on

00:12:28 --> 00:12:35
the terminology itself so what are deep

00:12:31 --> 00:12:37
neural Nets basically you can view it as

00:12:34 --> 00:12:40
a way of for example understanding in

00:12:36 --> 00:12:43
the environment it's a chain of

00:12:39 --> 00:12:45
different layers of processing where you

00:12:42 --> 00:12:47
can imagine for an input image at the

00:12:44 --> 00:12:48
low level or the earlier parts of the

00:12:46 --> 00:12:50
neural net you're trying to learn

00:12:47 --> 00:12:53
different low-level features such as

00:12:49 --> 00:12:55
edges of an image and as you get deeper

00:12:52 --> 00:12:57
into the network as you chain more of

00:12:54 --> 00:12:59
these kind of computational layers

00:12:56 --> 00:13:01
together you start being able to detect

00:12:58 --> 00:13:03
higher and higher level features until

00:13:00 --> 00:13:06
you can you know recognize a vehicle for

00:13:02 --> 00:13:07
example and you know the difference of

00:13:05 --> 00:13:09
this particular approach compared to

00:13:06 --> 00:13:11
more traditional ways of doing computer

00:13:08 --> 00:13:13
vision is that how we extract these

00:13:10 --> 00:13:15
features are learned from the data

00:13:12 --> 00:13:17
itself as opposed to having an expert

00:13:14 --> 00:13:19
come and say hey look for the edges look

00:13:16 --> 00:13:20
for you know the wheels and so on the

00:13:18 --> 00:13:21
fact that it recognizes this features is

00:13:19 --> 00:13:24
it

00:13:20 --> 00:13:25
and approach okay what is it doing at

00:13:23 --> 00:13:29
each of these layers well it's actually

00:13:25 --> 00:13:30
doing a very simple computation this is

00:13:28 --> 00:13:32
looking at the inference side of things

00:13:29 --> 00:13:34
basically effectively what is doing is a

00:13:31 --> 00:13:37
weighted sum right so you have the input

00:13:33 --> 00:13:39
values and we'll color code the inputs

00:13:36 --> 00:13:42
as blue here and try and stay consistent

00:13:38 --> 00:13:44
with that's what the talk we apply

00:13:41 --> 00:13:46
certain weights to them these weights

00:13:43 --> 00:13:48
are learned from the training data and

00:13:45 --> 00:13:50
then they would generate an output which

00:13:47 --> 00:13:52
is typically read here it's basically a

00:13:49 --> 00:13:54
weighted sum as we can see we then

00:13:51 --> 00:13:56
passed this weighted sum through some

00:13:53 --> 00:13:58
form of non-linearity so you know

00:13:55 --> 00:14:00
traditionally used to be sigmoids more

00:13:57 --> 00:14:03
cently we use things like real ooze

00:13:59 --> 00:14:07
which basically set you know non zero

00:14:02 --> 00:14:09
values or negative values to zero but

00:14:06 --> 00:14:11
he key takeaway here is if you look at

00:14:08 --> 00:14:13
his computational kernel the key

00:14:10 --> 00:14:15
operation to a lot of these neural

00:14:12 --> 00:14:17
networks is performing this multiply and

00:14:14 --> 00:14:20
accumulate to compute the weighted sum

00:14:16 --> 00:14:22
and this accounts for over 90% of the

00:14:19 --> 00:14:24
computation so if we really want to

00:14:21 --> 00:14:26
focus on you know accelerating neural

00:14:23 --> 00:14:28
nets or making them more efficient we

00:14:25 --> 00:14:30
want to focus on minimizing the cost of

00:14:27 --> 00:14:34
this multiply and accumulate itself

00:14:29 --> 00:14:36
there are also various popular types of

00:14:33 --> 00:14:38
deep neural network layer layers used

00:14:35 --> 00:14:40
for deep neural networks they also often

00:14:37 --> 00:14:42
vary in terms of you know how you

00:14:39 --> 00:14:43
connect up the different layers so for

00:14:41 --> 00:14:45
example you can have feed-forward layers

00:14:42 --> 00:14:47
where the inputs are always connected to

00:14:44 --> 00:14:49
the outputs you can have feedback where

00:14:46 --> 00:14:51
the outputs are connected back into the

00:14:48 --> 00:14:53
inputs you can have fully connected

00:14:50 --> 00:14:55
inputs where basically all the outputs

00:14:52 --> 00:14:58
are connected to all the inputs or

00:14:54 --> 00:14:59
sparsely connected and you might be

00:14:57 --> 00:15:01
familiar with some of these layers so

00:14:58 --> 00:15:02
for example fully connected layers just

00:15:00 --> 00:15:05
like what we talked about all inputs and

00:15:01 --> 00:15:07
all outputs are connected there tend to

00:15:04 --> 00:15:09
be feed-forward and when you put them

00:15:06 --> 00:15:11
together they're typically referred to

00:15:08 --> 00:15:14
as a multi-layer perceptron you have

00:15:10 --> 00:15:17
convolutional layers which are also

00:15:13 --> 00:15:20
feed-forward but then you have sparsely

00:15:16 --> 00:15:21
connected weight sharing connections and

00:15:19 --> 00:15:23
when you put them together they often

00:15:20 --> 00:15:25
referred to as convolutional and that

00:15:22 --> 00:15:27
works and they're typically used for

00:15:24 --> 00:15:30
image based processing

00:15:26 --> 00:15:32
you have current layers where we have

00:15:29 --> 00:15:35
this feedback connection so the output

00:15:31 --> 00:15:37
is fed back to the input when we combine

00:15:34 --> 00:15:38
two recurrent layers they're referred to

00:15:36 --> 00:15:40
as recurrent neural Nets and these are

00:15:37 --> 00:15:42
typically used to process sequential

00:15:39 --> 00:15:45
data so speech or language based

00:15:41 --> 00:15:47
processing and then most recently which

00:15:44 --> 00:15:49
is become really popular it's the

00:15:46 --> 00:15:51
tension layers or tension based

00:15:48 --> 00:15:53
mechanisms and they often involve matrix

00:15:50 --> 00:15:56
multiply which is again multiplied and

00:15:52 --> 00:15:58
accumulate and there when you combine

00:15:55 --> 00:15:59
these are often referred to as

00:15:57 --> 00:16:01
transformers

00:15:58 --> 00:16:04
okay so let's first kind of get an idea

00:16:00 --> 00:16:07
s to why you know convolutional or deep

00:16:03 --> 00:16:09
learning is much more computationally

00:16:06 --> 00:16:11
more complex than other types of

00:16:08 --> 00:16:12
processing so we'll focus on you know

00:16:10 --> 00:16:14
convolutional neural Nets is an example

00:16:11 --> 00:16:16
although many of these principles apply

00:16:13 --> 00:16:18
to other types of neural nets and the

00:16:15 --> 00:16:20
first thing that'll kind of take a look

00:16:17 --> 00:16:21
as to why it's complicated is to look at

00:16:19 --> 00:16:24
he computational kernel so how does it

00:16:20 --> 00:16:27
actually perform convolution itself so

00:16:23 --> 00:16:29
let's say you have this 2d input image

00:16:26 --> 00:16:31
if it's at the input of the neural net

00:16:28 --> 00:16:32
would be an image if it's deeper in the

00:16:30 --> 00:16:35
neural net would be the input feature

00:16:31 --> 00:16:37
map and it's going to be composed of

00:16:34 --> 00:16:38
activations or you can think from an

00:16:36 --> 00:16:41
image it's going to be composed of

00:16:37 --> 00:16:43
pixels and we convolve it with let's say

00:16:40 --> 00:16:45
a 2d filter which is composed of weights

00:16:42 --> 00:16:47
right so typical convolution what you

00:16:44 --> 00:16:50
would do is you would do an element-wise

00:16:46 --> 00:16:52
multiplication of the filter weights

00:16:49 --> 00:16:55
with the input feature map activations

00:16:51 --> 00:16:57
you would sum them all together to

00:16:54 --> 00:16:58
generate one output value that we would

00:16:56 --> 00:17:00
refer to that as the output activation

00:16:57 --> 00:17:03
right and then what because it's

00:16:59 --> 00:17:06
convolution we would basically slide the

00:17:02 --> 00:17:08
filter across this input feature map and

00:17:05 --> 00:17:10
generate all the other output feature

00:17:07 --> 00:17:12
map activations and so this cut this

00:17:09 --> 00:17:14
kind of 2d convolution is pretty

00:17:11 --> 00:17:15
standard in image processing we've been

00:17:13 --> 00:17:19
doing this for decades

00:17:14 --> 00:17:21
right what makes convolutional neural

00:17:18 --> 00:17:23
nets much more challenging as the

00:17:20 --> 00:17:25
increase in dimensionality so first of

00:17:22 --> 00:17:27
all rather than doing just this 2d

00:17:24 --> 00:17:28
convolution we often stack multiple

00:17:26 --> 00:17:30
channels so there's this third dimension

00:17:27 --> 00:17:32
called channels and then what we're

00:17:29 --> 00:17:34
doing here is that we need to do a 2d

00:17:31 --> 00:17:37
convolution on each of the channels and

00:17:33 --> 00:17:38
then add it all together right and you

00:17:36 --> 00:17:41
can think of these channels for an image

00:17:37 --> 00:17:42
these channels would be kind of the

00:17:40 --> 00:17:44
green and blue components for example

00:17:41 --> 00:17:45
and as you get deeper into the feature

00:17:43 --> 00:17:47
map the number of channels could

00:17:44 --> 00:17:49
potentially increase so if you look at

00:17:46 --> 00:17:51
Alex net which is a popular neural net

00:17:48 --> 00:17:54
he number of channels ranges from 3 to

00:17:50 --> 00:17:56
192 okay so that already increases the

00:17:53 --> 00:17:58
dimensionality one dimension of the

00:17:55 --> 00:18:01
neural our neural net itself in terms of

00:17:57 --> 00:18:03
processing another dimension that we

00:18:00 --> 00:18:06
increase is we actually apply multiple

00:18:02 --> 00:18:10
filters to this same input feature map

00:18:05 --> 00:18:13
ok so for example you might apply and

00:18:09 --> 00:18:14
filters to the same input feature map

00:18:12 --> 00:18:17
and then you would generate an output

00:18:13 --> 00:18:19
feature map of M channels right so in

00:18:16 --> 00:18:22
the previous slide we showed that you

00:18:18 --> 00:18:24
know convolving this 3d filter generates

00:18:21 --> 00:18:29
one output channel on the output feature

00:18:23 --> 00:18:31
map if we apply em input M feet filters

00:18:28 --> 00:18:34
we're gonna generate M output channels

00:18:30 --> 00:18:35
in the output feature map and again just

00:18:33 --> 00:18:37
o give you an idea in terms of the

00:18:34 --> 00:18:38
scale of this when you talk about things

00:18:36 --> 00:18:42
like Alec's net we're talking about

00:18:37 --> 00:18:44
between 96 to 384 filters and of course

00:18:41 --> 00:18:46
it's increasing to you know thousands

00:18:43 --> 00:18:49
for other advanced or more modern neural

00:18:45 --> 00:18:51
Nets itself and then finally often you

00:18:48 --> 00:18:53
want to process more than one image at a

00:18:50 --> 00:18:55
given time right so if you want to

00:18:52 --> 00:18:58
actually do that we can actually extend

00:18:54 --> 00:19:01
it so N and input images we can become n

00:18:57 --> 00:19:03
output images or and input feature maps

00:19:00 --> 00:19:05
we can becomes n output feature maps and

00:19:02 --> 00:19:07
a typical we typically refer to this as

00:19:04 --> 00:19:09
a batch size like the number of images

00:19:06 --> 00:19:13
you're processing at the same time and

00:19:08 --> 00:19:14
this can range from 1 to 256 ok so these

00:19:12 --> 00:19:16
are all the various different dimensions

00:19:13 --> 00:19:17
of the neural net and so really what

00:19:15 --> 00:19:19
someone does when they're trying to

00:19:16 --> 00:19:21
define what we call the network

00:19:18 --> 00:19:22
architecture of the neural net itself is

00:19:20 --> 00:19:24
that they're going to select the

00:19:21 --> 00:19:25
different or define the shape of the

00:19:23 --> 00:19:27
neural network for each of the different

00:19:24 --> 00:19:29
layers so it's going to you know define

00:19:26 --> 00:19:30
all these different dimensions of the

00:19:28 --> 00:19:33
neural net itself and these shapes can

00:19:29 --> 00:19:36
vary across the different layers just to

00:19:32 --> 00:19:38
give you an idea if you look at mobile

00:19:35 --> 00:19:40
net as an example this is a very popular

00:19:37 --> 00:19:43
neural net cells you can see that the

00:19:39 --> 00:19:45
filter size is right so the height and

00:19:43 --> 00:19:46
width of the filters and the number of

00:19:44 --> 00:19:48
ilters and number of channels will vary

00:19:46 --> 00:19:51
across the different blocks or layers

00:19:47 --> 00:19:54
itself the other thing I also want to

00:19:50 --> 00:19:54
mention is that when we look towards

00:19:53 --> 00:19:57
popular

00:19:53 --> 00:19:58
enn models we can also see important

00:19:56 --> 00:20:00
rends so shown here are the various

00:19:57 --> 00:20:02
different models they've been developed

00:19:59 --> 00:20:05
over the years that are quite popular a

00:20:01 --> 00:20:07
couple of interesting trends one is that

00:20:04 --> 00:20:09
he networks tend to become deeper so

00:20:06 --> 00:20:11
you can see in the convolutional layers

00:20:08 --> 00:20:13
they're getting deeper and deeper and

00:20:10 --> 00:20:16
then also the number of weights that

00:20:12 --> 00:20:18
hey're using and the number of max are

00:20:15 --> 00:20:19
also increasing as well so this is an

00:20:17 --> 00:20:21
important trend the DNN models are

00:20:18 --> 00:20:22
getting larger and deeper and so again

00:20:20 --> 00:20:25
they're becoming much more

00:20:21 --> 00:20:27
computationally demanding and so we need

00:20:24 --> 00:20:31
more sophisticated hardware to be able

00:20:26 --> 00:20:33
to process them all right so that's kind

00:20:30 --> 00:20:34
of a quick intro overview into the deep

00:20:32 --> 00:20:35
neural network space I hope we're all

00:20:33 --> 00:20:38
aligned so the first thing I'm going to

00:20:34 --> 00:20:41
talk about is how can we actually build

00:20:37 --> 00:20:43
hardware to make the processing of these

00:20:40 --> 00:20:45
neural networks more efficient and to

00:20:42 --> 00:20:47
run faster and often we refer to this as

00:20:44 --> 00:20:49
hardware acceleration all right

00:20:46 --> 00:20:51
so we know these neural networks are

00:20:48 --> 00:20:53
very large there's a lot of compute but

00:20:50 --> 00:20:54
are there types of properties that we

00:20:52 --> 00:20:56
can leverage to make computing or

00:20:53 --> 00:20:58
processing of these networks more

00:20:55 --> 00:21:00
fficient so the first thing that's

00:20:57 --> 00:21:03
really friendly is that they actually

00:20:59 --> 00:21:05
exhibit a lot of parallelism so all

00:21:02 --> 00:21:08
these multiplies and accumulates you can

00:21:04 --> 00:21:09
actually do them all in parallel right

00:21:07 --> 00:21:11
so that's great so that what that means

00:21:08 --> 00:21:12
is high throughput or high speed is

00:21:10 --> 00:21:15
actually possible cuz I can do a lot of

00:21:11 --> 00:21:16
these process things in parallel what is

00:21:14 --> 00:21:18
difficult in what should not be a

00:21:15 --> 00:21:20
surprise to you know is that the memory

00:21:17 --> 00:21:22
accesses the ball bottlenecks so

00:21:19 --> 00:21:24
delivering the data to the multiply and

00:21:21 --> 00:21:26
accumulate engine is what's really

00:21:23 --> 00:21:28
challenging so I'll give you an insight

00:21:25 --> 00:21:30
as to why this is the case so let's take

00:21:27 --> 00:21:33
say we take this multiply and accumulate

00:21:29 --> 00:21:35
ngine what we call a Mac it takes in

00:21:32 --> 00:21:39
three inputs for every Mac so you have

00:21:34 --> 00:21:41
the filter weight you have the input

00:21:38 --> 00:21:42
image pixel or if you're deeper in the

00:21:40 --> 00:21:45
network you would be input feature math

00:21:41 --> 00:21:47
activation and it also takes the partial

00:21:44 --> 00:21:48
sum which is like the partially

00:21:46 --> 00:21:50
accumulated value from the previous

00:21:47 --> 00:21:54
multiply that it did and then it would

00:21:49 --> 00:21:56
generate an updated partial sum so for

00:21:53 --> 00:21:58
every computation that you do for every

00:21:55 --> 00:22:00
Mac that you're doing you need to have

00:21:57 --> 00:22:03
four memory accesses so it's a four to

00:21:59 --> 00:22:07
ne ratio in terms of memory accesses

00:22:02 --> 00:22:08
versus compute the other challenge that

00:22:06 --> 00:22:11
you have

00:22:07 --> 00:22:12
is as we mentioned moving data is going

00:22:10 --> 00:22:14
to be very expensive

00:22:11 --> 00:22:16
so in the absolute worst case and you

00:22:13 --> 00:22:19
would always try to avoid this if you

00:22:15 --> 00:22:22
read the data from DRAM it's off ship

00:22:18 --> 00:22:24
memory every time you access data from

00:22:21 --> 00:22:27
DRAM it's going to be two orders of

00:22:23 --> 00:22:30
magnitude more expensive than the

00:22:26 --> 00:22:32
computation of performing a Mac itself

00:22:29 --> 00:22:34
okay so that's really really bad so if

00:22:31 --> 00:22:36
you can imagine again if we look at Alex

00:22:33 --> 00:22:38
net which has 700 million max we're

00:22:35 --> 00:22:42
talking about three billion DRAM

00:22:37 --> 00:22:44
accesses to do that computation okay but

00:22:41 --> 00:22:46
again all is not lost there are some

00:22:43 --> 00:22:48
things that we can exploit to help us

00:22:45 --> 00:22:51
along with this problem so one is what

00:22:47 --> 00:22:53
we call input data reuse opportunities

00:22:50 --> 00:22:54
which means that a lot of data that

00:22:52 --> 00:22:56
we're reading we're using to perform

00:22:53 --> 00:22:58
these multiplies and accumulates they're

00:22:55 --> 00:23:00
actually used for many multiplies and

00:22:57 --> 00:23:03
accumulates so if we read the data once

00:22:59 --> 00:23:05
we can reuse it multiple times for many

00:23:02 --> 00:23:08
operations right so I'll show you some

00:23:04 --> 00:23:11
xamples of that first is what we call

00:23:07 --> 00:23:12
convolutional reuse so again if you

00:23:10 --> 00:23:15
remember we're taking a filter and we're

00:23:11 --> 00:23:20
sliding it across this input image and

00:23:14 --> 00:23:21
so as a result the the activations from

00:23:19 --> 00:23:23
the feature map and the weights from the

00:23:20 --> 00:23:26
filter are going to be reused in

00:23:22 --> 00:23:27
different combinations to compute the

00:23:25 --> 00:23:29
different multiplier and accumulate

00:23:26 --> 00:23:30
values or different max itself so

00:23:28 --> 00:23:33
there's a lot of what we call

00:23:29 --> 00:23:35
convolutional reuse opportunities there

00:23:32 --> 00:23:37
another example is that we're actually

00:23:34 --> 00:23:41
if you recall going to apply multiple

00:23:36 --> 00:23:43
filters on the same input feature map so

00:23:40 --> 00:23:45
that means that each activation in that

00:23:42 --> 00:23:49
input feature map can be reused multiple

00:23:44 --> 00:23:52
times across the different filters

00:23:48 --> 00:23:55
finally if we're going to process many

00:23:51 --> 00:23:58
images at the same time or many feature

00:23:54 --> 00:24:00
maps are given weight in the filter

00:23:57 --> 00:24:02
itself can be reused multiple times

00:23:59 --> 00:24:05
across these input feature Maps so

00:24:01 --> 00:24:06
that's what we called filter eaters okay

00:24:04 --> 00:24:08
so there's a lot of these great filter

00:24:05 --> 00:24:11
euse opportunities in the neural

00:24:07 --> 00:24:13
network itself and so what what can we

00:24:10 --> 00:24:15
do to exploit this reuse opportunities

00:24:12 --> 00:24:17
well all we can do is we can bill what

00:24:14 --> 00:24:20
we call a memory hierarchy that contains

00:24:16 --> 00:24:22
very low cost memories that allow us to

00:24:19 --> 00:24:23
reduce the overall

00:24:21 --> 00:24:26
cost of moving this data so what do we

00:24:22 --> 00:24:28
mean here we mean that if I have if I

00:24:25 --> 00:24:32
build a multiply and accumulate engine

00:24:27 --> 00:24:34
I'm gonna have a very small memory right

00:24:31 --> 00:24:36
beside the multiply and accumulate

00:24:33 --> 00:24:39
ngine and by small I mean something on

00:24:35 --> 00:24:40
the order of under a kilobyte of memory

00:24:38 --> 00:24:42
locally

00:24:39 --> 00:24:43
besides that multiplying accumulate

00:24:41 --> 00:24:46
Anjan why do I want that because

00:24:42 --> 00:24:49
accessing that very small memory can be

00:24:45 --> 00:24:52
very cheap so for example if to perform

00:24:48 --> 00:24:55
a multiplying accumulate with an ALU x1

00:24:51 --> 00:24:57
X reading from this very small memory

00:24:54 --> 00:24:59
beside the multiply to accumulate engine

00:24:56 --> 00:25:02
is also going to be still the same

00:24:58 --> 00:25:04
amount of energy I can also allow these

00:25:01 --> 00:25:05
processing elements in a processing

00:25:03 --> 00:25:07
element is going to be this multiply and

00:25:05 --> 00:25:09
accumulate plus the small memory I can

00:25:06 --> 00:25:12
also allow the different processing

00:25:08 --> 00:25:14
elements to also share data ok and so

00:25:11 --> 00:25:17
reading from a neighboring processing

00:25:13 --> 00:25:19
element is going to be 2x the energy and

00:25:16 --> 00:25:23
then finally you can have a shared

00:25:18 --> 00:25:24
larger memory called a global buffer and

00:25:22 --> 00:25:26
that's going to be able to be shared

00:25:23 --> 00:25:28
across all different processing elements

00:25:25 --> 00:25:31
this tends to be larger between hundred

00:25:27 --> 00:25:33
and 500 K bytes and that's going to be

00:25:30 --> 00:25:35
more expensive about 6 X the energy

00:25:32 --> 00:25:37
itself and of course if you go off chip

00:25:34 --> 00:25:41
to DRAM that's going to be more the most

00:25:36 --> 00:25:42
expensive at 200 X the energy right and

00:25:40 --> 00:25:44
so the big issue here is you can the way

00:25:41 --> 00:25:47
that you can think about this is what

00:25:43 --> 00:25:50
you would ideally like to do is to

00:25:46 --> 00:25:52
access all of the data from this very

00:25:49 --> 00:25:54
small local memory but the challenge

00:25:51 --> 00:25:56
here is that this very small local

00:25:53 --> 00:25:57
memory is only 1 K byte but we're

00:25:55 --> 00:26:00
talking about neural networks that are

00:25:56 --> 00:26:03
millions of weights in terms of size

00:25:59 --> 00:26:04
right so how do we go about doing that

00:26:02 --> 00:26:06
here so there's many challenges of

00:26:03 --> 00:26:07
doing that I'm just as an analogy for

00:26:05 --> 00:26:08
you guys to kind of think through how

00:26:06 --> 00:26:11
this is related you could imagine that

00:26:08 --> 00:26:13
you know accessing something from like

00:26:10 --> 00:26:15
let's say your backpack is gonna be much

00:26:12 --> 00:26:18
eaper than accessing something from

00:26:14 --> 00:26:19
your neighbor or you know going back to

00:26:17 --> 00:26:21
let's say your office here somewhere on

00:26:18 --> 00:26:23
campus to get the data versus going back

00:26:20 --> 00:26:25
all the way home right so ideally you'd

00:26:22 --> 00:26:26
like to access all of your data from

00:26:24 --> 00:26:28
your backup but if you have a lot of

00:26:25 --> 00:26:29
work to do you might not be able to fill

00:26:27 --> 00:26:31
it in your backpack so the question is

00:26:28 --> 00:26:34
how can I you know break up my large

00:26:30 --> 00:26:35
piece of work into smaller chunks so

00:26:33 --> 00:26:37
that I can access them

00:26:34 --> 00:26:38
all from this small memory itself and

00:26:36 --> 00:26:41
that's the big challenge that you have

00:26:37 --> 00:26:42
and so there's been a lot of research in

00:26:40 --> 00:26:44
this area in terms of what's the best

00:26:41 --> 00:26:46
way to break up the data and what should

00:26:43 --> 00:26:49
I store in this very small local memory

00:26:45 --> 00:26:51
so one approach is what we call a weight

00:26:48 --> 00:26:53
stationary and the idea here is I'm

00:26:50 --> 00:26:55
gonna store the weight information of

00:26:52 --> 00:26:58
the neural net into this small local

00:26:54 --> 00:27:01
memory okay and so as a result I really

00:26:57 --> 00:27:03
minimize the weight energy but the

00:27:00 --> 00:27:05
challenge here is that the other types

00:27:02 --> 00:27:07
of data that you have in your system so

00:27:04 --> 00:27:09
for example your input activations show

00:27:06 --> 00:27:11
in the blue and then the partial sums

00:27:08 --> 00:27:12
are shown in the red now those still

00:27:10 --> 00:27:13
have to move through the rest of the

00:27:11 --> 00:27:16
system itself so through their

00:27:12 --> 00:27:18
networking from the global buffer okay

00:27:15 --> 00:27:20
our typical types of work that are

00:27:17 --> 00:27:22
popular that use this type of kind of

00:27:19 --> 00:27:23
data flow or weight stationary data flow

00:27:21 --> 00:27:25
hich will be call because the weight

00:27:22 --> 00:27:28
remains stationary are things like the

00:27:24 --> 00:27:30
TPU from Google and the envy de la

00:27:27 --> 00:27:32
ccelerator from it video another

00:27:29 --> 00:27:34
approach that people take or they will

00:27:31 --> 00:27:37
they say well so the weight I only have

00:27:33 --> 00:27:39
her have to read it but the partial sums

00:27:36 --> 00:27:41
I have to read it and write it because

00:27:38 --> 00:27:43
the partials I'm going to read

00:27:40 --> 00:27:44
accumulate like update it and then write

00:27:42 --> 00:27:47
it back to them so there's two memory

00:27:43 --> 00:27:50
accesses for that partial sum data type

00:27:46 --> 00:27:53
so what maybe I should put that partial

00:27:49 --> 00:27:54
sum locally into that small memory

00:27:52 --> 00:27:55
itself so this is what we call output

00:27:53 --> 00:27:58
stationary because the accumulation of

00:27:54 --> 00:27:59
the output is going to be local within

00:27:57 --> 00:28:02
that one processing element that's not

00:27:58 --> 00:28:04
going to move the trade-off of course is

00:28:01 --> 00:28:06
the activations of weights now have to

00:28:03 --> 00:28:07
move through the network and then

00:28:05 --> 00:28:09
there's various different works called

00:28:06 --> 00:28:12
like for example so we're from Katie

00:28:08 --> 00:28:14
Leuven and some work from the Chinese

00:28:11 --> 00:28:17
Academy of Sciences that are using this

00:28:13 --> 00:28:19
approach another piece of work is saying

00:28:16 --> 00:28:23
well you know forget about the inputs

00:28:18 --> 00:28:24
and the or so the outputs and the wastes

00:28:22 --> 00:28:27
themselves let's keep the input

00:28:23 --> 00:28:30
stationary within this small membrane

00:28:26 --> 00:28:31
it's called input stationary and some of

00:28:29 --> 00:28:34
the work again from some research work

00:28:30 --> 00:28:35
from Nvidia has examined this but all of

00:28:33 --> 00:28:38
these different types of work really

00:28:34 --> 00:28:40
focus on you know not moving one piece

00:28:37 --> 00:28:43
of type of data right either focus on

00:28:39 --> 00:28:46
minimizing weight energy or a partial

00:28:42 --> 00:28:47
sum energy or input energy I think

00:28:45 --> 00:28:49
what's important to think about is that

00:28:46 --> 00:28:50
maybe you want to

00:28:48 --> 00:28:52
reduce the data movement of all

00:28:49 --> 00:28:53
different data types all types of energy

00:28:51 --> 00:28:55
right so another approach is something

00:28:52 --> 00:28:57
we've developed within our own group is

00:28:54 --> 00:28:59
looking at we call the row stationary

00:28:56 --> 00:29:01
data flow and within each of the

00:28:58 --> 00:29:05
processing elements you're gonna do one

00:29:00 --> 00:29:07
row of convolution and this row is a

00:29:04 --> 00:29:09
mixture of all the different data types

00:29:06 --> 00:29:12
right so you have filter information so

00:29:08 --> 00:29:14
the weights of the filter you have the

00:29:11 --> 00:29:16
activations of your input feature map

00:29:13 --> 00:29:17
and then you also have your partial sum

00:29:15 --> 00:29:19
information so you're really trying to

00:29:16 --> 00:29:21
balance the data movement of all the

00:29:18 --> 00:29:23
different data types not just one

00:29:20 --> 00:29:25
particular data type this is just

00:29:22 --> 00:29:27
performing a one row but you just talked

00:29:24 --> 00:29:29
about the fact that the neural network

00:29:26 --> 00:29:32
is much more than a 1d convolution so

00:29:28 --> 00:29:34
you can imagine expanding this to higher

00:29:31 --> 00:29:36
dimensions so this is just showing how

00:29:33 --> 00:29:39
you might expand this one deconvolution

00:29:35 --> 00:29:40
into a 2d convolution and then there's

00:29:38 --> 00:29:43
other you know higher dimensionality

00:29:39 --> 00:29:44
that you architecture as well I won't

00:29:42 --> 00:29:46
get through the details of this but the

00:29:43 --> 00:29:48
key takeaway here is that you might not

00:29:45 --> 00:29:50
want to focus on one particular data

00:29:47 --> 00:29:52
type you want to actually optimize for

00:29:49 --> 00:29:53
all the amount all the different types

00:29:51 --> 00:29:56
of data that you're moving around in

00:29:52 --> 00:29:59
your system ok and this can just show

00:29:55 --> 00:30:00
you you know some results in terms of

00:29:58 --> 00:30:03
how these different data types or

00:29:59 --> 00:30:05
different types of data flows would work

00:30:02 --> 00:30:07
so for example in the weight stationary

00:30:04 --> 00:30:08
case as expected the weight energy the

00:30:06 --> 00:30:10
nergy required to move the weights

00:30:07 --> 00:30:12
hown in green is going to be the lowest

00:30:09 --> 00:30:15
but then the red portion which is the

00:30:11 --> 00:30:18
nergy of the partial sums and the green

00:30:14 --> 00:30:20
are so the blue and blue part which is

00:30:17 --> 00:30:22
the input feature map or input pixels

00:30:19 --> 00:30:24
that's going to be very high output

00:30:21 --> 00:30:26
stationary is another approach as we

00:30:23 --> 00:30:28
talked about you're trying to reduce the

00:30:25 --> 00:30:30
data movement of the partial sums shown

00:30:27 --> 00:30:31
here in red so the red part is really

00:30:29 --> 00:30:34
minimized they can see that the green

00:30:30 --> 00:30:35
part which is the weight stationary data

00:30:33 --> 00:30:39
movement or weight movement is going to

00:30:34 --> 00:30:41
be increased and the blue is the inputs

00:30:38 --> 00:30:42
going to be increased there's another

00:30:40 --> 00:30:44
potion called no coloca reuse we don't

00:30:41 --> 00:30:46
have time to talk about that but you can

00:30:43 --> 00:30:48
see that ROS stationary for example

00:30:45 --> 00:30:51
really aims to balance the data movement

00:30:47 --> 00:30:52
of all the different data types right so

00:30:50 --> 00:30:54
the big takeaway here is that you know

00:30:51 --> 00:30:57
hen you're trying to optimize you know

00:30:53 --> 00:30:58
given piece of hardware you don't want

00:30:56 --> 00:31:00
o just optimize one you know for one

00:30:57 --> 00:31:01
particular type of data you want to

00:30:59 --> 00:31:03
ptimize overall for

00:31:00 --> 00:31:06
all the movement in the hardware itself

00:31:02 --> 00:31:09
okay another thing that you can also

00:31:05 --> 00:31:11
exploit to save a bit of power is the

00:31:08 --> 00:31:13
fact that you know some of the data

00:31:10 --> 00:31:16
could be zero so we know that anything

00:31:12 --> 00:31:19
multiplied by zero was going to be zero

00:31:15 --> 00:31:21
right so if you know that one of the

00:31:18 --> 00:31:23
inputs to your multiplying accumulate is

00:31:20 --> 00:31:25
going to be zero you might as well skip

00:31:22 --> 00:31:27
that multiplication in fact you might as

00:31:24 --> 00:31:29
well skip you know accessing data or

00:31:26 --> 00:31:31
accessing the other input to that

00:31:28 --> 00:31:33
multiply and accumulate engine so by

00:31:30 --> 00:31:36
doing that you can actually reduce the

00:31:32 --> 00:31:39
power consumption by almost 50 percent

00:31:35 --> 00:31:41
another thing that you can do is that if

00:31:38 --> 00:31:44
you have a bunch of zeros

00:31:40 --> 00:31:46
you can also compress the data for

00:31:43 --> 00:31:48
example you can use things like run

00:31:45 --> 00:31:50
length encoding which we're basically a

00:31:47 --> 00:31:51
run of zeros is going to be represented

00:31:49 --> 00:31:53
rather than you know zero zero zero zero

00:31:50 --> 00:31:55
you can just say have a run of five

00:31:52 --> 00:31:57
zeros and this can actually reduce the

00:31:54 --> 00:32:01
amount of data movement by up to two X

00:31:56 --> 00:32:03
in your system itself and in fact in you

00:32:00 --> 00:32:04
know neural nets there's a large you

00:32:02 --> 00:32:05
know possibilities of actually

00:32:03 --> 00:32:07
generating zeros first of all if you

00:32:04 --> 00:32:09
remember that real loop it's setting

00:32:06 --> 00:32:11
negative values to zero so naturally

00:32:08 --> 00:32:12
generate zeros and then there's other

00:32:10 --> 00:32:14
techniques for example we call pruning

00:32:11 --> 00:32:17
which is setting some of the weights of

00:32:13 --> 00:32:20
the neural so this can exploit all that

00:32:16 --> 00:32:21
okay so you know what is the impact of

00:32:19 --> 00:32:23
all these types of things so we actually

00:32:20 --> 00:32:25
looked at building hardware I'm in

00:32:22 --> 00:32:27
particular a customized chip that we

00:32:24 --> 00:32:29
called iris to demonstrate these

00:32:26 --> 00:32:32
particular proaches in particular the

00:32:28 --> 00:32:35
row stationary data flow and exploiting

00:32:31 --> 00:32:40
sparsity in the activation data so this

00:32:34 --> 00:32:41
Irish ship has 14 by 12 so 168

00:32:39 --> 00:32:44
processing elements you can see that

00:32:40 --> 00:32:46
here's a shared buffer that's 100

00:32:43 --> 00:32:48
kilobytes and it has some compression

00:32:45 --> 00:32:50
decompression because 4 goes to off chip

00:32:47 --> 00:32:52
TM and again that's because accessing

00:32:49 --> 00:32:55
DRM is the most expensive I'm shown here

00:32:52 --> 00:32:57
on the right hand side is a die photo of

00:32:54 --> 00:33:00
the fabricated chip itself right and

00:32:56 --> 00:33:03
this is 4 millimeters by 4 Miller in

00:32:59 --> 00:33:05
terms of size and so using that you know

00:33:02 --> 00:33:08
rows stationary data flow it exploits a

00:33:04 --> 00:33:11
lot of data reuse so it actually reduces

00:33:07 --> 00:33:14
the number of times we access this

00:33:10 --> 00:33:15
global buffer by a hundred X and it also

00:33:13 --> 00:33:16
reduces

00:33:14 --> 00:33:19
the amount of times we access the

00:33:15 --> 00:33:20
off-chip memory by over a thousand decks

00:33:18 --> 00:33:22
this is all because you know each of

00:33:19 --> 00:33:25
these processing elements has you know a

00:33:21 --> 00:33:26
local memory that is trying to read most

00:33:24 --> 00:33:28
of the vit status from it's also sharing

00:33:25 --> 00:33:30
with other processing elements so

00:33:27 --> 00:33:32
verall when you compare it to a mobile

00:33:29 --> 00:33:34
GPU you're talking about an order of

00:33:31 --> 00:33:36
magnitude reduction and energy

00:33:33 --> 00:33:38
consumption if you'd like to learn a

00:33:35 --> 00:33:41
little bit more about that I invite you

00:33:37 --> 00:33:43
to visit the iris project website ok so

00:33:40 --> 00:33:44
this is great we can build custom

00:33:42 --> 00:33:47
hardware but what does this actually

00:33:43 --> 00:33:48
mean in terms of you know building a

00:33:46 --> 00:33:51
system that can efficiently compute

00:33:47 --> 00:33:52
neural nets so let's say we take a step

00:33:50 --> 00:33:54
back let's say we don't care anything

00:33:51 --> 00:33:56
about the hardware and we're you know a

00:33:53 --> 00:33:57
systems provider we want to build you

00:33:55 --> 00:33:59
know an overall system and what we

00:33:56 --> 00:34:03
really care about is the trade-off

00:33:58 --> 00:34:04
between energy and accuracy right that's

00:34:02 --> 00:34:07
the key thing that we care about

00:34:03 --> 00:34:08
I'm so shown here is a plot and let's

00:34:06 --> 00:34:13
ay this is for an object detection task

00:34:07 --> 00:34:16
right so accuracy is on the x-axis and

00:34:12 --> 00:34:17
it's listed in terms of average

00:34:15 --> 00:34:19
precision which is a metric that we use

00:34:16 --> 00:34:23
for object detection it's on a linear

00:34:18 --> 00:34:26
scale and higher the better vertically

00:34:22 --> 00:34:28
we have energy consumption on this is

00:34:25 --> 00:34:29
the energy that's being consumed per

00:34:27 --> 00:34:31
pixel so you kind of average it I can

00:34:28 --> 00:34:33
imagine a higher resolution image than

00:34:30 --> 00:34:34
consume more energy it's going to be an

00:34:32 --> 00:34:39
exponential scale so let's first start

00:34:34 --> 00:34:41
on the accuracy axis and so if you think

00:34:38 --> 00:34:44
before neural nets you know had its

00:34:40 --> 00:34:46
resurgence in around 2011 2012 actually

00:34:43 --> 00:34:49
state-of-the-art approaches used

00:34:45 --> 00:34:50
features called histogram of oriented

00:34:48 --> 00:34:53
gradients this is a very popular

00:34:49 --> 00:34:55
approach to be very efficient in terms

00:34:52 --> 00:34:58
of quite a cure in terms of object

00:34:54 --> 00:35:00
detection and we referred to as hog the

00:34:57 --> 00:35:01
reason why you know neural and that's

00:34:59 --> 00:35:02
really took off is because they really

00:35:00 --> 00:35:05
improve the accuracy so you can imagine

00:35:01 --> 00:35:07
Alex said here almost doubled the

00:35:04 --> 00:35:10
accuracy and then vgg you know further

00:35:06 --> 00:35:12
increase the accuracy so it's super

00:35:09 --> 00:35:15
exciting there but and we want to look

00:35:11 --> 00:35:18
also on the vertical axis which is the

00:35:14 --> 00:35:20
nergy consumption and I should mention

00:35:17 --> 00:35:21
you know basically you'll see these dots

00:35:19 --> 00:35:23
we have the energy consumption for each

00:35:20 --> 00:35:25
of these different approaches these

00:35:22 --> 00:35:26
approaches are actually measured or

00:35:24 --> 00:35:28
these energy numbers are measured on

00:35:25 --> 00:35:30
specialized Hardware all right

00:35:27 --> 00:35:33
hat's been designed for that particular

00:35:29 --> 00:35:36
task so we have a chip here that's built

00:35:32 --> 00:35:38
in 65 nanometer CMOS process will use

00:35:35 --> 00:35:40
the same transistors around the same

00:35:37 --> 00:35:42
size that does object detection using

00:35:39 --> 00:35:44
the hog features and then here's the

00:35:41 --> 00:35:45
iris chip that we just talked about

00:35:43 --> 00:35:47
I should also know that these both of

00:35:44 --> 00:35:48
these chips are built in my group the

00:35:46 --> 00:35:50
students who built this these chips you

00:35:47 --> 00:35:52
know started designing the chips at the

00:35:49 --> 00:35:53
same time and taped out at the same time

00:35:51 --> 00:35:56
so somewhat of a controlled experiment

00:35:52 --> 00:35:57
in terms of optimization okay so what

00:35:55 --> 00:36:01
does this tell us when we look on the

00:35:56 --> 00:36:03
nergy axis we can see that histogram of

00:36:00 --> 00:36:05
oriented gradients or hog features are

00:36:02 --> 00:36:07
actually very efficient from an energy

00:36:04 --> 00:36:08
point of view in fact if we compare it

00:36:06 --> 00:36:10
o something like video compression

00:36:07 --> 00:36:13
again something that you all have in

00:36:09 --> 00:36:14
your phone hogs features are actually

00:36:12 --> 00:36:17
more efficient than video compression

00:36:13 --> 00:36:19
meaning for the same energy that you

00:36:16 --> 00:36:21
would spend compressing a pixel you

00:36:18 --> 00:36:24
could actually understand that pixel so

00:36:20 --> 00:36:27
that's pretty impressive but if we start

00:36:23 --> 00:36:30
looking at Alex net or vgg we can see

00:36:26 --> 00:36:32
that the energy increases by two to

00:36:29 --> 00:36:34
three orders of magnitude which is quite

00:36:31 --> 00:36:36
significant I'll give you an example so

00:36:33 --> 00:36:39
if I told you on your cell phone I'm

00:36:35 --> 00:36:41
gonna double the accuracy of its

00:36:38 --> 00:36:43
recognition but your phone would die

00:36:40 --> 00:36:45
three hundred times faster who here

00:36:42 --> 00:36:49
would be interested in that technology

00:36:44 --> 00:36:50
right so exactly so nobody right so then

00:36:48 --> 00:36:53
the sense that battery life is so

00:36:49 --> 00:36:55
critical to how we actually use these

00:36:52 --> 00:36:58
types of technologies so we should not

00:36:54 --> 00:36:59
just look at the accuracy which is the

00:36:57 --> 00:37:02
x-axis point of view we should really

00:36:58 --> 00:37:03
also consider the energy consumption and

00:37:01 --> 00:37:05
we really don't want the energy to be so

00:37:02 --> 00:37:07
high and we can see that even with

00:37:04 --> 00:37:11
specialized hardware we're still quite

00:37:06 --> 00:37:13
far away from making neural nets as

00:37:10 --> 00:37:15
efficient as something like video

00:37:12 --> 00:37:16
compression that you all have on your

00:37:14 --> 00:37:20
phones so we really have to think of how

00:37:15 --> 00:37:22
e can further push the energy

00:37:19 --> 00:37:24
consumption down without sacrificing

00:37:21 --> 00:37:26
accuracy of course okay so actually

00:37:23 --> 00:37:28
there's been a huge amount of research

00:37:25 --> 00:37:29
in this space because we know neural

00:37:27 --> 00:37:31
nets are popular and we know that they

00:37:28 --> 00:37:32
have a wide range of applications but

00:37:30 --> 00:37:34
energy is really a big challenge so

00:37:31 --> 00:37:36
people have looked at you know how can

00:37:33 --> 00:37:38
we design new hardware that can be more

00:37:35 --> 00:37:40
fficient or how can we design

00:37:37 --> 00:37:41
algorithms that are more efficient to

00:37:39 --> 00:37:43
enable energy

00:37:40 --> 00:37:44
and processing of DNS and so in fact

00:37:42 --> 00:37:46
within our own research group we spend

00:37:43 --> 00:37:48
quite a bit of time kind of surveying

00:37:45 --> 00:37:50
the area understanding what are the

00:37:47 --> 00:37:51
various different types of developments

00:37:49 --> 00:37:53
that people been looking at so if you're

00:37:50 --> 00:37:55
interested in this topic we actually

00:37:52 --> 00:37:58
generated various tutorials on this

00:37:54 --> 00:38:00
material as well as overview papers this

00:37:57 --> 00:38:01
an overview paper that's about 30

00:37:59 --> 00:38:03
pages and what we're currently expanding

00:38:00 --> 00:38:04
it into a book so if you're interested

00:38:02 --> 00:38:07
in this topic I would encourage you to

00:38:03 --> 00:38:08
visit these resources but the main thing

00:38:06 --> 00:38:11
that we learned about as we were doing

00:38:07 --> 00:38:12
this kind of survey of the area is that

00:38:10 --> 00:38:15
we actually identified various

00:38:11 --> 00:38:16
limitations in terms of how people are

00:38:14 --> 00:38:19
approaching or how the research is

00:38:15 --> 00:38:22
approaching this problem so first let's

00:38:18 --> 00:38:23
look on the algorithm sign so there

00:38:21 --> 00:38:25
again there's a wide range of approaches

00:38:22 --> 00:38:27
that people are using to try and make

00:38:24 --> 00:38:29
the DNN algorithms or models more

00:38:26 --> 00:38:31
fficient so for example we kind of

00:38:28 --> 00:38:33
mentioned the idea of pruning the idea

00:38:30 --> 00:38:34
here is you're going to set some of the

00:38:32 --> 00:38:37
weights to become zero and again

00:38:33 --> 00:38:39
anything times zero is zero so you can

00:38:36 --> 00:38:41
skip those operations so there's a wide

00:38:38 --> 00:38:43
range of research there there's also

00:38:40 --> 00:38:44
looking at efficient network

00:38:42 --> 00:38:46
architectures meaning rather than making

00:38:43 --> 00:38:49
my neural networks very large these high

00:38:45 --> 00:38:51
three-dimensional convolutions can I

00:38:48 --> 00:38:53
decompose them into smaller filters

00:38:50 --> 00:38:56
right so rather than this 3d filter can

00:38:52 --> 00:38:57
I make it a 2d filter and kind of you

00:38:55 --> 00:39:00
know I also Trudy but you know one by

00:38:56 --> 00:39:02
one and into the screen itself another

00:38:59 --> 00:39:03
very popular thing is reduced precision

00:39:01 --> 00:39:06
so rather than using the default of

00:39:02 --> 00:39:09
32-bit float can I reduce the number of

00:39:05 --> 00:39:10
bits down to eight bits or even binary

00:39:08 --> 00:39:13
and we saw before that as we reduce the

00:39:09 --> 00:39:14
precision of these operations you also

00:39:12 --> 00:39:16
get energy savings and you also reduce

00:39:13 --> 00:39:19
data movement as well Kalif to move less

00:39:15 --> 00:39:22
data a lot of this work really focuses

00:39:18 --> 00:39:25
on reducing the number of Max and the

00:39:21 --> 00:39:27
number of weights and those primarily

00:39:24 --> 00:39:28
because those are easy to count but the

00:39:26 --> 00:39:30
question that we should be asking if we

00:39:27 --> 00:39:33
care about the system is does this

00:39:29 --> 00:39:35
actually translate into energy savings

00:39:32 --> 00:39:37
and reduce latency because from a

00:39:34 --> 00:39:38
systems point of view those are the

00:39:36 --> 00:39:39
things that we care about right we don't

00:39:37 --> 00:39:40
really you know when you're thinking

00:39:38 --> 00:39:41
about something running on your phone

00:39:39 --> 00:39:43
you don't care about the number of Max

00:39:40 --> 00:39:44
and weighs you care about how much

00:39:42 --> 00:39:46
energy is consuming because that's gonna

00:39:43 --> 00:39:49
ffect the battery life or how quickly

00:39:45 --> 00:39:51
it might react regulus that's a

00:39:48 --> 00:39:52
basically a measure of latency and again

00:39:50 --> 00:39:54
hopefully haven't forgotten but

00:39:51 --> 00:39:57
basically data movement is a

00:39:53 --> 00:39:59
pensive right so you really depends on

00:39:56 --> 00:40:00
you know how you move the data through

00:39:58 --> 00:40:02
the system so the key takeaway from this

00:39:59 --> 00:40:04
lide is that if you remember where the

00:40:01 --> 00:40:06
nergy come from comes from which is the

00:40:03 --> 00:40:08
data movement it's not because of how

00:40:05 --> 00:40:10
many weights are how many max you have

00:40:07 --> 00:40:12
but really it depends on where the

00:40:09 --> 00:40:15
weight comes from if it comes from this

00:40:11 --> 00:40:16
mall you know a small memory register

00:40:14 --> 00:40:19
file that's nearby it's gonna be super

00:40:15 --> 00:40:21
cheap as opposed to coming from Austria

00:40:18 --> 00:40:23
so all weights are basically not created

00:40:20 --> 00:40:24
equal all Macs are not created equal it

00:40:22 --> 00:40:27
really depends on the memory hierarchy

00:40:23 --> 00:40:29
and the data flow of the hardware itself

00:40:26 --> 00:40:31
okay so we can't just look at the number

00:40:28 --> 00:40:33
of weights and the number of Max and

00:40:30 --> 00:40:34
estimate how much Energy's gonna be

00:40:32 --> 00:40:36
consumed

00:40:33 --> 00:40:37
so this is quite a difficult challenge

00:40:35 --> 00:40:39
so within our group we've actually

00:40:36 --> 00:40:41
looked at developing different tools

00:40:38 --> 00:40:43
that allow us to estimate the energy

00:40:40 --> 00:40:45
consumption of the neural network itself

00:40:42 --> 00:40:47
so for example in this particular tool

00:40:44 --> 00:40:50
which is available on this website we

00:40:46 --> 00:40:51
basically take in you know the DNN

00:40:49 --> 00:40:54
weights and the input data including its

00:40:50 --> 00:40:56
parsity we know the different shapes of

00:40:53 --> 00:40:57
the different neural of the different

00:40:55 --> 00:40:59
layers of the neural net and we run an

00:40:56 --> 00:41:00
optimization that figures out you know

00:40:58 --> 00:41:02
the memory access how much you know the

00:40:59 --> 00:41:04
nergy consumed by the data movement and

00:41:01 --> 00:41:07
then the energy consumed by the multiply

00:41:03 --> 00:41:09
and accumulate computations and then the

00:41:06 --> 00:41:12
output is going to be a breakdown of the

00:41:08 --> 00:41:14
nergy for the different layers and once

00:41:11 --> 00:41:16
you have this you can kind of figure out

00:41:13 --> 00:41:19
well where is the energy going so I can

00:41:15 --> 00:41:22
target my design to minimize that energy

00:41:18 --> 00:41:24
consumption okay and so by doing this

00:41:21 --> 00:41:25
when we take a look it should be no

00:41:23 --> 00:41:28
surprise what are the key observations

00:41:24 --> 00:41:31
for this exercise is that the weights

00:41:27 --> 00:41:33
alone are not a good metric for energy

00:41:30 --> 00:41:36
consumption if you take a look at Google

00:41:32 --> 00:41:37
Annette for example it's running on kind

00:41:35 --> 00:41:40
of the IRAs architecture you can see

00:41:36 --> 00:41:43
that the weights only account for 22% of

00:41:39 --> 00:41:45
the overall energy in fact a lot of the

00:41:42 --> 00:41:46
nergy goes into moving the input

00:41:44 --> 00:41:49
feature maps and the output feature maps

00:41:45 --> 00:41:51
as well right and also computation so in

00:41:48 --> 00:41:53
general this is the same message as

00:41:50 --> 00:41:55
before we shouldn't just look at the

00:41:52 --> 00:41:56
data move in one particular data type we

00:41:54 --> 00:41:58
should look at the energy consumption of

00:41:55 --> 00:42:00
all the different data types to give us

00:41:57 --> 00:42:03
an overall view of where the energy is

00:41:59 --> 00:42:05
actually going okay and so once we

00:42:02 --> 00:42:07
actually know where the energy go is

00:42:04 --> 00:42:09
going how can we factor that into this

00:42:06 --> 00:42:11
of the neural networks to make them more

00:42:08 --> 00:42:14
fficient so we talked about the concept

00:42:10 --> 00:42:16
of pruning right so again pruning was

00:42:13 --> 00:42:18
etting some of the weights of the

00:42:15 --> 00:42:19
neural net to zero or you can think of

00:42:17 --> 00:42:21
it as removing some of the weights and

00:42:18 --> 00:42:23
so what we want to do here is that now

00:42:20 --> 00:42:25
e know that we know where the energy is

00:42:22 --> 00:42:27
going why don't we incorporate the

00:42:24 --> 00:42:30
nergy into the design of the algorithm

00:42:26 --> 00:42:31
for example to guide us to figure out

00:42:29 --> 00:42:34
where we should actually remove the

00:42:30 --> 00:42:37
weights from you know so for example

00:42:33 --> 00:42:39
t's say here this is on Alec's net for

00:42:36 --> 00:42:39
the same accuracy across the different

00:42:38 --> 00:42:41
approaches

00:42:38 --> 00:42:43
traditionally what happens is that

00:42:40 --> 00:42:45
people tend to remove the weights that

00:42:42 --> 00:42:47
are small then we call this magnitude

00:42:44 --> 00:42:50
based of pruning and you can see that

00:42:46 --> 00:42:52
you get about a 2x reduction in terms of

00:42:49 --> 00:42:54
energy consumption however we know that

00:42:51 --> 00:42:55
like the size of the weight has nothing

00:42:53 --> 00:42:56
to do with or the value of the way is

00:42:54 --> 00:42:58
nothing to do with the energy

00:42:55 --> 00:43:01
consumption ideally what you'd like to

00:42:57 --> 00:43:03
do is remove the weights that consume

00:43:00 --> 00:43:05
the most energy right in particularly we

00:43:02 --> 00:43:07
also know that the more weights that we

00:43:04 --> 00:43:09
move remove the accuracy is going to go

00:43:06 --> 00:43:10
down so to get the biggest bang for your

00:43:08 --> 00:43:13
buck you want to remove the weights that

00:43:09 --> 00:43:15
consume the most energy first one way

00:43:12 --> 00:43:17
ou can do this is you can take your

00:43:14 --> 00:43:19
neural network figure out the energy

00:43:16 --> 00:43:21
consumption of each of the layers of the

00:43:18 --> 00:43:23
neural network you can sort then sort

00:43:20 --> 00:43:25
he layers in terms of higher and higher

00:43:22 --> 00:43:27
energy layer to low Leonard Leonard G

00:43:24 --> 00:43:29
layers and then you prune the high

00:43:26 --> 00:43:31
energy layers first so this is what we

00:43:28 --> 00:43:34
call energy we're pruning and then by

00:43:30 --> 00:43:36
doing this you actually now get a 3.7 X

00:43:33 --> 00:43:39
reduction in energy consumption compared

00:43:35 --> 00:43:41
to 2x for the same accuracy and again

00:43:38 --> 00:43:43
this is because we factor in energy

00:43:40 --> 00:43:47
consumption into the design of the

00:43:42 --> 00:43:48
neural network itself or and the prune

00:43:46 --> 00:43:52
models are all available in the iris

00:43:47 --> 00:43:54
website another important thing that we

00:43:51 --> 00:43:56
care about from a performance point of

00:43:53 --> 00:43:58
view is latency right so for example

00:43:55 --> 00:44:00
latency has to do with how long it takes

00:43:57 --> 00:44:02
when I you know give it an image how

00:43:59 --> 00:44:05
long will I get the result back people

00:44:01 --> 00:44:07
are very sensitive to latency but the

00:44:04 --> 00:44:09
challenge here is that latency again is

00:44:06 --> 00:44:10
not directly correlated to things like

00:44:08 --> 00:44:12
number of multiplies and accumulates and

00:44:09 --> 00:44:14
so this is some data that was released

00:44:11 --> 00:44:17
by Google's mobile vision team and

00:44:13 --> 00:44:20
they're showing here on the x-axis the

00:44:16 --> 00:44:21
number of multiplies and accumulates you

00:44:19 --> 00:44:23
can do so go

00:44:20 --> 00:44:26
towards the left you're increasing and

00:44:22 --> 00:44:28
then on the y-axis this is the latency

00:44:25 --> 00:44:31
so this is actually the measured latency

00:44:27 --> 00:44:32
or delay it takes to get a results and

00:44:30 --> 00:44:35
what they're showing here is that the

00:44:31 --> 00:44:37
number of Max is not really a good

00:44:34 --> 00:44:40
approximation of latency so in fact for

00:44:36 --> 00:44:41
example given a you know layers the

00:44:39 --> 00:44:44
neural networks at the same number of

00:44:40 --> 00:44:46
Max there can be a 2x range or two

00:44:43 --> 00:44:49
explaining in terms of latency or

00:44:45 --> 00:44:50
looking at in a different way giving you

00:44:48 --> 00:44:53
know layer our neural Nets of the same

00:44:49 --> 00:44:56
latency they can have a 3x swing in

00:44:52 --> 00:44:57
terms of number of Max all right so the

00:44:55 --> 00:44:59
key takeaway here is that you can't just

00:44:56 --> 00:45:01
count the number of Max and say oh is

00:44:58 --> 00:45:04
this how quickly it's going to run it's

00:45:00 --> 00:45:08
actually much more challenging than that

00:45:03 --> 00:45:10
and so what we want to ask is is there a

00:45:07 --> 00:45:12
way that we can take latency and use

00:45:09 --> 00:45:14
that again to design the neural net

00:45:11 --> 00:45:17
correctly so rather than looking at max

00:45:13 --> 00:45:19
use latency and so together with

00:45:16 --> 00:45:21
Google's mobile vision team we developed

00:45:18 --> 00:45:22
this approach called net adopt and this

00:45:20 --> 00:45:25
really a way that you can tailor your

00:45:21 --> 00:45:27
particular neural network for a given

00:45:24 --> 00:45:29
mobile platform for a latency or an

00:45:26 --> 00:45:31
energy budget right so it automatically

00:45:28 --> 00:45:33
adapts the neural net for that platform

00:45:30 --> 00:45:35
itself and really what's driving the

00:45:32 --> 00:45:38
design is empirical measurements so

00:45:34 --> 00:45:40
measurements of how that particular

00:45:37 --> 00:45:43
network perform on that platform some

00:45:39 --> 00:45:44
asurements for things like latency and

00:45:42 --> 00:45:46
energy and the reason why we want to use

00:45:43 --> 00:45:48
mpirical measurements is that you can't

00:45:45 --> 00:45:50
often generate models for all the

00:45:47 --> 00:45:51
different types of hardware out there in

00:45:49 --> 00:45:53
the case of Google what they want is

00:45:50 --> 00:45:55
that you know if they have a new phone

00:45:52 --> 00:45:56
you can automatically tune the network

00:45:54 --> 00:45:58
for that particular phone you don't want

00:45:55 --> 00:46:00
o have to model the phone as well okay

00:45:57 --> 00:46:01
and so how does this work I'll walk you

00:45:59 --> 00:46:03
through it so you'll start off with a

00:46:00 --> 00:46:05
pre trained network so this is a network

00:46:02 --> 00:46:08
that's let's say trained in the cloud

00:46:04 --> 00:46:10
for very high accuracy great start off

00:46:07 --> 00:46:12
with that but it tends to be very large

00:46:09 --> 00:46:13
let's say and so what you're gonna do is

00:46:11 --> 00:46:15
you're going to take that into the net

00:46:12 --> 00:46:17
adapt algorithm you're gonna take a

00:46:14 --> 00:46:19
budget so a budget will tell you like oh

00:46:16 --> 00:46:21
I can afford only this type of latency

00:46:18 --> 00:46:23
or this amount of latency this amount of

00:46:20 --> 00:46:25
energy what net adapt will do is gonna

00:46:22 --> 00:46:28
generate a bunch of proposals so

00:46:24 --> 00:46:29
different options of how it might modify

00:46:27 --> 00:46:32
the network in terms of its dimensions

00:46:28 --> 00:46:34
it's going to measure these proposals on

00:46:31 --> 00:46:35
that platter --get platform that you

00:46:33 --> 00:46:37
care about

00:46:34 --> 00:46:38
and then based on these empirical

00:46:36 --> 00:46:41
measurements Ned adapt is going to then

00:46:38 --> 00:46:43
generate a new set of proposals and it

00:46:40 --> 00:46:46
will just iterate across this until it

00:46:42 --> 00:46:48
gets it and opted okay and again all of

00:46:45 --> 00:46:50
this is on the net adapt website I'm

00:46:47 --> 00:46:52
just to give you a quick example of how

00:46:49 --> 00:46:54
this might work so let's say you start

00:46:51 --> 00:46:56
off with it as your input a neural

00:46:53 --> 00:46:58
network you know that has the accuracy

00:46:55 --> 00:47:00
that you want but the latency is a

00:46:57 --> 00:47:02
hundred milliseconds and you would like

00:46:59 --> 00:47:04
for it to be 80 milliseconds you want it

00:47:01 --> 00:47:05
o be faster so what it's going to do is

00:47:03 --> 00:47:07
it's going to generate a bunch of

00:47:04 --> 00:47:10
proposals and what the proposals could

00:47:06 --> 00:47:11
involve doing is taking one layer of the

00:47:09 --> 00:47:15
neural net and reducing the number of

00:47:10 --> 00:47:17
channels until it hits the latency

00:47:14 --> 00:47:18
budget of 80 milliseconds and they can

00:47:16 --> 00:47:20
do that for all the different layers

00:47:17 --> 00:47:23
then it's going to tune these different

00:47:19 --> 00:47:24
layers and measure the accuracy right so

00:47:22 --> 00:47:27
let's say up this one where I just

00:47:23 --> 00:47:29
shortened the number of channels in

00:47:26 --> 00:47:31
layer one maintains actors at a 60% so

00:47:28 --> 00:47:32
that means I'm going to pick that and

00:47:30 --> 00:47:35
that's going to be the input or the

00:47:31 --> 00:47:38
output of this particular design so the

00:47:34 --> 00:47:39
output at 80 milliseconds hitting actors

00:47:37 --> 00:47:41
through 60 percent it's gonna be the

00:47:38 --> 00:47:43
input to the next iteration and then I'm

00:47:40 --> 00:47:45
going to tighten the budget okay again

00:47:42 --> 00:47:46
if you're interested I just invite you

00:47:44 --> 00:47:49
to go take a look at the net adapt paper

00:47:45 --> 00:47:51
but what are the what is the impact of

00:47:48 --> 00:47:52
this particular approach well it gives

00:47:50 --> 00:47:56
you actually a very much improved

00:47:51 --> 00:47:58
trade-off between latency and accuracy

00:47:55 --> 00:48:02
right so if you look at this plot again

00:47:57 --> 00:48:05
on the x-axis is the latency right so to

00:48:01 --> 00:48:08
the left is better so slower latency and

00:48:04 --> 00:48:10
then on the x-axis or y-axis that's

00:48:07 --> 00:48:12
gonna be the accuracy so higher better

00:48:09 --> 00:48:15
so here you want higher to the left is

00:48:11 --> 00:48:17
good and so we have first shown in blue

00:48:14 --> 00:48:20
and green various kind of handcrafted

00:48:16 --> 00:48:22
neural network based approaches and you

00:48:19 --> 00:48:25
can see Netta tap which generates no the

00:48:21 --> 00:48:27
red dots as it's iterating through like

00:48:24 --> 00:48:29
it's optimization and you can see that

00:48:26 --> 00:48:32
it Jeeves you know for the same accuracy

00:48:28 --> 00:48:35
can be 1 up to 1.7 X faster then you

00:48:31 --> 00:48:37
know a manually designed approach this

00:48:34 --> 00:48:40
approach is also under you know the

00:48:36 --> 00:48:41
umbrella of you know basically network

00:48:39 --> 00:48:43
architecture so just kind of also in

00:48:40 --> 00:48:45
that kind of flavor but in general the

00:48:42 --> 00:48:47
takeaway here is that if you're going to

00:48:44 --> 00:48:47
design neural networks or efficient

00:48:46 --> 00:48:50
neural network

00:48:47 --> 00:48:51
that you want to run quickly or you want

00:48:49 --> 00:48:53
o be energy-efficient you should really

00:48:50 --> 00:48:55
take you know put hardware into the

00:48:52 --> 00:48:58
design loop and take in you know the

00:48:54 --> 00:48:59
accurate energy or latency measurements

00:48:57 --> 00:49:03
into the design itself of the neural

00:48:58 --> 00:49:04
network this particular you know example

00:49:02 --> 00:49:06
here is shown for an image

00:49:03 --> 00:49:08
classification task meaning I give you

00:49:05 --> 00:49:10
an image and you can classify it to the

00:49:07 --> 00:49:12
right you can say what's in the image

00:49:09 --> 00:49:14
itself you can imagine that that's type

00:49:11 --> 00:49:16
of approach is kind of like reducing

00:49:13 --> 00:49:18
information right from a 2d image you

00:49:15 --> 00:49:20
reduce it down to a label this is very

00:49:17 --> 00:49:21
commonly used now but we actually want

00:49:19 --> 00:49:24
o see if we can still apply this

00:49:20 --> 00:49:26
approach to a more difficult task of

00:49:23 --> 00:49:28
something like depth estimation in this

00:49:25 --> 00:49:31
case you know I give you a 2d image and

00:49:27 --> 00:49:34
the output is also a 2d image where each

00:49:30 --> 00:49:35
pixel shows the depth of each or you

00:49:33 --> 00:49:36
know the output or the pressure it's

00:49:34 --> 00:49:39
basically showing the depth of each

00:49:35 --> 00:49:41
pixel at the input this is often what we

00:49:38 --> 00:49:44
referred to as you know monocular depth

00:49:40 --> 00:49:46
so I give you just a 2d you know depth

00:49:43 --> 00:49:48
image input and you can estimate the

00:49:45 --> 00:49:50
depth itself the reason why you want to

00:49:47 --> 00:49:52
do this is you know 2d cameras irregular

00:49:49 --> 00:49:55
cameras are pretty cheap right so I'd be

00:49:51 --> 00:49:56
ideal to be able to do this you can

00:49:54 --> 00:49:58
imagine like the way that we would do

00:49:55 --> 00:50:00
this is to use an auto encoder so the

00:49:57 --> 00:50:02
front half of the neural net is still

00:49:59 --> 00:50:04
ooking like it what we call it encoder

00:50:01 --> 00:50:05
it's a reduction element so this is very

00:50:03 --> 00:50:07
similar to what you would do for a

00:50:04 --> 00:50:10
classification but then the back end of

00:50:06 --> 00:50:11
the auto encoder is a decoder so it's

00:50:09 --> 00:50:13
going to expand the information back out

00:50:10 --> 00:50:15
right and so as I mentioned again this

00:50:12 --> 00:50:17
gonna be much more difficult than

00:50:14 --> 00:50:20
just classification because now my

00:50:16 --> 00:50:22
output has to be also very dense as well

00:50:19 --> 00:50:24
and so we want to see if we could make

00:50:21 --> 00:50:25
this really fast with approaches that we

00:50:23 --> 00:50:28
just talked about for example in that

00:50:24 --> 00:50:30
adapt I'm so indeed you can make it

00:50:27 --> 00:50:32
pretty fast if you apply Net adapt

00:50:29 --> 00:50:34
closely you know compact network design

00:50:31 --> 00:50:37
and then do some deploys decomposition

00:50:33 --> 00:50:39
you can actually increase the frame rate

00:50:36 --> 00:50:41
by an order of magnitude so again here

00:50:38 --> 00:50:44
I'm gonna show the plot on the x axis

00:50:40 --> 00:50:46
here is the frame rate on a Jetson th to

00:50:43 --> 00:50:49
GPU this is a magic measure with the

00:50:45 --> 00:50:52
batch size of one with 32-bit float and

00:50:48 --> 00:50:54
on the vertical axis the accuracy their

00:50:51 --> 00:50:56
depth estimation terms to the Delta one

00:50:53 --> 00:50:58
metric which means the percentage of

00:50:55 --> 00:51:01
pixels that are within 25 percent of the

00:50:57 --> 00:51:03
correct depth so higher the better

00:51:00 --> 00:51:05
and so you can see you know the various

00:51:02 --> 00:51:08
different proaches out out there this

00:51:04 --> 00:51:09
tar red star is the approach using fast

00:51:07 --> 00:51:11
a fast step using all the different

00:51:08 --> 00:51:12
efficient network design techniques that

00:51:10 --> 00:51:14
we talked about you can see you can get

00:51:11 --> 00:51:18
an order of magnitude over a 10x speed

00:51:13 --> 00:51:19
up while maintaining accuracy and the

00:51:17 --> 00:51:22
models and all the code to do this is

00:51:18 --> 00:51:24
available on the fast step website we

00:51:21 --> 00:51:26
presented this at Achra which is a

00:51:23 --> 00:51:28
robotics conference in the middle of

00:51:25 --> 00:51:30
last year and we want to show some live

00:51:27 --> 00:51:32
footage there so a dick row we actually

00:51:29 --> 00:51:34
captured some footage you know on an

00:51:31 --> 00:51:36
iPhone and showed the you know real-time

00:51:33 --> 00:51:37
depth estimation on an iPhone itself and

00:51:35 --> 00:51:40
you can do achieved about 40 frames per

00:51:36 --> 00:51:41
second on an iPhone using fast steps so

00:51:39 --> 00:51:44
yeah and if you're interested in this

00:51:40 --> 00:51:45
particular type of application or

00:51:43 --> 00:51:48
efficient networks for depth estimation

00:51:44 --> 00:51:50
invite you to visit the website for that

00:51:47 --> 00:51:52
okay so that's the algorithmic side of

00:51:49 --> 00:51:53
things but let's return to the hardware

00:51:51 --> 00:51:55
building specialized hardware that are

00:51:52 --> 00:51:58
fficient for a neural network

00:51:54 --> 00:52:00
processing so again we saw that you know

00:51:57 --> 00:52:02
there's many different ways of you know

00:51:59 --> 00:52:04
making the neural network efficient from

00:52:01 --> 00:52:06
Network pruning to efficient network

00:52:03 --> 00:52:08
architectures to reduce precision the

00:52:05 --> 00:52:10
challenge for the hardware designer

00:52:07 --> 00:52:13
though is that there's no guarantee as

00:52:09 --> 00:52:15
to which type of approach someone might

00:52:12 --> 00:52:17
apply to the algorithm that they're

00:52:14 --> 00:52:18
gonna run on the hardware right so if

00:52:16 --> 00:52:20
you only own the hardware you don't know

00:52:17 --> 00:52:21
hat kind of algorithm someone's gonna

00:52:19 --> 00:52:24
run on your hardware unless you own the

00:52:20 --> 00:52:26
whole stack so as a result you really

00:52:23 --> 00:52:28
need to have flexible hardware so

00:52:25 --> 00:52:29
it can support all of these different

00:52:27 --> 00:52:32
approaches and translate these

00:52:28 --> 00:52:35
approaches to improvements in energy

00:52:31 --> 00:52:38
efficiency and latency now the challenge

00:52:34 --> 00:52:39
is a lot of these specialized DNA and

00:52:37 --> 00:52:42
hardware that exists out there

00:52:38 --> 00:52:44
I often rely on certain properties of

00:52:41 --> 00:52:47
the DNN an order achieve high efficiency

00:52:43 --> 00:52:49
so a very typical structure that you

00:52:46 --> 00:52:51
might see is that you might have an

00:52:48 --> 00:52:54
array of multiply and accumulate units

00:52:50 --> 00:52:56
o Mac array and it's going to reduce

00:52:53 --> 00:52:59
memory access by amortize amides across

00:52:55 --> 00:53:01
erase what do I mean by that so if I

00:52:58 --> 00:53:02
read a weight once from the memory

00:53:00 --> 00:53:05
weight memory bus I'm gonna reuse it

00:53:01 --> 00:53:07
multiple times across the array send it

00:53:04 --> 00:53:08
across the array so one read and it can

00:53:06 --> 00:53:10
be used multiple times by multiple

00:53:07 --> 00:53:13
ngines for multiple Macs

00:53:09 --> 00:53:14
imilarly activation memory a memory

00:53:12 --> 00:53:17
read input

00:53:13 --> 00:53:20
once and we use it multiple times okay

00:53:16 --> 00:53:23
on the issue here is that the amount of

00:53:19 --> 00:53:25
reuse and the rate utilization depends

00:53:22 --> 00:53:26
on the number of channels you have on

00:53:24 --> 00:53:28
your neural net the size of the feature

00:53:25 --> 00:53:29
map and the batch size right so this is

00:53:27 --> 00:53:31
again just showing two different

00:53:28 --> 00:53:33
variations of you know you're gonna

00:53:30 --> 00:53:36
reuse based on the number of filters

00:53:32 --> 00:53:38
number of input channels feature map

00:53:35 --> 00:53:39
atch size and the problem now is that

00:53:37 --> 00:53:42
we start looking at these efficient

00:53:38 --> 00:53:43
neural network models they're not gonna

00:53:41 --> 00:53:46
have as much reuse rights particularly

00:53:42 --> 00:53:47
for the compact cases so for example a

00:53:45 --> 00:53:49
very typical approach is to use what we

00:53:46 --> 00:53:52
call depth wise layers we saw you took

00:53:48 --> 00:53:55
that 3d filter and then decomposed it

00:53:51 --> 00:53:56
into a 2d filter and a one by one right

00:53:54 --> 00:53:58
and so as a result you only have one

00:53:55 --> 00:54:00
channel so you're not gonna have much

00:53:57 --> 00:54:03
reuse across the input Channel and so

00:53:59 --> 00:54:04
rather than you know filling this array

00:54:02 --> 00:54:06
with a lot of computation that you can

00:54:03 --> 00:54:08
process you're only gonna be able to

00:54:05 --> 00:54:10
utilize a very small subset which I've

00:54:07 --> 00:54:12
highlighted here in green of the array

00:54:09 --> 00:54:13
itself for computation so even though

00:54:11 --> 00:54:15
you throw down you know a thousand

00:54:12 --> 00:54:18
multiplies ten thousand multiplies the

00:54:14 --> 00:54:21
Camellia engine only a very small subset

00:54:17 --> 00:54:22
of them can actually do work and that's

00:54:20 --> 00:54:24
not great so this is also an issue

00:54:21 --> 00:54:27
because as I scale up the array size

00:54:24 --> 00:54:28
it's gonna become less efficient ideally

00:54:26 --> 00:54:30
what you would like is that after I put

00:54:27 --> 00:54:32
more you know cores or processing

00:54:29 --> 00:54:34
elements down the system should run

00:54:31 --> 00:54:37
faster and I'm paying for more thing

00:54:33 --> 00:54:39
more coarse but it doesn't because it

00:54:36 --> 00:54:41
can't the data I can't reach or be

00:54:38 --> 00:54:43
reused by all of these is from cores and

00:54:40 --> 00:54:46
also be difficult to exploit sparsity so

00:54:42 --> 00:54:49
what you need here are two things one is

00:54:45 --> 00:54:50
a very flexible data flow meaning that

00:54:48 --> 00:54:54
here's many different ways for the data

00:54:49 --> 00:54:55
to move through this array right and so

00:54:53 --> 00:54:57
you can imagine rows stationary is a

00:54:54 --> 00:54:59
very flexible way that we can basically

00:54:56 --> 00:55:01
map the neural network onto the array

00:54:58 --> 00:55:03
itself you can see here in the iris a

00:55:00 --> 00:55:04
row stationary case that you know a lot

00:55:02 --> 00:55:07
of the processing elements can be used

00:55:03 --> 00:55:09
another thing is how do you actually

00:55:06 --> 00:55:12
deliver the data for this varying degree

00:55:08 --> 00:55:15
of reuse so here's like the spectrum of

00:55:11 --> 00:55:17
you know on chip networks in terms of

00:55:14 --> 00:55:19
basically how can I deliver data from

00:55:16 --> 00:55:22
that global buffer to all those parallel

00:55:18 --> 00:55:24
processing engines right um one use case

00:55:21 --> 00:55:26
is when I use these huge neural Nets

00:55:23 --> 00:55:28
that have a lot of reuse what I wanted

00:55:25 --> 00:55:31
his multicast meeting I read once from

00:55:27 --> 00:55:32
the global buffer and then I reused that

00:55:30 --> 00:55:34
data multiple times and all of my

00:55:31 --> 00:55:35
processing elements you can think about

00:55:33 --> 00:55:38
it's like broadcasting information out

00:55:34 --> 00:55:39
and a type of network that you would do

00:55:37 --> 00:55:42
for that is shown here on the right-hand

00:55:38 --> 00:55:44
side so this is lobe 8 bandwidth so I'm

00:55:41 --> 00:55:46
only reading very little data but high

00:55:43 --> 00:55:50
spatial reuse many many engines are

00:55:45 --> 00:55:51
using it on the other extreme when I

00:55:49 --> 00:55:53
design these very efficient neural

00:55:50 --> 00:55:55
networks I'm not gonna have very much

00:55:52 --> 00:55:57
reuse and so what I want is unique has

00:55:54 --> 00:55:59
meaning I'm gonna I don't want to spend

00:55:56 --> 00:56:01
send out unique information to each of

00:55:58 --> 00:56:03
the processing elements right so that

00:56:00 --> 00:56:05
hey can all you know work on so that's

00:56:02 --> 00:56:07
going to be as shown here on the left

00:56:04 --> 00:56:09
hand side a case where you have very

00:56:06 --> 00:56:12
high bandwidth there's a lot of unique

00:56:08 --> 00:56:14
information going out and low spatial

00:56:11 --> 00:56:16
reuse they're not sharing data now it's

00:56:13 --> 00:56:18
very challenging to go across this

00:56:15 --> 00:56:21
entire spectrum one solution would be

00:56:17 --> 00:56:23
what we call in all - all network that

00:56:20 --> 00:56:24
satisfies all of this so all things are

00:56:22 --> 00:56:26
can all inputs are connected all book

00:56:23 --> 00:56:30
that's gonna be very expensive and not

00:56:25 --> 00:56:31
scalable one solution that we have -

00:56:29 --> 00:56:33
this is what we call a hierarchical mesh

00:56:30 --> 00:56:36
so you can break this problem into two

00:56:32 --> 00:56:39
steps at the lowest level you can use an

00:56:35 --> 00:56:41
all - all connection right and then at

00:56:38 --> 00:56:43
he higher level you can use a mesh

00:56:40 --> 00:56:45
connection and so the mesh will allow

00:56:42 --> 00:56:47
you to scale up but the all-to-all

00:56:44 --> 00:56:48
ows you to achieve a lot of different

00:56:46 --> 00:56:50
ypes of reuse and with this type of

00:56:47 --> 00:56:52
network on chip you can basically

00:56:49 --> 00:56:54
support a lot of different delivery

00:56:51 --> 00:56:56
mechanisms to deliver data from the

00:56:53 --> 00:56:58
global buffer to all the processing

00:56:55 --> 00:57:00
elements so that all your cores all your

00:56:57 --> 00:57:02
computes can be happening at the same

00:56:59 --> 00:57:04
time and at its core this is one of the

00:57:01 --> 00:57:07
key things that enable the second

00:57:04 --> 00:57:10
version of iris to be both flexible and

00:57:06 --> 00:57:12
efficient right so this is some results

00:57:09 --> 00:57:14
from the second version of iris it

00:57:11 --> 00:57:16
supports a wide rater to filter state

00:57:13 --> 00:57:20
suppose the very large shapes as well as

00:57:15 --> 00:57:22
very compact including convolutional

00:57:19 --> 00:57:24
fully connected depth wise layers so you

00:57:21 --> 00:57:26
can see here in this plot you know

00:57:23 --> 00:57:29
depending on the shape you can get up to

00:57:25 --> 00:57:31
an order of magnitude speed-up um it

00:57:28 --> 00:57:33
also supports a wide range of sparsity

00:57:30 --> 00:57:35
is both dense and sparse so this is

00:57:32 --> 00:57:36
really important because some networks

00:57:34 --> 00:57:38
can be very sparse because you've done a

00:57:35 --> 00:57:39
lot of pruning but some are not and so

00:57:37 --> 00:57:40
you want to officially support all of

00:57:38 --> 00:57:42
those

00:57:39 --> 00:57:43
you also want to be scalable so as you

00:57:41 --> 00:57:46
increase the number of processing

00:57:42 --> 00:57:49
elements you know the throughput also

00:57:45 --> 00:57:51
speeds up and as a result of this

00:57:48 --> 00:57:53
particular type of design you get an

00:57:50 --> 00:57:57
order of magnitude improvement in both

00:57:52 --> 00:57:58
speed and energy efficiency alright so

00:57:56 --> 00:58:00
this is great and this is one way that

00:57:57 --> 00:58:03
you can you know speed up and make

00:57:59 --> 00:58:04
neural networks more efficient but it's

00:58:02 --> 00:58:06
also important to take a step back and

00:58:03 --> 00:58:08
look beyond just you know building

00:58:05 --> 00:58:10
specialized Hardware the accelerator

00:58:07 --> 00:58:13
itself both in terms of algorithms and

00:58:09 --> 00:58:16
the hardware so can we look beyond the

00:58:12 --> 00:58:18
DNA on accelerator for acceleration and

00:58:15 --> 00:58:20
so one good place to show this an

00:58:17 --> 00:58:22
example is the task of super resolution

00:58:19 --> 00:58:24
so how many of you are familiar with the

00:58:21 --> 00:58:26
task of super resolution alright so for

00:58:23 --> 00:58:28
those of you who aren't the ideas as

00:58:25 --> 00:58:32
follows so I want to basically generate

00:58:27 --> 00:58:34
a high resolution image from a small and

00:58:31 --> 00:58:35
resolution image and why do you want to

00:58:33 --> 00:58:36
do that well there are a couple of

00:58:34 --> 00:58:39
reasons one is that it can allow you to

00:58:35 --> 00:58:41
basically reduce the transmitted

00:58:38 --> 00:58:42
bandwidth so for example if you have

00:58:40 --> 00:58:45
limited communication I'm going to send

00:58:41 --> 00:58:46
a low res version of a video let's there

00:58:44 --> 00:58:48
image to your phone and then therefore

00:58:45 --> 00:58:51
you can make it high res okay that's one

00:58:47 --> 00:58:53
way another reason is that you know

00:58:50 --> 00:58:54
screens in general are getting larger

00:58:52 --> 00:58:56
and larger so every year at CES they

00:58:53 --> 00:58:58
announce like a higher resolution screen

00:58:55 --> 00:58:59
but you know if you think about the

00:58:57 --> 00:59:02
movies that we watch they're all a lot

00:58:58 --> 00:59:04
of them are still 1080p for example or a

00:59:01 --> 00:59:05
fixed resolution so again you want to

00:59:03 --> 00:59:08
generate a high resolution

00:59:04 --> 00:59:11
representation of that you know low

00:59:07 --> 00:59:12
resolution input and the idea here is

00:59:10 --> 00:59:13
that your high resolutions not just

00:59:11 --> 00:59:15
interpolation because it can be very

00:59:12 --> 00:59:18
blurry but there's ways that I kind of

00:59:14 --> 00:59:21
hallucinate a high resolution version of

00:59:17 --> 00:59:24
the video or image itself and that's

00:59:20 --> 00:59:25
basically called super resolution but

00:59:23 --> 00:59:27
he one of the challenges for super

00:59:24 --> 00:59:29
esolution is that it's computationally

00:59:26 --> 00:59:30
very expensive so again you can imagine

00:59:28 --> 00:59:34
that the state of the art approaches for

00:59:29 --> 00:59:35
super res use deep neural nets a lot of

00:59:33 --> 00:59:36
the examples we just talked about what

00:59:34 --> 00:59:38
about neural nets are talking about

00:59:35 --> 00:59:40
input images of like 200 by 200 pixels

00:59:37 --> 00:59:42
now imagine if you extend that to like

00:59:39 --> 00:59:45
an HD image it's going to be very very

00:59:41 --> 00:59:47
expensive so what we want to do is think

00:59:44 --> 00:59:50
of different ways that we can speed up

00:59:46 --> 00:59:52
the super resolution process not just by

00:59:49 --> 00:59:53
making dnns faster but kind of looking

00:59:51 --> 00:59:55
around

00:59:52 --> 00:59:56
the other components of the system and

00:59:54 --> 00:59:58
seeing if we can make it faster as well

00:59:55 --> 01:00:00
so one of the things approaches we took

00:59:57 --> 01:00:02
is as framework called fast where we're

00:59:59 --> 01:00:04
looking at accelerating any

01:00:01 --> 01:00:05
super-resolution algorithm by an order

01:00:03 --> 01:00:08
of magnitude and this is operated on a

01:00:04 --> 01:00:10
compressed video so you know before I

01:00:07 --> 01:00:12
was a faculty here I worked a lot on

01:00:09 --> 01:00:15
video compression and if you think about

01:00:11 --> 01:00:17
he video compression community they

01:00:14 --> 01:00:19
look at very video very differently than

01:00:16 --> 01:00:21
people who process super resolution so

01:00:18 --> 01:00:23
typically when you're thinking about

01:00:20 --> 01:00:25
image processing is for resolution when

01:00:22 --> 01:00:26
I give you a compressed video what you

01:00:24 --> 01:00:29
basically think of it is as a stack of

01:00:25 --> 01:00:31
pixels right a bunch of different images

01:00:28 --> 01:00:33
together but if you asked a video

01:00:30 --> 01:00:34
compression person you know what is the

01:00:32 --> 01:00:38
compressed video look like it's actually

01:00:33 --> 01:00:40
a compressed video is a very structured

01:00:37 --> 01:00:43
representation of the redundancy in the

01:00:39 --> 01:00:44
video itself so why is it that we can

01:00:42 --> 01:00:46
compress videos is because things like

01:00:43 --> 01:00:48
different frames look very you know

01:00:45 --> 01:00:50
consecutive frames look very similar so

01:00:47 --> 01:00:52
it's telling you you know which pixels

01:00:49 --> 01:00:54
in frame one is related to which pixel

01:00:51 --> 01:00:56
or looks like which pixel in frame two

01:00:53 --> 01:00:58
and so as a result you have to send the

01:00:55 --> 01:00:59
pixels in frame two and that's where you

01:00:57 --> 01:01:01
get the compression from so actually

01:00:58 --> 01:01:04
what a compressed video looks like is a

01:01:00 --> 01:01:07
description of the structure of the

01:01:03 --> 01:01:09
video itself okay and so you can use

01:01:06 --> 01:01:12
this representation to accelerate super

01:01:08 --> 01:01:15
esolution so for example rather than

01:01:11 --> 01:01:17
applying super resolution to every

01:01:14 --> 01:01:18
single low res frame which is the

01:01:16 --> 01:01:20
typical approach that you would apply

01:01:17 --> 01:01:22
super resolution to each low res frame

01:01:19 --> 01:01:24
and you would generate a bunch of high

01:01:21 --> 01:01:27
res frame outputs what you can actually

01:01:23 --> 01:01:30
do is apply super resolution to one of

01:01:26 --> 01:01:33
the small low resolution frames and then

01:01:29 --> 01:01:34
you can use that free information you

01:01:32 --> 01:01:36
can the compressed video that tells you

01:01:33 --> 01:01:38
the structure of the video to generate

01:01:35 --> 01:01:42
or transfer and generate all those high

01:01:37 --> 01:01:43
resolution videos from that and so only

01:01:41 --> 01:01:46
needs to run on a subset of frames and

01:01:42 --> 01:01:48
then the complexity to reconstruct all

01:01:45 --> 01:01:50
those high resolution frames once you

01:01:47 --> 01:01:52
have that structured image is going to

01:01:49 --> 01:01:55
be very low so for example if I'm gonna

01:01:51 --> 01:01:58
transfer to n frames I'm gonna get an

01:01:54 --> 01:02:00
end frame an X speed-up so to evaluate

01:01:57 --> 01:02:02
this we showcase this on a range of

01:01:59 --> 01:02:04
videos this range of videos is the data

01:02:01 --> 01:02:06
set that we use to develop video

01:02:03 --> 01:02:08
standards so it's quite broad

01:02:05 --> 01:02:10
you can see first on the left hand side

01:02:07 --> 01:02:13
is that if I transfer to like four

01:02:09 --> 01:02:15
different frames you can get a four

01:02:12 --> 01:02:17
acceleration and then the psnr which

01:02:14 --> 01:02:20
indicates the quality doesn't change

01:02:16 --> 01:02:22
it's the same quality but 4x faster if I

01:02:19 --> 01:02:24
do transfer to 16 frames or 16

01:02:21 --> 01:02:28
acceleration there's a slight drop in

01:02:23 --> 01:02:31
quality but still you get a basically a

01:02:27 --> 01:02:33
16x acceleration so the key idea here is

01:02:30 --> 01:02:35
again you'd want to look beyond you know

01:02:32 --> 01:02:36
the processing of the neural network

01:02:34 --> 01:02:38
itself to around it to see if you can

01:02:35 --> 01:02:39
speed it up I'm usually with Pearson or

01:02:37 --> 01:02:41
you can't really tell too much for the

01:02:38 --> 01:02:42
quality so another way to look at it is

01:02:40 --> 01:02:45
actually look at the video itself or

01:02:41 --> 01:02:47
subjective quality so on the left hand

01:02:44 --> 01:02:49
side here this is if I applied super

01:02:46 --> 01:02:52
esolution on every single frame so this

01:02:48 --> 01:02:55
a traditional way of doing it on the

01:02:51 --> 01:02:57
right hand side here this is if I just

01:02:54 --> 01:02:59
did interpolation on every single frame

01:02:56 --> 01:03:01
and so where you can tell the difference

01:02:58 --> 01:03:02
is by looking at things like the text

01:03:00 --> 01:03:04
you can see that the text is much

01:03:01 --> 01:03:08
sharper on the Left video than the right

01:03:03 --> 01:03:10
video now a fast plus SRC on using fast

01:03:07 --> 01:03:13
is somewhere in between so fast

01:03:09 --> 01:03:15
actually has the same quality as the

01:03:12 --> 01:03:17
video on the left hand side but it's

01:03:14 --> 01:03:20
just as efficient in terms of processing

01:03:16 --> 01:03:21
speed as the approach on the right hand

01:03:19 --> 01:03:22
side so it kind of has the best of both

01:03:20 --> 01:03:25
worlds

01:03:21 --> 01:03:27
and so the key takeaway for this is that

01:03:24 --> 01:03:29
if you want to accelerate dnns for a

01:03:26 --> 01:03:31
given process it's good to look beyond

01:03:28 --> 01:03:32
you know the hardware for the

01:03:30 --> 01:03:34
acceleration we can look at things like

01:03:31 --> 01:03:36
the structure of the data that's

01:03:33 --> 01:03:38
entering the neural network accelerator

01:03:35 --> 01:03:40
there might be opportunities there for

01:03:37 --> 01:03:41
example I hear a temporal correlation

01:03:39 --> 01:03:43
that allows you to further accelerate

01:03:40 --> 01:03:45
the processing again if you're

01:03:42 --> 01:03:47
interested in this all the code is on

01:03:44 --> 01:03:48
the website so to end this lecture I

01:03:46 --> 01:03:50
just want to talk about things that are

01:03:47 --> 01:03:52
actually beyond deep neural nets I also

01:03:49 --> 01:03:54
I know neural nets are great they're

01:03:51 --> 01:03:55
useful for many applications but I think

01:03:53 --> 01:03:57
there's a lot of exciting problems

01:03:54 --> 01:04:00
outside the space of neural nets as well

01:03:56 --> 01:04:02
which also require efficient computing

01:03:59 --> 01:04:05
so the first thing is what we call

01:04:01 --> 01:04:06
visual inertial localization or visual

01:04:04 --> 01:04:08
odometry

01:04:05 --> 01:04:10
this is something as widely used for

01:04:07 --> 01:04:11
obots to kind of figure out where they

01:04:09 --> 01:04:13
are and the willwill so you can imagine

01:04:10 --> 01:04:15
for autonomous navigation before you you

01:04:12 --> 01:04:16
know navigate the world you have to know

01:04:14 --> 01:04:18
here you actually are in the world so

01:04:15 --> 01:04:20
that's the localization this is also

01:04:17 --> 01:04:21
widely used for things like AR and

01:04:19 --> 01:04:23
while Rex you can know where you're

01:04:20 --> 01:04:25
actually looking and they aren't veer

01:04:22 --> 01:04:27
what does this actually mean it means

01:04:24 --> 01:04:29
that you can basically take in a

01:04:26 --> 01:04:31
sequence of images so you can Majan like

01:04:28 --> 01:04:34
a camera that's mounted on the robot or

01:04:30 --> 01:04:36
the person as well as an IMU so it has

01:04:33 --> 01:04:38
accelerometer and gyroscope information

01:04:35 --> 01:04:40
and in visual inertial odometry

01:04:37 --> 01:04:43
which is a subset of SLAM basically

01:04:39 --> 01:04:45
fuses this information together and the

01:04:42 --> 01:04:47
outcome of visual inertial Dom tree is

01:04:44 --> 01:04:48
the localization so you can see here

01:04:46 --> 01:04:51
basically you're trying to estimate

01:04:47 --> 01:04:53
where you are in the 3d space and the

01:04:50 --> 01:04:55
pose based on in this case the camera

01:04:52 --> 01:04:56
feed but you can also measure IMU

01:04:54 --> 01:04:58
information there as well and if you're

01:04:55 --> 01:05:02
in an unknown environment you could also

01:04:57 --> 01:05:04
generate a map so you know one of these

01:05:01 --> 01:05:05
is a very key task and navigation and

01:05:03 --> 01:05:08
the key thing is can you do in a fair

01:05:04 --> 01:05:10
energy efficient way um so we've looked

01:05:07 --> 01:05:13
at kind of building specialized hardware

01:05:09 --> 01:05:15
to do localization this is actually the

01:05:12 --> 01:05:17
first chip that performs like complete

01:05:14 --> 01:05:18
visual inertial odometry on chip we call

01:05:16 --> 01:05:20
it Navi on this and done in

01:05:17 --> 01:05:22
collaboration with search Carmen um so

01:05:19 --> 01:05:24
you can see here here's the chip itself

01:05:21 --> 01:05:25
it's four millimeters by four five

01:05:23 --> 01:05:27
millimeters you can see that it's

01:05:24 --> 01:05:30
maller than a quarter and it can you

01:05:26 --> 01:05:31
imagine mounting it on a small robot at

01:05:29 --> 01:05:33
he front end it does basically

01:05:30 --> 01:05:34
processing of the camera information it

01:05:32 --> 01:05:38
does things like feature detection

01:05:33 --> 01:05:40
tracking outlier elimination it also

01:05:37 --> 01:05:43
processes uh does pre integration on the

01:05:39 --> 01:05:45
IMU and then on the back end it fuses

01:05:42 --> 01:05:48
this information together using a factor

01:05:44 --> 01:05:50
graph okay and so when you compare you

01:05:47 --> 01:05:52
know this particular design this Navion

01:05:49 --> 01:05:54
chip design compared to mobile or

01:05:51 --> 01:05:57
desktop CPUs you're talking about two to

01:05:53 --> 01:05:59
three orders of magnitude reduction in

01:05:56 --> 01:06:01
energy consumption because you have the

01:05:58 --> 01:06:02
specialized chip to do it so one you

01:06:00 --> 01:06:04
know what is the key component of this

01:06:01 --> 01:06:06
chip then able to do it well again

01:06:03 --> 01:06:08
sticking with the theme the key thing is

01:06:05 --> 01:06:10
reduction in data movement in particular

01:06:07 --> 01:06:12
we reduce the amount of data that needs

01:06:09 --> 01:06:14
to be moved on and off chip so all of

01:06:11 --> 01:06:18
the processing is located on the chip

01:06:13 --> 01:06:19
itself and then furthermore because we

01:06:17 --> 01:06:20
want to reduce the size of the chip and

01:06:18 --> 01:06:23
the size of the memories we do things

01:06:19 --> 01:06:26
like apply low-cost compression on the

01:06:22 --> 01:06:28
frames and then also exploit sparsity

01:06:25 --> 01:06:30
which means number of zeros in the

01:06:27 --> 01:06:32
factor graph itself so all of the

01:06:29 --> 01:06:34
compression and exploiting sparsity can

01:06:31 --> 01:06:36
actually reduce the storage cost down to

01:06:33 --> 01:06:38
a megabyte of storage on ship to do this

01:06:35 --> 01:06:41
processing and that allows us to achieve

01:06:37 --> 01:06:45
this really low power consumption of 25

01:06:40 --> 01:06:46
below 25 milliwatts another thing that

01:06:44 --> 01:06:49
really matters for autonomous navigation

01:06:45 --> 01:06:51
is once you know where you are where are

01:06:48 --> 01:06:53
you gonna go next so this is kind of a

01:06:50 --> 01:06:54
planning and mapping problem and so in

01:06:52 --> 01:06:56
the context of things like robot

01:06:53 --> 01:06:58
exploration where you where and I

01:06:55 --> 01:07:00
basically explore an unknown area you

01:06:57 --> 01:07:02
can you do this by doing what we call a

01:06:59 --> 01:07:04
Shannon's computing Shannon's mutual

01:07:01 --> 01:07:05
information basically you wanna figure

01:07:03 --> 01:07:07
out where should I go next but I will

01:07:04 --> 01:07:09
discover the most amount of new

01:07:06 --> 01:07:09
information compared to what I already

01:07:08 --> 01:07:12
know

01:07:08 --> 01:07:14
right so you can imagine so stone here's

01:07:11 --> 01:07:15
like an occupancy map so this is

01:07:13 --> 01:07:17
basically the light colors showed the

01:07:14 --> 01:07:21
place where it's free space is empty

01:07:16 --> 01:07:23
nothing's occupied the dark gray area is

01:07:20 --> 01:07:26
unknown and then the black lines are

01:07:22 --> 01:07:27
occupied things like walls for example

01:07:25 --> 01:07:30
and the question is if I know that this

01:07:26 --> 01:07:31
my current occupancy map where should

01:07:29 --> 01:07:35
I go and scan let's say with the depth

01:07:30 --> 01:07:37
sensor to figure out you know more

01:07:34 --> 01:07:38
information about the map itself

01:07:36 --> 01:07:40
so what you can do is you can compute

01:07:37 --> 01:07:42
what we call the mutual information of

01:07:39 --> 01:07:44
the map itself based on what you already

01:07:41 --> 01:07:46
know and then you go to the location

01:07:43 --> 01:07:48
with the most information and you scan

01:07:45 --> 01:07:50
it and then you get an updated map so

01:07:47 --> 01:07:52
shown here below is a miniature race

01:07:49 --> 01:07:56
card that's doing exactly that right so

01:07:51 --> 01:07:57
ver here over here is the mutual

01:07:55 --> 01:08:01
information that's being computed so

01:07:56 --> 01:08:02
it's trying to go to those light you

01:08:00 --> 01:08:04
know light areas of the yellow areas

01:08:01 --> 01:08:05
that has the most information so you can

01:08:03 --> 01:08:09
see that it's going to try and back up

01:08:04 --> 01:08:10
and come and scan this region to cover

01:08:08 --> 01:08:13
or figure out more information about

01:08:09 --> 01:08:18
hat okay so that's great it's a very

01:08:12 --> 01:08:20
principled way of doing this the problem

01:08:17 --> 01:08:22
of this kind of computation the reason

01:08:19 --> 01:08:24
why it's been challenging is again the

01:08:21 --> 01:08:25
computation in particular the data

01:08:23 --> 01:08:28
movement so you can imagine at any given

01:08:24 --> 01:08:30
position you're gonna do like a kind of

01:08:27 --> 01:08:33
a 3d scanning with your lidar across a

01:08:29 --> 01:08:34
wide range of neighboring regions with

01:08:32 --> 01:08:35
your beams you can imagine each of these

01:08:33 --> 01:08:38
beams with your lighter scan can be

01:08:35 --> 01:08:40
processed with different cores so they

01:08:37 --> 01:08:41
can all be processed in parallel so

01:08:39 --> 01:08:44
parallelism again here just like the

01:08:40 --> 01:08:46
deep learning case is very easily

01:08:43 --> 01:08:48
available the

01:08:45 --> 01:08:50
Challenge is data delivery right so what

01:08:47 --> 01:08:53
happens is that you're actually storing

01:08:49 --> 01:08:55
your occupancy map all in one memory but

01:08:52 --> 01:08:57
now you have multiple cores that are

01:08:54 --> 01:09:00
gonna try and process the scans on this

01:08:56 --> 01:09:01
occupancy map right and so you only

01:08:59 --> 01:09:03
actually typically for these types of

01:09:00 --> 01:09:05
numbers you're limited to two ports but

01:09:02 --> 01:09:07
if you want to have you know nCore 16

01:09:04 --> 01:09:09
cores 30 course it's going to be a

01:09:06 --> 01:09:11
challenge in terms of how to read data

01:09:08 --> 01:09:13
from this occupancy map and deliver to

01:09:10 --> 01:09:15
the course themselves if we take a

01:09:12 --> 01:09:17
closer look at you know the memory

01:09:14 --> 01:09:19
access pattern you can see here that as

01:09:16 --> 01:09:22
you scan it out the numbers indicate

01:09:18 --> 01:09:24
which cycle you would use to read you

01:09:21 --> 01:09:27
know each of the locations on the map

01:09:23 --> 01:09:29
itself okay and you can see it's kind of

01:09:26 --> 01:09:32
a diagonal pattern so the question is

01:09:28 --> 01:09:35
can I break this map into smaller

01:09:31 --> 01:09:36
memories right and then access these

01:09:34 --> 01:09:37
smaller memories in parallel and the

01:09:35 --> 01:09:40
question is I can break it into smaller

01:09:36 --> 01:09:41
memories how should I decide what part

01:09:39 --> 01:09:44
of the map should go into which of these

01:09:40 --> 01:09:46
memories so show here on the right hand

01:09:43 --> 01:09:48
side in the different different colors

01:09:45 --> 01:09:50
basically in indicate different memories

01:09:47 --> 01:09:51
or different banks of the memory so they

01:09:49 --> 01:09:53
store different parts of the map and

01:09:50 --> 01:09:56
again if you think of the numbers as you

01:09:52 --> 01:09:57
know the cycle with which each location

01:09:55 --> 01:10:01
is accessed what you'll notice is that

01:09:56 --> 01:10:03
for any given color and most two numbers

01:10:00 --> 01:10:05
are the same meaning that I'm only going

01:10:02 --> 01:10:07
to access two pieces of the location for

01:10:04 --> 01:10:09
any given thing so there's going to be

01:10:06 --> 01:10:12
no conflict so I can process all of

01:10:08 --> 01:10:14
these beams in parallel okay and so by

01:10:11 --> 01:10:17
doing this this allows you to compute

01:10:13 --> 01:10:19
the mutual information of the entire map

01:10:16 --> 01:10:21
and by internet can be very large map

01:10:18 --> 01:10:24
let say 200 meters by 200 meters at

01:10:20 --> 01:10:26
point 1 meter resolution in under a

01:10:23 --> 01:10:27
second this is very different from

01:10:25 --> 01:10:29
before where you know you can only

01:10:26 --> 01:10:30
compute the mutual information of a

01:10:28 --> 01:10:31
subset of location then just try and

01:10:29 --> 01:10:33
pick the best one

01:10:30 --> 01:10:34
now you can compute it on the entire map

01:10:32 --> 01:10:36
so you can know the absolute best

01:10:33 --> 01:10:39
location to go to to get the most

01:10:35 --> 01:10:41
information this is 100x speed-up

01:10:38 --> 01:10:44
compared to a CPU at 1/10 of the power

01:10:40 --> 01:10:47
ight on an FPGA so that's another

01:10:43 --> 01:10:49
important example of how data movements

01:10:46 --> 01:10:51
really critical in order to allow you to

01:10:48 --> 01:10:53
process things very very quickly and

01:10:50 --> 01:10:55
having having specialized Hardware

01:10:52 --> 01:10:57
Knable that all right so one last thing

01:10:54 --> 01:10:58
is looking at you know so we talked

01:10:56 --> 01:11:00
about robotics talk about deep learning

01:10:57 --> 01:11:00
but actually what's really important

01:10:59 --> 01:11:02
here's a lot of

01:10:59 --> 01:11:03
important applications that where you

01:11:01 --> 01:11:06
can apply efficient processing that can

01:11:02 --> 01:11:07
you know help a lot of people around the

01:11:05 --> 01:11:10
world so in particularly looking at

01:11:06 --> 01:11:11
monitoring neurodegenerative disease of

01:11:09 --> 01:11:13
disorders so we know things like

01:11:10 --> 01:11:15
dementia so things like Alzheimer's

01:11:12 --> 01:11:17
Parkinson's affects you know tens of

01:11:14 --> 01:11:19
millions of people around the world and

01:11:16 --> 01:11:22
continues to grow this is a very severe

01:11:18 --> 01:11:24
disease the challenge for this disease

01:11:21 --> 01:11:25
is that one of the many challenges but

01:11:23 --> 01:11:27
one of the challenges that the

01:11:24 --> 01:11:28
neurological assessments for these

01:11:26 --> 01:11:30
disease can be very time consuming and

01:11:27 --> 01:11:32
require a trained specialists so

01:11:29 --> 01:11:34
normally if you are suffering from one

01:11:31 --> 01:11:36
of these diseases or you might have this

01:11:33 --> 01:11:38
disease what you need to do is you need

01:11:35 --> 01:11:40
to go see a specialist and they'll ask

01:11:37 --> 01:11:42
you a series of questions like a mini

01:11:39 --> 01:11:44
mental is that like what year is it

01:11:41 --> 01:11:45
where are you now can you count

01:11:43 --> 01:11:47
backwards and so on or you might be

01:11:44 --> 01:11:50
familiar with like people are asked to

01:11:46 --> 01:11:52
draw the clock these tests and so you

01:11:49 --> 01:11:54
can imagine going to a specialist to do

01:11:51 --> 01:11:55
these type of things can be costly and

01:11:53 --> 01:11:57
time consuming so you don't go very

01:11:54 --> 01:11:59
frequently so that as a result the data

01:11:56 --> 01:12:01
that's collected very sparse also it's

01:11:58 --> 01:12:03
very qualitative right so if you go to

01:12:00 --> 01:12:05
different specialists they might come up

01:12:02 --> 01:12:08
with a different assessment right so

01:12:04 --> 01:12:10
repeatability is also very much an issue

01:12:07 --> 01:12:12
well it's been super exciting is it's

01:12:09 --> 01:12:15
been shown a literature that there's

01:12:11 --> 01:12:18
actually a quantitative way of measuring

01:12:14 --> 01:12:20
or quantitative evaluating these types

01:12:17 --> 01:12:22
of diseases potentially using eye

01:12:19 --> 01:12:24
movements right so I mean this can be

01:12:21 --> 01:12:27
used by quantitative way to evaluate the

01:12:23 --> 01:12:28
severity or progression or regression of

01:12:26 --> 01:12:30
these particular type of diseases you

01:12:27 --> 01:12:31
imagine doing things like you know if

01:12:29 --> 01:12:33
you're taking a certain drug is your

01:12:30 --> 01:12:35
disease getting better or worse and this

01:12:32 --> 01:12:37
movement can give a quantitative

01:12:34 --> 01:12:39
valuation for that but the challenge is

01:12:36 --> 01:12:41
that to do these eye movement

01:12:38 --> 01:12:43
evaluations you still need to go into

01:12:40 --> 01:12:45
that so first you need a very high-speed

01:12:42 --> 01:12:47
camera that can be very expensive often

01:12:44 --> 01:12:48
you need to have substantial head

01:12:46 --> 01:12:49
supports your head doesn't move so you

01:12:47 --> 01:12:51
can really detect the eye move it and

01:12:48 --> 01:12:53
you might even need IR illumination so

01:12:50 --> 01:12:55
you more clear can more clearly see the

01:12:52 --> 01:12:57
ye and so again this still has the

01:12:54 --> 01:12:59
challenge that for clinical measurements

01:12:56 --> 01:13:01
of what we call saccade lanes your eye

01:12:58 --> 01:13:02
movement latency or eye reaction time

01:13:00 --> 01:13:05
they're done in very constrained

01:13:01 --> 01:13:06
environments you still have to go see

01:13:04 --> 01:13:09
the SPECIAL itself and here they use

01:13:05 --> 01:13:11
very specialized and costly equipment so

01:13:08 --> 01:13:12
in the vein of and you know enabling

01:13:10 --> 01:13:14
efficient and computing and bringing

01:13:11 --> 01:13:16
compute to various devices

01:13:13 --> 01:13:18
our question is can we actually do these

01:13:15 --> 01:13:22
ye measurement measurements on a phone

01:13:17 --> 01:13:23
itself that we all have and so indeed

01:13:21 --> 01:13:25
you can you can develop various

01:13:22 --> 01:13:28
algorithms that can detect your eye

01:13:24 --> 01:13:30
reaction time on you know consumer grade

01:13:27 --> 01:13:31
camera like your phone or an iPad and

01:13:29 --> 01:13:33
we've shown that you can actually

01:13:30 --> 01:13:35
replicate replicate the quality of

01:13:32 --> 01:13:37
results as you could with a phantom

01:13:34 --> 01:13:40
camera so shown here in the red are

01:13:36 --> 01:13:42
basically eye reaction times that are

01:13:39 --> 01:13:44
measured on a subject on an iPhone 6

01:13:41 --> 01:13:46
which is obviously under $1,000 way

01:13:43 --> 01:13:48
cheaper now compared to a phantom camera

01:13:45 --> 01:13:49
shown here in blue you can see that the

01:13:47 --> 01:13:52
distributions of the reaction times are

01:13:48 --> 01:13:54
about the same and this what why is this

01:13:51 --> 01:13:56
exciting because it enables us to do

01:13:53 --> 01:13:58
low-cost in-home measurements so you can

01:13:55 --> 01:14:00
imagine as a patient could do

01:13:57 --> 01:14:01
these measurements at home for many days

01:13:59 --> 01:14:03
not just the day they go in and then

01:14:00 --> 01:14:05
they can bring in this information and

01:14:02 --> 01:14:07
this can give the physician or the

01:14:04 --> 01:14:08
specialist additional information to

01:14:06 --> 01:14:09
make the assessment as well so this can

01:14:07 --> 01:14:11
be complementary but it gives a much

01:14:08 --> 01:14:14
more rich set of information to do the

01:14:10 --> 01:14:16
diagnosis and evaluation so we're

01:14:13 --> 01:14:17
talking about computing but there's also

01:14:15 --> 01:14:19
ther parts of the system that burn

01:14:16 --> 01:14:21
power as well in particular when we talk

01:14:18 --> 01:14:23
about things like depth estimation using

01:14:20 --> 01:14:25
time of flight time of slides kind of

01:14:22 --> 01:14:26
very similar to lidar basically what

01:14:24 --> 01:14:28
you're doing is you're sending a pulse

01:14:25 --> 01:14:30
and waiting for it to come back and how

01:14:27 --> 01:14:31
long it takes to come back indicates the

01:14:29 --> 01:14:33
depth of whatever object you're trying

01:14:30 --> 01:14:35
to detect the challenge with you know

01:14:32 --> 01:14:36
depth estimation with hama flight

01:14:34 --> 01:14:38
sensors that can be very expensive right

01:14:35 --> 01:14:41
you're emitting a pulse waiting for to

01:14:37 --> 01:14:43
come back so talking about what you know

01:14:40 --> 01:14:45
up to tens of watts of power the

01:14:42 --> 01:14:47
question is can we also reduce the

01:14:44 --> 01:14:49
sensor power if we can do efficient

01:14:46 --> 01:14:52
computing so for example can I reduce

01:14:48 --> 01:14:54
how often I omit the depth sensor and

01:14:51 --> 01:14:57
kind of recover the other information

01:14:53 --> 01:14:59
just using a monocular based camera so

01:14:56 --> 01:15:01
for example you know typically you have

01:14:58 --> 01:15:04
a pair of a depth sensor and an RGB

01:15:00 --> 01:15:06
camera if at times zero I turn both of

01:15:03 --> 01:15:09
them on and time one and two I turn them

01:15:05 --> 01:15:12
off but I still keep my RGB camera on

01:15:08 --> 01:15:15
can I estimate the depth for at time 2

01:15:11 --> 01:15:16
and time 3 ok and then the key thing

01:15:14 --> 01:15:17
here is to make sure that the you know

01:15:15 --> 01:15:19
algorithms that you're running to

01:15:16 --> 01:15:21
estimate the depth without turning on

01:15:18 --> 01:15:23
the depth sensor itself is super cheap

01:15:20 --> 01:15:25
so we actually have algorithms that can

01:15:22 --> 01:15:26
run on VGA at 30 frames per second on

01:15:24 --> 01:15:29
our cortex ace

01:15:25 --> 01:15:31
which is a super low-cost embedded

01:15:28 --> 01:15:33
processor and just to give you an idea

01:15:30 --> 01:15:36
of how it looks like so let's see here's

01:15:32 --> 01:15:38
the left is the RGB image in the middle

01:15:35 --> 01:15:39
is the depth map or the ground truth so

01:15:37 --> 01:15:41
if I always have the depth sensor on

01:15:38 --> 01:15:42
that's what it would look like and then

01:15:40 --> 01:15:44
on the right hand side is the EPS tomato

01:15:41 --> 01:15:47
depth map in this particular case we're

01:15:43 --> 01:15:49
only turning on the sensor only eleven

01:15:46 --> 01:15:51
percent of the time so every every ninth

01:15:48 --> 01:15:53
frame and you're mean and relative error

01:15:50 --> 01:15:55
is only about 0.7 percent so the

01:15:52 --> 01:15:59
accuracy or quality is pretty aligned

01:15:54 --> 01:16:01
okay so you know a high level what are

01:15:58 --> 01:16:02
the key takeaways I want you guys to get

01:16:00 --> 01:16:05
from today's lecture

01:16:01 --> 01:16:07
first is the efficient computing is

01:16:04 --> 01:16:10
really important it can extend the reach

01:16:06 --> 01:16:12
of AI beyond the cloud itself because it

01:16:09 --> 01:16:15
can reduce communication network can

01:16:11 --> 01:16:17
cause enable privacy and provide low

01:16:14 --> 01:16:19
latency and so we can use AI for a wide

01:16:16 --> 01:16:21
range of applications ranging for things

01:16:18 --> 01:16:23
like robotics to healthcare and in order

01:16:20 --> 01:16:25
to achieve this energy-efficient

01:16:22 --> 01:16:27
computing it really requires cross layer

01:16:24 --> 01:16:29
design so not just focusing on the

01:16:26 --> 01:16:31
harlot but specialized Hardware plays an

01:16:28 --> 01:16:33
important role but also the algorithms

01:16:30 --> 01:16:36
itself and this is gonna be really key

01:16:32 --> 01:16:38
to enabling AI for the next decade or so

01:16:35 --> 01:16:41
r beyond ok and we also covered a lot

01:16:37 --> 01:16:44
of points in the lecture so the slides

01:16:40 --> 01:16:45
are all available on our website I'm

01:16:43 --> 01:16:47
also just because it's deep learning

01:16:44 --> 01:16:49
seminar series I just want to point some

01:16:46 --> 01:16:50
other resources that you might be

01:16:48 --> 01:16:52
interested if you want to learn more

01:16:49 --> 01:16:54
about efficient processing of neural

01:16:51 --> 01:16:56
nets so again I want to point you first

01:16:53 --> 01:16:57
o this survey paper that we've

01:16:55 --> 01:16:59
developed this with my collaborator Joel

01:16:56 --> 01:17:00
Emmer Tom really kind of covers what is

01:16:58 --> 01:17:02
you know what are the different

01:16:59 --> 01:17:03
echniques that people are looking at

01:17:01 --> 01:17:05
and gives some insights of the key

01:17:02 --> 01:17:06
design principles we also have a book

01:17:04 --> 01:17:09
coming soon it's going to be within the

01:17:05 --> 01:17:11
next few weeks we also have slides from

01:17:08 --> 01:17:13
various tutorials that we've given on

01:17:10 --> 01:17:15
this particular topic in fact we also

01:17:12 --> 01:17:18
teach a course on this here at MIT 6-8

01:17:14 --> 01:17:20
to 5 if you're interested in you know

01:17:17 --> 01:17:22
updates on all these types of materials

01:17:19 --> 01:17:25
I invite you to join the mailing list or

01:17:21 --> 01:17:27
the Twitter feed the other thing is if

01:17:24 --> 01:17:29
you're not an MIT student but you want

01:17:26 --> 01:17:31
o take like a two-day course on this

01:17:28 --> 01:17:34
particular topic I also invite you to

01:17:30 --> 01:17:36
take a look at the MIT professional

01:17:33 --> 01:17:39
education options so we run short

01:17:35 --> 01:17:40
courses on MIT campus over the summer so

01:17:38 --> 01:17:41
you can come for two days

01:17:39 --> 01:17:43
we can talk about the various different

01:17:40 --> 01:17:46
approaches that people used to build

01:17:42 --> 01:17:48
efficient deep learning systems and then

01:17:45 --> 01:17:49
finally just if you're interested in

01:17:47 --> 01:17:52
just video and tutorial videos on this

01:17:48 --> 01:17:54
talk I actually at the end of November

01:17:51 --> 01:17:56
during Europe's I gave like a 90 minute

01:17:53 --> 01:17:58
tutorial that goes really in-depth in

01:17:55 --> 01:18:00
terms of how to build efficient deep

01:17:57 --> 01:18:02
learning systems so I invite you to

01:17:59 --> 01:18:04
visit that and we also have some talks

01:18:01 --> 01:18:05
at like the Mars Conference on robotics

01:18:03 --> 01:18:09
and we have a YouTube channel where this

01:18:04 --> 01:18:10
all located and then finally I'd be

01:18:08 --> 01:18:12
remiss if I didn't acknowledge you know

01:18:09 --> 01:18:14
a lot of the work here is done

01:18:11 --> 01:18:16
by the students all the students in our

01:18:13 --> 01:18:18
group as well as Mykel Aboriginal

01:18:15 --> 01:18:20
immerser chairman and Thomas health and

01:18:17 --> 01:18:22
then all of our sponsors that make this

01:18:19 --> 01:18:24
research possible so that concludes my

01:18:21 --> 01:18:31
talk thank you very much

01:18:23 --> 01:18:31
[Applause]

01:18:36 --> 01:18:39
you

<!-- YOUTUBE_TRANSCRIPT_END -->
