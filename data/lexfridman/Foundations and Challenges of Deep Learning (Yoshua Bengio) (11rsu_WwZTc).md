---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "11rsu_WwZTc"
title: "Foundations and Challenges of Deep Learning (Yoshua Bengio)"
video_url: "https://www.youtube.com/watch?v=11rsu_WwZTc"
thumbnail_url: "https://i.ytimg.com/vi/11rsu_WwZTc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=11rsu_WwZTc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T18:02:03.000Z"
upload_date: "2016-09-27"
duration_seconds: 4320
duration_human: "1:12:00"
view_count: 23459
like_count: 267
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:23:09.992Z"
---

# Foundations and Challenges of Deep Learning (Yoshua Bengio)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=11rsu_WwZTc
- video_id: 11rsu_WwZTc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T18:02:03.000Z
- upload_date: 2016-09-27
- duration: 1:12:00
- view_count: 23459
- like_count: 267
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning
- categories: Science & Technology

## Description

The talks at the Deep Learning School on September 24/25, 2016 were amazing. I clipped out individual talks  from the full live streams and provided links to each below in case that's useful for people who want to watch specific talks several times (like I do). Please check out the official website (http://www.bayareadlschool.org) and full live streams below.

Having read, watched, and presented deep learning material over the past few years, I have to say that this is one of the best collection of introductory deep learning talks I've yet encountered. Here are links to the individual talks and the full live streams for the two days:

1. Foundations of Deep Learning (Hugo Larochelle, Twitter) - https://youtu.be/zij_FTbJHsk
2. Deep Learning for Computer Vision (Andrej Karpathy, OpenAI) - https://youtu.be/u6aEYuemt0M
3. Deep Learning for Natural Language Processing (Richard Socher, Salesforce) - https://youtu.be/oGk1v1jQITw
4. TensorFlow Tutorial (Sherry Moore, Google Brain) - https://youtu.be/Ejec3ID_h0w
5. Foundations of Unsupervised Deep Learning (Ruslan Salakhutdinov, CMU) - https://youtu.be/rK6bchqeaN8
6. Nuts and Bolts of Applying Deep Learning (Andrew Ng) - https://youtu.be/F1ka6a13S9I
7. Deep Reinforcement Learning (John Schulman, OpenAI) - https://youtu.be/PtAIh9KSnjo
8. Theano Tutorial (Pascal Lamblin, MILA) - https://youtu.be/OU8I1oJ9HhI
9. Deep Learning for Speech Recognition (Adam Coates, Baidu) - https://youtu.be/g-sndkf7mCs
10. Torch Tutorial (Alex Wiltschko, Twitter) - https://youtu.be/L1sHcj3qDNc
11. Sequence to Sequence Deep Learning (Quoc Le, Google) - https://youtu.be/G5RY_SUJih4
12. Foundations and Challenges of Deep Learning (Yoshua Bengio) - https://youtu.be/11rsu_WwZTc

Full Day Live Streams:
Day 1: https://youtu.be/eyovmAtoUx0
Day 2: https://youtu.be/9dXiAecyJrY

Go to http://www.bayareadlschool.org for more information on the event, speaker bios, slides, etc. Huge thanks to the organizers (Shubho Sengupta et al) for making this event happen.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:12
Thank You Sammy so I'll tell you about

00:00:06 --> 00:00:16
some very high-level stuff today no new

00:00:11 --> 00:00:19
algorithm some of you already know about

00:00:15 --> 00:00:21
he book that Ian Goodfellow erinkoval

00:00:18 --> 00:00:25
and I have written and it's now in

00:00:20 --> 00:00:30
presale by MIT press I think you can

00:00:24 --> 00:00:33
find it on Amazon or something and paper

00:00:29 --> 00:00:37
the actual shipping is going to be in

00:00:32 --> 00:00:42
December hopefully for nibs

00:00:36 --> 00:00:46
o we've already heard that story at

00:00:41 --> 00:00:49
least well from several people here at

00:00:45 --> 00:00:52
least from Andrew I think but it's good

00:00:48 --> 00:00:55
to ponder a little bit some of these

00:00:51 --> 00:00:58
ingredients that seem to be important

00:00:54 --> 00:01:00
for deep learning to succeed but in

00:00:57 --> 00:01:03
general for machine learning to succeed

00:00:59 --> 00:01:05
to learn really complicated tasks of the

00:01:02 --> 00:01:10
kind we want to reach human level

00:01:04 --> 00:01:15
performance so if a machine is going to

00:01:09 --> 00:01:17
be intelligent it's going to need to

00:01:14 --> 00:01:21
acquire a lot of information about the

00:01:16 --> 00:01:23
world and the big success of machine

00:01:20 --> 00:01:25
learning for AI has been to show that we

00:01:22 --> 00:01:29
can provide that information through

00:01:24 --> 00:01:30
data through examples but but really

00:01:28 --> 00:01:32
think about it you know that that

00:01:29 --> 00:01:34
machine will need to know a huge amount

00:01:31 --> 00:01:36
of information about the world around us

00:01:33 --> 00:01:38
this is not how we're doing it now

00:01:35 --> 00:01:40
because we're not able to train such big

00:01:37 --> 00:01:42
models but it will come one day and so

00:01:39 --> 00:01:45
we'll need models that are much bigger

00:01:41 --> 00:01:46
than the ones we currently have of

00:01:44 --> 00:01:48
course that means machine learning

00:01:45 --> 00:01:51
algorithms that can represent

00:01:47 --> 00:01:52
complicated functions that's you know

00:01:50 --> 00:01:53
one good thing about neural nets but

00:01:51 --> 00:01:55
here are many other machine learning

00:01:52 --> 00:02:00
approaches that allow you in principle

00:01:54 --> 00:02:01
to represent very flexible forms like

00:01:59 --> 00:02:05
nonparametric methods classical

00:02:00 --> 00:02:08
nonparametric methods or svms but

00:02:04 --> 00:02:12
hey're going to be missing 0.4 and

00:02:07 --> 00:02:14
potentially 0.5 depending on the methods

00:02:11 --> 00:02:16
point 3 of course

00:02:13 --> 00:02:19
you you need enough computing power to

00:02:15 --> 00:02:24
train and use these big models and

00:02:18 --> 00:02:25
point-five just says that it's not

00:02:23 --> 00:02:27
enough to be able to train the model you

00:02:24 --> 00:02:29
have to be able to use it in a

00:02:26 --> 00:02:31
reasonably efficient way from a

00:02:28 --> 00:02:32
computational perspective this is not

00:02:30 --> 00:02:35
always the case with some probabilistic

00:02:31 --> 00:02:37
models where inference in other words

00:02:34 --> 00:02:40
answering questions having the computer

00:02:36 --> 00:02:42
do something can be intractable and then

00:02:39 --> 00:02:45
you need to do some approximations which

00:02:41 --> 00:02:47
could be efficient or or not now the

00:02:44 --> 00:02:50
point I really want to talk about is the

00:02:46 --> 00:02:53
fourth one how do we defeat the curse of

00:02:49 --> 00:02:57
dimensionality in other words if you

00:02:52 --> 00:02:59
don't assume much about the world it's

00:02:56 --> 00:03:04
actually impossible to learn about it

00:02:58 --> 00:03:08
and and so I'm going to tell you a bit

00:03:03 --> 00:03:09
about the assumptions that are behind a

00:03:07 --> 00:03:12
lot of deep learning algorithms which

00:03:08 --> 00:03:14
make it possible to work as well as we

00:03:11 --> 00:03:32
are seeing in practice in the last few

00:03:13 --> 00:03:34
years something wrong Microsoft bug okay

00:03:31 --> 00:03:36
so how do we bypass the curse of

00:03:33 --> 00:03:38
dimensionality the curse of

00:03:35 --> 00:03:40
dimensionality is about the

00:03:37 --> 00:03:43
xponentially large number of

00:03:39 --> 00:03:46
configurations of the space variables

00:03:42 --> 00:03:48
that we want to model the number of

00:03:45 --> 00:03:52
values that all of the variables that we

00:03:47 --> 00:03:54
observe can take is going to be

00:03:51 --> 00:03:56
xponentially large in general because

00:03:53 --> 00:03:58
there's a compositional nature if if

00:03:55 --> 00:04:00
each pixel can take two values and you

00:03:57 --> 00:04:03
got a million pixels then you got two to

00:03:59 --> 00:04:07
ne million number of possible images so

00:04:02 --> 00:04:10
the only way to beat an exponential is

00:04:06 --> 00:04:14
to use another exponential so we need to

00:04:09 --> 00:04:16
make our models compositional we need to

00:04:13 --> 00:04:18
build our models in such a way that they

00:04:15 --> 00:04:25
can represent functions that look very

00:04:17 --> 00:04:26
complicated but yet these models need to

00:04:24 --> 00:04:29
have a reasonably small number of

00:04:25 --> 00:04:31
parameters reasonably small in the sense

00:04:28 --> 00:04:34
compared to the number of configurations

00:04:30 --> 00:04:38
of the variables the number of

00:04:33 --> 00:04:40
parameters should be small and we can

00:04:37 --> 00:04:42
achieve that by by composing little

00:04:39 --> 00:04:45
pieces together composing layers

00:04:41 --> 00:04:46
together it can put composing units on

00:04:44 --> 00:04:48
the same layer together and that's

00:04:45 --> 00:04:50
essentially what's happening with deep

00:04:47 --> 00:04:53
learning so you actually have two kinds

00:04:49 --> 00:04:54
of compositions there's the the

00:04:52 --> 00:04:57
compositions happening on the same layer

00:04:53 --> 00:04:59
this is the idea of distributed

00:04:56 --> 00:05:01
representations which I'm going to try

00:04:58 --> 00:05:03
to explain a bit more this is what you

00:05:00 --> 00:05:05
get when you learn embeddings for

00:05:02 --> 00:05:08
wards or for images representations

00:05:04 --> 00:05:10
in general and then there's the idea of

00:05:07 --> 00:05:14
having multiple levels of representation

00:05:09 --> 00:05:16
that's the notion of depth and there

00:05:13 --> 00:05:18
is another kind of composition

00:05:15 --> 00:05:20
takes place whereas the

00:05:17 --> 00:05:21
first one is a kind of parallel

00:05:19 --> 00:05:22
composition I'm you know I can choose

00:05:20 --> 00:05:24
the values of my different units

00:05:21 --> 00:05:27
eparately and then they together

00:05:23 --> 00:05:30
epresent an exponentially large number

00:05:26 --> 00:05:31
of possible configurations in the second

00:05:29 --> 00:05:34
case there's a sequential composition

00:05:30 --> 00:05:37
where I take the output of one level and

00:05:33 --> 00:05:38
I combine them in new ways to build

00:05:36 --> 00:05:45
features for the next level and so on

00:05:37 --> 00:05:47
right so so the reason deep

00:05:44 --> 00:05:52
learning is working is because the world

00:05:46 --> 00:05:55
around us is better modeled by making

00:05:51 --> 00:05:56
these assumptions it's not necessarily

00:05:54 --> 00:05:58
true that deep learning is going to work

00:05:55 --> 00:06:00
for any machine learning problem in fact

00:05:57 --> 00:06:01
if if we consider the set of all

00:05:59 --> 00:06:05
possible distributions that we would

00:06:00 --> 00:06:08
like to work from deep learning is no

00:06:04 --> 00:06:10
better than any other and that's this is

00:06:07 --> 00:06:13
basically what the no free lunch theorem

00:06:09 --> 00:06:15
is saying it's because we are incredibly

00:06:12 --> 00:06:17
lucky that we live in this world which

00:06:14 --> 00:06:19
can be described by using composition

00:06:16 --> 00:06:22
that these algorithms are working so

00:06:18 --> 00:06:25
well this is important to really

00:06:21 --> 00:06:25
understand this

00:06:26 --> 00:06:33
o before I go a bit more into

00:06:30 --> 00:06:34
distributed representations let me say a

00:06:32 --> 00:06:36
few words about non distributor

00:06:33 --> 00:06:39
presentations so if you're thinking

00:06:35 --> 00:06:42
about things like clustering engrams for

00:06:38 --> 00:06:45
language modeling classical nearest

00:06:41 --> 00:06:48
neighbors SVM's with Gaussian kernels

00:06:44 --> 00:06:53
classical nonparametric models with

00:06:47 --> 00:06:57
local kernels and decision trees all

00:06:52 --> 00:06:58
these things the way these algorithms

00:06:56 --> 00:07:01
really work is actually pretty

00:06:57 --> 00:07:04
straightforward if you you know cut the

00:07:00 --> 00:07:06
crap and hide the math and try to

00:07:03 --> 00:07:10
understand what is going on they they

00:07:05 --> 00:07:14
look at the data in in data space and

00:07:09 --> 00:07:17
they break that space into regions and

00:07:13 --> 00:07:18
they're going to use different free

00:07:16 --> 00:07:20
parameters for each of those regions to

00:07:18 --> 00:07:22
figure out what the right answer should

00:07:19 --> 00:07:23
be the right answer it doesn't have to

00:07:21 --> 00:07:24
be supervised learning even an S

00:07:22 --> 00:07:26
provides I think there's a right answer

00:07:23 --> 00:07:27
it might be the density or something

00:07:25 --> 00:07:30
like that

00:07:26 --> 00:07:32
okay and you might think that that's the

00:07:29 --> 00:07:34
only way of solving a problem you know

00:07:31 --> 00:07:36
e consider all of the cases and we have

00:07:33 --> 00:07:38
an answer for each of the cases and we

00:07:35 --> 00:07:41
can maybe interpolate between those

00:07:37 --> 00:07:44
cases that we've seen the problem with

00:07:40 --> 00:07:48
is is somebody comes up with a new

00:07:43 --> 00:07:50
example which isn't in between two of

00:07:47 --> 00:07:52
the examples we've seen something that a

00:07:49 --> 00:07:54
la requires us to extrapolate something

00:07:51 --> 00:07:56
that's you know non-trivial

00:07:53 --> 00:07:58
generalization and and these algorithms

00:07:55 --> 00:08:00
just fail they don't they don't really

00:07:57 --> 00:08:02
have a recipe for saying something

00:07:59 --> 00:08:06
meaningful away from the training

00:08:01 --> 00:08:08
examples there's another interesting

00:08:05 --> 00:08:10
thing to note here which I would like to

00:08:07 --> 00:08:14
you to keep in mind before I show the

00:08:09 --> 00:08:18
next slide which is in red here which is

00:08:13 --> 00:08:21
we can do a kind of simple counting to

00:08:17 --> 00:08:22
relate the number of parameters a number

00:08:20 --> 00:08:27
of free parameters that can be learning

00:08:21 --> 00:08:30
and the number of regions in the data

00:08:26 --> 00:08:33
space that we can distinguish so here we

00:08:29 --> 00:08:35
basically have linear relationship

00:08:32 --> 00:08:36
between these two things right so for

00:08:34 --> 00:08:40
each region I'm going to need at least

00:08:35 --> 00:08:41
something like some kind of Center for

00:08:39 --> 00:08:44
the region and

00:08:40 --> 00:08:46
maybe if I need to output something I'll

00:08:43 --> 00:08:47
ean an extra set of parameters to tell

00:08:45 --> 00:08:50
me what the answer should be in that

00:08:46 --> 00:08:52
area so the number of parameters grows

00:08:49 --> 00:08:55
linearly with the number of regions that

00:08:51 --> 00:08:58
I I'm going to be able to distinguish

00:08:54 --> 00:09:00
the good news is I can have any kind of

00:08:57 --> 00:09:01
unction right so I can break up the

00:08:59 --> 00:09:03
space in any way I want and then for

00:09:00 --> 00:09:07
each of those regions I can have any

00:09:02 --> 00:09:09
kind of output that I need so for

00:09:06 --> 00:09:11
decision trees the regions would be you

00:09:08 --> 00:09:14
know splitting across axes and so on and

00:09:10 --> 00:09:16
for this is more like four nearest

00:09:13 --> 00:09:25
neighbor or something like that

00:09:15 --> 00:09:36
now another bug I don't think I will

00:09:24 --> 00:09:51
send this hope works this time oh I have

00:09:35 --> 00:09:57
a another option sorry about this okay

00:09:50 --> 00:10:00
so so here's the the point of view of

00:09:56 --> 00:10:01
the suit representations for solving the

00:09:59 --> 00:10:03
same general machine learning problem we

00:10:00 --> 00:10:05
have a data space and we want to break

00:10:02 --> 00:10:08
it down but we're going to break it down

00:10:04 --> 00:10:10
in a way that's not general we're going

00:10:07 --> 00:10:13
to break it down in a way that makes

00:10:09 --> 00:10:15
assumptions about the data but it's

00:10:12 --> 00:10:18
going to be compositional and it's going

00:10:14 --> 00:10:19
to allow us to you know be exponentially

00:10:17 --> 00:10:22
more efficient so how are we going to do

00:10:18 --> 00:10:25
this so in the picture on the right what

00:10:21 --> 00:10:28
you see is a way to break the input

00:10:24 --> 00:10:30
space by the intersection of half-planes

00:10:27 --> 00:10:32
and this is the kind of thing you would

00:10:29 --> 00:10:35
have with a what happens at the first

00:10:31 --> 00:10:37
layer of a neural net so here imagine

00:10:34 --> 00:10:40
the input is 2-dimensional so I can plot

00:10:36 --> 00:10:43
it here and I have three binary hidden

00:10:39 --> 00:10:47
units c1 c2 c3 so because they're binary

00:10:42 --> 00:10:51
ou can think of them as little binary

00:10:46 --> 00:10:54
classifiers and because it's only a one

00:10:50 --> 00:10:55
layer net you can think of what they're

00:10:53 --> 00:10:58
doing is a linear classification

00:10:54 --> 00:11:01
and so those colored hyperplanes here

00:10:57 --> 00:11:05
are the decision surfaces for each of

00:11:00 --> 00:11:07
them now these three bits there can take

00:11:04 --> 00:11:09
they can take eight values right

00:11:06 --> 00:11:12
corresponding to you know whether each

00:11:08 --> 00:11:14
of them is on or off and and those

00:11:11 --> 00:11:18
different configurations of those bits

00:11:13 --> 00:11:19
correspond to actually seven regions

00:11:17 --> 00:11:24
here because there's one of the eight

00:11:18 --> 00:11:26
regions which does is not feasible so so

00:11:23 --> 00:11:28
now you see that we're defining a number

00:11:25 --> 00:11:30
of regions which is corresponding to all

00:11:27 --> 00:11:34
of the possible intersections of the

00:11:29 --> 00:11:38
corresponding half-planes and and now we

00:11:33 --> 00:11:40
can play the game of how many regions do

00:11:37 --> 00:11:43
we get for how many parameters and what

00:11:39 --> 00:11:47
we see is that as if we played the game

00:11:42 --> 00:11:49
of growing the number of dimensions

00:11:46 --> 00:11:51
features and also of inputs we can get

00:11:48 --> 00:11:53
an exponentially large number of regions

00:11:50 --> 00:11:54
which are all of these intersections

00:11:52 --> 00:11:58
right there's an exponential number of

00:11:53 --> 00:12:00
these intersections corresponding to

00:11:57 --> 00:12:02
different binary configurations yet the

00:11:59 --> 00:12:05
number of parameters grows linearly with

00:12:01 --> 00:12:08
e number of units so it looks like

00:12:04 --> 00:12:09
we're able to express a function then on

00:12:07 --> 00:12:13
top of that I could imagine you have a

00:12:08 --> 00:12:15
linear classifier right that's that's

00:12:12 --> 00:12:17
the one hidden layer new on that so so

00:12:14 --> 00:12:21
the number of parameters grows just

00:12:16 --> 00:12:23
linearly with the number of features but

00:12:20 --> 00:12:25
he number of regions that the network

00:12:22 --> 00:12:31
can really provide a different answer to

00:12:24 --> 00:12:34
grows exponentially so this is very cool

00:12:30 --> 00:12:36
and the reason it's very cool is that it

00:12:33 --> 00:12:40
allows those neural nets to generalize

00:12:35 --> 00:12:45
because while we're learning about each

00:12:39 --> 00:12:47
of those features we can generalize to

00:12:44 --> 00:12:49
regions we've never seen because we've

00:12:46 --> 00:12:51
learned enough about each of those

00:12:48 --> 00:12:53
features separately I'm going to give

00:12:50 --> 00:12:59
you an example of this in a couple of

00:12:52 --> 00:13:02
slide actually it's let's do it first so

00:12:58 --> 00:13:05
think about those features so the

00:13:01 --> 00:13:08
input is an image of a person and think

00:13:04 --> 00:13:09
of those features as things like I have

00:13:07 --> 00:13:11
a detector

00:13:08 --> 00:13:15
that says that the person wears glasses

00:13:10 --> 00:13:17
and I have another unit that's detecting

00:13:14 --> 00:13:19
that the person is a female or male and

00:13:16 --> 00:13:21
I have another unit that texts that the

00:13:18 --> 00:13:23
person is a child or not and you can

00:13:20 --> 00:13:27
imagine you know hundreds or thousands

00:13:22 --> 00:13:32
of these things of course so so the good

00:13:27 --> 00:13:35
news is you could imagine learning about

00:13:31 --> 00:13:40
each of these feature detectors these

00:13:34 --> 00:13:41
little classifiers separately in fact

00:13:39 --> 00:13:43
you could do better than that you could

00:13:40 --> 00:13:45
share you know intermediate layers

00:13:42 --> 00:13:47
between the input and those features but

00:13:44 --> 00:13:49
let's you know take even the worst

00:13:46 --> 00:13:50
case and imagine we were to train those

00:13:48 --> 00:13:54
parately which is the case in the

00:13:49 --> 00:13:55
linear model that I show before we have

00:13:53 --> 00:13:59
a separate set of parameters for each of

00:13:54 --> 00:14:01
these detectors so if I have n features

00:13:58 --> 00:14:05
each of them say needs order of K

00:14:00 --> 00:14:07
parameters then I need order of NK

00:14:04 --> 00:14:09
parameters and I need order of NK

00:14:06 --> 00:14:11
examples and one thing you should know

00:14:08 --> 00:14:18
from you know which machine learning

00:14:10 --> 00:14:18
theory is that if you have order of P

00:14:17 --> 00:14:23
parameters you need order of P examples

00:14:20 --> 00:14:26
to do a reasonable job of jaw's age of

00:14:22 --> 00:14:28
journalizing you can you can get around

00:14:25 --> 00:14:30
that by regularizing and effectively

00:14:27 --> 00:14:32
having less degrees of freedom but but

00:14:29 --> 00:14:34
you know to keep things simple you need

00:14:31 --> 00:14:35
about the same number of examples or

00:14:33 --> 00:14:38
maybe a hundred times more or ten times

00:14:34 --> 00:14:43
more as the number of really free

00:14:37 --> 00:14:43
parameters so so now the relationship

00:14:42 --> 00:14:50
between the number of regions that I can

00:14:46 --> 00:14:53
represent and the number of examples I

00:14:49 --> 00:14:54
need is quite nice because the number of

00:14:52 --> 00:14:58
regions is going to be to to the number

00:14:53 --> 00:14:59
of features of these binary features so

00:14:57 --> 00:15:01
you know a person could wear glasses or

00:14:58 --> 00:15:03
not be a female or a male or child or

00:15:00 --> 00:15:06
not and I could have a hundred of these

00:15:02 --> 00:15:09
things and I could probably recognize

00:15:05 --> 00:15:12
reasonably well all of these two to the

00:15:08 --> 00:15:15
100 configurations of people even though

00:15:11 --> 00:15:17
I've obviously not seen all of those to

00:15:14 --> 00:15:19
do 100 configurations why is it that I'm

00:15:16 --> 00:15:22
able to do that I'm able to do that

00:15:18 --> 00:15:22
because the the models can learn about

00:15:21 --> 00:15:24
each

00:15:21 --> 00:15:26
these binary features kind of

00:15:23 --> 00:15:29
independently in the sense that I don't

00:15:25 --> 00:15:31
need to see every possible configuration

00:15:28 --> 00:15:34
of the other features to know about

00:15:30 --> 00:15:37
wearing glasses like I can learn about

00:15:33 --> 00:15:41
wearing glasses even though I've never

00:15:36 --> 00:15:45
seen somebody who was a female and a

00:15:40 --> 00:15:49
child and chubby and had you know yellow

00:15:44 --> 00:15:51
shoes and and and I have seen enough

00:15:48 --> 00:15:53
examples of people wearing glasses I can

00:15:50 --> 00:15:54
learn about wearing glasses in general I

00:15:52 --> 00:15:56
don't need to see all of the

00:15:53 --> 00:16:00
configurations of the other features to

00:15:55 --> 00:16:03
learn about one feature okay and so so

00:15:59 --> 00:16:07
this is really what what you know why

00:16:02 --> 00:16:09
this thing works is because we're making

00:16:06 --> 00:16:12
assumptions about the data that those

00:16:08 --> 00:16:15
features are meaningful by themselves

00:16:11 --> 00:16:17
and you don't need to actually have data

00:16:14 --> 00:16:21
for each of the regions the exponential

00:16:16 --> 00:16:23
number of regions in order to learn the

00:16:20 --> 00:16:26
proper way of detecting or lore of

00:16:22 --> 00:16:29
discovering these these these

00:16:25 --> 00:16:32
intermediate features let me add

00:16:28 --> 00:16:34
something here there were some

00:16:31 --> 00:16:38
xperiments recently actually showing

00:16:33 --> 00:16:40
that this kind of thing is really

00:16:37 --> 00:16:44
happening

00:16:39 --> 00:16:46
because the features I was talking about

00:16:43 --> 00:16:50
not only I'm assuming that they exist

00:16:45 --> 00:16:51
but the the optimization methods or

00:16:49 --> 00:16:56
training procedures discover them they

00:16:51 --> 00:17:00
can learn them and this is an experiment

00:16:55 --> 00:17:04
hat's been done in 2012 all Tour Alba's

00:16:59 --> 00:17:08
lab at MIT where they trained a usual

00:17:03 --> 00:17:11
confidence to recognize places so the

00:17:07 --> 00:17:13
outputs of the net are just the types of

00:17:10 --> 00:17:15
places like is this a beach scene or an

00:17:12 --> 00:17:19
office scene or street scene and so on

00:17:14 --> 00:17:21
but but then the the thing they've done

00:17:18 --> 00:17:22
is they ask people to analyze the the

00:17:20 --> 00:17:23
hidden units to try to figure out what

00:17:21 --> 00:17:25
each hidden unit was doing and they

00:17:22 --> 00:17:28
found that there's a large proportion of

00:17:24 --> 00:17:30
units that humans can find a pretty

00:17:27 --> 00:17:33
obvious interpretation for what those

00:17:29 --> 00:17:36
units like so so they see a bunch of

00:17:32 --> 00:17:38
units which you know

00:17:35 --> 00:17:40
like people are different kinds of

00:17:37 --> 00:17:43
people or animals or buildings or

00:17:39 --> 00:17:47
seedings or tables lighting and so on so

00:17:42 --> 00:17:49
it's like if indeed the those neural

00:17:46 --> 00:17:50
nets are discovering semantic features

00:17:48 --> 00:17:53
they are semantic because actually

00:17:49 --> 00:17:55
people give them names as the

00:17:52 --> 00:17:57
intermediate features you know in order

00:17:54 --> 00:18:01
to reach the final goal of here

00:17:56 --> 00:18:03
transpiring scenes and the reason

00:18:00 --> 00:18:05
they're generalizing is because now you

00:18:02 --> 00:18:06
can combine those features in an

00:18:04 --> 00:18:10
exponentially large number of ways right

00:18:05 --> 00:18:12
you could have a scene that has a table

00:18:09 --> 00:18:16
different kind of lighting some people

00:18:11 --> 00:18:17
you know maybe a pet and and you can say

00:18:15 --> 00:18:21
something meaningful about the

00:18:16 --> 00:18:22
combinations of these things because the

00:18:20 --> 00:18:25
network is able to learn all of these

00:18:21 --> 00:18:29
features without having to see all of

00:18:24 --> 00:18:30
the possible configurations of them so I

00:18:28 --> 00:18:33
don't know if my explanation makes sense

00:18:29 --> 00:18:44
to you but now is the chance to ask me a

00:18:32 --> 00:18:44
question all clear usually it's not yeah

00:18:45 --> 00:18:56
with decision trees right to some extent

00:18:52 --> 00:18:58
so if the question is can't we do the

00:18:55 --> 00:19:00
same thing with a set of decision trees

00:18:57 --> 00:19:04
yeah in fact this is one of the reasons

00:18:59 --> 00:19:06
why forests work better or bagged trees

00:19:03 --> 00:19:08
work better than single trees forests or

00:19:05 --> 00:19:11
actually or Bank trees are like one

00:19:07 --> 00:19:14
layer one level deeper than a single

00:19:10 --> 00:19:19
trees but but they still don't have as

00:19:13 --> 00:19:22
much of a sort of distributed aspect as

00:19:18 --> 00:19:24
neural nets so they be and and usually

00:19:21 --> 00:19:27
they're not trained jointly I mean

00:19:23 --> 00:19:30
boosted trees are you know to some

00:19:26 --> 00:19:31
xtent in a greedy way but yeah any

00:19:29 --> 00:19:42
other question

00:19:30 --> 00:19:47
yeah cases where what non-conditional

00:19:41 --> 00:19:49
non computer vision non compositional I

00:19:47 --> 00:19:51
don't understand the question

00:19:48 --> 00:19:54
I mean I don't sound what you mean what

00:19:50 --> 00:19:57
do you mean non compositional yeah it's

00:19:53 --> 00:19:58
everywhere around us I don't think I

00:19:56 --> 00:20:00
don't think that there are examples of

00:19:57 --> 00:20:01
neural nets that really work well where

00:19:59 --> 00:20:04
the data doesn't have some kind of

00:20:00 --> 00:20:06
compositional structure in it but if you

00:20:03 --> 00:20:08
come up with an example I'd like to hear

00:20:05 --> 00:20:08
about it

00:20:07 --> 00:20:12
okie s yes

00:20:28 --> 00:20:36
to think about this issue in graphical

00:20:31 --> 00:20:39
model terms is is if it can be done but

00:20:35 --> 00:20:42
you have to think about not feature

00:20:38 --> 00:20:45
detection like I've been doing here but

00:20:41 --> 00:20:47
about generating an image or something

00:20:44 --> 00:20:49
like that right then it's easier to

00:20:46 --> 00:20:50
think about it so so the same kinds of

00:20:48 --> 00:20:54
things happen if you think about how I

00:20:49 --> 00:20:56
could generate an image if you think

00:20:53 --> 00:20:58
about underlying factors like which

00:20:55 --> 00:21:01
objects where they are what's their

00:20:57 --> 00:21:03
identity what's their size these are all

00:21:00 --> 00:21:06
independent factors which you compose

00:21:02 --> 00:21:07
together in in funny ways if you were to

00:21:05 --> 00:21:12
do a graphics engine you can see exactly

00:21:06 --> 00:21:14
what those ways are and it's much much

00:21:11 --> 00:21:16
easier to represent that joint of

00:21:13 --> 00:21:20
distribution using this compositional

00:21:15 --> 00:21:22
structure then if you're trying to work

00:21:19 --> 00:21:24
directly in the pixel space which is

00:21:21 --> 00:21:27
normally what you would do with a

00:21:23 --> 00:21:29
classical nonparametric method and it

00:21:26 --> 00:21:31
wouldn't work but if you look at our

00:21:28 --> 00:21:34
best D generative models now for images

00:21:30 --> 00:21:38
for example like ganz or V AES they're

00:21:33 --> 00:21:39
ally you know we're not there yet but

00:21:37 --> 00:21:41
hey're amazingly better than anything

00:21:38 --> 00:21:45
that people could dream up just a few

00:21:40 --> 00:21:49
years ago in in machine learning okay

00:21:44 --> 00:21:52
let me move on because of other things

00:21:48 --> 00:21:56
to talk about so this is all kind of

00:21:51 --> 00:22:02
hand wavy but some people have done some

00:21:55 --> 00:22:05
math around these ideas and and so for

00:22:01 --> 00:22:08
example there's one result from two

00:22:04 --> 00:22:13
years ago I clear where we study the

00:22:07 --> 00:22:19
single layer case and we consider a

00:22:12 --> 00:22:23
network with rectifiers rellis and we

00:22:18 --> 00:22:26
find that the the network of course

00:22:22 --> 00:22:32
computes a piecewise linear function and

00:22:25 --> 00:22:34
so one way to quantify the richness of

00:22:31 --> 00:22:35
the function that it can compute I was

00:22:33 --> 00:22:37
talking about regions here but well you

00:22:34 --> 00:22:40
can do the same thing here you can count

00:22:36 --> 00:22:42
how many pieces does does this

00:22:39 --> 00:22:46
network have in its input to output

00:22:41 --> 00:22:52
function and and it turns out that is it

00:22:45 --> 00:22:54
six potential in in the number of inputs

00:22:51 --> 00:22:59
well it's a number of units to the power

00:22:53 --> 00:23:01
number of inputs so that's for a sort of

00:22:58 --> 00:23:04
district representation there's this an

00:23:00 --> 00:23:07
exponential kicking in we also studied

00:23:03 --> 00:23:12
the the depth aspect so what you need to

00:23:06 --> 00:23:14
know about depth is that there's a lot

00:23:11 --> 00:23:16
of earlier theory that says that a

00:23:13 --> 00:23:18
single layer is sufficient to represent

00:23:15 --> 00:23:20
any function however that theory doesn't

00:23:17 --> 00:23:23
specify how many units you get you might

00:23:19 --> 00:23:27
need and in fact you might need an

00:23:22 --> 00:23:31
especially large number of units so what

00:23:26 --> 00:23:35
several results show is that there are

00:23:30 --> 00:23:39
functions that can be represented very

00:23:34 --> 00:23:41
efficiently with few units so few

00:23:38 --> 00:23:45
parameters if you allow the network to

00:23:40 --> 00:23:47
be deep enough so out of all the

00:23:44 --> 00:23:48
functions again it's a luckiness thing

00:23:46 --> 00:23:51
right out of all the functions that

00:23:47 --> 00:23:55
exists there's a very very small

00:23:50 --> 00:23:59
fraction which happen to be very easy to

00:23:54 --> 00:24:01
represent with a deep network and if you

00:23:58 --> 00:24:04
try to represent these these functions

00:24:00 --> 00:24:06
with a shallow network you're screwed

00:24:03 --> 00:24:09
you're going to need an exponential

00:24:05 --> 00:24:11
number of parameters and so you're gonna

00:24:08 --> 00:24:14
need an exponential number of examples

00:24:10 --> 00:24:16
to learn these things but again we're

00:24:13 --> 00:24:19
incredibly lucky that the function we

00:24:15 --> 00:24:21
want to learn have this property but in

00:24:18 --> 00:24:23
the sense it's not surprising I mean we

00:24:20 --> 00:24:24
use this kind of compositionality and

00:24:22 --> 00:24:26
epth everywhere we when we write a

00:24:23 --> 00:24:29
computer program we just don't have like

00:24:25 --> 00:24:33
a single main we have you know functions

00:24:28 --> 00:24:35
and call functions and and we were able

00:24:32 --> 00:24:36
to show similar things as what I was

00:24:34 --> 00:24:41
telling you about for the single layer

00:24:35 --> 00:24:45
case that as you increase depth for

00:24:40 --> 00:24:47
these deep relu networks the number of

00:24:44 --> 00:24:51
pieces in the piecewise linear function

00:24:46 --> 00:24:53
grows exponentially with the depth so so

00:24:50 --> 00:24:54
it's it's already exponentially large

00:24:52 --> 00:24:58
with a single-layer but it gets

00:24:53 --> 00:25:02
exponentially even more with a deeper

00:24:57 --> 00:25:06
net okay so so this this was a topic of

00:25:02 --> 00:25:09
representation of functions why why deep

00:25:05 --> 00:25:11
learn deep architectures can can be very

00:25:08 --> 00:25:17
powerful if we're lucky and we seem to

00:25:10 --> 00:25:20
be looking the other another topic I

00:25:16 --> 00:25:22
want to mention that's kind of very much

00:25:19 --> 00:25:24
in the foundations is how is it that

00:25:21 --> 00:25:28
we're able to train these neural nets in

00:25:23 --> 00:25:32
the first place in the 90s many people

00:25:27 --> 00:25:34
decided to not do any more research on

00:25:31 --> 00:25:36
your nuts because there were 30 Korra's

00:25:33 --> 00:25:38
ult's showing that there are really an

00:25:35 --> 00:25:43
exponentially large number of local

00:25:37 --> 00:25:47
minima in the training objective in of a

00:25:42 --> 00:25:49
neural net so in other words the

00:25:46 --> 00:25:52
function we want to learn has many of

00:25:48 --> 00:25:54
these holes and if we start at a random

00:25:51 --> 00:25:56
place well what's the chance we're going

00:25:53 --> 00:26:00
to find the best one the the one that

00:25:55 --> 00:26:03
corresponds to a good cost and that was

00:25:59 --> 00:26:06
one of the motivations for people who

00:26:02 --> 00:26:07
flocked into a very large area of

00:26:05 --> 00:26:11
research in machine learning in the 90s

00:26:06 --> 00:26:13
and 2000's based on algorithms that

00:26:10 --> 00:26:15
require on the convex optimization to

00:26:12 --> 00:26:18
Train because of course if we can do

00:26:14 --> 00:26:19
context optimization we eliminate this

00:26:17 --> 00:26:21
problem if if the objective function is

00:26:18 --> 00:26:28
convex in the parameters then we know

00:26:20 --> 00:26:30
there's a single global minimum right so

00:26:27 --> 00:26:32
let me show you a picture here you get a

00:26:29 --> 00:26:35
sense of if you look on the right hand

00:26:31 --> 00:26:40
top this is if you draw a random

00:26:34 --> 00:26:41
function in 1d or 2d or 3d like here

00:26:39 --> 00:26:44
this is a kind of a random smooth

00:26:40 --> 00:26:46
function in 2d you see that is going to

00:26:43 --> 00:26:52
have many ups and downs this is a local

00:26:45 --> 00:26:55
minimum and but but the good news is

00:26:51 --> 00:26:57
that in high dimension it's a totally

00:26:54 --> 00:26:58
different story so what are the

00:26:56 --> 00:27:01
dimensions here we're talking about the

00:26:57 --> 00:27:04
parameters of the model and the vertical

00:27:00 --> 00:27:05
axis is the cost we're trying to

00:27:03 --> 00:27:08
minimize

00:27:04 --> 00:27:12
and what happens in high dimension is

00:27:07 --> 00:27:14
that instead of having a huge number of

00:27:11 --> 00:27:16
local minima on our way when we're

00:27:13 --> 00:27:19
trying to optimize what we encounter

00:27:15 --> 00:27:21
instead is a huge number of saddle

00:27:18 --> 00:27:24
points so saddle point is like the thing

00:27:20 --> 00:27:26
on the bottom right in in 2d so you have

00:27:23 --> 00:27:28
two parameters and y-axis is the cost

00:27:25 --> 00:27:30
you want to minimize and so what you see

00:27:28 --> 00:27:35
in a saddle point is yeah you have

00:27:29 --> 00:27:38
dimensions or directions where the the

00:27:34 --> 00:27:42
objective function draws a a minimum so

00:27:37 --> 00:27:45
there's like a curve that it curves up

00:27:41 --> 00:27:48
and in other directions it curves down

00:27:44 --> 00:27:49
so we are you know saddle point has both

00:27:47 --> 00:27:54
a minimum in some direction and a

00:27:48 --> 00:27:57
maximum in other directions so this is

00:27:53 --> 00:28:04
interesting because even though

00:27:56 --> 00:28:05
it's a these these points like saddle

00:28:03 --> 00:28:06
points and many more are places where

00:28:04 --> 00:28:08
you could get stuck in principle if

00:28:05 --> 00:28:10
you're exactly at the subtle point you

00:28:07 --> 00:28:12
don't move but if you move a little bit

00:28:09 --> 00:28:20
away from it you will go down the saddle

00:28:11 --> 00:28:23
right so what what our work in the other

00:28:19 --> 00:28:26
paper other work from NYU

00:28:22 --> 00:28:33
tremonica and collaborators of Yann

00:28:25 --> 00:28:38
Locker showed is that actually in very

00:28:32 --> 00:28:39
high dimension not only you know it's

00:28:37 --> 00:28:42
the issue is more saddle points

00:28:38 --> 00:28:45
than local minima but but the local

00:28:41 --> 00:28:51
minima are good so let me try to explain

00:28:44 --> 00:28:54
what I mean by this so let me show you

00:28:50 --> 00:28:57
actually first an experiment from from

00:28:53 --> 00:29:00
the NYU guys so they did an experiment

00:28:56 --> 00:29:03
where they gradually change the size of

00:28:59 --> 00:29:05
the neural net and they they look at

00:29:02 --> 00:29:07
what looks like local minima but they

00:29:04 --> 00:29:10
could be you know saddle points that are

00:29:06 --> 00:29:13
the lowest that they could obtain by

00:29:09 --> 00:29:15
training and what you're looking at is a

00:29:12 --> 00:29:17
distribution of errors they get from

00:29:14 --> 00:29:20
different initialization

00:29:16 --> 00:29:23
of their training and so what happens is

00:29:19 --> 00:29:25
that when the network is small like the

00:29:22 --> 00:29:28
pink here on the right there's a

00:29:24 --> 00:29:30
widespread distribution of cost that you

00:29:27 --> 00:29:33
can get depending on where you you you

00:29:29 --> 00:29:35
start and they're pretty high and if you

00:29:32 --> 00:29:38
increase the size of the network it's

00:29:34 --> 00:29:42
like all of the local minima that you

00:29:37 --> 00:29:45
find concentrate around a particular

00:29:41 --> 00:29:47
costs so you don't get any of these bad

00:29:44 --> 00:29:50
local minima that you would get with a

00:29:46 --> 00:29:52
small Network they're all kind of pretty

00:29:49 --> 00:29:53
good and if you increase even more the

00:29:51 --> 00:29:55
size of network this is like a single

00:29:52 --> 00:29:57
hidden layer network you know not very

00:29:54 --> 00:29:59
complicated

00:29:56 --> 00:30:00
this phenomenon increases even more in

00:29:58 --> 00:30:03
other words they all kind of converge to

00:29:59 --> 00:30:06
the same kind of costs so let me try to

00:30:02 --> 00:30:09
explain what's going on so if we go back

00:30:05 --> 00:30:11
to the picture of the saddle point but

00:30:08 --> 00:30:14
instead of being in 2d imagine you are

00:30:10 --> 00:30:16
in a million D and in fact you know

00:30:13 --> 00:30:19
people have billion D networks these

00:30:15 --> 00:30:25
days I'm sure andrew has even bigger

00:30:18 --> 00:30:27
ones I'm not sure but so what happens in

00:30:24 --> 00:30:32
this very high dimensional space of

00:30:26 --> 00:30:36
parameters is that if if things are not

00:30:32 --> 00:30:38
really you know really bad for you so if

00:30:35 --> 00:30:39
you imagine a little bit of randomness

00:30:37 --> 00:30:43
in the way the problem is set up and

00:30:38 --> 00:30:46
there it seems to be the case in order

00:30:42 --> 00:30:49
to have a true local minimum you need to

00:30:45 --> 00:30:54
have the curvature going up like this in

00:30:48 --> 00:30:56
all the you know billion directions so

00:30:53 --> 00:30:58
if there is a certain probability of

00:30:55 --> 00:31:00
this event happening that all know that

00:30:57 --> 00:31:01
his particular directions is curving up

00:30:59 --> 00:31:03
and this one is grabbing up the

00:31:00 --> 00:31:08
probability that all of them curve up

00:31:02 --> 00:31:11
becomes exponentially small so we we

00:31:07 --> 00:31:15
tested that experimentally what you see

00:31:10 --> 00:31:20
in the bottom left is a curve that shows

00:31:14 --> 00:31:22
the training error as a function of

00:31:19 --> 00:31:26
what's called the index of the critical

00:31:21 --> 00:31:30
point which is just the fraction of the

00:31:25 --> 00:31:36
directions which are

00:31:29 --> 00:31:40
curving down right so so 0% would mean

00:31:35 --> 00:31:42
it's a local minimum a hundred percent

00:31:39 --> 00:31:45
would be it's a local maximum and

00:31:41 --> 00:31:48
anything in between is a saddle point so

00:31:44 --> 00:31:52
what we find is that as training

00:31:47 --> 00:31:56
progresses we're going close to a bunch

00:31:51 --> 00:31:58
of saddle points and these and none of

00:31:55 --> 00:32:03
them are local minima otherwise we would

00:31:57 --> 00:32:05
be stuck and and in fact we never

00:32:03 --> 00:32:09
encounter local minima until we reach

00:32:04 --> 00:32:12
the lowest possible cost that we were

00:32:08 --> 00:32:17
able to get in addition there is a

00:32:11 --> 00:32:20
theory suggesting that so the the local

00:32:16 --> 00:32:24
the low the the local minima will

00:32:19 --> 00:32:26
actually be close in cost to the global

00:32:23 --> 00:32:28
minimum they will be above and they will

00:32:25 --> 00:32:33
concentrate in a little band above the

00:32:27 --> 00:32:36
global minimum but that band of local

00:32:32 --> 00:32:38
minima will be close to the global

00:32:35 --> 00:32:41
minimum and and the larger 2-dimension

00:32:37 --> 00:32:43
the more this is going to be true so as

00:32:40 --> 00:32:45
you go to go back to my analogy right at

00:32:42 --> 00:32:48
some point of course you will get local

00:32:44 --> 00:32:50
minima even though it's unlikely when

00:32:47 --> 00:32:52
you're in the middle when you get close

00:32:49 --> 00:32:54
to the bottom well you can't go lower so

00:32:51 --> 00:32:58
you know it has to rise up in all the

00:32:53 --> 00:33:01
directions but it's yeah so that's kind

00:32:57 --> 00:33:02
of good news I think in spite of this I

00:33:00 --> 00:33:04
don't think that the optimization

00:33:01 --> 00:33:06
problem of neural nets is solved there

00:33:03 --> 00:33:09
are still many cases where we find

00:33:05 --> 00:33:11
ourselves to be stuck and we still don't

00:33:08 --> 00:33:14
understand what the landscape looks like

00:33:10 --> 00:33:17
this set of beautiful experiments by in

00:33:13 --> 00:33:18
Goodfellow that help us visualize a bit

00:33:16 --> 00:33:20
what's going on but I think one of the

00:33:17 --> 00:33:23
open problems of optimization for neural

00:33:19 --> 00:33:24
nets is we know what does the landscape

00:33:22 --> 00:33:25
actually look like it's hard to

00:33:23 --> 00:33:29
visualize of course because it's very

00:33:24 --> 00:33:32
high dimensional but for example we

00:33:28 --> 00:33:35
don't know what those saddle points

00:33:31 --> 00:33:38
really look like when we actually

00:33:34 --> 00:33:39
measure the gradient near those when

00:33:37 --> 00:33:42
we're approaching those saddle points is

00:33:38 --> 00:33:43
it's not close to zero so we never go to

00:33:41 --> 00:33:45
actually flat places

00:33:42 --> 00:33:46
this may be too due to the fact that

00:33:44 --> 00:33:49
we're using SGD and it's kind of

00:33:45 --> 00:33:51
hovering above things there might be

00:33:48 --> 00:33:53
conditioning issues or even if you are

00:33:50 --> 00:33:55
at a cell nearer saddle point you might

00:33:52 --> 00:33:57
be stuck even though it's not a local

00:33:54 --> 00:34:01
women because in many directions

00:33:56 --> 00:34:04
it's still going up maybe you know 95%

00:34:00 --> 00:34:06
of the directions and and the other

00:34:03 --> 00:34:08
directions are hard to reach because

00:34:05 --> 00:34:10
simply there's a lot more curvature in

00:34:07 --> 00:34:12
some directions and other directions and

00:34:09 --> 00:34:15
that's you know the traditional ill

00:34:11 --> 00:34:17
conditioning problem we don't know

00:34:14 --> 00:34:19
exactly you know what what's making it

00:34:16 --> 00:34:21
hard to try in some some networks

00:34:18 --> 00:34:23
usually continents are pretty easy to

00:34:20 --> 00:34:25
train but when you go into things like

00:34:22 --> 00:34:27
machine translation or even worse

00:34:24 --> 00:34:29
reasoning tasks like with things like

00:34:26 --> 00:34:31
you know Turing machines and things like

00:34:28 --> 00:34:32
that it gets really really hard to train

00:34:30 --> 00:34:34
these things and people have to use all

00:34:31 --> 00:34:36
kinds of tricks like curriculum learning

00:34:33 --> 00:34:38
which are essentially optimization

00:34:35 --> 00:34:41
tricks to make the optimization easier

00:34:37 --> 00:34:43
so I don't want to tell you that all the

00:34:40 --> 00:34:45
optimization problem of neural nets is

00:34:42 --> 00:34:48
easy it's done we don't need to worry

00:34:44 --> 00:34:53
about it but it's much easier and less

00:34:47 --> 00:35:03
of a concern than what people thought in

00:34:52 --> 00:35:05
the 90s ok so so was she learning I mean

00:35:02 --> 00:35:07
deep learning is moving out of pattern

00:35:04 --> 00:35:09
recognition and into more complicated

00:35:06 --> 00:35:12
tasks for example including reasoning

00:35:08 --> 00:35:14
and and and combining deep learning with

00:35:11 --> 00:35:16
reinforcement learning planning and

00:35:13 --> 00:35:19
things like that

00:35:15 --> 00:35:21
you've heard about attention that's one

00:35:18 --> 00:35:26
of the tools that is really really

00:35:20 --> 00:35:29
useful for many of these tasks we've

00:35:25 --> 00:35:32
sort of come up with attention

00:35:28 --> 00:35:34
mechanisms as not a way to focus on

00:35:31 --> 00:35:36
what's going on in the outside will like

00:35:33 --> 00:35:38
we usually think of attention like

00:35:35 --> 00:35:40
attention in the visual space but

00:35:37 --> 00:35:42
internal attention right in the space of

00:35:39 --> 00:35:44
representations that have been built so

00:35:41 --> 00:35:47
that's what we do here in machine

00:35:43 --> 00:35:50
translation and it's been extremely

00:35:46 --> 00:35:52
successful as quark said so I'm not

00:35:49 --> 00:35:57
going to show you any of these pictures

00:35:51 --> 00:36:01
blah blah another so I'm getting more

00:35:56 --> 00:36:02
now into the domain of challenges a

00:36:00 --> 00:36:06
challenge that I've been working on

00:36:01 --> 00:36:10
since I was a baby researcher as a PhD

00:36:05 --> 00:36:13
student is long-term dependencies and

00:36:09 --> 00:36:16
recurrent Nets and although we've made a

00:36:12 --> 00:36:18
lot of progress this is still something

00:36:15 --> 00:36:21
that we haven't completely cracked and

00:36:17 --> 00:36:23
it's connected to the optimization

00:36:20 --> 00:36:24
problem that I told you before but it's

00:36:22 --> 00:36:29
a very particular kind of optimization

00:36:23 --> 00:36:34
problem so some of the ideas that we've

00:36:28 --> 00:36:37
used to try to make the propagation of

00:36:33 --> 00:36:41
information and gradients easier include

00:36:36 --> 00:36:44
using skip connections over time include

00:36:40 --> 00:36:45
using multiple time scales there's some

00:36:43 --> 00:36:49
recent work in this direction from from

00:36:44 --> 00:36:51
y lab and other groups and even the

00:36:48 --> 00:36:56
attention mechanism itself you can think

00:36:50 --> 00:36:58
of a way to help dealing with with long

00:36:55 --> 00:37:05
term dependencies so the way to see this

00:36:57 --> 00:37:07
to think of the place on which we're

00:37:04 --> 00:37:10
putting attention as part of the state

00:37:06 --> 00:37:13
right so so imagine really you have a

00:37:09 --> 00:37:15
recurrent net and it has two kinds of

00:37:12 --> 00:37:17
state it has the usual recurrent net

00:37:14 --> 00:37:19
state but it has the content of the

00:37:16 --> 00:37:21
memory you know Kwok told you about

00:37:18 --> 00:37:24
memory nets and neural Cheng machines

00:37:20 --> 00:37:28
and the full state really includes all

00:37:23 --> 00:37:30
of these things and and now we are able

00:37:27 --> 00:37:32
to read or write from that memory I mean

00:37:29 --> 00:37:37
the little recurrent net is able to do

00:37:31 --> 00:37:42
that so what happens is that there are

00:37:36 --> 00:37:43
memory elements which don't change or

00:37:41 --> 00:37:47
time maybe they're being written once

00:37:42 --> 00:37:49
and and so the information that has been

00:37:46 --> 00:37:51
stored there it can stay for as much

00:37:48 --> 00:37:56
time as you know they're not going to be

00:37:50 --> 00:37:58
overwritten so so that means that if you

00:37:55 --> 00:38:01
consider the gradients back propagated

00:37:57 --> 00:38:03
through those cells they can go pretty

00:38:00 --> 00:38:07
much unhampered and there's no vanishing

00:38:02 --> 00:38:09
radient problem so this is something

00:38:06 --> 00:38:10
that to be that that view of the problem

00:38:08 --> 00:38:12
of long-term dependence

00:38:09 --> 00:38:15
sieze with memory i think is could be

00:38:11 --> 00:38:17
very useful all right

00:38:14 --> 00:38:19
in the last part of my presentation I

00:38:16 --> 00:38:21
want to tell you about what I think is

00:38:18 --> 00:38:24
the biggest challenge ahead of us which

00:38:20 --> 00:38:27
is unsupervised learning any question

00:38:23 --> 00:38:36
about attention and memory before I move

00:38:26 --> 00:38:37
on to and provides learning ok so why do

00:38:35 --> 00:38:45
we care about unsupervised learning it's

00:38:36 --> 00:38:47
not working well actually it's working a

00:38:44 --> 00:38:49
lot better than it was but it's still

00:38:46 --> 00:38:52
not something you find in industrial

00:38:48 --> 00:38:55
products at least not in an obvious way

00:38:51 --> 00:38:56
there are less obvious ways where

00:38:54 --> 00:38:58
unsupervised learning is actually

00:38:55 --> 00:38:59
already extremely successful so for

00:38:57 --> 00:39:01
example when you train word embeddings

00:38:58 --> 00:39:03
with word to Veck or any other model and

00:39:00 --> 00:39:05
you use that to pre train like we did

00:39:02 --> 00:39:08
our machine translation systems or other

00:39:04 --> 00:39:11
kinds of NLP tasks you're you're

00:39:07 --> 00:39:13
xploiting as provides learning even

00:39:10 --> 00:39:15
when you train a language model that

00:39:12 --> 00:39:18
you're going to stick in some other

00:39:14 --> 00:39:22
thing or pre train something with that

00:39:17 --> 00:39:27
you're also doing unsupervised learning

00:39:21 --> 00:39:29
but I think the potential of and the

00:39:26 --> 00:39:36
importance of ents provides learning is

00:39:28 --> 00:39:39
usually underrated so why do we care

00:39:35 --> 00:39:41
first of all the idea of ins provides

00:39:38 --> 00:39:42
learning is that we can train we can we

00:39:40 --> 00:39:44
can learn something from large

00:39:41 --> 00:39:47
quantities of unlabeled data that humans

00:39:43 --> 00:39:53
have not curated and we have lots of

00:39:46 --> 00:39:58
that humans are very good at learning

00:39:52 --> 00:40:01
from unlabeled data I have an example

00:39:57 --> 00:40:05
that I used often that is makes it very

00:40:00 --> 00:40:06
clear that for example children can

00:40:04 --> 00:40:11
learn all kinds of things about the

00:40:05 --> 00:40:14
world even though no one no no no adult

00:40:10 --> 00:40:17
ever tells them anything about it until

00:40:13 --> 00:40:20
much later when is too late

00:40:16 --> 00:40:25
physics so you know a two or three year

00:40:19 --> 00:40:27
old understands physics you know if she

00:40:24 --> 00:40:29
has a ball she knows what's gonna happen

00:40:26 --> 00:40:32
when she drops the ball she knows you

00:40:28 --> 00:40:35
know how liquids behave she knows all

00:40:31 --> 00:40:38
kinds of things about objects and an

00:40:34 --> 00:40:40
ordinary Newtonian physics even though

00:40:37 --> 00:40:42
she doesn't have explicit equations and

00:40:39 --> 00:40:44
a way to destroy them with words but she

00:40:41 --> 00:40:48
can predict what's going to happen next

00:40:43 --> 00:40:51
right and the parents don't tell the

00:40:47 --> 00:40:56
children you know force equals mass

00:40:50 --> 00:40:59
times acceleration right so this is

00:40:55 --> 00:41:00
purely unsupervised and it's very

00:40:58 --> 00:41:02
powerful we don't even have that right

00:40:59 --> 00:41:03
now we don't have computers that can

00:41:01 --> 00:41:08
understand the kinds of physics that

00:41:02 --> 00:41:11
children can understand so it looks like

00:41:07 --> 00:41:14
it's a skill that humans have and that's

00:41:10 --> 00:41:17
very important for humans to make sense

00:41:13 --> 00:41:20
of the world around us but we haven't

00:41:16 --> 00:41:23
really yet succeeded to put in machines

00:41:19 --> 00:41:26
let me tell you other reasons that are

00:41:22 --> 00:41:28
connected to this why unsupervised

00:41:25 --> 00:41:29
learning to be useful when you do

00:41:27 --> 00:41:32
supervised learning essentially the way

00:41:28 --> 00:41:34
ou train your system as you you you you

00:41:31 --> 00:41:36
focus on a particular task those here's

00:41:33 --> 00:41:38
the inputs and here's the the input

00:41:35 --> 00:41:39
variables and here's an output variable

00:41:37 --> 00:41:42
that I would like you to predict given

00:41:38 --> 00:41:44
the input your learning P of Y given X

00:41:41 --> 00:41:46
but if you're doing as provides learning

00:41:43 --> 00:41:49
essentially you're learning about all

00:41:45 --> 00:41:51
the possible questions that could be

00:41:48 --> 00:41:54
asked about the data of your observe so

00:41:50 --> 00:41:56
it's not that you know there's X 1 X 2 X

00:41:53 --> 00:41:58
3 and Y everything is an X and you can

00:41:55 --> 00:42:00
predict any of the X given any of the

00:41:57 --> 00:42:02
other X right if I give you a picture

00:41:59 --> 00:42:06
and I had a part of it you can guess

00:42:01 --> 00:42:08
what's missing if I hide if I hide the

00:42:05 --> 00:42:10
you know the caption you can generate

00:42:07 --> 00:42:12
the caption given the image if I hide

00:42:09 --> 00:42:14
the image and I give you the

00:42:11 --> 00:42:16
caption you can you can you know guess

00:42:13 --> 00:42:18
what the image would be or draw it or

00:42:15 --> 00:42:20
figure out you know from examples which

00:42:17 --> 00:42:23
one is the most appropriate so you can

00:42:19 --> 00:42:25
swer any questions about the data when

00:42:22 --> 00:42:28
you have captured the Joint Distribution

00:42:24 --> 00:42:31
between them essentially so that's that

00:42:27 --> 00:42:31
could be useful

00:42:30 --> 00:42:37
another practical thing that ins

00:42:34 --> 00:42:38
provides learning has been used in fact

00:42:36 --> 00:42:40
his is how the whole deep learning

00:42:37 --> 00:42:43
thing started is that it could be used

00:42:39 --> 00:42:49
as a regular Iser

00:42:42 --> 00:42:52
because in addition to telling our model

00:42:48 --> 00:42:56
that we want to predict Y given X we're

00:42:51 --> 00:43:00
saying find representations of X that

00:42:55 --> 00:43:02
both predict Y and somehow capture

00:42:59 --> 00:43:05
something about the distribution of X

00:43:01 --> 00:43:08
know the leading factors the explanatory

00:43:04 --> 00:43:10
factors of X and this again is making an

00:43:07 --> 00:43:12
assumption about the data so we can use

00:43:09 --> 00:43:15
that as a regular Iser if the assumption

00:43:11 --> 00:43:18
is valid that the essentially the

00:43:14 --> 00:43:20
assumption is that the factor Y that

00:43:17 --> 00:43:24
we're trying to predict is one of the

00:43:19 --> 00:43:25
factors that explain X and that by doing

00:43:23 --> 00:43:27
this provides learning to discover

00:43:24 --> 00:43:30
factors that explain X we're going to

00:43:26 --> 00:43:32
pick Y among the other factors and so

00:43:29 --> 00:43:35
it's going to be much easier now to do

00:43:31 --> 00:43:37
supervised learning of course this is

00:43:34 --> 00:43:40
also the reason why transfer learning

00:43:36 --> 00:43:44
works because there are underlying

00:43:39 --> 00:43:46
factors that explain the inputs for a

00:43:43 --> 00:43:48
bunch of tasks and maybe a different

00:43:45 --> 00:43:50
subset of factors explained are relevant

00:43:47 --> 00:43:52
for one task and another subset of

00:43:49 --> 00:43:55
actors is relevant for another task but

00:43:51 --> 00:43:58
if these factors overlap then there's a

00:43:54 --> 00:44:00
potential for synergy you know by doing

00:43:57 --> 00:44:03
multi task learning so the reason multi

00:43:59 --> 00:44:04
task learning is working is because

00:44:02 --> 00:44:09
unsupervised learning is working is

00:44:03 --> 00:44:11
because there are representations and

00:44:08 --> 00:44:13
factors that explain the data that can

00:44:10 --> 00:44:17
be useful for our supervised learning

00:44:12 --> 00:44:19
tasks of interest that also could be

00:44:16 --> 00:44:23
used for domain adaptation for the same

00:44:18 --> 00:44:26
reason um the other thing that people

00:44:22 --> 00:44:28
don't talk about as much about

00:44:25 --> 00:44:30
unsupervised learning and I think it was

00:44:27 --> 00:44:33
part of the initial success that we had

00:44:29 --> 00:44:35
with stacking auto-encoders and rbms is

00:44:32 --> 00:44:37
that you can actually make the

00:44:34 --> 00:44:42
optimization problem of training deep

00:44:36 --> 00:44:45
nets easier because if you're gonna

00:44:41 --> 00:44:47
you know for the most part if you're

00:44:44 --> 00:44:49
gonna train a bunch of RBMS or a bunch

00:44:46 --> 00:44:51
of voto encoders and I'm not saying this

00:44:48 --> 00:44:53
the right way of doing it but you

00:44:50 --> 00:44:55
know it captures some of the spirit of

00:44:52 --> 00:44:56
what ins provides learning does a lot of

00:44:54 --> 00:44:58
the learning can be done locally you're

00:44:55 --> 00:44:59
trying to extract some information

00:44:57 --> 00:45:01
you're trying to discover some

00:44:58 --> 00:45:02
dependencies that's that's a local thing

00:45:00 --> 00:45:04
once you have a slightly better

00:45:01 --> 00:45:06
epresentation we can again tweak it to

00:45:03 --> 00:45:08
extract better more independence or

00:45:05 --> 00:45:10
something of that so so there's a sense

00:45:07 --> 00:45:14
in which the optimization problem might

00:45:09 --> 00:45:16
be easier if you have a very deep net

00:45:13 --> 00:45:17
another reason why we should care about

00:45:15 --> 00:45:19
unsupervised learning even if our

00:45:16 --> 00:45:23
ultimate goal is to do supervised

00:45:18 --> 00:45:26
learning is because sometimes the output

00:45:22 --> 00:45:28
variables are complicated

00:45:25 --> 00:45:30
they are compositional they have a Joint

00:45:27 --> 00:45:32
Distribution so in machine translation

00:45:29 --> 00:45:35
which we talked about the output is a

00:45:31 --> 00:45:37
sentence the sentence is a set of as a

00:45:34 --> 00:45:39
couple of words that have a complicated

00:45:36 --> 00:45:42
Joint Distribution given the input in

00:45:38 --> 00:45:44
the other language and so it turns out

00:45:41 --> 00:45:46
hat many of the things we discover by

00:45:43 --> 00:45:48
exploring unsupervised learning which is

00:45:46 --> 00:45:52
essentially about capturing joint

00:45:47 --> 00:45:54
distributions can be often used to deal

00:45:51 --> 00:45:56
with these structured output problems

00:45:53 --> 00:45:58
where you you have many outputs that

00:45:55 --> 00:46:02
form a you know compositional

00:45:57 --> 00:46:04
complicated distribution there's another

00:46:01 --> 00:46:08
eason why unsupervised learning I think

00:46:04 --> 00:46:08
is going to be really necessary for AI

00:46:09 --> 00:46:19
model-based reinforcement learning so I

00:46:14 --> 00:46:19
think I have another slide just for this

00:46:21 --> 00:46:30
let's think about self-driving cars is

00:46:23 --> 00:46:33
very popular topic these days how did I

00:46:29 --> 00:46:35
learn that I shouldn't do some things

00:46:32 --> 00:46:39
with the wheel that will kill myself

00:46:34 --> 00:46:41
right when I'm driving because I haven't

00:46:38 --> 00:46:44
experienced these states where I get

00:46:40 --> 00:46:45
killed and I simply haven't done it like

00:46:43 --> 00:46:47
a thousand times to get learn how to

00:46:44 --> 00:46:52
avoid it

00:46:46 --> 00:46:53
so supervised learning where we're our

00:46:51 --> 00:46:54
ather you know traditional

00:46:52 --> 00:47:00
reinforcement learning like

00:46:53 --> 00:47:03
and policy learning kind of thing or

00:46:59 --> 00:47:09
actor critic or things like that won't

00:47:02 --> 00:47:11
work because I need to generalize about

00:47:08 --> 00:47:13
situations that I'm never going to

00:47:10 --> 00:47:17
encounter because otherwise if I did I

00:47:12 --> 00:47:20
would die so these are like dangerous

00:47:16 --> 00:47:24
tates that I need to generalize about

00:47:19 --> 00:47:26
hese states but I you know can't have

00:47:23 --> 00:47:28
nough data for them and and I'm sure

00:47:25 --> 00:47:30
there are lots of machine learning

00:47:27 --> 00:47:33
applications where we would be in that

00:47:29 --> 00:47:35
situation I remember a couple of decades

00:47:32 --> 00:47:38
ago I you know I've got some data from

00:47:34 --> 00:47:40
nuclear plant and so you know they

00:47:37 --> 00:47:46
wanted to predict that you know when

00:47:39 --> 00:47:54
it's gonna blow up to avoid it so I said

00:47:45 --> 00:47:58
how many how many yeah it's at zero

00:47:53 --> 00:48:00
right so you see sometimes it's hard to

00:47:57 --> 00:48:02
do supervised learning because the data

00:47:59 --> 00:48:03
you would like to have you can't have

00:48:01 --> 00:48:05
it's it's it's data that you know

00:48:02 --> 00:48:09
situations that are very rare or you

00:48:04 --> 00:48:11
know so how can we possibly solve this

00:48:08 --> 00:48:13
problem well the only solution I can see

00:48:10 --> 00:48:16
is that we learn enough about the world

00:48:12 --> 00:48:19
that we can predict how things would

00:48:15 --> 00:48:21
unfold right when I'm driving you know I

00:48:18 --> 00:48:24
have a kind of mental model of physics

00:48:20 --> 00:48:26
and how cars behave that I can figure

00:48:23 --> 00:48:27
out you know if I turned right at this

00:48:25 --> 00:48:29
point I'm going to end up on the wall

00:48:26 --> 00:48:31
and it's going to be very bad for me and

00:48:28 --> 00:48:34
I don't need to actually experience that

00:48:30 --> 00:48:36
o know that it's bad I can make a

00:48:33 --> 00:48:40
mental simulation of what would happen

00:48:35 --> 00:48:43
so I need a kind of generative model of

00:48:39 --> 00:48:46
how the world would unfold if I do such

00:48:42 --> 00:48:48
and such actions and unsupervised

00:48:45 --> 00:48:49
learning is sort of the ideal thing to

00:48:47 --> 00:48:51
do that but of course it's going to be

00:48:48 --> 00:48:55
hard because we're going to have to

00:48:50 --> 00:48:57
train models that capture a lot of

00:48:54 --> 00:49:01
aspects of the world in order to be able

00:48:56 --> 00:49:02
to learn to generalize properly in those

00:49:00 --> 00:49:05
situations even though they don't see

00:49:01 --> 00:49:05
any data of it

00:49:05 --> 00:49:13
so that's that's one reason why I think

00:49:10 --> 00:49:19
reinforcement learning needs to be

00:49:12 --> 00:49:22
worked on more so I have a little thing

00:49:18 --> 00:49:26
here I think people who have been doing

00:49:21 --> 00:49:28
deep learning can collaborate with

00:49:25 --> 00:49:30
people who are doing reinforcement

00:49:27 --> 00:49:32
learning and not just by providing a

00:49:29 --> 00:49:34
black box that they can use in their

00:49:31 --> 00:49:37
usual algorithms I think there are

00:49:33 --> 00:49:39
things that we do in supervised deep

00:49:36 --> 00:49:43
learning that orange provides deep

00:49:38 --> 00:49:45
learning that can be useful in sort of

00:49:42 --> 00:49:49
rethinking our enforcement learning so

00:49:44 --> 00:49:52
one example also so well one thing I

00:49:48 --> 00:49:55
really like to think about is credit

00:49:51 --> 00:49:56
assignment in other words how do

00:49:54 --> 00:49:58
different machine learning algorithms

00:49:55 --> 00:49:59
figure out what the hidden units are

00:49:57 --> 00:50:01
supposed to do what the intermediate

00:49:58 --> 00:50:03
computations or the intermediate actions

00:50:00 --> 00:50:07
hould be this is what credit assignment

00:50:02 --> 00:50:09
is about and that prop is the best

00:50:06 --> 00:50:12
recipe we currently have for doing

00:50:08 --> 00:50:14
credit assignment it tells the you know

00:50:11 --> 00:50:16
parameters of some intermediary should

00:50:13 --> 00:50:18
change so that the costs much much later

00:50:15 --> 00:50:24
you know hundred steps later if it's a

00:50:17 --> 00:50:27
recurrent net should be reduced so we

00:50:23 --> 00:50:31
could probably use some inspiration from

00:50:26 --> 00:50:34
backrub and how it's used to improve

00:50:30 --> 00:50:41
reinforcement learning and one such cue

00:50:33 --> 00:50:47
is how when we do supervised backprop

00:50:40 --> 00:50:50
say we don't predict the expected loss

00:50:46 --> 00:50:53
that we're going to have and then try to

00:50:49 --> 00:50:55
minimize it where the expectation would

00:50:52 --> 00:50:57
be over the different realizations of

00:50:54 --> 00:51:01
the correct class that's not what we do

00:50:56 --> 00:51:03
but this is what people do in RL they

00:51:00 --> 00:51:07
will learn a critic or a cue

00:51:02 --> 00:51:09
function which is the expected learning

00:51:06 --> 00:51:11
the expected value of the future reward

00:51:08 --> 00:51:13
or the future loss in our case that

00:51:10 --> 00:51:15
might be you know minus log probability

00:51:12 --> 00:51:19
of the correct answer given the input

00:51:14 --> 00:51:23
and then they will backdrop

00:51:18 --> 00:51:27
through this or use it to estimate the

00:51:22 --> 00:51:30
gradient on the actions instead when we

00:51:26 --> 00:51:34
do supervised learning we're

00:51:29 --> 00:51:36
going to do credit assignment where we

00:51:33 --> 00:51:38
use the particular observations of the

00:51:35 --> 00:51:41
correct class that actually happened for

00:51:37 --> 00:51:43
this X right we have X we have Y and we

00:51:40 --> 00:51:49
use the Y to figure out what how to

00:51:42 --> 00:51:52
change our prediction or action so it

00:51:48 --> 00:51:56
looks like this is something that should

00:51:51 --> 00:51:58
be done for our L and in fact we we have

00:51:55 --> 00:52:02
a paper on something like this for a

00:51:57 --> 00:52:03
sequence prediction this is this is the

00:52:01 --> 00:52:05
kind of work which is at the

00:52:02 --> 00:52:07
intersection of dealing with structured

00:52:04 --> 00:52:10
outputs reinforcement learning and

00:52:06 --> 00:52:15
service learning so I think there's a

00:52:09 --> 00:52:17
lot of potential benefit of changing the

00:52:14 --> 00:52:20
frame of thinking that people in the RL

00:52:16 --> 00:52:22
have had for many decades people in RL I

00:52:19 --> 00:52:25
mean not thinking about the world in

00:52:21 --> 00:52:26
with the same eyes as people doing your

00:52:24 --> 00:52:29
net they've been thinking about the

00:52:25 --> 00:52:32
world in terms of discrete states that

00:52:28 --> 00:52:35
could be enumerated and proving theorems

00:52:31 --> 00:52:37
about these algorithms that depend on

00:52:34 --> 00:52:39
essentially you know collecting enough

00:52:36 --> 00:52:41
data to fill all the possible

00:52:38 --> 00:52:43
configurations of the state and their

00:52:40 --> 00:52:46
you know the corresponding effects on

00:52:42 --> 00:52:48
the reward when you start thinking in

00:52:46 --> 00:52:50
terms of neural nets and deep learning

00:52:47 --> 00:52:55
the way to approach problems is very

00:52:49 --> 00:52:56
different okay let me continue

00:52:54 --> 00:53:01
about as provides learning and why this

00:52:55 --> 00:53:03
so important if you look at the kinds

00:53:00 --> 00:53:07
of mistakes that our current machine

00:53:02 --> 00:53:10
learning algorithms make you find that

00:53:06 --> 00:53:14
our our neural nets are just cheating

00:53:09 --> 00:53:15
they're using the wrong cues to try to

00:53:13 --> 00:53:18
produce the answers and sometimes it

00:53:14 --> 00:53:24
works sometimes it doesn't work so how

00:53:17 --> 00:53:28
can we make our our models be you know

00:53:23 --> 00:53:28
smarter make less mistakes well

00:53:30 --> 00:53:36
the only solution is to make sure that

00:53:33 --> 00:53:38
hose models really understand how the

00:53:35 --> 00:53:40
world works at least at the level of

00:53:37 --> 00:53:44
humans to get human level accuracy human

00:53:39 --> 00:53:46
level performance it may be not

00:53:43 --> 00:53:47
necessary to do this for a particular

00:53:45 --> 00:53:49
problem you're trying to solve so maybe

00:53:46 --> 00:53:51
we can you know get away with doing

00:53:48 --> 00:53:52
speech recognition without really

00:53:50 --> 00:53:56
understanding of the meaning of the

00:53:51 --> 00:53:58
words probably that's going to be okay

00:53:55 --> 00:54:02
but for other tasks especially those

00:53:57 --> 00:54:03
involving language I think having models

00:54:01 --> 00:54:07
that actually understand how the world

00:54:02 --> 00:54:07
tix is going to be very very important

00:54:07 --> 00:54:14
o so how could we have machines that

00:54:11 --> 00:54:16
understand how the world works well one

00:54:13 --> 00:54:20
of the ideas that I've been talking a

00:54:15 --> 00:54:23
lot about in the last decade is that of

00:54:19 --> 00:54:25
disentangling factors of variation this

00:54:22 --> 00:54:26
related to a very old idea in pattern

00:54:24 --> 00:54:30
recognition computer vision called

00:54:25 --> 00:54:33
invariance the idea of invariance was

00:54:29 --> 00:54:35
that we would like to compute or design

00:54:32 --> 00:54:39
initially design and now learn features

00:54:34 --> 00:54:40
ay of the image that are invariant to

00:54:38 --> 00:54:42
the things we don't care about maybe we

00:54:39 --> 00:54:44
want to do object recognition so we

00:54:41 --> 00:54:46
don't care about position or orientation

00:54:43 --> 00:54:47
so we would like to have features that

00:54:45 --> 00:54:50
are translation invariant rotation

00:54:46 --> 00:54:52
invariant scaling invariant whatever so

00:54:49 --> 00:54:53
this is what invariance is about but

00:54:51 --> 00:54:55
when you're in the business of doing

00:54:52 --> 00:54:57
ends provides learning of trying to

00:54:54 --> 00:54:59
figure out how the world works it's not

00:54:56 --> 00:55:01
good enough to do two extracting variant

00:54:58 --> 00:55:04
features what we actually want to do is

00:55:00 --> 00:55:05
to extract all of the factors that

00:55:03 --> 00:55:08
explain the data so if we're doing

00:55:04 --> 00:55:11
speech recognition we want not only to

00:55:07 --> 00:55:12
extract the phonemes but we also want to

00:55:10 --> 00:55:16
figure out you know what kind of voice

00:55:11 --> 00:55:18
is that maybe who is it what kind of

00:55:15 --> 00:55:20
recording conditions or what kind of

00:55:17 --> 00:55:22
microphone is it in a car is it outside

00:55:19 --> 00:55:25
all that information which you're trying

00:55:21 --> 00:55:30
to get rid of normally you actually want

00:55:24 --> 00:55:32
o learn about so that you'll be able to

00:55:29 --> 00:55:33
generalize even to new tasks for example

00:55:31 --> 00:55:35
maybe the next day I'm not going to ask

00:55:32 --> 00:55:39
you to recognize phonemes but recognize

00:55:34 --> 00:55:41
who's speaking more generally if we're

00:55:38 --> 00:55:43
able to disentangle these

00:55:40 --> 00:55:46
that explained how the data varies

00:55:42 --> 00:55:50
everything becomes easy especially if

00:55:45 --> 00:55:53
those factors now can be generated in an

00:55:49 --> 00:55:58
independent way and to generate the data

00:55:52 --> 00:56:01
we we can for example we can learn to

00:55:57 --> 00:56:02
answer a question that only depends on

00:56:00 --> 00:56:03
e or two factors and basically we

00:56:01 --> 00:56:06
liminate all the other ones because

00:56:02 --> 00:56:10
we've separated them so a lot of things

00:56:05 --> 00:56:11
become much easier so that's one notion

00:56:09 --> 00:56:13
right we can design tangle factors

00:56:10 --> 00:56:15
there's another notion which is the

00:56:12 --> 00:56:17
notion of multiple levels of abstraction

00:56:14 --> 00:56:19
which is of course at the heart of what

00:56:16 --> 00:56:25
we're trying to do with deep learning

00:56:18 --> 00:56:26
and the idea is that we can have

00:56:24 --> 00:56:31
representations of the world

00:56:25 --> 00:56:35
representation of the data as you know

00:56:30 --> 00:56:40
description that involves factors are

00:56:34 --> 00:56:44
features and we can do that at multiple

00:56:39 --> 00:56:47
vels and there are more abstract

00:56:43 --> 00:56:49
levels so if I'm looking at a document

00:56:46 --> 00:56:51
you know there's the level of the pixels

00:56:48 --> 00:56:53
the level of the strokes the level of

00:56:50 --> 00:56:55
the characters the level of the words

00:56:52 --> 00:56:57
and maybe the level of the meaning of

00:56:54 --> 00:56:58
individual words and we actually have

00:56:56 --> 00:57:01
you know systems that will recognize

00:56:57 --> 00:57:03
from a scanned document all of these

00:57:00 --> 00:57:05
levels when we go higher up we're not

00:57:02 --> 00:57:06
sure what the right levels are but

00:57:04 --> 00:57:08
clearly there must be representations of

00:57:05 --> 00:57:10
the meaning not just of single words but

00:57:07 --> 00:57:13
of you know sequences of words and the

00:57:09 --> 00:57:14
whole paragraph what's the story and why

00:57:12 --> 00:57:18
is it important to represent things in

00:57:13 --> 00:57:22
that way because higher levels of

00:57:17 --> 00:57:26
abstraction are representations from

00:57:21 --> 00:57:29
which it is much easier to do things to

00:57:25 --> 00:57:31
answer questions so the the more

00:57:28 --> 00:57:34
semantic levels mean basically we can

00:57:30 --> 00:57:36
very easily act on the information when

00:57:33 --> 00:57:38
it's represented that way if you think

00:57:35 --> 00:57:39
about the level of words it's much

00:57:37 --> 00:57:41
easier to check whether a particular

00:57:38 --> 00:57:43
word is in the document if I have the

00:57:40 --> 00:57:45
words extracted then if I have to do it

00:57:42 --> 00:57:47
from the pixels and if I have to answer

00:57:44 --> 00:57:50
a complicated question about you know

00:57:46 --> 00:57:52
the intention of the person working at

00:57:49 --> 00:57:54
level of words is not high enough it's

00:57:51 --> 00:57:54
not abstract enough I need to work at a

00:57:53 --> 00:57:57
more

00:57:53 --> 00:58:00
abstract level which in which maybe the

00:57:56 --> 00:58:02
same notion could be represented with

00:57:59 --> 00:58:03
many different types of words where many

00:58:01 --> 00:58:05
different sentences could express the

00:58:02 --> 00:58:11
same meaning and I want to be able to

00:58:04 --> 00:58:14
capture that meaning so the last slide I

00:58:10 --> 00:58:19
have is something that I've been working

00:58:13 --> 00:58:21
on in the last couple of years which is

00:58:18 --> 00:58:24
trying to which is connected to ants

00:58:20 --> 00:58:28
provides learning but more generally to

00:58:23 --> 00:58:31
the relationship between how we can

00:58:27 --> 00:58:34
build intelligent machines and and the

00:58:30 --> 00:58:38
intelligence of humans or animals and as

00:58:33 --> 00:58:40
you may know this was one of the key

00:58:37 --> 00:58:44
motivations for doing neural nets in the

00:58:39 --> 00:58:49
first place the intuition is this that

00:58:43 --> 00:58:54
we are hoping that there are a few

00:58:48 --> 00:58:56
simple key principles that explain you

00:58:53 --> 00:58:59
know what allows us to be intelligent

00:58:55 --> 00:59:01
and that if we can discover these

00:58:58 --> 00:59:06
principles of course we can also build

00:59:00 --> 00:59:08
machines that are intelligent that's why

00:59:05 --> 00:59:10
the neural nets were you know inspired

00:59:07 --> 00:59:13
by things we know from the brain in the

00:59:09 --> 00:59:18
first place we don't know this is true

00:59:12 --> 00:59:21
but if it is then you know it's it's

00:59:17 --> 00:59:22
great and I mean this would make it

00:59:20 --> 00:59:29
much easier to understand how brains

00:59:21 --> 00:59:30
work as well as building AI so in in

00:59:28 --> 00:59:33
trying to bridge this gap because right

00:59:29 --> 00:59:35
now our best neural nets are very very

00:59:32 --> 00:59:37
different from what's going on in brains

00:59:34 --> 00:59:40
as far as you know we can tell by

00:59:36 --> 00:59:42
talking to neuro scientists in

00:59:39 --> 00:59:47
particular

00:59:41 --> 00:59:48
backprop although it's it's kicking

00:59:46 --> 00:59:51
Assam from a machine learning point of

00:59:47 --> 00:59:53
view it's not clear at all how something

00:59:50 --> 00:59:56
like this would be implemented in brains

00:59:52 --> 01:00:00
o I've been trying to explore that and

00:59:55 --> 01:00:02
also trying to see how we could

00:59:59 --> 01:00:06
generalize those credit assignment

01:00:01 --> 01:00:08
principles that would come out in order

01:00:05 --> 01:00:13
to also do once provide learning

01:00:07 --> 01:00:16
so we've we've made a little bit of

01:00:12 --> 01:00:20
progress a couple of years ago I came up

01:00:15 --> 01:00:25
with an idea called target prop which is

01:00:19 --> 01:00:28
a way of generalizing back prop 2

01:00:24 --> 01:00:35
propagating targets for each layer of

01:00:28 --> 01:00:40
course this idea has a long history more

01:00:34 --> 01:00:43
cently we've been looking at ways to

01:00:39 --> 01:00:47
implement gradient estimation in deep

01:00:42 --> 01:00:52
recurrent networks that perform some

01:00:46 --> 01:00:55
computation that turn out to end up with

01:00:51 --> 01:00:56
parameter updates corresponding to

01:00:54 --> 01:01:00
gradient descent in the prediction error

01:00:55 --> 01:01:02
that looked like something that

01:00:59 --> 01:01:04
neuroscientists have been observing and

01:01:01 --> 01:01:06
don't completely understand called

01:01:03 --> 01:01:10
SCDP spike timing-dependent plasticity

01:01:05 --> 01:01:13
so I don't really have time to go into

01:01:09 --> 01:01:16
this but I think this whole area of

01:01:12 --> 01:01:19
reconnecting neuroscience with machine

01:01:15 --> 01:01:21
learning and neural nets is something

01:01:18 --> 01:01:23
that has been kind of forgotten by the

01:01:20 --> 01:01:24
machining community because we're

01:01:22 --> 01:01:29
all so busy you know building

01:01:23 --> 01:01:33
self-driving cars but I think over the

01:01:28 --> 01:01:38
long term it's a it's a very exciting

01:01:32 --> 01:01:38
prospect thank you very much

01:01:45 --> 01:01:53
yes questions yeah

01:01:59 --> 01:02:05
to begin with great talk my question is

01:02:02 --> 01:02:08
regarding you know the lack of interlab

01:02:04 --> 01:02:11
etween the results in the study of

01:02:07 --> 01:02:13
complex networks like when they study

01:02:10 --> 01:02:15
the brain networks right there lot of

01:02:12 --> 01:02:18
publications which that talk about the

01:02:14 --> 01:02:19
mergence of hubs and especially a lot

01:02:17 --> 01:02:21
of publications on the degree

01:02:18 --> 01:02:24
distribution of the inter neuron Network

01:02:20 --> 01:02:26
right but then when you look at the

01:02:23 --> 01:02:30
degree distribution of the so-called

01:02:25 --> 01:02:32
neurons in deep Nets you don't get to

01:02:29 --> 01:02:34
see the emergence of the hub behavior so

01:02:31 --> 01:02:37
right why do you think that there's such

01:02:33 --> 01:02:42
lack of overlap between like because I

01:02:36 --> 01:02:46
think the hop story is maybe not that

01:02:41 --> 01:02:48
important first of all I really think

01:02:45 --> 01:02:50
that in order to understand the brain we

01:02:47 --> 01:02:54
have to understand learning in the brain

01:02:49 --> 01:02:55
and if we look at our experience in

01:02:53 --> 01:02:59
machine learning and deep learning

01:02:54 --> 01:03:02
although the architecture does matter

01:02:58 --> 01:03:03
you know what matters even more is the

01:03:01 --> 01:03:08
general principles that allow us to

01:03:02 --> 01:03:10
train these these things so I think the

01:03:07 --> 01:03:13
study of the connectivity makes

01:03:09 --> 01:03:16
ense you can't have a you know fully

01:03:12 --> 01:03:18
connected thing and having a way to have

01:03:15 --> 01:03:19
a short number of hops to go from

01:03:17 --> 01:03:25
anywhere to anywhere is a reasonable

01:03:18 --> 01:03:28
idea but it's it I don't think it really

01:03:24 --> 01:03:30
explains that much that the the central

01:03:27 --> 01:03:33
question is how does the brain learn

01:03:29 --> 01:03:39
complicated things and it does it better

01:03:32 --> 01:03:42
than then our current machines yet we we

01:03:38 --> 01:03:45
don't know even a simple way of training

01:03:41 --> 01:03:50
brains that that at least fits the

01:03:44 --> 01:03:52
biology reasonably yeah there are any

01:03:49 --> 01:03:54
cases with real war examples where the

01:03:51 --> 01:03:59
cursive of dimensionality is still a

01:03:53 --> 01:04:01
problem for neural nets yeah any time it

01:03:58 --> 01:04:03
doesn't work

01:04:00 --> 01:04:10
I mean from a generalisation point of

01:04:02 --> 01:04:12
view so Andrew told us yesterday that we

01:04:09 --> 01:04:14
can just add more data and computing

01:04:11 --> 01:04:17
power and for some problems this may

01:04:13 --> 01:04:19
work but sometimes the amount of data

01:04:16 --> 01:04:23
you would need is just you know too

01:04:18 --> 01:04:26
large with our current techniques and

01:04:22 --> 01:04:29
you know we'll need also to develop you

01:04:25 --> 01:04:33
know the how did you call it the Hail

01:04:28 --> 01:04:34
Mary all right we also need to do some

01:04:32 --> 01:04:39
research on the algorithms and the

01:04:33 --> 01:04:41
architectures to be able to learn about

01:04:38 --> 01:04:43
how the world is organized so that we

01:04:40 --> 01:04:49
can generalize in much more powerful

01:04:42 --> 01:04:51
ways and that is needed because the the

01:04:48 --> 01:04:53
kind of tasks we want to solve involved

01:04:50 --> 01:04:55
in many many variables that have an

01:04:52 --> 01:04:56
explanation umber of possible values and

01:04:54 --> 01:04:59
that's the curse of dimensionality

01:04:55 --> 01:05:02
essentially so it's facing you know

01:04:58 --> 01:05:07
pretty much all of the AI problems

01:05:01 --> 01:05:09
around us all right the question on

01:05:06 --> 01:05:12
multi-agent reinforcement learning yeah

01:05:08 --> 01:05:16
if you assume all cars can never predict

01:05:11 --> 01:05:17
all possible potential accidents what

01:05:15 --> 01:05:21
about the potential for transfer

01:05:16 --> 01:05:24
learning and things like that yeah so so

01:05:20 --> 01:05:28
I was giving an example of a single

01:05:23 --> 01:05:30
human learning how to drive we might be

01:05:27 --> 01:05:31
able to use you know the millions of

01:05:29 --> 01:05:32
people's you know using self-driving

01:05:30 --> 01:05:34
cars

01:05:31 --> 01:05:35
correcting and some of them making

01:05:33 --> 01:05:37
accidents to actually make some progress

01:05:34 --> 01:05:40
without actually solving the hard

01:05:36 --> 01:05:43
problems and this is probably going to

01:05:39 --> 01:05:45
be doing for a while but and we should

01:05:42 --> 01:05:47
o it we should definitely use all the

01:05:44 --> 01:05:48
data we have currently if you look at

01:05:46 --> 01:05:50
he amount of data were using for speech

01:05:47 --> 01:05:54
recognition or language modeling it's

01:05:49 --> 01:05:57
hugely more than what any human you know

01:05:53 --> 01:06:00
actually sees in their lifetime so we're

01:05:56 --> 01:06:03
doing something wrong and we could do

01:05:59 --> 01:06:20
better with less data and babies and

01:06:02 --> 01:06:22
kids you know can do it yes well there's

01:06:19 --> 01:06:26
quite a bit of work on video these days

01:06:21 --> 01:06:26
it's mostly a computational bottleneck

01:06:28 --> 01:06:40
yeah well keep in mind we're doing em

01:06:31 --> 01:06:40
this just a couple of years ago yeah

01:06:39 --> 01:06:43
absolutely

01:06:39 --> 01:06:47
eah I don't think it's a fundamental

01:06:43 --> 01:06:50
issue if if we're able to do it well on

01:06:46 --> 01:06:53
static images the same principles will

01:06:49 --> 01:06:56
you know allow us to do sequences we're

01:06:52 --> 01:06:59
already doing you know sequential things

01:06:55 --> 01:07:02
for example an interesting project is

01:06:58 --> 01:07:04
peech synthesis with recurrent nets and

01:07:01 --> 01:07:09
stuff like that or convolutional nets

01:07:03 --> 01:07:11
whatever so it's more like we're not

01:07:08 --> 01:07:13
sure how to train them well and how to

01:07:10 --> 01:07:17
discover these explanatory factors and

01:07:12 --> 01:07:19
so on that's my cue

01:07:16 --> 01:07:21
yeah I have a question maybe

01:07:18 --> 01:07:24
non-technical so we have seen the human

01:07:20 --> 01:07:26
error rates and then the versus the our

01:07:23 --> 01:07:28
algorithms error rates for things that

01:07:25 --> 01:07:30
are we are used to like image

01:07:27 --> 01:07:32
recognition speech recognition right

01:07:29 --> 01:07:35
those are any beena experiments

01:07:31 --> 01:07:37
where we try to train humans for things

01:07:34 --> 01:07:39
that we are not used to right I'm not

01:07:36 --> 01:07:42
rained the machine at the same time see

01:07:38 --> 01:07:43
right so this how capable are algorithms

01:07:41 --> 01:07:48
you're asking if these experiments have

01:07:42 --> 01:07:49
been done yeah I don't know but I'm I'm

01:07:47 --> 01:07:53
sure the humans would beat the hell out

01:07:48 --> 01:07:55
of the machines for now for this kind of

01:07:52 --> 01:07:57
thing humans are able to learn a new

01:07:54 --> 01:08:00
task or new concepts from very few

01:07:56 --> 01:08:02
examples and we know that in order for

01:07:59 --> 01:08:05
machines to do to do as well they they

01:08:01 --> 01:08:06
just need more sort of common sense

01:08:04 --> 01:08:08
right more general knowledge of the

01:08:05 --> 01:08:11
world this is what allows humans to

01:08:07 --> 01:08:14
learn so quickly on on a few examples

01:08:10 --> 01:08:16
yeah you presented experimental data

01:08:13 --> 01:08:19
very showed that lots of local minimum

01:08:15 --> 01:08:20
for these parameters or maybe saddle

01:08:18 --> 01:08:23
points

01:08:19 --> 01:08:25
have similar performance yeah are these

01:08:22 --> 01:08:28
local minima that's there locally right

01:08:24 --> 01:08:30
are these local minima separated widely

01:08:27 --> 01:08:32
in parameter space are they close by

01:08:29 --> 01:08:34
that's a good question I could I guess a

01:08:31 --> 01:08:37
related question is once you claim the

01:08:33 --> 01:08:39
network if there are lots of local

01:08:36 --> 01:08:40
minima does that suggest that you could

01:08:38 --> 01:08:43
compress the network and represent it

01:08:39 --> 01:08:43
with far fewer parameters

01:08:44 --> 01:08:53
maybe so for your first question we have

01:08:48 --> 01:08:57
some experiments dating from 2009 where

01:08:52 --> 01:08:59
we try to visualize in 2d the

01:08:56 --> 01:09:02
trajectories of training so this is a

01:08:58 --> 01:09:07
paper first author is dumitru Aaron

01:09:01 --> 01:09:09
former PhD students with me where we we

01:09:06 --> 01:09:12
wanted to see how different depending on

01:09:08 --> 01:09:14
where you start you know where do you

01:09:11 --> 01:09:17
end up dude different trajectories end

01:09:13 --> 01:09:18
up in the same place or do they all go

01:09:16 --> 01:09:20
in a different place it turns out they

01:09:17 --> 01:09:22
all go in a different place and so the

01:09:19 --> 01:09:23
number of local minima is much larger

01:09:21 --> 01:09:27
than the number of trajectories that we

01:09:22 --> 01:09:30
tried like 500 or a thousand it's so

01:09:26 --> 01:09:32
much larger that you know no two random

01:09:29 --> 01:09:35
see initial seeds end up near each other

01:09:31 --> 01:09:37
so it looks like there's a huge number

01:09:34 --> 01:09:38
of local minimum which is in agreement

01:09:36 --> 01:09:40
with the theory that there's an

01:09:37 --> 01:09:42
exponential number of them but the good

01:09:39 --> 01:09:44
news is they're all kind of equivalent

01:09:41 --> 01:09:55
in terms of cost if you have a large

01:09:43 --> 01:09:56
network I'm not sure I'm sure there are

01:09:54 --> 01:10:00
many ways to compress these networks

01:09:55 --> 01:10:05
there's a lot of redundancy in many ways

01:09:59 --> 01:10:09
there are there are redundancies due to

01:10:04 --> 01:10:11
the numbering like you could flip all

01:10:08 --> 01:10:14
you know take that unit put it here to

01:10:10 --> 01:10:15
get you and put it here and so on

01:10:13 --> 01:10:19
but I don't think you're going to gain a

01:10:14 --> 01:10:21
lot of bits from that so we've talked

01:10:18 --> 01:10:24
about that one of the main advantages of

01:10:20 --> 01:10:27
deep learning is that they it can work

01:10:23 --> 01:10:29
with lots of data and but you were

01:10:26 --> 01:10:32
mentioning before that we need also to

01:10:28 --> 01:10:34
capture the ability of humans of working

01:10:31 --> 01:10:35
with a few data

01:10:33 --> 01:10:38
but the reason we're able to work with

01:10:34 --> 01:10:42
fewer data is because we have first

01:10:37 --> 01:10:43
learned from a lot of data about you

01:10:41 --> 01:10:48
know the general knowledge of the world

01:10:42 --> 01:10:51
right so how can we adapt neural

01:10:47 --> 01:10:55
networks to bring us to this new fuel

01:10:50 --> 01:10:58
data paradigm we have to do a lot better

01:10:54 --> 01:11:00
add-ons provides learning and of the

01:10:57 --> 01:11:02
kind that really discovers sort of

01:10:59 --> 01:11:17
explanations about the world that's what

01:11:01 --> 01:11:21
I think let's say thank you again so

01:11:16 --> 01:11:22
before we stop this workshop first an

01:11:20 --> 01:11:24
nouncement

01:11:21 --> 01:11:28
you might remember yesterday Carl

01:11:23 --> 01:11:30
invited all the women here for an

01:11:27 --> 01:11:34
informal dinner it's going to be right

01:11:29 --> 01:11:36
outside right now after we close so

01:11:33 --> 01:11:38
before we close actually I'd like to

01:11:35 --> 01:11:41
thank all the the speaker today and

01:11:38 --> 01:11:46
yesterday I think everybody appreciated

01:11:40 --> 01:11:46
their talk so thanks again all of you

01:11:49 --> 01:11:54
and thanks to all the attendants I think

01:11:52 --> 01:11:57
it was a very nice weekend

01:11:53 --> 01:11:57
hope you enjoyed

<!-- YOUTUBE_TRANSCRIPT_END -->
