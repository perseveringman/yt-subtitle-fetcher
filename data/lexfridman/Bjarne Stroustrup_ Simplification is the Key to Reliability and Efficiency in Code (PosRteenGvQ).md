---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "PosRteenGvQ"
title: "Bjarne Stroustrup: Simplification is the Key to Reliability and Efficiency in Code"
video_url: "https://www.youtube.com/watch?v=PosRteenGvQ"
thumbnail_url: "https://i.ytimg.com/vi/PosRteenGvQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=PosRteenGvQ"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-10T20:20:01.000Z"
upload_date: "2019-11-10"
duration_seconds: 427
duration_human: "7:07"
view_count: 19369
like_count: 663
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:46:30.916Z"
---

# Bjarne Stroustrup: Simplification is the Key to Reliability and Efficiency in Code

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=PosRteenGvQ
- video_id: PosRteenGvQ
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-10T20:20:01.000Z
- upload_date: 2019-11-10
- duration: 7:07
- view_count: 19369
- like_count: 663
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Bjarne Stroustrup from Nov 2019. New full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days. You can watch the full conversation here: https://www.youtube.com/watch?v=uTxRF5ag27A
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on Apple Podcasts (iTunes):
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Note: I select clips with insights from these much longer conversation with the hope of helping make these ideas more accessible and discoverable. Ultimately, this podcast is a small side hobby for me with the goal of sharing and discussing ideas. I did a poll and 92% of people either liked or loved the posting of daily clips, 2% were indifferent, and 6% hated it, some suggesting that I post them on a separate YouTube channel. I hear the 6% and partially agree, so am torn about the whole thing. I tried creating a separate clips channel but the YouTube algorithm makes it very difficult for that channel to grow. So for a little while, I'll keep posting clips on this channel. I ask for your patience and to see these clips as supporting the dissemination of knowledge contained in nuanced discussion. If you enjoy it, consider subscribing, sharing, and commenting.

Bjarne Stroustrup is the creator of C++, a programming language that after 34 years is still one of the most popular and powerful languages in the world. Its focus on fast, stable, robust code underlies many of the biggest systems in the world that we have come to rely on as a society. If you're watching this on YouTube, many of the critical back-end component of YouTube are written in C++. Same goes for Google, Facebook, Amazon, Twitter, most Microsoft applications, Adobe applications, most database systems, and most physical systems that operate in the real-world like cars, robots, rockets that launch us into space and one day will land us on Mars.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:10
what was the origin story of C++ you you

00:00:06 --> 00:00:14
basically gave a few perspectives of

00:00:09 --> 00:00:16
your inspiration of object-oriented

00:00:13 --> 00:00:19
programming that's you had a connection

00:00:15 --> 00:00:22
with C and performance efficiency was an

00:00:18 --> 00:00:24
important thing you were drawn to

00:00:21 --> 00:00:27
efficiency and reliability reliability

00:00:23 --> 00:00:31
ou have to get both what

00:00:26 --> 00:00:33
's reliability i I really want my

00:00:30 --> 00:00:36
telephone calls to get through and I

00:00:32 --> 00:00:39
want to quality if what I am talking

00:00:35 --> 00:00:44
coming out at the other end the other

00:00:38 --> 00:00:46
end might be in London or wherever so

00:00:43 --> 00:00:49
and you don't want the system to be

00:00:45 --> 00:00:54
crashing if you're doing a bank here is

00:00:48 --> 00:00:55
you must crash it might be your your

00:00:53 --> 00:00:58
bank account that is in trouble

00:00:54 --> 00:00:59
there's different constraints like in

00:00:57 --> 00:01:02
games it doesn't matter too much if

00:00:59 --> 00:01:05
there's a crash nobody dies and nobody

00:01:01 --> 00:01:09
gets ruined but I am interested in the

00:01:04 --> 00:01:11
combination of performance partly

00:01:08 --> 00:01:14
because of sort of speed of things being

00:01:10 --> 00:01:18
done part of being able to do things

00:01:13 --> 00:01:23
that is necessary to do to have reliable

00:01:17 --> 00:01:28
nergy of larger systems if you spend

00:01:22 --> 00:01:30
all your time interpreting a simple

00:01:27 --> 00:01:32
function call you are not going to have

00:01:29 --> 00:01:34
nough time to do proper signal

00:01:31 --> 00:01:38
processing to get the telephone calls to

00:01:33 --> 00:01:40
sound right either that or you have to

00:01:37 --> 00:01:43
have 10 times as many computers and you

00:01:39 --> 00:01:45
can't afford your phone anymore it's a

00:01:42 --> 00:01:47
ridiculous idea in the modern world

00:01:44 --> 00:01:51
because we have solved all of those

00:01:46 --> 00:01:53
problems I mean they keep popping up in

00:01:50 --> 00:01:55
different ways as we tackle bigger and

00:01:52 --> 00:01:58
bigger problems so efficiency remains

00:01:54 --> 00:02:00
always an important aspect but you have

00:01:57 --> 00:02:04
to think about efficiency not just as

00:01:59 --> 00:02:07
peed but as an enabler two important

00:02:03 --> 00:02:08
hings and one of the things it enables

00:02:06 --> 00:02:12
is

00:02:07 --> 00:02:15
this reliability is dependability you

00:02:11 --> 00:02:18
won when I press the pedal the brake

00:02:14 --> 00:02:21
pedal of a car it is not actually

00:02:17 --> 00:02:26
connect it directly to to anything but a

00:02:20 --> 00:02:28
computer that computer better work let's

00:02:25 --> 00:02:33
talk about reliability just a little bit

00:02:27 --> 00:02:38
so modern cars have ECU's millions of

00:02:32 --> 00:02:40
lines of code today so this is certainly

00:02:37 --> 00:02:42
especially true of autonomous vehicles

00:02:39 --> 00:02:44
where some of the aspects of the control

00:02:41 --> 00:02:45
or driver assistance systems that steer

00:02:43 --> 00:02:49
the car that keeping the lane and so on

00:02:44 --> 00:02:51
so how do you think you know I talked to

00:02:48 --> 00:02:54
regulators people in government who are

00:02:50 --> 00:02:57
very nervous about testing the safety of

00:02:53 --> 00:03:00
these systems of software ultimately

00:02:56 --> 00:03:04
software that makes decisions that could

00:02:59 --> 00:03:08
lead to fatalities so how do you how do

00:03:03 --> 00:03:14
we test off our systems like these first

00:03:07 --> 00:03:18
of all safety like performance and like

00:03:13 --> 00:03:20
security is a systems property people

00:03:17 --> 00:03:23
tend to look at one part of a system at

00:03:19 --> 00:03:26
a time and saying something like this is

00:03:22 --> 00:03:29
ecure that's all right I don't need to

00:03:25 --> 00:03:33
do that yeah that piece of code is

00:03:28 --> 00:03:35
ecure I'll buy your operator right if

00:03:32 --> 00:03:38
you want to have reliability if you want

00:03:34 --> 00:03:39
o have performance if you want to have

00:03:37 --> 00:03:42
security you have to look at the whole

00:03:38 --> 00:03:44
system I did not expect you to say that

00:03:41 --> 00:03:46
but that's very true

00:03:43 --> 00:03:48
yes I'm dealing with one part of the

00:03:45 --> 00:03:50
system and I want my part to be really

00:03:47 --> 00:03:54
good but I know it's not the whole

00:03:49 --> 00:03:59
system furthermore if making an

00:03:53 --> 00:04:01
individual part perfect may actually not

00:03:58 --> 00:04:03
be the best way of getting the highest

00:04:00 --> 00:04:06
degree of reliability and performance

00:04:02 --> 00:04:08
and such the steamer says see from

00:04:05 --> 00:04:12
France type say not type safe you can

00:04:07 --> 00:04:15
break it sure I can break anything that

00:04:11 --> 00:04:17
runs on a computer I may not go through

00:04:14 --> 00:04:19
your type system

00:04:16 --> 00:04:22
if I wanted to break into your computer

00:04:18 --> 00:04:25
I'll probably try ask you an injection

00:04:21 --> 00:04:28
it's very true if you think about safety

00:04:24 --> 00:04:30
or even reliability at a system level

00:04:27 --> 00:04:35
especially when a human being is

00:04:29 --> 00:04:40
involved it's starts becoming hopeless

00:04:34 --> 00:04:43
pretty quickly in terms of proving that

00:04:39 --> 00:04:45
something is safe to a certain level

00:04:42 --> 00:04:47
yeah there's so many variables it's so

00:04:44 --> 00:04:51
complex well let's get back to something

00:04:46 --> 00:04:54
we can talk about and it actually makes

00:04:50 --> 00:04:56
ome progress on yes we can look at C++

00:04:53 --> 00:05:02
programs and we can try and make sure

00:04:56 --> 00:05:07
they crash this often the way you do

00:05:01 --> 00:05:11
that is largely by simplification it is

00:05:06 --> 00:05:14
not the first step is to simplify the

00:05:10 --> 00:05:16
code have less code have code that are

00:05:13 --> 00:05:18
less likely to go wrong it's not by

00:05:15 --> 00:05:22
runtime testing everything

00:05:17 --> 00:05:26
it is not by big test frameworks that

00:05:21 --> 00:05:29
you're using yes we do that also but the

00:05:25 --> 00:05:31
first step is actually to make sure that

00:05:28 --> 00:05:35
when you want to express something you

00:05:30 --> 00:05:37
can express it directly in code rather

00:05:34 --> 00:05:40
than going through endless loops and

00:05:36 --> 00:05:44
convolutions in your head before it gets

00:05:39 --> 00:05:48
down the code that if if the way you are

00:05:43 --> 00:05:51
thinking about a problem is not in the

00:05:47 --> 00:05:53
code there is a missing piece that's

00:05:50 --> 00:05:57
just in your head and the code you can

00:05:52 --> 00:05:59
see what it does but it cannot see what

00:05:56 --> 00:06:02
you thought about it unless you have

00:05:58 --> 00:06:05
xpressed things directly when you

00:06:01 --> 00:06:05
express things directly you can maintain

00:06:04 --> 00:06:07
it

00:06:04 --> 00:06:10
's these years who find errors is

00:06:06 --> 00:06:12
easier to make modifications it's

00:06:09 --> 00:06:15
actually easier to test it and lo and

00:06:11 --> 00:06:18
behold it runs faster

00:06:14 --> 00:06:20
and therefore you can use a smaller

00:06:17 --> 00:06:24
number of computers which means there's

00:06:19 --> 00:06:26
less hardware that could possibly break

00:06:23 --> 00:06:31
so I think the key here is

00:06:25 --> 00:06:33
implification but it has to be to use

00:06:30 --> 00:06:36
the Einstein code as simple as possible

00:06:32 --> 00:06:38
and no simpler not simpler well there

00:06:35 --> 00:06:40
are other areas with under constraints

00:06:37 --> 00:06:43
where you can be simpler than you can be

00:06:39 --> 00:06:48
in C++ but in the domain and dealing

00:06:42 --> 00:06:48
with that's the simplification I'm after

00:06:53 --> 00:06:56
you

<!-- YOUTUBE_TRANSCRIPT_END -->
