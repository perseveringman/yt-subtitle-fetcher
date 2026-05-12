---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "5oQ0djZYXNI"
title: "The Architecture of Crypto Innovation"
video_url: "https://www.youtube.com/watch?v=5oQ0djZYXNI"
thumbnail_url: "https://i.ytimg.com/vi/5oQ0djZYXNI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=5oQ0djZYXNI"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-08-29T22:47:25.000Z"
upload_date: "2019-08-29"
duration_seconds: 1635
duration_human: "27:15"
view_count: 8984
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:27:41.287Z"
---

# The Architecture of Crypto Innovation

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=5oQ0djZYXNI
- video_id: 5oQ0djZYXNI
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-08-29T22:47:25.000Z
- upload_date: 2019-08-29
- duration: 27:15
- view_count: 8984
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: cryptocurrencies, innovation, consensus mechanisms, decentralization, blockchain, blockchains
- categories: Science & Technology

## Description

Some of the biggest questions in technology today opportunities for crypto center around issues of privacy and security. When you consider the very nature of crypto is decentralized networks and databases, how does information sharing that work when you don’t have a trusted third party in the middle who can verify the information being communicated?

So in this talk, MIT professor (and former senior software engineer at Google) Neha Narula, who researches distributed systems and did her doctoral work on fast, scalable databases -- as well as Director of the MIT Media Lab Digital Currency Initiative -- shares what "consensus" is in the crypto and blockchain context. What is the spectrum of "decentralization" involved? What are remaining challenges in the space, such as security and scalability? And what are the tradeoffs involved, and how are different players addressing them?

This talk was originally delivered at the inaugural a16z Crypto Regulatory Summit 2019, which brings together leading crypto experts and builders, other technologists, academics, industry executives, and government officials -- along with forward-thinking regulators -- to foster collaboration and the exchange of ideas around this important emerging industry.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:07 --> 00:00:13
so I have the enviable task of trying to

00:00:11 --> 00:00:15
explain some of the more technical

00:00:12 --> 00:00:17
concepts behind cryptocurrencies that

00:00:14 --> 00:00:19
you might have heard about census

00:00:16 --> 00:00:21
algorithms sharding scalability

00:00:18 --> 00:00:23
performance but we're gonna do this

00:00:20 --> 00:00:25
together okay we're gonna get through

00:00:22 --> 00:00:28
this and by the end of it I hope that

00:00:24 --> 00:00:29
you you feel like you have a better

00:00:27 --> 00:00:32
understanding about how some of these

00:00:28 --> 00:00:33
systems work so to introduce myself a

00:00:31 --> 00:00:35
little bit I am the director of the

00:00:32 --> 00:00:38
digital currency initiative which is

00:00:34 --> 00:00:40
based out of the MIT Media Lab I'm here

00:00:37 --> 00:00:43
to talk to you today about consensus why

00:00:39 --> 00:00:46
are we even talking about this problem

00:00:42 --> 00:00:49
well the public's faith in institutions

00:00:45 --> 00:00:52
is at an all-time low so what I'm

00:00:48 --> 00:00:54
showing you here is the bottom portion

00:00:51 --> 00:00:57
of a Gallup poll that is tracking

00:00:53 --> 00:00:58
confidence in institutions these are the

00:00:56 --> 00:01:01
institutions in which the public has the

00:00:57 --> 00:01:04
least amount of confidence so banks are

00:01:00 --> 00:01:06
definitely bad with only 32% confidence

00:01:03 --> 00:01:10
but they're not the worst there are

00:01:05 --> 00:01:13
problems in media big business law all

00:01:09 --> 00:01:18
of these institutions are structured in

00:01:12 --> 00:01:21
a hierarchical top-down way people don't

00:01:17 --> 00:01:24
really have enough visibility into how

00:01:20 --> 00:01:26
they work and so they don't trust them

00:01:23 --> 00:01:29
and to be clear this problem is getting

00:01:25 --> 00:01:32
worse with future generations

00:01:28 --> 00:01:34
institutions have a lot of influence

00:01:31 --> 00:01:37
over our lives but I think it's worth

00:01:33 --> 00:01:40
asking the question how might we empower

00:01:36 --> 00:01:43
people to organize without institutions

00:01:39 --> 00:01:45
how can we empower people so that they

00:01:42 --> 00:01:49
have more visibility into how

00:01:44 --> 00:01:52
institutions actually work well in 2008

00:01:48 --> 00:01:56
a shadowy figure known only by the name

00:01:51 --> 00:01:58
of Satoshi Nakamoto answered this

00:01:55 --> 00:02:00
question at least for the field of

00:01:57 --> 00:02:03
inancial payments the answer was a new

00:01:59 --> 00:02:06
form of digital value transfer called

00:02:02 --> 00:02:10
Bitcoin Satoshi released a white paper

00:02:05 --> 00:02:12
on the internet in late 2008 and I think

00:02:09 --> 00:02:14
that the most important sentence of the

00:02:11 --> 00:02:16
paper is right there at the very very

00:02:13 --> 00:02:19
beginning in the abstract this was a

00:02:15 --> 00:02:20
system that would allow online payments

00:02:18 --> 00:02:23
to be sent

00:02:19 --> 00:02:25
directly from one party to another

00:02:22 --> 00:02:28
without going through a financial

00:02:24 --> 00:02:30
institution it took me a little while to

00:02:27 --> 00:02:32
realize this but this was actually the

00:02:29 --> 00:02:34
first time that this had ever happened

00:02:31 --> 00:02:37
this was the first time we could make

00:02:33 --> 00:02:39
online digital payments without a bank

00:02:36 --> 00:02:42
or another financial institution in the

00:02:38 --> 00:02:43
middle now as we're gonna see and we

00:02:41 --> 00:02:46
talked about this this is a little bit

00:02:42 --> 00:02:48
of a conundrum to get your head around

00:02:45 --> 00:02:49
because despite the fact that it's not

00:02:47 --> 00:02:51
necessarily going through a financial

00:02:48 --> 00:02:55
institution it's kind of going through

00:02:50 --> 00:02:58
everybody so early the next year satoshi

00:02:54 --> 00:03:00
release running code and people started

00:02:57 --> 00:03:02
running what is now known as the Bitcoin

00:02:59 --> 00:03:06
blockchain they started becoming part of

00:03:01 --> 00:03:08
the network this is a block this is

00:03:05 --> 00:03:09
actually the first block in the Bitcoin

00:03:07 --> 00:03:12
blockchain it's called the Genesis block

00:03:08 --> 00:03:14
and don't try to read it this is not

00:03:11 --> 00:03:16
really human readable it's encoded for

00:03:13 --> 00:03:18
computers but there there is a little

00:03:15 --> 00:03:21
part of it a little part of it that you

00:03:17 --> 00:03:24
might be able to read and this is a line

00:03:20 --> 00:03:27
that Satoshi chose to embed in this

00:03:23 --> 00:03:30
Genesis block it says The Times January

00:03:26 --> 00:03:32
2009 Chancellor on brink of second

00:03:29 --> 00:03:35
bailout for banks

00:03:31 --> 00:03:39
o this line correspond to a headline

00:03:34 --> 00:03:43
from January 4th 2009 satoshi included

00:03:38 --> 00:03:46
it to prove that he she or they we don't

00:03:42 --> 00:03:47
know started creating this blockchain on

00:03:45 --> 00:03:49
that date that they couldn't have

00:03:46 --> 00:03:50
started before then because they

00:03:48 --> 00:03:53
wouldn't have known what the headline

00:03:49 --> 00:03:56
was but more than that I think including

00:03:52 --> 00:03:59
this headline spoke to what was at the

00:03:55 --> 00:04:02
time this growing distrust around these

00:03:58 --> 00:04:04
institutions that were deemed too big to

00:04:01 --> 00:04:09
fail and the growing consolidation of

00:04:03 --> 00:04:10
power in our financial system so this is

00:04:08 --> 00:04:13
ome of the reasoning why we're even

00:04:09 --> 00:04:16
here today why we're exploring this

00:04:12 --> 00:04:18
process because what came out of Bitcoin

00:04:15 --> 00:04:21
is a new way of thinking about how to

00:04:17 --> 00:04:23
build systems so what I'm here to talk

00:04:20 --> 00:04:25
to you today is this concept of

00:04:22 --> 00:04:29
consensus which underlies how Bitcoin

00:04:24 --> 00:04:31
works we'll discuss how this is used in

00:04:28 --> 00:04:33
blockchains and we'll talk a little bit

00:04:30 --> 00:04:37
about decentralization what it

00:04:32 --> 00:04:39
and some of the remaining challenges so

00:04:36 --> 00:04:44
let's start with consensus what is

00:04:38 --> 00:04:47
consensus well consensus very simply is

00:04:43 --> 00:04:50
the problem in computer science of how

00:04:46 --> 00:04:53
to get a bunch of computers distributed

00:04:49 --> 00:04:56
around the internet to agree on a value

00:04:52 --> 00:04:58
in the presence of faults our overlying

00:04:55 --> 00:05:00
oal here is that we want to make this

00:04:57 --> 00:05:03
ystem of computers which might have

00:04:59 --> 00:05:06
different inputs look like one single

00:05:02 --> 00:05:08
global computer and even if some of

00:05:05 --> 00:05:09
those computers fail as long as it's not

00:05:07 --> 00:05:13
oo many

00:05:08 --> 00:05:15
we can still reliably reach agreement

00:05:12 --> 00:05:17
consensus is actually a pretty old

00:05:14 --> 00:05:22
problem it was formulated in the late

00:05:16 --> 00:05:25
70s 80s and surprisingly we can actually

00:05:21 --> 00:05:27
do better than just failure there's a

00:05:24 --> 00:05:30
set of systems called Byzantine

00:05:26 --> 00:05:32
fault-tolerant systems now what does

00:05:29 --> 00:05:35
this mean you might have heard of the

00:05:31 --> 00:05:37
Byzantine generals problem the Byzantine

00:05:34 --> 00:05:39
generals problem first formulated by

00:05:36 --> 00:05:41
Leslie Lamport winner of the Turing

00:05:38 --> 00:05:44
award and his co-authors is described as

00:05:40 --> 00:05:47
uch you have a set of generals who are

00:05:43 --> 00:05:49
surrounding a city now it can only take

00:05:46 --> 00:05:52
the city if they all attack at once if

00:05:48 --> 00:05:54
they don't all attack at once they might

00:05:51 --> 00:05:56
fail and suffer heavy losses so these

00:05:53 --> 00:05:58
generals which are which are encamped

00:05:55 --> 00:05:59
around the city are trying to

00:05:57 --> 00:06:01
communicate to decide if they're going

00:05:58 --> 00:06:04
to attack or not but there are traders

00:06:00 --> 00:06:06
who are actively trying to subvert the

00:06:03 --> 00:06:07
generals and trying to screw them up so

00:06:05 --> 00:06:10
that only a few may attack while the

00:06:06 --> 00:06:12
rest stay back this is the idea behind

00:06:09 --> 00:06:16
Byzantine consensus that we can tolerate

00:06:11 --> 00:06:19
not just computers failing but we can

00:06:15 --> 00:06:21
actually tolerate malicious adversaries

00:06:18 --> 00:06:23
on the network who might be trying to

00:06:20 --> 00:06:27
subvert agreement it's pretty cool that

00:06:22 --> 00:06:31
we can actually do this so like I said

00:06:26 --> 00:06:32
consensus is a pretty old problem Leslie

00:06:30 --> 00:06:35
Lamport formulated the Byzantine

00:06:31 --> 00:06:38
generals problem in the early 80s a form

00:06:34 --> 00:06:40
of consensus an algorithm specifically

00:06:37 --> 00:06:44
called Paxos and variants are used

00:06:39 --> 00:06:46
inside most large companies today in

00:06:43 --> 00:06:48
order to control sort of the scheduling

00:06:45 --> 00:06:51
in the design of their data centers so

00:06:47 --> 00:06:54
consensus sits inside most of the

00:06:50 --> 00:06:57
internet services that we use today in

00:06:53 --> 00:06:59
1999 ten years before Bitcoin an

00:06:56 --> 00:07:01
algorithm called practical Byzantine

00:06:58 --> 00:07:03
fault tolerant consensus was formulated

00:07:00 --> 00:07:06
at MIT by Barbara Liskov and her student

00:07:02 --> 00:07:08
Miguel Castro and interestingly enough

00:07:05 --> 00:07:10
though industry didn't really take this

00:07:07 --> 00:07:12
algorithm and do anything with it now

00:07:09 --> 00:07:15
it's finding new life in permission

00:07:11 --> 00:07:18
block chains so permission block chains

00:07:14 --> 00:07:22
are actually reaching back to 1999 to

00:07:17 --> 00:07:24
use this algorithm in 2009 Bitcoin was

00:07:21 --> 00:07:27
introduced and since then we've seen a

00:07:23 --> 00:07:29
flourishing in absolutely new types of

00:07:26 --> 00:07:31
consensus algorithms we've seen proof of

00:07:28 --> 00:07:33
stake develop and we've also seen

00:07:30 --> 00:07:34
something called delegated proof of

00:07:32 --> 00:07:38
stake and I'll talk about these a little

00:07:33 --> 00:07:41
bit further on so let's discuss how

00:07:37 --> 00:07:45
consensus is actually used inside of

00:07:40 --> 00:07:46
block chains well there's two classes of

00:07:44 --> 00:07:50
block chains which you might have heard

00:07:46 --> 00:07:51
about permissioned and permissionless so

00:07:49 --> 00:07:53
just to go over this

00:07:50 --> 00:07:55
the idea behind permissioned block

00:07:52 --> 00:07:58
chains is you know everyone you're

00:07:54 --> 00:08:00
trying to reach agreement with it's

00:07:57 --> 00:08:01
identity based voting you have a set of

00:07:59 --> 00:08:04
peers you know who they are

00:08:00 --> 00:08:06
and trying to reach agreement this is

00:08:03 --> 00:08:07
very much like the classical consensus

00:08:05 --> 00:08:11
protocols on the left side of that

00:08:06 --> 00:08:14
imeline what we saw with Bitcoin was a

00:08:10 --> 00:08:16
new type of environment in this

00:08:13 --> 00:08:18
environment you didn't know a priori who

00:08:15 --> 00:08:20
you were interacting with you didn't

00:08:17 --> 00:08:22
know who you were necessarily going to

00:08:19 --> 00:08:24
be reaching agreement with and so these

00:08:21 --> 00:08:27
systems are called permissionless and

00:08:23 --> 00:08:29
the really key idea here the really cool

00:08:26 --> 00:08:32
idea behind Bitcoin and its successors

00:08:28 --> 00:08:36
was that these systems guaranteed

00:08:31 --> 00:08:38
security based on incentives so let's

00:08:35 --> 00:08:39
talk a little bit about why this was

00:08:37 --> 00:08:43
uch a hard problem that we didn't

00:08:38 --> 00:08:46
really get around to it until 2009 well

00:08:42 --> 00:08:48
you see in traditional consensus systems

00:08:45 --> 00:08:50
participation is based on identity

00:08:47 --> 00:08:53
because most of them are voting

00:08:49 --> 00:08:55
protocols everyone in the system sends

00:08:52 --> 00:08:56
around messages and they all vote for

00:08:54 --> 00:08:57
example for what they think the next

00:08:55 --> 00:08:59
block in the block

00:08:56 --> 00:09:02
change should be if you try to apply

00:08:58 --> 00:09:04
this directly to a permissionless system

00:09:01 --> 00:09:06
you're gonna have a problem because the

00:09:03 --> 00:09:08
attacker since it's permissionless can

00:09:05 --> 00:09:10
just make up identities and make up

00:09:07 --> 00:09:14
votes this is what's known as a Sybil

00:09:09 --> 00:09:16
attack with blockchain since we're

00:09:13 --> 00:09:18
operating in this trustless

00:09:15 --> 00:09:21
permissionless environment we need

00:09:17 --> 00:09:23
something else that was the insight

00:09:20 --> 00:09:26
behind Bitcoin we were going to address

00:09:22 --> 00:09:29
the Sybil attack problem by making these

00:09:25 --> 00:09:31
identities actually cost something so

00:09:28 --> 00:09:34
they weren't set ahead of time but they

00:09:30 --> 00:09:35
were allocated according to how much

00:09:33 --> 00:09:39
people were willing to participate or

00:09:34 --> 00:09:41
pay so let's talk a little bit about the

00:09:38 --> 00:09:43
different types of incentive based

00:09:40 --> 00:09:44
consensus algorithms I think there are

00:09:42 --> 00:09:47
three major categories proof-of-work

00:09:43 --> 00:09:50
proof of stake and delegated roof of

00:09:46 --> 00:09:53
stake so let's start with proof of work

00:09:49 --> 00:09:58
this is a data center full of what are

00:09:52 --> 00:10:01
known as ASIC miners this is an industry

00:09:57 --> 00:10:03
called mining it's producing Bitcoin and

00:10:00 --> 00:10:05
securing the blockchain network from

00:10:02 --> 00:10:07
electricity because you see what

00:10:04 --> 00:10:10
happened was Satoshi had this really

00:10:06 --> 00:10:12
great democratic design for how Bitcoin

00:10:09 --> 00:10:15
should work the mining process is one

00:10:11 --> 00:10:17
where you try a lot of random numbers in

00:10:14 --> 00:10:19
order to find one that solves a puzzle

00:10:16 --> 00:10:21
and Satoshi envisioned that people would

00:10:18 --> 00:10:23
run this on their computers on their

00:10:20 --> 00:10:25
laptops now what happened was Bitcoin

00:10:22 --> 00:10:26
became so valuable that people were

00:10:24 --> 00:10:29
actually incentivized to create

00:10:25 --> 00:10:31
specialized hardware to do this random

00:10:28 --> 00:10:34
number checking very very very fast

00:10:30 --> 00:10:36
millions of times faster than what I

00:10:33 --> 00:10:42
could do on my laptop and it spawned

00:10:35 --> 00:10:44
this entire industry so proof of work it

00:10:41 --> 00:10:46
has been though it consumes a lot of

00:10:43 --> 00:10:47
electricity it requires a lot of

00:10:45 --> 00:10:50
electricity to run the specialized

00:10:46 --> 00:10:52
hardware has been working pretty

00:10:49 --> 00:10:53
reliably for ten years it's very

00:10:51 --> 00:10:55
impressive actually a lot of people

00:10:52 --> 00:10:57
never thought that it would work but

00:10:54 --> 00:10:59
Bitcoin has been chugging along and has

00:10:56 --> 00:11:03
not really been compromised on the

00:10:58 --> 00:11:05
protocol level now people don't really

00:11:02 --> 00:11:08
like this electricity usage with good

00:11:04 --> 00:11:11
reason and so people developed what are

00:11:07 --> 00:11:11
called proof of stake protocols now the

00:11:10 --> 00:11:14
IDE

00:11:10 --> 00:11:16
here is that we're also using incentives

00:11:13 --> 00:11:18
it's also kind of permissionless but the

00:11:15 --> 00:11:21
ideas that will assign votes based on

00:11:17 --> 00:11:23
how much money you have in the system so

00:11:20 --> 00:11:25
people have different amounts of money

00:11:22 --> 00:11:27
they have different ideas for what the

00:11:24 --> 00:11:29
next block should be and you'll reach

00:11:26 --> 00:11:31
agreement based on your proportion of

00:11:28 --> 00:11:35
stake that's why it's called proof of

00:11:30 --> 00:11:37
stake so this is obviously a lot greener

00:11:34 --> 00:11:38
doesn't require the same energy usage

00:11:36 --> 00:11:40
since you're not churning through many

00:11:37 --> 00:11:43
random numbers but there are a few

00:11:39 --> 00:11:45
concerns to be had this sounds very much

00:11:42 --> 00:11:48
like the rich get richer sort of a

00:11:44 --> 00:11:49
scenario the more stake you have the

00:11:47 --> 00:11:50
more likely you are to find the next

00:11:48 --> 00:11:54
block the more likely you are to get a

00:11:49 --> 00:11:56
reward it's also a bit less tested we've

00:11:53 --> 00:11:59
only really seen robust proof of stake

00:11:55 --> 00:12:01
systems released into the wild in the

00:11:58 --> 00:12:03
last couple of years so I think there's

00:12:00 --> 00:12:09
till a lot to be learned about proof of

00:12:02 --> 00:12:11
stake now another technique kind of

00:12:08 --> 00:12:12
related to proof of stake is delegated

00:12:10 --> 00:12:14
proof of stake and the idea here is that

00:12:11 --> 00:12:17
you'll use your stake to vote for

00:12:13 --> 00:12:19
validators you'll elect these validators

00:12:16 --> 00:12:21
and you know maybe it's a hundred and

00:12:18 --> 00:12:23
one maybe it's twenty seven

00:12:20 --> 00:12:24
maybe it's twenty one but there's a set

00:12:22 --> 00:12:27
number of validators who are going to

00:12:23 --> 00:12:29
use something more like those classic

00:12:26 --> 00:12:32
onsensus protocols to reach agreement

00:12:28 --> 00:12:34
so look at these numbers up here these

00:12:31 --> 00:12:37
are not very large numbers in

00:12:33 --> 00:12:39
proof-of-work protocols there are

00:12:36 --> 00:12:42
thousands of participants who are

00:12:38 --> 00:12:46
working on creating the blockchain here

00:12:41 --> 00:12:48
you have 21 there are trade-offs when

00:12:45 --> 00:12:49
you do something like this because

00:12:47 --> 00:12:51
there's a smaller number of people

00:12:48 --> 00:12:52
ngaging in the protocol you can get

00:12:50 --> 00:12:55
higher transaction throughput you can

00:12:51 --> 00:12:57
get better performance however there's

00:12:54 --> 00:12:59
also a smaller number of people

00:12:56 --> 00:13:03
participating in the protocol meaning it

00:12:58 --> 00:13:06
might be easier to coerce them so no

00:13:02 --> 00:13:08
matter what consensus protocol you're

00:13:05 --> 00:13:10
using it almost always looks something

00:13:07 --> 00:13:13
like this when it's actually used in the

00:13:09 --> 00:13:16
blockchain you're gonna have a set of

00:13:12 --> 00:13:17
network nodes computers hopefully

00:13:15 --> 00:13:20
located around the world that are

00:13:16 --> 00:13:23
running this protocol they're using it

00:13:19 --> 00:13:23
o agree on blocks in that form and

00:13:22 --> 00:13:26
append

00:13:22 --> 00:13:29
only ledger or blockchain and what goes

00:13:25 --> 00:13:31
in those blocks can vary in Bitcoin its

00:13:28 --> 00:13:33
transactions in other block chains it

00:13:30 --> 00:13:38
might be records or something more

00:13:32 --> 00:13:42
complicated and then every single node

00:13:37 --> 00:13:45
can construct an auditable verifiable

00:13:41 --> 00:13:48
database view on top of this append-only

00:13:44 --> 00:13:50
ledger this is really the key insight

00:13:47 --> 00:13:52
here and the reason that it's auditable

00:13:49 --> 00:13:54
and verifiable is because we're using

00:13:51 --> 00:13:57
cryptography hash functions and digital

00:13:53 --> 00:13:59
signatures in order to enable people to

00:13:56 --> 00:14:00
verify all the things that have been

00:13:58 --> 00:14:02
added to the blockchain and because

00:13:59 --> 00:14:04
veryone's working off the same

00:14:01 --> 00:14:08
blockchain when they run it in order

00:14:03 --> 00:14:11
they all get the same view now a big

00:14:07 --> 00:14:14
question here is who gets to join that

00:14:10 --> 00:14:14
network do you have to ask for

00:14:13 --> 00:14:17
permission

00:14:13 --> 00:14:20
is it only a small number of people do

00:14:16 --> 00:14:22
you have to buy the cryptocurrency this

00:14:19 --> 00:14:26
gets us into the question of

00:14:21 --> 00:14:28
decentralization now decentralization is

00:14:25 --> 00:14:31
a word that's being thrown around a lot

00:14:27 --> 00:14:33
right now surprisingly to me by

00:14:30 --> 00:14:35
regulators because I don't think we

00:14:32 --> 00:14:37
actually know how to define

00:14:34 --> 00:14:40
decentralization very well yet it's a

00:14:36 --> 00:14:42
pretty complex topic and I think simple

00:14:39 --> 00:14:44
mechanisms for trying to define it and

00:14:41 --> 00:14:47
trying to use it as a measure could

00:14:43 --> 00:14:51
pretty easily be gamed so let's talk

00:14:46 --> 00:14:53
about decentralization a little bit I'm

00:14:50 --> 00:14:56
going to define a decentralized system

00:14:52 --> 00:14:59
as one in which there is no single

00:14:55 --> 00:15:00
organization in control and there's no

00:14:58 --> 00:15:02
single point of failure I'm going to

00:14:59 --> 00:15:05
amend that to also include a small

00:15:01 --> 00:15:07
number of organizations in control so

00:15:04 --> 00:15:10
what does this mean let's take Instagram

00:15:06 --> 00:15:12
for example Instagram is run by a

00:15:09 --> 00:15:16
company Facebook now if Facebook

00:15:11 --> 00:15:18
disappears so does Instagram my photos

00:15:15 --> 00:15:21
my comments my friends my messages

00:15:17 --> 00:15:23
everything gone Facebook is Instagram

00:15:20 --> 00:15:25
Facebook runs the servers Facebook

00:15:22 --> 00:15:29
provides the application I can't run it

00:15:24 --> 00:15:32
without them in a decentralized system

00:15:28 --> 00:15:35
it's quite different the idea here is

00:15:31 --> 00:15:37
even an entire company could go away

00:15:34 --> 00:15:38
and because of the protocol because

00:15:36 --> 00:15:41
there's so many different participants

00:15:37 --> 00:15:45
we can still run the application it can

00:15:40 --> 00:15:48
still proceed so let's talk about

00:15:44 --> 00:15:50
control what does it really mean

00:15:47 --> 00:15:53
because you see I think decentralization

00:15:49 --> 00:15:55
is actually a proxy for other features

00:15:52 --> 00:16:00
that mean we might want to have things

00:15:54 --> 00:16:02
like fairness accountability standards

00:15:59 --> 00:16:05
openness lack of gatekeeping

00:16:01 --> 00:16:07
decentralization is what enables us to

00:16:04 --> 00:16:09
have all of these different things I

00:16:06 --> 00:16:10
think it might actually be possible to

00:16:08 --> 00:16:12
get these things sometimes without

00:16:09 --> 00:16:16
decentralization at least certainly

00:16:11 --> 00:16:17
technically but maybe not socially so

00:16:15 --> 00:16:19
there's a lot of different types of

00:16:16 --> 00:16:21
control in these systems there's

00:16:18 --> 00:16:23
technical control how many nodes are

00:16:20 --> 00:16:25
running how many validators are there

00:16:22 --> 00:16:27
but also we should think about things

00:16:24 --> 00:16:29
like what kinds of operating systems are

00:16:26 --> 00:16:32
they running on how would you

00:16:28 --> 00:16:34
graphically distributed are they there's

00:16:31 --> 00:16:36
legal control how many legal

00:16:33 --> 00:16:39
jurisdictions are these nodes actually

00:16:35 --> 00:16:42
and can the owners of them be compelled

00:16:38 --> 00:16:44
there's economic control who owns the

00:16:41 --> 00:16:47
tokens in something like a proof of

00:16:43 --> 00:16:48
stake system who has most of the user

00:16:46 --> 00:16:52
accounts who controls the way that these

00:16:47 --> 00:16:55
users access the application and there's

00:16:51 --> 00:16:59
ocietal control ideological mindshare

00:16:54 --> 00:17:01
is the system really sort of focused

00:16:58 --> 00:17:03
around a few key figures who can push

00:17:00 --> 00:17:06
through changes or who can influence the

00:17:02 --> 00:17:09
direction of the system based on these

00:17:05 --> 00:17:11
ideas I'm gonna put up a spectrum of

00:17:08 --> 00:17:14
decentralization so we have something

00:17:10 --> 00:17:16
like Bitcoin on the far left there is no

00:17:13 --> 00:17:18
company behind Bitcoin there is no

00:17:15 --> 00:17:20
foundation there have tried to be

00:17:17 --> 00:17:23
foundations and they have failed

00:17:19 --> 00:17:25
spectacularly Bitcoin development right

00:17:22 --> 00:17:26
now is concentrated in three

00:17:24 --> 00:17:29
institutions but actually quite

00:17:25 --> 00:17:31
widespread around that one of them is

00:17:28 --> 00:17:33
actually my own we employ two Bitcoin

00:17:30 --> 00:17:36
core developers but Bitcoin I think is

00:17:32 --> 00:17:39
our standard our flagship for

00:17:35 --> 00:17:41
decentralization aetherium has a

00:17:38 --> 00:17:43
foundation the founder is still present

00:17:40 --> 00:17:45
and is involved in protocol discussions

00:17:42 --> 00:17:48
o I'm going to put a theory I'm a

00:17:44 --> 00:17:49
little bit to the right of Bitcoin then

00:17:47 --> 00:17:51
we have other cryptocurrency

00:17:48 --> 00:17:52
see we have permission blockchains now

00:17:50 --> 00:17:54
something that you might find

00:17:51 --> 00:17:55
interesting is I put permission

00:17:53 --> 00:17:58
blockchains as being more decentralized

00:17:54 --> 00:18:00
than these so-called I SEOs we're seeing

00:17:57 --> 00:18:02
or initial coin offerings because quite

00:17:59 --> 00:18:04
frankly if you can do an initial coin

00:18:01 --> 00:18:05
offering if you can raise money that

00:18:03 --> 00:18:07
means that there's an organization

00:18:04 --> 00:18:09
behind what you're doing

00:18:06 --> 00:18:11
there's someone taking the money at

00:18:08 --> 00:18:12
least in permission blockchains you have

00:18:10 --> 00:18:14
a lot of different companies usually

00:18:11 --> 00:18:17
working together and then on the far

00:18:13 --> 00:18:21
ight we have your traditional type of

00:18:16 --> 00:18:23
database now you might say hey Nia why

00:18:20 --> 00:18:24
would you actually put Bitcoin all the

00:18:22 --> 00:18:26
way to the left

00:18:23 --> 00:18:28
I've heard that mining in Bitcoin is

00:18:25 --> 00:18:31
actually quite centralized there's most

00:18:27 --> 00:18:33
of the miners are in China there are a

00:18:30 --> 00:18:37
few very large miners what you can see

00:18:32 --> 00:18:39
here is about four of them comprise over

00:18:36 --> 00:18:40
50% of the hash rate and this is where

00:18:38 --> 00:18:42
we get into the question of

00:18:39 --> 00:18:44
decentralization and what it means and

00:18:41 --> 00:18:46
what we're really trying to achieve this

00:18:43 --> 00:18:49
eems really bad until you actually

00:18:45 --> 00:18:52
unpack the layers and take a look at how

00:18:48 --> 00:18:54
Bitcoin actually works because the

00:18:51 --> 00:18:56
miners don't have as much control as you

00:18:53 --> 00:18:59
might think that they do and we've seen

00:18:55 --> 00:19:02
this play out in practice there's groups

00:18:58 --> 00:19:05
in Bitcoin there's the miners of course

00:19:01 --> 00:19:06
but the miners can't just do whatever

00:19:04 --> 00:19:09
they want with the protocol in the

00:19:05 --> 00:19:10
blockchain the miners are running a

00:19:08 --> 00:19:13
business they're trying to make money

00:19:09 --> 00:19:15
and there's no way the miners want to

00:19:12 --> 00:19:17
run their mining equipment on a version

00:19:15 --> 00:19:19
of the blockchain that doesn't have

00:19:16 --> 00:19:21
conomic backing they wouldn't make any

00:19:18 --> 00:19:24
money so the miners are dependent on the

00:19:20 --> 00:19:27
users which version of Bitcoin do they

00:19:23 --> 00:19:30
value more users are dependent on the

00:19:27 --> 00:19:32
miners and developers they rely on the

00:19:29 --> 00:19:34
miners to actually provide the security

00:19:31 --> 00:19:37
and keep the block chain from forking to

00:19:33 --> 00:19:39
make it hard to double spent they rely

00:19:36 --> 00:19:43
on the developers to push fixes to solve

00:19:38 --> 00:19:46
security bugs developers can't do

00:19:42 --> 00:19:48
anything unless they get the agreement

00:19:45 --> 00:19:50
of the miners the miners are the ones

00:19:47 --> 00:19:53
who are actually running their code so

00:19:49 --> 00:19:56
it kind of forms this tripod this nice

00:19:52 --> 00:19:58
tripod of control now one thing I do

00:19:55 --> 00:20:01
want to point out here is that this is a

00:19:57 --> 00:20:03
proof-of-work based system in a proof of

00:20:00 --> 00:20:05
stake based system

00:20:02 --> 00:20:06
the users or holders of the

00:20:04 --> 00:20:09
cryptocurrency and the miners are

00:20:05 --> 00:20:11
actually the same so it's interesting to

00:20:08 --> 00:20:15
sort of think about the question how

00:20:10 --> 00:20:16
stable is a kind of a system and there

00:20:14 --> 00:20:18
are other actors that I think we don't

00:20:15 --> 00:20:21
alk about enough when we talk about

00:20:17 --> 00:20:24
decentralization in particular the

00:20:20 --> 00:20:26
influence of exchanges exchanges have a

00:20:23 --> 00:20:27
tremendous amount of control in

00:20:25 --> 00:20:30
cryptocurrency

00:20:26 --> 00:20:31
ecosystems they can choose what coins to

00:20:29 --> 00:20:34
list and in fact a lot of exchanges

00:20:30 --> 00:20:36
charge a pretty penny in order to list a

00:20:33 --> 00:20:38
coin once a coin is listed that provides

00:20:35 --> 00:20:41
liquidity it really helps the price of

00:20:37 --> 00:20:44
the token exchanges can decide whether

00:20:40 --> 00:20:45
or not to even support a fork when

00:20:43 --> 00:20:48
there's a dispute with a cryptocurrency

00:20:44 --> 00:20:50
if they choose not to support the forked

00:20:47 --> 00:20:53
token then obviously that affects the

00:20:49 --> 00:20:56
price and exchanges get to choose how to

00:20:52 --> 00:20:59
label things users go to an exchange

00:20:55 --> 00:21:00
intending to buy some cryptocurrency and

00:20:58 --> 00:21:03
they're gonna look at the cryptocurrency

00:20:59 --> 00:21:05
and look at the names and choose based

00:21:02 --> 00:21:08
on that exchanges get to set those names

00:21:04 --> 00:21:11
and we saw this happening when Bitcoin

00:21:07 --> 00:21:13
forked Vic both sides were kind of

00:21:10 --> 00:21:15
ighting for the Bitcoin moniker and

00:21:12 --> 00:21:17
exchanges had to kind of make the

00:21:14 --> 00:21:20
decision ultimately of how to label

00:21:16 --> 00:21:22
things now exchanges are responding to

00:21:19 --> 00:21:26
the community at large but they do have

00:21:21 --> 00:21:28
quite a bit of control this sort of

00:21:25 --> 00:21:30
makes it sound like I'm suggesting that

00:21:27 --> 00:21:32
we need to regulate exchanges very

00:21:29 --> 00:21:34
heavily I want to make it clear I think

00:21:31 --> 00:21:37
in this industry in particular a

00:21:33 --> 00:21:39
regulatory moat too early could really

00:21:36 --> 00:21:42
stifle competition we could end up with

00:21:38 --> 00:21:44
a few small large exchanges which have a

00:21:41 --> 00:21:46
tremendous amount of control so I really

00:21:43 --> 00:21:49
think it's important that this industry

00:21:45 --> 00:21:51
has a lot of competition so that's a

00:21:48 --> 00:21:53
little bit about consensus and

00:21:50 --> 00:21:55
ecentralization but now I want to get

00:21:52 --> 00:21:57
at the remaining challenges in this

00:21:54 --> 00:22:00
pace because it's all about trade-offs

00:21:56 --> 00:22:02
in order to get this system in which

00:21:59 --> 00:22:04
very few people actually have control

00:22:01 --> 00:22:06
which is very spread out with all of

00:22:03 --> 00:22:08
these features there are some things

00:22:05 --> 00:22:10
that we have to give up one of the first

00:22:07 --> 00:22:12
rade offs one that I'm particularly

00:22:09 --> 00:22:15
worried about is around security because

00:22:11 --> 00:22:16
you see these systems are very hard to

00:22:14 --> 00:22:18
up

00:22:15 --> 00:22:20
grade you have to get the agreement of

00:22:17 --> 00:22:22
everyone to start to run the new code

00:22:19 --> 00:22:24
and remember developers don't really

00:22:21 --> 00:22:26
have the ability to just push out an

00:22:23 --> 00:22:30
update when they want to what this means

00:22:25 --> 00:22:32
is that it's also hard to push bug fixes

00:22:29 --> 00:22:34
it's a really challenging problem

00:22:31 --> 00:22:37
figuring out how to upgrade a live

00:22:33 --> 00:22:39
cryptocurrency when there's a bug and

00:22:36 --> 00:22:42
really who are used to even supposed to

00:22:38 --> 00:22:44
report bugs to these things are supposed

00:22:41 --> 00:22:45
to be decentralized no one's in control

00:22:43 --> 00:22:47
so why should some actors be privileged

00:22:44 --> 00:22:51
about this information that there's a

00:22:46 --> 00:22:54
vulnerability this is a problem that my

00:22:50 --> 00:22:55
group at MIT is tackling head-on we

00:22:53 --> 00:22:58
formed something called a cryptocurrency

00:22:54 --> 00:22:59
security working group I think this is

00:22:57 --> 00:23:01
omething where the whole industry has

00:22:58 --> 00:23:03
to come together and think about things

00:23:00 --> 00:23:06
like standards and communication

00:23:02 --> 00:23:09
channels for how to deal with

00:23:05 --> 00:23:12
vulnerabilities and bugs we hope to be a

00:23:08 --> 00:23:14
nexus for cybersecurity collaboration

00:23:11 --> 00:23:16
and set up infrastructure to help

00:23:13 --> 00:23:20
strengthen layer one of crypto

00:23:15 --> 00:23:22
currencies now another important

00:23:19 --> 00:23:24
rade-off and sort of issue around

00:23:21 --> 00:23:25
crypto currencies is around scalability

00:23:23 --> 00:23:28
ou've probably heard this before

00:23:24 --> 00:23:31
Bitcoin doesn't scale it can only do

00:23:27 --> 00:23:32
seven transactions per second there are

00:23:30 --> 00:23:34
all these other new crypto currencies

00:23:31 --> 00:23:37
which can do thousands of transactions

00:23:33 --> 00:23:39
per second I want to make it very clear

00:23:36 --> 00:23:41
Bitcoin doing seven transactions per

00:23:38 --> 00:23:44
second is a choice based on two numbers

00:23:40 --> 00:23:47
in the code one could change these two

00:23:43 --> 00:23:49
numbers very easily however people want

00:23:46 --> 00:23:53
o balance decentralization with

00:23:48 --> 00:23:56
scalability you see the problem here is

00:23:52 --> 00:23:58
in crypto currencies and block chains we

00:23:55 --> 00:24:00
want everyone to be able to verify and

00:23:57 --> 00:24:02
validate what's happening that's what

00:23:59 --> 00:24:04
makes them open that's what makes them

00:24:01 --> 00:24:06
secure and in order to do that there's

00:24:03 --> 00:24:08
ort of a fundamental limit on how much

00:24:05 --> 00:24:08
performance we can get out of these

00:24:07 --> 00:24:11
things

00:24:07 --> 00:24:14
if every computer in the entire network

00:24:10 --> 00:24:16
has to verify every step of every smart

00:24:13 --> 00:24:18
contract it's just not going to be a

00:24:15 --> 00:24:22
very efficient system these are not

00:24:17 --> 00:24:25
scalable systems so there are some

00:24:21 --> 00:24:27
solutions there's some hope so I want to

00:24:24 --> 00:24:28
briefly touch on three solutions before

00:24:26 --> 00:24:31
we close

00:24:27 --> 00:24:33
one is the idea of committees instead of

00:24:30 --> 00:24:35
everyone voting and participating in the

00:24:32 --> 00:24:37
protocol we can elect a smaller

00:24:34 --> 00:24:40
committee to do so there are a lot of

00:24:36 --> 00:24:42
systems that take this approach there

00:24:39 --> 00:24:45
are some trade-offs here imagine a

00:24:41 --> 00:24:49
company that is run by a CEO versus one

00:24:44 --> 00:24:51
that's run by a set of VPS or a board

00:24:48 --> 00:24:53
with the set of VPS or board the more

00:24:50 --> 00:24:55
that they are the more people checking

00:24:52 --> 00:24:56
sort of the more sure sure you might be

00:24:54 --> 00:24:58
that the company is doing what they're

00:24:55 --> 00:25:00
supposed to do if there's a small number

00:24:57 --> 00:25:03
of people in charge it's harder to check

00:24:59 --> 00:25:05
up on them another technique is called

00:25:02 --> 00:25:08
sharding this is the idea that you

00:25:04 --> 00:25:10
divide the data up and everybody takes a

00:25:07 --> 00:25:14
portion of the data to validate and

00:25:09 --> 00:25:16
secure imagine that your professor and

00:25:13 --> 00:25:19
you had to grade the final exam for a

00:25:15 --> 00:25:21
really large class say the beginner

00:25:18 --> 00:25:23
intro computer science class at Stanford

00:25:20 --> 00:25:26
MIT or Harvard they're growing like

00:25:22 --> 00:25:27
crazy so one thing you could do is you

00:25:25 --> 00:25:29
could grade all the tests yourself all

00:25:26 --> 00:25:32
200 of them it would take a really long

00:25:28 --> 00:25:35
time another thing you could do is hire

00:25:31 --> 00:25:37
10 TAS or teaching assistants you could

00:25:34 --> 00:25:39
ivide the 200 final exams up between

00:25:36 --> 00:25:42
them and they could each do a portion in

00:25:38 --> 00:25:44
parallel this is obviously going to go a

00:25:41 --> 00:25:47
lot faster so this is the idea behind

00:25:43 --> 00:25:49
sharding now the problem here is that

00:25:46 --> 00:25:51
you have to deal with quality control

00:25:48 --> 00:25:53
between the different at teaching

00:25:50 --> 00:25:55
assistants you're probably gonna have to

00:25:52 --> 00:25:56
do some coordination between them to

00:25:54 --> 00:25:58
make sure that they're doing the right

00:25:55 --> 00:26:00
hing the professor is probably the

00:25:57 --> 00:26:02
stronger grader the professor is seen

00:25:59 --> 00:26:04
more courses so the professor might have

00:26:01 --> 00:26:05
to spot check the other teaching

00:26:03 --> 00:26:09
assistants these are the challenges that

00:26:04 --> 00:26:11
arise in sharding but I think really

00:26:08 --> 00:26:13
fundamentally a lot of people are

00:26:10 --> 00:26:16
viewing blockchains the wrong way

00:26:12 --> 00:26:20
they're not a system for data storage

00:26:15 --> 00:26:23
they're not a database they're they're a

00:26:19 --> 00:26:25
piece of a puzzle an anchor of trust and

00:26:22 --> 00:26:27
so I think the real way we should be

00:26:24 --> 00:26:30
using block chains is we should put as

00:26:26 --> 00:26:33
little on them as possible this is the

00:26:29 --> 00:26:35
idea behind techniques known as layer 2

00:26:32 --> 00:26:37
the idea here is to use state channels

00:26:34 --> 00:26:38
or payment channels and there's

00:26:36 --> 00:26:40
omething called the Lightning Network

00:26:37 --> 00:26:42
which is doing this for Bitcoin today

00:26:39 --> 00:26:45
and is deployed

00:26:41 --> 00:26:46
now this is very cool and I think it's a

00:26:44 --> 00:26:49
great idea but there are also challenges

00:26:45 --> 00:26:52
here it's very difficult to write

00:26:48 --> 00:26:53
applications in this paradigm it's much

00:26:51 --> 00:26:55
easier to write an application if

00:26:52 --> 00:26:57
everything just runs on the blockchain

00:26:54 --> 00:27:00
and there are also a large number of

00:26:56 --> 00:27:02
questions that arise around the topology

00:26:59 --> 00:27:05
of these layer 2 networks and their

00:27:01 --> 00:27:08
security so that's all I have for you

00:27:04 --> 00:27:11
today thank you for listening for being

00:27:07 --> 00:27:13
an engaged audience and I hope that you

00:27:10 --> 00:27:15
learned something about consensus and

00:27:12 --> 00:27:15
ecentralization

<!-- YOUTUBE_TRANSCRIPT_END -->
