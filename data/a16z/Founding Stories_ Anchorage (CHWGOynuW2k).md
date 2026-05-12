---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "CHWGOynuW2k"
title: "Founding Stories: Anchorage"
video_url: "https://www.youtube.com/watch?v=CHWGOynuW2k"
thumbnail_url: "https://i.ytimg.com/vi/CHWGOynuW2k/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=CHWGOynuW2k"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-06-24T00:29:58.000Z"
upload_date: "2019-06-24"
duration_seconds: 1811
duration_human: "30:11"
view_count: 6048
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T14:29:45.650Z"
---

# Founding Stories: Anchorage

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=CHWGOynuW2k
- video_id: CHWGOynuW2k
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-06-24T00:29:58.000Z
- upload_date: 2019-06-24
- duration: 30:11
- view_count: 6048
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: Andreessen Horowitz, a16z, software, entrepreneurship, startup, Silicon Valley, cryptocurrency, founders, founding stories, custody, custodians, fintech, libra, facebook, Libra Foundation, Chris Dixon, financial custodian, cryptocurrencies, anchorage, founding stories anchorage, founding story, a16z founding stories, a16z founding story, crypto custody, custody crypto, crypto custodians, custodians crypto
- categories: Science & Technology

## Description

We continue our YouTube series "Founding Stories" with the story of Anchorage.

To set the stage: what do you do to keep a valuable asset safe? Well, if you were a pirate, you'd keep your booty in a locked treasure chest, assign a guard, and maybe bury the chest somewhere secret: X marks the spot!

Now flash forward to the modern age: how do you know you really own those stocks and mutual funds you bought? As it turns out, there is a complex set of technology, regulations, laws, and procedures that your broker follows to make sure they are keeping your holdings safe. When they do this, they are acting as a financial custodian.

Now flash forward again to the cryptocurrency era with its private keys, multiple cryptocurrencies, new ways to vote, and other complexities. That's the problem Anchorage is solving.

In this video, a16z General Partner Chris Dixon talks with the co-founders of Anchorage Diogo Monica and Nathan McCauley about:
- What they learned building out security engineering practices and technology at Square and Docker
- The founding story of Anchorage
- What custodians do, and the new responsibilities of a crypto custodian
- How crypto custodians can help unlock more engagement from traditional financial institutions
- What Libra is, why Anchorage decided to join the Libra Association as a founding member and what role the company will play in the new global cryptocurrency. (Full disclosure: a16z is also a founding member, as a16z General Partner Katie Haun describes at https://a16z.com/2019/06/18/libra/.)

***

The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.

This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:13
[Music]

00:00:14 --> 00:00:20
hi my name is Chris Dixon this is the a

00:00:16 --> 00:00:23
16 Z video series today I'm here with

00:00:19 --> 00:00:25
Nathan and Diego from Anchorage a crypto

00:00:22 --> 00:00:28
custody company that were investors in

00:00:24 --> 00:00:31
and so we're going to talk a little bit

00:00:27 --> 00:00:32
about how you guys got into custody what

00:00:30 --> 00:00:34
is custody

00:00:31 --> 00:00:35
there's also was recently an

00:00:33 --> 00:00:38
nouncement that you're involved with

00:00:34 --> 00:00:39
e Facebook blockchain project called

00:00:37 --> 00:00:40
Libra and we're gonna talk about that

00:00:38 --> 00:00:42
oo

00:00:39 --> 00:00:43
maybe if you could start with a little

00:00:41 --> 00:00:46
bit of your backgrounds how you got into

00:00:42 --> 00:00:49
security your time at square and then

00:00:45 --> 00:00:51
how that led to Anchorage that's uh it's

00:00:48 --> 00:00:53
a fun story I think every every time we

00:00:50 --> 00:00:55
talk about this story really is more

00:00:52 --> 00:00:58
than Anchorage it ends up being held

00:00:54 --> 00:01:00
Nathan and I actually met the story

00:00:57 --> 00:01:03
there actually goes back nine years ago

00:00:59 --> 00:01:05
at this point we met because we joined a

00:01:02 --> 00:01:08
company called square the same week

00:01:04 --> 00:01:10
before joining square nathan was working

00:01:07 --> 00:01:13
on something called anti reverse

00:01:09 --> 00:01:16
ngineering so a very nice subfield of

00:01:12 --> 00:01:17
security in which imagine that you leave

00:01:15 --> 00:01:19
a tank behind enemy lines you want to

00:01:16 --> 00:01:21
make sure that the enemy cannot reverse

00:01:19 --> 00:01:23
ngineer the IP and the actual software

00:01:20 --> 00:01:25
in the stand cool and I was working on

00:01:22 --> 00:01:28
something that was candidly very useless

00:01:24 --> 00:01:30
back 10 12 years ago which was a PhD in

00:01:27 --> 00:01:32
stupid his systems so it turns out that

00:01:29 --> 00:01:35
here's some utility twelve years later

00:01:31 --> 00:01:37
about this this publishing academic

00:01:34 --> 00:01:40
papers and Byzantine feel tolerance and

00:01:36 --> 00:01:41
working on hash gosh and now working on

00:01:39 --> 00:01:44
distributive randomness so that's how we

00:01:40 --> 00:01:46
got to meet we joined squared the same

00:01:43 --> 00:01:51
week and then over the next four years

00:01:45 --> 00:01:54
was 2010 it was too early 2011 it's in

00:01:50 --> 00:01:55
March if I'm if I'm correct the fun part

00:01:53 --> 00:01:58
was that immediately we came in into a

00:01:54 --> 00:02:00
company that did not have an encrypted

00:01:57 --> 00:02:01
credit card reader and so how many

00:01:59 --> 00:02:04
people would square them Scott was

00:02:00 --> 00:02:06
around 45 yeah pretty small still you

00:02:03 --> 00:02:08
know and so we were just tasked with the

00:02:05 --> 00:02:10
first thing that we did was we actually

00:02:07 --> 00:02:12
were part of the team that created the

00:02:09 --> 00:02:12
little little encrypted credit card

00:02:11 --> 00:02:15
reader

00:02:11 --> 00:02:16
I'm sure you've used before so we we

00:02:14 --> 00:02:18
actually are on the pattern for that so

00:02:15 --> 00:02:19
that's pretty cool it's a cool claim to

00:02:17 --> 00:02:21
fame that we usually we usually tell

00:02:18 --> 00:02:24
people and so for four years we just

00:02:21 --> 00:02:26
work together on everything

00:02:23 --> 00:02:28
so we were at the end of it Square was a

00:02:25 --> 00:02:31
lot larger organization and we were

00:02:27 --> 00:02:33
leading the security team and throughout

00:02:30 --> 00:02:35
hose four years we worked on everything

00:02:32 --> 00:02:38
candidly we worked on hardware security

00:02:34 --> 00:02:40
modules the systems that integrate with

00:02:37 --> 00:02:43
all the payment card networks worked on

00:02:39 --> 00:02:45
interracial a/c age with Swift we work

00:02:42 --> 00:02:46
on implementing projects around

00:02:44 --> 00:02:48
chip-and-pin

00:02:45 --> 00:02:50
on just general infrastructure or

00:02:47 --> 00:02:52
operational security so anything that

00:02:49 --> 00:02:55
ouches security in one way or another

00:02:51 --> 00:02:58
we actually set up the original cameras

00:02:54 --> 00:02:59
the safety deposit boxes and the vaults

00:02:57 --> 00:03:01
that's great used and even like the

00:02:58 --> 00:03:03
physical security of the office of

00:03:00 --> 00:03:04
access control of the actual cards of

00:03:02 --> 00:03:06
the access security must've been a huge

00:03:03 --> 00:03:08
investment at a company like square yea

00:03:05 --> 00:03:10
square correctly there was a being

00:03:07 --> 00:03:12
bashed in the media when we joined

00:03:09 --> 00:03:14
because they were offering out free

00:03:11 --> 00:03:15
credit card skimmers that was the

00:03:13 --> 00:03:17
narrative there was actually tried to

00:03:14 --> 00:03:19
push it out and so there was a lot of

00:03:16 --> 00:03:22
ocus on over investing in security and

00:03:18 --> 00:03:25
really bringing people that could just

00:03:21 --> 00:03:26
heavily develop these platforms and

00:03:24 --> 00:03:27
making sure that we were prepared for

00:03:25 --> 00:03:29
the future it was actually square the

00:03:26 --> 00:03:31
first company that we were part of that

00:03:28 --> 00:03:34
had this narrative of every single

00:03:30 --> 00:03:35
security person must also be and meet

00:03:33 --> 00:03:37
he bar if not exceed of software

00:03:34 --> 00:03:39
ngineering and so as security engineers

00:03:36 --> 00:03:41
we're actually building the platform

00:03:38 --> 00:03:43
that all the other engineers used for

00:03:40 --> 00:03:45
security and so Square still to this day

00:03:42 --> 00:03:46
how is that kind of culture as opposed

00:03:44 --> 00:03:49
to sort of separating the two having

00:03:46 --> 00:03:51
security people watch over the software

00:03:48 --> 00:03:52
ngineers that's right basically what I

00:03:50 --> 00:03:54
could have a deeper integration between

00:03:51 --> 00:03:55
the two teams and sometimes what people

00:03:53 --> 00:03:57
tend to do is they have a security team

00:03:54 --> 00:03:59
and the security team is somehow

00:03:56 --> 00:04:01
isolated from the engineering team and

00:03:58 --> 00:04:03
so what what do you have is you don't

00:04:00 --> 00:04:05
have alignment of incentives because if

00:04:02 --> 00:04:07
you have security engineers or if you

00:04:04 --> 00:04:09
have security team that is not actually

00:04:06 --> 00:04:11
doing engineering the engineers

00:04:08 --> 00:04:12
themselves don't actually respect the

00:04:10 --> 00:04:14
city the the the security team and so

00:04:11 --> 00:04:16
when they hear and know no you can't do

00:04:13 --> 00:04:18
this then immediately you create a rift

00:04:15 --> 00:04:20
in between the cultures of the company

00:04:17 --> 00:04:23
so we had a couple of policies on the

00:04:19 --> 00:04:26
team one of them was get to yes so we

00:04:22 --> 00:04:28
never said no we always try to create

00:04:25 --> 00:04:30
the equivalent of a yes but in the

00:04:27 --> 00:04:33
second component is that every single

00:04:29 --> 00:04:33
security person also does engineering

00:04:32 --> 00:04:35
work

00:04:32 --> 00:04:36
and participates in the platform that

00:04:34 --> 00:04:38
meant that we were actually managing the

00:04:35 --> 00:04:40
services that every engineer I dependent

00:04:37 --> 00:04:42
on so if their service had to had five

00:04:39 --> 00:04:44
nines of availability ours had to have

00:04:41 --> 00:04:45
six and so that's how we gained a lot of

00:04:43 --> 00:04:46
respect from the rest of the team and

00:04:44 --> 00:04:48
how the company was actually scaled out

00:04:45 --> 00:04:49
hen you were docker and he's a little

00:04:47 --> 00:04:52
bit with that and then also then how

00:04:48 --> 00:04:56
that led to encourage sure so after a

00:04:51 --> 00:04:59
number of years at square we were given

00:04:55 --> 00:05:02
the opportunity to kind of grow the

00:04:58 --> 00:05:05
security team at docker kind of from its

00:05:01 --> 00:05:06
and its initiation docker was a really

00:05:04 --> 00:05:09
great opportunity for us because it was

00:05:05 --> 00:05:11
kind of an opportunity to focus on

00:05:08 --> 00:05:13
security at scale and kind of take those

00:05:10 --> 00:05:15
lessons that we've learned about micro

00:05:12 --> 00:05:17
services and infrastructure security at

00:05:14 --> 00:05:19
square and kind of put those into a

00:05:16 --> 00:05:22
platform like docker that is now used

00:05:18 --> 00:05:26
widely across the internet between the

00:05:21 --> 00:05:28
cloud providers many of the government

00:05:25 --> 00:05:30
agencies a lot of folks are using docker

00:05:27 --> 00:05:32
now and the opportunity to kind of have

00:05:29 --> 00:05:34
that security go through all of docker

00:05:31 --> 00:05:36
was pretty big for us and a big thing

00:05:33 --> 00:05:38
that was pretty cool we learned both at

00:05:35 --> 00:05:40
square at docker was this embedding

00:05:37 --> 00:05:43
model the security engineering model

00:05:39 --> 00:05:45
which really allows you to if you're if

00:05:42 --> 00:05:46
you're really effective at it and your

00:05:44 --> 00:05:48
security engineers are really effective

00:05:45 --> 00:05:51
then everybody in the organization

00:05:47 --> 00:05:52
becomes a security engineer because kind

00:05:50 --> 00:05:54
of the the ways of doing things the ways

00:05:51 --> 00:05:57
of operating kind of get embedded into

00:05:53 --> 00:06:01
everything that is kind of a culture in

00:05:56 --> 00:06:03
totally a culture and that's the the

00:06:00 --> 00:06:05
culture that we're trying to create at

00:06:02 --> 00:06:07
Anchorage is one where everybody is a

00:06:04 --> 00:06:09
security engineer security is the

00:06:06 --> 00:06:10
responsibility of everybody it's so so

00:06:08 --> 00:06:11
hard about secured one of the many hard

00:06:09 --> 00:06:12
teams of security right is you just need

00:06:10 --> 00:06:14
one

00:06:11 --> 00:06:16
so one door to get left open

00:06:13 --> 00:06:19
quote-unquote right so one bug in the

00:06:15 --> 00:06:20
code right so I mean and you can do

00:06:18 --> 00:06:23
things to kind of overlay protections

00:06:20 --> 00:06:25
but in the end you needed kind of deeply

00:06:22 --> 00:06:27
embedded kind of cultural awareness to

00:06:24 --> 00:06:29
put security as a top priority

00:06:26 --> 00:06:32
absolutely you want it to be kind of

00:06:28 --> 00:06:34
across the board all all engineers and

00:06:31 --> 00:06:35
even even the folks that aren't in

00:06:33 --> 00:06:37
engineering but depend on the work of

00:06:34 --> 00:06:39
engineering have them focus on security

00:06:36 --> 00:06:42
and then as much as possible build

00:06:38 --> 00:06:43
layers so that there's no one system

00:06:41 --> 00:06:46
that can break

00:06:42 --> 00:06:47
that you kind of have a crash resistance

00:06:45 --> 00:06:50
yeah one of the things we like to talk

00:06:46 --> 00:06:51
about is in software engineering

00:06:49 --> 00:06:54
organizations you wanna be able to go

00:06:50 --> 00:06:56
fast we also want to go safely and so

00:06:53 --> 00:06:58
ne of the things we've done passes

00:06:55 --> 00:07:00
we've gone to Indy 500 and we think that

00:06:57 --> 00:07:03
any 500 cars provide a really good model

00:06:59 --> 00:07:05
for that their express purpose is to go

00:07:02 --> 00:07:08
really fast but when things go bad the

00:07:04 --> 00:07:10
driver still survives because of all the

00:07:07 --> 00:07:12
safety features all the safety

00:07:09 --> 00:07:14
mechanisms that have been put into those

00:07:11 --> 00:07:15
cars I think that provides a really good

00:07:13 --> 00:07:17
model for how you just think about

00:07:14 --> 00:07:20
security engineering I'll allow it to be

00:07:16 --> 00:07:22
secure safe even in the face of

00:07:19 --> 00:07:24
disasters failures so how'd you get

00:07:21 --> 00:07:25
certain courage so encouraged was an

00:07:23 --> 00:07:29
interesting one because we were a talker

00:07:24 --> 00:07:31
and what started happening was the

00:07:28 --> 00:07:33
run-up of prices of 2017 as you were

00:07:30 --> 00:07:34
very well aware brought a lot of people

00:07:32 --> 00:07:36
to the space and in particular in

00:07:33 --> 00:07:38
particular brought investors and there

00:07:35 --> 00:07:40
were a lot of investors starting out to

00:07:37 --> 00:07:42
invest in these crypto assets that

00:07:39 --> 00:07:45
didn't really know how to do private

00:07:41 --> 00:07:46
keys and I say it this way because they

00:07:44 --> 00:07:48
didn't know how to do anything about

00:07:45 --> 00:07:51
private keys generate them safely

00:07:47 --> 00:07:53
custody then obviously protect them

00:07:50 --> 00:07:55
against intrusion back them up so all of

00:07:52 --> 00:07:57
the basic components is just business

00:07:54 --> 00:07:59
continuity or not being where we're not

00:07:56 --> 00:08:00
being followed so we started having

00:07:58 --> 00:08:02
people just like contact us and calling

00:07:59 --> 00:08:04
us for help we're just how do we do key

00:08:01 --> 00:08:07
generation how do we actually keep these

00:08:03 --> 00:08:08
things safely people were losing the

00:08:06 --> 00:08:10
passphrases

00:08:07 --> 00:08:12
when you had worked on the standard for

00:08:09 --> 00:08:14
the Glacial protocol right right so we

00:08:11 --> 00:08:15
became maintainer of appalachia protocol

00:08:13 --> 00:08:18
which is the golden standard for

00:08:14 --> 00:08:19
individual custody of Bitcoin for cold

00:08:17 --> 00:08:22
storage for cold steel meaning printed

00:08:18 --> 00:08:24
out sort of the human protocol the human

00:08:21 --> 00:08:26
d machine protocol for for doing that

00:08:23 --> 00:08:28
safely that's correct so eternally

00:08:25 --> 00:08:31
quarantine Hardware buy a laptop take

00:08:27 --> 00:08:33
out the Wi-Fi card print these things in

00:08:30 --> 00:08:36
QR codes and then kind of like use that

00:08:32 --> 00:08:38
our gathering mechanism of the the jamar

00:08:35 --> 00:08:40
code confirmation to actually send to

00:08:37 --> 00:08:41
nline computers or transactions so we

00:08:39 --> 00:08:43
re deeply aware of how cold storages

00:08:40 --> 00:08:45
evolved we participated in it actively

00:08:42 --> 00:08:46
and in fact we consulted for these

00:08:44 --> 00:08:49
companies doing exactly that we help

00:08:45 --> 00:08:51
them with storage but then they became

00:08:48 --> 00:08:52
immediately obvious that no the

00:08:50 --> 00:08:55
solutions that were in the space and

00:08:51 --> 00:08:57
cold storage itself was not sufficient

00:08:54 --> 00:09:00
for organizations so organizations

00:08:56 --> 00:09:03
cannot wait 48 hours to actually access

00:08:59 --> 00:09:05
their vaults to go somewhere in

00:09:02 --> 00:09:07
Switzerland and fly around and collect

00:09:04 --> 00:09:09
hese USB keys to to move their assets

00:09:06 --> 00:09:10
because the volatility of the assets is

00:09:08 --> 00:09:12
uch that they want to take advantage of

00:09:09 --> 00:09:15
the opportunities that Bitcoin or a

00:09:11 --> 00:09:17
theorem or what-have-you is up 15% or

00:09:14 --> 00:09:19
down 15% and that started becoming

00:09:16 --> 00:09:20
immediately more obvious once you start

00:09:18 --> 00:09:22
considering that all of these new

00:09:19 --> 00:09:24
networks they're actually coming up and

00:09:21 --> 00:09:26
being designed and in 2017 we're all

00:09:23 --> 00:09:28
transitioning from proof of work to

00:09:25 --> 00:09:29
proof of stake they were now requiring

00:09:27 --> 00:09:31
you to do some kind of on chain

00:09:28 --> 00:09:33
governance you had make her already that

00:09:30 --> 00:09:36
required and was already talking about

00:09:32 --> 00:09:39
governance decisions on how to stabilize

00:09:35 --> 00:09:41
died you were having tezo's which is a

00:09:38 --> 00:09:43
very popular at the time being talked

00:09:40 --> 00:09:45
about how they actually had governance

00:09:42 --> 00:09:46
on the protocol itself and that there

00:09:44 --> 00:09:48
were updates on the network that were

00:09:45 --> 00:09:50
voted by the actual holders so all these

00:09:47 --> 00:09:51
things were happening and it was very

00:09:49 --> 00:09:53
clear that cold storage was not the

00:09:50 --> 00:09:55
right solution for investors so

00:09:52 --> 00:09:57
Anchorage is born out of this it is born

00:09:54 --> 00:09:59
out of the frustration of doing cold

00:09:56 --> 00:10:01
storage solutions as consultants to

00:09:58 --> 00:10:03
these crypto funds and realizing the

00:10:00 --> 00:10:06
cold storage just simply does not work

00:10:02 --> 00:10:09
and and so when we think about custody

00:10:05 --> 00:10:11
in the non crypto world it mostly means

00:10:08 --> 00:10:15
toring storing stuff like security and

00:10:10 --> 00:10:17
storing stuff right the you know so

00:10:14 --> 00:10:19
whether it be sort of gold and a vault

00:10:16 --> 00:10:22
or you know something like State Street

00:10:18 --> 00:10:26
storing you know sort of digital digital

00:10:21 --> 00:10:29
you know dollars or stock certificates

00:10:25 --> 00:10:32
or whatever it is I guess your vision of

00:10:28 --> 00:10:34
custody is more than simply storing

00:10:31 --> 00:10:38
things right and so you mentioned

00:10:33 --> 00:10:41
governance staking like you talked a

00:10:37 --> 00:10:43
little that that product that kind of

00:10:40 --> 00:10:46
the custody market and crypto evolving

00:10:42 --> 00:10:47
yeah absolutely so I guess the status

00:10:45 --> 00:10:49
quo maybe we start by the status quo

00:10:46 --> 00:10:51
what is the status quo the status quo is

00:10:48 --> 00:10:54
people invest in crypto assets and then

00:10:51 --> 00:10:56
they do what we call pirate poll we we

00:10:53 --> 00:10:57
call it pirate custody and we call the

00:10:55 --> 00:10:59
pirate custody because if you think

00:10:56 --> 00:11:01
about it it is the same technology that

00:10:58 --> 00:11:04
he Pirates used in the 1700s to protect

00:11:00 --> 00:11:05
heir gold coins it is gold coins in

00:11:03 --> 00:11:07
size of treasure chests

00:11:04 --> 00:11:08
that are buried in islands and then

00:11:06 --> 00:11:10
there's a treasure map that you follow

00:11:07 --> 00:11:11
around to actually see where your gold

00:11:09 --> 00:11:14
mines are hidden but instead of gold

00:11:10 --> 00:11:16
coins you now have USB keys with private

00:11:13 --> 00:11:18
keys and instead of treasure chests you

00:11:15 --> 00:11:19
have safety deposit boxes instead of an

00:11:17 --> 00:11:21
island you have some mountain somewhere

00:11:18 --> 00:11:23
in Switzerland and instead of just a

00:11:20 --> 00:11:25
treasure map now you have a checklist

00:11:22 --> 00:11:28
hat humans are supposed to follow to do

00:11:24 --> 00:11:31
these things right and so this is what

00:11:27 --> 00:11:32
he status quo is and with all of these

00:11:30 --> 00:11:35
new protocols that require you to

00:11:31 --> 00:11:37
actively participate so the keys now

00:11:34 --> 00:11:39
have to be online in one way or another

00:11:36 --> 00:11:40
e's a lot of different systems that

00:11:38 --> 00:11:42
have delegation keys and have the

00:11:39 --> 00:11:44
ability of delegating certain

00:11:41 --> 00:11:46
responsibilities different keys but

00:11:43 --> 00:11:49
ultimately something just to explain the

00:11:45 --> 00:11:52
idea is that these new networks part of

00:11:48 --> 00:11:54
the idea is that the token holders can

00:11:51 --> 00:11:56
participate both in sort of helping to

00:11:53 --> 00:11:58
govern the system so you mentioned maker

00:11:55 --> 00:12:00
where the where the token holders

00:11:57 --> 00:12:02
essentially vote on certain key

00:11:59 --> 00:12:05
parameters in a system that help govern

00:12:01 --> 00:12:09
the system in a system like cosmos or

00:12:04 --> 00:12:12
Tasos by having tokens and staking them

00:12:08 --> 00:12:14
and with Val we're called validators who

00:12:11 --> 00:12:17
help to kind of operate the network and

00:12:13 --> 00:12:20
in exchange for that you you earn you

00:12:16 --> 00:12:22
know interest or return friends yeah and

00:12:19 --> 00:12:24
so these are these are you know sort of

00:12:21 --> 00:12:25
moving beyond the Bitcoin kind of

00:12:23 --> 00:12:28
concept where you just simply have the

00:12:24 --> 00:12:29
keys and you can go maybe the pirate

00:12:27 --> 00:12:32
model works reasonably well there you

00:12:28 --> 00:12:33
can go hide them you know maybe please

00:12:31 --> 00:12:35
for some people right it works and it

00:12:32 --> 00:12:36
works in the early stages in the kind of

00:12:34 --> 00:12:39
cyberpunk stage but as it stuff goes

00:12:35 --> 00:12:43
mainstream people want kind of a more

00:12:38 --> 00:12:45
secure and reliable type of storage but

00:12:42 --> 00:12:46
also they'll want to use these more

00:12:44 --> 00:12:48
advanced features of the new of the new

00:12:45 --> 00:12:50
proof of state networks yeah ultimately

00:12:47 --> 00:12:53
what we talk about is people are

00:12:49 --> 00:12:55
designing networks that have certain

00:12:52 --> 00:12:56
characteristics it makes no sense that

00:12:54 --> 00:12:58
investors don't get to take advantage of

00:12:55 --> 00:12:59
them and in fact one of one of the

00:12:57 --> 00:13:02
things that nathan talks about all the

00:12:58 --> 00:13:05
time is how investors MutS must meet

00:13:01 --> 00:13:07
fiduciary obligations their LPS expect

00:13:04 --> 00:13:09
hem to actively participate in its

00:13:06 --> 00:13:11
protocol imagine that you're investing

00:13:08 --> 00:13:12
in foreign but somehow you're dropping

00:13:10 --> 00:13:15
the dividends afford on the floor or

00:13:12 --> 00:13:16
you're participating in some

00:13:14 --> 00:13:19
of the network you're not actually

00:13:15 --> 00:13:20
voting on who's going to be the CEO you

00:13:18 --> 00:13:22
know so this is obviously not meeting

00:13:19 --> 00:13:24
your fiduciary obligations one of the

00:13:21 --> 00:13:26
interesting things is in traditional

00:13:23 --> 00:13:27
venture capital institutions like us

00:13:25 --> 00:13:29
like that andreessen horowitz would

00:13:27 --> 00:13:31
invest in startups like lyft or

00:13:28 --> 00:13:33
something and then you know other

00:13:30 --> 00:13:35
institutions invest and then seven years

00:13:32 --> 00:13:37
later retail investors you know when

00:13:34 --> 00:13:39
those companies go public might get the

00:13:36 --> 00:13:41
chance to invest right crypto has been

00:13:38 --> 00:13:43
really kind of the opposite where it's

00:13:40 --> 00:13:44
been led by kind of the fringes and

00:13:42 --> 00:13:46
programmers and random people on the

00:13:43 --> 00:13:47
internet but institutions have

00:13:45 --> 00:13:49
anticipated partly because I think

00:13:46 --> 00:13:52
because of these road blocks including

00:13:48 --> 00:13:54
custody right I mean so I guess do you

00:13:51 --> 00:13:57
see you know I guess what role do you

00:13:53 --> 00:14:00
see custody in the in kind of unlocking

00:13:56 --> 00:14:01
the broader adoption of crypto assets I

00:13:59 --> 00:14:03
think one of the one things is

00:14:00 --> 00:14:06
discerning there just to what Diego was

00:14:02 --> 00:14:08
aying earlier is institutions have a

00:14:05 --> 00:14:10
set of expectations they have around

00:14:07 --> 00:14:13
their custodians if you look at the

00:14:09 --> 00:14:15
large custodians that exist they not

00:14:12 --> 00:14:18
only help you hold the assets they help

00:14:14 --> 00:14:20
you vote in proxy voting setting they

00:14:17 --> 00:14:22
help you collect dividends they help you

00:14:19 --> 00:14:24
tilize your assets to the degree they

00:14:21 --> 00:14:27
are utilized say for example if there's

00:14:23 --> 00:14:28
a fork or some sort of in the

00:14:26 --> 00:14:31
traditional securities you would look at

00:14:27 --> 00:14:33
hat as a stock split or a dividend or

00:14:30 --> 00:14:35
stock stock dividend whatever the case

00:14:32 --> 00:14:39
may be so there's an expectation that

00:14:34 --> 00:14:41
all of those kind of features are

00:14:38 --> 00:14:43
available and available to institutional

00:14:40 --> 00:14:46
investors and so when they're coming

00:14:42 --> 00:14:47
into this new space a lot of times if

00:14:45 --> 00:14:48
they're looking at the private custody

00:14:46 --> 00:14:50
pirate custody model they're being told

00:14:48 --> 00:14:51
well we're gonna take this asset and

00:14:49 --> 00:14:53
you're not we're gonna be able to trade

00:14:50 --> 00:14:54
it because it's gonna be stuck and

00:14:52 --> 00:14:55
you're not really gonna be able to use

00:14:53 --> 00:14:59
it and for any of the reasons that you

00:14:54 --> 00:15:01
want to and so just getting to the set

00:14:58 --> 00:15:03
of features that they already expect is

00:15:00 --> 00:15:04
pretty important and then you layer on

00:15:02 --> 00:15:06
the fact that they actually need that to

00:15:03 --> 00:15:08
be done within a regulated institution

00:15:05 --> 00:15:11
as well they need a qualified custodian

00:15:07 --> 00:15:13
in order to hold those assets the layers

00:15:10 --> 00:15:14
on a whole entire additional layer of

00:15:12 --> 00:15:17
complexity where they want to see

00:15:13 --> 00:15:18
operational due diligence they want to

00:15:16 --> 00:15:20
see you have a really good relationship

00:15:17 --> 00:15:23
with regulators and they want to see

00:15:19 --> 00:15:24
kind of a really adult grown-up

00:15:22 --> 00:15:26
institution in a lot of ways and so

00:15:23 --> 00:15:28
that's really what they're looking for

00:15:25 --> 00:15:31
is the combination of tech forward firm

00:15:27 --> 00:15:32
that has the the regulations and is able

00:15:30 --> 00:15:34
to meet kind of all of the needs that

00:15:31 --> 00:15:37
hey have yeah so one of the curious

00:15:33 --> 00:15:39
things that we've realized is people

00:15:36 --> 00:15:41
keep talking about how institutions

00:15:38 --> 00:15:43
aren't coming what we see at Anchorage

00:15:40 --> 00:15:46
is that institutions are already here

00:15:42 --> 00:15:47
they just don't have all of the features

00:15:45 --> 00:15:49
et and they don't have all of the

00:15:46 --> 00:15:51
features set that they need and the

00:15:48 --> 00:15:54
services within one single institution

00:15:50 --> 00:15:56
that is also a regulated institution so

00:15:53 --> 00:15:58
part of the things that we see Anchorage

00:15:55 --> 00:16:00
doing to the industry is obviously

00:15:57 --> 00:16:02
providing or confidence to these new

00:15:59 --> 00:16:04
investors and providing the confidence

00:16:01 --> 00:16:06
for investors that are not in the

00:16:03 --> 00:16:08
cosystem itself to understand that this

00:16:05 --> 00:16:11
a well regulated institution with

00:16:07 --> 00:16:13
rules and clarity and that it actually

00:16:10 --> 00:16:15
allows them to have the same set of

00:16:12 --> 00:16:17
eatures that they're expecting from the

00:16:14 --> 00:16:20
normal assets that they're accustomed to

00:16:16 --> 00:16:23
investing in they'd say the other thing

00:16:19 --> 00:16:25
there is like it is it is likely that

00:16:22 --> 00:16:26
institutions will hold significant

00:16:24 --> 00:16:28
positions and a lot of these

00:16:25 --> 00:16:29
cryptocurrencies and to the degree that

00:16:27 --> 00:16:32
here are institutions that are holding

00:16:28 --> 00:16:35
significant positions and there are

00:16:31 --> 00:16:37
active participation requirements it's

00:16:34 --> 00:16:39
truly the responsibility of the

00:16:36 --> 00:16:41
custodians to help run the networks like

00:16:38 --> 00:16:44
you're saying whether it's staking or

00:16:40 --> 00:16:47
voting many of these networks have kind

00:16:43 --> 00:16:48
of as a core feature this idea that you

00:16:46 --> 00:16:51
can actually participate in the network

00:16:47 --> 00:16:52
and if a bunch of assets are locked up

00:16:50 --> 00:16:54
in a way that you actually can't

00:16:51 --> 00:16:56
participate and it kind of hurts the

00:16:53 --> 00:16:58
ntire core thesis of what we're trying

00:16:55 --> 00:17:00
to do with crypto the whole idea here is

00:16:57 --> 00:17:02
we need be able to use these things and

00:16:59 --> 00:17:04
use them effectively in the networks and

00:17:01 --> 00:17:05
we're seeing that both with some of the

00:17:03 --> 00:17:07
xisting coins and some of the new ones

00:17:04 --> 00:17:08
that are coming out as well I think a

00:17:06 --> 00:17:11
good example of that is obviously maker

00:17:07 --> 00:17:13
ight we've seen turnouts of votes and

00:17:10 --> 00:17:14
maker that were not ideal from a

00:17:12 --> 00:17:16
percentage of participation perspective

00:17:13 --> 00:17:18
and if you ask investors why they're not

00:17:15 --> 00:17:19
voting they tell you that they don't

00:17:17 --> 00:17:22
have a safe way of doing it and they are

00:17:18 --> 00:17:23
stricted from voting on these networks

00:17:21 --> 00:17:25
and they're restricted from actively

00:17:22 --> 00:17:27
participating because they're afraid of

00:17:24 --> 00:17:29
something very basic which is afraid of

00:17:26 --> 00:17:30
losing all their assets so if you're

00:17:28 --> 00:17:32
afraid of losing your assets you're not

00:17:29 --> 00:17:33
going to actively participate in any of

00:17:31 --> 00:17:35
the or furnace protocols and that's

00:17:32 --> 00:17:37
always going to be left to the niche

00:17:34 --> 00:17:40
players or the retail that have a lot

00:17:36 --> 00:17:42
higher risk tolerance so it should be

00:17:39 --> 00:17:43
completely safe and is easy

00:17:41 --> 00:17:45
is tapping a button on your iPhone

00:17:42 --> 00:17:48
that's correct and so which it actually

00:17:44 --> 00:17:49
also be as secure as the custody of your

00:17:47 --> 00:17:51
funds and should not not be compromised

00:17:48 --> 00:17:53
for the fact that you're voting and so a

00:17:50 --> 00:17:55
lot of these things are very complex of

00:17:52 --> 00:17:56
course and if you think about a lot of

00:17:54 --> 00:17:58
these active participation

00:17:55 --> 00:18:01
a lot of them are for example the case

00:17:57 --> 00:18:04
of maker they're based on solidity smart

00:18:00 --> 00:18:05
contracts they're ERC 20 tokens and

00:18:03 --> 00:18:07
there's a lot of layered complexity on

00:18:04 --> 00:18:10
these contracts themselves so it takes

00:18:06 --> 00:18:12
deep review it takes a lot of work to

00:18:09 --> 00:18:14
understand what are the ways to interact

00:18:11 --> 00:18:15
in a safe manner with these contracts

00:18:13 --> 00:18:17
but actually required to do things that

00:18:14 --> 00:18:19
are very unnatural they allow you who

00:18:16 --> 00:18:21
they they force you to lock your funds

00:18:18 --> 00:18:22
in and then only after your funds are

00:18:20 --> 00:18:24
logged you can actually participate in

00:18:21 --> 00:18:26
the governance decisions and you have to

00:18:23 --> 00:18:28
keep the funds locked while the vote is

00:18:25 --> 00:18:30
ongoing and if you see if you actually

00:18:27 --> 00:18:31
unlock the funds then your percentage of

00:18:29 --> 00:18:32
the vote is actually removed so there's

00:18:30 --> 00:18:36
a lot of complexities and things here

00:18:31 --> 00:18:38
there's just not they don't map well to

00:18:35 --> 00:18:39
the traditional world and so part of the

00:18:37 --> 00:18:41
job of the custodian in Anchorage is

00:18:38 --> 00:18:43
making not only the safest system

00:18:40 --> 00:18:45
possible but a system that is usable

00:18:42 --> 00:18:48
because if a system is not usable people

00:18:44 --> 00:18:49
will just not use it or will skirt the

00:18:47 --> 00:18:52
security components to achieve their

00:18:48 --> 00:18:54
final goal but at the risk of actually

00:18:51 --> 00:18:56
losing all their assets let's talk about

00:18:53 --> 00:19:00
here was recently announcement the

00:18:55 --> 00:19:02
Facebook has launched Co launched what's

00:18:59 --> 00:19:05
called the Lieber Association which you

00:19:01 --> 00:19:07
guys are part of and it's got a lot of

00:19:04 --> 00:19:09
tension and some people think it's

00:19:06 --> 00:19:11
exciting some people think it's not as

00:19:08 --> 00:19:13
exciting maybe in the crypto world what

00:19:10 --> 00:19:15
you know can you tell us why you decided

00:19:12 --> 00:19:18
to do that and and what you think of it

00:19:14 --> 00:19:20
yeah absolutely so it's actually it's

00:19:17 --> 00:19:22
interesting we've been involved in the

00:19:19 --> 00:19:24
initiative even before it was called

00:19:21 --> 00:19:26
libres so we've been talking to facebook

00:19:23 --> 00:19:29
about it for about a year and a half now

00:19:25 --> 00:19:30
so it's been a long long time basically

00:19:28 --> 00:19:32
when there was only two people on the

00:19:29 --> 00:19:35
team which now is as you know a very big

00:19:31 --> 00:19:36
team that is working on this on this

00:19:34 --> 00:19:38
initiative I would definitely not say

00:19:35 --> 00:19:40
that it's Facebook that is launching it

00:19:37 --> 00:19:42
and I think that one of the most

00:19:39 --> 00:19:44
exciting things about this initiative is

00:19:41 --> 00:19:46
the fact that there's this Libre

00:19:43 --> 00:19:49
Association which is an independent

00:19:45 --> 00:19:52
Association it is headquartered in

00:19:48 --> 00:19:54
Geneva in Switzerland and it has its

00:19:51 --> 00:19:56
independent from Facebook

00:19:53 --> 00:19:59
is being the operations are being funded

00:19:55 --> 00:20:01
by the members that are participating in

00:19:58 --> 00:20:02
the actual lira sociation and it's a

00:20:00 --> 00:20:04
complete independent entity that is

00:20:01 --> 00:20:05
going to actually solve a lot of the

00:20:03 --> 00:20:08
problems that we've seen on governance

00:20:04 --> 00:20:09
of protocols before and so one of the

00:20:07 --> 00:20:13
reasons why we're excited to participate

00:20:08 --> 00:20:16
is we like Facebook believe in creating

00:20:12 --> 00:20:19
open financial networks and there's this

00:20:15 --> 00:20:21
idea that we could have a global

00:20:18 --> 00:20:23
currency that can actually go across

00:20:20 --> 00:20:26
borders that is digital there's never

00:20:22 --> 00:20:29
been a truly digital global currency

00:20:25 --> 00:20:32
that is have massive use and has

00:20:28 --> 00:20:34
adoption and so part of the reasons why

00:20:32 --> 00:20:37
we're excited is because a lot of the

00:20:33 --> 00:20:39
problems that we see on the current

00:20:36 --> 00:20:41
assets that have somehow hindered

00:20:38 --> 00:20:45
adoption are being addressed by Libre

00:20:40 --> 00:20:48
the first one is volatility so one of

00:20:44 --> 00:20:50
the things that people say about assets

00:20:47 --> 00:20:52
that are store value is that they are

00:20:49 --> 00:20:53
not a meeting with exchange people want

00:20:51 --> 00:20:55
o hold on to them instead of

00:20:52 --> 00:20:56
transacting they want to hold on to them

00:20:54 --> 00:20:58
because they believe it will depreciate

00:20:55 --> 00:21:00
in value and so the way that it Libre

00:20:57 --> 00:21:03
solves that like BIC I mean we're big

00:20:59 --> 00:21:04
fans of Bitcoin but everyone talks about

00:21:02 --> 00:21:05
he person who bought you know the piece

00:21:03 --> 00:21:07
of a Bitcoin that would now be worth a

00:21:05 --> 00:21:09
million dollars and so why would you

00:21:06 --> 00:21:11
want to spend something if you believe

00:21:08 --> 00:21:12
it's gonna go up in value that's exactly

00:21:10 --> 00:21:14
right and so that's obviously a problem

00:21:11 --> 00:21:16
that you need to solve if you want an

00:21:13 --> 00:21:18
actual global currency which is very

00:21:15 --> 00:21:20
much the the explicit goal of Libra is

00:21:17 --> 00:21:21
to have a global currency that can be

00:21:19 --> 00:21:23
accepted it can bring financial

00:21:20 --> 00:21:25
inclusion to a lot of people that

00:21:22 --> 00:21:26
currently don't have access to it so the

00:21:24 --> 00:21:29
way that it solved is there's it's a

00:21:25 --> 00:21:31
fully backed global currency and it's

00:21:28 --> 00:21:34
all by having what we call the Libra

00:21:30 --> 00:21:37
reserve in which there's governments

00:21:33 --> 00:21:39
issued bonds and other stable assets and

00:21:36 --> 00:21:41
US dollars and pounds and euros are

00:21:38 --> 00:21:44
backing the reserve and so it will not

00:21:40 --> 00:21:46
rack it is not a stable currency in the

00:21:43 --> 00:21:48
sense that is not pegged to US dollar or

00:21:45 --> 00:21:50
to one specific asset and it's actually

00:21:47 --> 00:21:53
independent from any one asset but it

00:21:49 --> 00:21:56
has stability because it's backed by low

00:21:52 --> 00:21:58
volatility assets so that's one of the

00:21:55 --> 00:22:01
big things that Libra switch is trying

00:21:57 --> 00:22:05
to achieve that is very exciting second

00:22:00 --> 00:22:06
thing is obviously on scalability so

00:22:04 --> 00:22:08
number of transaction

00:22:05 --> 00:22:10
that the current blockchains that are

00:22:07 --> 00:22:13
completely permissionless can do is on

00:22:09 --> 00:22:15
the dozens of transactions a second and

00:22:12 --> 00:22:18
one of the excited stated goals of the

00:22:14 --> 00:22:20
Libra box chain is can we scale to

00:22:17 --> 00:22:22
thousands several thousands of

00:22:19 --> 00:22:24
transactions per second to get closer to

00:22:21 --> 00:22:26
what an actual global currency requires

00:22:23 --> 00:22:28
if you don't have thousands of

00:22:25 --> 00:22:30
transactions per second this is a common

00:22:27 --> 00:22:32
criticism you can actually support the

00:22:29 --> 00:22:34
load on all of these networks the four

00:22:31 --> 00:22:36
the third thing that is incredibly

00:22:33 --> 00:22:37
exciting and might be the most exciting

00:22:35 --> 00:22:39
thing about Libra is that the players

00:22:36 --> 00:22:42
that are coming to the Association

00:22:38 --> 00:22:43
around the table already have billions

00:22:41 --> 00:22:45
of users they already have the

00:22:42 --> 00:22:47
relationships with billions of users

00:22:44 --> 00:22:48
they also are merchants in their own

00:22:46 --> 00:22:50
right so they can actually incentivize

00:22:47 --> 00:22:52
people to participate in this global

00:22:49 --> 00:22:54
currency and so they have effectively

00:22:51 --> 00:22:56
solved the bootstrapping problem the

00:22:53 --> 00:22:57
chicken-and-egg problem of do we first

00:22:55 --> 00:22:59
have a merchant adoption adoption then

00:22:57 --> 00:23:01
users or do we first have users in debt

00:22:58 --> 00:23:03
merchant adoption how about both at the

00:23:00 --> 00:23:05
same time and so that is a very unique

00:23:02 --> 00:23:07
position to be in and why part of the

00:23:04 --> 00:23:10
xciting opportunity is there I would

00:23:06 --> 00:23:11
also add the fourth thing which is from

00:23:09 --> 00:23:13
y understanding

00:23:10 --> 00:23:15
Weber has made a lot of what I think are

00:23:12 --> 00:23:16
correct choices in the design of the

00:23:14 --> 00:23:19
blockchain including making the code

00:23:15 --> 00:23:20
open-source and so and one of the

00:23:18 --> 00:23:23
features of a well designed blockchain

00:23:19 --> 00:23:24
is no matter what you might think of you

00:23:22 --> 00:23:26
know Facebook for example if you don't

00:23:23 --> 00:23:28
rust Facebook or whatever it if the

00:23:25 --> 00:23:31
blockchain is correctly designed and the

00:23:27 --> 00:23:32
code is open source and auditable you

00:23:30 --> 00:23:36
don't need to trust them right you just

00:23:31 --> 00:23:37
have to trust the code and at least as I

00:23:35 --> 00:23:40
understand it the decisions they've made

00:23:36 --> 00:23:42
are consistent with that and also

00:23:39 --> 00:23:45
consistent with allowing third party

00:23:41 --> 00:23:47
developers wallet makers etc to build on

00:23:44 --> 00:23:49
top of that blockchain in a

00:23:46 --> 00:23:50
permissionless way that's right and I

00:23:48 --> 00:23:52
think one of the things that we have to

00:23:49 --> 00:23:54
realize is look from a perspective of

00:23:51 --> 00:23:56
Anchorage Anchorage is completely

00:23:53 --> 00:23:59
agnostic in terms of assets we support

00:23:55 --> 00:24:00
all assets we actually fundamentally

00:23:58 --> 00:24:02
believe that the custodian should not

00:23:59 --> 00:24:04
dictate the investment strategy of the

00:24:01 --> 00:24:06
investor and so we support dozens of

00:24:03 --> 00:24:08
assets and all of them have equal

00:24:05 --> 00:24:12
importance within anchorage itself

00:24:07 --> 00:24:14
however it is very fair to say that the

00:24:11 --> 00:24:17
creation of a global currency with open

00:24:13 --> 00:24:17
source software with a new type of

00:24:16 --> 00:24:19
consent

00:24:16 --> 00:24:21
protocol that actually gets hired to

00:24:18 --> 00:24:23
boot and actually attempts real attempt

00:24:20 --> 00:24:25
o solve issues around governance and

00:24:22 --> 00:24:27
around civility of the network is really

00:24:24 --> 00:24:29
a raising ty that raises all boats so we

00:24:26 --> 00:24:31
do see this as something that is just

00:24:28 --> 00:24:32
beneficial for the ecosystem not

00:24:30 --> 00:24:34
competing with any of the current assets

00:24:31 --> 00:24:36
not attempting to replace any of the

00:24:33 --> 00:24:38
current assets but really just adding to

00:24:35 --> 00:24:40
the space creating yet another attempt

00:24:37 --> 00:24:42
add in this one a very good one with

00:24:39 --> 00:24:45
very good backers at creating this dream

00:24:41 --> 00:24:46
of a global currency I think I think I

00:24:44 --> 00:24:48
just say the the other thing that's

00:24:45 --> 00:24:50
really exciting about it from from our

00:24:47 --> 00:24:53
background we've come from places that

00:24:49 --> 00:24:55
were just incredibly focused on consumer

00:24:52 --> 00:24:57
usability if you look at look at square

00:24:54 --> 00:24:59
and the simplicity that they kind of

00:24:56 --> 00:25:01
weaved through their entire product

00:24:58 --> 00:25:03
experience the same story at docker for

00:25:00 --> 00:25:04
developers just making things easy to

00:25:02 --> 00:25:06
use it's one of the things we haven't

00:25:03 --> 00:25:08
quite gotten to the point where that's

00:25:05 --> 00:25:10
really solved within within crypto

00:25:07 --> 00:25:12
within blockchain but it is clear that

00:25:09 --> 00:25:14
he people in the labor association are

00:25:11 --> 00:25:16
organizations that make that their bread

00:25:13 --> 00:25:20
and butter just making things very easy

00:25:15 --> 00:25:22
to use and that is clearly going to be

00:25:19 --> 00:25:24
both good for the Liebherr Association

00:25:21 --> 00:25:26
itself and the in the token there but

00:25:23 --> 00:25:29
also for the rest of cryptocurrency to

00:25:25 --> 00:25:30
have kind of like usable interaction

00:25:28 --> 00:25:32
where people on a day-to-day basis can

00:25:29 --> 00:25:36
actually be experiencing cryptocurrency

00:25:31 --> 00:25:38
to the the Raizel or eyes all boats kind

00:25:35 --> 00:25:40
of analogy I think it's very important

00:25:37 --> 00:25:41
o get that mainstream usability I think

00:25:39 --> 00:25:44
one analogy might be a o L on the

00:25:40 --> 00:25:47
internet so AOL you know they sent out

00:25:43 --> 00:25:48
hundreds of millions of disks cd-roms to

00:25:46 --> 00:25:51
give people you know the abilities it

00:25:47 --> 00:25:53
was a first experience going online

00:25:50 --> 00:25:55
downloading software that let them get

00:25:52 --> 00:25:58
online they got to experience you know

00:25:54 --> 00:26:00
sort of chat rooms and browsing and then

00:25:57 --> 00:26:02
you know and then that was sort of a

00:25:59 --> 00:26:03
gateway into the broader Internet and

00:26:01 --> 00:26:07
all the other things that we now have

00:26:02 --> 00:26:11
today and so you know I the way I view

00:26:06 --> 00:26:13
it is that you know this it's very it

00:26:10 --> 00:26:14
his could be you know you get wallets

00:26:12 --> 00:26:16
in the hands of billions of people you

00:26:13 --> 00:26:19
get you know you help evangelize these

00:26:15 --> 00:26:23
concepts with governments and regulators

00:26:18 --> 00:26:25
and you know various other large

00:26:22 --> 00:26:26
companies and banks and sort of all

00:26:24 --> 00:26:26
these people start to sort of you know

00:26:25 --> 00:26:28
you

00:26:25 --> 00:26:30
normalize that you mainstream it and

00:26:27 --> 00:26:33
then that those same resources and

00:26:29 --> 00:26:35
attitudes can then apply to all of the

00:26:32 --> 00:26:36
other kinds of interesting

00:26:34 --> 00:26:39
cryptocurrencies that we're all big fans

00:26:35 --> 00:26:41
of and so I think it could be a really

00:26:38 --> 00:26:44
big moment to to grow the entire space

00:26:40 --> 00:26:45
totally agreed in from our side as you

00:26:43 --> 00:26:47
know Anchorage deals with a lot of

00:26:44 --> 00:26:48
institutions and one of the things that

00:26:46 --> 00:26:51
is already clear is that there's a lot

00:26:47 --> 00:26:53
of excitement of players such as

00:26:50 --> 00:26:55
Facebook and such as stripe and such as

00:26:52 --> 00:26:57
PayPal coming into the space in a very

00:26:54 --> 00:26:58
meaningful way and participating these

00:26:56 --> 00:27:00
opportunities because it illegitimate is

00:26:57 --> 00:27:03
the whole space legitimizes their

00:26:59 --> 00:27:04
investment in cryptocurrency that has

00:27:02 --> 00:27:06
the goal of being a global currency and

00:27:03 --> 00:27:09
all of their other investments now look

00:27:05 --> 00:27:10
like they're different risk profiles but

00:27:08 --> 00:27:12
hey're equally legitimate and so that

00:27:09 --> 00:27:13
just helps us a lot the fact that

00:27:11 --> 00:27:15
Facebook is coming out with this and

00:27:12 --> 00:27:17
bootstrap this process and now it's

00:27:14 --> 00:27:18
being handed off to the Liebherr

00:27:16 --> 00:27:20
Association it is also a very thoughtful

00:27:17 --> 00:27:22
way of doing governance and actually

00:27:19 --> 00:27:24
sets a new standard for what the

00:27:21 --> 00:27:26
transparency is and what it should look

00:27:23 --> 00:27:28
like for other or further equipt of

00:27:25 --> 00:27:31
currency so that's pretty exciting - so

00:27:27 --> 00:27:32
tell me more about what you're gonna be

00:27:30 --> 00:27:34
doing as a founding member of the

00:27:31 --> 00:27:35
Liebherr association so as a founding

00:27:33 --> 00:27:37
member again we've been involved this

00:27:34 --> 00:27:38
for almost a year and a half but as a

00:27:36 --> 00:27:40
founding member of the Liebherr

00:27:37 --> 00:27:42
Association we're going to do three main

00:27:39 --> 00:27:43
things first one is we're gonna be

00:27:41 --> 00:27:45
running a node so we're going to

00:27:42 --> 00:27:47
actively be running the software on the

00:27:44 --> 00:27:49
network we're gonna be one of the

00:27:46 --> 00:27:51
hundred nodes on this proof of stake

00:27:48 --> 00:27:53
byzantine full tolerant protocol the

00:27:50 --> 00:27:55
Libra blockchain and believer of EFT

00:27:52 --> 00:27:57
which is by the way a modification of

00:27:54 --> 00:27:58
hot stuff and so we are gonna be running

00:27:56 --> 00:28:00
a node we're gonna be sending

00:27:57 --> 00:28:01
transactions and just help the network

00:27:59 --> 00:28:03
converge and get the consensus the

00:28:00 --> 00:28:05
second component is we're gonna be

00:28:02 --> 00:28:06
actively involved in the decisions

00:28:04 --> 00:28:08
governance decisions of the Liebherr

00:28:05 --> 00:28:11
association so there's a hundred members

00:28:07 --> 00:28:13
on the association each of the members

00:28:10 --> 00:28:16
gets one vote so encourage is going to

00:28:12 --> 00:28:18
have one vote any concern that any one

00:28:15 --> 00:28:21
institution is gonna have more sway into

00:28:17 --> 00:28:23
the Association is unfounded because all

00:28:20 --> 00:28:24
of the associations will have the exact

00:28:22 --> 00:28:26
same power all of them will have one

00:28:23 --> 00:28:30
thought in these vote these members

00:28:25 --> 00:28:33
include investors like us crypto

00:28:29 --> 00:28:35
companies like you guys are NGO NGOs

00:28:32 --> 00:28:38
you know consumer Internet companies

00:28:34 --> 00:28:40
like uber and lyft universities they

00:28:37 --> 00:28:42
also include a social impact partners

00:28:39 --> 00:28:42
which are people that are just focused

00:28:41 --> 00:28:44
on different things than we are

00:28:42 --> 00:28:47
deliberately chosen to be kind of a

00:28:43 --> 00:28:50
balance that's exactly and so no single

00:28:46 --> 00:28:51
ntity will be able to overpower the

00:28:49 --> 00:28:53
other entities will all be in equal

00:28:50 --> 00:28:55
footing in terms of governance and part

00:28:52 --> 00:28:56
of the involvement of Anchorage and why

00:28:54 --> 00:28:59
we were selected in the first place is

00:28:55 --> 00:29:01
the fact that as you'd expect we bring

00:28:58 --> 00:29:03
deep expertise in the areas that are

00:29:00 --> 00:29:05
necessary for a blockchain to be

00:29:02 --> 00:29:09
successful so we bring deep expertise in

00:29:04 --> 00:29:10
distributed systems and security we

00:29:08 --> 00:29:12
bring deep expertise in cryptography

00:29:09 --> 00:29:14
open source governance I mean a lot of

00:29:11 --> 00:29:15
the work we did a doctor was on open

00:29:13 --> 00:29:18
source projects that were kind of

00:29:14 --> 00:29:20
community owned and kind of used the

00:29:17 --> 00:29:23
same kind of consensus informal

00:29:19 --> 00:29:26
consensus between people that Libre will

00:29:22 --> 00:29:29
be doing in terms of running things and

00:29:25 --> 00:29:31
keeping it kind of a Commons that

00:29:28 --> 00:29:32
everyone owns that's right ultimately

00:29:30 --> 00:29:33
the success of this network will not

00:29:31 --> 00:29:37
just be from a technical underpinning

00:29:33 --> 00:29:38
but also be the Association itself and

00:29:36 --> 00:29:40
how the governance decisions that are

00:29:37 --> 00:29:41
gonna be driven forward so we've been

00:29:39 --> 00:29:43
giving feedback on the papers I've been

00:29:40 --> 00:29:45
coming out on the technical components

00:29:42 --> 00:29:48
non-technical opponents and so we've

00:29:44 --> 00:29:49
been big fans since the beginning and

00:29:47 --> 00:29:52
we're gonna be continuously involved in

00:29:48 --> 00:29:54
itiative great thanks for joining the

00:29:51 --> 00:29:56
a 16z youtube channel thank you guys for

00:29:53 --> 00:29:57
being here thanks for having us thanks

00:29:55 --> 00:30:13
for having us Chris

00:29:56 --> 00:30:13
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
