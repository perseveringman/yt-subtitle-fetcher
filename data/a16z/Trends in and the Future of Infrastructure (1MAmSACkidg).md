---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "1MAmSACkidg"
title: "Trends in and the Future of Infrastructure"
video_url: "https://www.youtube.com/watch?v=1MAmSACkidg"
thumbnail_url: "https://i.ytimg.com/vi/1MAmSACkidg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=1MAmSACkidg"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-15T23:24:22.000Z"
upload_date: "2017-07-15"
duration_seconds: 1378
duration_human: "22:58"
view_count: 14512
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:27:49.787Z"
---

# Trends in and the Future of Infrastructure

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=1MAmSACkidg
- video_id: 1MAmSACkidg
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-15T23:24:22.000Z
- upload_date: 2017-07-15
- duration: 22:58
- view_count: 14512
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: #technology, #cloud computing, #software
- categories: Science & Technology

## Description

"Infrastructure is dead", some say, thanks to cloud computing -- and a couple large incumbents sucking out all the profits in this space. Er... not really. We're actually entering a renaissance of sorts -- a "golden era of infrastructure" -- and it's one that is biased towards startups. They're the ones who have the unfair advantage, argues a16z general partner (and former Nicira co-founder/CTO) Martin Casado in this talk.
One of the fathers of software-defined networking (SDN), Casado shares what happens when you put a "software-defined" in front of everything: No silo is safe. And it's not just storage; it's computing, networking, security, management, databases, analytics, development, and so on.
So how are enterprise applications evolving? Is it really similar to what happened with consumer tools? And what will it take for startups to truly take on incumbents in this space? In this talk, previously delivered at other industry events, Casado shares his thoughts on the future of infrastructure as well as views on how 3 important trends coming together: hardware to software; software to services; and finally, the rise of the developer...

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:05
this is Martin cassado I'm a general

00:00:02 --> 00:00:06
partner here at Andre and Horwitz and

00:00:04 --> 00:00:08
I'm going to be talking about the future

00:00:05 --> 00:00:10
of

00:00:07 --> 00:00:12
infrastructure so unfortunately this has

00:00:09 --> 00:00:14
the potential to be a very short talk I

00:00:11 --> 00:00:18
mean what is there to talk about it

00:00:13 --> 00:00:20
probably hasn't grown or is flat to down

00:00:17 --> 00:00:21
even in the last few years you know

00:00:19 --> 00:00:23
there's a lot of talk about Cloud nobody

00:00:20 --> 00:00:24
knows what that really means but most

00:00:22 --> 00:00:26
people think it's kind of the death of

00:00:23 --> 00:00:28
infrastructure right you've got one or

00:00:25 --> 00:00:31
two large players that are sucking out

00:00:27 --> 00:00:32
all of the profits very large in all of

00:00:30 --> 00:00:34
them seem to be having problems that I

00:00:32 --> 00:00:37
sell into this space you know IBM has

00:00:33 --> 00:00:38
posted a lot of quarteron quarter losses

00:00:36 --> 00:00:40
you know no matter who you talk to in

00:00:37 --> 00:00:41
Silicon Valley this is what people think

00:00:39 --> 00:00:43
right whether it's an investor whether

00:00:40 --> 00:00:44
it's vendors whether it's Engineers

00:00:42 --> 00:00:46
whether it's operators everybody thinks

00:00:43 --> 00:00:48
you know come on we're in the armpit of

00:00:45 --> 00:00:50
infrastructure in my view is like this

00:00:47 --> 00:00:52
couldn't be more

00:00:49 --> 00:00:54
wrong so I don't think that we're seeing

00:00:51 --> 00:00:56
a death I think actually we're seeing a

00:00:53 --> 00:00:58
transformation and so just like in you

00:00:55 --> 00:01:00
know France when like one king died and

00:00:57 --> 00:01:01
the next king was being ascended and

00:00:59 --> 00:01:03
coronated you say you know the king is

00:01:01 --> 00:01:05
dead long live the king I think yes we

00:01:02 --> 00:01:07
are seeing a change in infrastructure

00:01:04 --> 00:01:08
but I think what's coming is going to be

00:01:06 --> 00:01:10
bigger and B and more awesome it's like

00:01:07 --> 00:01:12
a total Renaissance in infrastructure

00:01:09 --> 00:01:14
and makes me very excited so what I'm

00:01:11 --> 00:01:15
going to do is I'm going to talk about

00:01:13 --> 00:01:17
his new era this Golden Era of

00:01:14 --> 00:01:21
infrastructure that we're moving into

00:01:17 --> 00:01:22
and why I think it is biased towards new

00:01:20 --> 00:01:24
startups which I believe actually have

00:01:21 --> 00:01:26
an unfair Advantage but let me start

00:01:23 --> 00:01:29
from the

00:01:25 --> 00:01:32
beginning it is a very large Market it's

00:01:28 --> 00:01:34
a $4 trillion market and we all know

00:01:31 --> 00:01:36
it's starting to be disrupted by cloud

00:01:33 --> 00:01:37
and many think that the disruptions

00:01:35 --> 00:01:39
already happened but if you actually

00:01:36 --> 00:01:42
look at the relative sizes we're just

00:01:38 --> 00:01:43
arting the cusp of this transformation

00:01:41 --> 00:01:45
I mean Cloud if you look at it is

00:01:42 --> 00:01:47
omething like if you take SAS and

00:01:44 --> 00:01:50
public cloud is maybe you know 220 to

00:01:46 --> 00:01:52
$240 billion market so relative to the

00:01:49 --> 00:01:54
$4 trillion Market we're only about 6%

00:01:51 --> 00:01:56
of the way there and these

00:01:53 --> 00:01:59
Transformations kind of have punctuated

00:01:55 --> 00:02:01
the history of computer science and

00:01:58 --> 00:02:03
every time these happen one of two

00:02:00 --> 00:02:06
things seem to follow and suit so the

00:02:03 --> 00:02:09
first one is the size of the market

00:02:05 --> 00:02:11
increases so let's take for example the

00:02:08 --> 00:02:12
very beginning was Mainframe only a few

00:02:10 --> 00:02:13
companies could afford the Mainframe

00:02:11 --> 00:02:15
right so maybe you're saying you know

00:02:12 --> 00:02:17
maybe a thousand companies then you move

00:02:14 --> 00:02:19
to the microcomputer which brought it to

00:02:16 --> 00:02:22
more companies and then to the PC which

00:02:18 --> 00:02:23
kind of put a computer on most desktops

00:02:21 --> 00:02:24
o if you look at the relative size of

00:02:22 --> 00:02:28
the markets went you know you've got a

00:02:23 --> 00:02:29
few large companies to more companies to

00:02:27 --> 00:02:32
every desktop so you say maybe you had

00:02:28 --> 00:02:33
two billion PC out there but then now

00:02:31 --> 00:02:35
you're seeing the shift to cloud and to

00:02:33 --> 00:02:37
mobile and then to internet of things

00:02:34 --> 00:02:40
and if you think about it if you go from

00:02:36 --> 00:02:42
say every PC of two billion to mobile

00:02:39 --> 00:02:43
you've now connected every person we

00:02:41 --> 00:02:44
keep hearing the number something like

00:02:42 --> 00:02:46
50 billion phones are going to be out

00:02:43 --> 00:02:47
here at a period of time and you go to

00:02:45 --> 00:02:48
internet of things you're talking about

00:02:46 --> 00:02:50
rillions of potential end points and

00:02:47 --> 00:02:52
everything gets connected so the size of

00:02:49 --> 00:02:54
the market is going to increase so the

00:02:51 --> 00:02:56
second thing that happens in every time

00:02:53 --> 00:02:59
that you have one of these epochs is the

00:02:55 --> 00:03:03
xisting incumbents from a previous era

00:02:59 --> 00:03:04
very rarely make it to the new one right

00:03:02 --> 00:03:06
if you actually look at the names were

00:03:03 --> 00:03:08
levant in the main frame they do

00:03:05 --> 00:03:09
entirely different things today and so I

00:03:07 --> 00:03:11
think that we're starting to see kind of

00:03:08 --> 00:03:14
this big disruption happen now and both

00:03:10 --> 00:03:16
e market size is going to increase but

00:03:13 --> 00:03:18
also the companies that are going to

00:03:15 --> 00:03:20
persevere the companies that are going

00:03:17 --> 00:03:22
to rise to the challenge and become the

00:03:19 --> 00:03:24
new incumbents are those that are just

00:03:21 --> 00:03:27
getting started

00:03:23 --> 00:03:29
today and so as I alluded to previous in

00:03:26 --> 00:03:30
the talk I think that not only are we

00:03:28 --> 00:03:32
going to see a whole new set of challeng

00:03:29 --> 00:03:34
ERS which is really exciting but I don't

00:03:31 --> 00:03:35
hink it's ever been like in the history

00:03:33 --> 00:03:38
of computation I don't think it's ever

00:03:34 --> 00:03:40
been easier for new entrance especially

00:03:37 --> 00:03:42
small technical startups to come and get

00:03:39 --> 00:03:43
a foothold and I'd like to describe why

00:03:41 --> 00:03:45
that

00:03:42 --> 00:03:48
is okay so I'm going to be talking about

00:03:44 --> 00:03:50
Broadley 3 trends that are causing this

00:03:47 --> 00:03:51
disruption and creating a lot of the

00:03:49 --> 00:03:53
dynamic and this is the move from

00:03:50 --> 00:03:54
Hardware to software the move from

00:03:52 --> 00:03:55
software to services and the rise of

00:03:53 --> 00:03:58
developer so I'm going to start by

00:03:54 --> 00:03:59
talking about each one of these in turn

00:03:57 --> 00:04:02
so the first Trend I want to talk about

00:03:58 --> 00:04:03
is the software defin movement so

00:04:01 --> 00:04:05
there's been many definitions of

00:04:02 --> 00:04:07
software defined so many so and it's

00:04:04 --> 00:04:08
been so diluted by marketing literature

00:04:06 --> 00:04:09
I've kind of lost track of what they

00:04:07 --> 00:04:11
mean so I'm going to come up with my own

00:04:08 --> 00:04:13
working definition so the working

00:04:10 --> 00:04:15
definition that I have is if a bit of

00:04:12 --> 00:04:17
unctionality can be implemented and

00:04:14 --> 00:04:19
elivered entirely in software then it's

00:04:16 --> 00:04:20
oftware defined that means it's not

00:04:18 --> 00:04:22
encased in sheet metal that means it's

00:04:19 --> 00:04:24
not bound to an Asic that means entirely

00:04:21 --> 00:04:27
in software it's software

00:04:23 --> 00:04:28
defin now infrastructure is going to a

00:04:26 --> 00:04:32
similar transformation to what consumer

00:04:27 --> 00:04:35
tools went through in the early 2000s so

00:04:31 --> 00:04:36
do you remember uh GPS devices right

00:04:34 --> 00:04:38
hese are these fixed function things

00:04:35 --> 00:04:39
that you rented a car you're going to go

00:04:37 --> 00:04:40
stick it in because you didn't know

00:04:38 --> 00:04:42
here you're going to go and then it

00:04:39 --> 00:04:44
would show you where to go right so back

00:04:41 --> 00:04:46
in the early 2000s most digital devices

00:04:43 --> 00:04:48
in our lives were fixed functions right

00:04:45 --> 00:04:49
you'd have GPS's for you know to find

00:04:47 --> 00:04:51
things you would have devices are

00:04:48 --> 00:04:52
special purpose for games you had

00:04:50 --> 00:04:54
special purposes for healthcare you had

00:04:51 --> 00:04:56
special purposes for learning every

00:04:53 --> 00:04:58
device was fixed function and all of

00:04:55 --> 00:05:02
that changed and changed dramatically so

00:04:57 --> 00:05:04
around you know 2005 2006 2007 when

00:05:01 --> 00:05:05
smartphones started to take off so I

00:05:03 --> 00:05:09
think one of the good examples of this

00:05:05 --> 00:05:10
ways so previously like I mentioned

00:05:08 --> 00:05:13
GPS devices were Hardware they were

00:05:09 --> 00:05:16
fixed function and way started in about

00:05:12 --> 00:05:18
I think it was 2007 and it went through

00:05:15 --> 00:05:22
three rounds of funding probably got $70

00:05:17 --> 00:05:25
million in total and within five years

00:05:21 --> 00:05:27
it had amassed I think 50 million users

00:05:24 --> 00:05:28
and was sold to Google for a billion

00:05:26 --> 00:05:30
dollars and if you look about what

00:05:27 --> 00:05:32
happened there is you had a small team

00:05:29 --> 00:05:33
ofof developers that just focused just

00:05:31 --> 00:05:35
on Innovation just on delivering

00:05:32 --> 00:05:37
software they didn't have to deal with

00:05:34 --> 00:05:40
you know hardware supply chain dealing

00:05:36 --> 00:05:42
with all of the difficulty of building a

00:05:39 --> 00:05:44
hardware device and focus just on what

00:05:41 --> 00:05:46
hey were doing best and so you create

00:05:43 --> 00:05:47
billion dollars of value very quickly

00:05:45 --> 00:05:49
and of course this isn't just ways this

00:05:47 --> 00:05:51
many different areas of the consumer

00:05:48 --> 00:05:52
device I mean all of games have been

00:05:50 --> 00:05:54
disrupted a lot of healthcare is

00:05:51 --> 00:05:56
tarting to be disruptive and so we've

00:05:53 --> 00:05:58
seen this play out in the consumer era

00:05:56 --> 00:06:02
nd if you look at like what was the

00:05:57 --> 00:06:04
single innovation or the single Trend

00:06:01 --> 00:06:07
that made this possible is that for the

00:06:03 --> 00:06:09
first time everybody or a large portion

00:06:06 --> 00:06:10
of people had a ubiquitous platform that

00:06:08 --> 00:06:12
you could install this software on I

00:06:09 --> 00:06:13
mean previously it just wasn't capable

00:06:11 --> 00:06:15
so you had to not only give them the

00:06:12 --> 00:06:17
device but you had to give them the

00:06:14 --> 00:06:18
device and the software on top of it and

00:06:16 --> 00:06:20
now the device had already been solved

00:06:17 --> 00:06:22
and it was sufficiently General that it

00:06:19 --> 00:06:24
could run all of these applications and

00:06:21 --> 00:06:25
that was the inflection point that

00:06:23 --> 00:06:27
caused this massive destabilizing in the

00:06:25 --> 00:06:28
consumer

00:06:26 --> 00:06:30
industry okay so what's really

00:06:28 --> 00:06:32
fascinating is infrastructure is

00:06:29 --> 00:06:35
following a very similar pattern

00:06:31 --> 00:06:36
traditionally there was no standard

00:06:34 --> 00:06:38
interface for inserting software into

00:06:35 --> 00:06:40
the Enterprise I mean the only standard

00:06:37 --> 00:06:42
interfaces really were at the network

00:06:39 --> 00:06:43
level right stuff like ethernet and IP

00:06:41 --> 00:06:46
and as a result if I wanted to build

00:06:43 --> 00:06:49
some functionality say security and

00:06:45 --> 00:06:51
bring it to a company the only approach

00:06:48 --> 00:06:53
I could take that was reasonable was to

00:06:50 --> 00:06:54
take that functionality put it in a box

00:06:52 --> 00:06:56
and then have that box connect to the

00:06:53 --> 00:06:59
network I mean it's the only insertion

00:06:55 --> 00:07:00
point that I had so in the last say five

00:06:58 --> 00:07:02
six years this has changed CH

00:06:59 --> 00:07:05
dramatically so that we've seen a

00:07:01 --> 00:07:07
massive unification and a maturation of

00:07:04 --> 00:07:08
abstractions in the software Stacks at

00:07:06 --> 00:07:10
companies and this has happen at every

00:07:07 --> 00:07:12
layer right we're seeing maturation of

00:07:09 --> 00:07:14
insertion points for infrastructure at

00:07:11 --> 00:07:16
he hypervisor um we're seeing at the

00:07:13 --> 00:07:17
operating system uh we're seeing it in

00:07:15 --> 00:07:18
many platform as a service and

00:07:16 --> 00:07:20
application platforms and the cloud

00:07:18 --> 00:07:22
management platforms so what does that

00:07:19 --> 00:07:24
all mean I mean that sounds like a lot

00:07:21 --> 00:07:26
of technical words but what that means

00:07:23 --> 00:07:28
is if I want to build functionality just

00:07:25 --> 00:07:30
in software I actually now have

00:07:27 --> 00:07:32
insertion points that I can reasonably

00:07:29 --> 00:07:34
expect to be there in any company for

00:07:31 --> 00:07:35
example I can assume they're going to be

00:07:33 --> 00:07:37
running Linux or I can assume that

00:07:34 --> 00:07:39
hey're going to have adopted some open

00:07:36 --> 00:07:40
source that I know so now I don't

00:07:38 --> 00:07:42
necessarily have to take my

00:07:39 --> 00:07:45
functionality and put it in a box that

00:07:41 --> 00:07:46
really reduces a the amount of

00:07:44 --> 00:07:48
investment I have to do in building the

00:07:45 --> 00:07:50
product the amount of investment I need

00:07:47 --> 00:07:52
to do into Distributing that product but

00:07:49 --> 00:07:54
it also allows me to really focus on my

00:07:51 --> 00:07:56
core competency which would be like

00:07:53 --> 00:07:59
software development for whatever this

00:07:55 --> 00:08:02
I have a personal experience with

00:07:58 --> 00:08:05
is so I founded a company in 2007

00:08:01 --> 00:08:08
called Nera and the idea at the time was

00:08:04 --> 00:08:09
to take Network functionality L2 L3 L4

00:08:07 --> 00:08:11
through 7 Services of traditional

00:08:08 --> 00:08:13
networking functionality and deliver it

00:08:10 --> 00:08:15
entirely in software and run it within

00:08:12 --> 00:08:17
the hypervisor and at the time people

00:08:14 --> 00:08:19
thought this was nutty actually I mean I

00:08:16 --> 00:08:21
remember very well so um you know I was

00:08:18 --> 00:08:22
raising money I talked to one of the

00:08:20 --> 00:08:23
investors he was actually very

00:08:21 --> 00:08:25
supportive ended up being a very

00:08:22 --> 00:08:27
supportive investor um but we were

00:08:24 --> 00:08:29
having drinks over at the Rosewood by

00:08:26 --> 00:08:30
Sand Hill and I was saying listen I

00:08:28 --> 00:08:31
think that the right thing to do is not

00:08:29 --> 00:08:33
o worry about building Hardware Supply

00:08:30 --> 00:08:34
chains to implement functionality in

00:08:32 --> 00:08:35
software and I remember he looked at me

00:08:33 --> 00:08:37
said you know Martin like I know you're

00:08:34 --> 00:08:39
a super excitable kid and I know you're

00:08:36 --> 00:08:41
a really smart kid but like in my heart

00:08:38 --> 00:08:44
of hearts the only way you'll ever be

00:08:40 --> 00:08:45
able to do this is by putting it in an

00:08:43 --> 00:08:47
appliance because that's the only way

00:08:45 --> 00:08:48
that customers know how to consume it

00:08:46 --> 00:08:50
's the only way that you can actually

00:08:47 --> 00:08:52
have unification of Hardware otherwise

00:08:49 --> 00:08:53
you have to deal with all sorts of

00:08:51 --> 00:08:54
different environments it's kind of the

00:08:52 --> 00:08:57
only way that customers know how to buy

00:08:53 --> 00:08:58
it and at the time I thought well okay

00:08:56 --> 00:09:00
ou know there's a new way to do it and

00:08:57 --> 00:09:01
over the course of ner which was 5 years

00:08:59 --> 00:09:04
I actually got in an appreciation for

00:09:00 --> 00:09:05
that it is true that that is the

00:09:03 --> 00:09:06
state-ofthe-art or was the

00:09:04 --> 00:09:08
state-ofthe-art but you've had so many

00:09:05 --> 00:09:10
changes with things like say open

00:09:07 --> 00:09:12
stacker the adoption of Linux the rise

00:09:09 --> 00:09:14
of hypervisors that the environment

00:09:11 --> 00:09:16
actually changed and what we were able

00:09:13 --> 00:09:19
to do over the next you know five years

00:09:15 --> 00:09:21
and only $40 million in funding was to

00:09:18 --> 00:09:23
build a billion dollar company who you

00:09:20 --> 00:09:25
know i' say six months prior to this

00:09:22 --> 00:09:28
recording that product that we built all

00:09:24 --> 00:09:30
in software um was at a $600 million run

00:09:27 --> 00:09:32
rate and so this was this massive shift

00:09:29 --> 00:09:34
from people thinking that you can only

00:09:31 --> 00:09:35
do things in Hardware to now this very

00:09:33 --> 00:09:38
large product that's generated you

00:09:34 --> 00:09:40
know billions of dollars of value and

00:09:37 --> 00:09:42
this isn't limited to Nera and ner

00:09:40 --> 00:09:44
wasn't a oneoff you actually see this

00:09:41 --> 00:09:45
disruption happening at all layers of

00:09:43 --> 00:09:47
the stack whether you know it's Security

00:09:44 --> 00:09:49
in the operating system where it's

00:09:46 --> 00:09:51
torage whether it's the actual Network

00:09:48 --> 00:09:53
infrastructure itself compute databases

00:09:50 --> 00:09:55
all of these verticals that have

00:09:52 --> 00:09:57
traditionally been tied to a box

00:09:54 --> 00:09:59
traditionally been tied to Hardware are

00:09:56 --> 00:10:01
now being disrupted by software only

00:09:58 --> 00:10:02
players uh and that to me is very

00:10:00 --> 00:10:04
exciting because that means to me that

00:10:01 --> 00:10:06
if you're going to do a company and you

00:10:03 --> 00:10:08
believe that you understand a disruptive

00:10:06 --> 00:10:09
technology that can be delivered in

00:10:07 --> 00:10:11
software it's actually practical for you

00:10:08 --> 00:10:13
to do it and you have a major advantage

00:10:10 --> 00:10:15
because you can take less funding to get

00:10:12 --> 00:10:18
started and you can focus all of your

00:10:14 --> 00:10:21
effort on just that software

00:10:17 --> 00:10:23
project okay so as I alluded to you know

00:10:20 --> 00:10:24
of course software reduces R&D and it

00:10:22 --> 00:10:26
helps you to distribute it I think it's

00:10:23 --> 00:10:28
worth just focusing a little bit on how

00:10:25 --> 00:10:30
much easier it is to deliver so let's

00:10:27 --> 00:10:31
ay that you were going to do a startup

00:10:29 --> 00:10:32
or you wanted to develop a product and

00:10:30 --> 00:10:34
you want to tie it to Hardware I mean

00:10:31 --> 00:10:36
the reality is the hardware supply chain

00:10:33 --> 00:10:38
has a lot of components and takes a long

00:10:36 --> 00:10:40
time to get from you know where you

00:10:37 --> 00:10:41
originally created to the customer I

00:10:39 --> 00:10:43
mean let's say I was going to build a

00:10:40 --> 00:10:44
new type of security functionality and

00:10:42 --> 00:10:46
it was going to be delivered in an

00:10:43 --> 00:10:48
appliance well most likely there's an

00:10:45 --> 00:10:50
odm in Taiwan that would you know take

00:10:47 --> 00:10:51
the software that I built and maybe put

00:10:49 --> 00:10:52
it on a special board wrap some sheet

00:10:50 --> 00:10:53
metal around it that will go in shipping

00:10:51 --> 00:10:55
containers those shipping containers

00:10:52 --> 00:10:57
will go on boats those gos across the

00:10:54 --> 00:10:59
ocean you would unload it those boxes

00:10:56 --> 00:11:01
would then go into a warehouse that

00:10:58 --> 00:11:02
warehouse would probably unload it onto

00:11:00 --> 00:11:04
trucks and those trucks go to other

00:11:01 --> 00:11:07
warehouses around the country and then

00:11:03 --> 00:11:08
eventually it would get to the customer

00:11:06 --> 00:11:11
and anytime I wanted to change something

00:11:07 --> 00:11:12
that was fundamental to that unless I do

00:11:10 --> 00:11:13
software only upgrades which is very

00:11:11 --> 00:11:15
rare but something fundamental you've

00:11:12 --> 00:11:16
got to refresh that entire thing so it's

00:11:14 --> 00:11:18
taking months and a lot of money to

00:11:15 --> 00:11:19
build out all of this inventory and to

00:11:17 --> 00:11:23
deliver that functionality to the

00:11:18 --> 00:11:25
customer but when it comes to software I

00:11:22 --> 00:11:26
you can literally send an email with a

00:11:24 --> 00:11:28
link where they can download that

00:11:25 --> 00:11:29
software and try it locally without

00:11:27 --> 00:11:31
having to do all of these things and

00:11:28 --> 00:11:32
this is why this disruption is so

00:11:30 --> 00:11:34
powerful just like it was in the

00:11:31 --> 00:11:36
consumer device just like it is like

00:11:33 --> 00:11:38
ways compared to GPS's because

00:11:35 --> 00:11:40
functionality can be tried incrementally

00:11:37 --> 00:11:42
with low cost without having to deal

00:11:39 --> 00:11:45
with the hardware at

00:11:41 --> 00:11:48
all so moving things to software is a

00:11:44 --> 00:11:50
huge Advantage for distribution and for

00:11:47 --> 00:11:53
supply chain but actually supporting

00:11:49 --> 00:11:55
software in the field is still very

00:11:52 --> 00:11:57
difficult uh you don't have control of

00:11:54 --> 00:11:58
say the customer environment this can be

00:11:56 --> 00:12:00
any type of hardware and any type of

00:11:57 --> 00:12:02
configuration they they may or may not

00:11:59 --> 00:12:04
have skilled administrators debugging

00:12:01 --> 00:12:07
remotely can be very difficult customers

00:12:03 --> 00:12:08
upgrade at very different Cycles so you

00:12:06 --> 00:12:10
may have to support many versions in the

00:12:07 --> 00:12:12
field and so companies that shift

00:12:09 --> 00:12:14
software often over time a large part of

00:12:11 --> 00:12:16
the R&D is just focusing on this issue

00:12:13 --> 00:12:18
of having software in the field and they

00:12:15 --> 00:12:21
build these large post sales operations

00:12:17 --> 00:12:24
teams as a result and so the next Trend

00:12:20 --> 00:12:26
I'm going to talk about is tackling that

00:12:23 --> 00:12:30
issue so the next Trend I want to talk

00:12:25 --> 00:12:33
about is the movement from software two

00:12:29 --> 00:12:35
Services okay so in the previous Trend I

00:12:32 --> 00:12:37
talked about how consumers moved from

00:12:34 --> 00:12:38
Hardware to software and infrastructures

00:12:36 --> 00:12:40
doing the same thing I'm going to do a

00:12:37 --> 00:12:42
very similar analogy but in in

00:12:39 --> 00:12:45
Enterprise applications so in the late

00:12:41 --> 00:12:48
'90s uh because of all of the problems I

00:12:44 --> 00:12:51
just mentioned applications started to

00:12:47 --> 00:12:53
move from on premise installed to as a

00:12:51 --> 00:12:54
service right and again just to

00:12:52 --> 00:12:56
reiterate you know if you do something

00:12:53 --> 00:12:57
on premise you don't have control of the

00:12:55 --> 00:12:59
nvironment you may or may not have

00:12:56 --> 00:13:01
skilled administrators remote debugging

00:12:58 --> 00:13:02
is hard you have multiple versions Etc

00:13:00 --> 00:13:04
and this has changed the way that we

00:13:01 --> 00:13:05
think about applications and clearly is

00:13:03 --> 00:13:07
a broad Trend now I mean the vast

00:13:04 --> 00:13:08
majority of applications that are

00:13:06 --> 00:13:09
created today are as an app or as a web

00:13:07 --> 00:13:11
service for

00:13:08 --> 00:13:14
example and so again we're seeing the

00:13:10 --> 00:13:16
same type of transformation happen in

00:13:13 --> 00:13:18
frastructure so as I mentioned at

00:13:15 --> 00:13:19
every layer in the stack we've got the

00:13:17 --> 00:13:21
standardization we've got this

00:13:18 --> 00:13:24
maturation of abstractions these

00:13:20 --> 00:13:26
abstractions allow for insertion

00:13:23 --> 00:13:29
points and these abstractions and

00:13:25 --> 00:13:31
insertion points can be used to provide

00:13:28 --> 00:13:33
core infrastructure things like security

00:13:30 --> 00:13:35
things like Network Services things like

00:13:32 --> 00:13:38
identity as a service and that can

00:13:34 --> 00:13:40
either plug into say on Prem

00:13:37 --> 00:13:42
installments or SAS installments and

00:13:39 --> 00:13:44
from a startup standpoint this is

00:13:41 --> 00:13:45
fantastic because it reduces the amount

00:13:43 --> 00:13:47
hat you have to invest in post sales

00:13:44 --> 00:13:49
and managing multiple versions it also

00:13:46 --> 00:13:51
makes it much easier to say upgrade and

00:13:48 --> 00:13:54
push new features out to the

00:13:50 --> 00:13:56
customer so we believe this is a broad

00:13:53 --> 00:13:57
trend for infrastructure and that is

00:13:55 --> 00:13:59
providing the infrastructure as a

00:13:56 --> 00:14:01
service and yes you may have an on Prem

00:13:58 --> 00:14:03
in installation but often even that is

00:14:00 --> 00:14:04
treated like a managed service of course

00:14:02 --> 00:14:06
the E canonical example for this is

00:14:03 --> 00:14:08
Amazon web services but what I think

00:14:05 --> 00:14:11
fewer people understand is how many

00:14:07 --> 00:14:12
areas and how many verticals have

00:14:10 --> 00:14:14
companies behind them that are going

00:14:11 --> 00:14:16
after large areas delivering them

00:14:14 --> 00:14:17
entirely as a service and this again is

00:14:15 --> 00:14:19
core

00:14:17 --> 00:14:22
infrastructure okay so the last Trend I

00:14:18 --> 00:14:24
want to talk about is the rise of the

00:14:21 --> 00:14:26
developer as a buying center now this is

00:14:23 --> 00:14:29
an often talked about Trend but I think

00:14:25 --> 00:14:31
it's not often really well understood so

00:14:28 --> 00:14:34
I want to start kind of very basic and

00:14:30 --> 00:14:36
work our way up to what that means okay

00:14:33 --> 00:14:38
so as I've mentioned core functionality

00:14:35 --> 00:14:39
is moving from having been part of

00:14:37 --> 00:14:41
Hardware being attached to Hardware to

00:14:38 --> 00:14:43
software and as a result it's being

00:14:40 --> 00:14:44
installed in end Stacks right it's being

00:14:42 --> 00:14:46
installed in the operating system or the

00:14:43 --> 00:14:48
hypervisor part of the cloud management

00:14:45 --> 00:14:50
stack or maybe it is an application

00:14:47 --> 00:14:52
library and as a result it's moved into

00:14:49 --> 00:14:55
the domain of the developer right now

00:14:51 --> 00:14:57
developers are starting to get

00:14:54 --> 00:14:59
familiar with these tools because it's

00:14:56 --> 00:15:01
being involved in the applications that

00:14:58 --> 00:15:04
hey're developing for

00:15:00 --> 00:15:07
example so as a result developers are

00:15:04 --> 00:15:09
now having a lot of influence on

00:15:06 --> 00:15:11
choosing infrastructure components on

00:15:08 --> 00:15:13
influencing budgets so this has

00:15:10 --> 00:15:15
certainly not always been the case so

00:15:12 --> 00:15:16
take me for example my first job out of

00:15:14 --> 00:15:19
college was working in computational

00:15:15 --> 00:15:20
physics at a National Lab um I worked in

00:15:18 --> 00:15:22
large simulation codes I was an

00:15:19 --> 00:15:24
application developer uh and I didn't

00:15:21 --> 00:15:26
have budget for a pencil right I mean

00:15:23 --> 00:15:28
you know I got whatever Central it gave

00:15:25 --> 00:15:31
me I didn't even have root on my own

00:15:27 --> 00:15:33
machines I wrote code but now because

00:15:30 --> 00:15:34
functionality is moving from Hardware

00:15:32 --> 00:15:36
into software and deployed in the

00:15:33 --> 00:15:37
ndpoint it's very relevant to

00:15:35 --> 00:15:39
developers and more and more they're

00:15:36 --> 00:15:41
able to determine what infrastructure

00:15:39 --> 00:15:44
components are implemented and how

00:15:40 --> 00:15:46
they're used and what is procured and

00:15:43 --> 00:15:48
this changes

00:15:45 --> 00:15:50
everything all right so now I want to

00:15:47 --> 00:15:52
describe why it changes everything so

00:15:49 --> 00:15:53
let's say you're listening to this

00:15:51 --> 00:15:54
recording and you're like you know

00:15:52 --> 00:15:56
Martine this is fantastic this is the

00:15:54 --> 00:15:57
time I'm going to do my startup and I'm

00:15:55 --> 00:15:58
going to listen to everything you've

00:15:56 --> 00:16:00
said I'm going to go Implement some

00:15:57 --> 00:16:01
infrastructure technology and I'm going

00:15:59 --> 00:16:02
to implement it all in software I'm

00:16:00 --> 00:16:05
going to deliver it as a service and

00:16:01 --> 00:16:08
then I'm done unfortunately you're not

00:16:04 --> 00:16:09
unfortunately the most difficult thing

00:16:07 --> 00:16:11
with starting a company in the

00:16:08 --> 00:16:13
Enterprise space is actually bringing

00:16:10 --> 00:16:16
whatever you're building to Market and

00:16:12 --> 00:16:18
the reason is is the incumbents have

00:16:15 --> 00:16:21
pretty much the entire go to market side

00:16:17 --> 00:16:24
locked up all aspects of it you know

00:16:20 --> 00:16:25
many of the incumbents have many decade

00:16:23 --> 00:16:27
Longs or even Century long relationships

00:16:24 --> 00:16:30
with customers and this transcends any

00:16:26 --> 00:16:32
single salesperson the procur processes

00:16:29 --> 00:16:35
are very complicated often very

00:16:31 --> 00:16:36
difficult to navigate often incumbent

00:16:34 --> 00:16:39
ools come with certifications these

00:16:35 --> 00:16:42
certifications are adopted by operators

00:16:38 --> 00:16:43
you know say for example CCI operators

00:16:41 --> 00:16:45
have learned these certifications it's

00:16:42 --> 00:16:47
give them job promotions and they are

00:16:44 --> 00:16:48
very very tied to the certain product

00:16:46 --> 00:16:50
lines as a results for example they'll

00:16:47 --> 00:16:52
put the certification number on their

00:16:49 --> 00:16:53
business card incumbents have deep

00:16:51 --> 00:16:56
relationships with analysts that go back

00:16:52 --> 00:16:57
for decades the channel the channels

00:16:55 --> 00:17:00
that take the products and resell them

00:16:56 --> 00:17:02
to the Enterprise they are already

00:16:59 --> 00:17:04
carrying tons of product or a lot of

00:17:01 --> 00:17:06
revenue from any particular incumbent

00:17:03 --> 00:17:07
and so the comb has leverage with that

00:17:05 --> 00:17:09
channel and then of course all of the

00:17:07 --> 00:17:10
products that have been produced and

00:17:08 --> 00:17:12
have been around for a while have all of

00:17:09 --> 00:17:14
the interfaces you need for operations

00:17:11 --> 00:17:16
and so it's very very difficult for a

00:17:13 --> 00:17:17
startup to come in and enter that right

00:17:15 --> 00:17:19
you don't have the relationships you're

00:17:16 --> 00:17:20
not probably not even in the procurement

00:17:18 --> 00:17:22
system and if you are you probably don't

00:17:19 --> 00:17:24
know how to navigate it effectively uh

00:17:21 --> 00:17:25
it's difficult to go to somebody that

00:17:23 --> 00:17:27
worked very hard for certification and

00:17:24 --> 00:17:29
say that that's no longer valid the

00:17:26 --> 00:17:30
analyst don't know who you are that

00:17:28 --> 00:17:31
channels have no incentive to carry your

00:17:29 --> 00:17:33
products they're already carrying

00:17:30 --> 00:17:35
billions of dollars and making tons of

00:17:32 --> 00:17:36
money off of an incumbent product uh and

00:17:34 --> 00:17:37
you probably don't have any of the

00:17:35 --> 00:17:39
interfaces you need for operations

00:17:37 --> 00:17:41
because you focus so much on getting the

00:17:38 --> 00:17:42
core functionality done and this has

00:17:40 --> 00:17:44
been one of the most expensive and most

00:17:41 --> 00:17:46
rying parts of bringing a product to

00:17:43 --> 00:17:49
Market in the

00:17:45 --> 00:17:52
Enterprise so developers having control

00:17:48 --> 00:17:55
or influence over budget changes all of

00:17:51 --> 00:17:56
this and I think this is probably of all

00:17:54 --> 00:17:58
of the things that I'm speaking of the

00:17:55 --> 00:17:59
most significant and the most

00:17:57 --> 00:18:02
significant shift and I'd like to

00:17:58 --> 00:18:04
explain why so developers have a very

00:18:01 --> 00:18:06
different aesthetic a very different

00:18:03 --> 00:18:09
procurement aesthetic than an operator

00:18:05 --> 00:18:11
does they aren't generally influenced by

00:18:08 --> 00:18:13
analysts they don't have specific

00:18:10 --> 00:18:14
ertifications for specific products I

00:18:12 --> 00:18:15
mean developers normally have a computer

00:18:13 --> 00:18:17
science degree for example so they're

00:18:14 --> 00:18:18
much more about fundamentals and

00:18:16 --> 00:18:20
Primitives than I've learned how to use

00:18:17 --> 00:18:22
incumbent products X they actually don't

00:18:19 --> 00:18:25
care about long-standing relationships

00:18:21 --> 00:18:26
with sales reps I mean what is the idea

00:18:24 --> 00:18:28
that a developer has when it comes to

00:18:25 --> 00:18:30
buying something right well normally a

00:18:27 --> 00:18:31
developer say a developer is driving

00:18:29 --> 00:18:33
home they've got a great idea well they

00:18:31 --> 00:18:35
swipe a credit card they go on Amazon

00:18:32 --> 00:18:36
and they implement it within Amazon so

00:18:34 --> 00:18:38
to them procurement is something that

00:18:35 --> 00:18:39
should be very quick and they certainly

00:18:37 --> 00:18:40
don't want to deal with like the slow

00:18:38 --> 00:18:43
procurement process right so developers

00:18:39 --> 00:18:45
are very different buying Center so it's

00:18:42 --> 00:18:47
probably good to ask what do developers

00:18:44 --> 00:18:49
care about well they care about traction

00:18:46 --> 00:18:51
among other developers they care about

00:18:48 --> 00:18:53
Community they care about open source um

00:18:50 --> 00:18:55
they care about technical Elegance

00:18:52 --> 00:18:57
actually they care about low friction to

00:18:54 --> 00:18:59
adoption like developers have kind of

00:18:56 --> 00:19:01
been bred in this era of like

00:18:58 --> 00:19:03
infrastructure on demand largely because

00:19:00 --> 00:19:04
of these big iaz players and so if they

00:19:02 --> 00:19:06
want something they want it immediately

00:19:03 --> 00:19:07
which almost you know suggests that you

00:19:05 --> 00:19:10
want to provide it in software or as a

00:19:06 --> 00:19:12
service and so it's just a very very

00:19:09 --> 00:19:15
different procurement side and because

00:19:11 --> 00:19:16
of that the old goto Market machines

00:19:14 --> 00:19:20
that the incumbents have relied on for

00:19:15 --> 00:19:23
so long are starting to become

00:19:19 --> 00:19:25
obviated so as a result with developers

00:19:22 --> 00:19:27
pushing and influencing purchasing

00:19:24 --> 00:19:29
decisions we've now had these like very

00:19:26 --> 00:19:31
fast sales Cycles where you can really

00:19:28 --> 00:19:34
get access to many customers the top of

00:19:30 --> 00:19:36
the funnel through things like open

00:19:33 --> 00:19:38
source and reaching the

00:19:35 --> 00:19:40
developer but here's where I want to

00:19:37 --> 00:19:41
make a very important distinction which

00:19:39 --> 00:19:43
often gets lost in this conversation

00:19:40 --> 00:19:45
that's the following developers

00:19:42 --> 00:19:48
influence budget they often don't

00:19:44 --> 00:19:50
control a lot of budget and so you can

00:19:47 --> 00:19:51
almost think of attracting the developer

00:19:49 --> 00:19:53
and getting them to use your product

00:19:50 --> 00:19:54
almost like a replacement for product

00:19:52 --> 00:19:56
marketing it's like the top of the

00:19:53 --> 00:19:57
funnel so you can get them excited you

00:19:55 --> 00:19:59
can get them engaged you get account

00:19:56 --> 00:20:01
credibility you get account traction you

00:19:58 --> 00:20:03
can create a phenomenon but that doesn't

00:20:00 --> 00:20:05
necessarily result in a in a sale

00:20:02 --> 00:20:07
actually you know the Enterprise sales

00:20:04 --> 00:20:09
process still requires direct sales and

00:20:06 --> 00:20:12
feed on the street and so our belief is

00:20:08 --> 00:20:13
that startups can get a tremendous

00:20:11 --> 00:20:14
amount of account traction through

00:20:12 --> 00:20:16
things like open source things like

00:20:14 --> 00:20:18
targeting the developer but they still

00:20:16 --> 00:20:20
want to build out a direct Enterprise

00:20:17 --> 00:20:22
Salesforce if they want to go ahead and

00:20:19 --> 00:20:24
and generate a lot of Revenue and

00:20:21 --> 00:20:26
monetize that way and you know this

00:20:23 --> 00:20:28
actually aligns with the philosophy of

00:20:25 --> 00:20:30
the firm here at Andre and Horowitz our

00:20:27 --> 00:20:32
Focus hasar been looking for the

00:20:29 --> 00:20:34
technical phenomenon the technical

00:20:31 --> 00:20:36
founder and then building around kind of

00:20:33 --> 00:20:39
a strong go to market engine and go to

00:20:35 --> 00:20:41
market knowhow to help Drive things like

00:20:38 --> 00:20:45
direct sales and so just to reiterate

00:20:40 --> 00:20:47
the point yes developer buying power is

00:20:44 --> 00:20:49
very important yes that can get you into

00:20:46 --> 00:20:50
accounts and account traction but you

00:20:48 --> 00:20:53
still have to build out an Enterprise

00:20:49 --> 00:20:56
sales in most cases in order to monetize

00:20:52 --> 00:20:58
that so as a result we've seen lately

00:20:55 --> 00:21:00
this Cambrian explosion in developer

00:20:57 --> 00:21:02
Centric startups right I mean I've got

00:20:59 --> 00:21:04
here a list of a number of companies on

00:21:01 --> 00:21:06
our portfolio there are many more out

00:21:03 --> 00:21:09
here also in the industry and these

00:21:05 --> 00:21:12
companies are generating a lot of

00:21:08 --> 00:21:13
Revenue and lots of valuation by

00:21:11 --> 00:21:15
focusing at different buying centers and

00:21:12 --> 00:21:16
I think we're seeing growth faster than

00:21:14 --> 00:21:18
we've traditionally seen growth in the

00:21:15 --> 00:21:20
infrastructure

00:21:17 --> 00:21:22
space so listen everybody has seen

00:21:19 --> 00:21:24
virtual cycle graphs um but you know we

00:21:21 --> 00:21:27
believe that this really is a set of

00:21:23 --> 00:21:30
trends that feed on each other so as

00:21:26 --> 00:21:32
more functionality moves to software and

00:21:29 --> 00:21:34
gets delivered as a service it moves

00:21:31 --> 00:21:36
into the domain of the developers who

00:21:33 --> 00:21:37
influence buying decisions who create

00:21:35 --> 00:21:40
more markets for things in software and

00:21:36 --> 00:21:41
so forth and again to reiterate the

00:21:39 --> 00:21:44
point that I've been making all along

00:21:40 --> 00:21:45
every one of these gives an advantage to

00:21:43 --> 00:21:47
small technical startups if you think

00:21:44 --> 00:21:49
about it right you know small technical

00:21:46 --> 00:21:50
startups can just focus just on software

00:21:48 --> 00:21:52
development they don't even have to

00:21:49 --> 00:21:54
build huge backin post sales operations

00:21:51 --> 00:21:58
centers and then all of the buying

00:21:53 --> 00:21:59
aesthetic of developers aligns with you

00:21:57 --> 00:22:01
know a a techn startup things like open

00:21:58 --> 00:22:03
source things like technical Elegance

00:22:01 --> 00:22:04
things like the ability to build

00:22:02 --> 00:22:06
community and so we really feel like

00:22:03 --> 00:22:08
we're in this kind of epoch where

00:22:06 --> 00:22:10
infrastructure is Shifting like all of

00:22:07 --> 00:22:12
it is Shifting towards this new

00:22:09 --> 00:22:15
development Paradigm distribution

00:22:11 --> 00:22:17
Paradigm service Paradigm and uh and

00:22:14 --> 00:22:19
targeting kind of a different uh

00:22:16 --> 00:22:22
customer constituency as

00:22:18 --> 00:22:23
well okay so to make a final point on

00:22:21 --> 00:22:25
this you know listen we're talking in

00:22:22 --> 00:22:28
the abstract here I do think that this

00:22:24 --> 00:22:29
a very very broad reaching shift I

00:22:27 --> 00:22:31
don't think that there's any Silo in

00:22:28 --> 00:22:33
frastructure that's safe from this I

00:22:30 --> 00:22:34
think we're talking trillions of dollars

00:22:32 --> 00:22:37
of market cap and hundreds of billions

00:22:33 --> 00:22:39
of dollars of value that are going to be

00:22:36 --> 00:22:42
disrupted I think this is going to Usher

00:22:39 --> 00:22:43
an entirely New Era of companies that

00:22:41 --> 00:22:45
are providing services and different

00:22:42 --> 00:22:47
Technologies and of course listen we we

00:22:44 --> 00:22:49
don't know the future we don't know

00:22:46 --> 00:22:50
exactly which companies or what types of

00:22:48 --> 00:22:52
companies are going to exist but if you

00:22:49 --> 00:22:56
have a good idea about what those might

00:22:51 --> 00:22:56
be please come talk to us thank

00:22:56 --> 00:23:00
you

<!-- YOUTUBE_TRANSCRIPT_END -->
