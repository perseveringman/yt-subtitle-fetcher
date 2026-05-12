---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "nWTvXbQHwWs"
title: "Chris Lattner: The Future of Computing and Programming Languages | Lex Fridman Podcast #131"
video_url: "https://www.youtube.com/watch?v=nWTvXbQHwWs"
thumbnail_url: "https://i.ytimg.com/vi/nWTvXbQHwWs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=nWTvXbQHwWs"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-10-19T01:59:53.000Z"
upload_date: "2020-10-19"
duration_seconds: 9760
duration_human: "2:42:40"
view_count: 591367
like_count: 9163
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:17:46.572Z"
---

# Chris Lattner: The Future of Computing and Programming Languages | Lex Fridman Podcast #131

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=nWTvXbQHwWs
- video_id: nWTvXbQHwWs
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-10-19T01:59:53.000Z
- upload_date: 2020-10-19
- duration: 2:42:40
- view_count: 591367
- like_count: 9163
- has_subtitle: true
- language: en
- availability: public
- tags: chris lattner, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

Chris Lattner is a world-class software & hardware engineer, leading projects at Apple, Tesla, Google, and SiFive. Please support this podcast by checking out our sponsors:
- Blinkist: https://blinkist.com/lex and use code LEX to get a free week of premium
- Neuro: https://www.getneuro.com and use code LEX to get 15% off
- MasterClass: https://masterclass.com/lex to get 15% off annual sub
- Cash App: https://cash.app/ and use code LexPodcast to get $10

EPISODE LINKS:
Chris's Twitter: https://twitter.com/clattner_llvm
Chris's Website: http://nondot.org/sabre/

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
2:25 - Working with Elon Musk, Steve Jobs, Jeff Dean
7:55 - Why do programming languages matter?
13:55 - Python vs Swift
24:48 - Design decisions
30:06 - Types
33:54 - Programming languages are a bicycle for the mind
36:26 - Picking what language to learn
42:25 - Most beautiful feature of a programming language
51:50 - Walrus operator
1:01:16 - LLVM
1:06:28 - MLIR compiler framework
1:10:35 - SiFive semiconductor design
1:23:09 - Moore's Law
1:26:22 - Parallelization
1:30:50 - Swift concurrency manifesto
1:41:39 - Running a neural network fast
1:47:16 - Is the universe a quantum computer?
1:52:57 - Effects of the pandemic on society
2:10:09 - GPT-3
2:14:28 - Software 2.0
2:27:54 - Advice for young people
2:32:37 - Meaning of life

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
Chris lner his second time in the

00:00:03 --> 00:00:09
podcast he's one of the most brilliant

00:00:05 --> 00:00:11
engineers in modern Computing having

00:00:08 --> 00:00:14
created llvm compiler infrastructure

00:00:10 --> 00:00:16
project the clang compiler the Swift

00:00:13 --> 00:00:18
programming language a lot of key

00:00:15 --> 00:00:21
contributions to tensor flown tpus as

00:00:17 --> 00:00:24
part of Google he served as vice

00:00:20 --> 00:00:26
president of autopilot software Tesla

00:00:23 --> 00:00:29
was a software innovator and leader at

00:00:25 --> 00:00:31
Apple and now is at SciFi as senior vice

00:00:29 --> 00:00:34
president of platform engineering

00:00:30 --> 00:00:37
looking to revolutionize chip design to

00:00:33 --> 00:00:39
make it faster better and cheaper quick

00:00:36 --> 00:00:42
mention of each sponsor followed by some

00:00:38 --> 00:00:43
thoughts related to the episode first

00:00:41 --> 00:00:45
sponsor is blinkist an app that

00:00:42 --> 00:00:48
summarizes key ideas from thousands of

00:00:44 --> 00:00:50
books I use it almost every day to learn

00:00:47 --> 00:00:54
ew things or to pick which books I want

00:00:49 --> 00:00:56
o read or listen to next second is

00:00:53 --> 00:00:58
neuro the maker of functional sugar-free

00:00:55 --> 00:01:01
gum and mints that I use to supercharge

00:00:57 --> 00:01:04
my mind with caffeine alanine and B

00:01:00 --> 00:01:07
vitamins third is master class online

00:01:03 --> 00:01:09
courses from the best people in the

00:01:06 --> 00:01:12
world on each of the topics covered from

00:01:08 --> 00:01:16
Rockets to game design to Poker to

00:01:11 --> 00:01:18
writing and to guitar and finally cash

00:01:15 --> 00:01:20
app the app I use to send money to

00:01:17 --> 00:01:23
friends for food drinks and

00:01:19 --> 00:01:25
unfortunately lost bets please check out

00:01:22 --> 00:01:28
he sponsors in the description to get a

00:01:24 --> 00:01:30
discount and to support this podcast as

00:01:27 --> 00:01:32
a side note let me say that Chris has

00:01:29 --> 00:01:35
been in inspiration to me on a human

00:01:31 --> 00:01:37
level because he is so damn good as an

00:01:34 --> 00:01:40
engineer and leader of Engineers and yet

00:01:36 --> 00:01:42
he's able to stay humble especially

00:01:39 --> 00:01:44
humble enough to hear the voices of

00:01:41 --> 00:01:46
disagreement and to learn from them he

00:01:43 --> 00:01:49
was supportive of me in this podcast

00:01:46 --> 00:01:51
from the early days and for that I'm

00:01:48 --> 00:01:53
forever grateful to be honest most of my

00:01:50 --> 00:01:55
life no one really believed that I would

00:01:52 --> 00:01:58
amount to much so when another human

00:01:55 --> 00:02:00
being looks at me and makes me feel like

00:01:57 --> 00:02:02
I might be someone special it can be

00:01:59 --> 00:02:05
truly inspired ing that's a lesson for

00:02:01 --> 00:02:07
educators the weird kid in the corner

00:02:04 --> 00:02:09
with a dream is someone who might need

00:02:06 --> 00:02:10
your love and support in order for that

00:02:08 --> 00:02:12
dream to

00:02:09 --> 00:02:15
flourish if you enjoy this thing

00:02:11 --> 00:02:16
subscribe on YouTube review it with five

00:02:14 --> 00:02:19
stars and apple podcast follow on

00:02:15 --> 00:02:22
Spotify support on patreon or connect

00:02:18 --> 00:02:25
with me on Twitter at Lex Freedman and

00:02:21 --> 00:02:28
now here's my conversation with Chris

00:02:24 --> 00:02:32
lner what are the strongest qualities of

00:02:27 --> 00:02:34
Steve Jobs Elon Musk and the Great and

00:02:31 --> 00:02:37
Powerful Jeff Dean since you've gotten

00:02:33 --> 00:02:39
the chance to work with each you're

00:02:36 --> 00:02:41
starting with an easy question there um

00:02:38 --> 00:02:44
these are three very different people I

00:02:40 --> 00:02:45
guess you could do maybe a pair wise

00:02:43 --> 00:02:47
comparison between them instead of a

00:02:44 --> 00:02:49
group comparison so if you look at Steve

00:02:46 --> 00:02:52
Jobs and Elon um I worked a lot more

00:02:48 --> 00:02:54
with Elon than I did with Steve um they

00:02:51 --> 00:02:56
have a lot of commonality they're both

00:02:53 --> 00:02:59
um Visionary in their own way they're

00:02:55 --> 00:03:02
both very demanding in their own way um

00:02:58 --> 00:03:04
y sense is Steve Steve is much more

00:03:01 --> 00:03:06
human factor focused where Elon is more

00:03:03 --> 00:03:08
technology focused what does human

00:03:05 --> 00:03:10
factor mean Steve is trying to build

00:03:07 --> 00:03:12
things that feel good that people love

00:03:09 --> 00:03:15
that affect people's lives how they live

00:03:11 --> 00:03:17
he's looking into into the future a

00:03:14 --> 00:03:19
little bit in terms of um what people

00:03:16 --> 00:03:22
want um where I think the Elon focuses

00:03:18 --> 00:03:24
more on uh learning how exponentials

00:03:21 --> 00:03:26
work and predicting the development of

00:03:23 --> 00:03:28
those Steve worked with a lot of

00:03:25 --> 00:03:30
Engineers that was one of the things

00:03:27 --> 00:03:33
that reading the biography and how how

00:03:30 --> 00:03:36
can a designer essentially talk to

00:03:32 --> 00:03:38
engineers and like get their respect I

00:03:35 --> 00:03:39
think so I did not work very closely

00:03:37 --> 00:03:42
with Steve I'm not an expert at all my

00:03:38 --> 00:03:44
sense is that he uh pushed people really

00:03:41 --> 00:03:46
hard but then when he got an explanation

00:03:43 --> 00:03:48
that made sense to him then he would let

00:03:45 --> 00:03:51
go and um he did actually have a lot of

00:03:47 --> 00:03:53
respect for engineering and but he also

00:03:50 --> 00:03:56
knew when to push and you know when you

00:03:52 --> 00:03:58
can read people well you can know when

00:03:55 --> 00:03:59
they're holding back and when you can

00:03:57 --> 00:04:02
get a little bit more out of them and I

00:03:59 --> 00:04:03
think he was very good at that I mean if

00:04:01 --> 00:04:06
you if you compare the other the other

00:04:02 --> 00:04:09
folks so Jeff Dean right Jeff Dean's an

00:04:05 --> 00:04:12
amazing guy he's super smart um as as

00:04:08 --> 00:04:14
are the other guys um Jeff is a really

00:04:11 --> 00:04:17
really nice guy well-meaning he's

00:04:13 --> 00:04:20
a classic googler he uh uh wants people

00:04:16 --> 00:04:21
to be happy he combines it with

00:04:19 --> 00:04:23
Brilliance so he can pull people

00:04:20 --> 00:04:25
together in a in a really great way he's

00:04:22 --> 00:04:29
definitely not a CEO type I don't think

00:04:24 --> 00:04:30
he would even want to be that um do you

00:04:28 --> 00:04:32
know if he still programs oh yeah

00:04:29 --> 00:04:34
definitely programs Jeff is an amazing

00:04:31 --> 00:04:36
engineer today right and that has never

00:04:33 --> 00:04:39
changed so um it's really hard to

00:04:35 --> 00:04:43
compare Jeff to to either of those two

00:04:38 --> 00:04:45
um he uh I think that Jeff leads through

00:04:42 --> 00:04:47
technology and building it himself and

00:04:44 --> 00:04:50
then pulling people in and inspiring

00:04:46 --> 00:04:51
them and so I think that that's um a one

00:04:49 --> 00:04:53
of the amazing things about Jeff but

00:04:50 --> 00:04:55
each of these people you know with their

00:04:52 --> 00:04:57
pros and cons all are really

00:04:54 --> 00:04:59
inspirational and have achieved amazing

00:04:56 --> 00:05:01
things so it's been a it's been I've

00:04:58 --> 00:05:04
been very fortunate to work with these

00:05:00 --> 00:05:07
guys for yourself you've LED large teams

00:05:03 --> 00:05:10
you've done so many incredible difficult

00:05:06 --> 00:05:12
echnical challenges is there something

00:05:09 --> 00:05:14
you've picked up from them about how to

00:05:11 --> 00:05:15
lead yeah well so I mean I think

00:05:13 --> 00:05:17
leadership is really hard it really

00:05:14 --> 00:05:19
depends on what you're looking for there

00:05:16 --> 00:05:22
um I think you really need to know what

00:05:18 --> 00:05:24
you're talking about so being grounded

00:05:21 --> 00:05:27
on the product on the technology on the

00:05:23 --> 00:05:29
business on the mission is really

00:05:26 --> 00:05:31
important being uh understanding what

00:05:28 --> 00:05:32
people are looking for for why they're

00:05:30 --> 00:05:35
there one of the most amazing things

00:05:31 --> 00:05:37
about Tesla is the unifying Vision right

00:05:34 --> 00:05:39
people are there because they believe in

00:05:36 --> 00:05:43
clean energy and El electrification all

00:05:38 --> 00:05:45
these kinds of things um uh the others

00:05:42 --> 00:05:47
is to understand what really motivates

00:05:44 --> 00:05:49
people how to get the best people how to

00:05:46 --> 00:05:50
build a plan that actually can be

00:05:48 --> 00:05:51
xecuted right there's so many different

00:05:49 --> 00:05:53
aspects of leadership and it really

00:05:50 --> 00:05:56
depends on the time the place the

00:05:53 --> 00:05:57
problems you know you know there's a lot

00:05:55 --> 00:05:59
of issues that don't need to be solved

00:05:56 --> 00:06:01
and so if you focus on the right things

00:05:58 --> 00:06:03
and prioritize well that can really help

00:06:00 --> 00:06:05
move things two interesting things you

00:06:02 --> 00:06:09
mentioned one is you really have to know

00:06:04 --> 00:06:11
hat you're talking about how you've

00:06:08 --> 00:06:13
uh you've worked on a lot of very

00:06:10 --> 00:06:17
challenging technical things sure

00:06:12 --> 00:06:20
so I kind of assume you were born uh

00:06:16 --> 00:06:23
technically Savvy but assuming that's

00:06:19 --> 00:06:26
not the case uh how did how did you

00:06:22 --> 00:06:28
develop technical expertise like even at

00:06:25 --> 00:06:31
Google you worked on I don't know how

00:06:28 --> 00:06:34
many projects but really challenging

00:06:30 --> 00:06:37
very varied compilers tpus Hardware

00:06:33 --> 00:06:38
Cloud stuff bunch of different things um

00:06:36 --> 00:06:41
the thing that I've become comfortable

00:06:37 --> 00:06:45
as I've more comfortable with as I've uh

00:06:40 --> 00:06:48
gained experience is uh being okay with

00:06:44 --> 00:06:50
not knowing and so a major part of

00:06:47 --> 00:06:52
leadership is actually it's not about

00:06:49 --> 00:06:54
having the right answer it's about

00:06:51 --> 00:06:56
getting the right answer and so if

00:06:53 --> 00:06:58
you're working in a team of amazing

00:06:55 --> 00:07:00
people right and many of these places

00:06:57 --> 00:07:02
many of these companies all have amazing

00:06:59 --> 00:07:03
people it's the question of how do you

00:07:01 --> 00:07:05
get people together how do you get how

00:07:03 --> 00:07:08
do you build trust how do you get people

00:07:05 --> 00:07:11
to open up how do you people get people

00:07:07 --> 00:07:12
to you know be vulnerable sometimes with

00:07:10 --> 00:07:14
an idea that maybe isn't good enough but

00:07:11 --> 00:07:17
it's the start of something beautiful

00:07:13 --> 00:07:19
how do you um how do you provide an

00:07:16 --> 00:07:20
environment where you're not just like

00:07:18 --> 00:07:22
top down Thou shalt do the thing that I

00:07:20 --> 00:07:23
tell you to do right but you're

00:07:21 --> 00:07:27
ncouraging people to be part of the

00:07:22 --> 00:07:28
solution and uh and providing a safe

00:07:26 --> 00:07:29
space where if you're not doing the

00:07:27 --> 00:07:31
right thing they're willing to tell you

00:07:28 --> 00:07:33
about it right so you're okay asking

00:07:30 --> 00:07:35
dumb questions yeah dumb questions are

00:07:32 --> 00:07:37
my specialty yeah well I so I've been in

00:07:34 --> 00:07:39
the hardware room recently and I don't

00:07:36 --> 00:07:41
know much at all about how chips are

00:07:38 --> 00:07:43
designed I know a lot about using them I

00:07:40 --> 00:07:46
know some of the principles and the ARs

00:07:42 --> 00:07:47
technical level of this but level it

00:07:45 --> 00:07:49
urns out that if you ask a lot of dumb

00:07:46 --> 00:07:51
questions you get smarter really really

00:07:48 --> 00:07:53
quick and when you're surrounded by

00:07:50 --> 00:07:55
people that want to teach and learn

00:07:52 --> 00:07:58
themselves uh it can be a beautiful

00:07:54 --> 00:08:00
thing uh so let's talk about programming

00:07:57 --> 00:08:03
languages if it's okay at the High this

00:07:59 --> 00:08:05
absurd philosophical level cuz I I don't

00:08:02 --> 00:08:06
get romantic on me Lex I I will forever

00:08:04 --> 00:08:11
get

00:08:05 --> 00:08:14
romantic and uh Tor here I apologize uh

00:08:10 --> 00:08:16
why do programming languages even

00:08:13 --> 00:08:18
matter okay well thank you very much so

00:08:15 --> 00:08:19
you're saying why should why why should

00:08:17 --> 00:08:20
you care about anyone programming

00:08:18 --> 00:08:22
language or why do why do we care about

00:08:19 --> 00:08:25
programming computers or no why why do

00:08:21 --> 00:08:27
we why do we care about programming

00:08:24 --> 00:08:28
language design creating effective

00:08:26 --> 00:08:31
programming

00:08:27 --> 00:08:33
languages uh

00:08:30 --> 00:08:34
choosing a you know one programming

00:08:32 --> 00:08:38
languages versus another programming

00:08:33 --> 00:08:40
language why we keep struggling and

00:08:37 --> 00:08:41
improving through the evolution of these

00:08:39 --> 00:08:42
programming languages sure sure sure

00:08:40 --> 00:08:43
okay so so I mean I think you have to

00:08:41 --> 00:08:46
come back to what what are we trying to

00:08:42 --> 00:08:48
do here right so we have these these uh

00:08:45 --> 00:08:49
beasts called computers that are very

00:08:47 --> 00:08:51
good at specific kinds of things and we

00:08:49 --> 00:08:54
think it's useful to have them do it for

00:08:50 --> 00:08:56
us right uh now you have this question

00:08:53 --> 00:08:58
of how best to express that because you

00:08:55 --> 00:09:00
have a human brain still that has an

00:08:57 --> 00:09:03
idea in its head and you want to achieve

00:08:59 --> 00:09:05
something right so well there's lots of

00:09:02 --> 00:09:06
ways of doing this you can go directly

00:09:04 --> 00:09:08
to the machine and speak Assembly

00:09:05 --> 00:09:10
Language and then you can express

00:09:07 --> 00:09:12
directly what the computer understands

00:09:09 --> 00:09:13
that's fine um you can then have higher

00:09:11 --> 00:09:15
and higher and higher levels of

00:09:12 --> 00:09:17
exraction up until machine learning and

00:09:14 --> 00:09:20
you're designing an neural net to do the

00:09:16 --> 00:09:22
work for you um the question is where

00:09:19 --> 00:09:23
along this way do you want to stop

00:09:21 --> 00:09:25
and what benefits do you get out of

00:09:22 --> 00:09:28
doing so and so programming languages in

00:09:24 --> 00:09:32
general you have C you have Fortran and

00:09:27 --> 00:09:34
Java and a Pascal Swift you have lots of

00:09:31 --> 00:09:35
different things um they all have

00:09:33 --> 00:09:37
different trade-offs and they're T

00:09:34 --> 00:09:39
tackling different parts of the problems

00:09:36 --> 00:09:41
now one of the things that most

00:09:38 --> 00:09:42
programming languages do is they're

00:09:40 --> 00:09:44
trying to make it so that you have

00:09:41 --> 00:09:47
pretty basic things like portability

00:09:43 --> 00:09:48
across different Hardware so you've got

00:09:46 --> 00:09:50
I'm going to run on an Intel PC I'm

00:09:47 --> 00:09:53
going to run on RIS 5 PC I'm going to

00:09:49 --> 00:09:55
run on a arm phone or something like

00:09:52 --> 00:09:56
that fine um I want to write one program

00:09:54 --> 00:09:58
and have it portable and this is

00:09:55 --> 00:10:00
omething the assembly doesn't do now

00:09:57 --> 00:10:02
hen you start looking at the space of

00:09:59 --> 00:10:04
programming languages this is where I

00:10:01 --> 00:10:06
think it's fun

00:10:03 --> 00:10:08
because programming languages all have

00:10:05 --> 00:10:10
trade-offs and most people will walk up

00:10:07 --> 00:10:12
to them and they look at the surface

00:10:09 --> 00:10:16
level of syntax and say oh I like Curly

00:10:11 --> 00:10:18
braces or I like tabs or I like you know

00:10:15 --> 00:10:20
semicolons or not or whatever right

00:10:17 --> 00:10:23
subjective fairly subjective very

00:10:19 --> 00:10:24
shallow things but programming languages

00:10:22 --> 00:10:28
when done right can actually be very

00:10:23 --> 00:10:31
powerful and the the benefit they bring

00:10:27 --> 00:10:33
is expression

00:10:30 --> 00:10:34
okay and if you look at programming

00:10:32 --> 00:10:37
languages there's really kind of two

00:10:33 --> 00:10:39
different levels to them one is the down

00:10:36 --> 00:10:40
in the dirt nuts and bolts of how do you

00:10:38 --> 00:10:42
get the computer to be efficient stuff

00:10:39 --> 00:10:44
like that how they work type systems

00:10:41 --> 00:10:47
compiler stuff things like that the

00:10:43 --> 00:10:49
other is the UI and the UI for

00:10:46 --> 00:10:50
programming language is really a design

00:10:48 --> 00:10:52
problem and a lot of people don't think

00:10:49 --> 00:10:55
about it that way and the UI you mean

00:10:51 --> 00:10:56
all that stuff with the braces and yeah

00:10:54 --> 00:10:59
all that stuff to the UI and what it is

00:10:55 --> 00:11:01
and UI means user interface um and so

00:10:58 --> 00:11:05
what what's really going on is it's the

00:11:00 --> 00:11:08
interface between the guts and the human

00:11:04 --> 00:11:10
d humans are hard right humans have

00:11:07 --> 00:11:12
feelings they have things they like they

00:11:09 --> 00:11:13
have things they don't like and a lot of

00:11:11 --> 00:11:16
people treat programming languages as

00:11:12 --> 00:11:18
though humans are just kind of abstract

00:11:15 --> 00:11:20
creatures that cannot be predicted but

00:11:17 --> 00:11:21
it turns out that actually there are

00:11:19 --> 00:11:24
there is better and

00:11:20 --> 00:11:26
worse like people can tell when a

00:11:23 --> 00:11:29
program language is good or when it was

00:11:25 --> 00:11:30
an accident right and uh one of the

00:11:28 --> 00:11:33
things with Swift in particular is that

00:11:29 --> 00:11:34
a tremendous amount of time by a t

00:11:32 --> 00:11:36
remendous number of people have been

00:11:33 --> 00:11:38
put into really polishing and Mak it

00:11:35 --> 00:11:40
feel good but it also has really good

00:11:37 --> 00:11:42
nuts and bolts underneath it you said

00:11:39 --> 00:11:45
that uh Swift makes a lot of people feel

00:11:41 --> 00:11:47
good how do you get to that

00:11:44 --> 00:11:51
point

00:11:46 --> 00:11:53
so how do you predict that um you know

00:11:50 --> 00:11:56
tens of thousands hundreds of thousands

00:11:52 --> 00:11:57
of people are going to enjoy using this

00:11:55 --> 00:11:59
the user experience of this programming

00:11:56 --> 00:12:00
language well you can you can look at it

00:11:58 --> 00:12:02
in terms of better and worse right so if

00:11:59 --> 00:12:03
you have to write lots of boiler plate

00:12:01 --> 00:12:05
or something like that you will feel

00:12:02 --> 00:12:08
unproductive and so that's a bad thing

00:12:05 --> 00:12:09
you can look at it in terms of safety if

00:12:07 --> 00:12:11
like C for example is what's called a

00:12:08 --> 00:12:13
memory unsafe language and so you get

00:12:10 --> 00:12:14
dangling pointers and you get all these

00:12:12 --> 00:12:16
kind of bugs that then you have to spend

00:12:13 --> 00:12:17
tons of time debugging and it's a real

00:12:15 --> 00:12:19
pain in the butt and you feel

00:12:16 --> 00:12:22
unproductive and so by subtracting these

00:12:18 --> 00:12:25
things from the experience you get um

00:12:21 --> 00:12:27
you know happier people but uh uh again

00:12:24 --> 00:12:29
keep interrupting I'm sorry uh but so

00:12:26 --> 00:12:31
hard to deal

00:12:28 --> 00:12:34
with if you look at the people people

00:12:30 --> 00:12:37
that are most productive on stack

00:12:33 --> 00:12:39
Overflow they are uh they have a set of

00:12:36 --> 00:12:41
priorities yeah that may not always

00:12:38 --> 00:12:44
correlate perfectly with the experience

00:12:40 --> 00:12:47
of the majority of users you know like

00:12:43 --> 00:12:49
if you look at the most uploaded uh

00:12:46 --> 00:12:50
quote unquote correct answer on stack

00:12:48 --> 00:12:56
Overflow it

00:12:50 --> 00:13:00
usually really um sort of uh prioritizes

00:12:55 --> 00:13:02
like safe code proper code stable

00:12:59 --> 00:13:05
code uh you know that kind of stuff as

00:13:02 --> 00:13:09
opposed to like if I want to use go-to

00:13:04 --> 00:13:12
statements in my basic right uh I'm I

00:13:08 --> 00:13:13
want to use go-to State like what if 99%

00:13:11 --> 00:13:15
of people want to use go-to statements

00:13:12 --> 00:13:18
or use completely improper you know

00:13:14 --> 00:13:19
unsafe syntax I I don't think that

00:13:17 --> 00:13:21
people actually like if you boil it down

00:13:18 --> 00:13:23
and you get below the surface level

00:13:20 --> 00:13:25
people don't actually care about go-tos

00:13:22 --> 00:13:27
or if statements for things like this

00:13:24 --> 00:13:29
they care about achieving a goal yeah

00:13:26 --> 00:13:31
right so the real question is I want to

00:13:28 --> 00:13:33
set up a web server and I want to do a

00:13:30 --> 00:13:35
thing and I whatever like how how

00:13:32 --> 00:13:36
quickly can I achieve that right and so

00:13:34 --> 00:13:38
the from a programming language

00:13:35 --> 00:13:41
perspective there's really two things

00:13:37 --> 00:13:44
that that matter there one is what

00:13:40 --> 00:13:45
libraries exist and then how quickly can

00:13:43 --> 00:13:49
you put it together and what are the

00:13:44 --> 00:13:50
tools around that look like right and uh

00:13:48 --> 00:13:52
and when you want to build a library

00:13:49 --> 00:13:54
that's missing what do you do okay now

00:13:51 --> 00:13:57
this is where you see huge Divergence in

00:13:53 --> 00:13:58
the force between worlds okay and so you

00:13:56 --> 00:14:00
look at python for example python is

00:13:57 --> 00:14:02
really good at assembling things but

00:13:59 --> 00:14:04
it's not so great at building all the

00:14:01 --> 00:14:05
libraries and so what you get because of

00:14:03 --> 00:14:07
performance reasons other things like

00:14:04 --> 00:14:10
this is you get python layered on top of

00:14:06 --> 00:14:12
C MH for example and that means that

00:14:10 --> 00:14:13
doing certain kinds of things well it

00:14:11 --> 00:14:15
doesn't really make sense to do in

00:14:12 --> 00:14:17
Python instead you do it in C and then

00:14:14 --> 00:14:19
you rapid and then you have you're

00:14:16 --> 00:14:21
living in Two Worlds and Two Worlds

00:14:18 --> 00:14:22
never is really great because tooling

00:14:20 --> 00:14:24
and the the debugger doesn't work right

00:14:21 --> 00:14:26
and like all these kinds of things can

00:14:23 --> 00:14:28
you clarify a little bit what uh what

00:14:25 --> 00:14:31
you mean by python is not good at

00:14:27 --> 00:14:33
building libraries meaning doesn't make

00:14:30 --> 00:14:36
certain kinds of libraries no but just

00:14:32 --> 00:14:38
he actual meaning of the sentence yeah

00:14:35 --> 00:14:41
uh meaning like it's not conducive to

00:14:37 --> 00:14:44
developers to come in and add libraries

00:14:40 --> 00:14:47
or it's it's or the langu or is it the

00:14:43 --> 00:14:50
The Duality of the it's a dance between

00:14:46 --> 00:14:51
Python and c and Python's amazing

00:14:49 --> 00:14:53
Python's a great language I did not mean

00:14:50 --> 00:14:56
to say that python is is bad for

00:14:52 --> 00:14:57
libraries what what I meant to say is um

00:14:55 --> 00:14:59
there python there are libraries that

00:14:56 --> 00:15:01
Python's really good at they you can

00:14:58 --> 00:15:02
write in Python but there are other

00:15:01 --> 00:15:04
things like if you want to build a

00:15:01 --> 00:15:05
machine learning framework you're not

00:15:03 --> 00:15:07
going to build a machine learning

00:15:04 --> 00:15:09
framework in Python because of

00:15:06 --> 00:15:11
performance for example or you want GPU

00:15:08 --> 00:15:14
acceleration or things like this instead

00:15:10 --> 00:15:16
what you do is you write a bunch of C or

00:15:13 --> 00:15:19
C++ code or something like that and then

00:15:15 --> 00:15:22
you talk to it from python right and so

00:15:18 --> 00:15:25
this is because of decisions that were

00:15:21 --> 00:15:26
made in the python design and um and

00:15:24 --> 00:15:29
those decisions have other

00:15:25 --> 00:15:30
counterbalancing forces but but the

00:15:28 --> 00:15:32
trick when you start looking at this

00:15:29 --> 00:15:35
from a programming language perspective

00:15:31 --> 00:15:37
is you start say okay cool how do I

00:15:34 --> 00:15:39
build this catalog of libraries that are

00:15:36 --> 00:15:41
ally powerful and how do I make it so

00:15:38 --> 00:15:43
that then they can be assembled into

00:15:40 --> 00:15:46
ways that feel good and they generally

00:15:42 --> 00:15:48
work the first time because when you're

00:15:45 --> 00:15:51
talking about building a thing you have

00:15:47 --> 00:15:52
to include the debugging the fixing the

00:15:50 --> 00:15:55
turnaround cycle the development cycle

00:15:51 --> 00:15:57
all that kind of stuff in in into the

00:15:54 --> 00:15:59
process of building the thing it's not

00:15:56 --> 00:16:01
just about pounding out the code and so

00:15:58 --> 00:16:03
this is where things like um you know

00:16:00 --> 00:16:06
catching bugs at compile time is

00:16:02 --> 00:16:09
valuable for example um but if you dive

00:16:05 --> 00:16:10
into the details on this Swift for

00:16:08 --> 00:16:12
example has certain things like value

00:16:09 --> 00:16:15
semantics which is this fancy way of

00:16:11 --> 00:16:20
saying that when you uh treat a treat a

00:16:14 --> 00:16:23
variable like a value um uh it acts like

00:16:19 --> 00:16:26
a mathematical object would okay so in

00:16:23 --> 00:16:28
you have used pytorch a little bit in

00:16:25 --> 00:16:32
pytorch you have tensors tensors are uh

00:16:27 --> 00:16:34
ND nend dimensional grid of numbers very

00:16:31 --> 00:16:36
simple you can do plus and other

00:16:33 --> 00:16:39
operators on them it's all totally fine

00:16:35 --> 00:16:41
but why do you need to clone a tensor

00:16:38 --> 00:16:43
sometimes have you ever run into that uh

00:16:40 --> 00:16:45
yeah okay and so why is that why do you

00:16:42 --> 00:16:48
need to clone a tensor it's the usual

00:16:44 --> 00:16:50
object thing that's in Python so in

00:16:47 --> 00:16:51
Python and just like with Java and many

00:16:49 --> 00:16:53
other languages this isn't unique to

00:16:50 --> 00:16:55
python in Python it has a thing called

00:16:52 --> 00:16:57
reference semantics which is the nerdy

00:16:54 --> 00:16:59
way of explaining this and what that

00:16:56 --> 00:17:03
means is you actually have a pointer to

00:16:58 --> 00:17:05
a thing instead of the thing okay now

00:17:02 --> 00:17:07
this is due to a bunch of implementation

00:17:04 --> 00:17:09
details that you don't want to go into

00:17:06 --> 00:17:11
but in Swift you have this thing called

00:17:08 --> 00:17:13
value sematics and so when you have a

00:17:10 --> 00:17:15
tensor in Swift it is a value if you

00:17:12 --> 00:17:17
copy it it looks like you have a unique

00:17:14 --> 00:17:19
copy and if you go change one of those

00:17:16 --> 00:17:21
copies then uh it doesn't update the

00:17:18 --> 00:17:23
other one because you just made a copy

00:17:20 --> 00:17:27
of this thing right so that that's like

00:17:22 --> 00:17:29
highly error prone in uh at least

00:17:26 --> 00:17:33
computer science math Centric

00:17:28 --> 00:17:35
disciplines about python that like the

00:17:32 --> 00:17:38
thing you would expect to behave

00:17:34 --> 00:17:41
like math like math it doesn't behave

00:17:37 --> 00:17:43
like math and in fact uh quietly doesn't

00:17:40 --> 00:17:45
behave like math and then can ruin the

00:17:42 --> 00:17:47
ntirety of your math exactly well and

00:17:44 --> 00:17:48
then it puts you in debugging land again

00:17:46 --> 00:17:50
yeah right now now you just want to get

00:17:47 --> 00:17:51
something done and you're like wait wait

00:17:49 --> 00:17:54
a second where you need where do I need

00:17:50 --> 00:17:55
to put clone in what level of this stack

00:17:53 --> 00:17:57
which is very complicated which I

00:17:54 --> 00:17:59
thought I was reusing somebody's library

00:17:56 --> 00:18:00
and now I need to understand it to know

00:17:58 --> 00:18:03
here to clone a thing thing right and

00:17:59 --> 00:18:04
hard to debug by the way exactly right

00:18:02 --> 00:18:05
and so this is where programming

00:18:03 --> 00:18:08
languages really matter right so in

00:18:04 --> 00:18:11
Swift having value sematics so that um

00:18:07 --> 00:18:14
both you get the benefit of math working

00:18:10 --> 00:18:16
like math right but also the efficiency

00:18:13 --> 00:18:18
that comes with certain advantages there

00:18:15 --> 00:18:19
certain implementation details there

00:18:17 --> 00:18:22
ally benefit you as a programmer right

00:18:19 --> 00:18:23
you clarify the value sematics like how

00:18:21 --> 00:18:27
do you know that a thing should be

00:18:22 --> 00:18:29
treated like a value yeah so so Swift uh

00:18:26 --> 00:18:31
as a pretty strong culture and good

00:18:28 --> 00:18:33
language support for defining values and

00:18:30 --> 00:18:35
so if you have an array so tensors are

00:18:32 --> 00:18:37
one example of that the machine learning

00:18:34 --> 00:18:39
folks are very used to um just think

00:18:36 --> 00:18:42
about arrays same thing where you have

00:18:38 --> 00:18:44
an array you put uh you create an array

00:18:41 --> 00:18:46
ou put two or three or four things into

00:18:43 --> 00:18:49
it and then you pass it off to another

00:18:45 --> 00:18:52
function mhm what happens if that that

00:18:48 --> 00:18:54
uh function adds some more things to it

00:18:51 --> 00:18:55
well you'll see it on the side that you

00:18:53 --> 00:19:00
pass it in right this is called

00:18:54 --> 00:19:02
reference semantics now what if you

00:18:59 --> 00:19:03
pass an array off to a function it

00:19:01 --> 00:19:05
Scrolls it away in some dictionary or

00:19:02 --> 00:19:07
some other data structure somewhere

00:19:04 --> 00:19:09
right well it thought that you just

00:19:06 --> 00:19:11
handed it that array then you return

00:19:08 --> 00:19:13
back and that that that reference to

00:19:10 --> 00:19:16
that array still exists in the callar

00:19:12 --> 00:19:17
and they go and put more stuff in it

00:19:15 --> 00:19:20
right the the person you handed it off

00:19:16 --> 00:19:21
to may have thought they had the only

00:19:19 --> 00:19:23
reference to that and so they didn't

00:19:20 --> 00:19:25
know what they that this was going to

00:19:22 --> 00:19:27
change underneath the covers and so this

00:19:24 --> 00:19:29
where you end up having to do clone

00:19:26 --> 00:19:30
so like I was past a thing I'm not sure

00:19:28 --> 00:19:33
if I have the only

00:19:29 --> 00:19:35
version of it so now I have to clone it

00:19:32 --> 00:19:37
so what value sematics does is it allows

00:19:34 --> 00:19:39
you to say hey I have a so in Swift it

00:19:36 --> 00:19:41
defaults to value sematics for oh so

00:19:38 --> 00:19:45
defaults to value sematics and then

00:19:40 --> 00:19:47
because most things should Valu then it

00:19:44 --> 00:19:48
makes sense for that to be the default

00:19:46 --> 00:19:49
and one of the important things about

00:19:47 --> 00:19:51
hat is that arrays and dictionaries and

00:19:48 --> 00:19:52
all these other collections or

00:19:50 --> 00:19:54
aggregations of other things also have

00:19:51 --> 00:19:56
value semantics and so when you pass

00:19:53 --> 00:19:58
this around uh to different parts of

00:19:55 --> 00:20:00
your program you don't have to do these

00:19:57 --> 00:20:01
defensive copies

00:19:59 --> 00:20:03
and so this is this is great for two

00:20:00 --> 00:20:06
sides right it's great because you

00:20:02 --> 00:20:07
define away the bug which is a big deal

00:20:05 --> 00:20:09
for productivity the the number one

00:20:06 --> 00:20:11
thing most people care about but it's

00:20:08 --> 00:20:13
also good for performance because when

00:20:10 --> 00:20:14
you're doing a clone so you pass the

00:20:12 --> 00:20:16
array down to the thing it's like I

00:20:13 --> 00:20:18
don't know if anybody else has it I have

00:20:15 --> 00:20:21
to clone it well you just did a copy of

00:20:17 --> 00:20:22
a bunch of data it could be big and then

00:20:20 --> 00:20:24
it could be that the thing that called

00:20:21 --> 00:20:26
you is not keeping track of the old

00:20:23 --> 00:20:29
thing so you just made a copy of it and

00:20:25 --> 00:20:31
you may not have had to yeah and so the

00:20:28 --> 00:20:32
way the value sematics work is in Swift

00:20:30 --> 00:20:34
is it uses this thing called copy on

00:20:31 --> 00:20:36
right which means that you get you get

00:20:33 --> 00:20:38
he benefit of safety cool and

00:20:35 --> 00:20:41
performance and it has another special

00:20:37 --> 00:20:42
trick because um if you think of certain

00:20:40 --> 00:20:45
languages like Java for example they

00:20:41 --> 00:20:46
have immutable strings and so what

00:20:44 --> 00:20:48
hey're trying to do is they provide

00:20:45 --> 00:20:50
value semantics by having pure

00:20:47 --> 00:20:52
immutability functional languages have

00:20:49 --> 00:20:54
pure immutability in lots of different

00:20:51 --> 00:20:55
places and this provides a much safer

00:20:53 --> 00:20:57
model than it provides

00:20:54 --> 00:20:59
valics um the problem with this is if

00:20:56 --> 00:21:00
you have immutability everything

00:20:58 --> 00:21:04
is expensive everything

00:20:59 --> 00:21:07
requires a copy um for example in Java

00:21:03 --> 00:21:09
if you have a string X and A String y

00:21:06 --> 00:21:13
ou pen them together we have to

00:21:08 --> 00:21:16
allocate a new string to hold XY oh if

00:21:12 --> 00:21:18
they're immutable well and strings

00:21:15 --> 00:21:19
in Java are immutable and if

00:21:17 --> 00:21:22
there's there's optimizations for short

00:21:18 --> 00:21:24
ones and it's it's complicated but but

00:21:21 --> 00:21:26
generally uh think about them as a

00:21:23 --> 00:21:27
separate allocation and so when you

00:21:25 --> 00:21:29
append them together you have to go

00:21:26 --> 00:21:30
allocate a third thing mhm because

00:21:28 --> 00:21:32
somebody might have a pointer to either

00:21:29 --> 00:21:33
of the other ones right and you can't go

00:21:31 --> 00:21:36
change them so you have to go allocate a

00:21:33 --> 00:21:38
third thing um because of the beauty of

00:21:35 --> 00:21:39
how the Swift value SM system works out

00:21:37 --> 00:21:42
if you have a string and Swift and you

00:21:38 --> 00:21:46
say hey put in X right and they say

00:21:41 --> 00:21:48
append on y z w what it knows that

00:21:45 --> 00:21:50
here's only one reference to that and

00:21:47 --> 00:21:52
so it can do an inpl

00:21:49 --> 00:21:54
update and so you're not allocating tons

00:21:51 --> 00:21:55
of stuff on the side you're not you

00:21:53 --> 00:21:57
don't have all those problems when you

00:21:54 --> 00:21:59
pass it off you can know you have the

00:21:56 --> 00:22:00
only reference if you pass it off to

00:21:58 --> 00:22:02
multiple different people but nobody

00:21:59 --> 00:22:05
changes it they can all share the same

00:22:01 --> 00:22:07
thing so you get a lot of the benefit of

00:22:04 --> 00:22:08
purely mutable design and so you get

00:22:06 --> 00:22:11
a really nice sweet spot that I haven't

00:22:08 --> 00:22:13
seen in other languages yeah that's like

00:22:10 --> 00:22:17
I thought I thought there was going to

00:22:12 --> 00:22:19
be a a philosophical like narrative here

00:22:16 --> 00:22:24
that you're going to have to pay a cost

00:22:18 --> 00:22:27
for it CU it sounds like uh I think

00:22:23 --> 00:22:30
value semantics is beneficial for easing

00:22:26 --> 00:22:33
of debugging or minim izing the risk of

00:22:30 --> 00:22:35
Errors like bringing the errors closer

00:22:33 --> 00:22:38
to the

00:22:34 --> 00:22:40
source um bringing the symptom of the

00:22:37 --> 00:22:42
air closer to the source of the air

00:22:39 --> 00:22:45
however you say that and but you're

00:22:41 --> 00:22:47
saying there's not a performance cost

00:22:44 --> 00:22:48
either if you implement correctly well

00:22:46 --> 00:22:51
so there there's trade-offs with

00:22:47 --> 00:22:53
everything and so if you are doing very

00:22:50 --> 00:22:55
low-level stuff then sometimes you can

00:22:52 --> 00:22:57
oce cost but then what you're doing is

00:22:54 --> 00:23:00
you're saying what is the right default

00:22:56 --> 00:23:01
so um coming back to you interface when

00:22:59 --> 00:23:03
you when you talk about programming

00:23:00 --> 00:23:04
languages one of the ma ma major things

00:23:02 --> 00:23:08
that Swift does that makes people love

00:23:03 --> 00:23:10
it that is not obvious when it comes to

00:23:07 --> 00:23:14
designing language is this UI principle

00:23:09 --> 00:23:16
of progressive disclosure of complexity

00:23:13 --> 00:23:18
okay so Swift like many languages is

00:23:15 --> 00:23:20
very powerful the question is when do

00:23:17 --> 00:23:23
you have to learn the power as a

00:23:19 --> 00:23:25
user so Swift like python allows you to

00:23:22 --> 00:23:27
start with like print hello world MH

00:23:24 --> 00:23:31
right certain other languages uh start

00:23:26 --> 00:23:31
with like public static void Main

00:23:30 --> 00:23:36
like all the ceremony right and so you

00:23:32 --> 00:23:38
go to teach you teach a new person hey W

00:23:35 --> 00:23:41
welcome to this new thing let's talk

00:23:37 --> 00:23:43
about Public Access Control classes wait

00:23:40 --> 00:23:47
what's that string system.out do

00:23:42 --> 00:23:49
printland like packages like God right

00:23:46 --> 00:23:51
and so instead if you take this and you

00:23:48 --> 00:23:53
say hey we need you need we need

00:23:50 --> 00:23:55
packages you know modules we need we

00:23:52 --> 00:23:57
need powerful things like classes we

00:23:54 --> 00:23:59
need data structures we need like all

00:23:56 --> 00:24:00
these things the question is how do you

00:23:58 --> 00:24:03
factor after the complexity and how do

00:23:59 --> 00:24:05
you make it so that the normal case

00:24:02 --> 00:24:07
scenario is you're dealing with things

00:24:04 --> 00:24:09
that work the right way the right way

00:24:06 --> 00:24:12
give you good performance the right by

00:24:08 --> 00:24:14
default but then as a power user if you

00:24:11 --> 00:24:16
want to dive down to it you have full c

00:24:13 --> 00:24:18
performance full control over low-l

00:24:15 --> 00:24:20
pointers you can call Malik if you want

00:24:17 --> 00:24:21
o call Malik this is not recommended on

00:24:19 --> 00:24:23
the first page of every tutorial but

00:24:21 --> 00:24:25
it's actually really important when you

00:24:22 --> 00:24:28
want to get work done right and so being

00:24:24 --> 00:24:30
able to have that is really the design

00:24:27 --> 00:24:32
in programm language design design and

00:24:29 --> 00:24:34
esign is really really hard it's

00:24:31 --> 00:24:38
omething that I think a lot of people

00:24:33 --> 00:24:40
kind of um outside of UI again a lot of

00:24:37 --> 00:24:43
people just think is uh subjective like

00:24:39 --> 00:24:45
there's nothing you know it's just like

00:24:42 --> 00:24:47
Curly braces or whatever it's just like

00:24:44 --> 00:24:50
somebody's preference but actually good

00:24:46 --> 00:24:51
esign is something you can feel and uh

00:24:49 --> 00:24:54
ow many people are involved with good

00:24:50 --> 00:24:57
esign so if we looked at Swift but look

00:24:53 --> 00:24:59
at historically I mean this might touch

00:24:56 --> 00:25:03
like uh it's almost like a Steve jobs

00:24:58 --> 00:25:05
question too like how much dictatorial

00:25:02 --> 00:25:08
decision- making is required

00:25:04 --> 00:25:10
versus um

00:25:07 --> 00:25:13
collaborative and we'll talk about how

00:25:09 --> 00:25:14
all that can go wrong or right but yeah

00:25:12 --> 00:25:16
well Swift so I can't speak to in

00:25:13 --> 00:25:18
general all design everywhere uh so the

00:25:15 --> 00:25:21
way it works with swift is that um

00:25:17 --> 00:25:23
there's a core team and so a core team

00:25:20 --> 00:25:25
is uh six or seven people is something

00:25:22 --> 00:25:27
like that that is people that have been

00:25:24 --> 00:25:30
working with swift since very early days

00:25:26 --> 00:25:33
and so I and by early days is not that

00:25:29 --> 00:25:35
long ago okay yeah so it's it it became

00:25:32 --> 00:25:38
public in 2014 so it's been six years

00:25:35 --> 00:25:39
public now but um but still that's

00:25:37 --> 00:25:42
enough time that there's a story arc

00:25:38 --> 00:25:43
there okay and there's mistakes have

00:25:41 --> 00:25:45
been made that then get fixed and you

00:25:42 --> 00:25:48
learn something and then you you know

00:25:44 --> 00:25:50
and so uh what the core team does is it

00:25:47 --> 00:25:53
provides continuity and so you want to

00:25:49 --> 00:25:56
have a okay well there's a big hole that

00:25:52 --> 00:25:58
we want to fill we know we want to fill

00:25:55 --> 00:26:00
it so don't do other things that invade

00:25:57 --> 00:26:01
that space until we fill the hole right

00:25:59 --> 00:26:03
here there's a boulder that's missing

00:26:00 --> 00:26:06
here we want to do we will do that

00:26:02 --> 00:26:07
Boulder even though it's not today keep

00:26:05 --> 00:26:10
out of that space and the whole

00:26:06 --> 00:26:12
team remembers of the remembers the myth

00:26:09 --> 00:26:13
of the boulder that's there yeah yeah

00:26:11 --> 00:26:15
there's a general sense of what the

00:26:12 --> 00:26:17
future looks like in Broad strokes and a

00:26:14 --> 00:26:19
shared understanding of that combined

00:26:16 --> 00:26:20
with a shared understanding of what has

00:26:18 --> 00:26:23
happened in the past that worked out

00:26:19 --> 00:26:25
well and didn't work out well um the

00:26:22 --> 00:26:26
next level out is you have the uh what's

00:26:24 --> 00:26:28
called the Swift Evolution community and

00:26:25 --> 00:26:30
you've got in that case hundreds of

00:26:27 --> 00:26:32
people that really care passionately

00:26:29 --> 00:26:34
about the way Swift evolves and that's

00:26:31 --> 00:26:36
like an amazing thing to again uh the

00:26:33 --> 00:26:38
court team doesn't necessarily need to

00:26:35 --> 00:26:39
come up with all the good ideas you got

00:26:37 --> 00:26:40
hundreds of people out there that care

00:26:38 --> 00:26:42
about something and they come up with

00:26:39 --> 00:26:45
really good ideas too and that provides

00:26:41 --> 00:26:48
this like tumbling rock tumbler for

00:26:44 --> 00:26:50
ideas and so the the evolution process

00:26:47 --> 00:26:51
is you know a lot of people in a

00:26:49 --> 00:26:53
discourse form they're like hashing it

00:26:50 --> 00:26:55
out and trying to like talk about okay

00:26:52 --> 00:26:57
well would should we go left or right or

00:26:54 --> 00:26:57
if we did this what would be good and

00:26:56 --> 00:26:58
you know here you're talking about

00:26:56 --> 00:27:01
hundreds of people so you're not going

00:26:58 --> 00:27:04
to get consensus necessarily not obvious

00:27:01 --> 00:27:07
consensus and so there's a proposal

00:27:03 --> 00:27:09
process that uh then allows the core

00:27:06 --> 00:27:12
team and the community to work this out

00:27:08 --> 00:27:13
and what the core team does is it aims

00:27:11 --> 00:27:16
to get consensus out of the community

00:27:12 --> 00:27:17
and provide gu guard rails but also

00:27:15 --> 00:27:19
provide

00:27:16 --> 00:27:21
long-term make sure we're going the

00:27:18 --> 00:27:25
right direction kind of things so does

00:27:20 --> 00:27:28
that group represent like the how much

00:27:24 --> 00:27:30
people will love the user interface like

00:27:27 --> 00:27:32
you think to capture that well I mean

00:27:29 --> 00:27:34
it's something we talk about a lot

00:27:31 --> 00:27:36
something we care about how well we how

00:27:33 --> 00:27:37
ell we do that Up For Debate but I

00:27:35 --> 00:27:40
think that we've done pretty well so far

00:27:36 --> 00:27:41
is the beginner in mind like cuz you

00:27:39 --> 00:27:44
said the progressive disclosure complex

00:27:41 --> 00:27:46
yeah so we care a lot about uh a lot

00:27:43 --> 00:27:48
about that a lot about power a lot about

00:27:45 --> 00:27:50
efficiency a lot about there are many

00:27:47 --> 00:27:53
factors to good design and you have to

00:27:49 --> 00:27:55
figure out a way to kind of work your

00:27:52 --> 00:27:57
way through that and so if you like

00:27:54 --> 00:28:00
think about like a language I love is

00:27:56 --> 00:28:02
lisp probably still because I use Zac

00:27:59 --> 00:28:04
but I haven't done anything any serious

00:28:01 --> 00:28:08
working list but it has a ridiculous

00:28:03 --> 00:28:11
amount of parentheses yeah um I've also

00:28:07 --> 00:28:13
you know with Java and

00:28:10 --> 00:28:17
C++ uh the

00:28:12 --> 00:28:20
braces um you know I I like I I I

00:28:16 --> 00:28:23
enjoyed the comfort of being between

00:28:19 --> 00:28:25
braces you know python is really sorry

00:28:22 --> 00:28:27
to interrupt just like and last thing to

00:28:24 --> 00:28:30
me as a design if I was a language

00:28:26 --> 00:28:34
designer uh God for bit is I would be

00:28:29 --> 00:28:36
very surprised that python with no

00:28:33 --> 00:28:39
braces would nevertheless

00:28:35 --> 00:28:41
omehow be comforting also so like I can

00:28:38 --> 00:28:43
see Arguments for all of these but look

00:28:40 --> 00:28:46
at this this is evidence that it's not

00:28:42 --> 00:28:48
about braces versus tevs right exactly

00:28:45 --> 00:28:50
ou're good that's a good point right so

00:28:47 --> 00:28:51
like you know there there's there's

00:28:49 --> 00:28:53
evidence that but see like it's one of

00:28:50 --> 00:28:55
the most argued about things oh yeah of

00:28:52 --> 00:28:57
course just like tabs and spaces which

00:28:54 --> 00:28:59
it does I mean there's one obvious right

00:28:56 --> 00:29:02
answer but it doesn't it doesn't

00:28:58 --> 00:29:03
actually matter what's that come on

00:29:01 --> 00:29:04
we're friends like come on what are you

00:29:02 --> 00:29:06
trying to do to me here people are going

00:29:03 --> 00:29:09
to yeah half the people are going to

00:29:05 --> 00:29:11
tune out yeah um so so do you're able to

00:29:08 --> 00:29:14
identify things that don't really matter

00:29:10 --> 00:29:16
for the experience well no no no it's

00:29:13 --> 00:29:18
it's always a really hard so the

00:29:15 --> 00:29:20
asy decisions are easy right I mean you

00:29:17 --> 00:29:21
C fine those are not the interesting

00:29:19 --> 00:29:23
ones the hard ones are the ones that are

00:29:20 --> 00:29:25
most interesting right the hard ones are

00:29:22 --> 00:29:27
the places where hey we want to do a

00:29:24 --> 00:29:29
thing everybody agrees we should do it

00:29:26 --> 00:29:32
here's one proposal on the table but it

00:29:29 --> 00:29:34
has all these bad things associated with

00:29:31 --> 00:29:36
it well okay what are we going to do

00:29:33 --> 00:29:38
about that do we just take it do we

00:29:35 --> 00:29:39
delay it do we say hey well maybe

00:29:37 --> 00:29:42
there's this other feature that if we do

00:29:38 --> 00:29:45
that first this will work out better um

00:29:41 --> 00:29:47
how does this if if we do this are we

00:29:44 --> 00:29:48
painting ourselves into a corner right

00:29:46 --> 00:29:50
and so this is where again you're having

00:29:47 --> 00:29:52
that core team of people that uh has

00:29:49 --> 00:29:54
ome continuity and has perspective has

00:29:51 --> 00:29:57
ome of the historical understanding is

00:29:53 --> 00:29:58
really valuable because you get um it's

00:29:56 --> 00:30:00
not just like one brain you get the

00:29:57 --> 00:30:01
power of multiple people coming together

00:29:59 --> 00:30:03
to make good decisions and then you get

00:30:00 --> 00:30:06
he best out of all these people and you

00:30:02 --> 00:30:08
also can harness the the community

00:30:05 --> 00:30:10
around it what about like the decision

00:30:07 --> 00:30:15
of whether like in Python having one

00:30:09 --> 00:30:18
type or having you know uh strict typing

00:30:14 --> 00:30:20
yeah yeah let's talk about this so so um

00:30:17 --> 00:30:21
I I like how you put that by the way

00:30:19 --> 00:30:23
like so so many people would say that

00:30:20 --> 00:30:25
python doesn't have types doesn't have

00:30:22 --> 00:30:29
types yeah I've listened to you enough

00:30:24 --> 00:30:31
to where okay I'm I'm a fan of yours and

00:30:28 --> 00:30:33
listened to way too many podcast and

00:30:30 --> 00:30:36
videos talking about this oh yeah so I

00:30:33 --> 00:30:38
would argue that python has one type and

00:30:35 --> 00:30:40
so um so like when you import python

00:30:37 --> 00:30:42
into Swift which by the way works really

00:30:39 --> 00:30:44
well you have everything comes in as a

00:30:41 --> 00:30:47
python object now here there trade-offs

00:30:43 --> 00:30:48
because um uh you know it depends on

00:30:46 --> 00:30:50
what you're optimizing for and python is

00:30:47 --> 00:30:53
a super successful language for a really

00:30:49 --> 00:30:55
good reason um because it has one type

00:30:52 --> 00:30:58
uh you get duck typing for free and

00:30:54 --> 00:30:59
things like this but also you're pushing

00:30:57 --> 00:31:01
you're making it very easy to to pound

00:30:58 --> 00:31:04
out code on the one hand but you're also

00:31:00 --> 00:31:07
making it very easy to introduce uh

00:31:03 --> 00:31:08
complicated bugs the have debug and you

00:31:06 --> 00:31:10
pass the string into something that

00:31:07 --> 00:31:12
expects an integer and it doesn't

00:31:09 --> 00:31:13
immediately die it goes all the way down

00:31:11 --> 00:31:14
the stack trace and you find yourself in

00:31:12 --> 00:31:15
the middle of some code that you really

00:31:13 --> 00:31:17
didn't want to know anything about and

00:31:14 --> 00:31:20
it blows up and you're just saying well

00:31:16 --> 00:31:22
what did I do wrong right and so types

00:31:19 --> 00:31:23
are good and bad and they have

00:31:21 --> 00:31:24
trade-offs they're good for performance

00:31:22 --> 00:31:26
and certain other things depending on

00:31:23 --> 00:31:28
where you're coming from but it's it's

00:31:25 --> 00:31:30
all about trade-offs and so this is this

00:31:27 --> 00:31:31
what design is Right design is about

00:31:29 --> 00:31:34
weighing tradeoffs and trying to

00:31:30 --> 00:31:35
understand the ramifications of the the

00:31:33 --> 00:31:39
things that you're weighing like types

00:31:34 --> 00:31:41
or not or one type or many types um but

00:31:38 --> 00:31:43
also within many types how powerful do

00:31:40 --> 00:31:45
you make that type system is another

00:31:42 --> 00:31:47
very complicated question uh with lots

00:31:44 --> 00:31:50
of trade-offs it's very interesting by

00:31:46 --> 00:31:51
the way uh but uh but that's like one

00:31:50 --> 00:31:55
dimension and there's a bunch of other

00:31:52 --> 00:31:57
dimensions jit compiled versus static

00:31:54 --> 00:31:59
ompiled garbage collected versus

00:31:56 --> 00:32:01
reference counted versus memory man

00:31:58 --> 00:32:03
ual memory management versus you know

00:32:00 --> 00:32:04
like in like all these different

00:32:02 --> 00:32:06
rade-offs and how you balance them are

00:32:03 --> 00:32:09
what make a programm language good

00:32:05 --> 00:32:11
currency y so and all those things I

00:32:08 --> 00:32:13
guess uh when you're designing the

00:32:10 --> 00:32:16
language you also have to think of how

00:32:12 --> 00:32:18
that's going to get all compiled down to

00:32:15 --> 00:32:20
if you care about performance yeah well

00:32:17 --> 00:32:22
and go back to list right so list also I

00:32:19 --> 00:32:25
would say JavaScript is another example

00:32:21 --> 00:32:28
of a very simple language right and so

00:32:24 --> 00:32:30
ne of the so I also love lisp I don't

00:32:27 --> 00:32:32
use it as much as maybe you do or you

00:32:29 --> 00:32:35
did no I think we're both everyone who

00:32:31 --> 00:32:38
loves lisp it's like you love it's like

00:32:34 --> 00:32:39
I don't know I love Frank Sinatra but

00:32:37 --> 00:32:42
like how often do I seriously listen to

00:32:38 --> 00:32:44
Franks sure but but but you look at that

00:32:41 --> 00:32:45
or you look at JavaScript which is

00:32:43 --> 00:32:47
another very different but relatively

00:32:44 --> 00:32:50
simple language and there's certain

00:32:46 --> 00:32:52
things that don't exist in the language

00:32:49 --> 00:32:53
but there's there is inherent complexity

00:32:51 --> 00:32:54
to the problems that we're trying to

00:32:52 --> 00:32:57
model and so what happens to the

00:32:53 --> 00:32:58
complexity in the case of uh both of

00:32:56 --> 00:33:01
them for example you say well what about

00:32:57 --> 00:33:02
large scale software development

00:33:00 --> 00:33:04
okay well you need something like

00:33:01 --> 00:33:07
packages neither language has a like

00:33:03 --> 00:33:08
language affordance for packages and so

00:33:06 --> 00:33:10
what you get is patterns you get things

00:33:08 --> 00:33:12
like npn you get things like you know

00:33:09 --> 00:33:14
like these ecosystems that get built

00:33:11 --> 00:33:16
around and I'm a believer that if you

00:33:13 --> 00:33:18
don't uh model at least the most

00:33:15 --> 00:33:20
important inherent complexity in the

00:33:17 --> 00:33:22
language then what ends up happening is

00:33:19 --> 00:33:24
that complexity gets pushed

00:33:21 --> 00:33:26
elsewhere and when it gets pushed

00:33:23 --> 00:33:28
elsewhere sometimes that's great because

00:33:25 --> 00:33:29
often building things as libraries is

00:33:27 --> 00:33:31
very flexible and very powerful and

00:33:28 --> 00:33:33
allows you to evolve and things like

00:33:30 --> 00:33:35
that but often it leads to a lot of uh

00:33:32 --> 00:33:38
unnecessary Divergence in the force and

00:33:34 --> 00:33:40
fragmentation and and when that happens

00:33:37 --> 00:33:42
you just get kind of a mess yeah and so

00:33:39 --> 00:33:44
the question is how do you how do you

00:33:41 --> 00:33:45
balance that uh don't put too much stuff

00:33:43 --> 00:33:47
in the language because that's really

00:33:44 --> 00:33:49
expensive and makes things complicated

00:33:46 --> 00:33:51
but how do you model enough of the

00:33:48 --> 00:33:53
inherent complexity of the problem that

00:33:50 --> 00:33:55
um you provide the framework and the

00:33:52 --> 00:33:57
structure for people to think about Al

00:33:55 --> 00:33:59
so so the the the the key thing to think

00:33:56 --> 00:34:01
about with uh with programming languages

00:33:59 --> 00:34:03
and you think about what a programming

00:34:00 --> 00:34:05
language is there for is it's about

00:34:02 --> 00:34:06
making a human more productive right and

00:34:04 --> 00:34:09
so like there's an old I think it's

00:34:05 --> 00:34:12
Steve Jobs quote about um it's a bicycle

00:34:08 --> 00:34:13
for the mind right you can you can you

00:34:11 --> 00:34:16
can definitely

00:34:12 --> 00:34:19
walk but you'll get there a lot faster

00:34:15 --> 00:34:20
if you can bicycle on your way and a

00:34:18 --> 00:34:23
programming language is a bicycle for

00:34:19 --> 00:34:24
the mind yeah is basically a wow that's

00:34:22 --> 00:34:25
a really interesting way to think about

00:34:23 --> 00:34:27
it by by raising the level of

00:34:24 --> 00:34:29
abstraction now you can fit more things

00:34:26 --> 00:34:31
in your head by being being able to just

00:34:28 --> 00:34:34
directly leverage somebody's Library you

00:34:30 --> 00:34:36
can now get something done quickly um in

00:34:33 --> 00:34:38
the case of Swift swift UI is this new

00:34:35 --> 00:34:41
framework that Apple has released

00:34:37 --> 00:34:43
recently for doing UI programming and it

00:34:40 --> 00:34:45
has this declarative programming model

00:34:43 --> 00:34:47
which defines away entire classes of

00:34:44 --> 00:34:49
bugs it's make it builds on value

00:34:46 --> 00:34:51
sematics and many other nice Swift

00:34:48 --> 00:34:53
hings and what this does allows you

00:34:50 --> 00:34:56
just get way more done with way less

00:34:52 --> 00:34:58
code and now your productivity as a

00:34:55 --> 00:35:00
developer is much higher right and so

00:34:57 --> 00:35:01
that that's really the what programming

00:34:59 --> 00:35:03
languages should be about is it's not

00:35:00 --> 00:35:05
about tabs versus spaces or curly braces

00:35:02 --> 00:35:07
or whatever it's about how productive do

00:35:04 --> 00:35:10
you make the person and you can only see

00:35:06 --> 00:35:12
that when you have libraries that were

00:35:09 --> 00:35:15
built with the right intention that the

00:35:11 --> 00:35:17
language was designed for and with Swift

00:35:14 --> 00:35:19
I think we're still a little bit early

00:35:16 --> 00:35:20
um but Swift UI and many other things

00:35:18 --> 00:35:21
that are coming out now are really

00:35:19 --> 00:35:24
showing that and I think that they're

00:35:21 --> 00:35:26
opening people's eyes it's kind of

00:35:23 --> 00:35:29
interesting to think about like

00:35:25 --> 00:35:32
how that you know then knowledge of

00:35:28 --> 00:35:35
something of how good the bicycle is how

00:35:31 --> 00:35:38
people learn about that you know so I've

00:35:34 --> 00:35:41
used C++ now this is not going to be a

00:35:37 --> 00:35:43
trash talking session about C++ but use

00:35:40 --> 00:35:45
C++ for a really long go there if you

00:35:42 --> 00:35:48
want I have the

00:35:44 --> 00:35:52
scars I I feel like I spent many years

00:35:47 --> 00:35:55
without realizing like there's languages

00:35:51 --> 00:35:57
that could for my particular LIF style

00:35:54 --> 00:35:59
brain style thinking style there's

00:35:57 --> 00:36:02
languages that that could make me a lot

00:35:58 --> 00:36:05
more productive uh in the debugging

00:36:01 --> 00:36:06
stage in the just the development stage

00:36:04 --> 00:36:08
and thinking like the bicycle for the

00:36:05 --> 00:36:10
mind I can fit more stuff into my

00:36:07 --> 00:36:11
Python's a great example of that right I

00:36:09 --> 00:36:13
mean a machine learning framework in

00:36:10 --> 00:36:15
Python is a great example of that it's

00:36:12 --> 00:36:17
just very high abstraction level and so

00:36:14 --> 00:36:19
you can be thinking about things on a

00:36:16 --> 00:36:21
like very high level Al algorithmic

00:36:18 --> 00:36:22
level instead of thinking about okay

00:36:20 --> 00:36:25
well am I copying this tensor to a GPU

00:36:21 --> 00:36:26
or not right it's not it's not what you

00:36:24 --> 00:36:28
want to be thinking about and as I was

00:36:25 --> 00:36:30
telling you I mean I guess I guess the

00:36:27 --> 00:36:33
question I head is uh you know how does

00:36:29 --> 00:36:34
a person like me or in general people

00:36:32 --> 00:36:38
discover more

00:36:33 --> 00:36:40
productive uh you know languages like

00:36:37 --> 00:36:42
how I was as I've been telling you

00:36:39 --> 00:36:44
offline I've been looking for like a

00:36:41 --> 00:36:47
project to work on in Swift so I can

00:36:43 --> 00:36:49
really uh try it out as I mean my

00:36:46 --> 00:36:52
intuition was like doing a hello world

00:36:48 --> 00:36:54
is not going to get me there uh to to to

00:36:51 --> 00:36:55
get me to experience the power of the

00:36:53 --> 00:37:00
language you need a few weeks to change

00:36:54 --> 00:37:01
your metabolism exactly I put uh that

00:36:59 --> 00:37:03
's one of the problems with people

00:37:00 --> 00:37:06
with diets like I I'm I'm actually

00:37:02 --> 00:37:08
currently to go in parallel but in a

00:37:05 --> 00:37:12
small tangent is I've been recently

00:37:07 --> 00:37:16
eating only meat okay okay and okay so

00:37:11 --> 00:37:18
most people are like uh think that's

00:37:15 --> 00:37:21
horribly unhealthy or whatever you have

00:37:17 --> 00:37:23
like a million It Whatever the science

00:37:20 --> 00:37:25
is it just doesn't sound right well so

00:37:22 --> 00:37:27
back when I was in college we did the

00:37:24 --> 00:37:29
Atkins diet that was that was a thing

00:37:26 --> 00:37:32
similar and but if you you have to

00:37:28 --> 00:37:35
always give these things a chance I mean

00:37:31 --> 00:37:37
with dieting always not dieting but just

00:37:34 --> 00:37:40
he things that you like if I eat

00:37:36 --> 00:37:43
personally if I eat meat just everything

00:37:39 --> 00:37:45
I could be super F or more focused than

00:37:42 --> 00:37:47
usual I just feel great I I've been I've

00:37:44 --> 00:37:49
been running a lot you know doing

00:37:46 --> 00:37:51
push-ups and pull-ups and so on I mean

00:37:48 --> 00:37:53
python is similar in that sense for me

00:37:50 --> 00:37:56
where you going with

00:37:52 --> 00:37:59
is I mean literally I just I felt I

00:37:55 --> 00:38:02
had like a stupid smile on my face when

00:37:58 --> 00:38:04
I first started using python I could uh

00:38:01 --> 00:38:07
code up really quick things like I like

00:38:03 --> 00:38:11
I I would see the world I'll be

00:38:06 --> 00:38:12
mpowered to write a script to to um you

00:38:10 --> 00:38:15
know to do some basic data processing to

00:38:12 --> 00:38:19
rename files on my computer yeah right

00:38:14 --> 00:38:21
like Pearl didn't do that for me uh uh I

00:38:18 --> 00:38:22
mean kind a little bit well and again

00:38:20 --> 00:38:24
like none of these are about which which

00:38:21 --> 00:38:26
is best or something like that but there

00:38:23 --> 00:38:28
's definitely better and worse here

00:38:25 --> 00:38:30
but it clicks right well yeah it if you

00:38:27 --> 00:38:34
look at Pearl for example you get bogged

00:38:29 --> 00:38:35
own in uh scalers versus arrays versus

00:38:33 --> 00:38:38
hashes versus type Globs and like all

00:38:35 --> 00:38:40
that kind of stuff and and Python's like

00:38:37 --> 00:38:41
yeah let's not do this right and some of

00:38:39 --> 00:38:44
is debuging like everyone has different

00:38:41 --> 00:38:47
priorities but for me it's could I

00:38:43 --> 00:38:49
create systems for myself that Empower

00:38:46 --> 00:38:52
me to debug quickly like I've always

00:38:48 --> 00:38:53
been a big fan even just crude like

00:38:51 --> 00:38:57
asserts like

00:38:52 --> 00:39:00
always uh stating things that should be

00:38:56 --> 00:39:02
true uh which in Python I found myself

00:38:59 --> 00:39:04
doing more because of type all these

00:39:01 --> 00:39:05
kinds of stuff well you could think of

00:39:03 --> 00:39:07
types in a programming language as being

00:39:04 --> 00:39:11
kind of assert yeah they get check at

00:39:06 --> 00:39:13
compile time right um so how do you

00:39:10 --> 00:39:14
learn a new thing well so this or how do

00:39:12 --> 00:39:16
people learn new things right

00:39:13 --> 00:39:19
his this is hard uh people don't like

00:39:15 --> 00:39:21
to change people generally don't like

00:39:18 --> 00:39:23
change around them either and so uh

00:39:20 --> 00:39:25
we're all very slow to adapt and change

00:39:22 --> 00:39:27
and usually there's a catalyst that's

00:39:24 --> 00:39:28
required to to force yourself over the

00:39:26 --> 00:39:30
over over the

00:39:28 --> 00:39:32
so for learning a programming language

00:39:30 --> 00:39:36
it really comes down to finding an

00:39:31 --> 00:39:37
excuse like build a thing that that's

00:39:35 --> 00:39:40
that the language is actually good for

00:39:36 --> 00:39:43
that the ecosystem is ready for um and

00:39:39 --> 00:39:44
so um and so if you were to write an IOS

00:39:42 --> 00:39:46
app for example that would be the easy

00:39:43 --> 00:39:49
case obviously you would use Swift for

00:39:45 --> 00:39:52
that right there are other

00:39:48 --> 00:39:54
Android Swift runs on Android oh does it

00:39:51 --> 00:39:57
oh yeah yeah Swift runs in lots of

00:39:53 --> 00:40:00
places so uh okay so Swift Swift swift

00:39:56 --> 00:40:02
is built on top of lvm lvm runs

00:39:59 --> 00:40:06
everywhere lvm for example builds the

00:40:02 --> 00:40:08
Android kernel oh wow okay so um okay I

00:40:05 --> 00:40:11
didn't realize this yeah so Swift swift

00:40:07 --> 00:40:13
is very portable runs on Windows there's

00:40:10 --> 00:40:17
it runs on lots of different things and

00:40:12 --> 00:40:19
Swift side Swift UI and then there's a

00:40:16 --> 00:40:22
thing called UI kit so can I build an

00:40:18 --> 00:40:24
app with Swift uh well so that that's

00:40:21 --> 00:40:27
the thing is the ecosystem is what

00:40:23 --> 00:40:29
matters there so Swift UI and uiit are

00:40:26 --> 00:40:30
Apple Technologies okay got it and so

00:40:28 --> 00:40:32
they happen to like Swift eii happens to

00:40:29 --> 00:40:35
be written in Swift but it's an apple

00:40:31 --> 00:40:36
proprietary framework that um Apple

00:40:34 --> 00:40:38
loves and wants to keep on its platform

00:40:35 --> 00:40:40
which makes total sense you go go to

00:40:37 --> 00:40:41
Android and you don't have that Library

00:40:39 --> 00:40:44
eah right and so Android has a

00:40:41 --> 00:40:45
different ecosystem of things that

00:40:43 --> 00:40:47
hasn't been built out and doesn't work

00:40:44 --> 00:40:49
as well with Swift and so you can

00:40:46 --> 00:40:51
totally use Swift to do uh like

00:40:48 --> 00:40:52
arithmetic and things like this but

00:40:50 --> 00:40:54
building a UI with Swift on Android is

00:40:51 --> 00:40:57
not not not a not a great experience

00:40:54 --> 00:41:00
right now so so if I wanted to uh so

00:40:56 --> 00:41:02
learn Swift what's the pro I mean the

00:40:59 --> 00:41:06
one practical different version of that

00:41:01 --> 00:41:09
is um Swift for tensorflow for example

00:41:05 --> 00:41:11
and one of the inspiring things for me

00:41:08 --> 00:41:13
with both tensorflow and pytorch is how

00:41:10 --> 00:41:17
quickly the community can like switch

00:41:13 --> 00:41:18
from different libraries y like you

00:41:16 --> 00:41:21
could see some of the communi switching

00:41:17 --> 00:41:23
to pytorch now but it could it's very

00:41:21 --> 00:41:25
easy to see and then tensor flow is

00:41:22 --> 00:41:27
really stepping up its game and then

00:41:24 --> 00:41:29
there's no reason why I think it the way

00:41:26 --> 00:41:32
it works basically there has to be one

00:41:28 --> 00:41:33
GitHub repo like one paper steps up to

00:41:31 --> 00:41:35
get gets people excited gets people

00:41:32 --> 00:41:39
xcited and they're like ah I have to

00:41:34 --> 00:41:41
learn this Swift for what what Swift

00:41:38 --> 00:41:42
again like and then they learn and they

00:41:40 --> 00:41:44
fall in love with I mean that's what

00:41:41 --> 00:41:47
happen PTO has there has be a reason a

00:41:43 --> 00:41:49
catalyst yeah and so and and there I

00:41:46 --> 00:41:51
mean people don't like change but it

00:41:48 --> 00:41:53
urns out that once you've worked with

00:41:50 --> 00:41:55
one or two programming languages they're

00:41:52 --> 00:41:57
the basics are pretty similar and so one

00:41:55 --> 00:41:58
of the fun things about learning

00:41:56 --> 00:42:00
programming languages even even maybe

00:41:57 --> 00:42:02
list I don't know if you agree with this

00:41:59 --> 00:42:03
that when you start doing that you

00:42:01 --> 00:42:06
start learning new

00:42:02 --> 00:42:07
things because you have a new way to do

00:42:05 --> 00:42:10
things and you're forced to do them and

00:42:06 --> 00:42:11
that forces you to explore and it puts

00:42:09 --> 00:42:13
you in learning mode and when you get in

00:42:10 --> 00:42:14
learning mode your mind kind of opens a

00:42:12 --> 00:42:16
little bit and you can you can see

00:42:14 --> 00:42:18
things in a new way even when you go

00:42:15 --> 00:42:21
back to the old place right yeah it's

00:42:17 --> 00:42:23
totally well Lis is functional yeah uh

00:42:20 --> 00:42:26
stuff but I wish there was a kind of

00:42:22 --> 00:42:28
window maybe you can tell me if there is

00:42:25 --> 00:42:30
uh there you go this this a question

00:42:27 --> 00:42:32
uh to ask what is the most beautiful

00:42:29 --> 00:42:34
feature in a programming language before

00:42:31 --> 00:42:36
I ask it let me say like with python I

00:42:33 --> 00:42:40
remember when I saw list

00:42:35 --> 00:42:43
comprehensions okay was like when I like

00:42:39 --> 00:42:46
really took it in yeah it I don't know I

00:42:42 --> 00:42:50
just loved it it was like fun to do like

00:42:45 --> 00:42:52
it was fun to do that kind of um uh yeah

00:42:49 --> 00:42:54
there was something about it to be able

00:42:51 --> 00:42:56
to filter through a list and to create a

00:42:53 --> 00:42:59
new list all in a single line was

00:42:55 --> 00:43:02
elegant I could all get into my head and

00:42:58 --> 00:43:04
it just made me um fall in love with the

00:43:01 --> 00:43:07
language so is there let me ask you a

00:43:03 --> 00:43:09
question uh is there what do use the

00:43:06 --> 00:43:11
most beautiful feature in uh in a

00:43:08 --> 00:43:14
programming languages that you've ever

00:43:10 --> 00:43:17
encountered in Swift maybe and then

00:43:13 --> 00:43:19
outside of Swift I think the thing that

00:43:16 --> 00:43:20
I like the most from a programming

00:43:18 --> 00:43:22
language so so I think the thing you

00:43:20 --> 00:43:24
have to think about with the programming

00:43:21 --> 00:43:27
language again what is the goal you're

00:43:23 --> 00:43:29
trying to get people to get things done

00:43:26 --> 00:43:31
quickly and so you need libraries you

00:43:28 --> 00:43:33
need high quality libraries and then you

00:43:30 --> 00:43:35
need a user base around them that can

00:43:32 --> 00:43:37
assemble them and do cool things with

00:43:34 --> 00:43:39
em right and so to me the question is

00:43:36 --> 00:43:42
what enables high quality

00:43:38 --> 00:43:45
libraries okay yeah and there's a huge

00:43:42 --> 00:43:48
divide in the world between libraries

00:43:44 --> 00:43:51
who enable highquality

00:43:47 --> 00:43:53
libraries versus um the ones that put

00:43:50 --> 00:43:56
special stuff in the language so

00:43:53 --> 00:43:57
programming languages that enable high

00:43:55 --> 00:44:00
quality libr high quality libraries got

00:43:56 --> 00:44:03
it so so and what I mean by that is

00:43:59 --> 00:44:04
expressive libraries that then feel like

00:44:02 --> 00:44:08
a natural integrated part of the

00:44:03 --> 00:44:11
language itself MH so um an example of

00:44:07 --> 00:44:13
this in Swift is that int and float and

00:44:10 --> 00:44:14
also array and string things like this

00:44:12 --> 00:44:17
these are all part of the library like

00:44:13 --> 00:44:20
int is not hard-coded into

00:44:16 --> 00:44:22
Swift and so what that means is that

00:44:19 --> 00:44:23
because int is just a Library Thing

00:44:21 --> 00:44:25
defined in the standard Library along

00:44:22 --> 00:44:26
with strings and arrays and all the

00:44:24 --> 00:44:29
other things that come with the standard

00:44:25 --> 00:44:32
Library um well hopefully you do like

00:44:28 --> 00:44:34
int but anything that any language

00:44:31 --> 00:44:37
features that you needed to Define int

00:44:33 --> 00:44:40
you can also use in your own types so if

00:44:36 --> 00:44:42
you want to define a uh querian or

00:44:39 --> 00:44:44
something like this right um well it

00:44:41 --> 00:44:46
doesn't come in the standard Library um

00:44:43 --> 00:44:48
there's a very special set of people

00:44:45 --> 00:44:50
that care a lot about this but those

00:44:47 --> 00:44:52
people are also important it's not it's

00:44:49 --> 00:44:54
not about classism right it's not about

00:44:52 --> 00:44:55
he people who care about instant floats

00:44:53 --> 00:44:57
are more important than the people who

00:44:54 --> 00:44:58
care about querian and so to me the

00:44:56 --> 00:45:00
beautiful things about about programming

00:44:57 --> 00:45:02
languages is when you allow those

00:44:59 --> 00:45:04
communities to to build high quality

00:45:01 --> 00:45:05
libraries that feel native that feel

00:45:03 --> 00:45:08
ike they're built into the built into

00:45:04 --> 00:45:11
the compiler without having to

00:45:07 --> 00:45:15
be what does it mean for the int to be

00:45:10 --> 00:45:20
part of not hardcoded in so is it like

00:45:14 --> 00:45:22
how so what is an what is an INT okay

00:45:19 --> 00:45:24
int is just a integer in this case it's

00:45:21 --> 00:45:26
like a you know like a 64-bit integer or

00:45:23 --> 00:45:29
something like this but so like the

00:45:25 --> 00:45:31
64-bit is hardcoded or no no none of

00:45:28 --> 00:45:33
that's hardcoded so int int if you go

00:45:30 --> 00:45:36
look at how it's implemented is it's

00:45:32 --> 00:45:37
just a struct and Swift and so it's a

00:45:35 --> 00:45:40
struct and then how do you add two

00:45:36 --> 00:45:43
structs well you define plus and so you

00:45:39 --> 00:45:44
can Define Plus on int well you can

00:45:42 --> 00:45:47
Define Plus on your thing too you can

00:45:43 --> 00:45:49
Define uh int has like an is OD method

00:45:46 --> 00:45:52
or something like that on it and so yeah

00:45:48 --> 00:45:54
you can add methods onto things yeah uh

00:45:51 --> 00:45:56
so you can you can def find operators

00:45:53 --> 00:45:58
like how it behaves yeah that to is

00:45:55 --> 00:46:01
beautiful when there there's something

00:45:57 --> 00:46:05
about the language which enables others

00:46:00 --> 00:46:08
to create libraries which are um not

00:46:04 --> 00:46:09
hacky yeah that feel that feel native

00:46:07 --> 00:46:13
and so one of the best examples of this

00:46:08 --> 00:46:15
lisp MH right because in lisp all

00:46:12 --> 00:46:16
ike all the libraries are basically

00:46:14 --> 00:46:18
part of the language right you write

00:46:15 --> 00:46:21
rm rewrite systems and things like

00:46:17 --> 00:46:23
this and so can you as a counter example

00:46:20 --> 00:46:25
provide what makes it difficult to write

00:46:22 --> 00:46:28
a library that's native is it the python

00:46:24 --> 00:46:31
C well so well so one example I'll give

00:46:27 --> 00:46:34
you two examples um Java and C++ or Java

00:46:30 --> 00:46:37
nd C um they both allow you to Define

00:46:34 --> 00:46:40
your own types um but int is hard code

00:46:36 --> 00:46:42
in the language okay well why well in in

00:46:39 --> 00:46:44
Java for example coming back to this

00:46:41 --> 00:46:48
whole reference semantic value semantic

00:46:43 --> 00:46:51
thing um int gets passed around by

00:46:47 --> 00:46:54
value yeah but if you if you make if you

00:46:50 --> 00:46:56
make like a pair or something like that

00:46:53 --> 00:46:58
a complex number right it's a it's a

00:46:55 --> 00:47:01
class in Java and now it gets passed

00:46:57 --> 00:47:03
around by reference by pointer and so

00:47:00 --> 00:47:07
now you lose value sematics right you

00:47:03 --> 00:47:09
lost math okay well that's not great

00:47:06 --> 00:47:11
right if if you can do something with in

00:47:08 --> 00:47:12
why can't I do it with my type yeah

00:47:10 --> 00:47:14
right so that's

00:47:11 --> 00:47:17
the the negative side of the

00:47:13 --> 00:47:19
thing I find beautiful is when you can

00:47:16 --> 00:47:21
solve that when you can have full

00:47:18 --> 00:47:24
expressivity where where you as a user

00:47:20 --> 00:47:25
of the language have as much or almost

00:47:23 --> 00:47:27
as much power as the people who

00:47:24 --> 00:47:29
implemented all the standard built-in

00:47:26 --> 00:47:32
stuff because what that enables is that

00:47:28 --> 00:47:34
enables truly beautiful libraries you

00:47:31 --> 00:47:38
know it's kind of weird cuz I've gotten

00:47:33 --> 00:47:40
used to that uh that's one I guess other

00:47:37 --> 00:47:43
aspect of program language design you

00:47:39 --> 00:47:45
have to think you know the old uh first

00:47:42 --> 00:47:48
principles thinking like why are we

00:47:44 --> 00:47:50
doing it this way by the way I mean I

00:47:47 --> 00:47:53
remember cuz I was thinking about the

00:47:49 --> 00:47:56
wallers operator and I'll ask you about

00:47:52 --> 00:48:00
it later but it it hit me that like the

00:47:55 --> 00:48:02
qual sign for assignment yeah like why

00:47:59 --> 00:48:04
are we using the equal sign for

00:48:01 --> 00:48:06
assignment and that's not the only

00:48:03 --> 00:48:08
solution right so if you look at Pascal

00:48:05 --> 00:48:12
they use colon equals for assignment and

00:48:07 --> 00:48:14
equals for um for equality and they use

00:48:11 --> 00:48:16
like less than greater than instead of

00:48:13 --> 00:48:19
the not equal thing like there are other

00:48:15 --> 00:48:22
answers here so but like and yeah like

00:48:18 --> 00:48:26
ask you all but how do you then

00:48:21 --> 00:48:28
decide uh to break convention to say you

00:48:25 --> 00:48:30
know what

00:48:27 --> 00:48:33
his everybody's doing it wrong we're

00:48:29 --> 00:48:35
gonna do it right yeah so so it's like

00:48:32 --> 00:48:37
an Roi like return on investment

00:48:34 --> 00:48:40
radeoff right so if you do something

00:48:36 --> 00:48:41
weird let's just say like not like colon

00:48:39 --> 00:48:44
equal instead of equal for assignment

00:48:41 --> 00:48:47
hat would be weird with today's

00:48:43 --> 00:48:48
aesthetic right and so you'd say cool

00:48:46 --> 00:48:51
this is theoretically better but is it

00:48:47 --> 00:48:52
better in which ways like what do I get

00:48:50 --> 00:48:54
out of that do I Define away class of

00:48:51 --> 00:48:56
bugs well one of the class of bugs that

00:48:53 --> 00:49:00
c has is that you can use like you know

00:48:55 --> 00:49:03
if x equals without equals equals f x

00:48:59 --> 00:49:06
equals y yeah right well turns out you

00:49:02 --> 00:49:08
can solve that problem in lots of ways

00:49:05 --> 00:49:10
clang for example GCC all these

00:49:07 --> 00:49:12
compilers will detect that as a as a

00:49:09 --> 00:49:14
likely bug produce a warning do they

00:49:11 --> 00:49:18
eah I feel like they didn't or clang do

00:49:13 --> 00:49:19
GCC didn't and it's like one of the

00:49:17 --> 00:49:21
important things about programming

00:49:18 --> 00:49:24
language design is like you're literally

00:49:20 --> 00:49:28
creating suffering in the

00:49:23 --> 00:49:29
world okay like like I feel I mean one

00:49:27 --> 00:49:31
way to see it is the bicycle for the

00:49:28 --> 00:49:33
mine but the other way is to like

00:49:30 --> 00:49:35
minimizing suffering well you have to

00:49:32 --> 00:49:37
decide if it's worth it right and so

00:49:34 --> 00:49:39
let's come back to that okay but um but

00:49:36 --> 00:49:40
if you if you look at this and again

00:49:38 --> 00:49:43
this is where there's a lot of detail

00:49:39 --> 00:49:46
that goes into each of these things um

00:49:42 --> 00:49:50
uh equal and C returns a

00:49:45 --> 00:49:53
value y that's messed up that allows you

00:49:49 --> 00:49:56
to say xal yals Z like that works in C

00:49:52 --> 00:49:58
yeah um is it messed up you know most

00:49:55 --> 00:50:01
people think it's messed up by think uh

00:49:57 --> 00:50:04
it it is very by messed up what I mean

00:50:00 --> 00:50:07
is it is very rarely used for good and

00:50:03 --> 00:50:10
it's often used for bugs yeah right and

00:50:06 --> 00:50:12
so that's a good definition of up yeah

00:50:09 --> 00:50:14
you could use you know it's it's a in

00:50:11 --> 00:50:16
hindsight this was not such a great idea

00:50:13 --> 00:50:17
right now one of the things with swift

00:50:15 --> 00:50:20
hat is really powerful and one of the

00:50:16 --> 00:50:23
reasons it's actually good um versus it

00:50:19 --> 00:50:25
being full of good ideas is that um when

00:50:22 --> 00:50:27
we launched Swift one we announced

00:50:24 --> 00:50:29
that it was public people could use it

00:50:26 --> 00:50:32
people could build apps but it was going

00:50:28 --> 00:50:34
to change and break okay when Swift 2

00:50:31 --> 00:50:35
came out we said hey it's open source

00:50:33 --> 00:50:38
and there's this open process which

00:50:34 --> 00:50:40
people can uh help evolve and direct the

00:50:37 --> 00:50:42
language so the community at large like

00:50:39 --> 00:50:45
Swift users can now help shape the

00:50:41 --> 00:50:47
language as it is and what happened is

00:50:44 --> 00:50:50
that part as part of that process is a

00:50:46 --> 00:50:53
lot of really bad mistakes got taken out

00:50:49 --> 00:50:55
so for example Swift used to have the C

00:50:52 --> 00:50:57
style Plus+ and minus minus operators

00:50:55 --> 00:50:58
like what does it mean when you put it

00:50:56 --> 00:51:02
before versus

00:50:57 --> 00:51:04
after right well that got cargo culted

00:51:01 --> 00:51:05
from C into Swift early on what's cargo

00:51:03 --> 00:51:07
culted cargo culted means uh brought

00:51:05 --> 00:51:10
forward without really considering

00:51:06 --> 00:51:13
it okay um this is maybe not

00:51:09 --> 00:51:15
he most py term but um have to look it

00:51:12 --> 00:51:18
up an urban dictionary yeah yeah so it

00:51:14 --> 00:51:20
got pulled it got pulled into C without

00:51:17 --> 00:51:22
or it got pulled into Swift without very

00:51:19 --> 00:51:23
good consideration and we went through

00:51:21 --> 00:51:26
this process and one of the first things

00:51:22 --> 00:51:28
got ripped out was plus plus and minus

00:51:25 --> 00:51:30
because they lead to confusion

00:51:27 --> 00:51:33
they have very low value over saying you

00:51:29 --> 00:51:35
know X plus equals 1 and X Plus equal 1

00:51:32 --> 00:51:37
is way more clear and so when you're

00:51:34 --> 00:51:40
optimizing for teachability and Clarity

00:51:36 --> 00:51:42
and bugs and this multi-dimensional

00:51:39 --> 00:51:44
space that you're looking at um things

00:51:41 --> 00:51:46
like that really matter and so being uh

00:51:43 --> 00:51:47
first principles on where you're coming

00:51:45 --> 00:51:49
from and what you're trying to achieve

00:51:46 --> 00:51:52
and being anchored on the objective is

00:51:48 --> 00:51:56
really important well let me ask you

00:51:51 --> 00:51:58
about uh the most uh sort of this this

00:51:55 --> 00:52:00
uh this this podcast isn't about

00:51:57 --> 00:52:02
information it's about drama so let me

00:51:59 --> 00:52:07
talk to you about some drama so you

00:52:01 --> 00:52:08
mentioned Pascal and colon equals uh

00:52:06 --> 00:52:12
there's something that's called the

00:52:07 --> 00:52:16
wallrus operator okay and uh python uh

00:52:11 --> 00:52:18
in Python 3.8 added the walus operator

00:52:15 --> 00:52:20
and the reason I think it's

00:52:17 --> 00:52:23
interesting uh it's not just because of

00:52:19 --> 00:52:24
the feature it does it's it has the same

00:52:22 --> 00:52:26
kind of expression feature you can

00:52:23 --> 00:52:28
mention to see that it Returns the value

00:52:25 --> 00:52:30
of the assignment

00:52:27 --> 00:52:32
and maybe you can comment on that in

00:52:29 --> 00:52:36
general but on the other side of it it's

00:52:31 --> 00:52:39
also the thing that that uh toppled the

00:52:35 --> 00:52:42
dictator uh so okay it finally drove

00:52:38 --> 00:52:44
Guido to uh step down from edfl the

00:52:41 --> 00:52:46
toxicity of the community so maybe um

00:52:43 --> 00:52:48
what do you think about the wallus

00:52:45 --> 00:52:51
operator in in Python is there an

00:52:47 --> 00:52:55
equivalent thing in Swift that

00:52:50 --> 00:52:57
really uh stress tested the community

00:52:54 --> 00:52:59
and uh and then on the flip side what do

00:52:56 --> 00:53:01
you think about AGA stepping down over

00:52:58 --> 00:53:03
it yeah if well if like if I look past

00:53:00 --> 00:53:04
he details of the W walrus operator one

00:53:02 --> 00:53:06
of the things that makes it most

00:53:03 --> 00:53:09
polarizing is that it's syntactic

00:53:05 --> 00:53:11
sugar okay what do you mean by syntactic

00:53:08 --> 00:53:12
Sugar it means you can take something

00:53:10 --> 00:53:15
that already exists in the language and

00:53:11 --> 00:53:17
you can express it in a more concise way

00:53:14 --> 00:53:20
so okay I'm going to play Do's advocate

00:53:16 --> 00:53:23
so uh this is great uh is that objective

00:53:19 --> 00:53:25
or subjective statement like can you can

00:53:22 --> 00:53:28
you argue that basically anything is

00:53:24 --> 00:53:30
yntactic sugar or no uh

00:53:27 --> 00:53:33
no you not everything is is syntactic

00:53:30 --> 00:53:37
sugar so for example um the type system

00:53:32 --> 00:53:40
like can you have classes versus uh

00:53:36 --> 00:53:43
like do you have types or not

00:53:39 --> 00:53:45
right so so one type versus many types

00:53:42 --> 00:53:47
is not something that affects syntactic

00:53:44 --> 00:53:49
sugar and so if you say I want to have

00:53:46 --> 00:53:51
the ability to Define types I have to

00:53:48 --> 00:53:53
have all this like language mechanics to

00:53:50 --> 00:53:55
Define classes and oh now I have to have

00:53:52 --> 00:53:56
inheritance and I have like have all

00:53:54 --> 00:53:58
this stuff that's just making the

00:53:55 --> 00:54:02
language more complicated mhm that's not

00:53:57 --> 00:54:04
about sugaring it um Swift

00:54:01 --> 00:54:06
has sugar so like Swift has this thing

00:54:03 --> 00:54:08
called IFL and it has uh various

00:54:06 --> 00:54:11
operators that used to

00:54:07 --> 00:54:14
conisy uh specific use cases so the

00:54:10 --> 00:54:16
problem with syntactic sugar when you're

00:54:13 --> 00:54:17
talking about hey I have a thing that

00:54:15 --> 00:54:19
akes a lot to write and I have a new

00:54:16 --> 00:54:22
ay to write it you have this like

00:54:19 --> 00:54:24
horrible trade-off which becomes almost

00:54:21 --> 00:54:27
completely subjective which is how often

00:54:23 --> 00:54:28
does this happen and does it matter and

00:54:26 --> 00:54:29
one of the things that is true about

00:54:27 --> 00:54:30
human psychology particularly when

00:54:28 --> 00:54:34
you're talking about introducing a new

00:54:30 --> 00:54:36
thing is that uh people over

00:54:33 --> 00:54:38
estimate the burden of learning

00:54:35 --> 00:54:40
something and so it looks foreign when

00:54:37 --> 00:54:41
you haven't gotten used to it but if it

00:54:39 --> 00:54:43
was there from the beginning of course

00:54:40 --> 00:54:44
it's just part of python like

00:54:42 --> 00:54:47
unquestionably like this is this is just

00:54:43 --> 00:54:48
a thing I know and it's not a new thing

00:54:46 --> 00:54:50
that you're worried about learning it's

00:54:47 --> 00:54:55
just part of part of the deal now with

00:54:49 --> 00:54:57
Guido uh I I don't know Guido

00:54:54 --> 00:54:59
well um yeah have you a pass cross much

00:54:56 --> 00:55:01
yeah I've met him a couple of times but

00:54:58 --> 00:55:03
I don't know Guido well but the the

00:55:00 --> 00:55:06
sense that I got out of that whole

00:55:02 --> 00:55:08
dynamic was that he had put the not just

00:55:05 --> 00:55:11
he decision maker weight on his

00:55:07 --> 00:55:14
houlders but it was so tied to his

00:55:10 --> 00:55:16
personal identity that um he took it

00:55:13 --> 00:55:17
personally and he felt the need and he

00:55:15 --> 00:55:20
kind of put himself in the situation of

00:55:16 --> 00:55:22
being the person instead of building a

00:55:19 --> 00:55:24
base of support around him I mean he

00:55:21 --> 00:55:27
this is probably not quite literally

00:55:23 --> 00:55:30
true but by too much so there's too much

00:55:26 --> 00:55:32
concentrated on him right and

00:55:29 --> 00:55:34
so and that can wear you down well yeah

00:55:31 --> 00:55:36
particularly because people then say

00:55:33 --> 00:55:38
Guido you're a horrible person I hate

00:55:35 --> 00:55:39
this thing blah blah blah blah blah blah

00:55:37 --> 00:55:42
and sure it's like you know maybe

00:55:38 --> 00:55:45
1% of the community that's doing that

00:55:41 --> 00:55:46
but Python's got a big community and 1%

00:55:44 --> 00:55:49
of of millions of people is a lot of

00:55:46 --> 00:55:51
hate mail and that just from human

00:55:48 --> 00:55:53
factor will just wear on you what to to

00:55:50 --> 00:55:55
clarify it looked from just what I saw

00:55:52 --> 00:55:57
in the messaging for the let's not look

00:55:54 --> 00:56:00
at the million python users but at the

00:55:56 --> 00:56:03
python core developers it feels like the

00:55:59 --> 00:56:06
majority the big majority on a vote were

00:56:02 --> 00:56:08
opposed to it okay I'm not that close to

00:56:05 --> 00:56:09
it so I don't knowen so so this okay so

00:56:07 --> 00:56:13
the situation is like

00:56:09 --> 00:56:16
literally uh yeah I mean the majority of

00:56:12 --> 00:56:19
the core developers are against so I and

00:56:16 --> 00:56:20
they weren't they weren't even like

00:56:18 --> 00:56:23
against

00:56:19 --> 00:56:25
it it was uh there was a feel well they

00:56:22 --> 00:56:29
were against it but the they against it

00:56:24 --> 00:56:31
wasn't like this is a bad idea they were

00:56:28 --> 00:56:34
more like we don't see why this is a

00:56:30 --> 00:56:37
good idea and what that results in is

00:56:33 --> 00:56:39
there's a stalling feeling like you you

00:56:36 --> 00:56:42
just slow things down now from my

00:56:39 --> 00:56:45
perspective now you could argue this and

00:56:41 --> 00:56:47
I think it's very it's very interesting

00:56:44 --> 00:56:50
if we look at politics today and the way

00:56:46 --> 00:56:52
Congress works it slowed down everything

00:56:49 --> 00:56:54
it's a dampener yeah it's a dampener but

00:56:51 --> 00:56:57
like that's a dangerous thing too

00:56:53 --> 00:56:59
because if it dampens things like you

00:56:56 --> 00:57:01
know dampening results what are you

00:56:58 --> 00:57:02
talking about like it's a low pass

00:57:00 --> 00:57:04
filter but if you need billions of

00:57:01 --> 00:57:06
dollars injected into the economy or

00:57:03 --> 00:57:10
trillions of dollars then suddenly stuff

00:57:05 --> 00:57:12
happens right and so for sure so you're

00:57:09 --> 00:57:14
talking I'm not defending our political

00:57:11 --> 00:57:18
situation just to be clear but you're

00:57:13 --> 00:57:20
talking about like a a global pandemic I

00:57:17 --> 00:57:22
was hoping we could fix like the

00:57:19 --> 00:57:24
Health Care system and the education

00:57:21 --> 00:57:26
like you know I I'm not I'm not a

00:57:23 --> 00:57:29
politics person I don't I don't I don't

00:57:25 --> 00:57:31
know um when it comes to languages the

00:57:28 --> 00:57:33
community is kind of right in terms of

00:57:30 --> 00:57:34
it's a very high burden to add something

00:57:32 --> 00:57:36
to a language so as soon as you add

00:57:33 --> 00:57:38
something you have a community of people

00:57:35 --> 00:57:40
building on it and you can't remove it

00:57:37 --> 00:57:41
okay and if there's a community of

00:57:39 --> 00:57:44
people that feel really uncomfortable

00:57:41 --> 00:57:46
with it then taking it slow I think is

00:57:43 --> 00:57:48
is an important thing to do and

00:57:45 --> 00:57:50
there's no rush particularly if with

00:57:47 --> 00:57:52
something that's 25 years old and is

00:57:49 --> 00:57:55
very established and you know it's not

00:57:51 --> 00:57:57
like coming coming into its own um what

00:57:54 --> 00:57:59
about features

00:57:56 --> 00:58:01
o I I think that the issue with with

00:57:58 --> 00:58:04
Guido is that maybe this is a case where

00:58:00 --> 00:58:06
he realized it had outgrown him and it

00:58:03 --> 00:58:09
went from being or the language the

00:58:05 --> 00:58:12
language so python I mean Guido is

00:58:08 --> 00:58:14
amazing but but python isn't about Guido

00:58:11 --> 00:58:17
anymore it's about the users and to a

00:58:13 --> 00:58:20
certain extent the users own it and you

00:58:16 --> 00:58:22
know py Guido spent years of his life a

00:58:19 --> 00:58:25
significant fraction of his career on

00:58:21 --> 00:58:26
Python and from his perspective I

00:58:24 --> 00:58:27
imagine he's like well but this is my

00:58:25 --> 00:58:30
thing I should be be able to do the

00:58:26 --> 00:58:31
thing I think is right but you can also

00:58:29 --> 00:58:34
understand the users where they feel

00:58:30 --> 00:58:37
ike you know this is my thing I use

00:58:33 --> 00:58:40
this like and um and I don't know it's

00:58:36 --> 00:58:42
a hard it's a hard thing but what

00:58:39 --> 00:58:43
if we could talk about leadership in

00:58:41 --> 00:58:45
this cuz it's so interesting to me I'm

00:58:42 --> 00:58:46
going to I'm going to make I'm going to

00:58:44 --> 00:58:49
wear hopefully somebody makes it if not

00:58:45 --> 00:58:51
I'll make it a w operator shirt because

00:58:48 --> 00:58:54
I think it represents to me maybe it's

00:58:50 --> 00:58:58
my Russian roots or something uh you

00:58:53 --> 00:59:01
know it's the burden of leadership like

00:58:57 --> 00:59:04
I feel like to push

00:59:00 --> 00:59:06
back I feel like progress can only like

00:59:03 --> 00:59:08
most difficult decisions just like you

00:59:05 --> 00:59:11
said there'll be a lot of divis

00:59:07 --> 00:59:12
iveness over especially in the

00:59:10 --> 00:59:14
passionate

00:59:11 --> 00:59:18
Community it just feels like leaders

00:59:13 --> 00:59:22
need to take those risky decisions that

00:59:17 --> 00:59:24
if you like listen that with some

00:59:21 --> 00:59:27
nonzero probability maybe even a high

00:59:23 --> 00:59:29
probability would be the wrong decision

00:59:26 --> 00:59:31
but they have to use their gut and make

00:59:28 --> 00:59:33
that decision well this this this is

00:59:30 --> 00:59:36
like one of the things where you see uh

00:59:32 --> 00:59:37
amazing Founders the founders understand

00:59:35 --> 00:59:39
exactly what's happened and what how the

00:59:36 --> 00:59:42
company got there and are willing to say

00:59:38 --> 00:59:44
to we have been doing thing X the the

00:59:41 --> 00:59:47
last 20 years but today we're going to

00:59:43 --> 00:59:49
do thing why and they make a major pivot

00:59:46 --> 00:59:50
for the whole Company the company lines

00:59:48 --> 00:59:52
up behind them they move and it's the

00:59:49 --> 00:59:55
right thing but then when the founder

00:59:51 --> 00:59:58
dies the successor doesn't always feel

00:59:54 --> 01:00:00
that that um agency to be able to make

00:59:57 --> 01:00:01
those kinds of decisions yeah even

00:59:59 --> 01:00:03
though they're a CEO they could

01:00:00 --> 01:00:06
theoretically do whatever there's two

01:00:02 --> 01:00:09
reasons for that in my opinion or in

01:00:05 --> 01:00:10
many cases it's always different but um

01:00:08 --> 01:00:12
one of which is they weren't there for

01:00:09 --> 01:00:14
all the decisions that were made and so

01:00:11 --> 01:00:16
they don't know the principles in which

01:00:13 --> 01:00:19
those decisions were made and once the

01:00:15 --> 01:00:21
principles change you're you should be

01:00:18 --> 01:00:24
obligated to change what you're doing

01:00:20 --> 01:00:26
and change direction right and so if you

01:00:23 --> 01:00:29
don't know how you got to where you are

01:00:25 --> 01:00:31
it seems like gospel and you know you're

01:00:28 --> 01:00:32
not going to question it you may not

01:00:30 --> 01:00:34
understand that it really is the right

01:00:31 --> 01:00:35
hing to do so you just may not see it

01:00:33 --> 01:00:38
hat's so brilliant I never thought of

01:00:34 --> 01:00:40
it that way like it's it's so much

01:00:37 --> 01:00:42
igher burden when as a leader you step

01:00:39 --> 01:00:43
into a thing that's already worked for a

01:00:41 --> 01:00:45
long time yeah yeah well and if you

01:00:43 --> 01:00:47
change it and it doesn't work out now

01:00:44 --> 01:00:49
you're the the person who screwed it up

01:00:46 --> 01:00:50
eople always second guess that yeah and

01:00:48 --> 01:00:52
the second thing is that even if you

01:00:49 --> 01:00:54
decide to make a change even if you're

01:00:51 --> 01:00:57
theoretically in charge you're just

01:00:54 --> 01:00:59
a person that thinks they're

01:00:56 --> 01:01:00
in charge meanwhile you have to motivate

01:00:58 --> 01:01:01
the troops you have to explain it to

01:00:59 --> 01:01:03
them in terms of understand you have to

01:01:00 --> 01:01:05
get them to buy into and believe in it

01:01:02 --> 01:01:06
because if they don't then they're not

01:01:04 --> 01:01:08
going to be able to make the turn even

01:01:06 --> 01:01:09
if you tell them you know their bonuses

01:01:07 --> 01:01:11
are going to be curtailed they're just

01:01:08 --> 01:01:13
not going to like buy into it you know

01:01:10 --> 01:01:15
and so there's only so much power you

01:01:12 --> 01:01:16
have as a leader and you have to

01:01:14 --> 01:01:19
understand what that what those

01:01:15 --> 01:01:22
limitations are are you still bdfl

01:01:18 --> 01:01:24
you've been bdfl of some stuff uh you're

01:01:21 --> 01:01:27
very heavy on the

01:01:23 --> 01:01:31
be the benevolent uh benevolent dictated

01:01:26 --> 01:01:33
for Life uh I guess lvm you're still so

01:01:30 --> 01:01:37
I still lead the lvm world uh I mean

01:01:32 --> 01:01:39
what's the role of uh so then on Swift

01:01:36 --> 01:01:41
you said that there's a group of people

01:01:38 --> 01:01:44
yeah so if you contrast python with

01:01:40 --> 01:01:46
Swift right one of the reasons so

01:01:43 --> 01:01:48
everybody on the core team takes the

01:01:45 --> 01:01:50
role really seriously and I think we all

01:01:47 --> 01:01:53
really care about where Swift goes but

01:01:50 --> 01:01:54
you're almost delegating the final

01:01:52 --> 01:01:57
decision- making to the wisdom of the

01:01:53 --> 01:01:59
group and so it doesn't become

01:01:56 --> 01:02:01
personal and also when you're talking

01:01:58 --> 01:02:03
with the community so yeah some people

01:02:00 --> 01:02:06
are very annoyed at certain decisions

01:02:02 --> 01:02:07
get made um there's a certain faith in

01:02:05 --> 01:02:10
the process because it's a very

01:02:07 --> 01:02:12
transparent process and when a decision

01:02:09 --> 01:02:13
gets made a full rationale is provided

01:02:11 --> 01:02:16
things like this these are almost

01:02:12 --> 01:02:18
defense mechanisms to help both guide

01:02:15 --> 01:02:20
future discussions and provide case law

01:02:17 --> 01:02:22
kind like Supreme Court does about this

01:02:19 --> 01:02:23
decision was made for this reason and

01:02:21 --> 01:02:27
here's the rationale and what we want to

01:02:22 --> 01:02:28
see more of or less of um but it's a way

01:02:26 --> 01:02:30
to provide a defense mechanism so that

01:02:27 --> 01:02:32
when somebody's griping about it they're

01:02:29 --> 01:02:34
not saying that person did the wrong

01:02:31 --> 01:02:35
thing they're saying well this this

01:02:33 --> 01:02:38
thing sucks

01:02:34 --> 01:02:40
and and later they move on and they they

01:02:37 --> 01:02:43
get over it yeah the analogy of the

01:02:39 --> 01:02:45
Supreme Court I think is really is

01:02:42 --> 01:02:47
really good but then okay not to get

01:02:44 --> 01:02:49
person on the Swift team but like is

01:02:46 --> 01:02:52
there is there div like it just seems

01:02:48 --> 01:02:54
like it's impossible for their for

01:02:51 --> 01:02:56
division not to emerge well each each of

01:02:53 --> 01:02:58
the humans on the the Swift core team

01:02:55 --> 01:02:59
for example are different and the

01:02:57 --> 01:03:02
membership of the Swift core team

01:02:58 --> 01:03:04
changes slowly over time which is I

01:03:01 --> 01:03:05
think a healthy thing and so each of

01:03:03 --> 01:03:08
these different humans have different

01:03:04 --> 01:03:10
opinions trust me it's not it's not a

01:03:07 --> 01:03:12
sing singular consciousness of by any

01:03:09 --> 01:03:14
stretch of the imagination you've got

01:03:11 --> 01:03:16
hree major organizations including

01:03:13 --> 01:03:19
Apple Google and sci-fi all kind of

01:03:15 --> 01:03:21
working together and um it's a small

01:03:18 --> 01:03:22
group of people but you need High trust

01:03:20 --> 01:03:23
you need again it comes back to the

01:03:21 --> 01:03:27
principles of what you're trying to

01:03:22 --> 01:03:29
achieve and understanding you know what

01:03:26 --> 01:03:31
you're optimizing for and I think

01:03:28 --> 01:03:33
that starting with strong principles and

01:03:30 --> 01:03:36
working towards decisions is always a

01:03:32 --> 01:03:38
good way to both make wise decisions in

01:03:35 --> 01:03:39
general but then be able to communicate

01:03:37 --> 01:03:42
them to people so that they can buy into

01:03:38 --> 01:03:45
them and that that is hard and so you

01:03:41 --> 01:03:48
mentioned lvm lvm is uh going to be 20

01:03:44 --> 01:03:51
years old uh this December so it's it's

01:03:47 --> 01:03:54
howing its own age you have like like a

01:03:50 --> 01:03:55
like a dragon cake plant or you

01:03:53 --> 01:03:57
have a no we should definitely do that

01:03:54 --> 01:04:00
yeah if we can have a

01:03:56 --> 01:04:02
uh pandemic cake pandemic cake everybody

01:03:59 --> 01:04:04
gets a slice of cake and it gets you

01:04:01 --> 01:04:08
know sent through email

01:04:03 --> 01:04:10
um but the uh uh but lvm has had tons of

01:04:07 --> 01:04:12
its own challenges over time too right

01:04:09 --> 01:04:14
and one of the challenges that um the

01:04:11 --> 01:04:17
lvm community has in my opinion is that

01:04:13 --> 01:04:19
it has a whole bunch of people that um

01:04:16 --> 01:04:21
have been working at lvm for 10 years

01:04:18 --> 01:04:23
right because this happen some somehow

01:04:21 --> 01:04:26
and lvm has always been one way but it

01:04:22 --> 01:04:27
needs to be a different way right and

01:04:25 --> 01:04:30
they've worked on it for like 10 years

01:04:26 --> 01:04:32
is a long time to work on something and

01:04:29 --> 01:04:33
you know you you suddenly can't see the

01:04:31 --> 01:04:35
faults in the thing that you're working

01:04:33 --> 01:04:37
on and lvm has lots of problems and we

01:04:34 --> 01:04:38
need to address them and we need to make

01:04:36 --> 01:04:40
it better and if we don't make it better

01:04:37 --> 01:04:42
then somebody else will come up with a

01:04:39 --> 01:04:45
better idea right and so it's just kind

01:04:41 --> 01:04:47
of of that age where the community is

01:04:44 --> 01:04:50
like in danger of getting too calcified

01:04:46 --> 01:04:52
and um and so I'm happy to see new

01:04:49 --> 01:04:54
projects joining and new things mixing

01:04:51 --> 01:04:55
it up you know Fortran is now a new a

01:04:53 --> 01:04:57
new thing in the Elum Community which is

01:04:54 --> 01:04:59
hilarious and good

01:04:56 --> 01:05:01
I've been trying to find uh on this

01:04:58 --> 01:05:05
little tangent find people who program

01:05:00 --> 01:05:08
in Cobalt or Fortran Fortran especially

01:05:04 --> 01:05:10
to talk to they're hard to find yeah

01:05:07 --> 01:05:12
look to the uh scientific Community

01:05:09 --> 01:05:14
they still use forun quite a bit

01:05:11 --> 01:05:17
interesting thing you kind of mentioned

01:05:13 --> 01:05:19
with lvm or just in general that if

01:05:16 --> 01:05:22
something evolve you're not able to see

01:05:18 --> 01:05:24
the faults so do you uh fall in love

01:05:21 --> 01:05:26
with the thing over time or do you start

01:05:23 --> 01:05:27
hating everything about the thing over

01:05:25 --> 01:05:29
time

01:05:26 --> 01:05:33
well so so my my my personal Folly is

01:05:28 --> 01:05:35
that um I see maybe not all but many of

01:05:32 --> 01:05:37
the faults and they gr on me and I don't

01:05:34 --> 01:05:39
have time to go fix them yeah and they

01:05:36 --> 01:05:40
get magnified over time well and they

01:05:38 --> 01:05:42
may not get magnified but they never get

01:05:39 --> 01:05:44
fixed it's like sand underneath you you

01:05:41 --> 01:05:45
know it's just like raiding against you

01:05:43 --> 01:05:47
and it's like s underneath your

01:05:44 --> 01:05:48
fingernails or something it's just like

01:05:46 --> 01:05:52
you know it's there you can't get rid of

01:05:47 --> 01:05:55
it um and so the the problem is that if

01:05:51 --> 01:05:56
other people don't see it right nobody

01:05:54 --> 01:05:58
ever get like I can't go I don't have

01:05:56 --> 01:06:01
time to go write the code and fix it

01:05:57 --> 01:06:03
anymore but then uh people are resistant

01:06:00 --> 01:06:04
o change and so you say hey we should

01:06:02 --> 01:06:07
go fix this thing they're like oh yeah

01:06:03 --> 01:06:10
that sounds risky well is it the right

01:06:06 --> 01:06:11
hing or not are the challenges uh the

01:06:09 --> 01:06:14
group dynamics or is it also just

01:06:11 --> 01:06:17
echnical I mean some of these features

01:06:13 --> 01:06:20
like yeah I think uh as an observer is

01:06:16 --> 01:06:23
almost like a fan in in the uh you know

01:06:19 --> 01:06:24
as a spectator of the whole thing it I

01:06:22 --> 01:06:26
don't often think about you know some

01:06:24 --> 01:06:29
things might actually be technically

01:06:25 --> 01:06:30
difficult to implement an example of

01:06:28 --> 01:06:33
this is we we built this new compiler

01:06:29 --> 01:06:36
framework called ml yes ml is this a

01:06:32 --> 01:06:38
whole new framework it's not many people

01:06:35 --> 01:06:41
think it's about machine learning the ml

01:06:37 --> 01:06:42
stands for multi-level because compiler

01:06:40 --> 01:06:45
people can't name things very well I

01:06:41 --> 01:06:48
guess can we can we dig into what ml IR

01:06:44 --> 01:06:50
is yeah so when you look at compilers

01:06:47 --> 01:06:55
have historically been

01:06:49 --> 01:06:57
solutions for a given space so lvm is a

01:06:54 --> 01:07:00
it's really good for dealing CPUs let's

01:06:56 --> 01:07:03
just say at a high level you look at um

01:06:59 --> 01:07:05
Java Java has a jvm the jvm is very good

01:07:02 --> 01:07:07
for garbage collected languages that

01:07:04 --> 01:07:09
need Dynamic compilation and it's very

01:07:06 --> 01:07:10
optimized for specific space and so

01:07:08 --> 01:07:12
hotspot is one of the compilers that

01:07:10 --> 01:07:13
gets used in that space and that

01:07:11 --> 01:07:16
compiler is really good at that kind of

01:07:12 --> 01:07:18
stuff um usually when you build these

01:07:15 --> 01:07:20
domain specific compilers you end up

01:07:17 --> 01:07:21
building whole thing from scratch for

01:07:19 --> 01:07:25
each

01:07:20 --> 01:07:27
domain uh what's a domain so what what

01:07:24 --> 01:07:29
we what's this what's the scope of a

01:07:26 --> 01:07:30
domain Al so here I would say like if

01:07:28 --> 01:07:32
you look at Swift there's several

01:07:29 --> 01:07:36
different parts to the Swift compiler um

01:07:31 --> 01:07:38
one of which is covered by um the LM

01:07:35 --> 01:07:41
part of it there's also a highle piece

01:07:37 --> 01:07:43
that's specific to Swift and there's a

01:07:40 --> 01:07:45
huge amount of redundancy between those

01:07:42 --> 01:07:48
two different infrastructures and a lot

01:07:44 --> 01:07:50
of re reimplemented stuff that is

01:07:47 --> 01:07:52
imilar but different what is llvm

01:07:49 --> 01:07:55
Define lvm is effectively an

01:07:52 --> 01:07:56
infrastructure so you can mix and match

01:07:54 --> 01:07:57
it in different ways it's built

01:07:55 --> 01:08:00
libraries you can use it for different

01:07:56 --> 01:08:02
hings but it's really good at CPUs and

01:07:59 --> 01:08:04
gpus CPUs and like the tip of the

01:08:01 --> 01:08:08
iceberg on gpus it's not really great at

01:08:03 --> 01:08:11
gpus okay um but it turns out languages

01:08:07 --> 01:08:13
that that then use it to talk to CPUs it

01:08:10 --> 01:08:15
um and so it turns out there's a lot of

01:08:12 --> 01:08:16
Hardware out there that is custom

01:08:14 --> 01:08:18
accelerators so machine learning for

01:08:15 --> 01:08:20
example there are a lot of uh Matrix

01:08:17 --> 01:08:22
multiply accelerators and things like

01:08:19 --> 01:08:26
this there there's a whole world of

01:08:21 --> 01:08:28
Hardware synthesis so we're using ml to

01:08:25 --> 01:08:30
build circuits okay and so you're

01:08:27 --> 01:08:33
compiling for a domain of

01:08:29 --> 01:08:34
transistors and so what ml does is it

01:08:32 --> 01:08:36
provides a tremendous amount of compiler

01:08:33 --> 01:08:38
infrastructure that allows you to build

01:08:35 --> 01:08:41
these domain specific compilers in a

01:08:37 --> 01:08:44
much faster way and have the result be

01:08:41 --> 01:08:46
good if we're if we're thinking about

01:08:43 --> 01:08:50
he future now we're talking about like

01:08:45 --> 01:08:52
as6 like so anything yeah yeah so if we

01:08:49 --> 01:08:54
project into the future it's very

01:08:51 --> 01:08:57
possible that the number of these kinds

01:08:53 --> 01:09:00
of as6 very

01:08:56 --> 01:09:05
specific um infrastructure thing

01:09:00 --> 01:09:08
architecture things uh like multiplies

01:09:04 --> 01:09:11
exponentially I hope so yeah so that's

01:09:07 --> 01:09:13
ml so what ml what ml does is it allows

01:09:10 --> 01:09:15
you to build these compilers very

01:09:12 --> 01:09:17
efficiently right now one of the things

01:09:14 --> 01:09:21
that coming back to the lvm thing and

01:09:16 --> 01:09:23
then we'll go to Hardware is um lvm is

01:09:20 --> 01:09:27
a specific compiler for specific

01:09:22 --> 01:09:28
domain mlr is now this very general very

01:09:26 --> 01:09:31
flexible thing that can solve lots of

01:09:27 --> 01:09:34
different kinds of problems so lvm is a

01:09:30 --> 01:09:36
subset of what ml does so m is I mean

01:09:33 --> 01:09:39
it's an ambitious project then yeah it's

01:09:35 --> 01:09:41
a very ambitious project yeah and so to

01:09:38 --> 01:09:43
make it even more confusing ml has

01:09:40 --> 01:09:46
joined the lvm umbrella project so it's

01:09:42 --> 01:09:48
part of the lvm family right um but

01:09:45 --> 01:09:50
where this comes full circle is now

01:09:47 --> 01:09:52
folks that work on the lvm part the

01:09:49 --> 01:09:54
classic part that's 20 years old um

01:09:51 --> 01:09:56
aren't aware of all the cool new things

01:09:53 --> 01:09:59
that have been done in the new the new

01:09:55 --> 01:10:01
thing that you know mlr was built by me

01:09:58 --> 01:10:03
and many other people that knew a lot

01:10:00 --> 01:10:05
about lvm and so we fixed a lot of the

01:10:02 --> 01:10:07
mistakes that lived in

01:10:04 --> 01:10:08
LV so now you have this community

01:10:06 --> 01:10:10
Dynamic where it's like well there's

01:10:07 --> 01:10:12
this new thing but it's not familiar

01:10:09 --> 01:10:14
nobody knows it it feels like it's new

01:10:11 --> 01:10:15
and so let's not trust it and so it's

01:10:13 --> 01:10:17
just really interesting to see the

01:10:14 --> 01:10:19
cultural social Dynamic that comes out

01:10:16 --> 01:10:21
of that and and you know I think it's

01:10:18 --> 01:10:23
uper healthy because we're seeing the

01:10:20 --> 01:10:25
ideas percolate and we're seeing the

01:10:22 --> 01:10:26
technology diffusion happen as people

01:10:24 --> 01:10:28
get more comfortable with it they start

01:10:25 --> 01:10:30
o understand things in their own terms

01:10:27 --> 01:10:33
and this just gets to the it takes a

01:10:29 --> 01:10:35
while for ideas to propagate even though

01:10:32 --> 01:10:37
um they may be very different than what

01:10:34 --> 01:10:38
people are used to so maybe let's talk

01:10:36 --> 01:10:43
about that a little bit the world of

01:10:37 --> 01:10:45
Asic and well actually you're uh you're

01:10:42 --> 01:10:48
you have a new role at

01:10:44 --> 01:10:52
sci-fi what's that place about what is

01:10:47 --> 01:10:54
the vision sure uh for their vision for

01:10:51 --> 01:10:55
I would say the future of computing yeah

01:10:53 --> 01:10:56
so I lead the engineering and product

01:10:54 --> 01:11:00
eams at SciFi

01:10:55 --> 01:11:04
sci5 is a company who's was founded with

01:11:00 --> 01:11:05
is architecture called risk 5 risk 5

01:11:03 --> 01:11:06
is a new instruction set instruction

01:11:04 --> 01:11:09
sets are the things inside of your

01:11:05 --> 01:11:12
computer that tell how to run things um

01:11:08 --> 01:11:13
x86 from Intel and arm from the arm

01:11:11 --> 01:11:15
company and things like this or other

01:11:12 --> 01:11:16
instruction sets I've talked to sorry

01:11:14 --> 01:11:18
interrupt I've talked to Dave Patterson

01:11:15 --> 01:11:21
who's super excited about risk 5 Dave

01:11:18 --> 01:11:23
is awesome he's brilliant yeah yeah

01:11:20 --> 01:11:26
the uh risk five is distinguished by not

01:11:22 --> 01:11:29
being proprietary MH and so

01:11:25 --> 01:11:32
xa6 can only be made by Intel and AMD

01:11:28 --> 01:11:33
arm can only be made by arm they sell

01:11:31 --> 01:11:35
icenses to build arm ships to other

01:11:32 --> 01:11:37
companies things like this myips is

01:11:34 --> 01:11:39
another instruction set that is owned by

01:11:36 --> 01:11:42
the myips company now wave and it gets

01:11:38 --> 01:11:44
licensed out things like that um and so

01:11:41 --> 01:11:47
RIS 5 is an open standard that anybody

01:11:43 --> 01:11:50
can build chips for and so SciFi was

01:11:46 --> 01:11:52
founded by three of the founders of RIS

01:11:49 --> 01:11:55
5 that designed and built it in Berkeley

01:11:51 --> 01:11:58
working with Dave um and so that was the

01:11:54 --> 01:11:59
The Genesis of the company scii today

01:11:57 --> 01:12:01
has some of the world's best r five

01:11:58 --> 01:12:03
cores and we're selling them and that's

01:12:00 --> 01:12:05
really great they're going into tons of

01:12:02 --> 01:12:06
products it's very exciting um so

01:12:04 --> 01:12:08
they're taking this uh thing that's open

01:12:05 --> 01:12:11
source and just being trying to be or

01:12:08 --> 01:12:12
are the best in the world at building

01:12:10 --> 01:12:14
these things yeah so here it's the

01:12:11 --> 01:12:17
specifications open source it's like

01:12:13 --> 01:12:19
saying tcpip is an open standard or C Is

01:12:16 --> 01:12:21
An Open standard but then you have to

01:12:18 --> 01:12:24
build an implementation of the standard

01:12:20 --> 01:12:26
and so sci5 on the one hand pushes

01:12:23 --> 01:12:28
forward and defined and pushes forward

01:12:25 --> 01:12:30
the standard on the other hand we have

01:12:27 --> 01:12:31
implementations that are best in class

01:12:29 --> 01:12:34
for different points in the space

01:12:30 --> 01:12:35
depending on if you want a really tiny

01:12:33 --> 01:12:38
CPU or if you want a really big beefy

01:12:34 --> 01:12:40
one that that uh is faster but it uses

01:12:37 --> 01:12:42
more area and things like this what

01:12:39 --> 01:12:44
about the actual manufacturer chip so

01:12:41 --> 01:12:46
like what where does that all fit I'm

01:12:43 --> 01:12:48
going to ask a bunch of dumb questions

01:12:45 --> 01:12:52
that's okay this is how we learn right

01:12:47 --> 01:12:54
uh and so uh what the the way this works

01:12:51 --> 01:12:56
is that there's generally a separation

01:12:53 --> 01:12:57
of the people who design the circuits

01:12:55 --> 01:13:01
than the people who manufacture them and

01:12:57 --> 01:13:03
so that you'll hear about Fabs like tsmc

01:13:00 --> 01:13:05
and Samsung and things like this that

01:13:02 --> 01:13:07
actually produce the chips but they take

01:13:04 --> 01:13:11
a design coming in and that design

01:13:06 --> 01:13:16
specifies how um how the you know you

01:13:10 --> 01:13:18
turn uh code for the chip into uh little

01:13:15 --> 01:13:21
rectangles that then use Photo

01:13:17 --> 01:13:23
lithography to make uh mask sets and

01:13:20 --> 01:13:26
then burn transistors onto a chip or

01:13:22 --> 01:13:28
onto a onto silicon rather well so and

01:13:25 --> 01:13:30
we're talking about Mass manufacturing

01:13:27 --> 01:13:31
so yeah they're talking about making

01:13:29 --> 01:13:33
hundreds of millions of parts and things

01:13:30 --> 01:13:34
like that yeah and so the the Fab

01:13:32 --> 01:13:36
handles the volume production things

01:13:33 --> 01:13:39
like that but um when you look at this

01:13:35 --> 01:13:42
problem um the interesting thing about

01:13:38 --> 01:13:44
he space when you look at it is that um

01:13:41 --> 01:13:46
these the steps that you go from

01:13:43 --> 01:13:47
designing a chip and writing the quote

01:13:45 --> 01:13:50
unquote code for it and things like

01:13:46 --> 01:13:53
verog and languages like that down to

01:13:49 --> 01:13:56
what you hand off to the Fab is a really

01:13:52 --> 01:13:58
well studied really old problem mhm

01:13:55 --> 01:14:00
um tons of people have worked on it lots

01:13:57 --> 01:14:02
of smart people have built systems and

01:13:59 --> 01:14:05
tools um these tools then have generally

01:14:01 --> 01:14:06
gone through Acquisitions and so they've

01:14:04 --> 01:14:07
nded up at three different major

01:14:05 --> 01:14:10
companies that build and sell these

01:14:07 --> 01:14:12
tools they're called Eda tools like for

01:14:09 --> 01:14:13
electronic design automation um the

01:14:11 --> 01:14:18
problem with this is you have huge

01:14:12 --> 01:14:20
amounts of fragmentation you have loose

01:14:17 --> 01:14:21
standards um and the tools don't really

01:14:19 --> 01:14:24
work together so you have tons of duct

01:14:20 --> 01:14:26
ape and you have tons of uh lost

01:14:23 --> 01:14:29
productivity now these are uh these are

01:14:25 --> 01:14:33
tools for Designing so the risk five is

01:14:28 --> 01:14:35
a instruction like what is risk five

01:14:32 --> 01:14:37
like how deep does it go how how how

01:14:34 --> 01:14:38
much does it touch the hardware how much

01:14:36 --> 01:14:42
does it Define how much of the hardware

01:14:37 --> 01:14:44
is yeah so RIS RIS five is all about um

01:14:41 --> 01:14:47
given a CPU so the the the processor and

01:14:43 --> 01:14:49
your computer how does the the compiler

01:14:46 --> 01:14:50
like Swift compiler the C compiler

01:14:48 --> 01:14:53
things like this how does it make it

01:14:49 --> 01:14:55
work so it's what is the assembly code

01:14:52 --> 01:14:58
and so you write risk five assembly

01:14:54 --> 01:15:00
instead of xa6 assembly for example but

01:14:57 --> 01:15:01
it's a set of instructions as opposed to

01:14:59 --> 01:15:04
set of instructions yeah why why do you

01:15:00 --> 01:15:05
say it tells you how the compiler works

01:15:03 --> 01:15:09
the sorry it's what the compiler talks

01:15:04 --> 01:15:11
to okay yeah and then uh the tooling you

01:15:08 --> 01:15:12
mentioned the disperate tools are for

01:15:10 --> 01:15:16
what for for when you're building a

01:15:11 --> 01:15:18
specific chip so RIS five in Hardware in

01:15:15 --> 01:15:21
Hardware yeah so so RIS five you can buy

01:15:17 --> 01:15:23
rist 5 Core from scif and say Hey I want

01:15:20 --> 01:15:24
o have a certain number of run a

01:15:22 --> 01:15:27
certain number of gigahertz I want it to

01:15:23 --> 01:15:29
be this big I want to be have these

01:15:26 --> 01:15:31
features I want to have um like I want

01:15:28 --> 01:15:33
floating point or not for

01:15:30 --> 01:15:36
example um and then what you get is you

01:15:33 --> 01:15:38
get a description of a CPU with those

01:15:35 --> 01:15:40
characteristics now if you want to make

01:15:37 --> 01:15:42
a chip you want to build like an iPhone

01:15:39 --> 01:15:44
chip or something like that right you

01:15:41 --> 01:15:46
have to take both the CPU but then you

01:15:43 --> 01:15:50
have to talk to memory you have to have

01:15:45 --> 01:15:51
timers iOS a GPU other components and so

01:15:49 --> 01:15:54
you need to pull all those things

01:15:50 --> 01:15:56
together into what's called an Asic an

01:15:53 --> 01:15:59
application specific grade circuit so a

01:15:55 --> 01:16:01
custom chip and then you take that

01:15:58 --> 01:16:03
design and then you have to transform it

01:16:00 --> 01:16:07
into something that the Fabs like tsmc

01:16:02 --> 01:16:09
for example know how to turn take to

01:16:06 --> 01:16:11
production got it so but yeah okay and

01:16:08 --> 01:16:16
so that process I

01:16:10 --> 01:16:18
will I can't help but see it is is a big

01:16:15 --> 01:16:20
compiler okay it's a whole bunch of

01:16:17 --> 01:16:23
compilers written without thinking about

01:16:19 --> 01:16:26
it through that lens isn't isn't the

01:16:22 --> 01:16:28
universe a compiler in that like comp

01:16:25 --> 01:16:30
ilers do two things they represent

01:16:27 --> 01:16:31
hings and transform them yeah and so

01:16:29 --> 01:16:33
there's a lot of things that end up

01:16:30 --> 01:16:35
being compilers but this is this is a

01:16:32 --> 01:16:37
space where we're talking about design

01:16:34 --> 01:16:39
and usability and the way you think

01:16:36 --> 01:16:42
about things the way things composed

01:16:38 --> 01:16:45
correctly it matters a lot and so sci-fi

01:16:41 --> 01:16:46
s investing a lot into that space and

01:16:44 --> 01:16:48
we think that there's a lot lot of

01:16:45 --> 01:16:50
benefit that can be made by allowing

01:16:47 --> 01:16:53
people to design chips faster get them

01:16:49 --> 01:16:55
to Market quicker and um scale out

01:16:52 --> 01:16:58
because um you know it the alleged more

01:16:54 --> 01:17:01
nd of Mor's law uh you've got this

01:16:57 --> 01:17:02
problem of uh you're not getting free

01:17:00 --> 01:17:06
performance just by waiting another year

01:17:01 --> 01:17:07
for a faster CPU and so um you have to

01:17:05 --> 01:17:09
find performance in other ways and one

01:17:06 --> 01:17:11
of the ways to do that is with custom

01:17:08 --> 01:17:14
accelerators and other things and

01:17:10 --> 01:17:15
hardware and and so well we'll talk a

01:17:13 --> 01:17:19
little

01:17:14 --> 01:17:23
about uh a little more about as6 but um

01:17:18 --> 01:17:26
do you see that a lot of people a lot of

01:17:22 --> 01:17:28
companies will try to have a like

01:17:25 --> 01:17:30
different sets of requirements that this

01:17:27 --> 01:17:32
whole process to go for so like like

01:17:29 --> 01:17:35
almost different car companies might use

01:17:31 --> 01:17:37
different uh and like different uh PC

01:17:34 --> 01:17:38
manufacturers like so is this like is

01:17:36 --> 01:17:42
risk

01:17:37 --> 01:17:44
5 um in this whole process is it

01:17:41 --> 01:17:47
potentially the future of all Computing

01:17:43 --> 01:17:49
devices yeah I think that so if you look

01:17:46 --> 01:17:52
at risk 5 and step back from the Silicon

01:17:48 --> 01:17:54
side of things RIS 5 is an open standard

01:17:51 --> 01:17:56
and one of the things that has happened

01:17:53 --> 01:17:59
over the course of decades if you look

01:17:55 --> 01:18:01
over the long Arc of computing somehow

01:17:58 --> 01:18:03
became decades old yeah is that you have

01:18:00 --> 01:18:05
uh companies that come and go and you

01:18:02 --> 01:18:08
have instruction sets that come and go

01:18:04 --> 01:18:12
like one example of this out of many is

01:18:07 --> 01:18:14
uh uh sun with spark yeah Sun one away

01:18:11 --> 01:18:17
spark still lives on it Fujitsu but we

01:18:13 --> 01:18:20
have uh HP had this instruction set

01:18:16 --> 01:18:22
called PA risk so P risk was its big

01:18:19 --> 01:18:26
server business and had tons of

01:18:21 --> 01:18:29
customers they decided to move to this

01:18:25 --> 01:18:31
called itanium from Intel yeah this

01:18:28 --> 01:18:34
didn't work out so well yeah right and

01:18:30 --> 01:18:36
so you have this issue of you're making

01:18:33 --> 01:18:38
many billion doll Investments on

01:18:35 --> 01:18:40
instruction sets that are owned by a

01:18:37 --> 01:18:42
company and even companies as big as

01:18:39 --> 01:18:45
Intel don't always execute as well as

01:18:41 --> 01:18:47
they could they have their own issues um

01:18:44 --> 01:18:48
HP for example decided that it wasn't in

01:18:46 --> 01:18:49
their best interest to continue

01:18:47 --> 01:18:51
investing in the space because it was

01:18:48 --> 01:18:53
very expensive and so they make

01:18:50 --> 01:18:55
technology decisions or they make their

01:18:53 --> 01:18:59
own business decisions and this means

01:18:54 --> 01:19:00
that a customer what do you do you've

01:18:58 --> 01:19:02
sunk all this time all this engineering

01:18:59 --> 01:19:03
all the software work all these you've

01:19:01 --> 01:19:04
built other products around them and now

01:19:02 --> 01:19:07
you're

01:19:03 --> 01:19:08
stuck right what risk 5 does is it

01:19:06 --> 01:19:10
provides you more optionality in the

01:19:07 --> 01:19:13
space because if you buy uh an

01:19:10 --> 01:19:15
implementation of RIS five from SciFi

01:19:12 --> 01:19:18
and you should they're the best ones

01:19:14 --> 01:19:21
yeah um uh but if something bad happens

01:19:17 --> 01:19:22
to SciFi in 20 years right well great

01:19:20 --> 01:19:24
you can turn around and buy r five core

01:19:21 --> 01:19:26
from somebody else and there's an

01:19:24 --> 01:19:28
ecosystem of people people that are all

01:19:25 --> 01:19:30
making different risk five cores with

01:19:27 --> 01:19:31
different trade-offs which means that if

01:19:29 --> 01:19:33
you have more than one requirement if

01:19:30 --> 01:19:34
you have a family of products you can

01:19:32 --> 01:19:37
probably find something in the rist five

01:19:33 --> 01:19:40
space that fits your needs whereas with

01:19:36 --> 01:19:42
if you're talking about xa6 for example

01:19:39 --> 01:19:44
it's Intel's only going to bother to

01:19:41 --> 01:19:48
make certain classes of

01:19:43 --> 01:19:51
devices right I see so uh maybe a weird

01:19:47 --> 01:19:55
question but like if

01:19:50 --> 01:19:57
SciFi is uh like infinitely successful

01:19:54 --> 01:20:00
in the next 20 30 years what does the

01:19:56 --> 01:20:04
world look like so like how does the

01:19:59 --> 01:20:06
world of computing change so too much

01:20:03 --> 01:20:08
diversity in Hardware instruction sets I

01:20:05 --> 01:20:10
think is bad like we have a lot of

01:20:07 --> 01:20:12
people that are using um lots of

01:20:10 --> 01:20:14
different instruction sets particularly

01:20:11 --> 01:20:15
in the embedded the like very tiny

01:20:13 --> 01:20:20
microcontroller space the thing in your

01:20:14 --> 01:20:22
toaster um that uh that are just weird

01:20:19 --> 01:20:24
and different for historical reasons and

01:20:21 --> 01:20:26
so the compilers and the tool chains and

01:20:23 --> 01:20:28
the languages on top of them

01:20:25 --> 01:20:30
uh aren't there right and so the

01:20:27 --> 01:20:33
Developers for that software have to use

01:20:29 --> 01:20:35
really weird tools because the ecosystem

01:20:32 --> 01:20:36
that supports is not big enough so I

01:20:34 --> 01:20:38
expect that will change right people

01:20:35 --> 01:20:40
will have better tools and better

01:20:37 --> 01:20:41
languages better features everywhere

01:20:39 --> 01:20:45
that then can service many different

01:20:40 --> 01:20:48
points in the space um and I think RIS 5

01:20:44 --> 01:20:50
will progressively um eat more of the

01:20:47 --> 01:20:53
cosystem because it can scale up it can

01:20:49 --> 01:20:55
scale down sideways left right it's very

01:20:52 --> 01:20:57
flexible and very well considered welld

01:20:54 --> 01:20:59
esigned and instruction set um I think

01:20:56 --> 01:21:02
when you look at sci-fi tackling silicon

01:20:58 --> 01:21:05
and how people build chips which is a

01:21:01 --> 01:21:07
very different space um that's where you

01:21:04 --> 01:21:09
say I think we'll see a lot more custom

01:21:06 --> 01:21:12
chips and that means that you get much

01:21:08 --> 01:21:16
more battery life you get better better

01:21:11 --> 01:21:18
tuned solutions for your iot

01:21:15 --> 01:21:20
hingy you get you get people that move

01:21:17 --> 01:21:22
faster you get the ability to have

01:21:19 --> 01:21:25
faster time to market for example so how

01:21:21 --> 01:21:29
many custom so first of all on iot of

01:21:24 --> 01:21:32
things do you see the number of smart

01:21:28 --> 01:21:33
oasters increasing exponentially

01:21:31 --> 01:21:37
so

01:21:32 --> 01:21:39
uh and and if you do like how much

01:21:36 --> 01:21:42
customization per toaster is there do

01:21:39 --> 01:21:45
all toasters in the world run the same

01:21:41 --> 01:21:46
uh silicon like the same design or is it

01:21:44 --> 01:21:48
different companies have different

01:21:45 --> 01:21:51
design like how how much customization

01:21:47 --> 01:21:52
is possible here well a lot of it comes

01:21:50 --> 01:21:54
down to

01:21:51 --> 01:21:57
cost right and so the way that chips

01:21:53 --> 01:21:59
work is you end up paying by the one one

01:21:56 --> 01:22:02
of the factors is the the size of the

01:21:58 --> 01:22:04
Chip And so what ends up happening just

01:22:01 --> 01:22:06
from an economic perspective is there's

01:22:03 --> 01:22:10
only so many chips that get made in any

01:22:05 --> 01:22:11
ear of a given design and so often what

01:22:09 --> 01:22:12
customers end up having to do is they

01:22:10 --> 01:22:15
end up having to pick up a chip that

01:22:11 --> 01:22:17
exists that was built for somebody else

01:22:14 --> 01:22:18
so they can then ship their product and

01:22:16 --> 01:22:20
the reason for that is they don't have

01:22:17 --> 01:22:23
the volume of the iPhone they can't

01:22:19 --> 01:22:24
afford to build a custom chip however

01:22:22 --> 01:22:27
what that means is they're now buying an

01:22:23 --> 01:22:28
off-the-shelf chip that isn't really

01:22:26 --> 01:22:30
good that isn't a perfect fit for their

01:22:27 --> 01:22:32
needs and so they're paying a lot of

01:22:29 --> 01:22:33
money for it because they're buying

01:22:31 --> 01:22:36
silicon that they're not

01:22:32 --> 01:22:38
using well if you now reduce the cost of

01:22:35 --> 01:22:40
Designing the chip now you get a lot

01:22:37 --> 01:22:43
more chips and the more you reduce it

01:22:39 --> 01:22:45
he the easier it is to design chips um

01:22:42 --> 01:22:47
The More The World Keeps evolving and we

01:22:44 --> 01:22:49
get more AI accelerators we get more

01:22:46 --> 01:22:52
other things we get more uh standards to

01:22:48 --> 01:22:54
talk to we get 6G right you get you get

01:22:51 --> 01:22:55
changes in the world that you

01:22:53 --> 01:22:56
want to be able to talk to these

01:22:54 --> 01:22:58
different things there's more diversity

01:22:55 --> 01:23:01
in the cross product of features that

01:22:57 --> 01:23:03
people want and um that drives

01:23:00 --> 01:23:05
differentiated chips in different in

01:23:02 --> 01:23:07
another Direction and so nobody really

01:23:04 --> 01:23:08
knows what the future looks like but um

01:23:06 --> 01:23:11
but I think that there's a lot of

01:23:08 --> 01:23:13
silicon in the future speaking of the

01:23:10 --> 01:23:17
future uh you said Mo's law allegedly is

01:23:12 --> 01:23:21
dead so do you think do you agree with

01:23:16 --> 01:23:23
uh uh Dave Patterson and and many folks

01:23:20 --> 01:23:26
that Mo's law is dead or do you agree

01:23:23 --> 01:23:28
with Jim Keller who says

01:23:25 --> 01:23:31
uh who's uh standing at the Helm of the

01:23:28 --> 01:23:34
pirate ship saying it's uh still alive

01:23:30 --> 01:23:37
it's still alive yeah also I agree with

01:23:33 --> 01:23:39
what they're saying and different people

01:23:36 --> 01:23:41
are interpreting the anor's law in

01:23:38 --> 01:23:44
different ways yeah so Jim would say you

01:23:40 --> 01:23:46
know there's another thousand X left in

01:23:43 --> 01:23:49
physics and we can we can continue to

01:23:45 --> 01:23:51
squeeze the stone and make it faster and

01:23:48 --> 01:23:55
smaller and smaller geometries and all

01:23:50 --> 01:23:56
that kind of stuff uh he's right so Jim

01:23:54 --> 01:23:59
is is absolutely right that there's

01:23:55 --> 01:24:02
a ton of ton of progress left and we're

01:23:58 --> 01:24:04
not at the limit of physics yet um uh

01:24:01 --> 01:24:07
that's not really what mors law is

01:24:03 --> 01:24:10
though if you look at what mors law is

01:24:06 --> 01:24:14
that it's a very simple uh evaluation

01:24:09 --> 01:24:16
of okay well you look at the cost per um

01:24:13 --> 01:24:18
I think it was cost per area and the

01:24:15 --> 01:24:20
most economic point in that space and if

01:24:17 --> 01:24:23
you go look at the the the now quite old

01:24:19 --> 01:24:25
paper that describes this um mors law

01:24:22 --> 01:24:27
has a specific economic

01:24:24 --> 01:24:28
aspect to it and I think this is

01:24:26 --> 01:24:30
omething that Dave and others often

01:24:27 --> 01:24:34
point out and so on a technicality

01:24:29 --> 01:24:35
that's right um I look at it from so I

01:24:33 --> 01:24:37
can acknowledge both of those viewpoints

01:24:35 --> 01:24:39
they're both right they're both right

01:24:36 --> 01:24:41
I'll give you a third wrong yeah

01:24:38 --> 01:24:43
Viewpoint that may be right in its own

01:24:40 --> 01:24:46
way which is um single threaded

01:24:43 --> 01:24:48
performance doesn't improve like it used

01:24:45 --> 01:24:51
to and it used to be back when you got a

01:24:47 --> 01:24:53
uh you know a pennium 66 or something

01:24:50 --> 01:24:57
and the year before you had a pennium

01:24:52 --> 01:24:59
33 and now it's twice as fast MH right

01:24:56 --> 01:25:02
well it was twice as fast at doing

01:24:58 --> 01:25:04
exactly the same thing okay like

01:25:01 --> 01:25:06
literally the same program ran twice as

01:25:03 --> 01:25:08
fast you just wrote a check okay and

01:25:05 --> 01:25:10
waited a year year and a half well so

01:25:07 --> 01:25:13
that's what a lot of people think about

01:25:09 --> 01:25:15
Moors law and I think that is dead and

01:25:12 --> 01:25:17
so what we're seeing instead is we're

01:25:14 --> 01:25:18
pushing we're pushing people to write

01:25:16 --> 01:25:20
software in different ways and so we're

01:25:17 --> 01:25:23
pushing people to write Cuda so they can

01:25:19 --> 01:25:25
get GPU compute and the the thousands of

01:25:22 --> 01:25:27
cores on GPU we're talking about C

01:25:24 --> 01:25:29
programmers having to use P threads

01:25:26 --> 01:25:31
because they now have you know 100 100

01:25:28 --> 01:25:33
threads or 50 cores in a machine or

01:25:30 --> 01:25:34
something like that um you're now

01:25:32 --> 01:25:36
talking about machine learning

01:25:33 --> 01:25:38
accelerators they're now domain specific

01:25:35 --> 01:25:41
and when you look at these kinds of use

01:25:37 --> 01:25:43
cases you can still get performance um

01:25:40 --> 01:25:45
and Jim will come up with cool things

01:25:42 --> 01:25:47
that uh utilize the Silicon in new ways

01:25:44 --> 01:25:50
for sure but you're also going to change

01:25:46 --> 01:25:51
the programming model right and now when

01:25:49 --> 01:25:52
you start talking about changing the

01:25:50 --> 01:25:54
programming model that's when you come

01:25:51 --> 01:25:58
back to languages and things like this

01:25:53 --> 01:26:00
too because often what you see is um

01:25:57 --> 01:26:01
like you take the C programming language

01:25:59 --> 01:26:03
right the C programming language is

01:26:00 --> 01:26:05
designed for

01:26:02 --> 01:26:09
CPUs and so if you want to talk to a GPU

01:26:04 --> 01:26:11
now you're talking to its cousin Cuda

01:26:08 --> 01:26:13
okay Cuda is a different thing with a

01:26:10 --> 01:26:15
different set of tools a different world

01:26:12 --> 01:26:18
a different way of thinking and we don't

01:26:15 --> 01:26:19
have one world that scales and I think

01:26:17 --> 01:26:21
that we can get there we can have one

01:26:19 --> 01:26:24
world that scales in a much better way

01:26:21 --> 01:26:26
on a small tangent then I think most

01:26:23 --> 01:26:29
programming languages are designed for

01:26:25 --> 01:26:30
CPUs for single core even just in their

01:26:28 --> 01:26:33
Spirit even if they allow for

01:26:29 --> 01:26:36
paralyzation so what does it look like

01:26:32 --> 01:26:39
for programming language to have um

01:26:36 --> 01:26:43
paralyzation or massive parallelization

01:26:38 --> 01:26:45
as it's like first principle so the

01:26:42 --> 01:26:49
canonical example of this is the

01:26:44 --> 01:26:51
hardware design world so verog vhdl

01:26:48 --> 01:26:54
these kinds of languages they're what's

01:26:50 --> 01:26:57
called a uh highle synthesis language

01:26:53 --> 01:26:59
this is the thing people design chips in

01:26:56 --> 01:27:01
and when you're designing a chip it's

01:26:58 --> 01:27:02
kind of like a brain where you have

01:27:00 --> 01:27:04
infinite

01:27:01 --> 01:27:05
parallelism like you've got you're

01:27:03 --> 01:27:07
you're like laying down

01:27:04 --> 01:27:09
transistors transistors are always

01:27:06 --> 01:27:11
running okay yeah and so you're not

01:27:08 --> 01:27:13
saying run run this transistor then this

01:27:10 --> 01:27:14
transistor than this transistor it's

01:27:12 --> 01:27:16
like your brain like your neurons are

01:27:13 --> 01:27:18
always just doing something they're not

01:27:15 --> 01:27:20
clocked right they're they're just

01:27:17 --> 01:27:22
doing they're they're doing

01:27:19 --> 01:27:24
their thing and so when you design a

01:27:21 --> 01:27:26
chip or when you design a CPU when you

01:27:23 --> 01:27:28
design when you're

01:27:25 --> 01:27:30
laying down the transistors uh similarly

01:27:27 --> 01:27:32
ou're talking about well okay well how

01:27:29 --> 01:27:35
do these things communicate and so these

01:27:31 --> 01:27:37
languages exist verog is um a kind of

01:27:34 --> 01:27:39
mixed example of that none of these

01:27:36 --> 01:27:41
languages are really great either very

01:27:38 --> 01:27:43
low level yeah yeah they're very low

01:27:40 --> 01:27:44
level and abstraction is necessary here

01:27:42 --> 01:27:46
and there's different different

01:27:43 --> 01:27:49
approaches at that and it's a it's

01:27:45 --> 01:27:52
itself a very complicated world but um

01:27:48 --> 01:27:56
but it's implicitly parallel and so

01:27:51 --> 01:27:58
having that as a as the domain that you

01:27:55 --> 01:28:00
h program towards makes it so that by

01:27:57 --> 01:28:02
default you get parallel systems if you

01:27:59 --> 01:28:05
look at Cuda Cuda is a point halfway in

01:28:01 --> 01:28:07
the space where in Cuda when you write a

01:28:04 --> 01:28:09
Cuda kernel for your GPU it feels like

01:28:06 --> 01:28:10
you're writing a scaler program so

01:28:08 --> 01:28:11
you're like you have ifs you have for

01:28:09 --> 01:28:13
Loops stuff like this you're just

01:28:10 --> 01:28:15
writing normal normal code but what

01:28:12 --> 01:28:17
happens outside of that in your driver

01:28:14 --> 01:28:19
is that it actually is running you on

01:28:16 --> 01:28:22
like a thousand things at once right and

01:28:18 --> 01:28:25
so it's it's parallel but it has pulled

01:28:21 --> 01:28:27
it out of the programming model and so

01:28:24 --> 01:28:30
now you as a programmer are working

01:28:26 --> 01:28:31
at a in a simpler world and it's solved

01:28:29 --> 01:28:33
that for

01:28:30 --> 01:28:34
you right how do you take the language

01:28:32 --> 01:28:38
like

01:28:33 --> 01:28:41
Swift um you know if we we think about

01:28:37 --> 01:28:43
gpus but also ASX maybe if we can dance

01:28:40 --> 01:28:46
back and forth between hardware and

01:28:42 --> 01:28:48
software uh is you know how do you

01:28:45 --> 01:28:51
design for these features to be able to

01:28:47 --> 01:28:53
program make it a first class citizen to

01:28:50 --> 01:28:56
be able to do like Swift for tensor flow

01:28:53 --> 01:28:58
to be able to do machine learning on

01:28:55 --> 01:29:01
current Hardware but also future

01:28:57 --> 01:29:02
Hardware like uh dpus and all kinds of

01:29:00 --> 01:29:05
as6 that I'm sure will be popping up

01:29:01 --> 01:29:06
more yeah well so so a lot of this comes

01:29:04 --> 01:29:08
down to this whole idea of having the

01:29:05 --> 01:29:10
nuts and bolts underneath the covers

01:29:07 --> 01:29:12
that work really well so you need if

01:29:09 --> 01:29:14
you're talking to tpus you need you know

01:29:11 --> 01:29:17
ml or xlaa or one of these compilers

01:29:13 --> 01:29:20
that talks to tpus to build on top of

01:29:16 --> 01:29:21
okay and if you're talking to circuits

01:29:19 --> 01:29:23
you need to figure out how to lay down

01:29:20 --> 01:29:24
the transistors and how to organize it

01:29:22 --> 01:29:27
and how to set up clocking and like all

01:29:23 --> 01:29:29
the domain problems that you get with uh

01:29:26 --> 01:29:31
circuits then you have to decide how to

01:29:28 --> 01:29:34
explain it to a human what is the

01:29:30 --> 01:29:36
UI right and if if you do it right

01:29:33 --> 01:29:38
hat's a library problem not a language

01:29:35 --> 01:29:41
problem and that works if you have a

01:29:37 --> 01:29:43
library or a language which allows your

01:29:40 --> 01:29:45
library to write things that feel native

01:29:42 --> 01:29:48
in The Language by implementing

01:29:44 --> 01:29:50
libraries because then you can innovate

01:29:47 --> 01:29:52
in programming models without having to

01:29:49 --> 01:29:55
change your syntax again and like have

01:29:51 --> 01:29:57
to invent new code formatting tools and

01:29:55 --> 01:30:00
like all the other things that languages

01:29:56 --> 01:30:02
come with and this this gets really

01:29:59 --> 01:30:04
interesting and so um if you look at the

01:30:01 --> 01:30:07
space the interesting thing once you

01:30:03 --> 01:30:09
separate out syntax becomes what is that

01:30:06 --> 01:30:12
programming model and so do you want the

01:30:08 --> 01:30:16
Cuda style I write one program and it

01:30:11 --> 01:30:18
runs many places the um do you want the

01:30:15 --> 01:30:19
implicitly parallel model how do you

01:30:17 --> 01:30:22
reason about that how do you give

01:30:18 --> 01:30:25
developers you know chip Architects the

01:30:21 --> 01:30:26
ability to express their intent and

01:30:24 --> 01:30:29
that comes into this whole design

01:30:25 --> 01:30:30
question of how do you detect bugs

01:30:28 --> 01:30:33
quickly so you don't have to tape out a

01:30:29 --> 01:30:35
chip to find out it's wrong ideally

01:30:32 --> 01:30:38
right how do you and and you know this

01:30:34 --> 01:30:39
a spectrum how do you make it so that

01:30:37 --> 01:30:41
people feel productive so their

01:30:38 --> 01:30:44
turnaround time is very quick all these

01:30:40 --> 01:30:46
things are really hard problems and um

01:30:43 --> 01:30:48
in this world I I think that not a lot

01:30:45 --> 01:30:50
of effort has been put into that design

01:30:47 --> 01:30:53
problem and thinking about the layering

01:30:49 --> 01:30:55
in other pieces well you've uh on the

01:30:52 --> 01:30:57
topic of concurrency you've written the

01:30:54 --> 01:30:59
Swift concurrency Manifesto I think it's

01:30:56 --> 01:31:02
kind of interesting anything that

01:30:58 --> 01:31:04
uh has the word manifesto in is very

01:31:01 --> 01:31:07
interesting can you summarize the key

01:31:03 --> 01:31:10
ideas of U each of the five parts you

01:31:06 --> 01:31:13
written about so what is a Manifesto yes

01:31:09 --> 01:31:16
how about we start there uh so in the

01:31:12 --> 01:31:17
Swift Community we have this um problem

01:31:15 --> 01:31:21
which is on the one hand you want to

01:31:16 --> 01:31:22
have relatively small proposals that you

01:31:20 --> 01:31:23
can kind of fit in your head you can

01:31:21 --> 01:31:26
understand the details at a very fine

01:31:23 --> 01:31:29
grain level that move the world forward

01:31:25 --> 01:31:31
but then you also have these big arcs

01:31:28 --> 01:31:33
okay and often when you're working on

01:31:30 --> 01:31:35
something that is a big Arc but you're

01:31:32 --> 01:31:36
tackling in small pieces you have this

01:31:34 --> 01:31:39
question of how do I know I'm not doing

01:31:35 --> 01:31:41
a random walk where are we going like

01:31:38 --> 01:31:43
how does this add up furthermore when

01:31:40 --> 01:31:46
you start that first the first small

01:31:42 --> 01:31:48
step what terminology do you use how do

01:31:45 --> 01:31:49
we think about it what is better and

01:31:47 --> 01:31:51
worse in the space what are the

01:31:48 --> 01:31:52
principles what are we trying to achieve

01:31:50 --> 01:31:54
and so what a Manifesto in the Swift

01:31:51 --> 01:31:57
Community does is it starts to say hey

01:31:53 --> 01:31:59
well let's step back from the details of

01:31:56 --> 01:32:01
everything let's paint a broad picture

01:31:58 --> 01:32:03
to talk about how what we're trying to

01:32:00 --> 01:32:06
achieve let's give an example design

01:32:02 --> 01:32:07
Point let's try to paint the big picture

01:32:05 --> 01:32:08
so that then we can zero in on the

01:32:06 --> 01:32:11
individual steps and make sure that

01:32:07 --> 01:32:12
we're making good progress and so the

01:32:10 --> 01:32:15
Swift concurrency Manifesto is something

01:32:11 --> 01:32:17
I wrote three years ago it's been a

01:32:14 --> 01:32:19
while maybe maybe more um trying to do

01:32:16 --> 01:32:21
that for for Swift and

01:32:18 --> 01:32:24
concurrency and it starts with some

01:32:20 --> 01:32:26
fairly uh simple things like making the

01:32:23 --> 01:32:27
observation that

01:32:25 --> 01:32:28
when you have multiple different

01:32:26 --> 01:32:30
computers or multiple different threads

01:32:27 --> 01:32:31
that are communicating it's best for

01:32:29 --> 01:32:33
them to be

01:32:30 --> 01:32:35
asynchronous right and so you need

01:32:32 --> 01:32:36
things to be able to run separately and

01:32:34 --> 01:32:39
then communicate with each other and

01:32:35 --> 01:32:40
this means asynchrony and this means

01:32:38 --> 01:32:42
that uh you need a way to modeling

01:32:39 --> 01:32:44
asynchronous communication uh many

01:32:41 --> 01:32:46
languages have features like this uh

01:32:43 --> 01:32:48
asyn a weight is a popular one and so

01:32:45 --> 01:32:51
that's what I think is very likely in

01:32:47 --> 01:32:52
Swift um but as you start building this

01:32:50 --> 01:32:55
Tower of abstractions it's not just

01:32:51 --> 01:32:57
about how do you write this you then

01:32:54 --> 01:32:59
reach into the how do you get memory

01:32:56 --> 01:33:01
safety because you want correctness you

01:32:58 --> 01:33:04
want debuggability and Sanity for

01:33:00 --> 01:33:07
developers and how do you get uh that

01:33:03 --> 01:33:09
memory safety into um into the language

01:33:06 --> 01:33:11
so if you take a language like go or uh

01:33:08 --> 01:33:13
C or any of these languages you get

01:33:10 --> 01:33:15
what's called a race condition when two

01:33:12 --> 01:33:17
different threads or go routines or

01:33:14 --> 01:33:20
whatever touch the same point in memory

01:33:16 --> 01:33:24
right this is a huge like maddening

01:33:19 --> 01:33:26
problem to debug because uh it's not

01:33:23 --> 01:33:27
reproducible generally and so there's

01:33:25 --> 01:33:29
tools there's a whole ecosystem of

01:33:26 --> 01:33:30
solutions that built up around this but

01:33:28 --> 01:33:33
it's it's a huge problem when you're

01:33:29 --> 01:33:35
writing concurrent code and so with

01:33:32 --> 01:33:36
Swift uh this whole value sematics thing

01:33:34 --> 01:33:39
is really powerful there because it

01:33:35 --> 01:33:42
urns out that math and copies actually

01:33:38 --> 01:33:43
work even in concurrent worlds and so um

01:33:41 --> 01:33:45
you get a lot of safety just out of the

01:33:42 --> 01:33:47
box but there are also some hard

01:33:44 --> 01:33:49
problems and it talks about some of that

01:33:46 --> 01:33:50
um when you start building up to the

01:33:48 --> 01:33:51
next level up and you start talking

01:33:49 --> 01:33:53
Beyond memory safety you have to talk

01:33:50 --> 01:33:55
about what is a programmer model how

01:33:53 --> 01:33:57
does a human think about this so a

01:33:54 --> 01:33:59
developer that's trying to build a

01:33:56 --> 01:34:01
program think about this and it proposes

01:33:58 --> 01:34:05
a really old model with a new spin

01:34:01 --> 01:34:08
called actors actors are about saying we

01:34:04 --> 01:34:09
have islands of single threaded

01:34:07 --> 01:34:11
logically so you write something that

01:34:08 --> 01:34:14
feels like it's one programming one

01:34:10 --> 01:34:16
program running in a unit and then it

01:34:13 --> 01:34:17
communicates asynchronously with other

01:34:17 --> 01:34:22
things and so making that expressive and

01:34:19 --> 01:34:24
natural feel good be the first thing you

01:34:21 --> 01:34:26
reach for and being safe by default is a

01:34:23 --> 01:34:28
big big part of the design of that

01:34:25 --> 01:34:30
proposal when you start going beyond

01:34:27 --> 01:34:31
that now you start to say cool well

01:34:29 --> 01:34:32
these things that communicate

01:34:30 --> 01:34:34
asynchronously they don't have to share

01:34:31 --> 01:34:36
memory well if they don't have to share

01:34:33 --> 01:34:38
memory and they're sending messages to

01:34:35 --> 01:34:39
each other why do they have to be in the

01:34:37 --> 01:34:41
same

01:34:38 --> 01:34:42
process these things should be able to

01:34:40 --> 01:34:45
be in different processes on your

01:34:41 --> 01:34:46
machine and why just processes well why

01:34:44 --> 01:34:49
not different

01:34:45 --> 01:34:51
machines and so now you have a very nice

01:34:48 --> 01:34:53
gradual transition towards distributed

01:34:50 --> 01:34:55
programming and of course when you start

01:34:52 --> 01:34:58
alking about the the big the big future

01:34:54 --> 01:35:02
the the manifesto doesn't go into it but

01:34:58 --> 01:35:04
uh accelerators are asyn things you talk

01:35:01 --> 01:35:06
to asynchronously by sending messages to

01:35:03 --> 01:35:08
them and how do you program those well

01:35:06 --> 01:35:10
that that gets very interesting um

01:35:07 --> 01:35:14
that's not that's not in the proposal so

01:35:09 --> 01:35:17
but and uh how much do you want to make

01:35:13 --> 01:35:19
that explicit like the control of that

01:35:16 --> 01:35:21
whole process explicit to the programmer

01:35:18 --> 01:35:23
yeah good question so when when you're

01:35:20 --> 01:35:26
designing any of these kinds of features

01:35:22 --> 01:35:28
or language features or even libraries

01:35:25 --> 01:35:30
you have this really hard trade-off that

01:35:27 --> 01:35:32
you have to make which is how much is it

01:35:29 --> 01:35:34
magic or how much is it in the human's

01:35:31 --> 01:35:37
control how much can they predict and

01:35:33 --> 01:35:40
control it what do you do when the

01:35:36 --> 01:35:42
default case is the wrong

01:35:39 --> 01:35:46
case okay and so when you're designing a

01:35:41 --> 01:35:49
system um uh I won't name names but

01:35:45 --> 01:35:52
here there are systems where um you

01:35:48 --> 01:35:55
it's really easy to get started and then

01:35:51 --> 01:35:57
you you jump so let's pick like logo

01:35:54 --> 01:35:58
kay so something like this so it's

01:35:56 --> 01:36:01
really easy get start it's really

01:35:57 --> 01:36:03
designed for uh teaching kids but as you

01:36:00 --> 01:36:04
get into it you hit a ceiling yeah and

01:36:02 --> 01:36:05
then you can't go any higher and then

01:36:03 --> 01:36:06
what do you do well you have to go

01:36:04 --> 01:36:09
switch to a different world and rewrite

01:36:05 --> 01:36:11
all your code and this logo is a silly

01:36:08 --> 01:36:13
example here this exists in many other

01:36:10 --> 01:36:16
languages uh with python you would say

01:36:12 --> 01:36:18
uh uh like concurrency right so python

01:36:15 --> 01:36:20
has the global interpreter lock so

01:36:17 --> 01:36:22
threading is challenging in Python and

01:36:19 --> 01:36:24
so if you if you start writing a large

01:36:21 --> 01:36:27
scale application in Python and then you

01:36:23 --> 01:36:29
need concurrency you're kind of stuck

01:36:26 --> 01:36:32
with the series of bad trade-offs right

01:36:28 --> 01:36:34
um uh there's other ways to go where you

01:36:31 --> 01:36:38
say like voice all the all the

01:36:33 --> 01:36:39
complexity on the user all at once right

01:36:37 --> 01:36:42
and that's also bad in a different way

01:36:38 --> 01:36:44
and so what what I what I prefer is

01:36:41 --> 01:36:48
building a simple model that you can

01:36:43 --> 01:36:51
explain that then has an escape hatch so

01:36:47 --> 01:36:53
you get in you have guard rails you uh

01:36:50 --> 01:36:55
memory safety works like this in Swift

01:36:52 --> 01:36:56
where you can start with you like by

01:36:54 --> 01:36:58
default if you use all the standard

01:36:55 --> 01:36:59
things it's memory safe you're not going

01:36:57 --> 01:37:02
to shoot your foot off but if you want

01:36:59 --> 01:37:05
o get a uh a c-level pointer to

01:37:01 --> 01:37:08
something you can explicitly do that but

01:37:04 --> 01:37:12
by default it's uh there's guard rails

01:37:07 --> 01:37:15
okay so but like you

01:37:11 --> 01:37:17
know uh whose job is it to figure out

01:37:14 --> 01:37:19
which part of the code is

01:37:16 --> 01:37:22
paralyzable um so in the case of the

01:37:18 --> 01:37:23
proposal it is the human's job so they

01:37:21 --> 01:37:25
decide how to architect their

01:37:22 --> 01:37:27
application

01:37:24 --> 01:37:29
and then uh the runtime in the compiler

01:37:26 --> 01:37:31
is very

01:37:28 --> 01:37:33
predictable and so this this is in

01:37:30 --> 01:37:35
contrast to um like there's a long body

01:37:32 --> 01:37:36
of work including on Fortran for auto

01:37:34 --> 01:37:40
parallelizing

01:37:36 --> 01:37:42
compilers and um this is an example of a

01:37:39 --> 01:37:44
bad thing and my so as a compiler person

01:37:41 --> 01:37:47
I can rag on compiler people um often

01:37:43 --> 01:37:48
compiler people will say cool since I

01:37:46 --> 01:37:50
can't change the code I'm going to write

01:37:47 --> 01:37:52
my compiler that then takes this

01:37:49 --> 01:37:54
unmodified code and makes go way faster

01:37:51 --> 01:37:57
on this machine MH okay application

01:37:54 --> 01:37:59
develop and so it does pattern matching

01:37:56 --> 01:38:00
it does like really deep analysis

01:37:58 --> 01:38:02
compiler people are really smart and so

01:37:59 --> 01:38:04
they like want to like do something

01:38:01 --> 01:38:06
really clever and tricky and you get

01:38:03 --> 01:38:07
like 10x speed up by taking like an

01:38:05 --> 01:38:09
array of structures and turn it into a

01:38:06 --> 01:38:10
structure of arrays or something because

01:38:08 --> 01:38:13
it's so much better for memory like

01:38:09 --> 01:38:15
there's bod like tons of Tricks yeah um

01:38:12 --> 01:38:16
they love optimization yeah you love

01:38:14 --> 01:38:18
optimization everyone loves optimization

01:38:15 --> 01:38:19
everyone loves it well and it's it's

01:38:17 --> 01:38:21
just this promise of build with my

01:38:18 --> 01:38:23
compiler and your thing goes fast yeah

01:38:20 --> 01:38:26
right but here here's the problem Lex

01:38:22 --> 01:38:27
you write you write program M you run it

01:38:25 --> 01:38:29
with my compiler it goes fast you're

01:38:26 --> 01:38:30
very happy wow it's so much faster than

01:38:28 --> 01:38:32
the other compiler yeah then you go and

01:38:29 --> 01:38:34
you add a feature to your program or you

01:38:31 --> 01:38:37
refactor some code and suddenly you got

01:38:33 --> 01:38:39
a 10x loss in performance well why what

01:38:36 --> 01:38:41
just happened there what just happened

01:38:38 --> 01:38:43
there is you the theistic the the the

01:38:40 --> 01:38:44
pattern match and the compiler whatever

01:38:42 --> 01:38:47
analysis it was doing just got defeated

01:38:43 --> 01:38:49
because you didn't inline a function or

01:38:46 --> 01:38:51
or something right as a user you

01:38:48 --> 01:38:52
don't know you don't want to know that

01:38:50 --> 01:38:53
was the whole point you don't want to

01:38:51 --> 01:38:54
know how the compiler works you don't

01:38:52 --> 01:38:56
want to know how how the memory

01:38:53 --> 01:38:57
hierarchy works you don't want to know

01:38:55 --> 01:38:59
how it got parallelized across all these

01:38:56 --> 01:39:02
things you wanted that abstractor away

01:38:58 --> 01:39:04
from you but then the magic is lost as

01:39:01 --> 01:39:06
oon as you did something and you fall

01:39:03 --> 01:39:08
off a performance cliff and now you're

01:39:05 --> 01:39:10
in this funny position where what do I

01:39:07 --> 01:39:13
don't change my code I don't fix

01:39:09 --> 01:39:15
that bug it cost 10 10x performance now

01:39:12 --> 01:39:17
hat do I do well this is the problem

01:39:14 --> 01:39:18
with unpredictable performance right if

01:39:16 --> 01:39:20
you care about performance

01:39:17 --> 01:39:22
predictability is a very important thing

01:39:19 --> 01:39:24
and so um and so what the what the

01:39:21 --> 01:39:26
proposal does is it provides a

01:39:23 --> 01:39:28
rchitecture patterns for being able to

01:39:25 --> 01:39:30
lay out your code gives you full control

01:39:27 --> 01:39:33
over that makes it really simple so you

01:39:29 --> 01:39:35
can explain it and then um and then if

01:39:32 --> 01:39:37
you want to scale out in different ways

01:39:34 --> 01:39:39
you have full control over that so in

01:39:36 --> 01:39:42
your sense the intuition is for a

01:39:38 --> 01:39:44
compiler too hard to do automated

01:39:41 --> 01:39:48
parallelization like you know cuz the

01:39:43 --> 01:39:50
compilers do stuff automatically that's

01:39:47 --> 01:39:52
incredibly impressive for other things

01:39:49 --> 01:39:54
right but for

01:39:51 --> 01:39:56
parallelization we're not even we're not

01:39:53 --> 01:39:57
close to there well it it depends on the

01:39:55 --> 01:39:59
programming model so compile there's

01:39:56 --> 01:40:01
many different kinds of compilers and so

01:39:58 --> 01:40:02
if you talk about like a c compiler or a

01:40:00 --> 01:40:05
swift compiler or something like that

01:40:01 --> 01:40:07
where you're writing imperative code

01:40:04 --> 01:40:08
parallelizing that and reasoning about

01:40:06 --> 01:40:11
all the pointers and stuff like that is

01:40:07 --> 01:40:13
very is a very difficult problem now if

01:40:10 --> 01:40:15
you switch domains so there's this cool

01:40:12 --> 01:40:17
thing called machine

01:40:14 --> 01:40:19
learning right so the machine the

01:40:16 --> 01:40:21
machine learning nerds among other

01:40:18 --> 01:40:23
endearing things like you know solving

01:40:20 --> 01:40:26
cat detectors and other things like that

01:40:22 --> 01:40:28
um have done this amazing breakthrough

01:40:25 --> 01:40:31
of producing a programming model

01:40:27 --> 01:40:33
operations that you compose together mhm

01:40:30 --> 01:40:35
that has raised level of abstraction

01:40:32 --> 01:40:38
high enough that suddenly you can have

01:40:34 --> 01:40:40
autop paralyzing compilers you can write

01:40:37 --> 01:40:44
and model using tensor flow and have it

01:40:39 --> 01:40:47
run on 1,24 nodes of a TPU yeah that's

01:40:43 --> 01:40:49
true I didn't even think about like you

01:40:46 --> 01:40:50
know CU there's so much flexibility in

01:40:48 --> 01:40:52
the design of architectures that

01:40:49 --> 01:40:55
ultimately boil down to a graph that's

01:40:51 --> 01:40:57
paralyzable for you par for you and and

01:40:54 --> 01:41:00
if you think about it that's pretty

01:40:56 --> 01:41:01
cool and you think about batching for

01:40:59 --> 01:41:03
example as a way of being able to

01:41:00 --> 01:41:05
exploit more parallelism yeah like

01:41:02 --> 01:41:06
that's a very simple thing that now is

01:41:04 --> 01:41:08
very powerful that didn't come out of

01:41:06 --> 01:41:10
the programming language nerds right

01:41:08 --> 01:41:12
hose people like that came out of

01:41:09 --> 01:41:14
people that are just looking to solve a

01:41:11 --> 01:41:15
problem and use a few gpus and

01:41:13 --> 01:41:17
organically developed by the community

01:41:14 --> 01:41:19
of people focusing on machine learning

01:41:16 --> 01:41:21
and it's an incredibly power powerful

01:41:18 --> 01:41:23
abstraction layer that enables the

01:41:20 --> 01:41:26
compiler people to go and exploit that

01:41:22 --> 01:41:28
and you can drive supercomputers from

01:41:25 --> 01:41:31
python that's that's pretty cool that's

01:41:27 --> 01:41:33
amazing so just to pause on that I cuz

01:41:30 --> 01:41:36
I'm not sufficiently low level I forget

01:41:32 --> 01:41:39
o admire the beauty and power of that

01:41:35 --> 01:41:42
but um maybe just to linger on it like

01:41:38 --> 01:41:44
what what does it take to run a neural

01:41:41 --> 01:41:46
network fast like how hard is that

01:41:43 --> 01:41:49
compilation it's really hard um so we

01:41:45 --> 01:41:51
just skipped you said like it's amazing

01:41:48 --> 01:41:53
that that's a thing but yeah how hard is

01:41:50 --> 01:41:55
that of a thing it's it's hard and I I

01:41:52 --> 01:41:58
would say that

01:41:54 --> 01:42:00
not all the systems are really great

01:41:57 --> 01:42:01
including the ones I help build so

01:41:59 --> 01:42:02
there's a lot of work left to be done

01:42:00 --> 01:42:05
there is it the compiler nerds working

01:42:01 --> 01:42:06
on that or is it a whole new group of

01:42:04 --> 01:42:09
people well it's it's a full stack

01:42:05 --> 01:42:12
problem including compiler people um in

01:42:08 --> 01:42:15
cluding apis so like Caris and the the

01:42:11 --> 01:42:17
module API and pytorch and Jack

01:42:14 --> 01:42:18
and there's a bunch of people pushing on

01:42:16 --> 01:42:20
all the different parts of these things

01:42:17 --> 01:42:22
because when you look at it is it's both

01:42:19 --> 01:42:24
ow do I express the computation do I

01:42:21 --> 01:42:26
stack up layers well cool like setting

01:42:23 --> 01:42:28
up a linear sequence of layers is great

01:42:25 --> 01:42:30
for the simple case but how do I do the

01:42:27 --> 01:42:31
hard case how do I do reinforcement

01:42:29 --> 01:42:33
learning well now I need to integrate my

01:42:30 --> 01:42:35
application logic in this right then

01:42:32 --> 01:42:37
it's you know the next level down of how

01:42:34 --> 01:42:39
do you represent that for the runtime

01:42:36 --> 01:42:40
how do you get Hardware

01:42:38 --> 01:42:42
abstraction and then you get to the next

01:42:39 --> 01:42:43
level down of saying like forget about

01:42:41 --> 01:42:47
abstraction how do I get the Peak

01:42:42 --> 01:42:48
Performance out of my TPU or my iPhone

01:42:46 --> 01:42:50
accelerator or whatever right all these

01:42:48 --> 01:42:52
different things and how and so this is

01:42:49 --> 01:42:54
a layered problem with a lot of really

01:42:51 --> 01:42:56
interesting uh design and work going on

01:42:53 --> 01:42:58
in the space and a lot of really smart

01:42:55 --> 01:43:01
people working on it uh machine learning

01:42:57 --> 01:43:03
is a very well-funded area of investment

01:43:00 --> 01:43:04
right now and so there's a lot of

01:43:02 --> 01:43:06
progress being made so how much

01:43:03 --> 01:43:09
Innovation is there on the lower level

01:43:05 --> 01:43:11
so closer to the to the as6 so

01:43:08 --> 01:43:13
redesigning the hardware or redesigning

01:43:11 --> 01:43:15
concurrently compilers with that

01:43:12 --> 01:43:17
Hardware is that like if you were to

01:43:14 --> 01:43:19
predict the

01:43:16 --> 01:43:23
biggest uh you know the equivalent of

01:43:18 --> 01:43:25
Moors law improvements in the inference

01:43:22 --> 01:43:27
in the training of your own networks and

01:43:25 --> 01:43:28
just all of that where is that going to

01:43:26 --> 01:43:30
come from you think sure you get

01:43:27 --> 01:43:33
scalability have different things and so

01:43:29 --> 01:43:36
you get um you know Jim Keller shrinking

01:43:32 --> 01:43:38
process technology you get 3 nanometer

01:43:35 --> 01:43:40
instead of five or seven or 10 or 28 or

01:43:37 --> 01:43:42
whatever um and so that that marches

01:43:39 --> 01:43:45
forward that provides improvements you

01:43:41 --> 01:43:47
get uh architectural level performance

01:43:44 --> 01:43:49
and so the you know a TPU with a matrix

01:43:46 --> 01:43:52
multiply unit and a systolic array is

01:43:48 --> 01:43:54
much more efficient than having a scaler

01:43:51 --> 01:43:58
core doing multiplies and adds and

01:43:53 --> 01:44:00
things like that you then get um uh uh

01:43:57 --> 01:44:01
system level improvements so how you

01:43:59 --> 01:44:04
talk to memory how you talk across a

01:44:00 --> 01:44:06
cluster of machines how you scale out

01:44:03 --> 01:44:08
how you have fast interconnects between

01:44:05 --> 01:44:10
machines you then get system level

01:44:07 --> 01:44:12
programming models so now that you have

01:44:09 --> 01:44:13
all this Hardware how to utilize it you

01:44:11 --> 01:44:15
then have algorithmic breakthroughs

01:44:12 --> 01:44:18
where you say hey wow cool instead of

01:44:14 --> 01:44:21
training in uh you know resonant 50 and

01:44:17 --> 01:44:24
uh a week I'm now training it in you

01:44:20 --> 01:44:27
know 25 seconds yeah and Comin It's a

01:44:23 --> 01:44:30
combination of uh you know new new

01:44:26 --> 01:44:32
optimizers and new new new just training

01:44:29 --> 01:44:34
regimens and different different

01:44:31 --> 01:44:35
approaches to train and and all of these

01:44:33 --> 01:44:38
things come together to to push the

01:44:34 --> 01:44:41
world forward that that was a a

01:44:37 --> 01:44:44
beautiful exposition of but if you were

01:44:40 --> 01:44:48
to uh Force to bet all your money on one

01:44:43 --> 01:44:50
of these would you why do we have to

01:44:47 --> 01:44:52
that's unfortunately we have people

01:44:49 --> 01:44:55
working on all this it's an exciting

01:44:51 --> 01:44:57
time right so I mean you know open the

01:44:54 --> 01:44:59
ye did this little paper showing the

01:44:56 --> 01:45:01
algorithmic Improvement you can get has

01:44:58 --> 01:45:03
been you know improving

01:45:00 --> 01:45:06
exponentially uh I haven't quite seen

01:45:02 --> 01:45:08
the same kind of analysis on other

01:45:05 --> 01:45:11
layers of the stack I'm sure it's also

01:45:07 --> 01:45:13
improving significantly I just it's a

01:45:10 --> 01:45:17
nice intuition Builder I mean

01:45:12 --> 01:45:19
there's a reason why Moore's Law that's

01:45:16 --> 01:45:22
the beauty of Mo's law is somebody

01:45:18 --> 01:45:24
writes a paper that makes a ridiculous

01:45:21 --> 01:45:28
prediction yeah and

01:45:23 --> 01:45:29
it you know becomes reality in a sense

01:45:27 --> 01:45:32
there's there's something about these

01:45:28 --> 01:45:36
narratives when you uh uh when Chris L

01:45:31 --> 01:45:39
on a silly little podcast makes bets all

01:45:35 --> 01:45:40
his money on a particular thing somehow

01:45:38 --> 01:45:43
it can have a ripple effect of actually

01:45:39 --> 01:45:46
becoming real that's an interesting

01:45:42 --> 01:45:49
aspect of it cuz like it might have been

01:45:45 --> 01:45:51
uh you know we focus with Mor's law most

01:45:48 --> 01:45:54
of the Computing industry really really

01:45:50 --> 01:45:56
focused on the hardware

01:45:53 --> 01:45:57
I mean software Innovation I don't know

01:45:55 --> 01:46:00
how much software Innovation there was

01:45:56 --> 01:46:03
in terms of Intel giveth Bill takes away

01:45:59 --> 01:46:05
right yeah I mean compiler has improved

01:46:02 --> 01:46:07
significantly also right well not not

01:46:04 --> 01:46:09
really so actually I mean so I'm joking

01:46:06 --> 01:46:11
about how uh software's gotten slower

01:46:09 --> 01:46:14
pretty much as fast as Hardware got

01:46:11 --> 01:46:16
better at least through the 90s um

01:46:13 --> 01:46:18
there's another joke another law in

01:46:15 --> 01:46:20
compilers which is called uh I think

01:46:17 --> 01:46:22
it's called probstein law which is uh

01:46:19 --> 01:46:26
compilers double the performance of any

01:46:21 --> 01:46:29
given code every 18

01:46:25 --> 01:46:32
years so they move slowly yeah well so

01:46:28 --> 01:46:33
well well yeah it's exponential also

01:46:31 --> 01:46:36
yeah you're making progress but but

01:46:32 --> 01:46:38
here again it's not about um the the

01:46:35 --> 01:46:40
power of compilers is not just about how

01:46:37 --> 01:46:42
do you make the same thing go faster

01:46:39 --> 01:46:43
it's how do you unlock the new hardware

01:46:41 --> 01:46:46
right a new chip came out how do you

01:46:42 --> 01:46:47
tilize it you say oh the programming

01:46:45 --> 01:46:50
model how do we make people more

01:46:46 --> 01:46:54
productive how do we how do we uh like

01:46:49 --> 01:46:56
have better error messages even such

01:46:53 --> 01:46:58
mundane things like how do I generate a

01:46:55 --> 01:47:01
very specific error message about your

01:46:57 --> 01:47:03
code actually makes people happy because

01:47:00 --> 01:47:04
then they know how to fix it right it

01:47:02 --> 01:47:07
comes back to how do you help people get

01:47:03 --> 01:47:10
heir job done yeah and yeah and then in

01:47:06 --> 01:47:13
this world of exponentially increasing

01:47:09 --> 01:47:16
smart toasters how do you uh expand

01:47:12 --> 01:47:18
Computing to uh to all all these kinds

01:47:15 --> 01:47:21
of devices do you see this world where

01:47:17 --> 01:47:24
just everything's a Computing surface

01:47:20 --> 01:47:26
you see that possibility just everything

01:47:23 --> 01:47:28
a computer yeah I don't see any reason

01:47:25 --> 01:47:32
that that couldn't be achieved it turns

01:47:27 --> 01:47:35
out that sand goes into glass and glass

01:47:31 --> 01:47:39
is pretty useful too and you know like

01:47:34 --> 01:47:41
why not why not so uh very important

01:47:38 --> 01:47:46
question then if

01:47:40 --> 01:47:48
um if we're living in a simulation and

01:47:45 --> 01:47:50
the simulation is running a computer

01:47:47 --> 01:47:51
like what what's the architecture of

01:47:49 --> 01:47:54
that computer do you

01:47:50 --> 01:47:56
think so you're saying is it is it a

01:47:53 --> 01:47:58
Quantum system is it a yeah like this

01:47:55 --> 01:48:01
whole Quantum discussion is it needed or

01:47:57 --> 01:48:03
can can we run it on a on a you know

01:48:01 --> 01:48:06
ith a risk 5

01:48:02 --> 01:48:07
architecture uh a bunch of CPUs I think

01:48:05 --> 01:48:11
it comes down to the right tool for the

01:48:06 --> 01:48:13
job okay and so and what's the compiler

01:48:10 --> 01:48:15
yeah exactly that's that's my question

01:48:12 --> 01:48:20
how do I get that job be the universe

01:48:14 --> 01:48:22
compiler um uh and so there as far as we

01:48:19 --> 01:48:24
know Quantum Quantum Quantum systems are

01:48:21 --> 01:48:28
the bottom of the T pile of

01:48:23 --> 01:48:30
so far yeah and so we don't know

01:48:27 --> 01:48:32
efficient ways to implement Quantum

01:48:29 --> 01:48:34
systems without using quantum

01:48:31 --> 01:48:35
computers yeah and that's totally

01:48:33 --> 01:48:37
outside of everything we've talked about

01:48:34 --> 01:48:40
Quantum but who runs that quantum

01:48:36 --> 01:48:41
computer yeah right so if it if it if we

01:48:39 --> 01:48:44
really are living in a

01:48:40 --> 01:48:46
simulation then is it bigger quantum

01:48:43 --> 01:48:47
computers is it different ones like how

01:48:45 --> 01:48:50
does that work out how does that

01:48:46 --> 01:48:52
scale well it's it's the same size it's

01:48:50 --> 01:48:54
the same size but then but then the

01:48:51 --> 01:48:55
thought of the simulation is you don't

01:48:53 --> 01:48:57
have to run the whole thing that you

01:48:54 --> 01:49:01
know we humans are cognitively very

01:48:56 --> 01:49:03
limited checkpoints checkpoints yeah and

01:49:00 --> 01:49:07
uh and if we the point at which we human

01:49:02 --> 01:49:11
so you basically do minimal amount of uh

01:49:06 --> 01:49:14
what is it uh Swift does um on right

01:49:10 --> 01:49:16
copy copy on right yeah so you only you

01:49:13 --> 01:49:18
only adjust the simulation par parallel

01:49:15 --> 01:49:21
universe theories right and so and so

01:49:17 --> 01:49:24
every time a a decision is made somebody

01:49:20 --> 01:49:27
opens the Shor in your box then there's

01:49:23 --> 01:49:30
a fork this could happen and then uh

01:49:27 --> 01:49:32
thank you for uh for considering the

01:49:29 --> 01:49:34
possibility but yeah so it may not

01:49:31 --> 01:49:37
require you know the entirety of the

01:49:33 --> 01:49:40
universe to simulate it but it's um

01:49:36 --> 01:49:42
interesting to think about uh as we

01:49:39 --> 01:49:45
create this this higher and higher

01:49:41 --> 01:49:47
Fidelity systems but I do want to ask on

01:49:44 --> 01:49:49
the on the quantum computer side because

01:49:46 --> 01:49:51
verything we've talked about with uh

01:49:49 --> 01:49:54
with you work with sci-fi with every

01:49:50 --> 01:49:58
with compilers none of that includes

01:49:53 --> 01:50:02
quantum computers right that's true so

01:49:57 --> 01:50:05
have you ever thought about uh what a

01:50:01 --> 01:50:08
you know this whole serious engineering

01:50:04 --> 01:50:11
work of quantum computers looks like of

01:50:07 --> 01:50:12
compilers of architectures all of that

01:50:10 --> 01:50:15
kind of stuff so I've looked at a little

01:50:11 --> 01:50:17
bit I know almost nothing about it which

01:50:14 --> 01:50:18
means that at some point I will have to

01:50:16 --> 01:50:20
find an excuse to get involved because

01:50:18 --> 01:50:23
that's how do you think do you think

01:50:19 --> 01:50:26
that's a thing to be like is was your

01:50:22 --> 01:50:28
little senses of the timing of when to

01:50:25 --> 01:50:31
be involved is it not yet well so so the

01:50:27 --> 01:50:33
thing I do really well is I jump into

01:50:30 --> 01:50:35
messy systems and figure out how to make

01:50:32 --> 01:50:38
them figure out what the truth in the

01:50:34 --> 01:50:40
situation is try to figure out what um

01:50:37 --> 01:50:42
what the unifying theory is how to like

01:50:39 --> 01:50:44
Factor the complexity how to find a

01:50:41 --> 01:50:46
beautiful answer to a problem that um

01:50:43 --> 01:50:48
has been well studied and lots of people

01:50:45 --> 01:50:49
have bashed their heads against it I

01:50:47 --> 01:50:51
don't know that quantum computers are

01:50:48 --> 01:50:57
mature enough and accessible enough to

01:50:50 --> 01:50:58
be um figured out yet right and um the

01:50:56 --> 01:51:00
uh I think the open question with

01:50:57 --> 01:51:02
quantum computers is is there a useful

01:50:59 --> 01:51:05
problem that gets solved with a quantum

01:51:01 --> 01:51:07
computer that makes it worth the

01:51:04 --> 01:51:09
conomic cost of like having one of

01:51:06 --> 01:51:12
these things and having having Legions

01:51:08 --> 01:51:14
of people that that that uh set it up

01:51:11 --> 01:51:15
you go back to the 50s right and there's

01:51:13 --> 01:51:19
the projections of the world can will

01:51:14 --> 01:51:21
only need seven seven computers right

01:51:18 --> 01:51:22
well and part of that was that people

01:51:20 --> 01:51:23
hadn't figured out what they're useful

01:51:21 --> 01:51:25
for what are the algorithm we want to

01:51:23 --> 01:51:27
run what are the problems to get solved

01:51:24 --> 01:51:29
and this comes back to how do we make

01:51:26 --> 01:51:31
the world better either economically or

01:51:28 --> 01:51:32
making somebody's life better or like

01:51:30 --> 01:51:35
solving a problem that wasn't solved

01:51:31 --> 01:51:36
before things like this and um I think

01:51:34 --> 01:51:38
that just we're a little bit too early

01:51:35 --> 01:51:40
in that development cycle because it's

01:51:37 --> 01:51:42
till like literally a science project

01:51:39 --> 01:51:45
not any negative connotation right it's

01:51:41 --> 01:51:47
literally a science project and um the

01:51:44 --> 01:51:50
progress there is amazing and so I don't

01:51:46 --> 01:51:51
know if it's 10 years away if it's 2

01:51:49 --> 01:51:54
years away exactly where that

01:51:50 --> 01:51:57
breakthrough happens but um you look at

01:51:53 --> 01:52:00
uh machine learning it we went through a

01:51:56 --> 01:52:03
few winners um before the Alex net

01:51:59 --> 01:52:04
ransition and then suddenly it had its

01:52:02 --> 01:52:07
breakout moment and that was the

01:52:03 --> 01:52:09
Catalyst that then drove the talent

01:52:06 --> 01:52:11
flocking into it that's what drove the

01:52:08 --> 01:52:14
conomic applications of it that's what

01:52:10 --> 01:52:15
drove the um the technology to go faster

01:52:13 --> 01:52:18
because you now have more Minds thrown

01:52:14 --> 01:52:21
at the problem this is what caused uh

01:52:17 --> 01:52:23
like a serious knee and uh deep learning

01:52:20 --> 01:52:25
and the algorithms that we're using and

01:52:22 --> 01:52:27
um and so I think that's what Quantum

01:52:24 --> 01:52:29
needs to go through and so right now

01:52:26 --> 01:52:31
it's in that that formidable finding

01:52:28 --> 01:52:35
itself getting the the like literally

01:52:30 --> 01:52:36
the physics figured out and um and and

01:52:34 --> 01:52:39
then has to figure out the application

01:52:36 --> 01:52:41
that makes this useful like right now

01:52:38 --> 01:52:42
I'm I'm not skeptical that I think that

01:52:40 --> 01:52:44
will happen I think it's just you know

01:52:42 --> 01:52:46
10 years away something like that I

01:52:43 --> 01:52:48
forgot to ask what programming language

01:52:45 --> 01:52:51
do you think the simulation is written

01:52:47 --> 01:52:55
in O probably

01:52:50 --> 01:52:56
lisp so not sft like if you were to bet

01:52:55 --> 01:53:01
uh I'll just leave it at that so I mean

01:52:59 --> 01:53:02
we've mentioned that you work with all

01:53:00 --> 01:53:05
these companies we we've talked about

01:53:01 --> 01:53:09
all these projects it's kind of if we

01:53:04 --> 01:53:11
just step back and zoom out about the

01:53:08 --> 01:53:14
way you did that work and we look at

01:53:10 --> 01:53:16
covid times this pandemic we're living

01:53:13 --> 01:53:18
through that may if I look at the way

01:53:15 --> 01:53:21
Silicon Valley folks are talking about

01:53:17 --> 01:53:24
it the way MIT is talking about it this

01:53:20 --> 01:53:29
might last for a long time uh not just

01:53:23 --> 01:53:32
he virus but the the remote nature the

01:53:28 --> 01:53:34
conomic impact I all it yeah yeah it's

01:53:31 --> 01:53:36
going to be a mess do you think uh

01:53:33 --> 01:53:42
what's your prediction I mean from

01:53:35 --> 01:53:43
sci-fi to Google to uh uh to just all

01:53:41 --> 01:53:45
the places you worked in just Silicon

01:53:43 --> 01:53:46
Valley you're in the middle of it what

01:53:44 --> 01:53:49
do you think is how is the whole place

01:53:45 --> 01:53:50
going to change yeah so I mean I I

01:53:48 --> 01:53:54
really can only speak to the tech

01:53:49 --> 01:53:56
perspective I am in that bubble

01:53:53 --> 01:53:58
um I think it's going to be really

01:53:55 --> 01:53:59
interesting because the you know the

01:53:57 --> 01:54:01
zoom culture of being remote and on

01:53:58 --> 01:54:03
video chat all the time has really

01:54:00 --> 01:54:06
interesting effects on people so on the

01:54:02 --> 01:54:09
one hand it's a great normalizer it's a

01:54:05 --> 01:54:11
normalizer that I think will help

01:54:08 --> 01:54:12
communities of people that have

01:54:10 --> 01:54:15
traditionally been

01:54:11 --> 01:54:17
underrepresented uh because now you're

01:54:14 --> 01:54:19
taking in some cases a face off you

01:54:16 --> 01:54:20
don't have to have a camera going right

01:54:18 --> 01:54:22
and so you can have conversations

01:54:20 --> 01:54:24
without physical appearance being part

01:54:21 --> 01:54:26
of the part of the dynamic which is

01:54:23 --> 01:54:27
pretty powerful you're taking remote

01:54:25 --> 01:54:30
mployees that have already been remote

01:54:27 --> 01:54:32
and you're saying you're now on the same

01:54:29 --> 01:54:33
level and foot footing as everybody else

01:54:31 --> 01:54:34
nobody gets

01:54:32 --> 01:54:36
whiteboards you're not going to be the

01:54:34 --> 01:54:37
one person that doesn't going to be

01:54:35 --> 01:54:39
participating in the Whiteboard

01:54:36 --> 01:54:42
conversation and that's pretty powerful

01:54:39 --> 01:54:45
um you've got uh you're forcing people

01:54:41 --> 01:54:47
to think uh asynchronously in some cases

01:54:45 --> 01:54:49
because it's harder to just just get

01:54:46 --> 01:54:51
people physically together and the

01:54:48 --> 01:54:53
bumping into each other forces people to

01:54:50 --> 01:54:55
find new ways to solve those problems s

01:54:52 --> 01:54:57
and I think that that leads to more

01:54:54 --> 01:55:00
inclusive Behavior which is good um on

01:54:56 --> 01:55:05
the other hand it's also it just

01:54:59 --> 01:55:06
sucks right and so um the the nature the

01:55:04 --> 01:55:10
actual communication or just sucks

01:55:05 --> 01:55:13
being not in with people like on a daily

01:55:09 --> 01:55:14
basis and collaborating with them yeah

01:55:12 --> 01:55:16
all of that right I mean everything this

01:55:13 --> 01:55:20
whole situation is terrible um what I

01:55:15 --> 01:55:22
meant primarily was the um I think that

01:55:19 --> 01:55:23
most humans like working physically

01:55:21 --> 01:55:25
with humans

01:55:22 --> 01:55:27
I think this is something that not

01:55:24 --> 01:55:29
everybody but many people are programmed

01:55:26 --> 01:55:31
to do and I think we get something out

01:55:28 --> 01:55:33
of that that it's very hard to express

01:55:30 --> 01:55:36
at least for me and so maybe this isn't

01:55:32 --> 01:55:38
rue of everybody but um and so the

01:55:35 --> 01:55:39
question to me is you know when you get

01:55:37 --> 01:55:42
hrough that time of

01:55:38 --> 01:55:44
adaptation right you get out of March

01:55:41 --> 01:55:46
and April and you get into December and

01:55:43 --> 01:55:48
you get into next march if it's not

01:55:45 --> 01:55:50
changed right it's already terrifying

01:55:47 --> 01:55:52
well you you think about that and you

01:55:49 --> 01:55:53
think about what is the nature of work

01:55:51 --> 01:55:56
yeah right how do how do we adapt and

01:55:52 --> 01:55:58
humans are very adaptable species right

01:55:55 --> 01:55:59
we can we can learn things and when

01:55:57 --> 01:56:02
we're forced to and there's a catalyst

01:55:59 --> 01:56:04
o make that happen and so what is it

01:56:01 --> 01:56:06
hat comes out of this and are we better

01:56:03 --> 01:56:08
or worse off right I think that you know

01:56:05 --> 01:56:11
you look at the Bay Area housing prices

01:56:07 --> 01:56:13
are insane well why well there's a high

01:56:10 --> 01:56:15
incentive to be physically located

01:56:12 --> 01:56:18
because if you don't have

01:56:14 --> 01:56:20
proximity you end up paying for it and

01:56:17 --> 01:56:22
commute right and there's there has been

01:56:19 --> 01:56:25
huge social social pressure in terms of

01:56:21 --> 01:56:27
like you will be there for the meeting

01:56:24 --> 01:56:29
right or whatever scenario it is and I

01:56:27 --> 01:56:30
think that's going to be way better I

01:56:28 --> 01:56:32
think it's going to be much more than

01:56:29 --> 01:56:34
Norm to have remote employees and I

01:56:31 --> 01:56:36
think this is going to be really great

01:56:33 --> 01:56:39
do you uh do you have friends or do you

01:56:35 --> 01:56:42
hear of people moving yeah I I know one

01:56:38 --> 01:56:45
family friend that moved they moved back

01:56:41 --> 01:56:47
to Michigan and uh you know they were a

01:56:44 --> 01:56:50
family with three kids living in a small

01:56:46 --> 01:56:53
apartment and like we're going

01:56:49 --> 01:56:56
insane right and they're in Tech uh

01:56:52 --> 01:56:58
usband works for Google so first of all

01:56:55 --> 01:57:01
friends of mine have are in the process

01:56:57 --> 01:57:03
of or are have already lost the business

01:57:00 --> 01:57:05
the thing that represents their passion

01:57:02 --> 01:57:06
their dream it could be small

01:57:04 --> 01:57:08
entrepreneur projects but it could be

01:57:05 --> 01:57:10
large businesses like people that run

01:57:07 --> 01:57:13
gyms like do restaurants like tons of

01:57:09 --> 01:57:15
things yeah so but also people like look

01:57:12 --> 01:57:17
them at themselves in the mirror and ask

01:57:14 --> 01:57:19
the question of like what do I want to

01:57:16 --> 01:57:22
do in life for some reason they don't

01:57:18 --> 01:57:23
hey haven't done it until Co like they

01:57:21 --> 01:57:26
really asked that question and that

01:57:22 --> 01:57:28
results often in moving or leaving the

01:57:25 --> 01:57:31
company you're with starting your own

01:57:27 --> 01:57:33
business or transitioning to different

01:57:30 --> 01:57:37
company do you think we're going to see

01:57:32 --> 01:57:38
that a lot like in um I I well I can't

01:57:36 --> 01:57:39
speak to that I mean we're definitely

01:57:37 --> 01:57:42
going to see it at a higher frequency

01:57:38 --> 01:57:44
than we did before um just because I

01:57:41 --> 01:57:46
think what you're trying to say is there

01:57:43 --> 01:57:48
are decisions that you make yourself and

01:57:45 --> 01:57:49
big life decisions that you make

01:57:47 --> 01:57:51
yourself and like I'm going to like quit

01:57:48 --> 01:57:53
my job and start a new thing there's

01:57:50 --> 01:57:55
also decisions that get made for you

01:57:52 --> 01:57:57
like I got fired from my job what am I

01:57:54 --> 01:57:59
going to do right and that's not a

01:57:56 --> 01:58:03
decision that you think about but you're

01:57:58 --> 01:58:04
forced to act okay and so I think that

01:58:02 --> 01:58:06
hose you're forced to act kind of

01:58:03 --> 01:58:08
moments where like you know Global

01:58:05 --> 01:58:11
pandemic comes and wipes out the economy

01:58:07 --> 01:58:13
and now you're business doesn't exist I

01:58:10 --> 01:58:15
think that does lead to more reflection

01:58:12 --> 01:58:17
right because you're less anchored on

01:58:14 --> 01:58:19
what you have and it's not a what do I

01:58:16 --> 01:58:22
have to lose versus what do I have to

01:58:18 --> 01:58:25
gain AB comparison it's more of a fresh

01:58:21 --> 01:58:26
slate cool well I could do anything now

01:58:24 --> 01:58:29
do I want to do the same thing I was

01:58:25 --> 01:58:32
doing did that make me happy is this now

01:58:28 --> 01:58:34
time to go back to college and take a

01:58:31 --> 01:58:36
class and learn learn a new skill is

01:58:33 --> 01:58:38
this is this a time to uh spend time

01:58:35 --> 01:58:40
with family if you can afford to do that

01:58:37 --> 01:58:42
is this time to like you know literally

01:58:39 --> 01:58:44
move in with parents right I mean all

01:58:41 --> 01:58:48
these things that were not normative

01:58:43 --> 01:58:50
before suddenly become I think uh very

01:58:47 --> 01:58:52
the value system has changed and I think

01:58:49 --> 01:58:53
that's actually a good thing in the

01:58:51 --> 01:58:57
short term at least

01:58:52 --> 01:58:59
because um it leads to you know there's

01:58:56 --> 01:59:02
kind of been an over optimization along

01:58:58 --> 01:59:04
one one set of priorities for the world

01:59:01 --> 01:59:06
and now maybe we'll get to a more

01:59:03 --> 01:59:07
balanced and more interesting world

01:59:05 --> 01:59:09
where the people are doing different

01:59:06 --> 01:59:09
hings I think it could be good I think

01:59:08 --> 01:59:11
there could be more Innovation that

01:59:09 --> 01:59:13
comes out of it for example what do you

01:59:10 --> 01:59:16
think about the all the social chaos

01:59:12 --> 01:59:19
we're in the middle of like it

01:59:15 --> 01:59:22
sucks you think it's uh let me ask you I

01:59:18 --> 01:59:25
hope you think it's all going to be okay

01:59:21 --> 01:59:27
well I think Humanity survive um the

01:59:24 --> 01:59:28
from an existential like we're not all

01:59:26 --> 01:59:29
going to kill Yeah well yeah I don't

01:59:27 --> 01:59:31
hink the virus is going to kill all all

01:59:28 --> 01:59:32
the humans um I don't think all the

01:59:30 --> 01:59:35
humans are going to kill all the humans

01:59:32 --> 01:59:37
I think that's unlikely but um I I look

01:59:34 --> 01:59:43
at it as

01:59:36 --> 01:59:45
uh um progress requires a catalyst right

01:59:42 --> 01:59:47
so so you need you need a reason for

01:59:44 --> 01:59:49
people to be willing to do things that

01:59:46 --> 01:59:52
are uncomfortable I think

01:59:48 --> 01:59:55
that the US at least but I think the

01:59:51 --> 01:59:57
world in general is a pretty uh uh

01:59:54 --> 01:59:59
unoptimal place to live in for a lot of

01:59:56 --> 02:00:00
people and I think that what we're

01:59:58 --> 02:00:03
seeing right now is we're seeing a lot

01:59:59 --> 02:00:05
of unhappiness and because because of

02:00:02 --> 02:00:06
all the pressure because of all the the

02:00:04 --> 02:00:08
Badness in the world that's coming

02:00:05 --> 02:00:09
together it's really kind of igniting

02:00:07 --> 02:00:11
some of that debate that should have

02:00:08 --> 02:00:12
happened a long time ago right I mean I

02:00:10 --> 02:00:14
think that we'll see more progress

02:00:11 --> 02:00:15
you're asking about offline you're

02:00:13 --> 02:00:16
asking about politics and wouldn't be

02:00:14 --> 02:00:17
great if politics move faster because

02:00:15 --> 02:00:20
there's all these problems in the world

02:00:16 --> 02:00:22
and we can move it well people are

02:00:19 --> 02:00:24
intentional or inherently uh

02:00:21 --> 02:00:26
conservative and so if you're talking

02:00:23 --> 02:00:27
about conservative people particularly

02:00:25 --> 02:00:29
if they have heavy burdens on their

02:00:26 --> 02:00:32
shoulders because they represent

02:00:28 --> 02:00:34
literally thousands of people um it

02:00:31 --> 02:00:36
makes sense to be conservative but on

02:00:33 --> 02:00:39
the other hand when you need change how

02:00:35 --> 02:00:40
do you get it the global pandemic will

02:00:38 --> 02:00:43
probably lead to some

02:00:39 --> 02:00:46
change and it's not a directed it's not

02:00:42 --> 02:00:47
a directed plan but I think that it

02:00:45 --> 02:00:48
leads to people asking really

02:00:46 --> 02:00:50
interesting questions and some of those

02:00:47 --> 02:00:53
questions should have been asked a long

02:00:49 --> 02:00:54
time ago well let me know if if you

02:00:52 --> 02:00:56
observed this as well something that's

02:00:53 --> 02:00:58
bothered me in the machine Learning

02:00:55 --> 02:01:01
Community I'm guessing it might be

02:00:57 --> 02:01:03
prevalent in other places is um

02:01:00 --> 02:01:06
something that feels like in 2020

02:01:02 --> 02:01:12
increase level of toxicity like people

02:01:05 --> 02:01:14
are just quicker to pile on they just be

02:01:11 --> 02:01:19
they're just harsh on each other to to

02:01:14 --> 02:01:23
like mob uh pick a person that screwed

02:01:18 --> 02:01:26
up and like make it a big thing yeah and

02:01:22 --> 02:01:28
uh is there something that we can

02:01:25 --> 02:01:31
like have you observed that in other

02:01:27 --> 02:01:32
places is there is there some way out of

02:01:30 --> 02:01:34
I think there's a inherent thing in

02:01:31 --> 02:01:36
humanity that's kind of an Us Versus

02:01:33 --> 02:01:38
Them thing which is that you want to

02:01:35 --> 02:01:41
succeed and how do you succeed well it's

02:01:37 --> 02:01:43
relative to somebody else and so what

02:01:40 --> 02:01:46
's happening in at least in some

02:01:42 --> 02:01:49
part is that with the internet and with

02:01:45 --> 02:01:52
online communication the world's getting

02:01:48 --> 02:01:55
smaller right and so we're having some

02:01:51 --> 02:01:58
of the the social ties of like my NE My

02:01:54 --> 02:02:01
Town versus your Town's football team

02:01:57 --> 02:02:04
right turn into much larger larger and

02:02:00 --> 02:02:07
yet shallower problems and uh people

02:02:03 --> 02:02:09
don't have time the incentives are

02:02:06 --> 02:02:11
clickbait and like all these things kind

02:02:08 --> 02:02:13
of really really feed into this machine

02:02:10 --> 02:02:16
and I don't know where that goes um yeah

02:02:12 --> 02:02:18
I mean the reason I think about that I I

02:02:15 --> 02:02:21
mentioned to you this offline a little

02:02:17 --> 02:02:23
bit but uh you know I have uh a few

02:02:20 --> 02:02:26
difficult conversations

02:02:22 --> 02:02:29
cheduled some of them political related

02:02:25 --> 02:02:30
some of them within the community uh

02:02:28 --> 02:02:32
difficult personalities that went

02:02:29 --> 02:02:33
hrough some stuff I mean one of them

02:02:31 --> 02:02:36
I've talked before I will talk again is

02:02:32 --> 02:02:41
Yan laon he got of a little bit of crap

02:02:35 --> 02:02:42
on Twitter for uh for uh talking about a

02:02:40 --> 02:02:45
particular paper and the bias within a

02:02:41 --> 02:02:49
data set and then there's been a huge uh

02:02:44 --> 02:02:53
in my view and I'm willing comfortable

02:02:48 --> 02:02:56
saying it uh irrational ere exagger ated

02:02:52 --> 02:02:58
pylon on his comments because uh he made

02:02:55 --> 02:03:01
pretty basic comments about the fact

02:02:57 --> 02:03:03
hat if there's bias in the data there's

02:03:00 --> 02:03:05
going to be bias in the results so we

02:03:02 --> 02:03:08
should not have bias in the data but

02:03:05 --> 02:03:11
people piled on to him because he said

02:03:07 --> 02:03:13
he trivialize the problem of bias like

02:03:10 --> 02:03:15
it's a lot more than just bias and the

02:03:12 --> 02:03:17
data but

02:03:14 --> 02:03:19
like yes that's a very good point but

02:03:16 --> 02:03:21
hat's that's not what he was saying

02:03:18 --> 02:03:24
and the

02:03:20 --> 02:03:27
response like the imply response that

02:03:23 --> 02:03:30
he's basically sexist and

02:03:26 --> 02:03:32
racist um is uh is something that

02:03:29 --> 02:03:34
completely drives away the possibility

02:03:31 --> 02:03:38
of nuance discussion one nice thing

02:03:33 --> 02:03:41
about like a podcast long form uh

02:03:37 --> 02:03:44
conversation is you can talk it out you

02:03:40 --> 02:03:46
can lay your reasoning out and even if

02:03:43 --> 02:03:49
you're wrong you can still show that

02:03:46 --> 02:03:50
you're a good human being underneath it

02:03:48 --> 02:03:52
you know your point about you can't have

02:03:49 --> 02:03:54
a productive discussion well how do you

02:03:51 --> 02:03:56
get to that point where people can turn

02:03:53 --> 02:03:58
they can learn they can listen they can

02:03:55 --> 02:04:02
think they can engage versus just being

02:03:57 --> 02:04:05
a a shallow like like and then keep

02:04:01 --> 02:04:07
moving right and I don't think that that

02:04:04 --> 02:04:10
uh progress really comes from that right

02:04:06 --> 02:04:11
and I don't think that um one should

02:04:09 --> 02:04:14
expect that I think that you you'd see

02:04:10 --> 02:04:16
that as reinforcing individual circles

02:04:13 --> 02:04:19
and the US versus them thing and I think

02:04:15 --> 02:04:23
that's fairly divisive yeah I think uh

02:04:18 --> 02:04:25
there's a big role in like the people

02:04:22 --> 02:04:28
that bother me most on Twitter when I

02:04:24 --> 02:04:31
observe things is not the people who get

02:04:27 --> 02:04:34
very emotional angry like over the top

02:04:30 --> 02:04:37
it's the people who like prop them up

02:04:33 --> 02:04:40
it's all the it's it's that I think what

02:04:36 --> 02:04:43
should be the we should teach each other

02:04:39 --> 02:04:45
is to be sort of empathetic the the

02:04:42 --> 02:04:47
thing that it's really easy to forget

02:04:44 --> 02:04:49
particularly on like Twitter or the

02:04:46 --> 02:04:51
internet or in email is that sometimes

02:04:48 --> 02:04:53
people just have a bad day yeah right

02:04:50 --> 02:04:54
you have a bad day

02:04:52 --> 02:04:55
or you're like I've been in the

02:04:53 --> 02:04:57
situation where it's like between

02:04:55 --> 02:04:59
meetings like fire off a quick response

02:04:56 --> 02:05:00
to an email because I want to like help

02:04:58 --> 02:05:03
get something

02:04:59 --> 02:05:07
unblocked phrase it really objectively

02:05:02 --> 02:05:09
wrong I screwed up and suddenly this is

02:05:06 --> 02:05:11
now something that sticks with people

02:05:08 --> 02:05:13
and it's not because they're bad it's

02:05:10 --> 02:05:16
not because you're bad it's just

02:05:12 --> 02:05:17
psychology of like you said a thing um

02:05:15 --> 02:05:19
it sticks with you you didn't mean it

02:05:16 --> 02:05:21
hat way but it really impacted somebody

02:05:18 --> 02:05:23
because the way they interpreted it and

02:05:21 --> 02:05:26
this is just an ECT of working together

02:05:22 --> 02:05:28
as humans and I have a lot of optimism

02:05:25 --> 02:05:30
in the long term the very long term

02:05:27 --> 02:05:31
about what we as Humanity can do but I

02:05:29 --> 02:05:33
think that's going to be it's just

02:05:30 --> 02:05:35
always a rough ride and you you came

02:05:32 --> 02:05:37
into this by saying like what do Co and

02:05:34 --> 02:05:40
all the the social Strife that's

02:05:36 --> 02:05:41
happening right now mean and I think

02:05:39 --> 02:05:43
that it's really bad in the short term

02:05:40 --> 02:05:46
but I think it'll lead to progress and

02:05:42 --> 02:05:48
for that I'm very

02:05:45 --> 02:05:50
thankful yeah it's painful in the short

02:05:47 --> 02:05:51
erm though well yeah I mean people are

02:05:49 --> 02:05:53
out of jobs like some people can't eat

02:05:50 --> 02:05:58
like it's horrible

02:05:52 --> 02:05:59
and um but but you know it's progress so

02:05:57 --> 02:06:02
we'll see we'll see what happens I mean

02:05:58 --> 02:06:04
the the real question is when you look

02:06:01 --> 02:06:05
back 10 years 20 years 100 years from

02:06:03 --> 02:06:08
now how do we evaluate the decisions are

02:06:04 --> 02:06:10
being made right now I think that's

02:06:07 --> 02:06:12
really the way you can frame that and

02:06:09 --> 02:06:14
look at it and you say you know you

02:06:11 --> 02:06:16
integrate across all the short-term

02:06:13 --> 02:06:19
horribleness that's happening and you

02:06:15 --> 02:06:20
look at what that means and is the you

02:06:18 --> 02:06:23
know Improvement across the world or the

02:06:19 --> 02:06:25
regression across the world uh

02:06:22 --> 02:06:26
significant enough to make it a good or

02:06:24 --> 02:06:29
bad thing I think that's the

02:06:25 --> 02:06:31
question yeah and for that it's good to

02:06:28 --> 02:06:33
study history I'm one of the big

02:06:31 --> 02:06:36
problems for me right now is I'm reading

02:06:32 --> 02:06:39
the rise and fall of the Third

02:06:35 --> 02:06:42
Reich Light reading so it's everything

02:06:38 --> 02:06:43
is just I just see parallels and every I

02:06:41 --> 02:06:48
mean it's it's you have to be really

02:06:43 --> 02:06:49
careful not to overstep it but just the

02:06:47 --> 02:06:53
thing that worries me the most is

02:06:48 --> 02:06:55
the pain that people feel when

02:06:52 --> 02:06:57
of com when a few things combined which

02:06:54 --> 02:06:59
is like economic depression which is

02:06:56 --> 02:07:02
quite possible in this country and then

02:06:58 --> 02:07:04
just being disrespected yeah uh by in

02:07:01 --> 02:07:07
some kind of way which the German people

02:07:03 --> 02:07:10
were really disrespected by most of the

02:07:06 --> 02:07:13
world uh like in a way that's over the

02:07:09 --> 02:07:15
top that something can it can build up

02:07:12 --> 02:07:18
and then all you need is a charismatic

02:07:14 --> 02:07:20
leader uh to to go either positive or

02:07:17 --> 02:07:23
negative and both work as long as

02:07:19 --> 02:07:25
they're charismatic and there it's

02:07:22 --> 02:07:27
taking advantage of again that that

02:07:24 --> 02:07:29
inflection point that the world's in and

02:07:26 --> 02:07:32
what they do with it could be good or

02:07:28 --> 02:07:35
bad and so it's a good way to think

02:07:31 --> 02:07:37
about times now like on an individual

02:07:34 --> 02:07:39
evel what we decide to do is when when

02:07:36 --> 02:07:42
history is written you know 30 years

02:07:38 --> 02:07:44
from now what happened in 2020 probably

02:07:41 --> 02:07:45
history's going to remember 2020 yeah I

02:07:43 --> 02:07:48
think

02:07:44 --> 02:07:50
so either for good or bad and it's like

02:07:47 --> 02:07:51
up up to us to write it so it's good

02:07:49 --> 02:07:55
well one of the things I've observed

02:07:50 --> 02:07:58
that I find F is most people act as

02:07:54 --> 02:08:01
though the world doesn't change you make

02:07:57 --> 02:08:03
decision knowingly right you make a

02:08:00 --> 02:08:04
decision where you're predicting the

02:08:02 --> 02:08:06
future based on what you've seen in the

02:08:03 --> 02:08:08
recent past and so if something's always

02:08:05 --> 02:08:09
been H it's rained every single day then

02:08:07 --> 02:08:12
of course you expect it to rain today

02:08:08 --> 02:08:15
too right on the other hand the world

02:08:11 --> 02:08:18
changes all the time yeah constantly

02:08:14 --> 02:08:19
like for better and For Worse right so

02:08:17 --> 02:08:22
the question is if you're interested in

02:08:18 --> 02:08:24
something that's not right what is the

02:08:21 --> 02:08:25
INF point that led to a change and you

02:08:23 --> 02:08:28
can look to history for this like what

02:08:24 --> 02:08:30
is what is the Catalyst that led to that

02:08:27 --> 02:08:32
explosion that led to that bill

02:08:29 --> 02:08:34
that led to the like you you can kind of

02:08:31 --> 02:08:36
work your way backwards from that and

02:08:33 --> 02:08:37
maybe if you pull together the right

02:08:35 --> 02:08:39
people and you get the right ideas

02:08:36 --> 02:08:40
together you can actually start driving

02:08:38 --> 02:08:43
that change and doing in a way that's

02:08:39 --> 02:08:44
productive and hurts fewer people yeah

02:08:42 --> 02:08:46
like a single person single event can

02:08:43 --> 02:08:48
turn all of absolutely everything starts

02:08:45 --> 02:08:51
omewhere and often It's a combination

02:08:47 --> 02:08:53
of multiple factors but but yeah this is

02:08:50 --> 02:08:56
these these things can be engineered

02:08:52 --> 02:08:57
that's actually the optimistic view that

02:08:55 --> 02:09:00
I'm I'm a long-term Optimist on pretty

02:08:56 --> 02:09:01
much everything and human nature you

02:08:59 --> 02:09:03
know we can look to all the negative

02:09:00 --> 02:09:05
things that that Humanity has all the

02:09:02 --> 02:09:09
pettiness and all the like self

02:09:04 --> 02:09:13
-serving and the um just the the

02:09:08 --> 02:09:14
cruelty right the the biases the just

02:09:12 --> 02:09:17
humans can be very horrible but on the

02:09:13 --> 02:09:21
other hand we're capable of amazing

02:09:16 --> 02:09:24
things and um and the progress across

02:09:20 --> 02:09:27
you know hundred-year chunks is striking

02:09:23 --> 02:09:28
and even across decades it's we've come

02:09:26 --> 02:09:29
a long ways and there's still a long

02:09:27 --> 02:09:31
ways to go but that doesn't mean that

02:09:28 --> 02:09:35
we've stopped yeah the kind of stuff

02:09:31 --> 02:09:36
we've done in the last 100 years is is

02:09:34 --> 02:09:38
unbelievable it's kind of scary to think

02:09:36 --> 02:09:41
what's going to happen next 100 year

02:09:37 --> 02:09:43
it's scary like exciting like scary in a

02:09:40 --> 02:09:44
sense that it's kind of sad that the

02:09:42 --> 02:09:47
kind of technology is going to come out

02:09:43 --> 02:09:49
in 10 20 30 years will probably too old

02:09:46 --> 02:09:51
to really appreciate cuz you don't grow

02:09:48 --> 02:09:53
up with it it'll be like kids these days

02:09:50 --> 02:09:56
with their virtual and their uh their

02:09:52 --> 02:09:58
Tik toks and stuff like this like how do

02:09:55 --> 02:10:02
this thing and like come on give me my

02:09:57 --> 02:10:05
uh you know static photo you know my

02:10:01 --> 02:10:07
Commodore 64 yeah yeah exactly okay uh

02:10:04 --> 02:10:09
sorry we kind of skipped over but let me

02:10:06 --> 02:10:12
ask on

02:10:08 --> 02:10:13
um you know the machine learning world

02:10:11 --> 02:10:16
has been kind

02:10:12 --> 02:10:19
of inspired their imagination captivated

02:10:15 --> 02:10:22
with gpt3 and these language models I

02:10:18 --> 02:10:25
thought it'd be cool to get your opinion

02:10:21 --> 02:10:28
it what what's your thoughts on this

02:10:24 --> 02:10:32
exciting world of um it connects to

02:10:28 --> 02:10:35
computation actually uh is of language

02:10:31 --> 02:10:37
models that are huge yeah and take

02:10:34 --> 02:10:41
multip many many computers not just the

02:10:36 --> 02:10:43
train but to also do inference on sure

02:10:40 --> 02:10:45
well I mean it depends on what you're

02:10:42 --> 02:10:47
speaking to there but I mean I think

02:10:44 --> 02:10:49
that there's been a pretty well

02:10:46 --> 02:10:50
understood maximum in deep learning that

02:10:48 --> 02:10:52
if you make the model bigger and you

02:10:49 --> 02:10:54
shove more data into it assuming you

02:10:51 --> 02:10:55
train it right and you have a good model

02:10:53 --> 02:10:58
architecture that you'll get a better

02:10:54 --> 02:11:01
model out and so on the one hand gpg 3

02:10:57 --> 02:11:02
was not that surprising um on the other

02:11:00 --> 02:11:06
hand a tremendous amount of engineering

02:11:02 --> 02:11:08
went into making it possible um the

02:11:05 --> 02:11:10
implications of it are pretty huge I

02:11:07 --> 02:11:11
think that when gpt2 2 came out there

02:11:09 --> 02:11:14
was a very provocative blog post from

02:11:10 --> 02:11:15
open AI talking about you know we're not

02:11:13 --> 02:11:17
going to release it because of the

02:11:14 --> 02:11:20
social damage it could cause if it's

02:11:16 --> 02:11:22
misused um I think that's still a

02:11:19 --> 02:11:25
concern I think we need to look at how

02:11:21 --> 02:11:26
um technolog is applied and you know

02:11:24 --> 02:11:28
ell-meaning tools can be applied in

02:11:25 --> 02:11:31
very horrible ways and they can have

02:11:27 --> 02:11:33
ry profound impact on that um uh I

02:11:30 --> 02:11:36
think the gpt3 is a huge technical

02:11:33 --> 02:11:38
achievement and what will GPT 4 be will

02:11:35 --> 02:11:42
probably be bigger and more expensive to

02:11:37 --> 02:11:44
train really cool uh architectural

02:11:41 --> 02:11:47
tricks do what do you think is there um

02:11:43 --> 02:11:50
I don't know how much thought you've

02:11:46 --> 02:11:52
done on distributed computing uh is

02:11:49 --> 02:11:54
there is there some technical challenges

02:11:51 --> 02:11:57
that are interesting that you're hopeful

02:11:53 --> 02:12:00
about exploring in terms of you know a

02:11:56 --> 02:12:03
system that like a piece of code that

02:11:59 --> 02:12:08
you know GPT

02:12:02 --> 02:12:10
4 uh that might have I don't know uh

02:12:07 --> 02:12:12
undreds of trillions of parameters we

02:12:09 --> 02:12:14
have to run on thousands of computers is

02:12:11 --> 02:12:17
there some is there some hope that we

02:12:13 --> 02:12:20
can make that happen yeah well I mean

02:12:16 --> 02:12:22
today you can you can write a check and

02:12:19 --> 02:12:24
get access to 1,000 TPU cores

02:12:21 --> 02:12:25
and do really interesting large scale

02:12:23 --> 02:12:28
training and inference and things like

02:12:24 --> 02:12:31
that um in Google Cloud for example

02:12:27 --> 02:12:32
right and um so I don't think it's a

02:12:30 --> 02:12:35
question about scale it's a question

02:12:31 --> 02:12:37
about utility and when I look at the

02:12:34 --> 02:12:39
Transformer series of architectures that

02:12:36 --> 02:12:40
the GPT series is based on it's

02:12:38 --> 02:12:42
really interesting to look at that

02:12:39 --> 02:12:45
because they're actually very simple

02:12:41 --> 02:12:48
designs they're not recurrent um

02:12:44 --> 02:12:49
the training regen are pretty simple um

02:12:47 --> 02:12:53
and so they don't really reflect like

02:12:48 --> 02:12:55
human brains MH right um but they're

02:12:52 --> 02:12:57
ally good at learning language models

02:12:54 --> 02:13:00
and they're unrolled enough that you get

02:12:56 --> 02:13:02
you can simulate some recurrence right

02:12:59 --> 02:13:05
and so the question I think about is

02:13:02 --> 02:13:06
where does this take us like so we can

02:13:04 --> 02:13:08
just keep scaling it have more

02:13:05 --> 02:13:10
parameters more data more things we'll

02:13:07 --> 02:13:12
get a better result for sure but are

02:13:09 --> 02:13:16
there architectural techniques that can

02:13:11 --> 02:13:18
lead to progress at a faster Pace right

02:13:15 --> 02:13:20
his is when you know how do you get uh

02:13:17 --> 02:13:22
instead of just like making it constant

02:13:19 --> 02:13:24
ime bigger how do you get like an

02:13:21 --> 02:13:26
algorithmic improvement out of this

02:13:23 --> 02:13:29
right and whether it be a new training

02:13:25 --> 02:13:31
regimen if it becomes um uh sparse

02:13:28 --> 02:13:33
networks for example the human

02:13:30 --> 02:13:36
brain is sparse all these networks are

02:13:32 --> 02:13:37
dense um the connectivity patterns can

02:13:35 --> 02:13:39
be very different I think the this is

02:13:36 --> 02:13:41
where I get very interested and I'm way

02:13:38 --> 02:13:43
out of my league on the Deep learning

02:13:40 --> 02:13:45
side of this but I think that could lead

02:13:42 --> 02:13:47
to Big breakthroughs when you talk about

02:13:44 --> 02:13:48
uh large scale networks one of the

02:13:46 --> 02:13:51
things that Jeff Dean likes to talk

02:13:47 --> 02:13:54
about and he's uh uh giv a few talks on

02:13:50 --> 02:13:56
is this idea of having a sparsely gated

02:13:53 --> 02:13:59
mixture of experts kind of a model where

02:13:55 --> 02:14:01
you have um you know different Nets that

02:13:58 --> 02:14:04
are trained and are really good at

02:14:00 --> 02:14:06
certain kinds of tasks and so you have

02:14:03 --> 02:14:07
this distributor across a cluster and so

02:14:05 --> 02:14:08
you have a lot of different computers

02:14:06 --> 02:14:10
that end up being kind of locally

02:14:07 --> 02:14:13
specialized in different domains and

02:14:09 --> 02:14:15
then when a query comes in you you gate

02:14:12 --> 02:14:16
it and you use learn techniques to route

02:14:14 --> 02:14:18
to different parts of the network and

02:14:15 --> 02:14:20
then you utilize the compute resources

02:14:17 --> 02:14:22
of the entire cluster by having

02:14:19 --> 02:14:25
specialization within it and I don't

02:14:21 --> 02:14:27
know where that goes or if it starts to

02:14:24 --> 02:14:28
when it starts to work but I think

02:14:26 --> 02:14:30
things like that could be really

02:14:27 --> 02:14:33
interesting as well and then on the data

02:14:29 --> 02:14:37
side too if you can think of data

02:14:32 --> 02:14:38
selection as a kind of programming yeah

02:14:36 --> 02:14:41
I mean at the essentially if you look at

02:14:38 --> 02:14:44
like Kathy talked about software 2.0 I

02:14:40 --> 02:14:47
mean that in a sense data is the

02:14:43 --> 02:14:48
programming yeah yeah so I I just so let

02:14:46 --> 02:14:51
me try to summarize Andre's position

02:14:47 --> 02:14:54
really quick before I disagree with it

02:14:50 --> 02:14:56
yeah um so Andre Kathy is amazing so

02:14:53 --> 02:14:57
this is nothing nothing personal with

02:14:55 --> 02:15:00
im he's he's he's an amazing engineer

02:14:56 --> 02:15:02
and and also a good uh blog post writer

02:14:59 --> 02:15:03
yeah well he's a great communicator I

02:15:01 --> 02:15:06
he's just an amazing person he's he's

02:15:02 --> 02:15:09
also really sweet um so his his basic

02:15:05 --> 02:15:11
premise is that uh software is

02:15:08 --> 02:15:14
uboptimal I think we can all agree to

02:15:10 --> 02:15:16
that uh he also points out that uh deep

02:15:14 --> 02:15:17
learning and other learning based

02:15:15 --> 02:15:19
techniques are really great because you

02:15:16 --> 02:15:23
can solve problems in uh more structured

02:15:18 --> 02:15:24
ways uh with less like ad hoc code that

02:15:22 --> 02:15:26
people write out and don't write test

02:15:23 --> 02:15:27
cases for in some cases and so they

02:15:25 --> 02:15:31
don't even know if it works in the first

02:15:26 --> 02:15:33
place um and so if you start replacing

02:15:30 --> 02:15:37
systems of uh imperative code with deep

02:15:32 --> 02:15:40
learning models then you get better a

02:15:36 --> 02:15:42
better result okay and I think that he

02:15:39 --> 02:15:45
argues that software 2.0 is a per

02:15:41 --> 02:15:47
vasively learned set of models and

02:15:44 --> 02:15:48
you get away from writing code and he's

02:15:46 --> 02:15:51
given talks where he talks about you

02:15:47 --> 02:15:53
know swapping over more and more and

02:15:50 --> 02:15:57
more parts of a code being learned and

02:15:52 --> 02:15:59
um driven that way I think that works

02:15:56 --> 02:16:01
and if you're pre predisposed to liking

02:15:58 --> 02:16:02
machine learning then I think that

02:16:00 --> 02:16:04
's that's that's definitely a good

02:16:01 --> 02:16:05
thing I think this is also good for

02:16:03 --> 02:16:07
accessibility in many ways because

02:16:04 --> 02:16:10
certain people are not going to write C

02:16:06 --> 02:16:12
code or something and so having a data

02:16:09 --> 02:16:13
driven approach to do this kind of stuff

02:16:11 --> 02:16:15
I think can be very valuable on the

02:16:12 --> 02:16:17
other hand there are huge trade-offs and

02:16:14 --> 02:16:21
it's not clear to me that software 2.0

02:16:16 --> 02:16:22
is um the answer and probably Andre

02:16:20 --> 02:16:25
wouldn't argue that it's the the answer

02:16:21 --> 02:16:27
for every problem either but um I look

02:16:24 --> 02:16:30
at machine learning as not a replacement

02:16:26 --> 02:16:31
for software 1.0 I look at it as a new

02:16:29 --> 02:16:34
programming

02:16:30 --> 02:16:36
Paradigm and so programming paradigms

02:16:33 --> 02:16:38
when you look across across domains is

02:16:35 --> 02:16:41
you know structured programming where

02:16:37 --> 02:16:43
you go from go-tos to if then else or

02:16:40 --> 02:16:44
functional programming from lisp and you

02:16:42 --> 02:16:46
start talking about higher order

02:16:43 --> 02:16:48
functions and values and things like

02:16:45 --> 02:16:50
this or you talk about objectoriented

02:16:47 --> 02:16:51
programming you talk about encapsulation

02:16:49 --> 02:16:53
subclassing inheritance you start

02:16:50 --> 02:16:55
alking about generic programming where

02:16:52 --> 02:16:58
you start talking about code reuse

02:16:54 --> 02:17:01
through um through uh specialization in

02:16:57 --> 02:17:02
different type instantiations um when

02:17:00 --> 02:17:04
you start talking about differentiable

02:17:01 --> 02:17:06
programming something that I am very

02:17:03 --> 02:17:08
excited about in the context of machine

02:17:05 --> 02:17:10
learning talking about taking functions

02:17:07 --> 02:17:12
and generating uh variance like the

02:17:09 --> 02:17:14
derivative of another function like

02:17:11 --> 02:17:16
that's a programming Paradigm that's

02:17:13 --> 02:17:18
very useful for solving certain classes

02:17:15 --> 02:17:20
of problems machine learning is amazing

02:17:17 --> 02:17:21
at solving certain classes of problems

02:17:19 --> 02:17:23
like you're not going to write a you

02:17:20 --> 02:17:26
know a cat detector or even a language

02:17:22 --> 02:17:28
translation system by writing C code

02:17:25 --> 02:17:30
that's not going to that's not a very

02:17:27 --> 02:17:32
productive way to do things anymore and

02:17:29 --> 02:17:34
so machine learning is absolutely the

02:17:31 --> 02:17:36
right way to do that in fact I would say

02:17:33 --> 02:17:37
that learn models are really the one of

02:17:35 --> 02:17:39
the best ways to work with the human

02:17:36 --> 02:17:41
world in general and so anytime you're

02:17:39 --> 02:17:43
talking about sensory input of different

02:17:40 --> 02:17:45
modalities anytime that you're talking

02:17:42 --> 02:17:47
about um generating things in a way that

02:17:44 --> 02:17:49
makes sense to a human I think that

02:17:46 --> 02:17:51
learn models are really really useful

02:17:48 --> 02:17:52
and that's because humans are very

02:17:50 --> 02:17:55
difficult to character

02:17:51 --> 02:17:58
okay and so this is a very powerful

02:17:54 --> 02:17:59
Paradigm for solving classes of problems

02:17:57 --> 02:18:01
but on the other hand uh imperative code

02:17:59 --> 02:18:04
is two you're not going to write a

02:18:00 --> 02:18:05
Bootloader for your computer in with a

02:18:03 --> 02:18:08
deep learning model deep learning models

02:18:04 --> 02:18:10
are very uh Hardware intensive they're

02:18:07 --> 02:18:14
very energy intensive because you have a

02:18:09 --> 02:18:15
lot of parameters and you can provably

02:18:13 --> 02:18:18
Implement any function with a learned

02:18:15 --> 02:18:20
model like this has been shown uh but

02:18:17 --> 02:18:22
hat doesn't make it

02:18:19 --> 02:18:23
efficient and so if you're talking about

02:18:21 --> 02:18:25
carrying about a few orders of

02:18:22 --> 02:18:27
magnitudes worth of energy usage then

02:18:24 --> 02:18:30
it's useful to have other tools in the

02:18:26 --> 02:18:31
toolbox what also robustness too I mean

02:18:29 --> 02:18:33
yeah exactly all the problems of dealing

02:18:30 --> 02:18:36
with data and bias and data all the

02:18:32 --> 02:18:38
problems of uh you know software 2.0 and

02:18:35 --> 02:18:41
one of the great things that Andre is is

02:18:37 --> 02:18:44
uh arguing towards which I completely

02:18:40 --> 02:18:45
agree with him is that when you start uh

02:18:43 --> 02:18:47
implementing things with deep learning

02:18:44 --> 02:18:50
you need to learn from software 1.0 in

02:18:46 --> 02:18:52
terms of testing continuous integration

02:18:49 --> 02:18:53
how you deploy how do you validate all

02:18:51 --> 02:18:55
these things and building Building

02:18:52 --> 02:18:57
Systems around that so that you're not

02:18:54 --> 02:18:59
just saying like o it seems like it's

02:18:56 --> 02:19:01
good ship it right well what happens

02:18:58 --> 02:19:03
when I regress something what happens

02:19:00 --> 02:19:06
when I make a classification that's

02:19:02 --> 02:19:07
wrong and now I uh hurt somebody right I

02:19:05 --> 02:19:09
mean all these things you have to reason

02:19:07 --> 02:19:12
about yeah but at the same time the

02:19:08 --> 02:19:15
bootloader that works for our for us

02:19:11 --> 02:19:17
humans is uh looks awfully a lot like a

02:19:14 --> 02:19:19
new network right so it's it's it's

02:19:16 --> 02:19:22
messy and you can cut out different

02:19:18 --> 02:19:23
parts of the brain there's a lot of this

02:19:21 --> 02:19:26
neuroplasticity work that shows that

02:19:22 --> 02:19:28
it's going to adjust it's a I mean it's

02:19:25 --> 02:19:30
a really interesting question how much

02:19:27 --> 02:19:33
of the world programming could be

02:19:29 --> 02:19:36
replaced by software 2.0 like with oh

02:19:32 --> 02:19:38
could well I mean it's provably true

02:19:35 --> 02:19:40
that you could replace all of it right

02:19:37 --> 02:19:42
so then it's question anything that's a

02:19:40 --> 02:19:45
function you can so it's not a question

02:19:41 --> 02:19:47
about if I think it's a economic

02:19:44 --> 02:19:49
question it's a what kind of talent can

02:19:46 --> 02:19:51
you get what kind of trade-offs in terms

02:19:48 --> 02:19:53
of Maintenance right those kind of

02:19:50 --> 02:19:55
questions I think what kind of data can

02:19:52 --> 02:19:58
you collect I think one of the reasons

02:19:54 --> 02:19:59
that I'm most interested in uh machine

02:19:57 --> 02:20:01
learning is a programming Paradigm is

02:19:58 --> 02:20:03
that one of the things that we've seen

02:20:00 --> 02:20:05
across Computing in general is that

02:20:02 --> 02:20:08
being laser focused on one Paradigm

02:20:04 --> 02:20:10
often put you in a box it's not super

02:20:07 --> 02:20:12
great and so you look at object ear

02:20:10 --> 02:20:13
programming like it was all the rage in

02:20:11 --> 02:20:15
the early 80s and like everything has to

02:20:12 --> 02:20:17
be objects and people forgot about

02:20:14 --> 02:20:20
functional programming even though came

02:20:16 --> 02:20:22
first and and then people rediscovered

02:20:19 --> 02:20:24
that hey if you mix functional and

02:20:21 --> 02:20:25
object oriented and structure like you

02:20:23 --> 02:20:26
mix these things together you can

02:20:24 --> 02:20:29
provide very interesting tools that are

02:20:25 --> 02:20:31
good at solving different problems and

02:20:28 --> 02:20:33
so the question there is how do you get

02:20:30 --> 02:20:36
he best way to solve the problems it's

02:20:32 --> 02:20:38
not about whose tribe should win right

02:20:36 --> 02:20:40
it's not about you know that that that

02:20:38 --> 02:20:41
shouldn't be the question the question

02:20:39 --> 02:20:43
is how do you make it so that people can

02:20:40 --> 02:20:44
solve those problems the fastest and

02:20:42 --> 02:20:46
they have the right uh Tools in their

02:20:44 --> 02:20:48
box to build good libraries and they can

02:20:45 --> 02:20:50
solve these problems and when you look

02:20:47 --> 02:20:52
at that that's like you know you look at

02:20:49 --> 02:20:53
reinforcement learning as one really

02:20:51 --> 02:20:55
interesting subdomain of this

02:20:52 --> 02:20:57
reinforcement learning often you have to

02:20:54 --> 02:21:00
have the integration of a of a learn

02:20:56 --> 02:21:02
model combined with your Atari or

02:20:59 --> 02:21:04
whatever the other scenario it is that

02:21:01 --> 02:21:06
you're you're working in you have to

02:21:03 --> 02:21:07
combine that that thing with the robot

02:21:05 --> 02:21:10
control for the

02:21:06 --> 02:21:13
arm right and so now it's not just about

02:21:09 --> 02:21:15
hat one uh Paradigm it's about

02:21:12 --> 02:21:17
integrating that with all the other

02:21:14 --> 02:21:18
systems that you have including often

02:21:16 --> 02:21:20
Legacy systems and things like this

02:21:17 --> 02:21:22
right and so to me I think that the

02:21:19 --> 02:21:23
interesting interesting thing to say is

02:21:21 --> 02:21:26
like how do you get the best out of this

02:21:23 --> 02:21:27
domain and how do you enable people to

02:21:25 --> 02:21:30
achieve things that they otherwise

02:21:26 --> 02:21:32
couldn't do without excluding all the

02:21:29 --> 02:21:35
good things we already know how to do

02:21:31 --> 02:21:38
right but okay this is just a crazy

02:21:34 --> 02:21:41
question but we talked a little about

02:21:37 --> 02:21:42
gpt3 but do you think it's possible that

02:21:40 --> 02:21:47
hese language

02:21:41 --> 02:21:50
models that uh in essence in the

02:21:46 --> 02:21:52
language domain software 2.0 could

02:21:49 --> 02:21:55
replace some aspect of compilation for

02:21:51 --> 02:21:56
example or do program synthesis replace

02:21:54 --> 02:21:59
some aspect of

02:21:56 --> 02:22:01
programming yeah absolutely so I think

02:21:58 --> 02:22:02
the that learn models in general are

02:22:00 --> 02:22:06
xtremely powerful and I think the

02:22:01 --> 02:22:09
people underestimate them um maybe you

02:22:05 --> 02:22:12
can suggest what I should do so of uh

02:22:08 --> 02:22:14
you know access to the gpt3 API would I

02:22:11 --> 02:22:16
be able to generate Swift code for

02:22:13 --> 02:22:20
example do you think that could do

02:22:15 --> 02:22:22
something interesting and so gpt3 is not

02:22:19 --> 02:22:23
probably not trained on the right Corpus

02:22:21 --> 02:22:26
o it probably has the ability to

02:22:22 --> 02:22:27
generate some Swift I bet it does um

02:22:25 --> 02:22:29
it's probably not going to generate a

02:22:26 --> 02:22:31
large enough body of Swift to be useful

02:22:28 --> 02:22:33
but but like take it a next step further

02:22:30 --> 02:22:35
like if if you had the goal of training

02:22:32 --> 02:22:39
something like gpt3 and you wanted to

02:22:34 --> 02:22:41
train it to generate source code right

02:22:38 --> 02:22:42
it could definitely do that now the

02:22:40 --> 02:22:45
question is um how do you express the

02:22:42 --> 02:22:46
intent of what you want filled in you

02:22:44 --> 02:22:48
can definitely like write write

02:22:45 --> 02:22:51
scaffolding of code and say fill in the

02:22:47 --> 02:22:52
hole and sort of put in some for Loops

02:22:50 --> 02:22:54
open put some classes or whatever and

02:22:51 --> 02:22:55
the power of these mods is

02:22:53 --> 02:22:58
impressive but there's an unsolved

02:22:54 --> 02:22:59
question at least unsolved to me which

02:22:57 --> 02:23:00
is how do I express the intent of what

02:22:58 --> 02:23:03
o fill

02:22:59 --> 02:23:05
in right and kind of what you'd really

02:23:02 --> 02:23:07
want to have and I don't know that that

02:23:05 --> 02:23:09
hese models are up to the task is you

02:23:06 --> 02:23:11
want to be able to say um here's a

02:23:08 --> 02:23:12
scaffolding and here are the assertions

02:23:10 --> 02:23:15
at the

02:23:11 --> 02:23:16
nd and the assertions always pass and

02:23:14 --> 02:23:18
so you want a generative model on the

02:23:15 --> 02:23:21
one hand yes oh that's fascinating yeah

02:23:17 --> 02:23:23
right but you also want some loop back

02:23:20 --> 02:23:25
some reinforcement learning system or

02:23:22 --> 02:23:27
something where you're actually saying

02:23:24 --> 02:23:29
like I need to hill climb towards

02:23:26 --> 02:23:31
omething that is more correct and I

02:23:28 --> 02:23:34
don't know that we have that so it would

02:23:30 --> 02:23:36
generate not only a bunch of the code

02:23:33 --> 02:23:38
but like the checks that do the testing

02:23:35 --> 02:23:39
it would generate the tests I think I

02:23:37 --> 02:23:41
think the humans would generate the

02:23:38 --> 02:23:43
tests right because the the test be

02:23:40 --> 02:23:45
fascinating if well the tests are the

02:23:42 --> 02:23:46
requirements yes but the okay so because

02:23:44 --> 02:23:48
you're have you have to express to the

02:23:45 --> 02:23:50
model what you want to you don't just

02:23:47 --> 02:23:52
want gibberish code look look at how

02:23:49 --> 02:23:54
compelling this code looks

02:23:51 --> 02:23:56
you want a story about four horned

02:23:53 --> 02:23:58
unicorns or something well okay so

02:23:55 --> 02:24:00
exactly but that's human requirements

02:23:57 --> 02:24:05
but then I thought it's a compelling

02:23:59 --> 02:24:10
idea that the gp4 model could

02:24:04 --> 02:24:13
generate uh checks like that are more um

02:24:09 --> 02:24:16
High Fidelity that check for correctness

02:24:12 --> 02:24:20
because uh the coded generates like say

02:24:15 --> 02:24:24
I ask it to generate a function that um

02:24:19 --> 02:24:26
gives me the Bacci sequence sure I don't

02:24:23 --> 02:24:28
like so so decompose the problem right

02:24:25 --> 02:24:30
so you have you have two things you have

02:24:27 --> 02:24:32
you need the ability to generate

02:24:29 --> 02:24:35
syntactically correct Swift Code that

02:24:31 --> 02:24:37
's interesting right I think GPT

02:24:34 --> 02:24:40
series of model architectures can do

02:24:36 --> 02:24:43
that but then you need the ability to

02:24:39 --> 02:24:45
add the requirements so generate

02:24:42 --> 02:24:48
Fibonacci yeah the human needs to

02:24:44 --> 02:24:50
express that goal we don't have that

02:24:47 --> 02:24:51
language that I know of no I mean it can

02:24:49 --> 02:24:53
generate

02:24:50 --> 02:24:56
have you seen with gpt3 can generate you

02:24:52 --> 02:24:59
can say I mean there's uh interface

02:24:55 --> 02:25:02
stuff like it can generate HTML it can

02:24:58 --> 02:25:04
generate uh basic for Loops that give

02:25:01 --> 02:25:06
you like right but pick HTML how do I

02:25:03 --> 02:25:09
say I want

02:25:05 --> 02:25:10
google.com well no you could say or not

02:25:08 --> 02:25:12
literally google.com how do I say I

02:25:09 --> 02:25:15
want a web page that's got a shopping

02:25:11 --> 02:25:17
cart and this and that that does that I

02:25:14 --> 02:25:18
mean so okay so just uh I don't know if

02:25:16 --> 02:25:22
you've seen these demonstrations but you

02:25:18 --> 02:25:24
type in I want a red button with the

02:25:21 --> 02:25:25
text that says hello and you type that

02:25:23 --> 02:25:28
in natural language and it generates the

02:25:24 --> 02:25:31
correct HTML done this demo it's it's

02:25:27 --> 02:25:34
kind of compelling so you have to uh uh

02:25:30 --> 02:25:36
prompt it with similar kinds of mappings

02:25:33 --> 02:25:39
of course it's probably handpicked like

02:25:35 --> 02:25:40
have to experiment they probably but the

02:25:38 --> 02:25:43
fact that they can do that once even out

02:25:39 --> 02:25:46
of like 20 yeah is uh is quite

02:25:42 --> 02:25:48
impressive again that's very basic uh

02:25:45 --> 02:25:50
like the HTML is kind of messy and and

02:25:47 --> 02:25:52
bad sure sure but yes the intent is the

02:25:50 --> 02:25:54
idea is the intent to specifi the

02:25:51 --> 02:25:57
natural language okay and so I've have

02:25:53 --> 02:25:59
not seen that that's really cool yeah

02:25:56 --> 02:26:01
yeah but the question is uh the

02:25:58 --> 02:26:04
correctness of that like visually you

02:26:00 --> 02:26:08
can check oh the button is red but the

02:26:03 --> 02:26:11
for more uh for more

02:26:07 --> 02:26:14
complicated functions where the intent

02:26:10 --> 02:26:17
is harder to check this goes into like

02:26:13 --> 02:26:19
MP completeness kind of things like I

02:26:16 --> 02:26:21
want to know that this code is correct

02:26:18 --> 02:26:24
and gener it's a giant thing

02:26:20 --> 02:26:27
that uh does some kind of calculation it

02:26:23 --> 02:26:30
seems to be working it it's interesting

02:26:26 --> 02:26:32
to think like should the system also try

02:26:29 --> 02:26:34
to generate checks for itself for

02:26:31 --> 02:26:37
correctness yeah I don't know and this

02:26:33 --> 02:26:40
is way beyond my experience the uh

02:26:36 --> 02:26:42
the thing that I think about is that

02:26:39 --> 02:26:44
here doesn't seem to be a lot of

02:26:41 --> 02:26:46
equational reasoning going on there's a

02:26:43 --> 02:26:48
lot of pattern matching and filling in

02:26:45 --> 02:26:50
and kind of propagating patterns that

02:26:47 --> 02:26:52
have been seen before into the future

02:26:49 --> 02:26:54
and into the generator result and so if

02:26:51 --> 02:26:56
you want to get correctness you kind of

02:26:53 --> 02:26:58
need theorem proving kind of things and

02:26:55 --> 02:27:01
like higher level logic and I don't know

02:26:57 --> 02:27:03
that um you could talk to Yan about that

02:27:00 --> 02:27:05
um and see and see what uh the the

02:27:02 --> 02:27:08
bright minds are thinking about right

02:27:04 --> 02:27:10
now but I don't think the GPT is in that

02:27:07 --> 02:27:13
vein it's still really cool yeah

02:27:09 --> 02:27:16
and surpris who knows you know maybe

02:27:12 --> 02:27:18
reasoning is is uh is overrated yeah is

02:27:15 --> 02:27:20
over right I mean do we reason how do

02:27:17 --> 02:27:21
you tell right are we just

02:27:19 --> 02:27:23
pattern matching based on what we have

02:27:20 --> 02:27:25
and then reverse justifying it to

02:27:22 --> 02:27:26
urselves exactly the reverse so like I

02:27:24 --> 02:27:30
think what the neural networks are

02:27:26 --> 02:27:33
missing and I think GPT for might have

02:27:29 --> 02:27:35
is to be able to uh tell stories to

02:27:32 --> 02:27:36
itself about what it did well that's

02:27:34 --> 02:27:39
what humans do right I mean you talk

02:27:35 --> 02:27:40
about uh like Network explainability

02:27:38 --> 02:27:42
right and we give noral Nets a hard time

02:27:39 --> 02:27:44
about this but humans don't know why we

02:27:41 --> 02:27:46
make decisions we have this thing called

02:27:43 --> 02:27:48
intuition and then we try to like say

02:27:45 --> 02:27:50
this feels like the right thing but why

02:27:47 --> 02:27:52
right and you know you wrestle with that

02:27:49 --> 02:27:54
when you're making hard decisions and is

02:27:51 --> 02:27:57
that science not

02:27:53 --> 02:27:59
really let me ask about a few highle

02:27:56 --> 02:28:02
questions I guess is

02:27:58 --> 02:28:05
um you've done a million things in your

02:28:01 --> 02:28:08
life and been very successful a bunch of

02:28:04 --> 02:28:12
young folks listen to this ask for

02:28:07 --> 02:28:15
advice from successful people like you

02:28:11 --> 02:28:17
h if you were to give advice to uh

02:28:14 --> 02:28:20
somebody you know another a graduate

02:28:16 --> 02:28:21
student or some high school student

02:28:19 --> 02:28:25
about uh

02:28:20 --> 02:28:27
pursuing a career in Computing or just

02:28:24 --> 02:28:28
advice about life in general is there

02:28:26 --> 02:28:31
sure is there some words of wisdom you

02:28:27 --> 02:28:34
can give them so I think you come back

02:28:30 --> 02:28:36
to change and you know profound leaps

02:28:33 --> 02:28:38
happen because people are willing to

02:28:35 --> 02:28:41
believe that change is possible and that

02:28:37 --> 02:28:42
um the world does change and are willing

02:28:40 --> 02:28:45
to do the hard thing that it takes to

02:28:41 --> 02:28:46
make change happen and whether it be

02:28:44 --> 02:28:48
implementing a new programming language

02:28:45 --> 02:28:50
or implementing a new system or

02:28:47 --> 02:28:51
implenting a new research paper

02:28:49 --> 02:28:53
designing a new thing moving the world

02:28:50 --> 02:28:55
forward in science and philosophy

02:28:52 --> 02:28:56
whatever it really comes down to

02:28:54 --> 02:28:59
somebody who's willing to put in the

02:28:55 --> 02:29:01
work right and you

02:28:58 --> 02:29:02
have the the work is hard for a whole

02:29:00 --> 02:29:08
bunch of different reasons one of which

02:29:01 --> 02:29:09
is um you uh it it's work right and so

02:29:07 --> 02:29:11
you have to have the space in your life

02:29:08 --> 02:29:12
in which you can do that work which is

02:29:10 --> 02:29:15
why going to grad school can be a

02:29:11 --> 02:29:17
beautiful thing for certain people um

02:29:14 --> 02:29:18
but also there's a self-doubt that

02:29:16 --> 02:29:21
happens like you're two years into a

02:29:17 --> 02:29:22
project is it going anywhere right right

02:29:20 --> 02:29:25
well what do you do do you do you just

02:29:21 --> 02:29:28
give up because it's hard well no I mean

02:29:24 --> 02:29:31
some people like suffering um and so you

02:29:27 --> 02:29:33
plow through it the the secret to me is

02:29:30 --> 02:29:36
that you have to love what you're doing

02:29:32 --> 02:29:38
and and follow that passion because if

02:29:35 --> 02:29:40
when you get to the hard times that's

02:29:37 --> 02:29:41
when you know if you if you love what

02:29:39 --> 02:29:46
you're doing you're willing to kind of

02:29:40 --> 02:29:48
push through and um this is really uh

02:29:45 --> 02:29:50
ard because it's it's hard to know what

02:29:47 --> 02:29:51
you will love doing until you start

02:29:49 --> 02:29:53
doing a lot of things and so that's why

02:29:50 --> 02:29:56
I think that particularly early in your

02:29:52 --> 02:29:57
career it's good to experiment do a

02:29:55 --> 02:30:00
little bit of everything go go go take

02:29:56 --> 02:30:02
the the survey class on you know four

02:29:59 --> 02:30:04
different the first half of every class

02:30:01 --> 02:30:06
in your upper division you know lessons

02:30:03 --> 02:30:07
and um just get exposure to things

02:30:05 --> 02:30:08
because certain things will resonate

02:30:06 --> 02:30:10
with you and you'll find out wow I'm

02:30:07 --> 02:30:12
really good at this I'm really smart at

02:30:09 --> 02:30:14
his well it's just because it's it

02:30:11 --> 02:30:16
works with the way your brain and when

02:30:13 --> 02:30:18
something jumps out I mean that's one of

02:30:15 --> 02:30:21
the things that people often ask about

02:30:17 --> 02:30:23
is like well I think there's bunch of

02:30:20 --> 02:30:26
cool stuff out there like how do I pick

02:30:22 --> 02:30:29
the thing like uh yeah how do you how do

02:30:25 --> 02:30:31
you hook in your life how did you just

02:30:28 --> 02:30:33
hook yourself in and stuck with it well

02:30:30 --> 02:30:36
I got lucky right I mean I think that

02:30:32 --> 02:30:40
many people uh forget that a huge amount

02:30:35 --> 02:30:44
of it or most of it is luck right so um

02:30:39 --> 02:30:45
let's not forget that um so for me I

02:30:43 --> 02:30:48
fell in love with computers early on

02:30:44 --> 02:30:51
because I'm they they spoke to me I

02:30:47 --> 02:30:56
guess uh what language did they speak

02:30:50 --> 02:30:58
basic basic yeah um but the uh uh but

02:30:55 --> 02:31:00
hen it was just kind of following a set

02:30:57 --> 02:31:02
of logical progressions but also um

02:30:59 --> 02:31:04
deciding that something that was hard

02:31:01 --> 02:31:06
was worth doing and and a lot of fun

02:31:03 --> 02:31:08
right and so I think that that is also

02:31:05 --> 02:31:10
mething that's true for many other

02:31:07 --> 02:31:13
domains which is if you find something

02:31:09 --> 02:31:15
that you love doing that's also hard if

02:31:12 --> 02:31:17
you invest yourself in it and add value

02:31:14 --> 02:31:19
to the world then it will mean something

02:31:16 --> 02:31:21
enerally right and again that can be a

02:31:18 --> 02:31:23
research paper that can be a software

02:31:20 --> 02:31:25
system that can be a new robot that can

02:31:22 --> 02:31:27
be that there's many things that that is

02:31:24 --> 02:31:29
that can be but a lot of it is like real

02:31:26 --> 02:31:33
value comes from doing things that are

02:31:28 --> 02:31:35
hard and that doesn't mean you have to

02:31:32 --> 02:31:37
suffer but um it's hard I mean you don't

02:31:34 --> 02:31:40
often hear that message we talked about

02:31:36 --> 02:31:43
it last time a little bit but I I it's

02:31:39 --> 02:31:46
one of my f not enough people talk about

02:31:42 --> 02:31:49
his this it's uh it's beautiful to hear

02:31:45 --> 02:31:51
a successful person well and self-doubt

02:31:48 --> 02:31:53
and impostor syndrome and the these are

02:31:50 --> 02:31:55
all things that uh successful people

02:31:52 --> 02:31:57
suffer with as well particularly when

02:31:54 --> 02:31:59
they put themselves in a point of being

02:31:56 --> 02:32:01
uncomfortable which um I like to do now

02:31:58 --> 02:32:04
and then just because it puts you in

02:32:00 --> 02:32:06
learning mode like if you want to if you

02:32:03 --> 02:32:08
want to grow as a person put yourself in

02:32:05 --> 02:32:09
a room with a bunch of people that know

02:32:07 --> 02:32:12
ay more about whatever you're talking

02:32:08 --> 02:32:14
about than you do and ask dumb questions

02:32:11 --> 02:32:17
and guess what smart people love to

02:32:13 --> 02:32:19
teach often not always but often and if

02:32:16 --> 02:32:20
you listen if you're prepared to listen

02:32:18 --> 02:32:21
if you're prepared to grow if you're

02:32:19 --> 02:32:24
prepared to make connections you can do

02:32:21 --> 02:32:26
some really interesting things and I

02:32:23 --> 02:32:28
think a lot of progress is made by

02:32:25 --> 02:32:31
people who kind of hop between domains

02:32:27 --> 02:32:34
now and then because they bring uh they

02:32:30 --> 02:32:36
bring a perspective into a field that

02:32:33 --> 02:32:38
nobody else has if people have only been

02:32:35 --> 02:32:40
working in that field

02:32:37 --> 02:32:43
themselves we mentioned that the

02:32:39 --> 02:32:45
universe is kind of like a compiler of

02:32:42 --> 02:32:47
you know the entirety of it the whole

02:32:44 --> 02:32:50
volution is kind of a kind of

02:32:46 --> 02:32:53
compilation maybe our us human beings

02:32:49 --> 02:32:55
are kind of compilers um let me ask the

02:32:52 --> 02:32:57
old absur question that I didn't ask

02:32:54 --> 02:32:59
you last time which is uh what's the

02:32:56 --> 02:33:02
meaning of it all is there a meaning

02:32:58 --> 02:33:04
like if you asked a compiler why what

02:33:01 --> 02:33:07
would a compiler say what's the meaning

02:33:03 --> 02:33:09
of life what's the meaning of life uh

02:33:06 --> 02:33:12
you know I'm prepared for it not to mean

02:33:08 --> 02:33:16
ything here we are all biological

02:33:11 --> 02:33:20
things programmed to survive and and

02:33:15 --> 02:33:23
propagate our our DNA um and maybe the

02:33:19 --> 02:33:24
is just a just a computer and you you

02:33:22 --> 02:33:26
just go until entropy takes over the

02:33:23 --> 02:33:29
world and or takes over the universe and

02:33:25 --> 02:33:31
then you're done um I don't think that's

02:33:28 --> 02:33:32
a very productive way to live your life

02:33:30 --> 02:33:35
if

02:33:32 --> 02:33:37
so and so I prefer to bias towards the

02:33:34 --> 02:33:39
other way which is saying the world has

02:33:36 --> 02:33:42
the universe has a lot of value and I

02:33:38 --> 02:33:43
take uh I take happiness out of other

02:33:41 --> 02:33:45
people and a lot a lot of times part of

02:33:43 --> 02:33:47
that's having kids but also the

02:33:44 --> 02:33:49
relationships you build with other

02:33:46 --> 02:33:51
people and so uh the way I try to live

02:33:48 --> 02:33:53
my life is like what can I do that has

02:33:50 --> 02:33:56
value how can I move the world forward

02:33:52 --> 02:33:58
how can I take what I'm good at and like

02:33:55 --> 02:34:00
bring it bring it into the world and how

02:33:57 --> 02:34:03
can I I'm one of these people that likes

02:33:59 --> 02:34:05
to work really hard and be very focused

02:34:02 --> 02:34:06
on the things that I do and so if I'm

02:34:04 --> 02:34:08
going to do that how can it be in a

02:34:05 --> 02:34:11
domain that actually will matter right

02:34:08 --> 02:34:12
because a lot of things that we do we

02:34:10 --> 02:34:14
find ourselves in the cycle of like okay

02:34:11 --> 02:34:16
I'm doing a thing I'm very familiar with

02:34:13 --> 02:34:18
it I've done it for a long time I've

02:34:15 --> 02:34:21
never done anything else but I'm not

02:34:18 --> 02:34:23
really learning I I'm not really I'm

02:34:20 --> 02:34:24
keeping things going but there's a

02:34:22 --> 02:34:26
younger generation that that

02:34:23 --> 02:34:28
can do the same thing maybe even better

02:34:25 --> 02:34:30
than me right maybe if I actually step

02:34:27 --> 02:34:33
out of this and jump into something I'm

02:34:29 --> 02:34:34
less comfortable with it's scary but on

02:34:32 --> 02:34:37
the other hand um it gives somebody else

02:34:34 --> 02:34:39
a new opportunity it also then put you

02:34:36 --> 02:34:41
back in learning mode and that can be

02:34:38 --> 02:34:42
really interesting and one of the things

02:34:40 --> 02:34:44
I've learned is that uh when you go

02:34:41 --> 02:34:47
through that that first you're deep into

02:34:43 --> 02:34:48
impostor syndrome but when you start

02:34:46 --> 02:34:49
working your way out you start to

02:34:47 --> 02:34:53
realize hey well there's actually a

02:34:48 --> 02:34:54
method to this and and now I'm able to

02:34:52 --> 02:34:57
add new things because I bring different

02:34:54 --> 02:34:58
perspective and this is one of the the

02:34:56 --> 02:35:01
good things about bringing different

02:34:58 --> 02:35:03
kinds of people together diversity of

02:35:00 --> 02:35:05
thought is really important and um if

02:35:02 --> 02:35:06
you can pull together people that are

02:35:04 --> 02:35:09
coming at things from different

02:35:05 --> 02:35:11
directions you often get Innovation and

02:35:08 --> 02:35:13
I I love to see that that aha moment

02:35:10 --> 02:35:14
where you're like we've like really

02:35:12 --> 02:35:16
cracked this this is something never

02:35:13 --> 02:35:18
nobody's ever done before and then if

02:35:15 --> 02:35:19
you can do it in a context where it adds

02:35:17 --> 02:35:22
value other people can build on it it

02:35:19 --> 02:35:24
helps move the world then that's what

02:35:21 --> 02:35:26
really excites me so the

02:35:23 --> 02:35:27
that kind of description of the magic of

02:35:25 --> 02:35:30
The Human Experience do you think we'll

02:35:26 --> 02:35:31
ever create that in like an AGI system

02:35:29 --> 02:35:37
you think

02:35:31 --> 02:35:39
we be able to create uh give uh give AI

02:35:36 --> 02:35:41
systems a sense of meaning where they

02:35:38 --> 02:35:43
operate in this kind of world exactly in

02:35:40 --> 02:35:44
the way you've described which is they

02:35:42 --> 02:35:47
interact with each other they interact

02:35:43 --> 02:35:51
with us humans sure sure well so I mean

02:35:46 --> 02:35:55
I why why are you being so speciest

02:35:50 --> 02:35:57
right all right so so agis versus bionet

02:35:54 --> 02:36:00
or you know versus

02:35:56 --> 02:36:02
bi um you know uh what are we but

02:35:59 --> 02:36:04
machines right we're just programmed to

02:36:01 --> 02:36:07
run our we have our objective function

02:36:03 --> 02:36:09
that we optimized for right and so we're

02:36:06 --> 02:36:11
doing our thing we think we have purpose

02:36:08 --> 02:36:13
but do we really yeah right I'm not

02:36:10 --> 02:36:16
prepared to say that th those new

02:36:12 --> 02:36:18
fangled agis have no soul just because

02:36:15 --> 02:36:20
we don't understand them right and I

02:36:17 --> 02:36:21
think that would be um when they when

02:36:19 --> 02:36:25
they exist uh that would be very

02:36:20 --> 02:36:26
premature to uh uh look at a new thing

02:36:24 --> 02:36:29
through your own lens without fully

02:36:25 --> 02:36:32
understanding it um you might be just

02:36:28 --> 02:36:33
saying that because AI systems in the

02:36:31 --> 02:36:35
future will be listening to this and

02:36:32 --> 02:36:37
then oh yeah yeah exactly you don't want

02:36:34 --> 02:36:39
o say anything please be nice to me you

02:36:36 --> 02:36:42
know when Skynet Skynet kills everybody

02:36:38 --> 02:36:45
please spare me Wise Wise uh look ahead

02:36:41 --> 02:36:46
thinking yeah but I mean I I think that

02:36:44 --> 02:36:47
people spend a lot of time worrying

02:36:45 --> 02:36:49
about this kind of stuff and I think

02:36:46 --> 02:36:51
that what we should be worrying about is

02:36:48 --> 02:36:53
how do we make the world better and the

02:36:50 --> 02:36:57
thing that I'm most scared about with

02:36:52 --> 02:36:59
agis is not that um that necessarily the

02:36:56 --> 02:37:01
Skynet will start shooting everybody

02:36:58 --> 02:37:03
with lasers and stuff like that to to

02:37:00 --> 02:37:04
use us for our

02:37:02 --> 02:37:07
calories the thing that I'm worried

02:37:03 --> 02:37:10
about is that um Humanity I think needs

02:37:06 --> 02:37:12
a challenge and if we get into a mode of

02:37:09 --> 02:37:14
not having a personal challenge not

02:37:11 --> 02:37:17
having a personal contribution whether

02:37:13 --> 02:37:18
that be like you know your kids and

02:37:16 --> 02:37:21
seeing what they grow into and helping

02:37:17 --> 02:37:22
guide them whether it be

02:37:20 --> 02:37:24
um your community that you're engaged in

02:37:21 --> 02:37:25
you're driving forward whether it be

02:37:23 --> 02:37:26
your work and the things that you're

02:37:24 --> 02:37:28
doing and the people you're working with

02:37:25 --> 02:37:30
and the products you're building and the

02:37:27 --> 02:37:34
contribution there if people don't have

02:37:29 --> 02:37:38
a objective I'm afraid what that means

02:37:33 --> 02:37:40
and um I think that this would lead to a

02:37:37 --> 02:37:43
rise of the worst part of people right

02:37:39 --> 02:37:46
instead of people striving together and

02:37:42 --> 02:37:50
trying to make uh the world better it

02:37:45 --> 02:37:52
could degrade into a very uh unpleasant

02:37:49 --> 02:37:54
world but but I don't know I mean we

02:37:51 --> 02:37:57
hopefully have a long ways to go before

02:37:53 --> 02:37:58
we discover that unfortunately we have

02:37:56 --> 02:38:00
pretty on the ground problems with the

02:37:57 --> 02:38:02
pandemic right now and so I think we

02:37:59 --> 02:38:04
should be focused on that as well yeah

02:38:01 --> 02:38:07
ultimately just as you said you're

02:38:03 --> 02:38:10
optimistic I think it helps for us to be

02:38:06 --> 02:38:12
optimistic that's uh fake it until you

02:38:09 --> 02:38:16
make it yeah well and why not what's

02:38:11 --> 02:38:18
the other side right so I mean uh

02:38:15 --> 02:38:20
I I'm not personally a very religious

02:38:17 --> 02:38:21
person but I've heard people say like oh

02:38:19 --> 02:38:24
yeah of course I believe in God of

02:38:20 --> 02:38:26
course I go to church because if God's

02:38:23 --> 02:38:27
real you know I want to be on the right

02:38:25 --> 02:38:29
side of that and if it's not real it

02:38:26 --> 02:38:32
doesn't matter doesn't matter and so you

02:38:28 --> 02:38:35
know that's that's a fair way to do it

02:38:31 --> 02:38:37
um yeah I mean the same thing with uh

02:38:34 --> 02:38:39
with nuclear deterrence all you know

02:38:36 --> 02:38:42
global warming all these things all

02:38:38 --> 02:38:45
these threats natural engineer pandemics

02:38:41 --> 02:38:50
all these threats we face I think it's

02:38:44 --> 02:38:52
uh uh it's paralyzing to be terrified of

02:38:49 --> 02:38:55
all the possible ways we could destroy

02:38:51 --> 02:38:59
ourselves I think it's much better uh or

02:38:54 --> 02:39:01
at least productive to be hopeful and to

02:38:58 --> 02:39:05
engineer defenses against these things

02:39:00 --> 02:39:07
to uh engineer a future where like you

02:39:04 --> 02:39:09
know see like a positive future and

02:39:06 --> 02:39:11
engineer that future yeah well and I

02:39:08 --> 02:39:13
think that's other another thing to

02:39:10 --> 02:39:15
think about as you know a human

02:39:12 --> 02:39:16
particularly if you're young and trying

02:39:14 --> 02:39:19
to figure out what it is that you want

02:39:15 --> 02:39:21
o be when you grow up like I am um I'm

02:39:18 --> 02:39:23
always looking for that uh the the

02:39:20 --> 02:39:26
question then is how do you want to

02:39:22 --> 02:39:28
spend your time and right now there

02:39:25 --> 02:39:30
seems to be a norm of being a

02:39:27 --> 02:39:32
consumption culture like I'm going to

02:39:29 --> 02:39:34
watch the news and and revel in how

02:39:31 --> 02:39:36
horrible everything is right now I'm

02:39:33 --> 02:39:38
going to go find out about the latest

02:39:35 --> 02:39:39
atrocity and find out all the details of

02:39:37 --> 02:39:42
like this the terrible thing that

02:39:38 --> 02:39:45
happened and be outraged by it um you

02:39:41 --> 02:39:47
can spend a lot of time watching TV and

02:39:44 --> 02:39:50
watching the new sitcom or whatever

02:39:46 --> 02:39:52
people watch these days I don't know um

02:39:49 --> 02:39:54
uh but that's a lot of hours right and

02:39:51 --> 02:39:58
those are hours that if you're tur into

02:39:53 --> 02:39:59
being productive learning growing

02:39:57 --> 02:40:01
experiencing uh you know when the

02:39:58 --> 02:40:04
pandemic's over going

02:40:00 --> 02:40:06
exploring right it leads to more growth

02:40:03 --> 02:40:08
and I think it leads to more optimism

02:40:05 --> 02:40:10
and happiness because you're you're

02:40:07 --> 02:40:11
building right you're building

02:40:09 --> 02:40:12
yourself you're building your

02:40:10 --> 02:40:13
capabilities you're building your

02:40:11 --> 02:40:16
viewpoints you're building your

02:40:12 --> 02:40:20
perspective and um I think that a lot of

02:40:15 --> 02:40:22
the cons the consuming of other people's

02:40:19 --> 02:40:24
me messages leads to kind of a negative

02:40:21 --> 02:40:26
Viewpoint which you need to be aware of

02:40:23 --> 02:40:28
what's happening because that's also

02:40:25 --> 02:40:31
important but there's a balance that um

02:40:27 --> 02:40:33
I think focusing on creation is is a

02:40:30 --> 02:40:35
very valuable thing to do yeah so what

02:40:32 --> 02:40:37
you're saying is people should focus on

02:40:34 --> 02:40:40
uh working on the sexiest feel of them

02:40:36 --> 02:40:41
all which is compiler design exactly

02:40:39 --> 02:40:43
well hey you can go work on machine

02:40:40 --> 02:40:45
learning and be crowded out by the the

02:40:42 --> 02:40:46
thousands of graduates popping out of

02:40:44 --> 02:40:48
school that all want to do the same

02:40:45 --> 02:40:50
thing or you could work in the place

02:40:47 --> 02:40:52
that people overpay you because there's

02:40:49 --> 02:40:54
not enough smart people working in it

02:40:51 --> 02:40:56
and uh here at the end of Mor's law

02:40:53 --> 02:40:59
According to some people uh actually the

02:40:55 --> 02:41:02
software is the hard part too yeah uh I

02:40:58 --> 02:41:04
mean optimization is is truly uh truly

02:41:01 --> 02:41:07
beautiful and also on the YouTube side

02:41:03 --> 02:41:10
or education side uh you know it's

02:41:06 --> 02:41:12
there's um it'd be nice to have some

02:41:09 --> 02:41:14
material that shows the beauty of

02:41:11 --> 02:41:17
compilers yeah yeah that's that's

02:41:13 --> 02:41:19
omething so that's a call for uh for

02:41:16 --> 02:41:21
people to create that kind of content as

02:41:18 --> 02:41:24
well Chris uh you're one of my favorite

02:41:20 --> 02:41:26
people to talk to I it's such a huge

02:41:23 --> 02:41:28
honor that you would waste your time

02:41:25 --> 02:41:30
talking to me uh I've always appreciate

02:41:27 --> 02:41:32
it thank you so much today the

02:41:29 --> 02:41:34
the the truth of is you spend a lot

02:41:31 --> 02:41:35
of time talking to me just on you know

02:41:33 --> 02:41:38
alks and other things like that so it's

02:41:34 --> 02:41:40
great to catch up thanks man thanks

02:41:37 --> 02:41:43
for listening to this conversation with

02:41:39 --> 02:41:45
Chris lner and thank you to our sponsors

02:41:42 --> 02:41:48
blinkist an app that summarizes key

02:41:44 --> 02:41:50
ideas from thousands of books neuro

02:41:47 --> 02:41:52
which is a maker of functional gum and

02:41:49 --> 02:41:54
mints that supercharge my mind

02:41:51 --> 02:41:57
masterclass which are online courses

02:41:54 --> 02:42:00
from World experts and finally cash app

02:41:56 --> 02:42:02
which is an app for sending money to

02:41:59 --> 02:42:04
friends please check out these sponsors

02:42:01 --> 02:42:07
in the description to get a discount and

02:42:03 --> 02:42:09
to support this podcast if you enjoy

02:42:06 --> 02:42:11
this thing subscribe on YouTube review

02:42:08 --> 02:42:14
it with f stars on Apple podcast follow

02:42:10 --> 02:42:17
on Spotify support on patreon or connect

02:42:13 --> 02:42:18
with me on Twitter at Lex Friedman and

02:42:16 --> 02:42:21
now let me leave you some words from

02:42:17 --> 02:42:23
Chris latner so much of language design

02:42:20 --> 02:42:25
is about trade-offs and you can't see

02:42:22 --> 02:42:27
those tradeoffs unless you have a

02:42:24 --> 02:42:29
community of people that really

02:42:26 --> 02:42:31
represent those different points thank

02:42:28 --> 02:42:35
you for listening and hope to see you

02:42:30 --> 02:42:35
next time

<!-- YOUTUBE_TRANSCRIPT_END -->
