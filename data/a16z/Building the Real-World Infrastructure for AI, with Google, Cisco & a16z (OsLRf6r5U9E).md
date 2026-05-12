---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "OsLRf6r5U9E"
title: "Building the Real-World Infrastructure for AI, with Google, Cisco & a16z"
video_url: "https://www.youtube.com/watch?v=OsLRf6r5U9E"
thumbnail_url: "https://i.ytimg.com/vi/OsLRf6r5U9E/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=OsLRf6r5U9E"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-10-29T13:58:56.000Z"
upload_date: "2025-10-29"
duration_seconds: 1967
duration_human: "32:47"
view_count: 18686
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:31:36.000Z"
---

# Building the Real-World Infrastructure for AI, with Google, Cisco & a16z

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=OsLRf6r5U9E
- video_id: OsLRf6r5U9E
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-10-29T13:58:56.000Z
- upload_date: 2025-10-29
- duration: 32:47
- view_count: 18686
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

AI isn’t just changing software, it’s causing the biggest buildout of physical infrastructure in modern history.

In this episode, live from Runtime, a16z's Raghu Raghuram speaks with Amin Vahdat, VP and GM of AI and Infrastructure at Google, and Jeetu Patel, President and Chief Product Officer at Cisco, about the unprecedented scale of what’s being built, from chips to power grids to global data centers.

They discuss the new “AI industrial revolution,” where power, compute, and network are the new scarce resources; how geopolitical competition is shaping chip design and data center placement; and why the next generation of AI infrastructure will demand co-design across hardware, software, and networking.

The conversation also covers how enterprises will adapt, why we’re still in the earliest phase of this CapEx supercycle, and how AI inference, reinforcement learning, and multi-site computing will transform how systems are built and run.

00:00 Intro
01:16 The Scale of the AI Buildout
03:00 CapEx, Demand Signals, and the Power Bottleneck
05:56 Data Centers, Scarcity, and Global Power Constraints
08:18 Rethinking Systems and Networking
10:08 Scale-Out vs. Mainframe Architectures
12:18 The Next Wave in Processor Innovation
14:36 Specialized Chips, Power Efficiency, and Geopolitics
16:14 Networking Evolution and Scale Challenges
18:52 Building Networks for AI: Power, Bursts, and Bottlenecks
21:00 Inference Architecture and Cost Reduction
24:00 AI Inside the Enterprise: Code Migration and Productivity
27:30 Rewiring Culture Around Rapid AI Adoption
29:40 Startups, Models, and Intelligent Routing Layers
31:55 The Future of AI Models, Agents, and Media
33:10 Closing Thoughts

Resources

Full Transcript: https://a16z.substack.com/p/surviving-the-ai-sprint-up-close

Follow Raghu on X: https://x.com/RaghuRaghuram
Follow Jeetu on X: https://x.com/jpatel41
Follow Amin on LinkedIn: https://www.linkedin.com/in/vahdat/

Find a16z on X: https://x.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Listen to the a16z Podcast on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX
Listen to the a16z Podcast on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
The good news is infrastructure sexy

00:00:01 --> 00:00:06
again, so that's kind of cool. This is

00:00:03 --> 00:00:08
like the combination of the build out of

00:00:05 --> 00:00:11
the internet, the space race, and the

00:00:07 --> 00:00:12
Manhattan Project all put into one where

00:00:10 --> 00:00:15
there's a geopolitical implication of

00:00:11 --> 00:00:16
it, there's an economic implication,

00:00:14 --> 00:00:18
there's national security implication,

00:00:15 --> 00:00:19
and then there's just a speed

00:00:17 --> 00:00:21
implication that's pretty profound.

00:00:18 --> 00:00:23
>> I think it's easy to say I've seen

00:00:20 --> 00:00:25
othing like this. I'm fairly certain no

00:00:22 --> 00:00:27
ne's seen anything like this. The

00:00:24 --> 00:00:29
internet in the late '90s, early 2000s

00:00:26 --> 00:00:31
was big and we felt like, "Oh my gosh,

00:00:28 --> 00:00:34
can't believe the uh build out the

00:00:30 --> 00:00:36
rate." This makes it I mean, 10x is an

00:00:33 --> 00:00:39
understatement. It's 100x what the

00:00:35 --> 00:00:39
internet was.

00:00:41 --> 00:00:50
[Music]

00:00:52 --> 00:00:56
Hello. Hello.

00:00:55 --> 00:00:59
All right.

00:00:57 --> 00:01:03
What better time and place to talk

00:00:58 --> 00:01:03
infrastructure? All right.

00:01:02 --> 00:01:07
So, we were back in the green room and

00:01:04 --> 00:01:08
just as

00:01:06 --> 00:01:10
um

00:01:07 --> 00:01:12
the first question was getting answered

00:01:09 --> 00:01:14
I got cut off, so this could be an

00:01:11 --> 00:01:16
entire repeat for all I know.

00:01:13 --> 00:01:17
So, but anyway, let's go, right?

00:01:15 --> 00:01:19
Um

00:01:16 --> 00:01:21
the first question is similar, so both

00:01:18 --> 00:01:22
of you, firstly, welcome and thank you

00:01:20 --> 00:01:23
for being here.

00:01:21 --> 00:01:25
Thank you.

00:01:22 --> 00:01:26
>> And hope you'll have a great day and a

00:01:24 --> 00:01:28
half as well.

00:01:25 --> 00:01:29
Um both of you've been in the industry

00:01:27 --> 00:01:31
for

00:01:28 --> 00:01:32
a while.

00:01:30 --> 00:01:35
And both of you have lived through many

00:01:31 --> 00:01:36
infrastructure cycles, right?

00:01:34 --> 00:01:39
So, have you seen anything like this

00:01:35 --> 00:01:42
cycle from your vantage point? Not from

00:01:38 --> 00:01:43
an investor vantage point but from your

00:01:41 --> 00:01:46
internal

00:01:42 --> 00:01:48
um vantage point where you're

00:01:45 --> 00:01:51
sponsible for building things and

00:01:47 --> 00:01:52
planning for things and so on.

00:01:50 --> 00:01:53
Anyone of you where do you want to

00:01:51 --> 00:01:54
start? You want to start Amin?

00:01:52 --> 00:01:56
>> Sure, Amin. I

00:01:53 --> 00:01:58
mean, I think it's easy to say I've

00:01:55 --> 00:01:59
seen nothing like this. I'm fairly

00:01:57 --> 00:02:02
certain no one's seen anything like

00:01:58 --> 00:02:03
this. The internet in the late '90s,

00:02:01 --> 00:02:06
early 2000s was big and we felt like,

00:02:03 --> 00:02:07
"Oh my gosh, can't believe the uh build

00:02:05 --> 00:02:10
out the rate."

00:02:06 --> 00:02:12
This makes it I mean, 10x is an

00:02:09 --> 00:02:13
understatement. It's 100x what the

00:02:11 --> 00:02:16
internet was.

00:02:12 --> 00:02:19
Um I think the upside is as big as the

00:02:15 --> 00:02:20
internet was, same thing, 10x and 100x.

00:02:18 --> 00:02:22
Yeah, noth- nothing like it. Yeah, I'd

00:02:19 --> 00:02:25
agree. I don't think there's any priors

00:02:21 --> 00:02:27
to this size the speed and scale. Um

00:02:24 --> 00:02:29
I'd I'd say um

00:02:26 --> 00:02:31
the good news is infrastructure sexy

00:02:28 --> 00:02:34
again, so that's kind of cool. Um it was

00:02:30 --> 00:02:36
a long time it wasn't sexy. Um

00:02:33 --> 00:02:38
the um

00:02:35 --> 00:02:40
the thing I would say that's

00:02:37 --> 00:02:42
really interesting is this is

00:02:39 --> 00:02:44
like the combination of

00:02:41 --> 00:02:45
the build out of the internet, the space

00:02:43 --> 00:02:47
race

00:02:44 --> 00:02:48
and the Manhattan Project all put into

00:02:46 --> 00:02:50
ne

00:02:47 --> 00:02:53
where there's a geopolitical implication

00:02:49 --> 00:02:54
of it, there's an economic implication

00:02:52 --> 00:02:56
there's national security implication,

00:02:53 --> 00:02:58
and then there's um

00:02:55 --> 00:03:00
you know, just a speed implication

00:02:57 --> 00:03:01
that's pretty profound, so uh yeah,

00:02:59 --> 00:03:03
we've

00:03:00 --> 00:03:05
you know, none of us have ever seen it

00:03:02 --> 00:03:07
um at this size and scale. On the other

00:03:05 --> 00:03:09
hand, um

00:03:06 --> 00:03:10
I think we're grossly underestimating

00:03:08 --> 00:03:12
like there's

00:03:09 --> 00:03:13
the most common question I ask right now

00:03:11 --> 00:03:14
is is there a bubble? I think we're

00:03:12 --> 00:03:15
grossly underestimating the build out. I

00:03:13 --> 00:03:17
think there's going to be much more

00:03:14 --> 00:03:18
needed than what we are

00:03:16 --> 00:03:21
putting the

00:03:17 --> 00:03:23
um you know, projections towards.

00:03:20 --> 00:03:25
So, that's the follow-on question is

00:03:22 --> 00:03:28
where are we, do you think, in the CapEx

00:03:24 --> 00:03:29
spend cycle? But more importantly

00:03:27 --> 00:03:32
what are the signals that you guys use

00:03:28 --> 00:03:34
internally, right, in your thinking? I

00:03:31 --> 00:03:36
mean, you have to plan data centers

00:03:33 --> 00:03:39
whatever, 4 5 years in advance. You're

00:03:35 --> 00:03:41
buying nuclear reactors and whatnot. So,

00:03:38 --> 00:03:43
how do you think about the demand

00:03:40 --> 00:03:45
signals as well as your technology

00:03:42 --> 00:03:47
signals? And G, do the same thing for

00:03:44 --> 00:03:50
you but from the point of view of

00:03:46 --> 00:03:53
enterprise and neo clouds, etc. Amin? Uh

00:03:50 --> 00:03:55
we're early in the cycle is what what I

00:03:52 --> 00:03:56
would say, certainly relative to the

00:03:54 --> 00:03:58
demand that we're seeing. So, our

00:03:55 --> 00:04:00
internal users are uh we've been

00:03:57 --> 00:04:02
building with TPUs for 10 years, uh so

00:03:59 --> 00:04:03
we have now seven generations in

00:04:01 --> 00:04:08
production for internal and external

00:04:02 --> 00:04:11
use. Our seven and eight-year-old TPUs

00:04:07 --> 00:04:12
have 100% utilization. Oof. I

00:04:10 --> 00:04:14
And that that just shows what the the

00:04:11 --> 00:04:16
demand is. Everyone would of course

00:04:13 --> 00:04:18
prefer to be on the latest generation uh

00:04:15 --> 00:04:21
but it whatever that they can get. So,

00:04:17 --> 00:04:23
this tells me that the demand is

00:04:20 --> 00:04:25
tremendous, but also uh who we're

00:04:22 --> 00:04:27
turning away and the use cases that

00:04:24 --> 00:04:29
we're turning away. It's It's not like,

00:04:26 --> 00:04:31
"Oh yeah, that's kind of cool." It's "Oh

00:04:28 --> 00:04:32
my gosh

00:04:30 --> 00:04:35
we're actually not going to invest in

00:04:32 --> 00:04:37
this and there's no option because

00:04:34 --> 00:04:39
that's where we are on the list." Same

00:04:36 --> 00:04:40
with many of you in the room.

00:04:38 --> 00:04:42
I we're we're working with many of you

00:04:39 --> 00:04:44
in the room and many of yours are

00:04:41 --> 00:04:46
telling me directly and thank you. Um we

00:04:43 --> 00:04:47
need more earlier.

00:04:45 --> 00:04:48
Right.

00:04:46 --> 00:04:50
Now, the challenge here though is, as

00:04:47 --> 00:04:52
you said

00:04:49 --> 00:04:54
that we're limited by power. We're

00:04:51 --> 00:04:56
limited by transforming land. We're

00:04:54 --> 00:05:00
limited by um

00:04:55 --> 00:05:02
permitting and we're limited by uh

00:04:59 --> 00:05:03
backup delivery of lots of things in the

00:05:01 --> 00:05:06
supply chain.

00:05:02 --> 00:05:08
So, one worry I have is that uh the

00:05:05 --> 00:05:11
supply isn't actually going to catch up

00:05:08 --> 00:05:14
to the demand as quickly as we'd all

00:05:10 --> 00:05:16
ike. I I heard the previous session

00:05:13 --> 00:05:17
some of the discussions of the um

00:05:15 --> 00:05:19
trillions of dollars that we're going to

00:05:16 --> 00:05:20
be spending, which I think is accurate.

00:05:18 --> 00:05:22
I'm not sure that we're going to be able

00:05:19 --> 00:05:24
to cash all those checks. Like in other

00:05:21 --> 00:05:26
words, literally you all have some

00:05:23 --> 00:05:28
money, you can't spend it all as fast as

00:05:25 --> 00:05:30
you want. I think that's going to extend

00:05:27 --> 00:05:31
for 3 4 5 years.

00:05:29 --> 00:05:32
Wow.

00:05:30 --> 00:05:34
And how do you deal with the

00:05:31 --> 00:05:35
depreciation cycles that are involved

00:05:33 --> 00:05:36
there?

00:05:34 --> 00:05:38
Does the demand curve and the

00:05:35 --> 00:05:41
depreciation cycle curves match up?

00:05:38 --> 00:05:43
Well, fortunately buy just-in-time, but

00:05:40 --> 00:05:45
he nice thing is uh just-in-time for

00:05:42 --> 00:05:47
the hardware. The depreciation cycle for

00:05:44 --> 00:05:49
the space power is more like uh

00:05:46 --> 00:05:52
somewhere between 25 and 40 years, so we

00:05:48 --> 00:05:55
have benefits there.

00:05:51 --> 00:05:58
I think if you think of on the

00:05:54 --> 00:06:00
networking side and you look at both um

00:05:57 --> 00:06:02
enterprise and

00:05:59 --> 00:06:03
the hyper scalers as well as the neo

00:06:01 --> 00:06:06
clouds, I think the story is quite

00:06:02 --> 00:06:09
different. So, the the

00:06:05 --> 00:06:11
enterprise is pretty nascent

00:06:08 --> 00:06:14
in its build out of true infrastructure.

00:06:11 --> 00:06:16
Um I just don't think that

00:06:13 --> 00:06:18
he data centers like if you assume that

00:06:15 --> 00:06:19
100% of the data centers at at some

00:06:17 --> 00:06:21
point in time need you will need to get

00:06:18 --> 00:06:22
re-racked

00:06:20 --> 00:06:24
and you will need a very different level

00:06:21 --> 00:06:26
of power

00:06:23 --> 00:06:28
um requirement per rack that's going to

00:06:25 --> 00:06:30
be there compared to what used to be

00:06:27 --> 00:06:32
there in the traditional data centers.

00:06:29 --> 00:06:35
I just don't think that um the

00:06:32 --> 00:06:37
nterprises are far enough along. Maybe

00:06:34 --> 00:06:39
the few enterprises that are at super

00:06:36 --> 00:06:40
high scale might be there, but I don't

00:06:38 --> 00:06:42
hink the enterprises are far enough

00:06:39 --> 00:06:43
along. Hyper scalers and neo clouds is a

00:06:41 --> 00:06:45
completely different story.

00:06:43 --> 00:06:48
And

00:06:44 --> 00:06:51
uh to Amin's point on this notion of

00:06:47 --> 00:06:53
scarcity of power, compute, and network

00:06:50 --> 00:06:54
being the three big kind of constraints

00:06:52 --> 00:06:57
in this thing, um

00:06:53 --> 00:06:59
I I would say right now that

00:06:56 --> 00:07:02
because there's not enough power

00:06:58 --> 00:07:03
singularly in one location, data centers

00:07:01 --> 00:07:04
are being built where the power is

00:07:02 --> 00:07:06
available rather than power being

00:07:03 --> 00:07:07
brought to where the data centers are.

00:07:05 --> 00:07:09
Um

00:07:06 --> 00:07:10
and that's why you're seeing a lot of

00:07:08 --> 00:07:12
projects that are being built out all

00:07:09 --> 00:07:13
throughout the world. The other point

00:07:11 --> 00:07:15
hough is

00:07:13 --> 00:07:18
the um

00:07:14 --> 00:07:21
the the lion's share of the

00:07:17 --> 00:07:22
constraints that we're going to have

00:07:20 --> 00:07:25
I I think are going to be sustainable

00:07:22 --> 00:07:26
for a for a long period of time. And as

00:07:24 --> 00:07:29
you have data centers that are being

00:07:25 --> 00:07:31
built farther and farther apart

00:07:28 --> 00:07:34
one, there's going to be a huge demand

00:07:30 --> 00:07:36
for scale-up networking so that you can

00:07:33 --> 00:07:39
have a rack that gets more and more

00:07:35 --> 00:07:40
networking for scale-up. The second is

00:07:38 --> 00:07:41
you're going to have a lot of demand for

00:07:39 --> 00:07:43
scale-out where you have multiple racks

00:07:41 --> 00:07:44
and clusters that need to get connected

00:07:42 --> 00:07:47
together.

00:07:43 --> 00:07:49
But we just launched a a new piece of

00:07:46 --> 00:07:51
silicon as well as

00:07:48 --> 00:07:53
a new chip and a system

00:07:50 --> 00:07:55
for scale across networking where you

00:07:52 --> 00:07:57
might have two data centers that act as

00:07:54 --> 00:08:00
a logical data center that could be up

00:07:56 --> 00:08:02
to 8 900 km apart.

00:07:59 --> 00:08:03
Um and and you will see that just

00:08:01 --> 00:08:04
because there's not going to be enough

00:08:02 --> 00:08:06
concentration of power in a single

00:08:03 --> 00:08:07
location. So, you'll just have to have

00:08:05 --> 00:08:09
different architectures that get built

00:08:06 --> 00:08:11
out.

00:08:08 --> 00:08:12
Actually, that brings us to the next

00:08:10 --> 00:08:14
opic that I wanted to discuss. The

00:08:11 --> 00:08:16
future of systems and networking and so

00:08:13 --> 00:08:18
n and so forth.

00:08:15 --> 00:08:21
So

00:08:17 --> 00:08:23
Google brought about the first or at

00:08:20 --> 00:08:26
least large-scale scale-out commodity

00:08:22 --> 00:08:27
servers in production for the web

00:08:25 --> 00:08:29
revolution

00:08:26 --> 00:08:31
and now Nvidia is bringing back the

00:08:28 --> 00:08:33
mainframe in a different form.

00:08:30 --> 00:08:35
So, what do you think happens next? I

00:08:32 --> 00:08:37
mean, is is this the new style of

00:08:34 --> 00:08:39
coherent cluster-wide computing that we

00:08:36 --> 00:08:41
need and there's going to be shared

00:08:38 --> 00:08:43
memory and all sorts of things or do you

00:08:40 --> 00:08:45
think the pattern changes again?

00:08:42 --> 00:08:48
I I don't think we're quite to back to

00:08:44 --> 00:08:50
mainframes in that it is still the case

00:08:47 --> 00:08:52
that people are running on scale-out

00:08:49 --> 00:08:54
architectures across these pools. In

00:08:51 --> 00:08:56
other words, whether you have

00:08:53 --> 00:08:58
GPUs or TPUs, you're not necessarily

00:08:55 --> 00:09:00
saying, "Hey, that's my GPU

00:08:57 --> 00:09:04
supercomputer." You're saying, "I've got

00:08:59 --> 00:09:05
16,384 GPUs." Yeah. And maybe I'm going

00:09:03 --> 00:09:08
to go grab some subset. Now, I've got a

00:09:04 --> 00:09:10
uniform all-to-all connectivity in many

00:09:07 --> 00:09:13
cases, which is fantastic. Same with

00:09:09 --> 00:09:15
TPUs. It's not like I say I have a 9,000

00:09:12 --> 00:09:18
chip pod and I have to make my job fit

00:09:14 --> 00:09:21
on that. Maybe I actually only need 256.

00:09:17 --> 00:09:22
Maybe I need 100,000. So, I do think

00:09:20 --> 00:09:24
that actually the

00:09:21 --> 00:09:26
software scale-out is

00:09:23 --> 00:09:28
till going to be there.

00:09:25 --> 00:09:30
I I'll note two things though. One,

00:09:27 --> 00:09:32
you're absolutely right that say about

00:09:29 --> 00:09:33
25 years ago

00:09:31 --> 00:09:35
at Google and other places

00:09:32 --> 00:09:36
imultaneously

00:09:34 --> 00:09:38
there was really a transformation of

00:09:35 --> 00:09:39
computing infrastructure. Like the

00:09:37 --> 00:09:42
notion that actually you would scale-out

00:09:38 --> 00:09:43
on commodity PCs essentially, the same

00:09:41 --> 00:09:46
ones that you could buy off the shelf

00:09:42 --> 00:09:47
running a Linux stack, and that's what

00:09:45 --> 00:09:49
you would do for disk, that's what you

00:09:47 --> 00:09:51
would do for compute, that's what you do

00:09:48 --> 00:09:53
for networking. I mean, you all take it

00:09:50 --> 00:09:55
for granted that this is sort of it was

00:09:52 --> 00:09:57
radical. There were many people who

00:09:54 --> 00:09:59
thought that this was a terrible idea

00:09:56 --> 00:10:00
that wasn't going to work. I think the

00:09:58 --> 00:10:01
xciting thing about this moment right

00:09:59 --> 00:10:03
now is actually that

00:10:01 --> 00:10:05
we're going to be reinventing

00:10:02 --> 00:10:07
I'm not saying Google, we are going to

00:10:04 --> 00:10:09
be reinventing computing.

00:10:06 --> 00:10:11
And 5 years from now, whatever the

00:10:08 --> 00:10:12
computing stack is from the hardware to

00:10:10 --> 00:10:14
the software,

00:10:12 --> 00:10:15
right, is going to be unrecognizable.

00:10:13 --> 00:10:16
And by the way, there was this co-design

00:10:14 --> 00:10:18
because if you think about it, I'll use

00:10:16 --> 00:10:22
Google examples because I know those

00:10:17 --> 00:10:24
best. Big table, Spanner, GFS, Borg,

00:10:21 --> 00:10:26
Colossus, they were hand in hand

00:10:23 --> 00:10:28
co-designed with the hardware. The

00:10:25 --> 00:10:30
cluster scale-out architecture. And it

00:10:27 --> 00:10:32
was really the You wouldn't have done

00:10:29 --> 00:10:34
the scale-out hardware if you didn't

00:10:31 --> 00:10:35
have the scale-out software. Yep.

00:10:33 --> 00:10:37
Same thing is going to happen in this

00:10:34 --> 00:10:39
moment. So, I I think that actually the

00:10:36 --> 00:10:40
mainframe

00:10:38 --> 00:10:42
it's going to look very very different.

00:10:39 --> 00:10:46
Okay. Yeah, I I do think there'll be

00:10:41 --> 00:10:47
like this ex- extreme demand for an

00:10:45 --> 00:10:49
integrated system because like right

00:10:46 --> 00:10:50
now we are

00:10:48 --> 00:10:52
very fortunate at Cisco where we do

00:10:49 --> 00:10:54
everything from the

00:10:51 --> 00:10:56
um from the physics to the semantics,

00:10:53 --> 00:11:00
you know, you think about the silicon to

00:10:55 --> 00:11:02
the application. Um and the

00:10:59 --> 00:11:03
other than power, one of the constraints

00:11:01 --> 00:11:06
is how well integrated are these

00:11:02 --> 00:11:07
systems? And do they actually work with

00:11:05 --> 00:11:09
e least amount of um

00:11:06 --> 00:11:12
lossiness

00:11:08 --> 00:11:13
uh across the entire stack. And so that

00:11:11 --> 00:11:15
level of tight integration is going

00:11:12 --> 00:11:17
to be super important. And what that

00:11:15 --> 00:11:18
means the industry will have to evolve

00:11:16 --> 00:11:20
into is

00:11:17 --> 00:11:21
we will have to work like one company

00:11:19 --> 00:11:22
even though we might actually be

00:11:20 --> 00:11:24
multiple companies that actually do

00:11:21 --> 00:11:27
these pieces. And so when we work with

00:11:23 --> 00:11:29
yperscalers like Google or others,

00:11:26 --> 00:11:31
um there is a deep design partnership

00:11:28 --> 00:11:33
that actually, you know, goes on for

00:11:30 --> 00:11:35
months and months together

00:11:32 --> 00:11:37
uh ahead of the time before we actually

00:11:34 --> 00:11:38
even do them uh deal. And then once the

00:11:36 --> 00:11:39
deal is done,

00:11:37 --> 00:11:41
of course there's a tremendous amount of

00:11:38 --> 00:11:43
pressure to make sure that they you

00:11:40 --> 00:11:45
moving pretty fast, but I think the

00:11:42 --> 00:11:47
industry's muscle of making sure that

00:11:44 --> 00:11:50
you operate in an open ecosystem and not

00:11:46 --> 00:11:52
be a walled garden is going to get

00:11:49 --> 00:11:53
important at every layer of the stack.

00:11:51 --> 00:11:54
Yep.

00:11:52 --> 00:11:57
Completely agree.

00:11:53 --> 00:12:00
And so let's talk about the

00:11:56 --> 00:12:02
disaggregate the stack a little bit.

00:11:59 --> 00:12:03
One of the most interesting topic is

00:12:01 --> 00:12:05
processors, right?

00:12:03 --> 00:12:07
Clearly there is

00:12:04 --> 00:12:09
an amazing vendor producing an amazing

00:12:06 --> 00:12:11
processor that has massive market share

00:12:08 --> 00:12:13
today, right?

00:12:10 --> 00:12:15
And we see startups all the time doing

00:12:12 --> 00:12:18
all sorts of processor architectures.

00:12:14 --> 00:12:20
You've got an amazing processor inside

00:12:17 --> 00:12:22
um your fortress.

00:12:19 --> 00:12:24
What do you think happens next in

00:12:21 --> 00:12:27
processor land?

00:12:23 --> 00:12:29
Yeah, we're a huge fans of Nvidia. Uh we

00:12:26 --> 00:12:32
sell a lot of uh Nvidia uh products

00:12:28 --> 00:12:34
and uh chips. Uh customers love them.

00:12:31 --> 00:12:37
Uh we're also huge fans of our uh TPUs.

00:12:33 --> 00:12:39
Uh I think the future is actually really

00:12:36 --> 00:12:40
exciting and actually

00:12:38 --> 00:12:41
uh we're it's not that I don't think

00:12:39 --> 00:12:44
that we've hit the point of okay,

00:12:40 --> 00:12:46
there's TPUs, there's GPUs, there's

00:12:43 --> 00:12:48
whatever Traniums or or something else.

00:12:45 --> 00:12:49
We're really seeing the golden age of

00:12:47 --> 00:12:50
specialization.

00:12:48 --> 00:12:53
And that that's my observation. In other

00:12:49 --> 00:12:54
words, if you look at it, a TPU, I'll

00:12:52 --> 00:12:57
use that example again because I know it

00:12:53 --> 00:12:59
best for certain computation is

00:12:56 --> 00:13:01
omewhere between 10 and 100 times more

00:12:58 --> 00:13:04
fficient per watt, and it's this watt

00:13:00 --> 00:13:06
hat really matters, than a CPU.

00:13:03 --> 00:13:09
Uh that's hard to walk away from, right?

00:13:05 --> 00:13:12
10 to 100x. And yet we know that there

00:13:08 --> 00:13:13
are other computations that if you built

00:13:11 --> 00:13:15
even more specialized systems for, but

00:13:12 --> 00:13:17
not just a niche computation,

00:13:14 --> 00:13:18
computations that we run a lot of at

00:13:16 --> 00:13:20
Google,

00:13:17 --> 00:13:22
right? For example, uh maybe for

00:13:19 --> 00:13:24
serving, maybe for agentic workloads,

00:13:21 --> 00:13:26
that would benefit from an even more

00:13:23 --> 00:13:29
specialized architecture. So, I think

00:13:25 --> 00:13:31
that actually at one bottleneck is how

00:13:28 --> 00:13:33
hard is it and how long does it take to

00:13:30 --> 00:13:36
turn around a specialized architecture?

00:13:32 --> 00:13:38
Right now it's forever. Yep. Right? For

00:13:35 --> 00:13:41
the best teams in the world, really from

00:13:37 --> 00:13:44
concept to in live in production,

00:13:41 --> 00:13:46
speed of light is 2 and 1/2 years. Yep.

00:13:43 --> 00:13:47
I mean that's that's if you nail

00:13:45 --> 00:13:49
everything,

00:13:46 --> 00:13:51
right? And there are a few teams that

00:13:48 --> 00:13:52
do. But how do you predict the future 2

00:13:50 --> 00:13:54
and 1/2 years out for building

00:13:51 --> 00:13:55
specialized hardware?

00:13:53 --> 00:13:57
So, A, I think we have to shrink that

00:13:54 --> 00:13:59
cycle. Mhm. But then B, at some point

00:13:56 --> 00:14:00
when things slow down a little bit, and

00:13:58 --> 00:14:02
they will, I think we're going to have

00:13:59 --> 00:14:04
to build more specialized architectures

00:14:01 --> 00:14:06
because the power savings, the cost

00:14:03 --> 00:14:08
savings, the space savings are just too

00:14:05 --> 00:14:10
dramatic to ignore. And this will

00:14:07 --> 00:14:12
actually have a really interesting

00:14:09 --> 00:14:13
implication on geopolitical structures

00:14:11 --> 00:14:15
as well because if you think about

00:14:12 --> 00:14:17
what's happening in China,

00:14:14 --> 00:14:19
China actually doesn't make 2 nanometer

00:14:16 --> 00:14:20
chips, they make, you know, 7 nanometer

00:14:18 --> 00:14:22
chips.

00:14:19 --> 00:14:24
Um and

00:14:21 --> 00:14:27
so if you think about what

00:14:23 --> 00:14:28
but they have unlimited amount of power.

00:14:26 --> 00:14:30
Um and they have unlimited amount of

00:14:27 --> 00:14:32
engineering resource. And so what they

00:14:29 --> 00:14:33
can do is do the optimization on the

00:14:31 --> 00:14:35
ngineering side, keep the 7 nanometer

00:14:33 --> 00:14:37
chips, and make sure that they give

00:14:34 --> 00:14:38
people unlimited amount of power. We

00:14:36 --> 00:14:40
might have a different architectural

00:14:38 --> 00:14:42
design where you have to get extremely

00:14:39 --> 00:14:45
power efficient. You don't have as many

00:14:41 --> 00:14:47
engineers as you might enjoy in China,

00:14:44 --> 00:14:49
and you can actually go to 2 nanometer

00:14:46 --> 00:14:51
chips, but and those might be power

00:14:48 --> 00:14:53
efficient in some ways, but they might

00:14:50 --> 00:14:55
have thermal lossiness in other ways.

00:14:52 --> 00:14:57
Like there's a whole bunch of things

00:14:54 --> 00:14:58
that have to get factored in

00:14:56 --> 00:15:00
um on the architecture that'll get more

00:14:57 --> 00:15:03
specialized even by geo

00:14:59 --> 00:15:07
and by region. And then depending on how

00:15:02 --> 00:15:10
the regulatory frameworks evolve,

00:15:06 --> 00:15:13
uh you know, how that that geo then

00:15:09 --> 00:15:15
expands. Like if China expands to

00:15:12 --> 00:15:16
different regions in the world, you will

00:15:14 --> 00:15:18
have a very different architecture that

00:15:15 --> 00:15:20
ake place out than if America expands

00:15:17 --> 00:15:22
to different regions in the world. So,

00:15:19 --> 00:15:24
this is a very interesting kind of game

00:15:21 --> 00:15:26
theory exercise to go through on what

00:15:23 --> 00:15:29
happens in the next 3 years in

00:15:25 --> 00:15:30
tech in general. And

00:15:28 --> 00:15:32
no one knows right now.

00:15:29 --> 00:15:33
You know. That's the beauty of the world

00:15:31 --> 00:15:36
that we live in. Yeah, yeah. So, we'll

00:15:32 --> 00:15:38
soon be measuring systems by engineers

00:15:35 --> 00:15:39
per token in addition to

00:15:37 --> 00:15:42
watts per token.

00:15:38 --> 00:15:43
Um all right, so let's turn to another

00:15:41 --> 00:15:45
topic which value to

00:15:42 --> 00:15:46
>> Engineer per kilowatt. Engineer per

00:15:44 --> 00:15:48
kilowatt. In the US.

00:15:45 --> 00:15:50
>> Um

00:15:47 --> 00:15:53
networking, right?

00:15:49 --> 00:15:55
Obviously you alluded to it um scale up,

00:15:52 --> 00:15:57
scale out. In your case, you mentioned

00:15:54 --> 00:15:59
scale up cross.

00:15:56 --> 00:16:01
So, it seems to me that networking is

00:15:58 --> 00:16:03
also going to get reinvented in a fairly

00:16:00 --> 00:16:04
significant way.

00:16:02 --> 00:16:06
So, what are the leading signs that

00:16:03 --> 00:16:08
you're seeing that uh the signals that

00:16:05 --> 00:16:10
you're seeing in on the direction

00:16:07 --> 00:16:11
etworking is going to take?

00:16:09 --> 00:16:13
Yeah, networking is going to need a

00:16:10 --> 00:16:14
transformation uh for certain. In other

00:16:12 --> 00:16:16
words, uh

00:16:13 --> 00:16:19
it the amount of bandwidth that's needed

00:16:16 --> 00:16:20
at scale within a building is just

00:16:18 --> 00:16:22
astounding.

00:16:19 --> 00:16:24
I mean and uh and it's it's going up.

00:16:21 --> 00:16:27
The network is becoming a primary

00:16:23 --> 00:16:29
bottleneck, uh which is

00:16:26 --> 00:16:31
uh scary. So, more bandwidth uh

00:16:28 --> 00:16:34
translates directly to more performance.

00:16:30 --> 00:16:37
And then given that the network winds up

00:16:33 --> 00:16:39
actually being a small power consumer,

00:16:36 --> 00:16:41
that delivered utility you get per watt,

00:16:38 --> 00:16:43
like it's a super linear benefit. Like

00:16:40 --> 00:16:46
spend a little bit here, get way more

00:16:42 --> 00:16:48
there. So, I think that uh that side is

00:16:45 --> 00:16:51
absolutely there.

00:16:47 --> 00:16:53
Um I'll put in a plug here in that in

00:16:50 --> 00:16:54
this for these workloads, we actually

00:16:52 --> 00:16:56
know what the network communication

00:16:53 --> 00:16:58
patterns are

00:16:55 --> 00:16:59
a priori. So, I think this is a massive

00:16:57 --> 00:17:03
opportunity. In other words, do you then

00:16:58 --> 00:17:05
eed uh the full power of a packet

00:17:02 --> 00:17:07
switch when actually you know what the

00:17:04 --> 00:17:08
rough circuits are going to be? I'm not

00:17:06 --> 00:17:10
saying you need to build a circuit

00:17:07 --> 00:17:11
switch, but there is an optimization

00:17:09 --> 00:17:13
opportunity.

00:17:10 --> 00:17:15
The other aspect of this here is these

00:17:12 --> 00:17:19
workloads are just incredibly bursty.

00:17:15 --> 00:17:21
Yep. And and to the point where

00:17:18 --> 00:17:22
uh and we've written about this, uh

00:17:20 --> 00:17:24
power utilities notice when we're doing

00:17:21 --> 00:17:26
network communication relative to

00:17:23 --> 00:17:28
computation at the scale of tens and

00:17:25 --> 00:17:31
hundreds of megawatts.

00:17:27 --> 00:17:33
Right? Like massive demand for power,

00:17:30 --> 00:17:35
stop all of a sudden and do some network

00:17:32 --> 00:17:36
communication, and then burst back to

00:17:34 --> 00:17:39
computing.

00:17:36 --> 00:17:42
So, how do you build a network that

00:17:38 --> 00:17:44
needs to go at 100%

00:17:41 --> 00:17:45
for really short amount of time and then

00:17:43 --> 00:17:47
go idle?

00:17:44 --> 00:17:49
Yeah. And then same actually for the

00:17:46 --> 00:17:51
scale across use case, which we're we're

00:17:48 --> 00:17:52
absolutely seeing, you don't run large

00:17:50 --> 00:17:54
scale pre-training across all your wide

00:17:51 --> 00:17:55
area data center sites 12 months of the

00:17:53 --> 00:17:58
year.

00:17:54 --> 00:17:59
So, and then you're going to This is a

00:17:57 --> 00:18:01
problem I think about a lot is let's say

00:17:58 --> 00:18:04
ou build the latest greatest chips in

00:18:00 --> 00:18:05
these three data center sites.

00:18:03 --> 00:18:07
How long are you going to be there

00:18:04 --> 00:18:10
before you migrate to the latest latest

00:18:06 --> 00:18:11
chips in three other sites?

00:18:09 --> 00:18:12
And then what do you do with the network

00:18:10 --> 00:18:14
that you left behind? People are going

00:18:11 --> 00:18:15
to run jobs on them. Yeah. But you're

00:18:13 --> 00:18:18
not going to need nearly the network

00:18:14 --> 00:18:21
capacity that you did for large scale

00:18:17 --> 00:18:22
training, pre-training anyway.

00:18:20 --> 00:18:25
So, the shift of

00:18:21 --> 00:18:26
needing massive networks for like 5% of

00:18:24 --> 00:18:27
the time,

00:18:25 --> 00:18:28
it

00:18:26 --> 00:18:30
I I don't know how to build a network

00:18:27 --> 00:18:32
like that. So, if any of you do, please

00:18:29 --> 00:18:33
um uh please please let me know. I mean,

00:18:31 --> 00:18:34
if you don't know how to build this,

00:18:32 --> 00:18:34
there's nobody that knows how to build

00:18:33 --> 00:18:36
it.

00:18:33 --> 00:18:38
>> trying to figure it out. It actually is

00:18:35 --> 00:18:40
a fascinating problem. Yeah. Yeah. I I

00:18:37 --> 00:18:42
do think like if if you think of if

00:18:39 --> 00:18:43
power is the constraint and if compute

00:18:41 --> 00:18:44
is the asset,

00:18:42 --> 00:18:47
I think network is going to be the force

00:18:44 --> 00:18:49
multiplier mhm because, you know, if a

00:18:46 --> 00:18:51
packet if

00:18:48 --> 00:18:52
you have low latency and low

00:18:50 --> 00:18:55
performance and high energy

00:18:51 --> 00:18:57
inefficiency, then the packet the every

00:18:54 --> 00:18:58
kilowatt of power you save moving the

00:18:56 --> 00:19:01
packet is a kilowatt of power you can

00:18:57 --> 00:19:04
give to the GPU, Yep. um which is, you

00:19:00 --> 00:19:07
know, super important. Um the the other

00:19:03 --> 00:19:09
thing is, you know, when you think about

00:19:06 --> 00:19:11
um scale up versus scale out versus

00:19:09 --> 00:19:14
cale up across, you also need,

00:19:10 --> 00:19:15
especially on inference versus training,

00:19:13 --> 00:19:17
there are different things that get

00:19:14 --> 00:19:19
optimized. Like you might optimize for

00:19:16 --> 00:19:20
latency much more on training

00:19:18 --> 00:19:22
runs, you might optimize much more for

00:19:20 --> 00:19:25
memory on inferencing.

00:19:21 --> 00:19:28
Um that there's uh there's architectural

00:19:24 --> 00:19:30
and so I I also feel like the way that

00:19:27 --> 00:19:33
networking will evolve is

00:19:29 --> 00:19:36
rather than it being um

00:19:32 --> 00:19:38
a training infrastructure that then gets

00:19:35 --> 00:19:40
applied to inferencing,

00:19:37 --> 00:19:42
you might have inferencing native

00:19:39 --> 00:19:44
infrastructure that gets built

00:19:41 --> 00:19:46
um over time. And so that there's

00:19:43 --> 00:19:48
good considerations to look at

00:19:45 --> 00:19:49
on like how all of the architectural

00:19:47 --> 00:19:52
components are

00:19:48 --> 00:19:55
um are moving, but um

00:19:51 --> 00:19:56
in my mind like if I were to say

00:19:54 --> 00:19:58
strategically one of the biggest things

00:19:55 --> 00:19:59
that's happening in networking from our

00:19:57 --> 00:20:02
vantage point

00:19:58 --> 00:20:03
is if you're just a wrapper around

00:20:01 --> 00:20:05
Broadcom

00:20:02 --> 00:20:08
then you've got a monopoly that's going

00:20:04 --> 00:20:10
to be a very predatory one.

00:20:07 --> 00:20:13
Um and so

00:20:09 --> 00:20:17
ne of the big reasons where Cisco is

00:20:12 --> 00:20:18
um super relevant is you don't just have

00:20:16 --> 00:20:20
a Broadcom world with people just

00:20:17 --> 00:20:21
wrapping Broadcom in kind of their

00:20:19 --> 00:20:24
systems around Broadcom but you will

00:20:20 --> 00:20:26
actually have a choice of silicon and

00:20:23 --> 00:20:27
that choice and diversity of silicon is

00:20:25 --> 00:20:30
going to be super important

00:20:27 --> 00:20:32
especially for high volume you know kind

00:20:29 --> 00:20:34
of consumption patterns.

00:20:31 --> 00:20:36
So last question on the system since you

00:20:33 --> 00:20:39
brought that up and we'll move to

00:20:35 --> 00:20:41
use cases. Um

00:20:38 --> 00:20:42
inference both of you have mentioned

00:20:40 --> 00:20:44
I mean you talked about it in the

00:20:41 --> 00:20:46
context of the processors you just

00:20:43 --> 00:20:49
arted talking about the architecture.

00:20:45 --> 00:20:50
Are you deploying today specific

00:20:48 --> 00:20:53
architectures for

00:20:50 --> 00:20:54
inference I mean?

00:20:52 --> 00:20:57
Are

00:20:53 --> 00:21:01
is it still shared workloads? We are

00:20:56 --> 00:21:03
deploying specialized architectures for

00:21:00 --> 00:21:06
inference and I think as much software

00:21:02 --> 00:21:08
as a hardware but the hardware is also

00:21:05 --> 00:21:09
deployed in different configurations is

00:21:07 --> 00:21:12
the way I would say it and then the

00:21:08 --> 00:21:13
other aspect of inference that is

00:21:11 --> 00:21:15
becoming really interesting is

00:21:12 --> 00:21:16
reinforcement learning

00:21:14 --> 00:21:18
especially on the critical path of

00:21:15 --> 00:21:20
serving because latency just becomes

00:21:17 --> 00:21:22
absolutely critical.

00:21:19 --> 00:21:23
Uh and I think that so how you would

00:21:21 --> 00:21:25
build your system and how you would

00:21:22 --> 00:21:28
connect it up to one another and of

00:21:24 --> 00:21:31
course networking plays a key role there

00:21:27 --> 00:21:32
becomes increasingly interesting.

00:21:30 --> 00:21:35
And are there

00:21:31 --> 00:21:37
singular choke points that

00:21:34 --> 00:21:40
if removed would accelerate the thousand

00:21:36 --> 00:21:42
fold reduction in the cost of inference

00:21:39 --> 00:21:44
that we need or is it just a natural

00:21:41 --> 00:21:45
curve that we are riding down? So so

00:21:43 --> 00:21:47
we're massive I mean two things here.

00:21:44 --> 00:21:49
One again maybe many of you are familiar

00:21:46 --> 00:21:51
with this prefill and decode on

00:21:48 --> 00:21:54
inference look very very different. So

00:21:50 --> 00:21:56
actually ideally if you you would have

00:21:53 --> 00:21:58
different hardware actually balance

00:21:55 --> 00:21:59
points are different. So that's that's

00:21:57 --> 00:22:02
one opportunity that comes with

00:21:58 --> 00:22:04
downsides we can talk about that. Uh

00:22:01 --> 00:22:05
what I would say though is that maybe

00:22:03 --> 00:22:07
something people don't realize is that

00:22:05 --> 00:22:09
we're actually driving massive

00:22:06 --> 00:22:10
reductions in the cost of inference. I

00:22:08 --> 00:22:12
mean

00:22:09 --> 00:22:15
10 x's and 100 x's.

00:22:11 --> 00:22:17
The problem or opportunity is the

00:22:14 --> 00:22:19
community the user base keeps demanding

00:22:16 --> 00:22:21
higher quality

00:22:18 --> 00:22:23
not better efficiency. So uh just as

00:22:21 --> 00:22:25
oon as we deliver

00:22:22 --> 00:22:26
all the efficiency improvements we're

00:22:24 --> 00:22:29
looking for the next generation model

00:22:25 --> 00:22:32
comes out and it is the whatever

00:22:28 --> 00:22:34
intelligence per dollar is way better

00:22:31 --> 00:22:36
but you still pay more and it costs more

00:22:33 --> 00:22:38
lative to the previous generation and

00:22:35 --> 00:22:41
then we repeat the cycle.

00:22:37 --> 00:22:42
And it's almost like the longer

00:22:40 --> 00:22:44
um

00:22:41 --> 00:22:46
the reasoning

00:22:43 --> 00:22:47
that you have

00:22:45 --> 00:22:50
the more impatient the market gets

00:22:46 --> 00:22:52
right? So for example if you have a 20

00:22:49 --> 00:22:54
minute reasoning cycle

00:22:51 --> 00:22:55
like for example with deep research you

00:22:53 --> 00:22:58
could have autonomous execution for

00:22:54 --> 00:23:00
about 20 minutes that was interesting.

00:22:57 --> 00:23:02
Now you have you know most of the coding

00:22:59 --> 00:23:03
tools that can go up to 7 hours to 30

00:23:01 --> 00:23:05
hours

00:23:02 --> 00:23:07
of you know duration of autonomous

00:23:04 --> 00:23:08
execution

00:23:06 --> 00:23:10
when that happens there's actually a

00:23:07 --> 00:23:11
greater demand for saying compress the

00:23:09 --> 00:23:13
time down

00:23:10 --> 00:23:14
um and so you like it's it's kind of a

00:23:12 --> 00:23:16
self-fulfilling prophecy where you need

00:23:13 --> 00:23:18
to have more

00:23:15 --> 00:23:19
performance because of the fact that

00:23:17 --> 00:23:22
you've been able to go out and do things

00:23:18 --> 00:23:24
for a longer autonomous amount of time

00:23:21 --> 00:23:25
and so it's almost a never-ending loop

00:23:23 --> 00:23:27
where you you'll need to have more

00:23:24 --> 00:23:28
performance for inference Yeah. in

00:23:26 --> 00:23:30
perpetuity.

00:23:27 --> 00:23:33
Yeah though

00:23:29 --> 00:23:35
inference intelligence per dollar is a

00:23:32 --> 00:23:37
business model metrics metric so it is

00:23:34 --> 00:23:38
not just a processor capability.

00:23:36 --> 00:23:39
>> No it's anti-end absolutely.

00:23:37 --> 00:23:41
>> Yeah so

00:23:38 --> 00:23:44
Okay so let's change topics and talk

00:23:40 --> 00:23:45
about actual usage right?

00:23:43 --> 00:23:48
So both of you have

00:23:45 --> 00:23:49
massive organizations.

00:23:47 --> 00:23:51
Where

00:23:48 --> 00:23:52
are the key wins that you're getting

00:23:50 --> 00:23:54
today with

00:23:51 --> 00:23:56
applying all the AI that's

00:23:53 --> 00:23:57
available to you

00:23:55 --> 00:23:58
and

00:23:56 --> 00:24:00
then we'll talk about what your

00:23:57 --> 00:24:01
customers are doing but I'm actually

00:23:59 --> 00:24:04
curious about what you're doing

00:24:00 --> 00:24:06
internally. With within the teams? Yeah.

00:24:03 --> 00:24:08
Yeah so so I mean coding is the obvious

00:24:05 --> 00:24:10
one and that's actually picking up

00:24:07 --> 00:24:12
increasing traction and increasing

00:24:09 --> 00:24:15
capability. We just actually in the last

00:24:11 --> 00:24:18
couple of days uh published a paper that

00:24:14 --> 00:24:19
showed how we applied AI techniques to

00:24:17 --> 00:24:20
do instructions at migration. So in

00:24:18 --> 00:24:23
other words we actually had a fairly

00:24:19 --> 00:24:24
massive migration from x86 to arm making

00:24:22 --> 00:24:25
our

00:24:23 --> 00:24:28
entire code base and at Google it's a

00:24:24 --> 00:24:30
very very large code base

00:24:27 --> 00:24:32
sort of instruction set agnostic and

00:24:29 --> 00:24:34
including to you know future risk five

00:24:31 --> 00:24:36
or whatever else might come along.

00:24:33 --> 00:24:37
Uh tens and thousands hundreds of

00:24:35 --> 00:24:39
thousands of individual

00:24:36 --> 00:24:39
>> Your entire code base you're going to

00:24:38 --> 00:24:42
make it agnostic.

00:24:38 --> 00:24:44
>> Entire code base because we we

00:24:41 --> 00:24:46
want and need all of our code base to be

00:24:43 --> 00:24:50
>> That's a crazy ass project. Yeah so so

00:24:46 --> 00:24:51
we we it it was and the the motivation

00:24:49 --> 00:24:55
though for this actually was a few years

00:24:50 --> 00:24:56
ago we had this amazing legacy system

00:24:54 --> 00:24:58
called Bigtable

00:24:55 --> 00:25:00
and then a new amazing system called

00:24:57 --> 00:25:02
Spanner and we decided to tell the

00:24:59 --> 00:25:03
company hey everyone needs to move from

00:25:01 --> 00:25:06
Bigtable to Spanner. And by the way

00:25:02 --> 00:25:07
Bigtable was amazing for its time but

00:25:05 --> 00:25:09
Spanner was better.

00:25:06 --> 00:25:12
The estimate for doing that migration

00:25:08 --> 00:25:14
for Google was seven staff millennia.

00:25:11 --> 00:25:17
How much?

00:25:13 --> 00:25:18
Seven staff millennia.

00:25:16 --> 00:25:19
That we had a new unit that we had to

00:25:18 --> 00:25:21
actually

00:25:18 --> 00:25:22
[Laughter]

00:25:20 --> 00:25:24
to see what and and it was it wasn't

00:25:21 --> 00:25:25
like made up people being lazy it's like

00:25:23 --> 00:25:27
this is this is what it was.

00:25:25 --> 00:25:28
>> It's endearing that they came up with

00:25:26 --> 00:25:29
at though. And you know what we

00:25:27 --> 00:25:32
decided?

00:25:28 --> 00:25:34
Long live Bigtable.

00:25:31 --> 00:25:34
I decided what it just wasn't worth it.

00:25:33 --> 00:25:36
>> Yeah.

00:25:33 --> 00:25:38
>> Honestly like the opportunity cost was

00:25:35 --> 00:25:40
too high. So

00:25:37 --> 00:25:41
and we have these sorts of migrations so

00:25:39 --> 00:25:43
TensorFlow

00:25:41 --> 00:25:44
to JAX.

00:25:42 --> 00:25:47
We actually I mean again somewhat

00:25:43 --> 00:25:49
private but not not too secret we've

00:25:46 --> 00:25:50
affected this internally with AI

00:25:48 --> 00:25:52
assistant

00:25:49 --> 00:25:54
energy factors faster. Now there are

00:25:51 --> 00:25:55
other tasks which

00:25:53 --> 00:25:57
the tools probably aren't quite yet up

00:25:54 --> 00:25:59
to the

00:25:56 --> 00:26:01
whatever standard for but the the area

00:25:58 --> 00:26:03
under the curve is getting bigger and

00:26:00 --> 00:26:05
bigger.

00:26:02 --> 00:26:07
So we are seeing probably like

00:26:04 --> 00:26:09
three or four

00:26:06 --> 00:26:10
eally good use cases and then we're

00:26:08 --> 00:26:12
seeing some use cases which are not

00:26:09 --> 00:26:14
working yet. And so

00:26:11 --> 00:26:16
what is working

00:26:13 --> 00:26:18
code migration is working relatively

00:26:15 --> 00:26:20
well so far. We use largely a

00:26:17 --> 00:26:22
combination of code x

00:26:19 --> 00:26:25
cloud and

00:26:21 --> 00:26:26
cursor some windsurf.

00:26:24 --> 00:26:28
And so

00:26:25 --> 00:26:29
code migrations tends to work pretty

00:26:27 --> 00:26:30
well.

00:26:28 --> 00:26:32
Um

00:26:29 --> 00:26:34
debugging

00:26:31 --> 00:26:37
oddly enough has actually been

00:26:33 --> 00:26:38
very very productive with um

00:26:36 --> 00:26:39
with these tools and especially with

00:26:37 --> 00:26:41
CLIs.

00:26:38 --> 00:26:42
Um

00:26:40 --> 00:26:44
the um

00:26:43 --> 00:26:48
where we've not done as good a job and

00:26:44 --> 00:26:49
then front end zero to one projects

00:26:47 --> 00:26:51
tend to do extremely well like the

00:26:48 --> 00:26:53
ngineers are super productive. When you

00:26:50 --> 00:26:55
go to code that's older

00:26:52 --> 00:26:57
um and especially further down in the

00:26:54 --> 00:26:59
infrastructure stack

00:26:56 --> 00:27:01
much harder to go out and get that to

00:26:58 --> 00:27:02
happen but the challenge that we have to

00:27:00 --> 00:27:05
rient our engineers on this is actually

00:27:02 --> 00:27:08
much more of a cultural reset problem

00:27:04 --> 00:27:10
than it is a just a technical problem

00:27:07 --> 00:27:12
which is if someone uses something and

00:27:09 --> 00:27:15
says this isn't working right

00:27:11 --> 00:27:17
um you can't put it back on the shelf

00:27:14 --> 00:27:18
saying this doesn't work for another six

00:27:16 --> 00:27:19
or nine months.

00:27:17 --> 00:27:21
You have to come back to it within four

00:27:18 --> 00:27:24
weeks and see if it works again because

00:27:20 --> 00:27:27
the speed at which these tools are kind

00:27:23 --> 00:27:29
of advancing is so fast that you almost

00:27:26 --> 00:27:32
have to kind of get like so I was with a

00:27:28 --> 00:27:35
150 of our distinguished engineers today

00:27:31 --> 00:27:37
and what I had to urge them to do is

00:27:34 --> 00:27:39
um assume that these tools are going to

00:27:36 --> 00:27:41
get infinitely better within six months

00:27:38 --> 00:27:42
Yeah. and make sure that you get your

00:27:40 --> 00:27:44
mental model the way that tool is going

00:27:41 --> 00:27:46
to be in six months and what are you

00:27:43 --> 00:27:48
going to do to be best in class in six

00:27:45 --> 00:27:50
months rather than assessing it for

00:27:47 --> 00:27:52
where it is today and then putting it

00:27:49 --> 00:27:53
aside for six months assuming that

00:27:51 --> 00:27:54
's not going to work for the next

00:27:52 --> 00:27:57
six months. I think that's a big

00:27:53 --> 00:27:59
strategic error. So I we've got 25,000

00:27:56 --> 00:28:02
engineers

00:27:58 --> 00:28:03
I'm hoping that we can get at least

00:28:01 --> 00:28:05
um

00:28:02 --> 00:28:06
two or three x productivity within a

00:28:04 --> 00:28:07
very short amount of time within the

00:28:05 --> 00:28:10
next year.

00:28:06 --> 00:28:11
Um and we else we will be able to see if

00:28:10 --> 00:28:15
that happens.

00:28:12 --> 00:28:16
The second a couple other big areas that

00:28:14 --> 00:28:19
we are starting to see some good

00:28:15 --> 00:28:22
responses is in sales preparation going

00:28:18 --> 00:28:23
into an account call. Really good. Legal

00:28:21 --> 00:28:26
contract reviews.

00:28:23 --> 00:28:29
Actually much better than what we had

00:28:25 --> 00:28:31
thought. Um and then the last one is not

00:28:28 --> 00:28:33
super high inference volume but product

00:28:30 --> 00:28:34
marketing.

00:28:32 --> 00:28:37
Um

00:28:33 --> 00:28:39
I think the first chat GPT

00:28:36 --> 00:28:41
take on competitive is always better

00:28:38 --> 00:28:43
than what my any product marketing

00:28:40 --> 00:28:45
person comes up by themselves. So we

00:28:42 --> 00:28:46
should never start from a blank slate

00:28:44 --> 00:28:48
just start from chat GPT and then go

00:28:45 --> 00:28:50
from there. Okay uh we could be talking

00:28:47 --> 00:28:51
about the topic for a long time but they

00:28:49 --> 00:28:54
showed me the two minute warning. So I

00:28:50 --> 00:28:56
want to focus on one last question here.

00:28:53 --> 00:28:58
So we've got a lot of founders here

00:28:55 --> 00:29:00
right building amazing companies.

00:28:57 --> 00:29:03
So what is the most interesting

00:28:59 --> 00:29:05
development they should look forward to

00:29:02 --> 00:29:07
in the next calendar year let's call it

00:29:04 --> 00:29:09
or the next 12 months

00:29:06 --> 00:29:12
A from your company and B from the

00:29:08 --> 00:29:15
industry if you were

00:29:11 --> 00:29:16
look at your crystal ball.

00:29:14 --> 00:29:17
I mean I think to build on the point

00:29:15 --> 00:29:19
hese these models are getting more

00:29:16 --> 00:29:21
spectacular

00:29:18 --> 00:29:24
by the by the month and then they'll be

00:29:20 --> 00:29:26
from whatever companies you like a bunch

00:29:23 --> 00:29:27
of really exciting including ours.

00:29:25 --> 00:29:28
>> Well then I forgot to say you're not

00:29:26 --> 00:29:29
allowed to say models will get better.

00:29:27 --> 00:29:30
Yeah.

00:29:28 --> 00:29:32
>> Everybody knows. Models the models are

00:29:29 --> 00:29:35
going to get but I mean they're getting

00:29:31 --> 00:29:39
scary good is the part that I would say.

00:29:34 --> 00:29:41
Um but I think that then the agents that

00:29:38 --> 00:29:42
get built on top of them and the

00:29:40 --> 00:29:44
frameworks for making that happen are

00:29:41 --> 00:29:46
also getting scary good. So the ability

00:29:43 --> 00:29:49
to

00:29:45 --> 00:29:50
have things go quite right for quite

00:29:48 --> 00:29:51
long.

00:29:49 --> 00:29:54
Over the coming 12 months is going to be

00:29:50 --> 00:29:55
transformative. I'm going to think. Do

00:29:53 --> 00:29:57
you want to leak any aspect of your road

00:29:54 --> 00:29:59
map?

00:29:56 --> 00:29:59
Next 12 months? Not so not right now.

00:29:58 --> 00:30:00
Yeah.

00:29:58 --> 00:30:01
>> Okay.

00:29:59 --> 00:30:04
You too?

00:30:00 --> 00:30:06
>> I I'd say the the the big

00:30:03 --> 00:30:07
shift in what I would urge startups to

00:30:05 --> 00:30:09
do is

00:30:06 --> 00:30:10
don't build thin wrappers around models

00:30:08 --> 00:30:12
that are other people's models. I think

00:30:09 --> 00:30:14
the the the combination of a model

00:30:11 --> 00:30:16
working very closely

00:30:13 --> 00:30:18
with the product and

00:30:15 --> 00:30:19
the model getting better as there's

00:30:17 --> 00:30:21
feedback in the product is going to be

00:30:18 --> 00:30:24
super important. So, you are going to

00:30:20 --> 00:30:25
need foundation models, but if you just

00:30:23 --> 00:30:28
have a thin wrapper, I think the

00:30:24 --> 00:30:28
durability of your business will be very

00:30:28 --> 00:30:33
ou know short-lived. So, that would be

00:30:30 --> 00:30:34
something that I would I would urge you

00:30:32 --> 00:30:36
on and I think that intelligent routing

00:30:33 --> 00:30:38
layer of some sort that says I'm going

00:30:35 --> 00:30:39
to use my models for these things. I'm

00:30:37 --> 00:30:41
going to probably use foundation models

00:30:38 --> 00:30:44
for other things and dynamically keep

00:30:40 --> 00:30:45
optimizing will be I think Cursor does

00:30:43 --> 00:30:47
that pretty well.

00:30:44 --> 00:30:49
Um but that that'll be a

00:30:46 --> 00:30:51
good way that the the software

00:30:48 --> 00:30:53
development life cycle will evolve. Um

00:30:50 --> 00:30:55
what you should expect from Cisco is

00:30:52 --> 00:30:57
look, truth be told for the longest time

00:30:54 --> 00:30:59
people thought Cisco was a legacy

00:30:56 --> 00:31:01
company. Like they they were a has-been.

00:30:59 --> 00:31:02
And I think in the past year hopefully

00:31:00 --> 00:31:04
ou've

00:31:01 --> 00:31:05
paid attention. I think there's a

00:31:03 --> 00:31:06
level of momentum in the business.

00:31:04 --> 00:31:07
There's a spring in the step in the

00:31:05 --> 00:31:10
mployee base.

00:31:06 --> 00:31:12
So, uh you should expect

00:31:09 --> 00:31:14
like I said from the physics to the

00:31:11 --> 00:31:16
semantics in every layer from silicon to

00:31:13 --> 00:31:19
the application a fair amount of

00:31:15 --> 00:31:21
innovation in uh silicon and networking

00:31:18 --> 00:31:24
and security and observability and the

00:31:20 --> 00:31:26
data platform uh as well as applications

00:31:23 --> 00:31:28
um you know from us and um

00:31:25 --> 00:31:30
we're excited to work with um

00:31:27 --> 00:31:32
the startup ecosystem and um so if you

00:31:29 --> 00:31:33
ever feel like you want to work

00:31:31 --> 00:31:35
with us, make sure that you reach out to

00:31:32 --> 00:31:36
us.

00:31:34 --> 00:31:38
Were you going to say something I mean?

00:31:35 --> 00:31:40
I mean one aspect that I I want to

00:31:37 --> 00:31:43
highlight about the models is um where

00:31:39 --> 00:31:45
we were with let's say text models

00:31:42 --> 00:31:47
two and a half three years ago.

00:31:44 --> 00:31:49
They were fun. Like hey, write me a

00:31:46 --> 00:31:51
haiku about Martine.

00:31:48 --> 00:31:53
Did a great job. Now they're amazing. I

00:31:50 --> 00:31:54
think that what's going to happen in the

00:31:52 --> 00:31:56
next 12 months is the same thing is

00:31:53 --> 00:31:57
going to be happening with input and

00:31:55 --> 00:32:00
output of images and video to these

00:31:56 --> 00:32:03
models. And to the extent that even for

00:31:59 --> 00:32:06
images, imagine them as productivity and

00:32:02 --> 00:32:09
educational tools. Not just okay, here's

00:32:05 --> 00:32:11
Martine as Superman on a black asphalt

00:32:08 --> 00:32:13
oo, right? But

00:32:10 --> 00:32:15
using it for productivity gains and

00:32:12 --> 00:32:17
learning I think it's going to be really

00:32:14 --> 00:32:19
transformative. Awesome. So, on

00:32:16 --> 00:32:20
that note we'd like to end this session.

00:32:18 --> 00:32:23
Thanks for a great conversation I mean,

00:32:19 --> 00:32:23
thanks Jeetu.

00:32:29 --> 00:32:33
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
