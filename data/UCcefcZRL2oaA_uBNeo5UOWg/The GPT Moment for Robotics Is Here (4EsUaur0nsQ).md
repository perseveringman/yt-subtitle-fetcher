---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "4EsUaur0nsQ"
title: "The GPT Moment for Robotics Is Here"
video_url: "https://www.youtube.com/watch?v=4EsUaur0nsQ"
thumbnail_url: "https://i.ytimg.com/vi/4EsUaur0nsQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=4EsUaur0nsQ"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-04-16T14:00:07.000Z"
upload_date: "2026-04-16"
duration_seconds: 2967
duration_human: "49:27"
view_count: 62853
like_count: 1340
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-05-12T03:19:30.656Z"
---

# The GPT Moment for Robotics Is Here

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=4EsUaur0nsQ
- video_id: 4EsUaur0nsQ
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-04-16T14:00:07.000Z
- upload_date: 2026-04-16
- duration: 49:27
- view_count: 62853
- like_count: 1340
- has_subtitle: true
- language: en
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

Physical Intelligence is building a foundation model that can control any robot to do any task — what the team describes as the GPT-1 moment for robotics. The company's cross-embodiment approach trains across many different robot platforms, and recent results show tasks being performed zero-shot that last year required hundreds of hours of data collection.

In this episode of The Lightcone, co-founder Quan Vuong sat down with Garry, Jared, Diana, and Harj to talk about why robotics is finally ready for its scaling moment, how PI runs its models in the cloud rather than on-device, and the playbook for what Quan sees as a Cambrian explosion of vertical robotics companies.

00:00 The new robotics startup equation
00:41 Intro: GPT-1 moment for robotics
03:05 How AI unlocked robotics (RT-2, PaLM-E)
06:17 Breakthrough: multi-robot scaling (Open-X)
09:12 The real bottleneck: data
13:10 Emergence: zero-shot robot skills
16:01 Real-world demos: laundry & warehouses
22:21 Robotics becomes a data + ops problem
23:16 Cloud-controlled robots (big unlock)
29:03 How to start a robotics company today
32:33 The coming explosion of robotics startups
43:53 What’s still missing (and what comes next)

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
The equation I think for starting a

00:00:03 --> 00:00:08
robotic business has changed and will

00:00:06 --> 00:00:12
continue to change at an accelerating

00:00:08 --> 00:00:13
pace because the upfront cost is not

00:00:11 --> 00:00:14
hat high anymore.

00:00:12 --> 00:00:16
>> Everyone's sort of spending a lot of

00:00:13 --> 00:00:18
time in the digital world and it feels

00:00:15 --> 00:00:20
like you know now is the time to start

00:00:18 --> 00:00:23
hinking about the world of atoms.

00:00:19 --> 00:00:24
>> You literally just gave people the

00:00:22 --> 00:00:27
playbook for how to build a vertical

00:00:23 --> 00:00:29
robotics company. This has really been

00:00:26 --> 00:00:31
our mission from the start is to create

00:00:28 --> 00:00:33
that Cumbrian explosion.

00:00:30 --> 00:00:34
>> It still like blows my mind. I didn't

00:00:32 --> 00:00:37
know if this would exist even in my

00:00:33 --> 00:00:37
entire lifetime.

00:00:41 --> 00:00:47
Welcome back to another episode of the

00:00:44 --> 00:00:50
light cone. Today we have a very special

00:00:46 --> 00:00:52
guest, Quan Vang. He's one of the

00:00:49 --> 00:00:55
co-founders of physical intelligence,

00:00:51 --> 00:00:58
which we think might be the robotics AI

00:00:54 --> 00:01:01
lab that brings about the GPT1 moment

00:00:57 --> 00:01:02
for all of robotics. Kuang, thank you

00:01:00 --> 00:01:04
for joining us.

00:01:01 --> 00:01:07
>> Pleasure to be here. Has been a longtime

00:01:03 --> 00:01:10
admirer of YC and our mission is to

00:01:06 --> 00:01:11
build a model that can control any robot

00:01:09 --> 00:01:14
o do any task that is physically

00:01:10 --> 00:01:16
capable of and to do so at such a high

00:01:13 --> 00:01:18
level of performance that's going to be

00:01:15 --> 00:01:20
useful to people in all walks of life.

00:01:17 --> 00:01:22
And so GPT1 for robotics you know what

00:01:20 --> 00:01:25
is it you know is the chat GBT moment

00:01:22 --> 00:01:29
for robotic real our perspective here is

00:01:24 --> 00:01:31
that um we want to build a model that's

00:01:28 --> 00:01:33
really intelligence we want to build a

00:01:30 --> 00:01:35
platform that allow us to externalize

00:01:32 --> 00:01:37
that intelligence to the rest of world

00:01:34 --> 00:01:39
and allow them to use it to build very

00:01:36 --> 00:01:42
interesting application in all sorts of

00:01:38 --> 00:01:45
vertical and robotics and we think that

00:01:41 --> 00:01:48
it's going to be more like a peeling an

00:01:44 --> 00:01:50
onions analogy where you start from a

00:01:47 --> 00:01:52
really strong base model that have all

00:01:49 --> 00:01:54
sorts of common sense knowledge and

00:01:51 --> 00:01:57
already works to some extent on your

00:01:53 --> 00:02:00
obot. Um you have then a mixed autonomy

00:01:56 --> 00:02:02
system uh very similar for example to a

00:01:59 --> 00:02:04
utonomous driving car today. Um and

00:02:01 --> 00:02:06
then you actually deploy that system to

00:02:03 --> 00:02:09
do a real job. That system might make

00:02:05 --> 00:02:12
mistake um it's okay. Um and then over

00:02:08 --> 00:02:13
time by actually exposing the system to

00:02:11 --> 00:02:15
the complexity and the edge case of the

00:02:12 --> 00:02:18
real world that system get incrementally

00:02:14 --> 00:02:19
even just slightly better over time

00:02:17 --> 00:02:21
very day. Um and you know one day you

00:02:18 --> 00:02:23
wake up and you certainly have a system

00:02:20 --> 00:02:25
that is just fully autonomous and just

00:02:22 --> 00:02:27
provide tremendous value.

00:02:24 --> 00:02:30
>> Might be helpful to give the audience a

00:02:26 --> 00:02:33
bit of a mini history lesson on why

00:02:29 --> 00:02:35
robotics is so hard. And there's been a

00:02:32 --> 00:02:37
lot of breakthroughs in the last two

00:02:34 --> 00:02:40
years. And I mean just to simplify the

00:02:36 --> 00:02:42
robotics problem is three pillars.

00:02:39 --> 00:02:45
Semantics which I think we got a lot of

00:02:41 --> 00:02:47
unlocks and with language models that

00:02:44 --> 00:02:49
somehow we ported into robotics. Then

00:02:46 --> 00:02:51
you have the planning and then the last

00:02:48 --> 00:02:53
hing is control which needs to be done

00:02:50 --> 00:02:55
in real time and interact with a

00:02:52 --> 00:02:57
environment that changes. walk us

00:02:54 --> 00:03:01
through the seinal papers that a lot of

00:02:56 --> 00:03:03
the team of PI robotics published that

00:03:00 --> 00:03:06
gave you the inkling that the GPT one

00:03:02 --> 00:03:08
moment is near and that started in 2024.

00:03:05 --> 00:03:11
>> Yeah. So the dream to build general

00:03:07 --> 00:03:14
purpose robot like robots has been a

00:03:10 --> 00:03:15
longtime dream I think in humanity like

00:03:13 --> 00:03:18
you know we're not the first to say that

00:03:14 --> 00:03:20
our mission is to build a model that can

00:03:17 --> 00:03:22
work on any robot. Um and we're really

00:03:19 --> 00:03:24
fortunate to be in this moment in time

00:03:21 --> 00:03:27
in history where we feel that it's

00:03:23 --> 00:03:29
possible to kind of walk back a little

00:03:26 --> 00:03:32
bit um a few years before there was I

00:03:28 --> 00:03:35
think the first is Seikhan which to me

00:03:31 --> 00:03:37
was the first demonstration of language

00:03:34 --> 00:03:39
model and how you can bring all of the

00:03:36 --> 00:03:41
common sense knowledge in language model

00:03:38 --> 00:03:44
into robotics and therefore that

00:03:40 --> 00:03:46
significantly kind of reduces the need

00:03:43 --> 00:03:48
to collect robot specific data. So for

00:03:45 --> 00:03:50
example, if you have a task of oh I want

00:03:47 --> 00:03:52
o go to the YC office to record a

00:03:49 --> 00:03:53
podcast you know what are the step I

00:03:51 --> 00:03:56
need to take you can ask a language

00:03:52 --> 00:03:58
model you know just show me the step and

00:03:55 --> 00:04:00
show me the plan um and that work

00:03:57 --> 00:04:02
incredibly well um and then the way kind

00:03:59 --> 00:04:04
of language model infiltrate if you will

00:04:01 --> 00:04:06
in robotic is it start at the planning

00:04:03 --> 00:04:08
level uh at the semantic level and then

00:04:05 --> 00:04:09
but there's still the control problem

00:04:07 --> 00:04:12
you know at the end of the day you still

00:04:08 --> 00:04:14
need a mechanism to convert the plan

00:04:11 --> 00:04:17
into low-level action that can actually

00:04:13 --> 00:04:20
actuate the robot And that bring us to

00:04:16 --> 00:04:23
POM E and that bring us to RT2 which

00:04:19 --> 00:04:26
stand for robotic transformer 2. And

00:04:22 --> 00:04:28
what this two work really show is that

00:04:25 --> 00:04:31
if you start from a vision language

00:04:27 --> 00:04:34
model that is really powerful and you

00:04:30 --> 00:04:36
kind of use robotic data to adapt this

00:04:33 --> 00:04:40
model to speak robot language if you

00:04:35 --> 00:04:42
will. um then you see a lot of transfer

00:04:39 --> 00:04:43
from the kind of knowledge that exists

00:04:41 --> 00:04:46
in the language in the vision language

00:04:42 --> 00:04:48
model down to the low-level action like

00:04:45 --> 00:04:52
um one of my favorite example when we

00:04:47 --> 00:04:54
did the RT2 project was you can have

00:04:51 --> 00:04:56
picture of celebrity on the table you

00:04:53 --> 00:04:58
have a picture of Taylor Swift you have

00:04:55 --> 00:05:00
a picture of the queen of England and

00:04:57 --> 00:05:02
you can ask the robot you know pick up

00:04:59 --> 00:05:04
the coke can and move it to Taylor Swift

00:05:01 --> 00:05:07
even though the concept of Taylor Swift

00:05:04 --> 00:05:10
it just doesn't exist in the robot data

00:05:06 --> 00:05:12
t all and that work. You can do other

00:05:09 --> 00:05:14
examples such as um kind of spatial

00:05:11 --> 00:05:16
reasoning that doesn't exist in the

00:05:13 --> 00:05:18
robot data at all. Like for example,

00:05:15 --> 00:05:20
move the dinosaurs next to the like red

00:05:18 --> 00:05:23
car and these are always just completely

00:05:19 --> 00:05:27
unseen object in robot data. And so that

00:05:22 --> 00:05:31
was RT2 and that was palm E. Now RT2 and

00:05:26 --> 00:05:33
POM E are single embodiment um exercise.

00:05:30 --> 00:05:34
>> Just for the audience, single embodiment

00:05:32 --> 00:05:36
meaning it worked for a very specific

00:05:33 --> 00:05:38
robot. It worked for a very specific

00:05:35 --> 00:05:40
robot. In robotic, you can ask the

00:05:37 --> 00:05:42
question, how do you scale? Um,

00:05:39 --> 00:05:44
especially how do you scale data

00:05:41 --> 00:05:46
collections? And one of the insight that

00:05:43 --> 00:05:49
we had back then was, you know, maybe

00:05:46 --> 00:05:51
the data from one robot is not that

00:05:48 --> 00:05:53
different from another robots. Anyway,

00:05:50 --> 00:05:55
if you have enough robots in your

00:05:52 --> 00:05:56
training data, maybe what the model

00:05:54 --> 00:05:58
earned isn't to control one specific

00:05:55 --> 00:06:00
robot. what the model learned is

00:05:57 --> 00:06:03
omething that's more abstract which is

00:05:59 --> 00:06:04
how do I kind of learn a general notion

00:06:02 --> 00:06:07
of what it means to control any

00:06:03 --> 00:06:09
particular robotic platform and

00:06:06 --> 00:06:11
therefore I will be better at

00:06:08 --> 00:06:14
controlling any particular platform and

00:06:10 --> 00:06:16
that bring us to what we call uh open

00:06:13 --> 00:06:19
cross embodiment and robotic transformer

00:06:15 --> 00:06:22
X that was a big paper because it was

00:06:18 --> 00:06:24
the first that showed potential scaling

00:06:21 --> 00:06:27
laws that apply to robotics because now

00:06:23 --> 00:06:29
you could start training all these

00:06:26 --> 00:06:31
models across multiple kinds of

00:06:28 --> 00:06:33
hardware, not just one, which has never

00:06:30 --> 00:06:34
been done in robotics ever before.

00:06:32 --> 00:06:37
Because from all the research labs, they

00:06:33 --> 00:06:39
would all train with a very specific set

00:06:36 --> 00:06:40
of sensor actuators and motors and it

00:06:38 --> 00:06:42
was all very finicky with that

00:06:40 --> 00:06:44
particular hardware, right?

00:06:42 --> 00:06:47
>> Yeah. One of the really interesting

00:06:43 --> 00:06:49
result from um open cross embodiment and

00:06:46 --> 00:06:51
let me provide the context here is that

00:06:48 --> 00:06:54
you can take let's say 10 different

00:06:50 --> 00:06:56
robot platform collect data from them

00:06:53 --> 00:06:58
train a policy and really optimize the

00:06:55 --> 00:07:00
policy to work well on that platform. Um

00:06:57 --> 00:07:01
so let's say you know you have that you

00:06:59 --> 00:07:04
have 10 different platform 10 different

00:07:00 --> 00:07:06
policies and now if you simply take the

00:07:03 --> 00:07:08
data and absorb it into a model that is

00:07:06 --> 00:07:11
high capacity enough to really absorb

00:07:08 --> 00:07:12
that data and you can compare you have

00:07:10 --> 00:07:14
this generalist right that learn to

00:07:11 --> 00:07:16
control how to the 10 different robot

00:07:13 --> 00:07:18
you can compare it to the specialist

00:07:15 --> 00:07:20
hat has been optimized to work well on

00:07:17 --> 00:07:24
a particular embodiment how does it

00:07:20 --> 00:07:27
compare and the interesting result from

00:07:23 --> 00:07:30
open x is it was 50% better

00:07:26 --> 00:07:32
>> wow Um, and that was really surprising

00:07:29 --> 00:07:34
because in robotic it's hard enough to

00:07:31 --> 00:07:36
get your model to work on one particular

00:07:33 --> 00:07:38
obot platform. And one of the reason

00:07:36 --> 00:07:40
why I say that we're really fortunate to

00:07:38 --> 00:07:44
be in this moment in time in robotic is

00:07:40 --> 00:07:46
because OpenX was really only possible

00:07:43 --> 00:07:48
because of the support that we received

00:07:45 --> 00:07:50
from the robotic community. It was a

00:07:47 --> 00:07:53
huge collaboration across the robotic

00:07:49 --> 00:07:55
ommunity. And the the reason why that's

00:07:52 --> 00:07:57
really important is there is this joke

00:07:54 --> 00:07:59
in like robotic grad school that you

00:07:56 --> 00:08:01
know if you want to add two years to

00:07:58 --> 00:08:03
your PhD just work on a new robot

00:08:00 --> 00:08:05
platform. [laughter]

00:08:02 --> 00:08:07
>> You know by that logic if you want to

00:08:04 --> 00:08:07
have 10 robot platform that's 20 years

00:08:06 --> 00:08:09
like

00:08:06 --> 00:08:11
>> why is that it takes like a year or two

00:08:08 --> 00:08:13
to just get the platform um up and

00:08:10 --> 00:08:15
running to even collect the data.

00:08:12 --> 00:08:18
>> Yeah. Is it fair to say that the data

00:08:14 --> 00:08:22
set that was created from embodiment X

00:08:18 --> 00:08:25
is similar to the scale of an impact

00:08:21 --> 00:08:27
hat imageet did for vision because it

00:08:24 --> 00:08:29
was huge and it was the first large data

00:08:26 --> 00:08:30
set across multiple hardware huge

00:08:28 --> 00:08:32
collaboration and

00:08:29 --> 00:08:35
>> I still think that imageet was more

00:08:31 --> 00:08:37
impactful in the vision community and

00:08:34 --> 00:08:40
the reason for that is um a few the

00:08:36 --> 00:08:43
first is that imageet also allowed for

00:08:39 --> 00:08:47
eproducible evaluation right um you

00:08:42 --> 00:08:50
OpenX as an effort was more about making

00:08:46 --> 00:08:52
data available for kind of people to use

00:08:49 --> 00:08:54
and evaluation is a really difficult

00:08:51 --> 00:08:57
problems um in robotic that open X did

00:08:53 --> 00:09:01
not solve. Um and the second is I think

00:08:56 --> 00:09:04
open X is a drop in the bucket at this

00:09:00 --> 00:09:06
point in the robotic community. Um if

00:09:03 --> 00:09:08
you measure in the kind of the scale and

00:09:05 --> 00:09:10
the volume and the diversity of data

00:09:07 --> 00:09:12
that the community is collecting, I

00:09:09 --> 00:09:14
think open at this point is a drop in

00:09:11 --> 00:09:17
the bucket. I mean, I guess we started

00:09:13 --> 00:09:18
talking about sort of GP1, but even GP1,

00:09:16 --> 00:09:20
you know, that was sort of this moment

00:09:17 --> 00:09:22
where you can prove, you know, Alec

00:09:19 --> 00:09:25
Radford figured out that there was a

00:09:21 --> 00:09:27
neuron based on a very specific input

00:09:24 --> 00:09:29
and output. Um, and then that allowed

00:09:26 --> 00:09:31
the scaling laws to sort of take hold.

00:09:28 --> 00:09:33
The biggest problem in robotics I've

00:09:30 --> 00:09:35
heard is basically actually exactly what

00:09:32 --> 00:09:37
we've been talking about is like it's

00:09:34 --> 00:09:39
the data problem. you know, language you

00:09:36 --> 00:09:41
could bootstrap off of like, you know,

00:09:38 --> 00:09:42
the sum total of what you could get off

00:09:40 --> 00:09:46
the internet, which is actually quite a

00:09:42 --> 00:09:49
lot. Can you give us like a sense for um

00:09:45 --> 00:09:51
like scale? Is it like pabytes? Like,

00:09:48 --> 00:09:55
you know, what do you think is necessary

00:09:50 --> 00:09:56
as an input to you know the true GPT1 of

00:09:54 --> 00:09:59
robotics?

00:09:55 --> 00:10:01
>> Yeah. So, the data scarity problem in

00:09:58 --> 00:10:03
robotic there's a few way to look at it.

00:10:00 --> 00:10:04
The first way is that it's really two

00:10:02 --> 00:10:06
problem in this guys. There is the

00:10:03 --> 00:10:08
generation data generation problem and

00:10:05 --> 00:10:09
there's data capture problem and the

00:10:07 --> 00:10:11
difference is that the data capture is

00:10:08 --> 00:10:13
that there might already be lots of

00:10:10 --> 00:10:15
robotic data that is being generated but

00:10:12 --> 00:10:17
here's just never been really an

00:10:14 --> 00:10:20
incentive to capture it to make it easy

00:10:16 --> 00:10:22
for digestions in training. Um and

00:10:19 --> 00:10:24
that's one of the goal that OpenX was

00:10:21 --> 00:10:26
trying to solve which is if you have

00:10:23 --> 00:10:28
robotic data it's a really good idea to

00:10:25 --> 00:10:32
capture it and make it possible to train

00:10:27 --> 00:10:34
on. The second way to look at it is that

00:10:31 --> 00:10:36
robotic is very different from language

00:10:33 --> 00:10:37
model. There is not a internet of

00:10:35 --> 00:10:41
robotic data that you can use. And so

00:10:36 --> 00:10:43
you see this kind of very operationally

00:10:40 --> 00:10:45
heavy effort to collect data. And

00:10:42 --> 00:10:47
there's the question is it going to

00:10:44 --> 00:10:50
scale? Well, the way that I look at it

00:10:46 --> 00:10:52
is let's take the US GDP$ 24 trillion

00:10:49 --> 00:10:56
US. Let's say if we actually solve

00:10:52 --> 00:10:59
robotics a model that can control any

00:10:55 --> 00:11:03
robot to do any task napkin math maybe

00:10:58 --> 00:11:06
contribute 10% to US GDP well that's

00:11:02 --> 00:11:09
already a massive number um and I I

00:11:05 --> 00:11:11
think that promise is one of the reason

00:11:08 --> 00:11:14
that warrants the investment into data

00:11:10 --> 00:11:17
collections um in robotics and the third

00:11:13 --> 00:11:20
way to look at it is we're very focused

00:11:16 --> 00:11:22
on cross embodiment and cross embodiment

00:11:19 --> 00:11:24
here is the data collection aspect of

00:11:21 --> 00:11:26
as well which is to really make sure

00:11:23 --> 00:11:28
that your model and your organizations

00:11:25 --> 00:11:30
and infrastructure are set up to consume

00:11:27 --> 00:11:33
data from many different sources of uh

00:11:30 --> 00:11:35
of robots and that actually allow you to

00:11:32 --> 00:11:38
scale easier. For example, I if I were

00:11:34 --> 00:11:40
to contrast our approach compared to

00:11:37 --> 00:11:42
let's say a company that have a

00:11:39 --> 00:11:45
particular hardware platform that they

00:11:41 --> 00:11:46
optimize for and they scale um it it's

00:11:44 --> 00:11:50
not an approach that have really allowed

00:11:45 --> 00:11:52
people to scale. um because it's just

00:11:49 --> 00:11:55
much harder to figure out how do you

00:11:51 --> 00:11:58
manufacture like a thousand unit of

00:11:54 --> 00:12:00
something for now compared to making

00:11:57 --> 00:12:02
sure that you yourself are ready to

00:11:59 --> 00:12:03
absorb data from like a thousand

00:12:01 --> 00:12:05
ifferent types of robot that are

00:12:02 --> 00:12:07
already in there in the community.

00:12:04 --> 00:12:09
>> I mean it's a crazy problem isn't it? I

00:12:06 --> 00:12:12
mean the hardware itself even within the

00:12:08 --> 00:12:15
same design of embodiment if there's a

00:12:11 --> 00:12:17
hardware run that goes ary or like one

00:12:14 --> 00:12:18
of the servos is slightly different like

00:12:16 --> 00:12:20
you see it in the data right and then

00:12:17 --> 00:12:23
how do you control for that

00:12:19 --> 00:12:25
>> yeah so I think we were doing kind of

00:12:22 --> 00:12:26
like a inventory of robot in the company

00:12:24 --> 00:12:29
we were so shocked to find that there

00:12:25 --> 00:12:31
are no robot no two robot platform that

00:12:28 --> 00:12:33
are the same and if you ask people in

00:12:30 --> 00:12:35
the royal committee sometime there's

00:12:32 --> 00:12:37
debate about multi-root versus single

00:12:34 --> 00:12:39
robot and And the argument is that you

00:12:36 --> 00:12:41
know single robot is simpler to scale.

00:12:38 --> 00:12:43
And actually that's not how it plays out

00:12:40 --> 00:12:45
in practice. Like how it plays out in

00:12:42 --> 00:12:48
practice is even if you have a single

00:12:44 --> 00:12:50
robot that you're optimizing for over

00:12:47 --> 00:12:51
time that platform is going to drift.

00:12:49 --> 00:12:54
You know maybe you want to make hardware

00:12:50 --> 00:12:56
change or you have software change you

00:12:53 --> 00:12:58
end up in a situation where it's much

00:12:55 --> 00:12:59
arder for you to reuse old data because

00:12:57 --> 00:13:01
you know in machine learning if you want

00:12:58 --> 00:13:02
o generalize from a distribution you

00:13:00 --> 00:13:04
would like many sample from that

00:13:02 --> 00:13:06
distribution and if you just have one

00:13:03 --> 00:13:09
robot platform that have a major change

00:13:05 --> 00:13:11
very 3 months maybe you have a few data

00:13:08 --> 00:13:14
point from that distribution. Um whereas

00:13:10 --> 00:13:16
if you start from the hypothesis that if

00:13:13 --> 00:13:18
you have many robot platform in your

00:13:15 --> 00:13:20
fleet your model is going to learn

00:13:17 --> 00:13:22
something more abstract which is how do

00:13:19 --> 00:13:24
I control a robot not any particular

00:13:21 --> 00:13:26
obot then the model will be able to

00:13:23 --> 00:13:28
ingest data from you know a slightly

00:13:26 --> 00:13:28
different robot better.

00:13:27 --> 00:13:30
>> Yeah.

00:13:27 --> 00:13:33
>> And actually we're starting to see

00:13:29 --> 00:13:35
immersion property in this kind of robot

00:13:32 --> 00:13:37
large prodation model. That's good news

00:13:34 --> 00:13:39
>> we're doing where you start to see like

00:13:36 --> 00:13:42
interesting transfer be between

00:13:38 --> 00:13:45
different um data sources for example

00:13:41 --> 00:13:47
today it's possible to perform tasks

00:13:44 --> 00:13:48
zero shot zero shot meaning you don't

00:13:46 --> 00:13:50
collect any data and these are the tasks

00:13:47 --> 00:13:52
that last year might have required like

00:13:49 --> 00:13:53
hundreds and hundreds of hours

00:13:51 --> 00:13:54
>> what are some examples

00:13:52 --> 00:13:55
>> yeah do we have any videos we can see

00:13:54 --> 00:13:58
that like show

00:13:54 --> 00:13:59
>> so you know um I get might get some flak

00:13:57 --> 00:14:00
when I come back because this is not

00:13:58 --> 00:14:02
published result hopefully this will

00:13:59 --> 00:14:04
come out soon um so you know I want to

00:14:01 --> 00:14:06
reserve the excitement for that I'm kind

00:14:03 --> 00:14:09
of like building up the the the the

00:14:06 --> 00:14:11
xcitement a little bit. Um so hopefully

00:14:08 --> 00:14:13
this will come out soon. These are not

00:14:10 --> 00:14:15
simple tasks. These are like actually

00:14:12 --> 00:14:17
difficult task that just last year

00:14:14 --> 00:14:18
equire like hundreds of hours of data

00:14:16 --> 00:14:20
collections.

00:14:17 --> 00:14:22
>> You hear hear on Ly cone first that

00:14:19 --> 00:14:23
here's some emergent properties that

00:14:21 --> 00:14:24
are going to come out of PI.

00:14:22 --> 00:14:25
>> Can you give us a sense of like the

00:14:23 --> 00:14:27
flavor of the tasks?

00:14:24 --> 00:14:30
>> It's really easy to fool yourself and so

00:14:26 --> 00:14:32
we wanted to test across like few

00:14:29 --> 00:14:35
different tasks of different flavor. a

00:14:31 --> 00:14:36
task that require precision, task that

00:14:34 --> 00:14:39
require reasoning with multiple objects

00:14:35 --> 00:14:41
in the scene, it all seems to have this

00:14:38 --> 00:14:42
property. Um, that's really nice. So, it

00:14:40 --> 00:14:45
does seems like that's something

00:14:42 --> 00:14:47
that's kind of a more general property

00:14:44 --> 00:14:49
that emerged rather than we just, you

00:14:46 --> 00:14:51
know, got lucky and suddenly the model

00:14:48 --> 00:14:53
start working on one particular test.

00:14:50 --> 00:14:55
>> Could you help us understand where we

00:14:52 --> 00:14:57
are now in terms of like what's working

00:14:54 --> 00:14:59
and how well it's working? Like we're

00:14:56 --> 00:15:00
not quite at the chat GBT moment yet.

00:14:58 --> 00:15:02
Like where are we? And I think you

00:14:59 --> 00:15:03
brought some videos that you were going

00:15:01 --> 00:15:04
to show us to like help everybody

00:15:02 --> 00:15:06
visualize what the current

00:15:03 --> 00:15:08
state-of-the-art actually looks like.

00:15:05 --> 00:15:11
>> I think where we are is I think if you

00:15:07 --> 00:15:14
have a task where it's okay for the

00:15:10 --> 00:15:17
robot to make a mistake um and it's

00:15:13 --> 00:15:19
possible for you to set up a mix

00:15:16 --> 00:15:21
autonomy system where you have a person

00:15:18 --> 00:15:23
that takes over when the robot make a

00:15:20 --> 00:15:26
mistake and provide corrections. it is

00:15:22 --> 00:15:28
possible to get to a level of

00:15:25 --> 00:15:30
performance where it start to make sense

00:15:27 --> 00:15:32
to think about scaling robot deployment

00:15:29 --> 00:15:36
and the example that I specifically want

00:15:32 --> 00:15:40
o highlight here is this blog post that

00:15:35 --> 00:15:42
we did with weave and ultra and you know

00:15:39 --> 00:15:44
it's great that these are al both YC

00:15:41 --> 00:15:46
company I want to provide a little bit

00:15:43 --> 00:15:49
of context here first the the context is

00:15:45 --> 00:15:50
that PI is a primarily research

00:15:48 --> 00:15:53
organization we want to focus on

00:15:50 --> 00:15:55
building the best model Um but we also

00:15:52 --> 00:15:57
want to not be tunnel vision. We want to

00:15:54 --> 00:15:59
make sure that the model that we built

00:15:56 --> 00:16:01
actually going to be useful and actually

00:15:58 --> 00:16:03
perform tasks that people in society

00:16:00 --> 00:16:05
cares about. And one of the really good

00:16:02 --> 00:16:07
way for us to do so is to partner really

00:16:04 --> 00:16:09
closely with company that want to get

00:16:06 --> 00:16:11
robot out there today. And the way that

00:16:08 --> 00:16:14
hese relationship work is that we treat

00:16:10 --> 00:16:18
each other like we're on the same team

00:16:13 --> 00:16:22
very free flow of information. Um and we

00:16:17 --> 00:16:23
designed a system that try to get the

00:16:21 --> 00:16:26
best possible performance for the task

00:16:22 --> 00:16:28
that these company care about. So let me

00:16:25 --> 00:16:30
talk about we fuss. What you're seeing

00:16:27 --> 00:16:34
in this video is a system that we built

00:16:29 --> 00:16:37
ogether folding really diverse item of

00:16:33 --> 00:16:38
laundry in a real laundromat. In the

00:16:36 --> 00:16:41
mission you can see you know people

00:16:37 --> 00:16:43
walking outside and why this task is

00:16:40 --> 00:16:46
difficult is because there's just

00:16:42 --> 00:16:49
infinite possibility of observation

00:16:45 --> 00:16:52
space like you know um clothing are

00:16:48 --> 00:16:54
deformable and no two item of clothing

00:16:51 --> 00:16:56
here are the same and these are also

00:16:53 --> 00:16:58
unseen you know these are not like

00:16:55 --> 00:16:59
clothing item that are seen in the

00:16:57 --> 00:17:01
training data.

00:16:58 --> 00:17:03
>> Yeah I love this team they are some of

00:17:00 --> 00:17:05
the most cracked people out of Apple

00:17:02 --> 00:17:07
I've ever met. Gary was the partner for

00:17:04 --> 00:17:08
weave. Maybe I want to like explain like

00:17:06 --> 00:17:10
what weave is and what their like what

00:17:07 --> 00:17:11
heir like company is.

00:17:09 --> 00:17:13
>> Yeah, I mean they're actually you know

00:17:10 --> 00:17:16
shipping their first robots into the

00:17:12 --> 00:17:17
home. Uh we sort of talked about it as

00:17:15 --> 00:17:19
you know being able to do household

00:17:16 --> 00:17:22
tasks like this and I think they were

00:17:18 --> 00:17:24
very inspired by physical intelligence's

00:17:21 --> 00:17:26
first demos with um with laundry

00:17:23 --> 00:17:29
folding. So it's actually a total trip

00:17:25 --> 00:17:31
to hear about it. you know a bit a year

00:17:28 --> 00:17:33
ago we were talking about them doing it

00:17:30 --> 00:17:35
and then now to see them do it working

00:17:32 --> 00:17:36
in hand handin-hand with you is really

00:17:34 --> 00:17:39
awesome. I think this is a great example

00:17:36 --> 00:17:42
of like you know you need the model

00:17:38 --> 00:17:44
smarts you need the data collection and

00:17:41 --> 00:17:46
then the hardware and um the sort of

00:17:43 --> 00:17:48
system integration all working together

00:17:45 --> 00:17:50
is just hard to nail. So

00:17:47 --> 00:17:52
>> yeah, and to get back to your question

00:17:49 --> 00:17:54
about why robotic is hard, it's really

00:17:51 --> 00:17:57
it's it is a really hard system

00:17:53 --> 00:17:59
problems. Um like you need everything to

00:17:56 --> 00:18:02
work well and work well together to get

00:17:58 --> 00:18:04
his result. And like we've is such an

00:18:01 --> 00:18:07
incredible team for us to to work with

00:18:03 --> 00:18:08
to to get this result. And it actually

00:18:06 --> 00:18:12
didn't even take us that long to get

00:18:07 --> 00:18:13
his result. It was roughly well we set

00:18:11 --> 00:18:15
a goal and maybe it was like two weeks

00:18:12 --> 00:18:17
afterwards where we got got a model that

00:18:14 --> 00:18:19
was got a model and a system that was

00:18:16 --> 00:18:21
good enough at performing this task. It

00:18:18 --> 00:18:23
still like blows my mind to see a robot

00:18:20 --> 00:18:26
actually folding laundry because I

00:18:22 --> 00:18:27
remember until basically until chat GPT

00:18:25 --> 00:18:29
I didn't know if this would exist even

00:18:26 --> 00:18:31
in my entire lifetime because like

00:18:28 --> 00:18:33
folding laundry I mean it's it's always

00:18:30 --> 00:18:35
been like the Turing test for robotics

00:18:32 --> 00:18:37
because there's no way to like

00:18:34 --> 00:18:39
deterministically program a system the

00:18:36 --> 00:18:41
way that you did like preAI to do this

00:18:38 --> 00:18:42
because the space is like so infinite

00:18:40 --> 00:18:44
and like we've shown that it's possible

00:18:41 --> 00:18:45
for us to do like basically everyone can

00:18:43 --> 00:18:47
do this like robots will be able to do

00:18:44 --> 00:18:48
everything it's only a matter of like

00:18:46 --> 00:18:51
improving it from here. There was a

00:18:47 --> 00:18:53
funny story where um when we first

00:18:50 --> 00:18:56
published Pi Zero, people thought of us

00:18:52 --> 00:18:58
as the laundry company [laughter]

00:18:55 --> 00:19:01
because the demo was just focused on

00:18:57 --> 00:19:03
laundry and actually picking home task,

00:19:00 --> 00:19:05
especially task that has to do with

00:19:02 --> 00:19:07
deformable object. It's a very

00:19:04 --> 00:19:08
intentional choice on our end. We're not

00:19:06 --> 00:19:11
just after the home. We really want to

00:19:08 --> 00:19:14
make it broadly applicable. But picking

00:19:10 --> 00:19:16
home task for us to start with has a few

00:19:13 --> 00:19:18
benefits like one is relatable. you

00:19:15 --> 00:19:20
know, you can see the laundry folding

00:19:17 --> 00:19:22
demo and you can kind of like grock how

00:19:19 --> 00:19:24
this is going to be useful and you can

00:19:21 --> 00:19:26
get a sense of why it's hard. And the

00:19:23 --> 00:19:27
second is that it's really easy to set

00:19:25 --> 00:19:29
up to test generalization.

00:19:26 --> 00:19:31
>> You can talk about uh Ultra, which is

00:19:28 --> 00:19:33
your company, Jared, a demo of it.

00:19:30 --> 00:19:35
>> Yeah, this is Ultra. The thing that I

00:19:32 --> 00:19:37
love about this video is you see, you

00:19:34 --> 00:19:40
know, it's bright outside and you see

00:19:36 --> 00:19:43
this is 4x speed and it's 100 minutes.

00:19:39 --> 00:19:45
If I scroll to the end, the sun has set.

00:19:42 --> 00:19:48
>> Oh, wow. Ah,

00:19:44 --> 00:19:50
>> that was one of the big problems in

00:19:47 --> 00:19:52
robotics where it would be so sensitive

00:19:49 --> 00:19:54
to the environment in lighting and mess

00:19:51 --> 00:19:55
up the vision system, the semantics and

00:19:53 --> 00:19:58
part of it.

00:19:54 --> 00:20:01
>> Yeah. And the interesting uh thing here

00:19:57 --> 00:20:05
is that it is possible to get to the

00:20:00 --> 00:20:08
level of autonomy that the robot is just

00:20:04 --> 00:20:10
performing the task. This is autonomy at

00:20:07 --> 00:20:11
scale. Like this is ready to be scaled.

00:20:09 --> 00:20:13
Quan, because this task is less familiar

00:20:10 --> 00:20:14
than laundry folding, do you want to

00:20:12 --> 00:20:17
explain what the robot is doing here and

00:20:13 --> 00:20:19
what Ultra is like doing as a company?

00:20:16 --> 00:20:22
>> Ultra is a company that want to makes it

00:20:18 --> 00:20:25
really easy to adapt robot to, you know,

00:20:21 --> 00:20:28
new task. Um and right now they're

00:20:24 --> 00:20:29
focusing on logistic space which is

00:20:27 --> 00:20:31
really important because you know

00:20:28 --> 00:20:34
there's lots of labor shortage in

00:20:30 --> 00:20:35
logistic and the task that we focus on

00:20:33 --> 00:20:38
together here is you know if you order

00:20:34 --> 00:20:40
an item from Amazon you sometime get

00:20:37 --> 00:20:43
his soft pouch that item get shipped

00:20:39 --> 00:20:45
from and the task here is you have a

00:20:42 --> 00:20:47
tray of these items here and the robot

00:20:44 --> 00:20:50
is supposed to pick one of them at a

00:20:46 --> 00:20:51
time and place it inside this pouch. The

00:20:49 --> 00:20:54
machine would then close it and then

00:20:50 --> 00:20:56
pick up the pouch and put it um on the

00:20:53 --> 00:20:59
left here to be ready for shipping. Now,

00:20:55 --> 00:21:00
this heart is hard because there are

00:20:58 --> 00:21:04
many different types of object that can

00:21:00 --> 00:21:05
be in this tray. And the opening here is

00:21:03 --> 00:21:07
actually very narrow. So, you see this

00:21:04 --> 00:21:11
interesting example of the robot kind of

00:21:06 --> 00:21:13
nudging the item to go into the pouch.

00:21:10 --> 00:21:15
And that's that's really hard. like that

00:21:12 --> 00:21:18
require very good understanding of the

00:21:14 --> 00:21:21
scene and like very precise motion to

00:21:17 --> 00:21:23
nudge the object into the pouch. Um the

00:21:20 --> 00:21:27
other thing that's hard about this task

00:21:22 --> 00:21:30
is the level of autonomy that's required

00:21:26 --> 00:21:32
like this is running for an entire day.

00:21:29 --> 00:21:35
There is still human intervention I want

00:21:31 --> 00:21:37
o say in um this like full day

00:21:34 --> 00:21:40
operation. Um but the level of

00:21:36 --> 00:21:41
intervention is actually quite minimal.

00:21:39 --> 00:21:42
This is not just like some like demo

00:21:40 --> 00:21:44
station, right? This is actually

00:21:41 --> 00:21:45
recorded in an actual e-commerce

00:21:43 --> 00:21:47
warehouse where they're actually

00:21:44 --> 00:21:48
shipping real products to real

00:21:46 --> 00:21:49
customers. This isn't just like a like a

00:21:48 --> 00:21:53
lab.

00:21:48 --> 00:21:55
>> This is packaging real customer uh real

00:21:52 --> 00:21:56
order for customer to be shipped out in

00:21:54 --> 00:21:57
a real warehouse. So, this is real

00:21:55 --> 00:21:58
operations.

00:21:56 --> 00:21:59
>> So, I think this is really cool because

00:21:57 --> 00:22:00
I I think when people think about

00:21:58 --> 00:22:02
robots, they tend to think of the

00:22:00 --> 00:22:03
consumer use cases like weave because

00:22:01 --> 00:22:05
that's, you know, what we're familiar

00:22:02 --> 00:22:06
with in our daily life. What I find

00:22:04 --> 00:22:08
really interesting is that there's like

00:22:05 --> 00:22:10
a million applications like this ultra

00:22:07 --> 00:22:12
thing that you wouldn't think of as

00:22:09 --> 00:22:14
obviously like oh who packs the like

00:22:11 --> 00:22:16
soft pouch of things that you get from

00:22:13 --> 00:22:17
like Amazon. Well, there's some person

00:22:15 --> 00:22:19
like who does that and this is like a

00:22:16 --> 00:22:21
job that we can now build a robot to do.

00:22:18 --> 00:22:24
The interesting thing about the approach

00:22:20 --> 00:22:27
is that you're converting it from a very

00:22:23 --> 00:22:30
difficult engineering problem into a

00:22:26 --> 00:22:32
operation problems of how do I identify

00:22:29 --> 00:22:34
the use case and how do I collect the

00:22:31 --> 00:22:36
right data which is in some sense more

00:22:33 --> 00:22:38
scalable because you can build the

00:22:35 --> 00:22:40
system that allow you to collect data

00:22:37 --> 00:22:41
for many different tasks. So you know

00:22:39 --> 00:22:44
it's now a problem of how do I scale

00:22:40 --> 00:22:46
data collection rather than you know for

00:22:43 --> 00:22:47
every new task how do I design a really

00:22:45 --> 00:22:50
difficult engineering system to solve

00:22:46 --> 00:22:52
it. YC Starter School is back. We're

00:22:49 --> 00:22:54
hand selecting the most promising

00:22:51 --> 00:22:56
builders in the world and flying them

00:22:53 --> 00:22:59
out to San Francisco for July 25th and

00:22:56 --> 00:23:01
26th to discuss the cutting edge of

00:22:58 --> 00:23:03
tech. Apply now for a spot. Okay, back

00:23:00 --> 00:23:06
to the video. I think one thing that the

00:23:02 --> 00:23:08
audience may not know is that you have a

00:23:05 --> 00:23:11
very unique technical insight that in

00:23:08 --> 00:23:14
the past robotics folks would have kind

00:23:10 --> 00:23:16
of gasp and be shocked because robots

00:23:13 --> 00:23:20
need to run in real time. A lot of times

00:23:15 --> 00:23:21
all of the compute runs in on device but

00:23:19 --> 00:23:22
you guys have done something very

00:23:20 --> 00:23:26
different. Can you tell us more about

00:23:22 --> 00:23:28
hat so that this works in in in real

00:23:25 --> 00:23:28
time with large models and and really

00:23:27 --> 00:23:30
well?

00:23:27 --> 00:23:32
>> So the context here is that you know we

00:23:29 --> 00:23:34
talked to many companies that would like

00:23:31 --> 00:23:36
to deploy robots and one of the first

00:23:33 --> 00:23:37
question we get is what compute unit

00:23:35 --> 00:23:39
should we get on the robot? You know

00:23:36 --> 00:23:41
it's expensive it's going to increase

00:23:38 --> 00:23:42
the bomb cost and they're worried that

00:23:40 --> 00:23:44
it's going to go out in fashion very

00:23:42 --> 00:23:45
quickly because the model change the

00:23:43 --> 00:23:47
model gets bigger. How do I make sure

00:23:44 --> 00:23:49
that the hardware that I'm going to

00:23:46 --> 00:23:51
commit to today is going to be viable

00:23:48 --> 00:23:53
for you know a couple of years? It's a

00:23:50 --> 00:23:55
very difficult questions. People often

00:23:52 --> 00:23:57
really surprise when I tell them that

00:23:54 --> 00:24:00
almost all of the robot evaluation that

00:23:56 --> 00:24:02
we run at PI today including the really

00:23:59 --> 00:24:04
complicated demo that we have shown

00:24:01 --> 00:24:06
making coffee folding laundry mobile

00:24:03 --> 00:24:08
robots navigating around the model

00:24:05 --> 00:24:11
actually hosted in the cloud. Um and you

00:24:07 --> 00:24:12
know this is not like a cloud isn't a

00:24:10 --> 00:24:14
server in the office. It's a real cloud.

00:24:12 --> 00:24:18
The model is hosted in a data center

00:24:13 --> 00:24:20
somewhere and within this high frequency

00:24:17 --> 00:24:23
control loop that um is controlling the

00:24:19 --> 00:24:26
robot. The robot is actually querying an

00:24:22 --> 00:24:28
API endpoint that hosts the model

00:24:25 --> 00:24:30
sending it images and language command

00:24:27 --> 00:24:32
getting back action that then

00:24:29 --> 00:24:35
execute it directly on the robot. And

00:24:31 --> 00:24:36
this is surprising because of precisely

00:24:34 --> 00:24:38
the reason that you mentioned you know

00:24:35 --> 00:24:41
how do you actually make it work? This

00:24:37 --> 00:24:43
why it's really important for pi to

00:24:40 --> 00:24:45
couple

00:24:42 --> 00:24:47
system hardware and model development

00:24:44 --> 00:24:49
and research like very tightly to

00:24:46 --> 00:24:50
gether because like it allow us to

00:24:48 --> 00:24:53
solve for this problem. So for example,

00:24:49 --> 00:24:55
one of the insight that we have here is

00:24:52 --> 00:24:58
that you can actually bury the inference

00:24:54 --> 00:25:00
time within the robot control loop

00:24:57 --> 00:25:02
because you know if I'm a robot, I have

00:24:59 --> 00:25:04
nough action for me to execute for the

00:25:01 --> 00:25:07
next 100 millconds. Like there's no

00:25:03 --> 00:25:09
reason for me to wait until I finish

00:25:06 --> 00:25:10
executing that action to ask my model

00:25:08 --> 00:25:14
for a different action. You know, I can

00:25:09 --> 00:25:16
do it as fast as um inference

00:25:13 --> 00:25:19
ssentially. Um, and so you know maybe

00:25:15 --> 00:25:21
when I only have 50 milliseconds of

00:25:18 --> 00:25:23
action worth left I can ask for the next

00:25:20 --> 00:25:25
sets of action and when the current 50

00:25:22 --> 00:25:27
millisecond is over like I have

00:25:24 --> 00:25:29
something that's ready for me to

00:25:26 --> 00:25:30
continue with you know my next 100

00:25:28 --> 00:25:32
milliseconds. Um so that's one of the

00:25:30 --> 00:25:36
inside. The other uh kind of algorithmic

00:25:32 --> 00:25:38
improvement um we we refer to them as

00:25:35 --> 00:25:40
real-time chunking design inference in

00:25:37 --> 00:25:44
such a way that you know there's going

00:25:39 --> 00:25:46
to be a delay in how long it takes to

00:25:43 --> 00:25:49
query the model on the cloud. Basically

00:25:45 --> 00:25:51
like the problem here if I get uh a

00:25:48 --> 00:25:56
little bit more technical is an action

00:25:50 --> 00:25:57
chunk is a sequence of action that I can

00:25:55 --> 00:26:00
execute on the robot. So you know it's

00:25:56 --> 00:26:02
not just one action. And if I have an

00:25:59 --> 00:26:05
action chunk that I can execute for 100

00:26:01 --> 00:26:07
millisecond and 50 milliseconds in I

00:26:04 --> 00:26:08
want to predict another action chunk and

00:26:06 --> 00:26:10
I'm going to transition to that new

00:26:07 --> 00:26:12
action chunk after my current 50

00:26:09 --> 00:26:13
millisecond is over. How do I make sure

00:26:11 --> 00:26:15
the two are consistent? Like you know

00:26:12 --> 00:26:17
how do I make sure that if I'm moving

00:26:14 --> 00:26:19
this way the next action chunk is going

00:26:16 --> 00:26:21
to continue me to allow me to continue

00:26:18 --> 00:26:23
to be smoothly moving this way.

00:26:20 --> 00:26:24
>> You can premputee. Yeah, you can premp

00:26:22 --> 00:26:26
compute and like that's one of the

00:26:23 --> 00:26:30
algorithmic improvement that we've made

00:26:25 --> 00:26:31
to make inference using model hosted in

00:26:29 --> 00:26:33
the cloud possible.

00:26:30 --> 00:26:35
>> I studied computer engineering so I'm

00:26:32 --> 00:26:37
not really an algorithms person but when

00:26:34 --> 00:26:38
it comes to systems like that like

00:26:36 --> 00:26:40
pipelining like get me all over that.

00:26:38 --> 00:26:41
That sounds great. [laughter] That's so

00:26:39 --> 00:26:43
interesting.

00:26:40 --> 00:26:44
>> I mean this simplifies it's kind of it's

00:26:42 --> 00:26:46
a brilliant choice because it simplifies

00:26:43 --> 00:26:48
o much of the system for the robots.

00:26:45 --> 00:26:50
You don't need all these clunky I don't

00:26:47 --> 00:26:52
know people have two operating systems

00:26:49 --> 00:26:55
at sometimes for for robots embedded

00:26:51 --> 00:26:58
arts and then the regular one and all

00:26:54 --> 00:27:01
these complex giant compute and power

00:26:57 --> 00:27:03
and this is what the initial versions of

00:27:00 --> 00:27:05
Whimo used to run basically a server on

00:27:02 --> 00:27:07
the trunk and you can't afford to do

00:27:04 --> 00:27:08
that with general day robotics which is

00:27:06 --> 00:27:09
brilliant that you figure out how to do

00:27:08 --> 00:27:10
it.

00:27:08 --> 00:27:12
>> Yeah, you don't have to. I mean you can

00:27:09 --> 00:27:15
do things some of it there obviously has

00:27:11 --> 00:27:16
to be some compute there but a lot of

00:27:14 --> 00:27:18
the compute can happen elsewhere and

00:27:16 --> 00:27:20
then is there there must be a video like

00:27:17 --> 00:27:22
this this thing that we're looking at in

00:27:19 --> 00:27:25
the top left like how much of that is

00:27:21 --> 00:27:27
ort of like video feed back how much of

00:27:24 --> 00:27:29
it is like local processed I mean

00:27:26 --> 00:27:30
>> is there any compute locally on this

00:27:28 --> 00:27:32
robot or is it just like a dumb like

00:27:29 --> 00:27:33
video camera that streams data to the

00:27:31 --> 00:27:38
cloud

00:27:32 --> 00:27:40
>> for this I am not 100% sure but I am

00:27:37 --> 00:27:42
inclined to believe that it's just a

00:27:39 --> 00:27:44
dumb computer. Like for this specific

00:27:41 --> 00:27:46
video, um I don't remember, but I'm just

00:27:43 --> 00:27:47
100% confident that we can make this

00:27:45 --> 00:27:49
work with a dumb computer and the robot.

00:27:46 --> 00:27:52
And the one other interesting thing

00:27:48 --> 00:27:54
about our collaboration with Weven Ultra

00:27:51 --> 00:27:55
is one, I've never seen the robot in

00:27:53 --> 00:27:56
person.

00:27:54 --> 00:28:00
>> Oh wow.

00:27:55 --> 00:28:02
>> Um two is I have very little idea about

00:27:59 --> 00:28:02
how the robot actually works.

00:28:01 --> 00:28:04
>> Interesting.

00:28:01 --> 00:28:06
>> Um and that's a very intentional choice.

00:28:03 --> 00:28:08
Like I want to stay away from from that

00:28:05 --> 00:28:10
as far as possible. I also don't know

00:28:08 --> 00:28:11
how they collect data like I

00:28:09 --> 00:28:13
intentionally don't ask them this

00:28:10 --> 00:28:18
question to understand whether it's

00:28:12 --> 00:28:20
possible for an organization like PI to

00:28:17 --> 00:28:22
parachute into their existing system and

00:28:19 --> 00:28:24
to work really closely with them on the

00:28:21 --> 00:28:27
thing that actually matters to get the

00:28:23 --> 00:28:29
system to work and not have to learn

00:28:26 --> 00:28:31
about how they've set up their system

00:28:28 --> 00:28:33
because in a way that's like a more

00:28:30 --> 00:28:36
scalable recipe. Yeah, you completely

00:28:32 --> 00:28:39
decouple a lot of the hardware control

00:28:35 --> 00:28:42
oop choices from the from the semantics

00:28:38 --> 00:28:44
and planning which is just works which

00:28:41 --> 00:28:47
is brilliant. Yeah, it I mean I'm really

00:28:43 --> 00:28:48
surprised that it works and when when we

00:28:46 --> 00:28:51
started the company, we thought that

00:28:47 --> 00:28:52
real deployment is going to be a is only

00:28:50 --> 00:28:55
going to be in the conversation like 5

00:28:51 --> 00:28:57
years um into the life of the company

00:28:54 --> 00:29:00
cuz the problem is really hard and

00:28:56 --> 00:29:02
>> we're two years in and you know this is

00:28:59 --> 00:29:04
the result that we we have and and real

00:29:01 --> 00:29:06
ike deployment and scaling the number

00:29:03 --> 00:29:08
of robot is a really serious

00:29:05 --> 00:29:11
consideration today and so the pace of

00:29:07 --> 00:29:12
progress has just been very pleasantly

00:29:10 --> 00:29:13
much faster than we expected.

00:29:11 --> 00:29:14
Originally,

00:29:12 --> 00:29:16
>> often on this podcast, we talk about

00:29:13 --> 00:29:17
like what all this means for startup

00:29:15 --> 00:29:19
founders. I I think that might be an

00:29:16 --> 00:29:21
interesting question for us to explore

00:29:18 --> 00:29:22
here. So, if you imagine someone was

00:29:20 --> 00:29:24
listening to this podcast, maybe they're

00:29:21 --> 00:29:25
like a college student that's studying

00:29:23 --> 00:29:27
computer science and they think robots

00:29:24 --> 00:29:29
are really cool and they want to do

00:29:26 --> 00:29:30
something like this, how should they get

00:29:28 --> 00:29:32
started and what are the skills that

00:29:29 --> 00:29:33
hey need? Do they need to be a

00:29:31 --> 00:29:35
mechanical engineer to be able to build

00:29:32 --> 00:29:38
a robot like this? Can they just buy an

00:29:34 --> 00:29:39
off-the-shelf like robot arm and camera

00:29:37 --> 00:29:45
system and like what

00:29:38 --> 00:29:45
>> and load pie and load piec

00:29:45 --> 00:29:51
more context. The first is that robotic

00:29:48 --> 00:29:53
is traditionally really hard because

00:29:50 --> 00:29:55
it's an extremely vertically integrated

00:29:52 --> 00:29:57
business. You need to have your own

00:29:54 --> 00:29:59
customer relationship, your own

00:29:56 --> 00:30:01
hardware, your autonomy stack, your own

00:29:58 --> 00:30:04
safety certification, your own

00:30:00 --> 00:30:06
everything. And the barrier to entry is

00:30:03 --> 00:30:07
just really high because of that. And

00:30:05 --> 00:30:11
one of the thing that we're trying to

00:30:06 --> 00:30:13
change is that we're trying to provide a

00:30:10 --> 00:30:15
foundation of physical intelligence that

00:30:12 --> 00:30:18
he community can build on top of that

00:30:14 --> 00:30:20
allow them to onboard autonomy onto

00:30:17 --> 00:30:22
their robot and their task much quicker

00:30:20 --> 00:30:25
than before. So that's the first you

00:30:21 --> 00:30:27
know we want to provide that kind of

00:30:24 --> 00:30:29
seat of intelligence that allow people

00:30:26 --> 00:30:31
to move much faster so that they can you

00:30:28 --> 00:30:34
know focus on other problems. Um the

00:30:30 --> 00:30:37
second thing is that

00:30:33 --> 00:30:40
he I think the recipe for starting a

00:30:36 --> 00:30:42
vertical robotic business today is one

00:30:39 --> 00:30:44
have a really good understanding of the

00:30:41 --> 00:30:46
xisting workflow because the robotic

00:30:43 --> 00:30:49
system needs to fit into existing

00:30:45 --> 00:30:51
workflow and the second is to be very

00:30:48 --> 00:30:54
meticulous about identifying where the

00:30:50 --> 00:30:56
opportunity is. you know, if there's a

00:30:53 --> 00:30:59
workflow that need X number of work

00:30:55 --> 00:31:00
today, you know, where is the robot when

00:30:58 --> 00:31:02
you insert it? It's going to make the

00:30:59 --> 00:31:04
biggest difference. And two is to really

00:31:01 --> 00:31:06
be scrappy when it comes to hardware and

00:31:03 --> 00:31:09
ata collections. You don't need a

00:31:06 --> 00:31:11
incredibly expensive robot that is

00:31:08 --> 00:31:13
capable of very precise motion today to

00:31:10 --> 00:31:15
be able to do this task. And the reason

00:31:12 --> 00:31:17
why is this why is this model are really

00:31:14 --> 00:31:19
reactive and so they can compensate for

00:31:16 --> 00:31:24
some of the inaccuracy in the actual

00:31:18 --> 00:31:26
robot movement and to ensure that you

00:31:23 --> 00:31:28
have the ability to collect data and to

00:31:25 --> 00:31:30
run evaluation especially evaluation in

00:31:27 --> 00:31:33
real deployment. The next step after

00:31:29 --> 00:31:35
that is to get a mixed autonomy system

00:31:32 --> 00:31:36
that allow you to get to the point where

00:31:34 --> 00:31:37
it's break even

00:31:35 --> 00:31:40
>> like break even economically.

00:31:36 --> 00:31:41
>> Break even economically because the

00:31:39 --> 00:31:43
reason why that's important is because

00:31:40 --> 00:31:44
it allow you to then scale the number of

00:31:42 --> 00:31:45
robot

00:31:43 --> 00:31:46
>> because if you lose money in every robot

00:31:44 --> 00:31:48
it's very hard to scale.

00:31:45 --> 00:31:49
>> That has been historically one of the

00:31:47 --> 00:31:51
biggest challenges for robotic companies

00:31:48 --> 00:31:53
that they go into growth stage. It's

00:31:50 --> 00:31:54
just the payback c period is just

00:31:52 --> 00:31:56
doesn't make sense.

00:31:53 --> 00:31:59
>> Yeah. So the equation I think for

00:31:55 --> 00:32:02
starting a robotic business um has

00:31:58 --> 00:32:05
changed and will continue to change at

00:32:01 --> 00:32:07
an accelerating pace because the upfront

00:32:04 --> 00:32:09
cost is not that high anymore. And now

00:32:06 --> 00:32:11
you know what is the upfront cost? The

00:32:08 --> 00:32:14
upfront cost is

00:32:10 --> 00:32:16
much cheaper hardware, ability to

00:32:13 --> 00:32:18
collect data, ability to collect um

00:32:15 --> 00:32:20
evaluation

00:32:17 --> 00:32:22
and ability to kind of like understand

00:32:19 --> 00:32:24
the use case to see where they should

00:32:21 --> 00:32:25
insert the robot. you know, it's not

00:32:23 --> 00:32:28
about having incredibly expensive

00:32:24 --> 00:32:32
hardware. It's not about having your own

00:32:27 --> 00:32:34
proprietary, I think, autonomy classical

00:32:31 --> 00:32:36
uh stack anymore to be able to do this

00:32:33 --> 00:32:39
task. Um, and so it it allow company to

00:32:35 --> 00:32:40
focus on the component that will

00:32:38 --> 00:32:42
actually allow them to differentiate

00:32:39 --> 00:32:44
themselves from the rest of the space.

00:32:41 --> 00:32:46
Now that you've sort of unbundled it and

00:32:43 --> 00:32:47
you no longer need to build this fully

00:32:45 --> 00:32:49
vertically integrated company in order

00:32:46 --> 00:32:51
to build a robotics company, are we on

00:32:48 --> 00:32:53
the precipice of a Cambrian explosion of

00:32:50 --> 00:32:54
vertical robotics companies where

00:32:52 --> 00:32:56
there's going to be like a thousand

00:32:53 --> 00:32:59
companies like Ultra going after, you

00:32:55 --> 00:33:01
know, every like menial job in the

00:32:58 --> 00:33:02
conomy and like getting a deep

00:33:00 --> 00:33:04
understanding of the customer, building

00:33:01 --> 00:33:06
a robot that can solve that problem,

00:33:03 --> 00:33:08
doing a like mixed human machine

00:33:05 --> 00:33:10
deployment until it like can run fully

00:33:07 --> 00:33:12
autonomously and building a company in

00:33:09 --> 00:33:13
every sector. Is that is is that the

00:33:11 --> 00:33:14
future that you see people building on

00:33:12 --> 00:33:16
top of pi?

00:33:13 --> 00:33:17
>> It's funny that you mentioned Cumbrian

00:33:15 --> 00:33:19
explosion because when we wrote this

00:33:16 --> 00:33:22
blog post there was that term that was

00:33:18 --> 00:33:25
very kind of like hotly debated. We are

00:33:21 --> 00:33:27
I think academics at heart and we want

00:33:24 --> 00:33:30
o be kind of very measure when we

00:33:26 --> 00:33:31
communicate but you know myself

00:33:29 --> 00:33:34
personally I believe there's going to be

00:33:30 --> 00:33:36
a Cambrian explosions of um robotic

00:33:34 --> 00:33:39
ompany across the entire world and

00:33:35 --> 00:33:41
across many many different vertical um

00:33:38 --> 00:33:44
just because it's just so much cheaper

00:33:40 --> 00:33:46
to build and it doesn't require um you

00:33:43 --> 00:33:48
know someone with 20 years of experience

00:33:45 --> 00:33:51
in robotic to start anymore you know it

00:33:47 --> 00:33:54
require someone that is really scrappy

00:33:50 --> 00:33:57
that can move really quickly um can do

00:33:53 --> 00:33:59
the system integration um can understand

00:33:56 --> 00:34:00
customer what they want to start the

00:33:58 --> 00:34:02
deployment

00:33:59 --> 00:34:04
>> I mean what's coming up for me is

00:34:01 --> 00:34:07
obviously we work with a lot of robotics

00:34:03 --> 00:34:09
companies and meet a lot of founders and

00:34:06 --> 00:34:12
it feels like there's this continuum um

00:34:08 --> 00:34:15
one is to use an analogy to you know

00:34:12 --> 00:34:17
personal computing you could argue that

00:34:14 --> 00:34:20
industrial robotics today is basically

00:34:16 --> 00:34:22
like mainframe or uh minicomp computer

00:34:19 --> 00:34:25
level like you know if you look back in

00:34:21 --> 00:34:28
the 70s huge public companies like

00:34:24 --> 00:34:30
digital computer that you know just did

00:34:27 --> 00:34:32
like these sort of very very expensive

00:34:29 --> 00:34:34
deployments but like they were very very

00:34:31 --> 00:34:36
specialized and it was all extreme

00:34:33 --> 00:34:38
nterprise like you know the idea of a

00:34:35 --> 00:34:40
personal computer was ridiculous right

00:34:37 --> 00:34:43
you know it took the altar and then

00:34:39 --> 00:34:45
Apple 1 and Apple 2 and then IBM PCXT to

00:34:42 --> 00:34:47
like create personal computing and then

00:34:44 --> 00:34:50
like the traditional advice for robotics

00:34:46 --> 00:34:53
for many years is like go after like

00:34:49 --> 00:34:55
dirty and dangerous. And then of course

00:34:52 --> 00:34:56
those are sort of the industrial cases

00:34:54 --> 00:34:59
like you you know you have these giant

00:34:56 --> 00:35:00
Tesla robots in the Gigafactory and

00:34:58 --> 00:35:03
things like that. It feels like what you

00:34:59 --> 00:35:06
said around profitability is really

00:35:02 --> 00:35:09
big. So, you know, does that mean

00:35:05 --> 00:35:13
that the people who do the vertical

00:35:08 --> 00:35:15
robot cambrian explosion sort of moment

00:35:12 --> 00:35:19
uh the people who are sort of first in

00:35:14 --> 00:35:21
that like it sounds like they would be

00:35:18 --> 00:35:22
the first to be profitable and not dirty

00:35:20 --> 00:35:24
and dangerous?

00:35:21 --> 00:35:28
>> I think this is already happening today.

00:35:23 --> 00:35:31
I think um we have the fortune of having

00:35:27 --> 00:35:33
lots of visibility into the robotic

00:35:30 --> 00:35:34
ommunity because um you know people

00:35:32 --> 00:35:37
would like to talk to us, people would

00:35:33 --> 00:35:39
like to learn you know what it's like to

00:35:36 --> 00:35:41
build a foundation model for robotic and

00:35:38 --> 00:35:43
people would like to know how do I get

00:35:40 --> 00:35:46
he same level of autonomy and there are

00:35:42 --> 00:35:48
so many companies and businesses that we

00:35:45 --> 00:35:50
talk to that would love to put the robot

00:35:47 --> 00:35:52
into that space that you know it's okay

00:35:49 --> 00:35:54
for the robot to make a mistake and they

00:35:51 --> 00:35:56
just need it so much. I really believe

00:35:53 --> 00:35:59
that the recipe that I mentioned earlier

00:35:55 --> 00:36:02
of identify where the robot can fit in,

00:35:58 --> 00:36:04
focus on cheaper hardware, collect data,

00:36:01 --> 00:36:08
run evaluation, mix autonomy, break

00:36:04 --> 00:36:09
even, scale robots will work across many

00:36:07 --> 00:36:11
different vertical and I'm I'm seeing it

00:36:08 --> 00:36:12
play out today and it's just incredibly

00:36:10 --> 00:36:14
exciting to see.

00:36:11 --> 00:36:15
>> And this is pretty cool that you

00:36:13 --> 00:36:17
literally just gave people the playbook

00:36:14 --> 00:36:19
for how to build a vertical robotics

00:36:16 --> 00:36:21
company. like this is a playbook that

00:36:18 --> 00:36:22
could possibly be followed successfully

00:36:20 --> 00:36:25
hundreds or thousands of times.

00:36:21 --> 00:36:27
>> And the reason why I want to mention it

00:36:24 --> 00:36:30
is because I I do want to see that

00:36:26 --> 00:36:33
Cambrian Cambrian explosions and we want

00:36:29 --> 00:36:35
o help enable it. You know, for pi if

00:36:32 --> 00:36:37
we talk about why pi is going to

00:36:34 --> 00:36:39
fail, it's probably going to be because

00:36:36 --> 00:36:41
the problem is just way too hard. You

00:36:38 --> 00:36:42
know, maybe it take 50 more years to

00:36:40 --> 00:36:46
solve the robotic problem and you know,

00:36:42 --> 00:36:48
not couple of years, five, 10. Um and so

00:36:45 --> 00:36:50
we want to enable the community. We want

00:36:48 --> 00:36:52
o accelerate progress. And that's why

00:36:49 --> 00:36:55
we're very open like we publish our

00:36:51 --> 00:36:58
esearch. We open source PI 0 and PIO5.

00:36:54 --> 00:36:59
And people also shock when they asked me

00:36:57 --> 00:37:01
you know is there any difference between

00:36:58 --> 00:37:04
PI 0 and PI5 that you open source versus

00:37:00 --> 00:37:06
the model that we use internally PI 0

00:37:03 --> 00:37:09
and PIO5. And the answer was actually

00:37:05 --> 00:37:11
no. It's the same model. like the

00:37:08 --> 00:37:13
>> pre-trained model weights that you're

00:37:10 --> 00:37:14
using that we open source is also the

00:37:12 --> 00:37:16
pre-trained model weights that our

00:37:13 --> 00:37:18
esearcher internally use for PI 0 and

00:37:15 --> 00:37:21
PIO5 and so we really want to help

00:37:17 --> 00:37:23
accelerate progress in the community um

00:37:20 --> 00:37:25
and to create that Cambrian explosions.

00:37:22 --> 00:37:28
>> Yeah, that's very inspiring. I mean, I

00:37:24 --> 00:37:29
feel like that's uh everyone's sort of

00:37:27 --> 00:37:32
spending a lot of time in the digital

00:37:28 --> 00:37:34
world and it feels like, you know, now

00:37:31 --> 00:37:37
is the time to start thinking about, you

00:37:33 --> 00:37:39
know, the the world of atoms and uh this

00:37:36 --> 00:37:40
sort of the perfect mix of actually

00:37:38 --> 00:37:43
like, you know, how do you take

00:37:39 --> 00:37:46
lectrons and turn it into abundance in

00:37:42 --> 00:37:49
the, you know, Adam's world and I think

00:37:45 --> 00:37:52
about Dario Amade's essay um all watched

00:37:48 --> 00:37:53
over by machines of loving grace. And

00:37:51 --> 00:37:55
when you really think about the perfect

00:37:52 --> 00:37:58
manifestation of that, it's not like,

00:37:54 --> 00:38:00
you know, perfect uh agents that look

00:37:57 --> 00:38:02
over you just like in the electronic

00:37:59 --> 00:38:04
world. It's, you know, actually

00:38:01 --> 00:38:05
something a little bit more akin to what

00:38:03 --> 00:38:08
we're seeing here.

00:38:04 --> 00:38:11
>> Yeah. And this has really been our

00:38:08 --> 00:38:13
mission from the start is to create that

00:38:10 --> 00:38:16
Cambrian explosion. Um and you know this

00:38:12 --> 00:38:17
why we choose to focus on the model

00:38:15 --> 00:38:20
because we believe that is the borrow

00:38:16 --> 00:38:22
neck to just really make robot useful

00:38:19 --> 00:38:25
across many different different tasks in

00:38:21 --> 00:38:26
the world and that's why we also focus

00:38:24 --> 00:38:30
on cross embodiment. You know success

00:38:25 --> 00:38:32
for us is not defined as only our model

00:38:29 --> 00:38:34
on a robot performing task that is

00:38:31 --> 00:38:37
useful. The the surface area for success

00:38:33 --> 00:38:40
is actually much larger which is our

00:38:36 --> 00:38:42
model performing really useful tasks on

00:38:39 --> 00:38:44
somebody else robot out there. maybe

00:38:41 --> 00:38:46
that we don't even know what that robot

00:38:43 --> 00:38:47
is like in a way that's like useful to

00:38:45 --> 00:38:49
the end consumer.

00:38:46 --> 00:38:51
>> Could we maybe talk a little bit about

00:38:48 --> 00:38:53
um like the humans behind the robots

00:38:50 --> 00:38:54
here? Like um how did the company get

00:38:52 --> 00:38:57
started? Like who are the who are your

00:38:54 --> 00:38:59
co-founders? How do you all get together

00:38:56 --> 00:39:00
and what skills you each bring to such a

00:38:58 --> 00:39:01
complex problem?

00:38:59 --> 00:39:03
>> Sometimes the joke I make here is that

00:39:00 --> 00:39:06
he human behind the robots are also

00:39:02 --> 00:39:09
robots. Not [laughter] really. Um yeah,

00:39:05 --> 00:39:11
so Pi is a very I would say

00:39:08 --> 00:39:14
untraditional company. We have a like

00:39:10 --> 00:39:16
larger than average founding teams and

00:39:13 --> 00:39:18
some of us work really closely together

00:39:15 --> 00:39:20
when we were at the robotic team at

00:39:17 --> 00:39:22
Google. And the robotics team at Google

00:39:19 --> 00:39:25
was I think a really really great

00:39:21 --> 00:39:27
environment for seeing the sign of life

00:39:24 --> 00:39:30
and creating the relationships and the

00:39:26 --> 00:39:33
community that allow the robot community

00:39:29 --> 00:39:37
and like these advances to flourish.

00:39:32 --> 00:39:38
There is Locky uh which we met when we

00:39:36 --> 00:39:39
uh were thinking about starting the

00:39:37 --> 00:39:41
company and has just been really

00:39:38 --> 00:39:44
instrumental in making sure that we're a

00:39:40 --> 00:39:47
good business and there is Adnan our

00:39:43 --> 00:39:49
hardware lead um that came over from

00:39:46 --> 00:39:52
Andro and Adnan has a really difficult

00:39:48 --> 00:39:55
job because if you want to work on cross

00:39:51 --> 00:39:56
embodiment you remember my uh joke about

00:39:54 --> 00:39:58
how if you want to add two years to your

00:39:55 --> 00:40:00
grad school you bring on one more robots

00:39:57 --> 00:40:03
the the hardware problem and the

00:39:59 --> 00:40:08
operational problem for us is how do We

00:40:02 --> 00:40:09
built improve and scale a fleet of had

00:40:07 --> 00:40:12
the joinious robot you know it's just

00:40:08 --> 00:40:14
not one robot platform and because we

00:40:11 --> 00:40:16
built the organization from scratch in

00:40:13 --> 00:40:18
the beginning to to support that like I

00:40:15 --> 00:40:22
think we're able to do it but it's just

00:40:17 --> 00:40:24
a really hard uh problem um because

00:40:21 --> 00:40:25
there's just like no two different

00:40:23 --> 00:40:27
robots in the fleet like how do you make

00:40:24 --> 00:40:30
sure that everything runs smoothly.

00:40:26 --> 00:40:31
We're really good at diva and conquer if

00:40:29 --> 00:40:32
you ask. Um,

00:40:30 --> 00:40:33
>> but so how how many co-founders are

00:40:31 --> 00:40:36
there in total?

00:40:32 --> 00:40:38
>> We have Brian, we have Chelsea, Sergey,

00:40:35 --> 00:40:39
myself, Locky, and Adnan.

00:40:37 --> 00:40:42
>> Is it just necessary to have that many

00:40:38 --> 00:40:44
co-founders to solve a problem as big as

00:40:41 --> 00:40:46
this? Or was it a case like you were

00:40:43 --> 00:40:47
already sort of like a unit together?

00:40:45 --> 00:40:48
You'd already worked together and you

00:40:46 --> 00:40:50
just what whatever you started, you

00:40:47 --> 00:40:52
would all have wanted to work together.

00:40:49 --> 00:40:55
>> One common question that we have is, you

00:40:51 --> 00:40:56
know, why band together? And, you know,

00:40:54 --> 00:40:59
the first is that we really enjoy each

00:40:55 --> 00:41:02
other company. um we spend a lot of time

00:40:58 --> 00:41:04
at work and it's you know in some sense

00:41:01 --> 00:41:06
give meaning to life and so we really

00:41:03 --> 00:41:08
want to enjoy the relationship we have

00:41:05 --> 00:41:11
at work. Um and the second is that you

00:41:07 --> 00:41:13
know any one of us could have started um

00:41:10 --> 00:41:17
a company and be successful but the

00:41:12 --> 00:41:19
problem is just so incredibly hard and

00:41:16 --> 00:41:21
the chances of success is just so much

00:41:18 --> 00:41:24
igher that we bent together and we can

00:41:20 --> 00:41:26
divide and conquer the problems. Um and

00:41:23 --> 00:41:29
you know that's that I think one of the

00:41:25 --> 00:41:31
main reason why the progress has been

00:41:28 --> 00:41:34
much faster than than we expected.

00:41:30 --> 00:41:38
>> What were the differences of um you

00:41:33 --> 00:41:42
working before in either academia or a

00:41:37 --> 00:41:44
big industry big company like Google and

00:41:42 --> 00:41:46
as opposed to now in a startup.

00:41:43 --> 00:41:47
>> This is this is the first time for a lot

00:41:45 --> 00:41:48
of you doing a startup right?

00:41:46 --> 00:41:51
>> Yeah this is the first time for a lot of

00:41:48 --> 00:41:52
us. Um one of the really surprising

00:41:50 --> 00:41:56
thing that we learned when we started

00:41:52 --> 00:41:58
the company is that the infrastructure

00:41:55 --> 00:42:00
for supporting large scale general

00:41:57 --> 00:42:02
purpose robot were just not there and

00:41:59 --> 00:42:04
you know this start from the software

00:42:01 --> 00:42:06
itself. How do you collect data? What

00:42:03 --> 00:42:08
device do you use to collect data? How

00:42:05 --> 00:42:09
do you manage the data? How do you uh

00:42:07 --> 00:42:12
annotate the data? How do you get

00:42:08 --> 00:42:14
visibility into the data? How do you run

00:42:11 --> 00:42:16
evaluation? How do you build operational

00:42:13 --> 00:42:18
process? like there wasn't company that

00:42:15 --> 00:42:19
offer this kind of services which is

00:42:17 --> 00:42:23
very different from software and we were

00:42:18 --> 00:42:26
ally surprised um to to find out and

00:42:22 --> 00:42:28
so we end up writing a lot of the

00:42:25 --> 00:42:30
software at PI um oursel but I think

00:42:27 --> 00:42:32
this is another area of incredible

00:42:29 --> 00:42:34
opportunity of kind of building services

00:42:31 --> 00:42:36
for robot company like you know if you

00:42:33 --> 00:42:38
can offer remote teleout for example if

00:42:35 --> 00:42:40
you can offer data collections if you

00:42:37 --> 00:42:42
can offer annotation service because you

00:42:39 --> 00:42:44
know these are functions that doesn't

00:42:42 --> 00:42:46
need to be repeated from one company to

00:42:43 --> 00:42:49
the next. So I think there's lots of

00:42:45 --> 00:42:52
opportunity to build um kind of support

00:42:48 --> 00:42:53
for growing robotic business. Um so

00:42:51 --> 00:42:56
that's one thing like one surprising

00:42:52 --> 00:42:59
thing that I learned and the second is I

00:42:55 --> 00:43:01
think one of the reason why we have

00:42:58 --> 00:43:03
managed to achieve such progress is that

00:43:00 --> 00:43:06
here is a really tight loop of

00:43:02 --> 00:43:10
collaboration in the entire life cycle

00:43:05 --> 00:43:12
of model development. um going from what

00:43:09 --> 00:43:13
ask you collect data for. If you

00:43:11 --> 00:43:16
collect data for that task, how do you

00:43:12 --> 00:43:17
do it? What hardware do you use? Once

00:43:15 --> 00:43:19
after you collect the data, how do you

00:43:16 --> 00:43:22
get visibility? How do you ensure data

00:43:18 --> 00:43:24
quality? Um how do you then make sure

00:43:21 --> 00:43:26
that you can easily train on that data?

00:43:23 --> 00:43:28
If after you train on that, how do you

00:43:25 --> 00:43:30
run evaluation? Evaluation is really

00:43:27 --> 00:43:32
hard problem in robotic because it scale

00:43:29 --> 00:43:34
super linearly to model capability. Like

00:43:31 --> 00:43:36
let's say you have a model that can

00:43:33 --> 00:43:38
perform a two-minute task. running

00:43:35 --> 00:43:40
evaluation for that is very different

00:43:37 --> 00:43:42
from running evaluation for a task

00:43:39 --> 00:43:44
that's 20 minutes like it's not 10 times

00:43:41 --> 00:43:46
harder. It's it's it's more than 10

00:43:43 --> 00:43:49
times harder. um after you run

00:43:45 --> 00:43:51
evaluation how you can how do you can

00:43:48 --> 00:43:53
like dis dist distill the learning from

00:43:50 --> 00:43:55
that evaluation to know how to improve

00:43:52 --> 00:43:57
the the model further like one of the

00:43:54 --> 00:44:00
really side project I would love to take

00:43:56 --> 00:44:01
on is to build a automated robotic

00:43:59 --> 00:44:03
research scientist

00:44:00 --> 00:44:05
>> um which is really one of the bottleneck

00:44:02 --> 00:44:08
we have today because this is a really

00:44:04 --> 00:44:10
difficult skill set um that require

00:44:07 --> 00:44:12
intuition about the entire stack so you

00:44:09 --> 00:44:16
know I would love it if there is a model

00:44:12 --> 00:44:19
that can ingest multi model data such as

00:44:15 --> 00:44:21
this and analyze filler modes um you

00:44:18 --> 00:44:23
know understanding oh is the robot

00:44:20 --> 00:44:24
performing this way because of the data

00:44:22 --> 00:44:26
that was collected or the way that it

00:44:23 --> 00:44:28
was annotated or the way that we train

00:44:25 --> 00:44:30
the model and then you know suggest idea

00:44:27 --> 00:44:32
nd actually try them to figure out if

00:44:29 --> 00:44:33
you know those hypothesis are correct so

00:44:31 --> 00:44:36
that's something that I would love to

00:44:32 --> 00:44:37
have and would like dramatically unlock

00:44:35 --> 00:44:39
us some sometime I make the joke in the

00:44:36 --> 00:44:40
company that we should record all of the

00:44:38 --> 00:44:42
meetings and then yes

00:44:39 --> 00:44:44
>> train train a model to to basically just

00:44:41 --> 00:44:46
make prediction about what is the next

00:44:43 --> 00:44:50
set Oh, you could. You totally could.

00:44:45 --> 00:44:52
What if it's OpenClaw and um Obsidian

00:44:49 --> 00:44:55
d Markdown files and like you know a

00:44:52 --> 00:44:58
brain.md with like ontology that's

00:44:54 --> 00:45:00
custom to your use case and what if it's

00:44:57 --> 00:45:01
100 open clause in the background that

00:44:59 --> 00:45:02
you orchestrate.

00:45:00 --> 00:45:04
>> I think there's two sides to this. The

00:45:02 --> 00:45:07
first is that we already see a little

00:45:03 --> 00:45:10
bit of a side of life where for simple

00:45:06 --> 00:45:12
failure modes um during evaluation if

00:45:09 --> 00:45:14
you can describe the way that the robot

00:45:11 --> 00:45:17
fail in text very precisely and very

00:45:13 --> 00:45:19
clearly then you know you can ask a

00:45:16 --> 00:45:21
language model to make very reasonable

00:45:18 --> 00:45:23
recommendation about what the next step

00:45:20 --> 00:45:26
is. Um but the the flip side is that

00:45:22 --> 00:45:27
his only works for simple cases today.

00:45:25 --> 00:45:29
And the reason why that's the case is

00:45:26 --> 00:45:31
because I think it's pretty um

00:45:28 --> 00:45:35
fundamental limitation of the model that

00:45:30 --> 00:45:37
we have today which is that they are not

00:45:34 --> 00:45:39
at the core model that take action in

00:45:36 --> 00:45:41
the world and see the consequences of

00:45:38 --> 00:45:43
its own action especially action that

00:45:40 --> 00:45:45
changes the physical world. Um and and

00:45:42 --> 00:45:47
so I I think this kind of very

00:45:44 --> 00:45:50
fundamental understanding about how the

00:45:46 --> 00:45:53
physical world works is missing from the

00:45:49 --> 00:45:56
really large foundation model. Um and

00:45:52 --> 00:45:57
I think that's that's one of the

00:45:55 --> 00:46:00
ingredient that's missing to to be able

00:45:56 --> 00:46:01
to build this automated robot research

00:45:59 --> 00:46:03
scientist.

00:46:00 --> 00:46:05
>> What's interesting about openclaw? I

00:46:02 --> 00:46:08
don't know. I mean basically it can go

00:46:04 --> 00:46:10
and it can just do things which is

00:46:07 --> 00:46:13
interesting and then at that point it's

00:46:09 --> 00:46:16
on the research lab to provide like you

00:46:12 --> 00:46:19
know CLI MCP endpoints to the things

00:46:15 --> 00:46:22
that might control robots or uh

00:46:18 --> 00:46:24
reconfigure rooms or I mean I think

00:46:21 --> 00:46:26
Karpathy feels like he's he's starting

00:46:23 --> 00:46:28
to talk a bunch about this where you

00:46:25 --> 00:46:29
know if you mix auto research plus what

00:46:27 --> 00:46:32
he's been talking about with markdown

00:46:28 --> 00:46:34
files like it might just happen in the

00:46:31 --> 00:46:36
open like it, you know, there's this

00:46:33 --> 00:46:38
ort of sense that you have to make

00:46:35 --> 00:46:40
something much much more complicated to

00:46:37 --> 00:46:42
make it work. But what if that's just

00:46:39 --> 00:46:45
wrong? What if we just have markdown

00:46:41 --> 00:46:48
files and agents and, you know, you

00:46:44 --> 00:46:51
could make it yourself with, you know,

00:46:47 --> 00:46:53
literally clawed code and MCP today?

00:46:50 --> 00:46:54
What if it's not an algorithm problem?

00:46:52 --> 00:46:55
It's just literally an integration

00:46:53 --> 00:46:57
challenge.

00:46:54 --> 00:46:59
>> We have a version of this internally

00:46:56 --> 00:47:04
that I use a lot. There was a point when

00:46:58 --> 00:47:06
I was spending a um embarrassingly large

00:47:03 --> 00:47:07
amount of money on API queries.

00:47:05 --> 00:47:09
>> Yeah. Yeah.

00:47:06 --> 00:47:10
>> Um and you know the my team was like

00:47:08 --> 00:47:11
Juan what are you doing?

00:47:09 --> 00:47:13
>> Oh I'm that guy at Y Combinator right

00:47:10 --> 00:47:17
now. [laughter]

00:47:12 --> 00:47:20
>> So uh the to give you an example um we

00:47:16 --> 00:47:21
have a uh clot skill that essentially

00:47:19 --> 00:47:24
serving the role of a pre-training on

00:47:20 --> 00:47:26
call today. Um so you know we have these

00:47:23 --> 00:47:29
pre-training runs that are really large.

00:47:25 --> 00:47:31
Um it's very I think a difficult

00:47:28 --> 00:47:33
exercise to keep them alive to you know

00:47:30 --> 00:47:35
for them to continue to churn just

00:47:32 --> 00:47:39
because there's so many things that can

00:47:34 --> 00:47:41
go wrong and we have um a a prototype a

00:47:38 --> 00:47:44
pre-training on call that kind of

00:47:40 --> 00:47:46
babysit the run and have the permission

00:47:43 --> 00:47:50
to take action to remedy error that it

00:47:46 --> 00:47:51
see um and the one of the surprising

00:47:49 --> 00:47:56
outcome of that exercise is that it it

00:47:50 --> 00:47:58
leads about 50% improvement in compute

00:47:55 --> 00:47:59
usage like just overall compute

00:47:57 --> 00:48:02
utilization for that large pre- training

00:47:58 --> 00:48:04
run which is huge for us. Um and you

00:48:01 --> 00:48:06
know this is just a small simple

00:48:03 --> 00:48:08
prototype that that I built and I think

00:48:05 --> 00:48:10
like there's a lot more to be done.

00:48:07 --> 00:48:11
>> Quan this is incredible. Thank you so

00:48:09 --> 00:48:13
much for everything. Thank you for

00:48:10 --> 00:48:15
making physical intelligence. Thank you

00:48:12 --> 00:48:17
for showing us these incredible demos.

00:48:14 --> 00:48:19
And uh honestly like the thing that

00:48:16 --> 00:48:21
gives me the most hope is this idea that

00:48:18 --> 00:48:23
here's an entity there's a you know

00:48:20 --> 00:48:25
research lab out there that is focused

00:48:22 --> 00:48:27
on giving this to the world you know

00:48:24 --> 00:48:30
about to create this Cambrian explosion

00:48:26 --> 00:48:33
of robotic startups. So someone watching

00:48:29 --> 00:48:34
right now will be inspired by this and

00:48:32 --> 00:48:37
uh you know start playing with your

00:48:33 --> 00:48:40
models and they might create a robot

00:48:36 --> 00:48:42
hat uh touches billions of people's

00:48:39 --> 00:48:44
lives in for the good. Thank you for

00:48:41 --> 00:48:46
having me been a pleasure. Um to the

00:48:43 --> 00:48:49
listener the one takeaway that I want

00:48:45 --> 00:48:51
you to have is I think robotic has

00:48:48 --> 00:48:54
changed a lot and the cost of building

00:48:50 --> 00:48:56
in robotic has decreased and I think

00:48:53 --> 00:48:58
will continue to dramatically um

00:48:55 --> 00:49:01
decrease and it also require a very

00:48:57 --> 00:49:05
different kind of scrappy skill set um

00:49:00 --> 00:49:07
that young startup like needs. We hope

00:49:04 --> 00:49:09
to enable really an explosion of many

00:49:06 --> 00:49:11
many different robotic use case

00:49:08 --> 00:49:13
[music] and you know always reach out to

00:49:10 --> 00:49:13
us if you want to collaborate.

00:49:12 --> 00:49:14
>> Thanks man.

00:49:12 --> 00:49:17
>> Thanks so much.

00:49:13 --> 00:49:17
>> Thank you.

<!-- YOUTUBE_TRANSCRIPT_END -->
