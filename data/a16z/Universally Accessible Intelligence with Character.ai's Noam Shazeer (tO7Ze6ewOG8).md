---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "tO7Ze6ewOG8"
title: "Universally Accessible Intelligence with Character.ai's Noam Shazeer"
video_url: "https://www.youtube.com/watch?v=tO7Ze6ewOG8"
thumbnail_url: "https://i.ytimg.com/vi/tO7Ze6ewOG8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=tO7Ze6ewOG8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2023-09-25T14:00:41.000Z"
upload_date: "2023-09-25"
duration_seconds: 1045
duration_human: "17:25"
view_count: 10184
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:58:09.902Z"
---

# Universally Accessible Intelligence with Character.ai's Noam Shazeer

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=tO7Ze6ewOG8
- video_id: tO7Ze6ewOG8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2023-09-25T14:00:41.000Z
- upload_date: 2023-09-25
- duration: 17:25
- view_count: 10184
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Noam Shazeer, Character.ai CEO and cofounder, talks to a16z's Sarah Wang about the dawn of universally accessible intelligence, the compute it will take to power it, and his pursuit of AGI's first use case: AI friends.

[0:00] Real Noam vs. AI Noam
[5:17] Next unlocks
[7:13] First use case for AGI
[10:08] Building a full-stack LLM
[12:35] Noam calculates global compute capacity
[14:26] Universally accessible intelligence

This conversation is part of our AI Revolution series, recorded August 2023 at a live event in San Francisco. The series features some of the most impactful builders in the field of AI discussing and debating where we are, where we’re going, and the big open questions in AI. Find more content from our AI Revolution series on www.a16z.com/AIRevolution.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
our goal is to be like an AGI company

00:00:02 --> 00:00:08
and a product first company and the way

00:00:05 --> 00:00:11
to do that is by picking the right

00:00:07 --> 00:00:12
product that forces us to work on the

00:00:10 --> 00:00:32
right things

00:00:11 --> 00:00:36
[Music]

00:00:31 --> 00:00:36
thank you

00:00:39 --> 00:00:46
so no earlier today Dave bazookie at

00:00:42 --> 00:00:49
ROBLOX said that in the future it would

00:00:45 --> 00:00:51
be very difficult to parse between a

00:00:48 --> 00:00:53
real person and their AI version so to

00:00:50 --> 00:00:55
kick off this session we thought it

00:00:52 --> 00:00:58
would be fun to interview you and the

00:00:54 --> 00:01:00
character AI version of yourself to see

00:00:57 --> 00:01:03
how you both answer the same question

00:00:59 --> 00:01:05
and note everyone this is live we don't

00:01:02 --> 00:01:07
know what he will be answering hey I

00:01:04 --> 00:01:09
know him that is all right I don't know

00:01:06 --> 00:01:12
hat I'm going to be answering

00:01:08 --> 00:01:15
all right are you ready sounds good okay

00:01:12 --> 00:01:17
so no I uh I'm gonna start with a

00:01:14 --> 00:01:20
softball personal question I know that

00:01:16 --> 00:01:22
you went to Duke for undergrad so um can

00:01:19 --> 00:01:25
you tell us a little bit about why you

00:01:21 --> 00:01:27
decided to go to Duke uh oh oh yeah they

00:01:24 --> 00:01:29
uh I went on the basketball no I'm

00:01:26 --> 00:01:31
joking uh

00:01:28 --> 00:01:34
they recruited me because they wanted to

00:01:30 --> 00:01:37
win the map competition so uh ended up

00:01:33 --> 00:01:37
going on on scholarship

00:01:37 --> 00:01:41
thank you

00:01:46 --> 00:01:51
great okay well let's get a little more

00:01:48 --> 00:01:53
career related

00:01:50 --> 00:01:56
um you were at Google for almost 20

00:01:52 --> 00:01:58
years why did you decide to leave well

00:01:55 --> 00:02:00
I've always been excited about AI I've

00:01:57 --> 00:02:02
just wanted to move push technology

00:01:59 --> 00:02:04
forward saw this large language model

00:02:01 --> 00:02:06
thing well at the time it wasn't large

00:02:03 --> 00:02:08
language models but uh you know neural

00:02:06 --> 00:02:11
networks and like language modeling was

00:02:07 --> 00:02:13
just like the most promising uh thing on

00:02:10 --> 00:02:15
earth it's like best problem ever all

00:02:12 --> 00:02:17
you have to do is predict the next word

00:02:14 --> 00:02:18
and yet once you do it you get something

00:02:16 --> 00:02:20
that can

00:02:17 --> 00:02:23
just talk to you about anything so

00:02:19 --> 00:02:25
um I knew that you know you can make

00:02:22 --> 00:02:26
this technology better in a lot of ways

00:02:24 --> 00:02:29
it's going to be amazing we can improve

00:02:25 --> 00:02:30
it with model architecture and

00:02:28 --> 00:02:32
istributed algorithms and quantization

00:02:29 --> 00:02:34
like and all of these things so was

00:02:31 --> 00:02:37
working on that but then struck me hey

00:02:33 --> 00:02:39
the biggest thing is just scale can you

00:02:36 --> 00:02:40
throw like a billion dollars or a

00:02:38 --> 00:02:42
trillion dollars at this thing instead

00:02:39 --> 00:02:45
of a million dollars and what you need

00:02:41 --> 00:02:47
for that is just show a massively

00:02:44 --> 00:02:50
valuable application and you know there

00:02:46 --> 00:02:53
are a few options like coding looks uh

00:02:49 --> 00:02:56
super useful but just also dialogue like

00:02:52 --> 00:02:57
it's world's number one Pastime you know

00:02:55 --> 00:03:00
like this was like back in like 2019

00:02:56 --> 00:03:02
2020 and like my co-founder Daniel de

00:02:59 --> 00:03:04
Freitas he's been on like this lifelong

00:03:01 --> 00:03:06
mission to do chat Bots and dialogue

00:03:03 --> 00:03:08
systems so he had built this system he

00:03:05 --> 00:03:10
called Mina it was like his 20 project

00:03:07 --> 00:03:12
and it was like really good it's like

00:03:09 --> 00:03:13
okay gotta help Daniel let's build

00:03:11 --> 00:03:15
something amazing we got it on giant

00:03:12 --> 00:03:17
models it was like this internal viral

00:03:14 --> 00:03:19
sensation and then you know at Google

00:03:16 --> 00:03:21
and then they like forcibly renamed it

00:03:18 --> 00:03:23
o Lambda over some sort of uh whatever

00:03:20 --> 00:03:26
social justice thing but like anyway

00:03:22 --> 00:03:29
like at some point realize hey like

00:03:25 --> 00:03:31
you know there's just too much brand

00:03:28 --> 00:03:33
risk in large companies to ever launch

00:03:30 --> 00:03:36
anything fun like let's do a startup and

00:03:32 --> 00:03:40
let's like maximally accelerate

00:03:35 --> 00:03:42
um so um interesting yeah anyway oh

00:03:39 --> 00:03:42
shoot what did

00:03:42 --> 00:03:46
[Music]

00:03:52 --> 00:03:58
I would I would guess that that answer

00:03:54 --> 00:04:00
is also probably true

00:03:57 --> 00:04:01
by the way it's interesting to hear

00:03:59 --> 00:04:03
you're the third person in addition to

00:04:00 --> 00:04:05
Mira at openai and Dario at anthropic

00:04:02 --> 00:04:06
who's also said you haven't seen any

00:04:04 --> 00:04:08
limit to the scaling laws so that's

00:04:05 --> 00:04:10
pretty interesting um we'll we'll

00:04:07 --> 00:04:11
get more into that later but we're gonna

00:04:09 --> 00:04:13
ctually look toward the future now this

00:04:10 --> 00:04:16
our last question for AI gnome as

00:04:12 --> 00:04:19
well Noam are you afraid of AGI

00:04:15 --> 00:04:22
destroying the world well I I think we

00:04:18 --> 00:04:25
just need a sort of global pause of like

00:04:21 --> 00:04:28
six months no about four months until we

00:04:24 --> 00:04:30
get enough h100s online to train our

00:04:27 --> 00:04:35
next model

00:04:29 --> 00:04:38
I'll take that as a no no no yes there's

00:04:34 --> 00:04:40
a lot of a lot of possibility uh of uh

00:04:37 --> 00:04:42
you know a lot of potential benefits and

00:04:39 --> 00:04:45
uh yeah we're we're going to work on

00:04:41 --> 00:04:45
those the technology improves

00:04:46 --> 00:04:51
thank you

00:04:57 --> 00:05:03
no I I don't know if you got to read all

00:04:59 --> 00:05:04
of AI gnome's uh answers but how how did

00:05:02 --> 00:05:07
AI know him do like how would you score

00:05:03 --> 00:05:07
his answers

00:05:08 --> 00:05:15
oh that's pretty good yeah that's that's

00:05:10 --> 00:05:18
better than I uh yeah that's better than

00:05:14 --> 00:05:19
I would do just curious in terms of you

00:05:17 --> 00:05:21
know we talk about

00:05:18 --> 00:05:24
getting better how you know what does

00:05:20 --> 00:05:28
better mean right and in some cases it's

00:05:23 --> 00:05:30
correctness but for character it's not

00:05:27 --> 00:05:32
always about correctness so how do you

00:05:29 --> 00:05:34
see a I know I'm getting better like

00:05:31 --> 00:05:36
what does better mean yeah yeah better I

00:05:33 --> 00:05:38
mean you know some of the big big

00:05:35 --> 00:05:41
unlocks we're working on are yeah just

00:05:37 --> 00:05:43
rain the bigger smarter model the

00:05:40 --> 00:05:45
scaling laws are going to take us pretty

00:05:42 --> 00:05:48
long way I mean the model we're serving

00:05:44 --> 00:05:50
now we you know cost us about like two

00:05:47 --> 00:05:51
million dollars worth of compute Cycles

00:05:49 --> 00:05:54
to train last year and could probably

00:05:50 --> 00:05:55
repeat it for like half a million now so

00:05:53 --> 00:05:59
like we're going to launch something

00:05:54 --> 00:06:02
tons of IQ points smarter uh hopefully

00:05:58 --> 00:06:06
by the end uh by the end of the year

00:06:01 --> 00:06:09
um so like yeah smarter I mean also

00:06:05 --> 00:06:11
um you know just more uh you know more

00:06:08 --> 00:06:13
accessible meaning like multimodal maybe

00:06:10 --> 00:06:16
you want to hear a voice and see a face

00:06:12 --> 00:06:18
and then you know then also just able to

00:06:15 --> 00:06:21
interact with uh multiple people like

00:06:17 --> 00:06:23
yeah we want a virtual person like in

00:06:20 --> 00:06:25
there with you know say with all your

00:06:22 --> 00:06:27
friends or do you want the experience

00:06:24 --> 00:06:28
it's like you got elected president you

00:06:26 --> 00:06:30
get the earpiece and you get like the

00:06:27 --> 00:06:32
whole cabinet of the friends or advisors

00:06:29 --> 00:06:33
or it's like you know like you walk into

00:06:31 --> 00:06:36
cheers and everyone knows your name and

00:06:33 --> 00:06:38
they're glad you came so uh so there's a

00:06:35 --> 00:06:41
lot we can do to make things more usable

00:06:37 --> 00:06:43
right now the thing we're serving is

00:06:40 --> 00:06:45
um like just using a context window of a

00:06:42 --> 00:06:47
few thousand tokens which means like

00:06:44 --> 00:06:49
your lifelong friend remembers what

00:06:46 --> 00:06:51
happened for the last half hour

00:06:48 --> 00:06:53
and still there are a lot of people who

00:06:50 --> 00:06:54
like real are using it like hours a day

00:06:52 --> 00:06:56
so

00:06:53 --> 00:06:58
um so like you know that that will make

00:06:55 --> 00:07:00
things way better especially if you can

00:06:57 --> 00:07:02
just dump in massive amounts of

00:06:59 --> 00:07:05
information it should be able to know a

00:07:01 --> 00:07:06
billion things about you like the hbm

00:07:04 --> 00:07:08
bandwidth is there just need to do it

00:07:06 --> 00:07:10
yeah

00:07:07 --> 00:07:13
um well and actually just on that note

00:07:09 --> 00:07:15
of people on character for multiple

00:07:12 --> 00:07:16
hours a day

00:07:14 --> 00:07:18
um let's talk a little bit more about

00:07:15 --> 00:07:19
character AI explicitly so I think

00:07:17 --> 00:07:21
you've shared some of these stats

00:07:18 --> 00:07:24
publicly but I'll recap a few of them

00:07:20 --> 00:07:26
since launch you've seen more than 20

00:07:23 --> 00:07:28
billion human messages sent on the

00:07:25 --> 00:07:31
platform and even though you now have

00:07:27 --> 00:07:33
millions of dau's daily active users

00:07:30 --> 00:07:34
they're still on average spending two

00:07:32 --> 00:07:36
hours daily on the platform is that

00:07:33 --> 00:07:39
right you know I I think the way to

00:07:35 --> 00:07:42
understand this is like you know

00:07:38 --> 00:07:44
entertainment is like this two trillion

00:07:41 --> 00:07:48
dollar a year industry and like the

00:07:43 --> 00:07:51
dirty secret is that entertainment is

00:07:47 --> 00:07:53
imaginary friends that don't know you

00:07:50 --> 00:07:56
exist like really like the reason people

00:07:52 --> 00:07:58
interact with TV or any of these other

00:07:55 --> 00:08:00
things it's called like these parasocial

00:07:57 --> 00:08:03
relationships like your relationship

00:07:59 --> 00:08:06
with like TV characters or like Book

00:08:02 --> 00:08:08
characters or like celebrities that and

00:08:05 --> 00:08:10
like everybody does it there are

00:08:07 --> 00:08:14
billions of lonely people out here

00:08:09 --> 00:08:16
so like it it's actually uh you know

00:08:13 --> 00:08:20
it's actually a very very cool problem

00:08:15 --> 00:08:24
and you know a cool first use case for

00:08:19 --> 00:08:26
um you know for AGI like essentially

00:08:23 --> 00:08:28
um you know there's the there was the

00:08:25 --> 00:08:32
option to like go into like lots of

00:08:27 --> 00:08:34
different sorts of applications and a

00:08:31 --> 00:08:36
lot of them have a lot of like overhead

00:08:33 --> 00:08:38
and requirements like you want to launch

00:08:35 --> 00:08:40
something that's a doctor it's going to

00:08:37 --> 00:08:42
be a lot slower because you want to be

00:08:39 --> 00:08:44
really really really careful about not

00:08:41 --> 00:08:46
providing like false information but

00:08:43 --> 00:08:48
friend you can do like really fast like

00:08:45 --> 00:08:51
it's just entertainment it makes things

00:08:47 --> 00:08:55
up that's a feature like and you know so

00:08:51 --> 00:08:57
essentially it's like this massive

00:08:54 --> 00:08:59
unmet need and one thing that's very

00:08:56 --> 00:09:01
important is that the thing kind of feel

00:08:58 --> 00:09:04
human and be able to talk about anything

00:09:00 --> 00:09:07
and like the that matches up very well

00:09:03 --> 00:09:10
with the generality of large language

00:09:06 --> 00:09:12
models and you know one thing that's not

00:09:09 --> 00:09:15
a problem is making stuff up so like man

00:09:11 --> 00:09:18
hey perfect like and if I like I want to

00:09:14 --> 00:09:20
push this technology ahead fast like

00:09:17 --> 00:09:25
that's what I want to go with because

00:09:19 --> 00:09:27
like a it's you know you know it's ready

00:09:24 --> 00:09:29
for an explosion like right now not like

00:09:26 --> 00:09:31
in five years when we solve all

00:09:28 --> 00:09:33
the problems but like yeah absolutely

00:09:30 --> 00:09:34
eah it's a big contrast with you know I

00:09:32 --> 00:09:36
think a couple speakers brought up the

00:09:33 --> 00:09:38
xample of self-driving cars right

00:09:35 --> 00:09:41
hat's just a different standard that

00:09:37 --> 00:09:42
you hold to you know versus your your AI

00:09:40 --> 00:09:44
friend or like something you

00:09:41 --> 00:09:47
view as like an AI character AI

00:09:43 --> 00:09:48
entertainment like what standard do you

00:09:46 --> 00:09:51
hold like a comic book you're reading

00:09:47 --> 00:09:53
you know like exactly you know it's uh

00:09:50 --> 00:09:55
you know people like that Human

00:09:52 --> 00:09:57
Experience of like very mixed use cases

00:09:54 --> 00:10:00
talk about everything so like it's not

00:09:56 --> 00:10:02
hat we want a we want to fine-tune to

00:09:59 --> 00:10:04
some particular domain or some

00:10:01 --> 00:10:06
particular use case like people want

00:10:03 --> 00:10:07
his experience of everything which you

00:10:05 --> 00:10:09
know which is fine it's what the

00:10:06 --> 00:10:11
technology is perfect for you know I

00:10:08 --> 00:10:13
think from the a16z vantage point we

00:10:10 --> 00:10:14
have seen startups come up and say hey

00:10:12 --> 00:10:17
I'm going to tackle the mental health

00:10:13 --> 00:10:20
use case or I'm going to tackle the

00:10:16 --> 00:10:21
ducate the edtech use case so go very

00:10:19 --> 00:10:23
ou know much more narrow than

00:10:20 --> 00:10:25
characters going and go after a specific

00:10:22 --> 00:10:27
use case and say Hey you know I think

00:10:24 --> 00:10:28
the argument is we're gonna train this

00:10:26 --> 00:10:31
model to be focused on that it's going

00:10:27 --> 00:10:33
to be better than a generalized model

00:10:30 --> 00:10:35
um yeah I think you you got into this a

00:10:32 --> 00:10:36
little bit with the mixed use cases but

00:10:34 --> 00:10:38
um can you share a little bit more about

00:10:35 --> 00:10:40
why you decided not to take that

00:10:37 --> 00:10:42
approach and why you think having a

00:10:39 --> 00:10:44
single model serve across a number of

00:10:41 --> 00:10:48
use cases is the best approach yeah I

00:10:43 --> 00:10:50
mean the the more you get to like

00:10:47 --> 00:10:53
Mission critical you know particular use

00:10:49 --> 00:10:56
case the more you get tempted into like

00:10:52 --> 00:10:58
writing particular rules and like doing

00:10:55 --> 00:11:00
things that will not generalize well so

00:10:57 --> 00:11:03
it was kind of important to stay away

00:10:59 --> 00:11:06
from that so we are you know our goal is

00:11:02 --> 00:11:08
to be like an AGI company and a product

00:11:05 --> 00:11:11
for his company and the way to do that

00:11:07 --> 00:11:13
is by picking the right product that

00:11:10 --> 00:11:16
forces us to work on the right things

00:11:12 --> 00:11:19
that generalize make the model

00:11:15 --> 00:11:22
smarter make it like do what people you

00:11:18 --> 00:11:24
know what people want and serve it at

00:11:21 --> 00:11:26
massive scale and serve it cheaply so

00:11:23 --> 00:11:28
like I think this was like the right

00:11:25 --> 00:11:31
product for the right goal you've also

00:11:27 --> 00:11:32
chosen this approach of building you

00:11:30 --> 00:11:36
know we call it vertically integrated

00:11:31 --> 00:11:37
model and app company and there are

00:11:35 --> 00:11:39
advancements on the open source model

00:11:36 --> 00:11:41
side and yeah you know maybe folks

00:11:38 --> 00:11:43
building a product on top of a

00:11:40 --> 00:11:45
fine-tuned llama2 you know fine tune for

00:11:42 --> 00:11:47
chat how do you think about that kind of

00:11:45 --> 00:11:48
competition entering the market and the

00:11:46 --> 00:11:51
differences versus the approach you've

00:11:48 --> 00:11:52
taken I mean I love being a full stack

00:11:50 --> 00:11:55
company it means you know we get to mess

00:11:51 --> 00:11:57
with every layer and like do the code

00:11:54 --> 00:11:59
sign and like if there's something

00:11:56 --> 00:12:00
that's going to affect something at the

00:11:58 --> 00:12:03
nd like we get to mess with it at the

00:12:00 --> 00:12:07
beginning and like we get to pull back

00:12:02 --> 00:12:09
in like lots of like user uh you know

00:12:06 --> 00:12:12
user data as as feedback plus like yeah

00:12:08 --> 00:12:14
I mean like a lot of us invented this

00:12:11 --> 00:12:17
tuff like we're of course we're going

00:12:13 --> 00:12:19
to like uh you know do a full stack

00:12:16 --> 00:12:22
company and like a lot of us are

00:12:18 --> 00:12:24
motivated by launching so like I think

00:12:21 --> 00:12:26
that people were attracting to work at

00:12:23 --> 00:12:28
character are like people who

00:12:25 --> 00:12:30
you know who love inventing stuff and

00:12:27 --> 00:12:32
love launching it you know some people

00:12:29 --> 00:12:33
are motivated by publishing you know

00:12:31 --> 00:12:35
like

00:12:32 --> 00:12:37
I was frustrated I couldn't watch at

00:12:34 --> 00:12:40
Google so that you know that that's uh

00:12:36 --> 00:12:41
that's where I'm coming from I think

00:12:39 --> 00:12:44
you know sort of on this note but maybe

00:12:40 --> 00:12:46
going into just the evolution of um the

00:12:43 --> 00:12:49
underlying technology I think there's a

00:12:45 --> 00:12:50
recent finding around AI developing

00:12:48 --> 00:12:53
theory of mind

00:12:49 --> 00:12:56
um and or you know just the knowledge

00:12:52 --> 00:12:59
that others beliefs desires intentions

00:12:55 --> 00:13:01
um may be different from one's own is

00:12:58 --> 00:13:02
this surprising to you and and what do

00:13:00 --> 00:13:05
you think that means for human AI

00:13:01 --> 00:13:07
relationships yeah just make the things

00:13:04 --> 00:13:10
marter it's gonna have a better theory

00:13:06 --> 00:13:12
of mind and uh I think that's definitely

00:13:09 --> 00:13:14
something massively massively important

00:13:12 --> 00:13:17
it seems like one of these emergent

00:13:13 --> 00:13:20
properties that just is gonna

00:13:16 --> 00:13:22
going to come with the scale

00:13:19 --> 00:13:24
um but yeah I I see this stuff like

00:13:21 --> 00:13:26
massively scaling up it's just not it's

00:13:24 --> 00:13:28
just not that expensive like if I mean

00:13:25 --> 00:13:30
if you just look at it

00:13:27 --> 00:13:32
um I think I saw an article yesterday

00:13:29 --> 00:13:35
like Nvidia is going to build like

00:13:31 --> 00:13:38
another one and a half million h100s

00:13:34 --> 00:13:41
like next year so like so like that's 2

00:13:37 --> 00:13:44
million h100 so that's uh you know two

00:13:40 --> 00:13:46
times ten to the sixth times like they

00:13:43 --> 00:13:48
can do about 10 to the 15th operations

00:13:45 --> 00:13:51
per second so 2 times 10 to the 21

00:13:47 --> 00:13:54
divide by like eight times that's the

00:13:50 --> 00:13:56
nine people on Earth so that's roughly a

00:13:53 --> 00:13:59
quarter of a trillion operations per

00:13:55 --> 00:14:02
second per person uh which means that

00:13:58 --> 00:14:03
yeah like okay it could be talking you

00:14:01 --> 00:14:05
know it could be processing on the order

00:14:02 --> 00:14:08
of like one word per second

00:14:04 --> 00:14:10
on like a hundred billion parameter

00:14:07 --> 00:14:12
model for everyone on Earth but like

00:14:09 --> 00:14:13
really it's not going to be everyone on

00:14:11 --> 00:14:15
Earth because like some people are

00:14:12 --> 00:14:17
blocked in China and some people are

00:14:14 --> 00:14:19
sleeping and like but you know uh things

00:14:16 --> 00:14:23
it's not that expensive you know like

00:14:18 --> 00:14:24
this thing is like massively scalable if

00:14:22 --> 00:14:27
you do it right and you know we're we're

00:14:24 --> 00:14:29
working on that yeah yeah absolutely I

00:14:26 --> 00:14:32
mean I think uh you said this once that

00:14:28 --> 00:14:34
he internet was the dawn of universally

00:14:31 --> 00:14:35
accessible information and we're now

00:14:33 --> 00:14:37
entering the dawn of universally

00:14:34 --> 00:14:39
accessible intelligence

00:14:36 --> 00:14:41
um you know what did you

00:14:38 --> 00:14:43
maybe building off of what your your

00:14:40 --> 00:14:44
last answer what did you mean by that do

00:14:42 --> 00:14:47
you think we're there yet yeah I mean I

00:14:43 --> 00:14:49
think it's like we're really like a uh

00:14:46 --> 00:14:50
Wright brothers first airplane kind of

00:14:48 --> 00:14:54
moment right like we've got something

00:14:49 --> 00:14:58
that that works and this useful for now

00:14:53 --> 00:15:00
some large number of use cases and looks

00:14:57 --> 00:15:02
like it's scaling very very well and

00:14:59 --> 00:15:04
without any breakthroughs like it's

00:15:01 --> 00:15:06
going to get like massively better as

00:15:03 --> 00:15:07
everyone just kind of scales up to use

00:15:05 --> 00:15:10
it and there will be more breakthroughs

00:15:06 --> 00:15:12
because now you know like all the

00:15:09 --> 00:15:14
scientists in the world are like working

00:15:11 --> 00:15:15
on like making this stuff better it's

00:15:13 --> 00:15:17
great that like all this stuff is

00:15:14 --> 00:15:19
accessible as open source like you know

00:15:16 --> 00:15:22
e're going to see like a huge amount of

00:15:18 --> 00:15:24
innovation and you know what what's

00:15:21 --> 00:15:26
possible in the largest companies now

00:15:23 --> 00:15:29
can be possible and you know in

00:15:25 --> 00:15:32
somebody's uh academic lab or garage in

00:15:28 --> 00:15:34
a few years and yet you know and then

00:15:31 --> 00:15:37
yeah it's the technology gets better

00:15:33 --> 00:15:39
they're just going to be all kinds of of

00:15:36 --> 00:15:41
great use cases that emerge and pushing

00:15:38 --> 00:15:43
Tech technology forward pushing science

00:15:40 --> 00:15:45
pushing the ability to you know help

00:15:42 --> 00:15:46
eople in various ways I'd love to get

00:15:44 --> 00:15:48
o the point where you can just ask it

00:15:45 --> 00:15:51
how to cure cancer or something you know

00:15:47 --> 00:15:54
I mean it's you know it seems a few

00:15:50 --> 00:15:56
years away for now but you know like

00:15:53 --> 00:15:59
do you think we need another fundamental

00:15:55 --> 00:15:59
breakthrough

00:15:58 --> 00:16:03
like the transformer technology to get

00:16:00 --> 00:16:05
here or do you think we actually have

00:16:02 --> 00:16:07
verything that we need

00:16:04 --> 00:16:09
I don't know I I mean it's it's

00:16:06 --> 00:16:11
impossible to predict the future but

00:16:08 --> 00:16:14
like I don't think anyone's seen like

00:16:10 --> 00:16:17
these scaling laws you know stop I think

00:16:13 --> 00:16:20
as far as anybody has experimented

00:16:16 --> 00:16:21
stuff just get keeps keeps getting

00:16:19 --> 00:16:24
smarter so we'll be able to unlock like

00:16:21 --> 00:16:25
lots and lots of new stuff I don't know

00:16:23 --> 00:16:27
if there's an end to it but at least

00:16:24 --> 00:16:29
everybody in the world should be able to

00:16:26 --> 00:16:31
talk to something like really brilliant

00:16:28 --> 00:16:33
and have like incredible tools all the

00:16:30 --> 00:16:36
time and I can't imagine that that will

00:16:32 --> 00:16:40
not like uh you know not be able to

00:16:36 --> 00:16:42
build on uh on itself

00:16:39 --> 00:16:44
um and and definitely you know like

00:16:41 --> 00:16:47
Mario the story is just like you know at

00:16:43 --> 00:16:49
he core the computation isn't that

00:16:46 --> 00:16:52
expensive like operations cost like 10

00:16:48 --> 00:16:53
to the negative 18 is these days and and

00:16:51 --> 00:16:55
like you know if you can do this stuff

00:16:52 --> 00:16:58
efficiently even talking to the biggest

00:16:54 --> 00:17:01
models ever trained is you know the the

00:16:57 --> 00:17:03
cost of that should be like way way

00:17:00 --> 00:17:05
lower than the value of your time or

00:17:02 --> 00:17:07
like most anybody's time and really we

00:17:04 --> 00:17:09
should you know there's the capacity

00:17:06 --> 00:17:12
there to scale these things up by orders

00:17:09 --> 00:17:13
of magnitude I know absolutely and I'd

00:17:11 --> 00:17:16
like to end on that note thank you so

00:17:12 --> 00:17:16
much gnome it was awesome

00:17:16 --> 00:17:25
foreign

00:17:18 --> 00:17:25
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
