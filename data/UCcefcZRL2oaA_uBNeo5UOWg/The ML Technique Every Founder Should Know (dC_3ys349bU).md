---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "dC_3ys349bU"
title: "The ML Technique Every Founder Should Know"
video_url: "https://www.youtube.com/watch?v=dC_3ys349bU"
thumbnail_url: "https://i.ytimg.com/vi/dC_3ys349bU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=dC_3ys349bU"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-01-22T15:01:12.000Z"
upload_date: "2026-01-22"
duration_seconds: 1630
duration_human: "27:10"
view_count: 37385
like_count: 876
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:25:53.191Z"
---

# The ML Technique Every Founder Should Know

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=dC_3ys349bU
- video_id: dC_3ys349bU
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-01-22T15:01:12.000Z
- upload_date: 2026-01-22
- duration: 27:10
- view_count: 37385
- like_count: 876
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

Diffusion is the foundational machine learning framework behind state-of-the-art AI image and video generation, including Sora, Midjourney and Google Veo. In this episode of Decoded, YC General Partner Ankit Gupta sits down with YC Visiting Partner Francois Chaubard to discuss how diffusion works, walk through a code sample, and explain why everyone training models should understand it.

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

Chapters:

00:00 Intro
00:33 What is diffusion?
02:50 What are applications of diffusion today?
04:06 Key innovations
07:01 Code examples
19:25 The "squint test"
22:27 Other areas diffusion is widely accessible 
24:49 Outro

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
Welcome back to another episode of

00:00:01 --> 00:00:06
decoded. Today, I'm sitting down with YC

00:00:03 --> 00:00:07
visiting partner Francois Chahbar to

00:00:05 --> 00:00:10
talk about one of the most important

00:00:06 --> 00:00:11
opics in AI today, diffusion. Francois

00:00:09 --> 00:00:14
has been doing computer vision since

00:00:10 --> 00:00:15
2012 when he started in Feifei Li's lab.

00:00:13 --> 00:00:17
And after a decade running Focal

00:00:14 --> 00:00:18
Systems, he's currently back at Stanford

00:00:16 --> 00:00:20
finishing his PhD working on

00:00:17 --> 00:00:21
diffusion-based world models for AGI.

00:00:19 --> 00:00:23
We're going to break down what diffusion

00:00:20 --> 00:00:26
is, how it's evolved over the past

00:00:22 --> 00:00:26
decade, and how it's used today.

00:00:29 --> 00:00:33
>> [music]

00:00:31 --> 00:00:35
>> Francois, thanks for being here. Thank

00:00:32 --> 00:00:36
you for having me. Well, we just got

00:00:34 --> 00:00:38
back from NeurIPS. We just spent a lot

00:00:35 --> 00:00:40
of time talking to researchers and

00:00:37 --> 00:00:43
thinking about all the newest models out

00:00:39 --> 00:00:44
here. Um, I think we saw diffusion pop

00:00:42 --> 00:00:46
up over and over and newer versions of

00:00:43 --> 00:00:48
this type of uh approaches that are not

00:00:45 --> 00:00:50
autoregressive LLMs. And so, I wanted to

00:00:48 --> 00:00:52
talk to you about those today. So,

00:00:49 --> 00:00:55
first, why don't we start by defining um

00:00:51 --> 00:00:57
what is diffusion? Diffusion is a very

00:00:54 --> 00:01:00
fundamental machine learning framework

00:00:56 --> 00:01:03
that allows you to learn any P data, any

00:00:59 --> 00:01:04
probability of data for any domain as

00:01:02 --> 00:01:06
long as you have the data. So, you're

00:01:03 --> 00:01:08
trying to learn some data distribution.

00:01:05 --> 00:01:09
>> That's right. Now, in a sense, all LLMs

00:01:07 --> 00:01:12
or all machine learning models are about

00:01:08 --> 00:01:14
learning data distributions.

00:01:11 --> 00:01:15
How does diffusion in particular, what

00:01:13 --> 00:01:17
stances it take or what approach

00:01:14 --> 00:01:17
does it take to being able to learn

00:01:16 --> 00:01:18
distribution?

00:01:16 --> 00:01:21
>> Yeah, I mean, I think you can use

00:01:17 --> 00:01:22
diffusion to to always do that. The

00:01:20 --> 00:01:24
thing where it stands out in particular

00:01:21 --> 00:01:27
is mapping from high dimensions to high

00:01:23 --> 00:01:29
dimensions, especially in low data uh

00:01:26 --> 00:01:31
regimes. So, say I only have 30 images

00:01:29 --> 00:01:32
of Gary, which I actually have some code

00:01:30 --> 00:01:34
that we're going to walk through.

00:01:31 --> 00:01:36
>> Okay. Um, I only have 30 images of Gary

00:01:33 --> 00:01:39
and again, we're in this 1,000 by 1,000

00:01:35 --> 00:01:41
by three uh

00:01:38 --> 00:01:43
dimensional space and I want to map

00:01:40 --> 00:01:46
to another three three million

00:01:42 --> 00:01:48
dimensional space with only 30 training

00:01:45 --> 00:01:49
samples and I can still do it. And it's

00:01:47 --> 00:01:51
pretty pretty powerful in that way.

00:01:48 --> 00:01:52
Okay, cool. So, so you have this ability

00:01:50 --> 00:01:55
to use relatively small amounts of data

00:01:51 --> 00:01:55
compared to the dimensionality to learn

00:01:54 --> 00:01:57
a P data.

00:01:54 --> 00:01:59
>> That's right. Um, what's the what's the

00:01:56 --> 00:02:01
basic process by which diffusion works?

00:01:58 --> 00:02:02
Like, just walk through like at a very

00:02:00 --> 00:02:04
high level and we'll walk through the

00:02:01 --> 00:02:05
math a little bit later, but at a very

00:02:03 --> 00:02:07
high level, how does this process

00:02:04 --> 00:02:10
actually work? We take some sample of

00:02:06 --> 00:02:11
the data, an image of Ankit, an image of

00:02:09 --> 00:02:13
Gary,

00:02:10 --> 00:02:14
and we just hit it with noise. And then

00:02:12 --> 00:02:17
we just keep hitting it with noise and

00:02:13 --> 00:02:19
we create this train of of noised up

00:02:16 --> 00:02:21
images. It's very easy to create noisy

00:02:18 --> 00:02:24
images, right? It's hard to create get

00:02:20 --> 00:02:27
walk backwards and create from noise

00:02:23 --> 00:02:30
images of you or Gary. And so, then we

00:02:26 --> 00:02:32
flip it and then we try to have teach

00:02:29 --> 00:02:33
the model to reverse that process. And

00:02:31 --> 00:02:35
that's basically it. Okay, cool. So,

00:02:32 --> 00:02:37
it's basically a

00:02:34 --> 00:02:38
noiser and a denoiser and the denoiser

00:02:36 --> 00:02:40
is the model that you end up training.

00:02:37 --> 00:02:42
>> Exactly. Yeah. You will uh you will

00:02:39 --> 00:02:45
basically teach your force and and give

00:02:41 --> 00:02:47
it uh noised up images and then have it

00:02:44 --> 00:02:49
learn intermediate representations to

00:02:46 --> 00:02:51
get to back to P data.

00:02:48 --> 00:02:52
>> Cool. Nice. And what kind of stuff is

00:02:50 --> 00:02:53
diffusion used for today? What are our

00:02:51 --> 00:02:56
some applications that it's widely

00:02:52 --> 00:02:57
deployed in? It's honestly surprising

00:02:55 --> 00:03:00
how uh

00:02:56 --> 00:03:03
applicable this process is. I think

00:02:59 --> 00:03:05
the the uh original 2015 Joshua Sohl

00:03:02 --> 00:03:08
Dickinson paper was on CIFAR-10, which

00:03:04 --> 00:03:10
is just images. Um, and I think it's got

00:03:07 --> 00:03:13
it has its roots in images, but it is

00:03:09 --> 00:03:16
far uh uh more sprawling than just

00:03:12 --> 00:03:18
images. As you've seen, we you know, uh

00:03:15 --> 00:03:20
DeepMind just won the Nobel Prize for

00:03:17 --> 00:03:21
doing this exact procedure on protein

00:03:19 --> 00:03:23
folding.

00:03:20 --> 00:03:25
Uh you can drive cars with this with the

00:03:22 --> 00:03:28
diffusion policy paper, which is like an

00:03:24 --> 00:03:31
insane result. Um, you can um

00:03:27 --> 00:03:32
uh predict the weather. Um, there's

00:03:30 --> 00:03:34
really no limit to the things that this

00:03:31 --> 00:03:35
can do. Yeah, it's pretty incredible to

00:03:33 --> 00:03:37
see. I mean, you have these image and

00:03:34 --> 00:03:38
video generation models that seem to be

00:03:36 --> 00:03:40
really advancing over the last few

00:03:37 --> 00:03:42
years. Stable Diffusion is the one I

00:03:39 --> 00:03:43
think many people have heard of and then

00:03:41 --> 00:03:44
ewer versions of it seem to be using

00:03:42 --> 00:03:46
this as well. And then yeah, in the

00:03:43 --> 00:03:48
world of life sciences that um my

00:03:45 --> 00:03:50
company was in, too, I think we see this

00:03:47 --> 00:03:52
newest generation of life sciences AI

00:03:49 --> 00:03:53
companies are heavily investing in these

00:03:51 --> 00:03:55
t of technologies. There's a model

00:03:52 --> 00:03:57
called DiffDock that works really well

00:03:54 --> 00:03:59
for predicting uh small molecule binding

00:03:56 --> 00:04:00
to proteins. And then yeah, AlphaFold,

00:03:58 --> 00:04:02
especially the newest AlphaFold version,

00:04:00 --> 00:04:04
has used diffusion pretty heavily. It's

00:04:01 --> 00:04:05
really cool to see the same core piece

00:04:03 --> 00:04:06
of technology applied to so many

00:04:04 --> 00:04:08
different domains.

00:04:05 --> 00:04:10
>> Yeah, yeah. This class of models has

00:04:07 --> 00:04:11
evolved over the years and, you know,

00:04:09 --> 00:04:12
there's a whole slew of papers someone

00:04:10 --> 00:04:13
could read. So, you should probably go

00:04:11 --> 00:04:15
read the papers to learn all the

00:04:12 --> 00:04:18
details. But maybe at a high level we

00:04:14 --> 00:04:20
can try to trace out a few of the key

00:04:17 --> 00:04:22
innovations that happened starting with

00:04:19 --> 00:04:24
e paper you already mentioned that now

00:04:21 --> 00:04:25
led to the newest versions of these

00:04:23 --> 00:04:27
models. So, how would you map those out?

00:04:24 --> 00:04:29
Like, what was the the first kind of

00:04:26 --> 00:04:31
turn of the crank from this very

00:04:28 --> 00:04:33
high-level diffusion process you uh

00:04:30 --> 00:04:34
outlined? What was the first version of

00:04:32 --> 00:04:36
that that started to work?

00:04:33 --> 00:04:38
>> Yeah. So, I think the the 2015 original

00:04:35 --> 00:04:41
Joshua paper

00:04:37 --> 00:04:44
um is put up all the key pieces, all the

00:04:40 --> 00:04:45
key components of modern diffusion. And

00:04:43 --> 00:04:47
so, like now we're just playing with

00:04:44 --> 00:04:49
different things. So, the scheduler, how

00:04:46 --> 00:04:51
do we add noise, at what weight? Like,

00:04:48 --> 00:04:52
that's a whole part that we can discuss.

00:04:50 --> 00:04:54
What's the loss function? Should I

00:04:51 --> 00:04:57
predict Should the the deep learning

00:04:53 --> 00:04:59
model condition upon X of T predict uh

00:04:56 --> 00:05:01
the actual data X of T minus one or

00:04:59 --> 00:05:03
should it predict the error that was

00:05:00 --> 00:05:05
just added to it? Uh or should it

00:05:02 --> 00:05:08
predict the velocity, which is the error

00:05:04 --> 00:05:10
divided by the time? Uh should it

00:05:07 --> 00:05:11
predict the velocity of the the start

00:05:09 --> 00:05:13
and the end? That's called flow

00:05:10 --> 00:05:14
matching. There's so there's all these

00:05:12 --> 00:05:16
different plays on what the loss

00:05:13 --> 00:05:18
function is. So, in all of those, the

00:05:15 --> 00:05:20
idea is still to do denoising.

00:05:17 --> 00:05:23
>> Yes. Uh but the objective for each of

00:05:19 --> 00:05:24
them is somewhat different from each

00:05:22 --> 00:05:25
other. I mean, they're all pretty

00:05:23 --> 00:05:27
closely related, whether it's basically

00:05:24 --> 00:05:28
a delta between two things or the

00:05:26 --> 00:05:30
previous step or the first step. How do

00:05:27 --> 00:05:32
these all actually come together? But

00:05:29 --> 00:05:34
hese are series of papers that happened

00:05:31 --> 00:05:36
one after another. Yeah, I think we just

00:05:33 --> 00:05:38
kind of hill climbed on this

00:05:35 --> 00:05:40
uh Fréchet inception distance metric.

00:05:37 --> 00:05:43
That's kind of a kooky weird

00:05:39 --> 00:05:44
um measure to see how good an image is.

00:05:42 --> 00:05:46
Um, but we just kept getting better and

00:05:44 --> 00:05:47
better on it by like doing

00:05:45 --> 00:05:49
these little tricks. And so, like it

00:05:46 --> 00:05:51
urns out that predicting the actual

00:05:48 --> 00:05:52
data itself is actually quite hard and

00:05:50 --> 00:05:54
like maybe predicting the error is

00:05:51 --> 00:05:56
actually easier. And then predicting the

00:05:53 --> 00:06:00
velocity was even easier than that. And

00:05:55 --> 00:06:02
then predicting the uh global error

00:05:59 --> 00:06:03
across the entire diffusion schedule is

00:06:01 --> 00:06:06
even easier than that. And like just

00:06:02 --> 00:06:09
kept finding easier and easier ways um

00:06:05 --> 00:06:11
to to basically uh sample from noise to

00:06:08 --> 00:06:12
data. And here, when you say easier,

00:06:10 --> 00:06:15
were

00:06:12 --> 00:06:17
was the ease largely driven by it was

00:06:14 --> 00:06:20
mathematically simpler or it was easier

00:06:16 --> 00:06:22
to implement and engineer or simpler to

00:06:19 --> 00:06:23
reason about or what

00:06:21 --> 00:06:25
>> What got easier, really?

00:06:22 --> 00:06:26
>> It actually is that, too, but I didn't

00:06:24 --> 00:06:28
mean it that way. What I actually meant

00:06:25 --> 00:06:30
was it's easier for the model to learn.

00:06:27 --> 00:06:33
Um, but it is also, and we'll go through

00:06:30 --> 00:06:34
some coding examples, the math actually

00:06:32 --> 00:06:36
got easier.

00:06:33 --> 00:06:38
>> Yeah. And like the the the code got

00:06:35 --> 00:06:41
smaller, which is actually opposite

00:06:37 --> 00:06:42
ly true in uh most of uh the

00:06:40 --> 00:06:44
case in most machine learning. You

00:06:41 --> 00:06:46
actually things get more complicated. I

00:06:43 --> 00:06:47
think we started with UNets and that was

00:06:45 --> 00:06:49
like the predominant architecture. We

00:06:46 --> 00:06:51
didn't really talk about architectures

00:06:48 --> 00:06:52
that much, but then we got into these uh

00:06:50 --> 00:06:54
diffusion transformers and like this

00:06:51 --> 00:06:56
cross attention mechanism and things

00:06:53 --> 00:07:00
like that. And so, um yeah, we just kept

00:06:55 --> 00:07:02
getting better and better at reducing uh

00:06:59 --> 00:07:03
FID. Hm, interesting. Should we dive

00:07:01 --> 00:07:05
into some code examples?

00:07:02 --> 00:07:09
>> Let's do it. Let's do it. I'll walk you

00:07:04 --> 00:07:12
through I made about uh 1 2 3 4 5 6 7 of

00:07:08 --> 00:07:15
these that I implemented um with varying

00:07:11 --> 00:07:16
levels of success. But uh the the all

00:07:14 --> 00:07:18
the structures are going to be the same.

00:07:15 --> 00:07:20
So, the the Joshua paper, the

00:07:17 --> 00:07:22
non-equilibrium uh thermodynamics paper,

00:07:19 --> 00:07:25
uh you can see here here are some nice

00:07:21 --> 00:07:26
images of Gary you can see here. Very

00:07:24 --> 00:07:29
nice. This is the what I could find

00:07:25 --> 00:07:30
online. Nice. Um and then

00:07:28 --> 00:07:32
>> are images of Gary that you've

00:07:29 --> 00:07:34
downsampled so that they're 1,000 by

00:07:31 --> 00:07:34
1,000 or they're they're smaller, I

00:07:33 --> 00:07:36
think.

00:07:33 --> 00:07:38
>> by 64. 64 by 64. Yeah, they're really

00:07:35 --> 00:07:40
small. This is a very small example.

00:07:37 --> 00:07:42
Yeah. 64 and then I randomly augment it

00:07:39 --> 00:07:43
o create more data. Great.

00:07:41 --> 00:07:45
>> Um cuz I was I was lazy and that was

00:07:42 --> 00:07:46
easier than uh downloading more images

00:07:44 --> 00:07:47
of Gary.

00:07:45 --> 00:07:48
>> [laughter]

00:07:46 --> 00:07:51
>> Didn't want to didn't want to get

00:07:47 --> 00:07:52
security called on you. Exactly. So, and

00:07:50 --> 00:07:53
then wait, I implemented this diffusion

00:07:51 --> 00:07:56
schedule and this is probably one of the

00:07:53 --> 00:07:57
most important like of all the parts of

00:07:55 --> 00:07:59
diffusion to that's difficult to

00:07:57 --> 00:08:01
comprehend, I would say that the noise

00:07:58 --> 00:08:03
schedule is actually the hardest part to

00:08:00 --> 00:08:05
understand and that I really like I

00:08:02 --> 00:08:08
struggled with myself. And so, if you

00:08:04 --> 00:08:11
can see here, the noise that's added

00:08:07 --> 00:08:13
from time step uh zero to T to 10 to 25

00:08:10 --> 00:08:15
all the way to 100,

00:08:12 --> 00:08:17
uh it's clearly destroying the

00:08:14 --> 00:08:17
structure. Yes. And then we want to

00:08:16 --> 00:08:20
train the model.

00:08:16 --> 00:08:22
>> is basically random static. Exactly. And

00:08:19 --> 00:08:24
we want to basically reverse this and

00:08:21 --> 00:08:25
from here get to here and have the model

00:08:23 --> 00:08:26
get to that point, get to this point,

00:08:24 --> 00:08:27
get to my

00:08:25 --> 00:08:30
etc.

00:08:26 --> 00:08:33
And so, uh the interesting part, and

00:08:29 --> 00:08:34
this is Joshua really you know,

00:08:32 --> 00:08:37
uh implemented almost everything that we

00:08:33 --> 00:08:38
needed for diffusion. Um, and there was

00:08:36 --> 00:08:40
just a few little tweaks that were

00:08:37 --> 00:08:43
missing and he didn't he didn't scale it

00:08:39 --> 00:08:46
up. That's to me the the parts that um

00:08:42 --> 00:08:48
uh were were were missing. And if you

00:08:45 --> 00:08:50
see here the um

00:08:47 --> 00:08:54
the noise schedule, so it would make

00:08:49 --> 00:08:57
sense to me that I would have linear

00:08:53 --> 00:08:59
interpolation between uh the image and

00:08:56 --> 00:09:02
the noise. And I would start with like

00:08:58 --> 00:09:04
one and zero, one being the image and

00:09:01 --> 00:09:06
zero being the noise.

00:09:03 --> 00:09:08
>> And you gradually add it.

00:09:05 --> 00:09:10
But if you do that, it actually is

00:09:07 --> 00:09:12
massively unstable because the

00:09:09 --> 00:09:14
instantaneous amount of error that

00:09:11 --> 00:09:15
you're adding is very small in the

00:09:13 --> 00:09:16
beginning.

00:09:14 --> 00:09:17
>> Right.

00:09:15 --> 00:09:20
Like, on a relative basis.

00:09:16 --> 00:09:21
>> basis. And then at the end, you have to

00:09:19 --> 00:09:24
destroy all that to get to complete

00:09:20 --> 00:09:26
noise, you need to add a lot of error.

00:09:23 --> 00:09:27
And so, like if you're a model and

00:09:25 --> 00:09:30
you're just looking at this little chunk

00:09:26 --> 00:09:32
of the noise schedule, then you have to

00:09:29 --> 00:09:34
handle a lot of error in one step. And

00:09:31 --> 00:09:36
on this side of of the schedule, you

00:09:33 --> 00:09:38
need to handle such small amounts of

00:09:35 --> 00:09:41
error. And what you actually want is

00:09:37 --> 00:09:43
constant rel- like relatively constant

00:09:40 --> 00:09:43
amount of error being introduced every

00:09:42 --> 00:09:46
single time step.

00:09:42 --> 00:09:48
>> Right. And that the the cumulative sum

00:09:45 --> 00:09:50
of all that error actually ends up

00:09:47 --> 00:09:52
looking like this

00:09:49 --> 00:09:53
uh like this curve here. That's the uh

00:09:51 --> 00:09:55
the pink curve.

00:09:52 --> 00:09:57
>> Yeah. Yeah. And so, they called this a

00:09:54 --> 00:10:00
beta schedule. Beta is the diffusion

00:09:56 --> 00:10:01
rate, the rate of diffusion that I'm I'm

00:09:59 --> 00:10:05
doing while I'm rolling this thing out

00:10:00 --> 00:10:07
from time zero to time T, capital T. And

00:10:04 --> 00:10:09
and so you can see here the the beta

00:10:06 --> 00:10:13
schedule. So we we have usually have

00:10:08 --> 00:10:15
some beta min to beta max. And then we

00:10:12 --> 00:10:17
one minus that is the alpha. And you can

00:10:14 --> 00:10:19
think about the beta as like how much

00:10:16 --> 00:10:21
noise I'm adding at every time step. And

00:10:18 --> 00:10:23
you think about the alpha as how much

00:10:20 --> 00:10:25
signal is being retained. Yeah, being

00:10:22 --> 00:10:28
retained. And then the term that really

00:10:24 --> 00:10:30
matters is the alpha bar and these are

00:10:27 --> 00:10:33
the weight weights that are used and it

00:10:29 --> 00:10:35
has this kind of like one minus sigmoid

00:10:32 --> 00:10:38
looking thing.

00:10:34 --> 00:10:40
But that's basically the noise schedule.

00:10:37 --> 00:10:42
And once you get that right, really this

00:10:39 --> 00:10:44
this part here then everything kind

00:10:41 --> 00:10:46
of else just works. And then I trained

00:10:43 --> 00:10:48
some model and then we can actually So

00:10:45 --> 00:10:49
there what was the training objective

00:10:47 --> 00:10:51
again? So you were adding this noise and

00:10:48 --> 00:10:53
the training objective was to do what

00:10:50 --> 00:10:55
exactly? The train in this case it's to

00:10:52 --> 00:10:58
minimize the KL divergence between the

00:10:54 --> 00:10:59
distribution the real distribution and

00:10:57 --> 00:11:01
the distribution that I'm learning. And

00:10:58 --> 00:11:03
so

00:11:00 --> 00:11:04
I won't go through the code for this one

00:11:02 --> 00:11:06
cuz it's a little bit hairier but you

00:11:03 --> 00:11:08
can kind of see the result on these

00:11:05 --> 00:11:10
generated images

00:11:07 --> 00:11:12
after a 100 diffusion steps at inference

00:11:10 --> 00:11:15
time. And you can see that the Frechet

00:11:12 --> 00:11:18
inception distance is 222 which is like

00:11:14 --> 00:11:19
xtremely high today. Like today modern

00:11:17 --> 00:11:21
day would be like maybe like

00:11:18 --> 00:11:22
ight or 10 or something. And what's

00:11:20 --> 00:11:23
interesting here is I mean you kind of

00:11:21 --> 00:11:26
scroll through it there but it's and you

00:11:23 --> 00:11:27
mentioned it there's quite a lot of code

00:11:25 --> 00:11:30
that it actually takes to do that KL

00:11:26 --> 00:11:31
divergence base loss. I suspect that in

00:11:29 --> 00:11:34
these later models you're going to show

00:11:30 --> 00:11:35
it it gets significantly simpler. So I'm

00:11:33 --> 00:11:36
just mentally noting that cuz I suspect

00:11:34 --> 00:11:39
here's going to be interesting contrast

00:11:36 --> 00:11:41
o draw between these two. Yeah, so the

00:11:38 --> 00:11:43
next one I would like to show is flow

00:11:40 --> 00:11:44
matching which is it's just so beautiful

00:11:42 --> 00:11:47
and simple.

00:11:43 --> 00:11:50
And this was out of meta

00:11:46 --> 00:11:51
Yarin Lipman

00:11:49 --> 00:11:53
where he basically said we don't need a

00:11:51 --> 00:11:56
lot of this stuff. What we need to do

00:11:52 --> 00:12:00
forget the if you think about the

00:11:55 --> 00:12:02
noising process as being this like

00:11:59 --> 00:12:03
I start from data. I randomly sample a

00:12:01 --> 00:12:05
vector

00:12:02 --> 00:12:07
of noise and I just go in this

00:12:04 --> 00:12:08
direction. And then I do it again. I go

00:12:06 --> 00:12:09
in this direction. I do it again. I go

00:12:07 --> 00:12:10
in that direction. I go in this

00:12:08 --> 00:12:12
direction that direction. And then I'm

00:12:09 --> 00:12:14
here at noise. And then you have to

00:12:11 --> 00:12:16
teach the thing to go in the exact

00:12:13 --> 00:12:18
opposite path. And you have to do this

00:12:15 --> 00:12:19
very circuitous path. And so at test

00:12:17 --> 00:12:22
ime it's actually quite expensive. You

00:12:18 --> 00:12:25
have to do We've all waited for you know

00:12:21 --> 00:12:26
chat GPT or to or midjourney to like

00:12:24 --> 00:12:28
make an image and takes a while. What

00:12:25 --> 00:12:30
it's doing is like a thousand calls to

00:12:27 --> 00:12:31
the model again and again iterating

00:12:29 --> 00:12:34
through to get to that point of your

00:12:30 --> 00:12:36
data. Instead And like intuitively it's

00:12:33 --> 00:12:38
like okay we're doing the circuitous

00:12:35 --> 00:12:40
path but surely there's a shorter path

00:12:37 --> 00:12:41
between those two. And so that's what

00:12:39 --> 00:12:44
makes flow matching so cool to me at

00:12:40 --> 00:12:47
least is that they said forget all of

00:12:43 --> 00:12:51
that intermediary results. There is a a

00:12:46 --> 00:12:54
velocity a global velocity between the

00:12:50 --> 00:12:56
noise and the data and it's just this

00:12:53 --> 00:12:58
direction. It's just this straight line.

00:12:56 --> 00:13:00
And I don't care where you are go in

00:12:57 --> 00:13:01
that line. Wherever you are you're over

00:12:59 --> 00:13:03
here go in that line and teach it to go

00:13:00 --> 00:13:04
in that line. And that's what flow

00:13:02 --> 00:13:05
matching does. And so I'll show you the

00:13:03 --> 00:13:07
code

00:13:04 --> 00:13:09
and it's really quite simple. It really

00:13:06 --> 00:13:10
is quite simple. And so this pretty

00:13:08 --> 00:13:13
cool. So

00:13:10 --> 00:13:15
here you go. The

00:13:12 --> 00:13:18
you basically have like 10 15 lines of

00:13:14 --> 00:13:21
code that is the most powerful machine

00:13:17 --> 00:13:24
learning procedure ever. So I I have

00:13:20 --> 00:13:26
some data I an image of Gary.

00:13:23 --> 00:13:28
I have some noise that I I I some

00:13:25 --> 00:13:29
isotropic Gaussian noise that I sample

00:13:27 --> 00:13:32
from.

00:13:28 --> 00:13:34
There's some time that I'm I'm trying to

00:13:31 --> 00:13:37
index into in the diffusion schedule.

00:13:33 --> 00:13:39
And I'm and I create XT which is the

00:13:36 --> 00:13:41
image at the noised up image that's

00:13:38 --> 00:13:43
omewhere between extremely noisy and

00:13:40 --> 00:13:44
not noisy at all. And and that's

00:13:42 --> 00:13:46
basically just this sampling procedure.

00:13:43 --> 00:13:48
It's T times data

00:13:45 --> 00:13:51
plus one minus that times noise. That's

00:13:47 --> 00:13:53
right. And then I compute the velocity

00:13:50 --> 00:13:54
which is independent of the time. I

00:13:52 --> 00:13:56
don't care where you are it's just the

00:13:53 --> 00:13:58
global this global velocity which is

00:13:55 --> 00:14:01
this the noise minus the data and then

00:13:57 --> 00:14:03
it I return that back to my training

00:14:00 --> 00:14:05
loop which is the shortest amount of

00:14:02 --> 00:14:06
code training loop [laughter] I've ever

00:14:04 --> 00:14:08
written which

00:14:05 --> 00:14:11
it's five lines of code.

00:14:07 --> 00:14:14
I have my batch. I have some time. I

00:14:10 --> 00:14:15
sample from that function I just

00:14:13 --> 00:14:18
explained before.

00:14:14 --> 00:14:21
And then I have my prediction from the

00:14:17 --> 00:14:22
model. I feed it in this some

00:14:20 --> 00:14:25
lement

00:14:21 --> 00:14:26
some noised up image somewhere between

00:14:24 --> 00:14:28
lots of noise and little noise is X of T

00:14:25 --> 00:14:30
let's call it. And I just want it to

00:14:27 --> 00:14:31
predict the velocity that I want to go.

00:14:29 --> 00:14:33
And this is also really powerful cuz

00:14:30 --> 00:14:36
here you know you have model abstracted

00:14:32 --> 00:14:38
but that model can be any model. So you

00:14:35 --> 00:14:40
can put in whatever the relevant model

00:14:37 --> 00:14:42
is for your distribution whether that's

00:14:39 --> 00:14:45
a protein model for proteins or if it's

00:14:41 --> 00:14:47
an LLM for text or an image based model

00:14:44 --> 00:14:49
for images that is a very clean

00:14:46 --> 00:14:51
abstraction as long as you can then

00:14:48 --> 00:14:53
predict this velocity and then move in

00:14:50 --> 00:14:55
that direction. That's right. This code

00:14:52 --> 00:14:58
here has nothing to do with images. It

00:14:55 --> 00:15:01
could be weather data. It could be you

00:14:57 --> 00:15:03
know stock market data. It could be

00:15:00 --> 00:15:05
trajectories from a robotics in a

00:15:02 --> 00:15:07
teleops setup.

00:15:04 --> 00:15:08
It could be proteins. It could be DNA.

00:15:06 --> 00:15:10
It doesn't really matter. It's all the

00:15:07 --> 00:15:11
xact same code.

00:15:09 --> 00:15:13
And so and then also we haven't talked

00:15:10 --> 00:15:15
about the architecture. So like this

00:15:12 --> 00:15:18
model here could be anything you want it

00:15:14 --> 00:15:20
o be. Like it could be a RNN. It could

00:15:17 --> 00:15:21
be a

00:15:19 --> 00:15:24
U-Net which is typically you know

00:15:20 --> 00:15:26
traditionally is. And and modernly they

00:15:23 --> 00:15:28
use these diffusion transformers doing

00:15:25 --> 00:15:30
this cross attention mechanism. And so

00:15:27 --> 00:15:33
it can be whatever you want.

00:15:29 --> 00:15:34
But it's all that is independent from

00:15:32 --> 00:15:36
whether or not you're doing flow

00:15:33 --> 00:15:38
matching or not. I think this is like a

00:15:35 --> 00:15:40
really profoundly

00:15:37 --> 00:15:42
interesting result in that especially

00:15:39 --> 00:15:43
this

00:15:41 --> 00:15:45
I think we often assume as models have

00:15:42 --> 00:15:46
gotten more sophisticated that they

00:15:44 --> 00:15:48
become less accessible for people to

00:15:45 --> 00:15:50
understand but this is quite literally

00:15:47 --> 00:15:50
10 lines of code

00:15:49 --> 00:15:52
>> [laughter]

00:15:49 --> 00:15:54
>> that explains essentially all of the

00:15:51 --> 00:15:57
most important kind of mathematical and

00:15:53 --> 00:15:59
fundamental foundations of the models

00:15:56 --> 00:16:01
that we all see as generating basically

00:15:58 --> 00:16:02
like magical AI results on our phones.

00:16:00 --> 00:16:03
Of course there's lots of engineering

00:16:01 --> 00:16:06
how you scale them up you know that that

00:16:02 --> 00:16:09
model could be a 100 billion parameter

00:16:05 --> 00:16:11
transformer. Data centers you know GPUs.

00:16:09 --> 00:16:12
Yeah 100%. So it's the engineering

00:16:10 --> 00:16:14
that's the really hard part there but a

00:16:11 --> 00:16:16
lot of the basic machine learning math

00:16:13 --> 00:16:17
is actually quite straightforward.

00:16:15 --> 00:16:20
That's right.

00:16:16 --> 00:16:22
And so there's a bunch of these like

00:16:19 --> 00:16:25
tangent fields to diffusion that all

00:16:21 --> 00:16:26
have some different interpretation on

00:16:24 --> 00:16:28
what's actually happening but it's all

00:16:25 --> 00:16:29
the same exact math. And most people

00:16:27 --> 00:16:32
arning diffusion actually get quite

00:16:28 --> 00:16:34
confused because if you talk to

00:16:31 --> 00:16:35
some

00:16:33 --> 00:16:37
you know probabilistic graphical model

00:16:34 --> 00:16:39
people they'll say oh this is a

00:16:36 --> 00:16:40
probabilistic graphical model and what's

00:16:38 --> 00:16:41
actually this is a hidden Markov model

00:16:39 --> 00:16:43
and what we're doing is we're learning

00:16:40 --> 00:16:47
this like Markovian thing or whatever.

00:16:43 --> 00:16:49
It's like okay fine but like it's just

00:16:46 --> 00:16:49
noise minus data.

00:16:48 --> 00:16:51
>> [laughter]

00:16:48 --> 00:16:52
>> And like you should just show that

00:16:50 --> 00:16:55
first. And then like if you think about

00:16:51 --> 00:16:57
it from like a physics perspective and

00:16:54 --> 00:16:59
there's all this stat mech people

00:16:56 --> 00:17:00
that have that interpretation.

00:16:58 --> 00:17:02
There's a whole bunch of these different

00:16:59 --> 00:17:04
interpretations. I think it's it gets a

00:17:01 --> 00:17:05
little bit confusing.

00:17:03 --> 00:17:07
And then the whole stochastic

00:17:04 --> 00:17:09
differential equation people like

00:17:06 --> 00:17:11
thinking about that this is an SDE. And

00:17:08 --> 00:17:13
I think that's all fine and it probably

00:17:10 --> 00:17:14
is helpful to think about but in terms

00:17:12 --> 00:17:16
of teaching it it's actually quite quite

00:17:13 --> 00:17:18
simple which is powerful.

00:17:15 --> 00:17:20
So if we go back to here

00:17:17 --> 00:17:22
you can see that this just literally

00:17:19 --> 00:17:23
predicting the velocity. Your goal is to

00:17:21 --> 00:17:25
have the model predict You're minimizing

00:17:22 --> 00:17:25
the loss between predicted velocity and

00:17:24 --> 00:17:27
velocity.

00:17:24 --> 00:17:29
>> velocity. That's it. And that's super

00:17:27 --> 00:17:31
stable

00:17:28 --> 00:17:34
and it's it's really clean. And then at

00:17:30 --> 00:17:37
est time for the

00:17:33 --> 00:17:38
physics people this is like a Euler step

00:17:36 --> 00:17:41
kind of thing that you're doing where

00:17:37 --> 00:17:43
you call the model a bunch of times

00:17:40 --> 00:17:44
and you iteratively refine. So back to

00:17:42 --> 00:17:48
the hill climbing that we were talking

00:17:43 --> 00:17:53
about I'll grab some random

00:17:47 --> 00:17:55
noise here X and I just do and I call

00:17:52 --> 00:17:58
basically reverse that that

00:17:55 --> 00:18:00
noising process to denoise denoise

00:17:57 --> 00:18:01
and It's literally Euler's

00:17:59 --> 00:18:03
method. Like you're you're using the

00:18:00 --> 00:18:04
velocity to point in the direction you

00:18:02 --> 00:18:06
want to in the direction and just keep

00:18:03 --> 00:18:08
going keep going keep going until you've

00:18:05 --> 00:18:10
done the number of steps. The one thing

00:18:07 --> 00:18:13
that I really don't like about diffusion

00:18:09 --> 00:18:15
as it's done today is that I can't keep

00:18:12 --> 00:18:18
calling it

00:18:14 --> 00:18:20
beyond if I only trained on 100

00:18:17 --> 00:18:22
diffusion steps in my diffusion

00:18:19 --> 00:18:23
schedule. If I change that at test time

00:18:21 --> 00:18:25
it doesn't work. And so you can't like

00:18:22 --> 00:18:27
oh I want to even better so I'll call it

00:18:24 --> 00:18:28
even more. That doesn't You can't I've

00:18:26 --> 00:18:30
tried it it doesn't work. There's

00:18:27 --> 00:18:32
various tricks people try there but

00:18:29 --> 00:18:34
yeah. Yeah. And so like the there's

00:18:31 --> 00:18:36
games played that is actually quite

00:18:33 --> 00:18:37
xciting. All the expense

00:18:35 --> 00:18:38
>> But what I was trying to be clear here

00:18:36 --> 00:18:40
you're saying that's not relevant.

00:18:38 --> 00:18:42
It's not relevant. In this type of model

00:18:39 --> 00:18:45
you don't have this time dependency.

00:18:41 --> 00:18:47
Well so you do. So at this time if you

00:18:44 --> 00:18:49
change for example the number of steps

00:18:46 --> 00:18:50
if you double it. Let's say that and you

00:18:48 --> 00:18:52
expect to get even higher resolution

00:18:49 --> 00:18:54
images. It actually will just turn into

00:18:51 --> 00:18:55
like white. Like it actually just like

00:18:53 --> 00:18:57
doesn't work at all.

00:18:54 --> 00:18:59
So you can't step beyond number of steps

00:18:56 --> 00:19:01
that was trained. That's an important

00:18:58 --> 00:19:05
detail. There are tricks that people are

00:19:00 --> 00:19:07
doing to try to compress that

00:19:04 --> 00:19:09
representation. So like if at train time

00:19:06 --> 00:19:11
I train for 100 steps and at test time I

00:19:08 --> 00:19:13
want to do 10 steps. Then what you can

00:19:10 --> 00:19:15
do is you can do distillation into the

00:19:12 --> 00:19:18
model to try to have the 10 step model

00:19:14 --> 00:19:19
earn the 100 step models thing. But

00:19:17 --> 00:19:20
hen you still got to train with 10

00:19:18 --> 00:19:23
steps. And so like if you're training

00:19:19 --> 00:19:26
with with X steps you have to be using X

00:19:22 --> 00:19:27
steps at test time. I see. Interesting.

00:19:25 --> 00:19:29
You've talked about this concept of a

00:19:26 --> 00:19:30
squint test why don't you define the

00:19:28 --> 00:19:32
squint test for a second. Tell me a

00:19:29 --> 00:19:33
little about where this comes from and

00:19:31 --> 00:19:35
then I'd be curious to hear how you

00:19:33 --> 00:19:37
think about diffusion models in the

00:19:34 --> 00:19:39
context of general intelligence broadly.

00:19:36 --> 00:19:41
Yann LeCun has this like interesting

00:19:38 --> 00:19:43
lecture where he talks about

00:19:40 --> 00:19:44
our discovery of flight and that we

00:19:42 --> 00:19:46
didn't need

00:19:43 --> 00:19:48
flapping wings. We kept trying to mimic

00:19:45 --> 00:19:50
a bat

00:19:47 --> 00:19:53
and how that was a waste of time. And

00:19:49 --> 00:19:54
to that I say you're 100% right. However

00:19:52 --> 00:19:56
we did need two wings. Then you look at

00:19:53 --> 00:19:58
he Wright brothers' original plane and

00:19:55 --> 00:20:00
you squint and you look at a bird,

00:19:57 --> 00:20:02
you're just like, "Hmm, while we have

00:19:59 --> 00:20:04
helicopters and we have jets and things

00:20:01 --> 00:20:06
like that and rockets, like we we got

00:20:04 --> 00:20:09
here eventually." And so there's many

00:20:05 --> 00:20:10
elements in the set of things that can

00:20:08 --> 00:20:12
achieve flight and they have different

00:20:09 --> 00:20:14
pros and cons.

00:20:11 --> 00:20:15
And there are many elements in the set

00:20:13 --> 00:20:19
of things that can achieve intelligence.

00:20:14 --> 00:20:21
We are the only existence proof of it at

00:20:18 --> 00:20:24
all. And like I'm sure there will be

00:20:20 --> 00:20:26
more elements in the set and maybe LLMs,

00:20:23 --> 00:20:29
broadly speaking, can get there. But if

00:20:25 --> 00:20:32
I squint and I look at LLM setup, which

00:20:28 --> 00:20:33
I I see this, you know, monolithic stack

00:20:31 --> 00:20:35
transformers, the same thing, stack

00:20:33 --> 00:20:38
stack, and there's three stages of

00:20:34 --> 00:20:40
training. We do this pre-train,

00:20:37 --> 00:20:43
you know, SFT, you know, post-train, and

00:20:39 --> 00:20:46
then no learning at at all beyond that.

00:20:42 --> 00:20:46
And it produces exactly one token at a

00:20:45 --> 00:20:48
time.

00:20:45 --> 00:20:49
>> Right, so in order to token. In order to

00:20:47 --> 00:20:52
ken at a time and it never goes

00:20:48 --> 00:20:54
backwards. And then you look at a brain,

00:20:51 --> 00:20:56
massively massive amounts of recursion.

00:20:53 --> 00:20:57
You have one learning procedure the

00:20:55 --> 00:20:59
whole time. You have these two lobes

00:20:57 --> 00:21:00
that with a corpus callosum that between

00:20:58 --> 00:21:02
them that's kind of going back and forth

00:20:59 --> 00:21:04
like this and we think and then I

00:21:01 --> 00:21:05
definitely don't think in one token at a

00:21:03 --> 00:21:07
time. When I write code, I don't write

00:21:04 --> 00:21:09
one little character at a time. I never

00:21:06 --> 00:21:10
go backwards. And I kind of like I'm

00:21:08 --> 00:21:12
going backwards, I'm recursively

00:21:10 --> 00:21:14
improving. I'm going backwards again and

00:21:11 --> 00:21:16
again. I'm I'm thinking in concepts.

00:21:13 --> 00:21:18
>> There's just like dynamic process that's

00:21:15 --> 00:21:19
emitting concepts and then higher-level

00:21:17 --> 00:21:20
concepts and then

00:21:18 --> 00:21:22
lower-level manifestations of them.

00:21:19 --> 00:21:24
>> I'm sure that may be happening inside

00:21:21 --> 00:21:27
the LLM, but it's like it's almost like

00:21:23 --> 00:21:29
stuck. It can't do more than in one step

00:21:26 --> 00:21:31
even though if it might want to cuz it

00:21:28 --> 00:21:32
has to is the way that we we trained it.

00:21:30 --> 00:21:34
>> Right, like it might have all that in

00:21:31 --> 00:21:36
the LLM, but then it's it's sort of

00:21:33 --> 00:21:38
bottleneck ultimately by all the emits.

00:21:35 --> 00:21:40
Action space is one is one

00:21:37 --> 00:21:41
>> token at a time. And so I think that

00:21:39 --> 00:21:43
's where I think about diffusion,

00:21:40 --> 00:21:44
there's like a two main things that

00:21:42 --> 00:21:46
diffusion gives me. It doesn't get me

00:21:43 --> 00:21:48
all the way to to pass my squint test,

00:21:45 --> 00:21:50
but it gives me two things that I for

00:21:47 --> 00:21:53
sure the brain is doing. Number one, the

00:21:49 --> 00:21:54
ntire all of biology and nature

00:21:52 --> 00:21:57
leverages randomness. Randomness is

00:21:53 --> 00:21:58
good. And what is diffusion doing? It's

00:21:56 --> 00:22:01
leveraging randomness. If you give me

00:21:58 --> 00:22:03
data and I noise it up and from that I

00:22:00 --> 00:22:06
can learn about the data. And like is

00:22:02 --> 00:22:09
the can the brain add noise to input

00:22:05 --> 00:22:11
data? Absolutely. Like absolutely.

00:22:08 --> 00:22:12
Neurons are massively random.

00:22:10 --> 00:22:14
This log-normal distributions, spike

00:22:11 --> 00:22:16
patterns, and things like that. And the

00:22:13 --> 00:22:18
other one is this emission of one thing

00:22:16 --> 00:22:21
at a time versus thinking in concepts

00:22:17 --> 00:22:23
and then decoding into a big chunk of

00:22:20 --> 00:22:25
text and thought and revisioning of the

00:22:22 --> 00:22:27
previous thoughts and things like that.

00:22:24 --> 00:22:28
And so I think diffusion gives me both

00:22:26 --> 00:22:30
of those things for sure. People

00:22:27 --> 00:22:32
probably heard of stable diffusion as a

00:22:29 --> 00:22:35
very common application of this. People

00:22:31 --> 00:22:37
it's an image generation model that was

00:22:34 --> 00:22:38
pretty widely available for the last few

00:22:36 --> 00:22:39
years.

00:22:37 --> 00:22:41
What people may not be so aware of is

00:22:38 --> 00:22:43
all the other ways that diffusion is

00:22:40 --> 00:22:44
used in the last few years in products

00:22:42 --> 00:22:46
that people are widely using. So what

00:22:43 --> 00:22:49
are some of the areas on which diffusion

00:22:45 --> 00:22:50
is most widely accessible? Yeah, it's

00:22:48 --> 00:22:52
really any mapping from very

00:22:50 --> 00:22:55
high-dimensional P data to very

00:22:51 --> 00:22:57
high-dimensional action spaces or P data

00:22:54 --> 00:22:59
that you may want to map to. And so I

00:22:56 --> 00:23:00
mean, yeah, of course everyone knows

00:22:58 --> 00:23:02
generating images cuz we've done

00:22:59 --> 00:23:04
Midjourney and things like that

00:23:01 --> 00:23:08
and even more modern versions of that

00:23:03 --> 00:23:09
with Sora and VEO and Flux and SD3 now

00:23:07 --> 00:23:11
and things like that.

00:23:08 --> 00:23:14
And we've generating videos which is

00:23:10 --> 00:23:16
just images stable together

00:23:13 --> 00:23:18
and and video gen and image gen and

00:23:15 --> 00:23:19
things like that. However, there's so

00:23:17 --> 00:23:21
many more applications that now we're

00:23:18 --> 00:23:23
seeing that's the most exciting part in

00:23:20 --> 00:23:25
my my view of all the new applications.

00:23:22 --> 00:23:27
And so whether or not you're

00:23:25 --> 00:23:29
now creating sentences, I mean diffusion

00:23:26 --> 00:23:30
LLMs was one of the biggest topics that

00:23:28 --> 00:23:33
we saw at NeurIPS.

00:23:30 --> 00:23:35
Whether it's continuous diffusion LLMs

00:23:32 --> 00:23:37
or discrete diffusion LLMs.

00:23:34 --> 00:23:40
That's it's writing code now.

00:23:37 --> 00:23:42
It's creating proteins. I mean DeepMind

00:23:40 --> 00:23:44
has won the Nobel Prize for that. There

00:23:41 --> 00:23:46
is robotic policies, this diffusion

00:23:43 --> 00:23:49
policy thing which I think might

00:23:45 --> 00:23:51
actually be one of the biggest

00:23:48 --> 00:23:53
uses of it and will result in like

00:23:50 --> 00:23:55
robots actually working and Rosie the

00:23:52 --> 00:23:56
robot actually working.

00:23:54 --> 00:23:58
There's weather forecasting for the

00:23:55 --> 00:23:59
GenCast.

00:23:57 --> 00:24:01
It's the most accurate weather

00:23:58 --> 00:24:03
forecasting system in the world.

00:24:00 --> 00:24:06
It's really anything. Even like I

00:24:02 --> 00:24:08
mentioned Harrison working on the

00:24:05 --> 00:24:10
diffs, diffusion for failure sampling.

00:24:07 --> 00:24:11
Just like sampling from for failures and

00:24:09 --> 00:24:13
like bad things that could happen. We

00:24:10 --> 00:24:14
can do that as well. So a lot of the the

00:24:12 --> 00:24:16
products where we see people actually

00:24:14 --> 00:24:19
using AI, especially for things other

00:24:15 --> 00:24:20
than just text-based chat, a lot of them

00:24:18 --> 00:24:22
are using diffusion, especially on

00:24:19 --> 00:24:24
images, videos, increasingly now things

00:24:21 --> 00:24:26
like code, the life sciences. So yeah,

00:24:23 --> 00:24:28
pretty pretty wide birth of things.

00:24:25 --> 00:24:30
>> Yeah. In fact, I would say the only two

00:24:27 --> 00:24:32
holdouts right now where state of the

00:24:29 --> 00:24:33
art is not diffusion,

00:24:31 --> 00:24:37
diffusion has eaten all of AI except

00:24:32 --> 00:24:40
wo. AR LLMs still are outperforming

00:24:36 --> 00:24:42
and gameplay and things like AlphaGo.

00:24:39 --> 00:24:44
And so MCTS is still state of the art

00:24:41 --> 00:24:45
for those types of things. And so we

00:24:43 --> 00:24:48
haven't seen diffusion really take step

00:24:44 --> 00:24:50
in those two fold those two areas, but

00:24:47 --> 00:24:52
more research is needed. So to bring the

00:24:49 --> 00:24:54
conversation to a head now, how should

00:24:51 --> 00:24:56
people think about this research area?

00:24:53 --> 00:24:58
Either as researchers contributing to

00:24:55 --> 00:24:59
the field or as founders looking to

00:24:57 --> 00:25:01
build a new product?

00:24:58 --> 00:25:03
Yeah, I mean I would think about maybe

00:25:00 --> 00:25:05
this falls in two camps. If you're

00:25:02 --> 00:25:08
training models yourself

00:25:04 --> 00:25:09
or if you're using models and and you

00:25:07 --> 00:25:11
know, not in the business of training

00:25:08 --> 00:25:12
models. If you're in the business of

00:25:10 --> 00:25:14
training models, I would seriously look

00:25:11 --> 00:25:15
at diffusion. I don't care what your

00:25:13 --> 00:25:16
application is. You should be looking at

00:25:14 --> 00:25:20
his procedure

00:25:15 --> 00:25:22
ven if it's just to get a latent space

00:25:19 --> 00:25:24
that you can then train off of. And so

00:25:21 --> 00:25:26
there's no application in machine

00:25:23 --> 00:25:27
learning that I I don't think you should

00:25:25 --> 00:25:28
be heavily looking at diffusion

00:25:26 --> 00:25:30
procedures

00:25:28 --> 00:25:32
as a fundamental piece of of your

00:25:30 --> 00:25:34
training loop.

00:25:31 --> 00:25:37
In the in the case of people who are are

00:25:33 --> 00:25:39
not training models, I would just like

00:25:36 --> 00:25:41
update your prior on how good these

00:25:38 --> 00:25:44
things are getting. And if you just look

00:25:41 --> 00:25:47
at in the last 5 years on how good image

00:25:43 --> 00:25:50
neration got from Midjourney when it

00:25:46 --> 00:25:53
first came out to VEO and Sora and Flux

00:25:49 --> 00:25:55
and SD3 now, it's like it's like 1,000

00:25:52 --> 00:25:56
times better, right? The answer was just

00:25:54 --> 00:25:58
scale it up. And that takes time and

00:25:55 --> 00:26:00
that takes money and all those things

00:25:57 --> 00:26:02
and data. And now you apply that to

00:25:59 --> 00:26:05
proteins. You apply that to DNA. You

00:26:01 --> 00:26:07
apply that to robotics policies. A

00:26:04 --> 00:26:08
self-driving car. I mean it is

00:26:06 --> 00:26:10
kate to where the puck's going to go.

00:26:08 --> 00:26:12
All these things are going to work and

00:26:09 --> 00:26:14
we're watching it happen. It may cost

00:26:11 --> 00:26:16
money and time and you know, those kinds

00:26:13 --> 00:26:18
of things, but those are those are

00:26:15 --> 00:26:20
solvable things. Those are tractable

00:26:17 --> 00:26:22
problems that we can go solve. And also

00:26:19 --> 00:26:23
the core procedure of diffusion is

00:26:21 --> 00:26:25
getting better. That's another major A

00:26:22 --> 00:26:27
lot simpler. A lot simpler and it's

00:26:24 --> 00:26:28
getting like it's we're just working

00:26:26 --> 00:26:31
better. And so skate to where the puck's

00:26:27 --> 00:26:33
going to go. Bet that Rosie the robot

00:26:30 --> 00:26:35
will work in people's homes. Bet that

00:26:32 --> 00:26:36
he the protein folding is only going to

00:26:34 --> 00:26:38
get better and now we're going to apply

00:26:35 --> 00:26:40
that to DNA and all these other

00:26:37 --> 00:26:41
metabolomics and things like that.

00:26:39 --> 00:26:44
>> We we see founders develop new models

00:26:40 --> 00:26:47
for robotics or for text generation or

00:26:43 --> 00:26:48
for video using diffusion. Um and we see

00:26:46 --> 00:26:50
founders who are using all of these

00:26:47 --> 00:26:51
methods coming from other places build

00:26:49 --> 00:26:52
companies on top of them. And it seems

00:26:50 --> 00:26:54
like there's this whole new wave of

00:26:52 --> 00:26:55
companies that can be built on either

00:26:53 --> 00:26:56
end of this now. Right. I think it's

00:26:54 --> 00:26:58
going to redefine the entire economy.

00:26:56 --> 00:26:59
Thanks so much for joining us. We're

00:26:57 --> 00:27:01
going to keep digging in on topics

00:26:58 --> 00:27:02
related to machine learning research

00:27:00 --> 00:27:04
like diffusion. Can't wait to see you at

00:27:01 --> 00:27:06
he next one.

00:27:03 --> 00:27:06
>> [music]

<!-- YOUTUBE_TRANSCRIPT_END -->
