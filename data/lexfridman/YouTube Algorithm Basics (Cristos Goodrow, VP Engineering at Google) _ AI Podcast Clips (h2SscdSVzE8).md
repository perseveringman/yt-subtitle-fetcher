---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "h2SscdSVzE8"
title: "YouTube Algorithm Basics (Cristos Goodrow, VP Engineering at Google) | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=h2SscdSVzE8"
thumbnail_url: "https://i.ytimg.com/vi/h2SscdSVzE8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=h2SscdSVzE8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-01-26T17:53:01.000Z"
upload_date: "2020-01-26"
duration_seconds: 2220
duration_human: "37:00"
view_count: 17270
like_count: 685
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:55:29.432Z"
---

# YouTube Algorithm Basics (Cristos Goodrow, VP Engineering at Google) | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=h2SscdSVzE8
- video_id: h2SscdSVzE8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-01-26T17:53:01.000Z
- upload_date: 2020-01-26
- duration: 37:00
- view_count: 17270
- like_count: 685
- has_subtitle: true
- language: en
- availability: public
- tags: cristos goodrow, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Cristos Goodrow (Jan 2020): https://www.youtube.com/watch?v=nkWmiNRPU-c
Clips channel (Lex Clips): https://www.youtube.com/lexclips
Main channel (Lex Fridman): https://www.youtube.com/lexfridman
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

Cristos Goodrow is VP of Engineering at Google and head of Search and Discovery at YouTube (aka YouTube Algorithm).

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
maybe the basics of the quote-unquote

00:00:04 --> 00:00:11
YouTube algorithm what is the YouTube

00:00:07 --> 00:00:12
algorithm look at to make recommendation

00:00:10 --> 00:00:15
for what to watch next was from a

00:00:11 --> 00:00:19
machine learning perspective or when you

00:00:14 --> 00:00:21
search for a particular term how does it

00:00:18 --> 00:00:23
know what to show you next because it

00:00:20 --> 00:00:26
seems to at least for me do an

00:00:22 --> 00:00:28
incredible job both well that's kind of

00:00:25 --> 00:00:32
you to say it didn't used to do a very

00:00:27 --> 00:00:34
good job but it's gotten better over the

00:00:31 --> 00:00:36
years even even I observed that it's

00:00:33 --> 00:00:38
improved quite a bit

00:00:35 --> 00:00:41
hose are two different situations like

00:00:37 --> 00:00:44
when you search for something YouTube

00:00:40 --> 00:00:48
uses the best technology we can get from

00:00:43 --> 00:00:49
Google to make sure that that the

00:00:47 --> 00:00:52
YouTube search system finds what

00:00:48 --> 00:00:54
someone's looking for and of course the

00:00:51 --> 00:00:57
very first things that one thinks about

00:00:53 --> 00:01:02
is okay well does the word occur in the

00:00:56 --> 00:01:03
title for instance you know but there

00:01:01 --> 00:01:06
are much more sophisticated

00:01:02 --> 00:01:10
things where we're mostly trying to do

00:01:05 --> 00:01:13
some syntactic match or or maybe a

00:01:09 --> 00:01:17
semantic match based on words that we

00:01:12 --> 00:01:20
can add to the document itself for

00:01:16 --> 00:01:24
instance you know maybe is is this video

00:01:19 --> 00:01:27
watched a lot after this query right

00:01:23 --> 00:01:30
hat's something that we can observe and

00:01:26 --> 00:01:33
then as a result make sure that that

00:01:29 --> 00:01:36
document would be retrieved for

00:01:32 --> 00:01:39
that query now when you talk about what

00:01:35 --> 00:01:43
kind of videos would be recommended to

00:01:38 --> 00:01:45
watch next that's something again we've

00:01:42 --> 00:01:51
been working on for many years and

00:01:44 --> 00:01:55
probably the first the first real

00:01:50 --> 00:01:58
attempt to do that well was to use

00:01:54 --> 00:01:59
collaborative filtering so you can

00:01:57 --> 00:02:03
describe what collaborative filtering is

00:01:58 --> 00:02:06
ure it's just basically what we do is

00:02:02 --> 00:02:10
we observe which videos get watched

00:02:05 --> 00:02:14
close together by the same person and if

00:02:09 --> 00:02:16
you observe that and if you can imagine

00:02:13 --> 00:02:18
creating a graph

00:02:15 --> 00:02:20
where the videos that get watched close

00:02:17 --> 00:02:22
together by the most people are sort of

00:02:19 --> 00:02:24
very close to one another in this graph

00:02:21 --> 00:02:26
and videos that don't frequently get

00:02:23 --> 00:02:28
watch close too close together by the

00:02:25 --> 00:02:33
same person or the same people are far

00:02:27 --> 00:02:35
apart then you end up with this graph

00:02:32 --> 00:02:37
that we call the related graph that

00:02:34 --> 00:02:41
basically represents videos that are

00:02:36 --> 00:02:46
very similar or related in some way and

00:02:40 --> 00:02:48
what's amazing about that is that it

00:02:45 --> 00:02:50
puts all the videos that are in the same

00:02:47 --> 00:02:53
language together for instance and we

00:02:49 --> 00:02:56
didn't even have to think about language

00:02:52 --> 00:02:57
it just does it yeah I didn't it puts

00:02:55 --> 00:02:59
all the videos that are about sports

00:02:56 --> 00:03:01
together and it puts most of the music

00:02:58 --> 00:03:04
videos together and it puts all of these

00:03:00 --> 00:03:07
sorts of videos together just because

00:03:03 --> 00:03:10
that's sort of the way the people using

00:03:06 --> 00:03:14
YouTube behave so that already cleans up

00:03:09 --> 00:03:17
a lot of the problem it takes care of

00:03:13 --> 00:03:19
the lowest hanging fruit which happens

00:03:16 --> 00:03:22
to be a huge one of just managing these

00:03:18 --> 00:03:24
millions of videos that's right I

00:03:21 --> 00:03:28
remember a few years ago I was talking

00:03:23 --> 00:03:32
to someone who was trying to propose

00:03:27 --> 00:03:37
that we do a research project concerning

00:03:31 --> 00:03:41
people who who are bilingual and this

00:03:36 --> 00:03:44
person was making this proposal based on

00:03:40 --> 00:03:48
the idea that YouTube could not possibly

00:03:43 --> 00:03:53
be good at recommending videos well to

00:03:47 --> 00:03:55
people who are bilingual and so she was

00:03:52 --> 00:03:57
telling me about this and I said well

00:03:54 --> 00:03:59
can you give me an example of what

00:03:56 --> 00:04:00
problem do you think we have on YouTube

00:03:58 --> 00:04:05
with the recommendations and so she said

00:03:59 --> 00:04:07
well I'm a researcher in in the US and

00:04:04 --> 00:04:10
when I'm looking for academic topics

00:04:06 --> 00:04:12
I want to look I want to see them in

00:04:09 --> 00:04:13
English and so she searched for one

00:04:11 --> 00:04:15
found a video and then looked at the

00:04:12 --> 00:04:18
watch next suggestions and they were all

00:04:14 --> 00:04:20
in in English and so she said oh I see

00:04:17 --> 00:04:23
YouTube must think that I speak only

00:04:19 --> 00:04:25
English and so she said now I'm actually

00:04:22 --> 00:04:26
originally from Turkey and sometimes

00:04:24 --> 00:04:29
when I'm cooking let's say I want to

00:04:25 --> 00:04:31
make some baklava I really like to watch

00:04:28 --> 00:04:33
that are in Turkish and so she search

00:04:30 --> 00:04:35
for a video about making the baklava and

00:04:32 --> 00:04:37
then and then selected it it was in

00:04:34 --> 00:04:39
Turkish and the watch next

00:04:36 --> 00:04:41
recommendations were in Turkish and she

00:04:38 --> 00:04:44
just couldn't believe how this was

00:04:40 --> 00:04:46
possible and and how is it that you know

00:04:43 --> 00:04:47
that I speak both these two languages

00:04:45 --> 00:04:50
and put all the videos together and it's

00:04:46 --> 00:04:52
just as a sort of an outcome of this

00:04:49 --> 00:04:55
related graph that's created through

00:04:51 --> 00:04:56
collaborative filtering so for me one of

00:04:54 --> 00:05:00
my huge interest is just human

00:04:55 --> 00:05:02
psychology right and and that's such a

00:04:59 --> 00:05:05
powerful platform on which to utilize

00:05:01 --> 00:05:07
human psychology to discover what people

00:05:04 --> 00:05:11
individual people want to watch next but

00:05:06 --> 00:05:15
it's also be just fascinating to me you

00:05:10 --> 00:05:18
know I've Google search has ability to

00:05:14 --> 00:05:20
look at your own history and I've done

00:05:17 --> 00:05:23
that before just just what I've searched

00:05:19 --> 00:05:25
three years for many many years and it's

00:05:22 --> 00:05:28
fascinating picture of who I am actually

00:05:24 --> 00:05:31
and I don't think anyone's ever

00:05:27 --> 00:05:34
summarized that I personally would love

00:05:30 --> 00:05:37
that a summary of who I am as a person

00:05:33 --> 00:05:40
the Internet to me because I think it

00:05:36 --> 00:05:43
reveals I I think it puts a mirror to me

00:05:39 --> 00:05:46
or to others you know that's actually

00:05:42 --> 00:05:49
quite revealing and interesting you know

00:05:45 --> 00:05:52
just maybe in the number of it's a joke

00:05:48 --> 00:05:54
but not really is the number of cat

00:05:51 --> 00:05:56
videos I've watched videos of people

00:05:53 --> 00:06:00
falling you know it's the stuff that's

00:05:55 --> 00:06:01
absurd that kind of stuff it's really

00:05:59 --> 00:06:03
interesting and of course it's really

00:06:00 --> 00:06:07
good for the machine learning aspect to

00:06:02 --> 00:06:10
do to show to figure out what to show

00:06:06 --> 00:06:12
next but it's interesting hey have you

00:06:09 --> 00:06:16
just as a tangent played it wrong with

00:06:11 --> 00:06:18
e idea of giving a map to people sort

00:06:15 --> 00:06:21
of as opposed to just using this

00:06:17 --> 00:06:24
information to show us next showing them

00:06:20 --> 00:06:26
here are the clusters you've loved over

00:06:23 --> 00:06:28
the years kind of thing well we do

00:06:25 --> 00:06:30
provide the history of all the videos

00:06:27 --> 00:06:32
that you've watched yes so you can

00:06:29 --> 00:06:33
definitely search through that and and

00:06:31 --> 00:06:35
look through it and search through it to

00:06:32 --> 00:06:39
see what it is that you've been watching

00:06:34 --> 00:06:43
on YouTube we have actually in various

00:06:38 --> 00:06:45
times experimented with this sort

00:06:42 --> 00:06:49
of cluster idea finding ways to

00:06:44 --> 00:06:51
demonstrate or show people what topics

00:06:48 --> 00:06:53
they've been interested in or what what

00:06:50 --> 00:06:54
clusters they've watched from it's

00:06:52 --> 00:06:59
interesting that you bring this up

00:06:53 --> 00:07:01
because in some sense the the way the

00:06:58 --> 00:07:05
recommendation system of YouTube sees a

00:07:00 --> 00:07:06
user is exactly as the history of all

00:07:04 --> 00:07:12
the videos they've watched on YouTube

00:07:05 --> 00:07:15
and so you can think of yourself or any

00:07:11 --> 00:07:20
user on YouTube as kind of like a DNA

00:07:14 --> 00:07:23
strand of all your videos right that

00:07:19 --> 00:07:25
sort of represents you you can also

00:07:22 --> 00:07:27
think of it as maybe a vector in the

00:07:24 --> 00:07:30
space of all the videos on YouTube and

00:07:26 --> 00:07:33
so you know now once you think of it as

00:07:29 --> 00:07:34
a vector in the space of all the videos

00:07:32 --> 00:07:36
on YouTube then you can start to say

00:07:33 --> 00:07:39
okay well you know which videos which

00:07:35 --> 00:07:43
other vectors are close to me and

00:07:38 --> 00:07:45
to my vector and and that's one of the

00:07:42 --> 00:07:46
ways that we generate some diverse

00:07:44 --> 00:07:49
recommendations is because you're like

00:07:45 --> 00:07:51
okay well you know these these people

00:07:48 --> 00:07:53
seem to be closed with respect to the

00:07:50 --> 00:07:55
videos they've watched on YouTube but

00:07:52 --> 00:07:58
you know here's a topic or a video that

00:07:54 --> 00:08:00
one of them has watched and enjoyed but

00:07:57 --> 00:08:02
he other one hasn't that could be an

00:07:59 --> 00:08:04
opportunity to make a good

00:08:01 --> 00:08:05
recommendation I can tell you I mean I

00:08:03 --> 00:08:08
know they asked for things that are

00:08:04 --> 00:08:10
impossible but I would love to cluster

00:08:07 --> 00:08:13
then human beings like I would love to

00:08:09 --> 00:08:15
know who has similar trajectories as me

00:08:12 --> 00:08:17
you probably would want to hang out

00:08:14 --> 00:08:19
alright there's a social aspect there

00:08:16 --> 00:08:21
like actually finding some of the most

00:08:18 --> 00:08:23
fascinating people I find out in YouTube

00:08:20 --> 00:08:25
but have like no followers and I start

00:08:22 --> 00:08:27
following them and they create

00:08:24 --> 00:08:30
incredible content and you know and on

00:08:26 --> 00:08:32
that topic I just love to ask there's

00:08:29 --> 00:08:36
ome videos just blow my mind in terms

00:08:31 --> 00:08:39
of quality and depth and just in every

00:08:35 --> 00:08:42
regard are amazing videos and they have

00:08:38 --> 00:08:48
like 57 views okay

00:08:41 --> 00:08:50
how do you get videos of quality to be

00:08:47 --> 00:08:54
seen by many eyes so the measure of

00:08:49 --> 00:08:56
quality is it just something yeah how do

00:08:53 --> 00:08:57
you know that something is good well I

00:08:55 --> 00:08:59
mean I think it

00:08:56 --> 00:09:03
pens initially on what sort of video

00:08:58 --> 00:09:05
we're talking about so in the realm of

00:09:02 --> 00:09:11
let's say you mentioned politics and

00:09:04 --> 00:09:15
news in that realm you know quality news

00:09:10 --> 00:09:19
or quality journalism relies on having a

00:09:14 --> 00:09:21
journalism department right like you you

00:09:18 --> 00:09:23
have to have actual journalists and

00:09:20 --> 00:09:27
fact-checkers and people like that and

00:09:22 --> 00:09:31
so in that situation and in others maybe

00:09:26 --> 00:09:33
science or in medicine quality has a lot

00:09:30 --> 00:09:35
o do with the authoritative 'no sand

00:09:32 --> 00:09:38
the credibility and the expertise of the

00:09:34 --> 00:09:39
people who make the video now if you're

00:09:37 --> 00:09:42
thinking about the other end of the

00:09:38 --> 00:09:44
spectrum you know what is the highest

00:09:41 --> 00:09:47
quality prank video for what is the

00:09:43 --> 00:09:51
highest quality minecraft video yeah

00:09:46 --> 00:09:53
right that might be the one that people

00:09:50 --> 00:09:58
njoy watching the most and watch to the

00:09:52 --> 00:10:01
nd or it might be the one that when we

00:09:57 --> 00:10:04
ask people the next day after they

00:10:00 --> 00:10:07
watched it were they satisfied with it

00:10:03 --> 00:10:10
and so we in in especially in the realm

00:10:06 --> 00:10:14
of entertainment have been trying to get

00:10:09 --> 00:10:18
at better and better measures of quality

00:10:13 --> 00:10:20
or satisfaction or enrichment since I

00:10:17 --> 00:10:23
came to YouTube and we started with well

00:10:19 --> 00:10:27
you know the first approximation is the

00:10:22 --> 00:10:29
one that gets more views but but you

00:10:26 --> 00:10:32
know we both know that things can get a

00:10:28 --> 00:10:35
lot of views and not really be that high

00:10:31 --> 00:10:36
quality especially if people are

00:10:34 --> 00:10:38
clicking on something and then

00:10:35 --> 00:10:41
immediately realizing that it's not that

00:10:37 --> 00:10:44
great and abandoning it and that's why

00:10:40 --> 00:10:46
we move from views to thinking about the

00:10:43 --> 00:10:49
amount of time people spend watching it

00:10:45 --> 00:10:52
what the premise that like you know in

00:10:48 --> 00:10:56
some sense the time that someone spends

00:10:51 --> 00:10:58
watching a video is related to the value

00:10:55 --> 00:10:59
that they get from that video it may not

00:10:57 --> 00:11:02
be perfectly related but it has

00:10:58 --> 00:11:05
omething to say about how much value

00:11:01 --> 00:11:08
they get but even that's not good enough

00:11:04 --> 00:11:10
right because I myself have spent time

00:11:07 --> 00:11:12
clicking through channels on

00:11:09 --> 00:11:15
television late at night and ended up

00:11:11 --> 00:11:17
watching under siege too for some reason

00:11:14 --> 00:11:19
I don't know and if you were to ask me

00:11:16 --> 00:11:22
the next day are you glad that you

00:11:18 --> 00:11:24
watched that show on TV last night I'd

00:11:21 --> 00:11:27
say yeah I wish I would have gotten to

00:11:23 --> 00:11:32
bed and read a book or almost anything

00:11:26 --> 00:11:33
else really and so that's why some

00:11:31 --> 00:11:38
people got the idea a few years ago to

00:11:32 --> 00:11:41
try to survey users afterwards and so so

00:11:37 --> 00:11:43
we get feedback data from those surveys

00:11:40 --> 00:11:45
and then use that in the machine

00:11:42 --> 00:11:46
learning system to try to not just

00:11:44 --> 00:11:49
predict what you're gonna click on right

00:11:45 --> 00:11:52
now what you might watch for a while but

00:11:48 --> 00:11:55
what when we ask you tomorrow you'll

00:11:51 --> 00:11:58
give four or five stars too so just to

00:11:54 --> 00:12:00
summarize what are the signals from a

00:11:57 --> 00:12:01
machine learning perspective these can

00:11:59 --> 00:12:05
provide cement she's just clicking on

00:12:00 --> 00:12:09
the video views the time watch maybe the

00:12:04 --> 00:12:11
relative time watched the clicking liked

00:12:08 --> 00:12:14
and disliked on the video maybe

00:12:10 --> 00:12:16
commenting on the video and those things

00:12:13 --> 00:12:18
all of those things and then though the

00:12:15 --> 00:12:20
one that wasn't actually quite aware of

00:12:17 --> 00:12:23
even though I might have engaged in it

00:12:19 --> 00:12:26
is a survey afterwards which is a

00:12:22 --> 00:12:28
brilliant idea is there other signals

00:12:25 --> 00:12:31
all right I mean that's already a really

00:12:27 --> 00:12:31
rich space of signals to learn from is

00:12:30 --> 00:12:35
there something else

00:12:30 --> 00:12:37
well you mentioned commenting also

00:12:34 --> 00:12:39
sharing the video if you if you think

00:12:36 --> 00:12:40
it's worthy to be shared with someone

00:12:38 --> 00:12:42
lse you know within YouTube or outside

00:12:39 --> 00:12:44
of YouTube as well either

00:12:41 --> 00:12:46
let's see you mentioned like dislike

00:12:43 --> 00:12:49
yeah like and dislike how important is

00:12:45 --> 00:12:53
that it's very important right we want

00:12:48 --> 00:12:56
it it's predictive of satisfaction but

00:12:52 --> 00:12:59
it's not it's not perfectly predictive

00:12:55 --> 00:13:01
subscribe if you subscribe to the

00:12:58 --> 00:13:04
channel of the person who made the video

00:13:00 --> 00:13:09
then that also is a piece of information

00:13:03 --> 00:13:12
at signals satisfaction although over

00:13:08 --> 00:13:14
the years we've learned that people have

00:13:11 --> 00:13:18
a wide range of attitudes about what it

00:13:13 --> 00:13:22
means to subscribe we would ask some

00:13:17 --> 00:13:24
users who didn't subscribe very much why

00:13:21 --> 00:13:26
but they watched a lot from

00:13:23 --> 00:13:27
a few channels we'd say well why didn't

00:13:25 --> 00:13:32
you subscribe and they would say why I

00:13:26 --> 00:13:33
can't afford to pay for anything and you

00:13:31 --> 00:13:35
know we tried to let them understand

00:13:32 --> 00:13:38
like actually doesn't cost anything it's

00:13:34 --> 00:13:41
free it just helps us know that you are

00:13:37 --> 00:13:43
very interested in this creator but then

00:13:40 --> 00:13:46
we've asked other people who subscribed

00:13:42 --> 00:13:48
to many things and and don't really

00:13:45 --> 00:13:51
watch any of the videos from those

00:13:47 --> 00:13:53
channels and we say well why did you

00:13:50 --> 00:13:56
subscribe to this if you weren't really

00:13:52 --> 00:13:58
interested in any more videos from that

00:13:55 --> 00:13:59
channel and they might tell us why just

00:13:57 --> 00:14:01
you know I thought the person did a

00:13:58 --> 00:14:03
great job and I just want to kind of

00:14:00 --> 00:14:05
give him a high five okay yeah and so

00:14:02 --> 00:14:09
yeah that's where I I said I actually

00:14:05 --> 00:14:13
subscribe to channels where I just this

00:14:08 --> 00:14:16
person is amazing I like this person but

00:14:12 --> 00:14:19
hen I like this person I really want to

00:14:15 --> 00:14:20
support them that that's how I click

00:14:18 --> 00:14:22
Subscribe right even though I may never

00:14:19 --> 00:14:23
actually want to click on their videos

00:14:21 --> 00:14:25
when they're releasing it

00:14:22 --> 00:14:28
I just love what they're doing and it's

00:14:24 --> 00:14:30
maybe outside of my interest area and so

00:14:27 --> 00:14:32
n which is probably the wrong way to

00:14:29 --> 00:14:35
use the subscribe button but I just want

00:14:31 --> 00:14:37
o say congrats this is a great work

00:14:34 --> 00:14:39
well so you have to deal with all the

00:14:36 --> 00:14:40
space of people that see the subscribe

00:14:38 --> 00:14:43
button it's totally different that's

00:14:39 --> 00:14:45
right and so you know we we can't just

00:14:42 --> 00:14:47
close our eyes and say sorry you're

00:14:44 --> 00:14:49
using it wrong you know and we're not

00:14:46 --> 00:14:52
gonna pay attention to what you've done

00:14:48 --> 00:14:53
we need to embrace all the ways in which

00:14:51 --> 00:14:56
all the different people in the world

00:14:52 --> 00:14:59
use the subscribe button or the like in

00:14:55 --> 00:15:02
the dislike button so in terms of

00:14:58 --> 00:15:05
signals of machine learning using for

00:15:01 --> 00:15:07
the search and for the recommendation

00:15:04 --> 00:15:09
you've mentioned title so like metadata

00:15:06 --> 00:15:13
like text data that people provide

00:15:08 --> 00:15:16
scription and title and maybe keywords

00:15:12 --> 00:15:19
o maybe you can speak to the value of

00:15:15 --> 00:15:22
those things in search and also this

00:15:18 --> 00:15:24
incredible fascinating area of the

00:15:21 --> 00:15:25
content itself so the video content

00:15:23 --> 00:15:27
itself trying to understand what's

00:15:24 --> 00:15:29
happening in the video so YouTube would

00:15:26 --> 00:15:30
release a data set that you know in the

00:15:28 --> 00:15:32
machine learning and computer

00:15:29 --> 00:15:36
vision world this is just an exciting

00:15:31 --> 00:15:37
space how much is that currently how

00:15:35 --> 00:15:38
much he playing with that currently how

00:15:36 --> 00:15:40
much is your

00:15:37 --> 00:15:43
the future of being able to analyze the

00:15:39 --> 00:15:45
content of the video itself well we have

00:15:42 --> 00:15:47
been working on that also since I came

00:15:44 --> 00:15:50
to YouTube analyzing the content

00:15:46 --> 00:15:55
on video right and

00:15:49 --> 00:15:58
what I can tell you is that our ability

00:15:54 --> 00:16:02
to do it well is still somewhat crude we

00:15:57 --> 00:16:05
can we can tell if it's a music video we

00:16:01 --> 00:16:06
can tell if it's a sports video we can

00:16:04 --> 00:16:10
probably tell you that people are

00:16:05 --> 00:16:14
playing soccer we probably can't tell

00:16:09 --> 00:16:16
whether it's Manchester United or my

00:16:13 --> 00:16:19
daughter's soccer team so these things

00:16:15 --> 00:16:21
are kind of difficult and and using them

00:16:18 --> 00:16:23
we can use them in some ways so for

00:16:20 --> 00:16:27
instance we use that kind of information

00:16:22 --> 00:16:31
to understand and inform these clusters

00:16:26 --> 00:16:33
that I talked about and also maybe to

00:16:30 --> 00:16:35
add some words like soccer for instance

00:16:32 --> 00:16:37
to the video if if it doesn't occur in

00:16:34 --> 00:16:41
the title or the description which is

00:16:36 --> 00:16:44
remarkable that often it doesn't I one

00:16:40 --> 00:16:46
of the things that I ask creators to do

00:16:43 --> 00:16:49
is is please help us out with the title

00:16:45 --> 00:16:53
in the description for instance we were

00:16:48 --> 00:16:56
a a few years ago having a live stream

00:16:52 --> 00:17:01
of some competition for world of

00:16:55 --> 00:17:03
warcraft on YouTube and it was a very

00:17:00 --> 00:17:05
important competition but if you typed

00:17:02 --> 00:17:06
World of Warcraft in search you wouldn't

00:17:04 --> 00:17:09
find it well the Warcraft wasn't in the

00:17:05 --> 00:17:11
title World of Warcraft wasn't in the

00:17:08 --> 00:17:14
title it was match four seven eight you

00:17:10 --> 00:17:16
know a team versus B team and we'll the

00:17:13 --> 00:17:18
Warcraft wasn't the title just like come

00:17:15 --> 00:17:21
on being literal being literal on the

00:17:17 --> 00:17:24
Internet is actually very uncool which

00:17:20 --> 00:17:27
is the problem oh is that right well I

00:17:23 --> 00:17:28
mean in some sense well some of the

00:17:26 --> 00:17:31
greatest videos I mean there's a humor

00:17:27 --> 00:17:34
to just being indirect being witty and

00:17:30 --> 00:17:36
so on and actually being you know

00:17:33 --> 00:17:39
machine learning algorithms want you to

00:17:35 --> 00:17:41
be you know literal right you just want

00:17:38 --> 00:17:45
o say what's in the thing be very very

00:17:40 --> 00:17:46
simple and in in some sense that gets

00:17:44 --> 00:17:49
away from wit and humor so you have to

00:17:45 --> 00:17:52
play with both right so but you're

00:17:48 --> 00:17:53
saying that for now sort of the

00:17:51 --> 00:17:56
content of the title the kind of the

00:17:53 --> 00:18:00
description the actual text is is one of

00:17:55 --> 00:18:02
the best ways to for the for the

00:17:59 --> 00:18:03
algorithm to find your video and put

00:18:01 --> 00:18:05
hem in the right cluster that's right

00:18:02 --> 00:18:09
and and I would go further and say that

00:18:04 --> 00:18:12
if you want people human beings to

00:18:08 --> 00:18:14
select your video in search then it

00:18:11 --> 00:18:17
helps to have let's say World of

00:18:13 --> 00:18:18
Warcraft in the title because why would

00:18:16 --> 00:18:20
a person's you know if they're looking

00:18:17 --> 00:18:21
at a bunch they type World of Warcraft

00:18:19 --> 00:18:23
and they have a bunch of videos all of

00:18:20 --> 00:18:25
whom say World of Warcraft except the

00:18:22 --> 00:18:27
one that you uploaded well even the

00:18:24 --> 00:18:29
person is gonna think maybe this isn't

00:18:26 --> 00:18:31
some house search made a mistake this

00:18:28 --> 00:18:34
n't really about World of Warcraft so

00:18:30 --> 00:18:36
it's important not just for the machine

00:18:33 --> 00:18:38
learning systems but also for the people

00:18:35 --> 00:18:41
who might be looking for this sort of

00:18:37 --> 00:18:43
thing they get a clue that it's what

00:18:40 --> 00:18:45
hey're looking for by seeing that same

00:18:42 --> 00:18:48
thing prominently in the title of the

00:18:44 --> 00:18:49
video okay let me push back on that so I

00:18:47 --> 00:18:51
think from the algorithmic perspective

00:18:48 --> 00:18:55
yes but if they typed in World of

00:18:50 --> 00:18:58
Warcraft and saw a video that with the

00:18:54 --> 00:19:02
title simply winning and and and the

00:18:57 --> 00:19:05
thumbnail has like a sad orc or

00:19:01 --> 00:19:10
something I don't know right like I

00:19:04 --> 00:19:13
think that's much it's Iraq it gets your

00:19:09 --> 00:19:14
curiosity up and then if they could

00:19:12 --> 00:19:16
trust that the algorithm was smart

00:19:13 --> 00:19:18
enough to figure out somehow that this

00:19:15 --> 00:19:20
indeed a World of Warcraft video that

00:19:17 --> 00:19:22
would have created the most beautiful

00:19:19 --> 00:19:24
experience i I think in terms of just

00:19:21 --> 00:19:26
he wit and the humor and the curiosity

00:19:23 --> 00:19:28
that we human beings actually have but

00:19:25 --> 00:19:30
you're saying I mean realistically

00:19:27 --> 00:19:32
speaking is really hard for the

00:19:29 --> 00:19:34
algorithm to figure out that the content

00:19:31 --> 00:19:35
of that video will be a world of

00:19:33 --> 00:19:37
warcraft it and you have to accept that

00:19:34 --> 00:19:40
some people are gonna skip it

00:19:36 --> 00:19:43
yeah right I mean and so you're right

00:19:39 --> 00:19:47
he people who don't skip it and select

00:19:42 --> 00:19:49
it are gonna be delighted yeah but other

00:19:46 --> 00:19:51
people's I might say but yeah this is

00:19:48 --> 00:19:53
not what I was looking for and making

00:19:50 --> 00:19:57
stuff discoverable I think is what

00:19:52 --> 00:19:58
you're really working on and hoping so

00:19:56 --> 00:20:01
yeah so from your perspective to put

00:19:57 --> 00:20:03
stuff in the description and remember

00:20:00 --> 00:20:06
the collaborative filtering part of the

00:20:02 --> 00:20:09
system it starts by

00:20:05 --> 00:20:11
the same user watching videos together

00:20:08 --> 00:20:13
ight so the way that they're probably

00:20:10 --> 00:20:15
going to do that is by searching for

00:20:12 --> 00:20:17
them that's a fascinating aspect it's

00:20:14 --> 00:20:22
like ant colonies that's how they find

00:20:16 --> 00:20:24
stuff is so I mean you would agree for

00:20:21 --> 00:20:28
collaborative filtering in general is

00:20:23 --> 00:20:31
one curious ant one curious user

00:20:27 --> 00:20:32
essential so just a person who is more

00:20:30 --> 00:20:35
willing to click on random videos and

00:20:31 --> 00:20:38
sort of explore these cluster spaces in

00:20:34 --> 00:20:39
your sense how many people are just like

00:20:37 --> 00:20:41
watching the same thing over and over

00:20:38 --> 00:20:43
and over and how many are just

00:20:40 --> 00:20:46
like the explorers I just kind of like

00:20:42 --> 00:20:49
click on stuff and then help help the

00:20:45 --> 00:20:51
other ant and the ants colony discover

00:20:48 --> 00:20:53
the cool stuff you have a sense of that

00:20:50 --> 00:20:55
I really don't think I have a sense for

00:20:52 --> 00:20:57
yeah ok relative sizes of those groups

00:20:54 --> 00:20:59
but I but I would say that you know

00:20:56 --> 00:21:04
people come to YouTube with some certain

00:20:58 --> 00:21:06
amount of intent and as long as they to

00:21:03 --> 00:21:08
the extent to which they they try to

00:21:05 --> 00:21:10
satisfy that intent that certainly helps

00:21:07 --> 00:21:14
our systems right because our systems

00:21:09 --> 00:21:18
rely on on kind of a faithful amount of

00:21:13 --> 00:21:19
behavior the right like and there are

00:21:17 --> 00:21:22
people who try to trick us right there

00:21:18 --> 00:21:25
are people and machines that try to

00:21:21 --> 00:21:27
associate videos together that really

00:21:24 --> 00:21:29
don't belong together but they're trying

00:21:26 --> 00:21:32
to get that association made because

00:21:28 --> 00:21:35
it's profitable for them and so we have

00:21:31 --> 00:21:39
to always be resilient to that sort of

00:21:34 --> 00:21:40
attempt at gaming the system so speaking

00:21:38 --> 00:21:43
to that there's a lot of people that in

00:21:39 --> 00:21:45
a positive way perhaps I don't know I I

00:21:42 --> 00:21:47
don't like it but like to gain want to

00:21:44 --> 00:21:49
try to gain the system to get more

00:21:46 --> 00:21:50
attention everybody creators in a

00:21:48 --> 00:21:54
positive sense want to get attention

00:21:50 --> 00:21:57
right so how do you how do you work in

00:21:53 --> 00:22:01
this space when people create more and

00:21:56 --> 00:22:05
more sort of click baby titles and

00:22:00 --> 00:22:07
thumbnails sort of veritasium derek has

00:22:04 --> 00:22:10
made a video it basically describes that

00:22:06 --> 00:22:12
it seems what works is to create a high

00:22:09 --> 00:22:14
quality video really good video where

00:22:11 --> 00:22:16
people would want to watch and wants to

00:22:13 --> 00:22:18
click on it but have clicked BTW titles

00:22:15 --> 00:22:20
and thumbnails

00:22:17 --> 00:22:22
to click on it in the first place and

00:22:19 --> 00:22:24
he's saying I'm embracing this back from

00:22:21 --> 00:22:27
just gonna keep doing it and I hope you

00:22:23 --> 00:22:29
forgive me for doing it and you will

00:22:26 --> 00:22:32
enjoy my videos once you click on them

00:22:28 --> 00:22:37
so and what sons do you see this kind of

00:22:31 --> 00:22:39
clickbait style attempt to manipulate to

00:22:36 --> 00:22:41
get people in the door to manipulate the

00:22:38 --> 00:22:44
algorithm or play with the algorithm of

00:22:40 --> 00:22:46
game the algorithm I think that that you

00:22:43 --> 00:22:49
can look at it as an attempt to game the

00:22:45 --> 00:22:52
algorithm but even if you were to take

00:22:48 --> 00:22:54
the algorithm out of it and just say

00:22:51 --> 00:22:56
okay well all these videos happen to be

00:22:53 --> 00:22:58
lined up which the algorithm didn't make

00:22:55 --> 00:23:00
any decision about which one to put at

00:22:57 --> 00:23:02
he top or the bottom but they're all

00:22:59 --> 00:23:05
ined up there which one are the people

00:23:01 --> 00:23:08
gonna choose and and I'll tell you the

00:23:04 --> 00:23:10
same thing that I told Derek is you know

00:23:07 --> 00:23:13
I have a bookshelf and they have two

00:23:09 --> 00:23:15
kinds of books on them science books I

00:23:12 --> 00:23:18
have my math books from when I was a

00:23:14 --> 00:23:21
student and they all look identical

00:23:17 --> 00:23:22
except for the titles on the covers

00:23:20 --> 00:23:25
they're all yellow they're all from

00:23:22 --> 00:23:27
Springer and they're every single one of

00:23:24 --> 00:23:30
them the cover is totally the same yes

00:23:26 --> 00:23:33
right yeah on the other hand I have

00:23:29 --> 00:23:35
other more pop science type books and

00:23:32 --> 00:23:39
they all have very interesting covers

00:23:34 --> 00:23:41
right and they have provocative titles

00:23:38 --> 00:23:42
and things like that I mean I wouldn't

00:23:40 --> 00:23:46
say that they're clickbait II because

00:23:41 --> 00:23:50
they are indeed good books and I don't

00:23:45 --> 00:23:52
hink that they cross any line but but

00:23:49 --> 00:23:54
you know the that's just a decision you

00:23:51 --> 00:23:56
have to make right like the people who

00:23:53 --> 00:23:59
write classical recursion theory by

00:23:55 --> 00:24:02
pure OD Freddie it was fine with the

00:23:58 --> 00:24:04
yellow title and the and nothing more

00:24:01 --> 00:24:08
whereas I think other people who who

00:24:03 --> 00:24:11
wrote a more popular type book

00:24:07 --> 00:24:13
understand that they need to have a

00:24:10 --> 00:24:17
compelling cover and a compelling title

00:24:12 --> 00:24:19
and and you know I don't think there's

00:24:16 --> 00:24:23
anything really wrong with that we do we

00:24:18 --> 00:24:25
do take steps to make sure that there is

00:24:22 --> 00:24:27
a line that you don't cross and if you

00:24:24 --> 00:24:32
go too far maybe your thumbnail is

00:24:26 --> 00:24:34
especially racy or or you know it's all

00:24:31 --> 00:24:40
with too many exclamation points we

00:24:33 --> 00:24:45
observe that users are kind of you know

00:24:39 --> 00:24:46
sometimes offended by that and so so for

00:24:44 --> 00:24:49
the users who were offended by that we

00:24:45 --> 00:24:52
will then depress or suppress those

00:24:48 --> 00:24:54
videos and which reminds me that there's

00:24:51 --> 00:24:57
also another signal where users can say

00:24:53 --> 00:24:59
I don't know if was recently added but I

00:24:56 --> 00:25:01
really enjoy it just saying I don't I

00:24:58 --> 00:25:04
didn't something like I I don't want to

00:25:00 --> 00:25:07
see this video anymore or something like

00:25:03 --> 00:25:09
this is a like there's certain

00:25:06 --> 00:25:11
videos just cut me the wrong way like

00:25:08 --> 00:25:12
just just jump out at music I don't

00:25:10 --> 00:25:15
wanna I don't want this and it feels

00:25:11 --> 00:25:18
really good to clean that out to be like

00:25:14 --> 00:25:20
I don't that's not that's not for me I

00:25:17 --> 00:25:21
don't know I think that might have been

00:25:19 --> 00:25:23
recently added by this that's also a

00:25:20 --> 00:25:25
really strong signal yes absolutely

00:25:22 --> 00:25:29
right we don't want to make a

00:25:24 --> 00:25:30
recommendation that people are unhappy

00:25:28 --> 00:25:32
with and that makes me that particular

00:25:29 --> 00:25:35
one makes me feel good as a user in

00:25:31 --> 00:25:36
general and as a machine learning person

00:25:34 --> 00:25:39
because I feel like I'm helping the

00:25:35 --> 00:25:40
algorithm my interaction on YouTube

00:25:38 --> 00:25:42
don't always feel like I'm helping the

00:25:39 --> 00:25:43
algorithm like I'm not reminded of that

00:25:41 --> 00:25:47
fact

00:25:42 --> 00:25:49
like for example Tesla and Otto Pollan

00:25:46 --> 00:25:51
you know on musk create a feeling for

00:25:48 --> 00:25:53
their customers for people their own

00:25:50 --> 00:25:54
test is that they're helping the

00:25:52 --> 00:25:56
algorithm of Tesla V like they're all

00:25:53 --> 00:25:58
ike a really proud they're helping

00:25:55 --> 00:26:00
nicely learn I think YouTube doesn't

00:25:57 --> 00:26:03
always remind people that you're helping

00:25:59 --> 00:26:05
the algorithm get smarter and for me I

00:26:02 --> 00:26:07
love that idea like we're all

00:26:04 --> 00:26:09
collaboratively like Wikipedia gives

00:26:06 --> 00:26:12
that sense they were all together

00:26:08 --> 00:26:15
creating a beautiful thing YouTube is uh

00:26:11 --> 00:26:17
doesn't always remind me of that that's

00:26:14 --> 00:26:19
this conversation is Right any of that

00:26:16 --> 00:26:21
but well that's a good tip we should

00:26:18 --> 00:26:23
keep that fact in mind when we design

00:26:20 --> 00:26:25
these features well I I'm not sure I I

00:26:22 --> 00:26:27
really thought about it that way but

00:26:24 --> 00:26:29
hat's a very interesting perspective

00:26:26 --> 00:26:34
it's an interesting question of

00:26:28 --> 00:26:36
personalization that I feel like when I

00:26:33 --> 00:26:41
click like on a video I'm just improving

00:26:35 --> 00:26:42
my experience it would be great you

00:26:40 --> 00:26:44
would make me personally people are

00:26:41 --> 00:26:45
different but make me feel great if I

00:26:43 --> 00:26:47
was helping also

00:26:44 --> 00:26:49
YouTube's algorithm broadly say

00:26:46 --> 00:26:50
something you know saying like there's a

00:26:48 --> 00:26:54
that I don't know if that's human nature

00:26:49 --> 00:26:57
but you want the products you love and I

00:26:53 --> 00:26:59
certainly love YouTube like you want to

00:26:56 --> 00:27:01
help it get smarter and smarter smarter

00:26:58 --> 00:27:04
because there's some kind of coupling

00:27:00 --> 00:27:06
between our lives together being better

00:27:03 --> 00:27:08
if if YouTube was better than I will my

00:27:05 --> 00:27:09
life will be better and that's that kind

00:27:07 --> 00:27:11
of reasoning I'm not sure what that is

00:27:08 --> 00:27:13
and I'm not sure how many people share

00:27:10 --> 00:27:15
that feeling that could be just a

00:27:12 --> 00:27:18
machine learning feeling but not at that

00:27:14 --> 00:27:22
point how much personalization is there

00:27:17 --> 00:27:25
in terms of next video recommendations

00:27:21 --> 00:27:29
o is it kind of all really boiling down

00:27:24 --> 00:27:32
to a clustering like you find in ears

00:27:28 --> 00:27:34
clusters to me and so on and that kind

00:27:31 --> 00:27:36
of thing or just how much is processed

00:27:33 --> 00:27:41
is me the individual completely it's

00:27:35 --> 00:27:43
very very personalized so your

00:27:40 --> 00:27:45
experience will be quite a bit different

00:27:42 --> 00:27:47
from anybody else's who's watching that

00:27:44 --> 00:27:52
same video at least when they're logged

00:27:46 --> 00:27:55
in and the reason is is that we found

00:27:51 --> 00:27:57
that that users often want two different

00:27:54 --> 00:28:00
kinds of things when they're watching a

00:27:56 --> 00:28:03
video sometimes they want to keep

00:27:59 --> 00:28:07
watching more on that topic or more in

00:28:02 --> 00:28:08
that genre and other times they just are

00:28:06 --> 00:28:10
done and they're ready to move on to

00:28:07 --> 00:28:15
something else and so the question is

00:28:09 --> 00:28:16
well what is this something else and one

00:28:14 --> 00:28:19
of the first things one can imagine is

00:28:15 --> 00:28:21
well maybe something else is the latest

00:28:18 --> 00:28:23
video from some channel to which you've

00:28:20 --> 00:28:26
subscribed and that's going to be very

00:28:22 --> 00:28:29
different from for you than it is for me

00:28:25 --> 00:28:30
right and and even if it's not something

00:28:28 --> 00:28:32
that you subscribe to it's something

00:28:29 --> 00:28:34
that you watch a lot and again that'll

00:28:31 --> 00:28:40
be very different on a person-by-person

00:28:33 --> 00:28:41
basis and so even the watch next as well

00:28:39 --> 00:28:46
as the home page of course is quite

00:28:40 --> 00:28:47
personalized so what we met some of the

00:28:45 --> 00:28:49
signals but what a success look like

00:28:46 --> 00:28:51
in terms of the

00:28:48 --> 00:28:55
algorithm of creating a great long-term

00:28:50 --> 00:28:59
experience for a user or put another way

00:28:54 --> 00:29:01
if you look at the videos i've watched

00:28:58 --> 00:29:05
this month how do you know the algorithm

00:29:00 --> 00:29:07
succeeded for me I think first of all if

00:29:04 --> 00:29:09
you come back and watch more YouTube

00:29:06 --> 00:29:11
then that's one indication that you

00:29:08 --> 00:29:13
found some value from it so just the

00:29:10 --> 00:29:17
number of hours is a powerful indicator

00:29:12 --> 00:29:20
well I mean not the hours themselves but

00:29:16 --> 00:29:24
he fact that you returned on another

00:29:19 --> 00:29:27
day so that's probably the most simple

00:29:23 --> 00:29:29
indicator people don't come back to

00:29:26 --> 00:29:30
things that they don't find value in

00:29:28 --> 00:29:34
right there's a lot of other things that

00:29:29 --> 00:29:36
hey could do but like I said I mean

00:29:33 --> 00:29:38
ideally we would like everybody to feel

00:29:35 --> 00:29:40
that YouTube enriches their lives and

00:29:37 --> 00:29:43
that every video they watched is the

00:29:39 --> 00:29:45
best one they've ever watched since

00:29:42 --> 00:29:49
they've started watching YouTube and so

00:29:44 --> 00:29:53
that's why we survey them and ask them

00:29:48 --> 00:29:57
like is this one to five stars and so

00:29:52 --> 00:29:58
ur version of success is every time

00:29:56 --> 00:30:02
someone takes that survey they say it's

00:29:57 --> 00:30:03
five stars and if we ask them is this

00:30:01 --> 00:30:06
the best video you've ever seen on

00:30:02 --> 00:30:08
YouTube they say yes every single time

00:30:05 --> 00:30:10
so it's hard to imagine that we would

00:30:07 --> 00:30:12
actually achieve that maybe

00:30:09 --> 00:30:15
asymptotically we would get there but

00:30:11 --> 00:30:19
that would be what we think success

00:30:14 --> 00:30:21
is it's funny have recently said

00:30:18 --> 00:30:25
somewhere I don't know maybe tweeted but

00:30:20 --> 00:30:27
hat Ray Dalio has this video on the

00:30:24 --> 00:30:29
conomic machine I forget what it's

00:30:26 --> 00:30:31
called but it's a 30-minute video and I

00:30:28 --> 00:30:33
said it's the the greatest video I've

00:30:30 --> 00:30:35
ver watched I need you it's like I

00:30:32 --> 00:30:39
watched the whole thing and my mind was

00:30:34 --> 00:30:40
blown is a very crisp clean description

00:30:38 --> 00:30:41
of how the at least the American

00:30:39 --> 00:30:44
economic system works

00:30:40 --> 00:30:46
it's a beautiful video and I was just I

00:30:43 --> 00:30:48
wanted to click on something to say this

00:30:45 --> 00:30:50
the best thing this is the best thing

00:30:47 --> 00:30:53
ever please let me I can't believe I

00:30:49 --> 00:30:56
discovered it I mean the the views and

00:30:52 --> 00:30:58
the likes reflect its quality but I was

00:30:55 --> 00:30:59
almost upset that I haven't found it

00:30:57 --> 00:31:02
earlier and wanted to find other things

00:30:58 --> 00:31:04
like it I don't think I've ever felt

00:31:01 --> 00:31:07
hat this is the best video ever

00:31:03 --> 00:31:10
that was that and to me the ultimate

00:31:06 --> 00:31:12
utopia the best experiences were every

00:31:09 --> 00:31:14
single video where I don't see any of

00:31:11 --> 00:31:17
the videos I regret in every single

00:31:13 --> 00:31:20
video I watch is one that actually helps

00:31:16 --> 00:31:26
me grow helps me enjoy life be happy and

00:31:19 --> 00:31:29
so on well so that's that's that's a

00:31:25 --> 00:31:31
heck of uh that's uh that's one of the

00:31:28 --> 00:31:33
most beautiful and ambitious I think

00:31:30 --> 00:31:35
machine learning tasks so you've

00:31:32 --> 00:31:38
mentioned kind of the the YouTube

00:31:34 --> 00:31:40
algorithm isn't you know e equals MC

00:31:37 --> 00:31:42
squared is that's a single equation it's

00:31:39 --> 00:31:48
potentially sort of more than a

00:31:41 --> 00:31:51
million lines of code sort of is it more

00:31:47 --> 00:31:52
akin to what autonomous successful

00:31:50 --> 00:31:55
autonomous vehicles today are which is

00:31:51 --> 00:31:58
they're just basically patches on top of

00:31:54 --> 00:32:02
patches of heuristics and human experts

00:31:57 --> 00:32:04
really tuning the algorithm and have

00:32:01 --> 00:32:07
some machine learning modules or is it

00:32:03 --> 00:32:10
becoming more and more a giant machine

00:32:06 --> 00:32:12
learning system with humans just doing a

00:32:09 --> 00:32:13
little bit of tweaking here and there

00:32:11 --> 00:32:15
what's your sense first of all do you

00:32:12 --> 00:32:18
even have a sense of what is the YouTube

00:32:14 --> 00:32:20
algorithm at this point and whichever

00:32:17 --> 00:32:23
however much you do have a sense what

00:32:19 --> 00:32:26
does it look like well we don't usually

00:32:22 --> 00:32:28
think about it as the algorithm because

00:32:25 --> 00:32:30
it's a bunch of systems that work on

00:32:27 --> 00:32:34
different services the other thing that

00:32:29 --> 00:32:36
I think people don't understand is that

00:32:33 --> 00:32:39
what you might refer to as the YouTube

00:32:35 --> 00:32:43
algorithm from outside of YouTube is

00:32:38 --> 00:32:45
actually a you know a bunch of code and

00:32:42 --> 00:32:48
machine learning systems and heuristics

00:32:44 --> 00:32:50
but that's married with the behavior of

00:32:47 --> 00:32:52
all the people who come to YouTube every

00:32:49 --> 00:32:54
day so the people part of the code

00:32:51 --> 00:32:55
accession exactly right like if there

00:32:53 --> 00:32:57
were no people who came to YouTube

00:32:54 --> 00:32:57
tomorrow then there the algorithm

00:32:56 --> 00:33:00
wouldn't work anymore

00:32:56 --> 00:33:02
right right so that's a critical part of

00:32:59 --> 00:33:04
the algorithm and so when people talk

00:33:01 --> 00:33:06
about well the algorithm does this the

00:33:03 --> 00:33:08
algorithm does that it's sometimes hard

00:33:05 --> 00:33:10
to understand well you know it could be

00:33:07 --> 00:33:13
the the viewers are doing that and the

00:33:09 --> 00:33:16
algorithm is mostly just keeping track

00:33:12 --> 00:33:18
of what the viewers do and then reacting

00:33:15 --> 00:33:21
to those things

00:33:17 --> 00:33:24
in in sort of more fine-grain situations

00:33:20 --> 00:33:26
and i and i think that this is the way

00:33:23 --> 00:33:28
that the recommendation system and the

00:33:25 --> 00:33:32
search system and and probably many

00:33:27 --> 00:33:33
machine learning systems evolve is you

00:33:31 --> 00:33:36
know you start trying to solve a problem

00:33:32 --> 00:33:39
and the first way to solve a problem is

00:33:35 --> 00:33:41
often with a simple heuristic right and

00:33:38 --> 00:33:42
you know you want to say what are

00:33:40 --> 00:33:45
the videos we're gonna recommend well

00:33:41 --> 00:33:49
how about the most popular ones hayden

00:33:44 --> 00:33:53
that's where you start and and over time

00:33:48 --> 00:33:54
you collect some data and you refine

00:33:52 --> 00:33:57
your situations so that you're making

00:33:53 --> 00:33:58
less heuristics and you're you're

00:33:56 --> 00:34:01
building a system that can actually

00:33:57 --> 00:34:03
learn what to do in different situations

00:34:00 --> 00:34:07
based on some observations of those

00:34:02 --> 00:34:09
situations in the past and and you keep

00:34:06 --> 00:34:12
chipping away at these heuristics over

00:34:08 --> 00:34:14
time and so i think that just like with

00:34:11 --> 00:34:17
diversity you know I think the first

00:34:13 --> 00:34:20
diversity measure we took was okay not

00:34:16 --> 00:34:22
more than three videos in a row from the

00:34:19 --> 00:34:25
same Channel right it's a pretty simple

00:34:21 --> 00:34:27
heuristic to encourage diversity but it

00:34:24 --> 00:34:29
worked right you needs to see four or

00:34:26 --> 00:34:33
five six videos in a row from the same

00:34:28 --> 00:34:35
Channel and over time we try to chip

00:34:32 --> 00:34:38
away at that and make it more fine-grain

00:34:34 --> 00:34:41
and and basically have it

00:34:37 --> 00:34:44
remove the heuristics in favor of

00:34:40 --> 00:34:47
something that can react to individuals

00:34:43 --> 00:34:51
and individual situations so how do you

00:34:46 --> 00:34:53
mentioned you know we we know that

00:34:50 --> 00:34:55
something worked how do you get a sense

00:34:52 --> 00:34:58
when decisions are the kind of a be

00:34:54 --> 00:35:01
testing that this idea was a good one

00:34:57 --> 00:35:02
this was not so good what's how do you

00:35:00 --> 00:35:05
measure that

00:35:01 --> 00:35:07
and across which time scale across how

00:35:04 --> 00:35:07
many users that kind of that kind of

00:35:06 --> 00:35:10
thing

00:35:06 --> 00:35:13
well you mentioned that a B experiments

00:35:09 --> 00:35:16
and so just about every single change we

00:35:12 --> 00:35:21
make to YouTube we do it only after

00:35:15 --> 00:35:24
we've run a a B experiment and so in

00:35:20 --> 00:35:29
those experiments which run from one

00:35:23 --> 00:35:31
week two months we measure hundreds

00:35:28 --> 00:35:35
literally hundreds of different

00:35:30 --> 00:35:36
variables and and measure changes with

00:35:34 --> 00:35:38
confidence intervals in all of them

00:35:35 --> 00:35:42
because we really are trying to get a

00:35:37 --> 00:35:44
sense for ultimately does this improve

00:35:41 --> 00:35:46
the experience for viewers that's the

00:35:43 --> 00:35:49
question we're trying to answer and an

00:35:45 --> 00:35:51
experiment is one way because we can see

00:35:48 --> 00:35:53
certain things go up and down so for

00:35:50 --> 00:35:56
instance if we notice then the

00:35:52 --> 00:36:01
xperiment people are dismissing videos

00:35:55 --> 00:36:03
less frequently or they're saying that

00:36:00 --> 00:36:05
hey're more satisfied they're giving

00:36:02 --> 00:36:07
more videos five stars after they watch

00:36:04 --> 00:36:10
them then those would be indications of

00:36:06 --> 00:36:13
that the experiment is successful that

00:36:09 --> 00:36:15
it's improving the situation for viewers

00:36:12 --> 00:36:18
but we can also look at other things

00:36:14 --> 00:36:20
like we might do user studies where we

00:36:17 --> 00:36:22
invite some people in and ask them like

00:36:19 --> 00:36:23
what do you think about this what do you

00:36:21 --> 00:36:27
think about that how do you feel about

00:36:22 --> 00:36:29
his and other various kinds of user

00:36:26 --> 00:36:31
esearch but ultimately before we launch

00:36:28 --> 00:36:33
something we're gonna want to run an

00:36:30 --> 00:36:36
experiment so we get a sense for what

00:36:32 --> 00:36:38
he impact is going to be not just to

00:36:35 --> 00:36:42
the viewers but also to the different

00:36:37 --> 00:36:42
channels and all of them

00:36:47 --> 00:36:50
you

<!-- YOUTUBE_TRANSCRIPT_END -->
