---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "YPe5OP7Clv4"
title: "Gilbert Strang: Singular Value Decomposition"
video_url: "https://www.youtube.com/watch?v=YPe5OP7Clv4"
thumbnail_url: "https://i.ytimg.com/vi/YPe5OP7Clv4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=YPe5OP7Clv4"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-28T13:36:48.000Z"
upload_date: "2019-11-28"
duration_seconds: 306
duration_human: "5:06"
view_count: 76508
like_count: 2450
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:09:02.755Z"
---

# Gilbert Strang: Singular Value Decomposition

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=YPe5OP7Clv4
- video_id: YPe5OP7Clv4
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-28T13:36:48.000Z
- upload_date: 2019-11-28
- duration: 5:06
- view_count: 76508
- like_count: 2450
- has_subtitle: true
- language: en
- availability: public
- tags: singular value decomposition, linear algebra, mit ocw, mit, mit opencourseware, introduction to linear algebra, gilbert strang, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Gilbert Strang (Nov 2019): https://www.youtube.com/watch?v=lEZPfmGCEk0
New clips channel (Lex Clips): https://www.youtube.com/lexclips
Once it reaches 20,000 subscribers, I'll start posting the clips there instead. 
(more links below)

For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.

Clip from full episode: https://www.youtube.com/watch?v=lEZPfmGCEk0 If you enjoy these clips, subscribe to the new clips channel (Lex Clips): https://www.youtube.com/lexclips Once it reaches 20,000 subscribers, I'll start posting the clips there instead. For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.
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

Gilbert Strang is a professor of mathematics at MIT and perhaps one of the most famous and impactful teachers of math in the world. His MIT OpenCourseWare lectures on linear algebra have been viewed millions of times.

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
so what concept or theorem in linear

00:00:05 --> 00:00:13
algebra or in math you find most

00:00:09 --> 00:00:15
beautiful it gives you pause that leaves

00:00:12 --> 00:00:18
you and oh well I'll stick with linear

00:00:14 --> 00:00:21
algebra here I hope that viewer knows

00:00:17 --> 00:00:25
that really mathematics is amazing

00:00:20 --> 00:00:28
subject and deep deep

00:00:24 --> 00:00:30
connections between ideas that didn't

00:00:27 --> 00:00:33
look connected something they turned out

00:00:29 --> 00:00:36
hey were but if we stick with linear

00:00:32 --> 00:00:39
algebra so we have a matrix that's like

00:00:35 --> 00:00:41
the basic thing a rectangle of numbers

00:00:38 --> 00:00:43
and might be a rectangle of data you're

00:00:40 --> 00:00:48
probably going to ask me later about

00:00:42 --> 00:00:52
data science where and often data comes

00:00:47 --> 00:00:56
in a matrix you have you know maybe

00:00:51 --> 00:00:59
very column corresponds to a to a drug

00:00:55 --> 00:01:04
in every row corresponds to a patient

00:00:58 --> 00:01:06
and and if the patient reacted favorably

00:01:03 --> 00:01:10
to the drug then you put up some

00:01:05 --> 00:01:13
positive number in there anyway

00:01:09 --> 00:01:17
rectangle of numbers a matrix is basic

00:01:12 --> 00:01:19
so the big problem is to understand all

00:01:16 --> 00:01:22
those numbers you got a big big set of

00:01:18 --> 00:01:28
numbers and what are the patterns what's

00:01:21 --> 00:01:32
going on and so one of the ways to break

00:01:27 --> 00:01:35
down that matrix into simple pieces is

00:01:31 --> 00:01:40
uses something called singular values

00:01:34 --> 00:01:44
and that's come on as fundamental in the

00:01:39 --> 00:01:47
last and certainly in my lifetime I can

00:01:43 --> 00:01:51
values bro you if you have viewers

00:01:46 --> 00:01:54
who've done engineering math or or or

00:01:50 --> 00:01:57
basically in your algebra eigen values

00:01:53 --> 00:02:00
were in there but those are restricted

00:01:56 --> 00:02:02
to square matrices and data comes in

00:01:59 --> 00:02:04
rectangular matrices so you got to take

00:02:01 --> 00:02:08
that you got to take that next step I'm

00:02:03 --> 00:02:11
always pushing math faculty get on

00:02:07 --> 00:02:14
do it don't do it do it

00:02:10 --> 00:02:16
singular values so those are a way to

00:02:13 --> 00:02:19
break too

00:02:15 --> 00:02:23
to make to find these the important

00:02:18 --> 00:02:25
pieces of the matrix which add up to the

00:02:22 --> 00:02:29
whole matrix so so you're breaking a

00:02:24 --> 00:02:31
matrix into simple pieces and the first

00:02:28 --> 00:02:33
piece is the most important part of the

00:02:30 --> 00:02:38
data the second piece is the second most

00:02:32 --> 00:02:42
important part and then often so a data

00:02:37 --> 00:02:44
scientist will like if you if a data

00:02:41 --> 00:02:47
scientist can find those first and

00:02:43 --> 00:02:51
second pieces stop there the rest of of

00:02:46 --> 00:02:57
the data is probably round off you know

00:02:50 --> 00:02:59
e're experimental error maybe so you're

00:02:56 --> 00:03:01
looking for the important part yeah so

00:02:58 --> 00:03:03
what do you find beautiful about

00:03:00 --> 00:03:06
singular values well yeah I didn't give

00:03:02 --> 00:03:09
the theorem so here's the here's the

00:03:05 --> 00:03:13
idea of singular values every matrix

00:03:08 --> 00:03:16
rectangular square whatever

00:03:12 --> 00:03:19
you can be written as a product of three

00:03:15 --> 00:03:21
very simple special matrices so that's

00:03:18 --> 00:03:25
the theorem every matrix can be written

00:03:20 --> 00:03:29
as a rotation times a stretch which is

00:03:24 --> 00:03:32
just a matrix diagonal matrix otherwise

00:03:28 --> 00:03:35
all zeros except on the one diagonal and

00:03:31 --> 00:03:38
then a third and the third factor is

00:03:34 --> 00:03:43
another rotation so rotation stretch

00:03:37 --> 00:03:46
rotation is the breakup of a of any

00:03:42 --> 00:03:48
matrix the structure that the ability

00:03:45 --> 00:03:49
that you can do that what do you find

00:03:47 --> 00:03:52
appealing what do you find beautiful

00:03:48 --> 00:03:56
bottom well geometrically as I freely

00:03:51 --> 00:03:58
admit the mate action of a matrix this

00:03:55 --> 00:04:00
not so easy to visualize but

00:03:57 --> 00:04:03
everybody can visualize a rotation

00:03:59 --> 00:04:05
take-take-take

00:04:02 --> 00:04:08
two-dimensional space and just turn it

00:04:04 --> 00:04:11
around the around the center take three

00:04:07 --> 00:04:15
dimensional space so a pilot has to know

00:04:10 --> 00:04:17
about well what are the three the yaw is

00:04:14 --> 00:04:21
one of them I've forgotten all the three

00:04:16 --> 00:04:23
turns that a pilot makes up to ten

00:04:20 --> 00:04:27
dimensions you've got ten ways to turn

00:04:22 --> 00:04:29
but you can visualize a rotation take

00:04:26 --> 00:04:31
this base and turn it

00:04:28 --> 00:04:36
and you can visualize a stretch so to

00:04:30 --> 00:04:39
break a matrix with all those numbers in

00:04:35 --> 00:04:43
it into something you can visualize

00:04:38 --> 00:04:47
rotate stretch rotate is pretty neat

00:04:42 --> 00:04:47
that's pretty powerful

00:04:52 --> 00:04:55
you

<!-- YOUTUBE_TRANSCRIPT_END -->
