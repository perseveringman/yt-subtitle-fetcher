---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ZQds2aGHwDA"
title: "Bjarne Stroustrup: C++ Implementations - Clang, GCC, Microsoft, and EDG"
video_url: "https://www.youtube.com/watch?v=ZQds2aGHwDA"
thumbnail_url: "https://i.ytimg.com/vi/ZQds2aGHwDA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ZQds2aGHwDA"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-09T18:57:09.000Z"
upload_date: "2019-11-09"
duration_seconds: 305
duration_human: "5:05"
view_count: 142860
like_count: 3876
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:48:39.773Z"
---

# Bjarne Stroustrup: C++ Implementations - Clang, GCC, Microsoft, and EDG

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ZQds2aGHwDA
- video_id: ZQds2aGHwDA
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-09T18:57:09.000Z
- upload_date: 2019-11-09
- duration: 5:05
- view_count: 142860
- like_count: 3876
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, clang, gcc, microsoft, edg, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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

00:00:01 --> 00:00:09
it says there differences in your view

00:00:06 --> 00:00:10
not saying which is better or so on but

00:00:08 --> 00:00:15
difference in the different

00:00:09 --> 00:00:16
implementations of C++ why are there

00:00:14 --> 00:00:19
several sort of money of you naive

00:00:15 --> 00:00:23
questions for me

00:00:18 --> 00:00:29
GCC clang so this is a very reasonable

00:00:22 --> 00:00:29
question when I designed C++

00:00:29 --> 00:00:36
most languages have multiple

00:00:31 --> 00:00:39
implementations because if you wanna I

00:00:35 --> 00:00:42
p.m. if you run on the Sun if you wanna

00:00:38 --> 00:00:44
Motorola those just many many companies

00:00:41 --> 00:00:47
and they each have their own compilation

00:00:43 --> 00:00:49
structure the old compilers it was just

00:00:46 --> 00:00:54
fairly common that those many of them

00:00:48 --> 00:00:57
and I wrote C front assuming that other

00:00:53 --> 00:01:00
people would write compilers for c++ if

00:00:56 --> 00:01:04
i was successful and furthermore i

00:00:59 --> 00:01:07
wanted to utilize all the backend

00:01:03 --> 00:01:10
infrastructure were available I soon

00:01:06 --> 00:01:11
realized that my users were using 25

00:01:09 --> 00:01:15
different linkers I couldn't write my

00:01:10 --> 00:01:19
own linker yes I could but I couldn't

00:01:14 --> 00:01:23
write 25 linkers and also get any work

00:01:18 --> 00:01:25
done on the language and so it came from

00:01:22 --> 00:01:31
a world where there was many linkers

00:01:24 --> 00:01:34
many optimizers many compiler front ends

00:01:30 --> 00:01:37
not not to start but over at many

00:01:33 --> 00:01:41
operating systems the whole world was

00:01:36 --> 00:01:43
not an 86 and linux box or something

00:01:40 --> 00:01:46
whatever is the standard today in the

00:01:42 --> 00:01:49
old days they said a set of X so

00:01:46 --> 00:01:52
basically I assumed there'd be lots of

00:01:48 --> 00:01:55
compilers it was not a decision that

00:01:51 --> 00:01:57
here should be many compilers it was

00:01:54 --> 00:02:05
just a fact that's the way the world is

00:01:56 --> 00:02:10
and yes many compilers emerged and today

00:02:04 --> 00:02:16
there's at least four front ends clang

00:02:09 --> 00:02:18
GCC Microsoft and EDG it is the same

00:02:15 --> 00:02:22
group they they supply a lot of the

00:02:17 --> 00:02:25
independence organizations and the

00:02:21 --> 00:02:28
mbedded systems industry and there's

00:02:24 --> 00:02:31
lots and lots of backends we have to

00:02:27 --> 00:02:35
think about how many dozen begins there

00:02:30 --> 00:02:36
are because different machines have

00:02:34 --> 00:02:39
different things especially in the

00:02:35 --> 00:02:41
mbedded world the machines are very

00:02:38 --> 00:02:42
different the architectures are very

00:02:40 --> 00:02:47
different

00:02:41 --> 00:02:49
and so having a single implementation

00:02:46 --> 00:02:54
was never an option

00:02:48 --> 00:02:58
ow I also haven't disliked monocultures

00:02:53 --> 00:03:01
they are dangerous because

00:02:57 --> 00:03:04
whoever owns the monoculture can go

00:03:00 --> 00:03:08
stale and there's no competition and

00:03:03 --> 00:03:10
there's no incentive to innovate there's

00:03:07 --> 00:03:14
a lot of incentive to put barriers in

00:03:09 --> 00:03:16
the way of change because hey we own the

00:03:13 --> 00:03:19
world and it's a very comfortable world

00:03:15 --> 00:03:23
for us and who are you to to mess with

00:03:18 --> 00:03:28
at so I really am very happy that

00:03:22 --> 00:03:33
here's four front ends for C++ clanks

00:03:27 --> 00:03:37
great but GCC was great but then it got

00:03:32 --> 00:03:40
somewhat stale plane came along and GCC

00:03:36 --> 00:03:44
is much better now competition why

00:03:39 --> 00:03:48
Microsoft is much better now so hello at

00:03:43 --> 00:03:51
least a low number of front end puts a

00:03:47 --> 00:03:51
lot of pressure on

00:03:51 --> 00:03:57
stand-ups compliance and also on

00:03:54 --> 00:04:00
performance and error messages and

00:03:56 --> 00:04:04
compile time speed all this good stuff

00:03:59 --> 00:04:08
that we want do you think crazy question

00:04:03 --> 00:04:11
there might come along you hope that

00:04:07 --> 00:04:16
might come along implementation of C++

00:04:10 --> 00:04:20
written given all its history written

00:04:15 --> 00:04:24
from scratch so written today from

00:04:19 --> 00:04:26
scratch well playing and the LLVM as

00:04:23 --> 00:04:31
more less written by from scratch but

00:04:25 --> 00:04:33
here's been c++ 11 14 17 20 you know

00:04:30 --> 00:04:36
this is a lot you know later somebody's

00:04:33 --> 00:04:40
going to try again there has been

00:04:35 --> 00:04:42
attempts to write new C++ compilers and

00:04:39 --> 00:04:44
some of them has been used and some of

00:04:41 --> 00:04:47
them has been absorbed into others and

00:04:43 --> 00:04:47
so it's yeah it'll happen

00:04:52 --> 00:04:55
you

<!-- YOUTUBE_TRANSCRIPT_END -->
