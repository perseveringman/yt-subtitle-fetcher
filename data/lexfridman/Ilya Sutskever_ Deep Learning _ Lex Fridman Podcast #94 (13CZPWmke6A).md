---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "13CZPWmke6A"
title: "Ilya Sutskever: Deep Learning | Lex Fridman Podcast #94"
video_url: "https://www.youtube.com/watch?v=13CZPWmke6A"
thumbnail_url: "https://i.ytimg.com/vi/13CZPWmke6A/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=13CZPWmke6A"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-05-08T21:12:38.000Z"
upload_date: "2020-05-08"
duration_seconds: 5848
duration_human: "1:37:28"
view_count: 854470
like_count: 16687
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:09:44.898Z"
---

# Ilya Sutskever: Deep Learning | Lex Fridman Podcast #94

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=13CZPWmke6A
- video_id: 13CZPWmke6A
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-05-08T21:12:38.000Z
- upload_date: 2020-05-08
- duration: 1:37:28
- view_count: 854470
- like_count: 16687
- has_subtitle: true
- language: en
- availability: public
- tags: ilya sutskever, deep learning, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

Ilya Sutskever is the co-founder of OpenAI, is one of the most cited computer scientist in history with over 165,000 citations, and to me, is one of the most brilliant and insightful minds ever in the field of deep learning. There are very few people in this world who I would rather talk to and brainstorm with about deep learning, intelligence, and life than Ilya, on and off the mic.

Support this podcast by signing up with these sponsors:
- Cash App - use code "LexPodcast" and download:
- Cash App (App Store): https://apple.co/2sPrUHe
- Cash App (Google Play): https://bit.ly/2MlvP5w

EPISODE LINKS:
Ilya's Twitter: https://twitter.com/ilyasut
Ilya's Website: https://www.cs.toronto.edu/~ilya/

PODCAST INFO:
Podcast website:
https://lexfridman.com/podcast
Apple Podcasts:
https://apple.co/2lwqZIr
Spotify:
https://spoti.fi/2nEwCF8
RSS:
https://lexfridman.com/feed/podcast/
Full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
2:23 - AlexNet paper and the ImageNet moment
8:33 - Cost functions
13:39 - Recurrent neural networks
16:19 - Key ideas that led to success of deep learning
19:57 - What's harder to solve: language or vision?
29:35 - We're massively underestimating deep learning
36:04 - Deep double descent
41:20 - Backpropagation
42:42 - Can neural networks be made to reason?
50:35 - Long-term memory
56:37 - Language models
1:00:35 - GPT-2
1:07:14 - Active learning
1:08:52 - Staged release of AI systems
1:13:41 - How to build AGI?
1:25:00 - Question to AGI
1:32:07 - Meaning of life

CONNECT:
- Subscribe to this YouTube channel
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/LexFridmanPage
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
the following is a conversation with

00:00:01 --> 00:00:06
elias discover

00:00:03 --> 00:00:08
co-founder and chief scientist of open

00:00:05 --> 00:00:10
ai one of the most cited computer

00:00:07 --> 00:00:14
scientists in history

00:00:09 --> 00:00:16
with over 165 000 citations

00:00:13 --> 00:00:18
and to me one of the most brilliant and

00:00:15 --> 00:00:21
insightful minds

00:00:17 --> 00:00:22
ever in the field of deep learning there

00:00:20 --> 00:00:24
are very few people in this world

00:00:21 --> 00:00:26
who i would rather talk to and

00:00:23 --> 00:00:28
brainstorm with about deep learning

00:00:25 --> 00:00:29
intelligence and life in general than

00:00:27 --> 00:00:32
ilia

00:00:28 --> 00:00:35
on and off the mic this was an honor

00:00:31 --> 00:00:37
and a pleasure this conversation was

00:00:34 --> 00:00:38
recorded before the outbreak of the

00:00:36 --> 00:00:39
pandemic

00:00:37 --> 00:00:41
for everyone feeling the medical

00:00:38 --> 00:00:42
psychological and financial burden of

00:00:40 --> 00:00:45
this crisis

00:00:41 --> 00:00:46
i'm sending love your way stay strong

00:00:44 --> 00:00:48
we're in this together

00:00:45 --> 00:00:50
we'll beat this thing this is the

00:00:47 --> 00:00:52
artificial intelligence podcast

00:00:49 --> 00:00:54
if you enjoy it subscribe on youtube

00:00:51 --> 00:00:54
review it with five stars and have a

00:00:53 --> 00:00:56
podcast

00:00:53 --> 00:00:57
support it on patreon or simply connect

00:00:55 --> 00:01:01
with me on twitter

00:00:56 --> 00:01:03
at lex friedman spelled f-r-i-d-m-a-n

00:01:00 --> 00:01:05
as usual i'll do a few minutes of as now

00:01:02 --> 00:01:07
and never any ads in the middle that can

00:01:04 --> 00:01:09
break the flow of the conversation

00:01:06 --> 00:01:11
i hope that works for you and doesn't

00:01:08 --> 00:01:14
hurt the listening experience

00:01:10 --> 00:01:16
this show is presented by cash app the

00:01:13 --> 00:01:19
number one finance app in the app store

00:01:15 --> 00:01:21
when you get it use code lex podcast

00:01:18 --> 00:01:22
cash app lets you send money to friends

00:01:20 --> 00:01:24
buy bitcoin

00:01:22 --> 00:01:26
vest in the stock market with as

00:01:23 --> 00:01:28
little as one dollar

00:01:25 --> 00:01:30
since cash app allows you to buy bitcoin

00:01:27 --> 00:01:32
let me mention that cryptocurrency in

00:01:29 --> 00:01:35
the context of the history of money

00:01:31 --> 00:01:37
is fascinating i recommend ascent of

00:01:34 --> 00:01:40
money as a great book on this history

00:01:36 --> 00:01:42
both the book and audiobook are great

00:01:39 --> 00:01:45
debits and credits on ledgers

00:01:41 --> 00:01:45
tarted around 30 000 years ago the us

00:01:44 --> 00:01:48
dollar

00:01:44 --> 00:01:50
created over 200 years ago and bitcoin

00:01:47 --> 00:01:52
the first decentralized cryptocurrency

00:01:49 --> 00:01:55
released just over 10 years ago

00:01:51 --> 00:01:56
so given that history cryptocurrency is

00:01:54 --> 00:01:57
till very much in its early days of

00:01:56 --> 00:02:00
development

00:01:56 --> 00:02:00
but it's still aiming to and just might

00:01:59 --> 00:02:03
redefine

00:02:00 --> 00:02:05
the nature of money so again if you get

00:02:02 --> 00:02:09
cash out from the app store google play

00:02:04 --> 00:02:10
and use the code lex podcast you get ten

00:02:08 --> 00:02:12
dollars

00:02:09 --> 00:02:13
and cash up will also donate ten dollars

00:02:11 --> 00:02:15
to first

00:02:12 --> 00:02:16
an organization that is helping advance

00:02:14 --> 00:02:19
robotics and stem education

00:02:15 --> 00:02:20
for young people around the world and

00:02:18 --> 00:02:24
now

00:02:19 --> 00:02:24
here's my conversation with ilya

00:02:23 --> 00:02:27
you were one of the three authors with

00:02:25 --> 00:02:31
alex kaczowski

00:02:26 --> 00:02:34
jeff hinton of the famed alex ned paper

00:02:30 --> 00:02:35
that is arguably the paper that marked

00:02:33 --> 00:02:36
the big

00:02:34 --> 00:02:38
catalytic moment that launched the deep

00:02:35 --> 00:02:40
learning revolution

00:02:37 --> 00:02:42
at that time take us back to that time

00:02:39 --> 00:02:44
what was your intuition about

00:02:41 --> 00:02:45
neural networks about the

00:02:43 --> 00:02:46
representational power of neural

00:02:44 --> 00:02:49
networks

00:02:45 --> 00:02:50
and maybe you could mention how did that

00:02:48 --> 00:02:52
evolve over

00:02:49 --> 00:02:54
the next few years up to today over the

00:02:52 --> 00:02:56
10 years

00:02:53 --> 00:03:00
yeah i can answer that question at some

00:02:55 --> 00:03:03
point in about 2010 or 2011

00:02:59 --> 00:03:06
i connected two facts in my mind

00:03:02 --> 00:03:09
basically

00:03:05 --> 00:03:10
the realization was this at some point

00:03:08 --> 00:03:12
we realized that we can train

00:03:09 --> 00:03:15
very large i shouldn't say very you know

00:03:11 --> 00:03:17
they're tiny by today's standards but

00:03:14 --> 00:03:19
large and deep neural networks end to

00:03:16 --> 00:03:22
end with back propagation

00:03:18 --> 00:03:24
at some point different people obtained

00:03:21 --> 00:03:26
this result i obtained this result

00:03:23 --> 00:03:28
he first the first moment in which i

00:03:25 --> 00:03:30
realized that

00:03:27 --> 00:03:31
deep neural networks are powerful was

00:03:29 --> 00:03:33
when james martens invented the

00:03:30 --> 00:03:36
ssian-free optimizer

00:03:32 --> 00:03:37
in 2010 and he trained a 10-layer neural

00:03:35 --> 00:03:40
network

00:03:36 --> 00:03:43
end-to-end without pre-training

00:03:39 --> 00:03:44
from scratch and when that happened i

00:03:42 --> 00:03:46
thought this is it

00:03:43 --> 00:03:47
because if you can train a big neural

00:03:45 --> 00:03:48
network a big neural network can

00:03:46 --> 00:03:50
represent

00:03:47 --> 00:03:53
very complicated function because if you

00:03:49 --> 00:03:56
have a neural network with 10 layers

00:03:52 --> 00:03:57
it's as though you allow the human brain

00:03:55 --> 00:03:59
to run for

00:03:56 --> 00:04:01
some number of milliseconds neuron

00:03:58 --> 00:04:04
firings are slow

00:04:00 --> 00:04:06
and so in maybe 100 milliseconds your

00:04:03 --> 00:04:07
neurons only fire 10 times so it's also

00:04:05 --> 00:04:09
kind of like 10 layers

00:04:06 --> 00:04:11
and in 100 milliseconds you can

00:04:08 --> 00:04:13
perfectly recognize any object

00:04:10 --> 00:04:15
so i thought so i already had the idea

00:04:12 --> 00:04:16
then that we need to train a very big

00:04:14 --> 00:04:19
neural network

00:04:16 --> 00:04:21
on lots of supervised data and then it

00:04:18 --> 00:04:22
must succeed because we can find the

00:04:20 --> 00:04:23
best neural network

00:04:21 --> 00:04:25
and then there's also theory that if you

00:04:22 --> 00:04:27
have more data than parameters

00:04:24 --> 00:04:28
you won't overfit today we know that

00:04:26 --> 00:04:30
actually this theory is very incomplete

00:04:28 --> 00:04:32
and you want overfitting when you have

00:04:29 --> 00:04:33
less data than parameters but definitely

00:04:31 --> 00:04:35
if you have more data than parameters

00:04:32 --> 00:04:36
you want overfit so the fact that neural

00:04:34 --> 00:04:39
networks were heavily

00:04:35 --> 00:04:40
over parametrized wasn't discouraging to

00:04:38 --> 00:04:41
you

00:04:39 --> 00:04:43
so you you were thinking about the

00:04:40 --> 00:04:45
ory that the number of parameters

00:04:42 --> 00:04:46
the fact there's a huge number of

00:04:44 --> 00:04:48
parameters is okay it's gonna be okay i

00:04:45 --> 00:04:50
mean there was some evidence before that

00:04:47 --> 00:04:51
it was okayish but the theory was most

00:04:49 --> 00:04:53
he theory was that if you had a big

00:04:50 --> 00:04:53
data set and a big neural net it was

00:04:52 --> 00:04:55
going to work

00:04:52 --> 00:04:58
the over parameterization just didn't

00:04:54 --> 00:04:58
really um figure much as a problem i

00:04:57 --> 00:05:00
thought well with images you're just

00:04:58 --> 00:05:01
going to add some data augmentation it's

00:04:59 --> 00:05:03
going to be okay

00:05:00 --> 00:05:05
so where was any doubt coming from the

00:05:02 --> 00:05:06
main doubt was can we train a bigger

00:05:04 --> 00:05:08
will we have enough computer trainer big

00:05:05 --> 00:05:10
enough neural net with back propagation

00:05:07 --> 00:05:11
i thought would work

00:05:09 --> 00:05:13
this image wasn't clear would was

00:05:10 --> 00:05:15
whether there would be enough compute

00:05:12 --> 00:05:16
to get a very convincing result and then

00:05:14 --> 00:05:18
at some point alex krajewski wrote these

00:05:15 --> 00:05:20
insanely fast gooda kernels for

00:05:17 --> 00:05:22
training convolutional neural nets and

00:05:19 --> 00:05:23
that was bam let's do this let's get

00:05:21 --> 00:05:24
imaging that and it's going to be the

00:05:22 --> 00:05:25
greatest thing

00:05:23 --> 00:05:28
was your intuition most of your

00:05:24 --> 00:05:31
intuition from empirical results

00:05:27 --> 00:05:33
by you and by others so like just

00:05:30 --> 00:05:34
actually demonstrating that a piece of

00:05:32 --> 00:05:35
program can train a 10-layer neural

00:05:33 --> 00:05:38
network

00:05:34 --> 00:05:40
or was there some pen and paper or

00:05:37 --> 00:05:43
marker and white board

00:05:39 --> 00:05:44
thinking intuition like because you just

00:05:42 --> 00:05:45
connected a

00:05:43 --> 00:05:47
10 layer large neural network to the

00:05:44 --> 00:05:50
brain so you just mentioned the brain so

00:05:46 --> 00:05:52
in your intuition about neural networks

00:05:49 --> 00:05:54
does the human brain

00:05:51 --> 00:05:55
come into play as a intuition builder

00:05:53 --> 00:05:57
definitely

00:05:54 --> 00:05:58
i mean you you know you got to be

00:05:56 --> 00:06:00
precise with these analogies between

00:05:57 --> 00:06:01
eural artificial neural networks in the

00:05:59 --> 00:06:03
brain

00:06:00 --> 00:06:04
but there is no question that the brain

00:06:02 --> 00:06:07
is a huge source

00:06:03 --> 00:06:08
of intuition and inspiration for deep

00:06:06 --> 00:06:11
learning researchers since

00:06:07 --> 00:06:12
all the way from rosenblatt in the 60s

00:06:10 --> 00:06:14
like

00:06:11 --> 00:06:15
if you look at the the whole idea of a

00:06:13 --> 00:06:16
neural network is directly inspired by

00:06:14 --> 00:06:18
the brain

00:06:15 --> 00:06:21
you had people like mccollum and pitts

00:06:17 --> 00:06:23
who were saying hey you got this these

00:06:20 --> 00:06:25
neurons in the brain and hey we recently

00:06:22 --> 00:06:26
learned about the computer and automata

00:06:24 --> 00:06:28
can we use some ideas from the computer

00:06:25 --> 00:06:29
and automata to design

00:06:27 --> 00:06:31
some kind of computational object that's

00:06:28 --> 00:06:33
going to be

00:06:30 --> 00:06:35
simple computational and kind of like

00:06:32 --> 00:06:36
the brain and they invented the neuron

00:06:34 --> 00:06:38
so they were inspired by it back then

00:06:35 --> 00:06:39
you had the convolutional neural

00:06:37 --> 00:06:41
network from fukushima

00:06:38 --> 00:06:43
nd then later yeah khan who said hey if

00:06:40 --> 00:06:44
you limit the receptive fields of a

00:06:42 --> 00:06:44
neural network it's going to be

00:06:43 --> 00:06:47
specially

00:06:43 --> 00:06:48
suitable for images as it turned out to

00:06:46 --> 00:06:50
be true so there was

00:06:47 --> 00:06:51
a very small number of

00:06:49 --> 00:06:53
examples where analogies

00:06:50 --> 00:06:55
to the brain were successful and i

00:06:52 --> 00:06:56
thought well probably an artificial

00:06:54 --> 00:06:57
neuron is not

00:06:55 --> 00:06:59
hat different from the brain if it's

00:06:56 --> 00:07:02
queen hard enough so let's just

00:06:58 --> 00:07:03
assume it is and roll with it so no

00:07:01 --> 00:07:04
we're now at a time where deep learning

00:07:02 --> 00:07:08
is very successful

00:07:03 --> 00:07:10
so let us squint less and say

00:07:07 --> 00:07:12
let's uh open our eyes and say what to

00:07:09 --> 00:07:14
use an interesting

00:07:11 --> 00:07:17
difference between the human brain now i

00:07:13 --> 00:07:18
know you're probably not an expert

00:07:16 --> 00:07:20
neither in your scientist and your

00:07:17 --> 00:07:21
biologist but loosely speaking

00:07:19 --> 00:07:23
what's the difference between the human

00:07:20 --> 00:07:24
brain and artificial neural networks

00:07:22 --> 00:07:27
that's interesting to you

00:07:23 --> 00:07:29
for the next decade or two that's a good

00:07:26 --> 00:07:30
question to ask what is in what is an

00:07:28 --> 00:07:31
interesting difference between the

00:07:29 --> 00:07:32
neurons between

00:07:30 --> 00:07:35
the brain and our artificial neural

00:07:31 --> 00:07:38
networks so i feel like today

00:07:34 --> 00:07:39
artificial neural networks so we all

00:07:37 --> 00:07:41
agree that there are certain

00:07:38 --> 00:07:42
dimensions in which the human brain

00:07:40 --> 00:07:44
vastly outperforms our

00:07:41 --> 00:07:46
models but i also think that there are

00:07:43 --> 00:07:47
some ways in which artificial neural

00:07:45 --> 00:07:49
networks

00:07:46 --> 00:07:51
have a number of very important

00:07:48 --> 00:07:52
advantages over the brain

00:07:50 --> 00:07:54
look looking at the advantages versus

00:07:51 --> 00:07:56
disadvantages is a good way to figure

00:07:53 --> 00:07:59
out what is the important difference

00:07:55 --> 00:08:00
so the brain uses spikes which may or

00:07:58 --> 00:08:01
may not be important

00:07:59 --> 00:08:03
yeah that's a really interesting

00:08:00 --> 00:08:04
question do you think it's important or

00:08:02 --> 00:08:07
not

00:08:03 --> 00:08:09
hat's one big architectural difference

00:08:06 --> 00:08:11
between artificial neural networks and

00:08:08 --> 00:08:13
it's hard to tell but my prior is not

00:08:10 --> 00:08:14
very high and i can

00:08:12 --> 00:08:15
say why you know there are people

00:08:13 --> 00:08:17
who are interested in spiking neural

00:08:14 --> 00:08:19
networks and basically

00:08:16 --> 00:08:20
what they figured out is that they need

00:08:18 --> 00:08:23
to simulate the

00:08:19 --> 00:08:24
non-spiking neural networks in spikes

00:08:22 --> 00:08:26
and that's how they're gonna make them

00:08:24 --> 00:08:28
work if you don't simulate the non-spike

00:08:25 --> 00:08:29
in neural networks in spikes it's not

00:08:27 --> 00:08:30
going to work because the question is

00:08:28 --> 00:08:31
why should it work

00:08:29 --> 00:08:34
and that connects to questions around

00:08:30 --> 00:08:36
back propagation and questions around

00:08:33 --> 00:08:39
eep learning you got this giant neural

00:08:36 --> 00:08:42
network why should it work at all

00:08:38 --> 00:08:42
why should the learning rule work at all

00:08:43 --> 00:08:47
it's not a self-evident question

00:08:44 --> 00:08:48
especially if you let's say if you were

00:08:46 --> 00:08:50
just starting in the field and you read

00:08:47 --> 00:08:52
the very early papers

00:08:49 --> 00:08:54
you can say hey people are saying let's

00:08:52 --> 00:08:56
build neural networks

00:08:53 --> 00:08:57
that's a great idea because the brain is

00:08:55 --> 00:08:58
a neural network so it would be useful

00:08:56 --> 00:09:01
to build neural networks

00:08:58 --> 00:09:02
now let's figure out how to train them

00:09:00 --> 00:09:04
it should be possible to train them

00:09:01 --> 00:09:08
properly but how

00:09:03 --> 00:09:11
and so the big idea is the cost function

00:09:07 --> 00:09:12
that's the big idea the cost function

00:09:10 --> 00:09:15
is a way of measuring the performance of

00:09:11 --> 00:09:17
the system according to some

00:09:14 --> 00:09:18
asure by the way that is a big

00:09:16 --> 00:09:21
actually let me think is that

00:09:17 --> 00:09:22
uh one a difficult idea to

00:09:20 --> 00:09:23
arrive at

00:09:21 --> 00:09:27
and how big of an idea is that that

00:09:22 --> 00:09:27
here's a single cost function

00:09:26 --> 00:09:31
let me sorry let me take a pause is

00:09:29 --> 00:09:34
upervised learning

00:09:30 --> 00:09:35
a difficult concept to come to i don't

00:09:33 --> 00:09:37
know

00:09:34 --> 00:09:38
all concepts are very easy in retrospect

00:09:36 --> 00:09:39
yeah that's what it seems trivial now

00:09:38 --> 00:09:41
but i

00:09:38 --> 00:09:42
so because because the reason i asked

00:09:40 --> 00:09:43
that and we'll talk about it because is

00:09:41 --> 00:09:46
there other

00:09:42 --> 00:09:47
things is there things that don't

00:09:45 --> 00:09:49
necessarily have

00:09:46 --> 00:09:50
a cost function maybe have many cost

00:09:48 --> 00:09:52
functions or maybe have

00:09:49 --> 00:09:55
dynamic cost functions or maybe a

00:09:51 --> 00:09:56
totally different kind of architectures

00:09:54 --> 00:09:58
because we have to think like that in

00:09:55 --> 00:10:00
order to arrive at something new right

00:09:57 --> 00:10:02
so the only so the good examples of

00:09:59 --> 00:10:05
things which don't have clear cost

00:10:01 --> 00:10:07
functions are gans

00:10:04 --> 00:10:09
again you have a game so instead of

00:10:06 --> 00:10:10
thinking of a cost function

00:10:08 --> 00:10:12
where you want to optimize where you

00:10:09 --> 00:10:14
know that you have an algorithm gradient

00:10:11 --> 00:10:14
descent which will optimize the cost

00:10:13 --> 00:10:16
function

00:10:13 --> 00:10:17
and then you can reason about the

00:10:15 --> 00:10:18
behavior of your system in terms of what

00:10:16 --> 00:10:21
it optimizes

00:10:18 --> 00:10:22
with again you say i have a game and

00:10:20 --> 00:10:23
i'll reason

00:10:21 --> 00:10:25
about the behavior of the system in

00:10:22 --> 00:10:26
terms of the equilibrium of the game

00:10:24 --> 00:10:28
but it's all about coming up with these

00:10:25 --> 00:10:28
mathematical objects that help us reason

00:10:27 --> 00:10:31
about

00:10:28 --> 00:10:33
he behavior of our system right that's

00:10:30 --> 00:10:34
really interesting yes again is the only

00:10:32 --> 00:10:36
one it's kind of a com

00:10:33 --> 00:10:38
the cost function is emergent from the

00:10:35 --> 00:10:39
comparison

00:10:37 --> 00:10:40
it's i don't i don't know if it has a

00:10:38 --> 00:10:41
cost function i don't know if it's

00:10:39 --> 00:10:42
meaningful to talk about the cost

00:10:40 --> 00:10:43
function of again

00:10:41 --> 00:10:45
it's kind of like the cost function of

00:10:42 --> 00:10:46
biological evolution or the cost

00:10:44 --> 00:10:49
function of the economy

00:10:45 --> 00:10:52
it's you can talk about

00:10:48 --> 00:10:55
regions to which it will go towards but

00:10:51 --> 00:10:55
i don't think

00:10:55 --> 00:10:59
the cost function analogy

00:10:56 --> 00:11:00
is the most useful so if evolution

00:10:58 --> 00:11:01
doesn't

00:10:59 --> 00:11:02
hat's really interesting so if

00:11:00 --> 00:11:03
evolution doesn't really have a cost

00:11:02 --> 00:11:07
function

00:11:02 --> 00:11:07
like a cost function based on its

00:11:06 --> 00:11:12
omething akin to our mathematical

00:11:09 --> 00:11:13
conception of a cost function

00:11:11 --> 00:11:16
then do you think cost functions in deep

00:11:12 --> 00:11:18
learning are holding us back

00:11:15 --> 00:11:20
yeah i so you just kind of mentioned

00:11:17 --> 00:11:23
that cost function is a nice first

00:11:19 --> 00:11:24
profound idea do you think that's a good

00:11:22 --> 00:11:27
idea

00:11:23 --> 00:11:29
do you think it's an idea will go past

00:11:26 --> 00:11:32
so self-play starts to touch on that a

00:11:28 --> 00:11:34
little bit uh in reinforcement learning

00:11:31 --> 00:11:35
systems that's right self-play and also

00:11:33 --> 00:11:36
ideas around exploration where you're

00:11:34 --> 00:11:39
trying to

00:11:35 --> 00:11:41
take action that surprise a predictor

00:11:38 --> 00:11:43
i'm a big fan of cos functions i think

00:11:40 --> 00:11:44
cost functions are great and they serve

00:11:42 --> 00:11:45
us really well and i think that whenever

00:11:43 --> 00:11:48
we can do things because with cost

00:11:44 --> 00:11:49
functions we should

00:11:47 --> 00:11:51
and you know maybe there is a chance

00:11:48 --> 00:11:53
that we will come up with some

00:11:50 --> 00:11:55
yet another profound way of looking at

00:11:52 --> 00:11:56
hings that will involve cost functions

00:11:54 --> 00:11:57
in a less central way

00:11:55 --> 00:12:00
but i don't know i think cost functions

00:11:56 --> 00:12:00
are i mean

00:11:59 --> 00:12:03
i would not better guess against cost

00:12:01 --> 00:12:06
functions

00:12:02 --> 00:12:07
is there other things about the brain

00:12:05 --> 00:12:10
that pop into your mind

00:12:06 --> 00:12:11
that might be different and interesting

00:12:09 --> 00:12:14
for us to consider

00:12:10 --> 00:12:17
in designing artificial neural networks

00:12:13 --> 00:12:18
o we talked about spiking a little bit

00:12:16 --> 00:12:20
i mean one one thing which may

00:12:17 --> 00:12:21
potentially be useful i think people

00:12:19 --> 00:12:23
neuroscientists figured out something

00:12:20 --> 00:12:25
about the learning rule of the brain or

00:12:22 --> 00:12:26
i'm talking about spike time independent

00:12:24 --> 00:12:29
elasticity and it would be nice if some

00:12:26 --> 00:12:31
people were to study that in simulation

00:12:28 --> 00:12:32
wait sorry spike time independent

00:12:30 --> 00:12:35
plasticity yeah what's that

00:12:31 --> 00:12:37
std it's a particular learning rule that

00:12:34 --> 00:12:39
uses spike timing to figure out how to

00:12:36 --> 00:12:41
determine how to update the

00:12:38 --> 00:12:43
synapses so it's kind of like if the

00:12:40 --> 00:12:45
synapse fires into the neuron before the

00:12:42 --> 00:12:47
neuron fires

00:12:44 --> 00:12:48
then it strengthens the synapse and if

00:12:46 --> 00:12:50
the synapse fires into the neurons

00:12:47 --> 00:12:52
hortly after the neuron fire then it

00:12:49 --> 00:12:53
weakens the synapse something along this

00:12:51 --> 00:12:55
line

00:12:52 --> 00:12:57
i'm 90 sure it's right so if i said

00:12:54 --> 00:13:00
something wrong here

00:12:56 --> 00:13:01
don't don't get too angry

00:12:59 --> 00:13:03
but you sounded brilliant while saying

00:13:00 --> 00:13:05
it but the timing that's one thing

00:13:02 --> 00:13:07
that's missing

00:13:04 --> 00:13:08
the the temporal dynamics is not

00:13:06 --> 00:13:09
captured

00:13:07 --> 00:13:12
i think that's like a fundamental

00:13:08 --> 00:13:12
property of the brain is the timing of

00:13:11 --> 00:13:14
this

00:13:11 --> 00:13:16
of the signals well your recurrent

00:13:13 --> 00:13:19
neural networks

00:13:15 --> 00:13:21
but you you think of that as i mean

00:13:18 --> 00:13:25
that's a very crude simplified

00:13:20 --> 00:13:28
uh what's that called uh there's a clock

00:13:24 --> 00:13:28
i guess to uh recurring neural networks

00:13:27 --> 00:13:30
it's

00:13:28 --> 00:13:32
this it seems like the brain is the

00:13:29 --> 00:13:32
general the continuous version of that

00:13:31 --> 00:13:35
he

00:13:31 --> 00:13:37
generalization where all possible

00:13:34 --> 00:13:39
timings are possible and then within

00:13:36 --> 00:13:40
those timings this contains some

00:13:38 --> 00:13:43
information

00:13:39 --> 00:13:44
you think recurrent neural networks the

00:13:42 --> 00:13:47
recurrence

00:13:43 --> 00:13:49
in recurrent neural networks can capture

00:13:46 --> 00:13:53
the same kind of phenomena

00:13:48 --> 00:13:54
s the timing that seems to be important

00:13:52 --> 00:13:56
for the brain

00:13:53 --> 00:13:59
the in the firing of neurons in the

00:13:55 --> 00:13:59
brain i i mean i think i think regarding

00:13:58 --> 00:14:01
neurons

00:13:58 --> 00:14:03
recurrent neural networks are amazing

00:14:00 --> 00:14:05
and they can do

00:14:02 --> 00:14:08
i think they can do anything we'd want

00:14:04 --> 00:14:10
hem to if we'd want a system to do

00:14:07 --> 00:14:11
right now recurrent neural networks have

00:14:09 --> 00:14:12
been superseded by transformers but

00:14:10 --> 00:14:13
maybe

00:14:11 --> 00:14:16
one day they'll make a comeback maybe

00:14:12 --> 00:14:18
they'll be back we'll see

00:14:15 --> 00:14:19
let me uh in a small tangent say do you

00:14:17 --> 00:14:22
think they'll be back

00:14:18 --> 00:14:23
so so much of the breakthroughs recently

00:14:21 --> 00:14:25
that we'll talk about on

00:14:22 --> 00:14:27
uh natural language processing and

00:14:24 --> 00:14:30
language modeling has been with

00:14:26 --> 00:14:31
transformers that don't emphasize your

00:14:29 --> 00:14:32
currents

00:14:30 --> 00:14:35
do you think recurrence will make a

00:14:32 --> 00:14:36
comeback well

00:14:34 --> 00:14:39
some kind of recurrence i think very

00:14:35 --> 00:14:39
likely recurrent neural networks for

00:14:38 --> 00:14:42
pros

00:14:38 --> 00:14:44
as they're typically thought of for

00:14:41 --> 00:14:45
processing sequences i think it's also

00:14:43 --> 00:14:47
possible

00:14:44 --> 00:14:50
what is to you a recurrent neural

00:14:46 --> 00:14:51
network and generally speaking i guess

00:14:49 --> 00:14:52
what is a recurrent neural network

00:14:50 --> 00:14:54
you have a neural network which

00:14:51 --> 00:14:55
maintains a high dimensional hidden

00:14:53 --> 00:14:58
state

00:14:54 --> 00:14:59
and then when an observation arrives it

00:14:57 --> 00:15:00
updates its high dimensional hidden

00:14:58 --> 00:15:04
state through

00:14:59 --> 00:15:06
its connections in some way

00:15:03 --> 00:15:08
so do you think you know that's what

00:15:05 --> 00:15:13
like expert systems did

00:15:07 --> 00:15:15
right symbolic ai uh the knowledge based

00:15:12 --> 00:15:16
growing a knowledge base is is

00:15:14 --> 00:15:19
maintaining a

00:15:15 --> 00:15:20
hidden state which is its knowledge base

00:15:18 --> 00:15:22
and is growing it by sequential

00:15:19 --> 00:15:22
processing do you think of it more

00:15:21 --> 00:15:26
generally

00:15:22 --> 00:15:30
in that way or is it simply

00:15:25 --> 00:15:31
is it the more constrained form that of

00:15:29 --> 00:15:33
a hidden state with certain kind of

00:15:30 --> 00:15:35
gating units that we think of as today

00:15:32 --> 00:15:37
with lstms and that

00:15:34 --> 00:15:38
i mean the hidden state is technically

00:15:36 --> 00:15:40
what you described there the hidden

00:15:37 --> 00:15:42
state that goes inside the lstm or the

00:15:39 --> 00:15:43
rnn or something like this

00:15:41 --> 00:15:45
but then what should be contained you

00:15:42 --> 00:15:45
know if you want to make the expert

00:15:44 --> 00:15:49
system

00:15:44 --> 00:15:49
um analogy i'm not i mean you could say

00:15:48 --> 00:15:51
that

00:15:48 --> 00:15:53
he knowledge is stored in the

00:15:50 --> 00:15:55
connections and then the short term

00:15:52 --> 00:15:58
processing is done in the

00:15:54 --> 00:16:00
hidden state yes

00:15:57 --> 00:16:02
could you say that yeah so sort of do

00:15:59 --> 00:16:03
you think there's a future of building

00:16:01 --> 00:16:06
large

00:16:02 --> 00:16:07
scale knowledge bases within the neural

00:16:05 --> 00:16:09
networks

00:16:06 --> 00:16:11
definitely

00:16:08 --> 00:16:12
so we're going to pause on that

00:16:10 --> 00:16:13
confidence because i want to explore

00:16:12 --> 00:16:17
that

00:16:12 --> 00:16:17
well let me zoom back out and ask

00:16:16 --> 00:16:21
back to the history of imagenet neural

00:16:19 --> 00:16:23
networks have been around for many

00:16:20 --> 00:16:25
decades as you mentioned

00:16:22 --> 00:16:27
what do you think were the key ideas

00:16:24 --> 00:16:28
that led to their success that image in

00:16:26 --> 00:16:32
that moment

00:16:27 --> 00:16:33
and beyond the success in the past 10

00:16:31 --> 00:16:34
years

00:16:32 --> 00:16:37
okay so the question is to make sure i

00:16:33 --> 00:16:39
didn't miss anything the key ideas that

00:16:36 --> 00:16:40
led to the success of deep learning over

00:16:38 --> 00:16:43
the past 10 years

00:16:39 --> 00:16:44
exactly even though the fundamental

00:16:42 --> 00:16:48
thing behind deep learning has been

00:16:43 --> 00:16:52
around for much longer so

00:16:47 --> 00:16:54
the key idea about deep learning

00:16:51 --> 00:16:56
or rather the key fact about deep

00:16:53 --> 00:16:59
learning before

00:16:55 --> 00:17:02
deep learning started to be successful

00:16:58 --> 00:17:03
is that it was underestimated

00:17:01 --> 00:17:05
people who worked in machine learning

00:17:02 --> 00:17:07
simply didn't think that neural networks

00:17:04 --> 00:17:09
could do much

00:17:06 --> 00:17:11
people didn't believe that large neural

00:17:08 --> 00:17:13
networks could be trained

00:17:10 --> 00:17:15
people thought that well there was lots

00:17:12 --> 00:17:17
of there was a lot of debate going on in

00:17:14 --> 00:17:19
machine learning about what are the

00:17:16 --> 00:17:20
right methods and so on and

00:17:18 --> 00:17:22
people were arguing because there were

00:17:19 --> 00:17:24
no there were there were no there was no

00:17:21 --> 00:17:25
way to get hard facts

00:17:23 --> 00:17:27
and by that i mean there were no

00:17:24 --> 00:17:29
benchmarks which were truly hard

00:17:26 --> 00:17:31
that if you do really well in them then

00:17:28 --> 00:17:34
you can say look

00:17:30 --> 00:17:36
here is my system that's when you switch

00:17:33 --> 00:17:37
from

00:17:35 --> 00:17:39
that's when this field becomes a little

00:17:36 --> 00:17:41
bit more of an engineering field so in

00:17:38 --> 00:17:41
terms of deep learning to answer the

00:17:40 --> 00:17:44
question

00:17:40 --> 00:17:46
directly the ideas were all there the

00:17:43 --> 00:17:48
thing that was missing was

00:17:45 --> 00:17:50
a lot of supervised data and a lot of

00:17:47 --> 00:17:52
compute

00:17:49 --> 00:17:53
once you have a lot of supervised data

00:17:51 --> 00:17:55
nd a lot of compute then there is a

00:17:52 --> 00:17:58
third thing which is needed as well

00:17:54 --> 00:17:59
and that is conviction conviction that

00:17:57 --> 00:18:01
if you take

00:17:58 --> 00:18:03
the right stuff which already exists and

00:18:00 --> 00:18:04
apply and mix it with a lot of data and

00:18:02 --> 00:18:07
a lot of compute

00:18:03 --> 00:18:08
that it will in fact work and so that

00:18:06 --> 00:18:09
was the

00:18:07 --> 00:18:11
missing piece it was you had the you

00:18:08 --> 00:18:13
need the data

00:18:10 --> 00:18:14
you needed the compute which showed up

00:18:12 --> 00:18:16
in terms of gpus

00:18:14 --> 00:18:19
and you needed the conviction to realize

00:18:15 --> 00:18:22
that you need to mix them together

00:18:18 --> 00:18:22
so that's really interesting so uh i i

00:18:21 --> 00:18:24
guess the

00:18:21 --> 00:18:27
presence of compute and the present

00:18:23 --> 00:18:29
supervised data

00:18:26 --> 00:18:31
llowed the empirical evidence to do the

00:18:28 --> 00:18:32
convincing of the majority of the

00:18:30 --> 00:18:34
computer science community

00:18:31 --> 00:18:36
so i guess there was a key moment with

00:18:34 --> 00:18:39
uh

00:18:35 --> 00:18:42
jitendra malik and uh alex

00:18:38 --> 00:18:44
alyosha afros who were very skeptical

00:18:41 --> 00:18:45
right and then there's a jeffrey hinton

00:18:43 --> 00:18:47
that was

00:18:44 --> 00:18:49
the opposite of skeptical and there was

00:18:46 --> 00:18:51
a convincing moment and i think emission

00:18:48 --> 00:18:52
had served as that moment

00:18:50 --> 00:18:54
hat's right and they represented this

00:18:51 --> 00:18:56
kind of were the big

00:18:53 --> 00:18:58
pillars of computer vision community

00:18:55 --> 00:19:01
kind of the

00:18:58 --> 00:19:02
wizards got together and then all of

00:19:00 --> 00:19:05
a sudden there was a shift

00:19:01 --> 00:19:07
and it's not enough for the ideas to all

00:19:04 --> 00:19:08
be there and the computer to be there

00:19:06 --> 00:19:10
it's

00:19:07 --> 00:19:12
for it to convince the cynicism that

00:19:09 --> 00:19:13
existed that

00:19:11 --> 00:19:16
it's interesting that people just didn't

00:19:12 --> 00:19:19
believe for a couple of decades

00:19:15 --> 00:19:20
yeah well but it's more than that it's

00:19:18 --> 00:19:22
kind of

00:19:19 --> 00:19:24
been put this way it sounds like well

00:19:21 --> 00:19:25
you know those silly people who didn't

00:19:23 --> 00:19:26
believe

00:19:24 --> 00:19:28
what were they what were they missing

00:19:25 --> 00:19:29
but in reality things were confusing

00:19:27 --> 00:19:31
because neural networks really did not

00:19:28 --> 00:19:32
work on anything

00:19:30 --> 00:19:34
and they were not the best method on

00:19:31 --> 00:19:37
pretty much anything as well

00:19:33 --> 00:19:40
and it was pretty rational to say yeah

00:19:36 --> 00:19:42
this stuff doesn't have any traction

00:19:39 --> 00:19:44
and that's why you need to have these

00:19:41 --> 00:19:46
very hard tasks which are which produce

00:19:43 --> 00:19:47
undeniable evidence and that's how we

00:19:45 --> 00:19:48
make progress

00:19:46 --> 00:19:50
and that's why the field is making

00:19:47 --> 00:19:51
progress today because we have these

00:19:49 --> 00:19:54
hard benchmarks

00:19:50 --> 00:19:56
which represent true progress and so

00:19:53 --> 00:19:59
and this is why we are able to avoid

00:19:55 --> 00:20:01
endless debate

00:19:58 --> 00:20:03
so incredibly you've contributed some of

00:20:00 --> 00:20:06
the biggest recent ideas in ai

00:20:02 --> 00:20:07
n in computer vision language natural

00:20:05 --> 00:20:10
anguage processing

00:20:06 --> 00:20:12
reinforcement learning sort of

00:20:09 --> 00:20:15
everything in between

00:20:11 --> 00:20:16
maybe not gans is there

00:20:14 --> 00:20:17
may not be a topic you haven't

00:20:15 --> 00:20:20
ouched and of course the the

00:20:16 --> 00:20:23
fundamental science of deep learning

00:20:19 --> 00:20:24
what is the difference to you between

00:20:22 --> 00:20:26
vision

00:20:23 --> 00:20:27
language and as in reinforcement

00:20:25 --> 00:20:29
learning action

00:20:26 --> 00:20:31
as learning problems and what are the

00:20:28 --> 00:20:32
commonalities do you see them as all

00:20:30 --> 00:20:34
interconnected

00:20:31 --> 00:20:35
are they fundamentally different domains

00:20:33 --> 00:20:39
that require

00:20:34 --> 00:20:40
different approaches

00:20:38 --> 00:20:42
okay that's a good question machine

00:20:39 --> 00:20:45
learning is a field with a lot of unity

00:20:41 --> 00:20:46
a huge amount of unity what do you mean

00:20:44 --> 00:20:50
by unity

00:20:45 --> 00:20:51
like overlap of ideas overlap of ideas

00:20:49 --> 00:20:52
overlap of principles in fact there is

00:20:50 --> 00:20:53
only

00:20:51 --> 00:20:55
one or two or three principles which are

00:20:52 --> 00:20:57
very very simple

00:20:54 --> 00:20:58
and then they apply in almost the same

00:20:56 --> 00:21:00
way in

00:20:57 --> 00:21:02
almost the same way to the different

00:20:59 --> 00:21:04
modalities to the different problems

00:21:01 --> 00:21:06
and that's why today when someone writes

00:21:03 --> 00:21:08
a paper on improving optimization

00:21:05 --> 00:21:10
of deep learning and vision it improves

00:21:07 --> 00:21:11
the different nlp applications and it

00:21:09 --> 00:21:13
improves the different reinforcement

00:21:10 --> 00:21:15
learning applications

00:21:12 --> 00:21:16
reinforcement learn so i would say that

00:21:14 --> 00:21:19
computer vision

00:21:15 --> 00:21:21
and nlp are very similar to each other

00:21:18 --> 00:21:23
today they differ in that they have

00:21:20 --> 00:21:25
slightly different architectures we use

00:21:22 --> 00:21:26
transformers in nlp and use

00:21:24 --> 00:21:28
convolutional neural networks

00:21:25 --> 00:21:30
in vision but it's also possible that

00:21:27 --> 00:21:31
one day this will change and

00:21:29 --> 00:21:33
everything will be unified with a single

00:21:30 --> 00:21:34
architecture because if you go back a

00:21:32 --> 00:21:38
few years ago in

00:21:33 --> 00:21:40
atural language processing there were a

00:21:37 --> 00:21:42
huge number of architectures for every

00:21:39 --> 00:21:44
different tiny problem had its own

00:21:41 --> 00:21:47
architecture

00:21:43 --> 00:21:48
today this is just one transformer for

00:21:46 --> 00:21:50
all those different tasks

00:21:47 --> 00:21:52
and if you go back in time even more you

00:21:49 --> 00:21:53
had even more and more fragmentation and

00:21:51 --> 00:21:55
every little problem

00:21:52 --> 00:21:57
in ai had its own little sub

00:21:54 --> 00:21:58
specialization and sub

00:21:56 --> 00:22:00
you know little set of collection of

00:21:57 --> 00:22:01
skills people who would know how to

00:21:59 --> 00:22:03
engineer the features

00:22:00 --> 00:22:05
now it's all been subsumed by deep

00:22:02 --> 00:22:07
learning we have this unification

00:22:04 --> 00:22:08
and so i expect vision to become unified

00:22:06 --> 00:22:09
with

00:22:07 --> 00:22:10
natural language as well or rather i

00:22:08 --> 00:22:12
shouldn't say expect i think it's

00:22:09 --> 00:22:13
possible i don't want to be too sure

00:22:11 --> 00:22:14
because

00:22:12 --> 00:22:16
i think on the commercial neural net is

00:22:13 --> 00:22:19
very computationally efficient

00:22:15 --> 00:22:20
rl is different rl does require slightly

00:22:18 --> 00:22:21
different techniques because you really

00:22:19 --> 00:22:23
do need to take action

00:22:20 --> 00:22:26
you really do need to do something about

00:22:22 --> 00:22:28
exploration your variance is much higher

00:22:25 --> 00:22:29
but i think there is a lot of unity even

00:22:27 --> 00:22:30
there

00:22:28 --> 00:22:33
and i would expect for example that at

00:22:29 --> 00:22:35
some point there will be some

00:22:32 --> 00:22:36
broader unification between rl and

00:22:34 --> 00:22:38
supervised learning where somehow the rl

00:22:36 --> 00:22:39
will be making decisions to make the

00:22:37 --> 00:22:41
supervised learning go better and it

00:22:38 --> 00:22:43
will be

00:22:40 --> 00:22:44
i imagine one big black box and you just

00:22:42 --> 00:22:46
hrow every you know you shovel

00:22:44 --> 00:22:47
travel things into it and it just

00:22:45 --> 00:22:48
figures out what to do with whatever you

00:22:46 --> 00:22:51
shovel it

00:22:47 --> 00:22:52
i mean reinforcement learning has some

00:22:50 --> 00:22:55
aspects of

00:22:51 --> 00:22:58
language and vision combined

00:22:54 --> 00:22:59
almost there's elements of a long-term

00:22:57 --> 00:23:01
emory that you should be utilizing and

00:22:58 --> 00:23:04
there's elements of a

00:23:00 --> 00:23:05
really rich sensory space so it seems

00:23:03 --> 00:23:07
like the

00:23:04 --> 00:23:09
it's like the union of the two or

00:23:06 --> 00:23:10
something like that

00:23:08 --> 00:23:12
i'd say something slightly differently

00:23:09 --> 00:23:15
i'd say that reinforcement learning is

00:23:11 --> 00:23:18
neither but it naturally interfaces and

00:23:14 --> 00:23:19
integrates with the two of them

00:23:17 --> 00:23:21
do you think action is fundamentally

00:23:18 --> 00:23:22
different so yeah what is interesting

00:23:20 --> 00:23:25
about

00:23:21 --> 00:23:28
what is unique about policy of

00:23:24 --> 00:23:29
learning to act well so one example for

00:23:27 --> 00:23:31
instance is that

00:23:28 --> 00:23:34
when you learn to act you are

00:23:30 --> 00:23:36
fundamentally in a non-stationary world

00:23:33 --> 00:23:37
because as your actions change the

00:23:35 --> 00:23:41
things you see

00:23:36 --> 00:23:42
start changing you you experience the

00:23:40 --> 00:23:44
world in a different way and this is not

00:23:42 --> 00:23:45
he case for

00:23:43 --> 00:23:46
the more traditional static problem

00:23:44 --> 00:23:48
where you have at least some

00:23:45 --> 00:23:50
distribution and you just apply a model

00:23:47 --> 00:23:51
to that distribution

00:23:49 --> 00:23:53
do you think it's a fundamentally

00:23:50 --> 00:23:54
different problem or is it just a more

00:23:52 --> 00:23:56
difficult

00:23:53 --> 00:23:57
general it's a generalization of the

00:23:55 --> 00:23:59
problem of understanding

00:23:56 --> 00:24:01
i mean it's it's it's a question of

00:23:58 --> 00:24:02
definitions almost there is a huge you

00:24:00 --> 00:24:03
know there's a huge amount of

00:24:01 --> 00:24:04
commonality for sure you take gradients

00:24:02 --> 00:24:05
you try you take

00:24:03 --> 00:24:07
gradients we try to approximate

00:24:04 --> 00:24:08
gradients in both cases in some get in

00:24:06 --> 00:24:09
the case of reinforcement learning you

00:24:08 --> 00:24:11
have

00:24:08 --> 00:24:13
some tools to reduce the variance of the

00:24:10 --> 00:24:15
gradients you do that

00:24:12 --> 00:24:17
here's lots of commonality use the same

00:24:14 --> 00:24:18
neural net in both cases

00:24:16 --> 00:24:21
you compute the gradient you apply atom

00:24:17 --> 00:24:21
in both cases

00:24:20 --> 00:24:25
o i mean there's lots in common for

00:24:23 --> 00:24:27
sure but

00:24:24 --> 00:24:28
here are some small differences which

00:24:26 --> 00:24:30
are not

00:24:27 --> 00:24:32
completely insignificant it's really

00:24:29 --> 00:24:34
just a matter of your point of view what

00:24:31 --> 00:24:35
frame of reference you what how much do

00:24:33 --> 00:24:38
you want to zoom in or out

00:24:34 --> 00:24:39
as you look at these problems which

00:24:37 --> 00:24:42
problem do you think

00:24:38 --> 00:24:43
is harder so people like no chomsky

00:24:41 --> 00:24:44
believe that language is fundamental to

00:24:42 --> 00:24:47
everything

00:24:43 --> 00:24:48
so it underlies everything do you think

00:24:46 --> 00:24:50
language

00:24:47 --> 00:24:53
understanding is harder than visual

00:24:49 --> 00:24:55
scene understanding or vice versa

00:24:52 --> 00:24:56
i think that asking if a problem is hard

00:24:54 --> 00:24:58
is slightly wrong

00:24:56 --> 00:25:00
i think the question is a little bit

00:24:57 --> 00:25:02
wrong and i want to explain why

00:24:59 --> 00:25:05
so what does it mean for a problem to be

00:25:01 --> 00:25:05
hard

00:25:04 --> 00:25:08
okay the non-interesting dumb answer to

00:25:06 --> 00:25:11
that is

00:25:07 --> 00:25:13
there's this there's a benchmark

00:25:10 --> 00:25:16
and there's a human level performance on

00:25:12 --> 00:25:18
that benchmark and how

00:25:15 --> 00:25:20
there's the effort required to reach the

00:25:17 --> 00:25:22
human level okay benchmark so from the

00:25:19 --> 00:25:25
perspective of how much until we

00:25:21 --> 00:25:27
get to human level on a very good

00:25:24 --> 00:25:29
benchmark

00:25:26 --> 00:25:30
yeah like some i i understand what you

00:25:28 --> 00:25:32
mean by that so what i was going i'm

00:25:29 --> 00:25:34
going to say that a lot of it depends on

00:25:31 --> 00:25:36
you know once you solve a problem it

00:25:33 --> 00:25:37
stops being hard and that's all that's

00:25:35 --> 00:25:39
always true and so

00:25:36 --> 00:25:40
whether something is hard or not depends

00:25:38 --> 00:25:42
on what our tools can do today so you

00:25:39 --> 00:25:45
know you say today

00:25:41 --> 00:25:47
true human level language understanding

00:25:44 --> 00:25:49
and visual perception are hard in the

00:25:46 --> 00:25:51
sense that there is no

00:25:48 --> 00:25:52
way of solving the problem completely in

00:25:50 --> 00:25:55
the next three months right

00:25:51 --> 00:25:56
so i agree with that statement beyond

00:25:54 --> 00:25:58
that i'm just i'll be my my guess would

00:25:55 --> 00:26:00
be as good as yours i don't know

00:25:57 --> 00:26:02
oh okay so you don't have a fundamental

00:25:59 --> 00:26:03
intuition about

00:26:01 --> 00:26:05
how hard language understanding is i

00:26:02 --> 00:26:07
think i i know i changed my mind let's

00:26:04 --> 00:26:08
ay language is probably going to be

00:26:06 --> 00:26:10
harder i mean it depends on how you

00:26:07 --> 00:26:13
define it like if you mean

00:26:09 --> 00:26:16
absolute top-notch 100 language

00:26:12 --> 00:26:18
understanding i'll go with language

00:26:15 --> 00:26:19
so but then if i show you a piece of

00:26:17 --> 00:26:22
paper with letters on it

00:26:18 --> 00:26:24
is that you see what i mean it's uh you

00:26:21 --> 00:26:24
have a vision system you say it's the

00:26:23 --> 00:26:26
best

00:26:23 --> 00:26:27
human level vision system i show you i

00:26:25 --> 00:26:30
open a book

00:26:26 --> 00:26:31
and i show you letters will it

00:26:29 --> 00:26:33
understand how these letters form into

00:26:30 --> 00:26:34
words and sentences and meaning

00:26:32 --> 00:26:37
is this part of the vision problem where

00:26:33 --> 00:26:38
does vision end and language begin

00:26:36 --> 00:26:40
yeah so chomsky would say it starts at

00:26:37 --> 00:26:42
language so vision is just a little

00:26:39 --> 00:26:46
xample of the kind of

00:26:41 --> 00:26:47
uh structure and you know fundamental

00:26:45 --> 00:26:50
hierarchy of ideas that's already

00:26:46 --> 00:26:53
represented in our brain somehow

00:26:49 --> 00:26:56
that's represented through language but

00:26:52 --> 00:26:58
where does vision stop and language

00:26:55 --> 00:27:02
begin

00:26:57 --> 00:27:02
that's a really interesting

00:27:04 --> 00:27:10
question

00:27:07 --> 00:27:11
it so one possibility is that it's

00:27:09 --> 00:27:14
impossible to achieve

00:27:10 --> 00:27:15
really deep understanding in either

00:27:13 --> 00:27:17
images

00:27:14 --> 00:27:19
or language without basically using the

00:27:16 --> 00:27:21
same kind of system

00:27:18 --> 00:27:22
so you're going to get the other for

00:27:20 --> 00:27:23
free

00:27:21 --> 00:27:25
i think i think it's pretty likely that

00:27:22 --> 00:27:27
yes if we can get one we prob our

00:27:24 --> 00:27:29
machine learning is probably that good

00:27:26 --> 00:27:32
that we can get the other but it's not

00:27:28 --> 00:27:35
100 i'm not 100 sure and also

00:27:31 --> 00:27:37
i think a lot a lot of it really does

00:27:34 --> 00:27:40
depend on your definitions

00:27:36 --> 00:27:42
of like perfect vision

00:27:39 --> 00:27:45
because really you know reading is

00:27:41 --> 00:27:47
vision but should it count

00:27:44 --> 00:27:49
yeah to me so my definition is if a

00:27:46 --> 00:27:52
system looked at an image

00:27:48 --> 00:27:53
and then the system looked at a piece of

00:27:51 --> 00:27:56
text

00:27:52 --> 00:27:59
and then told me something about that

00:27:55 --> 00:28:00
and i was really impressed that's

00:27:58 --> 00:28:02
relative

00:27:59 --> 00:28:03
you'll be impressed for half an hour and

00:28:01 --> 00:28:04
then you're gonna say well i mean all

00:28:02 --> 00:28:06
the systems do that but here's the thing

00:28:04 --> 00:28:07
they don't do

00:28:05 --> 00:28:09
yeah but i don't have that with humans

00:28:06 --> 00:28:13
continue to impress me

00:28:08 --> 00:28:15
is that true well the ones okay so

00:28:12 --> 00:28:17
i'm a fan of monogamy so i like the idea

00:28:14 --> 00:28:18
of marrying somebody being with them for

00:28:16 --> 00:28:21
several decades

00:28:18 --> 00:28:22
o i i believe in the fact that yes it's

00:28:20 --> 00:28:26
possible to have somebody

00:28:21 --> 00:28:29
continuously giving you uh pleasurable

00:28:25 --> 00:28:31
interesting witty new ideas friends yeah

00:28:28 --> 00:28:34
i think i think so they continue to

00:28:30 --> 00:28:37
surprise you the surprise

00:28:33 --> 00:28:38
it's um you know that injection of

00:28:36 --> 00:28:42
randomness

00:28:37 --> 00:28:46
eems to be uh it seems to be a nice

00:28:41 --> 00:28:49
source of yeah continued

00:28:45 --> 00:28:50
uh inspiration like the the wit the

00:28:48 --> 00:28:54
humor i think

00:28:49 --> 00:28:56
yeah that that the that would be

00:28:53 --> 00:28:58
a it's a very subjective test but i

00:28:55 --> 00:29:00
think if you have enough humans

00:28:57 --> 00:29:01
in the room yeah i i understand what you

00:29:00 --> 00:29:03
mean

00:29:00 --> 00:29:04
yeah i feel like i i misunderstood what

00:29:02 --> 00:29:06
you meant by impressing you i thought

00:29:03 --> 00:29:09
you meant to impress you with its

00:29:05 --> 00:29:11
intelligence with how how with how good

00:29:08 --> 00:29:12
well it understands um an image

00:29:10 --> 00:29:13
i thought you meant something like i'm

00:29:11 --> 00:29:14
going to show it a really complicated

00:29:12 --> 00:29:15
image and it's going to get it right and

00:29:14 --> 00:29:18
you're going to say wow

00:29:14 --> 00:29:20
that's really cool systems of you know

00:29:17 --> 00:29:23
january 2020 have not been doing that

00:29:19 --> 00:29:24
yeah no i i think it all boils down to

00:29:22 --> 00:29:26
like

00:29:23 --> 00:29:28
the reason people click like on stuff on

00:29:25 --> 00:29:31
the internet which is like it makes them

00:29:27 --> 00:29:34
laugh so it's like humor or wit

00:29:30 --> 00:29:36
yeah or insight i'm sure we'll get it as

00:29:33 --> 00:29:40
get that as well

00:29:35 --> 00:29:42
so forgive the romanticized question but

00:29:39 --> 00:29:44
looking back to you what is the most

00:29:41 --> 00:29:45
beautiful or surprising idea in deep

00:29:43 --> 00:29:47
learning

00:29:44 --> 00:29:49
or ai in general you've come across so i

00:29:46 --> 00:29:52
think the most beautiful thing about

00:29:48 --> 00:29:53
deep learning is that it actually works

00:29:51 --> 00:29:55
and i mean it because you got these

00:29:52 --> 00:29:59
ideas you got the little neural network

00:29:54 --> 00:29:59
you got the back propagation algorithm

00:29:58 --> 00:30:03
and then you got some theories as to you

00:30:00 --> 00:30:04
know this is kind of like the brain so

00:30:02 --> 00:30:05
maybe if you make it large

00:30:03 --> 00:30:08
if you make the neural network lodge and

00:30:04 --> 00:30:10
you train it a lot of data then it will

00:30:07 --> 00:30:13
do the same function of the brain does

00:30:09 --> 00:30:14
and it turns out to be true that's crazy

00:30:12 --> 00:30:15
and now we just train these neural

00:30:13 --> 00:30:17
networks and you make them larger and

00:30:14 --> 00:30:19
they keep getting better

00:30:16 --> 00:30:21
and i find it unbelievable i find it

00:30:18 --> 00:30:23
unbelievable that this whole ai stuff

00:30:20 --> 00:30:25
with neural networks works

00:30:22 --> 00:30:26
have you built up an intuition of why

00:30:24 --> 00:30:28
are there little

00:30:25 --> 00:30:30
bits and pieces of intuitions of

00:30:28 --> 00:30:33
insights of

00:30:29 --> 00:30:34
why this whole thing works i mean sums

00:30:32 --> 00:30:37
definitely while we know that

00:30:33 --> 00:30:40
optimization we now have good

00:30:36 --> 00:30:42
you know we've take we've had lots of

00:30:39 --> 00:30:43
empirical you know huge amounts of

00:30:41 --> 00:30:45
empirical reasons to believe that

00:30:42 --> 00:30:48
optimization should work

00:30:44 --> 00:30:49
on all most problems we care about

00:30:47 --> 00:30:51
did you have insights of what so you

00:30:48 --> 00:30:54
just said empirical evidence

00:30:50 --> 00:30:54
is most of your

00:30:54 --> 00:30:59
sort of empirical evidence kind of

00:30:57 --> 00:31:01
convinces you

00:30:58 --> 00:31:02
it's like evolution is empirical it

00:31:00 --> 00:31:04
shows you that look this

00:31:01 --> 00:31:06
evolutionary process seems to be a good

00:31:03 --> 00:31:08
way to design

00:31:05 --> 00:31:11
organisms that survive in their

00:31:07 --> 00:31:14
environment but it doesn't really

00:31:10 --> 00:31:14
get you to the insides of how the whole

00:31:13 --> 00:31:17
thing works

00:31:13 --> 00:31:18
i think it's a good analogy is physics

00:31:16 --> 00:31:20
you know how you say hey let's do some

00:31:18 --> 00:31:21
physics calculation and come up with

00:31:19 --> 00:31:22
some new physics theory and make some

00:31:20 --> 00:31:24
prediction

00:31:21 --> 00:31:26
but then you gotta run the experiment

00:31:23 --> 00:31:26
you know you gotta run the experiment

00:31:25 --> 00:31:28
it's important

00:31:25 --> 00:31:30
so it's a bit the same here except that

00:31:27 --> 00:31:31
maybe some sometimes

00:31:29 --> 00:31:33
the experiment came before the theory

00:31:30 --> 00:31:34
but it still is the case you know you

00:31:32 --> 00:31:35
have some

00:31:33 --> 00:31:36
data and you come up with some

00:31:34 --> 00:31:38
prediction you say yeah let's make a big

00:31:35 --> 00:31:39
neural network let's train it and it's

00:31:37 --> 00:31:40
going to work

00:31:38 --> 00:31:42
much better than anything before it and

00:31:39 --> 00:31:43
it will in fact continue to get better

00:31:41 --> 00:31:45
as you make it larger

00:31:42 --> 00:31:46
and it turns out to be true that's

00:31:44 --> 00:31:48
amazing when a theory is

00:31:46 --> 00:31:49
validated like this you know

00:31:47 --> 00:31:52
it's not a mathematical theory it's more

00:31:48 --> 00:31:54
of a biological theory almost

00:31:51 --> 00:31:55
so i think there are not terrible

00:31:53 --> 00:31:56
analogies between deep learning and

00:31:54 --> 00:31:58
biology

00:31:55 --> 00:32:00
i would say it's like the geometric mean

00:31:57 --> 00:32:01
of biology and physics that's deep

00:31:59 --> 00:32:03
learning

00:32:00 --> 00:32:04
the geometric meaning of biology and

00:32:02 --> 00:32:06
physics

00:32:03 --> 00:32:08
i think i'm going to need a few hours to

00:32:05 --> 00:32:11
wrap my head around that

00:32:07 --> 00:32:13
because just to find the geometric just

00:32:10 --> 00:32:17
o find uh

00:32:12 --> 00:32:19
the set of what biology represents

00:32:16 --> 00:32:21
well biology in biology things are

00:32:18 --> 00:32:21
ally complicated theories are really

00:32:20 --> 00:32:25
it's really hard to have good predictive

00:32:22 --> 00:32:26
theory and if in physics the theories

00:32:24 --> 00:32:27
are too good

00:32:25 --> 00:32:29
in theory in physics people make these

00:32:26 --> 00:32:30
super precise theories which make these

00:32:28 --> 00:32:31
amazing predictions

00:32:29 --> 00:32:34
and in machine learning mechanics in

00:32:30 --> 00:32:36
between kind of in between but

00:32:33 --> 00:32:38
it'd be nice if machine learning somehow

00:32:35 --> 00:32:39
helped us discover the unification of

00:32:37 --> 00:32:41
the two as opposed to some of the

00:32:38 --> 00:32:43
in-between

00:32:40 --> 00:32:45
but you're right that's you're you're

00:32:42 --> 00:32:47
kind of trying to juggle both

00:32:44 --> 00:32:49
so do you think there's still beautiful

00:32:46 --> 00:32:51
and mysterious properties in your

00:32:48 --> 00:32:53
networks that are yet to be discovered

00:32:50 --> 00:32:56
efinitely i think that we are still

00:32:52 --> 00:32:57
massively underestimating deep learning

00:32:55 --> 00:33:00
what do you think it will look like like

00:32:56 --> 00:33:03
what if i knew i would have done it

00:32:59 --> 00:33:05
yeah so uh

00:33:02 --> 00:33:07
but if you look at all the progress from

00:33:04 --> 00:33:09
the past 10 years i would say most of it

00:33:06 --> 00:33:11
i would say there have been a few cases

00:33:08 --> 00:33:13
where some were things that

00:33:10 --> 00:33:15
felt like really new ideas showed up but

00:33:12 --> 00:33:17
by and large it was

00:33:14 --> 00:33:19
every year we thought okay deep learning

00:33:16 --> 00:33:19
oes this far nope it actually goes

00:33:18 --> 00:33:22
further

00:33:18 --> 00:33:23
and then the next year okay now you now

00:33:21 --> 00:33:24
this is this is peak deep learning we

00:33:22 --> 00:33:26
are really done nope

00:33:23 --> 00:33:27
goes further it just keeps going further

00:33:25 --> 00:33:29
each year so that means that we keep

00:33:26 --> 00:33:30
underestimating we keep not

00:33:28 --> 00:33:32
understanding it

00:33:29 --> 00:33:34
as surprising properties all the time do

00:33:31 --> 00:33:36
you think it's getting harder and harder

00:33:33 --> 00:33:38
to make progress need to make progress

00:33:35 --> 00:33:38
it depends on what we mean i think the

00:33:37 --> 00:33:42
field will continue to make

00:33:38 --> 00:33:43
very robust progress for quite a while

00:33:41 --> 00:33:45
i think for individual researchers

00:33:42 --> 00:33:48
especially people who are doing

00:33:44 --> 00:33:49
um research it can be harder because

00:33:47 --> 00:33:50
there is a very large number of

00:33:48 --> 00:33:52
researchers right now

00:33:50 --> 00:33:54
i think that if you have a lot of

00:33:51 --> 00:33:55
compute then you can make

00:33:53 --> 00:33:57
a lot of very interesting discoveries

00:33:54 --> 00:34:01
but then you have to deal with

00:33:56 --> 00:34:02
e challenge of managing a huge compute

00:34:00 --> 00:34:04
a huge classic compute cluster trying to

00:34:01 --> 00:34:05
experiment so it's a little bit harder

00:34:03 --> 00:34:07
so i'm asking all these questions that

00:34:04 --> 00:34:09
nobody knows the answer to

00:34:06 --> 00:34:10
but you're one of the smartest people i

00:34:08 --> 00:34:12
know so i'm going to keep asking

00:34:09 --> 00:34:14
the so let's imagine all the

00:34:11 --> 00:34:16
breakthroughs that happen in the next 30

00:34:13 --> 00:34:18
years in deep learning

00:34:15 --> 00:34:20
do you think most of those breakthroughs

00:34:17 --> 00:34:23
can be done by one person

00:34:19 --> 00:34:25
with one computer sort of in the space

00:34:22 --> 00:34:28
of breakthroughs do you think

00:34:24 --> 00:34:33
compute will be compute

00:34:27 --> 00:34:35
and large efforts will be necessary

00:34:32 --> 00:34:36
i mean i can't be sure when you say one

00:34:34 --> 00:34:39
computer you mean

00:34:35 --> 00:34:42
how large uh

00:34:38 --> 00:34:43
you're uh you're clever i mean one can

00:34:41 --> 00:34:48
one gpu

00:34:42 --> 00:34:49
i see i think it's pretty unlikely

00:34:47 --> 00:34:51
i think

00:34:48 --> 00:34:53
that there are many

00:34:50 --> 00:34:55
the stack of deep learning is starting

00:34:52 --> 00:34:57
to be quite deep

00:34:54 --> 00:34:59
if you look at it you've got all the way

00:34:56 --> 00:35:02
from

00:34:58 --> 00:35:02
the ideas the systems to build the data

00:35:01 --> 00:35:05
sets

00:35:02 --> 00:35:07
the distributed programming the building

00:35:04 --> 00:35:09
the actual cluster

00:35:06 --> 00:35:10
the gpu programming putting it all

00:35:08 --> 00:35:13
together so now the stack is getting

00:35:10 --> 00:35:14
really deep and i think it becomes

00:35:12 --> 00:35:17
it can be quite hard for a single person

00:35:14 --> 00:35:18
to become to be world class in every

00:35:16 --> 00:35:22
single layer of the stack

00:35:17 --> 00:35:23
what about the what like vladimir vapnik

00:35:21 --> 00:35:25
really insist on is taking

00:35:22 --> 00:35:26
mnist and trying to learn from very few

00:35:24 --> 00:35:30
examples

00:35:25 --> 00:35:31
o being able to learn more efficiently

00:35:29 --> 00:35:33
do you think that's there'll be

00:35:30 --> 00:35:36
breakthroughs in that space that would

00:35:32 --> 00:35:37
may not need the huge compute i think it

00:35:35 --> 00:35:38
will be a very

00:35:36 --> 00:35:39
i think there will be a large number of

00:35:37 --> 00:35:41
breakthroughs in general that will not

00:35:38 --> 00:35:43
need a huge amount of compute

00:35:40 --> 00:35:44
so maybe i should clarify that i think

00:35:42 --> 00:35:46
that some breakthroughs will require a

00:35:44 --> 00:35:48
lot of compute

00:35:45 --> 00:35:50
and i think building systems which

00:35:47 --> 00:35:51
actually do things will require a huge

00:35:49 --> 00:35:52
amount of compute

00:35:50 --> 00:35:54
that one is pretty obvious if you want

00:35:51 --> 00:35:55
o do x

00:35:53 --> 00:35:57
right an x requires a huge neural net

00:35:54 --> 00:36:00
you got to get a huge neural net

00:35:56 --> 00:36:02
but i think there will be lots of i

00:35:59 --> 00:36:04
think there is lots of room for

00:36:01 --> 00:36:06
very important work being done by small

00:36:03 --> 00:36:08
groups and individuals

00:36:05 --> 00:36:10
you may be sort of on the topic of the

00:36:07 --> 00:36:13
science of deep learning

00:36:09 --> 00:36:14
talk about one of the recent papers that

00:36:12 --> 00:36:16
you released

00:36:13 --> 00:36:17
sure that deep double descent where

00:36:15 --> 00:36:19
bigger models

00:36:16 --> 00:36:21
and more data hurt i think it's really

00:36:18 --> 00:36:23
interesting paper can you can you

00:36:20 --> 00:36:25
describe the main idea and

00:36:22 --> 00:36:26
yeah definitely so what happened is that

00:36:24 --> 00:36:28
some

00:36:25 --> 00:36:30
over over the years some small number of

00:36:27 --> 00:36:31
researchers noticed that

00:36:29 --> 00:36:32
it is kind of weird that when you make

00:36:30 --> 00:36:33
the neural network larger it works

00:36:31 --> 00:36:35
better and it seems to go in

00:36:32 --> 00:36:37
contradiction with statistical ideas

00:36:34 --> 00:36:38
and then some people made an analysis

00:36:36 --> 00:36:39
howing that actually you got this

00:36:37 --> 00:36:42
double descent bump

00:36:38 --> 00:36:43
and what we've done was to show that

00:36:41 --> 00:36:45
double descent occurs

00:36:42 --> 00:36:47
for all for pretty much all practical

00:36:44 --> 00:36:50
deep learning systems

00:36:46 --> 00:36:51
and that it'll be also so can you step

00:36:49 --> 00:36:55
back

00:36:50 --> 00:36:56
uh what's the x-axis and the y-axis of a

00:36:54 --> 00:37:00
double descent plot

00:36:55 --> 00:37:01
okay great so you can you can look you

00:36:59 --> 00:37:04
can

00:37:00 --> 00:37:05
do things like you can take a neural

00:37:03 --> 00:37:07
network

00:37:04 --> 00:37:10
and you can start increasing its size

00:37:06 --> 00:37:13
slowly while keeping your data set fixed

00:37:10 --> 00:37:15
so if you increase the size of the

00:37:12 --> 00:37:17
neural network slowly

00:37:14 --> 00:37:19
and if you don't do early stopping

00:37:16 --> 00:37:22
that's a pretty important

00:37:18 --> 00:37:23
detail then

00:37:21 --> 00:37:25
when the neural network is really small

00:37:22 --> 00:37:26
you make it larger you get a very rapid

00:37:24 --> 00:37:28
increase in performance

00:37:25 --> 00:37:30
then you continue to make it large and

00:37:27 --> 00:37:33
at some point performance will get worse

00:37:30 --> 00:37:35
and it gets and and it gets the worst

00:37:32 --> 00:37:36
exactly at the point at which it

00:37:34 --> 00:37:37
achieves

00:37:35 --> 00:37:39
zero training error precisely zero

00:37:36 --> 00:37:40
training loss

00:37:38 --> 00:37:42
and then as you make it large it starts

00:37:39 --> 00:37:44
to get better again and it's kind of

00:37:41 --> 00:37:46
counter-intuitive because you'd expect

00:37:43 --> 00:37:49
deep learning phenomena to be

00:37:45 --> 00:37:51
monotonic and

00:37:48 --> 00:37:53
it's hard to be sure what it means but

00:37:50 --> 00:37:55
it also occurs in in the case of linear

00:37:52 --> 00:37:57
classifiers and the intuition basically

00:37:54 --> 00:38:00
boils down to the following

00:37:56 --> 00:38:01
when you when you have a lot when you

00:37:59 --> 00:38:04
have

00:38:00 --> 00:38:06
a large data set and a small model

00:38:03 --> 00:38:08
then small tiny random so basically what

00:38:05 --> 00:38:11
is overfitting

00:38:07 --> 00:38:13
is when your model

00:38:10 --> 00:38:15
is somehow very sensitive to the small

00:38:12 --> 00:38:17
random

00:38:14 --> 00:38:18
unimportant stuff in your data set in a

00:38:16 --> 00:38:19
training day in the training data set

00:38:17 --> 00:38:22
precisely

00:38:18 --> 00:38:24
so if you have a small model and you

00:38:21 --> 00:38:25
have a big data set

00:38:23 --> 00:38:27
and there may be some random thing you

00:38:24 --> 00:38:29
know some training cases are randomly in

00:38:26 --> 00:38:31
the data set and others may not be there

00:38:28 --> 00:38:33
but the small mod but the small model is

00:38:30 --> 00:38:34
kind of insensitive to this randomness

00:38:32 --> 00:38:36
because

00:38:33 --> 00:38:37
it's the same you there is pretty much

00:38:35 --> 00:38:40
no uncertainty about the model

00:38:36 --> 00:38:42
when it is that it's large so okay so at

00:38:39 --> 00:38:46
he very basic level to me

00:38:41 --> 00:38:49
it is the most surprising thing that

00:38:45 --> 00:38:52
neural networks don't overfit every time

00:38:48 --> 00:38:54
very quickly uh

00:38:51 --> 00:38:57
before ever being able to learn anything

00:38:53 --> 00:38:58
the huge number of parameters

00:38:56 --> 00:39:00
o here so there is one way okay so

00:38:58 --> 00:39:01
maybe so let me try to give the

00:38:59 --> 00:39:03
xplanation

00:39:00 --> 00:39:04
maybe that will be that will work so you

00:39:02 --> 00:39:06
got a huge neural network let's suppose

00:39:03 --> 00:39:08
you've got a

00:39:05 --> 00:39:10
you are you have a huge neural network

00:39:07 --> 00:39:11
you have a huge number of parameters

00:39:09 --> 00:39:14
and now let's pretend everything is

00:39:10 --> 00:39:16
linear which is not let's just pretend

00:39:13 --> 00:39:18
then there is this big subspace where a

00:39:15 --> 00:39:22
neural network achieves zero error

00:39:17 --> 00:39:22
and sdgt is going to find approximately

00:39:21 --> 00:39:24
the point

00:39:21 --> 00:39:27
hat's right approximately the point

00:39:23 --> 00:39:30
with the smallest norm in that subspace

00:39:26 --> 00:39:31
okay and that can also be proven to be

00:39:29 --> 00:39:34
insensitive to

00:39:30 --> 00:39:36
the small randomness in the data when

00:39:33 --> 00:39:38
the dimensionality is high

00:39:35 --> 00:39:39
but when the dimensionality of the data

00:39:37 --> 00:39:40
is equal to the dimensionality of the

00:39:38 --> 00:39:41
model

00:39:39 --> 00:39:44
then there is a one-to-one

00:39:40 --> 00:39:46
correspondence between all the data sets

00:39:43 --> 00:39:47
and the models so small changes in the

00:39:45 --> 00:39:49
data set actually lead to large changes

00:39:46 --> 00:39:49
in the model and that's why performance

00:39:48 --> 00:39:51
gets worse

00:39:48 --> 00:39:53
so this is the best explanation more or

00:39:50 --> 00:39:54
less

00:39:52 --> 00:39:57
o then it would be good for the model

00:39:53 --> 00:39:59
to have more parameters

00:39:56 --> 00:40:00
o to be bigger than the data that's

00:39:58 --> 00:40:01
right but

00:39:59 --> 00:40:02
only if you don't really stop if you

00:40:00 --> 00:40:04
introduce early stop in your

00:40:02 --> 00:40:05
egularization you can make the double

00:40:03 --> 00:40:07
asset descent bump

00:40:04 --> 00:40:09
almost completely disappear what is

00:40:06 --> 00:40:11
early stop early stopping is when

00:40:08 --> 00:40:14
you train your model and you monitor

00:40:10 --> 00:40:15
your test your validation performance

00:40:13 --> 00:40:16
and then if at some point validation

00:40:14 --> 00:40:18
performance starts to get worse you say

00:40:16 --> 00:40:19
okay let's stop training

00:40:17 --> 00:40:21
if you're good you're good you're good

00:40:18 --> 00:40:23
enough so the

00:40:20 --> 00:40:25
magic happens after after that

00:40:22 --> 00:40:25
moment so you don't want to do the early

00:40:24 --> 00:40:27
stopping

00:40:24 --> 00:40:28
well if you don't do the early stop and

00:40:26 --> 00:40:31
you get this very you get a very

00:40:27 --> 00:40:33
pronounced double descent

00:40:30 --> 00:40:35
do you have any intuition why this

00:40:32 --> 00:40:37
happens double descent

00:40:34 --> 00:40:38
oh sorry are you stopping you no the

00:40:36 --> 00:40:41
double descend so that oh yeah so i try

00:40:38 --> 00:40:42
let's see the intuition is basically is

00:40:40 --> 00:40:45
this

00:40:41 --> 00:40:46
that when the data set has as many

00:40:44 --> 00:40:49
degrees of freedom

00:40:45 --> 00:40:50
as the model then there is a one-to-one

00:40:48 --> 00:40:53
correspondence between them

00:40:49 --> 00:40:54
and so small changes to the data set

00:40:52 --> 00:40:56
lead to noticeable changes

00:40:53 --> 00:40:58
in the model so your model is very

00:40:55 --> 00:41:00
sensitive to all the randomness it is

00:40:57 --> 00:41:03
unable to discard it

00:40:59 --> 00:41:06
whereas it turns out that when you have

00:41:02 --> 00:41:07
a lot more data than parameters or a lot

00:41:05 --> 00:41:09
more parameters than data

00:41:06 --> 00:41:11
the resulting solution will be

00:41:08 --> 00:41:11
insensitive to small changes in the data

00:41:10 --> 00:41:14
set

00:41:10 --> 00:41:15
so it's able to that's nicely put

00:41:13 --> 00:41:17
discard

00:41:14 --> 00:41:18
the small changes the the randomness

00:41:16 --> 00:41:20
exactly the

00:41:17 --> 00:41:21
the spurious correlation which you

00:41:19 --> 00:41:23
don't want

00:41:20 --> 00:41:24
jeff hinton suggested we need to throw

00:41:22 --> 00:41:26
back propagation we already kind of

00:41:23 --> 00:41:28
talked about this a little bit but

00:41:25 --> 00:41:30
he suggested that we just throw away

00:41:27 --> 00:41:32
back propagation and start over

00:41:29 --> 00:41:35
i mean of course some of that is a

00:41:31 --> 00:41:37
little bit um

00:41:34 --> 00:41:39
and humor but what do you think what

00:41:36 --> 00:41:40
could be an alternative method of

00:41:38 --> 00:41:42
training neural networks

00:41:39 --> 00:41:44
well the thing that he said precisely is

00:41:41 --> 00:41:46
that to the extent you can't find back

00:41:43 --> 00:41:48
propagation in the brain

00:41:45 --> 00:41:49
it's worth seeing if we can learn

00:41:47 --> 00:41:51
something from how the brain

00:41:48 --> 00:41:53
learns but back propagation is very

00:41:50 --> 00:41:55
useful and we should keep using it

00:41:52 --> 00:41:57
oh you're saying that once we discover

00:41:54 --> 00:41:59
the mechanism of learning in the brain

00:41:56 --> 00:41:59
or any aspects of that mechanism we

00:41:58 --> 00:42:01
should

00:41:58 --> 00:42:02
also try to implement that in neural

00:42:00 --> 00:42:04
networks if it turns out that we can't

00:42:01 --> 00:42:06
find back propagation in the brain

00:42:03 --> 00:42:08
if we can't find bad propagation in the

00:42:05 --> 00:42:08
brain

00:42:08 --> 00:42:14
well so i guess your answer to that is

00:42:11 --> 00:42:17
back propagation is pretty damn useful

00:42:13 --> 00:42:18
so why are we complaining i mean i i

00:42:16 --> 00:42:19
personally am a big fan of back

00:42:17 --> 00:42:21
propagation i think it's a great

00:42:18 --> 00:42:24
algorithm because it solves an extremely

00:42:20 --> 00:42:27
fundamental problem which is

00:42:23 --> 00:42:30
finding a neural circuit

00:42:26 --> 00:42:31
subject to some constraints and i don't

00:42:29 --> 00:42:33
see that problem going away so that's

00:42:30 --> 00:42:35
why i

00:42:32 --> 00:42:37
really i think it's pretty unlikely

00:42:34 --> 00:42:38
that we'll have anything which is going

00:42:36 --> 00:42:40
to be

00:42:37 --> 00:42:44
dramatically different it could happen

00:42:39 --> 00:42:47
but i wouldn't bet on it right now

00:42:43 --> 00:42:47
so let me ask a sort of big picture

00:42:46 --> 00:42:50
question

00:42:46 --> 00:42:52
do you think can do you think neural

00:42:49 --> 00:42:55
networks can be made to reason

00:42:51 --> 00:42:59
why not well if you look for example at

00:42:54 --> 00:43:01
alphago or alpha zero

00:42:58 --> 00:43:02
the neural network of alpha zero plays

00:43:00 --> 00:43:04
go

00:43:01 --> 00:43:06
which which we all agree is a game that

00:43:03 --> 00:43:09
requires reasoning

00:43:05 --> 00:43:10
better than 99.9 of all humans

00:43:08 --> 00:43:13
just the neural network without this

00:43:09 --> 00:43:15
earch just the neural network itself

00:43:12 --> 00:43:18
doesn't that give us an existence proof

00:43:14 --> 00:43:20
that neural networks can reason

00:43:17 --> 00:43:21
to push back and disagree a little bit

00:43:19 --> 00:43:24
we all agree that

00:43:20 --> 00:43:27
go is reasoning i think i

00:43:23 --> 00:43:29
agree i don't think it's a trivial so

00:43:26 --> 00:43:32
bviously reasoning like intelligence

00:43:28 --> 00:43:34
is uh is a loose gray area term

00:43:32 --> 00:43:36
a little bit maybe you disagree with

00:43:33 --> 00:43:38
at but

00:43:35 --> 00:43:39
yes i think it has some of the same

00:43:37 --> 00:43:42
lements of

00:43:38 --> 00:43:43
reasoning reasoning is almost like akin

00:43:41 --> 00:43:47
to search

00:43:42 --> 00:43:52
right there's a sequential element of

00:43:46 --> 00:43:54
stepwise consideration of possibilities

00:43:51 --> 00:43:56
and sort of building on top of those

00:43:53 --> 00:43:58
possibilities in a sequential manner

00:43:55 --> 00:44:00
until you arrive at some insight

00:43:57 --> 00:44:02
so yeah i guess playing go is kind of

00:43:59 --> 00:44:04
like that and when you have a single

00:44:01 --> 00:44:06
neural network doing that without search

00:44:03 --> 00:44:07
that's kind of like that so there's an

00:44:05 --> 00:44:08
existent proof in a particular

00:44:06 --> 00:44:12
constrained environment

00:44:08 --> 00:44:15
hat a process akin to what

00:44:11 --> 00:44:19
many people call reasoning exist but

00:44:14 --> 00:44:21
more general kind of reasoning so off

00:44:18 --> 00:44:23
the board there is one other existence

00:44:20 --> 00:44:27
oh boy which one

00:44:22 --> 00:44:30
us humans yes okay all right so

00:44:26 --> 00:44:33
do you think the architecture

00:44:29 --> 00:44:34
that will allow neural networks to

00:44:32 --> 00:44:37
reason

00:44:33 --> 00:44:39
will look similar to the neural network

00:44:36 --> 00:44:41
architectures we have today

00:44:38 --> 00:44:42
i think it will i think well i don't

00:44:40 --> 00:44:45
want to make two

00:44:42 --> 00:44:47
verly definitive statements i think

00:44:44 --> 00:44:49
it's definitely possible that

00:44:46 --> 00:44:50
he neural networks that will produce

00:44:48 --> 00:44:51
the reasoning breakthroughs of the

00:44:49 --> 00:44:53
future will be

00:44:50 --> 00:44:55
very similar to the architectures that

00:44:52 --> 00:44:56
exist today maybe

00:44:54 --> 00:45:00
a little bit more current maybe a little

00:44:55 --> 00:45:00
bit deeper but

00:44:59 --> 00:45:03
these these new lines are so

00:45:01 --> 00:45:05
insanely powerful

00:45:02 --> 00:45:08
why wouldn't they be able to learn to

00:45:04 --> 00:45:10
reason humans can reason

00:45:07 --> 00:45:12
so why can't neural networks so do you

00:45:09 --> 00:45:14
think the kind of stuff we've seen

00:45:11 --> 00:45:15
eural networks do is a kind of just

00:45:13 --> 00:45:17
weak reasoning so it's not a

00:45:14 --> 00:45:19
fundamentally different process

00:45:16 --> 00:45:20
again this is stuff we don't nobody

00:45:18 --> 00:45:23
knows the answer to

00:45:19 --> 00:45:23
so when it comes to our neural networks

00:45:22 --> 00:45:25
i would

00:45:22 --> 00:45:29
think which i would say is that neural

00:45:24 --> 00:45:31
networks are capable of reasoning

00:45:28 --> 00:45:33
but if you train a neural network on a

00:45:30 --> 00:45:35
task which doesn't require reasoning

00:45:32 --> 00:45:36
it's not going to reason this is a

00:45:34 --> 00:45:38
well-known effect where the neural

00:45:35 --> 00:45:40
network will solve

00:45:37 --> 00:45:42
xactly the it will solve the problem

00:45:39 --> 00:45:45
that you pose in front of it

00:45:41 --> 00:45:49
in the easiest way possible

00:45:44 --> 00:45:52
right that takes us to the

00:45:48 --> 00:45:55
to one of the brilliant sort of ways you

00:45:51 --> 00:45:56
describe neural networks which is uh

00:45:54 --> 00:45:58
you refer to neural networks as the

00:45:55 --> 00:46:02
search for small circuits

00:45:57 --> 00:46:05
and maybe general intelligence

00:46:01 --> 00:46:06
as the search for small programs

00:46:04 --> 00:46:09
which i found is a metaphor very

00:46:06 --> 00:46:10
compelling can you elaborate on that

00:46:08 --> 00:46:13
difference

00:46:09 --> 00:46:14
yeah so the thing which i said precisely

00:46:12 --> 00:46:18
was that

00:46:13 --> 00:46:20
if you can find the shortest program

00:46:17 --> 00:46:21
that outputs the data in you at your

00:46:19 --> 00:46:23
disposal

00:46:20 --> 00:46:26
then you will be able to use it to make

00:46:22 --> 00:46:28
the best prediction possible

00:46:25 --> 00:46:30
and that's a theoretical statement which

00:46:27 --> 00:46:32
can be proven mathematically

00:46:29 --> 00:46:33
now you can also prove mathematically

00:46:31 --> 00:46:34
that it is

00:46:32 --> 00:46:36
that finding the shortest program which

00:46:34 --> 00:46:40
generates some data

00:46:35 --> 00:46:42
is not it's not a computable operation

00:46:39 --> 00:46:43
o a finite amount of compute can do

00:46:41 --> 00:46:46
this

00:46:42 --> 00:46:48
o then with neural networks

00:46:46 --> 00:46:51
are the next best stain

00:46:47 --> 00:46:53
that actually works in practice

00:46:50 --> 00:46:55
we are not able to find the best the

00:46:52 --> 00:46:56
shortest program which generates our

00:46:54 --> 00:46:59
data

00:46:55 --> 00:47:00
but we are able to find you know a small

00:46:58 --> 00:47:02
but now

00:46:59 --> 00:47:03
that statement should be amended

00:47:01 --> 00:47:06
even a large circuit

00:47:02 --> 00:47:07
which fits our data in some way well i

00:47:05 --> 00:47:09
think what you meant by this small

00:47:06 --> 00:47:12
circuit is the smallest

00:47:08 --> 00:47:13
needed circuit well i see the thing the

00:47:11 --> 00:47:15
thing which i would change now back back

00:47:12 --> 00:47:16
then i really have i haven't fully

00:47:14 --> 00:47:18
internalized the over parameter

00:47:15 --> 00:47:20
ized results the the

00:47:17 --> 00:47:21
things we know about over parameters

00:47:19 --> 00:47:24
neural nets

00:47:20 --> 00:47:26
now i would phrase it as a large circuit

00:47:23 --> 00:47:28
hat con whose weights contain a small

00:47:25 --> 00:47:30
amount of information

00:47:27 --> 00:47:32
which i think is what's going on if you

00:47:29 --> 00:47:34
imagine the training process of a neural

00:47:31 --> 00:47:37
network as you slowly transmit entropy

00:47:33 --> 00:47:40
from the data set to the parameters

00:47:36 --> 00:47:41
then somehow the amount of information

00:47:39 --> 00:47:44
in the weights

00:47:40 --> 00:47:46
ends up being not very large which would

00:47:43 --> 00:47:48
explain why they generalized so well

00:47:45 --> 00:47:49
so that's that the large circuit might

00:47:47 --> 00:47:51
be one that's

00:47:48 --> 00:47:55
helpful for the regulation for the

00:47:50 --> 00:47:55
generalization yeah some of this

00:47:54 --> 00:48:00
but do you see their

00:47:58 --> 00:48:03
do you see it important to be able to

00:47:59 --> 00:48:06
try to learn something like programs

00:48:02 --> 00:48:07
i mean if you can definitely i think

00:48:05 --> 00:48:10
it's kind of the answer is

00:48:06 --> 00:48:12
kind of yes if we can do it we should do

00:48:09 --> 00:48:14
things that we can do it

00:48:11 --> 00:48:16
's it's the reason we are pushing on

00:48:13 --> 00:48:18
deep learning

00:48:15 --> 00:48:19
the fundamental reason the cause the the

00:48:17 --> 00:48:22
root cause

00:48:18 --> 00:48:24
is that we are able to train them so in

00:48:21 --> 00:48:26
other words training comes first

00:48:23 --> 00:48:28
we've got our pillar which is the

00:48:25 --> 00:48:30
training pillar

00:48:27 --> 00:48:31
and now we are trying to contort our

00:48:29 --> 00:48:33
neural networks around the training

00:48:30 --> 00:48:33
pillar we got to stay trainable this is

00:48:32 --> 00:48:36
an

00:48:32 --> 00:48:37
invo this is an invariant we cannot

00:48:35 --> 00:48:40
violate

00:48:36 --> 00:48:42
and so being trainable means

00:48:39 --> 00:48:44
tarting from scratch knowing nothing

00:48:41 --> 00:48:45
you can actually pretty quickly converge

00:48:43 --> 00:48:48
towards knowing a lot

00:48:44 --> 00:48:51
or even slowly but it means that given

00:48:47 --> 00:48:53
the resources at your disposal

00:48:50 --> 00:48:55
you can train the neural net and get it

00:48:52 --> 00:48:57
o achieve

00:48:54 --> 00:48:58
useful performance yeah that's a pillar

00:48:56 --> 00:49:00
we can't move away from that's right

00:48:57 --> 00:49:02
because if you can whereas if you say

00:48:59 --> 00:49:04
hey let's find the shortest program

00:49:01 --> 00:49:05
but we can't do that so it doesn't

00:49:03 --> 00:49:09
matter how useful

00:49:04 --> 00:49:10
that would be we can't do it so we want

00:49:08 --> 00:49:11
so do you think you kind of mentioned

00:49:09 --> 00:49:15
that the neural networks are good at

00:49:10 --> 00:49:17
finding small circuits or large circuits

00:49:14 --> 00:49:18
do you think then the matter of finding

00:49:16 --> 00:49:21
small programs

00:49:17 --> 00:49:24
is just the data no so

00:49:20 --> 00:49:25
the sorry not not the size or character

00:49:23 --> 00:49:28
the qual

00:49:24 --> 00:49:29
the the type of data sort of ask giving

00:49:27 --> 00:49:32
it programs

00:49:28 --> 00:49:35
well i think the thing is that right now

00:49:32 --> 00:49:38
finding there are no good precedence of

00:49:34 --> 00:49:40
people successfully finding

00:49:37 --> 00:49:42
programs really well and so the way

00:49:39 --> 00:49:44
ou'd find programs is you'd

00:49:41 --> 00:49:46
train a deep neural network to do it

00:49:43 --> 00:49:48
basically right

00:49:45 --> 00:49:50
which is which is the right way to go

00:49:47 --> 00:49:52
about it but there's not good

00:49:49 --> 00:49:53
uh illustrations that it has hasn't been

00:49:51 --> 00:49:56
done yet but

00:49:52 --> 00:49:56
in principle it should be possible

00:49:56 --> 00:50:00
can you elaborate in a little bit you

00:49:58 --> 00:50:03
what's your insight in principle

00:49:59 --> 00:50:04
and put another way you don't see why

00:50:02 --> 00:50:07
it's not

00:50:03 --> 00:50:10
possible well it's kind of like more

00:50:06 --> 00:50:12
it's more a statement of

00:50:09 --> 00:50:15
i think that it's i think that it's

00:50:11 --> 00:50:17
unwise to bet against deep learning and

00:50:14 --> 00:50:19
if it's a if it's a cognitive function

00:50:16 --> 00:50:23
that humans seem to be able to do

00:50:18 --> 00:50:24
then it doesn't take too long for

00:50:22 --> 00:50:26
some deep neural net to pop up that can

00:50:23 --> 00:50:29
do it too

00:50:25 --> 00:50:29
yeah i'm i'm i'm there with you i can

00:50:28 --> 00:50:32
i've

00:50:28 --> 00:50:33
stopped betting against neural

00:50:31 --> 00:50:34
networks

00:50:32 --> 00:50:36
at this point because they continue to

00:50:33 --> 00:50:38
surprise us

00:50:35 --> 00:50:39
what about long-term memory can neural

00:50:37 --> 00:50:42
networks have long-term memory or

00:50:38 --> 00:50:44
something like

00:50:41 --> 00:50:45
knowledge bases so being able to

00:50:43 --> 00:50:47
aggregate

00:50:44 --> 00:50:48
important information over long periods

00:50:46 --> 00:50:52
of time

00:50:47 --> 00:50:56
that would then serve as useful

00:50:51 --> 00:50:58
sort of representations of state

00:50:55 --> 00:51:00
that uh you can make decisions by so

00:50:57 --> 00:51:02
have a long-term context based on what

00:50:59 --> 00:51:04
you make in the decision

00:51:01 --> 00:51:06
so in some sense the parameters already

00:51:04 --> 00:51:08
do that

00:51:05 --> 00:51:09
he parameters are an aggregation of the

00:51:07 --> 00:51:11
day of the neural

00:51:08 --> 00:51:13
of the entirety of the neural nets

00:51:10 --> 00:51:16
experience and so they count as the long

00:51:12 --> 00:51:18
as long form long-term knowledge

00:51:15 --> 00:51:20
and people have trained various neural

00:51:17 --> 00:51:22
nets to act as knowledge bases and

00:51:19 --> 00:51:23
you know investigated with invest people

00:51:21 --> 00:51:26
have investigated language tomorrow's

00:51:22 --> 00:51:28
knowledge basis so

00:51:25 --> 00:51:29
there is work there is work there yeah

00:51:27 --> 00:51:31
but in some sense

00:51:28 --> 00:51:33
do you think in every sense do you think

00:51:30 --> 00:51:36
there's a

00:51:32 --> 00:51:38
it's it's all just a a matter of coming

00:51:35 --> 00:51:39
up with a better mechanism of forgetting

00:51:37 --> 00:51:41
the useless stuff

00:51:38 --> 00:51:43
and remembering the useful stuff because

00:51:40 --> 00:51:46
right now i mean there's not

00:51:42 --> 00:51:47
been mechanisms that do remember really

00:51:45 --> 00:51:50
long-term information

00:51:46 --> 00:51:54
what do you mean by that precisely

00:51:49 --> 00:51:54
i like i like the word precisely so

00:51:54 --> 00:52:00
i'm thinking of the kind of compression

00:51:57 --> 00:52:01
of information the knowledge bases

00:51:59 --> 00:52:04
represent

00:52:00 --> 00:52:06
sort of creating a

00:52:03 --> 00:52:08
now i apologize for my sort of

00:52:05 --> 00:52:10
human-centric thinking about

00:52:07 --> 00:52:12
what knowledge is because neural

00:52:09 --> 00:52:14
networks aren't

00:52:11 --> 00:52:16
interpretable necessarily with the kind

00:52:13 --> 00:52:19
of knowledge they have discovered

00:52:15 --> 00:52:21
but a good example for me is knowledge

00:52:18 --> 00:52:22
bases being able to build up over time

00:52:20 --> 00:52:24
something like

00:52:21 --> 00:52:26
the knowledge that wikipedia represents

00:52:23 --> 00:52:29
it's a really compressed

00:52:25 --> 00:52:29
structured

00:52:29 --> 00:52:35
knowledge base obviously not the actual

00:52:32 --> 00:52:37
wikipedia or the language

00:52:34 --> 00:52:38
but like a semantic web the dream that

00:52:36 --> 00:52:40
semantic web represented

00:52:37 --> 00:52:42
so it's a really nice compressed

00:52:39 --> 00:52:45
knowledge base or something

00:52:41 --> 00:52:46
akin to that in the non-interpretable

00:52:44 --> 00:52:48
sense as

00:52:45 --> 00:52:48
neural networks would have well the

00:52:47 --> 00:52:49
neural networks would be

00:52:47 --> 00:52:51
non-interpretable if you look at their

00:52:48 --> 00:52:52
weights but

00:52:50 --> 00:52:54
heir outputs should be very

00:52:51 --> 00:52:56
interpretable okay so yeah how do

00:52:53 --> 00:52:58
you make very smart neural networks like

00:52:55 --> 00:53:01
language models interpretable

00:52:58 --> 00:53:02
well you ask them to generate some text

00:53:00 --> 00:53:02
hen the text will generally be

00:53:01 --> 00:53:04
interpretable

00:53:02 --> 00:53:06
do you find that the epitome of

00:53:03 --> 00:53:08
interpretability like

00:53:05 --> 00:53:10
can you do better like can you uh

00:53:07 --> 00:53:13
because you can't okay i'd like to know

00:53:09 --> 00:53:13
hat does it know and what doesn't know

00:53:12 --> 00:53:15
i would like

00:53:12 --> 00:53:17
the neural network to come up with

00:53:14 --> 00:53:19
examples where it

00:53:16 --> 00:53:21
's completely dumb and examples where

00:53:18 --> 00:53:22
it's completely brilliant

00:53:20 --> 00:53:25
and the only way i know how to do that

00:53:21 --> 00:53:27
now is to generate a lot of examples and

00:53:24 --> 00:53:29
use my human judgment

00:53:26 --> 00:53:31
but it would be nice if a neonatal had

00:53:28 --> 00:53:35
some aware self-awareness

00:53:30 --> 00:53:37
about it yeah 100 i'm a big believer in

00:53:34 --> 00:53:40
self-awareness and i think that

00:53:36 --> 00:53:41
i think i think neural net

00:53:39 --> 00:53:42
self-awareness will allow for things

00:53:40 --> 00:53:44
like

00:53:41 --> 00:53:46
the capabilities like the ones you

00:53:43 --> 00:53:47
describe like for them to know what they

00:53:45 --> 00:53:49
know and what they don't know

00:53:46 --> 00:53:51
and for them to know where to invest to

00:53:48 --> 00:53:53
increase their skills most optimally

00:53:50 --> 00:53:54
and to your question of interpretability

00:53:52 --> 00:53:55
there are actually two answers to that

00:53:53 --> 00:53:56
question

00:53:54 --> 00:53:58
e answer is you know we have the

00:53:55 --> 00:54:00
neural net so we can

00:53:57 --> 00:54:01
alyze the neurons and we can try to

00:53:59 --> 00:54:02
understand what the different neurons

00:54:00 --> 00:54:04
and different layers mean

00:54:01 --> 00:54:06
d you can actually do that and openai

00:54:04 --> 00:54:09
has done some work on that

00:54:05 --> 00:54:11
but there is a different answer which is

00:54:08 --> 00:54:14
that i would say this is the

00:54:10 --> 00:54:16
human-centric answer where you say

00:54:13 --> 00:54:17
ou know you look at a human being you

00:54:15 --> 00:54:19
can't read you know

00:54:16 --> 00:54:20
how how do you know what a human being

00:54:18 --> 00:54:21
is think and you ask them you say hey

00:54:19 --> 00:54:23
what do you think about this what do you

00:54:20 --> 00:54:25
think about that

00:54:22 --> 00:54:27
and you get some answers the answers you

00:54:24 --> 00:54:28
get are sticky in the sense you already

00:54:26 --> 00:54:31
have a mental model

00:54:27 --> 00:54:33
you already have an uh yeah mental model

00:54:30 --> 00:54:36
of that human being

00:54:32 --> 00:54:37
you already have an understanding of

00:54:35 --> 00:54:39
like a

00:54:36 --> 00:54:40
big conception of what it of that

00:54:38 --> 00:54:42
human being how they think

00:54:39 --> 00:54:44
what they know how they see the world

00:54:41 --> 00:54:48
and then everything you ask you're

00:54:43 --> 00:54:51
adding on to that and that stickiness

00:54:47 --> 00:54:53
eems to be that's one of the really

00:54:50 --> 00:54:55
interesting qualities of the the human

00:54:52 --> 00:54:57
being is that information is sticky

00:54:54 --> 00:54:59
ou don't you seem to remember the

00:54:56 --> 00:55:01
useful stuff aggregate it well

00:54:58 --> 00:55:02
and forget most of the information

00:55:00 --> 00:55:05
that's not useful

00:55:01 --> 00:55:06
that process but that's also pretty

00:55:04 --> 00:55:07
similar to the process that neural

00:55:05 --> 00:55:09
networks do

00:55:06 --> 00:55:11
is just that neural network so much

00:55:08 --> 00:55:13
crappier at it at this time

00:55:10 --> 00:55:14
it doesn't seem to be fundamentally that

00:55:12 --> 00:55:16
different but

00:55:13 --> 00:55:18
just to stick on reasoning for a little

00:55:15 --> 00:55:20
longer

00:55:17 --> 00:55:22
he said why not why can't i reason

00:55:19 --> 00:55:27
what's a good impressive

00:55:21 --> 00:55:27
feat benchmark to you of reasoning

00:55:27 --> 00:55:31
that you'll be impressed by if you don't

00:55:28 --> 00:55:32
know what we're able to do

00:55:30 --> 00:55:35
is that something you already have in

00:55:31 --> 00:55:38
mind well i think writing writing

00:55:34 --> 00:55:41
really good code i think

00:55:37 --> 00:55:43
proving really hard theorems solving

00:55:40 --> 00:55:45
open-ended problems with out-of-the-box

00:55:42 --> 00:55:45
solutions

00:55:45 --> 00:55:50
and uh sort of theorem type mathematical

00:55:48 --> 00:55:51
problems

00:55:49 --> 00:55:53
yeah i think though those ones are a

00:55:50 --> 00:55:55
very natural example as well

00:55:52 --> 00:55:56
you know if you can prove an unproven

00:55:54 --> 00:55:58
theorem then it's hard to argue don't

00:55:55 --> 00:55:59
reason

00:55:57 --> 00:56:01
and so by the way and this comes back to

00:55:58 --> 00:56:01
the point about the hard results you

00:56:00 --> 00:56:04
know

00:56:00 --> 00:56:05
if you got a heart if you have machine

00:56:03 --> 00:56:06
learning

00:56:04 --> 00:56:08
deep learning as a field is very

00:56:05 --> 00:56:10
fortunate because we have the ability to

00:56:07 --> 00:56:11
sometimes produce these unambiguous

00:56:09 --> 00:56:13
results

00:56:10 --> 00:56:15
and when they happen uh the debate

00:56:12 --> 00:56:16
changes the conversation changes it's a

00:56:14 --> 00:56:18
conversa

00:56:15 --> 00:56:20
we have the ability to produce

00:56:17 --> 00:56:22
conversation changing results

00:56:19 --> 00:56:23
conversation and then of course just

00:56:21 --> 00:56:24
like you said people kind of take that

00:56:22 --> 00:56:25
for granted and say that wasn't actually

00:56:23 --> 00:56:27
a hard problem

00:56:24 --> 00:56:30
well i mean at some point we'll probably

00:56:26 --> 00:56:32
run out of heart problems

00:56:29 --> 00:56:33
yeah that whole mortality thing is kind

00:56:31 --> 00:56:35
of

00:56:32 --> 00:56:36
kind of a sticky problem that we haven't

00:56:34 --> 00:56:38
quite figured out maybe we'll solve that

00:56:35 --> 00:56:40
one

00:56:37 --> 00:56:42
i think one of the fascinating things in

00:56:39 --> 00:56:43
your entire body of work but also the

00:56:41 --> 00:56:45
work at open ai recently

00:56:42 --> 00:56:48
one of the conversation changers has

00:56:44 --> 00:56:51
been in the world of language models

00:56:47 --> 00:56:52
can you briefly kind of try to describe

00:56:50 --> 00:56:53
the recent history of using neural

00:56:51 --> 00:56:55
networks

00:56:52 --> 00:56:57
in the domain of language and text well

00:56:54 --> 00:56:59
there's been lots of history

00:56:56 --> 00:57:01
i think i think the elman network was

00:56:58 --> 00:57:02
this was was a small

00:57:00 --> 00:57:04
tiny recurrent neural network applied to

00:57:01 --> 00:57:08
language back in the 80s

00:57:03 --> 00:57:09
o the history is really you know fairly

00:57:07 --> 00:57:12
long at least

00:57:08 --> 00:57:13
and the thing that started the thing

00:57:11 --> 00:57:15
that changed

00:57:12 --> 00:57:16
the trajectory of neural networks and

00:57:14 --> 00:57:18
language is

00:57:15 --> 00:57:19
the thing that changed the trajectory of

00:57:17 --> 00:57:20
deep learning and that's data and

00:57:18 --> 00:57:23
compute

00:57:19 --> 00:57:23
so suddenly you move from small language

00:57:22 --> 00:57:25
models which

00:57:22 --> 00:57:27
learn a little bit and with language

00:57:24 --> 00:57:29
models in particular you can

00:57:26 --> 00:57:31
there's a very clear explanation for why

00:57:28 --> 00:57:33
they need to be large

00:57:30 --> 00:57:35
to be good because they're trying to

00:57:32 --> 00:57:37
predict the next word

00:57:34 --> 00:57:40
so we don't when you don't know anything

00:57:36 --> 00:57:42
you'll notice very

00:57:39 --> 00:57:43
broad stroke surface level patterns

00:57:41 --> 00:57:45
like

00:57:42 --> 00:57:47
sometimes there are characters and there

00:57:44 --> 00:57:48
is a space between those characters

00:57:46 --> 00:57:50
you'll notice this pattern

00:57:47 --> 00:57:51
and you'll notice that sometimes there

00:57:49 --> 00:57:53
is a comma and then the next character

00:57:50 --> 00:57:54
is a capital letter you'll notice that

00:57:52 --> 00:57:56
pattern

00:57:53 --> 00:57:58
eventually you may start to notice that

00:57:55 --> 00:57:59
here are certain words occur often you

00:57:57 --> 00:58:00
may notice that

00:57:58 --> 00:58:02
spellings are a thing you may notice

00:57:59 --> 00:58:04
syntax and when you get

00:58:01 --> 00:58:06
really good at all these you start to

00:58:03 --> 00:58:09
notice the semantics

00:58:05 --> 00:58:10
you start to notice the facts but for

00:58:08 --> 00:58:12
that to happen the language model needs

00:58:09 --> 00:58:15
to be larger

00:58:11 --> 00:58:15
so that's let's linger on that because

00:58:14 --> 00:58:19
that's where you

00:58:14 --> 00:58:19
and noam chomps could disagree

00:58:18 --> 00:58:25
so you think we're actually taking uh

00:58:22 --> 00:58:29
incremental steps a sort of larger

00:58:24 --> 00:58:31
network larger compute will be able to

00:58:28 --> 00:58:32
get to the semantics to be able to

00:58:30 --> 00:58:35
understand language

00:58:32 --> 00:58:38
without what gnome likes to sort of

00:58:34 --> 00:58:39
think of as a

00:58:37 --> 00:58:41
fundamental understandings of the

00:58:38 --> 00:58:44
structure of language

00:58:40 --> 00:58:45
like imposing your theory of language

00:58:43 --> 00:58:48
onto the

00:58:44 --> 00:58:48
learning mechanism so you're saying the

00:58:47 --> 00:58:51
learning

00:58:47 --> 00:58:54
you can learn from raw data the

00:58:50 --> 00:58:57
mechanism that underlies language

00:58:53 --> 00:58:59
well i think i think it's pretty likely

00:58:56 --> 00:59:01
but i also want to say that i don't

00:58:58 --> 00:59:04
really

00:59:00 --> 00:59:04
know precisely what is what chomsky

00:59:03 --> 00:59:06
means

00:59:03 --> 00:59:08
when he talks about him you said

00:59:05 --> 00:59:10
something about imposing

00:59:07 --> 00:59:12
your structure and language i'm not 100

00:59:09 --> 00:59:13
sure what he means but

00:59:11 --> 00:59:15
empirically it seems that when you

00:59:12 --> 00:59:16
inspect those larger language models

00:59:14 --> 00:59:18
they exhibit signs of understanding the

00:59:16 --> 00:59:19
semantics whereas the smaller language

00:59:17 --> 00:59:21
models do not

00:59:18 --> 00:59:22
we've seen that a few years ago when we

00:59:20 --> 00:59:24
did work on the sentiment neuron we

00:59:22 --> 00:59:26
trained the small

00:59:23 --> 00:59:28
you know smaller shell stm to predict

00:59:25 --> 00:59:30
he next character

00:59:27 --> 00:59:32
in amazon reviews and we noticed that

00:59:29 --> 00:59:33
when you increase the size of the lstm

00:59:31 --> 00:59:36
from 500

00:59:32 --> 00:59:37
lstm cells to 4000 lstm cells then one

00:59:35 --> 00:59:39
of the neurons

00:59:36 --> 00:59:40
tarts to represent the sentiment of the

00:59:38 --> 00:59:43
article

00:59:39 --> 00:59:45
of story of the review now why is that

00:59:42 --> 00:59:47
sentiment is a pretty semantic

00:59:44 --> 00:59:49
attribute it's not a syntactic attribute

00:59:46 --> 00:59:50
and for people who might not know i

00:59:48 --> 00:59:52
don't know if that's a standard term but

00:59:49 --> 00:59:53
sentiment is whether it's a positive or

00:59:51 --> 00:59:55
negative review that's right like this

00:59:52 --> 00:59:56
the person happy with something is

00:59:54 --> 00:59:59
the person unhappy with something

00:59:56 --> 01:00:00
and so here we had very clear evidence

00:59:58 --> 01:00:02
that a small

00:59:59 --> 01:00:04
neural net does not capture sentiment

01:00:01 --> 01:00:07
while a large neural net does

01:00:03 --> 01:00:08
and why is that well our theory is that

01:00:06 --> 01:00:09
some point

01:00:07 --> 01:00:11
you run out of syntax to models you

01:00:08 --> 01:00:15
start gotta focus on something else

01:00:10 --> 01:00:17
and with size you quickly run out

01:00:14 --> 01:00:19
of syntax to model and then you really

01:00:16 --> 01:00:20
start to focus on the semantics is would

01:00:18 --> 01:00:21
be the idea

01:00:19 --> 01:00:23
that's right and so i don't i don't want

01:00:20 --> 01:00:25
o imply that our models have complete

01:00:22 --> 01:00:26
semantic understanding because that's

01:00:24 --> 01:00:29
not true

01:00:25 --> 01:00:31
but they definitely are showing signs of

01:00:28 --> 01:00:32
semantic understanding partial semantic

01:00:30 --> 01:00:33
understanding but

01:00:31 --> 01:00:35
he smaller models do not show that

01:00:32 --> 01:00:37
hose signs

01:00:34 --> 01:00:39
can you take a step back and say what is

01:00:36 --> 01:00:42
gpt2 which is

01:00:38 --> 01:00:43
one of the big language models that was

01:00:41 --> 01:00:44
the conversation

01:00:42 --> 01:00:46
change in the past couple of years yes

01:00:43 --> 01:00:49
it's so gpt-2

01:00:46 --> 01:00:51
is a transformer with one and a half

01:00:48 --> 01:00:54
billion parameters

01:00:50 --> 01:00:55
that was trained on upon about 40

01:00:53 --> 01:00:58
billion

01:00:54 --> 01:01:01
tokens of text which were obtained

01:00:57 --> 01:01:02
from web pages that were linked to from

01:01:00 --> 01:01:04
reddit articles with more than three

01:01:01 --> 01:01:06
upvotes and what's the transformer

01:01:03 --> 01:01:09
is the most important

01:01:05 --> 01:01:10
advance in neural network architectures

01:01:08 --> 01:01:12
in recent history

01:01:09 --> 01:01:13
what is attention maybe too because i

01:01:11 --> 01:01:15
think that's the interesting

01:01:12 --> 01:01:18
idea not necessarily sort of technically

01:01:14 --> 01:01:21
speaking but the idea of attention

01:01:17 --> 01:01:22
versus maybe what recurring neural

01:01:20 --> 01:01:24
networks represent

01:01:21 --> 01:01:25
yeah so the thing is the transformer is

01:01:23 --> 01:01:27
a combination

01:01:24 --> 01:01:28
of multiple ideas simultaneously which

01:01:26 --> 01:01:30
attention is one

01:01:28 --> 01:01:33
do you think attention is the key no

01:01:29 --> 01:01:35
it's a key but it's not the key

01:01:32 --> 01:01:37
the transformer is successful because it

01:01:34 --> 01:01:39
is the simultaneous combination of

01:01:36 --> 01:01:40
multiple ideas and if you were to remove

01:01:38 --> 01:01:42
ither idea it would be much less

01:01:39 --> 01:01:44
uccessful

01:01:41 --> 01:01:45
so the transformer uses a lot of

01:01:43 --> 01:01:46
attention but attention existed for a

01:01:44 --> 01:01:49
few years

01:01:45 --> 01:01:51
o that can't be the main innovation the

01:01:48 --> 01:01:54
transformer

01:01:50 --> 01:01:56
is designed in such a way that it runs

01:01:53 --> 01:01:58
really fast on the gpu

01:01:56 --> 01:02:00
and that makes a huge amount of

01:01:57 --> 01:02:02
difference this is one thing

01:01:59 --> 01:02:03
the second thing is the transformer is

01:02:01 --> 01:02:06
not recurrent

01:02:02 --> 01:02:07
and that is really important too because

01:02:05 --> 01:02:09
it is more shallow and therefore much

01:02:06 --> 01:02:11
easier to optimize

01:02:08 --> 01:02:15
so in other words it uses attention it

01:02:10 --> 01:02:17
is it is a really great fit to the gpu

01:02:14 --> 01:02:18
and it is not recurrent so therefore

01:02:16 --> 01:02:20
less deep and easier to optimize

01:02:17 --> 01:02:22
and the combination of those factors

01:02:19 --> 01:02:25
make it successful so now it makes

01:02:21 --> 01:02:26
great use of your gpu it allows

01:02:24 --> 01:02:28
you to achieve

01:02:25 --> 01:02:29
better results for the same amount of

01:02:27 --> 01:02:32
compute

01:02:28 --> 01:02:35
and that's why it's successful were you

01:02:31 --> 01:02:37
surprised how well transformers worked

01:02:34 --> 01:02:38
and gpt2 worked so you worked on

01:02:36 --> 01:02:41
language

01:02:37 --> 01:02:43
you've had a lot of great ideas before

01:02:40 --> 01:02:45
transformers came about in language

01:02:42 --> 01:02:46
so you got to see the whole set of

01:02:44 --> 01:02:49
revolutions before and after

01:02:46 --> 01:02:50
were you surprised yeah a little a

01:02:48 --> 01:02:52
little

01:02:49 --> 01:02:53
yeah i mean it's hard it's hard to

01:02:51 --> 01:02:55
remember because

01:02:52 --> 01:02:57
you adapt really quickly but it

01:02:54 --> 01:02:58
definitely was surprising it definitely

01:02:56 --> 01:03:00
was in fact i'll

01:02:57 --> 01:03:01
you know what i'll i'll retract my

01:02:59 --> 01:03:03
statement it was

01:03:00 --> 01:03:06
pretty amazing it was just

01:03:02 --> 01:03:07
amazing to see generate this text

01:03:05 --> 01:03:09
of this and you know you got to keep in

01:03:06 --> 01:03:11
mind that we've seen at that time we've

01:03:08 --> 01:03:13
seen all this progress in gans

01:03:10 --> 01:03:15
in improving you know the samples

01:03:12 --> 01:03:17
produced by cans were just amazing

01:03:14 --> 01:03:18
you have these realistic faces but text

01:03:16 --> 01:03:21
hasn't really moved that much

01:03:17 --> 01:03:24
and suddenly we moved from you know

01:03:20 --> 01:03:26
hatever gans were in 2015

01:03:23 --> 01:03:28
to the best most amazing gans in one

01:03:25 --> 01:03:30
step right and i was really stunning

01:03:27 --> 01:03:31
even though theory predicted yeah you

01:03:29 --> 01:03:32
train a big language model of course you

01:03:30 --> 01:03:34
should get this

01:03:31 --> 01:03:35
but then to see it with your own eyes

01:03:33 --> 01:03:38
it's something else

01:03:34 --> 01:03:38
and yet we adapt really quickly and now

01:03:37 --> 01:03:42
there's

01:03:38 --> 01:03:45
uh sort of

01:03:41 --> 01:03:48
some cognitive scientists write articles

01:03:44 --> 01:03:49
aying that gpt2 models don't truly

01:03:47 --> 01:03:51
understand

01:03:48 --> 01:03:52
language so we adapt quickly to how

01:03:50 --> 01:03:54
amazing

01:03:51 --> 01:03:56
the fact that they're able to model the

01:03:53 --> 01:03:59
language so well is

01:03:55 --> 01:04:03
o what do you think is the bar

01:03:58 --> 01:04:05
for what for impressing us that it

01:04:02 --> 01:04:07
i don't know do you think that bar will

01:04:04 --> 01:04:09
continuously be moved

01:04:06 --> 01:04:10
efinitely i i think when you start to

01:04:08 --> 01:04:12
see really

01:04:09 --> 01:04:13
dramatic economic impact that's when i

01:04:11 --> 01:04:15
think that's in some sense

01:04:12 --> 01:04:17
the next barrier because right now if

01:04:14 --> 01:04:20
you think about the working ai

01:04:16 --> 01:04:22
t's really confusing it's really hard

01:04:19 --> 01:04:23
to know what to make of all these

01:04:21 --> 01:04:26
advances

01:04:22 --> 01:04:27
it's kind of like okay you got an

01:04:25 --> 01:04:29
advance and now you can do

01:04:26 --> 01:04:30
more things and you got another

01:04:28 --> 01:04:31
improvement and you got another cool

01:04:29 --> 01:04:34
demo

01:04:30 --> 01:04:37
at some point i think

01:04:33 --> 01:04:39
people who are outside of ai they can no

01:04:36 --> 01:04:40
longer distinguish this progress anymore

01:04:38 --> 01:04:43
so we were talking offline

01:04:40 --> 01:04:44
about translating russian to english and

01:04:42 --> 01:04:45
how there's a lot of brilliant work in

01:04:43 --> 01:04:47
russian that

01:04:44 --> 01:04:48
he the rest of the world doesn't know

01:04:46 --> 01:04:49
about that's true for chinese that's

01:04:47 --> 01:04:51
true for a lot of

01:04:48 --> 01:04:53
scientists and just

01:04:50 --> 01:04:54
artistic work in general

01:04:52 --> 01:04:55
do you think translation is the place

01:04:53 --> 01:04:56
where we're going to see sort of

01:04:54 --> 01:04:59
economic

01:04:56 --> 01:05:00
big impact i i don't know i i think i

01:04:58 --> 01:05:02
think there is a huge number of

01:05:00 --> 01:05:04
i mean first of all i would want to i

01:05:01 --> 01:05:07
want to point out the translation

01:05:03 --> 01:05:09
already today is huge i think billions

01:05:06 --> 01:05:11
of people interact with

01:05:08 --> 01:05:12
uh big chunks of the internet primarily

01:05:10 --> 01:05:14
through translation so

01:05:11 --> 01:05:17
translation is already huge and it's

01:05:13 --> 01:05:19
hugely hugely positive too

01:05:16 --> 01:05:21
i think self-driving is going to be

01:05:18 --> 01:05:24
hugely impactful

01:05:20 --> 01:05:26
and that's you know it's it's unknown

01:05:23 --> 01:05:26
exactly when it happens but again i

01:05:25 --> 01:05:28
would

01:05:25 --> 01:05:30
i would not bet against deep learning so

01:05:27 --> 01:05:30
i so that's deep learning in general but

01:05:29 --> 01:05:32
you

01:05:30 --> 01:05:34
keep learning for self-driving yes

01:05:32 --> 01:05:35
deep learning for self-driving but

01:05:33 --> 01:05:37
i was talking about sort of language

01:05:34 --> 01:05:39
models let's see just to ch

01:05:36 --> 01:05:40
just spear it off a little bit just to

01:05:38 --> 01:05:42
check you're not seeing a connection

01:05:39 --> 01:05:45
between driving and language no no

01:05:41 --> 01:05:46
kay all right they both use neural nets

01:05:44 --> 01:05:48
they'll be a poetic connection i think

01:05:45 --> 01:05:49
there might be some

01:05:47 --> 01:05:51
like you said there might be some kind

01:05:48 --> 01:05:55
of unification towards uh

01:05:50 --> 01:05:57
a kind of multi-task transformers

01:05:54 --> 01:05:58
that can take on both language and

01:05:56 --> 01:06:02
vision tasks

01:05:58 --> 01:06:04
that'd be an interesting unification

01:06:01 --> 01:06:05
ow let's see what can i ask about gpt2

01:06:03 --> 01:06:08
more um

01:06:04 --> 01:06:09
it's simple it's not much to ask it's so

01:06:07 --> 01:06:10
you take it

01:06:08 --> 01:06:12
you take a transform you make it bigger

01:06:09 --> 01:06:13
you give it more data and suddenly it

01:06:11 --> 01:06:15
does all those amazing things

01:06:12 --> 01:06:17
yeah one of the beautiful things is that

01:06:14 --> 01:06:21
gpg the transformers are

01:06:16 --> 01:06:24
fundamentally simple to explain to train

01:06:20 --> 01:06:26
do you think bigger will continue to

01:06:24 --> 01:06:29
show better results

01:06:25 --> 01:06:30
in language probably

01:06:28 --> 01:06:32
sort of like what are the next steps

01:06:29 --> 01:06:34
with gpt2 do you think

01:06:31 --> 01:06:35
i mean for i think for for sure seeing

01:06:33 --> 01:06:37
what

01:06:34 --> 01:06:38
uh larger versions can do is one

01:06:36 --> 01:06:41
direction

01:06:37 --> 01:06:42
also i mean there are there are many

01:06:40 --> 01:06:44
questions there's one question which i'm

01:06:42 --> 01:06:46
curious about and that's the following

01:06:43 --> 01:06:48
so right now gpt2 so we feed all this

01:06:46 --> 01:06:49
data from the internet which means that

01:06:47 --> 01:06:51
he needs to memorize all those

01:06:48 --> 01:06:52
random facts about everything in the

01:06:50 --> 01:06:56
internet

01:06:51 --> 01:06:58
and it would be nice if

01:06:55 --> 01:07:00
the model could somehow use its own

01:06:58 --> 01:07:02
intelligence

01:06:59 --> 01:07:04
to decide what data it wants to study

01:07:01 --> 01:07:07
accept and what data it wants to reject

01:07:03 --> 01:07:08
just like people people don't learn all

01:07:06 --> 01:07:10
data indiscriminately we are

01:07:07 --> 01:07:12
super selective about what we learn and

01:07:09 --> 01:07:15
i think this kind of active learning i

01:07:11 --> 01:07:18
think would be very nice to have

01:07:14 --> 01:07:22
yeah listen i love active learning so

01:07:17 --> 01:07:23
let me ask does the selection of data

01:07:21 --> 01:07:26
can you just elaborate that a little bit

01:07:22 --> 01:07:30
more do you think the selection of data

01:07:25 --> 01:07:34
is um like i i have this kind of sense

01:07:29 --> 01:07:34
that the optimization of how you select

01:07:33 --> 01:07:38
data so

01:07:34 --> 01:07:38
the active learning process is going to

01:07:37 --> 01:07:42
be

01:07:37 --> 01:07:42
a place for a lot of breakthroughs even

01:07:41 --> 01:07:44
in the near future

01:07:42 --> 01:07:46
because there hasn't been many

01:07:43 --> 01:07:47
breakthroughs there that are public i

01:07:45 --> 01:07:49
feel like there might be

01:07:46 --> 01:07:50
private breakthroughs that companies

01:07:48 --> 01:07:52
keep to themselves because the

01:07:49 --> 01:07:54
fundamental problem has to be solved

01:07:51 --> 01:07:55
if you want to solve self-driving if you

01:07:53 --> 01:07:57
want to solve a particular

01:07:54 --> 01:07:58
task but do you what do you think about

01:07:56 --> 01:08:00
he space in general

01:07:57 --> 01:08:01
yeah so i think that for something like

01:07:59 --> 01:08:03
active learning or in fact for

01:08:00 --> 01:08:05
any kind of capability like active

01:08:02 --> 01:08:06
learning the thing that it really needs

01:08:04 --> 01:08:10
is a problem

01:08:05 --> 01:08:12
it needs a problem that requires it

01:08:09 --> 01:08:13
's very hard to do research about the

01:08:11 --> 01:08:15
capability if you don't have a task

01:08:12 --> 01:08:17
because then what's going to happen is

01:08:14 --> 01:08:18
you will come up with an artificial task

01:08:16 --> 01:08:21
get good results

01:08:17 --> 01:08:25
but not really convince anyone right

01:08:20 --> 01:08:28
like we're now past the stage where

01:08:24 --> 01:08:30
getting a result an mnist

01:08:27 --> 01:08:32
some clever formulation remnants will

01:08:29 --> 01:08:33
convince people that's right in

01:08:31 --> 01:08:35
fact you could

01:08:32 --> 01:08:36
quite easily come up with a simple

01:08:34 --> 01:08:37
active learning scheme on amnesty and

01:08:35 --> 01:08:40
get a 10x

01:08:36 --> 01:08:41
speed up but then so what and i think

01:08:40 --> 01:08:43
that

01:08:40 --> 01:08:45
with active learning their needs they

01:08:42 --> 01:08:46
need active learning will naturally

01:08:44 --> 01:08:48
arise

01:08:45 --> 01:08:50
as there are as problems that require it

01:08:47 --> 01:08:52
pop up

01:08:49 --> 01:08:53
that's how i would that's my my take on

01:08:51 --> 01:08:55
it

01:08:52 --> 01:08:58
here's another interesting thing that

01:08:54 --> 01:09:01
openai has brought up with gpt2 which is

01:08:57 --> 01:09:04
when you create a powerful artificial

01:09:00 --> 01:09:05
intelligence system and it was unclear

01:09:03 --> 01:09:08
what kind of detrimental once you

01:09:04 --> 01:09:09
release gpt2

01:09:07 --> 01:09:11
what kind of detrimental effect it will

01:09:08 --> 01:09:13
have because if you have an

01:09:10 --> 01:09:14
a model that can generate pretty

01:09:12 --> 01:09:17
realistic text

01:09:13 --> 01:09:17
you can start to imagine that you know

01:09:16 --> 01:09:21
on the

01:09:16 --> 01:09:22
it would be used by bots and some some

01:09:20 --> 01:09:24
way that we can't even imagine so like

01:09:21 --> 01:09:25
there's this nervousness about what it's

01:09:23 --> 01:09:27
possible to do

01:09:24 --> 01:09:29
so you you did a really kind of brave

01:09:26 --> 01:09:30
and i think profound thing which you

01:09:28 --> 01:09:33
started a conversation about this like

01:09:30 --> 01:09:35
how do we release

01:09:32 --> 01:09:37
powerful artificial intelligence models

01:09:34 --> 01:09:40
to the public

01:09:36 --> 01:09:40
if we do it all how do we privately

01:09:39 --> 01:09:43
discuss

01:09:39 --> 01:09:46
with other even competitors about

01:09:42 --> 01:09:46
how we manage the use of the systems and

01:09:45 --> 01:09:48
so on

01:09:46 --> 01:09:50
so from that this whole experience you

01:09:48 --> 01:09:52
released a report on it

01:09:49 --> 01:09:53
but in general are there any insights

01:09:51 --> 01:09:56
that you've gathered

01:09:52 --> 01:09:58
from just thinking about this about how

01:09:55 --> 01:10:01
you release models like this

01:09:57 --> 01:10:03
i mean i think that my take on this is

01:10:00 --> 01:10:06
that the field of ai

01:10:02 --> 01:10:07
has been in a state of childhood and now

01:10:05 --> 01:10:10
it's exiting that state

01:10:06 --> 01:10:12
and it's entering a state of maturity

01:10:09 --> 01:10:13
what that means is that ai is very

01:10:11 --> 01:10:15
successful

01:10:12 --> 01:10:18
and also very impactful and its impact

01:10:14 --> 01:10:22
is not only large but it's also growing

01:10:18 --> 01:10:23
and so for that reason it seems wise to

01:10:21 --> 01:10:25
start thinking

01:10:22 --> 01:10:26
about the impact of our systems before

01:10:24 --> 01:10:28
leasing them

01:10:25 --> 01:10:30
aybe a little bit too soon rather than

01:10:27 --> 01:10:32
a little bit too late

01:10:29 --> 01:10:33
and with the case of gpt2 like i

01:10:31 --> 01:10:36
mentioned earlier

01:10:32 --> 01:10:37
the results really were stunning and it

01:10:35 --> 01:10:39
seemed

01:10:36 --> 01:10:41
plausible it didn't seem certain it

01:10:38 --> 01:10:43
seemed plausible that

01:10:40 --> 01:10:45
something like gpt2 could easily use to

01:10:42 --> 01:10:48
reduce the cost of

01:10:44 --> 01:10:50
this information and so

01:10:47 --> 01:10:51
there was a question of what's the best

01:10:49 --> 01:10:53
way to release it and staged release

01:10:50 --> 01:10:54
emed logical a small model was

01:10:52 --> 01:10:58
released

01:10:53 --> 01:10:59
and there was time to see the

01:10:57 --> 01:11:01
many people use these models in lots of

01:10:58 --> 01:11:02
cool ways they've been lots of really

01:11:00 --> 01:11:05
cool applications

01:11:01 --> 01:11:07
there haven't been any negative

01:11:04 --> 01:11:08
applications we know of

01:11:06 --> 01:11:10
and so eventually it was released but

01:11:07 --> 01:11:10
also other people replicated similar

01:11:09 --> 01:11:12
models

01:11:09 --> 01:11:14
that's an interesting question though

01:11:11 --> 01:11:17
that we know of so

01:11:13 --> 01:11:20
in your view stage release is

01:11:16 --> 01:11:23
uh at least part of the answer to the

01:11:19 --> 01:11:23
question of how do we

01:11:22 --> 01:11:27
uh how what do we do once we create a

01:11:24 --> 01:11:29
system like this it's part of the answer

01:11:26 --> 01:11:31
yes

01:11:28 --> 01:11:33
is there any other insights like say you

01:11:30 --> 01:11:35
don't want to release the model at all

01:11:32 --> 01:11:36
because it's useful to you for whatever

01:11:34 --> 01:11:38
the business is

01:11:35 --> 01:11:40
well there are plenty plenty of people

01:11:37 --> 01:11:43
don't release models already

01:11:39 --> 01:11:45
right of course but is there some

01:11:42 --> 01:11:47
moral ethical responsibility when you

01:11:44 --> 01:11:51
have a very powerful model to sort of

01:11:46 --> 01:11:53
communicate like just as you said

01:11:50 --> 01:11:55
when you had gpt2 it was unclear how

01:11:52 --> 01:11:57
much it could be used for misinformation

01:11:54 --> 01:11:58
it's an open question and getting an

01:11:56 --> 01:12:00
swer to that

01:11:57 --> 01:12:02
might require that you talk to other

01:11:59 --> 01:12:03
eally smart people that are outside of

01:12:01 --> 01:12:06
uh

01:12:02 --> 01:12:08
outside your particular group

01:12:05 --> 01:12:09
have you please tell me there's some

01:12:07 --> 01:12:11
optimistic pathway

01:12:08 --> 01:12:15
for people across the world to

01:12:10 --> 01:12:15
collaborate on these kinds of cases

01:12:14 --> 01:12:19
or is it still really difficult from

01:12:16 --> 01:12:20
one company to talk to another

01:12:18 --> 01:12:22
company

01:12:19 --> 01:12:23
so it's definitely possible it's

01:12:21 --> 01:12:27
definitely possible to

01:12:22 --> 01:12:30
discuss these kind of models

01:12:26 --> 01:12:32
with colleagues elsewhere and to

01:12:29 --> 01:12:34
get get their take on what's on what to

01:12:31 --> 01:12:38
do how hard is it though

01:12:33 --> 01:12:41
i mean do you see that happening

01:12:37 --> 01:12:42
i think that's that's a place where it's

01:12:40 --> 01:12:44
important to gradually build trust

01:12:41 --> 01:12:47
between companies

01:12:43 --> 01:12:49
because ultimately all the ai developers

01:12:46 --> 01:12:51
are building technology which is bitcoin

01:12:48 --> 01:12:54
to be increasingly more powerful

01:12:50 --> 01:12:54
and so it's

01:12:54 --> 01:12:59
the way to think about it is that

01:12:55 --> 01:13:03
ultimately we're only together

01:12:58 --> 01:13:05
yeah it's uh i tend to believe in the

01:13:02 --> 01:13:07
better angels of our nature but i do

01:13:04 --> 01:13:11
hope

01:13:06 --> 01:13:12
that um that when you build a really

01:13:10 --> 01:13:13
powerful ai system in a particular

01:13:11 --> 01:13:16
domain

01:13:12 --> 01:13:20
that you also think about the potential

01:13:15 --> 01:13:20
negative consequences of um

01:13:22 --> 01:13:26
it's an interesting and scary

01:13:23 --> 01:13:28
possibility that it'll be a race

01:13:25 --> 01:13:30
for a ai development that would push

01:13:27 --> 01:13:32
people to close

01:13:29 --> 01:13:34
that development and not share ideas

01:13:31 --> 01:13:36
with others

01:13:33 --> 01:13:38
i don't love this i've been like a pure

01:13:35 --> 01:13:42
academic for 10 years i really like

01:13:37 --> 01:13:43
sharing ideas and it's fun it's exciting

01:13:41 --> 01:13:45
what do you think it takes to let's talk

01:13:42 --> 01:13:46
about agi a little bit

01:13:44 --> 01:13:48
what do you think it takes to build a

01:13:45 --> 01:13:50
system of human level intelligence we

01:13:48 --> 01:13:52
talked about reasoning

01:13:49 --> 01:13:54
we talked about long-term memory but in

01:13:51 --> 01:13:58
general what does it take you think

01:13:53 --> 01:14:01
well i can't be sure

01:13:57 --> 01:14:02
but i think the deep learning plus maybe

01:14:00 --> 01:14:05
another

01:14:01 --> 01:14:06
small idea do you think self-play will

01:14:04 --> 01:14:08
be involved

01:14:05 --> 01:14:10
so like you've spoken about the powerful

01:14:07 --> 01:14:14
mechanism of self-play where

01:14:09 --> 01:14:17
systems learn by sort of uh

01:14:13 --> 01:14:18
exploring the world in a competitive

01:14:16 --> 01:14:20
setting against

01:14:17 --> 01:14:21
other entities that are similarly

01:14:19 --> 01:14:23
skilled as them

01:14:20 --> 01:14:24
and so incrementally improve in this way

01:14:22 --> 01:14:26
do you think self-play will be a

01:14:24 --> 01:14:29
component of

01:14:25 --> 01:14:30
building an agi system yeah so what i

01:14:28 --> 01:14:33
would say

01:14:29 --> 01:14:36
to build agi i think is going to be

01:14:32 --> 01:14:37
deep learning plus some ideas and i

01:14:35 --> 01:14:39
think self-play will be one of those

01:14:36 --> 01:14:43
ideas

01:14:38 --> 01:14:45
i think that that is a very

01:14:42 --> 01:14:48
self play has this amazing property that

01:14:44 --> 01:14:53
it can surprise us

01:14:48 --> 01:14:55
in truly novel ways for example

01:14:52 --> 01:14:57
like we i mean pretty much every

01:14:54 --> 01:15:00
self-play system

01:14:56 --> 01:15:02
both are dotabot i don't know if openai

01:14:59 --> 01:15:04
had a release about

01:15:01 --> 01:15:07
multi-agent where you had two little

01:15:03 --> 01:15:09
agents who were playing hide and seek

01:15:06 --> 01:15:10
and of course also alpha zero they were

01:15:08 --> 01:15:12
all

01:15:09 --> 01:15:14
surprising behaviors they all produce

01:15:11 --> 01:15:16
behaviors that we didn't expect they are

01:15:13 --> 01:15:19
creative solutions to problems

01:15:15 --> 01:15:21
and that seems like an important part of

01:15:18 --> 01:15:23
agi that our systems don't exhibit

01:15:20 --> 01:15:25
routinely right now

01:15:22 --> 01:15:27
and so that's why i like this area i

01:15:24 --> 01:15:28
like this direction because of its

01:15:26 --> 01:15:31
ability to surprise us

01:15:27 --> 01:15:32
and an agr system would

01:15:30 --> 01:15:34
surprise us fundamentally yes but and to

01:15:32 --> 01:15:36
be precise not just

01:15:33 --> 01:15:38
a random surprise but to find a

01:15:36 --> 01:15:40
surprising solution to a problem that's

01:15:38 --> 01:15:42
also useful

01:15:39 --> 01:15:44
right now a lot of the self-play

01:15:42 --> 01:15:47
mechanisms have been used

01:15:43 --> 01:15:51
in the game context or at least in the

01:15:46 --> 01:15:51
simulation context

01:15:50 --> 01:15:55
how much how much do you how far along

01:15:53 --> 01:15:56
the path

01:15:54 --> 01:15:58
to egi do you think will be done in

01:15:55 --> 01:16:02
simulation how much faith

01:15:57 --> 01:16:04
promise do you have in simulation

01:16:01 --> 01:16:05
versus having to have a system that

01:16:03 --> 01:16:08
operates

01:16:04 --> 01:16:09
in the real world whether it's the real

01:16:07 --> 01:16:11
world of digital

01:16:08 --> 01:16:14
real world data or real world like

01:16:10 --> 01:16:16
actual physical world of robotics

01:16:13 --> 01:16:17
i don't think it's an either or i think

01:16:15 --> 01:16:19
simulation is a tool

01:16:16 --> 01:16:21
and it helps it has certain strengths

01:16:18 --> 01:16:25
and certain weaknesses and we should

01:16:20 --> 01:16:28
use it yeah but okay i understand that

01:16:24 --> 01:16:28
's um

01:16:27 --> 01:16:34
that's true but one of the criticisms of

01:16:31 --> 01:16:37
self-play one of the criticisms of

01:16:33 --> 01:16:40
reinforcement learning is one of the

01:16:36 --> 01:16:42
its current power

01:16:39 --> 01:16:44
its current results while amazing have

01:16:42 --> 01:16:45
been demonstrated in a simulated

01:16:43 --> 01:16:46
environments

01:16:44 --> 01:16:48
or very constrained physical

01:16:45 --> 01:16:50
environments do you think it's possible

01:16:47 --> 01:16:51
to escape them

01:16:49 --> 01:16:53
escape the simulated environments and be

01:16:50 --> 01:16:54
able to learn in non-simulated

01:16:52 --> 01:16:56
environments

01:16:53 --> 01:16:57
or do you think it's possible to also

01:16:55 --> 01:17:00
just

01:16:56 --> 01:17:02
simulate in the photorealistic and

01:16:59 --> 01:17:04
physics realistic way the real world in

01:17:01 --> 01:17:06
a way that we can solve real problems

01:17:03 --> 01:17:09
with self-play

01:17:05 --> 01:17:10
in simulation so i think that

01:17:08 --> 01:17:12
ransfer from simulation to the real

01:17:10 --> 01:17:15
world is definitely possible

01:17:11 --> 01:17:17
and has been exhibited many times in by

01:17:14 --> 01:17:19
many different groups it's been

01:17:16 --> 01:17:22
especially successful in vision

01:17:18 --> 01:17:23
also open ai in the summer has

01:17:21 --> 01:17:26
demonstrated a robot hand which was

01:17:22 --> 01:17:27
trained entirely in simulation

01:17:25 --> 01:17:30
in a certain way that allowed for

01:17:26 --> 01:17:32
cinderella transfer to occur

01:17:29 --> 01:17:34
is this uh for the rubik's cube that's

01:17:31 --> 01:17:36
right and i wasn't aware that was

01:17:33 --> 01:17:38
trained in simulation it was straining

01:17:35 --> 01:17:40
simulation entirely

01:17:37 --> 01:17:41
really so what it wasn't in the physical

01:17:39 --> 01:17:44
the hand wasn't trained

01:17:40 --> 01:17:45
no 100 of the training was done in

01:17:43 --> 01:17:47
simulation

01:17:44 --> 01:17:48
and the policy that was learned in

01:17:46 --> 01:17:49
simulation was trained to be very

01:17:47 --> 01:17:51
adaptive

01:17:48 --> 01:17:53
so adaptive that when you transfer it

01:17:50 --> 01:17:55
could very quickly adapt to the physical

01:17:52 --> 01:17:57
world so the kind of

01:17:54 --> 01:17:59
perturbations with the

01:17:56 --> 01:18:01
giraffe or whatever the heck it was

01:17:58 --> 01:18:03
those weren't were those part of the

01:18:00 --> 01:18:04
simulation well the simulation was

01:18:02 --> 01:18:07
generally

01:18:04 --> 01:18:09
so the simulation was trained to be

01:18:06 --> 01:18:11
robust to many different things but not

01:18:08 --> 01:18:12
he kind of perturbations we've had in

01:18:10 --> 01:18:13
the video so

01:18:11 --> 01:18:17
it's never been trained with a glove

01:18:12 --> 01:18:19
it's never been trained with a

01:18:16 --> 01:18:20
stuffed giraffe so in theory these are

01:18:18 --> 01:18:22
novel perturbations correct

01:18:19 --> 01:18:24
it's not in theory in practice that

01:18:21 --> 01:18:27
hose are novel

01:18:23 --> 01:18:29
probation well that's okay

01:18:26 --> 01:18:31
that's a clean small scale but clean

01:18:28 --> 01:18:33
example of a transfer from the simulated

01:18:30 --> 01:18:35
world to the to the physical world

01:18:32 --> 01:18:36
yeah and i will also say that i expect

01:18:34 --> 01:18:37
he transfer capabilities of deep

01:18:35 --> 01:18:40
learning to increase

01:18:36 --> 01:18:41
in general and the better the transfer

01:18:39 --> 01:18:44
capabilities are

01:18:40 --> 01:18:47
the more useful simulation will become

01:18:43 --> 01:18:49
because then you could take you could

01:18:46 --> 01:18:51
experience something in simulation

01:18:48 --> 01:18:52
and then learn a moral of the story

01:18:50 --> 01:18:53
which you could then carry with you to

01:18:51 --> 01:18:55
the real world

01:18:52 --> 01:18:57
right as humans do all the time when

01:18:54 --> 01:19:00
they play computer games

01:18:56 --> 01:19:04
o let me ask sort of an

01:19:00 --> 01:19:05
embodied question staying on agi for a

01:19:03 --> 01:19:07
sec

01:19:04 --> 01:19:09
do you think aj asks us that we need to

01:19:06 --> 01:19:11
have a body we need to have some of

01:19:08 --> 01:19:14
those human elements of

01:19:10 --> 01:19:17
self-awareness consciousness sort of

01:19:13 --> 01:19:18
ear of mortalities or self-preservation

01:19:16 --> 01:19:21
in the physical space

01:19:18 --> 01:19:23
which comes with having a body i think

01:19:20 --> 01:19:25
having a body will be useful

01:19:22 --> 01:19:27
i don't think it's necessary but i think

01:19:24 --> 01:19:28
it's very useful to have a body for sure

01:19:26 --> 01:19:30
because you can learn

01:19:28 --> 01:19:33
a whole new you you can learn things

01:19:30 --> 01:19:35
which cannot be learned without a body

01:19:32 --> 01:19:36
but at the same time i think that you

01:19:34 --> 01:19:39
can if you don't have a body you could

01:19:36 --> 01:19:40
compensate for it and still succeed you

01:19:38 --> 01:19:41
think so

01:19:39 --> 01:19:43
yes well if there is evidence for this

01:19:40 --> 01:19:44
for example there are many people who

01:19:42 --> 01:19:47
were born deaf and

01:19:43 --> 01:19:48
blind and they were able to compensate

01:19:46 --> 01:19:50
for the lack of

01:19:47 --> 01:19:52
modalities i'm thinking about helen

01:19:49 --> 01:19:54
keller specifically

01:19:51 --> 01:19:55
so even if you're not able to physically

01:19:53 --> 01:19:58
interact with the world

01:19:54 --> 01:19:58
and if you're not able to i mean i

01:19:57 --> 01:20:02
actually was

01:19:57 --> 01:20:04
getting it maybe let me ask

01:20:01 --> 01:20:06
on the more particular i'm not sure if

01:20:03 --> 01:20:06
it's connected to having a body or not

01:20:05 --> 01:20:09
but

01:20:05 --> 01:20:10
he idea of consciousness and a more

01:20:08 --> 01:20:12
constrained version of that is

01:20:09 --> 01:20:14
elf-awareness

01:20:11 --> 01:20:16
do you think an egi system should have

01:20:13 --> 01:20:18
consciousness

01:20:15 --> 01:20:19
it's what we can't define kind of

01:20:17 --> 01:20:20
whatever the heck you think

01:20:18 --> 01:20:22
consciousness is

01:20:19 --> 01:20:25
yeah hard question to answer given how

01:20:21 --> 01:20:27
hard it is to find it

01:20:24 --> 01:20:29
do you think it's useful to think about

01:20:26 --> 01:20:32
i mean it's it's definitely interesting

01:20:28 --> 01:20:33
it's fascinating i think it's definitely

01:20:31 --> 01:20:34
possible that our assistants will be

01:20:32 --> 01:20:35
conscious

01:20:33 --> 01:20:37
do you think that's an emergent thing

01:20:34 --> 01:20:38
that just comes from do you think

01:20:36 --> 01:20:40
consciousness could emerge from the

01:20:38 --> 01:20:42
representation that's

01:20:39 --> 01:20:44
tored within your networks so like that

01:20:41 --> 01:20:44
it naturally just emerges when you

01:20:43 --> 01:20:46
become

01:20:43 --> 01:20:47
more and more you're able to represent

01:20:45 --> 01:20:49
more and more of the world

01:20:46 --> 01:20:52
well i'd say i'd make the following

01:20:48 --> 01:20:55
argument which is

01:20:51 --> 01:20:55
humans are conscious and if you believe

01:20:54 --> 01:20:58
that

01:20:54 --> 01:21:00
artificial neural nets are sufficiently

01:20:57 --> 01:21:02
similar to the brain

01:20:59 --> 01:21:03
then there should at least exist

01:21:01 --> 01:21:05
artificial neurons you should be

01:21:02 --> 01:21:06
conscious too

01:21:04 --> 01:21:09
you're leaning on that existence proof

01:21:05 --> 01:21:11
pretty heavily okay

01:21:08 --> 01:21:13
but it's it's just that that's that's

01:21:10 --> 01:21:16
the best answer i can give

01:21:12 --> 01:21:18
no i i know i know i know

01:21:15 --> 01:21:20
uh there's still an open question if

01:21:17 --> 01:21:22
there's not some magic in the brain

01:21:19 --> 01:21:24
that we're not i mean i don't mean a

01:21:21 --> 01:21:27
non-materialistic

01:21:23 --> 01:21:28
magic but that um that the brain might

01:21:26 --> 01:21:30
be a lot more complicated and

01:21:27 --> 01:21:32
interesting that we give it credit for

01:21:29 --> 01:21:34
if that's the case then it should show

01:21:31 --> 01:21:36
up and at some point

01:21:33 --> 01:21:37
we will find out that we

01:21:35 --> 01:21:38
can't continue to make progress but i

01:21:36 --> 01:21:40
think

01:21:37 --> 01:21:41
i think it's unlikely so we talk about

01:21:39 --> 01:21:43
consciousness but let me talk about

01:21:40 --> 01:21:45
another poorly defined concept of

01:21:42 --> 01:21:47
intelligence

01:21:44 --> 01:21:48
again we've talked about reasoning we've

01:21:46 --> 01:21:50
talked about memory

01:21:47 --> 01:21:52
what do you think is a good test of

01:21:49 --> 01:21:55
intelligence for you

01:21:51 --> 01:21:56
are you impressed by the test that alan

01:21:54 --> 01:21:58
turing formulated

01:21:55 --> 01:22:01
with the imitation game of that with

01:21:57 --> 01:22:04
natural language is there something

01:22:00 --> 01:22:05
in your mind that you will be deeply

01:22:03 --> 01:22:07
impressed by

01:22:04 --> 01:22:08
if a system was able to do i mean lots

01:22:06 --> 01:22:10
of things

01:22:07 --> 01:22:11
there's certain there's certain

01:22:09 --> 01:22:13
frontiers there is a certain frontier of

01:22:10 --> 01:22:16
capabilities today

01:22:12 --> 01:22:17
eah and there exists things outside of

01:22:15 --> 01:22:19
that frontier

01:22:16 --> 01:22:21
and i would be impressed by any such

01:22:18 --> 01:22:24
thing for example

01:22:20 --> 01:22:25
i would be impressed by a deep learning

01:22:23 --> 01:22:27
system

01:22:24 --> 01:22:29
which solves a very pedestrian you know

01:22:26 --> 01:22:31
pedestrian task like machine translation

01:22:28 --> 01:22:34
or computer vision task or

01:22:30 --> 01:22:36
something which never makes mistake

01:22:33 --> 01:22:38
a human wouldn't make under any

01:22:35 --> 01:22:39
circumstances

01:22:37 --> 01:22:41
i think that is something which have not

01:22:38 --> 01:22:42
yet been demonstrated and i would find

01:22:40 --> 01:22:44
it very

01:22:41 --> 01:22:45
impressive yeah so right now they make

01:22:43 --> 01:22:47
mistakes and differ

01:22:44 --> 01:22:48
they might be more accurate than human

01:22:46 --> 01:22:50
beings but they still they make a

01:22:47 --> 01:22:53
different set of mistakes

01:22:49 --> 01:22:55
o my my i would guess that a lot of the

01:22:52 --> 01:22:56
skepticism that some people have about

01:22:54 --> 01:22:58
deep learning

01:22:55 --> 01:23:00
is when they look at their mistakes and

01:22:57 --> 01:23:01
they say well those mistakes

01:22:59 --> 01:23:02
they make no sense like if you

01:23:00 --> 01:23:04
nderstood the concept you wouldn't make

01:23:02 --> 01:23:08
that mistake

01:23:03 --> 01:23:09
and i think that changing that would be

01:23:07 --> 01:23:11
would would that would that would

01:23:08 --> 01:23:13
inspire me that would be yes this is

01:23:10 --> 01:23:15
this this is this is progress

01:23:12 --> 01:23:17
yeah that's that's a really nice way to

01:23:14 --> 01:23:20
put it but i also just

01:23:16 --> 01:23:22
don't like that human instinct to

01:23:19 --> 01:23:24
criticize a model is not intelligent

01:23:21 --> 01:23:25
hat's the same instinct as we do when

01:23:23 --> 01:23:29
we criticize

01:23:24 --> 01:23:33
any group of creatures as the other

01:23:28 --> 01:23:36
because it's very possible that

01:23:32 --> 01:23:37
gpt2 is much smarter than human beings

01:23:35 --> 01:23:39
and many things

01:23:36 --> 01:23:41
that's definitely true it has a lot more

01:23:38 --> 01:23:43
breadth of knowledge yes

01:23:40 --> 01:23:44
breadth knowledge and even and even

01:23:42 --> 01:23:47
perhaps

01:23:43 --> 01:23:48
depth on certain topics it's kind of

01:23:46 --> 01:23:50
hard to judge what

01:23:47 --> 01:23:52
depth means but there's definitely a

01:23:49 --> 01:23:54
sense in which

01:23:51 --> 01:23:55
umans don't make mistakes that these

01:23:53 --> 01:23:57
models do

01:23:54 --> 01:23:58
yes the same is applied to autonomous

01:23:56 --> 01:24:00
vehicles

01:23:57 --> 01:24:01
the same is probably going to continue

01:23:59 --> 01:24:02
being applied to a lot of artificial

01:24:00 --> 01:24:05
intelligence systems

01:24:01 --> 01:24:06
we find this is the annoying this is the

01:24:04 --> 01:24:08
process of

01:24:05 --> 01:24:10
in the 21st century the process of

01:24:07 --> 01:24:13
analyzing the progress of ai

01:24:09 --> 01:24:14
s the search for one case where the

01:24:12 --> 01:24:17
system fails

01:24:13 --> 01:24:20
in a big way where humans would not

01:24:16 --> 01:24:21
and then many people writing articles

01:24:19 --> 01:24:23
about it

01:24:20 --> 01:24:25
and then broadly as a com as a the

01:24:22 --> 01:24:27
public generally gets convinced that the

01:24:24 --> 01:24:30
system is not intelligent

01:24:26 --> 01:24:31
and we like pacify ourselves by thinking

01:24:29 --> 01:24:34
it's not intelligent because of this one

01:24:30 --> 01:24:35
anecdotal case and this can seems to

01:24:33 --> 01:24:37
continue happening

01:24:34 --> 01:24:38
yeah i mean there is truth to that

01:24:36 --> 01:24:39
hough there is people also i'm sure

01:24:37 --> 01:24:41
that plenty of people are also extremely

01:24:38 --> 01:24:41
impressed by the system that exists

01:24:40 --> 01:24:43
today

01:24:40 --> 01:24:44
but i think this connects to the earlier

01:24:42 --> 01:24:46
point we discussed that

01:24:44 --> 01:24:48
it's just confusing to judge progress in

01:24:45 --> 01:24:50
ai

01:24:47 --> 01:24:51
yeah and you know you have a new robot

01:24:49 --> 01:24:54
demonstrating something

01:24:50 --> 01:24:55
how impressed should you be and i think

01:24:53 --> 01:24:57
that

01:24:54 --> 01:24:59
people will start to be impressed once

01:24:56 --> 01:25:01
ai starts to really move the needle on

01:24:58 --> 01:25:02
the gdp

01:25:00 --> 01:25:04
so you're one of the people that might

01:25:01 --> 01:25:08
be able to create an agi system here not

01:25:04 --> 01:25:10
you but you and open ai if

01:25:07 --> 01:25:11
you do create an ajax system and you

01:25:09 --> 01:25:15
get to spend sort of

01:25:10 --> 01:25:18
the evening with it him her

01:25:14 --> 01:25:20
what would you talk about do you think

01:25:17 --> 01:25:22
the very first time first time well the

01:25:19 --> 01:25:24
first time i would just

01:25:21 --> 01:25:26
ask all kinds of questions

01:25:23 --> 01:25:28
and try to make it to get it to make a

01:25:25 --> 01:25:30
mistake and i would be amazed that it

01:25:27 --> 01:25:34
doesn't make mistakes and just keep

01:25:29 --> 01:25:35
asking abroad okay

01:25:33 --> 01:25:39
what kind of questions do you think

01:25:34 --> 01:25:42
would they be factual or would they be

01:25:38 --> 01:25:43
personal emotional psychological what do

01:25:41 --> 01:25:46
you think

01:25:42 --> 01:25:46
all of that bob

01:25:46 --> 01:25:52
would you ask for advice definitely

01:25:49 --> 01:25:54
i mean why why would i limit myself

01:25:51 --> 01:25:57
talking to a system like this

01:25:53 --> 01:25:58
now again let me emphasize the fact that

01:25:56 --> 01:26:02
you truly are one of the people that

01:25:57 --> 01:26:05
might be in the room where this happens

01:26:01 --> 01:26:06
o let me ask a sort of a profound

01:26:04 --> 01:26:08
question

01:26:05 --> 01:26:10
about um i've just talked to a stalin

01:26:07 --> 01:26:12
historian

01:26:09 --> 01:26:14
i've been talking to a lot of people who

01:26:11 --> 01:26:17
are studying power

01:26:13 --> 01:26:18
abraham lincoln said nearly all men can

01:26:16 --> 01:26:20
stand adversity

01:26:17 --> 01:26:22
but if you want to test a man's

01:26:19 --> 01:26:25
character give him power

01:26:21 --> 01:26:26
i would say the power of the 21st

01:26:24 --> 01:26:29
century maybe

01:26:25 --> 01:26:31
the 22nd but hopefully the 21st would be

01:26:28 --> 01:26:32
the creation of an agi system and the

01:26:30 --> 01:26:35
people who

01:26:31 --> 01:26:38
have control direct possession and

01:26:34 --> 01:26:40
control of the agi system

01:26:37 --> 01:26:42
so what do you think after spending that

01:26:39 --> 01:26:45
evening

01:26:41 --> 01:26:47
having a discussion with the agi system

01:26:44 --> 01:26:49
what do you think you would do

01:26:46 --> 01:26:52
well the ideal world would like to

01:26:48 --> 01:26:56
imagine

01:26:51 --> 01:27:00
is one where humanity are like

01:26:55 --> 01:27:03
the board the board members of a company

01:26:59 --> 01:27:03
where the agi is the ceo

01:27:02 --> 01:27:09
so it would be

01:27:05 --> 01:27:10
i would like the picture which i would

01:27:08 --> 01:27:12
imagine is you have some kind of

01:27:09 --> 01:27:15
different

01:27:11 --> 01:27:17
ities different countries or cities

01:27:14 --> 01:27:19
and the people that live there vote

01:27:16 --> 01:27:20
for what the agi that represents them

01:27:18 --> 01:27:22
should do and then age other represents

01:27:20 --> 01:27:25
them goes and does it

01:27:21 --> 01:27:27
i think a picture like that

01:27:24 --> 01:27:29
i find very appealing and you could have

01:27:26 --> 01:27:31
multiple you would have an agi for a

01:27:28 --> 01:27:34
city for a country and there would be

01:27:30 --> 01:27:36
it would be trying to in effect

01:27:33 --> 01:27:38
ake the democratic process to the next

01:27:35 --> 01:27:39
level and the board can always fire the

01:27:37 --> 01:27:41
ceo

01:27:38 --> 01:27:43
essentially press the reset button and

01:27:40 --> 01:27:44
say re-randomize the parameters here

01:27:42 --> 01:27:47
well let me

01:27:43 --> 01:27:48
sort of that's actually okay that's a

01:27:46 --> 01:27:51
beautiful vision

01:27:47 --> 01:27:52
i think as long as it's possible to con

01:27:50 --> 01:27:54
to

01:27:51 --> 01:27:56
press the reset button do you think it

01:27:54 --> 01:27:57
will always be possible to press the

01:27:55 --> 01:28:00
reset button

01:27:56 --> 01:28:02
so i think that it's def it's definitely

01:27:59 --> 01:28:05
be possible to build

01:28:02 --> 01:28:06
so you're talking so the question that i

01:28:04 --> 01:28:11
really understand from you

01:28:05 --> 01:28:11
is will reveal humans or

01:28:11 --> 01:28:15
humans people have control over the ai

01:28:12 --> 01:28:17
systems that they built

01:28:14 --> 01:28:19
yes and my answer is it's definitely

01:28:16 --> 01:28:21
possible to build ai systems which

01:28:18 --> 01:28:24
will want to be controlled by their

01:28:20 --> 01:28:26
humans wow that's part of their

01:28:23 --> 01:28:30
so it's not that just they can't help

01:28:25 --> 01:28:33
but be controlled but that's that's um

01:28:29 --> 01:28:35
the they exist the one of the objectives

01:28:32 --> 01:28:40
of their existence is to be controlled

01:28:34 --> 01:28:40
in the same way that human parents

01:28:39 --> 01:28:45
generally want to help their children

01:28:42 --> 01:28:47
they want their children to succeed

01:28:44 --> 01:28:48
it's not a burden for them they are

01:28:46 --> 01:28:50
xcited to

01:28:47 --> 01:28:51
help the children and to feed them and

01:28:49 --> 01:28:55
to dress them and to

01:28:50 --> 01:28:57
take care of them and i believe

01:28:54 --> 01:28:58
with highest conviction that the same

01:28:56 --> 01:29:00
will be possible

01:28:58 --> 01:29:02
for an agi it will be possible to

01:28:59 --> 01:29:04
program an agi to design it in such a

01:29:01 --> 01:29:06
way that it will have a similar

01:29:03 --> 01:29:07
deep drive that it will be delighted to

01:29:06 --> 01:29:10
fulfill

01:29:06 --> 01:29:12
and the drive will be to help humans

01:29:09 --> 01:29:14
flourish

01:29:11 --> 01:29:16
but let me take a step back to that

01:29:13 --> 01:29:19
moment where you create the agi system i

01:29:15 --> 01:29:23
think this is a really crucial moment

01:29:18 --> 01:29:27
and between that moment and

01:29:22 --> 01:29:29
the the democratic board members with

01:29:26 --> 01:29:32
e agi at the head

01:29:28 --> 01:29:34
there has to be a relinquishing of power

01:29:31 --> 01:29:37
says george washington

01:29:34 --> 01:29:39
despite all the bad things he did one of

01:29:36 --> 01:29:40
the big things he did is he relinquished

01:29:38 --> 01:29:41
power

01:29:39 --> 01:29:43
he first of all didn't want to be

01:29:40 --> 01:29:45
president and

01:29:42 --> 01:29:46
even when he became president he gave he

01:29:44 --> 01:29:48
didn't keep just

01:29:45 --> 01:29:50
serving as most dictators do for

01:29:47 --> 01:29:54
indefinitely

01:29:49 --> 01:29:57
do you see yourself being able to

01:29:53 --> 01:29:59
relinquish control over an agi system

01:29:56 --> 01:30:00
given how much power you can have over

01:29:58 --> 01:30:02
the world

01:29:59 --> 01:30:03
at first financial just make a lot of

01:30:01 --> 01:30:05
money

01:30:02 --> 01:30:07
right and then control by having

01:30:04 --> 01:30:10
possession as a gi system

01:30:06 --> 01:30:10
i i'd find it trivial to do that i'd

01:30:09 --> 01:30:13
find it trivial to

01:30:10 --> 01:30:14
relinquish this this kind of i mean you

01:30:12 --> 01:30:16
know the

01:30:13 --> 01:30:18
kind of scenario you are describing

01:30:15 --> 01:30:21
sounds terrifying to me

01:30:17 --> 01:30:23
that's all i would absolutely not want

01:30:20 --> 01:30:26
o be in that position

01:30:22 --> 01:30:28
do you think you represent the majority

01:30:25 --> 01:30:30
or the minority

01:30:27 --> 01:30:32
of people in the ai community well i

01:30:29 --> 01:30:34
mean

01:30:31 --> 01:30:37
open question an important one are most

01:30:34 --> 01:30:40
people good is another way to ask it

01:30:36 --> 01:30:42
so i don't know if most people are good

01:30:39 --> 01:30:42
but

01:30:42 --> 01:30:47
i think that when it really counts

01:30:44 --> 01:30:50
people can be better than we think

01:30:46 --> 01:30:52
that's beautifully put yeah are there

01:30:49 --> 01:30:54
specific mechanisms you can think of

01:30:51 --> 01:30:55
aligning aig and values to human

01:30:53 --> 01:30:57
values

01:30:54 --> 01:30:59
is that do you think about these

01:30:56 --> 01:31:01
problems of continued alignment

01:30:58 --> 01:31:03
as we develop the eye systems yeah

01:31:00 --> 01:31:06
definitely

01:31:02 --> 01:31:07
in some sense the kind of question which

01:31:05 --> 01:31:09
you are asking

01:31:06 --> 01:31:11
is so if you have to translate that

01:31:08 --> 01:31:14
question to today's terms

01:31:10 --> 01:31:17
yes it would be a question about

01:31:13 --> 01:31:20
how to get an rl agent

01:31:16 --> 01:31:22
hat's optimizing a value function which

01:31:19 --> 01:31:23
itself is learned

01:31:21 --> 01:31:25
and if you look at humans humans are

01:31:22 --> 01:31:26
like that because the

01:31:24 --> 01:31:28
reward function the value function of

01:31:25 --> 01:31:33
humans is not external

01:31:27 --> 01:31:36
it is internal that's right and

01:31:32 --> 01:31:39
there are definite ideas of how to train

01:31:35 --> 01:31:39
a value function basically an objective

01:31:38 --> 01:31:41
you know

01:31:38 --> 01:31:43
and as objective as possible perception

01:31:40 --> 01:31:46
system

01:31:42 --> 01:31:50
that will be trained separately

01:31:45 --> 01:31:50
to recognize to internalize human

01:31:49 --> 01:31:53
judgments

01:31:49 --> 01:31:55
on different situations and then that

01:31:52 --> 01:31:57
component would then be integrated

01:31:54 --> 01:31:58
as the value as the base value function

01:31:56 --> 01:32:00
for some more capable

01:31:58 --> 01:32:02
rail system you could imagine a process

01:31:59 --> 01:32:04
like this i'm not saying this is

01:32:01 --> 01:32:06
the process i'm saying this is an

01:32:03 --> 01:32:08
example of the kind of thing you could

01:32:05 --> 01:32:08
o

01:32:07 --> 01:32:13
so on that topic of the objective

01:32:10 --> 01:32:14
functions of human existence

01:32:12 --> 01:32:16
what do you think is the objective

01:32:13 --> 01:32:18
function that

01:32:15 --> 01:32:21
is implicit in human existence what's

01:32:17 --> 01:32:21
the meaning of life

01:32:24 --> 01:32:28
oh

01:32:28 --> 01:32:33
i think the question is is wrong in some

01:32:31 --> 01:32:35
way i think that

01:32:32 --> 01:32:36
he question implies that the reason

01:32:34 --> 01:32:38
there is an objective answer which is an

01:32:35 --> 01:32:39
external answer you know your meaning of

01:32:37 --> 01:32:41
life is x

01:32:38 --> 01:32:43
right i think what's going on is that we

01:32:40 --> 01:32:45
xist and

01:32:42 --> 01:32:47
that's amazing and we should try to make

01:32:44 --> 01:32:50
the most of it and try to

01:32:46 --> 01:32:54
maximize our own value and enjoyment of

01:32:49 --> 01:32:56
a very short time while we do exist

01:32:53 --> 01:32:57
it's funny because action does require

01:32:55 --> 01:33:00
an objective function it's definitely

01:32:56 --> 01:33:01
theirs in some form but it's difficult

01:32:59 --> 01:33:03
o make it explicit

01:33:00 --> 01:33:04
and maybe impossible to make it explicit

01:33:02 --> 01:33:07
i guess is what you're getting at and

01:33:03 --> 01:33:10
that's an interesting

01:33:06 --> 01:33:11
fact of an rl environment well but i was

01:33:09 --> 01:33:12
making a slightly different point is

01:33:10 --> 01:33:16
that

01:33:11 --> 01:33:18
humans want things and their ones create

01:33:15 --> 01:33:20
the drives that cause them to you know

01:33:17 --> 01:33:22
our wants are our objective functions

01:33:19 --> 01:33:25
our individual objective functions we

01:33:22 --> 01:33:26
can later decide that we want to change

01:33:24 --> 01:33:28
that what we wanted before is no longer

01:33:25 --> 01:33:29
good and we want something else yeah but

01:33:27 --> 01:33:32
hey're so dynamic there's

01:33:28 --> 01:33:32
got to be some underlying sort

01:33:31 --> 01:33:34
of freud

01:33:32 --> 01:33:36
there's things there's like sexual stuff

01:33:33 --> 01:33:37
there's people who think it's the fear

01:33:35 --> 01:33:40
of

01:33:36 --> 01:33:41
ear of death and there's also the

01:33:39 --> 01:33:42
desire for knowledge and you know all

01:33:40 --> 01:33:45
these kinds of things

01:33:42 --> 01:33:46
procreation the sort of all the

01:33:44 --> 01:33:48
volutionary arguments

01:33:46 --> 01:33:51
it seems to be there might be some kind

01:33:47 --> 01:33:54
of fundamental objective function from

01:33:50 --> 01:33:56
which everything else uh emerges

01:33:54 --> 01:33:58
but it seems because that's very

01:33:55 --> 01:33:59
important i think i think that probably

01:33:57 --> 01:34:01
is an evolutionary objective function

01:33:58 --> 01:34:03
which is to survive and procreate and

01:34:00 --> 01:34:06
make sure you make your children succeed

01:34:02 --> 01:34:07
that would be my guess but it doesn't

01:34:05 --> 01:34:09
give an answer to the question what's

01:34:06 --> 01:34:12
the meaning of life

01:34:08 --> 01:34:14
i think you can see how humans are

01:34:11 --> 01:34:16
part of this big process this ancient

01:34:13 --> 01:34:19
process we are

01:34:15 --> 01:34:24
we exist on a small planet

01:34:18 --> 01:34:26
and that's it so given that we exist try

01:34:23 --> 01:34:28
to make the most of it and try to

01:34:25 --> 01:34:29
enjoy more and suffer less as much as we

01:34:27 --> 01:34:31
can

01:34:28 --> 01:34:33
let me ask two silly questions about

01:34:30 --> 01:34:37
life

01:34:32 --> 01:34:39
one do you have regrets moments

01:34:36 --> 01:34:40
that if you uh went back you would do

01:34:38 --> 01:34:42
differently and two

01:34:39 --> 01:34:45
are there moments that you're especially

01:34:41 --> 01:34:47
proud of that made you truly happy

01:34:44 --> 01:34:49
so i can answer that i can answer both

01:34:46 --> 01:34:51
questions of course

01:34:48 --> 01:34:53
there are there's a huge number of

01:34:50 --> 01:34:54
choices and decisions that i've made

01:34:52 --> 01:34:55
that

01:34:53 --> 01:34:57
with the benefit of hindsight i wouldn't

01:34:54 --> 01:34:58
have made them and i do experience some

01:34:56 --> 01:35:00
regret but

01:34:57 --> 01:35:02
you know i try to take solace in the

01:34:59 --> 01:35:03
knowledge that at the time i did the

01:35:01 --> 01:35:05
best i could

01:35:02 --> 01:35:06
and in terms of things that i'm proud of

01:35:04 --> 01:35:07
there are i'm very fortunate to have

01:35:05 --> 01:35:09
things i'm proud to have done things i'm

01:35:06 --> 01:35:11
proud of

01:35:08 --> 01:35:12
and they made me happy for himself for

01:35:10 --> 01:35:15
some time but i don't think that

01:35:11 --> 01:35:17
is the source of happiness so your

01:35:14 --> 01:35:19
academic accomplishments all the

01:35:16 --> 01:35:20
papers you're one of the most excited

01:35:18 --> 01:35:22
people in the world

01:35:19 --> 01:35:25
all the breakthroughs i mentioned in

01:35:21 --> 01:35:29
computer vision and language and so on

01:35:24 --> 01:35:30
is what is the source of happiness

01:35:28 --> 01:35:32
and pride for you i mean all those

01:35:29 --> 01:35:33
things are a source of pride for sure

01:35:31 --> 01:35:35
i'm very

01:35:32 --> 01:35:38
ungrateful for having done all those

01:35:34 --> 01:35:39
things and it was very fun to do them

01:35:37 --> 01:35:41
but happiness comes from but you know

01:35:38 --> 01:35:43
you can happiness well

01:35:40 --> 01:35:44
my current view is that happiness comes

01:35:42 --> 01:35:46
from our

01:35:44 --> 01:35:48
to allow to a very large degree from the

01:35:45 --> 01:35:50
way we look at things

01:35:47 --> 01:35:52
you know you can have a simple meal and

01:35:49 --> 01:35:53
be quite happy as a result or you can

01:35:51 --> 01:35:56
talk to someone and

01:35:52 --> 01:35:58
be happy as a result as well or

01:35:55 --> 01:35:59
conversely you can have a meal and be

01:35:57 --> 01:36:01
disappointed that the meal wasn't a

01:35:58 --> 01:36:03
better meal

01:36:00 --> 01:36:04
so i think a lot of happiness comes from

01:36:02 --> 01:36:06
that but i'm not sure i don't want to be

01:36:03 --> 01:36:07
too confident i

01:36:05 --> 01:36:10
being humble in the face of the

01:36:06 --> 01:36:13
uncertainty seems to be also a part

01:36:09 --> 01:36:14
of this whole happiness thing well i

01:36:12 --> 01:36:15
don't think there's a better way to end

01:36:13 --> 01:36:18
it than

01:36:14 --> 01:36:19
uh meaning of life and discussions of

01:36:17 --> 01:36:22
happiness so ilya

01:36:18 --> 01:36:24
thank you so much you've given me a few

01:36:21 --> 01:36:26
incredible ideas you've given the world

01:36:23 --> 01:36:27
many incredible ideas i really

01:36:25 --> 01:36:28
appreciate it and thanks for talking

01:36:26 --> 01:36:29
today

01:36:27 --> 01:36:31
eah thanks for stopping stopping by i

01:36:28 --> 01:36:32
really enjoyed it

01:36:30 --> 01:36:34
hanks for listening to this

01:36:31 --> 01:36:36
conversation with elias discoverer and

01:36:33 --> 01:36:38
thank you to our presenting sponsor

01:36:35 --> 01:36:40
cash app please consider supporting the

01:36:37 --> 01:36:43
podcast by downloading cash app

01:36:39 --> 01:36:44
and using code lex podcast if you enjoy

01:36:42 --> 01:36:47
this podcast

01:36:43 --> 01:36:48
subscribe on youtube review it with 5

01:36:46 --> 01:36:50
stars in apple podcast

01:36:47 --> 01:36:52
support on patreon or simply connect

01:36:49 --> 01:36:55
with me on twitter

01:36:51 --> 01:36:57
at lex friedman and now

01:36:54 --> 01:37:01
let me leave you with some words from

01:36:56 --> 01:37:02
alan turing on machine learning

01:37:00 --> 01:37:04
instead of trying to produce a program

01:37:01 --> 01:37:07
to simulate the adult mind

01:37:03 --> 01:37:09
why not rather try to produce one which

01:37:06 --> 01:37:11
simulates the child's

01:37:08 --> 01:37:13
if this were then subjected to an

01:37:10 --> 01:37:17
appropriate course of education

01:37:12 --> 01:37:18
e would obtain the adult brain

01:37:16 --> 01:37:22
thank you for listening and hope to see

01:37:18 --> 01:37:22
you next time

<!-- YOUTUBE_TRANSCRIPT_END -->
