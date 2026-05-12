---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ZZIheiQ9IoE"
title: "Towards a Decentralized Storage Network for the Blockchain Computer"
video_url: "https://www.youtube.com/watch?v=ZZIheiQ9IoE"
thumbnail_url: "https://i.ytimg.com/vi/ZZIheiQ9IoE/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ZZIheiQ9IoE"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-04-19T12:41:38.000Z"
upload_date: "2019-04-19"
duration_seconds: 3151
duration_human: "52:31"
view_count: 6492
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:32:57.536Z"
---

# Towards a Decentralized Storage Network for the Blockchain Computer

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ZZIheiQ9IoE
- video_id: ZZIheiQ9IoE
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-04-19T12:41:38.000Z
- upload_date: 2019-04-19
- duration: 52:31
- view_count: 6492
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: Andreessen Horowitz, a16z, software, entrepreneurship, startup, Silicon Valley, crypto, blockchain computer science, cryptography, research, decentralized, storage, censorship, cloud storage, blockchain, blockchain computer, cryptocurrency, Stanford, Stanford Computer Science, distributed computing, distributed storage, game theory, protocols, trust, privacy
- categories: Science & Technology

## Description

In a previous video (https://youtu.be/13QLbaxWXmA), a16z crypto Deal Partner Ali Yahya described five open problems for building the blockchain computer. One of those problems is building a decentralized storage network.  

In this video, we double-click on decentralized storage networks and explore some of the cutting edge computer science techniques we'll need to make these storage networks a reality. a16z crypto Deal Partner Ali Yahya talks with Stanford Ph.D. student Ben Fisch about how to create a reliable decentralized storage network with new protocols and the right economic incentives to entice people around the world to offer up some of their idle free storage space to developers who need that space. Specifically, they explore the following questions:
- How do we design a peer-to-peer storage system where people around the Internet offer to store files for us? 
- How can we make sure this decentralized system performs well, doesn’t lose files, is trusted, and provides the right economic incentives to storage providers to participate in this system
- What benefits would a peer-to-peer system have over centralized systems (such as being more censorship resistance, broader participation in providing or verifying storage)?
- What computer science protocol work is needed to enable this type of network, such as proof of retrievability, proof of replication, proof of storage?

Show notes:
Ali mentions Bruce Schneir's description of four mechanisms for trust, which you can read more about here:
Bruce Schneier’s four mechanisms for trust: https://www.schneier.com/blog/archives/2012/03/liars_and_outli_5.html

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:14
[Music]

00:00:14 --> 00:00:22
hey everyone welcome this is the ACCC

00:00:18 --> 00:00:25
YouTube channel my name is Ali rakia I'm

00:00:21 --> 00:00:27
a partner on the a 16 se crypto fund and

00:00:24 --> 00:00:31
I'm here today with Ben fish who is a

00:00:26 --> 00:00:33
student a PhD student under Dan Bonet at

00:00:30 --> 00:00:35
Stanford University and has done a lot

00:00:32 --> 00:00:36
of very interesting work in the area of

00:00:34 --> 00:00:40
blockchain and cryptocurrencies

00:00:35 --> 00:00:44
including some work on proofs of

00:00:39 --> 00:00:47
replication as well as more recently

00:00:43 --> 00:00:49
accumulators and today we'll spend a lot

00:00:46 --> 00:00:50
of the conversation talking on proofs of

00:00:48 --> 00:00:53
replication and sort of their

00:00:50 --> 00:00:56
implications and in particular what they

00:00:52 --> 00:00:57
mean for decentralized storage so Ben

00:00:55 --> 00:00:59
thank you thank you for coming along

00:00:56 --> 00:01:02
it's great to be here Ali thank you for

00:00:58 --> 00:01:05
the introduction of course so what what

00:01:01 --> 00:01:08
is the problem of decentralized storage

00:01:04 --> 00:01:11
well the centralized storage is about

00:01:07 --> 00:01:12
aking all the storage we have today the

00:01:10 --> 00:01:16
massive amounts of storage we have today

00:01:11 --> 00:01:19
sitting in centralized cloud centers

00:01:15 --> 00:01:22
right like Amazon or Google and

00:01:18 --> 00:01:24
istributing distributing it across the

00:01:21 --> 00:01:30
Internet of Internet connected devices

00:01:23 --> 00:01:32
and you know there there could be many

00:01:29 --> 00:01:35
different benefits that one could talk

00:01:31 --> 00:01:38
about there but the the problem of how

00:01:34 --> 00:01:41
you actually go about doing that and

00:01:37 --> 00:01:45
checking that if you take a file and ask

00:01:40 --> 00:01:47
some you know random distributed nodes

00:01:44 --> 00:01:49
across the internet to participate in

00:01:46 --> 00:01:52
storing the file or even just pieces of

00:01:48 --> 00:01:54
the file and say people with extra space

00:01:51 --> 00:01:57
on their phone who are just contributing

00:01:53 --> 00:02:00
to the collective storage how do you

00:01:56 --> 00:02:01
verify that those files are actually

00:01:59 --> 00:02:04
there and still being stored in our

00:02:00 --> 00:02:06
etrievable mmm yeah it is a very

00:02:03 --> 00:02:09
interesting problem space because we can

00:02:05 --> 00:02:12
take for granted almost that there is an

00:02:08 --> 00:02:15
enormous amount of unused latent storage

00:02:11 --> 00:02:17
space inside of computers that are maybe

00:02:14 --> 00:02:19
mobile phones there are laptops or

00:02:16 --> 00:02:21
desktop computers or maybe blades

00:02:18 --> 00:02:24
instead of servers and data centers

00:02:20 --> 00:02:26
that's just completely unutilized not

00:02:23 --> 00:02:28
even proper using bully cards

00:02:25 --> 00:02:30
right now absolutely yeah like how much

00:02:27 --> 00:02:33
unused storage do you have on your phone

00:02:29 --> 00:02:33
it just

00:02:38 --> 00:02:46
so I currently have 70 gigabytes of

00:02:41 --> 00:02:47
unused storage on my phone and I think

00:02:45 --> 00:02:50
it's probably a safe assumption you

00:02:46 --> 00:02:52
could say on average maybe half of the

00:02:49 --> 00:02:55
hard drive of any one particular

00:02:51 --> 00:02:58
computer is likely to be you could store

00:02:54 --> 00:03:01
the entire lord of the

00:02:57 --> 00:03:05
rings' trilogy on your phone at times 10

00:03:00 --> 00:03:06
and contribute to a decentralized you

00:03:04 --> 00:03:08
know file storage exactly

00:03:05 --> 00:03:11
so the problem then of decentralized

00:03:07 --> 00:03:14
storage is how do we bring up a

00:03:10 --> 00:03:16
marketplace that's able to tap into that

00:03:13 --> 00:03:19
unused resource how do we create a

00:03:15 --> 00:03:22
protocol that is neutral that is open

00:03:18 --> 00:03:24
source that is kind of like another sort

00:03:21 --> 00:03:26
of layer to the internet that

00:03:23 --> 00:03:28
incentivizes people who to put up their

00:03:25 --> 00:03:30
unused storage that they have in their

00:03:27 --> 00:03:33
computers on this on this sort of

00:03:29 --> 00:03:35
network such that other people can rent

00:03:32 --> 00:03:36
hat storage in and make use of it in a

00:03:34 --> 00:03:39
way that's actually what's actually

00:03:35 --> 00:03:41
useful absolutely and it's controversial

00:03:38 --> 00:03:43
to is like there's a question is okay

00:03:40 --> 00:03:46
but why is it that this problem matters

00:03:42 --> 00:03:47
like I it could be yes there's an

00:03:45 --> 00:03:49
economic argument you wanna you want to

00:03:46 --> 00:03:51
get to that storage but is it really

00:03:48 --> 00:03:53
that much cheaper than the kind of

00:03:50 --> 00:03:54
storage you can get on Amazon s3 or the

00:03:52 --> 00:03:56
conomic the economics make sense

00:03:53 --> 00:03:58
there's an economic question there's

00:03:55 --> 00:04:01
also a censorship question right if you

00:03:57 --> 00:04:05
have Amazon in charge of all the storage

00:04:00 --> 00:04:08
then maybe an Amazon is not intending to

00:04:04 --> 00:04:11
censor individuals but say a government

00:04:07 --> 00:04:14
is it's much easier for a government to

00:04:10 --> 00:04:19
prevent Amazon from serving files to

00:04:13 --> 00:04:22
their country than you know a amorphous

00:04:18 --> 00:04:23
Internet of of connected devices that

00:04:21 --> 00:04:25
are participating in storing just pieces

00:04:22 --> 00:04:27
of the file absolutely yeah

00:04:24 --> 00:04:28
I I think that the censorship

00:04:26 --> 00:04:30
question is very important there's like

00:04:28 --> 00:04:33
a key it's a key to the key difference

00:04:29 --> 00:04:35
here that that uh if you were to be you

00:04:32 --> 00:04:37
were to succeed at building a

00:04:34 --> 00:04:40
decentralized storage network that is

00:04:36 --> 00:04:42
open source and is decentralized in that

00:04:39 --> 00:04:44
he power the human power over the

00:04:41 --> 00:04:46
network is decentralized you know one

00:04:43 --> 00:04:49
human actor or human group controls it

00:04:45 --> 00:04:50
yes then then you end up having some of

00:04:48 --> 00:04:53
these additional properties at its

00:04:49 --> 00:04:56
censorship resistant you can trust the

00:04:52 --> 00:04:59
that uh that sort of the rules that make

00:04:55 --> 00:05:01
it a platform will stay the same or will

00:04:58 --> 00:05:03
stay fair because it's their control so

00:05:00 --> 00:05:05
divided by a body of representative

00:05:02 --> 00:05:08
human actors so in my mind I think that

00:05:04 --> 00:05:10
like there's three things that I think

00:05:07 --> 00:05:12
make this problem matter are one there's

00:05:09 --> 00:05:14
what we talked about they increase it

00:05:11 --> 00:05:16
increases the utilization of an unused

00:05:13 --> 00:05:17
resource and that's there's something

00:05:15 --> 00:05:20
that's that's good about that there's an

00:05:16 --> 00:05:22
economic argument there's the censorship

00:05:19 --> 00:05:25
our argument which is that this could

00:05:21 --> 00:05:28
become like the robust storage layer for

00:05:24 --> 00:05:30
the internet that is just more fault

00:05:27 --> 00:05:33
olerant and more reliable more

00:05:29 --> 00:05:34
long-lasting than than the existing

00:05:32 --> 00:05:36
model where you have like a single

00:05:33 --> 00:05:38
server serving a file and if that server

00:05:35 --> 00:05:42
goes down the file goes absolutely and

00:05:37 --> 00:05:44
then the third being that we talk a lot

00:05:41 --> 00:05:46
about kind of the decentralized future

00:05:43 --> 00:05:48
of all sorts of applications that can be

00:05:45 --> 00:05:51
built on top of block chains that

00:05:47 --> 00:05:52
decentralized computation decentralized

00:05:50 --> 00:05:55
accounting systems exactly coin

00:05:51 --> 00:05:57
aetherium and and all of those will

00:05:54 --> 00:05:59
require will require storage and if that

00:05:56 --> 00:06:00
storage were centralized and the whole

00:05:58 --> 00:06:02
point would be lost that'll be the

00:05:59 --> 00:06:03
weakest link so you need decentralized

00:06:01 --> 00:06:07
storage for those applications

00:06:02 --> 00:06:09
absolutely you can think of a you know

00:06:06 --> 00:06:12
decentralized accounting system Bitcoin

00:06:08 --> 00:06:15
being the first example of such as a

00:06:11 --> 00:06:19
example of a decentralized you know

00:06:14 --> 00:06:21
storage network it's just that the one

00:06:18 --> 00:06:23
file that the entire system has

00:06:20 --> 00:06:27
decentralized the storage of is the

00:06:22 --> 00:06:31
ledger itself and so the idea is to have

00:06:26 --> 00:06:34
a highly replicated and immutable copy

00:06:30 --> 00:06:39
of the the state of the financial system

00:06:33 --> 00:06:42
right and then other networks that move

00:06:38 --> 00:06:44
from accounting systems to decentralize

00:06:41 --> 00:06:46
computation need the same thing but for

00:06:43 --> 00:06:48
the state of programs being run on the

00:06:45 --> 00:06:51
network or the state of contracts

00:06:47 --> 00:06:54
between individuals that's a very good

00:06:50 --> 00:06:55
point like Bitcoin itself as a as the

00:06:53 --> 00:06:56
decentralized storage network or the

00:06:54 --> 00:06:59
things that's being stored is it this

00:06:55 --> 00:07:01
very specifically the Bitcoin ledger yes

00:06:58 --> 00:07:03
that tracks basically who owns how much

00:07:00 --> 00:07:04
Bitcoin implicitly through its through

00:07:02 --> 00:07:07
is data structure yeah

00:07:03 --> 00:07:08
and then sort of the idea that some

00:07:06 --> 00:07:11
other other projects out there like like

00:07:07 --> 00:07:13
file coin and see and storge have have

00:07:10 --> 00:07:14
kind of embarked on is how do you

00:07:12 --> 00:07:16
generalize that idea a little bit and

00:07:13 --> 00:07:20
how you how do you make it so that so

00:07:15 --> 00:07:22
that the storage is is general it can be

00:07:19 --> 00:07:24
used for for storing anything not just

00:07:21 --> 00:07:28
sort of the ledger that tracks payments

00:07:23 --> 00:07:30
instead of the instead of the network so

00:07:27 --> 00:07:32
let's talk a little bit about why this

00:07:29 --> 00:07:35
a hard problem like what why is it

00:07:31 --> 00:07:38
difficult to envision this network that

00:07:34 --> 00:07:39
no one controls that creates a

00:07:37 --> 00:07:41
marketplace for people to come together

00:07:38 --> 00:07:43
and rent their storage to one another

00:07:40 --> 00:07:44
what are the challenges well usually

00:07:42 --> 00:07:47
when we think of what are the challenges

00:07:43 --> 00:07:48
we have to focus on like what's really

00:07:46 --> 00:07:52
different from the way things work today

00:07:47 --> 00:07:56
and the way things work today with

00:07:51 --> 00:07:57
centralized storage are you you know the

00:07:55 --> 00:08:01
company that you're giving your data to

00:07:56 --> 00:08:04
the company has a reputation say Amazon

00:08:00 --> 00:08:07
right and you put your files in Amazon

00:08:03 --> 00:08:12
and you just trust that Amazon is going

00:08:06 --> 00:08:15
to store your data or Dropbox and Amazon

00:08:11 --> 00:08:18
and Dropbox have a strong incentive to

00:08:14 --> 00:08:20
not mess up and continue to store

00:08:17 --> 00:08:24
people's data right because if it comes

00:08:19 --> 00:08:27
out that Amazon is deleting the data or

00:08:23 --> 00:08:30
if Amazon is not replicating the data

00:08:26 --> 00:08:32
enough and and therefore has by accident

00:08:29 --> 00:08:35
some kind of data fault then it will

00:08:31 --> 00:08:37
severely harm their reputation so you

00:08:34 --> 00:08:40
know the incentives there come more from

00:08:36 --> 00:08:42
a business to consumer perspective as

00:08:39 --> 00:08:43
the social elements of reputation

00:08:41 --> 00:08:46
they're right that they kind of keep

00:08:42 --> 00:08:49
Amazon and keep all the letters in line

00:08:45 --> 00:08:50
whereas in in sort of the crypto world

00:08:48 --> 00:08:51
where it's permissionless and it's

00:08:49 --> 00:08:53
peer-to-peer it's not

00:08:50 --> 00:08:54
business-to-consumer

00:08:52 --> 00:08:58
where there's a business that has a name

00:08:53 --> 00:09:01
that's massively recognized and and now

00:08:57 --> 00:09:03
you're talking about peer to peer

00:09:00 --> 00:09:05
individuals who are say contributing

00:09:02 --> 00:09:08
just a little bit of extra storage on

00:09:04 --> 00:09:12
their phone and you want to first make

00:09:07 --> 00:09:16
it economical for people to earn you

00:09:11 --> 00:09:18
know a few extra dollars or even cents

00:09:15 --> 00:09:22
just on that extra storage that

00:09:17 --> 00:09:23
have on their phone and and and not have

00:09:21 --> 00:09:25
a really high fixed cost to

00:09:22 --> 00:09:26
participation you don't have to run a

00:09:24 --> 00:09:29
business like Amazon for it to make

00:09:25 --> 00:09:31
sense to participate but then from the

00:09:28 --> 00:09:33
other end from from the from from a

00:09:30 --> 00:09:36
consumers end who's using this network

00:09:32 --> 00:09:37
to store files that they do not want to

00:09:35 --> 00:09:40
be lost there's the question of well

00:09:36 --> 00:09:41
who's actually storing your files how do

00:09:39 --> 00:09:44
you know they're still storing your

00:09:40 --> 00:09:47
files if they're some random node on the

00:09:43 --> 00:09:50
network that might just join and leave

00:09:46 --> 00:09:53
you can't have nodes joining collecting

00:09:49 --> 00:09:56
a few dollars for their storage and then

00:09:52 --> 00:09:59
going away without ever being held

00:09:55 --> 00:10:00
accountable for that storage exactly so

00:09:58 --> 00:10:02
it's a permission on the system

00:09:59 --> 00:10:04
yeah and it's peer-to-peer which means

00:10:01 --> 00:10:06
that anyone can participate anyone

00:10:03 --> 00:10:07
anywhere really who has an internet

00:10:05 --> 00:10:09
connection and who has a computer that's

00:10:06 --> 00:10:11
running a protocol yeah can participate

00:10:08 --> 00:10:15
you don't have to spend you know

00:10:10 --> 00:10:18
millions of dollars on PR to you know to

00:10:14 --> 00:10:21
garner a name like Amazon you must have

00:10:17 --> 00:10:21
a device you you join the network nobody

00:10:20 --> 00:10:24
knows who you are

00:10:20 --> 00:10:26
you know but yet everybody should be

00:10:23 --> 00:10:29
able to have the same trust in you that

00:10:25 --> 00:10:33
hey have in Amazon so you as a consumer

00:10:28 --> 00:10:35
don't have the luxury of relying on like

00:10:32 --> 00:10:37
the reputation signal that you normally

00:10:34 --> 00:10:40
can rely on you shouldn't require the

00:10:36 --> 00:10:41
reputation signal yeah the person you're

00:10:39 --> 00:10:43
dealing with this should maybe that's

00:10:40 --> 00:10:45
omeone that's completely unknown they

00:10:42 --> 00:10:48
may be across the world from you and

00:10:44 --> 00:10:49
someone you they will forever remain a

00:10:47 --> 00:10:51
stranger and somehow we have to

00:10:48 --> 00:10:55
manufacture a different kind of trust

00:10:50 --> 00:10:57
yes a trust that guarantees to me that

00:10:54 --> 00:10:58
my file will be stored right and that

00:10:56 --> 00:11:00
also guarantees to the person who's

00:10:57 --> 00:11:02
toring the file that they'll get paid

00:10:59 --> 00:11:03
yeah for the storage and so then that's

00:11:01 --> 00:11:06
where sort of the cryptographic

00:11:02 --> 00:11:08
properties of the protocol come in it's

00:11:05 --> 00:11:10
adjusting protocols a trust in

00:11:07 --> 00:11:14
cryptography rather than a trust in

00:11:09 --> 00:11:17
people yes exactly you know traditional

00:11:13 --> 00:11:19
business-to-consumer sort of economics

00:11:16 --> 00:11:21
run on a trust in you know the

00:11:18 --> 00:11:24
incentives of a business right

00:11:20 --> 00:11:26
whereas we want in an in a decentralized

00:11:23 --> 00:11:28
storage tower to replace trust and

00:11:25 --> 00:11:30
individuals with trust in a protocol

00:11:27 --> 00:11:31
yeah Bruce snare the

00:11:29 --> 00:11:35
Kirti researcher has this great

00:11:30 --> 00:11:37
framework for trust where he talks about

00:11:34 --> 00:11:39
he four different mechanisms that our

00:11:36 --> 00:11:42
species uses to bootstrap trust okay

00:11:38 --> 00:11:45
the first two are morals and reputation

00:11:41 --> 00:11:48
through the very social elements of

00:11:44 --> 00:11:50
interactions where you and I we know

00:11:47 --> 00:11:52
each other and we we have like direct

00:11:49 --> 00:11:54
contact with the direct interactions is

00:11:51 --> 00:11:56
we can come to trust one another

00:11:53 --> 00:11:57
and can we go to drag from my files

00:11:55 --> 00:12:01
exactly

00:11:56 --> 00:12:04
then there's the the institutional trust

00:12:00 --> 00:12:06
where you use like sort of companies

00:12:03 --> 00:12:08
like Amazon or institutions that have a

00:12:05 --> 00:12:11
very long track record and they have a

00:12:07 --> 00:12:13
sort of a significant presence as the

00:12:10 --> 00:12:15
intermediary intermediaries for

00:12:12 --> 00:12:17
interactions and those are the ones who

00:12:14 --> 00:12:18
kind of enforce the rules and allow you

00:12:16 --> 00:12:20
to trust a complete stranger because

00:12:17 --> 00:12:23
they're accountable to this institution

00:12:19 --> 00:12:25
yeah and the final one is security

00:12:22 --> 00:12:27
systems so you trust that the building

00:12:24 --> 00:12:30
is safer just by a virtue of it having a

00:12:26 --> 00:12:32
padlock or just a lock on the on the

00:12:29 --> 00:12:34
front door and so so what you're saying

00:12:31 --> 00:12:36
here is we're shifting trust from

00:12:33 --> 00:12:38
institutions in the case of sort of

00:12:35 --> 00:12:40
Amazon and the cloud providers to

00:12:37 --> 00:12:43
provide storage to security systems

00:12:39 --> 00:12:46
cryptography and and sort of incentive

00:12:42 --> 00:12:48
structures built into protocols instead

00:12:45 --> 00:12:50
which which are kind of changes it

00:12:47 --> 00:12:51
dynamic because now there's there's

00:12:49 --> 00:12:53
there are fewer humans involved and

00:12:50 --> 00:12:54
therefore this could be more scalable

00:12:52 --> 00:12:56
you can scale trust to a larger number

00:12:53 --> 00:12:59
of people you could imagine this being a

00:12:55 --> 00:13:01
truly global decentralized network for

00:12:58 --> 00:13:04
storage where everyone can participate

00:13:00 --> 00:13:06
because because the security is no

00:13:03 --> 00:13:07
longer provided by by some human entity

00:13:05 --> 00:13:12
that has to be involved in all those

00:13:06 --> 00:13:14
interactions right so great so the

00:13:11 --> 00:13:16
concerns then are if I if I put a file

00:13:13 --> 00:13:18
on the network and then someone claims

00:13:15 --> 00:13:22
to be storing it they may be lying to me

00:13:17 --> 00:13:23
right and so so how do we what what

00:13:21 --> 00:13:26
other kinds of attacks are there there's

00:13:22 --> 00:13:28
um I know there's a history of

00:13:25 --> 00:13:30
other building blocks and cryptography

00:13:27 --> 00:13:33
that or elated like proofs of proof of

00:13:29 --> 00:13:35
storage and proofs of retrieve ability

00:13:32 --> 00:13:36
eah which kind of get at this but I

00:13:34 --> 00:13:39
don't fully solve the problem I'd love

00:13:35 --> 00:13:41
to let's pick that apart yeah so if

00:13:38 --> 00:13:43
you're just talking about the problem of

00:13:41 --> 00:13:45
I put my file into

00:13:42 --> 00:13:49
a decentralized storage network and I

00:13:44 --> 00:13:52
asked some node whose reputation I have

00:13:48 --> 00:13:54
no clue about to store my file then how

00:13:51 --> 00:13:57
can i cryptographically verify that

00:13:53 --> 00:13:59
here's no destroying my file and that

00:13:56 --> 00:14:03
only requires a proof of retrieve

00:13:58 --> 00:14:05
ability that's a communication efficient

00:14:02 --> 00:14:07
proof meaning I don't need to ask for

00:14:04 --> 00:14:09
the entire file back obviously asking

00:14:06 --> 00:14:10
for the entire file back is one way of

00:14:08 --> 00:14:14
verifying that they still are storing

00:14:09 --> 00:14:17
the file but it is a it is a proof where

00:14:13 --> 00:14:20
they just send me you know a small tag

00:14:16 --> 00:14:24
in response to a challenge that I send

00:14:19 --> 00:14:27
them and I'm able to verify from this

00:14:23 --> 00:14:28
interaction that indeed this node is

00:14:26 --> 00:14:29
toring my file that's a proof of

00:14:27 --> 00:14:32
retrieve ability yeah

00:14:28 --> 00:14:35
prove that they can retrieve the file

00:14:31 --> 00:14:37
when you start to ask well let's say I

00:14:34 --> 00:14:41
ask this node to store multiple copies

00:14:36 --> 00:14:43
of the file that again that's a proof of

00:14:40 --> 00:14:48
data replication but in this setting

00:14:42 --> 00:14:50
where the I'm interested in just that

00:14:47 --> 00:14:53
his node is storing my file right and I

00:14:49 --> 00:14:56
know what this file is there are ways of

00:14:52 --> 00:14:57
just using proofs of retrieve ability to

00:14:55 --> 00:15:01
verify that there's no destroying

00:14:56 --> 00:15:04
multiple copies of that file but then

00:15:00 --> 00:15:07
when you start to talk about you know

00:15:03 --> 00:15:09
the economics of an entire decentralized

00:15:06 --> 00:15:11
storage network it seems quite

00:15:08 --> 00:15:14
impractical to say okay well you're a

00:15:10 --> 00:15:15
user if you want to store your files in

00:15:13 --> 00:15:17
this network then you have to constantly

00:15:14 --> 00:15:19
ping the network to check that it's

00:15:16 --> 00:15:21
till being stored there and that's what

00:15:18 --> 00:15:24
you would somewhat need with a standard

00:15:20 --> 00:15:28
proof of retrieve ability there are ways

00:15:23 --> 00:15:30
of outsourcing the verification of a

00:15:27 --> 00:15:34
proof of retrieve ability so that you

00:15:29 --> 00:15:36
could say ask other nodes to verify that

00:15:33 --> 00:15:40
your files are still being stored there

00:15:35 --> 00:15:43
on your behalf and and so that's an

00:15:39 --> 00:15:45
other viable direction and that's sort

00:15:42 --> 00:15:50
of outsourced of all proofs of retrieve

00:15:44 --> 00:15:52
ability but again then we start to come

00:15:49 --> 00:15:54
to the questions of incentives and who

00:15:51 --> 00:15:56
is really incentivized to check that

00:15:53 --> 00:15:59
other people are storing your files

00:15:55 --> 00:16:02
the economics of that don't necessarily

00:15:58 --> 00:16:04
work out right you could possibly pay

00:16:01 --> 00:16:06
other nodes to check that other nodes

00:16:03 --> 00:16:08
are storing your files but then it

00:16:05 --> 00:16:13
starts to look a bit more like Amazon

00:16:07 --> 00:16:15
again say and and so proof of

00:16:12 --> 00:16:19
replication which is the most recent

00:16:14 --> 00:16:24
addition to proofs of storage come

00:16:18 --> 00:16:27
basically integrates this idea of doing

00:16:23 --> 00:16:29
the work of checking that files are

00:16:26 --> 00:16:32
being stored with the decentralized work

00:16:28 --> 00:16:35
that blockchains

00:16:31 --> 00:16:37
brought right we look towards something

00:16:34 --> 00:16:41
like Bitcoin as an example of a system

00:16:36 --> 00:16:42
that you know incentivizes the

00:16:40 --> 00:16:45
collective effort of many different

00:16:41 --> 00:16:48
nodes in putting in work into a system

00:16:44 --> 00:16:51
the thing about Bitcoin is that all that

00:16:47 --> 00:16:54
work is just sort of computational

00:16:50 --> 00:16:57
energy that is that is a somewhat wasted

00:16:53 --> 00:17:00
although it maintains the system in

00:16:56 --> 00:17:02
balance and the current directions for

00:16:59 --> 00:17:04
decentralized file storage networks

00:17:01 --> 00:17:07
takes that same idea and says how can we

00:17:03 --> 00:17:11
incentivize the massive participation of

00:17:06 --> 00:17:13
verifiers and storage nodes and and

00:17:10 --> 00:17:15
clients who are storing their files in

00:17:12 --> 00:17:18
this network and incentivize the

00:17:14 --> 00:17:21
collective work that it takes to check

00:17:17 --> 00:17:25
that files are still being stored verify

00:17:20 --> 00:17:28
ou know proofs of storage in a

00:17:24 --> 00:17:30
decentralized way where the nodes that

00:17:27 --> 00:17:32
are verifying that files are being

00:17:29 --> 00:17:34
stored can earn rewards for that or

00:17:31 --> 00:17:37
eceive payments and are and are

00:17:33 --> 00:17:38
agnostic to the actual data that are

00:17:36 --> 00:17:42
that that is being stored so that

00:17:37 --> 00:17:44
here's no preference towards one type

00:17:41 --> 00:17:46
of data if it's more valuable for a

00:17:43 --> 00:17:48
business or not or another type of data

00:17:45 --> 00:17:51
nybody can put data into the system

00:17:47 --> 00:17:53
data is data and the nodes that are

00:17:50 --> 00:17:55
maintaining the network are equally

00:17:52 --> 00:17:57
incentivized to make sure that that data

00:17:54 --> 00:17:59
is still there you're getting us

00:17:56 --> 00:18:01
omething that's that's really I think

00:17:58 --> 00:18:04
that it is that is like part of what's

00:18:00 --> 00:18:06
o beautiful about the space is that it

00:18:03 --> 00:18:07
had so much of the security and so much

00:18:05 --> 00:18:10
of what makes everything work is

00:18:07 --> 00:18:13
combination of incentive structures with

00:18:09 --> 00:18:14
sort of cryptographic security so I

00:18:12 --> 00:18:16
think the inside that you're

00:18:13 --> 00:18:17
articulating now is that sort of in the

00:18:15 --> 00:18:19
world of Bitcoin the security of the

00:18:16 --> 00:18:21
system comes from the computational

00:18:18 --> 00:18:22
power of the participants and the

00:18:20 --> 00:18:25
computational power and a sense kind of

00:18:21 --> 00:18:27
meters the degree of influence that the

00:18:24 --> 00:18:29
participants have over the system but

00:18:26 --> 00:18:31
he problem is that that computational

00:18:28 --> 00:18:32
power does nothing more than that and

00:18:30 --> 00:18:34
it's otherwise just wasted it's

00:18:31 --> 00:18:37
otherwise just really just empty cycles

00:18:33 --> 00:18:39
that are solving sort of puzzles locally

00:18:36 --> 00:18:41
and submitting answer solutions to those

00:18:38 --> 00:18:43
puzzles is a way of gaining the ability

00:18:40 --> 00:18:45
to influence the state of the Bitcoin

00:18:42 --> 00:18:47
ledger and that so the insight that

00:18:44 --> 00:18:49
you're describing now is you can combine

00:18:46 --> 00:18:51
sort of that incentive structure which

00:18:48 --> 00:18:53
really does get people to do real work

00:18:50 --> 00:18:55
it just so happens to be useless with

00:18:52 --> 00:18:57
sort of this cryptographic building

00:18:54 --> 00:19:00
blocks such that the work that people do

00:18:56 --> 00:19:01
to secure a network now is not just

00:18:59 --> 00:19:03
useless computation but instead is

00:19:00 --> 00:19:06
toring files that people actually want

00:19:02 --> 00:19:08
o get stored and so in in this same

00:19:05 --> 00:19:12
vein in the same stroke as you secure

00:19:07 --> 00:19:14
the ledger for this storage network that

00:19:11 --> 00:19:15
he tracts payments and tracks

00:19:13 --> 00:19:17
transactions and so on you're also

00:19:14 --> 00:19:20
incentivizing people to store real files

00:19:16 --> 00:19:22
and you you combine those two things and

00:19:19 --> 00:19:24
kind of braid them into a single thing

00:19:21 --> 00:19:26
that's right which which kind of very

00:19:23 --> 00:19:29
elegantly solves a problem in and

00:19:25 --> 00:19:30
provides security and also gets people

00:19:28 --> 00:19:32
to store the things you want them to

00:19:29 --> 00:19:35
store right and to think about things

00:19:31 --> 00:19:39
from the perspective of incentives what

00:19:34 --> 00:19:42
bitcoin is a very interesting example of

00:19:38 --> 00:19:44
is a network that is contributing again

00:19:41 --> 00:19:48
so much energy and collective effort

00:19:43 --> 00:19:50
owards one particular goal which is

00:19:47 --> 00:19:52
verifying the Bitcoin blockchain right

00:19:49 --> 00:19:55
and so it's but it's an example of

00:19:51 --> 00:19:58
collective effort being poured in from

00:19:54 --> 00:20:02
you know a decentralized network and so

00:19:57 --> 00:20:04
the goal in current efforts and

00:20:01 --> 00:20:06
in my line of research in

00:20:03 --> 00:20:09
decentralized storage networks is to

00:20:05 --> 00:20:12
turn the problem of verifying storage in

00:20:08 --> 00:20:14
the network into some kind of unified

00:20:11 --> 00:20:16
goal like Bitcoin where you get many did

00:20:13 --> 00:20:18
many different nodes in the network to

00:20:15 --> 00:20:20
participate in some collective effort

00:20:17 --> 00:20:23
owards one common goal and they're

00:20:19 --> 00:20:25
agnostic to the exact effect of that

00:20:22 --> 00:20:27
goal in this case it's throwing files

00:20:24 --> 00:20:34
yes and so it just seems to be much

00:20:27 --> 00:20:38
easier to at least based on Bitcoin as a

00:20:33 --> 00:20:39
case study right to offer some kind of

00:20:37 --> 00:20:41
reward structure where there's just one

00:20:38 --> 00:20:42
task that people need to do solve

00:20:40 --> 00:20:45
proof-of-work puzzles and in this case

00:20:41 --> 00:20:47
stealth proof of storage puzzles and if

00:20:44 --> 00:20:48
you get everybody to just participate in

00:20:46 --> 00:20:51
solving proof of storage puzzles and

00:20:47 --> 00:20:53
they can earn rewards from doing that if

00:20:50 --> 00:20:56
we can design everything in the

00:20:52 --> 00:20:58
background to you know turn that

00:20:55 --> 00:21:01
collective effort into securing the

00:20:57 --> 00:21:03
decentralized storage network that seems

00:21:00 --> 00:21:06
to be a really compelling direction

00:21:02 --> 00:21:08
towards towards fixing all these you

00:21:05 --> 00:21:09
know incentive and and security issues

00:21:07 --> 00:21:12
with decentralized storage networks

00:21:08 --> 00:21:13
absolutely and I think yeah I mean one

00:21:11 --> 00:21:15
of the top of mind concerns at least in

00:21:12 --> 00:21:16
the sort of the sort of mainstream media

00:21:14 --> 00:21:19
bout crypto is that it's so

00:21:15 --> 00:21:21
environmentally wasteful I mean that

00:21:18 --> 00:21:22
sort of the Bitcoin blockchain alone and

00:21:20 --> 00:21:24
it consumes like more power than like

00:21:21 --> 00:21:25
Denmark or something like this right and

00:21:23 --> 00:21:27
so this is kind of an interesting

00:21:24 --> 00:21:29
direction where you can you can sort of

00:21:26 --> 00:21:31
bootstrap security and at the same time

00:21:28 --> 00:21:32
yeah I also do work that's as useful and

00:21:30 --> 00:21:34
is not really chess yes that's it that's

00:21:31 --> 00:21:38
a secondary point that's that's

00:21:33 --> 00:21:41
compelling about this yeah where is the

00:21:37 --> 00:21:44
footprint you can ask what's the what's

00:21:40 --> 00:21:48
the say carbon footprint of a blockchain

00:21:43 --> 00:21:49
system or a decentralized system and you

00:21:47 --> 00:21:52
could say that in a decentralized

00:21:48 --> 00:21:55
storage network that is based on proof

00:21:51 --> 00:22:00
storage the footprint is something

00:21:54 --> 00:22:02
useful it's file storage itself so that

00:21:59 --> 00:22:03
I want to hit on the idea of replication

00:22:01 --> 00:22:05
the thing that that's kind of an

00:22:02 --> 00:22:07
important piece of this why why is

00:22:04 --> 00:22:11
replication important I mean I imagine

00:22:06 --> 00:22:13
my sense is that you as a consumer would

00:22:10 --> 00:22:15
like your file to be stored multiple

00:22:12 --> 00:22:18
times in the network because otherwise

00:22:14 --> 00:22:20
if the one person that you you're kind

00:22:17 --> 00:22:23
of contracting with for storage happens

00:22:19 --> 00:22:26
to disappear or happens to go away you

00:22:22 --> 00:22:28
still have your file set a stored

00:22:25 --> 00:22:30
undant lean with other people at the

00:22:27 --> 00:22:31
same time which kind of gets us why why

00:22:29 --> 00:22:33
replication is important and it's not

00:22:30 --> 00:22:36
just really a single sort of proof of

00:22:32 --> 00:22:39
storage right replication is what gives

00:22:35 --> 00:22:41
you fault tolerance and say censorship

00:22:38 --> 00:22:43
resistance if there's only one node

00:22:40 --> 00:22:45
that's storing your file then if that

00:22:42 --> 00:22:47
node goes down you could lose your data

00:22:44 --> 00:22:49
you know and from another perspective if

00:22:46 --> 00:22:52
there's only one node storing your file

00:22:48 --> 00:22:56
then if anybody could figure out what

00:22:51 --> 00:22:58
node that is then then then one could

00:22:55 --> 00:23:00
launch it you know a denial of service

00:22:57 --> 00:23:03
attack against that node and of course

00:22:59 --> 00:23:06
and therefore effectively censor you

00:23:02 --> 00:23:08
without being the actual node that's

00:23:05 --> 00:23:11
responsible for yours for your data

00:23:07 --> 00:23:13
so that's why replication is important

00:23:10 --> 00:23:13
o a user

00:23:12 --> 00:23:19
eplication might be important to a

00:23:16 --> 00:23:21
network for the same reasons right so

00:23:18 --> 00:23:23
maybe there's not one particular user

00:23:20 --> 00:23:25
that cares so much about replication of

00:23:22 --> 00:23:27
the entire system but if we want to

00:23:24 --> 00:23:31
maintain the collective state of the

00:23:26 --> 00:23:34
ntire system and and you know then then

00:23:30 --> 00:23:41
the network's care about you know fault

00:23:33 --> 00:23:42
olerant data storage as well and and so

00:23:40 --> 00:23:46
that's what's important about

00:23:41 --> 00:23:49
replication from users perspective yeah

00:23:45 --> 00:23:50
and so presumably as a user so I I know

00:23:48 --> 00:23:54
I want my files to be replicated

00:23:49 --> 00:23:55
multiple times and I want also the

00:23:53 --> 00:23:56
knowledge that those kind of replicas

00:23:54 --> 00:23:58
are independent from one another and

00:23:55 --> 00:24:01
that and I'd like there's some

00:23:57 --> 00:24:03
redundancy there that doesn't put all of

00:24:00 --> 00:24:06
my files at risk if a single sort of

00:24:02 --> 00:24:08
node goes down that's right so I can

00:24:05 --> 00:24:11
imagine here a potential attack which I

00:24:07 --> 00:24:14
know is the proofs of replication

00:24:10 --> 00:24:15
resolved is that I I could pretend if

00:24:13 --> 00:24:17
I'm an attacker I could pretend to be

00:24:14 --> 00:24:20
many different people and I could

00:24:16 --> 00:24:22
pretend to be storing the file multiple

00:24:19 --> 00:24:24
times as if I'm sort of independent

00:24:21 --> 00:24:25
people who all have the file

00:24:23 --> 00:24:27
independently from one

00:24:24 --> 00:24:30
but really just have the file once and

00:24:26 --> 00:24:32
kind of just sort of sort of route

00:24:29 --> 00:24:35
responses to each of my like fake

00:24:31 --> 00:24:38
identities to pretend that the file is

00:24:34 --> 00:24:40
really stored multiple times so how do

00:24:37 --> 00:24:42
proofs of replication address that

00:24:39 --> 00:24:45
problem yeah well let me clear up one

00:24:41 --> 00:24:47
thing about proof of replication first

00:24:44 --> 00:24:52
perhaps the the name proof of

00:24:46 --> 00:24:54
replication is perhaps somewhat

00:24:51 --> 00:24:56
misleading in that I think when people

00:24:53 --> 00:24:59
hear proof of replication they think oh

00:24:55 --> 00:25:02
well this is a proof that a file is

00:24:58 --> 00:25:07
replicated many times but really what

00:25:01 --> 00:25:08
proof you replicate the problem of you

00:25:06 --> 00:25:10
know faking that you're storing multiple

00:25:07 --> 00:25:15
copies of file versus storing one copy

00:25:09 --> 00:25:18
of the file is the same as proving that

00:25:14 --> 00:25:21
you're just using storage in order to

00:25:17 --> 00:25:24
store data because another way of

00:25:20 --> 00:25:25
raming this is to say that well I might

00:25:23 --> 00:25:29
not actually be storing anything useful

00:25:24 --> 00:25:31
at all I could be storing the digits of

00:25:28 --> 00:25:37
pi which I could just generate on my own

00:25:30 --> 00:25:40
right or well or rather you know III

00:25:36 --> 00:25:41
could store some sequence that I can

00:25:39 --> 00:25:44
generate like the Fibonacci sequence

00:25:40 --> 00:25:46
right and that's what I'm that's what

00:25:43 --> 00:25:51
I'm actually filling of my data with and

00:25:45 --> 00:25:55
so just because I can retrieve this

00:25:50 --> 00:25:56
unlimited you know a long piece of data

00:25:54 --> 00:26:00
which is really uninteresting and I'm

00:25:55 --> 00:26:03
not useful then that doesn't mean that

00:25:59 --> 00:26:06
I'm actually using all that space or so

00:26:02 --> 00:26:08
n the other hand proving that you're

00:26:05 --> 00:26:11
storing and that's what a proof of

00:26:07 --> 00:26:16
replication achieves it it proves that

00:26:10 --> 00:26:19
you're dedicating space to storing data

00:26:15 --> 00:26:21
yeah right it doesn't actually matter

00:26:18 --> 00:26:22
what data but what's important is that

00:26:20 --> 00:26:24
you're using the space and that you

00:26:21 --> 00:26:27
could be using the space to store any

00:26:23 --> 00:26:30
file that you would like it says okay

00:26:26 --> 00:26:32
proof of retrieve ability then verifies

00:26:29 --> 00:26:37
that you're storing a particular file

00:26:31 --> 00:26:38
and a proof of data replication proves

00:26:36 --> 00:26:42
that you're storing

00:26:37 --> 00:26:45
multiple copies of the file right so

00:26:41 --> 00:26:46
that's just a clarification of what

00:26:44 --> 00:26:48
hese sort of different names for

00:26:45 --> 00:26:48
different kinds of proof of storage are

00:26:47 --> 00:26:50
yeah

00:26:47 --> 00:26:55
that's hopeful yeah but to come back to

00:26:49 --> 00:26:56
your question you asked yeah how do we

00:26:54 --> 00:26:58
deal with the head of the civil problem

00:26:55 --> 00:27:01
of having kind of a person impersonating

00:26:57 --> 00:27:03
yeah people right so the problem with a

00:27:00 --> 00:27:05
person impersonating multiple people and

00:27:02 --> 00:27:07
pretending to store multiple copies of a

00:27:04 --> 00:27:11
file but storing one is a case of

00:27:06 --> 00:27:13
somebody who is pretending to use less

00:27:10 --> 00:27:18
torage than they claim to exactly to

00:27:12 --> 00:27:21
storing files yeah arbitrarily right if

00:27:17 --> 00:27:24
you wanted to guarantee that somebody is

00:27:20 --> 00:27:27
toring multiple copies of a file then

00:27:23 --> 00:27:31
really the only way of doing that is to

00:27:26 --> 00:27:34
encrypt the file independently say a

00:27:30 --> 00:27:38
hundred times give them a hundred

00:27:33 --> 00:27:41
encrypted copies of the file and have

00:27:37 --> 00:27:43
them store that there there really is no

00:27:40 --> 00:27:45
way to force someone to store multiple

00:27:42 --> 00:27:48
copies of a file the only thing that you

00:27:45 --> 00:27:52
can cryptographically guarantee is that

00:27:47 --> 00:27:56
somebody is using as much space as they

00:27:51 --> 00:27:58
claim to to storing file size and so

00:27:55 --> 00:28:01
that thing like say and as much n times

00:27:57 --> 00:28:04
the size of the file as much as storage

00:28:00 --> 00:28:06
I claim exactly I claim to be storing

00:28:03 --> 00:28:08
the lord of the rings' trilogy we know

00:28:05 --> 00:28:10
the lord of the rings' trilogy takes up

00:28:07 --> 00:28:12
ten gigabytes of storage yeah I have a

00:28:09 --> 00:28:15
10 gigabyte disk and I say I'm using my

00:28:11 --> 00:28:21
10 gigabyte disk to storing you know

00:28:14 --> 00:28:23
this set of movies yeah you you can't or

00:28:20 --> 00:28:25
let's say that I now say I'm claiming

00:28:22 --> 00:28:27
that I'm storing 10 copies of that movie

00:28:24 --> 00:28:30
okay so I'm using a hundred gigabytes of

00:28:26 --> 00:28:34
data yes so you can't really verify that

00:28:29 --> 00:28:36
I'm storing ten copies of this of this

00:28:33 --> 00:28:37
movie unless you specifically encrypt

00:28:35 --> 00:28:37
hem give them to me and I can't really

00:28:36 --> 00:28:39
deal

00:28:36 --> 00:28:43
with them or understand what they are

00:28:38 --> 00:28:47
but what you can verify is that I'm

00:28:42 --> 00:28:50
actually using 100 gigabytes to store

00:28:46 --> 00:28:54
the Lord of the Rings yeah and what you

00:28:49 --> 00:28:56
can do is you can design this proof such

00:28:53 --> 00:28:58
that there's no economic incentive for

00:28:55 --> 00:29:01
me to use that storage for any other

00:28:57 --> 00:29:04
purpose there's no cost or in terms of

00:29:00 --> 00:29:06
storage there's no space savings that I

00:29:03 --> 00:29:08
could achieve by trying to fool you I

00:29:05 --> 00:29:11
see and there's no way of encoding like

00:29:07 --> 00:29:14
other additional useful bits instead

00:29:10 --> 00:29:17
exactly right and so if you take the

00:29:13 --> 00:29:18
perspective that nodes in a

00:29:16 --> 00:29:22
decentralized storage network are going

00:29:17 --> 00:29:28
to be you know acting not necessarily

00:29:21 --> 00:29:32
maliciously but rationally and that if

00:29:27 --> 00:29:35
they could earn more dollars by saving a

00:29:31 --> 00:29:40
little bit of storage and therefore

00:29:34 --> 00:29:43
destroying the redundant format of ten

00:29:39 --> 00:29:45
copies of a movie then they would take

00:29:42 --> 00:29:48
that action and so you want to design a

00:29:44 --> 00:29:50
system where they doors there's no

00:29:47 --> 00:29:51
incentive to do that it won't be at all

00:29:49 --> 00:29:54
more profit exactly at a very high level

00:29:50 --> 00:29:56
yes in like maybe say the next three to

00:29:53 --> 00:29:59
four minutes yeah how do proofs of

00:29:55 --> 00:30:04
replication work great question proofs

00:29:58 --> 00:30:08
of replication take this concept called

00:30:03 --> 00:30:11
a proof of space which is one of the

00:30:07 --> 00:30:12
flavors of a proof of storage and it

00:30:10 --> 00:30:13
sort of combines it with the proof of

00:30:11 --> 00:30:17
retrieve ability which we've been

00:30:12 --> 00:30:21
talking about remember the goal of a

00:30:16 --> 00:30:25
proof of replication is to design a a

00:30:20 --> 00:30:28
proof that I am using say a hundred

00:30:24 --> 00:30:31
gigabytes of data or a hundred gigabytes

00:30:27 --> 00:30:34
of disk storage in order to actually

00:30:30 --> 00:30:36
store data and that if I claim I'm using

00:30:33 --> 00:30:40
this a hundred gigabytes of data to

00:30:35 --> 00:30:44
storing a set of movies then I don't

00:30:39 --> 00:30:47
have any incentive to not store those

00:30:43 --> 00:30:49
movies right that I can't really use

00:30:46 --> 00:30:51
past them if I pass the protocol or I

00:30:48 --> 00:30:53
passed the proof

00:30:50 --> 00:30:57
you're convinced that I'm actually using

00:30:52 --> 00:31:00
all of my disk space yeah and I can't

00:30:56 --> 00:31:03
really use some strategy of fooling you

00:30:59 --> 00:31:06
in order to save more than a negligible

00:31:02 --> 00:31:07
fraction of my disk space and therefore

00:31:05 --> 00:31:10
I might as well follow the honest

00:31:06 --> 00:31:12
protocol and actually use that space to

00:31:09 --> 00:31:17
store the movies okay that's the goal

00:31:11 --> 00:31:20
and so a proof of space is a a concept

00:31:16 --> 00:31:23
in computer science that preceeded proof

00:31:19 --> 00:31:25
replication and the goal of proof of

00:31:22 --> 00:31:28
space was only to prove that you're

00:31:24 --> 00:31:31
using a hundred gigabytes of disk to

00:31:27 --> 00:31:34
store arbitrary bytes of data and proofs

00:31:30 --> 00:31:36
of space do exactly that they store

00:31:33 --> 00:31:37
arbitrary bytes of data they don't store

00:31:35 --> 00:31:41
interesting data actually they store

00:31:36 --> 00:31:44
randomly generated bits essentially so

00:31:40 --> 00:31:48
it's not anything interesting and so

00:31:43 --> 00:31:52
what proofs of replication do are they

00:31:47 --> 00:31:56
change the way proofs of space work so

00:31:51 --> 00:31:59
that instead of storing filling your

00:31:55 --> 00:32:02
drive with arbitrary junk data while

00:31:58 --> 00:32:05
producing this proof of space you can

00:32:01 --> 00:32:07
fill it with really any file that you

00:32:04 --> 00:32:10
want to so you can fill it with useful

00:32:06 --> 00:32:12
data and the rest of the protocol

00:32:09 --> 00:32:14
operates in a very similar way you're

00:32:11 --> 00:32:16
sponding to challenges but the point

00:32:13 --> 00:32:19
is that the underlying thing that you're

00:32:15 --> 00:32:22
storing is not junk data it's the data

00:32:18 --> 00:32:25
that you want to store it the tricky

00:32:21 --> 00:32:29
part of building a proof of replication

00:32:24 --> 00:32:31
was that remember there's this added

00:32:28 --> 00:32:33
constraint that we want to make sure

00:32:30 --> 00:32:38
there's really no incentive to cheat

00:32:32 --> 00:32:41
proof of space was used as a spam

00:32:37 --> 00:32:43
prevention mechanism or it's simple

00:32:40 --> 00:32:48
resistance mechanism similar to proof of

00:32:42 --> 00:32:50
work the goal was to to make it if

00:32:47 --> 00:32:52
you're passing a proof of space then

00:32:49 --> 00:32:55
maybe you can save 10% of your data or

00:32:51 --> 00:32:57
even 50% of your of your of your disk

00:32:54 --> 00:32:59
stores you can pretend like you're using

00:32:56 --> 00:33:02
a hundred gigabytes but you're really

00:32:58 --> 00:33:03
only using 50 gigabytes that's probably

00:33:01 --> 00:33:06
good enough for spam prevention

00:33:02 --> 00:33:08
you know it makes it difficult if you

00:33:05 --> 00:33:10
have some fancy algorithm that gives you

00:33:07 --> 00:33:13
an advantage it's still difficult right

00:33:09 --> 00:33:15
he hope with a simple resistance

00:33:12 --> 00:33:18
mechanism then is that if somebody comes

00:33:14 --> 00:33:20
up with a fancy way of saving 50% of the

00:33:17 --> 00:33:22
storage so will everybody so everybody's

00:33:19 --> 00:33:25
till in competition right

00:33:21 --> 00:33:29
he problem with proof of replication

00:33:24 --> 00:33:30
that's not good enough you want this

00:33:28 --> 00:33:33
proof of space to be extraordinarily

00:33:29 --> 00:33:35
tight what do I mean by tight I mean

00:33:32 --> 00:33:38
that if you claim to be using 100

00:33:34 --> 00:33:41
gigabytes of data or of disk space

00:33:37 --> 00:33:44
actually you're actually using you know

00:33:40 --> 00:33:48
99% of that space right you're using as

00:33:43 --> 00:33:50
close to 100 gigabytes as possible and

00:33:47 --> 00:33:53
that means that no matter what strategy

00:33:49 --> 00:33:56
ou use you which would deviate from

00:33:52 --> 00:33:58
this honest protocol that actually

00:33:55 --> 00:34:00
stores the movies you won't really be

00:33:57 --> 00:34:03
able to save much and therefore you

00:33:59 --> 00:34:07
won't really be able to earn much more

00:34:02 --> 00:34:10
and and the other penalties for failing

00:34:06 --> 00:34:13
to store the file that one might impose

00:34:09 --> 00:34:14
you know in an ad hoc way would be

00:34:12 --> 00:34:17
nough to just push you over the barrier

00:34:13 --> 00:34:19
to really behaving honestly right if

00:34:16 --> 00:34:21
there's some risk that you'll be caught

00:34:18 --> 00:34:24
hen you'll just behave honestly because

00:34:20 --> 00:34:27
the expected savings is too small yes

00:34:23 --> 00:34:29
and so and so that's really what proof

00:34:26 --> 00:34:31
replication is it's a really tight proof

00:34:28 --> 00:34:35
space that you can use to store

00:34:30 --> 00:34:37
useful data giorgia and that's I mean

00:34:34 --> 00:34:42
without going into the techniques of how

00:34:36 --> 00:34:44
e really build that which are covered

00:34:41 --> 00:34:46
in my latest series of papers and I can

00:34:43 --> 00:34:47
talk a little bit about at a high level

00:34:45 --> 00:34:50
it's the most important thing to

00:34:46 --> 00:34:52
understand is the task is to design a

00:34:49 --> 00:34:55
really really tight proof of space that

00:34:51 --> 00:34:57
you can use to store useful data what

00:34:54 --> 00:34:59
are some of the techniques then that

00:34:56 --> 00:35:01
people use to or that that you you guys

00:34:58 --> 00:35:06
have pioneered to create these proofs of

00:35:00 --> 00:35:08
replication good well let me first say

00:35:05 --> 00:35:10
what the basic technique behind a proof

00:35:07 --> 00:35:12
space is so the basic technique

00:35:09 --> 00:35:15
behind a proof of space I'm

00:35:11 --> 00:35:17
demonstrating to you that I am you

00:35:14 --> 00:35:21
know 100 gigabytes of data right so

00:35:16 --> 00:35:23
I fill my disk with basically a hundred

00:35:20 --> 00:35:25
gigabytes of data in a particular format

00:35:22 --> 00:35:30
especially crafted for this proof yeah

00:35:24 --> 00:35:33
and the and then I sort of compiled that

00:35:29 --> 00:35:36
into like this small tag that I give to

00:35:32 --> 00:35:41
you and then what you'll do is you'll

00:35:35 --> 00:35:44
repeatedly challenge me okay and the

00:35:40 --> 00:35:46
proof of space guarantees that I will

00:35:43 --> 00:35:50
only be able to respond to your

00:35:45 --> 00:35:52
challenges in a certain allotted time if

00:35:49 --> 00:35:55
I'm still storing all the data that I

00:35:51 --> 00:35:57
initially committed to store if I delete

00:35:54 --> 00:36:00
a fraction of the data that I initially

00:35:56 --> 00:36:03
committed to store I will fail to

00:35:59 --> 00:36:06
respond to your challenge in the

00:36:02 --> 00:36:08
allotted time okay so one way of

00:36:05 --> 00:36:09
thinking about this actually and this is

00:36:07 --> 00:36:11
pretty close to the way it really works

00:36:08 --> 00:36:15
is you literally ask me for pieces of

00:36:10 --> 00:36:17
the data that I'm storing and the the

00:36:14 --> 00:36:20
data is encoded in such a way that

00:36:16 --> 00:36:25
if I delete a small piece of the data it

00:36:19 --> 00:36:29
has the the deleting a small piece of

00:36:24 --> 00:36:31
that encoding and so it has a tremendous

00:36:28 --> 00:36:33
dependency on the other pieces of the

00:36:30 --> 00:36:35
ncoding which we're all derived from

00:36:32 --> 00:36:38
the original you know file format yeah

00:36:34 --> 00:36:40
and it has this property that if I

00:36:37 --> 00:36:42
delete a small portion then in order to

00:36:39 --> 00:36:45
read arrive that individual portion I'll

00:36:41 --> 00:36:46
basically have to do redo almost all the

00:36:44 --> 00:36:49
work I did to encode the entire thing

00:36:45 --> 00:36:53
and that encoding process takes a long

00:36:48 --> 00:36:55
time now in within the realm of proofs

00:36:52 --> 00:36:57
is faise there's two senses of time

00:36:54 --> 00:36:59
there's the total computational effort

00:36:56 --> 00:37:03
hat I put in to generating this file

00:36:58 --> 00:37:05
format and then there's also wall clock

00:37:02 --> 00:37:08
time or like how long it takes to

00:37:04 --> 00:37:11
actually do it even if I through massive

00:37:07 --> 00:37:14
parallel effort at doing this and the

00:37:10 --> 00:37:15
strongest type of proof of space would

00:37:13 --> 00:37:17
guarantee that if you gave me five

00:37:14 --> 00:37:19
minutes to respond to this challenge I

00:37:16 --> 00:37:21
would not be able to read arrived my

00:37:18 --> 00:37:23
entire encoding in five minutes no

00:37:20 --> 00:37:26
matter how much parallel effort I threw

00:37:22 --> 00:37:27
at it right and that's the the sense of

00:37:25 --> 00:37:30
security that

00:37:26 --> 00:37:34
my latest work in improve replication

00:37:29 --> 00:37:38
achieves and the way that proof of

00:37:33 --> 00:37:42
replication extends proof of space is

00:37:37 --> 00:37:44
not just in the way that one generates

00:37:41 --> 00:37:47
the encoding so that it's not just an

00:37:43 --> 00:37:50
encoding of random bits but it's

00:37:46 --> 00:37:52
actually a encoding of a file that can

00:37:49 --> 00:37:57
be decoded yes you might be interested

00:37:51 --> 00:37:59
in asking about the decoding step so

00:37:56 --> 00:38:02
when you talk about proof of replication

00:37:58 --> 00:38:04
as opposed to proof of space now it's

00:38:01 --> 00:38:06
not just important how long it took you

00:38:03 --> 00:38:08
to derive this encoding of the data

00:38:05 --> 00:38:10
right it's also important that you can

00:38:07 --> 00:38:12
decode the data and recover the recover

00:38:09 --> 00:38:15
the initial seed that you used to

00:38:11 --> 00:38:16
generate of course the data received

00:38:14 --> 00:38:19
being the file the seed in this case

00:38:15 --> 00:38:21
being the file and then you also might

00:38:18 --> 00:38:24
be interested in how long it takes you

00:38:20 --> 00:38:27
to decode the file if I have to take us

00:38:23 --> 00:38:30
long to decode the movie as it does to

00:38:26 --> 00:38:33
encode it which is by design a long time

00:38:29 --> 00:38:35
right there are security to hold then

00:38:32 --> 00:38:38
that might not be so desirable for a

00:38:34 --> 00:38:40
decentralized storage network so proof

00:38:37 --> 00:38:43
replication designs this encoding

00:38:39 --> 00:38:46
process in an asymmetric way so that it

00:38:42 --> 00:38:48
akes a long time to derive a encoding

00:38:45 --> 00:38:50
of a file in a very short period of time

00:38:47 --> 00:38:54
but a very short period of time to

00:38:49 --> 00:38:57
recover it or at least the decoding step

00:38:53 --> 00:38:57
could be parallelized yeah that's

00:38:56 --> 00:38:59
awesome

00:38:56 --> 00:39:01
so to summarize so what what you do is

00:38:58 --> 00:39:04
you encode the file in such a way that

00:39:00 --> 00:39:06
if well you give the file over to

00:39:03 --> 00:39:08
someone who's going to store it and

00:39:05 --> 00:39:10
presumably that that person may decide

00:39:07 --> 00:39:12
to try to cheat by deleting certain

00:39:09 --> 00:39:13
portions of the file and they

00:39:11 --> 00:39:15
could do that because they could always

00:39:12 --> 00:39:18
read arrive those parts from the other

00:39:14 --> 00:39:19
parts but that'll cost them some amount

00:39:17 --> 00:39:22
of computation to do it to doing that

00:39:18 --> 00:39:24
and so the the key improves the

00:39:21 --> 00:39:26
replication is that you encode the file

00:39:23 --> 00:39:28
in such a way that the dependencies

00:39:25 --> 00:39:30
between all of the pieces of the file

00:39:27 --> 00:39:33
are such that deleting any one piece

00:39:29 --> 00:39:36
will cause for a lot of the encoding to

00:39:32 --> 00:39:37
have to be redone to such a degree that

00:39:35 --> 00:39:38
he amount of time that that would take

00:39:36 --> 00:39:41
would put

00:39:37 --> 00:39:44
beyond the timeout phase that you know

00:39:40 --> 00:39:45
challenges the challenge demands that's

00:39:43 --> 00:39:46
what I would sort of fail to meet the

00:39:44 --> 00:39:47
challenge in time and then you would

00:39:45 --> 00:39:49
that's right they don't have the

00:39:46 --> 00:39:51
impractical you can think of it if

00:39:48 --> 00:39:53
you're familiar with error correcting

00:39:50 --> 00:39:55
codes then you can think of it in a

00:39:52 --> 00:39:58
similar way where the goal of an error

00:39:54 --> 00:40:00
correcting code is to encode an original

00:39:57 --> 00:40:02
file format such that if you lose some

00:39:59 --> 00:40:03
of the pieces of the file you can

00:40:01 --> 00:40:06
recover the whole file right the goal

00:40:02 --> 00:40:09
improve replication is if you you encode

00:40:06 --> 00:40:11
this file in such a way that if you lose

00:40:08 --> 00:40:13
a few pieces of the file it takes you a

00:40:10 --> 00:40:16
really really long time to read arrive

00:40:12 --> 00:40:19
the pieces of the encoding yes right and

00:40:15 --> 00:40:22
and therefore if your challenge

00:40:18 --> 00:40:24
s those pieces you won't be

00:40:21 --> 00:40:27
able to respond correctly on those

00:40:23 --> 00:40:30
pieces within the allotted time make

00:40:26 --> 00:40:33
sense switching gears slightly there's

00:40:29 --> 00:40:35
this a sort of a frequent question that

00:40:32 --> 00:40:39
arises in kind of in the world of crypto

00:40:34 --> 00:40:42
which is what are the implications of

00:40:38 --> 00:40:44
using a useful resource or a

00:40:41 --> 00:40:46
commoditized resource something like

00:40:43 --> 00:40:51
storage for the security of a network

00:40:45 --> 00:40:53
they like critique often is that if the

00:40:50 --> 00:40:54
thing that is securing the network is

00:40:52 --> 00:40:57
this is something that is highly

00:40:53 --> 00:40:59
commoditized then anyone who owns a lot

00:40:56 --> 00:41:00
of it could presumably just use it to

00:40:58 --> 00:41:03
attack the network because security the

00:40:59 --> 00:41:04
network sort of based on on kind of like

00:41:02 --> 00:41:07
the the use of this resource for

00:41:03 --> 00:41:09
security is if I if I say I am Amazon

00:41:06 --> 00:41:11
and I have an enormous amount of storage

00:41:08 --> 00:41:13
available that I could choose to just

00:41:10 --> 00:41:15
sort of deploy to attack the

00:41:12 --> 00:41:17
decentralized storage network then I

00:41:14 --> 00:41:20
could presumably do that whereas in a

00:41:16 --> 00:41:23
world where the resource is not really

00:41:19 --> 00:41:25
commoditized and actually depends on

00:41:22 --> 00:41:27
sort of special-made hardware for that

00:41:24 --> 00:41:29
particular box chain in the case of a

00:41:26 --> 00:41:31
Bitcoin for example that's much more

00:41:28 --> 00:41:32
difficult because no one other than

00:41:30 --> 00:41:35
people who are already buying it minding

00:41:31 --> 00:41:37
Bitcoin presumably have access to that

00:41:34 --> 00:41:38
hardware so as a result the security for

00:41:36 --> 00:41:41
that kind of network might be higher

00:41:37 --> 00:41:42
what are your thoughts about this this

00:41:40 --> 00:41:47
kind of debate it's a difficult question

00:41:42 --> 00:41:50
right the if you if you make it such

00:41:46 --> 00:41:53
that the the barriers to entry are

00:41:49 --> 00:41:54
ally specialized then you also make it

00:41:52 --> 00:41:56
difficult for just anyone to participate

00:41:53 --> 00:41:57
like the goal

00:41:55 --> 00:42:00
well the decentralized storage network

00:41:56 --> 00:42:03
was oh you have some extra space on your

00:41:59 --> 00:42:05
phone maybe you can participate and use

00:42:02 --> 00:42:07
some of that extra storage without doing

00:42:04 --> 00:42:09
anything else to contribute to the

00:42:06 --> 00:42:11
network but then you break bring up an

00:42:08 --> 00:42:14
excellent point which is that if there's

00:42:10 --> 00:42:15
economic incentives involved then maybe

00:42:13 --> 00:42:18
we do want to make it so that you have

00:42:14 --> 00:42:23
to invest in special you know hardware

00:42:17 --> 00:42:24
so that someone who has a lot of extra

00:42:22 --> 00:42:27
storage or just has a lot of storage

00:42:23 --> 00:42:30
that they're using to run a business

00:42:26 --> 00:42:32
like Amazon can't just pick up their you

00:42:29 --> 00:42:34
know what they're using for their

00:42:31 --> 00:42:37
everyday business or their everyday use

00:42:33 --> 00:42:40
in your case which is your phone and use

00:42:36 --> 00:42:44
it to attack this network I don't know

00:42:40 --> 00:42:47
that I have you know an excellent answer

00:42:43 --> 00:42:49
to that question because you you want to

00:42:46 --> 00:42:55
achieve some balance between those two

00:42:48 --> 00:42:56
extremes I would say that when you when

00:42:54 --> 00:42:58
you do something like proof of

00:42:55 --> 00:43:01
replication it's an extremely

00:42:57 --> 00:43:03
inconvenient way of storing files right

00:43:00 --> 00:43:08
so if Amazon were to convert all of its

00:43:02 --> 00:43:14
torage to you know proof of replication

00:43:07 --> 00:43:18
formatted storage it would be quite

00:43:13 --> 00:43:26
inconvenient if not if not costly

00:43:17 --> 00:43:29
actually and so to some degree right you

00:43:25 --> 00:43:31
want to design a system where there are

00:43:28 --> 00:43:33
specialized efforts that people need to

00:43:30 --> 00:43:34
go through in order to participate and

00:43:32 --> 00:43:37
you want to design a decentralized

00:43:33 --> 00:43:39
system where you don't want the massive

00:43:36 --> 00:43:40
you know cloud centers who are storing

00:43:38 --> 00:43:43
already storing a lot of data to find it

00:43:39 --> 00:43:45
really easy to convert all that data to

00:43:42 --> 00:43:49
a new format that's that's equally

00:43:44 --> 00:43:52
convenient but what you would do is you

00:43:48 --> 00:43:54
you you want to to encourage

00:43:51 --> 00:43:56
participation so the costs aren't

00:43:53 --> 00:43:58
exceedingly high of participating you

00:43:55 --> 00:43:59
don't have to buy specialized hard you

00:43:57 --> 00:44:05
know formatted

00:43:58 --> 00:44:07
hardware or an ASIC but you need to do

00:44:04 --> 00:44:09
this extra inconvenient thing in order

00:44:06 --> 00:44:11
to participate in this network but

00:44:08 --> 00:44:12
because your ass but your you're just

00:44:10 --> 00:44:14
someone with some extra storage on your

00:44:11 --> 00:44:15
on your device and you're not

00:44:13 --> 00:44:16
you know trying to compete with Amazon

00:44:14 --> 00:44:18
that you're willing to go through that

00:44:15 --> 00:44:21
step in order to participate so I think

00:44:17 --> 00:44:23
that's sort of where we're proof of

00:44:20 --> 00:44:26
replication falls somewhere in between

00:44:22 --> 00:44:29
something which has high you know

00:44:25 --> 00:44:33
barriers of entry such as something

00:44:28 --> 00:44:35
which requires Asics you know versus

00:44:32 --> 00:44:39
omething that is just so convenient for

00:44:34 --> 00:44:44
Amazon to do and participate in yeah if

00:44:38 --> 00:44:48
it without you know somehow compromising

00:44:43 --> 00:44:51
the rest of their operations although of

00:44:47 --> 00:44:55
course I would you know leave with the

00:44:50 --> 00:44:57
caveat that it may be the case that

00:44:54 --> 00:44:58
people would be able to design a six

00:44:56 --> 00:44:59
which would be better at proof of

00:44:57 --> 00:45:02
replication it's really hard to prevent

00:44:58 --> 00:45:07
hat you know and so I can't say that

00:45:01 --> 00:45:11
designing an ASIC to achieve a small

00:45:06 --> 00:45:13
savings would be impossible we can say

00:45:10 --> 00:45:15
that the the the since proof of

00:45:12 --> 00:45:17
replications are really tight proof of

00:45:14 --> 00:45:20
space that we know that you have to use

00:45:16 --> 00:45:23
say 99% of the space but remember

00:45:19 --> 00:45:27
there's still some computational you

00:45:22 --> 00:45:29
know cost and you can optimize that and

00:45:26 --> 00:45:31
so it's hard to say whether it's

00:45:28 --> 00:45:33
completely ASIC resistant yes you know

00:45:30 --> 00:45:35
it's easy to get carried away and say

00:45:32 --> 00:45:38
that Oh proof of replication rules it's

00:45:35 --> 00:45:41
inconvenient for Amazon to do this so so

00:45:37 --> 00:45:44
there is some barrier to entry but it

00:45:41 --> 00:45:46
doesn't require ASIC so anybody can

00:45:43 --> 00:45:49
participate you know it's really it's

00:45:45 --> 00:45:51
all of these can be challenged right

00:45:48 --> 00:45:55
Amazon could if they really really were

00:45:50 --> 00:45:57
incentivized to take down you know a

00:45:54 --> 00:45:59
decentralized storage network that was

00:45:56 --> 00:46:01
running a Bitcoin like system where the

00:45:58 --> 00:46:03
proof of work was now proof of

00:46:00 --> 00:46:04
replication right which is what we're

00:46:02 --> 00:46:06
talking which is what we're talking

00:46:03 --> 00:46:09
about right they could potentially

00:46:05 --> 00:46:10
double they could do it right

00:46:08 --> 00:46:13
hen you have to consider what would be

00:46:09 --> 00:46:16
the cost through their current

00:46:12 --> 00:46:19
operations right what would be the the

00:46:15 --> 00:46:22
storage overhead or the computational

00:46:18 --> 00:46:25
burden of or remember proof of

00:46:21 --> 00:46:29
replication encodes files in a certain

00:46:24 --> 00:46:31
format but it's still not the the

00:46:28 --> 00:46:33
asiest to extract the data from that

00:46:30 --> 00:46:34
it's not nearly as useful as it's just

00:46:32 --> 00:46:36
like the plain format where you just

00:46:33 --> 00:46:37
have the data right I mean when you're

00:46:35 --> 00:46:43
talking about a huge business like

00:46:36 --> 00:46:45
Amazon where the the potential impact of

00:46:42 --> 00:46:47
you know making a small difference in

00:46:44 --> 00:46:50
the latency that they have for their

00:46:46 --> 00:46:54
customers or a small overhead and the

00:46:49 --> 00:46:55
storage that they're using it could be

00:46:53 --> 00:46:57
it could it could really be detrimental

00:46:54 --> 00:46:59
to the business whereas if you are just

00:46:57 --> 00:47:03
you just have unused storage on your

00:46:58 --> 00:47:05
phone and you're willing to use you know

00:47:02 --> 00:47:06
all the rest of the storage that you

00:47:04 --> 00:47:07
have on your phone and fill it up to

00:47:05 --> 00:47:08
capacity and participate in something

00:47:06 --> 00:47:10
that you just wouldn't be able to

00:47:07 --> 00:47:11
participate in anyways then it starts to

00:47:09 --> 00:47:13
make a little bit more sense then it

00:47:10 --> 00:47:15
maybe it doesn't matter that proof of

00:47:12 --> 00:47:17
replication requires you to use one

00:47:14 --> 00:47:19
percent overhead in the storage but to

00:47:16 --> 00:47:23
Amazon that has a tremendous amount and

00:47:18 --> 00:47:26
I think that's another way of thinking

00:47:22 --> 00:47:28
about this inconvenience factor which

00:47:25 --> 00:47:30
proof of replication has and may

00:47:27 --> 00:47:33
actually be beneficial to the system

00:47:29 --> 00:47:34
yeah I don't know if it's beneficial

00:47:32 --> 00:47:36
when you want if you if you if you're

00:47:33 --> 00:47:38
asking whether these centralized storage

00:47:35 --> 00:47:40
networks will have lower costs than

00:47:37 --> 00:47:43
Amazon boy that's a really hard question

00:47:39 --> 00:47:44
that's our question yeah yeah you're

00:47:42 --> 00:47:46
right these are these are hairy

00:47:43 --> 00:47:48
questions I think in the end that I mean

00:47:45 --> 00:47:50
the calculator would come down to how

00:47:47 --> 00:47:53
much could an entity like Amazon is

00:47:49 --> 00:47:55
elling Amazon yeah profit from sort of

00:47:52 --> 00:47:56
accumulating so much storage that they

00:47:54 --> 00:47:58
can overwhelm the security of the

00:47:55 --> 00:48:01
network and then double spend and sort

00:47:57 --> 00:48:03
of specially sort of interfere with the

00:48:00 --> 00:48:04
consensus of the network and I think you

00:48:02 --> 00:48:06
are correct and that it's it's kind of

00:48:03 --> 00:48:08
like a hard problem to reason about

00:48:05 --> 00:48:10
because we don't really know what the

00:48:07 --> 00:48:12
numbers were the numbers yeah I

00:48:09 --> 00:48:15
would like to think of it in some sense

00:48:11 --> 00:48:18
and this may be an inappropriate analogy

00:48:14 --> 00:48:22
but the farmers market of file storage

00:48:18 --> 00:48:29
it's pretty inconvenient for a

00:48:21 --> 00:48:31
you know I'm at like a one of the the

00:48:28 --> 00:48:34
main food distributors in the US like

00:48:30 --> 00:48:38
let's say us foods or Cisco to bring

00:48:33 --> 00:48:40
food to a farmers market right but

00:48:37 --> 00:48:42
farmers market allow you know farmers or

00:48:39 --> 00:48:45
individuals to just contribute yep you

00:48:41 --> 00:48:49
know to the local to local food produce

00:48:44 --> 00:48:51
conomy and the the inconvenience of you

00:48:48 --> 00:48:54
know setting up a booth and bringing a

00:48:50 --> 00:48:57
small amount of of you know vegetables

00:48:53 --> 00:48:58
ay a long distance and to to bring it

00:48:56 --> 00:49:02
o a local city to participate in the

00:48:57 --> 00:49:03
farmers market is is you know not a

00:49:01 --> 00:49:05
perfect analogy but so but somewhat of

00:49:02 --> 00:49:08
an analogy to using proof of replication

00:49:04 --> 00:49:12
which is not optimized for efficiency

00:49:07 --> 00:49:14
but it is appropriate for you know the

00:49:11 --> 00:49:18
participation of just individuals who

00:49:13 --> 00:49:20
want to contribute storage to the stew

00:49:17 --> 00:49:24
and to a decentralized storage network

00:49:19 --> 00:49:27
that is that is not you know you know

00:49:23 --> 00:49:30
something like Amazon for sure yeah also

00:49:26 --> 00:49:32
hope to wrap up give us a teaser of how

00:49:29 --> 00:49:34
this is connected so that you'll work

00:49:31 --> 00:49:36
with proofs of replication to some of

00:49:33 --> 00:49:40
your more recent work on accumulators

00:49:35 --> 00:49:43
yeah so it's interesting there there is

00:49:39 --> 00:49:45
omewhat of a connection we've been

00:49:42 --> 00:49:47
talking about well you know

00:49:44 --> 00:49:50
incentivizing distributed file storage

00:49:46 --> 00:49:54
and we even mentioned you know Bitcoin

00:49:49 --> 00:49:56
is an example of a decentralized file

00:49:53 --> 00:49:59
storage network in the sense that all

00:49:55 --> 00:50:03
the miners in Bitcoin are contributing

00:49:58 --> 00:50:05
to storing the ledger of Bitcoin and in

00:50:02 --> 00:50:07
other blockchain systems all the

00:50:04 --> 00:50:10
validators in the network are

00:50:06 --> 00:50:11
participating in storing the the state

00:50:09 --> 00:50:15
of the encountering system and verifying

00:50:10 --> 00:50:16
transactions so you could also wonder

00:50:14 --> 00:50:18
whether proof of replication would be

00:50:15 --> 00:50:21
useful for incentivizing people to

00:50:17 --> 00:50:23
actually participate in storing the

00:50:20 --> 00:50:26
database of financial transactions which

00:50:22 --> 00:50:28
could grow quite large but then there's

00:50:25 --> 00:50:32
another question which is well what

00:50:27 --> 00:50:34
about just reducing the storage burden

00:50:31 --> 00:50:36
in the first place so that you don't

00:50:33 --> 00:50:38
require

00:50:35 --> 00:50:42
mandus incentives for a node to

00:50:37 --> 00:50:46
participate in the you know in consensus

00:50:41 --> 00:50:48
or to participate in the collective and

00:50:45 --> 00:50:51
istributed maintenance of an accounting

00:50:47 --> 00:50:54
system like Bitcoin and that's what

00:50:50 --> 00:50:58
accumulators are about they're about you

00:50:53 --> 00:51:00
know if everybody stores just a few

00:50:57 --> 00:51:04
transactions in the network okay

00:51:00 --> 00:51:07
then how do how do other nodes in the

00:51:03 --> 00:51:10
network verify that when I submit a

00:51:06 --> 00:51:13
transaction that my transaction

00:51:09 --> 00:51:15
references my account correctly without

00:51:12 --> 00:51:17
having to store the entire list of all

00:51:14 --> 00:51:20
accounts okay

00:51:16 --> 00:51:20
and I mean we could talk about that

00:51:19 --> 00:51:23
another time

00:51:19 --> 00:51:26
absolutely it's all about how do you

00:51:22 --> 00:51:27
basically remove the requirement that

00:51:25 --> 00:51:30
everybody in the network needs to store

00:51:26 --> 00:51:33
the entire Bitcoin ledger and entire

00:51:29 --> 00:51:35
ledger of accounts in order participate

00:51:32 --> 00:51:37
in invalidating the transactions are

00:51:34 --> 00:51:38
correct yeah well we'll leave it with

00:51:36 --> 00:51:40
at with a really compelling teaser

00:51:37 --> 00:51:42
that you gave me earlier which is this

00:51:39 --> 00:51:46
is a way by which you can

00:51:41 --> 00:51:49
separate consensus from storage yeah I I

00:51:45 --> 00:51:51
recently gave a talk on this in a way of

00:51:48 --> 00:51:54
looking at this as a separation of

00:51:50 --> 00:51:57
consensus and state but really it's the

00:51:53 --> 00:51:59
separation of the consensus layer of a

00:51:56 --> 00:52:03
blockchain accounting system from the

00:51:58 --> 00:52:04
storage layer you know where you don't

00:52:02 --> 00:52:06
have to have the same nodes

00:52:03 --> 00:52:08
participating in both you could have a

00:52:05 --> 00:52:10
whole bunch of cell phones running the

00:52:07 --> 00:52:12
governance of the and validation of

00:52:09 --> 00:52:14
transactions to the network and then

00:52:11 --> 00:52:18
have some heavy servers actually storing

00:52:13 --> 00:52:22
the the actual storage of the network in

00:52:17 --> 00:52:23
an optimized decentralized way you

00:52:21 --> 00:52:25
optimized for storage but not

00:52:22 --> 00:52:27
necessarily participating in in

00:52:24 --> 00:52:29
consensus so fascinating yet to be

00:52:26 --> 00:52:33
continued TV continues thanks for coming

00:52:28 --> 00:52:33
along great it's great to see it as you

<!-- YOUTUBE_TRANSCRIPT_END -->
