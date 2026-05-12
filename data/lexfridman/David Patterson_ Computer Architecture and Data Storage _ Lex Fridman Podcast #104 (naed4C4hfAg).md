---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "naed4C4hfAg"
title: "David Patterson: Computer Architecture and Data Storage | Lex Fridman Podcast #104"
video_url: "https://www.youtube.com/watch?v=naed4C4hfAg"
thumbnail_url: "https://i.ytimg.com/vi/naed4C4hfAg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=naed4C4hfAg"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-06-27T19:21:32.000Z"
upload_date: "2020-06-27"
duration_seconds: 6591
duration_human: "1:49:51"
view_count: 278772
like_count: 5331
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:05:40.439Z"
---

# David Patterson: Computer Architecture and Data Storage | Lex Fridman Podcast #104

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=naed4C4hfAg
- video_id: naed4C4hfAg
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-06-27T19:21:32.000Z
- upload_date: 2020-06-27
- duration: 1:49:51
- view_count: 278772
- like_count: 5331
- has_subtitle: true
- language: en
- availability: public
- tags: david patterson, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

David Patterson is a Turing award winner and professor of computer science at Berkeley. He is known for pioneering contributions to RISC processor architecture used by 99% of new chips today and for co-creating RAID storage. The impact that these two lines of research and development have had on our world is immeasurable. He is also one of the great educators of computer science in the world. His book with John Hennessy "Computer Architecture: A Quantitative Approach" is how I first learned about and was humbled by the inner workings of machines at the lowest level.

Support this podcast by signing up with these sponsors:
- Jordan Harbinger Show: https://jordanharbinger.com/lex/
- Cash App - use code "LexPodcast" and download:
- Cash App (App Store): https://apple.co/2sPrUHe
- Cash App (Google Play): https://bit.ly/2MlvP5w

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
3:28 - How have computers changed?
4:22 - What's inside a computer?
10:02 - Layers of abstraction
13:05 - RISC vs CISC computer architectures
28:18 - Designing a good instruction set is an art
31:46 - Measures of performance
36:02 - RISC instruction set
39:39 - RISC-V open standard instruction set architecture
51:12 - Why do ARM implementations vary?
52:57 - Simple is beautiful in instruction set design
58:09 - How machine learning changed computers
1:08:18 - Machine learning benchmarks
1:16:30 - Quantum computing
1:19:41 - Moore's law
1:28:22 - RAID data storage
1:36:53 - Teaching
1:40:59 - Wrestling
1:45:26 - Meaning of life

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

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:07
David Patterson Turing Award winner and

00:00:04 --> 00:00:09
professor of computer science at

00:00:06 --> 00:00:11
Berkeley he's known for pioneering

00:00:08 --> 00:00:14
contributions to RISC processor

00:00:10 --> 00:00:18
architecture used by 99% of new chips

00:00:13 --> 00:00:20
today and for co-creating RAID storage

00:00:17 --> 00:00:22
the impact that these two lines of

00:00:19 --> 00:00:26
research and development have had in our

00:00:21 --> 00:00:28
world is immeasurable he's also one of

00:00:25 --> 00:00:30
the great educators of computer science

00:00:27 --> 00:00:32
in the world his book with John Hennessy

00:00:29 --> 00:00:34
is how I first learned about and was

00:00:31 --> 00:00:37
humbled by the inner workings of

00:00:33 --> 00:00:39
machines at the lowest level quick

00:00:36 --> 00:00:42
summary of the ads to sponsors the

00:00:38 --> 00:00:44
Jordan Harbinger show and cash app

00:00:41 --> 00:00:47
lease consider supporting the podcast

00:00:43 --> 00:00:50
by going to Jordan Harbinger complex and

00:00:46 --> 00:00:53
ownloading cash app and using code

00:00:49 --> 00:00:56
Lexx podcast click on the links buy the

00:00:52 --> 00:00:58
stuff it's the best way to support this

00:00:55 --> 00:01:00
podcast and in general the journey I'm

00:00:57 --> 00:01:02
on in my research and startup this is

00:00:59 --> 00:01:03
the artificial intelligence podcast if

00:01:01 --> 00:01:05
you enjoy it

00:01:02 --> 00:01:07
subscribe on YouTube review it five

00:01:04 --> 00:01:09
stars in hype a podcast supported on

00:01:06 --> 00:01:12
patreon or connect with me on Twitter

00:01:08 --> 00:01:17
and Lex Friedman spelled without the e

00:01:11 --> 00:01:19
just Fri DM a.m. as usual I'll do a few

00:01:16 --> 00:01:20
minutes of ads now and never any ads in

00:01:18 --> 00:01:21
the middle that can break the flow of

00:01:19 --> 00:01:24
the conversation

00:01:20 --> 00:01:27
this episode is supported by the Jordan

00:01:23 --> 00:01:28
Harbinger show go to Jordan Harbinger

00:01:26 --> 00:01:31
calm / Lex

00:01:27 --> 00:01:32
it's how he knows I set you on that page

00:01:30 --> 00:01:34
there's links to subscribe to it an

00:01:31 --> 00:01:37
apple podcast Spotify and everywhere

00:01:33 --> 00:01:39
lse I've been binging on this podcast

00:01:36 --> 00:01:41
it's amazing Jordan is a great human

00:01:38 --> 00:01:44
being he gets the best out of his guests

00:01:40 --> 00:01:45
- deep calls him out when it's needed it

00:01:43 --> 00:01:49
makes the whole thing fun to listen to

00:01:44 --> 00:01:50
he's interviewed Kobe Bryant Mark Cuban

00:01:48 --> 00:01:53
d Neil deGrasse Tyson and Garry

00:01:49 --> 00:01:55
Kasparov and many more I recently

00:01:52 --> 00:01:57
listened to his conversation with Frank

00:01:54 --> 00:02:00
Abagnale author of catch me if you can

00:01:56 --> 00:02:03
one of the world's most famous Kahneman

00:01:59 --> 00:02:07
perfect podcast length and topic for a

00:02:02 --> 00:02:11
recent long distance run that I did

00:02:06 --> 00:02:14
go to Jordan Harbinger complex to give

00:02:10 --> 00:02:16
him my love and to support this podcast

00:02:13 --> 00:02:19
subscribe also on Apple podcast Spotify

00:02:15 --> 00:02:22
and everywhere else this show is

00:02:18 --> 00:02:24
presented by cash app the greatest

00:02:21 --> 00:02:26
sponsor of this podcast ever and the

00:02:23 --> 00:02:29
number one finance app in the App Store

00:02:25 --> 00:02:31
when you get a used coat Lex podcast

00:02:28 --> 00:02:33
cash app lets you send money to friends

00:02:30 --> 00:02:36
buy bitcoin invest in the stock market

00:02:32 --> 00:02:38
with as little as one dollar since gas

00:02:35 --> 00:02:40
rep allows you to buy bitcoin let me

00:02:37 --> 00:02:41
ntion that cryptocurrency in the

00:02:39 --> 00:02:44
context of the history of money is

00:02:40 --> 00:02:45
fascinating I recommend the scent of

00:02:43 --> 00:02:49
money as a great book on this history

00:02:44 --> 00:02:50
also the audio book is amazing debits

00:02:48 --> 00:02:53
and credits on Ledger's started around

00:02:49 --> 00:02:55
30,000 years ago the US dollar created

00:02:52 --> 00:02:57
over two hundred years ago and the first

00:02:54 --> 00:02:59
decentralized cryptocurrency released

00:02:56 --> 00:03:02
just over ten years ago so given that

00:02:58 --> 00:03:04
history cryptocurrencies still very much

00:03:01 --> 00:03:06
in its early days of development but

00:03:03 --> 00:03:09
it's still aiming to and just might

00:03:05 --> 00:03:11
redefine the nature of money so again if

00:03:08 --> 00:03:14
you get cash out from the App Store

00:03:10 --> 00:03:16
Google Play and use the code Lex podcast

00:03:13 --> 00:03:19
you get ten dollars and cash up will

00:03:15 --> 00:03:20
also donate ten dollars to first an

00:03:18 --> 00:03:23
organization that is helping to advance

00:03:19 --> 00:03:26
robotics to stem education for young

00:03:22 --> 00:03:29
people around the world and now here's

00:03:25 --> 00:03:31
my conversation with David Patterson

00:03:28 --> 00:03:34
let's start with the big historical

00:03:30 --> 00:03:35
question how have computers changed in

00:03:33 --> 00:03:37
the past 50 years at both the

00:03:34 --> 00:03:40
fundamental architectural level and in

00:03:36 --> 00:03:42
general in your eyes well the biggest

00:03:39 --> 00:03:45
hing that happened was the invention of

00:03:41 --> 00:03:47
the microprocessor so computers that

00:03:44 --> 00:03:52
used to fill up several rooms could fit

00:03:46 --> 00:03:54
inside your cell phone and not only and

00:03:51 --> 00:03:57
how do they get smaller they got a lot

00:03:53 --> 00:04:01
faster so they're million times faster

00:03:56 --> 00:04:03
than they were 50 years ago and they're

00:04:00 --> 00:04:06
much cheaper and they're RIBA covetous

00:04:02 --> 00:04:09
you know there's seven point eight

00:04:05 --> 00:04:10
billion people on this planet probably

00:04:08 --> 00:04:13
half of them have cell phones but you

00:04:09 --> 00:04:15
know just remarkable

00:04:12 --> 00:04:17
it's probably more micro processors than

00:04:14 --> 00:04:19
there are people sure I don't know what

00:04:16 --> 00:04:22
he ratio is but I'm sure it's above one

00:04:18 --> 00:04:26
maybe it's ten to one or some number

00:04:21 --> 00:04:28
like that what is a microprocessor so a

00:04:25 --> 00:04:30
way to say what a microprocessor is to

00:04:27 --> 00:04:33
tell you what's inside a computer so a

00:04:29 --> 00:04:36
computer forever has classically had

00:04:32 --> 00:04:38
five pieces there's input and output

00:04:35 --> 00:04:41
which kind of naturally as you'd expect

00:04:37 --> 00:04:47
is input is like speech or typing and

00:04:40 --> 00:04:50
output is displays there's a memory and

00:04:46 --> 00:04:53
like the name sounds it it remembers

00:04:49 --> 00:04:55
things so it's integrated circuits whose

00:04:52 --> 00:04:57
job is you put information in and when

00:04:54 --> 00:04:59
you ask for it it comes back out that's

00:04:56 --> 00:05:02
memory and the third part is the

00:04:58 --> 00:05:04
processor where the team microprocessor

00:05:01 --> 00:05:07
comes from and that has two pieces as

00:05:03 --> 00:05:10
well and that is the control which is

00:05:06 --> 00:05:14
kind of the brain of the processor and

00:05:09 --> 00:05:16
the what's called the arithmetic unit

00:05:13 --> 00:05:18
's kind of the Brawn of the computer

00:05:15 --> 00:05:20
so if you think of the as a human body

00:05:17 --> 00:05:22
the arithmetic unit the thing that does

00:05:19 --> 00:05:24
the number crunching is the is the body

00:05:21 --> 00:05:28
and the control is the brain so those

00:05:23 --> 00:05:31
five pieces input/output memory

00:05:27 --> 00:05:34
arithmetic unit and control are have

00:05:30 --> 00:05:36
been in computers since the very dawn in

00:05:33 --> 00:05:38
the last two are considered the

00:05:35 --> 00:05:40
processor so a microprocessor simply

00:05:37 --> 00:05:43
means a process of the fits on a

00:05:39 --> 00:05:45
microchip and that was invented at about

00:05:42 --> 00:05:48
you know 40 years ago was the first

00:05:44 --> 00:05:51
microprocessor it's interesting that you

00:05:47 --> 00:05:53
refer to the arithmetic unit as the like

00:05:50 --> 00:05:55
he connected to the body and the

00:05:52 --> 00:05:58
controller's of the brain so I guess I

00:05:54 --> 00:05:59
never thought of it that was a nice way

00:05:57 --> 00:06:03
to think of it because most of the

00:05:58 --> 00:06:06
actions the microprocessor does in terms

00:06:02 --> 00:06:08
of literally sort of computation with

00:06:05 --> 00:06:10
e microprocessor does computation it

00:06:07 --> 00:06:13
processes information and most of the

00:06:09 --> 00:06:16
thing it does is basically earth net

00:06:12 --> 00:06:17
arithmetic operations what what are the

00:06:15 --> 00:06:21
operations by the way it's a lot like a

00:06:16 --> 00:06:23
calculator you know so there are add

00:06:20 --> 00:06:26
instructions a subtractive Stressless

00:06:22 --> 00:06:29
multiply and divide and

00:06:25 --> 00:06:33
kind of the brilliance of the invention

00:06:28 --> 00:06:36
of the my computer or the processor is

00:06:32 --> 00:06:38
that it performs very trivial operations

00:06:35 --> 00:06:41
but it just performs billions of them

00:06:37 --> 00:06:44
per second and what we're capable of

00:06:40 --> 00:06:46
doing is writing software that can take

00:06:43 --> 00:06:48
these very trivial instructions and have

00:06:45 --> 00:06:50
them create tasks that can do things

00:06:47 --> 00:06:53
better than human beings can do today

00:06:49 --> 00:06:55
just looking back through your career

00:06:52 --> 00:06:57
did you anticipate the kind of how good

00:06:54 --> 00:07:02
we would be able to get at doing these

00:06:56 --> 00:07:04
small basic operations I think what how

00:07:01 --> 00:07:08
many surprises along the way we just

00:07:03 --> 00:07:11
kind of set back and said wow I didn't

00:07:07 --> 00:07:13
expect it to go this fast this good well

00:07:10 --> 00:07:17
the the fundamental driving force is

00:07:12 --> 00:07:19
what scored Moore's law which was named

00:07:16 --> 00:07:22
after Gordon Moore who's a Berkeley

00:07:18 --> 00:07:24
alumnus and he made this observation

00:07:21 --> 00:07:26
very early in what are called semi

00:07:23 --> 00:07:29
conductors and semiconductors are these

00:07:25 --> 00:07:31
ideas you can build these very simple

00:07:28 --> 00:07:33
switches and you can put them on these

00:07:30 --> 00:07:36
microchips and he made his observation

00:07:32 --> 00:07:37
over 50 years ago he looked at a few

00:07:35 --> 00:07:39
years and said I think what's going to

00:07:36 --> 00:07:42
happen is the number of these little

00:07:38 --> 00:07:44
switches called transistors is going to

00:07:41 --> 00:07:48
double every year for the next decade

00:07:43 --> 00:07:50
and he said this in 1965 and in 1975 he

00:07:47 --> 00:07:53
said well maybe he's gonna double every

00:07:49 --> 00:07:57
two years and that I would other people

00:07:52 --> 00:07:59
since named that Moore's Law guided the

00:07:56 --> 00:08:03
industry and when Gordon Moore makes

00:07:58 --> 00:08:07
that prediction he he wrote a paper back

00:08:02 --> 00:08:10
in I think in the in the 70s and said

00:08:06 --> 00:08:11
not only did this going to happen he

00:08:09 --> 00:08:15
wrote what would be the implications of

00:08:10 --> 00:08:18
that and in this article from 1965 he he

00:08:14 --> 00:08:22
shows ideas like computers being in cars

00:08:17 --> 00:08:23
and computers being in something that

00:08:21 --> 00:08:25
you would buy in the grocery store and

00:08:22 --> 00:08:27
stuff like that so he kind of not only

00:08:24 --> 00:08:30
called his shot he called the

00:08:26 --> 00:08:32
implications of it so if you were in in

00:08:29 --> 00:08:35
the computing field and a few believed

00:08:31 --> 00:08:36
Moore's prediction he kind of said what

00:08:34 --> 00:08:37
he what would be happening in the

00:08:35 --> 00:08:40
future

00:08:36 --> 00:08:43
so so it's not kind of

00:08:39 --> 00:08:46
it's at one sense this is what was

00:08:42 --> 00:08:47
predicted and you could imagine it was

00:08:45 --> 00:08:48
easily believed that Moore's law was

00:08:46 --> 00:08:51
going to continue and so this would be

00:08:47 --> 00:08:54
the implications on the other side there

00:08:50 --> 00:08:58
are these shocking events in your life

00:08:53 --> 00:09:01
like I remember driving in meriem across

00:08:57 --> 00:09:04
the bay in San Francisco and seeing a

00:09:00 --> 00:09:07
bulletin board at a local Civic Center

00:09:03 --> 00:09:09
and had a URL on it uh and it was like

00:09:06 --> 00:09:11
if for all for all that's for the people

00:09:08 --> 00:09:14
at the time these first URLs and that's

00:09:10 --> 00:09:17
the you know ww select stuff with the

00:09:13 --> 00:09:22
HTTP people thought it was looks like

00:09:16 --> 00:09:24
alien alien writing right they'd see

00:09:21 --> 00:09:25
these advertisements and commercials or

00:09:23 --> 00:09:27
bulletin boards that had this alien

00:09:24 --> 00:09:29
writing on it so for the lay people is

00:09:26 --> 00:09:31
like what the hell is going on here and

00:09:28 --> 00:09:34
for those people interesting it's oh my

00:09:30 --> 00:09:36
god this stuff is getting so popular

00:09:33 --> 00:09:39
it's actually leaking out of our nerdy

00:09:35 --> 00:09:40
world and into the real world so that I

00:09:38 --> 00:09:43
mean there is events like that I think

00:09:39 --> 00:09:45
another one was I member with the in the

00:09:42 --> 00:09:46
arly days of the personal computer when

00:09:44 --> 00:09:49
we started seeing advertisements in

00:09:45 --> 00:09:51
magazines for personal computers like

00:09:48 --> 00:09:53
it's so popular that it's it made the

00:09:50 --> 00:09:55
newspapers so at one hands you know

00:09:52 --> 00:09:57
Gordon Moore predicted it and you kind

00:09:54 --> 00:09:58
of expected it to happen but when it

00:09:56 --> 00:10:03
really hit and you saw it affecting

00:09:57 --> 00:10:06
society it was it was shocking so maybe

00:10:02 --> 00:10:08
taking a step back and looking both the

00:10:05 --> 00:10:11
ngineering and philosophical

00:10:07 --> 00:10:13
perspective what what do you see as the

00:10:10 --> 00:10:16
layers of abstraction in the computer do

00:10:12 --> 00:10:18
you see a computer as a set of layers of

00:10:15 --> 00:10:21
abstractions yeah and I think that's one

00:10:17 --> 00:10:24
of the things that computer science

00:10:20 --> 00:10:26
fundamentals is the these things are

00:10:23 --> 00:10:28
ally complicated in the way we cope

00:10:25 --> 00:10:29
with complicated software and

00:10:27 --> 00:10:32
complicated hardware is these layers of

00:10:28 --> 00:10:36
abstraction and that simply means that

00:10:31 --> 00:10:39
we you know suspend disbelief and

00:10:35 --> 00:10:41
pretend that the only thing you know is

00:10:38 --> 00:10:43
that layer and you don't know anything

00:10:40 --> 00:10:45
about the layer below it and that's the

00:10:42 --> 00:10:48
way we can make very complicated things

00:10:44 --> 00:10:51
and probably it started with hardware

00:10:47 --> 00:10:53
that's the way it was done but it's been

00:10:50 --> 00:10:55
proven extremely useful and

00:10:52 --> 00:10:58
you know I would think in a modern

00:10:54 --> 00:11:00
computer today there might be 10 or 20

00:10:57 --> 00:11:02
layers of abstraction and they're all

00:10:59 --> 00:11:05
trying to kind of enforce this contract

00:11:01 --> 00:11:09
is all you know is this interface

00:11:04 --> 00:11:11
there's a set of commands that you can

00:11:08 --> 00:11:12
allow to use and you stick to those

00:11:10 --> 00:11:15
commands that we will faithfully execute

00:11:11 --> 00:11:17
that and it's like peeling the air

00:11:14 --> 00:11:19
layers of a London onion you get down

00:11:16 --> 00:11:23
there's a new set of layers and so forth

00:11:18 --> 00:11:26
so for people who want to study computer

00:11:22 --> 00:11:29
science the exciting part about it is

00:11:25 --> 00:11:31
you can keep peeling those layers you

00:11:28 --> 00:11:34
take your first course and you might

00:11:30 --> 00:11:35
learn to program in Python and then you

00:11:33 --> 00:11:37
can take a follow-on course and you can

00:11:34 --> 00:11:40
get it down to a lower level language

00:11:36 --> 00:11:42
like C and you know you can go and you

00:11:39 --> 00:11:44
can if you want to you can start getting

00:11:41 --> 00:11:46
into the hardware layers and you keep

00:11:43 --> 00:11:47
getting down all the way to that

00:11:45 --> 00:11:50
ransistor that I talked about that

00:11:46 --> 00:11:53
Gordon Moore predicted and you can

00:11:49 --> 00:11:55
understand all those layers all the way

00:11:52 --> 00:12:00
up to the highest level application

00:11:54 --> 00:12:03
software so it's it's a very kind of

00:11:59 --> 00:12:05
magnetic field if you're interested you

00:12:02 --> 00:12:08
can go into any depth and keep going in

00:12:04 --> 00:12:10
particular what's happening right now or

00:12:07 --> 00:12:12
it's happened in software last twenty

00:12:09 --> 00:12:14
ears and recently in hardware there's

00:12:11 --> 00:12:15
getting to be open sourced versions of

00:12:13 --> 00:12:19
all of these things so what open source

00:12:14 --> 00:12:23
means is what the engineer the

00:12:18 --> 00:12:26
programmer designs it's not secret the

00:12:22 --> 00:12:28
belonging to a company it's up there on

00:12:25 --> 00:12:32
the World Wide Web so you can see it so

00:12:27 --> 00:12:34
you can look at for lots of pieces of

00:12:31 --> 00:12:36
software that you use you can see

00:12:33 --> 00:12:39
xactly what the programmer does if you

00:12:35 --> 00:12:42
want to get involved that used to stop

00:12:38 --> 00:12:45
at the hardware recently there's been an

00:12:41 --> 00:12:47
efforts to make open-source hardware and

00:12:44 --> 00:12:49
those interfaces open so you can see

00:12:46 --> 00:12:50
that so instead of before you had to

00:12:48 --> 00:12:53
stop at the hardware you can now start

00:12:49 --> 00:12:55
going layer by layer below that and see

00:12:52 --> 00:12:58
what's inside there so it's it's a

00:12:54 --> 00:13:00
remarkable time that for the interested

00:12:57 --> 00:13:02
individual can really see in great depth

00:12:59 --> 00:13:05
what's really going on and the computers

00:13:01 --> 00:13:07
that power everything that we see around

00:13:04 --> 00:13:09
us are you thinking also

00:13:06 --> 00:13:12
when you say open source at the hardware

00:13:08 --> 00:13:15
level is this going to the design

00:13:11 --> 00:13:20
architecture instruction set level or is

00:13:14 --> 00:13:23
it going to literally the the you know

00:13:19 --> 00:13:25
the manufacturer of the of the actual

00:13:22 --> 00:13:27
hardware of the actual chips whether

00:13:24 --> 00:13:29
that's a six specialized a particular

00:13:26 --> 00:13:32
domain or the general yeah so let's talk

00:13:28 --> 00:13:36
about that a little bit so when you get

00:13:31 --> 00:13:40
down to the bottom layer of software the

00:13:35 --> 00:13:42
way software talks to hardware is in a

00:13:39 --> 00:13:46
vocabulary and what we call that

00:13:41 --> 00:13:48
vocabulary we call that the words of

00:13:45 --> 00:13:51
that vocabulary called instructions in

00:13:47 --> 00:13:52
the technical term for the vocabulary is

00:13:50 --> 00:13:54
instruction set

00:13:51 --> 00:13:55
so those instructions are likely we

00:13:53 --> 00:13:57
talked about earlier that can be

00:13:54 --> 00:14:00
instructions like add subtract and

00:13:56 --> 00:14:03
multiply divide there's instructions to

00:13:59 --> 00:14:05
put data into memory which is called a

00:14:02 --> 00:14:06
store instruction and to get data back

00:14:04 --> 00:14:09
which is called the load instructions

00:14:05 --> 00:14:11
and those simple instructions go back to

00:14:08 --> 00:14:13
the very dawn of computing in you know

00:14:10 --> 00:14:15
in 1950 the commercial commercial

00:14:12 --> 00:14:17
computer had these instructions so

00:14:14 --> 00:14:20
that's the instruction set that we're

00:14:16 --> 00:14:22
talking about so up until I'd say ten

00:14:19 --> 00:14:26
years ago these instruction sets are all

00:14:21 --> 00:14:29
proprietary so a very popular one is

00:14:25 --> 00:14:31
Alden by Intel the one that's in the

00:14:28 --> 00:14:33
cloud and then all the pcs in the world

00:14:30 --> 00:14:36
the Intel owns that instruction set it's

00:14:32 --> 00:14:39
referred to as the x86 there have been a

00:14:35 --> 00:14:40
sequence of ones that the first number

00:14:38 --> 00:14:42
was called 8086

00:14:39 --> 00:14:44
and since then there's been a lot of

00:14:41 --> 00:14:47
numbers but they all end in 86 so

00:14:43 --> 00:14:49
there's then that kind of family of

00:14:46 --> 00:14:52
instruction sets and that's proprietary

00:14:48 --> 00:14:55
the other one

00:14:51 --> 00:14:57
that's very popular is from arm that

00:14:54 --> 00:14:59
kind of powers all of all the cell

00:14:56 --> 00:15:02
phones in the world all the iPads in the

00:14:58 --> 00:15:06
world and a lot of things that are

00:15:01 --> 00:15:09
so-called Internet of Things devices arm

00:15:05 --> 00:15:11
and that one is also proprietary arm

00:15:08 --> 00:15:14
will license it to people for a fee but

00:15:10 --> 00:15:16
hey own that so the new idea that got

00:15:13 --> 00:15:20
started at Berkeley kind of

00:15:15 --> 00:15:23
unintentionally ten years ago is

00:15:19 --> 00:15:26
in early in my career we pioneered a way

00:15:22 --> 00:15:28
to do of these vocabularies instruction

00:15:25 --> 00:15:30
sets that was very controversial at the

00:15:27 --> 00:15:33
time at the time in the 1980s

00:15:29 --> 00:15:34
conventional wisdom was these

00:15:32 --> 00:15:37
vocabularies instruction sets should

00:15:33 --> 00:15:40
have you know powerful instructions so

00:15:36 --> 00:15:43
polysyllabic kind of words you can think

00:15:39 --> 00:15:44
of that and and so that instead of just

00:15:42 --> 00:15:48
add subtract and multiply they would

00:15:43 --> 00:15:51
have polynomial vied or sort a list and

00:15:47 --> 00:15:53
the hope was of those powerful

00:15:50 --> 00:15:57
vocabularies that make it easier for

00:15:52 --> 00:15:59
software so we thought that didn't make

00:15:56 --> 00:16:01
sense for microprocessors servers people

00:15:58 --> 00:16:03
at Berkeley and Stanford and IBM who

00:16:00 --> 00:16:06
argued the opposite and we what we

00:16:02 --> 00:16:09
called that was a reduced instruction

00:16:05 --> 00:16:12
set computer in the abbreviation was our

00:16:08 --> 00:16:14
ISC and typical for computer people we

00:16:11 --> 00:16:16
use the abbreviations start pronouncing

00:16:13 --> 00:16:18
it so risk was there so we said for

00:16:15 --> 00:16:21
microprocessors which with Gordon's

00:16:17 --> 00:16:25
Moore is changing really fast we think

00:16:20 --> 00:16:26
it's better to have a pretty simple set

00:16:24 --> 00:16:29
of instructions reduce set of

00:16:25 --> 00:16:30
instructions that that would be a better

00:16:28 --> 00:16:32
way to build microprocessors since

00:16:29 --> 00:16:34
they're going to be changing so fast due

00:16:31 --> 00:16:39
to Moore's law and then we'll just use

00:16:33 --> 00:16:41
standard software to cover the used

00:16:38 --> 00:16:43
generate more of those simple

00:16:40 --> 00:16:45
instructions and one of the pieces of

00:16:42 --> 00:16:47
software that it's in a software stack

00:16:44 --> 00:16:49
going between these layers of

00:16:46 --> 00:16:51
abstractions is called a compiler and it

00:16:48 --> 00:16:53
basically translates it's a translator

00:16:50 --> 00:16:55
between levels we said the translator

00:16:52 --> 00:16:59
will handle it so the technical question

00:16:54 --> 00:17:01
was well since there are these reduced

00:16:58 --> 00:17:04
instructions you have to execute more of

00:17:00 --> 00:17:05
them yeah that's right but maybe they

00:17:03 --> 00:17:07
execute them faster yeah that's right

00:17:04 --> 00:17:08
here's simpler so they could go faster

00:17:06 --> 00:17:10
but you have to do more of them so

00:17:07 --> 00:17:13
what's what's that trade-off look like

00:17:09 --> 00:17:16
and it ended up that we ended up

00:17:12 --> 00:17:18
executing maybe 50 percent more

00:17:15 --> 00:17:21
instructions maybe 1/3 more instructions

00:17:17 --> 00:17:24
but they ran four times faster so so

00:17:20 --> 00:17:26
this risk controversial risk ideas

00:17:23 --> 00:17:29
proved to be maybe factors of three or

00:17:25 --> 00:17:31
four better I love that this idea was

00:17:28 --> 00:17:33
controversial and

00:17:30 --> 00:17:36
most kind of like a rebellious so that's

00:17:32 --> 00:17:39
in the context of what was more

00:17:35 --> 00:17:41
conventional is the complex instruction

00:17:38 --> 00:17:45
set competing so how'd you pronounce

00:17:40 --> 00:17:49
that Sisk Sisk risk vs. Sisk and and

00:17:44 --> 00:17:51
believe it or not this sounds very very

00:17:48 --> 00:17:55
ou know who cares about this right it

00:17:50 --> 00:17:56
was it was violently debated at several

00:17:54 --> 00:17:58
conferences it's like what's the

00:17:55 --> 00:18:01
brightman ago is is and people thought

00:17:57 --> 00:18:03
risk was you know was de-evolution we're

00:18:00 --> 00:18:05
gonna make software worse by making

00:18:02 --> 00:18:08
death instructions simpler and they're

00:18:04 --> 00:18:11
fierce debates at several conferences in

00:18:07 --> 00:18:14
the 1980s and then later in the eighties

00:18:10 --> 00:18:17
that kind of settled to these benefits

00:18:13 --> 00:18:21
it's not completely intuitive to me why

00:18:16 --> 00:18:23
risk has for the most part one yes so

00:18:20 --> 00:18:24
why do that happen yeah yeah and maybe I

00:18:22 --> 00:18:27
can sort of say a bunch of dumb things

00:18:23 --> 00:18:30
that could lay the land for further

00:18:26 --> 00:18:32
commentary so to me and this is a this

00:18:29 --> 00:18:34
kind of interesting thing if you look

00:18:31 --> 00:18:37
at C++ was just see with modern

00:18:33 --> 00:18:41
compilers you really could write faster

00:18:36 --> 00:18:44
code with C++ so relying on the compiler

00:18:40 --> 00:18:46
to reduce your complicated code into

00:18:43 --> 00:18:50
something simple and fast so to me

00:18:45 --> 00:18:54
comparing risk maybe this is a dumb

00:18:49 --> 00:18:56
question but why is it that focusing the

00:18:53 --> 00:19:00
definition the design of the instruction

00:18:55 --> 00:19:03
set on very few simple instructions in

00:18:59 --> 00:19:07
the long run provide faster execution

00:19:02 --> 00:19:11
versus coming up with like I said a ton

00:19:06 --> 00:19:15
of complicated instructions then over

00:19:10 --> 00:19:16
time you know years maybe decades you

00:19:14 --> 00:19:19
come up with compilers that can reduce

00:19:15 --> 00:19:22
those into simple instructions for you

00:19:18 --> 00:19:26
yeah some let's try and split that into

00:19:21 --> 00:19:28
two pieces so if the compiler can do

00:19:25 --> 00:19:31
that for you if the pilot can take you

00:19:27 --> 00:19:35
know a complicated program and produce

00:19:30 --> 00:19:37
simpler instructions then the programmer

00:19:34 --> 00:19:40
doesn't care right programmer yeah yeah

00:19:36 --> 00:19:41
I don't care just how how fast is the

00:19:39 --> 00:19:44
computer I'm using how much does it cost

00:19:40 --> 00:19:47
and so what we what

00:19:43 --> 00:19:50
and kind of in the software industry is

00:19:46 --> 00:19:52
right around before the 1980s critical

00:19:49 --> 00:19:56
pieces of software we're still written

00:19:51 --> 00:19:58
ot in languages like C or C++ they were

00:19:55 --> 00:20:00
written in what's called assembly

00:19:57 --> 00:20:02
language where there's this kind of

00:19:59 --> 00:20:05
humans writing exactly at the

00:20:01 --> 00:20:07
instructions at the level then that a

00:20:04 --> 00:20:10
computer can understand so they were

00:20:06 --> 00:20:13
writing add subtract multiply you know

00:20:09 --> 00:20:15
instructions it's very tedious but the

00:20:12 --> 00:20:18
belief was to write this lowest level of

00:20:14 --> 00:20:20
software that the people use which are

00:20:17 --> 00:20:22
called operating systems they had to be

00:20:19 --> 00:20:24
written in assembly language because

00:20:21 --> 00:20:27
these high-level languages were just too

00:20:23 --> 00:20:30
inefficient they were too slow or the

00:20:26 --> 00:20:34
programs would be too big so that

00:20:29 --> 00:20:35
changed with a famous operating system

00:20:33 --> 00:20:38
called UNIX which is kind of the

00:20:34 --> 00:20:41
grandfather of all the operating systems

00:20:37 --> 00:20:43
today so the UNIX demonstrated that you

00:20:40 --> 00:20:46
could write something as complicated as

00:20:43 --> 00:20:50
an operating system in a language like C

00:20:45 --> 00:20:53
so once that was true then that meant we

00:20:49 --> 00:20:56
could hide the instruction set from the

00:20:52 --> 00:20:58
programmer and so that meant then it

00:20:55 --> 00:21:00
didn't really matter the programmer

00:20:57 --> 00:21:02
didn't have to write lots of these

00:20:59 --> 00:21:04
simple instructions so that was up to

00:21:01 --> 00:21:06
the compiler so that was part of our

00:21:03 --> 00:21:07
arguments for risk is if you were still

00:21:05 --> 00:21:10
writing assembly languages maybe a

00:21:06 --> 00:21:12
better case for sis constructions but if

00:21:09 --> 00:21:15
the compiler can do that it's gonna be

00:21:11 --> 00:21:17
you know that's done once the computer

00:21:14 --> 00:21:19
translates it once and then every time

00:21:16 --> 00:21:21
you run the program it runs that this

00:21:18 --> 00:21:25
potentially simpler instructions

00:21:20 --> 00:21:27
and so that that was the debate right is

00:21:24 --> 00:21:30
because and people would acknowledge

00:21:26 --> 00:21:32
that these simpler instructions could

00:21:29 --> 00:21:34
lead to a faster computer you can think

00:21:31 --> 00:21:35
of mono syllabic constructions you could

00:21:33 --> 00:21:37
say them you know if you think of

00:21:34 --> 00:21:40
reading you probably read them faster or

00:21:37 --> 00:21:41
say them faster than long instructions

00:21:39 --> 00:21:44
the same thing that analogy works pretty

00:21:40 --> 00:21:46
well for hardware and as long as you

00:21:43 --> 00:21:48
didn't have to read a lot more of those

00:21:45 --> 00:21:50
instructions you could win so that's

00:21:47 --> 00:21:53
kind of that's the basic idea for

00:21:49 --> 00:21:55
isk but it's interesting that the in

00:21:52 --> 00:21:57
that discussion of UNIX to see that

00:21:54 --> 00:22:01
here's only one step

00:21:56 --> 00:22:03
of levels of abstraction from the code

00:22:00 --> 00:22:06
that's really the closest to the machine

00:22:02 --> 00:22:09
to the code that's written by human it's

00:22:05 --> 00:22:12
uh at least to me again perhaps a dumb

00:22:08 --> 00:22:15
intuition but it feels like there might

00:22:11 --> 00:22:17
have been more layers sort of different

00:22:14 --> 00:22:20
kinds of humans stacked as well of each

00:22:16 --> 00:22:25
other so what's true and not true about

00:22:19 --> 00:22:30
what you said is several of the layers

00:22:24 --> 00:22:32
of software like so the if you hear two

00:22:29 --> 00:22:34
layers would be suppose we just talked

00:22:32 --> 00:22:36
about two layers that would be the

00:22:33 --> 00:22:40
operating system like you get from from

00:22:35 --> 00:22:42
Microsoft or from Apple like iOS or the

00:22:39 --> 00:22:44
Windows operating system and let's say

00:22:41 --> 00:22:49
applications that run on top of it like

00:22:43 --> 00:22:52
Word or Excel so both the operating

00:22:48 --> 00:22:54
system could be written in C and the

00:22:51 --> 00:22:57
application could be written in C so but

00:22:53 --> 00:22:59
you could construct those two layers and

00:22:56 --> 00:23:02
the applications absolutely do call upon

00:22:58 --> 00:23:04
the operating system and the change was

00:23:02 --> 00:23:06
that both of them could be written in

00:23:03 --> 00:23:08
higher-level languages so it's one step

00:23:05 --> 00:23:11
of a translation but you can still build

00:23:07 --> 00:23:13
many layers of abstraction of software

00:23:10 --> 00:23:18
on top of that and that's how how things

00:23:12 --> 00:23:21
are done today so still today many of

00:23:17 --> 00:23:23
the layers that you'll you'll deep deal

00:23:20 --> 00:23:28
with you may deal with debuggers you may

00:23:22 --> 00:23:31
deal with linkers there's libraries many

00:23:27 --> 00:23:35
of those today will be written in c++

00:23:30 --> 00:23:37
say even though that language is pretty

00:23:34 --> 00:23:41
ancient and even the Python interpreter

00:23:36 --> 00:23:44
is probably written in C or C++ so lots

00:23:41 --> 00:23:47
of layers there are probably written in

00:23:43 --> 00:23:50
these some old fashioned efficient

00:23:46 --> 00:23:55
languages that still take one step to

00:23:49 --> 00:23:57
produce these instructions produce RISC

00:23:54 --> 00:24:00
instructions but they're composed each

00:23:56 --> 00:24:02
layer of software invokes one another

00:23:59 --> 00:24:05
through these interfaces and you can get

00:24:01 --> 00:24:07
en layers of software that way so in

00:24:04 --> 00:24:10
general the risk was developed here

00:24:06 --> 00:24:11
Berkeley it was kind of the three places

00:24:09 --> 00:24:14
that were

00:24:10 --> 00:24:16
these radicals that advocated for this

00:24:13 --> 00:24:19
against the rest of community where IBM

00:24:15 --> 00:24:24
Berkeley and Stanford you're one of

00:24:18 --> 00:24:28
these radicals and how radical did you

00:24:23 --> 00:24:31
feel how confident did you feel how

00:24:27 --> 00:24:33
doubtful were you that risk might be the

00:24:30 --> 00:24:35
right approach because it may you can

00:24:32 --> 00:24:38
also Intuit that is kind of taking a

00:24:34 --> 00:24:41
step back into simplicity not forward

00:24:37 --> 00:24:44
into simplicity yeah no it was easy to

00:24:40 --> 00:24:46
make yeah it was easy to make the

00:24:43 --> 00:24:49
argument against it well this was my

00:24:45 --> 00:24:50
colleague John Hennessy at Stanford and

00:24:48 --> 00:24:54
I we were both assistant professors and

00:24:49 --> 00:24:57
for me I just believed in the power of

00:24:53 --> 00:24:59
our ideas I thought what we were saying

00:24:56 --> 00:25:02
made sense Moore's Law is going to move

00:24:58 --> 00:25:04
fast the other thing that I didn't

00:25:01 --> 00:25:07
mention is one of the surprises of these

00:25:03 --> 00:25:08
complex instruction sets you could

00:25:06 --> 00:25:10
certainly write these complex

00:25:07 --> 00:25:12
instructions if the programmer is

00:25:09 --> 00:25:14
writing them in themselves it turned out

00:25:11 --> 00:25:16
o be kind of difficult for the compiler

00:25:13 --> 00:25:18
to generate those complex instructions

00:25:15 --> 00:25:21
kind of ironically you'd have to find

00:25:17 --> 00:25:23
the right circumstances that that just

00:25:20 --> 00:25:24
exactly fit this complex instruction it

00:25:22 --> 00:25:26
was actually easier for the compiler to

00:25:23 --> 00:25:29
generate these simple instructions so

00:25:25 --> 00:25:31
not only did these complex instructions

00:25:28 --> 00:25:34
make the hard work more difficult to

00:25:30 --> 00:25:37
build often the compiler wouldn't even

00:25:33 --> 00:25:40
use them and so it's harder to build the

00:25:36 --> 00:25:41
compiler doesn't use them that much the

00:25:39 --> 00:25:43
simple instructions go better with

00:25:40 --> 00:25:45
Moore's Law that's you know the number

00:25:42 --> 00:25:47
of transistors is doubling every every

00:25:44 --> 00:25:50
two years so we're gonna have you know

00:25:46 --> 00:25:51
the you want to reduce the time to

00:25:49 --> 00:25:53
design the microprocessor that may be

00:25:50 --> 00:25:55
more important than these number

00:25:52 --> 00:25:59
instructions so I think we believed in

00:25:54 --> 00:26:01
the that we were right that this was the

00:25:58 --> 00:26:03
best idea then the question became in

00:26:00 --> 00:26:06
these debates well yeah that's a good

00:26:02 --> 00:26:07
technical idea but in the business world

00:26:05 --> 00:26:11
this doesn't matter there's other things

00:26:06 --> 00:26:13
that matter it's like arguing that if

00:26:10 --> 00:26:15
there's a standard with the railroad

00:26:12 --> 00:26:17
tracks and you've come up with a better

00:26:14 --> 00:26:19
with but the whole world has covered

00:26:16 --> 00:26:22
railroad tracks so you'll your ideas

00:26:18 --> 00:26:23
have no chance of success

00:26:21 --> 00:26:25
commercial success it was technically

00:26:22 --> 00:26:27
right but commercially it'll be

00:26:24 --> 00:26:30
insignificant yeah this it's kind of sad

00:26:26 --> 00:26:33
that this world the history of human

00:26:29 --> 00:26:35
civilization is full of good ideas that

00:26:32 --> 00:26:39
lost because somebody else came along

00:26:34 --> 00:26:40
first with a worse idea and it's good

00:26:38 --> 00:26:43
that in the computing world at least

00:26:39 --> 00:26:44
some of these have well well you could

00:26:42 --> 00:26:48
are I mean it's probably still sisk

00:26:43 --> 00:26:50
people that say yeah still are but and

00:26:47 --> 00:26:54
what happened was what was interesting

00:26:49 --> 00:26:56
Intel a bunch of the system companies

00:26:53 --> 00:27:00
with Sisk instruction sets of vocabulary

00:26:55 --> 00:27:03
they gave up but not Intel what Intel

00:26:59 --> 00:27:07
did to its credit because Intel's

00:27:02 --> 00:27:09
vocabulary was in the in the personal

00:27:06 --> 00:27:11
computer and so that was a very valuable

00:27:08 --> 00:27:15
vocabulary because the way we distribute

00:27:10 --> 00:27:16
software is in those actual instructions

00:27:14 --> 00:27:19
it's in the instructions of that

00:27:15 --> 00:27:20
instruction set so they then you don't

00:27:18 --> 00:27:23
get that source code what the

00:27:19 --> 00:27:24
programmers wrote you get after it's

00:27:22 --> 00:27:27
been translated into the last level

00:27:23 --> 00:27:29
that's if you were to get a floppy disk

00:27:26 --> 00:27:31
or download software it's in the

00:27:28 --> 00:27:34
instructions that instruction set so the

00:27:30 --> 00:27:37
x86 instruction set was very valuable so

00:27:33 --> 00:27:41
what Intel did cleverly and amazingly is

00:27:36 --> 00:27:43
they had their chips in hardware do a

00:27:40 --> 00:27:45
translation step they would take these

00:27:42 --> 00:27:47
complex instructions and translate them

00:27:44 --> 00:27:50
into essentially in RISC instructions in

00:27:46 --> 00:27:53
Hardware on the fly you know at at

00:27:49 --> 00:27:55
gigahertz clock speeds and then any good

00:27:52 --> 00:27:57
idea that risk people had they could use

00:27:54 --> 00:28:01
and they could still be compatible with

00:27:56 --> 00:28:04
us with this really valuable PC software

00:28:00 --> 00:28:06
base and which also had very

00:28:03 --> 00:28:09
high volumes you know a hundred million

00:28:05 --> 00:28:12
personal computers per year so the sisk

00:28:08 --> 00:28:18
architecture in the business world was

00:28:11 --> 00:28:22
actually one in in this PC era so just

00:28:17 --> 00:28:27
going back to the the time of designing

00:28:21 --> 00:28:28
risk when you design an instruction set

00:28:26 --> 00:28:30
architecture do you think like a

00:28:27 --> 00:28:33
programmer do you think like a

00:28:29 --> 00:28:38
microprocessor engineer do you think

00:28:32 --> 00:28:40
like a artist a philosopher do you think

00:28:37 --> 00:28:44
in software and hardware I mean is it

00:28:39 --> 00:28:45
art I see science yeah I'd say I think

00:28:43 --> 00:28:50
designing a goods instruction set as an

00:28:44 --> 00:28:53
art and I think you're trying to balance

00:28:49 --> 00:28:57
the the simplicity and speed of

00:28:52 --> 00:28:59
execution with how well easy it will be

00:28:56 --> 00:29:01
for compilers to use it alright you're

00:28:58 --> 00:29:04
trying to create an instruction set that

00:29:00 --> 00:29:07
everything in there can be used by

00:29:03 --> 00:29:08
compilers there's not things that are

00:29:06 --> 00:29:09
missing

00:29:07 --> 00:29:12
that'll make it difficult for the

00:29:08 --> 00:29:14
program to run they run efficiently but

00:29:11 --> 00:29:16
you want it to be easy to build as well

00:29:13 --> 00:29:17
so it's that kind of so you're thinking

00:29:15 --> 00:29:19
I'd say you're thinking hard we're

00:29:16 --> 00:29:22
trying to find a hardware software

00:29:18 --> 00:29:25
compromise that'll work well and and

00:29:21 --> 00:29:27
it's you know it's you know it's a

00:29:24 --> 00:29:30
matter of taste right it's it's kind of

00:29:26 --> 00:29:32
un to build instruction sets it's not

00:29:29 --> 00:29:34
hat hard to build an instruction set

00:29:31 --> 00:29:37
but to build one that catches on and

00:29:33 --> 00:29:39
people use you know you have to be you

00:29:36 --> 00:29:41
know fortunate to be the right place at

00:29:38 --> 00:29:44
he right time or have a design that

00:29:40 --> 00:29:47
people really like are using metrics

00:29:43 --> 00:29:49
ays is it quantifiable because you kind

00:29:46 --> 00:29:50
of have to anticipate the kind of

00:29:48 --> 00:29:53
programs that people will write yet

00:29:49 --> 00:29:55
ahead of time so is that can you use

00:29:52 --> 00:29:58
numbers can use metrics can you quantify

00:29:54 --> 00:29:59
something ahead of time or is this again

00:29:57 --> 00:30:02
that's the art part where you're kind of

00:29:58 --> 00:30:05
knows it's a a big a big change kind of

00:30:01 --> 00:30:08
what happened I think from Hennessey's

00:30:04 --> 00:30:12
and my perspective in the 1980s what

00:30:07 --> 00:30:16
happened was going from kind of really

00:30:11 --> 00:30:19
ou know taste and hunches to

00:30:15 --> 00:30:22
quantifiable in in fact he and I wrote a

00:30:18 --> 00:30:23
textbook at the end of the 1980s called

00:30:21 --> 00:30:26
computer architecture a quantitative

00:30:22 --> 00:30:29
approach I heard of that and and it's

00:30:25 --> 00:30:31
the thing it it had a pretty big

00:30:28 --> 00:30:35
impact in the field because we went

00:30:30 --> 00:30:36
from textbooks that kind of listed so

00:30:34 --> 00:30:38
here's what this computer does and

00:30:35 --> 00:30:39
here's the pros and cons and here's what

00:30:37 --> 00:30:41
his computer doesn't pros and cons to

00:30:38 --> 00:30:42
something where there were formulas

00:30:40 --> 00:30:44
in equations where you could measure

00:30:41 --> 00:30:50
things so specifically for instruction

00:30:43 --> 00:30:53
sets what we do in some other fields do

00:30:49 --> 00:30:56
is we agree upon a set of programs which

00:30:52 --> 00:30:58
we call benchmarks and a suite of

00:30:55 --> 00:31:01
programs and then you develop both the

00:30:57 --> 00:31:06
hardware and the compiler and you get

00:31:00 --> 00:31:09
numbers on how well your your computer

00:31:05 --> 00:31:10
does given its instruction set and how

00:31:08 --> 00:31:12
ell you implemented it in your

00:31:09 --> 00:31:14
microprocessor and how good your

00:31:11 --> 00:31:16
compilers are and in computer

00:31:13 --> 00:31:18
architecture we you know using

00:31:15 --> 00:31:20
professors terms we grade on a curve

00:31:17 --> 00:31:22
rather than greater than absolute scale

00:31:19 --> 00:31:24
so when you say you know this these

00:31:21 --> 00:31:25
programs run this fast well that's kind

00:31:23 --> 00:31:27
of interesting but how do you know it's

00:31:24 --> 00:31:30
better while you compare it to other

00:31:26 --> 00:31:33
computers at the same time so the best

00:31:29 --> 00:31:36
way we know how to make turned it into a

00:31:32 --> 00:31:39
kind of more science and experimental

00:31:35 --> 00:31:40
and quantitative is to compare yourself

00:31:38 --> 00:31:42
to other computers or the same era that

00:31:39 --> 00:31:45
have the same access the same kind of

00:31:41 --> 00:31:48
technology on commonly agreed benchmark

00:31:44 --> 00:31:50
programs so maybe two toss-up two

00:31:47 --> 00:31:52
possible directions we can go one is

00:31:49 --> 00:31:55
what are the different trade-offs in

00:31:51 --> 00:31:57
designing architectures Ubben are you

00:31:54 --> 00:32:00
talking about Siskin risk but maybe a

00:31:56 --> 00:32:02
little bit more detail in terms of

00:31:59 --> 00:32:05
specific features that you were thinking

00:32:01 --> 00:32:07
about and the other side is what are the

00:32:04 --> 00:32:09
metrics that you're thinking about when

00:32:06 --> 00:32:13
looking at these trade-offs yeah well

00:32:08 --> 00:32:14
et's talk about the metrics so during

00:32:12 --> 00:32:17
these debates we actually had kind of a

00:32:13 --> 00:32:19
hard time explaining convincing people

00:32:16 --> 00:32:22
the ideas and partly we didn't have a

00:32:18 --> 00:32:25
formula to explain it and a few years

00:32:21 --> 00:32:28
into it we hit upon the formula that

00:32:24 --> 00:32:30
helped explain what was going on and I

00:32:27 --> 00:32:34
think if we can do this see how it works

00:32:29 --> 00:32:37
orally just is this so the yes if I can

00:32:33 --> 00:32:39
do a formula or Li L C so the so

00:32:36 --> 00:32:41
fundamentally the way you measure

00:32:38 --> 00:32:45
performance is how long does it take a

00:32:40 --> 00:32:47
program to run a program if you have ten

00:32:44 --> 00:32:48
programs and typically these benchmarks

00:32:46 --> 00:32:50
were sweet because you'd want to have

00:32:47 --> 00:32:52
ten programs so they could represents

00:32:49 --> 00:32:54
lots of different applications so for

00:32:51 --> 00:32:55
these ten programs how long they take to

00:32:53 --> 00:32:57
run

00:32:54 --> 00:32:59
ow when you're trying to explain why it

00:32:56 --> 00:33:01
ook so long you could factor how long

00:32:58 --> 00:33:06
it takes a program to run into three

00:33:00 --> 00:33:08
factors one of the first one is how many

00:33:05 --> 00:33:10
instructions did it take to execute so

00:33:07 --> 00:33:11
that's the that's the what we've been

00:33:09 --> 00:33:12
talking about you know the instructions

00:33:10 --> 00:33:15
of Academy

00:33:11 --> 00:33:17
how many did it take all right the next

00:33:14 --> 00:33:19
question is how long did each

00:33:16 --> 00:33:22
instruction take to run on average so

00:33:18 --> 00:33:24
you multiply the number instructions

00:33:21 --> 00:33:26
times how long it took to run and that

00:33:23 --> 00:33:29
gets you help okay so that's but now

00:33:25 --> 00:33:31
let's look at this metric of how long

00:33:28 --> 00:33:33
did it take the instruction to run well

00:33:30 --> 00:33:35
it turns out the way we could build

00:33:32 --> 00:33:37
computers today is they all have a clock

00:33:34 --> 00:33:41
and you've seen this when you if you buy

00:33:36 --> 00:33:44
a microprocessor it'll say 3.1 gigahertz

00:33:40 --> 00:33:46
or 2.5 gigahertz and more gigahertz is

00:33:43 --> 00:33:50
good well what that is is the speed of

00:33:45 --> 00:33:53
the clock so 2.5 gigahertz turns out to

00:33:49 --> 00:33:55
be 4 billions of instruction or 4

00:33:52 --> 00:33:58
nanoseconds so that's the clock cycle

00:33:54 --> 00:34:00
time but there's another factor which is

00:33:57 --> 00:34:02
what's the average number of clock

00:33:59 --> 00:34:04
cycles that takes per instructions so

00:34:01 --> 00:34:06
it's number of instructions average

00:34:03 --> 00:34:06
number of clock cycles in the clock

00:34:05 --> 00:34:09
cycle time

00:34:05 --> 00:34:12
so in these risks ist's debates we would

00:34:08 --> 00:34:14
we they would concentrate on but wrist

00:34:11 --> 00:34:16
makes needs to take more instructions

00:34:13 --> 00:34:18
and we'd argue what maybe the clock

00:34:15 --> 00:34:21
cycle is faster but what the real big

00:34:17 --> 00:34:23
difference was was the number of clock

00:34:20 --> 00:34:25
cycles per instruction or instruction as

00:34:22 --> 00:34:27
fascinating what about the mess up the

00:34:24 --> 00:34:29
beautiful mess of parallelism in the

00:34:26 --> 00:34:31
whole picture parallelism which has to

00:34:28 --> 00:34:32
do was say how many instructions could

00:34:30 --> 00:34:35
execute in parallel and things like that

00:34:31 --> 00:34:36
you could think of that as affecting the

00:34:34 --> 00:34:38
clock cycles per instruction because

00:34:35 --> 00:34:39
it's the average clock cycles per

00:34:37 --> 00:34:42
instruction so when you're running a

00:34:38 --> 00:34:45
program if it took a hundred billion

00:34:41 --> 00:34:47
instructions and on average it took two

00:34:44 --> 00:34:48
clock cycles per instruction and they

00:34:46 --> 00:34:50
were four nanoseconds you could multiply

00:34:47 --> 00:34:52
that out and see how long it took to run

00:34:49 --> 00:34:53
and there's all kinds of tricks to try

00:34:51 --> 00:34:57
and reduce the number of clock cycles

00:34:52 --> 00:34:59
per instruction but it turned out that

00:34:56 --> 00:35:01
he way they would do these complex

00:34:58 --> 00:35:03
instructions is they would actually

00:35:00 --> 00:35:06
build what we would call an interpreter

00:35:02 --> 00:35:08
in a simpler a very simple hardware

00:35:05 --> 00:35:10
interpreter but it turned out that for

00:35:07 --> 00:35:12
sis constructions if you had to use one

00:35:09 --> 00:35:14
of those interpreters it would be like

00:35:11 --> 00:35:17
10 clock cycles per instruction where

00:35:13 --> 00:35:19
the risk instructions could be too so

00:35:16 --> 00:35:21
there'd be this factor of five advantage

00:35:18 --> 00:35:24
in clock cycles per instruction we have

00:35:20 --> 00:35:25
to execute say 25 or 50 percent more

00:35:23 --> 00:35:26
instructions so that's where the wind

00:35:24 --> 00:35:28
would come and then you could make an

00:35:25 --> 00:35:30
argument whether the clock cycle times

00:35:27 --> 00:35:33
are the same or not but pointing out

00:35:29 --> 00:35:35
hat we could divide the benchmark

00:35:32 --> 00:35:37
results time per program into three

00:35:34 --> 00:35:39
factors and the biggest difference

00:35:36 --> 00:35:41
between risk consists was the clock

00:35:38 --> 00:35:42
cycles per you execute a few more

00:35:40 --> 00:35:44
instructions but the clock cycles per

00:35:41 --> 00:35:47
instruction is much less and that was

00:35:43 --> 00:35:50
what this debate once we made that

00:35:46 --> 00:35:54
argument then people say okay I get it

00:35:49 --> 00:35:57
and so we went from it was outrageously

00:35:53 --> 00:36:00
controversial in you know 1982 that

00:35:56 --> 00:36:00
maybe probably by 1984 so people said oh

00:35:59 --> 00:36:02
yeah

00:35:59 --> 00:36:06
technically they've got a good argument

00:36:01 --> 00:36:08
what are the instructions in the RISC

00:36:05 --> 00:36:10
instruction set just to get an intuition

00:36:07 --> 00:36:14
okay

00:36:09 --> 00:36:17
1995 I was asked scientific the future

00:36:13 --> 00:36:19
of what microprocessor so I and that

00:36:16 --> 00:36:21
well as I'd seen these predictions and

00:36:18 --> 00:36:23
usually people predict something

00:36:20 --> 00:36:26
outrageous just to be entertaining right

00:36:22 --> 00:36:28
and so my prediction for 2020 was you

00:36:25 --> 00:36:30
know things are gonna be pretty much

00:36:27 --> 00:36:32
they're gonna look very familiar to what

00:36:29 --> 00:36:34
hey are and they are in if you were to

00:36:31 --> 00:36:35
read the article you know the things I

00:36:33 --> 00:36:37
said are pretty much true the

00:36:34 --> 00:36:39
instructions that have been around

00:36:36 --> 00:36:41
forever are kind of the same and that's

00:36:38 --> 00:36:43
the outrageous prediction actually yeah

00:36:40 --> 00:36:45
given how fast computers and well you

00:36:42 --> 00:36:47
know Moore's law was gonna go on we

00:36:44 --> 00:36:50
thought for 25 more years you know who

00:36:46 --> 00:36:52
knows but kind of the surprising thing

00:36:49 --> 00:36:56
in fact you know Hennessy and I you know

00:36:51 --> 00:36:58
on the the ACM a.m. Turing award for

00:36:55 --> 00:36:59
both the RISC instruction set

00:36:57 --> 00:37:01
contributions and for that textbook I

00:36:58 --> 00:37:07
mentioned but you know we are surprised

00:37:00 --> 00:37:10
that here we are 35 40 years later after

00:37:06 --> 00:37:12
we did our work and the the conventional

00:37:09 --> 00:37:14
wisdom of the best way to do instruction

00:37:11 --> 00:37:17
sets is still those RISC instruction

00:37:13 --> 00:37:18
sets that look very similar to what we

00:37:16 --> 00:37:22
look like you know we did in the 1980s

00:37:17 --> 00:37:25
o those surprisingly there hasn't

00:37:21 --> 00:37:26
some radical new idea even though we

00:37:24 --> 00:37:31
have you know a million times as many

00:37:26 --> 00:37:33
transistors as we had back then but what

00:37:30 --> 00:37:34
are the basic constructions and how did

00:37:32 --> 00:37:36
they change over the years so we're

00:37:33 --> 00:37:39
talking about addition subtract these

00:37:35 --> 00:37:41
are the specific so the the to get so

00:37:38 --> 00:37:43
the things that are in a calculator you

00:37:40 --> 00:37:45
are in a computer so any of the buttons

00:37:42 --> 00:37:48
that are in the calculator in the crater

00:37:44 --> 00:37:49
so the little button so if there's a

00:37:47 --> 00:37:51
memory function key and like I said

00:37:48 --> 00:37:52
those are turns into putting something

00:37:50 --> 00:37:54
in memories called a store bring

00:37:51 --> 00:37:56
something back Scott load just as a

00:37:53 --> 00:37:59
quick tangent when you say memory what

00:37:55 --> 00:38:01
does memory mean well I told you there

00:37:58 --> 00:38:03
were five pieces of a computer and if

00:38:00 --> 00:38:05
you remember in a calculator there's a

00:38:02 --> 00:38:06
memory key so you you want to have

00:38:04 --> 00:38:07
intermediate calculation and bring it

00:38:05 --> 00:38:09
back later

00:38:06 --> 00:38:11
so you'd hit the memory plus key M plus

00:38:08 --> 00:38:14
maybe and it would put that into memory

00:38:10 --> 00:38:15
and then you'd hit an REM like return

00:38:13 --> 00:38:17
instruction and it bring it back in the

00:38:14 --> 00:38:18
display so you don't have to type it you

00:38:16 --> 00:38:20
don't have to write it down bring it

00:38:17 --> 00:38:22
back again so that's exactly what memory

00:38:19 --> 00:38:24
is if you can put things into it as

00:38:21 --> 00:38:26
temporary storage and bring it back when

00:38:23 --> 00:38:28
you need it later

00:38:25 --> 00:38:29
so that's memory and loads and stores

00:38:27 --> 00:38:33
but the big thing the difference between

00:38:29 --> 00:38:36
a computer and a calculator is that the

00:38:32 --> 00:38:38
computer can make decisions and in

00:38:35 --> 00:38:41
amazingly the decisions are as simple is

00:38:37 --> 00:38:44
this value less than zero or is this

00:38:40 --> 00:38:46
value bigger than that value so there's

00:38:43 --> 00:38:48
and those instructions which are called

00:38:45 --> 00:38:51
conditional branch instructions is what

00:38:47 --> 00:38:53
give computers all its power if you were

00:38:50 --> 00:38:55
in the early days of computing before

00:38:52 --> 00:38:57
the what's called the general-purpose

00:38:54 --> 00:39:01
microprocessor people would write these

00:38:56 --> 00:39:03
instructions kind of in hardware and but

00:39:00 --> 00:39:05
it couldn't make decisions it would just

00:39:02 --> 00:39:08
it would do the same thing over and over

00:39:04 --> 00:39:10
again with the power of having branch

00:39:07 --> 00:39:12
instructions that can look at things and

00:39:09 --> 00:39:13
make decisions automatically and it can

00:39:11 --> 00:39:16
make these decisions you know billions

00:39:12 --> 00:39:18
of times per second and amazingly enough

00:39:15 --> 00:39:20
we can get you know thanks to advances

00:39:17 --> 00:39:22
machine learning we can we can create

00:39:19 --> 00:39:24
programs that can do something smarter

00:39:21 --> 00:39:26
than human beings can do but if you go

00:39:23 --> 00:39:28
down that very basic level it's the

00:39:25 --> 00:39:30
instructions are the keys on the

00:39:27 --> 00:39:32
calculator plus the ability to make

00:39:29 --> 00:39:34
decisions of these conditional branch

00:39:31 --> 00:39:36
instructions you know and all decisions

00:39:33 --> 00:39:39
fundamental can be reduced down to these

00:39:35 --> 00:39:42
- assumptions yeah so in in fact and so

00:39:38 --> 00:39:44
you know going way back in the sack back

00:39:41 --> 00:39:47
to you know we did for risk projects at

00:39:43 --> 00:39:51
Berkeley in the 1980s they did a couple

00:39:46 --> 00:39:53
at Stanford in the 1980s in 2010 we

00:39:50 --> 00:39:55
decided we wanted to do a new

00:39:52 --> 00:39:57
instruction set learning from the

00:39:54 --> 00:40:00
mistakes of those RISC architectures of

00:39:56 --> 00:40:03
1980s and that was done here at Berkeley

00:39:59 --> 00:40:05
almost exactly 10 years ago in the the

00:40:02 --> 00:40:07
people who did it I participated but

00:40:04 --> 00:40:08
other Christos Sanne and others

00:40:06 --> 00:40:11
drove it

00:40:07 --> 00:40:15
hey called it risk 5 to honor those

00:40:10 --> 00:40:17
risk the four risk projects of 1980s so

00:40:14 --> 00:40:20
what is risk 5 involved so leaders 5 is

00:40:16 --> 00:40:22
another instruction set of vocabulary

00:40:19 --> 00:40:25
it's learned from the mistakes of the

00:40:21 --> 00:40:26
past but it still has if you look at the

00:40:24 --> 00:40:28
re's a core set of instructions it's

00:40:25 --> 00:40:31
very similar to the simplest

00:40:27 --> 00:40:34
architectures from the 1980s and the big

00:40:30 --> 00:40:36
difference about risk 5 is it's open so

00:40:33 --> 00:40:41
I talked early about proprietary versus

00:40:35 --> 00:40:43
open and kind of sauce software so this

00:40:40 --> 00:40:45
an instruction set so it's a

00:40:42 --> 00:40:48
vocabulary it's not it's not hardware

00:40:44 --> 00:40:50
but by having an open instruction set we

00:40:47 --> 00:40:53
can have open source implementations

00:40:49 --> 00:40:57
open source processors that people can

00:40:52 --> 00:40:59
use where do you see that going says

00:40:56 --> 00:41:00
it's the really exciting possibilities

00:40:58 --> 00:41:03
but she's just like in the Scientific

00:40:59 --> 00:41:06
American if you were to predict 10 20 30

00:41:02 --> 00:41:09
years from now that kind of ability to

00:41:05 --> 00:41:12
utilize open source instruction set

00:41:08 --> 00:41:15
architectures like risk 5 what kind of

00:41:11 --> 00:41:17
possibilities might that unlock yeah and

00:41:14 --> 00:41:21
so just to make it clear because this is

00:41:16 --> 00:41:23
confusing the specification of risk 5 is

00:41:20 --> 00:41:25
omething that's like in a text book

00:41:22 --> 00:41:27
there's books about it so that's what

00:41:24 --> 00:41:30
hat's kind of defining an interface

00:41:26 --> 00:41:33
there's also the way you build hardware

00:41:29 --> 00:41:35
is you write it in languages they're

00:41:32 --> 00:41:37
kind of like sea but they're specialized

00:41:34 --> 00:41:41
for hardware that gets translated into

00:41:36 --> 00:41:44
hardware and so these implementations of

00:41:40 --> 00:41:46
this specification are what are the open

00:41:43 --> 00:41:48
source so they're written in something

00:41:45 --> 00:41:50
that's called Verilog or VHDL but it's

00:41:47 --> 00:41:53
put up on the web

00:41:49 --> 00:41:57
like that you can see the C++ code for

00:41:52 --> 00:42:00
Linux on the web so that's the open

00:41:56 --> 00:42:01
instruction set enables open source

00:41:59 --> 00:42:03
implementations at risk five so you can

00:42:00 --> 00:42:06
literally build a processor using this

00:42:02 --> 00:42:08
instruction set people are and people

00:42:05 --> 00:42:10
are so what happened to us that the

00:42:07 --> 00:42:13
story was this was developed here for

00:42:09 --> 00:42:15
our use to do our research and we made

00:42:12 --> 00:42:17
it we licensed under the berkeley

00:42:14 --> 00:42:19
software distribution license like a lot

00:42:16 --> 00:42:20
of things get licensed here so other

00:42:18 --> 00:42:25
academics use it they wouldn't be afraid

00:42:19 --> 00:42:27
to use it and then about 2014 we started

00:42:24 --> 00:42:30
getting complaints that we were using it

00:42:26 --> 00:42:31
in our research in our courses and we

00:42:29 --> 00:42:34
got complaints from people in industries

00:42:30 --> 00:42:37
why did you change your instruction set

00:42:33 --> 00:42:39
between the fall and the spring semester

00:42:36 --> 00:42:41
and well we get complaints of additional

00:42:38 --> 00:42:43
time why the hell do you care what we do

00:42:40 --> 00:42:45
with our instruction set and then when

00:42:42 --> 00:42:47
we talked to him we found out there was

00:42:44 --> 00:42:48
this thirst for this idea of an open

00:42:46 --> 00:42:50
instruction set architecture and they

00:42:47 --> 00:42:53
had been looking for one they stumbled

00:42:49 --> 00:42:55
upon ours at Berkeley thought it was boy

00:42:52 --> 00:42:58
this looks great we should use this one

00:42:54 --> 00:43:00
and so once we realize there is this

00:42:57 --> 00:43:02
need for an open instruction set

00:42:59 --> 00:43:04
architecture we thought that's a great

00:43:01 --> 00:43:06
idea and then we started supporting it

00:43:03 --> 00:43:09
and tried to make it happen so this was

00:43:05 --> 00:43:12
you know kind we accidentally stumbled

00:43:08 --> 00:43:14
into this and to this need in our timing

00:43:11 --> 00:43:18
was good and so it's really taking off

00:43:13 --> 00:43:20
there's a you know universities are good

00:43:17 --> 00:43:22
at starting things but the not good it's

00:43:19 --> 00:43:24
ustaining things so like Linux has the

00:43:21 --> 00:43:26
Linux Foundation there's a risk 5

00:43:23 --> 00:43:29
foundation that we started there's

00:43:25 --> 00:43:32
an annual conferences and the

00:43:28 --> 00:43:33
first one was done I think January 2015

00:43:31 --> 00:43:36
and the one that was just last December

00:43:32 --> 00:43:39
in it you know it had 50 people at it

00:43:35 --> 00:43:42
and the last one last December had kind

00:43:38 --> 00:43:44
of 1,700 people were at it and the

00:43:41 --> 00:43:47
companies excited all over the world

00:43:43 --> 00:43:49
so if predicting into the future you

00:43:46 --> 00:43:51
know if we were doing 25 years I would

00:43:48 --> 00:43:55
predict that risk 5 will be you know

00:43:50 --> 00:43:57
possibly the most popular instruction

00:43:54 --> 00:43:59
set architecture out there because it's

00:43:56 --> 00:44:00
a pretty good instruction set

00:43:58 --> 00:44:03
architecture and it's open and free and

00:43:59 --> 00:44:05
there's no reason

00:44:02 --> 00:44:09
lots of people shouldn't use it and

00:44:04 --> 00:44:12
there's benefits just like Linux is so

00:44:08 --> 00:44:15
popular today compared to 20 years ago I

00:44:11 --> 00:44:18
and you know the fact that you can get

00:44:14 --> 00:44:19
access to it for free you can modify it

00:44:17 --> 00:44:22
you can improve it for all those same

00:44:18 --> 00:44:23
arguments and so people collaborate to

00:44:21 --> 00:44:25
make it a better system for all

00:44:22 --> 00:44:27
everybody to use and that works in

00:44:24 --> 00:44:29
software and I expect the same thing

00:44:26 --> 00:44:33
will happen in hardware so if you look

00:44:28 --> 00:44:36
at arm Intel mips if you look at just

00:44:32 --> 00:44:40
he lay of the land and what do you

00:44:35 --> 00:44:42
think just for me because I'm not

00:44:39 --> 00:44:46
familiar how difficult this kind of

00:44:41 --> 00:44:49
transition would how much challenges

00:44:45 --> 00:44:52
this kind of transition would entail do

00:44:48 --> 00:44:54
you see let me ask my dumb question

00:44:51 --> 00:44:57
another one no that's I know where

00:44:53 --> 00:44:58
you're headed well there's a budget I

00:44:56 --> 00:45:00
think the thing you point out there's

00:44:57 --> 00:45:03
these proprietary popular

00:44:59 --> 00:45:05
proprietary instruction sets the x86 and

00:45:02 --> 00:45:08
so how do we move to risk five

00:45:04 --> 00:45:11
potentially in sort of in the span of

00:45:07 --> 00:45:14
ive 10 20 years a kind of a unification

00:45:10 --> 00:45:18
in given that the device is the kind of

00:45:13 --> 00:45:21
way we use devices IOT mobile devices

00:45:17 --> 00:45:25
and and the cloud keeps changing well

00:45:20 --> 00:45:28
part of it a big piece of it is the

00:45:24 --> 00:45:29
software stack and what right now

00:45:27 --> 00:45:34
looking forward there seem to be three

00:45:28 --> 00:45:37
important markets there's the cloud and

00:45:33 --> 00:45:42
then the cloud is simply companies like

00:45:36 --> 00:45:44
Alibaba and Amazon and Google Microsoft

00:45:41 --> 00:45:47
having these giant data centers with

00:45:43 --> 00:45:49
tens of thousands of servers in maybe a

00:45:46 --> 00:45:51
hunt maybe a hundred of these data

00:45:48 --> 00:45:53
centers all over the world and that's

00:45:50 --> 00:45:55
what the cloud is so the computer that

00:45:52 --> 00:45:58
dominates the cloud is the x86

00:45:54 --> 00:45:59
instruction set so the instructions are

00:45:57 --> 00:46:03
the vocal instructor sets using the

00:45:58 --> 00:46:07
cloud of the x86 almost almost 100% of

00:46:02 --> 00:46:11
that today is x86 the other big thing

00:46:06 --> 00:46:13
are cell phones and laptops those are

00:46:10 --> 00:46:15
the big things today I mean the PC is

00:46:12 --> 00:46:16
also dominated by the x86 instruction

00:46:14 --> 00:46:18
set but those

00:46:15 --> 00:46:21
sales are dwindling you know there's

00:46:17 --> 00:46:24
maybe 200 million pcs a year and there's

00:46:20 --> 00:46:26
I serve one and a half billion phones a

00:46:23 --> 00:46:30
year there's numbers like that so for

00:46:25 --> 00:46:35
the phones that's dominated by arm and

00:46:29 --> 00:46:37
now and a reason that I talked about the

00:46:34 --> 00:46:39
software stacks and then the third

00:46:36 --> 00:46:40
category is Internet of Things which is

00:46:38 --> 00:46:43
basically embedded devices things in

00:46:39 --> 00:46:45
your cars and your microwaves everywhere

00:46:42 --> 00:46:49
so what's different about those three

00:46:44 --> 00:46:51
categories is for the cloud the software

00:46:48 --> 00:46:54
that runs in the cloud is determined by

00:46:50 --> 00:46:56
these companies Alibaba Amazon Google

00:46:53 --> 00:46:58
Microsoft so that they control that

00:46:55 --> 00:47:02
software stack for the cell phones

00:46:57 --> 00:47:04
there's both for Android and Apple the

00:47:01 --> 00:47:05
software they supply but both of them

00:47:03 --> 00:47:08
have marketplaces where anybody in the

00:47:05 --> 00:47:11
world can build software and that

00:47:07 --> 00:47:14
software is translated or you know

00:47:10 --> 00:47:17
compiled down and shipped in the

00:47:13 --> 00:47:19
vocabulary of arm so that's the the

00:47:16 --> 00:47:22
what's referred to as binary compatible

00:47:18 --> 00:47:24
because the actual it's the instructions

00:47:21 --> 00:47:26
are turned into numbers binary numbers

00:47:23 --> 00:47:28
and shipped around the world so and the

00:47:25 --> 00:47:32
size just a quick interruption so arm

00:47:27 --> 00:47:34
what is arm as arm is an instructions

00:47:31 --> 00:47:36
like a risk-based yeah it's a risk-based

00:47:33 --> 00:47:42
instruction as a proprietary one arm

00:47:35 --> 00:47:43
stands for advanced RISC machine erm is

00:47:41 --> 00:47:47
the name where the company is so it's a

00:47:42 --> 00:47:49
proprietary RISC architecture so and

00:47:46 --> 00:47:51
it's been around for a while and you

00:47:48 --> 00:47:52
know the surely the most popular

00:47:50 --> 00:47:55
instruction set in the world right now

00:47:51 --> 00:47:58
they every year billions of chips are

00:47:54 --> 00:48:01
using the arm design in this post PC era

00:47:57 --> 00:48:04
is what it was the one of the early risk

00:48:00 --> 00:48:06
adopters of the risk yeah yeah the first

00:48:03 --> 00:48:08
arm goes back I don't know 86 or so so

00:48:05 --> 00:48:11
Berkeley instead did their work in the

00:48:07 --> 00:48:14
arly 80s their arm guys needed an

00:48:10 --> 00:48:18
instruction set and they read our papers

00:48:13 --> 00:48:19
and it heavily influenced them so

00:48:17 --> 00:48:20
getting back my story what about

00:48:18 --> 00:48:22
Internet of Things well software's not

00:48:19 --> 00:48:26
shipped in Internet of Things it's the

00:48:21 --> 00:48:29
embedded device people control that

00:48:25 --> 00:48:30
software stack so you would the

00:48:28 --> 00:48:32
opportune

00:48:29 --> 00:48:33
these four risk five everybody thinks is

00:48:31 --> 00:48:36
in the internet of things embedded

00:48:32 --> 00:48:38
things because there's no dominant

00:48:35 --> 00:48:42
player like there is in the cloud or the

00:48:37 --> 00:48:44
smartphones and you know it's it's

00:48:41 --> 00:48:46
doesn't have a lot of licenses

00:48:43 --> 00:48:48
associated with and you can enhance the

00:48:45 --> 00:48:51
instruction set if you want and it's a

00:48:47 --> 00:48:52
in and people have looked at instruction

00:48:50 --> 00:48:54
sets and think it's a very good

00:48:51 --> 00:48:59
instruction set so it appears to be very

00:48:53 --> 00:49:01
popular there it's possible that in the

00:48:58 --> 00:49:04
cloud people those companies control

00:49:00 --> 00:49:06
their software stacks so that it's

00:49:03 --> 00:49:08
possible that they would decide to use

00:49:05 --> 00:49:10
verse five if we're talking about ten

00:49:07 --> 00:49:12
and twenty years in the future the one

00:49:09 --> 00:49:15
of the be harder it would be the cell

00:49:11 --> 00:49:16
phones since people ship software in the

00:49:14 --> 00:49:19
arm instruction set that you'd think be

00:49:15 --> 00:49:21
the more difficult one but if if risk

00:49:18 --> 00:49:23
five really catches on and you know you

00:49:20 --> 00:49:25
could in a period of a decade you can

00:49:22 --> 00:49:28
imagine that's changing over to give a

00:49:24 --> 00:49:30
sense why risk five our arm is dominated

00:49:27 --> 00:49:32
you mentioned these three categories why

00:49:29 --> 00:49:34
has why did arm dominate why does it

00:49:31 --> 00:49:39
dominate the mobile device base and

00:49:33 --> 00:49:40
maybe the my naive intuition is that

00:49:38 --> 00:49:42
here are some aspects of power

00:49:39 --> 00:49:44
efficiency that are important yeah that

00:49:41 --> 00:49:48
somehow come along with risk well part

00:49:43 --> 00:49:54
of it is for these old Siskin structions

00:49:47 --> 00:49:58
that's like in the x86 it it was more

00:49:53 --> 00:50:01
xpensive to these for the you know

00:49:57 --> 00:50:03
they're older so they have disadvantages

00:50:00 --> 00:50:04
in them because they were designed forty

00:50:02 --> 00:50:07
ears ago but also they have to

00:50:03 --> 00:50:09
translate in hardware from sis

00:50:06 --> 00:50:12
constructions to risks instructions on

00:50:08 --> 00:50:14
the fly and that costs both silicon area

00:50:11 --> 00:50:17
that the chips are bigger to be able to

00:50:13 --> 00:50:19
do that and it uses more power so arm

00:50:16 --> 00:50:22
his which has you know followed this

00:50:18 --> 00:50:24
risk philosophy is seen to be much more

00:50:21 --> 00:50:27
nergy-efficient and in today's computer

00:50:23 --> 00:50:31
world both in the cloud in cell phone

00:50:26 --> 00:50:33
and you know things it isn't the

00:50:30 --> 00:50:34
limiting resource isn't the number of

00:50:32 --> 00:50:37
transistors you can fit in the chip it's

00:50:33 --> 00:50:39
what how much power can you dissipate

00:50:36 --> 00:50:42
for your application so by having a

00:50:38 --> 00:50:43
reduced instruction set you that's

00:50:41 --> 00:50:45
possible to have

00:50:42 --> 00:50:47
a simpler hardware which is more energy

00:50:44 --> 00:50:49
efficient in energy efficiency is

00:50:46 --> 00:50:51
incredibly important in the cloud when

00:50:48 --> 00:50:53
you have tens of thousands of computers

00:50:50 --> 00:50:55
in a datacenter you want to have the

00:50:52 --> 00:50:56
most energy-efficient ones there as well

00:50:54 --> 00:50:58
and of course for embedded things

00:50:55 --> 00:50:59
running off of batteries you want those

00:50:57 --> 00:51:02
to be energy efficient in the cell

00:50:58 --> 00:51:06
phones too so it I think it's believed

00:51:01 --> 00:51:09
that there's a energy disadvantage of

00:51:05 --> 00:51:14
using these more complex instruction set

00:51:08 --> 00:51:16
architectures so the other aspect of

00:51:13 --> 00:51:18
this is if we look at Apple Qualcomm

00:51:15 --> 00:51:22
Samsung Huawei all use the ARM

00:51:17 --> 00:51:24
architecture and yet the performance of

00:51:21 --> 00:51:26
the systems varies I mean I don't know

00:51:23 --> 00:51:29
hose opinion you take on but you know

00:51:25 --> 00:51:31
Apple for some reason seems to perform

00:51:28 --> 00:51:33
better and try these implementations

00:51:30 --> 00:51:35
architecture so where's the magic and

00:51:32 --> 00:51:37
sure that happened yeah so what arm

00:51:34 --> 00:51:39
pioneered was a new business model as

00:51:36 --> 00:51:42
they said well here's our proprietary

00:51:38 --> 00:51:46
instruction set and we'll give you two

00:51:41 --> 00:51:48
ways to do it eat there we'll give you

00:51:45 --> 00:51:51
one of these implementations written in

00:51:47 --> 00:51:53
things like C called Verilog and you can

00:51:50 --> 00:51:56
just use ours well you have to pay money

00:51:52 --> 00:51:59
for that not only pay will give you the

00:51:55 --> 00:52:01
you know will license use to do that or

00:51:58 --> 00:52:04
you could design your own and so we're

00:52:00 --> 00:52:05
talking about numbers like tens of

00:52:03 --> 00:52:07
millions of dollars to have the right to

00:52:04 --> 00:52:10
design your own since they it's the

00:52:06 --> 00:52:13
instruction set belongs to them so Apple

00:52:09 --> 00:52:15
got one of those the right to build

00:52:12 --> 00:52:18
their own most of the other people who

00:52:14 --> 00:52:21
build like Android phones just get one

00:52:17 --> 00:52:22
of the designs from arm and to do it

00:52:20 --> 00:52:25
hemselves

00:52:21 --> 00:52:29
o Apple developed a really good

00:52:24 --> 00:52:32
microprocessor design team they you know

00:52:28 --> 00:52:34
acquired a very good team that had was a

00:52:31 --> 00:52:35
building other microprocessors and

00:52:33 --> 00:52:38
brought them into the company to build

00:52:34 --> 00:52:40
their designs so the instruction sets

00:52:37 --> 00:52:43
are the same the specifications are the

00:52:39 --> 00:52:44
same but their hardware design is much

00:52:42 --> 00:52:49
more efficient than I think everybody

00:52:43 --> 00:52:50
else's and that's given Apple an

00:52:48 --> 00:52:55
advantage in the marketplace and that

00:52:49 --> 00:52:57
he iPhones tend to be the faster than

00:52:54 --> 00:52:57
most everybody else's phones that are

00:52:56 --> 00:53:00
they

00:52:56 --> 00:53:02
it'd be nice to be able to jump around

00:52:59 --> 00:53:05
and kind of explore different little

00:53:01 --> 00:53:07
sides of this but let me ask one sort of

00:53:04 --> 00:53:11
romanticized question what to you is the

00:53:06 --> 00:53:13
most beautiful aspect or idea of risk

00:53:10 --> 00:53:16
instruction set or instruction sets for

00:53:12 --> 00:53:19
this you know what I think that you know

00:53:15 --> 00:53:21
I I'm you know I I was always attracted

00:53:18 --> 00:53:24
to the idea of you know smallest

00:53:20 --> 00:53:27
beautiful why is that the temptation in

00:53:23 --> 00:53:29
engineering it's kind of easy to make

00:53:26 --> 00:53:31
things more complicated it's harder to

00:53:28 --> 00:53:33
come up with a it's more difficult

00:53:30 --> 00:53:36
surprising they come up with a simple

00:53:32 --> 00:53:38
legant solution and I think that

00:53:35 --> 00:53:42
here's a bunch of small features of of

00:53:37 --> 00:53:44
risk in general that you know where you

00:53:41 --> 00:53:46
can see this examples of keeping it

00:53:43 --> 00:53:48
simpler makes it more elegant

00:53:45 --> 00:53:50
specifically in risk five which you know

00:53:47 --> 00:53:51
I'm I was kind of the mentor in the

00:53:49 --> 00:53:54
program but it was really driven by

00:53:50 --> 00:53:56
christos sama and two grad

00:53:53 --> 00:54:01
students Andrew Waterman Yin Sibley is

00:53:55 --> 00:54:05
they hit upon this idea of having a

00:54:00 --> 00:54:06
subset of instructions a nice simple

00:54:04 --> 00:54:10
instruction subset instructions like

00:54:05 --> 00:54:13
40-ish instructions that all software

00:54:09 --> 00:54:15
the software status v can run just on

00:54:12 --> 00:54:18
those forty instructions and then they

00:54:14 --> 00:54:21
provide optional features that could

00:54:17 --> 00:54:23
accelerate the performance instructions

00:54:20 --> 00:54:25
that if you needed them could be very

00:54:22 --> 00:54:27
helpful but you don't need to have them

00:54:24 --> 00:54:30
and that that's a new really a new idea

00:54:26 --> 00:54:33
so risk five has right now maybe five

00:54:29 --> 00:54:35
optional subsets that you can pull in

00:54:32 --> 00:54:38
but the software runs without them if

00:54:34 --> 00:54:40
you just want to build the just the core

00:54:37 --> 00:54:43
forty instructions that's fine you can

00:54:39 --> 00:54:45
do that so this is fantastic

00:54:42 --> 00:54:46
educationally is so you can explain

00:54:44 --> 00:54:49
computers you only have to explain forty

00:54:45 --> 00:54:51
instructions and not thousands of them

00:54:48 --> 00:54:55
also if you invent some wild and crazy

00:54:51 --> 00:54:58
new technology like you know biological

00:54:54 --> 00:55:01
computing you'd like a nice simple

00:54:57 --> 00:55:02
instruction set and you can risk 5e if

00:55:00 --> 00:55:04
you implement those core instructions

00:55:01 --> 00:55:07
you can run you know really interesting

00:55:03 --> 00:55:09
programs on top of that so this idea of

00:55:06 --> 00:55:11
a core set of instructions that the

00:55:08 --> 00:55:13
software stack runs on

00:55:10 --> 00:55:15
and then optional features that if you

00:55:12 --> 00:55:17
turn them on the compilers where used

00:55:14 --> 00:55:19
but you don't have to I think is a

00:55:16 --> 00:55:22
powerful idea what's happened in the

00:55:18 --> 00:55:25
past if for the proprietary instruction

00:55:21 --> 00:55:29
sets is when they add new instructions

00:55:24 --> 00:55:32
it becomes required piece and so that

00:55:28 --> 00:55:34
all all microprocessors in the future

00:55:31 --> 00:55:36
have to use those instructions so it's

00:55:33 --> 00:55:38
kind of like is for a lot of people as

00:55:35 --> 00:55:41
they get older they gain weight

00:55:37 --> 00:55:43
all right is it that weight and age are

00:55:40 --> 00:55:45
correlated and so you can see these

00:55:42 --> 00:55:47
instruction sets get getting bigger and

00:55:44 --> 00:55:50
bigger as they get older so risk five

00:55:46 --> 00:55:51
you know let's you be as slim as your as

00:55:49 --> 00:55:54
a teenager and you only have to add

00:55:50 --> 00:55:55
these extra features if you're really

00:55:53 --> 00:55:57
gonna use them rather than every you

00:55:54 --> 00:55:59
have no choice you have to keep growing

00:55:56 --> 00:56:01
with the instruction set I don't know if

00:55:58 --> 00:56:04
the analogy holds out but that's a

00:56:00 --> 00:56:05
beautiful notion that there's it's

00:56:03 --> 00:56:08
almost like a nudge towards here's the

00:56:04 --> 00:56:11
simple core that's the essential yeah I

00:56:07 --> 00:56:13
think the surprising thing is still if

00:56:10 --> 00:56:15
we if we brought back you know the

00:56:12 --> 00:56:17
pioneers from the 1950s and showed them

00:56:14 --> 00:56:20
the instruction set architectures they'd

00:56:16 --> 00:56:21
understand it they that doesn't look

00:56:19 --> 00:56:24
that different well you know I'm

00:56:20 --> 00:56:25
surprised and it's if there's it may be

00:56:23 --> 00:56:27
something you know to talk about

00:56:24 --> 00:56:32
philosophical things I mean there may be

00:56:26 --> 00:56:35
something powerful about those you know

00:56:31 --> 00:56:38
forty or fifty instructions that all you

00:56:34 --> 00:56:39
need is these commands like these

00:56:37 --> 00:56:43
instructions that we talked about and

00:56:38 --> 00:56:46
that is sufficient to build to bring

00:56:42 --> 00:56:49
upon you know artificial intelligence

00:56:45 --> 00:56:54
and so it's a remarkable surprising to

00:56:48 --> 00:56:54
me that is complicated

00:56:54 --> 00:57:02
Minoo microprocessors where the line

00:56:58 --> 00:57:04
widths are narrower than the wavelength

00:57:01 --> 00:57:07
of light you know is this amazing

00:57:03 --> 00:57:09
technologies at some fundamental level

00:57:06 --> 00:57:11
the commands that software execute are

00:57:08 --> 00:57:14
ally pretty straightforward and

00:57:10 --> 00:57:17
haven't changed that much in in decades

00:57:13 --> 00:57:19
it's what a surprising outcome so

00:57:16 --> 00:57:22
underlying all computation all Turing

00:57:18 --> 00:57:24
machines all artificial intelligent

00:57:21 --> 00:57:24
systems perhaps might be a very simple

00:57:23 --> 00:57:27
instruction

00:57:23 --> 00:57:31
set like like a risk 5 or it's yeah I

00:57:26 --> 00:57:33
mean I that's kind of what I said I was

00:57:30 --> 00:57:35
interested to see I had another more

00:57:32 --> 00:57:36
senior faculty colleague and he he had

00:57:34 --> 00:57:41
written something in Scientific American

00:57:35 --> 00:57:43
in you know his 25 years in the future

00:57:40 --> 00:57:44
and his turned out about when I was a

00:57:42 --> 00:57:46
young professor and he said yep

00:57:43 --> 00:57:49
I checked it I was interest to see how

00:57:45 --> 00:57:52
that was going to turn out for me and

00:57:48 --> 00:57:53
it's pretty held up pretty well but yeah

00:57:51 --> 00:57:56
so there's there's probably there's

00:57:52 --> 00:57:58
omething I you know there's there must

00:57:55 --> 00:58:01
be something fundamental about those

00:57:57 --> 00:58:04
instructions that were capable of

00:58:00 --> 00:58:08
creating you know intelligence and from

00:58:03 --> 00:58:11
pretty primitive operations and just

00:58:07 --> 00:58:13
doing them really fast you kind of

00:58:10 --> 00:58:15
mentioned the different maybe radical

00:58:12 --> 00:58:18
computational medium like biological and

00:58:14 --> 00:58:21
there's other ideas so there's a lot of

00:58:17 --> 00:58:23
spaces in a6 or domain-specific and then

00:58:20 --> 00:58:25
there could be quantum computers and

00:58:22 --> 00:58:27
wood so we couldn't think of all those

00:58:24 --> 00:58:29
different mediums and types of

00:58:26 --> 00:58:33
computation what's the connection

00:58:28 --> 00:58:35
between swapping out different Hardware

00:58:32 --> 00:58:37
systems and the instruction set do you

00:58:34 --> 00:58:39
see those as disjoint or they

00:58:36 --> 00:58:43
fundamentally coupled yeah so what's so

00:58:38 --> 00:58:46
kind of if we go back to the history you

00:58:42 --> 00:58:48
know when Moore's Law is in full effect

00:58:45 --> 00:58:50
and you're getting twice as many

00:58:47 --> 00:58:53
transistors every couple of years you

00:58:49 --> 00:58:55
know kind of the challenge for computer

00:58:52 --> 00:58:56
designers is how can we take advantage

00:58:54 --> 00:58:59
of that how can we turn those

00:58:55 --> 00:59:02
transistors into better computers faster

00:58:58 --> 00:59:06
typically and so there was an era I

00:59:01 --> 00:59:09
guess in the 80s and 90s where computers

00:59:05 --> 00:59:11
were doubling performance every 18

00:59:08 --> 00:59:15
months and if you weren't around then

00:59:10 --> 00:59:17
what would happen is you had your

00:59:14 --> 00:59:20
computer and your friend's computer

00:59:16 --> 00:59:22
which was like a year year and a half

00:59:19 --> 00:59:24
newer and it was much faster than your

00:59:21 --> 00:59:26
computer and you he he or she could get

00:59:23 --> 00:59:28
heir work done much faster than your

00:59:25 --> 00:59:30
typical user so people took their

00:59:27 --> 00:59:33
computers perfectly good computers and

00:59:29 --> 00:59:35
threw them away to buy a newer computer

00:59:32 --> 00:59:38
because the computer one or two years

00:59:34 --> 00:59:38
later was so much faster so that's what

00:59:37 --> 00:59:41
he

00:59:37 --> 00:59:44
world was like in 80s and 90s well with

00:59:40 --> 00:59:47
e slowing down of Moore's law that's

00:59:43 --> 00:59:48
no longer true right he not now with you

00:59:46 --> 00:59:52
know not decide computers with the

00:59:47 --> 00:59:54
laptops I only get a new laptop when it

00:59:51 --> 00:59:56
breaks right well damn the disk broke or

00:59:53 --> 00:59:58
this display broke I got to buy a new

00:59:55 --> 01:00:00
computer but before you would throw them

00:59:57 --> 01:00:02
away because it just they were just so

00:59:59 --> 01:00:07
sluggish compared to the latest

01:00:01 --> 01:00:12
computers so that's you know that's a

01:00:06 --> 01:00:14
huge change of what's gone on so but yes

01:00:11 --> 01:00:17
ince this lasted for decades kind of

01:00:13 --> 01:00:19
programmers and maybe all society is

01:00:16 --> 01:00:23
used to computers getting faster

01:00:18 --> 01:00:25
egularly it we now now believe those of

01:00:22 --> 01:00:27
us who are in computer design it's

01:00:24 --> 01:00:30
called computer architecture that the

01:00:26 --> 01:00:34
path forward is instead is to add

01:00:29 --> 01:00:36
accelerators that only work well for

01:00:33 --> 01:00:40
certain applications

01:00:35 --> 01:00:43
o since Moore's law is slowing down

01:00:39 --> 01:00:45
we don't think general-purpose computers

01:00:42 --> 01:00:47
are gonna get a lot faster so the Intel

01:00:44 --> 01:00:48
processors of the world are not going to

01:00:46 --> 01:00:52
haven't been getting a lot faster

01:00:47 --> 01:00:52
they've been barely improving like a few

01:00:51 --> 01:00:54
percent a year

01:00:51 --> 01:00:57
it used to be doubling your 18 months

01:00:53 --> 01:00:59
and now it's doubling every 20 years so

01:00:56 --> 01:01:01
it was just shocking so to be able to

01:00:58 --> 01:01:03
deliver on what Moore's law used to do

01:01:00 --> 01:01:06
we think what's going to happen what is

01:01:02 --> 01:01:09
happening right now is people adding

01:01:05 --> 01:01:12
accelerators to their microprocessors

01:01:08 --> 01:01:16
that only work well for some domains and

01:01:11 --> 01:01:18
by sheer coincidence at the same time

01:01:15 --> 01:01:20
that this is happening has been this

01:01:17 --> 01:01:25
revolution in artificial intelligence

01:01:19 --> 01:01:28
called machine learning so with as I'm

01:01:24 --> 01:01:31
sure your other guess I've said you know

01:01:27 --> 01:01:33
a I had these two competing schools of

01:01:30 --> 01:01:35
thought is that we could figure out

01:01:32 --> 01:01:37
artificial intelligence by just writing

01:01:34 --> 01:01:40
the rules top-down or that was wrong you

01:01:36 --> 01:01:42
had to look at data and infer what the

01:01:39 --> 01:01:45
rules are the machine learning and

01:01:41 --> 01:01:46
what's happened in the last decade or

01:01:44 --> 01:01:50
eight years this machine learning has

01:01:46 --> 01:01:52
won and it turns out that machine

01:01:49 --> 01:01:56
learning the hardware you built from

01:01:51 --> 01:01:59
learning is pretty much multiply the

01:01:55 --> 01:02:02
matrix multiply is a key feature for the

01:01:58 --> 01:02:05
way people machine learning is done so

01:02:01 --> 01:02:07
that's a godsend for computer designers

01:02:04 --> 01:02:09
we know how to make metrics multiply run

01:02:06 --> 01:02:11
really fast so general-purpose

01:02:08 --> 01:02:12
microprocessors are slowing down we're

01:02:10 --> 01:02:14
adding accelerators from machine

01:02:11 --> 01:02:16
learning that fundamentally are doing

01:02:13 --> 01:02:18
matrix multiplies much more efficiently

01:02:15 --> 01:02:21
than general-purpose computers have done

01:02:17 --> 01:02:23
so we have to come up with a new way to

01:02:20 --> 01:02:24
accelerate things the danger of only

01:02:22 --> 01:02:27
accelerating one application is how

01:02:23 --> 01:02:29
important is that application turns it

01:02:26 --> 01:02:33
urns out machine learning gets used for

01:02:28 --> 01:02:35
all kinds of things so serendipitously

01:02:32 --> 01:02:38
we found something to accelerate that's

01:02:34 --> 01:02:40
widely applicable and we don't even

01:02:37 --> 01:02:42
we're in the middle of this revolution

01:02:39 --> 01:02:43
of machine learning we're not sure what

01:02:41 --> 01:02:46
he limits of machine learning are so

01:02:42 --> 01:02:49
this has been kind of a godsend if

01:02:46 --> 01:02:52
you're going to be able to Excel deliver

01:02:48 --> 01:02:55
on improved performance as long as

01:02:51 --> 01:02:57
people are moving their programs to be

01:02:54 --> 01:02:59
mbracing more machine learning we know

01:02:56 --> 01:03:01
how to give them more performance even

01:02:58 --> 01:03:03
as Moore's Law is slowing down and

01:03:00 --> 01:03:07
counter-intuitively

01:03:02 --> 01:03:09
the machine learning mechanism you can

01:03:06 --> 01:03:11
say is domain-specific but because it's

01:03:08 --> 01:03:17
leveraging data it's actually could be

01:03:10 --> 01:03:19
very broad in terms of in terms of the

01:03:16 --> 01:03:21
domains it could be applied in yeah

01:03:18 --> 01:03:24
that's exactly right sort of it's almost

01:03:20 --> 01:03:27
sort of people sometimes talk about the

01:03:23 --> 01:03:29
idea of software 2.0 we're almost taking

01:03:26 --> 01:03:33
another step up in the abstraction layer

01:03:28 --> 01:03:35
in designing machine learning systems

01:03:32 --> 01:03:37
because now you're programming in the

01:03:34 --> 01:03:39
space of data in the space of hyper

01:03:36 --> 01:03:41
parameters it's changing fundamentally

01:03:38 --> 01:03:44
the nature of programming and so the

01:03:40 --> 01:03:46
specialized devices that that accelerate

01:03:43 --> 01:03:48
the performance especially neural

01:03:45 --> 01:03:52
network based machine learning systems

01:03:47 --> 01:03:54
might become the new general yes so the

01:03:51 --> 01:03:57
this thing that's interesting point out

01:03:53 --> 01:04:00
hese are not coral these are not tied

01:03:56 --> 01:04:03
together the it's enthusiasm about

01:03:59 --> 01:04:05
machine learning about creating programs

01:04:02 --> 01:04:06
driven from data that we should figure

01:04:04 --> 01:04:08
out the answers from

01:04:05 --> 01:04:11
rather than kind of top down which

01:04:07 --> 01:04:12
classically the way most programming is

01:04:10 --> 01:04:13
done in the way artificial intelligent

01:04:11 --> 01:04:15
used to be done

01:04:12 --> 01:04:19
that's a movement that's going on at the

01:04:14 --> 01:04:20
same time coincidentally and the the

01:04:18 --> 01:04:23
first word machine learnings machines

01:04:19 --> 01:04:25
right so that's going to increase the

01:04:22 --> 01:04:28
demand for computing because instead of

01:04:25 --> 01:04:30
programmers being smart writing those

01:04:27 --> 01:04:32
things down we're going to instead

01:04:29 --> 01:04:34
use computers to exam a lot of data to

01:04:31 --> 01:04:39
kind of create the programs that's the

01:04:33 --> 01:04:40
idea and remarkably this gets used for

01:04:38 --> 01:04:42
all kinds of things very successfully

01:04:39 --> 01:04:44
the image recognition the language

01:04:41 --> 01:04:49
translation the game playing and you

01:04:43 --> 01:04:51
know it gets into pieces of the software

01:04:48 --> 01:04:52
stack like databases and stuff like that

01:04:50 --> 01:04:54
we're not quite sure how journal

01:04:51 --> 01:04:56
purposes but that's going on independent

01:04:53 --> 01:04:58
as Hardware stuff what's happening on

01:04:55 --> 01:04:59
the hardware side is Moore's Law is

01:04:57 --> 01:05:02
lowing down right when we need a lot

01:04:58 --> 01:05:04
more cycles it's failing us it's failing

01:05:01 --> 01:05:06
us right when we need it because there's

01:05:03 --> 01:05:09
going to be a greater in peace a greater

01:05:05 --> 01:05:10
increase in computing and then this idea

01:05:08 --> 01:05:13
that we're going to do so-called

01:05:09 --> 01:05:15
omain-specific here's a domain that

01:05:12 --> 01:05:18
your greatest fear is you'll make this

01:05:14 --> 01:05:21
one thing work and that'll help you know

01:05:17 --> 01:05:23
5% of the people in the world well this

01:05:20 --> 01:05:25
looks like it's a very

01:05:22 --> 01:05:29
general-purpose thing so the timing is

01:05:24 --> 01:05:31
fortuitous that if we can perhaps if we

01:05:28 --> 01:05:33
can keep building hardware that will

01:05:30 --> 01:05:37
accelerate machine learning the neural

01:05:32 --> 01:05:40
networks that'll beat the timing D right

01:05:36 --> 01:05:42
hat that neural network revolution will

01:05:39 --> 01:05:45
transform your software the so called

01:05:41 --> 01:05:47
software 2.0 and the software the future

01:05:44 --> 01:05:49
will be very different from the software

01:05:46 --> 01:05:51
the past and just as our microprocessors

01:05:48 --> 01:05:54
even though we're still going to have

01:05:50 --> 01:05:56
that same basic risk instructions to run

01:05:53 --> 01:05:59
a big pieces of the software stack like

01:05:55 --> 01:06:01
user interfaces and stuff like that we

01:05:58 --> 01:06:03
can accelerate the the kind of the small

01:06:00 --> 01:06:05
piece that's computationally intensive

01:06:02 --> 01:06:07
it's not lots of lines of code but there

01:06:04 --> 01:06:09
it takes a lot of cycles to run that

01:06:06 --> 01:06:11
code that that's going to be the

01:06:08 --> 01:06:13
accelerator piece and so this that's

01:06:10 --> 01:06:15
what makes this from a computer

01:06:12 --> 01:06:18
designer's perspective a really

01:06:14 --> 01:06:19
interesting decade but Hennessy and I

01:06:17 --> 01:06:20
talked about

01:06:18 --> 01:06:23
hat the title of our Turing warrant

01:06:19 --> 01:06:27
speech is a new golden age we we see

01:06:22 --> 01:06:30
this as a very exciting decade much like

01:06:26 --> 01:06:31
when we were assistant professors and

01:06:29 --> 01:06:33
the wrists stuff was going on that was a

01:06:30 --> 01:06:35
very exciting time was where we were

01:06:32 --> 01:06:38
changing what was going on we see this

01:06:34 --> 01:06:40
happening again tremendous opportunities

01:06:37 --> 01:06:42
of people because we're fundamentally

01:06:39 --> 01:06:44
changing how software is built and how

01:06:41 --> 01:06:46
e're running it so which layer of the

01:06:43 --> 01:06:49
abstraction do you think most of the

01:06:45 --> 01:06:51
acceleration might be happening the if

01:06:48 --> 01:06:53
you look in the next ten years that

01:06:50 --> 01:06:55
Google is working on a lot of exciting

01:06:52 --> 01:06:57
stuff with the TPU sort of there's a

01:06:54 --> 01:07:00
closer to the hardware that could be

01:06:56 --> 01:07:02
optimizations around the IROC closer to

01:06:59 --> 01:07:04
the instruction set that could be

01:07:01 --> 01:07:05
optimization at the compiler level it

01:07:03 --> 01:07:08
could be even at the higher level

01:07:04 --> 01:07:10
software stack yeah it's going to be I

01:07:07 --> 01:07:12
mean if you think about the old risks

01:07:09 --> 01:07:14
this debate it was both

01:07:11 --> 01:07:17
it was software hardware it was the

01:07:13 --> 01:07:19
compilers improving as well as the

01:07:16 --> 01:07:22
architecture improving and that that's

01:07:18 --> 01:07:25
likely to be the way things are now

01:07:21 --> 01:07:28
ith machine learning they they're using

01:07:24 --> 01:07:31
domain-specific languages the languages

01:07:27 --> 01:07:33
like tensorflow and pi torch are very

01:07:30 --> 01:07:35
popular with the machine learning people

01:07:32 --> 01:07:37
that those are the raising the level of

01:07:34 --> 01:07:39
abstraction it's easier for people to

01:07:36 --> 01:07:42
write machine learning in these

01:07:38 --> 01:07:44
domain-specific languages like like a PI

01:07:41 --> 01:07:46
torch in tensorflow

01:07:43 --> 01:07:48
so where the most of the optimization

01:07:45 --> 01:07:51
but yeah and so that and so there'll be

01:07:47 --> 01:07:53
both the compiler piece and the hardware

01:07:50 --> 01:07:55
piece underneath it so as you kind of

01:07:52 --> 01:07:58
the fatal flaw for hardware people is to

01:07:54 --> 01:08:00
create really great hardware but not

01:07:57 --> 01:08:02
have brought along the compilers and

01:07:59 --> 01:08:05
what we're seeing right now in the

01:08:01 --> 01:08:06
marketplace because of this enthusiasm

01:08:04 --> 01:08:09
around hardware for machine learning is

01:08:06 --> 01:08:11
getting you know probably a billions of

01:08:08 --> 01:08:13
dollars invested in start-up companies

01:08:10 --> 01:08:16
we're seeing startup companies go

01:08:12 --> 01:08:18
belly-up because they focus on the

01:08:15 --> 01:08:21
hardware but didn't bring the software

01:08:17 --> 01:08:24
stack along we talked about benchmarks

01:08:20 --> 01:08:26
earlier so I participated in machine

01:08:23 --> 01:08:28
learning didn't really have a set of

01:08:25 --> 01:08:29
benchmarks I think just two years ago

01:08:27 --> 01:08:31
they didn't have a set of benchmarks and

01:08:28 --> 01:08:32
we've created something called ml perf

01:08:30 --> 01:08:35
which

01:08:31 --> 01:08:38
machine learning benchmark suite and

01:08:34 --> 01:08:40
pretty much the companies who didn't

01:08:37 --> 01:08:42
invest in the software stack couldn't

01:08:39 --> 01:08:44
run a ml per fairy wall and the ones who

01:08:41 --> 01:08:46
did invest in software stack did and

01:08:43 --> 01:08:47
we're seeing you know like kind of in

01:08:45 --> 01:08:49
computer architecture this is what

01:08:46 --> 01:08:51
happens you have these arguments about

01:08:48 --> 01:08:52
risk versus ist's people spend billions

01:08:50 --> 01:08:54
of dollars in the marketplace to see who

01:08:51 --> 01:08:57
wins and it's not it's not a perfect

01:08:53 --> 01:08:59
comparison but it kind of sorts things

01:08:56 --> 01:09:02
out and we're seeing companies go out of

01:08:58 --> 01:09:04
business and then companies like like

01:09:01 --> 01:09:07
there's a company in Israel called

01:09:03 --> 01:09:09
Habana they came up with machine

01:09:06 --> 01:09:13
learning accelerators that they had good

01:09:08 --> 01:09:15
ml perf scores Intel had acquired a

01:09:12 --> 01:09:17
company earlier called nirvana

01:09:14 --> 01:09:18
couple years ago they didn't reveal

01:09:16 --> 01:09:21
the amount of Perth's cores which was

01:09:17 --> 01:09:23
uspicious but month ago

01:09:20 --> 01:09:25
Intel announced that they're cancelling

01:09:22 --> 01:09:27
the Nirvana product line and they've

01:09:24 --> 01:09:30
bought Habana for two billion dollars

01:09:26 --> 01:09:32
and Intel's going to be shipping Habano

01:09:29 --> 01:09:35
chips which have hardware and software

01:09:31 --> 01:09:36
and run the ml perf programs pretty well

01:09:34 --> 01:09:39
and that's going to be their product

01:09:35 --> 01:09:42
line in the future brilliant so maybe

01:09:38 --> 01:09:44
just a linker briefly I'm a love metrics

01:09:41 --> 01:09:46
I love standards that everyone can

01:09:43 --> 01:09:49
gather around what are some interesting

01:09:45 --> 01:09:51
aspects of that portfolio of metrics

01:09:48 --> 01:09:54
well one of the interesting metrics is

01:09:50 --> 01:09:57
you know what we thought it was you know

01:09:53 --> 01:09:59
e I was involved in the start you know

01:09:56 --> 01:10:01
e that Peter Matson is leading the

01:09:58 --> 01:10:03
ffort from Google Google got it off the

01:10:00 --> 01:10:06
ground but we had to reach out to

01:10:02 --> 01:10:08
competitors and say there's no

01:10:05 --> 01:10:09
benchmarks here this we didn't we think

01:10:07 --> 01:10:11
this is bad for the field it'll be much

01:10:08 --> 01:10:13
better if we look at examples like in

01:10:10 --> 01:10:16
the wrist days there was an effort to

01:10:12 --> 01:10:18
create a for the the people in the risk

01:10:15 --> 01:10:19
community got together competitors got

01:10:17 --> 01:10:21
ogether a building risk microprocessors

01:10:18 --> 01:10:23
to agree on a set of benchmarks that we

01:10:20 --> 01:10:26
called spec and that was good for the

01:10:22 --> 01:10:28
industry is rather before the different

01:10:25 --> 01:10:29
risk architectures were arguing well you

01:10:27 --> 01:10:32
can believe my performance others but

01:10:28 --> 01:10:34
hose other guys are liars and that

01:10:31 --> 01:10:36
didn't do any good so we agreed on a set

01:10:33 --> 01:10:38
of benchmarks and then we could figure

01:10:35 --> 01:10:39
out who is faster between the various

01:10:37 --> 01:10:42
risk architectures but it was a little

01:10:38 --> 01:10:43
bit faster but that drew the market

01:10:41 --> 01:10:45
rather than you know people were afraid

01:10:42 --> 01:10:45
to buy anything so we argued the same

01:10:44 --> 01:10:48
thing would happen

01:10:44 --> 01:10:50
with him helper you know companies like

01:10:47 --> 01:10:52
Nvidia were you know maybe worried that

01:10:49 --> 01:10:54
it was some kind of trap but eventually

01:10:51 --> 01:10:56
we all got together to create a set of

01:10:53 --> 01:11:00
benchmarks and do the right thing right

01:10:55 --> 01:11:04
and we agree on the results and so we

01:10:59 --> 01:11:05
can see whether TP use or GPUs or CPUs

01:11:03 --> 01:11:07
are really faster than how much the

01:11:04 --> 01:11:10
faster and I think from an engineer's

01:11:06 --> 01:11:12
perspective as long as the results are

01:11:09 --> 01:11:14
fair Europe you can live with it okay

01:11:11 --> 01:11:16
ou know you have a tip your hat to to

01:11:13 --> 01:11:18
your colleagues at another institution

01:11:15 --> 01:11:20
boy they did a better job than this what

01:11:17 --> 01:11:21
you what you hate is if it's it's false

01:11:19 --> 01:11:24
right they're making claims and it's

01:11:20 --> 01:11:26
just marketing and you know in

01:11:23 --> 01:11:27
that's affecting sales so you from an

01:11:25 --> 01:11:29
engineer's perspective as long as it's a

01:11:26 --> 01:11:31
fair comparison and we don't come in

01:11:28 --> 01:11:33
first place that's too bad but it's fair

01:11:30 --> 01:11:37
so we wanted to create that environment

01:11:32 --> 01:11:40
frame all perf and so now there's ten

01:11:36 --> 01:11:42
companies I mean ten universities and

01:11:39 --> 01:11:46
fifty companies involved so pretty much

01:11:41 --> 01:11:50
AML perf has is the is the way you

01:11:45 --> 01:11:52
measure machine learning performance and

01:11:49 --> 01:11:55
it didn't exist even two years ago

01:11:51 --> 01:11:56
ne of the cool things that I enjoy

01:11:54 --> 01:12:00
about the Internet has a few downsides

01:11:55 --> 01:12:02
but one of the nice things is people can

01:11:59 --> 01:12:04
see through BS a little better with the

01:12:01 --> 01:12:07
presence yes has a metrics it's so it's

01:12:03 --> 01:12:09
really nice a companies like Google and

01:12:06 --> 01:12:11
Facebook and Twitter now it's the cool

01:12:08 --> 01:12:13
thing to do is to put your engineers

01:12:10 --> 01:12:15
forward and to actually show off how

01:12:12 --> 01:12:19
ell you do on these metrics there's not

01:12:14 --> 01:12:22
sort of it well there's a less of a

01:12:18 --> 01:12:24
desire to do marketing a less so in my

01:12:21 --> 01:12:26
sort of naive no I don't think

01:12:23 --> 01:12:27
well I was trying to understand that you

01:12:25 --> 01:12:30
know what's changed from the 80s in this

01:12:26 --> 01:12:32
era I think because of things like

01:12:29 --> 01:12:34
social networking Twitter and stuff like

01:12:31 --> 01:12:38
that if you if you put up you know

01:12:34 --> 01:12:41
stuff right that's just you

01:12:37 --> 01:12:43
know miss purposely misleading you know

01:12:40 --> 01:12:46
that you you can get a violent reaction

01:12:42 --> 01:12:49
in social media pointing out the flaws

01:12:45 --> 01:12:50
in your arguments right and so from a

01:12:48 --> 01:12:53
marketing perspective you have to be

01:12:49 --> 01:12:56
careful today that you didn't have to be

01:12:52 --> 01:12:59
careful that there'll be people who put

01:12:55 --> 01:13:01
off the flaw you can get the word out

01:12:58 --> 01:13:03
he flaws and what you're saying much

01:13:00 --> 01:13:04
more easily today than in the past you

01:13:02 --> 01:13:06
sed to be it was used to be easier to

01:13:03 --> 01:13:08
get away with it and the other thing

01:13:05 --> 01:13:11
that's been happening in terms of

01:13:07 --> 01:13:13
starting off engineers it's just in the

01:13:10 --> 01:13:17
software side people have largely

01:13:12 --> 01:13:20
embraced open-source software it it was

01:13:16 --> 01:13:22
20 years ago it was a dirty word at

01:13:19 --> 01:13:23
Microsoft and today Microsoft is one of

01:13:21 --> 01:13:26
the big proponents of open source

01:13:22 --> 01:13:27
software the kind of that's the standard

01:13:25 --> 01:13:30
way most software gets built which

01:13:27 --> 01:13:32
really shows off your engineers because

01:13:29 --> 01:13:35
you can see if you look at the source

01:13:31 --> 01:13:37
code you can see who are making the

01:13:34 --> 01:13:39
commits who's making the improvements

01:13:36 --> 01:13:43
who are the engineers at all these

01:13:38 --> 01:13:46
companies who are are you know really

01:13:42 --> 01:13:48
great programmers and engineers and

01:13:45 --> 01:13:50
making really solid contributions which

01:13:47 --> 01:13:52
enhances their reputations and the

01:13:49 --> 01:13:54
reputation of the companies so but

01:13:51 --> 01:13:56
hat's of course not everywhere like in

01:13:53 --> 01:13:59
this space that I work more in is

01:13:55 --> 01:14:01
autonomous vehicles and they're still

01:13:58 --> 01:14:03
the machinery of hype and marketing is

01:14:00 --> 01:14:05
till very strong there and there's less

01:14:02 --> 01:14:08
willingness to be open in this kind of

01:14:04 --> 01:14:10
open source way and sort of benchmark so

01:14:07 --> 01:14:12
ml Perez represents the machine learning

01:14:09 --> 01:14:14
world is much better being open-source

01:14:11 --> 01:14:16
about holding itself to standards of

01:14:13 --> 01:14:19
different the amount of incredible

01:14:15 --> 01:14:22
benchmarks in terms of the different

01:14:18 --> 01:14:24
computer vision naturally new processing

01:14:21 --> 01:14:26
- inaudible

01:14:23 --> 01:14:28
it you know historically it wasn't

01:14:25 --> 01:14:31
always that way I had a graduate student

01:14:27 --> 01:14:34
working with me David Martin so for in

01:14:30 --> 01:14:37
computer in some fields benchmarking is

01:14:33 --> 01:14:40
been around forever so computer

01:14:36 --> 01:14:45
architecture databases maybe operating

01:14:39 --> 01:14:48
systems benchmarks are the way you

01:14:44 --> 01:14:50
measure progress but he was working with

01:14:47 --> 01:14:52
me and then started working with gender

01:14:49 --> 01:14:54
Malik and he's a gender Malik in

01:14:51 --> 01:14:58
computer vision space who I guess you've

01:14:53 --> 01:14:59
you interviewed yes and David Martin

01:14:57 --> 01:15:02
told me they don't have benchmarks

01:14:58 --> 01:15:04
everybody has their own vision algorithm

01:15:01 --> 01:15:06
in the way that my here's my image look

01:15:03 --> 01:15:08
at how well I do and everybody had their

01:15:05 --> 01:15:10
own image so David Martin

01:15:07 --> 01:15:12
back when he did his dissertation

01:15:09 --> 01:15:14
figured out a way to do benchmarks he

01:15:11 --> 01:15:17
had a bunch of graduate students

01:15:13 --> 01:15:19
identify images and then ran benchmarks

01:15:16 --> 01:15:21
to see which algorithms run well and

01:15:18 --> 01:15:24
that was as far as I know kind of the

01:15:20 --> 01:15:27
first time people did benchmarks in

01:15:23 --> 01:15:28
computer vision in which was predated

01:15:26 --> 01:15:30
all you know the things that eventually

01:15:27 --> 01:15:32
led to imagenet himself like that but

01:15:29 --> 01:15:34
hen you know the vision community got

01:15:31 --> 01:15:38
religion and then once we got as far as

01:15:33 --> 01:15:41
image net then that let the guys in

01:15:37 --> 01:15:43
Toronto be able to win the image net

01:15:40 --> 01:15:45
competition and then you know that

01:15:42 --> 01:15:48
changed the whole world it's a scary

01:15:44 --> 01:15:49
step actually because when you enter the

01:15:47 --> 01:15:53
world of benchmarks you actually have to

01:15:48 --> 01:15:55
be good to participate as opposed to

01:15:52 --> 01:15:58
yeah you can just you just believe

01:15:54 --> 01:16:00
you're the best in the world and I think

01:15:57 --> 01:16:03
the people I think they weren't

01:15:59 --> 01:16:04
purposely misleading I think if you

01:16:02 --> 01:16:06
don't have benchmarks I mean how do you

01:16:03 --> 01:16:08
know you know you could have your

01:16:05 --> 01:16:09
intuition it's kind of like the way we

01:16:07 --> 01:16:11
did used to do computer architecture

01:16:08 --> 01:16:13
your intuition is that this is the right

01:16:10 --> 01:16:17
instruction set to do this job I believe

01:16:12 --> 01:16:19
in my experience my hunch is that's true

01:16:16 --> 01:16:22
we had to get to make things more

01:16:18 --> 01:16:25
quantitative to make progress and so I

01:16:21 --> 01:16:27
just don't know how you know in fields

01:16:24 --> 01:16:28
that don't have benchmarks I don't

01:16:26 --> 01:16:32
understand how they figure out how

01:16:27 --> 01:16:34
they're making progress we're kind of in

01:16:31 --> 01:16:36
the vacuum tube days of quantum

01:16:33 --> 01:16:38
computing what are your thoughts in this

01:16:35 --> 01:16:41
wholly different kind of space of

01:16:37 --> 01:16:44
architectures uh you know I actually you

01:16:40 --> 01:16:45
know quantum computing his ideas been

01:16:43 --> 01:16:49
around for a while and I actually

01:16:44 --> 01:16:52
thought well sure hope I retire before I

01:16:48 --> 01:16:54
have to start teaching this I'd say

01:16:51 --> 01:16:57
because I talked about give these talks

01:16:53 --> 01:17:00
about the slowing of Moore's law and you

01:16:56 --> 01:17:02
know when we need to change by doing

01:16:59 --> 01:17:03
domain-specific accelerators common

01:17:01 --> 01:17:05
questions say what about quantum

01:17:02 --> 01:17:07
computing the reason that comes up it's

01:17:04 --> 01:17:09
in the news all the time so I think the

01:17:06 --> 01:17:11
keep and the third thing to keep in mind

01:17:08 --> 01:17:14
is quantum computing is not right around

01:17:10 --> 01:17:16
the corner there have been two national

01:17:13 --> 01:17:18
reports one by the national campus of

01:17:15 --> 01:17:20
engineering another by the computing

01:17:17 --> 01:17:22
consortium where they did a frank

01:17:19 --> 01:17:26
assessment of quantum computing

01:17:21 --> 01:17:28
in both of those reports said you know

01:17:25 --> 01:17:31
as far as we can tell before you get

01:17:27 --> 01:17:33
error corrected quantum computing it's a

01:17:30 --> 01:17:35
decade away so I think of it like

01:17:32 --> 01:17:37
nuclear fusion right there been people

01:17:34 --> 01:17:38
who've been excited about nuclear fusion

01:17:36 --> 01:17:41
a long time if we ever get nuclear

01:17:37 --> 01:17:42
fusion it's going to be fantastic for

01:17:40 --> 01:17:44
the world I'm glad people are working on

01:17:41 --> 01:17:47
it but you know it's not right around

01:17:43 --> 01:17:50
the corner that those two reports to me

01:17:46 --> 01:17:53
say probably it'll be 2030 before

01:17:49 --> 01:17:56
quantum computing is a something that

01:17:52 --> 01:17:58
could happen and when it does happen you

01:17:55 --> 01:18:01
know this is going to be big science

01:17:57 --> 01:18:04
stuff this is you know microkelvin

01:18:00 --> 01:18:06
almost absolute zero things that if they

01:18:03 --> 01:18:08
vibrate if truck goes by it won't work

01:18:05 --> 01:18:10
right so this will be in data center

01:18:07 --> 01:18:13
stuff we're not gonna have a quantum

01:18:09 --> 01:18:16
cell phone and and it's probably a 2030

01:18:12 --> 01:18:18
kind of thing so I'm happy that other

01:18:15 --> 01:18:20
people are working on it but just you

01:18:17 --> 01:18:21
know it's hard with all the news about

01:18:19 --> 01:18:25
it not to think that it's right around

01:18:20 --> 01:18:26
the corner and that's why we need to do

01:18:24 --> 01:18:30
something as Moore's Law is slowing down

01:18:25 --> 01:18:31
to provide the computing keep improving

01:18:29 --> 01:18:34
etting better for this next decade and

01:18:30 --> 01:18:38
you know we shouldn't be betting on

01:18:33 --> 01:18:40
quantum computing are expecting quantum

01:18:37 --> 01:18:43
computing to deliver in the next few

01:18:39 --> 01:18:45
years it's it's probably further off you

01:18:42 --> 01:18:46
know I I'd be happy to be wrong it be

01:18:44 --> 01:18:49
great if quantum computing is gonna

01:18:45 --> 01:18:50
commercially viable but it will be a set

01:18:48 --> 01:18:52
of applications it's not a

01:18:49 --> 01:18:54
general-purpose computation so it's

01:18:51 --> 01:18:55
gonna do some amazing things but

01:18:53 --> 01:18:58
here'll be a lot of things that

01:18:54 --> 01:19:00
probably you know the the old-fashioned

01:18:57 --> 01:19:02
computers are gonna keep doing better

01:18:59 --> 01:19:05
for quite a while and there'll be a

01:19:01 --> 01:19:07
teenager 50 years from now watching this

01:19:04 --> 01:19:09
video saying look how silly David

01:19:06 --> 01:19:10
Patterson was saying I said what did

01:19:08 --> 01:19:13
2030

01:19:09 --> 01:19:15
I didn't say sorry I never we're not

01:19:12 --> 01:19:17
gonna have quantum cellphones so he's

01:19:14 --> 01:19:20
gonna be watching and well I mean III

01:19:16 --> 01:19:23
think this is such a you know given

01:19:19 --> 01:19:25
we've had Moore's law I just I feel

01:19:22 --> 01:19:27
comfortable trying to do projects that

01:19:24 --> 01:19:29
are thinking about the next decade I I

01:19:27 --> 01:19:31
admire people who are trying to do

01:19:28 --> 01:19:34
things that are 30 years out but it's

01:19:30 --> 01:19:36
uch a fast-moving field I just don't

01:19:33 --> 01:19:37
know how to I'm

01:19:35 --> 01:19:39
not good enough to figure out what

01:19:36 --> 01:19:41
's the problems gonna be in 30 years

01:19:38 --> 01:19:44
you know 10 years is hard enough for me

01:19:40 --> 01:19:45
so maybe if it's possible to untangle

01:19:43 --> 01:19:47
your intuition a little bit

01:19:44 --> 01:19:51
I spoke with Jim Keller I don't know if

01:19:46 --> 01:19:53
you're familiar with Jim and he he is

01:19:50 --> 01:19:55
trying to sort of be a little bit

01:19:52 --> 01:19:59
rebellious and to try to think that he

01:19:54 --> 01:20:02
quotes me as being wrong yeah so what

01:19:58 --> 01:20:06
are your the relationship for the record

01:20:01 --> 01:20:08
Jim talks about that he has an intuition

01:20:05 --> 01:20:11
that Moore's law is not in fact in fact

01:20:07 --> 01:20:12
dead yet and then it may continue for

01:20:10 --> 01:20:14
some time to come

01:20:11 --> 01:20:17
what are your thoughts about Jim's ideas

01:20:13 --> 01:20:20
in this space yeah this is just this is

01:20:16 --> 01:20:23
just marketing so but Gordon Moore said

01:20:19 --> 01:20:25
is a quantitative prediction if we can

01:20:22 --> 01:20:27
check the facts right which is doubling

01:20:24 --> 01:20:30
the number of transistors every two

01:20:26 --> 01:20:33
years so we can look back at Intel for

01:20:29 --> 01:20:38
the last five years and ask him let's

01:20:32 --> 01:20:41
look at DRAM chips six years ago so that

01:20:37 --> 01:20:44
would be three two-year periods so then

01:20:40 --> 01:20:47
our DRAM chips have eight times as many

01:20:43 --> 01:20:49
transistors as they did six years ago we

01:20:46 --> 01:20:50
can look up Intel microprocessors six

01:20:48 --> 01:20:52
years ago

01:20:49 --> 01:20:55
if Moore's law is continuing it should

01:20:51 --> 01:20:58
have eight times as many transistors as

01:20:54 --> 01:21:03
ix years ago the answers in both those

01:20:57 --> 01:21:06
cases is no the problem has been because

01:21:02 --> 01:21:08
Moore's law was kind of genuinely

01:21:05 --> 01:21:10
embraced by the semiconductor industries

01:21:07 --> 01:21:14
they would make investments in severe

01:21:09 --> 01:21:17
quipment to make Moore's Law come true

01:21:13 --> 01:21:19
semiconductor improving in Moore's law

01:21:16 --> 01:21:23
in many people's mind are the same thing

01:21:18 --> 01:21:27
so when I say and I'm factually correct

01:21:22 --> 01:21:29
hat Moore's law is no longer holds we

01:21:26 --> 01:21:32
are not doubling transistors every years

01:21:28 --> 01:21:35
the downside for a company like

01:21:31 --> 01:21:37
Intel is people think that means it

01:21:34 --> 01:21:43
stopped that technology has no longer

01:21:36 --> 01:21:46
improved and so Jim is trying to react

01:21:42 --> 01:21:50
at AraC the impression that

01:21:45 --> 01:21:52
semiconductors are frozen in 2000

01:21:49 --> 01:21:56
nineteen are never gonna get better so I

01:21:51 --> 01:21:59
never said that I said was Moore's law

01:21:55 --> 01:22:00
is no more and I'm strictly looking at a

01:21:58 --> 01:22:02
number of transistors because that's

01:21:59 --> 01:22:05
what more that's what Moore's law is

01:22:01 --> 01:22:08
there's the I don't know there's been

01:22:04 --> 01:22:10
this aura associated with Moore's law

01:22:07 --> 01:22:13
that they've enjoyed for fifty years

01:22:09 --> 01:22:15
about look at the field we're in we're

01:22:12 --> 01:22:16
doubling transistors every two years

01:22:14 --> 01:22:18
what an amazing field which is an

01:22:15 --> 01:22:20
amazing thing that they were able to

01:22:17 --> 01:22:22
pull off but even as Gordon Moore said

01:22:19 --> 01:22:24
you know no exponential can last forever

01:22:21 --> 01:22:26
it's lasted for 50 years which is

01:22:23 --> 01:22:28
amazing and this is a huge impact on the

01:22:25 --> 01:22:31
industry because of these changes that

01:22:27 --> 01:22:34
we've been talking about so he claims

01:22:30 --> 01:22:36
because he's trying to act and he claims

01:22:33 --> 01:22:38
you know Patterson says Moore's laws

01:22:35 --> 01:22:41
know more and look at all look at it

01:22:37 --> 01:22:44
's still controlling and tsmc to say

01:22:40 --> 01:22:45
it's as no longer but there but there's

01:22:43 --> 01:22:47
quantitative evidence that Moore's law

01:22:44 --> 01:22:51
is not continuing so what I say now to

01:22:46 --> 01:22:53
try and okay I understand the perception

01:22:50 --> 01:22:56
problem when I say Moore's law is

01:22:52 --> 01:22:59
topped okay so now I say Moore's law

01:22:55 --> 01:23:02
slowing down and I think Jim which is

01:22:58 --> 01:23:03
another way if he's if it's predicting

01:23:01 --> 01:23:05
every two years and I say it's slowing

01:23:02 --> 01:23:07
down then that's another way of saying

01:23:04 --> 01:23:10
it doesn't hold anymore and and I think

01:23:06 --> 01:23:12
Jim wouldn't disagree that it's slowing

01:23:09 --> 01:23:14
down because that sounds like it's

01:23:11 --> 01:23:17
things are still getting better just not

01:23:13 --> 01:23:19
as fast which is another way of saying

01:23:16 --> 01:23:22
Moore's law isn't working anymore

01:23:18 --> 01:23:24
it's still good for marketing but uh but

01:23:21 --> 01:23:26
what's your you're not you don't like

01:23:23 --> 01:23:28
xpanding the definition of Moore's law

01:23:25 --> 01:23:31
sort of uh well yeah that's really yeah

01:23:27 --> 01:23:33
it's an educator you know are you know

01:23:30 --> 01:23:35
is this like bonding politics is

01:23:32 --> 01:23:38
everybody get their own facts

01:23:34 --> 01:23:42
or do we have Moore's law was a crisp

01:23:37 --> 01:23:45
you know amorous Carver Mead looked at

01:23:41 --> 01:23:48
his observations drawing on a log-log

01:23:44 --> 01:23:50
scale a straight line and that's what

01:23:47 --> 01:23:52
he definition of Moore's law is there's

01:23:49 --> 01:23:56
this other what Intel did for a while

01:23:51 --> 01:23:57
interestingly before Jim joined them

01:23:55 --> 01:23:59
they said oh no Morris lies in the

01:23:56 --> 01:24:00
number of doubling isn't really doubling

01:23:58 --> 01:24:02
transistors every two years

01:23:59 --> 01:24:03
Moore's law is the cost of the

01:24:01 --> 01:24:07
individual dressed

01:24:02 --> 01:24:09
sister going down cutting in half every

01:24:06 --> 01:24:11
two years now that's not what he said

01:24:08 --> 01:24:14
but they reinterpreted it because they

01:24:10 --> 01:24:16
believed that the that the cost of

01:24:13 --> 01:24:19
transistors was continuing to drop even

01:24:15 --> 01:24:21
if they couldn't get twice as many

01:24:18 --> 01:24:23
people industry have told me that's not

01:24:20 --> 01:24:26
rue anymore that basically then the in

01:24:22 --> 01:24:27
more recent technologies that got more

01:24:25 --> 01:24:31
complicated the actual cost of

01:24:26 --> 01:24:33
transistor went up so even even the a

01:24:30 --> 01:24:36
corollary might not be true but

01:24:32 --> 01:24:38
certainly you know Moore's law that was

01:24:35 --> 01:24:41
the beauty of Moore's law it was a very

01:24:37 --> 01:24:43
simple it's like equals mc-squared right

01:24:40 --> 01:24:45
it was like wow what an amazing

01:24:42 --> 01:24:47
prediction it's so easy to understand

01:24:44 --> 01:24:49
the implications are amazing and that's

01:24:46 --> 01:24:51
why it was so famous as a as a

01:24:48 --> 01:24:54
prediction and this this

01:24:50 --> 01:24:56
reinterpretation of what it meant and

01:24:53 --> 01:25:01
changing is you know his revisionist

01:24:55 --> 01:25:03
history and I I'd be happy and and

01:25:00 --> 01:25:05
they're not claiming there's a new

01:25:02 --> 01:25:08
Moore's law they're not saying by the

01:25:04 --> 01:25:10
way it's instead of every two years it's

01:25:07 --> 01:25:12
every three years I don't think the I

01:25:09 --> 01:25:13
don't think they want to say that I

01:25:11 --> 01:25:15
think what's going to happen is the new

01:25:12 --> 01:25:18
technology Commission's H ones get a

01:25:14 --> 01:25:21
little bit slower so it it is slowing

01:25:17 --> 01:25:23
down the improvements will won't be as

01:25:20 --> 01:25:26
great and that's why we need to do new

01:25:22 --> 01:25:27
things yeah I don't like that the the

01:25:25 --> 01:25:30
idea of Moore's law is tied up with

01:25:26 --> 01:25:34
marketing I it would be nice if it's

01:25:29 --> 01:25:35
whether it's marketing or it's it's well

01:25:33 --> 01:25:37
it could be affecting business but they

01:25:34 --> 01:25:41
could also be infecting the imagination

01:25:36 --> 01:25:42
of engineers is if if Intel employees

01:25:40 --> 01:25:46
actually believe that we're frozen in

01:25:41 --> 01:25:48
2019 well that's that would be bad for

01:25:45 --> 01:25:51
Intel they not just Intel but everybody

01:25:47 --> 01:25:55
it's inspired Moore's law is inspiring

01:25:50 --> 01:25:58
yeah everybody but what's happening

01:25:54 --> 01:26:01
right now talking to people in who have

01:25:57 --> 01:26:03
working in national offices and stuff

01:26:00 --> 01:26:05
like that a lot of the computer science

01:26:02 --> 01:26:08
community is unaware that this is going

01:26:04 --> 01:26:10
on right that we are in an era that's

01:26:07 --> 01:26:11
going to need radical change at lower

01:26:09 --> 01:26:15
levels that could affect the whole

01:26:10 --> 01:26:18
software stack this you know if

01:26:14 --> 01:26:21
the Intel if you're using cloud stuff

01:26:17 --> 01:26:23
and servers that you get next year are

01:26:20 --> 01:26:25
basically only a little bit faster than

01:26:22 --> 01:26:26
the servers you got this year you need

01:26:24 --> 01:26:30
to know that and we need to start

01:26:25 --> 01:26:32
innovating to start delivery blow on it

01:26:29 --> 01:26:33
if you're counting on your software your

01:26:31 --> 01:26:35
software going to add a lot more

01:26:32 --> 01:26:37
features assuming the computers can get

01:26:34 --> 01:26:39
faster that's not true so are you gonna

01:26:36 --> 01:26:40
have to start making your software stack

01:26:38 --> 01:26:42
more efficient or are you gonna have to

01:26:39 --> 01:26:45
start learning about machine learning so

01:26:41 --> 01:26:47
it's you know it's kind of a it's a

01:26:44 --> 01:26:49
morning or call for arms that the world

01:26:46 --> 01:26:51
is changing right now and a lot of

01:26:48 --> 01:26:54
people a lot of computer science PhDs

01:26:50 --> 01:26:56
are unaware of that so a way to try and

01:26:53 --> 01:26:58
get their attention is to say that

01:26:55 --> 01:27:01
Moore's law is slowing down and that's

01:26:57 --> 01:27:02
gonna affect your assumptions and you

01:27:00 --> 01:27:05
know we're trying to get the word out

01:27:01 --> 01:27:07
and when companies like TSMC and Intel

01:27:04 --> 01:27:09
say oh no no no Moore's law is fine then

01:27:06 --> 01:27:11
people think okay that I don't have to

01:27:08 --> 01:27:13
change my behavior I'll just get the

01:27:10 --> 01:27:15
next servers and you know if they start

01:27:12 --> 01:27:17
doing measurements though realize what's

01:27:14 --> 01:27:19
going on it'd be nice to have some

01:27:16 --> 01:27:20
transparency and metrics for for the

01:27:18 --> 01:27:23
layperson

01:27:19 --> 01:27:26
to be able to know if computers are

01:27:22 --> 01:27:27
getting faster and there are yeah there

01:27:25 --> 01:27:31
are there are a bunch of most people

01:27:27 --> 01:27:33
kind of use clock rate as a measure

01:27:30 --> 01:27:36
performance you know it's not a perfect

01:27:32 --> 01:27:37
one but if you've noticed clock rates

01:27:35 --> 01:27:40
are more or less the same as they were

01:27:36 --> 01:27:43
five years ago computers are a little

01:27:39 --> 01:27:44
better than they aren't they haven't

01:27:42 --> 01:27:46
made zero progress but they've made

01:27:43 --> 01:27:47
small progress so you there's some

01:27:45 --> 01:27:50
indications out there and in our

01:27:46 --> 01:27:52
behavior right nobody buys the next

01:27:49 --> 01:27:54
laptop because it's so much faster than

01:27:51 --> 01:27:59
the laptop from the past four cell

01:27:53 --> 01:28:02
phones I think I don't know why people

01:27:58 --> 01:28:04
buy new cell phones you know because of

01:28:01 --> 01:28:04
the new ones announced the cameras are

01:28:03 --> 01:28:06
better but that's kind of

01:28:03 --> 01:28:09
domain-specific right they're putting

01:28:05 --> 01:28:11
special purpose hardware to make the

01:28:08 --> 01:28:13
processing of images go much better so

01:28:10 --> 01:28:15
that's that that's the way they're doing

01:28:12 --> 01:28:17
it they're not particularly it's not

01:28:14 --> 01:28:19
hat the ARM processor there's twice as

01:28:16 --> 01:28:22
fast as much as they'd added

01:28:18 --> 01:28:23
accelerators to help eat the experience

01:28:21 --> 01:28:25
of the phone

01:28:22 --> 01:28:29
can we talk a little bit about one other

01:28:24 --> 01:28:34
exciting space arguably the same level

01:28:28 --> 01:28:38
of impact as your work with risk is raid

01:28:33 --> 01:28:40
and in your in 1988 you co-authored a

01:28:37 --> 01:28:46
paper a case for redundant array of

01:28:39 --> 01:28:47
inexpensive disks hence our AI D rate so

01:28:45 --> 01:28:51
you that's where you introduce the idea

01:28:46 --> 01:28:53
rate incredible that that little I mean

01:28:50 --> 01:28:55
little that paper kind of had this

01:28:52 --> 01:28:58
ripple effect and had a really

01:28:54 --> 01:29:01
revolutionary effect so first what is

01:28:57 --> 01:29:03
rate what is rate so this is work I did

01:29:00 --> 01:29:06
with my colleague Randy Katz and a star

01:29:02 --> 01:29:08
graduate student Garth Gibson so we had

01:29:05 --> 01:29:14
just done the fourth generation risk

01:29:07 --> 01:29:18
project and Randy Kass which had early

01:29:13 --> 01:29:20
Apple Macintosh computer at this time

01:29:17 --> 01:29:26
verything was done with floppy disks

01:29:19 --> 01:29:27
which are old technologies that to could

01:29:25 --> 01:29:30
store things that didn't have much

01:29:26 --> 01:29:31
capacity and you had to to get any work

01:29:29 --> 01:29:33
done you're always sticking in your

01:29:30 --> 01:29:35
little floppy disk in and out because

01:29:32 --> 01:29:37
they didn't have much capacity but they

01:29:34 --> 01:29:40
started building what are called hard

01:29:36 --> 01:29:42
isk drives which is magnetic material

01:29:39 --> 01:29:46
that can remember information storage

01:29:41 --> 01:29:51
for the Mac and Randy asked the question

01:29:45 --> 01:29:52
when he saw this disk next to his Mac

01:29:50 --> 01:29:55
jeez he's a brand-new small things

01:29:51 --> 01:29:58
before that for the big computers that

01:29:54 --> 01:30:00
he disk would be the size of washing

01:29:57 --> 01:30:02
machines and here's something the size

01:29:59 --> 01:30:04
of a kind of the size of a book or so

01:30:01 --> 01:30:08
this is I wonder what we could do with

01:30:03 --> 01:30:11
at well we the Randy was involved in

01:30:07 --> 01:30:12
the in the fourth generation risk

01:30:10 --> 01:30:14
project here at Berkeley 80s so we

01:30:11 --> 01:30:16
figured out a way how to make the

01:30:13 --> 01:30:18
computation part the processor part go a

01:30:15 --> 01:30:21
lot faster but what about the storage

01:30:17 --> 01:30:25
part can we do something to make it

01:30:20 --> 01:30:26
faster so we hit upon the idea of taking

01:30:24 --> 01:30:28
a lot of these disks developed for

01:30:25 --> 01:30:30
personal computers and mackintoshes and

01:30:27 --> 01:30:32
putting many of them together instead of

01:30:29 --> 01:30:34
one of these washing machine sized

01:30:31 --> 01:30:36
things and so we were to rub the first

01:30:33 --> 01:30:37
draft of the paper and we'd have 40 of

01:30:35 --> 01:30:40
these little PC DOS

01:30:36 --> 01:30:42
instead of one of these washing machine

01:30:39 --> 01:30:44
size things and they would be much

01:30:41 --> 01:30:46
eaper because they're made for PCs and

01:30:43 --> 01:30:47
they could actually kind of be faster

01:30:45 --> 01:30:50
because there was 40 of them rather than

01:30:46 --> 01:30:51
one of them and so he wrote a paper like

01:30:49 --> 01:30:53
that and send it to one of a former

01:30:51 --> 01:30:55
Berkeley students at IBM and he said

01:30:52 --> 01:30:56
well this is all great and good but what

01:30:54 --> 01:31:00
about the reliability of these things

01:30:55 --> 01:31:02
now you have 40 of these devices each of

01:30:59 --> 01:31:04
which are kind of PC quality so they're

01:31:01 --> 01:31:07
not as good as these IBM washing

01:31:03 --> 01:31:09
machines IBM dominated the the the

01:31:06 --> 01:31:12
storage Genesis so you

01:31:08 --> 01:31:14
reliably gonna be awful and so when we

01:31:11 --> 01:31:16
calculated it out instead of you know it

01:31:13 --> 01:31:19
breaking on average once a year it would

01:31:15 --> 01:31:22
break every two weeks so we thought

01:31:18 --> 01:31:24
about the idea and said well we got to

01:31:21 --> 01:31:25
address the reliability so we did it

01:31:23 --> 01:31:28
originally performance but we had do

01:31:24 --> 01:31:31
reliability so the name redundant array

01:31:27 --> 01:31:34
of inexpensive disks is array of these

01:31:30 --> 01:31:37
disks inexpensive life for pcs but we

01:31:33 --> 01:31:39
have extra copies so if one breaks we

01:31:36 --> 01:31:42
won't lose all the information will have

01:31:38 --> 01:31:43
nough redundancy that we could let some

01:31:41 --> 01:31:45
break and we can still preserve the

01:31:42 --> 01:31:48
information so the name is an array of

01:31:44 --> 01:31:50
inexpensive discs this is a collection

01:31:47 --> 01:31:52
of these pcs and the are part of the

01:31:49 --> 01:31:54
name was the redundancy so they'd be

01:31:51 --> 01:31:56
reliable and it turns out if you put a

01:31:53 --> 01:31:58
modest number of extra disks in one of

01:31:55 --> 01:32:01
these arrays it could actually not only

01:31:57 --> 01:32:02
be as faster and cheaper that one of

01:32:00 --> 01:32:05
these washing machine discs it could be

01:32:01 --> 01:32:06
actually more reliable because you could

01:32:04 --> 01:32:09
have a couple of breaks even with these

01:32:05 --> 01:32:10
cheap discs whereas one failure with the

01:32:08 --> 01:32:12
washing machine thing would knock it out

01:32:09 --> 01:32:17
did you did you have a sense just like

01:32:12 --> 01:32:21
with risk that in the 30 years that

01:32:16 --> 01:32:26
followed raid would take over as a as a

01:32:20 --> 01:32:30
man I think George I I'd say I think I'm

01:32:25 --> 01:32:31
naturally an optimist but I thought our

01:32:29 --> 01:32:33
ideas were right

01:32:30 --> 01:32:35
I thought kind of like Moore's law it

01:32:33 --> 01:32:36
seemed to me if you looked at the

01:32:34 --> 01:32:38
history of the disk drives

01:32:35 --> 01:32:39
they went from washing machine size

01:32:37 --> 01:32:42
things than they were getting smaller

01:32:38 --> 01:32:44
and smaller and the volumes were with

01:32:41 --> 01:32:47
e smaller disk drives because that's

01:32:43 --> 01:32:50
where the PCs were so we thought that

01:32:46 --> 01:32:50
was a technological trend that disk

01:32:49 --> 01:32:51
drives

01:32:49 --> 01:32:53
the volume

01:32:50 --> 01:32:54
disk drives was going to be small

01:32:52 --> 01:32:56
getting smaller and smaller devices

01:32:53 --> 01:32:59
which were true they were the size of

01:32:55 --> 01:33:01
the I don't know eight inches diameter

01:32:58 --> 01:33:04
than five inches than three inches of

01:33:00 --> 01:33:06
diameters and so that it made sense to

01:33:03 --> 01:33:08
figure out how to deal things with an

01:33:05 --> 01:33:10
array of disks so I think it was one of

01:33:07 --> 01:33:13
those things where logically we think

01:33:09 --> 01:33:16
the technological forces were on our

01:33:12 --> 01:33:18
side that it made sense so we expected

01:33:15 --> 01:33:21
it to catch on but there was that same

01:33:17 --> 01:33:23
kind of business question you know IBM

01:33:20 --> 01:33:26
was the big pusher of these disk drives

01:33:22 --> 01:33:27
in the real world where the technical

01:33:25 --> 01:33:30
advantage get turned into a business

01:33:26 --> 01:33:33
advantage or not it proved to be true it

01:33:29 --> 01:33:36
did in so you know we thought we were

01:33:32 --> 01:33:38
sound technically and it was unclear

01:33:35 --> 01:33:39
worth of the business side but we kind

01:33:37 --> 01:33:43
of as academics we believe the

01:33:38 --> 01:33:45
technology should win and and it did and

01:33:42 --> 01:33:47
if you look at those thirty years

01:33:44 --> 01:33:48
just from your perspective are there

01:33:46 --> 01:33:51
interesting developments in the space of

01:33:47 --> 01:33:54
storage that have happened in that time

01:33:50 --> 01:33:55
yeah the big thing that happened both a

01:33:53 --> 01:33:58
couple of things that happened what we

01:33:54 --> 01:34:01
did had a modest amount of storage so as

01:33:57 --> 01:34:04
redundancy as people built bigger and

01:34:00 --> 01:34:05
bigger storage systems they've added

01:34:03 --> 01:34:07
more we doesn't see so they could have

01:34:04 --> 01:34:09
more failures and they have biggest

01:34:06 --> 01:34:13
hing that happened in storage is for

01:34:09 --> 01:34:16
decades it was based on things

01:34:12 --> 01:34:17
physically spinning called hard disk

01:34:15 --> 01:34:19
drives where you used to turn on your

01:34:16 --> 01:34:21
computer and it would make a noise what

01:34:18 --> 01:34:23
hat noise was was the disk drive

01:34:20 --> 01:34:27
spinning and they were rotating it in

01:34:22 --> 01:34:30
like 60 revolutions per second and it's

01:34:26 --> 01:34:32
like if you remember the vinyl vinyl

01:34:29 --> 01:34:34
records if you've ever seen those that's

01:34:31 --> 01:34:36
what it looked like and there was like a

01:34:33 --> 01:34:38
needle like on a vinyl record that was

01:34:35 --> 01:34:40
reading it so the big drive a change is

01:34:37 --> 01:34:43
witching that over to a similar

01:34:39 --> 01:34:46
technology called flash so within the

01:34:42 --> 01:34:48
last I'd say about decade is increasing

01:34:45 --> 01:34:51
fraction of all the computers in the

01:34:47 --> 01:34:54
world are using semiconductor for

01:34:50 --> 01:34:58
storage the flash drive instead of being

01:34:53 --> 01:35:01
magnetic their optical their there well

01:34:57 --> 01:35:04
their semiconductor writing of

01:35:00 --> 01:35:06
information into very densely

01:35:03 --> 01:35:08
and that's been a huge difference so all

01:35:06 --> 01:35:11
the cell phones in the world use flash

01:35:07 --> 01:35:12
most of the laptops use flash all the

01:35:10 --> 01:35:16
mbedded devices use flash instead of

01:35:12 --> 01:35:19
storage still in the cloud magnetic

01:35:15 --> 01:35:22
disks are more economical than flash but

01:35:18 --> 01:35:23
hey used both in the cloud so it's been

01:35:21 --> 01:35:27
a huge change in the storage industry

01:35:22 --> 01:35:29
this the switching from primarily disk

01:35:26 --> 01:35:31
to being primarily semiconductor for the

01:35:28 --> 01:35:33
individual discs but still the raid

01:35:30 --> 01:35:35
mechanism applies to those different

01:35:32 --> 01:35:38
kinds of yes the the people will still

01:35:34 --> 01:35:40
use raid ideas because it's kind of

01:35:37 --> 01:35:42
what's different you know kind of

01:35:39 --> 01:35:45
interesting kind of psychologically if

01:35:41 --> 01:35:46
you think about it people have always

01:35:44 --> 01:35:48
worried about the reliability of

01:35:45 --> 01:35:50
computing since the earliest days so

01:35:47 --> 01:35:53
kind of but if we're talking about

01:35:49 --> 01:35:57
computation if your computer makes a

01:35:52 --> 01:35:59
mistake and the computer says the

01:35:56 --> 01:36:01
computer has worries to check and say we

01:35:58 --> 01:36:03
screwed up we made a mistake what

01:36:00 --> 01:36:05
happens is that program that was running

01:36:02 --> 01:36:10
you have to redo it which is a hassle

01:36:04 --> 01:36:13
for storage if you've sent important

01:36:09 --> 01:36:15
information away and it loses that

01:36:12 --> 01:36:18
information you go nuts yeah yeah this

01:36:14 --> 01:36:20
the worst I oh my god so if you have

01:36:17 --> 01:36:22
a laptop and you're not backing it up on

01:36:19 --> 01:36:25
the cloud or something like this and

01:36:21 --> 01:36:27
your disk drive breaks which it can do

01:36:24 --> 01:36:29
you'll lose all that information and you

01:36:26 --> 01:36:32
just go crazy right so the importance of

01:36:28 --> 01:36:33
reliability for storage is tremendously

01:36:31 --> 01:36:35
higher than the importance of

01:36:32 --> 01:36:38
reliability for computation because of

01:36:34 --> 01:36:40
the consequences of it so yes so raid

01:36:37 --> 01:36:42
eas are still very popular even with

01:36:39 --> 01:36:44
e switch of the technology although

01:36:41 --> 01:36:46
you know flash drives are more reliable

01:36:43 --> 01:36:48
you know if you're not doing anything

01:36:45 --> 01:36:50
like backing it up to get some

01:36:47 --> 01:36:54
redundancy so they handle it you're

01:36:49 --> 01:36:57
you're taking great risks you

01:36:53 --> 01:36:59
said that for you and possibly from any

01:36:56 --> 01:37:01
others teaching and research don't

01:36:58 --> 01:37:03
conflict with each other as right one

01:37:00 --> 01:37:05
might suspect and in fact they kind of

01:37:02 --> 01:37:07
complement each other so maybe a

01:37:04 --> 01:37:09
question I have is how is teaching

01:37:06 --> 01:37:11
helped you in your research or just in

01:37:08 --> 01:37:14
your

01:37:10 --> 01:37:17
entirety as a person who both teaches

01:37:13 --> 01:37:19
and does research and just thinks and

01:37:16 --> 01:37:21
creates new ideas in this world yes I

01:37:18 --> 01:37:23
think I think what happens is is when

01:37:20 --> 01:37:25
you're a college student you know

01:37:22 --> 01:37:27
there's this kind of tenure system and

01:37:24 --> 01:37:31
oing research so kind of this model

01:37:26 --> 01:37:32
that you know is popular in America I

01:37:30 --> 01:37:34
think America really made it happen is

01:37:31 --> 01:37:37
we can attract these really great

01:37:33 --> 01:37:39
faculty to research universities because

01:37:36 --> 01:37:41
they get to do research as well as teach

01:37:38 --> 01:37:42
and that especially in fast-moving

01:37:40 --> 01:37:44
fields this means people are up-to-date

01:37:41 --> 01:37:46
and they're teaching those kind of

01:37:43 --> 01:37:48
things so but when you run into a really

01:37:45 --> 01:37:50
bad professor a really bad teacher I

01:37:47 --> 01:37:53
think the students think well this guy

01:37:49 --> 01:37:56
must be a great researcher because why

01:37:52 --> 01:37:58
else could he be here so is I you know I

01:37:55 --> 01:37:59
after 40 years at Berkeley we had a

01:37:57 --> 01:38:01
retirement party and I got a chance to

01:37:58 --> 01:38:05
reflect and I looked back to some things

01:38:00 --> 01:38:08
that is not my experience there's a I

01:38:04 --> 01:38:10
saw a photograph of five of us in the

01:38:07 --> 01:38:12
department who won the distinguished

01:38:09 --> 01:38:13
Teaching Award from campus a very high

01:38:11 --> 01:38:15
onor you know what I've got one of

01:38:12 --> 01:38:16
those when the highest honors so they're

01:38:14 --> 01:38:22
five of us on that picture

01:38:15 --> 01:38:24
there's Manuel Blum Richard Karp me

01:38:21 --> 01:38:26
Randy Katz and John osterhaus

01:38:23 --> 01:38:28
contemporaries of mine I mentioned Randy

01:38:25 --> 01:38:30
already all of us are in the National

01:38:27 --> 01:38:34
Academy of Engineering we've all run the

01:38:29 --> 01:38:35
distinguished Teaching Award Blum Karp

01:38:33 --> 01:38:38
and I are all have turing award just

01:38:34 --> 01:38:42
going away that's right you know the

01:38:37 --> 01:38:45
highest award in computing so the

01:38:41 --> 01:38:47
opposite right it's what happens if you

01:38:44 --> 01:38:49
it's it's they're highly correlated so

01:38:46 --> 01:38:52
probably the other way to think of it if

01:38:48 --> 01:38:53
you're very successful people may be

01:38:51 --> 01:38:56
successful at everything they do it's

01:38:52 --> 01:38:57
not an either/or and but it's an

01:38:55 --> 01:38:59
interesting question whether

01:38:56 --> 01:39:01
specifically that's probably true but

01:38:58 --> 01:39:03
specifically for teaching if there's

01:39:00 --> 01:39:05
omething in teaching that it's the

01:39:02 --> 01:39:07
Richard Fineman right right yeah is

01:39:04 --> 01:39:09
there something about teaching that

01:39:06 --> 01:39:12
actually makes your research makes you

01:39:08 --> 01:39:14
think deeper and more outside the box

01:39:11 --> 01:39:16
and yeah absolutely so yeah I was going

01:39:13 --> 01:39:18
to bring up Fineman I mean he criticized

01:39:15 --> 01:39:21
the Institute of Advanced Studies

01:39:17 --> 01:39:22
he says there's Advanced Studies was

01:39:20 --> 01:39:24
this thing that was created in your

01:39:21 --> 01:39:24
Princeton where Einstein and all these

01:39:23 --> 01:39:26
smart people

01:39:23 --> 01:39:28
and when he was invited he said he

01:39:25 --> 01:39:30
thought it was a terrible idea his this

01:39:27 --> 01:39:32
a university was it was supposed to

01:39:29 --> 01:39:34
be heaven right a university without any

01:39:31 --> 01:39:36
teaching but he thought it was a mistake

01:39:33 --> 01:39:38
is getting up in the classroom and

01:39:35 --> 01:39:40
having to explain things to students and

01:39:37 --> 01:39:43
having them ask questions like well why

01:39:39 --> 01:39:46
is that true makes you stop and think so

01:39:42 --> 01:39:48
he to think he thought and I agree I

01:39:45 --> 01:39:50
think that interaction between a retina

01:39:47 --> 01:39:52
research university and having students

01:39:49 --> 01:39:54
with bright young man's asking hard

01:39:51 --> 01:39:57
questions the whole time is synergistic

01:39:53 --> 01:40:01
and you know a university without

01:39:56 --> 01:40:04
eaching wouldn't be as vital and

01:40:00 --> 01:40:07
exciting a place and I think it helps

01:40:03 --> 01:40:10
timulate the the research another

01:40:06 --> 01:40:13
omanticized question but what's your

01:40:09 --> 01:40:15
favorite concept or idea to teach what

01:40:12 --> 01:40:18
inspires you or you see inspire the

01:40:14 --> 01:40:20
students is there something to pasta my

01:40:17 --> 01:40:21
or or puts the fear of God in them I

01:40:19 --> 01:40:24
don't know II whichever is most

01:40:20 --> 01:40:27
effective I mean in general I think

01:40:23 --> 01:40:28
people are surprised I've seen a lot of

01:40:26 --> 01:40:29
people who don't think they like

01:40:27 --> 01:40:32
teaching

01:40:28 --> 01:40:34
come come give guest lectures or teach a

01:40:31 --> 01:40:37
course and get hooked on seeing the

01:40:33 --> 01:40:38
lights turn on right his people you can

01:40:36 --> 01:40:41
explain something to people that they

01:40:37 --> 01:40:42
don't understand and suddenly they get

01:40:40 --> 01:40:45
something you know that's that's not

01:40:41 --> 01:40:47
hat's important and difficult and just

01:40:44 --> 01:40:50
seeing the lights turn on is a you know

01:40:46 --> 01:40:54
it's a real satisfaction there I don't

01:40:49 --> 01:40:56
hink there's any in a specific example

01:40:53 --> 01:40:59
of that it's just the general joy of

01:40:55 --> 01:41:02
seeing them seeing them understand I

01:40:58 --> 01:41:05
have to talk about this because I've

01:41:01 --> 01:41:08
wrestled I do usual arts yes yes I love

01:41:04 --> 01:41:11
Russ I'm a huge I'm Russian so I'll sure

01:41:07 --> 01:41:15
I'd have talked to Dan Gable oh yeah I

01:41:10 --> 01:41:18
guess so fine yang Gables my era kind of

01:41:14 --> 01:41:20
guy so you wrestled UCLA among many

01:41:17 --> 01:41:22
other things you've done in your life

01:41:19 --> 01:41:26
competitively in sports and science on

01:41:21 --> 01:41:29
you've wrestled maybe again continue in

01:41:25 --> 01:41:31
their immense sessions but what have you

01:41:28 --> 01:41:33
learned about life yeah and maybe even

01:41:30 --> 01:41:37
size from wrestling or from that's in

01:41:32 --> 01:41:38
fact I wrestled at UCLA but also at El

01:41:36 --> 01:41:41
Camino can be

01:41:37 --> 01:41:43
College and just right now we were in

01:41:40 --> 01:41:45
the state of California we were state

01:41:42 --> 01:41:48
champions at El Camino and the fact I

01:41:44 --> 01:41:50
was talking to my mom and I got into

01:41:47 --> 01:41:52
UCLA but I decided to go to the

01:41:49 --> 01:41:54
Community College which is it's much

01:41:51 --> 01:41:56
e's harder to go to UCLA than Community

01:41:53 --> 01:41:58
College and I asked why did I make the

01:41:55 --> 01:41:59
decision because I thought that was

01:41:57 --> 01:42:00
because of my girlfriend she said well

01:41:58 --> 01:42:01
it was the girlfriend and and you

01:41:59 --> 01:42:04
thought the wrestling team was really

01:42:00 --> 01:42:07
good and we were right we had a great

01:42:03 --> 01:42:10
wrestling team it we actually wrestled

01:42:06 --> 01:42:13
against UCLA at a tournament and we beat

01:42:09 --> 01:42:16
UCLA it's a community college which just

01:42:12 --> 01:42:17
freshmen and sophomores and the reason I

01:42:15 --> 01:42:20
brought this up is I'm gonna go they've

01:42:16 --> 01:42:25
invited me back at El Camino if give a

01:42:19 --> 01:42:27
lecture next month and so I'm Liev my

01:42:24 --> 01:42:30
friend who was on the wrestling team

01:42:26 --> 01:42:31
that we're still together we're right

01:42:29 --> 01:42:33
now reaching out to other members of the

01:42:30 --> 01:42:36
wrestling team you can get together

01:42:32 --> 01:42:37
every Union but in terms of me it was a

01:42:35 --> 01:42:40
huge difference

01:42:36 --> 01:42:42
I was I was both I was kind of the age

01:42:39 --> 01:42:44
cutoff I was who's December first and so

01:42:41 --> 01:42:49
I was almost always the youngest person

01:42:43 --> 01:42:50
in my class and I matured later on you

01:42:48 --> 01:42:52
know our family badgered later so I was

01:42:49 --> 01:42:56
almost always the smallest guy so you

01:42:51 --> 01:42:58
know I took in kind of nerdy courses but

01:42:55 --> 01:43:02
I was wrestling so wrestling was huge

01:42:57 --> 01:43:04
for my you know self-confidence in high

01:43:01 --> 01:43:07
school and then you know I kind of got

01:43:03 --> 01:43:10
bigger at El Camino and in college and

01:43:06 --> 01:43:14
so I had this kind of physical

01:43:09 --> 01:43:19
self-confidence and it's translated into

01:43:13 --> 01:43:22
research self-confidence and and also

01:43:18 --> 01:43:26
kind of I've had this feeling even today

01:43:21 --> 01:43:27
in my 70s you know if something if

01:43:25 --> 01:43:30
something going on and streets there's

01:43:26 --> 01:43:31
bad physically I'm not gonna ignore it

01:43:29 --> 01:43:33
right I'm gonna stand up and try and

01:43:30 --> 01:43:35
straighten that out and that kind of

01:43:32 --> 01:43:37
confidence just carries through the

01:43:34 --> 01:43:39
ntirety of your life yeah and the same

01:43:36 --> 01:43:40
things happens intellectually if there's

01:43:38 --> 01:43:42
omething going on where people are

01:43:39 --> 01:43:45
saying something that's not true I feel

01:43:41 --> 01:43:46
it's my job to stand up and just like I

01:43:44 --> 01:43:49
would in the street if there's something

01:43:45 --> 01:43:50
oing on somebody attacking some woman

01:43:48 --> 01:43:51
or something I'm not I'm not standing by

01:43:49 --> 01:43:54
and letting that

01:43:50 --> 01:43:56
so I feel it's my job to stand up so

01:43:53 --> 01:43:58
it's kind of ironically translates the

01:43:55 --> 01:44:01
other things that turned out for both I

01:43:57 --> 01:44:04
had really great college in high school

01:44:00 --> 01:44:06
coaches and they believed even though

01:44:03 --> 01:44:07
wrestling's an individual sport that

01:44:05 --> 01:44:10
would be be more successful as a team if

01:44:06 --> 01:44:12
we bonded together you do things that we

01:44:09 --> 01:44:13
would support each other rather than

01:44:11 --> 01:44:15
everybody you know in wrestling it's

01:44:12 --> 01:44:17
one-on-one and you could be everybody's

01:44:14 --> 01:44:20
on their own but he felt if we bonded as

01:44:16 --> 01:44:22
a team we'd succeed so I kind of picked

01:44:19 --> 01:44:24
up those skills of how to form

01:44:21 --> 01:44:27
successful teams and how do you from

01:44:23 --> 01:44:29
wrestling and so I think one of most

01:44:26 --> 01:44:32
people would say one of my strengths is

01:44:28 --> 01:44:34
I can create teams of faculty watch

01:44:31 --> 01:44:36
teams of faculty grad students pull all

01:44:33 --> 01:44:39
together for a common goal and you know

01:44:35 --> 01:44:41
and you often be successful at it but I

01:44:38 --> 01:44:44
got I got both of those things from

01:44:40 --> 01:44:47
wrestling also I think I heard this line

01:44:43 --> 01:44:50
about if people are in kind of you know

01:44:46 --> 01:44:52
collision you know sports with physical

01:44:49 --> 01:44:53
contact like wrestling or football and

01:44:51 --> 01:44:57
stuff like that people are a little bit

01:44:52 --> 01:45:00
more you know assertive or something so

01:44:56 --> 01:45:02
I think I think that also comes through

01:44:59 --> 01:45:04
is you know in I was I didn't shy away

01:45:01 --> 01:45:07
from the risk debates you know I was

01:45:03 --> 01:45:09
yeah I enjoyed taking on the arguments

01:45:06 --> 01:45:11
and stuff like that so it was it was a

01:45:08 --> 01:45:13
I'm really glad I did wrestling I think

01:45:10 --> 01:45:15
it was really good for my self-image and

01:45:12 --> 01:45:17
I learned a lot from it so I think

01:45:14 --> 01:45:20
that's you know sports done well you

01:45:16 --> 01:45:23
know there's really lots of positives

01:45:19 --> 01:45:26
you can take about it leadership you

01:45:22 --> 01:45:28
know how to how to form teams and how to

01:45:25 --> 01:45:30
be successful so we've talked about

01:45:27 --> 01:45:32
metrics a lot there's a really cool in

01:45:29 --> 01:45:34
terms of bench press and weightlifting

01:45:31 --> 01:45:36
pioneers metric do you develop that we

01:45:33 --> 01:45:37
don't have time to talk about but it's

01:45:35 --> 01:45:38
a really cool that people should

01:45:36 --> 01:45:39
look into

01:45:37 --> 01:45:41
it's rethinking the way we think about

01:45:38 --> 01:45:43
metrics and weightlifting but let me

01:45:40 --> 01:45:47
talk about metrics more broadly since

01:45:42 --> 01:45:49
that appeals Cu in all forms let's look

01:45:46 --> 01:45:51
at the most ridiculous the biggest

01:45:48 --> 01:45:53
question of the meaning of life if you

01:45:50 --> 01:45:57
were to try to put metrics on a life

01:45:52 --> 01:46:00
well-lived what would those metrics be

01:45:56 --> 01:46:04
yeah a friend Randy Katz said this he

01:45:59 --> 01:46:05
said you know when when it's time to

01:46:03 --> 01:46:08
sign off it's

01:46:04 --> 01:46:09
the measure isn't the number of

01:46:07 --> 01:46:12
zeros in your bank account it's the

01:46:08 --> 01:46:15
number of inches in the obituary in The

01:46:11 --> 01:46:19
New York Times he said it I I think you

01:46:14 --> 01:46:21
know having and you know this is a

01:46:18 --> 01:46:22
cliche is that people don't die wishing

01:46:20 --> 01:46:27
they'd spent more time in the office

01:46:21 --> 01:46:29
right is I reflect upon my career there

01:46:26 --> 01:46:31
have been you know a half a dozen or a

01:46:28 --> 01:46:34
dozen things say I've been proud of a

01:46:30 --> 01:46:37
lot of them aren't papers or scientific

01:46:33 --> 01:46:40
well certainly my family my wife we've

01:46:36 --> 01:46:43
been married more than 50 years kids and

01:46:39 --> 01:46:46
grandkids that's really precious

01:46:42 --> 01:46:49
education thinks I've done I'm very

01:46:45 --> 01:46:51
proud of you know books and courses I

01:46:48 --> 01:46:54
did some help with underrepresented

01:46:50 --> 01:46:55
groups that was effective so it was

01:46:53 --> 01:46:57
interesting just seeing what were the

01:46:54 --> 01:47:00
things I reflected you know I had

01:46:56 --> 01:47:02
hundreds of papers but some of them

01:46:59 --> 01:47:03
weren't the papers like the risk and

01:47:01 --> 01:47:05
rate stuff wasn't proud of but a lot of

01:47:02 --> 01:47:08
them were or not those things so people

01:47:04 --> 01:47:11
who are just spend their lives you know

01:47:07 --> 01:47:12
going after the dollars are going after

01:47:10 --> 01:47:15
all the papers in the world you know

01:47:11 --> 01:47:17
that's probably not the things that are

01:47:14 --> 01:47:20
afterwards you're gonna care about when

01:47:16 --> 01:47:22
I was a yeah just when I got the offer

01:47:19 --> 01:47:24
from Berkeley but before I showed up I

01:47:21 --> 01:47:26
read a book where they interviewed a lot

01:47:23 --> 01:47:28
of people in all walks of life and what

01:47:25 --> 01:47:29
I got out of that book was the people

01:47:27 --> 01:47:31
who felt good about what they did was

01:47:28 --> 01:47:33
the people who affected people as

01:47:30 --> 01:47:35
opposed to things that were more

01:47:32 --> 01:47:37
transitory so I came into this job

01:47:34 --> 01:47:38
assuming that it wasn't going to be the

01:47:36 --> 01:47:40
papers it was gonna be relationships

01:47:37 --> 01:47:43
with the people over time that I would I

01:47:39 --> 01:47:45
would value and that was a correct

01:47:42 --> 01:47:47
assessment right it's it's the people

01:47:44 --> 01:47:49
you work with the people you can

01:47:46 --> 01:47:50
influence the people you can help is the

01:47:48 --> 01:47:52
things that you feel good about towards

01:47:49 --> 01:47:55
into your career it's not not the the

01:47:51 --> 01:47:57
stuff that's more transitory I don't

01:47:54 --> 01:47:59
hink there's a better way to end it

01:47:56 --> 01:48:02
hen talking about your family the the

01:47:58 --> 01:48:06
over 50 years of being married to your

01:48:01 --> 01:48:07
childhood sweetheart is how do when you

01:48:05 --> 01:48:10
tell people you've been married 50 years

01:48:06 --> 01:48:13
they want to know why how why I can tell

01:48:09 --> 01:48:15
you the nine magic words that you need

01:48:12 --> 01:48:18
to say to your partner to keep a good

01:48:14 --> 01:48:22
relationship in the nine magic words are

01:48:17 --> 01:48:24
was wrong you were right I love you okay

01:48:21 --> 01:48:25
and you got to say all nine you can't

01:48:23 --> 01:48:29
say I was wrong you were right you're a

01:48:25 --> 01:48:30
jerk you know you guess so yeah a freely

01:48:28 --> 01:48:33
acknowledging that you made a mistake

01:48:29 --> 01:48:36
the other person was right and that you

01:48:32 --> 01:48:38
love them really gets over a lot of

01:48:35 --> 01:48:41
bumps in the road so that's what I pass

01:48:37 --> 01:48:43
along beautifully put David is a huge

01:48:40 --> 01:48:44
honor thank you so much for the book

01:48:42 --> 01:48:46
you've written for the research you've

01:48:43 --> 01:48:47
done for changing the world thank you

01:48:45 --> 01:48:48
for talking to that oh thanks for the

01:48:46 --> 01:48:50
interview

01:48:47 --> 01:48:51
thanks for listening to this

01:48:49 --> 01:48:54
conversation with David Patterson and

01:48:50 --> 01:48:57
thank you to our sponsors the Jordan

01:48:53 --> 01:48:59
Harbinger show and cash app please

01:48:56 --> 01:49:02
consider supporting this podcast by

01:48:58 --> 01:49:05
going to Jordan Harbinger complex and

01:49:01 --> 01:49:08
ownloading cash app and using colex

01:49:04 --> 01:49:10
podcast click the links buy the stuff

01:49:07 --> 01:49:13
it's the best way to support this

01:49:09 --> 01:49:15
podcast and the journey I'm on if you

01:49:12 --> 01:49:17
enjoy this thing subscribe on youtube

01:49:14 --> 01:49:19
review it with five stars in a podcast

01:49:16 --> 01:49:21
supported on patreon or connect with me

01:49:18 --> 01:49:25
on Twitter and lex Freedman spelled

01:49:20 --> 01:49:29
without the e try to figure out how to

01:49:24 --> 01:49:31
do that it's just fr ID ma n and now let

01:49:28 --> 01:49:34
me leave you with some words from Henry

01:49:30 --> 01:49:39
David Thoreau our life is frittered away

01:49:33 --> 01:49:41
by detail simplify simplify

01:49:38 --> 01:49:44
thank you for listening and hope to see

01:49:40 --> 01:49:44
you next time

01:49:48 --> 01:49:51
you

<!-- YOUTUBE_TRANSCRIPT_END -->
