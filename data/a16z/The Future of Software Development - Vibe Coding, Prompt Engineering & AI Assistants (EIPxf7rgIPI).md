---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "EIPxf7rgIPI"
title: "The Future of Software Development - Vibe Coding, Prompt Engineering & AI Assistants"
video_url: "https://www.youtube.com/watch?v=EIPxf7rgIPI"
thumbnail_url: "https://i.ytimg.com/vi/EIPxf7rgIPI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=EIPxf7rgIPI"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-07-21T13:00:31.000Z"
upload_date: "2025-07-21"
duration_seconds: 2850
duration_human: "47:30"
view_count: 23061
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:43:21.524Z"
---

# The Future of Software Development - Vibe Coding, Prompt Engineering & AI Assistants

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=EIPxf7rgIPI
- video_id: EIPxf7rgIPI
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-07-21T13:00:31.000Z
- upload_date: 2025-07-21
- duration: 47:30
- view_count: 23061
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Is AI the Fourth Pillar of Infrastructure?

Infrastructure doesn’t go away — it layers. And today, AI is emerging as a new foundational layer alongside compute, storage, and networking.

Erik Torenberg interviews a16z’s Martin Casado, Jennifer Li, and Matt Bornstein breaking down how infrastructure is evolving in the age of AI — from models and agents to developer tools and shifting user behavior.

We dive into what infra actually means today, how it differs from enterprise, and why software itself is being disrupted. Plus, we explore the rise of technical users as buyers, what makes infra companies defensible, and how past waves — from the cloud to COVID to AI — are reshaping how we build and invest.

Timestamps:
00:00 Introduction to Infrastructure
00:48 Defining Infrastructure and Its Components
02:27 The Fourth Layer: AI Models
06:34 The Evolution of Infrastructure
17:46 Developer Tools and the AI Wave
21:27 Data Engine Systems
22:11 Defensibility in AI Infrastructure
25:28 Expansion and Contraction Phases
27:09 Challenges in AI and Infrastructure
28:32 AI Models and Generalization
30:59 Thoughts on Andrej Karpathy's Talk on AI
34:09 AI and Human Expectations
36:18 The Role of Developers in the AI Era
40:31 Synthetic Data 
43:17 AI Agents 
45:16 Vertical Integration vs. Horizontal Specialization

Resources: 
Find Martin on X: https://x.com/martin_casado
Find Jennifer on X: https://x.com/JenniferHli
Find Matt on X: https://x.com/BornsteinMatt

Stay Updated: 
Let us know what you think: https://ratethispodcast.com/a16z 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
infrastructure never goes away. It just

00:00:01 --> 00:00:05
gets layered.

00:00:02 --> 00:00:06
>> A new piece of infrastructure changes

00:00:04 --> 00:00:08
the way that you program computers and

00:00:05 --> 00:00:11
it changes the stack that's around it.

00:00:07 --> 00:00:11
We're building systems to build other

00:00:10 --> 00:00:12
systems.

00:00:10 --> 00:00:14
>> Developers are making a lot of the

00:00:11 --> 00:00:16
decisions and a lot of the like

00:00:13 --> 00:00:17
marketing and sales to developers looks

00:00:15 --> 00:00:18
more like consumer these days than it

00:00:16 --> 00:00:19
used to.

00:00:17 --> 00:00:21
>> Who is going to earn the distribution

00:00:18 --> 00:00:22
and earn sort of the developer attention

00:00:20 --> 00:00:24
is going to be a different game.

00:00:21 --> 00:00:26
>> From an application standpoint, we've

00:00:23 --> 00:00:28
abdicated logic. This is a pretty big

00:00:25 --> 00:00:29
deal. It's by far the biggest thing that

00:00:27 --> 00:00:31
I've seen happen sort of in my life.

00:00:28 --> 00:00:32
Software was always the disruptor. One

00:00:30 --> 00:00:34
of the most exciting thing about the AI

00:00:32 --> 00:00:35
wave is like software is being

00:00:33 --> 00:00:36
disrupted. Like we're being disrupted,

00:00:34 --> 00:00:38
right? And so we're like

00:00:35 --> 00:00:41
>> disrupting software is eating software.

00:00:37 --> 00:00:48
>> I know. I know. We're like,

00:00:40 --> 00:00:48
[Music]

00:00:49 --> 00:00:52
hey guys, we're here today to discuss

00:00:50 --> 00:00:54
the state of Infra. We've done a

00:00:51 --> 00:00:55
consumer podcast. We we've done a

00:00:53 --> 00:00:56
consumer team. We've done it with AD

00:00:54 --> 00:00:58
team. Now we're excited to do it with

00:00:55 --> 00:01:00
e infra team. First, can we get a

00:00:57 --> 00:01:02
definition of of infra? Where does infra

00:00:59 --> 00:01:03
differ from enterprise? How do we think

00:01:01 --> 00:01:05
about it internally?

00:01:02 --> 00:01:07
>> I would say infra is basically what

00:01:04 --> 00:01:08
makes software work, right? We'll

00:01:06 --> 00:01:10
probably get pretty deep into a set of

00:01:07 --> 00:01:12
technical definitions. You mentioned

00:01:09 --> 00:01:13
sort of networking, storage, compute.

00:01:11 --> 00:01:15
Where does AI fit into that? But I I

00:01:12 --> 00:01:17
think at the simplest possible level if

00:01:14 --> 00:01:19
you want software, infra is what

00:01:16 --> 00:01:21
engineers are using behind the scenes to

00:01:18 --> 00:01:23
make all this possible.

00:01:20 --> 00:01:25
>> And our formal definition internally is

00:01:22 --> 00:01:27
technical buyer, right? So it's the

00:01:24 --> 00:01:30
stuff you use to build the stuff, the

00:01:26 --> 00:01:32
stuff you use to build apps. And if it's

00:01:29 --> 00:01:34
used by a technical user, we consider it

00:01:31 --> 00:01:36
infrastructure. Whereas something like

00:01:33 --> 00:01:38
let's say vertical SAS could be used by

00:01:35 --> 00:01:39
a flooring company or by a marketer or

00:01:37 --> 00:01:40
by sales that would not be considered

00:01:38 --> 00:01:42
infrastructure.

00:01:39 --> 00:01:45
>> And and technical user for the record is

00:01:41 --> 00:01:47
developer, data scientist, analyst,

00:01:44 --> 00:01:48
cyber security professional. Yeah.

00:01:46 --> 00:01:49
Right. There's there's a you know

00:01:47 --> 00:01:51
DevOps, right? There's a wide range of

00:01:48 --> 00:01:53
sort of like people. These are our

00:01:50 --> 00:01:54
people, right? like the kind of nerds

00:01:52 --> 00:01:56
behind the scenes.

00:01:53 --> 00:01:58
>> And in the system terms, you can think

00:01:55 --> 00:02:01
about it as uh consu compute uh

00:01:57 --> 00:02:02
networking and storage. Uh but also all

00:02:00 --> 00:02:03
the tooling that goes around the

00:02:01 --> 00:02:07
developers day of like what they're

00:02:02 --> 00:02:10
using to build software and what are the

00:02:06 --> 00:02:12
um tools and products that are operating

00:02:09 --> 00:02:14
uh this ever growing more complex

00:02:11 --> 00:02:16
software as well. Um all the way to

00:02:13 --> 00:02:19
semi-technical users that may want to

00:02:15 --> 00:02:20
you know either prototype or tinker with

00:02:18 --> 00:02:22
um building applications. We're very

00:02:19 --> 00:02:24
interested in anything in the technical

00:02:21 --> 00:02:27
domain and used by technical people.

00:02:23 --> 00:02:29
>> So you mentioned compute um networking

00:02:26 --> 00:02:30
storage. How should we think about

00:02:28 --> 00:02:32
models? Uh is it is this the fourth

00:02:30 --> 00:02:33
layer of infra? How do they interface?

00:02:31 --> 00:02:35
How should we think about that?

00:02:32 --> 00:02:37
>> I certainly think of as a fourth uh

00:02:34 --> 00:02:40
layer of infrastructure. It's um you

00:02:36 --> 00:02:42
know it certainly leverage and build on

00:02:39 --> 00:02:45
top of all the three pillars we're

00:02:41 --> 00:02:47
talking about. It has a lot of um demand

00:02:44 --> 00:02:49
of compute and of course it's uh trained

00:02:46 --> 00:02:53
and um also producing large amount of

00:02:48 --> 00:02:56
data um and to leverage and use these

00:02:52 --> 00:02:58
models for our purposes you know uh

00:02:55 --> 00:03:01
latency and networking capabilities is

00:02:57 --> 00:03:05
also very important um but it's going to

00:03:00 --> 00:03:07
be as prevalent um you know as uh any

00:03:04 --> 00:03:09
piece of uh infrastructure software I

00:03:06 --> 00:03:11
don't know like the an analogy these

00:03:08 --> 00:03:14
days anymore is it a database is it sort

00:03:10 --> 00:03:16
of like a new form of compute it. So

00:03:13 --> 00:03:17
really to me it's like a fourth uh

00:03:15 --> 00:03:19
pillar that incor incorporates

00:03:16 --> 00:03:20
everything but also provides

00:03:18 --> 00:03:21
intelligence for the software we're

00:03:19 --> 00:03:23
using and building today.

00:03:20 --> 00:03:24
>> I think it's probably worth asking like

00:03:22 --> 00:03:26
why a piece of infrastructure is a piece

00:03:23 --> 00:03:26
of infrastructure.

00:03:25 --> 00:03:28
>> Um

00:03:26 --> 00:03:30
>> and generally a new piece of

00:03:27 --> 00:03:32
infrastructure changes the way that you

00:03:29 --> 00:03:33
program computers and it changes the

00:03:31 --> 00:03:35
stack that's around it. Like it's got

00:03:32 --> 00:03:36
different memory requirements. It's got

00:03:34 --> 00:03:39
different latency requirements and so it

00:03:35 --> 00:03:40
just requires rethinking how we build

00:03:38 --> 00:03:41
software and how we build

00:03:39 --> 00:03:42
infrastructure. You know, I would say in

00:03:40 --> 00:03:44
addition to compute, networking,

00:03:41 --> 00:03:46
storage, I would say distributed systems

00:03:43 --> 00:03:48
would also be included just because like

00:03:45 --> 00:03:50
things like state consistency require

00:03:47 --> 00:03:52
you to think about like proximity and

00:03:49 --> 00:03:54
guarantees. I would say databases

00:03:51 --> 00:03:55
probably did too because it changed our

00:03:53 --> 00:03:58
programming model. You have different

00:03:54 --> 00:03:59
guarantees. Uh and these models very

00:03:57 --> 00:04:01
much fit in that uh for a couple of

00:03:58 --> 00:04:03
reasons and I think Jennifer's exactly

00:04:00 --> 00:04:04
right like you just build different data

00:04:02 --> 00:04:06
centers and different chips if you want

00:04:03 --> 00:04:09
o build these models. So it it it has

00:04:05 --> 00:04:10
that impact, but programming them is

00:04:08 --> 00:04:12
like non-obvious. Like we're just still

00:04:09 --> 00:04:14
trying to grapple like how you program

00:04:11 --> 00:04:16
with them. Like they don't really listen

00:04:13 --> 00:04:18
to you. Sometimes they do the coding

00:04:15 --> 00:04:21
themselves. And if I were to try and

00:04:17 --> 00:04:23
istill like what is the one biggest

00:04:20 --> 00:04:25
difference that these models provide to

00:04:22 --> 00:04:27
infrastructure, it's the following. I

00:04:24 --> 00:04:29
don't remember ever in like the history

00:04:26 --> 00:04:31
of computer science where we've like

00:04:28 --> 00:04:33
from an application standpoint we've

00:04:30 --> 00:04:34
abdicated logic

00:04:32 --> 00:04:35
>> like actual like like like like

00:04:33 --> 00:04:38
application like in the past we've

00:04:34 --> 00:04:40
abdicated resources like we're like give

00:04:37 --> 00:04:42
me compute give me swords like you know

00:04:39 --> 00:04:44
these abstracted resources but the logic

00:04:41 --> 00:04:45
the yes or no like the what it's doing

00:04:43 --> 00:04:47
always came from the programmer but in

00:04:44 --> 00:04:49
these ones we're like come up with the

00:04:46 --> 00:04:50
answer for me and so it's requiring us

00:04:48 --> 00:04:52
to rethink what does it mean to be a

00:04:49 --> 00:04:54
programmer what does it mean to be

00:04:51 --> 00:04:57
software etc so I you know it's clearly

00:04:53 --> 00:04:59
very fundamental to computer science and

00:04:56 --> 00:05:01
I would say you know again to Jennifer's

00:04:58 --> 00:05:04
point it's very very much a new a new

00:05:00 --> 00:05:05
piece of infrastructure and I think a

00:05:03 --> 00:05:07
lot of people are trying to reason by

00:05:04 --> 00:05:08
analogy you sort of alluded to this

00:05:06 --> 00:05:11
Jennifer it's like oh is it like a

00:05:07 --> 00:05:13
database because it can answer queries

00:05:10 --> 00:05:14
or is it like a network because it's

00:05:12 --> 00:05:16
ort of nondeterministic and we need to

00:05:13 --> 00:05:18
handle retries and weird edge cases but

00:05:16 --> 00:05:20
like I I think people are really just

00:05:18 --> 00:05:21
rying to figure out how to program

00:05:19 --> 00:05:22
these things which you sort of said

00:05:20 --> 00:05:24
Martin but like we've kind of got to

00:05:22 --> 00:05:26
start from a blank sheet of paper which

00:05:24 --> 00:05:28
is what makes our jobs like really

00:05:25 --> 00:05:29
exciting right now cuz there's a lot of

00:05:27 --> 00:05:31
people trying to figure it out and

00:05:28 --> 00:05:33
coming up with new ideas. I have to add

00:05:30 --> 00:05:34
so okay so listen many of us have been

00:05:32 --> 00:05:36
in computer science for a long time

00:05:33 --> 00:05:39
right we've been in our schools and in

00:05:35 --> 00:05:40
our you know uh operating lives and in

00:05:38 --> 00:05:42
our investing lives

00:05:39 --> 00:05:45
>> and like software was always the

00:05:41 --> 00:05:48
disruptor right like we disrupt

00:05:44 --> 00:05:50
the taxis or we disrupt like

00:05:47 --> 00:05:52
sales we disrupt the back office or we

00:05:49 --> 00:05:53
disrupt everything like one of the most

00:05:51 --> 00:05:55
exciting thing about the AI wave is like

00:05:52 --> 00:05:56
software is being disrupted like we're

00:05:54 --> 00:05:59
being disrupted right it's like

00:05:55 --> 00:06:01
>> disrupting software needing software

00:05:58 --> 00:06:03
>> I know we're like Oh, so we have to

00:06:00 --> 00:06:04
think about as far as the self eating.

00:06:02 --> 00:06:06
>> Yeah, that's right. Honestly, I think

00:06:03 --> 00:06:08
this is the first time I could honestly

00:06:05 --> 00:06:10
say that like the profession that I've

00:06:07 --> 00:06:11
dedicated my entire life to is

00:06:09 --> 00:06:13
being disruptive and it's very exciting

00:06:10 --> 00:06:15
because it's kind of eating itself in a

00:06:12 --> 00:06:17
way and it's tempting to be a kmagin,

00:06:14 --> 00:06:19
right? Because we've all been doing this

00:06:16 --> 00:06:20
our whole lives. So, it's like really

00:06:18 --> 00:06:21
being open to and embracing the new

00:06:19 --> 00:06:24
stuff is like the key thing.

00:06:20 --> 00:06:26
>> What still applies is uh infrastructure

00:06:23 --> 00:06:27
never goes away, just gets layered. In

00:06:25 --> 00:06:28
this case is definitely you know all the

00:06:26 --> 00:06:30
infrastructure that we've been using and

00:06:28 --> 00:06:32
leveraging in the past are still very

00:06:29 --> 00:06:33
relevant but it's definitely getting

00:06:31 --> 00:06:35
layered by having this fourth pillar

00:06:32 --> 00:06:37
which is AI and models.

00:06:34 --> 00:06:39
>> What's different from past super cycles

00:06:36 --> 00:06:40
versus what can we learn uh as we enter

00:06:38 --> 00:06:41
this new one?

00:06:39 --> 00:06:43
>> There's two things that happen. So one

00:06:40 --> 00:06:45
of them is often when you bring the

00:06:42 --> 00:06:47
marginal cost of something down like

00:06:44 --> 00:06:50
with compute you know we did it for

00:06:46 --> 00:06:53
computation and for the internet we did

00:06:49 --> 00:06:55
it with distribution it increases the

00:06:52 --> 00:06:57
TAM a whole bunch. So, so for one, you

00:06:54 --> 00:06:58
almost always see this massive TAM

00:06:56 --> 00:07:01
expansion.

00:06:57 --> 00:07:05
And part of that tends to be because the

00:07:00 --> 00:07:06
TAM is bigger, you've got new users. Um,

00:07:04 --> 00:07:08
and because you have new users, like

00:07:05 --> 00:07:10
there's normally like a new behavior

00:07:07 --> 00:07:11
that happens, right? Like this is very

00:07:09 --> 00:07:13
much the case with the internet, right?

00:07:10 --> 00:07:14
Which is like people weren't used to

00:07:12 --> 00:07:17
going to a computer and talking to

00:07:13 --> 00:07:20
everybody around the world uh on top of

00:07:16 --> 00:07:22
the internet. And existing companies

00:07:19 --> 00:07:23
don't know really how to think about new

00:07:21 --> 00:07:25
behaviors. like they've built these

00:07:22 --> 00:07:28
sales motions and the operating things

00:07:24 --> 00:07:29
around like the old behavior. And so you

00:07:27 --> 00:07:31
see TAM expansion, you see new

00:07:28 --> 00:07:33
behaviors. Those new behaviors provide

00:07:30 --> 00:07:35
white space for challengers, new like

00:07:32 --> 00:07:37
startup companies to come and to go

00:07:34 --> 00:07:38
ahead and fill those models. And I think

00:07:36 --> 00:07:39
we're seeing exactly that happen with

00:07:37 --> 00:07:41
is one as well. Like clearly this

00:07:38 --> 00:07:43
market is massive if you look at how

00:07:40 --> 00:07:45
successful these model companies are.

00:07:42 --> 00:07:46
But also you're seeing use cases that

00:07:44 --> 00:07:48
like computers just never really have

00:07:45 --> 00:07:49
done before and you're seeing that too.

00:07:47 --> 00:07:51
And so in that way I think it rhymes

00:07:48 --> 00:07:53
very much with say the internet and it

00:07:50 --> 00:07:55
rhymes very much with with probably even

00:07:52 --> 00:07:57
the microchip.

00:07:54 --> 00:07:58
>> Maybe I'll answer that question just

00:07:56 --> 00:08:00
from my personal experience. I I'm

00:07:57 --> 00:08:02
always like sort of a tools person and

00:08:00 --> 00:08:05
also wanting to like having tools

00:08:01 --> 00:08:07
fulfilling certain uh creativity because

00:08:04 --> 00:08:09
I kind of came to coding and computer

00:08:06 --> 00:08:11
science as a late bloomer uh after you

00:08:08 --> 00:08:13
know my 20s and really enjoyed all the

00:08:10 --> 00:08:15
tools available for me at that point of

00:08:12 --> 00:08:16
just like you know building software and

00:08:14 --> 00:08:19
like learning computer science as well.

00:08:15 --> 00:08:21
Now we just have like you know massive

00:08:18 --> 00:08:23
and massive leverage in trying to create

00:08:20 --> 00:08:26
anything as long as you have a good idea

00:08:22 --> 00:08:28
like going from uh Martin laugh at me

00:08:25 --> 00:08:31
about this like I was a bigger like

00:08:27 --> 00:08:33
local no code champion

00:08:30 --> 00:08:35
for let's say the last you know 5 10

00:08:32 --> 00:08:36
years uh because again these are tools

00:08:34 --> 00:08:39
for people who have good ideas but may

00:08:36 --> 00:08:41
not be like you know educated in the

00:08:38 --> 00:08:43
computer science term but you know the

00:08:40 --> 00:08:44
retools of the world the wix and

00:08:42 --> 00:08:46
squares spaces like you can build

00:08:43 --> 00:08:48
applications can build software easily

00:08:45 --> 00:08:51
with these tools. But now you're given

00:08:47 --> 00:08:54
like the next level of thought partners

00:08:50 --> 00:08:57
tools to really um as any role in the

00:08:53 --> 00:08:59
company prototype um you know software

00:08:56 --> 00:09:00
interfaces for your end customer for end

00:08:58 --> 00:09:02
user as long as you know what they need

00:09:00 --> 00:09:04
what they want to see like you can

00:09:01 --> 00:09:06
really realize these ideas really

00:09:03 --> 00:09:08
quickly in like at your fingertips.

00:09:05 --> 00:09:09
>> So low code's finally happening. It just

00:09:07 --> 00:09:10
akes a lot of coding.

00:09:08 --> 00:09:12
>> It just turns out the code is natural

00:09:09 --> 00:09:14
anguage you know. I know it's so funny

00:09:11 --> 00:09:16
cuz when when Jennifer joined the team,

00:09:13 --> 00:09:19
she was very excited about low code. But

00:09:15 --> 00:09:21
for my view, low code is like Python.

00:09:18 --> 00:09:22
It's like this scripting language like

00:09:20 --> 00:09:24
you know you write

00:09:21 --> 00:09:26
>> interpreted languages and PM is low

00:09:23 --> 00:09:28
coded right. So we kind of had to bridge

00:09:25 --> 00:09:31
that gap and it was kind of in a way

00:09:28 --> 00:09:33
like a bit irreconcilable like you know

00:09:30 --> 00:09:35
uh until AI came out and it's very very

00:09:32 --> 00:09:37
clearly like what the promise of low

00:09:34 --> 00:09:39
code was and so you're right I mean it

00:09:36 --> 00:09:41
really is disrupting software. So when I

00:09:38 --> 00:09:43
was a kid, right, the internet was sort

00:09:40 --> 00:09:45
of a new thing. I just remember really

00:09:42 --> 00:09:47
vividly there was this movie with Sandra

00:09:44 --> 00:09:50
Bulock called The Net and she orders a

00:09:46 --> 00:09:52
pizza from her computer and this is like

00:09:49 --> 00:09:53
completely mind-blowing and like now

00:09:51 --> 00:09:55
actually this is a common user behavior,

00:09:52 --> 00:09:58
but like what we're dealing with now is

00:09:54 --> 00:09:59
just so much bigger than that, right? I

00:09:57 --> 00:10:01
just think it's really hard to like like

00:09:58 --> 00:10:02
I think some of these points about how

00:10:00 --> 00:10:04
ill the infrastructure evolve, like how

00:10:01 --> 00:10:05
ill the companies adapt and things like

00:10:03 --> 00:10:07
that are probably transferable, but this

00:10:04 --> 00:10:08
this is like a this is a pretty big

00:10:06 --> 00:10:10
deal. It's by far the biggest thing that

00:10:07 --> 00:10:10
I've seen happen sort of in my life.

00:10:09 --> 00:10:12
>> Yeah.

00:10:09 --> 00:10:13
>> Let's zoom out and take this long view.

00:10:11 --> 00:10:15
And Martina, you're actually the perfect

00:10:12 --> 00:10:17
full circle because

00:10:14 --> 00:10:19
>> were wer were you the first infra

00:10:16 --> 00:10:21
investment ever as a portfolio founder?

00:10:18 --> 00:10:24
>> I think it was either it was either me

00:10:20 --> 00:10:26
or Octa. But I will I will say I was

00:10:23 --> 00:10:29
like, you know, me and Todd were like

00:10:25 --> 00:10:31
the infra portfolio

00:10:28 --> 00:10:32
like one LP days when they would trot us

00:10:30 --> 00:10:34
out, you know, in front of the LPs. It

00:10:32 --> 00:10:36
was like me and Todd from Octa. So So

00:10:33 --> 00:10:37
for sure I was one of the one of the

00:10:35 --> 00:10:39
first two. And then you you started up

00:10:36 --> 00:10:41
or was sort of the one of the leaders of

00:10:38 --> 00:10:43
the of the infra fund. At what point did

00:10:40 --> 00:10:44
we develop a clear infra practice at a

00:10:42 --> 00:10:48
Z?

00:10:43 --> 00:10:50
>> So we always um had strong infra people

00:10:47 --> 00:10:52
right. So like Ben Horowitz is an infra

00:10:49 --> 00:10:54
guy even you know and honestly I would

00:10:51 --> 00:10:56
say Mark is like he kind of you know

00:10:53 --> 00:10:58
masquerades as a consumer guy but he's

00:10:55 --> 00:10:59
actually like revolutionized the way we

00:10:57 --> 00:11:01
use computers in this deep

00:10:58 --> 00:11:03
infrastructure way. And by the way many

00:11:00 --> 00:11:06
things came from that JavaScript etc. We

00:11:02 --> 00:11:08
had Peter Lavine, you know, Zen Source,

00:11:05 --> 00:11:10
we had Scott Weiss, and so like there's

00:11:07 --> 00:11:12
always been deep infra, but when I

00:11:09 --> 00:11:13
joined the firm, we didn't think of it

00:11:11 --> 00:11:13
as infra, we thought of it as

00:11:12 --> 00:11:14
enterprise,

00:11:12 --> 00:11:16
>> right?

00:11:13 --> 00:11:18
>> Right. And so, you know, you're either

00:11:16 --> 00:11:20
in the consumer team, you're in the

00:11:17 --> 00:11:22
fintech team, you know, or you're in the

00:11:19 --> 00:11:24
nterprise team. And the thing about the

00:11:21 --> 00:11:26
about just classifying the stuff as

00:11:23 --> 00:11:28
enterprise

00:11:25 --> 00:11:31
the go to market motions for something

00:11:27 --> 00:11:33
that touches technology

00:11:30 --> 00:11:34
and being able to reason about that is

00:11:32 --> 00:11:36
o different than reasoning through the

00:11:34 --> 00:11:39
go to market motion that's purely

00:11:35 --> 00:11:41
through like sales, right? So and and

00:11:38 --> 00:11:43
we've just learned over time that like

00:11:40 --> 00:11:45
we do deep market diligence as a firm uh

00:11:42 --> 00:11:47
and we do deep diligence on companies

00:11:44 --> 00:11:48
before we invest in them. And that the

00:11:46 --> 00:11:51
type of diligence we do if it was deep

00:11:48 --> 00:11:54
infrastructure just required a different

00:11:50 --> 00:11:55
you know type of junior partner and type

00:11:53 --> 00:11:56
of analysis. So over time we realized

00:11:54 --> 00:12:00
that like companies where you can

00:11:56 --> 00:12:03
evaluate more by like the business model

00:11:59 --> 00:12:05
the market buyer the unit economics is a

00:12:02 --> 00:12:06
bit you know those kind of class of

00:12:04 --> 00:12:08
companies are just sufficiently

00:12:05 --> 00:12:10
distinct. So we decided to just pull

00:12:07 --> 00:12:11
them apart and then that's why we have

00:12:09 --> 00:12:14
the apps fund and then of course you

00:12:10 --> 00:12:15
know the infr fund. If you think about

00:12:13 --> 00:12:17
you know enterprise there is of course

00:12:14 --> 00:12:19
the horizontal piece of it but also a

00:12:16 --> 00:12:22
lot of vertical enterprise whether

00:12:18 --> 00:12:23
applications buyers sectors where

00:12:21 --> 00:12:26
infrastructure is almost always

00:12:22 --> 00:12:28
horizontal and that's another you know

00:12:25 --> 00:12:30
um uh thing we realized along the way of

00:12:27 --> 00:12:32
like we still want to like appeal to

00:12:30 --> 00:12:34
these like technical audience and

00:12:31 --> 00:12:36
technical buyers but we want to think

00:12:33 --> 00:12:37
about sort of the space in a in a

00:12:35 --> 00:12:39
horizontal fashion where these

00:12:36 --> 00:12:40
technology can be distributed to like

00:12:38 --> 00:12:42
all these different sectors and and

00:12:39 --> 00:12:44
verticals as well and it impacts how we

00:12:41 --> 00:12:45
think about you know the stack it

00:12:43 --> 00:12:49
impacts how we think about what is going

00:12:44 --> 00:12:51
to drive sort of the the form of um uh

00:12:48 --> 00:12:53
like how the stacks integrate with with

00:12:50 --> 00:12:55
each other it just like kind of you

00:12:52 --> 00:12:55
know different from how enterprise

00:12:54 --> 00:12:57
generally

00:12:54 --> 00:12:59
>> yeah so yeah so it's actually a very

00:12:56 --> 00:13:01
important distinction I'm glad you

00:12:58 --> 00:13:04
brought it up so like technical buyers

00:13:00 --> 00:13:06
tend to be centralized buyers in a way

00:13:03 --> 00:13:07
right like it will buy compute network

00:13:05 --> 00:13:08
and storage and yes you've got the

00:13:06 --> 00:13:10
comput person the networking person but

00:13:07 --> 00:13:12
it kind of rolls up to it and developers

00:13:10 --> 00:13:14
are kind of a centralized buyer So like

00:13:11 --> 00:13:16
you can understand it and you can

00:13:13 --> 00:13:18
understand the developers but when I was

00:13:15 --> 00:13:21
looking at vertical SAS apps you know

00:13:18 --> 00:13:23
early in my investing career to

00:13:20 --> 00:13:24
understand how to sell into a flooring

00:13:22 --> 00:13:25
company you have to understand the

00:13:23 --> 00:13:27
flooring market and that's entirely

00:13:24 --> 00:13:28
different than like whatever like the

00:13:26 --> 00:13:30
pet food market and that's entirely

00:13:27 --> 00:13:33
different than the construction market.

00:13:29 --> 00:13:35
So I felt like there was no real central

00:13:32 --> 00:13:36
software buyer for these kind of

00:13:34 --> 00:13:38
verticals. So as you get further away

00:13:35 --> 00:13:39
from core infrastructure, you get away

00:13:37 --> 00:13:41
from this notion of a centralized

00:13:38 --> 00:13:42
ucated buyer and just the level of

00:13:40 --> 00:13:43
analysis becomes very different. I think

00:13:42 --> 00:13:45
that's exactly right.

00:13:42 --> 00:13:47
>> Well, and there's even sort of like the

00:13:44 --> 00:13:48
horseshoe theory of software buyers

00:13:46 --> 00:13:50
happening now where you have like

00:13:47 --> 00:13:52
consumers over here and then you kind of

00:13:49 --> 00:13:54
work up to like apps and like you would

00:13:51 --> 00:13:55
think that like infra is way over here,

00:13:53 --> 00:13:57
but it's actually kind of bending back

00:13:54 --> 00:13:59
around like developers are making a lot

00:13:56 --> 00:14:01
of the decisions and a lot of the like

00:13:58 --> 00:14:02
marketing and sales to developers looks

00:14:00 --> 00:14:03
more like consumer these days than it

00:14:01 --> 00:14:04
used to.

00:14:02 --> 00:14:06
>> That's a incredibly important point. And

00:14:03 --> 00:14:09
I was um you know researching the the

00:14:05 --> 00:14:11
stats the other day like um when I

00:14:08 --> 00:14:12
first joined uh you know venture or

00:14:10 --> 00:14:13
maybe even just started thinking about

00:14:11 --> 00:14:16
infrastructure developer still like in

00:14:12 --> 00:14:17
the low tens of millions um and they

00:14:15 --> 00:14:19
were becoming like the next generation

00:14:16 --> 00:14:21
of consumers. Now they're definitely the

00:14:18 --> 00:14:23
next generation of consumers. They go

00:14:20 --> 00:14:24
it's going above 50 million on the way

00:14:22 --> 00:14:25
to you know even bigger than that. Now

00:14:23 --> 00:14:26
e're talking about natural language

00:14:24 --> 00:14:29
being a programming language for

00:14:25 --> 00:14:31
everybody like they're making decisions

00:14:28 --> 00:14:32
just as a consumer. So we're of course

00:14:30 --> 00:14:34
like training ourselves to also

00:14:31 --> 00:14:37
understand how de developers as

00:14:34 --> 00:14:40
individual individuals adopt tools but

00:14:36 --> 00:14:42
also like it buying centers um as

00:14:39 --> 00:14:44
customers and enterprise organizations

00:14:41 --> 00:14:48
like evaluating tools. So there's just

00:14:43 --> 00:14:50
you know a lot to uh learn and and and

00:14:47 --> 00:14:52
uh figure out given these are the

00:14:49 --> 00:14:55
technical audience we really care about.

00:14:51 --> 00:14:56
>> Yeah. I want to get to where we think

00:14:54 --> 00:14:58
about how we think about our investable

00:14:55 --> 00:15:01
universe and what what sort of

00:14:57 --> 00:15:03
subcategories are are mature versus

00:15:00 --> 00:15:05
newer or or sort of ripe. But before

00:15:02 --> 00:15:06
that, I want to better kind of trace the

00:15:04 --> 00:15:08
volution a little bit. So maybe Martin,

00:15:05 --> 00:15:09
we can start with you. If you had to

00:15:07 --> 00:15:12
kind of categorize like since you've

00:15:08 --> 00:15:13
been investing like the different waves

00:15:11 --> 00:15:15
of infin or like maybe the different

00:15:12 --> 00:15:17
inflection points at which it kind of

00:15:14 --> 00:15:18
changed how we even thought about

00:15:16 --> 00:15:19
otally, how would you characterize?

00:15:17 --> 00:15:22
Let's just say for like just like the

00:15:18 --> 00:15:24
the life cycle of the firm. So we

00:15:21 --> 00:15:26
started what 2009 and that was actually

00:15:23 --> 00:15:28
kind of pre-cloud

00:15:25 --> 00:15:31
>> and so a lot of the early investments

00:15:27 --> 00:15:33
were right in the cusp of cloud. Uh and

00:15:30 --> 00:15:35
like for example my company like the

00:15:32 --> 00:15:36
cloud was out there but it wasn't

00:15:34 --> 00:15:39
sufficiently deployed you could use it

00:15:35 --> 00:15:42
as kind of a core thesis and a lot of

00:15:38 --> 00:15:44
the early investments were like this and

00:15:41 --> 00:15:45
you know we talk about in terms of tech

00:15:43 --> 00:15:48
but it rips through the entire business

00:15:44 --> 00:15:50
model like early software was onrem with

00:15:47 --> 00:15:51
a perpetual license that's just

00:15:49 --> 00:15:53
different economics and different

00:15:50 --> 00:15:55
analysis right and so like the pre-cloud

00:15:52 --> 00:15:57
you know installable software area was

00:15:54 --> 00:15:58
one and then we saw the cloud transition

00:15:56 --> 00:16:00
right so we went to like recurring

00:15:57 --> 00:16:01
revenue you know totally different

00:15:59 --> 00:16:03
deployment model, a totally different

00:16:00 --> 00:16:05
operating model. And and and during that

00:16:02 --> 00:16:07
ime, we'd see things like, you know,

00:16:04 --> 00:16:08
net dollar retention being more

00:16:06 --> 00:16:10
important, expansion being more

00:16:07 --> 00:16:12
important, gross turn being more

00:16:09 --> 00:16:13
important, gross margin,

00:16:11 --> 00:16:15
>> gross margin being more important, like

00:16:12 --> 00:16:18
you know, everything changed to that.

00:16:14 --> 00:16:19
And then um you know, and and by the

00:16:17 --> 00:16:20
way, meanwhile, of course, we saw

00:16:18 --> 00:16:22
consumer being disrupted by mobile,

00:16:19 --> 00:16:22
right, with the rise of like the Ubers

00:16:21 --> 00:16:25
and the lifts, you know, and the

00:16:22 --> 00:16:28
Airbnbs. And then again we're seeing it

00:16:24 --> 00:16:30
happen again um during this AI which I

00:16:27 --> 00:16:33
would say the AI transformation of the

00:16:29 --> 00:16:35
last 3 years has been the most dramatic

00:16:32 --> 00:16:37
I've seen in you know the last 30 years

00:16:34 --> 00:16:39
of being in this industry and there's

00:16:36 --> 00:16:42
there's one interesting blip

00:16:38 --> 00:16:44
along that path which was co

00:16:41 --> 00:16:46
like we're all like you know we come

00:16:43 --> 00:16:48
from the realm of like enterprise sales

00:16:45 --> 00:16:49
and you know like being on the ground

00:16:47 --> 00:16:51
and like you know deploying things and

00:16:48 --> 00:16:52
like that totally evaporated. So like

00:16:50 --> 00:16:53
actually that was kind of a dramatic

00:16:51 --> 00:16:56
shift as well but it was driven by this

00:16:52 --> 00:16:59
kind of force majour as opposed to a

00:16:56 --> 00:17:00
secular you know technical wave like the

00:16:58 --> 00:17:02
other two did.

00:16:59 --> 00:17:03
>> I would say one of the benefit co

00:17:01 --> 00:17:06
brought is there was already the trend

00:17:02 --> 00:17:07
going of like developer developers

00:17:05 --> 00:17:10
buying and adopting tools like this

00:17:06 --> 00:17:12
bottomout motion for infrastructure and

00:17:09 --> 00:17:14
for dev tools. It kind of get uh

00:17:11 --> 00:17:15
accelerated during the co time where

00:17:13 --> 00:17:17
lots of people are just like tinkering

00:17:14 --> 00:17:19
trying out products and tools and also

00:17:16 --> 00:17:20
more people building dev tools during

00:17:18 --> 00:17:23
that time. I feel like there was a

00:17:19 --> 00:17:26
flourishing ecosystem just of these like

00:17:22 --> 00:17:28
PLG or productled um dev tool companies

00:17:25 --> 00:17:30
that are giving birth to now where we're

00:17:27 --> 00:17:31
seeing a lot of like AI dev tools that

00:17:29 --> 00:17:33
are coming up.

00:17:30 --> 00:17:35
>> There's nothing developers like better

00:17:32 --> 00:17:37
than being forced to stay home, not

00:17:34 --> 00:17:40
interact with other people and write

00:17:36 --> 00:17:40
code.

00:17:42 --> 00:17:48
>> That's amazing. Okay, now that's a good

00:17:45 --> 00:17:50
overview. Let's go deeper into the

00:17:47 --> 00:17:52
present a little bit. Can you guys share

00:17:49 --> 00:17:54
how how we think about sort of the the

00:17:51 --> 00:17:56
different subcategories or landscape

00:17:54 --> 00:17:58
that that kind of makes up info and we

00:17:55 --> 00:17:59
could also plug some examples of

00:17:57 --> 00:18:01
portfolio companies or or spaces where

00:17:58 --> 00:18:04
we made made made some bets.

00:18:00 --> 00:18:06
>> Here's a few important categories. Um uh

00:18:03 --> 00:18:08
developer tools meaning anything

00:18:05 --> 00:18:10
developers use to make their lives

00:18:07 --> 00:18:12
better, easier, faster, more efficient.

00:18:09 --> 00:18:13
Cursor is probably our top developer

00:18:11 --> 00:18:14
tool company right now. Um but we've

00:18:12 --> 00:18:15
done about

00:18:13 --> 00:18:17
>> and before that GitHub, right? Yeah,

00:18:14 --> 00:18:18
GitHub before that. And Jennifer, you've

00:18:16 --> 00:18:20
actually backed a bunch of interesting

00:18:18 --> 00:18:21
dev tools companies in the last few

00:18:19 --> 00:18:24
years, too.

00:18:20 --> 00:18:25
>> Yeah. From Lifi, Stainless, um,

00:18:23 --> 00:18:27
>> and there was a long time where those

00:18:24 --> 00:18:28
the dev tools was kind of like written

00:18:26 --> 00:18:30
off by VCs, right? Like there were

00:18:28 --> 00:18:32
>> Oh, yeah. The T was too small.

00:18:29 --> 00:18:34
>> Yeah, exactly. I mean, at the time of

00:18:31 --> 00:18:36
GitHub, would you ever have imagined a

00:18:33 --> 00:18:38
repository would be a huge company? Like

00:18:35 --> 00:18:39
it was like almost a joke. Yeah. Yeah.

00:18:37 --> 00:18:41
>> Right. And people about the business

00:18:38 --> 00:18:43
model, you know, all these things.

00:18:40 --> 00:18:45
Small TAM is the classic like red flag

00:18:42 --> 00:18:47
for for infra investing, you know, like

00:18:44 --> 00:18:48
if you're at home listening to this

00:18:46 --> 00:18:49
and someone tells you small TAM, like

00:18:47 --> 00:18:51
run run the other.

00:18:48 --> 00:18:53
>> They're not an infra investor. Yeah,

00:18:50 --> 00:18:56
infra creates TAM. If there's one take

00:18:52 --> 00:18:57
away from this thing is is TAM creative.

00:18:55 --> 00:18:59
So yeah. So like I think dev tools,

00:18:56 --> 00:19:00
you've got core infra, which is compute,

00:18:58 --> 00:19:03
network, and storage, right? This is

00:18:59 --> 00:19:04
like to it. And then and then you tend

00:19:02 --> 00:19:06
to actually be quite a bit above the

00:19:03 --> 00:19:07
corn infra stack. So maybe you talk

00:19:05 --> 00:19:10
through kind of the areas you focus on.

00:19:06 --> 00:19:12
Well, I I think about both like how to

00:19:09 --> 00:19:13
how developers are like using tools to

00:19:11 --> 00:19:15
improve their efficiency, but also how

00:19:12 --> 00:19:17
customers are getting value out of that

00:19:14 --> 00:19:20
as well. So, a lot of you know packaging

00:19:16 --> 00:19:21
maybe dev tools into SAS forms. Um like

00:19:19 --> 00:19:24
I I'm investing in this company called

00:19:20 --> 00:19:26
Pylon. It is a SAS company that does

00:19:23 --> 00:19:27
like you know customer support but

00:19:25 --> 00:19:28
fundamentally it's like building a data

00:19:26 --> 00:19:29
pipeline. So that's like core

00:19:27 --> 00:19:31
infrastructure that's very good at

00:19:28 --> 00:19:33
connecting the systems and providing

00:19:30 --> 00:19:35
context to a lot of like agents and AI

00:19:32 --> 00:19:38
models. So uh to me that's that's

00:19:34 --> 00:19:39
infrastructure. Um, and we're spending a

00:19:37 --> 00:19:41
lot of time on, of course, like the the

00:19:38 --> 00:19:43
cutting edge AI research. So, a lot of

00:19:40 --> 00:19:44
oundation model investing.

00:19:42 --> 00:19:46
>> I will say the the reason that we're a

00:19:43 --> 00:19:48
little bit skittish on this question is

00:19:45 --> 00:19:51
early in super cycles, it's very hard to

00:19:47 --> 00:19:53
distinguish between an infra company and

00:19:50 --> 00:19:55
like the application companies and the

00:19:52 --> 00:19:57
reason is cuz the TAM is so small and so

00:19:54 --> 00:19:59
new, the new technology becomes the app,

00:19:56 --> 00:20:01
right? So, let let me refer to like like

00:19:58 --> 00:20:03
you know the original super cycle that

00:20:00 --> 00:20:05
started the firm which was which is the

00:20:02 --> 00:20:07
internet like like Netscape. I remember

00:20:04 --> 00:20:10
it when it came out like it was like a

00:20:06 --> 00:20:12
consumer thing or at least a student in

00:20:09 --> 00:20:15
school thing right and so this is one

00:20:11 --> 00:20:17
company which you know everybody was

00:20:14 --> 00:20:19
downloading from an FTP server Netscape

00:20:16 --> 00:20:20
and using it as individuals

00:20:18 --> 00:20:22
>> you know the the enterprise didn't know

00:20:19 --> 00:20:24
hat to think about it and banned it or

00:20:21 --> 00:20:25
whatever and the same company that was

00:20:23 --> 00:20:27
like building that built JavaScript

00:20:24 --> 00:20:29
hat's building this core technology is

00:20:26 --> 00:20:32
also doing the browser and over time it

00:20:28 --> 00:20:34
kind of matures and then of course you

00:20:31 --> 00:20:36
have all of these internet companies and

00:20:33 --> 00:20:37
then all the applications show up.

00:20:35 --> 00:20:40
We're seeing the same thing in the AI

00:20:36 --> 00:20:42
wave. Like is Midjourney

00:20:39 --> 00:20:44
is that an infra company? They build a

00:20:41 --> 00:20:46
model or is that an app company? Well,

00:20:43 --> 00:20:48
it's kind of both in this sense. And so

00:20:45 --> 00:20:49
I do think that at this stage it's very

00:20:47 --> 00:20:52
hard to distinguish,

00:20:48 --> 00:20:54
>> right? It's it's exactly right. Like

00:20:51 --> 00:20:56
it's very hard to answer if OpenAI is a

00:20:53 --> 00:20:58
pp company or it's a infra company.

00:20:55 --> 00:21:00
It's l literally is building like

00:20:57 --> 00:21:02
infrastructure that's like a cloud

00:20:59 --> 00:21:04
running these models for different uh

00:21:01 --> 00:21:05
sector and different use cases but at

00:21:03 --> 00:21:08
he same time building a consumer app

00:21:04 --> 00:21:09
that's chat GPT. So we we think of

00:21:07 --> 00:21:12
oundation model companies are similar

00:21:08 --> 00:21:14
like 11 labs they're a voice AI provider

00:21:11 --> 00:21:16
and they have the creator application

00:21:13 --> 00:21:17
that can use a studio to create voices

00:21:15 --> 00:21:19
but at the same time they're also

00:21:16 --> 00:21:21
supplying the voices to these large

00:21:18 --> 00:21:22
scale enterprise use case that are like

00:21:20 --> 00:21:25
you know fine-tuning cloning your own

00:21:22 --> 00:21:27
voice and you know distributing that

00:21:24 --> 00:21:28
hrough API. So it's sort of you know

00:21:26 --> 00:21:28
both.

00:21:27 --> 00:21:30
>> Yeah.

00:21:28 --> 00:21:31
>> Another area we've done a lot of work is

00:21:29 --> 00:21:33
data systems and there's sort of been

00:21:30 --> 00:21:37
these two branches. one is kind of this

00:21:32 --> 00:21:39
like kind of backend data engine driven

00:21:36 --> 00:21:41
big data systems you know spark Hadoop

00:21:38 --> 00:21:44
sort of thing and the other is this sort

00:21:40 --> 00:21:46
of data analyst um kind of more tabular

00:21:43 --> 00:21:48
snowflake kind of kind of thing and um I

00:21:45 --> 00:21:50
think as a firm we've been super super

00:21:47 --> 00:21:52
active and super aggressive you know and

00:21:49 --> 00:21:54
uh invested in companies like data

00:21:51 --> 00:21:56
bricks I mentioned fiverran dbt which

00:21:53 --> 00:21:58
you guys invested in together hex

00:21:55 --> 00:21:59
which is doing really really well uh

00:21:57 --> 00:22:01
tabular which is which was acquired by

00:21:58 --> 00:22:03
data bricks so um we're still I think

00:22:00 --> 00:22:04
really really bull bullish on this.

00:22:02 --> 00:22:06
Unfortunately, AI has kind of sucked the

00:22:04 --> 00:22:08
air out of the room for a lot of data

00:22:05 --> 00:22:09
companies from a bunch of different

00:22:07 --> 00:22:12
angles, but but I think we'll continue

00:22:08 --> 00:22:14
to do do more of this a lot as well. How

00:22:11 --> 00:22:15
do we think about defensibility for AI

00:22:13 --> 00:22:17
companies, whether it's a whether it's

00:22:14 --> 00:22:19
an app app at the app layer or the or

00:22:16 --> 00:22:21
the model layer? Um, do they all have

00:22:18 --> 00:22:23
their respective sort of areas of

00:22:20 --> 00:22:25
defensibility or how has sort of our

00:22:22 --> 00:22:27
notion of defensibility evolved?

00:22:24 --> 00:22:28
So we once wrote a blog post that there

00:22:26 --> 00:22:29
was no defensibility anywhere in the

00:22:28 --> 00:22:32
stack

00:22:28 --> 00:22:36
>> for any for anything for anything like

00:22:31 --> 00:22:36
>> and yet people make lots of money like

00:22:35 --> 00:22:40
you know the argument at the time was

00:22:37 --> 00:22:42
like okay like Nvidia has sort of a moat

00:22:39 --> 00:22:45
because chip designs are are hard to

00:22:41 --> 00:22:46
copy but if you go sort of up or down

00:22:44 --> 00:22:49
they're all sort of manufactured at the

00:22:46 --> 00:22:51
same place right at TSMC you know if you

00:22:48 --> 00:22:53
go down if you go up the cloud providers

00:22:50 --> 00:22:55
provide effectively the same product

00:22:52 --> 00:22:57
like the models are training on the same

00:22:54 --> 00:22:58
data haven't had have like similar

00:22:56 --> 00:23:01
capabilities you know the apps are all

00:22:57 --> 00:23:02
kind of like all using the same model so

00:23:00 --> 00:23:03
that was sort of the naive theory I

00:23:01 --> 00:23:04
think when we were just trying to

00:23:02 --> 00:23:06
understand this at the beginning and I

00:23:03 --> 00:23:08
think maybe it was true at the time um

00:23:05 --> 00:23:10
what Martine was sort of alluding to a

00:23:07 --> 00:23:11
second ago is like meanwhile every

00:23:09 --> 00:23:14
company at every layer of the stack is

00:23:10 --> 00:23:16
doing like fantastically well right now

00:23:13 --> 00:23:18
and during this kind of initial phase of

00:23:15 --> 00:23:19
industry development which which we

00:23:17 --> 00:23:21
sometimes call the brownie in motion

00:23:18 --> 00:23:23
phase like I actually think it's really

00:23:20 --> 00:23:25
hard to make sort of pronouncements like

00:23:22 --> 00:23:26
this about what's going to work, what's

00:23:24 --> 00:23:28
not going to work, where's value going

00:23:25 --> 00:23:30
to acrew, etc., etc. It's like app

00:23:27 --> 00:23:32
companies are doing really really well

00:23:29 --> 00:23:33
and like we're like pretty clear past

00:23:31 --> 00:23:35
he sort of rapper phase. Like I don't

00:23:32 --> 00:23:37
hink there are any rappers anymore.

00:23:34 --> 00:23:38
Like building good products with AI is

00:23:36 --> 00:23:40
really hard and the founders doing it

00:23:37 --> 00:23:41
now have like really good kind of

00:23:39 --> 00:23:43
intuition for how to do it.

00:23:40 --> 00:23:44
>> You know, the models are clearly like

00:23:42 --> 00:23:45
pushing the whole industry forward and

00:23:43 --> 00:23:47
like they've built huge companies

00:23:44 --> 00:23:49
dramatic, you know, so it's like it it's

00:23:46 --> 00:23:50
kind of all working right now and I

00:23:48 --> 00:23:52
think you could actually make a case for

00:23:49 --> 00:23:54
how defensibility will work. Um it's

00:23:51 --> 00:23:56
quite different from the way

00:23:53 --> 00:23:57
defensibility has worked before. So and

00:23:55 --> 00:23:58
maybe you guys want to add on to

00:23:56 --> 00:24:00
that.

00:23:57 --> 00:24:02
>> Yeah. On how defensibility worked for

00:23:59 --> 00:24:04
infrared companies before largely like

00:24:01 --> 00:24:06
it came from it's really hard to let's

00:24:03 --> 00:24:09
ay if you're building like a new

00:24:05 --> 00:24:12
database like a new framework. Um it it

00:24:08 --> 00:24:14
just takes uh a lot of expertise in the

00:24:11 --> 00:24:16
domain of understanding you know what

00:24:13 --> 00:24:18
has happened in the past where did the

00:24:15 --> 00:24:21
you know the the field come through and

00:24:17 --> 00:24:23
what are the you know um uh innovations

00:24:20 --> 00:24:27
that needs to happen to polish let's say

00:24:22 --> 00:24:30
like a software into um this new um

00:24:26 --> 00:24:32
abstraction to provide to developers. Um

00:24:29 --> 00:24:34
aybe one example I'm thinking of is

00:24:31 --> 00:24:37
like duct DB. It's such a high

00:24:33 --> 00:24:39
performance small but really nimble uh

00:24:36 --> 00:24:42
database that it took like four years

00:24:38 --> 00:24:44
for the team to write to write it to

00:24:41 --> 00:24:45
replicate that is really hard and that's

00:24:43 --> 00:24:47
generally what happened in the past

00:24:44 --> 00:24:49
infrastructure space is like it takes

00:24:46 --> 00:24:52
these experts a lot of time to build

00:24:48 --> 00:24:54
like a new piece of security software if

00:24:51 --> 00:24:57
it's like you know UB keys or if it's um

00:24:53 --> 00:25:00
again like data bricks on spark um but

00:24:56 --> 00:25:02
now um you know as uh the AI

00:24:59 --> 00:25:04
infrastructure come through like I think

00:25:01 --> 00:25:06
a lot of those defensibilities still uh

00:25:03 --> 00:25:09
stays and still are true cuz these are

00:25:05 --> 00:25:11
arnest secrets of like what are the

00:25:08 --> 00:25:13
downfalls and guarantees um other

00:25:10 --> 00:25:16
software run into but I I do feel like

00:25:12 --> 00:25:17
the adoption phase is just like really

00:25:15 --> 00:25:19
massive like who is going to earn the

00:25:16 --> 00:25:20
distribution and earn sort of the

00:25:18 --> 00:25:21
developer attention is going to be a

00:25:19 --> 00:25:23
different game.

00:25:20 --> 00:25:25
>> The industry tends to go through these

00:25:22 --> 00:25:27
xpansion and contraction phases. Think

00:25:24 --> 00:25:28
of like the big bang or something like

00:25:26 --> 00:25:30
it expands and then it contracts. So

00:25:27 --> 00:25:32
what happens when it expands? So when it

00:25:29 --> 00:25:34
expands, zero sum thinking is deadly

00:25:31 --> 00:25:36
because you just get getting more

00:25:33 --> 00:25:38
market. We're clearly in an expanse

00:25:35 --> 00:25:40
phase, right? Like everybody is like,

00:25:37 --> 00:25:41
"Oh, Nvidia can't like, you know, sell

00:25:39 --> 00:25:43
more chips, but they keep selling more

00:25:40 --> 00:25:44
chips. Oh, like the hosting platforms

00:25:42 --> 00:25:46
can't continue to get margins yet, they

00:25:43 --> 00:25:47
keep continuing to get margins." I mean,

00:25:45 --> 00:25:50
Matt said it perfectly. I totally agree.

00:25:46 --> 00:25:52
So if you're in the expansion phase,

00:25:49 --> 00:25:53
then there's just more to sell. You

00:25:51 --> 00:25:55
should be aggressive investing. So what

00:25:52 --> 00:25:57
happens in the collapse phase? So look

00:25:54 --> 00:25:58
at any layer of the stack. So in the

00:25:56 --> 00:26:00
collapse phase which things start to

00:25:57 --> 00:26:02
consolidate again you have

00:25:59 --> 00:26:04
consolidation. But what is the end state

00:26:01 --> 00:26:06
of consolidation? The end state of

00:26:03 --> 00:26:08
consolidation will always be an

00:26:05 --> 00:26:10
oligopoly or a monopoly. It's not like

00:26:07 --> 00:26:13
layers ever go away. If you have an

00:26:09 --> 00:26:14
oligopoly like say the clouds then you

00:26:12 --> 00:26:16
have what is effectively price fixing

00:26:13 --> 00:26:18
but it's tacit right which is

00:26:15 --> 00:26:20
everybody's like we're going to price it

00:26:17 --> 00:26:21
his and we're going to maintain our 30%

00:26:19 --> 00:26:25
margins. So you still have value there.

00:26:20 --> 00:26:27
you have margins or in the case of like

00:26:24 --> 00:26:29
a monopoly you'll end up with like say

00:26:26 --> 00:26:31
like an Intel at the time then you can

00:26:28 --> 00:26:34
also maintain margins. So in none of

00:26:30 --> 00:26:35
this do you lose margins, right? And I

00:26:33 --> 00:26:36
just think this is why people think so

00:26:34 --> 00:26:39
sloppy about this. People use the words

00:26:36 --> 00:26:42
like commoditization and no

00:26:38 --> 00:26:45
defensibility. That tends to be a battle

00:26:41 --> 00:26:46
between layers of the stack. But the

00:26:44 --> 00:26:48
only way you can do that is actually

00:26:45 --> 00:26:49
like actually move down the stack and

00:26:47 --> 00:26:50
enter somebody else's layer, which is

00:26:48 --> 00:26:53
incredibly hard to do. And you do see it

00:26:50 --> 00:26:55
like so of course you know Google is

00:26:52 --> 00:26:57
going to build their own chips and they

00:26:54 --> 00:26:59
start moving down the stack but that's a

00:26:56 --> 00:27:01
very very different layer than somehow

00:26:58 --> 00:27:03
Google playing the different layers off

00:27:00 --> 00:27:05
uh against each other. And so I I would

00:27:02 --> 00:27:07
encourage anybody that does invest at

00:27:04 --> 00:27:09
least in infrastructure to not think

00:27:06 --> 00:27:11
zero sum and to realize that

00:27:08 --> 00:27:13
historically every layer of the stack

00:27:10 --> 00:27:15
has maintained some level of value and

00:27:12 --> 00:27:18
margin. And if not it was because a

00:27:14 --> 00:27:20
layer above them managed to kind of

00:27:17 --> 00:27:21
verticalize themsel but then it's that

00:27:19 --> 00:27:22
one player against the rest of the

00:27:20 --> 00:27:24
world.

00:27:21 --> 00:27:25
>> Yeah. I mean it's it's like faster than

00:27:23 --> 00:27:26
light speeded travel has just been

00:27:24 --> 00:27:28
invented, right? And we're sending all

00:27:25 --> 00:27:30
the spaceships out in all directions and

00:27:27 --> 00:27:31
there's plenty of planets like and stars

00:27:29 --> 00:27:32
to claim for everybody. like we don't

00:27:30 --> 00:27:34
need, you know, we're not even close

00:27:31 --> 00:27:36
nough to each other to like fight.

00:27:33 --> 00:27:38
Yeah, for sure. Like this is but it will

00:27:36 --> 00:27:39
it will slow down and then the

00:27:37 --> 00:27:41
consolidation will happen but I

00:27:38 --> 00:27:43
guarantee you'll just end up with these

00:27:40 --> 00:27:46
great companies that maintain margin

00:27:42 --> 00:27:47
like AWS still has great margins. You

00:27:45 --> 00:27:49
know, Google still has great margins.

00:27:46 --> 00:27:51
>> Data bricks too is growing at incredible

00:27:48 --> 00:27:53
speed for scale. You know, I think

00:27:50 --> 00:27:55
people underestimate how hard these

00:27:52 --> 00:27:57
problems are in in many cases, right?

00:27:54 --> 00:27:58
You're sort of implyi applying consumer

00:27:56 --> 00:27:59
thinking because this is how we live

00:27:57 --> 00:28:00
most of our lives. is like, "Oh,

00:27:58 --> 00:28:02
wouldn't it be relatively easy to move

00:27:59 --> 00:28:03
to a different part of the stack or take

00:28:01 --> 00:28:04
out your competitor or someone a

00:28:02 --> 00:28:06
customer could just switch back and

00:28:03 --> 00:28:08
forth and and and it's just different

00:28:05 --> 00:28:10
laws of physics. I think I think in

00:28:07 --> 00:28:11
>> it just turns out in general the

00:28:09 --> 00:28:14
switching cost of infrastructure piece

00:28:10 --> 00:28:15
is so much higher even with like API

00:28:13 --> 00:28:17
businesses, people tend to think you can

00:28:14 --> 00:28:19
just like switch over to another API.

00:28:16 --> 00:28:21
There's so much logic embedded in

00:28:18 --> 00:28:23
calling the API in the software itself.

00:28:20 --> 00:28:25
Like there's a lot more switching cost

00:28:22 --> 00:28:26
compared to, you know, your regular SAS

00:28:24 --> 00:28:28
software consumer."

00:28:25 --> 00:28:29
>> Totally. cuz you're actually integrating

00:28:27 --> 00:28:30
systems, right? It's it's not

00:28:28 --> 00:28:31
necessarily a person who can just have a

00:28:29 --> 00:28:33
preference for one thing or another.

00:28:30 --> 00:28:34
You're sort of integrating. For sure.

00:28:32 --> 00:28:37
>> Sam Alman once had the advice to

00:28:33 --> 00:28:39
startups uh last year. He was like, if

00:28:36 --> 00:28:42
you're worried about us improving our

00:28:38 --> 00:28:43
models, you're in a tough spot, but if

00:28:41 --> 00:28:45
you get if you get more excited about

00:28:42 --> 00:28:47
your business um by us sort of improving

00:28:44 --> 00:28:48
our models, then then you're in a good

00:28:46 --> 00:28:49
spot. Do you think that's a helpful

00:28:47 --> 00:28:51
framework or

00:28:48 --> 00:28:53
>> I think it's helpful for open AI for

00:28:50 --> 00:28:54
people.

00:28:52 --> 00:28:57
>> No comments.

00:28:53 --> 00:28:59
>> I I want to say that too like

00:28:56 --> 00:29:01
you know, like if you know, A16Z, if you

00:28:58 --> 00:29:04
think us investing in the next company

00:29:00 --> 00:29:05
isn't good for you, then like,

00:29:03 --> 00:29:08
you know, but like if you want to buy

00:29:04 --> 00:29:10
from our C our companies, like that's

00:29:07 --> 00:29:12
great. I mean, that's a very open

00:29:10 --> 00:29:14
question that's actually a technical

00:29:11 --> 00:29:18
question. It isn't a business question,

00:29:13 --> 00:29:20
which is how much does general training

00:29:17 --> 00:29:23
eneralize, right? So, we know in like

00:29:19 --> 00:29:24
the pre-training world, it generalized

00:29:22 --> 00:29:27
really well. you'd create one model and

00:29:23 --> 00:29:29
that model was just as good at code as

00:29:26 --> 00:29:30
it was at like writing a poem or right

00:29:28 --> 00:29:33
so we know that it was very general and

00:29:29 --> 00:29:35
in that world sure as the models get

00:29:32 --> 00:29:37
more powerful then they can do all of

00:29:34 --> 00:29:39
the things so they compete with all of

00:29:36 --> 00:29:41
the things right but it it seems clear

00:29:38 --> 00:29:43
to me and again this is an observation

00:29:40 --> 00:29:46
and it may not be correct that as we get

00:29:42 --> 00:29:49
more into the RL world that you make

00:29:46 --> 00:29:50
some trade-offs and then let's say I I

00:29:48 --> 00:29:52
RL something for code it's not going to

00:29:49 --> 00:29:53
be as good as something else and like

00:29:51 --> 00:29:56
you're making these trade-offs And in

00:29:52 --> 00:29:58
that world, then it's not the case that

00:29:56 --> 00:30:00
he model is going to generally be good.

00:29:57 --> 00:30:01
So I think it's great to compete at the

00:29:59 --> 00:30:03
model layer. And so again, I think this

00:30:00 --> 00:30:06
maybe a a reasonable rubric certainly

00:30:02 --> 00:30:08
for OpenAI to have people believe maybe

00:30:05 --> 00:30:09
a reasonable rubric if you believe that

00:30:07 --> 00:30:11
hese models are going to be generally

00:30:08 --> 00:30:13
great, but I just don't think it holds

00:30:10 --> 00:30:15
up to how things are going to play out.

00:30:12 --> 00:30:16
>> This is a debate we had two years ago. I

00:30:14 --> 00:30:19
think whether the general model and the

00:30:15 --> 00:30:21
most capable model will rule or or a lot

00:30:18 --> 00:30:23
of uh small small medium-sized models

00:30:20 --> 00:30:24
that are very good at specific tasks. Um

00:30:22 --> 00:30:25
that's going to be the future. It turns

00:30:23 --> 00:30:26
out both are true.

00:30:24 --> 00:30:27
>> Both. Yeah.

00:30:25 --> 00:30:29
>> When we're talking about complex

00:30:26 --> 00:30:30
systems, you cannot just like use one

00:30:28 --> 00:30:32
model that drives everything. At least

00:30:29 --> 00:30:34
not today. Uh but you can compose like

00:30:31 --> 00:30:36
you know very capable and powerful

00:30:33 --> 00:30:38
models to like you know take certain

00:30:35 --> 00:30:40
tasks and also train together you know

00:30:37 --> 00:30:42
processes from like processing document

00:30:39 --> 00:30:44
o like feeding in a model to have some

00:30:41 --> 00:30:46
reasoning and give give you back clean

00:30:43 --> 00:30:48
uh and structured data um to make

00:30:45 --> 00:30:50
decisions and put into your application

00:30:47 --> 00:30:53
to serve end users like that's a complex

00:30:49 --> 00:30:56
system that invokes many model calls

00:30:52 --> 00:31:00
instead of just like one big um models

00:30:55 --> 00:31:01
task. Did you um guys have any reactions

00:30:59 --> 00:31:04
or is it worth talking at all about uh

00:31:00 --> 00:31:06
Karpathi's uh talk? Did did that framing

00:31:03 --> 00:31:08
resonate with you? Did you have any sort

00:31:05 --> 00:31:10
of uh differences of how you would frame

00:31:07 --> 00:31:11
certain things or how you you one thing

00:31:09 --> 00:31:13
he mentioned is that he thinks it's not

00:31:10 --> 00:31:15
he year of agents but the decade of a

00:31:12 --> 00:31:17
gents. Perhaps it's not as

00:31:14 --> 00:31:19
immediately uh you know um you know

00:31:16 --> 00:31:21
upcoming as as we might might have

00:31:18 --> 00:31:22
thought. So there's this idea of of

00:31:20 --> 00:31:25
prompt engineering that people have

00:31:21 --> 00:31:27
talked about and um and and somebody it

00:31:24 --> 00:31:28
wasn't Karpathy but Karpathy piled on

00:31:26 --> 00:31:31
top is this it's really not about prompt

00:31:27 --> 00:31:33
engineering it's context engineering

00:31:30 --> 00:31:36
and so what is context engineering so if

00:31:32 --> 00:31:39
you're going to call a model you kind of

00:31:35 --> 00:31:41
have to know what to put in the context

00:31:38 --> 00:31:42
in that prompt and what tools do you

00:31:40 --> 00:31:44
have to do that well you could use other

00:31:41 --> 00:31:45
models but at some point you're probably

00:31:43 --> 00:31:46
going to use traditional computer

00:31:44 --> 00:31:47
science you're going to use like things

00:31:45 --> 00:31:49
like indexes you're going to have to do

00:31:46 --> 00:31:51
prioritization

00:31:48 --> 00:31:53
And to really drive the best performance

00:31:50 --> 00:31:55
out of those models, you do want the

00:31:52 --> 00:31:57
context to be corre uh correct. And I I

00:31:54 --> 00:32:00
do think it's probably the right framing

00:31:56 --> 00:32:01
of this problem. And the next step is is

00:31:59 --> 00:32:04
in as much as we're going to provide

00:32:00 --> 00:32:06
formalism to how do you use these models

00:32:03 --> 00:32:07
to how do you use existing tools to how

00:32:05 --> 00:32:08
do you improve the performance you

00:32:06 --> 00:32:10
should be thinking about what's the

00:32:07 --> 00:32:12
right way to get the right context into

00:32:09 --> 00:32:15
those models. And and I bring this up

00:32:11 --> 00:32:17
because, you know, like we said before,

00:32:14 --> 00:32:21
new infrastructure pieces create new

00:32:16 --> 00:32:22
patterns and new methods of software and

00:32:20 --> 00:32:24
building systems. And this is a great

00:32:21 --> 00:32:26
example of that kind of emerging before

00:32:24 --> 00:32:28
our eyes and people reasoning about it.

00:32:25 --> 00:32:29
And I I truly believe in 5 years we'll

00:32:27 --> 00:32:32
ook back, we'll come up with a whole

00:32:28 --> 00:32:34
new, you know, set of formal ways to

00:32:31 --> 00:32:35
build software and they will have strong

00:32:33 --> 00:32:36
uarantees and we'll understand them

00:32:34 --> 00:32:38
and, you know, there'll be all the tools

00:32:36 --> 00:32:40
for it, etc. The way I think that

00:32:37 --> 00:32:43
relates to our world is if you think

00:32:39 --> 00:32:46
about what is the like new form factor

00:32:42 --> 00:32:48
of infrastructure that needs to become

00:32:45 --> 00:32:50
part of this context engineering. It

00:32:47 --> 00:32:51
goes back to you know a lot of uh well

00:32:49 --> 00:32:53
we're obsessed about it with data

00:32:50 --> 00:32:55
pipeline. How do you feed the right data

00:32:52 --> 00:32:57
nd context into the models or into um

00:32:54 --> 00:32:59
the context and how do you have agents

00:32:56 --> 00:33:01
use tools or infrastructure that will

00:32:58 --> 00:33:03
provide the discovery and you know

00:33:00 --> 00:33:04
guarantees observability of these tools

00:33:02 --> 00:33:06
as well like it's the classic

00:33:03 --> 00:33:08
infrastructure problem that's still

00:33:05 --> 00:33:10
unsolved. So it's very exciting time.

00:33:07 --> 00:33:11
>> There's a few different types of

00:33:09 --> 00:33:12
infrarounders,

00:33:10 --> 00:33:14
right? And and we could probably come

00:33:11 --> 00:33:16
up, you know, like there's the sort of

00:33:14 --> 00:33:19
infrounder who loves solving really

00:33:15 --> 00:33:20
messy longtail kind of like nasty

00:33:18 --> 00:33:22
problems, right? There's a type that

00:33:19 --> 00:33:24
kind of just gets fed up with a problem

00:33:22 --> 00:33:26
and they're like, I'm going to solve

00:33:23 --> 00:33:27
this finally like I'm sick of this. Then

00:33:25 --> 00:33:29
there's the type that just kind of sees

00:33:26 --> 00:33:31
the world in a new way, right? And it's

00:33:28 --> 00:33:32
kind of like this is actually how we

00:33:30 --> 00:33:34
should marshall these resources and like

00:33:31 --> 00:33:35
it can change how you know like React is

00:33:33 --> 00:33:37
a great example of this. we had all

00:33:34 --> 00:33:38
these like kind of progression of

00:33:36 --> 00:33:40
ront-end development frameworks and

00:33:37 --> 00:33:43
finally react kind of was like the way

00:33:40 --> 00:33:44
that stuck and and for years now has

00:33:42 --> 00:33:46
been sort of the default front end. So

00:33:43 --> 00:33:47
like I think what Karpathy's talking

00:33:45 --> 00:33:49
about is kind of trying to figure that

00:33:46 --> 00:33:51
out, right? And he I think his software

00:33:48 --> 00:33:52
2.0 thing was really interesting. We

00:33:50 --> 00:33:54
were investing in a bunch of like

00:33:51 --> 00:33:56
traditional ML companies at the time. Um

00:33:53 --> 00:33:59
and I think software 3.0 I think he's

00:33:55 --> 00:34:01
ort of right about that too in sort of

00:33:58 --> 00:34:03
directionally and and I think he my hope

00:34:00 --> 00:34:05
is it'll inspire a lot of new

00:34:02 --> 00:34:07
infraounders to kind of do this work

00:34:04 --> 00:34:08
like see the world in a new way and like

00:34:06 --> 00:34:10
figure out how how these primitives

00:34:07 --> 00:34:12
hould really be kind of arranged.

00:34:09 --> 00:34:14
>> One of the difficulties of having any

00:34:11 --> 00:34:16
conversation around AI is it just

00:34:14 --> 00:34:19
exploits this weakness in the human

00:34:15 --> 00:34:22
imagination to like dump all of our

00:34:18 --> 00:34:24
fears and hopes and dreams into this

00:34:21 --> 00:34:25
anthropomorphic fallacy. Right? It's

00:34:23 --> 00:34:28
just and this goes all the way back to

00:34:24 --> 00:34:29
the Prometheian legend. And so I mean

00:34:27 --> 00:34:31
let's talk about even this context,

00:34:28 --> 00:34:34
right? Like

00:34:30 --> 00:34:35
you know we're building systems to build

00:34:33 --> 00:34:38
other systems. So systems have

00:34:34 --> 00:34:39
constraints, right? And so you can fail

00:34:37 --> 00:34:41
on either side of this when it comes to

00:34:38 --> 00:34:43
this anthropomorphic fallacy. On one

00:34:40 --> 00:34:45
side you can be like this stuff doesn't

00:34:42 --> 00:34:47
work. You shouldn't use it. You should

00:34:44 --> 00:34:49
only use traditional things which okay

00:34:46 --> 00:34:50
that's clearly not the case. It seems

00:34:48 --> 00:34:52
very useful. But on the other side, you

00:34:49 --> 00:34:54
can kind of like, you know, believe

00:34:51 --> 00:34:55
they'll solve all of our problems and

00:34:53 --> 00:34:57
you don't need formalism and you just

00:34:54 --> 00:34:58
kind of like go to the beach and you

00:34:56 --> 00:35:01
come back when AGI is done and it'll do

00:34:57 --> 00:35:04
it for you type thing. And so a part of

00:35:00 --> 00:35:07
our job and what we spend a lot of time

00:35:03 --> 00:35:09
talking about is trying to find that

00:35:06 --> 00:35:10
pragmatic

00:35:08 --> 00:35:12
non-blinkered

00:35:10 --> 00:35:16
non-pestic

00:35:11 --> 00:35:17
middle despite all of the rhetoric. And

00:35:15 --> 00:35:18
you I mean you hear all the rhetoric,

00:35:16 --> 00:35:20
right? the stuff is going to like, you

00:35:17 --> 00:35:22
know, no, we're not gonna have to work

00:35:19 --> 00:35:25
and we're all going to be on um

00:35:21 --> 00:35:27
>> the beach,

00:35:24 --> 00:35:29
>> right? Or or you know, like it'll kill

00:35:26 --> 00:35:31
us like I mean I I mean, you know, the

00:35:28 --> 00:35:33
whole thing and and I think where where

00:35:30 --> 00:35:34
we've landed is this is a real

00:35:32 --> 00:35:36
disruption. It just is changing all of

00:35:33 --> 00:35:38
software. It'll look something place

00:35:35 --> 00:35:40
different. Um but it is still going to

00:35:37 --> 00:35:43
require professionals. And I do think

00:35:39 --> 00:35:44
that like like the statement it'll

00:35:42 --> 00:35:46
require professionals is a very

00:35:43 --> 00:35:47
meaningful one. It means that you

00:35:45 --> 00:35:49
actually still need people that

00:35:46 --> 00:35:50
understand the specifications of the

00:35:48 --> 00:35:52
systems and and and not everybody agrees

00:35:50 --> 00:35:53
that some people are out there like

00:35:51 --> 00:35:55
listen you will never need a programmer

00:35:52 --> 00:35:56
again because people are beginning to

00:35:54 --> 00:35:59
just say some highle thing and it'll

00:35:56 --> 00:36:03
show up and the only one one statement

00:35:58 --> 00:36:05
I'll say to that is formal systems came

00:36:02 --> 00:36:07
out of natural languages for a reason

00:36:04 --> 00:36:09
and like either you care about

00:36:06 --> 00:36:11
specifying what you're designing or you

00:36:08 --> 00:36:12
don't and if you do you need to be a

00:36:10 --> 00:36:13
professional and that's why every

00:36:11 --> 00:36:15
professional discipline even though they

00:36:12 --> 00:36:17
started with a normal formal

00:36:14 --> 00:36:19
natural language has ended up with a

00:36:16 --> 00:36:21
formal system.

00:36:18 --> 00:36:23
>> And what is your mental model on on

00:36:20 --> 00:36:24
coding specifically? Will there be like

00:36:22 --> 00:36:27
fewer engineers who are just higher

00:36:24 --> 00:36:30
powered or sort of whether fewer junior

00:36:26 --> 00:36:32
engineers? How should we think about

00:36:29 --> 00:36:33
>> I think the best way to think about this

00:36:31 --> 00:36:37
simply that we're going to have more

00:36:32 --> 00:36:40
developers. I I think it's very unlikely

00:36:36 --> 00:36:42
that like we're going to shrink

00:36:39 --> 00:36:44
development teams because we have

00:36:41 --> 00:36:46
amazing new tools. Like that's just kind

00:36:43 --> 00:36:47
of not how these markets have worked in

00:36:45 --> 00:36:48
the past. I think exactly the opposite

00:36:46 --> 00:36:50
is going to happen is like we're going

00:36:47 --> 00:36:51
to be creating so much great software

00:36:49 --> 00:36:53
and it's going to be so accessible to so

00:36:50 --> 00:36:54
many people who may work at a big

00:36:52 --> 00:36:55
company or may just be sort of hacking

00:36:53 --> 00:36:58
on the weekend. You can't

00:36:54 --> 00:37:01
anthropomorphize these models, right? A

00:36:57 --> 00:37:02
model is a file on a hard drive in a

00:37:00 --> 00:37:04
computer somewhere. And when you run a

00:37:01 --> 00:37:06
Python script, you can transform one

00:37:04 --> 00:37:09
piece of data into another piece of data

00:37:05 --> 00:37:14
like that. That's what this is. And

00:37:08 --> 00:37:15
programmers um you know

00:37:13 --> 00:37:17
programming is a fundamentally creative

00:37:14 --> 00:37:19
job right you are literally creating

00:37:16 --> 00:37:20
things in the most strict sense of the

00:37:18 --> 00:37:22
word which is you're creating software

00:37:19 --> 00:37:24
it doesn't exist before and that's

00:37:21 --> 00:37:27
omething only a person can actually do

00:37:23 --> 00:37:28
at some level of abstraction. So I I I

00:37:26 --> 00:37:31
personally think this is a huge boon for

00:37:27 --> 00:37:32
programmers and you have to change

00:37:30 --> 00:37:34
the way that you're working and it's

00:37:31 --> 00:37:36
like a huge productivity boost and and I

00:37:33 --> 00:37:38
think that's like more it creates more

00:37:35 --> 00:37:41
not less.

00:37:37 --> 00:37:43
>> I cannot agree more. Uh I feel like for

00:37:40 --> 00:37:44
many of the developers and programmers I

00:37:42 --> 00:37:46
talked to today they're like going to

00:37:43 --> 00:37:48
Disneyland uh just because how many

00:37:45 --> 00:37:50
great tools there are to help them move

00:37:47 --> 00:37:53
faster like you know build things they

00:37:49 --> 00:37:55
have always wanted to to on as both side

00:37:52 --> 00:37:57
projects and also their main job. Um I I

00:37:54 --> 00:37:59
do think it also changes the dynamic of

00:37:56 --> 00:38:01
like how people are picking up new

00:37:58 --> 00:38:05
languages, picking up new frameworks. It

00:38:00 --> 00:38:08
is again sort of a next uh level of

00:38:04 --> 00:38:11
iteration speed given what we're seeing

00:38:07 --> 00:38:13
with AI agents and also AI coding tools.

00:38:10 --> 00:38:14
Here's another I think useful mental

00:38:12 --> 00:38:16
model on this stuff. Like I think it's

00:38:13 --> 00:38:18
worth asking the question why do people

00:38:15 --> 00:38:21
buy software? Like why does someone buy

00:38:17 --> 00:38:23
some random SAS tool? Is it because it's

00:38:20 --> 00:38:25
o hard to build it? No. I mean, like

00:38:22 --> 00:38:26
most SAS tools are like CRUD. Like

00:38:24 --> 00:38:28
they're just these basic kind of

00:38:26 --> 00:38:31
readwrite databases. They're all kind of

00:38:27 --> 00:38:35
the same. So So why why do people buy

00:38:30 --> 00:38:37
them? And and and Aaron Levy uh who's

00:38:34 --> 00:38:38
the CEO of Box I think said this so

00:38:36 --> 00:38:40
beautifully.

00:38:37 --> 00:38:42
The reason people buy software is cuz

00:38:39 --> 00:38:44
somebody else made the decisions of what

00:38:41 --> 00:38:45
he workflow should be and what the

00:38:43 --> 00:38:47
operational logic should be and what

00:38:44 --> 00:38:50
data is important, how you use that data

00:38:46 --> 00:38:53
is important. like creating a product is

00:38:49 --> 00:38:56
a lot of understanding what is being

00:38:52 --> 00:38:58
used and guiding the user along that

00:38:55 --> 00:39:00
direction. So if not I just give you a

00:38:57 --> 00:39:01
compiler like you do whatever you want

00:38:59 --> 00:39:03
and I'll just give you a database and

00:39:00 --> 00:39:04
you do whatever you want. I mean there's

00:39:02 --> 00:39:07
a reason that we have a proliferation of

00:39:03 --> 00:39:10
vertical SAS and it's it is this kind of

00:39:06 --> 00:39:13
this articulation or you know this this

00:39:09 --> 00:39:15
transfer of domain understanding and

00:39:12 --> 00:39:17
that just doesn't go away independent of

00:39:14 --> 00:39:20
how you create the software and so we

00:39:16 --> 00:39:23
will still need to design products based

00:39:19 --> 00:39:24
on whatever problem is being solved

00:39:22 --> 00:39:26
guide people so that they're the most

00:39:23 --> 00:39:28
effective with them and they can

00:39:25 --> 00:39:31
understand the best and and and and you

00:39:27 --> 00:39:32
know we did this with assembly before

00:39:30 --> 00:39:34
and and we did it with high level

00:39:32 --> 00:39:35
anguages and then we did it with highle

00:39:33 --> 00:39:37
frameworks and then we're going to do it

00:39:34 --> 00:39:40
with AI but like the fundamental process

00:39:36 --> 00:39:41
of that articulation will not go away

00:39:39 --> 00:39:43
>> and it's totally orthogonal to creating

00:39:40 --> 00:39:45
the software itself right it turns out

00:39:42 --> 00:39:47
o be a much harder problem to go out

00:39:44 --> 00:39:48
and collect requirements from an unknown

00:39:46 --> 00:39:49
set of users with an unknown set of

00:39:47 --> 00:39:51
needs and like figuring out what to

00:39:48 --> 00:39:52
build that turns out to be much harder

00:39:50 --> 00:39:53
than actually building

00:39:51 --> 00:39:54
>> so what what do you what do you think is

00:39:52 --> 00:39:57
the the the average number of lines

00:39:54 --> 00:40:00
changed in a PR in the industry

00:39:56 --> 00:40:02
>> two yeah

00:39:59 --> 00:40:04
but it shows you to the Like it

00:40:01 --> 00:40:05
literally is understanding the need from

00:40:03 --> 00:40:08
the business and the need from the user

00:40:04 --> 00:40:09
and making some minor tweak. That is the

00:40:07 --> 00:40:11
long tail that goes into software. And

00:40:08 --> 00:40:12
by the way, it turns out it's two. Oh,

00:40:10 --> 00:40:15
really? Well, I think it's the median.

00:40:11 --> 00:40:17
It's the median is too. Yeah. So, I've

00:40:14 --> 00:40:19
written a lot of uh you know like GPRs

00:40:16 --> 00:40:21
in my life. Um just for the record, by

00:40:18 --> 00:40:22
the way, Martin said CRUD. CRUD is a

00:40:20 --> 00:40:24
technical term, right? Create, read,

00:40:21 --> 00:40:25
update, delete. We actually think

00:40:23 --> 00:40:26
publications are great, right? We don't

00:40:24 --> 00:40:29
hink they're crudy. They just like

00:40:26 --> 00:40:31
literally Yeah, CRUD CRUD is just, you

00:40:28 --> 00:40:34
know, footnote.

00:40:30 --> 00:40:35
Good, good to know. The um Jennifer, you

00:40:33 --> 00:40:36
were mentioning earlier how we, you

00:40:34 --> 00:40:39
know, two years ago we were having this

00:40:36 --> 00:40:41
debate on generalization and we we've

00:40:38 --> 00:40:43
learned from it. What what are the

00:40:40 --> 00:40:45
debates we're having now internally or

00:40:42 --> 00:40:46
with with your peers or what are the

00:40:44 --> 00:40:49
main questions that that we're asking

00:40:46 --> 00:40:50
that we we can't wait to to see how

00:40:48 --> 00:40:51
they're going to reveal themselves in

00:40:49 --> 00:40:53
the next few months or next year that

00:40:50 --> 00:40:53
are going to, you know, impact our

00:40:52 --> 00:40:55
business?

00:40:52 --> 00:40:58
>> Oh gosh, every every week is different.

00:40:54 --> 00:41:00
Uh what are some recent ones? uh

00:40:57 --> 00:41:02
definitely like how how realist how

00:40:59 --> 00:41:06
realistic uh are agents today like

00:41:01 --> 00:41:07
really producing production uh level uh

00:41:05 --> 00:41:09
software um I mean that's more on the

00:41:06 --> 00:41:12
coding agent side but also in general

00:41:08 --> 00:41:15
ike the agent um evolution where where

00:41:11 --> 00:41:17
are we in going from demoware to you

00:41:14 --> 00:41:19
know producing real value tangible value

00:41:16 --> 00:41:21
>> synthetic data is one we talk about a

00:41:18 --> 00:41:22
lot we've been talking about for 10

00:41:20 --> 00:41:24
years

00:41:21 --> 00:41:25
>> yeah I mean this is what's so great

00:41:23 --> 00:41:28
about infra you can have the same

00:41:24 --> 00:41:30
debates for 10 So they never quite go

00:41:27 --> 00:41:31
away change the background. It's like

00:41:29 --> 00:41:32
verything else

00:41:30 --> 00:41:34
>> consistency versus availability.

00:41:31 --> 00:41:36
Literally every system has this

00:41:33 --> 00:41:38
trade-off. Um

00:41:35 --> 00:41:40
>> u so so the syn synthetic data thing

00:41:37 --> 00:41:41
right is is like can like it's almost an

00:41:39 --> 00:41:43
information theory question. It's like

00:41:40 --> 00:41:45
can you make models meaningfully better

00:41:42 --> 00:41:47
without introducing new information to

00:41:44 --> 00:41:48
the system. And I think it's now pretty

00:41:46 --> 00:41:50
clear you can do a you can do a little

00:41:47 --> 00:41:52
bit but but the question is like does

00:41:49 --> 00:41:54
this lead to sort of like a

00:41:51 --> 00:41:55
self-improving utopia of models or or

00:41:53 --> 00:41:57
not? And and I think we have some pretty

00:41:54 --> 00:42:00
strong opinions on the not side of that.

00:41:56 --> 00:42:01
Um generalization Martin mentioned is is

00:41:59 --> 00:42:03
a pretty interesting one. Like if you

00:42:00 --> 00:42:04
train a model to be really good at math,

00:42:02 --> 00:42:05
does that mean it's going to be really

00:42:03 --> 00:42:07
good at other things or is it just like

00:42:04 --> 00:42:09
really good at math which I get excited

00:42:06 --> 00:42:11
about? Not not everybody gets excited

00:42:08 --> 00:42:12
about this. I you know another one that

00:42:10 --> 00:42:15
we talk a lot about is like like what

00:42:12 --> 00:42:18
hese things are actually good for. Um

00:42:14 --> 00:42:21
just because the path we came from used

00:42:17 --> 00:42:22
a lot of AI. Pregen AI used a lot of AI.

00:42:20 --> 00:42:24
So there's a lot of AI shaped holes in

00:42:21 --> 00:42:26
the enterprise like chat bots and this

00:42:23 --> 00:42:28
and that and like that's very much on

00:42:25 --> 00:42:30
the brain and it seems to sometimes

00:42:27 --> 00:42:32
confuse the discussions from the new use

00:42:29 --> 00:42:33
cases we're seeing like if you look at

00:42:31 --> 00:42:35
he most common use cases of something

00:42:32 --> 00:42:37
like chat GPT I think the top one is

00:42:34 --> 00:42:40
like companionship and therapy and then

00:42:36 --> 00:42:42
it's like managing my schedule and it's

00:42:39 --> 00:42:44
like it's like the top of the pyramid of

00:42:41 --> 00:42:46
need stuff and then number five is

00:42:43 --> 00:42:48
professional development not like low

00:42:45 --> 00:42:50
code development or whatever and so I

00:42:47 --> 00:42:52
think what is happening is we have this

00:42:49 --> 00:42:54
idea of what we thought AI was going to

00:42:51 --> 00:42:56
do and like you know just kind of the

00:42:53 --> 00:42:58
stilted attempts previously. I like

00:42:56 --> 00:43:02
Jennifer actually you know ran product

00:42:57 --> 00:43:03
for um you know a chat company prior and

00:43:01 --> 00:43:05
then what it really is good for and

00:43:02 --> 00:43:07
clearly there's some overlap and

00:43:04 --> 00:43:09
convergence but it's not nearly as big

00:43:06 --> 00:43:10
as as people say. And so we do spend a

00:43:08 --> 00:43:12
lot of time just trying to be very

00:43:09 --> 00:43:13
honest with ourselves or like what is

00:43:11 --> 00:43:15
the new behavior being created? Where is

00:43:12 --> 00:43:16
the stuff getting used? Like what is it

00:43:14 --> 00:43:19
just been trying to cram into places

00:43:15 --> 00:43:22
it's not actually quite good at to that

00:43:18 --> 00:43:24
point. How do we think about agents

00:43:21 --> 00:43:25
right now or where where you know what

00:43:23 --> 00:43:27
are they good for or going to be good

00:43:24 --> 00:43:28
for soon enough? What is sort of the

00:43:26 --> 00:43:30
this the state of them? How do we think

00:43:28 --> 00:43:32
about the broader conversation?

00:43:29 --> 00:43:33
>> I mean coding agents are awesome. Like

00:43:31 --> 00:43:35
they're amazing.

00:43:32 --> 00:43:37
>> It's it's really amazing. So I have a

00:43:34 --> 00:43:39
very simple way to think about this. Um

00:43:36 --> 00:43:40
and I'm like the anti- agent guy by the

00:43:38 --> 00:43:41
way. I think it's kind of a marketing

00:43:39 --> 00:43:43
thing. This is the other thing about

00:43:40 --> 00:43:44
infra people. We like are like allergic

00:43:42 --> 00:43:46
to marketing which which is not always a

00:43:43 --> 00:43:47
good thing. Which is a good thing you're

00:43:45 --> 00:43:48
here.

00:43:46 --> 00:43:50
>> Ask what do you mean?

00:43:47 --> 00:43:52
>> Yeah. Yeah. Exactly. Yeah. Can you

00:43:49 --> 00:43:54
explain um if you take the simplest

00:43:51 --> 00:43:58
definition that is basically an agent is

00:43:53 --> 00:44:01
a is an LLM running in a loop. Um a very

00:43:57 --> 00:44:04
simple way to think about this is errors

00:44:00 --> 00:44:05
propagate throughout the loop, right? So

00:44:03 --> 00:44:07
if you have a small error, it gets worse

00:44:04 --> 00:44:10
and worse and and this is why a lot of

00:44:06 --> 00:44:12
agents doing say general web browsing

00:44:09 --> 00:44:13
don't don't perform very well yet. On

00:44:11 --> 00:44:15
the flip side, if you have a way to

00:44:12 --> 00:44:16
correct those errors in the loop, which

00:44:14 --> 00:44:18
is one thing that you have in code,

00:44:15 --> 00:44:19
right? You can lint, you can interpret,

00:44:17 --> 00:44:21
you can even try to compile and things

00:44:18 --> 00:44:23
like that, um you actually do see good

00:44:20 --> 00:44:24
performance over time. So that that's a

00:44:22 --> 00:44:25
very simplistic and and maybe not quite

00:44:23 --> 00:44:26
the right way to look at it. But like if

00:44:24 --> 00:44:28
you can do this kind of error

00:44:25 --> 00:44:29
correction, I think you're seeing a lot

00:44:27 --> 00:44:30
of sort of improvement from this this

00:44:28 --> 00:44:32
iterative approach.

00:44:29 --> 00:44:35
>> I It's incredible. I'm actually on the

00:44:31 --> 00:44:37
like the the GitHub mailing list of a

00:44:34 --> 00:44:39
lot of the companies that I work with. I

00:44:36 --> 00:44:42
just just mostly for for interest and I

00:44:38 --> 00:44:46
have even in the last week seen a bunch

00:44:41 --> 00:44:48
of kind of cursor like agent commits and

00:44:45 --> 00:44:50
like even even in the last 24 hours the

00:44:47 --> 00:44:54
Slack integration seeing it come from

00:44:49 --> 00:44:57
Slack and so I I do think for kind of

00:44:53 --> 00:44:59
bite-size well articulate

00:44:56 --> 00:45:00
tasks you can articulate very well we're

00:44:58 --> 00:45:03
starting to see them really work. So in

00:44:59 --> 00:45:06
in the coding space they they I would

00:45:02 --> 00:45:09
say I'm a convert. Um, but to Matt's

00:45:05 --> 00:45:10
point, like the, you know, go, you know,

00:45:08 --> 00:45:14
wander out in the woods and bring back a

00:45:09 --> 00:45:14
bear. I think we're

00:45:13 --> 00:45:19
a lot of run into that construction.

00:45:17 --> 00:45:21
>> Will we see more vertical integration or

00:45:18 --> 00:45:23
more horizontal specialization?

00:45:20 --> 00:45:25
>> You know, historically, we've seen both.

00:45:22 --> 00:45:27
And what's interesting is we're already

00:45:24 --> 00:45:29
seeing both now, right? Like Apple, of

00:45:26 --> 00:45:30
course, has just been historically

00:45:28 --> 00:45:33
vertically integrated.

00:45:30 --> 00:45:36
>> Uh, Microsoft and Intel historically

00:45:32 --> 00:45:38
horizontally. Uh and often companies

00:45:35 --> 00:45:41
will start horizontal and then go

00:45:37 --> 00:45:43
vertical. So like um you know Google was

00:45:40 --> 00:45:44
horizontal. I was built on top of normal

00:45:42 --> 00:45:47
servers but then they built their

00:45:43 --> 00:45:49
servers and then know they you know they

00:45:46 --> 00:45:50
built their own chips. They built their

00:45:48 --> 00:45:52
own networking gear. And so I I think

00:45:49 --> 00:45:54
you always get a mix of the two. What's

00:45:52 --> 00:45:55
interesting about now is we're actually

00:45:53 --> 00:45:57
really seeing both. I mean I would say

00:45:54 --> 00:45:59
that OpenAI is very much a vertically

00:45:56 --> 00:46:00
integrated company now with chat GPT

00:45:58 --> 00:46:02
driving a lot of it. I would say

00:45:59 --> 00:46:04
anthropic a lot of the usage really is

00:46:01 --> 00:46:05
more horizontal and they're doing a

00:46:03 --> 00:46:07
great job of that. I think we're seeing

00:46:04 --> 00:46:08
this on the model layer too. I mean a

00:46:06 --> 00:46:09
very interesting discussion we haven't

00:46:07 --> 00:46:12
had but it's a very interesting one is

00:46:08 --> 00:46:13
like open source quote unquote really

00:46:11 --> 00:46:16
seems to work with these models just

00:46:12 --> 00:46:17
because you can't as a user rec you know

00:46:15 --> 00:46:20
recreate it. So like if you look at like

00:46:16 --> 00:46:21
BFL they've done a great job building

00:46:19 --> 00:46:23
kind of like a horizontal layer for

00:46:20 --> 00:46:25
these models. Um but then you've got

00:46:22 --> 00:46:26
companies like Ideogram which have built

00:46:24 --> 00:46:29
a great kind of vertical experience as

00:46:25 --> 00:46:31
well. So I would say for AI we've got

00:46:28 --> 00:46:33
already this early on great examples of

00:46:30 --> 00:46:34
both. Uh and I I don't see any reason

00:46:32 --> 00:46:36
that that will change.

00:46:33 --> 00:46:39
>> I think from the business front it just

00:46:35 --> 00:46:40
poses um new interesting questions and

00:46:38 --> 00:46:42
challenges too of how do you capture the

00:46:40 --> 00:46:44
value of of course horizontally you can

00:46:41 --> 00:46:46
capture the value through being able to

00:46:43 --> 00:46:47
address every single use case by

00:46:45 --> 00:46:49
providing that to developers or

00:46:46 --> 00:46:50
enterprises but if you work integrate

00:46:48 --> 00:46:52
you kind of have to pick the lane of

00:46:49 --> 00:46:54
like do I want to focus on image models?

00:46:51 --> 00:46:56
Do I want to focus on you know graphic

00:46:53 --> 00:46:58
designers? I want to focus on you know

00:46:55 --> 00:46:59
people who are generating photographies.

00:46:57 --> 00:47:02
Um you kind of have to understand the

00:46:58 --> 00:47:04
market and the user uh personas use

00:47:01 --> 00:47:06
cases pretty well to capture the maximum

00:47:03 --> 00:47:08
value where you probably can you know

00:47:05 --> 00:47:11
take a easier path to just provide API

00:47:08 --> 00:47:29
so everybody can use it.

00:47:10 --> 00:47:29
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
