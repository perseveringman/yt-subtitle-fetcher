---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "CxH3aQnVj24"
title: "a16z Podcast | When Large Scale Gets Really Massive -- Managing Today’s Enterprise Networks"
video_url: "https://www.youtube.com/watch?v=CxH3aQnVj24"
thumbnail_url: "https://i.ytimg.com/vi/CxH3aQnVj24/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=CxH3aQnVj24"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:23:26.000Z"
upload_date: "2019-01-02"
duration_seconds: 1115
duration_human: "18:35"
view_count: 98
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:58:22.866Z"
---

# a16z Podcast | When Large Scale Gets Really Massive -- Managing Today’s Enterprise Networks

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=CxH3aQnVj24
- video_id: CxH3aQnVj24
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:23:26.000Z
- upload_date: 2019-01-02
- duration: 18:35
- view_count: 98
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Managing enterprise networks with thousands of users and endpoints has been hard enough. Now that large enterprise networks routinely include hundreds of thousands of nodes it’s amazingly difficult and time-consuming (we’re talking days often) to get definitive answers to seemingly simple questions like, how many PCs do I have running? Never mind, how many PCs do I have that could be at risk of the Heartbleed virus? Tanium, the most recent company to join the a16z portfolio, offers a systems management and security tool that allows administrators to ask virtually any question about the configuration, performance, and complexion of an enterprise network and get an answer in seconds. Tanium CTO and Co-founder Orion Hindawi and a16z Board Partner Steven Sinofsky discuss the origins of Tanium; the invention of the “linear peer-to-peer communications” architecture that turbo-charges the Tanium solution; and with Internet of Things coming online fast, the prospect of networks quickly going to millions and billions of nodes.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
welcome to the a 16z podcast I'm Michael

00:00:02 --> 00:00:07
Copeland and we are here today with

00:00:04 --> 00:00:11
board partner Steven Sinofsky Steven

00:00:06 --> 00:00:13
welcome hi there and the CTO and

00:00:10 --> 00:00:16
co-founder of our latest investment

00:00:12 --> 00:00:18
inium orion and ah we welcome thank you

00:00:15 --> 00:00:21
all the way from Berkeley California

00:00:17 --> 00:00:23
that's right yeah we like to represent

00:00:20 --> 00:00:25
he East Bay every now and again so I

00:00:22 --> 00:00:28
wanna really dig in you guys have built

00:00:24 --> 00:00:30
his incredible enterprise technology

00:00:27 --> 00:00:34
and so I want you to describe it for us

00:00:29 --> 00:00:35
but let's maybe start by describing the

00:00:33 --> 00:00:37
big problem that you and and your

00:00:34 --> 00:00:39
co-founder is your father but that you

00:00:36 --> 00:00:42
and your team Atheneum had been

00:00:38 --> 00:00:45
addressing for years really yeah so I

00:00:41 --> 00:00:47
mean we essentially found in taenia m--

00:00:44 --> 00:00:49
with the co-founders that we originally

00:00:46 --> 00:00:52
founded bigfix with and so bigfix was

00:00:48 --> 00:00:53
founded in 1997 a technology that

00:00:51 --> 00:00:55
essentially allowed people that had

00:00:52 --> 00:00:56
really large-scale environments to

00:00:54 --> 00:00:59
assess the state of those environments

00:00:55 --> 00:01:01
o look at the endpoint see what was

00:00:58 --> 00:01:03
running on them you know which users

00:01:00 --> 00:01:04
were logged in and where they were and a

00:01:02 --> 00:01:06
variety of other characteristics and

00:01:03 --> 00:01:09
what we kept on seeing a big fix was

00:01:05 --> 00:01:11
that you know around 2004-2005 customers

00:01:08 --> 00:01:14
were really struggling to get those

00:01:10 --> 00:01:15
systems to work fast enough so if you

00:01:13 --> 00:01:16
look at the problems that they were

00:01:14 --> 00:01:19
trying to address it was kind of a

00:01:15 --> 00:01:22
nascent area of apt and you know much

00:01:18 --> 00:01:24
faster attacks and they were seeing a

00:01:21 --> 00:01:26
lot of outages that were happening they

00:01:23 --> 00:01:27
were starting and ending in the span of

00:01:25 --> 00:01:30
minutes instead of the span of hours or

00:01:26 --> 00:01:33
days Sam so these attacks were coming

00:01:29 --> 00:01:36
from Internet connected endpoints by

00:01:32 --> 00:01:37
malicious people yeah I mean essentially

00:01:35 --> 00:01:39
people were realizing that this wasn't

00:01:36 --> 00:01:42
just you know the script kids anymore it

00:01:38 --> 00:01:44
really was actually that nation-state

00:01:41 --> 00:01:45
attackers and professional attacking

00:01:43 --> 00:01:46
organizations were realizing that there

00:01:44 --> 00:01:48
was a lot of value behind those

00:01:45 --> 00:01:50
firewalls and so they were coming in

00:01:47 --> 00:01:52
exfiltrating data that was extremely

00:01:49 --> 00:01:54
valuable and the customers were just

00:01:51 --> 00:01:56
unable to respond quickly enough and so

00:01:53 --> 00:01:59
they were coming to us and essentially

00:01:55 --> 00:02:00
asking us figure out a way where you can

00:01:58 --> 00:02:02
make your systems much much faster and

00:01:59 --> 00:02:04
we essentially realized that we couldn't

00:02:01 --> 00:02:06
do that using the topology that we'd

00:02:03 --> 00:02:10
created we had to throw everything away

00:02:05 --> 00:02:12
and start from scratch and so we in 2007

00:02:09 --> 00:02:13
founded Taney I'm around the principle

00:02:11 --> 00:02:16
that we needed to make things not

00:02:12 --> 00:02:17
you know ten times faster but 10,000

00:02:15 --> 00:02:19
times faster instead of gathering data

00:02:16 --> 00:02:21
in hours or days from really large

00:02:18 --> 00:02:24
networks we need to be able to do that

00:02:20 --> 00:02:26
in seconds and so to do that we

00:02:23 --> 00:02:28
ssentially took a team of engineers put

00:02:25 --> 00:02:31
hem in a room and asked them to start

00:02:27 --> 00:02:32
from fresh principles really not assume

00:02:30 --> 00:02:34
anything about how we were gonna

00:02:31 --> 00:02:36
pproach this and what we did was

00:02:33 --> 00:02:38
actually completely refactor the entire

00:02:35 --> 00:02:40
topology of how people were collecting

00:02:37 --> 00:02:42
data the real kind of structure about

00:02:39 --> 00:02:43
how it was done and as a result of that

00:02:41 --> 00:02:46
even at five hundred thousand seat

00:02:42 --> 00:02:48
networks now for the first time we can

00:02:45 --> 00:02:51
get 15-second old data so Steven I want

00:02:47 --> 00:02:53
you to tell us how you saw the problem

00:02:50 --> 00:02:56
both you know as a person who looked out

00:02:52 --> 00:02:58
across large enterprises but what he was

00:02:55 --> 00:03:00
describing how did you view it from your

00:02:57 --> 00:03:02
end well sure I like it it's it's really

00:02:59 --> 00:03:03
I mean folks out there who manage our

00:03:01 --> 00:03:06
enterprise networks of the world they

00:03:02 --> 00:03:08
know this problem you know super well

00:03:05 --> 00:03:10
that that like you know you run these

00:03:07 --> 00:03:13
logon scripts that do inventories of pcs

00:03:09 --> 00:03:15
you run these very heavy client-server

00:03:12 --> 00:03:17
systems where you've got is you know -

00:03:14 --> 00:03:19
you know inventory the network you've

00:03:16 --> 00:03:21
got a bunch of sequel servers running

00:03:18 --> 00:03:23
and management tools and you know as an

00:03:20 --> 00:03:25
end user you know that like they're

00:03:22 --> 00:03:26
doing an inventory because that day you

00:03:24 --> 00:03:28
log on to your machine and all of a

00:03:25 --> 00:03:30
sudden it's like ten minutes before you

00:03:27 --> 00:03:32
can actually do any work and it usually

00:03:29 --> 00:03:34
happens at the worst possible time and

00:03:31 --> 00:03:36
then when all of that said and done like

00:03:33 --> 00:03:38
both the network isn't particularly

00:03:35 --> 00:03:40
secure and the information isn't really

00:03:37 --> 00:03:42
that accurate I actually remember I was

00:03:39 --> 00:03:44
I once was in a big briefing with a

00:03:41 --> 00:03:46
really really giant government customer

00:03:43 --> 00:03:47
in the United States and the guy was

00:03:45 --> 00:03:49
giving me a hard time about how

00:03:46 --> 00:03:51
difficult it was to monitor the network

00:03:48 --> 00:03:53
he's like he said to me look I have

00:03:50 --> 00:03:56
between 150 and 300 thousand pcs in my

00:03:52 --> 00:03:58
network and I looked at them and I was

00:03:55 --> 00:04:01
like well do you have a hundred and

00:03:57 --> 00:04:04
fifty or 300,000 I mean if your job is

00:04:00 --> 00:04:06
to count them right like that's that's a

00:04:03 --> 00:04:07
really big difference and then I

00:04:05 --> 00:04:09
actually learned a lot and this was a

00:04:06 --> 00:04:10
long time ago and actually the state of

00:04:08 --> 00:04:12
the art hasn't really changed like big

00:04:09 --> 00:04:14
fix is the state of the art and for a

00:04:11 --> 00:04:16
network that size you're looking at

00:04:13 --> 00:04:18
hree four five day turnaround and by

00:04:15 --> 00:04:19
the end of the five days you know think

00:04:17 --> 00:04:21
of it you know like how many employees

00:04:18 --> 00:04:23
quit how many machines got thrown away

00:04:20 --> 00:04:25
how many machines got bought at Best Buy

00:04:22 --> 00:04:26
that week and the number is just

00:04:24 --> 00:04:28
completely out of whack

00:04:25 --> 00:04:32
and so a system bigfix which which was

00:04:27 --> 00:04:34
later bought by IBM correct was built in

00:04:31 --> 00:04:37
a world that didn't look anything like

00:04:33 --> 00:04:38
the world we operate within today that's

00:04:36 --> 00:04:40
exactly right

00:04:37 --> 00:04:41
yes I mean essentially if you look at

00:04:39 --> 00:04:43
hose tools they were built 20 years ago

00:04:40 --> 00:04:45
to solve a completely different problem

00:04:42 --> 00:04:47
the problem was that there were these

00:04:44 --> 00:04:49
untargeted attacks like slammer and

00:04:46 --> 00:04:51
blaster that were affecting

00:04:48 --> 00:04:53
vulnerabilities that were patched and he

00:04:50 --> 00:04:54
just needed to get the patches out

00:04:52 --> 00:04:57
because no one was being individually

00:04:53 --> 00:04:58
targeted no organization was getting

00:04:56 --> 00:05:01
special attacks that were tailored to

00:04:57 --> 00:05:03
them or very few today what our

00:05:00 --> 00:05:04
customers are worried about our

00:05:02 --> 00:05:06
professional organizations or

00:05:03 --> 00:05:09
nation-states that are not only

00:05:05 --> 00:05:11
attacking just them specifically they're

00:05:08 --> 00:05:13
often cueing their attacks that they're

00:05:10 --> 00:05:15
gonna do against the solutions that

00:05:12 --> 00:05:17
hose organizations have deployed so

00:05:14 --> 00:05:18
they're as sophisticated as you could

00:05:16 --> 00:05:20
possibly get and what we're seeing is

00:05:17 --> 00:05:22
you're trying to essentially screw in

00:05:19 --> 00:05:23
screws with a hammer right right

00:05:21 --> 00:05:24
hat was a tool developed for a

00:05:22 --> 00:05:26
completely different problem and now

00:05:23 --> 00:05:27
you're trying to apply it to this and

00:05:25 --> 00:05:30
antivirus falls in that category

00:05:26 --> 00:05:32
firewalls fall in that category you know

00:05:29 --> 00:05:34
they just are not effective against the

00:05:31 --> 00:05:36
insider threat and advanced persistent

00:05:33 --> 00:05:38
hreat that our customers are facing you

00:05:35 --> 00:05:40
know today what we what we what

00:05:37 --> 00:05:41
customers are seeing is you know they've

00:05:39 --> 00:05:43
got a bunch of tools that the systems

00:05:40 --> 00:05:45
management people use to to inventory

00:05:42 --> 00:05:47
and maintain and deploy patches and

00:05:44 --> 00:05:49
updates and software to machines and

00:05:46 --> 00:05:51
monitor performance and then a bunch of

00:05:48 --> 00:05:53
tools the security people do and both of

00:05:50 --> 00:05:54
those have state-of-the-art the security

00:05:52 --> 00:05:57
people are building taller and taller

00:05:53 --> 00:05:58
walls thicker and thicker walls and

00:05:56 --> 00:06:01
trying to close off the doors and things

00:05:57 --> 00:06:03
like that and the management people are

00:06:00 --> 00:06:05
just trying to keep track of what's

00:06:02 --> 00:06:07
going on but what's happening is now

00:06:04 --> 00:06:09
hat when you you're hit with an attack

00:06:06 --> 00:06:12
it's usually through a sequence of very

00:06:08 --> 00:06:14
benign things that look ok to the

00:06:11 --> 00:06:15
network like somebody logging in

00:06:13 --> 00:06:17
somebody reading a file

00:06:14 --> 00:06:20
somebody you know installing a piece of

00:06:16 --> 00:06:21
software it looks pretty benign until

00:06:19 --> 00:06:24
something bad happens in which case then

00:06:20 --> 00:06:25
it just looks like a flaky PC mm-hm and

00:06:23 --> 00:06:27
so what's happening is the system's

00:06:24 --> 00:06:29
managing people now are sort of the

00:06:26 --> 00:06:31
frontline of when vulnerabilities happen

00:06:28 --> 00:06:33
but they use a different set of tools

00:06:30 --> 00:06:34
and their tools like it takes like 2

00:06:32 --> 00:06:36
weeks to figure something out and then

00:06:33 --> 00:06:39
the security people it takes like 3

00:06:35 --> 00:06:41
weeks before that particular one

00:06:38 --> 00:06:43
a pattern that they can go find out and

00:06:40 --> 00:06:45
so we're taenia really comes in is is

00:06:42 --> 00:06:46
now you're just talking about looking at

00:06:44 --> 00:06:49
a network of hundreds of thousands of

00:06:45 --> 00:06:50
nodes and being able to ask anything you

00:06:48 --> 00:06:54
want of that network and get an answer

00:06:49 --> 00:06:57
back instantly so I want to I want to

00:06:53 --> 00:07:00
describe Stephen if you can win tinium

00:06:56 --> 00:07:03
when Orion and his team came in to demo

00:06:59 --> 00:07:08
this you obviously have vast experience

00:07:02 --> 00:07:09
in the advanced on the table but what

00:07:07 --> 00:07:10
happened what did you see and then what

00:07:08 --> 00:07:12
was the reaction

00:07:09 --> 00:07:14
well it's fast you know a lot of folks

00:07:11 --> 00:07:16
here at Andreessen Horowitz are coming

00:07:13 --> 00:07:17
from a very deep operational background

00:07:15 --> 00:07:18
many of them were members of the ops

00:07:16 --> 00:07:21
wear team and of course mark and Ben

00:07:17 --> 00:07:22
created the company and so you're

00:07:20 --> 00:07:25
basically sitting around the table and

00:07:21 --> 00:07:26
we think that there's like 200 odd years

00:07:24 --> 00:07:29
of large-scale enterprise software

00:07:25 --> 00:07:31
management experience and so Ryan comes

00:07:28 --> 00:07:34
in pops open his laptop go opens up a

00:07:30 --> 00:07:35
browser hits a bookmark and starts

00:07:33 --> 00:07:38
typing in questions like show me all the

00:07:34 --> 00:07:39
machine names on the network show me how

00:07:37 --> 00:07:42
many machines are leaking network

00:07:38 --> 00:07:44
leaking a network packet data show me

00:07:41 --> 00:07:46
the md5 hash of all the processes of all

00:07:43 --> 00:07:48
the machines running on all of this

00:07:45 --> 00:07:49
network and we kind of were all thinking

00:07:47 --> 00:07:51
independently we only realized this

00:07:48 --> 00:07:53
after that oh that's a pretty neat

00:07:50 --> 00:07:56
little mock-up of the product that if we

00:07:52 --> 00:07:58
fund them they hope to go build because

00:07:55 --> 00:08:00
there was no conceivable way that he

00:07:57 --> 00:08:02
could be doing this to a network and

00:07:59 --> 00:08:04
then he I think he kind of looked

00:08:01 --> 00:08:07
puzzled you look cases so this is a live

00:08:03 --> 00:08:10
network of of several thousand nodes

00:08:06 --> 00:08:13
running at a HIPAA compliant hospital

00:08:09 --> 00:08:15
ike this is this is a real system

00:08:12 --> 00:08:17
running and they're in production this

00:08:14 --> 00:08:19
not a test it's not a mock-up it's

00:08:16 --> 00:08:20
not a simulate and we just were all

00:08:18 --> 00:08:22
scratching our heads and we literally

00:08:19 --> 00:08:25
couldn't believe that what he was asking

00:08:21 --> 00:08:27
was really possible it was fast actually

00:08:24 --> 00:08:28
like and then we started talking more

00:08:26 --> 00:08:30
and so then I started trying to play

00:08:27 --> 00:08:32
like let's stump Orion with questions

00:08:29 --> 00:08:34
about about networks and so my favorite

00:08:31 --> 00:08:37
vulnerability from the window side was

00:08:33 --> 00:08:39
always the plug in a USB memory stick

00:08:36 --> 00:08:41
and have a virus you know scamper across

00:08:38 --> 00:08:44
the network so I I crossed my arms and I

00:08:40 --> 00:08:47
leaned back and I said I want to know on

00:08:43 --> 00:08:49
this network how many of the pcs have a

00:08:46 --> 00:08:51
USB memory stick in them and are

00:08:48 --> 00:08:52
currently writing to it and I thought

00:08:50 --> 00:08:55
hat's

00:08:51 --> 00:08:56
like a joke and literally in 15 seconds

00:08:54 --> 00:08:58
was the list of the machines that were

00:08:55 --> 00:09:01
currently writing to USB memory on the

00:08:57 --> 00:09:04
network and and Orion again this

00:09:00 --> 00:09:07
15-second response time I mean what's at

00:09:03 --> 00:09:10
stake in those 15 seconds and how under

00:09:06 --> 00:09:13
the hood to the excel you can explain to

00:09:09 --> 00:09:15
us what's happening sure so you know

00:09:12 --> 00:09:17
really the fundamental problem with

00:09:14 --> 00:09:18
existing solutions that we see is that

00:09:16 --> 00:09:21
when you're querying them you're just

00:09:17 --> 00:09:23
querying a database and the database is

00:09:20 --> 00:09:24
being filled on the back end by clients

00:09:22 --> 00:09:27
that are polling once every few hours or

00:09:23 --> 00:09:28
a few days what we're actually doing is

00:09:26 --> 00:09:30
reaching out and touching every endpoint

00:09:27 --> 00:09:32
so synchronously because you're asking a

00:09:29 --> 00:09:34
question we're actually asking them a

00:09:31 --> 00:09:36
question they evaluate a piece of data

00:09:33 --> 00:09:38
nd then they come back to you with it

00:09:35 --> 00:09:39
and we've created this topology the ring

00:09:37 --> 00:09:42
architecture that we have which

00:09:38 --> 00:09:45
essentially allows clients endpoints to

00:09:41 --> 00:09:47
aggregate data on the land before they

00:09:44 --> 00:09:50
send back one answer back from the whole

00:09:46 --> 00:09:51
land that represents all of the machines

00:09:49 --> 00:09:53
that are out there so if you think about

00:09:50 --> 00:09:55
a branch environment you think about the

00:09:52 --> 00:09:56
largest scale retail environments or

00:09:54 --> 00:09:59
banking environments they may have

00:09:55 --> 00:10:01
thousands of different lands in each

00:09:58 --> 00:10:04
branch and then they may have thousands

00:10:00 --> 00:10:05
of machines that are in these you know

00:10:03 --> 00:10:07
core environments and what we're

00:10:04 --> 00:10:10
ssentially doing is automatically

00:10:06 --> 00:10:12
constructing these groups based on

00:10:09 --> 00:10:14
proximity of the machines so that they

00:10:11 --> 00:10:15
know they can talk to each other because

00:10:13 --> 00:10:17
they're close to each other and

00:10:14 --> 00:10:19
essentially we've created a mechanism

00:10:16 --> 00:10:21
where they can automatically aggregate

00:10:18 --> 00:10:24
data when a question is asked and send

00:10:20 --> 00:10:25
back one message across the land that

00:10:23 --> 00:10:27
contains all the data that you were

00:10:24 --> 00:10:29
asking for so really efficient on the

00:10:26 --> 00:10:30
way in and you don't need to have a ton

00:10:28 --> 00:10:33
of infrastructure to back it up so to

00:10:29 --> 00:10:35
Stephens point where you know oftentimes

00:10:32 --> 00:10:38
you guys are asking queries and in

00:10:34 --> 00:10:40
current systems and and things slow way

00:10:37 --> 00:10:42
down I can't get anything done what's

00:10:39 --> 00:10:44
the sort of the load on the system when

00:10:41 --> 00:10:48
queries are coming through taenia

00:10:43 --> 00:10:50
yeah 0.1% CPUs a 0.1% CPU on a tiny

00:10:47 --> 00:10:53
little runtime that's what like a mega

00:10:49 --> 00:10:55
installer seven Meg of RAM 10 Meg

00:10:52 --> 00:10:56
on disk so the beauty of this whole

00:10:54 --> 00:10:59
thing is it's so lightweight you can

00:10:55 --> 00:11:00
actually put it in VMs we have people

00:10:58 --> 00:11:02
who are putting it on process

00:10:59 --> 00:11:03
controllers and ATMs and point of sale

00:11:01 --> 00:11:06
devices and the heart rate monitors I

00:11:03 --> 00:11:08
mean devices that a lot of people wish

00:11:05 --> 00:11:10
were not computers so you look at the

00:11:07 --> 00:11:11
target attack you know a lot of people

00:11:09 --> 00:11:13
don't think of a point-of-sale device as

00:11:10 --> 00:11:15
a computer or didn't until they realize

00:11:12 --> 00:11:18
it's an existential threat to their

00:11:14 --> 00:11:20
organization not to right and so in

00:11:17 --> 00:11:22
these massive systems and Steven oh I

00:11:19 --> 00:11:23
want you to answer this like what

00:11:21 --> 00:11:25
happens if I don't know what questions

00:11:22 --> 00:11:28
to ask I mean like when things look

00:11:24 --> 00:11:31
benign they look benign how do I know

00:11:27 --> 00:11:33
how do I sort of uncover well yeah this

00:11:30 --> 00:11:35
is what's really going on in the in

00:11:32 --> 00:11:37
the world of systems management and

00:11:34 --> 00:11:38
security right now your your what's

00:11:36 --> 00:11:40
happening is you've got all of these

00:11:37 --> 00:11:42
tools sort of firing off like this might

00:11:39 --> 00:11:43
be a problem this might be a problem we

00:11:41 --> 00:11:46
call these i/o sees these indicators of

00:11:42 --> 00:11:47
compromise right and and if you look at

00:11:45 --> 00:11:50
one of them and you know if you're an IT

00:11:47 --> 00:11:52
pros of these if you look at them it's a

00:11:49 --> 00:11:54
series of you're looking for this file

00:11:51 --> 00:11:56
for this process this Windows registry

00:11:53 --> 00:11:58
key change you know this this little

00:11:55 --> 00:12:01
piece of software ended up on a Mac and

00:11:57 --> 00:12:03
you actually have all of these and the

00:12:00 --> 00:12:04
problem is that today and that's also

00:12:02 --> 00:12:07
the collective knowledge of the Internet

00:12:03 --> 00:12:08
like like everybody is contributing to

00:12:06 --> 00:12:11
these there's feeds of I OCS you could

00:12:07 --> 00:12:12
subscribe to them but you can't do

00:12:10 --> 00:12:14
anything about it because all you could

00:12:12 --> 00:12:16
o is query the the databases all Ryan

00:12:13 --> 00:12:17
mentioned and find out if maybe three

00:12:15 --> 00:12:20
weeks ago I might have had a machine

00:12:16 --> 00:12:21
that met that pattern and and of course

00:12:19 --> 00:12:24
none of these attacks are last even that

00:12:20 --> 00:12:26
long and so what what you can do now is

00:12:23 --> 00:12:29
you can actually use these as inputs in

00:12:25 --> 00:12:30
to entertain iam and and actually answer

00:12:28 --> 00:12:32
them and that's sort of the the

00:12:29 --> 00:12:33
fundamental thing I mean you really have

00:12:31 --> 00:12:35
to get your head and one of the reasons

00:12:32 --> 00:12:37
that we get so excited about tinium as

00:12:34 --> 00:12:39
an investment for for andreessen

00:12:36 --> 00:12:42
horowitz was that these guys invented an

00:12:38 --> 00:12:44
incredibly cool technology and and the

00:12:41 --> 00:12:46
way that they deployed it it you know we

00:12:43 --> 00:12:48
mesh networking has been around for a

00:12:45 --> 00:12:50
long time peer-to-peer networking around

00:12:47 --> 00:12:53
for a long time and most of those hadn't

00:12:49 --> 00:12:54
really reached any any critical uses in

00:12:52 --> 00:12:56
the enterprise and they have this

00:12:53 --> 00:12:59
amazing insight that if you could walk

00:12:55 --> 00:13:00
up to any computer knowing the answer to

00:12:58 --> 00:13:02
ne of these questions is sort of like a

00:12:59 --> 00:13:05
constant time operation is the registry

00:13:01 --> 00:13:06
key there or not that takes no time the

00:13:04 --> 00:13:08
problem was if you had two hundred

00:13:05 --> 00:13:10
thousand nodes and you had two

00:13:07 --> 00:13:12
hub-and-spoke ask them all of that

00:13:09 --> 00:13:14
question you'll never finish whereas if

00:13:11 --> 00:13:16
you can just get a message broadcast to

00:13:13 --> 00:13:16
all of them answer this question on your

00:13:15 --> 00:13:18
own

00:13:15 --> 00:13:20
and then just share the answer with the

00:13:17 --> 00:13:23
computer next to you it turns out you

00:13:19 --> 00:13:24
can actually do that instantly and and

00:13:22 --> 00:13:27
so it's sort of to me one of the very

00:13:23 --> 00:13:30
first commercial and commercially viable

00:13:26 --> 00:13:31
uses of mash and peer-to-peer networking

00:13:29 --> 00:13:32
and that and I don't want to use those

00:13:30 --> 00:13:34
terms because they get a little bit

00:13:31 --> 00:13:36
loaded but they actually invented a

00:13:33 --> 00:13:37
specific implementation they called

00:13:35 --> 00:13:38
linear peer-to-peer networking and you

00:13:36 --> 00:13:40
could read more about it on the blog

00:13:37 --> 00:13:42
post that talks about you know the cool

00:13:39 --> 00:13:44
way that they brought these technologies

00:13:41 --> 00:13:46
together so give us an example um

00:13:43 --> 00:13:49
heartbleed was something that caused

00:13:45 --> 00:13:52
many hearts to bleed how did something

00:13:48 --> 00:13:54
like that in your environment you know

00:13:51 --> 00:13:55
crop up and then get handled yeah so

00:13:53 --> 00:13:57
it's actually a really interesting

00:13:54 --> 00:13:59
question our customers literally could

00:13:56 --> 00:14:01
ask an english-language question tell me

00:13:58 --> 00:14:03
all the machines and versions of OpenSSL

00:14:00 --> 00:14:05
for every machine that's got open SSL

00:14:02 --> 00:14:07
across the environment and get an answer

00:14:04 --> 00:14:09
back in 15 seconds they didn't have to

00:14:06 --> 00:14:11
create a script they didn't have to wait

00:14:08 --> 00:14:13
days and we still are getting notices

00:14:10 --> 00:14:14
from companies that they're realizing

00:14:12 --> 00:14:18
that they're affected by heartbleed

00:14:13 --> 00:14:19
right it's been a long time since that

00:14:17 --> 00:14:21
first announcement came out and yet

00:14:18 --> 00:14:23
people have tools that are so broken

00:14:20 --> 00:14:26
they can't tell that for months

00:14:22 --> 00:14:27
potentially and what tinium customers

00:14:25 --> 00:14:29
were able to do is literally ask you a

00:14:26 --> 00:14:31
question in English and be able to see

00:14:28 --> 00:14:32
xactly where they were affected and

00:14:30 --> 00:14:33
then you know another thing that a Neum

00:14:31 --> 00:14:36
can do is allow you to actually fix

00:14:32 --> 00:14:38
things so quarantine machines turn

00:14:35 --> 00:14:40
firewalls on stop services that were

00:14:37 --> 00:14:42
affected I mean our customers were in

00:14:39 --> 00:14:44
full triage mode and they weren't

00:14:41 --> 00:14:46
looking at cycles of triage that took

00:14:43 --> 00:14:47
weeks or months they could do it in

00:14:45 --> 00:14:48
seconds and confirm that they were

00:14:46 --> 00:14:50
actually doing what they did intended

00:14:47 --> 00:14:52
and see where the gaps were yeah that

00:14:49 --> 00:14:53
was sort of one of the most

00:14:51 --> 00:14:56
fascinating things that we learned and

00:14:52 --> 00:14:58
looking at a Neum was that what

00:14:55 --> 00:15:00
heartbleed happens and you know the most

00:14:57 --> 00:15:02
obvious first question that every every

00:14:59 --> 00:15:04
CEO all of a sudden needed to do was

00:15:01 --> 00:15:06
please you know IT folks tell me how

00:15:03 --> 00:15:07
many machines we have affected and if

00:15:05 --> 00:15:08
you remember what was happening at that

00:15:06 --> 00:15:10
moment companies were issuing press

00:15:07 --> 00:15:13
releases about about heartbleed and they

00:15:09 --> 00:15:14
were saying we are looking into it and

00:15:12 --> 00:15:16
you're like well that's not a really

00:15:13 --> 00:15:19
good answer for like and it turns out

00:15:15 --> 00:15:21
for days most companies had no idea

00:15:18 --> 00:15:22
whether they were affected now now Orion

00:15:20 --> 00:15:23
told us well there are all their

00:15:21 --> 00:15:25
customers realized they were all

00:15:22 --> 00:15:27
affected like everybody and you know you

00:15:24 --> 00:15:28
think of a large enterprise you've got

00:15:26 --> 00:15:29
code written by vendors you're running

00:15:27 --> 00:15:31
things

00:15:28 --> 00:15:32
offsite you have branch offices that

00:15:30 --> 00:15:34
might be using a different product that

00:15:31 --> 00:15:36
you don't know about in the central

00:15:33 --> 00:15:38
office and so really those press

00:15:35 --> 00:15:41
releases were accurate they didn't know

00:15:37 --> 00:15:45
and so you put what but it's an

00:15:40 --> 00:15:46
existential thing you know every CEO of

00:15:44 --> 00:15:49
every major corporation is now

00:15:45 --> 00:15:50
effectively an IT person because every

00:15:48 --> 00:15:52
company in software eats the world is

00:15:49 --> 00:15:55
really a software company so I want to

00:15:51 --> 00:15:56
get that like how you know this problem

00:15:54 --> 00:15:58
that you've been working on for years

00:15:55 --> 00:16:00
now you know with big fix and now obtain

00:15:57 --> 00:16:01
iam how does that describe the

00:15:59 --> 00:16:02
architecture that you've you going

00:16:00 --> 00:16:04
forward what does the future look like

00:16:01 --> 00:16:07
and I want both of you to answer this

00:16:03 --> 00:16:08
and and and how do then we tackle these

00:16:06 --> 00:16:11
things as scale gets bigger and bigger

00:16:07 --> 00:16:12
and more and more complex so that's the

00:16:10 --> 00:16:15
scary thing right people think hundreds

00:16:11 --> 00:16:18
of thousands of machines is a lot it's

00:16:14 --> 00:16:21
not gonna be a lot coming soon right IOT

00:16:17 --> 00:16:23
and people going in embedding chips and

00:16:20 --> 00:16:25
lightbulbs means we need to be scaling

00:16:22 --> 00:16:27
to potentially billions of devices and

00:16:24 --> 00:16:29
being able to assess them for telemetry

00:16:26 --> 00:16:31
and state and you know the hub-and-spoke

00:16:28 --> 00:16:33
model we already know is broken at

00:16:30 --> 00:16:35
hundreds of thousands we don't even want

00:16:32 --> 00:16:37
o talk about millions or billions right

00:16:34 --> 00:16:40
we need a fundamentally new architecture

00:16:36 --> 00:16:42
and so what we see is the possibility to

00:16:39 --> 00:16:45
embed this you know ring and linear

00:16:41 --> 00:16:47
peer-to-peer communications model into a

00:16:44 --> 00:16:48
myriad set of devices that some of which

00:16:46 --> 00:16:50
are going to be very lightweight right

00:16:47 --> 00:16:52
we're looking at watches and light bulbs

00:16:49 --> 00:16:54
ome of which are going to be very heavy

00:16:51 --> 00:16:56
like servers and have a you know a

00:16:53 --> 00:16:58
language that all of these devices that

00:16:55 --> 00:17:00
have computability and that also have

00:16:57 --> 00:17:02
telemetry data on them should be able to

00:16:59 --> 00:17:04
speak with each other so that they can

00:17:01 --> 00:17:09
gather data about you know heat and

00:17:03 --> 00:17:10
power and location and you know more you

00:17:08 --> 00:17:13
know complicated things like which

00:17:09 --> 00:17:14
applications are running and what the

00:17:12 --> 00:17:16
workloads are and be able to aggregate

00:17:13 --> 00:17:18
those in real time and we believe that

00:17:15 --> 00:17:19
essentially fundamentally if you don't

00:17:17 --> 00:17:22
have real time data you're basically

00:17:18 --> 00:17:24
always playing whack-a-mole right if

00:17:21 --> 00:17:26
it's really really old data if it's days

00:17:23 --> 00:17:28
or weeks old data it's probably

00:17:25 --> 00:17:29
completely useless and if it's even

00:17:27 --> 00:17:32
minutes old data

00:17:28 --> 00:17:33
you're subtly wrong and what we believe

00:17:31 --> 00:17:34
is that all data is gonna have to move

00:17:32 --> 00:17:37
toward real time and we believe that

00:17:33 --> 00:17:39
's possible with us yeah I mean

00:17:36 --> 00:17:41
that's fundamentally what's so exciting

00:17:38 --> 00:17:42
about about the future of obtain iam is

00:17:40 --> 00:17:46
that they've developed an innovative

00:17:41 --> 00:17:48
architecture and and a really creative

00:17:45 --> 00:17:50
and inventive approach to how you can

00:17:47 --> 00:17:53
really scale in a unique way and it's

00:17:49 --> 00:17:55
uper clear that down the road that when

00:17:52 --> 00:17:56
you have a billion a billion devices or

00:17:54 --> 00:17:58
endpoints that they're all still gonna

00:17:55 --> 00:18:00
that they're gonna be near each other in

00:17:57 --> 00:18:01
these clusters and so that communication

00:17:59 --> 00:18:03
technique and that you know that's so

00:18:00 --> 00:18:05
different than hub-and-spoke is a huge

00:18:02 --> 00:18:06
asset going forward the last thing I

00:18:04 --> 00:18:08
just wanted to mention that's super cool

00:18:06 --> 00:18:11
about the product is it's effectively

00:18:07 --> 00:18:14
one giant API and so although you can go

00:18:10 --> 00:18:15
as a browser and go and and access it

00:18:13 --> 00:18:18
hrough this natural language interface

00:18:14 --> 00:18:19
you can also just use the API build your

00:18:17 --> 00:18:21
own model for how you want to ask

00:18:18 --> 00:18:23
questions of the network and model them

00:18:20 --> 00:18:25
and deploy tools and and charts and

00:18:22 --> 00:18:27
graphs and dashboards that are

00:18:24 --> 00:18:30
constantly and in real-time monitoring

00:18:26 --> 00:18:32
your network well Ryan thanks for coming

00:18:29 --> 00:18:35
by Steven thanks as always awesome thank

00:18:31 --> 00:18:35
you thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
