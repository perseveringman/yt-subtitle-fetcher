---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "0tsIbarSPLk"
title: "Text to Video: The Next Leap in AI Generation"
video_url: "https://www.youtube.com/watch?v=0tsIbarSPLk"
thumbnail_url: "https://i.ytimg.com/vi/0tsIbarSPLk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=0tsIbarSPLk"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2024-02-17T20:05:21.000Z"
upload_date: "2024-02-17"
duration_seconds: 2346
duration_human: "39:06"
view_count: 3552
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:19:12.708Z"
---

# Text to Video: The Next Leap in AI Generation

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=0tsIbarSPLk
- video_id: 0tsIbarSPLk
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2024-02-17T20:05:21.000Z
- upload_date: 2024-02-17
- duration: 39:06
- view_count: 3552
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

General Partner Anjney Midha explores the cutting-edge world of text-to-video AI with AI researchers Andreas Blattmann and Robin Rombach. 

Released in November, Stable Video Diffusion is their latest open-source generative video model, overcoming challenges in size and dynamic representation.

In this episode Robin, and Andreas share why translating text to video is complex, the key role of datasets, current applications, and the future of video editing.

Topics Covered: 
00:00 - Text to Video: The Next Leap in AI Generation
02:41 - The Stable Diffusion backstory
04:35 - Diffusion vs autoregressive models
07:17 - The benefits of single step sampling
10:55 - Why generative video?
13:10 - Understanding physics through AI video
14:53 - The challenge of creating generative video
18:43 - Data set selection and training
21:24 - Structural consistency and 3D objects
23:51 - Incorporating LoRAs
28:47 - How should creators think about these tools?
31:41 - Open challenges in video generation 
32:35 - Infrastructure challenges and future research

Resources: 
Find Robin on Twitter: https://twitter.com/robrombach
Find Andreas on Twitter: https://twitter.com/andi_blatt
Find Anjney on Twitter: https://twitter.com/anjneymidha
Stay Updated: 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://twitter.com/stephsmithio 

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
this is a conversation I've been super

00:00:01 --> 00:00:06
excited about what is stable diffusion

00:00:03 --> 00:00:08
you type in a text prompt and it

00:00:05 --> 00:00:10
generates an image why was stable video

00:00:07 --> 00:00:11
the thing that you guys decided to

00:00:09 --> 00:00:13
prioritize I think we like challenges I

00:00:11 --> 00:00:16
think compute constraints can drive

00:00:12 --> 00:00:19
Innovation you you always want to try to

00:00:15 --> 00:00:21
improve your efficiency it's already

00:00:18 --> 00:00:26
such an incredible Leap Forward right we

00:00:21 --> 00:00:26
really excited to see what what will

00:00:25 --> 00:00:31
happen today many people are familiar

00:00:28 --> 00:00:34
with text to text or text to image AI

00:00:30 --> 00:00:38
models just think chat gbt or mid

00:00:33 --> 00:00:40
Journey but what about text to video

00:00:37 --> 00:00:42
well several companies are working hard

00:00:39 --> 00:00:45
to make that a reality but for many

00:00:41 --> 00:00:47
reasons it's a lot harder for one think

00:00:44 --> 00:00:50
about size you'll often find text files

00:00:47 --> 00:00:53
in the kilobytes images maybe in the

00:00:49 --> 00:00:56
megabytes but it's not uncommon to find

00:00:52 --> 00:00:58
highquality video content in the

00:00:55 --> 00:01:01
gigabytes plus video requires a much

00:00:57 --> 00:01:03
more Dynamic representation of the world

00:01:00 --> 00:01:05
incorporating the physics of movement 3D

00:01:02 --> 00:01:07
objects and more I mean imagine the hand

00:01:04 --> 00:01:10
challenge in text to image but in this

00:01:06 --> 00:01:12
case it's hands squared but this is not

00:01:09 --> 00:01:14
stopping the researchers behind stable

00:01:11 --> 00:01:17
video diffusion which as of November

00:01:13 --> 00:01:20
21st was released as a state of the-art

00:01:16 --> 00:01:21
open- source generative video model so

00:01:19 --> 00:01:24
today you'll get to hear from two of

00:01:20 --> 00:01:26
those very researchers Andreas blatman

00:01:23 --> 00:01:29
d Robin robok Robin by the way is also

00:01:25 --> 00:01:31
the co-inventor of stable diffusion one

00:01:28 --> 00:01:33
of the most popular open source text

00:01:30 --> 00:01:36
image models so in today's episode

00:01:32 --> 00:01:38
together with a16z General partner a

00:01:35 --> 00:01:40
maida you'll get to hear firsthand what

00:01:37 --> 00:01:42
really makes text a video so much harder

00:01:40 --> 00:01:44
the challenges like selecting the right

00:01:41 --> 00:01:46
data sets that enable realistic

00:01:43 --> 00:01:47
representations of the world

00:01:45 --> 00:01:50
applications where this technology is

00:01:46 --> 00:01:52
already being deployed and put to use

00:01:49 --> 00:01:54
plus what the video editor of the future

00:01:51 --> 00:01:55
might look like and how constraints

00:01:53 --> 00:01:58
continue to Spur Innovation and

00:01:54 --> 00:02:00
ultimately keep this field moving

00:01:57 --> 00:02:02
finally if you like this episode our

00:01:59 --> 00:02:04
infrastructure team at a16z is coming

00:02:01 --> 00:02:06
out with a lot more AI content in the

00:02:03 --> 00:02:08
new year but in the meantime you can go

00:02:05 --> 00:02:11
to

00:02:07 --> 00:02:15
az.com AI for all our previous coverage

00:02:10 --> 00:02:17
all right enjoy as a reminder content

00:02:14 --> 00:02:19
here is for informational purposes only

00:02:16 --> 00:02:21
should not be taken as legal business

00:02:18 --> 00:02:23
tax or investment advice or be used to

00:02:20 --> 00:02:25
evaluate any investment or security and

00:02:22 --> 00:02:28
is not directed at any investors or

00:02:24 --> 00:02:30
potential investors in any a6z fund

00:02:27 --> 00:02:32
please note that a16z and its affiliates

00:02:29 --> 00:02:34
they also maintain investments in the

00:02:31 --> 00:02:36
companies discussed in this podcast for

00:02:34 --> 00:02:41
more details including a link to our

00:02:35 --> 00:02:43
investments please see a16 c.com

00:02:40 --> 00:02:45
disclosures this is a conversation I've

00:02:42 --> 00:02:46
been super excited about for a while and

00:02:44 --> 00:02:50
thank you so much for finding the time

00:02:46 --> 00:02:52
to to join us on the podcast um maybe we

00:02:49 --> 00:02:56
can start with just a you know for for

00:02:51 --> 00:02:59
first time folks um a brief overview of

00:02:55 --> 00:03:02
uh your team your research lab um and

00:02:58 --> 00:03:04
for listeners who are unfamiliar maybe

00:03:01 --> 00:03:06
you spend just a a couple minutes

00:03:03 --> 00:03:08
talking about what stable diffusion is

00:03:05 --> 00:03:10
and what stable video diffusion is what

00:03:07 --> 00:03:13
is stable diffusion stable diffusion is

00:03:09 --> 00:03:16
a text to image model generative model

00:03:12 --> 00:03:18
that means you type in a text prompt and

00:03:15 --> 00:03:21
it generates an image based on that in

00:03:17 --> 00:03:23
particular stable diffusion is as the

00:03:20 --> 00:03:25
name suggests a diffusion model

00:03:22 --> 00:03:26
s are a type of

00:03:24 --> 00:03:29
generative models which has been super

00:03:25 --> 00:03:31
successful recently for image generation

00:03:28 --> 00:03:33
and it's based on a technique that we

00:03:30 --> 00:03:37
developed while we were still at the

00:03:32 --> 00:03:39
University so me and Andreas and Patrick

00:03:36 --> 00:03:44
and Dominic all in the same team now at

00:03:38 --> 00:03:47
stability AI we are a multimodal company

00:03:43 --> 00:03:49
uh and our specialty is to produce and

00:03:46 --> 00:03:52
publish models try to make them as

00:03:48 --> 00:03:55
accessible as possible that includes

00:03:51 --> 00:03:59
publishing weights and kind of making

00:03:54 --> 00:04:01
Foundation models uh for all kinds of

00:03:58 --> 00:04:05
modalities not only images but also

00:04:00 --> 00:04:07
Video available and enabling research on

00:04:04 --> 00:04:09
top of that so we have seen that Sable

00:04:06 --> 00:04:11
diffusion was super successful I would

00:04:08 --> 00:04:12
say much more successful than we

00:04:10 --> 00:04:14
initially

00:04:11 --> 00:04:16
anticipated and there are like hundreds

00:04:13 --> 00:04:18
if not thousands of papers that are

00:04:15 --> 00:04:21
building on top of that we in particular

00:04:17 --> 00:04:24
our group is focused on visual media so

00:04:20 --> 00:04:26
that is images that is videos and uh

00:04:23 --> 00:04:28
stable video diffusion that you just

00:04:25 --> 00:04:30
introduced is kind of the next iteration

00:04:27 --> 00:04:32
it's our first step into into the video

00:04:29 --> 00:04:35
domain we published a model that can

00:04:31 --> 00:04:37
take in an image and turn that into a

00:04:34 --> 00:04:39
short video clip maybe we could we could

00:04:36 --> 00:04:41
spend a couple minutes on a brief

00:04:38 --> 00:04:43
overview of diffusion models that might

00:04:40 --> 00:04:45
be helpful you know how do diffusion

00:04:42 --> 00:04:47
models differ from other types of

00:04:44 --> 00:04:49
generative models and techniques like AO

00:04:46 --> 00:04:50
aggressive models if you could just give

00:04:48 --> 00:04:52
us a little bit of context before we

00:04:49 --> 00:04:54
dive in that that would help diffusion

00:04:51 --> 00:04:57
models are really the to go models right

00:04:53 --> 00:04:59
now for visual media like images and

00:04:56 --> 00:05:01
videos they're kind of different to Auto

00:04:58 --> 00:05:05
regressive models

00:05:00 --> 00:05:07
because they don't represent data as as

00:05:04 --> 00:05:10
a sequence of of tokens or something

00:05:06 --> 00:05:13
which we know from aut aggressive models

00:05:09 --> 00:05:17
um and in since images and videos are

00:05:12 --> 00:05:21
like composed as a pixel grid um this is

00:05:16 --> 00:05:24
really like a good beneficial property

00:05:21 --> 00:05:26
also they favor perceptually important

00:05:23 --> 00:05:29
details which is like inherently baked

00:05:26 --> 00:05:32
into these models because their learning

00:05:28 --> 00:05:35
objectives is just like tuned to favor

00:05:31 --> 00:05:37
these like important aspects of images

00:05:34 --> 00:05:39
as we perceive it as humans and yeah

00:05:36 --> 00:05:42
that is what we actually want right but

00:05:38 --> 00:05:44
hey also have a kind of like some

00:05:41 --> 00:05:46
commonalities with um autoregressive

00:05:43 --> 00:05:48
models they are iterative in their

00:05:45 --> 00:05:51
nature they they apply some kind of

00:05:47 --> 00:05:54
iterative refinement to the data but as

00:05:50 --> 00:05:57
opposed to Auto regressive models which

00:05:53 --> 00:05:59
iteratively generate token by token and

00:05:56 --> 00:06:03
or word by word for language these

00:05:58 --> 00:06:05
models gradually transform in small

00:06:02 --> 00:06:08
steps so they gradually transform noise

00:06:04 --> 00:06:11
to data Maybe one point to adds to um

00:06:07 --> 00:06:13
kind of the difference maybe to like the

00:06:10 --> 00:06:15
other very successful type which is in

00:06:12 --> 00:06:18
language models or AO aggressive models

00:06:14 --> 00:06:20
in general you have to generate each

00:06:17 --> 00:06:23
token in a sequence right so you train

00:06:19 --> 00:06:27
your model um on a certain sequence

00:06:22 --> 00:06:30
length and then you iterate over that in

00:06:27 --> 00:06:34
while while decoding a sentence and in

00:06:30 --> 00:06:37
the fusion models you also you you train

00:06:33 --> 00:06:39
a model on like initially you usually

00:06:36 --> 00:06:42
use like a thousand different noise

00:06:38 --> 00:06:43
levels between like data and like Pure

00:06:41 --> 00:06:45
Noise um there exist different

00:06:42 --> 00:06:46
formulations you can do this in a

00:06:44 --> 00:06:48
continuous space but it's not too

00:06:45 --> 00:06:50
important the interesting thing is that

00:06:47 --> 00:06:52
sampling time you can actually use

00:06:49 --> 00:06:55
less steps you can use like 50 steps you

00:06:51 --> 00:06:58
can use there exist like specialized um

00:06:54 --> 00:07:01
Samplers for these models which use far

00:06:57 --> 00:07:03
steps then recently there has been a lot

00:07:00 --> 00:07:06
of distillation work actually which

00:07:02 --> 00:07:07
still reduces this further we by

00:07:05 --> 00:07:09
ourselves we have published the

00:07:06 --> 00:07:12
distillation work um a week ago that

00:07:08 --> 00:07:15
actually shows that you can go uh as low

00:07:11 --> 00:07:17
as one sampling step which is I would

00:07:14 --> 00:07:19
say like a big um advantage of these

00:07:16 --> 00:07:22
diffusion models for folks who may not

00:07:18 --> 00:07:24
be familiar with why a single step

00:07:21 --> 00:07:25
sampling uh breakthrough is important

00:07:23 --> 00:07:27
could you say a little bit about you

00:07:24 --> 00:07:29
know what benefits that leads to for

00:07:26 --> 00:07:31
creators or or users of the model oh

00:07:28 --> 00:07:33
yeah absolutely I think like the most

00:07:30 --> 00:07:36
intuitive thing is that um you actually

00:07:33 --> 00:07:39
see what happens while you type in your

00:07:35 --> 00:07:42
text prompt so think of like this text

00:07:38 --> 00:07:44
image model uh you type in your prompt

00:07:41 --> 00:07:47
uh one and a half years back you have

00:07:43 --> 00:07:49
to wait for like a few seconds

00:07:46 --> 00:07:51
maybe even up to a minute now you now

00:07:48 --> 00:07:53
you see what happens and the quality is

00:07:50 --> 00:07:54
even better than what we had like with

00:07:52 --> 00:07:57
e first iteration of stabil diffusion

00:07:54 --> 00:07:59
so super super exciting actually to see

00:07:56 --> 00:08:02
that kind of trajectory these kind of

00:07:58 --> 00:08:04
developments um like when I first

00:08:01 --> 00:08:07
sampled this model I was actually

00:08:03 --> 00:08:08
shocked that it works so well to to keep

00:08:06 --> 00:08:11
ulling on that thread for a bit you

00:08:07 --> 00:08:13
know if we if we rewind uh the clock

00:08:10 --> 00:08:16
back to a year and a half ago which is

00:08:12 --> 00:08:21
when you guys first put out stable

00:08:15 --> 00:08:25
diffusion um between then and now what

00:08:20 --> 00:08:28
has surprised you most about image

00:08:24 --> 00:08:30
models that you didn't expect the pure

00:08:27 --> 00:08:33
improvements in performance in text

00:08:29 --> 00:08:34
understanding of these models in spatial

00:08:32 --> 00:08:37
compositionality of what these models

00:08:33 --> 00:08:38
can do just by typing in a single prompt

00:08:36 --> 00:08:41
you can

00:08:37 --> 00:08:43
describe a scene in really really fine

00:08:40 --> 00:08:46
grain and it gives you a highly detailed

00:08:42 --> 00:08:49
like instantiation visual instantiation

00:08:45 --> 00:08:51
of it the developments has been huge we

00:08:48 --> 00:08:55
published sdxl in June and even then

00:08:51 --> 00:08:57
it was like like a huge Improvement in

00:08:54 --> 00:09:00
visual quality in prompt Following

00:08:56 --> 00:09:02
also other models which we see right now

00:08:59 --> 00:09:05
as is like most recent Dolly 3 is like a

00:09:02 --> 00:09:07
huge Improvement still but also like as

00:09:04 --> 00:09:08
Robin said that there has been a lot of

00:09:06 --> 00:09:10
different Samplers proposed to make

00:09:07 --> 00:09:12
these models faster and faster and

00:09:09 --> 00:09:15
right now we're getting

00:09:11 --> 00:09:18
really close to to 50 steps performance

00:09:14 --> 00:09:20
and even one step so this this is like

00:09:17 --> 00:09:23
this is a a huge Improvement and I think

00:09:19 --> 00:09:25
a really important part of this is the

00:09:22 --> 00:09:28
fact that these models have been

00:09:24 --> 00:09:30
accessible to everyone so open sourcing

00:09:27 --> 00:09:34
like a foundation model as St diffusion

00:09:29 --> 00:09:36
initially that led to a a whole lot of

00:09:33 --> 00:09:39
research on these models which was yeah

00:09:35 --> 00:09:41
it was in in in retrospect extremely

00:09:38 --> 00:09:42
important to to do this I think

00:09:40 --> 00:09:45
otherwise we wouldn't have seen the the

00:09:41 --> 00:09:47
improvements we saw until now even

00:09:44 --> 00:09:49
before that like I was surprised that

00:09:46 --> 00:09:52
Tex image with diffusion models works so

00:09:48 --> 00:09:54
well um just before we published the

00:09:51 --> 00:09:56
model um like when I first saw this

00:09:53 --> 00:09:58
myself like we we had like this latent

00:09:55 --> 00:10:01
diffusion approach that we developed at

00:09:57 --> 00:10:04
he University and then um I mean we got

00:10:00 --> 00:10:07
a machine with like 8 80 gigabyte A1

00:10:03 --> 00:10:08
00s um just after we put it on archive

00:10:06 --> 00:10:11
and then yeah immediately started

00:10:07 --> 00:10:14
working on hey we want to have like this

00:10:10 --> 00:10:17
text image model but not train it on one

00:10:13 --> 00:10:19
GPU let's use all of like let's lose our

00:10:16 --> 00:10:22
little cluster with eight 80 gigabyte A1

00:10:18 --> 00:10:26
00s um we trained this latent diffusion

00:10:21 --> 00:10:27
model on 256 by 256 pixels um yeah

00:10:25 --> 00:10:29
really had to was the first time that we

00:10:26 --> 00:10:32
had to deal with like L scale data

00:10:28 --> 00:10:34
loading and these kind of things but

00:10:31 --> 00:10:36
yeah we made it work and and then using

00:10:33 --> 00:10:39
this model combining it with classifier

00:10:35 --> 00:10:41
free guidance which is a sampling

00:10:38 --> 00:10:43
technique that further improves sample

00:10:40 --> 00:10:45
quality at basically no cost I was like

00:10:42 --> 00:10:47
really surprised that we could do this

00:10:44 --> 00:10:50
on our own and achiev like pretty a

00:10:46 --> 00:10:52
pretty good model I would say and then

00:10:49 --> 00:10:55
like two days later open I published do

00:10:51 --> 00:10:57
to and all the hype was was gone but it

00:10:54 --> 00:10:58
was pretty nice experience you know

00:10:56 --> 00:11:00
something you you mentioned Andreas is

00:10:58 --> 00:11:03
that um

00:10:59 --> 00:11:06
the fact that you guys chose to release

00:11:02 --> 00:11:08
stable diffusion as an open- Source

00:11:05 --> 00:11:11
model resulted in this this crazy

00:11:07 --> 00:11:13
ecosystem exploding around your research

00:11:10 --> 00:11:16
right which is um which is just

00:11:12 --> 00:11:19
something that doesn't happen as quickly

00:11:15 --> 00:11:22
or as fast with models that aren't open

00:11:18 --> 00:11:23
source and so in the last year and a

00:11:21 --> 00:11:26
half one of the things that's been

00:11:23 --> 00:11:29
really fun at least for me to watch is

00:11:25 --> 00:11:30
all the really surprising things that

00:11:28 --> 00:11:34
Developers

00:11:29 --> 00:11:35
and and creators have done with the base

00:11:33 --> 00:11:38
model that you guys put out You' you've

00:11:34 --> 00:11:39
provided folks a set of Lego blocks that

00:11:37 --> 00:11:41
hey can mix and match in different ways

00:11:38 --> 00:11:43
things like control net that give people

00:11:40 --> 00:11:46
more controlability allowing your

00:11:42 --> 00:11:47
community to build their own front end

00:11:45 --> 00:11:50
out of all of that you know I'm sure

00:11:46 --> 00:11:52
came a ton of requests for you guys as

00:11:49 --> 00:11:54
you guys were prioritizing all those

00:11:51 --> 00:11:57
asks that came in from the world in the

00:11:53 --> 00:11:58
community why was stable video the thing

00:11:56 --> 00:12:00
that you guys decided to prioritize

00:11:57 --> 00:12:04
above everything else as as your sort of

00:11:59 --> 00:12:06
next major Milestone I think video is is

00:12:03 --> 00:12:09
like an

00:12:05 --> 00:12:10
awesome kind of data because you to

00:12:08 --> 00:12:12
solve that task to solve video

00:12:09 --> 00:12:16
generation a model needs

00:12:12 --> 00:12:18
to learn much about like physical

00:12:15 --> 00:12:21
properties of the world or like the

00:12:17 --> 00:12:23
physical foundations of the world there

00:12:20 --> 00:12:26
is there is so much without knowing

00:12:22 --> 00:12:28
about for instance 3D scenes you cannot

00:12:25 --> 00:12:30
generate a camera pan around an object

00:12:27 --> 00:12:34
or you cannot make an object move if if

00:12:29 --> 00:12:36
a person turns around the model needs to

00:12:33 --> 00:12:39
hallucinate how it look how this person

00:12:35 --> 00:12:41
looks from behind right so it it's like

00:12:38 --> 00:12:43
you you you need to to know so much

00:12:40 --> 00:12:46
about the World by just like including

00:12:42 --> 00:12:48
that additional temporal Dimension um

00:12:45 --> 00:12:51
this is what fascinated me most on

00:12:47 --> 00:12:54
working on videos um and yeah I think

00:12:50 --> 00:12:57
it's it's it's also like computationally

00:12:53 --> 00:12:59
it's it's really it's a it's NE next

00:12:56 --> 00:13:00
level of of computational Demands

00:12:58 --> 00:13:02
because you have an additional

00:12:59 --> 00:13:05
dimensionality which is like makes

00:13:01 --> 00:13:06
everything much much much uh harder I

00:13:04 --> 00:13:08
think and yeah I think we like

00:13:05 --> 00:13:11
challenges that's why we probably

00:13:07 --> 00:13:14
focused on on doing that yeah something

00:13:10 --> 00:13:16
that's not known about you guys's um by

00:13:13 --> 00:13:19
background originally I I believe you're

00:13:15 --> 00:13:21
physicist I'm I'm a physicist uh but

00:13:18 --> 00:13:24
yeah I I I haven't done much physics in

00:13:20 --> 00:13:26
a while unfortunately yeah I'm I'm

00:13:23 --> 00:13:28
originally a a mechanical engineer but

00:13:25 --> 00:13:30
hat is also really related to physics

00:13:27 --> 00:13:33
and I was always inspired by

00:13:29 --> 00:13:37
physics and really fascinated by it well

00:13:32 --> 00:13:39
both of your backgrounds academically um

00:13:36 --> 00:13:43
were spent studying the physical world

00:13:38 --> 00:13:46
and I I just think it's poetic that uh

00:13:42 --> 00:13:48
you know your primary interest in in

00:13:45 --> 00:13:49
generative modeling came from from

00:13:47 --> 00:13:51
trying to understand that some deeper

00:13:48 --> 00:13:53
level the physical world and it seems

00:13:50 --> 00:13:54
like that seems to have motivated some

00:13:52 --> 00:13:56
of at least some of the the the

00:13:53 --> 00:13:58
intuition and the research around your

00:13:55 --> 00:14:00
approach to stable video yeah absolutely

00:13:57 --> 00:14:02
actually I I I I fully agree and I think

00:13:59 --> 00:14:04
like we're just like actually scratching

00:14:01 --> 00:14:06
the surface with the kind of video

00:14:03 --> 00:14:09
models that we have right now um having

00:14:05 --> 00:14:12
something like we are seeing in language

00:14:08 --> 00:14:13
modeling but trained on pixels on videos

00:14:11 --> 00:14:16
will probably give like super

00:14:12 --> 00:14:19
interesting Downstream Behavior not not

00:14:15 --> 00:14:21
only like generating videos but also

00:14:18 --> 00:14:23
understanding of the world uh like is it

00:14:20 --> 00:14:25
possible to drive something like a

00:14:22 --> 00:14:29
physical law from from such a model I

00:14:24 --> 00:14:31
don't know um or such a model is always

00:14:28 --> 00:14:35
also always

00:14:30 --> 00:14:38
predictive so you can start with an

00:14:34 --> 00:14:40
image or with like a sequence of images

00:14:37 --> 00:14:43
and try to predict what happens next of

00:14:39 --> 00:14:45
course um and then and then I think like

00:14:42 --> 00:14:49
also coupling this with other modalities

00:14:44 --> 00:14:52
uch as language um will maybe provide a

00:14:48 --> 00:14:54
way to ground like these models more in

00:14:51 --> 00:14:55
the physical world well I I think that's

00:14:53 --> 00:14:58
a good segue

00:14:54 --> 00:14:59
into what is the main focus of of

00:14:57 --> 00:15:03
today's conversation right which is uh

00:14:58 --> 00:15:06
generative video um at least to to folks

00:15:02 --> 00:15:09
who are early users of stable video of

00:15:05 --> 00:15:11
stable diffusion um stable video was a

00:15:08 --> 00:15:14
much awaited sort of natural progression

00:15:10 --> 00:15:16
from the original model um just take us

00:15:13 --> 00:15:18
back a little bit to the original sort

00:15:15 --> 00:15:20
of conception of the project H how long

00:15:17 --> 00:15:23
have you guys been working on on video

00:15:19 --> 00:15:25
modeling I would say roughly half a year

00:15:22 --> 00:15:27
and like for this model that we just put

00:15:24 --> 00:15:30
out I think the main challenge was that

00:15:26 --> 00:15:32
we actually yeah had to scale the data

00:15:29 --> 00:15:35
set and the data loading so if you train

00:15:31 --> 00:15:37
a video model on a lot of dpus you

00:15:34 --> 00:15:40
suddenly run into problems that you

00:15:36 --> 00:15:42
didn't really have had before like uh

00:15:39 --> 00:15:44
loading high resolution videos um is

00:15:42 --> 00:15:47
just like

00:15:43 --> 00:15:50
a difficult task if you do it at scale

00:15:46 --> 00:15:52
also like only decoding videos is really

00:15:49 --> 00:15:55
hard like a data loader has to transform

00:15:51 --> 00:15:57
like spides at loads into a suitable

00:15:54 --> 00:16:01
representation for the model and to do

00:15:56 --> 00:16:04
so you have to do a lot of computational

00:16:00 --> 00:16:06
um work from the video Codec where the

00:16:03 --> 00:16:08
video was encoded to transform it uh

00:16:05 --> 00:16:11
into a

00:16:07 --> 00:16:14
suitable input sample for um the

00:16:10 --> 00:16:17
generative model and this is competition

00:16:13 --> 00:16:19
really expensive um and since we have so

00:16:16 --> 00:16:23
fast gpus right now there really like

00:16:18 --> 00:16:25
the the CPUs were just like in in the

00:16:22 --> 00:16:27
beginning too slow building an efficient

00:16:24 --> 00:16:30
data pipeline for video was really a

00:16:26 --> 00:16:31
challenge and actually there's like

00:16:29 --> 00:16:35
interesting bucks that you can encounter

00:16:30 --> 00:16:36
during training so we had one um where

00:16:34 --> 00:16:38
we would actually like if you train a

00:16:35 --> 00:16:41
diffusion model you have your data and

00:16:37 --> 00:16:44
then you add noise to that data that the

00:16:40 --> 00:16:47
model tries to remove right and if you

00:16:43 --> 00:16:49
do that on a video you add noise to each

00:16:46 --> 00:16:51
frame of the video and then we had like

00:16:48 --> 00:16:53
a a bug where we added like different

00:16:50 --> 00:16:55
amounts of noise to different frames in

00:16:52 --> 00:16:57
the video which just like complicates

00:16:54 --> 00:16:58
the learning task further or like

00:16:56 --> 00:17:00
unnecessarily things like this is just

00:16:57 --> 00:17:03
like one line of code um that can go

00:16:59 --> 00:17:07
wrong what was the biggest difference

00:17:03 --> 00:17:10
between uh the image model research you

00:17:06 --> 00:17:14
know project and and your video work

00:17:09 --> 00:17:17
because you know noise um noise sampling

00:17:14 --> 00:17:19
and noise reduction these are sort of

00:17:16 --> 00:17:21
diffusion techniques that are shared

00:17:18 --> 00:17:23
across images and video it would be

00:17:20 --> 00:17:26
helpful to understand what were unique

00:17:22 --> 00:17:29
sort of to the video challenge first of

00:17:25 --> 00:17:31
all the pure dimensionality of videos I

00:17:28 --> 00:17:33
mentioned that before with with this

00:17:30 --> 00:17:34
like additional Dimension this

00:17:32 --> 00:17:39
introduces of

00:17:34 --> 00:17:42
course lots of higher or like a a higher

00:17:38 --> 00:17:44
um GPU cons or memory consumption um and

00:17:41 --> 00:17:47
this was really a challenge so for

00:17:43 --> 00:17:49
diffusion models it's really important

00:17:46 --> 00:17:52
o have a high batch size because the

00:17:48 --> 00:17:54
gradients gets or like you can

00:17:51 --> 00:17:57
approximate the gradient uh which

00:17:53 --> 00:18:00
thrives the learning um much better if

00:17:56 --> 00:18:01
the batch size is higher um um and

00:17:59 --> 00:18:04
especially for diffusion models it's

00:18:00 --> 00:18:08
like a really an important thing to have

00:18:03 --> 00:18:10
a really high batch size but if you just

00:18:07 --> 00:18:14
like add this additional temporal

00:18:09 --> 00:18:17
Dimension if something breaks somewhere

00:18:13 --> 00:18:20
in in in one GPU it will just like throw

00:18:16 --> 00:18:22
down the entire training and the more

00:18:19 --> 00:18:25
gpus you add to your cluster and on the

00:18:21 --> 00:18:27
more gpus you train the higher the

00:18:24 --> 00:18:29
probability will be that somewhere

00:18:26 --> 00:18:32
there's just like a say a hardware pH

00:18:28 --> 00:18:34
even which also happens so like this

00:18:31 --> 00:18:37
this additional dimensionality just

00:18:34 --> 00:18:40
like introduces these new kind of

00:18:36 --> 00:18:42
scaling challenges which are yeah which

00:18:39 --> 00:18:44
were really really like

00:18:41 --> 00:18:46
interesting to to come by I would say

00:18:43 --> 00:18:51
well that's very helpful I I think you

00:18:45 --> 00:18:53
know one of the uh most valuable things

00:18:50 --> 00:18:55
that your guys's

00:18:52 --> 00:18:59
research uh has done for the industry is

00:18:54 --> 00:19:01
that you often share in very

00:18:58 --> 00:19:03
excruciating detail some of the

00:19:00 --> 00:19:05
infrastructure challenges that came with

00:19:02 --> 00:19:09
training you know the lab's work and I

00:19:04 --> 00:19:11
think since uh scaling models at the at

00:19:08 --> 00:19:13
he magnitude that you know you guys are

00:19:10 --> 00:19:15
is is is a relatively new infrastructure

00:19:12 --> 00:19:17
challenge I think it's very very helpful

00:19:14 --> 00:19:19
for other researchers to be able to hear

00:19:16 --> 00:19:21
you know the the sort of nuts and bolts

00:19:18 --> 00:19:23
that you had to figure out right to get

00:19:20 --> 00:19:26
hese models out then there's the whole

00:19:22 --> 00:19:29
other set of data related challenges um

00:19:25 --> 00:19:31
that that that aren't about the data

00:19:28 --> 00:19:34
pipeline per se but it's about the

00:19:30 --> 00:19:36
representation of the data the data set

00:19:33 --> 00:19:37
uh curation the data set mixture could

00:19:35 --> 00:19:41
you guys just talk a little bit about

00:19:36 --> 00:19:42
how you approached um picking your data

00:19:40 --> 00:19:45
set for this yeah that's a good question

00:19:41 --> 00:19:46
we actually um spend a lot of time

00:19:44 --> 00:19:51
talking about this in the paper that we

00:19:45 --> 00:19:53
just put out um so so roughly um what we

00:19:50 --> 00:19:56
also Define in this paper is

00:19:52 --> 00:19:59
that we can divide this training process

00:19:55 --> 00:20:01
into three stages um and the first is

00:19:58 --> 00:20:03
that we actually train an image model so

00:20:00 --> 00:20:06
for for training video models it's

00:20:02 --> 00:20:08
usually just helpful to reuse the

00:20:05 --> 00:20:10
structural spatial understanding from

00:20:07 --> 00:20:12
image models um and there are like

00:20:09 --> 00:20:14
powerful image models so we can just

00:20:11 --> 00:20:17
hat we should reuse

00:20:13 --> 00:20:19
um for then training the video model and

00:20:16 --> 00:20:22
then there's next steps so having a

00:20:19 --> 00:20:26
image model like stable diffusion for

00:20:21 --> 00:20:27
example um you have to get this

00:20:25 --> 00:20:30
additional knowledge about like the

00:20:26 --> 00:20:34
temporal dimensionality and about motion

00:20:29 --> 00:20:37
right so um for that we train on like a

00:20:33 --> 00:20:39
large data set um and I'm sure Andreas

00:20:36 --> 00:20:41
can talk about like how we filtered that

00:20:38 --> 00:20:43
in a second but yeah we like the next

00:20:40 --> 00:20:44
stage is training on like this this

00:20:42 --> 00:20:48
really large data set that we still have

00:20:43 --> 00:20:50
to create a bit so we don't want like um

00:20:47 --> 00:20:52
let's say Optical characters like I

00:20:49 --> 00:20:53
don't know so yeah we don't want like

00:20:51 --> 00:20:56
text in the in the video we want nice

00:20:52 --> 00:20:58
object motion um we also want nice

00:20:55 --> 00:20:59
camera motion so we have to filter for

00:20:57 --> 00:21:01
that

00:20:58 --> 00:21:03
um and yeah we we do this in like two

00:21:00 --> 00:21:06
regimes we train on a lot of videos in

00:21:02 --> 00:21:08
the first stage and in the second stage

00:21:05 --> 00:21:11
we train on a mock rated very high

00:21:07 --> 00:21:13
quality smaller data set to really

00:21:10 --> 00:21:15
refine the model and it's similar to

00:21:12 --> 00:21:17
image models where you also train

00:21:14 --> 00:21:19
pre-train on a large data set and then

00:21:16 --> 00:21:22
refine on a high quality data set there

00:21:18 --> 00:21:24
was a paper recently that meta put out

00:21:21 --> 00:21:25
hat also describes just this process

00:21:23 --> 00:21:28
for image models in detail one of the

00:21:24 --> 00:21:29
largest um open questions in in video

00:21:27 --> 00:21:32
generation for a while has been

00:21:28 --> 00:21:34
structural consistency right of 3D

00:21:31 --> 00:21:39
objects when you when the camera is

00:21:33 --> 00:21:41
panning around um a person or a car or

00:21:38 --> 00:21:43
any any any subject to make sure that it

00:21:40 --> 00:21:46
stays and looks like the same subject

00:21:43 --> 00:21:48
from various angles has been a um has

00:21:45 --> 00:21:50
been a challenge for for generative

00:21:47 --> 00:21:52
video um how did you guys approach that

00:21:49 --> 00:21:55
you know you you mention in the paper

00:21:51 --> 00:21:57
that uh 3D data and multiv view data was

00:21:54 --> 00:21:59
important yeah actually like I think the

00:21:56 --> 00:22:03
main point that we want to make made in

00:21:58 --> 00:22:05
the make in the paper is um the one that

00:22:02 --> 00:22:07
we talked about earlier like having a

00:22:04 --> 00:22:09
foundational video

00:22:06 --> 00:22:12
model actually learns much more than

00:22:08 --> 00:22:14
just or actually gives us much more than

00:22:11 --> 00:22:17
just a model that can generate nice

00:22:13 --> 00:22:21
looking Clips or videos right it

00:22:16 --> 00:22:24
learns a representation of the world and

00:22:20 --> 00:22:26
one um one aspect of that is that we

00:22:23 --> 00:22:29
tried to demonstrate in the paper given

00:22:25 --> 00:22:31
a video model which has seen a lot of

00:22:28 --> 00:22:33
objects from different views uh lots of

00:22:30 --> 00:22:35
different camera movements it should be

00:22:32 --> 00:22:37
much more easy to turn that into a

00:22:34 --> 00:22:39
multiv view model and that's kind of the

00:22:36 --> 00:22:41
main message so we we take the

00:22:39 --> 00:22:43
pre-trained uh video model which has

00:22:40 --> 00:22:45
een a lot of different videos a lot of

00:22:42 --> 00:22:48
different camera movements and we fine

00:22:44 --> 00:22:53
tune that on very specialized um multiv

00:22:47 --> 00:22:56
iew orbits around around um 3D objects

00:22:52 --> 00:22:58
and kind of turn the video model into a

00:22:55 --> 00:23:01
multiv viw synthesis model and that

00:22:57 --> 00:23:03
works pretty well so one of the like uh

00:23:00 --> 00:23:05
dominating approaches before that was

00:23:02 --> 00:23:07
that you would take like an image model

00:23:04 --> 00:23:09
ike stabil diffusion and turn that into

00:23:06 --> 00:23:10
multiview model but yeah we showed that

00:23:08 --> 00:23:13
it's actually like helpful to

00:23:10 --> 00:23:15
incorporate like this implicit 3D

00:23:12 --> 00:23:17
knowled that knowledge that is captured

00:23:14 --> 00:23:18
in all of the videos into the model and

00:23:16 --> 00:23:20
then the model can learn much quicker

00:23:17 --> 00:23:22
than if you start from the pure image

00:23:19 --> 00:23:26
model so that's kind of the main message

00:23:22 --> 00:23:31
but you're right you can also um try to

00:23:25 --> 00:23:34
use this uh explicit multiview data in

00:23:30 --> 00:23:36
the video training or maybe even

00:23:33 --> 00:23:39
something that we do in the paper um

00:23:35 --> 00:23:43
train lauras explicitly on like

00:23:38 --> 00:23:45
different um camera movements um and

00:23:42 --> 00:23:49
then put this lowas back into the video

00:23:44 --> 00:23:51
model so you get like control over the

00:23:48 --> 00:23:53
camera for your very general video model

00:23:50 --> 00:23:56
which is quite cool yeah so this I found

00:23:53 --> 00:23:58
was one of the coolest you know uh

00:23:55 --> 00:24:01
pieces of the paper was um in

00:23:57 --> 00:24:03
corporating luras for fine grain

00:24:00 --> 00:24:04
control in the creation process could

00:24:02 --> 00:24:06
you maybe give us a quick overview of

00:24:03 --> 00:24:08
what luras even are conceptually

00:24:05 --> 00:24:10
intuitively and then why what was your

00:24:07 --> 00:24:11
what led you to the intuition that luras

00:24:09 --> 00:24:13
would be an important part of the

00:24:10 --> 00:24:15
architecture luras are just really

00:24:12 --> 00:24:18
lightweight adapters which can be

00:24:14 --> 00:24:20
fine-tuned onto a existing base model

00:24:17 --> 00:24:23
which adapt the the attention layers and

00:24:19 --> 00:24:25
by that you can just like on a smaller

00:24:22 --> 00:24:28
kind of subset or

00:24:24 --> 00:24:32
small really highly spec specialized

00:24:27 --> 00:24:35
ata set you can tune in a really really

00:24:31 --> 00:24:39
lightweight way um different properties

00:24:35 --> 00:24:42
into the model and in in in this case we

00:24:38 --> 00:24:46
just like tune this kind of

00:24:41 --> 00:24:49
um understanding of different kinds of

00:24:45 --> 00:24:52
camera motion into our video model so if

00:24:48 --> 00:24:55
we use a small data set which only

00:24:51 --> 00:24:58
contains like zooms or or pannings to

00:24:54 --> 00:24:59
the left or to the right we can actually

00:24:57 --> 00:25:02
um

00:24:58 --> 00:25:04
tune such aora as a small adapter to to

00:25:01 --> 00:25:07
the to the um attention layers of our

00:25:03 --> 00:25:09
model to just like get exactly this

00:25:06 --> 00:25:10
behavior and this is a really awesome

00:25:08 --> 00:25:13
way to just in a really really

00:25:09 --> 00:25:14
lightweight way fine-tune these

00:25:12 --> 00:25:17
foundational models and it has shown to

00:25:13 --> 00:25:20
be like really effective and it's um

00:25:16 --> 00:25:22
accordingly it's like really highly

00:25:19 --> 00:25:24
appreciated in the community I would say

00:25:21 --> 00:25:26
to get these kind of easy fine tunes for

00:25:24 --> 00:25:28
these models yeah and I think like for

00:25:25 --> 00:25:31
image models it's like extremely popular

00:25:27 --> 00:25:32
um there's so many different laas that

00:25:30 --> 00:25:34
people plug into these models for video

00:25:31 --> 00:25:36
models our goal was just to demonstrate

00:25:33 --> 00:25:39
that this is something that's possible

00:25:35 --> 00:25:41
you it's just like at the beginning and

00:25:38 --> 00:25:43
um there's much more that it's possible

00:25:40 --> 00:25:45
that should be possible like very

00:25:42 --> 00:25:47
specialized kind of motions I don't know

00:25:44 --> 00:25:49
I think there's a lot of creative

00:25:46 --> 00:25:50
possibilities that's actually I think

00:25:48 --> 00:25:54
worth exploring for a little bit one of

00:25:49 --> 00:25:57
the uh one of the sort of Windows that

00:25:53 --> 00:25:58
you guys have into the future is by

00:25:56 --> 00:26:01
understanding where the research is

00:25:57 --> 00:26:03
going I think you get to see and you get

00:26:00 --> 00:26:05
o live a little bit in to in the future

00:26:02 --> 00:26:08
you get to time travel and kind of get a

00:26:04 --> 00:26:11
g glips into the future of creativity

00:26:07 --> 00:26:14
and so having seen how effective luras

00:26:10 --> 00:26:16
are at least at a few set tasks like

00:26:13 --> 00:26:19
motion control right so you in in the in

00:26:15 --> 00:26:22
the paper you propose using luras for

00:26:18 --> 00:26:25
camera control Banning zooming Etc um

00:26:21 --> 00:26:29
the history of video creation has has

00:26:24 --> 00:26:31
usually uh required creators to have a

00:26:28 --> 00:26:33
ton of different knobs and dials uh in

00:26:31 --> 00:26:35
their software that they use right

00:26:32 --> 00:26:36
whether it's an Adobe After Effects or

00:26:34 --> 00:26:39
some other professional software you

00:26:35 --> 00:26:41
literally have hundreds of do dials and

00:26:38 --> 00:26:44
and buttons that you can use to

00:26:40 --> 00:26:46
control and edit these videos and

00:26:43 --> 00:26:50
conceptually should people think about

00:26:45 --> 00:26:53
Laura as mapping to these controls in

00:26:49 --> 00:26:56
the future will a director or creator of

00:26:52 --> 00:26:58
videos basically be relying on hundreds

00:26:55 --> 00:27:00
of different luras to express the

00:26:57 --> 00:27:03
control they want over the video um or

00:26:59 --> 00:27:06
do you think fundamentally Laura's will

00:27:02 --> 00:27:08
hit some scaling um uh sort of limit how

00:27:05 --> 00:27:11
should creators think about these new

00:27:07 --> 00:27:13
tools that you've given them I mean you

00:27:10 --> 00:27:15
actually you actually said it right

00:27:12 --> 00:27:17
maintaining like a library of hundreds

00:27:14 --> 00:27:20
of lowers is maybe not like the most

00:27:16 --> 00:27:21
scalable approach um actually if you

00:27:19 --> 00:27:24
look at the model that we put out now

00:27:20 --> 00:27:26
it's just like taking an image and

00:27:23 --> 00:27:29
animating that right then we can do some

00:27:25 --> 00:27:31
stuff like with these lowers um but what

00:27:28 --> 00:27:35
you actually want I think is given the

00:27:30 --> 00:27:37
image and some text prompt do exactly

00:27:34 --> 00:27:39
what I describe in a text promt there is

00:27:36 --> 00:27:42
also some there's already some work that

00:27:38 --> 00:27:44
explores that um but yeah giving like

00:27:41 --> 00:27:46
more control over what happens in the

00:27:43 --> 00:27:49
video be through lorus but maybe through

00:27:45 --> 00:27:50
a text prompt or through like um yeah

00:27:48 --> 00:27:52
you know like

00:27:49 --> 00:27:54
spatial um motion guidance like and

00:27:51 --> 00:27:56
runways motion brush um there are

00:27:53 --> 00:27:59
different ways of doing that but you

00:27:55 --> 00:28:01
definitely want like more control over

00:27:58 --> 00:28:04
this whole creation process and then I

00:28:00 --> 00:28:07
think uh you're at the stage where you

00:28:03 --> 00:28:09
can really start to uh generate

00:28:06 --> 00:28:12
personalized individual content um

00:28:08 --> 00:28:15
individual short movies I don't know and

00:28:11 --> 00:28:18
maybe even for like especially probably

00:28:14 --> 00:28:20
for for video creation we want something

00:28:17 --> 00:28:22
like we just did with um with the image

00:28:19 --> 00:28:24
models you want like very fast

00:28:21 --> 00:28:26
synthesis right because then this will

00:28:23 --> 00:28:29
become more like I don't know sometimes

00:28:26 --> 00:28:30
I think about this as like like like a

00:28:28 --> 00:28:32
video game right you you type your

00:28:29 --> 00:28:35
prompt and you immediately see what

00:28:31 --> 00:28:36
happens um given your your input View

00:28:34 --> 00:28:39
and I think this might be a super nice

00:28:35 --> 00:28:42
user experience actually so we want this

00:28:38 --> 00:28:44
additional control and we want uh fast

00:28:41 --> 00:28:46
rendering fast

00:28:43 --> 00:28:48
sampling fast synthesis of this models

00:28:45 --> 00:28:49
of these models you know you said

00:28:47 --> 00:28:51
earlier that you're hoping that the

00:28:48 --> 00:28:54
community explores more things now that

00:28:50 --> 00:28:55
you've actually put the model out there

00:28:53 --> 00:28:56
you know there they're going to be

00:28:54 --> 00:28:58
developers and creators who listen to

00:28:55 --> 00:29:02
this podcast what would you like them to

00:28:57 --> 00:29:05
explore first and and most intensely now

00:29:01 --> 00:29:08
ell I think just TR trying out the

00:29:04 --> 00:29:10
model um rendering some awesome stuff of

00:29:07 --> 00:29:12
course also further exploring maybe the

00:29:09 --> 00:29:14
representation we built we we in the

00:29:11 --> 00:29:17
paper we mentioned that we trained this

00:29:13 --> 00:29:20
model on a whole lot of data and this

00:29:16 --> 00:29:23
has just seen really really much motion

00:29:19 --> 00:29:25
be it on like low resolution but this

00:29:22 --> 00:29:27
knowledge like just has seen all

00:29:24 --> 00:29:29
this and the representation is really

00:29:26 --> 00:29:31
fruitful we showed that by our 3D

00:29:28 --> 00:29:33
fine-tuning this was by the way this was

00:29:30 --> 00:29:34
completely surprising for me seeing that

00:29:32 --> 00:29:38
model

00:29:33 --> 00:29:41
after, 2,000 iterations like like

00:29:37 --> 00:29:43
already get get getting what is like 3D

00:29:40 --> 00:29:46
reasoning or like explicit 3D reasoning

00:29:43 --> 00:29:49
this this is really really nice um and

00:29:45 --> 00:29:52
so as we saw that it will be extremely

00:29:48 --> 00:29:54
interesting to see other such um

00:29:51 --> 00:29:56
approaches model is open source people

00:29:53 --> 00:29:58
can try it and I I think it will like

00:29:55 --> 00:30:00
give it another

00:29:58 --> 00:30:03
couple of weeks and then we will we'll

00:29:59 --> 00:30:04
see what happens but I'm excited for it

00:30:02 --> 00:30:06
you know my personal favorite for what

00:30:03 --> 00:30:09
people did on day one was obviously

00:30:05 --> 00:30:11
animating memes I'm sure you guys have

00:30:08 --> 00:30:13
seen all that that that was really funny

00:30:10 --> 00:30:15
eah what are your guys's favorite

00:30:12 --> 00:30:17
Creations so far that You' seen anything

00:30:14 --> 00:30:19
that jumps to mind the one where the man

00:30:16 --> 00:30:21
is looking after another woman oh it's

00:30:18 --> 00:30:23
the man looking behind right the man

00:30:20 --> 00:30:26
looking behind yeah that one um I think

00:30:22 --> 00:30:28
it just like visualizes just like the

00:30:25 --> 00:30:31
additional experience that a model can

00:30:28 --> 00:30:34
provide right so it's actually really

00:30:30 --> 00:30:37
nice to you people are used to like 2D

00:30:33 --> 00:30:39
memes but then you see oh I can like I

00:30:36 --> 00:30:41
can actually try to animate this and see

00:30:38 --> 00:30:43
what happens also if you think about

00:30:40 --> 00:30:45
famous artworks or something just

00:30:42 --> 00:30:48
bringing them to life is a really really

00:30:44 --> 00:30:50
uh like nice property and it's it's now

00:30:47 --> 00:30:52
enabled everyone can just like poke

00:30:49 --> 00:30:55
around a bit of monalisa and see what

00:30:52 --> 00:30:56
she's looking from the side oh

00:30:54 --> 00:30:58
that's cool I haven't explored that one

00:30:55 --> 00:31:00
but that that's a you're saying

00:30:57 --> 00:31:03
prompting the model with an image of a

00:30:59 --> 00:31:06
notable art piece um exactly

00:31:02 --> 00:31:09
interesting Ju Just Like M making Vanos

00:31:05 --> 00:31:11
uh Starry Night like like make the stars

00:31:08 --> 00:31:13
hine and and and glimmer and and stuff

00:31:10 --> 00:31:15
so I think it's really cool yeah the

00:31:13 --> 00:31:18
world is pretty lucky that you guys have

00:31:14 --> 00:31:20
gifted you know this the model to the

00:31:17 --> 00:31:23
developer um and open source

00:31:19 --> 00:31:26
cosystem um it's it's already such an

00:31:22 --> 00:31:28
incredible sort of Step Leap Forward

00:31:25 --> 00:31:31
right in what you can do with um with

00:31:27 --> 00:31:34
images and with with video um what do

00:31:30 --> 00:31:36
you think are the top the the two or

00:31:33 --> 00:31:38
three biggest sort of open challenges

00:31:35 --> 00:31:40
that you guys want to prioritize next

00:31:37 --> 00:31:42
hat are still limitations in video

00:31:39 --> 00:31:45
generation I think a really important

00:31:41 --> 00:31:47
hing is to get these models to generate

00:31:44 --> 00:31:50
longer videos to process longer videos

00:31:46 --> 00:31:52
in general not only generate them also

00:31:49 --> 00:31:55
like see them and and and and process

00:31:51 --> 00:31:57
them because I think

00:31:54 --> 00:31:58
eventually processing longer videos is

00:31:56 --> 00:32:00
like

00:31:57 --> 00:32:02
y to

00:31:59 --> 00:32:04
understanding what we talked about

00:32:01 --> 00:32:06
earlier fundamental aspects of this

00:32:03 --> 00:32:10
world better this is a really important

00:32:05 --> 00:32:12
part um to just like make these models

00:32:09 --> 00:32:14
or enable these models to generate

00:32:11 --> 00:32:17
longer content more coherent content

00:32:13 --> 00:32:20
also with a lots and other kinds of

00:32:16 --> 00:32:24
motion um and what Robin already said I

00:32:19 --> 00:32:27
think making them fast will just like it

00:32:23 --> 00:32:29
will just like unlock so much more

00:32:26 --> 00:32:32
xploration yeah there are simple things

00:32:28 --> 00:32:35
like thinking about like multimodality

00:32:31 --> 00:32:37
um adding an audio track to your

00:32:34 --> 00:32:39
generated video so you're talking

00:32:36 --> 00:32:42
Andreas earlier about the infrastructure

00:32:38 --> 00:32:44
challenges here if you had a magic wand

00:32:41 --> 00:32:47
what infrastructure improvements do you

00:32:43 --> 00:32:50
wish the industry could solve for

00:32:46 --> 00:32:53
you hard question I mean we we could we

00:32:49 --> 00:32:56
could ask for more gpus per more CPUs

00:32:52 --> 00:32:58
per GPU and this would like solve solve

00:32:55 --> 00:33:00
much of the data loading issues also Al

00:32:57 --> 00:33:04
for more like like not only GPU memory

00:32:59 --> 00:33:07
is always good but also CPU memory but I

00:33:03 --> 00:33:10
think like hitting these limits is just

00:33:06 --> 00:33:13
a some form of natural way you you

00:33:09 --> 00:33:16
always want to try to improve your

00:33:12 --> 00:33:20
efficiency you always want to try to to

00:33:15 --> 00:33:22
train faster um and and at some point

00:33:19 --> 00:33:24
you will face a bottleneck a limit and

00:33:21 --> 00:33:26
you have to like come up with a with a

00:33:23 --> 00:33:28
nice algorithmic way maybe or with

00:33:25 --> 00:33:31
another way of like like overcoming this

00:33:27 --> 00:33:35
for many years data loading was not a a

00:33:30 --> 00:33:37
big thing because the gpus were too slow

00:33:34 --> 00:33:39
but now we have extremely nice

00:33:36 --> 00:33:42
accelerators and and like like with the

00:33:38 --> 00:33:44
newest h100s this is it's insane how

00:33:41 --> 00:33:46
fast these These gpus are actually

00:33:43 --> 00:33:48
running now how fast you can train

00:33:45 --> 00:33:50
models on those um and then you will

00:33:47 --> 00:33:52
just like hit the next bottleneck it's

00:33:49 --> 00:33:55
actually good to see this that that we

00:33:51 --> 00:33:57
hit limits we have to overcome this then

00:33:54 --> 00:34:00
you improve and this is how you learn

00:33:56 --> 00:34:02
and and this is how you you can yeah

00:33:59 --> 00:34:06
make things much more efficient in the

00:34:01 --> 00:34:09
nd if you only rely on like more

00:34:05 --> 00:34:12
compute um it's a bit boring um I think

00:34:08 --> 00:34:15
like compute constraints can also Drive

00:34:11 --> 00:34:17
Innovation right so uh for example the

00:34:14 --> 00:34:20
latent diffusion framework we developed

00:34:16 --> 00:34:22
it at the University because uh we just

00:34:19 --> 00:34:27
like we had like single gpus uh right

00:34:21 --> 00:34:29
where we trained on and um yeah I mean

00:34:26 --> 00:34:31
uh that kind of naturally leads to some

00:34:28 --> 00:34:32
kind of innovation and in this case this

00:34:30 --> 00:34:35
something that everyone uses right

00:34:31 --> 00:34:37
now this is it's actually crazy to see

00:34:34 --> 00:34:40
Dolly 3 uses a model that like the auto

00:34:37 --> 00:34:44
encoder that was trained on a single GPU

00:34:39 --> 00:34:46
this is I think how intelligence also

00:34:43 --> 00:34:47
arises if you have a constrainted

00:34:45 --> 00:34:53
environment you have to come up with a

00:34:46 --> 00:34:56
smarter way of um doing things and this

00:34:52 --> 00:34:59
how how without any

00:34:55 --> 00:35:03
limitations we we yeah there wouldn't be

00:34:58 --> 00:35:05
as as like those nice solutions for many

00:35:02 --> 00:35:09
problems we have right now yeah no

00:35:04 --> 00:35:11
constraints no creativity right exactly

00:35:08 --> 00:35:13
and I and I I do think one of the

00:35:10 --> 00:35:15
underappreciated parts of your guys'

00:35:12 --> 00:35:18
group ever since your University days

00:35:14 --> 00:35:21
has been just how computer efficient a

00:35:17 --> 00:35:22
lot of your research has been um I I

00:35:20 --> 00:35:25
certainly have talked to so many

00:35:21 --> 00:35:28
University level uh researchers you know

00:35:24 --> 00:35:29
grad students posts um who saw that

00:35:27 --> 00:35:31
research that you guys put out a year

00:35:28 --> 00:35:32
and a half ago with staple diffusion and

00:35:30 --> 00:35:34
felt really inspired University and

00:35:31 --> 00:35:38
academic environments are somewhat

00:35:33 --> 00:35:39
compute constraint um and so I I think

00:35:37 --> 00:35:42
even though now you have access to tons

00:35:38 --> 00:35:45
of compute um the sort of self-imposed

00:35:41 --> 00:35:47
compute constraints uh leading to it it

00:35:44 --> 00:35:48
makes me very happy to hear that

00:35:46 --> 00:35:50
hose those are something those

00:35:47 --> 00:35:53
constraints are something you guys think

00:35:49 --> 00:35:54
as a fe are a feature not a bug right uh

00:35:52 --> 00:35:56
and will probably keep the open source

00:35:53 --> 00:35:58
cosystem pretty vibrant but in addition

00:35:55 --> 00:36:00
you're often sort of racing and and

00:35:57 --> 00:36:03
responding to other labs as well in the

00:35:59 --> 00:36:05
field um some of these labs are much

00:36:02 --> 00:36:07
better funded than you are bigger than

00:36:04 --> 00:36:09
you um so how do you think about

00:36:06 --> 00:36:11
prioritizing your research pipelines and

00:36:08 --> 00:36:14
your timelines um and how would you say

00:36:10 --> 00:36:15
that's different than Labs that are

00:36:13 --> 00:36:17
largely

00:36:14 --> 00:36:19
academic yeah that's a it's a very good

00:36:16 --> 00:36:21
point I think like um actually this

00:36:18 --> 00:36:24
whole competition it also drives the

00:36:20 --> 00:36:26
field of AI it's probably very important

00:36:23 --> 00:36:28
o not get distracted by this too much

00:36:25 --> 00:36:30
but of course like since one and a half

00:36:27 --> 00:36:31
years everyone is doing something with

00:36:29 --> 00:36:35
diffusion it can actually be quite fun

00:36:30 --> 00:36:37
to yeah uh work in this competitive

00:36:34 --> 00:36:39
nvironment um I think you everyone here

00:36:36 --> 00:36:41
njoys doing that it's it's quite fun

00:36:38 --> 00:36:44
that we have like this this lab here in

00:36:40 --> 00:36:47
Germany actually we compete with I

00:36:43 --> 00:36:49
don't know open AI um Google other

00:36:46 --> 00:36:52
esearch Labs across the world it's it's

00:36:48 --> 00:36:56
quite fun um it's intense definitely but

00:36:51 --> 00:36:58
it's it's a lot of fun I think in in the

00:36:55 --> 00:37:02
nd we're not a big lab but I think we

00:36:57 --> 00:37:04
really like all having kind of the

00:37:01 --> 00:37:06
same spirit and we're feeling like that

00:37:03 --> 00:37:09
we're working on something which

00:37:05 --> 00:37:11
makes sense and which in the end gives

00:37:08 --> 00:37:14
not only us something for us it's also

00:37:10 --> 00:37:16
really cool but also we can give

00:37:13 --> 00:37:19
something back to the community to other

00:37:15 --> 00:37:22
esearchers which might have not the

00:37:18 --> 00:37:25
resources we have well what I what I

00:37:21 --> 00:37:27
love about um the lab and the group you

00:37:24 --> 00:37:30
guys have put together the the

00:37:26 --> 00:37:32
philosophy of of the rising tide lifts

00:37:29 --> 00:37:34
all boats right because you guys publish

00:37:31 --> 00:37:36
your research for the world to use um

00:37:33 --> 00:37:39
and I thought one of the coolest things

00:37:35 --> 00:37:41
about the dolly 3 paper was uh the

00:37:38 --> 00:37:43
citations list which included uh your

00:37:40 --> 00:37:45
work right and so they were saying they

00:37:42 --> 00:37:47
were sort of thanking you um for the

00:37:44 --> 00:37:50
work that the the stable diffusion group

00:37:46 --> 00:37:52
had put get put out um I think your work

00:37:49 --> 00:37:54
ends up benefiting all kinds of labs

00:37:51 --> 00:37:57
across the industry and so while the

00:37:53 --> 00:38:00
competition can be intense um it's it's

00:37:56 --> 00:38:03
also one of the best most most inspiring

00:37:59 --> 00:38:05
examples of industries of an industry

00:38:02 --> 00:38:07
helping each other out and it comes up

00:38:04 --> 00:38:08
all the time in conversations with

00:38:06 --> 00:38:10
researchers at many of the labs we just

00:38:07 --> 00:38:13
alked about that they're very grateful

00:38:09 --> 00:38:15
for the research you guys do so I I hope

00:38:12 --> 00:38:17
you'll keep doing that yeah it just

00:38:14 --> 00:38:21
chose that it is super important to have

00:38:16 --> 00:38:24
this kind of um contribution to open and

00:38:20 --> 00:38:26
accessible models and everyone um in our

00:38:23 --> 00:38:29
team is super motivated to contribute to

00:38:25 --> 00:38:32
that so um couldn't couldn't imagine

00:38:28 --> 00:38:34
doing anything else right now thank you

00:38:31 --> 00:38:36
so much for listening to the a16z

00:38:33 --> 00:38:38
podcast if you've made it this far don't

00:38:35 --> 00:38:41
forget to subscribe so that you are the

00:38:37 --> 00:38:44
first to get our exclusive video content

00:38:41 --> 00:38:47
or you can check out this video that

00:38:43 --> 00:38:47
we've hand selected for

00:38:51 --> 00:38:56
[Music]

00:38:55 --> 00:39:02
you

00:38:57 --> 00:39:02
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
