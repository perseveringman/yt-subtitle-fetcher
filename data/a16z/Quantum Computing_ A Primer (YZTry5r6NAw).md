---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "YZTry5r6NAw"
title: "Quantum Computing: A Primer"
video_url: "https://www.youtube.com/watch?v=YZTry5r6NAw"
thumbnail_url: "https://i.ytimg.com/vi/YZTry5r6NAw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=YZTry5r6NAw"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-15T23:25:04.000Z"
upload_date: "2017-07-15"
duration_seconds: 1718
duration_human: "28:38"
view_count: 22523
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T16:27:38.557Z"
---

# Quantum Computing: A Primer

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=YZTry5r6NAw
- video_id: YZTry5r6NAw
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-15T23:25:04.000Z
- upload_date: 2017-07-15
- duration: 28:38
- view_count: 22523
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: #quantum computing, #distributed systems
- categories: Science & Technology

## Description

One of the key insights that legendary physicist and Nobel Prize laureate Richard Feynman had was that quantum mechanics (the branch of physics that deals with subatomic particles, uncertainty principle, and many other concepts beyond classic physics) is just way too complicated to simulate using traditional computers.
Nature, of course, can handle these complex calculations -- computers however can't do those same calculations (or would take a prohibitively long time and amount of resources to do so). But this isn't just about being able to do more with computers in a faster (or smaller) way: It's about solving problems that we couldn't solve with traditional computers; it's about a difference of kind not just degree.
So what is a quantum computer and "qubits" -- especially as compared to a traditional computer and bits? What is Grover's Algorithm? And besides speed of processing, what are some of the new applications that wouldn't have been possible before? From how traditional computers work and quantum computers will work to why this all matters, a16z Deal and Research team head Frank Chen walks us through the basics of quantum computing in this slide presentation. And even though may feel like you finally understand after watching this, just remember what Feynman once said: "If you think you understand quantum mechanics then you don't understand quantum mechanics."
[for sources, recommended readings, and image credits, please visit a16z.com]

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:08
hello this is Frank Chen from the a6c

00:00:04 --> 00:00:11
deal and research team one of the ways

00:00:07 --> 00:00:13
that I think about my job is that my

00:00:10 --> 00:00:15
team and I are off scouting the future

00:00:12 --> 00:00:16
we're trying to understand what the big

00:00:14 --> 00:00:19
breakthroughs right around the corner

00:00:15 --> 00:00:22
are that will turn into great startups

00:00:18 --> 00:00:24
great products for you and me and one of

00:00:21 --> 00:00:27
the things that we've found is around

00:00:23 --> 00:00:29
Quantum Computing so today I'd like to

00:00:26 --> 00:00:32
give the scouts report on what's

00:00:28 --> 00:00:34
happening in this fascinating field of

00:00:31 --> 00:00:37
computer science Material Science

00:00:33 --> 00:00:40
mathematics physics and it's

00:00:36 --> 00:00:43
mind-blowing so let's get started so you

00:00:39 --> 00:00:45
know what I love I love it when

00:00:42 --> 00:00:47
politicians teach computer science it's

00:00:44 --> 00:00:50
a real revenge of the nerd's moment for

00:00:46 --> 00:00:52
me to see world leaders talking about

00:00:49 --> 00:00:56
he big impacts that computer science is

00:00:51 --> 00:00:58
going to have on our society and so

00:00:55 --> 00:01:01
let's watch the prime minister of Canada

00:00:57 --> 00:01:03
Justin Trudeau work some magic

00:01:00 --> 00:01:07
this was from a speech that he gave in

00:01:03 --> 00:01:10
April 2016 at the perimeter Institute

00:01:06 --> 00:01:12
for theoretical physics in watero and

00:01:09 --> 00:01:14
it's safe to say he won the internet

00:01:11 --> 00:01:18
hat day very simply normal computers

00:01:13 --> 00:01:18
work uh by

00:01:18 --> 00:01:24
uh don't don't interrupt me when you

00:01:21 --> 00:01:25
walk out of here you will know more no

00:01:23 --> 00:01:27
some of you will know far less about

00:01:24 --> 00:01:29
Quantum Computing but most of you normal

00:01:26 --> 00:01:32
computers work either there's power

00:01:28 --> 00:01:35
going through a wire or not it's one or

00:01:31 --> 00:01:37
a zero they're binary systems uh what

00:01:34 --> 00:01:40
Quantum states allow for is much more

00:01:36 --> 00:01:42
complex information to be encoded into a

00:01:39 --> 00:01:45
single bit regular computer bit is

00:01:41 --> 00:01:47
either a one or zero on or off a Quantum

00:01:44 --> 00:01:49
State can be much more complex than that

00:01:46 --> 00:01:51
because as we know things can be both

00:01:48 --> 00:01:54
particle and wave at the same times and

00:01:50 --> 00:01:56
the uncertainty around Quantum uh States

00:01:53 --> 00:01:59
allows us to encode more information

00:01:55 --> 00:02:01
into a much uh smaller computer so uh

00:01:58 --> 00:02:03
that's what's exciting punch of

00:02:00 --> 00:02:06
computing and that's what

00:02:02 --> 00:02:06
we

00:02:07 --> 00:02:14
um so wasn't that

00:02:10 --> 00:02:17
great that speech reminded me a little

00:02:13 --> 00:02:20
of when President Obama visited Google

00:02:16 --> 00:02:21
in January of 2008 and Eric Schmidt

00:02:19 --> 00:02:25
asked him what the most efficient way to

00:02:20 --> 00:02:27
sort a million 32-bit integers was so if

00:02:24 --> 00:02:28
you miss that go look it up on YouTube

00:02:26 --> 00:02:31
another fun moment when political

00:02:27 --> 00:02:34
eaders are teaching computer science

00:02:30 --> 00:02:36
now if you listen to the Prime Minister

00:02:33 --> 00:02:39
he implied that what we were trying to

00:02:35 --> 00:02:41
do with quantum computers was make

00:02:38 --> 00:02:44
smaller computers and while he didn't

00:02:40 --> 00:02:46
say anything technically inaccurate I

00:02:43 --> 00:02:48
think that misses the point a little so

00:02:45 --> 00:02:50
we're not really trying to make smaller

00:02:47 --> 00:02:52
computers so what are we trying to do

00:02:49 --> 00:02:55
with quantum computers so understand

00:02:51 --> 00:02:57
that let's go back to the

00:02:54 --> 00:03:00
beginnings so I'm going to pick up the

00:02:56 --> 00:03:02
story with this fine looking fellow his

00:02:59 --> 00:03:04
name name happens to be Richard feeman

00:03:01 --> 00:03:06
most physicists would consider him one

00:03:03 --> 00:03:08
of the top 10 most influential

00:03:05 --> 00:03:10
physicists of all time he helped

00:03:07 --> 00:03:14
esigned the atomic bomb at the

00:03:09 --> 00:03:17
Manhattan Project he laid down standard

00:03:13 --> 00:03:19
notation for how Quantum interactions

00:03:16 --> 00:03:21
work and turned out to be a great Bongo

00:03:18 --> 00:03:23
drummer if you want to look that up on

00:03:20 --> 00:03:24
YouTube and oh by the way he was on the

00:03:22 --> 00:03:28
commission that figured out why the

00:03:23 --> 00:03:30
space shuttle Challenger exploded so

00:03:27 --> 00:03:34
Richard had a bigger brain than most

00:03:30 --> 00:03:36
people and he was fascinated by the

00:03:33 --> 00:03:39
physics of very very small objects so

00:03:35 --> 00:03:43
think of these objects as atoms or

00:03:38 --> 00:03:46
electrons or photons and what happens at

00:03:42 --> 00:03:48
his very small small tiny scale is that

00:03:45 --> 00:03:52
nature gets

00:03:47 --> 00:03:55
weird and so because nature gets weird

00:03:51 --> 00:03:57
what does every Quantum physicist want

00:03:54 --> 00:04:01
o try to understand the nature of

00:03:56 --> 00:04:03
nature at this scale well what every

00:04:00 --> 00:04:06
Quantum physicist wants is a particle

00:04:02 --> 00:04:08
accelerator what a particle accelerator

00:04:05 --> 00:04:11
does is lets the quantum physicist run

00:04:07 --> 00:04:14
experiments about subatomic and atomic

00:04:10 --> 00:04:17
scale objects it turns out we have one

00:04:13 --> 00:04:20
right in our backyard so our offices at

00:04:16 --> 00:04:22
a16z are in Meno Park right on the tip

00:04:19 --> 00:04:24
of the Stanford campus and in our

00:04:21 --> 00:04:26
backyard literally you will see the

00:04:23 --> 00:04:28
rooftop of the Stanford linear

00:04:25 --> 00:04:31
accelerator which is one of these

00:04:27 --> 00:04:33
ginormous devices designed to acceler at

00:04:30 --> 00:04:35
Atomic and subatomic particles and

00:04:32 --> 00:04:38
Collide them into each other and this is

00:04:34 --> 00:04:39
the way that we run physics experiments

00:04:37 --> 00:04:42
at this

00:04:38 --> 00:04:44
cale here you see a picture of an even

00:04:41 --> 00:04:47
bigger accelerator this one's actually

00:04:43 --> 00:04:49
round and not linear this is the Large

00:04:46 --> 00:04:51
Hadron Collider operated by CERN just

00:04:49 --> 00:04:54
outside of Geneva

00:04:50 --> 00:04:57
Switzerland the Large Hadron Collider is

00:04:53 --> 00:04:59
27 kilometers around and that makes it

00:04:56 --> 00:05:01
he world's biggest machine there is no

00:04:58 --> 00:05:03
machine bigger than this so what is

00:05:00 --> 00:05:06
mankind doing with the biggest machine

00:05:02 --> 00:05:08
that it's ever made it's doing quantum

00:05:05 --> 00:05:10
physics experiments so obviously we

00:05:07 --> 00:05:12
can't build many of these machines

00:05:09 --> 00:05:14
they're incredibly expensive to build

00:05:11 --> 00:05:17
and to operate they are the ultimate not

00:05:14 --> 00:05:19
in my backyard project in fact it took a

00:05:16 --> 00:05:22
while to find the site for the LHC as

00:05:18 --> 00:05:24
the community calls it and so if you

00:05:21 --> 00:05:27
can't build a lot of these machines

00:05:23 --> 00:05:29
what's your consolation prize as a

00:05:26 --> 00:05:31
physicist so if you don't get a particle

00:05:28 --> 00:05:34
accelerator for your birthday what do

00:05:30 --> 00:05:35
you get well what you get is simulation

00:05:33 --> 00:05:38
time on a

00:05:34 --> 00:05:40
supercomputer and so much of the

00:05:37 --> 00:05:43
xperimentation that happens today on

00:05:39 --> 00:05:45
quantum physics happens inside

00:05:42 --> 00:05:47
supercomputers so if you don't get to

00:05:44 --> 00:05:49
actually run an experiment on the large

00:05:46 --> 00:05:51
hron collider or at the Stanford linear

00:05:48 --> 00:05:53
accelerator and you can imagine the

00:05:50 --> 00:05:55
queue is very long for the experiments

00:05:52 --> 00:05:58
that want to be run what you do instead

00:05:54 --> 00:06:01
is you simulate the interactions of

00:05:57 --> 00:06:03
these particles in a supercomputer in

00:06:00 --> 00:06:04
fact if you go out east from our office

00:06:02 --> 00:06:07
ventually you will run into the

00:06:03 --> 00:06:09
Lawrence Livermore Berkeley labs and

00:06:07 --> 00:06:11
this is the bulk of what they do they

00:06:08 --> 00:06:13
are simulating the effects of what would

00:06:10 --> 00:06:15
happen if we detonated nuclear weapons

00:06:12 --> 00:06:18
to see if our nuclear weapons will

00:06:14 --> 00:06:20
continue to work and to improve their

00:06:17 --> 00:06:23
efficacy so the United States doesn't

00:06:19 --> 00:06:24
actually explode nuclear devices anymore

00:06:22 --> 00:06:27
we signed the comprehensive Test Ban

00:06:23 --> 00:06:29
Treaty and so all of the work that we do

00:06:26 --> 00:06:31
now is in

00:06:28 --> 00:06:33
simulation but there's a problem with

00:06:30 --> 00:06:36
simulating quantum mechanics and let me

00:06:32 --> 00:06:39
try to give you the intuition behind the

00:06:35 --> 00:06:41
problem the key Insight that Richard fan

00:06:38 --> 00:06:43
had was that quantum mechanics is just

00:06:40 --> 00:06:46
way too complicated to simulate using

00:06:43 --> 00:06:47
traditional computers so I'll give you a

00:06:45 --> 00:06:51
concrete example let's say we wanted to

00:06:46 --> 00:06:52
simulate the state of a th hydrogen

00:06:50 --> 00:06:54
atoms and in particular we wanted to

00:06:51 --> 00:06:56
simulate the state of a thousand of the

00:06:53 --> 00:06:58
lectrons in a hydrogen atom now the

00:06:55 --> 00:07:00
hydrogen atom is one of the simplest

00:06:57 --> 00:07:03
we've got we've got one proton we've got

00:06:59 --> 00:07:06
electron and if we wanted to simulate

00:07:02 --> 00:07:08
the up or down state of the electron and

00:07:05 --> 00:07:10
we wanted to do that for a th000 of

00:07:07 --> 00:07:12
these electrons we would need a computer

00:07:09 --> 00:07:15
that could represent two to the a

00:07:11 --> 00:07:16
thousand States so you could have the

00:07:14 --> 00:07:18
possibility that all of the electrons

00:07:15 --> 00:07:20
were spinning down you had the

00:07:17 --> 00:07:22
possibility that all thousand were

00:07:19 --> 00:07:24
spinning up and you have all the

00:07:21 --> 00:07:27
possible combinations which works out to

00:07:23 --> 00:07:30
two to 1000 so even with this very

00:07:26 --> 00:07:32
relatively simple example we would need

00:07:29 --> 00:07:35
a computer that could represent more

00:07:31 --> 00:07:37
States 2 to the 1000th than there are

00:07:34 --> 00:07:39
atoms in the known universe so think

00:07:36 --> 00:07:42
about that for a while which is no

00:07:38 --> 00:07:44
computer can actually store that skate

00:07:41 --> 00:07:46
but the weird thing is somehow nature

00:07:43 --> 00:07:50
seems to be doing these calculations by

00:07:46 --> 00:07:53
itself somehow it's keeping the state

00:07:49 --> 00:07:57
represented in a way that leads to

00:07:52 --> 00:07:59
consistent quantum mechanical behavior

00:07:56 --> 00:08:00
and so Richard Fan's Insight was hey

00:07:58 --> 00:08:03
nature seems to be doing these

00:07:59 --> 00:08:06
calculations can we somehow hitch a ride

00:08:02 --> 00:08:08
on the quantum mechanical properties of

00:08:05 --> 00:08:10
these atoms and get nature to do

00:08:07 --> 00:08:12
calculations that we want to do as

00:08:09 --> 00:08:14
opposed to calculations nature seems to

00:08:11 --> 00:08:16
be doing to keep nature

00:08:13 --> 00:08:19
working so that's the fundamental

00:08:15 --> 00:08:21
Insight behind the quantum computer so

00:08:18 --> 00:08:24
to boil it down quantum computers rely

00:08:20 --> 00:08:27
on properties or quirks in quantum

00:08:23 --> 00:08:29
physics and the goal of building a

00:08:26 --> 00:08:31
quantum computer is to be able to do

00:08:28 --> 00:08:33
calculations of a unique sort and I'll

00:08:30 --> 00:08:35
describe that in a little more detail as

00:08:32 --> 00:08:39
we go along so we're trying to hitch a

00:08:34 --> 00:08:41
ride on nature to perform computations

00:08:38 --> 00:08:42
that using a traditional computer we

00:08:40 --> 00:08:45
just couldn't do or would take an

00:08:41 --> 00:08:48
incredibly long time so to go back to

00:08:44 --> 00:08:49
Justin Trudeau where he kind of implied

00:08:47 --> 00:08:50
we're trying to build smaller computers

00:08:48 --> 00:08:52
that's not what we're really trying to

00:08:50 --> 00:08:55
do what we're really trying to do is

00:08:51 --> 00:08:57
build quantum computers that can solve a

00:08:54 --> 00:08:59
class of mathematical problems that we

00:08:56 --> 00:09:01
couldn't solve with traditional

00:08:58 --> 00:09:04
computers or that we could only solve

00:09:00 --> 00:09:06
with way big amounts of memory and would

00:09:03 --> 00:09:10
take a long long long long

00:09:05 --> 00:09:12
time so how to quantum computers work so

00:09:09 --> 00:09:13
to understand how quantum computers work

00:09:11 --> 00:09:15
first we need to understand how

00:09:13 --> 00:09:18
traditional computers work so

00:09:14 --> 00:09:20
traditional computers work basically as

00:09:17 --> 00:09:23
Justin Trudeau explained correctly using

00:09:19 --> 00:09:25
transistors and these transistors can

00:09:22 --> 00:09:28
either be an on or off State just like

00:09:24 --> 00:09:30
your light switch originally we made

00:09:27 --> 00:09:32
these transistors out of vacuum tubes

00:09:29 --> 00:09:34
but eventually the Geniuses at Bell Labs

00:09:31 --> 00:09:35
figured out how to create transistors

00:09:33 --> 00:09:38
out of

00:09:34 --> 00:09:40
semiconductors so we have this physical

00:09:37 --> 00:09:41
property of a semiconductor which it can

00:09:39 --> 00:09:43
be conducting electricity or not and

00:09:40 --> 00:09:46
we're going to declare that the on or

00:09:42 --> 00:09:48
off State and then we marry that up with

00:09:45 --> 00:09:51
logical Gates that can perform

00:09:47 --> 00:09:53
operations and in the case of modern

00:09:50 --> 00:09:58
computers we're performing Boolean

00:09:52 --> 00:10:01
algebra operations so not and or the KN

00:09:57 --> 00:10:04
of one is zero the and of one and zero

00:10:00 --> 00:10:06
is zero and basically if you extrapolate

00:10:03 --> 00:10:08
from these two building blocks the

00:10:05 --> 00:10:10
transistor which encloses on or off

00:10:07 --> 00:10:13
State these logical operations that are

00:10:09 --> 00:10:14
performing Boolean algebra applications

00:10:12 --> 00:10:17
that leads directly to the smartphone

00:10:14 --> 00:10:20
that's sitting in your pocket so all of

00:10:16 --> 00:10:22
traditional Computing basically is on a

00:10:19 --> 00:10:25
linear path straight down these two

00:10:21 --> 00:10:26
fundamental building blocks so the

00:10:24 --> 00:10:28
fundamental physical property again that

00:10:25 --> 00:10:30
we're taking advantage of is a

00:10:27 --> 00:10:33
transistor that is either cond

00:10:29 --> 00:10:35
ucting electricity or not and The

00:10:32 --> 00:10:38
Logical operations we performing are

00:10:34 --> 00:10:40
Boolean algebra

00:10:37 --> 00:10:42
operations by contrast with quantum

00:10:39 --> 00:10:45
computers we're using a different part

00:10:41 --> 00:10:48
of Nature and in particular we're either

00:10:44 --> 00:10:50
using atoms or photons or electrons

00:10:47 --> 00:10:52
let's lay aside the implementation

00:10:49 --> 00:10:54
detail of what we're using for now and

00:10:51 --> 00:10:57
let's sort of try to understand the what

00:10:53 --> 00:10:58
of what we're doing so in contrast to

00:10:56 --> 00:11:01
traditional Computing bits where a

00:10:58 --> 00:11:03
transistor represents an or off State

00:11:00 --> 00:11:06
what we have with quantum computers is a

00:11:02 --> 00:11:09
Quantum bit so when observed the quantum

00:11:05 --> 00:11:11
bit behaves exactly like a traditional

00:11:08 --> 00:11:14
bit which is to say it can be zero or

00:11:10 --> 00:11:17
one so it can be an electron in up or

00:11:13 --> 00:11:21
down speed it can be an electron that's

00:11:16 --> 00:11:23
negatively charged or not but a crazy

00:11:20 --> 00:11:25
quantum mechanics property is that when

00:11:22 --> 00:11:28
it's not observed this Cubit is actually

00:11:24 --> 00:11:30
representing the probability that it's

00:11:27 --> 00:11:32
zero or one so for those of you who

00:11:29 --> 00:11:35
remember shing's cat your physics

00:11:31 --> 00:11:37
teacher told you that inside this box is

00:11:34 --> 00:11:39
a cat and it is either alive or dead and

00:11:36 --> 00:11:40
when you pop open the lid of the box the

00:11:38 --> 00:11:42
cat will definitely be alive or

00:11:39 --> 00:11:45
definitely be dead but if you close the

00:11:41 --> 00:11:47
lid the cat is in some indeterminate

00:11:44 --> 00:11:49
state it is a probability somewhere

00:11:46 --> 00:11:51
between alive and dead and this was one

00:11:48 --> 00:11:53
of the weird quantum mechanical

00:11:50 --> 00:11:55
properties of very very small particles

00:11:52 --> 00:11:58
like atoms or electrons we're going to

00:11:54 --> 00:11:59
take advantage of this by having the

00:11:57 --> 00:12:02
cubid and the probability that it's

00:11:58 --> 00:12:04
either Z or one to encode information

00:12:01 --> 00:12:06
and so the way to think of it without

00:12:03 --> 00:12:09
getting into the math is think of the

00:12:05 --> 00:12:11
Cubit as representing an arrow or a

00:12:08 --> 00:12:13
vector so this Vector has a direction

00:12:10 --> 00:12:15
and it has a magnitude right so picture

00:12:12 --> 00:12:18
of the arrow is pointing in a Direction

00:12:14 --> 00:12:21
that's its direction and it has a length

00:12:17 --> 00:12:24
at's the magnitude of the arrow and so

00:12:21 --> 00:12:27
fundamentally the Cubit represents this

00:12:23 --> 00:12:30
Arrow rather than an on or off State and

00:12:26 --> 00:12:32
then the analog to the operations

00:12:29 --> 00:12:34
performing so instead of Performing

00:12:31 --> 00:12:36
Boolean algebra operations in quantum

00:12:33 --> 00:12:38
computers what we're using is a set of

00:12:35 --> 00:12:40
quantum Gates and they Implement Quantum

00:12:37 --> 00:12:43
operations and the way to think about

00:12:39 --> 00:12:45
his is as linear algebra operations so

00:12:43 --> 00:12:47
for those of you that remember your

00:12:44 --> 00:12:49
linear algebra you have a vector think

00:12:47 --> 00:12:52
of it as an arrow with a direction and a

00:12:48 --> 00:12:55
length we apply a linear algebra

00:12:51 --> 00:12:57
operator on it and that fundamentally

00:12:54 --> 00:13:00
changes the arrow it might change its

00:12:56 --> 00:13:02
direction it might change its magnitude

00:12:59 --> 00:13:05
but basically think of it as an arrow

00:13:01 --> 00:13:07
goes in to a Quantum operation and an

00:13:04 --> 00:13:10
arrow comes out just a different Arrow

00:13:06 --> 00:13:12
but mathematically related to the arrow

00:13:09 --> 00:13:13
that came in so the fundamental physical

00:13:11 --> 00:13:16
property that we're going to take

00:13:12 --> 00:13:19
advantage of is a quantum mechanical

00:13:15 --> 00:13:21
property rather than an electrical

00:13:18 --> 00:13:23
conductivity property and then the

00:13:20 --> 00:13:25
operations we're performing aren't

00:13:22 --> 00:13:28
bullan algebra operations they are

00:13:25 --> 00:13:30
linear algebra applications so that's

00:13:27 --> 00:13:33
what's happening at the core of quantum

00:13:29 --> 00:13:35
computers let me put this together by

00:13:32 --> 00:13:37
describing how a quantum computer would

00:13:34 --> 00:13:39
solve a problem and how that's different

00:13:36 --> 00:13:42
han a traditional computer and let's

00:13:38 --> 00:13:44
use the so-called phonebook problem so

00:13:41 --> 00:13:46
the phonebook problem is this you're

00:13:43 --> 00:13:48
asked to find a particular phone number

00:13:46 --> 00:13:51
but you're given a phone book where the

00:13:47 --> 00:13:53
phone numbers are stored by let's say

00:13:50 --> 00:13:55
last name and so if you're trying to

00:13:52 --> 00:13:57
find a specific phone number with a

00:13:54 --> 00:13:59
traditional computer what you would do

00:13:56 --> 00:14:01
is look at the first entry and say hey

00:13:58 --> 00:14:04
is is this the phone number I'm looking

00:14:00 --> 00:14:06
for if not go on to the second entry is

00:14:03 --> 00:14:09
this the phone number I'm looking for if

00:14:05 --> 00:14:11
not go on to the third entry and so on

00:14:08 --> 00:14:13
and so forth and if you wanted to

00:14:10 --> 00:14:15
guarantee that the phone number existed

00:14:12 --> 00:14:17
or didn't exist in this big phone book

00:14:14 --> 00:14:19
you would have to iterate through all of

00:14:16 --> 00:14:21
the entries there is no mathematical

00:14:18 --> 00:14:23
shortcut that you can take there's no

00:14:20 --> 00:14:25
algorithm in other words that would get

00:14:22 --> 00:14:26
you more efficiency than iterating

00:14:24 --> 00:14:28
through all of the entries in the phone

00:14:25 --> 00:14:29
book and if you had a very large phone

00:14:27 --> 00:14:30
book this could end up taking a long

00:14:28 --> 00:14:32
time

00:14:29 --> 00:14:34
in contrast with a Quantum algorithm

00:14:31 --> 00:14:36
solving this problem and in this

00:14:33 --> 00:14:39
particular case the quantum algorithm

00:14:35 --> 00:14:41
was designed by love grov working at Bel

00:14:38 --> 00:14:42
Labs at the time it's going to take

00:14:40 --> 00:14:45
advantage of quantum mechanical

00:14:42 --> 00:14:47
properties to solve this problem much

00:14:44 --> 00:14:49
much faster than iterating through

00:14:46 --> 00:14:53
all the entries so let's see how that

00:14:48 --> 00:14:56
works so remember how I said that cubits

00:14:52 --> 00:14:58
can be thought of as vectors which is uh

00:14:55 --> 00:14:59
they're representing information that's

00:14:57 --> 00:15:02
in the shape of an arrow with a

00:14:58 --> 00:15:04
Direction and a magnitude what quantum

00:15:01 --> 00:15:06
computers are doing is basically passing

00:15:03 --> 00:15:09
a lot of these vectors through these

00:15:05 --> 00:15:11
Quantum Gates performing linear algebra

00:15:08 --> 00:15:13
operations on them which change the

00:15:10 --> 00:15:15
direction or the size of the arrow and

00:15:12 --> 00:15:18
essentially the intuition behind

00:15:14 --> 00:15:20
Grover's algorithm is there's a vector

00:15:17 --> 00:15:21
epresenting the correct phone number

00:15:19 --> 00:15:23
and what we want to do through these

00:15:20 --> 00:15:26
Quantum operations is to lengthen that

00:15:23 --> 00:15:28
Vector to get the right ansers Vector to

00:15:25 --> 00:15:30
be bigger and bigger and bigger and to

00:15:27 --> 00:15:31
get the vectors representing the wrong

00:15:29 --> 00:15:33
answers to be smaller and smaller and

00:15:30 --> 00:15:35
smaller until we get to the point where

00:15:32 --> 00:15:37
we can reliably detect the difference

00:15:34 --> 00:15:40
between the big Arrow representing the

00:15:36 --> 00:15:41
correct answer and the smaller arrows

00:15:39 --> 00:15:44
representing all of the incorrect

00:15:40 --> 00:15:46
answers and so basically the magic is as

00:15:43 --> 00:15:48
you sort of sweep the arrows through

00:15:45 --> 00:15:50
these Quantum Gates that's exactly what

00:15:47 --> 00:15:51
hese Quantum operations are doing is

00:15:49 --> 00:15:54
they're lengthening the length of the

00:15:51 --> 00:15:56
right arrow they're shrinking the length

00:15:53 --> 00:15:58
of the wrong Arrow until we get to the

00:15:55 --> 00:16:00
point where we can reliably detect the

00:15:57 --> 00:16:02
difference between the right answer and

00:15:59 --> 00:16:05
the wrong answer that is the arrow with

00:16:01 --> 00:16:06
big magnitude versus the arrow with

00:16:04 --> 00:16:08
small

00:16:05 --> 00:16:10
magnitudes the visualization you're

00:16:07 --> 00:16:12
seeing shows you the quantum operations

00:16:09 --> 00:16:15
as they're performed on these arrows and

00:16:11 --> 00:16:17
it comes from this fabulous design

00:16:14 --> 00:16:20
studio called Twisted Oak Studios and I

00:16:16 --> 00:16:22
encourage you to go visit their website

00:16:19 --> 00:16:23
for more insight behind how this

00:16:21 --> 00:16:26
actually

00:16:22 --> 00:16:28
works so here is the big payoff by doing

00:16:25 --> 00:16:30
it the quantum way as opposed to the

00:16:27 --> 00:16:31
traditional way the traditional way way

00:16:29 --> 00:16:34
we'd have to iterate through all of the

00:16:30 --> 00:16:35
ntries in the phone book and depending

00:16:33 --> 00:16:38
on the size of the phone book and how

00:16:34 --> 00:16:39
long it takes us to iterate through one

00:16:37 --> 00:16:41
particular entry this could take a very

00:16:39 --> 00:16:43
long time and there's no

00:16:40 --> 00:16:45
mathematical shortcut in contrast with

00:16:42 --> 00:16:48
e quantum computers we only have to

00:16:45 --> 00:16:50
perform a small number of operations and

00:16:47 --> 00:16:52
it's proportional to the square root of

00:16:49 --> 00:16:54
the size of the entries and so this

00:16:51 --> 00:16:56
table shows you the number of operations

00:16:53 --> 00:16:58
the quantum computer would have to do in

00:16:55 --> 00:17:01
contrast to the traditional computer and

00:16:57 --> 00:17:04
the advantage grows with the number of

00:17:00 --> 00:17:06
numbers to search right so if we have a

00:17:03 --> 00:17:08
Million numbers that we're trying to

00:17:05 --> 00:17:10
search the traditional computer would

00:17:07 --> 00:17:12
have to do a million iterations whereas

00:17:09 --> 00:17:14
the quantum computer would only have to

00:17:11 --> 00:17:15
do a little over 30,000 and so here is

00:17:13 --> 00:17:17
the fundamental thing that we're trying

00:17:14 --> 00:17:19
to do with quantum computers we're not

00:17:16 --> 00:17:21
rying to build smaller computers we're

00:17:19 --> 00:17:24
trying to build computers that can solve

00:17:21 --> 00:17:27
a specific class of problems much much

00:17:23 --> 00:17:29
faster than traditional

00:17:26 --> 00:17:31
computers so if you don't quite

00:17:28 --> 00:17:32
understand all of that intuition and the

00:17:30 --> 00:17:34
vectors and the size of the vectors

00:17:31 --> 00:17:37
don't worry about it quantum mechanics

00:17:33 --> 00:17:38
is so counterintuitive that Richard fean

00:17:36 --> 00:17:40
famously said if you think you

00:17:37 --> 00:17:41
nderstand quantum mechanics then you

00:17:39 --> 00:17:43
don't really understand quantum

00:17:40 --> 00:17:45
echanics so don't beat yourself up I'll

00:17:42 --> 00:17:47
recommend some reading for you if you

00:17:44 --> 00:17:48
are interested in following up and

00:17:46 --> 00:17:50
understanding more of this and we'll put

00:17:47 --> 00:17:52
hat with the blog post now that sounds

00:17:49 --> 00:17:54
great so you're probably thinking to

00:17:51 --> 00:17:56
yourself wow if there really are a class

00:17:53 --> 00:17:58
of problems that can be solved using

00:17:55 --> 00:17:59
this class of computers then why aren't

00:17:57 --> 00:18:01
we all running quantum computers well

00:17:58 --> 00:18:03
it turns out that quantum computers

00:18:00 --> 00:18:05
are incredibly hard to build and let me

00:18:02 --> 00:18:08
give you some fascinating stats that

00:18:04 --> 00:18:10
give you the intuition behind why these

00:18:07 --> 00:18:12
are so hard to build so it turns out

00:18:09 --> 00:18:14
hat most quantum computers are made out

00:18:11 --> 00:18:16
of superconducting materials and the

00:18:13 --> 00:18:18
reason for that is you need to minimize

00:18:15 --> 00:18:20
the interaction between the quantum

00:18:17 --> 00:18:23
computer and the outside world it's very

00:18:19 --> 00:18:24
easy for the outside world to disturb

00:18:22 --> 00:18:25
the results that you're getting from

00:18:23 --> 00:18:28
quantum computers and so one way to

00:18:24 --> 00:18:30
minimize it is to run them with

00:18:27 --> 00:18:33
superconducting material

00:18:29 --> 00:18:35
so most quantum computers are cooled to

00:18:32 --> 00:18:38
0.1 de Kelvin to minimize their

00:18:35 --> 00:18:40
interactions with the outside world so

00:18:37 --> 00:18:42
that is a very very powerful

00:18:39 --> 00:18:45
refrigerator just to give you the

00:18:41 --> 00:18:47
intuition Interstellar space is 2.7

00:18:44 --> 00:18:49
Kelvin so we need computers that are

00:18:46 --> 00:18:51
colder than Interstellar space in order

00:18:48 --> 00:18:53
to minimize the interactions with the

00:18:50 --> 00:18:56
outside world another thing that makes

00:18:52 --> 00:18:59
these hard to build is this thing called

00:18:55 --> 00:19:00
the coherence time so because quantum

00:18:58 --> 00:19:02
computers interact so readily with the

00:19:00 --> 00:19:04
outside world we only have a small

00:19:01 --> 00:19:06
amount of time in which we can perform

00:19:03 --> 00:19:08
all of our calculations and that's

00:19:05 --> 00:19:10
called the coherence time researchers

00:19:07 --> 00:19:13
have made a lot of progress on raising

00:19:09 --> 00:19:15
the length of the cerence time so we're

00:19:12 --> 00:19:17
up to state-of-the-art these days is 100

00:19:14 --> 00:19:19
micros seconds but even 100 microseconds

00:19:16 --> 00:19:21
is not a lot of time to perform

00:19:18 --> 00:19:23
operations in before the quantum

00:19:20 --> 00:19:25
coherence time makes it impossible for

00:19:22 --> 00:19:27
us to get a result out of the quantum

00:19:24 --> 00:19:29
computer another thing that makes these

00:19:26 --> 00:19:32
hard is I showed you the quantum

00:19:28 --> 00:19:36
operations that are performed and each

00:19:31 --> 00:19:38
of those operations takes 50 NCS so we

00:19:35 --> 00:19:40
only have a limited amount of time if

00:19:37 --> 00:19:43
each operation takes 50 NCS and our

00:19:39 --> 00:19:44
Quantum coherence time is 100 micros

00:19:42 --> 00:19:46
econds we only have a certain amount of

00:19:43 --> 00:19:48
time we can only perform so many

00:19:45 --> 00:19:50
operations before we can't get a

00:19:47 --> 00:19:52
reliable result and then one last fun

00:19:49 --> 00:19:55
stat I talked about how what we were

00:19:51 --> 00:19:57
trying to do with Grove's algorithm was

00:19:54 --> 00:20:00
lengthen the arrow enough so that we

00:19:56 --> 00:20:02
could tell it from all of the the

00:19:59 --> 00:20:04
incorrect answers the length of the

00:20:01 --> 00:20:06
correct answer was bigger so if you took

00:20:03 --> 00:20:09
the energy difference between the

00:20:05 --> 00:20:11
correct answer and the wrong answer the

00:20:08 --> 00:20:14
nergy difference is only a difference

00:20:10 --> 00:20:16
of 10 to the - 24th Jews so it's

00:20:13 --> 00:20:18
incredibly difficult to detect the

00:20:15 --> 00:20:20
answers and so hopefully this give you

00:20:17 --> 00:20:22
some intuition for why quantum computers

00:20:19 --> 00:20:24
are so hard to build the good news is

00:20:21 --> 00:20:26
that researchers are making a lot of

00:20:23 --> 00:20:28
progress on getting the quantum

00:20:25 --> 00:20:30
coherence time up inventing more

00:20:27 --> 00:20:32
algorithms in particular the quantum

00:20:29 --> 00:20:34
coherence time seems to be progressing

00:20:31 --> 00:20:37
very very quickly these days uh and in

00:20:33 --> 00:20:39
fact faster than Mo's law and so we're

00:20:36 --> 00:20:41
pretty optimistic that at least on the

00:20:38 --> 00:20:43
quantum coherence time we're on a path

00:20:40 --> 00:20:46
to longer and longer coherence

00:20:42 --> 00:20:48
times so wow hard to build a quantum

00:20:45 --> 00:20:51
computer what could we do if we had

00:20:47 --> 00:20:53
quantum computers so one of the things

00:20:50 --> 00:20:55
that you could do with quantum computers

00:20:52 --> 00:20:58
is that you could train so-called deep

00:20:54 --> 00:21:00
learning networks much faster in another

00:20:57 --> 00:21:02
podcast I talked about the his his of AI

00:20:59 --> 00:21:04
and machine learning and deep learning

00:21:01 --> 00:21:07
and highlighted that deep learning is

00:21:03 --> 00:21:09
one of the most profound techniques that

00:21:06 --> 00:21:11
researchers are using to create

00:21:08 --> 00:21:14
artificially intelligence programs and

00:21:11 --> 00:21:16
if we could train these deep networks

00:21:13 --> 00:21:18
faster we could get much better deep

00:21:15 --> 00:21:20
learning results so that's one thing

00:21:17 --> 00:21:22
that you could get from a quantum

00:21:19 --> 00:21:25
computer another thing that you can get

00:21:21 --> 00:21:28
from a quantum computer is finding the

00:21:24 --> 00:21:29
prime factors of very very large numbers

00:21:27 --> 00:21:31
now everybody likes to say that that

00:21:28 --> 00:21:32
you've got a supercomputer in your

00:21:30 --> 00:21:33
pocket so why don't you just take your

00:21:31 --> 00:21:36
supercomputer out of your pocket right

00:21:32 --> 00:21:37
now take that number that's on the slide

00:21:35 --> 00:21:38
and quickly give me the prime factors of

00:21:37 --> 00:21:42
that

00:21:37 --> 00:21:44
number no takers okay that still is a

00:21:41 --> 00:21:46
very very hard mathematical problem

00:21:43 --> 00:21:48
despite the fact that you have a

00:21:45 --> 00:21:51
supercomputer in your pocket and it's

00:21:47 --> 00:21:52
good news that it is a hard problem even

00:21:50 --> 00:21:56
with that supercomputer because all

00:21:51 --> 00:21:57
modern encryption depends on this fact

00:21:55 --> 00:21:58
hat while it's relatively

00:21:56 --> 00:22:01
straightforward for a computer to

00:21:57 --> 00:22:03
multiply to prime factors to get a very

00:22:00 --> 00:22:06
large number it is very difficult for a

00:22:02 --> 00:22:08
computer to divide that number to

00:22:05 --> 00:22:10
recover its original prime factors in

00:22:07 --> 00:22:12
fact this mathematical property is

00:22:09 --> 00:22:14
what's behind all of modern day

00:22:11 --> 00:22:16
encryption so if we had a quantum

00:22:13 --> 00:22:18
computer we could dramatically reduce

00:22:15 --> 00:22:21
the time it took to recover the prime

00:22:17 --> 00:22:24
factors and all of modern crypto that

00:22:20 --> 00:22:26
we're using today would instantly be

00:22:23 --> 00:22:28
susceptible to attack because it

00:22:25 --> 00:22:30
wouldn't take a long long time to

00:22:27 --> 00:22:32
decrypt somebody's messages

00:22:29 --> 00:22:34
you could do it very very quickly this

00:22:31 --> 00:22:37
why the NSA and other state

00:22:33 --> 00:22:39
researchers are actively investigating

00:22:36 --> 00:22:42
how to use quantum computers and new

00:22:38 --> 00:22:44
algorithms to solve this particular

00:22:41 --> 00:22:47
mathematical problem so what else can we

00:22:43 --> 00:22:49
do with quantum computers well one

00:22:46 --> 00:22:51
intriguing area of research is called

00:22:48 --> 00:22:52
quantum chemistry and the basic idea

00:22:50 --> 00:22:54
here is we're going to try to use

00:22:51 --> 00:22:56
quantum computers to perform

00:22:53 --> 00:22:59
calculations that would help us find new

00:22:55 --> 00:23:02
chemical catalysts so let me give you a

00:22:58 --> 00:23:04
prime example of a chemical reaction

00:23:01 --> 00:23:07
that would benefit from a new Catalyst

00:23:04 --> 00:23:10
and that's called the habbos process so

00:23:06 --> 00:23:12
the habbos process today creates ammonia

00:23:09 --> 00:23:14
from natural gas and it turns out we

00:23:11 --> 00:23:17
need ammonia for fertilizer so

00:23:13 --> 00:23:20
scientists regard the habbos process as

00:23:16 --> 00:23:22
the literal Detonator of the population

00:23:19 --> 00:23:25
explosion so we had 1.6 billion people

00:23:21 --> 00:23:28
living on the planet in 1900 and we have

00:23:24 --> 00:23:30
over 7 billion today and a lot of that

00:23:27 --> 00:23:33
is credited with finding enough food for

00:23:30 --> 00:23:36
7 billion people and a lot of that is

00:23:32 --> 00:23:39
credited to fertilizer now the process

00:23:35 --> 00:23:41
that creates ammonia from natural gas

00:23:38 --> 00:23:46
happens at very high temperature 4 to

00:23:40 --> 00:23:48
600° C and at many times the pressure of

00:23:45 --> 00:23:51
the atmosphere and as a result it's very

00:23:48 --> 00:23:54
energy intensive scientists estimate

00:23:50 --> 00:23:56
that between 1 and 2% of all of the

00:23:53 --> 00:23:58
nergy generated in the world today goes

00:23:55 --> 00:24:01
to making ammonia from natural gas so we

00:23:57 --> 00:24:04
can make fer izer and this process is so

00:24:00 --> 00:24:06
important that 80% of the nitrogen in

00:24:03 --> 00:24:08
your very tissues comes from this

00:24:05 --> 00:24:11
process and so if we were able to find a

00:24:07 --> 00:24:13
catalyst that would allow us to either

00:24:10 --> 00:24:15
lower the atmospheric pressure or lower

00:24:12 --> 00:24:17
the temperature at which this chemical

00:24:14 --> 00:24:20
reaction takes place we could produce

00:24:17 --> 00:24:21
ammonia much much more cheaply and feed

00:24:19 --> 00:24:23
even more

00:24:20 --> 00:24:26
people let me give you another example

00:24:22 --> 00:24:28
of quantum chemistry so the picture you

00:24:25 --> 00:24:30
see here is a picture of the Tesla

00:24:27 --> 00:24:33
gigafactory which will start producing

00:24:29 --> 00:24:36
lithium ion batteries in 2017 to put

00:24:32 --> 00:24:38
into the fabulous Tesla electric cars

00:24:35 --> 00:24:41
that everybody wants when it's in full

00:24:37 --> 00:24:44
production in 2020 this gigafactory will

00:24:40 --> 00:24:46
produce more batteries each year than

00:24:43 --> 00:24:49
were produced in the entire world

00:24:45 --> 00:24:52
cumulatively through 2013 so very very

00:24:48 --> 00:24:53
important Factory for the future of

00:24:51 --> 00:24:56
electric cars and for Tesla in

00:24:53 --> 00:24:58
particular now the chemistry that these

00:24:55 --> 00:25:01
batteries depend on which involve

00:24:57 --> 00:25:03
lithium ions was discovered in 1980 by

00:25:00 --> 00:25:05
an American physicist named professor

00:25:02 --> 00:25:09
John good enough at the University of

00:25:04 --> 00:25:11
Texas in Austin and since that time the

00:25:08 --> 00:25:14
nergy density in other words the amount

00:25:10 --> 00:25:16
of energy we can cram into a given

00:25:13 --> 00:25:20
volume of batteries has been progressing

00:25:15 --> 00:25:21
at a rate of about 3% a year now that

00:25:19 --> 00:25:23
seems like good progress but of course

00:25:20 --> 00:25:26
in the computer industry we're used to

00:25:22 --> 00:25:28
things progressing much much faster we

00:25:25 --> 00:25:29
are used to things like Moors law where

00:25:27 --> 00:25:33
we're doubling the trans transistor

00:25:28 --> 00:25:36
count every 18 to 24 months in our chips

00:25:32 --> 00:25:38
and so 3% a year is pretty slow progress

00:25:35 --> 00:25:40
really and so we're hoping for a

00:25:37 --> 00:25:43
breakthrough so research scientists

00:25:39 --> 00:25:45
around the world are racing to discover

00:25:42 --> 00:25:48
new battery chemistry a breakr in

00:25:44 --> 00:25:50
batteries that would allow us to store

00:25:47 --> 00:25:52
ither much more energy so that we can

00:25:49 --> 00:25:54
drive our electric cars much further so

00:25:51 --> 00:25:57
that's another very important

00:25:53 --> 00:25:59
application that we could apply quantum

00:25:56 --> 00:26:02
computers to

00:25:58 --> 00:26:05
so why pay attention now well the reason

00:26:02 --> 00:26:07
that we are paying attention now is that

00:26:04 --> 00:26:10
a lot of the pieces to making a quantum

00:26:06 --> 00:26:12
computer are really coming together I

00:26:09 --> 00:26:14
mentioned how difficult it was but

00:26:11 --> 00:26:16
research scientists are making progress

00:26:13 --> 00:26:19
on all of the key ingredients the

00:26:16 --> 00:26:21
hardware the software and the developer

00:26:18 --> 00:26:23
tools that enable people to write

00:26:20 --> 00:26:27
software and the algorithms that we're

00:26:22 --> 00:26:29
going to use and the rate of progress is

00:26:26 --> 00:26:31
astounding one of the things that I

00:26:28 --> 00:26:33
wished I could have done but I wasn't

00:26:30 --> 00:26:35
born in the right decade for this is to

00:26:32 --> 00:26:37
be a fly on thewall inside Bell labs

00:26:34 --> 00:26:40
when all of the key ingredients for

00:26:36 --> 00:26:43
computing as we know today came into

00:26:39 --> 00:26:46
being so the transistor itself

00:26:42 --> 00:26:48
semiconductors information Theory the C

00:26:45 --> 00:26:51
programming language the Unix operating

00:26:47 --> 00:26:54
system you also had Grace Hopper outside

00:26:50 --> 00:26:56
of bell Labs with compilers so all of

00:26:53 --> 00:26:58
this intellectual ferment that has led

00:26:55 --> 00:27:00
to us being able to use the

00:26:57 --> 00:27:02
supercomputers in our our pockets it

00:26:59 --> 00:27:04
would have just been so fun to listen in

00:27:01 --> 00:27:06
on the conversations as they were

00:27:03 --> 00:27:09
happening and basically that same

00:27:05 --> 00:27:11
ferment that same intellectual ferment

00:27:08 --> 00:27:14
is happening right now around Quantum

00:27:10 --> 00:27:17
Computing so in the University labs in

00:27:13 --> 00:27:20
the corporate R&D centers and at

00:27:16 --> 00:27:23
startups there's just so much excitement

00:27:19 --> 00:27:25
hat right now we should be able to put

00:27:22 --> 00:27:28
all the pieces together to learn from

00:27:24 --> 00:27:30
the lessons of the past and build these

00:27:27 --> 00:27:33
breakthrough computers that can perform

00:27:29 --> 00:27:35
these calculations that are mysteriously

00:27:32 --> 00:27:38
hitching a ride on the calculations that

00:27:34 --> 00:27:40
nature seems to be doing itself so with

00:27:37 --> 00:27:42
all the key ingredients coming together

00:27:39 --> 00:27:44
it's no surprise that some of the

00:27:41 --> 00:27:46
biggest university Labs corporate R&D

00:27:43 --> 00:27:49
centers and even state sponsored

00:27:45 --> 00:27:51
research is being directed at solving

00:27:48 --> 00:27:54
the quanum Computing problem so on this

00:27:50 --> 00:27:56
lide you see the budgets the team sizes

00:27:54 --> 00:27:58
and the Investments That well-known

00:27:55 --> 00:28:00
organizations are making and this is

00:27:57 --> 00:28:02
really to us a sign that now is the time

00:27:59 --> 00:28:04
to start looking for startups that can

00:28:01 --> 00:28:07
participate in this ecosystem and help

00:28:03 --> 00:28:09
bring Quantum Computing to life and in

00:28:06 --> 00:28:11
fact keep your eyes on this space and

00:28:08 --> 00:28:13
we'll have announcements to come about

00:28:10 --> 00:28:15
companies that we have found that do

00:28:12 --> 00:28:17
exactly that in the meantime just marvel

00:28:15 --> 00:28:20
at the fact that we're going to try to

00:28:16 --> 00:28:22
build these class of computers that take

00:28:19 --> 00:28:25
advantage of quantum mechanical

00:28:21 --> 00:28:27
properties of atoms and subatomic

00:28:24 --> 00:28:29
particles somehow getting them to

00:28:26 --> 00:28:33
perform calculations for us that they're

00:28:28 --> 00:28:37
doing by themselves in nature

00:28:32 --> 00:28:37
already be well

<!-- YOUTUBE_TRANSCRIPT_END -->
