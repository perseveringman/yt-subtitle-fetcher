---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "DGtUUMNYLcc"
title: "Recursion Is The Next Scaling Law In AI"
video_url: "https://www.youtube.com/watch?v=DGtUUMNYLcc"
thumbnail_url: "https://i.ytimg.com/vi/DGtUUMNYLcc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=DGtUUMNYLcc"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-05-01T14:00:32.000Z"
upload_date: "2026-05-01"
duration_seconds: 2273
duration_human: "37:53"
view_count: 14489
like_count: 335
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-05-12T03:18:24.844Z"
---

# Recursion Is The Next Scaling Law In AI

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=DGtUUMNYLcc
- video_id: DGtUUMNYLcc
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-05-01T14:00:32.000Z
- upload_date: 2026-05-01
- duration: 37:53
- view_count: 14489
- like_count: 335
- has_subtitle: true
- language: en
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

A 7-million parameter model outperforming models a thousand times its size on tasks like ARC Prize. That's what recursive reasoning unlocks.

In this episode of Decoded, YC's Ankit Gupta and Francois Chaubard break down two recent papers on recursive AI models, HRMs and TRMs, that are achieving state-of-the-art results with a fraction of the parameters of today's largest models.

They explain why standard LLMs hit a fundamental ceiling on certain reasoning tasks, how recursion at inference time gives small models the compute depth to break through it, and what happens when you combine these ideas with the power of large-scale foundation models.

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

00:00 - Intro
00:35 - Model Foundations
01:15 - RNN Limits and LLM Contrast
02:36 - Reasoning Limits and Sorting Analogy
04:22 - HRM Paper Introduction
05:25 - HRM Architecture and Intuition
07:36 - HRM Results and Outer Loop
09:46 - TRM Paper Overview
11:20 - TRM Training and Fixed Point
13:30 - Detailed HRM Summary
20:46 - Comparing HRM and TRM
34:45 - Future Outlook and Outro

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
Welcome back to another episode of

00:00:01 --> 00:00:06
decoded. Today, I'm back with my C

00:00:03 --> 00:00:08
visiting partner Francois Chopard to

00:00:05 --> 00:00:10
talk about one of the most interesting

00:00:07 --> 00:00:12
recent trends in AI research, recursion.

00:00:09 --> 00:00:13
Specifically, we're going to talk about

00:00:11 --> 00:00:15
how we can improve a model's reasoning

00:00:12 --> 00:00:17
performance by using recursion at

00:00:14 --> 00:00:19
inference time, [music] rather than by

00:00:16 --> 00:00:20
just making the model bigger and bigger.

00:00:18 --> 00:00:22
There were two papers that made the

00:00:19 --> 00:00:24
power of this approach really clear in

00:00:21 --> 00:00:27
2025. One on hierarchical reasoning

00:00:23 --> 00:00:30
models or HRM, and another on tiny

00:00:26 --> 00:00:32
recursive models, TRM.

00:00:29 --> 00:00:32
>> [music]

00:00:35 --> 00:00:40
>> Francois, thanks for joining us. Um, can

00:00:38 --> 00:00:43
you tell us a little bit about these two

00:00:39 --> 00:00:46
models and what was so interesting about

00:00:42 --> 00:00:47
hem? Sure. I guess, um, to set up a

00:00:45 --> 00:00:50
little bit of a foundation, uh, you

00:00:46 --> 00:00:51
already did an amazing lecture on RNNs

00:00:49 --> 00:00:53
and LMs in one of the previous videos,

00:00:50 --> 00:00:56
so I won't overdo it, but just to give

00:00:52 --> 00:00:58
the cliff notes, um, an RNN is just a

00:00:55 --> 00:00:59
model that you, uh, recursively call

00:00:57 --> 00:01:04
again and again and again, um, on

00:00:59 --> 00:01:06
itself. And we were very much in the

00:01:03 --> 00:01:09
belief that this was required to get to

00:01:05 --> 00:01:12
AGI. Um, peak RNN use was probably until

00:01:08 --> 00:01:14
2016 with Alex Graves, um, NeurIPS

00:01:11 --> 00:01:16
keynote which is just fantastic, and all

00:01:13 --> 00:01:17
his his his his adaptive compute time

00:01:15 --> 00:01:19
work. So, this is about 10 years ago

00:01:16 --> 00:01:21
people were working on these models.

00:01:18 --> 00:01:23
This was in the era of LSTMs and LSTMs

00:01:20 --> 00:01:25
with attention. Yeah, and, uh, depending

00:01:22 --> 00:01:26
which professors you talked to, uh,

00:01:24 --> 00:01:28
before attention was invented.

00:01:26 --> 00:01:28
>> Yes. Yes, totally.

00:01:27 --> 00:01:30
>> [laughter]

00:01:27 --> 00:01:34
>> Yeah. Um, and, uh, and I think what

00:01:30 --> 00:01:35
really was the the the limiting step on,

00:01:33 --> 00:01:37
uh, RNNs in general was a thing called

00:01:34 --> 00:01:39
backprop through time, where you have to

00:01:36 --> 00:01:40
you roll out the model, and then to

00:01:38 --> 00:01:42
update the weights you need to

00:01:39 --> 00:01:43
approximate the gradient and you step

00:01:41 --> 00:01:46
back back back and you keep rolling out.

00:01:42 --> 00:01:48
And as the the model, um, gets, uh,

00:01:45 --> 00:01:50
bigger and bigger and as you roll out

00:01:47 --> 00:01:52
for more and more steps, then you have

00:01:49 --> 00:01:53
all these, uh, accumulation of errors

00:01:51 --> 00:01:54
and the gradient gets noisier and

00:01:52 --> 00:01:55
noisier, and then it could just kind of

00:01:53 --> 00:01:55
stops to work.

00:01:54 --> 00:01:57
>> you have these like vanishing or

00:01:55 --> 00:01:58
exploding gradient problems. And it's

00:01:56 --> 00:02:00
because if you have an input with 20

00:01:57 --> 00:02:02
steps, you're like multiplying these

00:01:59 --> 00:02:03
matrices 20 times, and that causes And

00:02:01 --> 00:02:05
we're talking about getting context

00:02:02 --> 00:02:06
length of like a million or like a

00:02:04 --> 00:02:08
billion. And so like it's not even just

00:02:05 --> 00:02:10
20, it's like a billion. And even worse,

00:02:07 --> 00:02:13
you have to retain the activations at

00:02:10 --> 00:02:14
every single step. And so like if this

00:02:12 --> 00:02:17
were happening in your brain, you would

00:02:13 --> 00:02:18
need like a million copies of your brain

00:02:16 --> 00:02:20
at every single activation so that I can

00:02:17 --> 00:02:21
backprop through it. There's tricks

00:02:19 --> 00:02:23
around this that you can you can do and

00:02:20 --> 00:02:24
you can do um

00:02:22 --> 00:02:26
uh gradient checkpointing and things

00:02:23 --> 00:02:28
like that to reduce that issue, but then

00:02:25 --> 00:02:30
you're just like trading off memory for

00:02:27 --> 00:02:32
um wall clock time and and compute.

00:02:29 --> 00:02:34
Right. So now if you contrast that with

00:02:31 --> 00:02:36
um LLMs, the ones that people are widely

00:02:33 --> 00:02:38
using, these while at face value they

00:02:35 --> 00:02:40
appear to be similar, at training time

00:02:37 --> 00:02:42
they're doing basically this one

00:02:39 --> 00:02:45
-shot feed forward process for every

00:02:41 --> 00:02:46
input, right? The the LLM, the

00:02:44 --> 00:02:48
transformer block can take all of the

00:02:45 --> 00:02:49
inputs in parallel. It's not actually

00:02:47 --> 00:02:51
iteratively going over them one at a

00:02:48 --> 00:02:52
time at train time. So you don't have

00:02:50 --> 00:02:53
this

00:02:51 --> 00:02:55
needing to store tons of activations

00:02:52 --> 00:02:57
problem or this giant vanishing

00:02:54 --> 00:02:59
radients problem. Yeah, exactly. Like

00:02:56 --> 00:03:01
it it's actually un like all happening

00:02:58 --> 00:03:04
in time in one shot, magically. And that

00:03:00 --> 00:03:05
was like the the trill or lower triangle

00:03:03 --> 00:03:07
trick that kind of happens, this causal

00:03:04 --> 00:03:10
mask that occurs. And so you actually do

00:03:06 --> 00:03:12
all all time steps in one shot, and you

00:03:09 --> 00:03:14
forward pass a feed forward model on all

00:03:11 --> 00:03:17
time steps in one shot, and you

00:03:13 --> 00:03:19
backwards in one shot, and it's amazing

00:03:16 --> 00:03:22
uh uh for uh train time in terms of like

00:03:19 --> 00:03:23
uh wall clock. Um it requires a lot of

00:03:21 --> 00:03:25
lops, and it still requires a lot of

00:03:22 --> 00:03:26
the memory. You still need it there, but

00:03:24 --> 00:03:29
you don't have the vanishing gradient

00:03:25 --> 00:03:31
issue. Um and the what you actually paid

00:03:28 --> 00:03:33
for that you have to give up is this

00:03:30 --> 00:03:33
latent reasoning thing and this

00:03:32 --> 00:03:35
compression [snorts]

00:03:32 --> 00:03:37
in the time direction. There is no

00:03:34 --> 00:03:39
compression in LLMs. Every single decode

00:03:36 --> 00:03:42
that I do, I still have to retain the

00:03:38 --> 00:03:43
ntire, you know, Shakespeare novel just

00:03:41 --> 00:03:44
o like decode a little bit. And in

00:03:42 --> 00:03:46
RNNs, you don't have to do that. It's

00:03:43 --> 00:03:48
all compressed in this hidden state that

00:03:45 --> 00:03:49
you kind of roll out. Wait, so so let's

00:03:47 --> 00:03:50
talk about that in a little bit more

00:03:48 --> 00:03:52
detail. Like

00:03:49 --> 00:03:53
you you refer to this

00:03:51 --> 00:03:55
um

00:03:52 --> 00:03:58
inherent reasoning ability. You know,

00:03:55 --> 00:03:59
many people think about LLMs as doing

00:03:57 --> 00:04:01
reasoning, and we're going to talk about

00:03:58 --> 00:04:03
hat a little bit later. But, help me

00:04:00 --> 00:04:05
understand where you see the biggest

00:04:02 --> 00:04:07
limitations in LLMs reasoning ability or

00:04:04 --> 00:04:10
is in terms of what the model does in an

00:04:06 --> 00:04:13
actual forward pass? Yeah. And so, um I

00:04:09 --> 00:04:17
guess we go back to chat GPT-2.

00:04:12 --> 00:04:19
GPT-2 was this uh landmark uh

00:04:16 --> 00:04:20
architecture and paper that um

00:04:18 --> 00:04:22
basically was just get next token, next

00:04:19 --> 00:04:24
token, and it kind of

00:04:21 --> 00:04:26
worked. And like, we just watched val

00:04:23 --> 00:04:28
oss go down, perplexity goes down.

00:04:25 --> 00:04:30
Like, the model just is more performant,

00:04:27 --> 00:04:31
looks better, starts to make some

00:04:29 --> 00:04:32
Shakespeare that actually sounds

00:04:30 --> 00:04:33
omewhat plausible.

00:04:31 --> 00:04:35
>> Right. And then we have to get these

00:04:33 --> 00:04:38
things to reason and to actually solve

00:04:35 --> 00:04:40
some really hard problems. And um and

00:04:37 --> 00:04:43
I've done extensive experiments on this,

00:04:39 --> 00:04:45
but like, if you take uh for example,

00:04:42 --> 00:04:46
sort. You get you have infinite amounts

00:04:44 --> 00:04:47
of unsorted lists, and you give it

00:04:45 --> 00:04:48
sorted lists.

00:04:46 --> 00:04:51
You keep feeding it to the model. It

00:04:48 --> 00:04:54
should work, right? Um it's actually

00:04:50 --> 00:04:56
impossible for the model to map from

00:04:53 --> 00:04:57
unsorted list to sorted list. If I have

00:04:55 --> 00:04:58
>> In a one-shot, basically, you're

00:04:56 --> 00:05:00
>> In a one-shot basis. It's like it's like

00:04:57 --> 00:05:03
literally that we know a theoretical

00:04:59 --> 00:05:05
ower bound that um for uh comparison

00:05:02 --> 00:05:09
sort, you can't do better than n log n

00:05:04 --> 00:05:10
uh steps. And if I have a list that's 31

00:05:08 --> 00:05:10
uh uh

00:05:09 --> 00:05:15
characters or elements long, and my

00:05:12 --> 00:05:17
transformer is 30,

00:05:14 --> 00:05:19
I run out of steps to do comparisons.

00:05:16 --> 00:05:21
It's not possible for me to like do all

00:05:18 --> 00:05:24
the steps that is needed to to be done.

00:05:20 --> 00:05:26
Um in HRMNTRM, they use uh Sudoku as an

00:05:23 --> 00:05:27
incompressible problem. Similarly, and

00:05:25 --> 00:05:29
so are mazes, those are incompressible

00:05:27 --> 00:05:30
problems. Rolling sum, incompressible

00:05:28 --> 00:05:32
problem. So, when you mentioned the

00:05:29 --> 00:05:34
sorting algorithm, when I think back to

00:05:31 --> 00:05:36
my algorithms class from college, the

00:05:33 --> 00:05:37
one way you could get faster than n log

00:05:35 --> 00:05:39
n in a sorting algorithm is if you had

00:05:36 --> 00:05:42
some access to an external memory cache.

00:05:38 --> 00:05:43
If you had some tape you could write to,

00:05:41 --> 00:05:45
then you can actually do faster than n

00:05:42 --> 00:05:47
log n by basically selectively putting

00:05:44 --> 00:05:49
things onto this memory. And I suspect

00:05:46 --> 00:05:50
hat's, you know, a key limitation of

00:05:48 --> 00:05:52
these LLMs in that because there's no

00:05:49 --> 00:05:54
external memory tape inbuilt into the

00:05:51 --> 00:05:57
model, you

00:05:54 --> 00:05:58
lose certain performance possibilities

00:05:56 --> 00:06:00
in terms of how fast you can go. That's

00:05:57 --> 00:06:01
right. And so, I guess like it it radix

00:05:59 --> 00:06:03
sort would be like the most common one.

00:06:00 --> 00:06:04
You had like you you depending on this

00:06:02 --> 00:06:07
the number of buckets that you have, you

00:06:03 --> 00:06:08
can kind of get from n log n to order n.

00:06:06 --> 00:06:10
You can't get less than n. You have to

00:06:07 --> 00:06:12
uch all the the elements. You're

00:06:09 --> 00:06:13
Sorry, you have to do that. And if you

00:06:11 --> 00:06:14
run out of

00:06:12 --> 00:06:17
uh

00:06:13 --> 00:06:19
um layers in in transformer layers in

00:06:16 --> 00:06:21
your uh neural network, then you ran out

00:06:18 --> 00:06:22
of chances to do that. Yeah, so this is

00:06:20 --> 00:06:24
just like a turn This is like going back

00:06:21 --> 00:06:25
to like Al- Alan Turing now and like a

00:06:23 --> 00:06:26
Turing machine, right? Like what's So,

00:06:24 --> 00:06:28
what's the analogy there exactly that we

00:06:25 --> 00:06:30
should think about in terms of LLMs I

00:06:27 --> 00:06:31
guess not quite satisfying how you think

00:06:29 --> 00:06:34
about a Turing machine. Yeah, so if we

00:06:30 --> 00:06:37
let's just talk about like chat GPT-2,

00:06:33 --> 00:06:38
GPT-2 the the original like no bells and

00:06:36 --> 00:06:40
whistles,

00:06:37 --> 00:06:42
um it's just a feedforward model. And

00:06:39 --> 00:06:44
so, it's just forward passing one step.

00:06:41 --> 00:06:47
And Taking an input, creating a bunch of

00:06:43 --> 00:06:50
outputs. And the Sudoku case, um

00:06:46 --> 00:06:52
if I have uh 50 different uh

00:06:49 --> 00:06:53
sequential steps, and it's provable that

00:06:51 --> 00:06:56
I can only do one given this

00:06:52 --> 00:06:59
information, then and I have this many

00:06:55 --> 00:07:01
layers, then that's all I can do. And

00:06:58 --> 00:07:03
the cheat the the cheat is the the chain

00:07:00 --> 00:07:05
of thought. And so, it's completely true

00:07:02 --> 00:07:07
that at test time, they are

00:07:04 --> 00:07:09
uh Turing complete, and you can simulate

00:07:06 --> 00:07:11
all Turing computable functions at test

00:07:08 --> 00:07:13
ime. But how do you get it to learn it?

00:07:10 --> 00:07:14
You need to train it. And that's where

00:07:12 --> 00:07:18
uh unless you're training it on

00:07:13 --> 00:07:19
human-labeled uh uh traces, uh for which

00:07:17 --> 00:07:20
there's a lot of problems like the

00:07:18 --> 00:07:21
Millennial Prize problem, we don't have

00:07:19 --> 00:07:23
the trace for it. Right. So, [laughter]

00:07:20 --> 00:07:24
we'd love to have the trace for it. Does

00:07:22 --> 00:07:26
it exist?

00:07:23 --> 00:07:28
Totally. Makes sense. Okay, so with that

00:07:25 --> 00:07:30
context in mind now, let's talk about

00:07:27 --> 00:07:32
hese two papers cuz I think that sets

00:07:29 --> 00:07:33
up a lot of

00:07:31 --> 00:07:36
the the the contrast we're going to draw

00:07:32 --> 00:07:37
between these papers and the models that

00:07:35 --> 00:07:40
people are maybe more used to. So, let's

00:07:36 --> 00:07:41
talk about HRMs first. Um walk me

00:07:39 --> 00:07:43
through a little bit about

00:07:41 --> 00:07:44
how this model works and some of the

00:07:42 --> 00:07:48
intuition behind it.

00:07:43 --> 00:07:50
Sure. So, um the the the

00:07:47 --> 00:07:52
This is directly in the lineage of RNNs.

00:07:49 --> 00:07:54
There's not that much novel from like

00:07:51 --> 00:07:57
the RNN standpoint, uh at least in my

00:07:53 --> 00:07:59
opinion. They do have this idea of uh

00:07:56 --> 00:08:00
you know, from a

00:07:58 --> 00:08:02
inspired by the brain where I have like

00:07:59 --> 00:08:03
um there's different parts of of the

00:08:01 --> 00:08:04
brain that operate on different

00:08:02 --> 00:08:06
frequencies. There's some that that

00:08:03 --> 00:08:08
operate at really high frequency, which

00:08:05 --> 00:08:09
is on the low level of the hierarchy.

00:08:07 --> 00:08:11
Some that operate in a really uh a low

00:08:08 --> 00:08:13
frequency, which is the higher level of

00:08:10 --> 00:08:14
the hierarchy. And the interplay between

00:08:12 --> 00:08:16
those things is really interesting.

00:08:13 --> 00:08:18
>> So, this is like literally in the human

00:08:15 --> 00:08:19
brain there's some like bio inspiration

00:08:17 --> 00:08:20
here, which is that like you have like

00:08:18 --> 00:08:21
different waves running at different

00:08:19 --> 00:08:23
frequencies at different parts of the

00:08:20 --> 00:08:25
brain or something like that. Cool. And

00:08:22 --> 00:08:27
um and I guess that interpret that's one

00:08:24 --> 00:08:29
interpretation of it uh of the way that

00:08:26 --> 00:08:31
hey they're talking about um you know,

00:08:28 --> 00:08:34
classifying these these hierarchies uh

00:08:30 --> 00:08:36
of frequencies. And the way the most

00:08:33 --> 00:08:38
interesting part, at least for me, is

00:08:35 --> 00:08:41
the way that they train the neural

00:08:37 --> 00:08:43
network. You take in some X, some input,

00:08:40 --> 00:08:46
um whether it's a incomplete Sudoku

00:08:42 --> 00:08:48
puzzle, uh a maze, or an Arc Prize

00:08:45 --> 00:08:53
challenge, um you uh

00:08:48 --> 00:08:56
do TL steps with the L the the lower

00:08:52 --> 00:08:58
level uh uh module, then you do go to go

00:08:55 --> 00:09:02
to H. You do that um

00:08:57 --> 00:09:04
TH times. And then you have uh N sub

00:09:01 --> 00:09:06
outer refinement steps. Yeah. So, you

00:09:03 --> 00:09:08
basically are like running through the

00:09:05 --> 00:09:10
input with a given

00:09:07 --> 00:09:12
uh matrix with with a given

00:09:09 --> 00:09:14
transformation repeatedly on it. And

00:09:11 --> 00:09:15
you're doing that through two levels of

00:09:13 --> 00:09:17
refinement. And then basically running

00:09:14 --> 00:09:19
that process several times. Yes. So,

00:09:16 --> 00:09:20
there's exactly three levels of

00:09:18 --> 00:09:22
recursion occurring here. There's the

00:09:19 --> 00:09:23
low level, there's the high level, and

00:09:21 --> 00:09:24
then there's the outer refinement steps.

00:09:22 --> 00:09:26
And we're calling it recursion cuz it's

00:09:23 --> 00:09:28
the same weights that are being applied

00:09:25 --> 00:09:29
repeatedly. We're not changing the

00:09:27 --> 00:09:31
weights in between these steps. Exactly

00:09:28 --> 00:09:35
right. You get to recurse on on the L

00:09:30 --> 00:09:37
net uh L TL times. You recurse on the TH

00:09:34 --> 00:09:39
and the TL this looped recursion TH

00:09:36 --> 00:09:43
times. And then you do n sub you do this

00:09:38 --> 00:09:44
whole outer refinement step n sub times.

00:09:42 --> 00:09:46
Cool. And so, what's the basic intuition

00:09:43 --> 00:09:47
for

00:09:45 --> 00:09:49
why that works? Like why does that

00:09:46 --> 00:09:50
produce an effective paper result? And

00:09:48 --> 00:09:52
what even were the results that this

00:09:49 --> 00:09:56
paper showed? Yeah. And so, I mean this

00:09:51 --> 00:09:57
got state of the art um on art prize uh

00:09:55 --> 00:10:00
one and two.

00:09:56 --> 00:10:03
Uh this was a only a 27 million million

00:09:59 --> 00:10:04
parameter model that was only trained on

00:10:02 --> 00:10:05
uh

00:10:03 --> 00:10:06
art prize. So, it's like a thousand

00:10:04 --> 00:10:07
inputs or something like that. Like

00:10:05 --> 00:10:09
puzzles basically.

00:10:06 --> 00:10:11
>> a thousand tasks which is extremely

00:10:08 --> 00:10:13
small. There is no pre-training at all.

00:10:11 --> 00:10:15
This is starts from like literally

00:10:12 --> 00:10:17
tabular rasa weights and it can

00:10:14 --> 00:10:20
outperform at that time. If we go back,

00:10:16 --> 00:10:22
you know, we had um 03, if you remember

00:10:19 --> 00:10:25
back way back when. [laughter]

00:10:21 --> 00:10:27
Um and it and it 03 gets zero.

00:10:25 --> 00:10:29
Literally zero and this got like

00:10:26 --> 00:10:31
something like 70% on art prize one at

00:10:28 --> 00:10:34
least um at the time which was just a

00:10:30 --> 00:10:35
huge breakthrough. And so, kind of the

00:10:33 --> 00:10:37
way you can kind of think this is

00:10:34 --> 00:10:40
like variable scoping. And so, like if I

00:10:36 --> 00:10:43
have like um you know, three nested uh

00:10:39 --> 00:10:45
functions, I guess the first uh uh the

00:10:42 --> 00:10:47
lowest level function has like scoped

00:10:44 --> 00:10:50
variables which they'll call zl which is

00:10:46 --> 00:10:51
the carry that inits to zero. A latent

00:10:49 --> 00:10:53
variable basically.

00:10:50 --> 00:10:54
>> in in like traditional um RNN

00:10:52 --> 00:10:56
literature, they would call this the

00:10:53 --> 00:10:57
hidden state. The low level hidden

00:10:55 --> 00:11:00
state. And I get to recurse recurse

00:10:56 --> 00:11:03
and then I pass back that zl

00:10:59 --> 00:11:05
back to the the outer scoped function,

00:11:02 --> 00:11:07
the higher level one. I let that one do

00:11:04 --> 00:11:09
ne iter. It goes back and calls the

00:11:06 --> 00:11:11
lower level again. It does it this whole

00:11:08 --> 00:11:13
thing in a third uh outer loop which is

00:11:10 --> 00:11:14
called the outer refinement step. Okay,

00:11:12 --> 00:11:15
but when you describe it like that, it

00:11:13 --> 00:11:17
seems like it would have the same

00:11:14 --> 00:11:19
backprop through time problem that you

00:11:16 --> 00:11:20
would have with RNNs. And I think they

00:11:18 --> 00:11:21
came up with

00:11:19 --> 00:11:22
clever trick to basically get around

00:11:20 --> 00:11:23
that. So, like what was that trick that

00:11:21 --> 00:11:24
hey figured out?

00:11:22 --> 00:11:26
>> And this is really the the crux of the

00:11:23 --> 00:11:29
paper that like differentiates it in my

00:11:25 --> 00:11:31
opinion in the literature is they

00:11:28 --> 00:11:33
instead of

00:11:30 --> 00:11:36
doing what Alex Graves did in all of his

00:11:32 --> 00:11:38
papers from Neural Turing Machines to

00:11:35 --> 00:11:41
adaptive compute time

00:11:37 --> 00:11:44
to a differential neural computers is he

00:11:40 --> 00:11:46
always back propped through all of the

00:11:43 --> 00:11:47
recursion steps. And he was limited by

00:11:45 --> 00:11:49
back prop through time so he could only

00:11:47 --> 00:11:50
make the model so big. You have all

00:11:48 --> 00:11:53
these issues, vanishing gradients, etc.

00:11:49 --> 00:11:56
And what they do is they they kind

00:11:52 --> 00:11:58
of have this DEQ

00:11:55 --> 00:11:59
method of doing fixed point iteration.

00:11:57 --> 00:12:02
It feels like deep equilibrium models.

00:11:58 --> 00:12:04
Yeah. deep equilibrium learning

00:12:01 --> 00:12:06
where if I

00:12:03 --> 00:12:08
take a batch

00:12:05 --> 00:12:09
and this is this is completely

00:12:07 --> 00:12:11
counterintuitive as a computer vision

00:12:08 --> 00:12:12
person cuz you'd never do this, but it

00:12:10 --> 00:12:14
actually does make sense and I'll

00:12:11 --> 00:12:16
explain why. If I take a batch of like

00:12:13 --> 00:12:18
ImageNet or CIFAR-10 and I forward pass

00:12:15 --> 00:12:20
through the model

00:12:17 --> 00:12:21
and I get some loss and I back prop and

00:12:19 --> 00:12:23
I update the weights.

00:12:20 --> 00:12:24
I would go get a different batch for the

00:12:22 --> 00:12:27
next one. But what they do instead is

00:12:23 --> 00:12:29
they actually do that 16 times. And so

00:12:26 --> 00:12:31
and as you do that you actually can see

00:12:28 --> 00:12:33
the change in your residuals get less

00:12:30 --> 00:12:35
and less and less. And why it actually

00:12:32 --> 00:12:37
makes sense is because when in the RNN

00:12:35 --> 00:12:40
case

00:12:36 --> 00:12:42
the ZL and the ZH which are the carry

00:12:39 --> 00:12:44
the task carry The hidden states. The

00:12:41 --> 00:12:46
hidden states start out at zeros. Those

00:12:43 --> 00:12:48
are zeros, then we go through this whole

00:12:45 --> 00:12:50
loopy recursion three the the the the at

00:12:47 --> 00:12:55
least the two loops the two lower loops

00:12:49 --> 00:12:58
T the the TL and TH steps and then I

00:12:54 --> 00:13:00
back prop just through the two modules

00:12:57 --> 00:13:01
just once and I don't recurse all the

00:12:59 --> 00:13:04
way back. I do a stop grad. I stop right

00:13:00 --> 00:13:07
here. And then there's a huge residual

00:13:03 --> 00:13:09
and then I don't reset ZL and ZH. I do

00:13:06 --> 00:13:12
it again at a different point in the

00:13:08 --> 00:13:14
carry or hidden variable space

00:13:12 --> 00:13:16
.

00:13:13 --> 00:13:18
And so you one can actually look at it

00:13:15 --> 00:13:20
as like a different batch every time

00:13:17 --> 00:13:21
ven though it's the same exact X's.

00:13:19 --> 00:13:23
Yeah, like the way I kind of think about

00:13:20 --> 00:13:24
it is like the the 16 or whatever that

00:13:22 --> 00:13:27
you're

00:13:23 --> 00:13:30
- recursing over it's like

00:13:26 --> 00:13:33
constructing a mini batch not from

00:13:29 --> 00:13:35
different inputs but from like different

00:13:32 --> 00:13:36
memory states basically. It's like

00:13:34 --> 00:13:39
across this

00:13:35 --> 00:13:42
hidden or carry memory access basically.

00:13:38 --> 00:13:46
And and that math holds and it works. It

00:13:41 --> 00:13:48
follows DEQ directly in the event that

00:13:45 --> 00:13:51
he ZL and the the delta and ZL and the

00:13:47 --> 00:13:52
delta and ZH

00:13:50 --> 00:13:53
go to zero.

00:13:51 --> 00:13:56
Mhm. Which it actually does doesn't do.

00:13:52 --> 00:13:58
And so we'll get to TRM but Alexia

00:13:55 --> 00:13:59
basically shows that it's just not the

00:13:57 --> 00:14:01
case and you can't actually apply this

00:13:58 --> 00:14:04
math. Um and that's

00:14:01 --> 00:14:04
why it's working that's not sufficient

00:14:03 --> 00:14:06
support for why it's working. We

00:14:03 --> 00:14:09
actually don't know why it's really

00:14:05 --> 00:14:11
working. Um and she figures out that you

00:14:08 --> 00:14:13
actually uh can

00:14:10 --> 00:14:14
backprop through all the way to the deep

00:14:12 --> 00:14:17
recursion which we're going to get into

00:14:13 --> 00:14:18
TRM in a second. Um and that actually

00:14:16 --> 00:14:20
improves performance much much more.

00:14:17 --> 00:14:22
Interesting. Okay, so before we get into

00:14:19 --> 00:14:23
TRM yeah on you know on this paper, you

00:14:21 --> 00:14:25
know, I think there's a bunch of

00:14:22 --> 00:14:27
different ways people have looked at

00:14:24 --> 00:14:28
his, right? In terms of

00:14:26 --> 00:14:30
how they came up with it and then why

00:14:27 --> 00:14:32
this may or may not be working. One is

00:14:29 --> 00:14:34
the sort of bioplausibility argument.

00:14:31 --> 00:14:36
Now as you know, I'm usually not

00:14:33 --> 00:14:37
super keen on these. You know, I think

00:14:35 --> 00:14:38
uh machine learning tends to have a long

00:14:36 --> 00:14:40
history of people starting with

00:14:37 --> 00:14:42
bioplausible arguments and then

00:14:40 --> 00:14:43
realizing that there's some variant of

00:14:41 --> 00:14:45
them that seems highly bio implausible

00:14:42 --> 00:14:46
that actually works better. I think you

00:14:44 --> 00:14:47
have example of lots of that sort of

00:14:45 --> 00:14:48
thing.

00:14:46 --> 00:14:51
>> classic the first deep deep learning

00:14:47 --> 00:14:53
paper that started this whole craziness

00:14:50 --> 00:14:54
is AlexNet and and in AlexNet there's

00:14:52 --> 00:14:57
actually this funny little thing called

00:14:54 --> 00:14:59
like local receptive activation or

00:14:56 --> 00:15:01
depression or something like that where

00:14:58 --> 00:15:03
like once this activation fires then

00:15:00 --> 00:15:04
like I have this like, you know, a

00:15:02 --> 00:15:06
refractory region or something like

00:15:04 --> 00:15:07
that. It actually doesn't work at all.

00:15:05 --> 00:15:09
And like it didn't work and you didn't

00:15:06 --> 00:15:11
need that and then VGG came out and said

00:15:08 --> 00:15:13
get rid of all that, just go deeper and

00:15:10 --> 00:15:15
3 by 3 conv and it actually just like

00:15:12 --> 00:15:17
outperforms dramatically. Right. And so

00:15:14 --> 00:15:18
like this is like always the maybe you

00:15:16 --> 00:15:20
need to do it to get accepted into

00:15:17 --> 00:15:21
NeurIPS and stuff. Yeah, sure. Totally.

00:15:19 --> 00:15:23
Totally, yeah. You're definitely the

00:15:20 --> 00:15:25
xpert here but what do you consider to

00:15:22 --> 00:15:26
be bio plausible and what's not? Well, I

00:15:24 --> 00:15:28
think that a lot of machine learning

00:15:25 --> 00:15:29
literature has overlapped a lot with

00:15:27 --> 00:15:32
people working in neuroscience. And I

00:15:28 --> 00:15:34
think it is very natural for us to ask

00:15:31 --> 00:15:35
questions about how does our brain work

00:15:33 --> 00:15:37
cuz our brain is like an incredible

00:15:34 --> 00:15:38
instrument that does a ton of computing,

00:15:36 --> 00:15:39
obviously, and does it in a very

00:15:37 --> 00:15:41
shockingly efficient manner, it seems

00:15:39 --> 00:15:44
like. And so a lot of machine learning

00:15:40 --> 00:15:47
research has for a long time sought

00:15:43 --> 00:15:49
analogue from how we think to understand

00:15:46 --> 00:15:52
our brain to work and try to encode that

00:15:48 --> 00:15:55
in various machine learning systems. So,

00:15:51 --> 00:15:57
from the very basic concept of what a

00:15:54 --> 00:15:58
neural network is, it's called a neural

00:15:56 --> 00:16:00
network cuz we think it's some basic

00:15:57 --> 00:16:02
model for what a neuron is, how certain

00:15:59 --> 00:16:03
activation functions work are meant to

00:16:01 --> 00:16:04
be inspired by certain biological

00:16:02 --> 00:16:05
premises.

00:16:03 --> 00:16:07
>> theme?

00:16:04 --> 00:16:09
The thing about them is that often we

00:16:06 --> 00:16:11
use bio plausibility to inspire us to

00:16:08 --> 00:16:13
come up with ideas,

00:16:10 --> 00:16:16
but we end up veering away from the bio

00:16:12 --> 00:16:18
plausible to something adjacent to them

00:16:15 --> 00:16:20
that is likely bio implausible, but that

00:16:17 --> 00:16:22
seems to work better. So, it runs better

00:16:19 --> 00:16:23
on a GPU. Exactly. It runs better on a

00:16:21 --> 00:16:25
GPU, it's more efficient in some

00:16:22 --> 00:16:27
capacity that is relevant to how we

00:16:24 --> 00:16:29
actually encode it in a computational

00:16:26 --> 00:16:31
system. So, I find thinking about bio

00:16:28 --> 00:16:32
plausibility fun and interesting and

00:16:30 --> 00:16:34
it's definitely a great way to inspire

00:16:31 --> 00:16:37
us to think about new things, but I tend

00:16:34 --> 00:16:38
to not be bounded by bio plausibility as

00:16:36 --> 00:16:40
when I think about what machine learning

00:16:37 --> 00:16:42
systems we should prioritize working on

00:16:39 --> 00:16:44
or think are particularly exciting other

00:16:41 --> 00:16:46
than as, you know, an interesting

00:16:43 --> 00:16:47
scientific launching point for a deeper

00:16:45 --> 00:16:49
exploration. I think the the version of

00:16:46 --> 00:16:50
this that I find more compelling is

00:16:48 --> 00:16:52
actually that original discussion we

00:16:49 --> 00:16:55
re having around automata theory,

00:16:51 --> 00:16:56
basically, and and honestly just

00:16:54 --> 00:16:57
actually like fundamental data

00:16:55 --> 00:16:59
structures and algorithms theory, which

00:16:56 --> 00:17:01
is that if you're running a complex

00:16:58 --> 00:17:03
algorithm, having access to sort of a

00:17:00 --> 00:17:05
memory cache is actually

00:17:02 --> 00:17:06
very useful for being able to run that

00:17:04 --> 00:17:08
algorithm efficiently. And I kind of

00:17:05 --> 00:17:10
think of this set of hidden states or

00:17:07 --> 00:17:14
carry as

00:17:09 --> 00:17:15
akin to a Turing machine tape or akin to

00:17:13 --> 00:17:18
the radix sort

00:17:14 --> 00:17:20
memory bank where you can basically

00:17:17 --> 00:17:22
train a model to use this memory cache

00:17:19 --> 00:17:23
in an intelligent way in a single

00:17:21 --> 00:17:25
forward pass so that you can get a more

00:17:22 --> 00:17:26
fficient time operation that would

00:17:24 --> 00:17:29
otherwise require some sort of more

00:17:25 --> 00:17:31
complicated reasoning. Yeah, I think

00:17:28 --> 00:17:35
that a point I wanted to make earlier is

00:17:30 --> 00:17:38
that like we did this COT stuff and this

00:17:34 --> 00:17:38
tool use thing as ways to get beyond the

00:17:38 --> 00:17:45
the the in the limitations of of

00:17:40 --> 00:17:46
GPT-2. And so the way that we get we you

00:17:44 --> 00:17:47
can actually have done this experiment

00:17:45 --> 00:17:49
you can actually if you give me infinite

00:17:47 --> 00:17:51
amounts of

00:17:48 --> 00:17:54
unsorted list and sorted list if I have

00:17:50 --> 00:17:56
can do chain of thought and I can do

00:17:53 --> 00:17:58
every single step and teach it to do

00:17:55 --> 00:18:00
every single step then I can actually

00:17:57 --> 00:18:03
get it to do to do sort and become a

00:17:59 --> 00:18:05
Turing machine at test time.

00:18:02 --> 00:18:08
And similarly an even cheaper one that

00:18:04 --> 00:18:10
is much easier to do is you teach it and

00:18:07 --> 00:18:12
you say hey there's this Python function

00:18:09 --> 00:18:14
called sort. Just call the function.

00:18:11 --> 00:18:15
>> the function. Like that's the easiest

00:18:13 --> 00:18:17
hing to do and you don't need backprop

00:18:14 --> 00:18:20
at all. And so those are the two hacks.

00:18:17 --> 00:18:23
Now well Francois this is solved. Like

00:18:19 --> 00:18:25
we're done, right? No because I needed

00:18:22 --> 00:18:26
to know what sort was. What happens if

00:18:24 --> 00:18:28
we didn't know what merge sort

00:18:25 --> 00:18:30
>> The chain of thought is not going to

00:18:27 --> 00:18:31
inherently discover sorting from first

00:18:29 --> 00:18:33
principles. It's it's finding it from

00:18:30 --> 00:18:34
our historical knowledge of everything

00:18:32 --> 00:18:36
it's trained on. Yeah, I mean this is

00:18:33 --> 00:18:38
like the the Demis had this whole thing

00:18:35 --> 00:18:40
about like the ultimate test is the

00:18:37 --> 00:18:41
Einstein test. Like go back to 1911 and

00:18:39 --> 00:18:43
then like have it rebuild all the

00:18:40 --> 00:18:45
physics up until now. Similarly, let's

00:18:42 --> 00:18:47
just pretend that we only had bubble

00:18:44 --> 00:18:49
sort. We knew other no other sort

00:18:46 --> 00:18:51
system. If you chain of thought it on

00:18:48 --> 00:18:52
all the bubble sort input and output it

00:18:50 --> 00:18:53
will only do bubble sort. In fact it

00:18:51 --> 00:18:54
won't even do bubble sort that well.

00:18:52 --> 00:18:55
Like

00:18:53 --> 00:18:56
>> [laughter]

00:18:54 --> 00:18:58
>> So this is the best situation and then

00:18:55 --> 00:18:59
the tool use of course it can only know

00:18:57 --> 00:19:02
bubble sort. I want to get to merge

00:18:58 --> 00:19:03
sort. How do I discover merge sort? And

00:19:01 --> 00:19:05
I think the the interesting thing just

00:19:02 --> 00:19:07
o

00:19:04 --> 00:19:09
emphasize here cuz it may not have been

00:19:06 --> 00:19:11
extremely clear is there already exists

00:19:08 --> 00:19:14
ome type of recursion that people are

00:19:10 --> 00:19:15
used to in LLMs which is chain of

00:19:13 --> 00:19:18
thought we mentioned earlier. But that

00:19:14 --> 00:19:20
is a recursion that's happening in the

00:19:17 --> 00:19:22
token space of the models outputs not

00:19:19 --> 00:19:24
inherent to the model itself. And that's

00:19:21 --> 00:19:27
ort of the fundamental limitation is

00:19:23 --> 00:19:29
that the model can only do

00:19:26 --> 00:19:31
a feed forward one shot output and then

00:19:28 --> 00:19:34
we basically just have this hack that if

00:19:30 --> 00:19:36
you keep letting it output things then

00:19:33 --> 00:19:38
it can read its outputs and do somewhat

00:19:35 --> 00:19:41
intelligent seeming things with it but

00:19:37 --> 00:19:42
it seems sort of be upper bounded by the

00:19:40 --> 00:19:44
data that we feed it that you know the

00:19:41 --> 00:19:46
labs are very hungrily buying right now

00:19:43 --> 00:19:48
and not the sort of like inherent

00:19:45 --> 00:19:51
underlying recursive reasoning. Yeah, so

00:19:47 --> 00:19:54
in both cases both hacks to solve this

00:19:50 --> 00:19:56
in COT and tool use um you're bounded by

00:19:53 --> 00:19:57
the bounds of human knowledge. In the

00:19:55 --> 00:19:59
vent it's outside the set of human

00:19:56 --> 00:20:01
knowledge then like

00:19:58 --> 00:20:03
you're kind of SOL. And so that's that's

00:20:00 --> 00:20:06
one. The other you make a great point

00:20:02 --> 00:20:08
about discrete versus latent space um

00:20:05 --> 00:20:11
reasoning in

00:20:07 --> 00:20:14
uh a discrete it can only output the

00:20:10 --> 00:20:17
carry in the case of LLM's has to be

00:20:13 --> 00:20:20
snapped back to some discrete token

00:20:16 --> 00:20:22
space. And in the case of RNN's in

00:20:19 --> 00:20:24
general they remain in this uh

00:20:21 --> 00:20:26
continuous latent space which is much

00:20:23 --> 00:20:27
igher dimensional. If you give me like

00:20:25 --> 00:20:29
a tape that's this long and you cut it

00:20:26 --> 00:20:30
up into 10 buckets like versus all the

00:20:29 --> 00:20:32
possible values

00:20:30 --> 00:20:33
>> Right. Exactly. Yeah. it's much more

00:20:31 --> 00:20:35
xpressive to being continuous space.

00:20:33 --> 00:20:37
But we can't train it that way cuz we

00:20:34 --> 00:20:39
actually you know cuz you're inhibited

00:20:36 --> 00:20:42
by backprop through time largely. Um and

00:20:39 --> 00:20:43
this is why this paper is so exciting.

00:20:41 --> 00:20:45
Okay, so before we then go over to the

00:20:42 --> 00:20:47
TRM paper um

00:20:44 --> 00:20:49
let's just summarize here. What matters

00:20:46 --> 00:20:51
most from the HRM paper that we should

00:20:48 --> 00:20:53
take away before we transition and

00:20:50 --> 00:20:55
contrast it with the TRM paper?

00:20:52 --> 00:20:57
Yeah, I think that the the number one

00:20:54 --> 00:20:59
piece uh to take away is this outer

00:20:56 --> 00:21:03
efinement loop. The outer refinement

00:20:58 --> 00:21:07
loop scales and there's a a great uh

00:21:02 --> 00:21:08
breakdown. Um basically the the Sapien

00:21:06 --> 00:21:09
uh

00:21:07 --> 00:21:10
authors

00:21:08 --> 00:21:12
which huge kudos for this paper cuz

00:21:10 --> 00:21:13
there's so many innovations in this

00:21:11 --> 00:21:15
paper,

00:21:12 --> 00:21:17
didn't really do like a scaling

00:21:14 --> 00:21:20
ablations on every single one of the

00:21:16 --> 00:21:22
inputs, but this guy Constantine at

00:21:19 --> 00:21:23
Francois Chollet's company Indico

00:21:21 --> 00:21:25
actually did. And it's this amazing

00:21:23 --> 00:21:28
breakdown that he put on posted on

00:21:25 --> 00:21:30
YouTube that you can go check out. But

00:21:27 --> 00:21:33
basically the main

00:21:29 --> 00:21:35
takeaway is that the outer final loops

00:21:32 --> 00:21:36
is the main

00:21:34 --> 00:21:39
beneficiary is the is the main reason

00:21:36 --> 00:21:41
why these things work so well, which

00:21:38 --> 00:21:45
Alexia basically takes the she found I

00:21:40 --> 00:21:46
think in parallel and and scales up and

00:21:44 --> 00:21:48
shows that you can get rid of a lot

00:21:45 --> 00:21:49
of all this other stuff. Okay, so like a

00:21:47 --> 00:21:51
lot of machine learning, the follow-on

00:21:48 --> 00:21:53
paper is basically delete 75% of the

00:21:50 --> 00:21:55
first paper as we've often done in

00:21:52 --> 00:21:57
videos here and keep the magic

00:21:54 --> 00:21:58
basically. So okay, so so what's the

00:21:56 --> 00:22:01
magic then? Like what's the part that

00:21:57 --> 00:22:03
actually matters in terms of what stays

00:22:00 --> 00:22:05
in the TRM paper and let's now contrast

00:22:02 --> 00:22:06
he core architectural differences

00:22:04 --> 00:22:08
between these two papers. Yeah, so I

00:22:05 --> 00:22:09
think that I guess if I break it down

00:22:07 --> 00:22:10
into

00:22:08 --> 00:22:12
two major things is this outer

00:22:09 --> 00:22:14
efinement loop thing is really great

00:22:11 --> 00:22:17
and works really well

00:22:13 --> 00:22:18
and that this like

00:22:16 --> 00:22:19
truncated backprop through time, which

00:22:17 --> 00:22:23
is backprop through time except I

00:22:18 --> 00:22:27
truncate at some time earlier point

00:22:22 --> 00:22:29
called T T back T equals one is actually

00:22:26 --> 00:22:30
is completely sufficient. And so

00:22:28 --> 00:22:33
truncated backprop through time T equals

00:22:29 --> 00:22:34
one completely sufficient and that's

00:22:32 --> 00:22:36
very counterintuitive.

00:22:33 --> 00:22:39
>> Which is what HRM found.

00:22:35 --> 00:22:40
HRM found and TRM does a little bit

00:22:38 --> 00:22:44
further rather than going through just

00:22:39 --> 00:22:46
one call to the H net and the L net, it

00:22:43 --> 00:22:49
actually goes through one full recursion

00:22:45 --> 00:22:52
loop. So if I do it 16 times, I just go

00:22:48 --> 00:22:53
back through one time and that is is is

00:22:51 --> 00:22:56
kind of sufficient. And if you do it

00:22:52 --> 00:22:58
with this like

00:22:55 --> 00:22:59
fixed point iteration thing, pseudo

00:22:57 --> 00:23:02
fixed point iteration thing where you

00:22:58 --> 00:23:05
keep hitting it with a at every single

00:23:01 --> 00:23:07
step, it like weirdly works and this

00:23:04 --> 00:23:08
batch size across the carry space like

00:23:06 --> 00:23:10
actually works.

00:23:08 --> 00:23:12
>> that part is also kept between these two

00:23:09 --> 00:23:14
models. Yeah. It seemed like another

00:23:11 --> 00:23:17
thing that changed was having these this

00:23:13 --> 00:23:19
ort of double layer of like, you know,

00:23:16 --> 00:23:21
higher order thinking and lower order

00:23:18 --> 00:23:22
thinking. It seems like it collapsed it

00:23:20 --> 00:23:24
down into just a single one. What's the

00:23:21 --> 00:23:26
intuition there? And how does that

00:23:23 --> 00:23:27
actually work in the TRM paper?

00:23:25 --> 00:23:29
>> Yeah, so it's interesting. Um she

00:23:26 --> 00:23:31
actually ablates having two separate

00:23:28 --> 00:23:32
networks versus just having one. I guess

00:23:30 --> 00:23:34
the more important space is the variable

00:23:31 --> 00:23:36
scope. Is that you should have low-level

00:23:33 --> 00:23:38
features and high-level features but the

00:23:35 --> 00:23:38
same network. And so the the the the the

00:23:37 --> 00:23:40
best performing

00:23:38 --> 00:23:40
>> The same network can extract both

00:23:39 --> 00:23:42
basically.

00:23:39 --> 00:23:44
>> Yeah, you weight share between the L-net

00:23:41 --> 00:23:46
and the H-net and it's just called net.

00:23:43 --> 00:23:48
And and you do just one transformer

00:23:45 --> 00:23:51
layer versus the four like they do in in

00:23:47 --> 00:23:53
Sapien and just whittle it down to one

00:23:50 --> 00:23:57
and do more of a recursion and that but

00:23:52 --> 00:23:59
you keep ZL and ZH to be distinct and

00:23:56 --> 00:24:01
separate. And she she calls it X and Y

00:23:58 --> 00:24:03
which I found very confusing. There you

00:24:00 --> 00:24:04
go. XYZ it was just very confusing and

00:24:02 --> 00:24:06
it's just like ZH and ZL is just

00:24:03 --> 00:24:09
cleaner. So, if you read the paper, Y is

00:24:05 --> 00:24:10
actually like latent space. It's it's

00:24:08 --> 00:24:11
like it's like Z basically.

00:24:09 --> 00:24:13
>> is not a label.

00:24:10 --> 00:24:15
Which [laughter] really threw me off

00:24:12 --> 00:24:17
but anyway, so I I

00:24:14 --> 00:24:18
we'll go through some code here and I'll

00:24:16 --> 00:24:20
walk you through it. So, I replaced all

00:24:17 --> 00:24:22
of her nomenclature and used the the

00:24:19 --> 00:24:24
Sapien notation which is much cleaner

00:24:22 --> 00:24:25
and and more straightforward to me at

00:24:23 --> 00:24:28
least. Okay, cool. And now before we,

00:24:24 --> 00:24:29
you know, dive into the code for a sec,

00:24:27 --> 00:24:31
like

00:24:28 --> 00:24:31
in terms of how these TRMs actually

00:24:30 --> 00:24:34
work, you know, it's it's pretty

00:24:31 --> 00:24:35
interesting because these this recursion

00:24:33 --> 00:24:37
advantage now gives you a bunch of

00:24:34 --> 00:24:40
advantages over transformers. So, rather

00:24:36 --> 00:24:41
than having, you know, 500 or 1,000 or a

00:24:39 --> 00:24:43
million or whatever transformer layers

00:24:40 --> 00:24:45
and having tons and tons of parameters,

00:24:42 --> 00:24:47
you get compute depth basically without

00:24:44 --> 00:24:48
his parameter depth.

00:24:46 --> 00:24:50
Um

00:24:47 --> 00:24:53
and the optimization process process

00:24:49 --> 00:24:54
looks like more of like an iterative um

00:24:52 --> 00:24:55
kind of like expectation maximization

00:24:53 --> 00:24:56
algorithm. Do you want to talk about how

00:24:54 --> 00:24:57
that worked in the TRM paper cuz I

00:24:55 --> 00:24:58
thought that was also pretty

00:24:56 --> 00:25:00
interesting.

00:24:57 --> 00:25:03
>> Um so both of them kind of had the same

00:24:59 --> 00:25:06
kind of uh uh um EM E feeling thing

00:25:02 --> 00:25:10
where like we uh update ZL condition

00:25:05 --> 00:25:14
upon the input X and ZH. Yep. Z the last

00:25:09 --> 00:25:17
ZH. ZH T minus one, let's say. Um,

00:25:13 --> 00:25:19
and then we keep updating ZL ZL ZL ZL ZL

00:25:16 --> 00:25:22
and we keep updating it. And then we go

00:25:18 --> 00:25:24
holding we update ZH condition upon uh

00:25:21 --> 00:25:26
ZL and actually it's just ZL, it's not

00:25:23 --> 00:25:28
even X. And then we just update update

00:25:25 --> 00:25:30
ZH and uh

00:25:27 --> 00:25:33
and the way to think about ZL and ZH is

00:25:29 --> 00:25:36
ZL is like your uh

00:25:32 --> 00:25:37
local scoped variables that are just

00:25:35 --> 00:25:39
being overwritten and updating updating

00:25:36 --> 00:25:41
. And then ZH and Azelia makes

00:25:38 --> 00:25:43
this point uh sorry Azelia Alexia makes

00:25:40 --> 00:25:47
this point um

00:25:42 --> 00:25:50
that is uh that is a candidate uh

00:25:46 --> 00:25:53
answer, a proposed latent answer that is

00:25:49 --> 00:25:55
just an embedding space away uh a one uh

00:25:52 --> 00:25:57
MLP look up away from the true answer.

00:25:54 --> 00:25:58
>> you're kind of like EMing just to like

00:25:56 --> 00:26:00
zoom out a little bit.

00:25:57 --> 00:26:03
You're you're kind of maximizing the

00:25:59 --> 00:26:06
probability of the correct, you know,

00:26:02 --> 00:26:08
information stored in your memory Mhm.

00:26:05 --> 00:26:11
conditioned on a given output.

00:26:07 --> 00:26:13
>> Mhm. And maximizing the right output

00:26:10 --> 00:26:14
conditioned on the information stored in

00:26:12 --> 00:26:15
your memory {quote} {unquote}

00:26:13 --> 00:26:17
in parallel. Yeah.

00:26:15 --> 00:26:20
>> And like that optimization algorithm

00:26:16 --> 00:26:22
leads to you ultimately

00:26:19 --> 00:26:24
learning a recursive method that stores

00:26:22 --> 00:26:25
the right information to this local

00:26:23 --> 00:26:28
memory basically and then outputs it I

00:26:25 --> 00:26:30
think. It really like if we actually

00:26:27 --> 00:26:31
think of Sudoku is actually a really

00:26:29 --> 00:26:33
natural way to think about what's

00:26:30 --> 00:26:34
actually happening under the hood where

00:26:32 --> 00:26:38
Sudoku is an incomplete puzzle. You

00:26:34 --> 00:26:39
can't guess every cell at any one time.

00:26:37 --> 00:26:41
You can actually it's designed where you

00:26:38 --> 00:26:43
can only guess one or two cells based on

00:26:41 --> 00:26:44
the available information. So it's not

00:26:42 --> 00:26:46
it's an incompressible problem. You

00:26:43 --> 00:26:47
actually can't do it unless you just

00:26:45 --> 00:26:48
randomly guessing and guessing and

00:26:46 --> 00:26:49
guessing which is

00:26:47 --> 00:26:51
uh uh

00:26:48 --> 00:26:53
very high combinatorial space. And so

00:26:50 --> 00:26:55
what uh the ZL is doing is is some type

00:26:53 --> 00:26:57
of let me try this, try that, do some

00:26:54 --> 00:26:59
computation, think about little things,

00:26:56 --> 00:27:00
and then and then it proposes and then

00:26:58 --> 00:27:02
it we go to condition upon like

00:26:59 --> 00:27:04
something that it may have found, it

00:27:01 --> 00:27:06
sends it to ZH, ZH fills it in, and now

00:27:03 --> 00:27:08
e have a little bit more of of a

00:27:05 --> 00:27:11
filled-in Sudoku puzzle. And the

00:27:07 --> 00:27:13
training process is training the

00:27:10 --> 00:27:14
algorithm to know to do that, right?

00:27:12 --> 00:27:16
It's like it's maximizing that. It's

00:27:13 --> 00:27:18
like, "Oh, this strategy for what you

00:27:15 --> 00:27:20
save tends to lead to correct output."

00:27:17 --> 00:27:21
>> Without chain of thought.

00:27:19 --> 00:27:22
That's the

00:27:20 --> 00:27:25
most important part. Is that if we had

00:27:22 --> 00:27:27
Sudoku and we knew how to solve Sudoku

00:27:24 --> 00:27:28
cuz like we were just, you know,

00:27:26 --> 00:27:30
dumb Homo sapiens that didn't know how

00:27:27 --> 00:27:32
to solve Sudoku, like it would just have

00:27:29 --> 00:27:34
solved it. And that's why it's cool cuz

00:27:31 --> 00:27:37
it actually is able to discover things

00:27:33 --> 00:27:38
without being teacher forced via chain

00:27:36 --> 00:27:39
of thought.

00:27:37 --> 00:27:42
>> Yeah. Should we look at some code? Let's

00:27:38 --> 00:27:45
do it. Okay, let's dive in and I would

00:27:41 --> 00:27:47
love to see what these papers or bottles

00:27:44 --> 00:27:48
look like just distilled down to their

00:27:46 --> 00:27:50
core essence. I know there's lots of

00:27:47 --> 00:27:51
details in how you train them, but kind

00:27:49 --> 00:27:54
of the core training algorithm. It'd be

00:27:50 --> 00:27:56
great to contrast the two methods. Yeah.

00:27:53 --> 00:27:59
So, I mean, they're remarkably similar.

00:27:55 --> 00:28:00
Um and so, largely one is and learning

00:27:58 --> 00:28:03
one is learning the other. But

00:27:59 --> 00:28:05
basically, you start out with some ZH

00:28:02 --> 00:28:08
and ZL that are just zeros. Um you have

00:28:04 --> 00:28:11
some input embedding space. You go from

00:28:07 --> 00:28:13
X raw to X, which is the maze state or

00:28:10 --> 00:28:16
whatever it is, uh initial maze state.

00:28:12 --> 00:28:18
And then with no grad, uh you don't pass

00:28:15 --> 00:28:19
any gradients back through this. You

00:28:17 --> 00:28:21
>> So, this is the trick, basically, to not

00:28:18 --> 00:28:24
backprop backprop through time. Here are

00:28:20 --> 00:28:26
two of the three recursion levels. So,

00:28:23 --> 00:28:29
you have this is like the the the they

00:28:25 --> 00:28:31
do this just for for for simplicity, but

00:28:28 --> 00:28:35
I hit ZL

00:28:30 --> 00:28:38
uh T low times, and then uh once for

00:28:34 --> 00:28:39
modulo T T low, then I hit the ZH and I

00:28:37 --> 00:28:42
do it again and again. And like you

00:28:38 --> 00:28:45
said, I'm updating ZL condition upon ZH

00:28:42 --> 00:28:47
and X, and then I update ZH condition

00:28:44 --> 00:28:50
upon ZL. Right. So, this is the like

00:28:46 --> 00:28:51
xpectation maximization style. Exactly.

00:28:49 --> 00:28:54
And then, you don't really need this.

00:28:50 --> 00:28:55
This is like just for clean cleanliness

00:28:53 --> 00:28:57
to show clearly that there's no

00:28:54 --> 00:28:59
gradients occurring above this line.

00:28:56 --> 00:29:01
>> freezing the weights past that.

00:28:58 --> 00:29:03
>> Exactly. And then, I hit LNet and HNet

00:29:00 --> 00:29:04
one more time. Which is the same thing

00:29:02 --> 00:29:06
as up above. So, this is just okay, it's

00:29:03 --> 00:29:07
literally just the no grad thing running

00:29:05 --> 00:29:09
one more time. Cool.

00:29:06 --> 00:29:11
>> Yeah. And just make it really clear. And

00:29:08 --> 00:29:14
then, there you go. And that's your HRM

00:29:10 --> 00:29:17
model. Cool. That's quite simple.

00:29:13 --> 00:29:18
>> two and two two and two is completely

00:29:16 --> 00:29:20
sufficient.

00:29:17 --> 00:29:22
If you actually go much higher,

00:29:19 --> 00:29:24
Constantine showed very clearly that it

00:29:21 --> 00:29:25
doesn't actually help.

00:29:23 --> 00:29:26
So, that's two of the three recursions

00:29:24 --> 00:29:27
you said. The third happens in the

00:29:25 --> 00:29:29
actual training loop.

00:29:26 --> 00:29:31
>> in the train loop and at the test loop.

00:29:28 --> 00:29:34
They both have this

00:29:30 --> 00:29:36
MTest or N supervision, which

00:29:33 --> 00:29:38
Alexia calls deep supervision. They call

00:29:35 --> 00:29:40
it outer refinement steps. It's just

00:29:38 --> 00:29:43
whatever you want to call it, call it N

00:29:39 --> 00:29:44
sub. And so, you do this N sub times

00:29:42 --> 00:29:46
during training. And then, during test

00:29:43 --> 00:29:49
ime, there's a different hyperparameter

00:29:45 --> 00:29:51
for how many times it recurses over each

00:29:48 --> 00:29:52
model, which is MTest basically.

00:29:50 --> 00:29:54
>> They're actually the same. And so, the

00:29:51 --> 00:29:56
se this and this we can probably just

00:29:53 --> 00:29:59
call this the same.

00:29:55 --> 00:30:01
And but, it's it's it's the same. And if

00:29:58 --> 00:30:03
you actually Constantine does a good job

00:30:00 --> 00:30:08
of this. If you actually train

00:30:02 --> 00:30:11
on 16 and you test on only one,

00:30:07 --> 00:30:13
you get like 7/8 of the performance or

00:30:10 --> 00:30:15
like almost all the performance. So,

00:30:12 --> 00:30:18
it's actually quite interesting that

00:30:15 --> 00:30:19
his is just redundant too much compute

00:30:17 --> 00:30:21
and it doesn't actually help you all

00:30:18 --> 00:30:24
that much. So, setting this to one is

00:30:21 --> 00:30:25
actually like But, presumably for like

00:30:23 --> 00:30:27
more complicated problems, having more

00:30:24 --> 00:30:28
test time compute is still useful is

00:30:26 --> 00:30:31
like the reason you would set them up

00:30:27 --> 00:30:35
that way. For sure. And so, we call our

00:30:30 --> 00:30:37
HRM, we get some loss, we backprop

00:30:34 --> 00:30:40
through just the those two little

00:30:36 --> 00:30:43
parts here, and then we step. We zero

00:30:39 --> 00:30:45
ut the gradient, but we do not update

00:30:42 --> 00:30:47
ZH and ZL. These are still the same in

00:30:44 --> 00:30:48
it. So, that's the really important

00:30:46 --> 00:30:50
detail there.

00:30:47 --> 00:30:52
And then so we go back, we pass in the

00:30:49 --> 00:30:55
ZH and the ZL from the previous one. So,

00:30:51 --> 00:30:57
now this is actually not the same batch.

00:30:54 --> 00:30:59
Right. Because we have updated ZH and

00:30:56 --> 00:31:01
ZL. So, it's in a different part of the

00:30:58 --> 00:31:04
latent space. Cool. Yeah, and that's the

00:31:00 --> 00:31:07
key like mini batch construction through

00:31:03 --> 00:31:09
memory space concept. Yeah, cool.

00:31:06 --> 00:31:10
>> And then at test time, it's simply the

00:31:08 --> 00:31:13
three loops. So, there's your outer

00:31:09 --> 00:31:15
final loop, which turns out like just at

00:31:12 --> 00:31:16
rain time doesn't matter. Train time

00:31:14 --> 00:31:17
recursion was important, but test time

00:31:15 --> 00:31:19
recursion was actually not that

00:31:16 --> 00:31:21
important, which is kind of kind of

00:31:18 --> 00:31:23
counterintuitive. And then the HRM

00:31:20 --> 00:31:26
inside that has your two other loops.

00:31:22 --> 00:31:27
>> Makes sense. And and that's it. So,

00:31:25 --> 00:31:28
pretty simple. Now, the other two are

00:31:26 --> 00:31:30
the same.

00:31:27 --> 00:31:32
>> the only two changes, the main two

00:31:29 --> 00:31:35
changes here is that they collapse L net

00:31:31 --> 00:31:37
and H net into just net. Great. They and

00:31:35 --> 00:31:38
it's important detail, these are four

00:31:36 --> 00:31:40
transformer layers, this is four

00:31:37 --> 00:31:41
transformer layers, and this is just one

00:31:39 --> 00:31:43
transformer layer.

00:31:40 --> 00:31:45
Uh and Alexia actually shows that going

00:31:43 --> 00:31:47
deeper actually didn't help. Yeah, and

00:31:44 --> 00:31:48
actually on some tasks, it was just a

00:31:46 --> 00:31:49
feed forward net actually worked just as

00:31:47 --> 00:31:51
well as a transformer there, right? It

00:31:48 --> 00:31:52
was like on Sudoku, I think. Yeah.

00:31:50 --> 00:31:54
>> Sudoku, MLP actually outperformed the

00:31:51 --> 00:31:57
attention. It was

00:31:53 --> 00:31:59
it scored zero on the maze.

00:31:56 --> 00:32:01
The MLP scored zero on the maze. And so,

00:31:58 --> 00:32:03
there's it's not clear it's not obvious

00:32:00 --> 00:32:05
that the transformer is always better.

00:32:03 --> 00:32:08
Um so, there's the weight sharing. And

00:32:04 --> 00:32:09
then instead of going back just the one

00:32:07 --> 00:32:11
two,

00:32:08 --> 00:32:13
the H this

00:32:10 --> 00:32:15
back propping through just these two,

00:32:12 --> 00:32:17
you actually back prop through one

00:32:15 --> 00:32:19
latent recursion step all the way

00:32:16 --> 00:32:20
through one latent recursion step. So,

00:32:18 --> 00:32:21
let me just walk through this a little

00:32:19 --> 00:32:23
bit.

00:32:20 --> 00:32:25
So, we have same thing here.

00:32:22 --> 00:32:28
>> point, yeah. It's mainly the same thing

00:32:24 --> 00:32:31
here. We're doing this six times.

00:32:27 --> 00:32:33
And then we we go one more time here.

00:32:30 --> 00:32:35
And then we do our deep recursion. This

00:32:32 --> 00:32:37
the outer loop.

00:32:34 --> 00:32:39
N sub

00:32:36 --> 00:32:41
times. And so, again, we have the no

00:32:38 --> 00:32:43
grad, we have the detach, and then this

00:32:40 --> 00:32:45
where it's different. So, I I am

00:32:42 --> 00:32:46
calling this latent recursion after the

00:32:44 --> 00:32:48
detach.

00:32:45 --> 00:32:50
>> Yeah. So, it's one full recursive loop

00:32:47 --> 00:32:52
is happening with that problem. And so,

00:32:49 --> 00:32:54
that's the main uh difference in the

00:32:51 --> 00:32:55
optimization. Otherwise, it's

00:32:53 --> 00:32:56
effectively the same.

00:32:54 --> 00:32:59
And then it outputs, and then you're

00:32:55 --> 00:33:01
good to go, and you train it [snorts]

00:32:58 --> 00:33:03
uh exactly as the same way before.

00:33:00 --> 00:33:06
And then at test time, it's the same

00:33:02 --> 00:33:08
thing uh again. And so, largely the

00:33:05 --> 00:33:09
same. Cool. And so, in many ways, it's

00:33:07 --> 00:33:11
ort of a simplification, right? You're

00:33:08 --> 00:33:15
collapsing certain parts of it. You're

00:33:10 --> 00:33:16
simplifying this net architecture.

00:33:14 --> 00:33:18
It's slightly more complicated along

00:33:15 --> 00:33:20
this back prop through time this back

00:33:17 --> 00:33:21
prop through time part because

00:33:19 --> 00:33:22
you're actually back propping through

00:33:20 --> 00:33:24
more than you did before, but it's like

00:33:21 --> 00:33:25
taking a bunch of lessons from the first

00:33:23 --> 00:33:27
one and basically simplifying most of

00:33:24 --> 00:33:29
it. Which is actually why she need I

00:33:26 --> 00:33:31
think is why she needs to make the model

00:33:28 --> 00:33:33
smaller. And so, it's a 28 million

00:33:30 --> 00:33:35
parameter model for HRM. Now, she brings

00:33:32 --> 00:33:38
it down to a 7 million parameter model.

00:33:34 --> 00:33:42
It actually gets from 70% to 87% on

00:33:37 --> 00:33:43
uh um on our prize uh one, and uh and

00:33:41 --> 00:33:46
oes actually quite well on our prize

00:33:42 --> 00:33:47
two as well. And so, um yeah, so she

00:33:45 --> 00:33:50
makes the small the model model, you

00:33:46 --> 00:33:53
know, uh three, four times smaller,

00:33:49 --> 00:33:55
um but because it has that recursion, um

00:33:52 --> 00:33:58
it it actually outperforms. And there is

00:33:54 --> 00:34:00
one There's this uh researcher named

00:33:57 --> 00:34:01
Melanie Mitchell that writes this book

00:33:59 --> 00:34:02
uh

00:34:00 --> 00:34:05
talking about this very phenomenon,

00:34:01 --> 00:34:07
which is like it is um sufficient, not

00:34:04 --> 00:34:10
necessary to go uh bigger and get better

00:34:07 --> 00:34:13
performance, um and it is sufficient and

00:34:09 --> 00:34:15
not necessary to to add more recursion.

00:34:12 --> 00:34:17
And so, where I'm really excited is what

00:34:14 --> 00:34:19
happens if you do both. Right. And

00:34:16 --> 00:34:21
you're still limited by back prop

00:34:18 --> 00:34:24
through time. Even uh Alexia is is

00:34:20 --> 00:34:27
limited by back prop that last step um

00:34:23 --> 00:34:29
from a memory perspective for sure. Um

00:34:26 --> 00:34:31
and so, if you can make the model really

00:34:28 --> 00:34:32
big, and you have a lots of recursion,

00:34:30 --> 00:34:35
and we do something else other than

00:34:31 --> 00:34:37
backprop through time. Uh then we can

00:34:34 --> 00:34:39
get exact all the benefits of this and

00:34:36 --> 00:34:41
all the benefits of the giant LLMs and

00:34:38 --> 00:34:43
then you can get some crazy stuff. So

00:34:40 --> 00:34:44
now to wrap up, why don't we talk a

00:34:42 --> 00:34:46
little bit about the bigger picture?

00:34:43 --> 00:34:47
What does this mean for the field of AI

00:34:45 --> 00:34:49
research? How should people think about

00:34:46 --> 00:34:51
where these models fit into the current

00:34:48 --> 00:34:52
span of research happening, especially

00:34:50 --> 00:34:54
given that it seems like a bit of a

00:34:51 --> 00:34:55
departure from a lot of the methods that

00:34:53 --> 00:34:57
people are used to hearing about and

00:34:54 --> 00:34:58
increasingly seeing products that people

00:34:56 --> 00:35:01
use?

00:34:57 --> 00:35:03
Well, I think for one, uh this from the

00:35:00 --> 00:35:04
arguments that Schmidhuber makes and

00:35:02 --> 00:35:06
what we've talked about today, recursion

00:35:03 --> 00:35:08
is important and it's not going away and

00:35:05 --> 00:35:10
it they clearly the benefit is here of

00:35:08 --> 00:35:12
adding recursion to models and you've

00:35:09 --> 00:35:14
seen things like the recursion language

00:35:11 --> 00:35:17
models at Google um that are are pretty

00:35:13 --> 00:35:18
powerful and cool. Um and so uh that's

00:35:16 --> 00:35:21
definitely one piece that's I

00:35:18 --> 00:35:22
don't think going away anytime soon. Um

00:35:20 --> 00:35:25
the next one is this outer refinement

00:35:21 --> 00:35:27
loop, like back T TBTT, like T equals

00:35:24 --> 00:35:29
one truncated backprop through time T

00:35:26 --> 00:35:30
equals one. I think that that is a

00:35:28 --> 00:35:33
really powerful idea, the fact that that

00:35:29 --> 00:35:34
works so well. Uh we have yet to really

00:35:32 --> 00:35:35
explore it that

00:35:33 --> 00:35:37
extremely

00:35:34 --> 00:35:37
really understand what's happening

00:35:36 --> 00:35:38
there.

00:35:36 --> 00:35:40
Um

00:35:37 --> 00:35:42
and then the third is that idea of like,

00:35:39 --> 00:35:44
okay, we know that recursion works, we

00:35:41 --> 00:35:45
have these tiny

00:35:43 --> 00:35:47
recursive models that are 7 million

00:35:44 --> 00:35:49
parameters, they can solve what

00:35:46 --> 00:35:52
a

00:35:48 --> 00:35:54
hundred million hundred billion hundred

00:35:51 --> 00:35:56
>> 100 billion, billion parameter model

00:35:53 --> 00:35:59
can't solve trained on the entire

00:35:55 --> 00:36:01
internet and a 7 million parameter wins.

00:35:58 --> 00:36:02
Like the right answer is to like take

00:36:00 --> 00:36:04
the amazingness here and take the

00:36:01 --> 00:36:06
amazingness here, which probably is

00:36:03 --> 00:36:09
already in Gemini already or some of

00:36:05 --> 00:36:11
these it might be at least in some part.

00:36:08 --> 00:36:15
Um but when you when you take um the

00:36:10 --> 00:36:16
benefit of both these TRMs and these

00:36:14 --> 00:36:18
giant models and you actually slam them

00:36:15 --> 00:36:19
together, I think that it's just going

00:36:17 --> 00:36:19
to take off and it's going to be really

00:36:18 --> 00:36:20
huge.

00:36:19 --> 00:36:22
>> Yeah, one of the things that's really

00:36:19 --> 00:36:23
interesting about these TRMs and each of

00:36:21 --> 00:36:25
them is they're not general purpose

00:36:22 --> 00:36:26
models, right? These were task-specific

00:36:24 --> 00:36:28
models, right? The model trained to do

00:36:25 --> 00:36:29
Sudoku cannot do Arc Prize inherently,

00:36:27 --> 00:36:31
it has to be trained on the our prize

00:36:28 --> 00:36:33
set to do so.

00:36:30 --> 00:36:36
Versus the alarms that are used on these

00:36:32 --> 00:36:37
tasks are general purpose models that

00:36:35 --> 00:36:40
maybe get some additional fine-tuning

00:36:36 --> 00:36:41
data or in-context learning data on

00:36:39 --> 00:36:43
those tasks. And so, I think that's

00:36:41 --> 00:36:44
where the interesting overlap might come

00:36:42 --> 00:36:46
is if you can make these more general

00:36:43 --> 00:36:48
purpose agents that

00:36:45 --> 00:36:49
can somehow be general purpose in the

00:36:47 --> 00:36:51
way that the sort of next token

00:36:48 --> 00:36:53
prediction algorithm has given us and do

00:36:50 --> 00:36:56
more complex reasoning to achieve that.

00:36:52 --> 00:36:58
Seems like you can have really fish-dog

00:36:55 --> 00:37:00
architectures to do scalable reasoning.

00:36:57 --> 00:37:02
Right. And And like a lot of the view of

00:36:59 --> 00:37:04
what these LLMs are doing is finding

00:37:01 --> 00:37:06
really amazing embedding representation

00:37:04 --> 00:37:08
spaces. Yes.

00:37:05 --> 00:37:10
>> But reasoning inside that that space is

00:37:07 --> 00:37:11
actually not done all that much.

00:37:09 --> 00:37:12
>> Yeah, it's it's always through the token

00:37:10 --> 00:37:13
space that happens.

00:37:11 --> 00:37:16
>> the token space. And so, like what you

00:37:12 --> 00:37:19
can imagine is we found mapping from

00:37:15 --> 00:37:21
token space or from vision from pixels

00:37:18 --> 00:37:23
ome really cool latent space where like

00:37:20 --> 00:37:25
things are just nicely semantically

00:37:22 --> 00:37:27
separated and we can, you know, makes it

00:37:24 --> 00:37:30
really easy for downstream tasks to do.

00:37:26 --> 00:37:31
But now in that space, use this

00:37:29 --> 00:37:33
like tiny reasoning models, use some

00:37:30 --> 00:37:35
type of

00:37:32 --> 00:37:37
recursion inside that and train those

00:37:34 --> 00:37:39
those that model on that a little

00:37:36 --> 00:37:39
small model on that reasoning space.

00:37:38 --> 00:37:40
>> [music]

00:37:38 --> 00:37:41
>> I think that's going to be the way to

00:37:39 --> 00:37:43
work. Pranswa, thanks so much for

00:37:40 --> 00:37:45
breaking it all down for us. See you all

00:37:42 --> 00:37:47
in the next episode of Decoded. Thank

00:37:44 --> 00:37:47
you.

00:37:49 --> 00:37:52
>> [music]

<!-- YOUTUBE_TRANSCRIPT_END -->
