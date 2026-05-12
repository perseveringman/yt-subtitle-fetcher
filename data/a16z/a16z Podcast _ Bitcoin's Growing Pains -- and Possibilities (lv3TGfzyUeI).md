---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "lv3TGfzyUeI"
title: "a16z Podcast | Bitcoin's Growing Pains -- and Possibilities"
video_url: "https://www.youtube.com/watch?v=lv3TGfzyUeI"
thumbnail_url: "https://i.ytimg.com/vi/lv3TGfzyUeI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=lv3TGfzyUeI"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:29:40.000Z"
upload_date: "2019-01-02"
duration_seconds: 1249
duration_human: "20:49"
view_count: 24
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:39:33.568Z"
---

# a16z Podcast | Bitcoin's Growing Pains -- and Possibilities

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=lv3TGfzyUeI
- video_id: lv3TGfzyUeI
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:29:40.000Z
- upload_date: 2019-01-02
- duration: 20:49
- view_count: 24
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Bitcoin has had more than its share of drama. There is, of course, the mystery surrounding its anonymous founder (or perhaps, founders) Satoshi Nakamoto. More recently, there's been a battle over whether the size of blocks need to grow to account for more capacity -- especially since there isn’t much time left to make changes before blockchain capacity runs out, says core bitcoin developer Mike Hearn.

Hearn joins a16z’s Chris Dixon on this segment of the a16z Podcast to discuss the current state of bitcoin development; Hearn’s own Lighthouse creation, which is a bitcoin-based crowdfunding app; and what it will take to move the bitcoin protocol into the mainstream.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
welcome to the a 16z podcast I'm Michael

00:00:02 --> 00:00:10
Copeland for an arcane protocol bitcoin

00:00:06 --> 00:00:11
has more than its share of drama there

00:00:09 --> 00:00:13
is of course the mystery surrounding

00:00:10 --> 00:00:17
it's anonymous founder or founders

00:00:12 --> 00:00:19
Satoshi more recently there's the battle

00:00:16 --> 00:00:21
over whether the size of Bitcoin blocks

00:00:18 --> 00:00:24
need to grow to account for more

00:00:20 --> 00:00:27
capacity or if it's just fine the way

00:00:23 --> 00:00:29
Satoshi left it the drama creeps in

00:00:26 --> 00:00:31
because there isn't much time left to

00:00:28 --> 00:00:34
make changes before Bitcoin blockchain

00:00:30 --> 00:00:37
capacity runs out says core Bitcoin

00:00:33 --> 00:00:40
developer and security expert Mike Hearn

00:00:36 --> 00:00:43
and running out of blockchain capacity

00:00:39 --> 00:00:45
could spell disaster he says worst

00:00:42 --> 00:00:47
hings break quite badly and but even

00:00:44 --> 00:00:49
the best even if things don't break some

00:00:46 --> 00:00:51
users won't be able to use Bitcoin right

00:00:48 --> 00:00:52
hey will be kicked out of the system

00:00:50 --> 00:00:55
effectively there won't be enough

00:00:51 --> 00:00:58
capacity to handle them Hearn joins a 16

00:00:54 --> 00:01:00
Z's Chris Dixon on this segment of the

00:00:57 --> 00:01:03
pod to discuss the current state of the

00:00:59 --> 00:01:05
Bitcoin project Hearns own lighthouse

00:01:02 --> 00:01:07
creation which is a Bitcoin based

00:01:04 --> 00:01:10
crowdfunding app and what it will take

00:01:06 --> 00:01:12
to move the Bitcoin protocol into the

00:01:09 --> 00:01:14
mainstream if you're in the Western you

00:01:11 --> 00:01:16
have access to you know credit card

00:01:13 --> 00:01:17
payments and so on it's not always clear

00:01:15 --> 00:01:18
why you would want to use Bitcoin but

00:01:16 --> 00:01:20
hat's not because there aren't good

00:01:17 --> 00:01:21
reasons that's because we're not doing a

00:01:19 --> 00:01:25
good job of like telling people about

00:01:20 --> 00:01:27
hem Chris Dixon kicks it off Mike

00:01:24 --> 00:01:28
thanks for being here thanks it's great

00:01:26 --> 00:01:29
o be here so let's start off talking

00:01:27 --> 00:01:30
about the state of Bitcoin there's a lot

00:01:28 --> 00:01:33
of debate going on right now about the

00:01:29 --> 00:01:35
block size issue I guess could you first

00:01:32 --> 00:01:37
kind of explain that and then and then

00:01:34 --> 00:01:39
talk about your views on it yeah so a

00:01:36 --> 00:01:42
long time ago when Satoshi was still in

00:01:38 --> 00:01:44
charge of the Bitcoin project he added a

00:01:41 --> 00:01:47
quick hack to the code basically kind of

00:01:43 --> 00:01:49
a clutch which limited bitcoins capacity

00:01:46 --> 00:01:52
to process transactions and at the time

00:01:48 --> 00:01:56
that he put this limit in Bitcoin was

00:01:51 --> 00:01:58
nowhere near even close to this limit he

00:01:55 --> 00:02:00
imposed a maximum one megabyte block

00:01:57 --> 00:02:01
size and as one block every ten minutes

00:01:59 --> 00:02:04
on average that's you know you can

00:02:00 --> 00:02:05
calculate a maximum transaction rate

00:02:03 --> 00:02:08
from that and at the time you put it in

00:02:04 --> 00:02:09
we were around you know less than 10

00:02:07 --> 00:02:12
kilobytes per block so a long way from

00:02:08 --> 00:02:14
that and we're now at more like half of

00:02:11 --> 00:02:16
that block size and it

00:02:13 --> 00:02:18
you know as traffic is growing it looks

00:02:15 --> 00:02:22
like we might start hitting that limits

00:02:17 --> 00:02:25
ometime next year so Gavin has proposed

00:02:21 --> 00:02:28
that Gavin is the is the main Bitcoin

00:02:24 --> 00:02:32
maintainer he was actually so when

00:02:27 --> 00:02:36
Satoshi left he nominated Gavin Anderson

00:02:31 --> 00:02:38
as the as his successor and Gavin was

00:02:35 --> 00:02:40
maintained a Bitcoin core for a while

00:02:37 --> 00:02:43
and then he delegated that again to

00:02:39 --> 00:02:45
vladimir van der Laan so Gavin has

00:02:42 --> 00:02:47
uggested increasing the block size and

00:02:44 --> 00:02:48
I've been suggesting this for some time

00:02:46 --> 00:02:50
as well this is a debate that's been

00:02:47 --> 00:02:52
going on for several years and it's

00:02:49 --> 00:02:55
never triggered any action but now we're

00:02:51 --> 00:02:57
sort of out of time so it's now moved

00:02:54 --> 00:02:59
into a new phase of this debate and

00:02:56 --> 00:03:02
that's that's what this sort of current

00:02:58 --> 00:03:04
drama is about it's about whether the

00:03:01 --> 00:03:06
limit should be raised and by how much

00:03:03 --> 00:03:07
can you can you give like a quick

00:03:05 --> 00:03:11
summary of the two sides and then why

00:03:06 --> 00:03:12
ou support increasing it well Gavin has

00:03:10 --> 00:03:15
been writing about this on this blog for

00:03:11 --> 00:03:16
some time the the argument for

00:03:14 --> 00:03:19
increasing it is fairly straightforward

00:03:15 --> 00:03:20
it's that if we don't Bitcoin will run

00:03:18 --> 00:03:22
out of capacity and running out of

00:03:19 --> 00:03:26
capacity is bad news right that's that

00:03:21 --> 00:03:27
means worst things break quite badly and

00:03:25 --> 00:03:30
but even the best even if things don't

00:03:26 --> 00:03:32
break some users won't be able to use

00:03:29 --> 00:03:33
Bitcoin right they will be kicked out of

00:03:31 --> 00:03:36
the system effectively there won't be

00:03:32 --> 00:03:37
nough capacity to handle them and that

00:03:35 --> 00:03:39
would be bad and the simplest way to

00:03:36 --> 00:03:42
increase capacity is to increase this

00:03:38 --> 00:03:44
limit and then the arguments against

00:03:41 --> 00:03:46
some work varied and I find them to be a

00:03:43 --> 00:03:48
little bit vague but they're they

00:03:45 --> 00:03:51
basically boil down to concern that if

00:03:47 --> 00:03:53
Bitcoin grows then you know if the

00:03:50 --> 00:03:55
hardware requirements were running a

00:03:52 --> 00:03:58
Bitcoin node go up then it's sort of in

00:03:54 --> 00:04:00
some sense less decentralized so those

00:03:57 --> 00:04:03
people would would rather have Bitcoin

00:03:59 --> 00:04:06
be decentralized and not work then then

00:04:02 --> 00:04:07
working and slightly more so yeah I mean

00:04:05 --> 00:04:09
that's that's how I would characterize

00:04:06 --> 00:04:12
it some of them would characterize this

00:04:08 --> 00:04:14
aying well people will invent other

00:04:11 --> 00:04:17
ways of moving money around that don't

00:04:13 --> 00:04:19
involve making Bitcoin transactions then

00:04:16 --> 00:04:21
they believe still be off chain as they

00:04:18 --> 00:04:24
say like they'll be done through other

00:04:20 --> 00:04:25
services that that don't record every

00:04:23 --> 00:04:28
transaction on the blockchain

00:04:24 --> 00:04:29
yes services are the networks of a

00:04:27 --> 00:04:32
systems basically some of these some of

00:04:28 --> 00:04:34
the things they propose would integrate

00:04:31 --> 00:04:36
with the blockchain in some sense but

00:04:33 --> 00:04:38
yeah it would it would mean a sort of

00:04:35 --> 00:04:41
different sort of infrastructure for

00:04:37 --> 00:04:43
outing of payments okay and so now

00:04:40 --> 00:04:45
switching over to Bitcoin as a you know

00:04:42 --> 00:04:47
just one of the the broader applications

00:04:44 --> 00:04:49
what's your take on sort of what's going

00:04:46 --> 00:04:51
on there and I know and you're the

00:04:48 --> 00:04:52
creator of what I think is a very

00:04:50 --> 00:04:54
interesting project called lighthouse

00:04:51 --> 00:04:56
and we could talk about that but I'm

00:04:53 --> 00:04:57
just curious sort of broadly what what's

00:04:55 --> 00:05:00
your take on kind of Bitcoin adoption

00:04:56 --> 00:05:02
and applications Bitcoin adoption is

00:04:59 --> 00:05:04
going okay if you plot the graphs of

00:05:01 --> 00:05:07
transaction traffic it is growing and it

00:05:03 --> 00:05:09
settled into a fairly standard seasonal

00:05:06 --> 00:05:09
growth pattern this is pretty standard

00:05:08 --> 00:05:11
for

00:05:08 --> 00:05:14
online services I've seen this sort of

00:05:10 --> 00:05:16
pattern many times in the past so that's

00:05:13 --> 00:05:20
quite reassuring that we're seeing this

00:05:15 --> 00:05:22
at the same time I would like to see it

00:05:19 --> 00:05:24
grow even faster you know Bitcoin

00:05:21 --> 00:05:27
doesn't have unlimited one-way in the

00:05:23 --> 00:05:29
speech so I'm quite interested in

00:05:26 --> 00:05:31
finding ideas that could help increase

00:05:28 --> 00:05:34
usage and really find some sort of

00:05:30 --> 00:05:35
killer app or you know kill a reason to

00:05:33 --> 00:05:38
be using Bitcoin in people's everyday

00:05:34 --> 00:05:39
lives yeah and so and so and you created

00:05:37 --> 00:05:40
this new application called lighthouse

00:05:38 --> 00:05:42
which i think is one of the most

00:05:39 --> 00:05:45
interesting Bitcoin apps I've ever seen

00:05:41 --> 00:05:48
yeah can you describe what that is yeah

00:05:44 --> 00:05:50
so lighthouse is a decentralized Bitcoin

00:05:47 --> 00:05:53
based crowdfunding application like

00:05:49 --> 00:05:55
Kickstarter effectively or IndieGoGo or

00:05:52 --> 00:05:57
similar sites like this the idea is you

00:05:54 --> 00:06:00
can create a project that has a goal

00:05:56 --> 00:06:01
target amount of money that needs to be

00:05:59 --> 00:06:03
raised for the project to go ahead and

00:06:00 --> 00:06:05
then people can pledge my bitcoins

00:06:02 --> 00:06:07
towards that goal and unlike other

00:06:04 --> 00:06:09
attempts at this where you know you

00:06:07 --> 00:06:11
actually have to deposit your Bitcoin

00:06:08 --> 00:06:13
with a trusted third party lighthouse is

00:06:10 --> 00:06:15
a completely peer-to-peer and

00:06:12 --> 00:06:19
ecentralized approach so you can

00:06:14 --> 00:06:20
actually pledge money to a project in

00:06:18 --> 00:06:22
such a way that it stays under your

00:06:19 --> 00:06:23
control until the moment that the

00:06:21 --> 00:06:26
project's is raised to full amount and

00:06:22 --> 00:06:27
at that point it moves into the wallets

00:06:25 --> 00:06:29
of the project creator but you don't

00:06:26 --> 00:06:31
have to you know that the money is never

00:06:28 --> 00:06:33
in some kind of strange state where it's

00:06:30 --> 00:06:35
controlled by someone else but

00:06:32 --> 00:06:37
heoretically still owned by you and how

00:06:34 --> 00:06:39
does that work technologically it uses

00:06:36 --> 00:06:41
features in the Bitcoin protocol that

00:06:38 --> 00:06:43
Satoshi put there right from day one

00:06:40 --> 00:06:45
we don't know exactly how he intended

00:06:42 --> 00:06:47
them to be used because he didn't talk

00:06:44 --> 00:06:50
about them much but they can be used for

00:06:46 --> 00:06:52
crowdfunding one of the features that

00:06:49 --> 00:06:54
lighthouse uses is a way of signing

00:06:51 --> 00:06:55
transactions so they can be merged

00:06:53 --> 00:06:58
together so you can actually create a

00:06:54 --> 00:07:00
kind of partial Bitcoin payments that

00:06:57 --> 00:07:01
won't be accepted by the system until

00:06:59 --> 00:07:05
it's merged with other similar payments

00:07:00 --> 00:07:06
to create a final valid contract it's

00:07:04 --> 00:07:09
what we call it I mean this is one thing

00:07:05 --> 00:07:10
people I think an overlooked fact of

00:07:08 --> 00:07:12
Bitcoin is that there's a scripting

00:07:09 --> 00:07:14
language involved or embedded rather

00:07:11 --> 00:07:17
inside of the protocol which you know

00:07:13 --> 00:07:20
hich you are one of them or one of the

00:07:16 --> 00:07:21
xperts on yeah for a long time you know

00:07:19 --> 00:07:24
the for a long time it wasn't very well

00:07:20 --> 00:07:25
known because satoshis whitepaper didn't

00:07:23 --> 00:07:27
mention it and he didn't talk about it

00:07:24 --> 00:07:29
and you know his mailing list post

00:07:26 --> 00:07:31
either it's actually quite astonishing

00:07:28 --> 00:07:33
that he built such a complex system and

00:07:30 --> 00:07:35
then just left it there for people to

00:07:32 --> 00:07:36
find you know it's it's one of them one

00:07:34 --> 00:07:38
of the most staggering cases of missing

00:07:35 --> 00:07:39
documentation I've every one so you

00:07:37 --> 00:07:40
could only you could only find a

00:07:38 --> 00:07:43
scripting language through the code

00:07:39 --> 00:07:44
itself yeah yeah everything that's known

00:07:42 --> 00:07:46
about scripting languages actually with

00:07:43 --> 00:07:47
is engineered out of the code I mean

00:07:45 --> 00:07:49
there was all this talk about things

00:07:46 --> 00:07:52
like aetherium which was a Bitcoin with

00:07:48 --> 00:07:53
scripting yet Bitcoin itself had this

00:07:51 --> 00:07:57
already at least at least some version

00:07:52 --> 00:08:00
of it you know had this since day one

00:07:56 --> 00:08:02
yeah and I think things like aetherium

00:07:59 --> 00:08:03
came out of a desire to have a more

00:08:01 --> 00:08:05
powerful scripting language actually

00:08:02 --> 00:08:07
although it's a bit strange because

00:08:04 --> 00:08:10
we've never really fully used the

00:08:06 --> 00:08:12
capability of even coins fairly limited

00:08:09 --> 00:08:14
language yeah you'd think the step one

00:08:11 --> 00:08:16
would be to use the existing let's run

00:08:13 --> 00:08:18
into limits and then expand as necessary

00:08:15 --> 00:08:20
with the obvious caveat being that as

00:08:17 --> 00:08:21
you expand it you might run into

00:08:19 --> 00:08:23
security issues and things right I mean

00:08:20 --> 00:08:26
if you have it if a turing-complete

00:08:22 --> 00:08:29
scripting language presumably there's a

00:08:25 --> 00:08:31
ton of vulnerabilities as well right I

00:08:28 --> 00:08:33
mean I think one reason that the Bitcoin

00:08:30 --> 00:08:34
scripting language hasn't been expanded

00:08:32 --> 00:08:36
is that you know we keep finding

00:08:33 --> 00:08:39
interesting ways of abusing the existing

00:08:35 --> 00:08:41
one yeah yeah designing these sorts of

00:08:38 --> 00:08:43
things is something of a new research

00:08:40 --> 00:08:45
area the Bitcoin language is simple but

00:08:42 --> 00:08:46
you know it can still do quite a lot

00:08:44 --> 00:08:49
actually if you create it with it a

00:08:45 --> 00:08:50
lighthouse took you of like I think you

00:08:48 --> 00:08:52
told me like seven months or something

00:08:49 --> 00:08:54
to build like yeah it feels like there's

00:08:51 --> 00:08:55
infrastructure

00:08:53 --> 00:08:58
perhaps there's opportunity to build

00:08:54 --> 00:08:59
infrastructure on top of the Bitcoin

00:08:57 --> 00:09:01
scripting language to make other

00:08:58 --> 00:09:05
applications like lighthouse easier to

00:09:00 --> 00:09:06
build yeah lighthouses used the

00:09:04 --> 00:09:09
scripting system is actually pretty

00:09:05 --> 00:09:11
basic so it's the complexity there

00:09:08 --> 00:09:14
wasn't really imposed by script or its

00:09:10 --> 00:09:17
limitations the the complexity was

00:09:13 --> 00:09:19
primarily around you know designing the

00:09:16 --> 00:09:20
user interface to make it simple so you

00:09:18 --> 00:09:22
don't even though behind the scenes

00:09:19 --> 00:09:24
these signatures and scripts and

00:09:21 --> 00:09:26
transactions flying around you don't

00:09:23 --> 00:09:28
want the users to see that though the

00:09:25 --> 00:09:30
complexity was in things like you know

00:09:27 --> 00:09:32
how do you distribute an app such that

00:09:29 --> 00:09:33
everyone can use it

00:09:31 --> 00:09:35
right but without blowing your

00:09:32 --> 00:09:37
development budget by writing the app

00:09:34 --> 00:09:39
multiple times there were lots of issues

00:09:36 --> 00:09:40
that came up there how do you move the

00:09:38 --> 00:09:43
data around through people's firewalls

00:09:40 --> 00:09:45
not stuff that isn't really specific to

00:09:42 --> 00:09:47
cryptocurrency or Bitcoin but it's just

00:09:44 --> 00:09:51
he plumbing needed to make all this

00:09:46 --> 00:09:52
tuff happen and a lot of this code that

00:09:50 --> 00:09:55
I wrote with lighthouse was intended to

00:09:51 --> 00:09:57
be reusable and so you know it will be

00:09:54 --> 00:09:58
asier next time right if someone wants

00:09:56 --> 00:10:00
to build a lighthouse style app because

00:09:57 --> 00:10:02
they can if they choose to they can

00:09:59 --> 00:10:05
reuse that code and what's the benefit

00:10:01 --> 00:10:06
of distributed kind of crowdfunding as

00:10:04 --> 00:10:08
opposed to a centralized one in your

00:10:05 --> 00:10:09
mind I mean cuz like this the cynics I

00:10:07 --> 00:10:12
don't agree with him but the critics

00:10:08 --> 00:10:15
would say you know a centralized service

00:10:11 --> 00:10:17
works just fine you you know only people

00:10:14 --> 00:10:19
who you know want to get around

00:10:16 --> 00:10:20
regulation or something would want to

00:10:18 --> 00:10:22
use this decentralized service like what

00:10:19 --> 00:10:24
are the benefits in your mind I

00:10:21 --> 00:10:26
think that sort of arguments is quite

00:10:23 --> 00:10:29
common it's an arguments of privilege

00:10:25 --> 00:10:31
right so these services like Kickstarter

00:10:28 --> 00:10:32
IndieGoGo very very often they're

00:10:30 --> 00:10:35
stricted to certain countries for

00:10:31 --> 00:10:36
example like a it's very hard for

00:10:34 --> 00:10:37
someone in the middle of India for

00:10:35 --> 00:10:39
example who maybe doesn't even speak

00:10:36 --> 00:10:40
English to create a project and

00:10:38 --> 00:10:43
successfully run it on one of these

00:10:39 --> 00:10:46
platforms the whole thing is credit card

00:10:42 --> 00:10:48
based the fees can be very high I

00:10:45 --> 00:10:50
usually say the fees for using these

00:10:47 --> 00:10:52
platforms can be around 10% of the money

00:10:49 --> 00:10:54
raised that's not quite fair that

00:10:51 --> 00:10:56
includes banking fees as well as the

00:10:53 --> 00:10:57
fees levied by these companies but it's

00:10:55 --> 00:11:00
all a part of the same infrastructure

00:10:56 --> 00:11:01
and by using Bitcoin you can bypass all

00:10:59 --> 00:11:03
of that right you're left with that most

00:11:00 --> 00:11:05
he exchange fees into your local

00:11:02 --> 00:11:07
currency if you don't have a supply

00:11:04 --> 00:11:09
chain that you can use with a Bitcoin so

00:11:06 --> 00:11:11
there's actually not only huge monetary

00:11:08 --> 00:11:14
savings you can make but it's also you

00:11:10 --> 00:11:17
know simpler in many ways it's more

00:11:14 --> 00:11:19
flexible and it works all over the world

00:11:16 --> 00:11:21
just just to disclose I'm a personal

00:11:18 --> 00:11:23
investor in Kickstarter from back in I

00:11:20 --> 00:11:25
don't know when it was 2008 or 9 so I

00:11:22 --> 00:11:27
love Kickstarter and I think it's a

00:11:24 --> 00:11:29
great service yeah that's it I think

00:11:26 --> 00:11:30
that there's my own belief is this room

00:11:28 --> 00:11:33
for both what I would call services and

00:11:29 --> 00:11:34
for protocols and so services are things

00:11:32 --> 00:11:36
like Kickstarter which are great and

00:11:33 --> 00:11:38
they serve a purpose but the great thing

00:11:35 --> 00:11:40
about open protocols is that they invite

00:11:37 --> 00:11:43
developers and entrepreneurs and

00:11:39 --> 00:11:45
investors to build on top of them in a

00:11:42 --> 00:11:47
way that they know they can do so safely

00:11:44 --> 00:11:49
and not sort of get booted off later the

00:11:46 --> 00:11:51
way that corporate controlled platforms

00:11:48 --> 00:11:53
tend to do and so if you just compare

00:11:50 --> 00:11:55
for example like you know the amount of

00:11:52 --> 00:11:57
innovation that's happened on top of

00:11:54 --> 00:11:59
SMTP the email protocol you know there

00:11:56 --> 00:12:01
have been thousands of great companies

00:11:58 --> 00:12:04
created on top of it and services Gmail

00:12:00 --> 00:12:06
and you know outlook are the obvious

00:12:03 --> 00:12:08
ones but there's anti-spam services and

00:12:05 --> 00:12:11
there's compliance services and there's

00:12:07 --> 00:12:12
you know whatever services for helping

00:12:10 --> 00:12:14
people do more creative kind of emailing

00:12:11 --> 00:12:17
et cetera all sorts of interesting

00:12:13 --> 00:12:19
things with having on top of SMTP HTTP

00:12:16 --> 00:12:20
obviously as well it was the protocol

00:12:18 --> 00:12:22
underlying the internet which is

00:12:19 --> 00:12:24
unlocked an incredible way of innovation

00:12:21 --> 00:12:26
and so you know my feeling is what's so

00:12:23 --> 00:12:27
great about these protocols like what

00:12:25 --> 00:12:28
happens the cycle of these things

00:12:26 --> 00:12:30
whenever you create a protocol is the

00:12:27 --> 00:12:32
critics say oh that's only for criminals

00:12:29 --> 00:12:34
they said that about SSL for example

00:12:31 --> 00:12:36
there was a big debate in the 90s about

00:12:33 --> 00:12:38
encrypting you know web traffic because

00:12:35 --> 00:12:40
the argument was only criminals would

00:12:37 --> 00:12:41
want to encrypt their traffic they said

00:12:39 --> 00:12:43
that about the VCR the VCR why would you

00:12:40 --> 00:12:46
want to cut tape a movie you know it's

00:12:42 --> 00:12:48
only for piracy the reality is it's it's

00:12:45 --> 00:12:50
o that you can then take what was what

00:12:47 --> 00:12:51
was otherwise be a corporate silo and

00:12:49 --> 00:12:53
make it into a protocol which less

00:12:50 --> 00:12:54
people build on top of it now that's my

00:12:52 --> 00:12:57
own bias and that's why I think this is

00:12:53 --> 00:12:59
o exciting yeah and I agree in light

00:12:56 --> 00:13:01
house sort of the design explicitly I

00:12:58 --> 00:13:02
think recognizes that dynamic as well so

00:13:00 --> 00:13:04
you know the light house app doesn't try

00:13:01 --> 00:13:07
and do everything right it it's happy to

00:13:03 --> 00:13:09
utsource some things to third-party

00:13:06 --> 00:13:11
services like like Kickstarter and

00:13:08 --> 00:13:13
IndieGoGo whereas those services were

00:13:10 --> 00:13:14
all together the movements of money and

00:13:12 --> 00:13:15
the hosting of projects and the

00:13:13 --> 00:13:17
marketing of the projects and reviewing

00:13:14 --> 00:13:19
and Quality Assurance and all these kind

00:13:16 --> 00:13:20
of things like how some models and so

00:13:18 --> 00:13:22
there's actually a web

00:13:19 --> 00:13:26
site called late lists dot IO which is

00:13:21 --> 00:13:29
an online web gallery and they actually

00:13:25 --> 00:13:31
they host projects they provide project

00:13:28 --> 00:13:34
discovery they provide comment saying

00:13:30 --> 00:13:36
they're doing some ID verification of

00:13:33 --> 00:13:38
undraisers and things like that so they

00:13:35 --> 00:13:41
are going ahead and then building

00:13:37 --> 00:13:44
services on top of the lighthouse

00:13:40 --> 00:13:46
protocol but there one there there one

00:13:43 --> 00:13:47
service but but yeah there can be

00:13:45 --> 00:13:49
competition someone else could critical

00:13:46 --> 00:13:51
service so you get all the all the

00:13:48 --> 00:13:52
wonderful things about capitalism you

00:13:50 --> 00:13:55
get you get true competition on top

00:13:51 --> 00:13:58
instead of kind of a you know socialist

00:13:54 --> 00:14:02
controlled corporate silo that would be

00:13:57 --> 00:14:05
my yeah I think contrary to the

00:14:01 --> 00:14:06
caricature that people like like me who

00:14:04 --> 00:14:08
and you I think who support open

00:14:05 --> 00:14:09
protocols as being kind of socialist do

00:14:07 --> 00:14:11
good or something I think it's I think

00:14:08 --> 00:14:13
it's actually the opposite which is we

00:14:10 --> 00:14:15
are actually the the ones who want

00:14:12 --> 00:14:18
rue free enterprise and competition

00:14:14 --> 00:14:19
right and wanna you know create the

00:14:17 --> 00:14:20
tools for people to do that yeah I mean

00:14:18 --> 00:14:22
having these protocols is like having a

00:14:20 --> 00:14:23
standardized road signs and things like

00:14:21 --> 00:14:25
that

00:14:22 --> 00:14:28
we're having standardized measurements

00:14:24 --> 00:14:30
for other things it just smooth it just

00:14:27 --> 00:14:32
greases the wheels of trade and helps

00:14:29 --> 00:14:34
everyone do better business I think so

00:14:31 --> 00:14:36
where do you see the the current state

00:14:33 --> 00:14:38
of consumer adoption for Bitcoin and

00:14:35 --> 00:14:42
what mobile it take to to help that

00:14:37 --> 00:14:44
continue to grow um it's pretty good I'm

00:14:41 --> 00:14:45
sort of surprised every time I encounter

00:14:43 --> 00:14:47
people using Bitcoin it's always a nice

00:14:44 --> 00:14:50
surprise but it happens more and more

00:14:46 --> 00:14:51
often these days I think the one reason

00:14:49 --> 00:14:53
I'm surprised is you know right now

00:14:50 --> 00:14:55
there isn't if you're in the Western you

00:14:52 --> 00:14:57
have access to you know credit card

00:14:54 --> 00:14:59
payments and so on it's not always clear

00:14:56 --> 00:15:00
why you would want to use Bitcoin but

00:14:58 --> 00:15:01
hat's not because there aren't good

00:14:59 --> 00:15:03
reasons it's because we're not doing a

00:15:00 --> 00:15:07
good job of like telling people about

00:15:02 --> 00:15:09
hem I'm really keen on seeing us get

00:15:06 --> 00:15:10
like driving merchants discounts through

00:15:08 --> 00:15:12
the whole ecosystem for example so

00:15:09 --> 00:15:14
people can save money with Bitcoin and

00:15:11 --> 00:15:16
see they're saving money and then they

00:15:14 --> 00:15:18
can show their friends hey look you know

00:15:15 --> 00:15:20
look what's happened here look at this

00:15:17 --> 00:15:21
money that I've saved tipping has been

00:15:19 --> 00:15:23
really great for this as well because

00:15:20 --> 00:15:24
you know people can receive a tip

00:15:22 --> 00:15:25
without even really expecting it and

00:15:23 --> 00:15:27
then suddenly they feel like hey I've

00:15:24 --> 00:15:29
actually got some money I could go down

00:15:26 --> 00:15:32
to a local cafe and buy myself a drink

00:15:28 --> 00:15:34
and it's a nice feeling you know though

00:15:31 --> 00:15:34
you wouldn't get without Bitcoin so I'm

00:15:33 --> 00:15:36
sort of

00:15:33 --> 00:15:38
interested in trying to push some of

00:15:35 --> 00:15:39
these ideas through things that can

00:15:37 --> 00:15:42
touch everyone's lives in a small way

00:15:38 --> 00:15:43
and hopefully we can you know get more

00:15:41 --> 00:15:46
Bitcoin adoption through some of these

00:15:42 --> 00:15:47
techniques so clay Christensen who you

00:15:45 --> 00:15:50
know who coined the phrase disruption

00:15:46 --> 00:15:52
disruptive innovation he has he defines

00:15:49 --> 00:15:54
two kinds of disruption the first he

00:15:51 --> 00:15:55
calls kind of low-end disruption which

00:15:53 --> 00:15:58
is basically something in coming in and

00:15:54 --> 00:16:00
costing less for an existing behavior

00:15:57 --> 00:16:02
and the other one he calls I think he

00:15:59 --> 00:16:05
calls it non computing its non

00:16:01 --> 00:16:08
consumption and that is new technologies

00:16:04 --> 00:16:09
that that allow things you to allow for

00:16:07 --> 00:16:12
you to do things you couldn't do before

00:16:08 --> 00:16:14
so I I personally am much more excited

00:16:11 --> 00:16:17
about the latter kind for Bitcoin in

00:16:13 --> 00:16:20
other words I'm more excited about new

00:16:16 --> 00:16:22
ays that you can use Bitcoin and pay

00:16:19 --> 00:16:24
for things that you couldn't before so

00:16:21 --> 00:16:27
for example micro payments machine to

00:16:23 --> 00:16:29
machine payments versus save whatever

00:16:26 --> 00:16:32
the one two three percent credit card

00:16:28 --> 00:16:34
fees that you pay you know paying for or

00:16:31 --> 00:16:37
whatever online merchants just because

00:16:34 --> 00:16:38
one is the credit card you know the

00:16:36 --> 00:16:41
credit card system is done a very good

00:16:37 --> 00:16:42
job of effectively hiding those fees so

00:16:40 --> 00:16:44
you basically everyone's paying those

00:16:41 --> 00:16:46
fees and the merchants you know it's

00:16:43 --> 00:16:48
hidden from the consumer and basically

00:16:45 --> 00:16:49
the way it works right is Target gets

00:16:47 --> 00:16:52
all of their credit cards stole and

00:16:48 --> 00:16:53
everyone has to you know socialize the

00:16:51 --> 00:16:55
losses you basically it's one of these

00:16:52 --> 00:16:57
systems where they privatize the gains

00:16:54 --> 00:17:00
in the credit card companies a merchant

00:16:56 --> 00:17:02
processors Visa MasterCard etc but they

00:16:59 --> 00:17:04
socialize the losses you you pay for it

00:17:01 --> 00:17:06
hrough chargebacks and decline

00:17:03 --> 00:17:07
transactions and getting cents a new

00:17:05 --> 00:17:09
credit card and having to change

00:17:06 --> 00:17:12
verything and so they've done a good

00:17:08 --> 00:17:13
job kind of obfuscating the fees I would

00:17:11 --> 00:17:15
argue and so it's a hard thing to

00:17:12 --> 00:17:17
compete against whereas if we can cut

00:17:14 --> 00:17:19
you know sort of brand-new things that

00:17:16 --> 00:17:21
you couldn't do before because we now

00:17:18 --> 00:17:23
have a system where you can push a

00:17:20 --> 00:17:25
button and pay someone without any kind

00:17:22 --> 00:17:28
of prior trusting relationship yeah I

00:17:24 --> 00:17:30
think is it's not exclusive right so if

00:17:27 --> 00:17:32
you look at the the web you know things

00:17:29 --> 00:17:34
like YouTube and Facebook for example

00:17:31 --> 00:17:36
were undoable without the web that was

00:17:33 --> 00:17:37
like totally new market so it created

00:17:35 --> 00:17:38
social networking and so on that

00:17:36 --> 00:17:41
couldn't have happened without the

00:17:37 --> 00:17:43
internet but then a lot of people today

00:17:40 --> 00:17:45
even now they use the internet to read

00:17:42 --> 00:17:47
newspapers and you know send the

00:17:44 --> 00:17:48
quivalents of you know electronic

00:17:46 --> 00:17:49
letters and base

00:17:47 --> 00:17:51
doing the same things they were doing

00:17:48 --> 00:17:53
before just faster and cheaper so I

00:17:50 --> 00:17:55
don't think it's exclusive and focusing

00:17:52 --> 00:17:56
on you know I mean I would love it if

00:17:54 --> 00:17:58
there was a sudden killer app that made

00:17:55 --> 00:18:01
it from a1cs Bitcoin that was totally

00:17:57 --> 00:18:02
new that would be fantastic and this is

00:18:00 --> 00:18:06
why I'm exploring some of these ideas

00:18:01 --> 00:18:07
with lighthouse but you know it I would

00:18:05 --> 00:18:09
like to see as pursue both equally

00:18:06 --> 00:18:11
vigorously almost here hedging bets and

00:18:08 --> 00:18:12
we'll see what happens

00:18:10 --> 00:18:13
yeah so it's especially for expensive

00:18:11 --> 00:18:15
things like flight tickets the credit

00:18:12 --> 00:18:15
card fees are often not hidden these

00:18:14 --> 00:18:17
days

00:18:14 --> 00:18:19
whenever I book flight tickets inside

00:18:16 --> 00:18:22
Europe you know I see that there's an

00:18:18 --> 00:18:25
eleven twelve dollar equivalent card fee

00:18:21 --> 00:18:26
and if I can avoid us and in some cases

00:18:24 --> 00:18:28
you can't avoid that with Bitcoin and

00:18:25 --> 00:18:30
that's you know a significant saving how

00:18:27 --> 00:18:33
do you feel about the the I mean the use

00:18:29 --> 00:18:37
cases in the developing world seem like

00:18:32 --> 00:18:39
they might be more pronounced than in

00:18:36 --> 00:18:41
the developed world I agree yeah I think

00:18:38 --> 00:18:44
if you look at the debate around a pacer

00:18:40 --> 00:18:45
for example in Kenya it's been hugely

00:18:43 --> 00:18:47
successful there you know Mobile Money

00:18:44 --> 00:18:49
and Kenya has been massively successful

00:18:46 --> 00:18:51
and a lot of countries and you know it's

00:18:48 --> 00:18:52
it if you're the financial conferences

00:18:50 --> 00:18:54
and so on if they're not talking about

00:18:51 --> 00:18:56
Bitcoin a lot of them in the past have

00:18:53 --> 00:18:57
been talking about impatient saying why

00:18:55 --> 00:18:59
is this so successful how can we

00:18:56 --> 00:19:02
replicate that but that success has been

00:18:58 --> 00:19:04
replicated almost nowhere else and one

00:19:01 --> 00:19:06
reason is that's kind of painful for a

00:19:03 --> 00:19:08
lot of Western financial types to admit

00:19:05 --> 00:19:10
is that you know mpesa was partly

00:19:07 --> 00:19:12
successful because it sort of ignored

00:19:09 --> 00:19:14
all of the Western anti-money laundering

00:19:11 --> 00:19:16
requirements and so on like you can just

00:19:13 --> 00:19:18
have a SIM card and start sending money

00:19:15 --> 00:19:20
right with em paying and you don't need

00:19:17 --> 00:19:21
to have a passport and you know an

00:19:19 --> 00:19:23
electricity bill to prove where you live

00:19:20 --> 00:19:26
which is out of reach for many people in

00:19:22 --> 00:19:27
these countries and so many these people

00:19:25 --> 00:19:29
are saying we want the benefits of

00:19:26 --> 00:19:32
empezó for poor people we want to see

00:19:28 --> 00:19:33
these systems become widespread but

00:19:31 --> 00:19:35
hey're not actually quite willing to

00:19:32 --> 00:19:37
actually build a digital cash system in

00:19:34 --> 00:19:39
the vein of MPs or Bitcoin and so

00:19:36 --> 00:19:41
Bitcoin itself you know can sort of

00:19:38 --> 00:19:44
bypass they're sort of you know they

00:19:40 --> 00:19:45
want they want everything at once in

00:19:43 --> 00:19:47
some of these cases and Bitcoin can

00:19:44 --> 00:19:49
offer the same value proposition that

00:19:46 --> 00:19:51
Empire has to Kenya but in every country

00:19:48 --> 00:19:52
where people want to use it and I think

00:19:50 --> 00:19:53
that's tremendously powerful I mean the

00:19:51 --> 00:19:55
number we think about a lot here is

00:19:52 --> 00:19:57
there's now approaching three billion

00:19:54 --> 00:20:00
people with smartphones that will

00:19:56 --> 00:20:01
probably go to you know five or six

00:19:59 --> 00:20:02
billion I mean

00:20:00 --> 00:20:05
ow you know just reading article about

00:20:02 --> 00:20:06
a $34.00 Android smartphone in India

00:20:04 --> 00:20:08
yeah

00:20:05 --> 00:20:09
these things are getting down to to the

00:20:07 --> 00:20:11
price points where they'll be you know

00:20:08 --> 00:20:12
almost every human on earth will have a

00:20:10 --> 00:20:14
smartphone

00:20:11 --> 00:20:16
the vast majority do not have bank

00:20:13 --> 00:20:17
accounts yeah so those people either

00:20:15 --> 00:20:19
need I need some way to participate in

00:20:16 --> 00:20:21
the economy or not you know I think you

00:20:18 --> 00:20:23
and I would both think they should they

00:20:20 --> 00:20:24
should participate and and if the

00:20:22 --> 00:20:26
banking systems not gonna figure out how

00:20:23 --> 00:20:28
to do it you know we're gonna try yeah

00:20:25 --> 00:20:29
absolutely and it's very difficult for

00:20:27 --> 00:20:32
the banking system to serve these people

00:20:28 --> 00:20:33
just due to structural reasons and the

00:20:31 --> 00:20:35
moment they want to trade across borders

00:20:32 --> 00:20:37
ystems ICANN pays the don't even work

00:20:34 --> 00:20:39
either so there's a real niche the wild

00:20:36 --> 00:20:41
not even a niche right there's a real

00:20:38 --> 00:20:43
serious need for many people the Bitcoin

00:20:40 --> 00:20:46
can meet there yeah ok great I think

00:20:42 --> 00:20:46
we're out of time thanks Mike thanks bye

<!-- YOUTUBE_TRANSCRIPT_END -->
