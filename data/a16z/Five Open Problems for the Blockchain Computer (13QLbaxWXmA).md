---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "13QLbaxWXmA"
title: "Five Open Problems for the Blockchain Computer"
video_url: "https://www.youtube.com/watch?v=13QLbaxWXmA"
thumbnail_url: "https://i.ytimg.com/vi/13QLbaxWXmA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=13QLbaxWXmA"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-04-19T12:37:26.000Z"
upload_date: "2019-04-19"
duration_seconds: 3219
duration_human: "53:39"
view_count: 7009
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:33:10.722Z"
---

# Five Open Problems for the Blockchain Computer

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=13QLbaxWXmA
- video_id: 13QLbaxWXmA
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-04-19T12:37:26.000Z
- upload_date: 2019-04-19
- duration: 53:39
- view_count: 7009
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: Andreessen Horowitz, a16z, software, entrepreneurship, startup, Silicon Valley, crypto, blockchain computer science, cryptography, research, decentralized, storage, censorship, cloud storage, blockchain, blockchain computer, cryptocurrency, Stanford, Stanford Computer Science, distributed computing, distributed storage, game theory, protocols, trust, privacy, distributed networking, identity, reputation, networks, economics
- categories: Science & Technology

## Description

Do you sometimes wish you had been born in a different decade so you could have worked on the fundamental building blocks of modern computing? How fun, challenging, and fulfilling would it have been to work on semiconductors in the 1950s or Unix in the 1960s (both at Bell Labs) or personal computers at the Homebrew Computer Club in the 1970s or on the Internet browser at the University of Illinois at Urbana-Champaign (and later Mountain View, CA) in the 1990s?

Good news: it’s not too late. A vibrant and rapidly growing community is building a new computing platform called the blockchain computer. And as with all new computing platforms, a new set of killer apps will be built on top of that platform. You might have noticed some of your coworkers and friends leaving big stable tech companies to join the early builders and architects of this new computing platform

In this episode, a16z crypto partner Ali Yahya talks with Frank Chen about five challenging problems the blockchain community is trying to solve right now:
- Scaling decentralized computing
- Scaling decentralized storage
- Scaling decentralized networks
- Establishing trusted identities and reputations
- Establishing trusted governance models

If you’re a software engineer, product manager, UX designer, investor, or tech enthusiast who thrives on hard challenges in the early stages of establishing a new platform, this is the perfect time to join the community.   

Show notes:
Learn more about some of the computer science ideas that the community is discussing to solve the decentralized storage challenge in Ali's in-depth video conversation with Stanford Ph.D. student Ben Fisch (https://youtu.be/ZZIheiQ9IoE).

In this episode, Ali mentions a few related podcasts on crypto governance, which you can find here:
https://a16z.com/2019/02/09/voting-blockchains-governance-security-cryptoeconomics/
https://a16z.com/2018/12/16/future-trust-crypto-summit-2018/

You might also find these resources useful:
https://a16z.com/category/blockchain-cryptocurrencies/

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. 

Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:18
[Music]

00:00:14 --> 00:00:21
well welcome to the a 16z youtube

00:00:17 --> 00:00:24
channel today i'm here with alia our

00:00:20 --> 00:00:25
deal partner in the a 16 z crypto team

00:00:23 --> 00:00:28
and we're gonna have a fun conversation

00:00:24 --> 00:00:31
so here's what we're gonna do I'm going

00:00:27 --> 00:00:34
to pretend Ally to be a Google software

00:00:30 --> 00:00:35
ngineer or an Apple software engineer

00:00:33 --> 00:00:37
ight so I'm somebody who knows how to

00:00:34 --> 00:00:39
write software has been doing it for a

00:00:36 --> 00:00:41
while and then all of a sudden I saw my

00:00:38 --> 00:00:43
friends start to peel off and go to

00:00:40 --> 00:00:46
crypto startups and I'm looking around

00:00:42 --> 00:00:47
going but what's happening right goggle

00:00:45 --> 00:00:49
is a great place or Apple is a great

00:00:46 --> 00:00:51
place why are people leaving to go to

00:00:48 --> 00:00:53
crypto startups and maybe you can help

00:00:50 --> 00:00:55
me understand like what's causing all

00:00:52 --> 00:00:57
these smart talented people to head into

00:00:54 --> 00:00:59
crypto land I love it

00:00:56 --> 00:01:01
fantastic so maybe let's just start with

00:00:58 --> 00:01:04
e world in which we live today which

00:01:00 --> 00:01:07
is you know use my iPhone or my Android

00:01:03 --> 00:01:11
phone I happen to use a Google phone the

00:01:06 --> 00:01:13
pixel I use Google photos I use Gmail my

00:01:10 --> 00:01:15
carriers t-mobile it's sort of a

00:01:12 --> 00:01:18
centralized world and it works pretty

00:01:15 --> 00:01:21
well right like it's pretty reliable and

00:01:17 --> 00:01:23
Google gets all my photos and my mail

00:01:20 --> 00:01:25
arrives when I want it and so that's not

00:01:22 --> 00:01:29
a bad world is crypto really trying to

00:01:24 --> 00:01:30
overturn that world that world what

00:01:28 --> 00:01:33
doesn't work fine but it's it's not the

00:01:29 --> 00:01:36
frontier and so what I would say is the

00:01:32 --> 00:01:38
reason that crypto is so exciting is

00:01:35 --> 00:01:40
because it offers a fundamentally new

00:01:37 --> 00:01:42
paradigm for computation that has

00:01:39 --> 00:01:43
features that are completely novel and

00:01:41 --> 00:01:46
ifferent from the from the features

00:01:42 --> 00:01:48
that enable applications like social

00:01:45 --> 00:01:49
media as it exists today like sharing of

00:01:47 --> 00:01:51
photos like all of sort of the

00:01:48 --> 00:01:53
centralized services that we know and

00:01:50 --> 00:01:56
love today and so I think with every

00:01:52 --> 00:01:58
successive wave of computation that

00:01:55 --> 00:02:02
we've seen throughout the history of

00:01:57 --> 00:02:05
computing normally the the new paradigm

00:02:01 --> 00:02:08
has to test a socket first it has to be

00:02:04 --> 00:02:10
pretty bad and most things that the old

00:02:07 --> 00:02:13
paradigm is very good at but it happens

00:02:09 --> 00:02:15
to shine in one or two particular ways

00:02:12 --> 00:02:16
that enable new applications that

00:02:14 --> 00:02:18
previously were just not possible to

00:02:15 --> 00:02:20
build and so with I mean I think one of

00:02:17 --> 00:02:22
the clearest examples is just the

00:02:19 --> 00:02:25
xample of mobile phones enabling

00:02:21 --> 00:02:27
applications like uber where

00:02:24 --> 00:02:28
applications like Instagram by virtue of

00:02:26 --> 00:02:30
having a

00:02:27 --> 00:02:32
camera and a GPS bolted onto the phone

00:02:29 --> 00:02:34
that enable those kinds of behaviors

00:02:31 --> 00:02:36
that with a personal computer you

00:02:33 --> 00:02:38
couldn't have possibly could have to

00:02:35 --> 00:02:39
possibly build your PC didn't know where

00:02:37 --> 00:02:41
you were necessarily so it couldn't

00:02:38 --> 00:02:43
enable lift exactly and it would have

00:02:40 --> 00:02:49
been also just deeply impractical for

00:02:42 --> 00:02:52
one to pull out one slap and so with

00:02:48 --> 00:02:55
crypto I think the the key dimension

00:02:51 --> 00:02:57
along which these decentralized

00:02:54 --> 00:03:00
computers that people are building in

00:02:56 --> 00:03:03
the world of crypto shine is is that of

00:02:59 --> 00:03:05
trust and provide this this new angle

00:03:02 --> 00:03:09
that previous computers didn't have

00:03:04 --> 00:03:12
because because because previous

00:03:08 --> 00:03:15
computers are owned and operated by

00:03:11 --> 00:03:18
individuals or by single entities like

00:03:14 --> 00:03:20
companies and so you have to trust that

00:03:17 --> 00:03:22
individual you have to trust that

00:03:19 --> 00:03:23
company to actually run the software

00:03:21 --> 00:03:25
that they're claiming that they're

00:03:22 --> 00:03:26
running and to actually do what they

00:03:24 --> 00:03:28
claim they will do with your data and

00:03:25 --> 00:03:30
with but we're basically with the entire

00:03:27 --> 00:03:32
interaction between you and them so we

00:03:29 --> 00:03:34
trust Google with our photos we trust

00:03:31 --> 00:03:36
Google with our email we trust Google

00:03:33 --> 00:03:38
with just about everything that entails

00:03:35 --> 00:03:42
that the kinds of interactions that we

00:03:37 --> 00:03:44
have with Google this new paradigm of

00:03:41 --> 00:03:46
computation is such that you now have a

00:03:43 --> 00:03:49
computational fabric that is not owned

00:03:45 --> 00:03:51
and operated by any one person this is

00:03:48 --> 00:03:53
the whole point of decentralization when

00:03:50 --> 00:03:54
people talk about decentralization in

00:03:52 --> 00:03:58
the world of crypto they mean

00:03:53 --> 00:04:01
decentralization of human control not

00:03:57 --> 00:04:03
he centralization of of computing in a

00:04:00 --> 00:04:06
Geographic sense it's not the

00:04:02 --> 00:04:08
centralization in any other way that you

00:04:05 --> 00:04:09
might think like that the key thing

00:04:07 --> 00:04:12
about crypto is the centralization of

00:04:08 --> 00:04:14
human power and human control over

00:04:11 --> 00:04:17
systems and figuring out clever ways to

00:04:13 --> 00:04:21
build a system such that it is self

00:04:16 --> 00:04:24
policing and such that it's its security

00:04:20 --> 00:04:26
and its trust emerges bottom up from its

00:04:23 --> 00:04:28
participants and from individuals as

00:04:25 --> 00:04:31
opposed to top-down from like some

00:04:27 --> 00:04:34
trusted organization at the top that

00:04:30 --> 00:04:36
kind of enforces enforces the rules got

00:04:33 --> 00:04:39
it so instead of trusting Google or

00:04:35 --> 00:04:41
Facebook or Apple I can entrust the

00:04:38 --> 00:04:43
collective of people who contribute

00:04:40 --> 00:04:46
they're computing their storage power

00:04:42 --> 00:04:49
etc etc to deliver the service that I'm

00:04:45 --> 00:04:52
consuming and that's the big innovation

00:04:48 --> 00:04:56
and so the well why don't we go through

00:04:51 --> 00:04:58
the implications of that by sort of

00:04:55 --> 00:05:03
talking through well what will we need

00:04:57 --> 00:05:06
to rebuild in crypto land starting with

00:05:02 --> 00:05:07
compute so that all of the applications

00:05:05 --> 00:05:09
that run on top of this distributed

00:05:06 --> 00:05:11
computer sort of will have the power

00:05:08 --> 00:05:13
that you're describing so let's start

00:05:10 --> 00:05:15
with distributed compute what what do we

00:05:12 --> 00:05:17
need so I guess maybe to set the stage

00:05:14 --> 00:05:19
if we think of compute today we have

00:05:16 --> 00:05:22
computers that can perform certain mono

00:05:18 --> 00:05:24
transactions per second we have visa

00:05:21 --> 00:05:26
which can clear so many financial

00:05:23 --> 00:05:28
transactions per second and then we

00:05:25 --> 00:05:29
compare those things with things like

00:05:27 --> 00:05:31
well how many Bitcoin transactions can

00:05:28 --> 00:05:34
clear how many aetherium smart contracts

00:05:30 --> 00:05:36
can clear so why don't we talk about how

00:05:33 --> 00:05:38
do we get distributed compute to really

00:05:35 --> 00:05:40
sing in crypto land

00:05:37 --> 00:05:42
absolutely so I think yet so much so

00:05:39 --> 00:05:44
much of the attention in crypto tends to

00:05:41 --> 00:05:46
be on this metric of transactions per

00:05:43 --> 00:05:48
second and I think we we would argue

00:05:45 --> 00:05:50
that that's the wrong I mean it's not

00:05:47 --> 00:05:52
even the right framing because we're not

00:05:49 --> 00:05:54
alking about just a ledger that

00:05:51 --> 00:05:56
processes payments we're talking about a

00:05:53 --> 00:05:58
computer we're talking about

00:05:55 --> 00:06:00
decentralized fabric for general

00:05:57 --> 00:06:01
computation so the right metric is not

00:05:59 --> 00:06:03
really transactions per second it's

00:06:00 --> 00:06:05
really instructions per second how many

00:06:02 --> 00:06:07
instructions of some

00:06:04 --> 00:06:08
computation can you process in any given

00:06:06 --> 00:06:10
period of time and that's kind of what

00:06:07 --> 00:06:13
people know I know I know as as

00:06:09 --> 00:06:15
throughput so that's one of the men of

00:06:12 --> 00:06:17
the metrics for scalability that that

00:06:14 --> 00:06:19
matter when it comes to compute the

00:06:16 --> 00:06:21
other one is the latency to finality

00:06:18 --> 00:06:23
it's like how do we know that the

00:06:20 --> 00:06:25
computation was done and that it can no

00:06:22 --> 00:06:28
longer be reverted that it can no longer

00:06:24 --> 00:06:30
that its output was was final and that

00:06:27 --> 00:06:32
nothing can happen they could

00:06:29 --> 00:06:34
reverse it and have it be

00:06:31 --> 00:06:36
something different you can trust that

00:06:33 --> 00:06:39
outcome is is settled

00:06:35 --> 00:06:41
so that's latency to finality is how

00:06:38 --> 00:06:43
much time you have to wait before that

00:06:40 --> 00:06:45
happens and people talk all the time

00:06:42 --> 00:06:47
about how Bitcoin has terrible latency

00:06:44 --> 00:06:49
to finality you have to wait 60 minutes

00:06:46 --> 00:06:52
before you can be reasonably sure that

00:06:48 --> 00:06:54
your payment is final yeah so that's

00:06:51 --> 00:06:55
another another axis and then the final

00:06:53 --> 00:06:58
one when we talk

00:06:54 --> 00:07:02
about scalability of computation is what

00:06:57 --> 00:07:03
is the cost per instruction how much do

00:07:01 --> 00:07:04
I have to pay for that transaction how

00:07:02 --> 00:07:07
much do I have to pay for just an

00:07:03 --> 00:07:09
arbitrary computation on aetherium or on

00:07:06 --> 00:07:11
some of the more general platforms for

00:07:08 --> 00:07:14
computation and the reason obviously

00:07:10 --> 00:07:15
that all of this matters is because the

00:07:13 --> 00:07:19
kinds of applications that we want to

00:07:14 --> 00:07:22
build will just require far greater

00:07:18 --> 00:07:25
scalability and also will require far

00:07:21 --> 00:07:27
lower cost to really to really work and

00:07:24 --> 00:07:29
I think it may be helpful to just

00:07:26 --> 00:07:31
exemplify what those applications are I

00:07:28 --> 00:07:33
think some of them some of the things

00:07:30 --> 00:07:36
that we are seeing already in the world

00:07:32 --> 00:07:38
of aetherium kind of the etherium

00:07:35 --> 00:07:40
ecosystem is maybe the richest so far in

00:07:37 --> 00:07:43
terms of actual developer activity on

00:07:40 --> 00:07:45
top so we've seen kind of the emergence

00:07:42 --> 00:07:48
of this parallel financial world where

00:07:44 --> 00:07:52
you have things like like stable coins

00:07:47 --> 00:07:54
which are price stable crypto currencies

00:07:51 --> 00:07:57
that have some logic that modulate the

00:07:53 --> 00:08:00
supply of the of the token to keep it

00:07:56 --> 00:08:02
stable to some external reference like

00:07:59 --> 00:08:03
the US dollar and then on top of that

00:08:01 --> 00:08:05
people build things like lending

00:08:02 --> 00:08:07
platforms and they built they build

00:08:04 --> 00:08:08
things like derivatives platforms they

00:08:06 --> 00:08:10
build things like decentralized

00:08:07 --> 00:08:13
exchanges where you can exchange tokens

00:08:09 --> 00:08:16
are exchanged crypto assets without

00:08:12 --> 00:08:18
depending on some central exchange so

00:08:15 --> 00:08:20
all of these things that's like one one

00:08:17 --> 00:08:23
xample one trend that is already

00:08:19 --> 00:08:25
happening among among many other trends

00:08:22 --> 00:08:27
we can talk about other examples later

00:08:24 --> 00:08:30
of you if you think it's helpful but all

00:08:26 --> 00:08:34
of that depends on far greater

00:08:29 --> 00:08:38
throughput far lower latency to finality

00:08:33 --> 00:08:41
and far lower cost per per instruction

00:08:37 --> 00:08:43
because already the the just with this

00:08:40 --> 00:08:45
initial activity we were already seeing

00:08:42 --> 00:08:47
the limits of the current of the current

00:08:44 --> 00:08:49
echnology so it's an open problem how

00:08:46 --> 00:08:52
do we increase throughput and for that

00:08:48 --> 00:08:53
particular question people like what

00:08:51 --> 00:08:56
are the things that matters the

00:08:52 --> 00:08:58
most is the the delay and propagation of

00:08:55 --> 00:09:02
messages and IDs in a distributed system

00:08:57 --> 00:09:05
that's what ends up dominating the cost

00:09:01 --> 00:09:07
of that particular problem so people

00:09:04 --> 00:09:09
talk about

00:09:06 --> 00:09:12
he block time in crypto is like how

00:09:08 --> 00:09:14
much time do you have to wait before you

00:09:11 --> 00:09:17
can append a new block to the blockchain

00:09:13 --> 00:09:19
and blocks usually contain computations

00:09:16 --> 00:09:21
that contain transactions so you can

00:09:18 --> 00:09:23
lower the amount of time that you have

00:09:20 --> 00:09:26
to wait for new blocks to come along

00:09:22 --> 00:09:30
then you process more transactions and

00:09:25 --> 00:09:30
more computations per unit time than you

00:09:29 --> 00:09:32
would otherwise

00:09:29 --> 00:09:36
so propagating messages in the network

00:09:31 --> 00:09:38
is a is the dominant factor that's what

00:09:35 --> 00:09:41
makes it slow just sort of finalize a

00:09:37 --> 00:09:42
transaction exactly and the reason for

00:09:40 --> 00:09:43
this is that we are building a

00:09:41 --> 00:09:45
distributed system and so if you think

00:09:42 --> 00:09:47
about it what is the difference between

00:09:44 --> 00:09:49
a distributed system and one that's just

00:09:46 --> 00:09:52
centralized and that is that there's

00:09:48 --> 00:09:54
distance between the different nodes

00:09:51 --> 00:09:55
that are participating in the system so

00:09:53 --> 00:09:58
the key difference is that now there's

00:09:54 --> 00:09:59
this additional communication cost

00:09:57 --> 00:10:01
between the different nodes in the

00:09:58 --> 00:10:04
system and that cost is also is

00:10:00 --> 00:10:06
ignificant because it's bounded is like

00:10:03 --> 00:10:09
the lower bound on it is the speed of

00:10:05 --> 00:10:12
light you cannot get faster than the

00:10:08 --> 00:10:14
speed of light so so it provides it

00:10:11 --> 00:10:16
causes this this kind of lower bound as

00:10:13 --> 00:10:18
to how performant it can possibly be and

00:10:15 --> 00:10:21
you can only get so clever before you

00:10:17 --> 00:10:23
reach that that that kind of lower bound

00:10:20 --> 00:10:26
but it is the case that today we're

00:10:22 --> 00:10:27
still far far from from that lower bound

00:10:25 --> 00:10:29
there's still a lot of room for

00:10:26 --> 00:10:30
improvement yeah I mean people in

00:10:28 --> 00:10:32
general pretty impatient I remember when

00:10:29 --> 00:10:34
the chip-and-pin system started getting

00:10:31 --> 00:10:35
deployed here in the United States it

00:10:33 --> 00:10:37
was just a couple years ago right and

00:10:34 --> 00:10:39
then the you didn't cert your credit

00:10:36 --> 00:10:41
card and it would take like five seconds

00:10:38 --> 00:10:43
right and that was a lot slower than the

00:10:40 --> 00:10:45
swipe and people were like this is never

00:10:42 --> 00:10:48
gonna work I'm not waiting five seconds

00:10:44 --> 00:10:50
for my credit card to clear and so maybe

00:10:47 --> 00:10:53
talk a little bit about you know sort of

00:10:49 --> 00:10:55
what is the propagation delay today and

00:10:52 --> 00:10:57
then what's practical to get to given

00:10:54 --> 00:10:59
sort of speed of light limitations and

00:10:56 --> 00:11:03
then what's the target and how do we get

00:10:58 --> 00:11:04
here oh yeah for sure so so today I

00:11:02 --> 00:11:10
mean this is there's an enormous tension

00:11:03 --> 00:11:12
between well to back up a little bit so

00:11:09 --> 00:11:14
there are two things that matter here

00:11:11 --> 00:11:17
one of them is how much time does it

00:11:13 --> 00:11:19
ake to send a message between two two

00:11:16 --> 00:11:20
points in space but then there's also

00:11:18 --> 00:11:23
the problem of

00:11:19 --> 00:11:26
what what influences the size of the

00:11:22 --> 00:11:28
message have on on that amount of time

00:11:25 --> 00:11:30
and so there's that's basically the two

00:11:27 --> 00:11:31
angles here are latency and bandwidth

00:11:29 --> 00:11:32
yeah

00:11:30 --> 00:11:34
latency being amount of time that it

00:11:31 --> 00:11:36
akes to send a message bandwidth being

00:11:33 --> 00:11:39
how much how much data can you actually

00:11:35 --> 00:11:40
fit through the pipe per unit of per

00:11:38 --> 00:11:43
unit of time so there's a tension in

00:11:39 --> 00:11:46
this space you can see this reflected in

00:11:42 --> 00:11:51
say the Bitcoin like block size debate

00:11:45 --> 00:11:54
yeah between sort of the throughput that

00:11:50 --> 00:11:57
you can get out of the network and the

00:11:53 --> 00:11:59
propagation delay that that is caused by

00:11:56 --> 00:12:01
say increasing the block size so in the

00:11:58 --> 00:12:03
case of Bitcoin people people were

00:12:00 --> 00:12:05
talking about doubling the block size

00:12:02 --> 00:12:07
from one megabyte to two megabytes and

00:12:04 --> 00:12:09
so that would increase the throughput of

00:12:06 --> 00:12:11
the Bitcoin blockchain because now you

00:12:08 --> 00:12:15
can fit twice as many transactions and

00:12:10 --> 00:12:18
the blocks would still come at a sort of

00:12:14 --> 00:12:20
10-minute cadence but that would

00:12:17 --> 00:12:23
increase the propagation delay for those

00:12:19 --> 00:12:24
blocks which would cause certain miners

00:12:22 --> 00:12:26
to no longer really be able to

00:12:23 --> 00:12:27
participate because they won't get the

00:12:25 --> 00:12:29
block in time so they would have to they

00:12:26 --> 00:12:31
would have eventually end up falling out

00:12:28 --> 00:12:32
you'd end up with a more centralized

00:12:30 --> 00:12:35
system so we see here there's a

00:12:32 --> 00:12:37
trade-off between performance and

00:12:34 --> 00:12:39
ecentralization assuming that you want

00:12:36 --> 00:12:42
o keep security constant you don't want

00:12:38 --> 00:12:44
o suffer I don't think your trust right

00:12:41 --> 00:12:47
you can't give up on the trust you can't

00:12:43 --> 00:12:49
allow double spending right so I always

00:12:46 --> 00:12:51
thought that the reasons a Bitcoin was

00:12:48 --> 00:12:53
low as the proof of work was so

00:12:50 --> 00:12:56
computationally demanding is that still

00:12:52 --> 00:12:58
the case or is that is that a solved

00:12:55 --> 00:13:00
problem so it's a very very good point

00:12:57 --> 00:13:03
so we've been talking so far we've been

00:12:59 --> 00:13:06
talking about the the throughput of

00:13:02 --> 00:13:09
instructions for for a blockchain which

00:13:05 --> 00:13:12
is one of the three different dimensions

00:13:08 --> 00:13:15
for scalability of compute the third one

00:13:11 --> 00:13:17
was the cost of instruction of an

00:13:14 --> 00:13:20
instruction how much does it cost to

00:13:16 --> 00:13:22
have a transaction be processed so the

00:13:19 --> 00:13:25
cost of proof-of-work is what ends up

00:13:21 --> 00:13:27
driving the cost of an instruction so

00:13:24 --> 00:13:30
far so so high yeah

00:13:26 --> 00:13:33
rather than I mean a a like so there are

00:13:29 --> 00:13:36
like very

00:13:32 --> 00:13:38
different lines of work there's the the

00:13:35 --> 00:13:41
line of work that's trying to improve

00:13:37 --> 00:13:42
the propagation of messages and to make

00:13:40 --> 00:13:44
that more efficient so they're companies

00:13:41 --> 00:13:47
like blocks route which are building

00:13:43 --> 00:13:49
like a kind of a content delivery

00:13:46 --> 00:13:52
network which has advanced computer

00:13:48 --> 00:13:54
networking technology that allows miners

00:13:51 --> 00:13:56
to propagate their blocks to other

00:13:53 --> 00:13:58
miners very efficiently and so that'll

00:13:55 --> 00:13:59
help with the propagation delay which

00:13:57 --> 00:14:02
will help with the throughput problem

00:13:58 --> 00:14:04
now that new generation CDN exactly is

00:14:01 --> 00:14:06
optimized for creative fact they call it

00:14:03 --> 00:14:08
a blockchain distribution network

00:14:05 --> 00:14:10
obediently Oh God and so that's an

00:14:07 --> 00:14:13
interesting angle that operates at layer

00:14:09 --> 00:14:15
0 is like the networking layer below the

00:14:12 --> 00:14:16
blockchain layer and it can help any

00:14:14 --> 00:14:18
blocking project any blockchain project

00:14:15 --> 00:14:21
hat builds on top of it will benefit

00:14:17 --> 00:14:23
from faster propagation of messages yeah

00:14:20 --> 00:14:25
and the classic internet definitely

00:14:22 --> 00:14:27
needed this like it's impossible to

00:14:24 --> 00:14:29
imagine the internet without a CDN right

00:14:26 --> 00:14:31
you'd be waiting a lot longer for almost

00:14:28 --> 00:14:32
anything without that layer of

00:14:30 --> 00:14:34
infrastructure so that makes sense so

00:14:31 --> 00:14:36
there's sort of a CDN layer yeah and

00:14:33 --> 00:14:37
then and then there are people who are

00:14:35 --> 00:14:39
working on this latency to finality

00:14:36 --> 00:14:41
dimension which we also talked about

00:14:38 --> 00:14:44
which is how much time you have to wait

00:14:40 --> 00:14:47
before your message your or your update

00:14:43 --> 00:14:50
your computation yeah it's final and so

00:14:46 --> 00:14:52
that is a consensus problem how do you

00:14:49 --> 00:14:55
how do we agree that the that the update

00:14:51 --> 00:14:58
is final how do we agree that something

00:14:54 --> 00:15:01
can no longer be reversed so proof of

00:14:57 --> 00:15:03
work is a probabilistic consensus

00:15:00 --> 00:15:06
algorithm in that there is always some

00:15:02 --> 00:15:08
probability that whatever update to the

00:15:05 --> 00:15:10
ledger was performed could be reverted

00:15:07 --> 00:15:13
at some point in time later mm-hm

00:15:09 --> 00:15:15
and they keep the key aspect there is

00:15:12 --> 00:15:17
that the more time passes the less

00:15:14 --> 00:15:19
likely it becomes that that update gets

00:15:16 --> 00:15:21
reverted but it's always probabilistic

00:15:18 --> 00:15:22
and this is why you kind of have to wait

00:15:20 --> 00:15:24
60 minutes before you know that it's

00:15:21 --> 00:15:25
final because that's the point that

00:15:23 --> 00:15:27
which that probability becomes so much

00:15:24 --> 00:15:29
so minimal that you can't you can

00:15:26 --> 00:15:30
effectively trust that it won't be

00:15:28 --> 00:15:32
reverted but there there is innovation

00:15:29 --> 00:15:34
and consensus algorithms that are better

00:15:31 --> 00:15:38
than that that are not probabilistic and

00:15:33 --> 00:15:41
that are actually deterministic and our

00:15:37 --> 00:15:43
final on a far shorter time span yeah

00:15:40 --> 00:15:45
and you need both right you need non

00:15:42 --> 00:15:47
probabilistic and you need fast right so

00:15:44 --> 00:15:50
I'd you know everybody talks about the

00:15:46 --> 00:15:53
etherium contract things underlying

00:15:49 --> 00:15:55
things like hey when you go rent an

00:15:52 --> 00:15:57
Airbnb that lock will open because I

00:15:54 --> 00:15:58
know it's you there's a smart contract

00:15:56 --> 00:15:59
hat governs that

00:15:57 --> 00:16:01
oh you're allowed to stay here tonight

00:15:58 --> 00:16:04
yeah no one's gonna wait there

00:16:00 --> 00:16:06
60 minutes sorry for that and so is it

00:16:03 --> 00:16:08
view feasible are we on a path to

00:16:05 --> 00:16:10
basically enable use cases like that

00:16:07 --> 00:16:12
where like I've got my smart key and I'm

00:16:09 --> 00:16:13
in front of the Airbnb and like in

00:16:11 --> 00:16:15
seconds that thing is going to open cuz

00:16:12 --> 00:16:17
the contract clear is that possible or

00:16:14 --> 00:16:20
is that not not quite possible yet we

00:16:16 --> 00:16:22
don't know the path I think I mean we do

00:16:19 --> 00:16:24
see we do see a path I think that that I

00:16:21 --> 00:16:26
so given the improvements on the the

00:16:23 --> 00:16:28
networking layer with companies like box

00:16:25 --> 00:16:30
route improvements on the consensus

00:16:27 --> 00:16:32
layer with companies like Definity and I

00:16:29 --> 00:16:33
theorem 2.0 and cosmos and polka dot

00:16:31 --> 00:16:35
here's like a large number of people

00:16:32 --> 00:16:39
working at that level and then finally

00:16:34 --> 00:16:41
improvements on the cost per instruction

00:16:38 --> 00:16:43
similarly proof of stake and other

00:16:40 --> 00:16:45
consensus algorithms don't use the

00:16:42 --> 00:16:47
xpensive proof of work that the

00:16:44 --> 00:16:48
original blockchain is used and so that

00:16:46 --> 00:16:51
can also come down so you can see a

00:16:47 --> 00:16:53
world where where this does come down to

00:16:50 --> 00:16:55
it to a degree that it becomes fairly

00:16:52 --> 00:16:57
practical for everyday use for for

00:16:54 --> 00:17:00
things like kind of like a quick

00:16:56 --> 00:17:01
light-hearted interactions between

00:16:59 --> 00:17:06
people or between people and machines

00:17:00 --> 00:17:08
and so I think that that is certainly

00:17:05 --> 00:17:10
possible and I think we're on our way

00:17:07 --> 00:17:12
but I think it's worth noting

00:17:09 --> 00:17:16
decentralized systems will always be

00:17:11 --> 00:17:18
more expensive and less performant than

00:17:15 --> 00:17:20
centralized ones yeah there's just an

00:17:17 --> 00:17:22
inherent trade-off there and there's an

00:17:19 --> 00:17:25
inherent cost to decentralizing a

00:17:21 --> 00:17:27
computer system and so it won't replace

00:17:24 --> 00:17:31
verything there will be applications

00:17:26 --> 00:17:34
that will always make sense for a

00:17:30 --> 00:17:35
centralized world for Rusted entities

00:17:33 --> 00:17:37
and there will be some applications for

00:17:34 --> 00:17:39
which decentralization very much it does

00:17:36 --> 00:17:42
make sense and those are the ones where

00:17:38 --> 00:17:45
Trust is the key differentiator where

00:17:41 --> 00:17:47
Trust is the bottleneck to scale yeah

00:17:44 --> 00:17:49
all right that's where decentralized

00:17:46 --> 00:17:50
systems will shine good I want you to

00:17:48 --> 00:17:53
give me a couple examples of sort of

00:17:49 --> 00:17:55
applications where Trust is the key as

00:17:52 --> 00:17:57
opposed to performance or you know cost

00:17:54 --> 00:17:59
or whatever yeah but before we do that I

00:17:56 --> 00:18:00
want to talk about this notion of proof

00:17:58 --> 00:18:02
work trends

00:17:59 --> 00:18:04
and proof of steak because this is super

00:18:01 --> 00:18:08
important I read all the time that

00:18:03 --> 00:18:10
Bitcoin mining is contain consuming some

00:18:07 --> 00:18:13
like known fraction of the world's

00:18:09 --> 00:18:14
electricity because the math is so hard

00:18:12 --> 00:18:16
to actually do one of these proof of

00:18:13 --> 00:18:19
works right it has to go it you know

00:18:15 --> 00:18:21
similar to public key cryptography and

00:18:18 --> 00:18:22
so what's happening here like how do we

00:18:20 --> 00:18:24
get on a path where we're not consuming

00:18:21 --> 00:18:27
all the world's electricity doing these

00:18:23 --> 00:18:29
proofs yes so the key the key goal for

00:18:26 --> 00:18:31
crypto networks is to build trust in a

00:18:28 --> 00:18:33
way that is bottom-up and then does not

00:18:30 --> 00:18:35
depend on some central authority and so

00:18:32 --> 00:18:37
as a result you you have to figure out a

00:18:34 --> 00:18:40
way to make the network be self policing

00:18:36 --> 00:18:42
and to and to kind of have a an

00:18:39 --> 00:18:46
incentive structure that makes its

00:18:41 --> 00:18:47
members police one another in a way that

00:18:45 --> 00:18:50
he entire network kind of kind of works

00:18:46 --> 00:18:52
and and sort of proceeds according to

00:18:49 --> 00:18:54
people's expectations so when it says

00:18:51 --> 00:18:57
you have to make it the rational

00:18:53 --> 00:19:00
equilibrium to play by the rules of the

00:18:56 --> 00:19:02
game rather than to defect and

00:18:59 --> 00:19:04
profit in some way that is that is

00:19:01 --> 00:19:06
against the rules and that that kind of

00:19:03 --> 00:19:09
igures out a way to game the system

00:19:05 --> 00:19:11
right and so in Bitcoin one of the key

00:19:08 --> 00:19:13
ways this worked was through this proof

00:19:10 --> 00:19:15
work so maybe talk a little bit about

00:19:12 --> 00:19:16
how did it work why did it consume so

00:19:14 --> 00:19:19
much electricity and then where are we

00:19:15 --> 00:19:23
going exactly so so in the world of

00:19:18 --> 00:19:25
Bitcoin the way that that uh the network

00:19:22 --> 00:19:27
gates participation is through this

00:19:24 --> 00:19:30
proof of work so in order for you to be

00:19:26 --> 00:19:33
able to append a block to the blockchain

00:19:29 --> 00:19:34
you have to compute this expensive proof

00:19:32 --> 00:19:38
work on top of the block that you

00:19:33 --> 00:19:40
want to add and and once once

00:19:37 --> 00:19:43
you do then the entire network can

00:19:39 --> 00:19:45
verify the proof that you provided very

00:19:42 --> 00:19:46
inexpensively and can accept accept

00:19:44 --> 00:19:48
he block that you're adding adding to

00:19:45 --> 00:19:51
the blockchain this is important because

00:19:47 --> 00:19:54
there is no central authority who

00:19:50 --> 00:19:55
decides who gets to add a blocking who

00:19:53 --> 00:19:57
doesn't that's the whole point we want

00:19:54 --> 00:20:00
o do away with that central authority

00:19:56 --> 00:20:04
and so you have to have some some some

00:19:59 --> 00:20:07
like decentralized mechanism that that

00:20:03 --> 00:20:10
are prevents someone from completely

00:20:06 --> 00:20:13
monopolizing and and controlling the the

00:20:09 --> 00:20:14
underlying ledger the blockchain right

00:20:12 --> 00:20:18
and so that this proof of work is that

00:20:13 --> 00:20:22
system because no one person controls

00:20:17 --> 00:20:24
the the full extent of the computational

00:20:21 --> 00:20:26
power and the network so no one person

00:20:23 --> 00:20:29
controls that ability to add to add

00:20:25 --> 00:20:31
blocks to the blockchain okay so you're

00:20:28 --> 00:20:33
setting up this struggle for all the

00:20:30 --> 00:20:35
miners competing with each other to do

00:20:32 --> 00:20:38
this very hard proof of work right and

00:20:34 --> 00:20:39
then once I have a candidate answer it's

00:20:37 --> 00:20:41
easy to check whether I got the answer

00:20:38 --> 00:20:43
ight right so I couldn't cheat exactly

00:20:40 --> 00:20:46
right by providing a fake answer so the

00:20:42 --> 00:20:48
key problem that crypto networks have to

00:20:45 --> 00:20:50
solve is figuring out who gets to

00:20:47 --> 00:20:53
participate because there's no one

00:20:49 --> 00:20:54
central party who is able to decide who

00:20:52 --> 00:20:56
gets to participate in who doesn't

00:20:53 --> 00:20:59
hat's the entire point we want to do

00:20:55 --> 00:21:02
away with that and so proof of work does

00:20:58 --> 00:21:04
this by requiring every participant to

00:21:01 --> 00:21:06
compute an expensive proof of work

00:21:03 --> 00:21:08
it's a computation that's done on top of

00:21:05 --> 00:21:09
every block that they want to add to the

00:21:07 --> 00:21:11
blockchain so that's an extrinsic

00:21:08 --> 00:21:14
resource that they have to come across

00:21:10 --> 00:21:16
they have to procure to be able to

00:21:13 --> 00:21:19
participate and it prevents any one

00:21:15 --> 00:21:22
person from completely monopolizing the

00:21:18 --> 00:21:24
system and from having unilateral

00:21:21 --> 00:21:25
ability to modify the underlying

00:21:23 --> 00:21:26
blockchain mm-hm

00:21:24 --> 00:21:28
that of course is very expensive because

00:21:25 --> 00:21:30
you have to you have to come across all

00:21:27 --> 00:21:33
of this computational power in order to

00:21:29 --> 00:21:34
participate so proof of stake says

00:21:32 --> 00:21:36
omething different is instead of making

00:21:33 --> 00:21:38
the resource that you have to come

00:21:35 --> 00:21:41
across and you have to procure be

00:21:37 --> 00:21:43
xtrinsic to the system why not make it

00:21:40 --> 00:21:45
something that's intrinsic to it namely

00:21:42 --> 00:21:49
why not make it a crypto asset why not

00:21:44 --> 00:21:51
make it a token that you have to own in

00:21:48 --> 00:21:53
order to in order to buy by your

00:21:50 --> 00:21:55
participation in the system so what

00:21:52 --> 00:21:59
proof of stake does is it says if you

00:21:54 --> 00:22:01
own 2% of the tokens in the network then

00:21:58 --> 00:22:04
by and large like on average you'll have

00:22:00 --> 00:22:06
2% of this say in what blocks get to

00:22:03 --> 00:22:08
make it onto the blockchain and which

00:22:05 --> 00:22:13
ones don't but now because the the the

00:22:07 --> 00:22:15
asset itself the resource that you

00:22:12 --> 00:22:17
need to be in possession of in order to

00:22:14 --> 00:22:19
participate because it's no longer

00:22:16 --> 00:22:21
extrinsic to the system it's no longer a

00:22:18 --> 00:22:23
resource that is sort of a physical

00:22:20 --> 00:22:25
resource like electricity and rather

00:22:22 --> 00:22:26
it's entirely virtual now the cost of

00:22:24 --> 00:22:28
actually

00:22:25 --> 00:22:31
participating in consensus and making

00:22:27 --> 00:22:34
the entire network work in real terms

00:22:30 --> 00:22:36
comes down dramatically and it's just

00:22:33 --> 00:22:38
secure or at least theoretically can be

00:22:35 --> 00:22:40
made just as secure and that's a

00:22:37 --> 00:22:44
controversial statement but but I will

00:22:39 --> 00:22:46
sort of stand by it but it's less

00:22:43 --> 00:22:48
expensive and so for from a cost per

00:22:45 --> 00:22:50
instruction and a cost per instruction

00:22:47 --> 00:22:52
basis it'll be much more performant than

00:22:49 --> 00:22:55
a proof-of-work goddess so if I could

00:22:51 --> 00:22:57
restate that it sounds like in Bitcoin

00:22:54 --> 00:22:59
with its proof of work I had to bring

00:22:56 --> 00:23:01
electricity consumed the electricity do

00:22:58 --> 00:23:03
this hard math and that was how I sort

00:23:00 --> 00:23:05
of entered the system and participated

00:23:02 --> 00:23:07
right and my reward is a miner for

00:23:04 --> 00:23:09
burning all this electricity is I get

00:23:06 --> 00:23:11
paid in Bitcoin yeah in proof of work

00:23:08 --> 00:23:13
I'm bringing basically tokens and I'm

00:23:10 --> 00:23:14
sorry improve of stake I'm bringing the

00:23:12 --> 00:23:16
tokens themselves I'm not consuming

00:23:13 --> 00:23:20
electricity I'm just bringing the tokens

00:23:15 --> 00:23:22
themselves and I'm by virtue of my

00:23:19 --> 00:23:25
ownership of the tokens I can

00:23:21 --> 00:23:28
participate in a proof of stake that

00:23:24 --> 00:23:29
delivers the same trust properties as

00:23:27 --> 00:23:31
proof of work without burning all the

00:23:28 --> 00:23:34
lectricity exactly yeah you got it

00:23:30 --> 00:23:36
so it sounds like all of these

00:23:33 --> 00:23:38
things need to come together for us to

00:23:35 --> 00:23:40
build sort of distributed compute in

00:23:37 --> 00:23:42
this new world right we need the new

00:23:39 --> 00:23:43
CDNs we need this transition to things

00:23:41 --> 00:23:45
that look like proof of stake so we're

00:23:42 --> 00:23:47
not consuming all this electricity any

00:23:44 --> 00:23:50
other big innovations that need to

00:23:46 --> 00:23:53
happen in this space to bring the

00:23:49 --> 00:23:55
transaction cost down in the transaction

00:23:52 --> 00:23:56
speed up I think those are the big ones

00:23:54 --> 00:23:58
yeah so we're talking about the three

00:23:55 --> 00:24:01
pillars of computation there's there's

00:23:57 --> 00:24:02
um well the three the three pillars of

00:24:00 --> 00:24:05
scalability of competition yeah there's

00:24:01 --> 00:24:06
throughput there's latency and then

00:24:04 --> 00:24:07
there's a cost per instruction and so we

00:24:05 --> 00:24:09
kind of addressed all three there's

00:24:06 --> 00:24:10
companies that are working in

00:24:08 --> 00:24:12
all three and I think these are very

00:24:09 --> 00:24:14
much still open problems and there's

00:24:11 --> 00:24:16
just a lot of greenfield for exploration

00:24:13 --> 00:24:17
and so I will tell you Google

00:24:15 --> 00:24:19
ngineering yeah like this is where it's

00:24:16 --> 00:24:21
exciting this is where we're like your

00:24:18 --> 00:24:23
skills as a sort of distributed

00:24:20 --> 00:24:26
systems engineer or machine learning

00:24:22 --> 00:24:28
expert can kind of leverage those skills

00:24:25 --> 00:24:30
to figure out some of some of these open

00:24:27 --> 00:24:33
and open problems got it so if I'm

00:24:29 --> 00:24:35
otivated by doing things like I want to

00:24:32 --> 00:24:37
create a better tcp/ip I wanna create a

00:24:34 --> 00:24:39
better HTTPS right and oh man I'm just

00:24:36 --> 00:24:40
oo late to the party like I arrived

00:24:38 --> 00:24:42
when all those products

00:24:39 --> 00:24:43
were already settled like you're saying

00:24:41 --> 00:24:44
this space is for me because a lot of

00:24:42 --> 00:24:47
the problems haven't been settled yet

00:24:43 --> 00:24:50
yeah thorny problem unsettled

00:24:46 --> 00:24:52
big world impact yeah even if it's been

00:24:49 --> 00:24:54
ten years since the publishing of the

00:24:51 --> 00:24:56
Bitcoin white paper this is still very

00:24:53 --> 00:24:58
early days because I think that

00:24:55 --> 00:25:01
it's only been recent it's only recently

00:24:57 --> 00:25:03
that that people have begun to conceive

00:25:00 --> 00:25:05
of blockchains as computers as opposed

00:25:02 --> 00:25:09
to just payment systems so the the

00:25:04 --> 00:25:12
mergence of aetherium was in 2014 and

00:25:08 --> 00:25:15
it's only really been five years four

00:25:11 --> 00:25:17
years really of people thinking of

00:25:14 --> 00:25:19
Bakhtin's in this way and so it's it's

00:25:16 --> 00:25:21
very early days the space is very

00:25:18 --> 00:25:24
nascent and there's just a lot a lot of

00:25:20 --> 00:25:26
work to do great so perfect time why

00:25:23 --> 00:25:27
don't we sort of move on to part two so

00:25:25 --> 00:25:30
we talked about distributed compute

00:25:26 --> 00:25:32
let's talk about distributed storage and

00:25:29 --> 00:25:35
so you know we started with a Google

00:25:31 --> 00:25:38
photos example I kind of trust Google to

00:25:34 --> 00:25:40
have all my storage all my photos but to

00:25:37 --> 00:25:42
do that they have huge servers with lots

00:25:39 --> 00:25:44
of hard drives in them scattered around

00:25:41 --> 00:25:46
the world it's pretty expensive and so

00:25:43 --> 00:25:49
if I was a start-up trying to mount a

00:25:45 --> 00:25:51
frontal assault against that I kind of

00:25:48 --> 00:25:53
only have two choices one is raise like

00:25:50 --> 00:25:55
a trillion dollars all right and try to

00:25:52 --> 00:25:57
duplicate their their infrastructure

00:25:54 --> 00:26:00
right would point data centers

00:25:56 --> 00:26:03
everywhere point some presents or I

00:25:59 --> 00:26:04
could do what the distributed crypto

00:26:02 --> 00:26:06
community is trying to do which is

00:26:03 --> 00:26:07
convince you to lend me a bit of your

00:26:05 --> 00:26:10
hard drive space

00:26:06 --> 00:26:12
well the key reason that we need a

00:26:09 --> 00:26:15
decentralized layer of storage is

00:26:11 --> 00:26:17
because it itself will be a foundational

00:26:14 --> 00:26:19
building block for this decentralized

00:26:16 --> 00:26:21
world computer that we were talking

00:26:18 --> 00:26:23
about so in order for some of these

00:26:20 --> 00:26:26
applications that we talked about that

00:26:22 --> 00:26:27
are not really possible to build to

00:26:25 --> 00:26:29
build on top of a centralized

00:26:26 --> 00:26:33
architecture to really work we need the

00:26:28 --> 00:26:34
full the full extent of a computer that

00:26:32 --> 00:26:37
works in this way so if we had a

00:26:33 --> 00:26:39
centralized storage layer instead of a

00:26:36 --> 00:26:41
decentralized one then that would be the

00:26:38 --> 00:26:44
weakest link it would be it would dilute

00:26:40 --> 00:26:47
the the promise of the decentralized

00:26:43 --> 00:26:49
layer of computation if you don't have

00:26:46 --> 00:26:52
all all all of the pieces themselves

00:26:48 --> 00:26:53
being being decentralized and so and so

00:26:51 --> 00:26:54
that that's why that's why it's

00:26:52 --> 00:26:55
important

00:26:53 --> 00:26:57
we want to enable these applications

00:26:54 --> 00:27:00
that kind of depend on the central

00:26:56 --> 00:27:03
decentralization for trust and it's not

00:26:59 --> 00:27:05
so much to compete head-on with Amazon

00:27:02 --> 00:27:07
because the economics are different as

00:27:04 --> 00:27:12
we said like the centralizing system

00:27:06 --> 00:27:14
always comes with the cost so it won't

00:27:11 --> 00:27:16
make sense for just storing your photos

00:27:13 --> 00:27:19
if storing your photos is something that

00:27:15 --> 00:27:22
Amazon Google can do and if there's

00:27:18 --> 00:27:23
no trust dimension to doing that right

00:27:21 --> 00:27:26
now maybe if you care deeply about your

00:27:22 --> 00:27:28
photos not ever being seen by anyone but

00:27:25 --> 00:27:30
yourself or by anyone but your close

00:27:27 --> 00:27:31
friends then maybe you can imagine using

00:27:29 --> 00:27:33
a different kind of architecture

00:27:30 --> 00:27:36
one that's maybe more decentralized but

00:27:32 --> 00:27:37
for that kind of use case I imagine sort

00:27:35 --> 00:27:39
of the centralized data center model it

00:27:36 --> 00:27:41
works very well right and they're not

00:27:38 --> 00:27:44
waiting for the decentralization tax

00:27:40 --> 00:27:45
exactly and so it's it's always gonna be

00:27:43 --> 00:27:48
cheaper for them yes just for your

00:27:44 --> 00:27:50
photos but but there is there are

00:27:47 --> 00:27:51
interesting opportunities so so the for

00:27:49 --> 00:27:53
example there's a project called file

00:27:50 --> 00:27:54
coin there are a number of others too

00:27:52 --> 00:27:55
that are working in the same space one

00:27:53 --> 00:27:58
of them is called see another one is

00:27:54 --> 00:28:00
called storge and they are trying to

00:27:57 --> 00:28:02
build decentralized decentralized

00:27:59 --> 00:28:05
marketplaces for storage so the idea is

00:28:01 --> 00:28:07
yes I I can rent some of your Idol

00:28:04 --> 00:28:10
storage space on your laptop and pay you

00:28:06 --> 00:28:12
for that storage in file coin and the

00:28:09 --> 00:28:15
reason that that's now possible is

00:28:11 --> 00:28:17
because I can now trust that you will

00:28:14 --> 00:28:19
actually store my files and you can

00:28:16 --> 00:28:21
trust that I will pay you for that

00:28:18 --> 00:28:23
storage even if we're complete strangers

00:28:20 --> 00:28:24
and reside across the world from one

00:28:22 --> 00:28:27
another because of the cryptographic

00:28:23 --> 00:28:30
guarantees of the underlying protocol

00:28:26 --> 00:28:32
mm-hmm and so that's that's important

00:28:29 --> 00:28:34
because because previously without

00:28:31 --> 00:28:35
crypto and without block chains that

00:28:33 --> 00:28:38
would have been a very difficult

00:28:34 --> 00:28:40
interaction to coordinate it would have

00:28:38 --> 00:28:42
been very hard for us to establish trust

00:28:39 --> 00:28:44
from halfway across the world and make

00:28:41 --> 00:28:46
that exchange happen so it's a

00:28:43 --> 00:28:48
marketplace that now emerges where

00:28:45 --> 00:28:50
previously it couldn't have you know and

00:28:47 --> 00:28:55
it gives us this property that no one

00:28:49 --> 00:28:58
controls the this sort of layer of

00:28:54 --> 00:29:00
storage and we can use it in in

00:28:57 --> 00:29:02
conjunction with a computation layer to

00:28:59 --> 00:29:04
build applications that are fully

00:29:01 --> 00:29:09
decentralized and that are unstoppable

00:29:03 --> 00:29:11
and kind of run in their own right

00:29:08 --> 00:29:14
and therefore therefore command greater

00:29:10 --> 00:29:16
trust than applications that are that

00:29:13 --> 00:29:18
are centralized so I remember before the

00:29:15 --> 00:29:20
crypto craze there were definitely

00:29:17 --> 00:29:21
startups that were trying to do that do

00:29:19 --> 00:29:23
this exact thing which is sort of let's

00:29:20 --> 00:29:25
hare harddrive space right I remember

00:29:22 --> 00:29:27
there were backup companies that

00:29:24 --> 00:29:29
basically say your price would be I'll

00:29:26 --> 00:29:31
make up a price $20 per gig per month

00:29:28 --> 00:29:33
but if you contribute your own hard

00:29:30 --> 00:29:35
rive space your price is $10 per gig a

00:29:32 --> 00:29:37
month or whatever I'm making up those

00:29:34 --> 00:29:40
numbers but they never really got to

00:29:36 --> 00:29:42
scale so what are the advantages of

00:29:39 --> 00:29:45
doing this with sort of a cryptographic

00:29:41 --> 00:29:47
protocol as their intermediary as

00:29:44 --> 00:29:48
opposed to just hey there's a company

00:29:46 --> 00:29:51
and there's a service and there's a

00:29:47 --> 00:29:52
price chart and please participate right

00:29:50 --> 00:29:54
and we're gonna sort of try and we're

00:29:51 --> 00:29:57
gonna sort of transact value in fiat

00:29:53 --> 00:30:00
currency yeah well I think that the key

00:29:56 --> 00:30:03
difference is that those companies were

00:29:59 --> 00:30:06
operating on the assumption that the the

00:30:02 --> 00:30:08
value add here is an economic is

00:30:05 --> 00:30:10
economic mm-hmm that you actually that

00:30:07 --> 00:30:14
is kind of like uber you you'll tap into

00:30:09 --> 00:30:16
all of this only used storage space that

00:30:13 --> 00:30:18
previously that previously wasn't

00:30:15 --> 00:30:20
accessible that you'll offer that at a

00:30:17 --> 00:30:23
cheaper rate but I think that in the end

00:30:19 --> 00:30:26
because storage is the most commoditized

00:30:22 --> 00:30:30
of computational resources and because

00:30:25 --> 00:30:33
there's just so strong economies of

00:30:29 --> 00:30:36
scale that benefit companies like Amazon

00:30:32 --> 00:30:38
as they build data centers the economic

00:30:35 --> 00:30:39
argument just doesn't doesn't work so

00:30:37 --> 00:30:42
the reason that we need decentralized

00:30:38 --> 00:30:43
storage networks is not because they're

00:30:41 --> 00:30:45
gonna reduce the price of storage by

00:30:42 --> 00:30:49
orders of magnitude at least for most

00:30:44 --> 00:30:50
kinds of files and for most use

00:30:48 --> 00:30:53
cases I don't I don't believe that

00:30:49 --> 00:30:55
'll be that'll be the case the the

00:30:52 --> 00:30:57
value proposition is that is that again

00:30:54 --> 00:31:00
we we now no longer have this central

00:30:56 --> 00:31:01
entity that's controlling the storage on

00:30:59 --> 00:31:03
this network and so for the kinds of

00:31:00 --> 00:31:04
applications that depend on that the

00:31:02 --> 00:31:08
kinds of applications that really cannot

00:31:03 --> 00:31:10
be built unless you have that you just

00:31:07 --> 00:31:12
have no other option yeah so

00:31:09 --> 00:31:14
you would pay the additional cost you

00:31:11 --> 00:31:17
pay a higher price for storing your

00:31:13 --> 00:31:20
files and file coin because that matters

00:31:16 --> 00:31:21
yeah is there a privacy argument here

00:31:19 --> 00:31:23
which is the

00:31:20 --> 00:31:25
it's decentralized for instance there's

00:31:22 --> 00:31:28
nobody to give a government subpoena to

00:31:24 --> 00:31:31
say I want to see your files that I

00:31:27 --> 00:31:34
think privacy comes into it to some

00:31:30 --> 00:31:35
xtent but I think it's a little bit

00:31:33 --> 00:31:37
orthogonal because you could imagine

00:31:34 --> 00:31:38
ncrypting your files before storing

00:31:36 --> 00:31:40
them in a centralized service yeah okay

00:31:37 --> 00:31:43
so you there are ways of building

00:31:39 --> 00:31:47
privacy into into sort of existing

00:31:42 --> 00:31:49
centralized storage networks okay and

00:31:46 --> 00:31:51
then what are some of the challenging

00:31:48 --> 00:31:53
computer science things about building

00:31:50 --> 00:31:55
these and so if there was proof of work

00:31:52 --> 00:31:58
for computation what are the proof of in

00:31:54 --> 00:31:59
yeah base yeah well the biggest one is

00:31:57 --> 00:32:00
trusting that the people who are

00:31:58 --> 00:32:03
claiming to be storing your files

00:32:00 --> 00:32:06
actually are getting your files so

00:32:02 --> 00:32:08
there's this line of work that that's

00:32:05 --> 00:32:12
been spearheaded by by the people of our

00:32:07 --> 00:32:14
coin and and by Stanford's cryptography

00:32:11 --> 00:32:16
lab dambo nades damn bonus lab and and

00:32:13 --> 00:32:20
certain people like on fish and Benedict

00:32:15 --> 00:32:22
Boone's underneath them have done a lot

00:32:19 --> 00:32:25
of work on figuring out how to create

00:32:21 --> 00:32:29
cryptographic proofs of retrieve ability

00:32:24 --> 00:32:30
how can I prove to you that I actually

00:32:28 --> 00:32:32
am storing the files that I'm claiming

00:32:29 --> 00:32:34
that I'm that I am storing right and

00:32:31 --> 00:32:37
it's super interesting is extremely

00:32:33 --> 00:32:39
cutting-edge and it's basically at the

00:32:36 --> 00:32:41
art of how how you make a system like

00:32:38 --> 00:32:44
this work yeah so you basically have to

00:32:40 --> 00:32:46
catch the pretenders which is you don't

00:32:43 --> 00:32:48
want somebody to be able to say yes I'll

00:32:45 --> 00:32:49
store your files and then not actually

00:32:47 --> 00:32:52
store them right because it would may be

00:32:48 --> 00:32:54
perfect I'm not to store them right and

00:32:51 --> 00:32:56
so these sort of places of retrieve

00:32:53 --> 00:32:57
ability are basically ways to catch the

00:32:55 --> 00:33:00
pretenders is that right and it's sort

00:32:56 --> 00:33:01
of a mathematical fashion so yeah we you

00:32:59 --> 00:33:02
actually had a conversation with Ben

00:33:00 --> 00:33:04
fish on this so for people who are

00:33:01 --> 00:33:07
interested in exploring this topic

00:33:03 --> 00:33:10
further there's a couple YouTube videos

00:33:06 --> 00:33:11
awesome so okay so we've talked about

00:33:09 --> 00:33:13
distributed compute we've talked about

00:33:10 --> 00:33:15
distributed storage I guess the third

00:33:12 --> 00:33:16
leg is now networking like what's

00:33:14 --> 00:33:18
happening here actually this kind of

00:33:15 --> 00:33:22
reminds me do you remember the company

00:33:17 --> 00:33:25
phone this sort of back in 2006 and the

00:33:21 --> 00:33:27
idea was I could buy a Wi-Fi router from

00:33:24 --> 00:33:28
this company called phone and then I

00:33:26 --> 00:33:32
could sort of do one of two things with

00:33:27 --> 00:33:34
it one I could sort of offer it in Lynas

00:33:31 --> 00:33:34
mode which is I gave it away free Wi-Fi

00:33:33 --> 00:33:36
access right

00:33:33 --> 00:33:39
anybody gonna came near my house with my

00:33:35 --> 00:33:42
Wi-Fi router you could access my Wi-Fi

00:33:38 --> 00:33:44
for free and then in exchange I could

00:33:41 --> 00:33:47
access anybody else's Wi-Fi access point

00:33:43 --> 00:33:48
for free so that's mode one or I could

00:33:46 --> 00:33:51
be in bill mode and in bill mode

00:33:47 --> 00:33:53
basically I would say look my Wi-Fi is

00:33:50 --> 00:33:57
available to you but you're gonna rent

00:33:52 --> 00:33:59
it for two bucks and in in exchange for

00:33:56 --> 00:34:01
that I would have to pay you know to

00:33:58 --> 00:34:02
access other people's Wi-Fi right so I

00:34:00 --> 00:34:06
could be an open source mode or I could

00:34:01 --> 00:34:08
be in I'm rent to seeking mode and it

00:34:05 --> 00:34:10
was this attempt to basically create a

00:34:07 --> 00:34:13
distributed isp out of you know millions

00:34:09 --> 00:34:15
and millions of wireless so it's

00:34:12 --> 00:34:16
omething of wireless access points is

00:34:14 --> 00:34:18
omething similar going on in crypto

00:34:15 --> 00:34:21
day absolutely yeah I think the

00:34:17 --> 00:34:24
difficulty with those efforts has often

00:34:20 --> 00:34:26
been just a problem of density and the

00:34:23 --> 00:34:30
problem of incentives how do you get

00:34:25 --> 00:34:32
enough people to offer up hardware that

00:34:29 --> 00:34:36
forwards packets and provides bandwidth

00:34:31 --> 00:34:38
within a particular geographic region to

00:34:35 --> 00:34:41
make it make sense and to make it work

00:34:37 --> 00:34:43
and to be at all competitive with sort

00:34:40 --> 00:34:45
of the more kind of centralized top-down

00:34:42 --> 00:34:47
Internet backbone infrastructure that we

00:34:44 --> 00:34:50
rely on and so there are there are a

00:34:46 --> 00:34:51
number of projects that are it's very

00:34:49 --> 00:34:53
early because this is actually probably

00:34:50 --> 00:34:54
one of the hardest problems in this base

00:34:52 --> 00:34:56
to tackle like how do you decentralized

00:34:54 --> 00:34:58
even the networking layer the

00:34:55 --> 00:35:01
communication between different nodes

00:34:57 --> 00:35:04
and to not have it depend on centralized

00:35:00 --> 00:35:07
internet infrastructure so people are

00:35:03 --> 00:35:10
talking about incentivized mesh

00:35:06 --> 00:35:12
networking protocols where you can earn

00:35:09 --> 00:35:15
cryptocurrency you can earn like say the

00:35:11 --> 00:35:18
asset that's native to a particular

00:35:14 --> 00:35:20
protocol by setting up a router yeah

00:35:17 --> 00:35:22
like this router can be can be a normal

00:35:19 --> 00:35:23
router that just forwards packets but it

00:35:21 --> 00:35:25
could also be Wireless and provide

00:35:22 --> 00:35:27
a different layer of

00:35:24 --> 00:35:29
connectivity that that otherwise and

00:35:26 --> 00:35:31
that that essentially makes makes the

00:35:28 --> 00:35:34
networking layer more robust and

00:35:30 --> 00:35:36
more resistant to to censorship and

00:35:33 --> 00:35:38
perhaps even even more performant if you

00:35:35 --> 00:35:41
have just greater connectivity to the

00:35:37 --> 00:35:42
people you want to interact with so yeah

00:35:40 --> 00:35:44
I think this is one of the one of these

00:35:41 --> 00:35:46
problem areas that's that's fairly far

00:35:43 --> 00:35:47
out because it kind of depends on on the

00:35:45 --> 00:35:50
other two building blocks

00:35:46 --> 00:35:51
and and it has its unique challenges

00:35:49 --> 00:35:53
because now now we're talking about

00:35:50 --> 00:35:55
bringing hardware into the picture

00:35:52 --> 00:35:58
yes that that's always a whole other

00:35:54 --> 00:36:00
kind of worms but it is very interesting

00:35:57 --> 00:36:02
and I think in the end it'll it'll also

00:35:59 --> 00:36:05
be a piece of the puzzle so there's

00:36:01 --> 00:36:07
the that that's one angle to it

00:36:04 --> 00:36:08
's it's decentralizing networking and

00:36:06 --> 00:36:10
then the other angle is making

00:36:07 --> 00:36:12
networking itself which is more

00:36:09 --> 00:36:14
performant for the use cases of

00:36:11 --> 00:36:16
decentralization so we talked a little

00:36:13 --> 00:36:18
bit about you know the CDN is for blocks

00:36:15 --> 00:36:21
you know so that kind of falls into that

00:36:17 --> 00:36:24
category into this category as well mmm

00:36:20 --> 00:36:25
got it so those are the key ingredients

00:36:23 --> 00:36:27
that you need to build a computer right

00:36:24 --> 00:36:29
you need compute you need network you

00:36:26 --> 00:36:31
need storage and it looks like there's

00:36:28 --> 00:36:33
ort of efforts underway in all of these

00:36:30 --> 00:36:36
things let's assume for a second that

00:36:32 --> 00:36:37
you know time has gone by and protocols

00:36:35 --> 00:36:39
and sort of Darwinian fashion have

00:36:36 --> 00:36:42
competed and a couple winners have

00:36:38 --> 00:36:43
merged and these things look more like

00:36:41 --> 00:36:46
solved problems right so now the

00:36:42 --> 00:36:48
xciting opportunity is ok now we can

00:36:45 --> 00:36:50
build killer apps now on top of the

00:36:47 --> 00:36:52
blockchain computer and so maybe talk to

00:36:49 --> 00:36:55
me about what is the community most

00:36:51 --> 00:36:56
excited about what kinds of apps are you

00:36:54 --> 00:36:57
gonna build because as you've been

00:36:55 --> 00:36:59
pointing out it's not gonna be the

00:36:56 --> 00:37:00
straightforward replacements for the

00:36:58 --> 00:37:02
things that we know and love today right

00:36:59 --> 00:37:05
it's not like instantly the replacement

00:37:01 --> 00:37:07
for Airbnb or Google photos or lyft

00:37:04 --> 00:37:09
right because those systems don't have

00:37:06 --> 00:37:12
to pay the decentralization tax it's

00:37:08 --> 00:37:13
probably gonna be another class of apps

00:37:11 --> 00:37:16
at least to begin with that that is the

00:37:12 --> 00:37:18
killer question I think as with any new

00:37:15 --> 00:37:20
technology it is very difficult to

00:37:17 --> 00:37:22
predict what applications will be the

00:37:19 --> 00:37:24
most the most impactful I think one

00:37:21 --> 00:37:26
reason to believe that that are the kind

00:37:23 --> 00:37:29
of innovation that we'll see will be

00:37:25 --> 00:37:32
enormous is that everything

00:37:28 --> 00:37:33
happens and all of the code that's

00:37:31 --> 00:37:35
written in the space ends up being

00:37:32 --> 00:37:37
open-source and so as a result the ideas

00:37:34 --> 00:37:40
are out there people share their ideas

00:37:37 --> 00:37:43
with other teams other teams to build on

00:37:39 --> 00:37:45
top of one another's ideas and so that

00:37:42 --> 00:37:47
he kind of innovation that we're likely

00:37:44 --> 00:37:50
to see is it's just it's combinatorial

00:37:46 --> 00:37:52
in nature and likely more explosive and

00:37:49 --> 00:37:54
will accelerate more quickly than it has

00:37:51 --> 00:37:55
in previous four previous waves of

00:37:53 --> 00:37:59
computing and previous waves of

00:37:55 --> 00:38:01
technology if we do have this kind of

00:37:58 --> 00:38:04
decentralized world

00:38:00 --> 00:38:06
that is a kind of a computational fabric

00:38:03 --> 00:38:08
on top of which applications can run and

00:38:05 --> 00:38:11
it it is unified and that one

00:38:07 --> 00:38:14
application can easily talk to another

00:38:10 --> 00:38:16
then we have the possibility of

00:38:13 --> 00:38:18
composability of applications so not

00:38:15 --> 00:38:21
only do we have the sharing of ideas

00:38:17 --> 00:38:23
that are just available to people

00:38:20 --> 00:38:25
because by virtue of being open-source

00:38:22 --> 00:38:28
but we also have the actual

00:38:24 --> 00:38:29
composability of running code code that

00:38:27 --> 00:38:31
runs on top of this computational fabric

00:38:28 --> 00:38:33
that builds on top of the code that

00:38:30 --> 00:38:35
other people have built and this kind of

00:38:32 --> 00:38:38
composability will just fuel the flame

00:38:34 --> 00:38:39
of combinatorial and innovation even

00:38:37 --> 00:38:41
further if you like the kinds of

00:38:38 --> 00:38:45
applications that we'll see as a result

00:38:40 --> 00:38:47
are fundamentally impossible to predict

00:38:44 --> 00:38:49
but I will say I think the kinds of

00:38:46 --> 00:38:50
things that we've started to see the

00:38:48 --> 00:38:52
kinds of applications that seem to be

00:38:49 --> 00:38:54
working so far and it's still very early

00:38:51 --> 00:38:58
and they're working only in kind of

00:38:53 --> 00:39:01
niche within niche communities are ones

00:38:57 --> 00:39:02
where where Trust is the bottleneck to

00:39:00 --> 00:39:05
scale so I think the most obvious one

00:39:01 --> 00:39:07
began with Bitcoin it's attempting to be

00:39:04 --> 00:39:12
money and the only way that you would

00:39:06 --> 00:39:16
trust that you would trust a program

00:39:11 --> 00:39:18
that maintains a ledger of tokens that

00:39:15 --> 00:39:20
and that claim is that those tokens

00:39:17 --> 00:39:23
hould be money is if that ledger isn't

00:39:19 --> 00:39:26
in the inner control of of anyone of any

00:39:22 --> 00:39:28
one entity or any one individual I guess

00:39:25 --> 00:39:31
you would trust the central government

00:39:27 --> 00:39:33
maybe but you would not trust a company

00:39:30 --> 00:39:35
to do that so you wouldn't have been

00:39:32 --> 00:39:39
able to build Bitcoin on top of Amazon

00:39:34 --> 00:39:40
Bitcoin is like one example of an

00:39:38 --> 00:39:41
application that you can build and a

00:39:39 --> 00:39:43
bunch of the applications that have

00:39:40 --> 00:39:46
worked so far in the etherium acres the

00:39:42 --> 00:39:47
cosystem primarily have been financial

00:39:45 --> 00:39:50
in nature have been things that build on

00:39:46 --> 00:39:54
top of that initial idea the things like

00:39:49 --> 00:39:58
lending platforms derivatives exchanges

00:39:53 --> 00:40:01
things that depend on trust for for them

00:39:57 --> 00:40:03
to really take off but you can we've

00:40:00 --> 00:40:05
also started to see other applications

00:40:02 --> 00:40:06
that benefit from this feature

00:40:04 --> 00:40:09
I think gaming is an interesting one

00:40:05 --> 00:40:11
where you can imagine taking the

00:40:08 --> 00:40:13
xisting world of gaming you can imagine

00:40:10 --> 00:40:15
for example World of Warcraft where

00:40:12 --> 00:40:17
people have significant

00:40:14 --> 00:40:19
investment in their character and in the

00:40:16 --> 00:40:22
gear that they have and in the lives

00:40:18 --> 00:40:26
that they live within within these games

00:40:21 --> 00:40:28
taken to a whole other level where you

00:40:25 --> 00:40:30
actually own your character and you own

00:40:27 --> 00:40:33
the gear for your character and you can

00:40:29 --> 00:40:35
take your character and gear out of the

00:40:32 --> 00:40:37
game and maybe into another game because

00:40:34 --> 00:40:40
you now have this interoperable

00:40:36 --> 00:40:41
trustworthy fabric of computation that

00:40:39 --> 00:40:44
other developers can build on top of it

00:40:40 --> 00:40:47
so that kind of investment in your

00:40:43 --> 00:40:49
personality and in your character in the

00:40:46 --> 00:40:51
game is unlike what we've seen in gaming

00:40:48 --> 00:40:53
before so this could take gaming just to

00:40:50 --> 00:40:55
a whole other level that could be a very

00:40:52 --> 00:40:56
interesting set of applications but it

00:40:54 --> 00:40:58
very much depends on on these three

00:40:55 --> 00:41:00
building blocks we need scalability

00:40:57 --> 00:41:01
before gaming can really can really take

00:40:59 --> 00:41:04
off and we've seen examples of this I

00:41:00 --> 00:41:08
think crypto kitties is one where people

00:41:03 --> 00:41:11
became very invested in owning this

00:41:07 --> 00:41:13
digital this digital collectible which

00:41:10 --> 00:41:15
is is this something that is

00:41:12 --> 00:41:17
fundamentally new never before would you

00:41:14 --> 00:41:19
be able to directly own something that's

00:41:16 --> 00:41:21
digital is that first time that's

00:41:18 --> 00:41:22
possible I love this idea of being able

00:41:20 --> 00:41:24
to take sort of a high level character

00:41:21 --> 00:41:26
that I've developed in one game in

00:41:23 --> 00:41:28
moving it to another because you know

00:41:25 --> 00:41:30
look essentially a high level character

00:41:27 --> 00:41:32
and say World of Warcraft is the

00:41:29 --> 00:41:34
ultimate proof of work right which is I

00:41:31 --> 00:41:36
had to do a lot in order to get this

00:41:33 --> 00:41:38
character to be super high level and now

00:41:35 --> 00:41:40
I'm kind of stuck in World of Warcraft

00:41:37 --> 00:41:41
which is great if I want to play more

00:41:39 --> 00:41:43
World of Warcraft but like it'd be

00:41:40 --> 00:41:45
awesome if I could take my proof of work

00:41:42 --> 00:41:46
and move it to another system absolutely

00:41:44 --> 00:41:47
eah

00:41:45 --> 00:41:51
they think there's a story about

00:41:46 --> 00:41:52
how the talaq part of metallics

00:41:50 --> 00:41:55
inspiration for starting the etherium is

00:41:51 --> 00:41:57
having I'm not sure which game it was

00:41:54 --> 00:42:01
but it was like some gaming platform

00:41:56 --> 00:42:04
that revoked his ownership over over

00:42:00 --> 00:42:08
like a key a key item in the game I'm

00:42:03 --> 00:42:09
like me I'm like so bad right this is

00:42:07 --> 00:42:12
the problem with centralization right

00:42:08 --> 00:42:13
which is you have a company operating a

00:42:11 --> 00:42:15
game they can do whatever they want with

00:42:12 --> 00:42:16
e game right one change of two the

00:42:14 --> 00:42:18
Terms of Service and all of a sudden

00:42:15 --> 00:42:20
your proof-of-work is basically it's

00:42:17 --> 00:42:23
invalid exactly yeah that would make you

00:42:19 --> 00:42:25
mad well if you think about sort of

00:42:22 --> 00:42:26
trust being the key feature I mean

00:42:24 --> 00:42:28
there's so many sort of you know

00:42:25 --> 00:42:32
properties that we think about on the

00:42:27 --> 00:42:34
internet that are essentially sort of

00:42:31 --> 00:42:36
brokers of trust right so LinkedIn is

00:42:33 --> 00:42:38
ort of the the trusted entity to manage

00:42:35 --> 00:42:40
your resume and present your resume and

00:42:37 --> 00:42:42
eBay sort of the trusted marketplace

00:42:39 --> 00:42:44
where the sellers or Etsy is sort of the

00:42:41 --> 00:42:47
trusted place where you were to send

00:42:43 --> 00:42:49
money and expect stuff right

00:42:46 --> 00:42:51
here's Airbnb and lyft and so like

00:42:48 --> 00:42:55
trust seems like a super powerful

00:42:50 --> 00:42:57
primitive word for creating killer ads

00:42:54 --> 00:43:01
yeah definitely and I think that the web

00:42:56 --> 00:43:04
2.0 world has figured out how to

00:43:00 --> 00:43:07
bootstrap trust in a way that depends on

00:43:03 --> 00:43:09
things like identity and reputation

00:43:06 --> 00:43:13
where where there's social capital

00:43:08 --> 00:43:16
associated with your track record on the

00:43:12 --> 00:43:19
internet so things like reviews on Yelp

00:43:15 --> 00:43:22
or things like like who use on or stars

00:43:18 --> 00:43:24
on uber or number of likes on Twitter a

00:43:21 --> 00:43:26
number of followers on it's just

00:43:23 --> 00:43:29
generally social media you know these

00:43:25 --> 00:43:32
things are these this is like the B

00:43:28 --> 00:43:34
mechanism for trust that's used in web

00:43:31 --> 00:43:38
2.0 and I think crypto is it's

00:43:33 --> 00:43:40
orthogonal to that crypto today has no

00:43:37 --> 00:43:41
sense of identity that people are

00:43:39 --> 00:43:43
pseudonymous people can create multiple

00:43:40 --> 00:43:45
addresses and pretend to be different

00:43:42 --> 00:43:47
people people can abandon identities

00:43:44 --> 00:43:49
that that maybe have a bad reputation

00:43:46 --> 00:43:53
and move over to new identities that

00:43:48 --> 00:43:57
don't and the entire fabric of trust

00:43:52 --> 00:44:00
herefore depends not on social capital

00:43:56 --> 00:44:02
but rather on financial incentives so

00:43:59 --> 00:44:05
it's this orthogonal layer where you're

00:44:01 --> 00:44:08
incentivized to behave honestly because

00:44:04 --> 00:44:11
there is real money at stake and if you

00:44:07 --> 00:44:12
lie or if you behave in a way that's

00:44:10 --> 00:44:14
not in accordance to the rules of

00:44:11 --> 00:44:17
the protocol then there's something that

00:44:13 --> 00:44:19
you will lose as a result so that

00:44:16 --> 00:44:21
here's this sort of financial capital

00:44:18 --> 00:44:23
and financial incentives as a way of

00:44:20 --> 00:44:25
bootstrapping trust and then there's

00:44:22 --> 00:44:26
ocial capital as a way of bootstrapping

00:44:24 --> 00:44:30
Trust and I think that's one of the key

00:44:25 --> 00:44:33
differences between the web 2.0 web 2.0

00:44:29 --> 00:44:35
world and the now web 3.0 crypto enabled

00:44:32 --> 00:44:38
world and what will be very interesting

00:44:34 --> 00:44:39
to see is the two models coming together

00:44:37 --> 00:44:41
mm-hmm

00:44:38 --> 00:44:43
that's something to kind of look

00:44:40 --> 00:44:45
for and it seems like he base is sort of

00:44:42 --> 00:44:47
an early attempt at that right which is

00:44:44 --> 00:44:50
on the one hand you had all of these

00:44:46 --> 00:44:51
private keys that represented you right

00:44:49 --> 00:44:53
in these cryptographic networks and on

00:44:50 --> 00:44:54
the other hand you had sort of your

00:44:52 --> 00:44:56
Twitter profile and your LinkedIn

00:44:53 --> 00:44:59
profile and your Facebook profile and

00:44:55 --> 00:45:00
key base were tried to or bridge them

00:44:58 --> 00:45:02
yep

00:44:59 --> 00:45:05
what other things do you think we will

00:45:01 --> 00:45:07
see in this space of sort of making

00:45:04 --> 00:45:10
identity more seamless yeah I think key

00:45:06 --> 00:45:15
base is it is a key one a key problem is

00:45:09 --> 00:45:18
how do you map a real human individual

00:45:14 --> 00:45:20
to a public key in a way that that is

00:45:17 --> 00:45:22
trustworthy and in a way that that you

00:45:19 --> 00:45:25
can rely on right so a key base is this

00:45:21 --> 00:45:27
and I think it's a very apropos example

00:45:24 --> 00:45:30
where you you can use your existing web

00:45:26 --> 00:45:32
2.0 or world identity to bootstrap your

00:45:29 --> 00:45:34
web 3.0 identity you can use your

00:45:31 --> 00:45:37
Twitter account and your Facebook

00:45:33 --> 00:45:40
account and your github account and your

00:45:36 --> 00:45:42
website and point them all to this to

00:45:39 --> 00:45:44
this cryptographic identity that you can

00:45:41 --> 00:45:47
then use to interact with other people

00:45:44 --> 00:45:49
and in the sort of crypto Anonymous

00:45:46 --> 00:45:51
world and they can verify that that

00:45:48 --> 00:45:53
really is you because of the

00:45:50 --> 00:45:55
cryptographic assurances of those

00:45:52 --> 00:45:59
connections between Twitter and so on

00:45:54 --> 00:46:02
and your public key you can take that

00:45:58 --> 00:46:04
further though I think once you do have

00:46:01 --> 00:46:05
identity in the crypto world and I think

00:46:03 --> 00:46:08
it is an unsolved problem key piece is

00:46:04 --> 00:46:10
the first kind of attempt but but

00:46:07 --> 00:46:13
here's still a lot to do there once you

00:46:09 --> 00:46:15
have a solid layer of identity within

00:46:12 --> 00:46:17
crypto that also doesn't sacrifice

00:46:14 --> 00:46:19
privacy so it's worth noting there's a

00:46:16 --> 00:46:21
big trade-off there like if you if you

00:46:18 --> 00:46:23
have strong identities and you have less

00:46:20 --> 00:46:25
privacy and it's kind of difficult to

00:46:22 --> 00:46:28
come to the right balance between the

00:46:24 --> 00:46:29
two and it will vary per application but

00:46:27 --> 00:46:30
once you have a good system for that

00:46:28 --> 00:46:32
hen you can start building reputation

00:46:29 --> 00:46:35
systems you can even imagine like a

00:46:32 --> 00:46:38
PageRank style algorithm for reputation

00:46:34 --> 00:46:44
like if I trust Frank and Frank trusts

00:46:37 --> 00:46:47
Joe then I kind of indirectly trust Joe

00:46:43 --> 00:46:48
and and and you can you can imagine kind

00:46:46 --> 00:46:52
of taking this to the whole to a whole

00:46:47 --> 00:46:53
other level to to really enhance the

00:46:51 --> 00:46:55
kind of trust that emerges from

00:46:52 --> 00:46:58
financial incentives with

00:46:54 --> 00:46:59
social capital and with reputation you

00:46:57 --> 00:47:01
know it's very powerful you see some of

00:46:58 --> 00:47:03
this even in like things like the

00:47:00 --> 00:47:05
Facebook marketplace today right which

00:47:02 --> 00:47:06
is you see somebody listing cheese or a

00:47:04 --> 00:47:08
mic or whatever and you'll see oh this

00:47:05 --> 00:47:09
a friend of oli yeah right and then

00:47:07 --> 00:47:10
that brings a level of trust to that

00:47:08 --> 00:47:13
ransaction that wouldn't otherwise

00:47:09 --> 00:47:15
xist exactly and one of the reasons

00:47:12 --> 00:47:18
this is so important for crypto is that

00:47:14 --> 00:47:20
oday every interaction in in the world

00:47:17 --> 00:47:22
of crypto tends to be very transactional

00:47:19 --> 00:47:23
you're not you don't even know who

00:47:21 --> 00:47:25
you're dealing with right and so it

00:47:22 --> 00:47:27
really is about that one transaction

00:47:24 --> 00:47:29
it's one off and whenever there are

00:47:26 --> 00:47:31
there whenever there's conflict it's a

00:47:28 --> 00:47:33
one off prisoner dilemma style game

00:47:30 --> 00:47:35
where as if you had identity and if you

00:47:32 --> 00:47:37
had reputation you could turn all of

00:47:34 --> 00:47:39
those one off prisoner dilemma style

00:47:36 --> 00:47:41
games and to iterated prisoner's dilemma

00:47:38 --> 00:47:43
style games which are far easier to

00:47:40 --> 00:47:45
solve you have like the long view of

00:47:42 --> 00:47:49
relationships you can have a track

00:47:44 --> 00:47:50
record and in like a and rapport with

00:47:48 --> 00:47:52
e people that you interact with if you

00:47:49 --> 00:47:53
only had that other layer so so many of

00:47:51 --> 00:47:55
the problems that game theoretical

00:47:53 --> 00:47:57
problems that need to be solved for

00:47:54 --> 00:47:59
crypto at work that are so hard to solve

00:47:56 --> 00:48:00
will become easier once you have this

00:47:58 --> 00:48:02
additional lever to play with yeah

00:47:59 --> 00:48:04
that's super interesting right so every

00:48:01 --> 00:48:07
prisoner dilemma type game is sort of

00:48:03 --> 00:48:08
assumed perfect strangers go in and now

00:48:06 --> 00:48:10
e have to sort of mathematically model

00:48:07 --> 00:48:12
what will happen not knowing anything

00:48:09 --> 00:48:13
about them exactly but if you threw me

00:48:11 --> 00:48:15
and you into a prisoner's dilemma right

00:48:12 --> 00:48:17
like we all have much higher fidelity

00:48:14 --> 00:48:19
predictions about what each other like

00:48:16 --> 00:48:20
I'm not gonna squelch on y'all he's a

00:48:18 --> 00:48:22
friend of mine especially if we know

00:48:20 --> 00:48:24
that we're gonna be in a similar kind of

00:48:21 --> 00:48:25
game in the future yeah it's like if we

00:48:23 --> 00:48:27
cooperate now then we'll build rapport

00:48:24 --> 00:48:30
and then look easier for us to cooperate

00:48:26 --> 00:48:32
in the future right and if we if we

00:48:29 --> 00:48:34
cheat each other now then then we will

00:48:31 --> 00:48:35
kind of ruin that opportunity later on

00:48:33 --> 00:48:38
and make it harder for us to cooperate

00:48:35 --> 00:48:40
down the line yeah super interesting so

00:48:37 --> 00:48:43
ne thing before we go I want to talk a

00:48:39 --> 00:48:44
little bit about governance because

00:48:42 --> 00:48:46
today it seems like there's a lot of

00:48:43 --> 00:48:49
conversation in the tech community about

00:48:45 --> 00:48:51
gee maybe the tech giants have gotten

00:48:48 --> 00:48:53
too big right because with the stroke of

00:48:50 --> 00:48:55
a pen and one change in terms of service

00:48:52 --> 00:48:57
like all of a sudden the rules of

00:48:54 --> 00:48:59
engagement or the winners and losers in

00:48:56 --> 00:49:02
that environment are dramatically

00:48:58 --> 00:49:04
different in crypto land the idea would

00:49:01 --> 00:49:06
be let's not have one company which

00:49:03 --> 00:49:08
completely owns their terms of service

00:49:05 --> 00:49:09
control that there's going to be sort of

00:49:07 --> 00:49:12
a decent

00:49:08 --> 00:49:14
july's community but we end up with some

00:49:11 --> 00:49:16
of the same questions right like who

00:49:13 --> 00:49:18
gets to change the terms of service

00:49:15 --> 00:49:20
how do those changes come about who

00:49:17 --> 00:49:22
proposes them so maybe talk to me a

00:49:19 --> 00:49:25
little bit about what's happening in the

00:49:21 --> 00:49:27
community as we iterate on systems of

00:49:24 --> 00:49:29
governance yeah you're hitting at one of

00:49:26 --> 00:49:31
the most fundamental questions in this

00:49:28 --> 00:49:33
pace which is that like if if you do

00:49:30 --> 00:49:37
build a system that is decentralized in

00:49:32 --> 00:49:38
that control over it does not rest with

00:49:36 --> 00:49:40
any one individual then there's a

00:49:37 --> 00:49:43
question well how do you go about

00:49:39 --> 00:49:45
updating it how do you go about changing

00:49:42 --> 00:49:46
it in any meaningful way and if it is

00:49:44 --> 00:49:48
gonna be a complex system that adapts

00:49:45 --> 00:49:50
and evolves over time this question most

00:49:47 --> 00:49:52
certainly has to be answered in order

00:49:49 --> 00:49:54
for any of this to work so this is a

00:49:51 --> 00:49:58
question of sort of governance of

00:49:53 --> 00:50:00
protocols and there are an enormous

00:49:57 --> 00:50:01
number of experiments that people are

00:49:59 --> 00:50:04
running like different kind of

00:50:00 --> 00:50:06
approaches the the canonical and and

00:50:03 --> 00:50:09
sort of initial approach was out of

00:50:05 --> 00:50:11
Bitcoin which is that essentially you do

00:50:08 --> 00:50:13
just have to coordinate with all of the

00:50:10 --> 00:50:17
stakeholders all of the people who are

00:50:12 --> 00:50:19
running the Bitcoin node software in

00:50:16 --> 00:50:21
order to change the protocol and in this

00:50:18 --> 00:50:23
case that would be that all miners all

00:50:20 --> 00:50:26
of the people who are running the code

00:50:22 --> 00:50:28
to mine Bitcoin have to modify their

00:50:25 --> 00:50:29
software and this is a human level

00:50:27 --> 00:50:32
process you have to you have to call

00:50:28 --> 00:50:34
them up or you have to sort of issue an

00:50:31 --> 00:50:36
nouncement saying that that protocol

00:50:33 --> 00:50:38
is being upgraded and and get that to

00:50:35 --> 00:50:39
work there are other approaches that

00:50:37 --> 00:50:42
people are exploring with that arm or

00:50:38 --> 00:50:44
throw their formalized and are built

00:50:41 --> 00:50:48
into the protocol so there's the idea of

00:50:43 --> 00:50:50
being able to vote with tokens so if I

00:50:47 --> 00:50:55
owned a certain stake a certain amount

00:50:49 --> 00:50:57
of of the network then I can use the

00:50:54 --> 00:51:00
tokens that constitute that stake to

00:50:56 --> 00:51:01
vote in favor or against proposals that

00:50:59 --> 00:51:03
may be made by the community it's just

00:51:00 --> 00:51:06
another approach to decentralized

00:51:02 --> 00:51:07
governance that that tries to lower the

00:51:05 --> 00:51:09
barrier and tries to make it a little

00:51:06 --> 00:51:10
bit more seamless there are there's an

00:51:08 --> 00:51:11
enormous set of challenges associated

00:51:09 --> 00:51:13
with that because there are there are

00:51:10 --> 00:51:16
possible attacks where you can bribe

00:51:12 --> 00:51:18
people there there is the issue of voter

00:51:15 --> 00:51:20
participation and all of the all of the

00:51:17 --> 00:51:22
issues that you see in governance

00:51:19 --> 00:51:23
systems outside of the world of crypto

00:51:21 --> 00:51:25
just naps like offline government

00:51:22 --> 00:51:27
offline who's going to the election how

00:51:24 --> 00:51:30
they vote those problems we have

00:51:26 --> 00:51:32
prevented people from voting these

00:51:29 --> 00:51:34
problems become replicated in crypto as

00:51:31 --> 00:51:36
well and they are therefore like

00:51:33 --> 00:51:39
fundamentally difficult problems that

00:51:35 --> 00:51:41
have been unsolved for millennia so so

00:51:38 --> 00:51:44
it's not as if crypto will solve any of

00:51:40 --> 00:51:45
that it'll just have to figure out the

00:51:43 --> 00:51:47
right mechanisms and the right

00:51:44 --> 00:51:50
structures to be good enough and to

00:51:46 --> 00:51:54
enable systems that already centralized

00:51:49 --> 00:51:57
to adapt and to change and evolve while

00:51:53 --> 00:51:59
striking a balance between sort of

00:51:56 --> 00:52:02
evolved ability and decentralization and

00:51:58 --> 00:52:03
actually we did we did two podcasts

00:52:01 --> 00:52:05
pecifically on this question they

00:52:02 --> 00:52:06
caught the question of governments in

00:52:04 --> 00:52:08
crypto that that will go much much

00:52:05 --> 00:52:10
deeper and talk about all the challenges

00:52:07 --> 00:52:12
who have you are interested in that

00:52:09 --> 00:52:14
opic I recommend checking those out

00:52:11 --> 00:52:16
perfect we'll throw the links into the

00:52:13 --> 00:52:19
YouTube video so you can follow them

00:52:15 --> 00:52:23
easily well Olli this has been super

00:52:18 --> 00:52:24
interesting there's so many problems to

00:52:22 --> 00:52:27
be solved there's so many meeting

00:52:23 --> 00:52:28
computer science things to be had like

00:52:26 --> 00:52:30
how do you prove that I'm actually

00:52:27 --> 00:52:31
storing your photos right when instead

00:52:29 --> 00:52:35
of just pretending to store your photos

00:52:30 --> 00:52:36
and collecting the money and so I guess

00:52:34 --> 00:52:39
the way I think about it is like if you

00:52:35 --> 00:52:41
have an ever wish that you could have

00:52:38 --> 00:52:45
been like a semiconductor engineer at

00:52:40 --> 00:52:48
Bell Labs in the 1950s or a PC

00:52:44 --> 00:52:51
enthusiast in the 1970s and you were

00:52:47 --> 00:52:53
like I missed the 50s and then I missed

00:52:50 --> 00:52:57
the 70s and then like if you wished you

00:52:52 --> 00:52:59
were at UIUC with with mark and at the

00:52:56 --> 00:53:01
dawn of the Internet in the in the 90s

00:52:58 --> 00:53:03
like look here it is this is the new

00:53:00 --> 00:53:06
computing platform here is your

00:53:02 --> 00:53:08
opportunity it's not too late and these

00:53:05 --> 00:53:10
are the times to exactly insert yourself

00:53:07 --> 00:53:12
into that conversation if sort of that's

00:53:09 --> 00:53:14
what you wish you had the opportunity to

00:53:11 --> 00:53:16
do is influence some of these protocols

00:53:13 --> 00:53:20
these incentive systems at the ground

00:53:15 --> 00:53:23
level absolutely awesome fantastic so

00:53:19 --> 00:53:25
that's it for this episode and if you

00:53:22 --> 00:53:28
like what you saw go ahead and subscribe

00:53:24 --> 00:53:30
to the list if you have comments go

00:53:27 --> 00:53:32
ahead and leave them down below maybe

00:53:29 --> 00:53:34
you could pick one thing that you were

00:53:31 --> 00:53:35
super excited about like what problem do

00:53:33 --> 00:53:38
you wish you could solve

00:53:34 --> 00:53:41
as an engineer and we will see you next

00:53:37 --> 00:53:41
episode

<!-- YOUTUBE_TRANSCRIPT_END -->
