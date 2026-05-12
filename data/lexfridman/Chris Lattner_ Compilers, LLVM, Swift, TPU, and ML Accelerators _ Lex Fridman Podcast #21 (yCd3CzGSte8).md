---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "yCd3CzGSte8"
title: "Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators | Lex Fridman Podcast #21"
video_url: "https://www.youtube.com/watch?v=yCd3CzGSte8"
thumbnail_url: "https://i.ytimg.com/vi/yCd3CzGSte8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=yCd3CzGSte8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-05-13T16:05:42.000Z"
upload_date: "2019-05-13"
duration_seconds: 4386
duration_human: "1:13:06"
view_count: 195414
like_count: 4907
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:11:09.749Z"
---

# Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators | Lex Fridman Podcast #21

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=yCd3CzGSte8
- video_id: yCd3CzGSte8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-05-13T16:05:42.000Z
- upload_date: 2019-05-13
- duration: 1:13:06
- view_count: 195414
- like_count: 4907
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

00:00:01 --> 00:00:07
Chris flattener currently he's a senior

00:00:04 --> 00:00:09
director of Google working on several

00:00:06 --> 00:00:11
projects including CPU GPU TPU

00:00:08 --> 00:00:13
accelerators for tensorflow

00:00:10 --> 00:00:15
swift for tensorflow and all kinds of

00:00:12 --> 00:00:18
machine learning compiler magic going on

00:00:14 --> 00:00:19
behind the scenes he's one of the top

00:00:17 --> 00:00:22
experts in the world on compiler

00:00:18 --> 00:00:24
technologies which means he deeply

00:00:21 --> 00:00:27
understands the intricacies of how

00:00:23 --> 00:00:29
hardware and software come together to

00:00:26 --> 00:00:32
create efficient code he created the

00:00:28 --> 00:00:35
LLVM compiler infrastructure project and

00:00:31 --> 00:00:37
the clang compiler he led major

00:00:34 --> 00:00:38
engineering efforts at Apple including

00:00:36 --> 00:00:42
the creation of the Swift programming

00:00:37 --> 00:00:44
language he also briefly spent time at

00:00:41 --> 00:00:46
Tesla as vice president of auto pilot

00:00:43 --> 00:00:49
software during the transition from

00:00:45 --> 00:00:51
autopilot Hardware 1 to hardware 2 when

00:00:48 --> 00:00:53
Tesla essentially started from scratch

00:00:50 --> 00:00:56
to build an in-house software

00:00:52 --> 00:00:57
infrastructure for autopilot I could

00:00:55 --> 00:01:00
have easily talked to Chris for many

00:00:56 --> 00:01:02
more hours compiling code down across

00:00:59 --> 00:01:05
the levels abstraction is one of the

00:01:01 --> 00:01:07
most fundamental and fascinating aspects

00:01:04 --> 00:01:09
of what computers do and he is one of

00:01:06 --> 00:01:11
the world experts in this process it's

00:01:08 --> 00:01:15
rigorous science and it's messy

00:01:10 --> 00:01:17
beautiful art this conversation is part

00:01:14 --> 00:01:19
of the artificial intelligence podcast

00:01:16 --> 00:01:21
if you enjoy it subscribe on youtube

00:01:18 --> 00:01:24
itunes or simply connect with me on

00:01:20 --> 00:01:28
twitter at Lex Friedman spelled Fri D

00:01:23 --> 00:01:32
and now here's my conversation with

00:01:27 --> 00:01:35
Chris Ladner what was the first program

00:01:31 --> 00:01:37
you've ever written my first program

00:01:34 --> 00:01:40
back and when was it I think I started

00:01:36 --> 00:01:43
as a kid and my parents got a basic

00:01:39 --> 00:01:45
programming book and so when I started

00:01:42 --> 00:01:48
it was typing out programs from a book

00:01:44 --> 00:01:50
and seeing how they worked and then

00:01:47 --> 00:01:51
typing them in wrong and trying to

00:01:49 --> 00:01:54
figure out why they were not working

00:01:51 --> 00:01:56
right that kind of stuff so basic what

00:01:53 --> 00:01:59
was the first language that you remember

00:01:55 --> 00:02:01
yourself maybe falling in love with like

00:01:58 --> 00:02:02
really connecting with I don't know I

00:02:00 --> 00:02:04
mean I feel like I've learned a lot

00:02:01 --> 00:02:07
along the way and each of them have a

00:02:03 --> 00:02:09
different special thing about them so I

00:02:06 --> 00:02:11
started in basic and then went like

00:02:08 --> 00:02:13
gw-basic which was the thing back in the

00:02:10 --> 00:02:15
DOS days and then

00:02:12 --> 00:02:18
upgrade to QBasic and eventually quick

00:02:14 --> 00:02:20
basic which are all slightly more fancy

00:02:17 --> 00:02:23
versions of Microsoft basic made the

00:02:19 --> 00:02:25
jump to Pascal and start doing machine

00:02:22 --> 00:02:26
language programming and assembly in

00:02:24 --> 00:02:28
Pasco which was really cool through

00:02:25 --> 00:02:32
Pascal was amazing for its day

00:02:27 --> 00:02:34
eventually going to C C++ and then kind

00:02:31 --> 00:02:36
of did lots of other weird things I feel

00:02:33 --> 00:02:40
ike you took the dark path which is the

00:02:35 --> 00:02:42
you could you could have gone Lisp yeah

00:02:39 --> 00:02:45
you've got a higher-level sort of

00:02:41 --> 00:02:47
unctional philosophical hippy route

00:02:44 --> 00:02:50
instead you went into like the dark arts

00:02:46 --> 00:02:53
of the straight straight in the machine

00:02:49 --> 00:02:55
straight to toys so started with basic

00:02:52 --> 00:02:58
task element assembly and then wrote a

00:02:54 --> 00:03:00
lot of assembly and why eventually I

00:02:57 --> 00:03:01
eventually did small talk and other

00:02:59 --> 00:03:04
things like that but that was not the

00:03:00 --> 00:03:06
starting point but so what

00:03:03 --> 00:03:08
is this journey to see is that in

00:03:05 --> 00:03:12
high school is that in college that was

00:03:07 --> 00:03:15
in high school yeah so and then that was

00:03:11 --> 00:03:17
it was really about trying to be able to

00:03:14 --> 00:03:18
do more powerful things than what Pascal

00:03:16 --> 00:03:21
could do and also to learn a different

00:03:17 --> 00:03:22
world so he was really confusing me with

00:03:20 --> 00:03:26
pointers and the syntax and everything

00:03:21 --> 00:03:30
and it took a while but Pascal is much

00:03:25 --> 00:03:34
more principled in various ways sees

00:03:29 --> 00:03:36
more I mean it has its historical roots

00:03:33 --> 00:03:39
but it's it's not as easy to learn with

00:03:35 --> 00:03:42
pointers there's this memory management

00:03:38 --> 00:03:44
hing that you have to become conscious

00:03:41 --> 00:03:46
of is that the first time you start to

00:03:43 --> 00:03:47
understand that there's resources that

00:03:45 --> 00:03:49
you're supposed to manage well so you

00:03:46 --> 00:03:52
have that in Pascal as well but in

00:03:48 --> 00:03:53
Pascal these like the carrot instead of

00:03:51 --> 00:03:54
the star and there's some small

00:03:52 --> 00:03:57
differences like that but it's not about

00:03:54 --> 00:03:59
pointer arithmetic and and and see it

00:03:56 --> 00:04:02
you end up thinking about how things get

00:03:58 --> 00:04:04
laid out in memory a lot more and so in

00:04:01 --> 00:04:06
Pascal you have allocating and

00:04:03 --> 00:04:08
eallocating and owning the the memory

00:04:05 --> 00:04:11
but just the programs are simpler and

00:04:07 --> 00:04:14
you don't have to well for example

00:04:10 --> 00:04:15
Pascal has a string type and so you can

00:04:13 --> 00:04:17
think about a string instead of an array

00:04:14 --> 00:04:19
of characters which are consecutive in

00:04:16 --> 00:04:23
memory so it's a little bit of a higher

00:04:18 --> 00:04:25
level abstraction so let's get into it

00:04:22 --> 00:04:26
let's talk about LLVM si Lang and

00:04:24 --> 00:04:29
compilers

00:04:25 --> 00:04:33
ure so can you tell me first what I

00:04:28 --> 00:04:35
love the a messy laying our and how is

00:04:32 --> 00:04:37
it that you find yourself the creator

00:04:34 --> 00:04:40
and lead developer one of the most

00:04:36 --> 00:04:43
powerful compiler optimization systems

00:04:39 --> 00:04:46
than used today sure so I guess they're

00:04:42 --> 00:04:47
different things so let's start with

00:04:45 --> 00:04:49
what is a compiler

00:04:46 --> 00:04:51
it's a is that a good place to start

00:04:48 --> 00:04:53
what are the phases of a compiler where

00:04:50 --> 00:04:55
the parts yeah what is it so what does

00:04:52 --> 00:04:57
even a compiler are used for so the way

00:04:54 --> 00:04:59
I look at this is you have a two

00:04:56 --> 00:05:01
sided problem of you have humans that

00:04:58 --> 00:05:03
need to write code and then you have

00:05:00 --> 00:05:05
machines that need to run the program

00:05:02 --> 00:05:06
that the human wrote and for lots of

00:05:04 --> 00:05:08
reasons the humans don't want to be

00:05:05 --> 00:05:10
writing in binary and want to think

00:05:07 --> 00:05:12
about every piece of hardware and so at

00:05:09 --> 00:05:14
he same time that you have lots of

00:05:11 --> 00:05:17
humans you also have lots of kinds of

00:05:13 --> 00:05:19
hardware and so compilers are the art of

00:05:16 --> 00:05:20
allowing humans to think of the level of

00:05:18 --> 00:05:23
abstraction that they want to think

00:05:19 --> 00:05:25
about and then get that program get the

00:05:22 --> 00:05:28
thing that they wrote to run on a

00:05:24 --> 00:05:30
specific piece of hardware and the

00:05:27 --> 00:05:31
interesting and exciting part of all

00:05:29 --> 00:05:33
this is that there's now lots of

00:05:30 --> 00:05:36
different kinds of hardware chips like

00:05:32 --> 00:05:37
x86 and PowerPC and arm and things like

00:05:35 --> 00:05:39
that but also high-performance

00:05:36 --> 00:05:40
accelerators for machine learning and

00:05:38 --> 00:05:42
other things like that or also just

00:05:39 --> 00:05:44
different kinds of hardware GPUs these

00:05:41 --> 00:05:46
are new kinds of hardware and at the

00:05:43 --> 00:05:48
same time on the programming side of it

00:05:45 --> 00:05:51
you have your basic UFC you have

00:05:47 --> 00:05:53
JavaScript you have Python you so if you

00:05:50 --> 00:05:55
have like lots of other languages that

00:05:52 --> 00:05:56
are all trying to talk to the human in a

00:05:54 --> 00:05:59
different way to make them more

00:05:55 --> 00:06:02
xpressive and capable and powerful and

00:05:58 --> 00:06:05
so compilers are the thing that goes

00:06:01 --> 00:06:07
from one to the other no and then from

00:06:04 --> 00:06:09
the very beginning end to end and so you

00:06:06 --> 00:06:11
go from what the human wrote and

00:06:08 --> 00:06:14
programming languages end up being about

00:06:10 --> 00:06:17
expressing intent not just for the

00:06:13 --> 00:06:19
compiler and the hardware but the

00:06:16 --> 00:06:22
programming languages job is really to

00:06:18 --> 00:06:24
capture an expression of what the

00:06:21 --> 00:06:26
programmer wanted that then can be

00:06:23 --> 00:06:28
maintained and adapted and evolved by

00:06:25 --> 00:06:31
other humans as well as by the

00:06:27 --> 00:06:33
interpreter by the compiler so so when

00:06:30 --> 00:06:35
you look at this problem you have on one

00:06:32 --> 00:06:37
hand humans which are complicated and

00:06:34 --> 00:06:39
you have hardware which is complicated

00:06:36 --> 00:06:42
until compilers typically work in

00:06:38 --> 00:06:44
multiple phases and so the software

00:06:41 --> 00:06:46
ngineering challenge that you have here

00:06:43 --> 00:06:47
is try to get maximum reuse out of the

00:06:45 --> 00:06:49
amount of code that you write

00:06:46 --> 00:06:51
because this these compilers are very

00:06:48 --> 00:06:53
complicated and so the way it typically

00:06:50 --> 00:06:55
works out is that you have something

00:06:52 --> 00:06:58
called a front-end or a parser that is

00:06:54 --> 00:07:01
language specific and so you'll have a C

00:06:57 --> 00:07:04
parser and that's what clang is or C++

00:07:01 --> 00:07:06
or JavaScript or Python or whatever

00:07:03 --> 00:07:09
that's the front-end then you'll have a

00:07:05 --> 00:07:12
middle part which is often the optimizer

00:07:08 --> 00:07:15
and then you'll have a late part which

00:07:11 --> 00:07:17
is hardware specific and so compilers

00:07:14 --> 00:07:19
end up there's many different layers

00:07:16 --> 00:07:22
often but these three big groups are

00:07:18 --> 00:07:24
very common in compilers and what LLVM

00:07:21 --> 00:07:27
is trying to do is trying to standardize

00:07:23 --> 00:07:29
that middle and last part and so one of

00:07:26 --> 00:07:30
the cool things about LLVM is that there

00:07:28 --> 00:07:33
are a lot of different languages that

00:07:29 --> 00:07:38
compile through to it and so things like

00:07:32 --> 00:07:40
swift but also julia rust clang for C

00:07:37 --> 00:07:42
++ objective-c like these are all very

00:07:39 --> 00:07:44
different languages and they can all use

00:07:41 --> 00:07:46
the same optimization infrastructure

00:07:43 --> 00:07:48
which gets better performance and the

00:07:45 --> 00:07:51
same code generation for structure for

00:07:47 --> 00:07:53
hardware support and so LVM is really

00:07:50 --> 00:07:55
that that layer that is common that all

00:07:52 --> 00:07:59
these different specific compilers can

00:07:54 --> 00:08:01
use and is that is it a standard like a

00:07:58 --> 00:08:02
specification or is it literally an

00:08:00 --> 00:08:06
implementation it's an implementation

00:08:01 --> 00:08:07
and so it's I think there's a couple

00:08:05 --> 00:08:09
different ways of looking at write

00:08:06 --> 00:08:10
because it depends on what which angle

00:08:08 --> 00:08:13
you're looking at it from

00:08:09 --> 00:08:14
LVM ends up being a bunch of code okay

00:08:12 --> 00:08:17
so it's a bunch of code that people

00:08:13 --> 00:08:18
reuse and they build compilers with we

00:08:16 --> 00:08:20
call it a compiler infrastructure

00:08:17 --> 00:08:21
because it's kind of the underlying

00:08:19 --> 00:08:23
platform that you build a concrete

00:08:20 --> 00:08:26
compiler on top of but it's also a

00:08:22 --> 00:08:28
community and the LVM community is

00:08:25 --> 00:08:30
hundreds of people that all collaborate

00:08:27 --> 00:08:33
and one of the most fascinating things

00:08:29 --> 00:08:35
about LVM over the course of time is

00:08:32 --> 00:08:38
that we've managed somehow to

00:08:34 --> 00:08:40
successfully get harsh competitors in

00:08:37 --> 00:08:42
the commercial space to collaborate on

00:08:39 --> 00:08:46
shared infrastructure and so you have

00:08:41 --> 00:08:48
Google and Apple you have AMD and Intel

00:08:45 --> 00:08:51
you've Nvidia and

00:08:47 --> 00:08:53
on the graphics side you have prey and

00:08:50 --> 00:08:55
everybody else doing these things and

00:08:52 --> 00:08:57
like all these companies are

00:08:54 --> 00:08:58
collaborating together to make that

00:08:56 --> 00:09:01
shared infrastructure really really

00:08:57 --> 00:09:02
great and they do this not other

00:09:00 --> 00:09:04
businesses or heart but they do it

00:09:01 --> 00:09:05
because it's in their commercial

00:09:03 --> 00:09:06
interests of having really great

00:09:04 --> 00:09:09
infrastructure that they can build on

00:09:05 --> 00:09:11
top of and facing the reality that it's

00:09:08 --> 00:09:13
o expensive that no one company even

00:09:10 --> 00:09:15
the big companies no one company really

00:09:12 --> 00:09:18
wants to implement it all themselves

00:09:14 --> 00:09:20
expensive or difficult both that's a

00:09:17 --> 00:09:24
great point because it's also about the

00:09:19 --> 00:09:27
skill sets right and these the skill

00:09:23 --> 00:09:30
sets are very hard hard to find how big

00:09:26 --> 00:09:32
is the LLVM it always seems like with

00:09:29 --> 00:09:35
open-source projects the kind you know

00:09:31 --> 00:09:37
LLVM open source yes it's open source

00:09:34 --> 00:09:41
it's about it's 19 years old now so it's

00:09:36 --> 00:09:43
fairly old it seems like the magic often

00:09:40 --> 00:09:45
happens within a very small circle of

00:09:42 --> 00:09:48
people yes I'd like at least the early

00:09:44 --> 00:09:51
birth and whatever yes so the LVM came

00:09:47 --> 00:09:53
from a university project and so I was

00:09:50 --> 00:09:55
at the University of Illinois and there

00:09:52 --> 00:09:58
it was myself my advisor and then a team

00:09:54 --> 00:10:00
of two or three research students in the

00:09:57 --> 00:10:03
research group and we built many of the

00:09:59 --> 00:10:06
core pieces initially I then graduated

00:10:02 --> 00:10:08
went to Apple and Apple brought it to

00:10:05 --> 00:10:11
the products first in the OpenGL

00:10:07 --> 00:10:13
graphics stack but eventually to the C

00:10:10 --> 00:10:14
compiler realm and eventually built

00:10:12 --> 00:10:16
clang and eventually built Swift in

00:10:13 --> 00:10:18
these things along the way building a

00:10:15 --> 00:10:20
team of people that are really amazing

00:10:17 --> 00:10:22
compiler engineers that helped build a

00:10:19 --> 00:10:24
lot of that and so as it was gaining

00:10:21 --> 00:10:26
momentum and as Apple was using it being

00:10:23 --> 00:10:28
open source in public and encouraging

00:10:25 --> 00:10:30
contribution many others for example at

00:10:27 --> 00:10:33
Google came in and started contributing

00:10:29 --> 00:10:35
and some cases Google effectively owns

00:10:32 --> 00:10:37
clang now because it cares so much about

00:10:34 --> 00:10:40
C++ and the evolution of that that

00:10:36 --> 00:10:43
ecosystem and so it's a vesting a lot in

00:10:39 --> 00:10:43
the C++ world and the tooling and things

00:10:42 --> 00:10:48
like that

00:10:42 --> 00:10:51
and so likewise Nvidia cares a lot about

00:10:47 --> 00:10:57
CUDA and so CUDA uses clang and uses LVM

00:10:50 --> 00:10:59
for for graphics and GPGPU and so when

00:10:56 --> 00:11:00
you first started as a master's project

00:10:58 --> 00:11:02
I guess

00:10:59 --> 00:11:03
did you think is gonna go as far as it

00:11:01 --> 00:11:07
went

00:11:02 --> 00:11:08
were you uh crazy ambitious about it no

00:11:06 --> 00:11:11
seems like a really difficult

00:11:07 --> 00:11:13
undertaking a brave one yeah no it was

00:11:10 --> 00:11:14
nothing like that so I mean my goal when

00:11:12 --> 00:11:16
I went to University of Illinois was to

00:11:13 --> 00:11:19
get in and out with the non thesis

00:11:15 --> 00:11:22
masters in a year and get back to work

00:11:18 --> 00:11:24
so I was not I was not planning to stay

00:11:21 --> 00:11:27
for five years and and build this

00:11:23 --> 00:11:29
massive infrastructure I got nerd sniped

00:11:26 --> 00:11:31
into staying and a lot of it was because

00:11:28 --> 00:11:34
Elvin was fun I was building cool stuff

00:11:30 --> 00:11:37
than learning really interesting things

00:11:33 --> 00:11:38
and facing will suffer engineering

00:11:36 --> 00:11:41
challenges but also learning how to work

00:11:37 --> 00:11:43
in a team and things like that I had

00:11:40 --> 00:11:45
worked at many companies as interns

00:11:42 --> 00:11:47
before that but it was really a

00:11:44 --> 00:11:48
different a different thing to have a

00:11:46 --> 00:11:50
team of people that were working

00:11:47 --> 00:11:52
together and try and collaborate in

00:11:49 --> 00:11:54
version control and it was it was just a

00:11:51 --> 00:11:55
little bit different like I said I just

00:11:53 --> 00:11:57
alked to Don Knuth and he believes that

00:11:54 --> 00:11:59
2% of the world population have

00:11:56 --> 00:12:01
something weird with their brain that

00:11:58 --> 00:12:03
hey're geeks they understand computers

00:12:00 --> 00:12:07
to connect with computer he put it

00:12:02 --> 00:12:10
exactly 2 percent okay so this specific

00:12:06 --> 00:12:12
guy is very specific he says I can't

00:12:09 --> 00:12:15
prove it but it's very empirical II

00:12:11 --> 00:12:17
there is there something that attracts

00:12:14 --> 00:12:19
you to the idea of optimizing code and

00:12:16 --> 00:12:22
he seems like that's one of the biggest

00:12:18 --> 00:12:24
coolest things about oh yeah that's one

00:12:21 --> 00:12:27
of the major things it does so I got

00:12:23 --> 00:12:29
into that because of a person actually

00:12:26 --> 00:12:32
so when I was in my undergraduate I had

00:12:28 --> 00:12:35
an advisor or a professor named Steve

00:12:31 --> 00:12:37
Bechtel and he I went to this little

00:12:34 --> 00:12:39
tiny private school we there were like

00:12:36 --> 00:12:43
seven or nine people in my computer

00:12:38 --> 00:12:47
science department students in my in my

00:12:42 --> 00:12:49
class so it was a very tiny very very

00:12:46 --> 00:12:51
small school it was a kind of a wart on

00:12:48 --> 00:12:53
the side of the math department kind of

00:12:50 --> 00:12:55
a thing at the time I think it's evolved

00:12:52 --> 00:12:58
a lot in the many years since then but

00:12:54 --> 00:13:02
Steve egg Dahl was a compiler guy

00:12:57 --> 00:13:04
and he was super passionate and he his

00:13:01 --> 00:13:06
passion rubbed off on me and one of the

00:13:03 --> 00:13:08
things I like about compilers is that

00:13:05 --> 00:13:13
hey're large complicated software

00:13:07 --> 00:13:13
pieces and so one of the culminating

00:13:12 --> 00:13:15
classes

00:13:12 --> 00:13:16
is that many computer science

00:13:14 --> 00:13:18
departments at least at the time did was

00:13:15 --> 00:13:20
to say that you take algorithms and data

00:13:17 --> 00:13:22
structures in all these core classes but

00:13:19 --> 00:13:24
hen the compilers class was one of the

00:13:21 --> 00:13:26
last classes you take because it pulls

00:13:23 --> 00:13:28
everything together and then you work on

00:13:25 --> 00:13:32
e piece of code over the entire

00:13:27 --> 00:13:33
semester and and so you keep building on

00:13:31 --> 00:13:35
your own work which is really

00:13:32 --> 00:13:37
interesting it's also very challenging

00:13:34 --> 00:13:39
because in many classes if you don't get

00:13:36 --> 00:13:40
a project done you just forget about it

00:13:38 --> 00:13:42
and move on to the next one and get your

00:13:39 --> 00:13:44
you know your B or whatever it is but

00:13:41 --> 00:13:46
here you have to live with the decisions

00:13:43 --> 00:13:50
you make and continue to reinvest in it

00:13:45 --> 00:13:52
and I really like that and and so I did

00:13:49 --> 00:13:54
a extra study project within the

00:13:51 --> 00:13:56
following semester and he was just

00:13:53 --> 00:13:59
really great and he was also a great

00:13:55 --> 00:14:01
mentor in a lot of ways and so from from

00:13:58 --> 00:14:02
him and from his advice he encouraged me

00:14:00 --> 00:14:04
to go to graduate school I wasn't super

00:14:01 --> 00:14:07
excited about going grad school I wanted

00:14:03 --> 00:14:10
the master's degree but I didn't want to

00:14:06 --> 00:14:12
be in academic and but like I said I

00:14:09 --> 00:14:14
kind of got tricked into saying and was

00:14:11 --> 00:14:16
having a lot of fun and I definitely do

00:14:13 --> 00:14:19
not regret it what aspects of compilers

00:14:15 --> 00:14:23
were the things you connected with so

00:14:18 --> 00:14:25
LVM there's also the other part this is

00:14:22 --> 00:14:27
really interesting if you're interested

00:14:24 --> 00:14:30
in languages is parsing and you know

00:14:26 --> 00:14:31
just analyzing like yeah analyzing

00:14:29 --> 00:14:33
language breaking it out parsing so on

00:14:30 --> 00:14:35
was that interesting to you were you

00:14:32 --> 00:14:38
more engine optimization for me it was

00:14:34 --> 00:14:40
more so I'm I'm not really a math person

00:14:37 --> 00:14:43
I can do math I understand some bits of

00:14:39 --> 00:14:45
it when I get into it but math is never

00:14:42 --> 00:14:47
the thing that that attracted me and so

00:14:44 --> 00:14:49
a lot of the parser part of the compiler

00:14:46 --> 00:14:51
has a lot of good formal theories that

00:14:48 --> 00:14:55
dawn for example knows quite well still

00:14:50 --> 00:14:57
waiting for his book on that but but the

00:14:54 --> 00:14:59
but I just like building a thing and and

00:14:56 --> 00:15:01
seeing what it could do and exploring

00:14:58 --> 00:15:03
and getting it to do more things and

00:15:00 --> 00:15:06
then setting new goals and reaching for

00:15:02 --> 00:15:08
them and and with in the case of

00:15:05 --> 00:15:11
component in the case of LVM when I

00:15:07 --> 00:15:13
start work on that my research advisor

00:15:10 --> 00:15:16
that I was working for was a compiler

00:15:12 --> 00:15:17
guy and so he and I specifically found

00:15:15 --> 00:15:18
each other because we're both interested

00:15:16 --> 00:15:20
in compilers and so I started working

00:15:17 --> 00:15:22
with them and taking his class and a lot

00:15:19 --> 00:15:24
of LLVM initially was it's fun

00:15:21 --> 00:15:26
implementing all the standard algorithms

00:15:23 --> 00:15:27
and all the all the things that pea

00:15:25 --> 00:15:29
have been talking about and were

00:15:26 --> 00:15:31
well-known and they were in the the

00:15:28 --> 00:15:33
curricula for Advanced Studies and

00:15:30 --> 00:15:36
compilers and so just being able to

00:15:32 --> 00:15:38
build that was really fun and I was

00:15:35 --> 00:15:40
learning a lot by instead of reading

00:15:37 --> 00:15:40
about it just building and so I enjoyed

00:15:39 --> 00:15:43
that

00:15:39 --> 00:15:46
so he said compositor these complicated

00:15:42 --> 00:15:49
systems can you even just with language

00:15:45 --> 00:15:53
tried to describe you know how you turn

00:15:48 --> 00:15:55
a C++ program yes into code like what

00:15:52 --> 00:15:57
are the hard parts why is this hard so

00:15:54 --> 00:16:01
I'll give you examples of the hard parts

00:15:56 --> 00:16:02
Illinois so C++ is a very complicated

00:16:00 --> 00:16:05
programming way which is something like

00:16:01 --> 00:16:08
1400 pages in the spec so people as

00:16:04 --> 00:16:10
possible as crazy complicated paas what

00:16:07 --> 00:16:14
makes a language complicated in terms of

00:16:09 --> 00:16:16
what's syntactically like us so it's

00:16:13 --> 00:16:18
what they call syntax so the actual how

00:16:15 --> 00:16:21
the character is arranged yes it's also

00:16:17 --> 00:16:23
semantics how it behaves it's also in

00:16:20 --> 00:16:25
the case of C++ there's a huge amount of

00:16:22 --> 00:16:28
history C was supposed to build on top

00:16:24 --> 00:16:30
of C you play that forward and then a

00:16:27 --> 00:16:31
bunch of suboptimal in some cases

00:16:29 --> 00:16:34
decisions were made and they compound

00:16:30 --> 00:16:36
and then more and more and more things

00:16:33 --> 00:16:38
keep getting added to C++ and it will

00:16:35 --> 00:16:40
probably never stop but the language is

00:16:37 --> 00:16:41
very complicated from that perspective

00:16:39 --> 00:16:43
and so the interactions between

00:16:40 --> 00:16:46
subsystems is very complicated there's

00:16:42 --> 00:16:47
just a lot there and when you talk about

00:16:45 --> 00:16:49
he front end one of the major

00:16:46 --> 00:16:52
challenges which clang as a project the

00:16:48 --> 00:16:54
C C++ compiler that I built I and

00:16:51 --> 00:16:59
many people built one of the challenges

00:16:53 --> 00:17:01
we took on was we looked at GCC ok GCC

00:16:58 --> 00:17:04
at the time was like a really good

00:17:00 --> 00:17:06
industry standardized compiler that had

00:17:03 --> 00:17:08
really consolidated a lot of the other

00:17:05 --> 00:17:10
compilers in the world and was was a

00:17:07 --> 00:17:12
standard but it wasn't really great for

00:17:09 --> 00:17:15
esearch the design was very difficult

00:17:11 --> 00:17:17
o work with and it was full of global

00:17:14 --> 00:17:19
variables and other other things that

00:17:16 --> 00:17:20
made it very difficult to reuse in ways

00:17:18 --> 00:17:22
that it wasn't originally designed for

00:17:19 --> 00:17:25
and so with claying one of the things

00:17:21 --> 00:17:26
what we wanted to do is push forward on

00:17:24 --> 00:17:28
better user interface so make error

00:17:25 --> 00:17:30
messages that are just better than GCC's

00:17:27 --> 00:17:31
and that that's actually hard because

00:17:29 --> 00:17:33
you have to do a lot of bookkeeping in

00:17:30 --> 00:17:34
an efficient way

00:17:32 --> 00:17:36
today I'll do that we want to make

00:17:33 --> 00:17:38
compile-time better and so compile-time

00:17:35 --> 00:17:39
is about making it efficient which is

00:17:37 --> 00:17:42
also really hard when you're keeping

00:17:38 --> 00:17:45
track of extra information we wanted to

00:17:41 --> 00:17:47
make new tools available so refactoring

00:17:44 --> 00:17:50
tools and other analysis tools the the

00:17:46 --> 00:17:53
GCC never supported also leveraging the

00:17:49 --> 00:17:55
xtra information we kept but enabling

00:17:52 --> 00:17:57
those new classes the tools that then

00:17:54 --> 00:17:59
get built into IDs and so that's been

00:17:56 --> 00:18:02
one of the one of the areas that clang

00:17:58 --> 00:18:04
has really helped push the world forward

00:18:01 --> 00:18:07
in the tooling for C and C++ and things

00:18:03 --> 00:18:09
like that but C++ and the front-end

00:18:06 --> 00:18:10
piece is complicated and you have to

00:18:08 --> 00:18:12
build syntax trees and you have to check

00:18:09 --> 00:18:15
every rule in the spec and you have to

00:18:11 --> 00:18:16
turn that back into an error message to

00:18:14 --> 00:18:17
the humor humor that the human can

00:18:15 --> 00:18:20
understand when they do something wrong

00:18:16 --> 00:18:23
but then you start doing the what's

00:18:19 --> 00:18:24
called lowering so going from C++ in the

00:18:22 --> 00:18:26
way that it represents code down to the

00:18:23 --> 00:18:29
machine and when you do that there's

00:18:25 --> 00:18:32
many different phases you go through

00:18:28 --> 00:18:35
often there are I think LLVM something

00:18:31 --> 00:18:37
like 150 different what are called

00:18:34 --> 00:18:40
passes in the compiler that the code

00:18:36 --> 00:18:42
passed passes through and these get

00:18:39 --> 00:18:45
organized in very complicated ways which

00:18:41 --> 00:18:46
affect the generated code in performance

00:18:44 --> 00:18:48
and compile time and many of the things

00:18:45 --> 00:18:53
what are they passing through so after

00:18:47 --> 00:18:55
you do the clang parsing what's what's

00:18:52 --> 00:18:58
the graph what does it look like what's

00:18:54 --> 00:19:00
the data structure here yeah so in in

00:18:57 --> 00:19:02
the parser it's usually a tree and it's

00:18:59 --> 00:19:05
called an abstract syntax tree and so

00:19:01 --> 00:19:07
the idea is you you have a node for the

00:19:04 --> 00:19:09
plus that the human wrote in their code

00:19:06 --> 00:19:11
or the function call you'll have a node

00:19:08 --> 00:19:12
for call with the function that they

00:19:10 --> 00:19:17
call and the arguments they pass things

00:19:12 --> 00:19:18
like that this then gets lowered into

00:19:16 --> 00:19:20
what's called an intermediate

00:19:17 --> 00:19:22
representation and intermediate

00:19:19 --> 00:19:26
representations are like LVM has one and

00:19:21 --> 00:19:29
there it's a it's what's called a

00:19:25 --> 00:19:32
control flow graph and so you represent

00:19:28 --> 00:19:34
each operation in the program as a very

00:19:31 --> 00:19:36
simple like this is gonna add two

00:19:33 --> 00:19:38
numbers this is gonna multiply two

00:19:35 --> 00:19:40
things maybe we'll do a call but then

00:19:37 --> 00:19:43
they get put in what are called blocks

00:19:39 --> 00:19:45
and so you get blocks of these straight

00:19:42 --> 00:19:47
line operations or instead of being

00:19:44 --> 00:19:47
nested like in a tree it's straight line

00:19:46 --> 00:19:49
operation

00:19:46 --> 00:19:51
and so there's a sequence and ordering

00:19:48 --> 00:19:53
to these operations and then in the

00:19:50 --> 00:19:54
block we're outside the block that's

00:19:52 --> 00:19:56
within the block and so it's a straight

00:19:53 --> 00:19:58
line sequence of operations within the

00:19:55 --> 00:20:00
block and then you have branches like

00:19:57 --> 00:20:04
conditional branches between blocks and

00:19:59 --> 00:20:07
so when you write a loop for example in

00:20:03 --> 00:20:09
a syntax tree you would have a four node

00:20:06 --> 00:20:11
like for a for statement and I see like

00:20:08 --> 00:20:13
language you'd out a four node and you

00:20:10 --> 00:20:15
have a pointer to the expression for the

00:20:12 --> 00:20:16
initializer a pointer to the expression

00:20:14 --> 00:20:18
for the increment a pointer to the

00:20:15 --> 00:20:20
xpression for the comparison a pointer

00:20:17 --> 00:20:22
to the body okay and these are all

00:20:19 --> 00:20:25
nested underneath it in a control flow

00:20:21 --> 00:20:27
graph you get a block for the code that

00:20:24 --> 00:20:30
runs before the loop so the initializer

00:20:26 --> 00:20:33
code then you have a block for the body

00:20:29 --> 00:20:35
of the loop and so the the body of the

00:20:32 --> 00:20:36
loop code goes in there but also they

00:20:34 --> 00:20:37
increment and other things like that and

00:20:35 --> 00:20:40
then you have a branch that goes back to

00:20:36 --> 00:20:42
the top and a comparison and branch that

00:20:39 --> 00:20:45
goes out and so it's more of a assembly

00:20:41 --> 00:20:46
level kind of representation but the

00:20:44 --> 00:20:47
nice thing about this level of

00:20:45 --> 00:20:50
representation is it's much more

00:20:46 --> 00:20:53
language independent and so there's lots

00:20:49 --> 00:20:56
of different kinds of languages with

00:20:52 --> 00:20:57
different kinds of you know JavaScript

00:20:55 --> 00:21:00
has a lot of different ideas of what is

00:20:56 --> 00:21:02
false for example and all that can stay

00:20:59 --> 00:21:05
in the front end but then that middle

00:21:01 --> 00:21:07
part can be shared across all those how

00:21:04 --> 00:21:10
close is that intermediate

00:21:06 --> 00:21:13
representation to ten yuan that works

00:21:09 --> 00:21:16
for example is they are they because

00:21:12 --> 00:21:17
verything described as a kind of neural

00:21:15 --> 00:21:19
network graph right yeah that's all we

00:21:16 --> 00:21:22
need a neighbor's or what they're

00:21:18 --> 00:21:23
quite different in details but

00:21:21 --> 00:21:25
hey're very similar and idea so one of

00:21:22 --> 00:21:27
the things that normal networks do is

00:21:24 --> 00:21:30
they learn representations for data at

00:21:26 --> 00:21:32
different levels of abstraction right

00:21:29 --> 00:21:35
and then they transform those through

00:21:31 --> 00:21:37
layers right so the compiler does very

00:21:34 --> 00:21:39
similar things but one of the things the

00:21:36 --> 00:21:42
compiler does is it has relatively few

00:21:38 --> 00:21:43
different representations or a neural

00:21:41 --> 00:21:44
network often as you get deeper for

00:21:42 --> 00:21:47
example you get many different

00:21:43 --> 00:21:49
representations in each you know layer

00:21:46 --> 00:21:51
or set of ops is transforming between

00:21:48 --> 00:21:53
these different representations and

00:21:50 --> 00:21:54
compiler often you get one

00:21:52 --> 00:21:56
representation and they do many

00:21:53 --> 00:21:58
transformations to it and these

00:21:55 --> 00:22:00
transformations are often applied

00:21:57 --> 00:22:03
iteratively

00:21:59 --> 00:22:04
and for programmers there's familiar

00:22:02 --> 00:22:07
types of things for example trying to

00:22:03 --> 00:22:08
find expressions inside of a loop and

00:22:06 --> 00:22:10
pulling them out of a loop so if they

00:22:07 --> 00:22:14
execute four times or a fine

00:22:09 --> 00:22:16
redundant computation or find constant

00:22:13 --> 00:22:19
folding or other simplifications turning

00:22:15 --> 00:22:21
you know 2 times X into X shift left by

00:22:18 --> 00:22:23
one and and things like this or all all

00:22:20 --> 00:22:25
the examples of the things that

00:22:22 --> 00:22:28
happen but compilers end up getting a

00:22:24 --> 00:22:29
lot of theorem proving and other kinds

00:22:27 --> 00:22:30
of algorithms that try to find

00:22:28 --> 00:22:32
higher-level properties of the program

00:22:29 --> 00:22:36
that then can be used by the optimizer

00:22:31 --> 00:22:39
cool so what's like the biggest bang for

00:22:35 --> 00:22:40
the buck with optimization what's there

00:22:38 --> 00:22:42
yeah

00:22:39 --> 00:22:44
well no not even today at the very

00:22:41 --> 00:22:45
beginning the 80s I don't know but yeah

00:22:43 --> 00:22:48
so for the 80s a lot of it was things

00:22:44 --> 00:22:51
like register allocation so the idea of

00:22:47 --> 00:22:52
in in a modern like a microprocessor

00:22:50 --> 00:22:55
what you'll end up having is you're

00:22:51 --> 00:22:57
having memory which is relatively slow

00:22:54 --> 00:22:59
and then you have registers relatively

00:22:56 --> 00:23:02
fast but registers you don't have very

00:22:58 --> 00:23:03
many of them ok and so when you're

00:23:01 --> 00:23:05
writing a bunch of code you're just

00:23:02 --> 00:23:06
saying like compute this put it in

00:23:04 --> 00:23:08
temporary variable compute those compute

00:23:05 --> 00:23:09
this compute this put in temporary well

00:23:07 --> 00:23:10
I have a loop I have some other stuff

00:23:08 --> 00:23:12
going on

00:23:09 --> 00:23:15
well now you're running on an x86 like a

00:23:11 --> 00:23:18
desktop PC or something well it only has

00:23:14 --> 00:23:21
in some cases some modes eight registers

00:23:17 --> 00:23:23
right and so now the compiler has to

00:23:20 --> 00:23:24
choose what values get put in what

00:23:22 --> 00:23:27
registers at what points in the program

00:23:23 --> 00:23:29
and this is actually a really big deal

00:23:26 --> 00:23:30
so if you think about you have a loop

00:23:28 --> 00:23:33
and then an inner loop to execute

00:23:29 --> 00:23:34
millions of times maybe if you're doing

00:23:32 --> 00:23:36
loads and stores inside that loop then

00:23:33 --> 00:23:38
it's gonna be really slow but if you can

00:23:35 --> 00:23:40
somehow fit all the values inside that

00:23:37 --> 00:23:43
loop and registers now it's really fast

00:23:39 --> 00:23:45
and so getting that right requires a lot

00:23:42 --> 00:23:47
of work because there's many different

00:23:44 --> 00:23:48
ways to do that and often what the

00:23:46 --> 00:23:50
compiler ends up doing is it ends up

00:23:47 --> 00:23:52
thinking about things in a different

00:23:49 --> 00:23:54
representation than what the human wrote

00:23:51 --> 00:23:56
all right you wrote into X well the

00:23:53 --> 00:23:58
compiler thinks about that as four

00:23:55 --> 00:24:00
different values each which have

00:23:57 --> 00:24:02
different lifetimes across the function

00:23:59 --> 00:24:04
that it's in and each of those could be

00:24:01 --> 00:24:06
put in a register or memory or different

00:24:03 --> 00:24:09
memory or maybe in some parts of the

00:24:05 --> 00:24:10
code recomputed instead of stored and

00:24:08 --> 00:24:11
reloaded and there are many of these

00:24:09 --> 00:24:14
different kinds of techniques that can

00:24:10 --> 00:24:17
be used so it's adding almost like a

00:24:13 --> 00:24:19
time-dimension - it's trying to trying

00:24:16 --> 00:24:21
to optimize across time so considering

00:24:18 --> 00:24:23
when when you're programming you're not

00:24:20 --> 00:24:27
hinking and yeah absolutely

00:24:22 --> 00:24:31
and so the the RISC era made thing this

00:24:26 --> 00:24:34
o so RISC chips Ras see the the risks

00:24:30 --> 00:24:36
risk chips as opposed to sisk chips the

00:24:33 --> 00:24:40
risk chips made things more complicated

00:24:35 --> 00:24:42
for the compiler because what they ended

00:24:39 --> 00:24:44
up doing is ending up adding pipelines

00:24:41 --> 00:24:46
to the processor where the processor can

00:24:43 --> 00:24:47
do more than one thing at a time but

00:24:45 --> 00:24:49
his means that the order of operations

00:24:46 --> 00:24:50
matters a lot and so one of the

00:24:48 --> 00:24:54
classical compiler techniques that you

00:24:49 --> 00:24:55
se is called scheduling and so moving

00:24:53 --> 00:24:57
the instructions around so that the

00:24:54 --> 00:24:59
processor can act like keep its

00:24:56 --> 00:25:01
pipelines full instead of stalling and

00:24:58 --> 00:25:03
getting blocked and so there's a lot of

00:25:00 --> 00:25:04
things like that that are kind of bread

00:25:02 --> 00:25:06
and butter a compiler techniques have

00:25:03 --> 00:25:08
been studied a lot over the course of

00:25:05 --> 00:25:10
decades now but the engineering side of

00:25:07 --> 00:25:13
making them real is also still quite

00:25:09 --> 00:25:14
hard and you talk about machine learning

00:25:12 --> 00:25:16
this is this is a huge opportunity for

00:25:13 --> 00:25:18
machine learning because many of these

00:25:15 --> 00:25:20
algorithms are full of these like hokey

00:25:17 --> 00:25:22
hand-rolled heuristics which work well

00:25:19 --> 00:25:25
on specific benchmarks we don't

00:25:21 --> 00:25:27
generalize and full of magic numbers and

00:25:24 --> 00:25:29
you know I hear there's some techniques

00:25:26 --> 00:25:31
that are good at handling that so what

00:25:28 --> 00:25:34
would be the if you were to apply

00:25:30 --> 00:25:35
machine learning to this what's the

00:25:33 --> 00:25:40
thing you try to optimize is it

00:25:34 --> 00:25:41
ultimately the running time you can pick

00:25:39 --> 00:25:44
your metric and there's there's running

00:25:40 --> 00:25:45
time there's memory use there's there's

00:25:43 --> 00:25:47
lots of different things that you can

00:25:44 --> 00:25:48
optimize for code code size is another

00:25:46 --> 00:25:51
one that some people care about in the

00:25:47 --> 00:25:53
mbedded space is this like the thinking

00:25:50 --> 00:25:57
into the future or somebody actually

00:25:52 --> 00:26:00
been crazy enough to try to have machine

00:25:56 --> 00:26:02
learning based parameter tuning for

00:25:59 --> 00:26:04
optimization of compilers so this is

00:26:01 --> 00:26:07
omething that is I would say research

00:26:03 --> 00:26:08
right now there are a lot of research

00:26:06 --> 00:26:11
systems that have been applying search

00:26:07 --> 00:26:12
in various forums and using

00:26:10 --> 00:26:14
reinforcement learning is one form but

00:26:11 --> 00:26:16
also brute force search has been tried

00:26:13 --> 00:26:19
for a quite a while and usually these

00:26:15 --> 00:26:22
are in small small problem spaces so

00:26:18 --> 00:26:24
find the optimal way to code generate a

00:26:21 --> 00:26:26
matrix multiply for a GPU write

00:26:23 --> 00:26:27
something like that where we say there

00:26:25 --> 00:26:31
's a lot of

00:26:26 --> 00:26:32
design space of do you unroll uppsala do

00:26:30 --> 00:26:35
you execute multiple things in parallel

00:26:31 --> 00:26:37
and there's many different confounding

00:26:34 --> 00:26:39
factors here because graphics cards have

00:26:36 --> 00:26:41
different numbers of threads and

00:26:38 --> 00:26:43
registers and execution ports and memory

00:26:40 --> 00:26:45
bandwidth and many different constraints

00:26:42 --> 00:26:49
to interact in nonlinear ways and so

00:26:44 --> 00:26:51
search is very powerful for that and it

00:26:48 --> 00:26:52
gets used in in certain ways but it's

00:26:50 --> 00:26:54
not very structured this is something

00:26:51 --> 00:26:59
that we need we as an industry need to

00:26:53 --> 00:27:00
fix these set ATS but like so have there

00:26:58 --> 00:27:04
been like big jumps and improvement and

00:26:59 --> 00:27:07
optimization yeah yeah yes since then

00:27:03 --> 00:27:10
what's yeah so so it's largely been

00:27:06 --> 00:27:13
driven by hardware so hartwell hardware

00:27:09 --> 00:27:15
and software so in the mid-90s Java

00:27:12 --> 00:27:18
totally changed the world right and and

00:27:14 --> 00:27:20
I'm still amazed by how much change was

00:27:17 --> 00:27:22
introduced by the way or in a good way

00:27:19 --> 00:27:24
so like reflecting back Java introduced

00:27:21 --> 00:27:25
things like it all at once introduced

00:27:23 --> 00:27:28
things like JIT compilation

00:27:24 --> 00:27:29
one of these were novel but it pulled

00:27:27 --> 00:27:31
it together and made it mainstream and

00:27:28 --> 00:27:34
made people invest in it JIT

00:27:30 --> 00:27:37
compilation garbage collection portable

00:27:33 --> 00:27:42
code safe code say like memory safe code

00:27:36 --> 00:27:43
like a very dynamic dispatch execution

00:27:41 --> 00:27:45
model like many of these things which

00:27:42 --> 00:27:46
ad been done in research systems and

00:27:44 --> 00:27:48
had been done in small ways and various

00:27:46 --> 00:27:50
places really came to the forefront

00:27:47 --> 00:27:52
really changed how things worked and

00:27:49 --> 00:27:54
therefore changed the way people thought

00:27:51 --> 00:27:58
about the problem javascript was another

00:27:53 --> 00:28:01
major world change based on the way it

00:27:57 --> 00:28:04
works but also on the hardware side of

00:28:00 --> 00:28:08
things multi-core and vector

00:28:03 --> 00:28:11
instructions really change the problem

00:28:07 --> 00:28:12
space and are very they don't remove any

00:28:10 --> 00:28:14
of the problems that composers faced in

00:28:11 --> 00:28:17
the past but they they add new kinds of

00:28:13 --> 00:28:21
problems of how do you find enough work

00:28:16 --> 00:28:22
to keep a four-wide vector busy right or

00:28:20 --> 00:28:25
if you're doing a matrix multiplication

00:28:21 --> 00:28:27
how do you do different columns out of

00:28:24 --> 00:28:29
that matrix in at the same time and how

00:28:26 --> 00:28:32
do you maximally utilize the the

00:28:28 --> 00:28:33
arithmetic compute that one core has and

00:28:31 --> 00:28:35
then how do you take it to multiple

00:28:32 --> 00:28:37
cores and how did the whole virtual

00:28:34 --> 00:28:40
machine thing change the compilation

00:28:36 --> 00:28:41
pipeline yeah so so what what the java

00:28:39 --> 00:28:44
virtual machine does

00:28:40 --> 00:28:46
is it splits just like I've talked about

00:28:43 --> 00:28:47
before where you have a front-end that

00:28:45 --> 00:28:49
parses the code and then you have an

00:28:46 --> 00:28:51
intermediate representation that gets

00:28:48 --> 00:28:53
transformed what Java did was they said

00:28:50 --> 00:28:55
we will parse the code and then compile

00:28:52 --> 00:28:58
to what's known as Java bytecode and

00:28:54 --> 00:29:00
that bytecode is now a portable code

00:28:57 --> 00:29:02
representation that is industry-standard

00:28:59 --> 00:29:05
and locked down and can't change and

00:29:01 --> 00:29:07
then the the back part of the compiler

00:29:04 --> 00:29:09
the the does optimization and code

00:29:06 --> 00:29:12
generation can now be built by different

00:29:08 --> 00:29:14
vendors okay and Java bytecode can be

00:29:11 --> 00:29:17
shipped around across the wire its

00:29:13 --> 00:29:19
memory safe and relatively trusted and

00:29:16 --> 00:29:20
because of that it can run in the

00:29:18 --> 00:29:22
browser and that's why it runs in the

00:29:19 --> 00:29:24
browser yeah right and so that way you

00:29:21 --> 00:29:26
can be in you know again back in the day

00:29:23 --> 00:29:28
ou would write a Java applet and you

00:29:25 --> 00:29:31
se as a little as a web developer you'd

00:29:27 --> 00:29:34
build this mini app that run a web page

00:29:30 --> 00:29:35
well a user of that is running a web

00:29:33 --> 00:29:37
rowser on their computer you download

00:29:34 --> 00:29:40
that that Java bytecode which can be

00:29:36 --> 00:29:42
trusted and then you do all the compiler

00:29:39 --> 00:29:43
stuff on your machine so that you know

00:29:41 --> 00:29:45
that you trust that that was that a good

00:29:42 --> 00:29:47
idea a bad idea it's great idea I mean

00:29:44 --> 00:29:49
it's great idea for certain problems and

00:29:46 --> 00:29:51
I'm very much believe for the

00:29:48 --> 00:29:54
technologies itself neither good nor bad

00:29:50 --> 00:29:56
it's how you apply it you know this

00:29:53 --> 00:29:58
would be a very very bad thing for very

00:29:55 --> 00:30:00
low levels of the software stack but but

00:29:57 --> 00:30:01
in terms of solving some of these

00:29:59 --> 00:30:04
software portability and transparency

00:30:00 --> 00:30:06
our portability problems I think it's

00:30:03 --> 00:30:08
been really good now Java ultimately

00:30:05 --> 00:30:11
didn't win out on the desktop and like

00:30:07 --> 00:30:13
there are good reasons for that but it's

00:30:10 --> 00:30:14
been very successful on servers and in

00:30:12 --> 00:30:20
many places it's been a very successful

00:30:13 --> 00:30:25
thing over over decades so what has been

00:30:19 --> 00:30:29
ll VMs and ceilings improvements in

00:30:24 --> 00:30:31
optimization that throughout its history

00:30:28 --> 00:30:33
what are some moments we get set back

00:30:30 --> 00:30:35
I'm really proud of what's been

00:30:32 --> 00:30:37
accomplished yeah I think that the

00:30:34 --> 00:30:41
interesting thing about LLVM is not the

00:30:36 --> 00:30:43
innovations in compiler research it has

00:30:40 --> 00:30:48
very good implementations of various

00:30:42 --> 00:30:49
important algorithms no doubt and and a

00:30:47 --> 00:30:50
lot of really smart people have worked

00:30:48 --> 00:30:52
on it but I think that the thing was

00:30:49 --> 00:30:54
most profound about LLVM is that through

00:30:51 --> 00:30:55
standardization it made things possible

00:30:53 --> 00:30:56
too

00:30:54 --> 00:30:59
therwise wouldn't have happened okay

00:30:55 --> 00:31:01
and so interesting things that have

00:30:58 --> 00:31:03
happened with LVM for example sony has

00:31:00 --> 00:31:05
picked up lv m and used it to do all the

00:31:02 --> 00:31:07
graphics compilation in their movie

00:31:04 --> 00:31:08
production pipeline and so now they're

00:31:06 --> 00:31:11
able to have better special effects

00:31:07 --> 00:31:13
because of LVN that's kind of cool

00:31:10 --> 00:31:15
that's not what it was designed for

00:31:12 --> 00:31:18
ight but that's that's the sign of good

00:31:14 --> 00:31:20
infrastructure when it can be used in

00:31:17 --> 00:31:21
ways it was never designed for because

00:31:19 --> 00:31:23
it has good layering and software

00:31:20 --> 00:31:25
ngineering and it's composable and

00:31:22 --> 00:31:28
things like that just where as you said

00:31:24 --> 00:31:29
it differs from GCC yes GCC is also

00:31:27 --> 00:31:32
great in various ways but it's not as

00:31:28 --> 00:31:35
good as a infrastructure technology it's

00:31:31 --> 00:31:37
you know it's really a C compiler

00:31:34 --> 00:31:39
or it's or it's a fortunate compiler

00:31:36 --> 00:31:41
it's not it's not infrastructure in the

00:31:38 --> 00:31:42
same way is it now you can tell I don't

00:31:40 --> 00:31:45
know what I'm talking about because I'm

00:31:41 --> 00:31:48
sick eep saying si Lang you can you

00:31:44 --> 00:31:50
could always tell when a person is close

00:31:47 --> 00:31:52
by the way pronounce something I'm I

00:31:49 --> 00:31:55
don't think have I ever used Clank

00:31:51 --> 00:31:58
entirely possible have you well so

00:31:54 --> 00:32:02
you've used code it's generated probably

00:31:57 --> 00:32:04
so clang is an Alabama used to compile

00:32:01 --> 00:32:07
all the apps on the iPhone effectively

00:32:03 --> 00:32:11
and the OS is it compiles Google's

00:32:06 --> 00:32:14
production server applications let's use

00:32:10 --> 00:32:17
to build my GameCube games and

00:32:13 --> 00:32:20
PlayStation 4 and things like that I was

00:32:16 --> 00:32:22
a user I have but just everything I've

00:32:19 --> 00:32:24
done that I experienced for Linux has

00:32:21 --> 00:32:27
been I believe always GCC yeah I think

00:32:23 --> 00:32:30
Linux still defaults to GCC and is there

00:32:26 --> 00:32:31
a reason for that there's a big it's a

00:32:29 --> 00:32:35
combination of technical and social

00:32:30 --> 00:32:39
reasons many GC likes developers do you

00:32:34 --> 00:32:40
do use clang but the distributions for

00:32:38 --> 00:32:43
lots of reasons

00:32:39 --> 00:32:46
use GCC historically and they've not

00:32:42 --> 00:32:49
switched yeah that and it's just

00:32:45 --> 00:32:51
anecdotally online it seems that LLVM

00:32:48 --> 00:32:53
has either reached the level GCC or

00:32:50 --> 00:32:55
superseded on different features or

00:32:52 --> 00:32:56
whatever the way I would say it is that

00:32:54 --> 00:32:58
here was there so close it doesn't

00:32:55 --> 00:32:59
matter yeah exactly like there's a

00:32:57 --> 00:33:01
slightly better in some way slightly

00:32:58 --> 00:33:02
worse than otherwise but it doesn't

00:33:00 --> 00:33:05
actually really matter anymore

00:33:01 --> 00:33:09
that level so in terms of optimization

00:33:04 --> 00:33:10
breakthroughs it's just been solid

00:33:08 --> 00:33:12
incremental work yeah yeah

00:33:09 --> 00:33:13
which which is which describes a lot of

00:33:11 --> 00:33:16
compilers there are the hard thing about

00:33:12 --> 00:33:18
compilers in my experience is the

00:33:15 --> 00:33:20
ngineering the software engineering

00:33:17 --> 00:33:22
making it so that you can have hundreds

00:33:19 --> 00:33:25
of people collaborating on really

00:33:21 --> 00:33:29
detailed low-level work and scaling that

00:33:24 --> 00:33:30
and that's that's really hard and that's

00:33:28 --> 00:33:34
one of the things I think Alabama's done

00:33:29 --> 00:33:35
well and that kind of goes back to the

00:33:33 --> 00:33:37
original design goals with it to be

00:33:34 --> 00:33:39
modular and things like that and

00:33:36 --> 00:33:40
incidentally I don't want to take all

00:33:38 --> 00:33:43
the credit for this right I mean some of

00:33:39 --> 00:33:45
the the best parts about LLVM is that it

00:33:42 --> 00:33:46
was designed to be modular and when I

00:33:44 --> 00:33:48
started I would write for example a

00:33:45 --> 00:33:50
register allocator and then some a much

00:33:47 --> 00:33:51
smarter than me would come in and pull

00:33:49 --> 00:33:53
it out and replace it with something

00:33:50 --> 00:33:55
else that they would come up with and

00:33:52 --> 00:33:57
because it's modular they were able to

00:33:54 --> 00:34:00
do that and that's one of the challenges

00:33:56 --> 00:34:02
with what GCC for example is replacing

00:33:59 --> 00:34:04
subsystems is incredibly difficult it

00:34:01 --> 00:34:06
can be done but it wasn't designed for

00:34:03 --> 00:34:07
that and that's one of the reasons the

00:34:05 --> 00:34:10
LVM has been very successful in the

00:34:06 --> 00:34:13
research world as well but in the in the

00:34:09 --> 00:34:19
community sense Widow van rossum right

00:34:12 --> 00:34:21
from Python just retired from what is it

00:34:18 --> 00:34:24
benevolent dictator for life right so in

00:34:20 --> 00:34:27
managing this community of brilliant

00:34:23 --> 00:34:30
compiler folks is there that did it at

00:34:26 --> 00:34:33
for a time at least following you to

00:34:29 --> 00:34:36
approve things oh yeah so I mean I still

00:34:32 --> 00:34:39
have something like an order of

00:34:35 --> 00:34:42
magnitude more patches in LVM than

00:34:38 --> 00:34:45
ybody else and many of those I wrote

00:34:41 --> 00:34:49
myself but he's still right I mean you

00:34:44 --> 00:34:50
still he's still close to the two though

00:34:48 --> 00:34:52
I don't know what the expression is to

00:34:49 --> 00:34:54
the metal you still write code yes

00:34:51 --> 00:34:56
alright good not as much as I was able

00:34:53 --> 00:34:58
to in grad school but that's important

00:34:55 --> 00:35:00
part of my identity but the way the LLVM

00:34:57 --> 00:35:02
has worked over time is that when I was

00:34:59 --> 00:35:04
a grad student I could do all the work

00:35:01 --> 00:35:06
and steer everything and review every

00:35:03 --> 00:35:09
patch and make sure everything was done

00:35:05 --> 00:35:12
xactly the way my opinionated sense

00:35:08 --> 00:35:14
felt like it should be done and that was

00:35:11 --> 00:35:16
fine but I think scale you can't do that

00:35:13 --> 00:35:18
right and so what ends

00:35:15 --> 00:35:20
happening as LVM has a hierarchical

00:35:17 --> 00:35:23
system of what's called code owners

00:35:19 --> 00:35:25
these code owners are given the

00:35:22 --> 00:35:27
responsibility not to do all the work

00:35:24 --> 00:35:28
not necessarily to review all the

00:35:26 --> 00:35:30
patches but to make sure that the

00:35:27 --> 00:35:31
patches do get reviewed and make sure

00:35:29 --> 00:35:33
that the right things happening

00:35:30 --> 00:35:37
architectural e in their area and so

00:35:32 --> 00:35:38
what you'll see is you'll see that for

00:35:36 --> 00:35:41
example hardware manufacturers end up

00:35:37 --> 00:35:44
owning the the the hardware specific

00:35:40 --> 00:35:47
parts of their their their hardware

00:35:43 --> 00:35:48
that's very common leaders in the

00:35:46 --> 00:35:50
community that have done really good

00:35:47 --> 00:35:53
work naturally become the de facto owner

00:35:49 --> 00:35:55
of something and then usually somebody

00:35:52 --> 00:35:58
else's like how about we make them the

00:35:54 --> 00:35:59
official code owner and then and then

00:35:57 --> 00:36:00
we'll have somebody to make sure the

00:35:58 --> 00:36:02
whole patch does get reviewed in a

00:35:59 --> 00:36:03
timely manner and then everybody's like

00:36:01 --> 00:36:05
yes that's obvious and then it happens

00:36:02 --> 00:36:07
right and usually this is a very organic

00:36:04 --> 00:36:09
thing which is great and so I'm

00:36:06 --> 00:36:11
nominally the top of that stack still

00:36:08 --> 00:36:14
but I don't spend a lot of time

00:36:10 --> 00:36:17
reviewing patches what I do is I help

00:36:13 --> 00:36:18
negotiate a lot of the the technical

00:36:16 --> 00:36:20
disagreements that end up happening and

00:36:17 --> 00:36:22
making sure that the community as a

00:36:19 --> 00:36:24
whole makes progress and is moving in

00:36:21 --> 00:36:28
the right direction and and doing that

00:36:23 --> 00:36:30
so we also started a non-profit and six

00:36:27 --> 00:36:33
years ago seven years ago it's times

00:36:29 --> 00:36:35
gone away and the nonprofit the the LVM

00:36:32 --> 00:36:37
foundation nonprofit helps oversee all

00:36:34 --> 00:36:39
the business sides of things and make

00:36:36 --> 00:36:41
sure that the events that the Elven

00:36:38 --> 00:36:43
community has are funded and set up and

00:36:40 --> 00:36:45
run correctly and stuff like that

00:36:42 --> 00:36:48
but the foundation is very much stays

00:36:44 --> 00:36:50
out of the technical side of where where

00:36:47 --> 00:36:54
the project was going right sounds like

00:36:49 --> 00:36:55
a lot of it is just organic just yeah

00:36:53 --> 00:36:57
well and this is Alabama is almost

00:36:54 --> 00:36:58
wenty years old which is hard to

00:36:56 --> 00:37:01
believe somebody point out to me

00:36:57 --> 00:37:06
recently that LVM is now older than GCC

00:37:00 --> 00:37:08
was when Olivia started right so time

00:37:05 --> 00:37:10
has a way of getting away from you but

00:37:07 --> 00:37:11
he good thing about that is it has a

00:37:09 --> 00:37:13
really robust

00:37:10 --> 00:37:15
really amazing community of people that

00:37:12 --> 00:37:17
are in their professional lives spread

00:37:14 --> 00:37:20
across lots of different companies but

00:37:16 --> 00:37:21
it's a it's a community of people that

00:37:19 --> 00:37:23
are interested in similar kinds of

00:37:20 --> 00:37:26
problems and have been working together

00:37:22 --> 00:37:27
effectively for years and have a lot of

00:37:25 --> 00:37:29
trust and respect for each other and

00:37:26 --> 00:37:30
even if they don't always agree that you

00:37:28 --> 00:37:33
know we're

00:37:29 --> 00:37:35
we'll find a path forward so then in a

00:37:32 --> 00:37:38
slightly different flavor of effort you

00:37:34 --> 00:37:42
started at Apple in 2005 with the task

00:37:37 --> 00:37:45
of making I guess LLVM production ready

00:37:41 --> 00:37:47
and then eventually 2013 through 2017

00:37:44 --> 00:37:50
leading the entire developer tools

00:37:46 --> 00:37:56
department we were talking about LLVM

00:37:49 --> 00:37:59
Xcode Objective C to Swift so in a quick

00:37:55 --> 00:38:01
overview of your time there what were

00:37:58 --> 00:38:04
the challenges first of all leading such

00:38:00 --> 00:38:07
a huge group of developers what was the

00:38:03 --> 00:38:12
big motivator dream mission behind

00:38:06 --> 00:38:14
creating Swift the early birth of it's

00:38:11 --> 00:38:16
from objective-c and so on and Xcode

00:38:13 --> 00:38:19
well yeah so these are different

00:38:15 --> 00:38:21
questions yeah I know what about the

00:38:18 --> 00:38:22
other stuff I'll stay I'll stay on the

00:38:20 --> 00:38:24
technical side then we could talk about

00:38:21 --> 00:38:27
he big team pieces yeah that's okay

00:38:23 --> 00:38:31
sure so he has to really oversimplify

00:38:26 --> 00:38:33
many years of hard work via most started

00:38:30 --> 00:38:35
joined Apple became a thing we became

00:38:32 --> 00:38:38
successful and became deployed but then

00:38:34 --> 00:38:40
there was a question about how how do we

00:38:37 --> 00:38:42
actually purse the source code so LVM is

00:38:39 --> 00:38:44
that back part the optimizer and the

00:38:41 --> 00:38:46
code generator and Alvin was really good

00:38:43 --> 00:38:47
for Apple as it went through a couple of

00:38:45 --> 00:38:49
hundred transitions I joined right at

00:38:46 --> 00:38:53
he time of the Intel transition for

00:38:48 --> 00:38:54
example and 64-bit transitions and then

00:38:52 --> 00:38:56
the transition to almost the iPhone and

00:38:53 --> 00:38:58
so LVM was very useful for some of these

00:38:55 --> 00:38:59
kinds of things but at the same time

00:38:57 --> 00:39:01
there's a lot of questions around

00:38:58 --> 00:39:03
eveloper experience and so if you're a

00:39:00 --> 00:39:06
programmer pounding out at the time of

00:39:02 --> 00:39:07
objective-c code the error message you

00:39:05 --> 00:39:10
get the compile time the turnaround

00:39:06 --> 00:39:13
cycle the the tooling and the IDE were

00:39:09 --> 00:39:18
not great we're not as good as it could

00:39:12 --> 00:39:20
be and so you know as as I occasionally

00:39:17 --> 00:39:22
do I'm like well okay how hard is it to

00:39:19 --> 00:39:23
write a C compiler and so I I'm not

00:39:21 --> 00:39:25
gonna commit to anybody I'm not gonna

00:39:22 --> 00:39:27
tell anybody I'm just gonna just do it

00:39:24 --> 00:39:30
on nice and weekends and start working

00:39:26 --> 00:39:31
on it and then you know I built up in C

00:39:29 --> 00:39:34
there's a thing called the preprocessor

00:39:30 --> 00:39:36
which people don't like but it's

00:39:33 --> 00:39:38
actually really hard and complicated and

00:39:35 --> 00:39:39
includes a bunch of really weird things

00:39:37 --> 00:39:41
like try graphs and other stuff like

00:39:38 --> 00:39:44
that that are they're really nasty and

00:39:40 --> 00:39:46
it's the crux of a bunch of the perform

00:39:43 --> 00:39:48
issues in the compiler and I'm started

00:39:45 --> 00:39:49
working on the parser and kind of got to

00:39:47 --> 00:39:50
the point where I'm like ah you know

00:39:48 --> 00:39:51
hat we could actually do this this

00:39:49 --> 00:39:53
everybody saying that this is impossible

00:39:50 --> 00:39:57
to do but it's actually just hard it's

00:39:52 --> 00:39:59
not impossible and eventually told my

00:39:56 --> 00:40:00
manager about it and he's like oh wow

00:39:58 --> 00:40:02
this is great we do need to solve this

00:39:59 --> 00:40:04
problem oh this is great we can like get

00:40:01 --> 00:40:06
you one other person to work with you on

00:40:03 --> 00:40:10
this you know and slowly a team is

00:40:05 --> 00:40:12
formed and it starts taking off and c++

00:40:09 --> 00:40:14
for example huge complicated language

00:40:11 --> 00:40:16
people always assume that it's

00:40:13 --> 00:40:18
impossible to implement and it's very

00:40:15 --> 00:40:21
nearly impossible but it's just really

00:40:17 --> 00:40:22
hard and the way to get there is

00:40:20 --> 00:40:25
to build it one piece at a time

00:40:21 --> 00:40:27
incrementally and and there that was

00:40:24 --> 00:40:28
only possible because we were lucky to

00:40:26 --> 00:40:30
hire some really exceptional engineers

00:40:27 --> 00:40:32
that that knew various parts of it very

00:40:29 --> 00:40:35
well and and could do great things

00:40:31 --> 00:40:39
Swift was kind of a similar thing so

00:40:34 --> 00:40:42
Swift came from we were just finishing

00:40:38 --> 00:40:47
off the first version of C++ support in

00:40:41 --> 00:40:48
M clang and C++ is a very formidable and

00:40:46 --> 00:40:51
very important language but it's also

00:40:47 --> 00:40:53
ugly in lots of ways and you can't

00:40:50 --> 00:40:55
influence C++ without thinking there has

00:40:52 --> 00:40:57
to be a better thing right and so I

00:40:54 --> 00:40:59
started working on Swift again with no

00:40:56 --> 00:41:01
hope or ambition that would go anywhere

00:40:58 --> 00:41:03
just uh let's see what could be done

00:41:00 --> 00:41:06
let's play around with this thing it was

00:41:02 --> 00:41:09
you know me in my spare time not telling

00:41:05 --> 00:41:10
anybody about it kind of a thing and it

00:41:08 --> 00:41:12
made some good progress I'm like

00:41:09 --> 00:41:13
actually it would make sense to do this

00:41:11 --> 00:41:16
at the same time I started talking with

00:41:12 --> 00:41:19
e senior VP of software at the time a

00:41:15 --> 00:41:20
guy named Burt Ron stole a and Burt Ron

00:41:18 --> 00:41:22
was very encouraging he was like well

00:41:19 --> 00:41:23
you know let's let's have fun let's talk

00:41:21 --> 00:41:25
about this and he was a little bit of a

00:41:22 --> 00:41:28
language guy and so he helped guide some

00:41:24 --> 00:41:31
of the the early work and encouraged me

00:41:27 --> 00:41:33
and like got things off the ground and

00:41:30 --> 00:41:37
eventually I've told other to like my

00:41:32 --> 00:41:40
manager and told other people and and it

00:41:36 --> 00:41:42
started making progress the the

00:41:39 --> 00:41:45
complicating thing was Swift was that

00:41:41 --> 00:41:48
he idea of doing a new language is not

00:41:44 --> 00:41:50
obvious to anybody including myself

00:41:47 --> 00:41:52
and the tone at the time was that the

00:41:49 --> 00:41:55
iPhone was successful because of

00:41:51 --> 00:41:57
objective-c right Oh interesting in a

00:41:54 --> 00:41:59
practice site of or just great because

00:41:56 --> 00:42:01
it and and you have to understand that

00:41:58 --> 00:42:04
the time

00:42:00 --> 00:42:06
Apple was hiring software people that

00:42:03 --> 00:42:09
loved Objective C right and it wasn't

00:42:05 --> 00:42:10
hat they came despite Objective C they

00:42:08 --> 00:42:12
loved Objective C and that's why they

00:42:09 --> 00:42:14
got hired and so you had a software team

00:42:11 --> 00:42:16
that the leadership and in many cases

00:42:13 --> 00:42:21
went all the way back to next where

00:42:15 --> 00:42:23
Objective C really became real and so

00:42:20 --> 00:42:25
they quote-unquote grew up writing

00:42:22 --> 00:42:27
Objective C and many of the individual

00:42:24 --> 00:42:30
engineers all were hired because they

00:42:26 --> 00:42:32
loved Objective C and so this notion of

00:42:29 --> 00:42:35
okay let's do new language was kind of

00:42:31 --> 00:42:37
heretical in many ways right meanwhile

00:42:34 --> 00:42:38
my sense was that the outside community

00:42:36 --> 00:42:40
wasn't really in love with Objective C

00:42:37 --> 00:42:41
some people were and some of the most

00:42:39 --> 00:42:44
outspoken people were but other people

00:42:40 --> 00:42:46
were hitting challenges because it has

00:42:43 --> 00:42:50
very sharp corners and it's difficult to

00:42:45 --> 00:42:51
learn and so one of the challenges of

00:42:49 --> 00:42:55
making Swift happen that was totally

00:42:50 --> 00:42:59
non-technical is the the social part of

00:42:54 --> 00:43:01
what do we do like if we do a new

00:42:58 --> 00:43:03
language which at Apple many things

00:43:00 --> 00:43:06
happen that don't ship right so if we if

00:43:02 --> 00:43:07
we ship it what what what is the metrics

00:43:05 --> 00:43:08
of success why would we do this why

00:43:06 --> 00:43:11
wouldn't we make Objective C better if

00:43:08 --> 00:43:13
object C has problems let's file off

00:43:10 --> 00:43:15
those rough corners and edges and one of

00:43:12 --> 00:43:18
the major things that became the reason

00:43:14 --> 00:43:21
to do this was this notion of safety

00:43:17 --> 00:43:24
memory safety and the way Objective C

00:43:20 --> 00:43:26
works is that a lot of the object system

00:43:23 --> 00:43:29
and everything else is built on top of

00:43:25 --> 00:43:32
pointers and C Objective C is an

00:43:28 --> 00:43:35
extension on top of C and so pointers

00:43:31 --> 00:43:36
are unsafe and if you get rid of the

00:43:34 --> 00:43:39
pointers it's not Objective C anymore

00:43:35 --> 00:43:42
and so fundamentally that was an issue

00:43:38 --> 00:43:45
that you could not fix safety or memory

00:43:41 --> 00:43:47
safety without fundamentally changing

00:43:44 --> 00:43:51
the language and so once we got through

00:43:46 --> 00:43:53
that part of the mental process and the

00:43:50 --> 00:43:55
thought process it became a design

00:43:52 --> 00:43:56
process of saying okay well if we're

00:43:54 --> 00:43:58
gonna do something new what what is good

00:43:56 --> 00:44:00
like how do we think about this and what

00:43:57 --> 00:44:02
do we like and what are we looking for

00:43:59 --> 00:44:04
and that that was a very different phase

00:44:01 --> 00:44:07
of it so well what are some design

00:44:03 --> 00:44:11
choices early on and Swift like we're

00:44:06 --> 00:44:13
talking about braces are you making a

00:44:10 --> 00:44:15
type language or not all those kinds of

00:44:12 --> 00:44:17
things yeah so some of those were

00:44:14 --> 00:44:19
obvious given the context so a types

00:44:16 --> 00:44:21
language for example objective sees a

00:44:18 --> 00:44:24
typed language and going with an untyped

00:44:20 --> 00:44:26
language wasn't really seriously

00:44:23 --> 00:44:27
considered we wanted we want the

00:44:25 --> 00:44:29
performance and we wanted refactoring

00:44:26 --> 00:44:31
tools and other things like that to go

00:44:28 --> 00:44:33
with type languages quick dumb question

00:44:30 --> 00:44:35
yeah was it obvious

00:44:32 --> 00:44:37
I think it would be a dumb question but

00:44:34 --> 00:44:41
was it obvious that the language has to

00:44:36 --> 00:44:43
be a compiled language not and yes

00:44:40 --> 00:44:45
that's not a dumb question earlier I

00:44:42 --> 00:44:47
think late 90s Apple is seriously

00:44:44 --> 00:44:51
considered moving its development

00:44:46 --> 00:44:54
experience to Java but this was started

00:44:50 --> 00:44:55
in 2010 which was several years after

00:44:53 --> 00:44:57
the iPhone it was when the iPhone was

00:44:54 --> 00:45:00
definitely on an upward trajectory and

00:44:56 --> 00:45:02
the iPhone was still extremely and is

00:44:59 --> 00:45:05
till a bit memory constrained right and

00:45:01 --> 00:45:07
so being able to compile the code and

00:45:04 --> 00:45:10
then ship it and then have having

00:45:06 --> 00:45:12
standalone code that is not JIT compiled

00:45:09 --> 00:45:16
was is a very big deal and it's very

00:45:11 --> 00:45:18
much part of the apple value system now

00:45:15 --> 00:45:20
javascript is also a thing right I mean

00:45:17 --> 00:45:22
it's not it's not that this is exclusive

00:45:19 --> 00:45:26
and technologies are good depending on

00:45:21 --> 00:45:27
how they're applied right but in the

00:45:25 --> 00:45:29
design of Swift saying like how can we

00:45:26 --> 00:45:30
make Objective C better right Objective

00:45:28 --> 00:45:33
C is statically compiled and that was

00:45:29 --> 00:45:35
the contiguous natural thing to do just

00:45:32 --> 00:45:37
skip ahead a little bit now go right

00:45:34 --> 00:45:41
back just just as a question as you

00:45:36 --> 00:45:43
think about today in 2019 yeah in your

00:45:40 --> 00:45:47
work at Google if tons of phone so on is

00:45:42 --> 00:45:49
again compilations static compilation

00:45:46 --> 00:45:52
the right there's still the right thing

00:45:48 --> 00:45:54
yes so the the funny thing after working

00:45:51 --> 00:45:57
on compilers for a really long time is

00:45:53 --> 00:46:00
that and one of this is one of the

00:45:56 --> 00:46:02
things that LVM has helped with is that

00:45:59 --> 00:46:05
I don't look as comp compilations being

00:46:01 --> 00:46:09
static or dynamic or interpreted or not

00:46:04 --> 00:46:10
his is a spectrum okay and one of the

00:46:08 --> 00:46:12
cool things about Swift is that Swift is

00:46:09 --> 00:46:14
not just statically compiled

00:46:11 --> 00:46:16
it's actually dynamically compiled as

00:46:13 --> 00:46:19
well and it can also be interpreted that

00:46:15 --> 00:46:21
nobody's actually done that and so what

00:46:18 --> 00:46:23
ends up happening when you use

00:46:20 --> 00:46:25
Swift in a workbook for example in

00:46:22 --> 00:46:27
Calabria and Jupiter is it's actually

00:46:24 --> 00:46:29
dynamically compiling the statements as

00:46:26 --> 00:46:33
you execute them and so let's gets back

00:46:28 --> 00:46:35
to the software engineering problems

00:46:32 --> 00:46:37
right where if you layer the stack

00:46:34 --> 00:46:39
properly you can actually completely

00:46:36 --> 00:46:41
change how and when things get compiled

00:46:38 --> 00:46:43
because you have the right abstractions

00:46:40 --> 00:46:44
there and so the way that a collab

00:46:42 --> 00:46:48
workbook

00:46:43 --> 00:46:50
works with Swift is that we start typing

00:46:47 --> 00:46:52
into it it creates a process a UNIX

00:46:49 --> 00:46:54
process and then each line of code you

00:46:51 --> 00:46:56
type in it compiles it through the Swift

00:46:53 --> 00:46:59
compiler there's the front end part and

00:46:55 --> 00:47:02
then sends it through the optimizer JIT

00:46:58 --> 00:47:05
compiles machine code and then injects

00:47:01 --> 00:47:07
it into that process and so as you're

00:47:04 --> 00:47:09
typing new stuff it's putting it's like

00:47:06 --> 00:47:11
squirting a new code and overriding and

00:47:08 --> 00:47:14
replacing an updating code in place and

00:47:10 --> 00:47:15
the fact that it can do this is not an

00:47:13 --> 00:47:18
accident like Swift was designed for

00:47:14 --> 00:47:19
this but it's an important part of how

00:47:17 --> 00:47:21
the language was set up and how it's

00:47:18 --> 00:47:23
layered and and this is a non-obvious

00:47:20 --> 00:47:26
piece and one of the things with Swift

00:47:22 --> 00:47:28
hat was for me a very strong design

00:47:25 --> 00:47:31
point is to make it so that you can

00:47:27 --> 00:47:33
learn it very quickly and so from a

00:47:30 --> 00:47:34
language design perspective the thing

00:47:32 --> 00:47:37
that I always come back to is this UI

00:47:33 --> 00:47:41
principle of progressive disclosure of

00:47:36 --> 00:47:43
complexity and so in Swift you can start

00:47:40 --> 00:47:47
by saying print quote hello world quote

00:47:42 --> 00:47:49
right and there's no /n just like Python

00:47:46 --> 00:47:51
e line of code no main no no header

00:47:48 --> 00:47:54
files no header files no public static

00:47:50 --> 00:47:56
lass void blah blah blah string like

00:47:53 --> 00:47:58
Java has right so one line of code right

00:47:55 --> 00:48:00
and you can teach that and it works

00:47:57 --> 00:48:02
great they can say well let's introduce

00:47:59 --> 00:48:04
variables and so you can declare a

00:48:01 --> 00:48:06
variable with far so VAR x equals four

00:48:03 --> 00:48:09
what is a variable you can use xx plus

00:48:05 --> 00:48:10
one this is what it means then you can

00:48:08 --> 00:48:12
say we'll have a control flow well this

00:48:09 --> 00:48:13
what an if statement is this is what

00:48:11 --> 00:48:17
a for statement is this is what a while

00:48:12 --> 00:48:19
statement is then you can say let's

00:48:16 --> 00:48:21
introduce functions right and and many

00:48:18 --> 00:48:23
languages like Python have had this this

00:48:20 --> 00:48:24
kind of notion of let's introduce small

00:48:22 --> 00:48:26
things and they can add complex

00:48:23 --> 00:48:28
then you can introduce classes and then

00:48:25 --> 00:48:30
you can add generics I'm against the

00:48:27 --> 00:48:32
Swift and then you can in modules and

00:48:29 --> 00:48:34
build out in terms of the things that

00:48:31 --> 00:48:37
you're expressing but this is not very

00:48:33 --> 00:48:39
typical for compiled languages and so

00:48:36 --> 00:48:41
this was a very strong design point and

00:48:38 --> 00:48:43
one of the reasons that Swift in general

00:48:40 --> 00:48:45
is designed with this factoring of

00:48:42 --> 00:48:47
complexity in mind so that the language

00:48:44 --> 00:48:49
can express powerful things you can

00:48:46 --> 00:48:52
write firmware in Swift if you want to

00:48:48 --> 00:48:55
but it has a very high-level feel which

00:48:51 --> 00:48:57
is really this perfect blend because

00:48:54 --> 00:48:59
often you have very advanced library

00:48:56 --> 00:49:02
writers that want to be able to use the

00:48:58 --> 00:49:03
nitty-gritty details but then other

00:49:01 --> 00:49:05
people just want to use the libraries

00:49:02 --> 00:49:07
and work at a higher abstraction level

00:49:04 --> 00:49:10
it's kind of cool that I saw that you

00:49:06 --> 00:49:12
can just enter a probability I don't

00:49:09 --> 00:49:16
hink I pronounced that word enough but

00:49:11 --> 00:49:19
you can just drag in Python it's just a

00:49:15 --> 00:49:20
string you can import like I saw this in

00:49:18 --> 00:49:21
the demo yeah I'm pointing out but like

00:49:19 --> 00:49:24
how do you make that happen

00:49:20 --> 00:49:25
yeah what's what's up yeah say is that

00:49:23 --> 00:49:28
as easy as it looks

00:49:24 --> 00:49:30
or is it yes that's not that's not a

00:49:27 --> 00:49:31
stage magic hack or anything like that

00:49:29 --> 00:49:33
hen I I don't mean from the user

00:49:30 --> 00:49:34
perspective I mean from the

00:49:32 --> 00:49:35
implementation perspective to make it

00:49:33 --> 00:49:37
happen

00:49:34 --> 00:49:39
so it's it's easy once all the pieces

00:49:36 --> 00:49:40
are in place the way it works so if you

00:49:38 --> 00:49:42
think about a dynamically typed language

00:49:39 --> 00:49:44
like Python right you can think about it

00:49:41 --> 00:49:47
as in two different ways you can say it

00:49:43 --> 00:49:49
has no types right which is what most

00:49:46 --> 00:49:52
people would say or you can say it has

00:49:48 --> 00:49:53
one type right and you could say has one

00:49:51 --> 00:49:55
type and it's like the Python object

00:49:52 --> 00:49:56
mm-hmm and the Python object gets passed

00:49:54 --> 00:50:00
around and because there's only one type

00:49:55 --> 00:50:02
its implicit okay and so what happens

00:49:59 --> 00:50:03
with Swift and Python talking to each

00:50:01 --> 00:50:06
other Swift has lots of types right has

00:50:02 --> 00:50:08
a raise and it has strings and all like

00:50:05 --> 00:50:12
classes and that kind of stuff but it

00:50:07 --> 00:50:13
now has a Python object type right so

00:50:11 --> 00:50:17
there is one Python object type and so

00:50:12 --> 00:50:19
when you say import numpy what you get

00:50:16 --> 00:50:23
is a Python object which is the numpy

00:50:18 --> 00:50:25
module then you say NPRA it says okay

00:50:22 --> 00:50:27
hey hey Python object I have no idea

00:50:24 --> 00:50:30
what you are give me your array member

00:50:26 --> 00:50:31
ight okay cool it just it just uses

00:50:29 --> 00:50:33
dynamic stuff talks to the Python

00:50:30 --> 00:50:35
interpreter and says hey Python what's

00:50:32 --> 00:50:37
the daughter a member in the

00:50:34 --> 00:50:38
that Python object it gives you back

00:50:36 --> 00:50:40
another Python object and now you say

00:50:37 --> 00:50:42
parentheses for the call and the

00:50:39 --> 00:50:44
arguments are gonna pass and so then it

00:50:41 --> 00:50:47
says hey a Python object that is the

00:50:43 --> 00:50:49
result of NPR a call with these

00:50:46 --> 00:50:51
arguments right again calling into the

00:50:48 --> 00:50:54
Python interpreter to do that work and

00:50:50 --> 00:50:56
so right now this is all really simple

00:50:53 --> 00:50:58
and if you if you dive into the code

00:50:55 --> 00:50:59
what you'll see is that the the Python

00:50:57 --> 00:51:01
module and Swift is something like

00:50:58 --> 00:51:03
twelve hundred lines of code or

00:51:00 --> 00:51:06
something is written in pure Swift it's

00:51:02 --> 00:51:07
uper simple and it's and it's built on

00:51:05 --> 00:51:10
top of the c interoperability because

00:51:06 --> 00:51:12
just talks to the Python interpreter but

00:51:09 --> 00:51:14
making that possible required us to add

00:51:11 --> 00:51:16
two major language features to Swift to

00:51:13 --> 00:51:18
be able to express these dynamic calls

00:51:15 --> 00:51:20
and the dynamic member lookups and so

00:51:17 --> 00:51:23
what we've done over the last year is

00:51:19 --> 00:51:25
we've proposed implement standardized

00:51:22 --> 00:51:27
and contributed new language features to

00:51:24 --> 00:51:30
the Swift language in order to make it

00:51:26 --> 00:51:33
so it is really trivial right and this

00:51:29 --> 00:51:35
one of the things about Swift that is

00:51:32 --> 00:51:37
critical to this but for tens flow work

00:51:34 --> 00:51:39
which is that we can actually add new

00:51:36 --> 00:51:41
language features and the bar for adding

00:51:38 --> 00:51:44
those is high but it's it's what makes

00:51:40 --> 00:51:46
it possible so you know Google doing

00:51:43 --> 00:51:47
incredible work on several things

00:51:45 --> 00:51:51
including tensorflow

00:51:46 --> 00:51:56
the test flow 2.0 or whatever leading up

00:51:50 --> 00:51:59
to 2.0 has by default in 2.0 has eager

00:51:55 --> 00:52:02
execution in yet in order to make code

00:51:58 --> 00:52:05
optimized for GPU or TP or some of these

00:52:01 --> 00:52:07
systems computation needs to be

00:52:04 --> 00:52:08
converted to a graph so what's that

00:52:06 --> 00:52:11
process like what are the challenges

00:52:07 --> 00:52:14
there yeah so I I'm tangentially

00:52:10 --> 00:52:18
involved in this but the the way that it

00:52:13 --> 00:52:21
works with autograph is that

00:52:17 --> 00:52:23
you mark your your function with the

00:52:20 --> 00:52:26
decorator and when Python calls that

00:52:22 --> 00:52:29
decorator is invoked and then it

00:52:25 --> 00:52:31
says before I call this function you can

00:52:28 --> 00:52:33
transform it and so the way autograph

00:52:30 --> 00:52:35
works is as far as I understand as it

00:52:32 --> 00:52:38
actually uses the Python parser to go

00:52:34 --> 00:52:40
parse that turn into a syntax tree and

00:52:37 --> 00:52:42
now apply compiler techniques to again

00:52:39 --> 00:52:45
transform this down into tensor

00:52:41 --> 00:52:46
photographs and so it you can think of

00:52:44 --> 00:52:48
it as saying hey I have an if statement

00:52:45 --> 00:52:49
I'm going to create an if node in the

00:52:47 --> 00:52:52
graph

00:52:48 --> 00:52:54
like you say TF conned you have a

00:52:51 --> 00:52:56
multiply well I'll turn that into

00:52:53 --> 00:52:58
multiply node in the graph and that

00:52:55 --> 00:53:01
becomes the street transformation so

00:52:57 --> 00:53:06
word is the Swift for tensor for come in

00:53:00 --> 00:53:08
which is you know parallels you know for

00:53:05 --> 00:53:10
one swift is a interface like Python is

00:53:07 --> 00:53:12
an interface test flow but it seems like

00:53:09 --> 00:53:14
there's a lot more going on in just a

00:53:11 --> 00:53:17
different language interface there's

00:53:13 --> 00:53:18
optimization methodology yeah so so the

00:53:16 --> 00:53:21
tensor float world has a couple of

00:53:17 --> 00:53:24
different what I'd call front-end

00:53:20 --> 00:53:26
technologies and so Swift and Python and

00:53:23 --> 00:53:30
go and rust and Julia and all these

00:53:25 --> 00:53:32
things share the tensor flow graphs and

00:53:29 --> 00:53:36
all the runtime and everything that's

00:53:31 --> 00:53:38
later again and so vertex flow is merely

00:53:35 --> 00:53:40
another front end for tensor flow I'm

00:53:37 --> 00:53:43
just like any of these other systems are

00:53:39 --> 00:53:45
there's a major difference between I

00:53:42 --> 00:53:47
would say three camps of technologies

00:53:44 --> 00:53:49
here there's Python which is a special

00:53:46 --> 00:53:50
case because the vast majority of the

00:53:48 --> 00:53:53
community efforts go into the Python

00:53:49 --> 00:53:54
interface and python has its own

00:53:52 --> 00:53:57
approaches for automatic differentiation

00:53:53 --> 00:53:58
it has its own api's and all this kind

00:53:56 --> 00:54:00
of stuff

00:53:57 --> 00:54:01
there's Swift which I'll talk about in a

00:53:59 --> 00:54:03
second and then there's kind of

00:54:00 --> 00:54:05
everything else and so the everything

00:54:02 --> 00:54:08
else are effectively language bindings

00:54:04 --> 00:54:09
o they they call into the tense flow

00:54:07 --> 00:54:11
runtime but they're not they usually

00:54:08 --> 00:54:14
don't have automatic differentiation or

00:54:10 --> 00:54:16
they usually don't provide anything

00:54:13 --> 00:54:17
other than API is that call the C API is

00:54:15 --> 00:54:20
intensive flow and so they're kind of

00:54:16 --> 00:54:21
wrappers for that Swift is really kind

00:54:19 --> 00:54:25
of special and it's a very different

00:54:20 --> 00:54:26
approach Swift 4/10 below that is is a

00:54:24 --> 00:54:28
very different approach because there

00:54:25 --> 00:54:30
we're saying let's look at all the

00:54:27 --> 00:54:30
problems that need to be solved in the

00:54:29 --> 00:54:35
fullest

00:54:29 --> 00:54:36
of the tensorflow compilation process if

00:54:34 --> 00:54:38
you think about it that way because

00:54:35 --> 00:54:41
tensorflow is fundamentally a compiler

00:54:37 --> 00:54:44
it takes models and then it makes them

00:54:40 --> 00:54:47
go faster on hardware that's what a

00:54:43 --> 00:54:49
compiler does and it has a front end it

00:54:46 --> 00:54:51
has an optimizer and it has many

00:54:48 --> 00:54:52
backends and so if you think about it

00:54:50 --> 00:54:54
he right way

00:54:51 --> 00:54:56
or in in if you look at it in a

00:54:53 --> 00:55:02
particular way like it is a compiler

00:54:55 --> 00:55:04
okay and and so Swift is merely another

00:55:01 --> 00:55:07
front-end but it's saying in the the

00:55:03 --> 00:55:09
design principle is saying let's look at

00:55:06 --> 00:55:11
all the problems that we face as machine

00:55:08 --> 00:55:13
learning practitioners and what is the

00:55:10 --> 00:55:14
best possible way we can do that given

00:55:12 --> 00:55:17
the fact that we can change literally

00:55:13 --> 00:55:19
anything in this entire stack and python

00:55:16 --> 00:55:22
for example where the vast majority of

00:55:18 --> 00:55:25
the engineering and an effort has gone

00:55:21 --> 00:55:26
into its constrained by being the best

00:55:24 --> 00:55:29
possible thing you can do with the

00:55:25 --> 00:55:31
Python library like there are no Python

00:55:28 --> 00:55:32
language features that are added because

00:55:30 --> 00:55:35
of machine learning that I'm aware of

00:55:31 --> 00:55:37
they added a matrix multiplication

00:55:34 --> 00:55:41
operator with that but that's as close

00:55:36 --> 00:55:42
as you get and so with Swift you can you

00:55:40 --> 00:55:45
it's hard but you can add language

00:55:41 --> 00:55:47
features to the language and there's a

00:55:44 --> 00:55:49
community process for that and so we

00:55:46 --> 00:55:50
look at these things and say well what

00:55:48 --> 00:55:52
is the right division of labor between

00:55:49 --> 00:55:55
the human programmer and the compiler

00:55:51 --> 00:55:59
and Swift has a number of things that

00:55:54 --> 00:56:01
shift that balance so because it's a

00:55:58 --> 00:56:02
because it has a type system for example

00:56:00 --> 00:56:05
it makes certain things possible for

00:56:01 --> 00:56:07
analysis of the code and the compiler

00:56:04 --> 00:56:09
can automatically build graphs for you

00:56:06 --> 00:56:11
without you thinking about them like

00:56:08 --> 00:56:12
that's that's a big deal for a

00:56:10 --> 00:56:14
programmer you just get free performance

00:56:11 --> 00:56:16
you get clustering infusion and

00:56:13 --> 00:56:18
optimization and things like that

00:56:15 --> 00:56:19
without you as a programmer having to

00:56:17 --> 00:56:21
manually do it because the compiler can

00:56:18 --> 00:56:23
do it for you automatic to frenchie

00:56:20 --> 00:56:26
ation there's another big deal and it's

00:56:22 --> 00:56:29
I think one of the key contributions of

00:56:25 --> 00:56:31
the Swift for tensorflow project is that

00:56:28 --> 00:56:33
here's this entire body of work on

00:56:30 --> 00:56:36
automatic differentiation that dates

00:56:32 --> 00:56:37
back to the Fortran days people doing a

00:56:35 --> 00:56:39
tremendous amount of numerical computing

00:56:36 --> 00:56:41
and Fortran used to write these what

00:56:38 --> 00:56:44
hey call source-to-source translators

00:56:40 --> 00:56:46
where you where you take a bunch of code

00:56:43 --> 00:56:49
shove it into a mini compiler and push

00:56:45 --> 00:56:51
out more Fortran code but it would

00:56:48 --> 00:56:55
generate the backwards passes for your

00:56:50 --> 00:56:58
functions for you the derivatives and so

00:56:54 --> 00:57:01
in that work in the 70s a true master of

00:56:57 --> 00:57:03
optimizations a tremendous number of

00:57:00 --> 00:57:04
techniques for fixing numerical

00:57:02 --> 00:57:06
instability and other other kinds of

00:57:03 --> 00:57:09
problems were developed but they're very

00:57:05 --> 00:57:11
difficult to port into a world where in

00:57:08 --> 00:57:13
eager execution you get an opt by op at

00:57:10 --> 00:57:14
a time like you need to be able to look

00:57:12 --> 00:57:17
at an entire function and be able to

00:57:13 --> 00:57:19
reason about what's going on and so when

00:57:16 --> 00:57:21
you have a language integrated automatic

00:57:18 --> 00:57:22
differentiation which is one of the

00:57:20 --> 00:57:25
things that the Swift project is

00:57:21 --> 00:57:27
focusing on you can open open all these

00:57:24 --> 00:57:30
techniques and reuse them and in

00:57:26 --> 00:57:31
familiar ways but the language

00:57:29 --> 00:57:34
integration piece has a bunch of design

00:57:30 --> 00:57:36
room in it and it's also complicated the

00:57:33 --> 00:57:37
other piece of the puzzle here that's

00:57:35 --> 00:57:40
kind of interesting is TP use at Google

00:57:36 --> 00:57:41
yes so you know we're in a new world

00:57:39 --> 00:57:44
with deep learning it's constantly

00:57:40 --> 00:57:47
changing and I imagine without

00:57:43 --> 00:57:48
disclosing anything I imagine you know

00:57:46 --> 00:57:52
you're still innovating on the TP you

00:57:47 --> 00:57:54
front - indeed so how much sort of

00:57:51 --> 00:57:55
interplay xur between software and

00:57:53 --> 00:57:57
hardware in trying to figure out how to

00:57:54 --> 00:57:58
gather move towards at an optimal

00:57:56 --> 00:58:00
solution there's an incredible amount so

00:57:57 --> 00:58:04
ur third generation of TP use which are

00:57:59 --> 00:58:06
now 100 petaflop syn a very large liquid

00:58:03 --> 00:58:08
cooled box in a virtual box with no

00:58:05 --> 00:58:10
cover

00:58:07 --> 00:58:13
and as you might imagine we're not out

00:58:09 --> 00:58:16
of ideas yet the the great thing about

00:58:12 --> 00:58:18
TP use is that they're a perfect example

00:58:15 --> 00:58:20
of hardware/software co.design and so

00:58:17 --> 00:58:21
it's a bet it's about saying what

00:58:19 --> 00:58:24
hardware do we build to solve certain

00:58:20 --> 00:58:27
classes of machine learning problems

00:58:23 --> 00:58:29
well the algorithms are changing like

00:58:26 --> 00:58:31
the hardware it takes you know some

00:58:28 --> 00:58:34
cases years to produce right and so you

00:58:30 --> 00:58:36
have to make bets and decide what is

00:58:33 --> 00:58:38
going to happen and so and what is the

00:58:35 --> 00:58:40
best way to spend the transistors to get

00:58:37 --> 00:58:43
he maximum you know performance per

00:58:39 --> 00:58:45
watt or area per cost or like whatever

00:58:42 --> 00:58:47
it is that you're optimizing for and so

00:58:44 --> 00:58:51
ne of the amazing things about TP use

00:58:46 --> 00:58:54
is this numeric format called b-flat 16b

00:58:50 --> 00:58:55
float16 is a compressed 16-bit

00:58:53 --> 00:58:57
floating-point format but it puts the

00:58:54 --> 00:59:00
bits in different places in numeric

00:58:56 --> 00:59:02
terms it has a smaller mantissa and a

00:58:59 --> 00:59:05
larger exponent that means that it's

00:59:01 --> 00:59:07
less precise but it can represent larger

00:59:04 --> 00:59:09
anges of values which in the machine

00:59:06 --> 00:59:11
learning context is really important and

00:59:08 --> 00:59:14
useful because sometimes you have very

00:59:10 --> 00:59:18
small gradients you want to accumulate

00:59:13 --> 00:59:20
and very very small numbers that are

00:59:17 --> 00:59:22
important to to move things as you're

00:59:19 --> 00:59:26
learning but sometimes you have very

00:59:21 --> 00:59:28
large magnitude numbers as well and be

00:59:25 --> 00:59:30
float16 is not as precise the mantissa

00:59:27 --> 00:59:31
is small but it turns out the machine

00:59:29 --> 00:59:34
learning algorithms actually want to

00:59:30 --> 00:59:35
generalize and so there's you know

00:59:33 --> 00:59:37
theories that this actually increases

00:59:34 --> 00:59:39
generate the ability for the network to

00:59:36 --> 00:59:41
generalize across data sets and

00:59:38 --> 00:59:43
regardless of whether it's good or bad

00:59:40 --> 00:59:48
is much cheaper at the hardware level to

00:59:42 --> 00:59:50
implement because the area and time of a

00:59:47 --> 00:59:52
multiplier is N squared in the number of

00:59:49 --> 00:59:55
bits in the mantissa but it's linear

00:59:51 --> 00:59:56
with size of the exponent connected to

00:59:54 --> 00:59:58
solar big deal efforts here both on the

00:59:55 --> 01:00:00
hardware and the software side yeah and

00:59:57 --> 01:00:02
so that was a breakthrough coming from

00:59:59 --> 01:00:06
the research side and people working on

01:00:01 --> 01:00:09
optimizing network transport of weights

01:00:05 --> 01:00:11
across a network originally and trying

01:00:08 --> 01:00:13
to find ways to compress that but then

01:00:10 --> 01:00:15
it got burned into silicon and it's a

01:00:12 --> 01:00:19
key part of what makes CPU performance

01:00:14 --> 01:00:21
so amazing and and and great TPS have

01:00:18 --> 01:00:24
many different aspects of the

01:00:20 --> 01:00:26
important but the the co.design between

01:00:23 --> 01:00:28
the low-level compiler bits and the

01:00:25 --> 01:00:31
software bits and the algorithms is all

01:00:27 --> 01:00:34
super important and it's a this amazing

01:00:30 --> 01:00:35
try factor that only Google do yeah

01:00:33 --> 01:00:41
that's super exciting so can you tell me

01:00:34 --> 01:00:43
about MLI our project previously this

01:00:40 --> 01:00:45
the secretive one yeah so EMA lair is a

01:00:42 --> 01:00:48
project that we announced at a compiler

01:00:44 --> 01:00:50
conference three weeks ago or something

01:00:47 --> 01:00:52
at the compilers for machine learning

01:00:49 --> 01:00:54
conference basically if again if you

01:00:51 --> 01:00:56
look at tensorflow as a compiler stack

01:00:53 --> 01:00:58
it has a number of compiler algorithms

01:00:55 --> 01:00:59
within it it also has a number of

01:00:57 --> 01:01:01
compilers that get embedded into it and

01:00:58 --> 01:01:04
they're made by different vendors for

01:01:00 --> 01:01:07
example Google has xla which is a great

01:01:03 --> 01:01:10
compiler system NVIDIA has tensor RT

01:01:06 --> 01:01:12
Intel has n graph there's a number of

01:01:09 --> 01:01:14
these different compiler systems and

01:01:11 --> 01:01:15
they're very hardware specific and

01:01:13 --> 01:01:18
they're trying to solve different parts

01:01:14 --> 01:01:20
of the problems but they're all kind of

01:01:17 --> 01:01:22
similar in a sense of they want to

01:01:19 --> 01:01:24
integrate with tensorflow no test flow

01:01:21 --> 01:01:26
has an optimizer and it has these

01:01:23 --> 01:01:28
different code generation technologies

01:01:25 --> 01:01:30
built in the idea of NLR is to build a

01:01:27 --> 01:01:33
common infrastructure to support all

01:01:29 --> 01:01:35
these different subsystems and initially

01:01:32 --> 01:01:36
it's to be able to make it so that they

01:01:34 --> 01:01:39
all plug in together and they can share

01:01:35 --> 01:01:40
a lot more code and can be reusable but

01:01:38 --> 01:01:43
over time we hope that the industry will

01:01:39 --> 01:01:44
start collaborating and sharing code and

01:01:42 --> 01:01:46
instead of reinventing the same things

01:01:43 --> 01:01:49
over and over again that we can actually

01:01:45 --> 01:01:51
foster some of that that you know

01:01:48 --> 01:01:53
orking together to solve common problem

01:01:50 --> 01:01:56
energy that has been useful in the

01:01:52 --> 01:01:58
compiler field before beyond that mor is

01:01:55 --> 01:02:02
ome people have joked that it's kind of

01:01:57 --> 01:02:03
LVM to it learns a lot about what LVM

01:02:01 --> 01:02:07
has been good and what LVM has done

01:02:02 --> 01:02:09
wrong and it's a chance to fix that and

01:02:06 --> 01:02:12
also there are challenges in the LLVM

01:02:08 --> 01:02:14
ecosystem as well where LVM is very good

01:02:11 --> 01:02:16
at the thing was designed to do but you

01:02:13 --> 01:02:17
know 20 years later the world has

01:02:15 --> 01:02:19
changed and people are trying to solve

01:02:16 --> 01:02:22
higher-level problems and we need we

01:02:18 --> 01:02:25
need some new technology and what's the

01:02:21 --> 01:02:28
future of open source in this context

01:02:24 --> 01:02:29
very soon so it is not yet open source

01:02:27 --> 01:02:32
but it will be hopefully you still

01:02:28 --> 01:02:33
believe in the value of open source in

01:02:31 --> 01:02:36
kazakh oh yeah absolutely and I

01:02:32 --> 01:02:38
that the tensorflow community at large

01:02:35 --> 01:02:40
fully believes an open-source so I mean

01:02:38 --> 01:02:42
that's there is a difference between

01:02:39 --> 01:02:44
Apple where you were previously in

01:02:41 --> 01:02:46
Google now in spirit and culture and I

01:02:43 --> 01:02:48
would say the open sourcing intensive

01:02:45 --> 01:02:50
floor was a seminal moment in the

01:02:47 --> 01:02:53
history of software because here's this

01:02:49 --> 01:02:57
large company releasing a very large

01:02:52 --> 01:02:58
code base as the open sourcing what are

01:02:56 --> 01:03:01
your thoughts on that

01:02:57 --> 01:03:04
I'll happy or not were you to see that

01:03:00 --> 01:03:05
kind of degree of open sourcing so

01:03:03 --> 01:03:07
between the two I prefer the Google

01:03:04 --> 01:03:12
approach if that's what you're saying

01:03:07 --> 01:03:14
the Apple approach makes sense given the

01:03:11 --> 01:03:17
historical context that Apple came from

01:03:13 --> 01:03:20
but that's been 35 years ago and I think

01:03:16 --> 01:03:21
the Apple is definitely adapting and the

01:03:19 --> 01:03:23
way I look at it is that there's

01:03:20 --> 01:03:25
different kinds of concerns in the space

01:03:22 --> 01:03:29
right it is very rational for a business

01:03:24 --> 01:03:31
to to care about making money that

01:03:28 --> 01:03:33
fundamentally is what a business is

01:03:30 --> 01:03:36
about right but I think it's also

01:03:32 --> 01:03:37
incredibly realistic to say it's not

01:03:35 --> 01:03:39
your string library that's the thing

01:03:36 --> 01:03:41
that's going to make you money it's

01:03:38 --> 01:03:43
going to be the amazing UI product

01:03:40 --> 01:03:44
differentiating features and other

01:03:42 --> 01:03:48
things like that that you built on top

01:03:43 --> 01:03:50
of your string library and so keeping

01:03:47 --> 01:03:52
your string library proprietary and

01:03:49 --> 01:03:54
secret and things like that isn't maybe

01:03:51 --> 01:03:58
not the the important thing anymore

01:03:53 --> 01:04:01
right or before platforms were different

01:03:57 --> 01:04:02
right and even 15 years ago things were

01:04:00 --> 01:04:05
a little bit different but the world is

01:04:02 --> 01:04:08
changing so Google strikes very good

01:04:04 --> 01:04:09
balance I think and I think the

01:04:07 --> 01:04:11
tensorflow being open source really

01:04:08 --> 01:04:14
changed the entire machine learning

01:04:10 --> 01:04:16
field and it caused a revolution in its

01:04:13 --> 01:04:19
own right and so I think it's amazing

01:04:15 --> 01:04:21
for amazingly forward-looking because I

01:04:18 --> 01:04:23
could have imagined and I was an at

01:04:20 --> 01:04:24
Google time but I could imagine the

01:04:22 --> 01:04:27
different contacts and different world

01:04:23 --> 01:04:28
where a company says machine learning is

01:04:26 --> 01:04:29
critical to what we're doing we're not

01:04:27 --> 01:04:32
going to give it to other people

01:04:28 --> 01:04:37
right and so that decision is a profound

01:04:31 --> 01:04:38
ly brilliant insight that I

01:04:36 --> 01:04:40
think has really led to the world being

01:04:37 --> 01:04:43
better and better for Google as well and

01:04:39 --> 01:04:46
has all kinds of ripple effects I think

01:04:42 --> 01:04:47
it is really I mean you can't understate

01:04:45 --> 01:04:50
Google does

01:04:46 --> 01:04:52
adding that how profound that is for

01:04:49 --> 01:04:55
software is awesome well and it's been

01:04:51 --> 01:04:57
in again I can understand the concern

01:04:54 --> 01:05:00
about if we release our machine learning

01:04:56 --> 01:05:02
software are our competitors could go

01:04:59 --> 01:05:03
faster from the other hand I think that

01:05:01 --> 01:05:06
open sourcing test flow has been

01:05:02 --> 01:05:08
fantastic for Google and I'm sure that

01:05:05 --> 01:05:09
obvious was that that that decision was

01:05:07 --> 01:05:11
very non obvious at the time

01:05:08 --> 01:05:14
but I think it's worked out very well so

01:05:10 --> 01:05:17
let's try this real quick yeah you were

01:05:13 --> 01:05:19
at Tesla for five months as the VP of

01:05:16 --> 01:05:21
auto pilot software you led the team

01:05:18 --> 01:05:23
during the transition from each hardware

01:05:20 --> 01:05:26
one hardware to I have a couple

01:05:22 --> 01:05:28
questions so one first of all to me

01:05:25 --> 01:05:30
that's one of the bravest engineering

01:05:27 --> 01:05:34
decisions undertaking

01:05:29 --> 01:05:36
so like undertaking really ever in the

01:05:33 --> 01:05:39
automotive industry to me software wise

01:05:35 --> 01:05:41
starting from scratch it's a really

01:05:38 --> 01:05:44
brave a decision so my one question is

01:05:40 --> 01:05:45
there's always that like what was the

01:05:43 --> 01:05:47
challenge of that do you mean the career

01:05:44 --> 01:05:50
decision of jumping from a comfortable

01:05:46 --> 01:05:52
good job into the unknown or that

01:05:49 --> 01:05:56
combined so the at the individual level

01:05:51 --> 01:05:58
you making that decision and then when

01:05:55 --> 01:06:01
you show up you know it's a really hard

01:05:57 --> 01:06:05
engineering process so you could just

01:06:00 --> 01:06:07
ay maybe slow down say hardware one or

01:06:04 --> 01:06:10
that those kinds of decisions

01:06:06 --> 01:06:11
just taking it full-on let's let's do

01:06:09 --> 01:06:13
this from scratch what was that like

01:06:10 --> 01:06:15
well so I mean I don't think Tesla has a

01:06:12 --> 01:06:16
culture of taking things slow insights

01:06:14 --> 01:06:18
how it goes

01:06:15 --> 01:06:20
and one of the things that attracted me

01:06:17 --> 01:06:21
about Tesla is it's very much a gung-ho

01:06:19 --> 01:06:23
let's change the world let's figure it

01:06:20 --> 01:06:26
out kind of a place and so I have a huge

01:06:22 --> 01:06:29
amount of respect for that

01:06:25 --> 01:06:31
Tesla has done very smart things with

01:06:28 --> 01:06:33
ardware one in particular and the

01:06:30 --> 01:06:37
harder one design was originally

01:06:32 --> 01:06:39
designed to be very simple automation

01:06:36 --> 01:06:40
features in the car for like traffic

01:06:38 --> 01:06:42
aware cruise control and things like

01:06:39 --> 01:06:44
that and the fact that they were able to

01:06:41 --> 01:06:48
effectively feature creep it into lane

01:06:43 --> 01:06:49
holding and and a very useful driver

01:06:47 --> 01:06:51
assistance features is pretty astounding

01:06:49 --> 01:06:55
particularly given the details of the

01:06:50 --> 01:06:56
hardware hardware to built on that a lot

01:06:54 --> 01:06:59
of ways and the challenge there was that

01:06:55 --> 01:07:01
hey were transitioning from a third

01:06:58 --> 01:07:04
party provided vision stack to an

01:07:00 --> 01:07:06
in-house built vision stack and so for

01:07:03 --> 01:07:08
the first step which I mostly helped

01:07:05 --> 01:07:12
with was getting onto that new vision

01:07:07 --> 01:07:14
stack and that was very challenging and

01:07:11 --> 01:07:15
there were it was time critical for

01:07:13 --> 01:07:18
various reasons and it was a big leap

01:07:14 --> 01:07:19
but it was fortunate that built on a lot

01:07:17 --> 01:07:22
of the knowledge and expertise and the

01:07:18 --> 01:07:24
team that had built harder ones driver

01:07:21 --> 01:07:26
assistance features so you spoke in a

01:07:23 --> 01:07:29
collected and kind way about your time

01:07:25 --> 01:07:32
at Tesla but it was ultimately not a

01:07:28 --> 01:07:34
good fit Elon Musk we've talked on his

01:07:31 --> 01:07:36
podcast several guests the course he

01:07:33 --> 01:07:38
almost continues to do some of the most

01:07:35 --> 01:07:38
bold and innovative engineering work in

01:07:37 --> 01:07:41
the world

01:07:37 --> 01:07:43
at times at the cost some of the members

01:07:40 --> 01:07:45
of the test the team what did you learn

01:07:42 --> 01:07:49
about this working in this chaotic world

01:07:44 --> 01:07:52
Leon yeah so I guess I would say that

01:07:48 --> 01:07:55
when I was at Tesla I experienced and

01:07:51 --> 01:07:57
saw vert the highest degree of turnover

01:07:54 --> 01:08:00
I'd ever seen in a company my which was

01:07:56 --> 01:08:01
a bit of a shock but one of the things I

01:07:59 --> 01:08:04
learned and I came to respect is that

01:08:00 --> 01:08:06
Elon is able to attract amazing talent

01:08:03 --> 01:08:07
because he has a very clear vision of

01:08:05 --> 01:08:09
the future and he can get people to buy

01:08:06 --> 01:08:12
into it because they want that future to

01:08:08 --> 01:08:13
happen right and the power of vision is

01:08:11 --> 01:08:16
omething that I have a tremendous

01:08:12 --> 01:08:18
amount of respect for and I think that

01:08:15 --> 01:08:21
Elon is fairly singular in the world in

01:08:17 --> 01:08:24
terms of the things he's able to get

01:08:20 --> 01:08:27
people to believe in and it's it's a

01:08:23 --> 01:08:28
very it's very there many people who

01:08:26 --> 01:08:30
stay on the street corner and say ah

01:08:27 --> 01:08:32
we're gonna go to Mars right but then

01:08:29 --> 01:08:35
there are a few people that can

01:08:31 --> 01:08:36
get other others to buy into it and

01:08:34 --> 01:08:39
believe in build the path and make it

01:08:35 --> 01:08:42
happen and so I respect that

01:08:38 --> 01:08:44
I don't respect all of his methods but

01:08:41 --> 01:08:47
I have a huge amount of respect for

01:08:43 --> 01:08:50
that you've mentioned in a few places

01:08:46 --> 01:08:53
including in this context working hard

01:08:49 --> 01:08:55
what does it mean to work hard and when

01:08:52 --> 01:08:59
you look back at your life what are what

01:08:54 --> 01:09:01
were some of the most brutal periods of

01:08:58 --> 01:09:04
having to really sort of put everything

01:09:00 --> 01:09:05
you have into something yeah good

01:09:03 --> 01:09:07
question

01:09:04 --> 01:09:09
so working hard can be defined a lot of

01:09:06 --> 01:09:14
different ways so a lot of hours and so

01:09:08 --> 01:09:16
that's that is true the thing to me

01:09:13 --> 01:09:19
that's the hardest is both being

01:09:15 --> 01:09:20
short-term focused on delivering and

01:09:18 --> 01:09:22
executing and making a thing happen

01:09:19 --> 01:09:24
while also thinking about the

01:09:21 --> 01:09:27
longer-term and trying to balance that

01:09:23 --> 01:09:29
right because if you are myopically

01:09:26 --> 01:09:32
focused on solving a task and getting

01:09:28 --> 01:09:34
that done and only think about that

01:09:31 --> 01:09:36
incremental next step you will miss the

01:09:33 --> 01:09:38
next big hill you should jump over -

01:09:35 --> 01:09:41
right and so I've been really fortunate

01:09:37 --> 01:09:45
that I've been able to kind of oscillate

01:09:40 --> 01:09:47
between the two and historically at

01:09:44 --> 01:09:48
Apple for example that was made possible

01:09:46 --> 01:09:50
because I was able to work some really

01:09:47 --> 01:09:54
amazing people and build up teams and

01:09:49 --> 01:09:56
leadership structures and and allow them

01:09:53 --> 01:09:59
to grow in their careers and take on

01:09:55 --> 01:10:01
responsibilities thereby freeing up me

01:09:58 --> 01:10:05
to be a little bit crazy and thinking

01:10:00 --> 01:10:07
about the next thing and so it's it's a

01:10:04 --> 01:10:08
lot of that but it's also about you know

01:10:06 --> 01:10:10
ith the experience you make connections

01:10:07 --> 01:10:12
that other people don't necessarily make

01:10:09 --> 01:10:16
and so I think that is that's a big part

01:10:11 --> 01:10:19
as well but the bedrock is just a lot of

01:10:15 --> 01:10:20
hours and you know that's that's okay

01:10:18 --> 01:10:21
with me

01:10:19 --> 01:10:24
there's different theories on work-life

01:10:20 --> 01:10:26
balance and my theory for myself which I

01:10:23 --> 01:10:29
do not project on to the team but my

01:10:25 --> 01:10:30
theory for myself is that you know I I

01:10:28 --> 01:10:33
wanted love what I'm doing and work

01:10:29 --> 01:10:36
really hard and my purpose I feel like

01:10:32 --> 01:10:38
and my goal is to change the world and

01:10:35 --> 01:10:41
make it a better place and that's that's

01:10:37 --> 01:10:44
what I'm really motivated to do so last

01:10:40 --> 01:10:46
question LLVM logo is a dragon

01:10:43 --> 01:10:48
you know you explain that this is

01:10:45 --> 01:10:51
because dragons have connotations of

01:10:47 --> 01:10:53
power speed intelligence it can also be

01:10:50 --> 01:10:55
sleek elegant and

01:10:52 --> 01:10:58
modular till you remove them the modular

01:10:54 --> 01:11:00
part what is your favorite

01:10:57 --> 01:11:03
dragon-related character from fiction

01:10:59 --> 01:11:05
video or movies so those are all very

01:11:02 --> 01:11:06
kind ways of explaining it that you

01:11:04 --> 01:11:10
wanna know the real reason it's a dragon

01:11:05 --> 01:11:12
well yeah so there is a seminal book on

01:11:09 --> 01:11:16
compiler design called the dragon book

01:11:11 --> 01:11:20
and so this is a really old now book on

01:11:15 --> 01:11:23
compilers and so the the dragon logo for

01:11:19 --> 01:11:25
LVM came about because at Apple we kept

01:11:22 --> 01:11:27
alking about LLVM related technologies

01:11:24 --> 01:11:29
and there's no logo to put on a slide

01:11:26 --> 01:11:30
it's sort of like what do we do and

01:11:28 --> 01:11:33
somebody's like well what kind of logo

01:11:29 --> 01:11:35
should a compiler technology have and

01:11:32 --> 01:11:36
I'm like I don't know I mean the Dragons

01:11:34 --> 01:11:39
or the dragon is the best thing that

01:11:35 --> 01:11:41
we've got and you know Apple

01:11:38 --> 01:11:43
somehow magically came up with the logo

01:11:40 --> 01:11:45
and and it was a great thing and the

01:11:42 --> 01:11:47
whole community rallied around it and

01:11:44 --> 01:11:49
then it got better as other graphic

01:11:46 --> 01:11:50
designers got involved but that's that's

01:11:48 --> 01:11:52
originally where it came from

01:11:49 --> 01:11:56
story is they're dragons from fiction

01:11:51 --> 01:11:56
that you connect with for that Game of

01:11:55 --> 01:11:58
Thrones

01:11:55 --> 01:12:00
Lord of the Rings that kind of thing

01:11:57 --> 01:12:01
Lord of the Rings is great I also like

01:11:59 --> 01:12:03
role-playing games and things like in

01:12:00 --> 01:12:05
computer role-playing games and so

01:12:02 --> 01:12:08
Dragons often show up in there but but

01:12:04 --> 01:12:10
really comes back to to to the book oh

01:12:07 --> 01:12:13
no we need we need a thing yeah and

01:12:09 --> 01:12:16
hilariously one of the one of the the

01:12:12 --> 01:12:19
funny things about LLVM is that my wife

01:12:15 --> 01:12:21
who's amazing runs the the LVM

01:12:18 --> 01:12:22
foundation and she goes to Grace Hopper

01:12:20 --> 01:12:25
and it's trying to get more women

01:12:21 --> 01:12:26
involved in the she's also compiler

01:12:24 --> 01:12:27
engineer so she's trying to get other

01:12:25 --> 01:12:29
women to get interested in

01:12:26 --> 01:12:31
compilers and things like this and so

01:12:28 --> 01:12:33
she hands out the stickers and people

01:12:30 --> 01:12:36
like the LVM sticker because a game of

01:12:32 --> 01:12:39
thrones and so sometimes culture has

01:12:35 --> 01:12:41
this whole effect to like get the next

01:12:38 --> 01:12:44
generation if hilar engineers engaged

01:12:40 --> 01:12:48
with the cause okay awesome Chris thanks

01:12:43 --> 01:12:48
o much for time great talking with you

<!-- YOUTUBE_TRANSCRIPT_END -->
