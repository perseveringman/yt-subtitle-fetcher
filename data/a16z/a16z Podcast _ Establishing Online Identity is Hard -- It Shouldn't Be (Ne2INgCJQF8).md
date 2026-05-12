---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Ne2INgCJQF8"
title: "a16z Podcast | Establishing Online Identity is Hard -- It Shouldn't Be"
video_url: "https://www.youtube.com/watch?v=Ne2INgCJQF8"
thumbnail_url: "https://i.ytimg.com/vi/Ne2INgCJQF8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Ne2INgCJQF8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:30:16.000Z"
upload_date: "2019-01-02"
duration_seconds: 1257
duration_human: "20:57"
view_count: 39
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:37:10.720Z"
---

# a16z Podcast | Establishing Online Identity is Hard -- It Shouldn't Be

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Ne2INgCJQF8
- video_id: Ne2INgCJQF8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:30:16.000Z
- upload_date: 2019-01-02
- duration: 20:57
- view_count: 39
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

As more and more of what we do for fun and work- happens online, establishing identity becomes ever more critical. Whether it’s for dating or sending money, you want to trust that not only are you interacting with the person you think you are, but that your messages (or money) are in fact reaching the right person -- and only them.

Sounds simple, but with an internet and computers in between, a lot can go wrong -- whether by accident or malicious design. A16z’s Chris Dixon, and Max Krohn, co-founder of the encryption startup Keybase, examine the problem in this segment of the pod. What makes cryptography so hard to use, what approach Krohn and the Keybase team are taking, and why crypto “key parties” are not what you might think.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
welcome to the a 16z podcast I'm Michael

00:00:03 --> 00:00:08
Copeland as more and more of what we do

00:00:05 --> 00:00:11
for fun and work happens online

00:00:07 --> 00:00:13
stablishing identity becomes ever more

00:00:10 --> 00:00:15
critical whether it's for dating or

00:00:12 --> 00:00:17
sending money you want to trust that not

00:00:14 --> 00:00:19
only are you interacting with the person

00:00:16 --> 00:00:21
you think you are but that your messages

00:00:18 --> 00:00:24
or money are in fact reaching the right

00:00:20 --> 00:00:26
person and only them sounds simple but

00:00:23 --> 00:00:28
with an internet and computers in

00:00:25 --> 00:00:32
between a lot can go wrong whether by

00:00:27 --> 00:00:36
accident or malicious design a 16 ZZZ

00:00:31 --> 00:00:38
Chris Dixon and max Crone co-founder of

00:00:35 --> 00:00:40
the encryption startup key base examine

00:00:37 --> 00:00:43
the problem in this segment of the pod

00:00:39 --> 00:00:45
what makes cryptography so hard to use

00:00:42 --> 00:00:48
what approach Krohn and the key based

00:00:44 --> 00:00:50
team are taking and why crypto key

00:00:47 --> 00:00:53
parties are not what you might think

00:00:50 --> 00:00:56
Chris Dixon starts us off

00:00:52 --> 00:00:57
so you and Chris co-founded Cubase and

00:00:55 --> 00:00:59
part of that you guys were the

00:00:56 --> 00:01:00
cofounders of OkCupid and sparknotes can

00:00:58 --> 00:01:05
you just tell us a little bit about your

00:01:00 --> 00:01:07
background and how you started Cubase a

00:01:04 --> 00:01:10
little bit over a year ago just because

00:01:06 --> 00:01:12
we were convinced that in the future

00:01:09 --> 00:01:16
people would really need from mapping

00:01:12 --> 00:01:19
what they considered notions of identity

00:01:15 --> 00:01:21
that computers could understand Chris

00:01:18 --> 00:01:23
and I got together and we some had a

00:01:20 --> 00:01:25
pretty good background between the two

00:01:22 --> 00:01:27
f us for tackling this problem it's a

00:01:24 --> 00:01:29
problem that on the on the one hand has

00:01:26 --> 00:01:31
ome cryptographic and security

00:01:28 --> 00:01:34
components to it as you can imagine but

00:01:30 --> 00:01:37
on the other hand it also has a lot of

00:01:33 --> 00:01:40
social networking and social engineering

00:01:36 --> 00:01:43
aspects to it as well and obviously as

00:01:39 --> 00:01:45
co-founders and longtime engineers and

00:01:42 --> 00:01:47
product designers that OkCupid we

00:01:44 --> 00:01:49
thought we got a lot of exposure and in

00:01:46 --> 00:01:50
the past running math side of the

00:01:48 --> 00:01:53
business and that side of hope we

00:01:49 --> 00:01:56
thought would be important in making PKI

00:01:52 --> 00:01:59
or or public key and usable for more

00:01:55 --> 00:02:01
people and you know @a okay keep it

00:01:58 --> 00:02:04
hough it seems so obvious now at the

00:02:00 --> 00:02:06
time there was a lot of coercing people

00:02:03 --> 00:02:08
and more or less asking them to use our

00:02:05 --> 00:02:09
product because they didn't think it was

00:02:07 --> 00:02:11
right for them that could have been

00:02:08 --> 00:02:13
because attitudes for difference back

00:02:10 --> 00:02:14
then or it could have been because the

00:02:12 --> 00:02:16
site when we started it was too small

00:02:13 --> 00:02:19
so we've actually spent about nine years

00:02:15 --> 00:02:20
you know he keep it getting the site so

00:02:18 --> 00:02:22
it would be big enough and work as a

00:02:19 --> 00:02:25
dating website more or less fighting

00:02:21 --> 00:02:27
with people the whole way because it was

00:02:24 --> 00:02:30
hard to attract users for a lot of

00:02:26 --> 00:02:32
OkCupid history if you look at Crystal

00:02:29 --> 00:02:34
apps a lot of the same things are at

00:02:31 --> 00:02:36
play I mean obviously people should be

00:02:33 --> 00:02:38
using them stuff and it will definitely

00:02:35 --> 00:02:41
make their lives better the question is

00:02:37 --> 00:02:43
do they understand that and it can it be

00:02:40 --> 00:02:45
motivated to use to use the products so

00:02:42 --> 00:02:47
in that respect we think that our

00:02:44 --> 00:02:50
experience ago can keep it was very

00:02:46 --> 00:02:52
helpful for moving into something like

00:02:49 --> 00:02:54
I'm like getting crypto to be popular

00:02:51 --> 00:02:57
for more people and there's a lot of

00:02:53 --> 00:03:00
common elements of user recruitment and

00:02:56 --> 00:03:03
user onboarding and and making people

00:02:59 --> 00:03:05
like the product even though maybe they

00:03:02 --> 00:03:07
thought it wasn't for them when I first

00:03:04 --> 00:03:09
heard about it so you said it's about

00:03:06 --> 00:03:10
you know obviously encryption and social

00:03:08 --> 00:03:12
identities can you describe for people

00:03:09 --> 00:03:15
that don't know just what that means

00:03:11 --> 00:03:16
exactly like in specific terms yeah sure

00:03:14 --> 00:03:18
things there are two things you really

00:03:15 --> 00:03:21
can do it with this technology that's

00:03:17 --> 00:03:23
really fundamental and and and so

00:03:20 --> 00:03:25
deep in terms of what people might do

00:03:22 --> 00:03:27
nline but let's deal with one of them

00:03:24 --> 00:03:30
first so one of them is just idea in

00:03:26 --> 00:03:32
Krypton so let's imagine I want to send

00:03:29 --> 00:03:34
you a message over the internet and I

00:03:31 --> 00:03:36
didn't want anyone to be able to read it

00:03:33 --> 00:03:38
in between your computer and my computer

00:03:35 --> 00:03:40
so it doesn't matter what application

00:03:37 --> 00:03:42
I'm using it doesn't matter or video

00:03:39 --> 00:03:44
conferencing or sending email but what

00:03:41 --> 00:03:46
really has to be done before we get off

00:03:43 --> 00:03:49
the ground and I need to convince my

00:03:45 --> 00:03:51
computer that is talking to to you and

00:03:48 --> 00:03:54
then someone who's pretending to be you

00:03:50 --> 00:03:56
and this is this is a big problem it's a

00:03:53 --> 00:03:57
social problem and that you know you

00:03:55 --> 00:03:59
could have a lot of people pretending to

00:03:56 --> 00:04:01
be you online and it's also a

00:03:58 --> 00:04:04
technological problem and that is if

00:04:00 --> 00:04:06
someone had unpacked any of the social

00:04:03 --> 00:04:08
media accounts you owned or any of the

00:04:05 --> 00:04:10
things you used to prove who you are I

00:04:07 --> 00:04:12
mean that would be a way that that

00:04:09 --> 00:04:14
person could receive messages for you

00:04:11 --> 00:04:16
even though they're intended for you so

00:04:13 --> 00:04:19
the first thing that any crypto

00:04:15 --> 00:04:20
really need for me to have a person in

00:04:18 --> 00:04:23
my head who I want to talk to you and

00:04:19 --> 00:04:25
then tell my program that whatever

00:04:22 --> 00:04:27
computer program I'm using to talk to

00:04:24 --> 00:04:28
that person and not someone else out

00:04:26 --> 00:04:31
here

00:04:27 --> 00:04:33
that's what he did oh and before there

00:04:30 --> 00:04:35
were social networks people would do

00:04:32 --> 00:04:37
this in with these so-called key signing

00:04:34 --> 00:04:40
parties can use really it sounds very

00:04:36 --> 00:04:41
primitive now but it's but it's funny

00:04:39 --> 00:04:43
because it was the best practice until

00:04:40 --> 00:04:44
we had Twitter and reddit in Facebook

00:04:42 --> 00:04:46
Wow

00:04:43 --> 00:04:48
absolutely and so I think I'm the first

00:04:45 --> 00:04:50
attempts that public key crypto got off

00:04:47 --> 00:04:52
the ground in the nineties when there

00:04:49 --> 00:04:55
was the first iteration of the so-called

00:04:51 --> 00:04:57
crypto Wars and I think back then there

00:04:54 --> 00:04:59
was a lot of distrust of any sort of

00:04:56 --> 00:05:02
infrastructure that wasn't just a

00:04:58 --> 00:05:04
computer you ran in your own home and so

00:05:01 --> 00:05:07
what this means is that if people wanted

00:05:03 --> 00:05:08
to exchange identities they would show

00:05:06 --> 00:05:10
up in person with a bunch of random

00:05:07 --> 00:05:12
strangers and check each other and

00:05:09 --> 00:05:13
stronger Sciences and also in all kinds

00:05:11 --> 00:05:15
of conclusion at the 20 people in the

00:05:12 --> 00:05:17
room of them were the 20 people that the

00:05:14 --> 00:05:19
drivers license so you see the drivers

00:05:16 --> 00:05:20
license and then you get the and then

00:05:18 --> 00:05:22
that person shows your driver's license

00:05:19 --> 00:05:24
gives you their public key and then you

00:05:21 --> 00:05:25
take the public key with you and then

00:05:23 --> 00:05:27
you know from then on whenever you want

00:05:24 --> 00:05:28
o send a message to the person that you

00:05:26 --> 00:05:30
met in person with the driver's license

00:05:27 --> 00:05:32
if you encode it with that the message

00:05:29 --> 00:05:34
with that key only that person can read

00:05:31 --> 00:05:36
it yeah right because the whole basis of

00:05:33 --> 00:05:38
all this is you have to pair a person to

00:05:35 --> 00:05:40
a public key right and so the old days

00:05:37 --> 00:05:42
are you know being the 90s there was no

00:05:39 --> 00:05:44
way to to it or to people trust it

00:05:41 --> 00:05:53
except for physic in person driver's

00:05:43 --> 00:05:57
license kind of parties parties yeah and

00:05:52 --> 00:05:59
the first kind of level of the graph and

00:05:56 --> 00:06:01
if you go up a couple of levels you'd

00:05:58 --> 00:06:02
say that well you know Chris and I you

00:06:00 --> 00:06:04
are an ass and he's signing party but

00:06:01 --> 00:06:06
you know we know someone who comment who

00:06:03 --> 00:06:08
was and so in a way it's a little bit

00:06:05 --> 00:06:10
he friend of a friend type of graph and

00:06:07 --> 00:06:12
in that that's no cause that's so

00:06:09 --> 00:06:14
bvious now and in terms of Facebook for

00:06:11 --> 00:06:16
trying to recreate that offline through

00:06:13 --> 00:06:17
these key signing parties I think in

00:06:15 --> 00:06:20
retrospect it was a really cool idea

00:06:16 --> 00:06:21
that just never hit critical mass it's

00:06:19 --> 00:06:24
probably one believed that's why I

00:06:20 --> 00:06:26
failed yeah and so so going back to you

00:06:23 --> 00:06:29
were describing key base the idea then

00:06:25 --> 00:06:32
is that now I know you as you know as

00:06:28 --> 00:06:35
Max taco on Twitter or is that your

00:06:31 --> 00:06:36
Twitter handle or let's say I want to

00:06:34 --> 00:06:39
communicate with a journalist who I

00:06:35 --> 00:06:41
follow on Twitter and I know his or her

00:06:38 --> 00:06:43
Twitter handle or

00:06:40 --> 00:06:45
I want to share a file with someone I I

00:06:42 --> 00:06:48
met I'm read it or I want to or Facebook

00:06:44 --> 00:06:51
as an obvious one etc you know in some

00:06:47 --> 00:06:54
ways now the Twitter handle is is almost

00:06:50 --> 00:06:55
more verification than their driver's

00:06:53 --> 00:06:56
license and so a lot of these people I

00:06:54 --> 00:06:58
interact with at least on Twitter and

00:06:55 --> 00:06:59
other places all the time and I might

00:06:57 --> 00:07:01
read their articles in New York Times

00:06:58 --> 00:07:03
I've never met them in person yeah I'm

00:07:00 --> 00:07:05
not sure how much medium person would

00:07:02 --> 00:07:07
really add to the verification right

00:07:04 --> 00:07:08
yeah you're totally right and as these

00:07:06 --> 00:07:10
online communities got bigger and more

00:07:07 --> 00:07:12
important to just the way to communicate

00:07:09 --> 00:07:15
the notion of identity is changing and

00:07:11 --> 00:07:16
so it's it's almost more important now

00:07:14 --> 00:07:19
hat you're online it's not gonna be

00:07:15 --> 00:07:20
used more so than what put your you know

00:07:18 --> 00:07:22
allet says what your driver's license

00:07:19 --> 00:07:25
absolutely and so we're seeing more and

00:07:21 --> 00:07:27
more in the press it seems like almost

00:07:24 --> 00:07:30
on a daily basis there's a massive

00:07:26 --> 00:07:32
security issue yeah you know everything

00:07:29 --> 00:07:34
from the Sony hack which was Sony

00:07:31 --> 00:07:37
Pictures had all their email stolen and

00:07:33 --> 00:07:39
published online Apple iCloud hack with

00:07:36 --> 00:07:41
a bunch of celebrities had their private

00:07:38 --> 00:07:44
photos stolen and put online yeah the

00:07:40 --> 00:07:45
target breach it just goes on and on but

00:07:43 --> 00:07:47
can you talk more broadly about what you

00:07:44 --> 00:07:49
think's happening and like why is that

00:07:46 --> 00:07:49
happening and what do we need to do to

00:07:48 --> 00:07:52
fix it

00:07:48 --> 00:07:53
yeah I think for the last 10 years and

00:07:51 --> 00:07:55
last 15 years since the Internet has

00:07:52 --> 00:07:57
really caught on we've been just

00:07:54 --> 00:07:59
building systems in the most obvious way

00:07:56 --> 00:08:00
possible and the most obvious way

00:07:58 --> 00:08:02
possible is to just put a bunch of

00:07:59 --> 00:08:05
servers somewhere in a closet somewhere

00:08:01 --> 00:08:06
and to do your best to make sure no one

00:08:04 --> 00:08:08
breaks into those servers and just put

00:08:05 --> 00:08:10
all the important data in those servers

00:08:07 --> 00:08:11
and then trust you'll make the right

00:08:09 --> 00:08:13
decisions that's true to send the data

00:08:10 --> 00:08:15
back out to on the other end and that's

00:08:12 --> 00:08:17
the way you know all of the major social

00:08:14 --> 00:08:19
networks are built that's the way almost

00:08:16 --> 00:08:22
everything online that we use today is

00:08:18 --> 00:08:23
built and if you were to tell people 40

00:08:21 --> 00:08:25
years ago that's where we're building

00:08:22 --> 00:08:26
system they would have probably not been

00:08:24 --> 00:08:29
able to believe it they would have said

00:08:25 --> 00:08:30
that is madness that was not the way you

00:08:28 --> 00:08:32
should build any system if you care

00:08:29 --> 00:08:35
about what's actually being put onto the

00:08:31 --> 00:08:37
server and being judiciously relief to

00:08:34 --> 00:08:39
people who are authorized to see it so

00:08:36 --> 00:08:42
the way we should be building systems is

00:08:38 --> 00:08:44
that if the server doesn't need to see

00:08:41 --> 00:08:46
the data or access the data that you're

00:08:43 --> 00:08:47
putting on to it and then it just

00:08:45 --> 00:08:49
shouldn't there's no reason why I have

00:08:46 --> 00:08:51
to see it then the data should be not

00:08:48 --> 00:08:52
available to the server and in plain

00:08:50 --> 00:08:53
text yeah basically the assumption has

00:08:51 --> 00:08:55
been

00:08:52 --> 00:08:56
it's so-called perimeter defense right

00:08:54 --> 00:08:58
which is as you say put it in the closet

00:08:55 --> 00:09:00
it's a big mess and once you get in the

00:08:57 --> 00:09:02
closet it's you know you get everything

00:08:59 --> 00:09:04
but we hopefully will have the perimeter

00:09:01 --> 00:09:06
defended enough meaning you know just

00:09:03 --> 00:09:08
sort of like the building you got these

00:09:05 --> 00:09:10
giant piles of gold sitting there but we

00:09:07 --> 00:09:11
have some security guards around the

00:09:09 --> 00:09:14
building and as long as they can do

00:09:10 --> 00:09:16
their job we're great that was a model

00:09:13 --> 00:09:17
up until now and it turns out that

00:09:15 --> 00:09:19
here's people inside the building that

00:09:16 --> 00:09:21
hey're stealing the gold that there's a

00:09:18 --> 00:09:23
whole bunch more ways inside than you

00:09:20 --> 00:09:25
think you know one of the big things

00:09:22 --> 00:09:27
changes now is that a lot of the

00:09:24 --> 00:09:28
perimeter defenses were built under the

00:09:26 --> 00:09:31
assumption that people would be using

00:09:27 --> 00:09:33
kind of replicated attacks like viruses

00:09:30 --> 00:09:34
as opposed to customized attacks which

00:09:32 --> 00:09:37
is what we're seeing now where people

00:09:33 --> 00:09:39
are you know a gang of hackers are

00:09:36 --> 00:09:40
mapping out an organization and doing

00:09:38 --> 00:09:41
spearfishing and all these very

00:09:39 --> 00:09:42
customized attacks to get through the

00:09:40 --> 00:09:44
perimeter and then ones they get in

00:09:41 --> 00:09:46
there boom you know it's game over

00:09:43 --> 00:09:48
yeah right it's a perimeter with about a

00:09:45 --> 00:09:51
thousand different gates on it where

00:09:47 --> 00:09:53
maybe they're you know 30 people manning

00:09:50 --> 00:09:55
a hall thousand of those gates and it's

00:09:52 --> 00:09:56
a tough problem I mean the more data you

00:09:54 --> 00:09:58
have the more specimens you probably

00:09:55 --> 00:09:59
need to run the service and the more

00:09:57 --> 00:10:02
likely one of those system in suspended

00:09:58 --> 00:10:04
to fall down and not see their task well

00:10:01 --> 00:10:05
so it's you know it's nothing I don't

00:10:03 --> 00:10:07
hink the big services the big cloud

00:10:04 --> 00:10:08
providers have the best intentions

00:10:06 --> 00:10:10
because in general I think they do it's

00:10:07 --> 00:10:12
just that they've chosen to do a job

00:10:09 --> 00:10:14
it's basically impossible said that no

00:10:11 --> 00:10:16
ne couldn't it can really do we all

00:10:13 --> 00:10:17
isten to all the threats that are lined

00:10:15 --> 00:10:19
up against with key bases architecture

00:10:16 --> 00:10:21
so if I am a key base user and you're

00:10:18 --> 00:10:22
we've talked about this publicly you're

00:10:20 --> 00:10:24
building some apps some native you know

00:10:21 --> 00:10:26
client apps for mobile and for desktop

00:10:23 --> 00:10:28
they let people do text messaging and

00:10:25 --> 00:10:30
file sharing and things like this if I

00:10:27 --> 00:10:32
use if I use your service and you guys

00:10:29 --> 00:10:33
get hacked what happens and can you

00:10:31 --> 00:10:35
explain how that's different with key

00:10:32 --> 00:10:40
base versus kind of the traditional

00:10:34 --> 00:10:43
architecture yeah the key base is that

00:10:39 --> 00:10:45
whenever I send data to other people and

00:10:42 --> 00:10:47
I want the other people to receive it

00:10:44 --> 00:10:48
and known in between then all the

00:10:46 --> 00:10:50
infrastructure in between just was not

00:10:47 --> 00:10:53
able to see the plaintext data they just

00:10:49 --> 00:10:54
get to see be encrypted data and so what

00:10:52 --> 00:10:56
hat means if I want to send a file to

00:10:53 --> 00:11:00
you Chris as I first look up your public

00:10:55 --> 00:11:01
key I and encrypt the data with your

00:10:59 --> 00:11:03
public key and then put that encryption

00:11:00 --> 00:11:05
the server so therefore if anyone

00:11:02 --> 00:11:07
ver breaks into the server all they

00:11:04 --> 00:11:10
really get is a bunch of encrypt

00:11:06 --> 00:11:11
and unlike with other systems the key

00:11:09 --> 00:11:12
ou need to dig trip the data is just

00:11:10 --> 00:11:14
not on the server

00:11:11 --> 00:11:17
the only person has a key it's like it's

00:11:13 --> 00:11:19
a phone in your pocket or the desktop in

00:11:16 --> 00:11:21
your office and so therefore there's

00:11:18 --> 00:11:23
nothing you could do in the server

00:11:20 --> 00:11:25
infrastructure or anywhere in between to

00:11:22 --> 00:11:27
recover that message the Diceman

00:11:24 --> 00:11:30
tries to send you unless you've broken

00:11:26 --> 00:11:32
the crypto which we believe is basically

00:11:29 --> 00:11:34
not it's not done yet but no one's been

00:11:31 --> 00:11:35
able to break the crypto this is a

00:11:33 --> 00:11:37
totally other way of building the system

00:11:34 --> 00:11:39
we're in the worst case scenario if

00:11:36 --> 00:11:42
everything about Kiva infrastructures

00:11:38 --> 00:11:43
blown wide open there's really limited

00:11:41 --> 00:11:44
amage and in fact we don't think

00:11:42 --> 00:11:46
there'd be any damage and that's the way

00:11:43 --> 00:11:49
we're designing this system that's one

00:11:45 --> 00:11:51
aspect of it now if you have a more

00:11:48 --> 00:11:52
advanced attacker who broke into key

00:11:50 --> 00:11:54
base and starts doing sophisticated

00:11:51 --> 00:11:57
things in our infrastructure like let's

00:11:53 --> 00:11:59
ay you know Chris decided to throw away

00:11:56 --> 00:12:01
our iPad and add an added a new iPhone

00:11:58 --> 00:12:02
or something and the server was supposed

00:12:00 --> 00:12:04
to propagate that message to other

00:12:01 --> 00:12:06
people and a sophisticated attacker

00:12:03 --> 00:12:08
might say well I can't read the data

00:12:05 --> 00:12:10
that Max was trying to send Chris but I

00:12:07 --> 00:12:12
can mess with other people so that they

00:12:09 --> 00:12:14
don't have the right idea after what

00:12:11 --> 00:12:15
Chris's devices are right now so that

00:12:13 --> 00:12:17
would be a slightly more sophisticated

00:12:14 --> 00:12:19
attack that someone could do if they

00:12:16 --> 00:12:21
ounger four servers but we're also

00:12:18 --> 00:12:23
designing countermeasures for those

00:12:20 --> 00:12:24
types of attacks as well so once he'd

00:12:22 --> 00:12:26
eliminate the basic attack we have to

00:12:23 --> 00:12:28
also eliminate these more subtle attacks

00:12:25 --> 00:12:30
but that's also part of the architecture

00:12:27 --> 00:12:32
that was building there's often and one

00:12:29 --> 00:12:34
of the reasons things that security

00:12:31 --> 00:12:36
online fails is that it's hard to use

00:12:33 --> 00:12:38
right I just think about my passwords

00:12:35 --> 00:12:40
right like people should be using strong

00:12:37 --> 00:12:41
passwords two-factor authentication I

00:12:39 --> 00:12:42
think most people have been told that

00:12:40 --> 00:12:43
and know that a lot of people don't do

00:12:41 --> 00:12:45
that

00:12:42 --> 00:12:46
and that's because it's a pain you know

00:12:44 --> 00:12:48
you can't remember these passwords

00:12:45 --> 00:12:49
they're hard to tie if you have to login

00:12:47 --> 00:12:51
all the time do you think is just a

00:12:48 --> 00:12:53
fundamental tension there I guess

00:12:50 --> 00:12:54
between usability and security and it's

00:12:52 --> 00:12:56
it feels like a lot of the security

00:12:53 --> 00:12:58
community tries to push these the burden

00:12:56 --> 00:13:00
onto users and say well it's the users

00:12:57 --> 00:13:02
fault for not doing all these

00:12:59 --> 00:13:03
complicated measures when in fact you

00:13:01 --> 00:13:05
know of course the users mostly aren't

00:13:02 --> 00:13:06
echnical and aren't security experts

00:13:04 --> 00:13:09
what do you think about that well I

00:13:05 --> 00:13:11
think you're totally right I limit about

00:13:08 --> 00:13:13
my condemnation to the password system

00:13:10 --> 00:13:15
that probably many other people have

00:13:12 --> 00:13:18
mentioned does until now the idea

00:13:14 --> 00:13:21
that you type this string and that's

00:13:17 --> 00:13:23
what identifies you is really a

00:13:20 --> 00:13:25
old ideas that probably isn't robust

00:13:22 --> 00:13:27
enough to deal with the current level of

00:13:24 --> 00:13:28
stress that we have and also to be very

00:13:26 --> 00:13:30
useful on your iPhone right when you're

00:13:27 --> 00:13:31
typing on a keyboard and after type of

00:13:29 --> 00:13:33
12 letter count range you're probably

00:13:30 --> 00:13:36
not very happy at all when I was going

00:13:32 --> 00:13:40
on so one solution to the feasibility

00:13:35 --> 00:13:41
problem is just first off to harness the

00:13:39 --> 00:13:43
power of the devices that we're using

00:13:40 --> 00:13:44
more and more so I think the agile

00:13:42 --> 00:13:46
business product 1password is really the

00:13:43 --> 00:13:49
job of this where you know there's the

00:13:45 --> 00:13:51
unlock your your path raises or your

00:13:48 --> 00:13:53
passwords for all the syphon use which

00:13:50 --> 00:13:55
that's your thumbprint on iphone and

00:13:52 --> 00:13:57
that's especially a really good solution

00:13:54 --> 00:13:58
because it means that for someone to

00:13:56 --> 00:14:00
steal all your passwords they have to

00:13:57 --> 00:14:02
feel your phone and also be able to hack

00:13:59 --> 00:14:04
your your thumbprint so I think

00:14:01 --> 00:14:05
solutions like that are really good and

00:14:03 --> 00:14:08
potentially a solutions to the password

00:14:04 --> 00:14:10
problem I think a key feature of such a

00:14:07 --> 00:14:12
solution is them to take advantage of

00:14:09 --> 00:14:13
the technology that the devices are

00:14:11 --> 00:14:15
giving you and not to pretend the

00:14:12 --> 00:14:18
devices are like kind of like a small

00:14:14 --> 00:14:19
version of your computer so I think

00:14:17 --> 00:14:22
that's one thing that's going on I think

00:14:18 --> 00:14:24
that in a world in which key Bay has a

00:14:21 --> 00:14:25
lot of penetration you know we might say

00:14:23 --> 00:14:27
the passwords are so the wrong idea

00:14:24 --> 00:14:30
ltogether but you ought to be doing is

00:14:26 --> 00:14:33
igning a statement saying on Macs and I

00:14:29 --> 00:14:34
wanted to log into the service and the

00:14:32 --> 00:14:36
service would just have your public key

00:14:33 --> 00:14:39
if you know max was identified with this

00:14:35 --> 00:14:41
public credential and as long as he's

00:14:38 --> 00:14:42
able to sign the statement with the

00:14:40 --> 00:14:44
corresponding private key I'll let him

00:14:41 --> 00:14:47
into the service and so that's actually

00:14:43 --> 00:14:49
a far superior way to log into a system

00:14:46 --> 00:14:51
and you know programmers use SSH I've

00:14:48 --> 00:14:53
been doing this for years they don't

00:14:50 --> 00:14:54
ype passwords anymore they just do

00:14:52 --> 00:14:56
private key signing when they sign it

00:14:53 --> 00:14:57
he servers and this is something that

00:14:55 --> 00:14:59
everyone should have access with you not

00:14:56 --> 00:15:01
just programmers so that's one of the

00:14:58 --> 00:15:03
real promises of getting public key

00:15:00 --> 00:15:05
crypto in the hands of more users that

00:15:02 --> 00:15:07
you know something that's just because

00:15:04 --> 00:15:09
password should now become no longer

00:15:06 --> 00:15:11
important and hopefully I'll sanitation

00:15:08 --> 00:15:13
becomes a lot easier that's one of our

00:15:10 --> 00:15:16
many hopes for keep it you're planning

00:15:12 --> 00:15:19
to release your applications as open

00:15:15 --> 00:15:20
source and let other people build apps

00:15:18 --> 00:15:22
on top of key Bay's can you talk about

00:15:19 --> 00:15:23
kind of how you think about that and how

00:15:21 --> 00:15:26
you think about sort of the open source

00:15:22 --> 00:15:27
community and developer use cases the

00:15:25 --> 00:15:29
first thing that's really important for

00:15:26 --> 00:15:30
us was that because we're building

00:15:28 --> 00:15:32
software that we think people need to

00:15:29 --> 00:15:34
trust there's no possible way that

00:15:31 --> 00:15:37
people can trust us unless they get to

00:15:33 --> 00:15:39
what the code actually is and how the

00:15:36 --> 00:15:40
software we're writing is using crypto

00:15:38 --> 00:15:42
and is using the various things we

00:15:39 --> 00:15:45
talked about you know verifying your

00:15:41 --> 00:15:47
public identities and unless people have

00:15:44 --> 00:15:49
the ability to look inside the software

00:15:46 --> 00:15:51
and verify that it's doing what we say

00:15:48 --> 00:15:54
is doing there'd be no reason for anyone

00:15:50 --> 00:15:56
to trust those so I think for that one

00:15:53 --> 00:15:58
reason alone it's crucial that as we

00:15:55 --> 00:16:00
build key days or as people build

00:15:57 --> 00:16:01
security apps that they're able to look

00:15:59 --> 00:16:04
inside the application and see exactly

00:16:00 --> 00:16:06
how it works so I mean that's just one

00:16:03 --> 00:16:08
thing I can say for the philosophy that

00:16:05 --> 00:16:10
we have him on the team in terms of

00:16:07 --> 00:16:12
building he did the other thing is that

00:16:09 --> 00:16:14
I mean he thought in really good

00:16:11 --> 00:16:15
response so far with just our little

00:16:13 --> 00:16:17
demo app that we've been running from

00:16:14 --> 00:16:19
open source contributors and people who

00:16:16 --> 00:16:21
use open source tools all day and and

00:16:18 --> 00:16:23
obviously would like to contribute and

00:16:20 --> 00:16:25
would like to look into how our code is

00:16:22 --> 00:16:27
working and build their apps on top of

00:16:24 --> 00:16:30
it and if we were to just kind of do the

00:16:26 --> 00:16:32
old-fashioned thing of just distribute a

00:16:29 --> 00:16:34
closed source binary that people

00:16:31 --> 00:16:35
couldn't really cry into we'd be cutting

00:16:33 --> 00:16:37
off all that goodwill and all the

00:16:34 --> 00:16:39
willingness for people to experiment

00:16:36 --> 00:16:41
with the software and build snot on top

00:16:38 --> 00:16:42
of it so that's the second thing and I

00:16:40 --> 00:16:44
guess you know to be little bit more

00:16:42 --> 00:16:47
specific what people want to build with

00:16:43 --> 00:16:48
key base I think there's so much work

00:16:46 --> 00:16:50
that we're putting into getting this

00:16:47 --> 00:16:52
thing to work properly both in terms of

00:16:49 --> 00:16:54
verifying your public identities and

00:16:51 --> 00:16:56
managing your secret key is that this is

00:16:53 --> 00:16:58
just basic plumbing that you need

00:16:55 --> 00:17:00
nowadays to build a good application and

00:16:57 --> 00:17:02
so we really hope that a lot of other

00:16:59 --> 00:17:04
app developers can exploit all the work

00:17:01 --> 00:17:06
employed in idea it's the wrong word but

00:17:03 --> 00:17:07
benefit from all the work that we've

00:17:05 --> 00:17:10
done without having to reinvent it

00:17:06 --> 00:17:12
hemselves and I think the status quo is

00:17:09 --> 00:17:15
now I mean a good analogy would be like

00:17:11 --> 00:17:17
you know hey you want to write Photoshop

00:17:14 --> 00:17:19
but with photo sharing you know you

00:17:16 --> 00:17:21
first have to implement tcp/ip before

00:17:18 --> 00:17:22
you can get that done I mean that's kind

00:17:20 --> 00:17:24
of the world we live in right now with

00:17:21 --> 00:17:26
regard to Christo's so if you wanted to

00:17:23 --> 00:17:28
you know make a Photoshop plug-in where

00:17:25 --> 00:17:31
potentially you want to share photos

00:17:27 --> 00:17:32
ecretly with your friends then you'd

00:17:30 --> 00:17:35
basically be up another level of having

00:17:31 --> 00:17:37
to reimplemented on't care about that

00:17:34 --> 00:17:39
doesn't make any difference to you in

00:17:36 --> 00:17:41
terms of an application developer so we

00:17:38 --> 00:17:43
want that to be available a service or a

00:17:40 --> 00:17:45
library we spent a lot of time just

00:17:42 --> 00:17:47
doing what's probably being called now

00:17:44 --> 00:17:48
growth hacking and so you know a lot of

00:17:46 --> 00:17:50
the ideas we had towards

00:17:47 --> 00:17:52
BLT cubed had very little to do

00:17:49 --> 00:17:54
with dating we had to do with all social

00:17:51 --> 00:17:56
other things that we could entice people

00:17:53 --> 00:17:59
to show up at okay keep it and then kind

00:17:55 --> 00:18:01
of route them into a different part of

00:17:58 --> 00:18:02
the service they were using that turned

00:18:00 --> 00:18:04
out to be dating but that was a key

00:18:01 --> 00:18:06
OkCupid experience that's basically what

00:18:03 --> 00:18:07
we did for four six years before people

00:18:05 --> 00:18:09
had heard about us we have to come up a

00:18:06 --> 00:18:12
lot of different independent growth

00:18:08 --> 00:18:14
acks and you know what suffocates you

00:18:11 --> 00:18:18
got a crypto or security into more

00:18:13 --> 00:18:20
people's pipelines well or workflows I

00:18:17 --> 00:18:22
think the first thing that you got to

00:18:19 --> 00:18:26
get right and you have to have a

00:18:21 --> 00:18:28
software you know and work well even if

00:18:25 --> 00:18:31
the person you're trying to communicate

00:18:27 --> 00:18:32
what hasn't signed up yet and I think

00:18:30 --> 00:18:35
that's where a lot of crypto software

00:18:31 --> 00:18:38
just dies it's like basically step one

00:18:34 --> 00:18:39
and we have to get that experience right

00:18:37 --> 00:18:42
and we have to get that experience

00:18:38 --> 00:18:43
common enough for people to use that

00:18:41 --> 00:18:45
hey wind up bringing the people

00:18:42 --> 00:18:48
recruiting people for us by way of the

00:18:44 --> 00:18:49
application and I think there's just no

00:18:47 --> 00:18:51
ther way to get a service like this to

00:18:48 --> 00:18:53
get good adoption and so that's been one

00:18:50 --> 00:18:56
of the huge problems with PGP up until

00:18:52 --> 00:18:57
now that the typical experience is you

00:18:55 --> 00:19:00
try you say okay this week I'm going to

00:18:56 --> 00:19:03
move all my email to PGP and you know

00:18:59 --> 00:19:04
Monday at 9:30 they say oh man the first

00:19:02 --> 00:19:07
person I want to email it doesn't use

00:19:03 --> 00:19:08
PGP what do I do now need to say well I

00:19:06 --> 00:19:11
guess this experiment failed and so

00:19:07 --> 00:19:12
that's something we can't have happen we

00:19:10 --> 00:19:14
have to really allow the operation to go

00:19:11 --> 00:19:16
through as far as possible as far

00:19:13 --> 00:19:19
offenders concerned and then if the

00:19:15 --> 00:19:21
receiver on-boarded also with minimum

00:19:18 --> 00:19:23
friction and I think unless an

00:19:20 --> 00:19:24
application does that it's doomed to

00:19:22 --> 00:19:26
fail yeah that's part of the challenge

00:19:23 --> 00:19:28
and it's going to where the usability

00:19:25 --> 00:19:30
experience from OkCupid is really is

00:19:27 --> 00:19:31
really coming in in terms of what we're

00:19:29 --> 00:19:33
building

00:19:30 --> 00:19:36
I think we're intending for the first

00:19:32 --> 00:19:39
users of this product to be programmers

00:19:35 --> 00:19:40
and technical types and that's not our

00:19:38 --> 00:19:43
long-term vision just to be limited to

00:19:39 --> 00:19:45
that audience but we think as a primary

00:19:42 --> 00:19:47
set of users and we already you know

00:19:44 --> 00:19:49
have a small set of users of our current

00:19:46 --> 00:19:52
kind of trial products online now it

00:19:48 --> 00:19:54
end to be security professionals crypto

00:19:51 --> 00:19:56
professionals programmers but we think

00:19:53 --> 00:19:58
there's tens or hundreds of millions of

00:19:55 --> 00:20:00
people who meet that description people

00:19:57 --> 00:20:01
who know that they should be using

00:19:59 --> 00:20:02
crypto and they know that they should be

00:20:00 --> 00:20:04
ncrypting

00:20:01 --> 00:20:05
but just don't have the first idea or

00:20:03 --> 00:20:08
don't the first clue that's where to

00:20:04 --> 00:20:10
start and you can ask anyone who's

00:20:07 --> 00:20:11
program before like you know have you

00:20:09 --> 00:20:13
ever used GPG and you ever have you ever

00:20:10 --> 00:20:15
at the man page for GPG and they'd look

00:20:12 --> 00:20:17
at you like no of course not I mean are

00:20:14 --> 00:20:20
you kidding me and it's not because the

00:20:16 --> 00:20:22
software's like this offer does this job

00:20:19 --> 00:20:24
really well but it's just it's not for

00:20:21 --> 00:20:26
anyone but the most sophisticated

00:20:23 --> 00:20:28
computer practitioners now and so we

00:20:25 --> 00:20:30
wanted to bring that bar way way way

00:20:27 --> 00:20:31
we're laying it down so even if you know

00:20:29 --> 00:20:33
you should be using PGP or something

00:20:30 --> 00:20:34
like it we're gonna do all the heavy

00:20:32 --> 00:20:36
lifting for you and you're just going to

00:20:33 --> 00:20:38
basically use the tools you used to use

00:20:36 --> 00:20:40
much the same way you did before so

00:20:37 --> 00:20:42
that's part of the mission right there

00:20:39 --> 00:20:44
to try to go after people who are you

00:20:41 --> 00:20:46
know technologists are slightly

00:20:43 --> 00:20:48
technically savvy and from there we

00:20:45 --> 00:20:50
think there's obviously the possibility

00:20:47 --> 00:20:51
to go out a lot further but that's

00:20:49 --> 00:20:53
definitely a group we want to try

00:20:50 --> 00:20:55
it so to start with all right max thanks

00:20:52 --> 00:20:57
a lot for your time thank you Chris I

00:20:54 --> 00:20:57
enjoyed it

<!-- YOUTUBE_TRANSCRIPT_END -->
