---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "amXXYgu0eFY"
title: "2+2=5 in Java"
video_url: "https://www.youtube.com/watch?v=amXXYgu0eFY"
thumbnail_url: "https://i.ytimg.com/vi/amXXYgu0eFY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=amXXYgu0eFY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-08-11T13:15:00.000Z"
upload_date: "2020-08-11"
duration_seconds: 206
duration_human: "3:26"
view_count: 141153
like_count: 8048
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:22:57.445Z"
---

# 2+2=5 in Java

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=amXXYgu0eFY
- video_id: amXXYgu0eFY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-08-11T13:15:00.000Z
- upload_date: 2020-08-11
- duration: 3:26
- view_count: 141153
- like_count: 8048
- has_subtitle: true
- language: en
- availability: public
- tags: java (programming language)
- categories: Science & Technology

## Description

Cool/evil trick in Java to make 2+2=5.

StackExchange: https://codegolf.stackexchange.com/a/28818
Code: https://ideone.com/o1h0hR
Java Integer class: https://bit.ly/3acVM1P
2+2=5 in 1984 by Orwell: https://en.wikipedia.org/wiki/2_%2B_2_%3D_5

Support this channel by supporting our sponsors. Click links, get discount:
Eight Sleep: https://eightsleep.com/lex

INFO:
Podcast website:
https://lexfridman.com/ai
Apple Podcasts:
https://apple.co/2lwqZIr
Spotify:
https://spoti.fi/2nEwCF8
RSS:
https://lexfridman.com/category/ai/feed/
Full episodes playlist:
https://www.youtube.com/playlist?list...
Clips playlist:
https://www.youtube.com/playlist?list...

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
this video is about how we can hack java

00:00:02 --> 00:00:06
by using reflection of its own source

00:00:04 --> 00:00:09
code

00:00:05 --> 00:00:13
to make this two plus two statement

00:00:08 --> 00:00:16
output five

00:00:12 --> 00:00:19
just as george orwell one of my favorite

00:00:15 --> 00:00:21
writers warned us about in 1984

00:00:18 --> 00:00:23
about propaganda machines that sublimate

00:00:20 --> 00:00:26
the nature of truth

00:00:22 --> 00:00:27
is video is not about politics

00:00:25 --> 00:00:30
philosophy

00:00:26 --> 00:00:31
nor is it about the apparent as i have

00:00:29 --> 00:00:34
just learned

00:00:30 --> 00:00:35
woke twitter madness around two plus two

00:00:33 --> 00:00:37
equals five

00:00:34 --> 00:00:40
though perhaps if we're living in the

00:00:36 --> 00:00:41
simulation and it's written in java

00:00:39 --> 00:00:45
this might be a way to make the

00:00:40 --> 00:00:46
simulation just a bit more dystopian

00:00:44 --> 00:00:48
so here's what the full source code

00:00:45 --> 00:00:51
looks like and it uses

00:00:47 --> 00:00:51
java's ability to do reflection which is

00:00:50 --> 00:00:53
the

00:00:50 --> 00:00:55
ability of a programming language to

00:00:52 --> 00:00:57
inspect itself so if we look at the code

00:00:54 --> 00:00:59
it actually dives into the

00:00:56 --> 00:01:02
implementation of the integer

00:00:58 --> 00:01:04
class pulls out the integer cache class

00:01:01 --> 00:01:07
from that implementation

00:01:03 --> 00:01:09
makes it accessible and writable

00:01:06 --> 00:01:10
pulls it into an array of integer object

00:01:08 --> 00:01:14
of size

00:01:09 --> 00:01:16
256 and modifies that array

00:01:13 --> 00:01:17
now what does this array contain so

00:01:15 --> 00:01:20
interestingly if we look at the

00:01:16 --> 00:01:22
integer cache class inside the integer

00:01:19 --> 00:01:25
object implementation in java

00:01:21 --> 00:01:27
it defines a hard-coded low of negative

00:01:24 --> 00:01:28
128 and the height as passing as a

00:01:26 --> 00:01:31
parameter

00:01:27 --> 00:01:33
that's 127 as a default and what that

00:01:30 --> 00:01:34
does is create a cache of integer

00:01:32 --> 00:01:37
objects from

00:01:33 --> 00:01:40
negative 128 to 127

00:01:36 --> 00:01:41
and then reuses this cache every time an

00:01:39 --> 00:01:44
integer object

00:01:40 --> 00:01:46
with a value in this range is used now

00:01:43 --> 00:01:48
this is exactly the cache

00:01:45 --> 00:01:49
with reflection that we pull out and

00:01:47 --> 00:01:52
modify

00:01:48 --> 00:01:56
it so happens that the 132nd

00:01:52 --> 00:01:59
element in the cache is where the four

00:01:55 --> 00:02:02
esides and so by way of obfuscation

00:01:58 --> 00:02:03
it takes the 133rd element which has the

00:02:01 --> 00:02:06
number five in it

00:02:02 --> 00:02:07
and the size into 132nd but you can just

00:02:05 --> 00:02:10
assign

00:02:06 --> 00:02:12
value five here and then the result

00:02:09 --> 00:02:14
anywhere else in the code

00:02:11 --> 00:02:16
if you use integer objects and the

00:02:13 --> 00:02:18
number four comes up

00:02:15 --> 00:02:19
it will instead output the number five

00:02:18 --> 00:02:22
there you go

00:02:18 --> 00:02:22
two plus two equals five check out the

00:02:21 --> 00:02:25
link

00:02:22 --> 00:02:27
in the description that points to the

00:02:24 --> 00:02:29
stack exchange code golf has a bunch of

00:02:26 --> 00:02:31
interesting discussions around this

00:02:28 --> 00:02:33
including the possibility of taking the

00:02:30 --> 00:02:36
ntire 256

00:02:32 --> 00:02:38
element array and shuffling it thereby

00:02:35 --> 00:02:41
not only making 2 plus 2 equals 5

00:02:38 --> 00:02:42
but messing with the entirety of low

00:02:40 --> 00:02:44
value

00:02:41 --> 00:02:46
arithmetic in java so there you go

00:02:43 --> 00:02:48
that's how you hack the simulation

00:02:45 --> 00:02:50
let me quickly thank the sponsors that

00:02:47 --> 00:02:52
somehow amazingly support the podcast

00:02:49 --> 00:02:54
and the videos i make

00:02:51 --> 00:02:55
this time is a sleep mattress click the

00:02:53 --> 00:02:56
link to get a discount in the

00:02:54 --> 00:02:58
description

00:02:56 --> 00:03:00
and by the way i have a conversation

00:02:57 --> 00:03:01
with james gosling the creator of java

00:02:59 --> 00:03:03
coming up

00:03:00 --> 00:03:05
on the podcast so check that out and

00:03:02 --> 00:03:20
remember try to learn something new

00:03:04 --> 00:03:20
every day

00:03:25 --> 00:03:28
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
