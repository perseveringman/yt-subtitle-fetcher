---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "pnWkj6Caelc"
title: "Bjarne Stroustrup: Recognizing Beautiful Code"
video_url: "https://www.youtube.com/watch?v=pnWkj6Caelc"
thumbnail_url: "https://i.ytimg.com/vi/pnWkj6Caelc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=pnWkj6Caelc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-10T20:20:01.000Z"
upload_date: "2019-11-10"
duration_seconds: 312
duration_human: "5:12"
view_count: 34555
like_count: 999
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:46:21.189Z"
---

# Bjarne Stroustrup: Recognizing Beautiful Code

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=pnWkj6Caelc
- video_id: pnWkj6Caelc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-10T20:20:01.000Z
- upload_date: 2019-11-10
- duration: 5:12
- view_count: 34555
- like_count: 999
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, clean code, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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

00:00:01 --> 00:00:12
so how do you inspire or ensure that the

00:00:08 --> 00:00:15
Einstein level simplification is reached

00:00:11 --> 00:00:19
so okay can you do code review can you

00:00:14 --> 00:00:24
look at code is there if I gave you the

00:00:18 --> 00:00:28
code for the Ford f-150 and said here is

00:00:23 --> 00:00:30
this a mess or is this okay is it

00:00:27 --> 00:00:35
possible to tell is it possible to

00:00:29 --> 00:00:38
regulate an experienced developer can do

00:00:34 --> 00:00:43
it code and see if it smells you know

00:00:37 --> 00:00:50
I'm mixed metaphors deliberately yes the

00:00:42 --> 00:00:54
point is that it is hard to generate

00:00:49 --> 00:00:59
something that is really obviously clean

00:00:53 --> 00:01:01
d can be appreciated but you can

00:00:58 --> 00:01:06
usually recognize when you haven't

00:01:00 --> 00:01:11
reached that point and so if I I've

00:01:05 --> 00:01:13
never looked at me if 150 code so I

00:01:10 --> 00:01:15
wouldn't know but but I know what I

00:01:13 --> 00:01:18
ought to be looking for there I'll be

00:01:14 --> 00:01:22
looking for some tricks that correlates

00:01:17 --> 00:01:26
with bugs and elsewhere and I have tried

00:01:21 --> 00:01:31
to formulate rules for what good code

00:01:25 --> 00:01:36
looks like and the current version of

00:01:30 --> 00:01:36
that is called the C++ core guidelines

00:01:35 --> 00:01:42
one thing people should remember is

00:01:38 --> 00:01:46
there's what you can do in a language

00:01:41 --> 00:01:49
and what you should do in a language you

00:01:45 --> 00:01:52
have lots of things that is necessary in

00:01:48 --> 00:01:55
some context but not in others as things

00:01:51 --> 00:01:57
that exist just because there's 30 year

00:01:54 --> 00:01:59
old code out there and you can't get rid

00:01:56 --> 00:02:01
of it but you can't have rules it says

00:01:58 --> 00:02:08
when you create it try and follow these

00:02:00 --> 00:02:10
rules this does not create good programs

00:02:07 --> 00:02:13
by themselves but it limits the damage

00:02:09 --> 00:02:15
and off for mistakes it limits the

00:02:12 --> 00:02:18
possibilities of a mistake

00:02:14 --> 00:02:22
and basically we are trying to say what

00:02:17 --> 00:02:25
is it that a good programmer does at the

00:02:21 --> 00:02:28
fairly simple level of where you use the

00:02:24 --> 00:02:31
language and how you use it now I can

00:02:27 --> 00:02:34
move all the rules for chiseling in ma

00:02:30 --> 00:02:37
rble it doesn't mean that somebody who

00:02:34 --> 00:02:40
follows all of those rules can do a

00:02:36 --> 00:02:44
masterpiece by Michel Angelo

00:02:39 --> 00:02:47
that is there something else to write a

00:02:43 --> 00:02:50
good program just is there something

00:02:46 --> 00:02:54
else to create important work of art

00:02:49 --> 00:03:00
hat is there's some kind of inspiration

00:02:53 --> 00:03:05
understanding gift but we can approach

00:02:59 --> 00:03:10
the sort of technical the the

00:03:04 --> 00:03:13
craftsmanship level of it the the famous

00:03:09 --> 00:03:14
painters the famous cultures was among

00:03:12 --> 00:03:18
other things

00:03:13 --> 00:03:22
uperb craftsmen they could express

00:03:17 --> 00:03:27
their ideas using their tools very well

00:03:21 --> 00:03:29
and so these days I think what I'm doing

00:03:26 --> 00:03:31
what a lot of people are doing we are

00:03:28 --> 00:03:34
still trying to figure out how it is to

00:03:30 --> 00:03:39
use our tools very well for a really

00:03:33 --> 00:03:41
good piece of code you need a spark of

00:03:38 --> 00:03:43
inspiration and you can't

00:03:40 --> 00:03:47
I think regulate that you you you cannot

00:03:42 --> 00:03:49
say that I'll take a picture

00:03:46 --> 00:03:55
only I'll buy your picture only if

00:03:48 --> 00:03:58
you're at least then go there are things

00:03:54 --> 00:04:02
you can regulate but not the inspiration

00:03:57 --> 00:04:06
I think that's quite beautifully put it

00:04:01 --> 00:04:08
is true that there is there's an

00:04:05 --> 00:04:14
experienced programmer when you see code

00:04:07 --> 00:04:16
that's inspired that's like Michelangelo

00:04:13 --> 00:04:21
you know it when you see it

00:04:15 --> 00:04:23
and the opposite of that is code that is

00:04:20 --> 00:04:26
messy code that smells you know when you

00:04:22 --> 00:04:28
see it and I'm not sure you can describe

00:04:25 --> 00:04:31
it in words except vaguely through

00:04:27 --> 00:04:35
guidelines and so on yes it's easier to

00:04:30 --> 00:04:38
recognize ugly than to recognize beauty

00:04:34 --> 00:04:40
in code and so the reason is that

00:04:37 --> 00:04:43
sometimes beauty comes from something

00:04:39 --> 00:04:46
that's innovative and unusual and you

00:04:42 --> 00:04:50
have to sometimes think reasonably hard

00:04:45 --> 00:04:52
to appreciate that on the other hand the

00:04:49 --> 00:04:54
misses have things

00:04:51 --> 00:04:54
in common

00:04:59 --> 00:05:02
you

<!-- YOUTUBE_TRANSCRIPT_END -->
