---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "G1-wse8nsxY"
title: "C Programming Language | Brian Kernighan and Lex Fridman"
video_url: "https://www.youtube.com/watch?v=G1-wse8nsxY"
thumbnail_url: "https://i.ytimg.com/vi/G1-wse8nsxY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=G1-wse8nsxY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-07-19T13:15:00.000Z"
upload_date: "2020-07-19"
duration_seconds: 378
duration_human: "6:18"
view_count: 184467
like_count: 5562
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:25:17.505Z"
---

# C Programming Language | Brian Kernighan and Lex Fridman

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=G1-wse8nsxY
- video_id: G1-wse8nsxY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-07-19T13:15:00.000Z
- upload_date: 2020-07-19
- duration: 6:18
- view_count: 184467
- like_count: 5562
- has_subtitle: true
- language: en
- availability: public
- tags: brian kernighan, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex friedman, joe rogan, elon musk, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips, deep learning, machine learning, computer science, engineering, physics, science, tech, technology, tech podcast, physics podcast, mathematics, math, math podcast, friedman, consciousness, philosophy, turing, einstein
- categories: Science & Technology

## Description

Full episode with Brian Kernighan (Jul 2020): https://www.youtube.com/watch?v=O9upVbGSBFo
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

Brian Kernighan is a professor of computer science at Princeton University. He co-authored the C Programming Language with Dennis Ritchie (creator of C) and has written a lot of books on programming, computers, and life including the Practice of Programming, the Go Programming Language, his latest UNIX: A History and a Memoir. He co-created AWK, the text processing language used by Linux folks like myself. He co-designed AMPL, an algebraic modeling language for large-scale optimization.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:02 --> 00:00:07
so what's to use

00:00:03 --> 00:00:08
you wrote a book c programming language

00:00:06 --> 00:00:10
what and c

00:00:07 --> 00:00:12
is probably one of the most important

00:00:10 --> 00:00:13
languages in the history of programming

00:00:11 --> 00:00:16
languages

00:00:12 --> 00:00:17
if if you kind of look at impact what do

00:00:15 --> 00:00:20
you think is the most elegant

00:00:16 --> 00:00:23
or powerful part of c

00:00:19 --> 00:00:25
why did it survive why did it have such

00:00:22 --> 00:00:29
a long lasting impact

00:00:24 --> 00:00:31
i think it found a sweet spot that in

00:00:28 --> 00:00:33
of expressiveness so you could really

00:00:30 --> 00:00:36
write things in a pretty natural way

00:00:32 --> 00:00:37
and efficiency which was particularly

00:00:35 --> 00:00:39
important when computers were

00:00:36 --> 00:00:41
not nearly as powerful as they are today

00:00:38 --> 00:00:44
ou can put yourself back

00:00:40 --> 00:00:46
50 years almost in terms of what

00:00:43 --> 00:00:49
computers could do and that's you know

00:00:45 --> 00:00:50
roughly four or five generations decades

00:00:48 --> 00:00:53
of moore's law

00:00:49 --> 00:00:56
right um so expressiveness

00:00:52 --> 00:00:58
and efficiency and

00:00:55 --> 00:01:00
i don't know perhaps the environment

00:00:57 --> 00:01:02
hat it came with as well which was unix

00:00:59 --> 00:01:04
so it meant if you wrote a program it

00:01:01 --> 00:01:05
could be used on all those computers

00:01:03 --> 00:01:07
that ran unix and that was all of those

00:01:04 --> 00:01:07
computers because they were all written

00:01:06 --> 00:01:10
in c

00:01:06 --> 00:01:12
and that was unix the operating system

00:01:09 --> 00:01:12
itself was portable as were all the

00:01:11 --> 00:01:15
tools

00:01:12 --> 00:01:16
o it all worked together again in one

00:01:14 --> 00:01:19
of these things where

00:01:15 --> 00:01:20
things fed on each other in a positive

00:01:18 --> 00:01:23
cycle

00:01:19 --> 00:01:23
what did it take to write sort of a

00:01:22 --> 00:01:25
definitive

00:01:22 --> 00:01:27
book probably definitive a book on all

00:01:24 --> 00:01:28
of program like

00:01:26 --> 00:01:30
it's more definitive to a particular

00:01:27 --> 00:01:31
language than any other book on any

00:01:29 --> 00:01:33
other language

00:01:30 --> 00:01:34
and did two really powerful things which

00:01:32 --> 00:01:37
is

00:01:33 --> 00:01:39
popularized the language at least from

00:01:36 --> 00:01:39
y perspective maybe you can correct me

00:01:38 --> 00:01:42
and

00:01:38 --> 00:01:45
second is created a standard

00:01:41 --> 00:01:47
of how you know the the how this

00:01:44 --> 00:01:50
language is supposed to be used and

00:01:46 --> 00:01:52
applied so what did it take did you have

00:01:49 --> 00:01:53
those kinds of ambitions in mind when

00:01:51 --> 00:01:55
we're working on that this is some kind

00:01:52 --> 00:01:58
of joke

00:01:54 --> 00:02:00
no of course not um so it's an accident

00:01:57 --> 00:02:03
of uh

00:01:59 --> 00:02:03
of timing skill and just luck a lot of

00:02:02 --> 00:02:06
it is it

00:02:02 --> 00:02:09
clearly uh timing was good now dennis

00:02:05 --> 00:02:12
and i wrote the book in 1977

00:02:08 --> 00:02:13
yeah right um and at that point unix was

00:02:11 --> 00:02:14
tarting to spread

00:02:12 --> 00:02:16
i don't know how many there were but it

00:02:13 --> 00:02:17
would be dozens to hundreds of unix

00:02:15 --> 00:02:20
systems

00:02:16 --> 00:02:21
um and c was also available on other

00:02:19 --> 00:02:23
kinds of computers that had nothing to

00:02:20 --> 00:02:26
do with unix and

00:02:22 --> 00:02:29
so the language had some potential

00:02:25 --> 00:02:33
um and there were no

00:02:28 --> 00:02:35
ther books on c and bell labs was

00:02:32 --> 00:02:37
really the only source for it and dennis

00:02:34 --> 00:02:39
of course was authoritative

00:02:36 --> 00:02:41
because it was his language and he had

00:02:38 --> 00:02:42
written the uh reference manual

00:02:40 --> 00:02:44
which is a marvelous example of how to

00:02:41 --> 00:02:47
write a reference manual really really

00:02:43 --> 00:02:48
very very well done so i twisted his arm

00:02:46 --> 00:02:50
until he agreed to write a book and then

00:02:48 --> 00:02:53
we wrote a book

00:02:49 --> 00:02:54
and the virtue or advantage at least i

00:02:52 --> 00:02:56
guess of going first is that then

00:02:53 --> 00:02:59
other people have to follow you if

00:02:55 --> 00:03:03
they're going to do anything

00:02:58 --> 00:03:05
and i think it worked well because

00:03:02 --> 00:03:07
dennis was a superb writer i mean he

00:03:04 --> 00:03:08
really really did and that the reference

00:03:06 --> 00:03:10
manual in that book is

00:03:07 --> 00:03:12
his period i had nothing to do with that

00:03:10 --> 00:03:15
all

00:03:11 --> 00:03:17
um so just crystal clear prose and

00:03:14 --> 00:03:18
very very well expressed um and then he

00:03:16 --> 00:03:22
and i

00:03:17 --> 00:03:24
wrote most of the expository material

00:03:21 --> 00:03:26
and then he and i sort of did the usual

00:03:23 --> 00:03:28
ping-ponging back and forth

00:03:25 --> 00:03:30
you know refining it but i spent a lot

00:03:27 --> 00:03:31
of time trying to find examples that

00:03:29 --> 00:03:32
would sort of hang together and that

00:03:30 --> 00:03:34
would tell people what they might

00:03:32 --> 00:03:35
need to know at about the right time

00:03:33 --> 00:03:38
that they should be thinking about

00:03:34 --> 00:03:40
needing it

00:03:37 --> 00:03:41
and i'm not sure it completely succeeded

00:03:39 --> 00:03:43
but it mostly

00:03:40 --> 00:03:46
worked out fairly well what do you think

00:03:42 --> 00:03:49
is the power of example i mean you're

00:03:45 --> 00:03:51
the creator at least one of the

00:03:48 --> 00:03:52
first people to do the hello world

00:03:50 --> 00:03:55
program

00:03:51 --> 00:03:58
which is like the example if if aliens

00:03:54 --> 00:03:59
discover our civilization hundreds of

00:03:57 --> 00:04:01
years from now it'll probably be hello

00:03:58 --> 00:04:03
world programs

00:04:00 --> 00:04:05
just to have broken robot communicating

00:04:02 --> 00:04:07
with them with the hello world

00:04:04 --> 00:04:08
so what and that's a representative

00:04:06 --> 00:04:11
xample so what

00:04:07 --> 00:04:12
do you find powerful about examples

00:04:10 --> 00:04:15
i think

00:04:11 --> 00:04:16
a good example will tell you how to do

00:04:14 --> 00:04:18
something

00:04:15 --> 00:04:20
and it will be representative of you

00:04:17 --> 00:04:21
might not want to do exactly that but

00:04:19 --> 00:04:23
you will want to do something that's at

00:04:20 --> 00:04:26
least in that same

00:04:22 --> 00:04:26
general vein and so a lot of the

00:04:25 --> 00:04:29
xamples

00:04:25 --> 00:04:31
in the c book were picked for these very

00:04:28 --> 00:04:31
simple straightforward text

00:04:30 --> 00:04:34
processing

00:04:30 --> 00:04:35
problems that were typical of unix i

00:04:33 --> 00:04:38
want to

00:04:34 --> 00:04:39
read input and write it out again

00:04:37 --> 00:04:40
there's a copy command i want to read

00:04:38 --> 00:04:42
input and do

00:04:39 --> 00:04:43
something to it and write it out again

00:04:41 --> 00:04:46
there's a grab

00:04:42 --> 00:04:49
and so that kind of find things that are

00:04:45 --> 00:04:52
presentative of what people want to do

00:04:48 --> 00:04:53
and spell those out so that they can

00:04:51 --> 00:04:57
then take those

00:04:52 --> 00:05:01
and see the the core parts and

00:04:56 --> 00:05:04
modify them to their taste and i think

00:05:00 --> 00:05:04
that a lot of programming books that i i

00:05:03 --> 00:05:06
don't look at

00:05:04 --> 00:05:08
programming books a tremendous amount

00:05:05 --> 00:05:08
hese days but when i do a lot of don't

00:05:07 --> 00:05:11
do that

00:05:08 --> 00:05:12
hey don't give you examples that are

00:05:10 --> 00:05:15
both

00:05:11 --> 00:05:15
realistic and something you might want

00:05:14 --> 00:05:18
o

00:05:14 --> 00:05:20
do some of them are pure syntax here's

00:05:17 --> 00:05:21
how you add three numbers well come on i

00:05:19 --> 00:05:23
could figure that out

00:05:20 --> 00:05:25
ell me how i would get those three

00:05:22 --> 00:05:26
numbers into the computer and how we

00:05:24 --> 00:05:28
would do something useful with them

00:05:26 --> 00:05:30
and then how i put them back out again

00:05:27 --> 00:05:31
eatly formatted

00:05:29 --> 00:05:33
and especially if you follow that

00:05:30 --> 00:05:34
example there is something magical of

00:05:32 --> 00:05:37
doing something that

00:05:33 --> 00:05:39
feels useful yeah right and i think it's

00:05:36 --> 00:05:40
the attempt and it's absolutely not

00:05:38 --> 00:05:42
perfect

00:05:39 --> 00:05:44
uh but the attempt in all cases was to

00:05:41 --> 00:05:47
get something that was going to be

00:05:43 --> 00:05:49
ither directly useful or would be very

00:05:46 --> 00:05:51
representative of

00:05:48 --> 00:05:52
useful things that a programmer might

00:05:50 --> 00:05:54
want to do

00:05:51 --> 00:05:56
but within that vein of fundamentally

00:05:53 --> 00:06:08
text processing reading text

00:05:55 --> 00:06:08
doing something writing text

00:06:17 --> 00:06:20
you

<!-- YOUTUBE_TRANSCRIPT_END -->
