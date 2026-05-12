---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "L1sHcj3qDNc"
title: "Torch Tutorial (Alex Wiltschko, Twitter)"
video_url: "https://www.youtube.com/watch?v=L1sHcj3qDNc"
thumbnail_url: "https://i.ytimg.com/vi/L1sHcj3qDNc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=L1sHcj3qDNc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 3435
duration_human: "57:15"
view_count: 10448
like_count: 139
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:24:29.512Z"
---

# Torch Tutorial (Alex Wiltschko, Twitter)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=L1sHcj3qDNc
- video_id: L1sHcj3qDNc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 57:15
- view_count: 10448
- like_count: 139
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

00:00:00 --> 00:00:04
so I'm gonna tell you about machine

00:00:02 --> 00:00:07
learning with torch and with torture

00:00:03 --> 00:00:09
Auto grads so the the description of the

00:00:06 --> 00:00:11
talk isn't entirely correct I'm gonna do

00:00:08 --> 00:00:15
practical stuff for the first half and

00:00:10 --> 00:00:16
then what I want to do is dive into

00:00:14 --> 00:00:18
rch Auto grad and some of the concepts

00:00:15 --> 00:00:21
that are behind it and those concepts

00:00:17 --> 00:00:23
also happen to be shared amongst all

00:00:20 --> 00:00:25
deep learning libraries so I really want

00:00:22 --> 00:00:27
o give you a perspective of the common

00:00:24 --> 00:00:29
thread that links all deep learning

00:00:26 --> 00:00:31
software you could possibly use and then

00:00:28 --> 00:00:32
also talk a bit about what makes each of

00:00:30 --> 00:00:34
the libraries different and why there's

00:00:31 --> 00:00:38
I will I will hypothesize why there's so

00:00:33 --> 00:00:40
many and the different choices so one

00:00:37 --> 00:00:41
thing I want to try there's been a lot

00:00:39 --> 00:00:43
of questions and we've gone over time

00:00:40 --> 00:00:45
but if there's not questions that go

00:00:42 --> 00:00:48
ver time in the room there's a lot of

00:00:45 --> 00:00:50
people watching online and if there's

00:00:47 --> 00:00:51
extra time we'll of course prioritize

00:00:49 --> 00:00:53
people here but if you ask a question

00:00:50 --> 00:00:55
with the DL school hashtag or if you

00:00:52 --> 00:00:57
tweet at me directly I will try to

00:00:54 --> 00:00:59
answer those questions from online and

00:00:56 --> 00:01:02
I'll certainly answer them offline as

00:00:58 --> 00:01:04
well so ask if you're watching at home

00:01:01 --> 00:01:06
maybe that will kind of increase you

00:01:03 --> 00:01:07
know meaningful participation for people

00:01:05 --> 00:01:10
watching through the stream that aren't

00:01:06 --> 00:01:12
here today umm a lot of this material

00:01:09 --> 00:01:14
was developed with sumus chintala at

00:01:11 --> 00:01:17
Facebook he's kind of the Czar of the

00:01:13 --> 00:01:19
torch ecosystem these days and Hugo la

00:01:16 --> 00:01:22
rochelle who you heard from yesterday

00:01:18 --> 00:01:25
and also Ryan Adams who's at Twitter

00:01:21 --> 00:01:29
with us and all this some material is

00:01:24 --> 00:01:32
available on this github repository that

00:01:28 --> 00:01:34
you got actually on a printed sheet for

00:01:31 --> 00:01:37
installing torch so all the examples

00:01:33 --> 00:01:38
that I'll show you will be in in one

00:01:36 --> 00:01:39
notebook and then there's a separate

00:01:37 --> 00:01:41
notebook which it actually won't

00:01:38 --> 00:01:42
reference in the talk that's a full

00:01:40 --> 00:01:46
end-to-end walkthrough of how to train a

00:01:41 --> 00:01:48
convolutional neural network on CFR 10

00:01:45 --> 00:01:50
so that's kind of a self-paced tutorial

00:01:47 --> 00:01:51
notebook that you can work through on

00:01:49 --> 00:01:53
your own time but I'm going to focus on

00:01:50 --> 00:01:55
the basics on the fundamentals and

00:01:52 --> 00:01:57
hopefully give you some of the concepts

00:01:54 --> 00:01:59
and vocabulary that you can use to

00:01:56 --> 00:02:03
really dive into torch on your own time

00:01:58 --> 00:02:06
so let's let's get going so torch is an

00:02:02 --> 00:02:08
array programming language for Lua right

00:02:05 --> 00:02:11
so it's like numpy it's like MATLAB but

00:02:07 --> 00:02:13
it's in the Lua language so torch is -

00:02:10 --> 00:02:16
Lua as numpy is - pi

00:02:12 --> 00:02:18
right so what you can do in torch you

00:02:15 --> 00:02:20
can do in you know any language this is

00:02:17 --> 00:02:22
the absolute minimum basics you can grab

00:02:19 --> 00:02:25
strings and print them you can put

00:02:21 --> 00:02:28
hings in associative data types in

00:02:24 --> 00:02:30
Python there's tuples and lists and sets

00:02:27 --> 00:02:33
and dictionaries in lua there's just one

00:02:29 --> 00:02:35
data type called a table so you'll see

00:02:32 --> 00:02:36
that a lot but you can do all those

00:02:34 --> 00:02:38
things that I mentioned before with with

00:02:35 --> 00:02:43
a table and you got four loops and if

00:02:37 --> 00:02:46
statements the core type of torch is the

00:02:42 --> 00:02:47
tensor just like in in numpy when you

00:02:45 --> 00:02:50
have the ND array which is a way of

00:02:46 --> 00:02:54
shaping sets of numbers into matrices or

00:02:49 --> 00:02:55
tensors we have the tensor and you can

00:02:53 --> 00:02:58
fill it up with random numbers you can

00:02:54 --> 00:03:00
multiply them standard stuff but the

00:02:57 --> 00:03:02
tensor is the core data type of torch

00:02:59 --> 00:03:04
and we've got plotting functionality

00:03:01 --> 00:03:06
going over at a very high level I'll

00:03:03 --> 00:03:08
show you some more specific code in a

00:03:05 --> 00:03:10
moment so you can do all the kind of

00:03:07 --> 00:03:13
standard stuff that you'd do in any

00:03:09 --> 00:03:15
other array based language there's all

00:03:12 --> 00:03:18
the tensor functions that you'd like to

00:03:14 --> 00:03:20
use including all the linear

00:03:17 --> 00:03:23
algebra and convolutions and and you

00:03:19 --> 00:03:24
know blast functions and I'm leaving

00:03:22 --> 00:03:25
this link here when the slides get

00:03:23 --> 00:03:27
uploaded you can follow this and kind of

00:03:25 --> 00:03:30
dive into the documentation and see

00:03:26 --> 00:03:33
xactly what what kind of tools you have

00:03:29 --> 00:03:34
at your disposal in in the notebook and

00:03:32 --> 00:03:37
the eye torch notebook which is

00:03:33 --> 00:03:39
omething that seumas put together you

00:03:36 --> 00:03:41
can prepend any torch function with a

00:03:38 --> 00:03:43
question mark and that gives you the

00:03:40 --> 00:03:46
lp for that function so it makes it

00:03:42 --> 00:03:51
really nice to discover functionality in

00:03:45 --> 00:03:53
the torch library in the notebook so why

00:03:50 --> 00:03:55
is it in Lua alright it's kind of a

00:03:52 --> 00:04:00
maybe a strange maybe esoteric language

00:03:55 --> 00:04:04
to write things in Lua is is

00:03:59 --> 00:04:06
unreasonably fast for how convenient it

00:04:03 --> 00:04:09
is to use especially a flavor of Lua

00:04:05 --> 00:04:12
called Lua jet for loops in Lua jet are

00:04:08 --> 00:04:15
basically the same speed as C so this

00:04:11 --> 00:04:18
for loop here is actually in production

00:04:14 --> 00:04:21
code in master and torch it's not C code

00:04:17 --> 00:04:23
but this is perfectly fast enough right

00:04:20 --> 00:04:26
so that's a really nice aspect of Lua is

00:04:22 --> 00:04:28
you can depend on super

00:04:25 --> 00:04:29
high-performance c-code and then on top

00:04:27 --> 00:04:31
of it you've got this very convenient

00:04:28 --> 00:04:33
glue layer but you don't pay much of a

00:04:30 --> 00:04:35
speed penalty to use that glue layer so

00:04:32 --> 00:04:37
that's one of the reasons why we've used

00:04:34 --> 00:04:39
Lua another advantage that some people

00:04:36 --> 00:04:41
might see as a plus is the language

00:04:38 --> 00:04:42
itself is quite small so there's 10,000

00:04:40 --> 00:04:45
lines of C code that define the whole

00:04:41 --> 00:04:47
language of Lua so you can really sit

00:04:44 --> 00:04:50
down with the manual in an afternoon

00:04:46 --> 00:04:53
and understand most of the language on

00:04:49 --> 00:04:55
your own that same day another aspect

00:04:52 --> 00:04:56
which is pretty critical for deep

00:04:54 --> 00:04:58
learning but also for other fields is

00:04:55 --> 00:05:01
that it's really easy to interoperate

00:04:57 --> 00:05:04
with C libraries it was designed

00:05:00 --> 00:05:05
originally to be embedded so Lua was a

00:05:03 --> 00:05:07
language that was designed to run inside

00:05:04 --> 00:05:09
of another C program but have a little

00:05:06 --> 00:05:11
scripting layer inside of it so it's

00:05:08 --> 00:05:14
very easy to call indicee it's very easy

00:05:10 --> 00:05:15
for c to call into Lua so this is

00:05:13 --> 00:05:17
another reason why it's kind of an

00:05:14 --> 00:05:22
appropriate choice for deep learning

00:05:16 --> 00:05:25
libraries the FFI for like the FF I call

00:05:21 --> 00:05:27
signature and the idea has been copied

00:05:24 --> 00:05:30
into many other languages so C FF I and

00:05:26 --> 00:05:34
Python is a Python version of the Lua FF

00:05:29 --> 00:05:36
I julia has something similar as well

00:05:33 --> 00:05:38
and as I mentioned it was originally

00:05:35 --> 00:05:39
designed to be embedded and it's in all

00:05:37 --> 00:05:42
kinds of crazy places that you maybe

00:05:38 --> 00:05:44
wouldn't expect Lua to be so in World of

00:05:41 --> 00:05:45
Warcraft all the graphics are in C++ or

00:05:43 --> 00:05:47
whatever they wrote it in but like the

00:05:44 --> 00:05:50
boss battles or the quests so like when

00:05:46 --> 00:05:51
you go give the gem to the blacksmith or

00:05:49 --> 00:05:52
whatever and they give you back the

00:05:50 --> 00:05:54
magic sword the scripting of those

00:05:51 --> 00:05:56
vents that happens in Lua and if you

00:05:53 --> 00:05:59
write scripts for world of warcraft to

00:05:55 --> 00:06:01
make your own quests that's Lua Adobe

00:05:58 --> 00:06:04
Lightroom is a photo processing app all

00:06:00 --> 00:06:05
the image processing is done in C++ but

00:06:03 --> 00:06:08
all the UI and everything was done in

00:06:04 --> 00:06:09
Lua so again it was used to bind

00:06:07 --> 00:06:12
together high-performance code with a

00:06:08 --> 00:06:14
with kind of a scripting layer and Redis

00:06:11 --> 00:06:16
and nginx which are kind of workhorses

00:06:13 --> 00:06:19
in the field of web development are both

00:06:15 --> 00:06:23
scriptable with Lua and in fact if you

00:06:18 --> 00:06:24
go to github pages like my page github I

00:06:22 --> 00:06:28
oh if somebody's hosting a web page on

00:06:23 --> 00:06:30
github that's served in part by Lua the

00:06:27 --> 00:06:32
apocryphal story of why I was originally

00:06:29 --> 00:06:37
chosen maybe you could correct me is

00:06:31 --> 00:06:38
klimova Oh BAE was trying to build an

00:06:36 --> 00:06:40
embedded machine learning application

00:06:37 --> 00:06:41
some device he could whereas

00:06:39 --> 00:06:44
helmut and classify the world with the

00:06:40 --> 00:06:45
CNN when he was a young student and he

00:06:43 --> 00:06:48
was trying to do this with Python and

00:06:44 --> 00:06:50
it's incredibly frustrating to get

00:06:47 --> 00:06:51
Python to run on embedded chips maybe

00:06:49 --> 00:06:53
it's easier now with raspberry pi but

00:06:50 --> 00:06:54
hat just wasn't the case and then he

00:06:52 --> 00:06:56
stumbled upon Lua

00:06:53 --> 00:06:58
nd turns out people had been building

00:06:55 --> 00:07:00
Lua into embedded applications for years

00:06:57 --> 00:07:02
before that and so that kind of was the

00:06:59 --> 00:07:05
snowballing effect so that's that's the

00:07:01 --> 00:07:07
arsay for how we arrived at Lua but

00:07:04 --> 00:07:11
maybe there's there's another story

00:07:06 --> 00:07:14
another really nice feature of torch is

00:07:10 --> 00:07:17
we have first-class support for GPU

00:07:13 --> 00:07:20
computation interactive GPU computation

00:07:16 --> 00:07:22
so it's very very easy to get some data

00:07:19 --> 00:07:24
from the CPU to the GPU and then

00:07:21 --> 00:07:25
everything that you do with that data

00:07:23 --> 00:07:27
happens on the GPU without you having to

00:07:24 --> 00:07:30
worry about writing CUDA kernels right

00:07:26 --> 00:07:32
so this has been a feature of Lua torch

00:07:29 --> 00:07:34
which is becoming maybe a little bit

00:07:31 --> 00:07:37
less unique now but this was this was a

00:07:33 --> 00:07:39
pretty solid feature when it first came

00:07:36 --> 00:07:41
out so interactive GPU computing and

00:07:38 --> 00:07:43
I'll go very quickly over some of the

00:07:40 --> 00:07:45
basic features and all of these examples

00:07:42 --> 00:07:48
again are in a notebook which you can do

00:07:44 --> 00:07:51
kind of at your own pace if you'd like

00:07:47 --> 00:07:53
so there's all the basic arithmetic like

00:07:50 --> 00:07:56
creating matrices and and doing

00:07:52 --> 00:07:59
arithmetic between them taking maxes of

00:07:55 --> 00:08:04
numbers and arrays clamping building

00:07:58 --> 00:08:08
tensors out of ranges boolean operations

00:08:03 --> 00:08:10
over entire arrays special functions

00:08:07 --> 00:08:12
this is supported through a wrapper

00:08:09 --> 00:08:14
around the Cepheus library this is what

00:08:11 --> 00:08:17
numpy uses to support things like 10h

00:08:13 --> 00:08:21
and atan2 and other kinds of functions

00:08:16 --> 00:08:25
that I guess are in the special class

00:08:20 --> 00:08:27
and then sumif again has wrapped the

00:08:24 --> 00:08:29
Bocage a/s library which is originally

00:08:26 --> 00:08:31
just for python but it provides really

00:08:28 --> 00:08:34
nice and beautiful plots in the eye

00:08:30 --> 00:08:36
torch notebook and so we can you know

00:08:33 --> 00:08:38
draw random numbers from our favorite

00:08:35 --> 00:08:40
distributions and make nice histograms

00:08:37 --> 00:08:42
of these so you can do nice data

00:08:39 --> 00:08:46
exploration in the eye torch notebook

00:08:41 --> 00:08:49
along with deep learning so one feature

00:08:45 --> 00:08:50
that is attractive to some folks but

00:08:48 --> 00:08:52
just an interesting feature of the torch

00:08:49 --> 00:08:53
ecosystem is that although there's a lot

00:08:51 --> 00:08:56
of industries

00:08:52 --> 00:08:58
upport it is not industry owned so at

00:08:55 --> 00:08:59
Twitter and at Facebook air research in

00:08:57 --> 00:09:01
at Nvidia

00:08:58 --> 00:09:05
we all contribute a lot to the torch

00:09:00 --> 00:09:07
community but we don't own it we can't

00:09:04 --> 00:09:09
really steer it to go one way or the

00:09:06 --> 00:09:10
other definitively and there's a ton of

00:09:08 --> 00:09:12
other people that participate

00:09:09 --> 00:09:17
academically in this ecosystem and

00:09:11 --> 00:09:19
that's a really nice feature and along

00:09:16 --> 00:09:22
with I guess because of the really nice

00:09:18 --> 00:09:24
habits of people in deep learning when a

00:09:21 --> 00:09:26
paper comes out there's often a high

00:09:23 --> 00:09:29
quality code implementation that follows

00:09:25 --> 00:09:31
it not not always but but very often at

00:09:28 --> 00:09:33
least compared with with other fields

00:09:30 --> 00:09:35
and torch is one of the environments in

00:09:32 --> 00:09:37
which you'll often see high quality

00:09:34 --> 00:09:39
implementations of really cutting-edge

00:09:36 --> 00:09:41
stuff so if you just browsed through

00:09:38 --> 00:09:44
github and you kind of follow

00:09:40 --> 00:09:46
researchers on github you can see really

00:09:43 --> 00:09:48
high quality implementations of image

00:09:45 --> 00:09:50
captioning of neural style transfer so

00:09:47 --> 00:09:52
you can just clone this github

00:09:49 --> 00:09:55
repository and run this yourself

00:09:51 --> 00:09:57
seek to seek models kind of the what is

00:09:54 --> 00:09:58
whatever is the state of the art there's

00:09:56 --> 00:10:01
usually a torch implementation of it

00:09:57 --> 00:10:04
some of the recent work in generating

00:10:00 --> 00:10:06
very realistic synthetic images with

00:10:03 --> 00:10:09
generative adversarial networks also has

00:10:05 --> 00:10:12
great torch code implementing it so

00:10:08 --> 00:10:17
given that there's this active community

00:10:11 --> 00:10:19
on github in deep learning for torch how

00:10:16 --> 00:10:20
does that stack up against other

00:10:18 --> 00:10:22
communities just to give you some

00:10:19 --> 00:10:24
context so the Python data science

00:10:21 --> 00:10:28
community is is pretty enormous and its

00:10:23 --> 00:10:31
focuses are also very very varied

00:10:27 --> 00:10:34
if you enter into the data science

00:10:30 --> 00:10:36
community in torch and lua you'll likely

00:10:33 --> 00:10:37
find deep learning people but not a lot

00:10:35 --> 00:10:40
of other people so it's strengthened

00:10:36 --> 00:10:42
eep learning compared to its size is

00:10:39 --> 00:10:43
actually quite enormous and for those

00:10:41 --> 00:10:45
that are kind of thinking of switching

00:10:42 --> 00:10:48
between Python and Lua and giving torch

00:10:44 --> 00:10:50
a try the effort to switch from Python

00:10:47 --> 00:10:51
to Lua you can probably do that in a day

00:10:49 --> 00:10:54
if you've tried some Python programming

00:10:50 --> 00:10:56
so I was a Python programmer for a while

00:10:53 --> 00:10:58
and getting started on Lua took took me

00:10:55 --> 00:10:59
maybe a couple days and I was you know

00:10:57 --> 00:11:02
actually productive at work and maybe a

00:10:58 --> 00:11:04
week or so but you can actually run your

00:11:01 --> 00:11:05
code and understand and write new things

00:11:03 --> 00:11:06
pretty quickly if you've worked in a

00:11:04 --> 00:11:08
scripting language like MATLAB or

00:11:05 --> 00:11:10
Python so if you were intimidated or

00:11:07 --> 00:11:13
waiting to try it you should just dive

00:11:09 --> 00:11:15
in so how does torch compared to other

00:11:12 --> 00:11:17
deep learning libraries specifically as

00:11:14 --> 00:11:18
opposed to languages and the first thing

00:11:16 --> 00:11:21
I'll say is there's really no silver

00:11:17 --> 00:11:24
bullet right now there are a lot of deep

00:11:20 --> 00:11:26
learning libraries out there I say

00:11:23 --> 00:11:29
tensorflow is by far the largest and

00:11:25 --> 00:11:32
this is a plot that was made by a

00:11:28 --> 00:11:33
colleague of SU myths and I wish it kind

00:11:31 --> 00:11:36
of had confidence intervals on it

00:11:32 --> 00:11:38
because it's not strictly that these are

00:11:35 --> 00:11:41
like you know points in in deep learning

00:11:37 --> 00:11:43
space but maybe this is a good guess of

00:11:40 --> 00:11:45
where things kind of fit it seems as if

00:11:42 --> 00:11:47
tensorflow was engineered to be very

00:11:44 --> 00:11:49
good in an industrial production setting

00:11:46 --> 00:11:50
and it seems like it's really fulfilling

00:11:48 --> 00:11:52
that Theano

00:11:49 --> 00:11:55
seems to have always had a research goal

00:11:51 --> 00:11:56
in mind and has been really awesome in

00:11:54 --> 00:11:58
the research community for some time

00:11:55 --> 00:12:00
Torche tends to be more towards research

00:11:57 --> 00:12:02
than industry I think Twitter maybe has

00:11:59 --> 00:12:04
pulled it a little bit towards

00:12:01 --> 00:12:06
production we maybe are the only example

00:12:03 --> 00:12:07
I'd love to learn of others but were

00:12:05 --> 00:12:10
maybe the only example of a large

00:12:06 --> 00:12:12
company that uses torch in production to

00:12:09 --> 00:12:14
serve models so every piece of media

00:12:11 --> 00:12:16
that comes in to Twitter goes through a

00:12:13 --> 00:12:17
torch model at this point so we're

00:12:15 --> 00:12:22
ally dealing with an enormous amount

00:12:16 --> 00:12:25
of data in a live setting the

00:12:21 --> 00:12:27
development of torch just to give you a

00:12:24 --> 00:12:28
sense of how we think about how it was

00:12:26 --> 00:12:31
built and how we're extending it is

00:12:27 --> 00:12:33
there's some kind of tenets of our core

00:12:30 --> 00:12:35
philosophy and if really the first is

00:12:32 --> 00:12:36
things should be as not to this isn't

00:12:34 --> 00:12:38
necessarily good or bad this but this is

00:12:35 --> 00:12:40
our choice whenever you hit enter on a

00:12:37 --> 00:12:41
particular line and your I torch

00:12:39 --> 00:12:45
notebook or on the command line you

00:12:40 --> 00:12:46
should get an answer back and this is

00:12:44 --> 00:12:48
omething that we've we've tried to

00:12:45 --> 00:12:50
stick to pretty pretty tightly so no

00:12:47 --> 00:12:53
compilation time imperative programming

00:12:49 --> 00:12:55
right so just write your code and you

00:12:52 --> 00:12:57
know each each line of code executes

00:12:54 --> 00:13:00
omething and passes it to the next line

00:12:56 --> 00:13:02
and minimal abstraction what I mean by

00:12:59 --> 00:13:04
minimal abstraction is if you want a

00:13:01 --> 00:13:06
reason about how your code is performing

00:13:03 --> 00:13:07
it shouldn't take you that many jumps to

00:13:05 --> 00:13:09
go to the C code that's actually being

00:13:06 --> 00:13:12
run in fact it usually is one or two

00:13:08 --> 00:13:13
jumps from the file that defines the

00:13:11 --> 00:13:15
function that you care about to the

00:13:12 --> 00:13:16
actual C code so if you want a reason

00:13:14 --> 00:13:18
about performance or really understand

00:13:15 --> 00:13:21
what's going on it's it's it's quite

00:13:17 --> 00:13:25
asy to do so in torch

00:13:20 --> 00:13:27
I want to take a little bit of a detour

00:13:24 --> 00:13:29
and tell you about how torch thinks

00:13:26 --> 00:13:31
about its objects how it thinks about

00:13:28 --> 00:13:32
he tensor because this can help you

00:13:30 --> 00:13:34
also reason about performance a lot of

00:13:31 --> 00:13:36
the reason why people come to torch is

00:13:33 --> 00:13:39
to build high-performance models very

00:13:35 --> 00:13:42
quickly and easily so I mentioned

00:13:38 --> 00:13:45
tensors before so attentional tensor a

00:13:41 --> 00:13:47
tensor is an N dimensional array and a

00:13:44 --> 00:13:50
tensor is actually just a pointer it's a

00:13:46 --> 00:13:52
view into your member into your data

00:13:49 --> 00:13:55
that's sitting in memory all right so

00:13:51 --> 00:13:56
it's just a it's a shape it's um it's a

00:13:54 --> 00:13:58
view into into what's actually being

00:13:55 --> 00:13:59
stored in your RAM and it's stored in a

00:13:57 --> 00:14:01
row major way

00:13:58 --> 00:14:04
so that means if I go to the first

00:14:00 --> 00:14:06
element of my tensor in memory and I

00:14:03 --> 00:14:10
move over one I'm moving over one in a

00:14:05 --> 00:14:12
row and not one in a column column major

00:14:09 --> 00:14:14
memory storage does exist it's just less

00:14:11 --> 00:14:17
common today so you often see row major

00:14:13 --> 00:14:20
so this tensor is defined by its link to

00:14:16 --> 00:14:22
some storage and it's size 4 by 6 and

00:14:19 --> 00:14:25
it's tried six by one and six by one

00:14:21 --> 00:14:27
means if I move one down in the column

00:14:24 --> 00:14:30
direction I actually have to skip six

00:14:26 --> 00:14:32
elements in memory right whereas the one

00:14:29 --> 00:14:34
here means if I move over one in the

00:14:31 --> 00:14:38
second axis the row axis I have to go

00:14:33 --> 00:14:41
ver one in memory so if I take a slice

00:14:37 --> 00:14:43
of this tensor using the Select command

00:14:40 --> 00:14:45
so I select along the first dimension

00:14:42 --> 00:14:47
the third element what he gives me back

00:14:44 --> 00:14:50
is a new tensor it doesn't give me a new

00:14:46 --> 00:14:52
memory this is a thing that that happens

00:14:49 --> 00:14:54
a lot in torch is you'll deal with views

00:14:51 --> 00:14:56
into memory you won't do memory copies

00:14:54 --> 00:15:00
right so usually working with kind of

00:14:55 --> 00:15:01
the raw data in RAM and so this creates

00:14:59 --> 00:15:03
a new tensor with the size of six

00:15:00 --> 00:15:05
because there's six elements astride of

00:15:02 --> 00:15:07
one because we've pulled out a row not a

00:15:04 --> 00:15:09
column and an offset of 13 that means I

00:15:06 --> 00:15:10
have to go 13 elements from the

00:15:08 --> 00:15:13
beginning of the original storage to

00:15:09 --> 00:15:17
find that piece of memory so if I pull

00:15:12 --> 00:15:18
out a column then something different

00:15:16 --> 00:15:20
happens which is they still have or I

00:15:17 --> 00:15:22
have a size of four here and my stride

00:15:19 --> 00:15:24
is now six because in order to grab each

00:15:21 --> 00:15:27
element of the column I have to skip six

00:15:23 --> 00:15:29
and then the offset of three is because

00:15:26 --> 00:15:30
I grab the third element there all right

00:15:28 --> 00:15:33
so that's kind of a view of the of the

00:15:29 --> 00:15:34
memory model and if we act

00:15:32 --> 00:15:37
run something like this like we

00:15:33 --> 00:15:41
instantiate a double-a tensor of double

00:15:36 --> 00:15:45
of foot double values inside of the

00:15:40 --> 00:15:48
tensor and fill it with you know uniform

00:15:44 --> 00:15:50
distribution and print it we can

00:15:47 --> 00:15:53
see the values here and then we grab a

00:15:49 --> 00:15:55
slice B and print it it's just this row

00:15:52 --> 00:15:57
and then we can fill B with just some

00:15:55 --> 00:15:59
number and print it now it's filled with

00:15:56 --> 00:16:01
at number now if we go back and print

00:15:58 --> 00:16:03
a we've actually overwritten the values

00:16:00 --> 00:16:05
there so this is something you see a lot

00:16:02 --> 00:16:09
in torches is working on one big piece

00:16:04 --> 00:16:11
of shared memory and as I mentioned

00:16:08 --> 00:16:14
before working with CUDA is really

00:16:10 --> 00:16:15
easy so if you just require ku

00:16:13 --> 00:16:19
torch which is installed automatically

00:16:14 --> 00:16:20
if you have a CUDA GPU using the

00:16:18 --> 00:16:23
instructions on the github repository

00:16:19 --> 00:16:26
ou can instantiate a tensor on the GPU

00:16:22 --> 00:16:30
and do the same thing and it will just

00:16:25 --> 00:16:32
work so now I want to talk a bit about

00:16:29 --> 00:16:34
he frameworks that you'll use to

00:16:31 --> 00:16:37
actually train neural networks in torch

00:16:33 --> 00:16:40
so this is a schematic kind of cartoon

00:16:36 --> 00:16:42
of how we of the pieces we typically

00:16:39 --> 00:16:44
need to train a neural network so we've

00:16:41 --> 00:16:46
got our data stored on you know hard

00:16:43 --> 00:16:48
rive or on a big distributed file

00:16:45 --> 00:16:51
system and we have some system for

00:16:47 --> 00:16:53
loading that data off of that file

00:16:50 --> 00:16:55
system which goes into a nice queue and

00:16:52 --> 00:16:58
then some training code which

00:16:54 --> 00:16:59
orchestrates a neural network so the

00:16:57 --> 00:17:01
thing actually making the prediction a

00:16:58 --> 00:17:03
cost function which is a measure of how

00:17:00 --> 00:17:05
good our neural network is at any point

00:17:02 --> 00:17:07
in our training and an optimizer which

00:17:04 --> 00:17:09
is going to take the gradient of the

00:17:06 --> 00:17:11
cost with respect to the parameters in

00:17:08 --> 00:17:14
the neural network and try to make the

00:17:10 --> 00:17:17
neural network better so in the torch

00:17:13 --> 00:17:19
ecosystem we've got some packages that

00:17:16 --> 00:17:21
ackle each one of these separately so I

00:17:18 --> 00:17:22
won't talk about threads here there's

00:17:20 --> 00:17:23
actually several different libraries

00:17:21 --> 00:17:24
that will do this there's actually

00:17:22 --> 00:17:26
several different libraries that will do

00:17:23 --> 00:17:28
each one of these things but this one is

00:17:25 --> 00:17:32
maybe the most common or the easiest to

00:17:27 --> 00:17:33
start with and and then here we'll cover

00:17:31 --> 00:17:35
both the specification of the neural

00:17:32 --> 00:17:37
network and the cost function as well as

00:17:34 --> 00:17:39
the mechanisms to push data through the

00:17:36 --> 00:17:40
neural network in the cost function and

00:17:38 --> 00:17:43
pull the gradients back from the cost to

00:17:39 --> 00:17:44
the parameters and then the optimizer

00:17:42 --> 00:17:46
which is we've heard mentioned several

00:17:43 --> 00:17:47
times today is to cast a gradient

00:17:45 --> 00:17:50
descent or

00:17:46 --> 00:17:53
we're outta grad so let me talk about NN

00:17:49 --> 00:17:57
first give you a flavor of kind of how

00:17:52 --> 00:18:01
it works and what the pieces are so NN

00:17:56 --> 00:18:03
is a package for building feed-forward

00:18:00 --> 00:18:05
neural networks mostly feed-forward

00:18:02 --> 00:18:06
neural networks but kind of clicking

00:18:04 --> 00:18:08
Lego blocks together

00:18:05 --> 00:18:09
ight so you might start with your input

00:18:07 --> 00:18:11
and then click together a fully

00:18:08 --> 00:18:12
connected layer and then another fully

00:18:10 --> 00:18:16
connected layer and then maybe some

00:18:11 --> 00:18:18
output right so here I've defined a

00:18:15 --> 00:18:20
sequential container which is going to

00:18:17 --> 00:18:23
be a container for all my Lego blocks

00:18:19 --> 00:18:24
and then I might click in a spatial

00:18:22 --> 00:18:27
convolution so I'm going to be working

00:18:23 --> 00:18:32
with images maybe a non-linearity some

00:18:26 --> 00:18:34
max pooling some other layers as well to

00:18:31 --> 00:18:35
kind of complete the whole neural

00:18:33 --> 00:18:38
network and then I might add a log

00:18:34 --> 00:18:40
softmax at the end to to compute class

00:18:37 --> 00:18:42
probabilities so this this kind of the

00:18:39 --> 00:18:44
structure that you'll build neural

00:18:41 --> 00:18:46
networks with in NN is define a

00:18:43 --> 00:18:49
container and then one by one add pieces

00:18:45 --> 00:18:51
down a processing hierarchy and I

00:18:49 --> 00:18:52
mentioned the sequential container which

00:18:50 --> 00:18:54
is starting from inputs and then

00:18:51 --> 00:18:56
proceeding linearly there's two other

00:18:53 --> 00:18:59
types of containers that you might use

00:18:55 --> 00:19:01
but generally NN shines when your

00:18:58 --> 00:19:03
architecture is linear right not when

00:19:00 --> 00:19:08
it's got some crazy branches or anything

00:19:02 --> 00:19:10
like that the there's not a lot of API

00:19:07 --> 00:19:12
to the NN package so if you if you learn

00:19:09 --> 00:19:14
these couple functions which will be in

00:19:11 --> 00:19:16
the slides for later if you want to

00:19:13 --> 00:19:17
refer to them back you will understand

00:19:15 --> 00:19:20
all the mechanisms that you need to know

00:19:16 --> 00:19:22
to push data through a neural network

00:19:19 --> 00:19:24
and then to push it through a criterion

00:19:21 --> 00:19:26
or a loss function and then to pull

00:19:23 --> 00:19:28
those gradients back in order to make a

00:19:25 --> 00:19:30
gradient update to your model so these

00:19:27 --> 00:19:33
are really the API is the levers that

00:19:29 --> 00:19:36
you need to know to kind of drive your

00:19:32 --> 00:19:38
neural network and of course we have a

00:19:35 --> 00:19:40
CUDA back-end for n n so in the same way

00:19:37 --> 00:19:43
that you'll just call CUDA on some data

00:19:39 --> 00:19:45
you can call CUDA on a container and

00:19:42 --> 00:19:47
that will move the whole model onto the

00:19:44 --> 00:19:49
GPU and then anything that you do with

00:19:46 --> 00:19:52
at model will occur on the GPU so it's

00:19:48 --> 00:19:56
kind of a one-liner to start training

00:19:51 --> 00:19:59
models on a graphics processor so for

00:19:55 --> 00:20:00
doing feed-forward neural networks n n

00:19:58 --> 00:20:04
is pretty great but for starting too

00:19:59 --> 00:20:06
weirder architectures like richard

00:20:03 --> 00:20:08
social yesterday mentioned a pretty

00:20:05 --> 00:20:10
complicated NLP model that starts with

00:20:07 --> 00:20:12
glove vectors which are kind of like

00:20:09 --> 00:20:13
shallow neural networks and then a

00:20:11 --> 00:20:15
recursive neural network and then an

00:20:13 --> 00:20:17
attention mechanism and all these things

00:20:14 --> 00:20:20
were interacting in strange ways that's

00:20:16 --> 00:20:22
actually pretty hard to specify in NN at

00:20:19 --> 00:20:24
Twitter we have a package called torch

00:20:21 --> 00:20:26
Auto grab which makes these kinds of

00:20:23 --> 00:20:29
gluing different model pieces together

00:20:25 --> 00:20:32
eally easy and in fact the pieces can

00:20:28 --> 00:20:34
be as small as addition division

00:20:31 --> 00:20:36
multiplication and subtraction so you

00:20:33 --> 00:20:37
can glue together any size piece of

00:20:35 --> 00:20:39
computation and still get a correct

00:20:36 --> 00:20:40
model out and I'll talk more about that

00:20:38 --> 00:20:43
in a moment

00:20:39 --> 00:20:45
he optin package is what you need in

00:20:42 --> 00:20:47
order to train models with like

00:20:44 --> 00:20:49
stochastic gradient descent or a degrade

00:20:46 --> 00:20:50
or out of delta whatever your optimizer

00:20:48 --> 00:20:54
is that you that's your favor

00:20:49 --> 00:20:56
the API is pretty straightforward but

00:20:53 --> 00:20:57
maybe a little bit different for people

00:20:55 --> 00:20:59
kind of coming from the Python world

00:20:56 --> 00:21:02
it's got a bit of a functional approach

00:20:58 --> 00:21:05
where it will actually you'll you'll

00:21:01 --> 00:21:07
pass a function to opt in that will

00:21:04 --> 00:21:09
evaluate your neural network and pass

00:21:06 --> 00:21:10
back the gradients so that's just

00:21:08 --> 00:21:14
something to be aware of it's a little

00:21:09 --> 00:21:16
bit of a different style another gotcha

00:21:13 --> 00:21:19
with optin that you might run into and

00:21:15 --> 00:21:22
you'll see in some of the notebooks that

00:21:18 --> 00:21:24
are online is your parameters should be

00:21:21 --> 00:21:26
linear in memory so if you want to

00:21:23 --> 00:21:28
ptimize to neural networks that are

00:21:25 --> 00:21:29
interacting in some way you actually

00:21:27 --> 00:21:32
need to first bring their parameters

00:21:28 --> 00:21:33
together into one tensor and then pass

00:21:31 --> 00:21:38
that to opt in there's just something to

00:21:32 --> 00:21:40
be aware of so I want to talk for the

00:21:37 --> 00:21:42
rest of the talk about torch Auto grad

00:21:39 --> 00:21:44
but also about some of the ideas that

00:21:41 --> 00:21:46
are behind torch Auto grad and how those

00:21:43 --> 00:21:49
link all the deep learning libraries

00:21:45 --> 00:21:51
that you possibly could choose so first

00:21:48 --> 00:21:54
I want to take a step back and say that

00:21:50 --> 00:21:55
just appreciate the wonderful stable

00:21:53 --> 00:21:59
abstractions that we have in scientific

00:21:55 --> 00:22:01
omputing right so Fortran you know back

00:21:58 --> 00:22:03
in 57 I don't think anybody uses Fortran

00:22:00 --> 00:22:05
57 but people might actually still use

00:22:02 --> 00:22:10
Fortran 90 the idea of an array was

00:22:04 --> 00:22:12
didn't exist on a computer and it really

00:22:09 --> 00:22:14
took some pretty crazy thinking I think

00:22:11 --> 00:22:17
to build a system that made arrays

00:22:13 --> 00:22:19
omething we take for granted same with

00:22:16 --> 00:22:21
linear algebra over about a 20-year

00:22:18 --> 00:22:23
period starting in the late 70s people

00:22:20 --> 00:22:25
decided oh maybe we should think about

00:22:22 --> 00:22:27
linear algebra in a systematic way and

00:22:24 --> 00:22:29
now we don't really worry about this if

00:22:26 --> 00:22:31
you want to multiply two matrices that

00:22:28 --> 00:22:34
used to be you know a phd's worth of

00:22:30 --> 00:22:36
work to do that at scale and now we just

00:22:33 --> 00:22:38
you know we don't even actually import

00:22:35 --> 00:22:39
Blas there's so many wrappers of blasts

00:22:37 --> 00:22:41
that we don't even think about this

00:22:38 --> 00:22:43
anymore so this is another abstraction

00:22:40 --> 00:22:44
and also the idea that we should have

00:22:42 --> 00:22:46
all of the routines that we would

00:22:43 --> 00:22:47
possibly want to call in one place

00:22:45 --> 00:22:51
available that we don't have to write

00:22:46 --> 00:22:54
that was kind of invented I would say by

00:22:50 --> 00:22:55
MATLAB in the mid-80s and then really

00:22:53 --> 00:22:58
popularized in the open-source community

00:22:54 --> 00:23:00
by numpy and we should take them for

00:22:57 --> 00:23:02
granted we should totally forget about

00:22:59 --> 00:23:03
hem that because they make us faster

00:23:01 --> 00:23:06
they make us better for us to assume

00:23:02 --> 00:23:08
these things will work so machine

00:23:05 --> 00:23:10
learning has other abstractions besides

00:23:07 --> 00:23:13
these computational ones that we take

00:23:09 --> 00:23:16
for granted all gradient based

00:23:12 --> 00:23:18
optimization that includes neural nets

00:23:15 --> 00:23:21
as a subset relies on automatic

00:23:17 --> 00:23:24
differentiation to calculate those

00:23:20 --> 00:23:26
gradients right and and I like this

00:23:23 --> 00:23:28
definition from Barack Perlmutter

00:23:25 --> 00:23:30
automatic differentiation mechanically

00:23:27 --> 00:23:32
calculates derivatives as functions

00:23:29 --> 00:23:34
expressed as computer programs right so

00:23:31 --> 00:23:36
it doesn't derive things are right on a

00:23:33 --> 00:23:39
piece of paper with a pencil it derives

00:23:35 --> 00:23:41
computer programs app machine precision

00:23:38 --> 00:23:43
and with complexity guarantees those

00:23:40 --> 00:23:45
last two clauses differentiate it from

00:23:42 --> 00:23:46
finite differences where you take the

00:23:44 --> 00:23:48
input to a program you perturb it

00:23:45 --> 00:23:50
slightly and you measure the gradient

00:23:47 --> 00:23:53
hat way that's a very bad way to

00:23:49 --> 00:23:54
measure gradients it's it's numerically

00:23:52 --> 00:23:56
very unstable and it's not symbolic

00:23:53 --> 00:23:58
differentiation so it's not writing down

00:23:55 --> 00:23:59
the symbolic expression of a neural

00:23:57 --> 00:24:02
network putting it in Mathematica or

00:23:58 --> 00:24:04
maple and then it asking for the the

00:24:01 --> 00:24:06
derivative because your expression might

00:24:03 --> 00:24:08
go from this to this so you get

00:24:05 --> 00:24:10
expressions well when you do naive

00:24:07 --> 00:24:12
symbolic differentiation and you don't

00:24:09 --> 00:24:16
get that with automatic differentiation

00:24:11 --> 00:24:19
so automatic differentiation I would say

00:24:15 --> 00:24:22
is the abstraction for gradient based

00:24:18 --> 00:24:25
machine learning it's been rediscovered

00:24:21 --> 00:24:27
several times there's a review by

00:24:24 --> 00:24:29
Woodrow and there

00:24:26 --> 00:24:30
I think the first implementation where

00:24:28 --> 00:24:34
it actually operates on a computer

00:24:29 --> 00:24:37
program was by Bert's bill pending in

00:24:33 --> 00:24:42
1980 although it has been described back

00:24:36 --> 00:24:44
you know in 1964 by Wengert in in neural

00:24:41 --> 00:24:46
networks rumble heart is the one that I

00:24:43 --> 00:24:48
suppose popularized it as back

00:24:45 --> 00:24:51
propagation although back propagation is

00:24:47 --> 00:24:53
a special case of auto-da-fé this this I

00:24:50 --> 00:24:55
think is important in nuclear science

00:24:52 --> 00:24:58
and computational fluid dynamics and in

00:24:54 --> 00:25:00
weather modeling these people have been

00:24:57 --> 00:25:02
using auto-da-fé for years decades and

00:24:59 --> 00:25:03
their tools in many ways are much more

00:25:01 --> 00:25:05
sophisticated than we have in machine

00:25:02 --> 00:25:08
learning there's a lot of ideas that we

00:25:04 --> 00:25:10
have yet to import from people that

00:25:07 --> 00:25:12
model the weather that would really

00:25:09 --> 00:25:16
benefit our ability to train larger and

00:25:11 --> 00:25:18
larger models and I would clarify that

00:25:15 --> 00:25:20
our abstraction and machine learning is

00:25:17 --> 00:25:22
actually reverse mode automatic

00:25:19 --> 00:25:25
differentiation there's two different

00:25:21 --> 00:25:27
ypes two extremes I should say forward

00:25:24 --> 00:25:28
mode in Reverse mode you never hear

00:25:26 --> 00:25:29
about forward mode and you never hear

00:25:27 --> 00:25:31
about forward mode of machine learning

00:25:28 --> 00:25:33
because it's a very bad idea to try

00:25:30 --> 00:25:36
forward mode and machine learning and

00:25:32 --> 00:25:39
I'll show you why so here is a cat

00:25:35 --> 00:25:41
picture from the internet and my job at

00:25:38 --> 00:25:43
my job is to decide that that is in fact

00:25:40 --> 00:25:47
a cat picture this is actually something

00:25:42 --> 00:25:49
that we do do at Twitter what I am doing

00:25:46 --> 00:25:51
is passing this cat through successive

00:25:48 --> 00:25:52
layers of transformations than

00:25:50 --> 00:25:54
eventually producing a probability over

00:25:51 --> 00:25:56
classes I'm getting it wrong my

00:25:53 --> 00:25:58
classifier thinks it's a dog so I'd like

00:25:55 --> 00:26:03
to train my neural net to think it's a

00:25:57 --> 00:26:05
cat so I have a loss a gradient of my

00:26:02 --> 00:26:07
loss and I have it with respect to my

00:26:04 --> 00:26:09
parameters and this is my gradient that

00:26:06 --> 00:26:12
will let me update my parameters and it

00:26:08 --> 00:26:13
is composed of multiple pieces and using

00:26:11 --> 00:26:15
the chain rule I know that I can fold

00:26:12 --> 00:26:17
this together to actually compute the

00:26:14 --> 00:26:18
loss I want which is the gradient of the

00:26:16 --> 00:26:19
law through the respect to the

00:26:17 --> 00:26:22
parameters the issue is I can do it

00:26:18 --> 00:26:25
either left to right or right to left so

00:26:21 --> 00:26:30
going from left to right looks like this

00:26:24 --> 00:26:33
whoops that was very fast okay I'll do

00:26:29 --> 00:26:35
two big matrix matrix multiplies so this

00:26:32 --> 00:26:37
bad this is not good because we had

00:26:34 --> 00:26:39
these huge matrix matrix products that

00:26:36 --> 00:26:41
we're keeping around it's actually worse

00:26:38 --> 00:26:44
than this and I'll show you in another

00:26:40 --> 00:26:45
view of forward node so see I have a

00:26:43 --> 00:26:47
computer program so no longer a symbolic

00:26:44 --> 00:26:49
representation of a neural net this is

00:26:46 --> 00:26:52
just some computer program and let's say

00:26:48 --> 00:26:53
I'd like to optimize a write a is the

00:26:51 --> 00:26:55
single parameter of my neural net it's a

00:26:52 --> 00:26:58
very silly trivial example but I think

00:26:54 --> 00:27:01
it will help illustrate the point so I

00:26:57 --> 00:27:03
can execute this program and look at all

00:27:00 --> 00:27:04
of the arithmetic operations that occur

00:27:02 --> 00:27:08
and build what's called a trace

00:27:03 --> 00:27:11
so I'll define say a is 3 I'll define B

00:27:07 --> 00:27:13
is to C is 1 and then I'll start

00:27:10 --> 00:27:15
executing the code I'm actually going to

00:27:12 --> 00:27:18
look if B is greater than C and choose a

00:27:14 --> 00:27:21
branch to operate on but then ignore it

00:27:17 --> 00:27:22
in my trace so I've chosen one of those

00:27:20 --> 00:27:24
traces that one of those branches which

00:27:21 --> 00:27:28
is the first because B is greater than C

00:27:23 --> 00:27:30
and I have some output value D and I'll

00:27:27 --> 00:27:31
return the output value all right so

00:27:29 --> 00:27:34
this is a trace execution of my program

00:27:30 --> 00:27:37
given some inputs so to calculate in

00:27:33 --> 00:27:40
forward mode the derivative of my output

00:27:36 --> 00:27:42
D with respect to a I'll define a is 3

00:27:39 --> 00:27:44
and then initialize a gradient of a with

00:27:41 --> 00:27:46
respect to itself and the idea is I

00:27:43 --> 00:27:48
eventually want the derivative of D with

00:27:45 --> 00:27:51
respect to a and I'll build it up

00:27:47 --> 00:27:53
sequentially da da and then I'll do D be

00:27:50 --> 00:27:54
da and then Dissidia in ddd a so I'm

00:27:52 --> 00:27:57
oving from the left to the right

00:27:53 --> 00:27:59
building up my gradient I can't do much

00:27:56 --> 00:28:03
about the derivative of B with respect

00:27:58 --> 00:28:06
o a right now so I'll define C and

00:28:02 --> 00:28:09
remove C with respect to a and then I

00:28:05 --> 00:28:11
have my value D and then I can define my

00:28:08 --> 00:28:15
target value which is the gradient of D

00:28:10 --> 00:28:17
with respect to a so if I wanted the

00:28:14 --> 00:28:19
gradient of D with respect to B so if I

00:28:16 --> 00:28:21
had a two parameter neural network and I

00:28:18 --> 00:28:22
wanted optimize both at once I would

00:28:20 --> 00:28:26
have to execute this whole thing again

00:28:21 --> 00:28:29
and initialize this guy here as DB DB

00:28:25 --> 00:28:30
has one right so if you have a million

00:28:28 --> 00:28:32
parameters in your neural network or

00:28:29 --> 00:28:34
tens of millions if you have to do a

00:28:31 --> 00:28:36
million evaluations of forward mode or

00:28:33 --> 00:28:38
tens of millions of evaluations of fort

00:28:35 --> 00:28:40
mode so it is a very bad idea to try

00:28:37 --> 00:28:41
forward mode automatic differentiation

00:28:39 --> 00:28:44
neural network and that's why you

00:28:40 --> 00:28:49
probably never heard of it so now you

00:28:43 --> 00:28:51
can forget about it but the alternative

00:28:48 --> 00:28:53
is reverse mode and that's starting from

00:28:50 --> 00:28:55
the right to the left so now I've got

00:28:52 --> 00:28:57
his nice matrix that

00:28:54 --> 00:28:59
your products which are much smaller and

00:28:56 --> 00:29:01
the complexity is much better and

00:28:58 --> 00:29:03
there's an interesting difference when I

00:29:00 --> 00:29:05
actually go to do this in computer code

00:29:02 --> 00:29:10
and you'll see these words are closer

00:29:04 --> 00:29:12
together and that's because for reverse

00:29:09 --> 00:29:14
mode I actually have to evaluate the

00:29:11 --> 00:29:16
whole program before I can start

00:29:13 --> 00:29:18
deriving because I'm starting with the

00:29:15 --> 00:29:20
derivative of D with respect to D and

00:29:17 --> 00:29:22
then decrementing derivative of D with

00:29:19 --> 00:29:24
respect to C with respect to D with

00:29:21 --> 00:29:26
respect to a so I'm going the other way

00:29:23 --> 00:29:28
but I have to have all the information

00:29:25 --> 00:29:30
first before I start that so now I can

00:29:27 --> 00:29:34
initialize derivative of D with respect

00:29:29 --> 00:29:38
o D and I can walk backwards and return

00:29:33 --> 00:29:39
both the value and get gradient what's

00:29:37 --> 00:29:41
really nice about this is you'll notice

00:29:38 --> 00:29:43
here I actually have all the information

00:29:40 --> 00:29:45
I need to calculate the derivatives of D

00:29:42 --> 00:29:47
with respect to these other parameters

00:29:44 --> 00:29:50
o that's why we really like reverse

00:29:46 --> 00:29:52
mode auto-da-fé aka back propagation for

00:29:49 --> 00:29:54
neural nets is if you have a million of

00:29:51 --> 00:29:55
these guys you really want to be ready

00:29:53 --> 00:29:57
to compute them all at once right and

00:29:54 --> 00:29:59
oing these with matrices is very

00:29:56 --> 00:30:01
efficient thing to do on the computer so

00:29:58 --> 00:30:03
we've implemented this trace based

00:30:00 --> 00:30:05
automatic differentiation in a package

00:30:02 --> 00:30:08
called Auto grad and this is the

00:30:04 --> 00:30:10
ntirety of a neural network so this is

00:30:07 --> 00:30:13
how you would specify and train a neural

00:30:09 --> 00:30:15
network and autocrat so I'll initialize

00:30:12 --> 00:30:18
my parameters we'll just be some random

00:30:14 --> 00:30:21
numbers and then here is my neural

00:30:17 --> 00:30:23
network function I'm multiplying my you

00:30:20 --> 00:30:25
know image that I'm passing in by my

00:30:22 --> 00:30:27
white matrix and adding a bias

00:30:24 --> 00:30:30
non-linearity doing it again and then

00:30:26 --> 00:30:33
returning some probabilities and I have

00:30:29 --> 00:30:35
a loss which will take in an image and

00:30:32 --> 00:30:37
return a prediction so just using this

00:30:34 --> 00:30:40
function and then I'll just take the

00:30:36 --> 00:30:42
mean squared error or it's the sum

00:30:39 --> 00:30:44
squared error in order to get the

00:30:41 --> 00:30:46
gradients of this function the

00:30:43 --> 00:30:48
derivative of the loss with respect to

00:30:45 --> 00:30:50
these parameters all I have to do is

00:30:47 --> 00:30:54
import this autograph package and then

00:30:49 --> 00:30:56
call grad on this function this returns

00:30:53 --> 00:30:59
a new function that returns the

00:30:55 --> 00:31:01
gradients of my original function so

00:30:58 --> 00:31:04
it's a what's called a higher-order

00:31:00 --> 00:31:06
function it's inputs and its outputs are

00:31:03 --> 00:31:08
a function so whenever you see that

00:31:05 --> 00:31:11
Noblet that upside-down triangle

00:31:07 --> 00:31:15
grad triangle this is the coding

00:31:10 --> 00:31:17
equivalent of that and then to Train

00:31:14 --> 00:31:19
we'll just call our D loss function on

00:31:16 --> 00:31:21
our parameters our image and our label

00:31:18 --> 00:31:23
which I'm just pretending like you

00:31:20 --> 00:31:24
already have a system to get here when

00:31:22 --> 00:31:26
we have our gradients and then we're

00:31:23 --> 00:31:28
updating with stochastic gradient

00:31:25 --> 00:31:31
descent here all right so it's a very

00:31:27 --> 00:31:33
thin it's it's really just this this is

00:31:30 --> 00:31:36
the interface with which you talk with

00:31:32 --> 00:31:40
Auto grad so what's actually happening

00:31:35 --> 00:31:41
so here's my simple function as we

00:31:39 --> 00:31:42
valuate it

00:31:40 --> 00:31:44
we're actually keeping track of

00:31:41 --> 00:31:45
everything that you're doing in order to

00:31:43 --> 00:31:47
be able to reverse it so we're actually

00:31:44 --> 00:31:49
building that trace list that I

00:31:46 --> 00:31:52
described before and keeping track of it

00:31:48 --> 00:31:54
internally so we'll start online I guess

00:31:51 --> 00:31:56
that's five so we'll multiply some

00:31:53 --> 00:31:59
things we'll keep track of the fact you

00:31:55 --> 00:32:01
multiplied and the inputs will keep

00:31:58 --> 00:32:02
track of the addition and the inputs and

00:32:00 --> 00:32:04
also the output of addition will keep

00:32:01 --> 00:32:06
track of inputs outputs in the function

00:32:03 --> 00:32:09
every time and we'll kind of walk down

00:32:05 --> 00:32:11
this function and build your compute

00:32:08 --> 00:32:13
graph just in time so as you're running

00:32:10 --> 00:32:15
your code we're learning what you've

00:32:12 --> 00:32:17
done and the way we track that and I

00:32:14 --> 00:32:18
won't go into details we actually

00:32:16 --> 00:32:21
replace every function and torch with

00:32:17 --> 00:32:23
like a like a spy function so instead of

00:32:20 --> 00:32:25
just running torch dot some our spy

00:32:22 --> 00:32:27
function says oh I hear you're running

00:32:24 --> 00:32:29
torch dot some let me remember the

00:32:26 --> 00:32:31
parameters you gave me let me run some

00:32:28 --> 00:32:32
on those parameters remember the output

00:32:30 --> 00:32:34
and then return it like nothing happened

00:32:32 --> 00:32:39
but internally we're remembering all

00:32:33 --> 00:32:40
those things and the way we do this to

00:32:38 --> 00:32:42
actually compute the gradients is we're

00:32:39 --> 00:32:45
walking back this list like I described

00:32:41 --> 00:32:46
before and every time we get to a point

00:32:44 --> 00:32:48
where we need to calculate a partial

00:32:45 --> 00:32:50
derivative we look it up so we've

00:32:47 --> 00:32:54
written all of the partial derivatives

00:32:49 --> 00:32:55
for Torche functions and it really every

00:32:53 --> 00:32:58
neural network library is going to do

00:32:54 --> 00:32:59
this at some level of granularity so let

00:32:57 --> 00:33:01
me walk you through another couple

00:32:58 --> 00:33:04
xamples just to show you what it could

00:33:00 --> 00:33:06
o so this is kind of a pretty vanilla

00:33:03 --> 00:33:09
one we can you know add and multiply

00:33:05 --> 00:33:11
scalars and get the correct gradient

00:33:08 --> 00:33:12
his is where things get a little bit

00:33:10 --> 00:33:14
more interesting if there's an if

00:33:11 --> 00:33:16
statement all right so this control flow

00:33:13 --> 00:33:17
can be a little bit difficult or awkward

00:33:15 --> 00:33:21
and a lot of existing deep learning

00:33:16 --> 00:33:21
libraries because we just listen to what

00:33:20 --> 00:33:24
era

00:33:20 --> 00:33:26
medic functions get run we ignore

00:33:23 --> 00:33:28
control flow so we just go right through

00:33:25 --> 00:33:31
this stuff all right so we can get the

00:33:27 --> 00:33:34
correct gradient even with if statements

00:33:30 --> 00:33:36
we actually care about tensors when

00:33:33 --> 00:33:38
we're doing optimization or machine

00:33:35 --> 00:33:39
learning so everything I've shown you

00:33:37 --> 00:33:42
that works with scalars also works with

00:33:38 --> 00:33:43
tensors just as easily this is in the

00:33:41 --> 00:33:46
notebook that is on the github

00:33:42 --> 00:33:48
repository if you want to play with it

00:33:45 --> 00:33:50
his is where things get a little bit

00:33:47 --> 00:33:51
interesting for loops also work just

00:33:49 --> 00:33:53
fine and not just for loops that have a

00:33:50 --> 00:33:55
fixed length which is something that is

00:33:52 --> 00:33:57
perhaps easy to unroll but for loops

00:33:54 --> 00:34:00
whose duration can depend on data you

00:33:56 --> 00:34:02
just computed right or while loops whose

00:33:59 --> 00:34:04
stopping condition can depend on a

00:34:01 --> 00:34:06
computation that occurs in the while

00:34:03 --> 00:34:07
loop we don't really care we're building

00:34:05 --> 00:34:09
your graph dynamically and when it's

00:34:06 --> 00:34:11
done and when you return some value will

00:34:08 --> 00:34:14
calculate the derivative derivatives of

00:34:10 --> 00:34:16
the graph that we have you can turn any

00:34:13 --> 00:34:18
for loop into a recursive function this

00:34:15 --> 00:34:20
kind of wacky I mean I don't know how

00:34:17 --> 00:34:22
you would actually use this in practice

00:34:19 --> 00:34:23
but you can cook up a lot of crazy

00:34:21 --> 00:34:25
things you might try with autograph and

00:34:22 --> 00:34:28
they just work so here we have a

00:34:24 --> 00:34:29
function f if B is at some stopping

00:34:27 --> 00:34:32
condition will return a otherwise we'll

00:34:28 --> 00:34:34
call F and we're gonna differentiate

00:34:31 --> 00:34:38
this right so we're gonna differentiate

00:34:33 --> 00:34:43
a fully recursive function and it works

00:34:37 --> 00:34:45
just fine another aspect which is coming

00:34:42 --> 00:34:46
up more and more as papers are coming

00:34:44 --> 00:34:48
out that basically disrespect the

00:34:45 --> 00:34:50
sanctity of the partial you know of the

00:34:47 --> 00:34:52
derivative of the gradient and people

00:34:49 --> 00:34:55
are computing synthetic gradients

00:34:51 --> 00:34:57
they're you know adding they're clipping

00:34:54 --> 00:34:59
two gradients or people are messing with

00:34:56 --> 00:35:01
kind of the the internals of back

00:34:58 --> 00:35:03
propagation or of auto-da-fé it's

00:35:00 --> 00:35:06
actually pretty easy to start to engage

00:35:02 --> 00:35:10
with in Auto grad so say I'm going to

00:35:05 --> 00:35:12
sum the floor of a to the third power so

00:35:09 --> 00:35:14
the floor operation is piecewise

00:35:11 --> 00:35:15
constant so the derivative is zero

00:35:13 --> 00:35:18
almost everywhere except for where it's

00:35:14 --> 00:35:20
undefined why would I want to do this

00:35:17 --> 00:35:22
for instance if you wanted to build a

00:35:19 --> 00:35:25
differentiable JPEG encoder or

00:35:21 --> 00:35:27
differentiable MPEG encoder in

00:35:24 --> 00:35:29
compression algorithms like that there's

00:35:26 --> 00:35:32
often a quantization step that will

00:35:28 --> 00:35:33
floor around or truncate numbers and if

00:35:31 --> 00:35:34
you wanted to differentiate through that

00:35:32 --> 00:35:36
o build like a neural Jake

00:35:34 --> 00:35:37
algorithm or something you need to pass

00:35:35 --> 00:35:40
gradients through something that

00:35:36 --> 00:35:41
ordinarily does not and so if we look at

00:35:39 --> 00:35:44
what the gradient is at zero everywhere

00:35:40 --> 00:35:47
I won't go into the details but you can

00:35:43 --> 00:35:49
ask Auto grad to use your own gradient

00:35:46 --> 00:35:50
for anything so if you have a new module

00:35:48 --> 00:35:52
that you want to define and either

00:35:49 --> 00:35:54
you've written high-performance code for

00:35:51 --> 00:35:56
it and you want to use it or you want to

00:35:53 --> 00:35:58
redefine or overwrite you know the

00:35:55 --> 00:36:00
gradients that we have there's a pretty

00:35:57 --> 00:36:02
easy mechanism for doing that and then

00:35:59 --> 00:36:04
when you call your special dot floor you

00:36:01 --> 00:36:05
can propagate gradients through it right

00:36:03 --> 00:36:07
and here I was just saying basically

00:36:04 --> 00:36:10
ignore the gradient of floor so this is

00:36:06 --> 00:36:12
a toy example but there are real places

00:36:09 --> 00:36:14
where you have a non differentiable

00:36:11 --> 00:36:16
bottleneck inside of your computer off

00:36:13 --> 00:36:18
and you want to either hop over it or

00:36:15 --> 00:36:20
find some approximation and auto grad

00:36:17 --> 00:36:24
has a mechanism for very easily plugging

00:36:19 --> 00:36:26
those types of things in so that's a bit

00:36:23 --> 00:36:29
of what auto grad is and what it can do

00:36:25 --> 00:36:31
and I want to turn our attention to how

00:36:28 --> 00:36:33
autograph relates to other deep learning

00:36:30 --> 00:36:35
libraries and maybe how they're common

00:36:32 --> 00:36:41
and how they're similar and how they're

00:36:34 --> 00:36:43
different so one big difference that I

00:36:40 --> 00:36:46
found between different deep learning

00:36:42 --> 00:36:48
libraries is the level of granularity at

00:36:45 --> 00:36:50
which you are allowed to specify your

00:36:47 --> 00:36:53
neural network so there's a lot of

00:36:49 --> 00:36:54
libraries where you say you get a

00:36:52 --> 00:36:56
confident or you get a feed-forward

00:36:53 --> 00:36:59
neural network and that's it right so

00:36:55 --> 00:37:01
the menu is two items long and that's

00:36:58 --> 00:37:02
fine I think Andre I really hit it on

00:37:00 --> 00:37:04
the head where if you want to solve a

00:37:01 --> 00:37:06
problem don't be a hero use somebody

00:37:03 --> 00:37:08
else's network so maybe this is vgg that

00:37:05 --> 00:37:10
you've downloaded from from the model

00:37:07 --> 00:37:11
Zoo or something like that right so this

00:37:09 --> 00:37:14
the don't be a hero regime on the

00:37:10 --> 00:37:17
left in the middle there's a lot of

00:37:13 --> 00:37:19
really convenient neural net specific

00:37:16 --> 00:37:22
libraries like torch and n and Karras

00:37:18 --> 00:37:24
and lasagna and you get to put together

00:37:21 --> 00:37:26
big layers and you don't really get to

00:37:23 --> 00:37:27
see what's inside those layers but you

00:37:25 --> 00:37:30
get to click together linear layers or

00:37:26 --> 00:37:32
convolutions and usually that's kind of

00:37:29 --> 00:37:34
what you want to do and on the far end

00:37:31 --> 00:37:37
of the spectrum the things you can click

00:37:33 --> 00:37:39
together are the function the the

00:37:36 --> 00:37:41
numeric functions in your kind of host

00:37:38 --> 00:37:44
scientific computing library right like

00:37:40 --> 00:37:46
add multiply subtract and these are

00:37:43 --> 00:37:48
features of projects like Otto grad and

00:37:45 --> 00:37:50
Theano and tensor flow

00:37:47 --> 00:37:52
and the reason why these boundaries are

00:37:49 --> 00:37:55
made is because the developers have

00:37:51 --> 00:37:57
chosen to give you partial derivatives

00:37:54 --> 00:37:59
at these interfaces all right so this is

00:37:56 --> 00:38:01
how they've defined their api's and

00:37:58 --> 00:38:03
these are the interfaces with you know

00:38:00 --> 00:38:05
across which you as a user cannot pass

00:38:02 --> 00:38:10
if you want to new one of these modules

00:38:04 --> 00:38:11
for the type on the left or the type in

00:38:09 --> 00:38:14
the middle you have to go in and build a

00:38:10 --> 00:38:17
whole new model and actually implement

00:38:13 --> 00:38:20
he partial derivatives but with the

00:38:16 --> 00:38:22
types of libraries on the right you can

00:38:19 --> 00:38:24
build your own models by modules by

00:38:21 --> 00:38:25
composing primitive operations all right

00:38:23 --> 00:38:29
so that's one difference that you can

00:38:24 --> 00:38:33
find in practice how these things are

00:38:28 --> 00:38:34
implemented under the hood usually means

00:38:32 --> 00:38:36
this is the totally shrink-wrap stuff

00:38:33 --> 00:38:38
and maybe they implemented this whole

00:38:35 --> 00:38:40
thing by hand usually these guys in the

00:38:37 --> 00:38:42
middle are rappers they're rapping some

00:38:39 --> 00:38:44
other library and the guys on the right

00:38:41 --> 00:38:47
are usually actually implementing

00:38:43 --> 00:38:49
automatic differentiation so Auto grad

00:38:46 --> 00:38:51
in theano and tensorflow all implement

00:38:48 --> 00:38:52
auto death and the guys in the middle

00:38:50 --> 00:38:57
are taking advantage of that to make

00:38:51 --> 00:38:59
more convenient wrappers so another

00:38:56 --> 00:39:01
aspect that's different is how these

00:38:58 --> 00:39:03
graphs are built so I'll remind you in

00:39:00 --> 00:39:05
Auto grad we build these things just in

00:39:02 --> 00:39:08
time by listening to what you're doing

00:39:04 --> 00:39:10
and recording it but that's not how all

00:39:07 --> 00:39:12
neural network libraries are built and

00:39:09 --> 00:39:14
this is an axis along which I think that

00:39:11 --> 00:39:17
hey are differentiated meaningfully so

00:39:13 --> 00:39:18
there's a lot of libraries that build

00:39:16 --> 00:39:20
these graphs explicitly where you say

00:39:17 --> 00:39:21
I'm going to click this Lego block into

00:39:19 --> 00:39:24
this Lego block where I'm going to give

00:39:20 --> 00:39:27
you this yamo specification file the

00:39:23 --> 00:39:29
graph is totally static and you really

00:39:26 --> 00:39:31
have no opportunity for compiler

00:39:28 --> 00:39:33
optimizations there and then there are

00:39:30 --> 00:39:36
the just-in-time library so Auto grad

00:39:32 --> 00:39:38
and chain ER is another one where you

00:39:35 --> 00:39:39
get any graph the graph can be anything

00:39:37 --> 00:39:41
it can change from sample to sample it

00:39:38 --> 00:39:43
can be you know to the length of the

00:39:40 --> 00:39:45
graph can be determined by the compute

00:39:42 --> 00:39:46
that occurs in the graph you have very

00:39:44 --> 00:39:48
little opportunity for compiler

00:39:45 --> 00:39:50
optimizations there so speed can be an

00:39:47 --> 00:39:52
issue sometimes and in the middle

00:39:49 --> 00:39:53
there's a head of time libraries like

00:39:51 --> 00:39:55
tensorflow and Theano where you

00:39:52 --> 00:39:57
construct your graph using a

00:39:54 --> 00:39:58
domain-specific language you hand it off

00:39:56 --> 00:40:01
to their runtime and then they can do

00:39:57 --> 00:40:02
crazy stuff to make it faster the

00:40:00 --> 00:40:04
problem with that is

00:40:01 --> 00:40:05
it can be awkward to work with I guess

00:40:03 --> 00:40:07
that got cut off it can be awkward to

00:40:04 --> 00:40:09
work with control flow and I think

00:40:06 --> 00:40:11
there's a reason why it can be awkward

00:40:08 --> 00:40:14
to work with control flow and it's

00:40:10 --> 00:40:15
because of the types of graphs that

00:40:13 --> 00:40:17
hese libraries are actually

00:40:14 --> 00:40:19
manipulating so we say compute graph a

00:40:16 --> 00:40:22
lot we say data flow graph a lot data

00:40:18 --> 00:40:26
flow graph has a pretty restricted

00:40:21 --> 00:40:28
meaning and it means that the nodes in

00:40:25 --> 00:40:30
your graph do computation and the edges

00:40:27 --> 00:40:32
are data and there's no room for control

00:40:29 --> 00:40:35
flow in a graph that is a data flow

00:40:31 --> 00:40:37
graph right so static data flow is the

00:40:34 --> 00:40:39
type of graph that N and n Cafe use

00:40:36 --> 00:40:41
because all the ops are the nodes and

00:40:38 --> 00:40:45
the edges are just the data and the

00:40:40 --> 00:40:46
graph can't change get data flow just in

00:40:44 --> 00:40:47
time compiled data flow like Auto grad

00:40:45 --> 00:40:49
and chain ER has the same

00:40:46 --> 00:40:51
characteristics but the graph can change

00:40:48 --> 00:40:52
from iteration to iteration because we

00:40:50 --> 00:40:55
wait until you're done computing the

00:40:51 --> 00:40:56
forward pass to build the graph in the

00:40:54 --> 00:40:59
middle there's kind of a hybrid and I

00:40:55 --> 00:41:02
don't know what to call that graph type

00:40:58 --> 00:41:03
the ops are nodes the edges are data but

00:41:01 --> 00:41:05
hen there's special information that

00:41:02 --> 00:41:08
he runtime gets in order to expand

00:41:04 --> 00:41:10
control flow or for loops so scan is in

00:41:07 --> 00:41:12
Theano is an instance of this where the

00:41:09 --> 00:41:14
Theano runtime has special information

00:41:11 --> 00:41:17
that allows it to make scan work but

00:41:13 --> 00:41:19
it's kind of it's it's it's conspiring

00:41:16 --> 00:41:21
with the graph data type to do that

00:41:18 --> 00:41:24
here's actually another graph type that

00:41:20 --> 00:41:26
naturally expresses control flow and

00:41:23 --> 00:41:28
ata flow together that I haven't seen

00:41:25 --> 00:41:30
implemented in a deep learning library

00:41:27 --> 00:41:34
it's called see of nodes from cliff

00:41:29 --> 00:41:35
clicks thesis in the mid-90s it seems

00:41:33 --> 00:41:37
like a really natural thing to try and

00:41:34 --> 00:41:38
man maybe that's something that comes up

00:41:36 --> 00:41:40
in the future

00:41:37 --> 00:41:41
but that's kind of a big question marks

00:41:39 --> 00:41:47
maybe one of you will we'll try that out

00:41:40 --> 00:41:50
and see how well it works so in practice

00:41:46 --> 00:41:52
this level of granularity can sometimes

00:41:49 --> 00:41:55
low us down having to work with

00:41:51 --> 00:41:57
addition and multiplication can be nice

00:41:54 --> 00:41:59
if you want to try crazy stuff but if

00:41:56 --> 00:42:00
you know you want to make a confident

00:41:58 --> 00:42:03
why don't you just rush all the way over

00:41:59 --> 00:42:05
to the left if you want to take you know

00:42:02 --> 00:42:07
inception and add another layer where

00:42:04 --> 00:42:10
you want to use the type in the middle

00:42:06 --> 00:42:12
an autograph allows you to do that so

00:42:09 --> 00:42:13
I'll just kind of walk through writing a

00:42:11 --> 00:42:15
neural net three ways very quickly and

00:42:12 --> 00:42:18
then and then close

00:42:14 --> 00:42:19
questions shortly thereafter so using

00:42:17 --> 00:42:21
the fully granular approach there's a

00:42:18 --> 00:42:23
lot of text on the screen but the top

00:42:20 --> 00:42:25
half is basically let's instantiate our

00:42:22 --> 00:42:27
parameters the way that we want to and

00:42:24 --> 00:42:29
then here just like I've showed you in

00:42:26 --> 00:42:30
previous slides let's do a multiply and

00:42:28 --> 00:42:32
let's do an addition and put it through

00:42:29 --> 00:42:33
non-linearity we're being very explicit

00:42:31 --> 00:42:34
right so we're breaking all the

00:42:32 --> 00:42:37
abstraction boundaries and we're just

00:42:33 --> 00:42:39
using primitive operations we can use

00:42:36 --> 00:42:41
the layer based approach so in Auto grad

00:42:38 --> 00:42:44
we have a facility to turn all of the N

00:42:40 --> 00:42:46
and modules of which there are a lot may

00:42:43 --> 00:42:48
be an exhaustive list for what you'd

00:42:45 --> 00:42:50
want to use for standard deep learning

00:42:47 --> 00:42:51
applications you can turn them into

00:42:49 --> 00:42:54
functions and then just use them so

00:42:50 --> 00:42:56
linear one on the linear parameters and

00:42:53 --> 00:42:58
your input and some activation you can

00:42:55 --> 00:43:00
go through your neural network this way

00:42:57 --> 00:43:03
so you can use a layer based approach if

00:42:59 --> 00:43:04
you want and if you just want your

00:43:02 --> 00:43:07
network just a feed-forward neural

00:43:03 --> 00:43:09
network we've got a couple of these kind

00:43:06 --> 00:43:10
of standard models just ready to go so

00:43:08 --> 00:43:13
you can just say give me a neural

00:43:09 --> 00:43:16
network give me log softmax and a loss

00:43:12 --> 00:43:20
and let me blow these guys together so

00:43:15 --> 00:43:22
you can do it any of those three ways

00:43:19 --> 00:43:26
Auto grad at Twitter has had a pretty

00:43:21 --> 00:43:28
cool impact we use NN for a lot of stuff

00:43:25 --> 00:43:29
when we use Auto grat as well but being

00:43:27 --> 00:43:31
able to reach for autograph to try

00:43:28 --> 00:43:32
something totally crazy and just knowing

00:43:30 --> 00:43:34
that you're going to get the right

00:43:31 --> 00:43:36
gradients has really accelerated the

00:43:33 --> 00:43:38
pace of high risk potentially high

00:43:35 --> 00:43:40
payoff attempts that we make so one

00:43:37 --> 00:43:42
crazy thing you might want to try is

00:43:39 --> 00:43:44
experiment with loss functions so

00:43:41 --> 00:43:47
instead of I have a hundred image

00:43:43 --> 00:43:49
classes and I want to have my

00:43:46 --> 00:43:50
convolutional neural network be good at

00:43:48 --> 00:43:52
classifying this hundred image classes

00:43:49 --> 00:43:55
maybe you have a taxonomy of classes

00:43:51 --> 00:43:57
maybe you have a vehicle and then a bus

00:43:54 --> 00:43:59
a car and a motorcycle and if you guess

00:43:56 --> 00:44:00
any one of those you kind of want

00:43:58 --> 00:44:02
partial credit for vehicle or if you

00:43:59 --> 00:44:04
guess motorcycle you want partial credit

00:44:01 --> 00:44:06
for for car so building that kind of a

00:44:03 --> 00:44:07
tree loss is actually really

00:44:05 --> 00:44:10
straightforward an auto grad and you can

00:44:06 --> 00:44:11
do that in in just one sitting but might

00:44:09 --> 00:44:13
be more complicated to do that in other

00:44:10 --> 00:44:15
libraries we have to crack open the

00:44:12 --> 00:44:16
abstraction barrier write your own

00:44:14 --> 00:44:18
partial derivatives glue it back

00:44:15 --> 00:44:22
together and then use that module that

00:44:17 --> 00:44:24
you've built we've trained models that

00:44:21 --> 00:44:26
are in production in auto grad so this

00:44:23 --> 00:44:28
something that's a battle-tested to a

00:44:25 --> 00:44:31
sense and is running on

00:44:27 --> 00:44:32
large amount of media Twitter in a sense

00:44:30 --> 00:44:34
Auto grad doesn't actually matter when

00:44:31 --> 00:44:35
you're running in production because you

00:44:33 --> 00:44:38
just you have your function definition

00:44:34 --> 00:44:40
for your prediction of your neural

00:44:37 --> 00:44:41
network and then the gradient part just

00:44:39 --> 00:44:43
goes away or so all the fancy stuff

00:44:40 --> 00:44:45
where we play Storch with our secret you

00:44:42 --> 00:44:46
know listener functions all that just

00:44:44 --> 00:44:48
goes away and you just have some

00:44:45 --> 00:44:51
numerical code so there's actually no

00:44:47 --> 00:44:52
speed penalty a test time at all and we

00:44:50 --> 00:44:53
have an optimized mode which does a

00:44:51 --> 00:44:57
little bit of compiler stuff still work

00:44:52 --> 00:45:00
in progress but for the average model

00:44:56 --> 00:45:03
it's as fast sometimes faster than n N

00:44:59 --> 00:45:04
and for really complicated stuff if you

00:45:02 --> 00:45:07
wrote that by hand you'd probably be

00:45:03 --> 00:45:09
faster but the time to first model fit

00:45:06 --> 00:45:10
using Auto grad is dramatically reduced

00:45:08 --> 00:45:14
because you don't have to worry about

00:45:09 --> 00:45:17
correctness so this is a big wall of

00:45:13 --> 00:45:20
text but it's meant to put in your head

00:45:16 --> 00:45:22
some ideas of things from automatic

00:45:19 --> 00:45:24
differentiation from that world that we

00:45:21 --> 00:45:27
don't have yet that we really want right

00:45:23 --> 00:45:29
o be able to train models faster and

00:45:26 --> 00:45:30
better so the first is checkpointing

00:45:28 --> 00:45:32
this does not check pointing where you

00:45:29 --> 00:45:34
save your model every 10 iterations this

00:45:31 --> 00:45:38
check pointing where on your forward

00:45:33 --> 00:45:39
pass you might you in normal reverse

00:45:37 --> 00:45:41
mode automatic differentiation you have

00:45:38 --> 00:45:42
to remember every single piece of

00:45:40 --> 00:45:44
computation you do because you might

00:45:41 --> 00:45:46
need it to calculate the derivatives and

00:45:43 --> 00:45:48
checkpointing you just delete them you

00:45:45 --> 00:45:50
let them go away because you think that

00:45:47 --> 00:45:52
some of those might actually be easier

00:45:49 --> 00:45:53
to recompute than to store alright so

00:45:51 --> 00:45:55
for point wise nonlinearities for

00:45:52 --> 00:45:57
instance it might be easier once you've

00:45:54 --> 00:45:59
loaded your data just to recompute the

00:45:56 --> 00:46:01
reloj as opposed to saving the result of

00:45:58 --> 00:46:04
reloj and loading that back in again

00:46:00 --> 00:46:07
mixing forward and reverse mode is

00:46:03 --> 00:46:08
omething that you can imagine being

00:46:06 --> 00:46:09
important for kind of complicated

00:46:07 --> 00:46:11
architectures although I don't really

00:46:08 --> 00:46:13
know how much impact that would have so

00:46:10 --> 00:46:14
in the chain rule you can either go from

00:46:12 --> 00:46:15
left to right or you could start in the

00:46:13 --> 00:46:18
middle and go out you can do all kinds

00:46:14 --> 00:46:21
of crazy stuff if you want and we really

00:46:17 --> 00:46:24
just do reverse mode for diamond shape

00:46:20 --> 00:46:26
graphs where your computation explodes

00:46:24 --> 00:46:28
out and it comes back in that might be

00:46:25 --> 00:46:29
useful to start with forward mode and

00:46:27 --> 00:46:31
then finish with the reverse mode or an

00:46:28 --> 00:46:34
hourglass you might want to start with

00:46:30 --> 00:46:38
reverse mode and end with forward mode

00:46:33 --> 00:46:40
stencils are a generalization of

00:46:37 --> 00:46:42
convolutions that people use a lot in

00:46:39 --> 00:46:42
computer graphics automatically

00:46:41 --> 00:46:44
calculate

00:46:41 --> 00:46:47
really efficient derivatives of image

00:46:43 --> 00:46:50
processing just general image processing

00:46:46 --> 00:46:52
algorithms is under active investigation

00:46:49 --> 00:46:53
in the graphics world and in the

00:46:51 --> 00:46:56
computer vision world so these are two

00:46:52 --> 00:46:58
references that are kind of neat papers

00:46:55 --> 00:47:00
ource to source transformations is

00:46:57 --> 00:47:02
omething that hasn't really made it it

00:46:59 --> 00:47:04
basically has kind of been dormant for

00:47:01 --> 00:47:06
about ten or fifteen years so the gold

00:47:03 --> 00:47:09
standard used to be you take a piece of

00:47:05 --> 00:47:11
code as text and you output another

00:47:08 --> 00:47:12
piece of code as text what we're doing

00:47:10 --> 00:47:14
now in deep learning is we're always

00:47:11 --> 00:47:17
building runtimes we're always building

00:47:13 --> 00:47:19
some domain-specific layer that depends

00:47:16 --> 00:47:21
on you actually running code it used to

00:47:18 --> 00:47:23
be that you just read that text and kind

00:47:20 --> 00:47:26
of like a compiler spit out the gradient

00:47:22 --> 00:47:28
his this was the gold standard it might

00:47:25 --> 00:47:30
not be now but I think it's worth three

00:47:27 --> 00:47:33
investigating and then higher order

00:47:29 --> 00:47:35
gradients so Hessian vector products and

00:47:32 --> 00:47:37
kind of Hessian based optimization maybe

00:47:34 --> 00:47:39
doesn't always have full payoff I

00:47:36 --> 00:47:43
actually don't recall hearing anything

00:47:38 --> 00:47:45
about this at this school so far because

00:47:42 --> 00:47:47
it's very expensive and difficult to do

00:47:44 --> 00:47:49
expensive computationally fashion is

00:47:46 --> 00:47:50
just if you take the grad of F it gives

00:47:48 --> 00:47:53
you the gradients if you want the second

00:47:49 --> 00:47:55
erivative right so you take grad a grad

00:47:52 --> 00:47:57
of F so there's efficient ways to do

00:47:54 --> 00:47:59
this it's still kind of an open problem

00:47:56 --> 00:48:00
but there are libraries out there the

00:47:58 --> 00:48:03
Python version of autograph dust as well

00:47:59 --> 00:48:06
diff sharp and hype both also do this as

00:48:02 --> 00:48:08
well so to kind of close out you should

00:48:05 --> 00:48:10
just try it out it's really easy to get

00:48:07 --> 00:48:14
it if you have anaconda if you use

00:48:09 --> 00:48:16
Python we've made it so that Lua is

00:48:13 --> 00:48:18
fully installable with anaconda so if

00:48:15 --> 00:48:21
you're already using it it's very very

00:48:17 --> 00:48:23
easy to get all of the tools that I've

00:48:20 --> 00:48:26
showed you today and that's kind of the

00:48:22 --> 00:48:28
single line to interface with it and if

00:48:25 --> 00:48:31
you have any questions you can find me

00:48:27 --> 00:48:32
on Twitter or email or github but I'm

00:48:30 --> 00:48:35
happy to to answer any questions that

00:48:31 --> 00:48:35
you have

00:48:54 --> 00:48:58
oh yeah

00:48:59 --> 00:49:05
I have no idea

00:49:05 --> 00:49:12
thanks thanks for the great talk

00:49:07 --> 00:49:14
oh yeah I was wondering what's the state

00:49:11 --> 00:49:18
of the data visualization facilities in

00:49:13 --> 00:49:20
Lua compared to say Python if I'm Frank

00:49:17 --> 00:49:23
it's it's not as good python has been at

00:49:19 --> 00:49:25
his for you know five ten years really

00:49:22 --> 00:49:27
actively building matplotlib and you

00:49:24 --> 00:49:29
know Seabourn and all these other

00:49:26 --> 00:49:31
libraries and in Lua were importing

00:49:28 --> 00:49:33
other people's work so book ajs is

00:49:30 --> 00:49:35
really the best that i've seen so far

00:49:32 --> 00:49:37
and that's something you can use in a

00:49:34 --> 00:49:41
notebook so you have the full suite of

00:49:36 --> 00:49:41
that of that particular library yeah

00:49:47 --> 00:49:54
ey thanks for the luck is it possible

00:49:50 --> 00:49:58
to convert a model train with torch in

00:49:53 --> 00:50:01
to a C model that's deployable in you

00:49:57 --> 00:50:03
know production we just run torch in

00:50:00 --> 00:50:06
production we use a little model but you

00:50:02 --> 00:50:09
want to run it and see so the whole

00:50:05 --> 00:50:12
layer of torch that's actually doing the

00:50:08 --> 00:50:15
work is in C and calling torch from C I

00:50:11 --> 00:50:16
don't have a specific website I can

00:50:14 --> 00:50:19
point you to but you can very easily

00:50:15 --> 00:50:21
call and execute a Lua script from C

00:50:18 --> 00:50:33
it's like three or four lines of code in

00:50:20 --> 00:50:35
C thank you the follow-up the question

00:50:32 --> 00:50:38
about see just now just like if I'm

00:50:34 --> 00:50:40
gonna compile I mean I want to have Tosh

00:50:37 --> 00:50:42
into my sequence passcode what kind of

00:50:39 --> 00:50:45
overhead do I see I see

00:50:41 --> 00:50:47
just animations yourself like I have a

00:50:44 --> 00:50:50
10,000 line - what just-in-time compiler

00:50:46 --> 00:50:52
I need to put that in there right oh I

00:50:50 --> 00:50:54
can I avoid that because for example I

00:50:51 --> 00:50:57
think about if I'm going to put the one

00:50:53 --> 00:51:00
in an embedded system they have a mouth

00:50:56 --> 00:51:02
resource of anything during inference

00:50:59 --> 00:51:04
time so I'm sorry during yet during

00:51:01 --> 00:51:06
inference time there's there's no

00:51:03 --> 00:51:08
appreciable overhead if I'm

00:51:05 --> 00:51:11
understanding your question right so you

00:51:07 --> 00:51:13
are importing a Louis so in your C

00:51:10 --> 00:51:15
code you're going to basically say Lua

00:51:12 --> 00:51:17
please run this Lua script and that's

00:51:14 --> 00:51:19
going to call out into other C code

00:51:16 --> 00:51:22
so all this overhead I talked about with

00:51:18 --> 00:51:24
autograph that's training time that

00:51:21 --> 00:51:26
doesn't exist at test time at all so so

00:51:23 --> 00:51:29
during test time but the thing is I

00:51:25 --> 00:51:31
still need to have Lua compile into my C

00:51:28 --> 00:51:33
code right yeah so this is something

00:51:30 --> 00:51:35
people have been doing for like 15 20

00:51:32 --> 00:51:38
years it's pretty mature so Lua is in

00:51:34 --> 00:51:40
like microwaves for instance people have

00:51:37 --> 00:51:44
done very embedded applications of Lua

00:51:39 --> 00:51:46
yeah I think the binary for Lu is like I

00:51:43 --> 00:51:48
don't want to it's like a round it's a

00:51:45 --> 00:51:50
kilobytes it's very very small there's

00:51:47 --> 00:51:52
10,000 lines of code so when it compiles

00:51:49 --> 00:51:52
down on small

00:51:54 --> 00:52:02
so there's a question from the twitters

00:51:58 --> 00:52:04
ays i'm using a combination of Karros

00:52:01 --> 00:52:08
and tensor flow why should I use torture

00:52:03 --> 00:52:10
auto grad if you're happy then you know

00:52:07 --> 00:52:12
that's great

00:52:09 --> 00:52:15
I guess so people tend to reach for

00:52:11 --> 00:52:20
torch when they would like to be able to

00:52:14 --> 00:52:22
reason very easily about performance the

00:52:19 --> 00:52:24
kind of the more of a compiler

00:52:21 --> 00:52:26
infrastructure that gets added to a deep

00:52:23 --> 00:52:29
learning environment the harder it can

00:52:25 --> 00:52:30
be for the end user right away from the

00:52:28 --> 00:52:32
people that originally made the library

00:52:29 --> 00:52:34
can be harder for the end user to reason

00:52:31 --> 00:52:36
why is this slow why is this not working

00:52:33 --> 00:52:38
you might eventually see some github

00:52:35 --> 00:52:40
issue later my network is slow in these

00:52:37 --> 00:52:41
conditions and then it gets closed a

00:52:39 --> 00:52:43
year after you had to have shipped your

00:52:40 --> 00:52:44
project right I mean these things can

00:52:42 --> 00:52:46
happen it's not the fault of anybody

00:52:43 --> 00:52:48
it's just that torch was designed to

00:52:45 --> 00:52:51
basically be very thin a thin layer over

00:52:47 --> 00:52:52
C code so if that's something that you

00:52:50 --> 00:52:54
care about torch is a really good thing

00:52:51 --> 00:52:56
to work for if careless and tensorflow

00:52:53 --> 00:53:03
is working great for you then keep deep

00:52:55 --> 00:53:06
learning you know that's awesome so I'm

00:53:02 --> 00:53:06
trying to see

00:53:09 --> 00:53:13
it's hard to filter

00:53:13 --> 00:53:21
where will the slides be posted it's not

00:53:16 --> 00:53:23
a deep learning question but they will

00:53:20 --> 00:53:27
be posted that's the answer to that

00:53:22 --> 00:53:31
question I have a question now how do I

00:53:26 --> 00:53:33
access through so normally all the web

00:53:30 --> 00:53:35
services production generally are

00:53:32 --> 00:53:38
another you know fast based application

00:53:34 --> 00:53:40
in Python or you know Java based Web

00:53:37 --> 00:53:43
Services right or maybe in you know in

00:53:39 --> 00:53:45
the cellphone through Android which is

00:53:42 --> 00:53:47
also Java right so how do you call these

00:53:44 --> 00:53:49
models which were you know trained in

00:53:46 --> 00:53:50
torch how would you actually access

00:53:48 --> 00:53:53
those there's a couple different ways

00:53:49 --> 00:53:56
you can do that if you're using a

00:53:52 --> 00:53:58
feed-forward neural network writing the

00:53:55 --> 00:54:00
Java code to do the matrix multiplies

00:53:57 --> 00:54:02
can be pretty straightforward and we've

00:53:59 --> 00:54:04
actually done that before or it's just

00:54:01 --> 00:54:06
simpler tor just write the deep learning

00:54:03 --> 00:54:07
code load in the weights we'll serialize

00:54:05 --> 00:54:09
it however you know it needs to be

00:54:06 --> 00:54:11
loaded that's one approach is kind of

00:54:08 --> 00:54:13
you know hacking short term at Twitter

00:54:10 --> 00:54:15
we've engineered a system where we

00:54:12 --> 00:54:18
actually have Lua virtual machines

00:54:14 --> 00:54:22
running inside of Java and we talked

00:54:17 --> 00:54:24
over the j'ni so we have like a more

00:54:21 --> 00:54:26
permanent solution for that but if

00:54:23 --> 00:54:28
you're using standard model

00:54:25 --> 00:54:30
architectures you might try to serialize

00:54:27 --> 00:54:32
your weights and then use the native

00:54:29 --> 00:54:34
deep learning library that exists to

00:54:31 --> 00:54:36
load up those weights and then run for

00:54:33 --> 00:54:38
it and that with some debugging I think

00:54:35 --> 00:54:40
that's perfectly fair approach if you

00:54:37 --> 00:54:42
have this split between testing and kind

00:54:39 --> 00:54:44
of deployment where you're constrained

00:54:41 --> 00:54:47
by language or environment that's

00:54:43 --> 00:54:49
generally the thing that you know I mean

00:54:46 --> 00:54:52
you do basically just you know C realize

00:54:48 --> 00:54:54
your model and then try to read it what

00:54:51 --> 00:54:56
about the latency actually so related to

00:54:53 --> 00:54:58
you know this so when you see realize

00:54:55 --> 00:55:00
that hackish way at least you can get

00:54:57 --> 00:55:02
you know that latency things sold out

00:54:59 --> 00:55:05
but is there any plan basically to have

00:55:01 --> 00:55:07
you know interfaces available for other

00:55:04 --> 00:55:08
languages so that you know you don't

00:55:06 --> 00:55:10
have to do this extra step of

00:55:07 --> 00:55:15
serializing and then you know loading

00:55:09 --> 00:55:17
into language if you if you don't like

00:55:14 --> 00:55:19
in your case you were mentioning that in

00:55:16 --> 00:55:19
Twitter you have

00:55:21 --> 00:55:30
- available inside your Java JVM our

00:55:24 --> 00:55:32
access to the JVM using j'ni so what

00:55:29 --> 00:55:36
what impact does it have on the

00:55:31 --> 00:55:39
latency and by latency you mean time to

00:55:35 --> 00:55:42
ship the model not the latency of how

00:55:38 --> 00:55:44
long it takes many predictions oh that's

00:55:41 --> 00:55:47
gonna be very engineering dependent so

00:55:43 --> 00:55:49
if you're calling torch from C code the

00:55:46 --> 00:55:51
latency is not appreciable over if

00:55:48 --> 00:55:54
you're just running Lua code and that

00:55:50 --> 00:55:55
can be extremely fast if you're going

00:55:53 --> 00:55:56
through some wrapper like through the

00:55:54 --> 00:55:59
J&I or something like that you will

00:55:55 --> 00:56:01
incur an overhead and you should just

00:55:58 --> 00:56:03
ry to pick the interfaces that reduce

00:56:00 --> 00:56:05
that as much even if you incur

00:56:02 --> 00:56:13
engineering overhead to do so I don't

00:56:04 --> 00:56:15
know if that answers your question I'm a

00:56:12 --> 00:56:17
little bit distant from the server side

00:56:14 --> 00:56:21
so I can't give you I just don't know

00:56:16 --> 00:56:23
but generally I think what I can say

00:56:20 --> 00:56:25
this that's fair is we're constrained by

00:56:22 --> 00:56:28
machine learning you know model

00:56:25 --> 00:56:31
complexity latency we are not

00:56:27 --> 00:56:32
constrained by overhead of like figuring

00:56:30 --> 00:56:35
out how to actually get those

00:56:31 --> 00:56:41
predictions like to an HTTP request for

00:56:34 --> 00:56:43
instance serving which you know which is

00:56:40 --> 00:56:47
kind of sort of solving this problem

00:56:42 --> 00:56:50
yeah not that I'm aware of

00:56:46 --> 00:56:52
again the torch community is not

00:56:49 --> 00:56:53
centralized and so people could be

00:56:51 --> 00:56:56
working on a totally awesome

00:56:52 --> 00:56:59
you know complement to the the

00:56:55 --> 00:57:04
tensorflow server but I am not aware of

00:56:58 --> 00:57:06
it thank you okay we're going to take a

00:57:03 --> 00:57:10
short break of 15 minutes

00:57:05 --> 00:57:10
let's thanks Alex again

<!-- YOUTUBE_TRANSCRIPT_END -->
