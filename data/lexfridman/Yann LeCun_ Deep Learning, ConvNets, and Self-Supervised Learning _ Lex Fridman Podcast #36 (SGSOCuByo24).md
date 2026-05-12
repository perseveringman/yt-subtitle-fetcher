---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "SGSOCuByo24"
title: "Yann LeCun: Deep Learning, ConvNets, and Self-Supervised Learning | Lex Fridman Podcast #36"
video_url: "https://www.youtube.com/watch?v=SGSOCuByo24"
thumbnail_url: "https://i.ytimg.com/vi/SGSOCuByo24/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=SGSOCuByo24"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-08-31T15:55:16.000Z"
upload_date: "2019-08-31"
duration_seconds: 4558
duration_human: "1:15:58"
view_count: 203145
like_count: 4711
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:06:30.624Z"
---

# Yann LeCun: Deep Learning, ConvNets, and Self-Supervised Learning | Lex Fridman Podcast #36

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=SGSOCuByo24
- video_id: SGSOCuByo24
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-08-31T15:55:16.000Z
- upload_date: 2019-08-31
- duration: 1:15:58
- view_count: 203145
- like_count: 4711
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:08
Jana kun he's considered to be one of

00:00:04 --> 00:00:10
the fathers of deep learning which if

00:00:07 --> 00:00:11
you've been hiding under a rock is the

00:00:09 --> 00:00:13
recent revolution in AI that's

00:00:10 --> 00:00:15
captivated the world with the

00:00:12 --> 00:00:18
possibility of what machines can learn

00:00:14 --> 00:00:20
from data he's a professor in New York

00:00:17 --> 00:00:24
University a vice president and chief AI

00:00:19 --> 00:00:26
scientist a Facebook & Co recipient of

00:00:23 --> 00:00:29
the Turing Award for his work on deep

00:00:25 --> 00:00:30
learning he's probably best known as the

00:00:28 --> 00:00:33
founding father of convolutional neural

00:00:29 --> 00:00:35
networks in particular their application

00:00:32 --> 00:00:39
to optical character recognition and the

00:00:34 --> 00:00:42
famed M NIST data set he is also an

00:00:38 --> 00:00:44
outspoken personality unafraid to speak

00:00:41 --> 00:00:47
his mind in a distinctive French accent

00:00:43 --> 00:00:48
and explore provocative ideas both in

00:00:46 --> 00:00:52
the rigorous medium of academic research

00:00:47 --> 00:00:54
and the somewhat less rigorous medium of

00:00:51 --> 00:00:56
Twitter and Facebook this is the

00:00:53 --> 00:00:59
artificial intelligence podcast if you

00:00:55 --> 00:01:01
enjoy it subscribe on YouTube give it

00:00:58 --> 00:01:03
five stars on iTunes support and on

00:01:00 --> 00:01:05
patreon we're simply gonna equip me on

00:01:02 --> 00:01:09
Twitter Alex Friedman spelled the Fri D

00:01:04 --> 00:01:14
ma N and now here's my conversation with

00:01:08 --> 00:01:16
Yann Laocoon you said that 2001 Space

00:01:13 --> 00:01:20
Odyssey is one of your favorite movies

00:01:15 --> 00:01:22
Hal 9000 decides to get rid of the

00:01:19 --> 00:01:26
astronauts for people haven't seen the

00:01:21 --> 00:01:30
movie spoiler alert because he it she

00:01:25 --> 00:01:32
believes that the astronauts they will

00:01:29 --> 00:01:35
interfere with the mission do you see

00:01:31 --> 00:01:38
how is flawed in some fundamental way or

00:01:34 --> 00:01:42
even evil or did he do the right thing

00:01:37 --> 00:01:45
neither there's no notion of evil in

00:01:41 --> 00:01:47
that in that context other than the fact

00:01:44 --> 00:01:50
hat people die but it was an example of

00:01:46 --> 00:01:52
what people call value misalignment

00:01:49 --> 00:01:55
right you give an objective to a machine

00:01:51 --> 00:01:57
and the Machine strives to achieve this

00:01:54 --> 00:01:59
objective and if you don't put any

00:01:56 --> 00:02:01
constraints on this objective like don't

00:01:58 --> 00:02:02
kill people and don't do things like

00:02:00 --> 00:02:06
this

00:02:01 --> 00:02:08
the Machine given the power will do

00:02:05 --> 00:02:10
stupid things just to achieve this dis

00:02:07 --> 00:02:12
objective or damaging things to achieve

00:02:09 --> 00:02:14
its objective it's a little bit like we

00:02:11 --> 00:02:21
are used to this in the context of human

00:02:13 --> 00:02:22
society we we put in place laws to

00:02:20 --> 00:02:24
prevent people from doing bad things

00:02:21 --> 00:02:27
because fantasy did we do those bad

00:02:23 --> 00:02:30
things right so we have to shave their

00:02:26 --> 00:02:32
cost function the objective function if

00:02:29 --> 00:02:34
you want through laws to kind of correct

00:02:31 --> 00:02:38
an education obviously to sort of

00:02:33 --> 00:02:40
correct for for those so maybe just

00:02:37 --> 00:02:45
pushing a little further on on that

00:02:39 --> 00:02:47
point how you know there's a mission

00:02:44 --> 00:02:49
there's a this fuzziness around the

00:02:46 --> 00:02:54
ambiguity around what the actual mission

00:02:48 --> 00:02:56
is but you know do you think that there

00:02:53 --> 00:02:59
will be a time from a utilitarian

00:02:55 --> 00:03:01
perspective or an AI system where it is

00:02:58 --> 00:03:03
not misalignment where it is alignment

00:03:00 --> 00:03:05
for the greater good of society that

00:03:02 --> 00:03:07
kneei system will make decisions that

00:03:04 --> 00:03:11
are difficult well that's the trick I

00:03:06 --> 00:03:12
mean eventually we'll have to figure out

00:03:10 --> 00:03:14
how to do this and again we're not

00:03:11 --> 00:03:16
starting from scratch because we've been

00:03:13 --> 00:03:16
doing this with humans for four

00:03:15 --> 00:03:19
millennia

00:03:15 --> 00:03:21
so designing objective functions for

00:03:18 --> 00:03:24
people is something that we know how to

00:03:20 --> 00:03:27
do and we don't do it by you know

00:03:23 --> 00:03:31
programming things although the legal

00:03:26 --> 00:03:33
code is called code so that tells you

00:03:30 --> 00:03:34
something and it's actually the design

00:03:32 --> 00:03:36
of an object you function that's really

00:03:33 --> 00:03:38
what legal code is right it tells you

00:03:35 --> 00:03:40
can do it what you can't do if you

00:03:37 --> 00:03:44
do it you pay that much that's that's an

00:03:39 --> 00:03:46
objective function so there is this idea

00:03:43 --> 00:03:47
somehow that it's a new thing for people

00:03:45 --> 00:03:49
to try to design objective functions are

00:03:46 --> 00:03:50
aligned with the common good but no

00:03:48 --> 00:03:52
we've been writing laws for millennia

00:03:49 --> 00:03:55
nd that's exactly what it is

00:03:51 --> 00:04:00
o this that's where you know the

00:03:54 --> 00:04:02
science of lawmaking and and computer

00:03:59 --> 00:04:05
science will come together will come

00:04:01 --> 00:04:08
together so it's nothing there's nothing

00:04:04 --> 00:04:10
special about how or a I systems is just

00:04:07 --> 00:04:11
he continuation of tools used to make

00:04:09 --> 00:04:14
some of these difficult ethical

00:04:10 --> 00:04:16
judgments that laws make yeah and we and

00:04:13 --> 00:04:19
we have systems like this already that

00:04:15 --> 00:04:21
you know make many decisions for

00:04:18 --> 00:04:23
ourselves in society that you know need

00:04:20 --> 00:04:25
to be designed in a way that they like

00:04:22 --> 00:04:27
you know rules about things that

00:04:24 --> 00:04:29
sometimes sometimes have bad side

00:04:26 --> 00:04:31
ffects and we have to be flexible

00:04:28 --> 00:04:32
nough about those rules so that they

00:04:30 --> 00:04:35
can be broken when it's obvious that

00:04:31 --> 00:04:37
hey shouldn't be applied so you don't

00:04:34 --> 00:04:39
see this on the camera here but all the

00:04:36 --> 00:04:42
decorations in this room is all pictures

00:04:38 --> 00:04:44
from 2001 a Space Odyssey Wow

00:04:41 --> 00:04:50
and by accident or is there a lot about

00:04:43 --> 00:04:53
accident it's by design Wow so if you

00:04:49 --> 00:04:56
were if you were to build hell 10,000 so

00:04:52 --> 00:04:59
an improvement of Hal 9000 what would

00:04:55 --> 00:05:02
you improve well first of all I wouldn't

00:04:58 --> 00:05:04
ask you to hold secrets and tell lies

00:05:01 --> 00:05:06
because that's really what breaks it in

00:05:03 --> 00:05:08
the end that's the the fact that it's

00:05:05 --> 00:05:10
asking itself questions about the

00:05:07 --> 00:05:12
purpose of the mission and it's you know

00:05:09 --> 00:05:14
pieces things together that it's heard

00:05:11 --> 00:05:15
you know all the secrecy of the

00:05:13 --> 00:05:18
preparation of the mission and the fact

00:05:14 --> 00:05:19
hat it was discovery and on the lunar

00:05:17 --> 00:05:23
surface that really was kept secret and

00:05:19 --> 00:05:25
one part of Hal's memory knows this

00:05:22 --> 00:05:27
and the other part is does not know it

00:05:24 --> 00:05:29
and it's supposed to not tell anyone and

00:05:26 --> 00:05:32
that creates a internal conflict do you

00:05:28 --> 00:05:35
think there's never should be a set of

00:05:31 --> 00:05:39
things that night AI system should not

00:05:34 --> 00:05:41
be allowed like a set of facts that

00:05:38 --> 00:05:45
should not be shared with the human

00:05:40 --> 00:05:47
operators well I think no I think the I

00:05:44 --> 00:05:53
think it should be a bit like in the

00:05:46 --> 00:05:55
design of autonomous AI systems there

00:05:52 --> 00:05:59
should be the equivalent of you know the

00:05:54 --> 00:06:02
the oath that hypocrite Oh calm

00:05:58 --> 00:06:04
yourself yeah that doctors sign up to

00:06:01 --> 00:06:06
right so the certain thing certain rule

00:06:03 --> 00:06:09
said that that you have to abide by and

00:06:05 --> 00:06:11
we can sort of hardwire this into into

00:06:08 --> 00:06:12
ur into our machines to kind of make

00:06:10 --> 00:06:15
sure they don't go so I'm not you know

00:06:11 --> 00:06:17
advocate of the the 303 dollars of

00:06:14 --> 00:06:19
Robotics you know the as you move kind

00:06:16 --> 00:06:22
of thing because I don't think it's

00:06:18 --> 00:06:25
practical but but you know some some

00:06:21 --> 00:06:29
level of of limits but but to be clear

00:06:24 --> 00:06:32
this is not these are not questions that

00:06:28 --> 00:06:34
are kind of really worth asking today

00:06:31 --> 00:06:36
because we just don't have the

00:06:33 --> 00:06:37
technology to do this we don't we don't

00:06:35 --> 00:06:38
have a ton of missing teller machines we

00:06:36 --> 00:06:39
have intelligent machines so my

00:06:37 --> 00:06:42
intelligent machines that are very

00:06:38 --> 00:06:44
specialized but they don't they don't

00:06:41 --> 00:06:46
really sort of satisfy an objective

00:06:43 --> 00:06:50
they're just you know kind of trained to

00:06:45 --> 00:06:52
do one thing so until we have some idea

00:06:49 --> 00:06:55
for design of a full-fledged autonomous

00:06:51 --> 00:06:56
intelligent system asking the question

00:06:54 --> 00:06:59
of how we design use objective I think

00:06:55 --> 00:07:01
is a little a little too abstract it's a

00:06:58 --> 00:07:05
little tough rat there's useful elements

00:07:00 --> 00:07:09
to it in that it helps us understand our

00:07:04 --> 00:07:12
own ethical codes humans so even just as

00:07:08 --> 00:07:16
a thought experiment if you imagine that

00:07:11 --> 00:07:18
in a GI system is here today how would

00:07:15 --> 00:07:20
we program it is a kind of nice thought

00:07:17 --> 00:07:24
experiment of constructing how should we

00:07:19 --> 00:07:25
have a law have a system of laws far as

00:07:23 --> 00:07:28
humans

00:07:24 --> 00:07:30
it's just a nice practical tool and I

00:07:27 --> 00:07:33
think there's echoes of that idea too in

00:07:29 --> 00:07:34
the AI systems left today it don't have

00:07:32 --> 00:07:36
to be that intelligent

00:07:33 --> 00:07:39
yeah like autonomous vehicles there's

00:07:35 --> 00:07:40
these things start creeping in that were

00:07:38 --> 00:07:44
thinking about but certainly they

00:07:39 --> 00:07:48
shouldn't be framed as as hell yeah

00:07:43 --> 00:07:51
looking back what is the most I'm sorry

00:07:47 --> 00:07:53
if it's a silly question but what is the

00:07:50 --> 00:07:56
most beautiful or surprising idea and

00:07:52 --> 00:07:57
eep learning or AI in general that

00:07:55 --> 00:08:01
you've ever come across sort of

00:07:56 --> 00:08:03
personally well you said back and and

00:08:00 --> 00:08:03
just had this kind of wow that's pretty

00:08:02 --> 00:08:06
cool

00:08:02 --> 00:08:08
moment that's nice well surprising I

00:08:05 --> 00:08:16
don't know if it's an idea rather than a

00:08:07 --> 00:08:18
sort of empirical fact the fact that you

00:08:15 --> 00:08:21
gigantic neural nets trying to train

00:08:17 --> 00:08:24
them on you know relatively small

00:08:20 --> 00:08:26
amounts of data relatively with the

00:08:23 --> 00:08:28
caste grid in the center that it

00:08:25 --> 00:08:31
actually works breaks everything you

00:08:27 --> 00:08:33
read in every textbook right every pre

00:08:30 --> 00:08:35
deep learning textbook that told you you

00:08:32 --> 00:08:38
need to have fewer parameters and you

00:08:34 --> 00:08:39
have data samples you know if you have

00:08:37 --> 00:08:41
non-convex objective function you have

00:08:38 --> 00:08:43
no guarantee of convergence you know all

00:08:40 --> 00:08:44
the things that you read in textbook and

00:08:42 --> 00:08:46
they tell you stay away from this and

00:08:43 --> 00:08:49
they were all wrong huge number of

00:08:45 --> 00:08:52
parameters non-convex and somehow which

00:08:48 --> 00:08:55
is very relative to the number of

00:08:51 --> 00:08:57
parameters data it's able to learn

00:08:54 --> 00:09:01
anything right does that surprise you

00:08:56 --> 00:09:03
today well it it was kind of obvious to

00:09:00 --> 00:09:05
me before I knew anything that that's

00:09:02 --> 00:09:07
that this is a good idea and then it

00:09:04 --> 00:09:08
became surprising that it worked

00:09:06 --> 00:09:12
because I started reading those text

00:09:07 --> 00:09:14
books okay so okay you talk to the

00:09:11 --> 00:09:16
intuition of why was obviously if you

00:09:13 --> 00:09:18
remember well okay so the intuition was

00:09:15 --> 00:09:21
it's it's sort of like you know those

00:09:17 --> 00:09:24
people in the late 19th century who

00:09:20 --> 00:09:26
proved that heavier than than air flight

00:09:23 --> 00:09:30
was impossible right and of course you

00:09:25 --> 00:09:32
have birds right they do fly and so on

00:09:29 --> 00:09:34
the face of it it it's obviously wrong

00:09:31 --> 00:09:37
as an empirical question right and so we

00:09:33 --> 00:09:39
have the same kind of thing that you

00:09:36 --> 00:09:41
know the we know that the brain works we

00:09:38 --> 00:09:43
don't know how but we know it works and

00:09:40 --> 00:09:44
we know it's a large network of neurons

00:09:42 --> 00:09:47
and interaction and the learning takes

00:09:43 --> 00:09:48
place by changing the connection so kind

00:09:46 --> 00:09:50
of getting this level of inspiration

00:09:47 --> 00:09:55
without copying the details but sort of

00:09:49 --> 00:09:55
trying to derive basic principles

00:09:54 --> 00:09:59
you know that kind of gives you a clue

00:09:56 --> 00:10:01
as to which direction to go there's also

00:09:58 --> 00:10:03
the idea somehow that I've been

00:10:00 --> 00:10:06
convinced of since I was an undergrad

00:10:02 --> 00:10:09
that even before that intelligence is

00:10:05 --> 00:10:11
inseparable from running so you the idea

00:10:08 --> 00:10:13
somehow that you can create an

00:10:10 --> 00:10:17
intelligent machine by basically

00:10:12 --> 00:10:20
programming for me was a non-starter you

00:10:16 --> 00:10:23
know from the start every intelligent

00:10:19 --> 00:10:26
ity that we know about arrives at

00:10:22 --> 00:10:27
his intelligence to learning so

00:10:25 --> 00:10:31
learning you know machine learning was

00:10:26 --> 00:10:35
completely obvious path also because I'm

00:10:30 --> 00:10:36
lazy so you know it's automate basically

00:10:34 --> 00:10:41
everything and learning is the

00:10:35 --> 00:10:44
automation of intelligence right so do

00:10:40 --> 00:10:46
you think so what is learning then what

00:10:43 --> 00:10:50
falls under learning because do you

00:10:45 --> 00:10:53
think of reasoning is learning where

00:10:49 --> 00:10:56
asoning is certainly a consequence of

00:10:52 --> 00:10:58
learning as well just like other

00:10:55 --> 00:11:00
functions of of the brain

00:10:57 --> 00:11:02
the big question about reasoning is how

00:10:59 --> 00:11:04
do you make reasoning compatible with

00:11:01 --> 00:11:06
gradient based learning do you think

00:11:03 --> 00:11:07
neural networks can be made to reason

00:11:05 --> 00:11:12
yes that there's no question about that

00:11:06 --> 00:11:13
again we have a good example right the

00:11:11 --> 00:11:16
question is is how so the question is

00:11:12 --> 00:11:18
how much prior structure you have to put

00:11:15 --> 00:11:20
in the neural net so that something like

00:11:17 --> 00:11:23
human reasoning will emerge from it you

00:11:19 --> 00:11:26
know from running another question is

00:11:22 --> 00:11:28
all of our kind of model of what

00:11:25 --> 00:11:31
reasoning is that are based on logic are

00:11:27 --> 00:11:33
discrete and and and are therefore

00:11:30 --> 00:11:35
incompatible with gradient based

00:11:32 --> 00:11:37
learning and I was very strong believer

00:11:34 --> 00:11:40
in this idea Grandin baserunning I don't

00:11:36 --> 00:11:42
believe that other types of learning

00:11:39 --> 00:11:43
that don't use kind of gradient

00:11:41 --> 00:11:45
information if you want so you don't

00:11:42 --> 00:11:46
like discrete mathematics you don't like

00:11:44 --> 00:11:48
anything discrete

00:11:45 --> 00:11:50
well that's it's not that I don't like

00:11:47 --> 00:11:52
it it's just that it's it's incompatible

00:11:49 --> 00:11:54
with learning and I'm a big fan of

00:11:51 --> 00:11:57
running right so in fact that's perhaps

00:11:53 --> 00:11:59
one reason why deep learning has been

00:11:56 --> 00:12:00
kind of looked at with suspicion by a

00:11:58 --> 00:12:03
lot of computer scientists because the

00:11:59 --> 00:12:04
math is very different the method you

00:12:02 --> 00:12:08
se for deep running you know we kind of

00:12:03 --> 00:12:10
as more to do with you know cybernetics

00:12:07 --> 00:12:12
the kind of math you do in electrical

00:12:09 --> 00:12:14
engineering then the kind of math you

00:12:11 --> 00:12:16
doing computer science and and you know

00:12:13 --> 00:12:19
nothing in in machine learning is exact

00:12:15 --> 00:12:21
right computer science is all about sort

00:12:18 --> 00:12:23
of you know obviously compulsive

00:12:20 --> 00:12:25
attention to details of like you know

00:12:22 --> 00:12:27
every index has to be right and you can

00:12:24 --> 00:12:30
prove that an algorithm is correct right

00:12:26 --> 00:12:35
machine learning is the science of

00:12:29 --> 00:12:38
sloppiness really that's beautiful so

00:12:34 --> 00:12:41
kay maybe let's feel around in the dark

00:12:37 --> 00:12:46
of what is a neural network that reasons

00:12:40 --> 00:12:51
or a system that is works with

00:12:45 --> 00:12:54
continuous functions that's able to do

00:12:50 --> 00:12:56
build knowledge however we think about

00:12:53 --> 00:12:59
reasoning builds on previous knowledge

00:12:55 --> 00:13:02
build on extra knowledge create new

00:12:58 --> 00:13:04
knowledge generalized outside of any

00:13:01 --> 00:13:07
training set ever built what does that

00:13:03 --> 00:13:10
look like if yeah maybe

00:13:06 --> 00:13:12
do you have Inklings of thoughts of what

00:13:09 --> 00:13:14
hat might look like well yeah I mean

00:13:11 --> 00:13:17
yes or no if I had precise ideas about

00:13:13 --> 00:13:18
his I think you know we'd be building

00:13:16 --> 00:13:21
it right now but and there are people

00:13:17 --> 00:13:23
working on this or whose main research

00:13:20 --> 00:13:25
interest is actually exactly that right

00:13:22 --> 00:13:29
so what you need to have is a working

00:13:24 --> 00:13:32
memory so you need to have some device

00:13:28 --> 00:13:35
if you want some subsystem they can

00:13:31 --> 00:13:39
store a relatively large number of

00:13:34 --> 00:13:42
actual episodic information for you

00:13:38 --> 00:13:44
know a reasonable amount of time so you

00:13:41 --> 00:13:46
know in the in the brain for example

00:13:43 --> 00:13:51
it kind of three main types of memory

00:13:45 --> 00:13:55
one is the sort of memory of the the

00:13:50 --> 00:13:57
state of your cortex and that sort of

00:13:54 --> 00:13:58
disappears within 20 seconds you can't

00:13:56 --> 00:14:01
remember things for more than about 20

00:13:57 --> 00:14:03
seconds or a minute if if you don't have

00:14:00 --> 00:14:05
any other form of memory the second type

00:14:02 --> 00:14:08
of memory which is longer term is short

00:14:04 --> 00:14:09
erm is the hippocampus so you can you

00:14:07 --> 00:14:11
know you came into this building you

00:14:08 --> 00:14:15
remember whether where the the exit is

00:14:10 --> 00:14:17
where the elevators are you have some

00:14:14 --> 00:14:19
map of that building that's stored in

00:14:16 --> 00:14:21
your hippocampus you might remember

00:14:18 --> 00:14:21
something about what I said you know if

00:14:20 --> 00:14:23
you

00:14:20 --> 00:14:26
minutes ago and forgot all our stars

00:14:22 --> 00:14:28
being raised but you know but that does

00:14:25 --> 00:14:30
not work in your hippocampus and then

00:14:27 --> 00:14:34
the the longer term memory is in the

00:14:29 --> 00:14:35
synapse the synapses right so what you

00:14:33 --> 00:14:37
need if you want for a system that's

00:14:34 --> 00:14:41
capable reasoning is that you want the

00:14:36 --> 00:14:43
hippocampus like thing right and that's

00:14:40 --> 00:14:45
what people have tried to do with memory

00:14:42 --> 00:14:47
networks and you know no Turing machines

00:14:44 --> 00:14:49
and stuff like that right and and now

00:14:46 --> 00:14:52
ith transformers which have sort of a

00:14:48 --> 00:14:53
memory in their kind of self attention

00:14:51 --> 00:14:57
system you can you can think of it this

00:14:52 --> 00:15:00
way so so that's one element you need

00:14:56 --> 00:15:06
another thing you need is some sort of

00:14:59 --> 00:15:08
network that can access this memory get

00:15:05 --> 00:15:10
an information back and then kind of

00:15:07 --> 00:15:12
crunch on it and then do this

00:15:09 --> 00:15:17
iteratively multiple times because a

00:15:11 --> 00:15:19
chain of reasoning is a process by which

00:15:16 --> 00:15:21
you you you can you update your

00:15:18 --> 00:15:23
knowledge about the state of the world

00:15:20 --> 00:15:25
about you know what's gonna happen etc

00:15:22 --> 00:15:28
and that there has to be this sort of

00:15:24 --> 00:15:30
recurrent operation basically and you

00:15:27 --> 00:15:33
think that kind of if we think about a

00:15:29 --> 00:15:35
transformer so that seems to be too

00:15:32 --> 00:15:38
small to contain the knowledge that's

00:15:34 --> 00:15:40
to represent the knowledge as

00:15:37 --> 00:15:41
containing Wikipedia for example but

00:15:39 --> 00:15:43
ransformer doesn't have this idea of

00:15:40 --> 00:15:45
recurrence it's got a fixed number of

00:15:42 --> 00:15:47
layers and that's number of steps that

00:15:44 --> 00:15:49
you know limits basically it's a

00:15:46 --> 00:15:52
representation but recurrence would

00:15:48 --> 00:15:55
build on the knowledge somehow I mean

00:15:51 --> 00:15:58
yeah it would evolve the knowledge and

00:15:54 --> 00:16:00
expand the amount of information perhaps

00:15:57 --> 00:16:03
or useful information within that

00:15:59 --> 00:16:05
knowledge yeah but is this something

00:16:02 --> 00:16:07
that just can emerge with size because

00:16:04 --> 00:16:09
it seems like everything we have now is

00:16:06 --> 00:16:12
just no it's not it's not it's not clear

00:16:08 --> 00:16:14
how you access and right into an

00:16:11 --> 00:16:16
associative memory in efficient way I

00:16:13 --> 00:16:17
mean sort of the original memory network

00:16:15 --> 00:16:20
maybe had something like the right

00:16:16 --> 00:16:22
architecture but if you try to scale up

00:16:19 --> 00:16:24
a memory network so that the memory

00:16:21 --> 00:16:27
contains all we keep here it doesn't

00:16:23 --> 00:16:30
quite work right so so this is a need

00:16:26 --> 00:16:31
for new ideas there okay but it's not

00:16:29 --> 00:16:33
he only form of reasoning so there's

00:16:30 --> 00:16:35
another form of reasoning which is true

00:16:32 --> 00:16:40
which is very classical so in

00:16:34 --> 00:16:42
some types of AI and it's based on let's

00:16:39 --> 00:16:46
call it energy minimization okay so you

00:16:41 --> 00:16:51
have some sort of objective some energy

00:16:45 --> 00:16:54
function that represents the the the

00:16:50 --> 00:16:55
quality or the negative quality okay

00:16:53 --> 00:16:58
energy goes up when things get bad and

00:16:54 --> 00:17:01
they get low when things get good so

00:16:57 --> 00:17:05
let's say you you want to figure out you

00:17:00 --> 00:17:09
know what gestures do I need to to do to

00:17:04 --> 00:17:11
grab an object or walk out the door if

00:17:08 --> 00:17:13
you have a good model of your own body a

00:17:10 --> 00:17:15
good model of the environment using this

00:17:12 --> 00:17:17
kind of energy minimization you can make

00:17:14 --> 00:17:21
a you can make you can do planning and

00:17:16 --> 00:17:22
it's in optimal control it's called it's

00:17:20 --> 00:17:24
called Marie put model predictive

00:17:21 --> 00:17:25
control you have a model of what's gonna

00:17:23 --> 00:17:28
happen in the world as consequence for

00:17:24 --> 00:17:30
your actions and that allows you to buy

00:17:27 --> 00:17:31
energy minimization figure out the

00:17:29 --> 00:17:33
sequence of action that optimizes a

00:17:30 --> 00:17:34
particular objective function which

00:17:32 --> 00:17:36
measures you know minimize the number of

00:17:33 --> 00:17:38
times you're gonna hit something and the

00:17:35 --> 00:17:43
nergy gonna spend doing the gesture and

00:17:37 --> 00:17:44
etc so so that's performer reasoning

00:17:42 --> 00:17:47
planning is a form of reasoning and

00:17:43 --> 00:17:51
perhaps what led to the ability of

00:17:46 --> 00:17:54
humans to reason is the fact that or you

00:17:50 --> 00:17:56
know species you know that appear before

00:17:53 --> 00:17:59
us had to do some sort of planning to be

00:17:55 --> 00:18:01
able to hunt and survive and survive the

00:17:58 --> 00:18:03
winter in particular and so you know

00:18:00 --> 00:18:08
it's the same capacity that you need to

00:18:02 --> 00:18:12
have so in your intuition is if you look

00:18:07 --> 00:18:16
at expert systems in encoding knowledge

00:18:11 --> 00:18:19
as logic systems as graphs in this kind

00:18:15 --> 00:18:22
of way is not a useful way to think

00:18:18 --> 00:18:25
about knowledge graphs are your brittle

00:18:21 --> 00:18:28
or logic representation so basically you

00:18:24 --> 00:18:30
know variables that that have values and

00:18:27 --> 00:18:33
constraint between them that are

00:18:29 --> 00:18:34
presented by rules as well too rigid

00:18:32 --> 00:18:36
and too brittle right so one of the you

00:18:33 --> 00:18:41
know some of the early efforts in that

00:18:35 --> 00:18:44
respect were were to put probabilities

00:18:40 --> 00:18:45
on them so a rule you know you know if

00:18:43 --> 00:18:47
you have this in that symptom you know

00:18:44 --> 00:18:48
you have this disease with that

00:18:46 --> 00:18:50
probability and you should

00:18:47 --> 00:18:52
escribe that antibiotic with that

00:18:49 --> 00:18:55
probability right this my sin system

00:18:51 --> 00:18:59
from the for the 70s and that that's

00:18:54 --> 00:19:01
what that branch of AI led to you know

00:18:58 --> 00:19:04
busy networks in graphical models and

00:19:00 --> 00:19:08
causal inference and vibrational you

00:19:03 --> 00:19:11
know method so so there there is I mean

00:19:07 --> 00:19:12
certainly a lot of interesting work

00:19:10 --> 00:19:14
going on in this area the main issue

00:19:12 --> 00:19:18
with this is is knowledge acquisition

00:19:13 --> 00:19:21
how do you reduce a bunch of data to

00:19:18 --> 00:19:24
graph of this type near relies on the

00:19:20 --> 00:19:27
xpert and a human being to encode at

00:19:23 --> 00:19:31
add knowledge and that's essentially

00:19:26 --> 00:19:33
impractical yeah the question the second

00:19:30 --> 00:19:36
question is do you want to represent

00:19:32 --> 00:19:38
knowledge symbols and you want to

00:19:35 --> 00:19:41
manipulate them with logic and again

00:19:37 --> 00:19:44
that's incomparable we're learning so

00:19:40 --> 00:19:46
ne suggestion with geoff hinton has

00:19:43 --> 00:19:50
been advocating for many decades is

00:19:45 --> 00:19:52
replace symbols by vectors think of it

00:19:49 --> 00:19:54
as pattern of activities in a bunch of

00:19:51 --> 00:19:58
neurons or units or whatever you wanna

00:19:53 --> 00:20:00
call them and replace logic by

00:19:57 --> 00:20:02
continuous functions okay

00:19:59 --> 00:20:07
and that becomes now compatible there's

00:20:01 --> 00:20:09
a very good set of ideas by region in a

00:20:06 --> 00:20:14
paper about 10 years ago by leon go to

00:20:08 --> 00:20:16
n who is here at face book the title of

00:20:13 --> 00:20:18
the paper is for machine learning to

00:20:15 --> 00:20:20
machine reasoning and his idea is that

00:20:17 --> 00:20:22
learning learning system should be able

00:20:19 --> 00:20:24
to manipulate objects that are in the

00:20:21 --> 00:20:26
same space in a space and then put the

00:20:23 --> 00:20:28
result back in the same space so is this

00:20:25 --> 00:20:32
idea of working memory basically and

00:20:27 --> 00:20:34
it's a very enlightening and in the

00:20:31 --> 00:20:37
sense that might learn something like

00:20:33 --> 00:20:41
the simple expert systems

00:20:36 --> 00:20:43
I mean it's with you can learn basic

00:20:40 --> 00:20:45
logic operations there yeah quite

00:20:42 --> 00:20:47
possibly yeah this is a big debate on

00:20:44 --> 00:20:49
sort of how much prior structure you

00:20:46 --> 00:20:51
have to put in for this kind of stuff to

00:20:48 --> 00:20:52
emerge that's the debate I have with

00:20:50 --> 00:20:56
Gary Marcus and people like that yeah

00:20:51 --> 00:20:58
so and the other person so I just

00:20:55 --> 00:21:01
alked to judea pearl mm-hmm well you

00:20:57 --> 00:21:04
mentioned causal inference world

00:21:00 --> 00:21:09
his worry is that the current knew all

00:21:03 --> 00:21:12
networks are not able to learn what

00:21:08 --> 00:21:15
causes what causal inference between

00:21:11 --> 00:21:17
things so I think I think he's right and

00:21:14 --> 00:21:21
wrong about this if he's talking about

00:21:16 --> 00:21:23
he sort of classic type of neural nets

00:21:21 --> 00:21:25
people also didn't worry too much about

00:21:22 --> 00:21:27
his but there's a lot of people now

00:21:24 --> 00:21:28
orking on causal inference and there's

00:21:26 --> 00:21:30
a paper that just came out last week by

00:21:27 --> 00:21:33
Leon Mbutu among others develop his path

00:21:29 --> 00:21:37
and push for other people exactly on

00:21:32 --> 00:21:39
that problem of how do you kind of you

00:21:36 --> 00:21:41
know get a neural net to sort of pay

00:21:38 --> 00:21:46
attention to real causal relationships

00:21:40 --> 00:21:49
which may also solve issues of bias in

00:21:45 --> 00:21:52
data and things like this so I'd like to

00:21:48 --> 00:21:55
read that paper because that ultimately

00:21:51 --> 00:21:59
the challenges also seems to fall back

00:21:54 --> 00:22:03
on the human expert to ultimately decide

00:21:58 --> 00:22:04
causality between things people are not

00:22:02 --> 00:22:06
very good at its direction causality

00:22:03 --> 00:22:08
first of all so first of all you talk to

00:22:05 --> 00:22:10
a physicist and physicists actually

00:22:07 --> 00:22:13
don't believe in causality because look

00:22:09 --> 00:22:15
at the all the busy clause or

00:22:12 --> 00:22:17
microphysics are time reversible so

00:22:14 --> 00:22:18
there is no causality the arrow of time

00:22:16 --> 00:22:21
is not right yeah it's it's as soon as

00:22:17 --> 00:22:23
you start looking at macroscopic systems

00:22:20 --> 00:22:26
where there is unpredictable randomness

00:22:22 --> 00:22:27
where there is clearly an arrow of time

00:22:25 --> 00:22:30
but it's a big mystery in physics

00:22:26 --> 00:22:32
actually well how that emerges is that

00:22:29 --> 00:22:35
emergent or is it part of the

00:22:31 --> 00:22:38
fundamental fabric of reality yeah or is

00:22:34 --> 00:22:39
it bias of intelligent systems that you

00:22:37 --> 00:22:41
know because of the second law of

00:22:38 --> 00:22:44
thermodynamics we perceive a particular

00:22:40 --> 00:22:46
row of time but in fact it's kind of

00:22:43 --> 00:22:48
arbitrary right so yeah physicists

00:22:45 --> 00:22:51
mathematicians they don't care about I

00:22:48 --> 00:22:53
mean the math doesn't care about the

00:22:50 --> 00:22:55
flow of time well certainly certainly

00:22:52 --> 00:22:58
macro physics doesn't people themselves

00:22:54 --> 00:23:01
are not very good at establishing causal

00:22:57 --> 00:23:03
relationships if you ask is I

00:23:00 --> 00:23:07
think it was in one of Seymour Papert

00:23:02 --> 00:23:08
spoken on like children learning you

00:23:06 --> 00:23:11
know he studied with Jean Piaget you

00:23:07 --> 00:23:13
know he's the guy who co-authored the

00:23:10 --> 00:23:14
book perceptron with Marvin Minsky that

00:23:12 --> 00:23:17
kind of killed the first wave

00:23:13 --> 00:23:21
but but he was actually a learning

00:23:16 --> 00:23:23
person he in the sense of studying

00:23:20 --> 00:23:24
learning in humans and machines that's

00:23:22 --> 00:23:28
what he got interested in for scepter on

00:23:23 --> 00:23:33
and he wrote that if you ask a little

00:23:27 --> 00:23:36
kid about what is the cause of the wind

00:23:32 --> 00:23:37
a lot of kids will say they will think

00:23:35 --> 00:23:39
for a while and they'll say oh it's the

00:23:36 --> 00:23:41
branches in the trees they move and

00:23:38 --> 00:23:43
that creates wind right so they get the

00:23:40 --> 00:23:45
causal relationship backwards and it's

00:23:42 --> 00:23:46
because their understanding of the world

00:23:44 --> 00:23:48
and intuitive physics is not that great

00:23:45 --> 00:23:51
right I mean these are like you know

00:23:47 --> 00:23:52
four or five year old kids you know it

00:23:50 --> 00:23:55
gets better and then you understand that

00:23:51 --> 00:23:59
his it can't be right but there are

00:23:54 --> 00:24:01
many things which we can because of our

00:23:58 --> 00:24:04
common sense understanding of things

00:24:00 --> 00:24:06
what people call common sense yeah and

00:24:03 --> 00:24:09
we understanding of physics we can

00:24:05 --> 00:24:10
there's a lot of stuff that we can

00:24:08 --> 00:24:12
figure out causality even with diseases

00:24:09 --> 00:24:16
we can figure out what's not causing

00:24:11 --> 00:24:18
what often there's a lot of mystery of

00:24:15 --> 00:24:21
course but the idea is that you should

00:24:17 --> 00:24:22
be able to encode that into systems it

00:24:20 --> 00:24:24
seems unlikely to be able to figure that

00:24:21 --> 00:24:26
out themselves well whenever we can do

00:24:23 --> 00:24:28
intervention but you know all of

00:24:25 --> 00:24:31
humanity has been completely deluded for

00:24:27 --> 00:24:33
millennia probably since existence about

00:24:30 --> 00:24:35
a very very wrong causal relationship

00:24:32 --> 00:24:37
where whatever you can explain you

00:24:34 --> 00:24:40
attributed to you know some deity some

00:24:36 --> 00:24:42
divinity right and that's a cop-out

00:24:39 --> 00:24:43
hat's the way of saying like I don't

00:24:41 --> 00:24:47
know the cause so you know God did it

00:24:42 --> 00:24:53
right so you mentioned Marvin Minsky and

00:24:46 --> 00:24:56
the irony of you know maybe causing the

00:24:52 --> 00:24:59
first day I winter you were there in the

00:24:55 --> 00:25:00
90s you're there in the 80s of course in

00:24:58 --> 00:25:03
the 90s what do you think people lost

00:24:59 --> 00:25:06
faith and deep learning in the 90s and

00:25:02 --> 00:25:08
found it again a decade later over a

00:25:05 --> 00:25:09
decade later yeah it wasn't called

00:25:07 --> 00:25:11
ethroning yeah it was just called

00:25:08 --> 00:25:15
neural nets you know

00:25:10 --> 00:25:18
yeah they lost interests I mean I think

00:25:14 --> 00:25:19
I would put that around 1995 at least

00:25:17 --> 00:25:20
he machine learning community there was

00:25:18 --> 00:25:23
always a neural net community but it

00:25:19 --> 00:25:23
became

00:25:22 --> 00:25:28
disconnected from sort of ministry

00:25:25 --> 00:25:31
machine owning if you want

00:25:27 --> 00:25:34
here were it was basically electrical

00:25:30 --> 00:25:38
engineering that kept at it and computer

00:25:33 --> 00:25:40
science just gave up give up on neural

00:25:37 --> 00:25:44
nets I don't I don't know you know I was

00:25:39 --> 00:25:47
too close to it to really sort of

00:25:43 --> 00:25:50
analyze it with sort of a unbiased eye

00:25:46 --> 00:25:52
if you want but I would I would I would

00:25:49 --> 00:25:57
make a few guesses so the first

00:25:51 --> 00:25:59
one is at the time neural nets were it

00:25:56 --> 00:26:02
was very hard to make them work in the

00:25:58 --> 00:26:05
sense that you would you know implement

00:26:01 --> 00:26:08
back prop in your favorite language and

00:26:04 --> 00:26:09
that favorite language was not Python it

00:26:07 --> 00:26:11
was not MATLAB it was not any of those

00:26:08 --> 00:26:14
things cuz they didn't exist right you

00:26:10 --> 00:26:18
had to write it in Fortran or C or

00:26:13 --> 00:26:20
something like this right so you would

00:26:17 --> 00:26:22
experiment with it you would probably

00:26:19 --> 00:26:24
make some very basic mistakes like you

00:26:21 --> 00:26:25
know badly initialize your weights make

00:26:23 --> 00:26:26
the network too small because you read

00:26:24 --> 00:26:29
in the textbook you know you don't want

00:26:25 --> 00:26:30
oo many parameters right and of course

00:26:28 --> 00:26:31
you know and you would train on x4

00:26:29 --> 00:26:33
because you didn't have any other data

00:26:30 --> 00:26:35
set to try it on and of course you know

00:26:32 --> 00:26:38
it works half the time so we'd say you

00:26:34 --> 00:26:41
give up also 22 the batch gradient which

00:26:37 --> 00:26:44
you know isn't it sufficient so there's

00:26:40 --> 00:26:46
a lot of bag of tricks that you had to

00:26:43 --> 00:26:48
know to make those things work or you

00:26:45 --> 00:26:50
had to reinvent and a lot of people just

00:26:47 --> 00:26:54
didn't and they just couldn't make it

00:26:49 --> 00:26:57
work so that's one thing the investment

00:26:53 --> 00:26:59
in software platform to be able to kind

00:26:56 --> 00:27:01
of you know display things figure out

00:26:58 --> 00:27:02
why things don't work and I get a good

00:27:00 --> 00:27:04
intuition for how to get them to work

00:27:01 --> 00:27:06
have enough flexibility so you can

00:27:03 --> 00:27:08
create you know network architectures

00:27:05 --> 00:27:10
well completion ads and stuff like that

00:27:07 --> 00:27:11
it was hard yeah when you had to write

00:27:09 --> 00:27:13
verything from scratch and again you

00:27:10 --> 00:27:16
didn't have any Python or MATLAB or

00:27:12 --> 00:27:18
anything right so what I read that sorry

00:27:15 --> 00:27:22
to interrupt but I read he wrote in in

00:27:17 --> 00:27:24
Lisp the first versions of Lynette

00:27:21 --> 00:27:25
accomplished in your networks which by

00:27:23 --> 00:27:28
the way one of my favorite languages

00:27:24 --> 00:27:30
that's how I knew you were legit the

00:27:27 --> 00:27:32
Turing Award whatever this would be

00:27:29 --> 00:27:35
programmed and list that's still my

00:27:31 --> 00:27:36
favorite language but it's not that we

00:27:34 --> 00:27:39
programmed in Lisp it's that we had to

00:27:35 --> 00:27:40
write or this printer printer okay cuz

00:27:38 --> 00:27:42
it's not that's right that's one that

00:27:39 --> 00:27:43
existed so

00:27:41 --> 00:27:46
we wrote a lisp interpreter that we

00:27:42 --> 00:27:48
hooked up to you know back in library

00:27:45 --> 00:27:51
that we wrote also for neural net

00:27:47 --> 00:27:53
competition and then after a few years

00:27:50 --> 00:27:56
around 1991 we invented this idea of

00:27:52 --> 00:27:57
basically having modules that know how

00:27:55 --> 00:27:59
to forward propagate and back propagate

00:27:56 --> 00:28:03
gradients and then interconnecting those

00:27:58 --> 00:28:05
modules in a graph loom but who had made

00:28:02 --> 00:28:07
proposals on this about this in the late

00:28:04 --> 00:28:09
80s and were able to implement this

00:28:06 --> 00:28:13
using all this system eventually we

00:28:08 --> 00:28:14
wanted to use that system to make build

00:28:12 --> 00:28:15
production code for character

00:28:13 --> 00:28:17
ecognition at Bell Labs so we actually

00:28:14 --> 00:28:19
wrote a compiler for that disp

00:28:16 --> 00:28:21
interpreter so that Christy Martin who

00:28:18 --> 00:28:24
is now Microsoft kind of did the bulk of

00:28:20 --> 00:28:26
it with Leone and me and and so we could

00:28:23 --> 00:28:28
write our system in lisp and then

00:28:25 --> 00:28:30
compiled to seee and then we'll have a

00:28:27 --> 00:28:33
self-contained complete system that

00:28:29 --> 00:28:36
could kind of do the entire thing

00:28:32 --> 00:28:41
neither Python or turn pro can do this

00:28:35 --> 00:28:42
today yeah okay it's coming yeah I mean

00:28:40 --> 00:28:44
there's something like that in

00:28:41 --> 00:28:47
Whitehorse called you know tor script

00:28:43 --> 00:28:48
and so you know we had to write or Lisp

00:28:46 --> 00:28:51
interpreter which retinol is compiler

00:28:47 --> 00:28:54
way to invest a huge amount of effort to

00:28:50 --> 00:28:55
do this and not everybody if you don't

00:28:53 --> 00:28:57
completely believe in the concept

00:28:54 --> 00:28:59
you're not going to invest the time to

00:28:56 --> 00:29:02
do this right now at the time also you

00:28:58 --> 00:29:04
know it were today this would turn into

00:29:01 --> 00:29:06
rture by torture and so for whatever

00:29:03 --> 00:29:08
we put it in open-source everybody would

00:29:05 --> 00:29:12
use it and you know realize it's good

00:29:07 --> 00:29:15
back before 1995 working at AT&T there's

00:29:11 --> 00:29:17
no way the lawyers would let you release

00:29:14 --> 00:29:20
anything in open source of this nature

00:29:16 --> 00:29:23
and so we could not distribute our code

00:29:19 --> 00:29:25
really and at that point and sorry to go

00:29:22 --> 00:29:27
n a million tangents but on that point

00:29:24 --> 00:29:30
I also read that there was some almost

00:29:26 --> 00:29:35
pad like a patent on convolution your

00:29:29 --> 00:29:39
network yes it was labs so that first of

00:29:34 --> 00:29:46
all I mean just to actually that ran out

00:29:38 --> 00:29:49
he thankfully 8007 in 2007 that what

00:29:45 --> 00:29:50
look can we can we just talk about that

00:29:48 --> 00:29:53
first I know you're a facebook but

00:29:49 --> 00:29:55
you're also done why you and and what

00:29:52 --> 00:29:59
does it mean

00:29:54 --> 00:30:02
patent ideas like these software ideas

00:29:58 --> 00:30:05
essentially or what are mathematical

00:30:01 --> 00:30:07
ideas or what are they okay so they're

00:30:04 --> 00:30:09
not mathematical idea so there are you

00:30:06 --> 00:30:12
know algorithms and there was a period

00:30:08 --> 00:30:15
where the US Patent Office would allow

00:30:11 --> 00:30:18
the patent of software as long as it was

00:30:14 --> 00:30:20
embodied the Europeans are very

00:30:17 --> 00:30:21
different they don't they don't quite

00:30:19 --> 00:30:25
accept that they have a different

00:30:20 --> 00:30:26
concept but you know I don't I know no I

00:30:24 --> 00:30:28
mean I never actually strongly believed

00:30:25 --> 00:30:30
in this but I don't believe in this kind

00:30:27 --> 00:30:33
of patent Facebook basically doesn't

00:30:29 --> 00:30:33
believe in this kind of pattern

00:30:33 --> 00:30:41
Google Files patterns because they've

00:30:37 --> 00:30:42
been burned with Apple and so now they

00:30:40 --> 00:30:44
do this for defensive purpose but

00:30:41 --> 00:30:46
usually they say we're not going to see

00:30:43 --> 00:30:49
you if you infringe Facebook has a

00:30:45 --> 00:30:51
similar policy they say you know we file

00:30:48 --> 00:30:52
pattern on certain things for defensive

00:30:50 --> 00:30:54
purpose we're not going to see you if

00:30:51 --> 00:30:59
you infringe unless you sue us

00:30:53 --> 00:31:01
o the the industry does not believe in

00:30:58 --> 00:31:03
patterns they are there because of

00:31:00 --> 00:31:06
you know the legal landscape and and and

00:31:02 --> 00:31:07
various things but but I don't really

00:31:05 --> 00:31:10
believe in patterns for this kind of

00:31:06 --> 00:31:12
stuff yes so that's that's a great thing

00:31:09 --> 00:31:15
so I tell you a war story yeah you so

00:31:11 --> 00:31:16
what happens was the the first the first

00:31:14 --> 00:31:19
pattern of a condition that was about

00:31:15 --> 00:31:20
kind of the early version Congress on

00:31:18 --> 00:31:23
that that didn't have separate pudding

00:31:19 --> 00:31:25
layers it had the conditional layers

00:31:22 --> 00:31:28
which tried more than one if you want

00:31:24 --> 00:31:30
right and then there was a second one on

00:31:27 --> 00:31:31
commercial nets with separate pudding

00:31:29 --> 00:31:36
layers

00:31:30 --> 00:31:38
train with back probably in 89 and 1992

00:31:35 --> 00:31:41
something like this at the time the life

00:31:37 --> 00:31:43
of a pattern was 17 years so here's

00:31:40 --> 00:31:45
what happened over the next few years is

00:31:42 --> 00:31:48
that we started developing character

00:31:44 --> 00:31:48
ecognition technology around commercial

00:31:47 --> 00:31:54
Nets

00:31:47 --> 00:31:58
and in 1994 a check reading system was

00:31:53 --> 00:32:00
deployed in ATM machines in 1995 it was

00:31:57 --> 00:32:03
for a large check reading machines in

00:31:59 --> 00:32:05
back offices etc and those systems were

00:32:02 --> 00:32:08
developed by an engineering group that

00:32:04 --> 00:32:09
we were collaborating with AT&T and they

00:32:07 --> 00:32:12
were commercialized by NCR which at the

00:32:08 --> 00:32:16
time was a subsidiary of AT&T now it

00:32:11 --> 00:32:20
ain't he split up in 1996

00:32:15 --> 00:32:22
99 in 1996 and the lawyers just looked

00:32:19 --> 00:32:23
at all the patterns and they distributed

00:32:21 --> 00:32:26
the patterns among the various companies

00:32:22 --> 00:32:28
they gave the the commercial net pattern

00:32:25 --> 00:32:30
to NCR because they were actually

00:32:27 --> 00:32:31
selling products that used it but nobody

00:32:29 --> 00:32:35
I didn't see are at any idea where they

00:32:30 --> 00:32:39
come from that was yeah okay so between

00:32:34 --> 00:32:40
1996 and 2007

00:32:38 --> 00:32:43
there's a whole period until 2002 I

00:32:39 --> 00:32:44
didn't actually work on machine on your

00:32:42 --> 00:32:48
couch on that I resumed working on this

00:32:43 --> 00:32:50
around 2002 and between 2002 and 2007 I

00:32:47 --> 00:32:52
was working on them crossing my finger

00:32:49 --> 00:32:55
that nobody and NCR would notice nobody

00:32:51 --> 00:32:58
noticed yeah and I and I hope that this

00:32:54 --> 00:33:01
kind of somewhat as you said lawyers

00:32:57 --> 00:33:03
decide relative openness of the

00:33:00 --> 00:33:05
community now will continue

00:33:02 --> 00:33:10
it accelerates the entire progress of

00:33:04 --> 00:33:13
the industry and you know the problems

00:33:09 --> 00:33:15
that Facebook and Google and others are

00:33:12 --> 00:33:17
facing today is not whether Facebook or

00:33:14 --> 00:33:20
Google or Microsoft or IBM or whoever is

00:33:16 --> 00:33:21
ahead of the other it's that we don't

00:33:19 --> 00:33:22
have the technology to build the things

00:33:20 --> 00:33:24
we want to build we only build

00:33:21 --> 00:33:26
intelligent virtual systems that have

00:33:23 --> 00:33:28
common sense we don't have a monopoly on

00:33:25 --> 00:33:30
good ideas for this we don't believe

00:33:27 --> 00:33:33
with you maybe others do believe they do

00:33:29 --> 00:33:35
but we don't okay if a start-up tells

00:33:32 --> 00:33:37
you they have the secret to you know

00:33:34 --> 00:33:39
human level intelligence and common

00:33:36 --> 00:33:43
sense don't believe them they don't and

00:33:38 --> 00:33:45
it's going to take the entire work of

00:33:42 --> 00:33:48
the world research community for a while

00:33:44 --> 00:33:50
to get to the point where you can go off

00:33:47 --> 00:33:51
and in each of the company is going to

00:33:49 --> 00:33:52
start to build things on this we're not

00:33:50 --> 00:33:54
here yet

00:33:51 --> 00:33:57
it's absolutely in this this calls to

00:33:53 --> 00:34:00
the the gap between the space of ideas

00:33:56 --> 00:34:03
and the rigorous testing of those ideas

00:33:59 --> 00:34:05
of practical application that you often

00:34:02 --> 00:34:08
speak to you've written advice saying

00:34:05 --> 00:34:10
don't get fooled by people who claim to

00:34:07 --> 00:34:12
have a solution to artificial general

00:34:09 --> 00:34:14
intelligence who claim to have an AI

00:34:11 --> 00:34:16
system that work just like the human

00:34:13 --> 00:34:19
brain or who claim to have figured out

00:34:15 --> 00:34:22
how the brain works ask them what the

00:34:18 --> 00:34:25
rror rate they get on em 'no store

00:34:21 --> 00:34:29
imagenet this is a little dated by the

00:34:24 --> 00:34:31
way that mean five years who's counting

00:34:28 --> 00:34:35
okay but i think your opinion it's the

00:34:30 --> 00:34:37
Amna stand imagenet yes may be data

00:34:34 --> 00:34:40
there may be new benchmarks right but i

00:34:36 --> 00:34:44
think that philosophy is one you still

00:34:39 --> 00:34:46
and and somewhat hold that benchmarks

00:34:43 --> 00:34:47
and the practical testing the practical

00:34:45 --> 00:34:49
application is where you really get to

00:34:46 --> 00:34:51
test the ideas well it may not be

00:34:48 --> 00:34:53
completely practical like for example

00:34:50 --> 00:34:55
you know it could be a toy data set

00:34:52 --> 00:34:58
but it has to be some sort of task that

00:34:54 --> 00:35:00
he community as a whole has accepted as

00:34:57 --> 00:35:02
ome sort of standard you know kind of

00:34:59 --> 00:35:04
benchmark if you want it doesn't need to

00:35:01 --> 00:35:07
be real so for example many years ago

00:35:03 --> 00:35:08
here at fair people you know chosen

00:35:06 --> 00:35:10
Western art one born and a few others

00:35:07 --> 00:35:13
proposed the the babbitt asks which were

00:35:09 --> 00:35:15
kind of a toy problem to test the

00:35:12 --> 00:35:17
ability of machines to reason actually

00:35:14 --> 00:35:20
to access working memory and things like

00:35:16 --> 00:35:21
this and it was very useful even though

00:35:19 --> 00:35:25
it wasn't a real task amnesties kind of

00:35:20 --> 00:35:27
halfway a real task so you know toy

00:35:24 --> 00:35:29
problems can be very useful it's just

00:35:26 --> 00:35:31
hat i was really struck by the fact

00:35:28 --> 00:35:33
hat a lot of people particularly our

00:35:30 --> 00:35:35
people with money to invest would be

00:35:32 --> 00:35:38
fooled by people telling them oh we have

00:35:34 --> 00:35:40
you know the algorithm of the cortex and

00:35:37 --> 00:35:43
you should give us 50 million yes

00:35:39 --> 00:35:46
absolutely so there's a lot of people

00:35:42 --> 00:35:49
who who tried to take advantage of the

00:35:45 --> 00:35:53
hype for business reasons and so on but

00:35:48 --> 00:35:56
let me sort of talk to this idea that

00:35:52 --> 00:35:56
new ideas the ideas that push the field

00:35:55 --> 00:35:59
forward

00:35:55 --> 00:36:01
may not yet have a benchmark or it may

00:35:58 --> 00:36:02
be very difficult to establish a

00:36:00 --> 00:36:04
benchmark I agree that's part of the

00:36:01 --> 00:36:07
process establishing benchmarks is part

00:36:03 --> 00:36:09
of the process so what are your thoughts

00:36:06 --> 00:36:13
about so we have these benchmarks on

00:36:08 --> 00:36:16
around stuff we can do with images from

00:36:12 --> 00:36:17
classification to captioning to just

00:36:15 --> 00:36:19
every kind of information can pull off

00:36:16 --> 00:36:21
rom images and the surface level

00:36:18 --> 00:36:26
there's audio datasets there's some

00:36:20 --> 00:36:28
video what can we start natural language

00:36:25 --> 00:36:30
what kind of stuff what kind of

00:36:27 --> 00:36:32
benchmarks do you see they start

00:36:29 --> 00:36:37
creeping on to more something like

00:36:32 --> 00:36:39
intelligence like reasoning like maybe

00:36:36 --> 00:36:42
you don't like the term but AGI echoes

00:36:38 --> 00:36:44
of that kind of yeah sort of elation a

00:36:41 --> 00:36:46
lot of people are working on interactive

00:36:43 --> 00:36:49
nvironments in which you can you can

00:36:45 --> 00:36:54
train and test intelligent systems so so

00:36:48 --> 00:36:57
there for example you know it's the

00:36:53 --> 00:36:59
classical paradigm of supervised running

00:36:56 --> 00:37:00
is that you you have a data set you

00:36:58 --> 00:37:02
partition it into a training site

00:36:59 --> 00:37:05
validation set test set and there's a

00:37:01 --> 00:37:07
clear protocol right but what if the

00:37:04 --> 00:37:09
that assumes that this

00:37:06 --> 00:37:11
apples are statistically independent you

00:37:08 --> 00:37:13
can exchange them the order in which you

00:37:10 --> 00:37:15
see them doesn't shouldn't matter you

00:37:12 --> 00:37:17
know things like that but what if the

00:37:14 --> 00:37:19
answer you give determines the next

00:37:16 --> 00:37:21
sample you see which is the case for

00:37:18 --> 00:37:23
example in robotics right you robot does

00:37:20 --> 00:37:25
omething and then it gets exposed to a

00:37:22 --> 00:37:27
new room and depending on where it goes

00:37:24 --> 00:37:30
the room would be different so that's

00:37:26 --> 00:37:34
the decrease the exploration problem

00:37:29 --> 00:37:36
the what if the samples so that creates

00:37:33 --> 00:37:39
also a dependency between samples right

00:37:35 --> 00:37:41
you you if you move if you can only move

00:37:38 --> 00:37:42
it in in space the next sample you're

00:37:40 --> 00:37:46
gonna see is going to be probably in the

00:37:41 --> 00:37:48
same building most likely so so so the

00:37:45 --> 00:37:51
all the assumptions about the validity

00:37:47 --> 00:37:53
of this training set test set a potus's

00:37:50 --> 00:37:55
break whatever a machine can take an

00:37:52 --> 00:37:57
action that has an influence in the in

00:37:54 --> 00:37:59
the world and it's what is going to see

00:37:56 --> 00:38:02
so people are setting up artificial

00:37:58 --> 00:38:06
environments where what that takes place

00:38:01 --> 00:38:08
right the robot runs around a 3d model

00:38:05 --> 00:38:10
of a house and can interact with objects

00:38:07 --> 00:38:13
and things like this how you do robotics

00:38:09 --> 00:38:16
by simulation you have those you know

00:38:12 --> 00:38:20
opening a gym type thing or mu Joko kind

00:38:15 --> 00:38:22
of simulated robots and you have games

00:38:19 --> 00:38:24
you know things like that so that that's

00:38:21 --> 00:38:28
where the field is going really this

00:38:23 --> 00:38:30
kind of environment now back to the

00:38:27 --> 00:38:34
question of a GI like I don't like the

00:38:29 --> 00:38:37
term a GI because it implies that human

00:38:33 --> 00:38:39
intelligence is general and human

00:38:36 --> 00:38:42
intelligence is nothing like general

00:38:38 --> 00:38:43
it's very very specialized we think it's

00:38:41 --> 00:38:45
general we'd like to think of ourselves

00:38:42 --> 00:38:47
as having your own science we don't

00:38:44 --> 00:38:48
we're very specialized we're only

00:38:46 --> 00:38:51
slightly more general than why does it

00:38:47 --> 00:38:54
feel general so you kind of the term

00:38:50 --> 00:38:57
general I think what's impressive about

00:38:53 --> 00:39:00
humans is ability to learn as we were

00:38:56 --> 00:39:03
talking about learning to learn in just

00:38:59 --> 00:39:06
so many different domains is perhaps not

00:39:02 --> 00:39:08
arbitrarily general but just you can

00:39:05 --> 00:39:10
learn in many domains and integrate that

00:39:07 --> 00:39:11
knowledge somehow okay that knowledge

00:39:09 --> 00:39:14
persists so let me take a very specific

00:39:10 --> 00:39:17
example yes it's not an example it's

00:39:13 --> 00:39:18
more like a a quasi mathematical

00:39:16 --> 00:39:20
demonstration so you have about 1

00:39:17 --> 00:39:22
million fibers coming out of

00:39:19 --> 00:39:23
one of your eyes okay two million total

00:39:21 --> 00:39:26
but let's let's talk about just one of

00:39:22 --> 00:39:29
them it's 1 million nerve fibers your

00:39:25 --> 00:39:30
optical nerve let's imagine that they

00:39:28 --> 00:39:32
are binary so they can be active or

00:39:29 --> 00:39:36
inactive right so the input to your

00:39:31 --> 00:39:36
visual cortex is 1 million bits

00:39:36 --> 00:39:41
now they connected to your brain in a

00:39:38 --> 00:39:44
particular way on your brain has

00:39:40 --> 00:39:45
connections that are kind of a little

00:39:43 --> 00:39:48
bit like accomplish on that they're kind

00:39:44 --> 00:39:49
of local you know in space and things

00:39:47 --> 00:39:53
like this I imagine I play a trick on

00:39:48 --> 00:39:57
you it's a pretty nasty trick I admit I

00:39:52 --> 00:39:58
cut your optical nerve and I put a

00:39:56 --> 00:40:02
device that makes a random perturbation

00:39:57 --> 00:40:05
of a permutation of all the nerve fibers

00:40:01 --> 00:40:08
o now what comes to your to your brain

00:40:04 --> 00:40:10
is a fixed but random permutation of all

00:40:07 --> 00:40:13
the pixels there's no way in hell that

00:40:09 --> 00:40:17
your visual cortex even if I do this to

00:40:12 --> 00:40:19
you in infancy will actually learn

00:40:16 --> 00:40:22
vision to the same level of quality that

00:40:18 --> 00:40:24
you can got it and you're saying there's

00:40:21 --> 00:40:26
no way you ever learn that no because

00:40:23 --> 00:40:28
now two pixels that on your body in the

00:40:25 --> 00:40:30
world will end up in very different

00:40:27 --> 00:40:32
places in your visual cortex and your

00:40:29 --> 00:40:33
neurons there have no connections with

00:40:31 --> 00:40:36
each other because they only connect it

00:40:32 --> 00:40:38
locally so this whole our entire the

00:40:35 --> 00:40:40
hardware is built in many ways to

00:40:37 --> 00:40:43
support the locality of the real world

00:40:39 --> 00:40:45
yeah yes that's specialization yep okay

00:40:42 --> 00:40:47
it's still now really damn impressive so

00:40:44 --> 00:40:50
it's not perfect generalization I even

00:40:46 --> 00:40:51
closed no no it's it's it's it's not

00:40:49 --> 00:40:54
hat it's not even close it's not at all

00:40:50 --> 00:40:56
yes it's socialize so how many boolean

00:40:53 --> 00:41:01
functions so let's imagine you want to

00:40:55 --> 00:41:03
train your visual system to you know

00:41:00 --> 00:41:05
recognize particular patterns of those 1

00:41:02 --> 00:41:07
million bits ok so that's a boolean

00:41:04 --> 00:41:09
function right either the pattern is

00:41:06 --> 00:41:11
here or not here this is a to to a

00:41:08 --> 00:41:14
classification with 1 million binary

00:41:10 --> 00:41:15
inputs

00:41:13 --> 00:41:19
how many such boolean functions are

00:41:14 --> 00:41:22
there okay if you have 2 to the 1

00:41:18 --> 00:41:25
million combinations of inputs for each

00:41:21 --> 00:41:27
of those you have an output bit and so

00:41:24 --> 00:41:30
you have 2 to the 2 to the 1 million

00:41:26 --> 00:41:33
boolean functions of this type okay

00:41:29 --> 00:41:36
which is an unimaginably large number

00:41:32 --> 00:41:37
how many of those functions can actually

00:41:35 --> 00:41:40
be computed by your visual cortex and

00:41:36 --> 00:41:43
the answer is a tiny tiny tiny tiny tiny

00:41:39 --> 00:41:47
sliver like an enormous little tiny

00:41:42 --> 00:41:52
sliver yeah yeah so we are ridiculously

00:41:46 --> 00:41:54
specialized you know okay but okay

00:41:51 --> 00:41:57
that's an argument against the word

00:41:53 --> 00:42:00
general I think there's there's a I

00:41:56 --> 00:42:02
there's I agree with your intuition but

00:41:59 --> 00:42:08
I'm not sure it's it seems the breath

00:42:01 --> 00:42:11
e the brain is impressively capable of

00:42:07 --> 00:42:15
adjusting to things so it's because we

00:42:10 --> 00:42:18
can't imagine tasks that are outside of

00:42:14 --> 00:42:19
our comprehension right we think we

00:42:17 --> 00:42:20
are general because we're

00:42:18 --> 00:42:23
general of all the things that we can

00:42:19 --> 00:42:24
apprehend so yeah but there is a huge

00:42:22 --> 00:42:25
world out there of things that we have

00:42:23 --> 00:42:28
no idea

00:42:24 --> 00:42:31
we call that heat by the way heat heat

00:42:27 --> 00:42:33
so at least physicists call that heat or

00:42:30 --> 00:42:40
they call it entropy which is kokkonen

00:42:32 --> 00:42:43
you have a thing full of gas right call

00:42:39 --> 00:42:48
system for gas right goes on a coast it

00:42:42 --> 00:42:51
has you know pressure it has temperature

00:42:47 --> 00:42:54
has you know and you can write the

00:42:50 --> 00:42:57
quations PV equal NRT you know things

00:42:53 --> 00:42:58
like that right when you reduce a volume

00:42:56 --> 00:43:00
the temperature goes up the pressure

00:42:57 --> 00:43:03
goes up you know things like that right

00:42:59 --> 00:43:06
for perfect gas at least those are the

00:43:02 --> 00:43:07
things you can know about that system

00:43:05 --> 00:43:10
and it's a tiny tiny number of bits

00:43:07 --> 00:43:11
compared to the complete information of

00:43:09 --> 00:43:13
the state of the entire system because

00:43:10 --> 00:43:16
the state when HR system will give you

00:43:12 --> 00:43:20
the position and momentum of every every

00:43:15 --> 00:43:23
molecule of the gas and what you don't

00:43:19 --> 00:43:25
know about it is the entropy and you

00:43:22 --> 00:43:28
interpret it as heat the energy

00:43:24 --> 00:43:33
containing that thing is is what we call

00:43:27 --> 00:43:34
heat now it's very possible that in fact

00:43:32 --> 00:43:36
here is some very strong structure in

00:43:33 --> 00:43:38
how those molecules are moving is just

00:43:35 --> 00:43:40
hat they are in a way that we are just

00:43:37 --> 00:43:43
not wired to perceive they are ignorant

00:43:39 --> 00:43:45
o it and there's in your infinite

00:43:42 --> 00:43:47
amount of things we're not wired to

00:43:44 --> 00:43:48
perceive any right that's a nice way to

00:43:46 --> 00:43:49
put it

00:43:47 --> 00:43:54
well general to all the things we can

00:43:48 --> 00:43:56
imagine which is a very tiny a subset of

00:43:53 --> 00:43:57
all things that are possible it was like

00:43:55 --> 00:44:01
coma growth complexity or the coma was

00:43:56 --> 00:44:04
charged in some one of complexity you

00:44:00 --> 00:44:07
know every bit string or every integer

00:44:03 --> 00:44:13
is random except for all the ones that

00:44:06 --> 00:44:14
you can actually write down yeah okay so

00:44:12 --> 00:44:16
beautifully put but you know so we can

00:44:13 --> 00:44:19
just call it artificial intelligence we

00:44:15 --> 00:44:19
don't need to have a general whatever

00:44:18 --> 00:44:21
novel

00:44:18 --> 00:44:25
human of all Nutella transmissible oh

00:44:20 --> 00:44:27
you know you'll start anytime you touch

00:44:24 --> 00:44:33
uman it gets it gets interesting

00:44:26 --> 00:44:34
because you know it's just because we

00:44:32 --> 00:44:36
attach ourselves to human and it's

00:44:33 --> 00:44:37
difficult to define with human

00:44:35 --> 00:44:42
intelligences yeah

00:44:36 --> 00:44:45
nevertheless my definition is maybe damn

00:44:41 --> 00:44:46
impressive intelligence ok damn

00:44:44 --> 00:44:50
impressive demonstration of intelligence

00:44:45 --> 00:44:52
whatever and so on that topic most

00:44:49 --> 00:44:57
successes in deep learning have been in

00:44:51 --> 00:45:00
supervised learning what is your view on

00:44:56 --> 00:45:03
unsupervised learning is there a hope to

00:44:59 --> 00:45:06
reduce involvement of human input and

00:45:02 --> 00:45:09
still have successful systems that are

00:45:05 --> 00:45:11
have practically used yeah I mean

00:45:08 --> 00:45:13
there's definitely a hope is it's more

00:45:10 --> 00:45:15
than a hope actually it's it's you know

00:45:12 --> 00:45:18
mounting evidence for it and that's

00:45:14 --> 00:45:20
basically or I do like the only thing

00:45:17 --> 00:45:21
I'm interested in at the moment is

00:45:19 --> 00:45:23
I call it self supervised running not

00:45:20 --> 00:45:27
unsupervised cuz unsupervised running is

00:45:22 --> 00:45:29
a loaded term people who know something

00:45:26 --> 00:45:31
about machine learning you know tell us

00:45:28 --> 00:45:33
how you doing clustering or PCA yeah

00:45:30 --> 00:45:35
she's nice and the way public we know

00:45:32 --> 00:45:36
hen you say enterprise only oh my god

00:45:34 --> 00:45:38
you know machines are gonna learn by

00:45:35 --> 00:45:42
themselves and without supervision you

00:45:37 --> 00:45:44
know there's the parents yeah so so I

00:45:41 --> 00:45:46
could sell supervised learning because

00:45:43 --> 00:45:48
in fact the underlying algorithms that I

00:45:45 --> 00:45:51
use are the same algorithms as the

00:45:47 --> 00:45:53
supervised learning algorithms except

00:45:50 --> 00:45:56
hat what we trained them to do is not

00:45:52 --> 00:46:01
predict a particular set of variables

00:45:55 --> 00:46:03
like the category of an image and and

00:46:00 --> 00:46:07
not to predict a set of variables that

00:46:02 --> 00:46:08
have been provided by human labelers but

00:46:06 --> 00:46:10
what you're trying to machine to do is

00:46:07 --> 00:46:13
basically reconstruct a piece of its

00:46:09 --> 00:46:15
input that it's being this being masked

00:46:12 --> 00:46:18
out essentially you can think of

00:46:14 --> 00:46:20
it this way right so show a piece of a

00:46:17 --> 00:46:22
video to a machine and ask it to predict

00:46:19 --> 00:46:24
what's gonna happen next and of course

00:46:21 --> 00:46:26
after a while you can show what what

00:46:23 --> 00:46:28
happens and the machine will kind of

00:46:25 --> 00:46:32
train itself to do better at that task

00:46:27 --> 00:46:33
you can do like all the latest most

00:46:31 --> 00:46:36
successful models the natural language

00:46:32 --> 00:46:39
processing use cell supervised running

00:46:35 --> 00:46:41
you know sort of bird style systems for

00:46:38 --> 00:46:45
example right you show it a window of a

00:46:40 --> 00:46:48
thousand words on a test corpus you take

00:46:44 --> 00:46:51
out 15% of the words and then you train

00:46:47 --> 00:46:53
a machine to predict the words that are

00:46:50 --> 00:46:55
missing that's out supervised running

00:46:52 --> 00:46:57
it's not predicting the future it's just

00:46:54 --> 00:46:58
you know predicting things in middle but

00:46:56 --> 00:47:00
you could have you predict the future

00:46:57 --> 00:47:02
that's what language models do so you

00:46:59 --> 00:47:05
construct it so in an unsupervised way

00:47:01 --> 00:47:08
ou construct a model of language do you

00:47:04 --> 00:47:11
think or video or the physical world or

00:47:07 --> 00:47:15
whatever right how far do you think that

00:47:10 --> 00:47:19
can take us do you think very far it

00:47:14 --> 00:47:23
understands anything to some level it

00:47:18 --> 00:47:26
has you know a shallow understanding of

00:47:22 --> 00:47:27
text but it needs to I mean to have

00:47:25 --> 00:47:29
kind of true human level intelligence I

00:47:26 --> 00:47:33
think you need to ground language in

00:47:28 --> 00:47:35
reality so some people are attempting to

00:47:32 --> 00:47:36
do this right having systems that can I

00:47:34 --> 00:47:38
have some visual representation of what

00:47:35 --> 00:47:40
is being talked about which is one

00:47:37 --> 00:47:44
reason you need interactive environments

00:47:39 --> 00:47:46
actually this is like a huge technical

00:47:43 --> 00:47:48
problem that is not solved and that

00:47:45 --> 00:47:51
explains why such super versioning works

00:47:47 --> 00:47:53
in the context of natural language that

00:47:50 --> 00:47:54
does not work in the context on at least

00:47:52 --> 00:47:56
not well in the context of image

00:47:53 --> 00:47:59
recognition and video although it's

00:47:55 --> 00:48:03
making progress quickly and the reason

00:47:58 --> 00:48:05
that reason is the fact that it's much

00:48:02 --> 00:48:07
easier to represent uncertainty in the

00:48:04 --> 00:48:09
prediction you know context of natural

00:48:06 --> 00:48:11
anguage than it is in the context of

00:48:08 --> 00:48:14
things like video and images so for

00:48:10 --> 00:48:15
example if I ask you to predict what

00:48:13 --> 00:48:18
words are missing you know 15 percent of

00:48:14 --> 00:48:20
the words that I've taken out the

00:48:17 --> 00:48:23
possibility is small that means small

00:48:19 --> 00:48:25
right there is 100,000 words in the in

00:48:22 --> 00:48:28
the lexicon and what the Machine spits

00:48:24 --> 00:48:30
out is a big probability vector right

00:48:27 --> 00:48:32
it's a bunch of numbers between 0 & 1

00:48:29 --> 00:48:35
that's 1 to 1 and we know how to do how

00:48:31 --> 00:48:37
to do this with computers so they are

00:48:34 --> 00:48:39
presenting uncertainty in the

00:48:36 --> 00:48:41
prediction is relatively easy and that's

00:48:38 --> 00:48:46
in my opinion why those techniques work

00:48:40 --> 00:48:48
for NLP for images if you ask if you

00:48:45 --> 00:48:49
block a piece of an image and you as a

00:48:47 --> 00:48:50
system reconstruct that piece of the

00:48:48 --> 00:48:52
image

00:48:49 --> 00:48:56
there are many possible answers there

00:48:51 --> 00:48:59
are all perfectly legit right and how do

00:48:55 --> 00:48:59
you represent that the set of possible

00:48:58 --> 00:49:01
answers

00:48:58 --> 00:49:02
you can't train a system to make one

00:49:00 --> 00:49:05
prediction you can train a neural net to

00:49:01 --> 00:49:07
say here it is that's the image because

00:49:04 --> 00:49:08
it's there's a whole set of things that

00:49:06 --> 00:49:10
are compatible with it so how do you get

00:49:07 --> 00:49:15
he machine to represent not a single

00:49:09 --> 00:49:17
output but all set of outputs and you

00:49:14 --> 00:49:19
know similarly with video prediction

00:49:16 --> 00:49:21
there's a lot of things that can happen

00:49:18 --> 00:49:23
in the future video you're looking at me

00:49:20 --> 00:49:25
right now I'm not moving my head very

00:49:22 --> 00:49:26
much but you know I might you know what

00:49:24 --> 00:49:28
urn my my head to the left or to the

00:49:25 --> 00:49:32
right right if you don't have a system

00:49:27 --> 00:49:33
that can predict this and you train it

00:49:31 --> 00:49:34
with least Square to kind of minimize

00:49:32 --> 00:49:35
the error with the prediction and what

00:49:33 --> 00:49:37
I'm doing

00:49:34 --> 00:49:39
what you get is a blurry image of myself

00:49:36 --> 00:49:41
in all possible future positions that I

00:49:38 --> 00:49:43
might be in which is not a good

00:49:40 --> 00:49:46
prediction but so there might be other

00:49:42 --> 00:49:51
ways to do the self supervision right

00:49:45 --> 00:49:53
for visual scenes like what if i I mean

00:49:50 --> 00:49:56
if I knew I wouldn't tell you

00:49:52 --> 00:49:59
publish it first I don't know I know

00:49:55 --> 00:50:02
there might be so I mean these are kind

00:49:58 --> 00:50:04
of there might be artificial ways of

00:50:01 --> 00:50:06
like self play in games the way you can

00:50:03 --> 00:50:07
simulate part of the environment you can

00:50:05 --> 00:50:11
oh that doesn't solve the problem it's

00:50:06 --> 00:50:13
just a way of generating data but

00:50:10 --> 00:50:16
because you have more of a country might

00:50:12 --> 00:50:17
mean you can control yeah it's a way to

00:50:15 --> 00:50:19
generate data and that's right and

00:50:16 --> 00:50:22
because you can do huge amounts of data

00:50:18 --> 00:50:24
generation that doesn't you write this

00:50:21 --> 00:50:27
well it's it's a creeps up on the

00:50:23 --> 00:50:28
problem from the side of data and you

00:50:26 --> 00:50:30
don't think that's the right way to it

00:50:27 --> 00:50:32
doesn't solve this problem of handling

00:50:29 --> 00:50:35
uncertainty in the world right so if you

00:50:31 --> 00:50:38
have a machine learn a predictive

00:50:34 --> 00:50:40
model of the world in a game that is

00:50:37 --> 00:50:44
deterministic or quasi deterministic

00:50:39 --> 00:50:47
it's easy right just you know give a few

00:50:43 --> 00:50:48
frames of the game to a combat put a

00:50:46 --> 00:50:51
bunch of layers and then half the game

00:50:47 --> 00:50:54
generates the next few frames and and if

00:50:50 --> 00:50:59
the game is deterministic it works fine

00:50:53 --> 00:51:01
and that includes you know feeding the

00:50:58 --> 00:51:03
system with the action that your little

00:51:00 --> 00:51:07
character is going to take

00:51:02 --> 00:51:09
the problem comes from the fact that the

00:51:06 --> 00:51:10
real world and certain most games are

00:51:08 --> 00:51:12
not entirely predictable that's what

00:51:09 --> 00:51:13
hey're you get those blurry predictions

00:51:11 --> 00:51:16
and you can't do planning with very

00:51:12 --> 00:51:19
predictions all right so if you have a

00:51:15 --> 00:51:22
perfect model of the world you can in

00:51:18 --> 00:51:25
your head run this model with a

00:51:21 --> 00:51:26
hypothesis for a sequence of actions and

00:51:24 --> 00:51:29
you're going to predict the outcome of

00:51:25 --> 00:51:33
that sequence of actions but if your

00:51:28 --> 00:51:36
model is imperfect how can you plan yeah

00:51:32 --> 00:51:38
it quickly explodes what are your

00:51:35 --> 00:51:40
thoughts on the extension of this which

00:51:37 --> 00:51:42
topic I'm super excited about it's

00:51:39 --> 00:51:44
connected to something you're talking

00:51:41 --> 00:51:47
about in terms of robotics is active

00:51:43 --> 00:51:49
learning so as opposed to sort of

00:51:46 --> 00:51:53
unemployed and supervisors self

00:51:48 --> 00:51:57
supervised learning you ask the system

00:51:52 --> 00:51:59
for human help right for selecting parts

00:51:56 --> 00:52:01
you want annotated next so if you talk

00:51:58 --> 00:52:04
about a robot exploring a space or a

00:52:00 --> 00:52:07
baby exploring a space or a system

00:52:03 --> 00:52:09
exploring a data set every once in a

00:52:06 --> 00:52:13
while asking for human input you see

00:52:08 --> 00:52:16
value in that kind of work I don't see

00:52:12 --> 00:52:19
transformative value it's going to make

00:52:15 --> 00:52:20
things that we can already do more

00:52:18 --> 00:52:22
fficient or they will learn slightly

00:52:19 --> 00:52:24
more efficiently but it's not going to

00:52:21 --> 00:52:27
make machines sort of significantly more

00:52:23 --> 00:52:32
intelligent I think and I and by the way

00:52:26 --> 00:52:35
there is no opposition there is no

00:52:31 --> 00:52:36
conflict between self supervisor on

00:52:34 --> 00:52:38
reinforcement learning and supervisor on

00:52:35 --> 00:52:38
your imitation learning or active

00:52:37 --> 00:52:42
learning

00:52:37 --> 00:52:46
I see sub super wrestling as a as a

00:52:41 --> 00:52:49
preliminary to all of the above yes so

00:52:45 --> 00:52:54
the example I use very often is how is

00:52:48 --> 00:52:54
it that so if you use

00:52:53 --> 00:52:59
nforcement running deep enforcement

00:52:55 --> 00:53:03
running if you want the best methods

00:52:58 --> 00:53:04
today was so-called model free

00:53:02 --> 00:53:07
nforcement training to learn to play

00:53:03 --> 00:53:09
Atari games take about 80 hours of

00:53:06 --> 00:53:13
training to reach the level that any

00:53:08 --> 00:53:15
human can reach in about 15 minutes they

00:53:12 --> 00:53:22
get better than humans but it takes a

00:53:14 --> 00:53:24
long time alpha star okay the you know

00:53:21 --> 00:53:28
are your videos and his team's the

00:53:23 --> 00:53:31
system to play to to play Starcraft

00:53:27 --> 00:53:35
plays you know a single map a single

00:53:30 --> 00:53:37
type of player and

00:53:34 --> 00:53:41
which

00:53:36 --> 00:53:43
better than human level is about the

00:53:40 --> 00:53:46
quivalent of 200 years of training

00:53:42 --> 00:53:48
playing against itself it's 200 years

00:53:45 --> 00:53:51
right it's not something that no no

00:53:47 --> 00:53:53
human can could every I'm not sure what

00:53:50 --> 00:53:56
it doesn't take away from that okay now

00:53:53 --> 00:54:00
take those algorithms the best our

00:53:55 --> 00:54:02
algorithms we have today to train a car

00:53:59 --> 00:54:05
to drive itself it would probably have

00:54:01 --> 00:54:06
to drive millions of hours you will have

00:54:04 --> 00:54:08
to kill thousands of pedestrians it will

00:54:05 --> 00:54:11
have to run into thousands of trees it

00:54:07 --> 00:54:12
will have to run off cliffs and you had

00:54:10 --> 00:54:15
to run the cliff multiple times before

00:54:11 --> 00:54:15
it figures out it's a bad idea first of

00:54:14 --> 00:54:17
all

00:54:14 --> 00:54:20
yeah and second of all the figures that

00:54:16 --> 00:54:22
had not to do it and so I mean this type

00:54:19 --> 00:54:24
of running obviously does not reflect

00:54:21 --> 00:54:26
he kind of running that animals and

00:54:23 --> 00:54:27
humans do there is something missing

00:54:25 --> 00:54:30
that's really really important there and

00:54:26 --> 00:54:32
my apart is is which have been

00:54:29 --> 00:54:35
advocating for like five years now is

00:54:31 --> 00:54:38
that we have predictive models of the

00:54:34 --> 00:54:41
world that include the ability to

00:54:37 --> 00:54:45
predict under uncertainty and what

00:54:40 --> 00:54:47
allows us to not run off a cliff when we

00:54:44 --> 00:54:49
learn to drive most of us can learn to

00:54:46 --> 00:54:51
drive in about 20 or 30 hours of

00:54:48 --> 00:54:54
training without ever crashing causing

00:54:50 --> 00:54:56
any accident if we drive next to a cliff

00:54:53 --> 00:54:58
we know that if we turn the wheel to the

00:54:55 --> 00:55:00
right the car is going to run off the

00:54:57 --> 00:55:01
cliff and nothing good is gonna come out

00:54:59 --> 00:55:03
of this because we have a pretty good

00:55:00 --> 00:55:04
model of intuitive physics that tells us

00:55:02 --> 00:55:06
you know the car is gonna fall we know

00:55:03 --> 00:55:08
about gravity babies run this

00:55:05 --> 00:55:13
around the age of eight or nine months

00:55:07 --> 00:55:15
that objects don't float they fall and

00:55:12 --> 00:55:16
you know we have a pretty good idea of

00:55:14 --> 00:55:18
the effect of turning the wheel of the

00:55:15 --> 00:55:19
car and you know we know we need to stay

00:55:17 --> 00:55:21
on the road so there is a lot of things

00:55:18 --> 00:55:23
that we bring to the table which is

00:55:20 --> 00:55:27
basically or predictive model of the

00:55:22 --> 00:55:29
world and that model allows us to not do

00:55:26 --> 00:55:31
stupid things and to basically stay

00:55:28 --> 00:55:34
within the context of things we need to

00:55:30 --> 00:55:36
do we still face you know unpredictable

00:55:33 --> 00:55:39
situations and that's how we learn but

00:55:35 --> 00:55:40
hat allows us to learn really really

00:55:38 --> 00:55:43
quickly so that's called

00:55:39 --> 00:55:44
model-based reinforcement running

00:55:42 --> 00:55:46
there's some imitation and supervised

00:55:43 --> 00:55:48
running because we have a driving

00:55:45 --> 00:55:51
instructor that tells us occasionally

00:55:47 --> 00:55:54
what to do but most of the learning is

00:55:50 --> 00:55:56
Mauro bass is learning the model yeah

00:55:53 --> 00:55:58
running physics that we've done since we

00:55:55 --> 00:56:00
re babies that's where all almost all

00:55:57 --> 00:56:03
are learning and the physics is somewhat

00:55:59 --> 00:56:05
ransferable from is transferable from

00:56:02 --> 00:56:07
scene to scene stupid things are the

00:56:04 --> 00:56:09
same everywhere yeah I mean if you you

00:56:06 --> 00:56:12
know you have experience of the world

00:56:08 --> 00:56:13
you don't need to be particularly from a

00:56:11 --> 00:56:17
particularly intelligent species to know

00:56:12 --> 00:56:21
that if you spill water from a container

00:56:16 --> 00:56:24
you know the rest is gonna get wet and

00:56:20 --> 00:56:27
you might get wet so you know cats know

00:56:23 --> 00:56:30
this right yeah so the main problem we

00:56:26 --> 00:56:31
need to solve is how do we learn models

00:56:29 --> 00:56:33
of the world that's and that's what I'm

00:56:30 --> 00:56:35
interesting that's what's a supervised

00:56:32 --> 00:56:40
learning is all about if you were to try

00:56:34 --> 00:56:42
to construct a benchmark for let's let's

00:56:39 --> 00:56:46
look at happiness I'd love that dataset

00:56:41 --> 00:56:51
but if you do you think it's useful

00:56:45 --> 00:56:53
interesting / possible to perform well

00:56:50 --> 00:56:57
on eminence with just one example of

00:56:52 --> 00:56:59
each digit and how would we solve that

00:56:56 --> 00:57:00
problem

00:56:58 --> 00:57:03
yeah so it's probably yes the question

00:56:59 --> 00:57:05
is what other type of running are you

00:57:02 --> 00:57:07
allowed to do so if what you like to do

00:57:04 --> 00:57:08
is train on some gigantic data set of

00:57:06 --> 00:57:12
labelled digit that's called transfer

00:57:07 --> 00:57:13
unning and we know that works okay

00:57:11 --> 00:57:16
we do this at Facebook like in

00:57:12 --> 00:57:18
production right we we train large

00:57:15 --> 00:57:19
commercial nets to predict hashtags that

00:57:17 --> 00:57:21
people type on Instagram and we train on

00:57:18 --> 00:57:23
billions of images literally billions

00:57:20 --> 00:57:25
and and then we chop off the last layer

00:57:22 --> 00:57:28
and fine-tune on whatever task we want

00:57:24 --> 00:57:29
hat works really well you can be you

00:57:27 --> 00:57:31
know the image net record with we

00:57:28 --> 00:57:33
actually open source the whole thing

00:57:30 --> 00:57:35
like a few weeks ago yeah that's still

00:57:32 --> 00:57:38
pretty cool but yeah so what in yet

00:57:34 --> 00:57:39
won't be impressive and what's useful an

00:57:37 --> 00:57:41
impressive what kind of transfer

00:57:38 --> 00:57:43
learning would be useful impressive is

00:57:40 --> 00:57:46
it Wikipedia that kind of thing no no I

00:57:42 --> 00:57:48
don't think transfer learning is really

00:57:45 --> 00:57:50
where we should focus we should try to

00:57:47 --> 00:57:50
do

00:57:49 --> 00:57:55
you know have a kind of scenario for

00:57:51 --> 00:57:59
benchmark where you have only ball data

00:57:54 --> 00:58:02
nd you can and it's very large number

00:57:58 --> 00:58:05
of enabled data it could be video clips

00:58:01 --> 00:58:07
it could be what you do you know frame

00:58:04 --> 00:58:12
prediction it could be images you could

00:58:06 --> 00:58:14
choose to you know mask a piece of it it

00:58:11 --> 00:58:16
could be whatever but they're only bold

00:58:13 --> 00:58:20
and you're not allowed to label them so

00:58:15 --> 00:58:24
you do some training on this and then

00:58:19 --> 00:58:28
you train on a particular supervised

00:58:23 --> 00:58:32
task imagenet or nist and you measure

00:58:27 --> 00:58:33
how your test our decrease or variation

00:58:31 --> 00:58:37
error decreases as you increase the

00:58:32 --> 00:58:41
number of label training samples okay

00:58:36 --> 00:58:44
and and what what you would like to see

00:58:40 --> 00:58:46
is is that you know your your error

00:58:43 --> 00:58:48
decreases much faster than if you

00:58:45 --> 00:58:50
trained from scratch from random weights

00:58:47 --> 00:58:52
o that to reach the same level of

00:58:49 --> 00:58:55
performance and a completely supervised

00:58:51 --> 00:58:57
purely supervised system would reach you

00:58:54 --> 00:58:59
would need way fewer samples so that's

00:58:56 --> 00:59:01
the crucial question because it will

00:58:58 --> 00:59:02
answer the question to like you know

00:59:00 --> 00:59:04
people are interested in medical image

00:59:01 --> 00:59:08
analysis okay you know if I want to get

00:59:03 --> 00:59:12
o a particular level of error rate for

00:59:07 --> 00:59:15
this task I know I need a million

00:59:11 --> 00:59:16
samples can I do you know soft

00:59:14 --> 00:59:19
supervised pre-training to reduce this

00:59:15 --> 00:59:20
to about 100 or something anything the

00:59:18 --> 00:59:25
answer there is soft supervised

00:59:19 --> 00:59:28
retraining yep some form some form of it

00:59:24 --> 00:59:31
elling you active learning but you

00:59:27 --> 00:59:33
disagree you know it's not useless it's

00:59:30 --> 00:59:34
just not gonna lead to a quantum leap

00:59:32 --> 00:59:36
it's just gonna make things that we

00:59:33 --> 00:59:38
already do so you're way smarter than me

00:59:35 --> 00:59:40
I just disagree with you but I don't

00:59:37 --> 00:59:42
have anything to back that it's just

00:59:39 --> 00:59:44
intuition so I've worked a lot of

00:59:41 --> 00:59:46
large-scale data sets and there's

00:59:43 --> 00:59:49
omething there might be magic and

00:59:45 --> 00:59:52
active learning but okay at least I said

00:59:48 --> 00:59:55
it publicly at least some being an idea

00:59:51 --> 00:59:57
publicly okay it's not bigoted yet it's

00:59:54 --> 00:59:58
you know working with the data you have

00:59:56 --> 01:00:00
I mean I mean certainly people are doing

00:59:57 --> 01:00:03
things like okay I have three thousand

00:59:59 --> 01:00:05
hours of you know imitation running for

01:00:02 --> 01:00:08
in car but most of those are incredibly

01:00:04 --> 01:00:09
boring what I like is select you know

01:00:07 --> 01:00:11
10% of them that are kind of the most

01:00:08 --> 01:00:14
informative and with just that I would

01:00:10 --> 01:00:17
probably reach the same so it's a weak

01:00:13 --> 01:00:20
form of of active running if you want

01:00:16 --> 01:00:22
yes but there might be a much stronger

01:00:19 --> 01:00:25
version yeah that's right that's what

01:00:21 --> 01:00:28
another notion question is the question

01:00:24 --> 01:00:31
is how much talking yet Elon Musk is

01:00:27 --> 01:00:33
confident talk to him recently

01:00:30 --> 01:00:34
he's confident that large-scale data and

01:00:32 --> 01:00:37
eep learning can solve the autonomous

01:00:33 --> 01:00:40
driving problem what are your thoughts

01:00:36 --> 01:00:41
on the limitless possibilities of deep

01:00:39 --> 01:00:44
learning in this space I was it's

01:00:40 --> 01:00:45
obviously part of the solution I mean I

01:00:43 --> 01:00:47
don't think we'll ever have a set

01:00:44 --> 01:00:49
driving system or it is not in the

01:00:46 --> 01:00:52
foreseeable future that does not use

01:00:48 --> 01:00:55
deep running you put it this way now how

01:00:51 --> 01:00:59
much of it so in the history of sort of

01:00:54 --> 01:01:02
engineering particularly is sort of sort

01:00:58 --> 01:01:03
of a I like systems is generally your

01:01:01 --> 01:01:05
first phase where everything is built by

01:01:02 --> 01:01:07
hand and it was the second phase and

01:01:04 --> 01:01:09
that was the case for autonomous driving

01:01:06 --> 01:01:11
you know 23 years ago there's a phase

01:01:08 --> 01:01:13
where this a little bit of running is

01:01:10 --> 01:01:15
used but there's a lot of engineering

01:01:12 --> 01:01:17
that's involved in kind of you know

01:01:14 --> 01:01:20
taking care of corner cases and and

01:01:16 --> 01:01:22
putting limits etc because the learning

01:01:19 --> 01:01:26
system is not perfect and then I as

01:01:21 --> 01:01:27
technology progresses we end up relying

01:01:25 --> 01:01:28
more and more on learning that's the

01:01:26 --> 01:01:30
history of character recognition is a

01:01:27 --> 01:01:31
history of speech recognition now

01:01:29 --> 01:01:33
computer vision that ronnie was

01:01:30 --> 01:01:36
processing and I think the same is going

01:01:32 --> 01:01:40
to happen with with the term is driving

01:01:35 --> 01:01:43
that currently the the the methods that

01:01:39 --> 01:01:45
are closest to providing some level of

01:01:42 --> 01:01:47
autonomy some you know a decent level of

01:01:44 --> 01:01:50
autonomy where you don't expect a driver

01:01:46 --> 01:01:52
to kind of do anything is where you

01:01:49 --> 01:01:54
constrain the world so you only run

01:01:51 --> 01:01:56
within you know 100 square kilometers or

01:01:53 --> 01:01:59
square miles in Phoenix but the weather

01:01:55 --> 01:02:02
is nice and the roads are wide it wishes

01:01:58 --> 01:02:05
what Weimer is doing you completely over

01:02:01 --> 01:02:08
engineer the car with tons of light

01:02:04 --> 01:02:10
hours and sophisticated sensors that are

01:02:07 --> 01:02:13
too expensive for consumer cars but

01:02:09 --> 01:02:13
hey're fine if you just run a fleet

01:02:12 --> 01:02:18
and you engineer the thing the hell out

01:02:15 --> 01:02:20
of the everything else you you map the

01:02:17 --> 01:02:22
ntire world so you have complete 3d

01:02:19 --> 01:02:23
model of everything so the only thing

01:02:21 --> 01:02:26
that the perception system has to take

01:02:22 --> 01:02:28
care of is moving objects and and and

01:02:25 --> 01:02:32
construction and sort of you know things

01:02:27 --> 01:02:33
that that weren't in your map and you

01:02:31 --> 01:02:36
can engineer a good you know slam system

01:02:32 --> 01:02:37
or eye stuff right so so that's kind of

01:02:35 --> 01:02:38
the current approach that's closest to

01:02:36 --> 01:02:40
some level of autonomy but I think

01:02:37 --> 01:02:44
eventually the long term solution is

01:02:39 --> 01:02:46
going to rely more and more on learning

01:02:43 --> 01:02:49
and possibly using a combination of

01:02:45 --> 01:02:51
supervised learning and model-based

01:02:48 --> 01:02:55
reinforcement or something like that but

01:02:50 --> 01:02:56
ultimately learning will be at not just

01:02:54 --> 01:02:59
at the core but really the fundamental

01:02:55 --> 01:03:01
part of the system yeah it already is

01:02:58 --> 01:03:03
but it'll become more and more what do

01:03:00 --> 01:03:05
you think it takes to build a system

01:03:02 --> 01:03:07
with human level intelligence you talked

01:03:04 --> 01:03:10
about the AI system and then we her

01:03:06 --> 01:03:13
being way out of reach our current reach

01:03:09 --> 01:03:17
this might be outdated as well but this

01:03:12 --> 01:03:21
still way out of reach what would it

01:03:16 --> 01:03:22
ake to build her do you think so I can

01:03:20 --> 01:03:24
tell you the first two obstacles that we

01:03:21 --> 01:03:26
have to clear but I don't know how many

01:03:23 --> 01:03:27
obstacles they are after this so the

01:03:25 --> 01:03:29
image I usually use is that there is a

01:03:26 --> 01:03:30
bunch of mountains that we have to climb

01:03:28 --> 01:03:32
and we can see the first one but we

01:03:29 --> 01:03:34
don't know if there are 50 mountains

01:03:31 --> 01:03:38
behind it or not and this might be a

01:03:33 --> 01:03:39
good sort of metaphor for why AI

01:03:37 --> 01:03:44
researchers in the past I've been overly

01:03:38 --> 01:03:47
optimistic about the result of AI you

01:03:43 --> 01:03:49
know for example New Orleans Simon

01:03:46 --> 01:03:52
Wright wrote the general problem solver

01:03:48 --> 01:03:54
and they call it the general problems

01:03:51 --> 01:03:55
you have problems okay and of course if

01:03:53 --> 01:03:57
it's you realize is that all the

01:03:54 --> 01:03:58
problems you want to solve is financial

01:03:56 --> 01:04:01
and so you can't actually use it for

01:03:57 --> 01:04:03
anything useful but you know yes oh yeah

01:04:00 --> 01:04:04
all you see is the first peak so in

01:04:02 --> 01:04:07
general what are the first couple of

01:04:03 --> 01:04:10
peaks for her so the first peak which is

01:04:06 --> 01:04:11
precisely what I'm working on is self

01:04:09 --> 01:04:13
supervisor running high how do we get

01:04:10 --> 01:04:15
machines to learn models of the world by

01:04:12 --> 01:04:18
observation kind of like babies and like

01:04:14 --> 01:04:22
young animals

01:04:17 --> 01:04:25
o I we've been working with you know

01:04:21 --> 01:04:29
cognitive scientists so this Amanda

01:04:24 --> 01:04:32
depuis who is at fair and in Paris is

01:04:28 --> 01:04:36
half-time is also a researcher and

01:04:31 --> 01:04:39
French University and he he has his

01:04:35 --> 01:04:41
chart that shows that which how many

01:04:38 --> 01:04:43
months of life baby humans kind of

01:04:40 --> 01:04:48
learned different concepts and you can

01:04:43 --> 01:04:51
met you can measure this various ways so

01:04:47 --> 01:04:53
things like distinguishing animate

01:04:50 --> 01:04:55
objects from animate inanimate object

01:04:52 --> 01:04:59
you can you can tell the difference at

01:04:54 --> 01:05:00
age to three months whether an object is

01:04:58 --> 01:05:04
going to stay stable is gonna fall you

01:04:59 --> 01:05:07
know about four months you can tell you

01:05:03 --> 01:05:08
know things like this and then things

01:05:06 --> 01:05:10
like gravity the fact that objects are

01:05:07 --> 01:05:12
not supposed to float in the air but as

01:05:09 --> 01:05:15
opposed to fall you run this around the

01:05:11 --> 01:05:16
age of eight or nine months if you look

01:05:14 --> 01:05:19
at a lot of you know eight month old

01:05:15 --> 01:05:20
babies you give them a bunch of toys on

01:05:18 --> 01:05:21
the highchair first thing they do is

01:05:19 --> 01:05:23
it's why I'm on the ground that you look

01:05:20 --> 01:05:26
at them it's because you know they're

01:05:22 --> 01:05:29
learning about actively learning about

01:05:25 --> 01:05:31
gravity gravity yeah okay so they're not

01:05:28 --> 01:05:33
rying to know you but they you know

01:05:30 --> 01:05:35
they need to do the experiment right

01:05:32 --> 01:05:37
yeah so you know how do we get machines

01:05:34 --> 01:05:39
to learn like babies mostly by

01:05:36 --> 01:05:41
observation with a little bit of

01:05:38 --> 01:05:42
interaction and learning those those

01:05:40 --> 01:05:44
models of the world because I

01:05:41 --> 01:05:47
think that's really a crucial piece of

01:05:43 --> 01:05:48
an intelligent autonomous system so if

01:05:46 --> 01:05:50
you think about the architecture of an

01:05:47 --> 01:05:52
intelligent autonomous system it needs

01:05:49 --> 01:05:54
to have a predictive model of the world

01:05:51 --> 01:05:55
so something that says here is a wall

01:05:53 --> 01:05:57
that time T here is a stable world at

01:05:54 --> 01:06:00
ime T plus one if I take this action

01:05:56 --> 01:06:03
and it's not a single answer it can be

01:05:59 --> 01:06:04
ducation yeah yeah well but we don't

01:06:02 --> 01:06:06
know how to represent distributions in

01:06:03 --> 01:06:07
high dimension continuous basis so it's

01:06:05 --> 01:06:09
got to be something we care that data

01:06:06 --> 01:06:13
Hey but with some summer presentation

01:06:08 --> 01:06:14
with certainty if you have that then you

01:06:12 --> 01:06:16
can do what optimal control theory is

01:06:13 --> 01:06:18
called model predictive control which

01:06:15 --> 01:06:20
means that you can run your model with

01:06:17 --> 01:06:23
e hypothesis for a sequence of action

01:06:19 --> 01:06:24
and then see the result now what you

01:06:22 --> 01:06:26
need the other thing you need is some

01:06:23 --> 01:06:28
sort of objective that you want to

01:06:25 --> 01:06:30
ptimize am i reaching the goal of

01:06:27 --> 01:06:31
grabbing the subject about minimizing

01:06:29 --> 01:06:33
energy am I

01:06:30 --> 01:06:35
whatever right so there is some sort of

01:06:32 --> 01:06:37
objectives that you have to minimize and

01:06:34 --> 01:06:38
so in your head if you had this model

01:06:36 --> 01:06:41
you can figure out the sequence of

01:06:37 --> 01:06:43
action that will optimize your objective

01:06:40 --> 01:06:46
that objective is something that

01:06:42 --> 01:06:47
ultimately is rooted in your basal

01:06:45 --> 01:06:49
ganglia at least in the human brain

01:06:46 --> 01:06:51
that's that's what is available Gambia

01:06:48 --> 01:06:54
computes your level of contentment or

01:06:50 --> 01:06:57
miss contentment oh no noise that's a

01:06:53 --> 01:07:00
word unhappiness okay yeah this

01:06:56 --> 01:07:04
contentment this contentment and so your

01:06:59 --> 01:07:06
entire behavior is driven towards kind

01:07:03 --> 01:07:08
of minimizing that objective which is

01:07:05 --> 01:07:12
maximizing your contentment computed by

01:07:07 --> 01:07:14
our your basal ganglia and what you

01:07:11 --> 01:07:16
have is an objective function which is

01:07:13 --> 01:07:18
basically a predictor of what your basal

01:07:15 --> 01:07:19
ganglia is going to tell you so you're

01:07:17 --> 01:07:22
not going to put your hand on fire

01:07:18 --> 01:07:24
because you know it's gonna you know

01:07:21 --> 01:07:25
it's gonna burn and you're gonna get

01:07:23 --> 01:07:28
hurt and you're predicting this because

01:07:24 --> 01:07:31
of your model of the world and your your

01:07:27 --> 01:07:33
predictor of this objective right so you

01:07:30 --> 01:07:36
if you have those you have those three

01:07:32 --> 01:07:39
components you have four components you

01:07:35 --> 01:07:43
have the the hard-wired contentment

01:07:38 --> 01:07:45
objective good computer if you want

01:07:42 --> 01:07:47
calculator and then you have the three

01:07:44 --> 01:07:48
components one is the objective

01:07:46 --> 01:07:52
predictor which basically predicts your

01:07:47 --> 01:07:54
level of contact and one is the model of

01:07:51 --> 01:07:56
the world and there's a third module I

01:07:53 --> 01:07:59
didn't mention which is a module that

01:07:55 --> 01:08:01
will figure out the best course of

01:07:58 --> 01:08:07
action to optimize an objective given

01:08:00 --> 01:08:08
your model okay yeah cool it's a policy

01:08:06 --> 01:08:12
network or something like that

01:08:07 --> 01:08:13
right now you need those three

01:08:11 --> 01:08:15
components to act autonomously

01:08:12 --> 01:08:17
intelligently and you can be stupid in

01:08:14 --> 01:08:19
three different ways you can be stupid

01:08:16 --> 01:08:21
because your model of the world is wrong

01:08:18 --> 01:08:24
you can be stupid because your objective

01:08:20 --> 01:08:28
is not aligned with what you actually

01:08:23 --> 01:08:31
want to achieve okay and in humans that

01:08:27 --> 01:08:33
would be a psychopath right and then the

01:08:30 --> 01:08:35
third thing you the third way you

01:08:32 --> 01:08:37
can be stupid is that you have the right

01:08:34 --> 01:08:39
model you have the right objective but

01:08:36 --> 01:08:41
you're unable to figure out a course of

01:08:38 --> 01:08:43
action to optimize your objective given

01:08:40 --> 01:08:43
your model

01:08:43 --> 01:08:47
some people who are in charge of big

01:08:45 --> 01:08:52
countries actually have all three that

01:08:46 --> 01:08:55
are wrong all right which countries I

01:08:51 --> 01:08:57
don't know okay so if we think about

01:08:54 --> 01:09:03
his this agent if you think about the

01:08:56 --> 01:09:05
movie her you've criticized the art

01:09:02 --> 01:09:08
project that is Sophia the robot and

01:09:04 --> 01:09:10
what that project essentially does is

01:09:07 --> 01:09:13
uses our natural inclination to

01:09:09 --> 01:09:16
anthropomorphize things that look like

01:09:12 --> 01:09:19
human and given more do you think that

01:09:15 --> 01:09:21
could be used by AI systems like in the

01:09:18 --> 01:09:24
movie her

01:09:20 --> 01:09:27
so do you think that body is needed to

01:09:23 --> 01:09:30
create a feeling of intelligence

01:09:26 --> 01:09:31
well if Sophia was just an art piece I

01:09:29 --> 01:09:34
would have no problem with it but it's

01:09:30 --> 01:09:37
presented as something else let me add

01:09:33 --> 01:09:40
that comics real quick if creators of

01:09:36 --> 01:09:41
Sofia could change something about their

01:09:39 --> 01:09:44
marketing or behavior in general what

01:09:40 --> 01:09:49
would it be what what's just about

01:09:43 --> 01:09:52
everything I mean don't you think here's

01:09:48 --> 01:09:55
a tough question I mean so I agree with

01:09:51 --> 01:09:58
you so Sofia is not in the general

01:09:54 --> 01:10:01
public feels that Sofia can do way more

01:09:57 --> 01:10:05
than she actually can that's right and

01:10:00 --> 01:10:09
the people will create a Sofia are not

01:10:04 --> 01:10:12
honestly publicly communicating trying

01:10:08 --> 01:10:17
to teach the public right but here's a

01:10:11 --> 01:10:22
tough question don't you think this the

01:10:16 --> 01:10:24
same thing is scientists in industry and

01:10:21 --> 01:10:26
research are taking advantage of the

01:10:23 --> 01:10:28
sameness misunderstanding in the public

01:10:25 --> 01:10:31
when they create AI companies or

01:10:27 --> 01:10:34
published stuff some companies yes I

01:10:30 --> 01:10:36
mean there is no sense of there's no

01:10:33 --> 01:10:39
desire to delude there's no desire to

01:10:35 --> 01:10:40
kind of over claim what something is

01:10:38 --> 01:10:42
done right you know you should paper on

01:10:39 --> 01:10:44
AI that you know has this result on

01:10:41 --> 01:10:45
image net you know it's pretty clear I

01:10:43 --> 01:10:48
mean it's not even not even interesting

01:10:44 --> 01:10:50
anymore but you know I I don't think

01:10:47 --> 01:10:55
there is that I mean the reviewers are

01:10:49 --> 01:10:57
generally not very forgiving of of you

01:10:54 --> 01:11:00
know unsupported claims of this type and

01:10:56 --> 01:11:02
but there are certainly quite a few

01:10:59 --> 01:11:05
startups that have had a huge amount of

01:11:01 --> 01:11:07
hype around this that I find extremely

01:11:04 --> 01:11:10
damaging and I've been calling it out

01:11:06 --> 01:11:12
when I've seen it so yeah but to go back

01:11:09 --> 01:11:15
to your original question like the

01:11:11 --> 01:11:16
necessity of embodiment I think I don't

01:11:14 --> 01:11:19
hink embodiment is necessary I think

01:11:15 --> 01:11:20
grounding is necessary so I don't think

01:11:18 --> 01:11:22
we're gonna get machines that I really

01:11:19 --> 01:11:23
understand language without some level

01:11:21 --> 01:11:25
of grounding in the world world and it's

01:11:22 --> 01:11:27
not clear to me that language is a kind

01:11:24 --> 01:11:31
of bandwidth medium to communicate how

01:11:26 --> 01:11:33
the real world works I think what this

01:11:30 --> 01:11:35
doctor ground our grounding means so

01:11:32 --> 01:11:36
running me he's that

01:11:34 --> 01:11:39
so there is this classic problem of

01:11:35 --> 01:11:42
common sense reasoning you know the the

01:11:38 --> 01:11:45
Winograd Winograd schema right and so I

01:11:41 --> 01:11:46
tell you the the trophy doesn't fit in

01:11:44 --> 01:11:48
the suitcase because this tool is too

01:11:45 --> 01:11:50
big what the trophy doesn't fit in the

01:11:47 --> 01:11:52
suitcase because it's too small and the

01:11:49 --> 01:11:53
it in the first case refers to the

01:11:51 --> 01:11:55
trophy in the second case to the

01:11:52 --> 01:11:57
suitcase and the reason you can figure

01:11:54 --> 01:11:58
this out is because you know what the

01:11:56 --> 01:11:59
trophy in the suitcase are you know one

01:11:57 --> 01:12:02
is supposed to fit in the other one and

01:11:58 --> 01:12:04
you know the notion of size and the big

01:12:01 --> 01:12:05
object doesn't fit in a small object and

01:12:03 --> 01:12:07
this is a TARDIS you know it things like

01:12:04 --> 01:12:09
that right so you have this got this

01:12:06 --> 01:12:13
knowledge of how the world works of

01:12:08 --> 01:12:15
geometry and things like that I don't

01:12:12 --> 01:12:17
believe you can learn everything about

01:12:14 --> 01:12:19
he world by just being told in language

01:12:16 --> 01:12:22
how the world works I think you need

01:12:18 --> 01:12:24
some low-level perception of the world

01:12:21 --> 01:12:26
you know be a visual touch you know

01:12:23 --> 01:12:28
hatever but some higher bandwidth

01:12:25 --> 01:12:30
perceptions of the world but by reading

01:12:27 --> 01:12:32
all the world's text you still may not

01:12:29 --> 01:12:35
have enough information that's right

01:12:31 --> 01:12:36
here's a lot of things that just will

01:12:34 --> 01:12:40
never appear in text and that you can't

01:12:35 --> 01:12:43
really infer so I think common sense

01:12:39 --> 01:12:44
will emerge from you know certainly a

01:12:42 --> 01:12:47
lot of language interaction but also

01:12:43 --> 01:12:48
with watching videos or perhaps even

01:12:46 --> 01:12:51
interacting in the in virtual

01:12:47 --> 01:12:53
environments and possibly you know robot

01:12:50 --> 01:12:54
interacting in the real world but I

01:12:52 --> 01:12:56
don't actually believe necessarily that

01:12:53 --> 01:12:58
his last one is absolutely necessary

01:12:55 --> 01:13:03
but I think there's a need for some

01:12:57 --> 01:13:05
grounding but the final product doesn't

01:13:02 --> 01:13:06
necessarily need to be embodied you know

01:13:04 --> 01:13:09
ho say no it just needs to have an

01:13:05 --> 01:13:12
awareness a grounding right but it needs

01:13:08 --> 01:13:14
to know how the world works to have you

01:13:12 --> 01:13:18
know to not be frustrated frustrating to

01:13:13 --> 01:13:21
talk to and you talked about emotions

01:13:17 --> 01:13:24
being important that's that's a whole

01:13:20 --> 01:13:27
nother topic well so you know I talked

01:13:23 --> 01:13:31
about this the the basal ganglia ganglia

01:13:26 --> 01:13:32
s the you know this thing that could

01:13:30 --> 01:13:34
you know calculates your level of miss

01:13:31 --> 01:13:36
contentment contentment and then there

01:13:33 --> 01:13:38
is this other module that sort of tries

01:13:35 --> 01:13:39
to do a prediction of whether you're

01:13:37 --> 01:13:41
going to be content or not that's the

01:13:38 --> 01:13:45
source of some emotion so here for

01:13:40 --> 01:13:48
example is an anticipation of bad things

01:13:44 --> 01:13:49
that can happen to you right

01:13:47 --> 01:13:51
you have this inkling that there is some

01:13:48 --> 01:13:52
chance that something really bad is

01:13:50 --> 01:13:53
gonna happen to you and that creates

01:13:51 --> 01:13:55
here when you know for sure that

01:13:53 --> 01:13:57
something bad is gonna happen to you you

01:13:54 --> 01:13:59
cannot give up right it's not bad

01:13:56 --> 01:14:02
anymore it's uncertainty it creates fear

01:13:58 --> 01:14:03
so so the punchline is yes we're not

01:14:01 --> 01:14:09
gonna have a ton of intelligence without

01:14:02 --> 01:14:11
emotions whatever the heck emotions are

01:14:08 --> 01:14:13
so you mentioned very practical things

01:14:10 --> 01:14:15
of fear but there's a lot of other mess

01:14:12 --> 01:14:17
around but there are kind of the results

01:14:14 --> 01:14:19
of you know drives

01:14:16 --> 01:14:22
yeah there's deeper biological stuff

01:14:18 --> 01:14:24
going on and I've talked a few folks on

01:14:21 --> 01:14:26
this there's a fascinating stuff that

01:14:23 --> 01:14:31
ultimately connects to our joy to our

01:14:26 --> 01:14:33
brain if we create an AGI system sorry

01:14:30 --> 01:14:36
interminable human level intelligence

01:14:32 --> 01:14:40
system and you get to ask her one

01:14:35 --> 01:14:42
question what would that question be you

01:14:39 --> 01:14:45
know I think the the first one we'll

01:14:41 --> 01:14:48
create would probably not be that smart

01:14:44 --> 01:14:51
did you like a four-year-old okay so you

01:14:47 --> 01:14:52
would have to ask her a question - no

01:14:50 --> 01:14:56
she's not that smart

01:14:51 --> 01:15:02
yeah well what's a good question to ask

01:14:56 --> 01:15:04
you know to be responsive wind and if

01:15:01 --> 01:15:06
she answers oh it's because the leaves

01:15:03 --> 01:15:10
of the tree are moving in that creates

01:15:05 --> 01:15:11
wind she's on to something and if she

01:15:09 --> 01:15:14
says yeah that's a stupid question

01:15:10 --> 01:15:17
she's really obtuse no and then you tell

01:15:13 --> 01:15:20
her actually you know here is the the

01:15:16 --> 01:15:20
real thing and she says oh yeah that

01:15:19 --> 01:15:25
makes sense

01:15:19 --> 01:15:26
so questions that that reveal the

01:15:24 --> 01:15:28
ability to do common-sense reasoning

01:15:25 --> 01:15:31
about the physical world yeah and you

01:15:27 --> 01:15:34
know someone will call 20 ferns causal

01:15:30 --> 01:15:36
evidence well it was a huge honor

01:15:33 --> 01:15:37
congratulations returning award you know

01:15:35 --> 01:15:40
and thank you so much for talking today

01:15:36 --> 01:15:40
thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
