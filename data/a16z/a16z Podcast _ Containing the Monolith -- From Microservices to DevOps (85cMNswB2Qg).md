---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "85cMNswB2Qg"
title: "a16z Podcast | Containing the Monolith -- From Microservices to DevOps"
video_url: "https://www.youtube.com/watch?v=85cMNswB2Qg"
thumbnail_url: "https://i.ytimg.com/vi/85cMNswB2Qg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=85cMNswB2Qg"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:42:22.000Z"
upload_date: "2019-01-02"
duration_seconds: 1078
duration_human: "17:58"
view_count: 147
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:52:40.681Z"
---

# a16z Podcast | Containing the Monolith -- From Microservices to DevOps

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=85cMNswB2Qg
- video_id: 85cMNswB2Qg
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:42:22.000Z
- upload_date: 2019-01-02
- duration: 17:58
- view_count: 147
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

What happens when monolithic architectures are broken down into containers and microservices (or when things are broken down into smaller units, not just in infrastructure but perhaps even in company structure too)? From building more dynamic websites to monitoring the enterprise cloud to elastically scaling applications, where are developers in the enterprise going now and next?

This episode of the a16z Podcast, based on a panel by and for developers recorded at the a16z Summit in November 2017 and moderated by general partner Martin Casado, features Matt Billmann, CEO and co-founder of Netlify; Florian Leibert, CEO and co-founder of Mesophere; and Karthik Rau, CEO and co-founder of SignalFX.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi and welcome to the a 16z podcast

00:00:02 --> 00:00:08
oday's episode based on a panel by in

00:00:05 --> 00:00:10
for developers at our recent summit

00:00:07 --> 00:00:12
event dives into the details of what

00:00:09 --> 00:00:13
happens when software eats development

00:00:11 --> 00:00:16
and how the entire development lifecycle

00:00:12 --> 00:00:17
is adapting from how you design your

00:00:15 --> 00:00:19
software how you build it how you

00:00:16 --> 00:00:22
release it how you configure it to how

00:00:18 --> 00:00:24
you monitor it moderated by martine

00:00:21 --> 00:00:26
casado the conversation includes in the

00:00:23 --> 00:00:28
order in which she'll hear their voices

00:00:25 --> 00:00:31
Florian Liebert CEO and co-founder of

00:00:27 --> 00:00:33
mesosphere Matt Billman CEO and

00:00:30 --> 00:00:37
co-founder of net liffe i and karthik

00:00:32 --> 00:00:38
rao cofounder and CEO of signal FX this

00:00:36 --> 00:00:40
for me one of the most interesting

00:00:37 --> 00:00:41
questions and trends in all of IT buying

00:00:39 --> 00:00:43
which it used to be the case have you

00:00:40 --> 00:00:44
sold something that was a piece of

00:00:42 --> 00:00:47
infrastructure you sell it to the ops

00:00:43 --> 00:00:49
person or a core IT or whatever more and

00:00:46 --> 00:00:50
more developers are involved in this

00:00:48 --> 00:00:51
purchasing that's in and so this kind of

00:00:49 --> 00:00:53
theory is you can think of it you can be

00:00:50 --> 00:00:54
like okay there's core IT that's buying

00:00:52 --> 00:00:56
there's this new group maybe that's kind

00:00:53 --> 00:00:57
of like a devil opposite group or

00:00:55 --> 00:00:59
basically in the end it's the developers

00:00:56 --> 00:01:02
that do all the buying and have all the

00:00:58 --> 00:01:03
control flow I'd love for you to talk a

00:01:01 --> 00:01:04
little bit about how you seen this

00:01:02 --> 00:01:05
evolution I mean with measure you guys

00:01:03 --> 00:01:07
have been in the thick of this is it

00:01:04 --> 00:01:10
core IT is it developers is it something

00:01:06 --> 00:01:12
in between so our software is the the

00:01:09 --> 00:01:15
nd users of the software actually

00:01:11 --> 00:01:17
operators and also data scientists so

00:01:14 --> 00:01:19
those are the folks that actually use

00:01:16 --> 00:01:20
our product day-to-day but then of

00:01:18 --> 00:01:22
course they install these platform

00:01:19 --> 00:01:25
services and platform services are for

00:01:21 --> 00:01:27
example distributed databases message

00:01:24 --> 00:01:28
queues and many other things that you

00:01:26 --> 00:01:30
find on Amazon that you find on Google

00:01:27 --> 00:01:32
cloud and what are these things used for

00:01:29 --> 00:01:34
well they're four basic pillars

00:01:31 --> 00:01:37
pecially and one is transporting data

00:01:33 --> 00:01:39
the other one is processing data the

00:01:36 --> 00:01:41
next one is storing data and then the

00:01:38 --> 00:01:43
other one is serving data backup and you

00:01:40 --> 00:01:45
have basically many implementations

00:01:42 --> 00:01:47
within each of these pillars and of

00:01:44 --> 00:01:48
course again the developers are the

00:01:46 --> 00:01:50
nd-users that take some of these

00:01:47 --> 00:01:52
components in order to assemble the

00:01:49 --> 00:01:55
applications but of course also data

00:01:51 --> 00:01:56
scientists will install notebooks

00:01:54 --> 00:01:59
they'll install spark they'll install

00:01:55 --> 00:02:00
Hadoop and then use it and the operator

00:01:58 --> 00:02:03
of the entire platform is usually the

00:02:00 --> 00:02:04
operator of the DevOps person so I want

00:02:02 --> 00:02:05
o make sure I understand the layered

00:02:03 --> 00:02:07
cake so you're basically saying okay

00:02:04 --> 00:02:09
that was core IT that's kind of

00:02:06 --> 00:02:11
antiquated DevOps is eating core I T

00:02:08 --> 00:02:12
yeah developers reading DevOps and now

00:02:10 --> 00:02:14
you're just said that data scientists

00:02:11 --> 00:02:16
are eating developers is that the

00:02:13 --> 00:02:18
lack of power actually I think right in

00:02:15 --> 00:02:19
the future hopefully we'll be able to

00:02:17 --> 00:02:21
click together applications you'll have

00:02:18 --> 00:02:23
more and more building blocks more and

00:02:20 --> 00:02:25
more applications and frankly it's more

00:02:22 --> 00:02:27
joyful to write Visual Basic than it is

00:02:24 --> 00:02:29
to write go right there you actually

00:02:26 --> 00:02:31
achieve business results I mean the

00:02:28 --> 00:02:33
seriously right like getting a spark job

00:02:30 --> 00:02:35
you see the output right away whereas if

00:02:32 --> 00:02:37
you write a large go application I mean

00:02:34 --> 00:02:39
it's a lot of work and you're just

00:02:36 --> 00:02:40
dealing with plumbing so today when you

00:02:38 --> 00:02:42
build a mobile app you build everything

00:02:39 --> 00:02:43
in the mobile app and you run it on your

00:02:41 --> 00:02:45
phone and then for like core services

00:02:42 --> 00:02:47
it'll call up to api's or micro services

00:02:44 --> 00:02:48
on the backend like 1200 Stryper or

00:02:46 --> 00:02:50
whatever so now the fire is doing this

00:02:47 --> 00:02:51
for the web so basically you create a

00:02:49 --> 00:02:53
web page that's a thick front-end and

00:02:50 --> 00:02:55
then you call micro services in the

00:02:52 --> 00:02:57
backend so you can you know follow the

00:02:54 --> 00:02:59
general model of that so this is kind of

00:02:56 --> 00:03:01
like developers eat web development so

00:02:58 --> 00:03:03
how do you view the evolution of this is

00:03:00 --> 00:03:05
the buyer changing is the influencer

00:03:02 --> 00:03:07
changing how is that ecosystem evolving

00:03:04 --> 00:03:09
so one of the things is again like the

00:03:06 --> 00:03:10
developer themself changing we used to

00:03:08 --> 00:03:12
have this very clear distinction between

00:03:09 --> 00:03:14
the back-end developers and then

00:03:11 --> 00:03:16
front-end developers that work with the

00:03:13 --> 00:03:18
web port barely release developers they

00:03:15 --> 00:03:21
would mostly take some design file and

00:03:17 --> 00:03:22
then cut it up and hand it over to a

00:03:20 --> 00:03:24
back-end developer that would integrate

00:03:21 --> 00:03:27
that into some big monolithic

00:03:24 --> 00:03:29
application and now we're seeing more of

00:03:26 --> 00:03:30
that almost this show basically in the

00:03:28 --> 00:03:32
form of JavaScript where we didn't have

00:03:29 --> 00:03:34
this whole new like world front-end

00:03:31 --> 00:03:36
evelopers that become the actual web

00:03:33 --> 00:03:39
developers and through latch degrees

00:03:35 --> 00:03:41
that just gluing together a lot of

00:03:38 --> 00:03:42
different micro services that are

00:03:40 --> 00:03:46
already ready on the backend instead of

00:03:42 --> 00:03:47
like building these flash monoliths okay

00:03:45 --> 00:03:50
I wanna make sure that I understand this

00:03:46 --> 00:03:52
deck so front-end developers are they

00:03:49 --> 00:03:54
obviating designers or they're still is

00:03:51 --> 00:03:55
it just basically now you have designers

00:03:53 --> 00:03:56
you got front-end developers then you've

00:03:54 --> 00:03:58
got people do micro service and the

00:03:55 --> 00:04:00
back-end developers are becoming micro

00:03:57 --> 00:04:03
service up is that how you view the yeah

00:03:59 --> 00:04:04
and in many of these cases the need for

00:04:02 --> 00:04:09
begging developers to sort of shrinking

00:04:03 --> 00:04:11
this kind of going away to one agency

00:04:08 --> 00:04:13
that's really been a pioneer of adopting

00:04:10 --> 00:04:15
this model you talked about off building

00:04:12 --> 00:04:17
sites the juice to have like 55

00:04:14 --> 00:04:19
developers and steps where

00:04:16 --> 00:04:22
35 of those were back-end developers and

00:04:18 --> 00:04:23
now they have around 30 free developers

00:04:21 --> 00:04:25
and two of them are begging developers

00:04:22 --> 00:04:27
from all the rest just works in this

00:04:24 --> 00:04:28
friend and layer so that's where the big

00:04:26 --> 00:04:30
shift has happened bitten

00:04:27 --> 00:04:32
just like we suddenly had a whole world

00:04:29 --> 00:04:34
of app developers merging with the

00:04:31 --> 00:04:36
iPhone now we have this whole new world

00:04:33 --> 00:04:38
of front-end developers that are become

00:04:35 --> 00:04:39
gets to web developer Karthik so you

00:04:37 --> 00:04:41
don't have very similar backgrounds both

00:04:38 --> 00:04:43
worked at VMware or what kind of core

00:04:40 --> 00:04:45
ops and then you're very much focused on

00:04:42 --> 00:04:47
ops for what you're doing but it seems

00:04:44 --> 00:04:49
to me that the abstractions have evolved

00:04:46 --> 00:04:50
like what's important to highlight I

00:04:48 --> 00:04:52
mean is that the case as developers

00:04:49 --> 00:04:53
become more in the picture as API is

00:04:51 --> 00:04:55
make sure it's good more in the pictures

00:04:52 --> 00:04:57
the type of information unit service the

00:04:54 --> 00:04:59
ops team evolving or is it still a kind

00:04:56 --> 00:05:00
of IP addresses and low-level stuff now

00:04:58 --> 00:05:03
I think it's higher level you know

00:04:59 --> 00:05:05
developers are more and more involved

00:05:02 --> 00:05:07
and in fact in new applications are

00:05:04 --> 00:05:09
making the technology decisions for the

00:05:06 --> 00:05:11
core runtime by you know if you look at

00:05:08 --> 00:05:14
organizations kind of at maturity it

00:05:10 --> 00:05:17
doesn't make sense to have 10 or 20

00:05:13 --> 00:05:19
different teams all running isolated

00:05:16 --> 00:05:21
kafka clusters and relearning best

00:05:18 --> 00:05:23
practices around how to scale and make

00:05:20 --> 00:05:25
it resilient and so it a lot of these

00:05:22 --> 00:05:27
organizations you do find a centralized

00:05:24 --> 00:05:28
team that will develop best practices

00:05:26 --> 00:05:30
around some of these core infrastructure

00:05:27 --> 00:05:32
services you know if you're running in a

00:05:29 --> 00:05:33
cloud you can maybe just use an API to

00:05:31 --> 00:05:36
leverage some of these core services

00:05:32 --> 00:05:38
from an Amazon or Google but within an

00:05:35 --> 00:05:39
enterprise oftentimes you'll still find

00:05:37 --> 00:05:40
these functions it's just they're

00:05:38 --> 00:05:42
focusing on a different kind of

00:05:39 --> 00:05:45
technology than you know the traditional

00:05:41 --> 00:05:46
enterprise applications and if you get

00:05:44 --> 00:05:47
on this area what do you think is a core

00:05:45 --> 00:05:50
bit of insight people look for in this

00:05:46 --> 00:05:52
kind of new era of micro services well I

00:05:49 --> 00:05:53
think the big thing that's changed is

00:05:51 --> 00:05:55
the velocity of application development

00:05:52 --> 00:05:57
is just at an altogether different level

00:05:54 --> 00:05:58
right instead of doing two or three

00:05:56 --> 00:06:00
updates a year you could be doing

00:05:57 --> 00:06:02
thousands or tens of thousands of

00:05:59 --> 00:06:04
updates a year and so you know the

00:06:01 --> 00:06:07
ntire development lifecycle deployment

00:06:03 --> 00:06:09
lifecycle the entire toolset is evolving

00:06:06 --> 00:06:11
to support velocity so how you design

00:06:08 --> 00:06:12
your software how you build it how you

00:06:10 --> 00:06:14
release it how you configure it how you

00:06:11 --> 00:06:17
monitor it's all adapting so in our

00:06:13 --> 00:06:19
world what people are looking for is to

00:06:16 --> 00:06:20
get insight into what's changing in the

00:06:18 --> 00:06:22
nvironment because there's so much

00:06:19 --> 00:06:23
ange happening you want to be a lot

00:06:21 --> 00:06:25
more proactive and identifying a

00:06:22 --> 00:06:27
destructive change that you can roll it

00:06:24 --> 00:06:28
back very quickly and so having the

00:06:26 --> 00:06:30
analytics around all of your telemetry

00:06:27 --> 00:06:32
data to practically identify and surface

00:06:29 --> 00:06:33
those trends becomes absolutely critical

00:06:31 --> 00:06:35
so that's the key insight that our

00:06:32 --> 00:06:37
custom pasa typically looking for so I'm

00:06:34 --> 00:06:38
glad you brought the developer lifecycle

00:06:36 --> 00:06:40
so something is actually unique across

00:06:37 --> 00:06:42
all of these companies is they integrate

00:06:39 --> 00:06:43
with a developer lifecycle so just as

00:06:41 --> 00:06:45
et up very quickly then I'd love for

00:06:42 --> 00:06:46
you guys to comment about how this is

00:06:44 --> 00:06:48
kind of changed where you think about

00:06:45 --> 00:06:50
business developers now follow a pretty

00:06:47 --> 00:06:52
common recipe for developing it's called

00:06:49 --> 00:06:54
the CI CD pipeline we have continuous

00:06:51 --> 00:06:55
integration continuous development and

00:06:53 --> 00:06:57
they use kind of pretty standard set of

00:06:54 --> 00:06:58
tools and more and more we see startups

00:06:56 --> 00:07:00
coming in that are traditional

00:06:57 --> 00:07:01
infrastructure startups which 10 years

00:06:59 --> 00:07:03
ago they'd sell a box like they sell a

00:07:00 --> 00:07:04
router or something like that or a piece

00:07:02 --> 00:07:06
of software and these days they

00:07:03 --> 00:07:08
integrate in the CI DC pipeline and

00:07:05 --> 00:07:09
they're talking to developers it's a

00:07:07 --> 00:07:11
massive massive shift of Enterprise

00:07:08 --> 00:07:13
buying and it's also interesting because

00:07:10 --> 00:07:14
developers if you're part of the code or

00:07:12 --> 00:07:16
you're close to the code you have a lot

00:07:13 --> 00:07:18
more information and semantics so I know

00:07:15 --> 00:07:20
your component is directly into get so

00:07:18 --> 00:07:22
how do you think about the CI CD

00:07:19 --> 00:07:23
pipeline a and how you build that LIF i

00:07:21 --> 00:07:24
but also like how this is gonna

00:07:22 --> 00:07:27
influence infrastructure companies going

00:07:23 --> 00:07:30
forward it has been such a massive trend

00:07:26 --> 00:07:32
that's been adopted by developers

00:07:29 --> 00:07:34
universally and that's become not just

00:07:31 --> 00:07:36
heir version control system but their

00:07:33 --> 00:07:39
main workflow Indian and the main way of

00:07:35 --> 00:07:42
collaboration and communication even in

00:07:38 --> 00:07:43
issues around GUID and so on so what

00:07:41 --> 00:07:45
we're doing is really taking the way

00:07:42 --> 00:07:47
they work there and then extrapolating

00:07:45 --> 00:07:48
it all the way out through the

00:07:46 --> 00:07:50
deployment and infrastructure to really

00:07:47 --> 00:07:52
mean that developers working with metal

00:07:49 --> 00:07:54
if I essentially just work and get when

00:07:51 --> 00:07:56
they make a new push and pull request to

00:07:53 --> 00:07:57
get we create a new staging environment

00:07:55 --> 00:07:59
for them and give them a new URL where

00:07:56 --> 00:08:00
they can view that right when they merge

00:07:58 --> 00:08:02
that into master we deployed that

00:08:00 --> 00:08:05
version of the site and it goes live

00:08:01 --> 00:08:07
when they change settings for caching

00:08:04 --> 00:08:09
they do it just by writing a file in the

00:08:06 --> 00:08:11
git repository and push it when they

00:08:08 --> 00:08:14
work with content management they do it

00:08:10 --> 00:08:16
just by putting a UI on top of the git

00:08:13 --> 00:08:18
repository and centrally and giving

00:08:15 --> 00:08:20
normal people that way you to edit the

00:08:17 --> 00:08:22
content and contribute to the same like

00:08:19 --> 00:08:24
workflow so we're really just thinking

00:08:21 --> 00:08:26
about how can we take that really

00:08:23 --> 00:08:27
efficient workflow that developers are

00:08:25 --> 00:08:30
working with and then just make

00:08:26 --> 00:08:32
verything happen from there so in net

00:08:29 --> 00:08:34
liffe I if somebody is editing like a

00:08:31 --> 00:08:35
developers making a website they make

00:08:33 --> 00:08:38
the website as soon as they push it in

00:08:34 --> 00:08:40
to get it get slurped up identify thrown

00:08:37 --> 00:08:41
in a CDN and distributed across the

00:08:39 --> 00:08:43
world and that does the actual

00:08:40 --> 00:08:44
operations and deployment do you think

00:08:42 --> 00:08:46
the separation between developers and

00:08:43 --> 00:08:48
eployment operations goes away do you

00:08:45 --> 00:08:49
think like this is how things go in the

00:08:47 --> 00:08:51
future or is there still another team

00:08:48 --> 00:08:54
that's doing the operate I mean it kind

00:08:51 --> 00:08:56
of dangerous to me ah yeah so

00:08:53 --> 00:08:58
the trick is to figure out ways to make

00:08:55 --> 00:09:00
it really safe you can see every pull

00:08:57 --> 00:09:02
request in a branch so you know what's

00:08:59 --> 00:09:04
going live before you take it live in

00:09:01 --> 00:09:06
edify everything is a mutable deploy you

00:09:03 --> 00:09:08
can roll back in an instant and we sort

00:09:05 --> 00:09:10
of build a whole UI around that

00:09:07 --> 00:09:11
management of the deployment and that in

00:09:09 --> 00:09:13
a certain degree replaces all the

00:09:10 --> 00:09:16
xisting like release engineers and so

00:09:12 --> 00:09:18
n for that whole part of the stack and

00:09:15 --> 00:09:20
I think we'll see that more and more

00:09:17 --> 00:09:23
this whole notion that if you adopt a

00:09:19 --> 00:09:25
certain workflow then a system can kick

00:09:22 --> 00:09:27
in and automate the whole process around

00:09:24 --> 00:09:29
it so developers are now eating kind of

00:09:26 --> 00:09:30
deployment engine operators I love I

00:09:28 --> 00:09:32
mean again you you actually seen the

00:09:29 --> 00:09:33
full evolution of this over yesterday ok

00:09:31 --> 00:09:35
like how do you view the CIC be

00:09:32 --> 00:09:37
affecting how you do business or people

00:09:34 --> 00:09:39
run things or ships in the industry it's

00:09:36 --> 00:09:41
an interesting question so I used to

00:09:38 --> 00:09:43
work at Airbnb and everybody search was

00:09:40 --> 00:09:44
actually really difficult search for

00:09:42 --> 00:09:46
twitter is really easy you always show

00:09:43 --> 00:09:48
everybody pretty much the same results

00:09:45 --> 00:09:51
but for Airbnb if you do that then if

00:09:47 --> 00:09:53
the first person sees a result for San

00:09:50 --> 00:09:55
Francisco clicks on the booking the

00:09:52 --> 00:09:57
second person does the same then the

00:09:54 --> 00:09:59
booking might be gone so if this happens

00:09:56 --> 00:10:00
multiple times the users actually will

00:09:58 --> 00:10:02
disappear

00:09:59 --> 00:10:03
so what we had to do with Airbnb every

00:10:01 --> 00:10:05
time we rolled out a new version of

00:10:02 --> 00:10:07
search we had to do a/b testing and we

00:10:04 --> 00:10:09
had to make sure that actually then

00:10:06 --> 00:10:11
that's a big part actually of CI cdza

00:10:08 --> 00:10:13
push out automatically a new version and

00:10:10 --> 00:10:16
then you redirect 5% of the traffic

00:10:12 --> 00:10:17
towards this new version and then you

00:10:15 --> 00:10:19
actually scale that version up to 10%

00:10:16 --> 00:10:23
scale the other one back and so forth

00:10:18 --> 00:10:25
and when you're running tens or hundreds

00:10:22 --> 00:10:27
of experiments like that a day

00:10:24 --> 00:10:30
automation is really key it's really key

00:10:26 --> 00:10:31
to actually automate every part it's

00:10:29 --> 00:10:33
really key to actually have the metrics

00:10:30 --> 00:10:35
in place that if something goes wrong

00:10:32 --> 00:10:37
that you can use tools like yours in

00:10:34 --> 00:10:39
order to do automatic rollback but in

00:10:36 --> 00:10:41
general you want to automate as much as

00:10:38 --> 00:10:43
possible because humans are the biggest

00:10:40 --> 00:10:45
source of errors and respect this kind

00:10:42 --> 00:10:46
of this thing I've been pushing on which

00:10:44 --> 00:10:48
is I just kind of so cares what the

00:10:45 --> 00:10:50
future looks like it's it literally just

00:10:47 --> 00:10:51
devs of different flavors like this is a

00:10:49 --> 00:10:53
dev that does front-end this is a dev

00:10:50 --> 00:10:55
that does automation but they're all

00:10:52 --> 00:10:58
software developers and part of the same

00:10:54 --> 00:10:59
CI CD pipeline or is it still gonna be

00:10:57 --> 00:11:01
you know your operations your expertise

00:10:58 --> 00:11:03
is running somebody else's software

00:11:00 --> 00:11:05
versus developing the software so I mean

00:11:02 --> 00:11:08
I think the whole operator is going to

00:11:04 --> 00:11:09
go away over time like with cloud with

00:11:07 --> 00:11:10
tools like do you think so you think

00:11:08 --> 00:11:12
operations yeah I think I think it's

00:11:09 --> 00:11:13
gonna things like we're gonna go towards

00:11:11 --> 00:11:15
the world where a lot of that stuff is

00:11:12 --> 00:11:17
autonomous that's trillion dollar

00:11:14 --> 00:11:19
business you know just I mean I actually

00:11:16 --> 00:11:21
agree with you I just want you know like

00:11:18 --> 00:11:23
to actually take a moment and understand

00:11:20 --> 00:11:24
so I mean I give you an example I mean

00:11:22 --> 00:11:26
in the past when you were set up as

00:11:23 --> 00:11:29
harted well yeah shard of database

00:11:25 --> 00:11:30
structure we had DBA is actually making

00:11:28 --> 00:11:33
sure that when one of them goes down

00:11:29 --> 00:11:35
they actually do certain procedures and

00:11:32 --> 00:11:37
restore it somewhere else it was a lot

00:11:34 --> 00:11:38
of manual work and usually whenever you

00:11:36 --> 00:11:40
had humans involved the Twitter things

00:11:37 --> 00:11:41
went wrong that's way also the fail

00:11:39 --> 00:11:43
whale a lot there were too many people

00:11:40 --> 00:11:46
involved but now when you think about it

00:11:42 --> 00:11:49
when you have things like RDS or you

00:11:45 --> 00:11:51
have Cassandra the runs of DCs sorry for

00:11:48 --> 00:11:55
the shameless plug but if you have

00:11:50 --> 00:11:57
systems where a lot of the recovery of

00:11:54 --> 00:11:59
ailures is actually built in and the

00:11:56 --> 00:12:00
level of automation is really high you

00:11:58 --> 00:12:02
actually don't need these DBA anymore

00:11:59 --> 00:12:04
sitting around and screwing stuff up I

00:12:01 --> 00:12:05
still think there's an element of

00:12:03 --> 00:12:07
operations around these workloads though

00:12:04 --> 00:12:08
right it's just the skillset and the

00:12:06 --> 00:12:10
type of people who are doing it are

00:12:07 --> 00:12:12
different it's not your classic DBA

00:12:09 --> 00:12:14
sysadmin it's gonna be someone more of

00:12:11 --> 00:12:16
an engineering skill set is this

00:12:13 --> 00:12:18
omebody that understands code and api's

00:12:15 --> 00:12:19
and whatever is that someone that

00:12:17 --> 00:12:21
understands running application like for

00:12:18 --> 00:12:23
me if a line is is do you write your own

00:12:20 --> 00:12:25
application is your expertise primarily

00:12:22 --> 00:12:26
writing an application or running

00:12:24 --> 00:12:28
somebody else's application I mean well

00:12:25 --> 00:12:30
et's take Cassandra as an example

00:12:27 --> 00:12:31
internally we've got a large Cassandra

00:12:29 --> 00:12:33
cluster and the developer who designed

00:12:30 --> 00:12:35
it for our particular workload is one of

00:12:32 --> 00:12:38
our most senior best engineers I don't

00:12:34 --> 00:12:39
want him doing operations on our

00:12:37 --> 00:12:41
Cassandra cluster so we've got a

00:12:38 --> 00:12:43
different skill set they're not quite

00:12:40 --> 00:12:45
the same level of seniority as appalled

00:12:42 --> 00:12:50
by Wright yeah see you should use our

00:12:44 --> 00:12:53
software are you taking advantage

00:12:49 --> 00:12:55
standardization the C ICD pipeline for

00:12:52 --> 00:12:57
signal effects it seems like a very

00:12:54 --> 00:13:00
obvious way to kind of get access to

00:12:56 --> 00:13:03
signals yes C ICD and containers have

00:12:59 --> 00:13:05
completely changed the entire downstream

00:13:02 --> 00:13:06
systems management process you know you

00:13:04 --> 00:13:08
think about with containers the

00:13:05 --> 00:13:09
developer can now deploy directly into

00:13:07 --> 00:13:11
production environments you have a high

00:13:08 --> 00:13:12
rate of change direct deployment

00:13:10 --> 00:13:14
especially the mutable infrastructure

00:13:11 --> 00:13:16
you're seeing people effectively replace

00:13:13 --> 00:13:17
an entire application with a new set of

00:13:15 --> 00:13:19
containers and then you know

00:13:16 --> 00:13:21
decommissioning the old set so there's a

00:13:18 --> 00:13:21
massive amount of change and there's a

00:13:20 --> 00:13:24
massive amount

00:13:20 --> 00:13:26
urn in the environment and so being

00:13:23 --> 00:13:29
able to collect the signal so that you

00:13:25 --> 00:13:30
can more you know proactively identify

00:13:28 --> 00:13:32
what's different so a lot of our

00:13:29 --> 00:13:34
customers are doing not quite a be

00:13:31 --> 00:13:35
testing but canary deployments Bluegreen

00:13:33 --> 00:13:37
deployments where they're looking at

00:13:34 --> 00:13:38
metrics for the new set of

00:13:36 --> 00:13:41
infrastructure the new application

00:13:37 --> 00:13:42
version versus the old identifying

00:13:40 --> 00:13:44
outliers anomalies and then rolling back

00:13:41 --> 00:13:46
very quickly and do you require code

00:13:43 --> 00:13:48
instrumentation to do that for the

00:13:45 --> 00:13:50
higher-level application metrics the

00:13:47 --> 00:13:52
custom application metrics yes most of

00:13:49 --> 00:13:54
the custom it seems to me like another

00:13:51 --> 00:13:56
line that's five for kidding the

00:13:53 --> 00:13:59
industry here is the old model the

00:13:55 --> 00:14:01
interface is like IP or like the process

00:13:58 --> 00:14:03
or the file system or the database but

00:14:00 --> 00:14:04
now because see ICD is becoming

00:14:02 --> 00:14:06
standardized the interface is actually

00:14:03 --> 00:14:08
the programming language which is so

00:14:05 --> 00:14:09
powerful it used to be the case of I was

00:14:07 --> 00:14:11
gonna provide something for signaling

00:14:08 --> 00:14:13
for example I couldn't be part of the

00:14:10 --> 00:14:14
code so I'd either sit on the wire and

00:14:12 --> 00:14:16
I'd use network signals or maybe I'd use

00:14:13 --> 00:14:18
the file system or maybe some process

00:14:15 --> 00:14:19
performance characteristics but you can

00:14:17 --> 00:14:21
actually integrate in the code because

00:14:18 --> 00:14:22
the ICD and linkages are becoming

00:14:20 --> 00:14:23
standard so the zoom allows you to

00:14:21 --> 00:14:25
provide better visibility than you can

00:14:22 --> 00:14:27
before so playing this out does every

00:14:24 --> 00:14:28
box become basically a library and

00:14:26 --> 00:14:30
somebody's code or they're basically

00:14:27 --> 00:14:31
like the old set of vendors that we're

00:14:29 --> 00:14:32
providing boxes and this and that do

00:14:30 --> 00:14:34
they just basically become software

00:14:31 --> 00:14:35
libraries yes the richness of data that

00:14:33 --> 00:14:37
we can collect now is substantially

00:14:34 --> 00:14:39
better just given that the developer

00:14:36 --> 00:14:41
does have an incentive to instrument his

00:14:38 --> 00:14:42
or her own code because if something

00:14:40 --> 00:14:44
oes wrong they're the ones that are

00:14:41 --> 00:14:47
gonna get paged so bad do you see that

00:14:43 --> 00:14:49
you're appealing to a subset of the

00:14:46 --> 00:14:51
community that's growing or is it more

00:14:48 --> 00:14:52
its everybody and they're just learning

00:14:50 --> 00:14:54
are we seeing an emergence of a new kind

00:14:51 --> 00:14:56
of user a new buyer that understands

00:14:53 --> 00:14:58
development that understands programming

00:14:55 --> 00:14:59
or is everybody slowly moving towards it

00:14:57 --> 00:15:01
because they're gonna be older than

00:14:58 --> 00:15:03
yours everybody can become the new I

00:15:00 --> 00:15:05
think it's very much moving in

00:15:02 --> 00:15:08
concentric circles from a group of early

00:15:04 --> 00:15:10
adopters typically in the B area around

00:15:07 --> 00:15:12
open-source projects and so I'm that's

00:15:09 --> 00:15:13
been some of our huge adopter set in

00:15:11 --> 00:15:15
Italy if I write and then sort of

00:15:12 --> 00:15:18
spreads out deeper and deeper into the

00:15:14 --> 00:15:20
whole ecosystem where of course like you

00:15:17 --> 00:15:22
always have these curves of like

00:15:19 --> 00:15:25
adoptions that takes very very long to

00:15:21 --> 00:15:27
trail off so at this point 20% of all

00:15:24 --> 00:15:29
websites are still built with WordPress

00:15:26 --> 00:15:32
and everybody kind of knows it's a bad

00:15:28 --> 00:15:34
idea but it's even still slowly growing

00:15:31 --> 00:15:35
and I think we're about to see a pretty

00:15:33 --> 00:15:37
massive seat

00:15:34 --> 00:15:39
where the architecture of that will

00:15:36 --> 00:15:41
shift and that I think will affect like

00:15:38 --> 00:15:44
basically all web developers over the

00:15:40 --> 00:15:45
next ten years okay so for those that

00:15:43 --> 00:15:46
are running large companies that are

00:15:44 --> 00:15:48
moving towards containers into micro

00:15:45 --> 00:15:50
services the other understand that see

00:15:47 --> 00:15:51
ICD is evolving in the entire

00:15:49 --> 00:15:53
infrastructure is evolving to support

00:15:50 --> 00:15:56
hat like is there any guidance while

00:15:52 --> 00:15:57
you would provide to someone running a

00:15:55 --> 00:15:58
business especially a legacy business

00:15:56 --> 00:16:00
and how to get ready for this and how

00:15:57 --> 00:16:02
they adopted what to experiment what to

00:15:59 --> 00:16:04
look into yes I don't think there's

00:16:01 --> 00:16:05
going to be this rip and replace so

00:16:03 --> 00:16:07
we're dealing with a lot of financial

00:16:04 --> 00:16:09
services companies and if you log on to

00:16:06 --> 00:16:11
your bank account or if you do an ATM

00:16:08 --> 00:16:12
transaction that still runs on a

00:16:10 --> 00:16:14
mainframe and that's probably not going

00:16:11 --> 00:16:16
to go away because I think a lot of the

00:16:13 --> 00:16:18
tools that have emerged they don't have

00:16:15 --> 00:16:20
the same level of consistency that the

00:16:17 --> 00:16:22
mainframe has but I think what's going

00:16:19 --> 00:16:24
to happen over time is as a bank for

00:16:21 --> 00:16:26
example rolls out new applications and

00:16:23 --> 00:16:29
those applications are client facing and

00:16:25 --> 00:16:31
they have more traffic you can introduce

00:16:28 --> 00:16:33
caching layers that actually do a read

00:16:30 --> 00:16:35
from the mainframe and then they can

00:16:32 --> 00:16:37
serve many many more clients so I think

00:16:34 --> 00:16:39
we're not going to see a rip and replace

00:16:36 --> 00:16:41
I think we're going to see more and more

00:16:38 --> 00:16:43
systems build around the old systems and

00:16:40 --> 00:16:45
for some of the core infrastructure I

00:16:42 --> 00:16:47
think even in 20 or 30 years we'll still

00:16:44 --> 00:16:49
have mainframes I agree that a lot of

00:16:46 --> 00:16:51
this will happen as gradual transitions

00:16:48 --> 00:16:53
right and out of the hole advantage of

00:16:50 --> 00:16:55
this micro service world is that you can

00:16:52 --> 00:16:56
actually split things into smaller

00:16:54 --> 00:16:58
services from that also means you can

00:16:55 --> 00:17:01
start building out some kind of find

00:16:57 --> 00:17:04
layer that now consumes your old

00:17:01 --> 00:17:05
mainframe stuff wrapped in a couple of

00:17:03 --> 00:17:07
smaller services but I think we'll see a

00:17:04 --> 00:17:10
lot of those gradual transition paths

00:17:06 --> 00:17:12
and old stuff sticks around for a very

00:17:09 --> 00:17:14
long time one piece of feedback I would

00:17:11 --> 00:17:17
have based on everything we've seen with

00:17:13 --> 00:17:18
enterprises is this whole model of CI CD

00:17:16 --> 00:17:21
micro services containers it's all

00:17:17 --> 00:17:24
around optimizing for speed and you know

00:17:20 --> 00:17:26
high velocity and speed and what a lot

00:17:23 --> 00:17:29
of people don't realize is the entire

00:17:25 --> 00:17:31
toolset has to evolve to enable you to

00:17:28 --> 00:17:33
catch issues more quickly and to roll

00:17:30 --> 00:17:34
them back lis as quickly as possible so

00:17:32 --> 00:17:36
that's the fundamental philosophical

00:17:33 --> 00:17:38
change in the toolset and you know from

00:17:35 --> 00:17:39
the very beginning and how you develop

00:17:37 --> 00:17:42
your code all the way through how you

00:17:38 --> 00:17:43
support manage it that's we're seeing a

00:17:41 --> 00:17:45
lot of interesting new technologies that

00:17:42 --> 00:17:47
are supporting this this very different

00:17:44 --> 00:17:48
model of software delivery so I you know

00:17:46 --> 00:17:49
urge everyone to take a look at the

00:17:47 --> 00:17:51
ntire

00:17:48 --> 00:17:53
spectrum from build all the way to

00:17:50 --> 00:17:54
release manage and support and how

00:17:52 --> 00:17:56
that's going to change in this new world

00:17:53 --> 00:18:00
yeah please help me thank the panelists

00:17:55 --> 00:18:00
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
