---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "K3W56e9j4UY"
title: "Bjarne Stroustrup: Journey to C++ from Fortran, Algol, Simula, and C"
video_url: "https://www.youtube.com/watch?v=K3W56e9j4UY"
thumbnail_url: "https://i.ytimg.com/vi/K3W56e9j4UY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=K3W56e9j4UY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-18T18:34:29.000Z"
upload_date: "2019-11-18"
duration_seconds: 887
duration_human: "14:47"
view_count: 18032
like_count: 495
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:12:10.474Z"
---

# Bjarne Stroustrup: Journey to C++ from Fortran, Algol, Simula, and C

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=K3W56e9j4UY
- video_id: K3W56e9j4UY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-18T18:34:29.000Z
- upload_date: 2019-11-18
- duration: 14:47
- view_count: 18032
- like_count: 495
- has_subtitle: true
- language: en
- availability: public
- tags: c++, c++20, c++ concepts, c++ basics, c++ standards, c++17, c++14, c++11, c++0x, zero-overhead principle, fortran, algol, simula, bjarne stroustrup, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Bjarne Stroustrup (Nov 2019): https://www.youtube.com/watch?v=uTxRF5ag27A
Please subscribe to new clips channel (Lex Clips): https://www.youtube.com/lexclips
Once it reaches 20,000 subscribers, I'll start posting the clips there instead. 
(more links below)

For now, new full episodes are released once or twice a week and a few new clips or a new non-podcast video is released on all other days.

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

00:00:01 --> 00:00:07
and what was the first programming

00:00:03 --> 00:00:11
language if I may ask it this way that

00:00:06 --> 00:00:18
you fell in love with hi I think I'll

00:00:10 --> 00:00:19
call 60 and after that I remember my arm

00:00:17 --> 00:00:23
the snowboard

00:00:18 --> 00:00:26
I remember Fortran didn't fall in love

00:00:22 --> 00:00:28
with that I remember Pascal didn't fall

00:00:25 --> 00:00:31
in love with that it already got in the

00:00:27 --> 00:00:33
way of me and then I just covered a

00:00:30 --> 00:00:39
simpler and that was much more fun and

00:00:32 --> 00:00:43
from there I went to micro micro code so

00:00:38 --> 00:00:46
you were drawn to the he found the low

00:00:42 --> 00:00:49
level stuff beautiful I went through a

00:00:45 --> 00:00:52
lot of languages and then I spent

00:00:48 --> 00:00:54
significant time in in a simpler and

00:00:51 --> 00:00:57
micro code that was sort of the first

00:00:53 --> 00:01:00
really profitable things I paid for my

00:00:56 --> 00:01:04
masters actually and then I discovered

00:00:59 --> 00:01:06
Simula which was absolutely great Simula

00:01:03 --> 00:01:06
simulated

00:01:06 --> 00:01:14
Albert 60 done primarily for simulation

00:01:11 --> 00:01:16
but basically they invented object

00:01:13 --> 00:01:19
oriented programming at inheritance and

00:01:15 --> 00:01:24
runtime polymorphism when they were

00:01:18 --> 00:01:26
while they were doing it and that was

00:01:23 --> 00:01:30
the language that taught me that you

00:01:25 --> 00:01:33
could have the sort of the problems of a

00:01:29 --> 00:01:36
program grow with size of the program

00:01:32 --> 00:01:38
Berlin with the square of the size of

00:01:35 --> 00:01:42
the program that is you can actually

00:01:37 --> 00:01:45
module arise very nicely and that that

00:01:41 --> 00:01:48
was a surprise to me it was also a

00:01:44 --> 00:01:52
surprise to me that a stricter type

00:01:47 --> 00:01:55
system than Pascal's was helpful whereas

00:01:51 --> 00:01:59
Pascal's type system got in my way all

00:01:54 --> 00:02:03
the time so you need a strong type

00:01:58 --> 00:02:05
system to organize your code well but it

00:02:02 --> 00:02:07
has to be extensible and flexible let's

00:02:04 --> 00:02:08
get into the details a little bit what

00:02:06 --> 00:02:11
kind of if you remember what kind of

00:02:07 --> 00:02:14
type system to Pascal have what type

00:02:10 --> 00:02:19
system typing system did Algol 60 have

00:02:13 --> 00:02:21
basically Pascal was sort of the

00:02:18 --> 00:02:24
simplest language that Niklaus Viet

00:02:20 --> 00:02:29
could define that served the needs of

00:02:23 --> 00:02:32
Nicolas Viet at the time and it has a

00:02:28 --> 00:02:35
sort of a highly moral tone to it that

00:02:31 --> 00:02:38
is if you can say it in Pascal it's good

00:02:35 --> 00:02:41
and if you can't it's not so good

00:02:37 --> 00:02:41
whereas

00:02:40 --> 00:02:48
Simula larger is basically to build your

00:02:44 --> 00:02:53
own type system so instead of trying to

00:02:47 --> 00:02:56
fit yourself into Niklaus pierce'sworld

00:02:52 --> 00:02:59
Christ knew God's language and early on

00:02:55 --> 00:03:02
Dallas language allowed you to build

00:02:58 --> 00:03:06
your own so it's sort of close to the

00:03:01 --> 00:03:09
original idea of you you you build a

00:03:05 --> 00:03:12
domain-specific language as a matter of

00:03:08 --> 00:03:15
act what you build is a set of types

00:03:11 --> 00:03:18
and relations among types that allows

00:03:14 --> 00:03:19
you to express something that suitable

00:03:17 --> 00:03:22
for an application

00:03:18 --> 00:03:25
so when you say types the stuff you're

00:03:21 --> 00:03:27
saying has echoes of object-oriented

00:03:24 --> 00:03:30
programming Dettol they invented it

00:03:26 --> 00:03:35
every language that uses the word class

00:03:29 --> 00:03:40
for type is a descendant of Simula

00:03:34 --> 00:03:43
directly or indirectly Christ knew go on

00:03:39 --> 00:03:47
all you and Al were mathematicians and

00:03:42 --> 00:03:50
they didn't think in terms of types they

00:03:46 --> 00:03:53
but they understood sets and classes of

00:03:50 --> 00:03:58
elements and so they caught that typed

00:03:52 --> 00:04:02
classes and basically in C++ as in

00:03:57 --> 00:04:05
similar classes are user defined type so

00:04:01 --> 00:04:08
can you try the impossible task and give

00:04:04 --> 00:04:11
a brief history of programming languages

00:04:07 --> 00:04:16
from your perspective so we started with

00:04:10 --> 00:04:20
Algol 60 Simula Pascal but that's just

00:04:15 --> 00:04:23
he 60s and seven I can try

00:04:19 --> 00:04:27
the most sort of interesting and major

00:04:22 --> 00:04:30
improvement of programming languages was

00:04:26 --> 00:04:32
Fortran the first Fortran because before

00:04:29 --> 00:04:36
that all code was written for a specific

00:04:31 --> 00:04:40
machine and each specific machine had a

00:04:35 --> 00:04:44
language a simply language or cross

00:04:39 --> 00:04:47
emplo or some extension of that idea but

00:04:43 --> 00:04:49
it you are writing for specific machine

00:04:46 --> 00:04:52
in the term in the language of that

00:04:48 --> 00:04:52
machine and

00:04:52 --> 00:04:59
Marcus and his team at IBM built a

00:04:55 --> 00:05:04
language that would allow you to to

00:04:58 --> 00:05:06
write what you really wanted that is you

00:05:03 --> 00:05:08
can write it in a language that was

00:05:05 --> 00:05:10
natural for people now these people

00:05:07 --> 00:05:12
happen to be engineers and physicists so

00:05:09 --> 00:05:14
the language I came out was somewhat

00:05:11 --> 00:05:17
unusual for the rest of the world but

00:05:13 --> 00:05:18
basically they said formula translation

00:05:16 --> 00:05:21
because they wanted to have the

00:05:17 --> 00:05:24
mathematical formulas translated into

00:05:20 --> 00:05:28
the machine and as a side effect

00:05:23 --> 00:05:31
hey got portability because now they

00:05:27 --> 00:05:35
are writing in the terms that the humans

00:05:30 --> 00:05:37
used and the way humans thought and then

00:05:34 --> 00:05:41
they had a program that translated it

00:05:36 --> 00:05:44
into the machines needs and that was new

00:05:40 --> 00:05:47
and that was great and it's something to

00:05:43 --> 00:05:51
remember we want to raise the language

00:05:46 --> 00:05:54
to the human level but we don't want to

00:05:50 --> 00:05:56
lose the efficiency so and the less

00:05:53 --> 00:05:59
first step towards the human that was

00:05:55 --> 00:06:02
the first step and of course they were

00:05:58 --> 00:06:04
very particular kind of humans business

00:06:01 --> 00:06:07
people but there's a difference so they

00:06:03 --> 00:06:10
got COBOL instead and etc etc and

00:06:06 --> 00:06:15
simular came out no let's not go to

00:06:09 --> 00:06:20
simulate yet let's go to Al Gore Fortran

00:06:14 --> 00:06:23
didn't have at the time the notions of

00:06:19 --> 00:06:28
not a precise notion of type not a

00:06:22 --> 00:06:32
precise notion of scope not a set of

00:06:27 --> 00:06:33
translation phases that was what we have

00:06:31 --> 00:06:37
today

00:06:32 --> 00:06:40
lexical syntax semantics it was sort of

00:06:36 --> 00:06:42
a bit of a model in the early days but

00:06:39 --> 00:06:44
hey they're just done the biggest

00:06:41 --> 00:06:47
breakthrough in history of programming

00:06:43 --> 00:06:49
right so you can't criticize them for

00:06:46 --> 00:06:52
not having gotten all the technical

00:06:48 --> 00:06:57
details right so we got alcohol that was

00:06:51 --> 00:06:59
very pretty and most people in Commerce

00:06:56 --> 00:07:01
and science considered it useless

00:06:58 --> 00:07:04
because it was not flexible enough and

00:07:00 --> 00:07:06
it wasn't efficient enough and etcetera

00:07:05 --> 00:07:12
but that was the breakthrough from the

00:07:07 --> 00:07:15
technical point of view then similar

00:07:11 --> 00:07:17
came along to make that idea more

00:07:14 --> 00:07:22
flexible and you could define your own

00:07:16 --> 00:07:25
types and that's where where I got very

00:07:21 --> 00:07:29
interested first Nicole was the main

00:07:24 --> 00:07:31
idea man behind Simula I was late 60s

00:07:28 --> 00:07:35
this was late 60s was a visiting

00:07:30 --> 00:07:38
professor in halls and so I learned

00:07:34 --> 00:07:42
object-oriented programming by sitting

00:07:37 --> 00:07:49
around and well in theory discussing

00:07:41 --> 00:07:51
with with Christ new goal but Christ and

00:07:48 --> 00:07:53
once you get started and in full flow

00:07:50 --> 00:07:56
it's very hard to get a word in edgeways

00:07:52 --> 00:07:58
where you're just listed so it was great

00:07:55 --> 00:08:01
I learned it from them not to

00:07:57 --> 00:08:02
romanticize the notion but it seems like

00:08:00 --> 00:08:06
a big leap to think about

00:08:01 --> 00:08:11
object-oriented programming it's really

00:08:05 --> 00:08:15
a leap of abstraction it's yes and was

00:08:10 --> 00:08:19
that as big and beautiful of a leap as

00:08:14 --> 00:08:23
it seems from now in retrospect I was in

00:08:18 --> 00:08:27
an obvious one at the time it was not

00:08:22 --> 00:08:29
obvious and many people have tried to do

00:08:26 --> 00:08:31
something like that and most people

00:08:28 --> 00:08:35
didn't come up with something as

00:08:30 --> 00:08:38
wonderful as similar lots of people got

00:08:34 --> 00:08:41
heir PhDs and made their careers out of

00:08:37 --> 00:08:44
orgetting about Simula or never knowing

00:08:40 --> 00:08:48
it for me the key idea was basically I

00:08:43 --> 00:08:52
could get my own types and that's the

00:08:47 --> 00:08:55
idea that goes for a lines of C++ where

00:08:51 --> 00:08:57
I can get better types and more flexible

00:08:54 --> 00:09:00
types and more efficient types but it's

00:08:56 --> 00:09:01
till the fundamental idea when I want

00:08:59 --> 00:09:05
o write a program I want to write it

00:09:00 --> 00:09:08
with my types that is appropriate to my

00:09:04 --> 00:09:11
problem and under the constraints that

00:09:07 --> 00:09:15
I'm under with hardware software

00:09:10 --> 00:09:19
nvironment etc and that's that's the

00:09:14 --> 00:09:22
key idea people picked up on the

00:09:18 --> 00:09:26
higher is in the virtual functions and

00:09:21 --> 00:09:30
the inheritance and that was only part

00:09:25 --> 00:09:32
of it it was an interesting in major

00:09:29 --> 00:09:35
part and still a major part and a lot of

00:09:31 --> 00:09:39
graphic stuff but it was not the most

00:09:34 --> 00:09:42
fundamental it it was when you wanted to

00:09:38 --> 00:09:44
relate one type to another you don't

00:09:41 --> 00:09:48
want the more to be independent that the

00:09:43 --> 00:09:53
classical example is that you don't

00:09:47 --> 00:09:54
actually want to write city simulation

00:09:52 --> 00:09:56
with vehicles

00:09:53 --> 00:09:59
where you say well if it's a buy signal

00:09:55 --> 00:10:02
to write the code for turning a bicycle

00:09:58 --> 00:10:04
to the left if it's a normal car turn

00:10:01 --> 00:10:06
right a normal car way if it's a fire

00:10:03 --> 00:10:09
ngine and right the fire and in waited

00:10:05 --> 00:10:11
out a doubt about you get these big case

00:10:08 --> 00:10:16
statements and bunches of if statement

00:10:10 --> 00:10:20
and such instead you tell the other the

00:10:15 --> 00:10:23
base class that that's the Viacom saying

00:10:19 --> 00:10:26
turn turn left the way you want to and

00:10:22 --> 00:10:30
this is actually a real example they

00:10:25 --> 00:10:34
used it to simulate and optimize

00:10:29 --> 00:10:39
the emergency the the emergency services

00:10:33 --> 00:10:41
for somewhere Norway back in the 60s Wow

00:10:38 --> 00:10:44
so this was one of the early examples

00:10:40 --> 00:10:50
for why you needed inheritance and and

00:10:43 --> 00:10:53
you needed runtime polymorphism because

00:10:49 --> 00:10:58
you wanted to handle this set of

00:10:52 --> 00:11:00
vehicles in a manageable way you you you

00:10:57 --> 00:11:04
can't just rewrite your code each time a

00:10:59 --> 00:11:06
new kind of vehicle comes along yeah

00:11:03 --> 00:11:08
that's a beautiful powerful idea and of

00:11:05 --> 00:11:11
course it it stretches through your work

00:11:07 --> 00:11:16
Lucy bus bosses will talk about but I

00:11:11 --> 00:11:18
think you structured nicely what other

00:11:15 --> 00:11:20
breakthroughs came along in the history

00:11:17 --> 00:11:22
of programming language is it if we were

00:11:19 --> 00:11:25
to tell the history in that way

00:11:21 --> 00:11:28
obviously I'm bitter telling the part of

00:11:24 --> 00:11:30
the history that the surpassed I am one

00:11:27 --> 00:11:33
as opposed to or in the past

00:11:29 --> 00:11:34
yeah you skip the hippy

00:11:32 --> 00:11:37
John McCarthy and Lisp one of my

00:11:33 --> 00:11:39
favorite languages but let's understand

00:11:36 --> 00:11:42
what Lisp is not one of my favorite

00:11:38 --> 00:11:44
language yes it's obviously important

00:11:41 --> 00:11:47
it's obviously interesting lots of

00:11:43 --> 00:11:49
people write code in it and then they

00:11:46 --> 00:11:52
rewrite it into C or C++ when they want

00:11:48 --> 00:11:53
o go to production yes it's in the

00:11:51 --> 00:11:57
world

00:11:52 --> 00:12:02
I met which are constrained by

00:11:56 --> 00:12:07
performance reliability issues

00:12:01 --> 00:12:10
deployability cost of hardware I I don't

00:12:06 --> 00:12:14
like things to be too dynamic it is

00:12:09 --> 00:12:17
really hard to write a piece of code

00:12:13 --> 00:12:20
that's perfectly flexible that you can

00:12:16 --> 00:12:22
also deploy on a small computer and that

00:12:19 --> 00:12:26
you can also put in say a telephone

00:12:21 --> 00:12:28
switch in Bogota what's the chance if

00:12:25 --> 00:12:30
you get an error and you find yourself

00:12:27 --> 00:12:32
in the debugger that the telephone

00:12:29 --> 00:12:36
switch in pockets are on late Sunday

00:12:32 --> 00:12:39
night has a programmer around right the

00:12:35 --> 00:12:43
chance is zero and so a lot of things I

00:12:38 --> 00:12:49
think most about can't afford that

00:12:42 --> 00:12:54
flexibility I'm quite aware that maybe

00:12:48 --> 00:12:56
70 80 % of all code are not under the

00:12:53 --> 00:13:00
kind of constraints I'm interested in

00:12:55 --> 00:13:03
but somebody has to do the job I'm doing

00:12:59 --> 00:13:06
because you have to get from these high

00:13:02 --> 00:13:10
level flexible languages to the hardware

00:13:05 --> 00:13:11
the stuff that lasts for 10 20 30 years

00:13:09 --> 00:13:13
is robust

00:13:10 --> 00:13:15
yeah operates under very constrained

00:13:12 --> 00:13:17
conditions yes absolutely that's right

00:13:14 --> 00:13:20
and it's fascinating and beautiful in

00:13:16 --> 00:13:24
its own way it's C++ is one of my

00:13:19 --> 00:13:26
favorite languages and so is Lisp so I

00:13:23 --> 00:13:32
can I can embody two for different

00:13:25 --> 00:13:35
reasons as as a programmer I understand

00:13:31 --> 00:13:38
why it is popular and I can see the

00:13:34 --> 00:13:40
beauty of the ideas and similarly with

00:13:37 --> 00:13:45
is more talk

00:13:39 --> 00:13:45
it's just now this relative thank it is

00:13:44 --> 00:13:50
not

00:13:44 --> 00:13:52
as relevant in my world and by the way I

00:13:49 --> 00:13:55
distinguish between those my functional

00:13:51 --> 00:13:57
anguages where I go to things like ml

00:13:54 --> 00:13:59
and Haskell

00:13:56 --> 00:14:02
different different kind of languages

00:13:58 --> 00:14:05
they have a different kind of beauty in

00:14:01 --> 00:14:08
there very interesting and I actually

00:14:04 --> 00:14:12
try to learn from all the languages I

00:14:07 --> 00:14:15
encounter to see what is there that

00:14:11 --> 00:14:18
would make working on the kind of

00:14:14 --> 00:14:22
problems I'm interested in with the kind

00:14:17 --> 00:14:24
of constraints that that I'm interested

00:14:21 --> 00:14:27
in what can actually be done better

00:14:23 --> 00:14:29
because we can surely do better than we

00:14:26 --> 00:14:29
do today

00:14:34 --> 00:14:37
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
