---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "OU8I1oJ9HhI"
title: "Theano Tutorial (Pascal Lamblin, MILA)"
video_url: "https://www.youtube.com/watch?v=OU8I1oJ9HhI"
thumbnail_url: "https://i.ytimg.com/vi/OU8I1oJ9HhI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=OU8I1oJ9HhI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 3805
duration_human: "1:03:25"
view_count: 9404
like_count: 79
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:24:19.055Z"
---

# Theano Tutorial (Pascal Lamblin, MILA)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=OU8I1oJ9HhI
- video_id: OU8I1oJ9HhI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:03:25
- view_count: 9404
- like_count: 79
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

00:00:01 --> 00:00:09
okay so today I'm going to briefly

00:00:03 --> 00:00:11
introduce you tno how to use it and go

00:00:08 --> 00:00:14
ver the basic principles behind the

00:00:10 --> 00:00:16
libraries and if you paid attention

00:00:13 --> 00:00:19
during yesterday's presentation of

00:00:15 --> 00:00:22
tensor flow some concepts will be

00:00:18 --> 00:00:25
familiar to you as well and if you paid

00:00:21 --> 00:00:29
attention to you go lava Shell's

00:00:24 --> 00:00:34
introduction area talk you'll see some

00:00:28 --> 00:00:36
serie concept as well so there's

00:00:33 --> 00:00:39
going to be four main parts so the first

00:00:35 --> 00:00:42
one is well this slide and introduction

00:00:38 --> 00:00:46
about what the concept of Tiano are

00:00:41 --> 00:00:50
there is a companion ipython notebook

00:00:45 --> 00:00:52
that's on github so if you go on that

00:00:49 --> 00:00:55
page or clone that github repository

00:00:51 --> 00:00:59
there is an eye Python notebook that

00:00:54 --> 00:01:03
basically has all the code snippets from

00:00:58 --> 00:01:06
these slides so that you can run them at

00:01:02 --> 00:01:09
he same time then we're going to have a

00:01:05 --> 00:01:13
more hands-on example basically applying

00:01:08 --> 00:01:17
logistic regression on the Emnes digits

00:01:12 --> 00:01:19
data set and then if we have time we'll

00:01:16 --> 00:01:22
go quickly over to more examples

00:01:18 --> 00:01:26
concepts so the basic Linette

00:01:21 --> 00:01:35
architecture and an STM for character

00:01:25 --> 00:01:38
level generation of text so Tiano is we

00:01:34 --> 00:01:40
can say mathematical symbolic expression

00:01:37 --> 00:01:43
compiler so what does that mean it means

00:01:39 --> 00:01:46
that it makes it possible to define

00:01:42 --> 00:01:51
xpressions that represent mathematical

00:01:45 --> 00:01:54
expression using numpy syntax so it's

00:01:50 --> 00:01:58
easy to use and it supports all the kind

00:01:53 --> 00:02:02
of basic mathematical operations like

00:01:57 --> 00:02:08
main max addition subtraction all the

00:02:01 --> 00:02:11
kind of basic things not only larger

00:02:07 --> 00:02:14
blocks like layers of neural nets

00:02:10 --> 00:02:17
whole networks or things like that it

00:02:13 --> 00:02:20
makes it possible to manipulate those

00:02:16 --> 00:02:23
xpressions during rough substitutions

00:02:19 --> 00:02:27
cloning and replacement things like that

00:02:22 --> 00:02:30
and also making possible to go through

00:02:26 --> 00:02:33
that graph and perform things like

00:02:29 --> 00:02:37
automatic differentiation a symbolic

00:02:32 --> 00:02:39
differentiation actually all the our

00:02:36 --> 00:02:42
operator for forward differentiation

00:02:38 --> 00:02:45
applying some optimizations for

00:02:41 --> 00:02:49
increased numerical stability and then

00:02:44 --> 00:02:54
it's possible to use that optimized

00:02:48 --> 00:02:56
graph and the Endo's runtime to actually

00:02:53 --> 00:02:59
compute some values some output values

00:02:55 --> 00:03:05
even inputs we also have a couple of

00:02:58 --> 00:03:08
tools that help debug both pianos code

00:03:04 --> 00:03:10
and the users code and try to inspect

00:03:07 --> 00:03:13
and understand better what's actually

00:03:09 --> 00:03:17
happening when you're using Tianna

00:03:12 --> 00:03:18
so when I was currently more than 8

00:03:16 --> 00:03:21
years old

00:03:17 --> 00:03:26
it started small with only a couple of

00:03:20 --> 00:03:30
contributors from the ancestor of Mila

00:03:25 --> 00:03:32
nd which was called Lisa at the time

00:03:29 --> 00:03:34
and it grew a lot

00:03:31 --> 00:03:36
we now have contributors from all over

00:03:33 --> 00:03:38
the world users from all over the world

00:03:35 --> 00:03:41
and it's been used to drive a lot of

00:03:37 --> 00:03:43
research papers prototypes for

00:03:40 --> 00:03:51
industrial application in startups and

00:03:42 --> 00:03:54
in larger companies tno has also been

00:03:50 --> 00:03:57
the base of other software projects that

00:03:53 --> 00:04:01
build on top of the nose so for instance

00:03:56 --> 00:04:03
blocks Kara's Lezyne our machine

00:04:00 --> 00:04:07
learning deep learning libraries that

00:04:02 --> 00:04:13
used ya know as a back-end and provides

00:04:06 --> 00:04:17
user interface that is a higher level so

00:04:12 --> 00:04:18
that has concepts of layers of training

00:04:16 --> 00:04:21
algorithms of this kind of things

00:04:17 --> 00:04:24
whereas ya know is modern backends SK

00:04:20 --> 00:04:28
don't ya know as well which is nice

00:04:23 --> 00:04:31
because it has a converter to load cafe

00:04:27 --> 00:04:33
models from the cafe zoo and use them in

00:04:30 --> 00:04:34
Tiano and does a lot of other things as

00:04:32 --> 00:04:37
well

00:04:33 --> 00:04:39
pi MC 3 actually uses t anode not to do

00:04:36 --> 00:04:44
machine learning but for ballistic

00:04:38 --> 00:04:46
programming and we have two other

00:04:43 --> 00:04:49
libraries platoon that Mira is

00:04:45 --> 00:04:52
developing and TN o MP I developed a 12

00:04:48 --> 00:04:55
with our layers on top of T and O to

00:04:51 --> 00:04:59
help train on multiple machines multiple

00:04:54 --> 00:05:05
GPUs and have some level of model

00:04:58 --> 00:05:10
parallelism and data parallelism so how

00:05:04 --> 00:05:14
to use TN well first of all we are

00:05:09 --> 00:05:19
working with symbolic expression

00:05:13 --> 00:05:22
symbolic variables so that will make up

00:05:18 --> 00:05:26
a computation graph so let's see how how

00:05:21 --> 00:05:28
to do that so to define the symbolic

00:05:25 --> 00:05:32
expression so we defined the expression

00:05:27 --> 00:05:34
first then we want to compile a function

00:05:31 --> 00:05:37
and then execute that function on values

00:05:33 --> 00:05:40
o to define the expression we start by

00:05:36 --> 00:05:43
defining inputs so the inputs are

00:05:39 --> 00:05:45
symbolic variables that have some type

00:05:42 --> 00:05:48
so you have to define in advance whether

00:05:44 --> 00:05:50
like this variable is like a vector or

00:05:47 --> 00:05:53
matrix

00:05:49 --> 00:05:58
what's its data type is floating-point

00:05:52 --> 00:06:00
egers and so on so things like the

00:05:57 --> 00:06:04
number of dimensions have to be known in

00:05:59 --> 00:06:07
advance but the shape is not fixed the

00:06:03 --> 00:06:11
memory layout is not fixed so you could

00:06:06 --> 00:06:13
have shapes that change between like 1

00:06:10 --> 00:06:15
mini-batch and the next or different

00:06:12 --> 00:06:19
calls to do to the function in general

00:06:14 --> 00:06:24
so x and y are purely symbolic variables

00:06:18 --> 00:06:27
here we will give them values later but

00:06:23 --> 00:06:30
for now that's just that's just empty

00:06:26 --> 00:06:32
there's another kind of input variables

00:06:29 --> 00:06:35
that is share variables and

00:06:31 --> 00:06:38
they they're symbolic but they also hold

00:06:34 --> 00:06:41
a value and that value is persistent

00:06:37 --> 00:06:44
across function calls it's shared

00:06:40 --> 00:06:47
between different IANA functions it's

00:06:43 --> 00:06:49
usually used for instance for storing

00:06:46 --> 00:06:51
parameters of the model that you want to

00:06:48 --> 00:06:56
learn and yet these values can be

00:06:50 --> 00:06:59
updated as well so here we create two

00:06:55 --> 00:07:02
ther variables from social variables

00:06:58 --> 00:07:04
from from values this one has two

00:07:01 --> 00:07:08
dimensions because its initial values

00:07:03 --> 00:07:09
after dimensions and this one has only

00:07:07 --> 00:07:12
one so that's basically weight matrix

00:07:08 --> 00:07:17
and the bias we can name variables by

00:07:11 --> 00:07:19
assigning to the name attribute short

00:07:16 --> 00:07:22
variable do not have a fixed side either

00:07:18 --> 00:07:24
e are usually kept fixed in most

00:07:21 --> 00:07:28
models but it's not a requirement then

00:07:23 --> 00:07:30
from these inputs we can define

00:07:27 --> 00:07:33
xpressions that will build new

00:07:29 --> 00:07:35
variables intermediate variables which

00:07:32 --> 00:07:39
are the result of some computation and

00:07:34 --> 00:07:45
so for instance here we can define well

00:07:38 --> 00:07:48
the product of X and W at the bias apply

00:07:44 --> 00:07:51
sigmoid function on that and they say

00:07:47 --> 00:07:53
this is our output variable and from the

00:07:50 --> 00:08:03
output Y ball and Y we can define just

00:07:52 --> 00:08:05
say the squared error cost so those new

00:08:02 --> 00:08:07
variables are connected to the previous

00:08:04 --> 00:08:10
ones through the operations that we

00:08:06 --> 00:08:12
define and we can visualize the graph

00:08:09 --> 00:08:15
structure like that by using for

00:08:11 --> 00:08:18
instance by dot print which is a helper

00:08:14 --> 00:08:22
function so variables are those square

00:08:17 --> 00:08:23
boxes and we have other nodes here we

00:08:21 --> 00:08:26
call apply nodes that represent the

00:08:22 --> 00:08:30
mathematical operation that connects

00:08:25 --> 00:08:33
them so input variables and shared

00:08:29 --> 00:08:37
variables do not have any ancestors they

00:08:32 --> 00:08:40
don't have any road connecting from them

00:08:36 --> 00:08:44
but then you see that intermediate

00:08:39 --> 00:08:46
result and and more of them

00:08:43 --> 00:08:49
usually when we visualize we don't

00:08:45 --> 00:08:51
necessarily care about all the

00:08:48 --> 00:08:53
intermediate variables unless they have

00:08:50 --> 00:08:55
a name or something and so this is a

00:08:52 --> 00:08:58
simplified version of exactly the same

00:08:54 --> 00:09:00
graph where we hide the unnamed

00:08:57 --> 00:09:03
intermediate variables but you can still

00:08:59 --> 00:09:09
see all the operations and actually you

00:09:02 --> 00:09:13
see that the type on the edges so once

00:09:08 --> 00:09:16
you have defined some graph say your

00:09:12 --> 00:09:19
forward computation for your model we

00:09:15 --> 00:09:24
want to be able to use back propagation

00:09:18 --> 00:09:26
to to get your idioms so this is just

00:09:23 --> 00:09:30
he basic concept of the chain rule we

00:09:25 --> 00:09:33
have a scalar crossed we have

00:09:29 --> 00:09:38
intermediate variables that here are

00:09:32 --> 00:09:43
vectors here's just the general starting

00:09:37 --> 00:09:47
from the from the cost and so the whole

00:09:42 --> 00:09:50
derivative of say that that function G

00:09:46 --> 00:09:54
is actually a whole Jacobian matrix

00:09:49 --> 00:09:58
that's M by n if the intermediate

00:09:53 --> 00:10:01
variables are vectors of size N and M

00:09:57 --> 00:10:04
and usually you don't need that and it's

00:10:00 --> 00:10:06
actually usually a bad idea to compute

00:10:03 --> 00:10:08
it explicitly unless you need it for

00:10:05 --> 00:10:11
some other purposes what the only thing

00:10:07 --> 00:10:15
you need is an expression that given any

00:10:10 --> 00:10:17
vector representing the gradient of the

00:10:14 --> 00:10:21
cost with respect to the output will

00:10:16 --> 00:10:23
compute you the gradient of the cost

00:10:20 --> 00:10:25
with respect to the input so basically

00:10:22 --> 00:10:28
the dot product between that vector and

00:10:24 --> 00:10:33
the whole Jacobian matrix so that's also

00:10:27 --> 00:10:37
called the L operator sometimes and so

00:10:32 --> 00:10:43
almost all operations in Tiano implement

00:10:36 --> 00:10:45
a function that returns that and it

00:10:42 --> 00:10:48
actually returns not numbers not a

00:10:44 --> 00:10:52
numerical expression for that but it

00:10:47 --> 00:10:55
returns a symbolic expression that

00:10:51 --> 00:10:57
represents that computation

00:10:54 --> 00:11:00
again usually without having to

00:10:56 --> 00:11:06
explicitly represent or define that

00:10:59 --> 00:11:09
whole Jacobian matrix so you can call

00:11:05 --> 00:11:14
Tia no grant which will back propagate

00:11:08 --> 00:11:17
through the graph from the cost towards

00:11:13 --> 00:11:20
the inputs that that you give and along

00:11:16 --> 00:11:23
the way it will call that grad method of

00:11:19 --> 00:11:24
each operation back propagating means

00:11:22 --> 00:11:27
tarting from one for the cost and back

00:11:23 --> 00:11:29
propagating through the whole graph

00:11:26 --> 00:11:32
accumulating when you have the same

00:11:28 --> 00:11:36
variables that used more than once and

00:11:31 --> 00:11:40
so on and again here so DCW and this is

00:11:35 --> 00:11:44
DB they are symbolic expression the same

00:11:39 --> 00:11:47
way as if you had manually defined the

00:11:43 --> 00:11:49
gradient expression using T&O operations

00:11:46 --> 00:11:52
like the dot product the sigmoid and so

00:11:48 --> 00:11:54
n that we that we've seen earlier so we

00:11:51 --> 00:11:57
have non numerical values at that point

00:11:53 --> 00:12:00
and they are part of the computation

00:11:56 --> 00:12:04
graph so the completion graph was

00:11:59 --> 00:12:08
extended to add these these variables

00:12:03 --> 00:12:11
and we can continue extending the graph

00:12:07 --> 00:12:12
from these variables for instance to

00:12:10 --> 00:12:14
compute update expressions corresponding

00:12:11 --> 00:12:18
to gradient descent something like that

00:12:13 --> 00:12:22
like we do here so for instance this is

00:12:17 --> 00:12:26
what the extended graph for the gradient

00:12:21 --> 00:12:28
looks like so you see there's like a lot

00:12:25 --> 00:12:31
of small operations that have been

00:12:27 --> 00:12:32
inserted and outputs you have actually

00:12:30 --> 00:12:36
here the gradients with respect to the

00:12:31 --> 00:12:39
bias which is both an output and an

00:12:35 --> 00:12:42
intermediate result that will help

00:12:38 --> 00:12:47
compute the gradient with respect to the

00:12:41 --> 00:12:51
weights and here's the graph or the

00:12:46 --> 00:12:53
update expressions so you have as

00:12:50 --> 00:12:56
intermediate as intermediate variables

00:12:52 --> 00:12:58
the gradients that we had on the

00:12:55 --> 00:13:00
previous slide and then this uses the

00:12:57 --> 00:13:05
scaled version

00:12:59 --> 00:13:08
with constant 0.1 that's somewhere so

00:13:04 --> 00:13:10
nce we have defined the whole graph the

00:13:07 --> 00:13:13
whole expression that we actually care

00:13:09 --> 00:13:18
about from the input and initial weights

00:13:12 --> 00:13:22
to the weight updates for our training

00:13:17 --> 00:13:24
algorithm we want to compile a function

00:13:21 --> 00:13:27
that we'll be able to actually compute

00:13:23 --> 00:13:30
those numbers given inputs and perform

00:13:26 --> 00:13:34
the weight updates so to compute values

00:13:29 --> 00:13:37
what we do is called Tiano dot function

00:13:33 --> 00:13:39
and you provide it with the input

00:13:36 --> 00:13:41
variables that you want to feel and the

00:13:38 --> 00:13:43
output variables that you want to get

00:13:40 --> 00:13:45
and you don't have necessarily to

00:13:42 --> 00:13:49
provide values for all the inputs that

00:13:44 --> 00:13:52
you might have declared especially if

00:13:48 --> 00:13:55
you don't want to go all the way through

00:13:51 --> 00:13:57
the end of the graph you can have a

00:13:54 --> 00:14:00
function that only computes sub set

00:13:56 --> 00:14:01
expression for a subset of the graph for

00:13:59 --> 00:14:05
instance we can have a predict function

00:14:00 --> 00:14:07
here that goes only from X to out we

00:14:04 --> 00:14:12
don't need values from Y we don't need

00:14:06 --> 00:14:15
and so the gradient and so on will not

00:14:11 --> 00:14:17
be computed it's just going to take a

00:14:14 --> 00:14:22
small part of the graph and make a

00:14:16 --> 00:14:26
function out of it so so that's it you

00:14:21 --> 00:14:28
can first compile it get value and call

00:14:25 --> 00:14:31
it so you have to provide values for all

00:14:27 --> 00:14:34
the input variables that that you define

00:14:30 --> 00:14:36
you don't have to provide values for

00:14:33 --> 00:14:38
shared variables W and B that we

00:14:35 --> 00:14:41
declared earlier there are implicit

00:14:37 --> 00:14:44
inputs to all the functions and their

00:14:40 --> 00:14:48
value will automatically be be fetched

00:14:43 --> 00:14:50
when it's needed can declare other

00:14:47 --> 00:14:53
functions like monitoring function that

00:14:49 --> 00:14:55
computes both the output and the cost so

00:14:52 --> 00:15:01
you have two output you also need the

00:14:54 --> 00:15:03
second input Y you can compute the

00:15:00 --> 00:15:05
function that does not start from the

00:15:02 --> 00:15:08
beginning like for instance I want an

00:15:04 --> 00:15:11
error function that only computes the

00:15:07 --> 00:15:14
mismatch between the prediction and

00:15:10 --> 00:15:16
the actual targets then I don't have to

00:15:13 --> 00:15:19
start from the input I can just start

00:15:15 --> 00:15:21
from the prediction and compute the cost

00:15:18 --> 00:15:25
hen the next thing that you might we

00:15:20 --> 00:15:29
want to do is update your Bibles for

00:15:24 --> 00:15:33
training it's necessary and again you

00:15:28 --> 00:15:35
can pass duty and functions updates a

00:15:32 --> 00:15:38
list of updates and updates are pairs of

00:15:34 --> 00:15:41
shared variable and the symbolic

00:15:37 --> 00:15:45
expression that will compute the new

00:15:40 --> 00:15:48
value for that shared Bible so you can

00:15:44 --> 00:15:51
see a big W and up they'd be here as

00:15:47 --> 00:15:53
implicit outputs of the function like W

00:15:50 --> 00:15:56
and B were implicit inputs update W

00:15:52 --> 00:15:58
update B are implicit outputs that will

00:15:55 --> 00:16:01
compute it that will be completed at the

00:15:57 --> 00:16:04
same time as C and then after all the

00:16:00 --> 00:16:08
outputs are computed the updates are

00:16:03 --> 00:16:13
actually effective and the values are

00:16:07 --> 00:16:19
updated so here if we print the value of

00:16:12 --> 00:16:20
B before and after having calling after

00:16:18 --> 00:16:26
having called the same function then we

00:16:19 --> 00:16:30
see the value has changed what happens

00:16:25 --> 00:16:33
also during graph compilation is that

00:16:29 --> 00:16:35
he graph that we selected for that

00:16:32 --> 00:16:39
particular function gets optimized and

00:16:34 --> 00:16:42
what we mean by that is that it's going

00:16:38 --> 00:16:44
to be rewritten in parts there are some

00:16:41 --> 00:16:49
xpressions that will be substituted and

00:16:43 --> 00:16:51
so on and there are different different

00:16:48 --> 00:16:53
goals for that

00:16:50 --> 00:16:58
some are quite simple that for instance

00:16:52 --> 00:17:00
if we have the same computation being

00:16:57 --> 00:17:03
defined twice we only want it to be

00:16:59 --> 00:17:05
xecuted once if you have expressions

00:17:02 --> 00:17:08
that are not necessary you don't want to

00:17:04 --> 00:17:11
compute them at all for instance if you

00:17:07 --> 00:17:14
have X divided by X you don't know and

00:17:10 --> 00:17:16
X is not used anywhere else we just

00:17:13 --> 00:17:19
want to replace that by one there are

00:17:15 --> 00:17:22
numerical stability optimizations for

00:17:18 --> 00:17:26
instance well log of one plus

00:17:21 --> 00:17:28
can under fill' if X is really small and

00:17:25 --> 00:17:32
this would give 0 whereas which would be

00:17:27 --> 00:17:36
close to X things like log of softmax

00:17:32 --> 00:17:39
get optimized into more stable locks of

00:17:35 --> 00:17:41
Max operation it's also the time where

00:17:38 --> 00:17:44
in place and destructive operations are

00:17:40 --> 00:17:46
inserted for instance if an operation is

00:17:43 --> 00:17:49
the last to be executed on some numbers

00:17:45 --> 00:17:51
it can instead of allocating output

00:17:48 --> 00:17:57
memory I can just work in place on its

00:17:50 --> 00:18:01
input and so on also the transfer of the

00:17:56 --> 00:18:05
graph expression to the GPU is due is

00:18:00 --> 00:18:10
done during the optimization phase so by

00:18:04 --> 00:18:12
default Kanno tries to apply most of the

00:18:09 --> 00:18:14
optimizations so that you have the run

00:18:11 --> 00:18:15
time that's almost as fast as possible

00:18:13 --> 00:18:19
xcept for a couple of checks and

00:18:14 --> 00:18:22
assertions but if you're iterating and

00:18:18 --> 00:18:26
want fast feedback and don't care that

00:18:21 --> 00:18:30
much about Timothy about the runtime

00:18:25 --> 00:18:32
speed then you have a couple of ways of

00:18:29 --> 00:18:37
enabling and disabling some set of

00:18:31 --> 00:18:41
optimizations and you can do that either

00:18:36 --> 00:18:44
globally or function by function so to

00:18:40 --> 00:18:46
have a look at for instance what happens

00:18:43 --> 00:18:51
during the the graph up to my different

00:18:45 --> 00:18:54
phase here's the the original and

00:18:50 --> 00:18:58
optimized graph going from the inputs X

00:18:53 --> 00:19:00
and W going to the output prediction

00:18:57 --> 00:19:03
it's the same one that we've seen before

00:18:59 --> 00:19:07
and if we compare that with the function

00:19:02 --> 00:19:10
the compile function that goes from

00:19:06 --> 00:19:13
these input variables to out which was

00:19:09 --> 00:19:15
called predicts this is what we have I

00:19:12 --> 00:19:17
won't go into details about what's

00:19:14 --> 00:19:21
happening in there but here you have a

00:19:16 --> 00:19:27
gem G operation which basically calls an

00:19:20 --> 00:19:30
optimized Blas routine that can also

00:19:26 --> 00:19:33
do multiplication and accumulation at

00:19:29 --> 00:19:36
he same time we have a sigmoid

00:19:32 --> 00:19:38
operation here can will work in place

00:19:35 --> 00:19:42
destructively on its input which is

00:19:37 --> 00:19:45
denoted by the red arrow here if you

00:19:41 --> 00:19:47
have a look at for instance the

00:19:44 --> 00:19:52
operation optimized graph completing the

00:19:46 --> 00:19:56
xpression for the updated W and B this

00:19:51 --> 00:19:57
was the original one and the optimized

00:19:55 --> 00:20:01
one is much smaller

00:19:56 --> 00:20:05
it has also in place operations

00:20:00 --> 00:20:07
it has fused LM wise operations like for

00:20:04 --> 00:20:11
instance if you have a whole tensor and

00:20:06 --> 00:20:13
then you do an element-wise a addition

00:20:10 --> 00:20:15
with with a constant and then a sigma

00:20:12 --> 00:20:18
eight and then something else and so on

00:20:14 --> 00:20:20
you want to only loop once through the

00:20:17 --> 00:20:23
array and apply all these carrier

00:20:19 --> 00:20:25
operations on each element and then go

00:20:22 --> 00:20:27
to the next and so on and not iterate

00:20:24 --> 00:20:29
ach time that you want to apply a new

00:20:26 --> 00:20:34
person and those kind of things

00:20:28 --> 00:20:37
happen often when you have automatically

00:20:33 --> 00:20:40
generated gradient expressions oh and

00:20:36 --> 00:20:43
here you see the update for the shared

00:20:39 --> 00:20:46
eyeballs which are inputs so you see the

00:20:42 --> 00:20:51
cost and the implicit outputs for the

00:20:45 --> 00:20:54
updated wnb here and here another

00:20:50 --> 00:20:56
graphitization tool that exists is the

00:20:53 --> 00:21:00
back print which basically prints

00:20:55 --> 00:21:02
text-based tree like structure of of the

00:20:59 --> 00:21:08
graph assigning arbitrary ids and

00:21:01 --> 00:21:11
printing the variable names and so on so

00:21:07 --> 00:21:14
here you can see more in detail like

00:21:10 --> 00:21:16
what the structure is and you see the

00:21:13 --> 00:21:20
inputs of gmv and the scaling parameters

00:21:15 --> 00:21:25
and so on so when the function is

00:21:19 --> 00:21:27
compiled then we can actually run it so

00:21:24 --> 00:21:32
T no function is call a ball python

00:21:26 --> 00:21:37
objects that that we can that we can

00:21:31 --> 00:21:40
call and we've seen those examples

00:21:36 --> 00:21:49
here for instance where we call train

00:21:39 --> 00:21:53
and so on but what happens to have say

00:21:48 --> 00:21:57
optimized run time it's not only the

00:21:52 --> 00:22:02
degree of optimizations but we also

00:21:56 --> 00:22:05
generate C++ or CUDA code for instance

00:22:01 --> 00:22:07
for the LMS loop fusion that I mentioned

00:22:04 --> 00:22:11
we can't know in advance which

00:22:06 --> 00:22:15
elementwise operation will be will occur

00:22:10 --> 00:22:19
in which order in any drive that the

00:22:14 --> 00:22:22
user might define so we have on-the-fly

00:22:18 --> 00:22:25
code generations for that you generate

00:22:21 --> 00:22:28
Python module written in C++ or in CUDA

00:22:24 --> 00:22:31
that gets compiled and imported back so

00:22:27 --> 00:22:37
that we can use it from Python the

00:22:30 --> 00:22:39
runtime environment then calls in the

00:22:36 --> 00:22:41
right order the different operations

00:22:38 --> 00:22:45
that have to be executed from the inputs

00:22:40 --> 00:22:49
to the outputs so that we so that we get

00:22:44 --> 00:22:51
he desired results we have a couple of

00:22:48 --> 00:22:54
different ones and in particular there's

00:22:50 --> 00:22:56
one which was written in C++ which

00:22:53 --> 00:22:59
avoids having to switch contacts between

00:22:55 --> 00:23:04
the Python interpreter and the C++

00:22:58 --> 00:23:06
execution engine something else that's

00:23:03 --> 00:23:11
really crucial for speed and performance

00:23:05 --> 00:23:13
is GPU so how to use a GPU in TN oh we

00:23:10 --> 00:23:22
wanted to make it as simple as possible

00:23:12 --> 00:23:24
in usual cases so now it supports a

00:23:21 --> 00:23:27
couple of different data types

00:23:23 --> 00:23:30
not only float 32 but double precision

00:23:26 --> 00:23:36
if you really need that integers as well

00:23:29 --> 00:23:39
and we have now easier interaction with

00:23:35 --> 00:23:42
GPU arrays from Python itself so you can

00:23:38 --> 00:23:44
just use Python code to handle GP arrays

00:23:41 --> 00:23:48
outside of a Tiano function if you'd

00:23:43 --> 00:23:51
like all of that he will be in

00:23:47 --> 00:23:56
future 0.9 release that we hope to get

00:23:50 --> 00:23:59
out soon and to use it well you select

00:23:55 --> 00:24:01
he device that you want to use the

00:23:58 --> 00:24:03
primary device that you want to use with

00:24:00 --> 00:24:07
just the configuration flag for instance

00:24:02 --> 00:24:12
you could to get the first GPU that's

00:24:06 --> 00:24:14
available or one specific one and if you

00:24:11 --> 00:24:17
specify that in the configuration then

00:24:13 --> 00:24:21
all share variable will by default be

00:24:16 --> 00:24:23
created in GPU memory and the

00:24:20 --> 00:24:27
optimizations that move the computation

00:24:22 --> 00:24:31
from CPU to GPU so that replace the CPU

00:24:26 --> 00:24:35
operation by GPU operations are going to

00:24:30 --> 00:24:39
be applied usually you want to make sure

00:24:34 --> 00:24:42
you use 432 or even float16 for storage

00:24:38 --> 00:24:45
which is experimental but because most

00:24:41 --> 00:24:50
GPUs don't have a good performance for

00:24:44 --> 00:24:54
for double precision so how you set

00:24:49 --> 00:24:57
hose configuration flags you have in

00:24:53 --> 00:25:01
order that you never see configuration

00:24:56 --> 00:25:03
file that you can it's just basic

00:25:00 --> 00:25:05
onfiguration file from for for Python

00:25:02 --> 00:25:07
you have an environment variable where

00:25:04 --> 00:25:09
you can define those and the environment

00:25:06 --> 00:25:12
variable overrides the config file and

00:25:08 --> 00:25:15
you can also set things directly from

00:25:11 --> 00:25:18
Python but some flags have to be known

00:25:14 --> 00:25:21
in advance before you know is is

00:25:17 --> 00:25:25
imported so for instance the device

00:25:20 --> 00:25:29
itself you have to set it either in the

00:25:24 --> 00:25:29
configuration file or throw flags

00:25:35 --> 00:25:42
o I'm going to quickly go over more

00:25:39 --> 00:25:44
advanced topics and if you want to learn

00:25:41 --> 00:25:46
more about that there's other tutorials

00:25:43 --> 00:25:51
available online and there's a

00:25:45 --> 00:25:54
documentation on the planning up net so

00:25:50 --> 00:25:56
to have loops in the graph we've seen

00:25:53 --> 00:25:59
that the expression graph is basically a

00:25:55 --> 00:26:04
directed acyclic graph and we cannot

00:25:58 --> 00:26:06
have loops in there one way if you know

00:26:03 --> 00:26:07
in advance the number of

00:26:05 --> 00:26:11
iterations it's just to unroll the loop

00:26:06 --> 00:26:13
use a for loop in Python that builds all

00:26:10 --> 00:26:16
the nodes for all the time steps

00:26:12 --> 00:26:21
it doesn't work if you want for instance

00:26:15 --> 00:26:24
to have dynamic no dynamic size for the

00:26:20 --> 00:26:30
loop for models that generate sequences

00:26:23 --> 00:26:32
for instance it can be an issue so what

00:26:29 --> 00:26:36
we have for that in India know is called

00:26:31 --> 00:26:38
scan and basically it's one node that

00:26:35 --> 00:26:41
encapsulate another whole T&O function

00:26:37 --> 00:26:45
and that the end of function or step

00:26:40 --> 00:26:47
function is going to compute the is

00:26:44 --> 00:26:50
going to represent the computation that

00:26:46 --> 00:26:52
has to be done at each time step so you

00:26:49 --> 00:26:54
have at the end of function that

00:26:51 --> 00:26:55
performs the competition for one time

00:26:53 --> 00:27:00
step and you have the scan node that

00:26:54 --> 00:27:02
calls it in the loop taking care of the

00:26:59 --> 00:27:04
bookkeeping of indices and sequences and

00:27:01 --> 00:27:07
feeding the right slice at the right

00:27:03 --> 00:27:12
point and feeding back the outputs where

00:27:06 --> 00:27:14
needed and having that structure makes

00:27:11 --> 00:27:16
it also possible to define gradient for

00:27:13 --> 00:27:18
that node which is basically another

00:27:15 --> 00:27:22
scan node another loop that goes

00:27:17 --> 00:27:24
backwards and applies back drops with

00:27:21 --> 00:27:26
time and it can be transferred to GPU as

00:27:23 --> 00:27:29
well in which case the internal function

00:27:25 --> 00:27:32
is going to be transferred to G and

00:27:28 --> 00:27:34
recompile on GPU and there's an example

00:27:31 --> 00:27:40
of scan in the

00:27:33 --> 00:27:42
lsdm example later this is just a small

00:27:39 --> 00:27:46
example but it's we don't really

00:27:41 --> 00:27:48
have time for that we also have a

00:27:45 --> 00:27:51
visualization debugging and diagnostic

00:27:47 --> 00:27:55
tools one of the reason it's important

00:27:50 --> 00:27:58
is that in piano like in terms of flow

00:27:54 --> 00:28:01
the definition of a function is separate

00:27:57 --> 00:28:04
from its execution and if something

00:28:00 --> 00:28:05
doesn't work during the execution if you

00:28:03 --> 00:28:09
encounter errors and so on

00:28:04 --> 00:28:12
then it's not obvious how to connect

00:28:08 --> 00:28:17
hat from where the expression was

00:28:11 --> 00:28:20
actually defined so we try to have

00:28:16 --> 00:28:23
infirmity of error messages and we have

00:28:19 --> 00:28:27
some completion modes that enable to for

00:28:22 --> 00:28:31
instance check for not a number fall out

00:28:26 --> 00:28:35
values you can assign test values to the

00:28:30 --> 00:28:38
symbolic variables so that each time you

00:28:34 --> 00:28:41
create a new symbolic intermediate

00:28:37 --> 00:28:44
variable each time you define a new

00:28:40 --> 00:28:47
expression then it the test value gets

00:28:43 --> 00:28:49
computed and so you can evaluate on one

00:28:46 --> 00:28:52
piece of data at the same time as you

00:28:48 --> 00:28:55
build a graph which can be useful to

00:28:51 --> 00:28:59
detect shape mismatch errors or it's

00:28:54 --> 00:29:02
like that it's possible to extend ya

00:28:58 --> 00:29:08
know a couple of ways you can create an

00:29:01 --> 00:29:10
app just from Python by calling python

00:29:07 --> 00:29:14
wrappers for existing efficient

00:29:09 --> 00:29:17
libraries you can extend ya know by

00:29:13 --> 00:29:21
writing C or CUDA code and you can also

00:29:16 --> 00:29:23
add optimizations either for increased

00:29:20 --> 00:29:26
numerical stability for instance or for

00:29:22 --> 00:29:31
more efficient computation or for

00:29:25 --> 00:29:35
introducing your new ops instead of the

00:29:30 --> 00:29:42
nave versions that that a user might

00:29:34 --> 00:29:43
have used we have a couple of new

00:29:41 --> 00:29:46
features that have been recently added

00:29:43 --> 00:29:47
to to the analyst I mentioned the new

00:29:45 --> 00:29:51
GPU back-end

00:29:46 --> 00:29:54
with support for many data types and

00:29:50 --> 00:29:59
we've had some performance improvements

00:29:53 --> 00:30:02
especially for convolution 2d and 3d and

00:29:58 --> 00:30:07
especially on GPU we made some progress

00:30:02 --> 00:30:11
on the time of the graph optimization

00:30:06 --> 00:30:13
phase and also have introduced new ways

00:30:10 --> 00:30:15
of avoiding recompiling the same graph

00:30:12 --> 00:30:17
over and over again and we have new

00:30:14 --> 00:30:19
diagnostic tools that are quite useful

00:30:16 --> 00:30:21
and interactive visualization an

00:30:18 --> 00:30:24
interactive graphical ization tool and

00:30:20 --> 00:30:27
pdb breakpoints that enables you to

00:30:23 --> 00:30:30
monitor a couple of eyeballs and only

00:30:26 --> 00:30:35
break if some condition is met rather

00:30:29 --> 00:30:39
than monitoring something every time the

00:30:34 --> 00:30:42
before for every every piece of data in

00:30:38 --> 00:30:46
the future well we're still working on

00:30:41 --> 00:30:51
ew operations on GPU we still want to

00:30:45 --> 00:30:53
wrap more convenient operations for for

00:30:50 --> 00:30:57
better performance in particular the

00:30:52 --> 00:31:00
basic errand ends should be completed in

00:30:56 --> 00:31:04
the following days hopefully someone has

00:30:59 --> 00:31:06
been working on that a lot recently we

00:31:03 --> 00:31:10
want better support for 3d convolutions

00:31:05 --> 00:31:17
till faster optimization and more work

00:31:09 --> 00:31:19
on data parallelism as well so what we

00:31:16 --> 00:31:25
want to thank well most of my colleagues

00:31:18 --> 00:31:27
and main tno developers and people who

00:31:24 --> 00:31:31
contributed one way or another to a lab

00:31:26 --> 00:31:34
and the software development efforts and

00:31:30 --> 00:31:41
of course recognizing the organizers for

00:31:33 --> 00:31:44
volley school now yeah so the slides are

00:31:40 --> 00:31:47
available online as I mentioned as a

00:31:43 --> 00:31:49
companion notebook and now we can start

00:31:46 --> 00:31:53
o go and and more resources if you want

00:31:48 --> 00:31:56
o go to go further and now I think that

00:31:52 --> 00:32:00
it's time to start the practical

00:31:55 --> 00:32:04
examples so for

00:31:59 --> 00:32:08
those who have not clone the repository

00:32:03 --> 00:32:10
et then this is the command line you

00:32:07 --> 00:32:13
want to two nouns for those who had

00:32:09 --> 00:32:17
cloned it you might want to do a git

00:32:12 --> 00:32:21
ball just to get the latest to make sure

00:32:16 --> 00:32:27
we have the latest versions and you can

00:32:20 --> 00:32:30
launch Jupiter notebook on the on the

00:32:26 --> 00:32:33
repository itself so we have three

00:32:29 --> 00:32:36
xamples that we are going to go over

00:32:32 --> 00:32:41
logistic regression comes net and the

00:32:35 --> 00:32:45
rest yeah so I've launched the Jupiter

00:32:40 --> 00:32:47
notebook here and let's start with so

00:32:44 --> 00:32:49
intro TN o was the companion notebooks

00:32:46 --> 00:32:51
there's nothing new in there just the

00:32:48 --> 00:32:56
code snippets I've showed your alrighty

00:32:50 --> 00:32:59
and okay let's go with a logic

00:32:55 --> 00:33:08
regression is that big enough for do we

00:32:58 --> 00:33:10
need to increase the font size okay so

00:33:07 --> 00:33:12
I'm going to skip over the text because

00:33:09 --> 00:33:18
you probably know already about the

00:33:11 --> 00:33:27
model we have some we've packaged the

00:33:17 --> 00:33:30
amnesty database with the on on github

00:33:26 --> 00:33:34
with the repository so let's load the

00:33:29 --> 00:33:38
data and here let's see how we define

00:33:33 --> 00:33:43
the model so it's basically the same way

00:33:37 --> 00:33:46
that we did in in the styles we define

00:33:42 --> 00:33:50
sizes that will be useful for the shell

00:33:45 --> 00:33:51
variables we define an input variable

00:33:49 --> 00:33:57
here it's a matrix because we want to

00:33:50 --> 00:34:06
use mini-batches and we have survived

00:33:56 --> 00:34:11
balls initialized from zeros then we

00:34:05 --> 00:34:13
define the our model so here's our

00:34:10 --> 00:34:18
predictor so the probability

00:34:12 --> 00:34:25
of the class given the input and we're

00:34:17 --> 00:34:30
going to use well so here the fine model

00:34:24 --> 00:34:33
and then the softmax on top of it and

00:34:29 --> 00:34:36
the prediction if you want to help

00:34:32 --> 00:34:41
rediction it's going to be the class of

00:34:35 --> 00:34:44
maximum probability so hard max over

00:34:40 --> 00:34:47
that axis because we still want one

00:34:43 --> 00:34:51
prediction for each element of of the

00:34:46 --> 00:34:54
mini batch then we define the loss

00:34:50 --> 00:34:57
function so here is going to be the log

00:34:53 --> 00:35:00
likelihood of the label given the input

00:34:56 --> 00:35:04
or the cross entropy and we define it

00:34:59 --> 00:35:07
simply we don't have like we don't need

00:35:03 --> 00:35:11
to have one croissants for P or log

00:35:06 --> 00:35:13
likelihood operation by itself you can

00:35:10 --> 00:35:16
just build it from the basic building

00:35:12 --> 00:35:20
blocks so we take the log of the

00:35:15 --> 00:35:25
probability you take the index of the

00:35:19 --> 00:35:26
actual target and then you take the mean

00:35:24 --> 00:35:33
of that to have them in prediction over

00:35:25 --> 00:35:37
the mini batch then derived equations

00:35:32 --> 00:35:39
derive the update rules so again we

00:35:36 --> 00:35:42
don't have like one gradient descent

00:35:38 --> 00:35:50
objects or something like that we just

00:35:41 --> 00:35:53
build whatever rule we we want so yeah

00:35:49 --> 00:35:55
we could use momentum by defining other

00:35:52 --> 00:35:56
shape variables that will hold the

00:35:54 --> 00:35:59
velocity and then you have that

00:35:55 --> 00:36:06
expressions for both the velocity and

00:35:58 --> 00:36:08
the survival itself and then we compile

00:36:05 --> 00:36:12
a training function going from X&Y

00:36:07 --> 00:36:18
outputting the laws and the dating W and

00:36:11 --> 00:36:20
B so while the code is getting generated

00:36:17 --> 00:36:24
and compiled and the graph is getting

00:36:19 --> 00:36:25
optimized let's see the next step well

00:36:23 --> 00:36:28
we also want to

00:36:24 --> 00:36:31
monitor not only the log-likelihood but

00:36:27 --> 00:36:36
actually actually the misclassification

00:36:30 --> 00:36:40
rate on validation and test set so it's

00:36:35 --> 00:36:43
imply the different like how many

00:36:39 --> 00:36:45
elements are different between the

00:36:42 --> 00:36:48
prediction which was the arc max and the

00:36:44 --> 00:36:51
actual target and the rate is the mean

00:36:47 --> 00:36:54
or the mini-batch and we create another

00:36:50 --> 00:36:57
we compile another two and a function

00:36:53 --> 00:37:01
outputting that and not doing any

00:36:56 --> 00:37:05
updates of course so to train the model

00:37:00 --> 00:37:07
well first we need to process the data a

00:37:04 --> 00:37:10
little bit so we want to feed the model

00:37:06 --> 00:37:13
one mini batch of data at a time so here

00:37:09 --> 00:37:14
we have simply a generator I mean not

00:37:12 --> 00:37:17
really pay attention right over just a

00:37:13 --> 00:37:19
helper function that gives us the mini

00:37:16 --> 00:37:22
batch number I and it's going to be the

00:37:18 --> 00:37:25
same fraction used both for the training

00:37:21 --> 00:37:30
and validation and test set

00:37:24 --> 00:37:32
we define a couple of parameters for

00:37:29 --> 00:37:38
early stopping in that training loop

00:37:31 --> 00:37:40
it's not necessary it's just like a way

00:37:37 --> 00:37:44
of knowing when to stop and use only

00:37:39 --> 00:37:48
like the best model that was encountered

00:37:43 --> 00:37:52
uring the optimization so let's let's

00:37:47 --> 00:37:55
define that and this is the main

00:37:51 --> 00:37:58
training loop it's a bit more complex

00:37:54 --> 00:38:01
that it might be but it's because we use

00:37:57 --> 00:38:05
this early stopping and we want to only

00:38:00 --> 00:38:07
validate when we are confident that the

00:38:04 --> 00:38:10
training error has gone down enough but

00:38:06 --> 00:38:17
basically the the most important part is

00:38:10 --> 00:38:20
you loop over the epochs unless unless

00:38:16 --> 00:38:23
you encounter the early stopping

00:38:19 --> 00:38:25
conditions and then during each epoch

00:38:22 --> 00:38:30
you want to loop over the mini batches

00:38:24 --> 00:38:33
and call train model then every once in

00:38:29 --> 00:38:37
a while you want to validate and print

00:38:32 --> 00:38:41
some result of the validation error so

00:38:36 --> 00:38:45
here we call test model on the

00:38:40 --> 00:38:48
validation set for that and then keep

00:38:44 --> 00:38:54
track of what the best model currently

00:38:47 --> 00:38:59
is and get the the test error as well

00:38:53 --> 00:39:02
and save the best one so to save the

00:38:58 --> 00:39:05
best one to save the model we usually

00:39:01 --> 00:39:08
just save the values of all parameters

00:39:04 --> 00:39:13
which is more robust than trying to pick

00:39:07 --> 00:39:16
all the whole Python object and it also

00:39:12 --> 00:39:18
enables more easily transferred to other

00:39:15 --> 00:39:23
frameworks to visualization frameworks

00:39:17 --> 00:39:23
and so on so let's try to execute that

00:39:23 --> 00:39:31
so of course it's a simple model the

00:39:26 --> 00:39:38
data is not that big so it should it

00:39:30 --> 00:39:40
should not take that long so you see

00:39:37 --> 00:39:42
that at the beginning

00:39:39 --> 00:39:45
well almost at each iteration we are

00:39:41 --> 00:39:51
better on the training set and then

00:39:44 --> 00:39:51
after a while the progress is slower and

00:39:53 --> 00:40:07
okay so just wait a little bit more

00:39:57 --> 00:40:12
seems to stall more and more and okay

00:40:06 --> 00:40:17
and here it's the end after 96 epochs so

00:40:11 --> 00:40:21
now if we want to visualize what filters

00:40:16 --> 00:40:24
were learned or what the final train

00:40:20 --> 00:40:26
model looks like we just using a helper

00:40:23 --> 00:40:30
function call here to visualize the

00:40:25 --> 00:40:34
filters it's not really important but

00:40:29 --> 00:40:39
here what we use is we call get value on

00:40:33 --> 00:40:41
the weights to access the internal value

00:40:38 --> 00:40:47
of the shell variable and then we use

00:40:40 --> 00:40:49
that to to plot the different filters

00:40:46 --> 00:40:51
and we can see it's kind of reasonable

00:40:48 --> 00:40:54
like this

00:40:50 --> 00:40:57
the filter for class zero and see

00:40:53 --> 00:41:00
kind of like zero one part did what's

00:40:56 --> 00:41:07
important for the two is to have like an

00:40:59 --> 00:41:12
opening here and so on so yeah if we

00:41:06 --> 00:41:19
have a look at the final error well we

00:41:11 --> 00:41:21
can see that the training error is well

00:41:18 --> 00:41:24
to hit training you know not plotting it

00:41:20 --> 00:41:28
but the validation and the test error I

00:41:23 --> 00:41:31
are quite high and we know that the

00:41:27 --> 00:41:33
human level performance is quite low and

00:41:30 --> 00:41:35
the performance of our model is quite

00:41:32 --> 00:41:38
low so it really means that the model is

00:41:34 --> 00:41:42
too simple and we should use something

00:41:37 --> 00:41:47
more advanced so to use something more

00:41:41 --> 00:41:51
advanced if you go back to the home of

00:41:47 --> 00:42:01
the Jupiter notebook can have a look at

00:41:50 --> 00:42:03
he continent and run Lynnette so this

00:42:00 --> 00:42:06
new example is basically it's the same

00:42:02 --> 00:42:08
data it's still amnesty because it has

00:42:05 --> 00:42:13
the other edge of training fast even on

00:42:07 --> 00:42:15
an older laptop and but this time we're

00:42:12 --> 00:42:18
going to use a completion net we look up

00:42:14 --> 00:42:20
all of conclusion layers and then fully

00:42:17 --> 00:42:24
connected layers and then the final

00:42:19 --> 00:42:30
classifier so I'm going to make for that

00:42:23 --> 00:42:35
float X is float 32 here and let's see

00:42:29 --> 00:42:38
how we could use Tiano to define helper

00:42:34 --> 00:42:42
classes that are layers that can make it

00:42:37 --> 00:42:44
easier for a user to compose them if

00:42:41 --> 00:42:47
they want to you to replicate some

00:42:43 --> 00:42:52
results or use some classical

00:42:46 --> 00:42:55
architectures this is done usually in

00:42:51 --> 00:42:58
frameworks built on top of Tiano like

00:42:54 --> 00:43:00
carrots like blocks like lasagna some

00:42:57 --> 00:43:01
people also develop their own mini

00:42:59 --> 00:43:03
framework

00:43:00 --> 00:43:04
with their own versions of layers and so

00:43:02 --> 00:43:10
n

00:43:03 --> 00:43:13
that they find useful and intuitive so

00:43:09 --> 00:43:20
this logistic regression layer basically

00:43:12 --> 00:43:26
holds well parameters weight and bias

00:43:19 --> 00:43:30
and compute the well the conditional

00:43:25 --> 00:43:34
probability of classes prediction holds

00:43:29 --> 00:43:38
the params and have expressions for the

00:43:33 --> 00:43:42
negative log likelihood and errors so if

00:43:37 --> 00:43:46
you were to use only that class then

00:43:41 --> 00:43:50
it's doing essentially the same as what

00:43:45 --> 00:43:56
we did by hand in the previous notebook

00:43:49 --> 00:44:00
and in the same way we can define a

00:43:55 --> 00:44:04
layer that has convolution and pooling

00:43:59 --> 00:44:08
so again in the init methods we pass it

00:44:03 --> 00:44:11
well filter shape image shape data side

00:44:07 --> 00:44:16
of pooling and so on we initialize the

00:44:10 --> 00:44:22
weights using the formula from grow and

00:44:15 --> 00:44:26
venture at 2010 and buyers from zeros

00:44:22 --> 00:44:29
and then from the inputs while we

00:44:25 --> 00:44:34
compute to the convolution with the

00:44:28 --> 00:44:39
filters we then computes max pooling and

00:44:33 --> 00:44:42
output wealth and H of the pooling plus

00:44:38 --> 00:44:45
the bias and here the bias is only like

00:44:41 --> 00:44:47
one number for each channel so which

00:44:44 --> 00:44:51
means that you don't have a different

00:44:46 --> 00:44:54
bias for each location in the image so

00:44:50 --> 00:44:58
you could actually apply such a layer on

00:44:53 --> 00:45:02
images of various size without having to

00:44:57 --> 00:45:07
initialize new parameters or return that

00:45:01 --> 00:45:09
and then the same way we define the

00:45:06 --> 00:45:12
hidden layer which is just a fully

00:45:08 --> 00:45:14
connected layer again initializing

00:45:11 --> 00:45:17
weight and by

00:45:13 --> 00:45:19
and expression going from so the

00:45:16 --> 00:45:23
symbolic expression going from the input

00:45:18 --> 00:45:27
and the shared variables to the output

00:45:22 --> 00:45:29
after activation and again we want to

00:45:26 --> 00:45:34
collect the parameters so that we know

00:45:28 --> 00:45:38
hat we will want to Train and then

00:45:33 --> 00:45:40
here's a function that has that the main

00:45:37 --> 00:45:42
loop in the main training loop

00:45:39 --> 00:45:46
so we have a mini batch generator again

00:45:41 --> 00:45:51
it's synced as as before and here we are

00:45:45 --> 00:45:55
building the whole graph so always the

00:45:50 --> 00:45:58
same the same process we define input

00:45:54 --> 00:46:02
symbol symbolic input variables matrix

00:45:57 --> 00:46:05
and a vector of int here so L vector is

00:46:01 --> 00:46:09
a vector of long because the targets

00:46:04 --> 00:46:11
here are in this's and not not one Hots

00:46:08 --> 00:46:15
vectors or masks or something like that

00:46:10 --> 00:46:19
and we create the first layer which is a

00:46:14 --> 00:46:27
Linette compo layer with size we want to

00:46:18 --> 00:46:31
have the next one with also so yeah here

00:46:26 --> 00:46:33
the image size changes this is mostly

00:46:30 --> 00:46:36
for efficiency actually you don't really

00:46:32 --> 00:46:38
have to to pass that for for those

00:46:35 --> 00:46:42
particular models but you still need

00:46:37 --> 00:46:46
like the shape of filters I mean you

00:46:41 --> 00:46:49
have the filters anyway and then it's

00:46:45 --> 00:46:52
useful to have those size still because

00:46:48 --> 00:46:55
ven if the convolution layers can

00:46:51 --> 00:47:00
handle arbitrary sized images then after

00:46:54 --> 00:47:02
that we want to flatten the whole the

00:46:59 --> 00:47:04
whole feature Maps and feed that into a

00:47:01 --> 00:47:06
fully connected layer and then to the

00:47:03 --> 00:47:10
projection layer so this one has to be

00:47:05 --> 00:47:15
fixed so we have to know what the last

00:47:09 --> 00:47:19
comes layer will will have four

00:47:14 --> 00:47:22
dimensions and here we here we go

00:47:18 --> 00:47:25
a fully connected layer and the output

00:47:21 --> 00:47:30
layer that's just logic regression class

00:47:24 --> 00:47:35
ame as before we want the final cost to

00:47:29 --> 00:47:38
be the log likelihood of that we have

00:47:34 --> 00:47:41
again the errors which is the

00:47:37 --> 00:47:42
misclassification rate parameters or the

00:47:40 --> 00:47:47
concatenation of the parameters of all

00:47:41 --> 00:47:51
ayers and once we have that we can

00:47:46 --> 00:47:55
build the gradient so just one call of

00:47:50 --> 00:47:56
grad of cost with respect to parameter

00:47:54 --> 00:48:00
updates

00:47:55 --> 00:48:04
o again just regular SGD but we could

00:47:59 --> 00:48:06
have a class or something that performs

00:48:03 --> 00:48:10
like momentum a degree that a delta

00:48:05 --> 00:48:14
whatever you need compile the function

00:48:09 --> 00:48:17
and here we have again the early

00:48:13 --> 00:48:21
stopping routine with the same main loop

00:48:16 --> 00:48:24
for all a parks until we are done then

00:48:20 --> 00:48:25
loop over the mini-batches and validate

00:48:23 --> 00:48:30
very once in a while and stop when it's

00:48:24 --> 00:48:33
finished so let's just declare that

00:48:29 --> 00:48:40
loading the data exactly the same as

00:48:32 --> 00:48:43
before and here we can actually run run

00:48:39 --> 00:48:50
that so this was the result of a

00:48:42 --> 00:48:53
previous run it that took 5 minutes so I

00:48:49 --> 00:48:56
will probably not have time to do that

00:48:52 --> 00:49:00
but here you can see basically what

00:48:55 --> 00:49:03
happens and if you want to run it or try

00:48:59 --> 00:49:08
that during the lunch break or or later

00:49:02 --> 00:49:08
you're welcome to to play with it and

00:49:07 --> 00:49:17
after that yeah you can visualize the

00:49:12 --> 00:49:22
the round filters as well here you

00:49:16 --> 00:49:26
have them for the first layer and

00:49:21 --> 00:49:26
for the

00:49:26 --> 00:49:33
and here you have the an example of the

00:49:29 --> 00:49:37
activations of the first layer for one

00:49:32 --> 00:49:45
xample so we have just a little bit

00:49:36 --> 00:49:50
more time to cover the lsdm tutorial

00:49:44 --> 00:49:54
I mean example so if you go back to the

00:49:49 --> 00:49:56
home of the Jupiter notebook and go to

00:49:53 --> 00:49:56
ASTM

00:50:02 --> 00:50:11
then so this model is an SEM network

00:50:07 --> 00:50:15
that tries to predict the next character

00:50:10 --> 00:50:23
of our sentence given the previous ones

00:50:14 --> 00:50:26
o not going to go into details but here

00:50:22 --> 00:50:28
you can see that the LSM layer is

00:50:25 --> 00:50:35
defined here with like shot variables

00:50:27 --> 00:50:37
for all the the matrices that that you

00:50:34 --> 00:50:40
need and the different biases for the

00:50:36 --> 00:50:44
different gates and so on so you have a

00:50:39 --> 00:50:47
lot of parameters it would be possible

00:50:43 --> 00:50:51
and sometimes more efficient to actually

00:50:46 --> 00:50:54
define say only one variable that

00:50:50 --> 00:50:58
contains the concatenation of a couple

00:50:53 --> 00:51:01
of matrices and that way you can do more

00:50:57 --> 00:51:05
fficient bigger matrix matrix multiply

00:51:00 --> 00:51:09
but this is just one one simple

00:51:04 --> 00:51:14
mentation and here's an example of

00:51:08 --> 00:51:20
how to use scan for the loop so here we

00:51:13 --> 00:51:25
define the step function that takes well

00:51:19 --> 00:51:28
a couple of different different inputs

00:51:24 --> 00:51:30
o you have like the different

00:51:27 --> 00:51:33
activation and so on from the previous

00:51:29 --> 00:51:38
time steps you have the current sequence

00:51:32 --> 00:51:40
input and so on and from them here's

00:51:37 --> 00:51:44
basically the DSM formula where you have

00:51:39 --> 00:51:48
the dot product and Sigma 8 or 10 H of

00:51:43 --> 00:51:57
the different connection inside the cell

00:51:47 --> 00:52:03
and in the end you have the hidden and

00:51:56 --> 00:52:06
that it so once you have that that's

00:52:02 --> 00:52:11
tep function is going to be passed to

00:52:05 --> 00:52:13
Tiano dot scan where the sequences are

00:52:10 --> 00:52:17
the masks and

00:52:12 --> 00:52:20
input so the mask is is useful because

00:52:16 --> 00:52:23
we're using mini batches of sequences

00:52:19 --> 00:52:25
and not all the sequences in the same

00:52:22 --> 00:52:27
batch have the same length also for

00:52:24 --> 00:52:30
efficiency we usually want to group them

00:52:26 --> 00:52:34
with two group example of similar length

00:52:29 --> 00:52:37
together but they may not always be

00:52:33 --> 00:52:39
xactly the same length so in that case

00:52:36 --> 00:52:41
we pad that to only the longest sequence

00:52:38 --> 00:52:44
in the mini batch not the longest

00:52:40 --> 00:52:46
sequence in the whole set just for the

00:52:43 --> 00:52:49
mini batch but we still have to pad and

00:52:45 --> 00:52:51
remember like what's the length of the

00:52:48 --> 00:52:54
different sequences is in order for us

00:52:50 --> 00:53:03
to correctly predict and back propagate

00:52:53 --> 00:53:06
so let's define that here we define the

00:53:02 --> 00:53:08
cost function that's the categorical

00:53:05 --> 00:53:10
cross-entropy of the sequence and here

00:53:07 --> 00:53:14
again you see that the mask is used so

00:53:09 --> 00:53:17
that we don't consider the predictions

00:53:13 --> 00:53:19
after the end of the sequence logistic

00:53:16 --> 00:53:25
regression the same as before does the

00:53:18 --> 00:53:27
final cost here for processing the data

00:53:24 --> 00:53:30
we're using fuel which is another tool

00:53:26 --> 00:53:36
being developed by students at Mira and

00:53:29 --> 00:53:39
it's nice because it can read from just

00:53:35 --> 00:53:41
plain text data do some pre-processing

00:53:38 --> 00:53:46
on-the-fly including things that I

00:53:40 --> 00:53:49
mentioned earlier like grouping

00:53:45 --> 00:53:52
sequences by similar length and then

00:53:48 --> 00:53:58
shuffling them and padding and doing all

00:53:51 --> 00:54:00
of that and so it outputs like a

00:53:57 --> 00:54:04
generator that you can then feed in your

00:53:59 --> 00:54:06
main loop through a channel function so

00:54:03 --> 00:54:09
that whole processing happens outside of

00:54:05 --> 00:54:16
tno and then the processed values are

00:54:08 --> 00:54:19
fed into into the channel function so

00:54:15 --> 00:54:23
yeah here we build our final key on a

00:54:18 --> 00:54:25
graph we have symbolic inputs for well

00:54:22 --> 00:54:30
the input and

00:54:24 --> 00:54:35
masks we create lsdm layered a lot

00:54:29 --> 00:54:37
correct layer define our cost parameters

00:54:34 --> 00:54:39
are the concatenation of the parameters

00:54:36 --> 00:54:43
of logistic regression and the current

00:54:38 --> 00:54:46
layer take the gradients of course with

00:54:42 --> 00:54:48
right to all parameters so as I

00:54:45 --> 00:54:50
mentioned it's going to use back prop

00:54:47 --> 00:54:58
through time to get the gradient through

00:54:49 --> 00:55:01
the scan operation the update rule again

00:54:57 --> 00:55:03
simple SGD no momentum nothing it's

00:55:00 --> 00:55:06
omething that you could add if you want

00:55:02 --> 00:55:12
o play with it and compile to function

00:55:05 --> 00:55:18
to evaluate the model so here the main

00:55:11 --> 00:55:20
loop is training and we also have

00:55:17 --> 00:55:22
another function that generates one

00:55:19 --> 00:55:24
character at a time given the previous

00:55:21 --> 00:55:28
ones that's why we will declare like

00:55:23 --> 00:55:32
input here and so does that speak

00:55:27 --> 00:55:34
function that get probability

00:55:31 --> 00:55:37
predictions we normalize them because we

00:55:33 --> 00:55:40
are working in float32 and sometimes if

00:55:36 --> 00:55:42
you divide by the sum and RISM then it

00:55:39 --> 00:55:45
doesn't add up to one so we want a

00:55:41 --> 00:55:53
higher precision for just that operation

00:55:44 --> 00:55:56
and then try to generate to generate a

00:55:52 --> 00:55:59
sequence every once in a while so again

00:55:55 --> 00:56:04
this is the result of a previous run so

00:55:58 --> 00:56:10
we see in the so for for monitoring we

00:56:03 --> 00:56:13
seed that prediction with the meaning of

00:56:09 --> 00:56:16
life is and then we let the network

00:56:12 --> 00:56:20
generate so if I try to run it now it's

00:56:15 --> 00:56:22
going to be long but here's some

00:56:19 --> 00:56:26
xamples that I generated yesterday in

00:56:21 --> 00:56:30
the previous run so it starts with not

00:56:25 --> 00:56:32
hat much and it has like a couple of

00:56:29 --> 00:56:36
unusual characters I mean

00:56:31 --> 00:56:39
it's usually it's not usual to have like

00:56:35 --> 00:56:42
one Chinese character in the middle of

00:56:38 --> 00:56:44
words you have like concentration in the

00:56:41 --> 00:56:50
middle of word and so on

00:56:43 --> 00:56:56
but then as it as it progresses you see

00:56:49 --> 00:57:01
that it's getting slowly better and

00:56:55 --> 00:57:06
the meaning of life is is the

00:57:00 --> 00:57:10
dets and so of course this is not what's

00:57:05 --> 00:57:14
going to give you the the actual meaning

00:57:09 --> 00:57:25
of life but yeah a tons lot of ham why

00:57:13 --> 00:57:27
not and and this is this so so yeah so I

00:57:24 --> 00:57:31
interrupted the the training at some

00:57:26 --> 00:57:34
point but you can play with it a little

00:57:30 --> 00:57:36
bit and here are some suggestions of

00:57:33 --> 00:57:40
things you might want to do like better

00:57:35 --> 00:57:43
training algorithms different

00:57:39 --> 00:57:46
nonlinearities inside the lsdm sell

00:57:42 --> 00:57:48
different initialization of weights try

00:57:45 --> 00:57:56
to generate something else that the

00:57:47 --> 00:57:59
meaning of life is and yeah so I hope I

00:57:55 --> 00:58:02
could give you a good introduction of

00:57:58 --> 00:58:06
what you know is what it can be used for

00:58:01 --> 00:58:09
and what you can build on top of it and

00:58:05 --> 00:58:15
if you have if you have any questions

00:58:08 --> 00:58:18
later then we have general users mailing

00:58:14 --> 00:58:23
lists we are answering questions on

00:58:17 --> 00:58:26
Stack Overflow as well and we would be

00:58:22 --> 00:58:26
happy to have your feedback

00:58:31 --> 00:58:36
have time for a few quick quick

00:58:34 --> 00:58:38
questions

00:58:35 --> 00:58:47
that's right here could you go to the

00:58:37 --> 00:58:49
mic can you just give a quick example of

00:58:46 --> 00:58:50
what debugging might look like in Theon

00:58:48 --> 00:58:51
Oh could you just break something in

00:58:49 --> 00:58:54
there and show us what happens and how

00:58:50 --> 00:58:54
you figure out what it was

00:58:55 --> 00:59:04
actually yeah I think I had one okay so

00:58:59 --> 00:59:09
let's let's go to say a simple simpler

00:59:03 --> 00:59:13
example okay so I'm just going to go to

00:59:08 --> 00:59:23
the logistic regression 1 and say for

00:59:12 --> 00:59:28
instance that when I initialize my thing

00:59:22 --> 00:59:33
I don't have the right I don't have the

00:59:27 --> 00:59:39
right shape so you can still build the

00:59:32 --> 00:59:43
whole symbolic graph and at the time

00:59:38 --> 00:59:48
where you want to actually execute it

00:59:42 --> 00:59:51
hen you have an error message that

00:59:47 --> 00:59:54
ells you shape mismatch X has of

00:59:50 --> 00:59:59
Cowen's and some rows but Y has only

00:59:53 --> 01:00:01
that number of rows and the apply node

00:59:58 --> 01:00:05
that caused the error is that dot

01:00:00 --> 01:00:08
product and gives the inputs again and

01:00:04 --> 01:00:12
in that case it tells you it's not

01:00:07 --> 01:00:16
really able to tell where it was defined

01:00:11 --> 01:00:23
but if you remove the optimizations then

01:00:15 --> 01:00:27
it might so we can we can do that and we

01:00:22 --> 01:00:31
can go back to where the train operation

01:00:26 --> 01:00:35
was defined train Model T a new function

01:00:30 --> 01:00:38
and then I'll just say optimizer equals

01:00:34 --> 01:00:38
none

01:00:42 --> 01:00:55
sorry I have to do my Audi calls piano

01:00:48 --> 01:01:01
te optimized or not that's correct yes

01:00:54 --> 01:01:03
o it's recompiling the function let's

01:01:00 --> 01:01:03
record everything

01:01:06 --> 01:01:16
and then he updated our message says

01:01:11 --> 01:01:20
back-trace when the node was created and

01:01:15 --> 01:01:24
it's somewhere in my kernel and it's on

01:01:19 --> 01:01:26
the line py given X equals that so of

01:01:23 --> 01:01:28
course we have like lots of things in

01:01:25 --> 01:01:32
there but you know that there's a dot

01:01:27 --> 01:01:35
product and it's probably a mismatch

01:01:31 --> 01:01:37
between those so that's that's one

01:01:34 --> 01:01:39
xample then there are other techniques

01:01:36 --> 01:01:43
that we can use we can have the

01:01:38 --> 01:01:45
breakpoints as I said and so on I don't

01:01:42 --> 01:01:47
have right now tutorial about that but

01:01:44 --> 01:01:55
have some one line and I could point you

01:01:46 --> 01:01:57
to that I have some models I'd like to

01:01:54 --> 01:01:59
distribute and I don't want to require

01:01:56 --> 01:02:07
people to install Python and a bunch of

01:01:58 --> 01:02:10
compilers and so unfortunately at the

01:02:06 --> 01:02:14
time we're pretty intermingled with

01:02:09 --> 01:02:16
Python a lot because all the memory

01:02:13 --> 01:02:19
management during the execution is done

01:02:15 --> 01:02:22
by Python and we use an umpire and

01:02:18 --> 01:02:23
arrays for our intermediate values on

01:02:21 --> 01:02:26
the CPU and the similar structure on the

01:02:22 --> 01:02:30
GPU even though that one might be easier

01:02:25 --> 01:02:32
to convert but yeah all our C code deals

01:02:29 --> 01:02:35
with Python and does the ink ref and

01:02:31 --> 01:02:37
Decker F and so on so that Python

01:02:34 --> 01:02:41
manages the memory so if you want to

01:02:36 --> 01:02:43
distribute that I would suggest like a

01:02:40 --> 01:02:46
docker container something like that

01:02:42 --> 01:02:50
recently even for GPU and video docker

01:02:45 --> 01:02:52
is quite efficient and we don't have any

01:02:49 --> 01:02:57
modest allowance that that we had seen

01:02:51 --> 01:03:01
earlier so it's not ideal and if like

01:02:57 --> 01:03:06
someone has some time and the wheel to

01:03:00 --> 01:03:09
help us disentangle tno from the

01:03:05 --> 01:03:12
Python runtime it would be awesome but

01:03:08 --> 01:03:12
hat's a use project

01:03:12 --> 01:03:23
okay let's thank Pascal again and we

01:03:19 --> 01:03:27
reconvene in 55 minutes for the next

01:03:23 --> 01:03:27
alk have a good lunch

<!-- YOUTUBE_TRANSCRIPT_END -->
