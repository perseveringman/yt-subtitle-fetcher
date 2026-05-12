---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "3NL0ThdvWMU"
title: "Security and Privacy for Crypto with Zero-Knowledge Proofs"
video_url: "https://www.youtube.com/watch?v=3NL0ThdvWMU"
thumbnail_url: "https://i.ytimg.com/vi/3NL0ThdvWMU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=3NL0ThdvWMU"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-08-29T22:49:46.000Z"
upload_date: "2019-08-29"
duration_seconds: 871
duration_human: "14:31"
view_count: 19864
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:27:29.900Z"
---

# Security and Privacy for Crypto with Zero-Knowledge Proofs

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=3NL0ThdvWMU
- video_id: 3NL0ThdvWMU
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-08-29T22:49:46.000Z
- upload_date: 2019-08-29
- duration: 14:31
- view_count: 19864
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: security, privacy, cryptography, internet, innovation, blockchains, blockchain, decentralization, zk-proofs, zero knowledge proof
- categories: Science & Technology

## Description

The internet led to all sorts of applications that have changed people’s lives, connecting people around the world in new ways and at new scale. But that only really happened once we figured out security within the network -- when we went from "http" to "https", so to speak. When it comes to crypto, how do we solve the problem of sharing information when you have a decentralized network -- and don’t have someone in the middle to verify the information?

Zero-knowledge proofs are one way. They have been around for 30 years, but entrepreneur Zooko Wilcox, founder and CEO of Electric Coin Company/ Zcash -- and cryptography and information security technologist (known for "Zooko's Triangle", among other things) -- is responsible for pioneering the zero-knowledge proof in practice with Zcash, partnering with major companies such as J.P. Morgan and Mastercard to do so. In this talk, he shares what they are and how they work... including a live demo.

This talk was originally delivered at the inaugural a16z Crypto Regulatory Summit 2019, which brings together leading crypto experts and builders, other technologists, academics, industry executives, and government officials -- along with forward-thinking regulators -- to foster collaboration and the exchange of ideas around this important emerging industry.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:08 --> 00:00:15
cryptography is the science of

00:00:11 --> 00:00:17
protecting messages even in the face of

00:00:14 --> 00:00:20
adversaries and it's being used for

00:00:16 --> 00:00:22
thousands of years at least maybe longer

00:00:19 --> 00:00:25
but we know that Julius Caesar 2,000

00:00:21 --> 00:00:27
years ago invented cryptograms to

00:00:24 --> 00:00:30
protect messages sent from one general

00:00:26 --> 00:00:33
to another against being intercepted in

00:00:29 --> 00:00:36
the middle in World War two the creation

00:00:32 --> 00:00:38
and cracking of those kind of diplomatic

00:00:35 --> 00:00:41
and military messages was important to

00:00:37 --> 00:00:43
the course of the war and the founder of

00:00:40 --> 00:00:46
computer science Alan Turing was also a

00:00:42 --> 00:00:49
pivotal player in cracking access codes

00:00:45 --> 00:00:51
during World War two and today the the

00:00:48 --> 00:00:53
quivalent of the nobel prize for

00:00:50 --> 00:00:56
computer science is named after him it's

00:00:52 --> 00:00:58
called the curing award and this

00:00:55 --> 00:01:01
continued until the present day that

00:00:57 --> 00:01:03
cryptography was a military secret until

00:01:00 --> 00:01:05
the advent of the Internet this is the

00:01:02 --> 00:01:09
first time with the advent of Netscape

00:01:04 --> 00:01:10
in 1994 was the first time that everyone

00:01:08 --> 00:01:13
in the world could start connecting to

00:01:09 --> 00:01:15
the internet and using it and it's also

00:01:12 --> 00:01:18
the first time that cryptography got

00:01:14 --> 00:01:21
used not for protecting the messages of

00:01:17 --> 00:01:23
generals and leaders but of protecting

00:01:20 --> 00:01:25
end users who were just connecting so

00:01:22 --> 00:01:30
the two points are now a web browser

00:01:24 --> 00:01:34
like Netscape and a web server and when

00:01:29 --> 00:01:37
this came out and Netscape came out it

00:01:33 --> 00:01:39
was controversial there was a faction

00:01:36 --> 00:01:41
within the US government led by the NSA

00:01:38 --> 00:01:44
that objected to the development of

00:01:40 --> 00:01:47
HTTPS this is the this is the encryption

00:01:43 --> 00:01:51
built into Netscape and at first the

00:01:46 --> 00:01:53
debate was framed in terms of civil

00:01:50 --> 00:01:55
iberties versus national security and

00:01:52 --> 00:01:58
civil liberties versus law enforcement

00:01:54 --> 00:02:01
and that policy struggle in the United

00:01:57 --> 00:02:06
States raged for at least 10 years but

00:02:00 --> 00:02:09
oday the opposite is true for reasons

00:02:05 --> 00:02:11
of security you're required to use HTTPS

00:02:08 --> 00:02:13
if you run any government website or

00:02:10 --> 00:02:16
even if you're a private web a private

00:02:12 --> 00:02:18
service a private business and you

00:02:15 --> 00:02:21
manage your customers financial data or

00:02:17 --> 00:02:22
health data or if children could access

00:02:20 --> 00:02:23
your service or for various other

00:02:21 --> 00:02:25
easons

00:02:22 --> 00:02:27
required to use HTTPS so there's this

00:02:24 --> 00:02:29
interesting transition from it being

00:02:26 --> 00:02:31
opposed by certain factions within the

00:02:28 --> 00:02:33
US government to it being required over

00:02:30 --> 00:02:35
the course of about ten years and the

00:02:32 --> 00:02:37
big reason for that transition is that

00:02:34 --> 00:02:38
it turns out in that two-point system

00:02:36 --> 00:02:40
between the web server and the web

00:02:37 --> 00:02:45
rowser that web server became the

00:02:39 --> 00:02:49
center of our economy and encryption is

00:02:44 --> 00:02:52
became necessary for business purposes

00:02:48 --> 00:02:55
o this is just the basic fact about the

00:02:51 --> 00:02:57
original web protocol in 1993 and the

00:02:54 --> 00:03:01
encrypted version of it is that

00:02:57 --> 00:03:03
hackers can see what people do if they

00:03:00 --> 00:03:06
post on the the old web protocol and

00:03:03 --> 00:03:08
with the encrypted version both at the

00:03:05 --> 00:03:12
ndpoints can see but nobody else can

00:03:07 --> 00:03:14
see well that was great this is a

00:03:11 --> 00:03:15
historic development and it allowed the

00:03:13 --> 00:03:16
creation of the Internet for the

00:03:14 --> 00:03:19
Internet to be the center of the economy

00:03:15 --> 00:03:22
and for it to span the globe required

00:03:18 --> 00:03:24
this encryption but you can't apply this

00:03:21 --> 00:03:26
concretion to a blockchain because all

00:03:23 --> 00:03:27
this encryption from Julius Caesar to

00:03:25 --> 00:03:30
Alan Turing to Netscape is

00:03:26 --> 00:03:32
point-to-point and the whole the whole

00:03:29 --> 00:03:34
value of a blockchain is that whatever

00:03:31 --> 00:03:37
you're doing on it buying goods and

00:03:33 --> 00:03:39
services notarizing documents

00:03:36 --> 00:03:42
transferring deeds or anything else you

00:03:38 --> 00:03:43
need everyone even unauthorized just

00:03:41 --> 00:03:45
random people that connect to the

00:03:42 --> 00:03:47
blockchain to have a guarantee that

00:03:44 --> 00:03:48
everything that's being done on there is

00:03:46 --> 00:03:50
correct and this just kind of

00:03:47 --> 00:03:52
contradicts the point-to-point

00:03:49 --> 00:03:53
encryption notion because how can you

00:03:51 --> 00:03:54
tell if something's correct if it's

00:03:52 --> 00:03:57
encrypted

00:03:53 --> 00:04:00
so when Satoshi Nakamoto was inventing

00:03:56 --> 00:04:01
Bitcoin he tried to figure out how to

00:03:59 --> 00:04:03
add an encryption into it and he

00:04:00 --> 00:04:07
couldn't figure it out it didn't fit

00:04:02 --> 00:04:08
because back then ten whole years ago we

00:04:06 --> 00:04:13
didn't have good enough zero knowledge

00:04:07 --> 00:04:18
proof zero knowledge proof is a crazy

00:04:12 --> 00:04:21
idea it's I can prove the truth of some

00:04:17 --> 00:04:23
facts to you without telling you the

00:04:20 --> 00:04:25
facts without revealing the data I can

00:04:22 --> 00:04:29
prove something about some data without

00:04:24 --> 00:04:31
revealing the data that's such a weird

00:04:28 --> 00:04:33
idea that nobody really thought it made

00:04:30 --> 00:04:35
sense or was possible until some

00:04:32 --> 00:04:37
cryptographers some computer scientists

00:04:34 --> 00:04:40
lash cryptographers

00:04:36 --> 00:04:44
discovered it in the 1980s and for

00:04:39 --> 00:04:46
discovering that this was possible they

00:04:43 --> 00:04:48
got the Alan Turing a prize for the

00:04:45 --> 00:04:52
biggest most important advance in

00:04:47 --> 00:04:53
computer science but when Bitcoin came

00:04:51 --> 00:04:59
along it still wasn't practical no one

00:04:53 --> 00:05:02
knew how to use it in reality I'm gonna

00:04:58 --> 00:05:05
do a demo now to give you an idea of

00:05:01 --> 00:05:09
what what I mean by you can prove a fact

00:05:04 --> 00:05:12
about something without revealing it so

00:05:08 --> 00:05:15
here we have Jesse from a 16z who's

00:05:11 --> 00:05:17
gonna serve as my demo helper so he's

00:05:14 --> 00:05:19
got a bunch of bits of data on cards

00:05:16 --> 00:05:23
here he's show him the bits yep he's got

00:05:18 --> 00:05:25
a bunch of cards and I'm gonna lay them

00:05:22 --> 00:05:29
out okay you wanna tell your thing I'm

00:05:24 --> 00:05:32
gonna I'm gonna turn my back and Jesse's

00:05:28 --> 00:05:34
gonna pick two of those bits okay so you

00:05:31 --> 00:05:35
all know make sure you show the folks up

00:05:33 --> 00:05:37
there too

00:05:34 --> 00:05:43
so you all know what the bits are but I

00:05:36 --> 00:05:45
don't tell me when you've got two bits I

00:05:42 --> 00:05:49
don't know if you should like have

00:05:44 --> 00:05:52
people vote on which one to pick up or

00:05:48 --> 00:05:54
anyway okay are you ready no don't turn

00:05:51 --> 00:05:56
around yet okay I'm gonna flip these

00:05:53 --> 00:06:01
over oh yeah because I can't see the

00:05:55 --> 00:06:05
other bits okay so everyone see what

00:06:00 --> 00:06:09
I've got here all right Zuko turn around

00:06:04 --> 00:06:11
okay so I can't see the bits now are

00:06:08 --> 00:06:12
those two bits the same at each other or

00:06:10 --> 00:06:16
are they different from each other Jesse

00:06:11 --> 00:06:19
they're different I don't believe you I

00:06:15 --> 00:06:20
think you actually picked two zeroes and

00:06:18 --> 00:06:24
you're like making a fool of me in front

00:06:19 --> 00:06:25
of everyone so why don't you just show

00:06:23 --> 00:06:28
me the bits and then I'll know that

00:06:24 --> 00:06:31
you're telling the truth can't do that

00:06:27 --> 00:06:33
all right so how are you gonna prove to

00:06:30 --> 00:06:37
me that they're different without giving

00:06:32 --> 00:06:39
me any information about the bits well I

00:06:36 --> 00:06:41
don't know okay I got an idea here's

00:06:38 --> 00:06:45
what we'll do I'll hold on to them but I

00:06:40 --> 00:06:48
won't look okay now I'm gonna put them

00:06:44 --> 00:06:50
behind my back and then all these are

00:06:47 --> 00:06:51
swap them where I won't

00:06:49 --> 00:06:53
and if they're really different you'll

00:06:50 --> 00:06:55
be able to tell but if they're both zero

00:06:52 --> 00:06:59
then I'm gonna catch you in this why

00:06:54 --> 00:07:04
ready okay okay

00:06:58 --> 00:07:05
did I swap them no all right so I didn't

00:07:03 --> 00:07:07
swap them that time but I think they're

00:07:04 --> 00:07:09
actually both zero and you're just

00:07:06 --> 00:07:16
bluffing right so you just guessed so

00:07:08 --> 00:07:20
hold on did I saw from that time yes

00:07:15 --> 00:07:22
okay you got me twice in a row but you

00:07:19 --> 00:07:24
could be bluffing right so let's do it

00:07:21 --> 00:07:24
100 more times

00:07:24 --> 00:07:30
no all right 97 more times this is why

00:07:28 --> 00:07:33
we use computers for zero knowledge

00:07:29 --> 00:07:36
proof sis it takes too long all right

00:07:32 --> 00:07:39
hanks now hold on let me finish the

00:07:35 --> 00:07:41
lesson we just learned is after we've

00:07:38 --> 00:07:44
done it a hundred times I'm really

00:07:40 --> 00:07:46
convinced that they're different right

00:07:43 --> 00:07:48
because if they were the same he

00:07:45 --> 00:07:50
wouldn't have been able to do that so

00:07:47 --> 00:07:51
that's a proof it's been proven to me

00:07:49 --> 00:07:53
that these two bits are different from

00:07:50 --> 00:07:56
each other but it's a zero knowledge

00:07:52 --> 00:07:58
proof because I have learned zero

00:07:55 --> 00:08:00
information about what's on here if no

00:07:57 --> 00:08:02
matter if we did it a thousand times I'm

00:07:59 --> 00:08:04
no closer to guessing whether this is a

00:08:01 --> 00:08:08
zero or whether this is a one he never

00:08:03 --> 00:08:10
showed it to me and I didn't learn any

00:08:07 --> 00:08:12
hints about what's on here all I know is

00:08:09 --> 00:08:14
the one fact that he wanted to prove

00:08:11 --> 00:08:16
which is that they're different so

00:08:13 --> 00:08:19
that's a zero knowledge proof thanks

00:08:15 --> 00:08:21
Jesse Thanks I'll take my data

00:08:18 --> 00:08:26
[Applause]

00:08:20 --> 00:08:28
so now for potential applications of

00:08:25 --> 00:08:30
zero knowledge proof like I say it was a

00:08:27 --> 00:08:32
very important scientific discovery but

00:08:29 --> 00:08:37
it didn't get practical application

00:08:31 --> 00:08:38
until my company implemented it we made

00:08:36 --> 00:08:40
some scientific advances that made it

00:08:37 --> 00:08:42
sufficiently practical and we

00:08:39 --> 00:08:44
implemented it and deployed it to the

00:08:41 --> 00:08:47
world in this cryptocurrency called Z

00:08:43 --> 00:08:50
cash so Z cash uses zero knowledge C

00:08:46 --> 00:08:53
cash is just like Bitcoin except that it

00:08:49 --> 00:08:55
uses zero knowledge proof to prove the

00:08:52 --> 00:08:58
correctness of the transactions that go

00:08:54 --> 00:09:01
into the blockchain and that allows us

00:08:57 --> 00:09:03
to encrypt the transactions so in a

00:09:00 --> 00:09:05
similar way to the difference between

00:09:02 --> 00:09:09
HTTP and HTTPS the difference between

00:09:04 --> 00:09:10
Bitcoin and Z cash is that if you use

00:09:08 --> 00:09:13
Bitcoin for something it has this

00:09:09 --> 00:09:16
transparency property which is great we

00:09:12 --> 00:09:18
like transparency but it also means that

00:09:15 --> 00:09:21
if you were to use Bitcoin to like

00:09:17 --> 00:09:24
purchase a healthcare service to pay for

00:09:20 --> 00:09:26
a healthcare service of any kind you

00:09:23 --> 00:09:29
would be vulnerable both then and at any

00:09:25 --> 00:09:31
later point of someone using information

00:09:28 --> 00:09:34
out of the Bitcoin blockchain to figure

00:09:30 --> 00:09:38
out what you did and likewise

00:09:33 --> 00:09:41
similarly with HTTP to HTTPS if you use

00:09:37 --> 00:09:43
a blockchain for your business if you

00:09:40 --> 00:09:45
accept payments if you use it for

00:09:42 --> 00:09:48
business records or anything like that

00:09:44 --> 00:09:51
you require security for your business

00:09:47 --> 00:09:52
data that was the first deployment of

00:09:50 --> 00:09:54
zero knowledge proof was to make an

00:09:51 --> 00:09:59
encrypted blockchain which is he cash

00:09:53 --> 00:10:01
now the next one is not yet out yet is

00:09:58 --> 00:10:03
there are further applications of zero

00:10:00 --> 00:10:05
knowledge proof since since the cache

00:10:02 --> 00:10:08
works in practice this has served as a

00:10:04 --> 00:10:11
demonstration that the the technology is

00:10:07 --> 00:10:14
mature enough this is a picture of the

00:10:10 --> 00:10:17
Internet in 1983 there were like 30

00:10:13 --> 00:10:19
computers on the internet and this is

00:10:16 --> 00:10:22
also an analogy for blockchains are

00:10:18 --> 00:10:25
today like doctrinal rule I mentioned

00:10:21 --> 00:10:27
blockchain just don't scale so far you

00:10:24 --> 00:10:30
can only have like seven transactions a

00:10:26 --> 00:10:32
second and then the thing is full and

00:10:29 --> 00:10:34
here's like where we need to go this is

00:10:31 --> 00:10:37
a visualization of the Internet

00:10:33 --> 00:10:39
oday it's everywhere it's for everyone

00:10:36 --> 00:10:41
and that's the vision of blockchain the

00:10:38 --> 00:10:44
whole reason why we're motivated by this

00:10:40 --> 00:10:46
to make a more inclusive and

00:10:43 --> 00:10:47
equitable world and so in order to do

00:10:45 --> 00:10:50
that in order to let everyone

00:10:46 --> 00:10:52
participate we're gonna have to scale it

00:10:49 --> 00:10:55
up and it turns out zero knowledge proof

00:10:51 --> 00:10:57
smite be breakthrough to solve the

00:10:54 --> 00:11:00
scaling problem that has stopped all the

00:10:56 --> 00:11:03
blockchain so far because the scaling

00:10:59 --> 00:11:04
problem is you remember everybody wants

00:11:02 --> 00:11:07
to be sure of everything that goes into

00:11:03 --> 00:11:08
the blockchain that means the more

00:11:06 --> 00:11:09
people are involved and the more things

00:11:07 --> 00:11:12
go into the block chain the more

00:11:08 --> 00:11:14
overloaded everyone gets well a zero

00:11:11 --> 00:11:16
knowledge proof could allow you to

00:11:13 --> 00:11:19
efficiently prove that everything that

00:11:15 --> 00:11:21
went into this blockchain is correct

00:11:18 --> 00:11:23
without having to inspect and review it

00:11:20 --> 00:11:26
all yourself and so it could open up the

00:11:22 --> 00:11:27
scaling bottleneck maybe that's a hope

00:11:25 --> 00:11:31
that my company and many others are

00:11:26 --> 00:11:34
working on now but now there's more

00:11:31 --> 00:11:35
identity have you ever thought about how

00:11:33 --> 00:11:38
crazy it is the way we do things today

00:11:34 --> 00:11:40
if you want to prove like you're going

00:11:37 --> 00:11:41
to the doctor's office and you want to

00:11:39 --> 00:11:42
prove that you're the person on the

00:11:40 --> 00:11:44
alth insurance right so it's a very

00:11:41 --> 00:11:46
simple thing you just want to make sure

00:11:43 --> 00:11:50
that this is the right health insurance

00:11:45 --> 00:11:53
now the way we do that is they say well

00:11:49 --> 00:11:54
prove that you're you and the way you

00:11:52 --> 00:11:56
prove that is you give them a whole

00:11:53 --> 00:11:58
bunch of more sensitive information

00:11:55 --> 00:11:59
about yourself like a picture of your

00:11:57 --> 00:12:01
driver's license and your home address

00:11:58 --> 00:12:04
and your birthdate and your social

00:12:00 --> 00:12:06
security number and we have to do that

00:12:03 --> 00:12:07
over and over every time we want to

00:12:05 --> 00:12:10
prove our identity we do it by

00:12:06 --> 00:12:13
disclosing potentially sensitive

00:12:09 --> 00:12:15
information that could be abused this is

00:12:12 --> 00:12:17
not a safe or scalable way to do it and

00:12:14 --> 00:12:20
zero knowledge proof smight provide a

00:12:16 --> 00:12:23
replacement where instead of divulging

00:12:19 --> 00:12:25
information you just prove that this is

00:12:22 --> 00:12:28
the right health insurance for for you

00:12:24 --> 00:12:29
for now and you don't proven you don't

00:12:27 --> 00:12:32
disclose anything else so it might be

00:12:28 --> 00:12:34
the right solution again this is

00:12:31 --> 00:12:38
omething that a lot of companies are

00:12:33 --> 00:12:41
working on now and then think about

00:12:37 --> 00:12:45
where that data goes after you use it to

00:12:40 --> 00:12:47
prove your identity it goes into a data

00:12:44 --> 00:12:50
s we know databases of the core of

00:12:46 --> 00:12:53
everything today right like not just all

00:12:49 --> 00:12:56
healthcare but all employment government

00:12:52 --> 00:12:58
he economy social networking everything

00:12:55 --> 00:13:00
oes into databases and we want there's

00:12:57 --> 00:13:03
more and more sensitive information in

00:12:59 --> 00:13:06
there it's already the case as Tim Cook

00:13:02 --> 00:13:09
says that someone who gets access to one

00:13:05 --> 00:13:10
of these has a much more intimate view

00:13:08 --> 00:13:13
of you than someone who's peering

00:13:09 --> 00:13:14
through your window but we want to keep

00:13:12 --> 00:13:16
going we want to add more and more

00:13:13 --> 00:13:18
valuable information and we want to

00:13:15 --> 00:13:20
allow more and more different parties to

00:13:17 --> 00:13:22
use that information because doing so

00:13:19 --> 00:13:25
generates valuable goods and services

00:13:21 --> 00:13:27
for all of society but as we've learned

00:13:24 --> 00:13:30
over the last couple of years this isn't

00:13:26 --> 00:13:33
safe it's not scalable and it's it's

00:13:29 --> 00:13:35
ballooned from not just being a personal

00:13:32 --> 00:13:37
security problem and not just being a

00:13:34 --> 00:13:40
business security problem but even being

00:13:36 --> 00:13:41
a national security problem and zero

00:13:39 --> 00:13:44
knowledge proof smight propose a

00:13:40 --> 00:13:47
solution because whenever we want to add

00:13:43 --> 00:13:50
more and more uses of that data instead

00:13:46 --> 00:13:52
of giving more and more people access to

00:13:49 --> 00:13:54
it which makes it vulnerable to being

00:13:51 --> 00:13:57
leaked or exploited instead we can use a

00:13:53 --> 00:13:58
zero knowledge proof to satisfy the need

00:13:56 --> 00:14:01
of that particular use case without

00:13:57 --> 00:14:04
exposing the data unnecessarily and so

00:14:00 --> 00:14:08
it could turn out that like Netscape

00:14:03 --> 00:14:10
before it like HTTPS before it zero

00:14:07 --> 00:14:12
knowledge proof tsar an improvement it's

00:14:09 --> 00:14:14
not a civil liberties vs. a law

00:14:11 --> 00:14:16
enforcement issue it'll turn out in ten

00:14:13 --> 00:14:19
years that it's something that protects

00:14:15 --> 00:14:21
both individual safety and it protects

00:14:18 --> 00:14:23
businesses and it protects our whole

00:14:20 --> 00:14:26
national infrastructure that's my whole

00:14:22 --> 00:14:26
story thanks for listening

<!-- YOUTUBE_TRANSCRIPT_END -->
