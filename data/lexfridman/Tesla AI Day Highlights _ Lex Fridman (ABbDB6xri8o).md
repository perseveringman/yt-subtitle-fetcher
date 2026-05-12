---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ABbDB6xri8o"
title: "Tesla AI Day Highlights | Lex Fridman"
video_url: "https://www.youtube.com/watch?v=ABbDB6xri8o"
thumbnail_url: "https://i.ytimg.com/vi/ABbDB6xri8o/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ABbDB6xri8o"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2021-08-20T19:03:35.000Z"
upload_date: "2021-08-20"
duration_seconds: 689
duration_human: "11:29"
view_count: 531620
like_count: 23203
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T13:55:35.992Z"
---

# Tesla AI Day Highlights | Lex Fridman

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ABbDB6xri8o
- video_id: ABbDB6xri8o
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2021-08-20T19:03:35.000Z
- upload_date: 2021-08-20
- duration: 11:29
- view_count: 531620
- like_count: 23203
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

A quick video on the main innovations presented at Tesla AI day.

What the full livestream here: https://www.youtube.com/watch?v=j0z4FweCy4M

OUTLINE:
0:00 - Overview
1:16 - Neural network architecture
4:55 - Data and annotation
6:44 - Autopilot & DOJO
8:28 - Summary: 3 key ideas
9:55 - Tesla Bot

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

SOCIAL:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Reddit: https://reddit.com/r/lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
tesla ai day presented the most amazing

00:00:02 --> 00:00:08
real world ai and engineering effort i

00:00:05 --> 00:00:11
have ever seen in my life

00:00:07 --> 00:00:13
i wrote this and it meant it

00:00:10 --> 00:00:15
why was it amazing to me

00:00:12 --> 00:00:17
no not primarily because of the tesla

00:00:14 --> 00:00:20
bot it was amazing because i believe the

00:00:16 --> 00:00:21
autonomous driving task and the general

00:00:19 --> 00:00:24
real world robotics perception or

00:00:20 --> 00:00:25
planning task is a lot harder than

00:00:23 --> 00:00:28
people generally think

00:00:24 --> 00:00:31
and i also believed the scale of effort

00:00:27 --> 00:00:33
in algorithm data annotation simulation

00:00:30 --> 00:00:35
inference compute and training compute

00:00:32 --> 00:00:38
required to solve these problems is

00:00:34 --> 00:00:39
omething no one would be able to do in

00:00:37 --> 00:00:41
the near term

00:00:38 --> 00:00:43
yesterday was the first time i saw in

00:00:40 --> 00:00:45
one place

00:00:42 --> 00:00:48
just the kind and the scale of effort

00:00:44 --> 00:00:50
hat is a chance to solve this the

00:00:47 --> 00:00:52
autonomous driving problem and the

00:00:49 --> 00:00:54
general real world robotics perception

00:00:51 --> 00:00:57
and planning problem this includes the

00:00:53 --> 00:00:58
neural network architecture and pipeline

00:00:56 --> 00:00:59
the autopilot compute hardware in the

00:00:58 --> 00:01:02
car

00:00:58 --> 00:01:04
dojo compute hardware for training the

00:01:01 --> 00:01:07
data and the annotation the simulation

00:01:03 --> 00:01:09
for rare edge cases and yes the

00:01:06 --> 00:01:12
generalized application of all of the

00:01:08 --> 00:01:14
above beyond the car robot to the

00:01:11 --> 00:01:17
humanoid form

00:01:13 --> 00:01:20
let's go through the big innovations

00:01:16 --> 00:01:22
the neural network each of these is a

00:01:19 --> 00:01:25
difficult and i would say brilliant

00:01:21 --> 00:01:26
design idea that is either a step or a

00:01:24 --> 00:01:28
leap forward from the state of the art

00:01:26 --> 00:01:31
in machine learning

00:01:27 --> 00:01:33
first is to predict the vector space not

00:01:30 --> 00:01:36
in image space this alone is a big leap

00:01:32 --> 00:01:38
beyond what is usually done in computer

00:01:35 --> 00:01:41
vision that usually operates in the

00:01:37 --> 00:01:43
image space in the two-dimensional image

00:01:40 --> 00:01:44
the thing about reality is that it

00:01:42 --> 00:01:46
happens out there in the

00:01:43 --> 00:01:48
three-dimensional world and it doesn't

00:01:45 --> 00:01:49
make sense to be doing all the machine

00:01:47 --> 00:01:51
learning on the 2d projections of it

00:01:48 --> 00:01:53
onto images

00:01:50 --> 00:01:56
like many good ideas this is an obvious

00:01:52 --> 00:01:58
one but a very difficult one

00:01:55 --> 00:02:00
second is the fusion of camera sensor

00:01:57 --> 00:02:02
data before the detections the

00:01:59 --> 00:02:05
detections performed by the different

00:02:01 --> 00:02:08
heads of the multitask neural network

00:02:04 --> 00:02:09
for now the fusion is at the multi-scale

00:02:07 --> 00:02:12
feature level

00:02:08 --> 00:02:14
again in retrospect an obvious but a

00:02:11 --> 00:02:17
very difficult engineering step of doing

00:02:13 --> 00:02:20
the detection and the machine learning

00:02:16 --> 00:02:22
on all of the sensors combined as

00:02:19 --> 00:02:24
opposed to doing them individually and

00:02:21 --> 00:02:26
combining only the decisions

00:02:23 --> 00:02:30
third is using video contacts to model

00:02:25 --> 00:02:32
not just vector space but time

00:02:29 --> 00:02:34
at each frame concatenating positional

00:02:31 --> 00:02:35
encodings multi-cam features and ego

00:02:33 --> 00:02:37
kinematics

00:02:34 --> 00:02:39
using a pretty cool spatial recurrent

00:02:36 --> 00:02:42
neural network architecture

00:02:38 --> 00:02:44
that forms a 2d grid around the car

00:02:41 --> 00:02:46
where each cell of the grid as a rnn

00:02:43 --> 00:02:48
recurrent neural network the other cool

00:02:45 --> 00:02:50
aspect of this is that you can then

00:02:47 --> 00:02:52
build a map

00:02:49 --> 00:02:54
in the space of rnn features

00:02:51 --> 00:02:57
and then perhaps do planning in that

00:02:53 --> 00:02:59
space which is a fascinating concept

00:02:56 --> 00:03:02
andre carpathi i think also mentioned

00:02:58 --> 00:03:04
some future improvements performing the

00:03:01 --> 00:03:06
fusion earlier and earlier in the neural

00:03:03 --> 00:03:08
network so currently the fusion of space

00:03:05 --> 00:03:11
and time are late in the network

00:03:08 --> 00:03:14
moving the fusion earlier on

00:03:10 --> 00:03:15
takes us uh further toward

00:03:13 --> 00:03:16
full

00:03:14 --> 00:03:18
end-to-end driving with multiple

00:03:15 --> 00:03:21
modalities seamlessly

00:03:17 --> 00:03:23
fusing integrating the multiple sources

00:03:20 --> 00:03:25
of sensory data finally the place where

00:03:22 --> 00:03:28
there's currently from my understanding

00:03:24 --> 00:03:31
of the least amount of utilization of

00:03:27 --> 00:03:33
neural networks is planning so

00:03:30 --> 00:03:35
bviously optimal planning in action

00:03:32 --> 00:03:37
space is intractable so that you have to

00:03:34 --> 00:03:40
come up with a bunch of heuristics you

00:03:36 --> 00:03:42
can do those manually or you could do

00:03:39 --> 00:03:44
those through learning so the idea that

00:03:41 --> 00:03:46
was presented is to use neural networks

00:03:43 --> 00:03:49
as heuristics in a similar way that

00:03:45 --> 00:03:51
neural networks were used as heuristics

00:03:48 --> 00:03:54
in the multicarlo tree search for mu 0

00:03:50 --> 00:03:56
and alpha 0 to play different games to

00:03:53 --> 00:03:59
play go to play chess this allows you to

00:03:55 --> 00:04:00
significantly prune the search through

00:03:58 --> 00:04:02
action space

00:03:59 --> 00:04:03
for a plan that doesn't get stuck in the

00:04:01 --> 00:04:06
local optima and gets pretty close to

00:04:02 --> 00:04:08
the global optimum i really appreciated

00:04:05 --> 00:04:10
that the presentation didn't dumb

00:04:07 --> 00:04:11
anything down

00:04:09 --> 00:04:13
but maybe in all the technical details

00:04:10 --> 00:04:15
it was easy to miss just how much

00:04:12 --> 00:04:18
brilliant innovation that was here

00:04:14 --> 00:04:19
the move to predicting in vector space

00:04:17 --> 00:04:21
is truly brilliant of course you can

00:04:18 --> 00:04:23
only do that if you have the data and

00:04:20 --> 00:04:25
you have the annotation for it but just

00:04:22 --> 00:04:27
o take that step

00:04:24 --> 00:04:29
is already taking a step outside the box

00:04:26 --> 00:04:30
of the way things are currently done in

00:04:28 --> 00:04:31
computer vision

00:04:29 --> 00:04:34
then

00:04:30 --> 00:04:36
fusing seamlessly across

00:04:33 --> 00:04:38
many camera sensors

00:04:35 --> 00:04:39
incorporating time into the whole thing

00:04:37 --> 00:04:41
in a way that's differentiable with

00:04:38 --> 00:04:43
ese spatial rnns

00:04:40 --> 00:04:45
and then of course using that beautiful

00:04:42 --> 00:04:46
mess of features

00:04:44 --> 00:04:50
both on the individual

00:04:45 --> 00:04:52
image side and the rnn side to make

00:04:49 --> 00:04:54
plans using neural network architecture

00:04:51 --> 00:04:56
as a heuristic

00:04:53 --> 00:04:58
i mean all of that is just brilliant

00:04:55 --> 00:04:59
he other critical part of making all of

00:04:57 --> 00:05:02
this work is the data and the data

00:04:58 --> 00:05:04
nnotation first is the manual labeling

00:05:01 --> 00:05:06
so to make the neural networks that

00:05:03 --> 00:05:07
predict in vector space work you have to

00:05:05 --> 00:05:10
label in vector space so you have to

00:05:06 --> 00:05:12
create in-house tools and as it turns

00:05:09 --> 00:05:14
out tesla hired in-house team of

00:05:11 --> 00:05:16
annotators to use those tools to then

00:05:13 --> 00:05:19
perform the labeling vector space and

00:05:16 --> 00:05:20
then project it out into the image space

00:05:18 --> 00:05:22
first of all that saves a lot of work

00:05:20 --> 00:05:25
and second of all that means you're

00:05:21 --> 00:05:26
directly performing the annotation in

00:05:24 --> 00:05:28
the space in which you're doing the

00:05:25 --> 00:05:30
prediction obviously as was always the

00:05:27 --> 00:05:32
case as is the case with self-supervised

00:05:29 --> 00:05:34
learning auto labeling is the key to

00:05:31 --> 00:05:35
this whole thing

00:05:33 --> 00:05:37
one of the interesting thing that was

00:05:34 --> 00:05:40
presented is the use of clips of data

00:05:36 --> 00:05:42
that includes video imu gps odometry and

00:05:39 --> 00:05:44
so on for multiple vehicles at the same

00:05:41 --> 00:05:46
location and time

00:05:43 --> 00:05:49
to generate labels of uh both the static

00:05:46 --> 00:05:51
world and the moving objects and their

00:05:48 --> 00:05:54
kinematics that's really cool you have

00:05:50 --> 00:05:57
these little clips these buckets of data

00:05:54 --> 00:05:58
from different vehicles and they're kind

00:05:56 --> 00:06:00
of annotating each other you're

00:05:58 --> 00:06:01
gistering them together to then

00:05:59 --> 00:06:04
combine

00:06:00 --> 00:06:07
a solid annotation of that particular

00:06:03 --> 00:06:08
part of road at that particular time

00:06:06 --> 00:06:11
that's amazing because the more the

00:06:07 --> 00:06:13
fleet grows the stronger that kind of

00:06:10 --> 00:06:14
auto labeling becomes

00:06:12 --> 00:06:16
and the more edge cases you're able to

00:06:13 --> 00:06:19
catch that way speaking of edge cases

00:06:15 --> 00:06:21
that's what tesla is using simulation

00:06:18 --> 00:06:22
for is to simulate rare edge cases that

00:06:20 --> 00:06:25
are not going to appear often in the

00:06:22 --> 00:06:27
data even when that data set grows

00:06:24 --> 00:06:29
incredibly large and also they're using

00:06:26 --> 00:06:32
it for annotation of ultra complex

00:06:28 --> 00:06:34
scenes where accurate labeling of real

00:06:31 --> 00:06:36
world data is basically impossible like

00:06:33 --> 00:06:38
a scene with like a hundred pedestrians

00:06:35 --> 00:06:40
which i think is the example they used

00:06:38 --> 00:06:42
so i honestly think the innovations on

00:06:39 --> 00:06:44
the neural network architecture and the

00:06:41 --> 00:06:45
data annotation is really just a big

00:06:43 --> 00:06:47
leap

00:06:44 --> 00:06:49
then there's the continued innovation on

00:06:46 --> 00:06:52
the autopilot computer side the neural

00:06:48 --> 00:06:53
network compiler that optimizes latency

00:06:51 --> 00:06:54
and so on

00:06:52 --> 00:06:56
there's uh

00:06:53 --> 00:06:58
i think i remember really nice

00:06:55 --> 00:07:00
testing and debugging tools

00:06:58 --> 00:07:02
for like

00:06:59 --> 00:07:04
variants of candidate trained neural

00:07:01 --> 00:07:05
networks to be deployed in the future

00:07:03 --> 00:07:07
where you can compare different neural

00:07:04 --> 00:07:08
networks together that's almost like

00:07:06 --> 00:07:09
developer tools

00:07:07 --> 00:07:11
for

00:07:08 --> 00:07:14
to be deployed neural networks

00:07:10 --> 00:07:16
and it was mentioned that uh almost 10

00:07:13 --> 00:07:19
00 gpus are currently being used to

00:07:16 --> 00:07:21
continually retrain the network i forget

00:07:18 --> 00:07:23
what the number was but i think every

00:07:20 --> 00:07:26
week or every two weeks the network is

00:07:22 --> 00:07:28
fully retrained end to end

00:07:25 --> 00:07:30
the other really big innovation but

00:07:27 --> 00:07:32
unlike the neural network in the data

00:07:29 --> 00:07:34
nnotation this is in the future so to

00:07:31 --> 00:07:37
be deployed still it's still under

00:07:33 --> 00:07:38
development is the dojo computer which

00:07:36 --> 00:07:40
is used for training

00:07:37 --> 00:07:42
so the autopilot computer is the

00:07:39 --> 00:07:44
computer on the car that's doing the

00:07:41 --> 00:07:46
inference and dojo computer is the thing

00:07:43 --> 00:07:48
that you would have in a data center

00:07:45 --> 00:07:50
that performs the training of the neural

00:07:47 --> 00:07:53
network there's a what they're calling a

00:07:49 --> 00:07:56
single training tile that is nine

00:07:52 --> 00:07:58
flops it's made up of d1 chips that are

00:07:55 --> 00:08:02
built in house by tesla each chip with

00:07:58 --> 00:08:05
super fast io each tile also with super

00:08:01 --> 00:08:07
fast io so you can basically connect an

00:08:04 --> 00:08:09
arbitrary number of these together each

00:08:06 --> 00:08:12
with the power supply and cooling

00:08:08 --> 00:08:13
and then i think they connected uh like

00:08:11 --> 00:08:16
a million nodes

00:08:12 --> 00:08:18
to have a compute center i forget what

00:08:15 --> 00:08:21
he name is but it's 1.1 xflop

00:08:17 --> 00:08:22
so combined with the fact that this can

00:08:20 --> 00:08:25
arbitrarily scale

00:08:22 --> 00:08:27
i think this is basically contending to

00:08:24 --> 00:08:29
be the world's most powerful neural

00:08:26 --> 00:08:32
network training computer again the

00:08:28 --> 00:08:34
ntire picture that was presented on ai

00:08:31 --> 00:08:36
day is amazing

00:08:33 --> 00:08:39
because the what would you call it the

00:08:35 --> 00:08:41
tesla ai machine can improve arbitrarily

00:08:38 --> 00:08:43
through the iterative data engine

00:08:40 --> 00:08:45
process of auto labeling plus manual

00:08:42 --> 00:08:48
abeling of edge cases so like that

00:08:44 --> 00:08:51
labeling stage plus a data collection

00:08:47 --> 00:08:54
retraining deploying and again you go

00:08:50 --> 00:08:57
back to the data collection the labeling

00:08:53 --> 00:09:00
retraining and deploying and you can go

00:08:56 --> 00:09:02
through this loop as many times as you

00:08:59 --> 00:09:04
want to arbitrarily improve the

00:09:01 --> 00:09:06
performance of the network i still think

00:09:03 --> 00:09:09
nobody knows how difficult the

00:09:05 --> 00:09:12
autonomous driving problem is but i also

00:09:08 --> 00:09:14
think this loop does not have a ceiling

00:09:11 --> 00:09:16
i still think there's a big place for

00:09:13 --> 00:09:17
driver sensing i still think you have to

00:09:15 --> 00:09:19
solve the human robot interaction

00:09:16 --> 00:09:22
problem to make the experience more

00:09:18 --> 00:09:24
pleasant but damn it

00:09:21 --> 00:09:26
his loop of manual and auto labeling

00:09:23 --> 00:09:28
that leads to retraining at least the

00:09:25 --> 00:09:29
deployment goes back to the data

00:09:27 --> 00:09:32
collection and the auto labeling and the

00:09:28 --> 00:09:33
manual labeling is incredible

00:09:31 --> 00:09:36
second reason this whole effort is

00:09:32 --> 00:09:39
amazing is that dojo can essentially

00:09:35 --> 00:09:42
become an ai training as a service

00:09:38 --> 00:09:44
directly taking on aws and google cloud

00:09:41 --> 00:09:46
so there's no reason it needs to be

00:09:43 --> 00:09:49
utilized specifically for the autopilot

00:09:45 --> 00:09:50
computer the simplicity of the way they

00:09:48 --> 00:09:52
describe the deployment of pi torch

00:09:49 --> 00:09:54
across these nodes you can basically use

00:09:51 --> 00:09:56
it for any kind of machine learning

00:09:53 --> 00:09:58
problem especially one that requires

00:09:55 --> 00:10:00
cale finally the third reason all this

00:09:57 --> 00:10:02
was amazing is that the neural network

00:09:59 --> 00:10:04
architecture and data engine pipeline is

00:10:01 --> 00:10:07
applicable to much more than just roads

00:10:03 --> 00:10:10
and driving it can be used in the home

00:10:06 --> 00:10:11
in the factory and by robots basically

00:10:09 --> 00:10:14
any form as long as has cameras and

00:10:10 --> 00:10:15
actuators including yes the humanoid

00:10:14 --> 00:10:18
form

00:10:14 --> 00:10:20
as someone who loves robotics

00:10:17 --> 00:10:22
the presentation of a humanoid tesla bot

00:10:19 --> 00:10:25
was truly exciting

00:10:21 --> 00:10:26
of course for me personally the lifelong

00:10:24 --> 00:10:29
dream has been

00:10:25 --> 00:10:31
to build the mind the robot that becomes

00:10:28 --> 00:10:34
a friend and a companion to humans not

00:10:30 --> 00:10:36
just a servant that performs

00:10:33 --> 00:10:39
boring and dangerous tasks

00:10:35 --> 00:10:41
but to me these two problems should and

00:10:38 --> 00:10:44
i think will be solved in parallel

00:10:40 --> 00:10:46
the tesla bot if successful just might

00:10:43 --> 00:10:49
solve the latter problem of perception

00:10:45 --> 00:10:52
movement and object manipulation

00:10:48 --> 00:10:54
and i hope to play a small part in

00:10:51 --> 00:10:58
solving the former problem of human

00:10:53 --> 00:11:00
robot interaction and yes friendship

00:10:57 --> 00:11:02
i'm not going to mention love when

00:10:59 --> 00:11:04
talking about robots

00:11:01 --> 00:11:07
either way all of this to me paints a

00:11:03 --> 00:11:09
picture of an exciting future

00:11:06 --> 00:11:12
thanks for watching hope to see you next

00:11:08 --> 00:11:12
ime

00:11:28 --> 00:11:31
you

<!-- YOUTUBE_TRANSCRIPT_END -->
