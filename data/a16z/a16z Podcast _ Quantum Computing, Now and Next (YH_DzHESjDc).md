---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "YH_DzHESjDc"
title: "a16z Podcast | Quantum Computing, Now and Next"
video_url: "https://www.youtube.com/watch?v=YH_DzHESjDc"
thumbnail_url: "https://i.ytimg.com/vi/YH_DzHESjDc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=YH_DzHESjDc"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:38:45.000Z"
upload_date: "2019-01-02"
duration_seconds: 1594
duration_human: "26:34"
view_count: 341
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:05:40.660Z"
---

# a16z Podcast | Quantum Computing, Now and Next

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=YH_DzHESjDc
- video_id: YH_DzHESjDc
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:38:45.000Z
- upload_date: 2019-01-02
- duration: 26:34
- view_count: 341
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Moore's Law -- putting more and more transistors on a chip -- accelerated the computing industry by so many orders of magnitude, it has (and continues to) achieve seemingly impossible feats. However, we're now resorting to brute-force hacks to keep pushing it beyond its limits and are getting closer to the point of diminishing returns (especially given costly manufacturing infrastructure). Yet this very dynamic is leading to "a Cambrian explosion" in computing capabilities… just look at what's happening today with GPUs, FPGAs, and neuromorphic chips. Through such continuing performance improvements and parallelization, classic computing continues to reshape the modern world.

But we're so focused on making our computers do more that we're not talking enough about what classic computers can't do -- and that's to compute things the way nature does, which operates in quantum mechanics. So our smart machines are really quite dumb, argues Rigetti Computing founder and CEO Chad Rigetti; they're limited to human-made binary code vs. the natural reality of continuous variables. This in turn limits our ability to work on problems that classic computers can't solve, such as key applications in computational chemistry or large-scale optimization for machine learning and artificial intelligence. Which is where quantum computing comes in.

But what is quantum computing, really -- beyond the history and the hype? And where are we in reaching the promise of practical quantum computers? (Hint: it will take a hybrid approach to get there.) Who are the players -- companies, countries, types of people/skills -- working on it, and how can a startup compete in this space? Finally, what will it take to get "the flywheel" of application development and discovery going? Part of the answer comes full circle to the same economic engine that drove previous computing advances, argues Chris Dixon; Moore's Law, after all, is more of an economic principle that combined the forces of capitalism, a critical mass of ideas, and people moving things forward by sheer will. Quantum computing is finally getting pulled into the same economic forces as well.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hi everyone welcome to the a 6mz podcast

00:00:02 --> 00:00:07
I am sonal today we're talking about one

00:00:04 --> 00:00:08
of the most exciting advances in the

00:00:06 --> 00:00:11
history of computing and next platforms

00:00:07 --> 00:00:13
quantum computing we start by talking

00:00:10 --> 00:00:15
about the almost impossible march of

00:00:12 --> 00:00:16
Moore's law going beyond debates around

00:00:14 --> 00:00:18
whether its reaches limits finally or

00:00:15 --> 00:00:20
not to what that means not just for the

00:00:17 --> 00:00:22
potential of quantum computing but also

00:00:19 --> 00:00:24
advances in parallel computing for

00:00:21 --> 00:00:27
machine learning and GPS to FPGAs and

00:00:23 --> 00:00:29
more broadly how the economics of all

00:00:26 --> 00:00:31
this continually change who gets to and

00:00:28 --> 00:00:33
how we innovate in the computing

00:00:30 --> 00:00:35
industry and then we cover what is

00:00:32 --> 00:00:37
quantum computing and where are we right

00:00:34 --> 00:00:39
now in the practical reality of what

00:00:36 --> 00:00:40
people can actually do it that including

00:00:38 --> 00:00:42
what the first applications will be

00:00:39 --> 00:00:44
specially given what classical

00:00:41 --> 00:00:47
computers can't do and who are the

00:00:43 --> 00:00:49
players in this global race our guest on

00:00:46 --> 00:00:51
this podcast is the CEO and founder of

00:00:48 --> 00:00:54
quantum computing company Righetti

00:00:50 --> 00:00:57
computing Chad Righetti in conversation

00:00:53 --> 00:00:58
with a 6 + z partner Chris Dixon so let

00:00:56 --> 00:01:00
me let's start with what's kind of where

00:00:57 --> 00:01:02
are we in the in the history of

00:00:59 --> 00:01:04
computing modern computers started and

00:01:01 --> 00:01:06
probably in for real world war 2 ish

00:01:03 --> 00:01:09
1940s

00:01:05 --> 00:01:13
you know the PC revolution began the 70s

00:01:08 --> 00:01:15
and 80s Internet in the sort of 80s 90s

00:01:12 --> 00:01:17
mobile phones now right sort of in the

00:01:14 --> 00:01:18
art of that revolution and you know

00:01:16 --> 00:01:20
you're working on this one new thing

00:01:17 --> 00:01:23
quantum computing yeah there's been

00:01:19 --> 00:01:25
several many revolutions and computing

00:01:22 --> 00:01:27
capabilities at the hardware level and

00:01:24 --> 00:01:29
not the software level I think there's

00:01:26 --> 00:01:31
been a few kind of inflection points in

00:01:28 --> 00:01:32
that and one was back in the late 50s

00:01:30 --> 00:01:34
when we figured out for the first time

00:01:31 --> 00:01:37
how to wire together many transistors on

00:01:33 --> 00:01:39
a single on a single chip and this was

00:01:36 --> 00:01:41
an invention of the planar integrated

00:01:38 --> 00:01:43
circuit over the past 50 or 60 years

00:01:40 --> 00:01:44
ince then we've had we've had Moore's

00:01:42 --> 00:01:48
law scaling of those of the silicon

00:01:43 --> 00:01:51
based devices that have led to really an

00:01:47 --> 00:01:53
almost impossible scaling of the power

00:01:50 --> 00:01:55
that these microchips have and they have

00:01:52 --> 00:01:57
completely changed the world but that

00:01:54 --> 00:01:59
really just kind of the substrate layer

00:01:56 --> 00:02:01
of computing technology really the chip

00:01:58 --> 00:02:04
level you know over that time we've gone

00:02:00 --> 00:02:05
from from tiny chips with a few thousand

00:02:03 --> 00:02:07
transistors to chips with billions of

00:02:04 --> 00:02:10
transistors on them and the size of

00:02:06 --> 00:02:12
those transistors have shrunk by many

00:02:09 --> 00:02:13
orders of magnitude over that

00:02:11 --> 00:02:16
and we're now at the point where

00:02:12 --> 00:02:18
individual transistors are about 10 or

00:02:15 --> 00:02:21
20 nanometers in size to put that in

00:02:17 --> 00:02:24
context a human hair is about 10 or 20

00:02:20 --> 00:02:27
microns I think so a thousand times

00:02:23 --> 00:02:29
larger and 10 nanometers is about a

00:02:26 --> 00:02:32
hundred atoms wide and a transistor by

00:02:28 --> 00:02:34
the way corresponds to a two inch vacuum

00:02:31 --> 00:02:36
tube if you see those those computers

00:02:33 --> 00:02:39
from like the nineteen forties that

00:02:35 --> 00:02:40
wo-inch thing now fits in the scale of

00:02:38 --> 00:02:42
thousands in a human hair yeah and if we

00:02:39 --> 00:02:43
zoom out in terms of layers of

00:02:41 --> 00:02:45
abstraction what what is this transistor

00:02:42 --> 00:02:48
and what are we using it for in any case

00:02:44 --> 00:02:50
the transistor is the core logic element

00:02:47 --> 00:02:53
on on on a chip and traditional

00:02:49 --> 00:02:55
computing works by encoding information

00:02:52 --> 00:02:57
in zeros and ones in digital binary and

00:02:54 --> 00:02:59
those transistors represent that

00:02:56 --> 00:03:02
information so you can represent a

00:02:58 --> 00:03:04
massive amount of tree of information on

00:03:01 --> 00:03:06
these chips and we've also learned how

00:03:03 --> 00:03:08
to wire together millions of these chips

00:03:05 --> 00:03:10
and millions of processors in parallel

00:03:07 --> 00:03:12
to build large-scale supercomputers

00:03:09 --> 00:03:14
we're also at a point though where the

00:03:11 --> 00:03:15
ways in which we've been making those

00:03:13 --> 00:03:17
transistors more energy efficient so you

00:03:15 --> 00:03:19
can pack more of them more densely on a

00:03:16 --> 00:03:21
chip making them smaller and are

00:03:18 --> 00:03:23
starting to run into fundamental limits

00:03:20 --> 00:03:25
particularly the shrinking the

00:03:22 --> 00:03:28
fabrication technologies are hitting

00:03:24 --> 00:03:30
physical limits correct there are there

00:03:27 --> 00:03:32
are many there's a constellation of

00:03:29 --> 00:03:33
challenges that it's more than just a

00:03:31 --> 00:03:37
physical size one is the power density

00:03:32 --> 00:03:38
on a chip so when you when you switch

00:03:36 --> 00:03:40
the memory state of a transistor you

00:03:37 --> 00:03:41
generate some heat and that heat has to

00:03:39 --> 00:03:43
be extracted from the device to keep it

00:03:40 --> 00:03:45
from melting and that problem gets

00:03:42 --> 00:03:47
really hard as you pack them pack them

00:03:44 --> 00:03:48
ore and more densely and another

00:03:46 --> 00:03:49
challenge is if you want to build a

00:03:47 --> 00:03:51
supercomputer out of these things you

00:03:48 --> 00:03:53
need to use many millions of processors

00:03:50 --> 00:03:55
can parallel well that was one of the

00:03:52 --> 00:03:57
responses to the diminishing Moore's law

00:03:54 --> 00:04:00
right with multi-core processors yeah

00:03:56 --> 00:04:01
parallel system of your typical you know

00:03:59 --> 00:04:03
MacBook today I think as you know it's

00:04:00 --> 00:04:04
multiple cores your iPhone does but

00:04:02 --> 00:04:08
hese are essentially multiple computers

00:04:03 --> 00:04:09
running in parallel and then that at a

00:04:07 --> 00:04:11
larger scale is a data center which

00:04:08 --> 00:04:13
might have you know 10,000 of these or

00:04:10 --> 00:04:14
something but those also have limits

00:04:12 --> 00:04:15
because these things have to communicate

00:04:13 --> 00:04:18
with each other and there's just

00:04:14 --> 00:04:20
diminishing returns right as you as you

00:04:17 --> 00:04:22
connect more of these together in the

00:04:19 --> 00:04:23
same way that if 100 humans working

00:04:21 --> 00:04:25
together don't are 100 times more

00:04:22 --> 00:04:27
fficient than one human

00:04:24 --> 00:04:29
this is actually described by something

00:04:26 --> 00:04:31
called arm dolls law which is the lesser

00:04:28 --> 00:04:33
known but perhaps even more important

00:04:30 --> 00:04:35
oday cousin of Moore's law and what it

00:04:32 --> 00:04:37
means is as you start to paralyze a

00:04:34 --> 00:04:39
computation across many many processors

00:04:36 --> 00:04:41
in parallel you get a diminishing

00:04:38 --> 00:04:43
returns because not every step in the

00:04:40 --> 00:04:44
computation can be effectively paralyzed

00:04:42 --> 00:04:46
some of them just have to happen

00:04:43 --> 00:04:48
serially and so the basic approach of

00:04:45 --> 00:04:50
building more more powerful computers is

00:04:47 --> 00:04:52
tarting to hit hit some real limits and

00:04:49 --> 00:04:53
the physical size of the transistor is

00:04:51 --> 00:04:56
one but what that leads to from an

00:04:52 --> 00:04:58
economic perspective is that the cost of

00:04:55 --> 00:04:59
building the manufacturing

00:04:57 --> 00:05:02
infrastructure of the pot the cost of

00:04:58 --> 00:05:04
putting up a fab to build technology at

00:05:01 --> 00:05:07
he ten nanometer 20 nanometer scale is

00:05:03 --> 00:05:09
extremely large we're talking tens of

00:05:06 --> 00:05:10
billions of dollars now to get to the

00:05:08 --> 00:05:12
latest generation of technology and

00:05:09 --> 00:05:14
there's very few organizations in the

00:05:11 --> 00:05:16
world that kind of that can afford to do

00:05:13 --> 00:05:17
that so the competitive dynamics have

00:05:15 --> 00:05:19
been shaped by that by this economics

00:05:16 --> 00:05:21
one counter-argument to this is from the

00:05:18 --> 00:05:23
outside Moore's law looked like a law of

00:05:20 --> 00:05:24
nature from the inside if you talk to

00:05:22 --> 00:05:27
people that worked at companies like

00:05:23 --> 00:05:29
Intel they would say every time they

00:05:26 --> 00:05:30
were you know they felt like they'd hit

00:05:28 --> 00:05:32
he limit and then somebody came with a

00:05:29 --> 00:05:33
breakthrough and it felt maybe they'll

00:05:31 --> 00:05:36
continue to come with breaks here's

00:05:32 --> 00:05:38
number one number two people say Asics

00:05:35 --> 00:05:39
more specialized chips if you look at

00:05:37 --> 00:05:41
your smartphone you have a video

00:05:38 --> 00:05:42
processor comms processor all these are

00:05:40 --> 00:05:44
the things maybe you will get more

00:05:41 --> 00:05:46
specialized chips and keeping Moore's

00:05:43 --> 00:05:49
law going for another few decades yeah

00:05:46 --> 00:05:51
and I think it's possible that that it's

00:05:48 --> 00:05:53
going to continue I believe there's a

00:05:50 --> 00:05:55
seven nanometer node target

00:05:52 --> 00:05:58
from Intel the cost is monumental and

00:05:54 --> 00:05:59
right a point a very significant

00:05:57 --> 00:06:00
diminishing returns and so what's

00:05:58 --> 00:06:03
happened in the industry over the past

00:05:59 --> 00:06:05
five years or so is just relying on

00:06:02 --> 00:06:07
brute force acceleration through

00:06:04 --> 00:06:09
improvements at the hardware level at

00:06:06 --> 00:06:10
he a at the at the integrated circuit

00:06:08 --> 00:06:12
level have kind of slowed down and

00:06:09 --> 00:06:14
people have looked for other ways to

00:06:11 --> 00:06:15
accelerate data processing and one

00:06:13 --> 00:06:17
ngineering right here is that people

00:06:14 --> 00:06:19
confuse Moore's law with Dennard scaling

00:06:16 --> 00:06:20
you know some Dennard scaling is a law

00:06:18 --> 00:06:22
of the sort of physical law around

00:06:19 --> 00:06:25
transistors getting some physical law

00:06:21 --> 00:06:26
but physical like the pattern of packing

00:06:24 --> 00:06:29
more transistors into a smaller space

00:06:25 --> 00:06:31
whereas moore's law really the spirit of

00:06:28 --> 00:06:32
Moore's law is an economic principle yes

00:06:30 --> 00:06:35
which is when the computing industry

00:06:31 --> 00:06:38
really cares about something and the

00:06:34 --> 00:06:39
conomic engine gets going

00:06:37 --> 00:06:41
things tend to get better very quickly

00:06:38 --> 00:06:43
and so you see this with networking you

00:06:40 --> 00:06:45
see this with storage you see this sort

00:06:42 --> 00:06:46
of kind of across the board right one

00:06:44 --> 00:06:47
thing happening now is the computing

00:06:45 --> 00:06:49
industry is getting very excited about

00:06:46 --> 00:06:51
hings like machine learning and then

00:06:48 --> 00:06:52
there's people like you working on kind

00:06:50 --> 00:06:55
of the next generation of things like

00:06:51 --> 00:06:57
quantum computers and so you know if you

00:06:54 --> 00:06:59
think of it Moore's law kind of writ

00:06:56 --> 00:07:01
largely it's this broader principle that

00:06:58 --> 00:07:05
like this whole broad system of

00:07:00 --> 00:07:07
capitalism plus research plus you know

00:07:04 --> 00:07:10
lots of smart people plus critical mass

00:07:06 --> 00:07:12
of ideas plus a whole bunch of other

00:07:09 --> 00:07:15
things has led to just this very very

00:07:11 --> 00:07:17
steady kind of rate of improvement yeah

00:07:14 --> 00:07:18
and what we're seeing now is that

00:07:16 --> 00:07:21
quantum computing is getting pulled into

00:07:17 --> 00:07:23
that into that ecosystem is beginning to

00:07:20 --> 00:07:25
be driven by the same the same economic

00:07:22 --> 00:07:27
forces that have been driving other

00:07:24 --> 00:07:29
forms of Technology thus far and

00:07:26 --> 00:07:31
so what's happened right now as a result

00:07:28 --> 00:07:32
of all this economic pressure on the

00:07:30 --> 00:07:34
semiconductor industry there's

00:07:31 --> 00:07:37
effectively a sort of Cambrian explosion

00:07:33 --> 00:07:38
happening because companies can you know

00:07:36 --> 00:07:40
invest ten million dollars in

00:07:37 --> 00:07:43
manufacturing infrastructure and build

00:07:39 --> 00:07:45
individual chips that are close to

00:07:42 --> 00:07:47
rivaling the capacity of an entire

00:07:44 --> 00:07:49
supercomputer and that supercomputer the

00:07:46 --> 00:07:50
chips and that were built on a four

00:07:48 --> 00:07:51
billion dollar fact and it's not just

00:07:49 --> 00:07:53
quantum computing is really going to

00:07:50 --> 00:07:55
drive another acceleration of the pace

00:07:52 --> 00:07:57
of advance in computing capability it's

00:07:54 --> 00:07:58
also neuromorphic and we're talking

00:07:56 --> 00:08:00
about neuromorphic chips in individual

00:07:57 --> 00:08:02
handsets being available soon for

00:07:59 --> 00:08:04
machine learning NVIDIA has built an

00:08:01 --> 00:08:06
incredible business around GPUs which

00:08:03 --> 00:08:09
really kind of owns a

00:08:05 --> 00:08:11
parallelization of tasks across a count

00:08:08 --> 00:08:13
a small number of processors hundreds or

00:08:10 --> 00:08:16
thousands of processors and a single die

00:08:12 --> 00:08:18
and then obviously FPGA based computing

00:08:15 --> 00:08:20
is a very Singh has been a significant

00:08:17 --> 00:08:23
advance as well with you know Microsoft

00:08:19 --> 00:08:26
embedding embedding FPGA in in Azure

00:08:22 --> 00:08:27
cloud servers as well yeah so modern

00:08:25 --> 00:08:29
computing has evolved to such an

00:08:26 --> 00:08:30
incredible level of performance it's

00:08:28 --> 00:08:33
really shaped the world but ultimately

00:08:29 --> 00:08:35
there is a conversation that is not

00:08:32 --> 00:08:38
happening today around all the things

00:08:34 --> 00:08:40
that computers do not do and well our

00:08:37 --> 00:08:43
you know the our laptops and our super

00:08:39 --> 00:08:45
computers and and Amazon Web Services is

00:08:42 --> 00:08:47
our amazing computing resources there

00:08:44 --> 00:08:50
are a bunch of things that they simply

00:08:46 --> 00:08:51
cannot solve and the reason that's the

00:08:49 --> 00:08:53
case is because they compute

00:08:50 --> 00:08:55
they operate in a manner that is very

00:08:52 --> 00:08:57
almost very very dumb in a sense

00:08:54 --> 00:08:59
they map information into digital binary

00:08:56 --> 00:09:00
and there's nothing in the universe that

00:08:58 --> 00:09:02
computes in a similar manner except for

00:08:59 --> 00:09:05
our own computing technology today and

00:09:01 --> 00:09:07
ultimately the universe itself in nature

00:09:04 --> 00:09:08
at the lowest level operates on quantum

00:09:06 --> 00:09:11
echanics and that's kind of the Machine

00:09:07 --> 00:09:13
language that nature uses so tell us

00:09:10 --> 00:09:15
what is quantum computing and maybe if

00:09:12 --> 00:09:17
you could go back a little bit or 100

00:09:14 --> 00:09:18
years or so when I like just briefly

00:09:16 --> 00:09:20
I'll talk about if you could the the

00:09:17 --> 00:09:22
kind of history of quantum physics and

00:09:19 --> 00:09:23
how that leads to quantum computing so

00:09:21 --> 00:09:25
quantum mechanics is a theory that's now

00:09:22 --> 00:09:27
over a hundred years old it was

00:09:24 --> 00:09:30
developed in the first two decades of

00:09:26 --> 00:09:31
the of the 20th century and for a long

00:09:29 --> 00:09:33
time it was really instrumental in

00:09:30 --> 00:09:35
understanding nature for very long time

00:09:32 --> 00:09:37
but is now at the point where we are

00:09:34 --> 00:09:39
able to build machines that explicitly

00:09:36 --> 00:09:41
behave according to the laws of quantum

00:09:38 --> 00:09:43
echanics rather than classical

00:09:40 --> 00:09:46
Newtonian physics and we're able to

00:09:42 --> 00:09:47
control those systems in the laboratory

00:09:45 --> 00:09:50
and we're able to build artificial

00:09:46 --> 00:09:52
quantum systems on a chip and to control

00:09:49 --> 00:09:54
the quantum mechanical states of those

00:09:51 --> 00:09:58
devices so what quantum computing really

00:09:53 --> 00:10:00
comes down to is encoding information in

00:09:57 --> 00:10:02
quantum mechanical states of nature that

00:09:59 --> 00:10:05
we can control and deterministically

00:10:01 --> 00:10:08
steer to represent data in a computation

00:10:04 --> 00:10:11
and why is representing data in a

00:10:07 --> 00:10:15
quantum particle the quantum state why

00:10:10 --> 00:10:17
is that advantageous to the traditional

00:10:14 --> 00:10:19
method there's really two core reasons

00:10:16 --> 00:10:21
that it comes down to the first is that

00:10:18 --> 00:10:24
quantum mechanics quantum mechanics is a

00:10:20 --> 00:10:26
continuous theory and quantum

00:10:23 --> 00:10:27
variables are continuous variables so

00:10:25 --> 00:10:29
what quantum computing allows you to do

00:10:26 --> 00:10:32
is to compute with continuous variables

00:10:28 --> 00:10:37
rather than digital binary so any any

00:10:31 --> 00:10:37
fraction from 0 to 1 as opposed to

00:10:37 --> 00:10:43
just two digits yeah yeah

00:10:41 --> 00:10:45
exactly and the second is that the

00:10:42 --> 00:10:47
number of such variables that we have

00:10:44 --> 00:10:50
access to to encode information in a

00:10:47 --> 00:10:53
quantum system grows as an exponential

00:10:49 --> 00:10:54
function of the number of quantum bits

00:10:52 --> 00:10:57
on the chip this is completely different

00:10:53 --> 00:10:58
han how traditional computing works so

00:10:56 --> 00:11:00
if you have a if you have a chip with a

00:10:57 --> 00:11:02
million transistors on it and you

00:10:59 --> 00:11:03
add one more transistor you go to a

00:11:01 --> 00:11:05
million-in-one then you have a part per

00:11:02 --> 00:11:07
million performance increase in that

00:11:04 --> 00:11:09
chip roughly speaking in the best-case

00:11:06 --> 00:11:10
scenario and with a quantum computer if

00:11:08 --> 00:11:13
you have if you have a hundred qubits

00:11:09 --> 00:11:15
and you add one more you don't have a 1%

00:11:12 --> 00:11:17
performance increase you double the

00:11:14 --> 00:11:19
performance and that persists

00:11:16 --> 00:11:21
independent of the memory size so every

00:11:18 --> 00:11:23
quantum bit you add to to the system

00:11:20 --> 00:11:25
doubles doubles the number of continuous

00:11:22 --> 00:11:26
variables which we have access and what

00:11:24 --> 00:11:29
it means is what appear to be

00:11:25 --> 00:11:31
rudimentary quantum mechanical devices

00:11:28 --> 00:11:33
can encode a tremendous amount of

00:11:30 --> 00:11:36
information and can be used to compute

00:11:32 --> 00:11:37
things that are physically impossible to

00:11:35 --> 00:11:39
compute not only with today's super

00:11:36 --> 00:11:40
computers but with any foreseeable

00:11:38 --> 00:11:42
supercomputer that we're going to be

00:11:39 --> 00:11:43
able to build in our lifetimes or anyone

00:11:41 --> 00:11:46
lse's lifetime what are some examples

00:11:42 --> 00:11:48
of computational problems that you could

00:11:45 --> 00:11:49
solve with a quantum computer and you

00:11:47 --> 00:11:51
couldn't with a classical computer I

00:11:48 --> 00:11:54
think there's really two categories that

00:11:50 --> 00:11:56
we're seeing today where this is going

00:11:53 --> 00:11:58
to be taken up first for practical

00:11:55 --> 00:12:01
computing applications in the first is

00:11:57 --> 00:12:02
you know very naturally derives from

00:12:00 --> 00:12:05
what computers are ultimately that's in

00:12:01 --> 00:12:07
computational chemistry so in that in

00:12:04 --> 00:12:09
that world you're using a quantum

00:12:06 --> 00:12:11
computer to to simulate and understand

00:12:08 --> 00:12:13
another another system that is itself

00:12:10 --> 00:12:16
intrinsically quantum mechanical things

00:12:12 --> 00:12:18
like small molecules or materials and

00:12:15 --> 00:12:19
ultimately what that's going to allow us

00:12:17 --> 00:12:22
to do is just get a much deeper

00:12:18 --> 00:12:23
understanding of how how different

00:12:21 --> 00:12:26
molecular species are generated what

00:12:22 --> 00:12:28
properties they have in ways that are

00:12:25 --> 00:12:29
physically impossible to explore today

00:12:27 --> 00:12:32
because the combinatoric

00:12:28 --> 00:12:34
of molecular spaces is is extremely

00:12:31 --> 00:12:36
large it turns out that those quantum at

00:12:33 --> 00:12:37
hose those equations basically the

00:12:35 --> 00:12:39
Schrodinger equation which describe

00:12:36 --> 00:12:41
systems at the quantum mechanical level

00:12:38 --> 00:12:43
is extremely hard to solve on even on a

00:12:40 --> 00:12:45
large scale classical supercomputer we

00:12:42 --> 00:12:47
can write down the equations we know

00:12:44 --> 00:12:49
hat the equations you know we know how

00:12:46 --> 00:12:51
they behave we simply cannot solve

00:12:48 --> 00:12:53
them for systems of meaningful sizes a

00:12:50 --> 00:12:55
small molecule was something like 50

00:12:52 --> 00:12:57
atoms it is almost impossible to compute

00:12:54 --> 00:12:59
the exact molecular structure or the

00:12:56 --> 00:13:01
xact electronics just takes the it's

00:12:58 --> 00:13:04
just if you sort of graph the computing

00:13:00 --> 00:13:05
required with the number of molecules it

00:13:03 --> 00:13:07
just gets big it's unfeasible very

00:13:04 --> 00:13:09
quickly is the reason is because that

00:13:06 --> 00:13:11
small system is to some extent a small

00:13:08 --> 00:13:13
quantum computer and it behaves

00:13:10 --> 00:13:14
according to the same laws that give a

00:13:12 --> 00:13:15
quantum computer it's

00:13:13 --> 00:13:17
power so there's another area I talked a

00:13:14 --> 00:13:18
little bit about earlier about corner

00:13:16 --> 00:13:20
computing allows you to encode

00:13:17 --> 00:13:22
information and continuous variables and

00:13:19 --> 00:13:24
we're starting to discover ways in which

00:13:21 --> 00:13:25
we can take this compute power and map

00:13:23 --> 00:13:27
it on to optimization problems that

00:13:24 --> 00:13:30
underpin a lot of a lot of machine

00:13:26 --> 00:13:31
learning and over the next few years the

00:13:29 --> 00:13:33
quantum hardware that we're building is

00:13:30 --> 00:13:35
getting better at such a fast rate that

00:13:32 --> 00:13:37
we're reaching this point where the

00:13:34 --> 00:13:39
bottleneck is going to be understanding

00:13:36 --> 00:13:41
the best algorithms to run on those

00:13:38 --> 00:13:43
machines to get the most value out of

00:13:40 --> 00:13:45
that given compute resource that the

00:13:42 --> 00:13:47
quantum chip provides and part of what

00:13:44 --> 00:13:50
hat implies is that you need to build a

00:13:46 --> 00:13:53
very sophisticated classical computer

00:13:49 --> 00:13:54
around the corner' computer to to both

00:13:52 --> 00:13:56
leverage its resources and to offload

00:13:53 --> 00:13:58
anything from that corner computer that

00:13:55 --> 00:14:00
can be offloaded so that the computer is

00:13:57 --> 00:14:01
doing the things that only it can do so

00:13:59 --> 00:14:03
there are two classes of applications

00:14:00 --> 00:14:06
one is our systems in nature which

00:14:02 --> 00:14:10
themselves have quantum properties and

00:14:05 --> 00:14:12
the second are kind of more you know

00:14:09 --> 00:14:14
classical computing problems that are

00:14:11 --> 00:14:17
just are so difficult so complex that

00:14:13 --> 00:14:18
hey are unfeasible for current systems

00:14:16 --> 00:14:23
and so that would include things like

00:14:17 --> 00:14:24
you know machine learning and op there

00:14:22 --> 00:14:25
are kinds of optimization problems

00:14:23 --> 00:14:27
yeah and large-scale optimization

00:14:24 --> 00:14:28
problems now I'm always very careful to

00:14:26 --> 00:14:30
predict with the applications of a

00:14:27 --> 00:14:32
fundamentally new and very profound

00:14:29 --> 00:14:33
technology are going to be there's

00:14:31 --> 00:14:34
always stories you know retroactive

00:14:32 --> 00:14:36
stories you're gonna be able to tell

00:14:33 --> 00:14:37
about about the lack of vision that

00:14:35 --> 00:14:41
people show when you go back to

00:14:36 --> 00:14:42
technology look at like the early 1980s

00:14:40 --> 00:14:44
everyone talked about how the only use

00:14:41 --> 00:14:46
for computers was like recipes and like

00:14:43 --> 00:14:47
eping your recipes and they had a

00:14:45 --> 00:14:49
whole bunch of predictions if you look

00:14:46 --> 00:14:50
at the old like ads or hidden very few

00:14:48 --> 00:14:52
of them predicted Facebook and Wikipedia

00:14:49 --> 00:14:54
nd YouTube

00:14:51 --> 00:14:56
so we use all the time so I would argue

00:14:53 --> 00:14:58
that the past 30 years have shown us

00:14:55 --> 00:15:01
that humans are amazing for learning how

00:14:57 --> 00:15:05
to use use computers to the to the large

00:15:00 --> 00:15:07
ntire life's and when we as we build

00:15:04 --> 00:15:10
these systems and as the industry itself

00:15:06 --> 00:15:12
develops I think one of the things that

00:15:09 --> 00:15:14
I'm most excited about is watching the

00:15:11 --> 00:15:15
unforeseen applications start to

00:15:13 --> 00:15:18
materialize well there's kind of a

00:15:14 --> 00:15:19
yin-yang here right where so much work

00:15:17 --> 00:15:20
if you go to compute typical for your

00:15:18 --> 00:15:22
science department they're people

00:15:19 --> 00:15:23
working on better chips and things like

00:15:21 --> 00:15:24
this they're also some people working on

00:15:22 --> 00:15:25
algorithms

00:15:23 --> 00:15:26
they're all working on algorithms for

00:15:24 --> 00:15:28
classical computer has never been a few

00:15:25 --> 00:15:31
people working on quantum algorithm for

00:15:27 --> 00:15:32
the most part they haven't been focused

00:15:30 --> 00:15:34
on AI because they don't have those

00:15:31 --> 00:15:36
computers to work on and tests on yeah

00:15:33 --> 00:15:38
and so therefore you don't know even

00:15:35 --> 00:15:39
what the algorithms what even that layer

00:15:37 --> 00:15:41
is gonna look like like the programming

00:15:38 --> 00:15:43
languages and the algorithms and

00:15:40 --> 00:15:46
everything else let alone the end user

00:15:42 --> 00:15:48
applications right so we know enough to

00:15:45 --> 00:15:51
know how much we don't know and people

00:15:47 --> 00:15:52
have developed some early applications

00:15:50 --> 00:15:55
that will be able to run in very early

00:15:51 --> 00:15:57
in near term quantum hardware and these

00:15:54 --> 00:15:58
are predominantly quantum classical

00:15:56 --> 00:16:00
hybrid algorithms where you use a

00:15:57 --> 00:16:02
quantum computer to provide

00:15:59 --> 00:16:04
directionality into an optimization loop

00:16:01 --> 00:16:06
that you're running in conjunction on

00:16:03 --> 00:16:08
classical hardware and that's really

00:16:05 --> 00:16:10
exciting application because it it

00:16:07 --> 00:16:11
really puts the quantum processor in a

00:16:09 --> 00:16:14
position where it's doing the thing that

00:16:10 --> 00:16:16
it's exceptionally good at and in insane

00:16:13 --> 00:16:18
for the classical computing hardware you

00:16:15 --> 00:16:21
have a little bit like a CPU GPU and

00:16:17 --> 00:16:24
then you'll have your exact quantum

00:16:20 --> 00:16:26
exactly think about quantum computing as

00:16:23 --> 00:16:28
providing a new kind of computing

00:16:25 --> 00:16:30
capability that will be deployed in a

00:16:27 --> 00:16:31
heterogeneous computing environment and

00:16:29 --> 00:16:34
we've worked really hard to develop

00:16:30 --> 00:16:36
software that allows us to integrate our

00:16:33 --> 00:16:38
quantum punic capabilities seamlessly

00:16:35 --> 00:16:39
into existing classical cloud

00:16:37 --> 00:16:41
infrastructure we've developed an

00:16:38 --> 00:16:42
instruction language it allows you to

00:16:40 --> 00:16:44
write some simple programs that target

00:16:41 --> 00:16:46
both classical and quantum computers in

00:16:43 --> 00:16:47
the same in the same instruction so

00:16:45 --> 00:16:49
where are we on this you've been talk

00:16:46 --> 00:16:51
about quantum Peters for a long time and

00:16:48 --> 00:16:53
there's been various debates as to you

00:16:50 --> 00:16:54
know how it's progressing what's the

00:16:52 --> 00:16:56
state of the world in quantum computing

00:16:53 --> 00:16:58
right now on computing is arguably the

00:16:55 --> 00:17:00
most sophisticated technology that

00:16:57 --> 00:17:02
humans have ever developed we're able to

00:16:59 --> 00:17:04
leverage a physical theory that we as

00:17:01 --> 00:17:06
individuals that never see on a

00:17:03 --> 00:17:07
day-to-day basis because the world

00:17:05 --> 00:17:09
averages over all of that kind of

00:17:07 --> 00:17:11
quantum mechanical behavior and we just

00:17:08 --> 00:17:14
get the Newtonian universe and so it's

00:17:10 --> 00:17:16
extremely hard to build these these

00:17:13 --> 00:17:17
chips in to have the quantum mechanical

00:17:15 --> 00:17:19
effects that you utilize in a

00:17:16 --> 00:17:22
computation to have them persist for for

00:17:18 --> 00:17:24
a meaningful amount of time and that was

00:17:21 --> 00:17:26
the real bottleneck in the field for a

00:17:23 --> 00:17:27
long time this is coherence this is

00:17:25 --> 00:17:29
quantum coherence when I started my PhD

00:17:26 --> 00:17:30
in 2002 I think there's one or two

00:17:28 --> 00:17:32
groups in the world that had ever built

00:17:29 --> 00:17:35
and demonstrated a superconducting qubit

00:17:31 --> 00:17:36
with a measurable coherence time so

00:17:34 --> 00:17:38
you the fundamental elements of a

00:17:35 --> 00:17:40
quantum computer and it's used both for

00:17:37 --> 00:17:42
the mathematical abstraction that

00:17:39 --> 00:17:44
algorithms theorists can use to develop

00:17:41 --> 00:17:46
an idealized two-level quantum system

00:17:43 --> 00:17:48
that has two physical two available

00:17:45 --> 00:17:50
states at the same time a qubit is also

00:17:47 --> 00:17:52
used to represent the physical

00:17:49 --> 00:17:54
instantiation of that of that two-level

00:17:51 --> 00:17:55
quantum system and this is very

00:17:53 --> 00:17:56
different than how we talk about

00:17:54 --> 00:17:58
classical computing in classical

00:17:55 --> 00:18:01
computing we talk about bits and

00:17:57 --> 00:18:02
transistors it is the logical element

00:18:00 --> 00:18:04
he transistors are physical I'm an

00:18:01 --> 00:18:07
executive it is represents both the

00:18:03 --> 00:18:09
nomenclature that we have today it uses

00:18:06 --> 00:18:12
qubit in phimosis in this kind of double

00:18:08 --> 00:18:15
mat double meaning and so we we use

00:18:11 --> 00:18:16
superconducting qubits to represent to

00:18:14 --> 00:18:18
manifest these two-level quantum systems

00:18:15 --> 00:18:20
that we use to encode information when I

00:18:17 --> 00:18:22
started my PhD at Yale the field was at

00:18:19 --> 00:18:24
a state where quantum computing was the

00:18:21 --> 00:18:26
xcuse to do this fascinating physics

00:18:23 --> 00:18:27
research but there are very few people

00:18:25 --> 00:18:29
who were thinking seriously at that

00:18:26 --> 00:18:31
stage about building a real quantum

00:18:28 --> 00:18:33
computer we spent about 10 years as a

00:18:30 --> 00:18:35
community as a whole really

00:18:32 --> 00:18:37
demonstrating that we could increase the

00:18:34 --> 00:18:39
quantum coherent lifetime of the devices

00:18:36 --> 00:18:42
to the point where they could be used

00:18:38 --> 00:18:44
for a computation and then learning how

00:18:41 --> 00:18:45
to solve the fundamental problems about

00:18:43 --> 00:18:47
putting more and more quantum bits on a

00:18:44 --> 00:18:50
chip and so where the field is today is

00:18:46 --> 00:18:52
that we're really working on packing

00:18:49 --> 00:18:54
enough quantum bits onto a single chip

00:18:51 --> 00:18:57
where you can run a useful computation

00:18:53 --> 00:18:59
and to simultaneously increase the

00:18:56 --> 00:19:00
quality of the quantum boolean

00:18:58 --> 00:19:02
operations that you do during the

00:18:59 --> 00:19:04
computation so the error rates are

00:19:01 --> 00:19:06
sufficiently low that the computations

00:19:03 --> 00:19:08
are reliable so how big is the quantum

00:19:05 --> 00:19:09
computing industry / for research world

00:19:07 --> 00:19:11
right now like how many people are

00:19:08 --> 00:19:13
working on these kinds of problems as a

00:19:10 --> 00:19:14
field of physics research the the

00:19:12 --> 00:19:16
community has grown substantially over

00:19:13 --> 00:19:18
the past 10 years or so there's probably

00:19:15 --> 00:19:20
thousands of people around the world

00:19:17 --> 00:19:22
that would identify as researchers in

00:19:19 --> 00:19:24
quantum computing in terms of real

00:19:21 --> 00:19:26
effort to build practical quantum

00:19:23 --> 00:19:28
computers it's a much smaller universe

00:19:25 --> 00:19:30
and of course iBM has a very significant

00:19:27 --> 00:19:32
effort in this Google has a significant

00:19:29 --> 00:19:34
effort and there's an there's amazing

00:19:31 --> 00:19:37
scientists and researchers in both of

00:19:33 --> 00:19:39
these the these places Microsoft more

00:19:36 --> 00:19:40
cently has gotten involved and has

00:19:38 --> 00:19:42
tarted to make significant investments

00:19:39 --> 00:19:43
in quantum computing and then around the

00:19:41 --> 00:19:45
periphery there are smaller

00:19:42 --> 00:19:48
organizations exist in the ecosystem

00:19:44 --> 00:19:50
that are doing some combination of

00:19:47 --> 00:19:52
research and in some cases building

00:19:49 --> 00:19:54
software tools or working on developing

00:19:51 --> 00:19:56
applet potential applications for long

00:19:53 --> 00:19:59
term corn computing quantum computing is

00:19:55 --> 00:20:00
very much a global effort there are

00:19:58 --> 00:20:02
significant efforts in Australia and in

00:19:59 --> 00:20:04
Western Europe extraordinary people at

00:20:01 --> 00:20:07
ETH Zurich at Technical University of

00:20:03 --> 00:20:09
Delft and all over the place obviously

00:20:06 --> 00:20:12
can't name them all there there's also

00:20:08 --> 00:20:14
signs of significant progress in China

00:20:11 --> 00:20:16
who recently saw a paper with a multi

00:20:13 --> 00:20:19
qubit experiment that was successfully

00:20:15 --> 00:20:21
run by a Chinese group this is a global

00:20:18 --> 00:20:22
race in many in many ways and quantum

00:20:20 --> 00:20:24
computing is going to reshape the world

00:20:21 --> 00:20:25
in a significant way I think because the

00:20:23 --> 00:20:27
impact of this technology will be

00:20:24 --> 00:20:29
profound and be felt across industries

00:20:26 --> 00:20:31
and around the world there's going to be

00:20:28 --> 00:20:34
another Silicon Valley where the quantum

00:20:30 --> 00:20:35
ecosystem is it kind of comes up we

00:20:33 --> 00:20:37
often use that term everyday and it

00:20:34 --> 00:20:38
doesn't sink in that hey it's called

00:20:36 --> 00:20:40
Silicon Valley because of silicon

00:20:37 --> 00:20:42
microchips so I picture a quantum

00:20:39 --> 00:20:43
computing company I imagine a bunch of

00:20:41 --> 00:20:46
physicists is that you know tell me

00:20:42 --> 00:20:48
about who works at Verde computing so we

00:20:45 --> 00:20:49
are a full-stack quantum computing

00:20:47 --> 00:20:52
company we design and manufacture

00:20:48 --> 00:20:55
quantum integrated circuits we integrate

00:20:51 --> 00:20:57
these quantum integrated circuits into a

00:20:54 --> 00:21:00
complex system that cools them and then

00:20:56 --> 00:21:04
operates them using a microwave an RF

00:20:59 --> 00:21:07
control system to to run computations on

00:21:03 --> 00:21:08
those on the on those chips and and then

00:21:06 --> 00:21:11
we have a software platform that

00:21:07 --> 00:21:12
connects up that corner computer to

00:21:10 --> 00:21:15
cloud infrastructure and allows you to

00:21:11 --> 00:21:16
run - run run quantum algorithms on that

00:21:14 --> 00:21:18
machine there's a lot of

00:21:15 --> 00:21:20
physicists physicists at various stages

00:21:17 --> 00:21:22
in their career we have what we call

00:21:19 --> 00:21:24
junior quantum engineers who are just

00:21:21 --> 00:21:26
coming out of college and really really

00:21:23 --> 00:21:28
great and brilliant young physics majors

00:21:25 --> 00:21:29
we have theoretical physicists

00:21:27 --> 00:21:31
experimental physicists we also have

00:21:28 --> 00:21:33
computational chemists we have a lot of

00:21:30 --> 00:21:35
technicians Electronics Technicians

00:21:32 --> 00:21:37
we've hired systems engineers from from

00:21:34 --> 00:21:39
Jet Propulsion lab and NASA we've hired

00:21:36 --> 00:21:41
FPGA developers from the aerospace

00:21:38 --> 00:21:44
industry who were building autonomous

00:21:40 --> 00:21:45
drones before it turns out that the kind

00:21:43 --> 00:21:47
of core technology problems at once

00:21:44 --> 00:21:49
needs to solve in order to build quantum

00:21:46 --> 00:21:51
computing are being solved in other

00:21:48 --> 00:21:52
places what doesn't exist all of those

00:21:50 --> 00:21:54
skills under one roof in one

00:21:51 --> 00:21:55
organization with all those people

00:21:53 --> 00:21:56
pulling on the same rope we have

00:21:54 --> 00:21:58
incredible business and people

00:21:55 --> 00:22:00
operations folks we have a lot of

00:21:57 --> 00:22:01
software engineers and there

00:21:59 --> 00:22:03
this is one of the most impactful things

00:22:00 --> 00:22:05
that a software engineer can work on

00:22:02 --> 00:22:07
today you have the opportunity to to

00:22:04 --> 00:22:09
make foundational contributions to an

00:22:06 --> 00:22:11
entirely new computing paradigm that

00:22:08 --> 00:22:13
will lead to fundamental advances in

00:22:10 --> 00:22:15
many different fields when do you think

00:22:12 --> 00:22:17
regular companies people will have

00:22:14 --> 00:22:19
access to quantum computers the idea is

00:22:16 --> 00:22:21
around neural networks and deep learning

00:22:18 --> 00:22:22
have been around for twenty thirty years

00:22:20 --> 00:22:24
people even trace the ideas back much

00:22:21 --> 00:22:26
earlier than that and ultimately from

00:22:23 --> 00:22:29
one perspective it was the availability

00:22:25 --> 00:22:31
of phalanx --is of GPUs over AWS that

00:22:28 --> 00:22:33
allowed this to really to really take

00:22:30 --> 00:22:35
hold because the number of folks who can

00:22:32 --> 00:22:37
contribute to improvements in lead from

00:22:34 --> 00:22:38
an algorithmic perspective was

00:22:36 --> 00:22:39
ignificantly increased quantum

00:22:37 --> 00:22:42
computing is at the early days where

00:22:38 --> 00:22:43
there's maybe a few hundred folks who

00:22:41 --> 00:22:44
are working on quantum algorithms around

00:22:42 --> 00:22:46
the world and I would argue that every

00:22:43 --> 00:22:47
software developer to some extent is

00:22:45 --> 00:22:50
working on better classical algorithms

00:22:46 --> 00:22:51
and over the next five years or so I

00:22:49 --> 00:22:53
think the number of folks who identify

00:22:50 --> 00:22:54
as quantum engineers or quantum software

00:22:52 --> 00:22:56
ngineers is going to go from

00:22:53 --> 00:22:58
approximately zero today to a meaningful

00:22:55 --> 00:23:00
number and that the progress on that

00:22:57 --> 00:23:03
front will really accelerate and we're

00:22:59 --> 00:23:04
ally focused now on on developing

00:23:02 --> 00:23:06
applications and working with early

00:23:03 --> 00:23:08
customers in these core application

00:23:05 --> 00:23:11
areas that we discussed and in really

00:23:07 --> 00:23:12
engaging with folks to to kind of kick

00:23:10 --> 00:23:14
off the flywheel of application

00:23:11 --> 00:23:15
development and discovery so like all

00:23:13 --> 00:23:17
computing platforms they'll be sort of

00:23:14 --> 00:23:20
this mutually reinforcing interaction

00:23:16 --> 00:23:22
between the computing platform and the

00:23:19 --> 00:23:24
software developers side and that hasn't

00:23:21 --> 00:23:25
begun yet until you get these things in

00:23:23 --> 00:23:26
people's hands and you see what they can

00:23:24 --> 00:23:28
do with them and all the inventive

00:23:25 --> 00:23:29
things they come up with exactly that

00:23:27 --> 00:23:30
flywheel won't start so it's quanta

00:23:28 --> 00:23:33
computing sounds like a very hard

00:23:29 --> 00:23:35
research problem and and it's not

00:23:32 --> 00:23:36
surprising that IBM and Google and

00:23:34 --> 00:23:39
universities are working on it how can a

00:23:35 --> 00:23:41
start-up possibly you know compete

00:23:38 --> 00:23:42
against these giant companies that's a

00:23:40 --> 00:23:45
great question and it's something that I

00:23:41 --> 00:23:46
've thought about a lot and you know

00:23:44 --> 00:23:47
before I started the company I looked

00:23:45 --> 00:23:49
around at the world and ultimately it's

00:23:46 --> 00:23:51
a kind of mission that is best served by

00:23:48 --> 00:23:54
building an organization from scratch

00:23:50 --> 00:23:56
where you can kind of hand select or

00:23:53 --> 00:23:58
curate the the DNA of the different the

00:23:55 --> 00:24:00
different organizations within that

00:23:57 --> 00:24:02
larger company you got to build to

00:23:59 --> 00:24:03
uniquely position it to solve that set

00:24:01 --> 00:24:06
of technology problems at this point in

00:24:02 --> 00:24:08
history and that opportunity to build a

00:24:05 --> 00:24:10
company from scratch is very hard and

00:24:07 --> 00:24:12
there's a chasm you have to cross to get

00:24:09 --> 00:24:13
here but if you can do it it gives you

00:24:11 --> 00:24:16
a compelling competitive

00:24:12 --> 00:24:17
against a larger existing incumbent

00:24:15 --> 00:24:19
organization whose quantum computing

00:24:16 --> 00:24:20
effort is not going to move the needle

00:24:18 --> 00:24:21
in their culture think of this in

00:24:19 --> 00:24:23
analogy to electric cars you know

00:24:20 --> 00:24:25
General Motors would build an electric

00:24:22 --> 00:24:27
ar and still there's got to be a Tesla

00:24:24 --> 00:24:30
nd eventually electric cars and hybrids

00:24:26 --> 00:24:32
are going to kind of be a technology as

00:24:29 --> 00:24:34
adopted across the industry but there's

00:24:31 --> 00:24:36
one electric car company there's one

00:24:33 --> 00:24:39
that matters there's an economic angle

00:24:35 --> 00:24:41
to this too and the economic angle is

00:24:38 --> 00:24:43
that quantum computing sounds hard but

00:24:40 --> 00:24:45
it is very much a you know we're

00:24:42 --> 00:24:47
knowledge workers and ultimately it's

00:24:44 --> 00:24:50
the knowledge of how to build this

00:24:46 --> 00:24:52
technology that sets you apart and that

00:24:49 --> 00:24:54
is not something that can be reproduced

00:24:51 --> 00:24:57
at this stage in the industry with mere

00:24:53 --> 00:24:59
scale an army of fabrication process

00:24:56 --> 00:25:01
engineers is useful only if you have the

00:24:58 --> 00:25:02
foundational knowledge about what it is

00:25:00 --> 00:25:04
you're trying to accomplish and how to

00:25:01 --> 00:25:07
diagnose whether you've done it or not

00:25:03 --> 00:25:09
okay so it's a persistent rumor I on the

00:25:06 --> 00:25:11
internet forums is that quantum

00:25:08 --> 00:25:13
computers will destroy you know all of

00:25:10 --> 00:25:14
our cryptographic systems what what do

00:25:12 --> 00:25:16
you think's gonna happen there what

00:25:13 --> 00:25:19
you're referring to is Shor's algorithm

00:25:15 --> 00:25:20
ultimately and in Iran in 1995 a

00:25:18 --> 00:25:23
mathematician at Bell Labs named Peter

00:25:19 --> 00:25:25
shor discovered an algorithm that if one

00:25:22 --> 00:25:26
could build a large-scale quantum

00:25:24 --> 00:25:29
computer one could run an algorithm that

00:25:25 --> 00:25:30
would that would be able to factor large

00:25:28 --> 00:25:32
numbers in polynomial time what that

00:25:29 --> 00:25:34
means is that you'd be able to threaten

00:25:31 --> 00:25:35
the standard encryption protocols that

00:25:33 --> 00:25:36
are used around the world from Wall

00:25:34 --> 00:25:38
Street to the battlefield

00:25:35 --> 00:25:40
we're probably 20 to 30 years away from

00:25:37 --> 00:25:42
having a machine that would really be

00:25:39 --> 00:25:45
able to run Shor's algorithm on on

00:25:41 --> 00:25:46
practically relevant problem sizes at

00:25:44 --> 00:25:48
some point in the future corner

00:25:45 --> 00:25:50
computers will be able to crack RSA

00:25:47 --> 00:25:51
encryption yeah and so the question

00:25:49 --> 00:25:53
really becomes what is a shelf life of

00:25:50 --> 00:25:55
your secrets is the blessings for the

00:25:52 --> 00:25:57
field because that discovery led to

00:25:54 --> 00:25:59
research investment from the government

00:25:56 --> 00:26:01
hat got the field started it's it's a

00:25:58 --> 00:26:04
curse to some extent because that

00:26:00 --> 00:26:06
application from my perspective is one

00:26:03 --> 00:26:07
of the least interesting it's not as

00:26:05 --> 00:26:09
interesting in relation to the other

00:26:06 --> 00:26:11
things that quantum computers are going

00:26:08 --> 00:26:12
to help us do ultimately the things that

00:26:10 --> 00:26:14
we get really excited about are using

00:26:11 --> 00:26:16
these machines to to build fundamentally

00:26:13 --> 00:26:19
more powerful artificial intelligence

00:26:15 --> 00:26:21
using these machines to to disrupt wet

00:26:18 --> 00:26:23
chemistry and to do simulation driven

00:26:20 --> 00:26:25
design in silico of new

00:26:22 --> 00:26:26
or new drugs this is going to

00:26:24 --> 00:26:28
significantly affect healthcare it's

00:26:25 --> 00:26:30
going to affect how we treat disease

00:26:27 --> 00:26:32
it's going to affect how we how we

00:26:29 --> 00:26:37
generate energy and how we how we feed

00:26:31 --> 00:26:37
ourselves as humans ok great thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
