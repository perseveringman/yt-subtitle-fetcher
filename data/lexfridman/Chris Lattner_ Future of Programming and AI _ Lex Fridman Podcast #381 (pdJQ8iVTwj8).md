---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "pdJQ8iVTwj8"
title: "Chris Lattner: Future of Programming and AI | Lex Fridman Podcast #381"
video_url: "https://www.youtube.com/watch?v=pdJQ8iVTwj8"
thumbnail_url: "https://i.ytimg.com/vi/pdJQ8iVTwj8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=pdJQ8iVTwj8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2023-06-02T21:18:32.000Z"
upload_date: "2023-06-02"
duration_seconds: 12843
duration_human: "3:34:03"
view_count: 2020855
like_count: 13455
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T13:12:36.664Z"
---

# Chris Lattner: Future of Programming and AI | Lex Fridman Podcast #381

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=pdJQ8iVTwj8
- video_id: pdJQ8iVTwj8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2023-06-02T21:18:32.000Z
- upload_date: 2023-06-02
- duration: 3:34:03
- view_count: 2020855
- like_count: 13455
- has_subtitle: true
- language: en
- availability: public
- tags: agi, ai, ai podcast, artificial intelligence, artificial intelligence podcast, c++, chris lattner, hardware, learning, lex ai, lex fridman, lex jre, lex mit, lex podcast, machine, mit ai, mojo, programming, python, software
- categories: Science & Technology

## Description

Chris Lattner is a legendary software and hardware engineer, leading projects at Apple, Tesla, Google, SiFive, and Modular AI, including the development of Swift, LLVM, Clang, MLIR, CIRCT, TPUs, and Mojo. Please support this podcast by checking out our sponsors:
- iHerb: https://lexfridman.com/iherb and use code LEX to get 22% off your order
- Numerai: https://numer.ai/lex
- InsideTracker: https://insidetracker.com/lex to get 20% off

EPISODE LINKS:
Chris's Twitter: https://twitter.com/clattner_llvm
Chris's Website: http://nondot.org/sabre/
Mojo programming language: https://www.modular.com/mojo
Modular AI: https://modular.com/

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
2:20 - Mojo programming language
12:37 - Code indentation
21:04 - The power of autotuning
30:54 - Typed programming languages
47:38 - Immutability
59:56 - Distributed deployment
1:34:23 - Mojo vs CPython
1:50:12 - Guido van Rossum
1:57:13 - Mojo vs PyTorch vs TensorFlow
2:00:37 - Swift programming language
2:06:09 - Julia programming language
2:11:14 - Switching programming languages
2:20:40 - Mojo playground
2:25:30 - Jeremy Howard
2:36:16 - Function overloading
2:44:41 - Error vs Exception
2:52:21 - Mojo roadmap
3:05:23 - Building a company
3:17:09 - ChatGPT
3:23:32 - Danger of AI
3:27:27 - Future of programming
3:30:43 - Advice for young people

SOCIAL:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Reddit: https://reddit.com/r/lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
on one access you have more Hardware

00:00:01 --> 00:00:07
coming in on the other hand you have an

00:00:03 --> 00:00:08
explosion of innovation and Ai and so

00:00:06 --> 00:00:10
what happened with both tensorflow and

00:00:07 --> 00:00:12
pytorch is that the explosion of

00:00:09 --> 00:00:14
innovation in AI has led to it's not

00:00:11 --> 00:00:16
just about multiplication and

00:00:13 --> 00:00:18
convolution these things have now like 2

00:00:15 --> 00:00:19
000 different operators

00:00:17 --> 00:00:20
and on the other hand you have I don't

00:00:18 --> 00:00:23
know how many pieces of Hardware there

00:00:19 --> 00:00:25
it's a lot part of my thesis

00:00:22 --> 00:00:26
part of my belief of where Computing

00:00:24 --> 00:00:29
oes if you look out 10 years from now

00:00:25 --> 00:00:30
it's not going to get simpler

00:00:28 --> 00:00:32
physics isn't going back to where we

00:00:29 --> 00:00:35
came from it's only going to get weirder

00:00:31 --> 00:00:37
from here on out right and so to me the

00:00:34 --> 00:00:40
xciting part about what we're building

00:00:36 --> 00:00:43
is it's about building that Universal

00:00:39 --> 00:00:44
platform which the world can continue to

00:00:42 --> 00:00:47
get weird because again I don't think

00:00:43 --> 00:00:49
it's avoidable it's physics but we can

00:00:46 --> 00:00:50
help lift people's scale do things with

00:00:48 --> 00:00:51
it and they don't have to rewrite their

00:00:49 --> 00:00:55
code every time a new device comes out

00:00:50 --> 00:00:55
and I think that's pretty cool

00:00:54 --> 00:00:59
the following is a conversation with

00:00:56 --> 00:01:02
Chris Ladner his third time on this

00:00:58 --> 00:01:04
podcast as I've said many times before

00:01:01 --> 00:01:07
he's one of the most brilliant engineers

00:01:03 --> 00:01:09
in modern Computing having created llm

00:01:06 --> 00:01:11
compiler infrastructure project the clan

00:01:08 --> 00:01:14
compiler the Swift programming language

00:01:10 --> 00:01:16
a lot of key contributions to tensorflow

00:01:13 --> 00:01:18
and tpus as part of Google he served as

00:01:15 --> 00:01:22
vice president of autopilot software at

00:01:17 --> 00:01:25
Tesla was a software innovator and

00:01:21 --> 00:01:28
leader at Apple and now he co-created a

00:01:24 --> 00:01:29
new Full stack AI infrastructure for

00:01:27 --> 00:01:31
distributed training inference and

00:01:28 --> 00:01:35
eployment on all kinds of Hardware

00:01:30 --> 00:01:38
called modular and a new programming

00:01:34 --> 00:01:40
language called Mojo that is a superset

00:01:37 --> 00:01:43
of python giving you all the usability

00:01:39 --> 00:01:47
of python but with the performance of C

00:01:42 --> 00:01:50
plus plus in many cases Mojo code has

00:01:46 --> 00:01:53
demonstrated over 30

00:01:49 --> 00:01:55
00 X speed up over python if you love

00:01:52 --> 00:01:58
machine learning if you love python you

00:01:54 --> 00:02:00
should definitely give Mojo a try this

00:01:57 --> 00:02:03
programming language this new AI

00:01:59 --> 00:02:06
framework and infrastructure and this

00:02:02 --> 00:02:08
conversation with Chris is mind-blowing

00:02:05 --> 00:02:10
I love it

00:02:07 --> 00:02:13
gets pretty technical at times so I

00:02:09 --> 00:02:15
hope you hang on for the ride this is

00:02:12 --> 00:02:17
the Lex Friedman podcast to support it

00:02:14 --> 00:02:18
please check out our sponsors in the

00:02:16 --> 00:02:21
description and now it's your friends

00:02:17 --> 00:02:23
here's Chris lattner

00:02:20 --> 00:02:26
it's been I think two years since we

00:02:22 --> 00:02:28
last talked and then in that time you

00:02:25 --> 00:02:31
somehow went and co-created a new

00:02:27 --> 00:02:33
programming language called Mojo So it's

00:02:30 --> 00:02:35
optimized for AI it's a super set of

00:02:32 --> 00:02:39
python let's look at the big picture

00:02:34 --> 00:02:40
what is the vision for Mojo for Mojo

00:02:38 --> 00:02:43
well so I mean I think you have to zoom

00:02:39 --> 00:02:45
out so I've been working on a lot of

00:02:42 --> 00:02:47
related Technologies for many many years

00:02:44 --> 00:02:50
o I've worked on llvm and a lot of

00:02:46 --> 00:02:51
things and mobile and servers and things

00:02:49 --> 00:02:53
like this

00:02:50 --> 00:02:55
but the world's changing and what's

00:02:52 --> 00:02:56
happened with AI is we have new gpus and

00:02:54 --> 00:02:58
new

00:02:55 --> 00:02:59
machine learning accelerators and other

00:02:57 --> 00:03:03
Asics and things like that that make ai

00:02:58 --> 00:03:04
go real fast at Google I worked on tpus

00:03:02 --> 00:03:07
that's one of the biggest larger scale

00:03:03 --> 00:03:09
deployed systems that exist for AI and

00:03:06 --> 00:03:11
really what you see is if you look

00:03:08 --> 00:03:12
across all of the things that are

00:03:10 --> 00:03:14
happening in the industry there's this

00:03:11 --> 00:03:16
new compute platform coming and it's not

00:03:13 --> 00:03:19
just about

00:03:15 --> 00:03:22
CPUs or gpus or tpus or npus or ipus or

00:03:18 --> 00:03:24
whatever all the pus right it's about

00:03:21 --> 00:03:27
how do we program these things

00:03:23 --> 00:03:29
right and so for software folks like us

00:03:26 --> 00:03:30
right it doesn't do us any good if

00:03:28 --> 00:03:31
there's this amazing Hardware that we

00:03:30 --> 00:03:33
can't use

00:03:30 --> 00:03:35
and one of the things you find out

00:03:32 --> 00:03:37
really quick is that having the

00:03:34 --> 00:03:39
oretical capability of programming

00:03:36 --> 00:03:42
something and then having the world's

00:03:38 --> 00:03:43
power and the innovation of all the all

00:03:41 --> 00:03:45
the smart people in the world get

00:03:42 --> 00:03:47
Unleashed on something can be quite

00:03:44 --> 00:03:50
different and so really where Mojo came

00:03:46 --> 00:03:51
from was starting from a problem of we

00:03:49 --> 00:03:53
need to be able to take machine learning

00:03:50 --> 00:03:55
take the infrastructure underneath it

00:03:52 --> 00:03:57
and make it way more accessible way more

00:03:54 --> 00:03:59
usable way more understandable by normal

00:03:56 --> 00:04:02
people and researchers and other folks

00:03:58 --> 00:04:04
that are not themselves like experts in

00:04:01 --> 00:04:06
gpus and things like this and then

00:04:03 --> 00:04:07
through that Journey we realized hey we

00:04:05 --> 00:04:09
need Syntax for this we need to do a

00:04:06 --> 00:04:12
programming language so one one of the

00:04:08 --> 00:04:15
main features of the language I say

00:04:11 --> 00:04:18
so fully ingest is that it allows you to

00:04:14 --> 00:04:22
have the file extension to be uh an

00:04:18 --> 00:04:25
emoji or the fire Emoji which is

00:04:21 --> 00:04:27
one of the first

00:04:24 --> 00:04:28
emojis used as a file extension I've

00:04:26 --> 00:04:31
ver seen in my life and then you ask

00:04:27 --> 00:04:34
yourself the question why in the 21st

00:04:30 --> 00:04:36
century we're not using Unicode for file

00:04:33 --> 00:04:38
xtensions does that mean it's an epic

00:04:35 --> 00:04:40
decision I think clearly the most

00:04:37 --> 00:04:42
important decision you made the most but

00:04:39 --> 00:04:44
you could also just use mojo as the

00:04:41 --> 00:04:45
file extension well so okay so take a

00:04:43 --> 00:04:46
step back I mean come on Max do you

00:04:44 --> 00:04:48
think that the world's ready for this

00:04:45 --> 00:04:50
is a big moment in the world right

00:04:47 --> 00:04:52
his is we'll release this onto the

00:04:49 --> 00:04:54
world this is innovation

00:04:51 --> 00:04:58
I mean it really is kind of brilliant

00:04:53 --> 00:05:01
emojis is such a big part of our daily

00:04:57 --> 00:05:02
lives why is it not in programming well

00:05:00 --> 00:05:05
and and like you take a step back and

00:05:01 --> 00:05:07
look look at what file extensions are

00:05:04 --> 00:05:08
right they're basically metadata right

00:05:06 --> 00:05:10
and so why are we spending all the

00:05:07 --> 00:05:12
screen space on them and all the stuff

00:05:09 --> 00:05:14
also you know you have them stacked up

00:05:11 --> 00:05:15
next to text files and PDF files and

00:05:13 --> 00:05:17
whatever else like if you're gonna do

00:05:15 --> 00:05:19
something cool you want to stand out

00:05:16 --> 00:05:21
right and emojis are colorful they're

00:05:18 --> 00:05:23
visual they're they're beautiful right

00:05:20 --> 00:05:25
what's been the response so far from uh

00:05:22 --> 00:05:27
is is there support on like Windows on

00:05:24 --> 00:05:29
the operating system in displaying like

00:05:26 --> 00:05:31
file explorer yeah the one problem I've

00:05:28 --> 00:05:34
seen is the git doesn't escape it right

00:05:30 --> 00:05:35
and so it thinks that the fire Emoji is

00:05:33 --> 00:05:36
unprintable and so it like prints out

00:05:34 --> 00:05:39
weird hex things if you use the command

00:05:36 --> 00:05:41
line git tool but everything else as far

00:05:38 --> 00:05:44
as I'm aware works fine and I I have

00:05:40 --> 00:05:46
faith that git can be improved so GitHub

00:05:43 --> 00:05:49
is fine GitHub is fine yep GitHub is

00:05:45 --> 00:05:51
fine Visual Studio code Windows like all

00:05:48 --> 00:05:53
this stuff totally ready because people

00:05:50 --> 00:05:55
have internationalization yeah in their

00:05:52 --> 00:05:56
normal part of their past

00:05:54 --> 00:05:57
so this is just like taking the next

00:05:55 --> 00:06:00
step right

00:05:56 --> 00:06:03
somewhere between oh wow that makes

00:05:59 --> 00:06:05
ense cool I like new things too oh my

00:06:02 --> 00:06:06
God you're killing my baby like what are

00:06:04 --> 00:06:08
you talking about this can never be like

00:06:05 --> 00:06:10
I can never handle this how am I going

00:06:07 --> 00:06:12
to type this like all these things and

00:06:09 --> 00:06:14
so this is something where I think that

00:06:11 --> 00:06:16
he world will get there we don't have

00:06:13 --> 00:06:18
to bet the whole Farm on this I think we

00:06:15 --> 00:06:21
can provide both paths but I think it'll

00:06:17 --> 00:06:23
be great uh when can we have emojis as

00:06:20 --> 00:06:26
part of the code I wonder uh yeah so I

00:06:22 --> 00:06:27
mean lots of languages provide that so

00:06:25 --> 00:06:28
um I think that we have partial support

00:06:26 --> 00:06:31
for that it's probably not fully done

00:06:27 --> 00:06:32
yet but but yeah you can you can do that

00:06:30 --> 00:06:36
for example in Swift you can do that for

00:06:31 --> 00:06:39
sure so an example we give give it Apple

00:06:35 --> 00:06:41
was the the dog cow yeah so that's a

00:06:38 --> 00:06:42
classical Mac Heritage thing and so he's

00:06:40 --> 00:06:44
the dog and the cow emoji together and

00:06:41 --> 00:06:46
that could be your variable name but of

00:06:43 --> 00:06:48
course the internet went and made pile

00:06:45 --> 00:06:49
of poop for everything yeah so you know

00:06:47 --> 00:06:51
if you want to name your function pile

00:06:48 --> 00:06:52
of poop then you can totally go to town

00:06:50 --> 00:06:54
and see how that gets through code

00:06:51 --> 00:06:58
review

00:06:53 --> 00:07:01
okay so uh let me just ask bunch of

00:06:57 --> 00:07:03
random questions uh so is Mojo primarily

00:07:00 --> 00:07:05
designed for AIS or is it a general

00:07:02 --> 00:07:08
purpose programming yeah good question

00:07:04 --> 00:07:10
so it's AI first and so AI is driving a

00:07:07 --> 00:07:12
lot of the requirements and so

00:07:09 --> 00:07:14
um modular is building and designing and

00:07:12 --> 00:07:16
riving Mojo forward it's not because

00:07:13 --> 00:07:18
it's an interesting project

00:07:15 --> 00:07:20
heoretically to build it's because we

00:07:17 --> 00:07:21
need it

00:07:19 --> 00:07:24
hat's what modular we're really

00:07:20 --> 00:07:26
tackling the AI infrastructure landscape

00:07:23 --> 00:07:27
and the big problems in Ai and the

00:07:25 --> 00:07:30
reasons it is so difficult to use in

00:07:26 --> 00:07:33
scale and adopt and deploy and like all

00:07:29 --> 00:07:34
these big problems in Ai and so we're

00:07:32 --> 00:07:36
coming out from that perspective now

00:07:33 --> 00:07:39
hen you do that when you start tackling

00:07:35 --> 00:07:41
these problems you realize that the

00:07:38 --> 00:07:44
solution to these problems isn't

00:07:40 --> 00:07:45
actually an AI specific solution

00:07:43 --> 00:07:46
and so while we're doing this we're

00:07:44 --> 00:07:48
building Mojo to be a fully General

00:07:45 --> 00:07:49
programming language and that means that

00:07:47 --> 00:07:52
you can

00:07:48 --> 00:07:54
obviously tackle gpus and CPUs and like

00:07:51 --> 00:07:55
these AI things but it's also a really

00:07:53 --> 00:07:58
great way to build

00:07:54 --> 00:07:59
numpy and other things like that or you

00:07:57 --> 00:08:01
know just if you look at what many

00:07:58 --> 00:08:04
python libraries are today often they're

00:08:00 --> 00:08:05
a layer of python for the API and they

00:08:03 --> 00:08:08
end up being C and C plus plus code

00:08:04 --> 00:08:09
underneath them that's very true in AI

00:08:07 --> 00:08:11
That's True in lots of other domains as

00:08:08 --> 00:08:12
well and so anytime you see this pattern

00:08:10 --> 00:08:15
that's an opportunity for Mojo to help

00:08:11 --> 00:08:18
simplify the world and help people have

00:08:14 --> 00:08:20
one thing to optimize through

00:08:17 --> 00:08:22
simplification

00:08:19 --> 00:08:24
by having one thing so you mentioned

00:08:21 --> 00:08:27
modular Mojo is the programming language

00:08:23 --> 00:08:28
modular is the whole software stack so

00:08:26 --> 00:08:30
just over a year ago we started this

00:08:27 --> 00:08:32
company called modular yeah okay what

00:08:29 --> 00:08:34
modular is about is it's about taking Ai

00:08:31 --> 00:08:37
and up leveling it into the Next

00:08:33 --> 00:08:39
Generation right and so if you take a

00:08:36 --> 00:08:42
step back what's gone on in the last

00:08:38 --> 00:08:44
five six seven eight years is that we've

00:08:41 --> 00:08:46
had things like tensorflow and pytorch

00:08:43 --> 00:08:48
and these other systems come in you've

00:08:45 --> 00:08:50
used them you know this and what's

00:08:47 --> 00:08:52
happened is these things have grown like

00:08:49 --> 00:08:54
crazy they get tons of users it's in

00:08:51 --> 00:08:56
production deployment scenarios it's

00:08:53 --> 00:08:58
being used to power so many systems I

00:08:55 --> 00:09:00
mean AIS all around us now now it used

00:08:57 --> 00:09:03
to be controversial years ago but now

00:08:59 --> 00:09:04
it's a thing but the challenge with

00:09:02 --> 00:09:05
ese systems is that they haven't

00:09:03 --> 00:09:09
always been

00:09:04 --> 00:09:11
um thought out with current demands in

00:09:08 --> 00:09:14
mind and so you think about it when

00:09:10 --> 00:09:16
where were llms eight years ago well

00:09:13 --> 00:09:18
they didn't exist right AI has changed

00:09:15 --> 00:09:19
so much and a lot of what people are

00:09:17 --> 00:09:21
doing today are very different than when

00:09:18 --> 00:09:23
these systems were built and meanwhile

00:09:20 --> 00:09:25
the hardware side of this has gone into

00:09:22 --> 00:09:26
a huge mess there's tons of new chips

00:09:24 --> 00:09:28
and accelerators and every every big

00:09:25 --> 00:09:30
company's announcing a new chip every

00:09:27 --> 00:09:34
day it feels like and so between that

00:09:29 --> 00:09:35
you have like this moving system on one

00:09:33 --> 00:09:37
side a moving system on the other side

00:09:34 --> 00:09:39
and it just turns into this gigantic

00:09:36 --> 00:09:41
mess which makes it very difficult for

00:09:38 --> 00:09:43
people to actually use AI particularly

00:09:40 --> 00:09:44
in production deployment scenarios

00:09:42 --> 00:09:46
that's what modular is doing is we're

00:09:43 --> 00:09:48
helping build out that software stack to

00:09:45 --> 00:09:49
help solve some of those problems so

00:09:47 --> 00:09:51
then people can be more productive and

00:09:48 --> 00:09:54
get more AI Research into production

00:09:50 --> 00:09:55
ow what Mojo does is it's a really

00:09:53 --> 00:09:58
really important piece of that

00:09:54 --> 00:09:59
and so that is you know part of that

00:09:57 --> 00:10:01
engine and part of the technology that

00:09:58 --> 00:10:04
allows us to solve these problems so

00:10:00 --> 00:10:06
Mojo is a programming language that

00:10:03 --> 00:10:08
allows you to do a higher level

00:10:05 --> 00:10:11
programming the low level programming

00:10:07 --> 00:10:13
like do all kinds of programming

00:10:10 --> 00:10:15
in that spectrum that gets you closer

00:10:12 --> 00:10:17
and closer to the hardware so take step

00:10:14 --> 00:10:19
back so let's what do you love about

00:10:16 --> 00:10:21
python oh boy

00:10:18 --> 00:10:24
where do I begin

00:10:20 --> 00:10:26
um what is love what do I love about

00:10:23 --> 00:10:27
python you're a guy who knows love I

00:10:25 --> 00:10:28
know this yes

00:10:26 --> 00:10:30
um

00:10:27 --> 00:10:31
how intuitive it is

00:10:29 --> 00:10:33
thank you

00:10:30 --> 00:10:35
how it feels like I'm writing natural

00:10:32 --> 00:10:37
anguage English

00:10:34 --> 00:10:40
uh

00:10:36 --> 00:10:41
ow when I can not just write but read

00:10:39 --> 00:10:44
other people's code somehow I can

00:10:40 --> 00:10:47
understand it faster it's more

00:10:43 --> 00:10:49
and condensed than other languages like

00:10:46 --> 00:10:52
ones I'm really familiar with like C

00:10:48 --> 00:10:56
plus plus and C uh there's a bunch of

00:10:51 --> 00:10:57
sexy little features yeah uh we'll

00:10:55 --> 00:11:01
probably talk about some of them but

00:10:56 --> 00:11:03
list comprehensions and stuff like this

00:11:00 --> 00:11:05
and don't forget the entire ecosystem of

00:11:02 --> 00:11:06
all the Packers oh yeah there's probably

00:11:04 --> 00:11:08
huge there's always something if you

00:11:05 --> 00:11:11
want to do anything there's always a

00:11:07 --> 00:11:13
package yeah so it's not just

00:11:10 --> 00:11:15
he ecosystem of the packages and the

00:11:12 --> 00:11:16
cosystem of the humans that do it that

00:11:14 --> 00:11:19
's a really

00:11:15 --> 00:11:20
that's an interesting dynamic because I

00:11:18 --> 00:11:23
think something

00:11:19 --> 00:11:25
about the the usability and the

00:11:22 --> 00:11:28
cosystem makes the thing viral it grows

00:11:24 --> 00:11:29
and then it's a virtuous cycle I think

00:11:27 --> 00:11:31
well there's many things that went into

00:11:28 --> 00:11:33
that like so I think that ml was very

00:11:30 --> 00:11:35
good for Python and so I think that

00:11:32 --> 00:11:37
ensorflow and pytorch in these systems

00:11:34 --> 00:11:40
embracing python really took and helped

00:11:36 --> 00:11:42
python grow but I think that the major

00:11:39 --> 00:11:45
thing underlying it is that Python's

00:11:41 --> 00:11:46
like the universal connector right it

00:11:44 --> 00:11:47
really helps bring together lots of

00:11:45 --> 00:11:49
different systems so you can compose

00:11:46 --> 00:11:50
them and build out larger systems

00:11:48 --> 00:11:53
without having to understand how it

00:11:49 --> 00:11:54
works but then what is the problem with

00:11:52 --> 00:11:55
python

00:11:53 --> 00:11:58
well I guess you could say several

00:11:54 --> 00:11:59
things but probably that it's slow

00:11:57 --> 00:12:02
I think that's usually what people

00:11:58 --> 00:12:03
complain about right and so slow I mean

00:12:01 --> 00:12:05
other people complain about tabs in

00:12:02 --> 00:12:07
spaces versus curly braces or whatever

00:12:04 --> 00:12:10
but I mean those people are just wrong

00:12:06 --> 00:12:11
because it is actually just better to

00:12:09 --> 00:12:15
use indentation

00:12:10 --> 00:12:17
wow strong words so actually I'm a small

00:12:14 --> 00:12:18
change let's actually take that let's

00:12:16 --> 00:12:20
take all kinds of tangents oh come on

00:12:17 --> 00:12:23
Lex you can push me on I could take nine

00:12:19 --> 00:12:26
and decide listen I've recently left

00:12:22 --> 00:12:28
emacs for vs code the kind of hate mail

00:12:25 --> 00:12:30
I had to receive because on the way to

00:12:27 --> 00:12:33
doing that I also said I've considered

00:12:29 --> 00:12:35
Vim yep and uh chose not to and went

00:12:32 --> 00:12:39
with vs code and especially on deep

00:12:34 --> 00:12:40
religions right anyway uh tabs is an

00:12:38 --> 00:12:43
interesting design decision and so

00:12:39 --> 00:12:46
you've really written a new programming

00:12:42 --> 00:12:48
language here yes it is a a super set of

00:12:45 --> 00:12:49
python but you can make a bunch of

00:12:47 --> 00:12:51
different interesting decisions here

00:12:48 --> 00:12:53
totally yeah and you chose actually to

00:12:50 --> 00:12:56
stick with python is a

00:12:52 --> 00:12:59
uh in terms of some of the syntax well

00:12:55 --> 00:13:01
so let me explain why right so

00:12:58 --> 00:13:04
I mean you can explain this in many

00:13:00 --> 00:13:06
rational ways I think that the

00:13:03 --> 00:13:08
indentation is beautiful but that's not

00:13:05 --> 00:13:09
a rational explanation right so but I

00:13:07 --> 00:13:12
can defend it rationally right so first

00:13:08 --> 00:13:14
of all python one

00:13:11 --> 00:13:15
has millions of programmers yeah it is

00:13:13 --> 00:13:18
huge it's everywhere it owns machine

00:13:14 --> 00:13:20
learning right so factually it is the

00:13:17 --> 00:13:23
thing right second of all if you look at

00:13:19 --> 00:13:27
it C code C plus plus code Java whatever

00:13:22 --> 00:13:28
Swift curly brace languages also run

00:13:26 --> 00:13:31
through formatting tools and get

00:13:27 --> 00:13:33
indented and so if they're not indented

00:13:30 --> 00:13:36
correctly first of all we'll twist your

00:13:32 --> 00:13:38
brain around it can lead to bugs there's

00:13:35 --> 00:13:40
notorious bugs that have happened across

00:13:37 --> 00:13:42
time where the indentation was wrong or

00:13:39 --> 00:13:44
misleading and it wasn't formatted right

00:13:41 --> 00:13:46
and so it turned into an issue right and

00:13:43 --> 00:13:48
so what ends up happening in modern

00:13:45 --> 00:13:50
large-scale code bases is people run

00:13:47 --> 00:13:51
automatic formatters

00:13:49 --> 00:13:54
o now what you end up with is

00:13:50 --> 00:13:57
indentation and curly braces

00:13:53 --> 00:14:00
well if you're going to have

00:13:56 --> 00:14:01
you know the notion of grouping why not

00:13:59 --> 00:14:03
have one thing right and get rid of all

00:14:00 --> 00:14:04
the Clutter and have a more beautiful

00:14:02 --> 00:14:05
thing right also you look at many of

00:14:03 --> 00:14:08
these languages it's like okay well we

00:14:04 --> 00:14:09
can have curly braces or you can omit

00:14:07 --> 00:14:10
hem if there's one statement or you

00:14:08 --> 00:14:12
just like enter this entire world of

00:14:09 --> 00:14:14
complicated design space that

00:14:11 --> 00:14:17
objectively you don't need if you have

00:14:13 --> 00:14:18
python style indentation so yeah I would

00:14:16 --> 00:14:21
love to actually see statistics on

00:14:17 --> 00:14:22
errors made because of indentation like

00:14:20 --> 00:14:25
how many errors are made in python

00:14:21 --> 00:14:27
versus in C plus plus that have to do

00:14:24 --> 00:14:28
with basic formatting all that kind of

00:14:26 --> 00:14:30
stuff I would love to see I think it's

00:14:27 --> 00:14:33
probably pretty minor because once

00:14:29 --> 00:14:34
you get uh like you use vs code I do too

00:14:32 --> 00:14:36
so if you get vs code set up it does the

00:14:33 --> 00:14:38
indentation for you generally right and

00:14:35 --> 00:14:40
so you don't you know it's actually

00:14:37 --> 00:14:42
really nice to not have to fight it and

00:14:39 --> 00:14:44
then what you can see is the editors

00:14:41 --> 00:14:45
telling you how your code will work by

00:14:43 --> 00:14:48
indenting it which I think is pretty

00:14:44 --> 00:14:52
cool I honestly don't think

00:14:47 --> 00:14:53
I've ever I don't remember having an

00:14:51 --> 00:14:55
error in Python because I indented stuff

00:14:52 --> 00:14:57
wrong so I mean I think that there's

00:14:54 --> 00:14:59
again this is a religious thing and so I

00:14:56 --> 00:15:01
can joke about it and I love I love to

00:14:58 --> 00:15:03
kind of

00:15:00 --> 00:15:04
you know I realized that this is such a

00:15:02 --> 00:15:06
polarizing thing and everyone wants to

00:15:03 --> 00:15:09
argue about and so I like poking at the

00:15:05 --> 00:15:10
bear a little bit right but but frankly

00:15:08 --> 00:15:13
right come back to the first point

00:15:09 --> 00:15:15
python one like it's huge it's an AI um

00:15:12 --> 00:15:16
it's the right thing for us like we see

00:15:14 --> 00:15:18
mojos being an incredible part of the

00:15:15 --> 00:15:20
Python ecosystem we're not looking to

00:15:17 --> 00:15:23
break python or change it or quote

00:15:19 --> 00:15:25
unquote fix it we love python for what

00:15:22 --> 00:15:27
it is our view is that python is just

00:15:24 --> 00:15:28
not done yet

00:15:26 --> 00:15:30
and so if you look at you know you

00:15:27 --> 00:15:31
mentioned python being slow well there's

00:15:29 --> 00:15:32
a couple of different things go into

00:15:30 --> 00:15:34
that which we can talk about if you want

00:15:31 --> 00:15:36
but one of them is it just doesn't have

00:15:33 --> 00:15:39
those features that you would use to do

00:15:35 --> 00:15:41
c like programming and so if you say

00:15:38 --> 00:15:43
okay well I'm forced out of python into

00:15:40 --> 00:15:45
C for certain use cases

00:15:42 --> 00:15:47
well then what we're doing is we're

00:15:44 --> 00:15:48
saying okay well why why is that can we

00:15:46 --> 00:15:51
just add those features that are missing

00:15:47 --> 00:15:52
from python back up to Mojo and then you

00:15:50 --> 00:15:54
can have everything that's great about

00:15:51 --> 00:15:56
python all the things you're talking

00:15:53 --> 00:15:57
about that you love plus not be forced

00:15:55 --> 00:16:00
out of it when you do something a little

00:15:57 --> 00:16:03
bit more computationally intense or

00:15:59 --> 00:16:05
weird or Hardware or whatever it is that

00:16:02 --> 00:16:07
you're doing well a million questions I

00:16:04 --> 00:16:09
want to ask what high level again is it

00:16:06 --> 00:16:11
compiled or is it an interpretive

00:16:08 --> 00:16:14
language so python is just in time

00:16:10 --> 00:16:17
compilation what's what's Mojo

00:16:13 --> 00:16:19
so Mojo a complicated answer does all

00:16:16 --> 00:16:22
the things so it's interpreted it's Chip

00:16:18 --> 00:16:24
compiled and it's statically compiled

00:16:21 --> 00:16:26
um and so this is for a variety of

00:16:23 --> 00:16:27
reasons so

00:16:25 --> 00:16:30
ne of the things that makes python

00:16:26 --> 00:16:32
beautiful is that it's very Dynamic and

00:16:29 --> 00:16:34
because it's Dynamic one of the things

00:16:31 --> 00:16:36
they added is that it has this powerful

00:16:33 --> 00:16:38
meta programming feature and so if you

00:16:35 --> 00:16:41
look at something like pytorch or

00:16:37 --> 00:16:44
tensorflow or or I mean even a simple

00:16:40 --> 00:16:46
use case like you define a class

00:16:43 --> 00:16:48
that has the plus method right you can

00:16:45 --> 00:16:50
overload the dunder methods like Dunder

00:16:47 --> 00:16:52
add for example and then the plus method

00:16:49 --> 00:16:54
works on your class and so it has very

00:16:51 --> 00:16:57
nice and very expressive

00:16:53 --> 00:16:59
Dynamic meta programming features

00:16:56 --> 00:17:00
in Mojo we want all those features come

00:16:58 --> 00:17:02
in like we don't want to break python we

00:17:00 --> 00:17:05
want all the work but the problem is you

00:17:01 --> 00:17:09
can't run those super Dynamic features

00:17:04 --> 00:17:11
on an embedded processor or on a GPU

00:17:08 --> 00:17:12
right or if you could you probably don't

00:17:10 --> 00:17:15
want to just because of the performance

00:17:11 --> 00:17:17
and so we entered this question of

00:17:14 --> 00:17:21
saying okay how do you get the power of

00:17:16 --> 00:17:22
this Dynamic meta programming into a

00:17:20 --> 00:17:24
language that has to be super efficient

00:17:21 --> 00:17:26
in specific cases and so what we did was

00:17:24 --> 00:17:28
we said okay we'll take that interpreter

00:17:25 --> 00:17:30
python has an interpreter in it right

00:17:27 --> 00:17:33
ake that interpreter and allow to run

00:17:29 --> 00:17:35
it compile time and so now what you get

00:17:32 --> 00:17:37
is you get compile time meta programming

00:17:34 --> 00:17:38
and so this is super interesting and

00:17:36 --> 00:17:40
super powerful because

00:17:37 --> 00:17:43
one of the big advantages you get is you

00:17:39 --> 00:17:45
get python style expressive apis you get

00:17:42 --> 00:17:47
he ability to have overloaded operators

00:17:45 --> 00:17:49
and if you look at what happens inside

00:17:46 --> 00:17:50
of like pytorch for example with

00:17:48 --> 00:17:52
automatic differentiation and eager mode

00:17:49 --> 00:17:54
like all these things they're using

00:17:51 --> 00:17:56
these really Dynamic and Powerful

00:17:53 --> 00:17:58
features at runtime but we can take

00:17:55 --> 00:18:00
those features and lift them so they run

00:17:57 --> 00:18:03
a compile time so you're because C plus

00:17:59 --> 00:18:04
does amount of programming with with

00:18:02 --> 00:18:07
templates

00:18:03 --> 00:18:10
but it's really messy it's super messy

00:18:06 --> 00:18:11
it's it's always it was accidentally I

00:18:09 --> 00:18:13
mean different people have different

00:18:10 --> 00:18:15
interpretations my interpretation is

00:18:12 --> 00:18:17
that it was made accidentally powerful

00:18:14 --> 00:18:19
it was not designed to be terrain

00:18:16 --> 00:18:20
complete for example but that was

00:18:18 --> 00:18:22
discovered kind of along the way

00:18:19 --> 00:18:24
accidentally

00:18:21 --> 00:18:25
um and so there have been a number of

00:18:23 --> 00:18:28
languages in the space and so they

00:18:24 --> 00:18:29
usually have templates or code

00:18:27 --> 00:18:31
instantiation code copying features of

00:18:28 --> 00:18:33
various sorts

00:18:30 --> 00:18:36
um some more modern languages or some

00:18:32 --> 00:18:39
more newer languages let's say like you

00:18:35 --> 00:18:40
know they're fairly unknown like Zig for

00:18:38 --> 00:18:43
example

00:18:39 --> 00:18:45
um says okay well let's take all of

00:18:42 --> 00:18:47
those types so you can run it all those

00:18:44 --> 00:18:49
things you can do at runtime and allow

00:18:46 --> 00:18:51
them to happen at compile time and so

00:18:48 --> 00:18:53
ne of the problems with C plus plus I

00:18:50 --> 00:18:56
mean which is one of one of the problems

00:18:52 --> 00:18:57
with C plus plus there we go is wrong

00:18:55 --> 00:18:59
words

00:18:56 --> 00:19:01
oh that's okay I mean everybody hates me

00:18:58 --> 00:19:03
for a variety of reasons anyways I'm

00:19:00 --> 00:19:05
sure right I've written that's the way

00:19:02 --> 00:19:07
they show love I have written enough C

00:19:04 --> 00:19:09
plus plus code to earn a little bit of

00:19:06 --> 00:19:11
grumpiness with C plus plus but

00:19:08 --> 00:19:12
um but one of the problems with it is

00:19:10 --> 00:19:15
that the meta programming system

00:19:11 --> 00:19:17
plates is just a completely different

00:19:14 --> 00:19:20
Universe from the normal runtime

00:19:16 --> 00:19:21
programming world and so if you do meta

00:19:19 --> 00:19:22
programming and programming it's just

00:19:20 --> 00:19:24
like a different Universe different

00:19:21 --> 00:19:27
syntax different concepts different

00:19:24 --> 00:19:29
stuff going on and so again one of our

00:19:26 --> 00:19:31
goals with mojos to make things really

00:19:28 --> 00:19:33
easy to use easy to learn and so there's

00:19:30 --> 00:19:35
a natural stepping stone

00:19:32 --> 00:19:37
and so as you do this you say okay well

00:19:34 --> 00:19:39
I have to do programming at runtime

00:19:36 --> 00:19:42
after you do programming at compile time

00:19:39 --> 00:19:43
why are these different things how hard

00:19:41 --> 00:19:45
is that to pull it up because that

00:19:42 --> 00:19:47
sounds to me as a fan of meta

00:19:44 --> 00:19:50
programming in c plus even

00:19:46 --> 00:19:51
how how hard is it to pull that off that

00:19:49 --> 00:19:53
sounds really really exciting because

00:19:50 --> 00:19:55
you can do the same style programming at

00:19:52 --> 00:19:58
compile time in a runtime that's really

00:19:54 --> 00:19:59
exciting yep and so I mean in

00:19:57 --> 00:20:01
terms of the compiler implementation

00:19:58 --> 00:20:03
details it's hard

00:20:00 --> 00:20:06
I won't be shy about that it's super

00:20:02 --> 00:20:07
hard it requires I mean what Mojo has

00:20:05 --> 00:20:09
underneath the covers is a completely

00:20:06 --> 00:20:11
new approach to the design of the

00:20:08 --> 00:20:13
compiler itself and so this Builds on

00:20:10 --> 00:20:15
these Technologies like mlir that you

00:20:12 --> 00:20:18
mentioned but it also includes other

00:20:14 --> 00:20:20
like caching and other interpreters and

00:20:17 --> 00:20:21
jit compilers and other stuff like so

00:20:19 --> 00:20:24
you have like an interpreter inside

00:20:20 --> 00:20:26
within the compiler yes

00:20:23 --> 00:20:30
and so it really takes the standard

00:20:25 --> 00:20:32
model of programming languages and kind

00:20:29 --> 00:20:34
of twisted and unifies it with the

00:20:31 --> 00:20:36
runtime model right which I think is

00:20:33 --> 00:20:38
really cool and to me the value of that

00:20:35 --> 00:20:39
is that again many of these languages

00:20:37 --> 00:20:41
have meta programming features like they

00:20:38 --> 00:20:45
grow macros or something right lisp

00:20:40 --> 00:20:47
right yes I know your roots right

00:20:44 --> 00:20:49
um you know and this is a powerful thing

00:20:46 --> 00:20:50
right and so you know if you go back to

00:20:48 --> 00:20:52
list one of the most powerful things

00:20:49 --> 00:20:54
about about it is that it said that the

00:20:51 --> 00:20:56
meta programming the programming are the

00:20:53 --> 00:20:58
same right and so that made it way

00:20:55 --> 00:20:59
simpler way more consistent way easier

00:20:57 --> 00:21:01
to understand reason about and it made

00:20:58 --> 00:21:02
it more composable so if you build a

00:21:00 --> 00:21:04
library you can use it both at runtime

00:21:01 --> 00:21:06
and compile time

00:21:03 --> 00:21:07
which is pretty cool yeah and then for

00:21:05 --> 00:21:08
machine learning I think meta

00:21:06 --> 00:21:11
programming

00:21:07 --> 00:21:14
I think we could generally say is

00:21:10 --> 00:21:17
extremely useful and so you get features

00:21:13 --> 00:21:19
I mean I'll jump around but there's the

00:21:16 --> 00:21:22
feature of Auto tuning and adaptive

00:21:18 --> 00:21:23
compilation just blows my mind yeah well

00:21:21 --> 00:21:25
so okay so let's come back to that all

00:21:22 --> 00:21:26
right so so what what is what is what is

00:21:24 --> 00:21:27
machine learning like or what is a

00:21:25 --> 00:21:30
machine learning model like you take a

00:21:26 --> 00:21:31
pie torch model off the internet right

00:21:29 --> 00:21:33
um it's really interesting to me because

00:21:30 --> 00:21:35
what a pipe what pi torch and what

00:21:32 --> 00:21:37
ensorflow and all these Frameworks are

00:21:34 --> 00:21:39
kind of pushing compute into as they're

00:21:36 --> 00:21:42
pushing into like this abstract

00:21:38 --> 00:21:43
specification of a compute problem which

00:21:41 --> 00:21:45
then gets mapped in a whole bunch of

00:21:42 --> 00:21:46
different ways right so this is why it

00:21:44 --> 00:21:48
became a meta programming problem is

00:21:45 --> 00:21:50
that you want to be able to say cool I

00:21:47 --> 00:21:54
have I have this neural net now run with

00:21:49 --> 00:21:56
batch size a thousand right do do do a

00:21:53 --> 00:21:58
mapping across batch or okay I want to

00:21:55 --> 00:22:01
take this problem now running across a

00:21:57 --> 00:22:04
thousand CPUs or gpus right and so like

00:22:00 --> 00:22:06
this this problem of like just describe

00:22:03 --> 00:22:08
the compute and then map it and do

00:22:05 --> 00:22:10
things and transform it or like actually

00:22:07 --> 00:22:11
it's very profound and that's one of the

00:22:09 --> 00:22:13
things that makes machine Learning

00:22:10 --> 00:22:16
Systems really special uh maybe can you

00:22:12 --> 00:22:18
describe Auto tuning and how do you pull

00:22:15 --> 00:22:20
off I mean I guess adaptive compilation

00:22:17 --> 00:22:21
is what we're talking about as meta

00:22:19 --> 00:22:23
programming yeah how do you pull off

00:22:20 --> 00:22:24
auto-tune I mean is that is that as

00:22:22 --> 00:22:27
profound as I think it is it seems like

00:22:24 --> 00:22:30
a really like uh you know we'll

00:22:26 --> 00:22:33
mentioned list comprehensions to me from

00:22:29 --> 00:22:36
a quick glass of Mojo uh which by the

00:22:32 --> 00:22:38
way I have to absolutely like dive in uh

00:22:35 --> 00:22:41
as I realized how amazing this is I

00:22:37 --> 00:22:42
absolutely must have been uh it that

00:22:40 --> 00:22:44
looks like just an incredible feature

00:22:41 --> 00:22:47
for machine learning people yeah well so

00:22:43 --> 00:22:49
what is autotune so take a step back

00:22:46 --> 00:22:51
Auto tuning is a feature in Mojo it's

00:22:48 --> 00:22:52
not so very very little of what we're

00:22:50 --> 00:22:54
doing is actually research like many of

00:22:51 --> 00:22:56
these ideas have existed in other

00:22:53 --> 00:22:57
systems and other places and so what

00:22:55 --> 00:23:00
we're doing is we're pulling together

00:22:56 --> 00:23:02
good ideas remixing them and making them

00:22:59 --> 00:23:04
into hopefully a beautiful system right

00:23:01 --> 00:23:07
and so Auto tuning the observation is

00:23:03 --> 00:23:10
that it turns out hardware systems

00:23:06 --> 00:23:12
algorithms are really complicated turns

00:23:09 --> 00:23:14
out maybe you don't actually want to

00:23:11 --> 00:23:16
know how the hardware works

00:23:13 --> 00:23:18
right A lot of people don't right and so

00:23:15 --> 00:23:20
there are lots of really smart Hardware

00:23:17 --> 00:23:23
people I know a lot of them uh where

00:23:19 --> 00:23:24
they know everything about okay the the

00:23:22 --> 00:23:26
cache size is this and the number of

00:23:23 --> 00:23:27
registers is that and if you use this

00:23:25 --> 00:23:29
what length of vector is going to be

00:23:26 --> 00:23:30
super efficient because it Maps directly

00:23:28 --> 00:23:32
onto what it can do and like all this

00:23:29 --> 00:23:34
kind of stuff or the GPU has SMS and it

00:23:31 --> 00:23:36
has a warp size of whatever right all

00:23:33 --> 00:23:38
the stuff that goes into these things or

00:23:35 --> 00:23:41
the dial size of a TPU is 128 like these

00:23:37 --> 00:23:44
factoids right

00:23:40 --> 00:23:45
my belief is that most normal people and

00:23:43 --> 00:23:47
I love Hardware people also I'm not

00:23:44 --> 00:23:48
rying to offend literally everybody in

00:23:46 --> 00:23:50
the internet

00:23:47 --> 00:23:52
um but uh most programmers actually

00:23:49 --> 00:23:54
don't want to know this stuff right and

00:23:51 --> 00:23:56
so if you come at it from perspective of

00:23:53 --> 00:23:58
how do we allow people to build both

00:23:55 --> 00:23:59
more abstracted but also more portable

00:23:57 --> 00:24:01
code

00:23:58 --> 00:24:02
because you know it could be that the

00:24:00 --> 00:24:04
vector length changes or the cash size

00:24:01 --> 00:24:06
changes it could be that the tile size

00:24:03 --> 00:24:08
of your Matrix changes or the number you

00:24:05 --> 00:24:11
know an a100 versus an h100 versus a

00:24:07 --> 00:24:12
Volta versus whatever GPU have different

00:24:10 --> 00:24:14
characteristics right a lot of the

00:24:11 --> 00:24:17
algorithms that you run are actually the

00:24:13 --> 00:24:18
same but the parameters these magic

00:24:16 --> 00:24:21
numbers you have to fill in end up being

00:24:17 --> 00:24:23
really fiddly numbers that an expert has

00:24:20 --> 00:24:24
to go figure out and so what Auto tuning

00:24:22 --> 00:24:26
does it says okay well

00:24:23 --> 00:24:27
guess what there's a lot of compute out

00:24:25 --> 00:24:29
here

00:24:26 --> 00:24:31
right so instead of having humans go

00:24:28 --> 00:24:32
randomly try all the things or do a grid

00:24:30 --> 00:24:35
search or go search some complicated

00:24:31 --> 00:24:36
multi-dimensional space

00:24:34 --> 00:24:38
how about we have computers do that

00:24:35 --> 00:24:40
right and so autotuning does is you can

00:24:37 --> 00:24:43
say hey here's my algorithm

00:24:39 --> 00:24:45
if it's a a matrix operation or

00:24:42 --> 00:24:46
something like that you can say okay I'm

00:24:44 --> 00:24:48
going to carve it up into blocks I'm

00:24:45 --> 00:24:51
going to do those blocks in parallel and

00:24:47 --> 00:24:52
I want this this with 128 things that

00:24:50 --> 00:24:54
I'm running on I want to cut it this way

00:24:51 --> 00:24:55
or that way or whatever and you can say

00:24:53 --> 00:24:58
hey go see which one's actually

00:24:54 --> 00:25:00
empirically better on the system

00:24:57 --> 00:25:02
and then the result of that you cash for

00:24:59 --> 00:25:06
that system yep you save it and so come

00:25:01 --> 00:25:08
back to twisting your compiler brain

00:25:05 --> 00:25:10
right so not only does the compiler have

00:25:07 --> 00:25:11
an interpreter that's used to do meta

00:25:09 --> 00:25:14
programming that compiler that

00:25:10 --> 00:25:15
interpreter that meta programming now

00:25:13 --> 00:25:18
has to actually take your code and go

00:25:14 --> 00:25:20
run it on a Target machine

00:25:17 --> 00:25:21
see which one it likes the best and then

00:25:19 --> 00:25:23
Stitch it in and then keep going right

00:25:20 --> 00:25:26
so part of the compilation is machine

00:25:22 --> 00:25:27
specific yeah well so I mean this is an

00:25:25 --> 00:25:28
optional feature right so you don't have

00:25:26 --> 00:25:31
to use it for everything but yeah if you

00:25:27 --> 00:25:32
're so one one of one of the

00:25:30 --> 00:25:35
things that we're in the quest of is

00:25:31 --> 00:25:37
Ultimate performance yes right ultimate

00:25:34 --> 00:25:38
performance is important for a couple of

00:25:36 --> 00:25:40
reasons right so if you're an Enterprise

00:25:37 --> 00:25:41
you're looking to save cost and compute

00:25:39 --> 00:25:44
and things like this ultimate

00:25:40 --> 00:25:45
performance translates to you know fewer

00:25:43 --> 00:25:47
servers

00:25:44 --> 00:25:49
if you care about the environment hey

00:25:46 --> 00:25:50
better performance leads to more

00:25:48 --> 00:25:52
fficiency

00:25:49 --> 00:25:54
I mean you could joke and say like you

00:25:51 --> 00:25:56
know Python's bad for the environment

00:25:53 --> 00:25:58
right and so if you move to Mojo it's

00:25:55 --> 00:26:00
like at least 10x better or just out of

00:25:57 --> 00:26:02
the box and then keep going right

00:25:59 --> 00:26:03
um uh but but performance is also

00:26:01 --> 00:26:06
interesting because it leads to better

00:26:02 --> 00:26:07
products and so in the space of machine

00:26:05 --> 00:26:09
learning right if you reduce the latency

00:26:06 --> 00:26:11
of a model

00:26:08 --> 00:26:13
so that it runs faster so every time you

00:26:10 --> 00:26:14
query the server running the model it

00:26:12 --> 00:26:16
akes less time well then the product

00:26:13 --> 00:26:18
eam can go and make the model bigger

00:26:15 --> 00:26:20
well that's actually makes it so you

00:26:17 --> 00:26:22
have a better experience as a customer

00:26:19 --> 00:26:24
and so a lot of people care about that

00:26:21 --> 00:26:27
so for auto-tune for like towel size you

00:26:23 --> 00:26:29
mentioned 128 for tpus you would specify

00:26:26 --> 00:26:32
like a bunch of options to try yeah just

00:26:28 --> 00:26:34
in the code it's a simple statement and

00:26:31 --> 00:26:36
then you can just set and forget and

00:26:33 --> 00:26:38
know depending wherever it compiles

00:26:35 --> 00:26:40
it'll actually be the fastest and yeah

00:26:37 --> 00:26:41
exactly the beauty of this is that it

00:26:39 --> 00:26:43
helps you in a whole bunch of different

00:26:40 --> 00:26:45
ways right so if you're building so

00:26:42 --> 00:26:46
ften what will happen is that you know

00:26:44 --> 00:26:48
you've written a bunch of software

00:26:45 --> 00:26:49
yourself right you you wake up one day

00:26:47 --> 00:26:51
ou say I have an idea I'm going to go

00:26:48 --> 00:26:53
put up some code I get to work

00:26:50 --> 00:26:55
I forget about it

00:26:52 --> 00:26:56
and move on with life I come back six

00:26:54 --> 00:26:58
months or a year or two years or three

00:26:55 --> 00:27:00
years later you dust it off and you go

00:26:57 --> 00:27:02
use it again in a new environment and

00:26:59 --> 00:27:04
maybe your GPU is different maybe you're

00:27:01 --> 00:27:07
running on a server instead of a laptop

00:27:03 --> 00:27:08
maybe whatever right and so the problem

00:27:06 --> 00:27:10
now is you say okay well I mean again

00:27:07 --> 00:27:12
ot everybody cares about performance

00:27:09 --> 00:27:13
but if you do you say okay well I want

00:27:11 --> 00:27:15
o take advantage of all these new

00:27:12 --> 00:27:16
features I don't want to break the old

00:27:14 --> 00:27:19
thing though

00:27:15 --> 00:27:21
right and so the typical way of handling

00:27:18 --> 00:27:22
this kind of stuff before is you know if

00:27:20 --> 00:27:25
you're talking about sequence templates

00:27:21 --> 00:27:27
are you talking about C with macros you

00:27:24 --> 00:27:29
end up with if defs you get like all

00:27:26 --> 00:27:30
these weird things get layered in make

00:27:28 --> 00:27:32
the code super complicated and then how

00:27:29 --> 00:27:35
do you test it right it becomes this

00:27:31 --> 00:27:37
crazy complexity multi-dimensional

00:27:34 --> 00:27:38
space that you have to worry about and

00:27:36 --> 00:27:39
you know that just doesn't scale very

00:27:37 --> 00:27:41
well

00:27:38 --> 00:27:43
actually let me just jump around before

00:27:40 --> 00:27:46
it goes to specific features like the

00:27:42 --> 00:27:49
increase in performance here that we're

00:27:45 --> 00:27:53
talking about can be just insane uh you

00:27:48 --> 00:27:57
write that Mojo can provide a 35

00:27:52 --> 00:27:59
thousand X speed up over python uh how

00:27:56 --> 00:28:03
does it do that yeah so it can even do

00:27:58 --> 00:28:05
more but uh we'll get to that so uh so

00:28:03 --> 00:28:08
first of all when we say that we're

00:28:04 --> 00:28:09
talking about what's called C python

00:28:07 --> 00:28:11
it's the default python that everybody

00:28:08 --> 00:28:13
uses when you type python3 that's like

00:28:10 --> 00:28:15
typically the one you use right see

00:28:12 --> 00:28:17
python is an interpreter

00:28:14 --> 00:28:20
and so interpreters they have an extra

00:28:16 --> 00:28:21
layer of like byte codes and things like

00:28:19 --> 00:28:23
this that they have to go read parse

00:28:20 --> 00:28:25
interpret and it makes them kind of slow

00:28:22 --> 00:28:27
from that perspective and so one of the

00:28:24 --> 00:28:28
first things we do is we move to a

00:28:26 --> 00:28:29
compiler

00:28:27 --> 00:28:31
and so I'm just moving to a compiler

00:28:28 --> 00:28:33
getting The Interpreter out of the loop

00:28:30 --> 00:28:35
is two to five to ten X speed up

00:28:32 --> 00:28:36
depending on the code so just out of the

00:28:34 --> 00:28:39
gate

00:28:35 --> 00:28:41
just using more modern techniques right

00:28:38 --> 00:28:43
now if you do that one of the things you

00:28:40 --> 00:28:46
can do is you can start to look at how C

00:28:42 --> 00:28:49
python started to lay out data

00:28:45 --> 00:28:50
nd so one of the things that that c

00:28:48 --> 00:28:53
python did and this isn't part of the

00:28:49 --> 00:28:55
Python spec necessarily but this is just

00:28:52 --> 00:28:57
sets of decisions is that

00:28:54 --> 00:29:00
if you take an integer for example it'll

00:28:56 --> 00:29:02
put it in an object because in Python

00:28:59 --> 00:29:04
everything's an object and so they do

00:29:01 --> 00:29:07
the very logical thing of keeping the

00:29:03 --> 00:29:09
memory representation of all objects the

00:29:06 --> 00:29:11
same so all objects have a header they

00:29:08 --> 00:29:13
have like payload data they and what

00:29:10 --> 00:29:14
his means is every time you pass around

00:29:12 --> 00:29:16
an object you're passing around a

00:29:13 --> 00:29:18
pointer to the data

00:29:15 --> 00:29:20
well this has overhead it turns out that

00:29:17 --> 00:29:21
modern computers don't like chasing

00:29:19 --> 00:29:23
pointers very much and things like this

00:29:21 --> 00:29:25
it means that you have to allocate the

00:29:22 --> 00:29:27
data means you have to reference count

00:29:24 --> 00:29:29
it which is another way of that python

00:29:26 --> 00:29:31
uses to keep track of memory and so this

00:29:28 --> 00:29:32
has a lot of overhead and so if you say

00:29:30 --> 00:29:34
okay

00:29:31 --> 00:29:37
let's try to get that out of

00:29:33 --> 00:29:41
the Heap out of a box out of an

00:29:36 --> 00:29:44
interaction and into the registers

00:29:40 --> 00:29:45
that's that's another 10x so it adds up

00:29:43 --> 00:29:47
if you if you're reference counting

00:29:44 --> 00:29:49
every single every every single thing

00:29:46 --> 00:29:51
you create that adds up yeah and if you

00:29:48 --> 00:29:52
look at you know people complain about

00:29:50 --> 00:29:55
he python Gill this is one of the

00:29:51 --> 00:29:56
things that hurts parallelism

00:29:54 --> 00:29:57
um that's because of the reference

00:29:55 --> 00:29:58
Counting

00:29:56 --> 00:30:00
right and so the Gill and reference

00:29:57 --> 00:30:01
counting are very tightly intertwined in

00:29:59 --> 00:30:03
Python it's not the only thing but it's

00:30:00 --> 00:30:04
very tightly intertwined and so then you

00:30:02 --> 00:30:07
lean into this and you say okay cool

00:30:03 --> 00:30:09
well modern computers they can do more

00:30:06 --> 00:30:10
than one operation at a time and so they

00:30:08 --> 00:30:12
have vectors what is a vector well a

00:30:09 --> 00:30:14
vector allows you to take one instead of

00:30:11 --> 00:30:16
taking one piece of data doing an ad or

00:30:13 --> 00:30:18
multiply and then picking up the next

00:30:15 --> 00:30:20
one you can now do a 4 or 8 or 16 or 32

00:30:17 --> 00:30:22
at a time right well python doesn't

00:30:19 --> 00:30:24
expose that because of reasons and so

00:30:21 --> 00:30:24
now you can say okay well you can adopt

00:30:23 --> 00:30:26
hat

00:30:23 --> 00:30:28
now you have threads now you have like

00:30:25 --> 00:30:29
additional things like you control

00:30:27 --> 00:30:31
memory hierarchy and so what Mojo allows

00:30:28 --> 00:30:33
you to do is it allows you to start

00:30:30 --> 00:30:34
aking advantage of all these powerful

00:30:32 --> 00:30:36
things that have been built into the

00:30:33 --> 00:30:39
hardware over time and it gives the

00:30:35 --> 00:30:41
library gives um very nice features so

00:30:38 --> 00:30:44
you can say just parallelize this do

00:30:40 --> 00:30:47
this in parallel right so it's very very

00:30:43 --> 00:30:49
powerful weapons against slowness which

00:30:46 --> 00:30:51
is why people have been I think having

00:30:48 --> 00:30:52
fun like just taking code and making go

00:30:50 --> 00:30:54
fast because it's just kind of an

00:30:51 --> 00:30:56
adrenaline rush to see like how fast you

00:30:53 --> 00:30:57
can get things before I talk about some

00:30:55 --> 00:30:59
of the interesting stuff with

00:30:56 --> 00:31:01
parallelization all that let's let's

00:30:58 --> 00:31:02
first talk about like the basics we

00:31:00 --> 00:31:05
talked to indentation right so this

00:31:01 --> 00:31:07
thing looks like python

00:31:04 --> 00:31:10
it's sexy and beautiful like python as I

00:31:06 --> 00:31:12
mentioned uh is it a typed language so

00:31:09 --> 00:31:15
what's the role of types yeah good

00:31:11 --> 00:31:18
question so python has types it has

00:31:14 --> 00:31:19
trings as integers it has dictionaries

00:31:17 --> 00:31:21
and like all that stuff but they all

00:31:18 --> 00:31:22
ive at runtime

00:31:20 --> 00:31:24
right and so

00:31:21 --> 00:31:26
because all those types of runtime in

00:31:23 --> 00:31:29
Python you never or you don't have to

00:31:25 --> 00:31:30
spell them python also has like this

00:31:28 --> 00:31:32
whole typing thing going on now and a

00:31:29 --> 00:31:33
lot of people use it yeah I'm not

00:31:31 --> 00:31:34
alking about that that's that's kind of

00:31:32 --> 00:31:37
a different thing we can go back to that

00:31:33 --> 00:31:39
if you want but but typically the um

00:31:36 --> 00:31:41
you know you just say I take I have a

00:31:38 --> 00:31:42
death and my def takes two parameters

00:31:40 --> 00:31:46
I'm going to call them A and B and I

00:31:41 --> 00:31:47
don't have to write a type okay so that

00:31:45 --> 00:31:49
is great but what that does is that

00:31:46 --> 00:31:51
forces what's called a consistent

00:31:48 --> 00:31:53
representation so these things have to

00:31:50 --> 00:31:54
be a pointer to an object with the

00:31:52 --> 00:31:56
object header and they all have to look

00:31:53 --> 00:31:58
the same and then when you dispatch a

00:31:55 --> 00:32:00
method you go through all the same

00:31:57 --> 00:32:02
different paths no matter what the the

00:31:59 --> 00:32:04
receiver whatever that type is so what

00:32:01 --> 00:32:06
Mojo does is it allows you to have more

00:32:03 --> 00:32:08
than one kind of type and so what it

00:32:05 --> 00:32:10
does is allows you to say okay cool I

00:32:07 --> 00:32:11
have I have an object an object's behave

00:32:09 --> 00:32:13
like python does and so it's fully

00:32:10 --> 00:32:15
Dynamic and that's all great and for

00:32:12 --> 00:32:17
many things classes like that's all very

00:32:14 --> 00:32:19
powerful and very important

00:32:16 --> 00:32:21
but if you want to say hey it's an

00:32:18 --> 00:32:22
integer and it's 32 bits or 64 bits or

00:32:20 --> 00:32:23
whatever it is or it's a floating point

00:32:21 --> 00:32:26
value

00:32:22 --> 00:32:28
at six four bits well then the compiler

00:32:25 --> 00:32:30
can take that and it can use that to do

00:32:27 --> 00:32:31
way better optimization and turns out

00:32:29 --> 00:32:34
again getting rid of the interactions

00:32:30 --> 00:32:35
it's huge means you can get better code

00:32:33 --> 00:32:37
completion because you have

00:32:34 --> 00:32:39
um because compiler knows what the type

00:32:36 --> 00:32:41
is and so knows what operations work on

00:32:38 --> 00:32:44
it and so that's actually pretty huge

00:32:40 --> 00:32:46
and so what Mojo does allows you to

00:32:43 --> 00:32:48
progressively adopt types into your

00:32:45 --> 00:32:50
program so you can start again it's

00:32:47 --> 00:32:52
compatible with python and so then you

00:32:49 --> 00:32:54
can add however many types you want

00:32:51 --> 00:32:54
wherever you want them and if you don't

00:32:53 --> 00:32:57
want to deal with it you don't have to

00:32:53 --> 00:33:00
deal with it right and so one of one of

00:32:56 --> 00:33:02
you know our opinions on this is It's

00:32:59 --> 00:33:04
not that types are the right thing or

00:33:01 --> 00:33:06
the wrong thing

00:33:03 --> 00:33:08
it's a very useful thing

00:33:05 --> 00:33:10
which was kind of optional it's not

00:33:07 --> 00:33:11
strict typing you don't have to specify

00:33:09 --> 00:33:13
a type exactly

00:33:10 --> 00:33:15
okay so starting from the thing that

00:33:12 --> 00:33:18
Python's kind of reaching towards right

00:33:14 --> 00:33:20
now with trying to inject types into it

00:33:17 --> 00:33:22
yeah with a very different approach but

00:33:19 --> 00:33:25
yes yes what's the different approach

00:33:21 --> 00:33:27
I'm actually one of the people

00:33:24 --> 00:33:30
that have not been using types very much

00:33:26 --> 00:33:32
in Python okay why did you say

00:33:29 --> 00:33:35
it's just well because I I know the

00:33:31 --> 00:33:38
importance it's like adults use strict

00:33:34 --> 00:33:39
yping and so I I refuse to grow up in

00:33:37 --> 00:33:42
that sense it's a it's a kind of

00:33:39 --> 00:33:45
rebellion but I I just know that um

00:33:41 --> 00:33:47
it probably reduces the amount of Errors

00:33:44 --> 00:33:49
even just for forget about performance

00:33:46 --> 00:33:50
improvements it probably reduces errors

00:33:48 --> 00:33:51
of when you do strict typing yeah so I

00:33:49 --> 00:33:53
mean I think it's interesting if you

00:33:50 --> 00:33:55
look at that right and the reason is I'm

00:33:52 --> 00:33:58
giving a hard time yeah is that that

00:33:54 --> 00:34:00
here's this this cultural norm this

00:33:57 --> 00:34:01
pressure this like there has to be a

00:33:59 --> 00:34:03
right way to do things like you know

00:34:00 --> 00:34:04
only grown-ups only do it one way and if

00:34:02 --> 00:34:05
you want to do that you should feel bad

00:34:03 --> 00:34:07
yes right like some people feel like

00:34:04 --> 00:34:09
Python's a guilty pleasure or something

00:34:06 --> 00:34:11
and that's like when I get serious I

00:34:08 --> 00:34:14
need to go rewrite it right yeah exactly

00:34:10 --> 00:34:15
I mean cool I understand history and I

00:34:13 --> 00:34:17
understand kind of where this comes from

00:34:14 --> 00:34:19
but I don't think it has to be a guilty

00:34:16 --> 00:34:20
pleasure yeah right and so if you look

00:34:18 --> 00:34:21
at that you say why do you have to

00:34:19 --> 00:34:24
rewrite it well you have to rewrite it

00:34:20 --> 00:34:26
o deploy well why do you want to deploy

00:34:23 --> 00:34:28
well you care about performance you care

00:34:25 --> 00:34:30
about predictability or you want you

00:34:27 --> 00:34:31
know a tiny thing on the server that has

00:34:29 --> 00:34:35
no dependencies or you know you have

00:34:30 --> 00:34:37
objectives you're trying to attain

00:34:34 --> 00:34:38
so what if python can achieve those

00:34:36 --> 00:34:40
objectives

00:34:37 --> 00:34:41
o if you want types well maybe you want

00:34:39 --> 00:34:43
ypes because you want to make sure

00:34:40 --> 00:34:45
you're passing the right thing sure you

00:34:42 --> 00:34:47
can add a type if you don't care you're

00:34:44 --> 00:34:49
protyping some stuff you're hacking some

00:34:46 --> 00:34:50
things out you're like pulling some Ram

00:34:48 --> 00:34:53
good off the internet it should just

00:34:49 --> 00:34:55
work right and you shouldn't be like

00:34:52 --> 00:34:57
pressured he shouldn't feel bad about

00:34:54 --> 00:34:59
doing the right thing or the thing that

00:34:56 --> 00:35:01
feels good now if you're in a team right

00:34:58 --> 00:35:03
you're working at some massive internet

00:35:00 --> 00:35:05
company and you have 400 million lines

00:35:02 --> 00:35:08
of python code well they they may have a

00:35:04 --> 00:35:09
house rule that you use types yeah right

00:35:07 --> 00:35:10
because it makes it easier for different

00:35:08 --> 00:35:12
humans to talk to each other and

00:35:09 --> 00:35:14
understand what's going on and bugs at

00:35:11 --> 00:35:16
scale right and so there are lots of

00:35:13 --> 00:35:18
good reasons why you might want to use

00:35:15 --> 00:35:19
types but that doesn't mean that

00:35:17 --> 00:35:21
everybody should use them all the time

00:35:18 --> 00:35:24
right so what Mojo does is it says cool

00:35:20 --> 00:35:26
well allow people to use types and if

00:35:23 --> 00:35:27
you use types you get nice things out of

00:35:25 --> 00:35:30
it right you get better performance and

00:35:26 --> 00:35:34
things like this right but Mojo is a

00:35:29 --> 00:35:36
full compatible superset of python

00:35:33 --> 00:35:37
and so that means it has to work without

00:35:35 --> 00:35:39
ypes

00:35:36 --> 00:35:40
it has to support all the dynamic things

00:35:38 --> 00:35:44
I support all the packages that support

00:35:39 --> 00:35:45
uh for comprehension list comprehensions

00:35:43 --> 00:35:47
and things like this right and so that

00:35:45 --> 00:35:49
starting point I think is really

00:35:46 --> 00:35:51
important and I think that

00:35:48 --> 00:35:53
again you can look at why I care so much

00:35:50 --> 00:35:55
about this and there's many different

00:35:52 --> 00:35:56
aspects of that one of which is the

00:35:54 --> 00:35:59
world went through a very challenging

00:35:55 --> 00:36:02
migration from python 2 to python 3.

00:35:58 --> 00:36:04
right yes this migration took many years

00:36:01 --> 00:36:06
and it was very painful for many teams

00:36:03 --> 00:36:08
right and there's a lot of a lot of

00:36:05 --> 00:36:10
things that went on in that

00:36:07 --> 00:36:12
um I'm not an expert in all the details

00:36:09 --> 00:36:13
I honestly don't want to be I don't want

00:36:11 --> 00:36:15
he world to have to go through that

00:36:12 --> 00:36:17
yeah right and you know people can

00:36:14 --> 00:36:18
ignore Mojo and if it's not their thing

00:36:16 --> 00:36:19
that's that's cool but if they want to

00:36:17 --> 00:36:21
use Mojo I don't want them to have to

00:36:18 --> 00:36:24
rewrite all their code yeah I mean just

00:36:20 --> 00:36:25
look at the superset part is

00:36:23 --> 00:36:27
there's just I mean there's so much

00:36:24 --> 00:36:29
brilliant stuff here that definitely is

00:36:26 --> 00:36:31
incredible

00:36:28 --> 00:36:32
um we'll talk about that yeah first of

00:36:30 --> 00:36:37
all how's the typing implemented

00:36:31 --> 00:36:40
ifferently in uh in python versus uh

00:36:36 --> 00:36:41
Mojo So this heterogeneous flexibility

00:36:39 --> 00:36:44
ou said it's definitely implemented

00:36:40 --> 00:36:46
yeah so I'm not a full expert in the

00:36:43 --> 00:36:47
whole backstory and types in Python so

00:36:45 --> 00:36:49
I'll give you I'll give you that I can

00:36:46 --> 00:36:51
give you my understanding

00:36:48 --> 00:36:54
um my understanding is basically like

00:36:50 --> 00:36:56
many Dynamic languages the ecosystem

00:36:53 --> 00:36:58
went through a phase where people went

00:36:55 --> 00:37:02
from writing scripts during a large

00:36:57 --> 00:37:04
scale huge code bases in Python and at

00:37:01 --> 00:37:06
scale kind of helps have types yeah

00:37:03 --> 00:37:07
people want to be able to reason about

00:37:05 --> 00:37:10
interfaces what what do you expect

00:37:06 --> 00:37:11
string or an inch or like what these

00:37:09 --> 00:37:13
basic things right and so what the

00:37:10 --> 00:37:15
python Community started doing is it

00:37:12 --> 00:37:17
started saying okay let's have tools on

00:37:14 --> 00:37:19
the side

00:37:16 --> 00:37:22
Checker tools right the go and like

00:37:18 --> 00:37:24
nforce some variants check for bugs try

00:37:21 --> 00:37:26
to identify things these are called

00:37:23 --> 00:37:27
Static analysis tools generally and so

00:37:25 --> 00:37:28
these tools run over your code and try

00:37:26 --> 00:37:30
to look for bugs

00:37:27 --> 00:37:31
what ended up happening is there's so

00:37:29 --> 00:37:32
many of these things so many different

00:37:30 --> 00:37:34
weird patterns and different approaches

00:37:31 --> 00:37:36
on specifying the types and different

00:37:33 --> 00:37:38
hings going on that the python

00:37:35 --> 00:37:40
Community realize and recognize hey hey

00:37:37 --> 00:37:41
there's the thing here and so what they

00:37:39 --> 00:37:43
started to do is they started to

00:37:40 --> 00:37:45
standardize the Syntax for adding types

00:37:42 --> 00:37:47
to python now one of the challenges that

00:37:44 --> 00:37:48
hey had is that they're coming from

00:37:46 --> 00:37:49
kind of this fragmented world where

00:37:47 --> 00:37:50
there's lots of different tools they

00:37:48 --> 00:37:52
have different trade-offs and

00:37:49 --> 00:37:54
interpretations and the types mean

00:37:51 --> 00:37:56
different things and so if you look at

00:37:53 --> 00:37:57
ypes in Python according to the python

00:37:55 --> 00:37:59
spec

00:37:56 --> 00:38:01
the types are ignored

00:37:58 --> 00:38:04
right so according to python spec you

00:38:00 --> 00:38:07
can write pretty much anything in in a

00:38:03 --> 00:38:09
tight position okay and um

00:38:06 --> 00:38:12
you can technically you can write any

00:38:08 --> 00:38:14
expression okay now

00:38:11 --> 00:38:16
that's beautiful because you can extend

00:38:13 --> 00:38:17
it you can do cool things you can build

00:38:15 --> 00:38:19
your own tools you can build your own

00:38:16 --> 00:38:21
house linter or something like that

00:38:18 --> 00:38:24
right but it's also a problem because

00:38:20 --> 00:38:25
any existing Python program may be using

00:38:23 --> 00:38:27
different tools and they have different

00:38:24 --> 00:38:29
interpretations and so if you adopt

00:38:26 --> 00:38:31
somebody's package into your ecosystem

00:38:28 --> 00:38:33
try to run the tool you prefer it may

00:38:30 --> 00:38:34
throw out tons of weird errors and

00:38:32 --> 00:38:36
warnings and problems just because it's

00:38:33 --> 00:38:38
incompatible with how these things work

00:38:35 --> 00:38:40
also because they're added late and

00:38:37 --> 00:38:41
they're not checked by the python

00:38:39 --> 00:38:44
interpreter it's always kind of more of

00:38:40 --> 00:38:46
a hint than it is a requirement also the

00:38:43 --> 00:38:48
C python implementation can't use them

00:38:45 --> 00:38:50
for performance and so it's really

00:38:47 --> 00:38:52
that's a big one right so you can't

00:38:49 --> 00:38:53
utilize the for the compilation for the

00:38:51 --> 00:38:55
just in time compilation okay exactly

00:38:52 --> 00:38:57
and this this all comes back to the

00:38:54 --> 00:38:58
design principle if it's it's kind of

00:38:56 --> 00:39:00
they're kind of hints they're kind of

00:38:57 --> 00:39:02
the definition is a little bit murky

00:38:59 --> 00:39:03
it's unclear exactly the interpretation

00:39:01 --> 00:39:06
in a bunch of cases and so because of

00:39:03 --> 00:39:07
that you can't actually even if you want

00:39:05 --> 00:39:10
o it's really difficult to use them to

00:39:06 --> 00:39:12
say like it is going to be an INT and if

00:39:09 --> 00:39:14
it's not it's a problem right a lot of

00:39:11 --> 00:39:16
code would break if you did that so so

00:39:13 --> 00:39:18
in Mojo right so you can still use those

00:39:15 --> 00:39:20
kind of type annotations it's fine but

00:39:17 --> 00:39:23
in Mojo if you declare a type and you

00:39:19 --> 00:39:25
se it then it means it is going to be

00:39:22 --> 00:39:27
that type and the compiler helps you

00:39:24 --> 00:39:30
check that and force it and it's safe

00:39:26 --> 00:39:32
um and it's not it's not a like best

00:39:29 --> 00:39:35
effort kind of a thing so if you try to

00:39:31 --> 00:39:38
shovel string type thing into an integer

00:39:34 --> 00:39:39
you get an error from the compiler

00:39:37 --> 00:39:42
compile time

00:39:38 --> 00:39:46
nice okay what kind of basic types are

00:39:41 --> 00:39:49
there yeah so uh Mojo is

00:39:45 --> 00:39:52
um pretty hardcore in terms of what it

00:39:48 --> 00:39:54
ries to do in the language which is the

00:39:51 --> 00:39:55
philosophy there is that we

00:39:53 --> 00:39:57
um

00:39:54 --> 00:39:58
again if you if you look at python right

00:39:56 --> 00:40:01
Python's a beautiful language because

00:39:57 --> 00:40:03
it's so extensible right and so all of

00:40:00 --> 00:40:05
the different things in Python like for

00:40:02 --> 00:40:07
loops and plus and like all these things

00:40:04 --> 00:40:11
can be accessed through these Under

00:40:06 --> 00:40:12
Armor methods okay so you have to say

00:40:10 --> 00:40:13
okay if I make something that is super

00:40:11 --> 00:40:15
fast I can go all the way down to the

00:40:12 --> 00:40:17
metal why do I need to have integers

00:40:15 --> 00:40:19
built into the language

00:40:16 --> 00:40:21
right so what Mojo does it says okay

00:40:18 --> 00:40:23
well we can have this notion of structs

00:40:20 --> 00:40:26
o we have classes in Python now you can

00:40:22 --> 00:40:27
have structs classes are Dynamic structs

00:40:25 --> 00:40:29
are static

00:40:27 --> 00:40:31
ool we can get high performance we can

00:40:28 --> 00:40:33
write C plus plus kind of code with

00:40:30 --> 00:40:35
structs if you want these things mix and

00:40:32 --> 00:40:37
work beautifully together but what that

00:40:34 --> 00:40:39
means is that you can go and Implement

00:40:36 --> 00:40:41
strings and ins and floats and arrays

00:40:38 --> 00:40:42
and all that kind of stuff in the

00:40:40 --> 00:40:44
language

00:40:41 --> 00:40:48
right and so that's really cool because

00:40:43 --> 00:40:50
you know to me as a ideal idealizing

00:40:47 --> 00:40:52
compile compiler language type of person

00:40:49 --> 00:40:54
what I want to do is I want to get magic

00:40:51 --> 00:40:56
out of the compiler and put in the

00:40:53 --> 00:40:58
libraries because if somebody can you

00:40:55 --> 00:41:00
know if we can build an integer that's

00:40:57 --> 00:41:01
beautiful and it has an amazing API it

00:40:59 --> 00:41:02
does all the things you'd expect an

00:41:00 --> 00:41:04
Editor to do

00:41:01 --> 00:41:06
if you don't like it maybe you want a

00:41:03 --> 00:41:07
big integer maybe you want to like

00:41:05 --> 00:41:09
sideways integer I don't know like what

00:41:06 --> 00:41:13
all the space of integers are um

00:41:09 --> 00:41:15
then uh then you can do that and it's

00:41:12 --> 00:41:17
not a second class citizen

00:41:14 --> 00:41:19
and so if you look at certain other

00:41:16 --> 00:41:21
languages like C plus plus one I also

00:41:18 --> 00:41:24
love and use a lot um

00:41:20 --> 00:41:28
into hard code in the language

00:41:24 --> 00:41:30
but complex is not and so isn't it kind

00:41:27 --> 00:41:33
of weird that you know you have this STD

00:41:29 --> 00:41:35
complex class but you have int and

00:41:32 --> 00:41:38
complex tries to look like a natural

00:41:34 --> 00:41:39
numeric type and things like this but

00:41:37 --> 00:41:41
integers and floating Point have these

00:41:39 --> 00:41:43
like special promotion rules and other

00:41:40 --> 00:41:45
things like that that are magic and

00:41:42 --> 00:41:46
they're hacked into the compiler and

00:41:44 --> 00:41:47
because of that you can't actually make

00:41:45 --> 00:41:50
something that works like the built-in

00:41:46 --> 00:41:52
types is there something provided as a

00:41:49 --> 00:41:54
standard because uh you know because

00:41:51 --> 00:41:56
it's AI first

00:41:53 --> 00:41:58
you know numerical types are so

00:41:55 --> 00:42:01
important here so is there something

00:41:57 --> 00:42:03
like a nice standard implementation of

00:42:00 --> 00:42:04
integer influence yeah so so we're still

00:42:02 --> 00:42:05
building all that stuff out so we

00:42:03 --> 00:42:06
provide answers and floats and all that

00:42:04 --> 00:42:08
kind of stuff we also provide like

00:42:06 --> 00:42:10
buffers and tensors and things like that

00:42:07 --> 00:42:13
you'd expect in an ml context

00:42:09 --> 00:42:14
honestly we need to keep designing and

00:42:12 --> 00:42:15
redesigning and working with the

00:42:13 --> 00:42:16
community to build that out and make

00:42:14 --> 00:42:17
that better that's not our strength

00:42:15 --> 00:42:19
right now

00:42:16 --> 00:42:22
give us six months or a year and I think

00:42:18 --> 00:42:23
it'll be way better but um but the power

00:42:21 --> 00:42:25
of putting in the library means we can

00:42:22 --> 00:42:27
have teams of experts that aren't

00:42:24 --> 00:42:29
compiler Engineers that can help us

00:42:26 --> 00:42:31
design and refine and drive this forward

00:42:28 --> 00:42:33
so uh one of the exciting things we

00:42:30 --> 00:42:36
should mention here is that

00:42:32 --> 00:42:38
his is uh this is new and fresh this

00:42:35 --> 00:42:40
cake is unbaked

00:42:37 --> 00:42:41
it's almost baked you can tell it's

00:42:39 --> 00:42:43
delicious

00:42:40 --> 00:42:46
but it's not fully ready to be consumed

00:42:42 --> 00:42:47
yep that's very fair it is very useful

00:42:45 --> 00:42:49
but it's very useful if you're a super

00:42:46 --> 00:42:50
low level programmer right now and what

00:42:48 --> 00:42:52
we're doing is we're working our way up

00:42:49 --> 00:42:56
the stack and so the way I would look at

00:42:51 --> 00:42:59
Mojo today in May and 2023

00:42:55 --> 00:43:01
um is that it's like a 0.1

00:42:58 --> 00:43:03
so I think that you know a year from now

00:43:00 --> 00:43:05
it's gonna be way more interesting to a

00:43:02 --> 00:43:07
variety of people but what we're doing

00:43:04 --> 00:43:09
is we're we decide to release it early

00:43:06 --> 00:43:10
so that people can get access to it and

00:43:08 --> 00:43:14
play with them we can build it with the

00:43:09 --> 00:43:16
community we um have a big road map

00:43:13 --> 00:43:17
fully published being transparent about

00:43:15 --> 00:43:19
his and a lot of people are involved in

00:43:16 --> 00:43:20
this stuff and so what we're doing is

00:43:18 --> 00:43:23
we're really optimizing for building

00:43:19 --> 00:43:24
this thing the right way and building it

00:43:22 --> 00:43:26
he right way is kind of interesting

00:43:23 --> 00:43:27
working with the community because

00:43:25 --> 00:43:31
verybody wants it yesterday

00:43:27 --> 00:43:33
and so it's sometimes it's kind of you

00:43:30 --> 00:43:35
know there's some Dynamics there but

00:43:32 --> 00:43:37
yeah I think it's good it's the right

00:43:34 --> 00:43:39
hing so there's a Discord also so the

00:43:36 --> 00:43:40
Dynamics is pretty interesting sometimes

00:43:38 --> 00:43:42
the community probably can be very

00:43:39 --> 00:43:46
chaotic

00:43:41 --> 00:43:48
and uh introduce a lot of stress Guido

00:43:45 --> 00:43:50
famously quit over the stress of the

00:43:47 --> 00:43:52
walrus operator I mean yeah you know it

00:43:49 --> 00:43:55
broke maybe

00:43:51 --> 00:43:57
xactly and so like it could be very

00:43:54 --> 00:43:59
stressful to develop but can you just

00:43:56 --> 00:44:02
add tangent upon a tangent is it

00:43:58 --> 00:44:04
stressful to to uh

00:44:01 --> 00:44:06
to work through the design of various

00:44:03 --> 00:44:09
features here given that the community

00:44:05 --> 00:44:11
is so richly involved well so um so I've

00:44:08 --> 00:44:13
been doing open development and

00:44:10 --> 00:44:15
Community stuff for decades now somehow

00:44:12 --> 00:44:17
this has happened to me

00:44:14 --> 00:44:18
um so I've I've learned some tricks but

00:44:16 --> 00:44:21
he the thing that always gets me is I

00:44:17 --> 00:44:23
want to make people happy right and so

00:44:20 --> 00:44:25
this is this is maybe not all people all

00:44:22 --> 00:44:27
happy all the time but generally I want

00:44:24 --> 00:44:29
people to be happy right and so

00:44:26 --> 00:44:31
the challenge is that again we're

00:44:28 --> 00:44:34
tapping into some long

00:44:30 --> 00:44:36
some deep-seated long tensions and

00:44:33 --> 00:44:38
pressures both in the python world but

00:44:35 --> 00:44:39
also in the AI world in the hardware

00:44:37 --> 00:44:42
world and things like this and so people

00:44:38 --> 00:44:45
just want us to move faster right and so

00:44:41 --> 00:44:47
again our decision was let's release

00:44:44 --> 00:44:49
this early let's get people used to it

00:44:46 --> 00:44:50
or access to it and play with it and

00:44:48 --> 00:44:54
like let's let's build it in the open

00:44:49 --> 00:44:57
which we could have you know had the the

00:44:53 --> 00:44:59
language monk sitting in the Cloister up

00:44:56 --> 00:45:01
on the hilltop like beavering away

00:44:58 --> 00:45:02
trying to build something but in my

00:45:00 --> 00:45:04
experience you get something that's way

00:45:01 --> 00:45:06
better if you work with the community

00:45:03 --> 00:45:07
right uh and so yes it can be

00:45:05 --> 00:45:09
frustrating can be challenging for lots

00:45:06 --> 00:45:11
of people involved and you know if you I

00:45:08 --> 00:45:13
mean if you mention our Discord we have

00:45:10 --> 00:45:14
over 10 000 people on the Discord 11 000

00:45:12 --> 00:45:18
people or something keep in mind we

00:45:13 --> 00:45:20
released Mojo like two weeks ago yeah so

00:45:17 --> 00:45:23
um very effective so it's very cool

00:45:19 --> 00:45:25
um but what that means is that um you

00:45:22 --> 00:45:27
know 10 11 000 people all will want

00:45:24 --> 00:45:29
something different right and so what

00:45:27 --> 00:45:32
we've done is we've tried to say okay

00:45:28 --> 00:45:34
cool here's our roadmap here here and

00:45:31 --> 00:45:36
the roadmap isn't completely arbitrary

00:45:33 --> 00:45:38
it's based on here's the logical order

00:45:35 --> 00:45:39
in which to build these features or add

00:45:37 --> 00:45:41
these capabilities and things like

00:45:38 --> 00:45:43
that and what we've done is we've spun

00:45:40 --> 00:45:46
really fast on like bug fixes and so we

00:45:42 --> 00:45:48
actually have very few bugs which is

00:45:45 --> 00:45:50
cool I mean actually for a project in

00:45:47 --> 00:45:51
the state but then what we're doing is

00:45:49 --> 00:45:53
we're dropping in features very

00:45:50 --> 00:45:54
deliberately I mean this is fun to watch

00:45:52 --> 00:45:57
because you got the two

00:45:53 --> 00:45:59
gigantic communities of like Hardware

00:45:56 --> 00:46:02
like systems engineers and then you have

00:45:58 --> 00:46:05
the machine learning python people that

00:46:01 --> 00:46:09
are like higher level yeah and it's just

00:46:04 --> 00:46:11
oo like for like Army like uh they've

00:46:08 --> 00:46:13
been at War yeah they've been at War

00:46:10 --> 00:46:15
ight and so so here's here's a Tolkien

00:46:12 --> 00:46:17
ovel or something okay so here's a test

00:46:14 --> 00:46:18
again like it's it's super funny for for

00:46:16 --> 00:46:20
something that's only been out for two

00:46:17 --> 00:46:23
weeks right people are so impatient

00:46:19 --> 00:46:23
right but okay cool let's fast forward a

00:46:22 --> 00:46:25
year

00:46:22 --> 00:46:27
like in a year's time Mojo will be

00:46:24 --> 00:46:29
actually quite amazing and solve tons of

00:46:26 --> 00:46:31
problems and be very good

00:46:28 --> 00:46:34
um people still have these problems

00:46:30 --> 00:46:36
right and so you you look at this you

00:46:33 --> 00:46:39
say and the way I look at this at least

00:46:35 --> 00:46:41
is to say okay well we're solving big

00:46:38 --> 00:46:43
long-standing problems

00:46:40 --> 00:46:45
to me I again working on many different

00:46:42 --> 00:46:45
problems I want to make sure we do it

00:46:44 --> 00:46:47
right

00:46:44 --> 00:46:51
here's like a responsibility you feel

00:46:46 --> 00:46:52
because if you mess it up right there's

00:46:50 --> 00:46:53
very few opportunities to do projects

00:46:51 --> 00:46:55
like this and have them really have

00:46:52 --> 00:46:57
impact on the world if we do it right

00:46:54 --> 00:46:59
hen maybe we can take those feuding

00:46:56 --> 00:47:02
armies and actually heal some of those

00:46:58 --> 00:47:04
wounds yeah like this feels this feels

00:47:01 --> 00:47:06
like a speech by George Washington or

00:47:03 --> 00:47:07
Abraham Lincoln or something and you

00:47:05 --> 00:47:09
look at this it's like okay well how

00:47:06 --> 00:47:11
different are we yeah we all want

00:47:08 --> 00:47:12
beautiful things we all want something

00:47:10 --> 00:47:13
that's nice we all want to be able to

00:47:11 --> 00:47:15
work together we all want our stuff be

00:47:12 --> 00:47:17
used right and so if we can help heal

00:47:14 --> 00:47:19
that now I'm not optimistic that

00:47:16 --> 00:47:20
all people will use Mojo and they'll

00:47:18 --> 00:47:23
stop using C plus plus like that's not

00:47:19 --> 00:47:24
my goal right but um but if we can heal

00:47:22 --> 00:47:27
some of that I think that'd be pretty

00:47:23 --> 00:47:30
cool yeah and we start by putting the

00:47:26 --> 00:47:33
people who like braces into the gulag no

00:47:29 --> 00:47:34
uh so so there are proposals for adding

00:47:32 --> 00:47:38
braces to Mojo and we just know what's

00:47:33 --> 00:47:41
your thing we tell them no okay

00:47:37 --> 00:47:42
politely yeah anyway so there's a lot of

00:47:40 --> 00:47:44
amazing features on the roadmap and

00:47:41 --> 00:47:45
those already implemented it it'd be

00:47:43 --> 00:47:48
awesome I could just ask you a few

00:47:44 --> 00:47:50
things yeah so uh the the other

00:47:47 --> 00:47:52
performance Improvement comes from

00:47:49 --> 00:47:55
immutability so what's the what's this

00:47:51 --> 00:47:57
VAR and this let thing that we got going

00:47:54 --> 00:48:00
on what's immutability

00:47:56 --> 00:48:02
eah so one of the things that is uh

00:47:59 --> 00:48:04
useful and it's not always required but

00:48:01 --> 00:48:06
it's useful is knowing whether something

00:48:03 --> 00:48:09
can change out from underneath you right

00:48:05 --> 00:48:11
so in Python you have a pointer to an

00:48:08 --> 00:48:13
array right and so you pass that pointer

00:48:10 --> 00:48:16
to an array around to things

00:48:12 --> 00:48:17
if you pass into a function they may

00:48:15 --> 00:48:20
take that and scroll away in some other

00:48:16 --> 00:48:21
data structure and so you get your array

00:48:19 --> 00:48:23
back and you go to use it now somebody

00:48:20 --> 00:48:25
else is like putting stuff in your array

00:48:22 --> 00:48:27
how do you reason about that it gets to

00:48:24 --> 00:48:30
be very complicated at least lots of

00:48:27 --> 00:48:32
bugs right and so one of the things that

00:48:29 --> 00:48:34
you know again this is not selling Mojo

00:48:31 --> 00:48:36
forces on you but something that Mojo

00:48:33 --> 00:48:38
enables is a thing called value

00:48:35 --> 00:48:40
semantics and what value semantics do is

00:48:37 --> 00:48:42
they take

00:48:39 --> 00:48:45
collections like arrays like

00:48:41 --> 00:48:46
dictionaries also tensors and strings

00:48:44 --> 00:48:49
and things like this that are much

00:48:45 --> 00:48:51
igher level and make them behave like

00:48:48 --> 00:48:54
proper values and so it makes it look

00:48:50 --> 00:48:56
like if you pass these things around you

00:48:53 --> 00:48:59
get a logical copy of all the data and

00:48:55 --> 00:49:00
so if I pass you an array your array you

00:48:58 --> 00:49:02
can go do what you want to it you're not

00:48:59 --> 00:49:04
going to hurt my array now that is an

00:49:01 --> 00:49:06
interesting and very powerful design

00:49:03 --> 00:49:08
principle it defines away a ton of bugs

00:49:05 --> 00:49:10
you have to be careful to implement it

00:49:07 --> 00:49:13
in an efficient way as their performance

00:49:09 --> 00:49:15
hit that's a significant

00:49:12 --> 00:49:18
uh generally not if you implement it the

00:49:14 --> 00:49:20
right way but it requires a lot of very

00:49:17 --> 00:49:22
low level uh getting the language right

00:49:19 --> 00:49:24
bits I assume there'll be a huge

00:49:21 --> 00:49:26
performance hit because it's a really

00:49:23 --> 00:49:28
the benefit is really nice because you

00:49:25 --> 00:49:29
don't get into that absolutely well the

00:49:27 --> 00:49:30
trick is is you can't do it you can't do

00:49:28 --> 00:49:32
copies

00:49:29 --> 00:49:35
o you have to provide

00:49:31 --> 00:49:38
the behavior of copying without doing

00:49:34 --> 00:49:40
the copy yeah how do you do that

00:49:37 --> 00:49:42
is that how do you do that it's not

00:49:39 --> 00:49:44
magic it's just it's actually pretty

00:49:41 --> 00:49:46
cool well so first before we talk about

00:49:43 --> 00:49:48
how that works let's talk about how it

00:49:45 --> 00:49:50
works in Python right so in Python you

00:49:47 --> 00:49:52
need to find a person class or maybe a

00:49:49 --> 00:49:54
person class is a bad idea you define a

00:49:51 --> 00:49:55
database class right and database class

00:49:53 --> 00:49:57
has an array of Records something like

00:49:54 --> 00:50:00
that right and so the problem is that if

00:49:56 --> 00:50:02
you pass in a record or class instance

00:49:59 --> 00:50:04
into the database it'll take a hold of

00:50:01 --> 00:50:07
that object and then it assumes it has

00:50:03 --> 00:50:09
it and if you're passing an object in

00:50:06 --> 00:50:11
you have to know that that database is

00:50:08 --> 00:50:12
going to take take it and therefore you

00:50:10 --> 00:50:14
shouldn't change it after you put in the

00:50:11 --> 00:50:15
database right this is this you kind of

00:50:13 --> 00:50:18
have to know that you just have to kind

00:50:14 --> 00:50:19
of know that right and so you roll out

00:50:17 --> 00:50:21
version one of the database you just

00:50:18 --> 00:50:23
kind of have to know that of course Lex

00:50:20 --> 00:50:24
uses its own database right yeah right

00:50:22 --> 00:50:26
because you built it you understand how

00:50:23 --> 00:50:28
this works right somebody else joins the

00:50:25 --> 00:50:30
team they don't know this yes right and

00:50:27 --> 00:50:32
so now they suddenly get bugs you're

00:50:29 --> 00:50:35
having to maintain the database you

00:50:31 --> 00:50:36
shake your fist you argue the tenth time

00:50:34 --> 00:50:38
this happens you're like okay we have to

00:50:35 --> 00:50:39
do something different right and so what

00:50:37 --> 00:50:41
you do is you go to change your python

00:50:38 --> 00:50:44
code and you change your database class

00:50:40 --> 00:50:46
to copy the record every time you add it

00:50:43 --> 00:50:48
and so what ends up happening is you say

00:50:45 --> 00:50:51
okay I will do what's called a defensive

00:50:47 --> 00:50:53
copy inside the database and then that

00:50:50 --> 00:50:55
way if somebody passes something in I

00:50:52 --> 00:50:57
will have my own copy of it and they can

00:50:54 --> 00:50:58
go do whatever and they're not going to

00:50:56 --> 00:51:01
break my thing

00:50:57 --> 00:51:02
okay this is usually the the two design

00:51:00 --> 00:51:04
patterns if you look in pytorch for

00:51:01 --> 00:51:06
example this is cloning a tensor like

00:51:03 --> 00:51:07
there's a specific thing and you have to

00:51:05 --> 00:51:08
know where to call it if you don't call

00:51:06 --> 00:51:11
in the right place you get these bugs

00:51:07 --> 00:51:13
and this is state of the art right

00:51:10 --> 00:51:14
so a different approach so it's used in

00:51:12 --> 00:51:15
many languages so I've worked with it in

00:51:13 --> 00:51:17
Swift

00:51:14 --> 00:51:19
um is you say okay well let's provide

00:51:16 --> 00:51:22
value semantics and so we want to

00:51:18 --> 00:51:24
provide the view that you get a

00:51:21 --> 00:51:25
logically independent copy but we won't

00:51:23 --> 00:51:27
do that lazily

00:51:24 --> 00:51:30
and so what what we do is you say okay

00:51:26 --> 00:51:31
if you pass something into a function it

00:51:29 --> 00:51:33
doesn't actually make a copy what it

00:51:30 --> 00:51:34
actually does is it just increments a

00:51:32 --> 00:51:36
reference to it and if you pass it

00:51:33 --> 00:51:38
around you stick in your database

00:51:35 --> 00:51:40
they can go on the database you or not

00:51:37 --> 00:51:42
and then you come back out of the stack

00:51:39 --> 00:51:44
nobody's copied anything you come back

00:51:41 --> 00:51:46
out of the stack and then the caller

00:51:43 --> 00:51:48
lets go of it well then you've just

00:51:45 --> 00:51:50
handed it off to the database you've

00:51:47 --> 00:51:51
transferred it and there's no copies

00:51:49 --> 00:51:54
made

00:51:50 --> 00:51:56
now on the other hand if you know your

00:51:53 --> 00:51:58
co-worker goes and hands you a record

00:51:55 --> 00:51:59
and you pass it in you stick it in the

00:51:57 --> 00:52:02
database and then you go to town and you

00:51:58 --> 00:52:05
start modifying it what happens is you

00:52:01 --> 00:52:06
get a copy lazily on demand

00:52:04 --> 00:52:09
so what this does is gives you

00:52:05 --> 00:52:10
copies only when you need them and it

00:52:08 --> 00:52:12
also so it defines away the bugs but

00:52:09 --> 00:52:14
also generally reduces the number of

00:52:11 --> 00:52:15
copies in practice and so but the

00:52:13 --> 00:52:18
implementation details are tricky here

00:52:15 --> 00:52:20
yeah so this is yes something with

00:52:17 --> 00:52:23
reference Counting

00:52:19 --> 00:52:26
but to make it performant

00:52:22 --> 00:52:28
across a number of different kinds of

00:52:25 --> 00:52:30
objects yeah well so you need a couple

00:52:27 --> 00:52:31
of things and so there's many so this

00:52:29 --> 00:52:34
concept has existed in many different

00:52:30 --> 00:52:37
worlds and so that again it's not novel

00:52:33 --> 00:52:38
research at all right the magic is

00:52:36 --> 00:52:40
getting the design right so that you can

00:52:37 --> 00:52:41
do this in a reasonable way right and so

00:52:39 --> 00:52:44
there's a number of components that go

00:52:40 --> 00:52:46
into this one is when you're passing

00:52:43 --> 00:52:47
around so we're talking about Python and

00:52:45 --> 00:52:50
reference counting and the expense of

00:52:46 --> 00:52:51
doing that when you're passing values

00:52:49 --> 00:52:52
around you don't want to do extra

00:52:50 --> 00:52:54
reference counting for no good reason

00:52:51 --> 00:52:56
and so you have to make sure that you're

00:52:53 --> 00:52:58
fficient and you transfer ownership

00:52:55 --> 00:52:59
instead of duplicating references and

00:52:57 --> 00:53:03
things like that which is a very low

00:52:58 --> 00:53:04
level problem you also have to adopt

00:53:02 --> 00:53:07
his and you have to build these data

00:53:03 --> 00:53:08
structures and so if you say

00:53:06 --> 00:53:10
um you know Mojo has to be compatible

00:53:07 --> 00:53:12
with python so of course the default

00:53:09 --> 00:53:15
list is a reference semantic list that

00:53:11 --> 00:53:17
works the way you'd expect in Python but

00:53:14 --> 00:53:18
hen you have to design a value semantic

00:53:16 --> 00:53:20
list and so you just have to implement

00:53:17 --> 00:53:22
hat and then you implement the logic

00:53:19 --> 00:53:24
within and so the the role of the

00:53:21 --> 00:53:27
language here is to provide all the

00:53:23 --> 00:53:29
low-level hooks that allow the author of

00:53:26 --> 00:53:30
the type to be able to get and express

00:53:28 --> 00:53:33
this Behavior without forcing it into

00:53:29 --> 00:53:35
all cases or hard coding this into the

00:53:32 --> 00:53:36
language itself but there's a ownership

00:53:34 --> 00:53:38
So you you're constantly transferring

00:53:36 --> 00:53:39
you're tracking who owns the thing yes

00:53:37 --> 00:53:42
and so there's a whole system called

00:53:38 --> 00:53:44
ownership and so this is related to work

00:53:41 --> 00:53:46
done in the rust Community also the

00:53:43 --> 00:53:47
Swift community's done a bunch of work

00:53:45 --> 00:53:49
and there's a bunch of different other

00:53:46 --> 00:53:51
languages that have all kind of C plus

00:53:48 --> 00:53:53
actually has copy Constructors and

00:53:50 --> 00:53:55
estructors and things like that and so

00:53:52 --> 00:53:56
um and I mean single spell says

00:53:54 --> 00:53:58
everything so it has moved Constructors

00:53:55 --> 00:54:01
it has like this whole world of things

00:53:57 --> 00:54:03
and so this is uh this is a body of work

00:54:00 --> 00:54:05
that's kind of been developing for many

00:54:02 --> 00:54:06
years now and so Mojo takes some of

00:54:04 --> 00:54:08
the best

00:54:05 --> 00:54:11
ideas out of all these systems and

00:54:07 --> 00:54:12
remixes in a nice way so that you get

00:54:10 --> 00:54:15
he power of something like the rust

00:54:11 --> 00:54:16
programming language but you don't have

00:54:14 --> 00:54:18
to deal with it when you don't want to

00:54:15 --> 00:54:19
which is a major thing in terms of

00:54:17 --> 00:54:22
teaching and learning and being able to

00:54:18 --> 00:54:25
use and scale these systems uh how does

00:54:21 --> 00:54:26
that play with argument conventions what

00:54:24 --> 00:54:28
are they why are they important how does

00:54:25 --> 00:54:30
the value semantics how does the

00:54:27 --> 00:54:31
transfer ownership uh work with with the

00:54:29 --> 00:54:34
arguments when they're passing different

00:54:30 --> 00:54:36
yeah so so if you go deep into systems

00:54:33 --> 00:54:38
programming land so this isn't again

00:54:35 --> 00:54:39
this is not something for everybody but

00:54:37 --> 00:54:41
if you go deep into systems programming

00:54:38 --> 00:54:45
land what you encounters you encounter

00:54:40 --> 00:54:46
these types that get weird so if you're

00:54:44 --> 00:54:48
used to python you think about

00:54:45 --> 00:54:50
everything I could just copy it around I

00:54:47 --> 00:54:52
can go change it and mutate it and do

00:54:49 --> 00:54:54
these things and it's all cool

00:54:51 --> 00:54:56
um if you get into systems programming

00:54:53 --> 00:54:58
land you get into these things like I

00:54:55 --> 00:55:02
have an atomic number or I have a mutex

00:54:57 --> 00:55:05
or I have a uniquely owned database

00:55:01 --> 00:55:06
handle things like this right so these

00:55:04 --> 00:55:08
types you can't necessarily copy yeah

00:55:05 --> 00:55:10
sometimes you can't necessarily even

00:55:07 --> 00:55:12
move them to a different address

00:55:09 --> 00:55:14
and so what Mojo allows you to do is it

00:55:11 --> 00:55:17
allows you to express hey I don't want

00:55:13 --> 00:55:19
o get a copy of this thing I want to

00:55:16 --> 00:55:21
actually just get a reference to it and

00:55:18 --> 00:55:22
by doing that what you can say is you

00:55:20 --> 00:55:25
can say okay if I'm defining something

00:55:21 --> 00:55:28
weird like a atomic number or something

00:55:24 --> 00:55:30
it's like it has to be so it's an atomic

00:55:27 --> 00:55:32
number is a an area in memory that

00:55:29 --> 00:55:33
multiple threads can access at a time

00:55:31 --> 00:55:37
without synchronous without without

00:55:32 --> 00:55:39
locks right and so uh and so like the

00:55:36 --> 00:55:40
definition of atomic number is multiple

00:55:38 --> 00:55:42
different things have to be poking it

00:55:39 --> 00:55:44
herefore they have to agree on where it

00:55:41 --> 00:55:46
is right so you can't just like move it

00:55:43 --> 00:55:48
up from underneath one because it kind

00:55:45 --> 00:55:49
of breaks what what it means and so

00:55:47 --> 00:55:51
that's that's an example of a type that

00:55:48 --> 00:55:53
you can't even you can't copy you can't

00:55:50 --> 00:55:55
move it like once you create it has to

00:55:52 --> 00:55:57
be where it was right now if you look at

00:55:54 --> 00:56:00
many other examples like a database

00:55:56 --> 00:56:03
handle right so okay well what happens

00:55:59 --> 00:56:04
how do you copy a database handle do you

00:56:02 --> 00:56:06
copy the whole database that's not

00:56:03 --> 00:56:09
something you necessarily want to do

00:56:05 --> 00:56:11
um the there's a lot of types like that

00:56:08 --> 00:56:13
where you want to be able to say that

00:56:10 --> 00:56:18
hey are uniquely owned and so there's

00:56:12 --> 00:56:20
always one of this thing and or if if I

00:56:17 --> 00:56:22
create a thing I don't copy it and so

00:56:19 --> 00:56:24
what Mojo allows you to do is it allows

00:56:21 --> 00:56:25
you to say hey I want to pass around a

00:56:23 --> 00:56:28
reference to this thing without copying

00:56:24 --> 00:56:30
it and so it has borrowed conventions so

00:56:27 --> 00:56:33
you can say you can use it but you don't

00:56:29 --> 00:56:35
get to change it you can pass it by

00:56:32 --> 00:56:37
mutable reference and so if you do that

00:56:34 --> 00:56:39
hen you can you get a reference to it

00:56:36 --> 00:56:41
but you can change it and so it manages

00:56:38 --> 00:56:43
all that kind of stuff so it's uh it's

00:56:40 --> 00:56:46
just a really nice implementation of

00:56:42 --> 00:56:48
like C plus plus has yeah uh you know

00:56:45 --> 00:56:50
the reference kinds of pointers yeah

00:56:47 --> 00:56:52
smart smart different different kinds of

00:56:49 --> 00:56:54
applications and smart pointers that you

00:56:51 --> 00:56:56
can uh explicitly Define this allows you

00:56:53 --> 00:56:58
but you're saying that's more like

00:56:55 --> 00:57:01
um the weird case versus the common case

00:56:57 --> 00:57:02
well it depends on where I mean I mean I

00:57:00 --> 00:57:04
don't I don't think I'm a normal person

00:57:01 --> 00:57:05
so yes I mean I'm not one to call other

00:57:03 --> 00:57:09
people weird yeah

00:57:04 --> 00:57:11
but the uh uh but you know if you talk

00:57:08 --> 00:57:12
to a normal python a typical python

00:57:10 --> 00:57:14
programmer you're typically not about

00:57:11 --> 00:57:15
his right this is a lower level of

00:57:13 --> 00:57:17
abstraction now if you talk to a C plus

00:57:14 --> 00:57:19
programmer certainly if you talk to

00:57:16 --> 00:57:21
a rust programmer again they're not

00:57:18 --> 00:57:22
weird they're delightful like these are

00:57:20 --> 00:57:24
all good people right

00:57:21 --> 00:57:25
um those those folks will think about

00:57:23 --> 00:57:27
all the time

00:57:24 --> 00:57:29
right and so I look at this as there's a

00:57:26 --> 00:57:31
spectrum between very deep low-level

00:57:28 --> 00:57:32
systems I'm going to go poke the bits

00:57:30 --> 00:57:35
and care about how they're laid out in

00:57:31 --> 00:57:36
memory all the way up to application and

00:57:34 --> 00:57:38
scripting and other things like this and

00:57:35 --> 00:57:40
so it's not that anybody's right or

00:57:37 --> 00:57:42
wrong it's about how do we build

00:57:39 --> 00:57:45
one system that scales

00:57:41 --> 00:57:47
by the way the the idea of an atomic

00:57:44 --> 00:57:51
number has been something that always

00:57:46 --> 00:57:56
brought me deep happiness because

00:57:50 --> 00:57:59
the flip side of that the the idea that

00:57:55 --> 00:58:00
hreads can just modify stuff

00:57:58 --> 00:58:03
um

00:57:59 --> 00:58:04
asynchronously it's the whole idea of

00:58:02 --> 00:58:06
concurrent programming is a source of

00:58:03 --> 00:58:09
infinite stress for me well so this is

00:58:06 --> 00:58:11
where you jump into

00:58:08 --> 00:58:13
um you know again you zoom out and get

00:58:10 --> 00:58:14
out of program languages or compilers

00:58:12 --> 00:58:17
and just look what the industry has done

00:58:13 --> 00:58:19
my mind is constantly blown by this

00:58:16 --> 00:58:22
right and you look at what you know

00:58:18 --> 00:58:23
Moore's Law Moore's law has this idea

00:58:21 --> 00:58:25
that like computers for a long time

00:58:22 --> 00:58:27
single thread performance just got

00:58:24 --> 00:58:28
faster and faster and faster and faster

00:58:26 --> 00:58:30
for free

00:58:27 --> 00:58:32
but then physics and other things

00:58:29 --> 00:58:34
intervened in power consumption like

00:58:31 --> 00:58:35
other things started to matter and so

00:58:33 --> 00:58:38
what ended up happening is we went from

00:58:34 --> 00:58:40
single Core computers to multi-core then

00:58:37 --> 00:58:42
we went to accelerators right this this

00:58:39 --> 00:58:46
trend towards specialization of Hardware

00:58:41 --> 00:58:48
is only going to continue and so for

00:58:45 --> 00:58:50
years us programming language nerds and

00:58:47 --> 00:58:52
compiler people have been saying okay

00:58:49 --> 00:58:54
well how do we tackle multi-core right

00:58:51 --> 00:58:55
for a while it was like multi-core is

00:58:53 --> 00:58:57
the future we have to get on top of this

00:58:54 --> 00:58:58
thing and then it was multi-cores to

00:58:56 --> 00:59:00
default what are we doing with this

00:58:57 --> 00:59:02
thing and that is like there's chips

00:58:59 --> 00:59:05
with hundreds of cores in them what

00:59:01 --> 00:59:08
happened right yeah and so

00:59:04 --> 00:59:09
I'm super inspired by the fact that you

00:59:07 --> 00:59:12
know in the face of this you know those

00:59:09 --> 00:59:14
machine learning people invented this

00:59:11 --> 00:59:16
idea of a tensor right and was it tensor

00:59:13 --> 00:59:19
a tensor is an

00:59:15 --> 00:59:21
like an arithmetic and algebraic concept

00:59:18 --> 00:59:25
it's like an abstraction around a

00:59:20 --> 00:59:26
gigantic paralyzable data set right and

00:59:24 --> 00:59:28
because of that and because of things

00:59:25 --> 00:59:31
like tensorflow and pytorch we're able

00:59:27 --> 00:59:33
to say okay we'll Express the math

00:59:30 --> 00:59:35
of the system this enables you to do

00:59:32 --> 00:59:37
automatic differentiations enables you

00:59:34 --> 00:59:39
do like all these cool things

00:59:36 --> 00:59:41
um and and it's it's an abstract

00:59:38 --> 00:59:42
representation well because you have

00:59:40 --> 00:59:44
that abstract representation you can now

00:59:42 --> 00:59:46
map it onto these parallel machines

00:59:43 --> 00:59:48
without having to

00:59:45 --> 00:59:49
um control okay put that right here put

00:59:47 --> 00:59:51
hat right there put that right there

00:59:48 --> 00:59:54
and this has enabled an explosion in

00:59:50 --> 00:59:56
terms of AI compute accelerators like

00:59:53 --> 00:59:59
all the stuff and so that's super super

00:59:55 --> 01:00:01
exciting what about the the deployment

00:59:58 --> 01:00:05
he execution across multiple machines

01:00:00 --> 01:00:07
o uh you write that the modular compute

01:00:04 --> 01:00:09
platform dynamically partitions models

01:00:06 --> 01:00:11
with billions of parameters and

01:00:08 --> 01:00:14
istributes their execution across

01:00:10 --> 01:00:16
multiple machines enabling unparalleled

01:00:13 --> 01:00:18
efficiency

01:00:15 --> 01:00:20
whether the use of unparalleled in that

01:00:17 --> 01:00:22
sentence anyway enabling unparalleled

01:00:19 --> 01:00:26
efficiency scale and reliability for the

01:00:21 --> 01:00:27
largest workloads so how do you do this

01:00:25 --> 01:00:30
um

01:00:26 --> 01:00:33
abstraction of uh distributed deployment

01:00:29 --> 01:00:34
of of a large models yeah so one of the

01:00:32 --> 01:00:36
really interesting

01:00:33 --> 01:00:38
um tensions so there's a whole bunch of

01:00:35 --> 01:00:40
stuff that goes into that I'll pick a

01:00:37 --> 01:00:42
random walkthrough uh if you if you go

01:00:39 --> 01:00:44
back and replay the history of machine

01:00:41 --> 01:00:45
learning right I mean the brief the

01:00:43 --> 01:00:47
brief most recent history of machine

01:00:44 --> 01:00:50
learning because this is as you know

01:00:46 --> 01:00:52
very deep I I knew Lex when he had an AI

01:00:49 --> 01:00:55
podcast yes

01:00:51 --> 01:00:58
right yeah

01:00:54 --> 01:00:59
so uh so if you look at just tensorflow

01:00:57 --> 01:01:01
and Pie George which is pretty recent

01:00:58 --> 01:01:04
history in the big picture right but

01:01:00 --> 01:01:07
ensorflow is all about graphs pie torch

01:01:03 --> 01:01:09
I think pretty unarguably ended up

01:01:06 --> 01:01:10
winning and why did It win mostly

01:01:08 --> 01:01:12
because of usability

01:01:09 --> 01:01:14
right and the usability of pie torches I

01:01:11 --> 01:01:16
think huge and I think again that's a

01:01:13 --> 01:01:19
huge Testament to the power of taking

01:01:15 --> 01:01:22
abstract theoretical technical Concepts

01:01:18 --> 01:01:24
and bring it to the masses right now the

01:01:21 --> 01:01:26
challenge with what the tensorflow

01:01:23 --> 01:01:29
versus the pie George

01:01:25 --> 01:01:31
design points was that tensorflows kind

01:01:28 --> 01:01:32
of difficult to use for researchers but

01:01:30 --> 01:01:33
it was actually pretty good for

01:01:31 --> 01:01:34
deployment

01:01:32 --> 01:01:36
pytorch is really good for researchers

01:01:33 --> 01:01:39
it kind of not super great for

01:01:35 --> 01:01:41
deployment right and so I think the we

01:01:38 --> 01:01:43
as an industry have been struggling and

01:01:40 --> 01:01:45
if you look at what deploying a machine

01:01:42 --> 01:01:47
learning model today means is that

01:01:44 --> 01:01:48
you'll have researchers who are I mean

01:01:46 --> 01:01:51
Wicked smart of course but they're

01:01:47 --> 01:01:54
Wicked smart at model architecture and

01:01:50 --> 01:01:56
ata and calculus and like all like

01:01:53 --> 01:01:57
they're Wicked Smart in various domains

01:01:55 --> 01:01:59
they don't want to know anything about

01:01:56 --> 01:02:01
he hardware deployment or C plus plus

01:01:58 --> 01:02:02
or things like this right and so what's

01:02:00 --> 01:02:04
happened is you get people who train the

01:02:01 --> 01:02:06
model they throw over throw it over the

01:02:03 --> 01:02:09
fence and they have people that try to

01:02:05 --> 01:02:12
deploy the model

01:02:08 --> 01:02:14
well every time you have a team a does X

01:02:11 --> 01:02:18
they throw it over the fence and team y

01:02:13 --> 01:02:20
does some Team B does y like you have a

01:02:17 --> 01:02:22
problem because of course it never works

01:02:19 --> 01:02:24
the first time and so you throw over the

01:02:21 --> 01:02:26
fence they figure out okay it's too slow

01:02:23 --> 01:02:30
it won't fit doesn't use the right

01:02:25 --> 01:02:32
operator the tool crashes whatever the

01:02:29 --> 01:02:33
problem is then they have to throw it

01:02:31 --> 01:02:35
back over the fence

01:02:32 --> 01:02:36
and every time you throw a thing over a

01:02:34 --> 01:02:38
fence it takes three weeks of project

01:02:36 --> 01:02:41
managers and meetings and things like

01:02:37 --> 01:02:42
this and so what we've seen today is

01:02:40 --> 01:02:45
getting models in production can take

01:02:41 --> 01:02:47
weeks or months like it's not atypical

01:02:44 --> 01:02:49
right I talk to lots of people and you

01:02:46 --> 01:02:51
talk about like VP of software some

01:02:48 --> 01:02:52
internet company trying to deploy a

01:02:50 --> 01:02:54
model and they're like why do I need a

01:02:51 --> 01:02:56
team of 45 people

01:02:53 --> 01:02:59
okay it's so easy to train a model why

01:02:55 --> 01:03:00
can't I deploy it right and if you

01:02:58 --> 01:03:03
dig into this

01:02:59 --> 01:03:05
every layer is problematic so if you

01:03:02 --> 01:03:07
look at the language piece I mean this

01:03:04 --> 01:03:08
tip of the iceberg it's a very

01:03:06 --> 01:03:10
exciting tip of the iceberg for folks

01:03:07 --> 01:03:12
but you've got python on one side and C

01:03:09 --> 01:03:14
plus plus on the other side python

01:03:11 --> 01:03:16
doesn't really deploy I mean it can

01:03:13 --> 01:03:18
theoretically technically in some cases

01:03:15 --> 01:03:19
but often a lot of production teams will

01:03:17 --> 01:03:21
want to get things out of python because

01:03:18 --> 01:03:23
they get their performance and control

01:03:20 --> 01:03:24
and whatever else so Mojo can help with

01:03:22 --> 01:03:27
at

01:03:23 --> 01:03:29
if you look at serving so you talk about

01:03:26 --> 01:03:31
gigantic models well a gigantic model

01:03:28 --> 01:03:33
won't fit on one machine

01:03:30 --> 01:03:35
right and so now you have this model

01:03:32 --> 01:03:37
it's written in Python it has to be

01:03:34 --> 01:03:39
Rewritten in C plus plus now it also has

01:03:36 --> 01:03:40
to be carved up so that half of it runs

01:03:38 --> 01:03:43
on one machine half of it runs on

01:03:39 --> 01:03:44
another machine or maybe it runs on 10

01:03:42 --> 01:03:46
machines

01:03:43 --> 01:03:49
well so now suddenly the complexity is

01:03:45 --> 01:03:50
exploding right and the reason for this

01:03:48 --> 01:03:53
that if you if you look into

01:03:49 --> 01:03:55
tensorflow pytorch these systems they

01:03:52 --> 01:03:57
weren't really designed for this world

01:03:54 --> 01:03:59
right they're designed for you know back

01:03:56 --> 01:04:01
in the day when we were starting and

01:03:58 --> 01:04:03
oing things where it was a different

01:04:00 --> 01:04:05
much simpler world like you want to run

01:04:02 --> 01:04:08
resnet 50 or some ancient model

01:04:04 --> 01:04:09
architecture like this it was just a it

01:04:07 --> 01:04:11
was a completely different world trained

01:04:08 --> 01:04:14
on one GPU exactly doing

01:04:11 --> 01:04:16
yeah now it's not right in the major

01:04:13 --> 01:04:17
breakthrough and

01:04:15 --> 01:04:18
um

01:04:16 --> 01:04:21
and the world has changed right and so

01:04:18 --> 01:04:22
now the challenge is that tensorflow Pi

01:04:20 --> 01:04:24
towards these systems they weren't

01:04:21 --> 01:04:26
actually designed for llm so like that

01:04:23 --> 01:04:28
was not that was not a thing and so what

01:04:25 --> 01:04:30
where tensile actually has amazing power

01:04:27 --> 01:04:32
in terms of scale and deployment and

01:04:29 --> 01:04:34
things like that and I think Google is

01:04:31 --> 01:04:35
I mean maybe not unmatched but they're

01:04:33 --> 01:04:38
like incredible in terms of their

01:04:34 --> 01:04:41
capabilities and gigantic scale

01:04:37 --> 01:04:43
um many researchers using pytorch right

01:04:40 --> 01:04:44
and so pytorch doesn't have those same

01:04:42 --> 01:04:46
capabilities and so what modular can do

01:04:43 --> 01:04:48
is it can help with that now if you take

01:04:45 --> 01:04:51
a step back and say like what is modular

01:04:47 --> 01:04:53
doing right so modular has like a

01:04:50 --> 01:04:55
bitter enemy they were fighting

01:04:52 --> 01:04:57
against in the industry and it's one of

01:04:54 --> 01:05:00
these things where everybody knows it

01:04:56 --> 01:05:04
but nobody is usually willing to talk

01:04:59 --> 01:05:06
about it the bitter enemy The Bitter

01:05:03 --> 01:05:07
thing that we have to destroy that we're

01:05:05 --> 01:05:08
all struggling with and it's like all

01:05:06 --> 01:05:10
around it's like fish can't see water

01:05:07 --> 01:05:12
it's complexity

01:05:09 --> 01:05:13
sure yes

01:05:11 --> 01:05:15
complexity right that was very

01:05:12 --> 01:05:18
philosophical

01:05:14 --> 01:05:20
and so if you look at it yes it is on

01:05:17 --> 01:05:21
the hardware side yes all these all

01:05:19 --> 01:05:23
these accelerators all these software

01:05:20 --> 01:05:25
Stacks that go with the accelerator all

01:05:22 --> 01:05:27
these like this massive complexity over

01:05:24 --> 01:05:29
there you look at

01:05:26 --> 01:05:31
what's happening on the modeling side

01:05:28 --> 01:05:32
massive amount of complexity like things

01:05:30 --> 01:05:34
are changing all the time people are

01:05:31 --> 01:05:35
inventing turns out the research is not

01:05:33 --> 01:05:36
done

01:05:34 --> 01:05:39
right and so people want to be able to

01:05:35 --> 01:05:40
move fast Transformers are amazing but

01:05:38 --> 01:05:42
here's a ton of diversity even within

01:05:39 --> 01:05:44
Transformers and what's the next

01:05:41 --> 01:05:47
Transformer right and you look into

01:05:43 --> 01:05:49
serving also huge amounts of complexity

01:05:46 --> 01:05:51
it turns out that all the cloud

01:05:48 --> 01:05:53
providers right have all their very

01:05:50 --> 01:05:54
weird but very cool hardware for

01:05:52 --> 01:05:56
networking all this kind of stuff and

01:05:53 --> 01:05:59
it's all very complicated people aren't

01:05:55 --> 01:06:01
using that you look at classical serving

01:05:58 --> 01:06:02
right there there's this whole world of

01:06:00 --> 01:06:04
people who know how to write high

01:06:01 --> 01:06:06
performance servers with zero copy

01:06:03 --> 01:06:09
networking and like all all this fancy

01:06:05 --> 01:06:11
uh asynchronous I O and like all these

01:06:08 --> 01:06:13
fancy things in the in in the serving

01:06:10 --> 01:06:15
Community very little that has pervaded

01:06:12 --> 01:06:17
into the machine learning world right

01:06:15 --> 01:06:19
and why is that well it's because again

01:06:16 --> 01:06:21
these systems have been built up over

01:06:18 --> 01:06:23
many years they they haven't been

01:06:20 --> 01:06:25
rethought there hasn't been a first

01:06:22 --> 01:06:27
principle's approach to this and so what

01:06:24 --> 01:06:29
modular is doing is we're saying okay

01:06:26 --> 01:06:32
we've built many of these things like so

01:06:28 --> 01:06:33
I've worked on tensorflow and tpus and

01:06:31 --> 01:06:36
things like that other folks on our team

01:06:32 --> 01:06:38
like are worked on pytorch core we've

01:06:35 --> 01:06:40
worked on onyx one time we've worked on

01:06:37 --> 01:06:42
many of these other systems and so the

01:06:39 --> 01:06:45
systems like the Apple accelerators and

01:06:42 --> 01:06:47
all that kind of stuff like our team is

01:06:44 --> 01:06:49
quite amazing and so one of the things

01:06:46 --> 01:06:51
that roughly everybody modular is grumpy

01:06:48 --> 01:06:53
about is that when you're working on one

01:06:50 --> 01:06:55
of these projects you have a first order

01:06:52 --> 01:06:57
goal

01:06:54 --> 01:06:59
get the hardware to work get the system

01:06:56 --> 01:07:01
to enable one more model get this

01:06:58 --> 01:07:03
product out the door enable the specific

01:07:00 --> 01:07:06
workload or make it solve this problem

01:07:02 --> 01:07:07
for this this product team right and

01:07:05 --> 01:07:09
nobody's been given a chance to actually

01:07:06 --> 01:07:10
do that step back and so we as an

01:07:08 --> 01:07:13
industry we didn't take two steps

01:07:09 --> 01:07:15
forward we took like 18 steps forward in

01:07:12 --> 01:07:16
terms of all this really cool technology

01:07:14 --> 01:07:18
across compilers and systems and

01:07:15 --> 01:07:19
runtimes and heterogeneous Computing

01:07:17 --> 01:07:22
like all this kind of stuff and like all

01:07:18 --> 01:07:24
this technology has been you know I

01:07:21 --> 01:07:26
wouldn't say uh beautifully designed but

01:07:23 --> 01:07:28
it's been proven in different quadrants

01:07:25 --> 01:07:32
like you know you look at Google with

01:07:27 --> 01:07:34
tpus massive huge exaflops of compute

01:07:31 --> 01:07:36
strapped together into machines that

01:07:33 --> 01:07:39
researchers are programming in Python in

01:07:35 --> 01:07:41
a notebook that's huge that's amazing

01:07:38 --> 01:07:42
that's incredible right it's incredible

01:07:40 --> 01:07:45
and so you look at the technology that

01:07:41 --> 01:07:46
goes into that and the the algorithms

01:07:44 --> 01:07:49
were actually quite General

01:07:45 --> 01:07:51
and so lots of other Hardware out there

01:07:48 --> 01:07:52
and lots of other teams out there don't

01:07:50 --> 01:07:55
have the sophistication or that maybe

01:07:51 --> 01:07:56
the the years working on it or the the

01:07:54 --> 01:07:58
budget or whatever that Google does

01:07:55 --> 01:08:00
right and so they should be getting

01:07:57 --> 01:08:01
access to same algorithms but they just

01:07:59 --> 01:08:03
don't have that right that's what

01:08:00 --> 01:08:06
modular's doing is we're saying

01:08:02 --> 01:08:08
cool this is not research anymore like

01:08:05 --> 01:08:09
we've we've built Auto tuning in many

01:08:07 --> 01:08:12
systems we've built programming

01:08:09 --> 01:08:13
languages right and so like have have

01:08:11 --> 01:08:15
you know implemented C plus plus I've

01:08:12 --> 01:08:17
implemented Swift I've implemented many

01:08:14 --> 01:08:21
of these things and so you know this

01:08:16 --> 01:08:23
it's hard but it's not research and you

01:08:20 --> 01:08:25
look at accelerators well we know

01:08:22 --> 01:08:26
there's a bunch of different weird kind

01:08:24 --> 01:08:28
of accelerators but they actually

01:08:25 --> 01:08:30
cluster together right and you look at

01:08:27 --> 01:08:32
gpus well there's a couple of major

01:08:29 --> 01:08:34
vendors of gpus and they maybe don't

01:08:31 --> 01:08:36
always get along but their architectures

01:08:33 --> 01:08:38
are very similar you look at CPUs CPUs

01:08:36 --> 01:08:40
are still super important for the

01:08:37 --> 01:08:42
deployment side of things you see new

01:08:39 --> 01:08:43
architectures coming out from all

01:08:41 --> 01:08:45
the cloud providers and things like this

01:08:42 --> 01:08:47
and they're all super important to the

01:08:44 --> 01:08:50
world right but they don't have the 30

01:08:46 --> 01:08:52
years of development that the entrenched

01:08:49 --> 01:08:54
people do right and so what modular can

01:08:51 --> 01:08:56
do is we're saying okay all this

01:08:53 --> 01:08:59
complexity like it's not it's not bad

01:08:55 --> 01:09:01
complexity it's actually Innovation

01:08:58 --> 01:09:04
right and so it's Innovation that's

01:09:00 --> 01:09:06
happening and it's for good reasons but

01:09:03 --> 01:09:08
I have sympathy for the poor software

01:09:05 --> 01:09:09
people right I mean again I'm a

01:09:07 --> 01:09:11
generally a software person too I love

01:09:08 --> 01:09:13
Hardware but software people want to

01:09:10 --> 01:09:16
build applications and products and

01:09:12 --> 01:09:18
solutions that scale over many years

01:09:15 --> 01:09:20
they don't want to build a solution for

01:09:17 --> 01:09:22
one generation of Hardware with one

01:09:19 --> 01:09:24
vendor's tools right and because of this

01:09:21 --> 01:09:26
they need something that scales with

01:09:23 --> 01:09:28
em they need something works on cloud

01:09:25 --> 01:09:30
and mobile

01:09:27 --> 01:09:31
right because you know their product

01:09:29 --> 01:09:33
manager said hey I wanted to be have

01:09:30 --> 01:09:35
lower latency and it's better for

01:09:32 --> 01:09:38
personalization or whatever they decide

01:09:34 --> 01:09:40
right products evolve and so the

01:09:37 --> 01:09:41
challenge with the machine learning

01:09:39 --> 01:09:43
technology and the infrastructure we

01:09:40 --> 01:09:45
have today in the industry is that it's

01:09:42 --> 01:09:46
all these Point Solutions

01:09:44 --> 01:09:48
and because there are all these Point

01:09:45 --> 01:09:49
Solutions it means that Azure product

01:09:47 --> 01:09:51
evolves you have to like switch

01:09:48 --> 01:09:53
different technology Stacks or switch to

01:09:50 --> 01:09:55
different vendor and what that does is

01:09:52 --> 01:09:57
that slows down progress

01:09:54 --> 01:10:01
o basically a lot of the things we've

01:09:57 --> 01:10:03
developed in those little uh silos for

01:10:00 --> 01:10:05
machine learning tasks you want to make

01:10:02 --> 01:10:06
that the first class citizen of a

01:10:04 --> 01:10:08
general purpose programming language

01:10:05 --> 01:10:10
they can then be compiled across all

01:10:07 --> 01:10:11
these kinds of Hardware well so it's not

01:10:09 --> 01:10:13
really about a programming language I

01:10:10 --> 01:10:15
mean the programming language is a

01:10:12 --> 01:10:17
component of the mission right and the

01:10:14 --> 01:10:18
mission is are not literal but our

01:10:16 --> 01:10:22
joking mission is to save the world from

01:10:18 --> 01:10:22
terrible AI software

01:10:21 --> 01:10:27
so so you know if you look at this

01:10:24 --> 01:10:29
Mission you need a syntax

01:10:26 --> 01:10:31
so that's so yeah she needed a

01:10:28 --> 01:10:32
programming language right and and like

01:10:30 --> 01:10:34
we wouldn't have to build the

01:10:31 --> 01:10:35
programming language if one existed

01:10:33 --> 01:10:37
right so if python was already good

01:10:34 --> 01:10:39
enough then cool we've just used it

01:10:36 --> 01:10:41
right we're not just doing very large

01:10:38 --> 01:10:43
scale expensive engineering projects for

01:10:40 --> 01:10:45
the sake of it like it's to solve a

01:10:42 --> 01:10:48
problem right it's also about

01:10:44 --> 01:10:51
um uh accelerators it's also about

01:10:47 --> 01:10:53
exotic numerics and B float 16 and

01:10:50 --> 01:10:54
Matrix multiplications and convolutions

01:10:52 --> 01:10:56
and like this this kind of stuff

01:10:53 --> 01:10:58
um within the stack there are things

01:10:55 --> 01:11:00
like uh kernel Fusion

01:10:57 --> 01:11:02
that's a esoteric but really important

01:10:59 --> 01:11:04
hing that leads to much better

01:11:01 --> 01:11:07
performance and much more general

01:11:03 --> 01:11:09
research hackability together

01:11:06 --> 01:11:11
ight and that that's enabled by the

01:11:08 --> 01:11:15
Asics that's enabled by certain Hardware

01:11:10 --> 01:11:17
so it's like where's the dance between

01:11:14 --> 01:11:18
um there's several questions here like

01:11:16 --> 01:11:21
how do you add a piece of Hardware to

01:11:17 --> 01:11:23
this deck yeah if a new piece like if I

01:11:20 --> 01:11:26
have this genius invention

01:11:22 --> 01:11:28
of a specialized accelerator yeah how do

01:11:25 --> 01:11:31
I add that to the module framework and

01:11:27 --> 01:11:34
also how does modular as a standard

01:11:30 --> 01:11:36
start to define the kind of

01:11:33 --> 01:11:38
Hardware that should be developed yeah

01:11:35 --> 01:11:41
so let me take a step back and talk

01:11:37 --> 01:11:43
about status quo okay yes and so um if

01:11:40 --> 01:11:46
you go back to tensorflow 1 Pi torch one

01:11:42 --> 01:11:48
the this kind of time frame

01:11:45 --> 01:11:49
um and these have all evolved and gotten

01:11:47 --> 01:11:52
way more complicated so let's go back to

01:11:48 --> 01:11:55
the the Glorious simple days right these

01:11:51 --> 01:11:57
things basically were CPUs and Cuda and

01:11:54 --> 01:11:59
so what you do is you say go do

01:11:56 --> 01:12:01
a dense layer and a dens layer has a

01:11:58 --> 01:12:03
matrix multiplication in it right and so

01:12:00 --> 01:12:06
when you say that you say go do this big

01:12:02 --> 01:12:09
operation of matrix multiplication and

01:12:05 --> 01:12:11
if it's on a GPU kick off Cuda kernel if

01:12:08 --> 01:12:13
it's on CPU go do

01:12:10 --> 01:12:16
like an Intel algorithm or something

01:12:12 --> 01:12:18
like that with the Intel mko okay now

01:12:15 --> 01:12:21
that's really cool if you're either in

01:12:17 --> 01:12:23
video or Intel right but then more

01:12:20 --> 01:12:25
Hardware comes in

01:12:22 --> 01:12:26
right and and on one access you have

01:12:24 --> 01:12:29
more Hardware coming in on the other

01:12:25 --> 01:12:31
hand you have an explosion of innovation

01:12:28 --> 01:12:33
in Ai and so what happened with both

01:12:30 --> 01:12:35
tensorflow and pytorch is that the

01:12:32 --> 01:12:37
xplosion of innovation in AI has led to

01:12:34 --> 01:12:39
it's not just about multiplication and

01:12:36 --> 01:12:41
convolution these things have now like 2

01:12:39 --> 01:12:43
000 different operators

01:12:40 --> 01:12:44
and on the other hand you have I don't

01:12:42 --> 01:12:46
know how many pieces of Hardware there

01:12:43 --> 01:12:48
are out there it's a lot

01:12:45 --> 01:12:50
it's it's not it's not even hundreds

01:12:47 --> 01:12:53
it's probably thousands okay and across

01:12:49 --> 01:12:54
all of Edge and across like all the

01:12:52 --> 01:12:57
different things that are used at scale

01:12:53 --> 01:12:59
yeah exactly I mean so it's not just

01:12:56 --> 01:13:01
like ai's everywhere yeah it's not a

01:12:58 --> 01:13:04
handful of TPU Alternatives correct it's

01:13:00 --> 01:13:06
every phone often with many

01:13:03 --> 01:13:10
different right chips inside of it from

01:13:05 --> 01:13:12
different vendors right like it's AI is

01:13:09 --> 01:13:14
everywhere it's a thing right why are

01:13:11 --> 01:13:15
they all making their own chips like

01:13:13 --> 01:13:16
what why is everybody making their own

01:13:14 --> 01:13:19
thing

01:13:15 --> 01:13:21
well so is that a good thing official so

01:13:18 --> 01:13:24
Chris's velocity on Hardware yeah right

01:13:20 --> 01:13:25
so My Philosophy is that there isn't one

01:13:23 --> 01:13:27
right solution

01:13:24 --> 01:13:29
right and so I think that again we're at

01:13:26 --> 01:13:31
he end of Moore's Law specialization

01:13:28 --> 01:13:35
happens yeah if you if you're building

01:13:30 --> 01:13:38
if you're training gpt5 you want some

01:13:34 --> 01:13:41
crazy super computer data center thingy

01:13:37 --> 01:13:43
if you're making a smart camera that

01:13:40 --> 01:13:44
runs on batteries you want something

01:13:42 --> 01:13:46
that looks very different

01:13:43 --> 01:13:47
if you're building a phone you want

01:13:45 --> 01:13:49
something looks very different if you

01:13:46 --> 01:13:51
have something like a laptop you want

01:13:48 --> 01:13:54
something that looks maybe similar but a

01:13:50 --> 01:13:56
different scale right and so AI ends up

01:13:53 --> 01:13:58
touching all of our Lives robotics right

01:13:55 --> 01:14:00
and like lots of different things and so

01:13:57 --> 01:14:02
as you look into this these have

01:13:59 --> 01:14:03
different Power envelopes there's

01:14:01 --> 01:14:05
different trade-offs in terms of the

01:14:02 --> 01:14:06
algorithms there's new Innovations and

01:14:04 --> 01:14:09
sparsity and other data formats and

01:14:05 --> 01:14:11
things like that and so uh Hardware

01:14:08 --> 01:14:12
Innovation I think is a really good

01:14:10 --> 01:14:14
thing right and what I'm interested in

01:14:11 --> 01:14:15
is unlocking that Innovation there's

01:14:13 --> 01:14:17
also like analog and Quantum and like

01:14:14 --> 01:14:20
all the the

01:14:16 --> 01:14:21
y're really weird stuff right and so

01:14:19 --> 01:14:23
if somebody can come up with a chip that

01:14:20 --> 01:14:25
uses analog Computing and it's 100x more

01:14:22 --> 01:14:28
power efficient think what that would

01:14:24 --> 01:14:30
mean in terms of the daily impact on the

01:14:27 --> 01:14:32
products we use that would be huge now

01:14:29 --> 01:14:35
if you're building an analog computer

01:14:31 --> 01:14:37
you may not be a compiler specialist

01:14:34 --> 01:14:39
right these are different skill sets

01:14:36 --> 01:14:41
right and so you can hire some compiler

01:14:38 --> 01:14:43
people if you're running a big company

01:14:40 --> 01:14:46
maybe but it turns out these are really

01:14:42 --> 01:14:48
uh like exotic new generation of

01:14:45 --> 01:14:50
compilers like this this is a different

01:14:47 --> 01:14:51
hing right and so if you if you take a

01:14:49 --> 01:14:54
step back out and come back to what is

01:14:50 --> 01:14:56
the status quo status quo is that

01:14:53 --> 01:14:58
if you're Intel or you're in video you

01:14:55 --> 01:15:00
can you keep up with the industry and

01:14:57 --> 01:15:02
you chase and okay there's 1900 now

01:14:59 --> 01:15:04
there's 2 000 now there's 2100 and you

01:15:01 --> 01:15:05
have a huge team of people that are like

01:15:03 --> 01:15:08
trying to keep up and tune and optimize

01:15:04 --> 01:15:09
and even when uh one of the big guys

01:15:07 --> 01:15:11
comes out with a new generation of their

01:15:08 --> 01:15:13
chip they have to go back and rewrite

01:15:10 --> 01:15:15
all these things right so really it's

01:15:12 --> 01:15:17
only powered by having hundreds of

01:15:14 --> 01:15:19
people they're all like frantically

01:15:16 --> 01:15:20
trying to keep up and what that does is

01:15:18 --> 01:15:22
that keeps out the little guys

01:15:19 --> 01:15:24
and sometimes the not so little guys the

01:15:21 --> 01:15:27
big guys that are also just not not in

01:15:23 --> 01:15:29
those dominant positions and so

01:15:26 --> 01:15:31
um and so what has been happening and so

01:15:28 --> 01:15:33
a lot of you talk about the rise of new

01:15:30 --> 01:15:35
exotic crazy accelerators is people have

01:15:32 --> 01:15:37
been trying to turn this from uh let's

01:15:34 --> 01:15:39
go write lots of special kernels problem

01:15:36 --> 01:15:41
into a compiler problem

01:15:38 --> 01:15:44
and so we and I contributed to this as

01:15:40 --> 01:15:46
well we as an industry went into it like

01:15:43 --> 01:15:49
let's go make this compiler problem

01:15:45 --> 01:15:50
phase let's call it and much of the

01:15:48 --> 01:15:52
industry is still in this phase by the

01:15:49 --> 01:15:55
way so it's I won't say this phase is

01:15:51 --> 01:15:57
over and so the idea is to say look okay

01:15:54 --> 01:16:00
what a compiler does is it provides a

01:15:56 --> 01:16:03
much more General extensible

01:15:59 --> 01:16:06
uh hackable interface for dealing with

01:16:02 --> 01:16:09
e general case right and so

01:16:06 --> 01:16:11
um within machine learning algorithms

01:16:08 --> 01:16:13
for example people figured out that hey

01:16:10 --> 01:16:16
if I do a matrix multiplication and I do

01:16:12 --> 01:16:20
a relu right the classic activation

01:16:15 --> 01:16:22
function it is way faster to do one pass

01:16:19 --> 01:16:24
over the data and then do the relu on

01:16:21 --> 01:16:26
the output where I'm writing out the

01:16:23 --> 01:16:29
data because really is just a maximum

01:16:25 --> 01:16:32
operation right Max is zero and so

01:16:28 --> 01:16:34
it's an amazing optimization to take not

01:16:31 --> 01:16:36
more value squish together in one

01:16:33 --> 01:16:38
operation now we have Matt morelu

01:16:35 --> 01:16:40
well wait a second if I do that now I

01:16:37 --> 01:16:41
just went from having you know two

01:16:39 --> 01:16:43
perators to three

01:16:40 --> 01:16:45
but now I figure out okay well there's a

01:16:42 --> 01:16:48
lot of activation functions what about

01:16:44 --> 01:16:50
uh leaky rally what about like like a

01:16:47 --> 01:16:53
million things that are out there right

01:16:49 --> 01:16:54
and so as I start fusing these in now I

01:16:52 --> 01:16:56
get permutations of all these algorithms

01:16:54 --> 01:16:58
right and so what the compiler people

01:16:55 --> 01:16:59
said is they said hey cool well I will

01:16:57 --> 01:17:01
go enumerate all the algorithms and I

01:16:58 --> 01:17:03
will enumerate all the pairs and I will

01:17:00 --> 01:17:05
actually generate a kernel for you and I

01:17:02 --> 01:17:06
think that this has been very very

01:17:04 --> 01:17:09
useful for the industry this is one of

01:17:05 --> 01:17:11
the things that powers Google tpus uh

01:17:08 --> 01:17:13
pytorch twos like rolling out really

01:17:10 --> 01:17:14
cool compiler stuff with Triton this

01:17:12 --> 01:17:16
other technology and things like this

01:17:13 --> 01:17:18
and so the compiler people are kind of

01:17:15 --> 01:17:19
coming into their four and saying like

01:17:17 --> 01:17:21
awesome this is a competitive problem

01:17:18 --> 01:17:23
we'll compiler it

01:17:20 --> 01:17:25
here's the problem

01:17:22 --> 01:17:26
not everybody's compiler person I love

01:17:24 --> 01:17:28
compiler people trust me right but not

01:17:25 --> 01:17:30
everybody can or should be a compiler

01:17:27 --> 01:17:32
person it turns out that there are

01:17:29 --> 01:17:34
people that know analog computers really

01:17:31 --> 01:17:36
well or they know

01:17:33 --> 01:17:38
some GPU internal architecture thing

01:17:35 --> 01:17:40
really well or they know some crazy

01:17:37 --> 01:17:43
sparse numeric interesting algorithm

01:17:39 --> 01:17:45
that is the cusp of research but they're

01:17:42 --> 01:17:47
not compiler people and so one of the

01:17:44 --> 01:17:48
challenges with this new wave of

01:17:46 --> 01:17:49
Technology trying to turn everything

01:17:47 --> 01:17:52
into a compiler

01:17:48 --> 01:17:54
once again it's excluded a ton of people

01:17:51 --> 01:17:56
and so you look at what does mojo do

01:17:53 --> 01:17:58
what is the modular stack do it brings

01:17:55 --> 01:18:00
programmability back into this world

01:17:57 --> 01:18:03
like it enables I wouldn't say normal

01:18:00 --> 01:18:05
people but like a new you know different

01:18:02 --> 01:18:07
kind of delightful nerd that cares about

01:18:04 --> 01:18:08
numerics or cares about Hardware or

01:18:06 --> 01:18:10
cares about things like this to be able

01:18:07 --> 01:18:12
to express that in the stack and extend

01:18:09 --> 01:18:14
the stack without having to actually go

01:18:11 --> 01:18:17
hack the compiler itself to extend the

01:18:13 --> 01:18:19
stack on the on the algorithm side yeah

01:18:16 --> 01:18:21
and then on the hardware side yeah so

01:18:18 --> 01:18:23
again go back to like the simplest

01:18:20 --> 01:18:25
example of int right and so what both

01:18:22 --> 01:18:27
Swift and Mojo and other things like

01:18:24 --> 01:18:28
this did is we said okay pull magic out

01:18:26 --> 01:18:29
of the compiler and put it in the

01:18:27 --> 01:18:31
standard Library

01:18:28 --> 01:18:33
right so what modular is doing with the

01:18:30 --> 01:18:35
ngine that we're providing and like

01:18:32 --> 01:18:37
this this very deep technology stack

01:18:34 --> 01:18:39
right which goes into heterogeneous run

01:18:36 --> 01:18:41
times and like a whole bunch of really

01:18:38 --> 01:18:43
cool really cool things

01:18:40 --> 01:18:46
um this this whole stack allows that

01:18:42 --> 01:18:48
stack to be extended and hacked and

01:18:45 --> 01:18:50
changed by researchers and by Hardware

01:18:47 --> 01:18:53
innovators and by people who know things

01:18:49 --> 01:18:54
that we don't know because you know

01:18:52 --> 01:18:55
modular has some smart people but we

01:18:53 --> 01:18:58
don't have all the smart people it turns

01:18:54 --> 01:19:01
out right uh what are heterogeneous

01:18:57 --> 01:19:03
runtimes yeah so uh so what is

01:19:00 --> 01:19:04
heterogeneous right so heterogeneous

01:19:02 --> 01:19:07
just means many different kinds of

01:19:03 --> 01:19:08
things together and so the simple

01:19:06 --> 01:19:11
st example you might come up with

01:19:07 --> 01:19:14
is a CPU and a GPU and so it's a simple

01:19:10 --> 01:19:16
heterogeneous computer to say I'll run

01:19:13 --> 01:19:18
my data loading and pre-processing and

01:19:15 --> 01:19:19
other algorithms on the CPU and then

01:19:17 --> 01:19:21
once I get it into the right shape I

01:19:18 --> 01:19:23
shove it into the GPU I do a lot of

01:19:20 --> 01:19:25
Matrix multiplications and convolutions

01:19:22 --> 01:19:27
and things like this and I get it back

01:19:24 --> 01:19:29
out and I do some reductions and

01:19:26 --> 01:19:31
summaries and they shove it across the

01:19:28 --> 01:19:34
wire to across the network to another

01:19:30 --> 01:19:36
machine right and so you've got now what

01:19:33 --> 01:19:39
are effectively two computers

01:19:35 --> 01:19:40
a CPU and a GPU talking to each other

01:19:38 --> 01:19:42
working together in a heterogeneous

01:19:39 --> 01:19:42
ystem

01:19:41 --> 01:19:45
um

01:19:42 --> 01:19:48
but that was 10 years ago

01:19:44 --> 01:19:51
kay you look at a modern cell phone

01:19:47 --> 01:19:52
you've got CPUs and

01:19:50 --> 01:19:54
they're not just CPUs there's like Big

01:19:51 --> 01:19:56
Dot little CPUs and so there's multiple

01:19:53 --> 01:19:57
different kinds of CPUs that are again

01:19:55 --> 01:20:00
working together they're multi-core

01:19:56 --> 01:20:03
you've got gpus you've got neural

01:19:59 --> 01:20:06
network accelerators you got dedicated

01:20:02 --> 01:20:07
Hardware blocks for for media so for

01:20:05 --> 01:20:09
video decode and jpeg code and things

01:20:06 --> 01:20:10
like this and so you've got this

01:20:08 --> 01:20:12
massively complicated system and this

01:20:09 --> 01:20:14
n't just cell phones every laptop

01:20:11 --> 01:20:16
these days is doing the same thing and

01:20:13 --> 01:20:17
all these blocks can run at the same

01:20:15 --> 01:20:19
time

01:20:16 --> 01:20:22
and need to be

01:20:18 --> 01:20:23
choreographed right and so again one of

01:20:21 --> 01:20:24
the cool things about machine learning

01:20:22 --> 01:20:26
is it's moving things to like data flow

01:20:23 --> 01:20:28
graphs and higher level of abstractions

01:20:25 --> 01:20:31
and tensors and these things that it

01:20:27 --> 01:20:33
doesn't specify here's how to do the

01:20:30 --> 01:20:34
algorithm it gives the system a lot more

01:20:32 --> 01:20:37
flexibility in terms of how to translate

01:20:33 --> 01:20:39
or map it or compile it onto the system

01:20:36 --> 01:20:41
that you have and so what you need you

01:20:38 --> 01:20:43
know at the bottom is part of the layer

01:20:40 --> 01:20:44
there is a way for all these devices to

01:20:42 --> 01:20:45
talk to each other

01:20:43 --> 01:20:48
and so this is one thing that you know

01:20:45 --> 01:20:51
I'm very passionate about I mean you

01:20:47 --> 01:20:52
know I'm a nerd but um but all these all

01:20:50 --> 01:20:55
these machines and all these systems are

01:20:51 --> 01:20:57
ffectively parallel computers running

01:20:54 --> 01:20:58
at the same time sending messages to

01:20:56 --> 01:21:01
each other and so they're all fully

01:20:57 --> 01:21:02
asynchronous well this is actually a

01:21:00 --> 01:21:05
small version of the same problem you

01:21:01 --> 01:21:06
have in a data center right in a data

01:21:04 --> 01:21:08
center you now have multiple different

01:21:05 --> 01:21:11
machines sometimes very specialized

01:21:07 --> 01:21:13
sometimes with gpus or tpus in OneNote

01:21:10 --> 01:21:15
and sometimes with disks and other nodes

01:21:12 --> 01:21:17
and so you get a much larger scale

01:21:14 --> 01:21:18
heterogeneous computer and so what ends

01:21:16 --> 01:21:21
up happening is you have this like

01:21:17 --> 01:21:23
multi-layer abstraction of hierarchical

01:21:20 --> 01:21:26
parallelism hierarchical

01:21:22 --> 01:21:28
asynchronous communication and making

01:21:25 --> 01:21:31
that again the enemy my enemy is

01:21:27 --> 01:21:33
complexity by getting that away from

01:21:30 --> 01:21:34
being different specialized systems at

01:21:32 --> 01:21:37
every different part of the stack and

01:21:33 --> 01:21:38
having more consistency and uniformity I

01:21:36 --> 01:21:40
think we can help lift the world and

01:21:37 --> 01:21:42
make it much simpler and actually get

01:21:39 --> 01:21:43
used but how do you leverage like the

01:21:41 --> 01:21:45
strengths of the different specialized

01:21:42 --> 01:21:48
systems so looking inside the smartphone

01:21:44 --> 01:21:49
yeah like there's there's what like I

01:21:47 --> 01:21:51
don't know five six computers

01:21:48 --> 01:21:52
essentially inside a smartphone uh how

01:21:50 --> 01:21:54
do you

01:21:51 --> 01:21:58
without

01:21:53 --> 01:22:00
Trying to minimize the explicit uh

01:21:57 --> 01:22:01
making it explicit which which computer

01:21:59 --> 01:22:03
is supposed to be used for which

01:22:00 --> 01:22:04
operation yeah so there's there's a

01:22:02 --> 01:22:06
pretty well known algorithm and what

01:22:03 --> 01:22:07
you're doing is you're looking at two

01:22:05 --> 01:22:09
factors you're looking at the factor

01:22:06 --> 01:22:11
of sending data from one thing to

01:22:08 --> 01:22:12
another right because it takes time to

01:22:10 --> 01:22:14
get it from that side of the chip to

01:22:11 --> 01:22:15
that side of the Chip and things like

01:22:13 --> 01:22:18
this and then you're looking at what is

01:22:14 --> 01:22:22
the time it takes to do an operation on

01:22:17 --> 01:22:24
a particular block so take CPUs CPUs are

01:22:21 --> 01:22:25
fully General they can do anything right

01:22:23 --> 01:22:27
but then you have a neural net

01:22:24 --> 01:22:29
accelerator that's really good at Matrix

01:22:26 --> 01:22:31
multiplications okay and so you say okay

01:22:28 --> 01:22:33
well if my workload is all Matrix

01:22:30 --> 01:22:35
multiplications I start up I send the

01:22:32 --> 01:22:37
data over the neural net thing it goes

01:22:34 --> 01:22:38
and does matrix multiplications when

01:22:36 --> 01:22:41
it's done it sends me back the result

01:22:37 --> 01:22:43
all is good right and so the simplest

01:22:40 --> 01:22:46
hing is just saying do Matrix do Matrix

01:22:42 --> 01:22:47
operations over there right but then you

01:22:45 --> 01:22:49
realize you get a little bit more

01:22:46 --> 01:22:51
complicated because you can do Matrix

01:22:48 --> 01:22:52
multiplications on a GPU you can do it

01:22:50 --> 01:22:54
on

01:22:51 --> 01:22:55
a neural net accelerator you can do it

01:22:53 --> 01:22:57
on CPU and they'll have different

01:22:54 --> 01:22:59
rade-offs and costs and it's not just

01:22:56 --> 01:23:02
matrix multiplication and so what you

01:22:58 --> 01:23:04
actually look at is you look at I have

01:23:01 --> 01:23:06
generally a graph of compute I want to

01:23:03 --> 01:23:09
do a partitioning I want to look at the

01:23:05 --> 01:23:10
communication the bisection bandwidth

01:23:08 --> 01:23:13
and like the overhead and the sending of

01:23:09 --> 01:23:15
all these different things and and build

01:23:12 --> 01:23:16
a model for this and then decide okay

01:23:14 --> 01:23:18
it's an optimization problem where do I

01:23:15 --> 01:23:20
want to place this compute

01:23:17 --> 01:23:23
this is the old school theoretical

01:23:19 --> 01:23:25
computer science problem of scheduling

01:23:22 --> 01:23:28
and then how does uh

01:23:24 --> 01:23:31
presumably it's possible to somehow

01:23:27 --> 01:23:34
magically include autogun into this

01:23:30 --> 01:23:36
absolutely so I mean in my opinion this

01:23:33 --> 01:23:38
an opinion this is not uh not

01:23:35 --> 01:23:40
everybody would agree with this but in

01:23:37 --> 01:23:42
my opinion the world benefits from

01:23:39 --> 01:23:44
simple and predictable systems at the

01:23:41 --> 01:23:46
bottom that you can control

01:23:43 --> 01:23:49
but then once you have a predictable

01:23:45 --> 01:23:51
xecution layer you can build lots of

01:23:48 --> 01:23:53
different policies on top of it right

01:23:50 --> 01:23:56
and so one policy can be that

01:23:52 --> 01:23:58
he human programmer says do that here

01:23:55 --> 01:23:59
do that here do that here

01:23:57 --> 01:24:01
and like fully manually controls

01:23:58 --> 01:24:03
everything

01:24:00 --> 01:24:05
and the system should just do it right

01:24:02 --> 01:24:06
hen you quickly get in the mode of like

01:24:04 --> 01:24:09
I don't want to have to tell it to do it

01:24:05 --> 01:24:10
yeah and so the next logical step that

01:24:08 --> 01:24:13
people typically take because they write

01:24:09 --> 01:24:14
some terrible heuristic oh if it's

01:24:12 --> 01:24:16
amazing location do it over there or if

01:24:13 --> 01:24:17
it's floating Point dude on the GPU if

01:24:15 --> 01:24:20
it's integer due on the CPU like

01:24:16 --> 01:24:22
something like that right and and then

01:24:19 --> 01:24:23
you you then get into this mode of like

01:24:21 --> 01:24:25
people care more and more and more and

01:24:22 --> 01:24:28
you say okay well let's actually

01:24:24 --> 01:24:30
um like make your stick better let's get

01:24:27 --> 01:24:34
into auto tune let's actually do a

01:24:29 --> 01:24:37
search of the space to decide well what

01:24:33 --> 01:24:38
is actually better right well then you

01:24:36 --> 01:24:40
get into this problem where you realize

01:24:37 --> 01:24:41
this is not a small space this is a many

01:24:39 --> 01:24:44
dimensional

01:24:41 --> 01:24:46
hyperdimensional space that you cannot

01:24:43 --> 01:24:48
exhaustively search

01:24:45 --> 01:24:49
so do you know of any algorithms that

01:24:47 --> 01:24:51
are good at searching very complicated

01:24:48 --> 01:24:52
spaces for

01:24:50 --> 01:24:54
don't tell me you're going to turn this

01:24:51 --> 01:24:56
into a machine learning problem so then

01:24:53 --> 01:24:58
you turn into a machine learning problem

01:24:55 --> 01:24:59
and then you have a space of genetic

01:24:57 --> 01:25:01
algorithms and reinforcement learning

01:24:58 --> 01:25:03
and like all these all these what can

01:25:00 --> 01:25:06
you include that into the stack into the

01:25:02 --> 01:25:07
modulus that yeah yeah where

01:25:05 --> 01:25:09
does it sit where does it live is it

01:25:06 --> 01:25:11
separate thing or is it part of the

01:25:08 --> 01:25:13
compilation so you start from simple and

01:25:10 --> 01:25:15
predictable models and so you can have

01:25:12 --> 01:25:18
full control and you can have coarse

01:25:14 --> 01:25:20
grain knobs that like nudge system so

01:25:17 --> 01:25:22
you don't have to do this but if you

01:25:19 --> 01:25:23
really care about getting the best you

01:25:21 --> 01:25:26
know the last ounce out of a problem

01:25:22 --> 01:25:27
then you can use additional tools and

01:25:25 --> 01:25:29
they're the cool thing is you don't want

01:25:26 --> 01:25:30
o do this every time you run a model

01:25:28 --> 01:25:33
you want to figure out the right answer

01:25:29 --> 01:25:35
and then cache it and once you do that

01:25:32 --> 01:25:37
you can get you can say okay cool I can

01:25:34 --> 01:25:41
get up and running very quickly I can

01:25:36 --> 01:25:42
get good execution out of my system I

01:25:40 --> 01:25:44
can decide if something's important and

01:25:42 --> 01:25:45
if it's important I can go through a

01:25:43 --> 01:25:47
bunch of machines at it and do a big

01:25:44 --> 01:25:49
expensive search over the space using

01:25:46 --> 01:25:51
whatever technique I feel like it's

01:25:48 --> 01:25:52
further up to the problem and then when

01:25:50 --> 01:25:54
I get the right answer cool I can just

01:25:51 --> 01:25:56
art using it

01:25:53 --> 01:25:58
right and so you can get out of this um

01:25:55 --> 01:26:00
this trade-off between okay am I gonna

01:25:57 --> 01:26:02
like spend forever doing a thing or do I

01:25:59 --> 01:26:03
get up and running quickly and it's a

01:26:01 --> 01:26:05
quality result like these these are

01:26:02 --> 01:26:08
actually not In Contention with each

01:26:04 --> 01:26:10
other if the system's designed to scale

01:26:07 --> 01:26:13
you started and did a little bit of a

01:26:09 --> 01:26:18
whirlwind overview of how you get 35 000

01:26:12 --> 01:26:20
x uh speed up or more over python

01:26:18 --> 01:26:22
um Jeremy Howard did a really great

01:26:19 --> 01:26:24
presentation about sort of the basic

01:26:21 --> 01:26:25
like look at the code here's how you get

01:26:23 --> 01:26:27
he speed up like you said that's

01:26:24 --> 01:26:29
omething we could uh probably

01:26:26 --> 01:26:31
developers can do for their own code to

01:26:28 --> 01:26:33
see how you can get these gigantic

01:26:30 --> 01:26:35
Speedos but can you maybe speak to the

01:26:32 --> 01:26:36
machine learning task in general how do

01:26:34 --> 01:26:39
you how do you make some of this code

01:26:35 --> 01:26:42
fast and specifics like what would you

01:26:38 --> 01:26:46
say is the main bottleneck

01:26:41 --> 01:26:49
uh for uh machine learning tasks so are

01:26:45 --> 01:26:50
we talking about uh Matt Mall matrix

01:26:48 --> 01:26:53
multiplication how do you make that fast

01:26:49 --> 01:26:55
so I mean if you just look at the python

01:26:52 --> 01:26:56
problem right you can say how do I make

01:26:54 --> 01:26:58
python faster

01:26:55 --> 01:26:59
there's been a lot of people that have

01:26:57 --> 01:27:01
been working on the

01:26:58 --> 01:27:02
okay how to make python 2x faster 10xs

01:27:00 --> 01:27:04
or something like that right and there's

01:27:01 --> 01:27:07
been a ton of projects in that van right

01:27:03 --> 01:27:08
Mojo started from the what can the

01:27:06 --> 01:27:11
hardware do

01:27:07 --> 01:27:12
like what is the limit of physics yeah

01:27:10 --> 01:27:14
what is the speed of light what is it

01:27:11 --> 01:27:17
like how fast can the sun go and then

01:27:13 --> 01:27:18
how do I express that yeah right and so

01:27:16 --> 01:27:20
it wasn't well it wasn't anchored

01:27:17 --> 01:27:23
relatively on make python a little bit

01:27:19 --> 01:27:24
faster it's saying cool I know what the

01:27:22 --> 01:27:28
hardware can do let's unlock that right

01:27:23 --> 01:27:30
now when you when you just say how how

01:27:27 --> 01:27:31
gutsy that is to be in the meeting and

01:27:29 --> 01:27:33
as opposed to trying to see how do we

01:27:30 --> 01:27:34
get the Improvement it's like what can

01:27:32 --> 01:27:37
the physics do

01:27:33 --> 01:27:39
I mean maybe I'm a special kind of nerd

01:27:36 --> 01:27:41
but you look at that what is the limit

01:27:38 --> 01:27:42
of physics how fast can these things go

01:27:40 --> 01:27:44
right

01:27:41 --> 01:27:46
when you start looking at that typically

01:27:43 --> 01:27:49
it ends up being a memory problem right

01:27:45 --> 01:27:51
and so today uh particularly with these

01:27:48 --> 01:27:53
specialized accelerators the problem is

01:27:50 --> 01:27:56
that you can do a lot of math within

01:27:52 --> 01:27:58
them but you get bottleneck sending data

01:27:55 --> 01:28:01
back and forth to memory whether it be

01:27:57 --> 01:28:03
local memory or distant memory or disk

01:28:00 --> 01:28:05
or whatever it is and and that that

01:28:02 --> 01:28:07
bottleneck particularly is the training

01:28:04 --> 01:28:09
sizes get large as you start doing tons

01:28:06 --> 01:28:11
of inferences all over the place like

01:28:08 --> 01:28:12
that becomes a huge bottleneck for

01:28:10 --> 01:28:15
people right

01:28:11 --> 01:28:16
so again what happened is we went

01:28:14 --> 01:28:18
hrough a phase of many years where

01:28:15 --> 01:28:20
people took the special case and hand

01:28:17 --> 01:28:21
tuned it and tweaked it and tricked it

01:28:19 --> 01:28:22
out and they knew exactly how the

01:28:20 --> 01:28:24
hardware worked and they knew the model

01:28:21 --> 01:28:26
and they made it they made it fast

01:28:23 --> 01:28:28
didn't generalize

01:28:25 --> 01:28:30
and so you can make you know resting at

01:28:27 --> 01:28:32
50 or some or Alex net or something

01:28:29 --> 01:28:33
Inception V1 like you can you can do

01:28:31 --> 01:28:36
that right because the models are small

01:28:32 --> 01:28:38
they fit in your head right but as the

01:28:35 --> 01:28:40
models get bigger more complicated as

01:28:37 --> 01:28:42
the machines get more complicated it

01:28:39 --> 01:28:45
stops working right and so this is where

01:28:41 --> 01:28:47
things like kernel Fusion come in so

01:28:44 --> 01:28:49
what is Chrono Fusion this is this idea

01:28:46 --> 01:28:51
of saying let's avoid going to memory

01:28:48 --> 01:28:56
and let's do that by building a new

01:28:50 --> 01:28:59
hybrid kernel a numerical algorithm that

01:28:55 --> 01:29:00
actually keeps things in the accelerator

01:28:58 --> 01:29:02
instead of having to write all the way

01:28:59 --> 01:29:04
out to memory all right what's happened

01:29:01 --> 01:29:06
with with these accelerators now is you

01:29:03 --> 01:29:07
get multiple levels of memory like in a

01:29:05 --> 01:29:10
GPU for example you'll have Global

01:29:06 --> 01:29:11
memory and local memory and like all

01:29:09 --> 01:29:13
these things

01:29:10 --> 01:29:16
um if you zoom way into how Hardware

01:29:12 --> 01:29:17
works the register file is actually a

01:29:15 --> 01:29:19
memory

01:29:16 --> 01:29:22
so the registers are like an L zero

01:29:18 --> 01:29:25
cache and so a lot of taking advantage

01:29:21 --> 01:29:27
of the hardware ends up being fully

01:29:24 --> 01:29:30
utilizing the full power

01:29:26 --> 01:29:32
in all of its capability and this has a

01:29:29 --> 01:29:34
number of problems right one of which is

01:29:31 --> 01:29:36
again the complexity of disaster right

01:29:33 --> 01:29:39
here's too much Hardware even if you

01:29:35 --> 01:29:41
just say let's look at the chips from

01:29:38 --> 01:29:42
one line of vendor like apple or Intel

01:29:40 --> 01:29:45
or whatever it is

01:29:41 --> 01:29:46
each version of the chip comes out with

01:29:44 --> 01:29:48
new features and they change things so

01:29:45 --> 01:29:49
that it takes more time or less time to

01:29:47 --> 01:29:51
do different things and you can't

01:29:48 --> 01:29:53
rewrite all the software whenever a new

01:29:50 --> 01:29:54
chip comes out right and so this is

01:29:52 --> 01:29:57
where you need a much more scalable

01:29:54 --> 01:29:58
approach and this is what Mojo and what

01:29:56 --> 01:30:00
he modular stack provides is it

01:29:57 --> 01:30:02
provides this infrastructure and the

01:29:59 --> 01:30:04
system for factoring all this complexity

01:30:01 --> 01:30:06
and then allowing people to express

01:30:03 --> 01:30:08
algorithms you talk about Auto tuning

01:30:05 --> 01:30:11
for example Express algorithms in a more

01:30:07 --> 01:30:12
portable way so that when a new chip

01:30:10 --> 01:30:14
comes out you have to you don't have to

01:30:11 --> 01:30:16
rewrite it all

01:30:13 --> 01:30:18
so to me like you know I kind of joke

01:30:15 --> 01:30:21
like what is a compiler well there's

01:30:17 --> 01:30:23
many ways to explain that you convert

01:30:20 --> 01:30:25
hing a into thing B and you convert

01:30:22 --> 01:30:27
source code to machine code like you can

01:30:24 --> 01:30:29
talk about many many

01:30:26 --> 01:30:32
things that compilers do but to me it's

01:30:28 --> 01:30:34
about a bag of tricks it's about a

01:30:31 --> 01:30:37
system and a framework that you can hang

01:30:33 --> 01:30:39
complexity it's a system that can then

01:30:36 --> 01:30:40
generalize and it can work on problems

01:30:38 --> 01:30:44
that are bigger than fit in one human's

01:30:39 --> 01:30:46
head right and so what that means what a

01:30:43 --> 01:30:48
good stack and what the modular stack

01:30:45 --> 01:30:50
provides is the ability to walk up to it

01:30:47 --> 01:30:52
with a new problem and it'll generally

01:30:49 --> 01:30:53
work quite well

01:30:51 --> 01:30:55
and that's something a lot of machine

01:30:52 --> 01:30:58
learning infrastructure and tools and

01:30:54 --> 01:30:59
Technologies don't have typical

01:30:57 --> 01:31:01
state-of-the-art today as you walk up

01:30:58 --> 01:31:02
articularly if you're deploying if you

01:31:00 --> 01:31:04
walk up with a new model you try to push

01:31:01 --> 01:31:06
it through the converter the converter

01:31:03 --> 01:31:06
crashes

01:31:05 --> 01:31:12
that's crazy the state of ml tooling

01:31:09 --> 01:31:15
today is not anything that a c

01:31:11 --> 01:31:17
programmer would ever accept right and

01:31:14 --> 01:31:18
it's always been this kind of flaky set

01:31:16 --> 01:31:21
of tooling that's never been integrated

01:31:17 --> 01:31:23
well and it's been uh never worked

01:31:20 --> 01:31:25
together and because it's not designed

01:31:22 --> 01:31:26
together it's built by different teams

01:31:24 --> 01:31:27
it's built by different Hardware vendors

01:31:25 --> 01:31:29
it's built by different systems it's

01:31:27 --> 01:31:30
built by different internet companies

01:31:28 --> 01:31:33
that are trying to solve their their

01:31:29 --> 01:31:35
problems right and so that means that we

01:31:32 --> 01:31:36
get this fragmented terrible mess of

01:31:34 --> 01:31:39
complexity

01:31:35 --> 01:31:41
so I mean the specifics of Emily Jeremy

01:31:38 --> 01:31:44
showed this uh there's the vectorize

01:31:40 --> 01:31:48
function which I guess is

01:31:43 --> 01:31:49
uh built in to the uh into Mojo does

01:31:47 --> 01:31:51
that vectorized as he showed is built

01:31:48 --> 01:31:53
into the library into the library

01:31:50 --> 01:31:55
instead of the library

01:31:52 --> 01:31:57
um vectorized paralyze

01:31:54 --> 01:31:59
which vectorizes more low-level

01:31:56 --> 01:32:01
paralyzes higher level there's the

01:31:58 --> 01:32:03
tiling thing which is how he

01:32:00 --> 01:32:06
demonstrated the um

01:32:02 --> 01:32:08
autotune I think so so think of think

01:32:05 --> 01:32:12
about this in like levels hierarchical

01:32:07 --> 01:32:13
evels of abstraction right and so it at

01:32:11 --> 01:32:15
he very if you zoom all the way into a

01:32:12 --> 01:32:17
compute problem you have one floating

01:32:14 --> 01:32:19
Point number right so then you say okay

01:32:16 --> 01:32:22
I want to be I can do things one at a

01:32:18 --> 01:32:24
time in an interpreter it's pretty slow

01:32:21 --> 01:32:27
right so I can get to doing one one at a

01:32:23 --> 01:32:30
time in a compiler I can see then I can

01:32:26 --> 01:32:32
get to doing four or eight or 16 at a

01:32:29 --> 01:32:33
time with vectors that's called

01:32:31 --> 01:32:35
vectorization

01:32:32 --> 01:32:36
then you can say hey I have a whole

01:32:34 --> 01:32:38
bunch of different

01:32:35 --> 01:32:40
you know what what a multi-core computer

01:32:37 --> 01:32:41
is is it's basically a bunch of

01:32:39 --> 01:32:43
computers

01:32:40 --> 01:32:44
right so they're all independent

01:32:42 --> 01:32:46
computers that can talk to each other

01:32:43 --> 01:32:48
and they share memory and so now what

01:32:45 --> 01:32:50
parallelized does it says okay run

01:32:47 --> 01:32:52
multiple instances this on different

01:32:49 --> 01:32:53
computers and now they can all work

01:32:51 --> 01:32:55
together on Chrome right and so what

01:32:52 --> 01:32:58
you're doing is you're saying keep going

01:32:54 --> 01:33:00
out to the next level out and and as you

01:32:57 --> 01:33:03
do that how do I take advantage of this

01:32:59 --> 01:33:05
o tiling is a memory optimization right

01:33:02 --> 01:33:07
it says okay let's make sure that we're

01:33:04 --> 01:33:09
keeping the data close to the compute

01:33:06 --> 01:33:11
part of the problem instead of sending

01:33:08 --> 01:33:14
it all back and forth through memory

01:33:10 --> 01:33:16
every every time I load a block and the

01:33:13 --> 01:33:18
size of the block size is is all that's

01:33:15 --> 01:33:20
how you get to the auto tune to make

01:33:17 --> 01:33:21
sure it's optimized yeah well so all of

01:33:19 --> 01:33:24
these The Details Matter so much to get

01:33:20 --> 01:33:25
good performance this is another funny

01:33:23 --> 01:33:27
thing about machine learning and high

01:33:24 --> 01:33:30
performance Computing that is very

01:33:26 --> 01:33:32
different than C compilers we all grew

01:33:29 --> 01:33:34
up grew up with where you know if you

01:33:31 --> 01:33:36
get a new version of GCC or new version

01:33:33 --> 01:33:38
of clang or something like that you know

01:33:35 --> 01:33:39
maybe something will go one percent

01:33:37 --> 01:33:42
faster

01:33:38 --> 01:33:44
ight and so compiler insurers will work

01:33:41 --> 01:33:46
really really really hard to get half a

01:33:43 --> 01:33:48
percent out of your C code something

01:33:45 --> 01:33:51
like that but when you're talking about

01:33:47 --> 01:33:53
an accelerator or an AI application or

01:33:50 --> 01:33:55
you're talking about these kinds of

01:33:52 --> 01:33:56
algorithms now these are things people

01:33:54 --> 01:33:57
used to write in Fortran for example

01:33:55 --> 01:33:59
right

01:33:56 --> 01:34:02
if you get it wrong it's not five

01:33:58 --> 01:34:05
percent or one percent it could be 2X or

01:34:01 --> 01:34:08
10x right if you think about it

01:34:04 --> 01:34:09
um you really want to make use of the

01:34:07 --> 01:34:11
full memory you have the cash for

01:34:08 --> 01:34:13
example but if you use too much space it

01:34:10 --> 01:34:14
doesn't fit in the cache now you're

01:34:12 --> 01:34:17
going to be thrashing all the way back

01:34:13 --> 01:34:20
out to main memory and these can be 2x

01:34:16 --> 01:34:21
10x Major Performance differences and so

01:34:19 --> 01:34:23
this is where getting these magic

01:34:20 --> 01:34:25
numbers and these things right is really

01:34:22 --> 01:34:27
actually quite important so you

01:34:24 --> 01:34:30
mentioned that moja is a superset of

01:34:27 --> 01:34:30
python

01:34:29 --> 01:34:34
can you run

01:34:31 --> 01:34:36
python code

01:34:33 --> 01:34:42
as if it's Mojo code

01:34:35 --> 01:34:44
yes yes so and so and this has two sides

01:34:41 --> 01:34:45
of it so Mojo's not done yet so I'll

01:34:43 --> 01:34:47
give you disclaimer mode it's not done

01:34:44 --> 01:34:49
yet but already we see people that take

01:34:46 --> 01:34:52
small pieces of python code move it over

01:34:48 --> 01:34:54
they don't change it and you can get 12x

01:34:51 --> 01:34:56
speedups like somebody's just tweeting

01:34:53 --> 01:34:58
about that yesterday which is pretty

01:34:55 --> 01:35:00
cool right and again interpreters

01:34:57 --> 01:35:03
compilers right and so without changing

01:34:59 --> 01:35:05
any code without also this is not with

01:35:02 --> 01:35:08
is is not jit compiling or do any

01:35:04 --> 01:35:10
thing fancy this is just basic stuff

01:35:07 --> 01:35:12
moving straight over now Mojo will

01:35:09 --> 01:35:13
continue to grow out and as it grows out

01:35:11 --> 01:35:15
it will have more and more and more

01:35:12 --> 01:35:17
features and our North Stars to be a

01:35:15 --> 01:35:18
full super set of python and so you can

01:35:16 --> 01:35:20
bring over

01:35:17 --> 01:35:22
basically arbitrary python code and have

01:35:19 --> 01:35:25
it just work and it may not always be

01:35:21 --> 01:35:27
12x faster but um but it should be at

01:35:24 --> 01:35:29
least as fast and way faster in many

01:35:26 --> 01:35:30
cases this is the goal right

01:35:28 --> 01:35:32
um

01:35:29 --> 01:35:34
now I'll take time to do that and python

01:35:31 --> 01:35:36
is a complicated language there's not

01:35:33 --> 01:35:38
just the obvious things but there's also

01:35:35 --> 01:35:40
non-obvious things that are complicated

01:35:37 --> 01:35:43
like we have to be able to talk to C

01:35:39 --> 01:35:45
python packages to talk to the C API and

01:35:42 --> 01:35:47
there's a bunch of there's a bunch of

01:35:44 --> 01:35:51
pieces so you have to I mean to make

01:35:46 --> 01:35:53
xplicit the obvious that may not be so

01:35:50 --> 01:35:54
bvious until you think about it so you

01:35:52 --> 01:35:57
know to run python code that means you

01:35:53 --> 01:36:00
have to run all the python packages and

01:35:56 --> 01:36:04
libraries yeah yeah so that means what

01:35:59 --> 01:36:07
's the relationship between Mojo and

01:36:03 --> 01:36:09
C python the The Interpreter that's

01:36:06 --> 01:36:11
presumably would be tasked with getting

01:36:08 --> 01:36:14
those packages to work yep so in the

01:36:10 --> 01:36:15
fullness of time Mojo will solve for all

01:36:13 --> 01:36:18
the problems and you'll be able to move

01:36:14 --> 01:36:20
python packages over and run them in

01:36:17 --> 01:36:23
Mojo without the C python without C

01:36:19 --> 01:36:25
python someday yeah right it's not today

01:36:22 --> 01:36:27
not someday and that'll be a beautiful

01:36:24 --> 01:36:28
day because then you'll get a whole

01:36:26 --> 01:36:30
bunch of advantages and you'll get

01:36:27 --> 01:36:31
massive speed ups and things like this

01:36:29 --> 01:36:33
but you can do that one at a time right

01:36:30 --> 01:36:35
you can move packages one exactly but

01:36:32 --> 01:36:37
we're not willing to wait for that

01:36:34 --> 01:36:40
python is too important the ecosystem is

01:36:36 --> 01:36:42
too broad uh we want to both be able to

01:36:39 --> 01:36:44
build Mojo out we also want to do it the

01:36:41 --> 01:36:46
right way without time like in without

01:36:43 --> 01:36:48
intense time pressure we're obviously

01:36:45 --> 01:36:49
moving fast but

01:36:47 --> 01:36:51
um and so what we do is we say okay well

01:36:48 --> 01:36:54
et's make it so you can import an

01:36:50 --> 01:36:56
arbitrary existing package

01:36:54 --> 01:36:58
arbitrary

01:36:55 --> 01:37:00
including like you write your own on

01:36:57 --> 01:37:01
your local disk or whatever it's not

01:36:59 --> 01:37:02
like a standard like an

01:37:00 --> 01:37:05
arbitrary package

01:37:01 --> 01:37:07
and import that using C python because C

01:37:04 --> 01:37:09
python already runs all the packages

01:37:06 --> 01:37:11
right and so what we do is we built an

01:37:08 --> 01:37:16
integration layer where we can actually

01:37:10 --> 01:37:17
use C python again I'm practical and to

01:37:15 --> 01:37:19
actually just load and use all the

01:37:16 --> 01:37:21
xisting packages as they are the

01:37:18 --> 01:37:22
downside of that is you don't get the

01:37:20 --> 01:37:24
benefits of Mojo for those packages

01:37:21 --> 01:37:27
right and so they'll run as fast as they

01:37:23 --> 01:37:29
do in the traditional C python way

01:37:26 --> 01:37:31
but what that does is that gives you an

01:37:28 --> 01:37:33
incremental migration path and so if you

01:37:30 --> 01:37:35
say hey cool well here's a you know the

01:37:32 --> 01:37:37
python ecosystem is vast I want all of

01:37:34 --> 01:37:39
it to just work but there's certain

01:37:36 --> 01:37:41
things that are really important and so

01:37:38 --> 01:37:43
if I if I'm doing weather forecasting or

01:37:40 --> 01:37:45
something well

01:37:42 --> 01:37:45
I want to be able to load all the data I

01:37:44 --> 01:37:47
want to be able to work with it and then

01:37:45 --> 01:37:49
I have my own crazy algorithm inside of

01:37:46 --> 01:37:51
it Well normally I'd write that in C

01:37:48 --> 01:37:52
plus plus

01:37:50 --> 01:37:54
if I can write in Mojo and have one

01:37:51 --> 01:37:56
system that scales well that's way

01:37:53 --> 01:37:58
easier to work with is it hard to do

01:37:55 --> 01:38:01
that to to have that layer

01:37:57 --> 01:38:03
that's running C python because is there

01:38:00 --> 01:38:05
some communication back and forth yes

01:38:02 --> 01:38:08
it's complicated I mean this is what we

01:38:04 --> 01:38:10
do so I mean we make it look easy but um

01:38:07 --> 01:38:11
it is it is complicated but what we do

01:38:09 --> 01:38:14
is we use

01:38:10 --> 01:38:16
the C python existing interpreter so

01:38:13 --> 01:38:17
it's running its own byte codes and

01:38:15 --> 01:38:19
that's how it provides full

01:38:16 --> 01:38:22
compatibility and then it gives us C

01:38:18 --> 01:38:25
python objects and we use those objects

01:38:21 --> 01:38:27
as is and so that way we're fully

01:38:24 --> 01:38:30
compatible with all the C python objects

01:38:26 --> 01:38:32
and all the the you know it's not just

01:38:29 --> 01:38:34
he python part it's also the C packages

01:38:31 --> 01:38:36
the C libraries underneath them because

01:38:33 --> 01:38:37
they're often hybrid and so we can fully

01:38:35 --> 01:38:39
run and we're fully compatible with all

01:38:36 --> 01:38:41
that and the way we do that is that we

01:38:38 --> 01:38:43
have to play by the rules right and so

01:38:40 --> 01:38:44
we we keep objects in that

01:38:42 --> 01:38:46
representation when they're coming from

01:38:43 --> 01:38:48
that world what's the representation

01:38:45 --> 01:38:50
that's being used in memory you'd have

01:38:47 --> 01:38:53
to know a lot about how the C python

01:38:49 --> 01:38:55
interpreter works it has for example

01:38:52 --> 01:38:57
reference counting but also different

01:38:54 --> 01:38:59
rules on how to pass pointers around and

01:38:56 --> 01:39:02
things like this super low level fiddly

01:38:58 --> 01:39:04
and it's not like python it's like how

01:39:01 --> 01:39:06
The Interpreter works okay and so that

01:39:03 --> 01:39:08
gets all exposed out and then you have

01:39:05 --> 01:39:11
to Define wrappers around the low level

01:39:07 --> 01:39:13
C code right and so

01:39:10 --> 01:39:14
what this means is you have to know not

01:39:12 --> 01:39:16
only C

01:39:13 --> 01:39:19
which is a different world from python

01:39:15 --> 01:39:21
obviously not only python but the

01:39:18 --> 01:39:22
rappers but The Interpreter and the

01:39:20 --> 01:39:24
rappers and the implementation details

01:39:21 --> 01:39:26
and the conventions and it's just this

01:39:23 --> 01:39:28
really complicated mess and when you do

01:39:25 --> 01:39:30
that now suddenly you have a debugger

01:39:27 --> 01:39:31
that debugs python they can't step into

01:39:29 --> 01:39:33
C code

01:39:30 --> 01:39:36
right so you have this two world problem

01:39:32 --> 01:39:39
right and so by pulling this all into

01:39:35 --> 01:39:41
Mojo what you get is you get one world

01:39:38 --> 01:39:43
you get the ability to say cool I have

01:39:40 --> 01:39:45
untyped very Dynamic beautiful simple

01:39:42 --> 01:39:47
code

01:39:44 --> 01:39:48
okay I care about performance for

01:39:46 --> 01:39:50
whatever reason right there's lots of

01:39:47 --> 01:39:52
reasons you could you you might care and

01:39:49 --> 01:39:53
so then you add types you can

01:39:51 --> 01:39:55
parallelize things you can factorize

01:39:52 --> 01:39:57
things you can use these techniques

01:39:54 --> 01:39:59
which are General techniques to solve a

01:39:56 --> 01:40:02
problem and then you can do that by

01:39:58 --> 01:40:04
staying in the system and if you're uh

01:40:01 --> 01:40:05
you have that one python package it's

01:40:03 --> 01:40:07
really important to you you can move it

01:40:04 --> 01:40:09
o Mojo you get massive performance

01:40:06 --> 01:40:11
benefits on that and other other

01:40:08 --> 01:40:13
advantages you know if you like stack

01:40:10 --> 01:40:15
types it's nice if they're enforced

01:40:12 --> 01:40:16
some people like that right rather than

01:40:14 --> 01:40:18
being hints so there's other advantages

01:40:15 --> 01:40:19
too and then

01:40:17 --> 01:40:20
um

01:40:18 --> 01:40:23
and then you can do that incrementally

01:40:19 --> 01:40:26
as you go

01:40:22 --> 01:40:27
so one different perspective on this

01:40:25 --> 01:40:31
would be um

01:40:26 --> 01:40:34
why Mojo instead of making C python

01:40:30 --> 01:40:36
faster or redesigning C python yeah well

01:40:33 --> 01:40:39
I mean you can argue Mojo is redesigning

01:40:35 --> 01:40:41
C python but but uh but why not make C

01:40:38 --> 01:40:42
python faster and better and other

01:40:40 --> 01:40:44
things like that uh there's lots of

01:40:41 --> 01:40:46
people working on that so actually

01:40:43 --> 01:40:49
there's a team at Microsoft that is

01:40:45 --> 01:40:51
really improving I think C python

01:40:48 --> 01:40:54
3.11 came out in October or something

01:40:50 --> 01:40:57
like that and it was you know 15 faster

01:40:53 --> 01:40:59
20 faster across the board

01:40:56 --> 01:41:02
which is pretty huge given how mature

01:40:58 --> 01:41:04
python is and things like this and so

01:41:01 --> 01:41:08
um that's awesome I love it

01:41:03 --> 01:41:10
um doesn't run on GPU it doesn't do AI

01:41:07 --> 01:41:11
stuff like it doesn't do vectors doesn't

01:41:09 --> 01:41:15
do things

01:41:10 --> 01:41:17
um I'm 20 is good 35 000 times is better

01:41:14 --> 01:41:20
ight so like they're they're they're

01:41:16 --> 01:41:21
definitely I'm a huge fan of that work

01:41:19 --> 01:41:23
by the way and it composes well with

01:41:20 --> 01:41:24
what we're doing and so it's not it's

01:41:22 --> 01:41:26
not like we're fighting or anything like

01:41:23 --> 01:41:27
that it's actually just general it's

01:41:25 --> 01:41:30
goodness for the world but it's just a

01:41:26 --> 01:41:32
different path right and again we're not

01:41:29 --> 01:41:33
working forwards from making python a

01:41:31 --> 01:41:35
little bit better we're working

01:41:32 --> 01:41:38
backwards from what is the limit of

01:41:34 --> 01:41:40
physics what's the process of uh

01:41:37 --> 01:41:42
supporting python code to Mojo is there

01:41:39 --> 01:41:44
a

01:41:41 --> 01:41:47
what's involved in that in the process

01:41:43 --> 01:41:49
is there tooling for that not yet so um

01:41:46 --> 01:41:50
we're missing some basic features right

01:41:48 --> 01:41:53
now and so we're continuing to drop out

01:41:49 --> 01:41:56
new features like on a weekly basis but

01:41:52 --> 01:41:59
um you know at the fullness of time give

01:41:55 --> 01:42:02
us a year and a half maybe two years is

01:41:58 --> 01:42:04
it an automatable process so when we're

01:42:01 --> 01:42:06
ady it'll be very automatable yes is

01:42:03 --> 01:42:08
it automatable automate like is it

01:42:05 --> 01:42:11
possible to automate

01:42:07 --> 01:42:12
in the general case the python Mojo

01:42:10 --> 01:42:15
conversion yeah well you're saying it's

01:42:11 --> 01:42:18
possible well so and this is why I mean

01:42:14 --> 01:42:20
among other reasons why we use tabs yes

01:42:17 --> 01:42:22
right so first of all by being a

01:42:19 --> 01:42:24
superset yep you could it's like C

01:42:21 --> 01:42:26
versus C plus plus can you move C code

01:42:23 --> 01:42:29
to C plus plus

01:42:25 --> 01:42:32
yes yeah right and you move you you can

01:42:28 --> 01:42:34
move C code to C plus plus and uh then

01:42:31 --> 01:42:36
you can adopt classes you can add adopt

01:42:33 --> 01:42:38
emplates you can adopt other references

01:42:35 --> 01:42:40
or whatever C plus features you want

01:42:37 --> 01:42:43
after you move C to C code to C plus

01:42:39 --> 01:42:45
like you can't use templates in C

01:42:42 --> 01:42:47
right and so if you leave it a c fine

01:42:44 --> 01:42:48
you can't use the cool features but it

01:42:46 --> 01:42:50
still works right and C and C plus plus

01:42:48 --> 01:42:53
code work together and so that's the

01:42:49 --> 01:42:56
analogy right now

01:42:52 --> 01:42:59
um here right you you you

01:42:55 --> 01:43:00
there's not a python is bad and the Mojo

01:42:58 --> 01:43:02
is good

01:43:00 --> 01:43:04
right Mojo just gives you superpowers

01:43:01 --> 01:43:07
right and so if you want to stay with

01:43:03 --> 01:43:09
python that's cool uh but the tooling

01:43:06 --> 01:43:11
should be actually very beautiful and

01:43:08 --> 01:43:14
simple because we're doing the hard work

01:43:10 --> 01:43:16
of defining a superset right so you're

01:43:13 --> 01:43:18
right so there's several things to say

01:43:15 --> 01:43:20
there but also the conversion tooling

01:43:17 --> 01:43:21
should probably give you hints as to

01:43:19 --> 01:43:23
like how you can improve the code and

01:43:20 --> 01:43:24
then yeah exactly once you're in the new

01:43:22 --> 01:43:26
orld then you can build all kinds of

01:43:23 --> 01:43:28
cool tools to say like hey should you

01:43:25 --> 01:43:29
adopt this feature or like and we

01:43:27 --> 01:43:31
haven't built those tools yet but I

01:43:28 --> 01:43:32
fully expect those tools will exist and

01:43:30 --> 01:43:34
then you can like you know quote

01:43:31 --> 01:43:36
modernize your code or however you want

01:43:33 --> 01:43:37
o look at it right so I mean one of the

01:43:35 --> 01:43:39
things that I think is really

01:43:36 --> 01:43:41
interesting about Mojo is that there

01:43:38 --> 01:43:43
have been a lot of projects to improve

01:43:40 --> 01:43:45
python over the years

01:43:42 --> 01:43:47
um everything from you know getting

01:43:44 --> 01:43:49
python to run on the Java virtual

01:43:46 --> 01:43:51
machine uh Pi Pi which is the jit

01:43:48 --> 01:43:52
compiler there's tons of these projects

01:43:50 --> 01:43:55
out there that have been working on

01:43:51 --> 01:43:58
improving python in various ways

01:43:54 --> 01:44:00
they founded one or two camps so pipei

01:43:57 --> 01:44:02
s a great example of a camp that is

01:43:59 --> 01:44:04
trying to be compatible with python

01:44:01 --> 01:44:06
even there not really it doesn't work

01:44:03 --> 01:44:08
with all the C packages and stuff like

01:44:05 --> 01:44:09
that but um but they're trying to be

01:44:07 --> 01:44:11
compatible with python there's also

01:44:08 --> 01:44:12
another category of these things where

01:44:10 --> 01:44:14
they're saying well python is too

01:44:11 --> 01:44:16
complicated

01:44:13 --> 01:44:19
and you know I'm gonna cheat on the

01:44:15 --> 01:44:21
dges and it you know like integers in

01:44:18 --> 01:44:23
Python can be an arbitrary size integer

01:44:21 --> 01:44:25
like if you care about it fitting in a

01:44:22 --> 01:44:28
going fast on a register and a computer

01:44:24 --> 01:44:30
that's really annoying right and so you

01:44:27 --> 01:44:32
can you can choose to pass on that right

01:44:29 --> 01:44:34
you can say well people don't really use

01:44:31 --> 01:44:37
big integers that often therefore I'm

01:44:33 --> 01:44:40
gonna just not do it and it'll be fine

01:44:36 --> 01:44:42
not not a python superset or you can do

01:44:39 --> 01:44:43
the hard thing and say okay this is

01:44:41 --> 01:44:45
python

01:44:42 --> 01:44:46
you can't be a super set of python

01:44:44 --> 01:44:49
without

01:44:45 --> 01:44:51
being a super set of python and that's a

01:44:48 --> 01:44:53
really hard technical problem but it's

01:44:50 --> 01:44:56
in my opinion worth it right and it's

01:44:52 --> 01:44:57
worth it because it's not about any one

01:44:55 --> 01:44:59
package it's about this ecosystem it's

01:44:57 --> 01:45:01
about what python means for the world

01:44:58 --> 01:45:03
and it also means we don't want to

01:45:00 --> 01:45:05
repeat the python 2 to Python 3

01:45:02 --> 01:45:07
transition like we want we want people

01:45:04 --> 01:45:09
to be able to adopt this stuff quickly

01:45:06 --> 01:45:12
and so by doing that work we can help

01:45:08 --> 01:45:13
lift people yeah the challenge it's

01:45:11 --> 01:45:15
really interesting technical

01:45:12 --> 01:45:18
philosophical challenge of

01:45:14 --> 01:45:20
really making a language a superset of

01:45:17 --> 01:45:22
another language

01:45:19 --> 01:45:24
that's breaking my brain a little bit

01:45:21 --> 01:45:26
well it paints you in the corners so

01:45:23 --> 01:45:28
um again I'm very happy with python

01:45:25 --> 01:45:31
right so joking all joking aside I think

01:45:27 --> 01:45:33
that the indentation thing is not the

01:45:30 --> 01:45:36
actual important part of the problem yes

01:45:32 --> 01:45:37
right but the the fact that python has

01:45:35 --> 01:45:39
amazing Dynamic meta programming

01:45:36 --> 01:45:41
features and they translate to beautiful

01:45:38 --> 01:45:44
static meta programming features I think

01:45:40 --> 01:45:46
is profound I think that's huge right

01:45:43 --> 01:45:49
and so python I've talked with Guido

01:45:45 --> 01:45:51
about this it's it's like it was not

01:45:48 --> 01:45:52
designed to do what we're doing that was

01:45:50 --> 01:45:54
not the reason they built it this way

01:45:51 --> 01:45:55
but because they really cared and they

01:45:53 --> 01:45:57
were very thoughtful about how they

01:45:54 --> 01:45:59
designed the language it scales very

01:45:56 --> 01:46:01
elegantly in the space but if you look

01:45:58 --> 01:46:02
at other languages for example C and C

01:46:00 --> 01:46:05
plus plus

01:46:01 --> 01:46:08
right if you're building a superset you

01:46:04 --> 01:46:10
get stuck with the design decisions of

01:46:07 --> 01:46:13
the subset

01:46:09 --> 01:46:15
right and so you know C plus plus is way

01:46:12 --> 01:46:17
more complicated because of C in the

01:46:14 --> 01:46:19
Legacy than it would have been if they

01:46:16 --> 01:46:21
would have theoretically designed a from

01:46:18 --> 01:46:22
scratch thing

01:46:20 --> 01:46:24
and there's lots of people right now

01:46:21 --> 01:46:26
that are trying to make C plus plus

01:46:23 --> 01:46:27
better and recent tax C plus plus it's

01:46:25 --> 01:46:28
gonna be great we'll just change all the

01:46:26 --> 01:46:30
syntax

01:46:27 --> 01:46:32
uh but if you do that now suddenly you

01:46:29 --> 01:46:33
have zero packages

01:46:31 --> 01:46:36
o you don't have compatibility so what

01:46:32 --> 01:46:38
are the if you could just uh Linger

01:46:35 --> 01:46:40
on that what are the

01:46:37 --> 01:46:41
biggest challenges of keeping that

01:46:39 --> 01:46:43
superset status

01:46:40 --> 01:46:45
what are the things you're struggling

01:46:42 --> 01:46:46
with is it all boil down to having a big

01:46:44 --> 01:46:48
integer

01:46:45 --> 01:46:51
no I mean it's it's one of the other

01:46:47 --> 01:46:53
things usually it's the um it's a long

01:46:50 --> 01:46:55
tail weird things so let me give you a

01:46:52 --> 01:46:56
war story okay so War story in the space

01:46:54 --> 01:46:59
is

01:46:55 --> 01:47:02
um you go way back in time project I

01:46:58 --> 01:47:05
worked on is called clang clang what it

01:47:01 --> 01:47:08
is it's a cc plus plus parser right and

01:47:04 --> 01:47:11
when I start working on clang

01:47:07 --> 01:47:13
spent like 2006 or something was 2007 in

01:47:10 --> 01:47:14
2006 when I first started working on it

01:47:12 --> 01:47:17
right

01:47:13 --> 01:47:20
um it's funny how time flies yeah the uh

01:47:16 --> 01:47:23
I started that project and I'm like

01:47:19 --> 01:47:26
okay well I want to build a c parser C

01:47:22 --> 01:47:30
plus plus parser for lvm it's gonna be

01:47:25 --> 01:47:33
the work GCC is yucky you know this is

01:47:29 --> 01:47:34
mean earlier times it's yucky it's on

01:47:32 --> 01:47:37
principled it has all these weird

01:47:33 --> 01:47:39
features like all these bugs like

01:47:36 --> 01:47:42
it's yucky so I'm going to build a

01:47:38 --> 01:47:44
standard compliant C and C plus parser

01:47:41 --> 01:47:46
it's gonna be beautiful it'll be amazing

01:47:43 --> 01:47:47
well engineered all the cool things an

01:47:45 --> 01:47:49
engineer wants to do

01:47:46 --> 01:47:50
and so I started implementing building

01:47:48 --> 01:47:54
it out building on building out and then

01:47:49 --> 01:47:57
I got to include standardio.h

01:47:53 --> 01:47:59
and all of the headers in the world use

01:47:56 --> 01:48:02
all the GCC stuff

01:47:58 --> 01:48:03
okay this and so again come back away

01:48:01 --> 01:48:08
from

01:48:02 --> 01:48:09
Theory back to reality right I had I was

01:48:07 --> 01:48:12
in a fork on the road I could have built

01:48:09 --> 01:48:14
an amazingly beautiful academic thing

01:48:11 --> 01:48:17
that nobody would ever use

01:48:13 --> 01:48:20
or I could say well it's yucky in

01:48:16 --> 01:48:22
various ways all these design mistakes

01:48:19 --> 01:48:25
accents of History the Legacy at that

01:48:21 --> 01:48:28
point GCC was like over 20 years old

01:48:24 --> 01:48:30
which by the way yeah now lvm's over 20

01:48:27 --> 01:48:32
years old yeah that's funny how yeah

01:48:29 --> 01:48:35
time catches up to you right and so

01:48:31 --> 01:48:37
um you you say okay well what what is

01:48:34 --> 01:48:39
easier right I mean as an engineer it's

01:48:36 --> 01:48:42
actually much easier for me to go

01:48:38 --> 01:48:44
Implement long tail compatibility weird

01:48:41 --> 01:48:47
features even if they're distasteful and

01:48:43 --> 01:48:48
just do the hard work and like figure it

01:48:46 --> 01:48:50
out reverse engineer understand what it

01:48:47 --> 01:48:52
is write a bunch of test cases like try

01:48:49 --> 01:48:54
to understand Behavior

01:48:51 --> 01:48:56
it's way easier to do all that work as

01:48:53 --> 01:48:57
an engineer than it is to go talk to all

01:48:55 --> 01:48:59
C programmers and get argue with them

01:48:56 --> 01:49:00
and try to get them to rewrite their

01:48:58 --> 01:49:03
code yeah

01:48:59 --> 01:49:05
right and because that breaks a lot more

01:49:02 --> 01:49:07
things yeah and and you have realities

01:49:04 --> 01:49:09
like nobody actually even understands

01:49:06 --> 01:49:11
how the code works because it was

01:49:08 --> 01:49:14
written by the person who quit 10 years

01:49:10 --> 01:49:17
ago right and so this is this software

01:49:13 --> 01:49:20
has kind of frustrating that way but

01:49:16 --> 01:49:22
it's that's how the world works right

01:49:19 --> 01:49:24
yeah unfortunately it can never be this

01:49:21 --> 01:49:27
perfect beautiful thing well there there

01:49:23 --> 01:49:29
are occasions in which you get to build

01:49:26 --> 01:49:30
like you know you invent a new

01:49:28 --> 01:49:32
data structure or something like that or

01:49:29 --> 01:49:34
there's this beautiful algorithm that

01:49:31 --> 01:49:35
just like makes you super happy right I

01:49:33 --> 01:49:37
love that moment but but when you're

01:49:34 --> 01:49:39
working with people yeah and you're

01:49:36 --> 01:49:41
working with code and Dusty that code

01:49:38 --> 01:49:43
bases and things like this right

01:49:40 --> 01:49:45
it's not about what's theoretically

01:49:42 --> 01:49:46
beautiful it's about what's practical

01:49:44 --> 01:49:48
what's real what people will actually

01:49:45 --> 01:49:51
use and I don't meet a lot of people

01:49:47 --> 01:49:53
that say I want to rewrite all my code

01:49:50 --> 01:49:54
just for the sake of it

01:49:52 --> 01:49:56
by the way there could be interesting

01:49:53 --> 01:49:58
possibilities and we'll probably talk

01:49:55 --> 01:50:01
about it where AI can help rewrite some

01:49:57 --> 01:50:02
code that might be farther out future

01:50:00 --> 01:50:04
but it's a really interesting one how

01:50:01 --> 01:50:08
that could create more

01:50:03 --> 01:50:10
be a a tool in the battle against this

01:50:07 --> 01:50:12
monster of complexity that you mentioned

01:50:09 --> 01:50:15
yeah

01:50:11 --> 01:50:18
foreign Guido the the benevolent

01:50:14 --> 01:50:21
dictator for life of python what does he

01:50:17 --> 01:50:23
think about Mojo have you talk too much

01:50:20 --> 01:50:24
about it uh I have talked with him about

01:50:22 --> 01:50:26
it he found it very interesting

01:50:24 --> 01:50:28
um we actually talked with Guido before

01:50:25 --> 01:50:29
it launched and so he was aware of it

01:50:27 --> 01:50:31
before it went public

01:50:28 --> 01:50:32
um I have a ton of respect for Credo for

01:50:30 --> 01:50:36
a bunch of different reasons you talk

01:50:31 --> 01:50:38
about walrus operator and like Guido's

01:50:35 --> 01:50:41
pretty amazing in terms of

01:50:37 --> 01:50:43
steering such a huge and diverse

01:50:40 --> 01:50:43
community and and

01:50:42 --> 01:50:49
like driving forward and I think python

01:50:45 --> 01:50:52
is what it is thanks to him right and so

01:50:48 --> 01:50:54
to me it was really important starting

01:50:51 --> 01:50:56
to work on Mojo to get his feedback and

01:50:53 --> 01:50:58
get his input and get his eyes on this

01:50:55 --> 01:51:01
right now

01:50:57 --> 01:51:03
um a lot of what Guido was is wasn't as

01:51:00 --> 01:51:05
I think concerned about is how do we not

01:51:02 --> 01:51:06
fragment the community yeah we don't

01:51:04 --> 01:51:08
want to python to Python 3 thing like

01:51:05 --> 01:51:11
that was that was really painful for

01:51:07 --> 01:51:12
everybody involved and so we spent quite

01:51:10 --> 01:51:13
a bit of time talking about that and

01:51:11 --> 01:51:15
some of the tricks I learned from Swift

01:51:12 --> 01:51:18
for example so in the migration from

01:51:14 --> 01:51:19
Swift we managed to like not just

01:51:17 --> 01:51:21
convert

01:51:18 --> 01:51:24
Objective C into a slightly prettier

01:51:20 --> 01:51:27
Objective C which we did we then

01:51:23 --> 01:51:29
converted not entirely but almost an

01:51:26 --> 01:51:30
entire Community to completely different

01:51:28 --> 01:51:32
language

01:51:29 --> 01:51:34
right and so there's a bunch of tricks

01:51:31 --> 01:51:36
that you learn along the way that are

01:51:33 --> 01:51:38
directly relevant to what we do and so

01:51:35 --> 01:51:40
this is where for example the you

01:51:37 --> 01:51:42
leverage C python

01:51:39 --> 01:51:44
while bringing up the new thing like

01:51:41 --> 01:51:47
that that approach is I think proven and

01:51:43 --> 01:51:48
comes from experience and so Guido

01:51:46 --> 01:51:50
is very interested in like okay cool

01:51:48 --> 01:51:53
ike I think that python is really his

01:51:49 --> 01:51:55
legacy it's his baby I have ton tons of

01:51:52 --> 01:51:57
respect for that incidentally I see mojo

01:51:54 --> 01:51:58
as a member of the Python family I'm not

01:51:56 --> 01:52:01
rying to take python away from Guido

01:51:57 --> 01:52:03
and from the python Community

01:52:00 --> 01:52:05
um uh and so uh to me it's really

01:52:02 --> 01:52:07
important that we're a good member of

01:52:04 --> 01:52:09
that community and so yeah I think that

01:52:06 --> 01:52:11
again you would have to ask Guido this

01:52:08 --> 01:52:12
but I think that he was very interested

01:52:10 --> 01:52:14
in this notion of like

01:52:11 --> 01:52:16
cool but I think it's been up for being

01:52:13 --> 01:52:19
slow

01:52:15 --> 01:52:23
maybe there's a path out of that

01:52:18 --> 01:52:25
right and that you know if the future is

01:52:22 --> 01:52:28
python right I mean look look at the the

01:52:24 --> 01:52:30
far outside

01:52:27 --> 01:52:32
case on this right and I'm not saying

01:52:29 --> 01:52:34
this is Guido's perspective but you know

01:52:31 --> 01:52:36
there's this path of saying like Okay

01:52:33 --> 01:52:38
well suddenly python can suddenly go all

01:52:35 --> 01:52:39
the places it's never been able to go

01:52:37 --> 01:52:40
before

01:52:38 --> 01:52:42
right and that means the python can go

01:52:39 --> 01:52:45
even further and can have even more

01:52:41 --> 01:52:48
impact on the world so in some sense

01:52:44 --> 01:52:51
Mojo could be seen as python 4.0

01:52:48 --> 01:52:52
I would not say that I think that would

01:52:50 --> 01:52:55
rive a lot of people really crazy

01:52:51 --> 01:52:56
because of the PTSD of the 3.02. I'm

01:52:54 --> 01:52:59
willing to annoy people about emacs

01:52:55 --> 01:53:00
versus Bim versus spaces that's that one

01:52:58 --> 01:53:02
I don't know that might be a little bit

01:52:59 --> 01:53:04
far even for me like my my skin may not

01:53:01 --> 01:53:07
be that thick but the point is the step

01:53:03 --> 01:53:10
to it being a superset and allowing all

01:53:06 --> 01:53:12
these capabilities I think is the

01:53:09 --> 01:53:13
volution of a language it feels like an

01:53:11 --> 01:53:17
evolution of a language

01:53:12 --> 01:53:18
so he he's interested by the ideas that

01:53:16 --> 01:53:20
you're playing with but also concerned

01:53:17 --> 01:53:22
about the fragmentation so how what are

01:53:19 --> 01:53:23
the ideas you've learned what are you

01:53:21 --> 01:53:27
thinking about how do we avoid

01:53:22 --> 01:53:30
fragmenting the community where the the

01:53:26 --> 01:53:32
pythonistas and the

01:53:29 --> 01:53:35
uh I don't know what to call the Mojo

01:53:31 --> 01:53:38
people uh magicians The Magicians yeah I

01:53:34 --> 01:53:40
like it uh can coexist happily and and

01:53:37 --> 01:53:43
share a code and basically just have

01:53:39 --> 01:53:46
these big code bases that are using uh C

01:53:42 --> 01:53:48
Python and more and more moving towards

01:53:45 --> 01:53:50
Mojo well so again these are lessons I

01:53:47 --> 01:53:52
learned from Swift and and here we Face

01:53:49 --> 01:53:57
very similar problems right and Swift

01:53:51 --> 01:54:01
you have Objective C super Dynamic uh

01:53:56 --> 01:54:02
they're very different syntax right but

01:54:00 --> 01:54:06
you're talking to people who have large

01:54:01 --> 01:54:07
scale code bases I mean Apple's got the

01:54:05 --> 01:54:10
biggest largest scale code base of

01:54:06 --> 01:54:11
objective c code right and so you know

01:54:09 --> 01:54:13
none of the companies none of the iOS

01:54:10 --> 01:54:14
developers none of the other developers

01:54:12 --> 01:54:15
want to rewrite everything all at once

01:54:13 --> 01:54:18
and so you want to be able to adopt

01:54:14 --> 01:54:19
hings piece at a time and so a thing

01:54:17 --> 01:54:21
that I found that worked very well in

01:54:18 --> 01:54:23
the Swift Community was saying okay cool

01:54:20 --> 01:54:26
and this is when switch was very young

01:54:22 --> 01:54:28
as you say okay you have a million line

01:54:25 --> 01:54:30
of code Objective C app

01:54:27 --> 01:54:32
don't rewrite it all but when you

01:54:29 --> 01:54:34
implement a new feature go Implement

01:54:31 --> 01:54:37
hat new class

01:54:33 --> 01:54:40
using Swift right and so now this turns

01:54:36 --> 01:54:41
out is a very wonderful thing for an app

01:54:39 --> 01:54:43
developer

01:54:40 --> 01:54:45
but it's a huge challenge for this

01:54:42 --> 01:54:46
compiler team and the systems people

01:54:44 --> 01:54:48
that are implementing that's right and

01:54:45 --> 01:54:50
this comes back to what is this

01:54:47 --> 01:54:53
trade-off between doing the hard thing

01:54:49 --> 01:54:55
that enables scale versus doing the

01:54:52 --> 01:54:58
oretically pure and ideal thing right

01:54:54 --> 01:54:59
and so Swift adopted and built a lot of

01:54:57 --> 01:55:01
different Machinery to deeply integrate

01:54:58 --> 01:55:03
with the objective runtime and we're

01:55:00 --> 01:55:05
doing the same thing with python right

01:55:02 --> 01:55:06
now what what happened in the case with

01:55:04 --> 01:55:08
swift is that

01:55:05 --> 01:55:11
Swift as the language got more and more

01:55:07 --> 01:55:13
mature over time right and

01:55:10 --> 01:55:14
incidentally Mojo is a much simpler

01:55:12 --> 01:55:16
language than Swift in many ways and so

01:55:13 --> 01:55:17
I think that Mojo will develop way

01:55:15 --> 01:55:20
faster than Swift for a variety of

01:55:16 --> 01:55:21
reasons but as the language gets more

01:55:19 --> 01:55:24
mature in parallel with that you have

01:55:20 --> 01:55:26
new people starting new projects

01:55:23 --> 01:55:27
right and stuff when the language is

01:55:25 --> 01:55:28
mature and somebody's starting a new

01:55:26 --> 01:55:30
project that's when they say okay cool

01:55:27 --> 01:55:32
I'm not dealing with a million lines of

01:55:29 --> 01:55:34
code I'll just start and use the new

01:55:31 --> 01:55:36
thing for my whole stack now the problem

01:55:33 --> 01:55:38
is again you come back to where

01:55:35 --> 01:55:40
communities and we're

01:55:37 --> 01:55:42
people that work together you build new

01:55:39 --> 01:55:45
subsystem or a new feature or new thing

01:55:41 --> 01:55:48
in Swift or you build new thing in Mojo

01:55:45 --> 01:55:49
then you want to be end up being used on

01:55:47 --> 01:55:51
the other side

01:55:48 --> 01:55:53
right and so then you need to work on

01:55:50 --> 01:55:56
integration back the other way

01:55:52 --> 01:55:59
and so it's not just Mojo talking python

01:55:55 --> 01:56:00
it's also python talking to Mojo right

01:55:58 --> 01:56:02
and so what I would love to see and I

01:56:00 --> 01:56:03
don't want to see this next month right

01:56:01 --> 01:56:05
but what I want to see over the course

01:56:02 --> 01:56:07
of time is I would love to see people

01:56:04 --> 01:56:11
that are building these packages like

01:56:06 --> 01:56:13
you know numpy or uh you know tensorflow

01:56:10 --> 01:56:15
or what you know these packages that are

01:56:12 --> 01:56:18
half python half C plus plus

01:56:15 --> 01:56:21
and if you say okay cool I want to get

01:56:17 --> 01:56:23
out of this python C plus plus world

01:56:20 --> 01:56:24
into a unified role and so I can move to

01:56:22 --> 01:56:27
Mojo

01:56:23 --> 01:56:30
but I can't give up on my python clients

01:56:26 --> 01:56:31
because they're like these libraries get

01:56:29 --> 01:56:33
used by everybody and they're not all

01:56:30 --> 01:56:36
going to switch ever all you know all

01:56:32 --> 01:56:38
once and maybe never right well so the

01:56:35 --> 01:56:41
way we should do that is we should vend

01:56:37 --> 01:56:43
python interfaces to the Mojo types

01:56:40 --> 01:56:44
and that's what we did in Swift and

01:56:42 --> 01:56:46
we're great I mean it was a huge

01:56:43 --> 01:56:48
implementation challenge for the

01:56:45 --> 01:56:50
compiler people right but um there's

01:56:47 --> 01:56:52
only a dozen of those compiler people

01:56:49 --> 01:56:55
and there are millions of users and so

01:56:51 --> 01:56:58
it's a very expensive Capital intensive

01:56:54 --> 01:57:00
like skill set intensive problem but

01:56:57 --> 01:57:02
once you solve that problem it really

01:56:59 --> 01:57:03
helps adoption it really helps the

01:57:01 --> 01:57:05
community progressively adopt

01:57:02 --> 01:57:06
Technologies and so I think that this

01:57:04 --> 01:57:08
approach will work quite well with with

01:57:05 --> 01:57:11
e Python and the Mojo world so for a

01:57:07 --> 01:57:14
package ported to Mojo and then create a

01:57:10 --> 01:57:17
python interface yep

01:57:13 --> 01:57:20
so how do just the Linger on these

01:57:16 --> 01:57:22
packages numpy Pi torch and tensorflow

01:57:19 --> 01:57:25
yeah how do they play nicely together so

01:57:21 --> 01:57:27
is uh Mojo supposed to be let's talk

01:57:24 --> 01:57:30
about the machine learning ones

01:57:26 --> 01:57:33
is Mojo kind of vision to replace ply

01:57:30 --> 01:57:35
torture tensorflow uh to incorporate it

01:57:32 --> 01:57:38
what's what's the relationship in this

01:57:34 --> 01:57:41
all right so um dance so take a step

01:57:37 --> 01:57:44
back so I wear many hats so you're

01:57:40 --> 01:57:46
angling it on the Mojo side yes

01:57:43 --> 01:57:50
Mojo is a programming language and so it

01:57:45 --> 01:57:52
can help solve the C C plus plus python

01:57:49 --> 01:57:54
Feud that's happening the fire Emoji got

01:57:51 --> 01:57:56
me I'm sorry we should be talking about

01:57:53 --> 01:57:59
modular yes yes yes okay so the fire

01:57:55 --> 01:58:02
Emoji is amazing I love it uh it's it's

01:57:58 --> 01:58:04
a big deal the other side of this is the

01:58:01 --> 01:58:06
fire Emoji is in service of solving some

01:58:03 --> 01:58:09
big AI problems yes right and so the big

01:58:05 --> 01:58:12
AI problems are again this fragmentation

01:58:08 --> 01:58:14
this Hardware nightmare this uh this

01:58:11 --> 01:58:16
explosion of new potential but that's

01:58:13 --> 01:58:18
not getting felt by the industry right

01:58:15 --> 01:58:21
and so when you look at how does the

01:58:17 --> 01:58:23
modular engine help tensile and pytorch

01:58:20 --> 01:58:25
right it's not replacing them right in

01:58:22 --> 01:58:26
fact when I talk to the people again

01:58:24 --> 01:58:28
they don't like to rewrite all their

01:58:25 --> 01:58:30
code you have people that are using a

01:58:27 --> 01:58:32
bunch of high torch a bunch of

01:58:29 --> 01:58:33
tensorflow they have models that they've

01:58:31 --> 01:58:35
been building over the course of many

01:58:32 --> 01:58:37
ears right and when I talk to them

01:58:34 --> 01:58:39
there's a few exceptions but generally

01:58:36 --> 01:58:40
they don't want to rewrite all their

01:58:38 --> 01:58:41
code

01:58:39 --> 01:58:42
right and so what we're doing is we're

01:58:40 --> 01:58:44
saying okay well you don't have to

01:58:41 --> 01:58:46
rewrite all your code what happens is

01:58:43 --> 01:58:48
the modular engine goes in there and

01:58:45 --> 01:58:50
goes underneath tensorflow and Pi torch

01:58:47 --> 01:58:52
it's fully compatible and just provides

01:58:49 --> 01:58:53
better performance better predictability

01:58:51 --> 01:58:55
better tooling

01:58:52 --> 01:58:57
it's a better experience that helps lift

01:58:54 --> 01:58:59
ensorflow and pytorch and make them

01:58:56 --> 01:59:01
even better I love python I love

01:58:58 --> 01:59:03
tensorflow I love by torch right this is

01:59:00 --> 01:59:06
about making the world better because we

01:59:02 --> 01:59:08
need AI to go further but if I have a

01:59:05 --> 01:59:10
process that trains a model and have a

01:59:07 --> 01:59:13
process that performs inference on that

01:59:09 --> 01:59:15
model and have the model itself

01:59:12 --> 01:59:17
uh what should I do with that in the

01:59:14 --> 01:59:20
long Arc of History

01:59:16 --> 01:59:23
in terms of if I use Pi torch to train

01:59:19 --> 01:59:26
it should I rewrite stuff in Mojo would

01:59:22 --> 01:59:28
that if I care about performance well so

01:59:25 --> 01:59:30
I mean again it depends so if you care

01:59:27 --> 01:59:31
about performance then writing and mojos

01:59:29 --> 01:59:33
can be way better than writing in Python

01:59:30 --> 01:59:35
but if you look at

01:59:32 --> 01:59:37
um if you look at llm companies for

01:59:34 --> 01:59:38
example so you look at open AI rumored

01:59:36 --> 01:59:41
and you look at many of the other folks

01:59:37 --> 01:59:43
that are working on maybe these many of

01:59:40 --> 01:59:46
these LMS and other like Innovative

01:59:42 --> 01:59:47
machine learning models on the one hand

01:59:45 --> 01:59:49
they're innovating in the data

01:59:46 --> 01:59:51
collection and the model billions of

01:59:48 --> 01:59:55
parameters in the model architecture and

01:59:50 --> 01:59:56
the RL HF and the the like all these all

01:59:54 --> 01:59:57
the cool things that people are talking

01:59:55 --> 01:59:59
about

01:59:56 --> 02:00:02
but on the other hand they're spending a

01:59:58 --> 02:00:02
lot of time writing Cuda girls

02:00:02 --> 02:00:07
o you say wait a second how much faster

02:00:04 --> 02:00:08
could all this progress go if they were

02:00:06 --> 02:00:10
not having to handwrite all these Cuda

02:00:07 --> 02:00:11
kernels right and so there are a few

02:00:09 --> 02:00:13
technologies that are out there and

02:00:10 --> 02:00:14
people have been working on this problem

02:00:12 --> 02:00:16
for a while and

02:00:13 --> 02:00:17
um and they're trying to solve subsets

02:00:15 --> 02:00:19
the problem again kind of fragmenting

02:00:16 --> 02:00:21
the space and so what Mojo provides for

02:00:18 --> 02:00:24
these kinds of companies is the ability

02:00:20 --> 02:00:26
to say cool I can have a unifying Theory

02:00:23 --> 02:00:28
right again this the The Better Together

02:00:25 --> 02:00:30
the unifying Theory the the two world

02:00:27 --> 02:00:31
problem or the three world problem or

02:00:29 --> 02:00:33
the enrolled problem like this is the

02:00:30 --> 02:00:35
thing that is slowing people down and so

02:00:32 --> 02:00:37
as we help solve this problem I think

02:00:34 --> 02:00:39
it'll be very helpful for making this

02:00:36 --> 02:00:40
whole cycle go faster

02:00:38 --> 02:00:43
so obviously we've talked about the

02:00:39 --> 02:00:46
transition from Objective C to Swift if

02:00:42 --> 02:00:48
designed this uh programming language

02:00:45 --> 02:00:49
and you've also talked uh quite a bit

02:00:47 --> 02:00:53
about the use of Swift for machine

02:00:48 --> 02:00:57
learning uh context

02:00:52 --> 02:01:00
why have you decided to move away from

02:00:56 --> 02:01:02
uh maybe an intense focus on Swift for

02:00:59 --> 02:01:05
the machine learning context versus sort

02:01:01 --> 02:01:08
of Designing a new programming language

02:01:04 --> 02:01:10
that happens to be a superstar this is

02:01:07 --> 02:01:14
an irrational set of Life Choices I make

02:01:09 --> 02:01:17
I go to the desert and did you meditate

02:01:13 --> 02:01:19
on it okay all right no it was Bull it

02:01:16 --> 02:01:21
was bold and needed and I think uh I

02:01:18 --> 02:01:23
mean it's just bold and sometimes to

02:01:20 --> 02:01:25
take those leaps is a difficult leap to

02:01:22 --> 02:01:27
take yeah well so okay I mean I think

02:01:24 --> 02:01:29
there's a couple of different things so

02:01:26 --> 02:01:33
um actually I left apple back in 2017

02:01:28 --> 02:01:35
like January 2017. so it's been a number

02:01:32 --> 02:01:39
of years that I left apple and the

02:01:34 --> 02:01:39
reason I left Apple was to do AI

02:01:38 --> 02:01:45
okay so and again I won't comment on

02:01:41 --> 02:01:48
Apple and AI but the uh uh at the time

02:01:44 --> 02:01:49
right I want to get into and understand

02:01:47 --> 02:01:51
the technology understand

02:01:48 --> 02:01:53
the applications the workloads and so I

02:01:50 --> 02:01:55
was like okay I'm gonna go dive deep

02:01:52 --> 02:01:57
into applied and Ai and then the

02:01:54 --> 02:01:58
technology underneath it right

02:01:57 --> 02:02:00
um

02:01:57 --> 02:02:02
I found myself a Google

02:01:59 --> 02:02:04
and that was like when tpus were yep

02:02:01 --> 02:02:08
waking up exactly and so I found myself

02:02:03 --> 02:02:11
at Google and uh Jeff Dean who's a rock

02:02:07 --> 02:02:14
star as you know right and the and in

02:02:10 --> 02:02:16
2017 tens flow is like really taking off

02:02:13 --> 02:02:18
and doing incredible things and I was

02:02:15 --> 02:02:20
attracted to Google to help them with

02:02:17 --> 02:02:22
e tpus right and tpus are an

02:02:19 --> 02:02:24
Innovative Hardware accelerator platform

02:02:21 --> 02:02:26
uh have now I mean I think proven

02:02:23 --> 02:02:29
massive scale and like done incredible

02:02:25 --> 02:02:31
things right and so one of the things

02:02:28 --> 02:02:32
that this led into is a bunch of

02:02:30 --> 02:02:35
different projects which I'll skip over

02:02:31 --> 02:02:37
ight one of which was this Swift for

02:02:34 --> 02:02:39
tensorflow project right and so that

02:02:36 --> 02:02:42
project was a research project and so

02:02:39 --> 02:02:43
the idea of that is say okay well let's

02:02:41 --> 02:02:46
look at Innovative new programming

02:02:42 --> 02:02:47
models where we can get a fast

02:02:45 --> 02:02:49
programming language we can get

02:02:46 --> 02:02:51
automatic differentiation into the

02:02:48 --> 02:02:53
language let's push the boundaries of

02:02:50 --> 02:02:57
these things in a research setting right

02:02:52 --> 02:02:58
now that project I think lasted two

02:02:56 --> 02:03:00
three years there's some really cool

02:02:57 --> 02:03:02
outcomes of that so one of things that's

02:02:59 --> 02:03:06
really interesting is um

02:03:01 --> 02:03:08
I published a talk at an LM conference

02:03:05 --> 02:03:10
in 2018 again that seems like so long

02:03:07 --> 02:03:12
ago about graph program abstraction

02:03:09 --> 02:03:14
which is basically the thing that's in

02:03:11 --> 02:03:16
pytorch too

02:03:13 --> 02:03:17
and so Pi Torch 2 with all this Dynamo

02:03:15 --> 02:03:19
real thing it's all about this graph

02:03:16 --> 02:03:21
program abstraction thing from Python

02:03:18 --> 02:03:23
bytecodes and so a lot of the research

02:03:20 --> 02:03:25
that was done

02:03:22 --> 02:03:26
um ended up pursuing and going out

02:03:24 --> 02:03:28
hrough the industry and influencing

02:03:25 --> 02:03:29
things and I think it's super exciting

02:03:27 --> 02:03:31
and awesome to see that

02:03:28 --> 02:03:33
but the software testflow project itself

02:03:30 --> 02:03:34
did not work out super well and so

02:03:32 --> 02:03:37
there's a couple of different problems

02:03:33 --> 02:03:39
with that one of which is that you may

02:03:36 --> 02:03:42
have noticed Swift is not python

02:03:38 --> 02:03:45
there's a few people that write python

02:03:41 --> 02:03:47
code yes and so it turns out that all of

02:03:44 --> 02:03:49
ml is pretty happy with python it's

02:03:46 --> 02:03:51
actually a problem that other

02:03:48 --> 02:03:53
programming languages have as well that

02:03:50 --> 02:03:56
hey're not python well probably maybe

02:03:52 --> 02:03:57
briefly talk about Julia was a very

02:03:55 --> 02:03:59
interesting uh beautiful programming

02:03:56 --> 02:04:01
language but it's not python exactly

02:03:58 --> 02:04:03
well and so if and so like if you're

02:04:00 --> 02:04:05
saying I'm going to solve a machine

02:04:02 --> 02:04:07
learning problem where all the

02:04:04 --> 02:04:09
programmers are python Pro programmers

02:04:06 --> 02:04:10
yeah and you say the first thing you

02:04:08 --> 02:04:11
have to do is switch to a different

02:04:09 --> 02:04:13
language

02:04:10 --> 02:04:16
well your new thing may be good or bad

02:04:12 --> 02:04:19
or whatever but if it's a new thing the

02:04:15 --> 02:04:20
adoption barrier is massive it's still

02:04:18 --> 02:04:22
possible still possible yeah absolutely

02:04:19 --> 02:04:24
the world changes and evolves and

02:04:21 --> 02:04:25
there's definitely room for new new and

02:04:23 --> 02:04:28
good ideas but it just makes it so much

02:04:24 --> 02:04:30
arder right and so

02:04:27 --> 02:04:32
lesson learned Swift is not Python and

02:04:29 --> 02:04:33
people are not always in search of like

02:04:31 --> 02:04:35
learning a new thing for the sake of

02:04:32 --> 02:04:36
learning a new thing and if you want to

02:04:34 --> 02:04:38
be compatible with all the world's code

02:04:35 --> 02:04:41
turns out

02:04:37 --> 02:04:43
meet the world where it is right second

02:04:40 --> 02:04:45
thing is that

02:04:42 --> 02:04:47
um you know a lesson learned is that uh

02:04:44 --> 02:04:49
Swift as a very fast and efficient

02:04:46 --> 02:04:52
language kind of like Mojo but a

02:04:48 --> 02:04:52
different a different take on it still

02:04:51 --> 02:04:55
um

02:04:51 --> 02:04:57
really worked well with eager mode

02:04:54 --> 02:04:59
and so eager mode is something that

02:04:56 --> 02:05:02
pytorch does and it proved out really

02:04:58 --> 02:05:04
well and it enables really expressive

02:05:01 --> 02:05:06
and dynamic and easy to debug

02:05:03 --> 02:05:08
programming

02:05:05 --> 02:05:09
um tensorflow at the time was not set up

02:05:07 --> 02:05:11
for that

02:05:08 --> 02:05:13
let's say that was not the timing is

02:05:10 --> 02:05:14
also important in this world yeah yeah

02:05:12 --> 02:05:19
intensive flow is a good thing and it

02:05:13 --> 02:05:21
has many many strengths but uh

02:05:18 --> 02:05:22
you could say Swift potential is a good

02:05:20 --> 02:05:25
idea except for the Swift and except for

02:05:21 --> 02:05:27
the tensorflow part

02:05:24 --> 02:05:28
sell it because it's not Python and

02:05:26 --> 02:05:30
tensorflow because it's not it wasn't

02:05:27 --> 02:05:33
set up for eager mode at the time yeah

02:05:29 --> 02:05:35
it was 1.0 exactly yeah and so one of

02:05:32 --> 02:05:37
the so one of the things about that is

02:05:34 --> 02:05:38
in the context of it being a research

02:05:36 --> 02:05:40
project I'm very happy with the fact

02:05:37 --> 02:05:42
hat we built a lot of really cool

02:05:39 --> 02:05:44
technology we learned a lot of things I

02:05:42 --> 02:05:45
think the ideas went on to have

02:05:43 --> 02:05:47
influence and other systems like pytorch

02:05:44 --> 02:05:50
a few people use that right here right

02:05:46 --> 02:05:52
and so I think that's super cool and for

02:05:49 --> 02:05:53
me personally I learned so much from it

02:05:51 --> 02:05:55
right and I think a lot of the engineers

02:05:52 --> 02:05:57
that worked on it also learned a

02:05:54 --> 02:05:58
tremendous amount and so you know I

02:05:56 --> 02:06:00
think that

02:05:57 --> 02:06:01
um that's just really exciting to see

02:05:59 --> 02:06:03
and and you know I'm sorry that the

02:06:00 --> 02:06:05
project didn't work out I wish it did of

02:06:02 --> 02:06:08
course right but um

02:06:04 --> 02:06:09
uh but you know it's it's a research

02:06:07 --> 02:06:11
project and so you're there to learn

02:06:08 --> 02:06:12
from it but it's interesting to think

02:06:10 --> 02:06:16
about

02:06:11 --> 02:06:19
uh the evolution of programming

02:06:15 --> 02:06:21
as we come up with these whole new set

02:06:18 --> 02:06:23
of algorithms in machine learning in

02:06:21 --> 02:06:25
artificial intelligence and what's going

02:06:22 --> 02:06:28
to win out because it could be a new

02:06:24 --> 02:06:32
programming language yeah it could be

02:06:27 --> 02:06:33
um I mean we I just mentioned Julia I

02:06:31 --> 02:06:35
think there's a lot of ideas behind

02:06:32 --> 02:06:38
Julia that

02:06:34 --> 02:06:39
Mojo shares

02:06:37 --> 02:06:41
um what what are your thoughts about

02:06:38 --> 02:06:41
Julia in general

02:06:40 --> 02:06:43
um

02:06:40 --> 02:06:45
so I would I will have to say that

02:06:42 --> 02:06:47
when we launched Mojo the

02:06:45 --> 02:06:48
one of the biggest things I didn't

02:06:46 --> 02:06:51
predict was the response from the Julia

02:06:47 --> 02:06:53
community and so

02:06:50 --> 02:06:55
um I was not I mean I've okay let me

02:06:52 --> 02:06:57
take a step back I've known the Julia

02:06:54 --> 02:06:59
folks for a really long time they were

02:06:56 --> 02:07:01
they're an adopter of llvm a long time

02:06:58 --> 02:07:03
ago they've been pushing state of the

02:07:00 --> 02:07:05
art in a bunch of different ways Julie

02:07:02 --> 02:07:07
is a really cool system

02:07:04 --> 02:07:08
um I had always thought of Julia as

02:07:06 --> 02:07:11
being mostly a scientific Computing

02:07:07 --> 02:07:13
focused environment right and and I

02:07:10 --> 02:07:15
thought that was its focus

02:07:12 --> 02:07:17
um I neglected

02:07:14 --> 02:07:20
to understand that one of their missions

02:07:16 --> 02:07:23
is to like help make python work end to

02:07:19 --> 02:07:24
end and so I think that was my my error

02:07:22 --> 02:07:26
for not understanding that and so I

02:07:23 --> 02:07:28
could have been maybe more sensitive to

02:07:25 --> 02:07:30
that but um but there's major

02:07:27 --> 02:07:32
differences between what Mojo's doing

02:07:29 --> 02:07:33
what Julie is doing so as you say Julia

02:07:31 --> 02:07:36
is not python

02:07:32 --> 02:07:38
right and so one of the things that a

02:07:35 --> 02:07:40
lot of the Julia people came out and

02:07:37 --> 02:07:42
said is like okay well if we put a ton

02:07:39 --> 02:07:45
of more energy and ton more money or

02:07:41 --> 02:07:47
engineering or whatever into Julia maybe

02:07:44 --> 02:07:49
uh that would be better than starting

02:07:46 --> 02:07:51
Mojo right

02:07:48 --> 02:07:53
well I mean maybe that's true but it

02:07:50 --> 02:07:55
still wouldn't make Julian to python so

02:07:52 --> 02:07:57
if you've worked backwards from the goal

02:07:54 --> 02:07:59
of let's build something for python

02:07:56 --> 02:08:02
programmers without requiring them to

02:07:58 --> 02:08:04
relearn syntax

02:08:01 --> 02:08:06
then Julia just isn't

02:08:03 --> 02:08:09
here right I mean that's a different

02:08:05 --> 02:08:11
hing right and so if you anchor on I

02:08:08 --> 02:08:12
love Julia and I want Julia to go

02:08:10 --> 02:08:14
further then you can you can look at it

02:08:11 --> 02:08:16
from a different lens But the lens we

02:08:13 --> 02:08:18
re coming at it was hey everybody is

02:08:15 --> 02:08:20
using python python isn't syntax isn't

02:08:17 --> 02:08:22
broken let's take what's great about

02:08:19 --> 02:08:24
Python and make it even better and so

02:08:21 --> 02:08:25
it's just a different starting point so

02:08:23 --> 02:08:27
I think Julie is a great language the

02:08:24 --> 02:08:29
community is a lovely Community they're

02:08:26 --> 02:08:31
doing really cool stuff but it's just a

02:08:28 --> 02:08:33
different a slightly different angle

02:08:30 --> 02:08:36
but it does seem that python is quite

02:08:32 --> 02:08:38
sticky uh is there some

02:08:35 --> 02:08:41
uh philosophical almost thing you could

02:08:37 --> 02:08:42
say about why python by many measures

02:08:40 --> 02:08:44
eems to be the most popular programming

02:08:42 --> 02:08:46
language in the world well I can tell

02:08:43 --> 02:08:48
you things I love about it maybe that's

02:08:45 --> 02:08:50
one way to answer the question right so

02:08:47 --> 02:08:52
huge package ecosystem

02:08:49 --> 02:08:55
super lightweight and easy to integrate

02:08:51 --> 02:08:57
it has very low startup time

02:08:54 --> 02:08:59
right so what startup time you mean

02:08:56 --> 02:09:00
money curve or what yeah so if you if

02:08:58 --> 02:09:03
you look at certain other languages that

02:08:59 --> 02:09:05
you know you say like go and it just

02:09:02 --> 02:09:07
akes a like Java for example it takes a

02:09:04 --> 02:09:09
long time to compile all the things and

02:09:06 --> 02:09:10
then the the VM starts up and the

02:09:08 --> 02:09:12
garbage clusters kicks in and then it

02:09:09 --> 02:09:13
revs its engines and then it can plow

02:09:11 --> 02:09:14
through a lot of Internet stuff or

02:09:12 --> 02:09:17
whatever right

02:09:13 --> 02:09:19
um python is like scripting like it's it

02:09:16 --> 02:09:21
just goes right python has very low

02:09:18 --> 02:09:23
compile time like so you're not sitting

02:09:20 --> 02:09:25
there waiting python integrates into

02:09:22 --> 02:09:27
notebooks in a very elegant way that

02:09:24 --> 02:09:30
makes exploration super interactive and

02:09:26 --> 02:09:32
it's awesome right python is also um

02:09:29 --> 02:09:35
it's like almost the glue of computing

02:09:31 --> 02:09:37
because it has such a simple object

02:09:34 --> 02:09:39
representation a lot of things plug into

02:09:36 --> 02:09:41
it that Dynamic meta programming thing

02:09:38 --> 02:09:42
we were talking about also enables

02:09:40 --> 02:09:44
really expressive and beautiful apis

02:09:41 --> 02:09:46
right so there's lots of reasons that

02:09:43 --> 02:09:48
you can look at

02:09:45 --> 02:09:50
echnical things that python has done

02:09:47 --> 02:09:52
and say like okay well this is actually

02:09:49 --> 02:09:54
a pretty amazing thing and any one of

02:09:51 --> 02:09:56
those you can neglect people all just

02:09:53 --> 02:09:58
alk about indentation

02:09:55 --> 02:10:00
and ignore like the fundamental things

02:09:57 --> 02:10:02
but then you also look at the community

02:09:59 --> 02:10:03
side right so python owns machine

02:10:01 --> 02:10:05
learning

02:10:03 --> 02:10:07
machine learning is pretty big yeah and

02:10:04 --> 02:10:08
it's growing and it's growing right and

02:10:06 --> 02:10:10
it's growing in importance right and so

02:10:07 --> 02:10:13
and there's a reputation of prestige to

02:10:09 --> 02:10:14
machine learning to where like if you're

02:10:12 --> 02:10:17
a new programmer you're thinking about

02:10:13 --> 02:10:18
like which programming language do I use

02:10:16 --> 02:10:20
well I should probably care about

02:10:17 --> 02:10:22
machine learning therefore let me try

02:10:19 --> 02:10:24
Python and what kind of builds and

02:10:21 --> 02:10:28
builds a bit and even go go back before

02:10:23 --> 02:10:29
that like my kids Learn Python

02:10:27 --> 02:10:31
probably not because I'm telling them to

02:10:28 --> 02:10:33
Learn Python but because were they

02:10:30 --> 02:10:35
replying against you or what no no well

02:10:32 --> 02:10:37
they also learn scratch right and things

02:10:34 --> 02:10:38
like this too but it's because python is

02:10:36 --> 02:10:40
taught everywhere right because it's

02:10:37 --> 02:10:42
easy to learn right and because it's

02:10:39 --> 02:10:46
pervasive right and there's like my day

02:10:41 --> 02:10:49
we learned Java and C plus plus yeah but

02:10:45 --> 02:10:51
uphill both directions but yes I guess

02:10:48 --> 02:10:53
python is the main language of teaching

02:10:50 --> 02:10:54
software engineering schools now yeah

02:10:52 --> 02:10:57
well if you look at if you look at this

02:10:53 --> 02:10:59
there's these growth Cycles right if you

02:10:56 --> 02:11:01
look at what causes things to become

02:10:58 --> 02:11:04
popular and then gain in popularity

02:11:00 --> 02:11:05
there's reinforcing feedback loops and

02:11:03 --> 02:11:07
things like this and I think python has

02:11:04 --> 02:11:08
done again the whole Community has done

02:11:06 --> 02:11:10
a really good job of building those

02:11:07 --> 02:11:12
growth loops and help Propel the

02:11:09 --> 02:11:13
cosystem and I think that again you

02:11:11 --> 02:11:16
look at what you can get done with just

02:11:12 --> 02:11:18
a few lines of code it's amazing so this

02:11:15 --> 02:11:20
kind of self

02:11:17 --> 02:11:22
building Loop

02:11:19 --> 02:11:24
it's interesting to understand because

02:11:21 --> 02:11:26
when you look at Mojo what it stands for

02:11:23 --> 02:11:29
some of the features

02:11:25 --> 02:11:31
it seems sort of clear that this is a

02:11:28 --> 02:11:33
good direction for programming languages

02:11:30 --> 02:11:35
to evolve in the machine Learning

02:11:32 --> 02:11:38
Community but it's still not obvious

02:11:34 --> 02:11:40
that it will because of this

02:11:37 --> 02:11:42
whatever the engine of popularity of

02:11:39 --> 02:11:43
virality

02:11:41 --> 02:11:46
um is there something you could speak to

02:11:42 --> 02:11:48
like how how do you get people to switch

02:11:45 --> 02:11:50
Yeah well I mean I think that the the

02:11:47 --> 02:11:52
viral growth Loop is to switch

02:11:49 --> 02:11:53
people to Unicode yeah I think the

02:11:51 --> 02:11:55
Unicode file extensions are what I'm

02:11:52 --> 02:11:58
betting on I think that's going to be

02:11:54 --> 02:11:59
the thing yeah tell the kids that you

02:11:57 --> 02:12:01
could use the fire emojis exactly what

02:11:58 --> 02:12:04
exactly

02:12:00 --> 02:12:06
uh well in all seriousness like I mean I

02:12:03 --> 02:12:09
think there's really I'll give you two

02:12:05 --> 02:12:11
pposite answers one is

02:12:08 --> 02:12:13
I hope if it's useful if it solves

02:12:10 --> 02:12:14
problems and if people care about those

02:12:12 --> 02:12:16
problems being solved

02:12:13 --> 02:12:18
they'll adopt the tech

02:12:15 --> 02:12:20
right that's that's kind of the simple

02:12:17 --> 02:12:22
answer and when you're looking to get

02:12:19 --> 02:12:24
Tech adopted the question is is it

02:12:21 --> 02:12:27
solving an important problem people need

02:12:23 --> 02:12:29
solved and is the adoption cost low

02:12:26 --> 02:12:32
enough that they're willing to make the

02:12:28 --> 02:12:34
switch and cut over and do do the pain

02:12:31 --> 02:12:35
up front so they can actually do it

02:12:33 --> 02:12:37
right

02:12:34 --> 02:12:40
and so hopefully Mojo will be that for a

02:12:36 --> 02:12:41
bunch of people and you know people

02:12:39 --> 02:12:44
building these hybrid packages are

02:12:40 --> 02:12:45
suffering it's really painful and so I

02:12:43 --> 02:12:47
think that we have a good shot of

02:12:44 --> 02:12:48
helping people but the other side is

02:12:46 --> 02:12:50
like it's okay if people don't use Mojo

02:12:47 --> 02:12:52
like it's not my job to say like

02:12:49 --> 02:12:54
verybody should do this like I'm not

02:12:51 --> 02:12:55
saying python is bad like I hope python

02:12:53 --> 02:12:57
see python like all these

02:12:54 --> 02:12:59
implementations because python ecosystem

02:12:56 --> 02:13:00
is not just C python it's also a bunch

02:12:58 --> 02:13:02
of different implementations with

02:12:59 --> 02:13:05
different trade-offs and this ecosystem

02:13:01 --> 02:13:06
is really powerful and exciting

02:13:04 --> 02:13:08
um as are other programming languages

02:13:05 --> 02:13:11
it's not like typescript or something is

02:13:07 --> 02:13:13
going to go away right and so it's not a

02:13:10 --> 02:13:14
there's not a winner take all thing and

02:13:12 --> 02:13:16
so I hope that Mojo is exciting and

02:13:13 --> 02:13:19
useful to people but if it's not that's

02:13:15 --> 02:13:21
also fine but I also wonder what uh

02:13:18 --> 02:13:25
the use case

02:13:20 --> 02:13:28
for why you should try Mojo would be so

02:13:24 --> 02:13:31
practically speaking Yeah it seems like

02:13:27 --> 02:13:33
uh so there's entertainment there's a

02:13:30 --> 02:13:35
dopamine hit of saying holy this is

02:13:32 --> 02:13:37
10 times faster

02:13:34 --> 02:13:39
uh this little piece of code is 10 times

02:13:36 --> 02:13:42
faster in Mojo out of the box before you

02:13:39 --> 02:13:46
get to 35 000. exactly I mean just even

02:13:42 --> 02:13:48
that I mean that's the dopamine hit that

02:13:45 --> 02:13:51
uh every programmer sort of dreams of is

02:13:48 --> 02:13:55
uh the optimization it's it's also the

02:13:50 --> 02:13:57
drug that can uh pull you in and have

02:13:54 --> 02:13:59
you waste way too much of your life

02:13:56 --> 02:14:00
without optimizing and over optimizing

02:13:58 --> 02:14:03
right

02:13:59 --> 02:14:05
um but so what uh what do you see it

02:14:02 --> 02:14:07
would be like comedy is this very hard

02:14:04 --> 02:14:09
to predict of course but

02:14:06 --> 02:14:12
um you know if you look 10 years from

02:14:08 --> 02:14:13
now on Mojo's uh super successful what

02:14:11 --> 02:14:17
do you think would be the thing

02:14:12 --> 02:14:19
where people like try it and then use it

02:14:16 --> 02:14:20
regularly and it kind of grows and grows

02:14:18 --> 02:14:23
well let's say you talk about

02:14:19 --> 02:14:26
dopamine hit and so what again humans

02:14:22 --> 02:14:28
are not one thing and

02:14:25 --> 02:14:29
some people love rewriting their code

02:14:27 --> 02:14:30
and learning new things and throwing

02:14:28 --> 02:14:33
themselves in the deep end and trying

02:14:29 --> 02:14:34
out a new thing in my experience most

02:14:32 --> 02:14:36
people don't

02:14:33 --> 02:14:37
like they're too busy they have other

02:14:35 --> 02:14:40
things going on

02:14:36 --> 02:14:43
um by number most people don't want like

02:14:39 --> 02:14:44
this I want to rewrite all my code

02:14:42 --> 02:14:46
but

02:14:43 --> 02:14:48
even those people the two busy people

02:14:45 --> 02:14:50
the people that uh don't actually care

02:14:47 --> 02:14:52
about the language that just care about

02:14:49 --> 02:14:54
getting stuff done those people do like

02:14:51 --> 02:14:56
learning new things

02:14:53 --> 02:14:58
right and so you talk about the dopamine

02:14:55 --> 02:14:59
Rush of 10x faster wow that's cool I

02:14:57 --> 02:15:01
want to do that again well it's also

02:14:58 --> 02:15:03
like here's here's the thing I've heard

02:15:00 --> 02:15:04
about in a different domain and I don't

02:15:02 --> 02:15:06
have to write all my code I can learn a

02:15:03 --> 02:15:10
new trick right well that's called

02:15:06 --> 02:15:12
growth you know and so and so one thing

02:15:09 --> 02:15:13
that I think is cool about Mojo and

02:15:11 --> 02:15:16
again those will take a little bit of

02:15:12 --> 02:15:17
time for for example the blog posts and

02:15:15 --> 02:15:19
the books and like all that kind of

02:15:16 --> 02:15:21
stuff develop and the languages get

02:15:18 --> 02:15:23
further along but what we're doing you

02:15:20 --> 02:15:24
talk about types like you can say look

02:15:22 --> 02:15:27
you can start with the world you already

02:15:23 --> 02:15:28
know and you can progressively learn new

02:15:26 --> 02:15:29
things and adopt them where it makes

02:15:27 --> 02:15:31
ense

02:15:28 --> 02:15:33
if you never do that

02:15:30 --> 02:15:35
's cool you're not a bad person

02:15:32 --> 02:15:36
if you if you get really excited about

02:15:34 --> 02:15:38
and want to go all the way in the deep

02:15:35 --> 02:15:40
end and want to rewrite everything and

02:15:37 --> 02:15:42
like whatever that's cool right but I

02:15:39 --> 02:15:44
think the middle path is actually the

02:15:41 --> 02:15:47
more likely one where it's um you know

02:15:43 --> 02:15:48
you you come out with a new a new idea

02:15:46 --> 02:15:50
nd you discover wow that makes my code

02:15:48 --> 02:15:52
way simpler way more beautiful way

02:15:49 --> 02:15:55
faster way whatever and I think that's

02:15:51 --> 02:15:59
what people like now if you fast forward

02:15:54 --> 02:16:00
and you said like 10 years out right uh

02:15:58 --> 02:16:02
I can give you a very different answer

02:15:59 --> 02:16:03
on that which is I mean

02:16:01 --> 02:16:06
if you go back and look at what

02:16:02 --> 02:16:09
computers look like 20 years ago

02:16:05 --> 02:16:12
every 18 months they got faster for free

02:16:08 --> 02:16:13
right 2x faster every 18 months it was

02:16:11 --> 02:16:16
like clockwork it was it was free right

02:16:12 --> 02:16:17
you go back 10 years ago and we entered

02:16:15 --> 02:16:20
in this world where suddenly we had

02:16:16 --> 02:16:23
multi-core CPUs and we had gpus

02:16:19 --> 02:16:25
and if you squint and turn your head

02:16:22 --> 02:16:28
what a GPU is it's just a many core or

02:16:24 --> 02:16:29
very simple CPU thing kind of right and

02:16:27 --> 02:16:31
so

02:16:28 --> 02:16:34
um and 10 years ago it was CPUs and gpus

02:16:30 --> 02:16:34
and graphics

02:16:33 --> 02:16:41
today we have CPS gpus graphics

02:16:38 --> 02:16:43
and AI because it's so important because

02:16:40 --> 02:16:45
the compute is so demanding because of

02:16:42 --> 02:16:47
the smart cameras and the watches and

02:16:44 --> 02:16:50
all the different places the AI needs to

02:16:46 --> 02:16:51
work on our lives it's caused this

02:16:49 --> 02:16:53
explosion of hardware

02:16:50 --> 02:16:55
and so part of my thesis part of my

02:16:52 --> 02:16:57
belief of where Computing goes if you

02:16:54 --> 02:16:59
look out 10 years from now it's not

02:16:56 --> 02:17:00
going to get simpler

02:16:58 --> 02:17:02
physics isn't going back to where we

02:16:59 --> 02:17:05
came from it's only going to get weirder

02:17:01 --> 02:17:07
from here on out right and so to me the

02:17:04 --> 02:17:10
xciting part about what we're building

02:17:06 --> 02:17:13
is it's about building that Universal

02:17:09 --> 02:17:14
platform which the world can continue to

02:17:12 --> 02:17:17
get weird because again I don't think

02:17:13 --> 02:17:19
it's avoidable it's physics but we can

02:17:16 --> 02:17:20
help lift people's scale do things with

02:17:18 --> 02:17:21
it and they don't have to rewrite their

02:17:19 --> 02:17:23
code every time a new device comes out

02:17:20 --> 02:17:25
and I think that's pretty cool and so if

02:17:22 --> 02:17:27
Mojo can help with that problem then I

02:17:24 --> 02:17:29
think that it will be hopefully quite

02:17:26 --> 02:17:31
interesting and quite useful to a wide

02:17:28 --> 02:17:33
range of people because there's so much

02:17:30 --> 02:17:35
potential and like there's someone you

02:17:32 --> 02:17:36
know maybe analog computers will become

02:17:34 --> 02:17:39
a thing or something right and we need

02:17:36 --> 02:17:40
to be able to get into a mode where we

02:17:38 --> 02:17:42
can move this programming model forward

02:17:39 --> 02:17:45
but do so in a way where we're lifting

02:17:41 --> 02:17:46
people and and growing them instead of

02:17:44 --> 02:17:48
orcing them to write all their code and

02:17:45 --> 02:17:51
exploding them do you think there will

02:17:47 --> 02:17:53
be a few major libraries that go Mojo

02:17:50 --> 02:17:53
first

02:17:52 --> 02:17:59
uh well so I mean the modular engines

02:17:55 --> 02:18:00
all Mojo so I can't come back to like

02:17:58 --> 02:18:02
we're not building Mojo because it's fun

02:17:59 --> 02:18:04
we're building Mojo because we had to to

02:18:01 --> 02:18:05
solve these accelerators that's the

02:18:03 --> 02:18:07
origin story but I mean ones that are

02:18:04 --> 02:18:09
currently in Python yeah so I think that

02:18:06 --> 02:18:10
a number of these projects will and so

02:18:08 --> 02:18:12
ne one of the things again this is just

02:18:09 --> 02:18:14
my best guess like each of the package

02:18:11 --> 02:18:16
maintainers also has I'm sure plenty of

02:18:13 --> 02:18:17
other things going on people don't like

02:18:15 --> 02:18:19
really don't like rewriting code just

02:18:16 --> 02:18:22
for the sake of rewriting code

02:18:18 --> 02:18:25
um but sometimes like people are excited

02:18:21 --> 02:18:27
about like adopting a new idea yeah it

02:18:24 --> 02:18:29
urns out that while rewriting code is

02:18:26 --> 02:18:32
generally not People's First

02:18:28 --> 02:18:34
hing turns out that redesigning

02:18:31 --> 02:18:37
something while you rewrite it and using

02:18:33 --> 02:18:39
a rewrite as an excuse to redesign can

02:18:36 --> 02:18:43
lead to the 2.0 of your thing that's way

02:18:39 --> 02:18:45
better than the 1.0 right and so I have

02:18:42 --> 02:18:47
no idea I can't predict that but there's

02:18:44 --> 02:18:49
a lot of these places where again if you

02:18:46 --> 02:18:52
have a package that is half C and half

02:18:48 --> 02:18:53
python right it it just solve the pain

02:18:51 --> 02:18:55
make it easier to move things faster

02:18:52 --> 02:18:58
make it easier to debug and evolve your

02:18:54 --> 02:18:59
Tech adopting Mojo kind of makes sense

02:18:57 --> 02:19:01
to start with and then it gives you this

02:18:58 --> 02:19:04
opportunity to rethink these things so

02:19:00 --> 02:19:05
the two big gains are that the there's a

02:19:03 --> 02:19:07
performance gain

02:19:04 --> 02:19:08
and then

02:19:06 --> 02:19:10
um there's the

02:19:07 --> 02:19:13
portability to all kinds of different

02:19:09 --> 02:19:14
devices and their safety right so you

02:19:12 --> 02:19:16
talk about real types

02:19:13 --> 02:19:18
I mean not saying this is for everybody

02:19:15 --> 02:19:21
but that's actually a pretty big thing

02:19:17 --> 02:19:22
right yeah types are and and so there's

02:19:20 --> 02:19:24
a bunch of different aspects of what you

02:19:21 --> 02:19:25
know what value Mojo provides and so I

02:19:23 --> 02:19:28
mean it's funny for me like I've been

02:19:24 --> 02:19:31
working on these kinds of Technologies

02:19:27 --> 02:19:33
and tools for too many years now

02:19:30 --> 02:19:34
um but you look at Swift right and we

02:19:32 --> 02:19:36
talked about Swift for tensorflow but

02:19:33 --> 02:19:39
Swift as a programming language right

02:19:35 --> 02:19:42
for Swift snow

02:19:38 --> 02:19:44
13 years old from when I started it yeah

02:19:41 --> 02:19:46
so because I started in 2010 if I

02:19:43 --> 02:19:49
remember and so

02:19:45 --> 02:19:51
that that project and I was involved

02:19:48 --> 02:19:53
with it for 12 years or something right

02:19:50 --> 02:19:54
hat that project has gone through its

02:19:52 --> 02:19:56
own really interesting story arc right

02:19:53 --> 02:19:59
and it's a mature successful used by

02:19:55 --> 02:20:01
millions of people system right uh

02:19:58 --> 02:20:03
certainly not dead yet right but but

02:20:00 --> 02:20:04
also going through that story arc I

02:20:02 --> 02:20:05
learned a tremendous amount about

02:20:03 --> 02:20:07
building languages about building

02:20:04 --> 02:20:09
compilers about working with community

02:20:06 --> 02:20:11
and things like this and so that

02:20:08 --> 02:20:13
experience like I'm helping Channel and

02:20:10 --> 02:20:15
bring directly into Mojo and you know

02:20:12 --> 02:20:17
other systems same thing like apparently

02:20:14 --> 02:20:19
I like building building and iterating

02:20:16 --> 02:20:21
and evolving things and so you look at

02:20:18 --> 02:20:24
his lvm thing I worked on 20 years ago

02:20:20 --> 02:20:26
you look at mlir right and so a lot of

02:20:23 --> 02:20:28
the Lessons Learned in llvm got fed into

02:20:25 --> 02:20:31
mlir and I think that mlr is a way

02:20:27 --> 02:20:33
better system than lvm was and you know

02:20:30 --> 02:20:35
Swift is a really good system and it's

02:20:32 --> 02:20:37
amazing but I hope that Mojo will

02:20:34 --> 02:20:41
take the next step for

02:20:36 --> 02:20:44
ward in terms of design

02:20:40 --> 02:20:46
in terms of running Mojo people can play

02:20:43 --> 02:20:48
with it what's uh Mojo playground yeah

02:20:45 --> 02:20:51
and uh

02:20:47 --> 02:20:53
from the interface perspective and from

02:20:50 --> 02:20:56
the hardware perspective what's this

02:20:52 --> 02:20:58
incredible thing running on yeah so

02:20:55 --> 02:21:00
right now so here we are two weeks after

02:20:57 --> 02:21:02
launch yes we decided that okay we're we

02:20:59 --> 02:21:03
have this incredible set of technology

02:21:01 --> 02:21:05
that

02:21:02 --> 02:21:08
we think might be good but we have not

02:21:04 --> 02:21:09
given it to lots of people yet and so

02:21:07 --> 02:21:11
we're very conservative and said let's

02:21:08 --> 02:21:13
put it in a workbook so that if it

02:21:10 --> 02:21:15
crashes we can do something about it we

02:21:12 --> 02:21:17
can monitor and track that right so

02:21:14 --> 02:21:20
um again things are still super early

02:21:16 --> 02:21:21
but we're having like one person a

02:21:19 --> 02:21:25
minute

02:21:20 --> 02:21:27
sign up with over 70 000 people two

02:21:24 --> 02:21:29
weeks in it's kind of crazy so you you

02:21:27 --> 02:21:32
can sign up to playground and you can

02:21:28 --> 02:21:34
use it in in the cloud yeah in your

02:21:31 --> 02:21:35
browser and so what that's running on

02:21:33 --> 02:21:37
Notebook yeah what that's running on is

02:21:34 --> 02:21:40
that's running on

02:21:36 --> 02:21:42
um Cloud VMS and so you share a machine

02:21:39 --> 02:21:43
with a bunch of other people but turns

02:21:41 --> 02:21:45
out there's a bunch of them now because

02:21:42 --> 02:21:46
there's a lot of people and so what

02:21:44 --> 02:21:47
you're doing is you're getting free

02:21:45 --> 02:21:49
compute and you're getting a play with

02:21:46 --> 02:21:51
is thing and kind of a limited

02:21:48 --> 02:21:53
controlled way so that we can make sure

02:21:50 --> 02:21:54
that it doesn't

02:21:52 --> 02:21:57
otally crashing

02:21:53 --> 02:21:58
be embarrassing right yeah so um now a

02:21:56 --> 02:21:59
lot of the feedback we've gotten is

02:21:57 --> 02:22:00
people want to download it around

02:21:58 --> 02:22:02
locally so we're working on that right

02:21:59 --> 02:22:04
now and so that's that's the goal to be

02:22:01 --> 02:22:06
able to download locally yeah that's

02:22:03 --> 02:22:07
what everybody expects and so we're

02:22:05 --> 02:22:08
working on that right now and so we just

02:22:06 --> 02:22:10
want to make sure that we do it right

02:22:07 --> 02:22:12
and I think this is this is one of the

02:22:09 --> 02:22:13
lessons I learned from Swift also by the

02:22:11 --> 02:22:16
way

02:22:12 --> 02:22:19
is it when we launch Swift uh gosh it

02:22:15 --> 02:22:22
feels like forever ago it's 2014. and uh

02:22:18 --> 02:22:24
we I mean it was super exciting I and we

02:22:21 --> 02:22:28
the team had worked on Swift for a

02:22:23 --> 02:22:30
number of years in secrecy okay and we

02:22:27 --> 02:22:32
uh four years into this development

02:22:29 --> 02:22:34
roughly of working on this thing

02:22:31 --> 02:22:37
at that point about 250 people at Apple

02:22:33 --> 02:22:39
knew about it yeah okay so secret

02:22:36 --> 02:22:41
Apple's good at secrecy and it was a

02:22:38 --> 02:22:43
secret project and so we launched this

02:22:40 --> 02:22:45
at wwc a bunch of hoopla and excitement

02:22:42 --> 02:22:47
and said developers are going to be able

02:22:45 --> 02:22:51
to develop and submit apps the App Store

02:22:46 --> 02:22:53
in three months okay well several

02:22:50 --> 02:22:55
interesting things happened right so

02:22:52 --> 02:22:57
first of all we learned that a it had a

02:22:54 --> 02:23:00
lot of bugs and it was not actually

02:22:57 --> 02:23:02
production quality and it was extremely

02:22:59 --> 02:23:05
stressful in terms of like trying to get

02:23:01 --> 02:23:06
it working for a bunch of people and so

02:23:04 --> 02:23:08
what happened was we went from zero to

02:23:05 --> 02:23:10
you know I don't know how many

02:23:07 --> 02:23:13
developers Apple had at the time but a

02:23:09 --> 02:23:14
lot of developers overnight and they ran

02:23:12 --> 02:23:16
into a lot of bugs and it was really

02:23:13 --> 02:23:18
embarrassing and it was very stressful

02:23:15 --> 02:23:19
for everybody involved right it was also

02:23:17 --> 02:23:21
very exciting because everybody was

02:23:18 --> 02:23:22
excited about that the other thing I

02:23:20 --> 02:23:24
learned is that when that happened

02:23:21 --> 02:23:26
roughly every software engineer who did

02:23:23 --> 02:23:28
not know about the project at Apple

02:23:25 --> 02:23:29
their head exploded when it was launched

02:23:27 --> 02:23:32
because they didn't know it was coming

02:23:28 --> 02:23:33
and so they're like wait what is this I

02:23:31 --> 02:23:35
signed up to work for Apple because I

02:23:32 --> 02:23:38
love Objective C why is there a new

02:23:34 --> 02:23:40
thing right and so uh

02:23:37 --> 02:23:44
now what that meant practically is that

02:23:39 --> 02:23:46
he push from launch to first of all the

02:23:43 --> 02:23:48
fall but then to 2.0 and 3.0 and like

02:23:45 --> 02:23:50
ver All the Way Forward was

02:23:48 --> 02:23:54
uper painful for the engineering team

02:23:49 --> 02:23:55
and myself it was very stressful the

02:23:53 --> 02:23:57
developer Community was very grumpy

02:23:54 --> 02:23:58
about it because they're like okay well

02:23:56 --> 02:24:00
wait a second you're changing and

02:23:57 --> 02:24:02
breaking my code and like we have to fix

02:23:59 --> 02:24:05
the bugs and it was just like a lot of

02:24:01 --> 02:24:07
tension and friction on all sides

02:24:04 --> 02:24:09
um uh there's a lot of technical debt in

02:24:06 --> 02:24:11
the compiler because we have to run

02:24:08 --> 02:24:12
really fast you have to go implement the

02:24:10 --> 02:24:14
thing and unblock the use case and do

02:24:11 --> 02:24:15
the thing and and you know it's not

02:24:13 --> 02:24:18
right but you never have time to go back

02:24:14 --> 02:24:19
and do it right and I'm very proud of

02:24:17 --> 02:24:24
the Swift team because they've come

02:24:18 --> 02:24:26
I mean we but they came so far and made

02:24:23 --> 02:24:28
so much progress over over this time

02:24:25 --> 02:24:30
since launch it's pretty incredible and

02:24:27 --> 02:24:32
Swift is a very very good thing but I

02:24:29 --> 02:24:35
just don't want to do that again right

02:24:31 --> 02:24:37
and so a more iterate more through the

02:24:34 --> 02:24:38
development process and so what we're

02:24:36 --> 02:24:41
doing is we're not launching it when

02:24:37 --> 02:24:43
it's hopefully is 0.9 with no testers

02:24:40 --> 02:24:45
we're launching it and saying it's 0.1

02:24:42 --> 02:24:47
right and so we're setting expectations

02:24:44 --> 02:24:48
of saying like Okay well don't use this

02:24:46 --> 02:24:50
for production

02:24:47 --> 02:24:53
right if you're interested in what we're

02:24:49 --> 02:24:55
doing we'll do it in an open way and we

02:24:52 --> 02:24:57
can do it together but don't use it in

02:24:54 --> 02:24:59
production yet like we'll get there but

02:24:56 --> 02:25:01
let's let's do it the right way and I'm

02:24:58 --> 02:25:04
also saying we're not in a race

02:25:00 --> 02:25:07
the thing that I want to do is build the

02:25:03 --> 02:25:08
world's best thing yeah right because if

02:25:06 --> 02:25:10
you do it right and it lifts the

02:25:07 --> 02:25:12
industry it doesn't matter if it takes

02:25:09 --> 02:25:14
an extra two months yeah like two months

02:25:11 --> 02:25:16
is worth waiting and so doing it right

02:25:13 --> 02:25:19
and not being overwhelmed with technical

02:25:15 --> 02:25:20
debt and things like this is like again

02:25:18 --> 02:25:23
War wounds

02:25:19 --> 02:25:24
um Lessons Learned uh whatever you want

02:25:22 --> 02:25:26
o say I think is absolutely the right

02:25:23 --> 02:25:27
hing to do even though right now people

02:25:25 --> 02:25:29
are very frustrated that you know you

02:25:26 --> 02:25:31
can't download it or it doesn't have

02:25:28 --> 02:25:34
feature X or something like this and so

02:25:30 --> 02:25:36
what have you learned in the in a little

02:25:33 --> 02:25:39
bit of time since it's been

02:25:35 --> 02:25:41
released into the wild or that people

02:25:38 --> 02:25:44
have been complaining about future X or

02:25:40 --> 02:25:45
Y or Z what have they been complaining

02:25:43 --> 02:25:48
about what they have been

02:25:44 --> 02:25:51
uh excited about like yeah almost like

02:25:47 --> 02:25:53
detailed things versus a big I think

02:25:50 --> 02:25:55
everyone would be very excited about the

02:25:52 --> 02:25:56
big Vision yeah yeah well so I mean I've

02:25:54 --> 02:25:58
been very pleased and in fact I mean

02:25:55 --> 02:26:01
we've been massively overwhelmed with

02:25:57 --> 02:26:02
response which is um a good problem to

02:26:00 --> 02:26:05
have um it's kind of like a success

02:26:01 --> 02:26:08
disaster yeah in a sense right

02:26:04 --> 02:26:10
um and um so I mean if you go back in

02:26:07 --> 02:26:11
time when we started modular which is

02:26:09 --> 02:26:13
just

02:26:10 --> 02:26:15
um not yet a year and a half ago so it's

02:26:12 --> 02:26:18
till a pretty new company new team

02:26:14 --> 02:26:21
small but very good team of people like

02:26:18 --> 02:26:23
we started with extreme conviction that

02:26:20 --> 02:26:24
here's a set of problems we need to

02:26:22 --> 02:26:26
solve and if we solve it then people

02:26:24 --> 02:26:28
will be interested in what we're doing

02:26:25 --> 02:26:31
right but but again you're building in

02:26:27 --> 02:26:33
basically secret right you're trying to

02:26:30 --> 02:26:34
figure it out it's the creation's a

02:26:32 --> 02:26:36
messy process you're having to go

02:26:33 --> 02:26:38
through different paths and understand

02:26:35 --> 02:26:39
what you want to do and how to explain

02:26:37 --> 02:26:41
it often when you're doing disruptive

02:26:38 --> 02:26:43
and new kinds of things

02:26:40 --> 02:26:45
just knowing how to explain it is super

02:26:42 --> 02:26:47
difficult right

02:26:44 --> 02:26:50
um and so when we launched we hope

02:26:46 --> 02:26:53
ople would be excited but you know I'm

02:26:49 --> 02:26:55
an optimist but I'm also like don't

02:26:52 --> 02:26:56
want to get ahead of myself and so when

02:26:54 --> 02:26:59
people found out about Mojo I think

02:26:55 --> 02:27:01
their heads exploded a little bit right

02:26:58 --> 02:27:03
and you know here here's a I think a

02:27:00 --> 02:27:04
pretty credible team that has built some

02:27:02 --> 02:27:07
languages and some tools before and so

02:27:03 --> 02:27:09
they have some lessons learned and are

02:27:06 --> 02:27:11
tackling some of the deep problems in

02:27:08 --> 02:27:12
the python ecosystem and giving it the

02:27:10 --> 02:27:14
love and attention that it should be

02:27:11 --> 02:27:16
getting and I think people got very

02:27:13 --> 02:27:17
excited about that and so if you look at

02:27:15 --> 02:27:19
hat I mean I think people are excited

02:27:16 --> 02:27:21
about ownership and taking a Step Beyond

02:27:18 --> 02:27:22
rust right there's people that are very

02:27:20 --> 02:27:25
excited about that there's people that

02:27:21 --> 02:27:28
are excited about uh you know just like

02:27:24 --> 02:27:30
I made Game of Life go 400 times faster

02:27:27 --> 02:27:31
ight and things like that and that's

02:27:29 --> 02:27:33
really cool there are people that are

02:27:30 --> 02:27:35
ally excited about the okay I really

02:27:32 --> 02:27:37
hate writing stuff in C plus plus save

02:27:34 --> 02:27:39
me like systems and you're they're like

02:27:36 --> 02:27:42
stepping up like yeah yes so that's

02:27:38 --> 02:27:44
that's that's me by the way also

02:27:41 --> 02:27:47
um I really want to stop writing C plus

02:27:43 --> 02:27:51
but the um I get third person

02:27:46 --> 02:27:53
excitement when people tweet here I made

02:27:50 --> 02:27:55
this code Game of Life or whatever it's

02:27:52 --> 02:27:59
faster and you're like yeah yeah and and

02:27:54 --> 02:28:01
also like um well I would also say that

02:27:58 --> 02:28:03
um Let me let me cast blame out to

02:28:00 --> 02:28:06
people who deserve it sure these

02:28:03 --> 02:28:09
terrible people who convinced me to do

02:28:05 --> 02:28:10
some of this yes Jeremy Howard yes that

02:28:08 --> 02:28:12
guy

02:28:09 --> 02:28:14
well he's been pushing for this kind of

02:28:11 --> 02:28:15
thing he's one of this for years yeah

02:28:13 --> 02:28:17
e's wanted this for a long time he's

02:28:14 --> 02:28:19
won this for years and so for people who

02:28:16 --> 02:28:20
don't know Jimmy Howard he's like one of

02:28:18 --> 02:28:23
the most legit people in the machine

02:28:19 --> 02:28:26
Learning Community he's uh has a

02:28:22 --> 02:28:27
Grassroots he really teaches he's an

02:28:25 --> 02:28:30
incredible educator he's an incredible

02:28:26 --> 02:28:32
teacher but also legit uh in terms of a

02:28:29 --> 02:28:34
machine learning engineer himself yeah I

02:28:31 --> 02:28:37
think he's been running the fast uh dot

02:28:33 --> 02:28:39
Ai and looking I think for uh exactly

02:28:36 --> 02:28:42
what you've done exactly so and so um I

02:28:38 --> 02:28:45
mean the first time so I met Jeremy

02:28:41 --> 02:28:47
pretty early on but the first time I sat

02:28:44 --> 02:28:50
up and I'm like

02:28:46 --> 02:28:51
this guy is ridiculous is when I was at

02:28:49 --> 02:28:54
Google and we're bringing up tpus and we

02:28:51 --> 02:28:56
had a whole team of people and we're

02:28:53 --> 02:29:00
there was this competition called Don

02:28:55 --> 02:29:03
bench of who can train uh imagenet yeah

02:28:59 --> 02:29:05
fastness right yes and Jeremy and one of

02:29:03 --> 02:29:09
his researchers

02:29:04 --> 02:29:10
crushed Google Yeah by not through sheer

02:29:08 --> 02:29:11
force of the amazing amount of compute

02:29:09 --> 02:29:14
and the number of tpus and stuff like

02:29:10 --> 02:29:16
that that he just decided that

02:29:13 --> 02:29:17
Progressive imagery sizing was the right

02:29:15 --> 02:29:20
way to train the model and if you're

02:29:16 --> 02:29:23
Epoch faster and make the whole thing go

02:29:19 --> 02:29:26
vroom right yep and I'm like this guy

02:29:22 --> 02:29:28
is incredible right so you can say

02:29:25 --> 02:29:31
anyways come back to you know where's

02:29:27 --> 02:29:32
Mojo coming from Chris finally listened

02:29:30 --> 02:29:35
to Jeremy

02:29:31 --> 02:29:37
it's all his fault well there's a kind

02:29:34 --> 02:29:40
of very uh

02:29:36 --> 02:29:43
refreshing uh pragmatic view that he has

02:29:39 --> 02:29:47
about machine learning that

02:29:42 --> 02:29:49
um I don't know if it's like this mix of

02:29:46 --> 02:29:52
a desire for efficiency But ultimately

02:29:48 --> 02:29:54
grounded in a desired to make uh machine

02:29:51 --> 02:29:56
learning more accessible to a lot of

02:29:53 --> 02:29:58
people I don't know what that is I guess

02:29:55 --> 02:30:00
that's coupled with efficiency and

02:29:57 --> 02:30:03
performance but it's not just obsessed

02:29:59 --> 02:30:05
about performance well so so a lot of AI

02:30:02 --> 02:30:08
and AI research ends up being that it

02:30:04 --> 02:30:09
has to go fast enough to get scale so a

02:30:07 --> 02:30:11
lot of people don't actually care about

02:30:08 --> 02:30:13
performance particularly on the research

02:30:10 --> 02:30:14
side until it allows them to have more a

02:30:12 --> 02:30:16
bigger data set

02:30:13 --> 02:30:18
right and so suddenly now you care about

02:30:15 --> 02:30:20
distributed compute and like all these

02:30:17 --> 02:30:22
xotic HPC like you don't actually want

02:30:19 --> 02:30:24
o know about that you just want to be

02:30:21 --> 02:30:26
able to do more experiments faster and

02:30:23 --> 02:30:28
o so with bigger data sets right and so

02:30:25 --> 02:30:29
Jeremy has been really pushing limits

02:30:27 --> 02:30:32
and one of the things I'll say about

02:30:28 --> 02:30:33
Jeremy and there's many things I could

02:30:31 --> 02:30:37
say about Jeremy because I'm a fanboy of

02:30:32 --> 02:30:39
his but uh he uh it fits in his head

02:30:36 --> 02:30:41
and Jeremy actually takes the time where

02:30:38 --> 02:30:44
many people don't to really dive deep

02:30:40 --> 02:30:47
into why is the beta parameter of the

02:30:43 --> 02:30:50
atom Optimizer equal to this yeah right

02:30:46 --> 02:30:51
and he'll go survey and understand what

02:30:49 --> 02:30:53
are all the activation functions in the

02:30:51 --> 02:30:56
trade-offs and why is it that everybody

02:30:52 --> 02:30:58
that does uh you know this model pick

02:30:55 --> 02:31:01
that thing so the why not just trying

02:30:57 --> 02:31:02
different values like really what is

02:31:00 --> 02:31:04
going on here right and so as a

02:31:01 --> 02:31:07
consequence of that like he's always he

02:31:03 --> 02:31:09
again he makes time but he he spends

02:31:06 --> 02:31:11
time to understand things that are depth

02:31:08 --> 02:31:13
at a lot of people don't and as you

02:31:10 --> 02:31:17
say he then brings it and teaches people

02:31:12 --> 02:31:19
and he's his mission is to help lift you

02:31:16 --> 02:31:21
know his website says making AI uncool

02:31:18 --> 02:31:23
again like it's about like forget about

02:31:20 --> 02:31:24
he hype list it's actually practical

02:31:22 --> 02:31:26
and useful let's teach people how to do

02:31:23 --> 02:31:28
this right now the problem Jeremy

02:31:25 --> 02:31:29
struggled with is he's pushing the

02:31:27 --> 02:31:30
nvelope

02:31:28 --> 02:31:32
right research isn't about doing the

02:31:29 --> 02:31:35
thing that is staying on the happy path

02:31:31 --> 02:31:37
or the the well-paved road right and so

02:31:34 --> 02:31:39
a lot of the systems today have been

02:31:36 --> 02:31:40
these really frag fragile fragmented

02:31:38 --> 02:31:42
things or special case in this happy

02:31:39 --> 02:31:45
path and if you fall off the happy path

02:31:41 --> 02:31:48
you get eaten by an alligator

02:31:44 --> 02:31:51
so

02:31:47 --> 02:31:54
what about uh so python has this giant

02:31:50 --> 02:31:56
ecosystem of packages uh and there's a

02:31:53 --> 02:31:59
package repository do you have ideas of

02:31:55 --> 02:32:01
how to do that well for Mojo

02:31:58 --> 02:32:02
yeah how to do a repository of packages

02:32:00 --> 02:32:05
well so that's another really

02:32:01 --> 02:32:07
interesting problem that I knew about

02:32:04 --> 02:32:10
but I didn't understand how big of a

02:32:06 --> 02:32:11
problem it was uh python Packaging

02:32:09 --> 02:32:13
a lot of people have very big pain

02:32:10 --> 02:32:15
points and a lot of scars with python

02:32:12 --> 02:32:17
packaging Oh you mean uh so there's

02:32:14 --> 02:32:19
everal things building and distributing

02:32:16 --> 02:32:21
yes managing dependencies and versioning

02:32:18 --> 02:32:23
and all this stuff so from the

02:32:20 --> 02:32:25
perspective of if you want to create

02:32:22 --> 02:32:26
your own package yes yeah and then or

02:32:24 --> 02:32:28
you want to build on top of a bunch of

02:32:25 --> 02:32:30
other people's packages and then they

02:32:27 --> 02:32:33
get updated and it's like this now I'm

02:32:29 --> 02:32:35
not an expert in this so I don't know

02:32:32 --> 02:32:37
the answer I think this is one of the

02:32:34 --> 02:32:39
reasons why it's great that we work as a

02:32:36 --> 02:32:40
team and there's other really good and

02:32:38 --> 02:32:43
smart people involved

02:32:39 --> 02:32:45
um the uh but one of my

02:32:42 --> 02:32:47
one of the things I've heard from smart

02:32:44 --> 02:32:49
people who've done a lot of this is that

02:32:46 --> 02:32:51
he packaging becomes a huge disaster

02:32:48 --> 02:32:53
when you get the python and C together

02:32:50 --> 02:32:56
and so if you have this problem where

02:32:52 --> 02:32:58
you have code split between Python and C

02:32:55 --> 02:33:01
now not only do you have to package the

02:32:57 --> 02:33:03
C code you have to build the C code C

02:33:00 --> 02:33:05
doesn't have a package manager right C

02:33:02 --> 02:33:08
doesn't have a dependency versioning

02:33:04 --> 02:33:11
management system right and so I'm not

02:33:07 --> 02:33:13
experiencing the state of the art and uh

02:33:10 --> 02:33:14
all the different python package

02:33:12 --> 02:33:17
managers but my understanding is that's

02:33:13 --> 02:33:18
a massive part of the problem and I

02:33:16 --> 02:33:21
think Mojo solves that part of the

02:33:17 --> 02:33:22
problem directly heads on now one of the

02:33:20 --> 02:33:25
things I think we'll do with the

02:33:21 --> 02:33:26
community and this isn't again we're not

02:33:24 --> 02:33:27
solving all the world's problems at once

02:33:25 --> 02:33:30
we have to be kind of focused start with

02:33:26 --> 02:33:32
is that I think that we will have an

02:33:29 --> 02:33:34
opportunity to reevaluate Packaging

02:33:31 --> 02:33:36
right and so I think that we can come

02:33:33 --> 02:33:37
back and say okay well given the new

02:33:35 --> 02:33:39
tools and Technologies and the cool

02:33:36 --> 02:33:41
things we have that we've built up

02:33:38 --> 02:33:42
because we have not just syntax we have

02:33:40 --> 02:33:44
an entirely new compiler stack that

02:33:41 --> 02:33:46
works in a new way maybe there's other

02:33:43 --> 02:33:48
Innovations we can bring together and

02:33:45 --> 02:33:50
maybe we can help solve that problem so

02:33:47 --> 02:33:52
almost a tangent to that question from

02:33:49 --> 02:33:55
the user perspective of packages

02:33:51 --> 02:33:57
it was always surprising to me

02:33:54 --> 02:34:01
that it was not easier to sort of

02:33:56 --> 02:34:01
explore and find packages

02:34:00 --> 02:34:06
you know with with Pip install and it

02:34:03 --> 02:34:09
just it feels uh it's an incredible

02:34:05 --> 02:34:12
cosystem it's just uh interesting that

02:34:08 --> 02:34:14
it wasn't made it's still I think not

02:34:11 --> 02:34:16
made easier to discover packages to do

02:34:13 --> 02:34:20
yeah like uh

02:34:15 --> 02:34:22
search and Discovery as YouTube calls

02:34:19 --> 02:34:24
it well I mean it's kind of funny

02:34:21 --> 02:34:25
because this is one of the challenges of

02:34:23 --> 02:34:27
these like

02:34:24 --> 02:34:29
intentionally decentralized communities

02:34:26 --> 02:34:31
and so I don't know what the right

02:34:28 --> 02:34:32
answer is for python I mean there are

02:34:30 --> 02:34:34
many people that

02:34:31 --> 02:34:35
or I don't even know the right answer

02:34:33 --> 02:34:38
for Mojo

02:34:34 --> 02:34:39
so there are many people that would have

02:34:37 --> 02:34:41
much more informed opinions than I do

02:34:38 --> 02:34:43
but but it's interesting if you look at

02:34:40 --> 02:34:46
his right open source communities

02:34:42 --> 02:34:47
um you know there's git git is a fully

02:34:45 --> 02:34:50
decentralized anybody could do it any

02:34:46 --> 02:34:52
way they want but then there's GitHub

02:34:49 --> 02:34:55
right and GitHub centralized commercial

02:34:51 --> 02:34:57
in that case right thing uh really help

02:34:54 --> 02:34:59
ull together and help solve some of the

02:34:56 --> 02:35:01
discovery problems and help build a more

02:34:59 --> 02:35:03
consistent community and so maybe

02:35:00 --> 02:35:06
there's opportunities for something like

02:35:02 --> 02:35:08
a GitHub yeah although even GitHub I

02:35:05 --> 02:35:10
might be wrong on this but the search

02:35:07 --> 02:35:14
and Discovery for GitHub is not that

02:35:09 --> 02:35:16
great like I still use Google Search

02:35:13 --> 02:35:17
yeah well I mean make it maybe that's

02:35:15 --> 02:35:20
because GitHub doesn't want to replace

02:35:16 --> 02:35:22
Google Search right and I think there is

02:35:19 --> 02:35:24
room for specialized solutions to

02:35:21 --> 02:35:26
specific problems but sure I don't know

02:35:23 --> 02:35:28
the right answer for GitHub

02:35:25 --> 02:35:31
either that's I think they can go figure

02:35:27 --> 02:35:32
that out but the point is to have an

02:35:30 --> 02:35:33
interface that's usable that's

02:35:31 --> 02:35:35
accessible to people of all different

02:35:32 --> 02:35:37
skill levels well well and again like

02:35:34 --> 02:35:38
what what are the benefit of Standards

02:35:36 --> 02:35:41
right standards allow you to build these

02:35:37 --> 02:35:43
next level up ecosystem next level of

02:35:40 --> 02:35:44
infrastructure or next level of things

02:35:42 --> 02:35:47
and so

02:35:43 --> 02:35:50
um again come back to I hate complexity

02:35:46 --> 02:35:52
see C plus python is complicated it

02:35:49 --> 02:35:53
makes everything more difficult to deal

02:35:51 --> 02:35:56
with it makes it difficult to Port move

02:35:52 --> 02:35:58
code around work with all these things

02:35:55 --> 02:36:00
get more complicated and so I mean I'm

02:35:57 --> 02:36:02
not an expert but maybe Mojo can help a

02:35:59 --> 02:36:04
little bit by helping reduce the amount

02:36:01 --> 02:36:05
of C in this ecosystem and make it

02:36:03 --> 02:36:08
herefore scale better so any kind of

02:36:04 --> 02:36:10
packages that are hybrid in nature would

02:36:07 --> 02:36:13
be a natural fit to move to Mojo which

02:36:09 --> 02:36:15
is a lot of them by the way yeah

02:36:12 --> 02:36:16
a lot of them especially they're doing

02:36:14 --> 02:36:17
some interesting stuff computational

02:36:15 --> 02:36:20
wise

02:36:16 --> 02:36:22
let me ask you about some features yeah

02:36:19 --> 02:36:25
so we talked about obviously the

02:36:21 --> 02:36:26
indentation that it's a type language or

02:36:24 --> 02:36:28
optionally typed

02:36:25 --> 02:36:30
is that the right way to say it it's

02:36:27 --> 02:36:32
either optionally or progressively or

02:36:29 --> 02:36:33
aggressively I think so so so people

02:36:31 --> 02:36:36
have very strong opinions on the right

02:36:32 --> 02:36:39
word to use yeah I don't know I look

02:36:35 --> 02:36:41
forward to your letters uh so there's

02:36:38 --> 02:36:45
the the VAR versus let but let is for

02:36:40 --> 02:36:47
constants uh VAR is an optional uh yeah

02:36:44 --> 02:36:51
makes it mutable so you can reassign

02:36:46 --> 02:36:55
okay uh then there's uh

02:36:50 --> 02:36:56
function overloading oh okay yeah so I

02:36:54 --> 02:36:57
mean there's a lot of source of

02:36:55 --> 02:36:59
happiness for me but function

02:36:56 --> 02:37:03
overloading that's

02:36:58 --> 02:37:05
um I guess is that is that for

02:37:02 --> 02:37:08
performance or is that why does python

02:37:04 --> 02:37:10
ot have function overloading

02:37:07 --> 02:37:12
so I can speculate so um python is a

02:37:09 --> 02:37:14
dynamic language the way it works is

02:37:11 --> 02:37:17
that um

02:37:13 --> 02:37:21
uh python Objective C are actually

02:37:16 --> 02:37:23
very similar worlds if you ignore syntax

02:37:20 --> 02:37:26
and so

02:37:22 --> 02:37:27
uh Objective C is straight line derived

02:37:25 --> 02:37:30
from small talk

02:37:26 --> 02:37:32
they're really venerable interesting

02:37:29 --> 02:37:33
language that much of the world has

02:37:31 --> 02:37:36
forgotten about but the people that

02:37:32 --> 02:37:38
remember it love it generally and the

02:37:35 --> 02:37:40
way that Small Talk Works is that every

02:37:37 --> 02:37:42
object has a dictionary in it and the

02:37:39 --> 02:37:44
dictionary maps from the name of a

02:37:41 --> 02:37:46
function or the name of a value within

02:37:43 --> 02:37:48
an object to its implementation

02:37:45 --> 02:37:51
and so the way you call a method in

02:37:47 --> 02:37:53
Objective C is you say go look up the

02:37:50 --> 02:37:54
way I call Foose I go look up Foo I get

02:37:52 --> 02:37:57
a pointer to the function back and then

02:37:53 --> 02:37:59
I call it okay that's how python works

02:37:56 --> 02:38:00
right and so now the problem with that

02:37:58 --> 02:38:02
is that

02:37:59 --> 02:38:04
he dictionary within a python object

02:38:01 --> 02:38:06
all the keys are strings

02:38:03 --> 02:38:08
and it's a dictionary yeah so you can

02:38:05 --> 02:38:09
only have one entry per name you think

02:38:07 --> 02:38:12
it's as simple as that I think it's as

02:38:08 --> 02:38:14
imple as that and so now why do they

02:38:11 --> 02:38:17
never fix this like why do they not

02:38:13 --> 02:38:18
change it to not be a dictionary like do

02:38:16 --> 02:38:21
ther things

02:38:17 --> 02:38:23
um well you don't really have to in

02:38:20 --> 02:38:25
Python because it's Dynamic and so you

02:38:22 --> 02:38:27
can say I get into the function now if I

02:38:24 --> 02:38:29
got past an integer do some Dynamic

02:38:26 --> 02:38:32
tests for it if it's a string go do

02:38:28 --> 02:38:33
another thing there's another additional

02:38:31 --> 02:38:35
challenge which is even if you did

02:38:32 --> 02:38:36
support overloading you're saying okay

02:38:34 --> 02:38:39
well here's a version of a function for

02:38:35 --> 02:38:40
integers and a function for Strings well

02:38:38 --> 02:38:42
you'd have even if you could put it in

02:38:39 --> 02:38:45
that dictionary you'd have to have the

02:38:41 --> 02:38:46
caller do the dispatch and so every time

02:38:44 --> 02:38:47
you call the function you'd have to say

02:38:45 --> 02:38:49
like is an integer is it a string and so

02:38:46 --> 02:38:52
you have to figure out where to do that

02:38:48 --> 02:38:53
est and so in a dynamic language

02:38:51 --> 02:38:56
um overloading is something you

02:38:52 --> 02:38:59
generally you don't have to have so

02:38:55 --> 02:39:02
but now you get into a type language and

02:38:58 --> 02:39:03
you know in Python if you subscript with

02:39:01 --> 02:39:06
an integer

02:39:02 --> 02:39:08
then you get typically one element out

02:39:05 --> 02:39:10
of a collection if you subscript with a

02:39:07 --> 02:39:13
range you get a different thing out

02:39:09 --> 02:39:14
right and so often in type languages

02:39:12 --> 02:39:17
you'll want to be able to express the

02:39:13 --> 02:39:19
fact that cool I have different Behavior

02:39:16 --> 02:39:21
depending on what I actually pass into

02:39:18 --> 02:39:22
this thing if you can model that it can

02:39:20 --> 02:39:25
make it safer and more predictable and

02:39:21 --> 02:39:28
faster and like all these things it

02:39:24 --> 02:39:30
somehow feels safer yes but also feels

02:39:27 --> 02:39:32
empowering like in terms of clarity like

02:39:29 --> 02:39:34
you don't have to design hold different

02:39:31 --> 02:39:37
functions yeah well this is also one of

02:39:33 --> 02:39:40
the the challenges with the existing

02:39:36 --> 02:39:42
python typing systems is that in

02:39:39 --> 02:39:44
practice like you take subscript like in

02:39:41 --> 02:39:47
practice a lot of these functions they

02:39:43 --> 02:39:48
don't have one signature right they

02:39:46 --> 02:39:50
actually have different behavior in

02:39:47 --> 02:39:51
different cases and so this is why it's

02:39:49 --> 02:39:54
difficult to like retrofit this into

02:39:51 --> 02:39:57
existing python code and make it

02:39:53 --> 02:39:59
uh play well with typing you kind of

02:39:56 --> 02:40:01
have to design for that okay so there's

02:39:58 --> 02:40:03
a interesting distinction

02:40:00 --> 02:40:06
that people the program python might be

02:40:02 --> 02:40:08
interested in is def versus FN

02:40:05 --> 02:40:09
so it's two different ways to define a

02:40:07 --> 02:40:14
function

02:40:08 --> 02:40:16
yeah and uh FN is uh a stricter version

02:40:13 --> 02:40:18
of death what's the coolness that comes

02:40:15 --> 02:40:20
from the strictness so here you get into

02:40:17 --> 02:40:24
what is the trade-off with the superset

02:40:19 --> 02:40:27
yes okay so superset you have to or you

02:40:23 --> 02:40:29
really want to be compatible if like if

02:40:26 --> 02:40:31
you're doing a superset you've decided

02:40:28 --> 02:40:33
compatibility with existing code is the

02:40:30 --> 02:40:34
important thing even if some of the

02:40:32 --> 02:40:37
decisions they made were maybe not what

02:40:33 --> 02:40:39
you choose yeah okay so that means you

02:40:36 --> 02:40:40
put a lot of time into compatibility and

02:40:38 --> 02:40:42
it means that you get locked into

02:40:39 --> 02:40:44
decisions of the past

02:40:41 --> 02:40:47
even if they may not have been a good

02:40:43 --> 02:40:50
thing right now systems programmers

02:40:46 --> 02:40:52
typically like to control things right

02:40:49 --> 02:40:54
and they want to make sure that you know

02:40:51 --> 02:40:55
not not all cases of course and no and

02:40:53 --> 02:40:57
even systems programmers are not one

02:40:54 --> 02:40:59
thing right but but often you want

02:40:56 --> 02:41:01
predictability and so one of one of the

02:40:58 --> 02:41:03
things that python has for example as

02:41:00 --> 02:41:05
you know is that if you find a variable

02:41:02 --> 02:41:07
you just say x equals four I have a

02:41:04 --> 02:41:09
variable name to X

02:41:06 --> 02:41:12
now I say some long method some some

02:41:08 --> 02:41:14
long name equals 17.

02:41:11 --> 02:41:17
print out some long name

02:41:13 --> 02:41:18
oops but I typoed it right well the

02:41:16 --> 02:41:21
compiler the python compiler doesn't

02:41:17 --> 02:41:23
know in all cases what you're defining

02:41:20 --> 02:41:26
what you're using and did you typo the

02:41:22 --> 02:41:29
use of it or the definition right and so

02:41:25 --> 02:41:31
for people coming from type languages

02:41:28 --> 02:41:32
again I'm not saying they're right or

02:41:30 --> 02:41:34
wrong but that drives them crazy because

02:41:31 --> 02:41:36
they want the compiler to tell them you

02:41:33 --> 02:41:38
typo the name of this thing right and so

02:41:35 --> 02:41:40
what FN does is it turns on as you say

02:41:37 --> 02:41:42
it's a strict mode and so it says okay

02:41:39 --> 02:41:43
well you have to actually declare

02:41:41 --> 02:41:45
intentionally declare your variables

02:41:42 --> 02:41:47
before you use them that gives you more

02:41:44 --> 02:41:50
predictability more error checking and

02:41:46 --> 02:41:53
things like this but you don't have to

02:41:49 --> 02:41:56
uh you don't have to use it and this is

02:41:52 --> 02:41:57
a way that Mojo is both compatible

02:41:55 --> 02:41:59
because deaths work the same way that

02:41:56 --> 02:42:00
deaths have already always worked but it

02:41:58 --> 02:42:02
provides a new alternative that gives

02:41:59 --> 02:42:03
you more control and allows certain

02:42:01 --> 02:42:05
kinds of people that have a different

02:42:02 --> 02:42:08
philosophy to be able to express that

02:42:04 --> 02:42:10
and get that but usually if you're

02:42:07 --> 02:42:11
writing Mojo code from scratch you'll be

02:42:09 --> 02:42:13
using FN

02:42:10 --> 02:42:15
it depends again it depends on your

02:42:12 --> 02:42:19
mentality right it's not it's not the

02:42:14 --> 02:42:21
deafest python and FN is Mojo Mojo has

02:42:18 --> 02:42:23
both and it loves both right it really

02:42:20 --> 02:42:25
depends on it's just strict yeah exactly

02:42:22 --> 02:42:27
do you are you playing around and

02:42:24 --> 02:42:29
scripting something out is it a one-off

02:42:26 --> 02:42:31
throwaway script cool like python is

02:42:28 --> 02:42:33
great at that I'll still be using

02:42:30 --> 02:42:36
nothing but yeah well so I I love

02:42:32 --> 02:42:40
strickness okay well so control Power

02:42:35 --> 02:42:43
you also like suffering right yes go

02:42:39 --> 02:42:46
hand in hand how many how many pull-ups

02:42:42 --> 02:42:48
I have lost count at this yeah at this

02:42:45 --> 02:42:50
point so I mean that's cool I love you

02:42:47 --> 02:42:52
for that yeah some and I love other

02:42:49 --> 02:42:54
people like strict things right but but

02:42:51 --> 02:42:55
I don't want to say that that's the

02:42:53 --> 02:42:57
right thing because Python's also very

02:42:54 --> 02:42:59
beautiful for hacking around and doing

02:42:56 --> 02:43:01
stuff and research and these other cases

02:42:58 --> 02:43:02
where you may not want that you see I

02:43:00 --> 02:43:03
just feel like

02:43:01 --> 02:43:05
uh maybe I'm wrong with that but it

02:43:03 --> 02:43:08
feels like strictness leads to faster

02:43:04 --> 02:43:11
debugging so in terms of going from

02:43:07 --> 02:43:13
even on a small project from zero to

02:43:10 --> 02:43:16
completion it's just I guess it depends

02:43:12 --> 02:43:18
how many bugs you generate usually well

02:43:15 --> 02:43:20
so I mean if it's again Lessons Learned

02:43:17 --> 02:43:21
in looking at the ecosystem it's really

02:43:19 --> 02:43:23
I mean I think it's

02:43:20 --> 02:43:25
if you study some of these languages

02:43:22 --> 02:43:27
over time like the Ruby Community for

02:43:24 --> 02:43:29
example now Ruby is a pretty well

02:43:26 --> 02:43:31
developed pretty established Community

02:43:28 --> 02:43:32
but along their path they really

02:43:30 --> 02:43:34
invested in unit testing

02:43:31 --> 02:43:36
like so I think that the Ruby Community

02:43:33 --> 02:43:38
is really pushed forward the state of

02:43:35 --> 02:43:40
the art of testing because they didn't

02:43:37 --> 02:43:43
have a type system that caught a lot of

02:43:39 --> 02:43:44
bugs at compel time right and so you can

02:43:42 --> 02:43:45
have the best of both worlds you can

02:43:43 --> 02:43:47
have good testing and good types right

02:43:44 --> 02:43:48
and things like this but but I thought

02:43:46 --> 02:43:50
hat that it was really interesting to

02:43:48 --> 02:43:52
see how certain challenges get solved

02:43:49 --> 02:43:54
and in Python for example

02:43:51 --> 02:43:55
the interactive notebook kind of

02:43:53 --> 02:43:58
experiences and stuff like this are

02:43:54 --> 02:43:59
ally amazing if you typo something it

02:43:57 --> 02:44:01
doesn't matter it just tells you that's

02:43:58 --> 02:44:02
fine right and so I think that the

02:44:00 --> 02:44:04
tryouts are very different if you're

02:44:01 --> 02:44:05
building a

02:44:03 --> 02:44:06
um you know large scale production

02:44:04 --> 02:44:09
system versus you're building and

02:44:06 --> 02:44:10
exploring a notebook and the speaking of

02:44:08 --> 02:44:12
control the hilarious thing if you look

02:44:09 --> 02:44:14
at code I write just for myself for fun

02:44:11 --> 02:44:16
it's like littered with asserts

02:44:13 --> 02:44:19
everywhere okay

02:44:15 --> 02:44:24
it's a kind of yeah you would like to

02:44:18 --> 02:44:26
ask it's basically saying uh in a

02:44:23 --> 02:44:30
dictatorial way this should be true now

02:44:25 --> 02:44:34
otherwise everything stops and that that

02:44:29 --> 02:44:35
is the sign I love you man but that is a

02:44:33 --> 02:44:38
sign of somebody who likes control yeah

02:44:34 --> 02:44:40
and so yes I think that you'll like I

02:44:37 --> 02:44:44
think you're like Mojo therapy session

02:44:39 --> 02:44:46
yes I definitely will uh uh speaking of

02:44:43 --> 02:44:49
asserts uh exceptions are called errors

02:44:45 --> 02:44:52
why is it called errors so we I mean we

02:44:48 --> 02:44:54
use the same we're the same as python

02:44:51 --> 02:44:56
right but um we implemented a very

02:44:53 --> 02:44:58
different way right and so if you look

02:44:55 --> 02:45:00
at other languages like we'll pick on C

02:44:57 --> 02:45:02
plus plus our favorite right uh C plus

02:44:59 --> 02:45:03
has this thing called zero cost

02:45:01 --> 02:45:06
exception handling

02:45:02 --> 02:45:08
okay see and this is

02:45:05 --> 02:45:11
in my opinion

02:45:07 --> 02:45:14
something to learn lessons from it's a

02:45:10 --> 02:45:16
nice polite way of thing and so

02:45:13 --> 02:45:18
um and so zero cost exception handling

02:45:15 --> 02:45:20
the way it works is that it's called

02:45:17 --> 02:45:22
zero cost because

02:45:19 --> 02:45:24
if you don't throw an exception there's

02:45:21 --> 02:45:27
upposed to be no overhead for the

02:45:23 --> 02:45:31
non-error code and so it takes the error

02:45:26 --> 02:45:33
path out of the uh the common path

02:45:30 --> 02:45:36
um it does this by making throwing an

02:45:32 --> 02:45:38
error extremely expensive and so if you

02:45:35 --> 02:45:40
actually throw an error with a C plus

02:45:37 --> 02:45:42
compiler using exceptions let's go

02:45:39 --> 02:45:44
look up in tables on the side and do all

02:45:41 --> 02:45:46
the stuff and so throwing an error could

02:45:43 --> 02:45:49
be like 10 000 times more expensive than

02:45:45 --> 02:45:51
returning from a function right also

02:45:48 --> 02:45:53
it's called zero cost exceptions but

02:45:50 --> 02:45:55
it's not zero cost by any stretch of the

02:45:52 --> 02:45:58
imagination because it massively blows

02:45:54 --> 02:46:00
out your code your binary it also adds a

02:45:57 --> 02:46:02
whole bunch of different paths because

02:45:59 --> 02:46:04
of destructors and other things like

02:46:01 --> 02:46:05
that that exist in C plus plus and it

02:46:03 --> 02:46:07
reduces the number of optimizations it

02:46:04 --> 02:46:08
has like all these effects and so this

02:46:06 --> 02:46:10
thing that was called zero cost

02:46:07 --> 02:46:15
exceptions

02:46:09 --> 02:46:17
it really ain't okay now if you fast

02:46:14 --> 02:46:20
forward to newer languages and um and

02:46:16 --> 02:46:22
this includes Swift and rust and go and

02:46:19 --> 02:46:23
now Mojo

02:46:21 --> 02:46:25
um

02:46:22 --> 02:46:26
uh well in Python's a little bit

02:46:24 --> 02:46:27
different because it's interpreted and

02:46:25 --> 02:46:28
so like it's got a little bit of a

02:46:26 --> 02:46:31
different thing going on but if you look

02:46:27 --> 02:46:34
at it if you look at compiled languages

02:46:30 --> 02:46:36
um many neural languages say okay well

02:46:33 --> 02:46:39
et's not do that zero cost exception

02:46:35 --> 02:46:43
handling thing let's actually treat and

02:46:38 --> 02:46:45
throwing an error the same as returning

02:46:42 --> 02:46:48
a variant returning either the normal

02:46:44 --> 02:46:51
result or an error now

02:46:47 --> 02:46:53
programmers generally don't want to deal

02:46:50 --> 02:46:56
with all the typing machinery and like

02:46:52 --> 02:46:58
pushing around a variant and so you use

02:46:55 --> 02:47:00
all the syntax that python gives us for

02:46:57 --> 02:47:02
example try and catch and it you know

02:46:59 --> 02:47:04
functions that raise and things like

02:47:01 --> 02:47:07
this you can put erases decorator on

02:47:03 --> 02:47:09
your functions stuff like this and if

02:47:06 --> 02:47:11
you want to control that and then the

02:47:08 --> 02:47:12
language can provide syntax for it but

02:47:10 --> 02:47:15
under the hood the way the computer

02:47:11 --> 02:47:17
executes it throwing errors basically as

02:47:14 --> 02:47:19
fast as returning something interesting

02:47:16 --> 02:47:20
so it's exactly the same way it's from a

02:47:18 --> 02:47:23
compiler perspective and so this is

02:47:19 --> 02:47:25
actually I mean it's a fairly nerdy

02:47:22 --> 02:47:28
thing right which is why I love it

02:47:24 --> 02:47:30
um but the uh this has a huge impact on

02:47:27 --> 02:47:33
the way you design your apis

02:47:29 --> 02:47:35
right so in C plus plus

02:47:32 --> 02:47:38
huge communities turn off exceptions

02:47:34 --> 02:47:40
because the cost is just so high right

02:47:37 --> 02:47:42
and so the zero cost cost is so high

02:47:39 --> 02:47:44
right and so that means you can't

02:47:41 --> 02:47:46
actually use exceptions in many

02:47:43 --> 02:47:49
libraries

02:47:45 --> 02:47:52
right and even for the people that do

02:47:48 --> 02:47:53
use it well okay how and when do you

02:47:51 --> 02:47:56
want to pay the cost if I try to open a

02:47:52 --> 02:47:58
file should I throw an error well what

02:47:55 --> 02:48:00
if I'm probing around looking for

02:47:57 --> 02:48:01
something right I'm looking up in many

02:47:59 --> 02:48:03
different paths well if it's really slow

02:48:00 --> 02:48:06
to do that maybe I'll add another

02:48:02 --> 02:48:08
function that doesn't throw an error it

02:48:05 --> 02:48:09
returns an error code instead and now I

02:48:07 --> 02:48:11
have two different versions the same

02:48:08 --> 02:48:14
thing and so it causes you to Fork your

02:48:10 --> 02:48:17
apis and so you know one of the things I

02:48:13 --> 02:48:18
learned from Apple and isil love is the

02:48:16 --> 02:48:20
art of API design is actually really

02:48:17 --> 02:48:22
profound I think this is something that

02:48:19 --> 02:48:24
Python's also done a pretty good job at

02:48:21 --> 02:48:25
in terms of building out this

02:48:23 --> 02:48:27
large-scale package ecosystem it's about

02:48:24 --> 02:48:29
having standards and things like this

02:48:26 --> 02:48:30
and so you know we wouldn't want to

02:48:28 --> 02:48:32
enter a mode where

02:48:29 --> 02:48:34
um you know there's this theoretical

02:48:31 --> 02:48:35
feature that exists in language but

02:48:33 --> 02:48:37
people don't use it in practice

02:48:34 --> 02:48:39
now I'll also say one of the other

02:48:36 --> 02:48:40
eally cool things about this

02:48:38 --> 02:48:41
implementation approach is that it can

02:48:39 --> 02:48:43
run on gpus and it can run on

02:48:40 --> 02:48:46
accelerators and things like this and

02:48:42 --> 02:48:48
that standard zero cost exception thing

02:48:45 --> 02:48:50
would never work on an accelerator and

02:48:47 --> 02:48:52
so this is also part of how Mojo can

02:48:49 --> 02:48:54
scale all the way down to like little

02:48:51 --> 02:48:56
mbedded systems and to running on gpus

02:48:53 --> 02:48:58
and things like that can you actually

02:48:55 --> 02:49:01
say about the

02:48:57 --> 02:49:03
maybe uh is there some high-level way to

02:49:00 --> 02:49:06
describe the challenge of

02:49:02 --> 02:49:08
exceptions and how they work in code

02:49:05 --> 02:49:11
during compilation so it's just this

02:49:07 --> 02:49:14
idea of percolating up a thing

02:49:10 --> 02:49:15
an error yeah yeah so the way the way to

02:49:13 --> 02:49:17
think about it is

02:49:15 --> 02:49:19
um think about a function that doesn't

02:49:16 --> 02:49:20
return anything just as a simple case

02:49:18 --> 02:49:24
right and so you have

02:49:19 --> 02:49:25
function one calls function two calls

02:49:23 --> 02:49:27
function three calls function four

02:49:24 --> 02:49:30
along that call stack that are try

02:49:26 --> 02:49:31
blocks right and so if you have function

02:49:29 --> 02:49:33
e calls function two function two has

02:49:30 --> 02:49:36
a try block and then within it it calls

02:49:33 --> 02:49:38
function three right well what happens

02:49:35 --> 02:49:40
if function three throws

02:49:37 --> 02:49:42
well actually start simpler what happens

02:49:39 --> 02:49:44
if it returns well if it returns it's

02:49:41 --> 02:49:45
upposed to go back out and continue

02:49:43 --> 02:49:47
xecuting and then fall off the bottom

02:49:44 --> 02:49:48
of the try block and keep going and

02:49:46 --> 02:49:50
all's good

02:49:47 --> 02:49:52
if the function throws you're supposed

02:49:49 --> 02:49:54
to exit the current function

02:49:51 --> 02:49:56
and then get into the accept Clause

02:49:53 --> 02:49:57
right and then do whatever code's there

02:49:55 --> 02:50:00
and then keep falling on and going on

02:49:57 --> 02:50:03
and so the way that a compiler like Mojo

02:49:59 --> 02:50:06
works is that the call to that function

02:50:02 --> 02:50:07
which happens in the accept block calls

02:50:05 --> 02:50:08
the function and then instead of

02:50:06 --> 02:50:11
returning nothing

02:50:07 --> 02:50:13
it actually returns you know a variant

02:50:10 --> 02:50:16
between nothing and an error

02:50:12 --> 02:50:18
and so if you return normally go off the

02:50:15 --> 02:50:20
bottom or do a return

02:50:17 --> 02:50:22
you refer nothing and if you throw throw

02:50:19 --> 02:50:24
an error you

02:50:21 --> 02:50:26
return the variant that is I'm an error

02:50:23 --> 02:50:29
ight so when you get to the call you

02:50:25 --> 02:50:31
say okay cool I called a function hey I

02:50:28 --> 02:50:33
know locally I'm in a try block

02:50:30 --> 02:50:35
right and so I I call the function and

02:50:32 --> 02:50:37
then I check to see what it returns aha

02:50:34 --> 02:50:38
if it's that error thing jump to the

02:50:36 --> 02:50:40
accept block

02:50:37 --> 02:50:42
and that's all done for you behind the

02:50:39 --> 02:50:44
scenes exactly and so the competitors

02:50:41 --> 02:50:45
all this for you and I mean one of the

02:50:43 --> 02:50:47
things if you dig into how this stuff

02:50:44 --> 02:50:48
works in Python it gets a little bit

02:50:46 --> 02:50:51
more complicated because you have

02:50:47 --> 02:50:53
finally blocks which now need you need

02:50:50 --> 02:50:55
to go into do some stuff and then those

02:50:52 --> 02:50:58
can also throw and return wait what

02:50:54 --> 02:50:59
nothing and like the stuff matters for

02:50:57 --> 02:51:02
compatibility

02:50:58 --> 02:51:04
um like there's there's nestum there's

02:51:01 --> 02:51:05
with Clauses and so with Clauses are

02:51:03 --> 02:51:07
kind of like finally blocked with some

02:51:04 --> 02:51:08
special stuff going on and so there's

02:51:06 --> 02:51:13
nothing in general nesting of anything

02:51:07 --> 02:51:15
nothing of functions should be illegal

02:51:12 --> 02:51:18
it just feels like it adds a level of

02:51:14 --> 02:51:20
complexity Lex I'm merely an implementer

02:51:17 --> 02:51:23
oh this is again yeah one of one of the

02:51:19 --> 02:51:25
trade-offs you get when you

02:51:22 --> 02:51:27
decide to build a superset is you get to

02:51:24 --> 02:51:29
implement a full Fidelity implementation

02:51:26 --> 02:51:31
of the thing that you decided is good

02:51:28 --> 02:51:34
and so

02:51:30 --> 02:51:36
yeah I mean we can we can complain about

02:51:33 --> 02:51:39
he reality of the world and Shake our

02:51:35 --> 02:51:40
fist but it always feels like you

02:51:38 --> 02:51:43
shouldn't be allowed to do that like to

02:51:39 --> 02:51:45
declare functions in certain functions

02:51:42 --> 02:51:48
inside functions

02:51:44 --> 02:51:51
what happened to lacks the the lisp guy

02:51:47 --> 02:51:54
no I understand that but lisp is what I

02:51:50 --> 02:51:55
used to do in college so now you've

02:51:53 --> 02:51:57
grown up

02:51:54 --> 02:52:00
you know we've all done things in

02:51:56 --> 02:52:00
college we're not proud

02:51:59 --> 02:52:05
okay yeah I was gonna say you're afraid

02:52:02 --> 02:52:08
of me you're taking the whole internet

02:52:04 --> 02:52:10
it's uh it worked it worked as a joke in

02:52:07 --> 02:52:12
my head and yeah it was right so so

02:52:09 --> 02:52:14
message functions are joking aside

02:52:11 --> 02:52:15
actually really great and for certain

02:52:13 --> 02:52:17
things right and so these are also

02:52:14 --> 02:52:19
called closures

02:52:16 --> 02:52:20
are pretty cool and you can

02:52:18 --> 02:52:23
pass callbacks there's a lot of good

02:52:19 --> 02:52:27
patterns and so uh So speaking of which

02:52:22 --> 02:52:30
I don't think you have uh nested

02:52:26 --> 02:52:31
functions implemented yet in Mojo we

02:52:29 --> 02:52:34
don't have Lambda syntax but we do have

02:52:30 --> 02:52:35
the synthetics functions yeah so there's

02:52:33 --> 02:52:37
a few things on the roadmap they have

02:52:34 --> 02:52:39
that it would be cool to sort of just

02:52:36 --> 02:52:42
fly through because it's interesting to

02:52:38 --> 02:52:45
see you know how many features there are

02:52:41 --> 02:52:46
in a language small and big yep they

02:52:44 --> 02:52:48
have to implement yeah so first of all

02:52:45 --> 02:52:50
there's Tuple support and that has to do

02:52:47 --> 02:52:52
with some very specific aspect of it

02:52:49 --> 02:52:54
like the parentheses or not parentheses

02:52:51 --> 02:52:56
that yeah this is just a totally a

02:52:53 --> 02:52:59
syntactic thing a syntactic thing okay

02:52:55 --> 02:53:02
there's but it's cool it's still uh

02:52:58 --> 02:53:04
so keyword arguments and functions yeah

02:53:01 --> 02:53:07
so this is where in Python you can say

02:53:03 --> 02:53:09
call a function x equals four yeah and X

02:53:06 --> 02:53:10
is the name of the argument that's a

02:53:08 --> 02:53:12
nice sort of documenting

02:53:09 --> 02:53:14
self-documenting feature yeah I mean and

02:53:11 --> 02:53:15
again this isn't rocket science to

02:53:13 --> 02:53:17
implement that's just the laundry it's

02:53:14 --> 02:53:19
just on the list

02:53:16 --> 02:53:22
uh the bigger features are things like

02:53:18 --> 02:53:24
traits so traits are when you want to

02:53:21 --> 02:53:27
Define abstract so when you get into

02:53:23 --> 02:53:29
typed languages you need the ability to

02:53:26 --> 02:53:30
write generics and so you want to say I

02:53:28 --> 02:53:32
want to write this function and now I

02:53:30 --> 02:53:34
want to work on all things that are

02:53:31 --> 02:53:36
arithmetic like

02:53:33 --> 02:53:39
well what does arithmetic like mean well

02:53:35 --> 02:53:42
arithmetic-like is a categorization of a

02:53:38 --> 02:53:43
bunch of types and so it's again you can

02:53:41 --> 02:53:44
Define many different ways and I'm not

02:53:42 --> 02:53:47
going to go into ring Theory or

02:53:43 --> 02:53:48
something but the uh you know you can

02:53:46 --> 02:53:50
say it's arithmetic like if you can add

02:53:47 --> 02:53:52
subtract multiply divide it for example

02:53:49 --> 02:53:54
right and so what you're saying is

02:53:51 --> 02:53:58
you're saying there's a set of traits

02:53:53 --> 02:54:00
that apply to a broad variety of types

02:53:57 --> 02:54:02
and so they're all these types of

02:53:59 --> 02:54:03
arithmetic like all these tensors and

02:54:01 --> 02:54:06
floating Point integer and like there's

02:54:03 --> 02:54:09
this category of of types and then I can

02:54:05 --> 02:54:11
Define on an orthogonal axis algorithms

02:54:08 --> 02:54:12
that then work against types that have

02:54:10 --> 02:54:15
those properties

02:54:12 --> 02:54:17
and so this is a again it's a widely

02:54:14 --> 02:54:20
known thing it's been implemented in

02:54:16 --> 02:54:21
Swift and rust in many languages so it's

02:54:19 --> 02:54:24
not a Haskell

02:54:20 --> 02:54:25
which is where everybody learns learns

02:54:23 --> 02:54:27
their tricks from

02:54:24 --> 02:54:29
um but the uh but we need to implement

02:54:27 --> 02:54:31
hat and that will enable a new level of

02:54:28 --> 02:54:34
expressivity

02:54:30 --> 02:54:36
uh so classes yeah class is a big deal

02:54:33 --> 02:54:38
it's a big deal uh still to be

02:54:35 --> 02:54:41
implemented

02:54:37 --> 02:54:42
um like you said Lambda syntax

02:54:40 --> 02:54:45
and there's like detailed stuff like

02:54:41 --> 02:54:48
coal module import uh

02:54:45 --> 02:54:52
support for top level code and file

02:54:47 --> 02:54:54
scope so and then Global variables also

02:54:51 --> 02:54:56
being able to have variables outside

02:54:53 --> 02:54:58
of a top level well and so this comes

02:54:55 --> 02:55:01
back to the where Mojo came from and the

02:54:57 --> 02:55:03
fact that it's 0.1 right and so we're

02:55:00 --> 02:55:06
building the modular is building an AI

02:55:02 --> 02:55:08
stack right and an air stack has a bunch

02:55:05 --> 02:55:09
of problems working with hardware and

02:55:07 --> 02:55:11
writing high performance kernels and

02:55:08 --> 02:55:12
oing with kernel Fusion thing I was

02:55:10 --> 02:55:14
talking about and getting the most out

02:55:11 --> 02:55:16
of the hardware and so we've really

02:55:13 --> 02:55:18
prioritized and built Mojo to solve

02:55:15 --> 02:55:21
modulus problem

02:55:17 --> 02:55:23
right now our North Stars build out and

02:55:20 --> 02:55:24
support all the things and so we're

02:55:22 --> 02:55:27
making incredible progress by the way

02:55:23 --> 02:55:29
Mojo's only like seven months old so

02:55:26 --> 02:55:30
that's another interesting thing I mean

02:55:28 --> 02:55:32
part of the reason I wanted to mention

02:55:29 --> 02:55:34
some of these things is like there's a

02:55:31 --> 02:55:37
lot to to do and it's pretty cool how

02:55:33 --> 02:55:39
you just kind of sometimes you take for

02:55:36 --> 02:55:40
granted how much there is in a

02:55:38 --> 02:55:41
programming language how many cool

02:55:39 --> 02:55:44
features you kind of rely on and this is

02:55:40 --> 02:55:46
kind of a nice reminder when you lay it

02:55:43 --> 02:55:47
as a to-do list yeah and so I mean but

02:55:45 --> 02:55:49
also you look into

02:55:46 --> 02:55:52
it's it's amazing how much is also there

02:55:48 --> 02:55:55
and you take it for granted that

02:55:51 --> 02:55:57
um a value if you define it it will get

02:55:54 --> 02:55:59
destroyed automatically

02:55:56 --> 02:56:01
like that little feature itself is

02:55:58 --> 02:56:03
actually really complicated given the

02:56:00 --> 02:56:05
way the ownership system has to work and

02:56:02 --> 02:56:07
the way that works within Mojo is a huge

02:56:04 --> 02:56:08
step forward from what Russ and Swift

02:56:06 --> 02:56:10
have done can you say that again when a

02:56:07 --> 02:56:12
value when you define it gets destroyed

02:56:09 --> 02:56:14
yeah so like say you have a string right

02:56:12 --> 02:56:16
so you just find a string on the stack

02:56:13 --> 02:56:18
okay whatever that means like in in your

02:56:15 --> 02:56:21
local function

02:56:17 --> 02:56:23
right and so you say uh like whether it

02:56:20 --> 02:56:26
being a deaf once they just say x equals

02:56:22 --> 02:56:28
hello world right well if your string

02:56:25 --> 02:56:30
type requires you to allocate memory

02:56:27 --> 02:56:33
then when it's destroyed you have to

02:56:29 --> 02:56:35
deallocate it so in Python and Mojo you

02:56:32 --> 02:56:38
define that with the Dell method right

02:56:34 --> 02:56:38
where does that get run

02:56:38 --> 02:56:46
well it gets run sometime between the

02:56:42 --> 02:56:49
last use of the value and

02:56:45 --> 02:56:50
the end of the program like in this you

02:56:48 --> 02:56:53
know get into a garbage collection you

02:56:49 --> 02:56:56
get into like all these long debated you

02:56:52 --> 02:56:58
talk about religions and and trade-offs

02:56:55 --> 02:57:00
and things like this this is a hugely

02:56:57 --> 02:57:02
hotly contested world

02:56:59 --> 02:57:03
if you look at C plus plus the way this

02:57:01 --> 02:57:05
works is that

02:57:02 --> 02:57:07
if you define a variable or a set of

02:57:04 --> 02:57:11
variables within a function they get

02:57:06 --> 02:57:14
destroyed in a last in first out order

02:57:10 --> 02:57:16
so it's like nesting okay

02:57:13 --> 02:57:18
um this has a huge problem because if

02:57:15 --> 02:57:19
you define you have a big scope I need

02:57:17 --> 02:57:21
to find a whole bunch of values at the

02:57:18 --> 02:57:22
top and then you use them and then you

02:57:20 --> 02:57:24
do a whole bunch of code that doesn't

02:57:21 --> 02:57:27
use them they don't get destroyed until

02:57:23 --> 02:57:29
the very end of that scope right and so

02:57:26 --> 02:57:31
this also destroys tail calls it's a

02:57:28 --> 02:57:33
good functional programming right this

02:57:30 --> 02:57:35
has a bunch of different impacts on

02:57:32 --> 02:57:36
um you know you talk about reference

02:57:34 --> 02:57:38
counting optimizations and things like

02:57:35 --> 02:57:41
this a bunch of very low level things

02:57:37 --> 02:57:43
and so what Mojo does it has a different

02:57:40 --> 02:57:45
approach on that from any language I'm

02:57:42 --> 02:57:47
familiar with where it destroys them as

02:57:44 --> 02:57:49
oon as possible

02:57:46 --> 02:57:50
and by doing that you get better memory

02:57:48 --> 02:57:52
use you get better predictability you

02:57:49 --> 02:57:54
get tail calls that work like you get a

02:57:51 --> 02:57:55
bunch of other things you get better

02:57:53 --> 02:57:58
ownership tracking there's a bunch of

02:57:54 --> 02:58:01
these very simple things that are very

02:57:57 --> 02:58:03
fundamental that are already built in

02:58:00 --> 02:58:05
there in Mojo today that are the things

02:58:02 --> 02:58:07
that nobody talks about generally but

02:58:04 --> 02:58:09
when they don't work right you find out

02:58:06 --> 02:58:10
and you have to complain about is it

02:58:08 --> 02:58:13
rivial to know

02:58:09 --> 02:58:14
uh what's the soonest possible to delete

02:58:12 --> 02:58:16
a thing that's not going to be used

02:58:13 --> 02:58:18
again yeah well I mean it's generally

02:58:15 --> 02:58:20
trivial it's it's after the last use of

02:58:17 --> 02:58:22
it so if you find X as a string and then

02:58:19 --> 02:58:24
you have some use of X somewhere in your

02:58:21 --> 02:58:26
code within that scope I mean within the

02:58:23 --> 02:58:28
scope that's accessible it's yeah

02:58:25 --> 02:58:30
exactly so you can only use something

02:58:27 --> 02:58:31
within its scope and so then it doesn't

02:58:29 --> 02:58:34
wait until the end of the script to

02:58:30 --> 02:58:37
delete it it destroys it after the last

02:58:33 --> 02:58:38
years so there's kind of some very ego

02:58:36 --> 02:58:40
machine that's just sitting there and

02:58:37 --> 02:58:41
eleting yeah and it's all in the

02:58:39 --> 02:58:46
compiler so it's not at runtime which is

02:58:40 --> 02:58:47
also cool and so yeah and so what and

02:58:45 --> 02:58:50
this is actually non-trivial because you

02:58:46 --> 02:58:51
have control flow right and so it gets

02:58:49 --> 02:58:53
complicated pretty quickly and so like

02:58:50 --> 02:58:54
getting straight was not also you have

02:58:52 --> 02:58:57
to insert delete like in a lot of places

02:58:53 --> 02:58:58
potentially yeah exactly so the compiler

02:58:56 --> 02:59:00
asks a reason about this and this is

02:58:57 --> 02:59:02
where again it's experience building

02:58:59 --> 02:59:03
languages and not getting this right so

02:59:01 --> 02:59:06
again you get another chance to do it

02:59:03 --> 02:59:08
and you get basic things like this right

02:59:05 --> 02:59:10
but it's it's extremely powerful when

02:59:07 --> 02:59:11
you do that right and so there's a bunch

02:59:09 --> 02:59:13
of things like that that kind of combine

02:59:10 --> 02:59:15
together

02:59:12 --> 02:59:16
and this comes back to the you get a

02:59:14 --> 02:59:18
chance to do it the right way do it the

02:59:15 --> 02:59:20
right way and make sure that every brick

02:59:17 --> 02:59:21
you put down is really good so that when

02:59:19 --> 02:59:23
you put more bricks on top of it they

02:59:21 --> 02:59:25
stack up to something that's beautiful

02:59:22 --> 02:59:27
well there's also

02:59:24 --> 02:59:30
like how many

02:59:26 --> 02:59:31
design discussions do there have to be

02:59:29 --> 02:59:33
about particular details like

02:59:30 --> 02:59:36
implementation of particular small

02:59:32 --> 02:59:39
features because the features that

02:59:35 --> 02:59:40
seem small I bet some of them might be

02:59:38 --> 02:59:43
like

02:59:39 --> 02:59:45
really uh require really big design

02:59:42 --> 02:59:47
decisions yeah well so I mean let me

02:59:44 --> 02:59:49
give you another example of this python

02:59:46 --> 02:59:52
has a feature called async await so it's

02:59:48 --> 02:59:55
a new feature I mean in in the long

02:59:51 --> 02:59:58
arguments on History it's a relatively

02:59:54 --> 03:00:00
new feature right that allows way more

02:59:57 --> 03:00:03
xpressive asynchronous programming okay

02:59:59 --> 03:00:04
again this is this is a Python's a

03:00:02 --> 03:00:06
beautiful thing and they did things that

03:00:03 --> 03:00:08
are great for Mojo for completely

03:00:05 --> 03:00:09
different reasons

03:00:07 --> 03:00:12
um the reason that async await got added

03:00:08 --> 03:00:14
to python as far as I know is because

03:00:11 --> 03:00:17
python doesn't support threads

03:00:13 --> 03:00:18
okay and so python doesn't support

03:00:16 --> 03:00:20
hreads but you want to work with

03:00:17 --> 03:00:22
networking and other things like that

03:00:19 --> 03:00:23
can block I mean python does

03:00:21 --> 03:00:25
upport threads it's just not its

03:00:22 --> 03:00:26
trength and so

03:00:24 --> 03:00:28
um

03:00:25 --> 03:00:29
and so they added this feature called

03:00:27 --> 03:00:32
async await it's also seen in other

03:00:28 --> 03:00:34
languages like Swift and JavaScript and

03:00:31 --> 03:00:36
many other places as well

03:00:33 --> 03:00:38
um async wait and Mojo's amazing because

03:00:35 --> 03:00:40
we have a high performance heterogeneous

03:00:37 --> 03:00:44
compute runtime underneath the covers

03:00:39 --> 03:00:47
that then allows non-blocking IO so you

03:00:43 --> 03:00:48
get full use of your accelerator that's

03:00:46 --> 03:00:51
huge it turns out it's actually really

03:00:47 --> 03:00:52
an important part of fully utilizing a

03:00:50 --> 03:00:54
machine you talk about design

03:00:51 --> 03:00:56
discussions that took a lot of

03:00:53 --> 03:00:59
discussions right and it probably will

03:00:55 --> 03:01:00
require more iteration and so My

03:00:58 --> 03:01:02
Philosophy with Mojo is that you know we

03:00:59 --> 03:01:03
have a small team of really good people

03:01:01 --> 03:01:06
that are pushing forward and they're

03:01:02 --> 03:01:08
very good at the extremely deep knowing

03:01:05 --> 03:01:10
how the compiler and runtime and like

03:01:07 --> 03:01:11
all the the low-level stuff works

03:01:09 --> 03:01:12
together

03:01:10 --> 03:01:14
um but they're not perfect the same

03:01:11 --> 03:01:16
thing as the Swift team right and this

03:01:13 --> 03:01:18
where one of the reasons we released

03:01:15 --> 03:01:20
Mojo much earlier is so we can get

03:01:17 --> 03:01:23
feedback and we've already like renamed

03:01:19 --> 03:01:26
a keyword and did a community feedback

03:01:22 --> 03:01:28
and which one uh we use an ampersand and

03:01:25 --> 03:01:30
now it's named in out we're not renaming

03:01:27 --> 03:01:31
existing python keywords because that

03:01:29 --> 03:01:34
breaks compatibility right we're

03:01:30 --> 03:01:36
naming things we're adding and making

03:01:33 --> 03:01:38
sure that they are designed well we get

03:01:35 --> 03:01:40
usage experience we iterate and work

03:01:37 --> 03:01:41
with the community because again if you

03:01:39 --> 03:01:42
scale something really fast and

03:01:40 --> 03:01:44
everybody write the older code and they

03:01:41 --> 03:01:46
start using it in production then it's

03:01:43 --> 03:01:47
impossible to change and so you want to

03:01:45 --> 03:01:49
learn from people you want to iterate

03:01:46 --> 03:01:51
and work on that early on and this is

03:01:48 --> 03:01:53
where design discussions it's it's

03:01:50 --> 03:01:55
actually quite important could you could

03:01:52 --> 03:01:58
you incorporate an emoji like into the

03:01:54 --> 03:02:01
language into the main language

03:01:57 --> 03:02:04
do you have a favorite one well I really

03:02:00 --> 03:02:06
like uh in terms of humor like uh RAW

03:02:03 --> 03:02:07
full whatever rolling on the floor

03:02:05 --> 03:02:09
laughing

03:02:06 --> 03:02:11
so that could be like a

03:02:08 --> 03:02:13
what would that be the use case for that

03:02:10 --> 03:02:14
I can accept throw an exception of some

03:02:12 --> 03:02:17
sort I don't know you should totally

03:02:13 --> 03:02:17
file a feature request

03:02:16 --> 03:02:21
uh or maybe a hard one it has to be a

03:02:18 --> 03:02:23
hard one uh people have told me that I'm

03:02:20 --> 03:02:25
insane so this is this is this is I I'm

03:02:22 --> 03:02:27
liking this

03:02:24 --> 03:02:29
I'm gonna I'm gonna use the viral nature

03:02:26 --> 03:02:32
of the internet to actually get this to

03:02:28 --> 03:02:33
get this passed uh I mean it's funny you

03:02:31 --> 03:02:36
come back to the flame Emoji file

03:02:32 --> 03:02:38
xtension right the uh um you know we

03:02:35 --> 03:02:41
have the option to use the flame Emoji

03:02:37 --> 03:02:43
which just even that concept because for

03:02:40 --> 03:02:46
example the people at GitHub say no I've

03:02:42 --> 03:02:48
seen everything like

03:02:45 --> 03:02:51
yeah there's something uh it kind of

03:02:47 --> 03:02:53
it's reinvigorating it's like uh

03:02:50 --> 03:02:55
it's like oh that's possible that's

03:02:52 --> 03:02:57
really cool that for some reason that

03:02:54 --> 03:02:58
makes everything else actually I'm

03:02:56 --> 03:03:00
really excited the world is ready for

03:02:57 --> 03:03:01
this stuff right and so you know when we

03:02:59 --> 03:03:03
have a package manager we'll clearly

03:03:00 --> 03:03:06
have to innovate by having the compiled

03:03:02 --> 03:03:08
package thing be the little box with the

03:03:05 --> 03:03:10
bow on it right I mean

03:03:07 --> 03:03:12
it has to be done it has to be done is

03:03:09 --> 03:03:15
there some stuff on the road map that

03:03:11 --> 03:03:16
you're particularly stressed about or

03:03:14 --> 03:03:19
excited about that you're thinking about

03:03:15 --> 03:03:21
a lot I mean as a today snapshot which

03:03:18 --> 03:03:23
will be obviously tomorrow uh the

03:03:20 --> 03:03:26
lifetime stuff is really exciting and so

03:03:22 --> 03:03:29
lifetimes give you safe references to

03:03:25 --> 03:03:30
memory without dangling pointers and so

03:03:28 --> 03:03:31
this has been done in languages like

03:03:29 --> 03:03:33
Russ before and so we have a new

03:03:30 --> 03:03:35
approach which is really cool I'm very

03:03:32 --> 03:03:36
excited about that that'll be out to the

03:03:34 --> 03:03:39
community very soon

03:03:35 --> 03:03:41
um the traits feature is really a big

03:03:38 --> 03:03:43
deal and so that's blocking a lot of API

03:03:40 --> 03:03:45
design and so there's that I think

03:03:42 --> 03:03:46
that's really exciting

03:03:44 --> 03:03:48
um

03:03:45 --> 03:03:49
a lot of it is these kind of table

03:03:47 --> 03:03:52
Stakes features

03:03:48 --> 03:03:54
um one of the things that is again also

03:03:51 --> 03:03:57
Lessons Learned with Swift uh

03:03:53 --> 03:03:59
is that uh programmers in general like

03:03:56 --> 03:04:01
to add syntactic sugar

03:03:58 --> 03:04:04
and so it's like oh well this annoying

03:04:00 --> 03:04:05
thing like like in Python you have to

03:04:03 --> 03:04:09
spell ad

03:04:04 --> 03:04:10
why can't I just use plus def plus come

03:04:08 --> 03:04:12
on why can't I just do that right and so

03:04:09 --> 03:04:14
try a little bit of syntactic sugar it

03:04:12 --> 03:04:17
makes sense it's beautiful it's obvious

03:04:13 --> 03:04:18
we're trying not to do that

03:04:16 --> 03:04:20
and so

03:04:17 --> 03:04:22
um for two different reasons one of

03:04:19 --> 03:04:25
which is that again lesson learn Swift

03:04:21 --> 03:04:26
has a lot of syntactic sugar

03:04:24 --> 03:04:28
um

03:04:25 --> 03:04:31
which may maybe a good thing maybe not I

03:04:27 --> 03:04:33
don't know but um but because it's such

03:04:30 --> 03:04:36
an easy and addictive thing to do sugar

03:04:32 --> 03:04:38
like make sure blood get crazy right

03:04:35 --> 03:04:39
um like the community will really dig

03:04:37 --> 03:04:41
into that and want to do a lot of that

03:04:38 --> 03:04:43
and I think it's very distracting from

03:04:40 --> 03:04:44
building the core abstractions second is

03:04:42 --> 03:04:47
we want to be a good member of the

03:04:43 --> 03:04:49
Python community

03:04:46 --> 03:04:52
right and so we want to work with the

03:04:48 --> 03:04:53
broader python community and yeah we're

03:04:51 --> 03:04:55
pushing forward a bunch of systems

03:04:52 --> 03:04:56
programming features and we need to

03:04:54 --> 03:04:58
build them out to understand them but

03:04:55 --> 03:05:00
once we get a long ways forward I want

03:04:57 --> 03:05:01
o make sure that we go back to the

03:04:59 --> 03:05:02
python community and say okay let's do

03:05:00 --> 03:05:04
some design reviews let's actually talk

03:05:01 --> 03:05:06
about this stuff let's figure out how we

03:05:03 --> 03:05:08
want this stuff all to work together and

03:05:05 --> 03:05:09
syntactic sugar just makes all that more

03:05:07 --> 03:05:12
complicated so

03:05:09 --> 03:05:15
and uh yeah list comprehensions that you

03:05:11 --> 03:05:18
have to be implemented and my favorite I

03:05:14 --> 03:05:18
mean dictionaries

03:05:20 --> 03:05:24
yeah but nonetheless it's actually still

03:05:22 --> 03:05:28
quite interesting and useful as you

03:05:24 --> 03:05:30
mentioned modular is very new

03:05:27 --> 03:05:33
Mojo is very new it's a relatively small

03:05:29 --> 03:05:36
team yeah it's building up this yeah

03:05:32 --> 03:05:38
we're just gigantic stack it's

03:05:35 --> 03:05:40
incredible stack that's going to perhaps

03:05:37 --> 03:05:44
Define the future of

03:05:39 --> 03:05:47
development of our AI overlords uh we

03:05:43 --> 03:05:51
just hope it will be useful

03:05:46 --> 03:05:54
as do all of us uh so what uh what have

03:05:50 --> 03:05:56
you learned from this process of

03:05:53 --> 03:05:58
building up a team maybe one question is

03:05:55 --> 03:06:01
how do you hire

03:05:57 --> 03:06:03
great programmers great people that

03:06:00 --> 03:06:08
operate in this

03:06:02 --> 03:06:12
compiler Hardware machine learning

03:06:07 --> 03:06:14
software interface design space yeah and

03:06:11 --> 03:06:16
maybe are a little bit fluid yeah what

03:06:13 --> 03:06:18
hey can do so okay so language design

03:06:15 --> 03:06:20
too so building a company is just as

03:06:17 --> 03:06:23
interesting in different ways is

03:06:19 --> 03:06:25
building a language like different skill

03:06:22 --> 03:06:26
sets different things but super

03:06:24 --> 03:06:28
interesting and I've built a lot of

03:06:25 --> 03:06:30
teams in a lot of different places

03:06:27 --> 03:06:32
um if you zoom in from the big problem

03:06:29 --> 03:06:35
into recruiting

03:06:31 --> 03:06:36
well so here's our problem okay I'll

03:06:34 --> 03:06:39
just I'll be very straightforward

03:06:35 --> 03:06:41
about this we started modular with a lot

03:06:38 --> 03:06:42
of conviction about we understand the

03:06:40 --> 03:06:44
problems we understand the customer pain

03:06:41 --> 03:06:47
points we need to work backwards from

03:06:43 --> 03:06:48
the suffering in the industry and if we

03:06:46 --> 03:06:50
solve those problems we think it'll be

03:06:47 --> 03:06:51
useful for people

03:06:49 --> 03:06:54
but the problem is is that the people we

03:06:51 --> 03:06:56
need to hire as you say are all these

03:06:53 --> 03:07:00
super specialized people that have jobs

03:06:55 --> 03:07:02
at Big Tech big Tech worlds right and

03:06:59 --> 03:07:04
you know we I don't think we have

03:07:01 --> 03:07:06
um product Market fit in the way that a

03:07:03 --> 03:07:08
normal startup does we don't have

03:07:05 --> 03:07:11
product Market fit challenges because

03:07:07 --> 03:07:12
right now everybody's using Ai and so

03:07:10 --> 03:07:14
many of them are suffering and they want

03:07:11 --> 03:07:17
help and so again we started with strong

03:07:13 --> 03:07:18
conviction now again you have to hire

03:07:16 --> 03:07:21
and recruit the best and the best all

03:07:18 --> 03:07:22
have jobs and so what we've done is we

03:07:20 --> 03:07:24
said okay well let's build an amazing

03:07:21 --> 03:07:25
culture

03:07:23 --> 03:07:27
start with that that's usually not

03:07:24 --> 03:07:29
something a company starts with usually

03:07:26 --> 03:07:31
ou hire a bunch of people and then it

03:07:28 --> 03:07:33
people start fighting and it turns into

03:07:30 --> 03:07:35
gigantic mess and then you try to figure

03:07:32 --> 03:07:36
out how to improve your culture later my

03:07:34 --> 03:07:38
co-founder Tim in particular is super

03:07:35 --> 03:07:40
passionate about making sure that that's

03:07:37 --> 03:07:42
right and we've spent a lot of time

03:07:39 --> 03:07:44
arly on to make sure that we can scale

03:07:41 --> 03:07:46
can you come inside before we get to the

03:07:43 --> 03:07:47
second yeah what makes for a good

03:07:45 --> 03:07:48
culture

03:07:46 --> 03:07:50
um so I mean there's many different

03:07:47 --> 03:07:51
cultures and I have learned many things

03:07:49 --> 03:07:55
from

03:07:50 --> 03:07:57
several very unique almost famously

03:07:54 --> 03:07:58
unique cultures and some of them I

03:07:56 --> 03:08:01
learned what to do and some of them I

03:07:57 --> 03:08:02
learned what not to do yep okay and so

03:08:00 --> 03:08:05
um

03:08:01 --> 03:08:08
we want an inclusive culture uh I

03:08:04 --> 03:08:09
believe in like amazing people working

03:08:07 --> 03:08:11
together

03:08:08 --> 03:08:12
and so I've seen cultures where people

03:08:10 --> 03:08:14
you have amazing people and they're

03:08:11 --> 03:08:16
fighting each other

03:08:13 --> 03:08:19
I see amazing people and they're told

03:08:15 --> 03:08:20
what to do like Thou shalt line up and

03:08:18 --> 03:08:23
o what I say it doesn't matter if it's

03:08:19 --> 03:08:24
the right thing do it right and neither

03:08:22 --> 03:08:26
of these is the and I've seen people

03:08:23 --> 03:08:28
that have no Direction they're just kind

03:08:25 --> 03:08:29
of floating in different places and they

03:08:27 --> 03:08:32
want to be amazing they just don't know

03:08:28 --> 03:08:33
how and so a lot of it starts with have

03:08:31 --> 03:08:35
a Clear Vision

03:08:32 --> 03:08:38
right and so we have a clear vision of

03:08:34 --> 03:08:40
what we're doing and um so I kind of

03:08:37 --> 03:08:42
grew up at Apple in my engineering life

03:08:39 --> 03:08:45
right and so a lot of the Apple DNA

03:08:42 --> 03:08:47
rubbed off on me my co-founder Tim also

03:08:44 --> 03:08:49
is like a strong product guy and so what

03:08:46 --> 03:08:52
we learned is you know I decided Apple

03:08:48 --> 03:08:54
that you don't work from building cool

03:08:51 --> 03:08:56
technology you don't work from like come

03:08:54 --> 03:08:57
up with cool product and think about the

03:08:55 --> 03:08:59
features you'll have in the big check

03:08:56 --> 03:09:00
boxes and stuff like this

03:08:58 --> 03:09:02
because if you go talk to customers they

03:08:59 --> 03:09:03
don't actually care about your product

03:09:01 --> 03:09:06
hey don't care about your technology

03:09:02 --> 03:09:09
what they care about is their problems

03:09:05 --> 03:09:11
right and if your product can help solve

03:09:08 --> 03:09:13
their problems well hey they might be

03:09:10 --> 03:09:14
interested in that right and so if you

03:09:12 --> 03:09:15
speak to them about their problems if

03:09:13 --> 03:09:17
you understand and you have compassion

03:09:14 --> 03:09:19
you understand what people are working

03:09:16 --> 03:09:21
with then you can work backwards to

03:09:18 --> 03:09:23
building an amazing product so divisions

03:09:20 --> 03:09:25
finding the problem and then you can

03:09:22 --> 03:09:27
work backwards in solving technology got

03:09:24 --> 03:09:30
it and at Apple like it's I think pretty

03:09:26 --> 03:09:32
famously said that you know for every

03:09:29 --> 03:09:33
ou know there's a hundred no's for

03:09:31 --> 03:09:35
every yes

03:09:32 --> 03:09:38
I would find that to say that there's a

03:09:34 --> 03:09:39
hundred not yet for every yes but

03:09:37 --> 03:09:42
famously if you go back to the iPhone

03:09:38 --> 03:09:44
for example right the iPhone one every I

03:09:41 --> 03:09:45
mean many people laughed at it because

03:09:43 --> 03:09:47
it didn't have 3G it didn't have copy

03:09:44 --> 03:09:50
and paste

03:09:46 --> 03:09:52
right and then a year later okay finally

03:09:49 --> 03:09:54
it has 3G but it still doesn't have copy

03:09:51 --> 03:09:55
and paste it's a joke nobody will ever

03:09:53 --> 03:09:58
use this product blah blah blah blah

03:09:54 --> 03:10:00
right well year three it had

03:09:57 --> 03:10:02
copy and paste and people stopped

03:09:59 --> 03:10:04
talking about it right and so and so

03:10:01 --> 03:10:06
being laser focused and having

03:10:03 --> 03:10:08
conviction and understanding what the

03:10:05 --> 03:10:09
core problems are and giving the team

03:10:07 --> 03:10:12
the space to be able to build the right

03:10:08 --> 03:10:14
Tech is really important

03:10:11 --> 03:10:17
um also I mean you come back to

03:10:13 --> 03:10:18
recruiting you have to pay well right so

03:10:16 --> 03:10:20
we have to pay industry leading salaries

03:10:17 --> 03:10:22
and have good benefits and things like

03:10:19 --> 03:10:24
this that's a big piece uh we're a

03:10:21 --> 03:10:26
remote first company and so we have to

03:10:24 --> 03:10:30
uh

03:10:25 --> 03:10:33
so remote first has a very strong set

03:10:29 --> 03:10:35
of pros and cons on the one hand you can

03:10:32 --> 03:10:37
hire people from wherever they are and

03:10:34 --> 03:10:39
you can attract amazing talent even if

03:10:36 --> 03:10:41
they live in strange places or unusual

03:10:38 --> 03:10:42
places on the other hand you have time

03:10:40 --> 03:10:44
zones

03:10:42 --> 03:10:47
on the other hand you have like

03:10:43 --> 03:10:49
verybody on the internet will fight if

03:10:46 --> 03:10:51
they don't understand each other and so

03:10:48 --> 03:10:52
we've had to learn how to like have a

03:10:50 --> 03:10:54
system where we actually fly people in

03:10:51 --> 03:10:55
and we get the whole company together

03:10:53 --> 03:10:57
periodically and then we get work groups

03:10:54 --> 03:10:59
together and we plan and execute

03:10:56 --> 03:11:02
together and there's like an intimacy to

03:10:58 --> 03:11:04
the in-person brainstorming yeah I guess

03:11:01 --> 03:11:05
you lose but maybe you don't maybe if

03:11:03 --> 03:11:07
you get to know each other well and you

03:11:04 --> 03:11:09
trust each other maybe you can do that

03:11:06 --> 03:11:10
yeah well so when the pandemic first hit

03:11:08 --> 03:11:12
I mean I'm curious about your experience

03:11:09 --> 03:11:15
too the first thing I missed was having

03:11:11 --> 03:11:18
whiteboards yeah right in those design

03:11:14 --> 03:11:20
discussions where like I can high high

03:11:17 --> 03:11:22
intensity work through things get things

03:11:19 --> 03:11:23
done work through the problem of the day

03:11:21 --> 03:11:25
understand where you're on figure out

03:11:22 --> 03:11:26
and solve the problem and move forward

03:11:24 --> 03:11:28
yeah

03:11:25 --> 03:11:31
um but we figured out ways to work

03:11:27 --> 03:11:33
around that now with you know all these

03:11:30 --> 03:11:35
uh screen sharing and other things like

03:11:32 --> 03:11:37
that that we do the thing I miss now is

03:11:34 --> 03:11:39
itting down at a lunch table with the

03:11:36 --> 03:11:42
team yeah the spontaneous things like

03:11:39 --> 03:11:45
those the the coffee the coffee bar

03:11:41 --> 03:11:46
things and the and the bumping into each

03:11:44 --> 03:11:48
other and getting to know people outside

03:11:45 --> 03:11:51
of the transactional solve a problem

03:11:47 --> 03:11:54
over Zoom okay and I think there's

03:11:50 --> 03:11:55
just a lot of stuff that um I'm

03:11:53 --> 03:11:57
not an expert at this I don't know who

03:11:54 --> 03:11:59
is hopefully there's some people but

03:11:56 --> 03:12:00
here's stuff that somehow is missing on

03:11:58 --> 03:12:02
Zoom

03:11:59 --> 03:12:03
even with the Whiteboard if you look at

03:12:01 --> 03:12:05
hat

03:12:02 --> 03:12:07
if you have a room with one person at

03:12:04 --> 03:12:10
he Whiteboard and there's like three

03:12:06 --> 03:12:10
other people at a table

03:12:09 --> 03:12:14
there's uh first of all there's a social

03:12:12 --> 03:12:16
aspect to that where you're just

03:12:13 --> 03:12:18
shooting the a little bit almost

03:12:15 --> 03:12:21
like yeah as people just kind of coming

03:12:17 --> 03:12:24
in and yeah that but also while

03:12:20 --> 03:12:26
like it's a breakout discussion that

03:12:23 --> 03:12:29
happens for like seconds at a time maybe

03:12:25 --> 03:12:31
an inside joke or it's like this

03:12:28 --> 03:12:33
interesting Dynamic that happens that

03:12:30 --> 03:12:35
Zoom you're bonding yeah you're bonding

03:12:32 --> 03:12:37
but through that bonding

03:12:34 --> 03:12:39
you get the excitement there's certain

03:12:36 --> 03:12:41
ideas are like complete and

03:12:38 --> 03:12:44
you'll see that in the faces of others

03:12:40 --> 03:12:48
that you won't see necessarily on zoom

03:12:43 --> 03:12:50
in like something it feels like that

03:12:47 --> 03:12:52
should be possible to do

03:12:49 --> 03:12:53
without being in person well I mean

03:12:51 --> 03:12:56
being in person is a very different

03:12:52 --> 03:12:58
hing yeah I don't it's worth it but you

03:12:55 --> 03:13:00
can't always do it and so again we're

03:12:57 --> 03:13:03
still learning and we're also learning

03:12:59 --> 03:13:05
as like Humanity with this new reality

03:13:02 --> 03:13:07
right but um but what we found is that

03:13:04 --> 03:13:09
getting people together whether it be a

03:13:06 --> 03:13:11
team or the whole company or whatever

03:13:08 --> 03:13:13
is it worth the expense because people

03:13:10 --> 03:13:15
work together and are happier

03:13:12 --> 03:13:17
after that like it just it just like

03:13:14 --> 03:13:19
there's a massive period of time where

03:13:16 --> 03:13:21
you like go out and things start getting

03:13:18 --> 03:13:22
frayed pull people together and then you

03:13:20 --> 03:13:24
realize that we're all working together

03:13:21 --> 03:13:25
we see things the same way we work

03:13:23 --> 03:13:27
through the disagreement or the

03:13:24 --> 03:13:28
misunderstanding we're talking across

03:13:26 --> 03:13:30
each other and then you work much better

03:13:27 --> 03:13:33
together and so things like that I think

03:13:29 --> 03:13:35
are really quite important what about uh

03:13:32 --> 03:13:36
people that are kind of specialized in

03:13:34 --> 03:13:38
very different aspects of the stack

03:13:35 --> 03:13:39
working together what are some

03:13:37 --> 03:13:41
interesting challenges there yeah well

03:13:38 --> 03:13:42
so I mean I mean there's lots of

03:13:40 --> 03:13:44
interesting people as you can tell I'm

03:13:41 --> 03:13:47
you know hard to deal with too

03:13:43 --> 03:13:51
but you're one of the most lovable the

03:13:46 --> 03:13:54
uh uh so one of the so there's different

03:13:50 --> 03:13:56
philosophies in building teams uh for me

03:13:53 --> 03:13:57
and so some people say higher 10x

03:13:55 --> 03:13:59
programmers and that's the only thing

03:13:56 --> 03:14:01
that whatever that means right

03:13:58 --> 03:14:04
um what I believe in is building

03:14:00 --> 03:14:06
well-balanced teams teams that have

03:14:03 --> 03:14:08
people that are different in them like

03:14:05 --> 03:14:11
if you have all generals and no troops

03:14:07 --> 03:14:13
or all troops and no generals or you

03:14:10 --> 03:14:14
have all people that think in one way

03:14:12 --> 03:14:16
and not the other way what you get is

03:14:13 --> 03:14:17
you get a very biased and skewed and

03:14:15 --> 03:14:20
weird situation where people end up

03:14:16 --> 03:14:21
being unhappy and so what I like to do

03:14:19 --> 03:14:24
is I like to build teams of people where

03:14:20 --> 03:14:26
they're not all the same you know we do

03:14:23 --> 03:14:28
have teams and they're focused on like

03:14:25 --> 03:14:30
runtime or compiler GPU or Excel or

03:14:27 --> 03:14:32
whatever the specialty is but people

03:14:29 --> 03:14:34
bring a different take and have a

03:14:31 --> 03:14:36
different perspective and I look for

03:14:33 --> 03:14:37
people that complement each other and

03:14:35 --> 03:14:39
particularly if you look at leadership

03:14:36 --> 03:14:41
teams and things like this you don't

03:14:38 --> 03:14:43
want everybody thinking the same way you

03:14:40 --> 03:14:45
want people bringing different

03:14:42 --> 03:14:46
perspectives and experiences and so I

03:14:44 --> 03:14:48
think that's really important that's

03:14:45 --> 03:14:52
team but what about building a a company

03:14:48 --> 03:14:54
as ambitious as modular so what uh some

03:14:51 --> 03:14:57
interesting questions there oh I mean so

03:14:53 --> 03:14:59
many like so um one of the things I love

03:14:56 --> 03:15:01
about okay so modular is the first

03:14:58 --> 03:15:02
company I built from scratch

03:15:00 --> 03:15:05
um

03:15:01 --> 03:15:07
uh one of the first things that was

03:15:04 --> 03:15:10
profound was I'm not cleaning up

03:15:06 --> 03:15:11
somebody else's mess right and so if you

03:15:09 --> 03:15:13
look at and that's liberating to

03:15:10 --> 03:15:16
something it's super liberating and

03:15:12 --> 03:15:19
um and also many of the projects I've

03:15:15 --> 03:15:21
built in the past have not been core to

03:15:18 --> 03:15:23
the product of the company

03:15:20 --> 03:15:27
Swift is not Apple's product

03:15:22 --> 03:15:30
right mlar is not Google's revenue

03:15:26 --> 03:15:32
machine or whatever right it's not it's

03:15:29 --> 03:15:35
important but it's like working on

03:15:31 --> 03:15:37
the accounting software for you know the

03:15:34 --> 03:15:39
retail giant or something right it's

03:15:36 --> 03:15:41
it's like enabling infrastructure

03:15:38 --> 03:15:44
and technology and so at modular the the

03:15:40 --> 03:15:46
tech we're building is

03:15:43 --> 03:15:47
here to solve people's problems like it

03:15:45 --> 03:15:50
is directly the thing that we're giving

03:15:46 --> 03:15:52
to people and so this is a really big

03:15:49 --> 03:15:53
difference and what it means for me as a

03:15:51 --> 03:15:55
leader but also for many of our

03:15:52 --> 03:15:57
Engineers is they're working on the

03:15:54 --> 03:15:59
thing that matters and that's actually

03:15:56 --> 03:16:00
pretty I mean again for for compiler

03:15:58 --> 03:16:03
people and things like that that's

03:15:59 --> 03:16:04
usually not the case right and so

03:16:02 --> 03:16:08
that's that's also pretty exciting and

03:16:03 --> 03:16:10
quite nice but the um one of the

03:16:07 --> 03:16:12
ways that this manifests is it makes it

03:16:09 --> 03:16:14
easier to make decisions

03:16:11 --> 03:16:16
and so one of the challenges I've had in

03:16:13 --> 03:16:18
other worlds is it's like okay well

03:16:15 --> 03:16:20
Community matters

03:16:17 --> 03:16:22
omehow for the goodness of the world

03:16:19 --> 03:16:23
like or open source matters

03:16:21 --> 03:16:26
theoretically but I don't want to pay

03:16:22 --> 03:16:28
for a t-shirt

03:16:25 --> 03:16:30
right or some Swag like well t-shirts

03:16:27 --> 03:16:32
cost 10 bucks each you can have 100

03:16:29 --> 03:16:34
t-shirts for a thousand dollars to a

03:16:31 --> 03:16:38
mega Corp a thousand dollars is

03:16:33 --> 03:16:40
uncountably can't count that low right

03:16:37 --> 03:16:41
but justifying it and getting a t-shirt

03:16:39 --> 03:16:43
by the way if you'd like a t-shirt

03:16:40 --> 03:16:46
why would 100

03:16:42 --> 03:16:50
like a t-shirt are you joking you can

03:16:45 --> 03:16:53
have a fire Emoji t-shirt is that I will

03:16:49 --> 03:16:55
treasure this I will pass it down

03:16:52 --> 03:16:56
to my grandchildren and so you know it's

03:16:54 --> 03:16:58
very liberating to be able to

03:16:55 --> 03:16:59
decide I think that life should have a

03:16:57 --> 03:17:02
t-shirt

03:16:58 --> 03:17:04
right and it becomes very simple

03:17:01 --> 03:17:07
like Lex

03:17:03 --> 03:17:10
it's this uh this is awesome

03:17:06 --> 03:17:14
um so

03:17:09 --> 03:17:16
I have to ask you about the

03:17:13 --> 03:17:18
one of the interesting developments with

03:17:15 --> 03:17:22
large language models

03:17:17 --> 03:17:25
is that they're able to generate code

03:17:21 --> 03:17:29
uh recently really well

03:17:24 --> 03:17:31
I guess to a degree that maybe a

03:17:28 --> 03:17:33
I don't know if you understand but I

03:17:30 --> 03:17:36
have I struggle to understand because it

03:17:32 --> 03:17:39
forces me to ask questions about the

03:17:35 --> 03:17:40
nature of programming of the nature of

03:17:38 --> 03:17:43
thought

03:17:39 --> 03:17:45
because the uh language models are able

03:17:42 --> 03:17:47
to predict the kind of code I was about

03:17:44 --> 03:17:49
o write so well yep that it makes me

03:17:46 --> 03:17:51
wonder like how unique my brain is and

03:17:48 --> 03:17:54
where the valuable ideas actually come

03:17:50 --> 03:17:55
from like how much do I contribute in

03:17:53 --> 03:18:00
terms of uh

03:17:54 --> 03:18:02
Ingenuity Innovation to code I write or

03:17:59 --> 03:18:03
design and that kind of stuff

03:18:01 --> 03:18:05
when you stand on the shoulders of

03:18:03 --> 03:18:08
giants are you really doing anything and

03:18:04 --> 03:18:10
what L alums are helping you do is they

03:18:07 --> 03:18:12
help you stand on the shoulders of

03:18:09 --> 03:18:13
giants new program there's mistakes

03:18:11 --> 03:18:16
they're interesting that you learn from

03:18:12 --> 03:18:18
but I just it would love to get your

03:18:15 --> 03:18:21
opinion first high level yeah of what

03:18:17 --> 03:18:23
you think about this impact of large

03:18:20 --> 03:18:25
language models when they do program

03:18:22 --> 03:18:27
synthesis when they generate code yeah

03:18:24 --> 03:18:27
well so

03:18:26 --> 03:18:31
um

03:18:27 --> 03:18:32
I don't know where it all goes yeah

03:18:30 --> 03:18:35
um I'm an optimist and I'm a human

03:18:31 --> 03:18:37
Optimist right I think that things I've

03:18:34 --> 03:18:38
seen are that a lot of the llms are

03:18:36 --> 03:18:41
ally good at crushing leak code

03:18:37 --> 03:18:43
projects and they can reverse the link

03:18:40 --> 03:18:44
list like crazy well it turns out

03:18:42 --> 03:18:46
here's a lot of

03:18:43 --> 03:18:48
instances of that on the internet and

03:18:45 --> 03:18:49
it's a pretty stock thing and so if you

03:18:47 --> 03:18:52
want to see

03:18:48 --> 03:18:53
standard questions answered LMS can

03:18:51 --> 03:18:55
memorize all the answers and that can be

03:18:52 --> 03:18:57
amazing and also they do generalize out

03:18:54 --> 03:19:00
from that and so there's good work on

03:18:56 --> 03:19:02
that but um but I think that if in my

03:18:59 --> 03:19:04
experience building things building

03:19:01 --> 03:19:06
something like you talk about Mojo where

03:19:03 --> 03:19:08
you talk about these things where you

03:19:05 --> 03:19:09
talk about building an applied solution

03:19:07 --> 03:19:11
to a problem it's also about working

03:19:09 --> 03:19:12
with people

03:19:10 --> 03:19:13
it's about understanding the problem

03:19:11 --> 03:19:15
what is the product that you want to

03:19:12 --> 03:19:17
build what are the use case what are the

03:19:14 --> 03:19:18
customers you can't just go survey all

03:19:16 --> 03:19:21
the customers because they'll tell you

03:19:17 --> 03:19:23
that they want a faster horse maybe they

03:19:20 --> 03:19:25
need a car right and so a lot of it

03:19:22 --> 03:19:26
comes into

03:19:24 --> 03:19:28
um you know I don't feel like we have to

03:19:25 --> 03:19:29
compete with L alums I think they'll

03:19:27 --> 03:19:32
help automate a ton of the mechanical

03:19:28 --> 03:19:34
stuff out of the way and just like you

03:19:31 --> 03:19:35
know I think we all try to scale through

03:19:33 --> 03:19:38
delegation and things like this

03:19:34 --> 03:19:40
delegating wrote things to an llm I

03:19:37 --> 03:19:42
think is an extremely valuable and

03:19:39 --> 03:19:44
approach that will help us all scale and

03:19:41 --> 03:19:46
be more productive but I think it's a

03:19:43 --> 03:19:47
fascinating companion but I'd say

03:19:45 --> 03:19:49
I don't think that means that we're

03:19:46 --> 03:19:54
going to be done with coding

03:19:48 --> 03:19:56
but there's power in it as a companion

03:19:53 --> 03:19:58
from there I could I would love to zoom

03:19:55 --> 03:20:01
in onto Mojo a little bit do you think

03:19:57 --> 03:20:04
uh do you think about that do you think

03:20:00 --> 03:20:07
about llm's generating Mojo code

03:20:03 --> 03:20:09
and helping sort of like when you design

03:20:06 --> 03:20:13
ew programming language it almost seems

03:20:08 --> 03:20:14
like man it would be nice to sort of

03:20:12 --> 03:20:15
um

03:20:13 --> 03:20:17
almost as a way to learn how I'm

03:20:14 --> 03:20:20
supposed to use this thing

03:20:16 --> 03:20:22
for them to be trained on some of the

03:20:19 --> 03:20:25
most good so I do lead an AI company so

03:20:21 --> 03:20:28
maybe there will be a Mojo llm at some

03:20:24 --> 03:20:30
point uh but if your question is like

03:20:27 --> 03:20:33
how do we make a language to be suitable

03:20:29 --> 03:20:34
for llms yeah I think that the

03:20:32 --> 03:20:36
um

03:20:33 --> 03:20:38
I think the cool thing about LMS is you

03:20:35 --> 03:20:40
don't have to

03:20:37 --> 03:20:42
and so if you look at what is English or

03:20:39 --> 03:20:43
any of these other terrible languages

03:20:41 --> 03:20:45
that we as humans deal with on a

03:20:42 --> 03:20:48
continuous basis they're never designed

03:20:44 --> 03:20:49
for machines and yet they're the

03:20:47 --> 03:20:51
intermediate representation they're The

03:20:48 --> 03:20:53
Exchange format that we humans use to

03:20:50 --> 03:20:55
get stuff done right and so these

03:20:52 --> 03:20:57
programming languages they're an

03:20:54 --> 03:20:59
intermediate representation between the

03:20:56 --> 03:21:02
human and the computer or the human and

03:20:58 --> 03:21:04
the compiler roughly right and so I

03:21:01 --> 03:21:06
think the llms will have no problem

03:21:03 --> 03:21:09
learning whatever keyword we pick maybe

03:21:05 --> 03:21:10
the Phi Emoji is gonna oh maybe that's

03:21:08 --> 03:21:12
gonna break it it doesn't tokenize no

03:21:09 --> 03:21:15
the reverse of that it will actually

03:21:12 --> 03:21:16
enable it because one of the issues I

03:21:14 --> 03:21:19
could see with being a super set of

03:21:15 --> 03:21:20
python is there would be Confusion by

03:21:18 --> 03:21:23
the gray area

03:21:19 --> 03:21:26
so we'll be mixing stuff

03:21:22 --> 03:21:27
but well I'm a human Optimist I'm also

03:21:25 --> 03:21:31
an llm optimist I think that will solve

03:21:26 --> 03:21:33
that problem but the uh um but but you

03:21:30 --> 03:21:36
look at that and you say okay well

03:21:32 --> 03:21:38
reducing the rote thing right turns out

03:21:35 --> 03:21:39
compilers are very particular and they

03:21:37 --> 03:21:41
really want things they really want the

03:21:38 --> 03:21:42
indentation to be right they really want

03:21:40 --> 03:21:44
he colon to be there on your else or

03:21:41 --> 03:21:47
else it'll complain right I mean

03:21:43 --> 03:21:49
compilers can do better at this but um

03:21:46 --> 03:21:51
lens can totally help solve that problem

03:21:48 --> 03:21:53
and so I'm very happy about the new uh

03:21:50 --> 03:21:55
predictive coding and copilot type

03:21:52 --> 03:21:56
features and things like this because I

03:21:54 --> 03:21:58
think it'll all just make us more

03:21:55 --> 03:22:01
productive it's still messy and fuzzy

03:21:57 --> 03:22:03
and uncertain unpredictable so but is

03:22:00 --> 03:22:07
there a future you see given how big of

03:22:02 --> 03:22:11
a leap gpt4 was where you start to see

03:22:06 --> 03:22:14
something like llms inside a compiler

03:22:11 --> 03:22:15
uh I mean you could do that yeah

03:22:13 --> 03:22:18
absolutely I mean I think that would be

03:22:14 --> 03:22:20
interesting there's otherwise well well

03:22:17 --> 03:22:22
I mean it would be very expensive so

03:22:19 --> 03:22:24
compilers run fast and they're very

03:22:21 --> 03:22:26
efficient and LMS are currently very

03:22:23 --> 03:22:27
expensive there's on device llms and

03:22:25 --> 03:22:30
there's other things going on and so

03:22:26 --> 03:22:31
maybe there's an answer there

03:22:29 --> 03:22:34
um I think that one of the things that I

03:22:30 --> 03:22:36
haven't seen enough of is that

03:22:33 --> 03:22:39
so llms to me are amazing when you tap

03:22:35 --> 03:22:41
into the creative potential of the

03:22:38 --> 03:22:44
hallucinations right and so if you're

03:22:40 --> 03:22:45
building doing creative brainstorming or

03:22:43 --> 03:22:48
creative writing or things like that the

03:22:44 --> 03:22:49
hallucinations work in your favor

03:22:47 --> 03:22:50
um

03:22:48 --> 03:22:51
if your writing code that has to be

03:22:49 --> 03:22:53
correct because you're going to ship it

03:22:50 --> 03:22:54
in production then maybe that's not

03:22:52 --> 03:22:57
actually a feature

03:22:53 --> 03:22:58
and so I think that there there has been

03:22:56 --> 03:23:02
research and there has been work on

03:22:57 --> 03:23:04
building algebraic reasoning systems and

03:23:01 --> 03:23:06
kind of like figuring out more things

03:23:03 --> 03:23:08
that feel like proofs and so I think

03:23:05 --> 03:23:10
that there could be interesting work in

03:23:07 --> 03:23:11
terms of building more reliable scale

03:23:09 --> 03:23:14
systems and that could be interesting

03:23:10 --> 03:23:15
but if you chase that rabbit hole down

03:23:13 --> 03:23:18
the question then becomes how do you

03:23:15 --> 03:23:19
express your intent of the machine and

03:23:17 --> 03:23:22
so maybe you want LM to provide the spec

03:23:18 --> 03:23:24
but you have a different kind of net

03:23:21 --> 03:23:27
hat then actually implements the code

03:23:23 --> 03:23:30
right so it's a used documentation and

03:23:26 --> 03:23:34
inspiration versus the actual

03:23:29 --> 03:23:36
implementation yeah potentially

03:23:33 --> 03:23:40
since uh if successful modular will be

03:23:35 --> 03:23:43
the thing that runs I say so jokingly

03:23:39 --> 03:23:45
our AI overlords but AI systems that are

03:23:42 --> 03:23:47
used across

03:23:44 --> 03:23:50
uh I know it's a cliche term but uh

03:23:46 --> 03:23:52
internet of things so of course so so

03:23:49 --> 03:23:56
I'll joke and say like AGI should be

03:23:51 --> 03:23:57
written in Mojo yeah AGI you're joking

03:23:55 --> 03:24:01
but it's also possible that it's not a

03:23:56 --> 03:24:04
joke uh that a lot of the ideas behind

03:24:00 --> 03:24:07
Mojo is uh seems like the the natural

03:24:03 --> 03:24:11
set of ideas that would enable at scale

03:24:06 --> 03:24:13
training and inference of AI systems

03:24:10 --> 03:24:14
um so just I have to ask you about the

03:24:12 --> 03:24:17
big philosophical question about human

03:24:13 --> 03:24:19
civilization so folks like uh uh

03:24:16 --> 03:24:22
eliezeriatkowski are really concerned

03:24:18 --> 03:24:23
about the threat of AI do you think

03:24:21 --> 03:24:26
about

03:24:22 --> 03:24:29
he the good

03:24:25 --> 03:24:31
and the bad that can happen at scale

03:24:28 --> 03:24:32
deployment of AI systems well so I've

03:24:30 --> 03:24:34
thought a lot about it and there's

03:24:31 --> 03:24:37
a lot of different parts to this problem

03:24:33 --> 03:24:40
everything from job displacement to

03:24:36 --> 03:24:42
Skynet things like this and so you can

03:24:39 --> 03:24:44
zoom into sub parts of this problem

03:24:41 --> 03:24:47
um

03:24:43 --> 03:24:49
I'm not super optimistic about AGI being

03:24:46 --> 03:24:50
solved next year

03:24:48 --> 03:24:52
I don't think that's going to happen

03:24:49 --> 03:24:55
personally so you have a kind of

03:24:51 --> 03:24:58
zen-like calm about because there's a

03:24:54 --> 03:25:02
nervousness because the leap of gbt4

03:24:57 --> 03:25:04
seems so big sure that's like we're

03:25:01 --> 03:25:05
almost we're there's some kind of

03:25:03 --> 03:25:08
transition here period you're thinking

03:25:04 --> 03:25:10
well so so I mean there's a couple of

03:25:07 --> 03:25:12
things going on there one is

03:25:09 --> 03:25:14
um I'm sure GPT five and seven and 19

03:25:11 --> 03:25:15
will be also huge leaps

03:25:13 --> 03:25:18
um they're also getting much more

03:25:14 --> 03:25:19
xpensive to run and so there may be a

03:25:17 --> 03:25:21
limiting function in terms of just

03:25:18 --> 03:25:23
expense on the one hand and train like

03:25:20 --> 03:25:25
that that could be a limiter that slows

03:25:22 --> 03:25:28
things down but I think the bigger

03:25:24 --> 03:25:30
limiter is outside of like Skynet takes

03:25:27 --> 03:25:31
over and I don't spend any time thinking

03:25:29 --> 03:25:33
about that because if Skynet takes over

03:25:30 --> 03:25:36
and kills us all then I'll be dead so I

03:25:32 --> 03:25:38
don't worry about that so you know I

03:25:35 --> 03:25:39
mean that's just okay I have other

03:25:37 --> 03:25:41
things worry about I'll just focus on

03:25:38 --> 03:25:42
yeah I'll focus and not worry about that

03:25:40 --> 03:25:44
one

03:25:41 --> 03:25:45
um but I think that the the other thing

03:25:43 --> 03:25:48
I'd say is that

03:25:44 --> 03:25:50
AI moves quickly but humans move slowly

03:25:47 --> 03:25:52
and we adapt slowly and so what I expect

03:25:49 --> 03:25:56
o happen is just like any technology

03:25:51 --> 03:25:59
diffusion like the promise and then the

03:25:55 --> 03:26:02
application takes time to roll out and

03:25:58 --> 03:26:04
so I think that I'm not even too worried

03:26:01 --> 03:26:06
about autonomous cars defining away all

03:26:03 --> 03:26:08
the taxi drivers remember autonomy is

03:26:05 --> 03:26:12
upposed to be solved by 2020. yeah boy

03:26:07 --> 03:26:14
do I so and um and so like I think that

03:26:11 --> 03:26:16
on the one hand we can see amazing

03:26:13 --> 03:26:19
progress but on the other hand we can

03:26:15 --> 03:26:20
see that uh you know the the reality is

03:26:18 --> 03:26:22
a little bit more complicated and it may

03:26:19 --> 03:26:23
take longer to roll out than than you

03:26:21 --> 03:26:26
might expect well that's in the physical

03:26:22 --> 03:26:28
space I I do think in the digital space

03:26:25 --> 03:26:31
is a the stuff that's built on top of

03:26:27 --> 03:26:33
llms that runs

03:26:30 --> 03:26:35
you know the millions of apps that could

03:26:32 --> 03:26:36
be built on top of them

03:26:34 --> 03:26:40
and they could be run on millions of

03:26:35 --> 03:26:42
devices millions of types of devices

03:26:39 --> 03:26:45
I I just think

03:26:41 --> 03:26:48
that the rapid effect it has in human

03:26:44 --> 03:26:50
civilization could be truly

03:26:47 --> 03:26:52
transformative to it yeah you don't even

03:26:49 --> 03:26:53
know well so that predict well and there

03:26:51 --> 03:26:55
I think it depends on are you an

03:26:52 --> 03:26:56
optimist or a pessimist yeah or a

03:26:54 --> 03:27:00
masochist

03:26:55 --> 03:27:02
um just to clarify uh optimist about

03:26:59 --> 03:27:05
human civilization me too and so I look

03:27:01 --> 03:27:07
at that as saying okay cool well yeah I

03:27:04 --> 03:27:08
do right and so some people say oh my

03:27:06 --> 03:27:10
God it's going to destroy us all how do

03:27:07 --> 03:27:13
we prevent that I I kind of look at it

03:27:09 --> 03:27:15
from a is it going to unlock us all

03:27:12 --> 03:27:16
right you talk about coding it's going

03:27:14 --> 03:27:17
to make so I don't have to do all the

03:27:15 --> 03:27:19
repetitive stuff

03:27:16 --> 03:27:21
well suddenly that's a very optimistic

03:27:18 --> 03:27:23
way to look at it and you look at what a

03:27:20 --> 03:27:25
lot of a lot of these technologies have

03:27:22 --> 03:27:28
done to improve our lives and I want

03:27:24 --> 03:27:29
hat to go faster

03:27:27 --> 03:27:31
what do you think the future of

03:27:28 --> 03:27:33
programming looks like in the next 10 20

03:27:30 --> 03:27:37
30 50 years

03:27:32 --> 03:27:40
there are the limbs and uh with with

03:27:36 --> 03:27:43
Mojo with modular like your vision for

03:27:39 --> 03:27:45
devices the hardware to compilers to

03:27:42 --> 03:27:46
this to the different stacks of software

03:27:44 --> 03:27:48
yeah well so what I want I mean coming

03:27:45 --> 03:27:51
back to my arch nemesis right

03:27:47 --> 03:27:54
it's complexity right so again me being

03:27:50 --> 03:27:56
The Optimist if we drive down complexity

03:27:53 --> 03:27:58
we can make these tools these

03:27:55 --> 03:28:01
Technologies these cool Hardware widgets

03:27:57 --> 03:28:02
accessible to way more people right and

03:28:00 --> 03:28:05
so what I'd love to see is more

03:28:01 --> 03:28:06
personalized experiences more uh things

03:28:04 --> 03:28:09
the research getting into production

03:28:05 --> 03:28:12
instead of being lost at nerups right

03:28:08 --> 03:28:15
and so and like the the the these things

03:28:11 --> 03:28:16
that impact people's lives by entering

03:28:14 --> 03:28:17
products

03:28:15 --> 03:28:20
and so one of the things that I'm a

03:28:16 --> 03:28:22
little bit concerned about is right now

03:28:19 --> 03:28:24
um the big companies are investing huge

03:28:21 --> 03:28:26
amounts of money and are driving the top

03:28:23 --> 03:28:29
line of AI capability for really quickly

03:28:25 --> 03:28:30
but if it means that you have to have

03:28:28 --> 03:28:33
100 million dollars to train a model or

03:28:29 --> 03:28:35
more 100 billion dollars right well

03:28:32 --> 03:28:38
that's gonna make it very concentrated

03:28:34 --> 03:28:40
with very few people in the world that

03:28:37 --> 03:28:41
can actually do this stuff I would much

03:28:39 --> 03:28:43
rather see

03:28:40 --> 03:28:45
lots of people across the industry

03:28:42 --> 03:28:47
be able to participate and use this

03:28:45 --> 03:28:49
right and you look at this you know I

03:28:46 --> 03:28:51
mean a lot of great research has been

03:28:48 --> 03:28:54
done in the health world and looking at

03:28:50 --> 03:28:56
like detecting mythologies and doing

03:28:53 --> 03:28:59
Radiology with AI and like doing all

03:28:55 --> 03:29:00
these things well the problem today is

03:28:58 --> 03:29:02
that to deploy and build these systems

03:28:59 --> 03:29:04
you have to be an expert in radiology

03:29:01 --> 03:29:07
and an expert in AI

03:29:03 --> 03:29:09
and if we can break down the barriers so

03:29:06 --> 03:29:12
that more people can use AI techniques

03:29:08 --> 03:29:15
it's more like programming python

03:29:11 --> 03:29:16
which roughly everybody can do if they

03:29:14 --> 03:29:18
want to right then I think that we'll

03:29:15 --> 03:29:21
get a lot more practical application of

03:29:17 --> 03:29:23
these techniques and a lot more nicheer

03:29:20 --> 03:29:25
cool but narrower demands I think that's

03:29:22 --> 03:29:26
going to be really cool do you

03:29:24 --> 03:29:30
think we'll have more or less

03:29:25 --> 03:29:31
programmers in the world than no well so

03:29:29 --> 03:29:33
um I think we'll have more more

03:29:30 --> 03:29:35
programmers but they may not consider

03:29:32 --> 03:29:36
themselves to be programmers that'd be a

03:29:34 --> 03:29:38
different name for you right I mean do

03:29:35 --> 03:29:39
you consider somebody that uses uh you

03:29:37 --> 03:29:43
know I think that arguably the most

03:29:38 --> 03:29:45
popular programming language is Excel

03:29:42 --> 03:29:47
yeah

03:29:44 --> 03:29:49
right yeah and so do they consider

03:29:46 --> 03:29:51
themselves to be programmers maybe not I

03:29:48 --> 03:29:55
mean some of them make crazy macros and

03:29:50 --> 03:29:58
stuff like that but but but what what

03:29:54 --> 03:30:01
he you mentioned Steve Jobs it's the uh

03:29:57 --> 03:30:03
bicycle for the mind it allows you to go

03:30:00 --> 03:30:05
faster right and so I think that as we

03:30:02 --> 03:30:07
look forward right what is AI I look at

03:30:04 --> 03:30:09
it as hopefully a new programming

03:30:06 --> 03:30:11
Paradigm it's like object-oriented

03:30:08 --> 03:30:13
programming right if you want to write a

03:30:10 --> 03:30:14
cat detector you don't use for Loops it

03:30:12 --> 03:30:16
urns out that's not the right tool for

03:30:13 --> 03:30:18
the job right and so right now

03:30:15 --> 03:30:20
unfortunately because I mean it's not

03:30:17 --> 03:30:22
unfortunate but it's just kind of where

03:30:19 --> 03:30:24
things are AI is this weird different

03:30:21 --> 03:30:26
hing that's not integrated into

03:30:23 --> 03:30:28
programming languages and normal tool

03:30:25 --> 03:30:30
chains and all the Technologies really

03:30:27 --> 03:30:32
weird and doesn't work right and you

03:30:29 --> 03:30:34
have to babysit it and every time you

03:30:31 --> 03:30:36
switch Hardware it's different shouldn't

03:30:33 --> 03:30:38
be that way when you change that when

03:30:35 --> 03:30:39
you fix that suddenly again the tools

03:30:37 --> 03:30:41
Technologies can be way easier to use

03:30:39 --> 03:30:43
you can start using them for many more

03:30:40 --> 03:30:44
things and so that that's that's what I

03:30:42 --> 03:30:46
would be excited about

03:30:43 --> 03:30:47
what kind of advice could you give to

03:30:45 --> 03:30:50
somebody in high school right now or

03:30:46 --> 03:30:51
maybe early college who's curious about

03:30:49 --> 03:30:53
programming

03:30:50 --> 03:30:55
and

03:30:52 --> 03:30:58
feeling like the world is changing

03:30:54 --> 03:30:59
really quickly here yeah what kind of

03:30:57 --> 03:31:00
stuff to learn what kind of stuff to

03:30:58 --> 03:31:03
work on

03:30:59 --> 03:31:05
should they finish college they

03:31:02 --> 03:31:07
go work at a company there build a thing

03:31:04 --> 03:31:09
what do you think well so I mean one of

03:31:06 --> 03:31:11
the things I'd say is that um you'll be

03:31:09 --> 03:31:13
most successful if you work on something

03:31:10 --> 03:31:15
you're excited by

03:31:12 --> 03:31:16
and so don't get the book and read the

03:31:14 --> 03:31:18
book

03:31:15 --> 03:31:20
cover to cover and study and memorize in

03:31:17 --> 03:31:22
our site and flash card and go build

03:31:19 --> 03:31:24
something like go solve a problem go

03:31:21 --> 03:31:27
build the thing that you wanted to exist

03:31:23 --> 03:31:29
go build an app go build train a model

03:31:26 --> 03:31:31
ike go build something and actually use

03:31:28 --> 03:31:33
it and set a goal for yourself and if

03:31:30 --> 03:31:35
you do that then you'll you know there's

03:31:32 --> 03:31:36
a success there's the adrenaline rush

03:31:34 --> 03:31:39
there's the achievement there's the

03:31:35 --> 03:31:40
unlock that I think is where you know if

03:31:38 --> 03:31:42
you keep setting goals and you keep

03:31:39 --> 03:31:45
doing things and Building Things

03:31:41 --> 03:31:46
learning by building is really powerful

03:31:44 --> 03:31:48
um in terms of career advice I mean

03:31:45 --> 03:31:49
everybody's different it's very hard to

03:31:47 --> 03:31:50
give generalized experience generalized

03:31:48 --> 03:31:53
advice

03:31:49 --> 03:31:55
um all speakers you know a compiler nerd

03:31:52 --> 03:31:58
if everybody's going

03:31:54 --> 03:31:59
left sometimes it's pretty cool to go

03:31:57 --> 03:32:01
right yeah and so just because

03:31:58 --> 03:32:04
verybody's doing a thing it doesn't

03:32:00 --> 03:32:06
mean you have to do the same thing and

03:32:03 --> 03:32:09
follow the herd in fact I think that

03:32:05 --> 03:32:11
sometimes the most exciting path through

03:32:08 --> 03:32:13
life lead to being curious about things

03:32:10 --> 03:32:16
that nobody else actually focuses on

03:32:12 --> 03:32:19
right and turns out that understanding

03:32:15 --> 03:32:21
deeply parts of the problem that people

03:32:18 --> 03:32:23
want to take for granted makes you

03:32:20 --> 03:32:27
extremely valuable and specialized in

03:32:22 --> 03:32:27
ways that the herd is not and so again I

03:32:26 --> 03:32:30
mean there's lots of rooms for

03:32:27 --> 03:32:31
specialization lots of rooms for uh

03:32:29 --> 03:32:32
generalists there's lots of room for

03:32:30 --> 03:32:35
different kinds and parts of the problem

03:32:31 --> 03:32:37
but but I think that it's you know just

03:32:34 --> 03:32:37
because everything everybody's doing one

03:32:36 --> 03:32:40
thing doesn't mean you should

03:32:36 --> 03:32:43
necessarily do it and now the herd is

03:32:39 --> 03:32:44
using python so if you want to be a

03:32:42 --> 03:32:48
rebel

03:32:43 --> 03:32:50
go check out Mojo and uh help Chris and

03:32:47 --> 03:32:52
the rest of the world fight the arch

03:32:49 --> 03:32:53
nemesis of complexity because simple is

03:32:51 --> 03:32:55
beautiful there you go

03:32:52 --> 03:32:57
because you're an incredible person

03:32:54 --> 03:32:58
you've uh you've been so kind to me ever

03:32:56 --> 03:33:00
since we met they've been extremely

03:32:57 --> 03:33:02
supportive I'm forever grateful for that

03:33:00 --> 03:33:05
hank you for being who you are for

03:33:01 --> 03:33:07
being legit for being kind for fighting

03:33:04 --> 03:33:10
this um

03:33:06 --> 03:33:13
really interesting problem of how to

03:33:09 --> 03:33:15
make AI accessible to a huge number of

03:33:12 --> 03:33:16
people huge number of devices yeah well

03:33:14 --> 03:33:19
so Lex you're a pretty special person

03:33:15 --> 03:33:21
too right and so I think that you know

03:33:18 --> 03:33:23
one of the funny things about you is

03:33:20 --> 03:33:24
that besides being curious and pretty

03:33:22 --> 03:33:26
damn smart you're actually willing to

03:33:24 --> 03:33:28
push on things and you're you're I think

03:33:25 --> 03:33:30
that you've got an agenda to like make

03:33:27 --> 03:33:32
the world think

03:33:29 --> 03:33:34
which I think is a pretty good agenda

03:33:31 --> 03:33:35
it's a pretty good one uh thank you so

03:33:33 --> 03:33:37
much for talking hey Chris yeah thanks

03:33:34 --> 03:33:38
Alex

03:33:36 --> 03:33:40
thanks for listening to this

03:33:37 --> 03:33:41
conversation with Chris Ladner to

03:33:39 --> 03:33:44
support this podcast please check out

03:33:40 --> 03:33:46
our sponsors in the description and now

03:33:43 --> 03:33:47
let me leave you some words from Isaac

03:33:45 --> 03:33:49
Asimov

03:33:46 --> 03:33:52
I do not fear computers

03:33:48 --> 03:33:54
I fear the lack of them

03:33:51 --> 03:33:57
thank you for listening and hope to see

03:33:53 --> 03:33:57
you next time

<!-- YOUTUBE_TRANSCRIPT_END -->
