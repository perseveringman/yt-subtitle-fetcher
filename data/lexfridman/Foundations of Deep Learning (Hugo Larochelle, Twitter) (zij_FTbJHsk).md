---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "zij_FTbJHsk"
title: "Foundations of Deep Learning (Hugo Larochelle, Twitter)"
video_url: "https://www.youtube.com/watch?v=zij_FTbJHsk"
thumbnail_url: "https://i.ytimg.com/vi/zij_FTbJHsk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=zij_FTbJHsk"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:45:07.000Z"
upload_date: "2016-09-27"
duration_seconds: 3651
duration_human: "1:00:51"
view_count: 48101
like_count: 505
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:25:14.132Z"
---

# Foundations of Deep Learning (Hugo Larochelle, Twitter)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=zij_FTbJHsk
- video_id: zij_FTbJHsk
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:45:07.000Z
- upload_date: 2016-09-27
- duration: 1:00:51
- view_count: 48101
- like_count: 505
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

00:00:00 --> 00:00:05
That's good. All right. Cool. So, uh,

00:00:02 --> 00:00:07
yeah. So, I was asked to, uh, give this

00:00:04 --> 00:00:10
presentation on the foundations of deep

00:00:06 --> 00:00:12
learning, which is mostly going over,

00:00:09 --> 00:00:14
uh, basic feed forward neural networks

00:00:11 --> 00:00:16
and motivating a little bit deep

00:00:13 --> 00:00:18
learning and some of the more recent

00:00:15 --> 00:00:20
developments and and some of the topics

00:00:17 --> 00:00:25
that you'll see across the next two

00:00:19 --> 00:00:27
days. So, um, I, as uh, uh, Andrew

00:00:24 --> 00:00:29
mentioned, I have just an hour, so I'm

00:00:26 --> 00:00:30
going to go fairly quickly on a lot of

00:00:28 --> 00:00:32
these things, which I think will mostly

00:00:29 --> 00:00:35
be fine if you're familiar enough with

00:00:31 --> 00:00:36
some machine learning and, uh, uh, a

00:00:34 --> 00:00:38
little bit about neural nets. But if

00:00:35 --> 00:00:40
you'd like to go into some of the more

00:00:37 --> 00:00:42
specific details, you can go check out

00:00:39 --> 00:00:44
my online lectures on YouTube. Uh, it's

00:00:41 --> 00:00:48
now taught by a much younger version of

00:00:43 --> 00:00:50
myself. uh and uh so just search for

00:00:47 --> 00:00:52
Google Averell and I am not the guy

00:00:49 --> 00:00:54
doing a bunch of skateboarding. I'm the

00:00:51 --> 00:00:56
geek teaching about neural nets. So go

00:00:54 --> 00:00:59
check those out if you want more

00:00:55 --> 00:01:03
details. But so what I'll cover today is

00:00:58 --> 00:01:04
uh I'll start with just describing and

00:01:02 --> 00:01:07
laying out the notation on feed for

00:01:03 --> 00:01:09
neural networks that is models that take

00:01:06 --> 00:01:11
an input vector x that might be an image

00:01:08 --> 00:01:13
or some text and produces an output f

00:01:10 --> 00:01:14
ofx. So I'll just describe for

00:01:12 --> 00:01:17
propagation and the different types of

00:01:14 --> 00:01:19
units and the type of functions we can

00:01:16 --> 00:01:21
represent with those and then I'll talk

00:01:18 --> 00:01:23
about how we actually train neural nets

00:01:20 --> 00:01:25
uh describing things like loss functions

00:01:22 --> 00:01:27
back propagation uh that allows us to

00:01:24 --> 00:01:29
get a gradient for training with

00:01:26 --> 00:01:31
stoastic gradient descent and mention a

00:01:28 --> 00:01:32
few tricks of the trade. So some of the

00:01:30 --> 00:01:34
things we do in practice to uh

00:01:32 --> 00:01:37
successfully train neural nets and then

00:01:33 --> 00:01:40
I'll end by talking about some um

00:01:36 --> 00:01:42
developments that are specifically

00:01:39 --> 00:01:43
useful in the context of deep learning

00:01:41 --> 00:01:46
that is neural networks with several

00:01:42 --> 00:01:49
hidden layers uh that came out you know

00:01:45 --> 00:01:51
at the very uh after the beginning of of

00:01:48 --> 00:01:53
deep learning say in 2006 that is things

00:01:50 --> 00:01:55
like dropout batch normalization and if

00:01:52 --> 00:01:58
I have some time uh unsupervised

00:01:54 --> 00:02:00
pre-training so let's get started and

00:01:57 --> 00:02:02
just talk about assuming we have some

00:01:59 --> 00:02:04
neural network how do they actually

00:02:01 --> 00:02:08
functions how do they make predictions

00:02:03 --> 00:02:10
um so let me lay down the notation um so

00:02:07 --> 00:02:13
a multi-layer feed forward neural

00:02:09 --> 00:02:15
network is a model that uh takes as

00:02:12 --> 00:02:17
input some vector x which I'm

00:02:14 --> 00:02:19
representing here with a different node

00:02:16 --> 00:02:21
for each of the dimensions uh in my

00:02:18 --> 00:02:23
input vector so each dimension is

00:02:20 --> 00:02:26
essentially a unit in that uh neural

00:02:22 --> 00:02:30
network and then it eventually produces

00:02:25 --> 00:02:32
at its output layer a uh an output And

00:02:29 --> 00:02:34
we'll focus on classification mostly. So

00:02:31 --> 00:02:36
you'll have multiple units here and each

00:02:33 --> 00:02:38
unit would correspond to one of the

00:02:35 --> 00:02:40
potential classes in which we would want

00:02:37 --> 00:02:43
o classify our input. So if we're

00:02:39 --> 00:02:46
identifying uh digits in handwritten

00:02:42 --> 00:02:47
character images uh and and say we're

00:02:45 --> 00:02:50
focusing on digits, you'd have 10

00:02:46 --> 00:02:52
digits. So you would have so zero from

00:02:49 --> 00:02:55
zero to nine. So you'd have 10 output

00:02:51 --> 00:02:57
units. And to produce an output, the

00:02:54 --> 00:03:01
neural net will go through a series of

00:02:56 --> 00:03:02
hidden layers. um and those will be

00:03:00 --> 00:03:04
ssentially the components that

00:03:01 --> 00:03:07
introduce nonlinearity that allows us to

00:03:03 --> 00:03:10
capture and perform very sophisticated

00:03:06 --> 00:03:12
types of classification functions. So if

00:03:09 --> 00:03:15
we have L hidden layers uh the way we

00:03:11 --> 00:03:17
compute all the layers in our neural net

00:03:14 --> 00:03:19
is as follows. Uh we first start by

00:03:16 --> 00:03:22
computing what I'm going to call a

00:03:18 --> 00:03:24
pre-activation. I'm going to note that a

00:03:21 --> 00:03:27
nd I'm I'm going to index the layers by

00:03:23 --> 00:03:30
k. So AK is just the uh pre-activation

00:03:26 --> 00:03:33
at layer K and that is only simply going

00:03:29 --> 00:03:37
to be a linear transformation of the

00:03:32 --> 00:03:40
previous layer. So I'm going to note H K

00:03:36 --> 00:03:42
as the activation and the layer and by

00:03:39 --> 00:03:45
default I'll assume that layer zero is

00:03:41 --> 00:03:47
going to be the input. And so using that

00:03:44 --> 00:03:50
notation, the pre-activation at layer K

00:03:46 --> 00:03:52
is going to correspond to taking the

00:03:49 --> 00:03:55
activation at the previous layer K minus

00:03:51 --> 00:03:58
one, multiplying it by a matrix W K.

00:03:54 --> 00:04:00
Those are the parameters of the layer.

00:03:57 --> 00:04:02
Uh those essentially corresponds to the

00:03:59 --> 00:04:05
uh connections between the units between

00:04:01 --> 00:04:07
adjacent layers. And I'm going to add a

00:04:04 --> 00:04:09
bias vector. That's another parameter in

00:04:06 --> 00:04:11
my layer. So that gives me the

00:04:08 --> 00:04:13
pre-activation. And then next I'm going

00:04:10 --> 00:04:15
to get a hidden layer activation by

00:04:12 --> 00:04:18
applying an activation function. This

00:04:14 --> 00:04:19
will introduce some nonlinearity in the

00:04:17 --> 00:04:22
model. So I'm going to call that

00:04:18 --> 00:04:24
function G. And we'll go over a few uh

00:04:21 --> 00:04:27
choices that we have for um common

00:04:23 --> 00:04:30
choices for the activation function. And

00:04:26 --> 00:04:32
uh so I do this from layer 1 to layer L.

00:04:29 --> 00:04:34
And when it comes to the output layer,

00:04:31 --> 00:04:37
I'll also compute a pre-activation by

00:04:33 --> 00:04:38
performing a linear transformation. But

00:04:36 --> 00:04:40
hen I'll usually apply a different

00:04:37 --> 00:04:44
activation function depending on the

00:04:39 --> 00:04:47
problem I'm trying to solve. So

00:04:43 --> 00:04:49
um having said that let's go to some of

00:04:46 --> 00:04:51
the choices for the activation function.

00:04:48 --> 00:04:53
So some of the activations functions

00:04:50 --> 00:04:55
you'll see one common one is the sigmoid

00:04:52 --> 00:04:57
activation function. Uh it's this

00:04:54 --> 00:05:01
function here. It's just one divided by

00:04:56 --> 00:05:03
1 plus the exponential of minus the

00:05:00 --> 00:05:05
pre-activation. The shape of this

00:05:02 --> 00:05:07
function you can focus on that is this

00:05:04 --> 00:05:09
here. It takes the pre-activation which

00:05:06 --> 00:05:11
can vary from minus infinite to plus

00:05:08 --> 00:05:14
infinite and it squashes this between

00:05:10 --> 00:05:17
zero and one. So it's bounded by below

00:05:13 --> 00:05:19
and above below by zero and above by

00:05:16 --> 00:05:21
one. Okay. So it's a it's a function

00:05:18 --> 00:05:25
that saturates if you have very large or

00:05:20 --> 00:05:27
very um large magnitude positive or

00:05:24 --> 00:05:28
negative pre-activations.

00:05:26 --> 00:05:31
Uh another common choice is the

00:05:28 --> 00:05:33
hyperbolic tangent or tang activation

00:05:30 --> 00:05:35
function on this picture here. So

00:05:32 --> 00:05:37
squashes everything but instead of being

00:05:34 --> 00:05:39
between zero and one it's between minus

00:05:36 --> 00:05:42
one and one.

00:05:38 --> 00:05:45
And one that's become quite popular uh

00:05:41 --> 00:05:47
in neural nets is what's known as the

00:05:44 --> 00:05:51
rectified linear activation function or

00:05:46 --> 00:05:52
in papers you will see the uh relu unit

00:05:50 --> 00:05:55
hat refers to the use of this

00:05:52 --> 00:05:57
activation function.

00:05:54 --> 00:06:00
So this one is different from the others

00:05:56 --> 00:06:03
in that it's not bounded above but it is

00:05:59 --> 00:06:05
bounded below and it's actually uh uh it

00:06:02 --> 00:06:08
will output zeros exactly if the

00:06:04 --> 00:06:10
pre-activation is uh negative.

00:06:07 --> 00:06:13
So those are the choices of activation

00:06:09 --> 00:06:14
functions for the hidden layers. And for

00:06:12 --> 00:06:17
the output layer, if we're performing

00:06:14 --> 00:06:19
classification, as I said, in our output

00:06:16 --> 00:06:21
layer, we will have as many units as

00:06:18 --> 00:06:24
there are classes in which an input

00:06:20 --> 00:06:27
could belong. And what we'd like is

00:06:23 --> 00:06:29
potentially um and what we often do is

00:06:26 --> 00:06:31
interpret each unit's activation as the

00:06:28 --> 00:06:34
probability according to the neural

00:06:30 --> 00:06:37
network that the input belongs to the

00:06:33 --> 00:06:40
corresponding class that it's labeled Y

00:06:36 --> 00:06:42
is the corresponding class C. So C would

00:06:39 --> 00:06:45
be like the index of that unit in the

00:06:41 --> 00:06:47
output layer. So we need an activation

00:06:44 --> 00:06:49
function that produces probabilities

00:06:46 --> 00:06:51
produces a multinnomial distribution

00:06:48 --> 00:06:53
over all the different classes. And the

00:06:50 --> 00:06:54
activation function we use for that is

00:06:52 --> 00:06:58
known as the softmax activation

00:06:54 --> 00:07:00
function. Uh it is simply as follows.

00:06:57 --> 00:07:02
You take your pre-activations and you

00:06:59 --> 00:07:04
exponentiate them. So that's going to

00:07:01 --> 00:07:06
give us positive numbers and then we

00:07:03 --> 00:07:08
divide each of the exponentiated

00:07:05 --> 00:07:10
pre-activations by the sum of all the

00:07:08 --> 00:07:13
pre uh the exponentiated

00:07:09 --> 00:07:15
pre-activations. So because I'm

00:07:12 --> 00:07:17
normalizing this way, it means that all

00:07:14 --> 00:07:19
my uh values in my output layer are

00:07:16 --> 00:07:21
going to sum to one and they're positive

00:07:18 --> 00:07:23
because I took the exponential. So I can

00:07:20 --> 00:07:25
interpret that as a multinnomormal

00:07:22 --> 00:07:28
distribution over the choice of all the

00:07:24 --> 00:07:29
C different classes. Okay, so that's

00:07:27 --> 00:07:32
what I'll use as the activation function

00:07:28 --> 00:07:35
at the output layer.

00:07:31 --> 00:07:37
Um and now beyond the math in terms of

00:07:34 --> 00:07:39
conceptually and also in the way we're

00:07:36 --> 00:07:41
going to program neural networks often

00:07:38 --> 00:07:42
what we'll do is that all these

00:07:40 --> 00:07:44
different operations the linear

00:07:41 --> 00:07:46
transformations the different types of

00:07:43 --> 00:07:50
activation functions uh will essentially

00:07:46 --> 00:07:53
implement all of them as an object and

00:07:49 --> 00:07:55
uh object that take arguments uh and the

00:07:52 --> 00:07:56
arguments would essentially be what

00:07:54 --> 00:07:59
other things are being combined to

00:07:55 --> 00:08:00
produce the next value. So for instance,

00:07:58 --> 00:08:03
we would have an object that might

00:07:59 --> 00:08:04
correspond to the uh computation of

00:08:02 --> 00:08:07
pre-activation which would take as

00:08:03 --> 00:08:10
argument what is the weight matrix and

00:08:06 --> 00:08:12
the bias vector for that layer and take

00:08:09 --> 00:08:14
some layer to transform and that would

00:08:11 --> 00:08:16
this object would sort of compute its

00:08:13 --> 00:08:18
value by applying the linear activation

00:08:15 --> 00:08:20
uh the linear transformation and then we

00:08:17 --> 00:08:22
might have objects that correspond the

00:08:19 --> 00:08:24
specific you know uh activation

00:08:21 --> 00:08:26
function. So like a sigmoid object or a

00:08:23 --> 00:08:28
tangent object or relu object and we

00:08:25 --> 00:08:30
just combine these objects together

00:08:27 --> 00:08:33
chain them into what ends up being a

00:08:29 --> 00:08:35
graph which I refer to as a flow graph

00:08:32 --> 00:08:37
that represents the computation done

00:08:34 --> 00:08:39
when you do a forward pass in your

00:08:36 --> 00:08:41
neural network up until you reach the

00:08:38 --> 00:08:43
output layer. So I mention it now

00:08:40 --> 00:08:45
because that's you'll see you know the

00:08:42 --> 00:08:47
different softwares that we presented

00:08:44 --> 00:08:50
over the weekend uh will essentially

00:08:46 --> 00:08:51
sort of you know exploit some of that

00:08:49 --> 00:08:53
representation of the computation in

00:08:50 --> 00:08:55
eural nets and it also be handy for

00:08:52 --> 00:08:58
computing gradients which I'll talk

00:08:54 --> 00:09:02
about in a few minutes.

00:08:57 --> 00:09:04
And so that's how we perform predictions

00:09:01 --> 00:09:06
in neural networks. So we get an input

00:09:03 --> 00:09:08
we eventually reach an output layer that

00:09:05 --> 00:09:09
gives us a distribution over classes if

00:09:07 --> 00:09:12
we're performing classification. If I

00:09:08 --> 00:09:15
want to actually classify, I would just

00:09:11 --> 00:09:17
assign the class corresponding to the

00:09:14 --> 00:09:19
unit that has the highest activation

00:09:16 --> 00:09:20
that would correspond to classifying

00:09:18 --> 00:09:23
into the class that has the highest

00:09:19 --> 00:09:25
probability according to the neural net.

00:09:22 --> 00:09:27
And

00:09:24 --> 00:09:29
but then you might ask the question,

00:09:26 --> 00:09:30
okay, what kind of problems can we solve

00:09:28 --> 00:09:32
with neural networks? Or more

00:09:29 --> 00:09:35
technically, what kind of functions can

00:09:31 --> 00:09:38
we represent mapping from some input X

00:09:34 --> 00:09:40
into some arbitrary output? And um so if

00:09:37 --> 00:09:42
you look at if you go look at my videos

00:09:39 --> 00:09:44
I try to give more intuition as to why

00:09:42 --> 00:09:46
we have this result here. But

00:09:43 --> 00:09:48
essentially uh if we have a single

00:09:45 --> 00:09:49
hidden layer neural network uh it's been

00:09:47 --> 00:09:52
shown that with a linear output we can

00:09:48 --> 00:09:54
approximate any continuous function

00:09:51 --> 00:09:56
arbitrarily well as long as we have

00:09:53 --> 00:09:58
nough hidden units. So that is there's

00:09:55 --> 00:09:59
a value for these biases and these

00:09:57 --> 00:10:01
weights such that any continuous

00:09:58 --> 00:10:03
function I can actually represent it as

00:10:00 --> 00:10:06
well as I want. I just need to add

00:10:02 --> 00:10:08
enough hidden units. Um, so this result

00:10:05 --> 00:10:10
applies if you use activation functions,

00:10:07 --> 00:10:13
nonlinear activation functions like

00:10:09 --> 00:10:14
sigmoid and tanh. Um, so as I said in my

00:10:12 --> 00:10:17
video, if you want a bit more intuition

00:10:14 --> 00:10:20
as to why that would be, uh, you can go

00:10:16 --> 00:10:22
check that out. Um, but that's a really

00:10:19 --> 00:10:24
nice result. It means that by focusing

00:10:21 --> 00:10:27
on this family of machine learning

00:10:23 --> 00:10:29
models that are neural networks, I can

00:10:26 --> 00:10:31
pretty much potentially represent any

00:10:28 --> 00:10:33
kind of classification function.

00:10:30 --> 00:10:35
However, this result does not tell us

00:10:32 --> 00:10:37
how do we actually find the weights and

00:10:34 --> 00:10:39
the bias values such that I can

00:10:36 --> 00:10:41
represent a given function. It doesn't

00:10:38 --> 00:10:43
essentially tell us how do we train a

00:10:40 --> 00:10:46
neural network. And so that's what we'll

00:10:42 --> 00:10:49
discuss next. So let's talk about that.

00:10:45 --> 00:10:51
How do we actually from a data set train

00:10:48 --> 00:10:55
a neural network to perform good

00:10:50 --> 00:10:58
classification on uh for that problem?

00:10:54 --> 00:11:00
So uh what we'll typically do is use a

00:10:57 --> 00:11:02
framework that's very generic in machine

00:10:59 --> 00:11:04
learning known as empirical risk

00:11:01 --> 00:11:05
minimization or structural risk

00:11:03 --> 00:11:08
minimization if you're using

00:11:04 --> 00:11:10
regularization. So this framework

00:11:07 --> 00:11:13
essentially transforms the problem of

00:11:09 --> 00:11:15
learning as a problem of optimizing. So

00:11:12 --> 00:11:19
what we'll do is that we'll first choose

00:11:14 --> 00:11:21
a loss function that I'm noting as L.

00:11:18 --> 00:11:23
And the loss function it compares the

00:11:20 --> 00:11:25
output of my model. So the output layer

00:11:22 --> 00:11:28
of my neural network with the actual

00:11:24 --> 00:11:31
target. So I'm indexing with an exponent

00:11:27 --> 00:11:33
here with t to uh essentially as the

00:11:30 --> 00:11:36
index over all my different examples in

00:11:32 --> 00:11:39
my training set. And so my loss function

00:11:35 --> 00:11:43
will tell me is this output good or bad

00:11:38 --> 00:11:47
given uh that the label is actually y.

00:11:42 --> 00:11:50
And what I'll do I'll also define a

00:11:46 --> 00:11:52
regularizer. Um so theta here is you can

00:11:49 --> 00:11:54
think of it as just the concatenation of

00:11:51 --> 00:11:56
all my biases and all of my weights in

00:11:53 --> 00:11:59
my neural net. So those are all the

00:11:55 --> 00:12:01
parameters of my neural network and the

00:11:58 --> 00:12:04
regularizer will essentially penalize

00:12:00 --> 00:12:06
certain values of of of these weights.

00:12:03 --> 00:12:08
So as I'll talk more specifically later

00:12:05 --> 00:12:10
on for instance you might want to have

00:12:07 --> 00:12:12
your weights not be too far from zero.

00:12:09 --> 00:12:15
That's a frequent intuition that we

00:12:12 --> 00:12:17
implement with regularizer.

00:12:14 --> 00:12:19
And so the optimization problem that

00:12:16 --> 00:12:23
we'll try to solve when learning is to

00:12:18 --> 00:12:25
minimize the average loss of my neural

00:12:22 --> 00:12:27
network over my training examples. So

00:12:24 --> 00:12:32
summing over all training examples I

00:12:26 --> 00:12:34
have capital T examples plus some u

00:12:31 --> 00:12:36
weight here that's known as the weight

00:12:33 --> 00:12:38
decay some hyperparameter lambda times

00:12:35 --> 00:12:42
my regularizer. So in other words, I'm

00:12:37 --> 00:12:43
going to try to have my uh loss on my

00:12:41 --> 00:12:46
training set as small as possible over

00:12:42 --> 00:12:48
all the training example and also try to

00:12:45 --> 00:12:51
satisfy my regularizer as much as

00:12:47 --> 00:12:53
possible. And so now we have this

00:12:50 --> 00:12:55
optimization problem and we learning

00:12:52 --> 00:12:57
will just correspond to trying to solve

00:12:54 --> 00:13:00
this problem. So performing this finding

00:12:56 --> 00:13:03
this arg here for over my weights and my

00:12:59 --> 00:13:06
biases. And if I want to do this, I can

00:13:02 --> 00:13:09
just invoke some optimization procedure

00:13:05 --> 00:13:11
from the uh uh optimization community.

00:13:08 --> 00:13:14
And the one algorithm that you'll see

00:13:10 --> 00:13:16
constantly in deep learning uh is

00:13:13 --> 00:13:17
toastic gradient descent. This is the

00:13:15 --> 00:13:21
optimization algorithm that we'll often

00:13:16 --> 00:13:23
use for uh training neural networks. So

00:13:20 --> 00:13:26
SGD stoastic gradient descent functions

00:13:22 --> 00:13:28
as follows. you first initialize all of

00:13:25 --> 00:13:30
your parameters that is finding initial

00:13:27 --> 00:13:32
values for all my weight matrices and

00:13:29 --> 00:13:35
all of my biases

00:13:31 --> 00:13:37
and then for a certain number of epochs.

00:13:34 --> 00:13:39
So an epoch will be a full pass over all

00:13:36 --> 00:13:42
my examples that's what I'll call an

00:13:38 --> 00:13:46
epoch. Um so for a certain number of

00:13:42 --> 00:13:49
ull iterations over uh my training set

00:13:45 --> 00:13:53
I'll draw each training example. So a

00:13:48 --> 00:13:56
pair x input x target y and then I'll

00:13:52 --> 00:14:00
compute what is the gradient of my loss

00:13:55 --> 00:14:01
with respect to my parameters all of my

00:13:59 --> 00:14:04
parameters all my weights and all my

00:14:00 --> 00:14:06
biases. This is what this notation here

00:14:03 --> 00:14:09
uh so nabla for the gradient of the loss

00:14:05 --> 00:14:11
function and here I'm indexing with

00:14:08 --> 00:14:14
respect to which parameter I want the

00:14:10 --> 00:14:16
gradient. So I'm going to compute what

00:14:13 --> 00:14:19
is the gradient of my loss function with

00:14:15 --> 00:14:21
respect to my parameters and plus lambda

00:14:18 --> 00:14:23
times the gradient of my regularizer as

00:14:20 --> 00:14:25
well and then I'm going to get a

00:14:22 --> 00:14:27
direction in which I should move my

00:14:24 --> 00:14:29
parameters. uh since the gradient tells

00:14:26 --> 00:14:31
me how to increase the loss uh I want to

00:14:28 --> 00:14:33
go in the opposite direction and

00:14:30 --> 00:14:35
ecrease it. So my direction will be the

00:14:32 --> 00:14:38
opposite. So that's why I have a minus

00:14:34 --> 00:14:39
here. And so this delta is going to be

00:14:37 --> 00:14:42
the direction in which I'll move my

00:14:38 --> 00:14:45
parameters by taking a step. And the

00:14:41 --> 00:14:47
step is just a step size alpha which is

00:14:44 --> 00:14:50
often referred to as a learning rate

00:14:46 --> 00:14:52
times my direction which I just add to

00:14:49 --> 00:14:54
my current values of my parameters, my

00:14:51 --> 00:14:57
biases and my weights. And that's going

00:14:53 --> 00:14:59
to give me my new value for all of my

00:14:56 --> 00:15:02
parameters. And I iterate like that over

00:14:58 --> 00:15:04
going over all pairs X-Y's computing my

00:15:01 --> 00:15:06
gradient taking a steps side in the

00:15:03 --> 00:15:09
opposite direction and then doing that

00:15:05 --> 00:15:11
several times. Okay, so that's how

00:15:08 --> 00:15:13
stochastic gradient descent uh works and

00:15:10 --> 00:15:15
that's essentially the learning

00:15:12 --> 00:15:17
procedure. It's it's represented by this

00:15:14 --> 00:15:18
procedure. So in this algorithm

00:15:16 --> 00:15:21
there are a few things we need to

00:15:17 --> 00:15:23
specify to be able to implement it and

00:15:20 --> 00:15:25
execute it. We need a loss function. a

00:15:22 --> 00:15:27
choice for the loss function. We need a

00:15:24 --> 00:15:29
procedure that's efficient for computing

00:15:26 --> 00:15:32
the gradient of the loss with respect to

00:15:28 --> 00:15:34
my parameters. Uh we need to choose a

00:15:31 --> 00:15:37
regularizer if we want one. And we need

00:15:33 --> 00:15:38
a way of initializing my parameters. So

00:15:36 --> 00:15:40
next what I'll do is I'll go through

00:15:37 --> 00:15:42
each of these uh these four different

00:15:39 --> 00:15:44
hings we need to choose before actually

00:15:41 --> 00:15:46
being able to execute stoastic gradient

00:15:43 --> 00:15:49
descent.

00:15:45 --> 00:15:51
So first the loss function. So as I

00:15:48 --> 00:15:53
said, we will interpret the output layer

00:15:50 --> 00:15:55
as assigning probabilities to each

00:15:52 --> 00:15:59
potential class in which I can uh

00:15:54 --> 00:16:01
classify my input X. Well, in this case,

00:15:58 --> 00:16:03
something that would be natural is to

00:16:00 --> 00:16:05
try to maximize the probability of the

00:16:02 --> 00:16:08
correct class, the actual class in which

00:16:04 --> 00:16:09
my example XT belongs to, I'd like to

00:16:07 --> 00:16:12
increase the value of the probability

00:16:08 --> 00:16:16
assigned by computed by my neural

00:16:11 --> 00:16:18
network. Um and so because we set up the

00:16:15 --> 00:16:20
problem in which we had a loss that we

00:16:17 --> 00:16:22
minimize uh instead of maximizing the

00:16:19 --> 00:16:25
probability what we'll actually do is

00:16:21 --> 00:16:27
minimize the negative and the actual uh

00:16:24 --> 00:16:31
log probability. So the log likelihood

00:16:26 --> 00:16:34
of assigning X to the correct class Y.

00:16:30 --> 00:16:36
So this is represented here. So given my

00:16:33 --> 00:16:39
output layer and the true label Y, my

00:16:35 --> 00:16:42
loss will be minus the log of the

00:16:38 --> 00:16:44
probability of Y for my neur according

00:16:41 --> 00:16:47
to my neural net and that would be well

00:16:43 --> 00:16:49
take my output layer and look at the

00:16:46 --> 00:16:51
unit. So index the unit corresponding to

00:16:48 --> 00:16:55
the correct class. So that's why I'm

00:16:50 --> 00:16:57
indexing by Y here. Um we take the log

00:16:54 --> 00:16:58
because numerically it's turns out to be

00:16:56 --> 00:17:02
more stable. We get nicer looking

00:16:58 --> 00:17:03
radients. uh and sometimes in certain

00:17:01 --> 00:17:05
softwares you'll see instead of talking

00:17:02 --> 00:17:07
about the negative log likelihood or log

00:17:04 --> 00:17:10
probability you'll see it referred as

00:17:06 --> 00:17:13
the cross entropy uh and that's because

00:17:09 --> 00:17:17
you can think of this as performing a

00:17:12 --> 00:17:19
sum over all possible classes and then

00:17:16 --> 00:17:22
for each class checking well is this

00:17:18 --> 00:17:24
potential class the target class. So I

00:17:21 --> 00:17:27
have an indicator function that is one

00:17:23 --> 00:17:29
if y is equal to c. So if my iterator

00:17:26 --> 00:17:32
class C is actually equal to the the

00:17:28 --> 00:17:34
real class, I'm going to multiply that

00:17:31 --> 00:17:38
by the log of the probability actually

00:17:33 --> 00:17:40
assigned to that class C. And this uh

00:17:37 --> 00:17:42
this function here, so this expression

00:17:39 --> 00:17:44
here is like a cross entropy between the

00:17:41 --> 00:17:46
mpirical distribution which assigns

00:17:43 --> 00:17:48
zero probability to all the other

00:17:45 --> 00:17:50
classes but a probability of one to the

00:17:47 --> 00:17:52
correct class and the actual

00:17:49 --> 00:17:55
distribution over classes that my neural

00:17:51 --> 00:17:57
net is computing which is f ofx. Okay,

00:17:54 --> 00:17:59
that's just a technical detail. You can

00:17:56 --> 00:18:00
just think about this here. I only

00:17:58 --> 00:18:01
mentioned it because in certain

00:17:59 --> 00:18:04
libraries it's actually mentioned as the

00:18:00 --> 00:18:07
cross entropy loss.

00:18:03 --> 00:18:09
So that's for the loss. Um then we need

00:18:06 --> 00:18:11
also a procedure for computing what is

00:18:08 --> 00:18:13
the gradient of my loss with respect to

00:18:10 --> 00:18:16
all of my parameters in my neural net.

00:18:12 --> 00:18:18
So the biases and the weights. Um you

00:18:16 --> 00:18:20
can go look at my videos if you want the

00:18:17 --> 00:18:22
actual derivation of all the details for

00:18:20 --> 00:18:24
all of these different expressions. Uh I

00:18:22 --> 00:18:27
don't have time for that. So all I'll do

00:18:23 --> 00:18:29
and presumably a lot of you actually

00:18:26 --> 00:18:31
seen you know these derivations if you

00:18:28 --> 00:18:33
haven't just go check out the videos. In

00:18:30 --> 00:18:35
any case I'm going to go through what

00:18:32 --> 00:18:37
he algorithm is. I'm going to highlight

00:18:34 --> 00:18:40
some of the key points that will come up

00:18:36 --> 00:18:44
later in understanding how actually back

00:18:39 --> 00:18:46
propagation functions. So the basic idea

00:18:43 --> 00:18:48
is that we'll compute gradients by

00:18:45 --> 00:18:50
exploiting the chain rule and we'll go

00:18:47 --> 00:18:53
from the top layer all the way to the

00:18:49 --> 00:18:55
bottom computing gradients for uh layers

00:18:52 --> 00:18:57
that are closer and closer to the input

00:18:54 --> 00:19:00
as we go and exploiting the chain rule

00:18:56 --> 00:19:01
to exploit or reuse previous

00:18:59 --> 00:19:04
computations we've made at upper layers

00:19:00 --> 00:19:08
to compute the gradients at the layers

00:19:03 --> 00:19:10
below. So we usually start by computing

00:19:07 --> 00:19:12
what is the gradient at the output

00:19:09 --> 00:19:14
layer. So what's the gradient of my loss

00:19:11 --> 00:19:16
with respect to my output layer and

00:19:14 --> 00:19:18
actually it's it's more convenient to

00:19:15 --> 00:19:20
compute the loss with respect to the

00:19:17 --> 00:19:22
pre-activation. It's actually a very

00:19:19 --> 00:19:25
simple expression. Um so that that's why

00:19:21 --> 00:19:27
I have the gradient of this vector a l +

00:19:24 --> 00:19:30
one. That's the pre-activation at the

00:19:26 --> 00:19:33
very last layer of the loss function

00:19:29 --> 00:19:35
which is minus the log f ofxy.

00:19:32 --> 00:19:38
And it turns out this gradient is super

00:19:34 --> 00:19:41
simple. It's minus e of y. So that's the

00:19:37 --> 00:19:44
one hot vector for class Y. So what this

00:19:40 --> 00:19:47
means is E of Y is just a vector filled

00:19:43 --> 00:19:50
with a bunch of zeros and then a one at

00:19:46 --> 00:19:52
he correct class. So if Y was the

00:19:49 --> 00:19:53
fourth class, then in this case it would

00:19:51 --> 00:19:56
be this vector where I have a one at the

00:19:52 --> 00:19:58
fourth dimension. So E of Y is just a

00:19:55 --> 00:20:00
vector. It's we call it the one hot

00:19:57 --> 00:20:02
vector full of zeros and the single one

00:19:59 --> 00:20:05
at the position corresponding to the

00:20:01 --> 00:20:07
correct class. So what this part of the

00:20:04 --> 00:20:09
grain is essentially saying is that I'm

00:20:06 --> 00:20:11
going to increase I want to increase the

00:20:08 --> 00:20:13
probability of the correct class. I want

00:20:10 --> 00:20:15
o increase the pre-activation which

00:20:12 --> 00:20:17
will increase the probability of the

00:20:14 --> 00:20:19
correct class and I'm going to subtract

00:20:16 --> 00:20:22
what is the current probabilities

00:20:18 --> 00:20:24
assigned by my neural net to all of the

00:20:21 --> 00:20:26
classes. So f ofx that's my output layer

00:20:23 --> 00:20:29
and that's the current beliefs of the

00:20:25 --> 00:20:31
neural net as to in which class uh

00:20:28 --> 00:20:33
what's the probability assigning the

00:20:30 --> 00:20:35
input to each class. So what this is

00:20:32 --> 00:20:37
doing is essentially trying to decrease

00:20:34 --> 00:20:39
the probability of everything and

00:20:36 --> 00:20:41
specifically decrease it as much as I

00:20:38 --> 00:20:44
the neural net currently believes that

00:20:40 --> 00:20:46
he input belongs to it. And so if you

00:20:43 --> 00:20:48
think about the subtraction of these two

00:20:45 --> 00:20:50
things, well for the class that's the

00:20:47 --> 00:20:52
correct class, I'm going to have one

00:20:49 --> 00:20:53
minus some number between 0 and one

00:20:51 --> 00:20:55
because it's a probability. So that's

00:20:52 --> 00:20:56
going to be positive. So I'm going to

00:20:54 --> 00:20:58
increase the probability of the correct

00:20:55 --> 00:21:00
class. And for everything else, it's

00:20:57 --> 00:21:02
going to be zero minus a positive

00:20:59 --> 00:21:03
number. So it's going to be negative. So

00:21:01 --> 00:21:05
I'm actually going to decrease the

00:21:02 --> 00:21:07
probability of everything else. So

00:21:04 --> 00:21:10
intubally it makes sense. This gradient

00:21:06 --> 00:21:12
has the right behavior. And I'm going to

00:21:09 --> 00:21:15
take that pre-activation gradient. I'm

00:21:11 --> 00:21:18
going to propagate it from the top to

00:21:14 --> 00:21:20
the bottom and uh and essentially

00:21:17 --> 00:21:23
iterating from the last layer which is

00:21:19 --> 00:21:26
the output layer L+1 all the way down to

00:21:22 --> 00:21:27
the first layer. And uh as I'm going

00:21:25 --> 00:21:29
down, I'm going to compute the gradients

00:21:26 --> 00:21:31
with respect to my parameters and then

00:21:28 --> 00:21:33
compute what's the gradient for the uh

00:21:30 --> 00:21:37
pre-activation at the layer below and

00:21:32 --> 00:21:40
then iterate like that. So at each uh

00:21:36 --> 00:21:43
iteration of that loop, I take what is

00:21:39 --> 00:21:44
the current gradient of the loss

00:21:42 --> 00:21:47
function with respect to the

00:21:43 --> 00:21:49
pre-activation at the current layer and

00:21:46 --> 00:21:51
I can compute the gradient of the loss

00:21:48 --> 00:21:54
function with respect to my weight

00:21:50 --> 00:21:57
matrix. So not doing the uh derivation

00:21:53 --> 00:22:00
here it it's actually simply this

00:21:56 --> 00:22:03
vector. So my in my notation I assume

00:21:59 --> 00:22:05
that all the vectors are column vectors.

00:22:02 --> 00:22:07
So this pre-activation uh gradient

00:22:04 --> 00:22:10
vector and I multiply it by the

00:22:06 --> 00:22:13
transpose of the activations. So the

00:22:09 --> 00:22:16
value of the layer right below the the

00:22:12 --> 00:22:17
layer k minus one. So because I take

00:22:15 --> 00:22:19
the transpose that's a multiplication

00:22:16 --> 00:22:21
like this. And you can see if I do the

00:22:18 --> 00:22:22
outer product essentially between these

00:22:20 --> 00:22:25
two vectors, I'm going to get a matrix

00:22:22 --> 00:22:28
of the same size as my weight matrix. So

00:22:24 --> 00:22:30
it all checks out. That makes sense. Uh

00:22:27 --> 00:22:32
turns out that the gradient of the loss

00:22:29 --> 00:22:34
with respect to the bias is exactly the

00:22:31 --> 00:22:37
gradient of the loss with respect to the

00:22:33 --> 00:22:38
pre-activation. So that's very simple.

00:22:36 --> 00:22:40
So that gives me now my gradients for my

00:22:37 --> 00:22:42
parameters. And now I need to compute

00:22:39 --> 00:22:44
okay, what is going to be the gradient

00:22:41 --> 00:22:47
of the pre-activations at the layer

00:22:43 --> 00:22:51
below. Uh well, first I'm going to get

00:22:46 --> 00:22:54
he gradient of the loss function um

00:22:50 --> 00:22:56
with respect to the activation at the

00:22:53 --> 00:22:59
layer below. Well, that's just taking my

00:22:55 --> 00:23:01
pre-activation gradient vector and

00:22:58 --> 00:23:03
multiplying it by for some reason

00:23:00 --> 00:23:05
doesn't show here, but and multiplying

00:23:02 --> 00:23:07
by the transpose of my weight matrix.

00:23:04 --> 00:23:10
Super simple operation. Just a linear

00:23:06 --> 00:23:12
transformation of my gradients at layer

00:23:09 --> 00:23:15
K. linear transform to get my gradients

00:23:11 --> 00:23:17
of the activation at the layer k minus

00:23:14 --> 00:23:19
one. And then to get the gradients of

00:23:16 --> 00:23:22
the pre-activation, so before the

00:23:18 --> 00:23:24
activation function, I'm going to I'm

00:23:21 --> 00:23:25
going to take this gradient here, which

00:23:23 --> 00:23:28
is the gradient of the activation

00:23:24 --> 00:23:30
function at the layer k minus one. And

00:23:27 --> 00:23:32
then I apply the gradient corresponding

00:23:29 --> 00:23:35
to the partial derivative of my

00:23:31 --> 00:23:37
nonlinear activation function. So this

00:23:34 --> 00:23:38
here, this refers to an elementwise

00:23:36 --> 00:23:41
product. So I'm taking these two

00:23:37 --> 00:23:42
vectors, this vector here and this

00:23:40 --> 00:23:44
vector here. I'm going to do an

00:23:41 --> 00:23:47
elementwise product between the two. And

00:23:44 --> 00:23:49
this vector here is just the partial

00:23:46 --> 00:23:51
derivative of the activation function

00:23:48 --> 00:23:53
for each unit individually that I've put

00:23:50 --> 00:23:56
ogether into a vector. Okay, this is

00:23:52 --> 00:23:59
what this corresponds to. Now the key

00:23:55 --> 00:24:00
things to notice is first that this pass

00:23:58 --> 00:24:02
computing all the gradients and doing

00:23:59 --> 00:24:05
all these iterations is actually fairly

00:24:01 --> 00:24:07
cheap. it's uh complexity is essentially

00:24:04 --> 00:24:10
the same as the one that's doing a a

00:24:06 --> 00:24:12
forward pass. So um all I'm doing are

00:24:09 --> 00:24:14
linear transformations multiplying by

00:24:11 --> 00:24:17
matrices in this case the transpose of

00:24:13 --> 00:24:18
my weight matrix and then I'm also doing

00:24:16 --> 00:24:20
this sort of nonlinear operation where

00:24:17 --> 00:24:22
I'm multiplying by the gradient of the

00:24:19 --> 00:24:24
activation function. So that's the first

00:24:21 --> 00:24:27
hing to notice and the second thing to

00:24:23 --> 00:24:29
notice is that here I'm I'm doing this

00:24:26 --> 00:24:31
elementwise product. So if any of these

00:24:28 --> 00:24:34
terms here for a unit is very close to

00:24:30 --> 00:24:37
zero, then the pre-activation gradient

00:24:33 --> 00:24:39
is going to be zero for the next layer.

00:24:36 --> 00:24:41
And I highlight this point because

00:24:38 --> 00:24:42
ssentially whenever that's something to

00:24:40 --> 00:24:45
think about a lot when you're training

00:24:41 --> 00:24:47
neural nets, whenever this gradient

00:24:44 --> 00:24:49
here, these partial derivatives come

00:24:46 --> 00:24:50
close to zero, that it means the

00:24:48 --> 00:24:52
gradient will not propagate well to the

00:24:49 --> 00:24:54
next layer, which means that you're not

00:24:51 --> 00:24:55
going to get a good gradient to update

00:24:53 --> 00:24:57
your parameters.

00:24:54 --> 00:25:00
Now, when does that happen? When will

00:24:56 --> 00:25:01
you see these terms here being close to

00:24:59 --> 00:25:03
zero? Well, that's going to be when the

00:25:00 --> 00:25:05
partial derivatives of these nonlinear

00:25:02 --> 00:25:08
activation functions are close to zero

00:25:04 --> 00:25:09
r zero. So, uh we can look at the

00:25:07 --> 00:25:12
partial derivatives say of the sigmoid

00:25:08 --> 00:25:14
function. Uh it turns out it's super

00:25:11 --> 00:25:18
easy to compute. It's just the sigmoid

00:25:13 --> 00:25:20
itself times 1 minus the sigmoid itself.

00:25:17 --> 00:25:22
Uh so that means that whenever the

00:25:19 --> 00:25:24
activation of the unit for a sigmoid

00:25:21 --> 00:25:26
unit is close to one or close to zero, I

00:25:23 --> 00:25:29
essentially get a partial derivative

00:25:25 --> 00:25:30
that's close to zero. Uh you can kind of

00:25:28 --> 00:25:32
see it here. The slope here is

00:25:29 --> 00:25:34
essentially flat and the slope here is

00:25:31 --> 00:25:37
flat. That's the uh value of the partial

00:25:34 --> 00:25:40
derivative. So in other words, if my

00:25:36 --> 00:25:42
pre-activations are very negative or

00:25:39 --> 00:25:44
very positive, so if my unit is very

00:25:41 --> 00:25:47
saturated, then gradients will have a

00:25:43 --> 00:25:50
hard time propagating to the next layer.

00:25:46 --> 00:25:52
Okay, that's the key inside here. Um,

00:25:49 --> 00:25:54
same thing for the uh tangent function.

00:25:51 --> 00:25:56
So the turns out the partial derivative

00:25:53 --> 00:25:58
is also easy to compute. You just take

00:25:55 --> 00:26:02
the tangent value, square it and going

00:25:57 --> 00:26:05
to subtract it to one. And you indeed if

00:26:01 --> 00:26:08
it's close to minus one or close to one,

00:26:04 --> 00:26:10
you can see that the slope is flat. So

00:26:07 --> 00:26:12
again, if the unit is saturating,

00:26:09 --> 00:26:15
gradients will propagate have a hard

00:26:11 --> 00:26:17
time propagating to the next layers.

00:26:14 --> 00:26:20
And for the relu the uh rectified linear

00:26:16 --> 00:26:22
activation function the uh gradient is

00:26:19 --> 00:26:24
even simpler. It's uh you just check

00:26:21 --> 00:26:26
whether the pre-activation is greater

00:26:23 --> 00:26:28
than zero. If it is the partial

00:26:25 --> 00:26:29
derivative is one. If it's not it's

00:26:27 --> 00:26:31
zero. So you're actually either going to

00:26:28 --> 00:26:33
multiply by one or zero. You essentially

00:26:30 --> 00:26:36
get a binary mask when you're performing

00:26:32 --> 00:26:38
the propagation through the relu. And

00:26:35 --> 00:26:39
you can see it the the slope here is

00:26:37 --> 00:26:43
flat and otherwise you have a linear

00:26:38 --> 00:26:44
function. So actually here at the the

00:26:42 --> 00:26:46
shrinking of the gradient towards

00:26:43 --> 00:26:48
zero is even harder. It's exactly

00:26:45 --> 00:26:53
multiplying by zero if you're have a

00:26:48 --> 00:26:56
unit that's uh saturating below.

00:26:52 --> 00:26:58
And beyond all the math uh in in terms

00:26:55 --> 00:27:00
of actually using those in practice

00:26:57 --> 00:27:02
during the weekend you'll see uh three

00:27:00 --> 00:27:03
different libraries that essentially

00:27:01 --> 00:27:05
allows you to compute these gradients

00:27:02 --> 00:27:08
for you. You actually usually don't

00:27:04 --> 00:27:10
write down back prop. you just use all

00:27:07 --> 00:27:11
of these modules that you've implemented

00:27:09 --> 00:27:14
and it turns out there's a way of

00:27:10 --> 00:27:16
automat automatically differentiating uh

00:27:13 --> 00:27:18
your loss function and getting gradients

00:27:15 --> 00:27:21
for free in terms of effort in terms of

00:27:17 --> 00:27:24
programming effort uh with respect to

00:27:20 --> 00:27:26
your parameters. So conceptually the way

00:27:23 --> 00:27:27
ou do this and you'll see essentially

00:27:25 --> 00:27:29
three different libraries doing it in

00:27:26 --> 00:27:33
slightly different ways. Um what you do

00:27:28 --> 00:27:35
is you augment your flow graph by adding

00:27:32 --> 00:27:37
at the very end the computation of your

00:27:34 --> 00:27:39
loss function and then each of these

00:27:36 --> 00:27:41
boxes which are conceptually objects

00:27:38 --> 00:27:44
that are taking arguments and computing

00:27:40 --> 00:27:47
a value um you're going to augment them

00:27:43 --> 00:27:49
to also have a method that's a backrop

00:27:46 --> 00:27:50
or bprop method. You'll often see

00:27:48 --> 00:27:53
actually this expression being used

00:27:49 --> 00:27:55
prop. And what this method should do is

00:27:52 --> 00:27:57
that it should take as input what is the

00:27:54 --> 00:28:00
gradient of the loss with respect to

00:27:56 --> 00:28:02
myself and then it should propagate to

00:27:59 --> 00:28:04
its arguments. So the things that its

00:28:01 --> 00:28:05
parents in the flow graph the things it

00:28:03 --> 00:28:07
akes to compute its own value. It's

00:28:04 --> 00:28:09
going to propagate them using the chain

00:28:06 --> 00:28:12
rule what is their gradients with

00:28:08 --> 00:28:14
respect to the loss. So what this means

00:28:11 --> 00:28:16
is that you would sort of start the

00:28:13 --> 00:28:18
process by initializing well the

00:28:15 --> 00:28:21
gradient of the loss with respect to

00:28:17 --> 00:28:24
itself is one and then you pass the brop

00:28:20 --> 00:28:28
method here one and then it's going to

00:28:23 --> 00:28:29
propagate to its argument uh what is by

00:28:27 --> 00:28:31
using the chain rule what is the

00:28:28 --> 00:28:34
gradient of the loss with respect to f

00:28:30 --> 00:28:36
ofx and then you're going to call b prop

00:28:33 --> 00:28:38
on this object here and it's going to

00:28:35 --> 00:28:40
compute well I have the gradient of the

00:28:37 --> 00:28:43
loss with respect to myself f ofx from

00:28:39 --> 00:28:44
this I compute what's the gradient of my

00:28:42 --> 00:28:47
argument which is the pre-activation at

00:28:44 --> 00:28:49
layer 2 uh with respect to the loss. So

00:28:46 --> 00:28:52
I'm going to reuse the computation I

00:28:48 --> 00:28:54
just got and update it using my uh what

00:28:51 --> 00:28:56
is essentially the Jacobian and then I'm

00:28:53 --> 00:28:57
going to take the pre-activation here

00:28:55 --> 00:28:59
which now knows what is the gradient of

00:28:56 --> 00:29:01
the loss with respect to itself the

00:28:58 --> 00:29:03
pre-activation it's going to propagate

00:29:00 --> 00:29:05
to the weights and the biases and the

00:29:02 --> 00:29:07
layer below update them with informing

00:29:04 --> 00:29:08
them of what is the gradient of the loss

00:29:06 --> 00:29:10
with respect to themselves and you

00:29:07 --> 00:29:11
continue like this essentially going

00:29:09 --> 00:29:13
through the flow graph but in the

00:29:10 --> 00:29:16
opposite direction.

00:29:12 --> 00:29:18
So the library torch the basic library

00:29:15 --> 00:29:20
torch essentially functions like this

00:29:17 --> 00:29:22
quite explicitly it you construct you

00:29:19 --> 00:29:24
chain these elements together and then

00:29:21 --> 00:29:25
when you're performing back propagation

00:29:23 --> 00:29:27
you're going in the reverse order of

00:29:24 --> 00:29:30
these chained elements and then you have

00:29:26 --> 00:29:32
libraries like torch autograd and piano

00:29:29 --> 00:29:34
and tensifo which you'll learn about

00:29:31 --> 00:29:36
which are doing things slightly more

00:29:33 --> 00:29:39
sophisticated there and I'll uh you'll

00:29:35 --> 00:29:41
earn about that later on

00:29:38 --> 00:29:44
okay so that's a discussion of how you

00:29:40 --> 00:29:45
actually compute gradients of the loss

00:29:43 --> 00:29:47
with respect to the parameters. So

00:29:44 --> 00:29:49
that's another component we need in

00:29:46 --> 00:29:51
stoastic grain in descent. Uh we can

00:29:48 --> 00:29:54
choose a regularizer. One that's often

00:29:50 --> 00:29:57
used is the L2 regularization. So that's

00:29:53 --> 00:30:00
just the sum of the squared of all the

00:29:56 --> 00:30:02
weights and the gradient of that is uh

00:29:59 --> 00:30:04
just twice times the weight. So it's a

00:30:01 --> 00:30:07
super simple grain to compute. We

00:30:03 --> 00:30:10
usually don't regularize the biases. Um

00:30:06 --> 00:30:12
there's no particularly important reason

00:30:09 --> 00:30:15
for that. It's just uh it there are much

00:30:11 --> 00:30:18
fewer biases so it seems less important.

00:30:14 --> 00:30:20
Um and often this L2 regularization is

00:30:17 --> 00:30:22
often referred to as weight decay. So if

00:30:19 --> 00:30:25
you hear about weight decay that often

00:30:21 --> 00:30:28
refers to L2 regularization

00:30:24 --> 00:30:30
and then finally uh and this is also a

00:30:27 --> 00:30:31
very important point uh you have to

00:30:29 --> 00:30:33
initialize the parameters before you

00:30:30 --> 00:30:35
actually start doing backdrop and there

00:30:32 --> 00:30:39
are a few tricky cases you need to make

00:30:34 --> 00:30:41
sure that you uh don't fall into. So the

00:30:38 --> 00:30:43
biases often we initialize them to zero.

00:30:40 --> 00:30:45
There are certain exceptions but for the

00:30:42 --> 00:30:47
most part we initialize them to zero.

00:30:44 --> 00:30:49
But for the weights there are a few

00:30:46 --> 00:30:51
things we can't do. So we can't

00:30:48 --> 00:30:54
initialize the weights to zero. And

00:30:50 --> 00:30:57
especially if you have tanh activations

00:30:53 --> 00:30:59
um the reason and I won't explain it

00:30:56 --> 00:31:02
here but it's not a bad exercise to try

00:30:58 --> 00:31:03
to figure out why is that essentially

00:31:01 --> 00:31:05
when you do your first pass you're going

00:31:02 --> 00:31:07
to get gradients for all your parameters

00:31:04 --> 00:31:08
that are going to be zero. So you're

00:31:06 --> 00:31:12
going to be stuck at this zero

00:31:07 --> 00:31:14
initialization. So we can do that. Um we

00:31:11 --> 00:31:17
also can't initialize all the weights to

00:31:13 --> 00:31:20
exactly the same value. Um if again you

00:31:16 --> 00:31:22
think about it a little bit, what's

00:31:19 --> 00:31:24
going to happen is essentially that all

00:31:21 --> 00:31:27
the weights coming into a unit within

00:31:24 --> 00:31:28
the layer are going to have exactly the

00:31:26 --> 00:31:30
same gradients, which means they're

00:31:28 --> 00:31:31
going to be updated exactly the same way

00:31:29 --> 00:31:33
and which means they're going to stay

00:31:30 --> 00:31:35
constant the same. Not constant, but

00:31:32 --> 00:31:37
hey're going to stay the same the whole

00:31:34 --> 00:31:39
time. So it's as if you have multiple

00:31:36 --> 00:31:41
copies of the same unit. So you

00:31:38 --> 00:31:42
essentially have to break that initial

00:31:40 --> 00:31:44
symmetry that you would create if you

00:31:41 --> 00:31:46
initialized everything to the same

00:31:43 --> 00:31:48
value. So what we end up doing most of

00:31:45 --> 00:31:51
the time is initialize the weights to

00:31:47 --> 00:31:53
some randomly uh generated value. Uh

00:31:50 --> 00:31:55
often we generate them u there are a few

00:31:52 --> 00:31:56
other recipes but one of them is to

00:31:54 --> 00:31:59
initialize them from some uniform

00:31:55 --> 00:32:02
distribution between uh lower and upper

00:31:58 --> 00:32:04
bound. Um this is a recipe here that is

00:32:01 --> 00:32:06
often used that has some theoretical

00:32:03 --> 00:32:08
grounding that's uh was derived

00:32:05 --> 00:32:10
specifically for the tanh. There's this

00:32:07 --> 00:32:12
paper paper here by Xavier Go and Yashu

00:32:09 --> 00:32:14
Benju you can check out for some

00:32:11 --> 00:32:15
intuition as to oh you know how you

00:32:13 --> 00:32:17
should initialize the weights but

00:32:14 --> 00:32:19
essentially they should be initially

00:32:16 --> 00:32:21
random and they should be initially

00:32:18 --> 00:32:24
close to zero random to break symmetry

00:32:20 --> 00:32:27
and uh um close to zero so that

00:32:23 --> 00:32:28
initially the units are not uh already

00:32:26 --> 00:32:30
saturated because if the units are

00:32:28 --> 00:32:32
saturated then there are no gradients

00:32:29 --> 00:32:33
that are going to pass through the units

00:32:31 --> 00:32:34
you're essentially going to get

00:32:32 --> 00:32:36
gradients very close to zero at the

00:32:34 --> 00:32:38
lower layers. So that's the main

00:32:36 --> 00:32:40
tuitions to have weights that are

00:32:37 --> 00:32:43
small and close to zero uh small and

00:32:39 --> 00:32:46
random.

00:32:42 --> 00:32:47
Okay, so those are all the pieces we

00:32:45 --> 00:32:49
need for running stochastic gradient

00:32:46 --> 00:32:50
descent. So that allows us to take a

00:32:48 --> 00:32:53
training set and run a certain number of

00:32:50 --> 00:32:55
epochs and have the neural net learn

00:32:52 --> 00:32:58
from that training set. Now there are

00:32:54 --> 00:32:59
other quantities in our neural network

00:32:57 --> 00:33:02
that we haven't specified how to choose

00:32:58 --> 00:33:04
them. So those are the hyperparameters.

00:33:01 --> 00:33:06
Um so usually we're going to have a

00:33:03 --> 00:33:07
separate validation set. Most people

00:33:05 --> 00:33:09
here are familiar with machine learning.

00:33:06 --> 00:33:11
So that's a typical procedure. And then

00:33:08 --> 00:33:13
we need to select things like okay how

00:33:10 --> 00:33:15
many layers do I want? How many units

00:33:12 --> 00:33:17
per layer do I want? Uh what's the step

00:33:14 --> 00:33:19
size the learning rate of my stoastic

00:33:16 --> 00:33:21
gradient descent procedure that alpha

00:33:18 --> 00:33:24
number uh what is the weight decay that

00:33:20 --> 00:33:27
I'm going to use. So a standard thing in

00:33:23 --> 00:33:29
machine learning is to perform a uh grid

00:33:26 --> 00:33:31
search that is if I have two

00:33:28 --> 00:33:32
hyperparameters I list out a bunch of

00:33:30 --> 00:33:35
values I want to try. So for the number

00:33:31 --> 00:33:38
of hidden units maybe I want to try 100

00:33:34 --> 00:33:40
a thousand and 2,000 say and then for

00:33:37 --> 00:33:44
the learning rate maybe I want to try

00:33:39 --> 00:33:46
0.01 and 0.001. So a grid search would

00:33:43 --> 00:33:48
just try all combinations of these three

00:33:45 --> 00:33:50
values for the hidden units and these

00:33:47 --> 00:33:53
two values for the learning rates. Um so

00:33:49 --> 00:33:54
that means that the more hyperparameters

00:33:52 --> 00:33:57
there are it's the number of

00:33:54 --> 00:34:00
configurations you have to try out uh

00:33:56 --> 00:34:03
blows up and and grows exponentially. So

00:33:59 --> 00:34:05
another procedure uh that is now more

00:34:02 --> 00:34:08
and more common which is more practical

00:34:04 --> 00:34:10
is to perform a form of random search.

00:34:07 --> 00:34:12
In this case what you do is for each

00:34:09 --> 00:34:14
parameter you actually determine a

00:34:11 --> 00:34:17
distribution of likely values you'd like

00:34:13 --> 00:34:19
to try. So it could be um so for the

00:34:16 --> 00:34:21
number of hidden units maybe I do a

00:34:18 --> 00:34:24
uniform distribution over all integers

00:34:20 --> 00:34:26
from 100 to a thousand say or maybe a

00:34:23 --> 00:34:28
log uniform distribution and for the

00:34:25 --> 00:34:32
learning rate maybe again a log uniform

00:34:27 --> 00:34:36
distribution but from 0.001 to 0.01 01

00:34:32 --> 00:34:38
say and then to get an experiment so to

00:34:35 --> 00:34:40
get values for my hyperparameters to do

00:34:37 --> 00:34:41
an experiment with and get a performance

00:34:39 --> 00:34:43
on my validation set I just

00:34:40 --> 00:34:45
independently sample from these

00:34:42 --> 00:34:47
distributions for each hyperparameter to

00:34:44 --> 00:34:50
get a full configuration for my

00:34:46 --> 00:34:52
experiment and then because I have this

00:34:49 --> 00:34:54
way of getting one experiment I do it

00:34:51 --> 00:34:55
independently for all of my jobs all of

00:34:53 --> 00:34:58
my experiments that I will do. So in

00:34:54 --> 00:35:00
this case, if I know I have like enough

00:34:57 --> 00:35:03
compute power to do 50 experiments, I

00:34:59 --> 00:35:05
just sample 50 independent samples from

00:35:02 --> 00:35:07
these distributions for hyperparameters,

00:35:04 --> 00:35:09
perform these 50 experiments, and I just

00:35:06 --> 00:35:11
ake the best one. And what's nice about

00:35:08 --> 00:35:13
it is that there are no unlike grid

00:35:10 --> 00:35:15
search, there are never any holes in the

00:35:12 --> 00:35:17
grid. That is, you just specify how many

00:35:14 --> 00:35:19
experiments you do. If one of your jobs

00:35:16 --> 00:35:21
died, well, you just have one less, but

00:35:18 --> 00:35:24
here there's no hole in your

00:35:20 --> 00:35:26
experiment. Um, and also one reason why

00:35:23 --> 00:35:30
it's particularly useful this approach

00:35:25 --> 00:35:31
is that if you have a specific value in

00:35:29 --> 00:35:33
grid search for one of the

00:35:30 --> 00:35:35
hyperparameters that just makes the

00:35:32 --> 00:35:37
xperiment uh not work at all. So

00:35:34 --> 00:35:38
learning rates are a lot like this. If

00:35:36 --> 00:35:41
you have a learning rate that's too

00:35:37 --> 00:35:43
high, uh it's quite possible that

00:35:40 --> 00:35:45
convergence of the optimization will not

00:35:42 --> 00:35:47
converge. Well, if you're using a grid

00:35:44 --> 00:35:49
search, it means that for all the

00:35:46 --> 00:35:50
xperiments that use that specific value

00:35:48 --> 00:35:52
of the learning rate, they're all going

00:35:49 --> 00:35:54
to be garbage. they're all not going to

00:35:51 --> 00:35:57
be useful and you don't really get this

00:35:53 --> 00:35:59
ort of big waste of computation if you

00:35:56 --> 00:36:01
do random search because most likely all

00:35:58 --> 00:36:02
the values of your hyperparameters are

00:36:00 --> 00:36:04
going to be unique because they're

00:36:01 --> 00:36:07
sampled say from a uniform distribution

00:36:03 --> 00:36:10
over some some range. So that actually

00:36:06 --> 00:36:12
works uh quite well and and and it's

00:36:09 --> 00:36:14
quite recommended and there are more

00:36:11 --> 00:36:16
advanced methods uh like uh methods

00:36:13 --> 00:36:18
based on machine learning basian

00:36:15 --> 00:36:21
optimization and or sometimes known as

00:36:17 --> 00:36:23
equential model base optimization uh uh

00:36:20 --> 00:36:26
that I won't talk about but that works a

00:36:22 --> 00:36:28
bit better than uh random search um uh

00:36:25 --> 00:36:30
and and that's another alternative if

00:36:27 --> 00:36:31
you think you have an issue finding good

00:36:29 --> 00:36:34
hyperparameters is to investigate some

00:36:30 --> 00:36:37
of these more advanced methods.

00:36:33 --> 00:36:39
Um, now you do this for most of your

00:36:36 --> 00:36:41
hyperparameters, but for the number of

00:36:38 --> 00:36:44
epochs, the number of times you go

00:36:40 --> 00:36:47
through all of your uh examples in your

00:36:43 --> 00:36:50
training set, uh, what we usually do is

00:36:46 --> 00:36:52
not grid search or random search, but we

00:36:49 --> 00:36:54
use a thing known as early stopping. The

00:36:51 --> 00:36:56
idea here is that if I've trained a

00:36:53 --> 00:36:58
neural net for 10 epochs, well, training

00:36:55 --> 00:37:00
a neural net with all the other

00:36:57 --> 00:37:03
hyperparameters kept constant, but one

00:36:59 --> 00:37:05
more epoch is easy. I just do one more

00:37:02 --> 00:37:08
poch. So I shouldn't try to I shouldn't

00:37:04 --> 00:37:10
start over and then do say 11 epochs

00:37:07 --> 00:37:12
from scratch. And so what we would do is

00:37:09 --> 00:37:14
we would just track what is the

00:37:11 --> 00:37:16
performance on the validation set as I

00:37:13 --> 00:37:18
do more and more epochs. And what we

00:37:15 --> 00:37:20
will typically see is the training error

00:37:17 --> 00:37:22
will go down. Uh but the validation set

00:37:19 --> 00:37:25
performance will go down and eventually

00:37:21 --> 00:37:27
go up. Um the intuition here is that the

00:37:24 --> 00:37:29
gap between the performance on the

00:37:26 --> 00:37:32
training set and the performance on the

00:37:28 --> 00:37:34
validation set will tend to uh increase.

00:37:31 --> 00:37:37
And since the training curve cannot go

00:37:33 --> 00:37:38
below usually some bound uh then

00:37:36 --> 00:37:41
eventually the validation set

00:37:38 --> 00:37:42
performance has to go up or sometimes it

00:37:40 --> 00:37:44
won't necessarily go up but it sort of

00:37:41 --> 00:37:46
stay stable. So with early stopping what

00:37:43 --> 00:37:48
we do is that if we reach a point where

00:37:45 --> 00:37:50
the validation set performance hasn't

00:37:47 --> 00:37:52
improved from some certain number of

00:37:49 --> 00:37:54
iterations which uh we refer to as the

00:37:51 --> 00:37:56
look ahead we just stop we go back to

00:37:53 --> 00:37:57
the neural net that had the best

00:37:55 --> 00:37:59
performance overall in the validation

00:37:56 --> 00:38:02
set and that's my neural network. So I

00:37:58 --> 00:38:04
have now a very cheap way of actually

00:38:01 --> 00:38:07
getting the number of iterations or the

00:38:03 --> 00:38:11
number of epochs over my training set.

00:38:06 --> 00:38:13
Uh a few more tricks of the trade. Uh so

00:38:10 --> 00:38:16
um it's always useful to normalize your

00:38:12 --> 00:38:18
data. It will um often have the effect

00:38:15 --> 00:38:20
of speeding up training. If you have

00:38:17 --> 00:38:23
real value data for binary data that's

00:38:19 --> 00:38:25
uh usually keep it as it is. Uh so what

00:38:22 --> 00:38:27
I mean by that is just subtract for each

00:38:24 --> 00:38:28
dimension what is the average in the

00:38:26 --> 00:38:30
training set of that dimension and then

00:38:28 --> 00:38:33
dividing by the standard deviation of

00:38:29 --> 00:38:37
each dimension again in my input space.

00:38:32 --> 00:38:40
Um so this can speed up training. Um we

00:38:36 --> 00:38:42
often use a decay on the learning rate.

00:38:39 --> 00:38:45
Um there are a few methods for doing

00:38:41 --> 00:38:47
this. One that's very simple is to start

00:38:44 --> 00:38:48
with a large learning rate and then

00:38:46 --> 00:38:50
track the performance on the validation

00:38:47 --> 00:38:52
set. And once on the validation set it

00:38:49 --> 00:38:54
stops improving, you decrease your

00:38:51 --> 00:38:56
learning rate by some ratio. Maybe you

00:38:53 --> 00:38:58
divide it by two and then you continue

00:38:55 --> 00:39:00
training for some time. Hopefully the

00:38:57 --> 00:39:02
validation set performance uh starts

00:38:59 --> 00:39:05
improving and then at some point it

00:39:02 --> 00:39:07
stops improving and then you stop or you

00:39:04 --> 00:39:09
divide again by two. So that sort of

00:39:06 --> 00:39:11
gives you an adaptive using the

00:39:08 --> 00:39:13
validations and an adaptive way of

00:39:10 --> 00:39:15
changing your learning rate and that can

00:39:12 --> 00:39:17
again uh work better than having a very

00:39:14 --> 00:39:18
small learning rate than waiting for a

00:39:16 --> 00:39:20
longer time. So making very fast

00:39:17 --> 00:39:23
progress initially and then slower

00:39:19 --> 00:39:26
progress towards the end.

00:39:22 --> 00:39:30
Um also I've described so far the

00:39:26 --> 00:39:32
approach for training neural nets that

00:39:29 --> 00:39:33
uh is based on a single example at a

00:39:31 --> 00:39:35
time but in practice we actually use

00:39:32 --> 00:39:37
what's called mini batches. That is we

00:39:34 --> 00:39:41
compute the loss function on a small

00:39:36 --> 00:39:43
subset of examples say 64 128 and then

00:39:40 --> 00:39:46
we take the average of the loss of all

00:39:42 --> 00:39:47
these examples in that mini batch. And

00:39:45 --> 00:39:49
uh that's actually we compute the

00:39:46 --> 00:39:52
gradient of this average loss on that

00:39:48 --> 00:39:55
mini batch. The reason why we do this is

00:39:51 --> 00:39:57
that it turns out that um you can very

00:39:54 --> 00:40:01
efficiently implement the forward pass

00:39:56 --> 00:40:03
over all of these 64 128 examples in my

00:40:00 --> 00:40:06
mini batch in one pass by instead of

00:40:02 --> 00:40:08
doing vector matrix multiplications when

00:40:05 --> 00:40:10
we compute the pre-activations uh doing

00:40:08 --> 00:40:13
matrix matrix multiplications which are

00:40:09 --> 00:40:16
faster than doing multiple matrix vector

00:40:12 --> 00:40:18
multiplications. So in your code often

00:40:15 --> 00:40:20
there will be this other hyperparameter

00:40:17 --> 00:40:22
which is mostly optimized for speed in

00:40:19 --> 00:40:24
terms of how quickly training will

00:40:21 --> 00:40:27
proceed uh of the number of examples in

00:40:23 --> 00:40:30
your mini batch. Other things to improve

00:40:26 --> 00:40:33
optimization might be using a thing like

00:40:29 --> 00:40:35
momentum. That is uh instead of using as

00:40:32 --> 00:40:37
the descent direction the gradient of

00:40:34 --> 00:40:40
the loss function, I'm actually going to

00:40:36 --> 00:40:42
track a descent direction which I'm

00:40:39 --> 00:40:45
going to compute as the current gradient

00:40:41 --> 00:40:47
for my current example or mini batch

00:40:44 --> 00:40:49
plus some fraction of the previous

00:40:46 --> 00:40:52
update, the previous uh direction of

00:40:48 --> 00:40:53
update. Uh and beta now is a

00:40:51 --> 00:40:56
hyperparameter you have to optimize. So

00:40:52 --> 00:40:59
what this does is if all the update

00:40:55 --> 00:41:01
directions agree across multiple updates

00:40:58 --> 00:41:04
then it will start picking up momentum

00:41:00 --> 00:41:06
and actually make bigger uh uh steps in

00:41:03 --> 00:41:08
those directions.

00:41:05 --> 00:41:11
And then there are multiple even more

00:41:07 --> 00:41:14
advanced methods for uh having adaptive

00:41:10 --> 00:41:15
types of learning rates. Uh I mentioned

00:41:13 --> 00:41:17
them here very quickly because you might

00:41:14 --> 00:41:19
see them in papers. There's a method

00:41:16 --> 00:41:22
known as adagrad where uh the learning

00:41:18 --> 00:41:24
rate is actually scaled for each des for

00:41:21 --> 00:41:27
each dimension. So for each weight and

00:41:23 --> 00:41:30
each biscase it's going to be scaled by

00:41:26 --> 00:41:32
what is the um square root of the

00:41:29 --> 00:41:35
cumulative sum of the squared gradients.

00:41:31 --> 00:41:38
So what I track is I take my gradient

00:41:34 --> 00:41:40
vector at each step. I do an elementwise

00:41:37 --> 00:41:42
square of all the dimensions of my

00:41:39 --> 00:41:44
gradients my gradient vector and then I

00:41:41 --> 00:41:46
accumulate that in some variable that

00:41:43 --> 00:41:48
I'm noting as gamma here. And then for

00:41:45 --> 00:41:50
my descent direction, I take the

00:41:47 --> 00:41:53
gradient and I do an elementwise

00:41:49 --> 00:41:55
division by the square root of this

00:41:52 --> 00:41:57
cumulative sum of squared gradients. Uh

00:41:54 --> 00:41:59
there's also RMS prop which is

00:41:56 --> 00:42:01
essentially like adagram but instead of

00:41:58 --> 00:42:03
doing a cumulative sum we're going to do

00:42:00 --> 00:42:05
an exponential moving average. So we

00:42:02 --> 00:42:07
take the previous value times some

00:42:04 --> 00:42:10
factor plus one minus this factor times

00:42:06 --> 00:42:12
the current squared gradient. So that's

00:42:09 --> 00:42:15
RMS prop. And then there's atom which is

00:42:11 --> 00:42:17
essentially a combination of RMS prop

00:42:14 --> 00:42:18
with momentum which is more involved and

00:42:16 --> 00:42:21
I won't have time to describe it here

00:42:17 --> 00:42:22
but that's another method that's often

00:42:20 --> 00:42:25
you know actually implemented in these

00:42:22 --> 00:42:29
different softwares and that uh people

00:42:24 --> 00:42:31
seem to use with a lot of success.

00:42:28 --> 00:42:34
And uh finally uh in terms of actually

00:42:30 --> 00:42:36
debugging your implementations um so for

00:42:33 --> 00:42:38
instance if you're lucky you can build

00:42:35 --> 00:42:39
your neural network without difficulty

00:42:37 --> 00:42:42
using the current tools that are

00:42:38 --> 00:42:44
available in torch or tensorflow or tano

00:42:41 --> 00:42:45
but maybe sometimes you actually have to

00:42:43 --> 00:42:48
implement certain gradients for a new

00:42:44 --> 00:42:50
module and a new box in your flow graph

00:42:47 --> 00:42:52
that isn't currently supported. If you

00:42:49 --> 00:42:54
do this you should check that you've

00:42:51 --> 00:42:56
implemented your gradients correctly.

00:42:53 --> 00:42:59
And one way of doing that is to actually

00:42:55 --> 00:43:01
compare the gradients computed by your

00:42:58 --> 00:43:03
code with a finite difference of

00:43:00 --> 00:43:05
estimate. So what you do is for each

00:43:02 --> 00:43:08
parameter you add some very small

00:43:04 --> 00:43:10
epsilon value say 10 to the minus 6 and

00:43:07 --> 00:43:12
you compute what is the output of of

00:43:09 --> 00:43:14
your module. Uh and then you subtract

00:43:11 --> 00:43:16
he same thing but where you've

00:43:13 --> 00:43:19
subtracted the small quantity and then

00:43:15 --> 00:43:21
you divide by 2 epsilon. So if epsilon

00:43:18 --> 00:43:23
is uh converges to zero then you

00:43:20 --> 00:43:24
actually get the partial derivative. But

00:43:22 --> 00:43:26
if it's just small, it's going to be an

00:43:23 --> 00:43:28
approximate. And usually this finite

00:43:25 --> 00:43:30
difference estimate will be very close

00:43:27 --> 00:43:32
to a correct implementation of the real

00:43:30 --> 00:43:34
gradient. So you should definitely do

00:43:31 --> 00:43:37
that uh if you've actually implemented

00:43:33 --> 00:43:39
some of the gradients in your code. And

00:43:36 --> 00:43:41
then another useful thing to do is to

00:43:38 --> 00:43:44
actually do a very small experiment on a

00:43:40 --> 00:43:46
small data set before you actually run

00:43:43 --> 00:43:49
your full experiment on your complete

00:43:45 --> 00:43:51
data set. So use say 50 examples. Uh so

00:43:48 --> 00:43:52
just taking a random subset of 50

00:43:50 --> 00:43:54
examples from your your data set

00:43:52 --> 00:43:57
actually just make sure that your code

00:43:53 --> 00:44:00
can overfitit to that data can

00:43:56 --> 00:44:02
essentially classify it perfectly given

00:43:59 --> 00:44:05
you know enough capacity that you would

00:44:01 --> 00:44:07
think it should get it. Um so if it's

00:44:04 --> 00:44:09
not the case then there's a few things

00:44:06 --> 00:44:11
that you might want to investigate. uh

00:44:08 --> 00:44:13
maybe your initialization is such that

00:44:10 --> 00:44:15
he units are already saturated

00:44:12 --> 00:44:16
initially and so there's no actual

00:44:14 --> 00:44:18
optimization happening because some of

00:44:15 --> 00:44:21
the gradients on some of the weights are

00:44:17 --> 00:44:23
xactly zero. So you want want to check

00:44:20 --> 00:44:25
your initialization. Uh maybe your

00:44:22 --> 00:44:26
gradients are just you know you're using

00:44:24 --> 00:44:28
a model you implemented gradients for

00:44:26 --> 00:44:30
and maybe there are gradients are not

00:44:27 --> 00:44:32
properly implemented. Uh maybe you

00:44:29 --> 00:44:34
haven't normalized your input which

00:44:31 --> 00:44:35
creates some instability making it

00:44:33 --> 00:44:39
harder for stocastic gradient and ascent

00:44:34 --> 00:44:41
o uh uh uh work successfully. Uh maybe

00:44:38 --> 00:44:43
your learning rate is too large then you

00:44:40 --> 00:44:44
should consider trying smaller learning

00:44:42 --> 00:44:47
rates. That's actually a pretty good way

00:44:44 --> 00:44:48
of having a some idea of the uh

00:44:46 --> 00:44:52
magnitude of the learning rate you

00:44:47 --> 00:44:53
should be using and um and then once you

00:44:51 --> 00:44:55
actually over fit in your small training

00:44:52 --> 00:44:58
set you're ready to do a full experiment

00:44:54 --> 00:45:00
on on a larger data set. That said, this

00:44:57 --> 00:45:03
not a replacement for gradient

00:44:59 --> 00:45:05
checking. So, um, backrop is and

00:45:02 --> 00:45:07
stocastic gradient descent, it's a great

00:45:04 --> 00:45:10
algorithm that's very bug resistant. Uh,

00:45:06 --> 00:45:12
you will potentially see some learning

00:45:10 --> 00:45:15
happening even if some of your gradients

00:45:11 --> 00:45:16
are wrong or say exactly zero. So, you

00:45:14 --> 00:45:17
should that's great. You know, if you're

00:45:15 --> 00:45:20
an engineer and you're implementing

00:45:16 --> 00:45:21
things, it's fun when code is somewhat

00:45:19 --> 00:45:23
bug resistant, but if you're actually

00:45:20 --> 00:45:25
doing science and trying to understand

00:45:22 --> 00:45:27
what's going on, that's can that can be

00:45:24 --> 00:45:30
a complication. So do do both uh

00:45:26 --> 00:45:32
gradient checking and a small experiment

00:45:29 --> 00:45:33
like that.

00:45:31 --> 00:45:35
All right. And so for the last few

00:45:32 --> 00:45:38
minutes, I'll actually try to motivate

00:45:34 --> 00:45:41
what you'll be learning quite a bit uh

00:45:37 --> 00:45:44
about in the next uh two days. Uh that

00:45:40 --> 00:45:47
is the specific case for deep learning.

00:45:43 --> 00:45:49
So I've already told you that if I have

00:45:46 --> 00:45:50
a neural net with enough hidden units,

00:45:48 --> 00:45:53
theoretically I can potentially

00:45:50 --> 00:45:55
represent pretty much any function, any

00:45:52 --> 00:45:58
classification function. So why would I

00:45:54 --> 00:46:00
want multiple layers? So there are a few

00:45:57 --> 00:46:03
motivations behind this. The first one

00:45:59 --> 00:46:05
is taken directly from our own brains.

00:46:02 --> 00:46:08
So we know in the visual cortex that the

00:46:04 --> 00:46:09
light that hits our retina eventually

00:46:07 --> 00:46:12
goes through several regions in the

00:46:08 --> 00:46:15
visual cortex eventually reaching an

00:46:11 --> 00:46:17
area known as V1 where you have units

00:46:14 --> 00:46:19
that are or neurons that are essentially

00:46:16 --> 00:46:21
tuned to small forms like edges. uh and

00:46:18 --> 00:46:23
then it goes on to V4 where it's

00:46:20 --> 00:46:25
lightly more complex patterns that the

00:46:22 --> 00:46:26
units are are tuned for and then you

00:46:24 --> 00:46:28
reach AIT where you actually have

00:46:25 --> 00:46:30
neurons that are specific to certain

00:46:27 --> 00:46:32
objects or certain units. And so the

00:46:29 --> 00:46:35
idea here is that perhaps that's also

00:46:31 --> 00:46:37
what we want in an artificial say uh you

00:46:34 --> 00:46:40
know vision system. We'd like it if it's

00:46:36 --> 00:46:42
detecting faces to have a first layer

00:46:39 --> 00:46:44
that detects simple edges and then

00:46:41 --> 00:46:46
another layer that perhaps puts these

00:46:43 --> 00:46:48
dges together detecting slightly more

00:46:45 --> 00:46:50
complex things like a nose or a mouth or

00:46:47 --> 00:46:52
eyes and then eventually have a layer

00:46:49 --> 00:46:55
that combines these slightly less

00:46:51 --> 00:46:57
abstract uh or more abstract uh uh units

00:46:54 --> 00:46:59
to get something even more abstract like

00:46:56 --> 00:47:00
a complete face.

00:46:58 --> 00:47:03
There's also some theoretical

00:46:59 --> 00:47:06
justification for doing uh using

00:47:02 --> 00:47:08
multiple layers. Um so the early results

00:47:05 --> 00:47:10
were mostly based on studying boolean

00:47:07 --> 00:47:12
functions or a function that takes as

00:47:09 --> 00:47:14
input can think of it as a vector of

00:47:11 --> 00:47:16
just zeros and ones and uh you could

00:47:13 --> 00:47:19
show that there are certain functions

00:47:15 --> 00:47:22
that um if you had a essentially a

00:47:18 --> 00:47:25
boolean neural network or uh essentially

00:47:21 --> 00:47:27
a boolean circuit and you restricted the

00:47:24 --> 00:47:29
number of layers of that circuit that

00:47:26 --> 00:47:30
here are certain functions that in this

00:47:28 --> 00:47:32
case to represent certain boolean

00:47:29 --> 00:47:35
functions exactly you would need an

00:47:31 --> 00:47:36
exponential number of units in each of

00:47:34 --> 00:47:38
these layers. Whereas if you allowed

00:47:36 --> 00:47:39
yourself to have multiple layers, then

00:47:37 --> 00:47:42
you could represent these functions more

00:47:38 --> 00:47:43
compactly. And so there's that's another

00:47:41 --> 00:47:45
motivation that perhaps with more

00:47:42 --> 00:47:49
layers, we can represent fairly complex

00:47:44 --> 00:47:51
functions in a more compact way.

00:47:48 --> 00:47:54
And then there's the reason that they

00:47:50 --> 00:47:56
just work. So we've seen in the past few

00:47:53 --> 00:47:57
years great success in speech

00:47:55 --> 00:47:59
recognition where it's essentially

00:47:56 --> 00:48:00
revolutionized the field where

00:47:58 --> 00:48:02
veryone's using deep learning for

00:47:59 --> 00:48:05
speech recognition and same thing for

00:48:01 --> 00:48:07
visual object recognition uh where again

00:48:04 --> 00:48:09
deep learning is sort of the method of

00:48:06 --> 00:48:11
choice for identifying objects in

00:48:08 --> 00:48:14
images.

00:48:10 --> 00:48:17
So then why are we doing this only

00:48:13 --> 00:48:19
recently? Why didn't we do deep learning

00:48:16 --> 00:48:21
way back when uh back prop was invented

00:48:18 --> 00:48:24
which is uh essentially in 1980s and

00:48:20 --> 00:48:26
even before that. Um so it turns out

00:48:23 --> 00:48:27
raining deep neural networks is

00:48:25 --> 00:48:30
actually not that easy. There are a few

00:48:26 --> 00:48:32
hurdles that one can be confronted with.

00:48:29 --> 00:48:34
Uh I've already mentioned one of the

00:48:31 --> 00:48:36
issue which is that um some of the

00:48:33 --> 00:48:38
gradients might be fading as you go from

00:48:35 --> 00:48:39
the top layer to the bottom layer

00:48:37 --> 00:48:41
because we keep multiplying by the

00:48:38 --> 00:48:43
derivative of the activation function.

00:48:40 --> 00:48:45
So that makes trending hard. It could be

00:48:42 --> 00:48:47
that the lower layers have very small

00:48:44 --> 00:48:49
gradients are barely moving and

00:48:46 --> 00:48:50
exploring the space of uh correct you

00:48:48 --> 00:48:53
know features to learn for a given

00:48:49 --> 00:48:54
problem. Sometime sometimes that's the

00:48:52 --> 00:48:56
problem you find you have a hard time

00:48:53 --> 00:48:58
just fitting your data and you're

00:48:55 --> 00:49:00
ssentially underfitting

00:48:57 --> 00:49:02
or it could be that with you know deeper

00:48:59 --> 00:49:03
neural nets or bigger neural nets we

00:49:01 --> 00:49:05
have more parameters. So perhaps

00:49:02 --> 00:49:07
ometimes we're actually overfitting.

00:49:04 --> 00:49:10
We're in a situation where all the

00:49:06 --> 00:49:12
functions that we can represent with the

00:49:09 --> 00:49:15
same neural net represented by this gray

00:49:11 --> 00:49:16
area function actually includes yes the

00:49:14 --> 00:49:19
right function but it's so large that

00:49:15 --> 00:49:21
for a finite training set the odds that

00:49:18 --> 00:49:22
I'm going to find the one that's close

00:49:20 --> 00:49:25
to the true classifying function the

00:49:22 --> 00:49:26
real system that I'd like to have is

00:49:24 --> 00:49:29
going to be very different. So in this

00:49:26 --> 00:49:31
case I'm in I'm essentially overfitting

00:49:28 --> 00:49:34
and that might also be a situation we're

00:49:30 --> 00:49:36
in. And unfortunately

00:49:33 --> 00:49:39
there's never there are many situations

00:49:35 --> 00:49:42
where one problem is observed

00:49:38 --> 00:49:44
overfitting or underfitting. Um and so

00:49:41 --> 00:49:46
we essentially have you know in the

00:49:43 --> 00:49:48
field develop tools for fighting both

00:49:45 --> 00:49:50
situations and I'm going to rapidly

00:49:47 --> 00:49:52
touch a few of those uh which you will

00:49:49 --> 00:49:57
see will come up later on in in multiple

00:49:51 --> 00:49:58
talks. Um so one of the first hypothesis

00:49:56 --> 00:50:00
which might be that you're underfitting

00:49:57 --> 00:50:03
well you can essentially just fight this

00:50:00 --> 00:50:04
by waiting longer so training longer if

00:50:02 --> 00:50:06
you have your grades are too small and

00:50:03 --> 00:50:08
this essentially why you're progressing

00:50:05 --> 00:50:10
very slowly when you're training well if

00:50:07 --> 00:50:12
you're using GPUs and are able to do

00:50:09 --> 00:50:15
more iterations over the same training

00:50:11 --> 00:50:17
set uh with in less time that might just

00:50:14 --> 00:50:18
you know solve your problem of

00:50:16 --> 00:50:21
underfitting and I think we've seen some

00:50:18 --> 00:50:23
of that and this is partly why GPUs have

00:50:20 --> 00:50:25
been so gamechanging for deep learning

00:50:22 --> 00:50:28
or you can use just better optimization

00:50:24 --> 00:50:29
methods also. And if you're overfitting,

00:50:27 --> 00:50:33
well, we just need better

00:50:28 --> 00:50:35
egularization. Um, I've been involved

00:50:32 --> 00:50:37
early on in my PhD on on using

00:50:34 --> 00:50:40
unsupervised learning as a way to

00:50:36 --> 00:50:41
regularize neural nets. Uh, if I have

00:50:39 --> 00:50:42
time, I'll talk a little bit about that.

00:50:40 --> 00:50:45
Then there's another method you might

00:50:42 --> 00:50:47
have learned uh heard about known as

00:50:44 --> 00:50:50
dropout. So, I'll try to touch uh at

00:50:46 --> 00:50:51
least two methods uh that are

00:50:49 --> 00:50:53
ssentially trying to address some of

00:50:50 --> 00:50:55
these issues. So the first one that I'll

00:50:52 --> 00:50:58
talk about is dropout.

00:50:54 --> 00:51:00
It's actually very easy, very simple. Um

00:50:57 --> 00:51:02
so the idea of if our neural net is

00:51:00 --> 00:51:05
essentially overfitting, so it's too

00:51:01 --> 00:51:07
good at training on the training set,

00:51:04 --> 00:51:08
well we're essentially going to

00:51:06 --> 00:51:10
training. We're going to make it harder

00:51:07 --> 00:51:12
to fit the training set. And the way

00:51:09 --> 00:51:14
we're going to do that in dropout is

00:51:11 --> 00:51:18
that we will stochastically remove

00:51:13 --> 00:51:19
hidden units independently. So for each

00:51:17 --> 00:51:22
idden unit before we do a forward pass

00:51:18 --> 00:51:25
we'll flip a coin and with probability

00:51:21 --> 00:51:27
half we will multiply the activation by

00:51:24 --> 00:51:29
zero and with probability half we'll uh

00:51:26 --> 00:51:31
multiply it by one. So what this means

00:51:28 --> 00:51:33
is that if a unit is multiplied by zero

00:51:30 --> 00:51:36
it's effectively not in the neural net

00:51:32 --> 00:51:38
anymore and we're doing this

00:51:35 --> 00:51:42
independently for each hidden units. So

00:51:37 --> 00:51:44
that means that in a layer a unit cannot

00:51:41 --> 00:51:47
rely anymore on the presence on any

00:51:43 --> 00:51:50
other units uh to try to sort of uh

00:51:46 --> 00:51:52
synchronize and adapt to uh perform a

00:51:49 --> 00:51:54
complex classification or learn a

00:51:51 --> 00:51:56
complex feature. And that was partly the

00:51:53 --> 00:51:58
motivation behind dropout is that this

00:51:55 --> 00:52:01
procedure might uh encourage types of

00:51:57 --> 00:52:04
eatures that are not co-adapted and are

00:52:00 --> 00:52:07
less likely to overfit. Um so we often

00:52:03 --> 00:52:10
use 0.5 as the probability of dropping

00:52:06 --> 00:52:12
out a unit. uh it turns out it often

00:52:09 --> 00:52:14
surprisingly is the best value but

00:52:11 --> 00:52:17
hat's another hyperparameter you might

00:52:13 --> 00:52:19
want to tune and in terms of how it

00:52:16 --> 00:52:21
impacts an implementation of backdrop

00:52:18 --> 00:52:23
it's it's very simple so the forward

00:52:20 --> 00:52:26
pass before I do it I just sample my

00:52:22 --> 00:52:28
binary masks for all my layers and uh

00:52:25 --> 00:52:31
and then when I'm performing backdrop

00:52:27 --> 00:52:32
well my gradient on the uh oh sorry so

00:52:30 --> 00:52:35
that's the forward pass yeah I'm just

00:52:31 --> 00:52:38
multiplying by this binary mask here so

00:52:34 --> 00:52:40
super simple change and And then in

00:52:37 --> 00:52:42
terms of backdrop, well, I'm also going

00:52:39 --> 00:52:44
to multiply by the mask when I get my

00:52:41 --> 00:52:46
gradient on the pre-activation. And

00:52:44 --> 00:52:48
also, you know, don't forget that the

00:52:45 --> 00:52:49
activations are now different. They

00:52:47 --> 00:52:52
actually include the mask in in my

00:52:48 --> 00:52:54
notation. So, it's a very simple change

00:52:51 --> 00:52:56
of the forward and backward pass when

00:52:53 --> 00:52:58
you're training. And also another thing

00:52:55 --> 00:53:00
that I should emphasize is that the mask

00:52:57 --> 00:53:02
is being resampled for every example. So

00:52:59 --> 00:53:04
before you do a forward pass, you

00:53:01 --> 00:53:05
reample the mask. You don't keep it, you

00:53:03 --> 00:53:07
know, sample it once and then use it the

00:53:04 --> 00:53:10
whole time.

00:53:06 --> 00:53:12
Um and then at test time because we

00:53:09 --> 00:53:14
don't really like a model that sort of

00:53:11 --> 00:53:16
randomly changes its output because it

00:53:14 --> 00:53:19
will if we stocastically change the

00:53:15 --> 00:53:23
masks uh what we do is we replace the

00:53:18 --> 00:53:25
mask by the probability of dropping out

00:53:22 --> 00:53:28
a unit. So or actually of keeping a

00:53:24 --> 00:53:31
unit. So if we're using 0.5 that's just

00:53:27 --> 00:53:33
0.5. uh we can actually show that if you

00:53:30 --> 00:53:35
have a neural net with a single hidden

00:53:32 --> 00:53:37
layer uh doing this transformation at

00:53:34 --> 00:53:40
est time multiplying by 0.5 is

00:53:36 --> 00:53:42
equivalent to doing a geometric average

00:53:39 --> 00:53:44
of all the possible neural networks with

00:53:41 --> 00:53:46
all the different binary mass patterns.

00:53:43 --> 00:53:48
So it's essentially one way of of

00:53:45 --> 00:53:49
thinking about dropout in the single

00:53:47 --> 00:53:51
layer case is that it's kind of an

00:53:48 --> 00:53:53
ensembling method where you have a lot

00:53:50 --> 00:53:54
of models an exponential number of

00:53:52 --> 00:53:57
models which are all sharing the same

00:53:54 --> 00:53:59
weights but have different masks. uh

00:53:56 --> 00:54:01
that intuition though doesn't transfer

00:53:58 --> 00:54:03
for deep neural nets in the sense that

00:54:00 --> 00:54:05
you cannot show this result. It really

00:54:02 --> 00:54:08
only applies to a single neural network,

00:54:04 --> 00:54:10
single hidden layer. So in practice uh

00:54:07 --> 00:54:12
it's very effective but do expect some

00:54:09 --> 00:54:14
slowdown in training. So often we tend

00:54:11 --> 00:54:16
to see that training a network to

00:54:13 --> 00:54:19
completion will take twice as many

00:54:15 --> 00:54:21
epochs if you're using dropout with 0.5.

00:54:18 --> 00:54:22
And here you have the reference if you

00:54:20 --> 00:54:25
want to learn more about different

00:54:21 --> 00:54:28
variations of dropouts and so on.

00:54:24 --> 00:54:30
And um I'll and I'll probably won't talk

00:54:27 --> 00:54:31
about unsupervised retraining for lack

00:54:29 --> 00:54:34
of time, but I'll talk about another

00:54:30 --> 00:54:35
thing that you'll definitely uh probably

00:54:33 --> 00:54:37
hear about and that's implemented in

00:54:34 --> 00:54:39
these different packages, which is batch

00:54:36 --> 00:54:41
normalization. Batch normalization is

00:54:38 --> 00:54:44
kind of interesting in the sense that

00:54:40 --> 00:54:46
it's been shown to better optimize that

00:54:43 --> 00:54:49
is certain networks that would otherwise

00:54:45 --> 00:54:50
underfit would uh not underfeit as much

00:54:48 --> 00:54:52
anymore if you use batch normalization.

00:54:49 --> 00:54:54
But also it's been shown that when you

00:54:51 --> 00:54:56
se batch normization dropout is not as

00:54:54 --> 00:54:58
useful and dropout being a

00:54:55 --> 00:55:00
regularization method that suggests that

00:54:58 --> 00:55:02
perhaps batch normization is also

00:54:59 --> 00:55:04
regularizing in some way. So these

00:55:01 --> 00:55:06
things are not you know one or the

00:55:03 --> 00:55:08
other. They're not mutually exclusive.

00:55:05 --> 00:55:11
You can have a regularizer that also

00:55:07 --> 00:55:14
turns out helps you better optimize.

00:55:10 --> 00:55:17
So the intuition behind batch

00:55:13 --> 00:55:19
normalization uh is you know much like

00:55:16 --> 00:55:21
I've suggested that normalizing your

00:55:18 --> 00:55:23
inputs actually can help speeding up

00:55:20 --> 00:55:25
training. Well, how about we also

00:55:22 --> 00:55:28
normalize all the hidden layers when I'm

00:55:24 --> 00:55:30
doing my forward pass. So uh now the

00:55:28 --> 00:55:32
problem in doing this is that I can

00:55:29 --> 00:55:34
compute the mean and the standard

00:55:31 --> 00:55:36
eviations of my inputs once and for all

00:55:33 --> 00:55:38
because they're constant. Uh but my

00:55:35 --> 00:55:39
hidden layers are constantly changing

00:55:37 --> 00:55:41
because I'm training these parameters.

00:55:38 --> 00:55:45
So the mean and the standard deviation

00:55:40 --> 00:55:47
of my units will change and so um I and

00:55:44 --> 00:55:49
it would be very expensive if every time

00:55:46 --> 00:55:50
I did an update on my parameters I

00:55:48 --> 00:55:53
recomputed the means and the standard

00:55:50 --> 00:55:55
eviations of all of my units. So batch

00:55:52 --> 00:55:58
normalization addresses some of these

00:55:54 --> 00:56:00
issues as follows. So the way it works

00:55:57 --> 00:56:02
is first um batch the normalization is

00:55:59 --> 00:56:04
going to be applied on actually the

00:56:01 --> 00:56:06
pre-activation. So not the activation of

00:56:03 --> 00:56:09
the unit but before the nonlinearity.

00:56:06 --> 00:56:11
Um during training to address the issue

00:56:08 --> 00:56:12
that we don't want to compute means over

00:56:10 --> 00:56:14
the full training set because that would

00:56:11 --> 00:56:17
be too slow. I'm actually going to

00:56:13 --> 00:56:19
compute it on each mini batch. Uh so I

00:56:16 --> 00:56:20
have to do mini batch training here and

00:56:18 --> 00:56:23
I'm going to take my small mini batch of

00:56:19 --> 00:56:25
64 128 examples and that's the set of

00:56:22 --> 00:56:27
examples on which I'm going to compute

00:56:24 --> 00:56:29
my means and standard deviations.

00:56:26 --> 00:56:31
And then when I do back prop I'm

00:56:28 --> 00:56:32
actually going to take into account the

00:56:30 --> 00:56:34
normalization. So now there's going to

00:56:31 --> 00:56:36
be a gradient going through the

00:56:33 --> 00:56:38
computation of the mean and the standard

00:56:35 --> 00:56:41
eviation because they depend on the

00:56:37 --> 00:56:42
parameters of the neural network. And

00:56:40 --> 00:56:44
then at test time we'll just use the

00:56:41 --> 00:56:46
global mean and global standard

00:56:43 --> 00:56:48
eviation. Once I finish training I can

00:56:45 --> 00:56:50
actually do a full pass over the whole

00:56:47 --> 00:56:52
training set and got all of my means and

00:56:49 --> 00:56:54
standard deviations.

00:56:51 --> 00:56:56
So that's the essentially the pseudo

00:56:53 --> 00:57:00
code for that taken out of the paper

00:56:56 --> 00:57:02
directly. Uh so if X is a pre-activation

00:56:59 --> 00:57:05
for a unit and have multiple

00:57:01 --> 00:57:07
pre-activations for a single unit across

00:57:04 --> 00:57:10
my mini batch, I would compute what is

00:57:06 --> 00:57:12
the average for that unit pre-activation

00:57:09 --> 00:57:15
across my examples in my mini batch.

00:57:11 --> 00:57:17
Compute my uh variance and then subtract

00:57:14 --> 00:57:19
he mean and divide by the square root

00:57:16 --> 00:57:21
of the variance plus some epsilon for

00:57:18 --> 00:57:23
numerical stability in case the variance

00:57:20 --> 00:57:25
is too close to zero. And then another

00:57:22 --> 00:57:28
thing is that actually batch

00:57:24 --> 00:57:30
normalization doesn't just perform this

00:57:27 --> 00:57:33
normalization and outputs the normalized

00:57:29 --> 00:57:35
pre-activation. It then actually uh um

00:57:32 --> 00:57:37
performs a linear transformation on it.

00:57:34 --> 00:57:39
So it multiplies it by this parameter

00:57:36 --> 00:57:42
gamma which is going to be trained by

00:57:38 --> 00:57:45
gradient descent. um and uh it's often

00:57:41 --> 00:57:48
called the gain uh parameter of uh uh

00:57:44 --> 00:57:50
batch normization and it adds a bias

00:57:47 --> 00:57:52
beta and the reason is that if I'm

00:57:49 --> 00:57:55
subtracting by the mean then each of

00:57:51 --> 00:57:58
these units have the bias parameter. So

00:57:54 --> 00:58:01
if I subtract it then this essentially

00:57:57 --> 00:58:02
here there's no bias anymore. It was

00:58:00 --> 00:58:04
present here it was present here and now

00:58:01 --> 00:58:06
it's been subtracted. So I have to add

00:58:03 --> 00:58:07
the bias but after the batch

00:58:05 --> 00:58:10
normalization essentially. So these

00:58:06 --> 00:58:12
betas here are essentially the new uh

00:58:09 --> 00:58:13
bias parameters and those will actually

00:58:11 --> 00:58:15
be trained. So we do gradient descent

00:58:12 --> 00:58:18
also on those. So batch normalization

00:58:14 --> 00:58:20
adds a few parameters.

00:58:18 --> 00:58:22
All right. And I as I said I'm just

00:58:19 --> 00:58:23
going to skip over this and you know I'm

00:58:21 --> 00:58:25
not showing what the gradients are when

00:58:22 --> 00:58:26
you back prop through the mean and so

00:58:24 --> 00:58:28
n. it's described in the paper if you

00:58:25 --> 00:58:30
want to see the gradients but otherwise

00:58:27 --> 00:58:33
in the different packages you actually

00:58:29 --> 00:58:34
uh have access to uh you you'll get the

00:58:32 --> 00:58:37
gradients automatically it's it's

00:58:33 --> 00:58:39
usually been implemented skipping over

00:58:36 --> 00:58:41
that I'll just finish um if you actually

00:58:38 --> 00:58:42
want to learn about unsupervised

00:58:40 --> 00:58:45
pre-training and why it works I have

00:58:41 --> 00:58:49
videos on that so you can check that out

00:58:44 --> 00:58:49
and uh I guess that's it thank

00:58:50 --> 00:58:58
[Applause]

00:58:55 --> 00:58:59
Thanks you go. So we have a a few

00:58:57 --> 00:59:02
minutes for question which are

00:58:58 --> 00:59:04
intermingled with a break. So feel free

00:59:01 --> 00:59:05
to either go for a break or ask

00:59:03 --> 00:59:07
questions to go.

00:59:04 --> 00:59:09
Yeah, I believe there are microphones

00:59:06 --> 00:59:11
and I'll also stick around. So if you

00:59:08 --> 00:59:12
want to ask me questions offline, that's

00:59:10 --> 00:59:16
also fine. If you want to ask questions,

00:59:11 --> 00:59:16
you can go to the mic.

00:59:20 --> 00:59:26
go to the microphone.

00:59:23 --> 00:59:29
Hi, I think you mentioned ReLU adds

00:59:25 --> 00:59:33
parsity. Can you explain why?

00:59:28 --> 00:59:35
Yeah, so um so the the first thing is

00:59:32 --> 00:59:38
that it's observed in practice and it

00:59:34 --> 00:59:40
adds some sparse some sparsity in part

00:59:37 --> 00:59:42
because you have the nonlinearity at

00:59:39 --> 00:59:45
zero below. So it means that units are

00:59:41 --> 00:59:47
going to be exactly potentially exactly

00:59:44 --> 00:59:51
sparse exactly essentially absent of the

00:59:46 --> 00:59:54
hidden layer. Um the re there are few

00:59:50 --> 00:59:56
reasons to um sort of explain why you

00:59:53 --> 00:59:58
get sparity. It turns out that this

00:59:55 --> 01:00:01
process of doing a linear transformation

00:59:57 --> 01:00:03
followed by the relu activation function

01:00:00 --> 01:00:04
is very close to some of the steps you

01:00:02 --> 01:00:07
would do when you're optimizing for

01:00:04 --> 01:00:08
sparse codes in a sparse coding model if

01:00:06 --> 01:00:10
you know about sparse coding. Uh so

01:00:08 --> 01:00:13
they're like essentially an optimization

01:00:09 --> 01:00:15
methods that given some sparse coding

01:00:12 --> 01:00:17
model will find what is the sparse

01:00:14 --> 01:00:20
representation hidden representation for

01:00:16 --> 01:00:22
some input and it's mostly a sequence of

01:00:19 --> 01:00:25
linear transformations followed by this

01:00:21 --> 01:00:27
ort of like relu like activation

01:00:24 --> 01:00:29
function and I think this is partly the

01:00:26 --> 01:00:31
xplanation otherwise I don't I don't

01:00:28 --> 01:00:33
know of a like solid you know

01:00:30 --> 01:00:38
explanation for why that is beyond you

01:00:32 --> 01:00:38
know it's observed in in practice Any

01:00:39 --> 01:00:45
more questions?

01:00:41 --> 01:00:48
If not, let's uh thank you go again.

01:00:44 --> 01:00:48
[Applause]

01:00:47 --> 01:00:52
And we are we reconvene in 10

<!-- YOUTUBE_TRANSCRIPT_END -->
