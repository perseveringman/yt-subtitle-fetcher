---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "LlZWqkCMdfk"
title: "Bjarne Stroustrup: Constructors, Destructors, and Resource Acquisition Is Initialization (RAII)"
video_url: "https://www.youtube.com/watch?v=LlZWqkCMdfk"
thumbnail_url: "https://i.ytimg.com/vi/LlZWqkCMdfk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=LlZWqkCMdfk"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-08T21:20:41.000Z"
upload_date: "2019-11-08"
duration_seconds: 249
duration_human: "4:09"
view_count: 11653
like_count: 427
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:49:00.470Z"
---

# Bjarne Stroustrup: Constructors, Destructors, and Resource Acquisition Is Initialization (RAII)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=LlZWqkCMdfk
- video_id: LlZWqkCMdfk
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-08T21:20:41.000Z
- upload_date: 2019-11-08
- duration: 4:09
- view_count: 11653
- like_count: 427
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, raii, constructor, destructor, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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

00:00:01 --> 00:00:08
there's a lot of features that came in

00:00:03 --> 00:00:11
C++ 11 there's a lot of features at

00:00:07 --> 00:00:16
he birth of C++ they were amazing and

00:00:10 --> 00:00:20
ideas with concepts in 2020 what to you

00:00:15 --> 00:00:26
is the most justjust to you personally

00:00:19 --> 00:00:31
beautiful or just you sit back and think

00:00:25 --> 00:00:37
wow that's just nice and clean feature

00:00:30 --> 00:00:38
of C++ I have written two papers for the

00:00:36 --> 00:00:41
history of programming languages

00:00:37 --> 00:00:44
conference which basically asked me such

00:00:40 --> 00:00:47
questions and I'm writing a third one

00:00:43 --> 00:00:49
which I will deliver at the history of

00:00:46 --> 00:00:52
programming languages conference in

00:00:48 --> 00:00:54
London next year so I've been thinking

00:00:51 --> 00:00:58
about that and there is one play answer

00:00:53 --> 00:01:00
constructors and destructors the way a

00:00:57 --> 00:01:03
constructor can establish the

00:00:59 --> 00:01:06
nvironment for the use of the Java type

00:01:02 --> 00:01:08
for an object and the destructor that

00:01:05 --> 00:01:12
cleans up any messes at the end of it

00:01:07 --> 00:01:14
hat is the key to C++ that's why we

00:01:11 --> 00:01:16
don't have to use garbage collection

00:01:13 --> 00:01:20
that's how we can get predictable

00:01:15 --> 00:01:23
performance that's how you can get the

00:01:19 --> 00:01:28
minimal overhead in many many cases and

00:01:22 --> 00:01:31
have really clean types it's the idea of

00:01:27 --> 00:01:35
constructor destructor pairs sometimes

00:01:30 --> 00:01:38
it comes out under the name our high a

00:01:34 --> 00:01:40
III resource acquisition is

00:01:37 --> 00:01:42
initialization which is the idea that

00:01:39 --> 00:01:45
you grab resources and the constructor

00:01:41 --> 00:01:47
and release them and destructor it's

00:01:44 --> 00:01:50
also the best example of why I shouldn't

00:01:46 --> 00:01:53
be in advertising I get the best idea

00:01:49 --> 00:01:57
nd I call it resource acquisition is

00:01:52 --> 00:02:00
initialization not the greatest naming

00:01:56 --> 00:02:00
I've ever heard

00:01:59 --> 00:02:10
so it's types abstraction of types you

00:02:06 --> 00:02:13
said I want to create my own types so

00:02:09 --> 00:02:15
types is an essential part of C++ in

00:02:12 --> 00:02:20
making them

00:02:14 --> 00:02:22
is the if it is the key part and GU the

00:02:19 --> 00:02:26
this is almost getting philosophical but

00:02:21 --> 00:02:29
he construction and the destruction the

00:02:25 --> 00:02:32
creation of an instance of a type and

00:02:28 --> 00:02:36
the freeing of resources from that

00:02:31 --> 00:02:39
instance of a type is what defines the

00:02:35 --> 00:02:42
object is uh that's a little is like

00:02:38 --> 00:02:45
birth and death is what defines human

00:02:41 --> 00:02:47
life yeah that's right by the way

00:02:44 --> 00:02:51
philosophy is important you can't do

00:02:46 --> 00:02:53
good language design without philosophy

00:02:50 --> 00:02:56
because what you are determining is what

00:02:52 --> 00:02:57
people can express and how this is very

00:02:55 --> 00:03:00
important

00:02:56 --> 00:03:05
by the way constructors destructors came

00:02:59 --> 00:03:08
into C++ in 79 in about the second week

00:03:04 --> 00:03:11
of my work with what was then Corsi the

00:03:07 --> 00:03:13
classes it is a fundamental idea

00:03:10 --> 00:03:17
next comes the fact that you need to

00:03:12 --> 00:03:19
control copying because once you control

00:03:16 --> 00:03:23
as you says birth and death you have to

00:03:19 --> 00:03:26
control taking coffees which is another

00:03:22 --> 00:03:28
way of creating an object and finally

00:03:25 --> 00:03:31
ou have to be able to move things

00:03:27 --> 00:03:35
around so you get the move operations

00:03:30 --> 00:03:39
and that's the set of key operations you

00:03:34 --> 00:03:45
can define on a C++ type inserts you

00:03:39 --> 00:03:50
those things are just a beautiful part

00:03:44 --> 00:03:50
of C++ that is at the core of it all yes

00:03:55 --> 00:03:58
you

<!-- YOUTUBE_TRANSCRIPT_END -->
