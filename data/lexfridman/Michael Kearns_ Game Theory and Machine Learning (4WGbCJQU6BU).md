---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "4WGbCJQU6BU"
title: "Michael Kearns: Game Theory and Machine Learning"
video_url: "https://www.youtube.com/watch?v=4WGbCJQU6BU"
thumbnail_url: "https://i.ytimg.com/vi/4WGbCJQU6BU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=4WGbCJQU6BU"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-20T18:56:05.000Z"
upload_date: "2019-11-20"
duration_seconds: 443
duration_human: "7:23"
view_count: 24174
like_count: 761
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:11:30.381Z"
---

# Michael Kearns: Game Theory and Machine Learning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=4WGbCJQU6BU
- video_id: 4WGbCJQU6BU
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-20T18:56:05.000Z
- upload_date: 2019-11-20
- duration: 7:23
- view_count: 24174
- like_count: 761
- has_subtitle: true
- language: en
- availability: public
- tags: game theory, machine learning, no regret learning, deep learning, facebook, social networks, traffic flow, prisoners dilemma, michael kearns, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Michael Kearns (Nov 2019): https://www.youtube.com/watch?v=AzdxbzHtjgs
New clips channel (Lex Clips): https://www.youtube.com/lexclips
Once it reaches 20,000 subscribers, I'll start posting the clips there instead. 
(more links below)

For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.

Clip from full episode: https://www.youtube.com/watch?v=AzdxbzHtjgs If you enjoy these clips, subscribe to the new clips channel (Lex Clips): https://www.youtube.com/lexclips Once it reaches 20,000 subscribers, I'll start posting the clips there instead. For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.
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

Michael Kearns is a professor at University of Pennsylvania and a co-author of the new book Ethical Algorithm that is the focus of much of our conversation, including algorithmic fairness, bias, privacy, and ethics in general. But, that is just one of many fields that Michael is a world-class researcher in, some of which we touch on quickly including learning theory or theoretical foundations of machine learning, game theory, algorithmic trading, quantitative finance, computational social science, and more.

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
speaking of markets a lot of fascinating

00:00:04 --> 00:00:10
aspects of this world arise not from

00:00:06 --> 00:00:13
individual humans but from the

00:00:09 --> 00:00:15
interaction of human beings you've done

00:00:12 --> 00:00:18
a lot of work in game theory first can

00:00:14 --> 00:00:21
you say what is game theory and how does

00:00:17 --> 00:00:23
help us model and study yeah game theory

00:00:20 --> 00:00:26
of course let us give credit where it's

00:00:22 --> 00:00:28
due they don't comes from the economist

00:00:25 --> 00:00:31
first and foremost but as I'd mentioned

00:00:27 --> 00:00:34
before like you know computer scientists

00:00:30 --> 00:00:35
never hesitate to wander into other

00:00:33 --> 00:00:38
people's turf and so there is now this

00:00:34 --> 00:00:40
20 year old field called algorithmic

00:00:37 --> 00:00:44
game theory but you know game game

00:00:39 --> 00:00:46
theory first and foremost is a

00:00:43 --> 00:00:50
mathematical framework for reasoning

00:00:45 --> 00:00:53
about collective outcomes in systems of

00:00:49 --> 00:00:56
interacting individuals you know so you

00:00:52 --> 00:00:59
need at least two people to get started

00:00:55 --> 00:01:00
in game theory and many people are

00:00:58 --> 00:01:03
probably familiar with prisoner's

00:00:59 --> 00:01:05
dilemma as kind of a classic example of

00:01:02 --> 00:01:08
game theory and a classic example where

00:01:04 --> 00:01:10
verybody looking out for their own

00:01:07 --> 00:01:12
individual interests leads to a

00:01:09 --> 00:01:15
collective outcome that's kind of worse

00:01:11 --> 00:01:17
for everybody then what might be

00:01:14 --> 00:01:19
possible if they cooperate it for

00:01:16 --> 00:01:23
example but cooperation is not an

00:01:19 --> 00:01:26
equilibrium in prisoner's dilemma and so

00:01:22 --> 00:01:28
my work and the field of algorithmic

00:01:25 --> 00:01:32
game theory more generally in these

00:01:27 --> 00:01:35
areas kind of looks at settings in which

00:01:31 --> 00:01:38
the number of actors is potentially

00:01:34 --> 00:01:40
extraordinarily large and their

00:01:37 --> 00:01:44
incentives might be quite complicated

00:01:40 --> 00:01:46
and kind of hard to model directly but

00:01:43 --> 00:01:48
you still want kind of algorithmic ways

00:01:45 --> 00:01:50
of kind of predicting what will happen

00:01:47 --> 00:01:54
or influencing what will happen in the

00:01:49 --> 00:01:57
design of platforms so what to you is

00:01:53 --> 00:02:00
the most beautiful idea that you've

00:01:56 --> 00:02:03
ncountered in game theory there's a lot

00:01:59 --> 00:02:06
of them I'm a big fan of the field I

00:02:02 --> 00:02:08
mean you know I mean technical answers

00:02:05 --> 00:02:11
to that of course would include Nash's

00:02:07 --> 00:02:13
work just establishing that you know

00:02:10 --> 00:02:15
there there's a competitive equilibrium

00:02:12 --> 00:02:18
under very very general circumstance

00:02:14 --> 00:02:22
which in many ways kind of put the field

00:02:17 --> 00:02:24
on a firm conceptual footing because if

00:02:21 --> 00:02:26
you don't have equilibria it's kind of

00:02:23 --> 00:02:27
hard to ever reason about what might

00:02:25 --> 00:02:30
happen since you know there's just no

00:02:26 --> 00:02:32
stability so just the idea that

00:02:29 --> 00:02:34
stability can emerge when there's

00:02:31 --> 00:02:35
multiple who or that it means not that

00:02:33 --> 00:02:37
it will necessarily emerge just that

00:02:34 --> 00:02:38
it's possible right it's like the

00:02:36 --> 00:02:41
xistence of equilibrium doesn't mean

00:02:37 --> 00:02:44
that sort of natural iterative behavior

00:02:40 --> 00:02:46
will necessarily lead to it in the real

00:02:43 --> 00:02:47
world yeah maybe answering a slightly

00:02:45 --> 00:02:49
less personally than you asked the

00:02:46 --> 00:02:52
question I think within the field of

00:02:48 --> 00:02:56
algorithmic game theory perhaps the

00:02:51 --> 00:02:58
single most important kind of technical

00:02:55 --> 00:03:00
contribution that's been made is the

00:02:57 --> 00:03:03
real the the realization between close

00:02:59 --> 00:03:04
connections between machine learning and

00:03:02 --> 00:03:07
game theory and in particular between

00:03:03 --> 00:03:08
game theory and the branch of machine

00:03:06 --> 00:03:11
learning that's known as no regret

00:03:07 --> 00:03:13
learning and and this sort of provides a

00:03:10 --> 00:03:17
freight a very general framework in

00:03:12 --> 00:03:20
which a bunch of players interacting in

00:03:16 --> 00:03:21
a game or a system each one kind of

00:03:19 --> 00:03:23
doing something that's in their

00:03:20 --> 00:03:26
self-interest will actually kind of

00:03:22 --> 00:03:28
reach an equilibrium and actually reach

00:03:25 --> 00:03:32
an equilibrium in a you know a pretty

00:03:27 --> 00:03:36
ou know a rather you know short amount

00:03:31 --> 00:03:40
of steps so you kind of mentioned acting

00:03:35 --> 00:03:44
reedily can somehow end up pretty good

00:03:39 --> 00:03:48
for everybody or pretty bad or pretty

00:03:43 --> 00:03:51
bad it will end up stable yeah right and

00:03:47 --> 00:03:54
you know stability or equilibrium by

00:03:50 --> 00:03:56
itself is not that is not necessarily

00:03:53 --> 00:03:57
either a good thing or a bad thing so

00:03:55 --> 00:03:59
what's the connection between machine

00:03:56 --> 00:04:01
learning and the ideas well if we kind

00:03:58 --> 00:04:04
of talked about these ideas already in

00:04:00 --> 00:04:06
kind of a non-technical way which is

00:04:03 --> 00:04:09
maybe the more interesting way of

00:04:05 --> 00:04:13
understanding them first which is you

00:04:08 --> 00:04:16
know we have many systems platforms and

00:04:12 --> 00:04:19
apps these days that work really hard to

00:04:15 --> 00:04:22
use our data and the data of everybody

00:04:18 --> 00:04:26
else on the platform to selfishly

00:04:21 --> 00:04:28
optimize on behalf of each user okay so

00:04:25 --> 00:04:29
you know let me let me give what the

00:04:27 --> 00:04:31
cleanest example

00:04:28 --> 00:04:34
which is just driving apps navigation

00:04:30 --> 00:04:37
apps like you know Google Maps and ways

00:04:33 --> 00:04:40
where you know miraculously compared to

00:04:36 --> 00:04:41
when I was growing up at least you know

00:04:39 --> 00:04:43
the objective would be the same when you

00:04:40 --> 00:04:45
wanted to drive from point A to point B

00:04:42 --> 00:04:47
spend the least time driving not

00:04:44 --> 00:04:50
necessarily minimize the distance but

00:04:46 --> 00:04:52
minimize the time right and when I was

00:04:49 --> 00:04:54
growing up like the only resources you

00:04:51 --> 00:04:56
had to do that were like maps in the car

00:04:53 --> 00:04:59
which literally just told you what roads

00:04:55 --> 00:05:02
were available and then you might have

00:04:58 --> 00:05:04
like half hourly traffic reports just

00:05:01 --> 00:05:05
about the major freeways but not about

00:05:03 --> 00:05:08
side roads so you were pretty much on

00:05:04 --> 00:05:10
your own and now we've got these apps

00:05:07 --> 00:05:12
you pull it out and you say I want to go

00:05:09 --> 00:05:15
from point A to point B and in response

00:05:11 --> 00:05:17
kind of to what everybody else is doing

00:05:14 --> 00:05:19
if you like what all the other players

00:05:16 --> 00:05:21
in this game are doing right now here's

00:05:18 --> 00:05:24
the the you know the the route that

00:05:20 --> 00:05:27
minimizes your driving time so it is

00:05:23 --> 00:05:29
really kind of computing a selfish best

00:05:26 --> 00:05:31
response for each of us in response to

00:05:28 --> 00:05:34
what all of the rest of us are doing at

00:05:30 --> 00:05:36
any given moment and so you know I think

00:05:33 --> 00:05:41
it's quite fair to think of these apps

00:05:35 --> 00:05:44
as driving or nudging us all towards the

00:05:40 --> 00:05:47
competitive or Nash equilibrium of that

00:05:43 --> 00:05:48
game now you might ask like well that

00:05:46 --> 00:05:52
sounds great why is that a bad thing

00:05:47 --> 00:05:56
well you know it's it's known both in

00:05:51 --> 00:06:02
theory and with some limited studies

00:05:55 --> 00:06:04
from actual like traffic data that all

00:06:01 --> 00:06:05
of us being in this competitive

00:06:03 --> 00:06:08
quilibrium might cause our collective

00:06:04 --> 00:06:10
driving time to be higher may be

00:06:07 --> 00:06:13
significantly higher than it would be

00:06:09 --> 00:06:14
under other solutions and then you have

00:06:12 --> 00:06:17
to talk about what those other solutions

00:06:13 --> 00:06:19
might be and what what the algorithms to

00:06:16 --> 00:06:20
implement them are which we do discuss

00:06:18 --> 00:06:24
in the kind of game theory chapter of

00:06:19 --> 00:06:28
the book but but similarly you know on

00:06:23 --> 00:06:30
social media platforms or on Amazon you

00:06:27 --> 00:06:32
know all these algorithms that are

00:06:29 --> 00:06:34
ssentially trying to optimize our

00:06:31 --> 00:06:36
behalf they're driving us in a

00:06:33 --> 00:06:38
colloquial sense towards some kind of

00:06:35 --> 00:06:40
competitive equilibrium and you know one

00:06:37 --> 00:06:42
of the most important lessons of game

00:06:39 --> 00:06:43
theory is that just because we're at

00:06:41 --> 00:06:45
equilibrium doesn't mean that

00:06:42 --> 00:06:47
here's not a solution in which some or

00:06:44 --> 00:06:49
maybe even all of us might be better off

00:06:46 --> 00:06:51
and then the connection to machine

00:06:48 --> 00:06:53
learning of course is that in all these

00:06:50 --> 00:06:55
platforms I've mentioned the

00:06:52 --> 00:06:57
optimization that they're doing on our

00:06:54 --> 00:06:59
behalf is driven by machine learning you

00:06:56 --> 00:07:01
know like predicting where the traffic

00:06:58 --> 00:07:02
will be predicting what products I'm

00:07:00 --> 00:07:05
gonna like predicting what would make me

00:07:01 --> 00:07:05
happy in my newsfeed

00:07:10 --> 00:07:13
you

<!-- YOUTUBE_TRANSCRIPT_END -->
