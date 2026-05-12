---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Lx9sVfNvpXw"
title: "a16z Podcast | Voting, Security, and Governance in Blockchains and Cryptonetworks"
video_url: "https://www.youtube.com/watch?v=Lx9sVfNvpXw"
thumbnail_url: "https://i.ytimg.com/vi/Lx9sVfNvpXw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Lx9sVfNvpXw"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-02-26T19:39:14.000Z"
upload_date: "2019-02-26"
duration_seconds: 2309
duration_human: "38:29"
view_count: 387
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:36:50.963Z"
---

# a16z Podcast | Voting, Security, and Governance in Blockchains and Cryptonetworks

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Lx9sVfNvpXw
- video_id: Lx9sVfNvpXw
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-02-26T19:39:14.000Z
- upload_date: 2019-02-26
- duration: 38:29
- view_count: 387
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: cryptography, blockchains, DAOs, security, cryptoeconimics, game theory, voting, electronic voting, elections, governance
- categories: Science & Technology

## Description

with Phil Daian (@phildaian) and Ali Yahya (@ali01)

Whether in corporations, boardrooms, or political elections, voting is something we see in all kinds of social systems... including blockchains. It's the natural human tendency for how to organize decisions, and in distributed systems without centralized middlemen, it's the only clear Schelling point we can come up with.

But too many people design voting mechanisms in distributed systems in isolation -- sometimes naively "porting over" assumptions from the real world or from simple cryptoeconomic models without thinking through the economic adversaries present in a larger, more rational (vs. "honest") game-theoretic system. So how are blockchain systems different from real-world paper and electronic voting systems? How can such systems be gamed, and what are the implications for cryptoeconomic security... as well as the governance of distributed organizations?

This hallway-style episode of the a16z Podcast covers all this and more. Recorded as part of our NYC roadtrip, it features Cornell Tech PhD student and software engineer Phil Daian, who researches applied cryptography and smart contracts -- and who also wrote about "On-chain Vote Buying and the Rise of Dark DAOs" in 2018 (with Tyler Kell, Ian Miers, and his advisor Ari Juels). Daian is joined by a16z crypto partner Ali Yahya (previously a software engineer and machine learning researcher at GoogleX and Google Brain), who also recently presented on crypto as the evolution -- and future -- of trust.

---

The views expressed herein are those of the individual personnel quoted herein. This presentation is provided solely for informational purposes and should not be relied upon when making any investment decision. References to any securities or digital assets are for illustrative purposes only and do not constitute a recommendation to invest in any instrument nor do they constitute an offer to provide investment advisory services.

This presentation should not be relied upon as legal, business, investment or tax advice. You should consult your own advisers as to legal, business, tax and other related matters concerning any investment. Furthermore, this content is not directed at nor intended for use by any investor or prospective investor, and may not under any circumstances be relied upon when making a decision to invest in any fund. Past performance is not indicative of future results. Please see https://a16zcrypto.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi everyone welcome to the a 6 & Z

00:00:02 --> 00:00:08
podcast I'm sonal today's episode is all

00:00:05 --> 00:00:11
about blockchain based voting systems

00:00:07 --> 00:00:13
which has implications for crypto

00:00:10 --> 00:00:15
economic security and for governance

00:00:12 --> 00:00:17
specially when you think about the

00:00:14 --> 00:00:19
differences both good and bad between

00:00:16 --> 00:00:21
real world and online systems for

00:00:18 --> 00:00:22
coordinating groups of people to vote on

00:00:20 --> 00:00:24
something whether it's a decision in a

00:00:21 --> 00:00:27
boardroom or an election or anything

00:00:23 --> 00:00:28
else this episode was recorded as part

00:00:26 --> 00:00:31
of our New York City podcast Roadshow

00:00:27 --> 00:00:33
and so it features Phil day on a PhD at

00:00:30 --> 00:00:35
Cornell Tech working with Ari jewels

00:00:32 --> 00:00:37
there his research focuses on broad

00:00:34 --> 00:00:39
questions of security of distributed

00:00:36 --> 00:00:41
systems specifically block chains

00:00:38 --> 00:00:43
he also wrote a post last year with

00:00:40 --> 00:00:46
Tyler Cal Ian Mears and Ari Jules on

00:00:42 --> 00:00:49
quote on chain vote-buying and the rise

00:00:45 --> 00:00:50
of dark daos joining Phil in this

00:00:48 --> 00:00:53
hallway style Jam to discuss these

00:00:49 --> 00:00:54
topics is Aliya who was previously a

00:00:52 --> 00:00:56
software engineer and machine learning

00:00:53 --> 00:00:58
researcher at Google acts in Google

00:00:55 --> 00:01:00
brain he also gave a talk at ASIC since

00:00:57 --> 00:01:02
the summit on crypto and the evolution

00:00:59 --> 00:01:04
of trust which you can find on our

00:01:01 --> 00:01:07
website and he's a partner on a six in Z

00:01:03 --> 00:01:08
crypto speaking of please note that the

00:01:06 --> 00:01:11
content here is for informational

00:01:07 --> 00:01:13
purposes only should not be taken as

00:01:10 --> 00:01:16
legal business tax or investment advice

00:01:12 --> 00:01:18
or be used to evaluate any investment or

00:01:15 --> 00:01:20
security and is not directed at any

00:01:17 --> 00:01:22
investors or potential investors in any

00:01:19 --> 00:01:25
fund for more details please also see a

00:01:21 --> 00:01:27
6 & Z crypto comm slash disclosures the

00:01:24 --> 00:01:29
conversation that follows covers ways in

00:01:26 --> 00:01:32
which blockchain systems are different

00:01:28 --> 00:01:34
from real-world voting systems ways the

00:01:31 --> 00:01:36
system can be gamed and what that means

00:01:33 --> 00:01:38
for security as well as possible

00:01:35 --> 00:01:41
solutions and more importantly questions

00:01:37 --> 00:01:42
all blockchain system designers should

00:01:40 --> 00:01:46
think about instead of making naive

00:01:41 --> 00:01:48
assumptions but first Phil Annalee began

00:01:45 --> 00:01:50
by very briefly summing up the issues in

00:01:47 --> 00:01:52
real world elections and electronic

00:01:49 --> 00:01:55
voting systems the first voice you'll

00:01:51 --> 00:01:56
hear is those followed by oles so one

00:01:54 --> 00:01:58
challenge people have seen is

00:01:55 --> 00:02:00
traight-up hacking of course if there's

00:01:57 --> 00:02:02
electronic voting in use just tampering

00:01:59 --> 00:02:03
with the integrity of the election

00:02:01 --> 00:02:05
itself or the integrity of the

00:02:02 --> 00:02:06
registration another challenge that

00:02:04 --> 00:02:09
people have been worried about in the

00:02:05 --> 00:02:11
past is vote buying and selling so if I

00:02:08 --> 00:02:14
want you to vote a certain way maybe I

00:02:10 --> 00:02:14
directly bribe you to do so or maybe

00:02:13 --> 00:02:18
ven in the currency

00:02:13 --> 00:02:20
I can indirectly do it but it's very

00:02:17 --> 00:02:22
difficult to bribe someone in person and

00:02:19 --> 00:02:24
sort of understand how they're going to

00:02:21 --> 00:02:26
act in an election yeah you have this

00:02:23 --> 00:02:28
great example of how if the price of a

00:02:25 --> 00:02:30
vote is a beer and you take me out for a

00:02:27 --> 00:02:32
beer and say Ali I want you to vote for

00:02:29 --> 00:02:34
X candidate I could drink your beer and

00:02:31 --> 00:02:37
then go to the poll and like submit that

00:02:33 --> 00:02:39
whatever that ballot I want you have no

00:02:36 --> 00:02:42
real mechanism to enforce my vote and

00:02:38 --> 00:02:44
one way or another and you then point

00:02:41 --> 00:02:46
out how this is not so much the case

00:02:43 --> 00:02:47
when you go to the world of electronic

00:02:45 --> 00:02:49
voting yes the price of the vote is a

00:02:46 --> 00:02:51
beer is actually kind of realistic like

00:02:48 --> 00:02:53
vote buying in general is empirically

00:02:50 --> 00:02:55
pretty cheap for two reasons number one

00:02:52 --> 00:02:56
is actually the poorest and like least

00:02:54 --> 00:02:58
advantaged people that are the most

00:02:55 --> 00:03:00
inclined to sell their votes and number

00:02:57 --> 00:03:02
two is most people are disinterested in

00:02:59 --> 00:03:03
most elections so this actually makes

00:03:01 --> 00:03:05
vote-buying pretty cheap and an

00:03:02 --> 00:03:07
electronic voting this is a big problem

00:03:04 --> 00:03:09
because with many electronic voting

00:03:06 --> 00:03:11
protocols you can actually tell at the

00:03:08 --> 00:03:12
nd of the protocol how someone voted so

00:03:10 --> 00:03:14
it becomes much easier for me to bribe

00:03:11 --> 00:03:15
you because I can just say essentially

00:03:13 --> 00:03:16
I'll give you a beer if I check

00:03:14 --> 00:03:18
afterwards and you voted with my

00:03:15 --> 00:03:20
candidate rather than sort of trusting

00:03:17 --> 00:03:21
you to go in the polling booth and make

00:03:19 --> 00:03:23
the right decision where socially I

00:03:20 --> 00:03:25
can't follow you into that booth and

00:03:22 --> 00:03:27
look over your shoulder exactly how you

00:03:24 --> 00:03:28
point out how in the world of human

00:03:26 --> 00:03:30
voting there are three things that tend

00:03:27 --> 00:03:31
to be tend to make vote-buying a little

00:03:29 --> 00:03:32
bit more difficult and it's the

00:03:30 --> 00:03:34
inefficiencies of the human world that

00:03:31 --> 00:03:36
actually worked to your advantage here

00:03:33 --> 00:03:38
so the first is that in the human world

00:03:35 --> 00:03:40
it's a crime to buy votes and that

00:03:37 --> 00:03:42
itself kind of can serve as a deterrent

00:03:39 --> 00:03:44
which doesn't really exist so much in

00:03:41 --> 00:03:46
the jurisdiction list crypto world the

00:03:43 --> 00:03:48
second one was that ballots tend to be

00:03:45 --> 00:03:50
casted in secrecy so there's no way of

00:03:47 --> 00:03:52
me to produce a proof that I voted in

00:03:49 --> 00:03:53
one way or another which makes the

00:03:51 --> 00:03:55
buying of the vote difficult to enforce

00:03:52 --> 00:03:57
and the third one you mentioned is that

00:03:54 --> 00:03:58
if you tell me that you're going to pay

00:03:56 --> 00:04:00
me in the future for voting one

00:03:57 --> 00:04:02
direction or another I have a hard time

00:03:59 --> 00:04:04
trusting you that you actually in the

00:04:01 --> 00:04:06
nd pay me and so there's a sort of

00:04:03 --> 00:04:09
counterparty risk and so in the same way

00:04:05 --> 00:04:13
that sort of block chains mitigate trust

00:04:08 --> 00:04:15
and improve coordination for good

00:04:12 --> 00:04:18
purposes they can also be used to

00:04:14 --> 00:04:20
improve coordination for sort of

00:04:17 --> 00:04:21
malicious purposes in this case vote

00:04:19 --> 00:04:24
buyings is like a double-edged sword

00:04:20 --> 00:04:26
block chains can be used to increase the

00:04:23 --> 00:04:28
fficiency and effectiveness of bribery

00:04:25 --> 00:04:29
and vote-buying yes

00:04:27 --> 00:04:32
in the traditional world there's been a

00:04:28 --> 00:04:33
long line of academic research so very

00:04:31 --> 00:04:35
early on people said we want to vote

00:04:32 --> 00:04:37
lectronically it'll make tallying

00:04:34 --> 00:04:38
cheaper it can maybe use cryptography to

00:04:36 --> 00:04:40
increase the integrity of our elections

00:04:37 --> 00:04:42
o we don't rely on these pieces of

00:04:39 --> 00:04:44
papers sort of with this weird chain of

00:04:41 --> 00:04:46
human custody and things like that but

00:04:43 --> 00:04:47
early schemes sort of suffered from this

00:04:45 --> 00:04:49
receipt property where I could produce a

00:04:46 --> 00:04:50
proof that like here is the outcome and

00:04:48 --> 00:04:53
here is what I actually voted to lead to

00:04:50 --> 00:04:55
this outcome so there was a wide range

00:04:52 --> 00:04:56
of work early on on how to how to sort

00:04:54 --> 00:04:59
of solve this issue and create voting

00:04:55 --> 00:05:00
schemes that are receipt free which

00:04:58 --> 00:05:02
means that after the fact I cannot

00:04:59 --> 00:05:03
produce a receipt or a proof to tell you

00:05:01 --> 00:05:05
which way I voted and it's sort of

00:05:02 --> 00:05:08
equally likely from your perspective

00:05:04 --> 00:05:10
that I voted in any direction later work

00:05:07 --> 00:05:10
sort of said that this is not strong

00:05:09 --> 00:05:13
enough

00:05:09 --> 00:05:14
essentially the high level is if you're

00:05:12 --> 00:05:16
looking over my shoulder electronically

00:05:13 --> 00:05:17
like you have a virus on my computer or

00:05:15 --> 00:05:19
you're just physically looking over my

00:05:16 --> 00:05:21
shoulder at the time that I'm voting

00:05:18 --> 00:05:22
even receipt freedom is not enough

00:05:20 --> 00:05:24
because you might be able to see in real

00:05:21 --> 00:05:27
time the direction in which I'm voting

00:05:23 --> 00:05:28
and enforce my vote that way so that led

00:05:26 --> 00:05:30
to an even stronger property called

00:05:27 --> 00:05:32
coercion resistance which is that even

00:05:29 --> 00:05:34
if you compromised me for some period of

00:05:31 --> 00:05:36
time you still are not able to get me to

00:05:33 --> 00:05:38
vote a certain way in a way that you can

00:05:35 --> 00:05:40
trust yeah that's very interesting and

00:05:38 --> 00:05:43
so let's connect this to so the

00:05:39 --> 00:05:44
blockchain world these questions of

00:05:42 --> 00:05:46
electronic voting have existed for

00:05:43 --> 00:05:49
decades and predate the world of

00:05:45 --> 00:05:50
blockchains and crypto networks but now

00:05:48 --> 00:05:52
there's like a resurgence of research in

00:05:49 --> 00:05:54
this direction because so many

00:05:51 --> 00:05:56
blockchain encrypted network projects

00:05:53 --> 00:05:58
want to use Unchained voting for all

00:05:55 --> 00:05:59
sorts of purposes so I mean in

00:05:57 --> 00:06:01
blockchain networks in general you often

00:05:58 --> 00:06:03
eed to make decisions that's like part

00:06:00 --> 00:06:05
of the attractive point of block chains

00:06:02 --> 00:06:06
that it makes coordinating group

00:06:04 --> 00:06:09
decisions among actors who don't trust

00:06:05 --> 00:06:10
each other a little bit easier and to

00:06:08 --> 00:06:13
make these decisions sort of a natural

00:06:09 --> 00:06:14
response is just vote right that's

00:06:12 --> 00:06:16
omething you see in the real world is

00:06:13 --> 00:06:18
omething you see in corporations with

00:06:15 --> 00:06:19
stockholders it's something you've seen

00:06:17 --> 00:06:21
in boardrooms it's something you see in

00:06:18 --> 00:06:23
political elections and all sorts of

00:06:20 --> 00:06:24
other social systems so it's just I

00:06:22 --> 00:06:26
think a natural human tendency when

00:06:23 --> 00:06:28
asking sort of how to organize these

00:06:25 --> 00:06:30
things that voting is the only real

00:06:27 --> 00:06:32
clear shelling point answer that we can

00:06:29 --> 00:06:34
come up with so I think an important

00:06:31 --> 00:06:35
distinction on why this stuff really

00:06:33 --> 00:06:37
matters in the blockchain worlds is that

00:06:34 --> 00:06:39
he blockchain world and the real world

00:06:36 --> 00:06:40
on't operate in the same models if

00:06:38 --> 00:06:41
you're going to a boardroom with someone

00:06:39 --> 00:06:43
you're sitting

00:06:40 --> 00:06:44
next to the person right we're sort of

00:06:42 --> 00:06:46
operating in this model of social

00:06:43 --> 00:06:48
honesty where people can see each other

00:06:45 --> 00:06:49
face to face and you have shared

00:06:47 --> 00:06:50
interests in the company you sort of

00:06:48 --> 00:06:52
know their history at least somewhat

00:06:49 --> 00:06:54
whereas in blockchains you're operating

00:06:51 --> 00:06:57
in an economic sort of an economically

00:06:53 --> 00:06:58
rational game theoretic model so you

00:06:56 --> 00:07:00
need much stronger guarantees from your

00:06:57 --> 00:07:02
systems your systems need to be strong

00:06:59 --> 00:07:04
even in the presence of economically

00:07:01 --> 00:07:05
motivated adversaries and they need to

00:07:03 --> 00:07:07
be secure assuming people are rational

00:07:05 --> 00:07:09
rather than honest so we don't get to

00:07:06 --> 00:07:10
lean on this sort of honesty that we

00:07:08 --> 00:07:12
have in the real world in blockchains

00:07:09 --> 00:07:14
and I think that's where a lot of the

00:07:11 --> 00:07:16
mechanisms that people try to sort of

00:07:13 --> 00:07:17
poured over naively break down right and

00:07:15 --> 00:07:19
this is this is especially important

00:07:16 --> 00:07:21
because in most of the crypto networks

00:07:18 --> 00:07:25
that are actually interesting the model

00:07:20 --> 00:07:26
is one where anyone can participate and

00:07:24 --> 00:07:28
people refer to this as the

00:07:25 --> 00:07:30
permissionless setting and that anyone

00:07:27 --> 00:07:32
can connect to the network anyone can

00:07:29 --> 00:07:33
pass or participate in this in that in

00:07:31 --> 00:07:35
the decisions that are made through the

00:07:32 --> 00:07:37
governance processes of the crypto

00:07:35 --> 00:07:39
network which makes the environment the

00:07:36 --> 00:07:41
very hostile one because anyone anywhere

00:07:38 --> 00:07:43
can opt to participate and they have an

00:07:40 --> 00:07:45
economic incentive to do so because if

00:07:42 --> 00:07:47
they can game the system or if they can

00:07:44 --> 00:07:49
sort of subvert it in some way then they

00:07:46 --> 00:07:51
could potentially profit exactly when

00:07:48 --> 00:07:53
Satoshi released his white paper in oh

00:07:50 --> 00:07:54
nine and academics first started looking

00:07:52 --> 00:07:56
at Bitcoin and its success in its rise

00:07:53 --> 00:07:58
and asking like what is actually the

00:07:55 --> 00:07:59
interesting lesson to be learned here

00:07:57 --> 00:08:01
from what we've been doing for the last

00:07:58 --> 00:08:03
20 years there was a whole space of

00:08:00 --> 00:08:05
consensus protocols and Byzantine fault

00:08:02 --> 00:08:06
olerant protocols that came to

00:08:04 --> 00:08:09
consensus on something even in the

00:08:05 --> 00:08:11
presence of malicious users but what was

00:08:08 --> 00:08:12
really new about Bitcoin is that it let

00:08:10 --> 00:08:15
anyone join and leave the network at any

00:08:11 --> 00:08:16
time and these people didn't need to ask

00:08:14 --> 00:08:18
the people who are already in

00:08:15 --> 00:08:20
participating in the network whether

00:08:17 --> 00:08:21
they can join or not so in most

00:08:19 --> 00:08:23
consensus protocols you have a sort of

00:08:20 --> 00:08:25
quorum that's coming to decisions and if

00:08:22 --> 00:08:27
you want to join you need to ask the

00:08:24 --> 00:08:28
quorum to join because the quorum needs

00:08:26 --> 00:08:30
to agree on who's in the quorum so they

00:08:27 --> 00:08:32
need to sort of come to consensus on the

00:08:29 --> 00:08:33
fact that you're allowed to join whereas

00:08:31 --> 00:08:35
in something like Bitcoin if you want to

00:08:32 --> 00:08:36
start mining Bitcoin you just turn on

00:08:34 --> 00:08:38
your rig and as soon as you succeed

00:08:35 --> 00:08:40
people will accept that mathematically

00:08:37 --> 00:08:42
they don't need any sort of membership

00:08:39 --> 00:08:43
roof or anything like that what I think

00:08:41 --> 00:08:44
is relevant to voting is that

00:08:42 --> 00:08:46
fundamental to the permissionless model

00:08:43 --> 00:08:48
if you're gonna use cryptography which

00:08:45 --> 00:08:50
all block chains do is that if I can

00:08:47 --> 00:08:51
join and leave at any time I need to be

00:08:49 --> 00:08:54
able to like generate my own key and

00:08:50 --> 00:08:55
join at any time right I mean the uses

00:08:53 --> 00:08:57
of

00:08:54 --> 00:09:00
Unchained voting we're voting within

00:08:56 --> 00:09:02
fluctuating projects range all the way

00:08:59 --> 00:09:04
from setting the parameters like some

00:09:01 --> 00:09:06
parameter in the protocol that maybe

00:09:03 --> 00:09:08
something minor kind of like that

00:09:05 --> 00:09:11
he price of gas for example all the way

00:09:07 --> 00:09:13
over to sort of some intermediate level

00:09:10 --> 00:09:16
where people use governance and voting

00:09:12 --> 00:09:17
to decide how to allocate funds and then

00:09:15 --> 00:09:19
this goes all of the way over to

00:09:16 --> 00:09:22
actually deciding how to change the

00:09:18 --> 00:09:24
protocol itself so their projects that

00:09:21 --> 00:09:26
are sort of self amending and that

00:09:23 --> 00:09:29
hey use governance as a way of

00:09:25 --> 00:09:31
proposing updates to the protocol and

00:09:28 --> 00:09:32
then deciding on which updates should go

00:09:30 --> 00:09:35
through and which FDA updates should not

00:09:31 --> 00:09:37
and so that the stakes are high and that

00:09:34 --> 00:09:40
if you have a governance system that um

00:09:36 --> 00:09:43
can be gamed then all of these use cases

00:09:39 --> 00:09:44
may end up being vulnerable to that kind

00:09:42 --> 00:09:46
of attack one way of thinking of

00:09:43 --> 00:09:48
governance that are quite like that I

00:09:45 --> 00:09:50
think was proposed by vitalik is the

00:09:47 --> 00:09:52
coordination model of governance and

00:09:49 --> 00:09:55
that really all governor's decisions are

00:09:51 --> 00:09:57
in essence a way of coordinating

00:09:54 --> 00:10:00
collective action he talks about how

00:09:56 --> 00:10:01
there there are multiple layers to to

00:09:59 --> 00:10:03
governance right the bottom layer is

00:10:00 --> 00:10:05
like what's closest to the real and

00:10:02 --> 00:10:06
physical world yeah so maybe let's go

00:10:04 --> 00:10:08
bottom-up on everywhere you have voting

00:10:05 --> 00:10:10
in block chains at the very base level

00:10:07 --> 00:10:12
all consensus mechanisms are a vote so

00:10:09 --> 00:10:14
proof-of-work itself is a form of voting

00:10:11 --> 00:10:16
on which block is valid in which history

00:10:13 --> 00:10:18
is accepted by the network so you have

00:10:15 --> 00:10:19
voting at that layer then that half

00:10:17 --> 00:10:21
layer up like you said is this

00:10:18 --> 00:10:22
governance layer of how do block chains

00:10:20 --> 00:10:25
actually change their underlying code

00:10:21 --> 00:10:28
and respond to attacks or new situations

00:10:24 --> 00:10:30
or new technology or whatever it may be

00:10:27 --> 00:10:32
traditionally this has sort of gone with

00:10:29 --> 00:10:34
e fork model where you just sort of

00:10:31 --> 00:10:35
spin up new code and try to lobby

00:10:33 --> 00:10:37
everyone to just run this new system

00:10:34 --> 00:10:39
instead of the old one this model has

00:10:36 --> 00:10:42
een a lot of political strife a lot of

00:10:38 --> 00:10:44
inefficiency a lot of sort of lobbying

00:10:41 --> 00:10:47
and traditional politics like nastiness

00:10:43 --> 00:10:49
in the blockchain space you can look at

00:10:46 --> 00:10:51
he Bitcoin block size debate whether to

00:10:48 --> 00:10:54
change the 1 to a 2 which spawned like a

00:10:50 --> 00:10:56
year-long rift between the communities

00:10:53 --> 00:10:57
that ended up in like several summits

00:10:55 --> 00:10:59
and agreements and eventually a

00:10:56 --> 00:11:01
permanent split so some people look at

00:10:59 --> 00:11:02
hat and say maybe we can make this more

00:11:00 --> 00:11:04
fficient by just using voting and

00:11:01 --> 00:11:06
allowing the coin holders to express

00:11:03 --> 00:11:08
their preference and sort of just going

00:11:05 --> 00:11:09
with that and then another layer up from

00:11:07 --> 00:11:10
that you

00:11:08 --> 00:11:12
have the application layers like you

00:11:09 --> 00:11:13
were saying so these are your da OS

00:11:11 --> 00:11:15
these are your smart contracts that want

00:11:12 --> 00:11:17
o use voting to make decisions they

00:11:14 --> 00:11:19
could be for example on how to allocate

00:11:17 --> 00:11:21
funds they could be on how to change

00:11:18 --> 00:11:23
parameters within their own smart

00:11:20 --> 00:11:25
contract so you really have voting

00:11:22 --> 00:11:26
throughout the blockchain stack a lot of

00:11:24 --> 00:11:28
projects are using it and it has a very

00:11:25 --> 00:11:31
sort of wide impact as a general problem

00:11:27 --> 00:11:34
so one observation that comes out of all

00:11:30 --> 00:11:36
of this is that today's governance

00:11:33 --> 00:11:38
systems in sort of block chains and

00:11:35 --> 00:11:41
crypto networks the way that they exist

00:11:37 --> 00:11:43
oday will likely devolve into two tock

00:11:40 --> 00:11:45
recei simply because the mechanisms for

00:11:42 --> 00:11:47
vote-buying are so effective as you've

00:11:44 --> 00:11:49
described and some proponents of on

00:11:46 --> 00:11:50
chain governance will argue that pitaka

00:11:48 --> 00:11:52
see may not actually be that bad of a

00:11:49 --> 00:11:55
thing there may be a bad thing for

00:11:51 --> 00:11:57
democracies but not so much for for

00:11:54 --> 00:12:00
block chains in the blockchain world for

00:11:56 --> 00:12:03
a crypto network it's not so much a bad

00:11:59 --> 00:12:04
thing because it's in a sense incentive

00:12:02 --> 00:12:07
compatible at least at a surface level

00:12:03 --> 00:12:09
if they are voting using their coins for

00:12:06 --> 00:12:12
anyone upgrade to the protocol they will

00:12:08 --> 00:12:13
want to vote in the interest of other

00:12:11 --> 00:12:15
people who also hold the coins in the

00:12:12 --> 00:12:16
interest of the network because they

00:12:14 --> 00:12:19
own it and they have a stake in it

00:12:15 --> 00:12:21
and also they're their incentive to

00:12:18 --> 00:12:23
protect the network is proportional to

00:12:20 --> 00:12:24
how many coins they own so so like

00:12:22 --> 00:12:26
larger voters or stake holders who have

00:12:23 --> 00:12:29
more coins in the network having an even

00:12:25 --> 00:12:30
greater incentive to to protect the

00:12:28 --> 00:12:33
network what are your thoughts are there

00:12:29 --> 00:12:34
so I think every blockchain project

00:12:32 --> 00:12:36
should take a step back and ask do we

00:12:33 --> 00:12:37
want photography do we want vote buying

00:12:35 --> 00:12:39
in our system and what are the

00:12:36 --> 00:12:41
consequences of that for many of them

00:12:38 --> 00:12:43
aybe it's more acceptable than for

00:12:40 --> 00:12:46
others for example if you have like a

00:12:42 --> 00:12:47
small closed sort of contract that has a

00:12:45 --> 00:12:49
few shareholders something like an

00:12:46 --> 00:12:51
investment firm and you have like one

00:12:48 --> 00:12:52
guy who decides whether people get in or

00:12:50 --> 00:12:54
not maybe you're not so concerned about

00:12:51 --> 00:12:57
vote-buying in that kind of a scheme or

00:12:53 --> 00:12:59
if you have even like some sort of

00:12:56 --> 00:13:01
closed setting where you can you can say

00:12:58 --> 00:13:02
things about the participants maybe

00:13:00 --> 00:13:04
you're not so concerned about

00:13:01 --> 00:13:05
vote-buying in a wider system whether

00:13:03 --> 00:13:07
let's say the whole world is

00:13:04 --> 00:13:08
participating in it eventually I think

00:13:06 --> 00:13:10
the fundamental point is that most

00:13:07 --> 00:13:12
people are disinterested in most votes

00:13:09 --> 00:13:14
and the utility they get from the system

00:13:11 --> 00:13:16
is not directly sort of correlated with

00:13:14 --> 00:13:18
whether they vote a or B on this given

00:13:15 --> 00:13:19
issue nonetheless there are certain

00:13:17 --> 00:13:21
groups of people who are extremely

00:13:18 --> 00:13:22
interested in whether people vote a or B

00:13:20 --> 00:13:24
on a certain issue

00:13:21 --> 00:13:26
and these are often pretty money groups

00:13:23 --> 00:13:28
o in this way that kind of governance

00:13:25 --> 00:13:30
does sort of degenerate into plutocracy

00:13:27 --> 00:13:32
and if that's acceptable for your system

00:13:29 --> 00:13:33
that's fine I think for many systems

00:13:31 --> 00:13:35
it's not you need to care about these

00:13:32 --> 00:13:37
attacks and you need to reason about why

00:13:34 --> 00:13:39
our system is secure against this and

00:13:36 --> 00:13:40
why your system actually doesn't

00:13:38 --> 00:13:42
degenerate chip gluto cracy people have

00:13:39 --> 00:13:44
tried to get around this in two ways in

00:13:41 --> 00:13:45
blockchains the first one is they add

00:13:43 --> 00:13:47
some sort of identity so they have a

00:13:44 --> 00:13:49
third party service that like you send

00:13:46 --> 00:13:50
your cell phone number or something like

00:13:48 --> 00:13:52
that and it sends you a text and sort of

00:13:49 --> 00:13:53
anti Sybil's you that way and then

00:13:51 --> 00:13:56
you're able to participate in a vote

00:13:53 --> 00:13:59
yeah so at least you can you can sort of

00:13:55 --> 00:14:01
attach some entity to the person and and

00:13:58 --> 00:14:03
then count votes per entity rather than

00:14:00 --> 00:14:05
per coin this actually still degenerates

00:14:02 --> 00:14:06
into plutocracy because of the the way

00:14:04 --> 00:14:08
the dart dhow works because as long as

00:14:05 --> 00:14:10
these identities are keys that people

00:14:07 --> 00:14:12
can sort of generate at any time they

00:14:09 --> 00:14:14
can be bought and sold and using the

00:14:11 --> 00:14:16
Darktown model and you can essentially

00:14:13 --> 00:14:17
sell people like the right to your

00:14:15 --> 00:14:19
identity or you can sell people the

00:14:16 --> 00:14:20
right to a certain vote using your

00:14:18 --> 00:14:23
identity or even more specific things

00:14:19 --> 00:14:25
than that so that kind of doesn't work

00:14:22 --> 00:14:26
unless you have a strong social

00:14:24 --> 00:14:29
protection where like the person has to

00:14:25 --> 00:14:30
come in very often and the the network

00:14:28 --> 00:14:32
sort of authenticates that they're human

00:14:29 --> 00:14:34
or something like that that becomes very

00:14:31 --> 00:14:36
complicated and steps much more into the

00:14:33 --> 00:14:37
messy world of real world elections and

00:14:35 --> 00:14:40
maybe doesn't work for a global

00:14:36 --> 00:14:41
blockchain community mm-hmm another way

00:14:39 --> 00:14:43
people have tried to get around it which

00:14:40 --> 00:14:46
also kind of requires identity is this

00:14:42 --> 00:14:47
new line of work by Vitalik Glenn wale

00:14:45 --> 00:14:49
and a few other people which is

00:14:46 --> 00:14:51
quadratic voting where you actually

00:14:48 --> 00:14:53
allow vote buying so you allow people to

00:14:50 --> 00:14:55
buy boats but only at an exponentially

00:14:52 --> 00:14:57
increasing price and this may who kind

00:14:54 --> 00:14:59
of look like plutocracy because you're

00:14:56 --> 00:15:00
allowing people to buy votes but if you

00:14:58 --> 00:15:01
actually do the math on the incentives

00:14:59 --> 00:15:03
it turns out that through this

00:15:00 --> 00:15:05
increasing function essentially people

00:15:02 --> 00:15:07
will express their true preferences in

00:15:04 --> 00:15:09
the end and one rich person who really

00:15:06 --> 00:15:11
cares about a versus B won't be able to

00:15:08 --> 00:15:14
sort of overwhelm a disinterested

00:15:10 --> 00:15:15
majority that weakly prefers a and maybe

00:15:13 --> 00:15:18
ach don't have as many funds as that

00:15:14 --> 00:15:20
one individual so this fixes some known

00:15:17 --> 00:15:22
pathologies in in real world voting

00:15:19 --> 00:15:24
systems and also blockchain voting

00:15:21 --> 00:15:25
systems but it does require identity and

00:15:23 --> 00:15:27
it's extremely vulnerable to

00:15:24 --> 00:15:29
manipulation if this one rich person can

00:15:26 --> 00:15:31
pretend that there are two rich people

00:15:28 --> 00:15:32
or something like that the gig is sort

00:15:30 --> 00:15:34
of up and that's what these new

00:15:31 --> 00:15:36
coordination mechanisms allow yes I

00:15:33 --> 00:15:38
think I think this dependence

00:15:35 --> 00:15:40
identity that you are pointing out is

00:15:37 --> 00:15:41
very important because as you pointed

00:15:39 --> 00:15:43
out anyone can pretend to be more than

00:15:40 --> 00:15:45
one person they can generate ten

00:15:42 --> 00:15:47
different sets of key pairs or hundreds

00:15:44 --> 00:15:48
of sets of key pairs and pretend to be

00:15:46 --> 00:15:50
hundreds of people yeah that's the only

00:15:47 --> 00:15:52
thing you can do is wait by coins

00:15:49 --> 00:15:54
basically exactly in that world you end

00:15:51 --> 00:15:56
up with unfair representation of you're

00:15:53 --> 00:15:58
trying to assign a single vote to to a

00:15:55 --> 00:16:01
key pair so proponents of on chained

00:15:57 --> 00:16:04
coin holder governance which means that

00:16:00 --> 00:16:06
one coin gives you one vote will argue

00:16:03 --> 00:16:08
it's at the very least civil resistant

00:16:05 --> 00:16:11
which means that if you have like ten

00:16:07 --> 00:16:13
million coins staked on one particular

00:16:10 --> 00:16:15
vote they're basically used to vote for

00:16:12 --> 00:16:17
one particular outcome it's very hard to

00:16:14 --> 00:16:19
argue that those ten million coins come

00:16:16 --> 00:16:21
from trolls are trying to sway the

00:16:18 --> 00:16:23
lection because there's real weight and

00:16:20 --> 00:16:25
real capital at stake than one in one

00:16:22 --> 00:16:27
direction or another whereas if you're

00:16:24 --> 00:16:29
not using coin voting then that becomes

00:16:26 --> 00:16:32
more possible and so if you have a

00:16:28 --> 00:16:35
mechanism for identity wear and you

00:16:31 --> 00:16:37
securely associate one human to one vote

00:16:34 --> 00:16:38
or something like that then more

00:16:36 --> 00:16:41
sophisticated voting scheme is become

00:16:37 --> 00:16:43
possible I think today because we would

00:16:40 --> 00:16:45
lack we lack that kind of a mechanism

00:16:42 --> 00:16:47
people end up gravitating towards this

00:16:44 --> 00:16:51
imple and somewhat perhaps somewhat

00:16:46 --> 00:16:52
naive one coin one vote model which is

00:16:50 --> 00:16:55
vulnerable to this vote buying attack

00:16:51 --> 00:16:58
yeah and this opens up a range of other

00:16:54 --> 00:17:00
issues so one problem that people have

00:16:57 --> 00:17:01
when they analyze blockchain systems and

00:16:59 --> 00:17:03
they sort of design these mechanisms is

00:17:00 --> 00:17:05
that they look at their mechanism and

00:17:02 --> 00:17:06
reason about its security properties but

00:17:04 --> 00:17:07
hey do that in isolation and an

00:17:05 --> 00:17:09
important point is that none of these

00:17:06 --> 00:17:12
systems really exist in a vacuum right

00:17:08 --> 00:17:14
so take a look at any sort of blockchain

00:17:11 --> 00:17:16
that uses coin holder voting to decide

00:17:13 --> 00:17:18
the the outcome of its consensus rules

00:17:15 --> 00:17:20
and there's at least two such block

00:17:17 --> 00:17:22
chains that are sort of using this model

00:17:19 --> 00:17:24
if these two very large projects are

00:17:21 --> 00:17:25
approximately the same size or one is a

00:17:23 --> 00:17:27
little bit bigger than the other one or

00:17:24 --> 00:17:29
one is twice as big as the other one or

00:17:26 --> 00:17:32
something like that it's in the economic

00:17:28 --> 00:17:34
interests of everyone who holds coins in

00:17:31 --> 00:17:36
the bigger project to buy up coins on

00:17:33 --> 00:17:37
the smaller project and influence votes

00:17:35 --> 00:17:39
in ways that are sort of counter

00:17:36 --> 00:17:41
competitive and maybe even if they can't

00:17:38 --> 00:17:43
buy up enough of a block to influence

00:17:40 --> 00:17:45
votes they can so chaos and and

00:17:42 --> 00:17:47
confusion and things like that

00:17:44 --> 00:17:49
so while one of these systems you may

00:17:46 --> 00:17:50
say in isolation like okay the coin

00:17:48 --> 00:17:51
holders in

00:17:49 --> 00:17:53
wrists are represented by this

00:17:50 --> 00:17:54
plutocracy that doesn't really work when

00:17:52 --> 00:17:56
you have a whole world around it that's

00:17:53 --> 00:17:58
full of money that can frictionlessly

00:17:55 --> 00:18:00
enter and exit the system at any time

00:17:57 --> 00:18:02
there's no guarantee whatsoever that the

00:17:59 --> 00:18:04
people who are economically in right the

00:18:01 --> 00:18:05
second have an interest in that system

00:18:03 --> 00:18:07
especially when there are much bigger

00:18:04 --> 00:18:08
systems that are competing with it so I

00:18:06 --> 00:18:10
think that's a very important point that

00:18:07 --> 00:18:11
people overlook right and again we

00:18:09 --> 00:18:13
mentioned that there's this sort of

00:18:10 --> 00:18:15
stack of voting even at the consensus

00:18:12 --> 00:18:17
later that has implications on the whole

00:18:14 --> 00:18:19
stack so if you have a fork that's like

00:18:16 --> 00:18:22
10% of the size of a project and this

00:18:18 --> 00:18:24
fork could potentially impact the price

00:18:21 --> 00:18:25
of the larger project it's absolutely in

00:18:23 --> 00:18:27
the interest of that larger project to

00:18:24 --> 00:18:28
launch attacks on that base layer

00:18:26 --> 00:18:30
proof-of-work vote and do things like

00:18:27 --> 00:18:32
censorship use some small percentage of

00:18:29 --> 00:18:34
their hash power to do 51% attacks or

00:18:31 --> 00:18:36
denial of service or whatever they need

00:18:33 --> 00:18:38
to do to make sure that that network

00:18:35 --> 00:18:40
goes down in price and that attack might

00:18:37 --> 00:18:41
even be profitable especially if there

00:18:39 --> 00:18:43
are mechanisms to short that sort of

00:18:40 --> 00:18:45
smaller project yeah that's a very good

00:18:42 --> 00:18:48
point I think most proponents of coin

00:18:45 --> 00:18:51
holder voting would argue that it is

00:18:47 --> 00:18:53
just not in your interest to sell your

00:18:50 --> 00:18:55
vote because you'd be damaging the value

00:18:52 --> 00:18:57
of the asset that you hold you hold a

00:18:54 --> 00:18:58
coin and if you sell if you sell the

00:18:56 --> 00:19:00
votes associated with that coin and that

00:18:57 --> 00:19:02
might reduce the value of the coin in

00:18:59 --> 00:19:04
some way that sort of results in a net

00:19:01 --> 00:19:07
loss for you but that analysis happens

00:19:03 --> 00:19:09
entirely in a vacuum it happens sort of

00:19:06 --> 00:19:11
assuming that there aren't any kind of

00:19:08 --> 00:19:13
external mechanisms via which you could

00:19:10 --> 00:19:14
profit from the loss of value of this

00:19:12 --> 00:19:16
particular coin like for example what

00:19:13 --> 00:19:18
you're mentioning competition between

00:19:15 --> 00:19:20
block chains if I'm a stake holder a

00:19:17 --> 00:19:21
much larger stake holder in a competing

00:19:19 --> 00:19:23
Network then I might have a strong

00:19:20 --> 00:19:25
interest in reducing the value of this

00:19:22 --> 00:19:26
particular coin and that that's

00:19:24 --> 00:19:28
associated with this one competing

00:19:25 --> 00:19:31
crypto network because it may result in

00:19:27 --> 00:19:33
a larger profit outside of the system is

00:19:30 --> 00:19:35
I think yeah and the incentive

00:19:32 --> 00:19:36
structures that are built in aggregate

00:19:34 --> 00:19:39
nd to be far more complex and they

00:19:36 --> 00:19:41
kind of interact in ways that tend

00:19:38 --> 00:19:43
to be difficult to analyze and could

00:19:40 --> 00:19:45
result in complexity that could

00:19:42 --> 00:19:47
ultimately result in attacks and you

00:19:44 --> 00:19:49
post you talk a little bit about what

00:19:46 --> 00:19:51
you referred to as the Dark Dao which

00:19:48 --> 00:19:53
sounds like a fairly dark picture for

00:19:50 --> 00:19:54
what could end up being the case in your

00:19:52 --> 00:19:56
view what is the worst-case scenario

00:19:53 --> 00:19:58
here how could how could this unfold in

00:19:55 --> 00:19:59
a bad way yeah so there's a lot of

00:19:57 --> 00:20:01
different variants of the dark Dao which

00:19:58 --> 00:20:02
ave different assumptions in the post

00:20:00 --> 00:20:03
some of them require trusted hardware

00:20:01 --> 00:20:05
some of them don't

00:20:02 --> 00:20:07
but the ultimate point of the dark Dao

00:20:04 --> 00:20:09
is that it's a private smart contract

00:20:06 --> 00:20:11
for attacking a vote for vote buying

00:20:08 --> 00:20:13
that essentially hides from the rest of

00:20:10 --> 00:20:14
the world how much money is committed to

00:20:12 --> 00:20:16
this contract who is participating in

00:20:13 --> 00:20:19
the vote buying contract and sort of how

00:20:15 --> 00:20:21
far along the contract is but sort of is

00:20:18 --> 00:20:22
a way to frictionlessly and

00:20:20 --> 00:20:24
permissionless li form a vote buying

00:20:21 --> 00:20:26
cartel for a particular vote and this

00:20:23 --> 00:20:27
could be sort of a funding pool anyone

00:20:25 --> 00:20:29
can come contribute money to it so if

00:20:26 --> 00:20:30
it's outcome specific it could be funded

00:20:28 --> 00:20:32
by anyone who's interested in such an

00:20:29 --> 00:20:34
outcome whether it be other blockchain

00:20:31 --> 00:20:37
projects users on the system outside

00:20:33 --> 00:20:39
groups whatever it may be so once this

00:20:36 --> 00:20:40
dark Dao is funded what it does is sort

00:20:38 --> 00:20:42
of offer up vote-buying

00:20:39 --> 00:20:44
to people in the system and if people in

00:20:41 --> 00:20:46
the system come take this vote buying

00:20:43 --> 00:20:47
they retain access to their funds they

00:20:45 --> 00:20:49
keep using their wallet as they normally

00:20:46 --> 00:20:51
do but they're sort of shackled by the

00:20:48 --> 00:20:52
dark Dao that for this particular vote

00:20:50 --> 00:20:54
they can only vote in this certain way

00:20:51 --> 00:20:56
and this is trustless because both sides

00:20:53 --> 00:20:59
have some guarantees so the vote buyers

00:20:55 --> 00:21:01
or vote or a vote buying network or

00:20:58 --> 00:21:03
whatever it may be has guarantees that

00:21:00 --> 00:21:05
potentially no one will find out who's

00:21:02 --> 00:21:07
being bought or sold and how much money

00:21:04 --> 00:21:08
is pledged to it they're guaranteed that

00:21:06 --> 00:21:10
if they pay for a vote this vote will

00:21:07 --> 00:21:12
actually be executed in the protocol

00:21:09 --> 00:21:13
even if the protocol does have the

00:21:11 --> 00:21:15
classic properties of coercion

00:21:12 --> 00:21:17
resistance another sort of sidebar of

00:21:14 --> 00:21:19
the dark Dao is that trusted hardware

00:21:16 --> 00:21:21
which is a new technology sort of breaks

00:21:18 --> 00:21:23
all classical collision resistance

00:21:20 --> 00:21:25
voting schemes in the blockchain world

00:21:22 --> 00:21:26
and in the regular election world so

00:21:24 --> 00:21:28
nce they launch this attack and they

00:21:25 --> 00:21:29
start buying and selling people's votes

00:21:27 --> 00:21:32
they have a number of options available

00:21:28 --> 00:21:33
to them one cool thing you can do is you

00:21:31 --> 00:21:35
can tell everyone in the cartel when a

00:21:33 --> 00:21:39
certain threshold is reached let's say

00:21:34 --> 00:21:41
when like 70% of the or 10% of the votes

00:21:38 --> 00:21:42
are locked into this Dao and you can do

00:21:40 --> 00:21:44
this in a way that's deniable such that

00:21:41 --> 00:21:47
everyone inside the cartel can check yes

00:21:43 --> 00:21:49
70% is reached but no one outside the

00:21:46 --> 00:21:51
cartel has any way of knowing that this

00:21:48 --> 00:21:53
actually reached so you can enforce

00:21:50 --> 00:21:54
an information asymmetry that allows for

00:21:52 --> 00:21:56
profiting through things like shorting

00:21:53 --> 00:21:57
you can also enforce stronger

00:21:55 --> 00:21:59
information asymmetries so not even

00:21:56 --> 00:22:01
allow the the people who are being

00:21:58 --> 00:22:04
bribed to know at any time how much

00:22:00 --> 00:22:07
money is in it or even potentially

00:22:03 --> 00:22:09
whether they voted at all if the scheme

00:22:06 --> 00:22:11
is receipt free so it's a very very

00:22:08 --> 00:22:12
powerful class of attack you can spin it

00:22:10 --> 00:22:14
up however you want it allows people to

00:22:11 --> 00:22:16
pool their money and buy votes in a way

00:22:13 --> 00:22:17
that they can keep any part of that

00:22:15 --> 00:22:19
secret and

00:22:16 --> 00:22:20
a group of people that they want and the

00:22:18 --> 00:22:22
outside system has no way of knowing

00:22:19 --> 00:22:24
sort of how far along the attack is in

00:22:21 --> 00:22:25
some ways it also represents a credible

00:22:23 --> 00:22:27
threat if I were to launch a dart now I

00:22:24 --> 00:22:29
might not even need to necessarily have

00:22:26 --> 00:22:31
people participate in it just its

00:22:28 --> 00:22:32
existence might be enough to shake

00:22:30 --> 00:22:35
people's confidence in that underlying

00:22:31 --> 00:22:37
vote so when we published that blog post

00:22:34 --> 00:22:38
we've had a lot of reactions from voting

00:22:36 --> 00:22:40
projects and other people in the space

00:22:37 --> 00:22:42
and I think there is a good question of

00:22:39 --> 00:22:43
why haven't we seen this already but at

00:22:41 --> 00:22:45
he end of the day these systems are

00:22:42 --> 00:22:46
tiny right block chains today are a drop

00:22:44 --> 00:22:49
in the bucket of like the world

00:22:45 --> 00:22:51
financial system and the incentives just

00:22:48 --> 00:22:52
aren't there yet but if we are to use

00:22:50 --> 00:22:54
these technologies and if we are to

00:22:51 --> 00:22:56
scale things I think these are

00:22:53 --> 00:22:58
absolutely realistic scenarios and

00:22:55 --> 00:23:00
potentially nightmare scenarios yeah

00:22:57 --> 00:23:02
that sounds insane and that's definitely

00:22:59 --> 00:23:04
an outcome that is to be prevented and I

00:23:01 --> 00:23:06
think I mean this matters because if we

00:23:03 --> 00:23:08
just take a step back and think about

00:23:05 --> 00:23:09
why is governance so topical and so

00:23:07 --> 00:23:12
important in the world of crypto and

00:23:08 --> 00:23:15
blockchains today it is because so much

00:23:11 --> 00:23:16
of what drives the space forward and

00:23:14 --> 00:23:19
what what is sort of the underlying

00:23:15 --> 00:23:22
philosophical motivation is that power

00:23:18 --> 00:23:24
over these networks is decentralized and

00:23:21 --> 00:23:25
so the centralization here refers to a

00:23:23 --> 00:23:26
bunch of different things at the same

00:23:24 --> 00:23:28
time I people talk about

00:23:25 --> 00:23:30
decentralization as it refers to sort of

00:23:27 --> 00:23:33
consensus like who gets - who gets to

00:23:29 --> 00:23:35
decide like who modifies the underlying

00:23:32 --> 00:23:36
ledger but also the centralization

00:23:34 --> 00:23:39
applies to who gets to modify the code

00:23:35 --> 00:23:40
these networks are decentralized in that

00:23:38 --> 00:23:42
hey're kind of like self-governing

00:23:39 --> 00:23:43
organizations and they don't they don't

00:23:41 --> 00:23:46
have at least philosophically any

00:23:42 --> 00:23:48
central points of control where any one

00:23:45 --> 00:23:50
individual can decide how to how to sort

00:23:47 --> 00:23:53
of modify the code or make it work in it

00:23:49 --> 00:23:55
in any particular way and so all of

00:23:52 --> 00:23:57
these initiatives to try to build in

00:23:54 --> 00:23:59
governance into the protocols are an

00:23:56 --> 00:24:01
effort to try to sort of decentralized

00:23:58 --> 00:24:03
even that aspect and to try to make it

00:24:00 --> 00:24:05
so that the code itself can evolve in a

00:24:02 --> 00:24:07
way that is still community driven and

00:24:04 --> 00:24:09
not and now kind of centrally controlled

00:24:06 --> 00:24:11
by the by the core developer developer

00:24:08 --> 00:24:12
team yet I think the promise of a lot of

00:24:10 --> 00:24:14
these systems is sort of this crypto

00:24:11 --> 00:24:16
economic security right you have this

00:24:13 --> 00:24:17
mechanism and because the mechanism

00:24:15 --> 00:24:18
works and the incentives are set up

00:24:16 --> 00:24:20
right everyone comes together

00:24:17 --> 00:24:23
harmoniously and produces something that

00:24:19 --> 00:24:25
is a bulletproof and very strong because

00:24:22 --> 00:24:26
of the incentives in the mechanism an

00:24:24 --> 00:24:29
example of this is Bitcoin because if

00:24:25 --> 00:24:30
the money paid to miners people are

00:24:28 --> 00:24:31
burning a small country's worth of

00:24:29 --> 00:24:33
electricity

00:24:30 --> 00:24:34
to try to secure this transaction ledger

00:24:32 --> 00:24:36
that has actually worked fantastically

00:24:33 --> 00:24:38
so far so when you design these systems

00:24:35 --> 00:24:39
there needs to be some sort of

00:24:37 --> 00:24:41
underlying mechanism and some sort of

00:24:38 --> 00:24:43
reasoning about the security of that

00:24:40 --> 00:24:44
mechanism but what these these

00:24:42 --> 00:24:46
technologies like the dark Dao and

00:24:43 --> 00:24:48
private smart contracts allow you to do

00:24:45 --> 00:24:51
is use external money to sort of alter

00:24:47 --> 00:24:52
the incentives inside that game and

00:24:50 --> 00:24:54
alter the security properties that

00:24:51 --> 00:24:57
people are actually getting from their

00:24:53 --> 00:25:00
project in a permissionless and and

00:24:56 --> 00:25:02
trustless way so this does sort of speak

00:24:59 --> 00:25:05
to the fundamental coordination of

00:25:01 --> 00:25:06
blockchains right like how do we design

00:25:04 --> 00:25:09
these games to coordinate people to make

00:25:05 --> 00:25:11
choices in a way that's not controlled

00:25:08 --> 00:25:13
by one particular individual as you said

00:25:10 --> 00:25:15
or some social trust hierarchy but by

00:25:12 --> 00:25:17
the economics of the system itself and

00:25:14 --> 00:25:19
in that model if you can't be secure

00:25:16 --> 00:25:21
against economic attacks then you're

00:25:18 --> 00:25:23
sort of building something that doesn't

00:25:20 --> 00:25:25
make much sense in my opinion and so I

00:25:22 --> 00:25:27
guess that's a lot of what my work is

00:25:24 --> 00:25:30
looking at right what do you think are

00:25:26 --> 00:25:32
the implications of vote-buying on proof

00:25:29 --> 00:25:33
stake so proof of work is where

00:25:31 --> 00:25:35
people use hardware to sort of solve

00:25:32 --> 00:25:37
hard problems and if they solve the

00:25:34 --> 00:25:39
problem then they can post a block to

00:25:36 --> 00:25:40
the network rather than using this

00:25:38 --> 00:25:42
mechanism proof of stake allows people

00:25:39 --> 00:25:44
to vote using their coins so they lock

00:25:41 --> 00:25:46
up their coins for some long period of

00:25:43 --> 00:25:47
time and they can use any number of

00:25:45 --> 00:25:49
protocols to do this

00:25:46 --> 00:25:51
the core idea here is that instead of

00:25:48 --> 00:25:53
proof of work where the economic

00:25:50 --> 00:25:55
security you get is because people are

00:25:52 --> 00:25:56
doing this useless computation problem

00:25:54 --> 00:25:58
that is sort of burning money and

00:25:55 --> 00:26:01
there's some cost associated with doing

00:25:57 --> 00:26:02
this is that people are paying liquidity

00:26:00 --> 00:26:04
costs to lock up these coins for a long

00:26:01 --> 00:26:06
period of time and they're also

00:26:03 --> 00:26:07
taking risks that these they may incur

00:26:05 --> 00:26:10
penalties if they misbehave in the

00:26:06 --> 00:26:11
protocol and with these liquidity costs

00:26:09 --> 00:26:13
they're taking like massive volatility

00:26:10 --> 00:26:14
risks and crypto currencies right so if

00:26:12 --> 00:26:16
they do something that crashes the

00:26:13 --> 00:26:17
system well their coins are locked up

00:26:15 --> 00:26:19
and they're going to lose money if the

00:26:16 --> 00:26:21
network decides they misbehaved well

00:26:18 --> 00:26:22
they can get rid of all their coins and

00:26:20 --> 00:26:24
they're gonna lose money so it's this

00:26:21 --> 00:26:25
idea of bootstrapping the economic

00:26:23 --> 00:26:27
security of the network from the coins

00:26:24 --> 00:26:29
rather than from some external hardware

00:26:26 --> 00:26:30
source obviously that comes with a lot

00:26:28 --> 00:26:32
of trade-offs that are maybe beyond the

00:26:29 --> 00:26:33
scope of this discussion but at the end

00:26:31 --> 00:26:35
of the day it's also a voting protocol

00:26:32 --> 00:26:36
you have these people with coins they

00:26:34 --> 00:26:38
decide how to vote so where does

00:26:35 --> 00:26:40
vote-buying come in here well obviously

00:26:37 --> 00:26:42
this proof of stake protocol has an

00:26:39 --> 00:26:44
outcome it decides what history of the

00:26:41 --> 00:26:44
network is valid and this outcome has

00:26:43 --> 00:26:46
also

00:26:43 --> 00:26:49
f economic implications it decides who

00:26:45 --> 00:26:51
gets to send money to who it decides who

00:26:48 --> 00:26:53
is censored in the system it decides

00:26:50 --> 00:26:54
what order transactions happen in

00:26:52 --> 00:26:56
canonically according to everyone in the

00:26:53 --> 00:26:58
system and with that comes a lot of

00:26:55 --> 00:27:01
profit opportunity so I can potentially

00:26:57 --> 00:27:02
profit by censoring you or I can profit

00:27:00 --> 00:27:04
by putting my transactions in front of

00:27:01 --> 00:27:06
yours when you want to execute an order

00:27:03 --> 00:27:07
on a decentralized exchange or I can

00:27:05 --> 00:27:09
profit in sort of any number of

00:27:06 --> 00:27:11
different ways by manipulating this vote

00:27:08 --> 00:27:12
so what you can do with the dark Dao is

00:27:10 --> 00:27:15
the start of staking pool where I say

00:27:11 --> 00:27:16
like you know let me do my algorithmic

00:27:14 --> 00:27:18
trading and decide what order of

00:27:15 --> 00:27:20
transactions makes me the most money you

00:27:17 --> 00:27:22
don't necessarily care if someone who's

00:27:19 --> 00:27:24
doing a transaction on AD X gets front

00:27:21 --> 00:27:24
run and loses like five dollars right so

00:27:23 --> 00:27:26
you say okay

00:27:23 --> 00:27:28
I'll happily participate in this it'll

00:27:25 --> 00:27:29
still keep the value of my coins high

00:27:27 --> 00:27:31
especially if I don't have a lot of

00:27:28 --> 00:27:33
coins and you're paying me like twice as

00:27:30 --> 00:27:34
much as any other staking pool so it

00:27:32 --> 00:27:36
sort of opens these coordination

00:27:33 --> 00:27:37
mechanisms for attacks on the underlying

00:27:35 --> 00:27:39
transaction history and the underlying

00:27:36 --> 00:27:41
consensus do you think that there's a

00:27:38 --> 00:27:44
way of making a proof of stake network

00:27:40 --> 00:27:46
secure it depends on your definition of

00:27:43 --> 00:27:48
secure I think it really depends on the

00:27:45 --> 00:27:50
type of security you want I guess yeah

00:27:47 --> 00:27:51
and this this all gets to the user the

00:27:49 --> 00:27:53
broader question of like economic

00:27:50 --> 00:27:55
security of a blockchain and in the case

00:27:52 --> 00:27:57
of proof of stake the resources used to

00:27:54 --> 00:27:58
secure the blockchain is internal to the

00:27:56 --> 00:28:00
network in the case of proof of work

00:27:57 --> 00:28:02
it's sort of a electricity and like

00:28:00 --> 00:28:04
hardware that's used external to the

00:28:01 --> 00:28:06
network to secure the ledger and there

00:28:03 --> 00:28:08
are many other kind of approaches like

00:28:05 --> 00:28:10
people people are experimenting with

00:28:07 --> 00:28:12
doing useful work instead of burning

00:28:09 --> 00:28:14
electricity uselessly as you do in proof

00:28:11 --> 00:28:16
work people try to build a sort of

00:28:13 --> 00:28:18
proof of like space or proof of

00:28:15 --> 00:28:22
space-time protocols where like for

00:28:18 --> 00:28:23
example you're able to store files and

00:28:21 --> 00:28:26
storage becomes the resource that people

00:28:22 --> 00:28:28
use to then secure the network what do

00:28:25 --> 00:28:30
you think of that kind of approach so so

00:28:27 --> 00:28:31
fundamentally tuvo buying it doesn't

00:28:29 --> 00:28:32
actually matter what resource you're

00:28:30 --> 00:28:34
using vote-buying works for a

00:28:31 --> 00:28:36
proof-of-work - right so I could use

00:28:33 --> 00:28:37
dart Dao like technology to start the

00:28:35 --> 00:28:39
mining pool and the properties of the

00:28:36 --> 00:28:40
mining pool would be you come you mine

00:28:38 --> 00:28:42
here I'll pay you more than we're making

00:28:39 --> 00:28:43
because I have some external incentive

00:28:41 --> 00:28:45
to censor someone or reorder

00:28:42 --> 00:28:47
transactions or whatever and then you

00:28:44 --> 00:28:49
get the dark Dao privacy properties if

00:28:46 --> 00:28:50
no one knows how much hash power is

00:28:48 --> 00:28:53
participating in this pool or who's

00:28:49 --> 00:28:54
getting paid or things like that so so

00:28:52 --> 00:28:56
these certainly also apply to systems

00:28:53 --> 00:28:58
that use things like files and other

00:28:55 --> 00:29:00
useful work

00:28:57 --> 00:29:01
produce I think there's a whole class of

00:28:59 --> 00:29:03
other questions on the economic security

00:29:00 --> 00:29:05
of those systems so you have to be

00:29:02 --> 00:29:07
really careful about where the economic

00:29:04 --> 00:29:08
security comes from I think you have to

00:29:06 --> 00:29:11
be really careful with what useful means

00:29:07 --> 00:29:13
whether the fact that it's useful also

00:29:10 --> 00:29:15
introduces any external incentives to

00:29:12 --> 00:29:18
mess with it right so so you could

00:29:14 --> 00:29:19
imagine like if the if the useful thing

00:29:17 --> 00:29:21
the network was doing was like powering

00:29:18 --> 00:29:22
a search engine or something right those

00:29:20 --> 00:29:24
results are valuable and they bring

00:29:21 --> 00:29:25
external actors in who want to

00:29:23 --> 00:29:27
manipulate that and there's sort of this

00:29:24 --> 00:29:29
feedback loop between the mechanism

00:29:26 --> 00:29:31
securing the protocol and the utility of

00:29:28 --> 00:29:32
what the protocol is actually providing

00:29:30 --> 00:29:34
right there's definitely some people in

00:29:31 --> 00:29:36
the community that look at that and say

00:29:33 --> 00:29:38
this is all way too complicated this is

00:29:35 --> 00:29:40
never going to work you have to have it

00:29:37 --> 00:29:42
be useless because there's no external

00:29:39 --> 00:29:44
incentives and messy things that way

00:29:41 --> 00:29:46
eah I personally think that's an open

00:29:43 --> 00:29:47
question yeah there's this argument that

00:29:45 --> 00:29:50
people make that if the resource that is

00:29:46 --> 00:29:51
used to secure the network is very it's

00:29:49 --> 00:29:53
very commoditized and just generally

00:29:50 --> 00:29:55
exist in the world in the world and sort

00:29:52 --> 00:29:57
of plentiful quantities that for example

00:29:54 --> 00:29:58
the case of storage of storage is the

00:29:56 --> 00:30:00
research that's used to secure the

00:29:57 --> 00:30:01
network then anyone with a bunch of

00:29:59 --> 00:30:04
storage could presumably attack the

00:30:00 --> 00:30:06
network whereas in the case of a network

00:30:03 --> 00:30:08
affects a say Bitcoin where you have

00:30:05 --> 00:30:10
Asics that are specific to the network

00:30:07 --> 00:30:12
in order to attack the network you have

00:30:09 --> 00:30:13
to get your hands on those a six and

00:30:11 --> 00:30:15
those Asics aren't useful for anything

00:30:12 --> 00:30:17
but my name bitcoins so people get would

00:30:14 --> 00:30:19
argue the security of that kind of

00:30:16 --> 00:30:22
economic security of that kind of a

00:30:18 --> 00:30:23
model is it's better yeah and Joe Bono

00:30:21 --> 00:30:25
has a fascinating line of work on these

00:30:22 --> 00:30:26
problems so if you google Goldfinger

00:30:24 --> 00:30:28
attacks he has a paper and a

00:30:25 --> 00:30:30
presentation there's also the question

00:30:27 --> 00:30:32
of like buying versus renting so if

00:30:29 --> 00:30:34
something is very commoditized you may

00:30:31 --> 00:30:36
be able to rent it which substantially

00:30:33 --> 00:30:38
subsidizes attacks you may be able to

00:30:35 --> 00:30:39
buy it perform the attack and then

00:30:37 --> 00:30:41
resell it into the commodity market

00:30:38 --> 00:30:44
which again substantially subsidizes the

00:30:40 --> 00:30:46
attack so these are all open and very

00:30:43 --> 00:30:48
complex questions but people will build

00:30:45 --> 00:30:50
the systems and we'll see this is sort

00:30:47 --> 00:30:52
of a classic pattern you see in in

00:30:49 --> 00:30:54
traditional finance and then you'll have

00:30:51 --> 00:30:56
sort of black swan and tail risk like

00:30:53 --> 00:30:58
vents that surprised people so we've

00:30:55 --> 00:31:00
talked a lot about governance in general

00:30:57 --> 00:31:03
but you obviously are working on a ton

00:30:59 --> 00:31:05
of interesting stuff too generally with

00:31:02 --> 00:31:06
respect to economic security for for

00:31:04 --> 00:31:08
Krypton and Bob jeans are just a

00:31:05 --> 00:31:11
computer security what are some of the

00:31:07 --> 00:31:12
other interesting ideas or

00:31:10 --> 00:31:14
sort of lines of work that you're

00:31:11 --> 00:31:15
xploring so one that I'm extremely

00:31:13 --> 00:31:17
personally interested in is fairness

00:31:14 --> 00:31:19
guarantees for users around these

00:31:16 --> 00:31:20
systems a lot of what attracted me to

00:31:18 --> 00:31:22
them in the first place was this promise

00:31:19 --> 00:31:24
of sort of eliminating the middleman and

00:31:21 --> 00:31:26
making things in control of the user

00:31:23 --> 00:31:27
like be your own bank you don't need

00:31:25 --> 00:31:29
these institutions to tell you how to

00:31:26 --> 00:31:31
set your money supply or how to route

00:31:28 --> 00:31:34
your transactions or what exchange to

00:31:30 --> 00:31:36
use etc etc I look a lot at those

00:31:33 --> 00:31:37
guarantees and sort of the ways in which

00:31:35 --> 00:31:40
modern blockchain solutions are failing

00:31:36 --> 00:31:42
to meet those guarantees so one example

00:31:39 --> 00:31:43
of that is in the in the decentralized

00:31:41 --> 00:31:44
exchange space that's something that's

00:31:42 --> 00:31:46
een a lot of promise from people who

00:31:43 --> 00:31:47
want to build these exchanges that

00:31:45 --> 00:31:50
aren't vulnerable to hacks and other

00:31:46 --> 00:31:51
user fund theft unfortunately the way

00:31:49 --> 00:31:53
these mechanisms that people are

00:31:50 --> 00:31:55
building interact with the blockchain is

00:31:52 --> 00:31:57
very complex and opens the door for

00:31:54 --> 00:31:59
external actors to make a lot of money

00:31:56 --> 00:32:00
from front-running them and make a lot

00:31:58 --> 00:32:02
of money from doing algorithmic trading

00:31:59 --> 00:32:04
on the network and everything that you

00:32:01 --> 00:32:06
see in the traditional financial worlds

00:32:03 --> 00:32:08
o some of my work is around how how

00:32:05 --> 00:32:11
large is that economy and and what are

00:32:07 --> 00:32:12
the failures of those guarantees what

00:32:10 --> 00:32:14
are some interesting results so far on

00:32:11 --> 00:32:16
that front so it's actually a probably a

00:32:13 --> 00:32:18
bigger market than you think

00:32:15 --> 00:32:20
even though Dex's have not seen

00:32:17 --> 00:32:22
substantial volume so this is a big

00:32:19 --> 00:32:24
problem for users it also highlights a

00:32:21 --> 00:32:26
lot of weird quirks of these systems

00:32:23 --> 00:32:29
uch as like allowing for typos that end

00:32:25 --> 00:32:31
up costing users a lot of money when

00:32:28 --> 00:32:32
programmatic actors swoop in and sort of

00:32:30 --> 00:32:34
take advantage of these inefficient

00:32:31 --> 00:32:36
mechanisms and it also raises

00:32:33 --> 00:32:37
fundamental questions about I guess

00:32:35 --> 00:32:39
whether we'll be able to do something

00:32:36 --> 00:32:41
that's different from the current

00:32:38 --> 00:32:42
financial system because there are still

00:32:40 --> 00:32:44
these information asymmetries that come

00:32:41 --> 00:32:46
up and this is a worldwide network and

00:32:43 --> 00:32:49
at the end of the day someone is still

00:32:45 --> 00:32:50
ordering transactions so is this rent

00:32:48 --> 00:32:53
sort of implicit to all blockchains

00:32:49 --> 00:32:55
how large is it and does it threaten the

00:32:52 --> 00:32:57
security of the overall blockchain which

00:32:54 --> 00:32:59
I think it may so I think one very

00:32:56 --> 00:33:02
interesting line of work that you did

00:32:58 --> 00:33:04
was around gas Jokinen and tokenizing

00:33:01 --> 00:33:06
as on the etherium network so this sort

00:33:03 --> 00:33:09
of came out of this arbitrage project we

00:33:05 --> 00:33:11
wrote a blog post very early on last I

00:33:08 --> 00:33:12
think October November essentially

00:33:10 --> 00:33:14
saying decentralized exchanges are

00:33:11 --> 00:33:15
flawed you can just run this 20 line

00:33:13 --> 00:33:17
Python script and you can profit off of

00:33:14 --> 00:33:19
users in a way that was maybe not

00:33:16 --> 00:33:21
foreseen and is not sort of explicitly

00:33:18 --> 00:33:22
stated to them because of how

00:33:20 --> 00:33:24
inefficient these mechanisms are and

00:33:21 --> 00:33:25
before we wrote this blog post we were

00:33:23 --> 00:33:26
actually doing this too

00:33:24 --> 00:33:28
right and we said we made X dollars

00:33:25 --> 00:33:30
whatever after we wrote the blogpost

00:33:27 --> 00:33:32
sort of this cottage industry spawned of

00:33:29 --> 00:33:34
like a few dozen people who are

00:33:31 --> 00:33:37
competing in sort of this market and

00:33:33 --> 00:33:39
trying to outbid each other to get their

00:33:36 --> 00:33:41
transactions first in that mind order

00:33:38 --> 00:33:42
and take advantage of these

00:33:40 --> 00:33:44
opportunities so we've been studying

00:33:41 --> 00:33:45
that market for quite a while and

00:33:43 --> 00:33:47
competing against these guys and

00:33:44 --> 00:33:49
unfortunately at some point they started

00:33:46 --> 00:33:51
out competing us so we started competing

00:33:48 --> 00:33:52
on what's called gas which is the price

00:33:50 --> 00:33:54
you're willing to pay per unit of

00:33:51 --> 00:33:57
transaction the way it works is you make

00:33:53 --> 00:33:58
a typo alley it puts a million dollars

00:33:56 --> 00:33:59
on the table for anyone who can get

00:33:57 --> 00:34:01
heir order in ahead of that typo and

00:33:58 --> 00:34:03
sort of take advantage of your typos and

00:34:00 --> 00:34:04
then I would like to do a five dollar

00:34:02 --> 00:34:08
transaction to take advantage of Ally's

00:34:04 --> 00:34:09
mistake right and then maybe maybe

00:34:07 --> 00:34:10
someone else is willing to do a ten

00:34:08 --> 00:34:12
dollar transaction because it's a

00:34:09 --> 00:34:13
million dollar opportunity right so we

00:34:11 --> 00:34:15
sort of get into this bidding war of

00:34:12 --> 00:34:17
like minor please pick me first minor

00:34:14 --> 00:34:18
please pick me first that's inherent to

00:34:16 --> 00:34:20
how these transactions are ordered by

00:34:17 --> 00:34:21
minors and what we noticed is that when

00:34:19 --> 00:34:23
you have like ten of these we were

00:34:20 --> 00:34:24
rarely profiting because we didn't have

00:34:22 --> 00:34:26
the best latency we didn't have the best

00:34:23 --> 00:34:28
infrastructure and they were getting

00:34:25 --> 00:34:29
their bids out faster they were getting

00:34:27 --> 00:34:31
them to miners faster and they were

00:34:28 --> 00:34:33
willing to bid up higher than we were to

00:34:30 --> 00:34:35
essentially take these opportunities so

00:34:32 --> 00:34:37
that's where gas token came in it's a

00:34:34 --> 00:34:38
way to sort of store this gas for the

00:34:36 --> 00:34:41
longer term rather than just paying for

00:34:37 --> 00:34:43
it when you do your transaction so gas

00:34:40 --> 00:34:45
is the transaction fee and usually you

00:34:42 --> 00:34:47
say okay I'm willing to pay $100 fee for

00:34:44 --> 00:34:49
this transaction instead what you could

00:34:46 --> 00:34:51
o is sort of Bank a transactions worth

00:34:48 --> 00:34:52
of gas and then just deploy that Bank

00:34:50 --> 00:34:55
gas and not pay as much fee for the

00:34:51 --> 00:34:56
transaction you are doing and that works

00:34:54 --> 00:34:59
by taking advantage of this fundamental

00:34:55 --> 00:35:02
issue in aetherium x' resource model

00:34:58 --> 00:35:04
which has to do with how you pay to sort

00:35:01 --> 00:35:04
of incentivize people to clean up after

00:35:03 --> 00:35:06
themselves

00:35:03 --> 00:35:08
o in aetherium you actually give people

00:35:05 --> 00:35:10
a refund in gas if they delete something

00:35:07 --> 00:35:12
they stored in the network previously to

00:35:09 --> 00:35:13
incentivize them to not leave garbage

00:35:11 --> 00:35:13
around that everyone has to store

00:35:12 --> 00:35:15
forever

00:35:12 --> 00:35:17
so what we do is when gas is cheap we

00:35:14 --> 00:35:19
fill the etherium State with junk and

00:35:16 --> 00:35:21
then when it's expensive we delete this

00:35:18 --> 00:35:22
junk which gives us a refund at that

00:35:20 --> 00:35:24
higher price that we can use to

00:35:21 --> 00:35:26
subsidize these arbitrage transactions

00:35:23 --> 00:35:28
which often cost thousands and thousands

00:35:25 --> 00:35:30
of dollars in fees like people are

00:35:27 --> 00:35:31
bidding multiple thousands

00:35:29 --> 00:35:33
even tens of thousands and fees on these

00:35:30 --> 00:35:35
transactions right at the clarify for

00:35:32 --> 00:35:37
those not already familiar so gas is

00:35:34 --> 00:35:38
basically the the resource that you used

00:35:36 --> 00:35:40
to pay for

00:35:37 --> 00:35:42
shanell resources on the etherium

00:35:39 --> 00:35:44
blockchain so if you wanted to buy

00:35:41 --> 00:35:46
computation say instructions that miners

00:35:43 --> 00:35:48
will execute for you you pay for those

00:35:45 --> 00:35:50
in gas if you wanted to buy a storage

00:35:47 --> 00:35:52
you similarly also pay for storage in

00:35:49 --> 00:35:55
gas and the current model of aetherium

00:35:51 --> 00:35:57
is that you buy some storage on the

00:35:54 --> 00:35:59
blockchain for a fixed price up front

00:35:56 --> 00:36:01
and then that storage sort of remains on

00:35:58 --> 00:36:03
the blockchain forever and the theorem

00:36:00 --> 00:36:05
bachchan has this mechanism that if you

00:36:02 --> 00:36:07
were to delete that storage if

00:36:04 --> 00:36:09
you were to free it then you will

00:36:06 --> 00:36:12
receive a refund for the amount that you

00:36:08 --> 00:36:13
pay there's some some refund for for you

00:36:11 --> 00:36:15
pay originally for that amount of

00:36:12 --> 00:36:19
storage and so you're basically saying

00:36:14 --> 00:36:21
that when gas is very cheap you can sort

00:36:18 --> 00:36:24
of fill storage on the blockchain and

00:36:20 --> 00:36:27
then we claim a refund later one's gas

00:36:23 --> 00:36:28
is expensive and so the gas will be will

00:36:26 --> 00:36:30
be worth more at that point than it was

00:36:27 --> 00:36:32
when you when you when you store it and

00:36:29 --> 00:36:33
you can sort of leverage that to kind of

00:36:31 --> 00:36:35
a increase the amount of gas that's

00:36:32 --> 00:36:36
available to you yeah and our

00:36:34 --> 00:36:38
fundamental observation was that this is

00:36:35 --> 00:36:40
basically a derivative on gas it's like

00:36:37 --> 00:36:42
a call option on some gas it

00:36:39 --> 00:36:44
led to the broader question of how are

00:36:41 --> 00:36:46
these resources actually priced like how

00:36:43 --> 00:36:47
do people choose how much is paid for

00:36:45 --> 00:36:49
storage how do people choose how much is

00:36:46 --> 00:36:50
paid for computation and in what ways

00:36:48 --> 00:36:52
are these suboptimal

00:36:49 --> 00:36:54
so you mentioned the current model of

00:36:51 --> 00:36:55
pay ones store forever that's something

00:36:53 --> 00:36:57
we certainly address in our work

00:36:54 --> 00:36:59
proposing more of a rental scheme where

00:36:56 --> 00:37:01
you have to pay for ongoing costs that

00:36:58 --> 00:37:03
market rate there's also the issue of

00:37:00 --> 00:37:04
who's getting the payment so the fact

00:37:02 --> 00:37:06
hat the miners get payment for storage

00:37:03 --> 00:37:07
when the miners actually don't need to

00:37:05 --> 00:37:10
store the whole state and it's the full

00:37:06 --> 00:37:12
nodes that that bear the costs so this

00:37:09 --> 00:37:14
ort of asymmetry between who's bearing

00:37:11 --> 00:37:15
the costs like where the externality is

00:37:13 --> 00:37:18
and like who's actually profiting is

00:37:14 --> 00:37:19
uper important to study it leads to a

00:37:17 --> 00:37:21
sort of tragedy of the Commons in the

00:37:18 --> 00:37:22
worst case where the miners are happy to

00:37:20 --> 00:37:24
take payment for as much storage as you

00:37:21 --> 00:37:25
want because they don't have to store it

00:37:23 --> 00:37:26
and they don't care as long as they

00:37:24 --> 00:37:28
don't break the whole network they'll

00:37:25 --> 00:37:30
happily push out as many full

00:37:27 --> 00:37:31
nodes as they can so these are broader

00:37:29 --> 00:37:34
questions we have a broader initiative

00:37:30 --> 00:37:37
called project Chicago which you can see

00:37:33 --> 00:37:38
at project Chicago do that basically is

00:37:36 --> 00:37:40
tudying these questions of crypto

00:37:37 --> 00:37:42
commodities what are the underlying

00:37:39 --> 00:37:44
commodities behind block chains for

00:37:41 --> 00:37:46
example computation relay network and

00:37:43 --> 00:37:48
storage how are these commodities priced

00:37:45 --> 00:37:49
how can you exploit these commodities

00:37:47 --> 00:37:51
how can you exploit like the relay

00:37:48 --> 00:37:52
network to get information about

00:37:50 --> 00:37:56
people's transactions earlier

00:37:51 --> 00:37:58
or the computation layer to to sort of I

00:37:55 --> 00:38:00
don't know do this kind of gas refund or

00:37:57 --> 00:38:02
something like that so there's a lot of

00:37:59 --> 00:38:04
interesting work in that direction yeah

00:38:01 --> 00:38:06
by the way why is it called Project

00:38:03 --> 00:38:07
Chicago so it's called Project Chicago

00:38:05 --> 00:38:09
because our inspiration is sort of the

00:38:06 --> 00:38:10
Chicago Mercantile Exchange

00:38:08 --> 00:38:12
that's how businesses hedge against

00:38:09 --> 00:38:15
volatility and sort of price commodities

00:38:11 --> 00:38:17
in real world markets so we think of

00:38:14 --> 00:38:19
this as sort of exploring something

00:38:16 --> 00:38:21
similar on blockchains and asking like

00:38:18 --> 00:38:22
is that the right model or can we do

00:38:20 --> 00:38:23
better now that we have all these

00:38:21 --> 00:38:26
decentralized tools at our disposal

00:38:22 --> 00:38:28
that's giving well thank you so much for

00:38:25 --> 00:38:30
coming on the podcast yeah thanks for

00:38:27 --> 00:38:30
having me

<!-- YOUTUBE_TRANSCRIPT_END -->
