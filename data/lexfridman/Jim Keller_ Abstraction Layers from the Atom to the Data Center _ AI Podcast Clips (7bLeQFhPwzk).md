---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "7bLeQFhPwzk"
title: "Jim Keller: Abstraction Layers from the Atom to the Data Center | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=7bLeQFhPwzk"
thumbnail_url: "https://i.ytimg.com/vi/7bLeQFhPwzk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=7bLeQFhPwzk"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-02-16T13:48:57.000Z"
upload_date: "2020-02-16"
duration_seconds: 1039
duration_human: "17:19"
view_count: 29424
like_count: 1105
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:53:22.576Z"
---

# Jim Keller: Abstraction Layers from the Atom to the Data Center | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=7bLeQFhPwzk
- video_id: 7bLeQFhPwzk
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-02-16T13:48:57.000Z
- upload_date: 2020-02-16
- duration: 17:19
- view_count: 29424
- like_count: 1105
- has_subtitle: true
- language: en
- availability: public
- tags: jim keller, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Jim Keller (Feb 2020): https://www.youtube.com/watch?v=Nb2tebYAaOA
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

Jim Keller is a legendary microprocessor engineer, having worked at AMD, Apple, Tesla, and now Intel. He's known for his work on the AMD K7, K8, K12 and Zen microarchitectures, Apple A4, A5 processors, and co-author of the specifications for the x86-64 instruction set and HyperTransport interconnect.

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
so let's get into the basics before we

00:00:05 --> 00:00:10
zoom back out how do you build the

00:00:07 --> 00:00:11
computer from scratch what is a

00:00:09 --> 00:00:13
microprocessor

00:00:10 --> 00:00:16
what is it microarchitecture what's an

00:00:12 --> 00:00:20
instruction set architecture maybe even

00:00:15 --> 00:00:22
as far back as what is a transistor so

00:00:19 --> 00:00:26
the special charm of computer

00:00:21 --> 00:00:29
engineering is there's a relatively good

00:00:25 --> 00:00:31
understanding of abstraction layers so

00:00:28 --> 00:00:33
down to bottom you have atoms and atoms

00:00:30 --> 00:00:36
get put together in materials like

00:00:32 --> 00:00:39
silicon or dope silicon or metal and we

00:00:35 --> 00:00:42
build transistors on top of that we

00:00:38 --> 00:00:45
build logic gates right and in

00:00:41 --> 00:00:47
functional units like an adder or

00:00:44 --> 00:00:50
subtractor or an instruction parsing

00:00:46 --> 00:00:52
unit and we assemble those into you know

00:00:49 --> 00:00:55
processing elements modern computers are

00:00:51 --> 00:00:59
built out of you know probably 10 to 20

00:00:54 --> 00:01:01
locally you know organic processing

00:00:58 --> 00:01:04
elements or coherent processing elements

00:01:00 --> 00:01:06
and then that runs computer programs

00:01:03 --> 00:01:08
right so there's abstraction layers and

00:01:05 --> 00:01:10
then software you know there's an

00:01:07 --> 00:01:14
instruction set you run and then there's

00:01:09 --> 00:01:17
assembly language C C++ Java JavaScript

00:01:13 --> 00:01:18
you know there's abstraction layers you

00:01:16 --> 00:01:22
know essentially from the atom to the

00:01:17 --> 00:01:25
data center right so when you when you

00:01:21 --> 00:01:27
build a computer you know first there's

00:01:24 --> 00:01:29
a target like what's it for look how

00:01:26 --> 00:01:30
fast does it have to be which you know

00:01:28 --> 00:01:33
today there's a whole bunch of metrics

00:01:29 --> 00:01:35
about what that is and then in an

00:01:32 --> 00:01:38
organization of you know a thousand

00:01:34 --> 00:01:41
people who build a computer there's lots

00:01:37 --> 00:01:44
of different disciplines that you have

00:01:40 --> 00:01:46
to operate on does that make sense and

00:01:43 --> 00:01:51
so so there's a bunch of levels

00:01:46 --> 00:01:54
abstraction of in organizational I can

00:01:50 --> 00:01:56
tell and in your own vision there's a

00:01:53 --> 00:01:59
lot of brilliance that comes in it every

00:01:55 --> 00:02:00
one of those layers some of it is

00:01:58 --> 00:02:03
cience some what is engineering some of

00:01:59 --> 00:02:05
his art what's the most

00:02:02 --> 00:02:08
if you could pick favorites what's the

00:02:04 --> 00:02:10
most important your favorite layer on

00:02:07 --> 00:02:14
these layers of abstractions where does

00:02:09 --> 00:02:15
the magic enter this hierarchy I don't

00:02:13 --> 00:02:18
really care

00:02:14 --> 00:02:22
that's the fun you know I'm somewhat

00:02:17 --> 00:02:24
agnostic to that so I would say for

00:02:21 --> 00:02:27
elatively long periods of time

00:02:23 --> 00:02:29
instruction sets are stable so the x86

00:02:26 --> 00:02:33
instruction said the arm instruction set

00:02:28 --> 00:02:35
was an instruction set so it says how do

00:02:32 --> 00:02:36
you encode the basic operations load

00:02:34 --> 00:02:40
still or multiply add subtract

00:02:35 --> 00:02:42
conditional branch you know there aren't

00:02:39 --> 00:02:45
hat many interesting instructions look

00:02:41 --> 00:02:47
if you look at a program and it runs you

00:02:44 --> 00:02:50
know 90% of the execution is on 25

00:02:46 --> 00:02:53
opcodes you know 25 instructions and

00:02:49 --> 00:02:55
those are stable right what does it mean

00:02:52 --> 00:02:57
stable until architecture has been

00:02:54 --> 00:03:01
around for 25 years it works it works

00:02:56 --> 00:03:04
and that's because the basics you know

00:03:00 --> 00:03:07
are defined a long time ago right now

00:03:03 --> 00:03:09
the way an old computer ran is you

00:03:06 --> 00:03:14
fetched instructions and you executed

00:03:08 --> 00:03:17
them in order to the load do the ad do

00:03:13 --> 00:03:19
the compare the way a modern computer

00:03:16 --> 00:03:23
works is you fetch large numbers of

00:03:18 --> 00:03:25
instructions say 500 and then you find

00:03:22 --> 00:03:29
the dependency graph between the

00:03:24 --> 00:03:32
instructions and then you you execute in

00:03:28 --> 00:03:36
dependent units those little micro

00:03:31 --> 00:03:37
graphs so a modern computer like people

00:03:35 --> 00:03:40
like to say computer should be simple

00:03:36 --> 00:03:42
and clean but it turns out the market

00:03:39 --> 00:03:45
for a simple complete clean slow

00:03:41 --> 00:03:48
computers is zero right we don't sell

00:03:44 --> 00:03:51
any simple clean computers now you can

00:03:47 --> 00:03:54
there's how you build it can be clean

00:03:50 --> 00:03:58
but the computer people want to buy

00:03:53 --> 00:04:01
that's say you know phone data center

00:03:57 --> 00:04:04
such as a large number of instructions

00:04:00 --> 00:04:06
computes the dependency graph and then

00:04:03 --> 00:04:09
executes it in a way that gets the right

00:04:05 --> 00:04:12
answers and optimizes that graph somehow

00:04:08 --> 00:04:15
yeah they run deeply out of order and

00:04:11 --> 00:04:17
then there's semantics around how memory

00:04:14 --> 00:04:19
ordering works and other things work so

00:04:16 --> 00:04:21
the computer sort of has a bunch of

00:04:18 --> 00:04:25
bookkeeping tables it says what order

00:04:20 --> 00:04:27
CDs operations finishing or appear to

00:04:24 --> 00:04:29
finish him but to go fast you have to

00:04:26 --> 00:04:31
fetch a lot of instruct

00:04:28 --> 00:04:34
and find all the parallelism now there's

00:04:30 --> 00:04:37
a second kind of computer which we call

00:04:33 --> 00:04:40
GPUs today and I called the difference

00:04:36 --> 00:04:41
there's found parallelism like you have

00:04:39 --> 00:04:43
a program with a lot of dependent

00:04:40 --> 00:04:45
instructions you fetch a bunch and then

00:04:42 --> 00:04:47
you go figure out the dependency graph

00:04:44 --> 00:04:49
and you issues instructions out order

00:04:46 --> 00:04:52
that's because you have one serial

00:04:48 --> 00:04:55
narrative to execute which in fact is

00:04:51 --> 00:04:58
and can be done out of order you call a

00:04:54 --> 00:04:59
narrative yeah well so yeah so humans

00:04:57 --> 00:05:02
think of serial narrative so read it

00:04:58 --> 00:05:03
read a book right there's you know

00:05:01 --> 00:05:05
there's the sense after sentence after

00:05:02 --> 00:05:08
sentence and there's paragraphs

00:05:04 --> 00:05:11
now you could diagram that imagine you

00:05:07 --> 00:05:14
diagrams it properly and you said which

00:05:10 --> 00:05:16
sentences could be read in anti order

00:05:13 --> 00:05:19
any order without changing the meaning

00:05:15 --> 00:05:21
right so that's a fascinating question

00:05:18 --> 00:05:22
that risk of a book yeah yeah you could

00:05:20 --> 00:05:24
o that

00:05:21 --> 00:05:26
right so some paragraphs could be

00:05:23 --> 00:05:30
reordered some sentences can be

00:05:25 --> 00:05:35
reordered you could say he is tall and

00:05:29 --> 00:05:39
smart and X right and it doesn't matter

00:05:34 --> 00:05:41
the order of tall and smart but if you

00:05:38 --> 00:05:44
say that tall man is wearing the red

00:05:40 --> 00:05:48
shirt what colors you know like you can

00:05:43 --> 00:05:51
create dependencies right right and so

00:05:47 --> 00:05:54
GPUs on the other hand run simple

00:05:50 --> 00:05:57
programs on pixels but you're given a

00:05:53 --> 00:05:59
million of them and the first order the

00:05:56 --> 00:06:01
screen you're looking at doesn't care

00:05:58 --> 00:06:04
which order you do it in so I call that

00:06:00 --> 00:06:07
given parallelism simple narratives

00:06:03 --> 00:06:09
around the large numbers of things where

00:06:06 --> 00:06:12
you can just say it's parallel because

00:06:08 --> 00:06:16
you told me it was so found parallelism

00:06:11 --> 00:06:19
where the narrative is it's sequential

00:06:15 --> 00:06:21
but you discover like little pockets of

00:06:18 --> 00:06:23
parallelism of versus turns out large

00:06:20 --> 00:06:25
pockets of parallelism large so how hard

00:06:22 --> 00:06:27
is it to discuss well how hard is it

00:06:24 --> 00:06:29
hat's just transistor count right so

00:06:26 --> 00:06:31
nce you crack the problem you say

00:06:28 --> 00:06:33
here's how you fetch ten instructions at

00:06:30 --> 00:06:35
a time here's how you calculated the

00:06:32 --> 00:06:37
dependencies between them here's how you

00:06:34 --> 00:06:42
describe the dependencies here's you

00:06:36 --> 00:06:44
know these are pieces right so once you

00:06:41 --> 00:06:47
describe the dependencies then it's just

00:06:43 --> 00:06:51
a graph sort of it's an algorithm that

00:06:46 --> 00:06:53
finds what is that I'm sure there's a

00:06:50 --> 00:06:55
graph there is the theoretical answer

00:06:52 --> 00:07:00
here that's solved but in general

00:06:54 --> 00:07:02
programs modern programs that human

00:06:59 --> 00:07:06
beings right how much found parallelism

00:07:01 --> 00:07:10
is there an ax what is 10x mean well you

00:07:05 --> 00:07:11
execute it in order versus yeah you

00:07:09 --> 00:07:15
would get what's called cycles per

00:07:10 --> 00:07:17
instruction and it would be about you

00:07:14 --> 00:07:19
know three instructions three cycles per

00:07:16 --> 00:07:22
instruction because of the latency of

00:07:18 --> 00:07:24
the operations and stuff and in a modern

00:07:21 --> 00:07:27
computer or execute it but like point to

00:07:23 --> 00:07:28
point point to five cycles per

00:07:26 --> 00:07:31
instruction so it's about with today

00:07:27 --> 00:07:34
fine 10x and there and there's two

00:07:30 --> 00:07:36
things one is the found parallelism in

00:07:33 --> 00:07:40
the narrative right and the other is to

00:07:35 --> 00:07:43
predictability of the narrative right so

00:07:39 --> 00:07:45
certain operations they do a bunch of

00:07:42 --> 00:07:50
calculations and if greater than one do

00:07:44 --> 00:07:52
this else do that that that decision is

00:07:49 --> 00:07:57
predicted in modern computers to high

00:07:51 --> 00:07:59
90% accuracy so branches happen a lot so

00:07:56 --> 00:08:00
imagine you have you have a decision to

00:07:58 --> 00:08:02
make every six instructions which is

00:07:59 --> 00:08:04
about the average right but you want to

00:08:01 --> 00:08:05
fetch five under instructions figure out

00:08:03 --> 00:08:10
he graph and execute them all in

00:08:04 --> 00:08:11
parallel that means you have let's say

00:08:09 --> 00:08:14
if you effect six hundred instructions

00:08:10 --> 00:08:16
it's every six you have to fetch you

00:08:13 --> 00:08:19
have to predict ninety-nine out of a

00:08:15 --> 00:08:21
hundred branches correctly for that

00:08:18 --> 00:08:24
window to be effective okay so

00:08:20 --> 00:08:28
parallelism you can't paralyze branches

00:08:23 --> 00:08:29
or you can looking pretty you can what

00:08:27 --> 00:08:31
does predict a branch mean or what open

00:08:28 --> 00:08:34
take so imagine you do a computation

00:08:30 --> 00:08:38
over and over you're in a loop so Wow

00:08:33 --> 00:08:40
and it's greater than one do and you go

00:08:37 --> 00:08:41
through that loop a million times so

00:08:39 --> 00:08:43
every time you look at the branch you

00:08:40 --> 00:08:45
say it's probably still greater than one

00:08:42 --> 00:08:46
and you're saying you could do that

00:08:44 --> 00:08:48
accurately

00:08:45 --> 00:08:50
very accurately monitoring comes my mind

00:08:47 --> 00:08:52
is blown how the heck did you that wait

00:08:49 --> 00:08:54
a minute well you want to know this is

00:08:51 --> 00:08:57
really sad

00:08:53 --> 00:08:59
20 years ago yes you simply recorded

00:08:56 --> 00:09:02
which way the branch went last time and

00:08:58 --> 00:09:06
predicted the same thing right okay

00:09:01 --> 00:09:08
what's the accuracy of that 85 percent

00:09:05 --> 00:09:11
so then somebody said hey let's keep a

00:09:07 --> 00:09:14
couple of bits and have a little counter

00:09:10 --> 00:09:16
so and it predicts one way we count up

00:09:13 --> 00:09:18
and then pins so say you have a three

00:09:15 --> 00:09:20
bit counter so you count up and then

00:09:17 --> 00:09:22
count down and if it's you know you can

00:09:19 --> 00:09:24
use the top bit as the sign bit so you

00:09:21 --> 00:09:26
have a sign to bit number so if it's

00:09:23 --> 00:09:29
greater than one you predict taken and

00:09:25 --> 00:09:31
lesson one you predict not-taken right

00:09:28 --> 00:09:36
or listen zero or whatever the thing is

00:09:30 --> 00:09:37
and that got us to 92 percent oh okay no

00:09:35 --> 00:09:41
is this better

00:09:36 --> 00:09:43
this branch depends on how you got there

00:09:40 --> 00:09:47
so if you came down the code one way

00:09:42 --> 00:09:49
ou're talking about Bob and Jane right

00:09:46 --> 00:09:50
and then said is just Bob like Jane ik

00:09:48 --> 00:09:53
went one way but if you're talking about

00:09:49 --> 00:09:55
Bob until this Bob like changes you go a

00:09:52 --> 00:09:57
different way right so that's called

00:09:54 --> 00:10:00
history so you take the history and a

00:09:56 --> 00:10:02
counter that's cool but that's not how

00:09:59 --> 00:10:04
anything works today they use something

00:10:01 --> 00:10:08
that looks a little like a neural

00:10:03 --> 00:10:12
network so modern you take all the

00:10:07 --> 00:10:14
xecution flows and then you do

00:10:11 --> 00:10:20
basically deep pattern recognition of

00:10:13 --> 00:10:22
how the program is executing and you do

00:10:19 --> 00:10:24
that multiple different ways and you

00:10:21 --> 00:10:26
have something that chooses what the

00:10:23 --> 00:10:29
best result is there's a little

00:10:25 --> 00:10:31
supercomputer inside the computer that's

00:10:28 --> 00:10:34
trying to project that calculates which

00:10:30 --> 00:10:36
way branches go so the effective window

00:10:33 --> 00:10:39
that it's worth finding grassing gets

00:10:35 --> 00:10:42
bigger why was that gonna make me sad

00:10:38 --> 00:10:45
that's amazing it's amazingly

00:10:41 --> 00:10:49
complicated oh well here's the funny

00:10:44 --> 00:10:55
thing so to get to 85% took a thousand

00:10:48 --> 00:10:56
bits to get to 99% takes tens of

00:10:54 --> 00:11:00
megabits

00:10:55 --> 00:11:02
o this is one of those to get the

00:10:59 --> 00:11:06
result you you know to get from a window

00:11:01 --> 00:11:08
of say 50 instructions to 500

00:11:05 --> 00:11:11
it took three orders of magnitude or

00:11:07 --> 00:11:13
four orders of magnitude more bets now

00:11:10 --> 00:11:15
if you get the prediction of a branch

00:11:12 --> 00:11:17
wrong what happens then watch the pipe

00:11:14 --> 00:11:19
you flush the pipe says just the

00:11:16 --> 00:11:21
performance cost but it gets even better

00:11:18 --> 00:11:23
yeah so we're starting to look at stuff

00:11:20 --> 00:11:28
that says so they executed down this

00:11:22 --> 00:11:30
path and then you had two ways to go but

00:11:27 --> 00:11:33
far far away there's something that

00:11:29 --> 00:11:36
doesn't matter which path you went so

00:11:32 --> 00:11:39
you miss you took the wrong path you

00:11:35 --> 00:11:41
executed a bunch of stuff then you had

00:11:38 --> 00:11:42
the Miss predicting you backed it up but

00:11:40 --> 00:11:45
you remembered all the results you

00:11:41 --> 00:11:47
already calculated some of those are

00:11:44 --> 00:11:49
just fine look if you read a book and

00:11:46 --> 00:11:50
you misunderstand the paragraph your

00:11:48 --> 00:11:52
understanding is the next paragraph

00:11:49 --> 00:11:55
sometimes is invariant to that I'm not

00:11:51 --> 00:11:59
just understanding sometimes it depends

00:11:54 --> 00:12:03
on it and you can kind of anticipate

00:11:58 --> 00:12:05
that invariance yeah well you can keep

00:12:02 --> 00:12:07
track of whether that data changed and

00:12:04 --> 00:12:09
so when you come back to a piece of code

00:12:06 --> 00:12:11
should you calculate it again or do the

00:12:08 --> 00:12:13
same thing okay how much does this is

00:12:10 --> 00:12:17
art and how much of it is science

00:12:12 --> 00:12:19
because it sounds pretty complicated so

00:12:16 --> 00:12:21
well how do you describe a situation so

00:12:18 --> 00:12:24
imagine you come to a point in the road

00:12:20 --> 00:12:25
we have to make a decision right and you

00:12:23 --> 00:12:27
have a bunch of knowledge about which

00:12:24 --> 00:12:30
way to go maybe you have a map so you

00:12:26 --> 00:12:32
want to go is the shortest way or do you

00:12:29 --> 00:12:34
want to go the fastest way or you want

00:12:31 --> 00:12:37
o take the nicest road so it's just

00:12:33 --> 00:12:38
some set of data so imagine you're doing

00:12:36 --> 00:12:41
something complicated like a building in

00:12:37 --> 00:12:44
the computer and there's hundreds of

00:12:40 --> 00:12:47
decision points all with hundreds of

00:12:43 --> 00:12:50
possible ways to go and the ways you

00:12:46 --> 00:12:53
pick interacts in a complicated way

00:12:49 --> 00:12:55
right and then you have to pick the

00:12:52 --> 00:12:56
right spot right so there's other

00:12:54 --> 00:12:57
science oh I don't know

00:12:55 --> 00:13:00
yeah avoided the question you just

00:12:56 --> 00:13:03
described do the Robert Frost problem of

00:12:59 --> 00:13:07
road less taken I describe the Robin

00:13:02 --> 00:13:10
truss problem which we do as computer

00:13:06 --> 00:13:12
designers it's all poetry okay great

00:13:09 --> 00:13:15
yeah I don't know how to describe that

00:13:11 --> 00:13:17
because some people are very good at

00:13:14 --> 00:13:19
making those intuitive leaps it seems

00:13:16 --> 00:13:21
like the combinations of things some

00:13:18 --> 00:13:23
people are less good at it but they are

00:13:20 --> 00:13:25
ally good at evaluating your

00:13:22 --> 00:13:28
alternatives right and everybody has a

00:13:24 --> 00:13:30
different way to do it and some people

00:13:27 --> 00:13:32
can't make those sleeps but they're

00:13:29 --> 00:13:34
ally good at analyzing it

00:13:31 --> 00:13:36
so when you see computers are designed

00:13:33 --> 00:13:41
by teams of people of very different

00:13:35 --> 00:13:42
skill sets and a good team has lots of

00:13:40 --> 00:13:44
different kinds of people

00:13:41 --> 00:13:48
I suspect you would describe some of

00:13:43 --> 00:13:50
them as artistic but not very many

00:13:47 --> 00:13:54
unfortunately or fortunately or

00:13:49 --> 00:14:00
something well you know computer science

00:13:53 --> 00:14:03
heart it's 99% perspiration and the 1%

00:13:59 --> 00:14:05
inspiration is really important but you

00:14:02 --> 00:14:07
send you the 99 yeah you got to do a lot

00:14:04 --> 00:14:10
of work and then there's there are

00:14:06 --> 00:14:14
interesting things to do at every level

00:14:09 --> 00:14:16
that stack so at the end of the day if

00:14:13 --> 00:14:18
you're on the same program multiple

00:14:15 --> 00:14:19
times does it always produce the same

00:14:18 --> 00:14:22
result

00:14:18 --> 00:14:25
is is there some room for fuzziness

00:14:21 --> 00:14:28
there that's a math problem so if you

00:14:24 --> 00:14:30
run a correct C program the definition

00:14:27 --> 00:14:31
is every time you run it you get the

00:14:29 --> 00:14:33
same answer

00:14:30 --> 00:14:35
yeah that would that's a math statement

00:14:32 --> 00:14:38
hat's a language definitional statement

00:14:34 --> 00:14:42
so yes for years when people did when we

00:14:37 --> 00:14:45
first did 3d acceleration of graphics

00:14:41 --> 00:14:47
you could run the same scene multiple

00:14:44 --> 00:14:50
times and get different answers right

00:14:46 --> 00:14:51
and then some people thought that

00:14:49 --> 00:14:55
was okay and some people thought it was

00:14:50 --> 00:14:58
a bad idea and then when the HPC world

00:14:54 --> 00:15:01
used GPUs for calculations they thought

00:14:57 --> 00:15:05
it was a really bad idea okay now in

00:15:00 --> 00:15:08
modern AI stuff people are looking at

00:15:04 --> 00:15:10
networks where the precision of the data

00:15:07 --> 00:15:13
is low enough that the date has somewhat

00:15:09 --> 00:15:16
noisy and the observation is the input

00:15:12 --> 00:15:19
data is unbelievably noisy so why should

00:15:15 --> 00:15:21
the calculation be not noisy and people

00:15:18 --> 00:15:23
have experimented with algorithms that

00:15:20 --> 00:15:25
say can get faster answers by being

00:15:22 --> 00:15:28
noisy like as a network starts to

00:15:24 --> 00:15:29
converge if you look at the computation

00:15:27 --> 00:15:31
graph it starts out really wide and it

00:15:28 --> 00:15:32
gets narrower and you can say is that

00:15:30 --> 00:15:34
last little bit that

00:15:31 --> 00:15:37
important or should I start the graph on

00:15:33 --> 00:15:40
the next rap rev before we would live

00:15:36 --> 00:15:41
all the way down to the answer right so

00:15:39 --> 00:15:44
you can create algorithms that are noisy

00:15:40 --> 00:15:45
now if you're developing something and

00:15:43 --> 00:15:47
every time you run it you get a

00:15:44 --> 00:15:52
different answer it's really annoying

00:15:46 --> 00:15:53
and so most people think even today

00:15:51 --> 00:15:56
every time you run the program you get

00:15:52 --> 00:15:59
he same answer now you know but the the

00:15:55 --> 00:16:01
question is that's the formal definition

00:15:58 --> 00:16:03
of a programming language there is a

00:16:00 --> 00:16:06
definition of languages that don't get

00:16:02 --> 00:16:08
he same answer but people who use those

00:16:05 --> 00:16:09
you always want something because you

00:16:07 --> 00:16:12
get a bad answer and then you're

00:16:08 --> 00:16:14
wondering is it because of something in

00:16:11 --> 00:16:15
your brother because of this and so

00:16:13 --> 00:16:17
everybody wants a little switch that

00:16:14 --> 00:16:19
says no matter what do it

00:16:16 --> 00:16:21
deterministically and it's really weird

00:16:18 --> 00:16:23
because almost everything going into

00:16:20 --> 00:16:26
modern calculations is noisy

00:16:22 --> 00:16:28
so why the answers have to be so clear

00:16:25 --> 00:16:30
it's all right so what he used to end by

00:16:27 --> 00:16:33
design computers for people who run

00:16:29 --> 00:16:36
programs so somebody says I want and

00:16:32 --> 00:16:37
eterministic answer like most people

00:16:35 --> 00:16:39
want that can you deliver a

00:16:36 --> 00:16:41
deterministic answer I guess is the

00:16:38 --> 00:16:44
question like when you hopefully sure

00:16:40 --> 00:16:46
that what people don't realize is you

00:16:43 --> 00:16:48
get a deterministic answer even though

00:16:45 --> 00:16:51
the execution flow is very undetermined

00:16:47 --> 00:16:53
istich so if you run this program a

00:16:50 --> 00:16:56
hundred times it never runs the same way

00:16:52 --> 00:16:57
twice ever and the answer is arise at

00:16:55 --> 00:16:59
he same input it gets the same answer

00:16:56 --> 00:17:02
every time it's just just the it's just

00:16:58 --> 00:17:02
amazing

00:17:06 --> 00:17:09
you

<!-- YOUTUBE_TRANSCRIPT_END -->
