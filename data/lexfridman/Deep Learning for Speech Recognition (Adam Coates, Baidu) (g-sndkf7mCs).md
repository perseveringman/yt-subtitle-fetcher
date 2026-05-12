---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "g-sndkf7mCs"
title: "Deep Learning for Speech Recognition (Adam Coates, Baidu)"
video_url: "https://www.youtube.com/watch?v=g-sndkf7mCs"
thumbnail_url: "https://i.ytimg.com/vi/g-sndkf7mCs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=g-sndkf7mCs"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 5512
duration_human: "1:31:52"
view_count: 72355
like_count: 1001
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:23:56.947Z"
---

# Deep Learning for Speech Recognition (Adam Coates, Baidu)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=g-sndkf7mCs
- video_id: g-sndkf7mCs
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:31:52
- view_count: 72355
- like_count: 1001
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
so I want to tell you guys about speech

00:00:03 --> 00:00:08
recognition and deep learning

00:00:04 --> 00:00:10
I think deep learning has been playing

00:00:07 --> 00:00:11
an increasingly large role in speech

00:00:09 --> 00:00:14
recognition and one of the things I

00:00:10 --> 00:00:16
think is most exciting about this field

00:00:13 --> 00:00:18
is that speech recognitions at a place

00:00:15 --> 00:00:20
right now where it's becoming good

00:00:17 --> 00:00:23
enough to enable really exciting

00:00:19 --> 00:00:26
applications that end up the hands of

00:00:22 --> 00:00:28
users so for example if we want to

00:00:25 --> 00:00:30
caption video content and make it

00:00:27 --> 00:00:32
accessible to to everyone it used to be

00:00:29 --> 00:00:34
that we would sort of try to do this but

00:00:31 --> 00:00:36
you still need a human to get really

00:00:33 --> 00:00:38
good captioning for something like a

00:00:35 --> 00:00:40
lecture but it's possible that we can do

00:00:37 --> 00:00:42
a lot of this with higher quality in the

00:00:39 --> 00:00:43
future with deep learning we can do

00:00:41 --> 00:00:46
things like hands-free interfaces in

00:00:42 --> 00:00:48
cars make it safer to use technology

00:00:45 --> 00:00:50
while we're on the go keep people's eyes

00:00:47 --> 00:00:52
on the road of course and make mobile

00:00:49 --> 00:00:57
devices home devices much easier much

00:00:51 --> 00:00:59
more efficient and enjoyable to use but

00:00:56 --> 00:01:02
another actually sort of fun recent

00:00:58 --> 00:01:04
study that that some folks if I do

00:01:01 --> 00:01:06
participated in along with Stanford and

00:01:03 --> 00:01:08
UW is to show that for even something

00:01:05 --> 00:01:10
straight forward that we sort of take

00:01:07 --> 00:01:13
for granted as an application of speech

00:01:09 --> 00:01:15
which is just texting someone with voice

00:01:12 --> 00:01:17
or writing a piece of text the study

00:01:15 --> 00:01:20
show you can actually go three times

00:01:16 --> 00:01:22
faster with voice recognition systems

00:01:19 --> 00:01:24
that are available today so it's not

00:01:21 --> 00:01:25
just like a little bit faster now even

00:01:23 --> 00:01:27
with the errors that a speech

00:01:24 --> 00:01:30
recognition system can make it's

00:01:26 --> 00:01:33
actually a lot faster and the reason I

00:01:29 --> 00:01:35
wanted to highlight this result which is

00:01:32 --> 00:01:38
pretty recent is that the speech engine

00:01:34 --> 00:01:40
that was used for this study is actually

00:01:37 --> 00:01:41
powered by a lot of the deep learning

00:01:39 --> 00:01:43
methods and I'm going to tell you about

00:01:40 --> 00:01:44
so hopefully when you walk away today

00:01:42 --> 00:01:46
ou have an appreciation or an

00:01:43 --> 00:01:49
understanding of the sort of high-level

00:01:45 --> 00:01:53
ideas that make a result like this

00:01:48 --> 00:01:56
possible so there are a whole bunch of

00:01:52 --> 00:01:59
different components that make up a

00:01:55 --> 00:02:01
complete speech application so for

00:01:58 --> 00:02:04
example there's speech transcription so

00:02:00 --> 00:02:07
if I just talk I want to come up with

00:02:03 --> 00:02:09
words that represent you know whatever I

00:02:06 --> 00:02:11
just said there's also other tasks

00:02:08 --> 00:02:13
though like word spotting or triggering

00:02:10 --> 00:02:14
so for example if my phone is sitting

00:02:12 --> 00:02:16
over there and I want to say

00:02:13 --> 00:02:17
hey phone go do something for me

00:02:15 --> 00:02:21
actually has to be listening

00:02:16 --> 00:02:22
continuously for me to say that word and

00:02:20 --> 00:02:25
likewise there are things like speaker

00:02:21 --> 00:02:27
identification or verification so that

00:02:24 --> 00:02:29
if I want to authenticate myself or I

00:02:26 --> 00:02:31
want to be able to tell apart different

00:02:28 --> 00:02:32
users in a room I've got to be able to

00:02:30 --> 00:02:33
recognize your voice even though I don't

00:02:31 --> 00:02:36
know what you're saying

00:02:32 --> 00:02:38
so these are different tasks I'm not

00:02:35 --> 00:02:39
going to cover all of them today instead

00:02:37 --> 00:02:41
I'm going to just focus on the bread and

00:02:38 --> 00:02:43
butter of speech recognition we're going

00:02:40 --> 00:02:46
to focus on building a speech engine

00:02:42 --> 00:02:49
that can accurately transcribe audio

00:02:45 --> 00:02:53
into words so that's our main goal this

00:02:48 --> 00:02:56
a very basic goal of artificial

00:02:52 --> 00:02:58
intelligence right historically people

00:02:55 --> 00:03:00
are very very good at listening to

00:02:57 --> 00:03:02
someone talk just like you guys are

00:02:59 --> 00:03:06
listening to me right now and you can

00:03:01 --> 00:03:08
very quickly turn words turn audio into

00:03:05 --> 00:03:12
words and into meaning on your own

00:03:07 --> 00:03:14
almost effortlessly and for machines

00:03:11 --> 00:03:15
this has historically been incredibly

00:03:13 --> 00:03:19
hard so you think of this is like one of

00:03:14 --> 00:03:21
those sort of consummate AI tasks so the

00:03:18 --> 00:03:24
goal of building a speech pipeline is if

00:03:20 --> 00:03:25
you just give me a raw audio wave like

00:03:23 --> 00:03:28
you recorded on your laptop or your cell

00:03:24 --> 00:03:30
phone I want to somehow build a speech

00:03:27 --> 00:03:33
recognizer that can do this very simple

00:03:29 --> 00:03:36
task of printing out hello world when I

00:03:32 --> 00:03:39
actually say hello world so before I dig

00:03:36 --> 00:03:43
into the deep learning part I want to

00:03:38 --> 00:03:45
step back a little bit and spend maybe

00:03:42 --> 00:03:47
ten minutes talking about how a

00:03:44 --> 00:03:50
traditional speech recognition pipeline

00:03:46 --> 00:03:52
is working for two reasons if you're out

00:03:49 --> 00:03:55
in the wild you're doing an internship

00:03:51 --> 00:03:57
you're trying to build a speech

00:03:54 --> 00:03:58
recognition system with a lot of the

00:03:56 --> 00:04:01
tools that are out there you're going to

00:03:57 --> 00:04:03
bump into a lot of systems that are

00:04:00 --> 00:04:05
built on technologies that look like

00:04:02 --> 00:04:07
this so I want you to understand a

00:04:04 --> 00:04:09
little bit of the vocabulary and how

00:04:06 --> 00:04:11
those things are put together and also

00:04:08 --> 00:04:14
this will sort of give you a story for

00:04:10 --> 00:04:17
what deep learning is doing in speech

00:04:13 --> 00:04:19
recognition today that is kind of

00:04:16 --> 00:04:21
special and that I think paves the way

00:04:18 --> 00:04:27
for for much bigger results in the

00:04:20 --> 00:04:28
future so traditional systems break the

00:04:26 --> 00:04:31
problem

00:04:27 --> 00:04:33
of converting an audio wave of taking

00:04:30 --> 00:04:36
audio and break and turning it into a

00:04:32 --> 00:04:39
transcription into a bunch of different

00:04:35 --> 00:04:40
pieces so I'm going to start out with my

00:04:38 --> 00:04:45
raw audio and I'm just going to

00:04:39 --> 00:04:47
represent that by X and then usually we

00:04:44 --> 00:04:49
have to decide on some kind of feature

00:04:46 --> 00:04:51
presentation we have to convert this

00:04:48 --> 00:04:55
into some other form that's easier to

00:04:50 --> 00:04:57
deal with than a raw audio wave and in a

00:04:54 --> 00:04:59
traditional speech system I often have

00:04:56 --> 00:05:01
something called an acoustic model and

00:04:58 --> 00:05:04
the job of the acoustic model is to

00:05:00 --> 00:05:07
learn the relationship between these

00:05:03 --> 00:05:10
features that represent my audio and the

00:05:06 --> 00:05:12
words that someone is trying to say and

00:05:09 --> 00:05:15
then I'll often have a language model

00:05:11 --> 00:05:18
which encapsulate Sall of my knowledge

00:05:14 --> 00:05:19
about what kinds of words what spellings

00:05:17 --> 00:05:21
and what combinations of words are most

00:05:18 --> 00:05:24
likely in the language that I'm trying

00:05:20 --> 00:05:27
to transcribe and once you have all of

00:05:23 --> 00:05:28
these pieces so these might be these

00:05:26 --> 00:05:30
different models might be driven by

00:05:27 --> 00:05:32
machine learning themselves what you

00:05:29 --> 00:05:34
would need to build in a traditional

00:05:31 --> 00:05:37
system is something called a decoder and

00:05:33 --> 00:05:39
the job of a decoder which itself might

00:05:36 --> 00:05:42
involve some modeling efforts and

00:05:38 --> 00:05:47
machine learning algorithms is to find

00:05:41 --> 00:05:49
the sequence of words W that maximizes

00:05:46 --> 00:05:51
this probability the probability of the

00:05:48 --> 00:05:54
particular sequence W given your audio

00:05:50 --> 00:05:57
that's straightforward but that's

00:05:53 --> 00:05:59
equivalent to maximizing the product of

00:05:56 --> 00:06:01
the contributions from your acoustic

00:05:58 --> 00:06:03
model and from your language model so a

00:06:00 --> 00:06:05
traditional speech system is broken down

00:06:02 --> 00:06:07
into these pieces and a lot of the

00:06:04 --> 00:06:11
ffort and getting that system to work

00:06:06 --> 00:06:14
is is in developing this sort of portion

00:06:10 --> 00:06:16
that combines them all so it turns out

00:06:13 --> 00:06:19
hat if you want to just directly

00:06:15 --> 00:06:22
transcribe audio you can't just go

00:06:18 --> 00:06:24
straight to characters and the reason is

00:06:21 --> 00:06:27
and it's especially apparent in English

00:06:23 --> 00:06:29
that the way something is spelled in

00:06:26 --> 00:06:32
characters doesn't always correspond

00:06:28 --> 00:06:34
well to the way that it sounds so if if

00:06:31 --> 00:06:37
I give you the word night for example

00:06:33 --> 00:06:38
without context you don't really know

00:06:36 --> 00:06:40
hether I'm talking about like a knight

00:06:37 --> 00:06:42
in armor or whether I'm talking like

00:06:39 --> 00:06:44
knight like in like an evening

00:06:41 --> 00:06:45
and so a way to get around this to

00:06:43 --> 00:06:49
abstract this problem away from a

00:06:44 --> 00:06:50
traditional system is to replace this

00:06:48 --> 00:06:52
with a sort of intermediate

00:06:49 --> 00:06:54
representation instead of trying to

00:06:51 --> 00:06:57
predict characters I'll just try to

00:06:53 --> 00:06:59
predict something called phonemes so as

00:06:56 --> 00:07:02
an example if I want to represent the

00:06:58 --> 00:07:04
word hello what I might try to do is

00:07:01 --> 00:07:07
break it down into these units of sound

00:07:03 --> 00:07:11
so the first one is like the that H

00:07:06 --> 00:07:12
sound in hello and then an a sound which

00:07:10 --> 00:07:16
is actually only one possible

00:07:11 --> 00:07:18
pronunciation of an e and then an L and

00:07:15 --> 00:07:21
an O sound and that would be my string

00:07:17 --> 00:07:26
that I try to come up with using all of

00:07:20 --> 00:07:28
my different speech components so this

00:07:25 --> 00:07:30
in one sense makes the modeling problem

00:07:27 --> 00:07:32
easier my acoustic model and so on can

00:07:29 --> 00:07:34
be simpler because I don't have to worry

00:07:31 --> 00:07:36
about spelling but it does have this

00:07:33 --> 00:07:38
problem that I have to think about where

00:07:35 --> 00:07:42
these things come from

00:07:37 --> 00:07:45
so these phonemes are intuitively

00:07:41 --> 00:07:48
they're the perceptual e distinct units

00:07:44 --> 00:07:52
of sound that we can use to distinguish

00:07:47 --> 00:07:54
words and they're very approximate this

00:07:51 --> 00:07:56
might be our imagination that these

00:07:53 --> 00:07:59
things actually exist it's not clear how

00:07:55 --> 00:08:01
fundamental this is but they're sort of

00:07:58 --> 00:08:03
standardized there are a bunch of

00:08:00 --> 00:08:06
different conventions for how to define

00:08:02 --> 00:08:08
these and if you're and if you end up

00:08:05 --> 00:08:13
working on a system that uses phonemes

00:08:07 --> 00:08:15
one popular data set is called timet and

00:08:12 --> 00:08:18
so this actually has a corpus of audio

00:08:14 --> 00:08:24
frames with examples of each of these

00:08:17 --> 00:08:27
phonemes so once you have this phoneme

00:08:23 --> 00:08:30
representation unfortunately it adds

00:08:26 --> 00:08:33
even more complexity to this traditional

00:08:29 --> 00:08:35
pipeline because now my acoustic model

00:08:32 --> 00:08:38
doesn't associate this audio feature

00:08:34 --> 00:08:39
with words it actually associates them

00:08:37 --> 00:08:42
with another kind of transcription with

00:08:38 --> 00:08:44
e transcription into phonemes and so I

00:08:41 --> 00:08:46
have to introduce yet another component

00:08:43 --> 00:08:49
into my pipeline that tries to

00:08:45 --> 00:08:52
understand how do I convert the

00:08:48 --> 00:08:53
transcriptions in phonemes into actual

00:08:51 --> 00:08:54
Spelling's and so I need some kind of

00:08:52 --> 00:08:57
dick

00:08:53 --> 00:08:59
or a lexicon to tell me all of that so

00:08:56 --> 00:09:02
this is a way of taking our knowledge

00:08:58 --> 00:09:05
about a language and baking it into this

00:09:01 --> 00:09:07
engineered pipeline and then once you've

00:09:04 --> 00:09:10
got all that again all of your work now

00:09:06 --> 00:09:12
goes into this decoder that has a

00:09:09 --> 00:09:14
slightly more complicated task in order

00:09:11 --> 00:09:19
to infer the most likely word

00:09:13 --> 00:09:21
transcription given the audio so this is

00:09:18 --> 00:09:24
a tried and true pipeline it's been

00:09:20 --> 00:09:25
around for a long time you'll see a

00:09:23 --> 00:09:28
whole bunch of these systems out there

00:09:24 --> 00:09:31
and we're still using a lot of the

00:09:27 --> 00:09:33
vocabulary from these systems but

00:09:30 --> 00:09:36
raditionally the big advantage is that

00:09:32 --> 00:09:38
it's very tweakable if you want to go

00:09:35 --> 00:09:40
add a new pronunciation for a word

00:09:37 --> 00:09:42
you've never heard before you can just

00:09:39 --> 00:09:45
drop it right in that's great

00:09:41 --> 00:09:47
but it's also really hard to get working

00:09:44 --> 00:09:49
well if you start from scratch with this

00:09:46 --> 00:09:52
ystem and you have no experience in

00:09:48 --> 00:09:54
speech recognition it's actually quite

00:09:51 --> 00:09:56
confusing and hard to debug it's very

00:09:53 --> 00:09:59
difficult to know which of these various

00:09:55 --> 00:10:01
models is the one that's behind your

00:09:58 --> 00:10:03
error and especially once we start

00:10:00 --> 00:10:06
dealing with things like accents heavy

00:10:02 --> 00:10:07
noise different kinds of ambiguity that

00:10:05 --> 00:10:10
makes the problem even harder to

00:10:06 --> 00:10:12
engineer around because trying to think

00:10:09 --> 00:10:14
ourselves about how do i tweaked my

00:10:11 --> 00:10:16
pronunciation model for example to

00:10:13 --> 00:10:18
account for someone's accent that I

00:10:15 --> 00:10:21
haven't heard that's a very hard

00:10:17 --> 00:10:23
engineering judgment for us to make so

00:10:20 --> 00:10:25
there are all kinds of design decisions

00:10:22 --> 00:10:29
that go into this pipeline like choosing

00:10:24 --> 00:10:33
the future representation for example so

00:10:28 --> 00:10:35
the first place that deep learning has

00:10:32 --> 00:10:38
tarted to make an impact in speech

00:10:34 --> 00:10:41
recognition starting a few years ago is

00:10:37 --> 00:10:42
to just take one of the core machine

00:10:40 --> 00:10:44
learning components of the system and

00:10:41 --> 00:10:47
replace it with a deep learning

00:10:43 --> 00:10:49
algorithm so I mentioned back in this

00:10:46 --> 00:10:52
previous pipeline that we had this

00:10:48 --> 00:10:54
little model here whose job is to learn

00:10:51 --> 00:10:56
the relationship between a sequence of

00:10:53 --> 00:10:58
phonemes and the audio that we're

00:10:55 --> 00:11:02
hearing so this is called the acoustic

00:10:57 --> 00:11:04
model and there are lots of different

00:11:01 --> 00:11:06
methods for training this thing so take

00:11:03 --> 00:11:08
your favorite machine learning algorithm

00:11:05 --> 00:11:09
you can probably find someone who is

00:11:07 --> 00:11:12
trained in acoustic model with that

00:11:09 --> 00:11:14
algorithm whether it's a Gaussian

00:11:11 --> 00:11:16
mixture model or a bunch of decision

00:11:13 --> 00:11:18
trees and random forests anything for

00:11:15 --> 00:11:20
estimating these kinds of densities

00:11:17 --> 00:11:24
there's a lot of work and trying to make

00:11:19 --> 00:11:28
better acoustic models so some work by

00:11:23 --> 00:11:30
George Dahl and co-authors took what was

00:11:27 --> 00:11:33
a state of the art deep learning system

00:11:29 --> 00:11:35
back in 2011 which is a deep belief

00:11:32 --> 00:11:37
network with some pre training

00:11:34 --> 00:11:40
strategies and dropped it into a state

00:11:36 --> 00:11:42
of the art pipeline in place of this

00:11:39 --> 00:11:44
acoustic model and the results are

00:11:41 --> 00:11:47
actually pretty striking because even

00:11:43 --> 00:11:49
though we had neural networks and these

00:11:46 --> 00:11:52
pipelines for a while what ended up

00:11:48 --> 00:11:55
happening is that when you replace the

00:11:51 --> 00:11:58
Gaussian mixture model in hmm system

00:11:54 --> 00:12:00
that already existed with this deep

00:11:57 --> 00:12:01
belief network as an acoustic model you

00:11:59 --> 00:12:03
actually got something between like a

00:12:00 --> 00:12:06
ten and twenty percent relative

00:12:02 --> 00:12:08
improvement in accuracy which is a huge

00:12:05 --> 00:12:11
jump this is highly noticeable to a

00:12:07 --> 00:12:13
person and if you compare this to the

00:12:10 --> 00:12:17
amount of progress that had been made in

00:12:12 --> 00:12:20
preceding years this is a giant leap for

00:12:16 --> 00:12:22
a single paper to make compared to a

00:12:19 --> 00:12:25
progress we've been able to make

00:12:21 --> 00:12:28
previously so this is in some sense the

00:12:24 --> 00:12:30
first generation of deep learning for

00:12:27 --> 00:12:33
speech recognition which is I take one

00:12:29 --> 00:12:34
of these components and I swap it out

00:12:32 --> 00:12:39
for for my favorite deep learning

00:12:33 --> 00:12:40
algorithm so the picture looks sort of

00:12:38 --> 00:12:43
like this

00:12:39 --> 00:12:46
o with these traditional speech

00:12:42 --> 00:12:48
recognition pipelines the problem that

00:12:45 --> 00:12:51
we would always run into is that if you

00:12:47 --> 00:12:52
gave me a lot more data he gave me a

00:12:50 --> 00:12:55
much bigger computer so that I could

00:12:51 --> 00:12:57
train a huge model that actually didn't

00:12:54 --> 00:12:59
help me because all the problems I had

00:12:56 --> 00:13:03
were in the construction of this

00:12:58 --> 00:13:05
pipeline and so eventually if you gave

00:13:02 --> 00:13:06
me more data in a bigger computer the

00:13:04 --> 00:13:09
performance of our speech recognition

00:13:05 --> 00:13:11
system would just kind of peter out it

00:13:08 --> 00:13:13
would just reach a ceiling that was very

00:13:10 --> 00:13:14
hard to get over and so we just start

00:13:12 --> 00:13:16
coming up with lots of different

00:13:13 --> 00:13:18
strategies we start specializing for

00:13:15 --> 00:13:20
each application we try to specialize

00:13:17 --> 00:13:21
for each user

00:13:19 --> 00:13:24
and try to make things a little bit

00:13:20 --> 00:13:26
better around the edges and what these

00:13:23 --> 00:13:29
deep learning acoustic models did was in

00:13:25 --> 00:13:32
some sense moved that barrier a little

00:13:28 --> 00:13:35
ways it made it possible for us to take

00:13:31 --> 00:13:36
a bit more data much faster computers

00:13:34 --> 00:13:41
that let us try a whole lot of models

00:13:35 --> 00:13:43
and move that ceiling up quite a ways so

00:13:40 --> 00:13:45
the question that many in the research

00:13:42 --> 00:13:48
community including folks if I do have

00:13:44 --> 00:13:52
been trying to answer is can we go to a

00:13:47 --> 00:13:54
next-generation version of this insight

00:13:51 --> 00:13:56
can we for instance build a speech

00:13:53 --> 00:14:00
engine that is powered by deep learning

00:13:55 --> 00:14:02
all the way from the audio input to the

00:13:59 --> 00:14:04
transcription itself can we replace as

00:14:01 --> 00:14:06
much of that traditional system with

00:14:03 --> 00:14:10
deep learning as possible so that over

00:14:05 --> 00:14:12
time is you give researchers more data

00:14:09 --> 00:14:14
nd bigger computers and the ability to

00:14:11 --> 00:14:16
try more models their speech recognition

00:14:13 --> 00:14:18
performance just keeps going up and we

00:14:15 --> 00:14:22
can potentially solve speech for

00:14:17 --> 00:14:25
everybody so the goal of this tutorial

00:14:21 --> 00:14:27
is not to to get you up here which

00:14:24 --> 00:14:30
requires a whole bunch of things that

00:14:26 --> 00:14:31
I'll tell you about near the end but

00:14:29 --> 00:14:34
what we want to try to do is give you

00:14:30 --> 00:14:37
enough to get a point on this curve and

00:14:33 --> 00:14:40
then once you're on the curve the the

00:14:36 --> 00:14:42
idea is that what remains is now a

00:14:39 --> 00:14:45
problem of scale it's about data and

00:14:41 --> 00:14:47
about getting bigger computers and

00:14:44 --> 00:14:49
coming up with ways to build bigger

00:14:46 --> 00:14:51
models so that's my objective so that

00:14:48 --> 00:14:53
when you walk away from here you have a

00:14:50 --> 00:14:56
picture of what you would need to build

00:14:52 --> 00:15:00
to get this point and then after that

00:14:55 --> 00:15:03
it's hopefully all about scale so thanks

00:14:59 --> 00:15:05
to Vinay Rao who's been helping put this

00:15:02 --> 00:15:09
tutorial together there is going to be

00:15:04 --> 00:15:11
some starter code live for the basic

00:15:08 --> 00:15:13
pipeline the deep learning part of the

00:15:10 --> 00:15:14
pipeline that we're talking about so

00:15:12 --> 00:15:18
there are some open source

00:15:13 --> 00:15:19
implementations of things like CTC but

00:15:17 --> 00:15:21
we wanted to make sure that there's a

00:15:18 --> 00:15:23
system out there that's pretty

00:15:20 --> 00:15:24
representative of the acoustic models

00:15:22 --> 00:15:27
that I'm going to be talking about in

00:15:24 --> 00:15:30
the first half of the presentation here

00:15:26 --> 00:15:32
so this will be enough that you can get

00:15:29 --> 00:15:33
a simple pipeline going with something

00:15:31 --> 00:15:35
called max Dakota

00:15:32 --> 00:15:37
which I'll tell you about later and the

00:15:34 --> 00:15:40
idea is that this is sort of a scale

00:15:36 --> 00:15:42
model of the acoustic models that I do

00:15:39 --> 00:15:45
and other places are powering real

00:15:41 --> 00:15:50
production speech engines so this will

00:15:44 --> 00:15:52
get you that point on the curve okay

00:15:49 --> 00:15:55
so here's what we're going to talk about

00:15:51 --> 00:15:57
he first part I'm just going to

00:15:54 --> 00:15:59
introduce a few preliminaries talk about

00:15:56 --> 00:16:01
pre-processing so we still have a little

00:15:58 --> 00:16:02
bit of pre-processing around but it's

00:16:00 --> 00:16:04
not really fundamental I think it's

00:16:01 --> 00:16:07
probably going to go away in the long

00:16:03 --> 00:16:10
run we'll talk about what is probably

00:16:06 --> 00:16:13
the most mature piece of sequence

00:16:09 --> 00:16:15
learning technologies for deep learning

00:16:12 --> 00:16:17
right now so it turns out that one of

00:16:14 --> 00:16:20
the fundamental problems of doing speech

00:16:16 --> 00:16:22
recognition is how do I build a neural

00:16:19 --> 00:16:24
network that can map this audio signal

00:16:21 --> 00:16:28
to a transcription that can have a quite

00:16:23 --> 00:16:31
variable length and so CTC is one highly

00:16:27 --> 00:16:32
mature method for doing this and I think

00:16:30 --> 00:16:34
you're actually going to hear about

00:16:31 --> 00:16:36
maybe some some other solutions later

00:16:33 --> 00:16:39
today then I'll say a little bit about

00:16:35 --> 00:16:42
raining and just what that looks like

00:16:38 --> 00:16:44
oops and then finally say a bit about

00:16:41 --> 00:16:47
decoding and language models which is

00:16:43 --> 00:16:49
ort of an addendum to the current

00:16:46 --> 00:16:51
acoustic models that we can build that

00:16:48 --> 00:16:54
make them perform a lot better and then

00:16:50 --> 00:16:56
once you have this that's a picture of

00:16:53 --> 00:16:58
what you need to to get this point on

00:16:55 --> 00:17:00
the curve and then I'll talk a little

00:16:57 --> 00:17:02
bit about what's remaining how do you

00:16:59 --> 00:17:05
scale up from this little scale model up

00:17:01 --> 00:17:07
to the full thing what does what does

00:17:04 --> 00:17:08
that actually entail and then time

00:17:06 --> 00:17:11
permitting we'll talk a little bit about

00:17:07 --> 00:17:13
production how could you put something

00:17:10 --> 00:17:17
like this into a cloud server and

00:17:12 --> 00:17:21
actually serve real users with it great

00:17:16 --> 00:17:25
so how is audio represented this should

00:17:20 --> 00:17:26
be pretty straightforward I think unlike

00:17:24 --> 00:17:29
a two dimensional image where we

00:17:25 --> 00:17:32
normally have a 2d grid of pixels audio

00:17:28 --> 00:17:34
is just a 1d signal and there are a

00:17:31 --> 00:17:37
bunch of different formats for audio but

00:17:33 --> 00:17:38
ypically this one-dimensional wave that

00:17:36 --> 00:17:42
is actually me saying something

00:17:37 --> 00:17:46
like hello world is something like 8,000

00:17:41 --> 00:17:46
samples per second or 16,000 samples per

00:17:45 --> 00:17:50
second

00:17:45 --> 00:17:53
and each wave is quantized into eight or

00:17:49 --> 00:17:54
16 bits so when we represent this audio

00:17:52 --> 00:17:56
signal that's going to go into our

00:17:53 --> 00:17:58
pipeline you could just think of that as

00:17:55 --> 00:18:01
a one dimensional vector so when I have

00:17:57 --> 00:18:03
that box called X that represented my

00:18:00 --> 00:18:05
audio signal you can figure this was

00:18:02 --> 00:18:08
being broke down broken down into

00:18:04 --> 00:18:11
samples X 1 X 2 and so forth and if I

00:18:07 --> 00:18:13
had a one-second audio clip this vector

00:18:10 --> 00:18:17
would have a length of either say 8,000

00:18:12 --> 00:18:19
or 16,000 samples and each element would

00:18:16 --> 00:18:21
be say a floating-point number that I

00:18:18 --> 00:18:25
had extracted from this eight or 16-bit

00:18:20 --> 00:18:28
sample this is really simple now once I

00:18:24 --> 00:18:30
have an audio clip we'll do a little bit

00:18:27 --> 00:18:33
of pre-processing so there are a couple

00:18:29 --> 00:18:36
of ways to start the first is to just do

00:18:32 --> 00:18:39
some vanilla pre-processing like convert

00:18:35 --> 00:18:41
o a simple spectrogram so if you look

00:18:38 --> 00:18:43
at a traditional speech pipeline you're

00:18:40 --> 00:18:45
going to see things like M FCC's which

00:18:42 --> 00:18:49
are mell frequency capital coefficients

00:18:44 --> 00:18:51
you'll see a whole bunch of plays on

00:18:48 --> 00:18:53
spectrograms where you take differences

00:18:50 --> 00:18:56
in different kinds of features and try

00:18:52 --> 00:18:57
to engineer complex representations but

00:18:55 --> 00:18:59
for the stuff that we're going to do

00:18:56 --> 00:19:02
today a simple spectrogram is just fine

00:18:58 --> 00:19:03
and it turns out as you'll see in a

00:19:01 --> 00:19:06
second we lose a little bit of

00:19:02 --> 00:19:08
information when we do this but it turns

00:19:05 --> 00:19:11
out not to not to be a huge difference

00:19:07 --> 00:19:13
now I said a moment ago that I think

00:19:10 --> 00:19:16
probably this is going to go away in the

00:19:12 --> 00:19:19
long run and that's because today you

00:19:15 --> 00:19:21
can actually find recent research and

00:19:18 --> 00:19:22
trying to do away with even this

00:19:20 --> 00:19:24
pre-processing part and having your

00:19:21 --> 00:19:27
neural network process the audio wave

00:19:23 --> 00:19:29
directly and just train its own feature

00:19:26 --> 00:19:31
transformation so there's some

00:19:28 --> 00:19:36
references at the end that you can look

00:19:30 --> 00:19:38
at for this so it's a quick straw poll

00:19:35 --> 00:19:41
how many people have seen a spectrogram

00:19:37 --> 00:19:45
or computed a spectrogram before pretty

00:19:40 --> 00:19:47
good maybe 50% ok so the idea behind a

00:19:44 --> 00:19:50
spectrogram is that it's sort of like a

00:19:46 --> 00:19:52
frequency domain representation but

00:19:49 --> 00:19:55
instead of representing this entire

00:19:51 --> 00:19:58
signal in terms of frequencies I'm just

00:19:54 --> 00:20:02
going to represent a small small window

00:19:57 --> 00:20:04
in terms of frequencies so to to process

00:20:01 --> 00:20:07
this audio clip the first thing I'm

00:20:03 --> 00:20:09
going to do is cut out a little window

00:20:06 --> 00:20:11
that's typically about 20 milliseconds

00:20:08 --> 00:20:13
long and when you get down to that scale

00:20:10 --> 00:20:15
it's usually very clear that these audio

00:20:12 --> 00:20:18
signals are made up of sort of a

00:20:14 --> 00:20:21
combination of different frequencies of

00:20:17 --> 00:20:23
sine waves and then what we do is we

00:20:20 --> 00:20:25
compute an FFT it basically converts

00:20:22 --> 00:20:29
this little signal into the frequency

00:20:24 --> 00:20:33
domain and then we just take the log of

00:20:28 --> 00:20:35
the power at each frequency and so if

00:20:32 --> 00:20:39
you look at your what the result of this

00:20:34 --> 00:20:42
it basically tells us for every

00:20:38 --> 00:20:44
frequency of sine wave what is the

00:20:41 --> 00:20:47
magnitude what's the amount of power

00:20:43 --> 00:20:50
epresented by that sine wave that makes

00:20:46 --> 00:20:53
up this original signal so over here in

00:20:49 --> 00:20:56
this example we have a very strong low

00:20:52 --> 00:20:59
frequency component in the signal and

00:20:55 --> 00:21:04
then we have differing magnitudes at

00:20:58 --> 00:21:07
different differing frequencies so we

00:21:03 --> 00:21:08
can just think of this as a vector so

00:21:06 --> 00:21:11
now instead of representing this little

00:21:07 --> 00:21:13
20 millisecond slice as sort of a

00:21:10 --> 00:21:15
sequence of audio samples instead I'm

00:21:12 --> 00:21:19
going to represent it as a vector here

00:21:14 --> 00:21:21
where each element represents sort of

00:21:18 --> 00:21:25
the strengths of each frequency in this

00:21:20 --> 00:21:27
little window and the next step beyond

00:21:24 --> 00:21:29
this is that if I just told you how to

00:21:26 --> 00:21:31
process one little window you can of

00:21:28 --> 00:21:34
course apply this to a whole bunch of

00:21:30 --> 00:21:37
windows across the entire piece of audio

00:21:33 --> 00:21:39
and and that gives you what we call a

00:21:36 --> 00:21:41
spectrogram and you can use either

00:21:38 --> 00:21:43
disjoint windows that are just sort of

00:21:40 --> 00:21:45
adjacent or you can apply them to

00:21:42 --> 00:21:47
verlapping windows if you like so

00:21:44 --> 00:21:49
there's a little bit of parameter tuning

00:21:46 --> 00:21:53
there but this is an alternative

00:21:48 --> 00:21:54
representation of this audio signal that

00:21:52 --> 00:22:01
happens to be easier to use for a lot of

00:21:53 --> 00:22:04
purposes okay so our goal starting from

00:22:00 --> 00:22:06
this representation is to build what I'm

00:22:03 --> 00:22:07
going to call an acoustic model but

00:22:05 --> 00:22:10
which is really to the extent we can

00:22:06 --> 00:22:11
make it happen is really going to be an

00:22:09 --> 00:22:13
entire speech engine

00:22:10 --> 00:22:16
that is represented by a neural network

00:22:12 --> 00:22:19
so what we would like to do is build a

00:22:15 --> 00:22:21
neural net that if we could train it

00:22:18 --> 00:22:23
from a whole bunch of pairs X which is

00:22:20 --> 00:22:26
my original audio that I turn into a

00:22:22 --> 00:22:28
spectrogram and Y star that's the ground

00:22:25 --> 00:22:31
truth transcription that some human is

00:22:27 --> 00:22:34
given me if I were to train this big

00:22:30 --> 00:22:37
neural network off of these pairs what

00:22:33 --> 00:22:39
I'd like it to produce is some kind of

00:22:36 --> 00:22:42
output that I'm representing by the

00:22:38 --> 00:22:46
character C here so that I could later

00:22:41 --> 00:22:48
extract the correct transcription which

00:22:45 --> 00:22:50
I'm going to denote by Y so if I said

00:22:47 --> 00:22:52
hello the first thing I'm going to do is

00:22:49 --> 00:22:54
run pre-processing to get all these

00:22:51 --> 00:22:56
spectrogram frames and then I'm going to

00:22:53 --> 00:22:59
have a recurrent neural network that

00:22:55 --> 00:23:02
consumes each frame and processes them

00:22:58 --> 00:23:05
into some new representation called C

00:23:01 --> 00:23:07
and hopefully I can engineer my network

00:23:04 --> 00:23:10
in such a way but I can just read the

00:23:06 --> 00:23:12
transcription off of these output

00:23:09 --> 00:23:14
neurons so that's kind of the the

00:23:11 --> 00:23:17
intuitive picture of what we want to

00:23:13 --> 00:23:21
accomplish so as I mentioned back in the

00:23:16 --> 00:23:25
outline there's one obvious fundamental

00:23:20 --> 00:23:28
problem here which is that the length of

00:23:24 --> 00:23:31
the input is not the same as the length

00:23:27 --> 00:23:34
of the transcription so if I say hello

00:23:30 --> 00:23:36
very slowly then I can have a very long

00:23:33 --> 00:23:38
audio signal even though I didn't change

00:23:35 --> 00:23:41
the length of the transcription or if I

00:23:37 --> 00:23:42
say hello very quickly then I kind of

00:23:40 --> 00:23:45
very short transcript or a very short

00:23:41 --> 00:23:47
piece of audio and so that means that

00:23:44 --> 00:23:48
his output of my neural network is

00:23:46 --> 00:23:52
changing length and I need to come up

00:23:48 --> 00:23:54
with some way to reprimand neural

00:23:51 --> 00:23:57
network output to this fixed length

00:23:53 --> 00:23:58
transcription and also do it in a way

00:23:56 --> 00:24:03
that we can actually train this pipeline

00:23:57 --> 00:24:07
so the traditional way to deal with this

00:24:02 --> 00:24:09
problem if you were building a speech

00:24:06 --> 00:24:12
engine several years ago is to just try

00:24:08 --> 00:24:13
to bootstrap the whole system so I had

00:24:11 --> 00:24:16
actually train a neural network to

00:24:12 --> 00:24:19
correctly predict the sounds at every

00:24:15 --> 00:24:21
frame using some kind of data set like

00:24:18 --> 00:24:23
timet where someone has lovingly

00:24:20 --> 00:24:25
annotated all of the phonemes for me

00:24:22 --> 00:24:27
and then I try to figure out the

00:24:24 --> 00:24:30
alignment between my saying hello in a

00:24:26 --> 00:24:33
phonetic transcription with the input

00:24:29 --> 00:24:35
audio and then once I've lined up all of

00:24:32 --> 00:24:37
the sounds with the input audio now I

00:24:34 --> 00:24:39
don't care about length anymore because

00:24:36 --> 00:24:42
I can just make a one-to-one mapping

00:24:38 --> 00:24:44
between the audio input and the phoneme

00:24:41 --> 00:24:47
outputs that I'm trying to target but

00:24:43 --> 00:24:49
his alignment process is horribly

00:24:46 --> 00:24:51
error-prone you have to do a lot of

00:24:48 --> 00:24:52
extra work to make it work well and so

00:24:50 --> 00:24:54
we really don't want to do this we

00:24:51 --> 00:24:57
really want to have some kind of

00:24:53 --> 00:24:59
solution that lets us solve this

00:24:56 --> 00:25:00
traightaway so there are multiple ways

00:24:58 --> 00:25:02
to do it

00:24:59 --> 00:25:03
and as I mentioned there's some current

00:25:01 --> 00:25:05
research on how to use things like

00:25:02 --> 00:25:09
attentional model sequence to sequence

00:25:04 --> 00:25:12
models that you'll hear about later in

00:25:08 --> 00:25:14
order to solve this kind of problem but

00:25:11 --> 00:25:16
as I said we'll focus on something

00:25:13 --> 00:25:20
called connexion connectionist temporal

00:25:15 --> 00:25:21
classification or ctc that is sort of

00:25:19 --> 00:25:25
current state of the art for how to do

00:25:20 --> 00:25:28
this so here's the basic idea

00:25:24 --> 00:25:31
so our recurrent neural network has

00:25:27 --> 00:25:34
these output neurons that I'm calling C

00:25:30 --> 00:25:39
and the job of these output neurons is

00:25:33 --> 00:25:43
to encode a distribution over over the

00:25:38 --> 00:25:44
output symbols so as because of the

00:25:42 --> 00:25:47
structure of the recurrent Network the

00:25:43 --> 00:25:49
length of this symbol sequence C is the

00:25:46 --> 00:25:52
same as the length of my audio input so

00:25:48 --> 00:25:55
if my audio inputs a was two seconds

00:25:51 --> 00:25:57
long that might have a hundred audio

00:25:54 --> 00:26:00
frames and that would mean that the

00:25:56 --> 00:26:02
length of C is also a hundred a hundred

00:25:59 --> 00:26:05
ifferent values so if we were working

00:26:01 --> 00:26:08
on a phoneme based model then C would be

00:26:04 --> 00:26:10
some kind of phoning representation I

00:26:07 --> 00:26:13
mean we would also include a blank

00:26:09 --> 00:26:16
symbol which is special for CTC but if

00:26:12 --> 00:26:19
as we'll do in the rest of this talk

00:26:15 --> 00:26:20
we're trying to just predict the

00:26:18 --> 00:26:22
graphemes trying to predict the

00:26:19 --> 00:26:25
characters in this language directly

00:26:21 --> 00:26:29
from the audio then I would just let C

00:26:24 --> 00:26:31
take on a value that's in my alphabet or

00:26:28 --> 00:26:34
take on a blank or a space if my

00:26:30 --> 00:26:36
language has spaces in it and then the

00:26:33 --> 00:26:39
second thing I'm going to do

00:26:35 --> 00:26:42
sigh my RNN gives me a distribution over

00:26:38 --> 00:26:44
these symbols see is what I'm going to

00:26:41 --> 00:26:48
try to define some kind of mapping that

00:26:43 --> 00:26:51
can convert this long transcription C

00:26:47 --> 00:26:54
into the final transcription Y that's

00:26:50 --> 00:26:57
like hello that's the actual string that

00:26:53 --> 00:27:00
I want and now recognizing that C is

00:26:56 --> 00:27:03
itself a probabilistic creature there's

00:26:59 --> 00:27:06
a distribution over choices of C that

00:27:02 --> 00:27:07
correspond to the audio once I apply

00:27:05 --> 00:27:10
this function that also means that

00:27:06 --> 00:27:11
here's a distribution over Y there's a

00:27:09 --> 00:27:13
distribution over the possible

00:27:10 --> 00:27:15
transcriptions that I could get and what

00:27:12 --> 00:27:18
I'll want to do to train my network is

00:27:14 --> 00:27:21
to maximize the probability of the

00:27:17 --> 00:27:23
correct transcription given the audio so

00:27:20 --> 00:27:26
those are the three steps that we have

00:27:22 --> 00:27:31
to accomplish in order to make CTC work

00:27:25 --> 00:27:34
so let's start with the first one so we

00:27:31 --> 00:27:36
have these output neurons C and they

00:27:33 --> 00:27:38
represent a distribution over the

00:27:35 --> 00:27:41
different symbols that I could be

00:27:37 --> 00:27:42
hearing in the audio so I've got some

00:27:40 --> 00:27:46
audio signal down here you can see the

00:27:41 --> 00:27:47
spectrogram frames poking up and this is

00:27:45 --> 00:27:52
being processed by this recurrent neural

00:27:46 --> 00:27:55
network and the output is a big bank of

00:27:51 --> 00:27:58
softmax in herranz so for the first

00:27:54 --> 00:28:00
frame of audio I have a neuron that

00:27:57 --> 00:28:05
corresponds to each of the symbols that

00:27:59 --> 00:28:08
C could represent and they and this set

00:28:04 --> 00:28:10
of softmax neurons here the with the

00:28:07 --> 00:28:13
output summing to 1 represents the

00:28:09 --> 00:28:16
probability of say C 1 having the value

00:28:12 --> 00:28:19
ABC and so on or this special blank

00:28:15 --> 00:28:23
character so for example if I pick one

00:28:19 --> 00:28:26
of the neurons over here then the first

00:28:22 --> 00:28:29
row which it represents the character B

00:28:25 --> 00:28:32
and the 17th column which is the 17th

00:28:28 --> 00:28:37
frame in time this represents the

00:28:31 --> 00:28:42
probability that C 1 7 represents the

00:28:36 --> 00:28:45
character be given the audio so once I

00:28:41 --> 00:28:48
have this that also means that I can

00:28:44 --> 00:28:49
just define a distribution not just over

00:28:47 --> 00:28:51
the

00:28:48 --> 00:28:53
visual characters but if I just assume

00:28:50 --> 00:28:54
that all of the characters are

00:28:52 --> 00:28:57
independent which is kind of a naive

00:28:53 --> 00:28:59
assumption but if I bake this into the

00:28:56 --> 00:29:03
system I can define a distribution over

00:28:58 --> 00:29:06
all possible sequences of characters in

00:29:02 --> 00:29:10
this alphabet so if I gave you a

00:29:05 --> 00:29:13
specific instance a specific character

00:29:09 --> 00:29:18
string using this alphabet for instance

00:29:12 --> 00:29:21
I represent the string hello as HHH e

00:29:17 --> 00:29:24
blank e blank blank LL blank ello and

00:29:20 --> 00:29:27
then a bunch of blanks this is a string

00:29:23 --> 00:29:30
in this alphabet for for C and I can

00:29:26 --> 00:29:32
just use this formula to compute the

00:29:29 --> 00:29:35
probability of this specific sequence of

00:29:31 --> 00:29:38
characters so that's how we we compute

00:29:34 --> 00:29:40
the probability for a sequence of

00:29:37 --> 00:29:45
characters when they have the same

00:29:39 --> 00:29:48
length as the audio input so the second

00:29:44 --> 00:29:53
step and this is in some sense the kind

00:29:47 --> 00:29:59
of neat trick in CTC is to define a

00:29:52 --> 00:30:03
mapping from this long encoding of the

00:29:58 --> 00:30:05
audio into symbols that crunches it down

00:30:02 --> 00:30:08
to the actual transcription that we're

00:30:04 --> 00:30:11
trying to predict and the rule is this

00:30:07 --> 00:30:14
operator takes this character sequence

00:30:10 --> 00:30:16
and it picks up all the duplicates all

00:30:13 --> 00:30:19
of the adjacent characters that are

00:30:15 --> 00:30:22
peated and discards the duplicates and

00:30:18 --> 00:30:25
just keep some of them and then it drops

00:30:21 --> 00:30:28
all of the blanks so in this example you

00:30:24 --> 00:30:31
see you have three H's together so I

00:30:27 --> 00:30:34
just keep one H and then I have a blank

00:30:30 --> 00:30:36
I throw that away and I keep an e when I

00:30:33 --> 00:30:37
have two L's so I keep one of the LS

00:30:35 --> 00:30:40
over here and then another blank and an

00:30:36 --> 00:30:43
elbow and the one key thing to note is

00:30:39 --> 00:30:45
that when I have two characters that are

00:30:42 --> 00:30:48
different right next to each other I

00:30:44 --> 00:30:50
just end up keeping those two characters

00:30:47 --> 00:30:54
in my output but if I ever have a double

00:30:49 --> 00:30:57
character like ll in hello then I'll

00:30:53 --> 00:31:01
need to have a blank character that that

00:30:56 --> 00:31:02
gets put in between but if our neural

00:31:00 --> 00:31:04
network gave me this

00:31:01 --> 00:31:06
transcription told me that this was the

00:31:03 --> 00:31:09
right answer we just have to apply this

00:31:05 --> 00:31:15
operator and we get back Vic string

00:31:08 --> 00:31:17
hello so now that we have a way to

00:31:14 --> 00:31:19
define a distribution over these

00:31:16 --> 00:31:21
quences of symbols that are the same

00:31:18 --> 00:31:24
length as the audio and we now have a

00:31:20 --> 00:31:27
mapping from those strings into

00:31:23 --> 00:31:29
transcriptions as I said this gives us a

00:31:26 --> 00:31:33
probability distribution over the

00:31:28 --> 00:31:34
possible final transcriptions so if I

00:31:32 --> 00:31:37
look at the probability distribution

00:31:33 --> 00:31:38
over all the different sequences of

00:31:36 --> 00:31:41
symbols right

00:31:37 --> 00:31:43
I might have hello written out like on

00:31:40 --> 00:31:46
the last slide and maybe that has

00:31:42 --> 00:31:48
probability 0.1 and then I might have

00:31:45 --> 00:31:50
hello but written a different way with a

00:31:47 --> 00:31:53
different by say replacing this H with a

00:31:49 --> 00:31:55
blank that has a smaller probability and

00:31:52 --> 00:31:58
I have a whole bunch of different

00:31:54 --> 00:32:01
possible symbol sequences below that and

00:31:57 --> 00:32:04
what you'll notice is that if I go

00:32:01 --> 00:32:06
through every possible combination of

00:32:03 --> 00:32:09
symbols here

00:32:05 --> 00:32:12
there are several combinations that all

00:32:08 --> 00:32:14
map to the same transcription so here's

00:32:11 --> 00:32:16
one version of hello there's a second

00:32:13 --> 00:32:19
version of hello there's a third version

00:32:15 --> 00:32:22
of hello and so if I now ask what's the

00:32:18 --> 00:32:24
probability of the transcription hello

00:32:21 --> 00:32:27
the way that I compute that is I go

00:32:23 --> 00:32:30
through all of the possible character

00:32:26 --> 00:32:32
sequences that correspond to the

00:32:29 --> 00:32:35
transcription hello and I add up all of

00:32:31 --> 00:32:38
their probabilities so I have to sum

00:32:34 --> 00:32:39
over all possible choices of C that

00:32:37 --> 00:32:44
could give me that transcription in the

00:32:38 --> 00:32:46
nd so you can kind of think of this as

00:32:43 --> 00:32:48
earching through all the possible

00:32:45 --> 00:32:51
alignments right

00:32:47 --> 00:32:52
I could shift these characters around a

00:32:50 --> 00:32:54
little bit I can move them forward

00:32:51 --> 00:32:56
backward I could expand them by adding

00:32:53 --> 00:32:59
duplicates or squish them up depending

00:32:55 --> 00:33:01
on how fast someone is talking and that

00:32:58 --> 00:33:05
corresponds to every possible alignment

00:33:00 --> 00:33:06
between the audio and the characters

00:33:04 --> 00:33:08
that I want to transcribe it sort of

00:33:05 --> 00:33:11
solves the problem of the variable

00:33:07 --> 00:33:13
ngth and the way that I get the

00:33:10 --> 00:33:15
probability of a specific transcription

00:33:12 --> 00:33:17
is to sum up to

00:33:14 --> 00:33:21
marginalize over all the different

00:33:16 --> 00:33:23
alignments that could be feasible and

00:33:20 --> 00:33:25
then if we have a whole bunch of other

00:33:22 --> 00:33:27
possibilities in here like the word

00:33:24 --> 00:33:30
yellow-eyed compute them in the same way

00:33:26 --> 00:33:33
and so this equation just says to sum

00:33:29 --> 00:33:34
over all the character sequences see so

00:33:32 --> 00:33:36
that when I apply this little mapping

00:33:33 --> 00:33:50
operator I end up with the transcription

00:33:35 --> 00:33:54
why is oh I'm missing a EE you're

00:33:49 --> 00:33:57
talking about this one so when we apply

00:33:53 --> 00:34:00
this sort of squeezing operator here we

00:33:56 --> 00:34:04
drop this double e to get a single Ian

00:33:59 --> 00:34:11
hello so we remove all the duplicates so

00:34:03 --> 00:34:14
the same way we did for an H right so

00:34:10 --> 00:34:15
whenever you see two characters together

00:34:13 --> 00:34:18
like this where they're adjacent

00:34:14 --> 00:34:19
duplicates you sort of squeeze all those

00:34:17 --> 00:34:22
duplicates out and you just keep one of

00:34:18 --> 00:34:24
them but here we have a blank in between

00:34:21 --> 00:34:28
so if we drop all the duplicates first

00:34:23 --> 00:34:30
hen we still have two L's left and then

00:34:27 --> 00:34:31
we remove all the blanks so this gives

00:34:29 --> 00:34:35
the algorithm a way to represent

00:34:30 --> 00:34:39
repeated characters in the transcription

00:34:34 --> 00:34:39
there's another one in the back

00:34:40 --> 00:34:49
oh I see yeah this is maybe I put a

00:34:45 --> 00:34:51
space in here really I'd have put a

00:34:48 --> 00:34:57
space character in here instead of a

00:34:50 --> 00:35:02
blank really this could be h-e-l-l-o H

00:34:56 --> 00:35:02
yeah so the this space here is erroneous

00:35:02 --> 00:35:10
okay very good

00:35:05 --> 00:35:13
okay so once I've defined this right I

00:35:09 --> 00:35:16
just gave you a formula to compute the

00:35:12 --> 00:35:20
probability of a string given the audio

00:35:15 --> 00:35:22
so as as with every good starting to a

00:35:19 --> 00:35:25
machine learning algorithm we go and we

00:35:21 --> 00:35:26
try to apply maximum likelihood I now

00:35:24 --> 00:35:29
give you the correct transcription and

00:35:25 --> 00:35:31
your job is to tune the neural network

00:35:28 --> 00:35:33
to maximize the probability of that

00:35:30 --> 00:35:38
ranscription using this model that I

00:35:32 --> 00:35:40
just defined so in equations what I'm

00:35:37 --> 00:35:44
going to do is I want to maximize the

00:35:39 --> 00:35:48
log probability of Y star for a given

00:35:43 --> 00:35:49
example I want to maximize the

00:35:47 --> 00:35:53
probability of the correct transcription

00:35:48 --> 00:35:56
given the audio X and then I'm just

00:35:52 --> 00:36:01
going to sum over all the examples and

00:35:55 --> 00:36:02
then what I want to do is just replace

00:36:00 --> 00:36:05
this with the equation that I had on the

00:36:01 --> 00:36:06
last page that says in order to compute

00:36:04 --> 00:36:09
the probability of a given transcription

00:36:05 --> 00:36:11
I have to sum over all of the possible

00:36:08 --> 00:36:13
symbol sequences that could have given

00:36:10 --> 00:36:16
me that transcription sum over all the

00:36:12 --> 00:36:20
possible alignments that would map that

00:36:15 --> 00:36:23
ranscription to my audio so Alex grades

00:36:19 --> 00:36:25
and co-authors in 2006 actually show

00:36:22 --> 00:36:28
that because of this independence

00:36:24 --> 00:36:29
assumption there is a clever way there

00:36:27 --> 00:36:32
is a dynamic programming algorithm that

00:36:28 --> 00:36:35
can efficiently compute this summation

00:36:31 --> 00:36:37
for you and not only commute compute

00:36:34 --> 00:36:38
this summation so that you can compute

00:36:36 --> 00:36:41
the objective function but actually

00:36:37 --> 00:36:42
compute its gradient with respect to to

00:36:40 --> 00:36:44
the output neurons of your neural

00:36:41 --> 00:36:47
network so if you look at the paper the

00:36:43 --> 00:36:50
algorithm details are in there

00:36:46 --> 00:36:52
what school right now in the history of

00:36:49 --> 00:36:54
speech and deep learning is that this is

00:36:51 --> 00:36:56
at the level of a technology this is

00:36:53 --> 00:36:58
omething that's now implemented in a

00:36:55 --> 00:37:01
bunch of places so that you can download

00:36:57 --> 00:37:05
a software package that efficiently will

00:37:00 --> 00:37:07
calculate this ctc loss function for you

00:37:04 --> 00:37:09
that can calculate this likelihood and

00:37:06 --> 00:37:11
can also just give you back the gradient

00:37:08 --> 00:37:13
so I won't go into the equations here

00:37:10 --> 00:37:15
instead I'll tell you that there are a

00:37:12 --> 00:37:18
whole bunch of implementations on the

00:37:14 --> 00:37:21
web that you can now use as part of deep

00:37:17 --> 00:37:24
learning packages so one of them from

00:37:20 --> 00:37:29
Baidu implements CTC on the GPU is

00:37:23 --> 00:37:31
called warp CTC Stanford and group

00:37:28 --> 00:37:34
they're actually one of Andrews students

00:37:30 --> 00:37:36
has a CTC implementation and there's

00:37:33 --> 00:37:39
also now CTC losses implemented in

00:37:35 --> 00:37:41
packages like tensor flow so this is

00:37:38 --> 00:37:45
omething that's sufficiently widely

00:37:40 --> 00:37:48
distributed that you can use use these

00:37:44 --> 00:37:50
algorithms off the shelf so the way that

00:37:47 --> 00:37:52
hese work the way that we go about

00:37:49 --> 00:37:54
raining is we start from our audio

00:37:51 --> 00:37:57
spectrogram we have our neural network

00:37:53 --> 00:37:59
structure where you get to choose how

00:37:56 --> 00:38:02
it's put together and then it outputs

00:37:58 --> 00:38:04
this Bank of softmax neurons and then

00:38:01 --> 00:38:07
there are pieces of off-the-shelf

00:38:03 --> 00:38:09
software that will compute for you the

00:38:06 --> 00:38:12
CTC cost function they'll compute this

00:38:08 --> 00:38:15
log likelihood given a transcription and

00:38:11 --> 00:38:19
the output neurons from your recurrent

00:38:14 --> 00:38:21
Network and then the software will also

00:38:18 --> 00:38:23
be able to tell you the gradient with

00:38:20 --> 00:38:24
respect to the output neurons and once

00:38:22 --> 00:38:27
you've got that you're set you can feed

00:38:23 --> 00:38:28
them back into the rest of your code and

00:38:26 --> 00:38:32
get the gradient with respect to all of

00:38:28 --> 00:38:34
these parameters so as I said this is

00:38:31 --> 00:38:35
all available now in sort of efficient

00:38:33 --> 00:38:38
off-the-shelf software so you don't have

00:38:34 --> 00:38:41
to do this work yourself so that's

00:38:37 --> 00:38:43
pretty much all there is to the high

00:38:40 --> 00:38:47
level algorithm with this it's actually

00:38:42 --> 00:38:49
enough to get a sort of a working

00:38:46 --> 00:38:52
Drosophila of speech recognition going

00:38:48 --> 00:38:55
there are a few a few little tricks

00:38:51 --> 00:38:57
though that you might need along the way

00:38:54 --> 00:38:59
on easy problems you might not need

00:38:56 --> 00:39:01
these but as you get to more

00:38:58 --> 00:39:03
difficult datasets with a lot of noise

00:39:00 --> 00:39:06
they can become more and more important

00:39:02 --> 00:39:09
so the first one that we've been calling

00:39:05 --> 00:39:13
sort of grad in the vein of all of the

00:39:08 --> 00:39:15
grad algorithms out there is basically a

00:39:12 --> 00:39:19
trick to help with recurrent neural

00:39:14 --> 00:39:21
networks so it turns out that when you

00:39:18 --> 00:39:25
try to train one of these big RNN models

00:39:20 --> 00:39:27
on some off-the-shelf speech data one of

00:39:24 --> 00:39:30
the things that can really get you is

00:39:26 --> 00:39:33
eeing very long utterances early in the

00:39:29 --> 00:39:35
process because if you have a really

00:39:32 --> 00:39:37
long audience then if your neural

00:39:34 --> 00:39:39
network is badly initialized you'll

00:39:36 --> 00:39:41
often end up with things like underflow

00:39:38 --> 00:39:43
and overflow as you try to go and

00:39:40 --> 00:39:45
compute the probabilities and you end up

00:39:42 --> 00:39:47
with gradients exploding as you try to

00:39:44 --> 00:39:50
do back propagation and it can make your

00:39:46 --> 00:39:52
optimization a real mess and it's coming

00:39:49 --> 00:39:54
from the fact that these utterances are

00:39:51 --> 00:39:56
ally long and really hard and the

00:39:53 --> 00:39:58
neural network just isn't ready to deal

00:39:55 --> 00:40:01
with those transcriptions and so one of

00:39:57 --> 00:40:03
the fixes that you can use is during the

00:40:00 --> 00:40:06
arly parts of training usually in the

00:40:02 --> 00:40:09
first epic is you just sort all of your

00:40:05 --> 00:40:11
audio by length and now when you process

00:40:08 --> 00:40:13
a mini batch you just take the short

00:40:10 --> 00:40:15
utterances first so that you're working

00:40:12 --> 00:40:17
with really short rnns that are quite

00:40:14 --> 00:40:19
asy to train and don't blow up and

00:40:16 --> 00:40:22
on't have a lot of catastrophic

00:40:18 --> 00:40:24
numerical problems and then as time goes

00:40:21 --> 00:40:26
by you start operating on longer and

00:40:23 --> 00:40:29
longer addresses that get more and more

00:40:25 --> 00:40:31
difficult so we call this sort of grad

00:40:28 --> 00:40:34
it's basically a curriculum learning

00:40:30 --> 00:40:36
method and so you can see some work from

00:40:33 --> 00:40:38
yoshua bengio and his team on a whole

00:40:35 --> 00:40:40
bunch of strategies for this but you can

00:40:37 --> 00:40:42
think of the short utterances as being

00:40:39 --> 00:40:43
the easy ones and if you start out with

00:40:41 --> 00:40:46
e easy utterances and move to the

00:40:42 --> 00:40:49
longer ones your optimization algorithm

00:40:45 --> 00:40:51
can do better so here's what an example

00:40:48 --> 00:40:54
from one of the models that we've

00:40:50 --> 00:40:56
trained where your CTC cost starts up

00:40:53 --> 00:40:58
here and you know after a while you

00:40:55 --> 00:41:01
optimize and you sort of bottom out

00:40:57 --> 00:41:04
around you know what a log likelihood of

00:41:00 --> 00:41:07
maybe 30 and then if you add this sort

00:41:03 --> 00:41:09
of grad strategy after the first epic

00:41:06 --> 00:41:11
you're actually doing better and you can

00:41:08 --> 00:41:14
reach a better optimum than you

00:41:10 --> 00:41:16
without it and in addition another

00:41:13 --> 00:41:18
strategy that's extremely helpful for

00:41:15 --> 00:41:21
ecurrent networks and very deep neural

00:41:17 --> 00:41:24
networks is batch normalization so so

00:41:20 --> 00:41:25
this becoming very popular and it's also

00:41:23 --> 00:41:28
available as sort of an off-the-shelf

00:41:24 --> 00:41:30
package inside of a lot of the different

00:41:27 --> 00:41:31
frameworks that are available today so

00:41:29 --> 00:41:33
if you start having trouble you can

00:41:30 --> 00:41:38
consider putting batch normalization

00:41:32 --> 00:41:40
into your network okay so our neural

00:41:37 --> 00:41:43
network now spits out this big bank of

00:41:39 --> 00:41:44
softmax neurons we've got a training

00:41:42 --> 00:41:47
algorithm we're just doing gradient

00:41:43 --> 00:41:50
descent how do we actually get a

00:41:46 --> 00:41:52
transcription this process as I said is

00:41:49 --> 00:41:54
meant to be as close to characters as

00:41:51 --> 00:41:58
possible but we still sort of need to

00:41:53 --> 00:42:01
decode these outputs and you might think

00:41:57 --> 00:42:03
that one simple solution which turns out

00:42:00 --> 00:42:05
o be approximate to get the correct

00:42:02 --> 00:42:07
ranscription is just go through here

00:42:04 --> 00:42:11
and pick the most likely sequence of

00:42:06 --> 00:42:13
symbols for C and then apply our little

00:42:10 --> 00:42:15
squeeze operator to get back the

00:42:12 --> 00:42:18
transcription the way that we defined it

00:42:14 --> 00:42:19
so this turns out not to be the optimal

00:42:17 --> 00:42:22
thing this actually doesn't give you the

00:42:18 --> 00:42:24
most likely transcription because it's

00:42:21 --> 00:42:26
not accounting for the fact that every

00:42:23 --> 00:42:30
transcription might have multiple

00:42:25 --> 00:42:33
sequences of C's multiple alignments in

00:42:29 --> 00:42:35
this representation but you can actually

00:42:32 --> 00:42:39
do this and this is called the max

00:42:34 --> 00:42:40
decoding and so for this sort of

00:42:38 --> 00:42:43
contrived example here

00:42:39 --> 00:42:46
I put little red dots on the most likely

00:42:42 --> 00:42:50
C and if you see there's a couple of

00:42:45 --> 00:42:53
blanks a couple of C's is another blank

00:42:49 --> 00:42:55
a more blanks bees more blanks and if

00:42:52 --> 00:43:00
you apply our little squeeze operator

00:42:54 --> 00:43:03
you just get the word cab if you do this

00:42:59 --> 00:43:06
it is often terrible it'll often give

00:43:02 --> 00:43:09
you a very strange transcription that

00:43:05 --> 00:43:11
doesn't look like English necessarily

00:43:08 --> 00:43:14
but the reason I mention it is that this

00:43:10 --> 00:43:15
a really handy diagnostic that if

00:43:13 --> 00:43:17
you're kind of wondering what's going on

00:43:14 --> 00:43:19
in the network glancing at a few of

00:43:16 --> 00:43:21
these will often tell you if the

00:43:18 --> 00:43:23
network's starting to pick up any signal

00:43:20 --> 00:43:25
or if it's just outputting gobbled

00:43:22 --> 00:43:28
cook so I'll give you a more detailed

00:43:24 --> 00:43:31
example in a second of how that happens

00:43:27 --> 00:43:34
all right so these are all the concepts

00:43:30 --> 00:43:35
of our of our very simple pipeline and

00:43:33 --> 00:43:38
the demo code that we're going to put up

00:43:34 --> 00:43:42
on the web will basically let you work

00:43:37 --> 00:43:43
on all of these pieces so once we try to

00:43:41 --> 00:43:45
train these I want to give you an

00:43:42 --> 00:43:48
example of the sort of data that we're

00:43:44 --> 00:43:52
training on a tanker is a ship designed

00:43:47 --> 00:43:54
to carry large volumes of oil okay so

00:43:51 --> 00:43:57
this is just a person sitting there

00:43:53 --> 00:43:59
ading The Wall Street Journal to us so

00:43:56 --> 00:44:01
this is a sort of simple data set it's

00:43:58 --> 00:44:03
really popular in the speech research

00:44:00 --> 00:44:06
community it's published by the

00:44:02 --> 00:44:08
linguistic data consortium there's also

00:44:05 --> 00:44:10
a free alternative called libera speech

00:44:07 --> 00:44:11
that's very similar but instead of

00:44:09 --> 00:44:13
people reading The Wall Street Journal

00:44:10 --> 00:44:19
is people reading Creative Commons

00:44:12 --> 00:44:21
audiobooks so in the demo code that we

00:44:18 --> 00:44:24
have a really simple network that works

00:44:20 --> 00:44:27
reasonably well it looks like this so

00:44:23 --> 00:44:29
there's a sort of family of models that

00:44:26 --> 00:44:31
we've been working with where you start

00:44:28 --> 00:44:34
from your spectrogram you have maybe one

00:44:30 --> 00:44:36
layer or several of convolutional

00:44:33 --> 00:44:38
filters at the bottom and then on top of

00:44:35 --> 00:44:39
that you have some kind of recurrent

00:44:37 --> 00:44:43
neural network it might just be a

00:44:38 --> 00:44:47
vanilla RNN but but you can also use

00:44:42 --> 00:44:50
like LS TM or GRU cells any of your

00:44:46 --> 00:44:52
favorite RNN creatures from the

00:44:49 --> 00:44:54
literature and then on top of that we

00:44:51 --> 00:44:56
have some fully connected layers that

00:44:53 --> 00:44:59
produce these softmax outputs and those

00:44:55 --> 00:45:01
are the things that go into CTC for

00:44:58 --> 00:45:02
training so this is pretty

00:45:00 --> 00:45:05
straightforward the implementation on

00:45:01 --> 00:45:07
the web uses the the work CTC code and

00:45:04 --> 00:45:09
then we would just train this big neural

00:45:06 --> 00:45:11
network with stochastic gradient descent

00:45:08 --> 00:45:13
Nesterov momentum all the stuff that

00:45:10 --> 00:45:17
you've probably seen in a whole bunch of

00:45:12 --> 00:45:19
other talks so far all right so if you

00:45:16 --> 00:45:23
actually run this what is going on

00:45:18 --> 00:45:26
inside so I mentioned that looking at

00:45:22 --> 00:45:28
he max decoding is kind of a handy way

00:45:25 --> 00:45:31
to see what's what's going on inside

00:45:27 --> 00:45:35
this creature so I wanted to show you an

00:45:30 --> 00:45:37
example so this is a picture this is a

00:45:34 --> 00:45:40
visualization

00:45:36 --> 00:45:42
those softmax neurons at the top of one

00:45:39 --> 00:45:45
of these big neural networks so this is

00:45:41 --> 00:45:47
the representation of see from all the

00:45:44 --> 00:45:49
previous slides so on the horizontal

00:45:46 --> 00:45:52
axis this is basically time this is the

00:45:48 --> 00:45:54
frame number or which chunk of the

00:45:51 --> 00:45:55
spectrogram we're seeing and then on the

00:45:53 --> 00:45:57
vertical axis here you see these are all

00:45:54 --> 00:46:01
the characters in the English alphabet

00:45:56 --> 00:46:03
or a space or a blank so after three

00:46:00 --> 00:46:05
hundred iterations of training which is

00:46:02 --> 00:46:07
not very much the system has learned

00:46:04 --> 00:46:08
something amazing which is that it

00:46:06 --> 00:46:11
should just output blanks and spaces all

00:46:07 --> 00:46:14
the time because these are by far

00:46:10 --> 00:46:15
because of all the silence and things in

00:46:13 --> 00:46:17
your data set these are the most common

00:46:14 --> 00:46:20
characters right I just want to fill up

00:46:16 --> 00:46:22
the whole space with blanks but you can

00:46:19 --> 00:46:25
see it's kind of randomly poking out a

00:46:21 --> 00:46:27
few characters here and if you run your

00:46:24 --> 00:46:28
little Mac's decoding strategy to see

00:46:26 --> 00:46:30
what is the system think the

00:46:27 --> 00:46:34
transcription is it thinks it

00:46:29 --> 00:46:36
ranscription is at and so but after

00:46:33 --> 00:46:38
three hundred iterations that's okay but

00:46:35 --> 00:46:40
his is a sign that the neural networks

00:46:37 --> 00:46:42
not going crazy your gradient isn't

00:46:39 --> 00:46:46
busted it's at least learned what is the

00:46:41 --> 00:46:49
most likely characters then after maybe

00:46:45 --> 00:46:51
1500 or so you start to get a little bit

00:46:48 --> 00:46:54
of structure and if you try to like

00:46:50 --> 00:46:56
mouthed these words you might be able to

00:46:53 --> 00:46:59
sort of see that there's some English

00:46:55 --> 00:47:02
like sounds in here like they are just

00:46:58 --> 00:47:04
in frightened something kind of odd but

00:47:01 --> 00:47:05
it's actually looking much better than

00:47:03 --> 00:47:09
just h it's actually starting to output

00:47:04 --> 00:47:13
something go a little bit farther it's a

00:47:08 --> 00:47:15
little bit more organized you could

00:47:12 --> 00:47:17
start to see that we have sort of

00:47:14 --> 00:47:21
ragments of possibly words starting to

00:47:16 --> 00:47:22
form and then after you're getting close

00:47:20 --> 00:47:25
to convergence it's still not a real

00:47:21 --> 00:47:28
sentence but does this make sense to

00:47:24 --> 00:47:32
people he guess like what the correct

00:47:27 --> 00:47:35
ranscription might be yeah so you might

00:47:31 --> 00:47:37
have a couple of candidates the the

00:47:34 --> 00:47:41
correct one is actually there just in

00:47:36 --> 00:47:43
front and so you can see that sort of

00:47:40 --> 00:47:46
it's sort of sounding it out with

00:47:42 --> 00:47:47
English characters like I have a young

00:47:45 --> 00:47:49
son and I kind of figure I'm eventually

00:47:46 --> 00:47:53
going to see him producing max Dakota

00:47:48 --> 00:47:54
puts of English and you're just going to

00:47:52 --> 00:47:57
like sound these things that we like if

00:47:53 --> 00:48:00
they're just in front there but but this

00:47:56 --> 00:48:01
why this max decoding strategy is

00:47:59 --> 00:48:03
really handy because you can kind of

00:48:00 --> 00:48:05
look at this output and say yeah it's

00:48:02 --> 00:48:07
tarting to get some actual signal out

00:48:04 --> 00:48:10
of the data it's not just gobbledygook

00:48:06 --> 00:48:12
so because this is like my favorite

00:48:09 --> 00:48:14
speech recognition party game I wanted

00:48:11 --> 00:48:17
to show you a few more of these so

00:48:13 --> 00:48:19
here's the max decoded output the poor

00:48:16 --> 00:48:21
little things cried Cynthia think of

00:48:18 --> 00:48:24
them having been turned to the wall all

00:48:20 --> 00:48:27
these years so you can hear like the

00:48:23 --> 00:48:29
sound of the breath at the end turns

00:48:26 --> 00:48:33
into a little bit of a word

00:48:28 --> 00:48:36
Cynthia is sort of in this transcription

00:48:33 --> 00:48:38
and you'll find that things like proper

00:48:35 --> 00:48:41
names and so on tend to get sounded out

00:48:37 --> 00:48:42
but if those names are not in your audio

00:48:40 --> 00:48:45
data there's no way the network could

00:48:41 --> 00:48:47
have learned how to say the name Cynthia

00:48:44 --> 00:48:49
nd we'll come back to how to solve that

00:48:46 --> 00:48:53
later did you see the true label

00:48:48 --> 00:48:54
the poor little things cried Cynthia and

00:48:52 --> 00:48:56
that the last word is actually all these

00:48:53 --> 00:49:01
years and there isn't a word hanging off

00:48:55 --> 00:49:06
at the end so here's another one that is

00:49:00 --> 00:49:08
true bad grade how many people figured

00:49:05 --> 00:49:13
out what this is this is the max decoded

00:49:07 --> 00:49:14
transcription sounds sounds good to you

00:49:12 --> 00:49:16
it sounds good to me

00:49:13 --> 00:49:18
if you told me that this was the ground

00:49:15 --> 00:49:20
truth like oh that's weird I have to go

00:49:17 --> 00:49:23
what lookup what this is here's the

00:49:19 --> 00:49:26
actual true label turns out this is a

00:49:22 --> 00:49:29
French word that means something like

00:49:25 --> 00:49:31
rubbernecking I had no idea what this

00:49:28 --> 00:49:33
word was so this is again the cool

00:49:30 --> 00:49:36
examples of what these neural networks

00:49:32 --> 00:49:42
are able to figure out with no knowledge

00:49:35 --> 00:49:43
of the language itself okay so let's go

00:49:41 --> 00:49:45
back to decoding we just talked about

00:49:42 --> 00:49:49
max decoding which is sort of an

00:49:44 --> 00:49:51
approximate way of going from these

00:49:48 --> 00:49:55
probability vectors to a transcription Y

00:49:50 --> 00:49:58
and if you want to find the actual most

00:49:54 --> 00:50:01
likely transcription Y there's actually

00:49:57 --> 00:50:02
no algorithm in general that can give

00:50:00 --> 00:50:05
you the

00:50:01 --> 00:50:07
perfect solution efficiently so the

00:50:04 --> 00:50:09
reason for that remember is that for a

00:50:06 --> 00:50:11
single transcription why I have an

00:50:08 --> 00:50:13
efficient algorithm to compute its

00:50:10 --> 00:50:16
probability but if I want to search over

00:50:12 --> 00:50:17
every possible transcription I don't

00:50:15 --> 00:50:20
know how to do that because there

00:50:16 --> 00:50:22
combinatorially or exponentially many

00:50:19 --> 00:50:24
possible transcriptions and I'd have to

00:50:21 --> 00:50:27
run this algorithm to compute the

00:50:23 --> 00:50:29
probability of all of them so we have to

00:50:26 --> 00:50:32
resort to some kind of generic search

00:50:28 --> 00:50:34
strategy and so one proposed in the

00:50:31 --> 00:50:38
original paper briefly is a sort of

00:50:33 --> 00:50:40
prefix decoding strategy so I don't want

00:50:37 --> 00:50:44
o spend a ton of time on this instead I

00:50:39 --> 00:50:46
want to step to sort of the next piece

00:50:43 --> 00:50:47
of the picture so there were a bunch of

00:50:45 --> 00:50:50
examples in there right like proper

00:50:46 --> 00:50:55
names like Cynthia and things like but

00:50:49 --> 00:50:58
Dow Derby where unless you had heard

00:50:54 --> 00:50:59
this word before you have no hope of

00:50:57 --> 00:51:02
getting it right with your neural

00:50:58 --> 00:51:04
network and so there are lots of

00:51:01 --> 00:51:06
examples like this in the literature of

00:51:03 --> 00:51:08
things that are sort of spelled out

00:51:05 --> 00:51:11
phonetically but aren't legitimate

00:51:07 --> 00:51:14
English transcriptions and so what we'd

00:51:10 --> 00:51:17
like to do is come up with a way to fold

00:51:13 --> 00:51:19
in just a little bit of that knowledge

00:51:16 --> 00:51:22
about the language that take a small

00:51:18 --> 00:51:24
step backward from a perfect end-to-end

00:51:21 --> 00:51:27
system and make make these

00:51:23 --> 00:51:29
transcriptions better so as I said the

00:51:26 --> 00:51:32
real problem here is that you don't have

00:51:28 --> 00:51:33
nough audio available to learn all

00:51:31 --> 00:51:35
these things if we had millions and

00:51:32 --> 00:51:37
millions of hours of audio sitting

00:51:34 --> 00:51:38
around you could probably learn all

00:51:36 --> 00:51:40
these transcriptions because you just

00:51:37 --> 00:51:41
hear enough words that you know how to

00:51:39 --> 00:51:45
spell them all maybe the way a human

00:51:40 --> 00:51:47
does but unfortunately we just don't

00:51:44 --> 00:51:49
have enough audio for that so we have to

00:51:46 --> 00:51:52
find a way to get around that data

00:51:48 --> 00:51:53
problem there's also an example of

00:51:51 --> 00:51:56
something that in the AI lab we've

00:51:52 --> 00:51:58
dubbed the Tchaikovsky problem which is

00:51:55 --> 00:52:00
that there are certain names in the

00:51:57 --> 00:52:02
world right like proper names that if

00:51:59 --> 00:52:04
you've never heard of it before you have

00:52:01 --> 00:52:07
no idea how it's spelled and the only

00:52:03 --> 00:52:09
way to know it is to have seen this word

00:52:06 --> 00:52:12
in text before and to see it in context

00:52:08 --> 00:52:14
so part of the purpose of these language

00:52:11 --> 00:52:14
models is to get examples like this

00:52:13 --> 00:52:17
correct

00:52:13 --> 00:52:20
so there are a couple of solutions one

00:52:16 --> 00:52:22
would be to just step back to a more

00:52:19 --> 00:52:24
traditional pipeline right use phonemes

00:52:21 --> 00:52:27
because then we can bake new words in

00:52:23 --> 00:52:29
along with their phonetic pronunciation

00:52:26 --> 00:52:32
and the system will just get it right

00:52:28 --> 00:52:35
but in in this case I want to focus on

00:52:31 --> 00:52:37
just fusing in a traditional language

00:52:34 --> 00:52:41
model that gives us the probability a

00:52:36 --> 00:52:43
priori of any sequence of words so the

00:52:40 --> 00:52:46
reason that this is helpful is that

00:52:42 --> 00:52:48
using a language model we can train

00:52:45 --> 00:52:50
these things from massive text corpora

00:52:47 --> 00:52:53
we have way way more text in the world

00:52:49 --> 00:52:55
than we have transcribed audio and so

00:52:52 --> 00:52:57
that makes it possible to train these

00:52:54 --> 00:53:00
giant language models with huge

00:52:56 --> 00:53:02
vocabulary and they can also pick up the

00:52:59 --> 00:53:04
sort of contextual things that will tip

00:53:01 --> 00:53:06
you off to the fact that Tchaikovsky

00:53:03 --> 00:53:09
concerto is a reasonable thing for a

00:53:05 --> 00:53:11
person to ask and that this particular

00:53:08 --> 00:53:15
transcription which we have seen in the

00:53:10 --> 00:53:17
past trike offski concerto even though

00:53:14 --> 00:53:19
composed of legitimate English words is

00:53:16 --> 00:53:23
nonsense

00:53:18 --> 00:53:25
so there's actually not much to see on

00:53:22 --> 00:53:28
the language modeling front for this

00:53:24 --> 00:53:30
except that the reasons for sticking

00:53:27 --> 00:53:31
with traditional and grand models are

00:53:29 --> 00:53:34
kind of interesting if you're excited

00:53:30 --> 00:53:38
about speech applications so if you go

00:53:33 --> 00:53:40
use a package like Ken LM on the web to

00:53:37 --> 00:53:42
go build yourself a giant and Grahm

00:53:39 --> 00:53:45
language model these are really simple

00:53:41 --> 00:53:48
and well supported and so that makes

00:53:44 --> 00:53:51
them easy to get working and they'll let

00:53:47 --> 00:53:53
you train from lots of corpora but for

00:53:50 --> 00:53:55
speech recognition in practice one of

00:53:52 --> 00:53:58
the nice things about Engram models as

00:53:54 --> 00:54:00
opposed to trying to say use like an RNN

00:53:57 --> 00:54:02
model is that we can update these things

00:53:59 --> 00:54:04
very quickly if you have a big

00:54:01 --> 00:54:06
distributed cluster you can update that

00:54:03 --> 00:54:08
Engram model very rapidly in parallel

00:54:05 --> 00:54:10
from new data to keep track of whatever

00:54:07 --> 00:54:12
the trending words are today that your

00:54:09 --> 00:54:15
speech engine might need to deal with

00:54:11 --> 00:54:18
and we also have the need to query this

00:54:14 --> 00:54:20
thing very rapidly inside our decoding

00:54:17 --> 00:54:22
loop that you'll see in just a second

00:54:19 --> 00:54:24
and so being able to just look up the

00:54:21 --> 00:54:26
probabilities in a table the way an

00:54:23 --> 00:54:29
Engram model is structured is very

00:54:25 --> 00:54:32
valuable so I hope someday all of this

00:54:28 --> 00:54:34
will go away and be replaced with an

00:54:31 --> 00:54:40
amazing neural network but this is the

00:54:33 --> 00:54:44
really best practice today so in order

00:54:39 --> 00:54:46
to fuse this into the system since to

00:54:43 --> 00:54:48
get the most likely transcription right

00:54:45 --> 00:54:50
probably of Y given X to maximize that

00:54:47 --> 00:54:54
hing we need to use a generic search

00:54:50 --> 00:54:56
algorithm anyway this opens up a door

00:54:53 --> 00:54:58
once we're using a generic search scheme

00:54:55 --> 00:55:00
to do our decoding and find the most

00:54:57 --> 00:55:04
likely transcription we can add some

00:54:59 --> 00:55:06
xtra cost terms so in a previous piece

00:55:03 --> 00:55:09
of work from Audi haneun and several

00:55:05 --> 00:55:12
co-authors what you do is you take the

00:55:08 --> 00:55:15
probability of a given word sequence

00:55:11 --> 00:55:19
from your audio so this is what you

00:55:14 --> 00:55:21
would get from your giant RNN and you

00:55:18 --> 00:55:23
can just multiply it by some extra terms

00:55:20 --> 00:55:25
the probability of the word sequence

00:55:22 --> 00:55:27
according to your language model raised

00:55:24 --> 00:55:29
to some power and then multiplied by the

00:55:26 --> 00:55:31
length we raised to another power you

00:55:28 --> 00:55:34
see that if you just take the log of

00:55:30 --> 00:55:36
this objective function right then you

00:55:33 --> 00:55:39
get the log probability that was your

00:55:35 --> 00:55:41
original objective you get alpha times

00:55:38 --> 00:55:44
the log probability of the language

00:55:40 --> 00:55:46
model and beta times the log of the

00:55:43 --> 00:55:49
length and these alpha and beta

00:55:45 --> 00:55:51
parameters let you sort of trade-off the

00:55:48 --> 00:55:53
importance of getting a transcription

00:55:50 --> 00:55:54
that makes sense to your language model

00:55:52 --> 00:55:56
versus getting a transcription that

00:55:53 --> 00:55:58
makes sense to your acoustic model and

00:55:55 --> 00:56:01
actually sounds like the thing that you

00:55:57 --> 00:56:04
heard and the reason for this extra term

00:56:00 --> 00:56:06
over here is that as you're multiplying

00:56:03 --> 00:56:09
in all of these terms you tend to

00:56:05 --> 00:56:11
penalize long transcriptions a bit too

00:56:08 --> 00:56:14
much and so having a little bonus or

00:56:10 --> 00:56:15
penalty at the end to tweak to get the

00:56:13 --> 00:56:19
transcription length right is very

00:56:14 --> 00:56:21
helpful so the basic idea behind this is

00:56:18 --> 00:56:23
just to use beam search so beam search

00:56:20 --> 00:56:27
really popular search algorithm a whole

00:56:22 --> 00:56:31
bunch of instances of it and the rough

00:56:26 --> 00:56:34
strategy is this so starting from time

00:56:30 --> 00:56:35
zero starting from T equals one at the

00:56:33 --> 00:56:39
very beginning of your audio input I

00:56:34 --> 00:56:39
start out with an empty list that I'm

00:56:38 --> 00:56:42
going to pop you

00:56:38 --> 00:56:44
late with prefixes and these prefixes

00:56:41 --> 00:56:46
are just partial transcriptions that

00:56:43 --> 00:56:51
represent what I think I've heard so far

00:56:45 --> 00:56:53
in the audio up to the current time and

00:56:50 --> 00:56:56
the way that this proceeds is I'm going

00:56:53 --> 00:56:58
to take at the current time step

00:56:55 --> 00:57:02
each candidate prefix out of this list

00:56:57 --> 00:57:04
and then I'm going to try all of the

00:57:01 --> 00:57:07
possible characters in my soft max

00:57:03 --> 00:57:09
neurons that can possibly follow it so

00:57:06 --> 00:57:14
for example I can try adding a blank I

00:57:08 --> 00:57:16
say if the next element of C is actually

00:57:13 --> 00:57:18
supposed to be a blank then what that

00:57:15 --> 00:57:20
would mean is that I don't change my

00:57:17 --> 00:57:22
prefix right because the blanks are just

00:57:19 --> 00:57:24
going to get dropped later but I need to

00:57:21 --> 00:57:27
incorporate the probability of that

00:57:23 --> 00:57:30
blank character into the probability of

00:57:26 --> 00:57:33
this prefix right it represents one of

00:57:29 --> 00:57:35
the ways that I could reach that prefix

00:57:32 --> 00:57:38
and so I need to sum that probability

00:57:34 --> 00:57:41
into that candidate and likewise

00:57:37 --> 00:57:44
whenever I add a space to the end of a

00:57:40 --> 00:57:46
prefix that signals that this prefix

00:57:43 --> 00:57:48
represents the end of a word and so in

00:57:45 --> 00:57:51
addition to adding the probability of

00:57:47 --> 00:57:53
the space into my current estimate this

00:57:50 --> 00:57:55
gives me the chance to go look up that

00:57:52 --> 00:57:58
word in my language model and fold that

00:57:54 --> 00:58:01
into my current score and then if I try

00:57:57 --> 00:58:03
adding a new character onto this prefix

00:58:00 --> 00:58:05
it's just straightforward I just go and

00:58:02 --> 00:58:07
update the probabilities based on the

00:58:04 --> 00:58:09
probability of that character and then

00:58:06 --> 00:58:12
at the end of this I'm going to have a

00:58:08 --> 00:58:14
huge list of possible prefixes that

00:58:11 --> 00:58:15
could be generated and this is where you

00:58:13 --> 00:58:19
would normally get the exponential

00:58:14 --> 00:58:22
blow-up of trying all possible prefixes

00:58:18 --> 00:58:24
to find the best one and what beam

00:58:21 --> 00:58:28
search does is it just says take the que

00:58:23 --> 00:58:30
most probable prefixes after I remove

00:58:27 --> 00:58:32
all the duplicates in here and then go

00:58:29 --> 00:58:34
and do this again and so if you have a

00:58:31 --> 00:58:36
really large que then your algorithm

00:58:33 --> 00:58:39
will be a bit more accurate in finding

00:58:35 --> 00:58:42
the best possible solution to this

00:58:38 --> 00:58:45
maximization problem but it'll be slower

00:58:41 --> 00:58:48
so here's what ends up happening if you

00:58:44 --> 00:58:50
run this decoding algorithm if you just

00:58:47 --> 00:58:51
run it on the are n n outputs you'll see

00:58:49 --> 00:58:54
that you

00:58:50 --> 00:58:55
it's actually better than straight max

00:58:53 --> 00:58:58
decoding you find slightly better

00:58:54 --> 00:59:00
solutions but you still make things like

00:58:57 --> 00:59:04
spelling errors like Boston with an AI

00:58:59 --> 00:59:05
but once you add in a language model

00:59:03 --> 00:59:08
that can actually tell you that the word

00:59:04 --> 00:59:15
Boston with an O is much more probable

00:59:07 --> 00:59:17
than Boston with an AI see this so one

00:59:14 --> 00:59:18
place they can also drop in deep

00:59:16 --> 00:59:21
learning that I wanted to mention very

00:59:17 --> 00:59:22
rapidly is just if you're not happy with

00:59:20 --> 00:59:25
your Engram model because it doesn't

00:59:21 --> 00:59:27
have enough context where you've seen a

00:59:24 --> 00:59:30
really amazing neural language modeling

00:59:26 --> 00:59:32
paper that you'd like to fold in one

00:59:29 --> 00:59:34
really easy way to do this and Link it

00:59:31 --> 00:59:37
o your current pipeline is to do

00:59:33 --> 00:59:39
rescore eeen so when this decoding

00:59:36 --> 00:59:42
strategy finishes it can give you the

00:59:38 --> 00:59:44
most probable transcription but it also

00:59:41 --> 00:59:48
gives you this big list of the top K

00:59:43 --> 00:59:54
transcriptions in terms of probability

00:59:47 --> 00:59:56
and what you can do is to take what you

00:59:53 --> 01:00:00
can do is take your recurrent Network

00:59:55 --> 01:00:03
and just rescore all of these and

00:59:59 --> 01:00:06
basically reorder them according to this

01:00:02 --> 01:00:09
new model so in the instance of a neural

01:00:05 --> 01:00:12
anguage model let's say that this is my

01:00:08 --> 01:00:15
N best list right I have five candidates

01:00:11 --> 01:00:18
that were output by my decoding strategy

01:00:14 --> 01:00:21
and the first one is I'm a connoisseur

01:00:17 --> 01:00:23
looking for wine and pork chops sounds

01:00:20 --> 01:00:27
good to me I'm a connoisseur looking for

01:00:22 --> 01:00:31
wine and pork shots so this is actually

01:00:26 --> 01:00:34
quite subtle and depending on what kind

01:00:30 --> 01:00:35
of connoisseur you are sort of up to

01:00:33 --> 01:00:37
interpretation what you're looking for

01:00:34 --> 01:00:39
but perhaps a neural language model is

01:00:36 --> 01:00:40
going to be a little bit better if

01:00:38 --> 01:00:42
iguring out that wine and port are

01:00:39 --> 01:00:43
closely related and if you're a

01:00:41 --> 01:00:46
connoisseur you might be looking for

01:00:42 --> 01:00:48
wine import shots and so what you would

01:00:45 --> 01:00:51
hope to happen is that a neural language

01:00:47 --> 01:00:54
model trained on a bunch of text is

01:00:50 --> 01:00:57
going to correctly reorder these things

01:00:53 --> 01:00:59
and figure out that the second beam

01:00:56 --> 01:01:02
candid is actually the correct one even

01:00:58 --> 01:01:07
though your Engram model didn't help you

01:01:02 --> 01:01:11
okay so that is really the scale model

01:01:06 --> 01:01:14
that is the set of concepts that you

01:01:10 --> 01:01:17
need to get a working speech recognition

01:01:13 --> 01:01:19
engine based on deep learning and so the

01:01:16 --> 01:01:21
thing that's left to go to

01:01:18 --> 01:01:24
state-of-the-art performance and start

01:01:20 --> 01:01:27
serving users is scale so I'm going to

01:01:23 --> 01:01:29
kind of run through quickly a bunch of

01:01:26 --> 01:01:33
the different tactics that you can use

01:01:28 --> 01:01:34
to try to get there so the two pieces of

01:01:32 --> 01:01:36
scale that I want to cover of course our

01:01:33 --> 01:01:40
data and computing power where do you

01:01:35 --> 01:01:41
get them so the first thing to know this

01:01:39 --> 01:01:43
just a number you can keep in the

01:01:40 --> 01:01:45
back of your head for all purposes which

01:01:42 --> 01:01:47
is that transcribing speech data is not

01:01:44 --> 01:01:49
cheap but it's also not prohibitive it's

01:01:46 --> 01:01:51
about 50 cents to a dollar a minute

01:01:48 --> 01:01:53
depending on the quality you want and

01:01:50 --> 01:01:57
who's transcribing it and the difficulty

01:01:52 --> 01:01:59
of the data so typical speech benchmarks

01:01:56 --> 01:02:02
you'll see out there maybe hundreds to

01:01:58 --> 01:02:04
thousands of hours it's like the Liberty

01:02:01 --> 01:02:06
speech data set is maybe hundreds of

01:02:03 --> 01:02:08
hours there's another data set called

01:02:05 --> 01:02:10
Vox Forge and you can kind of cobble

01:02:07 --> 01:02:12
these together and get maybe hundreds to

01:02:09 --> 01:02:15
thousands of hours but the real

01:02:11 --> 01:02:18
challenge is that the application

01:02:14 --> 01:02:21
matters a lot so all the utterances I

01:02:17 --> 01:02:23
was playing for you are examples of read

01:02:20 --> 01:02:25
speech people are sitting in a nice

01:02:22 --> 01:02:27
quiet room they're reading something

01:02:24 --> 01:02:28
wonderful to me and so I'm going to end

01:02:26 --> 01:02:30
up with a speech engine that's really

01:02:27 --> 01:02:33
awesome at listening to The Wall Street

01:02:29 --> 01:02:35
Journal but maybe not so good at

01:02:32 --> 01:02:38
listening to someone in a crowded cafe

01:02:34 --> 01:02:40
so the application that you want to

01:02:37 --> 01:02:43
target really needs to match your data

01:02:39 --> 01:02:44
set and so it's worth at the outset if

01:02:42 --> 01:02:47
you're thinking about going and buying a

01:02:43 --> 01:02:49
bunch of speech data to think of what is

01:02:47 --> 01:02:51
the style of speech you're actually

01:02:48 --> 01:02:53
targeting are you worried about red

01:02:50 --> 01:02:56
speech like the ones we're hearing or do

01:02:52 --> 01:02:57
you care about conversational speech it

01:02:55 --> 01:03:00
urns out that when people talk in a

01:02:56 --> 01:03:02
conversation it when they're spontaneous

01:02:59 --> 01:03:04
they're just coming up with what to say

01:03:01 --> 01:03:05
on the fly versus if they have something

01:03:03 --> 01:03:07
that they're just dictating and they

01:03:04 --> 01:03:10
already know what to say they behave

01:03:06 --> 01:03:12
differently and they can exhibit all of

01:03:09 --> 01:03:13
these effects like disfluency and

01:03:11 --> 01:03:16
stuttering

01:03:12 --> 01:03:17
and then in addition to that we have all

01:03:15 --> 01:03:19
kinds of environmental factors that

01:03:16 --> 01:03:21
might matter for an application like

01:03:18 --> 01:03:23
reverb and echo we start to care about

01:03:20 --> 01:03:25
he quality of microphones and whether

01:03:22 --> 01:03:27
they have noise canceling there's

01:03:24 --> 01:03:29
omething called Lombard effect that

01:03:26 --> 01:03:31
I'll mention again in a second and of

01:03:28 --> 01:03:32
course things like speaker accents where

01:03:30 --> 01:03:35
you really have to think carefully about

01:03:31 --> 01:03:37
how you collect your data to make sure

01:03:34 --> 01:03:40
that you you actually represent the

01:03:36 --> 01:03:43
kinds of cases you want to test on so

01:03:39 --> 01:03:44
the reason that red speech is really

01:03:42 --> 01:03:47
popular is because we can get a lot of

01:03:43 --> 01:03:49
it and even if it doesn't perfectly

01:03:46 --> 01:03:51
match your application it's cheap and

01:03:48 --> 01:03:53
getting a lot of it can still help you

01:03:50 --> 01:03:55
so I wanted to say a few things about

01:03:52 --> 01:03:57
red speech because for less than ten

01:03:54 --> 01:03:59
bucks an hour's often a lot less you can

01:03:56 --> 01:04:01
get a whole bunch of data and it has the

01:03:58 --> 01:04:03
disadvantage that you lose a lot of

01:04:00 --> 01:04:08
things like inflection and conversation

01:04:02 --> 01:04:11
allottee but but it can still be helpful

01:04:07 --> 01:04:14
so one of the things that we've tried

01:04:10 --> 01:04:16
oing and I'm always interested to hear

01:04:13 --> 01:04:18
more clever schemes for this is you can

01:04:15 --> 01:04:20
kind of engineer the way that people

01:04:17 --> 01:04:24
read to try to get the effects that you

01:04:19 --> 01:04:26
want so so here's one which is that if

01:04:23 --> 01:04:28
you want a little bit more conversation

01:04:25 --> 01:04:30
ality you want to get people out of that

01:04:27 --> 01:04:31
kind of humdrum dictation you can start

01:04:29 --> 01:04:33
giving them reading material that's a

01:04:31 --> 01:04:35
little more exciting you can give them

01:04:32 --> 01:04:38
like movie scripts and books and people

01:04:34 --> 01:04:41
will actually start voice acting for you

01:04:37 --> 01:04:44
creep in set the witch and see if it is

01:04:40 --> 01:04:48
properly heated so that we can put the

01:04:43 --> 01:04:50
bread in so these are really wonderful

01:04:47 --> 01:04:55
workers right there like kind of really

01:04:49 --> 01:04:55
getting into it to give you better data

01:04:58 --> 01:05:04
the wolf is dead

01:05:00 --> 01:05:08
and danced for joy

01:05:03 --> 01:05:11
around about the well with their mother

01:05:07 --> 01:05:13
so yeah people reading poetry they get

01:05:10 --> 01:05:14
his sort of lyrical quality into it

01:05:12 --> 01:05:17
hat you don't get from from just

01:05:13 --> 01:05:18
reading The Wall Street Journal and

01:05:16 --> 01:05:21
finally there's something called the

01:05:17 --> 01:05:23
Lombard effect that happens when people

01:05:20 --> 01:05:25
are in noisy environments so if you're

01:05:22 --> 01:05:25
in like a noisy party and you're trying

01:05:24 --> 01:05:27
to talk to you

01:05:24 --> 01:05:30
friend who's a couple of chairs away

01:05:26 --> 01:05:32
ou'll catch yourself involuntarily

01:05:29 --> 01:05:34
going hey over there what are you doing

01:05:31 --> 01:05:37
you raise your inflection and you kind

01:05:33 --> 01:05:40
of you try to use different tactics to

01:05:36 --> 01:05:42
get your signal-to-noise ratio up you'll

01:05:39 --> 01:05:45
sort of work around the the channel

01:05:41 --> 01:05:46
problem and so this this is very

01:05:44 --> 01:05:48
problematic when you're trying to do

01:05:45 --> 01:05:50
transcription a noisy environment

01:05:47 --> 01:05:52
because people will talk to their phones

01:05:49 --> 01:05:53
using all these effects even though the

01:05:51 --> 01:05:56
noise canceling and everything could

01:05:52 --> 01:05:58
actually help them so one strategy we've

01:05:55 --> 01:06:00
tried with varying levels of success

01:05:57 --> 01:06:03
then they fell asleep and evening pass

01:05:59 --> 01:06:05
but no one came to the poor children is

01:06:02 --> 01:06:09
to actually play loud noise in people's

01:06:04 --> 01:06:11
headphones to try to get them to elicit

01:06:08 --> 01:06:13
his behavior again here this person is

01:06:10 --> 01:06:15
kind of raising their voice a little bit

01:06:12 --> 01:06:19
in a way that they wouldn't if they were

01:06:14 --> 01:06:21
just reading and similarly as I

01:06:18 --> 01:06:24
mentioned there are a whole bunch of

01:06:20 --> 01:06:25
different augmentation strategies so

01:06:23 --> 01:06:27
there are all these effects of

01:06:24 --> 01:06:30
environment like reverberation echo

01:06:26 --> 01:06:33
background noise that we would like our

01:06:29 --> 01:06:34
speech engine to be robust to and one

01:06:32 --> 01:06:36
way you could go about trying to solve

01:06:33 --> 01:06:38
this is to go collect a bunch of audio

01:06:35 --> 01:06:40
from those cases and then transcribe it

01:06:37 --> 01:06:43
but but getting that raw audio is really

01:06:39 --> 01:06:45
expensive so instead an alternative is

01:06:42 --> 01:06:48
to take the really cheap read speech

01:06:44 --> 01:06:52
that's very clean and use some like off

01:06:47 --> 01:06:55
the shores off the source off the shelf

01:06:51 --> 01:06:57
open source audio toolkit to synthesize

01:06:54 --> 01:07:02
all the things you want to be robust to

01:06:56 --> 01:07:04
so for example if we want to simulate

01:07:01 --> 01:07:09
noise in a cafe here here's just me

01:07:03 --> 01:07:09
talking to my laptop in a quiet room

01:07:09 --> 01:07:15
hello how are you so if I'm just asking

01:07:13 --> 01:07:18
how are you and then here's the sound of

01:07:14 --> 01:07:18
a cafe

01:07:18 --> 01:07:24
so I can obviously collect these

01:07:20 --> 01:07:25
independently very cheaply then I can

01:07:23 --> 01:07:29
synthesize this by just adding these

01:07:24 --> 01:07:30
signals together hello how are you which

01:07:28 --> 01:07:32
actually sounds I don't know sounds to

01:07:29 --> 01:07:34
me like my talking to my laptop at a

01:07:31 --> 01:07:37
Starbucks or something

01:07:33 --> 01:07:39
and so for our work on deep speech we

01:07:36 --> 01:07:41
actually take something like 10,000

01:07:38 --> 01:07:44
hours of raw audio that sounds kind of

01:07:40 --> 01:07:46
like this and then we pile on lots and

01:07:43 --> 01:07:49
lots of audio tracks from Creative

01:07:45 --> 01:07:51
Commons videos it turns out there's a

01:07:48 --> 01:07:54
strange thing people upload like noise

01:07:50 --> 01:07:56
tracks to the web that last four hours

01:07:53 --> 01:07:59
is like really soothing to listen to the

01:07:55 --> 01:08:01
highway or something and so you can

01:07:58 --> 01:08:03
download all all these this free found

01:08:00 --> 01:08:05
ata and you can just overlay it on this

01:08:02 --> 01:08:07
voice and you can synthesize perhaps

01:08:04 --> 01:08:12
hundreds of thousands of hours of unique

01:08:06 --> 01:08:15
audio and so the idea here is that it's

01:08:11 --> 01:08:18
just much easier to engineer your data

01:08:14 --> 01:08:20
pipeline to be robust than it is to

01:08:17 --> 01:08:22
engineer the speech engine itself to be

01:08:19 --> 01:08:23
robust so whenever you encounter an

01:08:21 --> 01:08:24
environment that you've never seen

01:08:22 --> 01:08:27
before and your speech engine is

01:08:23 --> 01:08:29
breaking down you should shift your

01:08:26 --> 01:08:31
instinct away from trying to engineer

01:08:28 --> 01:08:34
the engine to fix it and toward this

01:08:30 --> 01:08:37
idea of how do I reproduce it really

01:08:33 --> 01:08:38
cheaply in my data so here's that Wall

01:08:36 --> 01:08:41
Street Journal example again is it

01:08:37 --> 01:08:45
designed to carry large volumes of oil

01:08:40 --> 01:08:47
or other liquid cargo and so if I wanted

01:08:44 --> 01:08:49
to for instance deal with a person

01:08:46 --> 01:08:52
reading Wall Street Journal on a tanker

01:08:48 --> 01:08:54
maybe taking a ship designed to carry

01:08:51 --> 01:08:56
large volumes of oil or other liquid

01:08:53 --> 01:08:57
cargo there's lots of reverb in this

01:08:55 --> 01:09:01
room so you can't hear the reverb on the

01:08:56 --> 01:09:02
audio but basically you know you can

01:09:00 --> 01:09:07
synthesize these things with one line of

01:09:01 --> 01:09:09
socks on the command line so from some

01:09:06 --> 01:09:10
of our own work with building a large

01:09:08 --> 01:09:14
scale speech engine with these

01:09:09 --> 01:09:17
technologies this helps a ton and you

01:09:13 --> 01:09:22
can actually see that when we run on

01:09:16 --> 01:09:25
clean and noisy test utterances as we

01:09:21 --> 01:09:27
add more and more data all the way up to

01:09:24 --> 01:09:30
about 10,000 hours and using a lot of

01:09:26 --> 01:09:32
these synthesis strategies we can just

01:09:29 --> 01:09:34
eadily improve the

01:09:31 --> 01:09:36
performance of the engine and in fact on

01:09:33 --> 01:09:38
things like clean speech you can get

01:09:35 --> 01:09:42
down well below 10% word error rate

01:09:37 --> 01:09:46
which is a pretty pretty strong engine

01:09:41 --> 01:09:49
okay let's talk about computation

01:09:45 --> 01:09:52
because the caveat on that last slide is

01:09:48 --> 01:09:54
yes more data will help if you have a

01:09:51 --> 01:09:58
big enough model and big models usually

01:09:53 --> 01:10:00
mean lots of computation so what I

01:09:57 --> 01:10:01
haven't talked about is how big are

01:09:59 --> 01:10:03
these neural networks and how big is one

01:10:00 --> 01:10:05
xperiment so if you actually want to

01:10:02 --> 01:10:08
train one of these things at scale what

01:10:04 --> 01:10:10
are you in for so here's the the back of

01:10:07 --> 01:10:13
the envelope it's going to take at least

01:10:09 --> 01:10:16
he number of connections in your neural

01:10:12 --> 01:10:18
network so take one slice of that are n

01:10:15 --> 01:10:20
the number of unique connections

01:10:17 --> 01:10:22
multiplied by the number of frames once

01:10:19 --> 01:10:24
you unroll the recurrent network once

01:10:21 --> 01:10:26
you unfold it multiplied by the number

01:10:23 --> 01:10:27
of utterances you've got a process in

01:10:25 --> 01:10:30
your data set

01:10:26 --> 01:10:31
imes the number of training epochs the

01:10:29 --> 01:10:33
number of times you loop through the

01:10:30 --> 01:10:40
data set times three because you have to

01:10:32 --> 01:10:41
do forward propagation to flops for

01:10:39 --> 01:10:44
every connection because there's a

01:10:41 --> 01:10:46
multiplying and add so if you multiply

01:10:43 --> 01:10:49
this out for some parameters from the

01:10:45 --> 01:10:52
deep speech engine if I do you get

01:10:48 --> 01:10:56
something like 1.2 times 10 to the 19

01:10:51 --> 01:10:59
flops so about 10 XO flops and if you

01:10:55 --> 01:11:01
run this on a Titan X card this will

01:10:58 --> 01:11:04
take about a month now if you already

01:11:00 --> 01:11:06
know what the model is that might be

01:11:03 --> 01:11:08
tolerable if you're you're on your epic

01:11:05 --> 01:11:11
run to get your best performance so far

01:11:07 --> 01:11:12
then this is okay but if you don't know

01:11:10 --> 01:11:14
hat model is going to work you're

01:11:11 --> 01:11:16
targeting some new scenario then you

01:11:13 --> 01:11:19
want it done now so you can try lots and

01:11:15 --> 01:11:22
lots of models quickly so the easy fix

01:11:18 --> 01:11:25
is just to try using a bunch more GPUs

01:11:21 --> 01:11:28
with data parallelism and the good news

01:11:24 --> 01:11:30
is is that so far it looks like speech

01:11:27 --> 01:11:33
recognition allows us to use mini batch

01:11:29 --> 01:11:35
sizes we can process enough utterances

01:11:32 --> 01:11:37
in parallel that this is actually

01:11:34 --> 01:11:39
efficient so you'd like to keep you know

01:11:36 --> 01:11:41
maybe a bit more than 64 utterances on

01:11:38 --> 01:11:43
each GPU

01:11:40 --> 01:11:45
and up to a total mini batch size of

01:11:42 --> 01:11:48
like a thousand or maybe two thousand

01:11:44 --> 01:11:51
it's still useful and so if you've got

01:11:47 --> 01:11:53
if you're putting together your your

01:11:50 --> 01:11:55
infrastructure you can go out and you

01:11:52 --> 01:11:57
can buy a server that'll fit eight of

01:11:54 --> 01:11:58
these Titan GP using them and that'll

01:11:56 --> 01:12:00
actually get you to less than a week

01:11:57 --> 01:12:03
training time which is pretty

01:11:59 --> 01:12:05
respectable so there are a whole bunch

01:12:02 --> 01:12:08
of ways to use GPUs if I do we've been

01:12:04 --> 01:12:10
using synchronous SGD it turns out that

01:12:07 --> 01:12:14
you've got to optimize things like all

01:12:10 --> 01:12:15
reduce code once you leave one node you

01:12:13 --> 01:12:17
have to start worrying about your

01:12:14 --> 01:12:19
network and if you want to keep scaling

01:12:16 --> 01:12:21
than thinking about things like network

01:12:19 --> 01:12:24
traffic and the right strategy for

01:12:20 --> 01:12:27
moving all of your data becomes

01:12:23 --> 01:12:29
important but we've had success scaling

01:12:26 --> 01:12:32
really well all the way out to things

01:12:28 --> 01:12:35
like 64 GPUs and just getting linear

01:12:31 --> 01:12:37
speed ups all over the way so if you've

01:12:34 --> 01:12:39
got a big cluster available these things

01:12:36 --> 01:12:40
cale really well and there are a bunch

01:12:38 --> 01:12:43
of other solutions for instance

01:12:39 --> 01:12:45
asynchronous SGD is now kind of a

01:12:42 --> 01:12:47
mainstay of distributed deep learning

01:12:44 --> 01:12:49
there's also been some work recently of

01:12:46 --> 01:12:50
trying to go back to synchronous SGD

01:12:48 --> 01:12:54
that has a lot of nice properties but

01:12:49 --> 01:12:57
using things like backup workers so

01:12:53 --> 01:13:00
that's sort of the easy thing just throw

01:12:56 --> 01:13:02
more GPUs at it and go faster one word

01:12:59 --> 01:13:07
of warning as you're trying to build

01:13:01 --> 01:13:10
these systems is to watch for code that

01:13:06 --> 01:13:12
isn't as optimized as you expected it to

01:13:09 --> 01:13:15
be and so this back of the envelope

01:13:11 --> 01:13:17
calculation that we did of figuring out

01:13:14 --> 01:13:19
how many flops are involved in our

01:13:16 --> 01:13:23
network and then calculating how long it

01:13:18 --> 01:13:25
would take to run if our GPU are running

01:13:22 --> 01:13:27
at full efficiency you should actually

01:13:24 --> 01:13:28
do this for your network this we call

01:13:26 --> 01:13:31
this the speed of light this is the

01:13:28 --> 01:13:34
fastest your code could ever run on one

01:13:30 --> 01:13:36
GPU and if you find that you're just

01:13:33 --> 01:13:39
drastically underperforming that number

01:13:35 --> 01:13:41
what could be happening to you is that

01:13:38 --> 01:13:43
you've hit a little edge case in one of

01:13:40 --> 01:13:45
the libraries that you're using and

01:13:42 --> 01:13:47
you're actually suffering a huge setback

01:13:44 --> 01:13:48
that you don't need to be feeling right

01:13:46 --> 01:13:51
now so one of the things we found back

01:13:47 --> 01:13:53
in November is that in libraries like

01:13:50 --> 01:13:54
Kublai's you can actually use mini batch

01:13:52 --> 01:13:57
sizes

01:13:53 --> 01:13:59
hit these weird catastrophic cases in

01:13:56 --> 01:14:01
the library where you could be suffering

01:13:58 --> 01:14:04
like a factor of two or three

01:14:00 --> 01:14:06
performance reduction so that might take

01:14:03 --> 01:14:08
your wonderful one-week training time

01:14:05 --> 01:14:11
and blow it up to say a three week

01:14:07 --> 01:14:14
training time so that's why I wanted to

01:14:10 --> 01:14:16
go through this and ask you to keep in

01:14:13 --> 01:14:18
mind while you're training these things

01:14:15 --> 01:14:19
try to figure out how long it ought to

01:14:17 --> 01:14:22
be taking and if it's going a lot slower

01:14:18 --> 01:14:25
be suspicious that there's some code you

01:14:21 --> 01:14:28
could be optimizing another good trick

01:14:24 --> 01:14:31
that's particularly speech you can also

01:14:27 --> 01:14:34
use this for other recurrent networks is

01:14:30 --> 01:14:37
to try to keep similar length utterances

01:14:33 --> 01:14:40
together so if you look at your data set

01:14:36 --> 01:14:42
like a lot of things you have this sort

01:14:39 --> 01:14:45
of distribution over possible utterance

01:14:41 --> 01:14:47
lengths and so you see there's a whole

01:14:44 --> 01:14:50
bunch that are you know maybe within

01:14:46 --> 01:14:51
about 50% of each other but there's also

01:14:49 --> 01:14:55
a large number of utterances that are

01:14:51 --> 01:14:57
very short and so what happens is when

01:14:54 --> 01:14:59
we want to process a whole bunch of

01:14:56 --> 01:15:02
these uh pterence --is in parallel if we

01:14:58 --> 01:15:04
just randomly select say a thousand

01:15:01 --> 01:15:06
utterances to go into a mini batch

01:15:03 --> 01:15:08
there's a high probability that we're

01:15:05 --> 01:15:10
going to get a whole bunch of these

01:15:07 --> 01:15:12
little short utterances along with some

01:15:09 --> 01:15:15
really long uh pterence --is and in

01:15:11 --> 01:15:16
order to make all the ctc libraries work

01:15:14 --> 01:15:18
and all of our recurrent Network

01:15:15 --> 01:15:21
computations easy what we have to do is

01:15:17 --> 01:15:22
pad these audio signals with zero and

01:15:20 --> 01:15:24
that lines up meaning that we're wasting

01:15:21 --> 01:15:28
huge amounts of computation maybe a

01:15:23 --> 01:15:31
factor of two or more and so one way to

01:15:27 --> 01:15:33
get around it is just sort all of your

01:15:30 --> 01:15:36
utterances by length and then try to

01:15:32 --> 01:15:37
keep the mini-batches to be similar

01:15:35 --> 01:15:39
lengths so that you just don't end up

01:15:36 --> 01:15:41
with quite as much waste in each MIDI

01:15:38 --> 01:15:44
batch and and this kind of modifies your

01:15:40 --> 01:15:49
algorithm a little bit but in the

01:15:43 --> 01:15:50
nd is worthwhile all right this is kind

01:15:48 --> 01:15:54
of all I want to say about computation

01:15:49 --> 01:15:56
if you're if you've got a few GPUs keep

01:15:53 --> 01:15:58
an eye on your running time so that you

01:15:55 --> 01:16:00
know what to optimize and pay attention

01:15:57 --> 01:16:01
to the easy wins like keeping your

01:15:59 --> 01:16:05
utterances together you can actually

01:16:00 --> 01:16:07
scale really well and I think for a lot

01:16:04 --> 01:16:10
of the jobs we see you can have your

01:16:06 --> 01:16:13
GPU running at something like 50%

01:16:09 --> 01:16:15
of the peak and that's all in with

01:16:12 --> 01:16:17
network time with all the bandwidth

01:16:14 --> 01:16:19
bound stuff you can actually run a two

01:16:16 --> 01:16:21
to three teraflops on a GPU that can

01:16:18 --> 01:16:25
only do five teraflops in the perfect

01:16:20 --> 01:16:28
case so what can you actually do with

01:16:24 --> 01:16:30
is I one of my favorite results from

01:16:27 --> 01:16:32
one of our largest models is actually in

01:16:29 --> 01:16:35
Mandarin so we have a whole bunch of

01:16:31 --> 01:16:37
labeled Mandarin data if I do and so one

01:16:34 --> 01:16:38
of the things that we did was we scaled

01:16:36 --> 01:16:41
up this model trained it on a huge

01:16:37 --> 01:16:43
amount of Mandarin data and then as we

01:16:40 --> 01:16:48
always do we sit down and we do error

01:16:42 --> 01:16:50
analysis and what we would do is have a

01:16:47 --> 01:16:52
whole bunch of humans sitting around try

01:16:49 --> 01:16:54
to debate the transcriptions and figure

01:16:51 --> 01:16:56
out the ground truth that tend to be

01:16:53 --> 01:16:59
very high quality and then we go and

01:16:55 --> 01:17:01
we'd run now a sort of holdout test on

01:16:58 --> 01:17:05
some new people and on the speech engine

01:17:00 --> 01:17:07
itself and so if you benchmark a single

01:17:04 --> 01:17:10
human being against this deep speech

01:17:06 --> 01:17:12
engine in Mandarin that's powered by all

01:17:09 --> 01:17:14
the technologies we were just talking

01:17:11 --> 01:17:17
about it turns out that the speech

01:17:13 --> 01:17:19
engine can get an error rate that's down

01:17:16 --> 01:17:21
below six percent character error rate

01:17:18 --> 01:17:23
so only about six percent of the

01:17:20 --> 01:17:24
characters are wrong and a single human

01:17:22 --> 01:17:26
sitting there listening to these

01:17:23 --> 01:17:30
transcriptions actually does quite a bit

01:17:25 --> 01:17:33
worse it's almost ten percent if you

01:17:29 --> 01:17:35
give people a bit of an advantage which

01:17:32 --> 01:17:38
is you going to you now assemble a

01:17:34 --> 01:17:40
committee of people and you get them a

01:17:37 --> 01:17:42
fresh test set so that no one has seen

01:17:39 --> 01:17:45
it before and we run this test again it

01:17:41 --> 01:17:47
urns out that the two engines are that

01:17:44 --> 01:17:48
he two cases are actually really

01:17:46 --> 01:17:50
similar and you can end up with a

01:17:47 --> 01:17:52
committee of native Mandarin speakers

01:17:49 --> 01:17:54
itting around debating no no I think

01:17:51 --> 01:17:56
this person said this or no they have an

01:17:53 --> 01:17:58
accent it's from the north I think

01:17:55 --> 01:18:00
they're actually saying that and then

01:17:57 --> 01:18:02
when you show them the deep speech

01:17:59 --> 01:18:06
transcription they actually go ah that

01:18:01 --> 01:18:07
's what it was and so you can

01:18:05 --> 01:18:10
actually get this technology up to a

01:18:06 --> 01:18:12
point where it's highly competitive with

01:18:09 --> 01:18:14
uman beings even human beings working

01:18:11 --> 01:18:16
together and this is sort of where I

01:18:13 --> 01:18:19
think all the speech recognition systems

01:18:15 --> 01:18:19
are heading thanks to deep learning and

01:18:18 --> 01:18:20
the

01:18:18 --> 01:18:25
technologies that we're talking about

01:18:19 --> 01:18:35
here any questions so far

01:18:24 --> 01:18:37
yeah go ahead yep sorry yeah so the

01:18:34 --> 01:18:38
question is if humans have such a hard

01:18:36 --> 01:18:40
time coming up with the correct

01:18:37 --> 01:18:42
ranscription how do you know what the

01:18:39 --> 01:18:45
truth is and the real answer is you

01:18:41 --> 01:18:47
don't really sometimes you might have a

01:18:44 --> 01:18:49
little bit of user feedback but in this

01:18:46 --> 01:18:51
instance we have very high quality

01:18:48 --> 01:18:54
transcriptions that are coming from many

01:18:50 --> 01:18:57
labelers teamed up with a speech engine

01:18:53 --> 01:18:59
and so that could be wrong we do

01:18:56 --> 01:19:01
ccasionally find errors where we just

01:18:58 --> 01:19:03
hink that's a label error but when you

01:19:00 --> 01:19:05
have a committee of humans around the

01:19:02 --> 01:19:07
really astonishing thing is that you

01:19:04 --> 01:19:09
can look at the output of the speech

01:19:06 --> 01:19:12
engines and the humans will suddenly

01:19:08 --> 01:19:14
jump ship and say oh no no no no this

01:19:11 --> 01:19:16
each engine is actually correct because

01:19:13 --> 01:19:23
it'll often come up with an obscure word

01:19:15 --> 01:19:26
or place that they weren't aware of yeah

01:19:22 --> 01:19:29
so so this is a you know an inherently

01:19:25 --> 01:19:31
ambiguous result but let's say that a

01:19:28 --> 01:19:33
community of human beings tend to

01:19:30 --> 01:19:35
disagree with another committee of human

01:19:32 --> 01:19:51
beings about the same amount as a as a

01:19:34 --> 01:19:54
speech engine does yeah yeah so this is

01:19:50 --> 01:19:56
a so this is using the CTC cost right

01:19:53 --> 01:19:58
hat's really the core component of this

01:19:55 --> 01:20:01
ystem it's how you deal with mapping

01:19:57 --> 01:20:04
one variable length sequence to another

01:20:00 --> 01:20:06
and the CTC cost is not perfect it has

01:20:03 --> 01:20:10
this assumption of Independence baked

01:20:05 --> 01:20:12
into the probabilistic model and because

01:20:09 --> 01:20:14
of that assumption we're introducing

01:20:11 --> 01:20:16
some bias into the system and for

01:20:13 --> 01:20:18
languages like English where the

01:20:15 --> 01:20:20
characters are obviously not independent

01:20:17 --> 01:20:23
of each other this might be a limitation

01:20:19 --> 01:20:25
in practice the thing that we see is

01:20:22 --> 01:20:27
that as you add a lot of data and your

01:20:24 --> 01:20:29
model gets much more powerful you can

01:20:26 --> 01:20:31
still find your way around it but it

01:20:28 --> 01:20:32
might take more data and a bigger model

01:20:30 --> 01:20:35
than necessary

01:20:31 --> 01:20:36
and of course we hope that all the new

01:20:34 --> 01:20:37
state-of-the-art methods coming out of

01:20:35 --> 01:20:41
the deep learning community are going to

01:20:36 --> 01:20:44
give us an even better solution okay

01:20:40 --> 01:20:44
right

01:20:50 --> 01:20:58
empirically determined yeah so the

01:20:54 --> 01:20:59
question is for a spectrogram with we

01:20:57 --> 01:21:01
talked about these little spectrogram

01:20:58 --> 01:21:02
frames being computed from 20

01:21:00 --> 01:21:06
milliseconds of audio and is that number

01:21:01 --> 01:21:08
special is there a reason for it so this

01:21:05 --> 01:21:10
really determined from years and

01:21:07 --> 01:21:13
years of experience this is captured

01:21:09 --> 01:21:15
from the traditional speech community we

01:21:12 --> 01:21:17
know this works pretty well there's

01:21:14 --> 01:21:20
actually some fun things you can do you

01:21:16 --> 01:21:22
can take a spectrogram go back and find

01:21:19 --> 01:21:25
the best audio that corresponds to that

01:21:21 --> 01:21:25
spectrogram to listen to it and see if

01:21:24 --> 01:21:28
you lost anything

01:21:24 --> 01:21:30
and spectrograms of about this level of

01:21:27 --> 01:21:32
quantization you can kind of tell what

01:21:29 --> 01:21:34
people are saying it's a little bit

01:21:31 --> 01:21:36
garbled but it's still actually pretty

01:21:33 --> 01:21:38
good so amongst all the hyper parameters

01:21:35 --> 01:21:40
you could choose this one's kind of a

01:21:37 --> 01:21:42
good trade-off in keeping the

01:21:39 --> 01:21:49
information but also saving a little bit

01:21:41 --> 01:21:49
of the phase by doing it frequently yeah

01:21:48 --> 01:21:55
I think in a lot of the models the in

01:21:52 --> 01:21:57
the demo for example we don't use

01:21:54 --> 01:22:02
overlapping windows they're just

01:21:56 --> 01:22:02
adjacent yeah

01:22:06 --> 01:22:13
so those results are from from

01:22:09 --> 01:22:16
in-house software it Baidu if you use

01:22:12 --> 01:22:18
something like open MPI for example on a

01:22:15 --> 01:22:23
cluster of GPUs actually works pretty

01:22:17 --> 01:22:25
well on a bunch of machines but I think

01:22:22 --> 01:22:27
some of the algorithms like all reduce

01:22:24 --> 01:22:29
once you start moving huge amounts of

01:22:26 --> 01:22:31
data they're not optimal you'll suffer a

01:22:28 --> 01:22:38
hit once you start going to that many

01:22:30 --> 01:22:40
GPUs within a single box if you use the

01:22:37 --> 01:22:43
CUDA libraries to move data back and

01:22:39 --> 01:22:44
forth just on a local box that stuff is

01:22:42 --> 01:22:47
pretty well optimized and you can often

01:22:43 --> 01:22:49
do it yourself okay

01:22:46 --> 01:22:51
so I want to take a few more questions

01:22:48 --> 01:22:54
at the end and maybe we can run into the

01:22:50 --> 01:22:56
break a little bit I wanted to just dive

01:22:53 --> 01:23:02
right through a few comments about

01:22:55 --> 01:23:04
production here so of course the

01:23:01 --> 01:23:07
ultimate goal of solving speech

01:23:03 --> 01:23:09
recognition is to improve people's lives

01:23:06 --> 01:23:12
and enable exciting products and so that

01:23:08 --> 01:23:14
means even though so far we've trained a

01:23:11 --> 01:23:15
bunch of acoustic and language models we

01:23:13 --> 01:23:18
also want to get these things in

01:23:14 --> 01:23:20
production and users tend to care about

01:23:17 --> 01:23:23
more than just accuracy accuracy of

01:23:19 --> 01:23:25
course matters a lot but we also care

01:23:22 --> 01:23:27
about things like latency users want to

01:23:24 --> 01:23:28
see the engine send them some feedback

01:23:26 --> 01:23:30
very quickly so that they know that it's

01:23:27 --> 01:23:32
responding and that it's understanding

01:23:29 --> 01:23:34
what they're saying and we also need

01:23:31 --> 01:23:36
this to be economical so that we can

01:23:33 --> 01:23:37
serve lots of users without breaking the

01:23:35 --> 01:23:40
bank

01:23:36 --> 01:23:41
so in practice a lot of the neural

01:23:39 --> 01:23:43
networks that we use in research papers

01:23:40 --> 01:23:45
because they're awesome for beating

01:23:42 --> 01:23:48
benchmark results turn out not to work

01:23:44 --> 01:23:51
that well on a production engine so one

01:23:47 --> 01:23:53
in particular that I think is worth

01:23:50 --> 01:23:55
keeping an eye on is that it's really

01:23:52 --> 01:23:57
common to use bi-directional recurrent

01:23:54 --> 01:23:59
neural networks and so throughout the

01:23:56 --> 01:24:01
talk I've been drawing my RNN with

01:23:58 --> 01:24:04
connections that just go forward in time

01:24:00 --> 01:24:06
but you'll see a lot of research results

01:24:03 --> 01:24:09
that also have a pass that goes backward

01:24:05 --> 01:24:12
in time and this works fine if you just

01:24:08 --> 01:24:14
want to process data offline but the

01:24:11 --> 01:24:16
problem is that if I want to compute

01:24:13 --> 01:24:17
this neurons output up at the top of my

01:24:15 --> 01:24:19
network

01:24:16 --> 01:24:22
I have to wait until I see the entire

01:24:18 --> 01:24:24
audio segment so that I can compute this

01:24:21 --> 01:24:27
backward recurrence and get this

01:24:23 --> 01:24:29
response so this sort of anti causal

01:24:26 --> 01:24:31
part of my neural network that gets to

01:24:28 --> 01:24:33
see the future means that I can't

01:24:30 --> 01:24:36
respond to a user on the fly because I

01:24:32 --> 01:24:40
need to wait for the end of their signal

01:24:35 --> 01:24:41
so if you start out with these

01:24:39 --> 01:24:43
bi-directional rnns that are actually

01:24:40 --> 01:24:46
much easier to get working and then you

01:24:42 --> 01:24:49
jump to using a recurrent network that

01:24:45 --> 01:24:51
is forward only it'll turn out that

01:24:48 --> 01:24:54
you're going to lose some accuracy and

01:24:50 --> 01:24:55
you might kind of hope that CTC because

01:24:53 --> 01:24:58
it doesn't care about the alignment

01:24:54 --> 01:25:00
would somehow magically learn to shift

01:24:57 --> 01:25:03
he output over to get better accuracy

01:24:59 --> 01:25:05
and just artificially delay the response

01:25:02 --> 01:25:08
so that it could get more context on its

01:25:04 --> 01:25:10
own but it kind of turns out to only do

01:25:07 --> 01:25:13
that a little bit in practice it's

01:25:09 --> 01:25:14
really tough to control it and so if you

01:25:12 --> 01:25:16
find that you're doing much worse

01:25:13 --> 01:25:19
sometimes you have to sort of engage in

01:25:15 --> 01:25:20
model engineering so even though I've

01:25:18 --> 01:25:22
been talking about these recurrent

01:25:19 --> 01:25:25
networks I want you to bear in mind that

01:25:21 --> 01:25:27
here's this dual optimization going on

01:25:24 --> 01:25:29
you want to find a model structure that

01:25:26 --> 01:25:31
gives you really good accuracy but you

01:25:28 --> 01:25:33
also have to think carefully about how

01:25:30 --> 01:25:35
you set up the structure so that this

01:25:32 --> 01:25:38
little neuron at the top can actually

01:25:34 --> 01:25:40
see enough context to get an accurate

01:25:37 --> 01:25:44
answer and and not depend too much on

01:25:39 --> 01:25:46
the future so for example what we could

01:25:43 --> 01:25:48
o is tweak this model so that this

01:25:45 --> 01:25:52
neuron at the top that's trying to

01:25:47 --> 01:25:54
utput the character L and hello can see

01:25:51 --> 01:25:56
some future frames but it doesn't have

01:25:53 --> 01:25:58
this backward recurrence so it only gets

01:25:55 --> 01:26:01
to see a little bit of context that lets

01:25:57 --> 01:26:07
us kind of contain the amount of latency

01:26:00 --> 01:26:11
in the model you skip over this so in

01:26:06 --> 01:26:13
terms of other online aspects of course

01:26:10 --> 01:26:15
we want this to be efficient right we

01:26:12 --> 01:26:19
want to serve lots of users on a small

01:26:14 --> 01:26:20
number of machines if possible and one

01:26:18 --> 01:26:22
of the things you think you might find

01:26:19 --> 01:26:24
if you have a really big deep neural

01:26:21 --> 01:26:26
network or recurrent neural network is

01:26:23 --> 01:26:30
that it's really hard to deploy them on

01:26:25 --> 01:26:32
conventional CPUs CPUs are awesome for

01:26:29 --> 01:26:35
serial jobs you just want to go as

01:26:31 --> 01:26:37
fast as you can for this one string of

01:26:34 --> 01:26:40
instructions but as we've discovered

01:26:36 --> 01:26:41
with so much of deep learning GPUs are

01:26:39 --> 01:26:44
ally fantastic because when we work

01:26:40 --> 01:26:46
with neural networks we love processing

01:26:43 --> 01:26:49
lots and lots of arithmetic in parallel

01:26:45 --> 01:26:51
but it's really only efficient if the

01:26:48 --> 01:26:56
batch that we're working on the hunks of

01:26:50 --> 01:26:58
audio that we're working on are are in a

01:26:55 --> 01:27:00
big enough batch so if we just process

01:26:57 --> 01:27:03
one stream of audio so that my GPU is

01:26:59 --> 01:27:05
multiplying matrices times vectors then

01:27:02 --> 01:27:10
my GPU is going to be really inefficient

01:27:04 --> 01:27:11
so for example unlike a K 1200 GPU this

01:27:09 --> 01:27:13
something you could put in a server

01:27:10 --> 01:27:16
in the cloud what you'll find is that

01:27:12 --> 01:27:19
you get really poor throughput

01:27:15 --> 01:27:21
considering the the dollar value of this

01:27:18 --> 01:27:23
Hardware if you're only processing one

01:27:20 --> 01:27:26
piece of audio at a time whereas if you

01:27:22 --> 01:27:29
could somehow batch up audio to have say

01:27:25 --> 01:27:31
10 or 32 streams going at once then you

01:27:28 --> 01:27:34
can actually squeeze out a lot more more

01:27:30 --> 01:27:36
performance from that piece of hardware

01:27:33 --> 01:27:39
so one of the things that we've been

01:27:35 --> 01:27:41
working on that works really well is not

01:27:38 --> 01:27:44
oo too bad to implement is to just

01:27:40 --> 01:27:46
batch all of the packets as data comes

01:27:43 --> 01:27:48
in so if I have a whole bunch of users

01:27:45 --> 01:27:50
talking to my server and they're sending

01:27:47 --> 01:27:53
me little hundred millisecond packets of

01:27:49 --> 01:27:55
audio what I can do is I can sit and I

01:27:52 --> 01:27:58
can listen to all these users and when I

01:27:54 --> 01:28:00
catch a whole batch of utterances coming

01:27:57 --> 01:28:02
in or a whole bunch of audio packets

01:27:59 --> 01:28:04
coming in from different people that

01:28:01 --> 01:28:07
start around the same time I plug those

01:28:03 --> 01:28:09
all into my GPU and I process those

01:28:06 --> 01:28:11
matrix multiplications together so

01:28:08 --> 01:28:13
instead of multiplying a matrix times

01:28:10 --> 01:28:16
only one little audio piece I get to

01:28:12 --> 01:28:18
multiply it by a batch of say four audio

01:28:15 --> 01:28:21
pieces and it's much more efficient and

01:28:17 --> 01:28:23
if you actually do this on a live server

01:28:20 --> 01:28:25
and you plow a whole bunch of audio

01:28:22 --> 01:28:29
streams through it you could support

01:28:24 --> 01:28:31
maybe 10 20 30 users in parallel and as

01:28:28 --> 01:28:33
the load on that server goes up I have

01:28:30 --> 01:28:35
more and more users piling on what

01:28:32 --> 01:28:38
happens is that the GPU will naturally

01:28:34 --> 01:28:41
start batching up more and more packets

01:28:37 --> 01:28:43
into single matrix multiplications so as

01:28:40 --> 01:28:46
you get more users you actually get much

01:28:42 --> 01:28:48
more efficient as well and so in

01:28:46 --> 01:28:50
practice when you have a whole bunch of

01:28:47 --> 01:28:53
users on one machine you usually don't

01:28:49 --> 01:28:55
see matrix multiplications happening

01:28:52 --> 01:29:00
with fewer than maybe a batch sizes of

01:28:54 --> 01:29:04
our so the summary of all of this is

01:28:59 --> 01:29:05
that deep learning is really making the

01:29:03 --> 01:29:07
first steps to building a

01:29:04 --> 01:29:08
state-of-the-art speech engine easier

01:29:06 --> 01:29:10
than they've ever been so if you want to

01:29:07 --> 01:29:12
build a new state-of-the-art speech

01:29:09 --> 01:29:14
engine for some new language all the

01:29:11 --> 01:29:17
components that you need are things that

01:29:13 --> 01:29:19
we've covered so far and the performance

01:29:16 --> 01:29:21
now is really significantly driven by

01:29:18 --> 01:29:23
data and models and I think as we were

01:29:20 --> 01:29:25
discussing earlier I think future models

01:29:22 --> 01:29:27
from deep learning are going to make

01:29:24 --> 01:29:32
that influence of data and computing

01:29:26 --> 01:29:34
power even stronger and of course data

01:29:31 --> 01:29:35
nd compute is important so that we can

01:29:33 --> 01:29:38
try lots and lots of models and keep

01:29:34 --> 01:29:40
making progress and I think this

01:29:37 --> 01:29:43
technology is now at a stage where it's

01:29:39 --> 01:29:45
not just a research system anymore we're

01:29:42 --> 01:29:47
seeing that the end end deep learning

01:29:44 --> 01:29:49
technologies are now mature enough that

01:29:46 --> 01:29:51
we can get them into productions I think

01:29:48 --> 01:29:53
you guys are going to be seeing deep

01:29:50 --> 01:29:54
learning play a bigger bigger role in

01:29:52 --> 01:29:56
the speech engines that are powering all

01:29:53 --> 01:29:59
the devices that we use so thank you

01:29:55 --> 01:29:59
very much

01:30:02 --> 01:30:08
I think we're right at the end of time

01:30:06 --> 01:30:10
sounds good

01:30:07 --> 01:30:19
alright we had one in the back who's

01:30:09 --> 01:30:21
waiting patiently go ahead more than one

01:30:18 --> 01:30:22
voice simultaneously so the question is

01:30:20 --> 01:30:26
how does the engine handle more than one

01:30:21 --> 01:30:28
voice simultaneously so right now

01:30:25 --> 01:30:30
there's nothing in this formalism that

01:30:27 --> 01:30:35
allows you to account for multiple

01:30:29 --> 01:30:38
speakers and so usually when you listen

01:30:34 --> 01:30:40
to an audio clip in practice it's clear

01:30:37 --> 01:30:42
that there's one dominant speaker and so

01:30:39 --> 01:30:44
this beach engine of course learns

01:30:41 --> 01:30:47
whatever it was taught from the labels

01:30:44 --> 01:30:48
and it will try to filter out background

01:30:46 --> 01:30:51
speakers and just transcribe the

01:30:47 --> 01:30:55
dominant one but if it's really

01:30:50 --> 01:30:55
ambiguous then then undefined results

01:30:54 --> 01:31:02
you customize the transcription to the

01:30:58 --> 01:31:08
specific characteristics of a particular

01:31:01 --> 01:31:11
speaker so we're not doing that in these

01:31:07 --> 01:31:13
pipelines right now but of course a lot

01:31:10 --> 01:31:15
of different strategies have been

01:31:12 --> 01:31:16
developed in the traditional speech

01:31:14 --> 01:31:18
literature there are things like I've

01:31:15 --> 01:31:21
Ector 'z that try to quantify someone's

01:31:17 --> 01:31:23
voice and those make useful features for

01:31:20 --> 01:31:26
improving speech engines you could also

01:31:22 --> 01:31:27
imagine taking a lot of the concepts

01:31:25 --> 01:31:30
like embeddings for example and tossing

01:31:26 --> 01:31:35
them in here so I think a lot of that is

01:31:29 --> 01:31:37
left open to future work I do a question

01:31:34 --> 01:31:41
button I think we have to break for time

01:31:36 --> 01:31:42
but I'll step off stage here and you

01:31:40 --> 01:31:44
guys can come to me with your questions

01:31:41 --> 01:31:44
thank you so much

01:31:46 --> 01:31:54
so we'll reconvene at 2:45 for

01:31:50 --> 01:31:54
presentation by Alex

<!-- YOUTUBE_TRANSCRIPT_END -->
