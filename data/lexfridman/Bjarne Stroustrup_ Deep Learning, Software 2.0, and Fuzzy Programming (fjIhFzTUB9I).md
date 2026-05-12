---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "fjIhFzTUB9I"
title: "Bjarne Stroustrup: Deep Learning, Software 2.0, and Fuzzy Programming"
video_url: "https://www.youtube.com/watch?v=fjIhFzTUB9I"
thumbnail_url: "https://i.ytimg.com/vi/fjIhFzTUB9I/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=fjIhFzTUB9I"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-09T18:57:09.000Z"
upload_date: "2019-11-09"
duration_seconds: 390
duration_human: "6:30"
view_count: 52748
like_count: 1493
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:46:50.152Z"
---

# Bjarne Stroustrup: Deep Learning, Software 2.0, and Fuzzy Programming

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=fjIhFzTUB9I
- video_id: fjIhFzTUB9I
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-09T18:57:09.000Z
- upload_date: 2019-11-09
- duration: 6:30
- view_count: 52748
- like_count: 1493
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, machine learning, deep learning, software 2.0, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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

00:00:01 --> 00:00:07
so a crazy question but I work a lot

00:00:05 --> 00:00:09
with machine learning with deep learning

00:00:06 --> 00:00:13
I'm not sure if you touch that world

00:00:08 --> 00:00:15
that much but you could think of

00:00:12 --> 00:00:16
programming is a thing that takes some

00:00:14 --> 00:00:18
input

00:00:15 --> 00:00:20
programming is the task of creating a

00:00:17 --> 00:00:23
program and a program takes some input

00:00:19 --> 00:00:28
and produces some output so machine

00:00:22 --> 00:00:29
learning systems train on data in order

00:00:27 --> 00:00:33
to be able to take an input and produce

00:00:28 --> 00:00:39
output but there are messy fuzzy things

00:00:32 --> 00:00:42
much like we as children grow up you

00:00:38 --> 00:00:44
know we take some input make some output

00:00:41 --> 00:00:46
but we're noisy we mess up a lot we're

00:00:43 --> 00:00:50
definitely not reliable biological

00:00:45 --> 00:00:52
system are a giant mess so there's a

00:00:49 --> 00:00:54
sense in which machine learning is a

00:00:51 --> 00:00:58
kind of way of programming but just

00:00:53 --> 00:01:03
fuzzy it's very very very different than

00:00:57 --> 00:01:05
C++ because C++ is a like it's just like

00:01:02 --> 00:01:08
you said it's extremely reliable it's

00:01:04 --> 00:01:10
efficient it's you know you can you can

00:01:07 --> 00:01:13
measure you can test in a bunch of

00:01:09 --> 00:01:15
different ways with biological systems

00:01:12 --> 00:01:18
or machine learning systems you can't

00:01:14 --> 00:01:20
say much except sort of empirically

00:01:17 --> 00:01:24
saying that ninety-nine point eight

00:01:19 --> 00:01:26
percent of the time it seems to work

00:01:23 --> 00:01:29
what do you think about this fuzzy kind

00:01:25 --> 00:01:32
of programming indeed even see it as

00:01:28 --> 00:01:35
programming is it solid and totally

00:01:31 --> 00:01:38
another kind of world i I think it's a

00:01:34 --> 00:01:40
different kind of world and it is fuzzy

00:01:37 --> 00:01:47
and in my domain I don't like fuzziness

00:01:39 --> 00:01:49
that is people say things like they want

00:01:46 --> 00:01:54
everybody to be able to program but I

00:01:48 --> 00:01:58
don't want everybody to program my my

00:01:53 --> 00:02:01
aeroplane controls or the car controls I

00:01:57 --> 00:02:03
want that to be done by engineers I want

00:02:00 --> 00:02:06
hat to be done with people that are

00:02:02 --> 00:02:12
specifically educated and trained for

00:02:05 --> 00:02:13
doing building things and it is not for

00:02:11 --> 00:02:16
everybody

00:02:12 --> 00:02:20
similarly a language like C++ is not for

00:02:15 --> 00:02:24
everybody it is generated to be a sharp

00:02:19 --> 00:02:27
and effective tool for professionals

00:02:23 --> 00:02:31
basically and definitely for people who

00:02:26 --> 00:02:33
aim at some kind of precision you

00:02:30 --> 00:02:36
don't have people doing calculations

00:02:32 --> 00:02:39
without understanding math right

00:02:35 --> 00:02:41
counting on your fingers not going to

00:02:38 --> 00:02:48
cut it if you want to fly to the moon

00:02:40 --> 00:02:51
and so there are areas where and

00:02:47 --> 00:02:56
eighty-four percent accuracy rate

00:02:51 --> 00:02:58
sixteen percent false positive rate it's

00:02:55 --> 00:03:02
perfectly acceptable and where people

00:02:57 --> 00:03:05
will probably get no more than 70 you

00:03:01 --> 00:03:08
said ninety-eight percent i what I've

00:03:04 --> 00:03:10
seen is more like eighty four and by by

00:03:07 --> 00:03:12
really a lot of blood sweat and tears

00:03:09 --> 00:03:17
you can get up to the 92 and a half

00:03:11 --> 00:03:21
right so this is fine if it is say

00:03:16 --> 00:03:25
pre-screening stuff before the human

00:03:20 --> 00:03:29
look at it it is not good enough for for

00:03:24 --> 00:03:31
life-threatening situations and so

00:03:28 --> 00:03:34
there's lots of areas where where the

00:03:30 --> 00:03:37
fuzziness is perfectly acceptable and

00:03:33 --> 00:03:39
good and better than humans cheaper land

00:03:36 --> 00:03:42
humans but it's not the kind of

00:03:38 --> 00:03:43
engineering stuff I'm mostly interested

00:03:41 --> 00:03:47
in

00:03:42 --> 00:03:49
I worry a bit about machine learning in

00:03:46 --> 00:03:51
the context of cars you know much more

00:03:48 --> 00:03:54
about this than I do

00:03:50 --> 00:03:56
I worry too but I'm I'm sort of a an

00:03:53 --> 00:04:00
amateur here I've read some of the

00:03:55 --> 00:04:04
papers but I've not ever done it and the

00:03:59 --> 00:04:07
idea that scares me the most is the

00:04:03 --> 00:04:14
one I have heard and I don't know how

00:04:06 --> 00:04:17
common it is that you have this AI

00:04:13 --> 00:04:22
system machine learning all of these

00:04:16 --> 00:04:25
trained neural nets and when they're

00:04:21 --> 00:04:27
something is too complicated they asked

00:04:24 --> 00:04:32
a human for help

00:04:26 --> 00:04:36
but human is reading a book or sleep and

00:04:31 --> 00:04:38
he has 30 seconds or three seconds to

00:04:35 --> 00:04:40
figure out what the problem was that the

00:04:37 --> 00:04:44
AI system couldn't handle and do the

00:04:39 --> 00:04:46
right thing this is scary I mean how do

00:04:43 --> 00:04:50
you do the cutter walk between the

00:04:45 --> 00:04:55
Machine and the human it's very very

00:04:49 --> 00:04:57
difficult and for the designer or one of

00:04:54 --> 00:05:01
the most reliable efficient and powerful

00:04:56 --> 00:05:04
programming languages C++ I can

00:05:00 --> 00:05:08
understand why that world is actually

00:05:03 --> 00:05:11
unappealing it is for most engineers to

00:05:07 --> 00:05:12
me it's extremely appealing because we

00:05:10 --> 00:05:15
don't know how to get that interaction

00:05:11 --> 00:05:18
right but I think it's possible but it's

00:05:14 --> 00:05:21
very very hard it is and I was stating a

00:05:17 --> 00:05:23
problem notice that it's emotional I

00:05:20 --> 00:05:25
mean I would much rather never rely on a

00:05:22 --> 00:05:28
human if you're driving a nuclear

00:05:24 --> 00:05:30
eactor if you're or an autonomous

00:05:27 --> 00:05:33
vehicle it would it's much better to

00:05:29 --> 00:05:37
design systems written in C++ that never

00:05:32 --> 00:05:40
asked human for help let's just get one

00:05:36 --> 00:05:47
fact in yeah all of this AI stoves and

00:05:39 --> 00:05:49
choppers so so that's one reason I have

00:05:46 --> 00:05:51
to keep a weather eye out on what's

00:05:48 --> 00:05:53
going on in that field but I will never

00:05:50 --> 00:05:55
become an expert in that area but it's a

00:05:52 --> 00:05:59
good example of how you separate

00:05:54 --> 00:06:01
different areas of applications and you

00:05:58 --> 00:06:05
have to have different towards different

00:06:00 --> 00:06:07
principles and then they interact no

00:06:04 --> 00:06:09
major system today is written in one

00:06:06 --> 00:06:12
language and there are good reasons for

00:06:08 --> 00:06:12
that

00:06:16 --> 00:06:19
you

<!-- YOUTUBE_TRANSCRIPT_END -->
