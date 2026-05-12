---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Eq6G2sM7SK8"
title: "Dan Boneh"
video_url: "https://www.youtube.com/watch?v=Eq6G2sM7SK8"
thumbnail_url: "https://i.ytimg.com/vi/Eq6G2sM7SK8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Eq6G2sM7SK8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-28T20:54:07.000Z"
upload_date: "2017-07-28"
duration_seconds: 1204
duration_human: "20:04"
view_count: 855
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:22:42.279Z"
---

# Dan Boneh

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Eq6G2sM7SK8
- video_id: Eq6G2sM7SK8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-28T20:54:07.000Z
- upload_date: 2017-07-28
- duration: 20:04
- view_count: 855
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:09 --> 00:00:15
okay cool so let's get

00:00:11 --> 00:00:19
welcome to the security session thanks

00:00:14 --> 00:00:20
are coming early in the morning this

00:00:18 --> 00:00:22
hould be a fun session so we have four

00:00:19 --> 00:00:24
speakers lined up I guess I'm the

00:00:21 --> 00:00:25
moderator but I'm also going to give the

00:00:23 --> 00:00:27
first talk I'll talk a little bit about

00:00:24 --> 00:00:30
Bitcoin and some other work we've been

00:00:26 --> 00:00:32
doing then we have Kevin who is going to

00:00:29 --> 00:00:34
talk about security and healthcare

00:00:31 --> 00:00:37
devices so if anyone here is wearing a

00:00:33 --> 00:00:39
pacemaker you better be you'll be quite

00:00:36 --> 00:00:40
nervous after you hear Kevin's talk then

00:00:38 --> 00:00:43
we're going to hear from Giovanni who is

00:00:39 --> 00:00:46
going to talk about malware analysis and

00:00:42 --> 00:00:48
web security in general yes and then

00:00:45 --> 00:00:51
raluca will talk about privacy and

00:00:47 --> 00:00:53
enforcing policy in the cloud so it

00:00:50 --> 00:00:55
should be a fun session we're going to

00:00:52 --> 00:00:58
each talk for 15 minutes so we'll should

00:00:54 --> 00:01:00
be done by 10:00 10:05 or so and then

00:00:57 --> 00:01:02
we'll have time for 15 minutes QA then

00:00:59 --> 00:01:05
we'll have a break and then we'll run

00:01:01 --> 00:01:08
into the next session which is whatever

00:01:04 --> 00:01:11
it is it's industry conversations yes so

00:01:07 --> 00:01:15
I'll start at 10:30 all right so with

00:01:10 --> 00:01:17
at let me get started so all four of

00:01:14 --> 00:01:19
us I've actually done companies I'm

00:01:16 --> 00:01:22
actually a happy camper my my company

00:01:18 --> 00:01:25
was acquired this year so things are

00:01:21 --> 00:01:27
good so instead of telling you about

00:01:24 --> 00:01:29
companies we've done I wanted to tell

00:01:26 --> 00:01:30
you about kind of current research that

00:01:28 --> 00:01:34
we're doing in particular I'll tell you

00:01:29 --> 00:01:36
about two projects that we've done just

00:01:33 --> 00:01:40
very very recently so the first one is

00:01:35 --> 00:01:43
on Bitcoin and you know when when you go

00:01:39 --> 00:01:45
pitch to VCS the first thing they tell

00:01:42 --> 00:01:48
you is like on slide number one you're

00:01:44 --> 00:01:50
supposed to have some word somewhere

00:01:47 --> 00:01:52
it's where you supposed to the words

00:01:49 --> 00:01:54
billions of dollars somewhere on slide

00:01:51 --> 00:01:56
number one otherwise the VCS don't pay

00:01:53 --> 00:01:58
attention to you it's like the golden

00:01:55 --> 00:01:59
rule yes so fine so my billions of

00:01:57 --> 00:02:02
dollar slides is going to be on the

00:01:58 --> 00:02:04
Bitcoin capitalization so you all know

00:02:01 --> 00:02:05
you've all heard Bitcoin this is kind of

00:02:03 --> 00:02:08
a graph you can see Bitcoin kind of

00:02:04 --> 00:02:10
launched in 2009 this is the amount of

00:02:07 --> 00:02:14
dollars invested in Bitcoin you can see

00:02:09 --> 00:02:17
it kind of took off seriously in 2013 it

00:02:13 --> 00:02:18
reached quite a peak like mid 2013

00:02:16 --> 00:02:19
everybody thought oh my god this is

00:02:17 --> 00:02:22
going to take over the world

00:02:18 --> 00:02:24
no more dollars everybody's going to be

00:02:21 --> 00:02:25
doing bitcoins things kind of change

00:02:23 --> 00:02:28
there was a bit of a

00:02:24 --> 00:02:29
time the last year and a half so that's

00:02:27 --> 00:02:31
the beauty of technology you can't ever

00:02:28 --> 00:02:34
quite anticipate how things are going to

00:02:30 --> 00:02:35
go and today the you can see that in the

00:02:33 --> 00:02:38
last six months or so things are kind of

00:02:34 --> 00:02:40
stabilized and market capitalization is

00:02:37 --> 00:02:41
around three and a half billion still

00:02:39 --> 00:02:44
very very exciting this is the first

00:02:40 --> 00:02:45
cryptocurrency that actually seems to

00:02:43 --> 00:02:48
work that's actually been being adopted

00:02:44 --> 00:02:50
we've had lots of cryptocurrencies in

00:02:47 --> 00:02:51
the past but none of them have worked

00:02:49 --> 00:02:53
yeah they've all kind of work

00:02:50 --> 00:02:56
experiments that never really took off

00:02:52 --> 00:02:59
Bitcoin is among the first to really

00:02:55 --> 00:03:00
take off and in fact I really

00:02:58 --> 00:03:03
find Bitcoin exciting there's really

00:02:59 --> 00:03:04
lots to do here there's lots of crypto

00:03:02 --> 00:03:06
applications lots of financial

00:03:03 --> 00:03:10
applications so in fact we just started

00:03:05 --> 00:03:12
a class on Bitcoin you can see cs2 51 it

00:03:09 --> 00:03:15
just started on Monday on blockchain

00:03:11 --> 00:03:17
technologies the thing that we're

00:03:14 --> 00:03:19
xcited with bit about Bitcoin is a the

00:03:16 --> 00:03:20
obviously the currency but what's more

00:03:18 --> 00:03:22
interesting is even the applications of

00:03:19 --> 00:03:24
the blockchain right it's the first time

00:03:21 --> 00:03:26
when we have sort of an append-only

00:03:23 --> 00:03:28
database that's kind of you can put

00:03:25 --> 00:03:31
hings on it it's publicly available and

00:03:27 --> 00:03:33
no one can take elements off of the

00:03:30 --> 00:03:35
blockchain and that by itself has

00:03:32 --> 00:03:37
enormous number of applications so we're

00:03:34 --> 00:03:39
kind of excited about the blockchain and

00:03:36 --> 00:03:41
how to use it so the course is going to

00:03:38 --> 00:03:42
come is focusing kind of obviously in

00:03:40 --> 00:03:45
the beginning of Bitcoin and also on

00:03:41 --> 00:03:48
block chains there are actually startups

00:03:44 --> 00:03:50
who are helping us build labs based on

00:03:47 --> 00:03:52
in particular startup called 21 funded

00:03:49 --> 00:03:55
by andreessen horowitz that actually

00:03:51 --> 00:03:58
helped us build in a beautiful series of

00:03:54 --> 00:04:01
lab lab lectures and lab projects based

00:03:57 --> 00:04:03
on Bitcoin and Bitcoin mining mining so

00:04:00 --> 00:04:05
if you want to teach a Bitcoin class

00:04:02 --> 00:04:07
yourself please use this as a resource

00:04:04 --> 00:04:09
there's there's a lot of work that went

00:04:06 --> 00:04:12
into building the homeworks and the

00:04:08 --> 00:04:13
projects for this course so I would

00:04:11 --> 00:04:15
encourage you to teach Bitcoin courses

00:04:12 --> 00:04:17
yourself at your own universities and

00:04:14 --> 00:04:19
please your honor we were very welcome

00:04:16 --> 00:04:22
to steal all the materials and use it in

00:04:18 --> 00:04:24
your in your own classes great so

00:04:21 --> 00:04:26
unfortunately there are you know Bitcoin

00:04:23 --> 00:04:28
is not all rosy there are some issues

00:04:25 --> 00:04:31
also with Bitcoin of course you may have

00:04:27 --> 00:04:33
heard there's a certain Bitcoin exchange

00:04:30 --> 00:04:35
that ask people to give them their

00:04:32 --> 00:04:37
bitcoins and it just forgot to give the

00:04:34 --> 00:04:39
bitcoins back

00:04:36 --> 00:04:42
yes so that was kind of an issue right

00:04:38 --> 00:04:44
kind of a bit of a disrupt disruption to

00:04:41 --> 00:04:47
this rosy world of Bitcoin the question

00:04:43 --> 00:04:48
was basically so after this happened the

00:04:46 --> 00:04:51
question we were kind of curious about

00:04:47 --> 00:04:53
is well is there a way in which an

00:04:50 --> 00:04:55
exchange can prove that it's solvent in

00:04:52 --> 00:04:57
other words the number of assets the

00:04:54 --> 00:05:00
amount of assets that the exchange has

00:04:56 --> 00:05:03
titted be more can it prove that it has

00:04:59 --> 00:05:05
more assets than it has obligations so

00:05:02 --> 00:05:07
this is the problem that we set out to

00:05:04 --> 00:05:09
solve and in fact we weren't the only

00:05:06 --> 00:05:11
ones looking at this grab greg maxwell

00:05:08 --> 00:05:13
also looked at this problem so we were

00:05:10 --> 00:05:15
kind of wondering is there a way to

00:05:12 --> 00:05:17
ensure solvency and essentially the

00:05:14 --> 00:05:19
problem is again if you look at what is

00:05:16 --> 00:05:21
the solvency problem you have a Bitcoin

00:05:18 --> 00:05:23
exchange it has a set of obligations

00:05:20 --> 00:05:25
right so there are customers who gave

00:05:22 --> 00:05:27
the exchange who gave the exchange their

00:05:24 --> 00:05:30
bitcoins it's keeping the bitcoins for

00:05:26 --> 00:05:32
them so it has obligations to those

00:05:29 --> 00:05:33
customers and then the exchange also has

00:05:31 --> 00:05:36
a number of assets right it all it holds

00:05:32 --> 00:05:38
its assets also in bitcoins and solvency

00:05:35 --> 00:05:39
is basically the problem of proving that

00:05:37 --> 00:05:40
your assets are greater than your

00:05:38 --> 00:05:43
obligations

00:05:39 --> 00:05:45
yeah that's solvency and by the way you

00:05:42 --> 00:05:47
can generalize it beyond solvency to

00:05:44 --> 00:05:49
actually talking about reserve if you

00:05:46 --> 00:05:51
just put an X and epsilon instead of in

00:05:49 --> 00:05:53
front of the obligations you can for

00:05:50 --> 00:05:57
example argue prove that the assets are

00:05:52 --> 00:05:59
more than sorry that what is it half the

00:05:56 --> 00:06:00
assets are more than the obligations

00:05:58 --> 00:06:02
right so you can prove that you have a

00:05:59 --> 00:06:04
reserve instead of just a greater than

00:06:01 --> 00:06:08
or equal to but I'll here I'll just

00:06:04 --> 00:06:10
focus on solvency not so much reserve

00:06:07 --> 00:06:11
it's actually the same problem the issue

00:06:09 --> 00:06:13
is today banks need to do this too right

00:06:10 --> 00:06:14
banks also need to prove that they're

00:06:12 --> 00:06:15
solvent and how do banks do this in the

00:06:13 --> 00:06:17
real world

00:06:14 --> 00:06:19
well they hire an auditor the auditor

00:06:16 --> 00:06:21
comes in check the books checks the

00:06:18 --> 00:06:23
books and make sure the bank is solvent

00:06:20 --> 00:06:25
and then the auditor is kind of trusted

00:06:22 --> 00:06:27
to keep everything secret and to be

00:06:24 --> 00:06:29
honest yes so there's a lot of trust in

00:06:26 --> 00:06:31
the system there's also also a lot of

00:06:28 --> 00:06:33
expense and that the banks have to pay

00:06:30 --> 00:06:36
the auditors to do this job the beauty

00:06:32 --> 00:06:38
of Bitcoin is that you need no trust in

00:06:35 --> 00:06:41
third parties and this proof of solvency

00:06:37 --> 00:06:44
can be done without any expense any

00:06:40 --> 00:06:46
payments done to a third party okay so

00:06:43 --> 00:06:47
what our goals what our goal here is

00:06:45 --> 00:06:49
basically basically to prove that the

00:06:46 --> 00:06:51
assets are greater than the obligations

00:06:48 --> 00:06:52
but do it in a way that doesn't reveal

00:06:50 --> 00:06:55
anything about the inner workings of the

00:06:51 --> 00:06:56
xchange so this is what's called a zero

00:06:54 --> 00:06:58
knowledge proof right I'd like to prove

00:06:55 --> 00:07:00
to you that I'm solvent and I'd like to

00:06:57 --> 00:07:03
do it in a zero knowledge manner so you

00:06:59 --> 00:07:04
learn nothing about my business but you

00:07:02 --> 00:07:07
do but you are convinced that I'm

00:07:03 --> 00:07:10
solvent okay so that's what we set out

00:07:06 --> 00:07:12
o do and this is joint work with two

00:07:09 --> 00:07:15
students taker and Bundys and with Joe

00:07:11 --> 00:07:16
Bono Jeremy Clark and myself and

00:07:14 --> 00:07:18
basically it's an efficiency or

00:07:15 --> 00:07:20
knowledge proof for this problem and

00:07:17 --> 00:07:22
like I said if mount GOx had run this

00:07:19 --> 00:07:24
protocol their problems would have been

00:07:21 --> 00:07:26
detected much earlier than they then

00:07:23 --> 00:07:28
they were so the idea is that a

00:07:25 --> 00:07:30
Bitcoin exchange would kind of run this

00:07:27 --> 00:07:31
every day publish this proof you know

00:07:29 --> 00:07:33
delete all the old proofs but every day

00:07:30 --> 00:07:36
they would publish a proof of solvency

00:07:32 --> 00:07:38
and if they ever can't do the proof that

00:07:35 --> 00:07:39
means there's a problem right then at

00:07:37 --> 00:07:41
least you know the public would know

00:07:38 --> 00:07:43
there's a problem maybe you should try

00:07:40 --> 00:07:46
to get your bitcoins out all right so

00:07:42 --> 00:07:48
I'm not going to give you like all the

00:07:45 --> 00:07:49
details of how this proof works that

00:07:47 --> 00:07:51
probably is not appropriate to this

00:07:48 --> 00:07:53
audience but I didn't want to give you a

00:07:50 --> 00:07:55
sense of how the mechanism actually work

00:07:52 --> 00:07:58
like how do you prove that your solvent

00:07:54 --> 00:07:59
without revealing anything else so there

00:07:57 --> 00:08:01
are three steps to this to this process

00:07:58 --> 00:08:03
and let me try and explain at a very

00:08:00 --> 00:08:06
high level how these how these

00:08:02 --> 00:08:08
steps work so there are three sub

00:08:05 --> 00:08:10
protocols so let's start with the first

00:08:07 --> 00:08:12
wo steps sub protocol one and two so

00:08:09 --> 00:08:14
the mechanism that we use is kind of a

00:08:11 --> 00:08:16
standard mechanism that comes up and

00:08:13 --> 00:08:17
come in zero knowledge proof so it's

00:08:15 --> 00:08:20
called the commitment so a commitment

00:08:16 --> 00:08:22
he way to think about this is I have a

00:08:19 --> 00:08:24
number X that I'm thinking about I can

00:08:21 --> 00:08:27
take my number X put it in an envelope

00:08:23 --> 00:08:29
seal the envelope and give it to you yes

00:08:26 --> 00:08:31
now obviously I'm committed to the

00:08:28 --> 00:08:33
number X because you know the X is in

00:08:30 --> 00:08:36
the envelope I just gave you so I chant

00:08:32 --> 00:08:37
I can't change the number X any more but

00:08:35 --> 00:08:39
you have no idea what the number is

00:08:36 --> 00:08:41
write these in a sealed envelope you

00:08:38 --> 00:08:43
cannot open the envelope so you don't

00:08:40 --> 00:08:44
know what number I committed to so

00:08:42 --> 00:08:46
commitment allows me to commit to a

00:08:43 --> 00:08:48
value so I'm committed to it but you

00:08:45 --> 00:08:50
don't know what value I just committed

00:08:47 --> 00:08:52
you so commitments are a useful concept

00:08:49 --> 00:08:54
in general here we're going to use them

00:08:51 --> 00:08:56
to prove solvency okay so the first

00:08:53 --> 00:08:58
hing that the exchange is going to do

00:08:55 --> 00:08:59
is it's going to create commitment a

00:08:57 --> 00:09:01
commitment to all of its obligations

00:08:58 --> 00:09:03
okay so this means I'm going

00:09:00 --> 00:09:06
some up over all the balances of all my

00:09:02 --> 00:09:08
customers and I'm going to commit to

00:09:05 --> 00:09:10
that some okay so now have I've told you

00:09:07 --> 00:09:13
basically what my total obligations are

00:09:09 --> 00:09:15
as we said the commitment is binding but

00:09:12 --> 00:09:17
it reveals nothing about how many

00:09:14 --> 00:09:20
customers I have what's the total number

00:09:16 --> 00:09:22
of assets that I owe to these customers

00:09:19 --> 00:09:24
and so on now the beauty of these

00:09:21 --> 00:09:26
commitments is every user can actually

00:09:23 --> 00:09:28
be given some sort of a secret value so

00:09:25 --> 00:09:30
the user logs into his account at the

00:09:27 --> 00:09:32
xchange the exchange gives him some

00:09:29 --> 00:09:34
sort of a secret key and using the

00:09:31 --> 00:09:37
secret key he can actually verify for

00:09:33 --> 00:09:39
himself that his balance was included in

00:09:36 --> 00:09:41
the commitment to all the obligations

00:09:38 --> 00:09:43
now how we do this I'm not going to

00:09:40 --> 00:09:44
explain to you but just believe me that

00:09:42 --> 00:09:47
we can make sure we can make it so that

00:09:43 --> 00:09:49
every customer can be convinced that his

00:09:46 --> 00:09:51
balance is included in the total set of

00:09:48 --> 00:09:53
obligations so if every customer checks

00:09:50 --> 00:09:55
that his balance is included then we

00:09:52 --> 00:09:57
know that the set of obligations is in

00:09:54 --> 00:09:58
fact what it should be but in fact not

00:09:56 --> 00:10:00
every customer needs to check it's

00:09:57 --> 00:10:03
enough that say one percent of the

00:09:59 --> 00:10:05
customers check if the exchange cheats

00:10:02 --> 00:10:07
and actually does not include people's

00:10:04 --> 00:10:10
obligations you know if a small number

00:10:06 --> 00:10:13
of fraction of the customers actually

00:10:09 --> 00:10:14
check that the proof is valid a corrupt

00:10:12 --> 00:10:17
exchange will be quickly caught because

00:10:13 --> 00:10:19
a customer will see that his balance is

00:10:16 --> 00:10:21
not included and then he can complain

00:10:18 --> 00:10:23
and he actually has a proof that the

00:10:20 --> 00:10:24
xchange cheated him okay so that's step

00:10:22 --> 00:10:26
number one

00:10:23 --> 00:10:28
committing to the obligations step

00:10:25 --> 00:10:31
number two is committing to the total

00:10:27 --> 00:10:33
assets so now now here's this is kind of

00:10:30 --> 00:10:36
a difficult problem right so now the

00:10:32 --> 00:10:38
xchange has to prove how much money it

00:10:35 --> 00:10:39
actually has but again it's going to do

00:10:37 --> 00:10:40
it using these commitments it's not

00:10:38 --> 00:10:42
going to tell you how many bitcoins it

00:10:39 --> 00:10:43
has it's just going to give you a

00:10:41 --> 00:10:46
commitment to the number of bitcoins

00:10:42 --> 00:10:47
that it has so how do you prove yeah

00:10:45 --> 00:10:51
this is kind of bizarre right how do you

00:10:46 --> 00:10:53
prove how many bitcoins I have without

00:10:50 --> 00:10:55
actually telling you which bitcoins are

00:10:52 --> 00:10:57
mine and how many they are there are a

00:10:54 --> 00:10:59
total so the way we do it is as follows

00:10:56 --> 00:11:00
and this is something that's unique to

00:10:58 --> 00:11:03
Bitcoin this is I think kind of the

00:10:59 --> 00:11:04
tricky part of this of this protocol

00:11:02 --> 00:11:06
something that you cannot do in the real

00:11:03 --> 00:11:08
world but you can do with Bitcoin so

00:11:05 --> 00:11:10
remember how Bitcoin works right in

00:11:07 --> 00:11:14
Bitcoin there's this public blockchain

00:11:09 --> 00:11:15
every address in Bitcoin essentially is

00:11:13 --> 00:11:16
a public key

00:11:14 --> 00:11:19
for a signature system yes so there are

00:11:15 --> 00:11:21
all these public keys out there the

00:11:18 --> 00:11:23
xchange owns a subset of those public

00:11:20 --> 00:11:26
keys right those are the bitcoins that

00:11:22 --> 00:11:27
he exchange actually owns in every all

00:11:25 --> 00:11:30
the other public keys belong to other

00:11:27 --> 00:11:32
Bitcoin users okay

00:11:29 --> 00:11:34
now what we'd like to do basically is

00:11:31 --> 00:11:36
here so what the exchange does actually

00:11:33 --> 00:11:38
it is going to choose it's just going to

00:11:35 --> 00:11:40
go to the to the blockchain it's going

00:11:37 --> 00:11:42
to choose like a million public keys so

00:11:39 --> 00:11:43
in here could be a large number it's

00:11:41 --> 00:11:46
going to choose it like a million

00:11:42 --> 00:11:48
different public keys that have all

00:11:45 --> 00:11:50
sorts of balances associated with them

00:11:47 --> 00:11:52
the exchange doesn't know this doesn't

00:11:49 --> 00:11:54
own all those million public he's really

00:11:51 --> 00:11:56
owned a thousand of them maybe it only

00:11:53 --> 00:11:58
owns 10 thousand of them yes it only

00:11:55 --> 00:12:01
owns a subset of those public keys what

00:11:57 --> 00:12:02
it does is now it can prove again and

00:12:00 --> 00:12:05
using the essentially zero knowledge

00:12:01 --> 00:12:07
technology that it knows the secret key

00:12:04 --> 00:12:10
for a subset of those million public

00:12:06 --> 00:12:13
keys and that the sum of the balances

00:12:09 --> 00:12:15
associated with those public keys is is

00:12:12 --> 00:12:17
the number is the assets that it just

00:12:14 --> 00:12:19
committed to okay so I'll say it again

00:12:16 --> 00:12:20
it's a little tricky so we have a

00:12:18 --> 00:12:22
million public keys that were just

00:12:19 --> 00:12:25
pulled off the blockchain yeah so these

00:12:21 --> 00:12:27
are like random Bitcoin addresses they

00:12:24 --> 00:12:29
belong to all sorts of random people in

00:12:26 --> 00:12:31
the universe the exchange is going to

00:12:28 --> 00:12:34
prove that it owns a thousands of those

00:12:30 --> 00:12:35
public keys and the sum of the balance

00:12:33 --> 00:12:38
is associated with those public keys is

00:12:34 --> 00:12:41
equal to the value to the commitment to

00:12:37 --> 00:12:43
the assets that it just gave you so this

00:12:40 --> 00:12:45
doesn't reveal how many assets it has it

00:12:42 --> 00:12:47
doesn't reveal which public keys the

00:12:44 --> 00:12:49
xchange own it just proves that there

00:12:46 --> 00:12:52
is a subset for which it knows the

00:12:48 --> 00:12:54
secret keys and the balance is

00:12:51 --> 00:12:56
associated with that subset is actually

00:12:53 --> 00:12:58
the set of assets is actually the set of

00:12:55 --> 00:13:00
assets with the exchange committed to

00:12:57 --> 00:13:02
that's the idea yeah so now how we do

00:12:59 --> 00:13:04
this like I said there's a lot of

00:13:01 --> 00:13:06
technical details that I'm going to skip

00:13:03 --> 00:13:07
over but just trust me that we can do

00:13:05 --> 00:13:10
this so I hope this is clear so now

00:13:06 --> 00:13:12
e've we've created a commitment to the

00:13:09 --> 00:13:14
obligations we've created the commitment

00:13:11 --> 00:13:17
o the assets the only thing we have to

00:13:13 --> 00:13:19
do now is prove that assets are bigger

00:13:16 --> 00:13:21
than commitments sorry assets are bigger

00:13:18 --> 00:13:22
than obligations and it turns out that's

00:13:20 --> 00:13:23
actually quite straightforward yeah this

00:13:21 --> 00:13:25
like standard off-the-shelf

00:13:22 --> 00:13:27
technology there's a way

00:13:24 --> 00:13:29
if I can give I can give you two

00:13:26 --> 00:13:31
envelopes so two commitments so I'll

00:13:28 --> 00:13:33
give you a commitment to X so X is into

00:13:30 --> 00:13:35
an envelope and why is it an envelope

00:13:32 --> 00:13:36
and then I can prove to you that X is

00:13:34 --> 00:13:39
bigger than Y without revealing anything

00:13:35 --> 00:13:40
about X and y this is just crypto magic

00:13:38 --> 00:13:43
that's old and that's that's that's what

00:13:39 --> 00:13:45
we would use here to prove that in fact

00:13:42 --> 00:13:48
hat kook the exchange is solvent so the

00:13:44 --> 00:13:50
cute part of this of step number three

00:13:47 --> 00:13:52
is not interesting step number two is

00:13:49 --> 00:13:54
kind of the cutes parts that makes this

00:13:51 --> 00:14:10
problem interesting

00:13:53 --> 00:14:12
absolutely well actually it's customers

00:14:09 --> 00:14:14
are included in protocol one right those

00:14:11 --> 00:14:16
are the obligations so the exchange

00:14:13 --> 00:14:18
basically collects with coins from

00:14:15 --> 00:14:19
everybody yeah so it has like that let's

00:14:17 --> 00:14:21
ay you know coin the coin base they

00:14:18 --> 00:14:23
have like you know half a million

00:14:20 --> 00:14:24
customers say it collects well actually

00:14:22 --> 00:14:26
I don't know how many customers coinbase

00:14:23 --> 00:14:28
I'm just making that up so say it has

00:14:25 --> 00:14:29
half a million customers it collects all

00:14:27 --> 00:14:32
the bitcoins from all those customers

00:14:28 --> 00:14:34
and it stores those bitcoins in in

00:14:31 --> 00:14:36
bitcoins that it owns and it addresses

00:14:33 --> 00:14:39
that it owns yeah

00:14:35 --> 00:14:42
what is proving now is that the bitcoins

00:14:38 --> 00:14:43
that the addresses that it owns well

00:14:41 --> 00:14:45
it's committing to the sum of the

00:14:42 --> 00:14:48
balances with the addresses that it owns

00:14:45 --> 00:14:50
o it's not I mean you said this this

00:14:47 --> 00:14:52
protocol two is not related to what

00:14:49 --> 00:14:57
customers gave it this is just basically

00:14:51 --> 00:15:01
how the bitcoins are stored yeah cool

00:14:56 --> 00:15:02
excellent all right very good so fine so

00:15:00 --> 00:15:03
that's at a very high level how this

00:15:01 --> 00:15:06
protocol works now we went ahead and

00:15:02 --> 00:15:08
actually built this of course and so let

00:15:05 --> 00:15:10
me just show you how this how this works

00:15:07 --> 00:15:12
o here are three lines here what the

00:15:09 --> 00:15:14
blue line shows you on the bottom let's

00:15:11 --> 00:15:15
just look at say you have half a million

00:15:13 --> 00:15:19
customers so let's just look at the

00:15:14 --> 00:15:21
rightmost side of this graph so you can

00:15:18 --> 00:15:23
see that verifying the proof is actually

00:15:20 --> 00:15:25
really fast so on a single laptop a

00:15:22 --> 00:15:26
customer can verify the entire proof in

00:15:24 --> 00:15:28
about 10 minutes

00:15:25 --> 00:15:30
and in fact a customer doesn't even have

00:15:27 --> 00:15:32
to verify the entire proof really the

00:15:29 --> 00:15:35
customer is just going to verify that it

00:15:31 --> 00:15:37
s balance was included in the

00:15:34 --> 00:15:40
commitment to the obligations and

00:15:36 --> 00:15:41
or valleys yeah so customers actually if

00:15:39 --> 00:15:43
you wanted to verify everything it would

00:15:40 --> 00:15:46
take ten minutes but in reality you only

00:15:42 --> 00:15:47
have to verify a small slice very sorry

00:15:45 --> 00:15:48
that was actually I'm sorry the blue

00:15:46 --> 00:15:52
line is the time to generate the proof

00:15:47 --> 00:15:54
so--but so the exchange will take pin

00:15:51 --> 00:15:56
just a second so the exchange will take

00:15:53 --> 00:16:08
ten minutes to generate the proof just

00:15:55 --> 00:16:10
in minutes yeah question no no no no no

00:16:07 --> 00:16:13
because remember in the set of Bitcoin

00:16:09 --> 00:16:15
addresses that it that it used it's

00:16:12 --> 00:16:18
going to have all of its addresses in

00:16:14 --> 00:16:21
that set so necessarily the set is large

00:16:17 --> 00:16:23
nough necessarily what what is not

00:16:20 --> 00:16:26
being revealed is which of which subset

00:16:22 --> 00:16:28
of addresses it owns yeah so imagine you

00:16:25 --> 00:16:31
could even in principle take all the

00:16:27 --> 00:16:33
addresses on the blockchain and prove so

00:16:30 --> 00:16:34
that will be the the anonymity set yeah

00:16:32 --> 00:16:36
and then prove that you own a subset of

00:16:33 --> 00:16:42
those and nothing else would be revealed

00:16:35 --> 00:16:44
about your ear sets yeah it's

00:16:41 --> 00:16:46
ufficiently big well doesn't have to be

00:16:43 --> 00:16:48
it's a pallet now it's a policy matter

00:16:45 --> 00:16:50
ight if you're if you're comfortable

00:16:47 --> 00:16:52
and saying that what that you know a few

00:16:49 --> 00:16:54
of these million addresses are mine then

00:16:51 --> 00:16:56
that's fine if you want to reveal

00:16:53 --> 00:16:57
nothing you would use the entire

00:16:55 --> 00:16:58
blockchain and then you just say you

00:16:56 --> 00:17:01
know some of these addresses are mine

00:16:57 --> 00:17:02
but that's already known yeah that's

00:17:00 --> 00:17:04
a really good point

00:17:01 --> 00:17:06
okay so verifying the proof let's see

00:17:03 --> 00:17:07
that takes about 40 minutes verifying

00:17:05 --> 00:17:09
the entire proof that's the orange line

00:17:06 --> 00:17:10
takes about 40 minutes but again you

00:17:08 --> 00:17:12
wouldn't have to verify the entire proof

00:17:09 --> 00:17:15
you would just verify a slice of it and

00:17:11 --> 00:17:16
then the proof itself is you know for

00:17:14 --> 00:17:19
half a million customers you know it's

00:17:15 --> 00:17:20
about a gigabyte so every every day the

00:17:18 --> 00:17:23
xchange generates a gigabyte stores it

00:17:19 --> 00:17:25
somewhere throws away yesterday is proof

00:17:22 --> 00:17:26
so storing a gigabytes on the cloud

00:17:24 --> 00:17:29
there's nothing that's pretty easy

00:17:25 --> 00:17:31
every customer just download its slice

00:17:28 --> 00:17:34
of the proof verifies it and we're done

00:17:30 --> 00:17:36
okay so that's that's how this scheme

00:17:33 --> 00:17:39
works so very practical we've actually

00:17:35 --> 00:17:42
well we're trying not to get the point

00:17:38 --> 00:17:44
he Bitcoin exchanges to adopt this this

00:17:41 --> 00:17:46
tyle mechanism and you know we'll see

00:17:43 --> 00:17:47
how it goes okay so I'm at the

00:17:45 --> 00:17:50
15 minute mark so I guess I'm going to

00:17:46 --> 00:17:50
skip over the control integrity

00:17:49 --> 00:17:52
unfortune

00:17:49 --> 00:17:54
this was kind of a fun project I was

00:17:51 --> 00:17:56
hoping to tell you about but I'll skip

00:17:53 --> 00:17:58
over over that I don't want to take too

00:17:55 --> 00:18:00
much time so actually I'll just tell you

00:17:57 --> 00:18:02
the punchline come on why doesn't this

00:17:59 --> 00:18:06
go forward I'll just tell you the

00:18:01 --> 00:18:10
punchline the punchline of this part is

00:18:05 --> 00:18:12
AES is a block cipher Intel did amazing

00:18:09 --> 00:18:15
service to humanity and they implemented

00:18:11 --> 00:18:17
AES inside the x86 this was an inside

00:18:14 --> 00:18:20
the processor this was an amazing

00:18:16 --> 00:18:22
success for Intel to the point where now

00:18:19 --> 00:18:24
you see it every generation of

00:18:21 --> 00:18:24
microarchitecture they're actually

00:18:23 --> 00:18:26
improving it

00:18:23 --> 00:18:29
so Haswell is the older architecture a

00:18:25 --> 00:18:31
yes one round of AES took seven cycles

00:18:28 --> 00:18:34
kylake which just came out this summer

00:18:30 --> 00:18:35
now has been reduced to four cycles in

00:18:33 --> 00:18:38
two years it's going to get down to two

00:18:34 --> 00:18:40
cycles so the message that I wanted to

00:18:37 --> 00:18:42
you to take away from this is two

00:18:39 --> 00:18:44
messages first of all block ciphers we

00:18:41 --> 00:18:46
used to think of them as being expensive

00:18:43 --> 00:18:48
to evaluate they're basically free

00:18:45 --> 00:18:51
because of what Intel did this is kind

00:18:47 --> 00:18:53
of remarkable and second it's going to

00:18:50 --> 00:18:55
be really hard because of this it's

00:18:52 --> 00:18:57
going to be really hard to promote any

00:18:54 --> 00:18:58
other block cipher because any other

00:18:56 --> 00:19:00
block cipher is gonna have to be

00:18:57 --> 00:19:02
implemented in software and there's no

00:18:59 --> 00:19:04
way we'll compete with what Intel did so

00:19:01 --> 00:19:05
in some sense a yes is not going to be

00:19:03 --> 00:19:08
with us for many many years to come

00:19:04 --> 00:19:10
okay so that's how I'll guess I'll stop

00:19:07 --> 00:19:13
here last thing I'll say is there ah

00:19:09 --> 00:19:17
okay I need ten seconds so last thing

00:19:12 --> 00:19:19
I'll say is at Stanford actually we have

00:19:16 --> 00:19:21
something something called a cyber

00:19:18 --> 00:19:23
initiative this is a big grant from the

00:19:20 --> 00:19:26
Hewlett Foundation that looks at the

00:19:22 --> 00:19:29
integration of technology into society

00:19:25 --> 00:19:31
we're running a whole bunch of events in

00:19:28 --> 00:19:32
this in this space so if you'd like to

00:19:30 --> 00:19:34
join or if you'd like to speak please

00:19:31 --> 00:19:36
let us know so you can see the type of

00:19:33 --> 00:19:38
questions we're looking at our ethics of

00:19:35 --> 00:19:41
data collections privacy versus security

00:19:37 --> 00:19:43
they're really a trade-off this question

00:19:40 --> 00:19:44
of data ownership so if you'd like to

00:19:42 --> 00:19:45
speak or if you'd like to just

00:19:43 --> 00:19:47
participate you know please come or

00:19:44 --> 00:19:49
please let me know as I said if you'd

00:19:46 --> 00:19:52
like to speak okay with that I will stop

00:19:48 --> 00:19:54
here and I guess we'll move on to the

00:19:51 --> 00:19:55
next speaker what is in this advance

00:19:53 --> 00:19:58
here we go we'll move on to the next

00:19:54 --> 00:20:02
speaker so thank you very much

00:19:57 --> 00:20:02
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
