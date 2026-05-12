---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "rK6bchqeaN8"
title: "Foundations of Unsupervised Deep Learning (Ruslan Salakhutdinov, CMU)"
video_url: "https://www.youtube.com/watch?v=rK6bchqeaN8"
thumbnail_url: "https://i.ytimg.com/vi/rK6bchqeaN8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=rK6bchqeaN8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 5083
duration_human: "1:24:43"
view_count: 35102
like_count: 465
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:23:34.293Z"
---

# Foundations of Unsupervised Deep Learning (Ruslan Salakhutdinov, CMU)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=rK6bchqeaN8
- video_id: rK6bchqeaN8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:24:43
- view_count: 35102
- like_count: 465
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
Sound is good. Okay, great. So, I wanted

00:00:02 --> 00:00:07
to talk to you about unsupervised

00:00:04 --> 00:00:10
learning. And that's the area where

00:00:06 --> 00:00:11
there's been a lot of research. Um, but

00:00:09 --> 00:00:12
compared to supervised learning that

00:00:10 --> 00:00:15
you've heard about today, like

00:00:11 --> 00:00:17
convolutional networks, uh, you know,

00:00:14 --> 00:00:18
unsupervised learning is not there yet.

00:00:16 --> 00:00:21
All right. So, I'm going to show you

00:00:17 --> 00:00:23
lots of uh uh lots of areas. Parts of

00:00:20 --> 00:00:25
the talk uh are going to be a little bit

00:00:22 --> 00:00:27
more mathematical. uh I apologize for

00:00:24 --> 00:00:29
that but I'll try to give you a gist of

00:00:26 --> 00:00:32
uh of the foundations the math behind

00:00:28 --> 00:00:34
these models as well as try to highlight

00:00:31 --> 00:00:37
some uh some of the application areas

00:00:33 --> 00:00:39
okay what's the motivation well the

00:00:36 --> 00:00:42
motivation is that you know the space of

00:00:38 --> 00:00:43
data that we have today is is just

00:00:41 --> 00:00:46
growing right you know if you look at

00:00:42 --> 00:00:48
he space of images you know speech uh

00:00:45 --> 00:00:51
if you look at social network data if

00:00:47 --> 00:00:53
you look at scientific data um I would

00:00:50 --> 00:00:58
argue that most of the data that we see

00:00:52 --> 00:01:00
today is unl labeled right um so how can

00:00:57 --> 00:01:01
we develop statistical models models

00:00:59 --> 00:01:04
that can discover interesting kind of

00:01:00 --> 00:01:06
structure in unsupervised way or

00:01:03 --> 00:01:09
semi-supervised way and that's what I'm

00:01:05 --> 00:01:10
interested in um as well as how can we

00:01:08 --> 00:01:13
sort of apply these models across

00:01:09 --> 00:01:15
multiple different uh multiple different

00:01:12 --> 00:01:17
domains and one particular framework of

00:01:14 --> 00:01:18
doing that is is is the framework of

00:01:16 --> 00:01:21
deep learning where you're trying to

00:01:17 --> 00:01:23
learn hierarchical representations of

00:01:20 --> 00:01:25
data and and again as we go as I go

00:01:22 --> 00:01:26
through talk I'm going to show you some

00:01:24 --> 00:01:29
uh some

00:01:25 --> 00:01:32
xamples I've tried. So here's here's

00:01:28 --> 00:01:34
one example. Um you know you can take uh

00:01:31 --> 00:01:36
a simple bag of words representation of

00:01:33 --> 00:01:38
an article or a

00:01:35 --> 00:01:41
newspaper. You can use something that's

00:01:37 --> 00:01:44
called an autoenccoder um just multiple

00:01:40 --> 00:01:45
vels. You extract some uh uh latent

00:01:43 --> 00:01:47
code and then you get some

00:01:44 --> 00:01:49
representation out of it. Right? And

00:01:46 --> 00:01:50
this is done completely in unsupervised

00:01:48 --> 00:01:52
way. You don't provide any labels. And

00:01:50 --> 00:01:53
if you look at the kind of structure

00:01:51 --> 00:01:55
that the model is discovering, you know,

00:01:52 --> 00:01:58
it could be useful for visualization,

00:01:54 --> 00:02:01
for example, or to see what's what kind

00:01:57 --> 00:02:02
of uh uh structure you you you see in

00:02:00 --> 00:02:03
your data. This was done on the on the

00:02:01 --> 00:02:07
Reuters data

00:02:02 --> 00:02:09
set. I've tried to uh kind of um cluster

00:02:06 --> 00:02:10
together uh lots of different

00:02:08 --> 00:02:12
unsupervised learning techniques and

00:02:09 --> 00:02:14
I'll touch on some of them. It's a

00:02:11 --> 00:02:16
little bit, you know, it's it's not a

00:02:13 --> 00:02:18
full set. uh but the way that I

00:02:15 --> 00:02:20
typically think about these models is

00:02:17 --> 00:02:23
that there's a class of uh what I would

00:02:19 --> 00:02:25
call non-proistic models uh you know

00:02:22 --> 00:02:27
models like sparse coding uh

00:02:24 --> 00:02:30
autoenccoders uh clustering based

00:02:26 --> 00:02:32
methods uh and these are all very very

00:02:29 --> 00:02:34
powerful uh powerful techniques and I'll

00:02:31 --> 00:02:36
cover some of them in that talk as well

00:02:33 --> 00:02:39
and then there is sort of

00:02:35 --> 00:02:40
u uh a space of uh proistic models and

00:02:38 --> 00:02:43
within proistic models you have

00:02:39 --> 00:02:46
tractable models you know things like uh

00:02:42 --> 00:02:47
fully observed belief networks. Uh

00:02:45 --> 00:02:49
there's a beautiful class of models

00:02:46 --> 00:02:52
called neuro neural uh auto reggressive

00:02:48 --> 00:02:54
density estimators. More recently, we've

00:02:51 --> 00:02:57
seen some successes of of so-called

00:02:53 --> 00:03:00
pixel recurrent neural network models or

00:02:56 --> 00:03:02
uh uh um and and I'll I'll show you some

00:02:59 --> 00:03:05
xamples of that. There is a class of

00:03:01 --> 00:03:06
so-called intractable models where you

00:03:04 --> 00:03:08
know you are looking at models like

00:03:05 --> 00:03:10
Boltzman machines uh and models like

00:03:07 --> 00:03:12
variational autoenccoders something

00:03:09 --> 00:03:14
that's been uh quite uh there's been a

00:03:11 --> 00:03:16
lot of development in our community in

00:03:13 --> 00:03:18
deep learning community in that space

00:03:15 --> 00:03:20
helmhold's machines I'll tell you a

00:03:17 --> 00:03:23
little bit about what these models are

00:03:19 --> 00:03:25
and a whole bunch of uh others as well

00:03:22 --> 00:03:27
right one particular structure within

00:03:24 --> 00:03:30
these models is that when you're

00:03:26 --> 00:03:31
building these generative models or uh

00:03:29 --> 00:03:33
of data you you typically have to

00:03:30 --> 00:03:35
specify what the distributions you're

00:03:32 --> 00:03:37
looking at. So you have to specify what

00:03:34 --> 00:03:38
he probability of the data and and

00:03:36 --> 00:03:40
generally doing some kind of approximate

00:03:37 --> 00:03:42
maximum likelihood estimation. And then

00:03:39 --> 00:03:45
more recently, you know, we've seen some

00:03:41 --> 00:03:46
very exciting models uh coming out. Uh

00:03:44 --> 00:03:49
these are generative adversarial

00:03:45 --> 00:03:51
networks, uh moment matching networks,

00:03:48 --> 00:03:53
and this is sort of a slightly different

00:03:50 --> 00:03:56
class of models where you don't really

00:03:52 --> 00:03:57
have to specify what the density is. You

00:03:55 --> 00:03:59
just need to be able to sample from

00:03:56 --> 00:04:02
those models. And I'm going to show you

00:03:58 --> 00:04:04
some uh some examples of that. Okay. So

00:04:01 --> 00:04:06
my talk is going to be sort of

00:04:03 --> 00:04:09
structured. I'd like to introduce you to

00:04:05 --> 00:04:11
the basic building blocks uh models like

00:04:08 --> 00:04:13
uh sparse coding models because I think

00:04:10 --> 00:04:15
that these are very important uh classes

00:04:12 --> 00:04:17
of models particularly for folks who are

00:04:14 --> 00:04:20
working in in in industry and and

00:04:16 --> 00:04:22
looking for simpler models. Autoenccord

00:04:19 --> 00:04:24
is a beautiful class of models. Um and

00:04:21 --> 00:04:26
then the second part of the talk I'll

00:04:23 --> 00:04:28
focus more on on generative models. I'll

00:04:25 --> 00:04:30
give you an introduction on uh into

00:04:27 --> 00:04:31
restricted B machines and deep BS

00:04:29 --> 00:04:35
machines. These are sort of models,

00:04:30 --> 00:04:38
statistical models um that can model um

00:04:34 --> 00:04:41
complicated uh uh complicated data.

00:04:37 --> 00:04:42
Uh and I'll spend some time uh showing

00:04:40 --> 00:04:44
you some examples some recent

00:04:41 --> 00:04:45
developments in our community

00:04:43 --> 00:04:48
specifically in the case of variational

00:04:44 --> 00:04:50
autoenccoders which is I view them as a

00:04:47 --> 00:04:52
subclass of Helholds machines. uh and

00:04:49 --> 00:04:54
I'll finish off by by by giving you an

00:04:51 --> 00:04:55
intuition about you know a slightly

00:04:53 --> 00:04:58
different class of models which would be

00:04:54 --> 00:05:01
these generative adversarial networks.

00:04:57 --> 00:05:04
Um okay so let's let's jump into the

00:05:00 --> 00:05:05
first part but before I do that um let

00:05:03 --> 00:05:07
me just sort of give you a little bit of

00:05:04 --> 00:05:10
motivation. I know Andre's done a great

00:05:06 --> 00:05:13
job and and Richard sort of alluded to

00:05:09 --> 00:05:15
that as well. uh but the idea is you

00:05:12 --> 00:05:16
know if I'm trying to classify a

00:05:14 --> 00:05:18
particular image right and if I say you

00:05:16 --> 00:05:20
know if I'm looking at specific pixel

00:05:17 --> 00:05:23
representation might be difficult for me

00:05:19 --> 00:05:26
to classify what I'm seeing right on the

00:05:22 --> 00:05:28
other hand if I can't find the right

00:05:25 --> 00:05:30
representations right the right

00:05:27 --> 00:05:32
representations for these images and

00:05:29 --> 00:05:34
then I sort of get the right features or

00:05:31 --> 00:05:36
get the right uh structure from the data

00:05:33 --> 00:05:38
then it might be easier for me to you

00:05:35 --> 00:05:40
know see what's uh uh what's going on

00:05:37 --> 00:05:42
with my data right so how do I find

00:05:39 --> 00:05:46
these these representations and this is

00:05:41 --> 00:05:47
uh uh this is sort of uh one of uh uh

00:05:45 --> 00:05:49
traditional approaches that we've seen

00:05:46 --> 00:05:51
for a long time is that you know you

00:05:48 --> 00:05:52
have a data you you creating some

00:05:50 --> 00:05:54
features and then you're running your

00:05:51 --> 00:05:57
learning algorithm and for the longest

00:05:54 --> 00:05:59
ime in object recognition or in audio

00:05:56 --> 00:06:01
classification you typically use some

00:05:58 --> 00:06:04
kind of uh handdesign features and then

00:06:00 --> 00:06:06
you start classifying uh what you have

00:06:03 --> 00:06:08
and you know like Andre was saying in

00:06:05 --> 00:06:12
the space of vision there's been a lot

00:06:07 --> 00:06:14
of different uh uh uh features designs

00:06:11 --> 00:06:17
of of of what's the right structure we

00:06:13 --> 00:06:21
should see in the data uh in the space

00:06:16 --> 00:06:23
of um audio same thing is happening how

00:06:20 --> 00:06:27
can you find these right representations

00:06:22 --> 00:06:29
for your uh for your data and the idea

00:06:26 --> 00:06:32
behind representation learning in

00:06:28 --> 00:06:34
particular um uh in uh deep learning is

00:06:31 --> 00:06:36
can we actually learn these

00:06:33 --> 00:06:37
representations automatically right and

00:06:35 --> 00:06:39
more importantly can we actually learn

00:06:36 --> 00:06:41
these representations in unsupervised

00:06:38 --> 00:06:44
right? By just seeing lots and lots of

00:06:40 --> 00:06:46
unlabelled data, can we achieve that?

00:06:43 --> 00:06:47
And uh you know, there's been a lot of

00:06:45 --> 00:06:49
work done in that space, but we're not

00:06:46 --> 00:06:52
here yet. So, so, so I wanted to sort

00:06:48 --> 00:06:54
of lower your expectations as as I show

00:06:51 --> 00:06:57
you some uh some of the

00:06:53 --> 00:06:58
results. Okay, sparse coding. Um this is

00:06:56 --> 00:07:01
one of the models that I think that

00:06:57 --> 00:07:05
everybody should know uh what it is. uh

00:07:00 --> 00:07:08
it was actually you know first has its

00:07:04 --> 00:07:09
roots in 96 and it was originally

00:07:07 --> 00:07:11
developed to explain early visual

00:07:08 --> 00:07:14
processing in the brain sort of uh I

00:07:10 --> 00:07:16
think of it as an edge detector uh and

00:07:13 --> 00:07:18
the objective here is the following well

00:07:15 --> 00:07:20
if I give you set of data points x1 up

00:07:17 --> 00:07:24
to xn you'd want to learn a dictionary

00:07:19 --> 00:07:26
of bases fi1 up to phi k right so that

00:07:23 --> 00:07:28
every single data point can be written

00:07:25 --> 00:07:31
as a linear combination of the bases

00:07:27 --> 00:07:34
that's fairly simple uh right there's

00:07:30 --> 00:07:36
one constraint in that you'd want your

00:07:33 --> 00:07:39
coefficients to be sparse. You'd want

00:07:35 --> 00:07:41
hem to be mostly zero, right? Uh so

00:07:38 --> 00:07:43
every data point is represented as a

00:07:40 --> 00:07:48
sparse linear combination of

00:07:42 --> 00:07:50
bases, right? So uh this is if if if you

00:07:47 --> 00:07:53
apply sparse coding to natural images,

00:07:49 --> 00:07:54
right? And this is uh this was

00:07:52 --> 00:07:56
originally has been a lot of work

00:07:53 --> 00:07:59
developed at Stanford with with Andrew's

00:07:55 --> 00:08:00
group. So and if you apply sparse coding

00:07:58 --> 00:08:03
to you know take little patches of

00:07:59 --> 00:08:05
images and learn these bases these

00:08:02 --> 00:08:07
dictionaries this is how they look like

00:08:04 --> 00:08:09
and it's they look really nice in terms

00:08:06 --> 00:08:12
of you know finding sort of edge edge-

00:08:08 --> 00:08:14
like structure so if given a new example

00:08:11 --> 00:08:16
I can say well this new example can be

00:08:13 --> 00:08:20
written as a linear combination of a few

00:08:15 --> 00:08:21
of these bases right and taking that

00:08:19 --> 00:08:23
representation it turns out that

00:08:20 --> 00:08:26
particular representation a sparse

00:08:22 --> 00:08:28
representation is quite useful uh as a

00:08:25 --> 00:08:30
feature representation of your data,

00:08:27 --> 00:08:35
right? So, it's quite useful to have it.

00:08:29 --> 00:08:39
And in general, oops. Uh um how do we

00:08:34 --> 00:08:41
fit these models? Um well, if

00:08:38 --> 00:08:42
I give you uh a whole bunch of image

00:08:40 --> 00:08:44
patches, but these don't necessarily

00:08:41 --> 00:08:46
have to be image patches. This could be,

00:08:43 --> 00:08:48
you know, little speech signals or any

00:08:45 --> 00:08:49
kind of uh data you're working with.

00:08:47 --> 00:08:51
You'd want to learn a dictionary of

00:08:48 --> 00:08:54
basis. You have to form, you have to

00:08:50 --> 00:08:55
solve this optimization problem, right?

00:08:53 --> 00:08:58
So the first term here you can think of

00:08:54 --> 00:09:00
it as a reconstruction error which is to

00:08:57 --> 00:09:04
say well I take a linear combination of

00:08:59 --> 00:09:06
my bases I want them to match my data.

00:09:03 --> 00:09:08
Uh and then there's a second term which

00:09:05 --> 00:09:10
is you can think of it as a sparse

00:09:07 --> 00:09:13
penalty term which essentially says you

00:09:09 --> 00:09:15
know try to penalize uh um my

00:09:12 --> 00:09:17
coefficients so that most of them are

00:09:14 --> 00:09:19
zero right that way every single data

00:09:16 --> 00:09:21
point can be written as just a linear

00:09:18 --> 00:09:23
combination sparse linear combination of

00:09:20 --> 00:09:26
of the bases and it turns out there

00:09:22 --> 00:09:29
is an easy optimization uh for doing

00:09:25 --> 00:09:33
that u if you fix your dictionary of

00:09:28 --> 00:09:34
bases right 51 up to 5k uh and you solve

00:09:32 --> 00:09:36
for the activation

00:09:33 --> 00:09:38
uh that's becomes a standard lasso

00:09:35 --> 00:09:40
problem, right? And there's a lot of

00:09:37 --> 00:09:42
solvers for uh for solving that

00:09:39 --> 00:09:45
particular problem. That's a general

00:09:41 --> 00:09:47
very, you know, uh it's it's it's a

00:09:44 --> 00:09:49
lasso problem which is fairly easy to uh

00:09:46 --> 00:09:51
to optimize. And then if you fix the

00:09:48 --> 00:09:53
activations and you optimize for

00:09:50 --> 00:09:56
dictionary bases, then it's a well-known

00:09:52 --> 00:09:58
quadratic programming problem, right? Uh

00:09:55 --> 00:10:00
each problem is convex. So you can sort

00:09:57 --> 00:10:01
of alternate between finding

00:09:59 --> 00:10:03
coefficients, finding bases and so

00:10:00 --> 00:10:05
forth. you can optimize this function

00:10:02 --> 00:10:07
and there's been a lot of recent work in

00:10:04 --> 00:10:09
the last 10 years of of doing these

00:10:06 --> 00:10:12
things online and doing it more

00:10:08 --> 00:10:16
fficiently and so forth.

00:10:11 --> 00:10:18
Um right at test time given a new input

00:10:15 --> 00:10:19
or a new image patch uh and given a set

00:10:17 --> 00:10:23
of learned bases once you have your

00:10:19 --> 00:10:25
dictionary you can then just solve uh a

00:10:22 --> 00:10:27
lasso problem to find the right

00:10:24 --> 00:10:30
coefficients right so in this case given

00:10:26 --> 00:10:31
a test sample or test patch you can find

00:10:29 --> 00:10:35
well it's written by as a linear

00:10:30 --> 00:10:37
combination of of uh of subset of the

00:10:34 --> 00:10:39
bases right and it turns out again that

00:10:36 --> 00:10:41
particular representation is very

00:10:38 --> 00:10:43
useful uh particularly if you're

00:10:40 --> 00:10:45
interested in classifying what you see

00:10:42 --> 00:10:47
in images and this is done in completely

00:10:44 --> 00:10:49
unsupervised way right there is no class

00:10:46 --> 00:10:52
labels there is no uh specific

00:10:48 --> 00:10:55
supervisory signal that's uh that's here

00:10:51 --> 00:10:58
um so back in 2006 there was uh work

00:10:54 --> 00:11:00
done uh again at Stanford

00:10:57 --> 00:11:02
um uh that basically showed a very

00:11:00 --> 00:11:04
interesting result so if I give you an

00:11:01 --> 00:11:07
input like this and these are my learned

00:11:03 --> 00:11:09
bases remember these little edges what

00:11:06 --> 00:11:11
happens is that you just convolve these

00:11:08 --> 00:11:13
bases you can get these different

00:11:10 --> 00:11:14
feature maps much like you know the

00:11:12 --> 00:11:16
feature maps that we've seen in

00:11:13 --> 00:11:18
convolutional neural networks and then

00:11:15 --> 00:11:20
you take these feature maps and you can

00:11:17 --> 00:11:23
just do a classification um right and

00:11:20 --> 00:11:25
this was done on one of the older data

00:11:22 --> 00:11:30
sets Caltech 101 which sort of a data

00:11:24 --> 00:11:31
set that predates imageet and um uh if

00:11:29 --> 00:11:34
you look at you know some of the

00:11:30 --> 00:11:37
competing algorithms if you do a simple

00:11:33 --> 00:11:39
logistic regression versus if you do PCA

00:11:36 --> 00:11:41
and then do uh logistic regression

00:11:38 --> 00:11:43
versus uh uh finding these features

00:11:40 --> 00:11:46
using sparse coding you can get

00:11:42 --> 00:11:49
substantial improvements right uh so

00:11:45 --> 00:11:51
that's again that's that's uh and and

00:11:48 --> 00:11:52
you see sparse coding popping up in a

00:11:50 --> 00:11:54
lot of different areas not just in deep

00:11:52 --> 00:11:57
learning but folks who are using uh

00:11:53 --> 00:11:59
looking at uh uh the medical imaging

00:11:56 --> 00:12:01
domain uh in neuroscience these are very

00:11:58 --> 00:12:03
popular models because they're easier

00:12:00 --> 00:12:05
they're easy to fit they're easy to uh

00:12:02 --> 00:12:09
to deal

00:12:04 --> 00:12:11
with so uh what's the interpretation of

00:12:08 --> 00:12:12
the sparse coding Well, look, let's look

00:12:10 --> 00:12:15
at this equation again. And we can think

00:12:12 --> 00:12:17
of sparse coding as finding an

00:12:14 --> 00:12:21
overcomplete representation of your

00:12:16 --> 00:12:23
data. Right? Now, the encoding function,

00:12:20 --> 00:12:25
we can think of this encoding function,

00:12:22 --> 00:12:27
which is well, I give you an input, find

00:12:24 --> 00:12:30
me the features or sparse coefficients

00:12:26 --> 00:12:32
or bases uh that make up my image. We

00:12:29 --> 00:12:35
can think of encoding as an implicit and

00:12:32 --> 00:12:36
very nonlinear function of x, right? But

00:12:34 --> 00:12:39
it's an implicit function. We don't

00:12:35 --> 00:12:42
really specify it. And the decoder or

00:12:38 --> 00:12:44
the reconstruction is just a sim simple

00:12:41 --> 00:12:45
linear uh function and it's and it's

00:12:43 --> 00:12:47
very explicit. just take your

00:12:44 --> 00:12:50
coefficients

00:12:46 --> 00:12:52
uh um and then multiply it by the you

00:12:49 --> 00:12:57
know find the right basis and get back

00:12:51 --> 00:12:59
uh get back the image or the data right

00:12:56 --> 00:13:02
and that sort of flows naturally into

00:12:58 --> 00:13:04
the ideas of autoenccoders right the

00:13:01 --> 00:13:06
autoenccoder is a general framework

00:13:03 --> 00:13:08
where you if I give you an input data

00:13:05 --> 00:13:10
let's say it's an input image you encode

00:13:07 --> 00:13:13
it you get some representation some

00:13:09 --> 00:13:15
feature representation and then you have

00:13:12 --> 00:13:17
a decoder given that representation

00:13:14 --> 00:13:20
you're decoding it back into the image.

00:13:16 --> 00:13:23
So you can think of encoder as a as a

00:13:19 --> 00:13:25
feed forward bottom up pass right much

00:13:22 --> 00:13:27
like in the convolutional neural network

00:13:24 --> 00:13:29
given the image you're doing a forward

00:13:26 --> 00:13:32
pass and then there is also feedback and

00:13:28 --> 00:13:34
generative uh or top down pass right

00:13:31 --> 00:13:37
given features you're reconstructing

00:13:33 --> 00:13:39
back uh back the input image and the

00:13:36 --> 00:13:41
details what's going inside the encoder

00:13:38 --> 00:13:43
decoder they matter a lot uh and

00:13:40 --> 00:13:44
obviously you need some form of

00:13:42 --> 00:13:46
constraints you need some of constraints

00:13:43 --> 00:13:47
to avoid learning an identity right

00:13:45 --> 00:13:49
because if you don't With these

00:13:46 --> 00:13:50
constraints, what you could do is just

00:13:48 --> 00:13:53
ake your

00:13:49 --> 00:13:54
input, copy it to your features, and

00:13:52 --> 00:13:56
then reconstruct back, right? And that

00:13:53 --> 00:13:58
would be a trivial solution. So, so, so

00:13:55 --> 00:13:59
we need to introduce some some

00:13:57 --> 00:14:02
additional uh

00:13:58 --> 00:14:04
constraints. If you're dealing with uh

00:14:01 --> 00:14:06
um uh binary features, if you want to

00:14:04 --> 00:14:07
extract binary features, for example,

00:14:05 --> 00:14:10
I'm going to show you later why you'd

00:14:06 --> 00:14:12
want to do that. You can pass your uh

00:14:09 --> 00:14:14
your encoder through sigmoid

00:14:11 --> 00:14:16
nonlinearity, much like in a neural

00:14:13 --> 00:14:17
network. And then you have a have a

00:14:15 --> 00:14:20
linear decoder that reconstruct back the

00:14:16 --> 00:14:22
input. And the way we optimize these

00:14:19 --> 00:14:26
little building blocks or these little

00:14:21 --> 00:14:28
blocks is uh we can just uh um have an

00:14:25 --> 00:14:31
encoder right which takes your input

00:14:27 --> 00:14:32
akes a linear combination passes it

00:14:30 --> 00:14:34
hrough some nonlinearity the sigmoid

00:14:31 --> 00:14:36
nonlinearity or could be rectified

00:14:33 --> 00:14:38
linear units or could be 10h

00:14:35 --> 00:14:40
nonlinearity and then there's a decoder

00:14:37 --> 00:14:42
where you reconstruct back uh your uh

00:14:39 --> 00:14:43
original input. Right? So this is

00:14:41 --> 00:14:45
nothing more than a neural network with

00:14:42 --> 00:14:47
one hidden layer and typically that

00:14:44 --> 00:14:49
hidden layer would have a small

00:14:46 --> 00:14:51
dimensionality than the input. So we can

00:14:48 --> 00:14:52
think of it as a bottleneck layer right

00:14:50 --> 00:14:54
and we can determine the network

00:14:51 --> 00:14:55
parameters you know the parameters of

00:14:53 --> 00:14:58
the encoder and the parameters of the

00:14:54 --> 00:15:00
decoder by writing down uh the

00:14:57 --> 00:15:01
reconstruction error and that's what the

00:14:59 --> 00:15:04
reconstruction would look like you know

00:15:00 --> 00:15:05
given the input encode decode and make

00:15:03 --> 00:15:08
sure whatever you're decoding is as

00:15:04 --> 00:15:10
close as possible to to the original to

00:15:07 --> 00:15:12
the original input. All right. And we

00:15:09 --> 00:15:15
can use back propagation algorithm to to

00:15:11 --> 00:15:17
uh to train it. There is an

00:15:14 --> 00:15:19
interesting uh sort of relationship

00:15:16 --> 00:15:21
between autoenccoders and pro and

00:15:18 --> 00:15:23
principal component analysis. Many of

00:15:20 --> 00:15:25
you have probably heard about PCA as a

00:15:22 --> 00:15:26
practitioner. You know, if you're

00:15:24 --> 00:15:28
dealing with large data and you want to

00:15:25 --> 00:15:30
see what's going on, PCA is the first

00:15:27 --> 00:15:34
hing to use, right? Much like logistic

00:15:30 --> 00:15:35
regression. Uh so and the idea here is

00:15:33 --> 00:15:38
that if the parameters of encoder and

00:15:34 --> 00:15:40
ecoder are shared and you actually have

00:15:38 --> 00:15:41
the hidden layer which is a linear layer

00:15:39 --> 00:15:44
so you don't introduce any

00:15:41 --> 00:15:46
nonlinearities then it turns out that

00:15:43 --> 00:15:48
he space the latent space that the

00:15:45 --> 00:15:50
model will discover is going to be the

00:15:47 --> 00:15:52
same space as the space discovered by

00:15:49 --> 00:15:54
PCA it effectively will collapse the

00:15:51 --> 00:15:57
principal component analysis right or

00:15:53 --> 00:15:59
doing PCA which is sort of a nice uh uh

00:15:56 --> 00:16:01
connection because it basically says

00:15:58 --> 00:16:04
that autoenccoders you can think of them

00:16:00 --> 00:16:06
as nonlinear extensions of PCA, right?

00:16:03 --> 00:16:10
So you can learn a little richer

00:16:05 --> 00:16:12
features uh if if if if you are uh

00:16:09 --> 00:16:14
um uh using

00:16:11 --> 00:16:16
autoenccoders. Okay, so here's another

00:16:13 --> 00:16:18
model. If you're dealing with binary

00:16:15 --> 00:16:20
input, uh sometimes we're dealing with

00:16:17 --> 00:16:23
uh like amnest for example, again your

00:16:19 --> 00:16:24
encoder and decoder could use sigmoid

00:16:22 --> 00:16:26
nonlinearities. So given an input, you

00:16:23 --> 00:16:28
extract some binary features, given

00:16:25 --> 00:16:31
binary features, you construct back the

00:16:27 --> 00:16:33
binary input. um and that's actually you

00:16:30 --> 00:16:34
know relates to uh a model called the

00:16:32 --> 00:16:36
restricted bulk machine something that

00:16:34 --> 00:16:40
I'm going to uh tell you about later in

00:16:35 --> 00:16:42
the talk okay there's also uh other

00:16:39 --> 00:16:44
classes of models where you can say well

00:16:41 --> 00:16:46
I can also introduce some sparsity much

00:16:43 --> 00:16:48
like in sparse coding to say that you

00:16:45 --> 00:16:50
know I need to constrain my latent

00:16:47 --> 00:16:53
features or my latent space uh to be

00:16:50 --> 00:16:56
sparse and that's actually uh allows you

00:16:52 --> 00:16:59
to learn quite uh reasonable features

00:16:55 --> 00:17:00
and nice features here's one particular

00:16:58 --> 00:17:03
model called predictive sparse

00:16:59 --> 00:17:04
decomposition where you effectively, you

00:17:02 --> 00:17:06
know, if you look at the first part of

00:17:03 --> 00:17:08
the equation here, the decoder part that

00:17:06 --> 00:17:11
pretty much looks like a sparse coding

00:17:07 --> 00:17:13
model, right? But in addition, you have

00:17:10 --> 00:17:16
an encoding part that essentially says

00:17:12 --> 00:17:19
train an encoder such that it actually

00:17:15 --> 00:17:22
approximates what my uh latent code

00:17:18 --> 00:17:23
should be. Right? So effectively you can

00:17:21 --> 00:17:25
think of this model as there is encoder,

00:17:22 --> 00:17:26
there's a decoder but then you put the

00:17:24 --> 00:17:29
sparity constraint on your latent

00:17:26 --> 00:17:32
representation and you can optimize

00:17:28 --> 00:17:35
uh um for uh for that

00:17:31 --> 00:17:37
model and obviously the other thing that

00:17:34 --> 00:17:40
uh we've been doing in the last you know

00:17:36 --> 00:17:42
seven eight and 10 years is well what

00:17:39 --> 00:17:44
you can do is you can actually stack

00:17:41 --> 00:17:46
these things together uh right so you

00:17:43 --> 00:17:48
can learn low-level features try to

00:17:45 --> 00:17:51
learn high level features and so forth.

00:17:47 --> 00:17:53
So just building these blocks uh um and

00:17:50 --> 00:17:55
perhaps at the top level if you're

00:17:52 --> 00:17:58
trying to solve a classification problem

00:17:54 --> 00:18:00
you can do that um or and this is

00:17:57 --> 00:18:02
ometimes known as a greedy uh greedy

00:17:59 --> 00:18:04
layer wise uh learning and this is

00:18:01 --> 00:18:06
ometimes useful whenever you have lots

00:18:03 --> 00:18:09
and lots of unlabeled data and when you

00:18:06 --> 00:18:11
have a little labelled data right a

00:18:08 --> 00:18:14
small sample of labelled data typically

00:18:10 --> 00:18:15
these models help you uh find meaningful

00:18:13 --> 00:18:17
representations such that you don't need

00:18:14 --> 00:18:18
a lot of labeled data to solve a

00:18:16 --> 00:18:21
particular task that you're trying to

00:18:18 --> 00:18:23
solve, right? And this is again you can

00:18:20 --> 00:18:26
remove the decoding part and then you

00:18:22 --> 00:18:28
end up with a standard or convolutional

00:18:25 --> 00:18:30
architecture. Again, your encoder and

00:18:27 --> 00:18:32
ecoder could use could be convolutional

00:18:29 --> 00:18:35
uh and and it's uh it depends on on what

00:18:31 --> 00:18:36
problem you're tackling. Uh and

00:18:34 --> 00:18:38
typically, you know, you can stack these

00:18:35 --> 00:18:41
things together and optimize for

00:18:37 --> 00:18:45
particular uh task that you're trying to

00:18:40 --> 00:18:46
solve. Okay. Um here's an example of

00:18:44 --> 00:18:49
just wanted to show you some examples

00:18:45 --> 00:18:52
ome early examples back in 2006. This

00:18:48 --> 00:18:53
was uh a way of trying to build these

00:18:51 --> 00:18:55
nonlinear

00:18:52 --> 00:18:57
autoenccoders. Um and you can sort of

00:18:54 --> 00:19:00
pre-train these models using restricted

00:18:56 --> 00:19:01
bulk machines or autoenccoders uh

00:18:59 --> 00:19:04
generally and then you know you can

00:19:00 --> 00:19:06
stitch them together into this deep

00:19:03 --> 00:19:09
autoenccoder and back propagate through

00:19:06 --> 00:19:12
uh reconstruction loss. Right? One thing

00:19:08 --> 00:19:14
I want to point out is that uh here's

00:19:11 --> 00:19:17
one particular example. You know the top

00:19:13 --> 00:19:19
row I show you real faces. The second

00:19:16 --> 00:19:21
row you're seeing faces reconstructed

00:19:18 --> 00:19:24
from a bottleneck of of uh of uh

00:19:20 --> 00:19:24
30dimensional uh real valid bottleneck.

00:19:23 --> 00:19:27
So you can think of it as just a

00:19:23 --> 00:19:28
compression mechanism. Given the data

00:19:26 --> 00:19:31
high dimensional data you're compressing

00:19:27 --> 00:19:32
it down to 30 dimensional code and then

00:19:30 --> 00:19:34
from that 30dimensional code you're

00:19:31 --> 00:19:36
constructing back the original data.

00:19:33 --> 00:19:38
Right? So if you look at the first row

00:19:35 --> 00:19:41
this is the data. The second row shows

00:19:37 --> 00:19:44
you reconstructed data and the last row

00:19:40 --> 00:19:45
shows you PCA solution. Right? One thing

00:19:43 --> 00:19:47
I want to point out is that you know the

00:19:44 --> 00:19:49
solution here you have a much sharper

00:19:46 --> 00:19:51
epresentation which means that it's

00:19:48 --> 00:19:52
capturing a little bit more structure in

00:19:50 --> 00:19:54
the data. It's also kind of interesting

00:19:51 --> 00:19:58
to see that sometimes these models tend

00:19:53 --> 00:19:59
to um how should I say it uh they tend

00:19:57 --> 00:20:01
to regularize your data right like for

00:19:58 --> 00:20:03
example if you see this person with

00:20:00 --> 00:20:05
glasses removes the glasses and that

00:20:02 --> 00:20:06
generally has to do with the fact that

00:20:04 --> 00:20:08
here's only one person with glasses. So

00:20:05 --> 00:20:10
the model just basically said that's

00:20:07 --> 00:20:12
noise, get rid of it. Or it sort of gets

00:20:09 --> 00:20:14
rid of mustaches, right? Like if you see

00:20:11 --> 00:20:15
a face, there's no mustache, right? And

00:20:13 --> 00:20:17
then again, that has to do with the fact

00:20:14 --> 00:20:19
hat there's enough capacity. So the

00:20:16 --> 00:20:22
model might think that that's just a

00:20:18 --> 00:20:26
noise. Um, and you know, if you're

00:20:21 --> 00:20:28
dealing with uh text type of data, uh

00:20:25 --> 00:20:31
this was done using a Reuters data set.

00:20:27 --> 00:20:33
You have about 800,000 uh stories. You

00:20:30 --> 00:20:35
take bag of representation, something

00:20:32 --> 00:20:37
very simple. you compress it down to two

00:20:34 --> 00:20:39
dimensional space and then you see what

00:20:36 --> 00:20:41
hat space looks like, right? And I

00:20:38 --> 00:20:43
always like to joke that, you know, the

00:20:40 --> 00:20:44
model basically discovers that European

00:20:42 --> 00:20:47
community economic policies are just

00:20:44 --> 00:20:49
next to disasters and accidents, right?

00:20:46 --> 00:20:51
This is done this was back in I think

00:20:48 --> 00:20:52
the data was collected in 96, right? I

00:20:50 --> 00:20:56
think today it's probably going to

00:20:51 --> 00:20:59
become closer those two things. Um uh

00:20:55 --> 00:21:00
but again this is just a way uh

00:20:58 --> 00:21:02
typically autoenccoder is a way of

00:20:59 --> 00:21:04
compression or or trying to do

00:21:01 --> 00:21:06
dimensionality reduction but we'll see

00:21:03 --> 00:21:08
later that they don't have to be. Okay

00:21:05 --> 00:21:09
there's another class of algorithm

00:21:07 --> 00:21:12
called semantic hashing which is to say

00:21:08 --> 00:21:14
well what if you take your data and

00:21:11 --> 00:21:16
compress it down to binary

00:21:13 --> 00:21:18
representation. Wouldn't that be nice?

00:21:16 --> 00:21:20
Because if you have binary

00:21:17 --> 00:21:23
representation, you can search in the

00:21:19 --> 00:21:26
binary space very efficiently, right? In

00:21:22 --> 00:21:28
fact, if you can can compress your data

00:21:25 --> 00:21:31
down to 20 dimension, 20 dimensional

00:21:27 --> 00:21:32
binary code, 2 to the 20 is about 4

00:21:30 --> 00:21:36
gigabytes. So you can just store

00:21:31 --> 00:21:39
verything in memory and you can look at

00:21:35 --> 00:21:41
he you know just do memory uh lookups

00:21:38 --> 00:21:43
without actually doing any search at

00:21:40 --> 00:21:45
all. Uh right. So this sort of

00:21:42 --> 00:21:47
representation sometimes have been used

00:21:44 --> 00:21:50
successfully in computer vision where

00:21:46 --> 00:21:53
you take your images and then you learn

00:21:49 --> 00:21:55
these binary representations you know uh

00:21:52 --> 00:21:57
30 dimensional codes or 200 dimensional

00:21:54 --> 00:21:59
codes and it turns out it's very

00:21:56 --> 00:22:01
efficient to search through large

00:21:58 --> 00:22:03
volumes of data using binary

00:22:00 --> 00:22:04
representation. So you can you know

00:22:02 --> 00:22:07
takes a fraction of a millisecond to

00:22:04 --> 00:22:10
retrieve uh images from you know a set

00:22:06 --> 00:22:12
of millions and millions of images. Uh

00:22:09 --> 00:22:13
and and again this is also an active

00:22:11 --> 00:22:14
area of research right now because

00:22:12 --> 00:22:17
people are trying to figure out we have

00:22:14 --> 00:22:19
these large databases how can you search

00:22:16 --> 00:22:21
through them efficiently and trying to

00:22:18 --> 00:22:23
learning a semantic hashing function

00:22:20 --> 00:22:25
that maps your data to the binary

00:22:22 --> 00:22:28
representation turns out to be quite

00:22:24 --> 00:22:31
useful. Uh okay now let me step back a

00:22:27 --> 00:22:32
little bit and say let's now look at

00:22:30 --> 00:22:35
generative models. Let's look at

00:22:31 --> 00:22:36
probabistic models and how different

00:22:34 --> 00:22:39
hey are. And I'm going to show you some

00:22:35 --> 00:22:42
xamples of of of uh where they

00:22:38 --> 00:22:45
applicable. Here's one example of uh a

00:22:41 --> 00:22:47
simple model uh trying to learn a

00:22:44 --> 00:22:49
distribution of these handwritten

00:22:46 --> 00:22:52
characters. So we have you know we have

00:22:48 --> 00:22:55
uh Sanskrit, we have Arabic, we have

00:22:51 --> 00:22:58
circ um and now we can build a model

00:22:54 --> 00:23:01
that says well can you actually generate

00:22:57 --> 00:23:03
me what a Sanskrit should look like? The

00:23:00 --> 00:23:05
flickering you see at the top these are

00:23:02 --> 00:23:06
you know neurons. You can think of them

00:23:04 --> 00:23:08
as neurons firing. And what you're

00:23:05 --> 00:23:10
seeing at the bottom is you're seeing

00:23:07 --> 00:23:12
what the model generates what it

00:23:09 --> 00:23:13
believes Sanskrit should look like.

00:23:11 --> 00:23:15
Right? So in some sense when you think

00:23:12 --> 00:23:17
about generative models, you think about

00:23:14 --> 00:23:20
models that can generate uh or they can

00:23:16 --> 00:23:23
sample uh the distribution or or they

00:23:19 --> 00:23:24
can sample uh the data. Uh this is a

00:23:22 --> 00:23:27
fairly simple model. You have about

00:23:23 --> 00:23:29
25,000 characters, you know, coming from

00:23:26 --> 00:23:30
50 different alphabets around the world.

00:23:28 --> 00:23:33
You have about two million parameters.

00:23:30 --> 00:23:34
This is one of the older models but this

00:23:32 --> 00:23:36
you know what the model believes

00:23:33 --> 00:23:38
Sanskrit should look like and I think

00:23:35 --> 00:23:40
that I've asked couple of people to say

00:23:37 --> 00:23:42
that is that does that really look like

00:23:39 --> 00:23:46
Sanskrit

00:23:41 --> 00:23:47
okay great which can mean two things it

00:23:45 --> 00:23:50
can mean that the model is actually

00:23:46 --> 00:23:52
generalizing or the model is overfitting

00:23:49 --> 00:23:53
right uh meaning that it's just

00:23:51 --> 00:23:54
memorizing what the training data looks

00:23:52 --> 00:23:56
like and I'm just showing you examples

00:23:53 --> 00:23:59
from the training data we'll come back

00:23:55 --> 00:24:01
to that point uh uh as we go through the

00:23:58 --> 00:24:03
talk here's You know, you can also do

00:24:00 --> 00:24:05
conditional simulation. You know, given

00:24:02 --> 00:24:07
half of the image, can you complete the

00:24:04 --> 00:24:09
remaining half, right? And more

00:24:06 --> 00:24:10
cently, there's been a lot of advances

00:24:08 --> 00:24:12
uh

00:24:09 --> 00:24:14
um it's actually the last couple of

00:24:11 --> 00:24:16
years for the conditional generations

00:24:13 --> 00:24:19
and it's pretty amazing what you can do

00:24:15 --> 00:24:21
in terms of in painting uh given half of

00:24:18 --> 00:24:22
the image what the other half of the

00:24:20 --> 00:24:24
image should look like. This is sort of

00:24:21 --> 00:24:26
a simple example, but it does show you

00:24:23 --> 00:24:28
that it's trying to, you know, be

00:24:25 --> 00:24:31
consistent with what different uh

00:24:27 --> 00:24:34
strokes look like. Right. So why is it

00:24:30 --> 00:24:36
so difficult? Uh in the space of

00:24:33 --> 00:24:38
so-called undirected graphical models of

00:24:35 --> 00:24:40
both machines, the difficulty really

00:24:37 --> 00:24:43
comes from the following fact. If I show

00:24:39 --> 00:24:44
you this image which is a 28x 28 image,

00:24:42 --> 00:24:46
it's a binary image, right? So some

00:24:43 --> 00:24:50
pixels are on, some pixels are off.

00:24:46 --> 00:24:51
There are two to the 28 by 28 possible

00:24:49 --> 00:24:54
images. So in fact there are two to the

00:24:50 --> 00:24:57
784 possible configurations, right? And

00:24:53 --> 00:24:59
that space is exponential. So how can

00:24:56 --> 00:25:01
you build models that figure out you

00:24:58 --> 00:25:03
know in in the space of characters

00:25:00 --> 00:25:06
there's only little tiny subspace in

00:25:02 --> 00:25:10
that space right if you start generally

00:25:05 --> 00:25:12
generating you know uh 200 by 200 images

00:25:09 --> 00:25:15
um you know that space is huge and the

00:25:11 --> 00:25:17
space of real images is really really

00:25:14 --> 00:25:18
tiny right so how do you find that space

00:25:16 --> 00:25:20
how do you generalize to new images

00:25:18 --> 00:25:25
that's that's a very difficult question

00:25:19 --> 00:25:28
in general to um to answer one class of

00:25:24 --> 00:25:30
models uh is so-called fully observed

00:25:27 --> 00:25:33
models right there sort of been a stream

00:25:29 --> 00:25:35
of uh learning generative models that

00:25:32 --> 00:25:36
are tractable and they have very nice

00:25:34 --> 00:25:38
properties like you can compute the

00:25:35 --> 00:25:40
probabilities you can do can do maximum

00:25:37 --> 00:25:42
likelihood estimation here is one

00:25:39 --> 00:25:44
xample where I can if I try to model

00:25:41 --> 00:25:46
the image I can write it down as you

00:25:43 --> 00:25:47
know taking the first pixel modeling the

00:25:45 --> 00:25:49
first pixel then modeling the second

00:25:46 --> 00:25:52
pixel given the first pixel and just

00:25:48 --> 00:25:53
writing it down in terms of uh uh

00:25:51 --> 00:25:55
conditional product of the conditional

00:25:52 --> 00:25:57
probabilities and each conditional

00:25:54 --> 00:25:59
probability can take a very complicated

00:25:56 --> 00:26:03
form, right? It could be a complicated

00:25:58 --> 00:26:06
neural network. Um, and oh,

00:26:02 --> 00:26:10
sorry. So there's been a number of

00:26:05 --> 00:26:12
successful models. Uh, one of the early

00:26:09 --> 00:26:14
models called neural autogressive

00:26:11 --> 00:26:17
density estimator actually developed by

00:26:13 --> 00:26:19
Hugo. Uh, real valid extension of these

00:26:16 --> 00:26:21
models and more recently we start seeing

00:26:18 --> 00:26:24
these flavors of models. There were a

00:26:20 --> 00:26:27
couple of papers uh popped up actually

00:26:23 --> 00:26:29
this year from deep mind uh where they

00:26:26 --> 00:26:32
sort of make these conditionals to be

00:26:28 --> 00:26:34
you know sophisticated RNNs LSTMs or

00:26:31 --> 00:26:36
convolutional models and they can

00:26:33 --> 00:26:38
actually generate remarkable images uh

00:26:35 --> 00:26:41
and so this is just a pixel CNN

00:26:37 --> 00:26:43
generating I guess uh

00:26:40 --> 00:26:46
elephants. Yeah. And actually looks

00:26:42 --> 00:26:48
pretty pretty interesting. uh right uh

00:26:45 --> 00:26:49
the drawback of these models is that we

00:26:47 --> 00:26:51
yet have to see how good of

00:26:48 --> 00:26:53
representations these models are are

00:26:50 --> 00:26:54
learning so that we can use these

00:26:52 --> 00:26:56
representations for other tasks like

00:26:53 --> 00:27:00
classifying images or find similar

00:26:56 --> 00:27:03
images and such. Right? Um now let me

00:26:59 --> 00:27:05
jump into a class of models called

00:27:02 --> 00:27:06
restricted boss machines. So this is the

00:27:04 --> 00:27:08
class of models where we actually trying

00:27:05 --> 00:27:10
to learn some latent structure some

00:27:07 --> 00:27:12
latent representation.

00:27:09 --> 00:27:14
uh these models belong to the class of

00:27:11 --> 00:27:15
so-called graphical models and graphical

00:27:13 --> 00:27:18
model is a very powerful framework for

00:27:14 --> 00:27:20
epresenting dependency uh structure

00:27:17 --> 00:27:22
between random variables. Uh this is an

00:27:19 --> 00:27:25
example where we have

00:27:21 --> 00:27:27
uh uh you can think of this particular

00:27:24 --> 00:27:29
model. You have some pixels. These are

00:27:26 --> 00:27:30
stocastic binary so-called visible

00:27:28 --> 00:27:32
variables. You can think of pixels in

00:27:29 --> 00:27:34
your image and you have stocastic binary

00:27:31 --> 00:27:35
hidden variables. You can think of them

00:27:33 --> 00:27:36
as feature detectors. So detecting

00:27:34 --> 00:27:39
certain patterns that you see in the

00:27:36 --> 00:27:41
data much like sparse coding models.

00:27:38 --> 00:27:43
This has a bipart type structure. You

00:27:40 --> 00:27:45
can write down the probability the joint

00:27:42 --> 00:27:47
distribution over all of these

00:27:44 --> 00:27:49
variables. uh you sort of have pair wise

00:27:46 --> 00:27:51
term you have union term but it's not

00:27:48 --> 00:27:52
really important what they look like the

00:27:50 --> 00:27:54
important thing here is that if I look

00:27:51 --> 00:27:56
at this conditional probability of the

00:27:53 --> 00:27:58
data given given the features I can

00:27:55 --> 00:28:00
actually write down explicitly what it

00:27:57 --> 00:28:02
looks like what does that mean that

00:27:59 --> 00:28:03
basically means that if you tell me what

00:28:01 --> 00:28:06
features you see in the image I can

00:28:02 --> 00:28:09
generate the data for you right or I can

00:28:05 --> 00:28:10
generate uh uh the corresponding input

00:28:08 --> 00:28:13
in terms of learning features so what do

00:28:09 --> 00:28:15
these uh models learn they sort of learn

00:28:12 --> 00:28:16
something similar that we've seen in

00:28:14 --> 00:28:18
sparse coding

00:28:15 --> 00:28:20
uh right and and so these classes of

00:28:17 --> 00:28:23
models are very similar to each other.

00:28:20 --> 00:28:25
So given a new image I can say well this

00:28:22 --> 00:28:27
new image is made up by some combination

00:28:24 --> 00:28:30
of these learned weights or these

00:28:26 --> 00:28:32
learned bases. Uh and the numbers here

00:28:29 --> 00:28:35
are given by the probabilities that each

00:28:31 --> 00:28:37
particular edge is present in the data.

00:28:34 --> 00:28:39
Um in terms of how we learn these

00:28:36 --> 00:28:42
models, uh one one thing I want to make

00:28:38 --> 00:28:45
uh uh uh another point I should make

00:28:41 --> 00:28:48
here is that given an input I can

00:28:44 --> 00:28:50
actually quickly infer what features I'm

00:28:47 --> 00:28:52
seeing in the image. So that operation

00:28:49 --> 00:28:53
is is is very easy to do unlike in

00:28:51 --> 00:28:55
sparse coding models. It's it's a little

00:28:52 --> 00:28:56
bit more closer to an autoenccoder.

00:28:54 --> 00:28:58
Given the data, I can actually tell you

00:28:55 --> 00:29:00
what features are present in my in my

00:28:58 --> 00:29:01
input, which is very important for

00:28:59 --> 00:29:03
things like information retrieval or

00:29:00 --> 00:29:06
classifying images because you need to

00:29:02 --> 00:29:07
do it uh you need to do it fast. How do

00:29:05 --> 00:29:09
we learn these models? Let me just give

00:29:06 --> 00:29:11
you an intuition maybe a little bit of

00:29:08 --> 00:29:14
math behind uh how we learn these

00:29:11 --> 00:29:16
models. If I give you set of training

00:29:13 --> 00:29:18
examples and I want to learn model

00:29:15 --> 00:29:20
parameters, I can maximize the log

00:29:17 --> 00:29:22
likelihood objective, right? And you've

00:29:19 --> 00:29:24
probably seen that uh uh in these

00:29:21 --> 00:29:26
tutorials. Maximum likelihood objective

00:29:23 --> 00:29:28
is essentially nothing more than saying

00:29:26 --> 00:29:31
I want to make sure that the probability

00:29:27 --> 00:29:32
of observing these images is as high as

00:29:30 --> 00:29:34
possible. Right? So finding the

00:29:32 --> 00:29:37
parameter so that the probability of

00:29:33 --> 00:29:40
observing uh what I'm seeing is is high

00:29:36 --> 00:29:42
and that's why you're maximizing the the

00:29:39 --> 00:29:43
uh likelihood objective or the log of

00:29:41 --> 00:29:46
the likelihood objective would just you

00:29:42 --> 00:29:47
know take a product into the sum. You

00:29:45 --> 00:29:49
take the derivative. There's a little

00:29:46 --> 00:29:51
bit of algebra. I promise you it's not

00:29:48 --> 00:29:55
uh it's not very difficult. It's like

00:29:50 --> 00:29:57
you know second year college uh algebra

00:29:54 --> 00:30:00
you differentiate and you basically have

00:29:56 --> 00:30:03
this uh uh uh learning rule which is the

00:29:59 --> 00:30:06
difference between two terms. The first

00:30:02 --> 00:30:08
erm you can think of it as looking at

00:30:05 --> 00:30:10
uh sufficient statistics so called

00:30:07 --> 00:30:12
sufficient statistics driven by the data

00:30:09 --> 00:30:14
nd the second term is the sufficient

00:30:11 --> 00:30:16
statistics driven by the model. Right?

00:30:13 --> 00:30:18
And maybe I can parse it out. What does

00:30:15 --> 00:30:20
that mean? Intuitively, what that means

00:30:17 --> 00:30:23
is that you look at the correlations you

00:30:19 --> 00:30:24
see in the data, right? And then you

00:30:22 --> 00:30:26
look at the correlations that the model

00:30:23 --> 00:30:28
is telling you it's it should be and

00:30:25 --> 00:30:30
you're trying to match the two, right?

00:30:28 --> 00:30:32
That's what the learning is trying to

00:30:29 --> 00:30:34
do, right? It's trying to match the

00:30:31 --> 00:30:36
correlations that you see in the data,

00:30:34 --> 00:30:37
right? So the model is actually

00:30:35 --> 00:30:40
respecting the statistics that you see

00:30:36 --> 00:30:41
in the data. uh but it turns out that

00:30:39 --> 00:30:43
he second term is very difficult to

00:30:40 --> 00:30:46
compute and it's precisely because the

00:30:42 --> 00:30:48
space of all possible images is so

00:30:45 --> 00:30:50
highdimensional that you need to figure

00:30:47 --> 00:30:53
out or use some kind of approximate uh

00:30:49 --> 00:30:54
learning algorithms to do that right so

00:30:52 --> 00:30:55
you have these difference between these

00:30:53 --> 00:30:57
two terms the first term is easy to

00:30:54 --> 00:30:59
compute it turns out because of a

00:30:56 --> 00:31:02
particular structure of the model uh

00:30:58 --> 00:31:04
right and we can actually uh do it uh do

00:31:01 --> 00:31:06
it explicitly the second term is the

00:31:03 --> 00:31:08
difficult difficult one to compute right

00:31:05 --> 00:31:10
so it sort of requires you know summing

00:31:07 --> 00:31:12
over all possible configurations, all

00:31:09 --> 00:31:15
possible images that that that that you

00:31:11 --> 00:31:18
could possibly uh see. So it's this term

00:31:14 --> 00:31:19
is intractable. And what a lot of

00:31:17 --> 00:31:21
different algorithms are doing and we'll

00:31:18 --> 00:31:24
see that over and over again is using

00:31:20 --> 00:31:25
so-called Monte Carlo sampling or markup

00:31:23 --> 00:31:28
chain Monte Carlo sampling or Monte

00:31:24 --> 00:31:29
Carlo estimation. Uh right so let me

00:31:27 --> 00:31:31
give you an intuition what what this

00:31:28 --> 00:31:34
term is doing and that's a general trick

00:31:30 --> 00:31:36
for you know approximating exponential

00:31:33 --> 00:31:40
sums. Right? There's a whole sub field

00:31:35 --> 00:31:42
in in uh in uh statistics that's

00:31:39 --> 00:31:45
basically dedicated to how do we

00:31:41 --> 00:31:46
approximate exponential sums. In fact,

00:31:44 --> 00:31:47
if you could do that, if you could solve

00:31:45 --> 00:31:51
that problem, you could solve a lot of

00:31:46 --> 00:31:53
problems in in machine learning. Um and

00:31:50 --> 00:31:55
the idea is very simple actually. The

00:31:52 --> 00:31:58
idea is to say well you're going to be

00:31:54 --> 00:32:00
replacing the average uh by sampling. Um

00:31:57 --> 00:32:02
and there's something that's called GIP

00:31:59 --> 00:32:04
sampling mark of chain Monte Carlo which

00:32:02 --> 00:32:07
is essentially does something very

00:32:03 --> 00:32:09
simple. It basically says well start

00:32:06 --> 00:32:11
with the data sample the states of the

00:32:08 --> 00:32:13
latent variables you know sample the

00:32:10 --> 00:32:14
data sample the states of the lat sample

00:32:12 --> 00:32:16
the data from these conditional

00:32:14 --> 00:32:18
distributions something that you can

00:32:15 --> 00:32:21
compute explicitly right uh and that's a

00:32:17 --> 00:32:22
general trick you know much like in

00:32:20 --> 00:32:23
sparse coding we you know we're

00:32:21 --> 00:32:26
optimizing for the basis when we're

00:32:22 --> 00:32:28
optimizing for the coefficients here

00:32:25 --> 00:32:29
you're inferring the coefficients then

00:32:27 --> 00:32:31
you you know inferring what the data

00:32:28 --> 00:32:33
should look like and so forth uh and

00:32:30 --> 00:32:35
then you can just run a markup chain and

00:32:32 --> 00:32:38
sort of approximate

00:32:34 --> 00:32:40
uh you know this exponential

00:32:37 --> 00:32:41
sum. So you start with the data, you

00:32:39 --> 00:32:44
sample the states of the hidden

00:32:40 --> 00:32:46
variables, you resample the data and so

00:32:43 --> 00:32:49
forth. And the only problem with a lot

00:32:45 --> 00:32:52
of these methods is that you know you

00:32:48 --> 00:32:54
need to run them up to infinity

00:32:51 --> 00:32:56
uh to guarantee that you're sort of

00:32:53 --> 00:32:59
getting the right thing. Uh and so

00:32:56 --> 00:33:02
bviously you know you will never run

00:32:58 --> 00:33:03
them you know infinite uh you don't have

00:33:01 --> 00:33:06
time to do that. So there's a very

00:33:02 --> 00:33:07
clever algorithm that uh a contrastive

00:33:05 --> 00:33:10
divergence algorithm that was developed

00:33:06 --> 00:33:13
by Hinton back in 2002 and it was very

00:33:09 --> 00:33:14
clever. It basically said well instead

00:33:12 --> 00:33:16
of running this thing up to infinity,

00:33:13 --> 00:33:20
run it for one

00:33:15 --> 00:33:21
step, right? Um and so you're just

00:33:19 --> 00:33:24
running it for one step. You start with

00:33:20 --> 00:33:26
a training vector. You uh you update the

00:33:23 --> 00:33:28
hidden units. You update all the visible

00:33:25 --> 00:33:29
units again. So that's your

00:33:27 --> 00:33:31
econstruction. Much like in

00:33:28 --> 00:33:33
autoenccoder, you reconstruct your data.

00:33:30 --> 00:33:34
uh you update the hidden units again and

00:33:32 --> 00:33:36
then you just update the model

00:33:33 --> 00:33:38
parameters which is just looking at you

00:33:35 --> 00:33:41
know empirically the statistics between

00:33:37 --> 00:33:42
the data and the model right very

00:33:40 --> 00:33:45
similar to what the autoenccoder is

00:33:42 --> 00:33:47
doing but slight slight differences and

00:33:44 --> 00:33:50
implementation is basically takes about

00:33:46 --> 00:33:52
like 10 lines of MATLAB code I suspect

00:33:49 --> 00:33:53
it's going to be you know two lines in

00:33:51 --> 00:33:56
TensorFlow although I don't think

00:33:52 --> 00:33:59
TensorFlow folks implemented BS machines

00:33:55 --> 00:34:03
yet that would be my request

00:33:58 --> 00:34:05
um uh But uh you can extend these models

00:34:02 --> 00:34:07
to dealing with real value data right so

00:34:04 --> 00:34:10
whenever you're dealing with images for

00:34:06 --> 00:34:12
example and that's just a little change

00:34:09 --> 00:34:14
to the definition of the model and your

00:34:11 --> 00:34:16
conditional probabilities here just

00:34:13 --> 00:34:18
going to be bunch of Gaussian so that

00:34:15 --> 00:34:20
basically means that given the features

00:34:17 --> 00:34:22
ample me the space of images and I can

00:34:19 --> 00:34:25
sample you give you you know real real

00:34:21 --> 00:34:27
valued images uh the structure of the

00:34:24 --> 00:34:30
model remains the same if you train this

00:34:26 --> 00:34:33
model on you know the the these images

00:34:29 --> 00:34:34
you sort tend to find edges uh something

00:34:32 --> 00:34:36
similar again to what you'd see in

00:34:34 --> 00:34:39
sparse coding in ICA independent

00:34:35 --> 00:34:41
component analysis model autoenccoders

00:34:38 --> 00:34:43
and such uh and again you can sort of

00:34:40 --> 00:34:45
say well every single image is made up

00:34:42 --> 00:34:47
by some some linear combination of these

00:34:44 --> 00:34:49
basis functions you can also extend

00:34:46 --> 00:34:52
these models to dealing with count data

00:34:48 --> 00:34:54
right if you're dealing with documents

00:34:51 --> 00:34:57
uh in this case again a slight change to

00:34:53 --> 00:35:01
the model uh K here denotes your

00:34:56 --> 00:35:02
vocabulary size and D key denotes number

00:35:00 --> 00:35:04
of words that you're seeing in your

00:35:01 --> 00:35:06
document. Right? So if you you know it's

00:35:03 --> 00:35:07
a bag of words uh representation

00:35:05 --> 00:35:09
and the conditional here is given by

00:35:06 --> 00:35:12
so-called softmax distribution much like

00:35:08 --> 00:35:13
what you've seen in in in uh in the

00:35:11 --> 00:35:16
previous classes when you know the

00:35:12 --> 00:35:18
distribution of a possible words right

00:35:15 --> 00:35:20
um and the parameters here W's you can

00:35:17 --> 00:35:22
think of them as you know something

00:35:19 --> 00:35:26
similar to as what work to embedding

00:35:21 --> 00:35:29
would do um and so if you apply it to

00:35:25 --> 00:35:31
you know again some some of uh uh data

00:35:28 --> 00:35:33
sets you know you tend to find

00:35:30 --> 00:35:34
reasonable features

00:35:32 --> 00:35:36
Right? So you tend to find you know

00:35:33 --> 00:35:39
features about Russia, about US, about

00:35:35 --> 00:35:41
computers and so forth. Right? So much

00:35:38 --> 00:35:42
like you found these representations

00:35:40 --> 00:35:45
little edges. So every image is made up

00:35:42 --> 00:35:49
by some combination of these edges in in

00:35:44 --> 00:35:50
case of uh documents or web pages

00:35:48 --> 00:35:52
you're saying it's the same thing. It's

00:35:49 --> 00:35:54
just made up some linear combination of

00:35:51 --> 00:35:56
these learned topics. Every single

00:35:53 --> 00:35:58
document is made up by some combination

00:35:55 --> 00:36:00
of these topics. Right? You can also

00:35:57 --> 00:36:02
look at onestep reconstruction. So you

00:35:59 --> 00:36:04
can basically say well how can I find

00:36:01 --> 00:36:06
similarity between the words. So if I

00:36:03 --> 00:36:08
show you chocolate cake, I infer the

00:36:05 --> 00:36:10
states of hidden units and then I

00:36:07 --> 00:36:12
reconstruct back uh the distribution of

00:36:09 --> 00:36:14
a possible words. You know, it tells me,

00:36:11 --> 00:36:15
you know, chocolate cake, cake,

00:36:13 --> 00:36:18
chocolate, sweet, dessert, cupcake,

00:36:14 --> 00:36:19
food, sugar, and so forth, right? I

00:36:17 --> 00:36:21
particularly like the one about the

00:36:18 --> 00:36:24
flower high and then there is a Japanese

00:36:20 --> 00:36:29
sign. Um the model sort of generates

00:36:23 --> 00:36:31
flower, Japan, Sakura, Blossom, Tokyo,

00:36:28 --> 00:36:34
right? So it sort of picks up again on

00:36:30 --> 00:36:35
low-level correlations that you see in

00:36:33 --> 00:36:36
your data. You can also apply these

00:36:34 --> 00:36:40
kinds of models to collaborative

00:36:36 --> 00:36:42
filtering where every single observed

00:36:39 --> 00:36:45
variable you can model, you know, can

00:36:41 --> 00:36:49
represent um a user rating for a

00:36:44 --> 00:36:51
particular movie, right? So every single

00:36:48 --> 00:36:53
user would rate a certain subset of

00:36:50 --> 00:36:55
movies and so you can represent it as as

00:36:52 --> 00:36:57
the state of visibility and your hidden

00:36:54 --> 00:37:00
states can represent user preferences,

00:36:56 --> 00:37:03
what they are. uh and on the Netflix

00:36:59 --> 00:37:04
data set if you look at the latent space

00:37:02 --> 00:37:06
uh that the model is learning you know

00:37:04 --> 00:37:09
some of these hidden variables are

00:37:05 --> 00:37:11
capturing specific movie genre uh right

00:37:08 --> 00:37:14
so for example there is there's actually

00:37:10 --> 00:37:16
one hidden union dedicated to Michael

00:37:13 --> 00:37:18
Moore's movies uh right so it's

00:37:15 --> 00:37:19
ort of like very strong I think it's

00:37:17 --> 00:37:21
ort of you know either people like it

00:37:18 --> 00:37:23
or hate it so there are a few hidden

00:37:20 --> 00:37:25
units specifically dedicated to that but

00:37:22 --> 00:37:26
it also finds interesting things like

00:37:24 --> 00:37:28
you know action movies and so forth

00:37:25 --> 00:37:30
right so it finds that particular

00:37:27 --> 00:37:32
structure ing the data. So you can model

00:37:29 --> 00:37:34
different kinds of modality, real value

00:37:31 --> 00:37:38
data, you can model count

00:37:33 --> 00:37:39
data, multinnomials and it's very easy

00:37:37 --> 00:37:41
to infer the states of the hidden

00:37:38 --> 00:37:42
variables. So that's given just the

00:37:40 --> 00:37:43
product of of logistic functions and

00:37:41 --> 00:37:45
that's very important in a lot of

00:37:42 --> 00:37:47
different applications. Given the input

00:37:44 --> 00:37:50
I can quickly tell you what topics I see

00:37:46 --> 00:37:52
in the data, right? Um one thing that I

00:37:49 --> 00:37:54
want to point out and that's an

00:37:51 --> 00:37:56
important point is a lot of these models

00:37:53 --> 00:37:58
can be viewed as product models. uh

00:37:55 --> 00:38:00
sometimes people call them product of

00:37:57 --> 00:38:03
experts uh and this is because of the

00:37:59 --> 00:38:05
following uh sort of the following

00:38:02 --> 00:38:07
intuition. If I write down the joint

00:38:04 --> 00:38:09
distribution of my hidden observed

00:38:06 --> 00:38:12
variables, I can write it down in this

00:38:08 --> 00:38:15
ort of log linear form, right? But if I

00:38:11 --> 00:38:18
sum out or integrate out the states of

00:38:14 --> 00:38:20
the hidden variables, I have bunch of uh

00:38:17 --> 00:38:23
a product of a whole bunch of functions,

00:38:19 --> 00:38:25
right? So what is what does it mean?

00:38:22 --> 00:38:27
What what's the intuition here? So let

00:38:24 --> 00:38:29
me show you an example. Suppose the

00:38:26 --> 00:38:31
model finds these specific topics,

00:38:28 --> 00:38:33
right? And suppose I'm going to be

00:38:30 --> 00:38:36
telling you that the document contains

00:38:32 --> 00:38:38
topic government, corruption and mafia.

00:38:35 --> 00:38:41
Then the word Sylvia Berlusone will have

00:38:37 --> 00:38:43
ry high probability, right? I guess

00:38:40 --> 00:38:45
does anybody know everybody knows who

00:38:42 --> 00:38:47
Sylvia is? Sylvia Berusone, right? He's

00:38:44 --> 00:38:49
had like, you know, he's in head of the

00:38:46 --> 00:38:51
government. He's connected to mafia.

00:38:48 --> 00:38:53
He's uh he's very corrupt, was corrupt.

00:38:50 --> 00:38:55
And I guess I should add like a banga

00:38:52 --> 00:38:57
parties here, right? Then it will

00:38:54 --> 00:39:00
become completely clear what I'm talking

00:38:56 --> 00:39:03
about. Uh but then you know one point I

00:38:59 --> 00:39:04
want to make here is that uh it's it's

00:39:02 --> 00:39:07
you know you can think of these models

00:39:03 --> 00:39:09
as a product. Each hidden variable

00:39:06 --> 00:39:12
defines a distribution of a possible

00:39:08 --> 00:39:14
words over possible topics and once you

00:39:11 --> 00:39:15
take the intersection of these

00:39:13 --> 00:39:17
distributions you can be very precise

00:39:14 --> 00:39:20
about what is it that you're modeling.

00:39:16 --> 00:39:23
Right? So that's unlike uh uh generally

00:39:19 --> 00:39:26
topic models or lat allocation models

00:39:22 --> 00:39:29
where you're actually using um

00:39:25 --> 00:39:31
ixture like uh uh uh approach and then

00:39:28 --> 00:39:33
typically these models do perform far

00:39:30 --> 00:39:35
better than uh traditional mixture based

00:39:32 --> 00:39:37
models and this comes to the point of

00:39:34 --> 00:39:40
local versus global uh versus

00:39:36 --> 00:39:41
distributed representations right in in

00:39:39 --> 00:39:43
a lot of different algorithms you know

00:39:40 --> 00:39:46
even unsupervised learning algorithms

00:39:42 --> 00:39:48
are just clustering um you typically

00:39:45 --> 00:39:51
have some you partitioning space and

00:39:47 --> 00:39:54
you're finding local uh uh prototypes,

00:39:50 --> 00:39:55
right? And the number of parameters for

00:39:53 --> 00:39:57
each you have basically, you know,

00:39:54 --> 00:39:59
parameters for each region. The number

00:39:56 --> 00:40:03
of regions typically grow with linearly

00:39:58 --> 00:40:05
with the number of parameters. But in um

00:40:02 --> 00:40:07
odels like factor models, PCA,

00:40:04 --> 00:40:09
restricted Bman machines, deep models,

00:40:06 --> 00:40:10
you typically have distributed

00:40:08 --> 00:40:12
representations, right? And what's the

00:40:09 --> 00:40:15
idea here? The idea here is that if I

00:40:11 --> 00:40:17
show you the two inputs, right, each

00:40:14 --> 00:40:19
particular neuron can, you know,

00:40:16 --> 00:40:22
differentiate between two parts of the

00:40:18 --> 00:40:24
plane. Given the second one, you know, I

00:40:21 --> 00:40:26
can partition it again. Given the third

00:40:23 --> 00:40:28
hidden variable, you can partition it

00:40:25 --> 00:40:30
again. So, you can see that every single

00:40:27 --> 00:40:33
neuron will be affecting lots of

00:40:29 --> 00:40:34
different regions. And that's the idea

00:40:32 --> 00:40:36
behind uh distributed representations

00:40:33 --> 00:40:37
because every single parameter is

00:40:35 --> 00:40:39
affecting many many regions, not just

00:40:36 --> 00:40:41
he local region. And so the number of

00:40:38 --> 00:40:43
regions grow roughly exponentially with

00:40:40 --> 00:40:46
e number of parameters. Right? So

00:40:42 --> 00:40:47
that's the differences uh uh between

00:40:45 --> 00:40:50
these these two classes of models.

00:40:46 --> 00:40:52
Important to know about them. Now let me

00:40:49 --> 00:40:54
jump uh and quickly tell you a little

00:40:51 --> 00:40:56
bit of inspiration behind what what can

00:40:53 --> 00:40:59
we build with these models. Right? As

00:40:56 --> 00:41:01
we've seen with convolutional networks,

00:40:58 --> 00:41:04
the first layer would typically learn

00:41:00 --> 00:41:06
some lowlevel uh features like edges or

00:41:03 --> 00:41:08
you know if if you're working with a

00:41:05 --> 00:41:11
word uh words will typically learn some

00:41:07 --> 00:41:12
low-level structure and the hope is that

00:41:10 --> 00:41:14
he high level features will start

00:41:11 --> 00:41:18
picking up some high level structure as

00:41:14 --> 00:41:19
you are building and these kinds of

00:41:17 --> 00:41:21
models can be built in completely

00:41:18 --> 00:41:22
unsupervised way because what you're

00:41:20 --> 00:41:23
trying to do is you're trying to model

00:41:21 --> 00:41:26
the data. You're trying to model the

00:41:22 --> 00:41:28
distribution of uh of the data. You can

00:41:25 --> 00:41:32
write down the probability distribution

00:41:27 --> 00:41:34
for this model. It's known as a a boss

00:41:31 --> 00:41:35
machine model. Um you have dependencies

00:41:33 --> 00:41:39
between hidden variables. So now

00:41:34 --> 00:41:42
introducing some extra uh um you know

00:41:38 --> 00:41:44
some extra uh layers and dependencies

00:41:41 --> 00:41:46
between those layers. And if we look at

00:41:43 --> 00:41:48
he equation, the first part of the

00:41:45 --> 00:41:50
quation is basically the same as what

00:41:47 --> 00:41:51
we had with restricted bolts machine.

00:41:49 --> 00:41:53
And then the second and third part of

00:41:50 --> 00:41:55
the equation essentially modeling

00:41:52 --> 00:41:57
dependencies between you know the first

00:41:54 --> 00:41:58
and the second hidden layer and the

00:41:56 --> 00:42:00
third hidden

00:41:57 --> 00:42:02
layer right there is also a very natural

00:41:59 --> 00:42:04
notion of bottom up and top down. So if

00:42:01 --> 00:42:07
I want to see what's the probability of

00:42:03 --> 00:42:09
a particular unit being taking value one

00:42:06 --> 00:42:11
it's really depend on what's coming from

00:42:08 --> 00:42:13
below and what's coming from above. So

00:42:10 --> 00:42:16
there has to be some consensus in the

00:42:12 --> 00:42:18
model to say ah yes what I'm seeing in

00:42:15 --> 00:42:20
the image and what my model believes the

00:42:17 --> 00:42:23
overall structure should be should be in

00:42:19 --> 00:42:25
agreement. Um right and so in this case

00:42:22 --> 00:42:27
of course in this case hidden variables

00:42:24 --> 00:42:29
become dependent even when you condition

00:42:26 --> 00:42:32
on the data. So these kinds of models

00:42:28 --> 00:42:34
we'll see a lot uh is you're introducing

00:42:31 --> 00:42:37
more flexibility you're introducing more

00:42:33 --> 00:42:38
structure but then learning becomes uh

00:42:36 --> 00:42:41
much more difficult right you have to

00:42:37 --> 00:42:44
deal you know how do you do inference in

00:42:40 --> 00:42:47
these models um right now let me give

00:42:43 --> 00:42:48
you an intuition of what how can we

00:42:46 --> 00:42:52
learn these model what's the maximum

00:42:47 --> 00:42:53
likelihood uh estimator doing here well

00:42:51 --> 00:42:54
if I differentiate this model with

00:42:52 --> 00:42:57
respect to parameters I basically run

00:42:54 --> 00:42:58
into the same learning rule and it's the

00:42:56 --> 00:43:00
same learning rule you see whatever

00:42:57 --> 00:43:01
you're working with undirected graphical

00:42:59 --> 00:43:02
models, factor graphs, conditional

00:43:00 --> 00:43:05
random fields. You might have heard

00:43:01 --> 00:43:06
about those uh those ones, it really is

00:43:04 --> 00:43:08
just trying to look at the statistics

00:43:06 --> 00:43:10
driven by the data, correlations that

00:43:07 --> 00:43:12
you see in the data and the correlations

00:43:09 --> 00:43:13
that the model is telling you it's

00:43:11 --> 00:43:14
eeing in the data and you're just

00:43:12 --> 00:43:16
rying to match the two, right? That's

00:43:13 --> 00:43:19
exactly what's happening in that

00:43:15 --> 00:43:21
particular equation. Uh right, but the

00:43:18 --> 00:43:22
first term is no longer factorial. So

00:43:20 --> 00:43:24
it's you know you have to do some

00:43:21 --> 00:43:26
approximation with these models. But let

00:43:23 --> 00:43:29
me give you notation what what each term

00:43:25 --> 00:43:30
is doing. So suppose I have some data

00:43:28 --> 00:43:33
right and I get to observe these

00:43:29 --> 00:43:35
characters. Well, what I can do is I

00:43:32 --> 00:43:38
really want to tell the model this is

00:43:34 --> 00:43:39
real right these are real characters. So

00:43:37 --> 00:43:42
I want to put some probability mass

00:43:38 --> 00:43:45
around them and say these are real uh

00:43:41 --> 00:43:46
and then there is some sort of uh data

00:43:44 --> 00:43:48
point that looks like this just bunch of

00:43:45 --> 00:43:50
pixels on and off and I really want to

00:43:47 --> 00:43:53
tell my model that you

00:43:49 --> 00:43:56
know put almost zero probability on

00:43:52 --> 00:43:58
this. This is not real. uh right and so

00:43:55 --> 00:44:00
the first term is exactly trying to do

00:43:57 --> 00:44:01
that. The first term is just trying to

00:43:59 --> 00:44:03
say put the probability mass where you

00:44:00 --> 00:44:05
see the data and the second term is

00:44:02 --> 00:44:07
effectively trying to say well look at

00:44:04 --> 00:44:09
his entire exponential space and just

00:44:06 --> 00:44:11
say no everything else is not real just

00:44:08 --> 00:44:14
he real thing is what I'm seeing in my

00:44:10 --> 00:44:15
data and so you can use sort of advanced

00:44:13 --> 00:44:17
techniques for doing that there's a

00:44:14 --> 00:44:19
class of uh algorithms called

00:44:16 --> 00:44:21
variational inference something that's

00:44:18 --> 00:44:23
called stocastic approximation which is

00:44:20 --> 00:44:24
multicolor based inference I'm not going

00:44:22 --> 00:44:26
to go into these techniques but in

00:44:23 --> 00:44:29
general you can you can train these

00:44:25 --> 00:44:30
models so one question is How good are

00:44:28 --> 00:44:32
they? All right, because there's a lot

00:44:29 --> 00:44:34
of approximations that go into these

00:44:31 --> 00:44:36
models. Um, so what I'm going to do is

00:44:33 --> 00:44:39
if you have if you haven't seen it, I'm

00:44:35 --> 00:44:41
going to show you two panels. On one

00:44:38 --> 00:44:43
panel, you will see the real data. On

00:44:40 --> 00:44:45
another panel, you'll see data simulated

00:44:42 --> 00:44:47
by the model or the fake data. And you

00:44:44 --> 00:44:49
have to tell me which one is which.

00:44:46 --> 00:44:51
Okay. So again, these are handwritten

00:44:48 --> 00:44:53
characters coming from, you know,

00:44:50 --> 00:44:54
alphabets around the world. How many of

00:44:52 --> 00:44:57
you think this is simulated and and the

00:44:53 --> 00:45:01
other part was real? Honestly.

00:44:56 --> 00:45:03
Okay, some what about the other way

00:45:00 --> 00:45:05
around? I get half and half, which is

00:45:02 --> 00:45:07
great.

00:45:04 --> 00:45:10
Um, if you look at these images a little

00:45:06 --> 00:45:12
bit more carefully, you will see the

00:45:09 --> 00:45:13
difference, right? So, you will see that

00:45:12 --> 00:45:17
his is

00:45:13 --> 00:45:18
imulated and this is real, right?

00:45:16 --> 00:45:20
Because if you look at the real data,

00:45:17 --> 00:45:22
it's much crisper. There's more

00:45:19 --> 00:45:23
diversity. when you're simulating the

00:45:21 --> 00:45:25
data, there's a lot of structure in the

00:45:22 --> 00:45:26
simulated characters, but some, you

00:45:24 --> 00:45:28
know, sometimes they look a little bit

00:45:25 --> 00:45:31
fuzzy and there isn't as much

00:45:27 --> 00:45:34
diversity, right? And I've learned that

00:45:30 --> 00:45:35
rick from uh from my uh neuroscience

00:45:33 --> 00:45:37
friends. If I show you it quickly

00:45:34 --> 00:45:41
enough, you won't see the difference,

00:45:36 --> 00:45:44
right? Um and and uh uh you know, if if

00:45:40 --> 00:45:45
you're using these models for for for

00:45:43 --> 00:45:47
classifying, you know, you can do proper

00:45:44 --> 00:45:49
analysis, which is to say given a new

00:45:46 --> 00:45:50
character, you find infer the states of

00:45:48 --> 00:45:53
the latent variables, hidden variables.

00:45:49 --> 00:45:55
if I classify based on that how good are

00:45:52 --> 00:45:56
they and and they are uh they're you

00:45:54 --> 00:45:58
know they're much better than some of

00:45:55 --> 00:46:00
the existing techniques. This is another

00:45:57 --> 00:46:02
example you know trying to generate 3D

00:45:59 --> 00:46:05
objects. This is sort of a to data sets

00:46:02 --> 00:46:06
and later on I'll show you some you know

00:46:04 --> 00:46:08
bigger advances that's been happening in

00:46:05 --> 00:46:10
the last few years. This was done a few

00:46:07 --> 00:46:13
years ago you know if you look at the

00:46:09 --> 00:46:14
space of generated samples uh they you

00:46:12 --> 00:46:16
know they sort of

00:46:13 --> 00:46:19
uh you know obviously you can see the

00:46:15 --> 00:46:21
difference. Here's here's P. Look at

00:46:18 --> 00:46:24
his particular image. Right? This image

00:46:20 --> 00:46:26
looks like car with wings, don't you

00:46:23 --> 00:46:28
think? Right. So there's sometimes it

00:46:25 --> 00:46:31
can sort of simulate things that are not

00:46:27 --> 00:46:33
necessarily realistic. And for some

00:46:30 --> 00:46:34
reason it just doesn't generate donkeys

00:46:32 --> 00:46:36
and elephants too often, right? But it

00:46:33 --> 00:46:38
generates people with guns more often.

00:46:35 --> 00:46:40
Like if you look at here and here and

00:46:37 --> 00:46:42
that again has to do with the

00:46:39 --> 00:46:45
fact that you know you're exploring this

00:46:41 --> 00:46:47
exponential space of possible uh images

00:46:44 --> 00:46:49
and it's sometimes it's very hard to

00:46:46 --> 00:46:53
assign the right probabilities to

00:46:48 --> 00:46:54
different parts of the space. Um right

00:46:52 --> 00:46:55
and then obviously you can do things

00:46:53 --> 00:46:57
like pattern completion. So given half

00:46:54 --> 00:46:59
of the image can you complete the

00:46:56 --> 00:47:00
remaining half. So the second one shows

00:46:58 --> 00:47:02
what the completions look like and the

00:46:59 --> 00:47:05
last one is what the truth is. So you

00:47:01 --> 00:47:06
can do you can do these things. So where

00:47:04 --> 00:47:08
lse can we use these models? These are

00:47:05 --> 00:47:11
sort of toish examples. But where else?

00:47:08 --> 00:47:13
Let me show you one example uh where

00:47:10 --> 00:47:16
these models can potentially succeed

00:47:12 --> 00:47:18
which is trying to model the space of uh

00:47:15 --> 00:47:21
the multimodel space which is the space

00:47:17 --> 00:47:23
of you know images and text or you know

00:47:20 --> 00:47:24
generally if you look at the data it's

00:47:22 --> 00:47:27
not just single source. It's a

00:47:23 --> 00:47:28
collection of different modalities. Uh

00:47:26 --> 00:47:31
right. So how can we take all of these

00:47:28 --> 00:47:33
modalities uh into account? And this is

00:47:30 --> 00:47:35
really just the idea of you know given

00:47:32 --> 00:47:37
images and text can you actually find a

00:47:34 --> 00:47:41
concept that relates these two different

00:47:36 --> 00:47:42
sources of uh sources of data. Uh and

00:47:40 --> 00:47:45
there are a few challenges and that's

00:47:41 --> 00:47:46
why you know models like genative models

00:47:44 --> 00:47:49
uh sometimes proistic models could be

00:47:45 --> 00:47:51
useful. In general one of the biggest

00:47:48 --> 00:47:53
challenge we've seen is that typically

00:47:50 --> 00:47:55
when you're working with images and text

00:47:52 --> 00:47:56
hese are very different modalities.

00:47:54 --> 00:47:58
Right? If you think about images and

00:47:56 --> 00:48:00
pixel representation, they're very

00:47:57 --> 00:48:03
dense. If you're looking at text, it's

00:47:59 --> 00:48:05
typically very sparse, right? So, it's

00:48:02 --> 00:48:07
very difficult to learn these crossmodel

00:48:04 --> 00:48:10
features from low-level representation.

00:48:06 --> 00:48:12
Perhaps a bigger challenge is that uh a

00:48:09 --> 00:48:14
lot of times we see data that's very

00:48:11 --> 00:48:15
noisy, right? Sometimes it's just

00:48:13 --> 00:48:18
non-existent given an image there is no

00:48:14 --> 00:48:20
text or if you look at the first image

00:48:17 --> 00:48:23
you know a lot of the tags about is what

00:48:19 --> 00:48:24
kind of camera was used to uh uh to to

00:48:22 --> 00:48:26
describe that particular image which

00:48:24 --> 00:48:29
doesn't really tell us anything about

00:48:25 --> 00:48:31
he image itself right and these are uh

00:48:28 --> 00:48:33
these would be the text generated by

00:48:30 --> 00:48:35
a version of a bolzman machine model

00:48:32 --> 00:48:38
sort of does you know uh samples what

00:48:34 --> 00:48:41
the tag should look like and this

00:48:37 --> 00:48:43
the the idea again is very simple if

00:48:40 --> 00:48:44
you just build a simple representation

00:48:42 --> 00:48:46
Given images and given text, you just

00:48:43 --> 00:48:48
ry to find what the common

00:48:45 --> 00:48:50
representation is, it's very difficult

00:48:47 --> 00:48:52
o learn these cross model features. But

00:48:49 --> 00:48:55
if you actually build a hierarchical

00:48:51 --> 00:48:56
model, so you start with representation,

00:48:54 --> 00:48:57
you know, you can build a Gaussian

00:48:55 --> 00:48:59
model, replicated softmax model, you can

00:48:56 --> 00:49:03
sort of build up that representation,

00:48:58 --> 00:49:05
then it turns out it's much more um uh

00:49:02 --> 00:49:07
it gives you much richer representation.

00:49:04 --> 00:49:09
There's also kind of a notion of bottom

00:49:06 --> 00:49:13
up and top down which means that you

00:49:08 --> 00:49:15
know lowlevel uh or or images or or tags

00:49:12 --> 00:49:16
can effectively affect low-level

00:49:14 --> 00:49:18
representation of images and the other

00:49:15 --> 00:49:20
way around. So information flows between

00:49:18 --> 00:49:24
images and text and sort of gets into

00:49:19 --> 00:49:26
some stable state. Uh and this is what

00:49:23 --> 00:49:29
you know the text generated from images

00:49:25 --> 00:49:30
looks like. Some of the examples uh you

00:49:28 --> 00:49:32
know a lot of them a lot of them look

00:49:29 --> 00:49:34
reasonable. uh but more recently with

00:49:32 --> 00:49:38
e advances of covenets this is

00:49:33 --> 00:49:41
probably not uh uh uh that surprising

00:49:37 --> 00:49:44
here's some examples of the model that's

00:49:40 --> 00:49:45
uh not quite doing the right thing right

00:49:43 --> 00:49:47
I particularly like the second one for

00:49:44 --> 00:49:50
some reason it's sort of correlates with

00:49:46 --> 00:49:52
Barack Obama and such and we've sort of

00:49:49 --> 00:49:54
uh the features when we were using this

00:49:51 --> 00:49:56
model we didn't have at that time sort

00:49:53 --> 00:49:58
of image that features right now I don't

00:49:55 --> 00:49:59
hink we would be making these mistakes

00:49:57 --> 00:50:01
but generally speaking you know what

00:49:58 --> 00:50:03
we found in a lot of the data is

00:50:00 --> 00:50:04
There aren't a lot of images of animals,

00:50:02 --> 00:50:06
right? Which brings us to the next

00:50:03 --> 00:50:07
problem is that if you don't see images

00:50:05 --> 00:50:09
of animals, then the mall is confused

00:50:06 --> 00:50:11
because it sees a lot of Obama signs and

00:50:08 --> 00:50:14
these are black and sort of white and

00:50:10 --> 00:50:16
blue sort of signs that appearing a

00:50:13 --> 00:50:19
lot. You can also do images from text

00:50:15 --> 00:50:22
given text or tags can retrieve uh

00:50:18 --> 00:50:24
relevant images. So uh you know this is

00:50:21 --> 00:50:26
the data set itself at about million

00:50:23 --> 00:50:28
images. It's a nice nice data set and

00:50:25 --> 00:50:30
you have you know very noisy tags. uh

00:50:27 --> 00:50:32
and the question is can you actually

00:50:29 --> 00:50:34
learn some representation from uh from

00:50:31 --> 00:50:36
those images one thing that I want to

00:50:33 --> 00:50:38
highlight here is you know we've tried

00:50:36 --> 00:50:40
you know there's a 25,000 labeled images

00:50:38 --> 00:50:42
omebody went and labeled what's going

00:50:39 --> 00:50:44
on in those images what classes we see

00:50:41 --> 00:50:46
in those images and you get some numbers

00:50:43 --> 00:50:47
which is mean average precision but

00:50:45 --> 00:50:50
what's important here is that we found

00:50:46 --> 00:50:52
that if we actually use unlabeled data

00:50:49 --> 00:50:56
nd we pre-train these channels

00:50:51 --> 00:50:57
eparately using a million uh unlabelled

00:50:55 --> 00:50:59
ata points then we can actually get

00:50:56 --> 00:51:01
some performance improvements. So at

00:50:58 --> 00:51:03
least that was a little bit of happy

00:51:00 --> 00:51:06
sign for us to say that you know

00:51:02 --> 00:51:07
unlabelled data can help uh in the

00:51:05 --> 00:51:09
situations where you don't have a lot of

00:51:06 --> 00:51:12
labeled examples. So here it was helping

00:51:08 --> 00:51:14
us it was helping us a lot. Uh and then

00:51:12 --> 00:51:16
once you get into these sort of

00:51:14 --> 00:51:18
representations dealing with text and

00:51:15 --> 00:51:20
images this is one particular thing you

00:51:17 --> 00:51:22
can do and I think Richard pointed out

00:51:20 --> 00:51:26
you know what happens in the space of of

00:51:21 --> 00:51:28
linguistic uh uh regularities. You

00:51:25 --> 00:51:30
can do the same thing with images which

00:51:27 --> 00:51:32
is kind of fun to do. They they they

00:51:29 --> 00:51:33
sometimes work. They don't work all the

00:51:31 --> 00:51:35
time but here's one example. So if I

00:51:32 --> 00:51:37
take that particular image at the top

00:51:34 --> 00:51:40
and I say get the representation of this

00:51:36 --> 00:51:42
image subtract the representation of day

00:51:39 --> 00:51:44
add the night and then find closes

00:51:41 --> 00:51:46
images you get these images right and

00:51:43 --> 00:51:48
then you can do some interesting things

00:51:45 --> 00:51:50
like take these kittens and then say

00:51:47 --> 00:51:52
minus ball plus box you get kittens in

00:51:49 --> 00:51:53
the box right or if you take this

00:51:51 --> 00:51:56
particular image and say minus box plus

00:51:52 --> 00:51:58
ball you get kittens in the ball right

00:51:55 --> 00:52:02
except for this thing that's a

00:51:57 --> 00:52:04
duck so you know that's uh you can sort

00:52:01 --> 00:52:05
of uh get these interesting interesting

00:52:03 --> 00:52:07
representations. Of course, these are

00:52:04 --> 00:52:08
all sort of fun things to look at, but

00:52:06 --> 00:52:10
hey don't really mean much because

00:52:07 --> 00:52:16
we're not specifically optimizing for

00:52:09 --> 00:52:17
those things. Right now, let me u um uh

00:52:15 --> 00:52:19
spend some time also talking about

00:52:16 --> 00:52:21
another class of models. These are known

00:52:18 --> 00:52:23
as Helmho machines and variational

00:52:20 --> 00:52:24
autoenccor. These are the models that

00:52:22 --> 00:52:27
have been sort of popping up in our

00:52:23 --> 00:52:30
community in the last two years. Um

00:52:26 --> 00:52:32
right. So, what is a Helmho machine?

00:52:29 --> 00:52:35
Helmhol's machines was developed back in

00:52:31 --> 00:52:37
95 and it was developed by Hinton and

00:52:34 --> 00:52:41
Peter Diane and Brendan Frey and

00:52:36 --> 00:52:44
Bradford Neil um and it's has this

00:52:40 --> 00:52:47
particular architecture you have a

00:52:43 --> 00:52:49
generative process so given some latent

00:52:46 --> 00:52:50
state you just it's a neural network

00:52:48 --> 00:52:53
it's a stocastic neural network that

00:52:49 --> 00:52:55
generates the input data uh right and

00:52:52 --> 00:52:57
then you have so-called approximate

00:52:54 --> 00:53:00
inference step which is to say given the

00:52:56 --> 00:53:04
data infer approximately what the latent

00:52:59 --> 00:53:06
states uh should look like, right? And

00:53:03 --> 00:53:08
again, it was developed in 95. There's

00:53:05 --> 00:53:11
omething called wake sleep algorithm

00:53:07 --> 00:53:13
and it never worked. Uh basically,

00:53:10 --> 00:53:15
people just said it just doesn't work.

00:53:12 --> 00:53:17
And you know, then we started looking at

00:53:14 --> 00:53:18
restricted both machines on both

00:53:16 --> 00:53:20
machines because they're working a

00:53:17 --> 00:53:22
little bit better. And then two years

00:53:19 --> 00:53:24
ago, people figure out how to make them

00:53:21 --> 00:53:25
work. And so now 10 years later, I'm

00:53:23 --> 00:53:28
going to show you the trick. Now these

00:53:24 --> 00:53:30
models actually working pretty well. Uh

00:53:27 --> 00:53:32
the difference between Helmho's machines

00:53:29 --> 00:53:34
and Debbles machines is very subtle.

00:53:31 --> 00:53:36
They almost look identical. The big

00:53:33 --> 00:53:39
difference between the two is that in

00:53:35 --> 00:53:41
Helmho's machines you have a generative

00:53:38 --> 00:53:43
process that generates the data and you

00:53:40 --> 00:53:44
have a separate recognition model that

00:53:42 --> 00:53:46
ries to recognize what you're seeing in

00:53:44 --> 00:53:48
the data. So you can think of this Q

00:53:46 --> 00:53:50
function as a convolutional neural

00:53:47 --> 00:53:52
network given the data tries to figure

00:53:49 --> 00:53:53
out what the features should look like

00:53:51 --> 00:53:54
and then there's a generative model

00:53:52 --> 00:53:57
given the features it generates the

00:53:54 --> 00:53:59
data. Boltzman machine is is sort of

00:53:56 --> 00:54:00
similar class of models but it has

00:53:58 --> 00:54:02
undirected connections. So you can think

00:53:59 --> 00:54:04
of it as generative and recognition

00:54:01 --> 00:54:06
connections are the same right. So it's

00:54:03 --> 00:54:09
ort of a system that tries you know

00:54:05 --> 00:54:11
reach some equilibrium uh state uh when

00:54:08 --> 00:54:12
you're running it. So it's a little bit

00:54:10 --> 00:54:15
uh the semantics is a little bit

00:54:11 --> 00:54:16
different between these two models. So

00:54:14 --> 00:54:18
what is a variational autoenccoder?

00:54:15 --> 00:54:20
Variational encoder is is a Helmhol

00:54:17 --> 00:54:23
machine. It defines a generative process

00:54:19 --> 00:54:25
in terms of sampling through cascades of

00:54:22 --> 00:54:27
stochastic layers and it's if you look

00:54:24 --> 00:54:29
at it there's just bunch of conditional

00:54:26 --> 00:54:31
probability distributions that you're

00:54:28 --> 00:54:33
defining. So you can generate the data.

00:54:30 --> 00:54:35
So theta here will denote the parameters

00:54:32 --> 00:54:38
of the variational autoenccoders. You

00:54:34 --> 00:54:40
have a number of stoastic layers and

00:54:37 --> 00:54:41
sampling from you know these conditional

00:54:39 --> 00:54:43
probability distributions. You know we

00:54:40 --> 00:54:46
're assuming that we can do it. It's

00:54:42 --> 00:54:49
attractable. It has to be tractable. Uh

00:54:45 --> 00:54:52
but the innovation here is that every

00:54:48 --> 00:54:55
single conditional probability can

00:54:51 --> 00:54:56
actually be you know can can be very

00:54:54 --> 00:54:58
complicated function. It can denote you

00:54:55 --> 00:54:59
know a nonlinear uh you can model

00:54:57 --> 00:55:01
nonlinear relationships. can be a

00:54:58 --> 00:55:03
multi-layer nonlinear neural network,

00:55:00 --> 00:55:06
deterministic neural network, right? So

00:55:02 --> 00:55:07
it becomes fairly uh fairly powerful.

00:55:05 --> 00:55:08
Here's here's an example of you know I

00:55:06 --> 00:55:10
have a stocastic layer, you have a

00:55:07 --> 00:55:11
deterministic layer, you have a

00:55:09 --> 00:55:13
stocastic layer and then you generate

00:55:10 --> 00:55:15
the data, right? So you can

00:55:12 --> 00:55:19
introduce these nonlinearities into

00:55:14 --> 00:55:20
these models. Um and uh this conditional

00:55:18 --> 00:55:24
probability would denote a one layer

00:55:19 --> 00:55:26
neural network. Right? Now I'll show you

00:55:23 --> 00:55:29
some examples. Uh but maybe I can just

00:55:25 --> 00:55:33
give you a little intuition behind what

00:55:28 --> 00:55:36
hese equations uh do. Um and a lot of

00:55:32 --> 00:55:38
uh these kinds of models um learning is

00:55:35 --> 00:55:40
very hard to do. And there's a class of

00:55:37 --> 00:55:41
models called variational learning. And

00:55:39 --> 00:55:43
what the variational learning is trying

00:55:40 --> 00:55:44
to do is it's basically trying to do the

00:55:42 --> 00:55:46
following. Well, I want to maximize the

00:55:43 --> 00:55:49
probability of the data that I observe.

00:55:45 --> 00:55:50
But I cannot do it directly. So instead

00:55:48 --> 00:55:52
what I'm going to do is I'm going to

00:55:49 --> 00:55:55
maximize the so-called variational low

00:55:51 --> 00:55:57
bound which is this term here right and

00:55:54 --> 00:55:59
it's effectively saying well if I take

00:55:56 --> 00:56:03
the log of expectation I can take the

00:55:58 --> 00:56:05
log and push it inside right um and it

00:56:02 --> 00:56:07
urns out just logistically working in

00:56:04 --> 00:56:09
this representation is much easier than

00:56:06 --> 00:56:11
working in this representation right if

00:56:08 --> 00:56:13
you go a little bit through the math

00:56:10 --> 00:56:15
turns out that you can actually you know

00:56:12 --> 00:56:18
optimize this variational bound but you

00:56:14 --> 00:56:19
can't really optimize

00:56:17 --> 00:56:21
uh uh this particular likelihood

00:56:18 --> 00:56:23
objective. It's a little bit surprising

00:56:20 --> 00:56:25
uh for those of you who haven't seen

00:56:22 --> 00:56:27
variational learning and how it's done,

00:56:24 --> 00:56:28
you know, but this one little trick,

00:56:26 --> 00:56:30
this one little so-called Jensen's

00:56:28 --> 00:56:34
inequality actually allows you to solve

00:56:29 --> 00:56:36
a lot of problems. Um right, and the

00:56:33 --> 00:56:38
other way to write the lower bound is to

00:56:35 --> 00:56:39
say well there is a log likelihood

00:56:37 --> 00:56:42
function and something is called KL

00:56:38 --> 00:56:44
divergence which is the distance between

00:56:41 --> 00:56:46
your approximating distribution Q which

00:56:43 --> 00:56:48
is your recognition model and the truth.

00:56:45 --> 00:56:50
uh the truth in these models would be

00:56:47 --> 00:56:52
the true posterior according to your uh

00:56:49 --> 00:56:54
to your model. Uh and it's hard to

00:56:51 --> 00:56:56
ptimize these kinds of models in

00:56:53 --> 00:56:57
general. You know, you're trying to

00:56:55 --> 00:56:58
ptimize your generative model. You're

00:56:56 --> 00:57:01
trying to optimize your recognition

00:56:57 --> 00:57:04
model. And back in 80 uh back in 95,

00:57:00 --> 00:57:06
Hinton and and his students basically

00:57:03 --> 00:57:07
they developed this wake algorithm that

00:57:05 --> 00:57:09
was bunch of different things put

00:57:06 --> 00:57:11
ogether, but it was never quite the

00:57:08 --> 00:57:12
right algorithm because it wasn't really

00:57:10 --> 00:57:14
optimizing anything. It was just bunch

00:57:11 --> 00:57:17
of things alternating.

00:57:13 --> 00:57:20
Um but uh in 2014 there was a beautiful

00:57:16 --> 00:57:21
trick introduced by King Main Welling

00:57:19 --> 00:57:22
and there was a few other groups that

00:57:20 --> 00:57:25
came up with the same trick called

00:57:21 --> 00:57:27
reparization trick right so let me show

00:57:24 --> 00:57:30
you what reparization trick does uh

00:57:26 --> 00:57:32
intuitively so let's say your

00:57:29 --> 00:57:34
ecognition distribution is a Gaussian

00:57:31 --> 00:57:36
right so a Gaussian I can write it as

00:57:34 --> 00:57:38
you know a mean and a variance so this

00:57:36 --> 00:57:42
the mean this is the variance notice

00:57:37 --> 00:57:44
that my mean depends on the layer below

00:57:41 --> 00:57:46
could be very nonlinear function The

00:57:43 --> 00:57:47
variance also depends on the layer

00:57:45 --> 00:57:49
below. So it could also be a nonlinear

00:57:46 --> 00:57:52
function.

00:57:48 --> 00:57:54
Um but what I can do is I can actually

00:57:51 --> 00:57:56
do the following. I can express this

00:57:53 --> 00:57:58
particular Gaussian in terms of

00:57:55 --> 00:58:01
auxiliary variable. So I can say well if

00:57:57 --> 00:58:04
I sample this epsilon from normal 01 a

00:58:00 --> 00:58:08
Gaussian distribution then I can write

00:58:03 --> 00:58:11
this particular h right my my uh my

00:58:07 --> 00:58:13
state in a deterministic way. is just

00:58:10 --> 00:58:15
mean plus

00:58:12 --> 00:58:17
essentially standard deviation or

00:58:14 --> 00:58:20
variance square root of the variance

00:58:16 --> 00:58:21
times this epsilon right so this is just

00:58:19 --> 00:58:23
a simple parameterization of the

00:58:20 --> 00:58:26
Gaussian right I'm just pulling out the

00:58:22 --> 00:58:29
mean and the variance there's no sort of

00:58:25 --> 00:58:31
surprises here so I can write my

00:58:28 --> 00:58:34
recognition model as this Gaussian or I

00:58:30 --> 00:58:36
can write it in terms of noise plus the

00:58:33 --> 00:58:37
deterministic part right so the

00:58:35 --> 00:58:39
recognition distribution can be

00:58:36 --> 00:58:41
represented as a deterministic mapping

00:58:38 --> 00:58:43
and that's that's the beauty because it

00:58:40 --> 00:58:45
urns out that you can collapse these

00:58:42 --> 00:58:47
complicated models effectively into

00:58:44 --> 00:58:49
autoenccoders, right? And we know how to

00:58:46 --> 00:58:51
deal with autoenccoders. We can back

00:58:48 --> 00:58:52
propagate through the entire uh through

00:58:50 --> 00:58:54
the entire model. So we have a

00:58:51 --> 00:58:56
deterministic encoder and then the

00:58:53 --> 00:58:58
distribution of these auxiliary

00:58:55 --> 00:59:00
variables really don't depend on

00:58:57 --> 00:59:03
parameters. Uh right so we sort of it's

00:58:59 --> 00:59:05
almost like taking a stcastic system and

00:59:02 --> 00:59:06
separating the stoastic part and

00:59:04 --> 00:59:08
eterministic part. In deterministic

00:59:06 --> 00:59:10
part you can do back propagation so you

00:59:07 --> 00:59:12
can do learning and the stoastic part

00:59:09 --> 00:59:13
you can do sampling right so it's just

00:59:11 --> 00:59:16
hink of it as a

00:59:12 --> 00:59:19
separation between the two uh the two

00:59:16 --> 00:59:21
pieces. So now if I take the gradient of

00:59:18 --> 00:59:23
the variational bound or variational

00:59:20 --> 00:59:25
objective with respect to parameters

00:59:22 --> 00:59:26
this is something that we couldn't do

00:59:24 --> 00:59:29
back in 95 and we couldn't do it in the

00:59:26 --> 00:59:30
last 10 years. Uh people tried using

00:59:28 --> 00:59:33
reinforce algorithm or some

00:59:30 --> 00:59:34
approximations to it. It never worked.

00:59:32 --> 00:59:36
Uh but here what we can do is we can do

00:59:33 --> 00:59:38
the following. And we can say well I can

00:59:35 --> 00:59:41
write this expression because it's a

00:59:37 --> 00:59:43
Gaussian as sampling bunch of these

00:59:40 --> 00:59:45
auxiliary variables and then this log I

00:59:42 --> 00:59:48
can just inject the noise in here. The

00:59:44 --> 00:59:49
whole thing here becomes deterministic

00:59:47 --> 00:59:52
and that's that's where the beauty comes

00:59:48 --> 00:59:55
in. You take this gradient here and you

00:59:51 --> 00:59:58
push it inside the expectation. Right?

00:59:54 --> 01:00:00
So before if you take the gradient of

00:59:57 --> 01:00:02
expectations like taking the gradient of

00:59:59 --> 01:00:04
averages like you compute bunch of

01:00:01 --> 01:00:06
averages and you're taking the gradient

01:00:03 --> 01:00:08
what you're doing now with reparization

01:00:05 --> 01:00:10
trick is you're taking the gradients and

01:00:07 --> 01:00:13
then taking the average right it turns

01:00:10 --> 01:00:15
out that hugely reduces the variance in

01:00:12 --> 01:00:18
your training and actually allows you

01:00:14 --> 01:00:20
to learn these models quite uh quite

01:00:17 --> 01:00:22
fficiently. So the mapping edge here is

01:00:19 --> 01:00:24
is completely deterministic and

01:00:21 --> 01:00:26
gradients here can be computed by back

01:00:23 --> 01:00:28
propagation. It's a deterministic system

01:00:25 --> 01:00:30
and you can think of this thing inside

01:00:27 --> 01:00:32
is just an autoenccoder

01:00:29 --> 01:00:34
uh that that you are that you are

01:00:31 --> 01:00:37
optimizing. Um and obviously there are

01:00:33 --> 01:00:38
other extensions of these models that

01:00:36 --> 01:00:39
we've looked at and a bunch of other

01:00:37 --> 01:00:41
teams looked at where you can say well

01:00:38 --> 01:00:43
maybe we can improve these models by

01:00:40 --> 01:00:44
drawing multiple samples. These are

01:00:42 --> 01:00:47
so-called case samples, importance

01:00:44 --> 01:00:49
waiting uh uh bounds and sort of you can

01:00:46 --> 01:00:50
make them a little bit better uh a

01:00:48 --> 01:00:52
little bit more precise. you can model a

01:00:49 --> 01:00:55
little bit more complicated uh

01:00:51 --> 01:00:57
distributions over the uh over the past.

01:00:54 --> 01:00:58
But now let me sort of step back a

01:00:56 --> 01:01:00
little bit and say why am I telling you

01:00:57 --> 01:01:01
about this? What's the point? There's a

01:00:59 --> 01:01:03
bunch of equations. You're injecting

01:01:00 --> 01:01:06
noise. Why do we need noise? Why do we

01:01:02 --> 01:01:10
need stocastic systems in general? Uh

01:01:05 --> 01:01:12
right here's a motivating example. Um we

01:01:09 --> 01:01:15
wanted to build a model that given

01:01:11 --> 01:01:17
captions, we want to generate the image,

01:01:14 --> 01:01:19
right? And my student was very ambitious

01:01:16 --> 01:01:22
and basically said,"I want to be able to

01:01:18 --> 01:01:24
just tell give you any sentence and and

01:01:21 --> 01:01:25
I want to be able to generate image like

01:01:23 --> 01:01:28
kind of like an artificial paint. I want

01:01:24 --> 01:01:31
o paint what what's in my uh what's in

01:01:27 --> 01:01:33
my caption in the most general way." Uh

01:01:30 --> 01:01:35
right. So this is one example of a helm

01:01:32 --> 01:01:36
achine where you have a generative

01:01:34 --> 01:01:37
model which is a stocastic recurrent

01:01:35 --> 01:01:39
network. is just a change sequence of

01:01:36 --> 01:01:41
variational autoenccoders and there's a

01:01:38 --> 01:01:43
recognition model which is you can think

01:01:40 --> 01:01:44
of it as deterministic system like a

01:01:42 --> 01:01:47
convolutional system that tries to

01:01:44 --> 01:01:49
approximate uh what the latent states

01:01:46 --> 01:01:50
are but why do I need why do I need

01:01:48 --> 01:01:52
stoasticity here why do I need

01:01:50 --> 01:01:56
variational encoders here and the reason

01:01:51 --> 01:01:59
is very simple suppose I I I you know I

01:01:55 --> 01:02:02
give you the following task right I say

01:01:58 --> 01:02:05
a stop sign is flying in blue skies okay

01:02:01 --> 01:02:07
now if you were using a deterministic

01:02:04 --> 01:02:08
system like an autoenccoder you would

01:02:06 --> 01:02:10
generate one image right because it's a

01:02:07 --> 01:02:13
deterministic system give an input I

01:02:09 --> 01:02:15
give you know I give you output once you

01:02:12 --> 01:02:18
have stochastic system you inject this

01:02:14 --> 01:02:19
noise this latent noise that allows you

01:02:17 --> 01:02:21
to actually generate a whole space of

01:02:18 --> 01:02:23
possible images right so for example it

01:02:20 --> 01:02:24
ends to generate like this stop sign

01:02:22 --> 01:02:26
and this stop sign they look very

01:02:23 --> 01:02:28
different uh right and there's a car

01:02:25 --> 01:02:31
here so maybe it's not really flying

01:02:27 --> 01:02:33
it's just can't draw the pole here uh

01:02:30 --> 01:02:35
this one looks like they're clouds uh

01:02:32 --> 01:02:37
ere is this yellow school bus is flying

01:02:34 --> 01:02:38
in blue sky Right. So here we wanted to

01:02:36 --> 01:02:42
test the system to see does it

01:02:37 --> 01:02:44
understand something about u what's

01:02:41 --> 01:02:46
in the sentence. Here's a herd of

01:02:43 --> 01:02:48
elephants is flying in blue skies. Now

01:02:45 --> 01:02:49
e cannot generate elephants although

01:02:47 --> 01:02:51
there are now techniques that are

01:02:48 --> 01:02:54
getting better but you know sometimes it

01:02:50 --> 01:02:55
generates two of them right? Uh and a

01:02:53 --> 01:02:57
commercial plane flying in blue skies

01:02:54 --> 01:02:58
but this is where we need stoasticity

01:02:56 --> 01:03:00
because we want to be able to generate

01:02:57 --> 01:03:02
the whole distribution of possible

01:02:59 --> 01:03:05
outcomes not necessarily just one

01:03:01 --> 01:03:07
particular point. Um, right. Here's, you

01:03:04 --> 01:03:08
know, we can basically do things like,

01:03:06 --> 01:03:10
you know, a yellow school bus parked in

01:03:08 --> 01:03:13
the parking lot versus a red school bus

01:03:10 --> 01:03:15
parked in the parking lot versus a green

01:03:12 --> 01:03:16
school bus parked in the parking lot.

01:03:14 --> 01:03:18
It's sort of and a blue school bus,

01:03:15 --> 01:03:19
right? So, it's sort of, you know, we

01:03:17 --> 01:03:21
can't quite generate blue school buses,

01:03:18 --> 01:03:24
but we've seen blue cars and we've seen

01:03:20 --> 01:03:26
blue buses. So, it can sort of make an

01:03:23 --> 01:03:28
association to to draw these different

01:03:25 --> 01:03:32
hings. They look a little bit fuzzy. Um

01:03:28 --> 01:03:33
but uh you know uh in terms of comparing

01:03:31 --> 01:03:35
to different models if I give you a

01:03:32 --> 01:03:38
group of people on the beach we serve

01:03:34 --> 01:03:39
boards uh this is what we can generate

01:03:37 --> 01:03:41
there is another model called lab gap

01:03:38 --> 01:03:42
model which is a model based on

01:03:40 --> 01:03:45
adversarial neural network something

01:03:42 --> 01:03:47
I'll I'll I'll talk as the last part of

01:03:44 --> 01:03:49
this uh talk and there is these models

01:03:46 --> 01:03:50
convolutional

01:03:48 --> 01:03:52
deconvolutional variational

01:03:49 --> 01:03:53
autoenccoders which is again

01:03:51 --> 01:03:55
convolutional deconvolutional

01:03:52 --> 01:03:57
autoenccoders just with with some noise

01:03:54 --> 01:03:59
and you can certainly see that you know

01:03:56 --> 01:04:01
it's it's Generally, we found it's very

01:03:58 --> 01:04:04
hard to be able to generate scenes with

01:04:00 --> 01:04:07
arbitrary inputs as a text. Uh, right

01:04:04 --> 01:04:09
here's here's my favorite one. Uh, a

01:04:06 --> 01:04:10
toilet seat sits open in the bathroom.

01:04:08 --> 01:04:13
Right? I don't know if you can see

01:04:09 --> 01:04:14
toilet seats here, maybe. Uh, but you

01:04:12 --> 01:04:15
can say toilet seats, it's open in the

01:04:13 --> 01:04:17
grass field. That was a little bit

01:04:14 --> 01:04:20
better. Uh, at least the colors were

01:04:16 --> 01:04:24
quite right. And when we put this paper

01:04:19 --> 01:04:26
uh on archive uh one of uh one of the

01:04:23 --> 01:04:29
students basically came to me and said

01:04:25 --> 01:04:32
well this is really bad because you can

01:04:28 --> 01:04:34
always ask Google right and if you if

01:04:31 --> 01:04:38
you type that particular query into

01:04:33 --> 01:04:41
Google search it gives you that right uh

01:04:37 --> 01:04:43
which was a little bit disappointing um

01:04:40 --> 01:04:46
but now if you actually Google or if you

01:04:42 --> 01:04:49
actually put this query into Google this

01:04:45 --> 01:04:51
image comes before this image

01:04:48 --> 01:04:53
uh and generally because what's

01:04:50 --> 01:04:54
happening is that people are just

01:04:52 --> 01:04:56
clicking on that image all the time to

01:04:53 --> 01:04:58
figure out what's going on in that

01:04:55 --> 01:05:01
image. So we got bumped up uh before

01:04:57 --> 01:05:03
that other news. So so now I can

01:05:00 --> 01:05:05
say that according to Google this is a

01:05:02 --> 01:05:08
much better representation for that

01:05:04 --> 01:05:10
sentence than than this one. Um here's

01:05:07 --> 01:05:13
another here's another sort of

01:05:09 --> 01:05:15
interesting model which is a u a model

01:05:12 --> 01:05:17
where you're trying to build a recurrent

01:05:14 --> 01:05:18
neural network. Again, it's a generative

01:05:16 --> 01:05:21
model, but it's a generative model of

01:05:17 --> 01:05:25
text. Uh, this was this model was

01:05:20 --> 01:05:27
trained on about 7,000 romance novels,

01:05:24 --> 01:05:30
and you take a caption model and you

01:05:26 --> 01:05:32
hook it up to the uh uh to the caption

01:05:29 --> 01:05:34
generation system. So, you're basically

01:05:31 --> 01:05:37
saying the model, here's an image,

01:05:33 --> 01:05:40
generate me, you know, in the style of

01:05:36 --> 01:05:42
romantic books what what you'd see here.

01:05:39 --> 01:05:43
And, you know, it generates uh it

01:05:41 --> 01:05:44
generates something interesting. We

01:05:42 --> 01:05:47
barely were able to catch the breeze on

01:05:43 --> 01:05:48
the beach and so forth. Uh she's

01:05:46 --> 01:05:51
beautiful, but the truth is I don't know

01:05:47 --> 01:05:54
hat to do. The sun was just starting to

01:05:50 --> 01:05:57
fade away. Uh leaving people scattered

01:05:53 --> 01:05:58
around the Atlantic Ocean, right? So,

01:05:56 --> 01:06:00
and there are a bunch of different

01:05:57 --> 01:06:01
hings that you can do. Obviously, you

01:05:59 --> 01:06:04
know, we're not there yet in terms of

01:06:00 --> 01:06:05
generating romantic stories. Uh but

01:06:03 --> 01:06:07
here's one example where it's a

01:06:04 --> 01:06:10
generative model. It seems like

01:06:06 --> 01:06:12
syntactically we can actually generate

01:06:09 --> 01:06:15
you know uh reasonable things

01:06:11 --> 01:06:16
emantically we're not there yet. Uh

01:06:14 --> 01:06:18
right and actually that particular work

01:06:16 --> 01:06:21
was inspired a little bit by uh by

01:06:17 --> 01:06:23
actually by D's uh uh system that would

01:06:20 --> 01:06:26
given an image it would I think it would

01:06:22 --> 01:06:28
generate poems uh right but the poems

01:06:26 --> 01:06:31
were predefined so it was mostly the

01:06:27 --> 01:06:33
selecting the right poem for the image.

01:06:30 --> 01:06:36
Uh here we actually were trying to you

01:06:32 --> 01:06:38
know generate something uh something

01:06:35 --> 01:06:39
So there's still a lot of work to do in

01:06:37 --> 01:06:40
that space because you know

01:06:38 --> 01:06:43
syntactically we can get there

01:06:39 --> 01:06:44
semantically we are nowhere near you

01:06:42 --> 01:06:46
know getting getting the right

01:06:43 --> 01:06:49
structure. Here's another last example

01:06:45 --> 01:06:51
that I want to show you. Um this was

01:06:48 --> 01:06:53
done uh in the case of oneshot learning

01:06:50 --> 01:06:56
which is can you build generative model

01:06:52 --> 01:06:58
of characters. Right? That's a very

01:06:55 --> 01:06:59
defined domain very well definfined

01:06:57 --> 01:07:02
omain. It's a very simple domain but

01:06:58 --> 01:07:04
it's also very hard. Right? Here's one

01:07:01 --> 01:07:07
xample. We've shown this example to

01:07:03 --> 01:07:09
people and to the algorithm and we can

01:07:06 --> 01:07:11
say well can you draw me this this

01:07:08 --> 01:07:13
example and you know on one panel humans

01:07:10 --> 01:07:15
would draw you know how they believe

01:07:12 --> 01:07:17
this this example should look like and

01:07:14 --> 01:07:19
then on the other panel we have machines

01:07:16 --> 01:07:22
drawing it right so this is really just

01:07:18 --> 01:07:24
a generative model of based on a single

01:07:21 --> 01:07:26
xample you show a new example and

01:07:23 --> 01:07:28
you're trying to generate what it is and

01:07:25 --> 01:07:30
so quick question for you how many of

01:07:27 --> 01:07:33
you think this was machine generated and

01:07:29 --> 01:07:33
this was human generated

01:07:32 --> 01:07:38
Ah, what about the other way

01:07:34 --> 01:07:39
around? More. More. Uhhuh. So there's a

01:07:37 --> 01:07:41
vote that this is. What about this one?

01:07:38 --> 01:07:42
This is is how many you think this

01:07:40 --> 01:07:44
machine generated and this is human

01:07:41 --> 01:07:46
generated? A few. What about the other

01:07:44 --> 01:07:49
way

01:07:45 --> 01:07:50
around? Ah, great. Great. Well, the

01:07:48 --> 01:07:53
truth is I don't really know which one

01:07:50 --> 01:07:55
was generated by which machine because

01:07:52 --> 01:07:56
that was done I should actually ask

01:07:54 --> 01:07:59
Brendan Lake who designed the

01:07:56 --> 01:08:00
xperiments for this particular model.

01:07:58 --> 01:08:02
But I can tell you that I can tell you

01:08:00 --> 01:08:03
that you know there's been a lot of

01:08:01 --> 01:08:06
studies he's done a lot of studies and

01:08:02 --> 01:08:08
it's about you know it's almost 50/50.

01:08:05 --> 01:08:10
Uh so in sort of this kind of small

01:08:07 --> 01:08:13
carved domain we can actually compete

01:08:09 --> 01:08:16
with people uh you know trying to

01:08:12 --> 01:08:18
generate these uh the uh these

01:08:15 --> 01:08:20
characters. Now let me step back a

01:08:17 --> 01:08:24
little bit and and and tell you um about

01:08:19 --> 01:08:25
a different class of models. These are

01:08:23 --> 01:08:27
uh models known as generative

01:08:24 --> 01:08:30
adversarial networks and they've been

01:08:26 --> 01:08:32
gaining a lot uh of uh attraction in in

01:08:29 --> 01:08:35
our community because they seem to

01:08:31 --> 01:08:38
produce remarkable results. Um so here's

01:08:34 --> 01:08:40
uh here's the idea. We're not going to

01:08:37 --> 01:08:42
be really defining explicitly the

01:08:39 --> 01:08:44
density, but we need to be able to

01:08:41 --> 01:08:46
sample from the model, right? And the

01:08:44 --> 01:08:47
interesting thing is that there's no

01:08:45 --> 01:08:49
variation learning. There's no maximum

01:08:46 --> 01:08:50
likelihood estimation. There's no mark

01:08:48 --> 01:08:52
of chain Monte Carlo. There's no

01:08:49 --> 01:08:55
sampling. How do you do that? How do you

01:08:52 --> 01:08:56
learn these models? And it turns out

01:08:54 --> 01:08:58
hat you can learn these models by

01:08:55 --> 01:09:00
playing a game. And that's a very clever

01:08:57 --> 01:09:02
strategy. Um, and the idea is the

01:08:59 --> 01:09:04
following. You're going to be setting up

01:09:01 --> 01:09:06
a game between two players. You're going

01:09:03 --> 01:09:07
to have a discriminator D. Think of it

01:09:05 --> 01:09:09
as a convolutional network,

01:09:06 --> 01:09:11
convolutional neural network. And then

01:09:08 --> 01:09:13
you're going to have a generator G.

01:09:10 --> 01:09:14
Maybe you can think of it as a as a

01:09:12 --> 01:09:17
variational encore or a helmhold machine

01:09:13 --> 01:09:20
or something that gives you samples from

01:09:16 --> 01:09:23
the data. The discriminator D is going

01:09:19 --> 01:09:26
to be discriminating between a sample

01:09:22 --> 01:09:28
from the data distribution and a sample

01:09:25 --> 01:09:30
from the generator. So the goal of the

01:09:27 --> 01:09:32
discriminator is to is to basically say

01:09:29 --> 01:09:35
is this a fake sample or is this a real

01:09:31 --> 01:09:38
sample, right? Fake sample is a sample

01:09:34 --> 01:09:40
generated by the model. Real sample is

01:09:37 --> 01:09:42
what you see in your data. Right? Can

01:09:39 --> 01:09:44
you tell the difference between the two?

01:09:41 --> 01:09:47
Right? And the generator is going to be

01:09:43 --> 01:09:50
trying to fool the discriminator by

01:09:46 --> 01:09:52
trying to generate samples that are hard

01:09:49 --> 01:09:54
for discriminator to discriminate. So my

01:09:51 --> 01:09:56
goal as a generator would be to generate

01:09:53 --> 01:09:58
really nice looking digits so that the

01:09:55 --> 01:09:59
discriminator wouldn't be able to tell

01:09:57 --> 01:10:01
the difference between you know

01:09:58 --> 01:10:06
simulated and the real. Right? That's

01:10:00 --> 01:10:09
the key idea. Uh and so here's uh uh

01:10:05 --> 01:10:12
intuitively what what that looks like.

01:10:08 --> 01:10:15
Let's say you have uh uh you have some

01:10:11 --> 01:10:17
data. So images of faces I give you an

01:10:14 --> 01:10:19
image of a face and now I have a

01:10:16 --> 01:10:22
discriminated basically says well if I

01:10:18 --> 01:10:23
get a real face I push it through some

01:10:21 --> 01:10:25
function some differentiable function

01:10:22 --> 01:10:27
think of it as a convolutional neural

01:10:24 --> 01:10:30
network or another differentiable

01:10:26 --> 01:10:31
function and here I'm outputting one

01:10:29 --> 01:10:34
right so I want to output one if it's a

01:10:30 --> 01:10:37
real sample right then you have a

01:10:33 --> 01:10:38
generator right and generator is you

01:10:36 --> 01:10:40
have some noise so input noise think of

01:10:37 --> 01:10:43
as a Gaussian distribution think about

01:10:39 --> 01:10:45
Helmho's machines given some noise. I go

01:10:42 --> 01:10:47
through differentiable function which is

01:10:44 --> 01:10:49
your generator and I generate a sample.

01:10:46 --> 01:10:52
This is my this is how my sample might

01:10:48 --> 01:10:54
look like, right? And then on top of it,

01:10:51 --> 01:10:56
I take this sample, I put it into my

01:10:53 --> 01:10:59
discriminator and I say for my

01:10:55 --> 01:11:02
discriminator, I want to output zero,

01:10:58 --> 01:11:04
right? Because my discriminator will

01:11:01 --> 01:11:07
have to say, well, this is fake and this

01:11:03 --> 01:11:09
real, right? That's the goal. And the

01:11:06 --> 01:11:12
generator basically says, well, how can

01:11:08 --> 01:11:14
I get a sample such that my

01:11:11 --> 01:11:15
discriminator is going to be confused

01:11:13 --> 01:11:18
such that the discriminator always

01:11:14 --> 01:11:20
outputs one here? Right? Because it

01:11:17 --> 01:11:22
believes it's a true sample, believes

01:11:19 --> 01:11:25
it's coming from the true data. Right?

01:11:22 --> 01:11:28
So now you have these systems. So what's

01:11:24 --> 01:11:31
the objective? Uh the objective

01:11:27 --> 01:11:34
is a minmax uh value function. It's a

01:11:30 --> 01:11:37
very um intuitive objective function uh

01:11:33 --> 01:11:39
that has the following structure. You

01:11:36 --> 01:11:40
have a discriminator that says well this

01:11:38 --> 01:11:42
an expectation with respect to

01:11:39 --> 01:11:44
distribution uh data distribution. So

01:11:41 --> 01:11:46
this is basically saying I want to

01:11:43 --> 01:11:49
classify any data points that I get from

01:11:45 --> 01:11:51
y data as being real right. So I want

01:11:48 --> 01:11:53
his output to be one because if it's

01:11:50 --> 01:11:55
one the whole thing is going to be zero.

01:11:52 --> 01:11:57
If it's less than one it's going to be

01:11:54 --> 01:12:00
uh negative and I really want to

01:11:56 --> 01:12:02
maximize it. And then discriminator says

01:11:59 --> 01:12:03
well anytime I generate a sample

01:12:01 --> 01:12:06
whatever samples comes out from my

01:12:02 --> 01:12:08
generator um you know I want to classify

01:12:05 --> 01:12:11
it as being fake right that's the goal

01:12:08 --> 01:12:13
of uh the discriminator and then there's

01:12:10 --> 01:12:15
a generator. generator is sort of the

01:12:12 --> 01:12:17
other you know you're trying to minimize

01:12:14 --> 01:12:20
this function which essentially says

01:12:16 --> 01:12:22
well generate samples that discriminator

01:12:20 --> 01:12:23
would classify as real so I really I'm

01:12:21 --> 01:12:26
going to try to m you know change the

01:12:22 --> 01:12:30
parameters of my generator such that

01:12:25 --> 01:12:31
his would produce zero right so oh

01:12:29 --> 01:12:35
sorry so the discriminator would produce

01:12:30 --> 01:12:38
one right so trying to fool uh fool the

01:12:34 --> 01:12:39
discriminator right and it turns out the

01:12:37 --> 01:12:41
optimal strategy for discriminator is

01:12:38 --> 01:12:42
this uh this ratio which is probability

01:12:40 --> 01:12:44
of the data divide the probability of

01:12:41 --> 01:12:47
the data by plus probability of the

01:12:43 --> 01:12:49
model. And in general, if you succeed in

01:12:46 --> 01:12:50
building a good generative model, then

01:12:48 --> 01:12:51
probability of the data would be the

01:12:49 --> 01:12:54
same as probability of the model. So

01:12:50 --> 01:12:56
discriminator will always be confused to

01:12:53 --> 01:12:59
ne half.

01:12:55 --> 01:13:01
Um right. And here's one particular. It

01:12:58 --> 01:13:04
seems like a simple idea, but it turns

01:13:00 --> 01:13:07
out to work remarkably well. Here's um

01:13:04 --> 01:13:08
an architecture called deconvolutional

01:13:06 --> 01:13:10
generative adversarial network

01:13:07 --> 01:13:13
architecture that takes the code. This

01:13:09 --> 01:13:14
a random code. It's a Gaussian code.

01:13:12 --> 01:13:16
It passes through a sequence of

01:13:13 --> 01:13:18
convolutions alo a sequence of

01:13:15 --> 01:13:20
deconvolutions. So given the code you

01:13:17 --> 01:13:22
sort of deconvolve it back to

01:13:19 --> 01:13:25
highdimensional image

01:13:21 --> 01:13:28
um and you train it using adversetal

01:13:24 --> 01:13:30
setting right this is your sampling you

01:13:27 --> 01:13:31
generate the image and then there is a

01:13:29 --> 01:13:32
discriminator which is just a

01:13:30 --> 01:13:34
convolutional neural network that's

01:13:31 --> 01:13:37
trying to say is that real is that a

01:13:33 --> 01:13:40
fake and if you train uh these models on

01:13:36 --> 01:13:42
bedrooms these are called Elson data

01:13:39 --> 01:13:45
sets a bunch of bedrooms uh this is how

01:13:42 --> 01:13:47
samples from the model would look like

01:13:44 --> 01:13:48
which is pretty impressive

01:13:46 --> 01:13:50
In fact, when I look at these samples,

01:13:47 --> 01:13:53
I'm also sort of thinking, well, maybe

01:13:49 --> 01:13:54
the model is memorizing the data because

01:13:52 --> 01:13:57
these samples look remarkably

01:13:53 --> 01:14:00
impressive. Um, then there was a

01:13:56 --> 01:14:03
follow-up work. Uh, these are samples um

01:13:59 --> 01:14:05
from the CFAR data set. So, here you're

01:14:02 --> 01:14:08
seeing training samples and here you're

01:14:04 --> 01:14:10
seeing samples uh generated from the

01:14:07 --> 01:14:12
model which is again very impressive. If

01:14:10 --> 01:14:14
you look at the structure in these

01:14:11 --> 01:14:18
samples, it's quite remarkable that you

01:14:13 --> 01:14:22
can generate uh uh you know samples that

01:14:17 --> 01:14:24
look very realistic actually. Uh this is

01:14:21 --> 01:14:26
what's done again this was done by team

01:14:23 --> 01:14:28
Tim team Salomon and and his

01:14:25 --> 01:14:29
collaborators. uh if you look at the

01:14:27 --> 01:14:32
imageet and you look at the training

01:14:28 --> 01:14:34
data on the image net and looking at the

01:14:31 --> 01:14:37
samples again you look there's a horse

01:14:33 --> 01:14:38
there's is like uh there's some animal

01:14:36 --> 01:14:40
there is an airplane and so forth

01:14:38 --> 01:14:43
ere's like some kind of a truck and

01:14:39 --> 01:14:45
such right so it looks you know when

01:14:42 --> 01:14:48
I look at these images I'm I was very

01:14:44 --> 01:14:49
impressed uh of of uh by the quality of

01:14:47 --> 01:14:51
these image because generally it's very

01:14:48 --> 01:14:54
hard to generate realistic looking

01:14:50 --> 01:14:56
images and the last thing I want to uh

01:14:53 --> 01:15:00
point out this was picked up by Ian good

01:14:56 --> 01:15:02
fellow. Um, if you cherry pick some of

01:14:59 --> 01:15:05
the examples, this is what generated

01:15:01 --> 01:15:07
images look like, right? So, you can

01:15:04 --> 01:15:09
sort of like see there's a little bit of

01:15:06 --> 01:15:13
uh uh interesting structure that you're

01:15:08 --> 01:15:16
seeing in these samples, right? And one

01:15:12 --> 01:15:18
question still remains with these models

01:15:15 --> 01:15:21
is how can we evaluate these models

01:15:17 --> 01:15:24
properly, right? Is the model really

01:15:20 --> 01:15:25
learning uh a space of all possible

01:15:23 --> 01:15:28
images and how images what's the

01:15:24 --> 01:15:30
coherency in those images or is the

01:15:27 --> 01:15:32
model mostly kind of like blurring

01:15:29 --> 01:15:34
things around and just making some small

01:15:31 --> 01:15:36
changes uh to the data. So the question

01:15:33 --> 01:15:38
that I would really want would like to

01:15:35 --> 01:15:39
answer to you know to to get an answer

01:15:37 --> 01:15:42
to is that if I showing you a new

01:15:38 --> 01:15:45
example a new test image a new kind of a

01:15:41 --> 01:15:47
horse would the model say yes this is

01:15:44 --> 01:15:50
a likely image this is this is

01:15:46 --> 01:15:51
very probable images I've seen you know

01:15:49 --> 01:15:54
similar images before or something like

01:15:50 --> 01:15:56
that or not. So that still remains an

01:15:53 --> 01:15:58
open question. But again this is the

01:15:55 --> 01:16:00
class of models which steps away from

01:15:57 --> 01:16:03
aximum likelihood estimation sort of

01:15:59 --> 01:16:04
sets it up in the uh game theoretic

01:16:02 --> 01:16:07
framework which is which is a really

01:16:03 --> 01:16:08
nice set of work. Uh and in computer

01:16:06 --> 01:16:10
vision community a lot of people are

01:16:07 --> 01:16:12
shown a lot of progress in using these

01:16:09 --> 01:16:15
kinds of models because they tend to

01:16:11 --> 01:16:18
generate much more realistic looking uh

01:16:14 --> 01:16:20
images. So let me just summarize to

01:16:17 --> 01:16:22
say that you know I've shown you uh

01:16:19 --> 01:16:24
opefully a set of learning algorithms

01:16:21 --> 01:16:26
for deep unsupervised models. You know

01:16:23 --> 01:16:29
there's a lot of space in these models a

01:16:25 --> 01:16:30
lot of excitement in that space and just

01:16:28 --> 01:16:32
wanted to point out that these models

01:16:29 --> 01:16:33
the deep models they improve upon

01:16:31 --> 01:16:35
current state-of-the-art in a lot of

01:16:32 --> 01:16:37
different application domains and as I

01:16:34 --> 01:16:38
mentioned before there's been a lot of

01:16:36 --> 01:16:41
progress in discriminative models

01:16:38 --> 01:16:43
convolutional models uh uh using

01:16:40 --> 01:16:44
recurrent neural networks for solving

01:16:42 --> 01:16:47
you know action recognition models

01:16:43 --> 01:16:49
dealing with videos and unsupervised

01:16:46 --> 01:16:52
learning is still remains

01:16:48 --> 01:16:53
um sort of a field where we've made some

01:16:51 --> 01:16:55
progress

01:16:52 --> 01:16:58
uh but there's still a lot of uh

01:16:54 --> 01:17:01
progress to be made and uh let me let me

01:16:57 --> 01:17:01
stop there. So thank

01:17:06 --> 01:17:10
you

01:17:13 --> 01:17:19
questions to the mics.

01:17:21 --> 01:17:28
Uh so oh sorry uh so uh as a basian guy

01:17:25 --> 01:17:30
I'm pretty depressed by the fact that

01:17:27 --> 01:17:33
gang can generate clearer image than the

01:17:29 --> 01:17:36
variational autoenccoder. So my question

01:17:32 --> 01:17:38
is do you think there could be a energy

01:17:35 --> 01:17:41
based framework or a probabilistic

01:17:37 --> 01:17:44
interpretation why GAN is so successful

01:17:40 --> 01:17:46
other than it's just a minimax game. I

01:17:43 --> 01:17:47
think that generally, you know, if you

01:17:45 --> 01:17:49
look at I I sort of go back and forth

01:17:46 --> 01:17:52
between variational encoders because,

01:17:48 --> 01:17:53
you know, some of my friends at OpenAI

01:17:51 --> 01:17:55
are saying that they can actually

01:17:52 --> 01:17:58
generate really nice looking images

01:17:54 --> 01:18:01
using variational autoenccoders. Uh I'm

01:17:57 --> 01:18:03
looking at Peter here. Uh but uh you

01:18:00 --> 01:18:06
know what I think that one of the

01:18:02 --> 01:18:08
problems with image generation today is

01:18:05 --> 01:18:10
that with variational autoenccoders

01:18:07 --> 01:18:13
there is this notion of Gaussian loss

01:18:09 --> 01:18:16
function, right? And what it does is it

01:18:12 --> 01:18:18
basically says, well, never produce, you

01:18:15 --> 01:18:21
know, crystal clear images because if

01:18:18 --> 01:18:23
you're wrong, if you put ed the edge in

01:18:20 --> 01:18:25
the wrong place, you're going to be

01:18:22 --> 01:18:28
penalized a lot because of the L2 loss

01:18:24 --> 01:18:30
function, right? Uh what the GANs are

01:18:27 --> 01:18:32
doing, GANs are basically saying, well,

01:18:29 --> 01:18:34
I don't really care where I put the edge

01:18:31 --> 01:18:36
as long as it looks realistic so that I

01:18:33 --> 01:18:38
can fool my classifier. So what tends to

01:18:35 --> 01:18:40
happen in practice in a lot of times if

01:18:37 --> 01:18:42
you actually look at the images

01:18:39 --> 01:18:44
generated by GANs sometimes they have a

01:18:41 --> 01:18:47
lot of artifacts like you know these

01:18:43 --> 01:18:49
specific things that that pop up uh

01:18:46 --> 01:18:51
right whereas in variational encoders

01:18:48 --> 01:18:52
you don't see that but again the problem

01:18:50 --> 01:18:54
with variational encoders is they tend

01:18:51 --> 01:18:57
to produce images that are much more

01:18:53 --> 01:18:59
diffused or you know not as sharp or not

01:18:56 --> 01:19:00
as clear as what GAN is doing and

01:18:58 --> 01:19:02
there's been some work on you know

01:18:59 --> 01:19:03
trying to sharpen the images which is

01:19:01 --> 01:19:06
you're using variational quarters to

01:19:02 --> 01:19:08
generate you the globally coherent in C

01:19:05 --> 01:19:11
and then you're using uh generative

01:19:07 --> 01:19:13
adversarial nest to maybe sharpen it. Um

01:19:10 --> 01:19:15
again it's it's it depends what loss

01:19:12 --> 01:19:17
function you're using and GANs seem to

01:19:14 --> 01:19:19
be able to deal with that problem

01:19:16 --> 01:19:20
implicitly right because they don't

01:19:18 --> 01:19:23
really care whether you get the edge

01:19:19 --> 01:19:26
quite right or not as long as it's uh

01:19:22 --> 01:19:29
fools your classifier.

01:19:25 --> 01:19:29
Thank you.

01:19:28 --> 01:19:34
Hi thank you very much for the

01:19:30 --> 01:19:38
interesting talk. I have a question.

01:19:33 --> 01:19:40
Um about the v version autoenccoder

01:19:37 --> 01:19:42
uh for the more challenging data set

01:19:39 --> 01:19:45
like the uh street view house number I

01:19:42 --> 01:19:48
noticed that many implementation they

01:19:44 --> 01:19:50
use a PCA to pre-process the data before

01:19:47 --> 01:19:53
they train the model. What is your

01:19:49 --> 01:19:55
thought on that pre-processing step? Why

01:19:52 --> 01:19:58
is necessary to do that? Like why don't

01:19:54 --> 01:20:01
we just learn from the raw pixel? Um I

01:19:57 --> 01:20:03
actually don't know. Um my experience

01:20:00 --> 01:20:04
has been that we don't really do a lot

01:20:02 --> 01:20:06
of pre-processing. I mean what you can

01:20:04 --> 01:20:08
do is you can do ZCA prep-processing and

01:20:05 --> 01:20:09
you can take the mean you can take the

01:20:07 --> 01:20:11
sort of the second order coariance

01:20:08 --> 01:20:14
structure uh from the data that

01:20:10 --> 01:20:15
sometimes helps sometimes it doesn't but

01:20:13 --> 01:20:17
I don't see any particular reason why

01:20:14 --> 01:20:20
ou'd want to do PCA pre pre-processing

01:20:16 --> 01:20:23
right I mean it's just one of uh you

01:20:19 --> 01:20:25
know just like you know we've seen uh a

01:20:22 --> 01:20:27
lot in our field people just doing XY

01:20:24 --> 01:20:29
and then later on they figure out that

01:20:26 --> 01:20:32
hey don't really need X and Y right so

01:20:28 --> 01:20:33
it's maybe it was working better for

01:20:31 --> 01:20:35
their implementation for their

01:20:32 --> 01:20:36
particular task task but generally I

01:20:34 --> 01:20:39
haven't seen people doing a lot of

01:20:35 --> 01:20:41
pre-processing using PCA

01:20:38 --> 01:20:44
uh for training you know variational

01:20:40 --> 01:20:44
encoders

01:20:46 --> 01:20:55
any more question yes there's one

01:20:51 --> 01:20:58
queries regarding uh binary RBMs

01:20:54 --> 01:21:01
uh so if you look at u uh the literature

01:20:57 --> 01:21:02
for uh let us say uh estimation of the

01:21:00 --> 01:21:04
partition function for easing models

01:21:01 --> 01:21:06
right you you'll see that the literature

01:21:03 --> 01:21:08
is a lot more rich compared to uh the

01:21:06 --> 01:21:10
variational inference literature for

01:21:07 --> 01:21:12
estricted boltsman machines especially

01:21:09 --> 01:21:13
in the binary context. Is there like a

01:21:11 --> 01:21:15
cultural reason for this because

01:21:12 --> 01:21:18
specifically you know like you have uh

01:21:14 --> 01:21:20
for the strictly feromagnetic case you

01:21:17 --> 01:21:22
have a a fully polinomial time

01:21:19 --> 01:21:25
approximation scheme for estimating the

01:21:21 --> 01:21:27
log partition function right so uh but

01:21:24 --> 01:21:30
hen I don't see uh usage of these fpras

01:21:26 --> 01:21:32
kind of algorithms in the RBM space so

01:21:29 --> 01:21:33
when you kind of justapose with the

01:21:31 --> 01:21:36
literature for the easing models

01:21:32 --> 01:21:38
compared to binary RBMs you'll find like

01:21:35 --> 01:21:40
a very stark asymmetry is there like a

01:21:37 --> 01:21:41
reason for this yeah so the thing the

01:21:39 --> 01:21:43
thing about easing models is that you

01:21:40 --> 01:21:46
know if you're like in ferroagnetic case

01:21:42 --> 01:21:47
or if you are you know you have certain

01:21:45 --> 01:21:49
particular structure to the easing

01:21:46 --> 01:21:50
models you can use a lot of techniques

01:21:48 --> 01:21:51
like even if you use techniques like

01:21:49 --> 01:21:53
coupling from the past you can draw

01:21:50 --> 01:21:55
exact samples from the models right you

01:21:52 --> 01:21:56
can compute the log partition function

01:21:54 --> 01:21:58
polinomial time you have specific

01:21:55 --> 01:22:00
structure the thing about RBMs is that

01:21:57 --> 01:22:02
generally those assumptions don't apply

01:22:00 --> 01:22:04
like you cannot learn a model which is a

01:22:01 --> 01:22:05
feromagmatic model with RBMs just where

01:22:03 --> 01:22:07
all your weights are positive right

01:22:04 --> 01:22:11
hat's a lot of constraints to put on on

01:22:06 --> 01:22:13
these classes of models so that's Why

01:22:10 --> 01:22:15
ou know and and once you get outside of

01:22:12 --> 01:22:18
these assumptions then the problem

01:22:14 --> 01:22:19
becomes empty hard right for estimating

01:22:17 --> 01:22:20
the partition function and obviously for

01:22:18 --> 01:22:22
learning these systems you need the

01:22:19 --> 01:22:23
gradient of the log of the partition

01:22:21 --> 01:22:26
function right and that's where all the

01:22:22 --> 01:22:28
problems come in I don't think there is

01:22:25 --> 01:22:30
a solution for that and

01:22:27 --> 01:22:33
unfortunately variational methods are

01:22:29 --> 01:22:34
also not working as well as you know

01:22:32 --> 01:22:36
approximations like contrastive

01:22:33 --> 01:22:39
divergence or something based on based

01:22:35 --> 01:22:40
on sampling uh people have looked at

01:22:38 --> 01:22:42
better approximations and using sort of

01:22:39 --> 01:22:45
more sophisticated techniques, but it's

01:22:41 --> 01:22:46
it hasn't it hasn't really popped up yet

01:22:44 --> 01:22:50
practically. It just doesn't work as

01:22:45 --> 01:22:53
well. But it's a good question.

01:22:49 --> 01:22:59
Hello. Uh my question is about uh using

01:22:52 --> 01:23:02
auto coder with uh to get semantic hash

01:22:58 --> 01:23:04
uh especially in text. Do we need to any

01:23:01 --> 01:23:08
uh special representation text

01:23:03 --> 01:23:12
representation like uh word to vector as

01:23:07 --> 01:23:14
input for the as for our text sequence.

01:23:11 --> 01:23:15
So you know I've I've talked about the

01:23:13 --> 01:23:17
model which is very simple model just

01:23:14 --> 01:23:19
modeling bag of words. Yes. Right.

01:23:16 --> 01:23:21
Obviously you can take word tovec and

01:23:18 --> 01:23:23
initialize the model right because it's

01:23:20 --> 01:23:26
a way of just taking your words and

01:23:22 --> 01:23:28
projecting them into the semantic space.

01:23:25 --> 01:23:30
Yeah. Right. There's been a lot of

01:23:27 --> 01:23:32
technique recent techniques using like

01:23:29 --> 01:23:33
Richard was mentioning GRUs as a way you

01:23:31 --> 01:23:36
know if you want to if you want to work

01:23:32 --> 01:23:38
with sentences or if you want to embed

01:23:35 --> 01:23:40
the entire document into the semantic

01:23:37 --> 01:23:42
space and if you want to make it binary

01:23:39 --> 01:23:45
ou know you can use GRUs birectional

01:23:41 --> 01:23:46
GRUs sort of get the representation of

01:23:44 --> 01:23:47
the document I think that would probably

01:23:45 --> 01:23:49
work better than using word tove and

01:23:46 --> 01:23:51
then just adding things up and then

01:23:48 --> 01:23:52
based on that you can learn a hashing

01:23:50 --> 01:23:54
function that maps that particular

01:23:51 --> 01:23:56
epresentation to the binary space right

01:23:54 --> 01:23:58
in which case you can you can do

01:23:55 --> 01:24:00
searching fairly efficiently. So, so as

01:23:57 --> 01:24:02
an input representation there are lots

01:23:59 --> 01:24:03
of choices. You can use birectional GRUs

01:24:01 --> 01:24:07
which is the you know

01:24:02 --> 01:24:10
the the the the method of choice right

01:24:06 --> 01:24:12
now you can use gluff uh or you can use

01:24:09 --> 01:24:14
word that can be you know sum them sum

01:24:11 --> 01:24:17
up the representations of of the words.

01:24:14 --> 01:24:20
Okay. So using only bag of word we use

01:24:16 --> 01:24:22
only normal network uh nor network there

01:24:19 --> 01:24:23
is no recurrence network or Yeah. Yeah.

01:24:21 --> 01:24:24
That's right. Simple network. That's

01:24:22 --> 01:24:26
right. But again your your your

01:24:24 --> 01:24:27
epresentation can be whatever that

01:24:25 --> 01:24:28
representation is as long as

01:24:26 --> 01:24:29
differentiable right because in this

01:24:27 --> 01:24:33
case you can you can sort of back

01:24:28 --> 01:24:35
propagate through the uh birectional uh

01:24:32 --> 01:24:37
GR use and get the you know learn what

01:24:34 --> 01:24:40
he what these representations should

01:24:36 --> 01:24:45
thank you so much.

01:24:39 --> 01:24:45
Okay, let's uh thank Russ again.

<!-- YOUTUBE_TRANSCRIPT_END -->
