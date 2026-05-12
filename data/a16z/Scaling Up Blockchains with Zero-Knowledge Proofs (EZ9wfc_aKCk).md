---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "EZ9wfc_aKCk"
title: "Scaling Up Blockchains with Zero-Knowledge Proofs"
video_url: "https://www.youtube.com/watch?v=EZ9wfc_aKCk"
thumbnail_url: "https://i.ytimg.com/vi/EZ9wfc_aKCk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=EZ9wfc_aKCk"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2021-11-08T17:08:09.000Z"
upload_date: "2021-11-08"
duration_seconds: 2809
duration_human: "46:49"
view_count: 24205
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T14:19:22.253Z"
---

# Scaling Up Blockchains with Zero-Knowledge Proofs

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=EZ9wfc_aKCk
- video_id: EZ9wfc_aKCk
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2021-11-08T17:08:09.000Z
- upload_date: 2021-11-08
- duration: 46:49
- view_count: 24205
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: crypto, zero-knowledge proofs, blockchain, Matter Labs, a16z, Ethereum, web3
- categories: Science & Technology

## Description

a16z Crypto general partner Ali Yahya speaks with Alex Gluchowski and Alex Vlasov, co-founders of Matter Labs; and Dan Boneh, professor of computer science at Stanford University; about the the "beautiful" technology behind zero-knowledge proofs and how zkSync enables Ethereum to scale in a way that preserves its values of decentralization and security. 

For more information:
About a16z's investment in Matter Labs: https://a16z.com/2021/11/08/investing-in-matter-labs/
About zkSync: https://zksync.io/
Want to work at Matter Labs? They're hiring! https://www.notion.so/Career-at-Matter-Labs-4a69ed0f7acb45c89f662cf12dbc2464

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:07 --> 00:00:14
[Music]

00:00:15 --> 00:00:20
well welcome everyone so my my name is

00:00:17 --> 00:00:23
ali i'm a general partner on the crypto

00:00:19 --> 00:00:26
team here at a16z and today we are all

00:00:22 --> 00:00:29
very excited to be announcing that a16z

00:00:25 --> 00:00:32
is leading matter labs's series b round

00:00:28 --> 00:00:35
and our guests today include alex

00:00:31 --> 00:00:38
gulkowski who is the founder and ceo of

00:00:34 --> 00:00:39
matter labs and another alex alex vlasov

00:00:37 --> 00:00:42
who is is the head of research and

00:00:38 --> 00:00:44
evelopment at matter labs and we also

00:00:41 --> 00:00:46
have dan bonnet who is a research

00:00:43 --> 00:00:48
partner with us here at 18z and he's

00:00:45 --> 00:00:49
also a professor of computer science at

00:00:47 --> 00:00:51
stanford

00:00:48 --> 00:00:53
and the plan for today is for us to just

00:00:50 --> 00:00:56
discuss some of the open trends in the

00:00:52 --> 00:00:58
space of crypto and web 3 some of the

00:00:55 --> 00:00:59
open problems that the space is facing

00:00:57 --> 00:01:02
and that we need to that we need to

00:00:58 --> 00:01:03
tackle and the way that matter labs is

00:01:01 --> 00:01:06
going about solving those problems and

00:01:02 --> 00:01:09
why why we think it's one of the most

00:01:05 --> 00:01:11
exciting uh projects in the in the space

00:01:08 --> 00:01:14
um so maybe to start

00:01:10 --> 00:01:16
i'll just share some context behind

00:01:13 --> 00:01:18
the space and our investment in matter

00:01:15 --> 00:01:20
labs and why we're so excited and then

00:01:17 --> 00:01:23
i'll turn it over to alex g who can tell

00:01:19 --> 00:01:25
us about the funding story the founding

00:01:22 --> 00:01:27
story of the company

00:01:24 --> 00:01:30
so the first thing that i'll say is

00:01:26 --> 00:01:32
that uh well for those of you who

00:01:29 --> 00:01:34
might not already be

00:01:31 --> 00:01:35
within the space and are new to web3

00:01:33 --> 00:01:37
into crypto

00:01:34 --> 00:01:39
the best way to think of a blockchain is

00:01:36 --> 00:01:41
as a new kind of computer

00:01:38 --> 00:01:45
and the new the the biggest

00:01:40 --> 00:01:46
misconception in crypto continues to be

00:01:44 --> 00:01:48
that crypto is really just about

00:01:46 --> 00:01:51
cryptocurrency

00:01:47 --> 00:01:54
that uh ethereum is really just the

00:01:50 --> 00:01:56
silver to bitcoin the bitcoins gold and

00:01:53 --> 00:01:59
that it's really all about just like

00:01:55 --> 00:02:01
payments or digital gold or remittances

00:01:58 --> 00:02:02
and all of those are interesting use

00:02:00 --> 00:02:04
cases but they're really just the

00:02:01 --> 00:02:06
beginning because blockchains

00:02:03 --> 00:02:08
the best way to think of blockchains is

00:02:05 --> 00:02:10
actually to think of them as a new kind

00:02:07 --> 00:02:11
of computer

00:02:09 --> 00:02:14
uh and i think if you look at the

00:02:10 --> 00:02:17
history of computation we went from

00:02:13 --> 00:02:20
ainframes to mini computers to personal

00:02:16 --> 00:02:23
computers to mobile and cloud to now

00:02:19 --> 00:02:26
e would argue blockchain computing and

00:02:22 --> 00:02:28
each of those waves of computation has

00:02:25 --> 00:02:30
introduced new capabilities that have

00:02:27 --> 00:02:32
ry nicely complemented the previous

00:02:30 --> 00:02:35
waves that preceded it

00:02:31 --> 00:02:37
and blockchains are no exception

00:02:34 --> 00:02:41
blockchains introduce a unique

00:02:36 --> 00:02:43
capability that allows developers and

00:02:40 --> 00:02:45
programmers who are writing code that

00:02:42 --> 00:02:46
run on blockchains

00:02:44 --> 00:02:47
um

00:02:45 --> 00:02:48
that

00:02:46 --> 00:02:49
make

00:02:47 --> 00:02:52
that allow them to essentially build

00:02:48 --> 00:02:54
programs that make strong commitments

00:02:51 --> 00:02:57
about how that code will behave in the

00:02:53 --> 00:03:00
future and so for example bitcoin

00:02:56 --> 00:03:02
has code that makes a commitment

00:02:59 --> 00:03:03
hat there will only ever be 21 million

00:03:01 --> 00:03:06
bitcoins

00:03:02 --> 00:03:08
and that's the best or the simplest

00:03:05 --> 00:03:09
example really of what you can do with

00:03:07 --> 00:03:11
e blockchain but there are new

00:03:08 --> 00:03:12
blockchains like ethereum which are

00:03:10 --> 00:03:14
fully programmable and have very

00:03:11 --> 00:03:16
expressive programming languages that

00:03:13 --> 00:03:20
allow you to do much more and allow you

00:03:15 --> 00:03:23
to build say programs that that act as

00:03:19 --> 00:03:24
full-on decentralized social networks

00:03:22 --> 00:03:26
where you can have a lot of the

00:03:23 --> 00:03:27
functionality that facebook gives you

00:03:26 --> 00:03:29
but

00:03:26 --> 00:03:32
you have no trillion dollar monopoly in

00:03:28 --> 00:03:34
the middle to control your data or to or

00:03:31 --> 00:03:37
to decide like who gets to see

00:03:33 --> 00:03:39
whose posts or you can build crypto

00:03:36 --> 00:03:41
enabled games where there's an entire

00:03:38 --> 00:03:44
kind of economy that's driven by

00:03:40 --> 00:03:47
cryptocurrencies and by by nfts

00:03:43 --> 00:03:50
that can scale uh to a far larger degree

00:03:46 --> 00:03:51
than than just traditional centralized

00:03:49 --> 00:03:55
games by virtue of having the

00:03:50 --> 00:03:56
composibility of of crypto and of and of

00:03:54 --> 00:03:57
blockchains that that kind of empower

00:03:55 --> 00:03:59
them

00:03:56 --> 00:04:01
uh and so it's a new paradigm of

00:03:58 --> 00:04:02
computation that we see as expanding the

00:04:00 --> 00:04:05
capabilities of what we can do with

00:04:01 --> 00:04:07
software but of course

00:04:04 --> 00:04:09
if i think you you may all be able to

00:04:06 --> 00:04:11
remember that every new wave of

00:04:08 --> 00:04:13
computation at the very beginning

00:04:10 --> 00:04:16
uh started off looking like a toy and

00:04:12 --> 00:04:18
had all sorts of limitations that made

00:04:15 --> 00:04:20
it difficult to use at first but with

00:04:17 --> 00:04:22
time those things get better and like

00:04:19 --> 00:04:23
you get like great great founders

00:04:21 --> 00:04:25
entering the space to address some of

00:04:22 --> 00:04:27
those limitations

00:04:24 --> 00:04:28
and as we've seen like for example like

00:04:26 --> 00:04:30
mobile phones they've gone through an

00:04:27 --> 00:04:31
incredible arc and now mobile phones

00:04:29 --> 00:04:34
today are

00:04:30 --> 00:04:36
uh kind of a very functional um form

00:04:33 --> 00:04:37
of computing that just about like you

00:04:35 --> 00:04:40
know billions of people in the world

00:04:36 --> 00:04:41
rely on and blockchains again they're no

00:04:39 --> 00:04:43
exception

00:04:40 --> 00:04:45
we're still kind of in the early innings

00:04:42 --> 00:04:48
of uh of blockchains as a computational

00:04:44 --> 00:04:49
paradigm and one of the key limitations

00:04:47 --> 00:04:51
that blockchains have today

00:04:48 --> 00:04:54
has to do with performance

00:04:50 --> 00:04:56
and as a way of making this concrete you

00:04:53 --> 00:04:58
can think of ethereum which is is

00:04:55 --> 00:05:00
probably the the dominant uh blockchain

00:04:57 --> 00:05:01
computer that has has the most traction

00:04:59 --> 00:05:03
today

00:05:00 --> 00:05:06
as an example it currently can only

00:05:02 --> 00:05:08
really process around 14 quote unquote

00:05:05 --> 00:05:10
transactions or 14 kind of you can think

00:05:07 --> 00:05:12
of them as computations

00:05:10 --> 00:05:13
per per second

00:05:11 --> 00:05:15
and that's

00:05:12 --> 00:05:17
really not enough in order to truly be

00:05:14 --> 00:05:18
able to scale to billions of users and

00:05:16 --> 00:05:20
so one of the key problems in the space

00:05:17 --> 00:05:22
is to figure out how we can get

00:05:19 --> 00:05:24
blockchain computers to scale

00:05:21 --> 00:05:26
and that's where matter labs enters we

00:05:23 --> 00:05:28
are we're very excited about all of the

00:05:25 --> 00:05:30
work that matter labs is doing with zero

00:05:27 --> 00:05:32
knowledge proofs which are a cutting

00:05:29 --> 00:05:34
edge um

00:05:31 --> 00:05:35
primitive from cryptography that we'll

00:05:33 --> 00:05:37
talk about

00:05:34 --> 00:05:39
uh and zika sync which is which is one

00:05:36 --> 00:05:41
of the the primary things that matter

00:05:38 --> 00:05:44
labs is working on as one of the most

00:05:40 --> 00:05:46
ambitious and promising efforts

00:05:43 --> 00:05:47
towards allowing blockchains to truly

00:05:45 --> 00:05:49
scale

00:05:46 --> 00:05:51
so that's a little bit of the context

00:05:48 --> 00:05:53
and background and with that i would

00:05:50 --> 00:05:54
love to turn it over to

00:05:52 --> 00:05:56
alex g

00:05:53 --> 00:05:57
who can tell us a little bit about kind

00:05:55 --> 00:05:59
of the story behind metal labs and how

00:05:56 --> 00:06:02
it all came to be

00:05:58 --> 00:06:04
thank you ali uh i'm really excited to

00:06:01 --> 00:06:06
be here and really excited to be working

00:06:03 --> 00:06:07
with you guys now

00:06:05 --> 00:06:10
and uh i

00:06:06 --> 00:06:12
this was a great intro a very very good

00:06:09 --> 00:06:13
analogy and i would like to extend it

00:06:11 --> 00:06:15
with

00:06:12 --> 00:06:17
um uh you know like for me the

00:06:14 --> 00:06:20
blockchains when i first learned about

00:06:16 --> 00:06:23
bitcoin and later ethereum and more

00:06:19 --> 00:06:26
powerful way to to interact with

00:06:22 --> 00:06:28
is kind of new computation uh was also

00:06:25 --> 00:06:30
about interaction how this computation

00:06:27 --> 00:06:32
makes interactions between people less

00:06:30 --> 00:06:34
um

00:06:31 --> 00:06:36
ore seamless and

00:06:33 --> 00:06:37
you know we can compare it to internet

00:06:35 --> 00:06:39
so the internet is also a form of

00:06:36 --> 00:06:40
computing but it's a

00:06:38 --> 00:06:44
form of computing which is

00:06:39 --> 00:06:47
interconnected and it leads to much more

00:06:43 --> 00:06:49
direct exchange of information

00:06:46 --> 00:06:51
and it makes information a lot more free

00:06:48 --> 00:06:52
so you can uh

00:06:50 --> 00:06:54
you know like uh

00:06:51 --> 00:06:56
see everything that is happening on the

00:06:53 --> 00:06:57
other side of the world instantly you do

00:06:55 --> 00:06:59
not have intermediaries of this

00:06:56 --> 00:07:03
information you can get just get it from

00:06:58 --> 00:07:05
the first hands so the same thing that

00:07:02 --> 00:07:06
internet has done to information i think

00:07:04 --> 00:07:07
the blockchains

00:07:05 --> 00:07:09
will do to

00:07:06 --> 00:07:11
the world of value to the network of

00:07:08 --> 00:07:13
values we can exchange value directly

00:07:10 --> 00:07:15
without intermediaries

00:07:12 --> 00:07:18
overcoming the trust issues between

00:07:14 --> 00:07:18
people without involving third parties

00:07:17 --> 00:07:22
which

00:07:17 --> 00:07:24
might not be the most beneficial way to

00:07:21 --> 00:07:28
structure those interactions

00:07:23 --> 00:07:29
and uh yeah i once learned that once

00:07:27 --> 00:07:32
when the

00:07:28 --> 00:07:33
shipping containers were invented the

00:07:31 --> 00:07:36
this single invention boosted the world

00:07:32 --> 00:07:39
gdp by five to ten percent

00:07:35 --> 00:07:41
uh and i feel like blockchain crypto

00:07:38 --> 00:07:43
technology in general has this the

00:07:40 --> 00:07:44
similar potential of

00:07:42 --> 00:07:48
uh

00:07:43 --> 00:07:49
making us uh a lot more um uh

00:07:47 --> 00:07:52
accelerating the progress of humanity a

00:07:48 --> 00:07:56
lot faster uh so we i i learned about

00:07:51 --> 00:07:58
bitcoin in i think 2014 uh back then it

00:07:55 --> 00:08:00
was about payments about sound money

00:07:57 --> 00:08:01
about the freedom and sovereignty of

00:07:59 --> 00:08:02
your finances

00:08:00 --> 00:08:05
uh

00:08:01 --> 00:08:07
in the in the age of rising inflation i

00:08:04 --> 00:08:09
got very excited um

00:08:06 --> 00:08:10
about the economics ideas the political

00:08:08 --> 00:08:12
side of it because i'm coming from

00:08:09 --> 00:08:15
ukraine i was born in soviet union and

00:08:11 --> 00:08:17
as a kid i survived a hyperinflation

00:08:14 --> 00:08:20
lasting for three years and i could see

00:08:16 --> 00:08:22
the society deteriorate because

00:08:19 --> 00:08:23
lack of trust and the

00:08:21 --> 00:08:26
institutions being

00:08:22 --> 00:08:27
corrupted and not functioning

00:08:25 --> 00:08:30
and

00:08:26 --> 00:08:31
to me bitcoin was that but i quickly

00:08:29 --> 00:08:34
realized that

00:08:30 --> 00:08:36
uh the idea of hyper bitcoinization just

00:08:33 --> 00:08:39
based on bitcoin is kind of utopia

00:08:36 --> 00:08:41
because of a lot of usability issues and

00:08:38 --> 00:08:43
a lot of issues with just general lack

00:08:40 --> 00:08:46
of functionality which you need for for

00:08:42 --> 00:08:48
a real financial system and this all

00:08:45 --> 00:08:49
changed with ethereum so i got extremely

00:08:47 --> 00:08:51
excited about the theorem i dig into

00:08:48 --> 00:08:51
research

00:08:50 --> 00:08:54
uh

00:08:50 --> 00:08:58
i looked into different problems that we

00:08:53 --> 00:09:00
had there and it was clear that

00:08:57 --> 00:09:02
scalability is one of the core problems

00:08:59 --> 00:09:04
and it requires a breakthrough in

00:09:01 --> 00:09:06
technology to solve it so scalability

00:09:03 --> 00:09:08
was something that

00:09:05 --> 00:09:10
must have been solved in order to bring

00:09:07 --> 00:09:12
the promise of blockchains

00:09:09 --> 00:09:14
uh to to everyone so we actually needed

00:09:12 --> 00:09:15
to scale it

00:09:13 --> 00:09:17
o

00:09:14 --> 00:09:19
everyone in the world uh and when i

00:09:16 --> 00:09:21
learned about their knowledge groups for

00:09:18 --> 00:09:23
the first time it was clear that this is

00:09:20 --> 00:09:26
omething uh

00:09:22 --> 00:09:29
the this is something out of this world

00:09:25 --> 00:09:31
like this is a magic technology which is

00:09:28 --> 00:09:33
called to solve precisely this problem

00:09:30 --> 00:09:36
and it was just extremely exciting to

00:09:32 --> 00:09:37
start working on this uh so i went to

00:09:35 --> 00:09:40
different conferences uh meetups and

00:09:36 --> 00:09:42
eventually i met my co-founder alex

00:09:39 --> 00:09:44
who came uh to the same idea from from a

00:09:42 --> 00:09:46
different angle he was working on

00:09:43 --> 00:09:49
scalability on uh on a technology called

00:09:46 --> 00:09:50
plasma which was popular back then as a

00:09:48 --> 00:09:51
direction of solving ethereum's

00:09:49 --> 00:09:53
calability

00:09:50 --> 00:09:54
and we just realized that we have to

00:09:52 --> 00:09:56
start working on this together we built

00:09:53 --> 00:09:59
he first prototype and

00:09:55 --> 00:10:01
uh we founded the company which has the

00:09:58 --> 00:10:02
mission of enabling everyone in the

00:10:00 --> 00:10:05
world with

00:10:01 --> 00:10:07
access to affordable blockchain that

00:10:04 --> 00:10:09
preserves all the properties that make

00:10:06 --> 00:10:10
thereum bitcoin and other decentralized

00:10:08 --> 00:10:11
truly decentralized blockchains so

00:10:09 --> 00:10:14
valuable

00:10:10 --> 00:10:15
namely the um

00:10:13 --> 00:10:17
no single point of control true

00:10:14 --> 00:10:19
decentralization

00:10:16 --> 00:10:21
like true peer-to-peer nature where no

00:10:18 --> 00:10:24
ne everyone is equal and no one can

00:10:20 --> 00:10:27
dictate rules that other people did not

00:10:23 --> 00:10:29
voluntarily opt in before

00:10:26 --> 00:10:31
and

00:10:28 --> 00:10:34
this is a network which is unstoppable

00:10:30 --> 00:10:36
no matter where you live uh how

00:10:33 --> 00:10:39
sane or corrupt your government is

00:10:35 --> 00:10:41
you can absolutely rely on the math and

00:10:38 --> 00:10:42
cryptography behind blockchains and be

00:10:40 --> 00:10:45
sure that the rules will be enforced

00:10:41 --> 00:10:47
equally and fairly for everyone uh and

00:10:44 --> 00:10:50
so this is what we're working on with uh

00:10:46 --> 00:10:52
meta labs

00:10:49 --> 00:10:53
it's a truly a great story i i'm curious

00:10:51 --> 00:10:56
do you remember the moment when you

00:10:52 --> 00:10:58
first learned of zero knowledge proofs

00:10:55 --> 00:11:00
or was it or was it kind of just ambient

00:10:57 --> 00:11:01
and you you kind of gradually got into

00:10:59 --> 00:11:04
them

00:11:00 --> 00:11:07
i do remember it very well it was a uh

00:11:03 --> 00:11:10
election in berlin held by uh chris uh

00:11:06 --> 00:11:12
the uh the author of solidity but back

00:11:09 --> 00:11:14
then um

00:11:11 --> 00:11:16
it was about zero knowledge aspect of

00:11:13 --> 00:11:19
their knowledge probes which we actually

00:11:15 --> 00:11:19
paradoxically do not use in scalability

00:11:18 --> 00:11:22
so

00:11:18 --> 00:11:26
what uh zero knowledge uh

00:11:21 --> 00:11:27
means that we can provide some uh

00:11:25 --> 00:11:29
we can provide proofs from some

00:11:26 --> 00:11:30
computational facts proofs of

00:11:28 --> 00:11:31
computational integrity without

00:11:29 --> 00:11:33
disclosing

00:11:30 --> 00:11:35
all the information which was used as

00:11:32 --> 00:11:37
the input of this computation uh but

00:11:34 --> 00:11:40
his is not what we need what we what we

00:11:36 --> 00:11:42
are interested in is succinct succinct

00:11:39 --> 00:11:45
property of these blockchains we we

00:11:41 --> 00:11:46
operate with a construct called snark

00:11:44 --> 00:11:48
which stands for succinct

00:11:45 --> 00:11:51
non-interactive arguments of knowledge

00:11:47 --> 00:11:53
and sex synthesis means that you can

00:11:50 --> 00:11:56
verify the results

00:11:52 --> 00:11:58
of this computation a lot faster than it

00:11:55 --> 00:11:59
akes you to to produce these results

00:11:57 --> 00:12:01
and actually to to just naively do the

00:11:58 --> 00:12:03
computation

00:12:00 --> 00:12:05
that is yeah that's exactly right and

00:12:02 --> 00:12:07
we'll we'll kind of dive into some of

00:12:04 --> 00:12:08
the properties of zero knowledge proofs

00:12:06 --> 00:12:10
and why why they're so important in the

00:12:07 --> 00:12:12
context of blockchains

00:12:09 --> 00:12:15
i'd love to be before we do that i'd

00:12:11 --> 00:12:16
love to uh alex v i'd love to get your

00:12:14 --> 00:12:19
side of the story

00:12:15 --> 00:12:23
and how how you got to know alex g and

00:12:18 --> 00:12:23
how you got into the space

00:12:22 --> 00:12:29
um well most likely first i should

00:12:24 --> 00:12:30
answer uh the last question is how i i

00:12:28 --> 00:12:33
got to know

00:12:30 --> 00:12:35
just anything about their knowledge and

00:12:32 --> 00:12:37
it was actually

00:12:34 --> 00:12:40
uh around the time of the one of the

00:12:36 --> 00:12:42
first eth global hackathons one which

00:12:39 --> 00:12:45
was in waterloo canada

00:12:41 --> 00:12:47
uh around the same time as there was

00:12:44 --> 00:12:49
uh on this hackathon there was a lecture

00:12:46 --> 00:12:52
about the first starks

00:12:48 --> 00:12:53
with gigabyte size proofs around the

00:12:51 --> 00:12:56
same time

00:12:52 --> 00:12:58
vitalik was mentioning

00:12:55 --> 00:13:00
about snarks

00:12:57 --> 00:13:03
o i just decided to google it and then

00:12:59 --> 00:13:06
i found a very interesting presentation

00:13:02 --> 00:13:07
i don't know what this was a source but

00:13:05 --> 00:13:09
it was

00:13:06 --> 00:13:13
very clear how they work

00:13:08 --> 00:13:15
and very exciting for their properties

00:13:12 --> 00:13:17
but

00:13:14 --> 00:13:20
hen i decided it's like more like

00:13:16 --> 00:13:22
too early to go into there because

00:13:19 --> 00:13:24
around the same time the plasma concept

00:13:21 --> 00:13:27
was introduced and on this hackathon we

00:13:24 --> 00:13:28
tried to do the

00:13:26 --> 00:13:31
first

00:13:27 --> 00:13:33
very simple prototype of plasma for

00:13:30 --> 00:13:36
ethereum

00:13:32 --> 00:13:38
and later then uh just as alex mentioned

00:13:35 --> 00:13:40
[Music]

00:13:37 --> 00:13:43
he actually like i was on one of the

00:13:39 --> 00:13:46
plasma calls and i've mentioned that

00:13:42 --> 00:13:47
kind of as a side

00:13:45 --> 00:13:49
research

00:13:46 --> 00:13:51
uh are trying to do some

00:13:48 --> 00:13:54
[Music]

00:13:50 --> 00:13:57
optimizations for

00:13:53 --> 00:13:59
growth 16 proof generation to be run on

00:13:56 --> 00:14:02
the gpu

00:13:58 --> 00:14:05
was completely excited it was

00:14:01 --> 00:14:06
for general interest and

00:14:04 --> 00:14:09
at this moment the time i still

00:14:05 --> 00:14:11
considered it maybe a little bit early

00:14:08 --> 00:14:14
and then i get a message in telegram

00:14:10 --> 00:14:16
from unknown contact and says well i was

00:14:13 --> 00:14:18
a person from the plasma call who

00:14:15 --> 00:14:21
mentioned working on a gpu

00:14:18 --> 00:14:23
and are you going to the

00:14:20 --> 00:14:25
devcons this year and i said yes

00:14:22 --> 00:14:28
and then alex said well let's meet in

00:14:24 --> 00:14:30
there and it was this is where we

00:14:27 --> 00:14:32
actually met the first time in person

00:14:29 --> 00:14:35
and decided that

00:14:31 --> 00:14:37
let's go into their knowledge space and

00:14:34 --> 00:14:38
even if it's going to be hired well we

00:14:36 --> 00:14:39
just

00:14:37 --> 00:14:41
will have to spend a little bit more

00:14:38 --> 00:14:42
time and do it with our hands

00:14:40 --> 00:14:43
o then we

00:14:41 --> 00:14:46
[Music]

00:14:42 --> 00:14:48
started to work builds a

00:14:45 --> 00:14:51
corner part of the system some of those

00:14:47 --> 00:14:54
still live in the current uh the keysync

00:14:50 --> 00:14:57
one point x and the case it will be part

00:14:53 --> 00:15:00
of the casing 2.0

00:14:56 --> 00:15:02
and this is how story begins and now

00:14:59 --> 00:15:04
continues

00:15:01 --> 00:15:06
that is awesome i always love hearing

00:15:03 --> 00:15:08
the kind of the genesis story for four

00:15:06 --> 00:15:10
great companies

00:15:07 --> 00:15:12
uh dan

00:15:09 --> 00:15:14
so i think you are you're probably one

00:15:11 --> 00:15:16
of the world leading experts when it

00:15:13 --> 00:15:17
comes to cryptography and zero knowledge

00:15:15 --> 00:15:18
proofs

00:15:16 --> 00:15:21
and i think you're also probably one of

00:15:17 --> 00:15:23
the best teachers in the world about all

00:15:20 --> 00:15:26
of this stuff and i was hoping um

00:15:22 --> 00:15:28
for for our audience if you could kind

00:15:25 --> 00:15:30
of give us an intuition for

00:15:27 --> 00:15:32
what zero knowledge proofs are and

00:15:29 --> 00:15:34
why they're so powerful they really do

00:15:31 --> 00:15:35
feel like magical it feels like it

00:15:33 --> 00:15:38
should be impossible to do what you can

00:15:34 --> 00:15:40
do with zero knowledge proof and uh and

00:15:37 --> 00:15:42
i feel like conveying that to people who

00:15:39 --> 00:15:44
are listening would be would be awesome

00:15:41 --> 00:15:46
first of all congrats alex g and alex v

00:15:43 --> 00:15:49
and everything you've built it's really

00:15:45 --> 00:15:51
quite remarkable to see this coming to

00:15:48 --> 00:15:52
you know coming to fruition and becoming

00:15:50 --> 00:15:54
reality

00:15:51 --> 00:15:57
um and thanks eli for the introduction

00:15:53 --> 00:15:59
uh so let's see so so starks and zk

00:15:56 --> 00:16:02
snarks i totally agree with both alex's

00:15:58 --> 00:16:04
they're kind of magical objects

00:16:01 --> 00:16:05
they basically let you prove that

00:16:03 --> 00:16:07
something is true

00:16:04 --> 00:16:09
with a very very short proof that's

00:16:06 --> 00:16:11
really easy to verify and that's kind of

00:16:08 --> 00:16:12
exactly what you want for scaling a

00:16:10 --> 00:16:14
blockchain

00:16:11 --> 00:16:16
you can basically produce a proof that

00:16:13 --> 00:16:18
10 000 transactions are valid

00:16:15 --> 00:16:19
the proof is going to be very short so

00:16:17 --> 00:16:21
it's easy to write it onto the

00:16:18 --> 00:16:23
blockchain and it's going to be very

00:16:20 --> 00:16:25
fast to verify so it's easy for miners

00:16:22 --> 00:16:27
to actually verify that it's true

00:16:24 --> 00:16:29
it's interesting that

00:16:26 --> 00:16:30
alex v i think you said that the rlg i

00:16:28 --> 00:16:32
don't remember which one of you said it

00:16:29 --> 00:16:35
hat actually for this type of scaling

00:16:31 --> 00:16:38
you mostly need the what the property of

00:16:34 --> 00:16:40
snarks called soundness that is that the

00:16:37 --> 00:16:43
snarks are actually uh cannot be forged

00:16:39 --> 00:16:45
you cannot uh prove a false statement

00:16:42 --> 00:16:47
and not so much the zero knowledge

00:16:44 --> 00:16:49
property of of snarks uh the zero

00:16:46 --> 00:16:51
knowledge property kind of comes up

00:16:48 --> 00:16:52
in the areas of

00:16:50 --> 00:16:54
you know when you're trying to prove

00:16:51 --> 00:16:56
that something is true without actually

00:16:53 --> 00:16:58
revealing anything about your data so

00:16:55 --> 00:17:00
like confidential transactions private

00:16:57 --> 00:17:02
payments compliance things like that

00:16:59 --> 00:17:03
's where uh those are knowledge

00:17:01 --> 00:17:05
properties needed

00:17:02 --> 00:17:08
so both of those are supported supported

00:17:04 --> 00:17:10
by snarks and zk snarks and um i have to

00:17:07 --> 00:17:12
say it's been the last couple of years

00:17:09 --> 00:17:14
have been a wild ride because it's been

00:17:11 --> 00:17:16
amazing to see this stuff getting

00:17:13 --> 00:17:18
deployed at such a

00:17:15 --> 00:17:20
you know such a wide scale and what you

00:17:17 --> 00:17:22
guys are doing is literally going to

00:17:19 --> 00:17:25
enable you know millions of people to

00:17:21 --> 00:17:26
transact at a much higher rate and much

00:17:24 --> 00:17:29
lower gas fees

00:17:25 --> 00:17:31
using these using the beautiful math of

00:17:28 --> 00:17:33
snarks and it's really quite a beautiful

00:17:30 --> 00:17:34
math that goes into these things i have

00:17:32 --> 00:17:36
a million of questions for you so i'm

00:17:33 --> 00:17:38
really i'm really excited to get to the

00:17:35 --> 00:17:40
point where where i can ask you uh

00:17:37 --> 00:17:42
questions so i'll keep it i'll i'll stop

00:17:39 --> 00:17:43
there

00:17:41 --> 00:17:45
that's great dan i think one of the

00:17:42 --> 00:17:47
intuitions that has helped me in the

00:17:44 --> 00:17:49
past is that is that i mean if you think

00:17:46 --> 00:17:50
about what a blockchain is and what a

00:17:48 --> 00:17:53
blockchain needs to do

00:17:49 --> 00:17:55
is that it needs to essentially enable

00:17:52 --> 00:17:57
its participants and in the case of

00:17:54 --> 00:17:59
something like ethereum these are the

00:17:56 --> 00:18:01
validators or the miners who are

00:17:58 --> 00:18:03
processing all of the computation that

00:18:00 --> 00:18:05
happens on the blockchain to verify that

00:18:02 --> 00:18:08
he computation is correct and the way

00:18:04 --> 00:18:11
that happens now is that every miner

00:18:07 --> 00:18:14
every validator has to basically do all

00:18:10 --> 00:18:16
of the work has to essentially run every

00:18:13 --> 00:18:18
instruction of every computation that

00:18:15 --> 00:18:20
runs on the blockchain to convince

00:18:17 --> 00:18:21
themselves that the competition is

00:18:19 --> 00:18:23
correct

00:18:20 --> 00:18:26
and that's very inefficient because

00:18:22 --> 00:18:27
you've got say 20 000 validators each

00:18:25 --> 00:18:30
one of those 20 000

00:18:26 --> 00:18:32
validators has to do all of the work

00:18:29 --> 00:18:34
every instruction every computation

00:18:31 --> 00:18:35
there's a lot of redundancy as a result

00:18:33 --> 00:18:36
and the beauty of a zero knowledge proof

00:18:34 --> 00:18:38
is that

00:18:35 --> 00:18:40
instead of having that model you could

00:18:37 --> 00:18:42
have a single

00:18:39 --> 00:18:44
validator do the work of computing

00:18:42 --> 00:18:46
something

00:18:43 --> 00:18:48
that's expensive to compute and then

00:18:45 --> 00:18:50
producing a zero knowledge proof

00:18:47 --> 00:18:52
that everyone else can verify very very

00:18:49 --> 00:18:53
cheaply without having to do all of the

00:18:51 --> 00:18:54
work and that was kind of like one of

00:18:52 --> 00:18:56
the intuitions that helped me understand

00:18:54 --> 00:18:59
why this why this technology is so

00:18:55 --> 00:19:01
powerful and so well suited for for

00:18:58 --> 00:19:03
blockchains and i think i agree uh with

00:19:00 --> 00:19:05
alex uh about how like the key

00:19:02 --> 00:19:07
properties here

00:19:04 --> 00:19:09
initially for scalability are the

00:19:06 --> 00:19:11
soundness aspect and then the success

00:19:08 --> 00:19:12
aspect the fact that you can you can

00:19:10 --> 00:19:13
actually have these things exist on a

00:19:11 --> 00:19:15
blockchain because of the fact that

00:19:12 --> 00:19:17
hey're so compact

00:19:14 --> 00:19:19
make them like a perfect primitive for

00:19:16 --> 00:19:20
this space

00:19:18 --> 00:19:21
so with that with that kind of

00:19:19 --> 00:19:23
introduction about the

00:19:20 --> 00:19:27
technology

00:19:22 --> 00:19:28
uh alex g i would love to dive into the

00:19:26 --> 00:19:29
road map and some of the stuff that you

00:19:27 --> 00:19:32
guys are building

00:19:28 --> 00:19:35
so i think recently you you launched uh

00:19:31 --> 00:19:37
a test net for your zika evm and uh

00:19:34 --> 00:19:39
curious if you can walk us through

00:19:36 --> 00:19:41
what what exists today and what what the

00:19:38 --> 00:19:43
roadmap is for for things to come

00:19:40 --> 00:19:45
it will be helpful to begin with a short

00:19:42 --> 00:19:46
story of the product what we released in

00:19:44 --> 00:19:47
the past uh

00:19:45 --> 00:19:49
the

00:19:46 --> 00:19:51
protocol that we've been developing from

00:19:48 --> 00:19:53
the start is called zk sync

00:19:50 --> 00:19:56
and we have the first version of the

00:19:52 --> 00:19:59
protocol the the the mvp uh released

00:19:56 --> 00:20:01
um more than a year ago last summer this

00:19:58 --> 00:20:04
ummer last year

00:20:00 --> 00:20:06
and it was a

00:20:03 --> 00:20:09
zika roll-up that enabled

00:20:05 --> 00:20:10
much faster payments on ethereum or like

00:20:08 --> 00:20:11
much more affordable payments

00:20:09 --> 00:20:13
uh

00:20:10 --> 00:20:15
it is live we have processed over four

00:20:12 --> 00:20:17
million transactions we have lots of

00:20:14 --> 00:20:18
integrations lots of protocols uh

00:20:16 --> 00:20:22
wallets

00:20:18 --> 00:20:24
uh dapps supported we we uh

00:20:21 --> 00:20:26
it's been broadly used in the ecosystem

00:20:23 --> 00:20:28
almost all the bitcoin grant rounds have

00:20:25 --> 00:20:31
been run on

00:20:27 --> 00:20:32
the on zika sync with uh 99 of

00:20:30 --> 00:20:33
transactions going through as you can

00:20:31 --> 00:20:36
see

00:20:32 --> 00:20:38
rather than on mainnet um but it had a

00:20:35 --> 00:20:40
very limited uh functionality and in

00:20:37 --> 00:20:42
fact many people believed including um

00:20:39 --> 00:20:44
vitale butarian and

00:20:41 --> 00:20:47
leading cryptographers that

00:20:43 --> 00:20:49
making zero knowledge roll ups uh

00:20:46 --> 00:20:51
generic making this this

00:20:48 --> 00:20:53
blockchain scalability protocol generic

00:20:50 --> 00:20:55
and being able to execute arbitrary

00:20:52 --> 00:20:57
contracts will take a very long time

00:20:54 --> 00:20:58
uh luckily we had a couple of

00:20:56 --> 00:21:00
breakthroughs

00:20:57 --> 00:21:02
in purely

00:20:59 --> 00:21:03
engineering techniques in in some

00:21:01 --> 00:21:05
heuristics how we apply is your

00:21:02 --> 00:21:09
knowledge proofs to

00:21:04 --> 00:21:11
um to to provide the this uh

00:21:08 --> 00:21:14
blockchain scalability specifically that

00:21:10 --> 00:21:16
enabled us to make a generic

00:21:13 --> 00:21:21
programmable zika roll-up already this

00:21:15 --> 00:21:23
year and actually make it as far as uh

00:21:20 --> 00:21:25
close to fully vm compatibility and this

00:21:22 --> 00:21:27
what we're extremely excited about

00:21:24 --> 00:21:29
he this version is called zika sync

00:21:26 --> 00:21:32
version 2.0

00:21:28 --> 00:21:35
and yeah indeed we we have a test net we

00:21:31 --> 00:21:38
just launched our first fully ported evm

00:21:34 --> 00:21:41
dev last week on it uh it's uh the port

00:21:37 --> 00:21:42
of unislop version 2

00:21:40 --> 00:21:43
which

00:21:41 --> 00:21:46
contains the

00:21:42 --> 00:21:49
solidity smart contracts the front-end

00:21:45 --> 00:21:52
part which interacts with web-free rpc

00:21:48 --> 00:21:55
apis in the same way essentially that

00:21:51 --> 00:21:57
how this application works on mainnet

00:21:54 --> 00:21:59
so the next step for us is to open this

00:21:56 --> 00:22:01
testnet to the general public

00:21:58 --> 00:22:04
make sure that it's running

00:22:00 --> 00:22:06
in in a robust and stable way and then

00:22:03 --> 00:22:09
bring it to the main

00:22:05 --> 00:22:10
and zika sync is uh is a it's

00:22:08 --> 00:22:13
essentially an implementation of what

00:22:09 --> 00:22:15
people know of as as a zika roll-up do

00:22:12 --> 00:22:17
you want to describe for everyone uh

00:22:14 --> 00:22:19
what a zika roll-up is and what its

00:22:16 --> 00:22:21
relationship to ethereum is

00:22:18 --> 00:22:23
and the fact that it's a layer two and

00:22:20 --> 00:22:26
how how the two kind of interact and

00:22:22 --> 00:22:27
kind of how to think about it from a

00:22:25 --> 00:22:30
10 000 foot view

00:22:26 --> 00:22:32
so zikr roll up is a scaling protocol

00:22:29 --> 00:22:35
from the roll-up family

00:22:31 --> 00:22:37
the roll-ups are a continuation of

00:22:34 --> 00:22:39
plasma so

00:22:36 --> 00:22:41
this is an idea that you can take

00:22:38 --> 00:22:43
a lot of transactions put them in a

00:22:40 --> 00:22:45
block off chain compute the result of

00:22:42 --> 00:22:47
that block compute the cryptographic

00:22:44 --> 00:22:48
ommitment to that block which is a

00:22:46 --> 00:22:50
miracle

00:22:47 --> 00:22:53
we use merkel trees for

00:22:49 --> 00:22:55
epresenting this the state as we use

00:22:52 --> 00:22:57
merkel root of this tree and we store it

00:22:54 --> 00:22:59
on the contract on a single contract on

00:22:56 --> 00:23:01
the mainnet

00:22:58 --> 00:23:02
which contains all the value

00:23:00 --> 00:23:04
so the value

00:23:01 --> 00:23:06
doesn't move hands

00:23:03 --> 00:23:09
uh on on the blockchain itself instead

00:23:05 --> 00:23:11
you just record a very short hash which

00:23:08 --> 00:23:13
represents the commitment to

00:23:10 --> 00:23:17
who owns what this is very similar to

00:23:12 --> 00:23:20
the rise stones which remained uh

00:23:16 --> 00:23:23
it's it's a very uh interesting analog

00:23:20 --> 00:23:26
i recommend to to look it up uh the

00:23:22 --> 00:23:28
stones used as money on on some pacific

00:23:25 --> 00:23:31
island that remained in place and they

00:23:27 --> 00:23:33
only changed the title of who owns them

00:23:30 --> 00:23:35
so this is this is what happens uh

00:23:32 --> 00:23:38
actually on in a row so the interesting

00:23:34 --> 00:23:39
thing about rollup uh rollups in general

00:23:37 --> 00:23:44
is that

00:23:38 --> 00:23:46
uh we still publish the data for uh all

00:23:43 --> 00:23:48
transactions for all modifications on

00:23:45 --> 00:23:50
the of the state through the ethereum

00:23:47 --> 00:23:52
network so we do not use ethereum

00:23:49 --> 00:23:54
storage but we make sure that all the

00:23:51 --> 00:23:56
data is available to all all the

00:23:53 --> 00:23:59
listeners so all the full nodes so

00:23:55 --> 00:24:02
anybody can reconstruct this state

00:23:58 --> 00:24:04
and together with zero knowledge proofs

00:24:01 --> 00:24:06
that ensure the validity of transactions

00:24:03 --> 00:24:08
that make sure that no one can

00:24:05 --> 00:24:10
run an invalid transaction violate the

00:24:07 --> 00:24:13
rules of the smart contracts which we

00:24:09 --> 00:24:14
use there spend or forge

00:24:12 --> 00:24:16
additional money

00:24:13 --> 00:24:18
these two properties together

00:24:15 --> 00:24:20
give you security which is derived from

00:24:17 --> 00:24:22
the mainnet itself

00:24:19 --> 00:24:24
so in the roll-up your

00:24:21 --> 00:24:26
security is roughly equivalent to

00:24:23 --> 00:24:28
the security of ethereum so that's a

00:24:25 --> 00:24:31
really important property of this in

00:24:27 --> 00:24:34
that if somebody submits uh

00:24:30 --> 00:24:36
an invalid transaction to the roll-up

00:24:33 --> 00:24:38
cannot produce a valid a

00:24:35 --> 00:24:39
proof that would convince the chain that

00:24:37 --> 00:24:41
he transaction is valid yeah and this

00:24:38 --> 00:24:43
backed by

00:24:40 --> 00:24:45
the basically the math of the snark

00:24:42 --> 00:24:46
yeah so

00:24:44 --> 00:24:49
when when funds are stored in one of

00:24:45 --> 00:24:50
these roll-ups there's really no way to

00:24:48 --> 00:24:52
kind of take the

00:24:49 --> 00:24:53
funds out without agreement of the

00:24:51 --> 00:24:56
fund owner

00:24:52 --> 00:24:57
and again this is backed by the security

00:24:55 --> 00:24:59
of the snark

00:24:56 --> 00:25:01
yeah i think that's one of the most

00:24:58 --> 00:25:03
beautiful aspects about this is the fact

00:25:00 --> 00:25:05
hat zk sync

00:25:02 --> 00:25:07
allows you to move a ton of the

00:25:04 --> 00:25:09
computation that would otherwise have to

00:25:06 --> 00:25:10
happen on mainnet

00:25:08 --> 00:25:13
off-chain

00:25:09 --> 00:25:15
but to still inherit the security

00:25:12 --> 00:25:17
properties of the main chain by virtue

00:25:14 --> 00:25:19
of using zero knowledge proofs so you

00:25:16 --> 00:25:21
have the same level of security that uh

00:25:18 --> 00:25:23
that the layer one ethereum blockchain

00:25:20 --> 00:25:25
has but it allows you to perform the

00:25:22 --> 00:25:28
computation off chain in a way that's

00:25:24 --> 00:25:30
much more performant and has higher

00:25:27 --> 00:25:32
throughput and lower latency

00:25:29 --> 00:25:33
um and addresses some of the limitations

00:25:31 --> 00:25:37
that ethereum maintenance has without

00:25:32 --> 00:25:37
sacrificing security

00:25:38 --> 00:25:42
dan i know you have

00:25:40 --> 00:25:44
a lot of questions and definitely want

00:25:41 --> 00:25:46
o allow you to jump in so

00:25:43 --> 00:25:48
yeah actually

00:25:45 --> 00:25:49
um

00:25:47 --> 00:25:51
let me start with with actually kind of

00:25:48 --> 00:25:53
a high-level question so

00:25:50 --> 00:25:55
suppose you have a

00:25:52 --> 00:25:58
high value assets i don't know you

00:25:54 --> 00:25:59
just bought your favorite crypto punk uh

00:25:57 --> 00:26:00
would you

00:25:58 --> 00:26:02
what would you say would you rather

00:25:59 --> 00:26:06
store it on the ethereum mainnet or

00:26:01 --> 00:26:09
would you store it on uh on a zk roll up

00:26:05 --> 00:26:11
or which type of zk roll up um

00:26:08 --> 00:26:13
zk syncs ak porter um

00:26:10 --> 00:26:16
could you say something about that

00:26:12 --> 00:26:18
uh that that's really good question uh

00:26:15 --> 00:26:20
and this goes into risk assessment in

00:26:17 --> 00:26:23
general of all the blockchain protocols

00:26:20 --> 00:26:25
uh so we we have to be very clear here

00:26:22 --> 00:26:27
when we say that the protocol has the

00:26:24 --> 00:26:29
same security properties as

00:26:26 --> 00:26:32
ethereum itself we talk about with the

00:26:28 --> 00:26:33
protocol itself

00:26:31 --> 00:26:35
the

00:26:32 --> 00:26:36
very smart contract on ethereum

00:26:34 --> 00:26:39
has

00:26:35 --> 00:26:40
uh some risk in inherent to it because

00:26:38 --> 00:26:42
the

00:26:39 --> 00:26:44
it's some code which can contain bugs

00:26:41 --> 00:26:47
o like i would not trust a lot of my

00:26:44 --> 00:26:49
personal value in some new protocol

00:26:46 --> 00:26:51
immediately from the start

00:26:48 --> 00:26:52
i would wait a little bit and give it

00:26:50 --> 00:26:55
some time and

00:26:52 --> 00:26:58
space to grow in value and see that

00:26:54 --> 00:27:00
nothing bad is happening and after a

00:26:57 --> 00:27:02
year or half a year or a few months

00:26:59 --> 00:27:04
the confidence will grow because if

00:27:01 --> 00:27:06
there was a any exploit in the contracts

00:27:03 --> 00:27:10
it would have been already detected by

00:27:05 --> 00:27:12
someone and and pointed out so the this

00:27:09 --> 00:27:13
ecurity systems have the this lintiness

00:27:11 --> 00:27:15
property

00:27:12 --> 00:27:18
the longer they exist and the longer

00:27:14 --> 00:27:20
nothing that happened the more confident

00:27:17 --> 00:27:21
you can be about these protocols uh but

00:27:19 --> 00:27:23
after

00:27:20 --> 00:27:27
uh a protocol have been time tested i

00:27:22 --> 00:27:30
would totally trust a zika roll up

00:27:26 --> 00:27:33
with a very high fortune for sure so you

00:27:29 --> 00:27:36
also mentioned a zk porter and uh let me

00:27:32 --> 00:27:38
introduce this this this is a extremely

00:27:35 --> 00:27:39
exciting uh thing like it's it's an

00:27:37 --> 00:27:41
extension of

00:27:38 --> 00:27:43
uh easy roll-up which is only possible

00:27:40 --> 00:27:46
with zk

00:27:42 --> 00:27:48
roll up family uh there is another uh

00:27:45 --> 00:27:49
type of roll-ups called optimistic

00:27:47 --> 00:27:51
roll-ups they unfortunately cannot do

00:27:48 --> 00:27:52
this they do not rely on math and

00:27:50 --> 00:27:54
cryptography they rely on game theory

00:27:51 --> 00:27:56
and validators and they cannot have this

00:27:53 --> 00:27:59
extension

00:27:55 --> 00:28:01
and so with um

00:27:58 --> 00:28:04
with your knowledge proofs you

00:28:00 --> 00:28:07
could in theory rely just on the

00:28:03 --> 00:28:08
validity of these proofs and have the

00:28:06 --> 00:28:12
data

00:28:07 --> 00:28:14
be managed or be made available by uh

00:28:11 --> 00:28:15
by some off-chain party

00:28:13 --> 00:28:18
and such a system would be called

00:28:14 --> 00:28:21
validium so this off this this third

00:28:17 --> 00:28:23
trusted party like semi trusted party

00:28:20 --> 00:28:25
would not be able to do uh anything

00:28:22 --> 00:28:27
wrong with your transactions to mess

00:28:24 --> 00:28:29
with with the code of smart contracts

00:28:26 --> 00:28:31
and violate the rules but they could

00:28:28 --> 00:28:34
theoretically make the

00:28:30 --> 00:28:36
uh the state frozen not not provide the

00:28:33 --> 00:28:38
data availability so if you trust them

00:28:35 --> 00:28:40
to not do this you can you can use such

00:28:37 --> 00:28:43
a system otherwise you are much better

00:28:39 --> 00:28:46
off with uh with the roll-up or data

00:28:42 --> 00:28:48
vailability assault on ethereum however

00:28:45 --> 00:28:50
a rollup comes with a cost since we have

00:28:47 --> 00:28:52
to publish some data on ethereum for

00:28:49 --> 00:28:53
every transaction or for at least for

00:28:51 --> 00:28:55
every account which has been touched in

00:28:52 --> 00:28:58
this block

00:28:54 --> 00:29:00
you have to pay to ethereum validators

00:28:57 --> 00:29:01
to to the miners for broadcasting this

00:28:59 --> 00:29:03
transaction because you still need to

00:29:00 --> 00:29:06
make it available to everyone

00:29:02 --> 00:29:09
to every full node and ethereum uh so it

00:29:05 --> 00:29:10
has roughly linear costs

00:29:08 --> 00:29:11
uh

00:29:09 --> 00:29:12
to the number of transactions in the

00:29:10 --> 00:29:15
block

00:29:11 --> 00:29:18
and it roughly corresponds to so

00:29:14 --> 00:29:19
it will grow linearly with the rising

00:29:17 --> 00:29:21
as

00:29:18 --> 00:29:23
costs on the mainnet

00:29:20 --> 00:29:25
so right now the

00:29:22 --> 00:29:27
roll-ups we have for ezekiel apps we

00:29:24 --> 00:29:30
have for payments are about 50 times

00:29:26 --> 00:29:31
cheaper than native payments on player

00:29:29 --> 00:29:33
one

00:29:30 --> 00:29:35
and i expect that this ratio to remain

00:29:32 --> 00:29:36
roughly the same for also for smart

00:29:34 --> 00:29:39
contracts

00:29:35 --> 00:29:41
uh so if you if you think that like if

00:29:38 --> 00:29:43
you have some complicated defy

00:29:40 --> 00:29:45
interaction and the

00:29:42 --> 00:29:47
thereum cost would would be a thousand

00:29:44 --> 00:29:49
ollars then

00:29:46 --> 00:29:51
uh a rollup uh transaction would cost 20

00:29:48 --> 00:29:52
but this might still be too high for a

00:29:50 --> 00:29:55
lot of people

00:29:51 --> 00:29:59
right so uh what they can do instead

00:29:54 --> 00:30:02
they they can rely on validio uh

00:29:58 --> 00:30:05
but in zk sync uh

00:30:01 --> 00:30:08
this validium system is uh is called zk

00:30:04 --> 00:30:11
porter because uh it it actually like

00:30:07 --> 00:30:13
the the data is not held by a

00:30:10 --> 00:30:15
centralized third party it is still

00:30:12 --> 00:30:17
decentralized we have a

00:30:14 --> 00:30:20
protocol which involves a group of

00:30:16 --> 00:30:22
validators called guardians who provide

00:30:19 --> 00:30:23
the security of this data using

00:30:21 --> 00:30:25
proof-of-stake

00:30:22 --> 00:30:26
delegation mechanism

00:30:24 --> 00:30:30
the beauty of

00:30:25 --> 00:30:32
zika sync 2.0 is that zika roll-up and

00:30:29 --> 00:30:33
ziki porter can co-exist in the same

00:30:31 --> 00:30:35
system

00:30:32 --> 00:30:37
offering different accounts with

00:30:34 --> 00:30:38
different properties to users with

00:30:36 --> 00:30:41
different needs

00:30:38 --> 00:30:44
those who want to uh

00:30:40 --> 00:30:47
store highly valuable assets should

00:30:43 --> 00:30:49
prefer sdk roll up those who need cheap

00:30:46 --> 00:30:50
transactions can go to zk porter but

00:30:48 --> 00:30:51
hey can still seamlessly interact with

00:30:49 --> 00:30:54
each other

00:30:50 --> 00:30:58
so this is like having

00:30:53 --> 00:30:59
a uni swap on ethereum and uh users on

00:30:57 --> 00:31:01
some side chain who prefer cheap

00:30:58 --> 00:31:03
transactions

00:31:00 --> 00:31:05
uh those users could interact with the

00:31:02 --> 00:31:07
with the same liquidity which

00:31:04 --> 00:31:08
you have on ethereum seamlessly

00:31:06 --> 00:31:09
anatomically

00:31:07 --> 00:31:12
this is very interesting

00:31:08 --> 00:31:13
i i really like that uh distinction in

00:31:11 --> 00:31:16
that

00:31:12 --> 00:31:17
zk sync basically has kind of a bounded

00:31:15 --> 00:31:19
scalability

00:31:16 --> 00:31:21
factor over the layer one network

00:31:18 --> 00:31:22
because all the data has to be written

00:31:20 --> 00:31:24
to the layer one network i think you

00:31:21 --> 00:31:26
mentioned it's a factor of 50 or so

00:31:23 --> 00:31:28
whereas ek porter seems like it could

00:31:25 --> 00:31:29
have an unbounded

00:31:27 --> 00:31:31
acceleration over the layer one network

00:31:28 --> 00:31:33
right because now the data doesn't even

00:31:30 --> 00:31:35
live on the lay on the layer one network

00:31:32 --> 00:31:37
so in principle you can take as many

00:31:34 --> 00:31:39
transactions as you want and compress

00:31:36 --> 00:31:41
them into a short snark proof and all

00:31:38 --> 00:31:44
the layer one does is just verify this

00:31:40 --> 00:31:47
hort snark proof so you have unbounded

00:31:43 --> 00:31:49
gas reduction using zk porter it wears

00:31:46 --> 00:31:51
its bounded improvements using zk sync

00:31:48 --> 00:31:54
is that a fair fair comparison

00:31:50 --> 00:31:56
uh this is a fair comparison and uh the

00:31:53 --> 00:31:58
the only thing which is uh which the

00:31:55 --> 00:32:00
users of zika porter have to take into

00:31:57 --> 00:32:02
account is diminished security because

00:31:59 --> 00:32:04
we introduced a new security assumption

00:32:01 --> 00:32:07
a almost majority operational majority

00:32:03 --> 00:32:09
assumption for zika part specifically so

00:32:06 --> 00:32:12
theoretically the

00:32:08 --> 00:32:14
uh the guardians could freeze the data

00:32:11 --> 00:32:15
but this would cost them a lot so you're

00:32:13 --> 00:32:17
a crypto punk you would rather your

00:32:14 --> 00:32:20
expensive crypto punk you would rather

00:32:16 --> 00:32:23
put that on zk sync than on zki porter

00:32:19 --> 00:32:25
the most expensive assets i uh i would

00:32:22 --> 00:32:27
highly recommend to put on zikrola so

00:32:24 --> 00:32:29
you can think of it as savings account

00:32:26 --> 00:32:31
and current account you probably have

00:32:28 --> 00:32:32
most of your money in the savings

00:32:30 --> 00:32:34
account or in terms of blockchain you

00:32:31 --> 00:32:36
can think of a cold storage

00:32:33 --> 00:32:38
uh but then you have some smaller amount

00:32:35 --> 00:32:39
of funds that you use for daily

00:32:37 --> 00:32:41
transactions

00:32:38 --> 00:32:45
only cheaper current account with

00:32:40 --> 00:32:46
cheaper transactions slower lower fees

00:32:44 --> 00:32:49
and dan do you want to briefly give some

00:32:45 --> 00:32:50
context around why data the data has to

00:32:48 --> 00:32:53
be available

00:32:49 --> 00:32:54
uh and that might help kind of inform

00:32:52 --> 00:32:56
the role of zika porter on the network

00:32:54 --> 00:32:58
oh for sure yeah this is kind of this is

00:32:55 --> 00:33:01
pretty important i mean so we're relying

00:32:57 --> 00:33:03
on sort of um um

00:33:00 --> 00:33:05
a validator to provide these these these

00:33:02 --> 00:33:07
proofs and so the validator has to know

00:33:04 --> 00:33:08
the state of the world how much is in

00:33:06 --> 00:33:11
everybody's account

00:33:07 --> 00:33:13
and to make sure that other validators

00:33:10 --> 00:33:16
uh can come in in case one validator

00:33:12 --> 00:33:18
goes down they need to have access to

00:33:15 --> 00:33:20
all the transaction data that was made

00:33:17 --> 00:33:22
available up until this point and so

00:33:19 --> 00:33:24
putting the transaction data on the

00:33:21 --> 00:33:26
level on the layer one blockchain and

00:33:23 --> 00:33:29
ethereum makes it possible for anyone to

00:33:25 --> 00:33:31
step up and act as a validator um yeah

00:33:28 --> 00:33:33
whereas if it's off chain now we have to

00:33:30 --> 00:33:36
rely on uh in some sense that the good

00:33:32 --> 00:33:38
the the you know the staked property of

00:33:35 --> 00:33:40
the other validators in order to for

00:33:37 --> 00:33:41
enough for other validators to come

00:33:39 --> 00:33:43
online

00:33:40 --> 00:33:45
yeah exactly

00:33:42 --> 00:33:47
eah my intuition for this has been that

00:33:44 --> 00:33:49
i mean you can think of ethereum as as a

00:33:46 --> 00:33:52
computer and it does two things it can

00:33:48 --> 00:33:54
do two things it can do computation and

00:33:51 --> 00:33:56
it can also store data but it's very

00:33:53 --> 00:33:58
expensive in both of those two things

00:33:55 --> 00:34:00
and zk sync

00:33:57 --> 00:34:02
makes the data available which as then

00:33:59 --> 00:34:04
described as important to be able to

00:34:01 --> 00:34:07
generate these zero knowledge proofs by

00:34:03 --> 00:34:08
posting all of the data on ethereum and

00:34:06 --> 00:34:10
ethereum then can make that data

00:34:07 --> 00:34:12
vailable to anyone who who wants to

00:34:09 --> 00:34:15
generate the proof

00:34:11 --> 00:34:17
zik porter is an alternative because

00:34:14 --> 00:34:19
thereum is so expensive

00:34:16 --> 00:34:21
you can instead make the data available

00:34:18 --> 00:34:23
by putting it on porter which is a side

00:34:20 --> 00:34:26
network that provides data availability

00:34:22 --> 00:34:29
as a way of making it

00:34:25 --> 00:34:30
cheaper and more accessible

00:34:28 --> 00:34:32
to anyone who might want to generate the

00:34:30 --> 00:34:34
proof but there are trade-offs because

00:34:31 --> 00:34:37
you might think ethereum is a more

00:34:33 --> 00:34:39
secure uh data availability layer than

00:34:36 --> 00:34:40
ck porter which is why maybe for a very

00:34:38 --> 00:34:42
high value asset

00:34:40 --> 00:34:45
you might want to go with zk sync

00:34:41 --> 00:34:47
whereas for a low value nft it's okay to

00:34:44 --> 00:34:50
go with zk porter as

00:34:46 --> 00:34:52
an intuition for for the trade-offs is

00:34:49 --> 00:34:54
that a fair kind of characterization

00:34:51 --> 00:34:56
yeah absolutely one of the things that

00:34:53 --> 00:34:58
may be interesting to discuss are the

00:34:55 --> 00:35:00
are kind of some of the trends

00:34:57 --> 00:35:02
around zero knowledge proofs

00:34:59 --> 00:35:04
um and i think in my mind there are

00:35:01 --> 00:35:06
three there are kind of three broad

00:35:03 --> 00:35:08
trends one of them is the trend of the

00:35:05 --> 00:35:09
algorithms getting better

00:35:07 --> 00:35:11
and allowing for people to generate zero

00:35:08 --> 00:35:13
knowledge proofs more efficiently

00:35:10 --> 00:35:16
another trend which i think is beginning

00:35:12 --> 00:35:18
now is the trend of people building

00:35:15 --> 00:35:20
specialized hardware to generate proofs

00:35:17 --> 00:35:22
more efficiently and both of these two

00:35:19 --> 00:35:23
things are on the kind of the prover

00:35:21 --> 00:35:25
generating the proof the proof

00:35:22 --> 00:35:27
generation side and then on the other

00:35:24 --> 00:35:28
side there's the

00:35:26 --> 00:35:31
re's a trend on like programming

00:35:27 --> 00:35:33
languages like how do you create

00:35:30 --> 00:35:35
programs that can leverage

00:35:32 --> 00:35:36
zero knowledge proofs

00:35:34 --> 00:35:37
to be

00:35:35 --> 00:35:40
provable

00:35:36 --> 00:35:41
um and i think historically like maybe

00:35:39 --> 00:35:42
dan i think you can share some of the

00:35:40 --> 00:35:45
history i feel like

00:35:41 --> 00:35:47
uh there's a long history of a

00:35:44 --> 00:35:49
verifiable computation as a subfield of

00:35:46 --> 00:35:51
computer science and then all of a

00:35:48 --> 00:35:53
sudden has begun to explode in part

00:35:50 --> 00:35:56
because now there's a really key like

00:35:52 --> 00:35:58
high value uh application

00:35:55 --> 00:35:59
for all of the stuff and in the recent

00:35:57 --> 00:36:01
years i think we've seen

00:35:58 --> 00:36:03
incredible developments on the algorithm

00:36:00 --> 00:36:04
front we're now seeing kind of

00:36:02 --> 00:36:06
specialized hardware as it's very clear

00:36:04 --> 00:36:09
that there's a lot of money to be made

00:36:05 --> 00:36:10
and then i think also uh you guys uh

00:36:08 --> 00:36:12
alex

00:36:09 --> 00:36:14
uh you're you're also innovating on the

00:36:11 --> 00:36:16
programming language side to make it

00:36:13 --> 00:36:18
more accessible for developers to write

00:36:15 --> 00:36:20
code for these things

00:36:17 --> 00:36:22
uh so maybe dan if you could share a

00:36:19 --> 00:36:24
little bit about the history of the of

00:36:21 --> 00:36:26
the kind of the space and and verifiable

00:36:23 --> 00:36:27
computation and then alex would love to

00:36:25 --> 00:36:30
hear about what you're doing on the kind

00:36:26 --> 00:36:32
of the programming language side

00:36:29 --> 00:36:34
actually uh honestly i think it's a if i

00:36:31 --> 00:36:35
could ask like a like a a question that

00:36:33 --> 00:36:38
would be more interesting to our

00:36:34 --> 00:36:40
technical listeners uh would you guys

00:36:37 --> 00:36:42
explain how you got the zk evm to work i

00:36:39 --> 00:36:44
mean compiling

00:36:41 --> 00:36:45
unisov v2 solidity

00:36:43 --> 00:36:47
into

00:36:44 --> 00:36:49
uh

00:36:46 --> 00:36:51
you know a snark capable circuit

00:36:48 --> 00:36:54
we thought this was going to be decades

00:36:50 --> 00:36:56
away and you you got it to work can you

00:36:53 --> 00:36:58
explain like what's the secret

00:36:55 --> 00:37:00
what's the kind of magic that made it

00:36:57 --> 00:37:04
possible for you to do this

00:36:59 --> 00:37:05
uh sure i can try to do this so um

00:37:03 --> 00:37:07
the

00:37:04 --> 00:37:10
with zero knowledge proofs you have to

00:37:06 --> 00:37:12
perform a lot more computations uh than

00:37:09 --> 00:37:14
the naive execution of your code

00:37:11 --> 00:37:17
so the the

00:37:13 --> 00:37:20
you have a roughly a factor of 100

00:37:16 --> 00:37:22
overhead on on computation like what

00:37:19 --> 00:37:22
your like number

00:37:21 --> 00:37:24
operations of

00:37:21 --> 00:37:27
your professor has to perform

00:37:23 --> 00:37:29
so maybe like alex if you'd like to

00:37:26 --> 00:37:32
uh talk a little bit about uh kind of

00:37:28 --> 00:37:34
the trends on programming programming uh

00:37:31 --> 00:37:36
languages for zero knowledge proofs and

00:37:33 --> 00:37:38
how those things have evolved and what

00:37:35 --> 00:37:40
you're doing to make that to make that

00:37:37 --> 00:37:42
friendlier and how in the past it's

00:37:39 --> 00:37:44
actually been quite hard because the

00:37:41 --> 00:37:45
programming languages and tools haven't

00:37:43 --> 00:37:47
really been there and they've only

00:37:44 --> 00:37:48
really kind of recently as in in large

00:37:46 --> 00:37:49
part because of the work that you're

00:37:47 --> 00:37:51
doing

00:37:48 --> 00:37:52
have become a little bit friendlier

00:37:50 --> 00:37:54
um they're curious to hear about kind of

00:37:52 --> 00:37:57
the work you're doing on the zika uvm

00:37:54 --> 00:37:59
like what is a zika evm and

00:37:56 --> 00:38:01
why do we need a compiler that's

00:37:58 --> 00:38:04
different from the compilers that that

00:38:00 --> 00:38:06
exist already and how does that make it

00:38:03 --> 00:38:07
easier for the developer to

00:38:05 --> 00:38:08
write code

00:38:06 --> 00:38:09
uh

00:38:07 --> 00:38:12
that ultimately

00:38:08 --> 00:38:14
leverages their knowledge proofs the the

00:38:11 --> 00:38:16
uh i have to begin by explaining how

00:38:13 --> 00:38:17
programs become their knowledge proofs

00:38:15 --> 00:38:20
in the first place

00:38:16 --> 00:38:23
so unlike a normal cpu that executes

00:38:20 --> 00:38:26
transactions one uh it executes their

00:38:22 --> 00:38:27
operations one after another uh to

00:38:25 --> 00:38:31
represent something as a zero knowledge

00:38:26 --> 00:38:33
proof you have to translate your program

00:38:30 --> 00:38:34
into a kind of arithmetic circuit which

00:38:32 --> 00:38:36
is

00:38:33 --> 00:38:38
which looks very similar to a hardware

00:38:35 --> 00:38:39
circuit you have some inputs

00:38:37 --> 00:38:41
you have some gates that connect these

00:38:38 --> 00:38:44
inputs and then you have some outputs

00:38:40 --> 00:38:46
and you have to unroll your the entire

00:38:44 --> 00:38:48
computation of your program into this

00:38:45 --> 00:38:49
one big

00:38:47 --> 00:38:51
long circuit

00:38:48 --> 00:38:52
and unfortunately

00:38:50 --> 00:38:55
[Music]

00:38:51 --> 00:38:57
in order to verify a zero knowledge

00:38:54 --> 00:38:58
proof you have to know exactly what the

00:38:56 --> 00:39:00
circuit is

00:38:57 --> 00:39:03
beforehand in advance

00:38:59 --> 00:39:07
so it it it it made it very hard to uh

00:39:02 --> 00:39:10
make to to to turn zero knowledge uh

00:39:06 --> 00:39:12
into something generic because with

00:39:09 --> 00:39:14
uh custom smart contracts

00:39:11 --> 00:39:16
you would need to deploy a lot of

00:39:13 --> 00:39:17
different verification keys for every

00:39:15 --> 00:39:19
[Music]

00:39:16 --> 00:39:22
every smart contract on mainnet on layer

00:39:18 --> 00:39:23
one which would be way too expensive and

00:39:21 --> 00:39:26
would defeat the the whole purpose of

00:39:22 --> 00:39:29
scalability so what we want is a single

00:39:25 --> 00:39:30
circuit that can verify any program

00:39:28 --> 00:39:31
but how do you do it

00:39:29 --> 00:39:34
like

00:39:30 --> 00:39:36
programs that can vary in length

00:39:33 --> 00:39:37
at can have conditional statements and

00:39:35 --> 00:39:39
so on

00:39:36 --> 00:39:41
you can't really

00:39:38 --> 00:39:44
describe them as a one single

00:39:40 --> 00:39:47
mathematical equation so the trick that

00:39:43 --> 00:39:48
has been around uh quite some time

00:39:46 --> 00:39:50
that we are actually using is called

00:39:47 --> 00:39:53
tiny ram

00:39:49 --> 00:39:54
so we have one single universal circuit

00:39:52 --> 00:39:57
hat

00:39:54 --> 00:39:58
can prove an execution trace of a

00:39:56 --> 00:40:00
program

00:39:57 --> 00:40:02
so you don't have to describe the to

00:39:59 --> 00:40:05
compile the program into a circuit

00:40:01 --> 00:40:07
uh you have a normal virtual machine

00:40:04 --> 00:40:10
but this virtual machine is structured

00:40:06 --> 00:40:11
in such a way that we can

00:40:09 --> 00:40:13
take a sim

00:40:10 --> 00:40:15
separate circuit and prove that we

00:40:12 --> 00:40:16
xecuted certain operations on certain

00:40:14 --> 00:40:17
steps

00:40:15 --> 00:40:19
uh

00:40:16 --> 00:40:22
just these operations have to be

00:40:18 --> 00:40:23
adjusted specifically for

00:40:21 --> 00:40:27
to be efficient in in this virtual

00:40:22 --> 00:40:31
machine um and uh the problem is with

00:40:26 --> 00:40:32
is approach the overhead grows

00:40:30 --> 00:40:34
1000x

00:40:31 --> 00:40:37
it's it's very very inefficient it would

00:40:34 --> 00:40:39
be prohibitively expensive with with

00:40:36 --> 00:40:41
regard to just hardware but

00:40:38 --> 00:40:45
hardware computing capabilities but also

00:40:40 --> 00:40:46
the cost to try to generate the the

00:40:44 --> 00:40:48
proofs

00:40:45 --> 00:40:52
uh for the

00:40:47 --> 00:40:52
for a generic program with a generic

00:40:51 --> 00:40:57
primitives like hashes and and storage

00:40:54 --> 00:41:01
access and other heavy operations so the

00:40:56 --> 00:41:04
trick that we used in zkvm to make the

00:41:00 --> 00:41:05
vm compatible dk roll possible was to

00:41:03 --> 00:41:08
separate the

00:41:04 --> 00:41:10
tiny ram circuit which is responsible

00:41:07 --> 00:41:13
only for the program logic

00:41:09 --> 00:41:16
from the circuits which are optimized

00:41:12 --> 00:41:18
for doing heavy operations

00:41:15 --> 00:41:20
which are not generic

00:41:17 --> 00:41:23
they're rigid and they're designed to

00:41:19 --> 00:41:25
just do a certain type of hash

00:41:22 --> 00:41:26
certain type of storage access proving

00:41:24 --> 00:41:28
the merkle

00:41:25 --> 00:41:29
paths to a merkle tree and then we

00:41:27 --> 00:41:31
combine all of them by means of

00:41:28 --> 00:41:33
recursion

00:41:30 --> 00:41:35
and recursion is something that became

00:41:32 --> 00:41:38
available and became affordable on

00:41:34 --> 00:41:40
ethereum just last year before that it

00:41:37 --> 00:41:42
was very expensive we had different

00:41:39 --> 00:41:44
proof systems uh

00:41:41 --> 00:41:47
that supported recursion but they were

00:41:43 --> 00:41:49
way too expensive to be used on theory

00:41:46 --> 00:41:52
so this was the main trick that enabled

00:41:48 --> 00:41:54
us to build the uh evm compatible

00:41:51 --> 00:41:56
virtual machine

00:41:53 --> 00:41:58
and why can you explain a little bit

00:41:55 --> 00:42:00
about why it's important for it to be

00:41:57 --> 00:42:02
vm compatible

00:41:59 --> 00:42:04
we actually started originally with

00:42:01 --> 00:42:06
building a custom language

00:42:03 --> 00:42:08
which was optimized for voicing

00:42:05 --> 00:42:11
knowledge process it was called zinc

00:42:07 --> 00:42:13
but we quickly realized that

00:42:10 --> 00:42:15
it will be

00:42:12 --> 00:42:17
really hard to onboard the existing

00:42:14 --> 00:42:19
ecosystem of ethereum and let everyone

00:42:16 --> 00:42:20
rewrite their programs completely in

00:42:18 --> 00:42:22
this new language

00:42:19 --> 00:42:25
and the problem was not the language

00:42:21 --> 00:42:28
itself so much uh because we made zinc

00:42:24 --> 00:42:30
uh based on rust and it it was actually

00:42:27 --> 00:42:32
a simplified form of us so like people

00:42:29 --> 00:42:34
would be able to learn it in in just in

00:42:31 --> 00:42:35
a few days coming from solidity

00:42:33 --> 00:42:37
background

00:42:34 --> 00:42:40
uh the problem was with the tooling and

00:42:36 --> 00:42:41
the expertise available in in the

00:42:39 --> 00:42:44
industry in general so like you have a

00:42:40 --> 00:42:46
lot of code which is already battle

00:42:43 --> 00:42:47
tested which has this lintiness property

00:42:45 --> 00:42:49
which has have been

00:42:46 --> 00:42:51
life on ethereum for many years and

00:42:48 --> 00:42:53
everyone knows that it's safe because it

00:42:50 --> 00:42:55
secures billions of dollars worth of

00:42:52 --> 00:42:57
value for such a long time

00:42:54 --> 00:42:59
uh and it passes security audience but

00:42:56 --> 00:43:00
most most importantly just been around

00:42:58 --> 00:43:02
for very long

00:42:59 --> 00:43:04
and you want this code to be just

00:43:02 --> 00:43:06
seamlessly deployable

00:43:03 --> 00:43:07
uh and then if you if you can do this

00:43:05 --> 00:43:09
then

00:43:06 --> 00:43:12
everyone can do this and you instantly

00:43:08 --> 00:43:13
have an ecosystem of other projects

00:43:11 --> 00:43:16
that are

00:43:12 --> 00:43:18
composable that that have apis that your

00:43:15 --> 00:43:21
dap can interact with and so on so

00:43:18 --> 00:43:24
we see it with uh alternative l1

00:43:20 --> 00:43:26
we have a couple of ethereum killers

00:43:23 --> 00:43:28
having launched in uh in the previous

00:43:25 --> 00:43:31
year with custom systems with different

00:43:27 --> 00:43:33
virtual machines and different languages

00:43:30 --> 00:43:35
and they didn't really get traction

00:43:32 --> 00:43:37
until they implemented ethereum

00:43:34 --> 00:43:39
compatibility and this is when a lot of

00:43:36 --> 00:43:41
projects started to go multi-chain and

00:43:38 --> 00:43:43
eploy because all of a sudden the the

00:43:40 --> 00:43:45
whole ecosystem could migrate together

00:43:42 --> 00:43:47
and we realized that this is a very very

00:43:44 --> 00:43:48
important property for ethereum for

00:43:46 --> 00:43:50
photos

00:43:47 --> 00:43:52
uh in the first place

00:43:49 --> 00:43:54
yeah it's hugely important because

00:43:51 --> 00:43:56
it's it's easy to underestimate the

00:43:53 --> 00:43:58
network effects that a programming

00:43:55 --> 00:43:59
language and the set of tools around it

00:43:57 --> 00:44:00
have

00:43:58 --> 00:44:01
um

00:43:59 --> 00:44:03
and

00:44:00 --> 00:44:06
it's it's become very clear that

00:44:02 --> 00:44:08
solidity and the evm have kind of become

00:44:05 --> 00:44:10
the lingua franca of crypto and of web3

00:44:08 --> 00:44:10
so far

00:44:09 --> 00:44:12
and

00:44:09 --> 00:44:14
it's an enormous cost for people to

00:44:12 --> 00:44:16
learn a new programming language and to

00:44:13 --> 00:44:18
learn a new tool chain or to even build

00:44:15 --> 00:44:21
the tool chain if it doesn't yet exist

00:44:17 --> 00:44:23
uh and so the ability to be able to port

00:44:20 --> 00:44:25
a contract that's or a program that's

00:44:22 --> 00:44:27
written in solidity that ex that exists

00:44:24 --> 00:44:30
and runs on ethereum today without

00:44:26 --> 00:44:32
having to change it to zk sync and to

00:44:29 --> 00:44:33
have it then benefit from zero knowledge

00:44:31 --> 00:44:35
proofs is very very powerful and

00:44:32 --> 00:44:37
something that as dan was saying people

00:44:34 --> 00:44:39
thought would be impossible it was

00:44:36 --> 00:44:41
really cool that you guys have figured

00:44:38 --> 00:44:44
out a way of building a compiler that

00:44:40 --> 00:44:46
akes solidity and and compiles it down

00:44:43 --> 00:44:49
um to a zk circuit such that it can be

00:44:45 --> 00:44:50
provable in the way that that kind of

00:44:48 --> 00:44:51
zika rollups

00:44:49 --> 00:44:53
allow

00:44:50 --> 00:44:54
um we'd love to i think in the last few

00:44:52 --> 00:44:56
minutes we were we're almost the time

00:44:54 --> 00:44:58
but we'd love to maybe touch on

00:44:56 --> 00:45:00
some of the applications that you guys

00:44:57 --> 00:45:03
are most excited about that people might

00:44:59 --> 00:45:05
build on top of zk sync

00:45:02 --> 00:45:08
i i believe that most d5 protocols from

00:45:04 --> 00:45:10
ethereum will launch in zika sync

00:45:07 --> 00:45:12
actually from the beginning we see

00:45:09 --> 00:45:15
a lot of adoption happening with uh with

00:45:11 --> 00:45:16
other l2s and with alternative chains so

00:45:14 --> 00:45:18
like

00:45:15 --> 00:45:21
very application that wants to go

00:45:17 --> 00:45:23
multi-chain will necessarily launch into

00:45:20 --> 00:45:26
kissing uh but um

00:45:22 --> 00:45:28
i think that the

00:45:25 --> 00:45:30
the the most interesting things will

00:45:27 --> 00:45:30
arise

00:45:29 --> 00:45:33
from

00:45:30 --> 00:45:36
the ability of this chain to actually

00:45:32 --> 00:45:38
accommodate much larger user base

00:45:35 --> 00:45:40
and make a lot of transactions really

00:45:37 --> 00:45:42
cheap so you can build stuff like social

00:45:39 --> 00:45:43
networks you can build

00:45:41 --> 00:45:46
uh

00:45:42 --> 00:45:47
protocols that uh

00:45:45 --> 00:45:49
you you like

00:45:46 --> 00:45:51
something we can we can't even imagine

00:45:48 --> 00:45:53
now or we can't really predict because

00:45:50 --> 00:45:55
this is going to be a trial and error

00:45:52 --> 00:45:56
process uh but the

00:45:54 --> 00:45:59
this is a case where

00:45:56 --> 00:46:00
quantity transforms into quality by

00:45:58 --> 00:46:02
quantity i mean the the performance

00:45:59 --> 00:46:04
posed to that that the

00:46:01 --> 00:46:06
uh zero knowledge brokers can provide

00:46:03 --> 00:46:08
historically that once you increase

00:46:05 --> 00:46:09
computing power by a factor of 10 you

00:46:07 --> 00:46:11
sort of get a whole bunch of

00:46:08 --> 00:46:13
applications you never you never even

00:46:10 --> 00:46:15
expected you never even dreamed of

00:46:12 --> 00:46:16
and probably i think alex this is what

00:46:14 --> 00:46:17
you're saying the same thing is going to

00:46:15 --> 00:46:19
happen here that

00:46:16 --> 00:46:21
you know we we speed things up by a

00:46:18 --> 00:46:22
factor of 50 and all of a sudden uh we

00:46:20 --> 00:46:24
get a whole bunch of new applications we

00:46:21 --> 00:46:27
couldn't even imagine

00:46:23 --> 00:46:29
yeah absolutely i love that

00:46:26 --> 00:46:30
cool i think that's a good time it's a

00:46:28 --> 00:46:32
good a good way to

00:46:29 --> 00:46:36
wrap up thank you guys thank you alex

00:46:31 --> 00:46:37
g alex v and dan it was a super fun

00:46:35 --> 00:46:40
conversation

00:46:36 --> 00:46:43
yeah this is great thank you ellie

00:46:39 --> 00:46:43
thank you ali thank you then

<!-- YOUTUBE_TRANSCRIPT_END -->
