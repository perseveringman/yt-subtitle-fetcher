---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "w7gIClKZ85s"
title: "Bjarne Stroustrup: C++ Standards - C++03, C++11, C++14, C++17, C++20"
video_url: "https://www.youtube.com/watch?v=w7gIClKZ85s"
thumbnail_url: "https://i.ytimg.com/vi/w7gIClKZ85s/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=w7gIClKZ85s"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-12-09T14:29:47.000Z"
upload_date: "2019-12-09"
duration_seconds: 620
duration_human: "10:20"
view_count: 24109
like_count: 541
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:05:06.210Z"
---

# Bjarne Stroustrup: C++ Standards - C++03, C++11, C++14, C++17, C++20

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=w7gIClKZ85s
- video_id: w7gIClKZ85s
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-12-09T14:29:47.000Z
- upload_date: 2019-12-09
- duration: 10:20
- view_count: 24109
- like_count: 541
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

00:00:01 --> 00:00:08
but get back to the standardization we

00:00:03 --> 00:00:12
are standardizing C++ under iso rules

00:00:07 --> 00:00:15
which are very open process people come

00:00:11 --> 00:00:20
in there's no requirements for education

00:00:14 --> 00:00:24
or experience the start develop c++ and

00:00:19 --> 00:00:26
there's a hope when was the first

00:00:23 --> 00:00:30
andard established what is that like

00:00:25 --> 00:00:31
the iso standard is there committee that

00:00:29 --> 00:00:34
you're referring to she was a group of

00:00:30 --> 00:00:36
people what it was that like how often

00:00:33 --> 00:00:41
do you meet what's the disguise I'll try

00:00:35 --> 00:00:49
and explain that so sometime in early

00:00:40 --> 00:00:52
1989 two people one from IBM one from HP

00:00:48 --> 00:00:56
turned up in my office and told me I

00:00:51 --> 00:01:00
would like to standardize C++

00:00:55 --> 00:01:03
this was a new idea to me and I pointed

00:00:59 --> 00:01:06
out that it wasn't finished yet it

00:01:02 --> 00:01:08
wasn't ready for former standardization

00:01:05 --> 00:01:11
and such and they say no be honest I've

00:01:07 --> 00:01:15
gotten it you you really want to do this

00:01:10 --> 00:01:19
our organizations depend on C++ we

00:01:14 --> 00:01:21
cannot depend on something that's owned

00:01:18 --> 00:01:24
by another corporation that might be a

00:01:20 --> 00:01:27
competitor of course we could rely on

00:01:23 --> 00:01:31
you but you might get run over by a boss

00:01:26 --> 00:01:36
right the old really needs to get this

00:01:30 --> 00:01:39
out new it has to be standardized under

00:01:35 --> 00:01:45
formal rules and we are going to

00:01:38 --> 00:01:47
standardize it under ISO rules and you

00:01:44 --> 00:01:48
really want to be part of it because

00:01:46 --> 00:01:52
basically otherwise we'll do it

00:01:47 --> 00:01:57
ourselves and we know you can do it

00:01:51 --> 00:02:00
better so through a combination of

00:01:56 --> 00:02:04
arm-twisting and flattery

00:01:59 --> 00:02:09
Carolus started so in late

00:02:03 --> 00:02:14
89 there was a meeting in DC at

00:02:08 --> 00:02:16
he actually no it was not ISO then it

00:02:13 --> 00:02:18
was an see the American National

00:02:15 --> 00:02:18
Standards were doing

00:02:18 --> 00:02:24
we met there we were lectured on the

00:02:21 --> 00:02:27
rules of how to do when ANSI standard

00:02:23 --> 00:02:29
there was about 25 of us there

00:02:26 --> 00:02:34
which apparently was a new record for

00:02:28 --> 00:02:36
that kind of meeting and some of the old

00:02:33 --> 00:02:38
see guys that it's been standardizing

00:02:35 --> 00:02:42
see was there so we got some expertise

00:02:37 --> 00:02:44
in so the way this works is that it's an

00:02:41 --> 00:02:48
open process anybody can consign up if

00:02:43 --> 00:02:50
they pay the minimal fee which is about

00:02:47 --> 00:02:53
a thousand dollars still less then just

00:02:49 --> 00:02:55
a little bit more now and I think it's

00:02:52 --> 00:02:57
twelve hundred and eighty dollars it's

00:02:54 --> 00:03:02
not it's not going to kill you

00:02:56 --> 00:03:06
and we have three meetings a year this

00:03:01 --> 00:03:08
fairly standard we tried two meetings

00:03:05 --> 00:03:11
a year for a couple years that didn't

00:03:07 --> 00:03:16
work too well so three week three

00:03:10 --> 00:03:19
one-week meetings a year and you meet

00:03:15 --> 00:03:22
and you have taken meet technical

00:03:18 --> 00:03:26
discussions and then you bring proposals

00:03:21 --> 00:03:32
forward for votes the votes are done one

00:03:25 --> 00:03:35
person per one vote per organization so

00:03:31 --> 00:03:38
you can't have say IBM come in with 10

00:03:34 --> 00:03:40
people and dominate things that's not

00:03:37 --> 00:03:43
allowed and these organizations that

00:03:39 --> 00:03:45
extends to the UC bus bus is yes this is

00:03:42 --> 00:03:48
basic all individuals or individuals I

00:03:44 --> 00:03:51
mean it's uh it's a bunch of people in a

00:03:47 --> 00:03:54
room deciding the design of a language

00:03:50 --> 00:03:59
based on which a lot of the world's

00:03:53 --> 00:04:00
ystems run right well I think most

00:03:58 --> 00:04:04
people would agree it's better than if I

00:03:59 --> 00:04:08
decided it or better than if a single

00:04:03 --> 00:04:09
organization like agency decides it I

00:04:07 --> 00:04:13
don't know if everyone agrees to that by

00:04:08 --> 00:04:16
the way bureaucracies have their critics

00:04:12 --> 00:04:19
- yes they there that the

00:04:15 --> 00:04:21
standardization is not pleasant it's

00:04:18 --> 00:04:25
it's horrifying

00:04:20 --> 00:04:27
like democracy what we exactly as

00:04:24 --> 00:04:29
Churchill says democracy is the worst

00:04:26 --> 00:04:31
way except for or the others right and

00:04:28 --> 00:04:34
it's about say the same reform of

00:04:31 --> 00:04:39
standardization but anyway so we meet

00:04:33 --> 00:04:42
and we we have these votes and that

00:04:38 --> 00:04:45
determines what the standard is a couple

00:04:41 --> 00:04:49
of years later we extended this so it

00:04:44 --> 00:04:52
became worldwide we have standout of

00:04:48 --> 00:04:59
organizations that are active in

00:04:51 --> 00:05:02
currently 15 to 20 countries and another

00:04:58 --> 00:05:07
fifteen to twenty are sort of looking

00:05:01 --> 00:05:10
and and voting based on the rest of the

00:05:06 --> 00:05:12
work on it and we meet three times a

00:05:09 --> 00:05:16
year next week I'll be in Cologne

00:05:11 --> 00:05:19
Germany spending a week doing

00:05:15 --> 00:05:22
standardization and we'll vote out the

00:05:18 --> 00:05:26
committee draft or C++ 20 which goes to

00:05:21 --> 00:05:29
the national standards committees for

00:05:25 --> 00:05:32
comments and requests for changes

00:05:28 --> 00:05:35
improvements then we do that and there's

00:05:31 --> 00:05:37
a second set of votes where hopefully

00:05:34 --> 00:05:40
everybody votes in favor this has

00:05:36 --> 00:05:43
happened several times first time we

00:05:39 --> 00:05:48
finished we started in the first

00:05:42 --> 00:05:51
echnical meeting was in 1990 the last

00:05:47 --> 00:05:54
was in 98 we voted it out that was

00:05:50 --> 00:05:57
uspended that people used till 11:00 or

00:05:53 --> 00:06:00
little bit past 11:00 and was an

00:05:56 --> 00:06:05
international standard all the countries

00:05:59 --> 00:06:09
voted in favor it took longer with 11

00:06:04 --> 00:06:13
I'll mention why but all the nations

00:06:08 --> 00:06:17
voted in favor and we work on the basis

00:06:12 --> 00:06:21
of consensus that is we do not want

00:06:16 --> 00:06:23
something that passes 6040 because then

00:06:20 --> 00:06:25
we're going to get dialects and

00:06:22 --> 00:06:27
opponents and people complain too much

00:06:24 --> 00:06:31
they don't complain so much but

00:06:26 --> 00:06:34
basically it has no real effect the

00:06:30 --> 00:06:38
standards has been obeyed they have been

00:06:33 --> 00:06:40
working to make it easier to use many

00:06:37 --> 00:06:45
compilers many computers and all of that

00:06:39 --> 00:06:47
kind of stuff and so the first the the

00:06:44 --> 00:06:50
traditional with ISO standards to take

00:06:46 --> 00:06:53
ten years we did the first one in eight

00:06:49 --> 00:06:55
brilliant and we thought we were going

00:06:52 --> 00:07:01
to do the next one and six because now

00:06:54 --> 00:07:03
e're good at it right it took 13 yeah

00:07:00 --> 00:07:06
it was named o X it was named

00:07:02 --> 00:07:08
Oh X hoping that you would at least get

00:07:05 --> 00:07:10
it in within the single within the arts

00:07:07 --> 00:07:12
the single day I thought we would get

00:07:09 --> 00:07:14
yeah I thought would gets

00:07:11 --> 00:07:17
ix seven or eight the confidence of

00:07:13 --> 00:07:20
youth yes right well the point is that

00:07:16 --> 00:07:23
his was sort of like a second system

00:07:19 --> 00:07:25
effect that is we now knew how to do it

00:07:22 --> 00:07:27
and so we're going to do it much better

00:07:24 --> 00:07:30
and we've got more ambitious ambition

00:07:26 --> 00:07:33
and it took longer furthermore there is

00:07:29 --> 00:07:40
this tendency because it's a ten year

00:07:32 --> 00:07:42
cycle boy age doesn't matter just before

00:07:39 --> 00:07:47
you're about to ship somebody has a

00:07:41 --> 00:07:52
bright idea yeah and so we really really

00:07:46 --> 00:07:57
must get that in we did that

00:07:51 --> 00:08:00
successfully with the STL we got the the

00:07:56 --> 00:08:02
standard libraries all the STL stuff

00:07:59 --> 00:08:06
that that I basically I think it saved

00:08:01 --> 00:08:09
C++ it was beautiful yes and then people

00:08:05 --> 00:08:11
tried it with other things and it didn't

00:08:08 --> 00:08:14
work so well they got things in but it

00:08:10 --> 00:08:15
wasn't as dramatic and it took longer

00:08:13 --> 00:08:19
and longer and longer

00:08:14 --> 00:08:23
so after C++ 11 which was a huge

00:08:18 --> 00:08:27
improvement and what basically what most

00:08:22 --> 00:08:31
people are using today we decided ever

00:08:26 --> 00:08:34
again and so how do you avoid those

00:08:30 --> 00:08:38
slips and the answer is that you shipped

00:08:33 --> 00:08:43
more often so that if you if you if you

00:08:37 --> 00:08:44
have a slip on the 10-year cycle by the

00:08:42 --> 00:08:47
time you know it's a slip there's 11

00:08:43 --> 00:08:51
years till you get it yeah now with a

00:08:46 --> 00:08:54
three year cycle there is about three or

00:08:50 --> 00:08:57
four years till you get it like the

00:08:53 --> 00:09:00
delay between feature freeze and

00:08:56 --> 00:09:03
shipping so you always get one or two

00:08:59 --> 00:09:08
years more and so we shipped

00:09:02 --> 00:09:13
14 on time we shipped 17 on time and we

00:09:07 --> 00:09:16
ship we will ship 20 on time it's it'll

00:09:12 --> 00:09:19
happen and furthermore this allow this

00:09:15 --> 00:09:21
gives a predictability that allows the

00:09:18 --> 00:09:24
implementers the compiler implementers

00:09:20 --> 00:09:25
the library implementers to they have a

00:09:23 --> 00:09:30
target

00:09:24 --> 00:09:35
deliver on it 11 took two years for most

00:09:29 --> 00:09:36
compilers were good enough 14 most

00:09:34 --> 00:09:41
compilers were actually getting pretty

00:09:35 --> 00:09:45
good in 14 17 everybody shipped in 17

00:09:40 --> 00:09:47
well we are going to have at least

00:09:44 --> 00:09:50
almost everybody's ship almost

00:09:46 --> 00:09:54
everything in 20 and I know this because

00:09:49 --> 00:09:56
they're shipping in nineteen predictably

00:09:53 --> 00:09:59
this is good delivery on time is good

00:09:55 --> 00:10:02
and so yeah that's great tell us how it

00:09:58 --> 00:10:02
works

00:10:07 --> 00:10:10
you

<!-- YOUTUBE_TRANSCRIPT_END -->
