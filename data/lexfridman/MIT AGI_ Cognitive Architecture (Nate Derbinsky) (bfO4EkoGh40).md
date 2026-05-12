---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "bfO4EkoGh40"
title: "MIT AGI: Cognitive Architecture (Nate Derbinsky)"
video_url: "https://www.youtube.com/watch?v=bfO4EkoGh40"
thumbnail_url: "https://i.ytimg.com/vi/bfO4EkoGh40/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=bfO4EkoGh40"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-03-20T12:55:34.000Z"
upload_date: "2018-03-20"
duration_seconds: 5452
duration_human: "1:30:52"
view_count: 66661
like_count: 1324
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:18:36.616Z"
---

# MIT AGI: Cognitive Architecture (Nate Derbinsky)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=bfO4EkoGh40
- video_id: bfO4EkoGh40
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-03-20T12:55:34.000Z
- upload_date: 2018-03-20
- duration: 1:30:52
- view_count: 66661
- like_count: 1324
- has_subtitle: true
- language: en
- availability: public
- tags: mit, agi, northeastern, artificial intelligence, ai, cognitive modeling, cognitive architecture, soar, actr, cognition, psychology, cognitive science
- categories: Science & Technology

## Description

This is a talk for course 6.S099: Artificial General Intelligence. This class is free and open to everyone. Our goal is to take an engineering approach to exploring possible paths toward building human-level intelligence for a better world.

INFO:
Course website: https://agi.mit.edu
AI podcast: https://lexfridman.com/ai
CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
so today we have nadir bin ski he's a

00:00:02 --> 00:00:07
professor at Northeastern University

00:00:04 --> 00:00:11
working on various aspects of

00:00:06 --> 00:00:12
computational agents that exhibit human

00:00:10 --> 00:00:19
level intelligence

00:00:11 --> 00:00:22
please give Nate a warm welcome thanks a

00:00:18 --> 00:00:25
lot and thanks for having me here so the

00:00:21 --> 00:00:27
title that was on the page was cognitive

00:00:24 --> 00:00:29
modeling I'll kind of get there but I

00:00:26 --> 00:00:31
wanted to put it in context so the the

00:00:28 --> 00:00:32
bigger theme here is I want to talk

00:00:30 --> 00:00:34
about what's called cognitive

00:00:31 --> 00:00:36
architecture and if you've never heard

00:00:33 --> 00:00:38
about that before that's great and I

00:00:35 --> 00:00:41
wanted to contextualize that as how are

00:00:37 --> 00:00:44
we what how is that one approach to get

00:00:40 --> 00:00:44
us to AGI

00:00:44 --> 00:00:50
and I say what my view of AGI is and put

00:00:47 --> 00:00:52
up a whole bunch of TV and movie

00:00:49 --> 00:00:54
characters that I grew up with that

00:00:51 --> 00:00:55
inspire me that will lead us into what

00:00:53 --> 00:00:57
is this thing called cognitive

00:00:54 --> 00:00:59
architecture it's a whole research field

00:00:56 --> 00:01:02
that crosses neuroscience psychology

00:00:58 --> 00:01:04
cognitive science and all the way into

00:01:01 --> 00:01:07
AI so I'll try to give you kind of the

00:01:03 --> 00:01:09
historical big-picture view of it what

00:01:06 --> 00:01:10
some of the actual systems are out there

00:01:08 --> 00:01:12
that might be of interest to you and

00:01:09 --> 00:01:13
then we'll kind of zoom in on one of

00:01:11 --> 00:01:16
them that I've done a good amount of

00:01:12 --> 00:01:19
work with called soar and what I'll try

00:01:15 --> 00:01:22
to do is tell a story a research story

00:01:18 --> 00:01:26
of how we started with kind of a core

00:01:21 --> 00:01:29
search question we look to how humans

00:01:25 --> 00:01:31
operate understood that phenomenon and

00:01:28 --> 00:01:33
then took it and so really interesting

00:01:30 --> 00:01:35
results from it and so at the end if

00:01:32 --> 00:01:38
this field is of interest there's a few

00:01:34 --> 00:01:39
pointers for you to go read more and and

00:01:37 --> 00:01:44
go experience more of cognitive

00:01:38 --> 00:01:48
architecture so just rough definition of

00:01:43 --> 00:01:50
AGI given this in AGI class depending

00:01:47 --> 00:01:52
the direction that you're coming from it

00:01:49 --> 00:01:54
might be kind of understanding

00:01:51 --> 00:01:56
intelligence or maybe developing

00:01:53 --> 00:01:57
intelligent systems they're operating at

00:01:55 --> 00:02:01
he level of human level intelligence

00:01:56 --> 00:02:04
the the typical differences between this

00:02:00 --> 00:02:05
and other sorts of maybe AI machine

00:02:03 --> 00:02:07
learning systems we want systems that

00:02:04 --> 00:02:08
are going to persist for a long period

00:02:06 --> 00:02:10
of time

00:02:07 --> 00:02:12
we want them robust to different

00:02:09 --> 00:02:15
conditions we want them learning over

00:02:11 --> 00:02:18
time and here's the crux of it working

00:02:14 --> 00:02:19
on different tasks and in a lot of cases

00:02:17 --> 00:02:23
tasks they didn't know we're coming

00:02:18 --> 00:02:26
ahead of time I got into this because I

00:02:22 --> 00:02:28
clearly watched too much TV and too many

00:02:25 --> 00:02:31
movies and then I looked back at this

00:02:27 --> 00:02:35
and I realized I think I'm covering 70's

00:02:30 --> 00:02:39
80's 90's nots I guess it is and today

00:02:34 --> 00:02:40
and so this is what I wanted out of AI

00:02:38 --> 00:02:44
and this is what I wanted to work with

00:02:39 --> 00:02:46
and then there's the the reality that we

00:02:43 --> 00:02:50
have today

00:02:45 --> 00:02:53
so instead of so who's watched Knight

00:02:49 --> 00:02:56
Rider for instance I I don't think that

00:02:52 --> 00:02:57
exists yet but but maybe we're getting

00:02:55 --> 00:03:00
there

00:02:56 --> 00:03:03
and in particular for fun during the

00:02:59 --> 00:03:05
Amazon sale day I got myself an Alexa

00:03:02 --> 00:03:07
nd I could just see myself at some

00:03:04 --> 00:03:10
point saying Alexa please might write me

00:03:06 --> 00:03:12
an R sync script you know to sync my

00:03:09 --> 00:03:14
class and if you have an Alexa you

00:03:11 --> 00:03:16
probably know the following phrase this

00:03:13 --> 00:03:20
just always hurts me inside which

00:03:15 --> 00:03:23
is sorry I don't know that one which is

00:03:19 --> 00:03:24
okay right that's a lot of people have

00:03:22 --> 00:03:28
no idea what I'm asking let alone how to

00:03:23 --> 00:03:30
do that so what I want Alexa to respond

00:03:27 --> 00:03:33
with after that is do you have time to

00:03:29 --> 00:03:35
teach me and to provide some sort of

00:03:32 --> 00:03:38
interface by which back and forth we can

00:03:34 --> 00:03:41
kind of talk through this that we aren't

00:03:37 --> 00:03:44
here yet to say the least but I'll talk

00:03:40 --> 00:03:47
later about some work on a system called

00:03:43 --> 00:03:49
Rosie that's working in that direction

00:03:46 --> 00:03:51
we're starting to see see some ideas

00:03:48 --> 00:03:53
about being able to teach systems out of

00:03:50 --> 00:03:55
work

00:03:52 --> 00:03:58
so folks who are in this field I think

00:03:54 --> 00:04:00
generally fall into these three

00:03:57 --> 00:04:02
categories they're just curious they

00:03:59 --> 00:04:06
want to learn new things generate

00:04:01 --> 00:04:08
knowledge work on hard problems great I

00:04:05 --> 00:04:11
think there are folks who are in kind of

00:04:07 --> 00:04:14
that middle cognitive modeling realm and

00:04:10 --> 00:04:16
so I'll use this term a lot it's really

00:04:13 --> 00:04:18
understanding how humans think how

00:04:15 --> 00:04:20
humans operate human intelligence at

00:04:17 --> 00:04:23
multiple levels and if you can do that

00:04:19 --> 00:04:25
one there's just knowledge in and of

00:04:22 --> 00:04:26
itself of how we operate but there's a

00:04:24 --> 00:04:29
lot of really important applications

00:04:25 --> 00:04:32
that you can think of if we were able to

00:04:28 --> 00:04:34
not only understand but predict how

00:04:31 --> 00:04:39
humans would respond react in various

00:04:33 --> 00:04:43
tasks medicine is is an easy one there's

00:04:38 --> 00:04:45
ome work in HCI or HR I I'll get to

00:04:42 --> 00:04:47
later where if you can predict how

00:04:44 --> 00:04:49
humans would respond to a test you can

00:04:46 --> 00:04:52
iterate tightly and develop better

00:04:48 --> 00:04:54
interfaces it's already being used in

00:04:51 --> 00:04:57
the realm of simulation and in defense

00:04:53 --> 00:04:59
industries I happen to fall into the

00:04:56 --> 00:05:01
latter group which or the bottom group

00:04:58 --> 00:05:04
which is systems development which is to

00:05:01 --> 00:05:06
say just the desire to build systems for

00:05:03 --> 00:05:09
various tasks that are working on tasks

00:05:05 --> 00:05:12
that kind of current AI machine learning

00:05:08 --> 00:05:14
can't operate on and I think when you're

00:05:11 --> 00:05:17
working at this level or on any system

00:05:13 --> 00:05:19
that nobody's really achieved before

00:05:16 --> 00:05:21
what do you do you you kind of look to

00:05:18 --> 00:05:22
the examples that you have which in this

00:05:20 --> 00:05:27
case that we know of

00:05:21 --> 00:05:32
it's just humans right irrespective of

00:05:26 --> 00:05:33
your motivation when you have kind of an

00:05:31 --> 00:05:35
intent that you want to achieve in your

00:05:32 --> 00:05:38
esearch you kind of let that drive your

00:05:34 --> 00:05:40
approach and so I often show my AI

00:05:37 --> 00:05:42
students this

00:05:39 --> 00:05:44
the touring test you might have heard of

00:05:41 --> 00:05:47
or variants of it that have come before

00:05:43 --> 00:05:48
these were folks who are trying to

00:05:46 --> 00:05:51
create system that acted in a certain

00:05:47 --> 00:05:53
way that acted intelligently and the

00:05:50 --> 00:05:54
kind of line that they drew the

00:05:52 --> 00:05:57
benchmark that they used was to say

00:05:53 --> 00:05:58
let's make systems that operate like

00:05:56 --> 00:06:01
humans do

00:05:57 --> 00:06:03
cognitive modelers will fit up into this

00:06:00 --> 00:06:06
top point here to say it's not enough to

00:06:02 --> 00:06:10
act that way but by some definition of

00:06:05 --> 00:06:13
thinking we want the system to do what

00:06:09 --> 00:06:14
humans do or at least be able to make

00:06:12 --> 00:06:16
predictions about it so that might be

00:06:13 --> 00:06:18
things like what errors would the human

00:06:15 --> 00:06:21
make on this task or how long would it

00:06:17 --> 00:06:24
ake them to perform this task or what

00:06:20 --> 00:06:26
emotion would be produced in this task

00:06:23 --> 00:06:29
there are folks who are still thinking

00:06:25 --> 00:06:32
about how the computer is operating but

00:06:28 --> 00:06:34
it's trying to apply kind of rational

00:06:31 --> 00:06:37
rules to it so a logician for instance

00:06:33 --> 00:06:40
would say if you have a and you have B

00:06:36 --> 00:06:42
the a gives you B B gives you see a

00:06:39 --> 00:06:44
should definitely give you C that's just

00:06:41 --> 00:06:46
what's rational and so there folks

00:06:43 --> 00:06:49
operate in that direction and then if

00:06:45 --> 00:06:51
you go to intro AI class anywhere in the

00:06:48 --> 00:06:53
country particularly Berkeley because

00:06:50 --> 00:06:56
they have graphics designers that I get

00:06:52 --> 00:06:58
o steal from the benchmark would be

00:06:55 --> 00:07:02
what the system produces in terms of

00:06:57 --> 00:07:06
action and the benchmark is some sort of

00:07:01 --> 00:07:09
optimal rational bound irrespective of

00:07:05 --> 00:07:13
where you work in the space there's kind

00:07:08 --> 00:07:15
of a common output that arrives when you

00:07:12 --> 00:07:18
research these areas which is you can

00:07:14 --> 00:07:21
learn individual bits and pieces and it

00:07:17 --> 00:07:23
can be hard to bring them together to

00:07:20 --> 00:07:27
build a system that either predicts or

00:07:22 --> 00:07:28
acts on different tasks so this is part

00:07:26 --> 00:07:31
of the transfer learning problem but

00:07:27 --> 00:07:32
it's also part of having distinct

00:07:30 --> 00:07:34
heories that are hard to combine

00:07:31 --> 00:07:36
together so I'm going to give an example

00:07:33 --> 00:07:39
that come comes out of cognitive

00:07:35 --> 00:07:41
modeling or perhaps three examples so if

00:07:38 --> 00:07:44
you were in a HCI class or some interest

00:07:40 --> 00:07:45
psychology classes one of the first

00:07:43 --> 00:07:48
hings you'll learn about is Fitz law

00:07:44 --> 00:07:51
hich provides you the ability to

00:07:47 --> 00:07:54
predict the difficulty level of

00:07:50 --> 00:07:55
basically a human pointing

00:07:53 --> 00:07:58
from where they start to a particular

00:07:54 --> 00:08:00
place and it turns out that you can

00:07:57 --> 00:08:03
learn some parameters and model this

00:07:59 --> 00:08:05
based upon just the distance from where

00:08:02 --> 00:08:08
you are to the targets and the size of

00:08:04 --> 00:08:10
the target so both moving along distance

00:08:07 --> 00:08:12
will take a while but also if you're

00:08:09 --> 00:08:14
aiming for a very small point that can

00:08:11 --> 00:08:15
take longer then if there's a large area

00:08:13 --> 00:08:18
that you just kind of have to get

00:08:14 --> 00:08:20
yourself to and so this is held true for

00:08:17 --> 00:08:23
many humans so let's say we've learned

00:08:19 --> 00:08:23
this and then we move on to the next

00:08:22 --> 00:08:25
ask

00:08:22 --> 00:08:29
and we learn about what's called the

00:08:24 --> 00:08:30
power law of practice which has been

00:08:28 --> 00:08:32
shown true in a number of different

00:08:29 --> 00:08:35
asks what I'm showing here is one of

00:08:31 --> 00:08:37
them where you're going to draw a line

00:08:34 --> 00:08:39
through sequential set of circles here

00:08:36 --> 00:08:42
starting at 1 going to 2 and so forth

00:08:38 --> 00:08:44
not making a mistake or at least not

00:08:41 --> 00:08:48
rying to and try to do this as fast as

00:08:43 --> 00:08:50
possible and so for a particular person

00:08:47 --> 00:08:52
we would fit the a B and C parameters

00:08:49 --> 00:08:54
and we'd see a power law so as you

00:08:51 --> 00:08:57
perform this task more you're going to

00:08:53 --> 00:09:00
see a decrease in the amount of reaction

00:08:56 --> 00:09:02
time required to complete the task great

00:08:59 --> 00:09:05
we've learned two things about humans

00:09:01 --> 00:09:06
let's add some more in so for those who

00:09:04 --> 00:09:08
might have done some reinforcement

00:09:05 --> 00:09:10
learning TV learning is one of those

00:09:07 --> 00:09:14
approaches temporal difference learning

00:09:09 --> 00:09:16
that's had some evidence of similar

00:09:13 --> 00:09:18
sorts of processes in the dopamine

00:09:15 --> 00:09:21
centers of the brain and it basically

00:09:17 --> 00:09:23
says in a sequential learning tasks you

00:09:20 --> 00:09:25
perform the task you get some sort of

00:09:22 --> 00:09:27
reward how are you going to kind of

00:09:24 --> 00:09:28
update your representation of what to do

00:09:26 --> 00:09:31
in the future such as to maximize

00:09:27 --> 00:09:33
xpectation of future reward and there

00:09:30 --> 00:09:35
are various models of how that changes

00:09:32 --> 00:09:37
over time and you can build up functions

00:09:34 --> 00:09:39
that allow you to form better and better

00:09:36 --> 00:09:42
a given trial and error great

00:09:38 --> 00:09:46
so we've learned three interesting

00:09:41 --> 00:09:48
models here that hold true over multiple

00:09:45 --> 00:09:51
people multiple tasks and so my question

00:09:47 --> 00:09:54
is if we take these together and add

00:09:50 --> 00:09:57
them together how do we start to

00:09:53 --> 00:10:00
understand a task as quote/unquote

00:09:56 --> 00:10:03
simple as chess which is to say we could

00:09:59 --> 00:10:06
ask questions how how long would it take

00:10:02 --> 00:10:07
for a person to play what mistakes would

00:10:05 --> 00:10:09
they make

00:10:06 --> 00:10:12
they played a few games how would they

00:10:08 --> 00:10:14
adapt themselves or if we want to

00:10:11 --> 00:10:16
develop system that ended up being good

00:10:13 --> 00:10:17
at chess or at least learning to become

00:10:15 --> 00:10:20
better at chess

00:10:16 --> 00:10:23
my question is if you could there

00:10:19 --> 00:10:25
doesn't seem to be a clear way to take

00:10:22 --> 00:10:27
these very very individual theories and

00:10:24 --> 00:10:30
kind of smash them together and get a

00:10:26 --> 00:10:35
reasonable answer of how to play chess

00:10:29 --> 00:10:38
or how do humans play chess and so

00:10:34 --> 00:10:42
gentlemen in this slide is Alan Newell

00:10:37 --> 00:10:44
one of the founders of AI did incredible

00:10:41 --> 00:10:46
work in psychology and other fields

00:10:43 --> 00:10:50
he gave a series of lectures at Harvard

00:10:45 --> 00:10:51
in 1987 and they were published in 1990

00:10:49 --> 00:10:54
called the unified theories of cognition

00:10:50 --> 00:10:56
and his argument to the psychology

00:10:53 --> 00:10:58
community at that point was the argument

00:10:55 --> 00:11:00
on the prior slide they had many

00:10:57 --> 00:11:03
individual studies many individual

00:10:59 --> 00:11:05
results and so the question was how do

00:11:02 --> 00:11:06
you bring them together to gain this

00:11:04 --> 00:11:10
overall theory how do you make forward

00:11:05 --> 00:11:12
progress and so his proposal was unified

00:11:09 --> 00:11:15
theories of cognition which became known

00:11:11 --> 00:11:19
as cognitive architecture which is to

00:11:14 --> 00:11:21
say to bring together your core

00:11:18 --> 00:11:23
assumptions your core beliefs of what

00:11:20 --> 00:11:27
are the fixed mechanisms and processes

00:11:22 --> 00:11:30
that intelligent agents would use across

00:11:26 --> 00:11:33
tasks so the representations the

00:11:29 --> 00:11:36
learning mechanisms the memory systems

00:11:32 --> 00:11:39
bring them together implement them in a

00:11:35 --> 00:11:42
theory and use that across tasks and the

00:11:38 --> 00:11:43
core idea is that when you actually have

00:11:41 --> 00:11:45
to implement this and see how it's going

00:11:42 --> 00:11:47
to work across different tasks the

00:11:44 --> 00:11:50
interconnections between these different

00:11:46 --> 00:11:54
processes and representations would add

00:11:49 --> 00:11:56
constraint and over time the constraints

00:11:53 --> 00:11:58
would start limiting the design space of

00:11:55 --> 00:12:00
what is necessary and what is possible

00:11:57 --> 00:12:02
in terms of building intelligent systems

00:11:59 --> 00:12:05
and so the overall goal from there was

00:12:01 --> 00:12:06
to understand and exhibit human level

00:12:04 --> 00:12:11
intelligence using these cognitive

00:12:05 --> 00:12:13
architectures a'nature

00:12:10 --> 00:12:17
question asked is okay so we've gone

00:12:12 --> 00:12:20
from a methodology of science that we

00:12:16 --> 00:12:23
understand how to operate in we make a

00:12:19 --> 00:12:26
hypothesis we construct a study we

00:12:22 --> 00:12:28
gather our data we evaluate that data

00:12:25 --> 00:12:30
nd we falsify we do not falsify the

00:12:27 --> 00:12:32
original hypothesis and we can do that

00:12:29 --> 00:12:34
over and over again and we know that

00:12:31 --> 00:12:36
we're making for progress scientifically

00:12:33 --> 00:12:40
if I've now taken that model and changed

00:12:35 --> 00:12:43
it into I have a piece of software and

00:12:39 --> 00:12:44
it's representing my theories and to

00:12:42 --> 00:12:45
some extent I can configure that

00:12:43 --> 00:12:48
software in different ways to work on

00:12:44 --> 00:12:51
different tasks how do I know that I'm

00:12:47 --> 00:12:56
aking progress and so there's a form of

00:12:50 --> 00:12:57
science called lactose ium and it's kind

00:12:55 --> 00:13:00
of shown pictorially here where you

00:12:56 --> 00:13:04
start with your core of what your your

00:12:59 --> 00:13:07
beliefs are about where your head what

00:13:03 --> 00:13:08
is necessary for achieving the goal that

00:13:06 --> 00:13:11
you have and around that you'll have

00:13:07 --> 00:13:13
kind of ephemeral hypotheses and

00:13:10 --> 00:13:15
assumptions that over time may grow and

00:13:12 --> 00:13:16
shrink and so you're trying out

00:13:14 --> 00:13:18
different things trying out different

00:13:15 --> 00:13:20
hings and if an assumption is around

00:13:17 --> 00:13:23
there long enough it becomes part of

00:13:19 --> 00:13:24
that core and so as you work on more

00:13:22 --> 00:13:27
tasks can learn more

00:13:23 --> 00:13:29
ither by your work or by data coming in

00:13:26 --> 00:13:30
from with someone else the core is

00:13:28 --> 00:13:32
growing larger and larger

00:13:29 --> 00:13:35
you've got more constraints and you've

00:13:31 --> 00:13:39
made more progress and so what I wanted

00:13:34 --> 00:13:40
to look at we're in this community what

00:13:38 --> 00:13:43
are some of the core assumptions that

00:13:39 --> 00:13:46
are driving forward scientific progress

00:13:42 --> 00:13:48
o one of them actually came out of

00:13:45 --> 00:13:50
those lectures they're referred to as

00:13:47 --> 00:13:54
Newell's time scales of human action and

00:13:49 --> 00:13:56
so off on the left the left two columns

00:13:53 --> 00:13:59
are both time units just expect somewhat

00:13:55 --> 00:14:01
differently second from the left being

00:13:58 --> 00:14:04
maybe more useful to a lot of us in

00:14:00 --> 00:14:06
understanding daily life one step over

00:14:03 --> 00:14:08
from there would be kind of at what

00:14:05 --> 00:14:11
level processes are occurring so the

00:14:07 --> 00:14:13
lowest three are down at kind of the

00:14:10 --> 00:14:15
substrate the neuronal level we're

00:14:12 --> 00:14:18
building up to deliberate tasks that

00:14:14 --> 00:14:19
occur in the brain and tasks that are

00:14:17 --> 00:14:21
operating on the order of ten seconds

00:14:18 --> 00:14:23
ome of these might occur in the

00:14:20 --> 00:14:25
psychology laboratory but probably a

00:14:22 --> 00:14:28
step up to

00:14:24 --> 00:14:30
and ours and then above that really

00:14:27 --> 00:14:33
becomes interactions between agents over

00:14:29 --> 00:14:36
time and so if we start with that the

00:14:32 --> 00:14:39
things to take away is that regular the

00:14:35 --> 00:14:41
hypothesis is that regularities will

00:14:38 --> 00:14:43
occur at these different time scales and

00:14:40 --> 00:14:46
that they're useful and so those who

00:14:42 --> 00:14:48
perate at that lowest time scale might

00:14:45 --> 00:14:51
be considering neuroscience cognitive

00:14:47 --> 00:14:52
neuroscience when you shift up to the

00:14:50 --> 00:14:54
next couple levels what we would think

00:14:51 --> 00:14:56
about in terms of the areas of science

00:14:53 --> 00:14:58
that deal with that would be psychology

00:14:55 --> 00:14:59
and cognitive science and then we shift

00:14:57 --> 00:15:02
up a level and we're talking about

00:14:58 --> 00:15:06
sociology and economics and the

00:15:01 --> 00:15:08
interplay between agents over time and

00:15:05 --> 00:15:10
so what we'll find with cognitive

00:15:07 --> 00:15:12
architecture is that most of them will

00:15:09 --> 00:15:15
tend to sit at the deliberate act we're

00:15:11 --> 00:15:17
trying to take knowledge of a situation

00:15:14 --> 00:15:20
and make a single decision and then

00:15:16 --> 00:15:22
sequences of decisions over time will

00:15:19 --> 00:15:25
build to tasks and tasks over time will

00:15:21 --> 00:15:26
build to more interesting phenomenon I'm

00:15:24 --> 00:15:27
actually going to show that that isn't

00:15:25 --> 00:15:29
strictly true that there are folks

00:15:26 --> 00:15:33
working in this field that actually do

00:15:28 --> 00:15:36
perate one level below some other

00:15:32 --> 00:15:39
assumptions so this is herb Simon

00:15:35 --> 00:15:41
receiving the Nobel Prize in Economics

00:15:38 --> 00:15:44
and part of what he received that award

00:15:40 --> 00:15:47
for was an idea of bounded rationality

00:15:43 --> 00:15:51
so in various fields we tend to model

00:15:46 --> 00:15:55
humans as rational and his argument was

00:15:50 --> 00:15:57
let's consider that human beings are

00:15:54 --> 00:16:01
operating under various kinds of

00:15:56 --> 00:16:04
constraints and so to model the rational

00:16:00 --> 00:16:05
with respect to and bounded by how

00:16:03 --> 00:16:07
complex the problem is that they're

00:16:04 --> 00:16:10
working on how big is that search space

00:16:06 --> 00:16:13
that they have to conquer cognitive

00:16:09 --> 00:16:16
limitations so speed of operations

00:16:12 --> 00:16:19
amount of memory short-term as well as

00:16:15 --> 00:16:21
long-term as well as other aspects of

00:16:18 --> 00:16:22
our computing infrastructure that are

00:16:20 --> 00:16:25
going to keep us from being able to

00:16:21 --> 00:16:28
arbitrarily solve complex problems as

00:16:24 --> 00:16:31
well as how much time is available to

00:16:27 --> 00:16:32
make that decision and so this is

00:16:30 --> 00:16:34
actually a phrase that came out of his

00:16:31 --> 00:16:38
peech when he received the Nobel Prize

00:16:33 --> 00:16:38
decision-makers can satisfice either by

00:16:37 --> 00:16:41
finding optimum

00:16:37 --> 00:16:43
solutions for a simplified world just to

00:16:40 --> 00:16:46
say take your big problem simplify in

00:16:42 --> 00:16:48
some way and then solve that or by

00:16:45 --> 00:16:50
finding satisfactory solutions for a

00:16:47 --> 00:16:52
more realistic world take the world and

00:16:49 --> 00:16:54
all its complexity take the problem in

00:16:51 --> 00:16:56
all its complexity and try to find

00:16:53 --> 00:16:58
something that works neither approach in

00:16:55 --> 00:17:00
general dominates the other and both

00:16:57 --> 00:17:02
ave continued to co-exist and so what

00:16:59 --> 00:17:04
you're actually going to see throughout

00:17:01 --> 00:17:07
he cognitive architecture community is

00:17:03 --> 00:17:09
this understanding that some problems

00:17:06 --> 00:17:11
you're not going to be able to get an

00:17:08 --> 00:17:14
optimal solution to if you consider for

00:17:10 --> 00:17:16
instance bounded amount of computation

00:17:13 --> 00:17:18
bounded time the need to be reactive to

00:17:15 --> 00:17:21
a changing environment these sorts of

00:17:17 --> 00:17:23
issues and so in some sense we can

00:17:20 --> 00:17:26
decompose problems that come up over and

00:17:22 --> 00:17:31
over again into simpler problems solve

00:17:25 --> 00:17:33
those newer optimally or optimally fix

00:17:30 --> 00:17:36
those in optimize those but more general

00:17:32 --> 00:17:38
problems we might have to satisfy some

00:17:35 --> 00:17:42
there's also the idea of the simple

00:17:37 --> 00:17:45
system hypothesis so this is Alan Newell

00:17:41 --> 00:17:47
and herb Simon they're considering how a

00:17:44 --> 00:17:49
computer could play the game of chess so

00:17:46 --> 00:17:51
the physical system physical symbol

00:17:48 --> 00:17:53
system talks about the idea of taking

00:17:50 --> 00:17:57
something some signal abstractly

00:17:52 --> 00:17:59
referred to as symbol combining them in

00:17:56 --> 00:18:01
some ways to form expressions and then

00:17:58 --> 00:18:04
having operations that produce new

00:18:00 --> 00:18:09
expressions a weak interpretation of the

00:18:03 --> 00:18:10
idea that symbol systems are necessary

00:18:08 --> 00:18:12
and sufficient for intelligent systems a

00:18:09 --> 00:18:15
very weak way of talking about it is the

00:18:11 --> 00:18:18
claim that there's nothing unique about

00:18:14 --> 00:18:21
he neuronal infrastructure that we have

00:18:17 --> 00:18:24
but if we got the software right we

00:18:20 --> 00:18:25
could implement it in the bits bytes Ram

00:18:23 --> 00:18:27
and processor that make up modern

00:18:24 --> 00:18:30
computers that's kind of the weakest way

00:18:26 --> 00:18:35
to look at this that we can do it with

00:18:29 --> 00:18:38
silicon and not carbon stronger way that

00:18:34 --> 00:18:40
his used to be looked at was more of a

00:18:37 --> 00:18:44
logical standpoint which is to say if we

00:18:39 --> 00:18:46
can encode rules of logic these tend to

00:18:43 --> 00:18:49
line up if we think intuitively of

00:18:45 --> 00:18:50
planning and problem solving and if we

00:18:48 --> 00:18:52
can just get that right and get enough

00:18:49 --> 00:18:55
fat's in there and enough

00:18:51 --> 00:18:56
in there that somehow intelligence well

00:18:54 --> 00:18:58
that's what we need for intelligence and

00:18:55 --> 00:19:00
eventually we can get to the point of

00:18:57 --> 00:19:04
intelligence and that's what you need

00:18:59 --> 00:19:06
for intelligence and that was a starting

00:19:03 --> 00:19:09
point that lasted for a while I think by

00:19:05 --> 00:19:12
now most folks in this field would agree

00:19:08 --> 00:19:14
that that's necessary to be able to

00:19:11 --> 00:19:16
perate logically but that there are

00:19:13 --> 00:19:19
going to be representations and

00:19:15 --> 00:19:20
processes that will benefit from non

00:19:18 --> 00:19:23
symbolic representation so particularly

00:19:19 --> 00:19:26
perceptual processing visual auditory

00:19:22 --> 00:19:30
and processing things in a more kind of

00:19:25 --> 00:19:32
standard machine learning sort of way as

00:19:29 --> 00:19:36
well as kind of statistic taking

00:19:31 --> 00:19:39
advantage of statistical representations

00:19:35 --> 00:19:42
o we're getting closer to actually

00:19:38 --> 00:19:43
looking at cognitive architectures I did

00:19:41 --> 00:19:46
want to go back to the idea that

00:19:42 --> 00:19:50
different researchers are coming with

00:19:45 --> 00:19:52
different research foci foci and we'll

00:19:49 --> 00:19:55
start off with kind of the lowest level

00:19:51 --> 00:19:57
and understanding biological modeling so

00:19:54 --> 00:20:01
Leiber and spawn both try to model

00:19:56 --> 00:20:04
different degrees of low-level details

00:20:00 --> 00:20:08
parameters firing rates connectivities

00:20:03 --> 00:20:11
between different kind of levels of

00:20:07 --> 00:20:13
neuronal representations they build that

00:20:10 --> 00:20:15
up and then they tried to build tasks

00:20:12 --> 00:20:21
above that layer but always being very

00:20:14 --> 00:20:24
cautious about being true to human

00:20:20 --> 00:20:26
biological processes at a layer above

00:20:23 --> 00:20:29
there would be psychological modeling

00:20:25 --> 00:20:33
which is to say trying to build systems

00:20:28 --> 00:20:34
that are true in some sense to areas of

00:20:32 --> 00:20:37
the brain interactions in the brain and

00:20:33 --> 00:20:40
being able to predict errors that we

00:20:36 --> 00:20:42
made timing that we produced by the

00:20:39 --> 00:20:45
human mind and so there I'll talk a

00:20:41 --> 00:20:47
little bit about Akhtar this final level

00:20:44 --> 00:20:50
down here these are systems that are

00:20:46 --> 00:20:55
focused mainly on producing functional

00:20:49 --> 00:20:55
systems that exhibit really cool

00:20:54 --> 00:20:59
artifacts and and solve really cool

00:20:56 --> 00:21:01
problems and so I'll spend most of the

00:20:58 --> 00:21:03
time talking about soar but I want to

00:21:00 --> 00:21:05
point out a relative newcomer in the

00:21:02 --> 00:21:07
game called Sigma

00:21:04 --> 00:21:11
so to talk about spawn a little bit

00:21:06 --> 00:21:16
we'll see if the sound works in here I'm

00:21:10 --> 00:21:25
going to let the Creator take this one

00:21:15 --> 00:21:25
or not see how the AV system likes this

00:21:27 --> 00:21:47
[Music]

00:21:43 --> 00:21:49
but of course if I wouldn't be pleased

00:21:46 --> 00:21:51
with a pad of the microseconds and all

00:21:48 --> 00:21:53
celebrated since we're engineering is

00:21:50 --> 00:21:55
critical goal engineering allows you to

00:21:52 --> 00:21:57
break down equation intense very precise

00:21:54 --> 00:21:59
descriptions which we can test like

00:21:56 --> 00:22:01
building actual models one probably do

00:21:58 --> 00:22:03
recently is called the song model this

00:22:00 --> 00:22:07
Moscow has the two and a half million

00:22:03 --> 00:22:09
individual mountains isolated and evens

00:22:06 --> 00:22:11
the model is a knife and the up the

00:22:08 --> 00:22:13
canal is Bernard

00:22:10 --> 00:22:15
so essentially you can see images of

00:22:12 --> 00:22:17
numbers and that is something like a

00:22:14 --> 00:22:19
progressive in the case of the discarded

00:22:16 --> 00:22:20
into that seat but magic tide reproduces

00:22:18 --> 00:22:24
tyle that

00:22:19 --> 00:22:25
yeah so for instance it's easy to get

00:22:23 --> 00:22:28
he on environment and actually

00:22:24 --> 00:22:30
forgive separately and silently on

00:22:27 --> 00:22:32
medical side we all know that we have

00:22:29 --> 00:22:34
cognitive town concession we get over

00:22:31 --> 00:22:36
and we can try that address accountant

00:22:33 --> 00:22:38
spicy alienating process with these nice

00:22:35 --> 00:22:41
models another potential area in fact

00:22:37 --> 00:22:42
it's on artificial intelligence a lot of

00:22:40 --> 00:22:44
working out visual Imperfects thanks to

00:22:41 --> 00:22:46
donations that are exceeded it at one

00:22:43 --> 00:22:48
pass pretty since plane test what's

00:22:45 --> 00:22:51
pecial is fine is that it's like that

00:22:47 --> 00:22:53
many different paths and this X we have

00:22:50 --> 00:22:55
not found it might appear californee the

00:22:52 --> 00:22:56
flow of information through different

00:22:54 --> 00:23:04
parts of the model something I haven't

00:22:55 --> 00:23:05
seen very well so provide a pointer at

00:23:03 --> 00:23:07
he end he's got a really cool book

00:23:04 --> 00:23:10
called how to build a brain and if you

00:23:06 --> 00:23:13
google and you can google spun you can

00:23:09 --> 00:23:16
find a toolkit where you can kind of

00:23:12 --> 00:23:17
construct circuits that will approximate

00:23:15 --> 00:23:20
functions that you're interested in

00:23:16 --> 00:23:22
connect them together set certain

00:23:19 --> 00:23:24
properties that you would want at a low

00:23:21 --> 00:23:28
level and build them up and actually

00:23:23 --> 00:23:31
work on tasks at the level of vision and

00:23:27 --> 00:23:35
robotic actuation so that's a really

00:23:30 --> 00:23:36
cool system as we move into

00:23:34 --> 00:23:39
architectures that are sitting above

00:23:35 --> 00:23:41
that biological level I wanted to give

00:23:38 --> 00:23:42
you kind of an overall sense of what

00:23:40 --> 00:23:43
hey're going to look like what a

00:23:41 --> 00:23:46
prototypical architecture is going to

00:23:42 --> 00:23:48
look like so they're gonna have some

00:23:45 --> 00:23:52
ability to have perception the

00:23:47 --> 00:23:56
modalities typically are more digital

00:23:51 --> 00:23:59
symbolic but they will depending on the

00:23:55 --> 00:24:02
architecture be able to handle vision

00:23:58 --> 00:24:05
audition and various sensory inputs

00:24:01 --> 00:24:06
these will get represented in some sort

00:24:04 --> 00:24:08
of short-term memory whatever the

00:24:05 --> 00:24:12
state's representation for the

00:24:07 --> 00:24:14
particular system is there it's typical

00:24:11 --> 00:24:16
to have a representation of the

00:24:13 --> 00:24:18
knowledge of what tasks can be performed

00:24:15 --> 00:24:20
when they should be performed how they

00:24:17 --> 00:24:22
should be controlled and so these are

00:24:19 --> 00:24:26
typically both actions that take place

00:24:21 --> 00:24:28
internally that manage the internal

00:24:25 --> 00:24:31
state of the system and perform internal

00:24:27 --> 00:24:34
computations but also about external

00:24:30 --> 00:24:36
actuation and external might be

00:24:33 --> 00:24:38
a digital system a game AI but it might

00:24:35 --> 00:24:41
also be some sort of robotic actuation

00:24:37 --> 00:24:43
in real world there's typically some

00:24:40 --> 00:24:45
sort of mechanism by which to select

00:24:42 --> 00:24:48
from the available actions in a

00:24:44 --> 00:24:51
particular situation there's typically

00:24:47 --> 00:24:54
some way to augment this procedural

00:24:50 --> 00:24:56
information which is to say learn about

00:24:53 --> 00:24:59
new actions possibly modify existing

00:24:55 --> 00:25:01
ones there's typically some semblance of

00:24:58 --> 00:25:04
what's called declarative memory so

00:25:00 --> 00:25:07
whereas procedural at least in humans if

00:25:03 --> 00:25:10
I asked you to describe how to ride a

00:25:06 --> 00:25:13
bike you might be able to say get on the

00:25:09 --> 00:25:15
seats and pedal but in terms of keeping

00:25:12 --> 00:25:19
your balance there you'd have a pretty

00:25:14 --> 00:25:21
hard time describing it declaratively so

00:25:18 --> 00:25:23
that's kind of the procedural side the

00:25:20 --> 00:25:26
implicit representation of knowledge

00:25:22 --> 00:25:27
whereas declarative would include facts

00:25:25 --> 00:25:30
geography

00:25:26 --> 00:25:32
math but it also include experiences

00:25:29 --> 00:25:34
that the agent has had a more episodic

00:25:31 --> 00:25:35
representation of declarative memory and

00:25:33 --> 00:25:37
they'll typically have some way of

00:25:34 --> 00:25:40
learning this information on mending it

00:25:36 --> 00:25:43
over time and then finally some way of

00:25:39 --> 00:25:46
taking actions in the world and they'll

00:25:42 --> 00:25:49
all have some sort of cycle which is

00:25:45 --> 00:25:52
perception comes in knowledge that the

00:25:48 --> 00:25:54
agent has is brought to bear on that an

00:25:51 --> 00:25:56
action is selected knowledge that knows

00:25:53 --> 00:25:58
to condition on that action will act

00:25:55 --> 00:26:00
accordingly both with internal processes

00:25:57 --> 00:26:04
as well as eventually to take action and

00:25:59 --> 00:26:07
then rinse and repeat so when we talk

00:26:03 --> 00:26:09
about in an AI system an agent in this

00:26:06 --> 00:26:10
context that would be the fixed

00:26:08 --> 00:26:12
representation which is whatever

00:26:09 --> 00:26:16
architecture we're talking about plus

00:26:11 --> 00:26:17
et of knowledge that is typically

00:26:15 --> 00:26:19
specific to the task but might be more

00:26:16 --> 00:26:21
general so oftentimes these systems

00:26:18 --> 00:26:25
could incorporate a more general

00:26:20 --> 00:26:27
knowledge base of facts of linguistic

00:26:24 --> 00:26:29
facts of Geographic facts

00:26:26 --> 00:26:31
let's take Wikipedia and let's just

00:26:28 --> 00:26:33
ick it in the brain of the system

00:26:30 --> 00:26:34
there'll be more tasks in general but

00:26:32 --> 00:26:36
hen also whatever it is that you're

00:26:33 --> 00:26:40
doing right now how should you proceed

00:26:35 --> 00:26:43
in that and then it's typical to see

00:26:39 --> 00:26:46
this processing cycle and going back to

00:26:42 --> 00:26:48
the prior assumption the idea is that

00:26:45 --> 00:26:51
hese primitive cycles allow for the

00:26:47 --> 00:26:53
agent to be reactive to its environment

00:26:50 --> 00:26:55
so if new things come in that has react

00:26:52 --> 00:26:57
o if the Lions sitting over there I

00:26:54 --> 00:27:00
better run and maybe not do my calculus

00:26:56 --> 00:27:02
homework right so as long as this cycle

00:26:59 --> 00:27:04
is going I'm reactive but at the same

00:27:01 --> 00:27:06
time if multiple actions are taken over

00:27:03 --> 00:27:11
time I'm able to get complex behavior

00:27:05 --> 00:27:15
over the long term so this is the act

00:27:10 --> 00:27:17
our cognitive architecture it has many

00:27:14 --> 00:27:22
of the kind of core pieces that I talked

00:27:16 --> 00:27:25
about before let's see if the mouse yes

00:27:21 --> 00:27:28
mouse is useful up there so we have the

00:27:24 --> 00:27:29
procedural model here a short-term

00:27:27 --> 00:27:33
emory is going to be these buffers that

00:27:28 --> 00:27:35
are on the outside the procedural memory

00:27:32 --> 00:27:39
is encoded as what I call production

00:27:34 --> 00:27:41
rules or if-then rules if is this is the

00:27:38 --> 00:27:42
state of my short-term memory this is

00:27:40 --> 00:27:47
what I think should happen as a result

00:27:41 --> 00:27:51
you have a selection of the appropriate

00:27:46 --> 00:27:54
rule to fire and an execution you're

00:27:50 --> 00:27:56
seeing associated parts of the brain

00:27:53 --> 00:27:57
being represented here cool thing that

00:27:55 --> 00:28:02
has been done over time in the act our

00:27:56 --> 00:28:05
community is to make predictions about

00:28:01 --> 00:28:07
brain areas and then perform MRIs and

00:28:04 --> 00:28:09
gather that data and correlate that data

00:28:06 --> 00:28:12
so when you use the system you will get

00:28:08 --> 00:28:14
predictions about things like timing of

00:28:11 --> 00:28:16
operations errors that will occur

00:28:13 --> 00:28:19
probabilities that something is learned

00:28:15 --> 00:28:21
but you'll also get predictions about to

00:28:18 --> 00:28:25
degree that they can kind of brain areas

00:28:20 --> 00:28:26
that are going to line light up and if

00:28:24 --> 00:28:31
you want to that's actively being

00:28:25 --> 00:28:33
developed at Carnegie Mellon to the left

00:28:30 --> 00:28:38
is John Anderson who developed this

00:28:32 --> 00:28:41
cognitive architecture ooh 30 ish years

00:28:37 --> 00:28:44
ago and until the last about five years

00:28:40 --> 00:28:45
he was the primary researcher developer

00:28:43 --> 00:28:47
behind it with Christian and then

00:28:44 --> 00:28:51
recently he's decided to spend more time

00:28:46 --> 00:28:53
on cognitive tutoring systems and so

00:28:50 --> 00:28:56
Christian has become the primary

00:28:52 --> 00:28:59
developer there is an annual akhtar

00:28:55 --> 00:29:03
workshop there's a summer school where

00:28:58 --> 00:29:05
if you're thinking about modeling a

00:29:02 --> 00:29:06
particular task you can kind of bring

00:29:04 --> 00:29:08
your task to them bring your data they

00:29:05 --> 00:29:10
teach you how to use the system and try

00:29:07 --> 00:29:13
to get that study going right there on

00:29:09 --> 00:29:15
the spot to give you a sense of what

00:29:12 --> 00:29:20
kinds of tasks this could be applied to

00:29:14 --> 00:29:22
so this is a representative of a certain

00:29:19 --> 00:29:26
class of tasks certainly not the only

00:29:21 --> 00:29:28
one let's try this again

00:29:25 --> 00:29:31
I think powerpoints going to want a

00:29:27 --> 00:29:33
restart every time okay so we're getting

00:29:30 --> 00:29:35
predictions about basically where the

00:29:32 --> 00:29:37
ye is going to move what you're not

00:29:34 --> 00:29:40
seeing is it's actually processing

00:29:36 --> 00:29:41
things like text and colors and making

00:29:39 --> 00:29:43
predictions about what to do and how to

00:29:40 --> 00:29:45
represent the information and how to

00:29:42 --> 00:29:48
process the graph as a whole

00:29:44 --> 00:29:51
I had alluded to this earlier there's

00:29:47 --> 00:29:53
work by Bonnie John very similar so

00:29:50 --> 00:29:56
making predictions about how humans

00:29:52 --> 00:29:59
would use computer interfaces and at the

00:29:55 --> 00:30:00
time she got hired away by IBM and so

00:29:58 --> 00:30:03
they wanted the ability to have software

00:29:59 --> 00:30:05
that you can put in front of software

00:30:02 --> 00:30:07
designers and when they think they have

00:30:04 --> 00:30:10
a good interface press a button this

00:30:06 --> 00:30:12
model of human cognition would try to

00:30:09 --> 00:30:13
perform the tasks that have been told to

00:30:11 --> 00:30:15
do and make predictions about how long

00:30:12 --> 00:30:17
it would take and so you can have this

00:30:14 --> 00:30:20
tight feedback loop from designers

00:30:16 --> 00:30:23
aying here's how good your particular

00:30:19 --> 00:30:25
interfaces so act are as a whole it's

00:30:22 --> 00:30:27
very prevalent in this community I went

00:30:24 --> 00:30:29
o their web page and counted up just

00:30:26 --> 00:30:33
he papers that they knew about it was

00:30:28 --> 00:30:35
over 1,100 papers over time if you're

00:30:32 --> 00:30:38
interested in it the main distribution

00:30:34 --> 00:30:40
is in Lisp but many people have used

00:30:37 --> 00:30:42
this and wanted to apply it to systems

00:30:39 --> 00:30:46
that need a little more processing power

00:30:41 --> 00:30:48
so there's the NRL has a Java port of it

00:30:45 --> 00:30:52
hat they use in robotics the Air Force

00:30:47 --> 00:30:55
Research Lab and Dayton has implemented

00:30:51 --> 00:30:57
it in Erlang for a parallel processing

00:30:54 --> 00:30:59
of large declare knowledge bases they're

00:30:56 --> 00:31:02
trying to do service-oriented

00:30:58 --> 00:31:04
architectures with it CUDA because they

00:31:01 --> 00:31:05
want what it has to say they don't want

00:31:03 --> 00:31:07
o wait around for it to have to figure

00:31:04 --> 00:31:12
that stuff out

00:31:06 --> 00:31:16
so that's the two minutes about Akhtar

00:31:11 --> 00:31:17
Sigma is a relative newcomer and it's

00:31:15 --> 00:31:20
developed out at the University of

00:31:17 --> 00:31:22
Southern California by man named Paul

00:31:19 --> 00:31:23
rosenbloom mmm mentioned a couple

00:31:21 --> 00:31:27
minutes because he was one of the prime

00:31:22 --> 00:31:28
developers of soar at Carnegie Mellon so

00:31:26 --> 00:31:31
he knows a lot about how store works and

00:31:27 --> 00:31:33
he's worked on it over the years and I

00:31:30 --> 00:31:35
think originally I'm gonna speak for him

00:31:32 --> 00:31:37
and he'll probably say I was wrong I

00:31:34 --> 00:31:42
think originally it was kind of a mental

00:31:36 --> 00:31:44
exercise of can i reproduce or using a

00:31:41 --> 00:31:46
uniform substrate I'll talk about so in

00:31:43 --> 00:31:49
a little bit it's thirty years of

00:31:45 --> 00:31:51
research code if anybody is dealt with

00:31:48 --> 00:31:55
research code it's thirty years of C and

00:31:50 --> 00:31:59
C++ with dozens of graduate students

00:31:54 --> 00:32:01
over time it's not pretty at all and and

00:31:58 --> 00:32:04
theoretically it's got these boxes

00:32:00 --> 00:32:06
itting out here and so he reimplemented

00:32:03 --> 00:32:09
the the core functionality of soar all

00:32:05 --> 00:32:12
using factor graphs and message passing

00:32:08 --> 00:32:14
algorithms under the hood he got to that

00:32:11 --> 00:32:16
point and then said there's nothing

00:32:13 --> 00:32:18
stopping me from going further and so

00:32:15 --> 00:32:20
now it can do all sorts of modern

00:32:17 --> 00:32:22
machine learning vision optimization

00:32:19 --> 00:32:25
sort of things that would take some time

00:32:21 --> 00:32:28
in any other architecture to be able to

00:32:24 --> 00:32:30
integrate well so it's been an

00:32:27 --> 00:32:32
interesting experience it's now going to

00:32:29 --> 00:32:34
be the basis for the virtual human

00:32:31 --> 00:32:36
project out at the Institute for

00:32:33 --> 00:32:37
Creative Technology it's Institute

00:32:35 --> 00:32:41
associated with University of Southern

00:32:36 --> 00:32:42
California for him until recently could

00:32:40 --> 00:32:45
get your hands on it but in the last

00:32:41 --> 00:32:47
couple years he's done some tutorials on

00:32:44 --> 00:32:49
it he's got a public release with

00:32:46 --> 00:32:52
documentation so that's something

00:32:48 --> 00:32:54
interesting to keep an eye on but I'm

00:32:51 --> 00:32:57
gonna spend all the remaining time on

00:32:53 --> 00:32:59
the Soraa cognitive architecture and so

00:32:56 --> 00:33:02
you see it looks quite a bit like the

00:32:58 --> 00:33:03
prototypical architecture and I'll give

00:33:01 --> 00:33:05
a sense again about how this all

00:33:02 --> 00:33:08
operates give a sense of the people

00:33:04 --> 00:33:10
involved we already talked about Alan

00:33:07 --> 00:33:13
Newell so both John Laird who is my

00:33:09 --> 00:33:17
advisor and Paul Rosenbloom were

00:33:12 --> 00:33:20
students of Alan Newell John's thesis

00:33:16 --> 00:33:22
project was related to the chunking

00:33:19 --> 00:33:27
mechanism and soar which learns new

00:33:21 --> 00:33:30
rules based upon sub-goal reasoning so

00:33:26 --> 00:33:33
he finished that I believe the year I

00:33:29 --> 00:33:35
was born and so he's one of the few

00:33:32 --> 00:33:39
researchers you'll find who's still

00:33:34 --> 00:33:43
actively working on their thesis project

00:33:38 --> 00:33:45
beyond that's about I think about ten

00:33:42 --> 00:33:46
years ago he founded soar technology

00:33:44 --> 00:33:48
which is company up in Ann Arbor

00:33:45 --> 00:33:49
Michigan while it's called solar

00:33:47 --> 00:33:52
technology it doesn't do exclusively

00:33:48 --> 00:33:55
soar but that's a part of the portfolio

00:33:51 --> 00:34:00
general intelligence system stuff a lot

00:33:54 --> 00:34:02
of Defense Association so some notes of

00:33:59 --> 00:34:04
what's going to make soar different from

00:34:01 --> 00:34:05
the other other architectures that fall

00:34:03 --> 00:34:07
into this kind of functional

00:34:04 --> 00:34:10
architecture category a big thing is a

00:34:06 --> 00:34:12
focus on efficiency so john wants to be

00:34:09 --> 00:34:16
able to run soar on just about anything

00:34:11 --> 00:34:18
we just got on the soar mailing list a

00:34:15 --> 00:34:22
desire to run it on a real-time

00:34:17 --> 00:34:25
processor and our answer while we had

00:34:21 --> 00:34:28
never done it before was probably it'll

00:34:24 --> 00:34:31
work every release there's timing tests

00:34:27 --> 00:34:33
and we always what we what we look at is

00:34:30 --> 00:34:34
in a bunch of different domains for a

00:34:32 --> 00:34:36
bunch of different reasons that relate

00:34:33 --> 00:34:37
to human processing there's this magic

00:34:35 --> 00:34:41
number that comes out which is 50

00:34:36 --> 00:34:43
milliseconds which is to say in terms of

00:34:40 --> 00:34:47
responding to tasks if you're above that

00:34:42 --> 00:34:49
ime humans will sense a delay and you

00:34:46 --> 00:34:51
don't want that to happen now if we're

00:34:48 --> 00:34:53
working in a robotics task 50

00:34:50 --> 00:34:55
milliseconds if you're dramatically

00:34:52 --> 00:34:57
above that you just fell off the curb or

00:34:54 --> 00:34:59
worse or you just hit somebody in a car

00:34:56 --> 00:35:02
ight so we're trying to keep that as

00:34:58 --> 00:35:04
low as possible and for most agents it

00:35:01 --> 00:35:07
doesn't even register it's below 1

00:35:03 --> 00:35:08
millisecond fractions of millisecond but

00:35:06 --> 00:35:11
I'll come back to this because a lot of

00:35:07 --> 00:35:14
the work that I was doing was computer

00:35:10 --> 00:35:15
science AI and a lot of efficient

00:35:13 --> 00:35:17
algorithms and data structures and 50

00:35:14 --> 00:35:20
milliseconds was that very high upper

00:35:16 --> 00:35:22
bound it's also one of the projects that

00:35:19 --> 00:35:26
has a public distribution you can get in

00:35:21 --> 00:35:27
all sorts of operating systems we use

00:35:25 --> 00:35:28
something called swig that allows you to

00:35:26 --> 00:35:30
interface with it in a bunch of

00:35:27 --> 00:35:32
different languages we kind of describe

00:35:29 --> 00:35:34
the meta description and you are able to

00:35:31 --> 00:35:39
basically generate bindings and

00:35:33 --> 00:35:41
ifferent platforms Korres C++ there was

00:35:38 --> 00:35:43
a team at sore tech that said we don't

00:35:40 --> 00:35:47
like C++ it gets messy so they actually

00:35:42 --> 00:35:50
did a port over to pure Java in case

00:35:46 --> 00:35:52
that appeals to you there's an annual

00:35:49 --> 00:35:55
soar workshop that takes place in Ann

00:35:51 --> 00:35:57
Arbor typically it's free you can go

00:35:54 --> 00:35:58
there get a sort tutorial and talk to

00:35:56 --> 00:36:01
folks who are working on soar and it's

00:35:57 --> 00:36:03
fun I've been there every year but one

00:36:00 --> 00:36:04
in the last decade it's just fun to see

00:36:02 --> 00:36:06
the people around the world that are

00:36:03 --> 00:36:09
using the system and all sorts of

00:36:05 --> 00:36:11
interesting ways to give you a sense of

00:36:08 --> 00:36:13
the diversity of the applications one of

00:36:10 --> 00:36:15
the first was our one store which was

00:36:12 --> 00:36:17
back in the days when it was an actual

00:36:14 --> 00:36:20
challenge to build a computer which is

00:36:16 --> 00:36:22
to say that your choice of certain

00:36:19 --> 00:36:25
components would have radical

00:36:21 --> 00:36:26
implications for other parts of the

00:36:24 --> 00:36:28
computer so it wasn't just the Dell

00:36:25 --> 00:36:30
website where you just I want this much

00:36:27 --> 00:36:31
RAM I want this much CPU there was a lot

00:36:29 --> 00:36:33
of thinking that went behind it and then

00:36:30 --> 00:36:36
physical labor that went to construct

00:36:32 --> 00:36:38
your computer and so it was making that

00:36:35 --> 00:36:39
process a lot better there are folks

00:36:37 --> 00:36:40
that apply to natural language

00:36:38 --> 00:36:43
processing

00:36:39 --> 00:36:45
I saw r7 was the core of the virtual

00:36:42 --> 00:36:48
humans project for a long time

00:36:44 --> 00:36:50
HCI tasks terrasaur was one of the

00:36:47 --> 00:36:52
largest rule-based systems

00:36:49 --> 00:36:55
tens of thousands of rules over 48 hours

00:36:51 --> 00:36:58
it was a very large-scale simulation a

00:36:54 --> 00:37:00
defense simulation lots of games it's

00:36:57 --> 00:37:03
been applied to for various reasons and

00:36:59 --> 00:37:05
then in the last few years

00:37:02 --> 00:37:08
porting it on to mobile robotics

00:37:04 --> 00:37:10
platforms this is Edwin Olsen's splinter

00:37:07 --> 00:37:15
bot an early version of it that went on

00:37:09 --> 00:37:18
to win the magic competition then I went

00:37:14 --> 00:37:20
on to put soar on the web and if after

00:37:17 --> 00:37:21
this talk you're really interested in a

00:37:19 --> 00:37:24
dice game that I'm going to talk about

00:37:20 --> 00:37:26
you can actually go to the iOS App Store

00:37:23 --> 00:37:29
and download it's called Michigan liar's

00:37:25 --> 00:37:31
dice it's free you don't have to pay for

00:37:28 --> 00:37:35
it but you can actually play a liar's

00:37:30 --> 00:37:37
dice with soar and it's even set the

00:37:34 --> 00:37:40
difficulty level it's pretty good it

00:37:36 --> 00:37:42
beats me on a regular basis I wanted to

00:37:39 --> 00:37:44
give you a couple other just kind of

00:37:41 --> 00:37:45
really weird feeling sort of

00:37:43 --> 00:37:48
applications and really cool

00:37:44 --> 00:37:58
applications the first one

00:37:47 --> 00:37:59
is out of Georgia Tech go PowerPoint is

00:37:57 --> 00:38:02
dom-based

00:37:58 --> 00:38:04
interactive art installation in which

00:38:01 --> 00:38:06
she participants can engage and

00:38:03 --> 00:38:07
collaborate the movement improvisation

00:38:05 --> 00:38:10
with each other and virtual advance

00:38:06 --> 00:38:13
permits this thing her actually creates

00:38:09 --> 00:38:16
a hyperspace English virtual and quicker

00:38:12 --> 00:38:19
eal bodies meet the line between human

00:38:15 --> 00:38:21
d non-human is learned through images

00:38:18 --> 00:38:24
to examine a relationship with

00:38:20 --> 00:38:27
technology the night installation

00:38:23 --> 00:38:30
ultimately examines how humans and

00:38:26 --> 00:38:32
machine can co-create experiences and it

00:38:29 --> 00:38:34
ducks out in a playful environment the

00:38:32 --> 00:38:37
don't creates a social space that

00:38:33 --> 00:38:39
encourages human human interaction and

00:38:36 --> 00:38:41
collective dance experiences allowing

00:38:38 --> 00:38:45
the depends to create an explorer

00:38:40 --> 00:38:47
movement while having fun the

00:38:44 --> 00:38:49
development of lumini has been a hundred

00:38:46 --> 00:38:52
exploration in our forms of theatre and

00:38:48 --> 00:38:56
ance as well as research and artificial

00:38:51 --> 00:38:58
intelligence and cognitive science

00:38:55 --> 00:39:01
lumahai draws inspiration from the

00:38:57 --> 00:39:03
ancient art form of shot here the

00:39:00 --> 00:39:06
original two-dimensional version of the

00:39:02 --> 00:39:08
installation led the conceptualization

00:39:05 --> 00:39:11
of the dome in the liminal space which

00:39:08 --> 00:39:13
even silhouettes and virtual character

00:39:10 --> 00:39:16
is being danced together on the

00:39:12 --> 00:39:18
projection surface rather than relying

00:39:15 --> 00:39:21
on a predominant library of movement

00:39:17 --> 00:39:24
responses the virtual dancer learns in

00:39:20 --> 00:39:26
this part measurements and utilizes new

00:39:23 --> 00:39:27
points movement theory to systematically

00:39:25 --> 00:39:29
reason about them and working

00:39:26 --> 00:39:33
improvisational shoes under the moon

00:39:28 --> 00:39:35
response the points theory is based in

00:39:32 --> 00:39:37
dance and theater and analyzes the

00:39:34 --> 00:39:41
performance along the dimensions of

00:39:36 --> 00:39:45
tempo duration repetition kinesthetic

00:39:40 --> 00:39:47
response shape spatial relationships

00:39:44 --> 00:39:51
gesture architecture and

00:39:46 --> 00:39:53
Photography the virtual dancer is able

00:39:50 --> 00:39:55
to use several different strategies to

00:39:52 --> 00:39:57
respond to human movements

00:39:54 --> 00:39:59
these include mimicry of a movement

00:39:56 --> 00:40:01
ransformation of the movement along

00:39:58 --> 00:40:03
viewpoints and mentions we're calling a

00:40:00 --> 00:40:06
similar or complementary movement from

00:40:02 --> 00:40:08
emory in terms of you fight revolutions

00:40:05 --> 00:40:10
and define actually sponsor patterns of

00:40:07 --> 00:40:15
the agent has learned while dancing with

00:40:09 --> 00:40:17
its human partner the reason we did this

00:40:14 --> 00:40:19
this is part of a larger effort in

00:40:16 --> 00:40:20
our lab for understanding the

00:40:18 --> 00:40:23
relationship between

00:40:19 --> 00:40:26
compeition cognition and creativity

00:40:22 --> 00:40:28
where a large amount of our efforts go

00:40:25 --> 00:40:30
into understanding human creativity and

00:40:27 --> 00:40:32
how we make things together out were

00:40:29 --> 00:40:34
created together as a way that almost

00:40:31 --> 00:40:38
understand how we can build co-created

00:40:33 --> 00:40:40
AI that serves the same purpose where to

00:40:37 --> 00:40:50
be a colleague and collaborate with us

00:40:39 --> 00:40:52
and create things with us so Brian was a

00:40:50 --> 00:40:57
graduate student in John leritz

00:40:51 --> 00:40:58
lab as well before I start this I lude

00:40:56 --> 00:41:01
into this earlier where we're getting

00:40:57 --> 00:41:03
closer to rosie saying can you teach me

00:41:00 --> 00:41:06
so let me give you some introduction to

00:41:02 --> 00:41:08
this in the lower left you're seeing the

00:41:05 --> 00:41:13
view of a Kinect camera onto a flat

00:41:07 --> 00:41:16
surface there's a robotic arm mainly 3d

00:41:12 --> 00:41:18
printed parts few servos above that

00:41:15 --> 00:41:21
you're seeing an interpretation of the

00:41:17 --> 00:41:23
scene we're giving it kind of

00:41:20 --> 00:41:27
associations of the four areas with

00:41:22 --> 00:41:30
semantic titles like one is the table

00:41:26 --> 00:41:32
one is the garbage just just semantic

00:41:29 --> 00:41:33
terms for areas but other than that the

00:41:31 --> 00:41:36
agent doesn't actually know all that

00:41:32 --> 00:41:38
much and it's going to operate in two

00:41:35 --> 00:41:42
modalities one is we'll call it natural

00:41:37 --> 00:41:46
anguage natural ich language restricted

00:41:41 --> 00:41:48
subset of English as well as some quote

00:41:45 --> 00:41:50
unquote pointing so you're gonna see

00:41:47 --> 00:41:52
some Mouse pointers in the upper left

00:41:49 --> 00:41:55
saying I'll talk about this and this is

00:41:51 --> 00:41:57
just a way to indicate location and so

00:41:54 --> 00:41:59
starting off we're gonna say things like

00:41:56 --> 00:42:00
you know pick up the blue block and it's

00:41:58 --> 00:42:03
gonna be like I don't know what

00:41:59 --> 00:42:05
is what is blue we say oh well that's a

00:42:02 --> 00:42:09
color okay

00:42:04 --> 00:42:11
ou know so go get the green thing

00:42:08 --> 00:42:13
what's green oh it's a color okay move

00:42:10 --> 00:42:17
the blue thing to a particular location

00:42:12 --> 00:42:19
where's that point it okay what is

00:42:16 --> 00:42:21
moving like really it has to start from

00:42:18 --> 00:42:24
the beginning and it's described and it

00:42:20 --> 00:42:26
said okay now you've finished and once

00:42:23 --> 00:42:28
we got to that point now I can say move

00:42:25 --> 00:42:30
the green thing over here and it's got

00:42:27 --> 00:42:32
everything that it needs to be able to

00:42:29 --> 00:42:34
then reproduce the task given new

00:42:31 --> 00:42:39
parameters and it's learned that ability

00:42:33 --> 00:42:39
so let me give it a little bit of time

00:42:44 --> 00:42:49
so you can look a little bit at top left

00:42:47 --> 00:42:55
in terms of the pointers you're going to

00:42:48 --> 00:42:57
see some text commands being entered so

00:42:54 --> 00:42:59
what kind of attribute is blue we're

00:42:56 --> 00:43:00
gonna say it's a color and so that can

00:42:58 --> 00:43:04
map it then to a particular sensory

00:42:59 --> 00:43:06
modality this is green so the pointing

00:43:03 --> 00:43:08
what kind of thing is green okay color

00:43:05 --> 00:43:10
so now it knows how to understand blue

00:43:07 --> 00:43:16
and green as colors with respect to the

00:43:09 --> 00:43:16
visual scene move rectangle to the table

00:43:15 --> 00:43:22
what is rectangle okay now I can map

00:43:18 --> 00:43:24
that on to or understanding parts of the

00:43:21 --> 00:43:27
world is this the blue rectangle so the

00:43:23 --> 00:43:29
arm is actually pointing itself to get

00:43:26 --> 00:43:31
confirmation from the instructor and

00:43:28 --> 00:43:33
then we're trying to understand in

00:43:30 --> 00:43:36
general when you say move something what

00:43:32 --> 00:43:37
is the goal of this operation and so

00:43:35 --> 00:43:39
then it also has a declared

00:43:36 --> 00:43:41
representation of the idea of this task

00:43:38 --> 00:43:43
not only that it completed it then it

00:43:40 --> 00:43:45
can look back on having completed the

00:43:42 --> 00:43:49
task and understand what were the steps

00:43:44 --> 00:43:49
that led to achieving a particular goal

00:43:49 --> 00:43:54
so in order

00:43:51 --> 00:43:58
move it you're gonna have to pick it up

00:43:53 --> 00:43:58
it knows which one the blue thing is

00:43:59 --> 00:44:08
great now

00:44:05 --> 00:44:11
in the table so that's a particular

00:44:07 --> 00:44:14
location and at this point we can say

00:44:10 --> 00:44:17
ou're done you have accomplished the

00:44:13 --> 00:44:20
moved blue rectangle to the table and so

00:44:16 --> 00:44:22
I can understand what that very simple

00:44:19 --> 00:44:26
kind of process is like and associate

00:44:21 --> 00:44:32
that with the verb to move and now we

00:44:25 --> 00:44:36
can say move the green object or not do

00:44:31 --> 00:44:40
the garbage and without any further

00:44:35 --> 00:44:41
interaction based upon everything that

00:44:39 --> 00:44:43
learned up till that point it can

00:44:40 --> 00:44:46
successfully complete that task so this

00:44:42 --> 00:44:47
work of chavala Mohan and others at

00:44:45 --> 00:44:50
he shore group at the University of

00:44:46 --> 00:44:52
Michigan on the bruisy project and

00:44:49 --> 00:44:54
they're extending this to playing games

00:44:51 --> 00:44:56
and learning the rules of games through

00:44:53 --> 00:45:00
text-based descriptions and multimodal

00:44:55 --> 00:45:02
experience so in order to build up to

00:44:59 --> 00:45:04
here's a story and so I wanted to give

00:45:01 --> 00:45:07
you a sense of how research occurs in

00:45:03 --> 00:45:08
the group and so there's these back and

00:45:06 --> 00:45:10
forth that occur over time between

00:45:07 --> 00:45:12
there's this piece of software called

00:45:09 --> 00:45:14
soar we want to make this thing better

00:45:11 --> 00:45:16
and give it new capabilities and so all

00:45:13 --> 00:45:18
our agents are going to become better

00:45:15 --> 00:45:20
and we always have to keep in mind and

00:45:17 --> 00:45:22
you'll see this as I go further that it

00:45:19 --> 00:45:25
has to be useful to a wide variety of

00:45:21 --> 00:45:27
agents it has to be task independent and

00:45:24 --> 00:45:28
it has to be efficient for us to do

00:45:26 --> 00:45:32
anything in the architecture all of

00:45:27 --> 00:45:33
those have to hold true so we do

00:45:31 --> 00:45:35
something cool in the architecture and

00:45:32 --> 00:45:37
then we say okay let's solve a cool

00:45:34 --> 00:45:39
problem so it's build some agents to do

00:45:36 --> 00:45:41
this and so this ends up testing what

00:45:38 --> 00:45:45
are the limitations what are the issues

00:45:40 --> 00:45:47
that arise in a particular mechanism as

00:45:44 --> 00:45:48
well as integration with others and we

00:45:46 --> 00:45:49
get to solve interesting problems we

00:45:47 --> 00:45:50
usually find there was something missing

00:45:48 --> 00:45:54
and then we can go back to the

00:45:49 --> 00:45:56
architecture and rinse and repeat just

00:45:53 --> 00:45:58
o give you an idea again how sore works

00:45:55 --> 00:46:01
o the working memory is actually a

00:45:57 --> 00:46:03
directed connected graph the perception

00:46:00 --> 00:46:04
is just a subset of that graph and so

00:46:02 --> 00:46:06
there's going to be symbolic

00:46:03 --> 00:46:08
representations of most of the world

00:46:05 --> 00:46:10
there is a visual subsystem in which you

00:46:07 --> 00:46:13
can provide a scene graph just not

00:46:09 --> 00:46:16
showing it here actions are also a

00:46:13 --> 00:46:18
subset of that graph and so the

00:46:15 --> 00:46:20
procedural knowledge which is also

00:46:17 --> 00:46:22
production rules can modify can

00:46:19 --> 00:46:24
sections of the input modify sections of

00:46:21 --> 00:46:26
the output as well as arbitrary parts of

00:46:23 --> 00:46:28
the graph to take actions so the

00:46:25 --> 00:46:29
decision procedure says of all the

00:46:27 --> 00:46:31
things that I know to do and I've kind

00:46:28 --> 00:46:33
of ranked them according to various

00:46:30 --> 00:46:34
preferences what single things should I

00:46:32 --> 00:46:37
do

00:46:33 --> 00:46:39
semantic memory for facts there's

00:46:36 --> 00:46:42
episodic memory the agent is always

00:46:38 --> 00:46:44
actually storing every experience it's

00:46:41 --> 00:46:45
ever had over time in episodic memory

00:46:43 --> 00:46:48
and it has the ability to get back to

00:46:44 --> 00:46:50
that and so the similar cycle we saw

00:46:47 --> 00:46:53
before we get input in this perception

00:46:49 --> 00:46:55
called the input link rules are going to

00:46:52 --> 00:46:56
fire all in parallel and say here's

00:46:54 --> 00:46:57
everything I know about the situation

00:46:55 --> 00:47:00
here's all the things I could do

00:46:56 --> 00:47:03
decision procedure says here's what

00:46:59 --> 00:47:05
we're going to do based upon the

00:47:02 --> 00:47:07
selected operator all sorts of things

00:47:04 --> 00:47:10
could happen with respect to memories

00:47:06 --> 00:47:13
providing input rules firing to perform

00:47:09 --> 00:47:17
computations and as well as potentially

00:47:12 --> 00:47:19
output in the world and remember agent

00:47:16 --> 00:47:23
reactivity is required we want the

00:47:18 --> 00:47:25
system to be able to react to things in

00:47:22 --> 00:47:27
the world at a very quick pace so

00:47:24 --> 00:47:30
anything that happens in this cycle at

00:47:26 --> 00:47:31
max the overall cycle has to be under 50

00:47:29 --> 00:47:34
milliseconds and so that's gonna be

00:47:30 --> 00:47:37
constraint we hold ourselves to and so

00:47:33 --> 00:47:38
the story I'll be telling will say how

00:47:36 --> 00:47:41
e got to a point where we started

00:47:37 --> 00:47:42
actually forgetting things and we're an

00:47:40 --> 00:47:44
architecture that doesn't want to be

00:47:41 --> 00:47:47
like humans we want to create cool

00:47:43 --> 00:47:49
systems but what we realized was

00:47:46 --> 00:47:51
omething that we do there's probably

00:47:48 --> 00:47:53
some benefit to it and we actually put

00:47:50 --> 00:47:56
it into our system in the lead to good

00:47:52 --> 00:47:59
outputs so here's the research path I'm

00:47:55 --> 00:48:01
going to walk down we had just a simple

00:47:58 --> 00:48:03
problem which was we have these memory

00:48:00 --> 00:48:05
systems and sometimes they're going to

00:48:02 --> 00:48:07
get a cue that could relate to multiple

00:48:04 --> 00:48:10
memories and the question is if you have

00:48:06 --> 00:48:12
a fixed mechanism what should you return

00:48:09 --> 00:48:14
in a task independent way which one of

00:48:11 --> 00:48:16
these many memories should you return

00:48:13 --> 00:48:18
that was our question and we looked to

00:48:15 --> 00:48:20
some human data on this something called

00:48:17 --> 00:48:24
the rational analysis of memory done by

00:48:19 --> 00:48:26
John Anderson and realized that in human

00:48:23 --> 00:48:29
language there are recency and frequency

00:48:25 --> 00:48:32
effects that maybe it would be useful

00:48:28 --> 00:48:33
and so we actually did an analysis found

00:48:31 --> 00:48:35
that not only

00:48:32 --> 00:48:36
does this occur but it's useful in what

00:48:34 --> 00:48:39
are called word sense disambiguation

00:48:35 --> 00:48:41
tasks I'll get to that what that means

00:48:38 --> 00:48:43
in a second develop some algorithms to

00:48:40 --> 00:48:45
scale this really well and it turned out

00:48:42 --> 00:48:47
o worked out well not only in the

00:48:44 --> 00:48:49
original task when we learn look to two

00:48:46 --> 00:48:52
ther completely different ones

00:48:48 --> 00:48:53
the same underlying mechanism ended up

00:48:51 --> 00:48:56
roducing some really interesting

00:48:52 --> 00:48:58
outputs so let me talk about word sense

00:48:55 --> 00:48:59
disambiguation real quick this is a core

00:48:57 --> 00:49:01
problem in natural language processing

00:48:58 --> 00:49:04
if you haven't heard of it before let's

00:49:00 --> 00:49:06
ay we have an agent and for some reason

00:49:03 --> 00:49:10
it needs to understand the verb to run

00:49:05 --> 00:49:12
looks to its memory and finds that it

00:49:09 --> 00:49:14
could you know run in the park it could

00:49:11 --> 00:49:16
be running a fever could run an election

00:49:13 --> 00:49:20
it could run a program and the question

00:49:15 --> 00:49:22
is what should an task independent

00:49:19 --> 00:49:25
memory mechanism return if all you've

00:49:21 --> 00:49:27
been given is the verb to run and so the

00:49:24 --> 00:49:29
rational analysis of memory looks

00:49:26 --> 00:49:33
through multiple text corpora and what

00:49:28 --> 00:49:35
hey found was if a particular word had

00:49:32 --> 00:49:38
been used recently it's very likely to

00:49:34 --> 00:49:39
be reused again and if it hadn't been

00:49:37 --> 00:49:40
used recently

00:49:38 --> 00:49:43
there's going to be this effect where

00:49:39 --> 00:49:46
the expression here the T is time since

00:49:42 --> 00:49:49
the most recent use it's going to sum

00:49:45 --> 00:49:52
those with a exponential decay and so

00:49:48 --> 00:49:55
what it looks like if time is going to

00:49:51 --> 00:49:58
the right activation hire as better as

00:49:54 --> 00:49:59
you get these individual usages you get

00:49:57 --> 00:50:01
hese little drops and then eventually

00:49:58 --> 00:50:04
drop down and so if we had just one

00:50:00 --> 00:50:06
usage of a word the read would be what

00:50:03 --> 00:50:08
he decay would look like and so the

00:50:05 --> 00:50:10
core problem here is if we're at a

00:50:07 --> 00:50:11
particular point and we want to select

00:50:09 --> 00:50:13
between kind of the blue thing or the

00:50:10 --> 00:50:16
red thing blue would have a higher

00:50:12 --> 00:50:19
activation and so maybe that's useful

00:50:15 --> 00:50:22
this is how things are modeled with

00:50:18 --> 00:50:25
uman memory but is it useful in general

00:50:21 --> 00:50:27
for tasks and so we looked at common

00:50:24 --> 00:50:29
corpora used in word sense

00:50:26 --> 00:50:30
disambiguation and just said well if we

00:50:28 --> 00:50:34
just look at this corporate twice and we

00:50:29 --> 00:50:36
just use answers prior answers you know

00:50:33 --> 00:50:38
I ask the question what is the sense of

00:50:35 --> 00:50:40
this word I took a guess I got the right

00:50:37 --> 00:50:42
answer and I used that recency and

00:50:39 --> 00:50:43
frequency information in my task

00:50:41 --> 00:50:46
independent memory would that be useful

00:50:42 --> 00:50:47
and somewhat of a surprise but somewhat

00:50:45 --> 00:50:50
maybe not of a

00:50:46 --> 00:50:54
it actually performed really well across

00:50:49 --> 00:50:58
multiple corpora so we said okay this

00:50:53 --> 00:51:00
eems like a reasonable mechanism let's

00:50:57 --> 00:51:02
look at implementing this efficiently in

00:50:59 --> 00:51:05
the architecture and the problem was

00:51:01 --> 00:51:09
this term right here said for every

00:51:04 --> 00:51:13
memory for every time step you're having

00:51:08 --> 00:51:15
to pay everything that doesn't sound

00:51:12 --> 00:51:16
like a recipe for efficiency if you're

00:51:14 --> 00:51:20
talking about lots and lots of knowledge

00:51:15 --> 00:51:23
over long periods of time so we made use

00:51:19 --> 00:51:26
of a nice approximation that petrol that

00:51:22 --> 00:51:29
come up with to approximate tale effect

00:51:25 --> 00:51:30
so accesses that happen

00:51:28 --> 00:51:32
long long ago we could basically

00:51:29 --> 00:51:35
approximate their effect on the overall

00:51:31 --> 00:51:38
sum so now we had a fixed set of values

00:51:34 --> 00:51:40
and what we basically said is since

00:51:37 --> 00:51:43
these are always decreasing and all we

00:51:39 --> 00:51:45
care about is relative order let's just

00:51:42 --> 00:51:48
only recompute when someone gets a new

00:51:44 --> 00:51:50
value so it's a guess it's a heuristic

00:51:47 --> 00:51:53
and approximation but we looked at how

00:51:49 --> 00:51:56
this worked on the same set of corpora

00:51:52 --> 00:51:58
nd in terms of query time if we made

00:51:55 --> 00:52:01
these approximations well under our 50

00:51:57 --> 00:52:03
millisecond the effect on task

00:52:00 --> 00:52:05
performance was negligible in fact hunt

00:52:02 --> 00:52:08
a couple of these it got ever so

00:52:04 --> 00:52:10
slightly better terms of accuracy and

00:52:07 --> 00:52:13
actually if we looked at the individual

00:52:09 --> 00:52:15
decisions that were being made making

00:52:12 --> 00:52:19
these sorts of approximations were

00:52:14 --> 00:52:21
leading to up to 90 sorry at least 90

00:52:18 --> 00:52:25
percent of the decisions being made were

00:52:20 --> 00:52:28
identical to having done the true full

00:52:24 --> 00:52:31
calculation so I said this is great

00:52:27 --> 00:52:32
and we implemented this and worked

00:52:30 --> 00:52:35
really well and then we started working

00:52:31 --> 00:52:36
on what seemed like completely unrelated

00:52:34 --> 00:52:39
problems

00:52:35 --> 00:52:41
one was in mobile robotics we had a

00:52:38 --> 00:52:42
mobile robot I'll show picture of in a

00:52:40 --> 00:52:44
little while roaming around the halls

00:52:41 --> 00:52:48
performing all sorts of tasks and what

00:52:43 --> 00:52:49
we're finding was if you have a system

00:52:47 --> 00:52:51
that's remembering everything in your

00:52:48 --> 00:52:53
short-term memory and your short-term

00:52:50 --> 00:52:54
emory gets really really big I don't

00:52:52 --> 00:52:56
know about you my short-term memory

00:52:53 --> 00:52:59
feels really really small I would love

00:52:55 --> 00:53:00
it to be big but if you make your memory

00:52:58 --> 00:53:01
really big and you try to remember

00:52:59 --> 00:53:03
something

00:53:00 --> 00:53:05
you're not having to pull lots and lots

00:53:02 --> 00:53:06
of information into your

00:53:04 --> 00:53:09
short-term memory so the system was

00:53:05 --> 00:53:11
actually getting slower simply because

00:53:08 --> 00:53:13
it had a lot of short-term memory

00:53:10 --> 00:53:16
representation of the overall map it was

00:53:12 --> 00:53:19
looking up so large working memory a

00:53:15 --> 00:53:21
problem Liars dices game you play with

00:53:18 --> 00:53:23
dice we were doing in our L base system

00:53:20 --> 00:53:26
on this reinforcement learning and it

00:53:22 --> 00:53:27
urned out it's a really really big

00:53:25 --> 00:53:29
value function we're having to store

00:53:26 --> 00:53:31
lots of data and we didn't know which

00:53:28 --> 00:53:35
stuff we had to keep around to keep the

00:53:30 --> 00:53:37
performance up so we had a hypothesis

00:53:34 --> 00:53:42
that forgetting was actually going to be

00:53:36 --> 00:53:44
a beneficial thing that maybe maybe the

00:53:41 --> 00:53:46
problem we have with our memories that

00:53:43 --> 00:53:48
we really really dislike this forgetting

00:53:45 --> 00:53:50
thing maybe it's actually useful and so

00:53:47 --> 00:53:53
we experimented with the following

00:53:49 --> 00:53:57
policy we said let's forget a memory if

00:53:52 --> 00:53:58
one we haven't really it's not predicted

00:53:56 --> 00:54:00
to be useful by this base level

00:53:57 --> 00:54:02
activation we haven't used it recently

00:53:59 --> 00:54:02
we haven't used it frequently maybe it's

00:54:01 --> 00:54:06
not worth it

00:54:01 --> 00:54:08
hat and we felt confident that we could

00:54:05 --> 00:54:10
approximately reconstruct it if we

00:54:07 --> 00:54:14
absolutely had to and if those two

00:54:09 --> 00:54:16
things held we could forget something so

00:54:13 --> 00:54:19
it's this bait same basic algorithm but

00:54:15 --> 00:54:21
instead of the ranking them it's if we

00:54:18 --> 00:54:25
set a threshold for base level

00:54:20 --> 00:54:26
activation finding when it is that a

00:54:24 --> 00:54:29
memory is going to pass that threshold

00:54:26 --> 00:54:31
and try to forget based upon that in a

00:54:28 --> 00:54:35
way that's efficient that isn't going to

00:54:30 --> 00:54:37
scale really really poorly so we were

00:54:34 --> 00:54:42
able to come up with an efficient way to

00:54:36 --> 00:54:48
implement this using an approximation

00:54:41 --> 00:54:49
that ended up for most memories to be

00:54:47 --> 00:54:51
xactly correct to the original I'm

00:54:48 --> 00:54:53
happy to go over details of this if

00:54:50 --> 00:54:56
anybody's interested later but end up

00:54:52 --> 00:54:59
being a fairly close approximation one

00:54:55 --> 00:55:02
that as compared to an accurate

00:54:58 --> 00:55:05
completely accurate search for the value

00:55:01 --> 00:55:08
nded up being somewhere between 15 to

00:55:04 --> 00:55:12
20 times faster and so when we looked at

00:55:07 --> 00:55:14
our mobile robot here oh sorry let me

00:55:11 --> 00:55:15
get this back because our little robots

00:55:13 --> 00:55:16
actually going around

00:55:14 --> 00:55:18
it's the third floor of the computer

00:55:15 --> 00:55:19
science building at the University of

00:55:17 --> 00:55:22
Michigan it's going around he's building

00:55:18 --> 00:55:24
a map and again the idea was this map is

00:55:21 --> 00:55:26
getting too big so here was the basic

00:55:23 --> 00:55:27
idea as the robots going around it's

00:55:25 --> 00:55:30
going to need this map information about

00:55:26 --> 00:55:32
rooms the color there is describing kind

00:55:29 --> 00:55:33
of the strength of the memory and as it

00:55:31 --> 00:55:35
gets farther and farther away and it

00:55:32 --> 00:55:37
hasn't used part of the map for planning

00:55:34 --> 00:55:39
or other purposes basically make it 2 K

00:55:36 --> 00:55:42
away so that by the time it gets to the

00:55:38 --> 00:55:44
bottom it's forgotten about the top but

00:55:41 --> 00:55:47
we had the belief that we could

00:55:43 --> 00:55:50
reconstruct portion that map if

00:55:46 --> 00:55:52
necessary and so the hypothesis was this

00:55:49 --> 00:55:55
would take care of our speed problems

00:55:51 --> 00:55:58
and so what we looked at was here's our

00:55:54 --> 00:55:59
50 millisecond thresholds if we do no

00:55:57 --> 00:56:01
forgetting whatsoever

00:55:58 --> 00:56:06
bad things were happening over time so

00:56:00 --> 00:56:08
just 3,600 seconds this isn't a very

00:56:05 --> 00:56:10
long time we're passing that threshold

00:56:07 --> 00:56:12
this is dangerous for the robot if we

00:56:09 --> 00:56:14
implement a task specific basically

00:56:11 --> 00:56:15
cleanup rules which is really hard to

00:56:13 --> 00:56:17
get right

00:56:14 --> 00:56:19
hat basically solved the problem when

00:56:16 --> 00:56:20
we looked at our general forgetting

00:56:18 --> 00:56:22
mechanism that we're using in other

00:56:19 --> 00:56:24
places at an appropriate level of decay

00:56:21 --> 00:56:26
we were actually doing better than

00:56:23 --> 00:56:31
d-tuned rules so this was kind of a

00:56:25 --> 00:56:33
surprise win for us the other task seems

00:56:30 --> 00:56:36
totally unrelated it's a dice game you

00:56:32 --> 00:56:38
cover your dice you make bids about what

00:56:35 --> 00:56:40
are under other people's cups this is

00:56:37 --> 00:56:42
played in Pirates of the Caribbean when

00:56:39 --> 00:56:43
they're on the boat in the second movie

00:56:41 --> 00:56:46
and bidding for lives of service

00:56:42 --> 00:56:48
honestly this is a game we love to play

00:56:45 --> 00:56:50
in the University of Michigan lab and so

00:56:47 --> 00:56:54
we're like hmm could soar play this and

00:56:49 --> 00:56:55
so we built a system that could learn to

00:56:53 --> 00:56:57
play this game rather well with

00:56:54 --> 00:56:59
reinforcement learning and so the basic

00:56:56 --> 00:57:02
idea was in a particular state of the

00:56:58 --> 00:57:05
game soar would have options of actions

00:57:01 --> 00:57:07
to perform it could construct estimates

00:57:04 --> 00:57:09
of their associated value it would

00:57:06 --> 00:57:10
choose one of those and depending on the

00:57:08 --> 00:57:12
outcome something good happened you

00:57:09 --> 00:57:15
might update that value and the big

00:57:12 --> 00:57:17
problem was that the size of the state

00:57:14 --> 00:57:20
space the number of possible states and

00:57:16 --> 00:57:22
actions just is enormous and so memory

00:57:19 --> 00:57:26
was blowing up and so what we said

00:57:21 --> 00:57:28
similar sort of hypothesis if we decay

00:57:25 --> 00:57:30
away these estimates that we could

00:57:27 --> 00:57:32
probably reconstructs and we haven't

00:57:29 --> 00:57:35
used it in a while our things going to

00:57:31 --> 00:57:36
get better and so if we don't forget it

00:57:34 --> 00:57:38
all

00:57:35 --> 00:57:40
40,000 games isn't a whole lot when it

00:57:37 --> 00:57:42
comes to reinforcement learning we were

00:57:39 --> 00:57:44
up at two gigs we wanted to put this on

00:57:41 --> 00:57:50
an iPhone that wasn't going to work so

00:57:43 --> 00:57:52
well there had been prior work that had

00:57:49 --> 00:57:54
used a similar approach they were down

00:57:51 --> 00:57:55
at four or five hundred Meg's the

00:57:53 --> 00:57:59
iPhones are not going to be happy

00:57:54 --> 00:58:02
but it'll work so that gave us some hope

00:57:58 --> 00:58:03
and we implemented our system okay

00:58:01 --> 00:58:06
we're somewhere in the middle we can fit

00:58:02 --> 00:58:10
on the iPhone a very good iPhone maybe

00:58:05 --> 00:58:13
an iPad the question was though one

00:58:09 --> 00:58:15
fficiency yeah we we fit under our 50

00:58:12 --> 00:58:16
milliseconds but - how does the system

00:58:14 --> 00:58:18
actually perform when you start

00:58:15 --> 00:58:21
forgetting stuff can it learn to play

00:58:17 --> 00:58:24
well and so y-axis here you're seeing

00:58:20 --> 00:58:26
competency you play a thousand games how

00:58:23 --> 00:58:28
many do you win so the bottom here 500

00:58:25 --> 00:58:32
that's you know flipping a coin whether

00:58:27 --> 00:58:34
or not you're going to win if we do know

00:58:31 --> 00:58:39
forgetting whatsoever this is a pretty

00:58:33 --> 00:58:41
good system the prior work while keeping

00:58:38 --> 00:58:43
the memory low is also suffering with

00:58:40 --> 00:58:46
respect to how well it was playing the

00:58:42 --> 00:58:49
game and kind of cool was the system

00:58:45 --> 00:58:51
that was basically more than having the

00:58:48 --> 00:58:55
memory requirement was still performing

00:58:50 --> 00:58:59
at the level of no forgetting whatsoever

00:58:54 --> 00:59:01
so just to bring back why I went through

00:58:58 --> 00:59:04
this story was we had a problem we

00:59:00 --> 00:59:06
looked to our example of human level AI

00:59:03 --> 00:59:08
which is humans themselves

00:59:05 --> 00:59:10
we took an idea it turned out to be

00:59:07 --> 00:59:12
neficial we found in efficient

00:59:09 --> 00:59:13
implementations and then found it was

00:59:11 --> 00:59:15
useful in other parts of the

00:59:12 --> 00:59:18
architecture and other tasks that didn't

00:59:14 --> 00:59:19
seem to relate whatsoever but if you

00:59:17 --> 00:59:21
download soar right now you would gain

00:59:18 --> 00:59:25
access to all these mechanisms for

00:59:20 --> 00:59:27
whatever task you want it to perform

00:59:24 --> 00:59:28
just to give some sense in the field of

00:59:26 --> 00:59:30
cognitive architecture what some of the

00:59:27 --> 00:59:33
open issues are I think this is true in

00:59:29 --> 00:59:35
a lot of fields in AI but integration of

00:59:32 --> 00:59:39
systems over time the goal was they

00:59:34 --> 00:59:40
wouldn't have all these theories and so

00:59:38 --> 00:59:42
you could just kind of build over time

00:59:39 --> 00:59:43
particularly when folks are working on

00:59:41 --> 00:59:45
different architectures that becomes

00:59:42 --> 00:59:47
hard but also when you have very

00:59:44 --> 00:59:49
different initial starting points that

00:59:46 --> 00:59:52
can still be an issue transfer learning

00:59:48 --> 00:59:53
is an issue we're building into the

00:59:51 --> 00:59:55
space of multimodal representations

00:59:52 --> 00:59:58
which is to say not only abstract

00:59:54 --> 01:00:00
symbolic but also visual wouldn't it be

00:59:57 --> 01:00:01
nice if we had auditory and other senses

00:59:59 --> 01:00:04
but building that into memories and

01:00:00 --> 01:00:07
processing is still an open question

01:00:03 --> 01:00:10
there's folks working on metacognition

01:00:06 --> 01:00:13
which is to say the agent self assessing

01:00:09 --> 01:00:14
its own State its own processing some

01:00:12 --> 01:00:17
work has been done in here but still a

01:00:13 --> 01:00:19
lot and I think the last one is a really

01:00:16 --> 01:00:21
important question for anybody taking

01:00:18 --> 01:00:24
this kind of class which is what would

01:00:20 --> 01:00:27
happen if we did succeed if we did make

01:00:23 --> 01:00:29
human-level AI and if you don't know

01:00:26 --> 01:00:31
that picture right there

01:00:28 --> 01:00:33
it's from a show that I recommend that

01:00:30 --> 01:00:35
you watch that's by the BBC it's called

01:00:32 --> 01:00:37
humans and it's basically what if we

01:00:34 --> 01:00:40
re able to develop what are called

01:00:36 --> 01:00:42
synths in the show think the robot that

01:00:39 --> 01:00:44
can clean up after your laundry and cook

01:00:41 --> 01:00:47
and all that good stuff interact with

01:00:43 --> 01:00:50
you it looks and interacts as a human

01:00:46 --> 01:00:53
but is completely our servants and then

01:00:49 --> 01:00:55
hilarity and complex issues ensue so I

01:00:52 --> 01:01:00
highly recommend if you haven't seen

01:00:54 --> 01:01:05
that to go watch that I think these days

01:00:59 --> 01:01:06
there's a lot of attention play pay to

01:01:04 --> 01:01:08
machine learning and particular deep

01:01:05 --> 01:01:10
learning methods as well it should

01:01:07 --> 01:01:13
they're doing absolutely amazing things

01:01:09 --> 01:01:16
and often the question is well you're

01:01:12 --> 01:01:18
doing this and there's deep learning

01:01:15 --> 01:01:22
over there you know how do they compare

01:01:17 --> 01:01:24
and I honestly don't feel that that's

01:01:21 --> 01:01:26
always a fruitful question because most

01:01:23 --> 01:01:30
of the time they tend to be working on

01:01:25 --> 01:01:32
different problems if I'm trying to find

01:01:29 --> 01:01:35
objects in the scene I'm gonna pull out

01:01:31 --> 01:01:36
ensorflow I'm really not going to pull

01:01:34 --> 01:01:39
outs or it doesn't make sense it's not

01:01:35 --> 01:01:41
he right tool for the job they haven't

01:01:38 --> 01:01:42
been said there are times when they tend

01:01:40 --> 01:01:45
to work together really really well so

01:01:41 --> 01:01:49
the Rosi system that you saw there there

01:01:44 --> 01:01:50
was some I believe neural networks being

01:01:48 --> 01:01:52
used in the object recognition

01:01:49 --> 01:01:54
mechanisms for the vision system there's

01:01:51 --> 01:01:56
TD learning going

01:01:53 --> 01:01:58
in terms of the dice game where we can

01:01:55 --> 01:01:59
pick and choose and use this stuff

01:01:57 --> 01:02:00
absolutely great because there are

01:01:58 --> 01:02:03
problems that are best solved by these

01:01:59 --> 01:02:05
methods so why avoid it and then on the

01:02:02 --> 01:02:08
other side if you're trying to develop a

01:02:04 --> 01:02:10
system where you you know in different

01:02:07 --> 01:02:13
situations know exactly what you want

01:02:09 --> 01:02:14
he system to do soar or other rule

01:02:12 --> 01:02:15
based systems end up being the right

01:02:13 --> 01:02:17
ool for the right job

01:02:14 --> 01:02:21
so absolutely why not make it a piece of

01:02:16 --> 01:02:24
the overall system some recommended

01:02:20 --> 01:02:25
readings and some venues I'd mentioned

01:02:23 --> 01:02:29
unified theories of cognition this is

01:02:24 --> 01:02:31
Harvard Press I believe the short

01:02:28 --> 01:02:33
cognitive architecture was MIT press

01:02:30 --> 01:02:37
came out in 2012

01:02:32 --> 01:02:39
I'll say I'm co-author and theoretically

01:02:36 --> 01:02:40
would get proceeds but I've donated them

01:02:38 --> 01:02:42
all to the University of Michigan so I

01:02:39 --> 01:02:46
can just make this recommendation free

01:02:41 --> 01:02:47
of ethical concerns personally it's an

01:02:45 --> 01:02:49
interesting book it brings together lots

01:02:46 --> 01:02:53
of history and lots of the new features

01:02:48 --> 01:02:54
it's if you're really interested in soar

01:02:52 --> 01:02:57
it's an easy sell

01:02:53 --> 01:02:59
I'd mentioned crystallize Smith's how to

01:02:56 --> 01:03:01
build a brain really cool read download

01:02:58 --> 01:03:04
the software go through toriel's it's

01:03:00 --> 01:03:06
really great how can the human mind

01:03:03 --> 01:03:09
occur in the physical universe is one of

01:03:05 --> 01:03:11
the court akhtar books so it talks

01:03:08 --> 01:03:12
through a lot of the psychological

01:03:10 --> 01:03:17
underpinnings and how the architecture

01:03:11 --> 01:03:20
works it's a fascinating read one of the

01:03:16 --> 01:03:23
papers trying to remember what year 2008

01:03:19 --> 01:03:25
this goes through a lot of different

01:03:22 --> 01:03:27
architectures in the field it's ten

01:03:24 --> 01:03:29
years old but it gives you a good kind

01:03:26 --> 01:03:33
of broad sweep if you want something a

01:03:28 --> 01:03:35
little more recent this is last month's

01:03:32 --> 01:03:39
issue of AI magazine completely

01:03:34 --> 01:03:40
dedicated to cognitive systems so it's a

01:03:38 --> 01:03:43
good place to look for the sort of stuff

01:03:39 --> 01:03:45
in terms of academic venues triple AI

01:03:42 --> 01:03:47
often has cognitive systems track

01:03:44 --> 01:03:48
there's a conference called aiccm

01:03:46 --> 01:03:51
international conference on cognitive

01:03:47 --> 01:03:53
modeling where you'll see kind of a span

01:03:50 --> 01:03:56
from biologic all the way up to AI

01:03:52 --> 01:04:00
cognitive science or cogs AI they have a

01:03:55 --> 01:04:02
conference as well as a journal ACS has

01:03:59 --> 01:04:04
a conference as well as an online

01:04:01 --> 01:04:06
journal advances in cognitive systems

01:04:03 --> 01:04:08
research is a journal

01:04:05 --> 01:04:11
that has a lot of this good stuff

01:04:07 --> 01:04:14
there's AGI the conference

01:04:10 --> 01:04:16
Vica is biologically inspired cognitive

01:04:13 --> 01:04:18
architectures and I had mentioned both

01:04:15 --> 01:04:23
ere's a soar workshop and an act our

01:04:17 --> 01:04:25
workshop that go on annually so leave it

01:04:22 --> 01:04:28
at this there's some contact information

01:04:24 --> 01:04:31
there and a lot of what I do these days

01:04:27 --> 01:04:33
actually involves kind of explainable

01:04:30 --> 01:04:36
machine learning integrating that with

01:04:32 --> 01:04:38
cognitive systems as well as

01:04:35 --> 01:04:40
optimization and robotics that scales

01:04:37 --> 01:04:49
really well and also integrates with

01:04:39 --> 01:04:51
cognitive systems so thank you if you

01:04:48 --> 01:04:55
have a question please line up to one of

01:04:50 --> 01:04:59
these two microphones so what what are

01:04:54 --> 01:05:02
the main heuristics that you're using in

01:04:58 --> 01:05:04
soar there can be heuristics at the task

01:05:01 --> 01:05:05
level in the agent level or there's the

01:05:03 --> 01:05:08
uristics that are built into the

01:05:04 --> 01:05:10
architecture to operate efficiently so

01:05:07 --> 01:05:13
I'll give you a core example that comes

01:05:09 --> 01:05:15
into the architecture and it's a fun

01:05:12 --> 01:05:17
trick that if you're a programmer you

01:05:14 --> 01:05:20
could use all the time which is only

01:05:16 --> 01:05:22
process changes which is to say one of

01:05:19 --> 01:05:24
the cool things about soar is you can

01:05:21 --> 01:05:26
load it up with literally billions of

01:05:23 --> 01:05:28
rules and I say literally because we've

01:05:25 --> 01:05:30
done it and we know that it can turnover

01:05:27 --> 01:05:32
still in under a millisecond and this

01:05:29 --> 01:05:35
happens because instead of most systems

01:05:31 --> 01:05:37
which process all the rules we just say

01:05:34 --> 01:05:38
well anytime anything changes in the

01:05:36 --> 01:05:40
world that's what we're going to react

01:05:37 --> 01:05:42
o and of course if you look at the

01:05:39 --> 01:05:44
biological world similar sorts of tricks

01:05:41 --> 01:05:47
are being used so that's one of the core

01:05:43 --> 01:05:49
ones that actually permeates multiple of

01:05:46 --> 01:05:53
the mechanisms when it comes to

01:05:48 --> 01:05:55
individual tasks it really is task

01:05:52 --> 01:05:59
specific what that is so for instance

01:05:54 --> 01:06:01
with the liar's dice game if you were to

01:05:58 --> 01:06:04
go and download it when you're setting

01:06:00 --> 01:06:06
the level of difficulty of it what

01:06:03 --> 01:06:08
you're basically selecting is the subset

01:06:05 --> 01:06:11
of heuristics that are being applied and

01:06:07 --> 01:06:14
it starts very simply with things like

01:06:10 --> 01:06:16
if I see lots of sixes then I'm likely

01:06:13 --> 01:06:18
to believe a high number of sixes exist

01:06:15 --> 01:06:21
but if I don't they're probably not

01:06:18 --> 01:06:23
here at all so it's a start

01:06:20 --> 01:06:26
but any Bayesian wouldn't really buy

01:06:22 --> 01:06:28
that argument so then you start tacking

01:06:25 --> 01:06:30
on a little bit of probabilistic

01:06:27 --> 01:06:33
alculation and then it tacks on some

01:06:29 --> 01:06:37
history of prior actions of the agents

01:06:32 --> 01:06:38
o it really just builds now the Rosi

01:06:36 --> 01:06:41
system one of the cool things they're

01:06:37 --> 01:06:45
doing is game learning and specifically

01:06:40 --> 01:06:50
having the agent be able to accept by a

01:06:44 --> 01:06:52
text like natural text heuristics about

01:06:49 --> 01:06:55
how to play the game even when it's not

01:06:51 --> 01:06:57
sure what to do so you at one point you

01:06:54 --> 01:07:00
mentioned about like generating new

01:06:56 --> 01:07:03
rules yeah so I'm wondering like how do

01:06:59 --> 01:07:04
you do that's so true and I'm the first

01:07:02 --> 01:07:07
hing that comes to my mind are local

01:07:03 --> 01:07:09
search methods okay so one thing is you

01:07:06 --> 01:07:11
can actually implement heuristic search

01:07:08 --> 01:07:13
in rules in the system and that's

01:07:10 --> 01:07:15
actually how the robot navigates itself

01:07:12 --> 01:07:18
so it does heuristic search but at the

01:07:14 --> 01:07:21
level of rules generating new rules the

01:07:17 --> 01:07:23
chunking mechanism says the following if

01:07:20 --> 01:07:26
it's the case that in order to solve a

01:07:22 --> 01:07:28
problem you had to kind of sub goal and

01:07:25 --> 01:07:29
o some other work and you figure out

01:07:27 --> 01:07:32
how to solve all that work and you've

01:07:28 --> 01:07:34
got a result then and I'm greatly

01:07:31 --> 01:07:37
oversimplifying but if you ever were in

01:07:33 --> 01:07:39
the same situation again why don't I

01:07:36 --> 01:07:43
just memorize the solution for that same

01:07:38 --> 01:07:45
situation so it basically learns over

01:07:42 --> 01:07:47
all the sub processing that was done and

01:07:44 --> 01:07:49
encodes the situation I was in as

01:07:46 --> 01:07:51
conditions and the results that were

01:07:48 --> 01:07:56
produced as action and that's the new

01:07:50 --> 01:07:59
rule all right thank you yeah hi so deep

01:07:55 --> 01:08:00
learning and neural networks you know it

01:07:58 --> 01:08:02
looks as though there's a bit of an

01:07:59 --> 01:08:03
impedance mismatch between your system

01:08:01 --> 01:08:06
and those types of system because you've

01:08:02 --> 01:08:08
got a fixed kind of memory architecture

01:08:05 --> 01:08:09
and they've got the memory and the rules

01:08:07 --> 01:08:12
all kind of mixed together into one

01:08:08 --> 01:08:14
system but could you interface your

01:08:11 --> 01:08:16
system or a saw like system with deep

01:08:13 --> 01:08:18
learning by playing in deep learning

01:08:15 --> 01:08:20
agents has rules in your system so you'd

01:08:17 --> 01:08:22
have to have some local memory but is

01:08:19 --> 01:08:25
that is there some reason you can't plug

01:08:21 --> 01:08:30
in deep learning as a kind of a rule

01:08:24 --> 01:08:31
like module so I'm going to answer this

01:08:29 --> 01:08:33
you work on it is

01:08:31 --> 01:08:37
that's the been any work on that oh it's

01:08:32 --> 01:08:41
yeah so I'll answer at multiple levels

01:08:36 --> 01:08:42
one is you are writing a system and you

01:08:40 --> 01:08:45
want to use both of these things how do

01:08:41 --> 01:08:47
you make them talk and there is an API

01:08:44 --> 01:08:49
that you can interface with any

01:08:46 --> 01:08:50
environment and any set of tools and if

01:08:48 --> 01:08:52
deep learning is one of them great and

01:08:49 --> 01:08:54
if so or is the other one cool you have

01:08:51 --> 01:08:56
no problem and you can do that today and

01:08:53 --> 01:08:57
we have done this numerous times in

01:08:55 --> 01:09:01
terms of integration into the

01:08:56 --> 01:09:04
architecture all we have to do is think

01:09:00 --> 01:09:07
of a sub-problem

01:09:03 --> 01:09:09
in which all over simplify this but

01:09:06 --> 01:09:12
basically function approximation is

01:09:08 --> 01:09:16
useful I'm seeing basically kind of the

01:09:11 --> 01:09:18
fixed structure of input I'm getting

01:09:15 --> 01:09:20
feedback as to the output and I want to

01:09:17 --> 01:09:22
learn the mapping to that over time if

01:09:19 --> 01:09:24
you can make that case then you

01:09:21 --> 01:09:28
integrate it as a part of the module

01:09:23 --> 01:09:30
great and we have learning mechanisms

01:09:27 --> 01:09:33
that do some of that deep learning just

01:09:29 --> 01:09:34
hasn't been used to my knowledge to

01:09:32 --> 01:09:36
solve any of those subproblems there's

01:09:33 --> 01:09:38
nothing keeping it from being one of

01:09:35 --> 01:09:43
those particularly when it comes down to

01:09:37 --> 01:09:47
the low-level visual part of things a

01:09:42 --> 01:09:49
problem that arises so I'll say what

01:09:46 --> 01:09:51
would actually make some of this

01:09:48 --> 01:09:54
difficult and it's a general problem

01:09:50 --> 01:09:57
called simple grounding so at the level

01:09:53 --> 01:09:59
of what most have what happens mostly in

01:09:56 --> 01:10:03
store it is symbols being manipulated in

01:09:58 --> 01:10:06
the highly discrete way and so how do

01:10:02 --> 01:10:08
you get yourself from pixels and

01:10:05 --> 01:10:10
low-level non symbolic representations

01:10:07 --> 01:10:12
to something that's stable and discrete

01:10:09 --> 01:10:15
and can be manipulated and that is

01:10:11 --> 01:10:18
absolutely an open question in that

01:10:14 --> 01:10:20
community and and that will make things

01:10:17 --> 01:10:22
hard so spawn actually has an

01:10:19 --> 01:10:24
interesting answer to that and it has a

01:10:21 --> 01:10:25
distributive representation and it

01:10:23 --> 01:10:27
operates over distributed

01:10:24 --> 01:10:30
representations in what might feel like

01:10:26 --> 01:10:32
a symbolic way so they're kind of ahead

01:10:29 --> 01:10:34
of us on that but they're they're

01:10:31 --> 01:10:36
starting from a lower point and so they

01:10:33 --> 01:10:38
dealt with some of these issues and they

01:10:35 --> 01:10:39
have a pretty good answer to that and

01:10:37 --> 01:10:41
that's how they're moving up and that's

01:10:38 --> 01:10:43
also why I showed Sigma which is at its

01:10:40 --> 01:10:45
low level it's message passing

01:10:42 --> 01:10:49
algorithms it's implementing

01:10:44 --> 01:10:50
things like slam and Sat solving and

01:10:48 --> 01:10:53
other sorts of really really it can

01:10:49 --> 01:10:55
implement those on very low level

01:10:52 --> 01:10:57
primitives but higher up it can also be

01:10:54 --> 01:10:59
doing what soar is doing so there's an

01:10:56 --> 01:11:00
swer there as well okay thank you so

01:10:58 --> 01:11:03
another way of doing it would be to

01:10:59 --> 01:11:07
layer the system so have one system

01:11:02 --> 01:11:09
pre-processing the the the sensory input

01:11:06 --> 01:11:10
or post-processing their draft but the

01:11:08 --> 01:11:11
other one that would be another way of

01:11:09 --> 01:11:13
combining two system and that's actually

01:11:10 --> 01:11:15
what's going on in the rosey system so

01:11:12 --> 01:11:18
the detection of objects in the scene is

01:11:14 --> 01:11:20
a just just software that somebody wrote

01:11:17 --> 01:11:22
I don't believe it's a deep learning

01:11:19 --> 01:11:26
specifically but like the color

01:11:21 --> 01:11:28
detection out of it I think is an SVM if

01:11:25 --> 01:11:29
I'm correct so easily could be deep

01:11:27 --> 01:11:32
learning

01:11:28 --> 01:11:33
thanks you mentioned like the importance

01:11:31 --> 01:11:35
of forgetting

01:11:32 --> 01:11:36
in order for memory issues but you said

01:11:34 --> 01:11:38
you could only forget because you could

01:11:35 --> 01:11:40
reconstruct and then curse how do you

01:11:37 --> 01:11:41
when you said we can start you need to

01:11:39 --> 01:11:44
know that it happened before so do you

01:11:40 --> 01:11:49
just compress the data like do you

01:11:43 --> 01:11:51
really forget it order okay so and I put

01:11:48 --> 01:11:54
quotes up and I said you think you can

01:11:50 --> 01:11:57
reconstruct it so we came up with

01:11:53 --> 01:12:00
approximations of this and so let me try

01:11:56 --> 01:12:04
to answer this very grounded when it

01:11:59 --> 01:12:07
comes to the mobile robot and you had

01:12:03 --> 01:12:09
rooms that you had been to before the

01:12:06 --> 01:12:12
ntire map in its entirety was being

01:12:08 --> 01:12:14
constructed in the robots semantic

01:12:11 --> 01:12:15
memory so here's fats this room is

01:12:13 --> 01:12:17
connected this room which is connected

01:12:14 --> 01:12:19
this room which connected this room so

01:12:16 --> 01:12:21
we had those sorts of representations

01:12:18 --> 01:12:24
that existed up in at semantic memory

01:12:20 --> 01:12:26
the rules can only operates down on

01:12:23 --> 01:12:27
anything that's in short-term memory so

01:12:25 --> 01:12:30
basically we were removing things from

01:12:26 --> 01:12:31
the short-term memory and as necessary

01:12:29 --> 01:12:33
be able to reconstruct it from the

01:12:30 --> 01:12:35
long-term you could end up in some

01:12:32 --> 01:12:38
situations in which you had made a

01:12:34 --> 01:12:40
change locally in short-term memory

01:12:37 --> 01:12:42
didn't get a chance to get it up and it

01:12:39 --> 01:12:45
actually happened to be forgotten away

01:12:41 --> 01:12:47
so you weren't guaranteed but it was

01:12:44 --> 01:12:49
good enough that the connectivity

01:12:46 --> 01:12:51
survived the agent was able to perform

01:12:48 --> 01:12:55
the exact same task and we gained some

01:12:50 --> 01:12:58
benefit for the RL system the rule we

01:12:54 --> 01:12:59
came up with was the initial estimates

01:12:57 --> 01:13:00
in the valley

01:12:58 --> 01:13:01
ou system which is here's how good I

01:12:59 --> 01:13:04
think that is that's based on the

01:13:00 --> 01:13:06
uristics I described earlier some

01:13:03 --> 01:13:07
simple probabilistic calculations of

01:13:05 --> 01:13:09
counting some stuff that's where that

01:13:06 --> 01:13:10
number came from we computed before we

01:13:08 --> 01:13:12
could compute it again

01:13:09 --> 01:13:15
the only time we can't reconstruct it

01:13:11 --> 01:13:18
completely is if it had seen a certain

01:13:14 --> 01:13:20
umber of updates over time it's such a

01:13:17 --> 01:13:24
large state space there are so many

01:13:19 --> 01:13:27
actions so many states that most of the

01:13:23 --> 01:13:30
states were never being seen so most of

01:13:26 --> 01:13:31
those could be exactly reproduced by the

01:13:29 --> 01:13:34
agent just thinking about it a little

01:13:30 --> 01:13:38
bit and there were only a tiny tiny I'm

01:13:33 --> 01:13:39
gonna say under 1% of the estimate the

01:13:37 --> 01:13:42
value system that ever got updates and

01:13:38 --> 01:13:43
that's actually not inconsistent with a

01:13:41 --> 01:13:46
lot of these kinds of problems that have

01:13:42 --> 01:13:48
really really large state spaces so I

01:13:45 --> 01:13:53
think the statement was something like

01:13:47 --> 01:13:56
if we had ever updated it don't forget

01:13:52 --> 01:13:59
it and you saw that was already reducing

01:13:55 --> 01:14:02
more than half of the memory load we

01:13:58 --> 01:14:03
could have something higher to say 10

01:14:01 --> 01:14:06
times something like that and that would

01:14:02 --> 01:14:10
say we could reconstruct almost all of

01:14:05 --> 01:14:12
it the prior work that I referenced was

01:14:09 --> 01:14:13
trictly saying if it falls below

01:14:11 --> 01:14:15
threshold no matter how many times in an

01:14:12 --> 01:14:17
update no matter how much information

01:14:14 --> 01:14:20
was there and so what we're adding was

01:14:16 --> 01:14:22
probably can reconstruct and that was

01:14:19 --> 01:14:25
getting us the the balance between the

01:14:21 --> 01:14:27
fficiency and the ability to forget so

01:14:24 --> 01:14:28
just under 7 you say we can probably we

01:14:26 --> 01:14:30
can show it means that you keep trying

01:14:27 --> 01:14:31
that you used to know it and so if you

01:14:29 --> 01:14:33
need to be constructed you will but it's

01:14:30 --> 01:14:35
just you're gonna run it again in some

01:14:32 --> 01:14:37
times on the fly if I get back into that

01:14:34 --> 01:14:39
situation and I happen to forget it the

01:14:36 --> 01:14:41
system knew how to compute it the

01:14:38 --> 01:14:43
first time it goes and looks at all the

01:14:40 --> 01:14:44
hand and it just pretends it's in that

01:14:42 --> 01:14:51
situation for the very very first time

01:14:43 --> 01:14:54
reconstructs that value estimate again

01:14:50 --> 01:14:56
you're on that work question okay so the

01:14:53 --> 01:15:00
actual mechanism of forgetting is

01:14:55 --> 01:15:02
fascinating so l STM's rnns

01:14:59 --> 01:15:05
have mechanisms for learning what to

01:15:01 --> 01:15:07
forget and what not to forget have you

01:15:04 --> 01:15:10
has there been any exploration of

01:15:06 --> 01:15:11
learning the forgetting process just

01:15:09 --> 01:15:13
doing something complicated or

01:15:10 --> 01:15:19
interesting with which parts to forget

01:15:12 --> 01:15:22
or not the closest I will say was kind

01:15:18 --> 01:15:24
of a metacognition project that's 10 or

01:15:21 --> 01:15:27
15 years old at this point which was

01:15:23 --> 01:15:29
what happens when soar gets into a place

01:15:26 --> 01:15:32
where it actually knows that it learned

01:15:28 --> 01:15:35
something that's harmful to it that's

01:15:31 --> 01:15:37
leading to poor decisions and in

01:15:34 --> 01:15:40
that case it was still a very rule-based

01:15:36 --> 01:15:43
process but it wasn't learning to forget

01:15:39 --> 01:15:46
he was actually learning to override its

01:15:42 --> 01:15:48
prior knowledge which might be closer to

01:15:45 --> 01:15:50
some of what we do when we know we have

01:15:47 --> 01:15:52
a bad habit we don't have a way of

01:15:49 --> 01:15:54
orgetting that habit but instead we can

01:15:51 --> 01:15:56
try to learn something on top of that

01:15:53 --> 01:15:59
leads to better operation in the

01:15:55 --> 01:16:01
future to my knowledge that's the only

01:15:58 --> 01:16:04
work at least in soar that's been done

01:16:00 --> 01:16:06
just sorry I find the topic really

01:16:03 --> 01:16:09
fascinating what lessons do you think we

01:16:05 --> 01:16:11
can draw from the fact that forgetting

01:16:08 --> 01:16:14
it's ultimately your the action of

01:16:10 --> 01:16:16
orgetting is driven by the fact you

01:16:13 --> 01:16:20
want to improve performance but do you

01:16:15 --> 01:16:23
think forgetting is essential for AGI

01:16:19 --> 01:16:25
the act of forgetting for building

01:16:22 --> 01:16:28
systems that operate in this world how

01:16:24 --> 01:16:32
important is forgetting I can think of

01:16:27 --> 01:16:34
easy answers to that so one might be if

01:16:31 --> 01:16:36
we take the cognitive modeling approach

01:16:33 --> 01:16:41
we know humans do forget and we know

01:16:35 --> 01:16:43
regularities of how humans forget and so

01:16:40 --> 01:16:45
whether or not the system itself forgets

01:16:42 --> 01:16:47
it's at least has to model the fact that

01:16:44 --> 01:16:49
he humans that's interacting with are

01:16:46 --> 01:16:51
going to forget and so at least it has

01:16:48 --> 01:16:54
to have that ability to model in order

01:16:50 --> 01:16:55
to interact effectively because if it

01:16:53 --> 01:16:58
assumes we always remember everything

01:16:54 --> 01:17:00
and it can't operate well in that

01:16:57 --> 01:17:09
environment I think we're going to have

01:16:59 --> 01:17:13
a problem is true forgetting going to be

01:17:08 --> 01:17:14
necessary that's interesting our our AGI

01:17:12 --> 01:17:17
system is going to hold a grudge for all

01:17:13 --> 01:17:18
eternity we might want them to forget

01:17:16 --> 01:17:20
his early age when we were

01:17:17 --> 01:17:22
forcing them to work in our laboratory I

01:17:20 --> 01:17:23
think I know what you're trying to yeah

01:17:21 --> 01:17:26
exactly

01:17:22 --> 01:17:31
eah exactly and how do we build such a

01:17:25 --> 01:17:34
system yeah anyways go ahead so I have

01:17:30 --> 01:17:37
two quick two quick questions and one is

01:17:33 --> 01:17:39
would you be able to speculate on how

01:17:36 --> 01:17:42
you can connect function approximator

01:17:38 --> 01:17:44
such as deep networks you know to

01:17:41 --> 01:17:46
symbols and the second question

01:17:43 --> 01:17:49
completely different this is regarding

01:17:45 --> 01:17:51
your action selection I know we didn't

01:17:48 --> 01:17:52
speak much about that when you have

01:17:50 --> 01:17:55
different theories in your knowledge

01:17:51 --> 01:17:57
representation and you have an action

01:17:54 --> 01:18:01
selection which has to make construct a

01:17:56 --> 01:18:02
plan by reasoning about the different

01:18:00 --> 01:18:06
heories and the different pieces of

01:18:01 --> 01:18:08
knowledge that are now held within your

01:18:05 --> 01:18:11
memory or anything like all your rules

01:18:07 --> 01:18:12
what kind of algorithms do you use in

01:18:10 --> 01:18:14
the action selection to come up with the

01:18:11 --> 01:18:17
plan you know is there any concept of

01:18:13 --> 01:18:19
differentiation of the symbols or you

01:18:16 --> 01:18:20
know or grammars or admissible grammars

01:18:18 --> 01:18:22
and things like that that you use in

01:18:20 --> 01:18:25
action selection I'm actually gonna

01:18:21 --> 01:18:27
nswer the second question first and

01:18:24 --> 01:18:29
then you're gonna have to probably

01:18:26 --> 01:18:31
remind me of what the first one was when

01:18:28 --> 01:18:33
I get to the end so the action selection

01:18:30 --> 01:18:35
mechanism one of these core tenants I

01:18:32 --> 01:18:37
said is it's got to get through this

01:18:34 --> 01:18:39
cycle fast so everything that's really

01:18:36 --> 01:18:42
built in has to be really really

01:18:38 --> 01:18:44
simple and so the decision procedure is

01:18:41 --> 01:18:46
actually really really simple it says

01:18:43 --> 01:18:48
the rules are gonna fire the rules are

01:18:45 --> 01:18:49
going the production rules are gonna

01:18:47 --> 01:18:51
fire and there's gonna be a subset of

01:18:48 --> 01:18:54
them that will say something like here's

01:18:50 --> 01:18:55
an operator that you could select -

01:18:53 --> 01:18:57
these are carlos acceptable operator

01:18:54 --> 01:18:58
preferences they're ones that going to

01:18:56 --> 01:19:00
say well based upon the fact that you

01:18:57 --> 01:19:02
said that that was acceptable I think

01:18:59 --> 01:19:05
it's the best thing or the worst thing

01:19:01 --> 01:19:06
or I think 50/50 chance I'm going to get

01:19:04 --> 01:19:08
reward out of this there's actually a

01:19:05 --> 01:19:11
fixed language of preferences that are

01:19:07 --> 01:19:14
being asserted and actually a nice fixed

01:19:10 --> 01:19:17
procedure by which if I have a set of

01:19:13 --> 01:19:19
preferences to make a very quick and

01:19:16 --> 01:19:21
clean decision so what's basically

01:19:18 --> 01:19:23
happened is you've pushed the hard

01:19:20 --> 01:19:26
questions of how to make complex

01:19:22 --> 01:19:27
decisions about actions up to a higher

01:19:25 --> 01:19:29
level

01:19:26 --> 01:19:31
the low level architecture is always

01:19:28 --> 01:19:32
given a set of

01:19:30 --> 01:19:35
Jen's going to be able to make a

01:19:31 --> 01:19:38
relatively quick decision and it gets

01:19:34 --> 01:19:41
pushed into the knowledge of the agent

01:19:37 --> 01:19:44
o construct a sequence of decisions

01:19:40 --> 01:19:45
that over time is going to get to the

01:19:43 --> 01:19:46
more interesting questions you're

01:19:44 --> 01:19:48
talking about but how can you reason

01:19:45 --> 01:19:52
that that sequence will take you to the

01:19:47 --> 01:19:57
goal that you desire so people is there

01:19:51 --> 01:20:02
any guarantee on that is that in general

01:19:56 --> 01:20:05
across tasks no but people have for

01:20:01 --> 01:20:06
instance implemented a star I was

01:20:04 --> 01:20:10
mentioning as wouls

01:20:05 --> 01:20:11
right yeah so I know given certain

01:20:09 --> 01:20:13
properties about the search tack that

01:20:10 --> 01:20:16
ask that's being searched based upon

01:20:12 --> 01:20:19
these rules given a finite search space

01:20:15 --> 01:20:20
ventually it will get there and if I

01:20:18 --> 01:20:22
have a good heuristic in there I know

01:20:19 --> 01:20:25
certain properties about the optimality

01:20:21 --> 01:20:26
so I can reason at that level in general

01:20:24 --> 01:20:28
I think this comes back to the

01:20:25 --> 01:20:30
assumption I made earlier about bounded

01:20:27 --> 01:20:32
rationality to say parts of the

01:20:29 --> 01:20:36
architecture of solving subproblems

01:20:31 --> 01:20:38
optimally the general problems that it's

01:20:35 --> 01:20:39
going to work on it's going to try its

01:20:37 --> 01:20:41
best based upon the knowledge that it

01:20:38 --> 01:20:43
has and that's about the end of

01:20:40 --> 01:20:46
guarantees that you can typically make

01:20:42 --> 01:20:48
in the architecture okay I think your

01:20:45 --> 01:20:50
first question was speculate on

01:20:47 --> 01:20:52
connecting symbol approach I mean

01:20:49 --> 01:20:54
function approximate is you know you

01:20:51 --> 01:20:55
know multiple layer function

01:20:53 --> 01:20:59
approximate is like deep learning

01:20:54 --> 01:21:02
networks to two symbols that you can

01:20:58 --> 01:21:05
reason about at a higher level yeah I

01:21:01 --> 01:21:06
think that's a great open space if I had

01:21:04 --> 01:21:09
time this would be somebody I'll be

01:21:05 --> 01:21:12
working on right now which is somewhere

01:21:08 --> 01:21:15
before it basically said taking in a

01:21:11 --> 01:21:17
scene and then detecting objects out of

01:21:14 --> 01:21:19
that scene and using those as symbols

01:21:16 --> 01:21:22
and reasoning about those over time I

01:21:18 --> 01:21:26
think the spawn work is quite

01:21:21 --> 01:21:32
interesting so the symbols that they're

01:21:25 --> 01:21:34
operating on are actually a distributed

01:21:31 --> 01:21:37
representation of the input space and

01:21:33 --> 01:21:39
the closest I can get to this is if

01:21:36 --> 01:21:41
you've seen a word Tyvek where you're

01:21:38 --> 01:21:43
taking a language corpus and what you're

01:21:40 --> 01:21:45
getting out of there is a vector number

01:21:42 --> 01:21:47
that has certain properties but it's

01:21:44 --> 01:21:50
also a vector you can operate on as a

01:21:46 --> 01:21:53
unit so it has nice properties you can

01:21:49 --> 01:21:55
operate with it on other vectors you

01:21:52 --> 01:21:57
know that if I got the same word in the

01:21:54 --> 01:22:01
same context I would get back to that

01:21:56 --> 01:22:02
exact same vector so those are that's

01:22:00 --> 01:22:04
the kind of representation that seems

01:22:01 --> 01:22:08
like it's going to be able to bridge

01:22:03 --> 01:22:09
that chasm where we can get from sensory

01:22:07 --> 01:22:12
information to something that can be

01:22:08 --> 01:22:16
operated on and reasoned about in this

01:22:11 --> 01:22:18
ort of symbolic architecture and get us

01:22:15 --> 01:22:24
from there from actual sensory

01:22:17 --> 01:22:27
information I had a question what do you

01:22:23 --> 01:22:29
think are the biggest strengths of the

01:22:26 --> 01:22:31
cognitive architecture approach compared

01:22:28 --> 01:22:33
to other approaches in artificial

01:22:30 --> 01:22:34
intelligence and the flip side of that

01:22:32 --> 01:22:37
what do you think are the biggest

01:22:33 --> 01:22:41
shortcomings of cognitive architecture

01:22:36 --> 01:22:44
with respect to us with respect to you

01:22:40 --> 01:22:47
being humans yeah a human level like

01:22:43 --> 01:22:49
what needs to be like how come

01:22:46 --> 01:22:53
cognitive architecture has not solved

01:22:48 --> 01:22:55
AGI because we want job security that's

01:22:52 --> 01:22:59
the answer we've totally solved it

01:22:54 --> 01:23:04
already so strengths I think

01:22:58 --> 01:23:06
conceptually is keeping an eye on the

01:23:03 --> 01:23:12
ball which is if what you're looking at

01:23:05 --> 01:23:15
is trying to make human-level AI I it's

01:23:11 --> 01:23:19
hard it's challenging it's ambitious to

01:23:14 --> 01:23:21
say that's the goal because for decades

01:23:18 --> 01:23:27
we haven't done it it's extraordinarily

01:23:20 --> 01:23:29
hard it it is less difficult in some

01:23:26 --> 01:23:33
ways to constrain it yourself down to a

01:23:28 --> 01:23:35
single problem that having been said I'm

01:23:32 --> 01:23:37
not very good at making a car drive

01:23:34 --> 01:23:40
itself in some ways that's a simpler

01:23:36 --> 01:23:42
problem it's great at challenging it of

01:23:39 --> 01:23:45
itself and it'll have great impact on

01:23:41 --> 01:23:48
humanity it's a great problem to work on

01:23:44 --> 01:23:53
human level AI is huge it's not even

01:23:47 --> 01:23:53
well-defined as a problem and so

01:23:52 --> 01:24:01
what's the strength here bravery

01:23:56 --> 01:24:06
stupidity in the face of failure

01:24:00 --> 01:24:10
silience over time keeping alive this

01:24:05 --> 01:24:12
idea of trying to reproduce a level of

01:24:09 --> 01:24:13
human intelligence that's more general I

01:24:11 --> 01:24:15
don't know if that's a very satisfactory

01:24:12 --> 01:24:21
answer for you

01:24:14 --> 01:24:26
downside home runs are fairly rare and

01:24:20 --> 01:24:29
by home run I mean a system that finds

01:24:25 --> 01:24:32
its way to the the general populace to

01:24:28 --> 01:24:34
the marketplace I'd mentioned Bonnie

01:24:31 --> 01:24:36
Johns specifically because you know this

01:24:33 --> 01:24:38
twenty thirty years of research and

01:24:35 --> 01:24:40
then she found a way that actually makes

01:24:37 --> 01:24:42
a whole lot of sense under direct

01:24:39 --> 01:24:43
application so it was a lot of a lot of

01:24:41 --> 01:24:45
years of basic research a lot of

01:24:42 --> 01:24:48
researchers and then there was there was

01:24:44 --> 01:24:52
the big win there what was this one oh

01:24:47 --> 01:24:56
this was a bunny John was a researcher

01:24:51 --> 01:24:59
this was using akhtar models of I gaze

01:24:55 --> 01:25:03
and reaction and so forth to be able to

01:24:58 --> 01:25:09
make predictions about how humans would

01:25:02 --> 01:25:13
use user interfaces so those sorts of

01:25:08 --> 01:25:15
outcomes are rare it it if you work in

01:25:12 --> 01:25:17
AI one of the first things you learn

01:25:14 --> 01:25:21
about is blocks world it's kind of in

01:25:16 --> 01:25:24
the classic AI textbook I will tell you

01:25:20 --> 01:25:25
I've worked on that problem at about

01:25:23 --> 01:25:28
hree different variants I've gone to

01:25:24 --> 01:25:30
many conferences where presentations

01:25:27 --> 01:25:33
have been made about blocks world which

01:25:29 --> 01:25:36
is to say we're good progress is being

01:25:32 --> 01:25:37
made but the way you end up thinking

01:25:35 --> 01:25:40
about is it really really small

01:25:36 --> 01:25:42
constrained problems ironically you you

01:25:39 --> 01:25:43
have this big vision but in order to

01:25:41 --> 01:25:49
make progress that ends up being on

01:25:42 --> 01:25:51
moving blocks on a table and so it's

01:25:48 --> 01:25:55
a big challenge I just think it'll

01:25:50 --> 01:25:57
take a lot of time the I'll say the

01:25:54 --> 01:26:00
other thing they haven't we haven't

01:25:56 --> 01:26:02
really gotten to although I brought up

01:25:59 --> 01:26:05
spawn and I brought up Sigma

01:26:01 --> 01:26:08
n idea of how to scale this thing

01:26:04 --> 01:26:11
something I like about deep learning is

01:26:07 --> 01:26:13
just some extent with lots of asterisks

01:26:10 --> 01:26:15
and 10,000 foot view it's kind of like

01:26:12 --> 01:26:17
well we've gotten this far all right

01:26:14 --> 01:26:18
let's just provided different inputs

01:26:16 --> 01:26:19
different outputs and we'll have some

01:26:17 --> 01:26:21
tricks on the middle and suddenly you

01:26:18 --> 01:26:22
have you know end to end deep learning

01:26:20 --> 01:26:25
of a bigger problem and a bigger problem

01:26:21 --> 01:26:27
there's a way to see how this expands

01:26:24 --> 01:26:30
given enough data given enough computing

01:26:26 --> 01:26:33
and incremental advances when it comes

01:26:29 --> 01:26:35
to soar it takes not only a big idea but

01:26:32 --> 01:26:37
it takes a lot of software engineering

01:26:34 --> 01:26:39
to integrate it there's a lot of

01:26:36 --> 01:26:44
constraints built into it it slows it

01:26:38 --> 01:26:45
down so something like Sigma is oh well

01:26:43 --> 01:26:47
I can change a little bit of the

01:26:44 --> 01:26:49
configuration of the graph I can use

01:26:46 --> 01:26:51
variants on the algorithm boom it's

01:26:48 --> 01:26:53
integrated I can experiment fairly

01:26:50 --> 01:26:56
quickly so starting with that sort of

01:26:52 --> 01:26:59
infrastructure does not give you the

01:26:55 --> 01:27:00
constraint you kind of want with your

01:26:58 --> 01:27:02
big picture vision of going towards

01:26:59 --> 01:27:04
human level AI but in terms of being

01:27:01 --> 01:27:06
able to be agile in your research it's

01:27:03 --> 01:27:12
kind of incredible Izzie

01:27:05 --> 01:27:14
thank you you'd mention that ideas such

01:27:11 --> 01:27:16
as base level decay at these techniques

01:27:13 --> 01:27:18
they were based their original

01:27:15 --> 01:27:21
inspirations were based off of human

01:27:17 --> 01:27:23
cognition and and because humans can't

01:27:20 --> 01:27:25
remember everything so were there any

01:27:22 --> 01:27:28
instances of the other way around where

01:27:24 --> 01:27:31
some discovery in cognitive modeling

01:27:27 --> 01:27:36
fueled it another discovery in cognitive

01:27:30 --> 01:27:39
science so what one thing I'm gonna

01:27:35 --> 01:27:40
point out and your question was based on

01:27:38 --> 01:27:43
the decay with respect to human

01:27:39 --> 01:27:46
cognition the study actually was let's

01:27:42 --> 01:27:50
look at text and properties of text and

01:27:45 --> 01:27:54
use that to then make predictions about

01:27:49 --> 01:27:57
what must be true about human cognition

01:27:53 --> 01:28:00
so John Anderson and the other

01:27:56 --> 01:28:04
esearchers looked at believe it was New

01:27:59 --> 01:28:04
York Times articles

01:28:03 --> 01:28:10
his Oh John Anderson's emails and I'm

01:28:07 --> 01:28:14
trying to remember what the third I

01:28:09 --> 01:28:16
think it was parents utterances with

01:28:13 --> 01:28:18
eir kids or something like this it was

01:28:15 --> 01:28:22
actually looking at text corpora and the

01:28:17 --> 01:28:26
words that were occurring in at varying

01:28:21 --> 01:28:30
frequencies that that analysis that

01:28:25 --> 01:28:33
rational analysis actually led to models

01:28:29 --> 01:28:36
that got integrated within the act arc

01:28:32 --> 01:28:38
hitecture that then became validated

01:28:35 --> 01:28:40
through multiple trials that then became

01:28:37 --> 01:28:44
validated with respect to MRI scans and

01:28:39 --> 01:28:47
is now being used to both do study back

01:28:43 --> 01:28:49
with humans but also develop systems

01:28:46 --> 01:28:51
that interact well with humans so I

01:28:48 --> 01:29:00
think that in and of itself ends up

01:28:50 --> 01:29:04
being an example it's a cheat but the

01:28:59 --> 01:29:08
UAV the soar UAV system I believe is a

01:29:03 --> 01:29:13
single robot that has multi multiple

01:29:07 --> 01:29:16
agents running on it so where is this I

01:29:12 --> 01:29:19
got it off your website ok but either

01:29:15 --> 01:29:21
way your systems allow for multi agents

01:29:18 --> 01:29:24
ok so my question is how are you

01:29:20 --> 01:29:28
preventing them from converging with new

01:29:23 --> 01:29:30
data and are you changing what they're

01:29:27 --> 01:29:33
forgetting selectively as one of those

01:29:29 --> 01:29:35
ways so I'll say yes you can have multi

01:29:32 --> 01:29:39
agent source systems on a single system

01:29:34 --> 01:29:43
on multiple systems there's not any real

01:29:38 --> 01:29:44
strong theory that relates to

01:29:42 --> 01:29:46
multi-agent systems so there's no real

01:29:43 --> 01:29:48
constraint there that you can come up

01:29:45 --> 01:29:53
with a protocol for them interacting

01:29:47 --> 01:29:55
each one is going to have its own set of

01:29:52 --> 01:29:57
memories set of knowledge there really

01:29:54 --> 01:30:00
is no constraint on you being able to

01:29:56 --> 01:30:02
communicate like you would if it were

01:29:59 --> 01:30:04
any other system interacting with soar

01:30:01 --> 01:30:09
so I don't really think I have a great

01:30:03 --> 01:30:10
answer for it so that is to say if you

01:30:08 --> 01:30:12
had goo

01:30:09 --> 01:30:14
Theory's good algorithms about how

01:30:11 --> 01:30:19
multi-agent systems work and how they

01:30:13 --> 01:30:22
can bring knowledge together form a

01:30:18 --> 01:30:24
fusion sort of way it might be something

01:30:21 --> 01:30:26
that you could bring to a multi agent

01:30:23 --> 01:30:29
source system but there's nothing really

01:30:25 --> 01:30:30
there to help you there's no mechanisms

01:30:28 --> 01:30:34
there really to help you do that any

01:30:29 --> 01:30:36
better than you would otherwise and you

01:30:33 --> 01:30:38
would have to kind of constraints of

01:30:35 --> 01:30:40
your representations the process as to

01:30:37 --> 01:30:41
what it has fixed in terms of its sort

01:30:39 --> 01:30:46
of memory and its sort of processing

01:30:40 --> 01:30:46
cycle thank you

01:30:45 --> 01:30:50
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
