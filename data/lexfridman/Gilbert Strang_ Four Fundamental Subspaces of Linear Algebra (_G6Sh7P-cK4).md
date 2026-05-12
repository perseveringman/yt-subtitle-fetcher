---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "_G6Sh7P-cK4"
title: "Gilbert Strang: Four Fundamental Subspaces of Linear Algebra"
video_url: "https://www.youtube.com/watch?v=_G6Sh7P-cK4"
thumbnail_url: "https://i.ytimg.com/vi/_G6Sh7P-cK4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=_G6Sh7P-cK4"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-27T01:20:00.000Z"
upload_date: "2019-11-27"
duration_seconds: 363
duration_human: "6:03"
view_count: 31041
like_count: 1092
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:09:51.421Z"
---

# Gilbert Strang: Four Fundamental Subspaces of Linear Algebra

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=_G6Sh7P-cK4
- video_id: _G6Sh7P-cK4
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-27T01:20:00.000Z
- upload_date: 2019-11-27
- duration: 6:03
- view_count: 31041
- like_count: 1092
- has_subtitle: true
- language: en
- availability: public
- tags: linear algebra, mit ocw, mit, mit opencourseware, introduction to linear algebra, gilbert strang, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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

00:00:01 --> 00:00:06
so let's talk about linear algebra a

00:00:04 --> 00:00:09
little bit because it is such a it's

00:00:05 --> 00:00:12
both a powerful and a beautiful a

00:00:08 --> 00:00:16
subfield of mathematics so what's your

00:00:11 --> 00:00:18
favorite specific topic in linear

00:00:15 --> 00:00:21
algebra or even math in general to give

00:00:17 --> 00:00:24
a lecture on to convey to tell the story

00:00:20 --> 00:00:28
to teach students okay well on the

00:00:23 --> 00:00:30
teaching side so it's not deep

00:00:27 --> 00:00:34
mathematics at all but I I'm kind of

00:00:29 --> 00:00:38
proud of the idea of the four subspaces

00:00:33 --> 00:00:42
there are four fundamental subspaces

00:00:37 --> 00:00:46
which are of course known before long

00:00:41 --> 00:00:47
before my name for them but can you go

00:00:45 --> 00:00:50
through them can you go through the

00:00:46 --> 00:00:54
future I can yes so the first one to

00:00:49 --> 00:00:56
understand is so the matrix is maybe I

00:00:53 --> 00:00:58
should say the matrix what is the matrix

00:00:55 --> 00:01:02
what's a matrix well so we have a like a

00:00:57 --> 00:01:05
rectangle of numbers so it's got n

00:01:01 --> 00:01:09
columns got a bunch of columns and also

00:01:04 --> 00:01:12
got an M rows let's say and the relation

00:01:08 --> 00:01:15
between so of course the columns and the

00:01:11 --> 00:01:17
rows it's the same numbers so there's

00:01:14 --> 00:01:20
got to be connections there but they're

00:01:16 --> 00:01:22
not simple the they're much the columns

00:01:19 --> 00:01:25
might be longer than the rows and

00:01:21 --> 00:01:28
they've all different the numbers are

00:01:24 --> 00:01:31
mixed up first space to think about is

00:01:27 --> 00:01:34
take the columns so those are vectors

00:01:30 --> 00:01:36
those are points in n dimensions

00:01:33 --> 00:01:39
what's the vector so a physicist would

00:01:35 --> 00:01:43
imagine a vector or might imagine a

00:01:38 --> 00:01:47
vector as a arrow you know in space or

00:01:42 --> 00:01:51
the point it ends at in space for me

00:01:46 --> 00:01:53
it's a column of numbers does it you

00:01:50 --> 00:01:55
often think of this is very interesting

00:01:52 --> 00:01:58
in terms of linear algebra the ends of a

00:01:54 --> 00:02:01
vector you think a little bit more

00:01:57 --> 00:02:04
abstract than the how it's very commonly

00:02:00 --> 00:02:06
used perhaps yeah you think this

00:02:03 --> 00:02:10
arbitrary Speight multi-dimensional

00:02:05 --> 00:02:12
right away I'm in high dimensions and in

00:02:09 --> 00:02:16
the room and yeah that's right in the

00:02:11 --> 00:02:20
lecture I tried a so if you think of two

00:02:15 --> 00:02:23
vectors in ten dimensions I'll do this

00:02:19 --> 00:02:27
in class and I'll readily admit that I

00:02:22 --> 00:02:30
have no good image in my mind of a

00:02:26 --> 00:02:35
vector of arrow int n dimensional space

00:02:29 --> 00:02:37
but whatever you can you can add one

00:02:34 --> 00:02:39
bunch of ten numbers to another bunch of

00:02:36 --> 00:02:42
ten numbers so you can add a vector to a

00:02:38 --> 00:02:44
vector and you can multiply a vector by

00:02:41 --> 00:02:44
three and that's if you know how to do

00:02:43 --> 00:02:47
those

00:02:43 --> 00:02:50
you've got linear algebra you know ten

00:02:46 --> 00:02:52
dimensions yeah you know there's this

00:02:49 --> 00:02:54
beautiful thing about math if you look

00:02:51 --> 00:02:55
string theory and all these theories

00:02:53 --> 00:02:57
which are really fundamentally derived

00:02:54 --> 00:02:59
through math yeah but are very difficult

00:02:56 --> 00:03:02
o visualize it yeah how do you think

00:02:58 --> 00:03:04
about the things like a 10 dimensional

00:03:01 --> 00:03:09
vector that we can't really visualize

00:03:03 --> 00:03:13
yeah do you and and yet math reveals

00:03:08 --> 00:03:16
ome beauty Oh underlying me yeah

00:03:12 --> 00:03:17
our world in that weird thing we can't

00:03:15 --> 00:03:20
visualize how do you think about that

00:03:16 --> 00:03:22
difference well probably I'm not a very

00:03:19 --> 00:03:24
geometric person so I'm probably

00:03:21 --> 00:03:27
thinking in three dimensions and the

00:03:23 --> 00:03:30
beauty of linear algebra is that is that

00:03:26 --> 00:03:32
it goes on to ten dimensions with no

00:03:29 --> 00:03:35
problem I mean that if you're just

00:03:31 --> 00:03:38
seeing what happens if you add two

00:03:34 --> 00:03:41
vectors in 3d you then you can add them

00:03:37 --> 00:03:46
in 10 D you're just adding the ten

00:03:40 --> 00:03:48
components so so I I can't say that I

00:03:45 --> 00:03:52
have a picture but yet I try to push the

00:03:47 --> 00:03:55
class to think of a flat surface in ten

00:03:51 --> 00:04:00
dimensions so a plane in ten dimensions

00:03:54 --> 00:04:03
and so that's one of the spaces take all

00:03:59 --> 00:04:05
the columns of the matrix take all their

00:04:02 --> 00:04:08
combinations so uh so much of this

00:04:04 --> 00:04:10
column so much of this one then if you

00:04:07 --> 00:04:14
put all those together you get some kind

00:04:09 --> 00:04:18
of a flat surface that I call a vector

00:04:13 --> 00:04:20
space space of vectors and and my

00:04:17 --> 00:04:25
imagination is just seeing like a piece

00:04:19 --> 00:04:28
of paper in 3d but anyway so that's one

00:04:24 --> 00:04:31
of the spaces the nuts space number one

00:04:27 --> 00:04:33
the column space of the matrix and then

00:04:30 --> 00:04:36
there's the row space which is as I said

00:04:32 --> 00:04:39
ifferent but came came from the same

00:04:35 --> 00:04:43
numbers so we got the column space all

00:04:38 --> 00:04:45
combinations of the columns and then

00:04:42 --> 00:04:48
we've got the row space all combinations

00:04:44 --> 00:04:51
of the rows so those are those words are

00:04:47 --> 00:04:53
asy for me to say and I can't really

00:04:50 --> 00:04:56
draw them on a blackboard but I try with

00:04:52 --> 00:05:00
my thick chalk everybody everybody likes

00:04:55 --> 00:05:02
that a railroad chalk and me too I

00:04:59 --> 00:05:05
wouldn't use anything else now

00:05:01 --> 00:05:08
and and then the other two spaces are

00:05:04 --> 00:05:12
perpendicular to those so like if you

00:05:07 --> 00:05:17
have a plane in 3d just a plane is just

00:05:11 --> 00:05:20
a flat surface in 3d then perpendicular

00:05:16 --> 00:05:23
to that plane would be a line so that

00:05:19 --> 00:05:26
would be the null space so we've got two

00:05:22 --> 00:05:29
we've got a column space a row space and

00:05:25 --> 00:05:32
they're two perpendicular spaces so

00:05:28 --> 00:05:35
those four fit together and the in a

00:05:31 --> 00:05:38
beautiful picture of a matrix yeah yeah

00:05:34 --> 00:05:40
it's sort of a fundamental it's not a

00:05:37 --> 00:05:45
difficult idea comes comes pretty early

00:05:39 --> 00:05:45
in 1806 and it's basic

00:05:50 --> 00:05:53
you

<!-- YOUTUBE_TRANSCRIPT_END -->
