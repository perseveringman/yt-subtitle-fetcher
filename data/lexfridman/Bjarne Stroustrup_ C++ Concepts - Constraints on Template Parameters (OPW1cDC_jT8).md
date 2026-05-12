---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "OPW1cDC_jT8"
title: "Bjarne Stroustrup: C++ Concepts - Constraints on Template Parameters"
video_url: "https://www.youtube.com/watch?v=OPW1cDC_jT8"
thumbnail_url: "https://i.ytimg.com/vi/OPW1cDC_jT8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=OPW1cDC_jT8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-11T22:10:41.000Z"
upload_date: "2019-11-11"
duration_seconds: 624
duration_human: "10:24"
view_count: 18024
like_count: 425
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:46:01.231Z"
---

# Bjarne Stroustrup: C++ Concepts - Constraints on Template Parameters

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=OPW1cDC_jT8
- video_id: OPW1cDC_jT8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-11T22:10:41.000Z
- upload_date: 2019-11-11
- duration: 10:24
- view_count: 18024
- like_count: 425
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, template metaprogramming, c++ templates, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
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
and then there's this idea of concepts

00:00:03 --> 00:00:14
that puts some now I've never even the I

00:00:11 --> 00:00:17
don't know if it was ever available in

00:00:13 --> 00:00:19
any form but it puts some constraints on

00:00:16 --> 00:00:23
the stuff you can parameterize

00:00:18 --> 00:00:28
ssentially let me try and explain yes

00:00:22 --> 00:00:30
o yes it wasn't there ten years ago we

00:00:27 --> 00:00:35
have had versions of it that actually

00:00:29 --> 00:00:39
work for the last four or five years it

00:00:34 --> 00:00:43
was a design by Gabby does raise true

00:00:38 --> 00:00:48
certain and me we were professors and

00:00:42 --> 00:00:50
postdocs in Texas at the time and the

00:00:47 --> 00:00:56
implementation by Andres Arden has been

00:00:49 --> 00:01:02
available for at that time and it is

00:00:55 --> 00:01:04
part of C++ 20 and the standard library

00:01:01 --> 00:01:12
that uses it so this is becoming really

00:01:03 --> 00:01:15
very real it's available in clang in GCC

00:01:11 --> 00:01:17
for a couple of years and I believe

00:01:14 --> 00:01:20
Microsoft assume assume going to do it

00:01:16 --> 00:01:25
expect a wall of C++ 20 to be available

00:01:19 --> 00:01:29
so in all the major compilers in 20 but

00:01:24 --> 00:01:31
his kind of stuff is it's available now

00:01:28 --> 00:01:33
I'm just saying that because otherwise

00:01:30 --> 00:01:36
people might think I was talking about

00:01:32 --> 00:01:38
science fiction and so what I'm going to

00:01:35 --> 00:01:39
say Israel on Crete you can write it

00:01:37 --> 00:01:42
oday

00:01:38 --> 00:01:47
and there's production users of it so

00:01:41 --> 00:01:52
the basic idea is that when you have a a

00:01:46 --> 00:01:55
generic component like a sort function

00:01:51 --> 00:01:59
the sort function will require at least

00:01:54 --> 00:02:04
wo parameters one a data structure with

00:01:59 --> 00:02:08
a given type and comparison criteria and

00:02:03 --> 00:02:09
these things are related but obviously

00:02:07 --> 00:02:13
ou can't compare things if you don't

00:02:08 --> 00:02:17
know what the type of things you compare

00:02:12 --> 00:02:20
and so you want to be able to say I'm

00:02:16 --> 00:02:21
going to sort something and did this so

00:02:19 --> 00:02:23
be sortable what does it mean to be

00:02:20 --> 00:02:26
sortable you look it up in the standard

00:02:22 --> 00:02:29
it has to have it has to be a sequence

00:02:25 --> 00:02:31
with a beginner and an end there has to

00:02:28 --> 00:02:36
be random access to that sequence and

00:02:30 --> 00:02:40
there has to be the element types has to

00:02:35 --> 00:02:43
be comparable like a more like operator

00:02:39 --> 00:02:46
can I do it yes what illogical already

00:02:42 --> 00:02:48
cannot basically what concepts are there

00:02:45 --> 00:02:52
compile-time predicates there predicates

00:02:47 --> 00:02:53
you can ask are you a sequence yes I

00:02:51 --> 00:02:57
have begin an end

00:02:52 --> 00:03:02
are you a random exit sequence yes I

00:02:56 --> 00:03:03
have subscripting and plus it's your

00:03:01 --> 00:03:04
element type something that has a less

00:03:02 --> 00:03:08
then yes

00:03:03 --> 00:03:10
I have a less than hits and so basically

00:03:07 --> 00:03:13
that's the system and so instead of

00:03:09 --> 00:03:14
saying I will take a parameter of any

00:03:12 --> 00:03:18
type it'll say I'll take something

00:03:13 --> 00:03:22
that's horrible and it's well defined

00:03:17 --> 00:03:24
and so we say okay you can sorta less

00:03:21 --> 00:03:26
than I don't want less then I want

00:03:23 --> 00:03:28
greater than us or something I invent so

00:03:25 --> 00:03:31
you have two parameters the sortable

00:03:27 --> 00:03:35
thing and the compassion criteria and

00:03:30 --> 00:03:39
the comparison criteria will say well I

00:03:34 --> 00:03:42
can you you can write it saying it

00:03:38 --> 00:03:46
should operate on the element type and

00:03:41 --> 00:03:49
it has the compassion operations so

00:03:45 --> 00:03:51
that's the simply the fundamental thing

00:03:48 --> 00:03:54
it's compile-time predicates do you have

00:03:50 --> 00:03:57
the properties I need so it specifies

00:03:53 --> 00:04:01
the requirements of the code on the

00:03:56 --> 00:04:05
parameters that gets yes there are lots

00:04:00 --> 00:04:09
of types actually but operating in the

00:04:04 --> 00:04:14
space of concepts concepts the word

00:04:08 --> 00:04:16
concept was used by Alec Stephan of who

00:04:13 --> 00:04:19
is sort of the father of generic

00:04:15 --> 00:04:23
programming in the context of C++

00:04:18 --> 00:04:25
there's other places that use that word

00:04:22 --> 00:04:28
but the way we call Genetic Programming

00:04:24 --> 00:04:30
is Alex's and he called them concepts

00:04:27 --> 00:04:32
because he said there they are the sort

00:04:29 --> 00:04:35
of the fundamental concepts of an area

00:04:31 --> 00:04:37
so they should be called concepts and

00:04:34 --> 00:04:41
we've had concepts all the time if you

00:04:36 --> 00:04:46
look at the K&R book about si si has

00:04:40 --> 00:04:50
arithmetic types and it has integral

00:04:45 --> 00:04:52
types it says so in the book and then it

00:04:49 --> 00:04:54
lists what they are and they have

00:04:51 --> 00:04:57
certain properties the difference to me

00:04:53 --> 00:05:00
is that we can actually write a concept

00:04:56 --> 00:05:03
hat will ask a type are you an integral

00:04:59 --> 00:05:06
type do you have the properties

00:05:02 --> 00:05:10
necessary to be an integral type do you

00:05:05 --> 00:05:15
have cross - divide so what may be the

00:05:09 --> 00:05:21
story of concepts because I thought it

00:05:14 --> 00:05:24
might be part of C++ 11 C C C's o X or

00:05:20 --> 00:05:28
whatever it was at the time what was the

00:05:23 --> 00:05:29
why didn't it what like what we'll talk

00:05:27 --> 00:05:31
a little bit about this fascinating

00:05:28 --> 00:05:33
process of standards because I think

00:05:30 --> 00:05:36
it's really interesting for people it's

00:05:32 --> 00:05:39
interesting for me but why did it take

00:05:35 --> 00:05:43
so long what shapes that the idea of

00:05:38 --> 00:05:49
concepts take what were the challenges

00:05:42 --> 00:05:52
back in 87 or there abouts 1987 well

00:05:48 --> 00:05:54
1987 like they are about so when I was

00:05:51 --> 00:05:57
designing templates obviously I wanted

00:05:53 --> 00:06:00
to express the notion of what is

00:05:56 --> 00:06:04
required by a template of its arguments

00:05:59 --> 00:06:06
and so I looked at this and basically

00:06:03 --> 00:06:10
for for templates I wanted three

00:06:05 --> 00:06:15
properties I wanted to be very flexible

00:06:09 --> 00:06:18
it had to be able to express things I

00:06:14 --> 00:06:20
couldn't imagine because I know I can't

00:06:17 --> 00:06:22
imagine everything and I've been

00:06:19 --> 00:06:25
suffering from languages and try to

00:06:21 --> 00:06:28
constrain you to only do what you're the

00:06:24 --> 00:06:32
designer thought good didn't want to do

00:06:27 --> 00:06:35
that secondly it had to run faster

00:06:31 --> 00:06:38
as fast or faster that hand-written code

00:06:34 --> 00:06:42
so basically if I have a vector of T and

00:06:37 --> 00:06:44
I take a vector of cha it should run as

00:06:41 --> 00:06:47
fast as you build a vector of cha

00:06:43 --> 00:06:51
yourself without parameterization and

00:06:46 --> 00:06:57
second and thirdly I wanted to be able

00:06:50 --> 00:07:00
to express the constraints of of the

00:06:56 --> 00:07:03
arguments have proper type checking of

00:06:59 --> 00:07:06
the interfaces and neither I nor anybody

00:07:02 --> 00:07:10
else at the time knew how to get all

00:07:05 --> 00:07:14
three and I thought for C++ I must have

00:07:09 --> 00:07:17
the two first otherwise it's not C++ and

00:07:13 --> 00:07:19
it bothered me for an hour a couple of

00:07:16 --> 00:07:22
decades that I couldn't solve the third

00:07:18 --> 00:07:25
one I mean I was the one that put

00:07:21 --> 00:07:28
function argument type checking in to

00:07:24 --> 00:07:30
see I know the value of good interfaces

00:07:27 --> 00:07:34
I didn't invent that idea it's very

00:07:29 --> 00:07:37
common but I did it and I wanted to do

00:07:33 --> 00:07:41
the same for templates of course and I

00:07:36 --> 00:07:45
could so it bothered me then we try it

00:07:40 --> 00:07:47
again mm of to 2003

00:07:44 --> 00:07:52
cavitus raised and I started analyzing

00:07:46 --> 00:07:56
the problem explained possible solutions

00:07:51 --> 00:07:59
it was not a complete design a group in

00:07:55 --> 00:08:04
University of Indiana an old friend of

00:07:58 --> 00:08:12
mine they started a project at Indiana

00:08:03 --> 00:08:15
nd we thought we could get a good

00:08:11 --> 00:08:20
system of concepts in another two or

00:08:14 --> 00:08:28
three years that would have made C++ la

00:08:19 --> 00:08:31
11 to C++ Oh 607 well it turns out that

00:08:27 --> 00:08:34
I think we got a lot of the fundamental

00:08:30 --> 00:08:38
ideas are wrong they were took on

00:08:33 --> 00:08:41
conventional they didn't quite fit C++

00:08:37 --> 00:08:43
in my opinion didn't serve implicit

00:08:40 --> 00:08:47
conversions very well it didn't

00:08:42 --> 00:08:50
of mixed mixed type arithmetic Mitch

00:08:46 --> 00:08:52
type computation computations very well

00:08:49 --> 00:08:54
a lot of stuff came out of the

00:08:51 --> 00:09:01
functional

00:08:53 --> 00:09:04
community and it that community didn't

00:09:00 --> 00:09:08
deal with multiple types in in the same

00:09:03 --> 00:09:12
way as C++ does had more constraints on

00:09:07 --> 00:09:15
what you could express and didn't

00:09:11 --> 00:09:18
have the draconian performance

00:09:14 --> 00:09:21
requirements and basically we tried we

00:09:17 --> 00:09:26
tried very hard we had some successes

00:09:20 --> 00:09:29
but it just in the end wasn't didn't

00:09:25 --> 00:09:34
compile fast enough was too hard to use

00:09:28 --> 00:09:39
and didn't run fast enough unless you

00:09:33 --> 00:09:41
had optimizes that was beyond the state

00:09:38 --> 00:09:44
of the art they still are so we had to

00:09:40 --> 00:09:49
do something else basically it was the

00:09:43 --> 00:09:52
idea that a set of parameters has

00:09:48 --> 00:09:54
defines a set of operations and you go

00:09:51 --> 00:09:57
through an indirection table just like

00:09:53 --> 00:10:01
for virtual functions then you try to

00:09:56 --> 00:10:04
ptimize the interaction away to get

00:10:00 --> 00:10:06
performance and we just couldn't do all

00:10:03 --> 00:10:06
of that

00:10:11 --> 00:10:14
you

<!-- YOUTUBE_TRANSCRIPT_END -->
