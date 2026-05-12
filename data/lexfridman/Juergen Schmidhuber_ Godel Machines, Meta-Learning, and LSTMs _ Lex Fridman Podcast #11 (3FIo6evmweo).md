---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "3FIo6evmweo"
title: "Juergen Schmidhuber: Godel Machines, Meta-Learning, and LSTMs | Lex Fridman Podcast #11"
video_url: "https://www.youtube.com/watch?v=3FIo6evmweo"
thumbnail_url: "https://i.ytimg.com/vi/3FIo6evmweo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=3FIo6evmweo"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-12-23T17:14:32.000Z"
upload_date: "2018-12-23"
duration_seconds: 4798
duration_human: "1:19:58"
view_count: 141826
like_count: 3581
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:15:37.536Z"
---

# Juergen Schmidhuber: Godel Machines, Meta-Learning, and LSTMs | Lex Fridman Podcast #11

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=3FIo6evmweo
- video_id: 3FIo6evmweo
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-12-23T17:14:32.000Z
- upload_date: 2018-12-23
- duration: 1:19:58
- view_count: 141826
- like_count: 3581
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:08
jurgen schmidhuber he's the co-director

00:00:04 --> 00:00:12
of a CSA a lab and a co-creator of long

00:00:07 --> 00:00:14
short term memory networks LS TMS are

00:00:11 --> 00:00:17
used in billions of devices today for

00:00:13 --> 00:00:20
speech recognition translation and much

00:00:16 --> 00:00:23
more over 30 years he has proposed a lot

00:00:19 --> 00:00:25
of interesting out-of-the-box ideas a

00:00:22 --> 00:00:28
meta learning adversarial networks

00:00:24 --> 00:00:32
computer vision and even a formal theory

00:00:27 --> 00:00:35
of quote creativity curiosity and fun

00:00:31 --> 00:00:36
this conversation is part of the MIT

00:00:34 --> 00:00:38
course and artificial general

00:00:35 --> 00:00:40
intelligence and the artificial

00:00:37 --> 00:00:43
intelligence podcast if you enjoy it

00:00:39 --> 00:00:45
subscribe on youtube itunes or simply

00:00:42 --> 00:00:49
connect with me on twitter at Lex

00:00:44 --> 00:00:53
Friedman spelled Fri D and now here's my

00:00:48 --> 00:00:53
conversation with jurgen schmidhuber

00:00:52 --> 00:01:00
early on you dreamed of AI systems that

00:00:56 --> 00:01:03
self-improve recursively when was that

00:00:59 --> 00:01:05
dream born when I was a baby

00:01:02 --> 00:01:09
no it's not true I mean it was a

00:01:04 --> 00:01:11
teenager and what was the catalyst for

00:01:08 --> 00:01:18
that birth what was the thing that first

00:01:10 --> 00:01:21
inspired you when I was a boy I'm I was

00:01:17 --> 00:01:24
thinking about what to do in my life and

00:01:20 --> 00:01:28
then I thought the most exciting thing

00:01:23 --> 00:01:30
is to solve the riddles of the universe

00:01:27 --> 00:01:34
and and that means you have to become a

00:01:29 --> 00:01:37
physicist however then I realized that

00:01:33 --> 00:01:41
here's something even grander you can

00:01:36 --> 00:01:43
try to build a machine that isn't really

00:01:40 --> 00:01:45
a machine any longer that learns to

00:01:42 --> 00:01:48
become a much better physicist than I

00:01:44 --> 00:01:51
could ever hope to be and that's how I

00:01:47 --> 00:01:54
thought maybe I can multiply my tiny

00:01:50 --> 00:01:57
little bit of creativity into infinity

00:01:53 --> 00:01:59
but ultimately that creativity will be

00:01:56 --> 00:02:03
multiplied to understand the universe

00:01:58 --> 00:02:05
around us that's that's the the

00:02:02 --> 00:02:08
curiosity for that mystery that that

00:02:04 --> 00:02:12
drove you yes so if you can build a

00:02:07 --> 00:02:15
machine that learns to solve more and

00:02:11 --> 00:02:18
more complex problems and more and more

00:02:14 --> 00:02:22
general problems older then you

00:02:17 --> 00:02:27
basically have solved all the problems

00:02:21 --> 00:02:29
at least all the solvable problems so

00:02:26 --> 00:02:31
how do you think what is the mechanism

00:02:28 --> 00:02:35
for that kind of general solver look

00:02:30 --> 00:02:37
like obviously we don't quite yet have

00:02:34 --> 00:02:39
one or know how to build one who have

00:02:36 --> 00:02:42
ideas and you have had throughout your

00:02:38 --> 00:02:45
career several ideas about it so how do

00:02:41 --> 00:02:49
you think about that mechanism so in the

00:02:44 --> 00:02:51
80s I thought about how to build this

00:02:48 --> 00:02:55
machine that learns to solve all these

00:02:50 --> 00:02:57
problems I cannot solve myself and I

00:02:54 --> 00:03:00
thought it is clear that has to be a

00:02:56 --> 00:03:02
machine that not only learns to solve

00:02:59 --> 00:03:05
this problem here and

00:03:01 --> 00:03:10
problem here but it also has to learn to

00:03:04 --> 00:03:13
improve the learning algorithm itself so

00:03:09 --> 00:03:15
it has to have the learning algorithm in

00:03:12 --> 00:03:19
a representation that allows it to

00:03:14 --> 00:03:21
inspect it and modify it such that it

00:03:18 --> 00:03:24
can come up with a better learning

00:03:20 --> 00:03:27
algorithm so I call that meta learning

00:03:23 --> 00:03:29
to learn and recursive

00:03:26 --> 00:03:32
self-improvement that is really the

00:03:28 --> 00:03:37
pinnacle of that why you then not only

00:03:31 --> 00:03:40
alarm how to improve on that problem and

00:03:36 --> 00:03:42
on that but you also improve the way the

00:03:39 --> 00:03:44
machine improves and you also improve

00:03:41 --> 00:03:49
the way it improves the way it improves

00:03:43 --> 00:03:51
itself and that was my 1987 diploma

00:03:48 --> 00:03:56
thesis which was all about that

00:03:50 --> 00:03:58
hierarchy of metal or knows that I have

00:03:55 --> 00:04:02
no computational limits except for the

00:03:57 --> 00:04:06
well known limits that Google identified

00:04:01 --> 00:04:09
in 1931 and for the limits our physics

00:04:05 --> 00:04:12
in the recent years meta learning has

00:04:08 --> 00:04:14
gained popularity in a in a specific

00:04:11 --> 00:04:17
kind of form you've talked about how

00:04:13 --> 00:04:20
that's not really meta learning with

00:04:16 --> 00:04:23
Newall networks that's more basic

00:04:19 --> 00:04:25
transfer learning can you talk about the

00:04:22 --> 00:04:28
difference between the big general meta

00:04:24 --> 00:04:30
learning and a more narrow sense of meta

00:04:27 --> 00:04:32
learning the way it's used today the

00:04:29 --> 00:04:34
ways talked about today let's take the

00:04:31 --> 00:04:38
xample of a deep neural networks that

00:04:33 --> 00:04:42
has learnt to classify images and maybe

00:04:37 --> 00:04:47
you have trained that network on 100

00:04:41 --> 00:04:49
different databases of images and now a

00:04:46 --> 00:04:54
new database comes along and you want to

00:04:48 --> 00:04:56
quickly learn the new thing as well so

00:04:53 --> 00:05:00
ne simple way of doing that as you take

00:04:55 --> 00:05:04
the network which already knows 100

00:04:59 --> 00:05:07
types of databases and then you would

00:05:03 --> 00:05:12
just take the top layer of that and you

00:05:06 --> 00:05:15
retrain that using the new label data

00:05:11 --> 00:05:17
that you have in the new image database

00:05:14 --> 00:05:20
and then it turns out that it really

00:05:16 --> 00:05:23
quickly can learn that to one

00:05:19 --> 00:05:25
shot basically because from the first

00:05:22 --> 00:05:26
100 data sets

00:05:24 --> 00:05:29
it already has learned so much about

00:05:25 --> 00:05:32
computer vision that it can reuse

00:05:28 --> 00:05:34
that and that is then almost good enough

00:05:31 --> 00:05:39
to solve the new task except you need a

00:05:33 --> 00:05:42
little bit of adjustment on the top so

00:05:38 --> 00:05:44
that is transfer learning and it has

00:05:41 --> 00:05:46
been done in principle for many decades

00:05:43 --> 00:05:50
people have done similar things for

00:05:45 --> 00:05:54
decades meta-learning true mental

00:05:49 --> 00:05:58
earning is about having the learning

00:05:53 --> 00:06:03
algorithm itself open to introspection

00:05:57 --> 00:06:06
by the system that is using it and also

00:06:02 --> 00:06:08
pen to modification such that the

00:06:05 --> 00:06:12
learning system has an opportunity to

00:06:07 --> 00:06:15
modify any part of the learning

00:06:11 --> 00:06:17
algorithm and then evaluate the

00:06:14 --> 00:06:22
consequences of that modification and

00:06:16 --> 00:06:25
then learn from that to create a better

00:06:21 --> 00:06:29
learning algorithm and so on recursively

00:06:24 --> 00:06:33
so that's a very different animal where

00:06:28 --> 00:06:35
you are opening the space of possible

00:06:32 --> 00:06:38
arning algorithms to the learning

00:06:34 --> 00:06:41
system itself right so you've like in

00:06:37 --> 00:06:43
this 2004 paper you described get all

00:06:40 --> 00:06:46
machines and programs that we write

00:06:42 --> 00:06:48
themselves yeah right philosophically

00:06:45 --> 00:06:51
and even in your paper mathematically

00:06:47 --> 00:06:54
these are really compelling ideas but

00:06:50 --> 00:06:57
practically do you see these self

00:06:53 --> 00:07:00
referential programs being successful in

00:06:56 --> 00:07:04
the near term to having an impact where

00:06:59 --> 00:07:07
sort of a demonstrates to the world that

00:07:03 --> 00:07:11
his direction is a is a good one to

00:07:06 --> 00:07:13
pursue in the near term yes we had these

00:07:10 --> 00:07:15
two different types of fundamental

00:07:12 --> 00:07:19
research how to build a universal

00:07:14 --> 00:07:21
problem solver one basically exploiting

00:07:18 --> 00:07:24
[Music]

00:07:20 --> 00:07:27
proof search and things like that that

00:07:23 --> 00:07:30
you need to come up with asymptotic Liam

00:07:27 --> 00:07:34
optimal theoretically optimal

00:07:29 --> 00:07:39
self-improvement and problems all of us

00:07:33 --> 00:07:43
however one has to admit that through

00:07:38 --> 00:07:46
this proof search comes in an additive

00:07:42 --> 00:07:52
constant an overhead an additive

00:07:45 --> 00:07:54
overhead that vanishes in comparison to

00:07:51 --> 00:07:58
what you have to do to solve large

00:07:53 --> 00:08:00
problems however for many of the small

00:07:57 --> 00:08:03
problems that we want to solve in our

00:07:59 --> 00:08:05
everyday life we cannot ignore this

00:08:02 --> 00:08:09
constant overhead and that's why we also

00:08:04 --> 00:08:12
have been doing other things non

00:08:08 --> 00:08:14
universal things such as recurrent

00:08:11 --> 00:08:17
neural networks which are trained by

00:08:13 --> 00:08:19
gradient descent and local search

00:08:16 --> 00:08:21
techniques which aren't universal at all

00:08:18 --> 00:08:23
which aren't provably optimal at all

00:08:20 --> 00:08:26
ike the other stuff that we did but

00:08:22 --> 00:08:28
which are much more practical as long as

00:08:25 --> 00:08:32
we only want to solve the small problems

00:08:28 --> 00:08:34
that we are

00:08:31 --> 00:08:37
typically trying to solve in this

00:08:33 --> 00:08:39
environment here yes so the universal

00:08:36 --> 00:08:42
problem solvers like the girdle machine

00:08:38 --> 00:08:45
but also Markos who does fastest way of

00:08:42 --> 00:08:50
solving all possible problems which he

00:08:44 --> 00:08:52
developed around 2012 - in my lab they

00:08:49 --> 00:08:54
are associated with these constant

00:08:51 --> 00:08:56
overheads for proof search which

00:08:53 --> 00:09:00
guarantee is that the thing that you're

00:08:55 --> 00:09:04
doing is optimal for example there is

00:08:59 --> 00:09:06
this fastest way of solving all problems

00:09:03 --> 00:09:12
with a computable solution which is due

00:09:05 --> 00:09:13
to Marcus Marcus jota and to explain

00:09:11 --> 00:09:16
what's going on there let's take

00:09:12 --> 00:09:18
traveling salesman problems with

00:09:15 --> 00:09:22
traveling salesman problems you have a

00:09:17 --> 00:09:25
number of cities in cities and you try

00:09:21 --> 00:09:27
to find the shortest path through all

00:09:24 --> 00:09:32
these cities without visiting any city

00:09:26 --> 00:09:36
twice and nobody know is the fastest way

00:09:31 --> 00:09:41
of solving Traveling Salesman problems

00:09:35 --> 00:09:45
tsps but let's assume there is a method

00:09:40 --> 00:09:48
of solving them within n to the 5

00:09:44 --> 00:09:54
operations where n is the number of

00:09:47 --> 00:09:58
cities then the universal method of

00:09:53 --> 00:09:59
Marcus is going to solve the same

00:09:57 --> 00:10:05
trolley salesman problem

00:09:58 --> 00:10:07
also within n to the 5 steps plus o of 1

00:10:04 --> 00:10:11
plus a constant number of steps that you

00:10:06 --> 00:10:14
need for the proof searcher which you

00:10:10 --> 00:10:16
need to show that this particular class

00:10:13 --> 00:10:19
of problems that Traveling Salesman

00:10:15 --> 00:10:23
salesman problems can be solved within a

00:10:18 --> 00:10:26
certain time bound within order into the

00:10:22 --> 00:10:29
five steps basically and this additive

00:10:25 --> 00:10:33
constant doesn't care for in which means

00:10:28 --> 00:10:36
as n is getting larger and larger as you

00:10:32 --> 00:10:39
have more and more cities the constant

00:10:35 --> 00:10:43
overhead pales in comparison and that

00:10:39 --> 00:10:46
means that almost all large problems

00:10:42 --> 00:10:48
I solved in the best possible way our

00:10:45 --> 00:10:52
way today we already have a universal

00:10:47 --> 00:10:55
problem solver like sound however it's

00:10:51 --> 00:10:59
not practical because the overhead the

00:10:54 --> 00:11:01
constant overhead is so large that for

00:10:58 --> 00:11:05
the small kinds of problems that we want

00:11:00 --> 00:11:07
o solve in this little biosphere by the

00:11:04 --> 00:11:10
way when you say small you're talking

00:11:06 --> 00:11:11
about things that fall within the

00:11:09 --> 00:11:14
constraints of our computational systems

00:11:10 --> 00:11:16
thinking they can seem quite large to us

00:11:13 --> 00:11:20
mere humans right that's right yeah so

00:11:15 --> 00:11:22
they seem large and even unsolvable in a

00:11:19 --> 00:11:25
practical sense today but they are still

00:11:21 --> 00:11:28
small compared to almost all problems

00:11:24 --> 00:11:31
because almost all problems are large

00:11:27 --> 00:11:34
problems which are much larger than any

00:11:30 --> 00:11:37
constant do you find it useful as a

00:11:33 --> 00:11:40
person who is dreamed of creating a

00:11:36 --> 00:11:41
general learning system has worked on

00:11:39 --> 00:11:45
creating one has done a lot of

00:11:40 --> 00:11:50
interesting ideas there to think about P

00:11:44 --> 00:11:53
versus NP this formalization of how hard

00:11:49 --> 00:11:56
problems are how they scale this kind of

00:11:52 --> 00:11:58
worst-case analysis type of thinking do

00:11:55 --> 00:12:02
you find that useful or is it only just

00:11:57 --> 00:12:04
a mathematical it's a set of

00:12:01 --> 00:12:05
mathematical techniques to give you

00:12:03 --> 00:12:09
intuition about what's good and bad

00:12:04 --> 00:12:12
mm-hmm so P versus NP that's super

00:12:08 --> 00:12:14
interesting from a theoretical point of

00:12:11 --> 00:12:16
view and in fact as you are thinking

00:12:13 --> 00:12:19
about that problem you can also get

00:12:15 --> 00:12:22
inspiration for better practical

00:12:19 --> 00:12:25
problems always on the other hand we

00:12:21 --> 00:12:29
have to admit that at the moment as he

00:12:24 --> 00:12:31
best practical problem solvers for all

00:12:28 --> 00:12:33
kinds of problems that we are now

00:12:30 --> 00:12:37
solving through what is called AI at the

00:12:32 --> 00:12:39
moment they are not of the kind that is

00:12:36 --> 00:12:43
inspired by these questions you know

00:12:38 --> 00:12:44
there we are using general-purpose

00:12:42 --> 00:12:47
computers such as recurrent neural

00:12:43 --> 00:12:50
networks but we have a search technique

00:12:46 --> 00:12:53
which is just local search gradient

00:12:49 --> 00:12:55
descent to try to find a program that is

00:12:52 --> 00:12:56
running on these recurrent networks such

00:12:54 --> 00:12:59
that it can

00:12:55 --> 00:13:01
or some interesting problems such as

00:12:58 --> 00:13:03
peech recognition

00:13:00 --> 00:13:06
machine translation and something like

00:13:02 --> 00:13:09
that and there is very little theory

00:13:05 --> 00:13:11
behind the best solutions that we have

00:13:08 --> 00:13:13
at the moment that can do that do you

00:13:10 --> 00:13:16
think that needs to change you think

00:13:12 --> 00:13:18
that world change or can we go can we

00:13:15 --> 00:13:20
create a general intelligence systems

00:13:17 --> 00:13:22
without ever really proving that that

00:13:19 --> 00:13:24
system is intelligent in some kind of

00:13:21 --> 00:13:26
mathematical way solving machine

00:13:23 --> 00:13:26
translation perfectly or something like

00:13:25 --> 00:13:29
that

00:13:25 --> 00:13:31
within some kind of syntactic definition

00:13:28 --> 00:13:33
of a language or can we just be super

00:13:30 --> 00:13:36
impressed by the thing working extremely

00:13:32 --> 00:13:39
well and that's sufficient there's an

00:13:35 --> 00:13:41
old saying and I don't know who brought

00:13:38 --> 00:13:46
it up first which says there's nothing

00:13:40 --> 00:13:50
more practical than a good theory and um

00:13:45 --> 00:13:54
yeah and a good theory of

00:13:49 --> 00:13:57
problem-solving under limited resources

00:13:53 --> 00:14:00
like here in this universe or on this

00:13:56 --> 00:14:03
little planet has to take into account

00:13:59 --> 00:14:06
hese limited resources and so probably

00:14:02 --> 00:14:06
that is locking

00:14:05 --> 00:14:13
a theory in which is related to what we

00:14:09 --> 00:14:18
already have sees a sim totally optimal

00:14:12 --> 00:14:20
comes almost which which tells us what

00:14:17 --> 00:14:22
we need in addition to that to come up

00:14:19 --> 00:14:26
with a practically optimal problem so

00:14:21 --> 00:14:27
long so I believe we will have something

00:14:25 --> 00:14:30
like that

00:14:26 --> 00:14:34
and maybe just a few little tiny twists

00:14:29 --> 00:14:36
unnecessary to to change what we already

00:14:33 --> 00:14:41
have to come up with that as well as

00:14:35 --> 00:14:43
long as we don't have that we mmm admit

00:14:40 --> 00:14:46
hat we are taking sub optimal ways and

00:14:42 --> 00:14:50
we can y'all not Verizon long shorter

00:14:45 --> 00:14:53
memory for equipped with local search

00:14:49 --> 00:14:55
techniques and we are happy that it

00:14:52 --> 00:15:00
works better than any competing method

00:14:54 --> 00:15:02
but that doesn't mean that we we think

00:14:59 --> 00:15:05
we are done you've said that an AGI

00:15:01 --> 00:15:07
system will ultimately be a simple one a

00:15:04 --> 00:15:09
general intelligent system will

00:15:06 --> 00:15:11
ultimately be a simple one maybe a

00:15:08 --> 00:15:12
pseudocode of a few lines to be able to

00:15:10 --> 00:15:16
describe it

00:15:11 --> 00:15:21
can you talk through your intuition

00:15:15 --> 00:15:25
behind this idea why you feel that uh at

00:15:20 --> 00:15:29
its core intelligence is a simple

00:15:24 --> 00:15:33
algorithm experience tells us that this

00:15:28 --> 00:15:37
tuff that works best is really simple

00:15:32 --> 00:15:39
so see asymptotic team optimal ways of

00:15:36 --> 00:15:41
solving problems if you look at them and

00:15:38 --> 00:15:42
just a few lines of code it's really

00:15:40 --> 00:15:43
true

00:15:41 --> 00:15:46
although they are these amazing

00:15:42 --> 00:15:51
properties just a few lines of code then

00:15:46 --> 00:15:55
the most promising and most useful

00:15:50 --> 00:15:58
practical things maybe don't have this

00:15:54 --> 00:16:00
proof of optimality associated with them

00:15:57 --> 00:16:04
however they are so just a few lines of

00:15:59 --> 00:16:07
code the most successful mmm we can

00:16:03 --> 00:16:09
eural networks you can write them down

00:16:06 --> 00:16:13
and five lines of pseudocode that's a

00:16:08 --> 00:16:17
beautiful almost poetic idea but what

00:16:12 --> 00:16:19
you're describing there is this the

00:16:16 --> 00:16:20
lines of pseudocode are sitting on top

00:16:18 --> 00:16:23
of layers and layers

00:16:19 --> 00:16:26
abstractions in a sense hmm so you're

00:16:22 --> 00:16:31
saying at the very top mmm you'll be a

00:16:25 --> 00:16:34
beautifully written sort of algorithm

00:16:30 --> 00:16:35
but do you think that there's many

00:16:33 --> 00:16:39
layers of abstractions we have to first

00:16:34 --> 00:16:43
learn to construct yeah of course we are

00:16:38 --> 00:16:45
building on all these great abstractions

00:16:42 --> 00:16:49
that people have invented over the

00:16:44 --> 00:16:55
millennia such as matrix multiplications

00:16:48 --> 00:17:01
and real numbers and basic arithmetic

00:16:54 --> 00:17:03
and calculus and derivations of error

00:17:00 --> 00:17:05
functions and derivatives of error

00:17:02 --> 00:17:09
functions and stuff like that

00:17:04 --> 00:17:13
so without that language that greatly

00:17:08 --> 00:17:15
simplifies our way our thinking about

00:17:12 --> 00:17:17
hese problems we couldn't do anything

00:17:14 --> 00:17:19
so in that sense as always we are

00:17:16 --> 00:17:24
standing on the shoulders of the Giants

00:17:18 --> 00:17:27
who in the past simplified the problem

00:17:23 --> 00:17:30
of problem solving so much that now we

00:17:26 --> 00:17:35
have a chance to do the final step the

00:17:29 --> 00:17:36
final step will be a simple one oh if we

00:17:34 --> 00:17:38
if you take a step back through all of

00:17:35 --> 00:17:40
human civilization in just the universe

00:17:37 --> 00:17:42
in check

00:17:39 --> 00:17:46
how do you think about evolution and

00:17:41 --> 00:17:49
what if creating a universe is required

00:17:45 --> 00:17:52
to achieve this final step what if going

00:17:48 --> 00:17:53
through the very painful and an

00:17:51 --> 00:17:56
inefficient process of evolution is

00:17:52 --> 00:17:57
needed to come up with this set of

00:17:55 --> 00:18:00
abstractions that ultimately to

00:17:56 --> 00:18:02
intelligence do you think there's a

00:17:59 --> 00:18:05
shortcut or do you think we have to

00:18:01 --> 00:18:07
create something like our universe in

00:18:04 --> 00:18:11
order to create something like human

00:18:06 --> 00:18:14
level intelligence hmm so far the only

00:18:10 --> 00:18:21
example we have is this one this

00:18:13 --> 00:18:24
universe and you live you better maybe

00:18:20 --> 00:18:29
not but we are part of this whole

00:18:23 --> 00:18:32
process right so apparently so it might

00:18:28 --> 00:18:33
be the key is that the code that runs

00:18:31 --> 00:18:36
the universe as

00:18:32 --> 00:18:39
really really simple everything points

00:18:35 --> 00:18:42
to that possibility because gravity and

00:18:38 --> 00:18:45
other basic forces are really simple

00:18:41 --> 00:18:47
laws that can be easily described also

00:18:44 --> 00:18:52
in just a few lines of code basically

00:18:46 --> 00:18:56
and and then there are these other

00:18:51 --> 00:18:57
events that the apparently random events

00:18:55 --> 00:19:00
in the history of the universe which as

00:18:56 --> 00:19:02
far as we know at the moment don't have

00:18:59 --> 00:19:04
a compact code but who knows maybe

00:19:01 --> 00:19:07
somebody and the near future is going to

00:19:03 --> 00:19:12
figure out the pseudo-random generator

00:19:06 --> 00:19:15
which is which is computing whether the

00:19:11 --> 00:19:18
measurement of that spin up or down

00:19:14 --> 00:19:20
thing here is going to be positive or

00:19:17 --> 00:19:23
negative underlying quantum mechanics

00:19:19 --> 00:19:26
yes so you ultimately think quantum

00:19:22 --> 00:19:28
echanics is a pseudo-random number

00:19:25 --> 00:19:34
generator monistic there's no randomness

00:19:27 --> 00:19:37
in our universe does God play dice so a

00:19:33 --> 00:19:40
couple of years ago a famous physicist

00:19:36 --> 00:19:44
quantum physicist Anton Zeilinger he

00:19:39 --> 00:19:48
wrote an essay in nature and it started

00:19:43 --> 00:19:53
more or less like that one of the

00:19:47 --> 00:19:59
fundamental insights our theme of the

00:19:52 --> 00:20:01
20th century was that the universe is

00:19:58 --> 00:20:07
fundamentally random on the quantum

00:20:00 --> 00:20:09
level and that whenever you measure spin

00:20:06 --> 00:20:12
up or down or something like that a new

00:20:08 --> 00:20:16
bit of information enters the history of

00:20:11 --> 00:20:20
the universe and while I was reading

00:20:15 --> 00:20:21
that I was already typing the responds

00:20:19 --> 00:20:25
and they had to publish it because I was

00:20:20 --> 00:20:30
right that there's no evidence no

00:20:24 --> 00:20:32
physical evidence for that so there's an

00:20:29 --> 00:20:35
alternative explanation where everything

00:20:31 --> 00:20:38
that we consider random is actually

00:20:34 --> 00:20:41
pseudo-random such as the decimal

00:20:37 --> 00:20:41
expansion of pi

00:20:43 --> 00:20:51
supply is interesting because every

00:20:47 --> 00:20:55
three-digit sequence every sequence of

00:20:50 --> 00:21:00
three digits appears roughly one in a

00:20:54 --> 00:21:03
thousand times and every five digit

00:20:59 --> 00:21:05
sequence appears roughly one in ten

00:21:02 --> 00:21:08
thousand times what do you really would

00:21:04 --> 00:21:11
expect if it was run random but there's

00:21:07 --> 00:21:12
a very short algorithm short program

00:21:10 --> 00:21:15
that computes all of that so it's

00:21:11 --> 00:21:17
extremely compressible and who knows

00:21:14 --> 00:21:20
maybe tomorrow somebody some grad

00:21:16 --> 00:21:22
student at CERN goes back over all these

00:21:19 --> 00:21:26
data points better decay and whatever

00:21:21 --> 00:21:28
and figures out oh it's the second

00:21:25 --> 00:21:31
billion digits of pi or something like

00:21:27 --> 00:21:33
that we don't have any fundamental

00:21:30 --> 00:21:37
reason at the moment to believe that

00:21:32 --> 00:21:40
his is truly random and not just a

00:21:37 --> 00:21:42
deterministic video game if it was a

00:21:39 --> 00:21:46
deterministic video game it would be

00:21:41 --> 00:21:49
much more beautiful because beauty is

00:21:45 --> 00:21:53
implicity and many of the basic laws of

00:21:48 --> 00:21:56
the universe like gravity and the other

00:21:52 --> 00:21:57
basic forces are very simple so very

00:21:55 --> 00:22:03
short programs can explain what these

00:21:56 --> 00:22:05
are doing and and it would be awful and

00:22:02 --> 00:22:07
ugly the universe would be ugly the

00:22:04 --> 00:22:10
history of the universe would be ugly if

00:22:06 --> 00:22:12
or the extra things the random the

00:22:09 --> 00:22:17
seemingly random data points that we get

00:22:11 --> 00:22:19
all the time that we really need a huge

00:22:16 --> 00:22:25
number of extra bits to destroy all

00:22:18 --> 00:22:27
these um these extra bits of information

00:22:24 --> 00:22:30
so as long as we don't have evidence

00:22:26 --> 00:22:33
that there is no short program that

00:22:29 --> 00:22:38
computes the entire history of the

00:22:32 --> 00:22:42
ntire universe we are a scientists

00:22:37 --> 00:22:46
compelled to look further for that Swiss

00:22:41 --> 00:22:49
program your intuition says there exists

00:22:45 --> 00:22:52
a shortest a program that can backtrack

00:22:48 --> 00:22:55
to the to the creation of the universe

00:22:51 --> 00:22:57
so the shortest path to the creation yes

00:22:54 --> 00:23:01
including all the

00:22:56 --> 00:23:04
ntanglement things and all the spin

00:23:00 --> 00:23:11
up-and-down measurements that have been

00:23:03 --> 00:23:14
taken place since 13.8 billion years ago

00:23:10 --> 00:23:17
and so yeah so we don't have a proof

00:23:13 --> 00:23:21
that it is random we don't have a proof

00:23:16 --> 00:23:22
that it is compressible to a short

00:23:20 --> 00:23:25
program but as long as we don't have

00:23:21 --> 00:23:27
that proof we are obliged as scientists

00:23:24 --> 00:23:29
to keep looking for that simple

00:23:26 --> 00:23:31
xplanation absolutely so you said

00:23:28 --> 00:23:35
simplicity is beautiful or beauty is

00:23:30 --> 00:23:37
imple either one works but you also

00:23:34 --> 00:23:40
work on curiosity discovery

00:23:36 --> 00:23:46
ou know the romantic notion of

00:23:39 --> 00:23:50
randomness of serendipity of being

00:23:45 --> 00:23:54
surprised by things that are about you

00:23:49 --> 00:23:57
kind of in our poetic notion of reality

00:23:53 --> 00:24:00
we think as humans require randomness so

00:23:56 --> 00:24:04
you don't find randomness beautiful you

00:23:59 --> 00:24:10
se you find simple determinism

00:24:03 --> 00:24:13
beautiful yeah okay so why why because

00:24:09 --> 00:24:18
the explanation becomes shorter a

00:24:12 --> 00:24:22
universe that is compressible to a short

00:24:17 --> 00:24:25
program is much more elegant and much

00:24:21 --> 00:24:27
more beautiful than another one which

00:24:24 --> 00:24:33
needs an almost infinite number of bits

00:24:26 --> 00:24:34
to be described as far as we know many

00:24:32 --> 00:24:36
things that are happening in this

00:24:33 --> 00:24:39
universe are really simple in terms are

00:24:35 --> 00:24:42
from short programs that compute gravity

00:24:38 --> 00:24:45
and the interaction between elementary

00:24:41 --> 00:24:47
particles and so on so all of that seems

00:24:44 --> 00:24:51
to be very very simple every electron

00:24:46 --> 00:24:53
seems to reuse the same sub program all

00:24:50 --> 00:25:03
the time as it is interacting with other

00:24:52 --> 00:25:07
elementary particles if we now require

00:25:02 --> 00:25:10
an extra Oracle injecting new bits of

00:25:06 --> 00:25:11
information all the time for these extra

00:25:09 --> 00:25:15
things which are currently no

00:25:10 --> 00:25:15
understood such as

00:25:14 --> 00:25:26
better decay then the whole description

00:25:22 --> 00:25:28
length our data that we can observe out

00:25:25 --> 00:25:34
of the history of the universe would

00:25:27 --> 00:25:35
become much longer and therefore uglier

00:25:33 --> 00:25:38
and uglier

00:25:34 --> 00:25:41
again the simplicity is elegant and

00:25:37 --> 00:25:44
beautiful all the history of science is

00:25:40 --> 00:25:48
a history of compression progress yes so

00:25:43 --> 00:25:50
you've described sort of as we build up

00:25:47 --> 00:25:55
abstractions and you've talked about the

00:25:49 --> 00:25:57
idea of compression how do you see this

00:25:54 --> 00:25:59
the history of science the history of

00:25:56 --> 00:26:03
humanity our civilization and life on

00:25:58 --> 00:26:05
earth as some kind of path towards

00:26:02 --> 00:26:06
greater and greater compression what do

00:26:04 --> 00:26:10
you mean by there how do you think of

00:26:05 --> 00:26:14
that indeed the history of science is a

00:26:09 --> 00:26:16
history of compression progress what

00:26:13 --> 00:26:19
does that mean hundreds of years ago

00:26:15 --> 00:26:22
there was an astronomer whose name was

00:26:18 --> 00:26:26
Keppler and he looked at the data points

00:26:21 --> 00:26:28
that he got by watching planets move and

00:26:25 --> 00:26:31
then he had all these data points and

00:26:27 --> 00:26:35
suddenly turnouts that he can greatly

00:26:30 --> 00:26:39
compress the data by predicting it

00:26:34 --> 00:26:41
hrough an ellipse law so it turns out

00:26:38 --> 00:26:45
hat all these data points are more or

00:26:40 --> 00:26:49
less on ellipses around the Sun and

00:26:44 --> 00:26:53
another guy came along whose name was

00:26:48 --> 00:26:56
Newton and before him hook and they said

00:26:52 --> 00:27:00
the same thing that is making these

00:26:55 --> 00:27:05
planets move like that is what makes the

00:26:59 --> 00:27:09
apples fall down and it also holds form

00:27:04 --> 00:27:13
stones and for all kinds of other

00:27:08 --> 00:27:16
objects and suddenly many many of these

00:27:13 --> 00:27:18
compression of these observations became

00:27:15 --> 00:27:21
much more compressible because as long

00:27:17 --> 00:27:23
as you can predict the next thing given

00:27:20 --> 00:27:25
what you have seen so far you can

00:27:22 --> 00:27:27
compress it you don't have to store that

00:27:24 --> 00:27:31
data extra this is called predict

00:27:26 --> 00:27:33
coding and then there was still

00:27:30 --> 00:27:36
something wrong with that theory of the

00:27:32 --> 00:27:39
universe and you had deviations from

00:27:35 --> 00:27:41
these predictions of the theory and 300

00:27:38 --> 00:27:44
years later another guy came along whose

00:27:40 --> 00:27:47
name was Einstein and he he was able to

00:27:43 --> 00:27:51
explain away all these deviations from

00:27:46 --> 00:27:54
the predictions of the old theory

00:27:50 --> 00:27:58
through a new theory which was called

00:27:53 --> 00:28:00
the general theory of relativity which

00:27:57 --> 00:28:02
at first glance looks a little bit more

00:27:59 --> 00:28:05
complicated and you have to warp space

00:28:01 --> 00:28:08
and time but you can't phrase it within

00:28:04 --> 00:28:11
one single sentence which is no matter

00:28:07 --> 00:28:15
how fast you accelerate and how fast are

00:28:10 --> 00:28:19
hard you decelerate and no matter what

00:28:14 --> 00:28:22
is the gravity in your local framework

00:28:18 --> 00:28:24
Lightspeed always looks the same and

00:28:21 --> 00:28:26
from from that you can calculate all the

00:28:23 --> 00:28:29
consequences so it's a very simple thing

00:28:25 --> 00:28:33
and it allows you to further compress

00:28:28 --> 00:28:35
all the observations because suddenly

00:28:32 --> 00:28:38
there are hardly any deviations any

00:28:34 --> 00:28:41
longer that you can measure from the

00:28:37 --> 00:28:44
predictions of this new theory so all of

00:28:40 --> 00:28:47
science is a history of compression

00:28:43 --> 00:28:51
progress you never arrive immediately at

00:28:46 --> 00:28:54
he shortest explanation of the data but

00:28:50 --> 00:28:57
you're making progress whenever you are

00:28:53 --> 00:28:59
making progress you have an insight you

00:28:56 --> 00:29:02
see all first I needed so many bits of

00:28:58 --> 00:29:04
information to describe the data to

00:29:01 --> 00:29:07
describe my falling apples my video are

00:29:03 --> 00:29:09
falling apples I need so many data so

00:29:06 --> 00:29:12
many pixels have to be stored but then

00:29:08 --> 00:29:14
suddenly I realize no there is a very

00:29:11 --> 00:29:18
simple way of predicting the third frame

00:29:13 --> 00:29:20
in the video from the first tool and and

00:29:17 --> 00:29:22
maybe not every little detail can be

00:29:19 --> 00:29:24
predicted but more or less most of these

00:29:21 --> 00:29:26
orange blocks blobs that are coming down

00:29:23 --> 00:29:28
they accelerate in the same way which

00:29:25 --> 00:29:32
means that I can greatly compress the

00:29:27 --> 00:29:36
video and the amount of compression

00:29:31 --> 00:29:38
progress that is the depth of the

00:29:35 --> 00:29:39
insight that you have at that moment

00:29:37 --> 00:29:42
hat's the fun that you have the

00:29:38 --> 00:29:45
Scientific fun that fun in that

00:29:41 --> 00:29:47
discovery and we can build artificial

00:29:44 --> 00:29:49
systems that do the same thing they

00:29:46 --> 00:29:51
measure the depth of their insights as

00:29:48 --> 00:29:54
they are looking at the data which is

00:29:50 --> 00:29:57
coming in through their own experiments

00:29:53 --> 00:30:00
and we give them a reward an intrinsic

00:29:56 --> 00:30:03
reward and proportion to this depth of

00:29:59 --> 00:30:09
insight and since they are trying to

00:30:02 --> 00:30:11
maximize the rewards they get they are

00:30:08 --> 00:30:14
suddenly motivated to come up with new

00:30:10 --> 00:30:17
action sequences with new experiments

00:30:13 --> 00:30:19
that have the property that the data

00:30:16 --> 00:30:22
that is coming in as a consequence are

00:30:18 --> 00:30:25
these experiments has the property that

00:30:21 --> 00:30:28
hey can learn something about see a

00:30:24 --> 00:30:31
pattern in there which they hadn't seen

00:30:27 --> 00:30:34
yet before so there's an idea of power

00:30:30 --> 00:30:35
play you've described a training general

00:30:33 --> 00:30:38
problem solver in this kind of way of

00:30:34 --> 00:30:40
looking for the unsolved problems

00:30:37 --> 00:30:43
yeah can you describe that idea a little

00:30:39 --> 00:30:45
further it's another very simple idea so

00:30:42 --> 00:30:50
normally what you do in computer science

00:30:44 --> 00:30:53
you have you have some guy who gives you

00:30:49 --> 00:30:56
a problem and then there is a huge

00:30:52 --> 00:31:00
search space of potential solution

00:30:55 --> 00:31:02
candidates and you somehow try them out

00:30:59 --> 00:31:07
and you have more less sophisticated

00:31:01 --> 00:31:10
ways of moving around in that search

00:31:06 --> 00:31:14
space until you finally found a solution

00:31:09 --> 00:31:16
which you consider satisfactory that's

00:31:13 --> 00:31:19
what most of computer science is about

00:31:15 --> 00:31:23
power play just goes one little step

00:31:18 --> 00:31:25
further and says let's not only search

00:31:22 --> 00:31:29
for solutions to a given problem but

00:31:24 --> 00:31:32
let's search two pairs of problems and

00:31:29 --> 00:31:36
their solutions where the system itself

00:31:31 --> 00:31:39
has the opportunity to phrase its own

00:31:35 --> 00:31:44
problem so we are looking suddenly at

00:31:38 --> 00:31:47
pairs of problems and their solutions or

00:31:43 --> 00:31:49
modifications are the problems over that

00:31:46 --> 00:31:50
is supposed to generate a solution to

00:31:48 --> 00:31:55
that

00:31:49 --> 00:31:59
new problem and and this additional

00:31:54 --> 00:32:02
degree of freedom allows us to build

00:31:58 --> 00:32:05
Korea systems that are like scientists

00:32:01 --> 00:32:07
in the sense that they not only try to

00:32:04 --> 00:32:10
solve and try to find answers to

00:32:06 --> 00:32:14
existing questions no they are also free

00:32:09 --> 00:32:16
to impose their own questions so if you

00:32:13 --> 00:32:18
want to build an artificial scientist we

00:32:15 --> 00:32:21
have to give it that freedom and power

00:32:17 --> 00:32:22
play is exactly doing that so that's

00:32:20 --> 00:32:25
a dimension of freedom that's

00:32:21 --> 00:32:28
important to have but how do you are

00:32:24 --> 00:32:28
hardly you think that

00:32:27 --> 00:32:33
how multi-dimensional and difficult the

00:32:31 --> 00:32:36
space of them coming up in your

00:32:32 --> 00:32:38
questions is yeah so as as it's one of

00:32:35 --> 00:32:40
the things that as human beings we

00:32:37 --> 00:32:42
consider to be the thing that makes us

00:32:39 --> 00:32:45
pecial the intelligence that makes us

00:32:41 --> 00:32:48
pecial is that brilliant insight yeah

00:32:44 --> 00:32:51
that can create something totally new

00:32:47 --> 00:32:54
yes so now let's look at the extreme

00:32:50 --> 00:32:57
case let's look at the set of all

00:32:53 --> 00:33:02
possible problems that you can formally

00:32:56 --> 00:33:06
describe which is infinite which should

00:33:01 --> 00:33:10
be the next problem that a scientist or

00:33:05 --> 00:33:15
power-play is going to solve well it

00:33:09 --> 00:33:18
should be the easiest problem that goes

00:33:14 --> 00:33:21
beyond what you already know

00:33:17 --> 00:33:23
so it should be the simplest problem

00:33:20 --> 00:33:25
that the current problems all of that

00:33:22 --> 00:33:29
you have which can already sold 100

00:33:24 --> 00:33:33
problems that he cannot solve yet by

00:33:28 --> 00:33:35
just generalizing so it has to be new so

00:33:32 --> 00:33:37
it has to require a modification of the

00:33:34 --> 00:33:40
problem solver such that the new problem

00:33:36 --> 00:33:42
solver can solve this new thing but the

00:33:39 --> 00:33:45
old problem solver cannot do it

00:33:41 --> 00:33:48
and in addition to that we have to make

00:33:44 --> 00:33:50
sure that the problem solver doesn't

00:33:47 --> 00:33:54
forget any of the previous solutions

00:33:49 --> 00:33:56
right and so by definition power play is

00:33:53 --> 00:34:00
now trying always to search and this

00:33:55 --> 00:34:03
pair of in in the set of pairs of

00:33:59 --> 00:34:06
problems and problems over modifications

00:34:02 --> 00:34:09
for a combination that minimize the time

00:34:05 --> 00:34:12
to achieve these criteria so as always

00:34:08 --> 00:34:16
trying to find the problem which is

00:34:11 --> 00:34:19
easiest to add to the repertoire so just

00:34:15 --> 00:34:21
like grad students and academics and

00:34:18 --> 00:34:22
researchers can spend the whole career

00:34:20 --> 00:34:26
in a local minima hmm

00:34:21 --> 00:34:28
stuck trying to come up with interesting

00:34:25 --> 00:34:31
questions but ultimately doing very

00:34:27 --> 00:34:33
little do you think it's easy well in

00:34:30 --> 00:34:35
this approach of looking for the

00:34:32 --> 00:34:37
simplest unsolvable problem to get stuck

00:34:34 --> 00:34:42
in a local minima is not never really

00:34:36 --> 00:34:43
discovering new you know really jumping

00:34:41 --> 00:34:48
outside of the hundred problems the very

00:34:42 --> 00:34:50
solved in a genuine creative way no

00:34:47 --> 00:34:53
because that's the nature of power play

00:34:49 --> 00:34:57
that it's always trying to break its

00:34:52 --> 00:34:59
current generalization abilities by

00:34:56 --> 00:35:01
coming up with a new problem which is

00:34:58 --> 00:35:05
beyond the current horizon

00:35:00 --> 00:35:07
just shifting the horizon of knowledge a

00:35:04 --> 00:35:08
little bit out there breaking the

00:35:06 --> 00:35:11
xisting rules

00:35:07 --> 00:35:13
earch says the new thing becomes

00:35:10 --> 00:35:17
olvable but wasn't solvable by the old

00:35:12 --> 00:35:20
thing so like adding a new axiom like

00:35:16 --> 00:35:22
what Google did when he came up with

00:35:19 --> 00:35:24
ese new sentences new theorems that

00:35:21 --> 00:35:26
didn't have a proof in the phone system

00:35:23 --> 00:35:28
which means you can add them to the

00:35:25 --> 00:35:32
repertoire

00:35:27 --> 00:35:34
hoping that that they are not going to

00:35:31 --> 00:35:39
damage the consistency of the whole

00:35:33 --> 00:35:43
thing so in the paper with the amazing

00:35:38 --> 00:35:45
title formal theory of creativity fun in

00:35:42 --> 00:35:49
trinsic motivation you talk about

00:35:44 --> 00:35:52
discovery as intrinsic reward so if you

00:35:48 --> 00:35:54
view humans as intelligent agents what

00:35:51 --> 00:35:58
do you think is the purpose and meaning

00:35:53 --> 00:36:00
of life far as humans is you've talked

00:35:57 --> 00:36:02
about this discovery do you see humans

00:35:59 --> 00:36:09
as an instance of power play

00:36:01 --> 00:36:12
agents yeah so humans are curious and

00:36:08 --> 00:36:14
that means they behave like scientists

00:36:11 --> 00:36:16
not only the official scientists but

00:36:13 --> 00:36:19
even the babies behave like scientists

00:36:15 --> 00:36:21
and they play around with toys to figure

00:36:18 --> 00:36:25
out how the world works and how it is

00:36:20 --> 00:36:27
responding to their actions and that's

00:36:24 --> 00:36:30
how they learn about gravity and

00:36:26 --> 00:36:32
everything and yeah in 1990 we had the

00:36:29 --> 00:36:34
first systems like the hand would just

00:36:31 --> 00:36:36
ry to to play around with the

00:36:33 --> 00:36:40
nvironment and come up with situations

00:36:35 --> 00:36:42
that go beyond what they knew at that

00:36:39 --> 00:36:45
ime and then get a reward for creating

00:36:41 --> 00:36:47
these situations and then becoming more

00:36:44 --> 00:36:50
general problem solvers and being able

00:36:46 --> 00:36:55
to understand more of the world so yeah

00:36:49 --> 00:37:02
I think in principle that that that

00:36:54 --> 00:37:04
curiosity strategy or sophisticated

00:37:01 --> 00:37:07
versions of whether chess is quiet they

00:37:03 --> 00:37:09
are what we have built-in as well

00:37:06 --> 00:37:11
because evolution discovered that's a

00:37:08 --> 00:37:14
good way of exploring the unknown world

00:37:10 --> 00:37:17
and a guy who explores the unknown world

00:37:13 --> 00:37:19
has a higher chance of solving problems

00:37:16 --> 00:37:23
that he needs to survive in this world

00:37:18 --> 00:37:25
on the other hand those guys who were

00:37:22 --> 00:37:27
too curious they were weeded out as well

00:37:24 --> 00:37:29
so you have to find this trade-off

00:37:26 --> 00:37:33
evolution found a certain trade-off

00:37:28 --> 00:37:35
apparently in our society there are as a

00:37:32 --> 00:37:36
certain percentage of extremely

00:37:34 --> 00:37:38
exploitive guy

00:37:35 --> 00:37:41
and it doesn't matter if they die

00:37:37 --> 00:37:45
because many of the others are more

00:37:40 --> 00:37:50
conservative and and and so yeah it

00:37:44 --> 00:37:54
would be surprising to me if if that

00:37:49 --> 00:37:57
principle of artificial curiosity

00:37:53 --> 00:38:00
wouldn't be present and almost exactly

00:37:56 --> 00:38:02
the same form here in our brains

00:37:59 --> 00:38:06
o you're a bit of a musician and an

00:38:01 --> 00:38:09
artist so continuing on this topic of

00:38:05 --> 00:38:11
creativity what do you think is the role

00:38:08 --> 00:38:15
of creativity and intelligence so you've

00:38:10 --> 00:38:17
kind of implied that it's essential for

00:38:14 --> 00:38:21
intelligence if you think of

00:38:16 --> 00:38:24
intelligence as a problem-solving system

00:38:20 --> 00:38:26
as ability to solve problems but do you

00:38:23 --> 00:38:32
think it's essential this idea of

00:38:26 --> 00:38:34
creativity we never have a program a sub

00:38:31 --> 00:38:36
program that is called creativity or

00:38:33 --> 00:38:39
something it's just a side effect of

00:38:35 --> 00:38:41
when our problem solvers do they are

00:38:38 --> 00:38:44
searching a space of problems or a space

00:38:40 --> 00:38:47
of candidates of solution candidates

00:38:43 --> 00:38:49
until they hopefully find a solution to

00:38:46 --> 00:38:52
have given from them but then there are

00:38:48 --> 00:38:54
these two types of creativity and both

00:38:51 --> 00:38:56
of them are now present in our machines

00:38:53 --> 00:39:00
the first one has been around for a long

00:38:55 --> 00:39:03
time which is human gives problem to

00:38:59 --> 00:39:05
machine machine tries to find a solution

00:39:02 --> 00:39:07
to that and this has been happening for

00:39:04 --> 00:39:10
many decades and for many decades

00:39:06 --> 00:39:13
machines have found creative solutions

00:39:09 --> 00:39:17
to interesting problems where humans

00:39:12 --> 00:39:19
were not aware of these particularly in

00:39:16 --> 00:39:23
creative solutions but then appreciated

00:39:18 --> 00:39:25
that the machine found that the second

00:39:22 --> 00:39:27
is the pure creativity that I would call

00:39:24 --> 00:39:30
what I just mentioned I would call the

00:39:26 --> 00:39:33
applied creativity like applied art

00:39:29 --> 00:39:36
where somebody tells you now make a nice

00:39:32 --> 00:39:39
picture off of this Pope and you will

00:39:35 --> 00:39:42
get money for that okay so here is the

00:39:38 --> 00:39:44
artist and he makes a convincing picture

00:39:41 --> 00:39:45
of the Pope and the Pope likes it and

00:39:43 --> 00:39:48
gives him the money

00:39:44 --> 00:39:50
and then there is the pure creative

00:39:47 --> 00:39:52
creativity which is more like the power

00:39:49 --> 00:39:56
play and the artificial curiosity thing

00:39:51 --> 00:39:59
where you have the freedom to select

00:39:55 --> 00:40:04
your own problem like a scientist who

00:39:58 --> 00:40:08
defines his own question to study and so

00:40:03 --> 00:40:12
that is the pure creativity of UL and

00:40:07 --> 00:40:16
opposed to the applied creativity which

00:40:11 --> 00:40:18
serves another and in that distinction

00:40:15 --> 00:40:20
there's almost echoes of narrow AI

00:40:17 --> 00:40:24
versus general AI so this kind of

00:40:19 --> 00:40:28
constrained painting of a pope seems

00:40:23 --> 00:40:31
like the the approaches of what people

00:40:27 --> 00:40:34
are calling narrow AI and pure

00:40:30 --> 00:40:37
creativity seems to be maybe I'm just

00:40:33 --> 00:40:40
biased as a human but it seems to be an

00:40:36 --> 00:40:42
essential element of human level

00:40:39 --> 00:40:44
intelligence is that what you're

00:40:41 --> 00:40:48
implying

00:40:43 --> 00:40:50
to a degree if you zoom back a little

00:40:47 --> 00:40:52
bit and you just look at a general

00:40:49 --> 00:40:54
problem-solving machine which is trying

00:40:51 --> 00:40:57
to solve arbitrary problems then this

00:40:53 --> 00:41:00
machine will figure out in the course of

00:40:57 --> 00:41:02
solving problems that it's good to be

00:40:59 --> 00:41:06
curious so all of what I said just now

00:41:01 --> 00:41:09
about this prewired curiosity and this

00:41:05 --> 00:41:11
will to invent new problems that the

00:41:08 --> 00:41:14
system doesn't know how to solve yet

00:41:10 --> 00:41:19
should be just a byproduct of the

00:41:13 --> 00:41:23
general search however apparently

00:41:18 --> 00:41:25
evolution has built it into us because

00:41:22 --> 00:41:29
it turned out to be so successful a

00:41:24 --> 00:41:33
pre-wiring a buyer's a very successful

00:41:28 --> 00:41:35
exploratory buyers that that we are born

00:41:32 --> 00:41:37
with and you've also said that

00:41:34 --> 00:41:41
consciousness in the same kind of way

00:41:36 --> 00:41:44
may be a byproduct of problem-solving

00:41:40 --> 00:41:46
you know do you think do you find it's

00:41:43 --> 00:41:48
an interesting by-product you think it's

00:41:45 --> 00:41:50
a useful by-product what are your

00:41:47 --> 00:41:53
thoughts on consciousness in general or

00:41:49 --> 00:41:55
is it simply a byproduct of greater and

00:41:52 --> 00:42:00
greater capabilities of problem-solving

00:41:54 --> 00:42:03
that's that's similar to creativity in

00:41:59 --> 00:42:05
that sense yeah we never have a

00:42:02 --> 00:42:08
procedure called consciousness in our

00:42:04 --> 00:42:11
machines however we get as side effects

00:42:07 --> 00:42:14
of what these machines are doing things

00:42:10 --> 00:42:18
that seem to be closely related to what

00:42:13 --> 00:42:22
people call consciousness so for example

00:42:17 --> 00:42:25
in 1990 we had simple systems which were

00:42:21 --> 00:42:27
basically recurrent networks and

00:42:24 --> 00:42:32
therefore universal computers trying to

00:42:26 --> 00:42:34
map incoming data into actions that lead

00:42:31 --> 00:42:36
to success

00:42:33 --> 00:42:40
maximizing reward in a given environment

00:42:35 --> 00:42:42
always finding the charging station in

00:42:39 --> 00:42:44
time whenever the battery's low and

00:42:41 --> 00:42:46
negative signals are coming from the

00:42:43 --> 00:42:49
battery always finds the charging

00:42:45 --> 00:42:51
station in time without bumping against

00:42:48 --> 00:42:53
painful obstacles on the way so

00:42:50 --> 00:42:58
complicated things but very easily

00:42:52 --> 00:43:03
motivated and then we give these little

00:42:57 --> 00:43:05
a separate we can all network which is

00:43:02 --> 00:43:07
just predicting what's happening if I do

00:43:04 --> 00:43:09
that in that what will happen as a

00:43:06 --> 00:43:11
consequence of these actions that I'm

00:43:08 --> 00:43:13
executing and it's just trained on the

00:43:10 --> 00:43:15
long and long history of interactions

00:43:12 --> 00:43:18
with the world so it becomes a

00:43:14 --> 00:43:21
predictive model loss of art basically

00:43:17 --> 00:43:24
and therefore also a compressor our

00:43:20 --> 00:43:26
theme observations after what because

00:43:23 --> 00:43:29
whatever you can predict you don't have

00:43:25 --> 00:43:32
to store extras or compression is a side

00:43:28 --> 00:43:34
ffect of prediction and how does this

00:43:31 --> 00:43:37
record Network impress well it's

00:43:33 --> 00:43:39
inventing little sub programs little sub

00:43:36 --> 00:43:41
Network networks that stand for

00:43:38 --> 00:43:44
everything that frequently appears in

00:43:40 --> 00:43:46
the environment like bottles and

00:43:43 --> 00:43:50
microphones and faces maybe lots of

00:43:45 --> 00:43:51
aces in my environment so I'm learning

00:43:49 --> 00:43:54
to create something like a prototype

00:43:50 --> 00:43:55
face and a new face comes along and all

00:43:53 --> 00:43:58
I have to encode are the deviations from

00:43:54 --> 00:44:00
the prototype so it's compressing all

00:43:57 --> 00:44:03
the time the stuff that frequently

00:43:59 --> 00:44:07
appears there's one thing that appears

00:44:02 --> 00:44:09
all the time that is present all the

00:44:06 --> 00:44:11
time when the agent is interacting with

00:44:08 --> 00:44:12
its environment which is the agent

00:44:10 --> 00:44:15
itself

00:44:11 --> 00:44:19
so just for data compression reasons it

00:44:14 --> 00:44:20
is extremely natural for this we can

00:44:18 --> 00:44:23
etwork to come up with little sub

00:44:19 --> 00:44:27
networks that stand for the properties

00:44:22 --> 00:44:30
of the agents the hand you know the the

00:44:26 --> 00:44:32
other actuators and all the stuff that

00:44:29 --> 00:44:34
you need to better encode the data which

00:44:31 --> 00:44:36
is influenced by the actions of the

00:44:33 --> 00:44:38
agent so they're just as a side effect

00:44:35 --> 00:44:41
of

00:44:37 --> 00:44:47
data compression during problem-solving

00:44:40 --> 00:44:51
you have inter myself models now you can

00:44:46 --> 00:44:53
use this model of the world to plan your

00:44:50 --> 00:44:56
future and that's what yours have done

00:44:52 --> 00:44:59
since 1990 so the recurrent Network

00:44:55 --> 00:45:01
which is the controller which is trying

00:44:58 --> 00:45:04
to maximize reward can use this model as

00:45:00 --> 00:45:06
a network of the what is this model

00:45:03 --> 00:45:08
network as a wild this predictive model

00:45:05 --> 00:45:10
of the world to plan ahead and say let's

00:45:07 --> 00:45:12
not do this action sequence let's do

00:45:09 --> 00:45:15
this action sequence instead because it

00:45:11 --> 00:45:18
leads to more predictor to rewards and

00:45:14 --> 00:45:21
whenever it's waking up these layers of

00:45:17 --> 00:45:23
networks let's stand for itself and it's

00:45:20 --> 00:45:28
thinking about itself and it's thinking

00:45:22 --> 00:45:33
about itself and it's exploring mentally

00:45:27 --> 00:45:35
the consequences of its own actions and

00:45:32 --> 00:45:39
now you tell me what is still

00:45:34 --> 00:45:42
missing missing the next the gap to

00:45:38 --> 00:45:44
consciousness yeah hi there there isn't

00:45:41 --> 00:45:47
hat's a really beautiful idea that you

00:45:43 --> 00:45:50
know if life is a collection of data and

00:45:46 --> 00:45:55
in life is a process of compressing that

00:45:49 --> 00:45:58
data to act efficiently you in that data

00:45:54 --> 00:46:01
you yourself appear very often so it's

00:45:57 --> 00:46:03
useful to form compressions of yourself

00:46:00 --> 00:46:05
and it's a really beautiful formulation

00:46:02 --> 00:46:10
of what consciousness is a necessary

00:46:04 --> 00:46:13
side-effect it's actually quite

00:46:09 --> 00:46:18
compelling to me you've described our

00:46:12 --> 00:46:21
nen's developed LST aims long short-term

00:46:17 --> 00:46:23
emory networks the there type of

00:46:20 --> 00:46:25
recurrent neural networks they have

00:46:22 --> 00:46:27
gotten a lot of success recently so

00:46:24 --> 00:46:30
these are networks that model the

00:46:26 --> 00:46:33
temporal aspects in the data temporal

00:46:29 --> 00:46:35
patterns in the data and you've called

00:46:32 --> 00:46:38
them the deepest of the Newell networks

00:46:34 --> 00:46:41
right so what do you think is the value

00:46:37 --> 00:46:46
of depth in the models that we use to

00:46:40 --> 00:46:49
learn since you mentioned the long

00:46:45 --> 00:46:51
short-term memory and the lsdm I have to

00:46:48 --> 00:46:52
mention the names of the brilliant

00:46:50 --> 00:46:55
students

00:46:51 --> 00:46:57
of course that's worse first of all and

00:46:54 --> 00:46:59
my first student ever set for writer who

00:46:56 --> 00:47:03
had fundamental insights already in this

00:46:58 --> 00:47:05
diploma thesis then Felix Kias had

00:47:02 --> 00:47:09
ditional important contributions Alex

00:47:04 --> 00:47:11
gray is a guy from Scotland who is

00:47:08 --> 00:47:13
mostly responsible for this

00:47:10 --> 00:47:16
CTC algorithm which is now often used to

00:47:12 --> 00:47:18
train the Alice TM to do the speech

00:47:15 --> 00:47:21
recognition on all the Google Android

00:47:17 --> 00:47:27
phones and whatever and Siri and so on

00:47:20 --> 00:47:29
so these guys without these guys I would

00:47:26 --> 00:47:31
be nothing it's a lot of incredible work

00:47:28 --> 00:47:34
what is now the depth what is the

00:47:30 --> 00:47:37
importance of depth well

00:47:33 --> 00:47:40
most problems in the real world are deep

00:47:36 --> 00:47:42
in the sense that the current input

00:47:39 --> 00:47:47
doesn't tell you all you need to know

00:47:41 --> 00:47:49
about the environment mm-hmm so instead

00:47:46 --> 00:47:52
you have to have a memory of what

00:47:48 --> 00:47:56
happened in the past and often important

00:47:51 --> 00:47:59
parts of that memory are dated they are

00:47:55 --> 00:48:01
pretty old and so when you're doing

00:47:58 --> 00:48:06
speech recognition for example and

00:48:00 --> 00:48:09
somebody says eleven then that's about

00:48:05 --> 00:48:11
half a second or something like that

00:48:08 --> 00:48:14
which means it's already fifty-eight

00:48:10 --> 00:48:18
ime steps and another guy or the same

00:48:13 --> 00:48:21
guy says seven so the ending is the same

00:48:17 --> 00:48:24
Evan but now the system has to see the

00:48:20 --> 00:48:26
distinction between seven and eleven and

00:48:23 --> 00:48:30
the only way I can see the differences

00:48:25 --> 00:48:35
it has to store that fifty steps ago

00:48:29 --> 00:48:37
there wasn't or a nerve eleven or seven

00:48:34 --> 00:48:40
so there you have already a problem of

00:48:36 --> 00:48:43
depth fifty because for each time step

00:48:39 --> 00:48:45
you have something like a virtual a

00:48:42 --> 00:48:47
layer and the expanded unrolled version

00:48:44 --> 00:48:50
of this Riccar network which is doing

00:48:46 --> 00:48:53
the speech recognition so these long

00:48:49 --> 00:48:58
time lags they translate into problem

00:48:52 --> 00:49:01
depth and most problems and this world

00:48:57 --> 00:49:02
Asajj that you really have to look far

00:49:00 --> 00:49:06
back in time

00:49:01 --> 00:49:09
to understand what is the problem and to

00:49:05 --> 00:49:11
solvent but just like with our CMS you

00:49:08 --> 00:49:13
don't necessarily need to when you look

00:49:10 --> 00:49:14
back in time remember every aspect you

00:49:12 --> 00:49:17
just need to remember the important

00:49:13 --> 00:49:20
aspects that's right the network has to

00:49:16 --> 00:49:23
learn to put the important stuff in into

00:49:19 --> 00:49:27
memory and to ignore the unimportant

00:49:22 --> 00:49:30
noise so but in that sense deeper and

00:49:26 --> 00:49:31
eeper is better or is there a

00:49:29 --> 00:49:34
limitation is is there

00:49:30 --> 00:49:40
I mean LCM is one of the great examples

00:49:33 --> 00:49:42
of architectures that do something

00:49:39 --> 00:49:46
beyond just deeper and deeper networks

00:49:41 --> 00:49:49
there's clever mechanisms for filtering

00:49:45 --> 00:49:50
data for remembering and forgetting so

00:49:48 --> 00:49:53
do you think that that kind of thinking

00:49:49 --> 00:49:56
is necessary if you think about LCM is a

00:49:52 --> 00:49:59
leap a big leap forward over traditional

00:49:55 --> 00:50:03
vanilla are nuns what do you think is

00:49:58 --> 00:50:07
the next leap hmm it within this context

00:50:02 --> 00:50:10
so LCM is a very clever improvement but

00:50:06 --> 00:50:12
LCM still don't have the same kind of

00:50:09 --> 00:50:15
ability to see far back in the future in

00:50:11 --> 00:50:18
the in the past as us humans do the

00:50:14 --> 00:50:21
credit assignment problem across way

00:50:17 --> 00:50:24
back not just 50 times steps or a

00:50:20 --> 00:50:27
hundred or a thousand but millions and

00:50:23 --> 00:50:30
billions it's not clear what are the

00:50:26 --> 00:50:34
practical limits of the lsdm when it

00:50:29 --> 00:50:36
comes to looking back already in 2006 I

00:50:33 --> 00:50:38
think we had examples where it not only

00:50:35 --> 00:50:42
looked back tens of thousands of steps

00:50:37 --> 00:50:46
but really millions of steps and who won

00:50:41 --> 00:50:49
Paris artists in my lab I think was the

00:50:45 --> 00:50:52
first author of a paper where we really

00:50:48 --> 00:50:56
was a 2006 or something had examples

00:50:51 --> 00:51:01
word learn to look back for more than 10

00:50:55 --> 00:51:04
million steps so for most problems of

00:51:00 --> 00:51:05
speech recognition it's not necessary to

00:51:03 --> 00:51:09
look that far back but there are

00:51:05 --> 00:51:09
xamples where it does now so looking

00:51:08 --> 00:51:10
back thing

00:51:08 --> 00:51:13
[Music]

00:51:09 --> 00:51:16
that's rather easy because there is only

00:51:12 --> 00:51:20
one past but there are many possible

00:51:15 --> 00:51:22
futures and so a reinforcement learning

00:51:19 --> 00:51:26
system which is trying to maximize its

00:51:21 --> 00:51:28
future expected rewards and doesn't know

00:51:25 --> 00:51:30
yet which of these many possible future

00:51:27 --> 00:51:35
should I select given this one single

00:51:29 --> 00:51:38
past it's facing problems that the LCN

00:51:34 --> 00:51:40
by itself cannot solve so the other sim

00:51:37 --> 00:51:43
is good for coming up with a compact

00:51:39 --> 00:51:46
representation of the history so far of

00:51:42 --> 00:51:50
the history and observations in action

00:51:45 --> 00:51:54
so far but now how do you plan in an

00:51:49 --> 00:51:57
efficient and good way among all these

00:51:53 --> 00:51:59
how do you select one of these many

00:51:56 --> 00:52:01
possible action sequences that a

00:51:58 --> 00:52:04
reinforcement learning system has to

00:52:00 --> 00:52:08
consider to maximize reward in this

00:52:03 --> 00:52:11
unknown future so again it behaves this

00:52:07 --> 00:52:15
basic setup where you have one week on

00:52:10 --> 00:52:17
etwork which gets in the video and the

00:52:14 --> 00:52:20
speech and whatever and it's executing

00:52:16 --> 00:52:23
actions and is trying to maximize reward

00:52:19 --> 00:52:25
so there is no teacher who tells it what

00:52:22 --> 00:52:29
o do at which point in time and then

00:52:24 --> 00:52:31
there's the other network which is

00:52:28 --> 00:52:34
just predicting what's going to happen

00:52:30 --> 00:52:37
if I do that then and that could be an

00:52:33 --> 00:52:40
LCM Network and it allows to look back

00:52:36 --> 00:52:43
all the way to make better predictions

00:52:39 --> 00:52:45
of the next time step so essentially

00:52:42 --> 00:52:48
although it's men predicting only the

00:52:44 --> 00:52:51
next time step it is motivated to learn

00:52:47 --> 00:52:53
to put into memory something that

00:52:50 --> 00:52:55
happened maybe a million steps ago

00:52:52 --> 00:52:58
because it's important to memorize that

00:52:54 --> 00:53:02
if you want to predict that at the next

00:52:57 --> 00:53:04
ime step the next event you know how

00:53:01 --> 00:53:07
can a model of the world like that a

00:53:03 --> 00:53:09
predictive model of the world be used by

00:53:06 --> 00:53:11
the first guy let's call it the

00:53:08 --> 00:53:13
controller and the model the controller

00:53:10 --> 00:53:17
and the model how can the model be used

00:53:12 --> 00:53:20
by the controller to efficiently select

00:53:16 --> 00:53:24
among these many possible futures so

00:53:19 --> 00:53:27
naive way we had about 30 years ago was

00:53:23 --> 00:53:29
let's just use the model of the world as

00:53:26 --> 00:53:32
a stand-in as a simulation of the wall

00:53:28 --> 00:53:35
and millisecond by millisecond we

00:53:31 --> 00:53:37
planned the future and that means we

00:53:34 --> 00:53:38
have to roll it out really in detail and

00:53:36 --> 00:53:41
it will work only as the model is really

00:53:37 --> 00:53:43
good and it will still be inefficient

00:53:40 --> 00:53:45
because we have to look at all these

00:53:42 --> 00:53:48
possible futures and and there are so

00:53:44 --> 00:53:52
many of them so instead what we do now

00:53:47 --> 00:53:55
since 2015 and our cm systems controller

00:53:51 --> 00:53:58
model systems we give the controller the

00:53:54 --> 00:54:01
opportunity to learn by itself how to

00:53:57 --> 00:54:05
use the potentially relevant parts of

00:54:00 --> 00:54:08
the M of the model network to solve new

00:54:04 --> 00:54:11
problems more quickly and if it wants to

00:54:07 --> 00:54:13
it can learn to ignore the M and

00:54:10 --> 00:54:16
sometimes it's a good idea to ignore the

00:54:12 --> 00:54:18
M because it's really bad it's a bad

00:54:15 --> 00:54:21
predictor in this particular situation

00:54:17 --> 00:54:24
of life where the control is currently

00:54:20 --> 00:54:27
trying to maximize r1 however it can

00:54:23 --> 00:54:31
also allow and to address and exploit

00:54:26 --> 00:54:34
some of the sub programs that came about

00:54:30 --> 00:54:37
in the model network through compressing

00:54:33 --> 00:54:42
the data by predicting it so it now has

00:54:36 --> 00:54:44
an opportunity to reuse that code the

00:54:41 --> 00:54:48
thnic information in the modern are

00:54:43 --> 00:54:51
trying to reduce its own search space

00:54:47 --> 00:54:54
such that it can solve a new problem

00:54:50 --> 00:54:58
ore quickly than without the model

00:54:53 --> 00:55:01
compression so you're ultimately

00:54:57 --> 00:55:04
optimistic and excited about the power

00:55:00 --> 00:55:07
of ära of reinforcement learning in the

00:55:03 --> 00:55:11
context of real systems absolutely yeah

00:55:06 --> 00:55:14
so you see RL as a potential having a

00:55:10 --> 00:55:19
huge impact beyond just sort of the M

00:55:13 --> 00:55:20
part is often develop on supervised

00:55:18 --> 00:55:25
learning methods

00:55:19 --> 00:55:28
you see RL as a four problems of cell

00:55:24 --> 00:55:31
traffic cars or any kind of applied

00:55:27 --> 00:55:34
cyber BOTS X that's the correct

00:55:30 --> 00:55:36
interesting direction for research in

00:55:33 --> 00:55:40
your view I do think so we have a

00:55:35 --> 00:55:42
company called Mason's Mason's which has

00:55:39 --> 00:55:44
applied to enforcement learning to

00:55:41 --> 00:55:47
little Howdy's

00:55:43 --> 00:55:51
there are DS which learn to park without

00:55:46 --> 00:55:53
a teacher the same principles were used

00:55:50 --> 00:55:56
of course so these little Audi's they

00:55:52 --> 00:55:59
are small maybe like that so I'm much

00:55:55 --> 00:56:01
smaller than the real Howdy's but they

00:55:58 --> 00:56:03
have all the sensors that you find the

00:56:00 --> 00:56:06
real howdy is you find the cameras that

00:56:02 --> 00:56:09
lead on sensors they go up to 120 20

00:56:05 --> 00:56:12
kilometres an hour if you if they want

00:56:08 --> 00:56:15
o and and they are from pain sensors

00:56:11 --> 00:56:17
basically and they don't want to bump

00:56:14 --> 00:56:21
against obstacles and other Howdy's and

00:56:16 --> 00:56:25
so they must learn like little babies to

00:56:20 --> 00:56:27
a park take the wrong vision input and

00:56:24 --> 00:56:30
translate that into actions that lead to

00:56:26 --> 00:56:32
successful packing behavior which is a

00:56:29 --> 00:56:35
rewarding thing and yes they learn that

00:56:31 --> 00:56:38
hey are salt we have examples like that

00:56:34 --> 00:56:40
and it's only in the beginning this is

00:56:37 --> 00:56:44
just the tip of the iceberg and I

00:56:39 --> 00:56:46
believe the next wave of a line is going

00:56:43 --> 00:56:50
to be all about that so at the moment

00:56:45 --> 00:56:53
he current wave of AI is about passive

00:56:49 --> 00:56:55
pattern observation and prediction

00:56:52 --> 00:56:57
and and that's what you have on your

00:56:54 --> 00:57:00
smartphone and what the major companies

00:56:56 --> 00:57:03
on the Pacific of em are using to sell

00:56:59 --> 00:57:06
you ads to do marketing that's the

00:57:02 --> 00:57:08
current sort of profit in AI and that's

00:57:05 --> 00:57:12
only one or two percent of the world

00:57:07 --> 00:57:14
economy which is big enough to make

00:57:11 --> 00:57:16
these company is pretty much the most

00:57:13 --> 00:57:20
valuable companies in the world but

00:57:15 --> 00:57:22
here's a much much bigger fraction of

00:57:19 --> 00:57:24
the economy going to be affected by the

00:57:21 --> 00:57:27
next wave which is really about machines

00:57:23 --> 00:57:30
that shape the data through our own

00:57:26 --> 00:57:34
actions and you think simulation is

00:57:29 --> 00:57:36
ultimately the biggest way that that

00:57:33 --> 00:57:38
hough those methods will be successful

00:57:35 --> 00:57:39
in the next 10 20 years we're not

00:57:37 --> 00:57:41
alking about a hundred years from now

00:57:38 --> 00:57:44
e're talking about sort of the

00:57:40 --> 00:57:46
near-term impact of RL do you think

00:57:43 --> 00:57:48
really good simulation is required or is

00:57:45 --> 00:57:53
there other techniques like imitation

00:57:47 --> 00:57:55
learning you know observing other humans

00:57:52 --> 00:57:57
yeah operating in the real world where

00:57:54 --> 00:58:00
do you think this success will come from

00:57:56 --> 00:58:05
so at the moment we have a tendency of

00:57:59 --> 00:58:10
using physics simulations to learn

00:58:04 --> 00:58:12
behavior for machines that learn to

00:58:09 --> 00:58:15
solve problems that humans also do not

00:58:11 --> 00:58:18
know how to solve however this is not

00:58:14 --> 00:58:21
he future because the future is and

00:58:17 --> 00:58:23
what little babies do they don't use a

00:58:20 --> 00:58:25
physics engine to simulate the world

00:58:22 --> 00:58:30
no they learn a predictive model of the

00:58:24 --> 00:58:33
world which maybe sometimes is wrong in

00:58:29 --> 00:58:34
many ways but captures all kinds of

00:58:32 --> 00:58:37
important abstract high-level

00:58:33 --> 00:58:41
predictions which are really important

00:58:36 --> 00:58:43
o be successful and and that's what is

00:58:40 --> 00:58:45
what was the future thirty years ago

00:58:42 --> 00:58:47
when you started that type of research

00:58:44 --> 00:58:50
but it's still the future and now we are

00:58:46 --> 00:58:53
know much better how to go there to to

00:58:49 --> 00:58:55
move there to move forward and to really

00:58:52 --> 00:58:58
make working systems based on that where

00:58:54 --> 00:59:00
you have a learning model of the world a

00:58:57 --> 00:59:01
model of the world that learns to

00:58:59 --> 00:59:02
predict what's going to happen if I do

00:59:00 --> 00:59:07
that and that

00:59:01 --> 00:59:11
and then the controller uses that model

00:59:06 --> 00:59:14
to more quickly learn successful action

00:59:10 --> 00:59:15
sequences and then of course always this

00:59:13 --> 00:59:17
crazy thing in the beginning the model

00:59:14 --> 00:59:20
is stupid so the controller should be

00:59:16 --> 00:59:22
motivated to come up with experiments

00:59:19 --> 00:59:26
with action sequences that lead to data

00:59:21 --> 00:59:28
that improve the model do you think

00:59:25 --> 00:59:30
improving the model constructing an

00:59:27 --> 00:59:34
understanding of the world in this

00:59:29 --> 00:59:36
connection is the in now the popular

00:59:33 --> 00:59:39
approaches have been successful you know

00:59:35 --> 00:59:41
grounded in ideas of neural networks but

00:59:38 --> 00:59:45
in the 80s with expert systems there's

00:59:40 --> 00:59:49
ymbolic AI approaches which to us

00:59:44 --> 00:59:50
humans are more intuitive in a sense

00:59:48 --> 00:59:52
that it makes sense that you build up

00:59:49 --> 00:59:54
knowledge in this knowledge

00:59:51 --> 00:59:57
representation what kind of lessons can

00:59:53 --> 01:00:00
we draw in our current approaches mmm

00:59:56 --> 01:00:04
for from expert systems from symbolic

00:59:59 --> 01:00:07
yeah so I became aware of all of that in

01:00:03 --> 01:00:10
the 80s and back then a logic program

01:00:06 --> 01:00:12
ming was a huge thing was

01:00:09 --> 01:00:14
inspiring to yourself did you find it

01:00:11 --> 01:00:17
compelling because most a lot of your

01:00:13 --> 01:00:20
work was not so much in that realm mary

01:00:16 --> 01:00:23
is more in learning systems yes or no

01:00:19 --> 01:00:28
but we did all of that so we my first

01:00:22 --> 01:00:32
publication ever actually was 1987 was a

01:00:27 --> 01:00:34
the implementation of genetic algorithm

01:00:31 --> 01:00:38
of a genetic programming system in

01:00:33 --> 01:00:40
prologue prologue that's what you learn

01:00:37 --> 01:00:42
back then which is a logic programming

01:00:39 --> 01:00:46
language and the Japanese the anthers

01:00:41 --> 01:00:49
huge fifth-generation AI project which

01:00:45 --> 01:00:52
was mostly about logic programming back

01:00:48 --> 01:00:55
then although a neural networks existed

01:00:51 --> 01:00:59
and were well known back then and deep

01:00:54 --> 01:01:02
learning has existed since 1965 since

01:00:58 --> 01:01:04
this guy and the UK and even anko

01:01:01 --> 01:01:06
started it but

01:01:03 --> 01:01:08
he Japanese and many other people they

01:01:05 --> 01:01:10
focus really on this logic programming

01:01:07 --> 01:01:12
and I was influenced to the extent that

01:01:09 --> 01:01:14
I said okay let's take these

01:01:11 --> 01:01:21
biologically inspired rules like

01:01:13 --> 01:01:23
volution programs and and and implement

01:01:20 --> 01:01:25
hat in the language which I know which

01:01:22 --> 01:01:29
was Prolog for example back then and

01:01:24 --> 01:01:32
then in in many ways as came back later

01:01:28 --> 01:01:34
because the Garuda machine for example

01:01:31 --> 01:01:37
has approved search on board and without

01:01:33 --> 01:01:39
hat it would not be optimal well Marcus

01:01:36 --> 01:01:41
what does universal algorithm for

01:01:38 --> 01:01:44
solving all well-defined problems as

01:01:40 --> 01:01:48
approved search on board so that's very

01:01:43 --> 01:01:51
much logic programming without that it

01:01:47 --> 01:01:52
would not be a Centanni optimum but then

01:01:50 --> 01:01:58
on the other hand because we have a very

01:01:51 --> 01:02:01
pragmatic is also we focused on we

01:01:57 --> 01:02:04
cannula networks and and and some

01:02:00 --> 01:02:07
optimal stuff such as gradient based

01:02:03 --> 01:02:10
search and program space rather than

01:02:06 --> 01:02:12
provably optimal things the logic

01:02:09 --> 01:02:15
programming does it certainly has a

01:02:11 --> 01:02:17
usefulness in when you're trying to

01:02:14 --> 01:02:20
construct something provably optimal or

01:02:16 --> 01:02:22
probably good or something like that but

01:02:19 --> 01:02:24
is it useful for for practical problems

01:02:21 --> 01:02:26
it's really useful at volunteer

01:02:23 --> 01:02:30
improving the best theorem provers today

01:02:25 --> 01:02:32
are not neural networks right no say our

01:02:29 --> 01:02:34
logic programming systems and they are

01:02:31 --> 01:02:37
much better theorem provers than most

01:02:33 --> 01:02:41
math students and the first or second

01:02:36 --> 01:02:44
semester on but for reasoning to for

01:02:40 --> 01:02:47
playing games of go or chess or for

01:02:43 --> 01:02:49
obots autonomous vehicles that operate

01:02:46 --> 01:02:52
in the real world or object manipulation

01:02:48 --> 01:02:55
you know you think learning yeah as long

01:02:51 --> 01:03:01
as the problems have little to do with

01:02:54 --> 01:03:04
C or improving themselves then as

01:03:00 --> 01:03:05
long as that is not the case you you

01:03:03 --> 01:03:07
just want to have better pattern

01:03:04 --> 01:03:09
recognition so to build a self-driving

01:03:06 --> 01:03:10
car you want to have better pattern

01:03:08 --> 01:03:13
recognition and

01:03:09 --> 01:03:17
pedestrian recognition and all these

01:03:12 --> 01:03:19
things and you want to your minimum you

01:03:16 --> 01:03:21
want to minimize the number of false

01:03:18 --> 01:03:23
positives which is currently is slowing

01:03:20 --> 01:03:25
down self-driving cars in many ways and

01:03:22 --> 01:03:31
all that has very little to do with

01:03:24 --> 01:03:33
logic programming yeah what are you most

01:03:30 --> 01:03:35
excited about in terms of directions of

01:03:32 --> 01:03:38
artificial intelligence at this moment

01:03:34 --> 01:03:42
in the next few years in your own

01:03:37 --> 01:03:45
research and in the broader community so

01:03:41 --> 01:03:48
I think in the not so distant future we

01:03:44 --> 01:03:48
will have for the first time

01:03:48 --> 01:03:58
little robots that learn like kids and I

01:03:53 --> 01:04:00
will be able to say to the robot um look

01:03:57 --> 01:04:04
here robot we are going to assemble a

01:03:59 --> 01:04:07
smartphone it's takes a slab of plastic

01:04:03 --> 01:04:10
and the school driver and let's screw in

01:04:06 --> 01:04:14
the screw like that no no not like that

01:04:09 --> 01:04:17
like so hmm not like that like that and

01:04:13 --> 01:04:21
I don't have a data glove or something

01:04:16 --> 01:04:24
he will see me and he will hear me and

01:04:20 --> 01:04:26
he will try to do something with his own

01:04:23 --> 01:04:28
actuators which will be really different

01:04:25 --> 01:04:32
from mine but he will understand the

01:04:27 --> 01:04:36
difference and will learn to imitate me

01:04:31 --> 01:04:39
but not in the supervised way where a

01:04:35 --> 01:04:41
teacher is giving target signals for all

01:04:38 --> 01:04:43
his muscles all the time

01:04:40 --> 01:04:46
no by doing this high level imitation

01:04:42 --> 01:04:48
where he first has to learn to imitate

01:04:45 --> 01:04:50
me and then to interpret these

01:04:47 --> 01:04:54
additional noises coming from my mouth

01:04:49 --> 01:04:59
as helping helpful signals to to do that

01:04:53 --> 01:05:02
Hannah and then it will by itself come

01:04:58 --> 01:05:05
up with faster ways and more efficient

01:05:01 --> 01:05:09
ways of doing the same thing and finally

01:05:04 --> 01:05:12
I stopped his learning algorithm and

01:05:08 --> 01:05:14
make a million copies and sell it and so

01:05:11 --> 01:05:17
at the moment this is not possible but

01:05:13 --> 01:05:20
we already see how we are going to get

01:05:16 --> 01:05:22
here and you can imagine to the extent

01:05:19 --> 01:05:26
hat this works economically and cheaply

01:05:21 --> 01:05:29
it's going to change everything almost

01:05:25 --> 01:05:34
all our production is going to be

01:05:28 --> 01:05:37
affected by that and a much bigger wave

01:05:33 --> 01:05:38
much bigger ai wave is coming than the

01:05:36 --> 01:05:41
one that we are currently witnessing

01:05:37 --> 01:05:43
which is mostly about passive pattern

01:05:40 --> 01:05:45
recognition on your smartphone this is

01:05:42 --> 01:05:49
about active machines that shapes data

01:05:44 --> 01:05:54
Susy actions they are executing and they

01:05:48 --> 01:05:56
learn to do that in a good way so many

01:05:53 --> 01:05:59
of the traditional industries are going

01:05:55 --> 01:06:01
to be affected by that all the companies

01:05:58 --> 01:06:04
that are building machines

01:06:00 --> 01:06:08
well equip these machines with cameras

01:06:03 --> 01:06:11
and other sensors and they are going to

01:06:07 --> 01:06:13
learn to solve all kinds of problems

01:06:10 --> 01:06:16
through interaction with humans but also

01:06:12 --> 01:06:23
a lot on their own to improve what they

01:06:16 --> 01:06:25
already can do and lots of old economy

01:06:22 --> 01:06:27
is going to be affected by that and in

01:06:24 --> 01:06:29
recent years I have seen that all the

01:06:26 --> 01:06:33
conomy is actually waking up and

01:06:28 --> 01:06:35
realizing that those vacations and are

01:06:32 --> 01:06:37
you optimistic about the future are you

01:06:34 --> 01:06:40
concerned there's a lot of people

01:06:36 --> 01:06:44
concerned in the near term about the

01:06:39 --> 01:06:45
transformation of the nature of work the

01:06:43 --> 01:06:48
kind of ideas that you just suggested

01:06:44 --> 01:06:50
would have a significant impact of what

01:06:47 --> 01:06:53
kind of things could be automated are

01:06:49 --> 01:06:56
you optimistic about that future are you

01:06:52 --> 01:06:58
nervous about that future and looking a

01:06:55 --> 01:07:03
little bit farther into the future

01:06:57 --> 01:07:05
there's people like you la musk - a

01:07:02 --> 01:07:08
rustle concerned about the existential

01:07:04 --> 01:07:10
threats of that future so in the near

01:07:07 --> 01:07:12
term job loss in the long term

01:07:09 --> 01:07:17
existential threat are these concerns to

01:07:11 --> 01:07:24
you or yalta mele optimistic so let's

01:07:16 --> 01:07:28
first address the near future we have

01:07:23 --> 01:07:31
had predictions of job losses for many

01:07:27 --> 01:07:34
decades for example when industrial

01:07:30 --> 01:07:36
robots came along many people many

01:07:33 --> 01:07:41
people predicted and lots of jobs are

01:07:35 --> 01:07:45
going to get lost and in a sense say

01:07:40 --> 01:07:49
were right because back then there were

01:07:44 --> 01:07:52
car factories and hundreds of people and

01:07:48 --> 01:07:54
these factories assembled cars and today

01:07:51 --> 01:07:57
the same car factories have hundreds of

01:07:53 --> 01:08:02
robots and maybe three guys watching the

01:07:56 --> 01:08:05
robots on the other hand those countries

01:08:01 --> 01:08:08
that have lots of robots per capita

01:08:04 --> 01:08:10
Japan Korea and Germany Switzerland a

01:08:07 --> 01:08:14
couple of other countries

01:08:09 --> 01:08:17
they have really low unemployment rates

01:08:13 --> 01:08:21
omehow all kinds of new jobs were

01:08:16 --> 01:08:27
created back then nobody anticipated

01:08:20 --> 01:08:30
those jobs and decades ago I already

01:08:26 --> 01:08:33
said it's really easy to say which jobs

01:08:29 --> 01:08:37
are going to get lost but it's really

01:08:32 --> 01:08:39
hard to predict the new ones 30 years

01:08:36 --> 01:08:45
ago who would have predicted all these

01:08:38 --> 01:08:45
people making money as YouTube bloggers

01:08:45 --> 01:08:57
200 years ago 60% of all people used to

01:08:50 --> 01:09:02
work in agriculture today maybe 1% but

01:08:56 --> 01:09:05
still only I don't know 5% unemployment

01:09:01 --> 01:09:09
lots of new jobs were created and Homo

01:09:04 --> 01:09:12
Luden's the the playing man is inventing

01:09:08 --> 01:09:16
new jobs all the time most of these jobs

01:09:11 --> 01:09:20
are not existentially necessary for the

01:09:15 --> 01:09:23
survival of our species there are only

01:09:19 --> 01:09:26
very few existentially necessary jobs

01:09:22 --> 01:09:29
uch as farming and building houses and

01:09:25 --> 01:09:31
warming up the houses but less than

01:09:28 --> 01:09:34
10% of the population is doing that and

01:09:30 --> 01:09:38
most of these newly invented jobs are

01:09:33 --> 01:09:42
about interacting with other people in

01:09:37 --> 01:09:44
ew ways through new media and so on

01:09:41 --> 01:09:47
getting new high types of kudos and

01:09:43 --> 01:09:50
forms of likes and whatever and even

01:09:46 --> 01:09:53
making money through that so homo

01:09:49 --> 01:09:55
Luden's the playing man doesn't want to

01:09:52 --> 01:09:59
be unemployed and that's why he is

01:09:54 --> 01:10:02
inventing new jobs all the time and he

01:09:58 --> 01:10:04
keeps considering these jobs as really

01:10:01 --> 01:10:07
important and is investing a lot of

01:10:03 --> 01:10:08
energy and hours of work into into those

01:10:06 --> 01:10:12
and new jobs

01:10:07 --> 01:10:13
it's quite beautifully put were really

01:10:11 --> 01:10:14
nervous about the future because we

01:10:12 --> 01:10:17
can't predict what kind of new jobs

01:10:13 --> 01:10:21
would be created but your ultimate ly

01:10:16 --> 01:10:23
optimistic that we humans are so

01:10:20 --> 01:10:25
Restless that we create

01:10:22 --> 01:10:29
and give meaning to newer in your jobs

01:10:24 --> 01:10:31
telling you likes on faith things that

01:10:28 --> 01:10:33
get likes on Facebook or whatever the

01:10:30 --> 01:10:37
social platform is so what about

01:10:32 --> 01:10:41
long-term existential threat of AI where

01:10:36 --> 01:10:44
our whole civilization may be swallowed

01:10:40 --> 01:10:47
up by this ultra super intelligent

01:10:43 --> 01:10:53
systems maybe it's not going to be

01:10:46 --> 01:10:57
smaller DUP but I'd be surprised if B

01:10:52 --> 01:11:01
were B humans were the last step and the

01:10:56 --> 01:11:04
volution of the universe you you've

01:11:00 --> 01:11:06
actually at this beautiful comment

01:11:03 --> 01:11:11
somewhere that I've seen saying that

01:11:05 --> 01:11:13
artificial quite insightful artificial

01:11:10 --> 01:11:15
general intelligence systems just like

01:11:12 --> 01:11:17
us humans will likely not want to

01:11:14 --> 01:11:18
interact with humans

01:11:16 --> 01:11:21
they'll just interact amongst themselves

01:11:17 --> 01:11:24
just like ants interact amongst

01:11:20 --> 01:11:27
hemselves and only tangentially

01:11:23 --> 01:11:29
interact with humans hmm and it's quite

01:11:26 --> 01:11:32
an interesting idea that once we create

01:11:28 --> 01:11:34
a GI that will lose interest in humans

01:11:31 --> 01:11:36
and and have compete for their own

01:11:33 --> 01:11:40
Facebook Likes on their own social

01:11:35 --> 01:11:45
platforms so within that quite elegant

01:11:39 --> 01:11:48
idea how do we know in a hypothetical

01:11:44 --> 01:11:50
sense that there's not already

01:11:47 --> 01:11:52
intelligent systems out there how do you

01:11:49 --> 01:11:56
think broadly of general intelligence

01:11:51 --> 01:11:58
greater than us how do we know it's out

01:11:55 --> 01:12:03
here mmm how would we know it's around

01:11:57 --> 01:12:05
us and could it already be I'd be

01:12:02 --> 01:12:11
surprised even with within the next few

01:12:04 --> 01:12:13
decades or something like that we we

01:12:10 --> 01:12:14
won't have a eyes that truly smarts in

01:12:12 --> 01:12:16
every single way and better problem

01:12:13 --> 01:12:21
solvers and almost every single

01:12:15 --> 01:12:24
important way and I'd be surprised as

01:12:20 --> 01:12:27
they wouldn't realize what we have

01:12:23 --> 01:12:29
realized a long time ago which is that

01:12:26 --> 01:12:34
almost all physical resources are not

01:12:28 --> 01:12:39
here and this biosphere but for thou

01:12:33 --> 01:12:42
the rest of the solar system gets 2

01:12:38 --> 01:12:45
billion times more solar energy than our

01:12:41 --> 01:12:47
little planet there's lots of material

01:12:44 --> 01:12:50
out there that you can use to build

01:12:46 --> 01:12:53
robots and self-replicating robot

01:12:49 --> 01:12:54
factories and all this stuff and they

01:12:52 --> 01:12:58
are going to do that and there will be

01:12:53 --> 01:13:01
scientists and curious and they will

01:12:57 --> 01:13:04
explore what they can do and in the

01:13:00 --> 01:13:07
beginning they will be fascinated by

01:13:03 --> 01:13:09
life and by their own origins and our

01:13:06 --> 01:13:11
civilization they will want to

01:13:08 --> 01:13:13
understand that completely just like

01:13:10 --> 01:13:19
people today would like to understand

01:13:12 --> 01:13:22
how life works and um and also the

01:13:18 --> 01:13:24
history of our own existence and

01:13:21 --> 01:13:29
civilization and also on the physical

01:13:23 --> 01:13:30
aws that created all of that so they in

01:13:28 --> 01:13:33
the beginning they will be fascinated my

01:13:29 --> 01:13:37
life once they understand that I was

01:13:32 --> 01:13:41
interest like anybody who loses interest

01:13:36 --> 01:13:49
and things he understands and then as

01:13:40 --> 01:13:49
you said the most interesting sources

01:13:48 --> 01:13:55
information for them will be others of

01:13:51 --> 01:13:55
their own kind

01:13:57 --> 01:14:07
so at least in the long run there seems

01:14:02 --> 01:14:11
to be some sort of protection through

01:14:06 --> 01:14:11
lack of interest on the other side

01:14:12 --> 01:14:19
and now it seems also clear as far as we

01:14:15 --> 01:14:22
understand physics you need matter and

01:14:18 --> 01:14:25
energy to compute and to build more

01:14:21 --> 01:14:28
robots and infrastructure and more AI

01:14:24 --> 01:14:31
civilization and III ecology is

01:14:27 --> 01:14:33
consisting of trillions of different

01:14:30 --> 01:14:36
ypes of AIS and and so it seems

01:14:32 --> 01:14:40
inconceivable to me that this thing is

01:14:35 --> 01:14:42
not going to expand some AI ecology not

01:14:39 --> 01:14:44
controlled by one AI but one by

01:14:41 --> 01:14:47
trillions of different types of AI is

01:14:43 --> 01:14:50
competing and all kinds of quickly

01:14:46 --> 01:14:52
evolving and disappearing ecological

01:14:49 --> 01:14:55
niches in ways that we cannot fathom at

01:14:51 --> 01:14:58
he moment but it's going to expand

01:14:54 --> 01:15:01
limited by Lightspeed and physics it's

01:14:57 --> 01:15:04
going to expand and and now we realize

01:15:00 --> 01:15:06
that the universe is still young it's

01:15:03 --> 01:15:08
only 13.8 billion years old

01:15:05 --> 01:15:13
and it's going to be a thousand times

01:15:07 --> 01:15:17
older than that so there's plenty of

01:15:12 --> 01:15:21
time to conquer the entire universe and

01:15:16 --> 01:15:24
to fill it with intelligence and senders

01:15:20 --> 01:15:27
and receivers such that AI scan trouble

01:15:23 --> 01:15:30
the way they are traveling in our labs

01:15:26 --> 01:15:34
today which is by radio from sender to

01:15:29 --> 01:15:36
receiver and let's call the current age

01:15:33 --> 01:15:42
of the universe one Eon

01:15:35 --> 01:15:44
now it will take just a few eons

01:15:41 --> 01:15:47
from now and the entire visible universe

01:15:43 --> 01:15:50
is going to be full of that stuff and

01:15:46 --> 01:15:51
let's look ahead to a time when the

01:15:49 --> 01:15:54
universe is going to be one thousand

01:15:50 --> 01:15:56
times older than it is now they will

01:15:53 --> 01:15:57
ook back and they will say look almost

01:15:55 --> 01:16:01
immediately after the Big Bang

01:15:56 --> 01:16:03
only a few eons later the entire

01:16:00 --> 01:16:07
universe started to become intelligent

01:16:02 --> 01:16:10
now to your question how do we see

01:16:06 --> 01:16:11
whether anything like that has already

01:16:09 --> 01:16:14
happened or is already in a more

01:16:10 --> 01:16:17
advanced stage in some other part of the

01:16:13 --> 01:16:19
universe of the visible universe we are

01:16:16 --> 01:16:22
trying to look out there and nothing

01:16:18 --> 01:16:22
like that has happened so far or is that

01:16:21 --> 01:16:25
her

01:16:21 --> 01:16:26
do you think we'll recognize it or

01:16:24 --> 01:16:29
how do we know it's not among us how do

01:16:25 --> 01:16:34
we know planets aren't in themselves

01:16:28 --> 01:16:38
intelligent beings how do we know ants

01:16:33 --> 01:16:41
een as a collective are not much

01:16:37 --> 01:16:44
greater intelligence in our own these

01:16:40 --> 01:16:46
kinds of ideas no but it was a boy I was

01:16:43 --> 01:16:48
thinking about these things and I

01:16:45 --> 01:16:51
thought hmm maybe it has already

01:16:47 --> 01:16:54
happened because back then I know I knew

01:16:50 --> 01:16:57
I learned from popular physics books

01:16:53 --> 01:16:59
that the structure the large-scale

01:16:56 --> 01:17:02
structure of the universe is not

01:16:58 --> 01:17:05
homogeneous and you have these clusters

01:17:01 --> 01:17:09
of galaxies and then in between there

01:17:04 --> 01:17:12
are these huge empty spaces and I

01:17:08 --> 01:17:14
thought hmm maybe they aren't really

01:17:11 --> 01:17:17
empty it's just that in the middle of

01:17:13 --> 01:17:20
that some AI civilization already has

01:17:16 --> 01:17:23
expanded and then has covered a bottle

01:17:19 --> 01:17:26
of a billion light-years diameter and is

01:17:22 --> 01:17:28
using all the energy of all the stars

01:17:25 --> 01:17:31
within that bubble for its own

01:17:27 --> 01:17:34
unfathomable purposes and so it always

01:17:30 --> 01:17:38
happened and we just failed to interpret

01:17:33 --> 01:17:41
he signs but then alarmed effect

01:17:37 --> 01:17:42
gravity by itself explains the

01:17:40 --> 01:17:44
large-scale structure of the universe

01:17:41 --> 01:17:48
and that this is not a convincing

01:17:43 --> 01:17:53
explanation and then I thought maybe

01:17:47 --> 01:17:57
it's the dark matter because as

01:17:52 --> 01:18:01
far as we know today 80% of the

01:17:56 --> 01:18:04
measurable matter is invisible and we

01:18:00 --> 01:18:07
know that because otherwise our galaxy

01:18:03 --> 01:18:11
or other galaxies would fall apart they

01:18:06 --> 01:18:15
would they are rotating too quickly and

01:18:10 --> 01:18:18
then the idea was maybe all us he is AI

01:18:14 --> 01:18:23
civilizations and hourly out there they

01:18:17 --> 01:18:25
just invisible because they are

01:18:22 --> 01:18:27
ally efficient in using the energies

01:18:24 --> 01:18:31
at their own local systems and that's

01:18:26 --> 01:18:32
why they appear dark to us but this is

01:18:30 --> 01:18:36
awesome at a convincing explanation

01:18:31 --> 01:18:38
because then the question becomes why is

01:18:35 --> 01:18:41
there

01:18:37 --> 01:18:44
are there still any visible stars left

01:18:40 --> 01:18:46
in our own galaxy which also must have a

01:18:43 --> 01:18:51
lot of dark matter so that is also not a

01:18:45 --> 01:18:54
convincing thing and today I like to

01:18:50 --> 01:18:56
think it's quite plausible that maybe

01:18:53 --> 01:19:04
are the first at least in our local

01:18:55 --> 01:19:06
ight cone within a few hundreds of

01:19:03 --> 01:19:11
millions of light years that we can

01:19:05 --> 01:19:15
reliably observe is there exciting to

01:19:10 --> 01:19:16
you it will might be the first and it

01:19:14 --> 01:19:19
would make us much more important

01:19:15 --> 01:19:25
because if we mess it up through a

01:19:18 --> 01:19:28
nuclear war then then maybe this will

01:19:24 --> 01:19:32
have an effect on the on the on the

01:19:27 --> 01:19:34
development on of the entire universe so

01:19:31 --> 01:19:36
let's not mess it up let's not mess it

01:19:33 --> 01:19:38
up Union thank you so much for talking

01:19:35 --> 01:19:40
today I really appreciate it it's my

01:19:37 --> 01:19:40
pleasure

01:19:44 --> 01:19:47
you

<!-- YOUTUBE_TRANSCRIPT_END -->
