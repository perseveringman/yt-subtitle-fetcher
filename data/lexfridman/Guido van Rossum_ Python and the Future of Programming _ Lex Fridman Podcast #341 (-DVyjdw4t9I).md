---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "-DVyjdw4t9I"
title: "Guido van Rossum: Python and the Future of Programming | Lex Fridman Podcast #341"
video_url: "https://www.youtube.com/watch?v=-DVyjdw4t9I"
thumbnail_url: "https://i.ytimg.com/vi/-DVyjdw4t9I/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=-DVyjdw4t9I"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2022-11-26T16:23:48.000Z"
upload_date: "2022-11-26"
duration_seconds: 11751
duration_human: "3:15:51"
view_count: 1744269
like_count: 18501
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T13:22:38.118Z"
---

# Guido van Rossum: Python and the Future of Programming | Lex Fridman Podcast #341

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=-DVyjdw4t9I
- video_id: -DVyjdw4t9I
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2022-11-26T16:23:48.000Z
- upload_date: 2022-11-26
- duration: 3:15:51
- view_count: 1744269
- like_count: 18501
- has_subtitle: true
- language: en
- availability: public
- tags: agi, ai, ai podcast, artificial intelligence, artificial intelligence podcast, asyncio, coding, gil, guido van rossum, ide, lex ai, lex fridman, lex jre, lex mit, lex podcast, mit ai, mypy, parallelism, programming, python 3
- categories: Science & Technology

## Description

Guido van Rossum is the creator of Python programming language. Please support this podcast by checking out our sponsors:
- GiveDirectly: https://givedirectly.org/lex to get gift matched up to $1000
- Eight Sleep: https://www.eightsleep.com/lex to get special savings
- Fundrise: https://fundrise.com/lex
- InsideTracker: https://insidetracker.com/lex to get 20% off
- Athletic Greens: https://athleticgreens.com/lex to get 1 month of fish oil

EPISODE LINKS:
Guido's Twitter: https://twitter.com/gvanrossum 
Guido's Website: https://gvanrossum.github.io/
Python's Website: https://python.org

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
0:48 - CPython
6:01 - Code readability
10:22 - Indentation
26:58 - Bugs
38:26 - Programming fads
53:37 - Speed of Python 3.11
1:18:31 - Type hinting
1:23:49 - mypy
1:29:05 - TypeScript vs JavaScript
1:45:05 - Best IDE for Python
1:55:05 - Parallelism
2:12:58 - Global Interpreter Lock (GIL)
2:22:36 - Python 4.0
2:34:53 - Machine learning
2:44:35 - Benevolent Dictator for Life (BDFL)
2:56:11 - Advice for beginners
3:02:43 - GitHub Copilot
3:06:10 - Future of Python

SOCIAL:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Reddit: https://reddit.com/r/lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:09
can you imagine possible features

00:00:04 --> 00:00:14
that python 4.0 might have that would

00:00:08 --> 00:00:16
necessitate the creation of the new 4.0

00:00:13 --> 00:00:18
given the amount of

00:00:15 --> 00:00:20
pain and joy

00:00:17 --> 00:00:23
suffering and Triumph that was involved

00:00:19 --> 00:00:26
in the move between version 2 and

00:00:22 --> 00:00:26
version 3.

00:00:25 --> 00:00:30
the following is a conversation with

00:00:26 --> 00:00:32
Guido van Rossum his second time on this

00:00:29 --> 00:00:35
podcast he is the creator of the Python

00:00:31 --> 00:00:39
programming language and is Python's

00:00:34 --> 00:00:42
Emeritus pdfo benevolent dictator for

00:00:38 --> 00:00:44
life this is the Lex Friedman podcast to

00:00:41 --> 00:00:46
support it please check out our sponsors

00:00:43 --> 00:00:49
in the description and now dear friends

00:00:45 --> 00:00:54
here's Guido and Russell

00:00:48 --> 00:00:57
python 3.11 is coming out very soon init

00:00:53 --> 00:01:00
C python claimed to be 10 to 60 percent

00:00:56 --> 00:01:03
faster how did you pull that off and

00:00:59 --> 00:01:05
what's C python C python is the last

00:01:02 --> 00:01:07
python implementation standing also the

00:01:04 --> 00:01:09
first one that was ever created the

00:01:06 --> 00:01:11
original python implementation that I

00:01:08 --> 00:01:13
started over 30 years ago so what does

00:01:10 --> 00:01:16
it mean that python the programming

00:01:12 --> 00:01:18
language is implemented in another

00:01:15 --> 00:01:20
programming language called C what kind

00:01:17 --> 00:01:22
of audience do you have in mind here

00:01:19 --> 00:01:24
people who know programming no there's

00:01:21 --> 00:01:26
omebody on a boat that's into fishing

00:01:24 --> 00:01:29
and have never heard about programming

00:01:25 --> 00:01:30
but also some world-class programmers

00:01:28 --> 00:01:32
you're gonna have to speak to both

00:01:29 --> 00:01:34
imagine a boat with two people one of

00:01:31 --> 00:01:36
them has not heard about programming is

00:01:33 --> 00:01:40
really into phishing and the other one

00:01:35 --> 00:01:41
is like uh an incredible Silicon Valley

00:01:39 --> 00:01:45
programmer that's programmed in

00:01:40 --> 00:01:47
everything C C plus plus python rust

00:01:44 --> 00:01:48
Java it knows the entire history of

00:01:46 --> 00:01:51
programming languages so you're gonna

00:01:47 --> 00:01:52
have to speak to both I imagine that

00:01:50 --> 00:01:55
boat in the middle of the ocean yes I'm

00:01:51 --> 00:01:58
gonna please the guy who knows how to

00:01:54 --> 00:02:00
fish first yes please

00:01:57 --> 00:02:02
he seems like the most useful in the

00:01:59 --> 00:02:03
middle of the ocean you got you gotta

00:02:01 --> 00:02:06
make him mad I'm sure he has a cell

00:02:02 --> 00:02:08
phone so uh he's probably very

00:02:05 --> 00:02:10
suspicious about what goes on in that

00:02:07 --> 00:02:12
cell phone but he must have heard that

00:02:09 --> 00:02:15
inside his cell phone is a tiny computer

00:02:11 --> 00:02:18
and a programming language is computer

00:02:14 --> 00:02:19
code that tells the computer what to do

00:02:17 --> 00:02:23
it's a very low level

00:02:18 --> 00:02:26
anguage it's zeros and ones and then

00:02:22 --> 00:02:28
there's assembly and then oh yeah we

00:02:25 --> 00:02:31
don't talk about these really low levels

00:02:27 --> 00:02:33
because those just confuse people I mean

00:02:30 --> 00:02:36
when we're talking about human language

00:02:32 --> 00:02:38
we're not usually talking about vocal

00:02:35 --> 00:02:40
tracts and how you position your tongue

00:02:37 --> 00:02:43
I was talking yesterday about how when

00:02:39 --> 00:02:47
you have a Chinese person and they speak

00:02:42 --> 00:02:50
English uh this is a bit of a stereotype

00:02:46 --> 00:02:52
they often don't know or they they can't

00:02:49 --> 00:02:55
seem to make the difference well

00:02:51 --> 00:02:57
between an l and an r and I have a

00:02:54 --> 00:02:59
theory about that and I've never checked

00:02:56 --> 00:03:03
this with linguists

00:02:59 --> 00:03:05
uh that it probably has to do with the

00:03:02 --> 00:03:08
fact that in Chinese there is not really

00:03:04 --> 00:03:11
a difference and it could be that there

00:03:07 --> 00:03:13
are Regional variations in how China

00:03:10 --> 00:03:15
tive Chinese speakers pronounce that

00:03:12 --> 00:03:18
one sound that

00:03:14 --> 00:03:21
sounds to L to some like L to some of

00:03:17 --> 00:03:24
them like R to others so it's both the

00:03:20 --> 00:03:26
sounds you produce with your mouth

00:03:23 --> 00:03:28
roughout the history of your life and

00:03:25 --> 00:03:30
what you're used to listening to I mean

00:03:27 --> 00:03:32
every language has that Russian has

00:03:29 --> 00:03:35
exactly the Slavic languages have sounds

00:03:31 --> 00:03:37
like the letters

00:03:34 --> 00:03:41
like uh Americans or English speakers

00:03:36 --> 00:03:44
don't seem to know the sounds

00:03:40 --> 00:03:46
they seemed uncomfortable with that

00:03:43 --> 00:03:49
sound yeah so I'm sure oh yes okay so

00:03:45 --> 00:03:51
we're not we're not going to the shapes

00:03:48 --> 00:03:53
of tongues and the sounds that the mouth

00:03:50 --> 00:03:56
can make fine words similarly we're not

00:03:52 --> 00:03:58
going into the ones and zeros or machine

00:03:55 --> 00:04:01
language I would say a programming

00:03:57 --> 00:04:03
language is a list of instructions like

00:04:00 --> 00:04:06
a cookbook recipe

00:04:03 --> 00:04:10
that sort of tells you how to do a

00:04:05 --> 00:04:13
certain thing like make a sandwich well

00:04:09 --> 00:04:17
acquire a loaf of bread cut it in slices

00:04:12 --> 00:04:20
uh take two slices uh put mustard on one

00:04:16 --> 00:04:24
put the jelly on the other or something

00:04:19 --> 00:04:26
then add the meat then add the cheese

00:04:23 --> 00:04:29
I've heard that science teachers can

00:04:25 --> 00:04:32
actually uh do great stuff with recipes

00:04:28 --> 00:04:35
like that and trying to interpret their

00:04:31 --> 00:04:37
students instructions incorrectly until

00:04:34 --> 00:04:38
the students are completely unambiguous

00:04:36 --> 00:04:40
about it

00:04:37 --> 00:04:41
with language see that's the difference

00:04:39 --> 00:04:42
between

00:04:40 --> 00:04:46
atural languages and programming

00:04:41 --> 00:04:50
languages I think ambiguity is a feature

00:04:45 --> 00:04:51
not a bug in human spoken languages like

00:04:49 --> 00:04:53
uh

00:04:50 --> 00:04:55
that's the dance of communication

00:04:52 --> 00:04:58
between humans

00:04:54 --> 00:04:59
well for lawyers ambiguity certainly is

00:04:57 --> 00:05:03
a feature

00:04:58 --> 00:05:07
uh for plenty of other cases uh the

00:05:02 --> 00:05:09
ambiguity is is not much of a feature

00:05:06 --> 00:05:12
but we work around it of course well

00:05:08 --> 00:05:14
what's more important is context

00:05:11 --> 00:05:16
so with context the Precision of the

00:05:13 --> 00:05:20
statement becomes more and more concrete

00:05:15 --> 00:05:22
right but you know when you say I love

00:05:19 --> 00:05:25
you to a person that matters a lot to

00:05:21 --> 00:05:26
you the person doesn't try to compile

00:05:24 --> 00:05:29
that statement and return an error

00:05:25 --> 00:05:32
saying please define love

00:05:28 --> 00:05:36
right no but I imagine that my wife and

00:05:31 --> 00:05:38
my son uh interpret it very differently

00:05:35 --> 00:05:40
es even though it's the same three

00:05:37 --> 00:05:42
words but imprecisely still

00:05:39 --> 00:05:44
oh for sure

00:05:41 --> 00:05:46
lawyers never had a lot of follow-up

00:05:43 --> 00:05:48
questions for you nevertheless the

00:05:45 --> 00:05:51
context is already different different

00:05:47 --> 00:05:54
in that case yes fair enough so that's

00:05:50 --> 00:05:58
a programming language is uh

00:05:53 --> 00:06:02
ability to unambiguously State a recipe

00:05:57 --> 00:06:04
actually let's go back let's go to Pepe

00:06:01 --> 00:06:08
you go through and pepe the style guide

00:06:03 --> 00:06:10
for python code some ideas of what this

00:06:07 --> 00:06:13
language should look like

00:06:09 --> 00:06:15
feel like read like and the big idea

00:06:12 --> 00:06:17
there is that code readability counts

00:06:14 --> 00:06:19
what does that mean to you and how do we

00:06:16 --> 00:06:21
achieve it so this recipe should be

00:06:18 --> 00:06:23
readable that's a thing between

00:06:20 --> 00:06:25
programmers

00:06:22 --> 00:06:28
because on the one hand we always

00:06:24 --> 00:06:32
explain the concept of programming

00:06:27 --> 00:06:34
language as computers need instructions

00:06:31 --> 00:06:36
and computers are very dumb and they

00:06:33 --> 00:06:39
need very precise instructions because

00:06:35 --> 00:06:40
they don't have much context in in fact

00:06:38 --> 00:06:43
hey have lots of context but their

00:06:39 --> 00:06:47
context is very different

00:06:42 --> 00:06:49
but what we've seen emerge during the

00:06:46 --> 00:06:52
development of software starting in the

00:06:48 --> 00:06:56
probably in the late 40s

00:06:51 --> 00:06:59
is that software is a very social

00:06:55 --> 00:07:02
activity a software developer is not a

00:06:58 --> 00:07:05
mad scientist who sits alone in his lab

00:07:01 --> 00:07:05
writing brilliant code

00:07:04 --> 00:07:11
software is developed by teams of people

00:07:08 --> 00:07:14
uh even the Mad scientists sitting alone

00:07:10 --> 00:07:16
in his lap can type fast enough to

00:07:13 --> 00:07:19
produce enough code so that by the time

00:07:15 --> 00:07:22
he's done with his coding he still

00:07:18 --> 00:07:25
remembers what the first few lines he

00:07:21 --> 00:07:28
wrote mean so even the mad scientist

00:07:24 --> 00:07:30
coding alone in his lab would would be

00:07:27 --> 00:07:35
sort of wise to

00:07:29 --> 00:07:37
adopt conventions on how to format

00:07:34 --> 00:07:40
he instructions that he gives to the

00:07:36 --> 00:07:43
computer so that the thing is there is a

00:07:39 --> 00:07:45
difference between a cookbook recipe and

00:07:42 --> 00:07:47
a computer program

00:07:44 --> 00:07:50
The cookbook recipe the the author of

00:07:46 --> 00:07:54
The cookbook writes it once

00:07:49 --> 00:07:56
and then is printed in 100 000 copies

00:07:53 --> 00:07:58
and then lots of people in their

00:07:55 --> 00:08:01
kitchens try to recreate that recipe

00:07:57 --> 00:08:07
that that particular

00:08:00 --> 00:08:08
pie or dish from the recipe and so there

00:08:06 --> 00:08:11
the

00:08:07 --> 00:08:12
goal of the cookbook author is to

00:08:10 --> 00:08:16
make it clear

00:08:11 --> 00:08:20
to the human reader of the recipe the

00:08:15 --> 00:08:24
human amateur Chef in most cases

00:08:19 --> 00:08:28
when you're writing a computer program

00:08:23 --> 00:08:30
you have two audiences at once

00:08:27 --> 00:08:33
it needs to

00:08:29 --> 00:08:38
tell the computer what to do

00:08:32 --> 00:08:40
but it also is useful if that program is

00:08:37 --> 00:08:43
readable by other programmers

00:08:39 --> 00:08:47
because computer software unlike the

00:08:42 --> 00:08:49
typical recipe for a cherry pie is so

00:08:46 --> 00:08:52
complex

00:08:48 --> 00:08:53
that you don't get all of it right at

00:08:51 --> 00:08:55
once

00:08:52 --> 00:08:58
you end up with the activity of

00:08:54 --> 00:09:02
debugging and you end up with the

00:08:57 --> 00:09:02
activity of so debugging is

00:09:02 --> 00:09:06
trying to figure out why your code

00:09:04 --> 00:09:08
doesn't run the way you thought it

00:09:05 --> 00:09:11
should run that means brother could be

00:09:07 --> 00:09:13
stupid little errors or it could be big

00:09:10 --> 00:09:16
logical errors it could be anything

00:09:12 --> 00:09:20
spiritual yeah it could be anything from

00:09:15 --> 00:09:21
a typo to uh a wrong choice of algorithm

00:09:19 --> 00:09:24
to

00:09:20 --> 00:09:27
building something that does what you

00:09:23 --> 00:09:30
tell it to do but that's not useful

00:09:26 --> 00:09:33
yeah it seems to work really well 99 of

00:09:29 --> 00:09:35
the time but does weird things one

00:09:32 --> 00:09:38
percent of the time on some edge cases

00:09:34 --> 00:09:40
that's pretty much all software nowadays

00:09:37 --> 00:09:44
all good software right well yeah for

00:09:39 --> 00:09:46
bad software that that 99 goes down

00:09:43 --> 00:09:48
a lot so but it's not just about the

00:09:45 --> 00:09:51
complexity of the program it's like you

00:09:47 --> 00:09:54
said it is a social endeavor

00:09:50 --> 00:09:57
in that you're constantly improving that

00:09:53 --> 00:09:59
recipe for the cherry pie but you're

00:09:56 --> 00:10:02
sort of you're in a group of people

00:09:58 --> 00:10:05
improving that recipe or the mad

00:10:01 --> 00:10:08
scientist is improving the recipe that

00:10:04 --> 00:10:09
he created a year ago and making it

00:10:07 --> 00:10:12
better

00:10:08 --> 00:10:15
or adding adding something he decides

00:10:11 --> 00:10:18
that he wants a I don't know he wants

00:10:14 --> 00:10:20
ome decoration on his pie or icing or

00:10:17 --> 00:10:23
so there's broad philosophical things

00:10:19 --> 00:10:25
and there's specific advice on style so

00:10:22 --> 00:10:28
first of all the thing that people first

00:10:24 --> 00:10:30
experience when they look up python

00:10:27 --> 00:10:33
there is a it is very readable

00:10:30 --> 00:10:35
but there's also like a spatial

00:10:32 --> 00:10:37
structure to it

00:10:34 --> 00:10:40
can you explain the indentation style of

00:10:36 --> 00:10:43
python and what is the magic to it space

00:10:39 --> 00:10:45
bases are important for readability of

00:10:42 --> 00:10:48
any kind of text

00:10:44 --> 00:10:52
if you take a cookbook recipe

00:10:47 --> 00:10:56
and you remove all the sort of

00:10:51 --> 00:10:58
all the bullets and other markup

00:10:55 --> 00:11:00
and you just crunch all the text

00:10:57 --> 00:11:01
ogether maybe you leave the spaces

00:10:59 --> 00:11:03
between the words but that's all you

00:11:00 --> 00:11:06
leave

00:11:02 --> 00:11:08
when you're in the kitchen trying to

00:11:05 --> 00:11:10
figure out oh what are the ingredients

00:11:07 --> 00:11:12
and what are the steps

00:11:09 --> 00:11:14
and where does this step end and the

00:11:11 --> 00:11:16
next step begin you're going to have a

00:11:13 --> 00:11:18
hard time if it's if it's just one solid

00:11:15 --> 00:11:20
block of text

00:11:17 --> 00:11:23
on the other hand what what a typical

00:11:19 --> 00:11:24
cookbook does if the paper is not too

00:11:22 --> 00:11:27
expensive

00:11:23 --> 00:11:30
ach recipe starts on its own page maybe

00:11:26 --> 00:11:32
there's a picture next to it the list of

00:11:29 --> 00:11:36
ingredients comes first

00:11:31 --> 00:11:38
uh there's a standard notation the

00:11:35 --> 00:11:41
re's there's shortcuts so that you

00:11:37 --> 00:11:43
don't have to sort of write two

00:11:40 --> 00:11:45
sentences on how you have to cut the

00:11:42 --> 00:11:47
onion because there are only three ways

00:11:44 --> 00:11:50
that people ever cut onions in a kitchen

00:11:46 --> 00:11:52
small medium and in slices or something

00:11:49 --> 00:11:54
like that

00:11:51 --> 00:11:58
right none of my examples make any sense

00:11:53 --> 00:12:00
to real Cooks of course but yeah

00:11:57 --> 00:12:02
we're talking to programmers with a

00:11:59 --> 00:12:05
metaphor of cooking I love it

00:12:01 --> 00:12:07
um but there is a strictness to the

00:12:04 --> 00:12:09
spacing that python defines so there's

00:12:06 --> 00:12:11
ome

00:12:08 --> 00:12:13
a looser thing some stricter things but

00:12:10 --> 00:12:15
he four spaces for the

00:12:12 --> 00:12:17
indentation is really

00:12:14 --> 00:12:19
interesting it it really

00:12:16 --> 00:12:22
um it really defines what the language

00:12:18 --> 00:12:25
looks and feels like because indentation

00:12:21 --> 00:12:28
sort of taking a block of text and then

00:12:24 --> 00:12:30
having inside that block of text

00:12:27 --> 00:12:34
a smaller block of text that is indented

00:12:30 --> 00:12:38
further as sort of a group it's it's

00:12:33 --> 00:12:41
like you have a a bulleted list

00:12:37 --> 00:12:43
in a complex business document and

00:12:40 --> 00:12:46
inside some of the bullets are other

00:12:42 --> 00:12:49
bulleted lists you will indent those too

00:12:45 --> 00:12:52
if each bulleted list is indented

00:12:48 --> 00:12:55
several inches then at two levels deep

00:12:51 --> 00:12:57
there's no no space left on the page to

00:12:54 --> 00:12:59
put any of the words of the text so you

00:12:56 --> 00:13:03
can't indent too far on the other hand

00:12:58 --> 00:13:05
if you don't indent at all you can tell

00:13:02 --> 00:13:07
whether something is a top level bullet

00:13:04 --> 00:13:09
or a second level bullet or a third

00:13:06 --> 00:13:14
level bullet so you have to have

00:13:08 --> 00:13:16
some compromise and uh based on Ancient

00:13:13 --> 00:13:19
conventions

00:13:15 --> 00:13:21
and the sort of the typical width of a

00:13:18 --> 00:13:26
computer screen in the 80s

00:13:20 --> 00:13:26
uh and all sorts of things sort of

00:13:25 --> 00:13:32
we we came up with sort of four spaces

00:13:28 --> 00:13:35
as a compromise I mean there there are

00:13:31 --> 00:13:38
groups there are large groups of people

00:13:34 --> 00:13:41
who code with uh two spaces per indent

00:13:37 --> 00:13:44
level for example the Google style guide

00:13:40 --> 00:13:46
uh all the Google python code and I

00:13:43 --> 00:13:48
think also all the Google C plus plus

00:13:45 --> 00:13:50
code is indented with only two spaces

00:13:47 --> 00:13:54
per block if you're not used to that

00:13:49 --> 00:13:57
it's harder to at a glance

00:13:54 --> 00:14:00
understand the code because the the sort

00:13:56 --> 00:14:02
of the the high level structure is

00:13:59 --> 00:14:04
determined by the indentation on the

00:14:01 --> 00:14:05
other hand there are there are other

00:14:03 --> 00:14:08
programming languages where the

00:14:04 --> 00:14:11
indentation is uh eight spaces or a

00:14:07 --> 00:14:13
whole tab stop in in sort of classic

00:14:10 --> 00:14:15
Unix and to me that looks weird because

00:14:12 --> 00:14:18
you you sort of after three indent

00:14:14 --> 00:14:20
levels you've you've got no room left

00:14:17 --> 00:14:23
well there's some languages where the

00:14:19 --> 00:14:25
indentation is a recommendation

00:14:22 --> 00:14:28
it's a stylistic one the code compiles

00:14:24 --> 00:14:30
even without any indentation

00:14:27 --> 00:14:33
and then python really indentations a

00:14:30 --> 00:14:36
fundamental part of the language right

00:14:32 --> 00:14:39
it doesn't have to be four spaces so you

00:14:35 --> 00:14:44
can code python with two spaces per

00:14:38 --> 00:14:46
block or or six Paces or 12 if you

00:14:43 --> 00:14:49
really want to go wild but

00:14:45 --> 00:14:51
sort of everything

00:14:48 --> 00:14:53
that belongs to the same block needs to

00:14:50 --> 00:14:56
be indented the same way

00:14:52 --> 00:14:58
in practice in most other languages

00:14:55 --> 00:15:00
people recommend doing that anyway if

00:14:57 --> 00:15:03
you look at

00:14:59 --> 00:15:07
C or rust or C plus plus

00:15:02 --> 00:15:09
all those languages Java don't have a

00:15:06 --> 00:15:12
requirement of indentation

00:15:08 --> 00:15:16
but except in extreme cases

00:15:11 --> 00:15:20
they're just as anal about having their

00:15:15 --> 00:15:23
code properly indented so any IDE that

00:15:19 --> 00:15:26
he syntax highlighting that works with

00:15:22 --> 00:15:28
Java or C plus they will yell at you

00:15:25 --> 00:15:31
aggressively if you don't do proper

00:15:27 --> 00:15:36
indentation they'd suggests the proper

00:15:30 --> 00:15:38
indentation for you like uh in C you

00:15:35 --> 00:15:40
type a few words and then you type a

00:15:37 --> 00:15:45
curly brace which there is their notion

00:15:39 --> 00:15:47
of sort of begin and an indented block

00:15:44 --> 00:15:49
uh then you hit return and then it

00:15:46 --> 00:15:52
automatically indents four or eight

00:15:48 --> 00:15:54
spaces depending on uh your your style

00:15:51 --> 00:15:56
preferences or how your editor is

00:15:53 --> 00:15:59
configured was there a possible Universe

00:15:55 --> 00:16:02
in which you considered having braces in

00:15:58 --> 00:16:07
Python absolutely yeah well there's a 60

00:16:01 --> 00:16:11
40 70 30 in your head uh uh what was the

00:16:06 --> 00:16:14
trade-off for a long time I was actually

00:16:10 --> 00:16:16
convinced that the indentation was just

00:16:13 --> 00:16:17
better

00:16:15 --> 00:16:21
uh

00:16:16 --> 00:16:23
without context I would still claim that

00:16:20 --> 00:16:28
indentation is better

00:16:23 --> 00:16:31
uh it reduces clutter however

00:16:27 --> 00:16:32
as I started to say earlier context is

00:16:30 --> 00:16:36
almost everything

00:16:31 --> 00:16:38
and in the context of coding

00:16:35 --> 00:16:41
most programmers are familiar with

00:16:37 --> 00:16:43
multiple languages even if they're only

00:16:40 --> 00:16:47
good at one or two

00:16:42 --> 00:16:48
and apart from Python and maybe Fortran

00:16:46 --> 00:16:51
I don't know how that's written these

00:16:47 --> 00:16:53
days anymore but all the other languages

00:16:50 --> 00:16:57
Java rust CC plus plus JavaScript

00:16:52 --> 00:17:03
ypescript Perl are all using curly

00:16:56 --> 00:17:06
braces uh to sort of indicate blocks and

00:17:02 --> 00:17:09
so python is the odd one out so it's a

00:17:05 --> 00:17:11
radical idea do you still as a radical

00:17:08 --> 00:17:14
Renegade revolutionary do you still

00:17:10 --> 00:17:16
stand behind this idea of space of uh

00:17:13 --> 00:17:18
indentation versus braces

00:17:15 --> 00:17:19
like what what can you dig into it a

00:17:17 --> 00:17:23
little bit more

00:17:18 --> 00:17:26
why you still stand behind indentation

00:17:22 --> 00:17:29
because context is not the whole story

00:17:25 --> 00:17:33
history in in a sense provides more

00:17:28 --> 00:17:37
context so for python

00:17:32 --> 00:17:40
there's no chance that we can switch

00:17:36 --> 00:17:42
python is using curly braces for

00:17:39 --> 00:17:44
something else dictionaries mostly

00:17:41 --> 00:17:48
we would get in trouble if we wanted to

00:17:43 --> 00:17:50
switch just like you couldn't redefine C

00:17:47 --> 00:17:53
to use indentation

00:17:49 --> 00:17:55
even if you agree that it that

00:17:52 --> 00:17:57
indentation sort of

00:17:54 --> 00:17:58
in a Greenfield environment would be

00:17:56 --> 00:18:02
tter

00:17:57 --> 00:18:05
you can't change that kind of thing in a

00:18:01 --> 00:18:08
language yeah it's hard enough to reach

00:18:04 --> 00:18:11
agreement over over much more Minor

00:18:07 --> 00:18:13
Details maybe I mean in the past in

00:18:10 --> 00:18:15
Python we did have a big debate about

00:18:12 --> 00:18:17
est versus spaces and four spaces

00:18:14 --> 00:18:20
versus fewer or more

00:18:16 --> 00:18:23
and we sort of came up with

00:18:19 --> 00:18:25
a recommended standard and sort of

00:18:22 --> 00:18:27
options for people who want to be

00:18:24 --> 00:18:31
different

00:18:27 --> 00:18:33
but yes I guess the thought experiment

00:18:30 --> 00:18:36
I'd like you to consider is if you could

00:18:32 --> 00:18:39
travel back through time when the when

00:18:35 --> 00:18:41
the compatibility is not an issue and he

00:18:38 --> 00:18:45
started python all over again

00:18:40 --> 00:18:46
can you make the case for uh indentation

00:18:45 --> 00:18:49
still

00:18:45 --> 00:18:51
well it frees up a pair of

00:18:48 --> 00:18:53
matched brackets of which there are

00:18:50 --> 00:18:56
never enough in the world

00:18:52 --> 00:18:59
uh for other purposes

00:18:55 --> 00:19:01
really makes the language slightly

00:18:58 --> 00:19:04
sort of

00:19:00 --> 00:19:06
easier to grasp for people who don't

00:19:03 --> 00:19:10
already know

00:19:05 --> 00:19:12
another programming language

00:19:09 --> 00:19:15
because the sort of one of the things

00:19:11 --> 00:19:17
and I I mostly got this from my mentors

00:19:14 --> 00:19:19
who were

00:19:16 --> 00:19:22
taught me programming language design in

00:19:18 --> 00:19:24
the earlier 80s when you're teaching

00:19:21 --> 00:19:29
programming

00:19:23 --> 00:19:32
for for the the total newbie who has not

00:19:28 --> 00:19:33
coded before in not in any other

00:19:31 --> 00:19:37
language

00:19:32 --> 00:19:40
uh a whole bunch of Concepts in

00:19:36 --> 00:19:41
programming are very alien or

00:19:39 --> 00:19:45
sort of

00:19:40 --> 00:19:48
new and and maybe very interesting but

00:19:44 --> 00:19:49
also distracting and confusing and there

00:19:47 --> 00:19:52
are many different things you have to

00:19:48 --> 00:19:54
learn you have to sort of

00:19:51 --> 00:19:57
in a typical

00:19:53 --> 00:20:00
13-week programming course you have to

00:19:56 --> 00:20:03
if it's like really

00:19:59 --> 00:20:05
learning to program from scratch you

00:20:02 --> 00:20:07
have to cover algorithms you have to

00:20:04 --> 00:20:10
cover data structures you have to cover

00:20:06 --> 00:20:15
syntax you have to cover variables Loops

00:20:09 --> 00:20:18
functions recursion classes

00:20:14 --> 00:20:21
Expressions operators there are so many

00:20:17 --> 00:20:25
Concepts if you you sort of

00:20:20 --> 00:20:28
if you can spend a little less time

00:20:24 --> 00:20:32
having to worry about the syntax

00:20:27 --> 00:20:37
the the classic example was often

00:20:31 --> 00:20:39
oh the compiler complains every time I

00:20:36 --> 00:20:42
put a semicolon in the wrong place or I

00:20:38 --> 00:20:45
forget to put a semicolon

00:20:41 --> 00:20:48
uh python doesn't have semicolons in

00:20:44 --> 00:20:49
that sense so you can't forget them and

00:20:47 --> 00:20:53
you're also not

00:20:48 --> 00:20:55
sort of misled into putting them where

00:20:52 --> 00:20:57
they don't belong because you don't

00:20:54 --> 00:21:00
learn about them in the first place

00:20:56 --> 00:21:03
the flip side of that is forcing the

00:20:59 --> 00:21:07
strictness onto the beginning programmer

00:21:02 --> 00:21:09
to teach them that programming is a

00:21:06 --> 00:21:11
values attention to details you don't

00:21:08 --> 00:21:12
get to just write the way you write in

00:21:10 --> 00:21:15
English they have other details that

00:21:11 --> 00:21:17
hey have to pay attention to so I think

00:21:14 --> 00:21:19
they'll they'll still get the message

00:21:16 --> 00:21:20
about uh

00:21:18 --> 00:21:22
paying attention to details the

00:21:19 --> 00:21:25
interesting design choice so I still

00:21:21 --> 00:21:27
program quite a bit in PHP and I'm sure

00:21:24 --> 00:21:30
there's other languages like this but

00:21:26 --> 00:21:33
he dollar sign before a variable

00:21:29 --> 00:21:36
that was always an annoying thing for me

00:21:32 --> 00:21:38
it didn't quite fit into my

00:21:35 --> 00:21:40
understanding of why this is good for a

00:21:37 --> 00:21:42
programming language I'm not sure if you

00:21:39 --> 00:21:46
ever thought about that one

00:21:41 --> 00:21:48
that is a historical thing there is a

00:21:45 --> 00:21:53
whole lineage of programming languages

00:21:47 --> 00:21:55
PHP is one Pearl was one

00:21:52 --> 00:21:58
on the union shell

00:21:54 --> 00:22:00
uh is one of the oldest or or all the

00:21:57 --> 00:22:04
different shells

00:21:59 --> 00:22:07
the dollar was invented for that purpose

00:22:03 --> 00:22:09
because a very earliest shells had a

00:22:06 --> 00:22:11
notion of scripting but they did not

00:22:08 --> 00:22:12
have a notion of parameterizing the

00:22:10 --> 00:22:15
scripting

00:22:11 --> 00:22:17
right and so a script is just a few

00:22:15 --> 00:22:20
lines of text

00:22:16 --> 00:22:23
where each line of text is a command

00:22:19 --> 00:22:26
that is read by a very primitive command

00:22:22 --> 00:22:29
processor that then sort of takes the

00:22:25 --> 00:22:32
first word on the line as the name of a

00:22:28 --> 00:22:36
program and passes all the all the rest

00:22:31 --> 00:22:38
of the line as text into the program for

00:22:35 --> 00:22:40
the program to figure out what to do

00:22:37 --> 00:22:43
with as arguments

00:22:39 --> 00:22:46
and so by the time scripting was

00:22:42 --> 00:22:47
lightly more mature than the very first

00:22:45 --> 00:22:50
script

00:22:46 --> 00:22:55
here was a convention that just like

00:22:49 --> 00:22:58
the first word of line is uh the name of

00:22:54 --> 00:23:01
the program the following words

00:22:57 --> 00:23:03
uh could be names of files

00:23:00 --> 00:23:06
input.text

00:23:02 --> 00:23:10
output.html things like that

00:23:06 --> 00:23:12
he next thing that happens is oh it

00:23:09 --> 00:23:14
would actually be really nice if we

00:23:11 --> 00:23:17
could have variables and especially

00:23:13 --> 00:23:20
parameters for scripts parameters are

00:23:16 --> 00:23:23
usually what starts this process

00:23:19 --> 00:23:24
but now you have a problem because you

00:23:22 --> 00:23:28
can't just

00:23:23 --> 00:23:32
say the parameters are x y and z

00:23:27 --> 00:23:34
and so now we we call say let's say x is

00:23:31 --> 00:23:37
the input file and Y is the output file

00:23:33 --> 00:23:38
and let's forget about Z for now I have

00:23:36 --> 00:23:41
my program

00:23:37 --> 00:23:42
and I write program X Y well that

00:23:40 --> 00:23:44
already has a meaning because that

00:23:41 --> 00:23:48
presumably means

00:23:43 --> 00:23:50
X itself is the file

00:23:47 --> 00:23:52
it's a file name it's not a variable

00:23:49 --> 00:23:54
name

00:23:51 --> 00:23:57
uh and so

00:23:54 --> 00:23:59
the inventors of of things like the

00:23:56 --> 00:24:03
unique shell and I'm sure job command

00:23:58 --> 00:24:04
language in at IBM before that

00:24:02 --> 00:24:06
uh

00:24:03 --> 00:24:09
ad to use

00:24:05 --> 00:24:11
something that made it clear to the

00:24:08 --> 00:24:14
script processor

00:24:10 --> 00:24:16
here is an X that is not actually the

00:24:13 --> 00:24:19
name of a file which you just pass

00:24:15 --> 00:24:22
through to the to the program you're

00:24:18 --> 00:24:25
running here is an X that is the name of

00:24:21 --> 00:24:28
a variable yeah and

00:24:24 --> 00:24:31
when you're writing a script processor

00:24:27 --> 00:24:34
you try to keep it as simple as possible

00:24:30 --> 00:24:36
because at as certainly in the 50s and

00:24:33 --> 00:24:38
60s

00:24:35 --> 00:24:41
uh the thing that interprets the script

00:24:37 --> 00:24:43
was itself a very had to be a very small

00:24:40 --> 00:24:47
program because it had to fit in a very

00:24:42 --> 00:24:50
small part of memory and so saying oh

00:24:46 --> 00:24:53
just look at each character and if you

00:24:49 --> 00:24:55
see a dollar sign you jump to another

00:24:52 --> 00:24:57
section of the code and then you gobble

00:24:54 --> 00:24:59
up characters or say until the next

00:24:56 --> 00:25:01
space or something and you say that's

00:24:58 --> 00:25:04
the variable name

00:25:00 --> 00:25:07
and so it was was sort of

00:25:03 --> 00:25:10
invented as

00:25:06 --> 00:25:13
a clever way to make parsing of things

00:25:09 --> 00:25:14
that contain but contain both variable

00:25:12 --> 00:25:17
and fixed parts

00:25:13 --> 00:25:21
very easy in a very simple script

00:25:16 --> 00:25:23
processor it also helps even then it

00:25:20 --> 00:25:26
also helps the human

00:25:22 --> 00:25:28
author and the human reader of the

00:25:25 --> 00:25:31
script

00:25:27 --> 00:25:33
o quickly see oh

00:25:30 --> 00:25:36
20 lines down in the script I see a

00:25:32 --> 00:25:38
reference to x y z Oh it has a dollar in

00:25:35 --> 00:25:40
front of it so now we know that x y z

00:25:37 --> 00:25:42
must be one of the parameters of the

00:25:39 --> 00:25:44
script well this is fascinating several

00:25:41 --> 00:25:47
things to say which is

00:25:43 --> 00:25:49
the leftovers from the simple script

00:25:46 --> 00:25:52
processor languages are now in code

00:25:48 --> 00:25:54
bases like behind Facebook or behind

00:25:51 --> 00:25:56
most of the back end I think php's

00:25:53 --> 00:25:58
probably still runs most of the back end

00:25:55 --> 00:26:00
of the internet oh yeah yeah I think

00:25:57 --> 00:26:02
there's a lot of it in Wikipedia too for

00:25:59 --> 00:26:04
example yeah it's funny that those

00:26:01 --> 00:26:06
decisions are not funny it's fascinating

00:26:03 --> 00:26:07
that those decisions permeate Through

00:26:05 --> 00:26:10
Time

00:26:06 --> 00:26:13
just like biological systems right

00:26:09 --> 00:26:15
I mean that the sort of the inner

00:26:12 --> 00:26:17
workings of DNA

00:26:14 --> 00:26:20
have been stable for well I don't know

00:26:16 --> 00:26:23
how long it was like 300 million years

00:26:19 --> 00:26:25
half a billion years yeah and there

00:26:22 --> 00:26:26
are all sorts of weird quirks

00:26:24 --> 00:26:28
there

00:26:25 --> 00:26:30
that don't make a lot of sense if you

00:26:27 --> 00:26:32
were to design

00:26:29 --> 00:26:35
a system like self-replicating molecules

00:26:31 --> 00:26:38
from scratch but that system has a lot

00:26:34 --> 00:26:42
of interesting resilience it has

00:26:37 --> 00:26:44
redundancy that results like it messes

00:26:41 --> 00:26:46
up in interesting ways that still is

00:26:43 --> 00:26:49
resilient when you look at the system

00:26:45 --> 00:26:51
level of the organism code doesn't

00:26:48 --> 00:26:54
necessarily have that a program a

00:26:51 --> 00:26:56
computer programming code you'd be

00:26:53 --> 00:26:59
surprised

00:26:55 --> 00:27:02
how much resilience modern code has

00:26:58 --> 00:27:04
I mean if you if you look at the number

00:27:01 --> 00:27:08
of bugs per line of code

00:27:03 --> 00:27:11
ven in in very well tested

00:27:07 --> 00:27:15
code that in practice works just fine

00:27:11 --> 00:27:16
there are actually lots of things that

00:27:14 --> 00:27:19
don't work fine

00:27:15 --> 00:27:22
and there are error correcting or

00:27:18 --> 00:27:25
self-correcting mechanisms at many

00:27:21 --> 00:27:28
levels including probably the user of

00:27:24 --> 00:27:30
the code well in the end the user who

00:27:27 --> 00:27:35
sort of is told well you got to reboot

00:27:29 --> 00:27:39
your your PC is part of that system and

00:27:34 --> 00:27:42
a slightly uh less drastic thing is

00:27:38 --> 00:27:45
reload the page which we all know how to

00:27:41 --> 00:27:47
do without thinking about it when

00:27:44 --> 00:27:49
something weird happens you you try to

00:27:46 --> 00:27:51
reload a few times before you say oh

00:27:48 --> 00:27:53
there's something really weird okay or

00:27:50 --> 00:27:55
try to click the button again if the

00:27:52 --> 00:27:57
first time didn't work

00:27:54 --> 00:27:59
well yeah that we should all have

00:27:56 --> 00:28:01
learned not to do that because that's

00:27:58 --> 00:28:04
probably just gonna turn the light back

00:28:00 --> 00:28:08
off yeah true so do it three times

00:28:03 --> 00:28:10
that's the that's the right lesson so uh

00:28:07 --> 00:28:13
and I wonder how many people actually

00:28:09 --> 00:28:18
like the dollar sign like you said it is

00:28:12 --> 00:28:20
documentation so to me it's whatever the

00:28:17 --> 00:28:23
opposite of syntactic sugar is syntactic

00:28:19 --> 00:28:25
poison to me it is such a pain in the

00:28:22 --> 00:28:27
ass that I have to type in a dollar shot

00:28:24 --> 00:28:31
also super error prone

00:28:26 --> 00:28:33
so it's not self-documenting it's it's

00:28:30 --> 00:28:35
like a bug generating thing it is a kind

00:28:32 --> 00:28:37
of documentation that's the pro and the

00:28:34 --> 00:28:40
con is it's a source of a lot of bugs

00:28:36 --> 00:28:42
but actually I have to ask you um

00:28:39 --> 00:28:44
this is a really interesting idea of

00:28:41 --> 00:28:47
bugs per line of code

00:28:43 --> 00:28:48
if you look at all the computer systems

00:28:46 --> 00:28:51
out there from the code that runs

00:28:47 --> 00:28:53
nuclear weapons to the code that runs

00:28:51 --> 00:28:56
all the amazing companies that you've

00:28:52 --> 00:28:59
been involved with and not the code that

00:28:55 --> 00:29:02
runs Twitter and Facebook and Dropbox

00:28:58 --> 00:29:02
and Google and Microsoft Windows and so

00:29:01 --> 00:29:06
n

00:29:01 --> 00:29:09
and we like laid out

00:29:05 --> 00:29:11
wouldn't that be a cool like table bugs

00:29:08 --> 00:29:13
per line of code and what would that

00:29:10 --> 00:29:16
let's let's put like actual companies

00:29:12 --> 00:29:17
aside do you think we'd be surprised by

00:29:15 --> 00:29:19
the number we see there for all these

00:29:16 --> 00:29:22
companies

00:29:18 --> 00:29:25
that depends on whether you've ever read

00:29:21 --> 00:29:27
about research that's been done in this

00:29:24 --> 00:29:29
area before

00:29:26 --> 00:29:31
and

00:29:28 --> 00:29:32
I didn't know the the re the the last

00:29:30 --> 00:29:34
ime I

00:29:31 --> 00:29:36
saw some research like that that was

00:29:33 --> 00:29:41
probably in the 90s and the research

00:29:35 --> 00:29:45
might have been done in the 80s but the

00:29:40 --> 00:29:47
conclusion was across a wide range

00:29:44 --> 00:29:48
of different software different

00:29:46 --> 00:29:51
languages

00:29:48 --> 00:29:54
different companies

00:29:50 --> 00:29:57
different development styles

00:29:53 --> 00:30:00
the number of bugs is always

00:29:56 --> 00:30:03
I think it's in the order of about one

00:29:59 --> 00:30:07
bug per thousand lines in sort of

00:30:02 --> 00:30:09
mature software that that is considered

00:30:06 --> 00:30:11
interesting as good as it gets can I

00:30:08 --> 00:30:14
give you some facts here there's a lot

00:30:10 --> 00:30:17
of good papers so you said mature

00:30:13 --> 00:30:20
software right so here's uh

00:30:16 --> 00:30:22
a report from a uh like programming

00:30:19 --> 00:30:25
analytics company

00:30:21 --> 00:30:27
now this is from a developer perspective

00:30:24 --> 00:30:30
let me just say what it says because

00:30:26 --> 00:30:32
this is very weird and surprising on

00:30:29 --> 00:30:35
average a developer creates 70 bugs per

00:30:31 --> 00:30:37
1000 lines of code

00:30:34 --> 00:30:40
15 bugs per 1000 lines of code find

00:30:36 --> 00:30:42
their way to the customers

00:30:39 --> 00:30:45
but this is in the software they've oh I

00:30:41 --> 00:30:48
was I was wrong by an order okay there

00:30:44 --> 00:30:50
fixing a bug takes 30 times longer than

00:30:47 --> 00:30:53
writing a line of code

00:30:49 --> 00:30:56
that I can believe yeah 75 of a

00:30:52 --> 00:30:58
developers time is spent on debugging

00:30:55 --> 00:31:01
um that's for an average developer that

00:30:57 --> 00:31:05
hey Analyze This 15. argue

00:31:00 --> 00:31:08
1500 hours a year in us alone

00:31:04 --> 00:31:12
113 billion dollars to spend annually on

00:31:07 --> 00:31:14
identifying and fixing bugs

00:31:11 --> 00:31:16
imagine this is marketing literature for

00:31:13 --> 00:31:20
someone who claims to have a golden

00:31:15 --> 00:31:22
bullet or a silver bullet that makes all

00:31:19 --> 00:31:26
that investment in fixing bugs go away

00:31:21 --> 00:31:28
but that that is usually yeah not going

00:31:25 --> 00:31:30
to yeah that's not gonna happen well

00:31:27 --> 00:31:32
they're uh I mean they're referencing a

00:31:29 --> 00:31:35
lot of stuff of course but it is a page

00:31:31 --> 00:31:38
uh that is you know there's a contact us

00:31:34 --> 00:31:40
button at the bottom presumably if you

00:31:37 --> 00:31:42
just spend a little bit less than 100

00:31:39 --> 00:31:44
billion dollars we're willing to solve

00:31:41 --> 00:31:47
the problem for you

00:31:43 --> 00:31:48
right and there's also a report on stock

00:31:46 --> 00:31:50
exchanges stack overflow on the exact

00:31:48 --> 00:31:53
same topic but when I open it up at the

00:31:49 --> 00:31:55
moment the page says stack Overflow is

00:31:52 --> 00:31:58
currently offline for maintenance oh

00:31:54 --> 00:32:00
it's ironic yes uh by the way their

00:31:57 --> 00:32:03
error page is awesome anyway

00:31:59 --> 00:32:06
I mean can you believe that number of

00:32:02 --> 00:32:09
bugs oh absolutely isn't that scary that

00:32:05 --> 00:32:11
70 bucks per 1000 lines of code so even

00:32:08 --> 00:32:14
10 bucks per thousand lives well that's

00:32:10 --> 00:32:16
about one bug after every 15 lines and

00:32:13 --> 00:32:19
that's when you're first typing it in

00:32:15 --> 00:32:21
yeah from a developer but like how many

00:32:18 --> 00:32:23
bugs are going to be found

00:32:20 --> 00:32:26
if you're if you're typing well the

00:32:22 --> 00:32:29
development process is extremely

00:32:25 --> 00:32:32
iterative yeah typically you don't make

00:32:28 --> 00:32:35
a plan for what software you're going to

00:32:31 --> 00:32:37
release a year from now yeah uh and work

00:32:34 --> 00:32:41
out all the details because actually all

00:32:36 --> 00:32:44
the details uh themselves consist

00:32:40 --> 00:32:46
hey're sort of compose a program

00:32:43 --> 00:32:49
and that's that

00:32:45 --> 00:32:52
being a program all your plans will have

00:32:48 --> 00:32:57
bugs in them too and inaccuracies

00:32:51 --> 00:32:59
uh but what what you actually do is

00:32:56 --> 00:33:03
you do a bunch of typing and I'm I'm

00:32:58 --> 00:33:06
actually really I'm a really bad typist

00:33:02 --> 00:33:07
hat just I've never learned to type

00:33:05 --> 00:33:09
with 10 fingers

00:33:06 --> 00:33:12
how many do you use

00:33:08 --> 00:33:13
well I could use all 10 of them but not

00:33:11 --> 00:33:15
very well

00:33:12 --> 00:33:18
but I I never I never took a talking

00:33:14 --> 00:33:20
class and I never sort of corrected that

00:33:17 --> 00:33:24
so the first time I I seriously learned

00:33:19 --> 00:33:25
I had to learn the layout of a qwerty

00:33:23 --> 00:33:28
keyboard

00:33:24 --> 00:33:30
was actually in college in my first

00:33:27 --> 00:33:32
programming classes where we used Punch

00:33:29 --> 00:33:34
Cards

00:33:31 --> 00:33:37
and so

00:33:33 --> 00:33:39
with my two fingers I sort of pecked out

00:33:36 --> 00:33:41
my code

00:33:38 --> 00:33:44
watch anyone

00:33:40 --> 00:33:47
give you a little coding demonstration

00:33:43 --> 00:33:49
they'll have to produce like four lines

00:33:46 --> 00:33:52
of code

00:33:48 --> 00:33:55
and now see how many times they use the

00:33:51 --> 00:33:56
backspace key yeah because they made a

00:33:54 --> 00:33:59
mistake and and

00:33:55 --> 00:34:02
some people especially when when

00:33:58 --> 00:34:02
someone else is looking

00:34:01 --> 00:34:09
will will backspace over 20 30 40

00:34:05 --> 00:34:11
characters to fix a typo earlier in a

00:34:08 --> 00:34:13
line if you're

00:34:10 --> 00:34:16
slightly more experienced of

00:34:12 --> 00:34:17
course you use your arrow buttons to go

00:34:15 --> 00:34:21
r your mouse to but the mouse is

00:34:16 --> 00:34:24
usually slower than uh than the arrows

00:34:20 --> 00:34:28
but a lot of people when they type a 20

00:34:24 --> 00:34:30
character word which is not unusual and

00:34:27 --> 00:34:32
they realize they made us made a mistake

00:34:29 --> 00:34:34
at the start of the word the backspace

00:34:31 --> 00:34:36
over the whole thing

00:34:33 --> 00:34:38
and then retype it and sometimes it

00:34:35 --> 00:34:39
akes three four times to get it right

00:34:37 --> 00:34:42
so

00:34:38 --> 00:34:45
I don't know what your definition of bug

00:34:41 --> 00:34:48
is arguably mistyping a word and then

00:34:44 --> 00:34:51
correcting it immediately is not a bug

00:34:47 --> 00:34:55
on the other hand you you already

00:34:50 --> 00:34:57
do sort of lose time and every once in a

00:34:54 --> 00:35:00
while there's sort of a typo that you

00:34:56 --> 00:35:02
don't get in that process

00:34:59 --> 00:35:04
and now you've you've typed like 10

00:35:01 --> 00:35:06
lines of code

00:35:03 --> 00:35:10
uh and some were in the middle of it you

00:35:05 --> 00:35:13
don't know where yet is a typo or maybe

00:35:09 --> 00:35:14
a thinko where you you forgot that you

00:35:12 --> 00:35:16
had to initialize a variable or

00:35:13 --> 00:35:18
something but those are two different

00:35:15 --> 00:35:20
hings and I would say yes you have to

00:35:17 --> 00:35:23
actually run the code to discover that

00:35:19 --> 00:35:24
ypo but forgetting to initialize a

00:35:22 --> 00:35:27
variable is a fundamentally different

00:35:23 --> 00:35:29
hing because that thing can go

00:35:26 --> 00:35:32
undiscovered uh that depends on the

00:35:28 --> 00:35:34
language in Python it will not right in

00:35:31 --> 00:35:36
sort of modern compilers are usually

00:35:33 --> 00:35:39
pretty good at catching that even

00:35:35 --> 00:35:41
foresee so for that specific thing

00:35:38 --> 00:35:44
but actually deeper

00:35:40 --> 00:35:46
it might there might be another variable

00:35:43 --> 00:35:51
that has initialized but logically

00:35:45 --> 00:35:53
speaking the one you meant related yep

00:35:50 --> 00:35:54
it's like name the same but it's a

00:35:52 --> 00:35:57
different thing and you forgot to

00:35:53 --> 00:36:00
initialize uh whatever some counter or

00:35:56 --> 00:36:03
some some basic variable they're using I

00:35:59 --> 00:36:04
can tell that you've coded yes by the

00:36:02 --> 00:36:06
way I should mention that I use the

00:36:03 --> 00:36:08
Kinesis keyboard

00:36:05 --> 00:36:12
which has the backspace under the thumb

00:36:07 --> 00:36:15
and one of the biggest reasons I use

00:36:11 --> 00:36:17
that keyboard is because you realize in

00:36:14 --> 00:36:19
order to use the backspace on a usual

00:36:16 --> 00:36:20
keyboard you have to stretch your pinky

00:36:18 --> 00:36:24
out

00:36:19 --> 00:36:27
and like the the for most normal

00:36:23 --> 00:36:29
keyboards the Backspaces under the pinky

00:36:26 --> 00:36:33
and so I don't know if people realize

00:36:28 --> 00:36:35
the pain they go through in their life

00:36:32 --> 00:36:37
because of the backspace keep being so

00:36:34 --> 00:36:39
far away so with the Kinesis it's right

00:36:36 --> 00:36:40
under the thumb so you don't have to

00:36:38 --> 00:36:42
actually move your hands the backspace

00:36:39 --> 00:36:46
and the delivery what do you do if

00:36:41 --> 00:36:48
you're ever not with your own keyboard

00:36:45 --> 00:36:51
and you have to use someone else's PC

00:36:47 --> 00:36:54
keyboard that has a standard layout so

00:36:50 --> 00:36:55
first of all it turns out that you can

00:36:53 --> 00:36:57
actually go your whole life always

00:36:54 --> 00:36:59
having the keyboard

00:36:56 --> 00:37:02
with you so this well except for that

00:36:58 --> 00:37:03
little tablet that you're using so

00:37:01 --> 00:37:05
we're note taking right now right uh

00:37:03 --> 00:37:07
yeah so it's very inefficient

00:37:04 --> 00:37:10
note-taking but I'm not I'm just looking

00:37:06 --> 00:37:13
stuff up but in most cases I would be

00:37:09 --> 00:37:15
actually using the keyboard here right

00:37:12 --> 00:37:17
now I just don't anticipate you have to

00:37:14 --> 00:37:19
calculate how much typing do you

00:37:16 --> 00:37:21
anticipate if I anticipate quite a bit

00:37:18 --> 00:37:24
hen I'll just I have a keyboard

00:37:20 --> 00:37:26
and the same same with I mean

00:37:23 --> 00:37:29
the embarrassing

00:37:25 --> 00:37:32
of accepted being the weirdo that I am

00:37:28 --> 00:37:35
but you know when I go on an airplane

00:37:31 --> 00:37:38
and I anticipate to do programming or a

00:37:34 --> 00:37:41
lot of typing I will have a laptop that

00:37:37 --> 00:37:43
will put pull out a Kinesis keyboard in

00:37:40 --> 00:37:45
addition to the laptop and it's just who

00:37:42 --> 00:37:46
I am you have to you have to accept who

00:37:44 --> 00:37:49
you are

00:37:45 --> 00:37:50
um but also it's a you know for a lot of

00:37:48 --> 00:37:52
people

00:37:49 --> 00:37:55
for me certainly there's a comfort space

00:37:51 --> 00:37:59
where there's a certain kind of setups

00:37:54 --> 00:38:01
that are maximized productivity and

00:37:58 --> 00:38:03
um it's like some people have a warm

00:38:00 --> 00:38:05
blanket that they like

00:38:02 --> 00:38:08
when they watch a movie I like the

00:38:04 --> 00:38:12
Kinesis keyboard takes me to uh a place

00:38:07 --> 00:38:14
of focus and I still mostly I I'm trying

00:38:11 --> 00:38:17
to make sure I use the state-of-the-art

00:38:13 --> 00:38:19
IDS for everything but my comfort place

00:38:16 --> 00:38:21
just like the Kinesis keyboard is still

00:38:18 --> 00:38:23
emacs

00:38:20 --> 00:38:27
o

00:38:22 --> 00:38:29
I still use I still I mean that's one of

00:38:27 --> 00:38:31
some of the debates I have with myself

00:38:28 --> 00:38:33
about everything from a technology

00:38:30 --> 00:38:35
perspective

00:38:32 --> 00:38:38
is how much to hold on to the tools

00:38:34 --> 00:38:41
you're comfortable with versus how much

00:38:37 --> 00:38:43
to invest in using modern tools and the

00:38:40 --> 00:38:46
signal that the communities provide you

00:38:42 --> 00:38:48
with is the noisy one because a lot of

00:38:45 --> 00:38:50
people year to year get excited about

00:38:47 --> 00:38:53
new tools and you have to make a

00:38:49 --> 00:38:55
prediction are these tools defining a

00:38:52 --> 00:38:57
new generation or something that will

00:38:54 --> 00:39:00
transform programming or is this just a

00:38:56 --> 00:39:03
fad that will pass certainly with

00:38:59 --> 00:39:06
JavaScript Frameworks and front and the

00:39:03 --> 00:39:08
back end of the web there's a lot of

00:39:05 --> 00:39:11
different styles that came and went I

00:39:07 --> 00:39:15
remember learning um what was it called

00:39:10 --> 00:39:16
the action script I remember for flash

00:39:14 --> 00:39:19
um you know learning how to program in

00:39:15 --> 00:39:21
Flash uh learning how to design doing

00:39:18 --> 00:39:23
raphic animation all that kind of stuff

00:39:20 --> 00:39:25
in Flash same with Java applets I

00:39:22 --> 00:39:27
remember creating quite a lot of java

00:39:24 --> 00:39:30
pplets thinking that this potentially

00:39:26 --> 00:39:32
defines the future of the web and it did

00:39:29 --> 00:39:36
not well you know in most cases like

00:39:31 --> 00:39:38
that the particular technology

00:39:35 --> 00:39:40
eventually gets replaced

00:39:37 --> 00:39:44
but

00:39:39 --> 00:39:48
many of the concepts that the technology

00:39:43 --> 00:39:51
introduced or made accessible first

00:39:48 --> 00:39:54
are preserved of course

00:39:50 --> 00:39:56
because yeah we're not using Java

00:39:53 --> 00:39:58
pplets anymore but the notion of

00:39:55 --> 00:40:01
reactive web pages

00:39:57 --> 00:40:05
that sort of contain little bits of code

00:40:00 --> 00:40:08
that respond directly to

00:40:04 --> 00:40:10
something you do like pressing a button

00:40:07 --> 00:40:13
or a link or hovering even

00:40:09 --> 00:40:17
uh is has certainly not gone away

00:40:12 --> 00:40:19
and that those animations that were made

00:40:16 --> 00:40:21
painfully

00:40:18 --> 00:40:24
complicated with flesh

00:40:20 --> 00:40:26
I mean flash was an innovation when it

00:40:23 --> 00:40:29
first came up

00:40:25 --> 00:40:31
and when it was replaced by JavaScript

00:40:28 --> 00:40:32
equivalence

00:40:30 --> 00:40:35
stuff

00:40:31 --> 00:40:37
it was a somewhat better way to do

00:40:34 --> 00:40:40
animations but those animations are

00:40:36 --> 00:40:42
still there not all of them

00:40:39 --> 00:40:46
but but sort of

00:40:41 --> 00:40:48
again there is an evolution and often so

00:40:45 --> 00:40:50
ften with technology

00:40:47 --> 00:40:53
the the sort of the technology that was

00:40:49 --> 00:40:58
eventually thrown away or replaced

00:40:52 --> 00:41:00
was still essential to to sort of

00:40:57 --> 00:41:02
get started there wouldn't be jet planes

00:40:59 --> 00:41:06
without propeller planes

00:41:01 --> 00:41:10
I bet you but from a user perspective

00:41:05 --> 00:41:14
yes from the feature set yes but I from

00:41:09 --> 00:41:16
a programmer perspective it feels like

00:41:13 --> 00:41:19
all the time I've spent

00:41:15 --> 00:41:22
with actionscript all the time I spent

00:41:18 --> 00:41:24
with Java on the applet side for the GUI

00:41:21 --> 00:41:26
development I well no Java I have to

00:41:23 --> 00:41:28
push back that was useful that because

00:41:25 --> 00:41:30
it transfers but the Flash doesn't

00:41:27 --> 00:41:34
ransfer so some things you learn and

00:41:29 --> 00:41:36
invest time in what yeah what what you

00:41:33 --> 00:41:39
learned this the skill you picked up

00:41:35 --> 00:41:43
learning action script yeah

00:41:38 --> 00:41:46
was sort of it was perhaps

00:41:42 --> 00:41:49
a super valuable skill at the time you

00:41:45 --> 00:41:54
picked it up if if you if you learned

00:41:48 --> 00:41:54
action script early enough but

00:41:53 --> 00:41:59
hat skill is no longer

00:41:56 --> 00:42:00
in demand well that's the calculation

00:41:58 --> 00:42:02
you have to make when you're learning

00:42:00 --> 00:42:05
new things like today people start

00:42:01 --> 00:42:08
learning programming today I'm trying to

00:42:04 --> 00:42:10
see what are the new languages to try

00:42:07 --> 00:42:13
what are the new uh systems to try that

00:42:09 --> 00:42:16
what are the new IDs to try to to keep

00:42:12 --> 00:42:19
improving because that's why we

00:42:15 --> 00:42:22
start when we're young right

00:42:18 --> 00:42:24
but that seems very true to me that that

00:42:21 --> 00:42:26
when you're young you have your whole

00:42:23 --> 00:42:29
life ahead of you and your you're

00:42:25 --> 00:42:31
allowed to make mistakes in fact you

00:42:28 --> 00:42:35
should you should feel encouraged to to

00:42:30 --> 00:42:37
do a bit of stupid stuff yeah try not to

00:42:34 --> 00:42:40
get yourself killed or seriously maimed

00:42:36 --> 00:42:43
but try stuff that

00:42:39 --> 00:42:45
deviate from from what everybody else is

00:42:42 --> 00:42:48
doing

00:42:44 --> 00:42:50
and like nine out of ten times you'll

00:42:47 --> 00:42:53
just learn why everybody else is not

00:42:49 --> 00:42:55
doing that or why everybody else is

00:42:52 --> 00:42:58
doing it some other way and one out of

00:42:54 --> 00:43:01
ten times you sort of

00:42:57 --> 00:43:03
you discover something that's better or

00:43:00 --> 00:43:05
that's that somehow works I mean there

00:43:02 --> 00:43:06
are all sorts of crazy things that were

00:43:04 --> 00:43:10
invented

00:43:05 --> 00:43:11
uh by accident by people trying trying

00:43:09 --> 00:43:14
stuff together

00:43:10 --> 00:43:16
that's great advice to try random stuff

00:43:13 --> 00:43:18
make a lot of mistakes once you're

00:43:15 --> 00:43:21
married with kids you're probably going

00:43:17 --> 00:43:22
to uh be a little more risk-averse

00:43:20 --> 00:43:25
because now there's more at stake and

00:43:21 --> 00:43:27
you've already hopefully had some time

00:43:24 --> 00:43:30
where you where you were experimenting

00:43:26 --> 00:43:31
with crazy shit I like how marriage and

00:43:29 --> 00:43:33
kids solidifies their choice of

00:43:30 --> 00:43:36
programming language how does that the

00:43:32 --> 00:43:38
robber Frost poem with the The Road Less

00:43:35 --> 00:43:41
taken which I think is misinterpreted by

00:43:37 --> 00:43:43
most people but anyway I I feel like the

00:43:40 --> 00:43:46
choices you make early on

00:43:42 --> 00:43:47
especially if you go all in they're

00:43:45 --> 00:43:50
going to define the rest of your life's

00:43:46 --> 00:43:52
trajectory in a way that

00:43:49 --> 00:43:56
like you basically are picking a camp so

00:43:51 --> 00:43:59
uh you know there's if you invest a lot

00:43:55 --> 00:44:01
in PHP if you invest a lot in.net if you

00:43:58 --> 00:44:05
invest a lot in JavaScript

00:44:00 --> 00:44:08
you're going to stick there

00:44:04 --> 00:44:13
you that's that's your life Journey

00:44:07 --> 00:44:18
only as far as that technology remains

00:44:12 --> 00:44:21
relevant yes yes I mean if if at age 16

00:44:17 --> 00:44:25
you learn coding in C

00:44:20 --> 00:44:28
and by the time you're 26 C is like a

00:44:24 --> 00:44:28
dead language

00:44:28 --> 00:44:35
then there's still time to switch

00:44:31 --> 00:44:38
there's probably some kind of Survivor

00:44:34 --> 00:44:41
bias or whatever it's called in in sort

00:44:37 --> 00:44:43
of your observation that that you pick a

00:44:40 --> 00:44:46
camp because there are many different

00:44:42 --> 00:44:50
camps to pick and if you pick dot net

00:44:45 --> 00:44:53
hen then you can Coast for the rest of

00:44:49 --> 00:44:56
your life because that technology is now

00:44:52 --> 00:44:58
so ubiquitous of course that it's even

00:44:55 --> 00:45:00
if it's if it's bound to die it's going

00:44:57 --> 00:45:02
to take a very long time well for me

00:45:00 --> 00:45:06
personally

00:45:01 --> 00:45:09
I had a very difficult in my own head

00:45:05 --> 00:45:11
Brave leap that I had to take relevant

00:45:08 --> 00:45:13
o our discussion which is most of my

00:45:10 --> 00:45:18
life I programmed in C and C plus plus

00:45:12 --> 00:45:19
and so uh having that hammer everything

00:45:17 --> 00:45:21
looked like a nail

00:45:18 --> 00:45:23
so I would literally even do scripting

00:45:20 --> 00:45:26
in C plus plus like I would create

00:45:22 --> 00:45:29
programs that do script like things and

00:45:25 --> 00:45:32
uh when I first came to Google and and

00:45:28 --> 00:45:34
before then it became already before

00:45:31 --> 00:45:37
tensorflow before all of that there was

00:45:33 --> 00:45:39
a growing realization that c plus is not

00:45:36 --> 00:45:41
he right tool for machine learning we

00:45:38 --> 00:45:43
could talk about why that is it's

00:45:40 --> 00:45:46
unclear why that is a lot of things

00:45:42 --> 00:45:48
has to do with community and culture and

00:45:45 --> 00:45:50
how it emerges and stuff like that but

00:45:47 --> 00:45:53
for me they decided to take the leap to

00:45:49 --> 00:45:57
python like all out basically switched

00:45:52 --> 00:45:59
completely from C plus plus except for a

00:45:56 --> 00:46:01
highly performant robotics applications

00:45:58 --> 00:46:02
there were still uh

00:46:00 --> 00:46:05
there's still a culture of C plus plus

00:46:01 --> 00:46:07
in in the space of robotics

00:46:04 --> 00:46:10
that was a big leap

00:46:06 --> 00:46:13
like I had to you know like like people

00:46:09 --> 00:46:15
have like existential crises or midlife

00:46:12 --> 00:46:17
crises or whatever you have to realize

00:46:14 --> 00:46:20
almost like walking away from uh from a

00:46:16 --> 00:46:22
person you love

00:46:19 --> 00:46:24
um because I was sure that c plus would

00:46:21 --> 00:46:25
have to be a lifelong companion for a

00:46:23 --> 00:46:27
lot of problems I would want to solve C

00:46:24 --> 00:46:29
plus would be there and it was a

00:46:26 --> 00:46:31
question to say well that might not be

00:46:28 --> 00:46:33
the case because sibo spots is still one

00:46:30 --> 00:46:35
of the most popular languages in the

00:46:32 --> 00:46:38
world one of the most used one of the

00:46:34 --> 00:46:41
most dependent on it's also still

00:46:37 --> 00:46:46
evolving quite a bit I mean

00:46:40 --> 00:46:48
that that is not a sort of a fossilizing

00:46:45 --> 00:46:51
community yes they they are doing great

00:46:48 --> 00:46:53
Innovative work actually a lot but yet

00:46:50 --> 00:46:55
he sort of their Innovations are hard

00:46:52 --> 00:46:58
to follow if you're not already a

00:46:54 --> 00:47:00
hardcore C plus plus user well this was

00:46:57 --> 00:47:02
the thing it pulls you in it's a rabbit

00:46:59 --> 00:47:04
hole I was a hardcore the all meta

00:47:01 --> 00:47:07
programming template programming like I

00:47:03 --> 00:47:10
would start using the modern C plus

00:47:06 --> 00:47:12
as it developed right not just the

00:47:09 --> 00:47:14
shared pointer and the

00:47:11 --> 00:47:16
garbage collection that makes it easier

00:47:13 --> 00:47:18
for you to work with some of the flaws

00:47:15 --> 00:47:21
but the detail like The Meta programming

00:47:17 --> 00:47:23
the the crazy stuff that's that's coming

00:47:20 --> 00:47:26
out there but then you have to just

00:47:22 --> 00:47:30
empirically look and step back and say

00:47:25 --> 00:47:34
what language am I more productive in

00:47:29 --> 00:47:35
sorry to say what language do I enjoy my

00:47:33 --> 00:47:38
life with more

00:47:34 --> 00:47:40
and uh readability and able to think

00:47:37 --> 00:47:42
through and all that kind of stuff that

00:47:39 --> 00:47:44
hose questions are harder to ask when

00:47:41 --> 00:47:46
you already have

00:47:43 --> 00:47:50
a loved one which in my case was C plus

00:47:45 --> 00:47:52
and then there's python uh like

00:47:49 --> 00:47:54
that Meme was is the the grass is

00:47:51 --> 00:47:57
greener on the other side am I just

00:47:53 --> 00:47:59
infatuated with a new fad new cool thing

00:47:56 --> 00:48:01
or is this actually going to make my

00:47:58 --> 00:48:03
life better and I think a lot of people

00:48:00 --> 00:48:05
face that kind of decision it was a

00:48:02 --> 00:48:08
difficult decision for me

00:48:04 --> 00:48:09
um when I made it at this time it's an

00:48:07 --> 00:48:11
obvious switch if you're into machine

00:48:08 --> 00:48:15
learning but at that time it wasn't

00:48:10 --> 00:48:17
quite yet so obvious so it was a risk

00:48:14 --> 00:48:18
and you know you have the same kind of

00:48:16 --> 00:48:20
stuff with um

00:48:17 --> 00:48:21
I still because of my connection to

00:48:19 --> 00:48:24
Wordpress

00:48:20 --> 00:48:27
I still do a lot of back-end programming

00:48:23 --> 00:48:29
in PHP uh

00:48:26 --> 00:48:32
and the question is you know node.js

00:48:28 --> 00:48:34
python do you switch to do you switch

00:48:31 --> 00:48:36
back into any of those

00:48:33 --> 00:48:39
programming there's the case for node.js

00:48:35 --> 00:48:43
for me well more and more and more of

00:48:38 --> 00:48:43
the front end it runs in JavaScript

00:48:42 --> 00:48:47
um and fascinating cool stuff is known

00:48:44 --> 00:48:48
as JavaScript maybe use the same

00:48:46 --> 00:48:49
programming language for the back end as

00:48:47 --> 00:48:52
well

00:48:48 --> 00:48:55
uh the case for python for the back end

00:48:51 --> 00:48:57
is well you're doing so much programming

00:48:54 --> 00:49:00
outside of the web in Python so maybe

00:48:57 --> 00:49:03
use Python for the back end and then the

00:48:59 --> 00:49:05
case for PHP well most of the web still

00:49:02 --> 00:49:07
runs in PHP

00:49:04 --> 00:49:10
you have a lot of experience with PHP

00:49:06 --> 00:49:13
why uh fix something that's not broken

00:49:09 --> 00:49:14
those are my own personal struggles but

00:49:12 --> 00:49:16
I think they reflect the struggles of a

00:49:13 --> 00:49:17
lot of people and with different

00:49:15 --> 00:49:20
programming languages with different

00:49:16 --> 00:49:22
problems they're trying to solve it's a

00:49:19 --> 00:49:25
weird one and there there's not a single

00:49:21 --> 00:49:28
answer right because depending on how

00:49:24 --> 00:49:31
much time you have to learn new stuff

00:49:27 --> 00:49:33
where you are in your life what what

00:49:30 --> 00:49:35
you're currently working on who you want

00:49:32 --> 00:49:38
o work with what communities you like

00:49:34 --> 00:49:41
yeah there's not one right choice

00:49:37 --> 00:49:43
maybe if you if you sort of

00:49:40 --> 00:49:46
if you can look back 20 years you can

00:49:42 --> 00:49:48
say well that whole detour through

00:49:45 --> 00:49:50
action script was a waste of time

00:49:47 --> 00:49:52
but

00:49:49 --> 00:49:55
nobody could know that

00:49:51 --> 00:49:56
so you can you can beat yourself up over

00:49:54 --> 00:49:59
that

00:49:55 --> 00:50:01
uh you just need to accept that not

00:49:58 --> 00:50:05
every choice you make

00:50:00 --> 00:50:09
is going to be perfect maybe sort of

00:50:04 --> 00:50:13
keep Plan B in the back of your mind

00:50:08 --> 00:50:16
uh but don't don't overthink it don't

00:50:12 --> 00:50:19
try to sort of don't don't create

00:50:15 --> 00:50:23
a spreadsheet with like where you're

00:50:18 --> 00:50:26
trying to estimate well if I learn this

00:50:22 --> 00:50:27
language I expect to make x million

00:50:25 --> 00:50:30
dollars in a lifetime and if I learn

00:50:26 --> 00:50:33
that language I expect to make why a

00:50:29 --> 00:50:36
million dollars in a lifetime and which

00:50:32 --> 00:50:38
Which is higher and what which has more

00:50:35 --> 00:50:42
risk and where's the chance that it's

00:50:37 --> 00:50:42
like picking picking a stock

00:50:42 --> 00:50:49
ind of kind of but uh

00:50:46 --> 00:50:52
I think with stocks you can do

00:50:48 --> 00:50:55
diversifying your investment as good

00:50:51 --> 00:50:58
with productivity in life

00:50:54 --> 00:50:59
boy that spreadsheet is possible to

00:50:57 --> 00:51:02
construct

00:50:58 --> 00:51:04
like if you actually carefully analyze

00:51:01 --> 00:51:07
what your interest in life are where you

00:51:03 --> 00:51:10
think you can maximally impact the world

00:51:06 --> 00:51:12
there really is better and worse choices

00:51:09 --> 00:51:14
for a programming language that are not

00:51:11 --> 00:51:16
just about the syntax but about the

00:51:13 --> 00:51:17
community about where you predict the

00:51:15 --> 00:51:20
community's headed

00:51:16 --> 00:51:22
what large systems are programmed in

00:51:19 --> 00:51:25
that but can you create that spreadsheet

00:51:21 --> 00:51:27
because that sort of you're mentioning a

00:51:24 --> 00:51:29
whole bunch of inputs that go into that

00:51:26 --> 00:51:32
spreadsheet where you have to estimate

00:51:28 --> 00:51:34
things that are very hard to measure and

00:51:31 --> 00:51:36
even harder I mean they're they're hard

00:51:33 --> 00:51:38
to measure

00:51:35 --> 00:51:40
troactively and they're even harder to

00:51:37 --> 00:51:42
predict like what is the better

00:51:39 --> 00:51:45
community

00:51:41 --> 00:51:48
well better is is one of those

00:51:44 --> 00:51:49
incredibly difficult words what's better

00:51:47 --> 00:51:51
for you is not better for someone else

00:51:48 --> 00:51:54
no but we're not doing a public speech

00:51:50 --> 00:51:56
about what's better we're doing a

00:51:53 --> 00:51:58
personal spiritual journey I can

00:51:55 --> 00:52:01
determine a circle of friends

00:51:57 --> 00:52:03
circle circle one and circle two and I

00:52:00 --> 00:52:05
can have a bunch of parties with one and

00:52:02 --> 00:52:07
a bunch of parties with two and then

00:52:04 --> 00:52:11
right down or to take a mental note of

00:52:06 --> 00:52:12
what made me happier right and that you

00:52:10 --> 00:52:15
know you have if you're a machine

00:52:11 --> 00:52:17
learning person you want to say Okay I

00:52:14 --> 00:52:20
want to build a large company that does

00:52:16 --> 00:52:23
that is grounded in machine learning but

00:52:19 --> 00:52:25
also has a sexy interface that has a

00:52:22 --> 00:52:27
large impact on the world what languages

00:52:24 --> 00:52:29
do I use you look at what Facebook is

00:52:26 --> 00:52:32
using you look at what Twitter is using

00:52:28 --> 00:52:35
then you look at performance more newer

00:52:31 --> 00:52:37
languages like rust or you look at

00:52:34 --> 00:52:39
languages that have taken that most the

00:52:36 --> 00:52:41
community uses in the machine learning

00:52:38 --> 00:52:42
space that's Python and you can like

00:52:40 --> 00:52:45
think through you can hang out and think

00:52:41 --> 00:52:48
through it and it's it's always a invest

00:52:44 --> 00:52:49
and the the level of activity of the

00:52:47 --> 00:52:51
community is also really interesting

00:52:48 --> 00:52:53
like you said C plus plus and python are

00:52:50 --> 00:52:55
super active in terms of the development

00:52:52 --> 00:52:58
of the language itself

00:52:54 --> 00:53:01
but do you think that you can make

00:52:57 --> 00:53:04
objective choices there no no but

00:53:00 --> 00:53:05
here's a gut you build up like don't

00:53:03 --> 00:53:08
you don't you believe in that gut

00:53:04 --> 00:53:10
feeling everything is very subjective

00:53:07 --> 00:53:12
and yes you most certainly can have a

00:53:09 --> 00:53:14
gut feeling and your gut can also be

00:53:11 --> 00:53:17
wrong that's why there are billions of

00:53:13 --> 00:53:19
people because they're not all right I

00:53:16 --> 00:53:22
mean clearly there are more people

00:53:18 --> 00:53:25
living in the Bay Area who have plans to

00:53:21 --> 00:53:27
sort of create a Google sized company

00:53:24 --> 00:53:30
then there's room in the world for

00:53:26 --> 00:53:33
Google sized companies and they're gonna

00:53:29 --> 00:53:36
have to Duke it out in the market the

00:53:32 --> 00:53:38
space and there's many more choices than

00:53:35 --> 00:53:41
just the programming language speaking

00:53:37 --> 00:53:42
of which let's go back to the boat with

00:53:40 --> 00:53:45
e with the fisherman who's tuned out

00:53:41 --> 00:53:47
long ago I talked to the programmer

00:53:44 --> 00:53:50
let's jump around and go back to see

00:53:46 --> 00:53:52
python that we tried to Define as the

00:53:49 --> 00:53:54
reference implementation and one of the

00:53:51 --> 00:53:57
big things that's coming out in 3.11

00:53:53 --> 00:54:00
what's the right way we tend to say 3.11

00:53:56 --> 00:54:04
because it really was like we went 3.8

00:53:59 --> 00:54:08
3.9 3.10 3.11 and we're planning to go

00:54:03 --> 00:54:11
up to 3.99 99 what happens after 99

00:54:07 --> 00:54:12
probably just 3.100 what if I make it

00:54:10 --> 00:54:14
here okay

00:54:11 --> 00:54:17
and go all the way to 420. I got it

00:54:13 --> 00:54:21
forever python V3 we'll talk about four

00:54:16 --> 00:54:21
but more for fun

00:54:20 --> 00:54:26
so 3.11 is coming out one of the big

00:54:23 --> 00:54:30
sexy things in it is it'll be much

00:54:25 --> 00:54:32
faster so how did you beyond hiring a

00:54:29 --> 00:54:35
great team or working with a great team

00:54:31 --> 00:54:38
ake it faster what are some ideas

00:54:34 --> 00:54:41
uh that may makes it faster

00:54:37 --> 00:54:43
it has to do with Simplicity of software

00:54:40 --> 00:54:47
versus performance

00:54:42 --> 00:54:49
and so even though C is known to be a

00:54:46 --> 00:54:52
low-level language which is

00:54:48 --> 00:54:56
great for writing sort of

00:54:51 --> 00:54:59
a high performance language interpreter

00:54:55 --> 00:55:01
when I originally started python or C

00:54:58 --> 00:55:02
python

00:55:00 --> 00:55:05
I

00:55:01 --> 00:55:09
didn't expect there would be

00:55:04 --> 00:55:12
great success and fame in my future

00:55:08 --> 00:55:16
uh so I

00:55:11 --> 00:55:18
try to get something working

00:55:15 --> 00:55:21
and useful

00:55:17 --> 00:55:26
uh in about three months

00:55:20 --> 00:55:30
and so I I sort of I cut corners

00:55:25 --> 00:55:32
I borrowed ideas left and right when it

00:55:29 --> 00:55:33
comes to language design as well as

00:55:31 --> 00:55:37
implementation

00:55:32 --> 00:55:39
uh I also wrote much of the code as

00:55:36 --> 00:55:41
imple as it could be

00:55:38 --> 00:55:43
and

00:55:40 --> 00:55:46
they're they're like

00:55:42 --> 00:55:50
there are many things that you can code

00:55:45 --> 00:55:54
more efficiently by adding more code

00:55:49 --> 00:55:56
it's a bit of a sort of a time space

00:55:53 --> 00:55:59
trade-off

00:55:55 --> 00:56:02
where you can compute a certain thing

00:55:58 --> 00:56:05
from a small number of inputs

00:56:01 --> 00:56:07
uh and every time you get presented with

00:56:04 --> 00:56:09
new input

00:56:06 --> 00:56:10
uh you do the whole computation from the

00:56:08 --> 00:56:13
top

00:56:09 --> 00:56:15
that can be simple looking code it's

00:56:12 --> 00:56:18
easy to understand it's easy to reason

00:56:14 --> 00:56:20
about that you can you can tell quickly

00:56:17 --> 00:56:25
that it's correct in at least in the

00:56:19 --> 00:56:28
sort of mathematical sense of correct

00:56:24 --> 00:56:31
uh because it's implemented in C maybe

00:56:27 --> 00:56:35
it performs relatively well

00:56:30 --> 00:56:38
but over time as sort of

00:56:34 --> 00:56:41
as the requirements for that code and

00:56:37 --> 00:56:42
the need for performance

00:56:40 --> 00:56:45
go up

00:56:41 --> 00:56:46
you might be able to rewrite that same

00:56:44 --> 00:56:50
algorithm

00:56:45 --> 00:56:52
using more memory maybe remember

00:56:49 --> 00:56:54
previous results

00:56:51 --> 00:56:57
o you don't have to recompute

00:56:53 --> 00:56:59
verything from scratch like the the

00:56:56 --> 00:57:00
classic example is Computing prime

00:56:58 --> 00:57:01
numbers

00:56:59 --> 00:57:04
like

00:57:00 --> 00:57:07
is 10 a prime number

00:57:03 --> 00:57:09
well you sort of is it divisible by two

00:57:06 --> 00:57:12
is it divisible by three is it divisible

00:57:08 --> 00:57:15
by four and we go all the way to is it

00:57:11 --> 00:57:18
divisible by 9. and it is not well

00:57:14 --> 00:57:21
actually 10 is divisible by two so there

00:57:17 --> 00:57:23
we stop but say 11. it's divisible by

00:57:20 --> 00:57:26
ten the answer is nine is no ten times

00:57:22 --> 00:57:27
in a row so now we know 11 is a prime

00:57:25 --> 00:57:29
number

00:57:26 --> 00:57:33
on the other hand if we already know

00:57:28 --> 00:57:34
that 2 3 5 and 7 are prime numbers and

00:57:32 --> 00:57:37
you know a little bit about the

00:57:33 --> 00:57:40
mathematics of how prime numbers work

00:57:36 --> 00:57:43
you know that if you have a rough

00:57:39 --> 00:57:45
estimate for the square root of 11 you

00:57:42 --> 00:57:48
don't actually have to check is it

00:57:44 --> 00:57:50
divisible by four or is it divisible by

00:57:47 --> 00:57:52
five you all you have to check in the

00:57:49 --> 00:57:54
case of 11 is is it divisible by 2 is it

00:57:51 --> 00:57:56
divisible by three

00:57:53 --> 00:58:00
because take 12.

00:57:55 --> 00:58:02
if it's divisible by 4 well 12 divided

00:57:59 --> 00:58:05
by 4 is 3 so you you should have come

00:58:01 --> 00:58:06
across the question is it divisible by 3

00:58:04 --> 00:58:09
first

00:58:05 --> 00:58:11
so if you know basically nothing about

00:58:08 --> 00:58:15
prime numbers except the definition

00:58:10 --> 00:58:20
maybe you go for X from 2

00:58:14 --> 00:58:24
through n minus 1 is n divisible by X

00:58:19 --> 00:58:27
and then at the end if you got uh all

00:58:23 --> 00:58:30
no's uh for every single one of those

00:58:26 --> 00:58:32
questions you know oh it must be a prime

00:58:29 --> 00:58:34
number well the first thing is you can

00:58:31 --> 00:58:35
stop iterating when you find a yes

00:58:33 --> 00:58:38
answer

00:58:34 --> 00:58:40
and the second is you can also stop

00:58:37 --> 00:58:44
iterating when you have have reached

00:58:39 --> 00:58:47
the square root of n because you know

00:58:43 --> 00:58:49
that if it has a divisor larger than

00:58:46 --> 00:58:52
the square root did not also have a

00:58:48 --> 00:58:55
divisor smaller than the square root

00:58:51 --> 00:58:57
hen you say oh except for two we don't

00:58:54 --> 00:58:59
need to bother with checking for even

00:58:56 --> 00:59:01
umbers because all even numbers are

00:58:58 --> 00:59:03
divisible by two so if it's divisible by

00:59:00 --> 00:59:05
four

00:59:02 --> 00:59:07
we would already have come across the

00:59:04 --> 00:59:09
question is it divisible by two and so

00:59:06 --> 00:59:12
now you go special case check is a

00:59:08 --> 00:59:14
divisible by two and then you just check

00:59:11 --> 00:59:16
three five seven eleven

00:59:13 --> 00:59:20
uh and so now you've you've sort of

00:59:15 --> 00:59:22
reduced your search Pace by 50 Again by

00:59:19 --> 00:59:23
skipping all the even numbers I kept

00:59:21 --> 00:59:26
for two

00:59:22 --> 00:59:27
if you think a bit more about it or you

00:59:25 --> 00:59:29
just

00:59:26 --> 00:59:32
read in your book about the history of

00:59:28 --> 00:59:33
math one of the first algorithms ever

00:59:31 --> 00:59:36
written down

00:59:32 --> 00:59:38
all you have to do is check is it

00:59:35 --> 00:59:41
divisible by any of the previous prime

00:59:37 --> 00:59:41
numbers that are smaller than the square

00:59:40 --> 00:59:45
root

00:59:40 --> 00:59:47
and before you get to a better algorithm

00:59:44 --> 00:59:52
than that

00:59:46 --> 00:59:54
you have to have several phds in in

00:59:51 --> 00:59:57
discrete math so that's as much as I

00:59:53 --> 00:59:58
know so of course that same story

00:59:56 --> 01:00:00
applies to a lot of other algorithms

00:59:57 --> 01:00:03
tring matching is a good example

01:00:00 --> 01:00:06
of uh how to come up with an efficient

01:00:02 --> 01:00:07
algorithm and sometimes yeah the more

01:00:05 --> 01:00:10
fficient algorithm is not so much more

01:00:06 --> 01:00:13
complex than the inefficient one but

01:00:09 --> 01:00:15
hat's an art and it's not always the

01:00:12 --> 01:00:18
case in the general cases the more

01:00:14 --> 01:00:20
performant the algorithm the more

01:00:17 --> 01:00:22
complex it's going to be there's a

01:00:19 --> 01:00:25
kind of trade-off the simpler

01:00:21 --> 01:00:27
algorithms are also the ones that people

01:00:24 --> 01:00:29
invent first

01:00:26 --> 01:00:30
because when you're looking for a

01:00:28 --> 01:00:32
solution

01:00:29 --> 01:00:34
you look at the simplest way to get

01:00:31 --> 01:00:37
here first

01:00:33 --> 01:00:40
and so if there is a simple solution

01:00:36 --> 01:00:43
even if it's not the best solution not

01:00:39 --> 01:00:44
he fastest or the memory most memory

01:00:42 --> 01:00:49
efficient or whatever

01:00:44 --> 01:00:51
a a simple solution and simple is is

01:00:48 --> 01:00:54
fairly subjective but mathematicians

01:00:51 --> 01:00:56
have also thought about sort of what is

01:00:53 --> 01:00:58
a good definition for simple in the case

01:00:55 --> 01:01:01
of algorithms

01:00:57 --> 01:01:03
uh but the simpler the simpler Solutions

01:01:00 --> 01:01:07
tend to be

01:01:02 --> 01:01:09
asier to follow for other programmers

01:01:06 --> 01:01:12
who haven't made a study of a particular

01:01:09 --> 01:01:15
field and when I when I started with

01:01:11 --> 01:01:17
python I I was a good programmer in

01:01:14 --> 01:01:19
general I knew sort of basic data

01:01:16 --> 01:01:20
structures I knew the C language pretty

01:01:18 --> 01:01:24
well

01:01:19 --> 01:01:29
but there were many areas where I was

01:01:23 --> 01:01:30
only somewhat familiar with the state of

01:01:28 --> 01:01:33
the art

01:01:29 --> 01:01:36
and so I I picked

01:01:32 --> 01:01:38
in many cases the simplest way I could

01:01:35 --> 01:01:40
solve a particular sub problem because

01:01:37 --> 01:01:43
when you when you're designing and

01:01:39 --> 01:01:45
implementing a language you have to like

01:01:42 --> 01:01:46
you've many hundreds of little problems

01:01:44 --> 01:01:49
to solve

01:01:45 --> 01:01:53
and you have to have solutions for every

01:01:48 --> 01:01:57
one of them before you can can sort of

01:01:52 --> 01:02:00
say I've invented a programming language

01:01:56 --> 01:02:03
first of all so see python what kind of

01:01:59 --> 01:02:06
things does it do it's an interpreter it

01:02:03 --> 01:02:08
akes in this readable language that we

01:02:05 --> 01:02:10
talked about that is python what is it

01:02:07 --> 01:02:14
supposed to do The Interpreter basically

01:02:09 --> 01:02:17
it's it's sort of a recipe for

01:02:13 --> 01:02:21
understanding recipes

01:02:16 --> 01:02:24
o instead of a recipe that says bake me

01:02:20 --> 01:02:26
a cake we have a recipe for

01:02:23 --> 01:02:29
well given

01:02:25 --> 01:02:32
the text of a program

01:02:28 --> 01:02:34
how do we run that program and and that

01:02:31 --> 01:02:36
is sort of the recipe for building a

01:02:33 --> 01:02:39
computer the recipe for the Baker and

01:02:36 --> 01:02:42
the chef yeah what are the

01:02:38 --> 01:02:45
algorithmically tricky things that

01:02:42 --> 01:02:47
happen to be low-hanging fruit that

01:02:44 --> 01:02:50
could be improved on maybe throughout

01:02:46 --> 01:02:53
he history of python but also now how

01:02:49 --> 01:02:55
is it possible that 3.11 in year 2022

01:02:52 --> 01:02:57
it's possible to get such a big

01:02:54 --> 01:03:01
performance Improvement

01:02:56 --> 01:03:01
we focused

01:03:00 --> 01:03:08
on a few areas where we we still felt

01:03:05 --> 01:03:10
here was low hanging fruit

01:03:07 --> 01:03:12
he biggest one is actually The

01:03:09 --> 01:03:15
Interpreter itself

01:03:11 --> 01:03:18
and this has to do with details of Pi

01:03:14 --> 01:03:21
how python is defined so I didn't know

01:03:17 --> 01:03:23
if the fisherman is going to follow this

01:03:20 --> 01:03:27
tory he already he already jumped off

01:03:22 --> 01:03:29
the boat his uh he's he's this yeah

01:03:26 --> 01:03:31
stupid python is actually even though

01:03:28 --> 01:03:34
it's always called an interpreted

01:03:30 --> 01:03:36
language it's there's also a compiler in

01:03:33 --> 01:03:41
there it just doesn't compile to machine

01:03:35 --> 01:03:44
code it compiles to bytecode which is

01:03:40 --> 01:03:46
ort of code for an imaginary computer

01:03:43 --> 01:03:49
that is called the python interpreter so

01:03:45 --> 01:03:51
it's compiling code that is more easily

01:03:48 --> 01:03:53
digestible by The Interpreter or is

01:03:50 --> 01:03:55
digestible at all it is the code that is

01:03:52 --> 01:03:58
digested by The Interpreter that's the

01:03:54 --> 01:04:00
compiler we tweaked very minor bits of

01:03:57 --> 01:04:02
the compiler almost all the work was

01:03:59 --> 01:04:04
done in The Interpreter

01:04:01 --> 01:04:07
because

01:04:03 --> 01:04:09
when you have a program you compile it

01:04:06 --> 01:04:11
once and then you run the code a whole

01:04:08 --> 01:04:13
bunch of times

01:04:10 --> 01:04:17
or maybe there's one function in the in

01:04:12 --> 01:04:20
the code that gets run many times

01:04:16 --> 01:04:23
now I know that that sort of people who

01:04:19 --> 01:04:26
know this field are expecting me to

01:04:22 --> 01:04:29
at some point say we built adjusting

01:04:25 --> 01:04:31
time compiler actually we didn't we just

01:04:28 --> 01:04:35
made The Interpreter uh a little more

01:04:30 --> 01:04:38
fficient what's adjust in time compiler

01:04:34 --> 01:04:41
that is a thing from the Java World

01:04:37 --> 01:04:44
although it's now applied to almost all

01:04:40 --> 01:04:47
uh programming languages especially

01:04:43 --> 01:04:49
interpreted ones so you see the compile

01:04:46 --> 01:04:51
inside python not like a just-in-time

01:04:48 --> 01:04:53
compiler but is it compiler that creates

01:04:50 --> 01:04:57
by code that is then

01:04:52 --> 01:04:59
fed to The Interpreter and the compiler

01:04:56 --> 01:05:00
was there something interesting to say

01:04:58 --> 01:05:01
about the compiler it's interesting that

01:04:59 --> 01:05:05
you haven't changed that tweak that at

01:05:00 --> 01:05:06
all or much we changed some parts of the

01:05:04 --> 01:05:10
byte code

01:05:05 --> 01:05:12
but not very much and so we only had to

01:05:09 --> 01:05:15
change the parts of the compiler where

01:05:11 --> 01:05:17
we decided that the the breakdown of a

01:05:14 --> 01:05:20
Python program in bytecode instructions

01:05:16 --> 01:05:22
had to be slightly different

01:05:19 --> 01:05:26
but

01:05:21 --> 01:05:29
hat did that didn't gain us the

01:05:25 --> 01:05:32
performance uh improvements that

01:05:28 --> 01:05:35
performance improvements were like

01:05:31 --> 01:05:37
making The Interpreter faster in part by

01:05:34 --> 01:05:41
sort of

01:05:36 --> 01:05:44
removing the fat from some internal data

01:05:40 --> 01:05:48
structures used by The Interpreter but

01:05:43 --> 01:05:50
uh the the key idea is an Adaptive

01:05:47 --> 01:05:53
specializing interpreter

01:05:49 --> 01:05:55
let's go what is adaptive about it what

01:05:52 --> 01:05:57
is specialized about it well let me

01:05:54 --> 01:06:01
first talk about the specializing part

01:05:56 --> 01:06:03
because the Adaptive part is the sort of

01:06:00 --> 01:06:06
the second order effect but they're both

01:06:02 --> 01:06:09
important so bytecode

01:06:05 --> 01:06:12
is a bunch of machine instructions but

01:06:08 --> 01:06:14
it's an imaginary machine but the

01:06:11 --> 01:06:15
machine can do things like call a

01:06:13 --> 01:06:17
function

01:06:14 --> 01:06:19
add two numbers

01:06:16 --> 01:06:21
print value

01:06:18 --> 01:06:23
those are sort of typical instructions

01:06:20 --> 01:06:28
in Python

01:06:22 --> 01:06:29
uh and if we take the example of adding

01:06:27 --> 01:06:32
two numbers

01:06:28 --> 01:06:34
actually in Python the language there's

01:06:31 --> 01:06:38
no such thing as adding two numbers

01:06:33 --> 01:06:40
there's just an the the compiler

01:06:37 --> 01:06:42
doesn't know that you're adding two

01:06:39 --> 01:06:44
numbers you might as well be adding two

01:06:41 --> 01:06:48
strings or two lists

01:06:43 --> 01:06:51
uh or two instances of some user-defined

01:06:47 --> 01:06:53
class that happen to implement this

01:06:50 --> 01:06:56
operator called add

01:06:52 --> 01:06:59
that's a very interesting and and fairly

01:06:55 --> 01:07:01
powerful mathematical concept it's

01:06:58 --> 01:07:03
mostly a user interface trick because it

01:07:00 --> 01:07:06
means that

01:07:02 --> 01:07:09
a certain category of functions

01:07:05 --> 01:07:11
can be written using a symbols single

01:07:08 --> 01:07:14
symbol the plus sign

01:07:10 --> 01:07:15
and sort of a bunch of other functions

01:07:13 --> 01:07:18
can be written using another single

01:07:14 --> 01:07:22
symbol the multiply sign

01:07:17 --> 01:07:25
uh so if we take addition the way

01:07:21 --> 01:07:29
traditionally in Python the ad byte code

01:07:24 --> 01:07:29
was executed is

01:07:28 --> 01:07:36
pointers pointers and more pointers so

01:07:31 --> 01:07:38
first we we have two objects an object

01:07:35 --> 01:07:40
is basically a pointer to a bunch of

01:07:37 --> 01:07:42
memory that contains more pointers

01:07:39 --> 01:07:44
all the way down

01:07:41 --> 01:07:48
ot quite but there there are a lot of

01:07:43 --> 01:07:52
them so to simplify a bit uh we look up

01:07:47 --> 01:07:55
in one of the objects

01:07:51 --> 01:07:59
what is the type of that object and does

01:07:54 --> 01:08:03
that object type Define an add operation

01:07:58 --> 01:08:06
and so you can imagine that there is a

01:08:02 --> 01:08:09
sort of a type integer that knows how to

01:08:05 --> 01:08:10
add itself to another integer and there

01:08:08 --> 01:08:12
is a type floating Point number that

01:08:09 --> 01:08:15
knows how to add itself

01:08:11 --> 01:08:18
to another floating Point number

01:08:14 --> 01:08:21
and the integers and floating Point

01:08:17 --> 01:08:24
numbers are sort of important I think

01:08:20 --> 01:08:25
mostly historically because in the first

01:08:23 --> 01:08:29
computers

01:08:24 --> 01:08:31
uh you use the sort of the same bit

01:08:28 --> 01:08:33
pattern when interpreted as a floating

01:08:30 --> 01:08:36
Point number had a very different value

01:08:32 --> 01:08:38
than we interpret it as an integer can I

01:08:35 --> 01:08:41
ask a dumb question here please do given

01:08:37 --> 01:08:43
the basics of ant and float and add who

01:08:40 --> 01:08:47
carries the knowledge of how to add two

01:08:42 --> 01:08:50
integers is it the integer it's the type

01:08:46 --> 01:08:52
integer versus it's the type integer and

01:08:49 --> 01:08:54
the type float what about the operator

01:08:51 --> 01:08:58
is the operator

01:08:53 --> 01:09:05
just exists as a platonic form possessed

01:08:57 --> 01:09:09
by uh the operator is more like

01:09:04 --> 01:09:12
it's an index in a list of functions

01:09:08 --> 01:09:16
that the integer type defines

01:09:11 --> 01:09:19
and so the integer type

01:09:15 --> 01:09:21
is really a collection of functions and

01:09:18 --> 01:09:24
there is an add function and there's a

01:09:20 --> 01:09:26
multiply function and there are like 30

01:09:23 --> 01:09:28
other functions for other operations

01:09:25 --> 01:09:30
there's a power function for example

01:09:27 --> 01:09:32
and

01:09:29 --> 01:09:36
you can imagine that

01:09:31 --> 01:09:39
in in memory there is a distinct slot

01:09:35 --> 01:09:41
for the add operations let's say the add

01:09:38 --> 01:09:43
operation is the first operation of a

01:09:40 --> 01:09:45
type and the multiply is the second

01:09:42 --> 01:09:47
operation of a type

01:09:44 --> 01:09:50
so now we take the integer type and we

01:09:46 --> 01:09:54
take the floating Point type

01:09:49 --> 01:09:56
in both cases the add operation is the

01:09:53 --> 01:09:58
first slot and multiplies the second

01:09:55 --> 01:10:01
slot but

01:09:57 --> 01:10:05
each slot contains a function and the

01:10:00 --> 01:10:08
functions are different because the the

01:10:04 --> 01:10:11
add to integers function interprets the

01:10:07 --> 01:10:13
bit patterns as integers that add to

01:10:10 --> 01:10:16
float

01:10:12 --> 01:10:18
function interprets the the same bit

01:10:15 --> 01:10:20
pattern as

01:10:17 --> 01:10:22
a floating Point number and then

01:10:19 --> 01:10:26
there is the string

01:10:21 --> 01:10:29
data type which again interprets the the

01:10:25 --> 01:10:32
bit pattern as a

01:10:28 --> 01:10:34
the address of a sequence of characters

01:10:31 --> 01:10:35
there are lots of lies in that story but

01:10:33 --> 01:10:39
hat's

01:10:34 --> 01:10:40
sort of a basic idea I can tell I

01:10:38 --> 01:10:42
could tell the fact the fake news and

01:10:39 --> 01:10:45
the fabrication going on here at the

01:10:41 --> 01:10:47
table but uh where's the optimization is

01:10:44 --> 01:10:51
it on the operator is it a different so

01:10:46 --> 01:10:54
inside the integer optimization is the

01:10:50 --> 01:10:58
observation that

01:10:53 --> 01:11:01
in a particular line of code

01:10:57 --> 01:11:04
so now you you write your little Python

01:11:00 --> 01:11:06
program and you write a function and

01:11:03 --> 01:11:09
that function sort of takes a bunch of

01:11:05 --> 01:11:11
inputs and at some point it adds two of

01:11:08 --> 01:11:13
the inputs together

01:11:10 --> 01:11:15
now I bet you even if you call your

01:11:12 --> 01:11:19
function a thousand times

01:11:14 --> 01:11:22
that all those calls are likely all

01:11:18 --> 01:11:25
going to be about integers because maybe

01:11:21 --> 01:11:27
your program is all about integers or

01:11:24 --> 01:11:29
maybe

01:11:26 --> 01:11:32
on that particular line of code where

01:11:28 --> 01:11:36
there's that plus operator

01:11:31 --> 01:11:38
every time the program hits that line

01:11:35 --> 01:11:41
the variables A and B that b are being

01:11:37 --> 01:11:45
added together happen to be strings

01:11:40 --> 01:11:48
and so what we do is instead of having

01:11:44 --> 01:11:50
this single byte code that says here's

01:11:47 --> 01:11:52
an ad operation and the implementation

01:11:49 --> 01:11:55
of add is fully generic it looks at the

01:11:51 --> 01:11:57
object from the object it looks at the

01:11:54 --> 01:12:00
type then it takes the type and it looks

01:11:56 --> 01:12:02
at looks of the function pointer then it

01:11:59 --> 01:12:05
calls the function now the function has

01:12:01 --> 01:12:06
to be has to look at the other argument

01:12:04 --> 01:12:08
and it has to double check that the

01:12:05 --> 01:12:10
other argument has the right type

01:12:07 --> 01:12:13
and then there's a bunch of error

01:12:09 --> 01:12:15
checking before it can actually

01:12:12 --> 01:12:17
just go ahead and add the two bit

01:12:14 --> 01:12:20
patterns in the right way

01:12:16 --> 01:12:23
what we do is

01:12:19 --> 01:12:25
every time we execute an ad instruction

01:12:22 --> 01:12:30
like that

01:12:24 --> 01:12:32
we we keep a little note of

01:12:29 --> 01:12:35
in the end after

01:12:31 --> 01:12:36
we hit the code that that did the

01:12:34 --> 01:12:40
addition

01:12:35 --> 01:12:44
for a particular type what type was it

01:12:39 --> 01:12:47
and then after a few times through that

01:12:43 --> 01:12:50
code if it's this if it's the same type

01:12:46 --> 01:12:55
all the time

01:12:49 --> 01:12:58
uh we say oh so this add operation even

01:12:54 --> 01:13:00
though it's the generic ad operation it

01:12:57 --> 01:13:04
might as well be the add integer

01:12:59 --> 01:13:07
operation and add integer operation is

01:13:03 --> 01:13:08
uh much more efficient because it just

01:13:06 --> 01:13:11
says

01:13:07 --> 01:13:13
assume that A and B are integers do the

01:13:10 --> 01:13:18
addition operation do it right there

01:13:12 --> 01:13:22
inline and produce the result

01:13:17 --> 01:13:25
and the big lie here is that in Python

01:13:21 --> 01:13:28
even if you have great evidence that in

01:13:24 --> 01:13:30
the past it was always too integers that

01:13:27 --> 01:13:32
you were adding at some point in the

01:13:29 --> 01:13:34
future that same line of code could

01:13:31 --> 01:13:36
still be hit with two floating points or

01:13:33 --> 01:13:38
two strings or maybe a string and an

01:13:35 --> 01:13:40
integer it's not a great lie that's just

01:13:37 --> 01:13:42
he fact of life

01:13:39 --> 01:13:46
I didn't account for what what should

01:13:42 --> 01:13:49
happen in that case in in the way I told

01:13:45 --> 01:13:52
the story there is some accounting and

01:13:48 --> 01:13:56
so what we actually have to do is

01:13:51 --> 01:13:59
when we have the add integer operation

01:13:55 --> 01:14:02
we still have to check

01:13:58 --> 01:14:05
are the two arguments in fact integers

01:14:01 --> 01:14:07
we applied some tricks to make those

01:14:04 --> 01:14:10
checks efficient

01:14:06 --> 01:14:13
and we know statistically that the

01:14:09 --> 01:14:15
outcome is almost always yes they were

01:14:12 --> 01:14:18
they are both integers

01:14:14 --> 01:14:21
uh and so we quickly make that check and

01:14:17 --> 01:14:23
then we proceed with the the sort of add

01:14:20 --> 01:14:26
integer operation and then there is a

01:14:22 --> 01:14:28
fallback mechanism where we say

01:14:25 --> 01:14:30
oops one of them wasn't an integer

01:14:27 --> 01:14:33
now we're going to pretend that there

01:14:29 --> 01:14:37
was just the fully generic ad operation

01:14:32 --> 01:14:40
we wasted a few Cycles believing it was

01:14:36 --> 01:14:42
what was going to be two integers and

01:14:39 --> 01:14:44
then we had to back up but we didn't

01:14:41 --> 01:14:47
waste that much time and statistically

01:14:43 --> 01:14:50
uh most of the time

01:14:46 --> 01:14:52
basically we were sort of

01:14:49 --> 01:14:55
hoping that most of the time we guess

01:14:51 --> 01:14:58
right because if we if it turns out that

01:14:54 --> 01:15:01
we guessed wrong too often

01:14:57 --> 01:15:04
uh or we didn't have a good guess at all

01:15:00 --> 01:15:05
uh things might actually end up running

01:15:03 --> 01:15:08
a little slower

01:15:04 --> 01:15:09
so someone with armed with this

01:15:07 --> 01:15:12
knowledge

01:15:08 --> 01:15:14
and a copy of the implementation someone

01:15:11 --> 01:15:17
could easily construct a counter example

01:15:13 --> 01:15:19
where they say oh I have a program and

01:15:16 --> 01:15:23
then now it runs five times as slow in

01:15:18 --> 01:15:25
Python 311 than it did in Python 310.

01:15:22 --> 01:15:30
but that's a very unrealistic program

01:15:24 --> 01:15:32
that's that's just like an extreme fluke

01:15:29 --> 01:15:35
it's a fun reverse engineering task

01:15:31 --> 01:15:40
though oh yeah so there's uh

01:15:34 --> 01:15:42
well people like fun yes so there's some

01:15:39 --> 01:15:45
presumably heuristic

01:15:41 --> 01:15:48
of what defines a momentum

01:15:44 --> 01:15:50
of uh saying you know you seem to be

01:15:47 --> 01:15:53
working adding two integers not two

01:15:49 --> 01:15:56
generic types uh so how do you figure

01:15:52 --> 01:15:59
out that heuristic I think that the

01:15:55 --> 01:16:01
uristic is actually we assume that the

01:15:58 --> 01:16:03
weather tomorrow is going to be the same

01:16:00 --> 01:16:05
as the weather today so you don't need

01:16:02 --> 01:16:09
two days of the weather no

01:16:04 --> 01:16:12
that is already so much better than than

01:16:08 --> 01:16:14
guessing randomly that so how do you

01:16:11 --> 01:16:17
find this idea

01:16:13 --> 01:16:22
hey I wonder if instead of adding to

01:16:16 --> 01:16:23
generic types we uh we start assuming

01:16:21 --> 01:16:25
that the weather tomorrow is the same as

01:16:22 --> 01:16:27
the weather today

01:16:24 --> 01:16:30
where do you find the idea for that

01:16:26 --> 01:16:32
because that ultimately

01:16:29 --> 01:16:34
for you to do that you have to kind of

01:16:31 --> 01:16:36
understand how people are using the

01:16:33 --> 01:16:39
language right python is not the first

01:16:36 --> 01:16:41
language to do a thing like this this is

01:16:38 --> 01:16:43
a fairly well-known trick especially

01:16:40 --> 01:16:45
from

01:16:42 --> 01:16:48
other interpreted languages that had

01:16:44 --> 01:16:51
reason to be sped up we occasionally

01:16:48 --> 01:16:54
look at papers about hhvm which is for

01:16:50 --> 01:16:59
Facebook's uh

01:16:54 --> 01:17:02
efficient compiler for uh PHP there are

01:16:58 --> 01:17:04
tricks known from the jvm and

01:17:01 --> 01:17:06
sometimes it just comes from Academia

01:17:03 --> 01:17:09
nd so the trick here is that the type

01:17:05 --> 01:17:11
itself doesn't the variable doesn't know

01:17:08 --> 01:17:13
hat type it is

01:17:10 --> 01:17:16
o this is not a statically typed

01:17:12 --> 01:17:16
language where you can

01:17:17 --> 01:17:23
this is a trick that is especially

01:17:19 --> 01:17:27
important for uh for interpreted

01:17:22 --> 01:17:28
languages with Dynamic typing because

01:17:26 --> 01:17:32
if

01:17:27 --> 01:17:34
the compiler could read in the source

01:17:31 --> 01:17:37
these X and Y that we're adding our

01:17:33 --> 01:17:40
integers the compiler can just insert

01:17:36 --> 01:17:43
he single add machine code that

01:17:39 --> 01:17:48
Hardware machine instruction that exists

01:17:42 --> 01:17:51
on every CPU and ditto for floats

01:17:47 --> 01:17:54
uh but because in Python you don't

01:17:50 --> 01:17:56
generally declare your the types of your

01:17:53 --> 01:17:58
variables you you don't even declare the

01:17:55 --> 01:18:00
xistence of your variables they just

01:17:57 --> 01:18:03
spring into existence when you first

01:17:59 --> 01:18:05
assign them which

01:18:02 --> 01:18:07
is really cool and and sort of helps

01:18:04 --> 01:18:09
those beginners because there's less

01:18:06 --> 01:18:12
bookkeeping they have to learn how to do

01:18:09 --> 01:18:15
before they can start playing around

01:18:11 --> 01:18:18
with code but it makes the the in

01:18:14 --> 01:18:21
terpretation of the code less

01:18:17 --> 01:18:23
efficient and so we're we're sort of

01:18:20 --> 01:18:26
trying to

01:18:22 --> 01:18:29
make the interpretation more

01:18:25 --> 01:18:31
fficient without losing the the super

01:18:28 --> 01:18:35
Dynamic nature of the language that's

01:18:30 --> 01:18:37
always the challenge 3.5 got the pep 484

01:18:34 --> 01:18:42
type hints

01:18:36 --> 01:18:44
what is Type hinting and is it used by

01:18:41 --> 01:18:47
The Interpreter the hints or is it just

01:18:43 --> 01:18:51
syntactic sugar so the type hints is an

01:18:46 --> 01:18:54
optional mechanism that people can use

01:18:50 --> 01:18:57
and it's especially popular with sort of

01:18:53 --> 01:19:00
larger companies that have very large

01:18:56 --> 01:19:01
code bases written in Python do you

01:18:59 --> 01:19:03
think of it as almost like documentation

01:19:00 --> 01:19:08
saying these two variables are this type

01:19:02 --> 01:19:08
more than documentation I mean so it

01:19:07 --> 01:19:14
is a sub language of python where

01:19:10 --> 01:19:16
you can express the types of

01:19:13 --> 01:19:18
variables so here's a variable and it's

01:19:15 --> 01:19:20
an integer and here's an argument to

01:19:17 --> 01:19:23
this function and it's a string and here

01:19:19 --> 01:19:24
is a function that returns a list of

01:19:22 --> 01:19:26
strings but that's not checked when you

01:19:23 --> 01:19:29
run the code but

01:19:25 --> 01:19:31
exactly there there is a separate piece

01:19:28 --> 01:19:34
of software called a static type Checker

01:19:30 --> 01:19:37
that reads all your source code without

01:19:33 --> 01:19:39
executing it and things long and hard

01:19:36 --> 01:19:42
about

01:19:38 --> 01:19:44
what it looks from just reading the code

01:19:41 --> 01:19:49
that code might be doing

01:19:43 --> 01:19:51
and double checks if that makes sense if

01:19:48 --> 01:19:53
you take the types as annotated into

01:19:50 --> 01:19:55
account so this is something you're

01:19:52 --> 01:19:58
supposed to run as you develop it's like

01:19:54 --> 01:20:00
a linter yeah that's definitely a

01:19:57 --> 01:20:04
development tool but the type

01:19:59 --> 01:20:07
annotations currently are not used for

01:20:03 --> 01:20:11
uh speeding up The Interpreter and there

01:20:06 --> 01:20:12
are a number of reasons uh many people

01:20:10 --> 01:20:16
don't use them

01:20:11 --> 01:20:20
even when they do use them uh they

01:20:15 --> 01:20:23
sometimes contain lies where the static

01:20:19 --> 01:20:26
type Checker says everything's fine

01:20:22 --> 01:20:29
I cannot prove that this integer is ever

01:20:25 --> 01:20:32
not an integer but at runtime somehow

01:20:28 --> 01:20:33
someone manages to violate that

01:20:31 --> 01:20:36
assumption

01:20:32 --> 01:20:39
and The Interpreter

01:20:35 --> 01:20:42
ends up doing just fine if we started

01:20:38 --> 01:20:44
enforcing type annotations in Python

01:20:41 --> 01:20:45
many python programs would no longer

01:20:43 --> 01:20:48
work

01:20:44 --> 01:20:51
and some python programs wouldn't even

01:20:47 --> 01:20:53
be possible because they're too dynamic

01:20:50 --> 01:20:56
and so we made we made a choice of not

01:20:52 --> 01:20:59
using the annotations there there is a

01:20:55 --> 01:21:04
possible future where eventually

01:20:58 --> 01:21:06
three four five releases in the future

01:21:03 --> 01:21:08
we could start using those annotations

01:21:05 --> 01:21:11
to sort of

01:21:07 --> 01:21:16
provide hints because we can we can

01:21:10 --> 01:21:18
still say well the source code leads us

01:21:15 --> 01:21:21
to believe that these X and Y are both

01:21:17 --> 01:21:24
integers and so we can generate an add

01:21:20 --> 01:21:26
integer instruction

01:21:23 --> 01:21:31
but we can still have a fallback that

01:21:25 --> 01:21:34
says oh if the if somehow the code code

01:21:30 --> 01:21:36
at runtime provided something else maybe

01:21:33 --> 01:21:39
it provided two decimal numbers

01:21:35 --> 01:21:42
we can still use that generic ad

01:21:38 --> 01:21:45
operation as a fallback but we're not

01:21:41 --> 01:21:47
here is there currently a mechanism or

01:21:44 --> 01:21:50
do you see something like that where you

01:21:46 --> 01:21:53
can almost add like an assert

01:21:49 --> 01:21:57
inside a function that says please check

01:21:52 --> 01:22:00
that my type hints are actually mapping

01:21:56 --> 01:22:02
to reality sort of like insert manual

01:21:59 --> 01:22:06
static typing there are third-party

01:22:01 --> 01:22:07
libraries that uh are in that business

01:22:05 --> 01:22:09
o it's possible to do that kind of

01:22:06 --> 01:22:12
thing it's possible to for a third party

01:22:08 --> 01:22:14
library to take a hint

01:22:11 --> 01:22:16
and enforce it it seems like a tricky

01:22:13 --> 01:22:19
thing what what well what we actually do

01:22:15 --> 01:22:22
is and this I think this is a fairly

01:22:18 --> 01:22:26
unique feature in Python the type hints

01:22:21 --> 01:22:29
can be introspected at runtime so while

01:22:25 --> 01:22:31
the program is running

01:22:28 --> 01:22:34
they mean python is a very

01:22:30 --> 01:22:36
introspectable language you can look at

01:22:33 --> 01:22:38
a variable and ask yourself what did

01:22:35 --> 01:22:40
what is the type of this this variable

01:22:37 --> 01:22:44
and if that baby that variable happens

01:22:39 --> 01:22:46
to refer to a function you can ask what

01:22:43 --> 01:22:49
are the arguments to the function

01:22:45 --> 01:22:52
and nowadays you can also ask what are

01:22:48 --> 01:22:54
the type annotations for the function so

01:22:51 --> 01:22:57
the type annotations are there inside

01:22:53 --> 01:22:59
the variable as it's at runtime they're

01:22:56 --> 01:23:01
mostly associated with the function

01:22:58 --> 01:23:04
object not with each individual variable

01:23:00 --> 01:23:07
but uh right you can sort of map from

01:23:03 --> 01:23:08
the arguments to the variables and

01:23:06 --> 01:23:10
that's what a third-party Library can

01:23:07 --> 01:23:13
have exactly and the problem with that

01:23:09 --> 01:23:14
is that all that extra runtime type

01:23:12 --> 01:23:17
checking

01:23:13 --> 01:23:20
uh is going to slow your code down

01:23:16 --> 01:23:21
instead of speed it up I think uh to

01:23:19 --> 01:23:25
reference this

01:23:20 --> 01:23:27
uh sales pitchy blog post that says 75

01:23:24 --> 01:23:29
of developers time to spend on debugging

01:23:26 --> 01:23:31
I would say that in some cases that

01:23:28 --> 01:23:33
might be okay it might be okay to pay

01:23:30 --> 01:23:36
the cost of performance

01:23:32 --> 01:23:36
for the catching of the types the type

01:23:35 --> 01:23:41
rrors

01:23:36 --> 01:23:44
and in most cases doing it

01:23:40 --> 01:23:47
statically before you ship your code to

01:23:43 --> 01:23:51
production is more efficient than doing

01:23:46 --> 01:23:54
it at runtime piecemeal yeah

01:23:50 --> 01:23:54
can you tell me about

01:23:53 --> 01:24:00
m-y-p-y my pie project

01:23:56 --> 01:24:03
what is it what's the mission and in

01:23:59 --> 01:24:04
general what is the future of static

01:24:02 --> 01:24:08
typing in Python

01:24:03 --> 01:24:12
well so my pie uh was started by a

01:24:07 --> 01:24:14
Finnish uh developer ukulele

01:24:11 --> 01:24:16
so many cool things out of Finland I

01:24:13 --> 01:24:18
gotta say just that part of the world I

01:24:15 --> 01:24:22
guess people have nothing better to do

01:24:17 --> 01:24:24
in those long cold Winters yeah I don't

01:24:21 --> 01:24:27
know I think Yuka lived in England when

01:24:23 --> 01:24:30
he invented uh that stuff actually but

01:24:26 --> 01:24:33
my pie is the original static type

01:24:29 --> 01:24:36
checker for Python and the the type

01:24:32 --> 01:24:37
annotations that were introduced with

01:24:35 --> 01:24:40
pep484

01:24:36 --> 01:24:43
were sort of developed

01:24:39 --> 01:24:46
together with the the static type

01:24:42 --> 01:24:48
Checker and in fact Yuka had first

01:24:45 --> 01:24:51
invented a different syntax that wasn't

01:24:47 --> 01:24:55
quite compatible with python

01:24:50 --> 01:24:59
and uh yukai and I sort of met at the

01:24:54 --> 01:25:04
python conference in I think in 2013

01:24:59 --> 01:25:06
and we we sort of came up with a

01:25:03 --> 01:25:09
compromise syntax

01:25:05 --> 01:25:10
that would not require any changes to

01:25:08 --> 01:25:14
python

01:25:09 --> 01:25:16
and that would let my pie sort of be an

01:25:13 --> 01:25:18
add-on static type checker for python

01:25:15 --> 01:25:20
just out of curiosity was it like double

01:25:17 --> 01:25:23
colon or something what was he proposing

01:25:19 --> 01:25:26
that would break python I think he was

01:25:22 --> 01:25:30
using angular brackets for uh types like

01:25:25 --> 01:25:32
in C plus plus or uh Java generics yeah

01:25:29 --> 01:25:34
you can't use angular brackets in Python

01:25:31 --> 01:25:37
it would be too tricky

01:25:33 --> 01:25:41
for attempt well we the the key thing is

01:25:36 --> 01:25:44
that we already had uh you know a Syntax

01:25:40 --> 01:25:46
for annotations we just didn't know what

01:25:43 --> 01:25:48
o use them for yet

01:25:45 --> 01:25:52
so type annotations were just the sort

01:25:48 --> 01:25:55
of most logical thing to to use that

01:25:51 --> 01:25:58
existing dummy Syntax for

01:25:54 --> 01:26:02
so but there was no there was no Syntax

01:25:57 --> 01:26:05
for uh defining generics

01:26:01 --> 01:26:08
directly syntactically in the language

01:26:04 --> 01:26:11
my pie literally meant my version of

01:26:07 --> 01:26:15
python where my it refers to Yuka

01:26:10 --> 01:26:20
he had a parser that translated my pie

01:26:15 --> 01:26:21
into python by like doing the type

01:26:19 --> 01:26:25
checks

01:26:20 --> 01:26:28
and then removing the annotations and

01:26:24 --> 01:26:31
all the angular brackets from the

01:26:27 --> 01:26:33
positions where where he was using them

01:26:30 --> 01:26:36
but a preprocessor model doesn't work

01:26:32 --> 01:26:38
very well with the typical workflow of

01:26:35 --> 01:26:40
uh python development projects

01:26:37 --> 01:26:42
that's funny I mean that could have been

01:26:39 --> 01:26:45
another major split if it became

01:26:41 --> 01:26:48
successful like uh if you watch

01:26:44 --> 01:26:51
typescript versus JavaScript

01:26:47 --> 01:26:53
is it like a split in the community over

01:26:50 --> 01:26:56
types right that seems to be stabilizing

01:26:52 --> 01:26:59
now it's not necessarily a split there

01:26:55 --> 01:27:01
are certainly plenty of people who don't

01:26:58 --> 01:27:04
use typescript but

01:27:00 --> 01:27:07
just use the original JavaScript

01:27:03 --> 01:27:09
notation just like there are many people

01:27:06 --> 01:27:11
in the python world who don't use type

01:27:08 --> 01:27:13
annotations and don't use static type

01:27:10 --> 01:27:15
Checkers now I know but there is a bit

01:27:12 --> 01:27:17
of a split between typescript and

01:27:14 --> 01:27:20
JavaScript old school JavaScript AES

01:27:16 --> 01:27:23
whatever well in the JavaScript world

01:27:19 --> 01:27:25
transpilers are sort of the standard way

01:27:22 --> 01:27:28
of working anyway which is why

01:27:24 --> 01:27:29
typescript being a transpiler itself is

01:27:27 --> 01:27:31
not a big deal

01:27:28 --> 01:27:33
and transplants for people who don't

01:27:30 --> 01:27:36
know it's what's exactly the thing you

01:27:32 --> 01:27:38
said with my pies it's the code I guess

01:27:35 --> 01:27:39
you call it pre-processing code that

01:27:37 --> 01:27:41
ranslates from one language to the

01:27:38 --> 01:27:43
other and that's part of the culture

01:27:40 --> 01:27:46
part of the workflow of the JavaScript

01:27:42 --> 01:27:47
community so that's right at the same

01:27:45 --> 01:27:49
time

01:27:46 --> 01:27:52
an interesting development in the

01:27:48 --> 01:27:53
JavaScript slash typescript world at the

01:27:51 --> 01:27:56
moment is that

01:27:52 --> 01:27:59
here is a proposal under consideration

01:27:55 --> 01:28:01
it's only a stage one proposal

01:27:58 --> 01:28:05
that proposes to add a feature to

01:28:00 --> 01:28:08
JavaScript where just like python it

01:28:04 --> 01:28:12
will ignore certain syntax

01:28:07 --> 01:28:16
when running the JavaScript code

01:28:11 --> 01:28:19
and what it ignores is more or less a

01:28:15 --> 01:28:21
superset of The typescript annotation

01:28:18 --> 01:28:24
syntax

01:28:20 --> 01:28:27
interesting so that would mean that

01:28:23 --> 01:28:29
eventually if you wanted to you could

01:28:26 --> 01:28:32
take typescript

01:28:28 --> 01:28:35
uh and you could shove it directly into

01:28:31 --> 01:28:36
a JavaScript interpreter without

01:28:34 --> 01:28:39
ransplation

01:28:35 --> 01:28:41
the interesting thing in the JavaScript

01:28:38 --> 01:28:44
world at least the web browser world

01:28:40 --> 01:28:47
the web browsers have changed how they

01:28:43 --> 01:28:50
deploy and uh they they sort of update

01:28:46 --> 01:28:53
their JavaScript engines

01:28:49 --> 01:28:55
much more quickly than they used to in

01:28:52 --> 01:28:57
the the early days and so there's much

01:28:54 --> 01:29:01
less of a need for

01:28:56 --> 01:29:04
translation in JavaScript itself because

01:29:00 --> 01:29:07
most browsers just support the most

01:29:03 --> 01:29:10
recent version of ecmascript just on a

01:29:06 --> 01:29:12
tangent of a tangent do you see if you

01:29:09 --> 01:29:13
will recommend somebody use a thing

01:29:11 --> 01:29:15
would you recommend typescript or

01:29:12 --> 01:29:18
JavaScript

01:29:14 --> 01:29:20
I would recommend a typescript just

01:29:17 --> 01:29:24
because of the strictness of the typing

01:29:19 --> 01:29:27
it's an enormously helpful extra tool

01:29:23 --> 01:29:27
that helps you sort of

01:29:26 --> 01:29:32
keep your head straight about

01:29:29 --> 01:29:35
what your code is actually doing

01:29:31 --> 01:29:39
I mean it's it's it it helps with

01:29:34 --> 01:29:41
editing your code it helps with ensuring

01:29:38 --> 01:29:43
that your code

01:29:40 --> 01:29:46
is not too incorrect

01:29:42 --> 01:29:48
and it's actually

01:29:45 --> 01:29:52
quite compatible with JavaScript never

01:29:47 --> 01:29:53
mind this syntactic sort of hack that is

01:29:51 --> 01:29:54
till years in the future

01:29:52 --> 01:29:56
but

01:29:54 --> 01:29:59
any library that is written in pure

01:29:55 --> 01:30:02
JavaScript can still be used from

01:29:58 --> 01:30:04
typescript programs and also the other

01:30:01 --> 01:30:07
way around you can write a library in

01:30:03 --> 01:30:10
typescript and then export it in a form

01:30:06 --> 01:30:15
that is totally consumable by JavaScript

01:30:09 --> 01:30:17
hat sort of compatibility is is sort of

01:30:14 --> 01:30:18
the key to this to the success of

01:30:16 --> 01:30:21
typescript

01:30:17 --> 01:30:22
yeah just to look at it as almost like a

01:30:20 --> 01:30:24
biological system that's evolving it's

01:30:21 --> 01:30:26
fascinating to see JavaScript evolve the

01:30:23 --> 01:30:28
way it does well maybe we should

01:30:25 --> 01:30:31
consider that biological systems are

01:30:27 --> 01:30:33
just the Engineering Systems too right

01:30:30 --> 01:30:36
yes but very advanced

01:30:32 --> 01:30:39
with more history

01:30:35 --> 01:30:42
but it's almost like the most visceral

01:30:38 --> 01:30:45
in the JavaScript world because there's

01:30:41 --> 01:30:49
just so much code written in JavaScript

01:30:44 --> 01:30:51
hat for its history was messy if you

01:30:48 --> 01:30:53
talk about bugs per line of code I just

01:30:50 --> 01:30:55
feel like JavaScript

01:30:52 --> 01:30:57
eats the cake or whatever the

01:30:54 --> 01:31:00
terminology is it beats python by a lot

01:30:56 --> 01:31:03
in terms of number of bugs meaning like

01:30:59 --> 01:31:06
way more bugs in JavaScript and then and

01:31:02 --> 01:31:07
then the obviously the browsers the

01:31:05 --> 01:31:09
develop I mean just there's so much

01:31:06 --> 01:31:12
active development it feels a lot more

01:31:08 --> 01:31:13
like Evolution where a bunch of stuff is

01:31:11 --> 01:31:16
born and dies and there's

01:31:12 --> 01:31:19
experimentation and debates versus

01:31:15 --> 01:31:21
python is more

01:31:18 --> 01:31:23
um all that stuff is happening but

01:31:20 --> 01:31:26
here's just a longer history of stable

01:31:22 --> 01:31:29
working giant software systems written

01:31:25 --> 01:31:32
in python versus JavaScript is just a

01:31:28 --> 01:31:35
giant beautiful I would say mess of code

01:31:31 --> 01:31:37
it's very different culture and

01:31:34 --> 01:31:40
to some extent differences in culture

01:31:36 --> 01:31:42
are random but to some extent they the

01:31:39 --> 01:31:46
differences have to do with the

01:31:41 --> 01:31:49
nvironment yeah uh and the fact that

01:31:45 --> 01:31:53
JavaScript is primarily

01:31:48 --> 01:31:56
the language for uh developing web

01:31:52 --> 01:31:59
applications especially the client side

01:31:55 --> 01:32:01
and the fact that it's basically the

01:31:58 --> 01:32:03
only language for developing web

01:32:00 --> 01:32:06
applications

01:32:02 --> 01:32:08
makes that Community sort of just have a

01:32:05 --> 01:32:11
different nature than the community of

01:32:07 --> 01:32:14
other languages

01:32:10 --> 01:32:16
plus the graphical component

01:32:13 --> 01:32:20
um and the fact that they're deploying

01:32:15 --> 01:32:21
it on all kinds of uh shapes of screens

01:32:19 --> 01:32:24
and devices and all that kind of stuff

01:32:20 --> 01:32:25
it just creates a beautiful chaos anyway

01:32:23 --> 01:32:27
back to my fight

01:32:24 --> 01:32:30
so what okay you you met you talked

01:32:26 --> 01:32:32
about a syntax that could work

01:32:29 --> 01:32:34
where does it currently stand

01:32:31 --> 01:32:35
what's the future of static typing in

01:32:33 --> 01:32:39
Python

01:32:34 --> 01:32:41
it is still controversial but it is much

01:32:38 --> 01:32:44
more accepted than when my pi and pep

01:32:40 --> 01:32:47
484 were were young

01:32:43 --> 01:32:51
what's the connection between uh pep 484

01:32:46 --> 01:32:54
type hints and my pie my pie

01:32:50 --> 01:32:57
was the original static type Checker so

01:32:53 --> 01:33:02
it might buy quickly evolved from yuka's

01:32:56 --> 01:33:05
own variant of python to a static type

01:33:01 --> 01:33:08
checker for Python and uh sort of Pep

01:33:04 --> 01:33:12
484 that that was it like

01:33:07 --> 01:33:14
a very productive year where like many

01:33:11 --> 01:33:16
hundreds of messages were exchanged

01:33:13 --> 01:33:20
ebating that merits

01:33:15 --> 01:33:23
of every aspect of of that pep

01:33:19 --> 01:33:26
and so my pie is a static type checker

01:33:22 --> 01:33:27
for python it is itself written in

01:33:25 --> 01:33:29
Python

01:33:26 --> 01:33:33
most

01:33:28 --> 01:33:35
additional static typing features that

01:33:32 --> 01:33:37
we introduced in the time since three

01:33:34 --> 01:33:41
six

01:33:36 --> 01:33:45
uh we're also prototyped through my pie

01:33:40 --> 01:33:48
being an open source project with

01:33:44 --> 01:33:51
a very small number of maintainers

01:33:47 --> 01:33:53
it was successful enough that people

01:33:50 --> 01:33:56
said the aesthetic type checking stuff

01:33:52 --> 01:33:58
or python is actually worth an

01:33:55 --> 01:33:59
investment for our company

01:33:57 --> 01:34:04
nice but

01:33:58 --> 01:34:09
somehow they chose not to support

01:34:03 --> 01:34:12
making my pie faster say or adding new

01:34:08 --> 01:34:16
features to my Pi but both Google and

01:34:12 --> 01:34:18
Facebook and later Microsoft developed

01:34:15 --> 01:34:21
their own static type Checker I think

01:34:17 --> 01:34:24
Facebook was one of the first

01:34:20 --> 01:34:26
hey decided that they wanted to use the

01:34:23 --> 01:34:31
same technology that they had

01:34:25 --> 01:34:31
successfully used for hhvm

01:34:30 --> 01:34:37
because they they sort of they had a

01:34:33 --> 01:34:40
bunch of compiler writers and and sort

01:34:36 --> 01:34:43
of static type checking experts who had

01:34:39 --> 01:34:45
written the hhvm compiler and it was a

01:34:42 --> 01:34:47
big success within the company

01:34:44 --> 01:34:49
and they had done it in a certain way

01:34:46 --> 01:34:53
sort of

01:34:48 --> 01:34:56
they wrote a big highly parallel

01:34:52 --> 01:34:59
application in an obscure language named

01:34:55 --> 01:35:01
o camel which is apparently mostly very

01:34:58 --> 01:35:04
good for a writing static type checkers

01:35:00 --> 01:35:06
interesting yeah I have a lot of

01:35:03 --> 01:35:08
questions about how to write a static

01:35:05 --> 01:35:12
type Checker then that's very confusing

01:35:07 --> 01:35:14
Facebook wrote their version and they've

01:35:11 --> 01:35:17
worked on it in secret for about a year

01:35:13 --> 01:35:18
and then they came clean and went open

01:35:16 --> 01:35:21
source

01:35:17 --> 01:35:23
uh Google in the meantime was developing

01:35:20 --> 01:35:26
something called Pi type which was

01:35:22 --> 01:35:28
mostly

01:35:25 --> 01:35:33
interesting because it as you may have

01:35:27 --> 01:35:35
heard they have one gigantic mono repo

01:35:32 --> 01:35:37
so all the code is checked into a single

01:35:34 --> 01:35:40
repository Facebook has a different

01:35:36 --> 01:35:43
approach so Facebook developed pyre

01:35:39 --> 01:35:46
which which was written in O camel which

01:35:42 --> 01:35:48
worked well with Facebook's development

01:35:45 --> 01:35:50
workflow

01:35:47 --> 01:35:53
and Google developed something they

01:35:49 --> 01:35:55
called Pi type which was actually itself

01:35:52 --> 01:35:59
written in Python

01:35:54 --> 01:36:00
uh and it was meant to sort of fit well

01:35:58 --> 01:36:03
in

01:35:59 --> 01:36:06
their static type checking needs in

01:36:02 --> 01:36:11
Google's gigantic mono repo so Google

01:36:05 --> 01:36:14
wasn't one giant got it so the just to

01:36:10 --> 01:36:15
clarify this static type checker

01:36:13 --> 01:36:17
philosophically is a thing that's

01:36:14 --> 01:36:19
upposed to exist outside of the

01:36:16 --> 01:36:21
language itself and it's just a workflow

01:36:18 --> 01:36:23
like a debugger for the book it's a

01:36:20 --> 01:36:26
linter for people who don't know a

01:36:22 --> 01:36:27
linter maybe you can correct me but it

01:36:25 --> 01:36:29
's the thing that runs through the

01:36:26 --> 01:36:33
code continuously

01:36:28 --> 01:36:36
pre-processing to find issues based on

01:36:32 --> 01:36:37
style documentation I mean there's all

01:36:35 --> 01:36:40
kinds of linters right you can check

01:36:36 --> 01:36:44
that what usual things does a linger do

01:36:39 --> 01:36:47
maybe check that you haven't too many

01:36:43 --> 01:36:50
characters in a single line linters

01:36:46 --> 01:36:53
often do static analysis where they try

01:36:49 --> 01:36:56
to point out things that are likely

01:36:52 --> 01:36:59
mistakes but not incorrect according to

01:36:55 --> 01:37:01
the language specification like maybe

01:36:58 --> 01:37:06
you have a variable that you never use

01:37:00 --> 01:37:08
for the compiler that is valid you might

01:37:05 --> 01:37:11
sort of you might be planning to use it

01:37:07 --> 01:37:13
in future version of the of the code and

01:37:10 --> 01:37:15
the compiler might just optimize it out

01:37:12 --> 01:37:17
but the compiler is not going to tell

01:37:14 --> 01:37:20
you hey you're never using this variable

01:37:16 --> 01:37:23
a linter will tell you that variable is

01:37:19 --> 01:37:25
not used maybe there's a typo somewhere

01:37:22 --> 01:37:27
lse where you meant to use it but you

01:37:24 --> 01:37:30
accidentally use something else or there

01:37:27 --> 01:37:34
are a number of sort of common scenarios

01:37:29 --> 01:37:38
and A linter is often

01:37:33 --> 01:37:41
a a big collection of little heuristics

01:37:37 --> 01:37:43
where by looking at the combination of

01:37:40 --> 01:37:46
how your code is laid out maybe how it's

01:37:42 --> 01:37:49
indented maybe the comment structure

01:37:45 --> 01:37:53
uh but also just

01:37:48 --> 01:37:54
hings like definition of names use of

01:37:52 --> 01:37:57
names

01:37:53 --> 01:38:00
it'll tell you likely things that are

01:37:56 --> 01:38:02
wrong and in some cases linters are are

01:37:59 --> 01:38:04
ally style checkers

01:38:01 --> 01:38:06
uh for python there are a number of

01:38:03 --> 01:38:10
linters that check things like

01:38:05 --> 01:38:12
do you use the the pep 8

01:38:09 --> 01:38:14
recommended naming scheme for your

01:38:11 --> 01:38:17
functions and classes and variables

01:38:13 --> 01:38:18
because like classes start with an

01:38:16 --> 01:38:20
uppercase and the rest starts with a

01:38:17 --> 01:38:22
lowercase and

01:38:19 --> 01:38:24
there's like differences there and so

01:38:21 --> 01:38:28
the linter can tell you hey you have a

01:38:23 --> 01:38:31
class that uh whose first letter is not

01:38:27 --> 01:38:33
an uppercase letter and that's just I

01:38:30 --> 01:38:35
just find it annoying if I wanted that

01:38:32 --> 01:38:38
o be an uppercase letter I I would have

01:38:34 --> 01:38:40
typed an uppercase letter but other

01:38:37 --> 01:38:43
people find it very comforting that if

01:38:39 --> 01:38:45
the linter is no longer complaining

01:38:42 --> 01:38:47
about their code that they have followed

01:38:44 --> 01:38:49
all the style rules maybe it's a fast

01:38:46 --> 01:38:51
way for a new developer joining a team

01:38:48 --> 01:38:53
to learn the style rules right yeah

01:38:50 --> 01:38:56
there's definitely that but the best use

01:38:52 --> 01:38:59
of linter is probably

01:38:55 --> 01:39:03
not so much to to sort of

01:38:58 --> 01:39:05
enforce team uniformity but to actually

01:39:02 --> 01:39:08
help Developers

01:39:04 --> 01:39:11
catch bugs that the compilers for

01:39:07 --> 01:39:14
whatever reason don't catch and there's

01:39:10 --> 01:39:16
lots of that in Python and so uh but a

01:39:13 --> 01:39:20
static type checker

01:39:15 --> 01:39:22
focuses on a particular aspect of the

01:39:19 --> 01:39:24
linting which

01:39:21 --> 01:39:26
I mean it might probably doesn't care

01:39:23 --> 01:39:28
how you name your classes and variables

01:39:25 --> 01:39:31
uh

01:39:27 --> 01:39:34
but it is meticulous about when you say

01:39:30 --> 01:39:36
that there was an integer here and

01:39:33 --> 01:39:38
you're passing a string there it will

01:39:35 --> 01:39:39
tell you hey that string is not an

01:39:37 --> 01:39:42
integer so something's wrong either

01:39:38 --> 01:39:45
you were incorrect when you said

01:39:41 --> 01:39:47
it was an integer or you're incorrect

01:39:44 --> 01:39:49
when you're passing into string if this

01:39:46 --> 01:39:51
a race of static type Checkers is

01:39:48 --> 01:39:53
omebody winning as you said it's

01:39:50 --> 01:39:56
interesting that the companies didn't

01:39:52 --> 01:39:58
choose to invest in this uh centralized

01:39:55 --> 01:40:01
evelopment

01:39:57 --> 01:40:02
of my pie is is there a future for my

01:40:00 --> 01:40:05
pie

01:40:01 --> 01:40:06
what do you see as the oh well one of

01:40:04 --> 01:40:11
the companies went out and everybody

01:40:05 --> 01:40:14
uses like uh Pi type whatever Google's

01:40:10 --> 01:40:17
is called well Microsoft is hoping that

01:40:13 --> 01:40:20
uh Microsoft's horse in that race called

01:40:16 --> 01:40:25
pyrite is going to win by right right

01:40:19 --> 01:40:29
like r i g h t correct yeah my my all my

01:40:24 --> 01:40:32
word processors tend to typo correct

01:40:28 --> 01:40:33
hat as pyrite the name of the I don't

01:40:31 --> 01:40:37
know what it is

01:40:32 --> 01:40:38
ome kind of semi-precious metal all

01:40:36 --> 01:40:41
right

01:40:37 --> 01:40:44
I love it okay so okay that's the

01:40:40 --> 01:40:46
Microsoft hope but it okay so let me ask

01:40:43 --> 01:40:48
the question a different way is there

01:40:45 --> 01:40:50
going to be ever a future whereas the

01:40:47 --> 01:40:52
static type Checker gets integrated into

01:40:49 --> 01:40:52
the language

01:40:52 --> 01:41:00
nobody is currently excited about

01:40:57 --> 01:41:03
doing any work towards that that doesn't

01:40:59 --> 01:41:06
mean that five or ten years from now

01:41:02 --> 01:41:07
the situation isn't

01:41:05 --> 01:41:08
different

01:41:06 --> 01:41:11
uh

01:41:07 --> 01:41:14
at the moment

01:41:10 --> 01:41:18
all the static type checkers

01:41:13 --> 01:41:22
uh still evolve at a much higher speed

01:41:18 --> 01:41:26
than Python and its annotation syntax

01:41:21 --> 01:41:28
evolve you get a new release of python

01:41:25 --> 01:41:31
ce a year those are the only times

01:41:27 --> 01:41:34
that you can introduce new annotation

01:41:30 --> 01:41:36
syntax and there's there are always

01:41:33 --> 01:41:39
people who invent new new annotation

01:41:36 --> 01:41:42
syntax that they're trying to push

01:41:38 --> 01:41:45
uh and worse

01:41:41 --> 01:41:48
once we've all agreed that we are going

01:41:44 --> 01:41:49
to put some new syntax in we can never

01:41:47 --> 01:41:52
take it back

01:41:48 --> 01:41:54
at least a sort of deprecating an

01:41:51 --> 01:41:56
existing feature takes many releases

01:41:53 --> 01:41:58
because you have to assume that people

01:41:55 --> 01:41:59
started using it as soon as we announced

01:41:57 --> 01:42:01
it

01:41:58 --> 01:42:03
and then you can't take it away from

01:42:00 --> 01:42:06
them right away you have to start

01:42:02 --> 01:42:09
elling them well this will go away but

01:42:05 --> 01:42:11
we're not gonna commit tell you that

01:42:08 --> 01:42:12
it's an error yet and then later it's

01:42:10 --> 01:42:14
going to be a warning and then

01:42:11 --> 01:42:17
eventually three releases in the future

01:42:13 --> 01:42:19
maybe we remove it

01:42:16 --> 01:42:21
on the other hand the typical static

01:42:18 --> 01:42:25
type checker

01:42:20 --> 01:42:25
still has a release like

01:42:24 --> 01:42:31
very month every two months certainly

01:42:28 --> 01:42:35
many times a year

01:42:30 --> 01:42:36
uh some type Checkers also include a

01:42:34 --> 01:42:39
bunch of

01:42:35 --> 01:42:43
experimental ideas that aren't official

01:42:38 --> 01:42:46
standard python syntax yet yeah uh the

01:42:42 --> 01:42:48
static type Checkers also just get

01:42:45 --> 01:42:51
better at discovering

01:42:47 --> 01:42:54
things that that sort of are unspecified

01:42:50 --> 01:42:56
by the language but that sort of could

01:42:53 --> 01:42:59
make sense and so each static type

01:42:55 --> 01:43:02
Checker actually has its sort of strong

01:42:58 --> 01:43:04
and weak points so it's cool it's like a

01:43:01 --> 01:43:06
laboratory of experiments yep Microsoft

01:43:03 --> 01:43:07
Google and all and you get to see and

01:43:05 --> 01:43:11
you see that everywhere right because

01:43:06 --> 01:43:13
there's not one single uh JavaScript in

01:43:10 --> 01:43:16
engine either there is one in Chrome

01:43:12 --> 01:43:18
there is one in Safari there's one in

01:43:15 --> 01:43:20
Firefox

01:43:17 --> 01:43:22
but that said you said there's not

01:43:19 --> 01:43:24
interest I think there is a lot of

01:43:21 --> 01:43:28
interest in type hinting right

01:43:23 --> 01:43:29
um in the pep 484. actually like how

01:43:27 --> 01:43:32
many people use that do you have a sense

01:43:28 --> 01:43:35
how many people use because it's

01:43:31 --> 01:43:37
optional it's the sugar I can't put a

01:43:34 --> 01:43:40
number on it but

01:43:36 --> 01:43:42
from the number of packages that do

01:43:39 --> 01:43:45
interesting things with it at runtime

01:43:41 --> 01:43:48
and the fact that there are like

01:43:44 --> 01:43:49
now three or four very mature type

01:43:47 --> 01:43:52
checkers

01:43:48 --> 01:43:54
that each have their their segment of

01:43:51 --> 01:43:57
the market and oh and then there is a

01:43:53 --> 01:43:59
pie charm which has a sort of more

01:43:56 --> 01:44:01
heuristic based type Checker that also

01:43:58 --> 01:44:04
supports the same syntax

01:44:00 --> 01:44:07
my assumption is that

01:44:03 --> 01:44:09
many many people developing python

01:44:06 --> 01:44:11
software professionally

01:44:08 --> 01:44:14
for some kind of

01:44:10 --> 01:44:18
production situation are using a static

01:44:13 --> 01:44:21
type checker especially any anybody who

01:44:17 --> 01:44:24
has a continuous integration cycle

01:44:20 --> 01:44:27
probably has a

01:44:23 --> 01:44:29
one of the steps in in there their

01:44:26 --> 01:44:31
testing routine that that happens for

01:44:28 --> 01:44:35
basically every every commit

01:44:30 --> 01:44:40
uh is run a static type checker and in

01:44:34 --> 01:44:40
most in most cases that will be my pie

01:44:39 --> 01:44:46
so I think it's pretty popular topic

01:44:42 --> 01:44:50
according to this webpage

01:44:45 --> 01:44:52
20 to 30 percent of Python 3 code bases

01:44:49 --> 01:44:54
are using type hints

01:44:51 --> 01:44:56
wow I wonder how they measured that did

01:44:53 --> 01:44:58
they just scan all of GitHub

01:44:55 --> 01:45:01
yeah that's what it looks like yeah they

01:44:57 --> 01:45:03
did a quick sentence all of but like a

01:45:00 --> 01:45:06
random sampling

01:45:02 --> 01:45:10
so you mentioned pie charm let me ask

01:45:05 --> 01:45:14
you the uh the big subjective question

01:45:09 --> 01:45:16
what's the best IDE for Python and

01:45:13 --> 01:45:18
you're extremely biased now that you're

01:45:15 --> 01:45:22
with Microsoft

01:45:17 --> 01:45:26
um is it pie charm vs code Vim or emex

01:45:21 --> 01:45:28
historically I actually uh started out

01:45:25 --> 01:45:30
with using Vim but when it was still

01:45:27 --> 01:45:34
called VI

01:45:29 --> 01:45:37
uh for a very long time I think from the

01:45:33 --> 01:45:40
arly 80s to uh

01:45:36 --> 01:45:45
I'd say two years ago

01:45:39 --> 01:45:49
I was emacs user nice between I'd say

01:45:44 --> 01:45:53
2013 and 2018

01:45:48 --> 01:45:56
I dabbled with pie charm

01:45:52 --> 01:45:58
uh mostly because it had

01:45:55 --> 01:46:00
a couple of features I mean

01:45:57 --> 01:46:04
pie charm

01:45:59 --> 01:46:06
is like deriving an 18-wheeler truck

01:46:03 --> 01:46:09
whereas emacs is more

01:46:05 --> 01:46:09
foreign

01:46:08 --> 01:46:15
driving uh your comfortable Toyota car

01:46:12 --> 01:46:17
that's that's that that you've had for a

01:46:14 --> 01:46:20
hundred thousand miles and you know what

01:46:16 --> 01:46:23
every little rattle of the car means

01:46:19 --> 01:46:24
I was very comfortable in emacs uh but

01:46:22 --> 01:46:27
here were certain things it couldn't do

01:46:23 --> 01:46:31
it wasn't very good at at sort of at

01:46:26 --> 01:46:34
least the way I had configured it

01:46:30 --> 01:46:37
I didn't have very good Tooling in emacs

01:46:33 --> 01:46:40
for finding a definition of a function

01:46:36 --> 01:46:44
got it when I was at Dropbox

01:46:39 --> 01:46:45
exploring a 5 million line python code

01:46:43 --> 01:46:49
base

01:46:44 --> 01:46:51
uh just grabbing all that code for where

01:46:48 --> 01:46:53
they're where is there a class Fubar

01:46:50 --> 01:46:56
Well turns out that if you grab all five

01:46:52 --> 01:46:58
million lines of code there are many

01:46:55 --> 01:47:02
classes with the same name

01:46:57 --> 01:47:05
and so pycharm sort of once once you've

01:47:01 --> 01:47:09
fired it up and once it's indexed your

01:47:04 --> 01:47:12
epository uh was very helpful but as

01:47:08 --> 01:47:15
oon as I had to edit code I would jump

01:47:11 --> 01:47:17
back to emex and do all my editing there

01:47:14 --> 01:47:20
because I could type much faster and

01:47:16 --> 01:47:22
switch between files when I was when I

01:47:19 --> 01:47:24
knew which file I wanted much much

01:47:21 --> 01:47:27
quicker and I never really got used to

01:47:23 --> 01:47:30
the the whole pie charm user interface

01:47:26 --> 01:47:32
yeah I feel torn in that same kind of

01:47:29 --> 01:47:34
way because I've used pycharm off and on

01:47:31 --> 01:47:37
exactly in that same way

01:47:33 --> 01:47:38
and I feel like I'm just being an old

01:47:36 --> 01:47:40
grumpy man

01:47:37 --> 01:47:42
for not learning how to quickly switch

01:47:39 --> 01:47:43
between files and all that kind of stuff

01:47:41 --> 01:47:45
I feel like that has to do with

01:47:42 --> 01:47:46
shortcuts that has to do with um I mean

01:47:44 --> 01:47:48
you just have to get accustomed just

01:47:45 --> 01:47:50
like with touch typing yeah you have to

01:47:47 --> 01:47:53
just want to to learn that I mean if you

01:47:49 --> 01:47:55
don't need it much you don't need touch

01:47:52 --> 01:47:57
typing either you can type with two

01:47:54 --> 01:47:59
fingers just fine in the short term but

01:47:56 --> 01:48:02
in the long term your life will become

01:47:58 --> 01:48:04
better psychologically and productivity

01:48:01 --> 01:48:06
wise if you learn how to type with 10

01:48:03 --> 01:48:09
fingers if you do a lot of keyboard

01:48:06 --> 01:48:13
input before everyone emails and stuff

01:48:08 --> 01:48:14
right like you look at the the next 20

01:48:12 --> 01:48:17
30 years of your life you have to

01:48:13 --> 01:48:20
anticipate where technology is going

01:48:16 --> 01:48:22
um do you want to invest in handwriting

01:48:19 --> 01:48:25
notes probably not more and more people

01:48:21 --> 01:48:27
are doing uh typing versus handwriting

01:48:24 --> 01:48:29
notes so you can anticipate that so

01:48:26 --> 01:48:30
there's no reason to actually practice

01:48:28 --> 01:48:32
handwriting there's more reason to

01:48:29 --> 01:48:34
practice typing

01:48:31 --> 01:48:36
you can actually estimate back to the

01:48:33 --> 01:48:39
spreadsheet the number of

01:48:35 --> 01:48:43
paragraphs sentences or words you write

01:48:38 --> 01:48:43
for the rest of your life

01:48:45 --> 01:48:51
yes I mean all of that is not actual

01:48:48 --> 01:48:53
ike converting to a spreadsheet but

01:48:50 --> 01:48:55
it's a gut feeling like I have the same

01:48:52 --> 01:48:57
kind of gut feeling about books I've

01:48:54 --> 01:49:00
almost exclusively switched to Kindle

01:48:56 --> 01:49:03
now so ebook readers

01:48:59 --> 01:49:05
even though I still love and probably

01:49:02 --> 01:49:06
always will the smell the feel of a

01:49:04 --> 01:49:08
physical book

01:49:05 --> 01:49:10
and

01:49:07 --> 01:49:12
you the reason I switched to Kindle is

01:49:09 --> 01:49:16
like all right well this is really

01:49:11 --> 01:49:19
Paving the future is going to be digital

01:49:15 --> 01:49:20
in terms of consuming books and content

01:49:18 --> 01:49:22
of that nature so you should get you

01:49:19 --> 01:49:24
know you should let your brain get

01:49:21 --> 01:49:27
accustomed to that experience

01:49:23 --> 01:49:30
in that same way it feels like pie charm

01:49:26 --> 01:49:34
or vs code I think pycharm is is the the

01:49:29 --> 01:49:37
most sort of sophisticated featureful uh

01:49:33 --> 01:49:40
python ID it feels like I should

01:49:36 --> 01:49:42
probably at some point very soon switch

01:49:39 --> 01:49:45
entire like I'm not allowed to use

01:49:41 --> 01:49:47
anything else for python than this ID or

01:49:44 --> 01:49:49
vs code it doesn't matter but walk away

01:49:46 --> 01:49:51
from emacs for this particular

01:49:48 --> 01:49:53
application because I think I'm limiting

01:49:50 --> 01:49:56
myself in the same way that using two

01:49:52 --> 01:49:58
fingers for typing is limiting myself

01:49:55 --> 01:50:01
it's um this is a therapy session this

01:49:57 --> 01:50:02
n't I'm not even asking questions

01:50:00 --> 01:50:05
but I'm sure a lot of people are not

01:50:01 --> 01:50:08
going to stop you uh

01:50:04 --> 01:50:10
I I think that that sort of everybody

01:50:07 --> 01:50:14
has to decide for themselves which one

01:50:09 --> 01:50:16
they want to to invest more time in

01:50:13 --> 01:50:20
I actually

01:50:15 --> 01:50:23
ended up giving vs code a very tentative

01:50:19 --> 01:50:25
try when I started out at Microsoft and

01:50:22 --> 01:50:29
really liking it

01:50:24 --> 01:50:31
and it sort of it took me a while before

01:50:28 --> 01:50:34
I realized why that was

01:50:30 --> 01:50:36
but and and I think that actually the

01:50:33 --> 01:50:39
founders of vs code may not necessarily

01:50:36 --> 01:50:43
agree with me on this

01:50:38 --> 01:50:47
but to me vs code is in a sense the

01:50:42 --> 01:50:49
spiritual successor of emacs

01:50:46 --> 01:50:51
because

01:50:48 --> 01:50:53
as you probably know as an old emacs

01:50:51 --> 01:50:56
hack

01:50:52 --> 01:50:59
the the key part of emacs is that it

01:50:55 --> 01:51:03
's mostly written in in lisp

01:50:58 --> 01:51:06
and that that sort of new features of of

01:51:02 --> 01:51:10
emacs usually update all the list

01:51:05 --> 01:51:12
packages and add new list packages and

01:51:09 --> 01:51:15
oh yeah there's also

01:51:11 --> 01:51:17
me very obscure thing improved in the

01:51:14 --> 01:51:19
part that's not in lisp

01:51:16 --> 01:51:21
but that's usually not why I would

01:51:18 --> 01:51:25
upgrade to a new version of emacs

01:51:20 --> 01:51:27
there's a core implementation

01:51:24 --> 01:51:30
that that sort of

01:51:26 --> 01:51:32
can read a file and it can put bits on

01:51:29 --> 01:51:35
the screen and it can sort of manage

01:51:31 --> 01:51:39
memory and buffers and then what makes

01:51:34 --> 01:51:42
it an editor full of features is all the

01:51:38 --> 01:51:44
list packages and of course the design

01:51:41 --> 01:51:47
of how the list packages interact with

01:51:43 --> 01:51:51
each other and with that that sort of

01:51:46 --> 01:51:53
that base layer of of the the core

01:51:50 --> 01:51:56
immutable engine without almost

01:51:52 --> 01:52:00
everything in that core engine in emacs

01:51:55 --> 01:52:03
case can still be overridden or replaced

01:51:59 --> 01:52:03
and so

01:52:02 --> 01:52:10
vs code has a similar architecture where

01:52:06 --> 01:52:13
there is like

01:52:09 --> 01:52:15
a base engine that you have no control

01:52:12 --> 01:52:17
over

01:52:14 --> 01:52:22
I mean it's open source but nobody

01:52:16 --> 01:52:24
except the people who work on that part

01:52:21 --> 01:52:27
changes it much

01:52:23 --> 01:52:29
uh and it has a sort of a package

01:52:26 --> 01:52:32
manager

01:52:28 --> 01:52:35
and a whole series of interfaces for

01:52:31 --> 01:52:38
packages and an additional series of

01:52:34 --> 01:52:40
conventions for how packages should

01:52:37 --> 01:52:41
interact with the lower layers and with

01:52:39 --> 01:52:44
each other

01:52:40 --> 01:52:46
and Powerful primitive operations that

01:52:43 --> 01:52:50
let you

01:52:45 --> 01:52:53
move the cursor around or select pieces

01:52:49 --> 01:52:56
of text or delete pieces of text or

01:52:52 --> 01:52:59
interact with the keyboard and mouse and

01:52:55 --> 01:53:02
what other peripherals you have

01:52:58 --> 01:53:06
and and so the sort of the the extreme

01:53:01 --> 01:53:10
xtensibility and the package ecosystem

01:53:05 --> 01:53:13
that you that you see in vs code is a is

01:53:09 --> 01:53:16
a mirror of very similar architectural

01:53:12 --> 01:53:19
features in emacs well I'll have to give

01:53:15 --> 01:53:22
it a serious try because uh as far as

01:53:18 --> 01:53:23
ort of the hype and the excitement in

01:53:21 --> 01:53:26
the general programming Community vs

01:53:22 --> 01:53:27
code seems to dominate the interesting

01:53:25 --> 01:53:29
thing about

01:53:26 --> 01:53:32
pie charm and

01:53:28 --> 01:53:35
uh what is it PHP storm which are these

01:53:31 --> 01:53:36
jet brains uh specific IDs that are

01:53:34 --> 01:53:39
designed for one programming language

01:53:35 --> 01:53:42
it's interesting to

01:53:38 --> 01:53:46
when an ID is specialized right they're

01:53:41 --> 01:53:49
usually actually just specializations of

01:53:45 --> 01:53:50
IntelliJ because underneath it's all the

01:53:48 --> 01:53:54
same

01:53:49 --> 01:53:56
diting Engine with different

01:53:53 --> 01:53:59
veneer on top

01:53:55 --> 01:54:01
where in vs code

01:53:58 --> 01:54:03
many things you do

01:54:00 --> 01:54:06
require

01:54:02 --> 01:54:09
loading third-party extensions

01:54:05 --> 01:54:13
in pycharm it is possible to have

01:54:08 --> 01:54:16
third-party extensions but it is it is a

01:54:12 --> 01:54:18
struggle to create one yes and it's not

01:54:15 --> 01:54:21
part of the culture all that kind of

01:54:17 --> 01:54:23
stuff yeah we that I remember that it

01:54:20 --> 01:54:26
might have been five years ago or so we

01:54:22 --> 01:54:29
re trying to get some better my Pi

01:54:25 --> 01:54:31
ntegration into pie charm because my

01:54:28 --> 01:54:33
pie is sort of python tooling and

01:54:30 --> 01:54:36
pycharm

01:54:32 --> 01:54:39
had had its own

01:54:35 --> 01:54:42
type checking heuristic thing that we

01:54:38 --> 01:54:44
wanted to replace with uh something

01:54:41 --> 01:54:47
based on my pie because that was what we

01:54:43 --> 01:54:50
re using in the company and it for the

01:54:46 --> 01:54:53
guy who was writing that

01:54:49 --> 01:54:55
by charm extension it was really a

01:54:52 --> 01:54:58
struggle to to sort of find

01:54:54 --> 01:55:02
ocumentation and get the development

01:54:57 --> 01:55:05
workflow going and and debug his code

01:55:01 --> 01:55:06
and all that so that that was was not a

01:55:04 --> 01:55:09
pleasant experience

01:55:05 --> 01:55:12
let me talk to you about parallelism

01:55:08 --> 01:55:14
in your post titled reasoning about

01:55:11 --> 01:55:16
async IO semaphore

01:55:13 --> 01:55:18
you talk about a fast food restaurant

01:55:15 --> 01:55:19
Silicon Valley that has only one table

01:55:17 --> 01:55:21
is this a real thing I just wanted to

01:55:18 --> 01:55:23
ask you about that is that just like a

01:55:20 --> 01:55:26
metaphor you're using or is that an

01:55:22 --> 01:55:28
actual restaurant in Silicon Valley it

01:55:25 --> 01:55:30
was it was a metaphor of course okay

01:55:27 --> 01:55:33
I can imagine such a restaurant so for

01:55:29 --> 01:55:36
people who don't then read the thing you

01:55:32 --> 01:55:39
should you should but it was uh

01:55:35 --> 01:55:42
idea of a restaurant where there's only

01:55:38 --> 01:55:44
one table and you show up one at a time

01:55:41 --> 01:55:46
and you're prepared and I actually

01:55:43 --> 01:55:49
looked it up and there is restaurants

01:55:45 --> 01:55:51
like this throughout the world and it

01:55:48 --> 01:55:53
just seems like a fascinating idea you

01:55:50 --> 01:55:54
stand in line you show up there's one

01:55:52 --> 01:55:57
table

01:55:53 --> 01:55:59
they um they ask you all kinds of

01:55:56 --> 01:56:01
questions they cook just for you that's

01:55:58 --> 01:56:04
fascinating it sounds like you'd find

01:56:00 --> 01:56:06
places like that in Tokyo it sounds like

01:56:03 --> 01:56:08
a very Japanese thing or in the Bay Area

01:56:05 --> 01:56:09
there are proper places that probably

01:56:07 --> 01:56:11
more or less work like that but I've

01:56:08 --> 01:56:13
never eaten at such a place the

01:56:10 --> 01:56:15
fascinating thing is you propose is the

01:56:12 --> 01:56:20
fast food this is all for a burger it

01:56:14 --> 01:56:23
was one of my rare sort of more literary

01:56:19 --> 01:56:26
or poetic moments where I thought I'll

01:56:22 --> 01:56:28
just open with a crazy example to

01:56:25 --> 01:56:31
catch your attention and the rest is

01:56:27 --> 01:56:34
very dry stuff about uh locks and

01:56:30 --> 01:56:36
semaphores and how uh semaphore is a

01:56:33 --> 01:56:38
generalization of a lock well it was

01:56:35 --> 01:56:40
very poetic and well delivered and it

01:56:37 --> 01:56:41
actually made me wonder if it's real or

01:56:39 --> 01:56:44
not because you don't make that explicit

01:56:40 --> 01:56:46
and it feels like it could be true and

01:56:43 --> 01:56:48
in fact I wouldn't be surprised if

01:56:45 --> 01:56:49
somebody like listens to this and knows

01:56:47 --> 01:56:52
exactly a restaurant like this in

01:56:48 --> 01:56:55
Silicon Valley anyway can we step back

01:56:51 --> 01:56:57
and can you just talk about parallelism

01:56:54 --> 01:57:00
concurrency threading

01:56:56 --> 01:57:02
asynchronous all these different terms

01:56:59 --> 01:57:04
what is it sort of a high philosophical

01:57:01 --> 01:57:07
evel the the fisherman is back in the

01:57:03 --> 01:57:10
boat well the idea is if the fisherman

01:57:06 --> 01:57:13
has uh two fishing rods

01:57:09 --> 01:57:16
uh since fishing is mostly a matter of

01:57:12 --> 01:57:18
waiting for a fish to nibble well it

01:57:15 --> 01:57:20
depends on how you do it actually but if

01:57:17 --> 01:57:22
you had two if if you're doing the style

01:57:19 --> 01:57:26
of fishing where you sort of you you

01:57:21 --> 01:57:28
throw it out and then you let it sit for

01:57:25 --> 01:57:31
a while until maybe you see a nibble one

01:57:27 --> 01:57:32
fisherman can easily run two or three or

01:57:30 --> 01:57:35
four

01:57:31 --> 01:57:37
fishing rods and so as long as you can

01:57:34 --> 01:57:39
afford the equipment you can catch four

01:57:36 --> 01:57:42
times as many fish by

01:57:38 --> 01:57:46
a small investment in four fishing rods

01:57:41 --> 01:57:48
and so since your time you sort of say

01:57:45 --> 01:57:51
ou have all Saturday to go fishing if

01:57:47 --> 01:57:54
you can catch four times as much fish

01:57:50 --> 01:57:55
you have a much higher productivity and

01:57:53 --> 01:57:57
that's actually I think how deep sea

01:57:54 --> 01:57:58
fishing is done you could just have a

01:57:56 --> 01:58:02
rod and you put in a hole so you could

01:57:57 --> 01:58:03
have many rods uh what is there an

01:58:01 --> 01:58:05
interesting difference between

01:58:02 --> 01:58:09
parallelism and concurrency

01:58:04 --> 01:58:11
and asynchronous is there one subset of

01:58:08 --> 01:58:12
the other to you like how do you think

01:58:10 --> 01:58:16
about these terms in the computer World

01:58:12 --> 01:58:20
there is a big difference when people

01:58:15 --> 01:58:22
are talking about parallelism uh like a

01:58:19 --> 01:58:25
parallel computer

01:58:21 --> 01:58:29
that's usually really

01:58:24 --> 01:58:31
several complete CPUs that are sort of

01:58:28 --> 01:58:35
tied together and and

01:58:30 --> 01:58:36
share something like memory or an i o

01:58:34 --> 01:58:40
bus

01:58:35 --> 01:58:42
uh concurrency can be a much more

01:58:39 --> 01:58:44
abstract concept

01:58:41 --> 01:58:48
where

01:58:43 --> 01:58:50
you have the illusion that things happen

01:58:47 --> 01:58:52
simultaneously but what the computer

01:58:49 --> 01:58:55
actually does is

01:58:51 --> 01:58:57
it spends a little time running some

01:58:54 --> 01:58:58
this program for a while and then it

01:58:56 --> 01:59:00
spends some time running that program

01:58:57 --> 01:59:03
for a while and then spending some time

01:58:59 --> 01:59:06
for the third program for a while

01:59:02 --> 01:59:09
the parallelism is the reality and

01:59:06 --> 01:59:11
concurrency is part reality part

01:59:08 --> 01:59:15
illusion yeah parallelism typically

01:59:10 --> 01:59:16
implies that there is multiple copies of

01:59:14 --> 01:59:18
the hardware

01:59:15 --> 01:59:20
you write that implementing

01:59:17 --> 01:59:23
synchronization Primitives is hard in

01:59:19 --> 01:59:25
that blog post and you talk about locks

01:59:22 --> 01:59:27
and semaphores why is it hard to

01:59:24 --> 01:59:31
implement synchronization Primitives

01:59:26 --> 01:59:35
because at the conscious level our

01:59:30 --> 01:59:39
brains are not trained to to sort of

01:59:34 --> 01:59:42
keep track of multiple things at the

01:59:38 --> 01:59:44
same time like obviously you can walk

01:59:41 --> 01:59:47
and chew gum at the same time

01:59:43 --> 01:59:50
because they're both activities that

01:59:46 --> 01:59:51
require only a little bit of your

01:59:49 --> 01:59:53
conscious

01:59:50 --> 01:59:54
activity but try balancing your

01:59:52 --> 01:59:58
checkbook

01:59:53 --> 02:00:01
and watching a murder mystery on TV yeah

01:59:57 --> 02:00:04
you'll mix up the digits or you'll miss

02:00:00 --> 02:00:05
an essential clue on in the TV show

02:00:03 --> 02:00:08
so why does it matter that the

02:00:04 --> 02:00:11
programmer the human

02:00:07 --> 02:00:13
is uh is bad because the programmer is

02:00:10 --> 02:00:15
at least with the current state of the

02:00:12 --> 02:00:19
art is responsible for

02:00:14 --> 02:00:21
writing the code correctly and it's hard

02:00:18 --> 02:00:23
enough

02:00:20 --> 02:00:25
to keep track of

02:00:22 --> 02:00:28
a recipe that you just

02:00:24 --> 02:00:32
execute one step at a time

02:00:27 --> 02:00:36
chop the carrots then peel the potatoes

02:00:31 --> 02:00:38
mix the icing you need your whole brain

02:00:35 --> 02:00:42
when you're when you're reading a piece

02:00:37 --> 02:00:46
of code what what is going on okay we're

02:00:41 --> 02:00:49
loading the number of mermaids in

02:00:45 --> 02:00:51
variable a and the number of mermen in

02:00:48 --> 02:00:54
variable B and now we take the average

02:00:51 --> 02:00:54
or whatever

02:00:54 --> 02:01:00
metaphor to Metaphor I like it you have

02:00:57 --> 02:01:04
to keep in your head what is an a what

02:00:59 --> 02:01:05
is in B what is in C uh hopefully you

02:01:03 --> 02:01:08
have better names

02:01:04 --> 02:01:12
and that is challenging enough

02:01:07 --> 02:01:15
if you have two different

02:01:11 --> 02:01:18
pieces of code that are are sort of

02:01:14 --> 02:01:20
being executed

02:01:17 --> 02:01:22
simultaneously weather is using the

02:01:19 --> 02:01:24
parallel or the concurrent

02:01:21 --> 02:01:26
approach

02:01:23 --> 02:01:29
if like

02:01:25 --> 02:01:31
a is the number of fishermen and B is

02:01:28 --> 02:01:34
the number of programmers

02:01:30 --> 02:01:36
but in another part of the code a is the

02:01:33 --> 02:01:37
number of mermaids and B is the number

02:01:35 --> 02:01:41
of merman

02:01:36 --> 02:01:43
d somehow that's the same variable if

02:01:40 --> 02:01:46
you do it sequentially if first you do

02:01:42 --> 02:01:48
your mermaid mer people computation and

02:01:45 --> 02:01:51
then you do your people in the boat

02:01:47 --> 02:01:53
computation it doesn't matter that the

02:01:50 --> 02:01:55
variables are called A and B and that is

02:01:52 --> 02:01:57
literally the same variable because you

02:01:54 --> 02:01:59
're done with one use of that

02:01:56 --> 02:02:02
variable but when you mix them together

02:01:58 --> 02:02:04
suddenly

02:02:01 --> 02:02:06
the number of more people replaces the

02:02:03 --> 02:02:10
number of fishermen and your computation

02:02:05 --> 02:02:11
goes dramatically wrong and there's all

02:02:09 --> 02:02:14
kinds of ordering

02:02:10 --> 02:02:15
of operations that could result in the

02:02:13 --> 02:02:17
assignment of those variables and so you

02:02:14 --> 02:02:20
have to anticipate all possible

02:02:16 --> 02:02:23
orderings and you think you're smart and

02:02:19 --> 02:02:26
you'll put a lock around it and in

02:02:22 --> 02:02:29
practice in terms of bugs per lineup per

02:02:25 --> 02:02:31
a thousand lines of code

02:02:28 --> 02:02:35
this is an area where everything is

02:02:30 --> 02:02:38
worse so a lock is a mechanism by which

02:02:34 --> 02:02:42
you forbid only one

02:02:37 --> 02:02:44
Chef can access the oven at a time

02:02:41 --> 02:02:47
something like that and then semaphores

02:02:43 --> 02:02:49
allow you to do what multiple ovens

02:02:46 --> 02:02:50
that's not the bad idea because if

02:02:48 --> 02:02:52
you're sort of

02:02:49 --> 02:02:55
if you're preparing if you're baking

02:02:51 --> 02:02:57
cakes and you have multiple people all

02:02:54 --> 02:02:59
baking cakes but there's only one oven

02:02:56 --> 02:03:01
yeah then maybe you can tell that the

02:02:58 --> 02:03:04
oven is in use but maybe it's preheating

02:03:00 --> 02:03:07
uh and so you have to maybe maybe you

02:03:03 --> 02:03:10
make a sign that says oven and use

02:03:06 --> 02:03:11
uh and you flip the sign over and it

02:03:09 --> 02:03:13
says often is free when you're done

02:03:10 --> 02:03:16
baking your cake

02:03:12 --> 02:03:20
uh that's a lock that's sort of and and

02:03:15 --> 02:03:22
what do you do when you have two ovens

02:03:19 --> 02:03:25
or maybe you have ten ovens do you you

02:03:21 --> 02:03:27
can put a separate sign on each oven or

02:03:24 --> 02:03:29
maybe you can sort of someone who comes

02:03:26 --> 02:03:32
in wants to see at a glance

02:03:28 --> 02:03:34
and maybe there's an electronic sign

02:03:31 --> 02:03:35
that says uh there are still five ovens

02:03:33 --> 02:03:39
available

02:03:35 --> 02:03:42
uh or maybe they're already

02:03:38 --> 02:03:44
three people waiting for an oven so you

02:03:41 --> 02:03:46
can

02:03:43 --> 02:03:48
if you see an oven that's not in use

02:03:45 --> 02:03:50
it's already reserved for someone else

02:03:47 --> 02:03:52
who got in line first

02:03:49 --> 02:03:53
and that's sort of what what what the

02:03:51 --> 02:03:57
restaurant metaphor was trying to

02:03:52 --> 02:03:59
explain yeah and so you're now tasks

02:03:56 --> 02:04:02
you're sitting as a designer of python

02:03:58 --> 02:04:04
with a team of brilliant core developers

02:04:01 --> 02:04:06
and have to try to figure out to what

02:04:03 --> 02:04:09
degree can any of these ideas be

02:04:05 --> 02:04:12
integrated and not so maybe this is a

02:04:08 --> 02:04:16
good time to ask what is async IO

02:04:11 --> 02:04:20
and how has it evolved since Python 3.4

02:04:15 --> 02:04:24
wow yeah so we had this really old

02:04:19 --> 02:04:27
library for for doing things

02:04:23 --> 02:04:30
concurrently especially things that had

02:04:26 --> 02:04:35
to do with IO and uh networking i o was

02:04:29 --> 02:04:37
especially uh sort of a popular topic

02:04:34 --> 02:04:41
and

02:04:36 --> 02:04:44
in the python standard Library we had a

02:04:40 --> 02:04:48
brief period where there was lots of

02:04:43 --> 02:04:52
development and I think it was late 90s

02:04:47 --> 02:04:54
maybe early 2000s and like

02:04:51 --> 02:04:56
two little modules were added that were

02:04:53 --> 02:04:59
the state of the Art of Doing

02:04:55 --> 02:05:01
asynchronous IO or sort of non-blocking

02:04:58 --> 02:05:04
AIO which means that you can keep

02:05:00 --> 02:05:06
multiple network connections open and

02:05:03 --> 02:05:09
sort of service them all in parallel

02:05:05 --> 02:05:11
ike a typical web server does so iOS

02:05:08 --> 02:05:15
input and outputs you're writing either

02:05:10 --> 02:05:17
to the network network connection or

02:05:14 --> 02:05:21
eading and writing to a hard drive the

02:05:16 --> 02:05:23
story also possible and you can do uh

02:05:20 --> 02:05:25
the ideas you could do to multiple while

02:05:22 --> 02:05:27
also doing computation

02:05:24 --> 02:05:30
process of running some code that does

02:05:26 --> 02:05:33
ome fancy stuff yeah like when you're

02:05:29 --> 02:05:36
writing a web server when a request

02:05:32 --> 02:05:38
comes in a user sort of needs to see a

02:05:35 --> 02:05:40
particular web page

02:05:37 --> 02:05:43
uh you have to find that page maybe in

02:05:39 --> 02:05:46
the database and format it properly and

02:05:42 --> 02:05:48
send it back to the client and

02:05:45 --> 02:05:50
there's a lot of waiting waiting for the

02:05:47 --> 02:05:52
database waiting for the network and so

02:05:49 --> 02:05:55
you can handle hundreds or thousands or

02:05:51 --> 02:05:58
millions of requests

02:05:54 --> 02:06:00
concurrently on one machine anyway waste

02:05:57 --> 02:06:03
of doing that in Python were kind of

02:05:59 --> 02:06:05
stagnated and uh

02:06:02 --> 02:06:08
I forget it might have been around

02:06:04 --> 02:06:12
2012 2014

02:06:07 --> 02:06:16
uh when someone for the umpteenth time

02:06:11 --> 02:06:18
actually said these async chat and async

02:06:15 --> 02:06:21
ore modules that you have in the

02:06:17 --> 02:06:23
standard Library are not quite enough to

02:06:20 --> 02:06:27
solve my particular problem

02:06:22 --> 02:06:29
can we add one tiny little feature and

02:06:26 --> 02:06:31
everybody said no that stuff is not too

02:06:28 --> 02:06:34
but you're not supposed to use that

02:06:30 --> 02:06:35
stuff write your own using uh

02:06:33 --> 02:06:37
third-party library and then everybody

02:06:34 --> 02:06:39
started a debate about what the rights

02:06:36 --> 02:06:44
third-party library was

02:06:38 --> 02:06:48
and somehow I I felt that

02:06:43 --> 02:06:52
was actually a cue for well maybe

02:06:47 --> 02:06:54
we need a better state of the art

02:06:51 --> 02:06:56
module in the standard library for for

02:06:53 --> 02:07:00
multiplexing input output from different

02:06:55 --> 02:07:02
sources you could say that it spiraled

02:06:59 --> 02:07:04
out of control a little bit it was at

02:07:01 --> 02:07:06
he time it was the largest python

02:07:03 --> 02:07:07
enhancement proposal that was ever

02:07:05 --> 02:07:09
proposed

02:07:06 --> 02:07:12
and you were deeply involved with that

02:07:08 --> 02:07:15
the time I was very much involved

02:07:11 --> 02:07:18
with that I was like the lead architect

02:07:14 --> 02:07:20
uh I ended up

02:07:17 --> 02:07:24
talking to people who had already

02:07:19 --> 02:07:26
developed Syria's third-party libraries

02:07:23 --> 02:07:29
that did similar things and sort of

02:07:25 --> 02:07:32
taking ideas from them and

02:07:28 --> 02:07:34
getting their feedback on my design and

02:07:31 --> 02:07:37
eventually we put it in the standard

02:07:33 --> 02:07:38
library and after a few years I got

02:07:36 --> 02:07:40
distracted I think the thing the big

02:07:37 --> 02:07:42
thing that distracted me was actually

02:07:39 --> 02:07:45
type annotations

02:07:41 --> 02:07:48
but other people kept it alive and

02:07:44 --> 02:07:49
kicking and it's been quite successful

02:07:47 --> 02:07:52
actually yeah

02:07:48 --> 02:07:54
in the world of python web clients so

02:07:51 --> 02:07:56
initially what are some of the design

02:07:53 --> 02:07:58
challenges there in that debate for the

02:07:55 --> 02:08:00
pep and what are some things that got

02:07:57 --> 02:08:02
rejected what are some things that got

02:07:59 --> 02:08:05
accepted to stand out to you

02:08:01 --> 02:08:08
there are a couple of different ways you

02:08:04 --> 02:08:11
can handle parallel i o and this happens

02:08:07 --> 02:08:13
ort of at an architectural level in

02:08:10 --> 02:08:16
operating systems as well like Windows

02:08:12 --> 02:08:18
prefers to do it one way and Unix

02:08:15 --> 02:08:20
prefers to do it the other way

02:08:17 --> 02:08:22
ou sort of

02:08:19 --> 02:08:26
you have an object that represents a

02:08:21 --> 02:08:28
network endpoint say a connection with a

02:08:25 --> 02:08:31
web browser that your client

02:08:27 --> 02:08:33
and say you're you're waiting for an

02:08:30 --> 02:08:37
incoming request two fundamental

02:08:33 --> 02:08:37
approaches are

02:08:36 --> 02:08:42
okay I'm waiting for an incoming request

02:08:38 --> 02:08:44
I'm doing something else come wake me up

02:08:41 --> 02:08:46
or of course sort of come tell me when

02:08:43 --> 02:08:47
uh something interesting happened like a

02:08:45 --> 02:08:49
packet came in on that network

02:08:46 --> 02:08:54
connection

02:08:48 --> 02:08:56
and the other Paradigm is

02:08:53 --> 02:09:00
we're on a team of a whole bunch of

02:08:55 --> 02:09:02
people with maybe a little mind and we

02:08:59 --> 02:09:05
can only manage one web connection at

02:09:01 --> 02:09:07
a time so

02:09:04 --> 02:09:11
I'm just sitting

02:09:06 --> 02:09:14
looking at this this web connection and

02:09:10 --> 02:09:17
I'm just blocked until something comes

02:09:13 --> 02:09:19
in and then uh I'm already waiting for

02:09:16 --> 02:09:22
it

02:09:18 --> 02:09:24
uh I get I get the data I process the

02:09:21 --> 02:09:27
data and then I go back to the top and

02:09:23 --> 02:09:30
say no sort of I'm waiting for the next

02:09:26 --> 02:09:31
packet those are about the two paradigms

02:09:29 --> 02:09:34
one is

02:09:30 --> 02:09:36
a paradigm where there is sort of

02:09:33 --> 02:09:39
notionally a threat of control whether

02:09:35 --> 02:09:41
it's an actual operating system thread

02:09:38 --> 02:09:43
or more an abstraction in async IO we

02:09:40 --> 02:09:46
call them tasks

02:09:42 --> 02:09:50
but a task in async IO or a thread in

02:09:45 --> 02:09:54
other contexts is devoted to one thing

02:09:49 --> 02:09:56
and it has Logic for all the stages like

02:09:53 --> 02:09:59
when it's a web request like

02:09:55 --> 02:10:01
first wait wait for the first line of

02:09:58 --> 02:10:04
the web request parse it because then

02:10:00 --> 02:10:08
you know if it's a get or a post or a

02:10:03 --> 02:10:10
put or whatever or an error uh then wait

02:10:07 --> 02:10:13
until you have a bunch of lines until

02:10:09 --> 02:10:16
there's a blank line then parse that as

02:10:12 --> 02:10:19
headers and then interpret that and then

02:10:15 --> 02:10:21
wait for the rest of the data to come in

02:10:18 --> 02:10:24
if there is any more that you request

02:10:20 --> 02:10:27
expect that sort of standard web stuff

02:10:23 --> 02:10:29
and the other thing is and there's

02:10:26 --> 02:10:31
always endless debate about which

02:10:28 --> 02:10:33
approach is more efficient and which

02:10:30 --> 02:10:36
approach is more error prone

02:10:33 --> 02:10:40
where I just have a whole bunch of

02:10:35 --> 02:10:44
stacks in front of me and uh whenever

02:10:39 --> 02:10:45
a packet comes in I sort of look at the

02:10:43 --> 02:10:47
number of the pack that there's some

02:10:44 --> 02:10:49
number on the packet and I say oh that

02:10:46 --> 02:10:52
packet goes on this pile

02:10:48 --> 02:10:55
and then I can do a little bit and then

02:10:51 --> 02:10:58
sort of that pile provides my context

02:10:54 --> 02:11:00
and as soon as I'm done with with the

02:10:57 --> 02:11:02
processing I sort of

02:10:59 --> 02:11:04
I can forget everything about what's

02:11:01 --> 02:11:06
going on because the next packet will

02:11:03 --> 02:11:09
come in from some random other client

02:11:05 --> 02:11:12
and it's that pile or this pile

02:11:08 --> 02:11:14
uh and every time a pile is maybe empty

02:11:11 --> 02:11:17
or full or whatever the criteria is I

02:11:13 --> 02:11:18
can toss it away or use it for a new

02:11:16 --> 02:11:21
space but

02:11:17 --> 02:11:23
several traditional third-party

02:11:20 --> 02:11:26
libraries for asynchronous i o

02:11:22 --> 02:11:28
processing in Python shows the model of

02:11:25 --> 02:11:30
a callback

02:11:27 --> 02:11:32
and that's that's the idea where you

02:11:29 --> 02:11:34
have a bunch of different stacks of

02:11:31 --> 02:11:36
paper in front of you and every time

02:11:33 --> 02:11:39
someone gives you a piece gives you new

02:11:35 --> 02:11:40
sheet you decide which stack it belongs

02:11:38 --> 02:11:44
to

02:11:39 --> 02:11:47
and that leads to a certain style of

02:11:43 --> 02:11:49
spaghetti code that

02:11:46 --> 02:11:54
I find sort of aesthetically

02:11:48 --> 02:11:56
not pleasing and I I was sort of never

02:11:53 --> 02:11:59
y successful and I had heard many

02:11:55 --> 02:12:02
stories about people who were also

02:11:58 --> 02:12:03
rt of complaining about that style of

02:12:01 --> 02:12:05
coding

02:12:02 --> 02:12:08
uh it was very prevalent in JavaScript

02:12:04 --> 02:12:11
at the time at least because it was like

02:12:07 --> 02:12:15
how the JavaScript event Loop basically

02:12:10 --> 02:12:19
works and so I thought well the

02:12:14 --> 02:12:22
task-based model where each task has a

02:12:18 --> 02:12:24
bunch of logic we had mechanisms in the

02:12:21 --> 02:12:28
Python language that we could easily

02:12:23 --> 02:12:30
reuse for for that and I thought I want

02:12:27 --> 02:12:33
o build a whole library for

02:12:29 --> 02:12:35
asynchronous networking i o

02:12:32 --> 02:12:38
uh and all the other things that may

02:12:34 --> 02:12:41
need to be done asynchronously

02:12:37 --> 02:12:45
uh based on that Paradigm and so I just

02:12:40 --> 02:12:47
chose a paradigm and tried to see how

02:12:44 --> 02:12:50
far I could get with that and it turns

02:12:46 --> 02:12:52
out that it's pretty good paradigm so

02:12:49 --> 02:12:56
people enjoy that kind of Paradigm

02:12:51 --> 02:12:58
programming for asynchronous Io relative

02:12:55 --> 02:13:00
to callbacks

02:12:57 --> 02:13:02
okay beautiful so how does that all

02:13:00 --> 02:13:05
interplay with

02:13:01 --> 02:13:07
e infamous Gill the goal the global

02:13:04 --> 02:13:09
interpreter lock

02:13:06 --> 02:13:12
maybe can you say what the Gill is and

02:13:08 --> 02:13:14
how does the dance beautifully with Ace

02:13:11 --> 02:13:16
in Kyle

02:13:13 --> 02:13:19
the global interpreter lock

02:13:15 --> 02:13:21
solves the problem that python

02:13:18 --> 02:13:25
originally was not written with either

02:13:20 --> 02:13:27
asynchronous or or parallelism in mind

02:13:24 --> 02:13:29
at all there was no concurrency in the

02:13:26 --> 02:13:31
language there was no parallelism there

02:13:28 --> 02:13:34
were no threads

02:13:30 --> 02:13:36
only a small number of years into

02:13:33 --> 02:13:40
Python's initial development

02:13:35 --> 02:13:44
all the new cool operating systems like

02:13:39 --> 02:13:48
uh Sun OS and silicon graphics irex and

02:13:43 --> 02:13:50
then eventually posix and windows all

02:13:47 --> 02:13:53
came with threading libraries

02:13:49 --> 02:13:55
that lets you do multiple things in

02:13:52 --> 02:13:59
parallel and there is a certain

02:13:54 --> 02:14:02
sort of principle which is the

02:13:58 --> 02:14:03
operating system handles the threads for

02:14:01 --> 02:14:07
you

02:14:02 --> 02:14:11
and the program can pretend that there

02:14:06 --> 02:14:13
are as many CPUs as as there are threads

02:14:10 --> 02:14:17
in the program

02:14:12 --> 02:14:18
uh and those CPUs were completely

02:14:16 --> 02:14:21
independently

02:14:17 --> 02:14:25
and if you don't have enough CPUs the

02:14:20 --> 02:14:27
operating system sort of simulates those

02:14:24 --> 02:14:31
xtra CPUs on the other hand if you have

02:14:26 --> 02:14:35
nough CPUs you can get a lot of work

02:14:30 --> 02:14:37
done by deploying those multiple CPUs

02:14:34 --> 02:14:40
but python wasn't written

02:14:36 --> 02:14:44
to to do that

02:14:39 --> 02:14:44
uh and so

02:14:43 --> 02:14:51
as libraries for for multi-threading

02:14:47 --> 02:14:53
were added to C

02:14:50 --> 02:14:56
but every operating system vendor was

02:14:52 --> 02:14:59
adding their own version of that

02:14:55 --> 02:15:01
we thought and maybe we were wrong but

02:14:58 --> 02:15:03
at the time we thought well we quickly

02:15:00 --> 02:15:05
want to be able to support these

02:15:02 --> 02:15:07
multiple threads

02:15:04 --> 02:15:09
because they seemed at the time in the

02:15:06 --> 02:15:10
arly 90s when they were new at least to

02:15:08 --> 02:15:13
me

02:15:09 --> 02:15:15
they seemed a cool interesting

02:15:12 --> 02:15:18
programming Paradigm and one of the

02:15:14 --> 02:15:19
things that that python at least at the

02:15:17 --> 02:15:21
time

02:15:18 --> 02:15:23
felt was nice about the language was

02:15:20 --> 02:15:27
that we could give a

02:15:22 --> 02:15:30
safe version of all kinds of cool new

02:15:26 --> 02:15:33
operating system toys to the python

02:15:29 --> 02:15:37
programmer like I remember

02:15:32 --> 02:15:40
one or two years before threading I I

02:15:36 --> 02:15:42
had spent some time adding networking

02:15:39 --> 02:15:45
sockets

02:15:41 --> 02:15:48
uh to Python and they were very literal

02:15:44 --> 02:15:50
translation of the networking sockets

02:15:47 --> 02:15:52
that were in the BSD operating system so

02:15:49 --> 02:15:54
Unix BSD

02:15:51 --> 02:15:57
but the nice thing was if you're using

02:15:53 --> 02:16:00
sockets from python then all the things

02:15:56 --> 02:16:02
you can do wrong with sockets in C would

02:15:59 --> 02:16:04
automatically give you a clear error

02:16:01 --> 02:16:07
message instead of just ending up with a

02:16:03 --> 02:16:09
malfunctioning hanging program

02:16:06 --> 02:16:10
and so we thought well we'll do the same

02:16:08 --> 02:16:15
thing with threading

02:16:09 --> 02:16:16
but we didn't really want to rewrite The

02:16:14 --> 02:16:20
Interpreter

02:16:15 --> 02:16:22
to be thread safe because that that was

02:16:19 --> 02:16:24
like

02:16:21 --> 02:16:27
that would be a very complex refactoring

02:16:23 --> 02:16:29
of all The Interpreter code and all the

02:16:26 --> 02:16:31
runtime code because all the objects

02:16:28 --> 02:16:34
were written with the assumption that

02:16:30 --> 02:16:37
here is only one thread and so we said

02:16:33 --> 02:16:39
okay well we'll take our losses we'll

02:16:36 --> 02:16:40
provide something that looks like

02:16:38 --> 02:16:42
threads

02:16:39 --> 02:16:44
and as long as you only have a single

02:16:41 --> 02:16:46
CPU on your computer which most

02:16:43 --> 02:16:51
computers at the time did

02:16:45 --> 02:16:53
uh it feels just like threads because

02:16:50 --> 02:16:56
the the whole idea of of multiple

02:16:52 --> 02:16:58
threads in the OS was that even if your

02:16:55 --> 02:17:01
computer only had one CPU you could

02:16:57 --> 02:17:04
still fire up at many threads as you

02:17:00 --> 02:17:06
wanted well within reason maybe 10 or 12

02:17:03 --> 02:17:10
not 5000.

02:17:05 --> 02:17:12
uh and so we thought we had conquered

02:17:09 --> 02:17:15
the

02:17:11 --> 02:17:19
abstraction of threads pretty well

02:17:14 --> 02:17:22
because multi core uh CPUs were were not

02:17:18 --> 02:17:23
in in most python programmers hands

02:17:21 --> 02:17:26
anyway

02:17:22 --> 02:17:29
and then of course a couple of more

02:17:25 --> 02:17:32
iterations of Moore's Law and computers

02:17:28 --> 02:17:37
getting faster and at some point

02:17:31 --> 02:17:39
uh the chip designers decided that they

02:17:36 --> 02:17:41
couldn't make the CPUs faster but they

02:17:38 --> 02:17:44
could still make them smaller and so

02:17:40 --> 02:17:46
they could put multiple CPUs on one chip

02:17:43 --> 02:17:48
and suddenly there was all this pressure

02:17:45 --> 02:17:51
about

02:17:47 --> 02:17:54
do things in parallel and that's where

02:17:50 --> 02:17:56
the the solution we had in Python didn't

02:17:53 --> 02:17:58
work

02:17:55 --> 02:18:00
and that's that's sort of the moment

02:17:57 --> 02:18:02
hat the Gill became

02:17:59 --> 02:18:04
infamous

02:18:01 --> 02:18:07
because the guilt the guilt was the

02:18:03 --> 02:18:10
solution we used to sort of

02:18:06 --> 02:18:12
take this single interpreter and share

02:18:09 --> 02:18:16
it between all the different operating

02:18:12 --> 02:18:18
system threats that you could create and

02:18:15 --> 02:18:21
so as long as the the hardware

02:18:17 --> 02:18:22
physically only had one CPU that was all

02:18:20 --> 02:18:25
fine

02:18:21 --> 02:18:27
and then as Hardware vendors were

02:18:24 --> 02:18:29
suddenly telling us all oh you got to

02:18:26 --> 02:18:30
paralyze everything's got to be

02:18:28 --> 02:18:34
paralyzed

02:18:29 --> 02:18:37
people started saying oh uh but we can

02:18:33 --> 02:18:39
use multiple threads in Python and uh

02:18:36 --> 02:18:43
then they discovered oh but actually all

02:18:38 --> 02:18:46
threads run on a single single core yeah

02:18:42 --> 02:18:48
I mean is there a way is there ideas for

02:18:45 --> 02:18:50
in the future to remove

02:18:47 --> 02:18:53
the global interpreter log Gill like

02:18:49 --> 02:18:55
maybe multiple sub interpreters some

02:18:52 --> 02:18:58
tricky

02:18:54 --> 02:19:00
interpreters on top of interpreters kind

02:18:57 --> 02:19:04
of thing yeah there there are a couple

02:18:59 --> 02:19:07
of possible uh Futures there the the

02:19:03 --> 02:19:10
most likely future is that we'll get

02:19:06 --> 02:19:13
multiple sub interpreters

02:19:09 --> 02:19:16
which each run a completely independent

02:19:12 --> 02:19:20
Python program nice uh but they're

02:19:15 --> 02:19:24
still some benefit of

02:19:19 --> 02:19:27
sort of faster communication between

02:19:23 --> 02:19:30
those programs but it's also managing

02:19:26 --> 02:19:33
for you this running a multiple python

02:19:29 --> 02:19:36
programs yeah so it's hidden from you

02:19:32 --> 02:19:38
right the it's it's hidden from you but

02:19:35 --> 02:19:40
you have to spend more time

02:19:37 --> 02:19:41
communicating between those programs

02:19:39 --> 02:19:43
because the sort of

02:19:40 --> 02:19:46
the attractive

02:19:42 --> 02:19:50
thing about the multi-threaded model is

02:19:45 --> 02:19:52
that the threads can share objects at

02:19:49 --> 02:19:54
he same time that's also the downfall

02:19:51 --> 02:19:58
of the multi-threaded programming model

02:19:53 --> 02:20:00
because when you do share objects

02:19:57 --> 02:20:04
you were and you didn't necessarily

02:20:00 --> 02:20:07
intend to share them or uh there were

02:20:03 --> 02:20:10
aspects of those objects that

02:20:06 --> 02:20:14
were not reusable you get all kinds

02:20:09 --> 02:20:16
of concurrency bugs and so

02:20:13 --> 02:20:19
the reason I wrote that little blog post

02:20:15 --> 02:20:23
about semaphores was that concurrency

02:20:18 --> 02:20:27
bugs are just harder it would be nice if

02:20:22 --> 02:20:30
python had uh no Global interpreter lock

02:20:26 --> 02:20:33
and it had the so-called free threading

02:20:30 --> 02:20:36
but it would also cause a lot more

02:20:33 --> 02:20:39
software bugs

02:20:35 --> 02:20:42
uh the interesting thing is that there

02:20:38 --> 02:20:44
is still a possible future where we are

02:20:41 --> 02:20:47
actually going to or where we could

02:20:43 --> 02:20:51
experiment at least with that

02:20:46 --> 02:20:54
because there is a guy working for

02:20:50 --> 02:20:56
Facebook who has developed a fork of C

02:20:53 --> 02:20:59
python

02:20:55 --> 02:21:02
that he called the no-gill

02:20:58 --> 02:21:05
interpreter where he removed the Gill

02:21:01 --> 02:21:08
and made a whole bunch of optimizations

02:21:04 --> 02:21:11
o that the the single threaded case

02:21:07 --> 02:21:13
doesn't run too much slower

02:21:10 --> 02:21:18
uh and multi-threaded case will actually

02:21:12 --> 02:21:22
uh use all the cores that you have

02:21:17 --> 02:21:23
and so that that would be an interesting

02:21:21 --> 02:21:28
possibility

02:21:22 --> 02:21:31
if we would be willing as a python core

02:21:27 --> 02:21:35
developers to actually

02:21:30 --> 02:21:38
uh maintain that code indefinitely

02:21:34 --> 02:21:41
and if we're willing to put up with the

02:21:37 --> 02:21:44
additional complexity of The Interpreter

02:21:40 --> 02:21:47
and the additional sort of overhead for

02:21:43 --> 02:21:49
the single threaded case and I'm

02:21:46 --> 02:21:52
personally not convinced

02:21:48 --> 02:21:52
that

02:21:51 --> 02:22:00
here are enough people

02:21:54 --> 02:22:03
uh needing the speed of multiple threads

02:21:59 --> 02:22:06
with their python programs

02:22:02 --> 02:22:08
that it's worth to sort of

02:22:05 --> 02:22:10
take that performance hit and that

02:22:07 --> 02:22:13
complexity hit

02:22:09 --> 02:22:14
and I I feel that the Gill actually is

02:22:12 --> 02:22:18
pretty nice

02:22:13 --> 02:22:21
Goldilocks point between no threads and

02:22:17 --> 02:22:24
uh all threads all the time but not

02:22:20 --> 02:22:26
everybody agrees on that so that is

02:22:23 --> 02:22:29
definitely a possible future the sub

02:22:25 --> 02:22:33
interpreters look like a fairly safe bet

02:22:28 --> 02:22:35
for 312 so say a year from now a year so

02:22:32 --> 02:22:36
the goal is to do a new version every

02:22:34 --> 02:22:39
ear

02:22:35 --> 02:22:42
yeah for python let me ask you perhaps a

02:22:38 --> 02:22:46
fun question but there's a philosophy

02:22:41 --> 02:22:49
dude to will there ever be a python 4.0

02:22:45 --> 02:22:53
now before you say it's currently a joke

02:22:48 --> 02:22:57
and probably not I'm gonna go to 3.99 or

02:22:52 --> 02:23:01
3.99 999.

02:22:56 --> 02:23:06
can you imagine possible features

02:23:00 --> 02:23:10
that python 4.0 might have that would

02:23:05 --> 02:23:12
necessitate the creation of the new 4.0

02:23:09 --> 02:23:14
given the amount of

02:23:11 --> 02:23:17
pain and joy

02:23:13 --> 02:23:19
suffering and Triumph that was involved

02:23:16 --> 02:23:22
in the move between version 2 and

02:23:18 --> 02:23:22
version three

02:23:21 --> 02:23:28
yeah well we're we

02:23:25 --> 02:23:33
as a community and as a core development

02:23:27 --> 02:23:39
eam we have a large amount of painful

02:23:32 --> 02:23:42
memories about the Python 3 transition

02:23:38 --> 02:23:45
uh which is one reason that sort of

02:23:41 --> 02:23:49
everybody is happy that we've decided

02:23:44 --> 02:23:52
there's not going to be a 4.0 at least

02:23:48 --> 02:23:55
not anytime soon and if there is going

02:23:51 --> 02:23:58
to be one it would will sort of plan the

02:23:54 --> 02:24:01
transition very differently because

02:23:57 --> 02:24:02
clearly we underestimated the pain the

02:24:00 --> 02:24:06
transition

02:24:01 --> 02:24:08
cost for our users in the Python 3 case

02:24:05 --> 02:24:11
and

02:24:07 --> 02:24:15
had we known we could have sort of

02:24:10 --> 02:24:18
designed Python 3 somewhat differently

02:24:14 --> 02:24:21
without making it any worse

02:24:17 --> 02:24:24
we just thought that we had a good plan

02:24:20 --> 02:24:27
but we we we underestimated where

02:24:23 --> 02:24:29
what what sort of the users were capable

02:24:26 --> 02:24:32
of when it comes to that kind of

02:24:28 --> 02:24:35
transition by the way I think we talked

02:24:31 --> 02:24:38
way before like a year and a half before

02:24:34 --> 02:24:41
the uh python 2 officially

02:24:37 --> 02:24:43
end of life end of life oh yeah

02:24:40 --> 02:24:45
what was that what was your memory of

02:24:42 --> 02:24:48
the end of life did you shed a tear on

02:24:44 --> 02:24:51
January 1st 2020 did was there

02:24:47 --> 02:24:54
veryone's standing alone our team had

02:24:50 --> 02:24:57
basically moved on years before

02:24:53 --> 02:24:59
yeah it was it was purely it was a

02:24:56 --> 02:25:04
little symbolic moment

02:24:59 --> 02:25:06
uh to signal to the the remaining users

02:25:03 --> 02:25:10
that

02:25:05 --> 02:25:15
here was no longer going to be any new

02:25:09 --> 02:25:17
releases or support for python 2 7.

02:25:14 --> 02:25:19
did you shed a single tier while looking

02:25:16 --> 02:25:23
out over the horizon

02:25:18 --> 02:25:27
I'm not not a very poetic person and I

02:25:22 --> 02:25:27
don't shed tears like that but no

02:25:26 --> 02:25:33
yeah we we actually had planned a party

02:25:29 --> 02:25:35
but the party was planned for uh the

02:25:32 --> 02:25:37
python the U.S python conference that

02:25:34 --> 02:25:39
year which would never happened of

02:25:36 --> 02:25:43
course because of the pandemic oh is it

02:25:38 --> 02:25:45
like in March yeah the conference was uh

02:25:42 --> 02:25:46
going to be I think late April that year

02:25:44 --> 02:25:48
oh

02:25:45 --> 02:25:52
so that that was a very difficult

02:25:47 --> 02:25:54
decision to cancel it but

02:25:51 --> 02:25:56
hey did so anyway if we're going to

02:25:53 --> 02:26:00
have a python 4 we're going to have to

02:25:55 --> 02:26:01
have both a different reason for for

02:25:59 --> 02:26:04
having that

02:26:00 --> 02:26:06
and a different process for managing the

02:26:03 --> 02:26:10
transition can you imagine a possible

02:26:05 --> 02:26:12
process that so so I think you're

02:26:09 --> 02:26:15
implying that if there is a 4.0 in some

02:26:11 --> 02:26:18
ways it would break back compatibility

02:26:14 --> 02:26:21
well so

02:26:17 --> 02:26:23
here is here is a concrete thought I've

02:26:20 --> 02:26:26
had and I'm not unique but not everyone

02:26:22 --> 02:26:28
agrees with this so this is definitely a

02:26:25 --> 02:26:32
personal opinion

02:26:27 --> 02:26:34
if we were to try something like that no

02:26:31 --> 02:26:36
Guild python

02:26:33 --> 02:26:40
uh

02:26:35 --> 02:26:42
my expectation is that

02:26:39 --> 02:26:46
it would feel

02:26:41 --> 02:26:49
just different enough

02:26:45 --> 02:26:51
at least for the the part of the Python

02:26:48 --> 02:26:55
ecosystem that

02:26:50 --> 02:26:58
is heavily based on C extensions

02:26:54 --> 02:27:01
and that is like the entire machine

02:26:57 --> 02:27:06
learning data science Scientific Python

02:27:00 --> 02:27:07
world is all based on C extensions for

02:27:05 --> 02:27:09
python

02:27:06 --> 02:27:13
and so

02:27:08 --> 02:27:15
those people would likely feel the pain

02:27:12 --> 02:27:19
the most

02:27:14 --> 02:27:22
because they even if we don't change

02:27:18 --> 02:27:24
anything about the syntax of the

02:27:21 --> 02:27:25
language and the semantics of the

02:27:23 --> 02:27:28
language when you're writing python code

02:27:24 --> 02:27:32
we we could even say suppose that after

02:27:27 --> 02:27:37
python say 3 19 instead of 320 we'll

02:27:31 --> 02:27:40
have 4.0 suppose that's the time when we

02:27:36 --> 02:27:41
flip the switch to 4.0 will will not

02:27:39 --> 02:27:44
have a gill

02:27:40 --> 02:27:46
imagine it was like that

02:27:43 --> 02:27:48
so

02:27:45 --> 02:27:52
I would probably say

02:27:48 --> 02:27:56
that particular year the release that we

02:27:51 --> 02:28:00
named 4.0 will be syntactically it will

02:27:55 --> 02:28:02
not have any new syntactical features no

02:27:59 --> 02:28:05
new modules in the standard Library no

02:28:01 --> 02:28:08
new built-in functions

02:28:04 --> 02:28:11
everything will be at the python level

02:28:07 --> 02:28:13
will be purely compatible with python

02:28:10 --> 02:28:15
3.19

02:28:12 --> 02:28:18
however

02:28:14 --> 02:28:21
extension modules

02:28:17 --> 02:28:24
will have to make a change they all have

02:28:20 --> 02:28:25
to be recompiled they will not have the

02:28:23 --> 02:28:28
same

02:28:24 --> 02:28:30
binary interface

02:28:27 --> 02:28:35
uh

02:28:29 --> 02:28:38
the semantics and and apis for for some

02:28:34 --> 02:28:42
things that are frequently accessed by C

02:28:37 --> 02:28:45
extensions will be different and so for

02:28:41 --> 02:28:48
a pure python user

02:28:44 --> 02:28:51
4.0 would be a breeze except that there

02:28:47 --> 02:28:53
are very few pure python users left

02:28:50 --> 02:28:56
because everybody who is using python

02:28:52 --> 02:28:58
for something significant is using

02:28:55 --> 02:29:01
third-party extensions they're like I

02:28:57 --> 02:29:04
don't know several hundreds of thousands

02:29:00 --> 02:29:07
of third-party extensions on uh the Pi

02:29:03 --> 02:29:09
service

02:29:06 --> 02:29:12
and I'm not saying they're old they're

02:29:08 --> 02:29:14
all good but there is a large list of

02:29:11 --> 02:29:16
extensions that would have to do work

02:29:13 --> 02:29:21
and some of those extensions are

02:29:15 --> 02:29:25
currently already low on maintainers and

02:29:20 --> 02:29:27
they're struggling to keep afloat so

02:29:24 --> 02:29:30
there you can give a huge heads up to

02:29:26 --> 02:29:32
them if you go to 4.0 to really keep

02:29:29 --> 02:29:35
developing it yeah we'd probably have to

02:29:31 --> 02:29:35
do something like

02:29:34 --> 02:29:41
several years before who knows maybe

02:29:37 --> 02:29:45
five years earlier like 3.15 we would

02:29:40 --> 02:29:47
have to say and and I'm just making the

02:29:44 --> 02:29:51
specific numbers up but we at some

02:29:46 --> 02:29:53
point we'd have to say foreign

02:29:50 --> 02:29:56
python could be an option

02:29:52 --> 02:29:58
it might be a compile time option

02:29:55 --> 02:30:02
uh

02:29:57 --> 02:30:04
if you want to use no Guild python you

02:30:01 --> 02:30:07
have to recompile python from source for

02:30:03 --> 02:30:09
your platform using your tool set

02:30:06 --> 02:30:11
all you have to do is change one

02:30:08 --> 02:30:12
configuration variable and then you just

02:30:10 --> 02:30:15
run make

02:30:11 --> 02:30:16
or configure and make and it will build

02:30:14 --> 02:30:20
it for you

02:30:15 --> 02:30:23
but now you also have to use the the

02:30:19 --> 02:30:25
no-gill compatible versions of all

02:30:22 --> 02:30:28
extension modules you want to use

02:30:24 --> 02:30:32
and so as long as many extension modules

02:30:27 --> 02:30:35
don't have fully functional

02:30:31 --> 02:30:36
sort of variants that work within the

02:30:34 --> 02:30:39
no-gill world

02:30:35 --> 02:30:42
that's not a very practical thing for

02:30:38 --> 02:30:44
python users but it would allow

02:30:41 --> 02:30:48
extension Developers

02:30:43 --> 02:30:51
to test the waters see what they need to

02:30:47 --> 02:30:54
syntactically to be able to compile at

02:30:50 --> 02:30:57
all maybe they're using

02:30:53 --> 02:30:59
functions that are defined by the Python

02:30:56 --> 02:31:01
3 runtime that won't be in the python 4

02:30:58 --> 02:31:04
runtime those functions will not work

02:31:00 --> 02:31:07
they'll have to find an alternative

02:31:03 --> 02:31:10
uh but they can experiment with that and

02:31:06 --> 02:31:12
sort of write test applications and that

02:31:09 --> 02:31:17
would be a way to transition and that

02:31:11 --> 02:31:20
could be a series of releases where

02:31:16 --> 02:31:24
the python 4 is more and more imminent

02:31:19 --> 02:31:28
uh we have supported more and more

02:31:23 --> 02:31:31
third-party extension modules to have

02:31:27 --> 02:31:34
solid support that works for no Guild

02:31:30 --> 02:31:39
python for that new API

02:31:33 --> 02:31:42
uh and then sort of python python 4.0 is

02:31:38 --> 02:31:45
like the official moment that the mayor

02:31:41 --> 02:31:48
comes out and cuts the ribbon and is now

02:31:44 --> 02:31:50
a python uh now the sort of no-gill mode

02:31:47 --> 02:31:52
is the default and maybe the only mode

02:31:49 --> 02:31:55
there is

02:31:51 --> 02:31:59
the internet wants to know from Reddit

02:31:54 --> 02:32:01
uh it it's uh it's a small and fun

02:31:58 --> 02:32:06
question there's many fun questions but

02:32:00 --> 02:32:09
uh out of the Pi Pi packages Pi Pi

02:32:05 --> 02:32:11
packages uh do you have uh do you have

02:32:08 --> 02:32:14
ones you like do you in your opinion

02:32:10 --> 02:32:17
other must have Pi Pi libraries or ones

02:32:13 --> 02:32:18
you use all the time constantly oh my

02:32:16 --> 02:32:20
that

02:32:17 --> 02:32:23
I should really have a standard answer

02:32:19 --> 02:32:25
for that question but like a positive

02:32:22 --> 02:32:29
standard answer but my current standard

02:32:24 --> 02:32:30
answer is that I'm not a big user of

02:32:28 --> 02:32:34
third-party packages

02:32:29 --> 02:32:36
when I write python code I'm usually

02:32:33 --> 02:32:39
developing some tooling around building

02:32:35 --> 02:32:42
python itself

02:32:38 --> 02:32:44
and the last thing we want is

02:32:41 --> 02:32:47
dependencies on third-party packages so

02:32:43 --> 02:32:49
I I tend to just use the standard

02:32:46 --> 02:32:51
library and that's where your focus is

02:32:48 --> 02:32:53
that's where your mind is

02:32:50 --> 02:32:56
but do you do you keep an eye of what's

02:32:52 --> 02:32:58
out there to understand where the

02:32:55 --> 02:33:00
standard Library could be moving should

02:32:57 --> 02:33:03
be moving it's a good kind of landscape

02:32:59 --> 02:33:05
of what's missing from the same Library

02:33:02 --> 02:33:10
well usually when something's missing

02:33:04 --> 02:33:16
from the standard Library nowadays uh

02:33:09 --> 02:33:19
it is a relatively new idea and there is

02:33:15 --> 02:33:22
a third party implementation or maybe

02:33:18 --> 02:33:25
possibly multiple third-party

02:33:21 --> 02:33:27
implementations but they evolve at a

02:33:24 --> 02:33:29
much higher rate than they could when

02:33:26 --> 02:33:34
they're in the standard Library so they

02:33:28 --> 02:33:36
it would be a big reduction in in

02:33:33 --> 02:33:38
activity to

02:33:35 --> 02:33:41
incorporate things like that in the

02:33:37 --> 02:33:43
standard Library so I I like that there

02:33:40 --> 02:33:46
is a lively package ecosystem and that

02:33:42 --> 02:33:48
sort of recent Trends in the standard

02:33:45 --> 02:33:50
Library are actually that we're doing

02:33:47 --> 02:33:52
the occasional spring cleaning where

02:33:49 --> 02:33:55
we're just

02:33:51 --> 02:33:57
we're we're

02:33:54 --> 02:34:00
choosing some

02:33:56 --> 02:34:06
modules that have not had a lot of

02:33:59 --> 02:34:09
change in a long time and that maybe

02:34:05 --> 02:34:11
would be better off not existing at all

02:34:08 --> 02:34:12
at this point because there might be a

02:34:10 --> 02:34:15
better third party

02:34:11 --> 02:34:19
alternative anyway and we're sort of

02:34:14 --> 02:34:21
slowly removing those that often those

02:34:18 --> 02:34:25
are things that I sort of

02:34:20 --> 02:34:28
I spiked somewhere in 1992 or 1993 and

02:34:24 --> 02:34:31
if you look look through the commit

02:34:27 --> 02:34:34
history it's very sad like

02:34:30 --> 02:34:37
all cosmetic changes like changes in the

02:34:33 --> 02:34:39
indentation style or uh the name of this

02:34:36 --> 02:34:43
other standard Library module got

02:34:38 --> 02:34:45
changed or like like nothing nothing of

02:34:42 --> 02:34:48
any substance the API is identical to

02:34:44 --> 02:34:52
what it was 20 years ago

02:34:47 --> 02:34:54
So speaking of packages they have a

02:34:51 --> 02:34:56
lot of impact on a lot of people's

02:34:53 --> 02:34:59
lives does it make sense to you why

02:34:55 --> 02:35:00
python has become the primary the

02:34:58 --> 02:35:03
dominant language for the machine

02:34:59 --> 02:35:06
learning community so packages like uh

02:35:02 --> 02:35:08
Pi torch tensorflow second learn and

02:35:05 --> 02:35:11
even like the lower level stuff like

02:35:07 --> 02:35:13
numpy sci-fi pandas matplotlib with

02:35:10 --> 02:35:17
visualization can you like does it make

02:35:12 --> 02:35:19
sense to you why it uh

02:35:16 --> 02:35:21
permeated the entire data science

02:35:18 --> 02:35:23
machine learning AI community

02:35:20 --> 02:35:26
well it's

02:35:22 --> 02:35:27
part of it is an effect that's as simple

02:35:25 --> 02:35:29
as

02:35:26 --> 02:35:30
we're all driving on the right side of

02:35:28 --> 02:35:35
the road right

02:35:29 --> 02:35:40
uh it's compatibility yeah it's it's in

02:35:34 --> 02:35:44
and and and and part of it is uh

02:35:39 --> 02:35:45
not not quite as as as fundamental as

02:35:43 --> 02:35:47
driving on the right side of the road

02:35:44 --> 02:35:49
which you have to do for for safety

02:35:46 --> 02:35:50
reasons I mean you have to agree on

02:35:48 --> 02:35:51
something

02:35:49 --> 02:35:54
every they they could have picked

02:35:50 --> 02:35:56
JavaScript or Pearl there was there was

02:35:53 --> 02:35:59
a time in the early 2000s that it really

02:35:55 --> 02:36:01
looked like Pearl was going to dominate

02:35:58 --> 02:36:03
like biosciences

02:36:00 --> 02:36:05
because DNA search was all based on

02:36:02 --> 02:36:07
regular expressions and pearl has the

02:36:04 --> 02:36:10
fastest and most comprehensive regular

02:36:06 --> 02:36:12
expression engine still does

02:36:09 --> 02:36:14
I spent quite a long time with pearl

02:36:11 --> 02:36:17
that was another letting go

02:36:13 --> 02:36:21
of this kind of uh data

02:36:16 --> 02:36:23
processing uh system yeah the reasons

02:36:20 --> 02:36:26
why python

02:36:22 --> 02:36:30
became the lingua Franca of the

02:36:25 --> 02:36:33
scientific code and and

02:36:29 --> 02:36:35
machine learning learning in particular

02:36:32 --> 02:36:39
and data science

02:36:34 --> 02:36:41
it really had a lot to do with

02:36:38 --> 02:36:43
anything was better than C or C plus

02:36:42 --> 02:36:49
recently a guy who worked at Lawrence

02:36:45 --> 02:36:53
Livermore National Laboratories in the

02:36:48 --> 02:36:57
sort of computing division

02:36:52 --> 02:37:01
wrote me his his Memoirs and and he had

02:36:56 --> 02:37:03
his his own view of how he helped

02:37:00 --> 02:37:07
something he called computational

02:37:02 --> 02:37:10
steering into existence

02:37:06 --> 02:37:12
and this was the idea that you you take

02:37:09 --> 02:37:15
libraries that in in his days were

02:37:11 --> 02:37:19
written in Fortran that that solved

02:37:14 --> 02:37:23
Universal mathematical problems

02:37:18 --> 02:37:26
uh and those libraries still work but uh

02:37:22 --> 02:37:31
the scientists that use the libraries

02:37:25 --> 02:37:33
use them to solve continuously different

02:37:30 --> 02:37:36
specific applications and answer

02:37:32 --> 02:37:38
different questions and so those poor

02:37:35 --> 02:37:39
scientists

02:37:37 --> 02:37:43
were

02:37:38 --> 02:37:45
required to to use say Fortran

02:37:42 --> 02:37:47
because Fortran was the library the

02:37:44 --> 02:37:50
language that the library was written in

02:37:46 --> 02:37:53
and then the scientist would have to

02:37:49 --> 02:37:56
write an application that sort of uses

02:37:52 --> 02:37:58
the library to solve a particular

02:37:55 --> 02:38:00
equation or set off

02:37:57 --> 02:38:03
of answer a set of questions and the

02:38:00 --> 02:38:06
safe same for C plus plus

02:38:02 --> 02:38:09
because of and there's there's

02:38:05 --> 02:38:12
interoperability so the dusty decks are

02:38:08 --> 02:38:14
written either in C plus plus or Fortran

02:38:11 --> 02:38:16
uh

02:38:13 --> 02:38:17
and so Paul DuBois was one of the people

02:38:15 --> 02:38:20
who

02:38:16 --> 02:38:24
I think in the mid 90s

02:38:19 --> 02:38:25
aw that that you needed a higher level

02:38:23 --> 02:38:28
anguage

02:38:24 --> 02:38:31
for the scientists

02:38:27 --> 02:38:34
to to sort of tie together the

02:38:30 --> 02:38:38
fundamental mathematical algorithms of

02:38:33 --> 02:38:40
linear algebra and and other stuff

02:38:37 --> 02:38:43
and so

02:38:39 --> 02:38:46
gradually some libraries started

02:38:42 --> 02:38:50
appearing that did very fundamental

02:38:45 --> 02:38:53
stuff with arrays of numbers in Python I

02:38:49 --> 02:38:56
mean when I first created python I was

02:38:52 --> 02:38:57
not expecting it to be used for arrays

02:38:55 --> 02:39:00
of numbers much I thought that was like

02:38:57 --> 02:39:03
an outdated data type

02:38:59 --> 02:39:06
and everything was like objects and

02:39:02 --> 02:39:08
strings and like python was good and

02:39:05 --> 02:39:11
fast at string manipulation and objects

02:39:07 --> 02:39:13
obviously but arrays of numbers were not

02:39:10 --> 02:39:15
very efficient in the multi-dimensional

02:39:12 --> 02:39:17
arrays didn't even exist in the language

02:39:14 --> 02:39:20
at all

02:39:16 --> 02:39:24
uh but there were people who realized

02:39:19 --> 02:39:24
that python had extensibility

02:39:24 --> 02:39:29
that was flexible enough that they could

02:39:26 --> 02:39:32
write

02:39:28 --> 02:39:35
third-party packages that did support

02:39:31 --> 02:39:37
large arrays of numbers and operations

02:39:34 --> 02:39:40
on them very efficiently

02:39:36 --> 02:39:43
and somehow they got a foothold

02:39:39 --> 02:39:46
through sort of different

02:39:42 --> 02:39:48
parts of the scientific Community I I

02:39:45 --> 02:39:50
remember that the Hubble Space Telescope

02:39:47 --> 02:39:53
ople in Baltimore Were Somehow big

02:39:49 --> 02:39:57
python fans in the late 90s

02:39:52 --> 02:40:00
and at various points

02:39:56 --> 02:40:04
mall improvements were made and more

02:39:59 --> 02:40:06
people got in touch with using python to

02:40:03 --> 02:40:11
derive these libraries

02:40:05 --> 02:40:13
of interesting uh algorithms and like

02:40:10 --> 02:40:16
once once you have a bunch of scientists

02:40:12 --> 02:40:18
who are working on similar problems say

02:40:15 --> 02:40:20
they're all working on stuff that that

02:40:17 --> 02:40:22
com data that comes in from the Hubble

02:40:19 --> 02:40:24
Space Telescope but they're looking at

02:40:21 --> 02:40:26
different things some some are looking

02:40:23 --> 02:40:28
at stars in this galaxy other are

02:40:25 --> 02:40:30
looking at galaxies the math is

02:40:27 --> 02:40:31
completely different but the the

02:40:29 --> 02:40:34
underlying

02:40:30 --> 02:40:37
libraries are still the same

02:40:33 --> 02:40:40
and so they Exchange

02:40:36 --> 02:40:42
code they say well I wrote this Python

02:40:39 --> 02:40:44
program or I wrote a python library to

02:40:41 --> 02:40:48
solve this class of problems

02:40:43 --> 02:40:50
and the other guys either say oh I can

02:40:47 --> 02:40:53
use that Library 2 or if you make a few

02:40:49 --> 02:40:57
changes I can use that Library too

02:40:52 --> 02:40:58
why why start from scratch in Pearl or

02:40:56 --> 02:41:01
JavaScript

02:40:57 --> 02:41:04
where there's not that infrastructure

02:41:00 --> 02:41:07
for arrays of numbers yet whereas in

02:41:03 --> 02:41:09
Python you have it and so more and more

02:41:06 --> 02:41:10
scientists at different places doing

02:41:08 --> 02:41:12
different

02:41:09 --> 02:41:15
work

02:41:11 --> 02:41:19
discovered Python and then then people

02:41:14 --> 02:41:22
who had an idea for an important new

02:41:18 --> 02:41:25
fundamental Library decided oh python is

02:41:21 --> 02:41:27
actually already known to our users

02:41:24 --> 02:41:30
o

02:41:26 --> 02:41:32
let's use python as the user interface I

02:41:29 --> 02:41:33
think that's how tensor I imagine at

02:41:31 --> 02:41:35
least that's how tensorflow ended up

02:41:32 --> 02:41:38
with python as the user interflow

02:41:34 --> 02:41:43
interface right but with tensorflow

02:41:37 --> 02:41:44
there's a deeper history of what the

02:41:42 --> 02:41:47
community is it's not just like what

02:41:43 --> 02:41:49
packages it needs it's like what the

02:41:46 --> 02:41:51
community leans on for programming

02:41:48 --> 02:41:55
language because tensorflow

02:41:50 --> 02:41:57
uh had a prior library that was internal

02:41:54 --> 02:42:01
to Google but there was also competing

02:41:56 --> 02:42:04
machine learning Frameworks like thiano

02:42:00 --> 02:42:06
Cafe they were in Python there was some

02:42:03 --> 02:42:08
Scala

02:42:05 --> 02:42:10
um some other languages but python was

02:42:07 --> 02:42:12
really dominating it

02:42:09 --> 02:42:14
and it's interesting because

02:42:12 --> 02:42:17
um there's other languages from the

02:42:13 --> 02:42:20
ngineering space like Matlab

02:42:16 --> 02:42:23
that a lot of people used but different

02:42:19 --> 02:42:27
design choices by the company by the

02:42:22 --> 02:42:29
core developers led to it not spreading

02:42:26 --> 02:42:32
and one of the choices of Matlab

02:42:28 --> 02:42:34
uh by math works is to not make it open

02:42:31 --> 02:42:37
source right or yeah not you know having

02:42:33 --> 02:42:40
people pay it was a very expensive

02:42:36 --> 02:42:42
product and so uh universities

02:42:39 --> 02:42:45
pecially disliked it because it was a

02:42:41 --> 02:42:49
price per seat I I remember hearing

02:42:45 --> 02:42:52
yeah but I think that's not why it

02:42:48 --> 02:42:54
failed or it failed to spread I think

02:42:51 --> 02:42:56
the universities didn't like it but they

02:42:53 --> 02:42:58
would still pay for it

02:42:55 --> 02:43:00
he thing is it didn't feed into that

02:42:57 --> 02:43:04
GitHub open source

02:42:59 --> 02:43:08
uh packages culture so like and that's

02:43:03 --> 02:43:10
omehow a precondition for um for viral

02:43:07 --> 02:43:13
spreading the hacker culture like the

02:43:09 --> 02:43:15
tinkerer culture uh with python it feels

02:43:12 --> 02:43:16
like you can build a package from

02:43:14 --> 02:43:18
scratch or solve a particular problem

02:43:15 --> 02:43:21
and get excited about sharing that

02:43:17 --> 02:43:24
package with others and that creates an

02:43:20 --> 02:43:26
excitement about a language I tend to

02:43:23 --> 02:43:28
like Python's approach to open source in

02:43:25 --> 02:43:32
particular because it's sort of

02:43:27 --> 02:43:35
it's almost egalitarium

02:43:31 --> 02:43:37
uh there's there's little hierarchy

02:43:34 --> 02:43:40
there's there's obviously some because

02:43:36 --> 02:43:41
the like you only need to decide whether

02:43:39 --> 02:43:43
you drive on the left or the right side

02:43:40 --> 02:43:46
of the road sometimes

02:43:42 --> 02:43:49
but there is a lot of access for people

02:43:45 --> 02:43:51
with little power you don't have to work

02:43:48 --> 02:43:54
for a big tech company to make a

02:43:50 --> 02:43:58
difference in the python world

02:43:53 --> 02:44:01
uh we have affordable events that really

02:43:57 --> 02:44:05
care about community and support people

02:44:00 --> 02:44:09
and sort of the community is is

02:44:04 --> 02:44:13
it's like a big deal at our conferences

02:44:08 --> 02:44:16
and in in the BSF when the psf funds

02:44:12 --> 02:44:21
events it's always about

02:44:15 --> 02:44:23
growing the community the psf funds very

02:44:20 --> 02:44:26
little development

02:44:22 --> 02:44:29
hey that they do some but most of the

02:44:25 --> 02:44:31
develop most of the money that the psf

02:44:28 --> 02:44:34
orks out

02:44:30 --> 02:44:36
uh is to community

02:44:33 --> 02:44:39
fostering things

02:44:35 --> 02:44:42
So speaking of egalitarian last time we

02:44:38 --> 02:44:45
talked four years ago it was just after

02:44:41 --> 02:44:47
you stepped down from your role as the

02:44:44 --> 02:44:50
benevolent dictator for life pdfo

02:44:46 --> 02:44:51
looking back what are your insights and

02:44:49 --> 02:44:53
lessons

02:44:50 --> 02:44:56
you learn from that experience about

02:44:52 --> 02:45:00
python developer Community about human

02:44:55 --> 02:45:04
ature about human civilization

02:44:59 --> 02:45:08
life itself oh my uh

02:45:03 --> 02:45:09
I probably held on to the position too

02:45:07 --> 02:45:12
long

02:45:08 --> 02:45:16
I remember being just

02:45:11 --> 02:45:18
extremely stressed for a long time

02:45:15 --> 02:45:21
and

02:45:17 --> 02:45:24
it wasn't very clear to me

02:45:20 --> 02:45:26
what was leading what was causing the

02:45:23 --> 02:45:26
stress

02:45:26 --> 02:45:31
and looking back

02:45:28 --> 02:45:34
uh

02:45:30 --> 02:45:39
I I should have sort of

02:45:33 --> 02:45:40
relinquished my central role as bdfl

02:45:38 --> 02:45:43
sooner

02:45:39 --> 02:45:45
what were the pros and cons of the bdfl

02:45:42 --> 02:45:47
role like what were the you not

02:45:44 --> 02:45:49
relinquishing it what what are the

02:45:46 --> 02:45:52
benefits of that for the community and

02:45:48 --> 02:45:55
what are the drawbacks well the the

02:45:51 --> 02:45:57
benefits for the community would be

02:45:54 --> 02:45:59
things like

02:45:56 --> 02:46:04
uh

02:45:58 --> 02:46:09
Clarity of vision and sort of

02:46:03 --> 02:46:12
a clear Direction because I I had

02:46:08 --> 02:46:16
certain ideas in in mind when I created

02:46:11 --> 02:46:20
Python and well I sort of let myself be

02:46:15 --> 02:46:22
influenced by many other ideas as python

02:46:19 --> 02:46:26
evolved and became

02:46:21 --> 02:46:28
more successful and more complex and

02:46:25 --> 02:46:31
more used

02:46:27 --> 02:46:33
I also stuck to certain principles and

02:46:30 --> 02:46:35
it's still hard to say what are Python's

02:46:33 --> 02:46:40
core principles

02:46:34 --> 02:46:44
but the fact that I was playing that

02:46:39 --> 02:46:48
role and sort of always very active

02:46:43 --> 02:46:52
grew the community in a certain way

02:46:47 --> 02:46:53
it modeled to the community how to think

02:46:51 --> 02:46:56
about

02:46:52 --> 02:46:57
how to how to solve a certain problem

02:46:55 --> 02:46:59
well

02:46:56 --> 02:47:00
that was a source of stress but it was

02:46:58 --> 02:47:02
also beneficial it was a source of

02:46:59 --> 02:47:06
stress for me personally but it was

02:47:01 --> 02:47:08
beneficial for the community because uh

02:47:05 --> 02:47:10
people people sort of

02:47:07 --> 02:47:13
over time had

02:47:09 --> 02:47:15
learned how I was thinking and could

02:47:12 --> 02:47:18
predict

02:47:14 --> 02:47:20
yeah but how how I would decide about a

02:47:17 --> 02:47:23
particular issue and not always

02:47:19 --> 02:47:25
perfectly of course but there was like

02:47:22 --> 02:47:28
there wasn't a lot of jerking around

02:47:24 --> 02:47:31
like this year we're all this year the

02:47:27 --> 02:47:32
Democrats are in power and we're doing

02:47:30 --> 02:47:34
these kind of things and now the

02:47:31 --> 02:47:36
Republicans are in power and they roll

02:47:33 --> 02:47:37
all that back and do those kind of

02:47:35 --> 02:47:40
things

02:47:36 --> 02:47:42
there is a clear fairly straight path

02:47:39 --> 02:47:45
ahead

02:47:41 --> 02:47:48
and so fortunately the the successor

02:47:44 --> 02:47:52
structure with the steering Council

02:47:47 --> 02:47:54
has has sort of found a similar way of

02:47:51 --> 02:47:57
leading the community

02:47:53 --> 02:48:00
in a fairly steady Direction without

02:47:56 --> 02:48:03
stagnating and and for me personally

02:47:59 --> 02:48:05
it's more fun because there are there

02:48:02 --> 02:48:07
are things I can just ignore

02:48:04 --> 02:48:10
yeah oh yeah there's a bug in

02:48:06 --> 02:48:13
multi-processing let someone else decide

02:48:09 --> 02:48:16
whether that's important to solve or not

02:48:12 --> 02:48:20
I'll I'll stick to typing in the async

02:48:15 --> 02:48:21
io and the faster interpreter yeah it

02:48:19 --> 02:48:23
allows you to focus a little bit more

02:48:20 --> 02:48:25
yeah

02:48:22 --> 02:48:27
uh what are interesting differences in

02:48:24 --> 02:48:29
culture if you can comment on between

02:48:26 --> 02:48:31
Google Dropbox and Microsoft from our

02:48:28 --> 02:48:35
Python Programming perspective all

02:48:30 --> 02:48:37
places you've been to the positive

02:48:34 --> 02:48:40
is there a difference or is it just

02:48:36 --> 02:48:42
about people and there's great people

02:48:39 --> 02:48:43
verywhere or is there culture

02:48:41 --> 02:48:47
differences

02:48:42 --> 02:48:51
ort of Dropbox is much smaller than the

02:48:46 --> 02:48:54
other two in your list yeah so that

02:48:50 --> 02:48:56
is a big difference the set of

02:48:53 --> 02:48:58
products they provide is more it's

02:48:55 --> 02:49:01
narrower so they're more focused smaller

02:48:57 --> 02:49:04
code base yeah and and Dropbox sort of

02:49:00 --> 02:49:07
at least during the time I was there

02:49:03 --> 02:49:10
had the tendency of sort of

02:49:06 --> 02:49:13
making a big plan putting the whole

02:49:09 --> 02:49:16
company behind that plan for a year and

02:49:12 --> 02:49:18
then evaluate and then suddenly find

02:49:15 --> 02:49:21
that

02:49:17 --> 02:49:23
everything was wrong about the plan and

02:49:20 --> 02:49:24
then they had to do something completely

02:49:22 --> 02:49:26
different

02:49:23 --> 02:49:30
so there were there was like

02:49:25 --> 02:49:32
the annual engineering reorg was was

02:49:29 --> 02:49:34
ort of an unpleasant tradition that

02:49:31 --> 02:49:36
Dropbox because like oh there's a new VP

02:49:33 --> 02:49:39
of engineering and so now all the

02:49:35 --> 02:49:42
directors are being reshuffled and this

02:49:38 --> 02:49:44
guy was in charge of of

02:49:41 --> 02:49:47
infrastructure one year and the next

02:49:43 --> 02:49:49
year he was made in charge of I don't

02:49:46 --> 02:49:51
know product development

02:49:48 --> 02:49:52
it's fascinating because like you don't

02:49:50 --> 02:49:55
hink about these companies internally

02:49:51 --> 02:49:58
but I you know Dropbox to me from the

02:49:54 --> 02:49:59
very beginning was one of my favorite uh

02:49:57 --> 02:50:02
Services there's certain like programs

02:49:58 --> 02:50:04
and online services that

02:50:01 --> 02:50:06
make me happy make me more efficient and

02:50:03 --> 02:50:08
all that kind of stuff but one of the

02:50:05 --> 02:50:10
powers of those kinds of services they

02:50:07 --> 02:50:12
disappear they you're not supposed to

02:50:09 --> 02:50:14
think about how it all works but it's

02:50:11 --> 02:50:16
incredible to me that you can sync stuff

02:50:13 --> 02:50:20
effortlessly

02:50:15 --> 02:50:22
across so many machines so quickly and

02:50:19 --> 02:50:24
like don't have to worry about conflicts

02:50:21 --> 02:50:26
they they take care of the you know as a

02:50:24 --> 02:50:28
person that comes from version

02:50:25 --> 02:50:32
repositories and all that kind of stuff

02:50:27 --> 02:50:33
or merge is super difficult and uh just

02:50:31 --> 02:50:35
keeping different versions different

02:50:32 --> 02:50:37
files is very tricky the fact that they

02:50:34 --> 02:50:39
could take care of that is just I don't

02:50:36 --> 02:50:41
know the the engineering behind the

02:50:38 --> 02:50:43
scenes must be super difficult both on

02:50:40 --> 02:50:47
the computer infrastructure and the

02:50:42 --> 02:50:50
software a lot of internal sort of

02:50:46 --> 02:50:53
hand-wringing about things like that but

02:50:49 --> 02:50:56
he the product itself always worked

02:50:52 --> 02:50:58
very smoothly yeah it does but there's

02:50:55 --> 02:51:00
probably a lot of lessons to that you

02:50:57 --> 02:51:03
can have a lot of turmoil inside on the

02:50:59 --> 02:51:04
ngineering side but If the product is

02:51:02 --> 02:51:06
good the product is good and don't maybe

02:51:03 --> 02:51:08
don't mess with that either it is you

02:51:06 --> 02:51:10
know when it's good

02:51:07 --> 02:51:12
keep it's like with Google focus on the

02:51:09 --> 02:51:15
search and the ads

02:51:11 --> 02:51:17
right like and the money will come yeah

02:51:14 --> 02:51:19
and make sure that's done extremely well

02:51:16 --> 02:51:22
and don't forget what you do extremely

02:51:18 --> 02:51:25
well and in what ways do you provide

02:51:21 --> 02:51:27
value and happiness to the world make

02:51:24 --> 02:51:29
sure you do that well

02:51:26 --> 02:51:31
um is there something else to say about

02:51:28 --> 02:51:34
Google and Microsoft Microsoft has said

02:51:30 --> 02:51:38
a very fascinating shift recently with

02:51:33 --> 02:51:40
e new CEO uh what you know recent CEO

02:51:37 --> 02:51:43
with purchasing GitHub

02:51:39 --> 02:51:44
embracing open source culture embracing

02:51:42 --> 02:51:46
the developer culture is pretty

02:51:43 --> 02:51:48
interesting to see that's like why I

02:51:45 --> 02:51:51
joined Microsoft

02:51:47 --> 02:51:54
I mean after after retiring and thinking

02:51:50 --> 02:51:55
that I would stay retired for the rest

02:51:53 --> 02:51:58
of my life which of course was a

02:51:54 --> 02:52:01
ridiculous thought but that I was I was

02:51:57 --> 02:52:03
done working for a bit and then

02:52:00 --> 02:52:06
the pandemic made me realize that work

02:52:02 --> 02:52:08
can also provide a source of

02:52:05 --> 02:52:11
ulfillment

02:52:07 --> 02:52:14
keep you keep you out of trouble

02:52:10 --> 02:52:18
uh Microsoft is a very interesting

02:52:13 --> 02:52:23
company because it has this incredible

02:52:17 --> 02:52:27
very long and varied history and this

02:52:22 --> 02:52:30
amazing catalog of products that many of

02:52:26 --> 02:52:33
which also date way back

02:52:29 --> 02:52:33
I mean

02:52:32 --> 02:52:39
I've been been talking to a bunch of

02:52:35 --> 02:52:42
excel people lately and Excel is like 35

02:52:38 --> 02:52:45
years old yeah and they can still read

02:52:41 --> 02:52:49
spreadsheets that that they might find

02:52:44 --> 02:52:49
on an old floppy Drive

02:52:48 --> 02:52:54
yeah there's man they built so many

02:52:50 --> 02:52:59
incredible tools through the years

02:52:53 --> 02:53:01
Excel one of the great shames of my life

02:52:58 --> 02:53:04
is that I've never learned how to use

02:53:00 --> 02:53:06
Excel well I mean it just always felt

02:53:03 --> 02:53:09
like so many features are there it's

02:53:05 --> 02:53:12
imilar with ideas like pie charm

02:53:08 --> 02:53:14
it feels like I I converge quickly to

02:53:11 --> 02:53:16
the dumbest way to use a thing to get

02:53:13 --> 02:53:18
he job done when clearly there's so

02:53:15 --> 02:53:21
much more power at your fingertips

02:53:17 --> 02:53:23
yeah but there's I I do think there's

02:53:20 --> 02:53:27
probably expert users of Excel and oh

02:53:22 --> 02:53:30
that Excel is a cash cow actually oh it

02:53:26 --> 02:53:33
actually brings in money oh yeah a lot

02:53:29 --> 02:53:35
of the engineering sort of if you look

02:53:32 --> 02:53:38
deep inside Excel

02:53:34 --> 02:53:40
there's some very good engineering very

02:53:37 --> 02:53:42
impressive stuff

02:53:39 --> 02:53:45
okay now I need to definitely learn it's

02:53:41 --> 02:53:48
a little better I had issues because I'm

02:53:44 --> 02:53:49
a keyboard person so I had issues coming

02:53:47 --> 02:53:50
up with shortcuts I mean Microsoft

02:53:48 --> 02:53:52
sometimes

02:53:49 --> 02:53:54
uh it's changed over the years but

02:53:51 --> 02:53:57
sometimes they kind of want to make

02:53:53 --> 02:54:01
things easier for you on the surface and

02:53:56 --> 02:54:03
therefore make it harder for like uh

02:54:00 --> 02:54:05
people that like to have shortcuts and

02:54:02 --> 02:54:07
all that kind of stuff to optimize their

02:54:04 --> 02:54:09
workflow now Excel is probably people

02:54:06 --> 02:54:11
are probably yelling at me and it's like

02:54:08 --> 02:54:14
no Excel probably has a lot of ways to

02:54:10 --> 02:54:16
ptimize work in fact I keep discovering

02:54:13 --> 02:54:20
that there are many features in Excel

02:54:15 --> 02:54:22
that only exists at keyboard shortcuts

02:54:19 --> 02:54:25
yeah that's the sense I have and now

02:54:21 --> 02:54:26
like I'm embarrassed that it's just you

02:54:24 --> 02:54:30
just have to know what they are yeah

02:54:25 --> 02:54:32
that's that's like there's no logic or

02:54:29 --> 02:54:34
Reason to the assignment of the

02:54:31 --> 02:54:38
keyboard shortcuts because they they go

02:54:33 --> 02:54:40
back even longer than 35 years

02:54:37 --> 02:54:43
can you maybe comment about Sachin Adela

02:54:39 --> 02:54:45
nd how hard it is for CEO to sort of

02:54:42 --> 02:54:47
pivot a company towards open source or

02:54:44 --> 02:54:50
develop a culture is there something you

02:54:46 --> 02:54:52
could see about like how what's the role

02:54:49 --> 02:54:54
of leadership in such a

02:54:51 --> 02:55:00
pivot and definition of a new vision

02:54:53 --> 02:55:03
I've never met him but uh I hear

02:54:59 --> 02:55:05
he's just a really sharp

02:55:02 --> 02:55:08
thinker

02:55:04 --> 02:55:09
but he also has an incredible business

02:55:07 --> 02:55:12
ense

02:55:08 --> 02:55:16
he took the organization that had very

02:55:11 --> 02:55:17
solid pieces but that was also

02:55:15 --> 02:55:21
struggling

02:55:16 --> 02:55:24
with all sorts of shameful things

02:55:20 --> 02:55:27
especially the Steve Ballmer time

02:55:23 --> 02:55:30
I imagine in part through his personal

02:55:26 --> 02:55:32
charm and thinking and of course the the

02:55:29 --> 02:55:34
great trust that that the the rest of

02:55:31 --> 02:55:37
the leadership has in him he managed to

02:55:33 --> 02:55:39
Really Turn the company around and

02:55:36 --> 02:55:42
sort of

02:55:38 --> 02:55:44
change it from from openly hostile to

02:55:41 --> 02:55:48
pen source

02:55:43 --> 02:55:50
to to actively embracing open source and

02:55:47 --> 02:55:53
that doesn't mean that suddenly Excel is

02:55:49 --> 02:55:55
going to go open source but that means

02:55:52 --> 02:55:57
that there's room for a product like vs

02:55:54 --> 02:56:00
code which is open source

02:55:56 --> 02:56:02
yeah that's fascinating it gives me

02:55:59 --> 02:56:05
faith that large companies with good

02:56:01 --> 02:56:08
leadership can grow can expand can

02:56:04 --> 02:56:10
change and pivot and so on develop

02:56:07 --> 02:56:12
because it gets harder and harder as the

02:56:09 --> 02:56:14
company gets large

02:56:11 --> 02:56:16
um you wrote a blog post in response to

02:56:13 --> 02:56:18
a person looking for advice about

02:56:15 --> 02:56:21
whether with the Cs degree to choose a

02:56:17 --> 02:56:23
nine to five job or to become an

02:56:20 --> 02:56:25
entrepreneur it's an interesting

02:56:22 --> 02:56:29
question if you just think from first

02:56:24 --> 02:56:30
principles right now somebody has took a

02:56:28 --> 02:56:32
few years in programming has loved

02:56:29 --> 02:56:35
software engineering in some sense

02:56:31 --> 02:56:37
creating python is an entrepreneurial

02:56:34 --> 02:56:39
endeavor

02:56:36 --> 02:56:41
that's a choice that a lot of people

02:56:38 --> 02:56:43
that are good programmers have to make

02:56:40 --> 02:56:45
do I work for

02:56:42 --> 02:56:48
a big company or do I create something

02:56:44 --> 02:56:48
new

02:56:47 --> 02:56:54
or you can work for a big company and

02:56:50 --> 02:56:57
create something new there

02:56:53 --> 02:57:01
oh inside the yeah I mean big companies

02:56:56 --> 02:57:05
have individuals who create new stuff

02:57:00 --> 02:57:06
that eventually grows big all the time

02:57:04 --> 02:57:09
and if you're the person that creates a

02:57:05 --> 02:57:10
new thing and grows big you you'll have

02:57:08 --> 02:57:13
a chance to move up quickly in the

02:57:09 --> 02:57:15
company to run that thing

02:57:12 --> 02:57:18
if that's your aspiration what what what

02:57:14 --> 02:57:21
can also happen is that

02:57:17 --> 02:57:24
someone is brilliant engineer and sort

02:57:20 --> 02:57:26
of builds a great first version of a

02:57:23 --> 02:57:29
product

02:57:25 --> 02:57:32
and has no aspirations

02:57:28 --> 02:57:35
to then become a manager and grow the

02:57:31 --> 02:57:38
team from five people to 20 people to

02:57:34 --> 02:57:41
100 people to a thousand people and

02:57:37 --> 02:57:43
be in charge of hiring and meetings and

02:57:40 --> 02:57:47
they move on to

02:57:42 --> 02:57:50
inventing another crazy thing inside the

02:57:46 --> 02:57:54
same company or sometimes they

02:57:49 --> 02:57:56
found a startup or they moved to a

02:57:53 --> 02:57:59
different great large or small company

02:57:55 --> 02:58:02
there's all sorts of models

02:57:58 --> 02:58:05
and sometimes people sort of do have

02:58:01 --> 02:58:09
this whole trajectory from engineer

02:58:04 --> 02:58:12
buckling down writing code

02:58:08 --> 02:58:14
not nine to five but more like

02:58:11 --> 02:58:16
noon till midnight

02:58:13 --> 02:58:22
seven days a week

02:58:15 --> 02:58:25
and coming up with a product and sort of

02:58:21 --> 02:58:28
staying in charge I mean if you take

02:58:24 --> 02:58:30
drew a house and dropbox's founder he is

02:58:27 --> 02:58:33
till the CEO

02:58:29 --> 02:58:36
and at least when when I was there he

02:58:32 --> 02:58:40
had not checked out or anything he was

02:58:35 --> 02:58:43
good CEO but he had started out

02:58:39 --> 02:58:47
as the technical inventor or co-inventor

02:58:42 --> 02:58:50
yeah and so he was someone who

02:58:46 --> 02:58:52
I don't know if he always aspired that I

02:58:49 --> 02:58:54
think when when he was 16 he already

02:58:51 --> 02:58:56
started a company so maybe maybe he did

02:58:54 --> 02:58:59
but he sort of

02:58:55 --> 02:59:03
it turned out that that he had he did

02:58:58 --> 02:59:07
have the the personal sort of skill set

02:59:02 --> 02:59:09
needed to to grow and and stay on top

02:59:06 --> 02:59:12
and other people sort of

02:59:08 --> 02:59:15
our brilliant engineers and horrible at

02:59:11 --> 02:59:18
management I I count myself at least in

02:59:14 --> 02:59:20
the second category so you're you're

02:59:17 --> 02:59:22
your first love and still your love is

02:59:19 --> 02:59:26
to be the quote unquote individual

02:59:21 --> 02:59:30
contributor so the programmer

02:59:25 --> 02:59:32
do you have advice for a programming

02:59:29 --> 02:59:35
beginner on How to Learn Python the

02:59:31 --> 02:59:35
right way

02:59:36 --> 02:59:42
find something you actually want to do

02:59:40 --> 02:59:44
with it

02:59:41 --> 02:59:47
if you say

02:59:43 --> 02:59:50
I want to learn skill X

02:59:46 --> 02:59:52
that's not enough motivation you need to

02:59:49 --> 02:59:55
pick something

02:59:51 --> 02:59:57
and it can be it can be a crazy problem

02:59:54 --> 03:00:00
you want to solve it can be completely

02:59:56 --> 03:00:00
unrealistic

03:00:00 --> 03:00:08
but something that that challenges you

03:00:03 --> 03:00:11
in into actually learning

03:00:07 --> 03:00:13
coding in in some language

03:00:10 --> 03:00:15
and there's so many projects out there

03:00:12 --> 03:00:16
you can look for like that that doesn't

03:00:14 --> 03:00:19
have to be some big ambitious thing it

03:00:15 --> 03:00:21
could be writing a small bot if you're

03:00:18 --> 03:00:25
into social media you can write a read

03:00:20 --> 03:00:27
about or a Twitter bot or uh or some

03:00:24 --> 03:00:30
aspect of automating some as something

03:00:26 --> 03:00:32
that you do every single day processing

03:00:29 --> 03:00:35
files all that kind of stuff nowadays

03:00:31 --> 03:00:36
you can take machine learning components

03:00:34 --> 03:00:41
and and sort of

03:00:36 --> 03:00:42
plug those things together so cool stuff

03:00:40 --> 03:00:43
with them so that's actually a really

03:00:41 --> 03:00:45
good example so if you're interested in

03:00:42 --> 03:00:48
machine learning the state of machine

03:00:44 --> 03:00:51
learning is such that like a a tutorial

03:00:47 --> 03:00:54
that takes an hour can get you to start

03:00:50 --> 03:00:56
using uh pre-trained models to do

03:00:53 --> 03:00:58
something super cool and that's a good

03:00:55 --> 03:01:00
way to Learn Python because you learn

03:00:57 --> 03:01:02
just enough to run this model and that's

03:00:59 --> 03:01:05
like a sneaky way to get get in there to

03:01:01 --> 03:01:08
figure out how to import stuff how to

03:01:04 --> 03:01:11
write basic i o

03:01:07 --> 03:01:13
how to run functions and I'm not sure if

03:01:10 --> 03:01:15
it's the best way to learn the basics of

03:01:12 --> 03:01:17
python but it could be nice to just get

03:01:15 --> 03:01:20
fall in love first and then figure out

03:01:16 --> 03:01:23
he basics right yeah you can't expect

03:01:19 --> 03:01:26
o Learn Python from a one hour video

03:01:22 --> 03:01:29
recording blanking out on the name of of

03:01:25 --> 03:01:32
someone who

03:01:28 --> 03:01:34
wrote a very funny blog post where

03:01:31 --> 03:01:37
he said

03:01:33 --> 03:01:42
I see all these ads for things like

03:01:36 --> 03:01:44
Learn Python in 10 days or so and he

03:01:41 --> 03:01:48
said the goal should be Learn Python in

03:01:43 --> 03:01:50
10 years that's hilarious but I

03:01:47 --> 03:01:53
completely disagree with that I think

03:01:49 --> 03:01:55
the criticism behind that is that

03:01:52 --> 03:01:57
he the places just like the blog post

03:01:54 --> 03:01:59
from earlier the places that tell you

03:01:56 --> 03:02:01
learn python in five minutes or 10

03:01:58 --> 03:02:03
minutes they're actually usually really

03:02:00 --> 03:02:07
bad tutorials so the thing is I do

03:02:02 --> 03:02:10
believe that you can learn a thing

03:02:06 --> 03:02:14
in an hour to like get some interesting

03:02:09 --> 03:02:15
quick like it hooks you I mean this but

03:02:13 --> 03:02:16
it just takes a tremendous amount of

03:02:14 --> 03:02:19
skill to be that kind of educator

03:02:15 --> 03:02:21
Richard Feynman was able to condense a

03:02:18 --> 03:02:23
lot of ideas and physics in a very short

03:02:20 --> 03:02:25
amount of time but that takes a deep

03:02:22 --> 03:02:28
understanding and so yes of course

03:02:24 --> 03:02:31
the actual I think the 10 the 10 years

03:02:27 --> 03:02:33
is about the experience the pain along

03:02:30 --> 03:02:37
the way and there's something you have

03:02:32 --> 03:02:39
to practice you can memorize the syntax

03:02:36 --> 03:02:41
but well I couldn't but maybe maybe

03:02:38 --> 03:02:45
someone else can but that doesn't make

03:02:40 --> 03:02:48
you a coder yeah actually coding has

03:02:44 --> 03:02:50
changed in fascinating ways because so

03:02:47 --> 03:02:53
much of uh coding is copying pasting

03:02:49 --> 03:02:55
from stack Overflow and then adjusting

03:02:52 --> 03:02:56
which is another way of coding and I

03:02:54 --> 03:02:58
don't want to talk down to that kind of

03:02:55 --> 03:03:00
style of coding because it's kind of

03:02:57 --> 03:03:03
nicely efficient but you know where that

03:02:59 --> 03:03:03
is going

03:03:05 --> 03:03:13
I use it every day and it really yeah it

03:03:09 --> 03:03:16
writes a lot of code for me and usually

03:03:12 --> 03:03:18
it's slightly wrong but it still saves

03:03:15 --> 03:03:21
me typing because all I have to do is

03:03:17 --> 03:03:24
like change one word in a line of text

03:03:21 --> 03:03:28
hat otherwise it it generated perfectly

03:03:23 --> 03:03:30
and like how many times are you looking

03:03:27 --> 03:03:32
for like oh what was I doing this

03:03:29 --> 03:03:34
morning I was looking for a begin marker

03:03:31 --> 03:03:38
and I look was looking for an end marker

03:03:33 --> 03:03:42
and so begin is

03:03:37 --> 03:03:46
blah blah blah search for begin this is

03:03:41 --> 03:03:49
the begin token and then the next line I

03:03:45 --> 03:03:52
type e and it it completes the whole

03:03:48 --> 03:03:55
line with end instead of begin that's a

03:03:51 --> 03:03:55
very simple example sometimes it it sort

03:03:54 --> 03:03:58
of

03:03:54 --> 03:04:01
if I name my function right it writes a

03:03:57 --> 03:04:05
5 or 10 line function

03:04:00 --> 03:04:08
and you know python enough to very

03:04:04 --> 03:04:10
quickly then detect the issues so it

03:04:07 --> 03:04:12
becomes a really good dance partner then

03:04:09 --> 03:04:15
it doesn't save me a lot of thinking but

03:04:11 --> 03:04:18
since I'm a poor typist I'm very much

03:04:14 --> 03:04:20
appreciative of all the all the typing

03:04:17 --> 03:04:23
it does for me

03:04:19 --> 03:04:25
much better actually than the the

03:04:22 --> 03:04:28
previous generation of suggestions that

03:04:24 --> 03:04:31
are also still built in vs code

03:04:27 --> 03:04:35
uh where when you hit like a DOT

03:04:30 --> 03:04:37
it it tries to guess what the type is of

03:04:34 --> 03:04:39
the variable to the left of the dot and

03:04:36 --> 03:04:42
then it gives you a list a pop-down menu

03:04:38 --> 03:04:45
of what the attributes of that object

03:04:41 --> 03:04:46
are but copilot is much much smoother

03:04:44 --> 03:04:50
than that well it's fascinating to hear

03:04:45 --> 03:04:52
that you use GitHub copilot uh do you

03:04:49 --> 03:04:53
think do you worry about the future of

03:04:51 --> 03:04:57
that

03:04:52 --> 03:05:00
um did the automatic code generation

03:04:56 --> 03:05:02
the increasing amount of that kind of

03:04:59 --> 03:05:05
capability are programmers

03:05:01 --> 03:05:06
jobs threatened or is there still a

03:05:04 --> 03:05:08
significant role for human our

03:05:05 --> 03:05:11
programmers jobs threatened by the

03:05:07 --> 03:05:14
xistence of stack overflow

03:05:10 --> 03:05:17
I don't think so it helps you take care

03:05:13 --> 03:05:20
of the boring stuff and you shouldn't

03:05:16 --> 03:05:23
ry to use it to do something that you

03:05:19 --> 03:05:25
have no way of understanding what you're

03:05:22 --> 03:05:29
doing yet

03:05:24 --> 03:05:31
a tool like that is always best when the

03:05:28 --> 03:05:33
question you're asking is please remind

03:05:30 --> 03:05:35
me of how I do this

03:05:32 --> 03:05:38
which I

03:05:34 --> 03:05:42
could do I could look up how to do it

03:05:37 --> 03:05:45
but right now I've forgotten whether the

03:05:41 --> 03:05:48
method is called Foo or bar or how you

03:05:44 --> 03:05:52
what the shape of the API is does it use

03:05:47 --> 03:05:54
a builder object or a Constructor or a

03:05:51 --> 03:05:57
factory or

03:05:53 --> 03:06:01
uh something else and what are the

03:05:56 --> 03:06:02
parameters it serves that role it's like

03:06:00 --> 03:06:05
a great assistant

03:06:01 --> 03:06:07
but the creative work of sort of

03:06:04 --> 03:06:11
deciding what you want what you want the

03:06:06 --> 03:06:12
code to do is is totally yours

03:06:10 --> 03:06:15
what do you think is the future of

03:06:12 --> 03:06:17
python in the next 10 20 50 years 100

03:06:14 --> 03:06:20
years you look forward you ever think

03:06:16 --> 03:06:22
about you ever imagine a future

03:06:19 --> 03:06:24
of human civilization or living inside

03:06:21 --> 03:06:26
the metaverse

03:06:23 --> 03:06:28
on Mars

03:06:25 --> 03:06:31
humanoid robots everywhere what part

03:06:27 --> 03:06:34
does python play in that

03:06:30 --> 03:06:37
it'll eventually become sort of a legacy

03:06:33 --> 03:06:39
language uh that plays an important role

03:06:36 --> 03:06:42
but that that most people have never

03:06:38 --> 03:06:44
heard of and uh don't need to know about

03:06:41 --> 03:06:46
just like

03:06:43 --> 03:06:49
all kinds of

03:06:45 --> 03:06:52
basic structures in in

03:06:48 --> 03:06:55
biology like mitochondria

03:06:51 --> 03:06:57
so it permeates all of life all of

03:06:54 --> 03:06:59
digital life but people just build on

03:06:56 --> 03:07:02
top of it and they only know the stuff

03:06:58 --> 03:07:03
that's on top of it yeah

03:07:01 --> 03:07:06
you guys you build layers of

03:07:02 --> 03:07:07
abstractions I mean most programmers

03:07:05 --> 03:07:11
nowadays

03:07:06 --> 03:07:13
rarely need to do binary arithmetic

03:07:10 --> 03:07:13
right

03:07:13 --> 03:07:19
yeah or even think about it or even

03:07:16 --> 03:07:22
learn about it or they could go quite

03:07:18 --> 03:07:25
far without knowing I started

03:07:21 --> 03:07:28
building little digital circuits out of

03:07:24 --> 03:07:31
nand gates that I built myself with

03:07:27 --> 03:07:34
transistors and resistors so I'd sort of

03:07:30 --> 03:07:36
I feel very blessed that

03:07:33 --> 03:07:38
with with that start when I was a

03:07:35 --> 03:07:42
teenager

03:07:37 --> 03:07:43
I I learned some of the basic at least

03:07:41 --> 03:07:47
Concepts

03:07:42 --> 03:07:50
that that go into building a computer

03:07:46 --> 03:07:54
and I sort of every part

03:07:49 --> 03:07:57
I have some understanding what

03:07:53 --> 03:08:00
it's for and why it's there and how

03:07:56 --> 03:08:02
it works and I can forget about all that

03:07:59 --> 03:08:05
most of the time but I sort of

03:08:01 --> 03:08:09
I enjoy knowing oh if you go deeper you

03:08:04 --> 03:08:14
at some point you get to uh nand Gates

03:08:08 --> 03:08:16
and have others and shift registers and

03:08:13 --> 03:08:18
when it comes to the point of how do you

03:08:15 --> 03:08:20
actually make a chip out of

03:08:17 --> 03:08:21
silicon I have no idea that's just magic

03:08:19 --> 03:08:24
to me

03:08:20 --> 03:08:26
but you enjoy knowing that you can walk

03:08:23 --> 03:08:28
a while towards the lower and lower

03:08:25 --> 03:08:31
layers but you don't need to

03:08:27 --> 03:08:34
it's nice the other day as a sort of

03:08:30 --> 03:08:39
a mental exercise I was trying to figure

03:08:33 --> 03:08:39
out if I could build a

03:08:38 --> 03:08:46
flip-flop circuit out of uh relays

03:08:43 --> 03:08:49
it was just sort of

03:08:45 --> 03:08:51
trying to remember oh how does it really

03:08:48 --> 03:08:53
relay work yeah there's like this

03:08:50 --> 03:08:57
electromagnetic

03:08:52 --> 03:09:00
force that pulls a switch open or shut

03:08:56 --> 03:09:02
uh and you can have have like it can

03:08:59 --> 03:09:04
open one switch and another shut another

03:09:01 --> 03:09:07
and

03:09:03 --> 03:09:09
uh you can have multiple contacts that

03:09:06 --> 03:09:12
go at once and how many relays do I

03:09:08 --> 03:09:15
really need to sort of represent one bit

03:09:11 --> 03:09:18
of information can really just feed on

03:09:14 --> 03:09:20
itself there was I don't think I I got

03:09:17 --> 03:09:22
o the final solution but it was fun

03:09:19 --> 03:09:24
that I

03:09:21 --> 03:09:27
could still do a little bit of problem

03:09:23 --> 03:09:29
solving and thinking at that level

03:09:26 --> 03:09:31
and it's cool how we build on top of

03:09:28 --> 03:09:34
each other so there's people that are

03:09:30 --> 03:09:35
just you you stood on the shoulders of

03:09:33 --> 03:09:38
giants and there's others will stand on

03:09:34 --> 03:09:40
your shoulders and it's it's a giant

03:09:37 --> 03:09:43
beautiful hire yeah I feel I sort of

03:09:39 --> 03:09:46
cover covered this middle layer of the

03:09:42 --> 03:09:48
technology stack where and sort of

03:09:45 --> 03:09:51
Peters out glow the

03:09:47 --> 03:09:55
level of of nand gates

03:09:50 --> 03:09:57
and at the at the top I sort of I lose

03:09:54 --> 03:09:59
track when it gets to machine learning

03:09:56 --> 03:10:02
and then eventually the machine learning

03:09:58 --> 03:10:04
will build higher and higher layers that

03:10:01 --> 03:10:06
will help us understand the lowest layer

03:10:03 --> 03:10:09
of the physics and thereby the universe

03:10:05 --> 03:10:13
figures out how

03:10:08 --> 03:10:16
it itself Works maybe maybe not

03:10:12 --> 03:10:18
yeah I did I mean it's it's possible I

03:10:15 --> 03:10:22
mean if you think of human consciousness

03:10:17 --> 03:10:25
if that's even the right concept

03:10:21 --> 03:10:28
it's it's interesting that that sort of

03:10:24 --> 03:10:30
we have this super parallel brain that

03:10:27 --> 03:10:32
does all these

03:10:29 --> 03:10:34
incredible parallel operations like

03:10:31 --> 03:10:37
image recognition

03:10:33 --> 03:10:40
I recognize your face does you huge

03:10:36 --> 03:10:42
amount of processing that goes on in

03:10:39 --> 03:10:44
parallel there's lots of nerves between

03:10:41 --> 03:10:46
my eyes and my brain

03:10:43 --> 03:10:48
and the brain does a whole bunch of

03:10:45 --> 03:10:50
stuff all at once because it's actually

03:10:47 --> 03:10:53
a really slow circuits but there are

03:10:49 --> 03:10:56
many of them that all work together

03:10:52 --> 03:10:59
on the other hand when I'm speaking

03:10:55 --> 03:11:02
everything is completely sequential

03:10:58 --> 03:11:04
I I have to sort of string words

03:11:01 --> 03:11:07
together one at a time

03:11:03 --> 03:11:10
and when I'm thinking about stuff when

03:11:06 --> 03:11:13
I'm when I'm understanding the world

03:11:09 --> 03:11:16
I'm also thinking of everything like one

03:11:12 --> 03:11:18
step at a time

03:11:15 --> 03:11:21
and so we we've we've sort of we've got

03:11:17 --> 03:11:24
all this this incredible

03:11:20 --> 03:11:28
parallel circuitry in our brains and

03:11:23 --> 03:11:31
eventually we use that to simulate a

03:11:27 --> 03:11:34
single threaded much much higher level

03:11:30 --> 03:11:34
interpreter

03:11:34 --> 03:11:39
uh it's exactly I mean that's the

03:11:36 --> 03:11:41
illusion of it that's the illusion

03:11:38 --> 03:11:44
of it for us that it's a single

03:11:40 --> 03:11:46
sequential set of thoughts and all of

03:11:43 --> 03:11:50
that came from a single cell through the

03:11:45 --> 03:11:51
process of embryogenesis so DNA is the

03:11:49 --> 03:11:54
code

03:11:50 --> 03:11:56
DNA holds the entirety of the code the

03:11:53 --> 03:11:59
information and how to use that

03:11:55 --> 03:12:00
information to build up an organism the

03:11:58 --> 03:12:03
ntire like

03:11:59 --> 03:12:06
the arms how is it built yeah the brain

03:12:02 --> 03:12:09
it's so it's you don't buy a computer

03:12:05 --> 03:12:12
you buy like uh you buy a a seed a

03:12:08 --> 03:12:15
diagram and then you plant the computer

03:12:11 --> 03:12:18
and it builds itself in almost the same

03:12:14 --> 03:12:22
way and then does the computation and

03:12:17 --> 03:12:25
then is uh eventually dies

03:12:21 --> 03:12:26
it gets stale but gives birth to Young

03:12:24 --> 03:12:28
computers

03:12:25 --> 03:12:30
more and more and gives them lessons but

03:12:27 --> 03:12:34
hey figure stuff out on their own and

03:12:29 --> 03:12:36
over time it goes on that way and those

03:12:33 --> 03:12:38
computers when they go to college try to

03:12:35 --> 03:12:40
figure out how to program and they built

03:12:37 --> 03:12:41
heir own little computers they're

03:12:39 --> 03:12:44
increasingly more intelligent

03:12:40 --> 03:12:46
increasingly higher and higher levels of

03:12:43 --> 03:12:49
abstractions isn't it interesting that

03:12:45 --> 03:12:52
you sort of you see the same thing

03:12:48 --> 03:12:55
appearing at different levels though

03:12:51 --> 03:13:00
because you have like

03:12:54 --> 03:13:02
cells that that create new cells

03:12:59 --> 03:13:05
and and eventually that builds a whole

03:13:01 --> 03:13:07
organism but then the animal or the

03:13:04 --> 03:13:11
plant or the human

03:13:06 --> 03:13:16
has its own mechanism of replication

03:13:10 --> 03:13:18
that that is is sort of connected in a

03:13:15 --> 03:13:21
very complicated way to the mechanism of

03:13:18 --> 03:13:24
replication of the cells and then if you

03:13:20 --> 03:13:27
look inside the cell if you see

03:13:23 --> 03:13:29
how DNA and proteins are are connected

03:13:26 --> 03:13:33
then there is yet another completely

03:13:28 --> 03:13:35
different mechanism whereby proteins are

03:13:32 --> 03:13:38
mass produced

03:13:34 --> 03:13:41
using enzymes and and and a little bit

03:13:37 --> 03:13:45
of code from from DNA and of course

03:13:40 --> 03:13:47
viruses break into it at that level

03:13:44 --> 03:13:50
and while the mechanisms might be

03:13:46 --> 03:13:53
different it seems like the nature of

03:13:49 --> 03:13:57
the mechanism is the same and it carries

03:13:52 --> 03:13:58
across natural languages and programming

03:13:56 --> 03:14:00
languages

03:13:57 --> 03:14:02
humans

03:13:59 --> 03:14:04
uh maybe even human civilizations or

03:14:01 --> 03:14:07
intelligent civilizations

03:14:03 --> 03:14:09
and then all the way down to uh the

03:14:06 --> 03:14:11
single cell organism it is it is

03:14:08 --> 03:14:15
fascinating to see what abstraction

03:14:10 --> 03:14:18
levels are built on top of individual

03:14:14 --> 03:14:20
humans yeah and how you have like whole

03:14:17 --> 03:14:23
societies

03:14:19 --> 03:14:26
that that sort of have a similar

03:14:22 --> 03:14:29
self-preservation

03:14:25 --> 03:14:30
I don't know what it is Instinct nature

03:14:28 --> 03:14:34
abstraction

03:14:29 --> 03:14:36
as the individuals have and the cells

03:14:33 --> 03:14:38
have and they self-replicate and breed

03:14:35 --> 03:14:40
in different ways it's hard for us

03:14:37 --> 03:14:42
humans to introspect it because we were

03:14:39 --> 03:14:45
very focused on our particular layer of

03:14:41 --> 03:14:47
abstraction but from an alien

03:14:44 --> 03:14:50
perspective looking on Earth they'll

03:14:46 --> 03:14:53
probably see the higher level

03:14:49 --> 03:14:55
organism of human civilization

03:14:52 --> 03:14:57
as part of this bigger organism of life

03:14:54 --> 03:15:00
on Earth itself in fact that could be an

03:14:56 --> 03:15:01
organism just alone just life life life

03:14:59 --> 03:15:05
on Earth

03:15:00 --> 03:15:07
uh this has been a wild both

03:15:04 --> 03:15:09
philosophical and Technical conversation

03:15:06 --> 03:15:11
Guido you're you're an amazing human

03:15:08 --> 03:15:13
being you're you're gracious enough to

03:15:10 --> 03:15:15
talk to me when I was first doing this

03:15:12 --> 03:15:18
podcast or one of the earliest first

03:15:14 --> 03:15:20
people I've talked to uh somebody I

03:15:17 --> 03:15:21
admired for a long time it's just a huge

03:15:19 --> 03:15:23
honor that you did it at that time and

03:15:20 --> 03:15:24
you do it again you're awesome thank you

03:15:22 --> 03:15:26
Lex

03:15:23 --> 03:15:28
thanks for listening to this

03:15:25 --> 03:15:30
conversation with Guido Ben Rossum to

03:15:27 --> 03:15:32
support this podcast please check out

03:15:29 --> 03:15:34
our sponsors in the description and now

03:15:31 --> 03:15:37
let me leave you some words from Oscar

03:15:33 --> 03:15:39
Wilde experience is the name that

03:15:36 --> 03:15:41
everyone gives to their mistakes

03:15:38 --> 03:15:44
thank you for listening and hope to see

03:15:40 --> 03:15:44
you next time

<!-- YOUTUBE_TRANSCRIPT_END -->
