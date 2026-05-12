---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "-s_Ui5j0Guw"
title: "AI Hardware, Explained."
video_url: "https://www.youtube.com/watch?v=-s_Ui5j0Guw"
thumbnail_url: "https://i.ytimg.com/vi/-s_Ui5j0Guw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=-s_Ui5j0Guw"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2023-08-16T17:00:00.000Z"
upload_date: "2023-08-16"
duration_seconds: 924
duration_human: "15:24"
view_count: 57462
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:01:16.429Z"
---

# AI Hardware, Explained.

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=-s_Ui5j0Guw
- video_id: -s_Ui5j0Guw
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2023-08-16T17:00:00.000Z
- upload_date: 2023-08-16
- duration: 15:24
- view_count: 57462
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

In 2011, Marc Andreessen said, “software is eating the world.” And in the last year, we’ve seen a new wave of generative AI, with some apps becoming some of the most swiftly adopted software products of all time. 

In this first part of our three-part series – we explore the terminology and technology that is now the backbone of the AI models taking the world by storm. We explore what GPUs are, how they work, and the key players like Nvidia competing for chip dominance.

Look out for the rest of our series, where we dive even deeper; covering supply and demand mechanics, where open source plays a role, and of course… how much all of this truly costs!

Topics Covered: 
00:00 – AI terminology and technology
03:54 – Chips, semiconductors, servers, and compute
05:07 – CPUs and GPUs
06:16 – Future architecture and performance
07:12 –The hardware ecosystem
09:20 – Software optimizations
11:45 –What do we expect for the future?
14:25 – Upcoming episodes on market dynamics and cost 

Resources: 
Find Guido on LinkedIn: https://www.linkedin.com/in/appenz/
Find Guido on Twitter: https://twitter.com/appenz
 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://twitter.com/stephsmithio 

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
the most commonly used chips today are

00:00:03 --> 00:00:08
AI accelerators who would have thought

00:00:05 --> 00:00:10
hat my gaming PC at my Bitcoin miner

00:00:07 --> 00:00:12
would eventually become a good AI

00:00:09 --> 00:00:14
engineer how do you see this industry

00:00:11 --> 00:00:16
moving forward that's a great question

00:00:13 --> 00:00:18
Moore's Law is actually still as of

00:00:15 --> 00:00:20
today Alive and Kicking right power is

00:00:17 --> 00:00:22
becoming an issue heat is becoming an

00:00:19 --> 00:00:25
issue and we need to rely more and more

00:00:21 --> 00:00:25
on Parallel processing

00:00:27 --> 00:00:34
in 2011 Mark Andreessen said software is

00:00:31 --> 00:00:36
eating the world

00:00:33 --> 00:00:38
and the decade that followed just

00:00:35 --> 00:00:41
solidified this notion but software

00:00:37 --> 00:00:42
infiltrating nearly every aspect of Our

00:00:40 --> 00:00:44
Lives

00:00:41 --> 00:00:47
the last year in particular introduced a

00:00:43 --> 00:00:49
new wave of generative AI with some apps

00:00:46 --> 00:00:52
becoming some of the most swiftly

00:00:48 --> 00:00:54
adopted software products of all time

00:00:51 --> 00:00:57
and just like all the other software

00:00:53 --> 00:00:59
that came before it AI software is

00:00:56 --> 00:01:01
fundamentally underpinned by the

00:00:58 --> 00:01:04
hardware that runs the underlying

00:01:00 --> 00:01:06
computation so if software is becoming

00:01:03 --> 00:01:09
more important than ever then Hardware

00:01:05 --> 00:01:12
is following suit plus the world is

00:01:08 --> 00:01:13
constantly generating more data and

00:01:11 --> 00:01:15
unlocking the full potential of these

00:01:12 --> 00:01:18
Technologies from longer contacts

00:01:15 --> 00:01:21
Windows to multi-modality means a

00:01:17 --> 00:01:23
constant need for faster and more

00:01:20 --> 00:01:25
silient hardware and it's equally

00:01:22 --> 00:01:27
important for us to understand who

00:01:24 --> 00:01:29
builds and controls the supply of this

00:01:26 --> 00:01:32
resource especially since many of even

00:01:28 --> 00:01:34
the most established AI companies are

00:01:31 --> 00:01:36
now Hardware constrained with some

00:01:33 --> 00:01:39
reputable sources indicating that demand

00:01:35 --> 00:01:43
for AI Hardware outstrip Supply by a

00:01:38 --> 00:01:45
factor of 10. that is exactly why we've

00:01:42 --> 00:01:47
created this mini-series on AI Hardware

00:01:44 --> 00:01:49
we'll take you on a journey through

00:01:46 --> 00:01:51
understanding the hardware that has long

00:01:48 --> 00:01:54
powered our computers but is now the

00:01:50 --> 00:01:56
backbone of these AI models absolutely

00:01:53 --> 00:01:58
taking the World by storm and in this

00:01:55 --> 00:02:01
first segment we dive into the

00:01:57 --> 00:02:04
terminology and Technology from GPU to

00:02:00 --> 00:02:06
TPU including what they are how they

00:02:03 --> 00:02:09
work the key players like Nvidia

00:02:05 --> 00:02:12
competing for chip dominance and also we

00:02:08 --> 00:02:14
address the question is Moore's law dead

00:02:11 --> 00:02:16
but make sure to look out for the rest

00:02:13 --> 00:02:18
of our Series where we dive even deeper

00:02:15 --> 00:02:21
covering supply and demand mechanics

00:02:17 --> 00:02:23
including why we can't just print our

00:02:20 --> 00:02:25
way of a shortage how Founders can get

00:02:22 --> 00:02:27
access to inventory whether they should

00:02:24 --> 00:02:30
think about owning or renting where open

00:02:26 --> 00:02:33
source plays a role and of course how

00:02:29 --> 00:02:35
much all of this truly costs and across

00:02:32 --> 00:02:38
all three videos we explore with the

00:02:34 --> 00:02:40
lp of e16z special advisor Guido

00:02:37 --> 00:02:43
apenzeller someone who is truly uniquely

00:02:39 --> 00:02:45
Suited for this deep dive as a storied

00:02:42 --> 00:02:48
infrastructure expert I spent my last

00:02:44 --> 00:02:50
couple of years mostly in software but

00:02:47 --> 00:02:53
most recently before joining address

00:02:49 --> 00:02:54
norowitz actually was CTO for Intel's

00:02:52 --> 00:02:56
data center group dealing a lot with

00:02:53 --> 00:02:58
ardware and the low level components so

00:02:55 --> 00:03:00
it's given me so if I think a good

00:02:57 --> 00:03:03
Insight how large data centers work what

00:02:59 --> 00:03:05
he the basic components are that make

00:03:02 --> 00:03:07
all of this I AI boom possible today and

00:03:04 --> 00:03:10
that that really underpin this this

00:03:06 --> 00:03:12
great technological ecosystem keto has

00:03:09 --> 00:03:15
also spent time at ubico VMware big

00:03:11 --> 00:03:17
switch networks and more but let's get

00:03:14 --> 00:03:19
into it as a reminder the content here

00:03:16 --> 00:03:21
is for informational purposes only

00:03:18 --> 00:03:24
should not be taken as legal business

00:03:20 --> 00:03:26
tax or investment advice or be used to

00:03:23 --> 00:03:27
evaluate any investment or security and

00:03:25 --> 00:03:30
is not directed at any investors or

00:03:26 --> 00:03:33
potential investors in any a16z fund

00:03:29 --> 00:03:35
please note that a16z and its Affiliates

00:03:32 --> 00:03:37
may also maintain investments in the

00:03:34 --> 00:03:39
companies discussed in this podcast for

00:03:36 --> 00:03:41
more details including a link to our

00:03:38 --> 00:03:43
investments please see a16c.com

00:03:40 --> 00:03:52
disclosures

00:03:42 --> 00:03:55
[Music]

00:03:51 --> 00:03:57
we are increasingly hearing terms like

00:03:54 --> 00:04:00
chips semiconductors servers and compute

00:03:56 --> 00:04:03
but are all of these the same thing and

00:04:00 --> 00:04:04
what role do they play in our AI future

00:04:02 --> 00:04:06
if you're running any kind of AI

00:04:03 --> 00:04:09
algorithm right this AI algorithm runs

00:04:05 --> 00:04:11
on a chip right and the the most

00:04:08 --> 00:04:13
commonly used chips today are AI

00:04:10 --> 00:04:15
accelerators which are in terms of how

00:04:12 --> 00:04:17
they're built actually very close to

00:04:14 --> 00:04:18
Graphics chips right so the cards that

00:04:16 --> 00:04:21
hese chips are on that are in these

00:04:17 --> 00:04:22
rvers often referred to as gpus which

00:04:20 --> 00:04:24
stands for graphics Processing Unit

00:04:21 --> 00:04:26
which is kind of funny right they're not

00:04:23 --> 00:04:28
doing Graphics obviously but it's a very

00:04:25 --> 00:04:30
similar type of Technology if you look

00:04:27 --> 00:04:33
inside of them they basically are very

00:04:29 --> 00:04:36
good at processing very large number of

00:04:32 --> 00:04:38
math operations per cycle in a very

00:04:35 --> 00:04:40
short period of time so very classically

00:04:37 --> 00:04:41
like an old-fashioned CPU would would

00:04:39 --> 00:04:43
run one instructions you know every

00:04:40 --> 00:04:45
cycle round then they had multiple cores

00:04:42 --> 00:04:48
o maybe you know modern CPU can do can

00:04:44 --> 00:04:50
do a couple of 10 instructions but these

00:04:47 --> 00:04:52
sort of modern AI cards they can do more

00:04:49 --> 00:04:54
than a hundred thousand instructions per

00:04:51 --> 00:04:57
cycle so they're extremely performant so

00:04:53 --> 00:04:58
this is a GPU these gpus run inside of

00:04:56 --> 00:05:00
servers do you think of them as big

00:04:57 --> 00:05:02
boxes you know I have a power plug on

00:04:59 --> 00:05:03
the outside and a networking plugin and

00:05:01 --> 00:05:05
then these server sit in data centers

00:05:02 --> 00:05:06
where you have racks and racks of them

00:05:04 --> 00:05:09
that do the actual compute

00:05:05 --> 00:05:12
let's quickly recap CPU is central

00:05:08 --> 00:05:15
processing unit and GPU is Graphics

00:05:11 --> 00:05:17
processing unit and while both CPUs and

00:05:14 --> 00:05:20
gpus today can both perform parallel

00:05:16 --> 00:05:23
processing the degree of parallelization

00:05:19 --> 00:05:25
is what sets gpus apart for certain

00:05:22 --> 00:05:27
workloads so for example CPUs can

00:05:24 --> 00:05:30
actually do tens or even thousands of

00:05:26 --> 00:05:33
loating Point operations per cycle but

00:05:29 --> 00:05:36
a GPU can now do over a hundred thousand

00:05:32 --> 00:05:38
the basic idea of a GPU is that instead

00:05:35 --> 00:05:40
of just working with individual values

00:05:37 --> 00:05:42
it works with Vector so even mattresses

00:05:39 --> 00:05:44
or tensors more generally the TPU for

00:05:42 --> 00:05:45
example is Google's name for these kind

00:05:43 --> 00:05:47
of chips so either they call them tensor

00:05:45 --> 00:05:48
processing units which is actually a

00:05:46 --> 00:05:51
pretty good good name for them right the

00:05:47 --> 00:05:53
cores and then and these modern gpus

00:05:50 --> 00:05:56
often called tensor Force they operate

00:05:52 --> 00:05:58
on on tensors and you know basically the

00:05:55 --> 00:06:00
core of their value propositions is they

00:05:57 --> 00:06:02
can do matrix multiplication so if

00:05:59 --> 00:06:04
remember metrics like you know like a

00:06:01 --> 00:06:06
rows and Columns of of numbers they can

00:06:03 --> 00:06:09
for example multiply two mattresses in a

00:06:05 --> 00:06:11
c cycle so in a very very fast operation

00:06:08 --> 00:06:13
and that's really what gives us a speed

00:06:10 --> 00:06:15
that's necessary to run these incredibly

00:06:12 --> 00:06:17
large language and image models that

00:06:14 --> 00:06:20
make generative AI today

00:06:16 --> 00:06:22
's gpus are far more powerful than

00:06:19 --> 00:06:24
their ancestors whether we're comparing

00:06:21 --> 00:06:27
to the earliest graphics cards in arcade

00:06:23 --> 00:06:31
gaming days 50 years ago or the GeForce

00:06:26 --> 00:06:34
256 the first personal computer GPU and

00:06:30 --> 00:06:36
failed by Nvidia in 1999 but is it

00:06:33 --> 00:06:38
surprising that we're seeing this chip

00:06:35 --> 00:06:41
design applied so readily to this

00:06:37 --> 00:06:43
emerging space of AI or should we expect

00:06:40 --> 00:06:45
a new architecture to evolve and be more

00:06:42 --> 00:06:47
performant in the future in one way I

00:06:45 --> 00:06:48
think it's very surprising right who

00:06:46 --> 00:06:50
would have thought that my gaming PC at

00:06:47 --> 00:06:53
my Bitcoin miner would eventually become

00:06:49 --> 00:06:56
a good AI engineer at the same time

00:06:52 --> 00:06:59
all of what all of these problems have

00:06:55 --> 00:07:01
in common is that you want to

00:06:58 --> 00:07:03
execute many operations in parallel you

00:07:00 --> 00:07:04
can think a GPU was something possible

00:07:02 --> 00:07:06
for graphics but you can think of them

00:07:03 --> 00:07:08
also just as something that's very good

00:07:05 --> 00:07:10
in performing the same operation and a

00:07:07 --> 00:07:12
very large number of parallel inputs

00:07:09 --> 00:07:14
right a very large vector or very large

00:07:11 --> 00:07:16
measures all right so perhaps it's not

00:07:13 --> 00:07:19
so surprising that nvidia's prize gpus

00:07:15 --> 00:07:21
are aligned to this AI wave but they're

00:07:18 --> 00:07:24
also not the only company participating

00:07:20 --> 00:07:26
here is Guido breaking down the hardware

00:07:23 --> 00:07:28
cosystem the ecosystem comes in many

00:07:25 --> 00:07:30
layers right so let's start with the

00:07:27 --> 00:07:32
chips at the bottom

00:07:29 --> 00:07:33
and videos King off the hill at the

00:07:31 --> 00:07:35
moment right there a 100 is the

00:07:32 --> 00:07:37
Workhorse that that powers the the

00:07:34 --> 00:07:39
current AI Revolution they're coming up

00:07:36 --> 00:07:40
with a new one now called the h100 you

00:07:38 --> 00:07:42
know which of the Next Generation

00:07:39 --> 00:07:44
there's a couple of other vendors in the

00:07:41 --> 00:07:46
space Intel uh has something called

00:07:43 --> 00:07:48
Gaudi Gaudi 2 right that's uh and as

00:07:45 --> 00:07:50
well as that graphics card with Arc

00:07:47 --> 00:07:52
they're seeing some usage uh AMD has has

00:07:49 --> 00:07:54
a chip in this space and then we have

00:07:51 --> 00:07:56
the large clouds that are starting to

00:07:53 --> 00:07:57
build or in some cases have been

00:07:55 --> 00:07:59
building for some time their own ships

00:07:56 --> 00:08:01
right Google with the TPU you mentioned

00:07:58 --> 00:08:03
before right that is quite popular and

00:08:00 --> 00:08:05
uh Amazon has a chip called trainium for

00:08:03 --> 00:08:07
training and influencia for for

00:08:04 --> 00:08:08
inference and we'll probably see more of

00:08:06 --> 00:08:10
those in the future from some of these

00:08:07 --> 00:08:12
vendors but you know at the moment

00:08:09 --> 00:08:14
Nvidia still has a very very strong

00:08:11 --> 00:08:16
position as the vast majority of of

00:08:13 --> 00:08:17
trainings going on on their chips when

00:08:15 --> 00:08:19
we think about the different trips that

00:08:16 --> 00:08:20
you mentioned like the a100s are the

00:08:18 --> 00:08:23
strongest and maybe there's the most

00:08:19 --> 00:08:24
demand for those but how do they compare

00:08:22 --> 00:08:26
to some of these chips created by other

00:08:24 --> 00:08:28
companies is it like you know double the

00:08:25 --> 00:08:31
performance or is there some other

00:08:27 --> 00:08:33
metric or factor that may make some much

00:08:30 --> 00:08:35
more performant that's a great question

00:08:32 --> 00:08:37
you know if you look at the pure

00:08:34 --> 00:08:39
Hardware statistics so how many floating

00:08:36 --> 00:08:41
Point operations per second can these

00:08:38 --> 00:08:43
chips do there's others that are very

00:08:40 --> 00:08:45
competitive with what an Nvidia has

00:08:42 --> 00:08:47
nvidia's big Advantage is that they have

00:08:44 --> 00:08:48
a very mature software ecosystem so

00:08:46 --> 00:08:50
imagine you are an artificial

00:08:47 --> 00:08:52
intelligence developer or engineer or

00:08:49 --> 00:08:54
esearcher you're often

00:08:51 --> 00:08:57
um using a model that's open source you

00:08:53 --> 00:08:59
know somebody else developed and you

00:08:56 --> 00:09:01
know how fast that model runs in many

00:08:58 --> 00:09:03
cases depends on how well is optimized

00:09:00 --> 00:09:04
for a particular chip

00:09:02 --> 00:09:06
and so the big advantage that Nvidia has

00:09:03 --> 00:09:08
today is that their software ecosystems

00:09:05 --> 00:09:09
which is so much more mature right I can

00:09:07 --> 00:09:11
grab a model it has all the

00:09:08 --> 00:09:13
necessary optimizations for NVIDIA to

00:09:10 --> 00:09:15
run out of the box right I don't have to

00:09:12 --> 00:09:16
do anything but some of these other

00:09:14 --> 00:09:18
chips I may have to do a lot more of

00:09:15 --> 00:09:20
these optimizations myself right and

00:09:17 --> 00:09:21
that's what giving what gives them the

00:09:19 --> 00:09:24
Strategic advantages

00:09:20 --> 00:09:26
o as we've touched on AI software is

00:09:23 --> 00:09:28
heavily dependent on Hardware but what

00:09:25 --> 00:09:30
Guido is pointing towards here is the

00:09:27 --> 00:09:32
performance of Hardware being heavily

00:09:29 --> 00:09:34
integrated with software so nvidia's

00:09:31 --> 00:09:36
Cuda system makes it easier for

00:09:33 --> 00:09:38
engineers to plug in and make

00:09:35 --> 00:09:41
optimizations like running with lower

00:09:37 --> 00:09:43
Precision numbers here is Guido speaking

00:09:40 --> 00:09:45
to the kind of optimizations that do

00:09:42 --> 00:09:47
exist it happens at all layers of the

00:09:44 --> 00:09:49
stack some of it is coming from Academia

00:09:46 --> 00:09:51
some of it is done by the large

00:09:48 --> 00:09:53
companies that operate in the space

00:09:50 --> 00:09:55
right some of them is frankly by

00:09:52 --> 00:09:57
enthusiasts but just want to see their

00:09:54 --> 00:09:59
model run faster but to give an idea of

00:09:56 --> 00:10:01
how this works like for example you know

00:09:58 --> 00:10:03
typically a floating Point number is

00:10:00 --> 00:10:05
represented in 32 bits right and some

00:10:02 --> 00:10:06
people figured out how to reduce that

00:10:04 --> 00:10:08
216 bit when somebody was like well

00:10:05 --> 00:10:09
actually we can do it in eight bits and

00:10:07 --> 00:10:11
you have to be really careful how you do

00:10:09 --> 00:10:14
they have to normalize to make sure it

00:10:10 --> 00:10:16
doesn't overrun or under run right and

00:10:13 --> 00:10:17
um but if you normalize everything you

00:10:15 --> 00:10:19
can use much much shorter closer

00:10:16 --> 00:10:21
integers for these calculations there's

00:10:18 --> 00:10:24
many tricks like that they're really

00:10:20 --> 00:10:26
good AI developers use to to squeeze

00:10:23 --> 00:10:28
more performance out of the the chips

00:10:25 --> 00:10:30
that they have so to reiterate keto's

00:10:27 --> 00:10:32
Point floating Point numbers are

00:10:29 --> 00:10:35
typically represented in 32-bit it's

00:10:31 --> 00:10:37
that's 32 zeros and ones or binary

00:10:34 --> 00:10:40
digits with the first bit being for sine

00:10:36 --> 00:10:43
the next eight for the exponent and the

00:10:39 --> 00:10:45
next 23 for the fraction this gives a

00:10:42 --> 00:10:48
fairly large range between the smallest

00:10:44 --> 00:10:51
possible value and the largest possible

00:10:47 --> 00:10:53
value but also allows many steps in

00:10:50 --> 00:10:55
between now when many people think of

00:10:52 --> 00:10:57
semiconductors they naturally think of

00:10:54 --> 00:11:00
Morse law that's the term that describes

00:10:56 --> 00:11:03
the phenomenon observed by Gordon Moore

00:10:59 --> 00:11:05
by the way back in 1965 where the number

00:11:02 --> 00:11:09
of transistors in an integrated circuit

00:11:04 --> 00:11:11
doubles every two years but despite our

00:11:08 --> 00:11:13
Collective success for decades to

00:11:10 --> 00:11:16
continue to push more computation onto

00:11:12 --> 00:11:19
smaller chips are we now at the limits

00:11:15 --> 00:11:23
of lithography for example an apple M1

00:11:18 --> 00:11:26
chip from 2022 has 116 billion that's

00:11:22 --> 00:11:27
billing with a B transistors and if we

00:11:25 --> 00:11:31
compare that to the arm one processor

00:11:27 --> 00:11:33
from 1985 that had 25

00:11:30 --> 00:11:35
000 and by the way way the Apple M1 chip

00:11:32 --> 00:11:37
is not even the highest transistor count

00:11:34 --> 00:11:40
oday I believe that belongs to the

00:11:36 --> 00:11:44
wafer scale Engine 2 by cerebrus with

00:11:39 --> 00:11:46
2.6 trillion transistors so looking

00:11:43 --> 00:11:48
ahead are we at the point where we

00:11:45 --> 00:11:50
really don't see the same kind of

00:11:47 --> 00:11:54
advancement in at least the physical

00:11:49 --> 00:11:56
architecture of chips and if so where do

00:11:53 --> 00:11:58
we see advancements moving forward is it

00:11:55 --> 00:12:00
in the software is it in the

00:11:57 --> 00:12:03
specialization of these chips how do you

00:11:59 --> 00:12:05
see this industry moving forward yeah

00:12:02 --> 00:12:08
great question the so the soothing suit

00:12:04 --> 00:12:10
o to tease apart there like Moore's Law

00:12:07 --> 00:12:13
is actually still as of today Alive and

00:12:09 --> 00:12:15
Kicking right so we're still but Muslim

00:12:12 --> 00:12:16
talks about the density of of

00:12:14 --> 00:12:18
transistors on a chip and we're still

00:12:15 --> 00:12:20
increasing that right now the scale of

00:12:17 --> 00:12:21
transistors going down now I guess it's

00:12:19 --> 00:12:23
exactly the same speed I don't know but

00:12:20 --> 00:12:25
as of today if you plot the the

00:12:22 --> 00:12:27
curve right it seems to be

00:12:24 --> 00:12:28
um intact

00:12:26 --> 00:12:31
here's a second thing called Denard

00:12:27 --> 00:12:33
scaling um which you know used to

00:12:30 --> 00:12:35
basically say just as the number of

00:12:32 --> 00:12:38
transistors I can squeeze uh onto a chip

00:12:34 --> 00:12:40
right doubles every 18 months or so it

00:12:37 --> 00:12:41
essentially meant that the power at the

00:12:39 --> 00:12:43
same time would decrease by the same

00:12:40 --> 00:12:45
factor right it says something about

00:12:42 --> 00:12:46
frequency but let's see the net outcome

00:12:44 --> 00:12:49
is power

00:12:45 --> 00:12:51
and that's for the last 10 15 years or

00:12:48 --> 00:12:54
so no longer it's true if you look at

00:12:50 --> 00:12:57
he frequency of a of a CPU it hasn't

00:12:53 --> 00:12:59
moved much over the past 10 12 15 years

00:12:56 --> 00:13:03
the net result of this is we're getting

00:12:58 --> 00:13:05
chips that have more transistors

00:13:02 --> 00:13:06
um but each individual core doesn't

00:13:04 --> 00:13:08
actually run faster right and what this

00:13:05 --> 00:13:10
means is we have to have lots and lots

00:13:07 --> 00:13:11
more parallel cores and this is why

00:13:09 --> 00:13:14
these tensor operations are so

00:13:10 --> 00:13:15
attractive right I can't add like on a

00:13:13 --> 00:13:17
single core I can't add numbers more

00:13:15 --> 00:13:19
quickly but if I can do a matrix

00:13:16 --> 00:13:21
operation instead right and especially

00:13:18 --> 00:13:22
do many of them in parallel at the same

00:13:20 --> 00:13:23
time right

00:13:21 --> 00:13:25
he second big consequence of that is

00:13:22 --> 00:13:27
that our chips are getting more and more

00:13:24 --> 00:13:30
power hungry if you look at the you know

00:13:26 --> 00:13:31
the even a graphics card for gaming PC

00:13:29 --> 00:13:33
today right you have these these

00:13:30 --> 00:13:35
graphics cards there's like hundreds of

00:13:32 --> 00:13:37
watts of power because of the 500 watt

00:13:34 --> 00:13:39
card right which is much much more than

00:13:36 --> 00:13:40
they than they used to be and that trend

00:13:38 --> 00:13:42
is going to continue and you know we're

00:13:39 --> 00:13:44
seeing what's happening data centers

00:13:41 --> 00:13:46
eeing more more things like liquid

00:13:43 --> 00:13:48
cooling uh at least being experimented

00:13:45 --> 00:13:50
with or in some cases uh you know

00:13:47 --> 00:13:53
getting deployed where basically the

00:13:49 --> 00:13:55
nergy densities for these AI chips

00:13:52 --> 00:13:57
right it's getting so high that we need

00:13:54 --> 00:13:59
novel cooling solutions to make them

00:13:56 --> 00:14:01
happen so Moore's Law yes but power

00:13:58 --> 00:14:03
is becoming an issue heat is

00:14:00 --> 00:14:05
becoming an issue and we need to rely

00:14:02 --> 00:14:07
more and more on Parallel processing so

00:14:04 --> 00:14:09
it sounds like Moore's Law is indeed not

00:14:06 --> 00:14:12
quite dead but perhaps a little more

00:14:08 --> 00:14:13
complex than it once was performance

00:14:11 --> 00:14:15
increases continue as we integrate

00:14:12 --> 00:14:18
parallel cores but we're also seeing

00:14:14 --> 00:14:20
chips become a lot more power hungry all

00:14:17 --> 00:14:23
of this will continue being dynamic as

00:14:19 --> 00:14:25
demand continues to outpace supply for

00:14:22 --> 00:14:27
high performance chips so as we look

00:14:24 --> 00:14:30
ahead what does all this mean for

00:14:26 --> 00:14:32
competition and cost you'll learn a lot

00:14:29 --> 00:14:34
more about that in the rest of our AI

00:14:31 --> 00:14:37
Hardware series tackling the questions

00:14:33 --> 00:14:40
that everybody is asking including we

00:14:36 --> 00:14:42
currently don't have as many AI chips or

00:14:39 --> 00:14:44
servers as we'd like to have how do you

00:14:41 --> 00:14:47
think about the relationship between

00:14:43 --> 00:14:49
compute capital and then the technology

00:14:46 --> 00:14:51
that we have today yeah that's uh that's

00:14:48 --> 00:14:52
the million dollar question or maybe

00:14:50 --> 00:14:54
trillion dollar question I don't know

00:14:51 --> 00:14:56
e'll see you there

00:14:53 --> 00:14:59
thank you so much for listening to the

00:14:55 --> 00:15:01
a16c podcast what we're trying to do

00:14:58 --> 00:15:04
here is provide an informed clear-eyed

00:15:00 --> 00:15:06
but also optimistic take on technology

00:15:03 --> 00:15:08
and its future and we're trying to do

00:15:05 --> 00:15:10
that by featuring some of the most

00:15:07 --> 00:15:12
inspiring people and the things that

00:15:09 --> 00:15:14
hey're building so if that is

00:15:11 --> 00:15:16
interesting to you and you'd like to

00:15:13 --> 00:15:18
join us on this journey go ahead and

00:15:15 --> 00:15:19
click subscribe and make sure to let us

00:15:17 --> 00:15:21
know in the comments below what you'd

00:15:18 --> 00:15:23
like to see us cover next

00:15:20 --> 00:15:26
hank you so much for listening and

00:15:22 --> 00:15:26
we'll see you next time

<!-- YOUTUBE_TRANSCRIPT_END -->
