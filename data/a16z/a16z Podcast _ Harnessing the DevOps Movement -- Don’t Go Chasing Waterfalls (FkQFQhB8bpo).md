---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "FkQFQhB8bpo"
title: "a16z Podcast | Harnessing the DevOps Movement -- Don’t Go Chasing Waterfalls"
video_url: "https://www.youtube.com/watch?v=FkQFQhB8bpo"
thumbnail_url: "https://i.ytimg.com/vi/FkQFQhB8bpo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=FkQFQhB8bpo"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:32:44.000Z"
upload_date: "2019-01-02"
duration_seconds: 711
duration_human: "11:51"
view_count: 56
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:27:14.019Z"
---

# a16z Podcast | Harnessing the DevOps Movement -- Don’t Go Chasing Waterfalls

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=FkQFQhB8bpo
- video_id: FkQFQhB8bpo
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:32:44.000Z
- upload_date: 2019-01-02
- duration: 11:51
- view_count: 56
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

In this, world of massive cloud-based applications and services, rolling out software has moved from an episodic event to an almost continuous release cycle. In that environment, software products aren’t as “done” as they used to be -- they can’t be -- so the focus has shifted to reversibility. Building a development organization with the design tools and processes that can aggressively iterate while also creating safety nets. So if things do get screwy they can be fixed before customers even notice.

Call it DevOps or application operations, Steven Sinofsky leads a discussion with Karthik Rau from SignalFx and Alex Solomon from PagerDuty about the evolution of I.T. operations – and the requirements and challenges that modern distributed applications pose for a development organization.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
welcome to the a 16z podcast I'm Michael

00:00:02 --> 00:00:07
Copeland in this world of massive

00:00:04 --> 00:00:10
cloud-based applications and services

00:00:06 --> 00:00:13
rolling out software has moved from an

00:00:09 --> 00:00:15
episodic event to an almost continuous

00:00:12 --> 00:00:17
release cycle in that environment

00:00:14 --> 00:00:19
software products aren't as

00:00:16 --> 00:00:22
quote-unquote done as they used to be

00:00:18 --> 00:00:25
they can't be so the focus is shifted to

00:00:21 --> 00:00:27
reversibility building a development

00:00:24 --> 00:00:30
organization with the design tools and

00:00:26 --> 00:00:33
processes that can aggressively iterate

00:00:29 --> 00:00:35
while also creating safety nets so if

00:00:32 --> 00:00:38
things do get screwy they can be fixed

00:00:34 --> 00:00:41
before customers even notice call it

00:00:37 --> 00:00:43
DevOps or application operations Steven

00:00:40 --> 00:00:46
Sinofsky leads a discussion with karthik

00:00:42 --> 00:00:49
rao from signal FX and alex Solomon from

00:00:45 --> 00:00:52
pager duty about the evolution of IT

00:00:48 --> 00:00:54
operations and the requirements and

00:00:51 --> 00:00:56
challenges that modern distributed

00:00:53 --> 00:01:00
applications pose for development

00:00:55 --> 00:01:02
organization Steven Sinofsky starts the

00:00:59 --> 00:01:04
conversation what we thought we'd do is

00:01:01 --> 00:01:08
have a little bit of a discussion about

00:01:03 --> 00:01:09
he role of DevOps and how that really

00:01:07 --> 00:01:13
changes how things were going in IT

00:01:08 --> 00:01:15
represented by two great founders with

00:01:12 --> 00:01:18
some wonderful tools in the space but

00:01:14 --> 00:01:19
just diving right in I think one of the

00:01:17 --> 00:01:22
most interesting things is that

00:01:18 --> 00:01:24
historically IT has really thought about

00:01:21 --> 00:01:26
you know waterfall development and

00:01:23 --> 00:01:28
requirements gathering and and really

00:01:25 --> 00:01:30
trying to solve these customer problems

00:01:27 --> 00:01:33
where the customer is an internal facing

00:01:29 --> 00:01:35
organization how how does the cloud and

00:01:32 --> 00:01:38
modern techniques and the consumer

00:01:34 --> 00:01:39
internet really alter the the way that

00:01:37 --> 00:01:41
people think about the different roles

00:01:38 --> 00:01:43
and the types of work to get done in IT

00:01:40 --> 00:01:46
maybe start with Kartik in that yeah I

00:01:42 --> 00:01:49
think one of the best examples or

00:01:45 --> 00:01:51
esponses to that question I read it was

00:01:48 --> 00:01:54
a facebook engineer who wrote a blog

00:01:50 --> 00:01:56
post about how traditional e the goal

00:01:53 --> 00:01:58
was always to reduce complexity or

00:01:55 --> 00:01:59
mitigate complexity and that's what

00:01:57 --> 00:02:00
waterfall and kind of all the face

00:01:58 --> 00:02:03
checks are essentially all about

00:01:59 --> 00:02:05
managing that complexity and the point

00:02:02 --> 00:02:08
hat he made was if you're really trying

00:02:04 --> 00:02:09
to be innovative and move quickly you

00:02:07 --> 00:02:11
can't really manage the complexity

00:02:08 --> 00:02:13
because at Facebook they've got so many

00:02:10 --> 00:02:13
small teams and they're all releasing

00:02:12 --> 00:02:16
update

00:02:12 --> 00:02:18
it's very you know aggressively and in

00:02:15 --> 00:02:20
that kind of a world you really have to

00:02:17 --> 00:02:24
focus more on organization design tools

00:02:19 --> 00:02:26
and process that focus on what he called

00:02:23 --> 00:02:28
reversibility and so this is you still

00:02:25 --> 00:02:31
move very aggressively but you have to

00:02:27 --> 00:02:33
create the safety nets so that as you're

00:02:30 --> 00:02:34
making changes if you make any change

00:02:32 --> 00:02:36
that is potentially destructive that you

00:02:33 --> 00:02:38
recognize it very quickly and you have

00:02:35 --> 00:02:40
the means both in kind of how your your

00:02:37 --> 00:02:41
software is designed your processes

00:02:39 --> 00:02:43
design your teams are designed so that

00:02:41 --> 00:02:45
you can roll it back very quickly before

00:02:42 --> 00:02:47
your customers even notice when you do

00:02:44 --> 00:02:48
that you then have confidence a lot more

00:02:46 --> 00:02:50
confidence that you can be much much

00:02:47 --> 00:02:52
more aggressive in rolling out software

00:02:49 --> 00:02:54
right so I think that to me summed it up

00:02:51 --> 00:02:56
in a really crisp way of you know the

00:02:53 --> 00:02:57
world has changed a little bit and if

00:02:55 --> 00:02:59
you're gonna really support fast release

00:02:56 --> 00:03:01
cycles and you want to be competitive

00:02:58 --> 00:03:03
and being very responsive to the

00:03:00 --> 00:03:05
marketplace you can't control complexity

00:03:02 --> 00:03:08
the same way you could before you just

00:03:04 --> 00:03:10
have to focus on other aspects primarily

00:03:07 --> 00:03:13
reversibility and and so like with the

00:03:09 --> 00:03:15
this role though of DevOps like how how

00:03:12 --> 00:03:17
do you see customers like you know in

00:03:14 --> 00:03:19
the in the world of like break and

00:03:16 --> 00:03:21
response and rescue late incidents how

00:03:18 --> 00:03:24
do you see the internal customers sort

00:03:20 --> 00:03:26
of managing when their products don't

00:03:23 --> 00:03:30
appear as done as they used to but

00:03:25 --> 00:03:32
hey're done a little bit sooner and how

00:03:29 --> 00:03:34
does that influence the the ways to

00:03:31 --> 00:03:35
think about the engineering cycle and

00:03:33 --> 00:03:38
also to just the communication with

00:03:34 --> 00:03:42
ose internal customers that's a good

00:03:37 --> 00:03:45
question so what we've seen is that the

00:03:41 --> 00:03:47
requirements stage essentially boils

00:03:44 --> 00:03:50
down to doing customer development and

00:03:46 --> 00:03:52
being able to talk to customers and and

00:03:49 --> 00:03:55
what's really important as part of that

00:03:51 --> 00:03:56
is showing them something so as part of

00:03:54 --> 00:03:58
the development cycle you would show

00:03:55 --> 00:04:00
them wireframes and something to react

00:03:57 --> 00:04:03
o and then you'd make it a much more

00:03:59 --> 00:04:05
iterative process where you wouldn't you

00:04:02 --> 00:04:09
it's a shift away from the waterfall get

00:04:04 --> 00:04:11
it done one Big Bang which actually is

00:04:08 --> 00:04:13
very risky because if you've made any

00:04:10 --> 00:04:16
mistakes along the way and those

00:04:12 --> 00:04:17
mistakes actually add up you at the end

00:04:15 --> 00:04:20
of the day you don't deliver what the

00:04:16 --> 00:04:22
customer needs so being able to to

00:04:19 --> 00:04:24
develop the software much more

00:04:21 --> 00:04:27
iteratively and show them here's what we

00:04:23 --> 00:04:28
have so far what do you guys think

00:04:26 --> 00:04:30
and get the reaction back from the

00:04:27 --> 00:04:33
customer and then adjust and learn and

00:04:29 --> 00:04:34
iterate that's a big part of DevOps well

00:04:32 --> 00:04:36
in the in the consumer space one of the

00:04:34 --> 00:04:38
things that's so interesting is you know

00:04:35 --> 00:04:40
there's this perception that you throw

00:04:37 --> 00:04:43
it out there and you see how people

00:04:39 --> 00:04:45
react and and and then you you adjust

00:04:42 --> 00:04:46
and you iterate and things like that but

00:04:44 --> 00:04:48
often in the business world people said

00:04:45 --> 00:04:50
well we can't we're just not able to do

00:04:47 --> 00:04:52
that because our requirements are fixed

00:04:49 --> 00:04:54
like yeah go build a messaging app go

00:04:51 --> 00:04:57
build a shopping app but those

00:04:53 --> 00:04:59
requirements aren't aren't you know

00:04:56 --> 00:05:00
they're flexible whereas we have to this

00:04:58 --> 00:05:02
our expense report process or

00:04:59 --> 00:05:05
performance review process or cash to

00:05:01 --> 00:05:07
quote process how do you how do you see

00:05:04 --> 00:05:09
the role of in the customers you work

00:05:06 --> 00:05:12
with how do you see the role of an MVP

00:05:08 --> 00:05:15
or or just these early releases do you

00:05:11 --> 00:05:16
see that evolving in any way well I

00:05:14 --> 00:05:17
think one of the things is you don't

00:05:15 --> 00:05:18
have to build the entire stack right I

00:05:16 --> 00:05:20
mean I think in the web services economy

00:05:17 --> 00:05:22
ou can leverage a lot of other

00:05:19 --> 00:05:24
components and focus on the things where

00:05:21 --> 00:05:26
you really you know where you want to

00:05:23 --> 00:05:27
invest and it makes it a lot easier to

00:05:25 --> 00:05:31
get something up and running very

00:05:26 --> 00:05:33
quickly right and I think ultimately

00:05:30 --> 00:05:34
even in the enterprise world markets are

00:05:32 --> 00:05:36
changing very quickly and so if you're

00:05:33 --> 00:05:37
taking two years to get something out

00:05:35 --> 00:05:40
he markets have probably changed in

00:05:36 --> 00:05:41
those two years so it's very

00:05:39 --> 00:05:43
advantageous to get something out

00:05:40 --> 00:05:47
quickly I think the the key is just to

00:05:42 --> 00:05:49
have focus and you know leveraging the

00:05:46 --> 00:05:50
sort of web services ecosystem there all

00:05:48 --> 00:05:52
of these different technologies that you

00:05:49 --> 00:05:53
can leverage without having to kind of

00:05:51 --> 00:05:55
wrap it up and build it up into this one

00:05:52 --> 00:05:56
giant software package that takes two

00:05:54 --> 00:05:58
years to release I think it certainly

00:05:55 --> 00:06:00
makes things easier put you on a spot a

00:05:57 --> 00:06:01
little bit of you have either of you you

00:05:59 --> 00:06:03
know really gone through that with a

00:06:00 --> 00:06:05
customer with a particular kind of app

00:06:02 --> 00:06:07
where it's it's really jumped out at

00:06:04 --> 00:06:09
hem and in terms of you know wow this

00:06:06 --> 00:06:10
was an app where we were generating way

00:06:08 --> 00:06:13
more tickets than we used to expect

00:06:09 --> 00:06:14
because we have way more telemetry how

00:06:12 --> 00:06:16
are you you seeing the actual

00:06:13 --> 00:06:19
deployments of like these modern

00:06:15 --> 00:06:20
cloud-based applications really evolving

00:06:18 --> 00:06:22
in terms of the level of support and the

00:06:19 --> 00:06:25
level of understanding that's that's

00:06:21 --> 00:06:27
really going on yeah well what we've

00:06:24 --> 00:06:30
seen is that customers are becoming a

00:06:26 --> 00:06:32
lot more demanding as a software as the

00:06:29 --> 00:06:33
world becomes more powered by just that

00:06:31 --> 00:06:36
hese are the customers of the app or

00:06:32 --> 00:06:38
the customers of yours the customers of

00:06:35 --> 00:06:39
the app yeah yeah they become more

00:06:37 --> 00:06:41
demanding they expect everything to be

00:06:38 --> 00:06:44
up 24/7 you can

00:06:40 --> 00:06:46
take like hours to fix an outage you

00:06:43 --> 00:06:47
have to automatically detect outages you

00:06:45 --> 00:06:49
can't have your customers detect the

00:06:46 --> 00:06:51
outage for you and you have to respond

00:06:48 --> 00:06:55
quickly and fix it

00:06:50 --> 00:06:58
and the if you don't do that you get you

00:06:54 --> 00:07:00
you your bottom line hurts your

00:06:57 --> 00:07:03
eputation yeah many of these

00:06:59 --> 00:07:04
applications have SLA s so if the app is

00:07:02 --> 00:07:07
not up you're actually you have to

00:07:03 --> 00:07:10
refund money back and so there's a lot

00:07:06 --> 00:07:13
more pressure on the IT department to

00:07:09 --> 00:07:14
deliver 100% uptime of course 100% is

00:07:12 --> 00:07:16
not realistic but you have to get as

00:07:13 --> 00:07:17
close as possible to that yeah that's

00:07:15 --> 00:07:19
one of the things like that it's a good

00:07:16 --> 00:07:20
comment like a hundred percent because

00:07:18 --> 00:07:22
one of the the things that's so

00:07:19 --> 00:07:24
interesting is is that ite is to think

00:07:21 --> 00:07:26
of we can deliver a hundred percent or

00:07:23 --> 00:07:28
we can get really really close if we own

00:07:25 --> 00:07:31
all of the parts from the the network

00:07:27 --> 00:07:34
routers on up but in the SAS world you

00:07:30 --> 00:07:37
know wow you might often with your your

00:07:33 --> 00:07:39
Active Directory ID you might be

00:07:36 --> 00:07:41
using this storage system from somewhere

00:07:38 --> 00:07:42
lse and this other service and you

00:07:40 --> 00:07:45
might be involving involved with an

00:07:41 --> 00:07:48
integration how do you parse the notion

00:07:44 --> 00:07:50
of 100% uptime in that or how does IT

00:07:47 --> 00:07:52
think of accountability even in that

00:07:49 --> 00:07:54
yeah I think that's an interesting

00:07:51 --> 00:07:56
question because your customers don't

00:07:53 --> 00:07:58
know the difference right

00:07:55 --> 00:07:59
hey're just like I can't log on we I

00:07:57 --> 00:08:03
gave a file an expense report talking to

00:07:58 --> 00:08:04
a media company and they had the

00:08:02 --> 00:08:08
situation they had a really big event

00:08:03 --> 00:08:10
and they had a streaming app and their

00:08:07 --> 00:08:11
one of their ad networks was taking an

00:08:09 --> 00:08:14
abnormally long time to load the ad

00:08:10 --> 00:08:15
before the video streamed and all their

00:08:13 --> 00:08:17
users were on Twitter complaining you

00:08:14 --> 00:08:19
suck and just you know and it was it was

00:08:16 --> 00:08:21
terrible for their brand but it wasn't

00:08:18 --> 00:08:22
heir fault it was a third party that

00:08:20 --> 00:08:25
hey were taking really long time to

00:08:21 --> 00:08:27
look well it wasn't their fault I mean

00:08:24 --> 00:08:29
it was it was it wasn't their technology

00:08:26 --> 00:08:30
it was someone else's technology right

00:08:28 --> 00:08:32
but the the from a customer point of

00:08:29 --> 00:08:34
view that didn't matter they just felt

00:08:31 --> 00:08:36
like the experience was poor and so you

00:08:33 --> 00:08:37
know for example they're working with us

00:08:35 --> 00:08:40
on instrumenting the calls they make out

00:08:37 --> 00:08:42
into their third party services and

00:08:39 --> 00:08:45
being able to measure it and having the

00:08:41 --> 00:08:47
real-time visibility as they see events

00:08:44 --> 00:08:48
happening if they see some particular

00:08:46 --> 00:08:50
networks that are taking longer to load

00:08:47 --> 00:08:52
ds at least they have that data they

00:08:49 --> 00:08:53
can make real-time decisions if they

00:08:51 --> 00:08:54
need to and they can all their vendors

00:08:52 --> 00:08:58
more account

00:08:53 --> 00:08:59
so what let's it let's switch gears a

00:08:57 --> 00:09:01
little bit just in terms of one of the

00:08:58 --> 00:09:03
interesting things about being a person

00:09:00 --> 00:09:06
in DevOps now particularly inside the

00:09:02 --> 00:09:09
nterprise is really balancing the needs

00:09:05 --> 00:09:10
of these needs of like control which

00:09:08 --> 00:09:13
used to come from being all on-prem

00:09:09 --> 00:09:16
which now might move to sort of a hybrid

00:09:12 --> 00:09:17
cloud model and we we're all very

00:09:15 --> 00:09:20
forward-looking here but many customers

00:09:16 --> 00:09:23
are sort of dealing in these kind of

00:09:19 --> 00:09:25
hybrid environments what what are we how

00:09:22 --> 00:09:27
do we help people to understand that

00:09:24 --> 00:09:28
both the advantages you know of moving

00:09:26 --> 00:09:30
as fast as possible which I think most

00:09:27 --> 00:09:31
people want to do to a cloud world but

00:09:29 --> 00:09:34
hen the realities that they're dealing

00:09:30 --> 00:09:36
in in terms of just these these mixed

00:09:33 --> 00:09:37
environments and just responding to

00:09:35 --> 00:09:41
what's going on from a DevOps

00:09:36 --> 00:09:44
perspective yeah I mean I think the DRM

00:09:40 --> 00:09:46
you know the control aspect of it is is

00:09:43 --> 00:09:48
a false illusion I mean the complexity

00:09:45 --> 00:09:50
of these systems I mean but what do you

00:09:47 --> 00:09:53
do it goes I have to interrupt because

00:09:49 --> 00:09:56
like people have made big bets on

00:09:52 --> 00:09:57
delivering on that expectation like and

00:09:55 --> 00:09:59
we're just kind of bursting their bubble

00:09:56 --> 00:10:00
but it's not true where we're gonna

00:09:58 --> 00:10:04
finally tell their boss it's not

00:09:59 --> 00:10:07
possible well I mean the truth is that a

00:10:03 --> 00:10:09
cloud service or a SAS service these

00:10:06 --> 00:10:12
guys have teams of people who are

00:10:08 --> 00:10:15
dedicated to keeping that service up and

00:10:11 --> 00:10:17
you know trying to to take that on

00:10:14 --> 00:10:19
yourself I mean I'd rather pay someone

00:10:16 --> 00:10:20
lse to do it for me especially if

00:10:18 --> 00:10:22
they're really good at it

00:10:19 --> 00:10:25
so this is why people use increasingly

00:10:21 --> 00:10:27
AWS and infrastructure as a service

00:10:24 --> 00:10:29
platform as a service and a SAS because

00:10:26 --> 00:10:32
someone else has to worry about that

00:10:28 --> 00:10:34
uptime and I paid them and then if if

00:10:31 --> 00:10:36
they don't deliver I get my money back

00:10:33 --> 00:10:38
SLA is and such so I think you know

00:10:35 --> 00:10:40
that's why a lot of companies including

00:10:37 --> 00:10:42
like the CIA and government are paying

00:10:39 --> 00:10:44
AWS to do it for them because they have

00:10:41 --> 00:10:46
that expertise in-house and it's hard to

00:10:43 --> 00:10:49
gain that same expertise for every

00:10:45 --> 00:10:51
single you know company out there what

00:10:48 --> 00:10:53
hat's it's a good way to think about

00:10:50 --> 00:10:56
you know the the different levels of

00:10:52 --> 00:10:58
DevOps what how do you real quick for

00:10:55 --> 00:11:00
folks just even define what DevOps is

00:10:57 --> 00:11:01
how do you help them to understand when

00:10:59 --> 00:11:03
they go to hire them and things like

00:11:00 --> 00:11:05
that yeah well we at signal effects we

00:11:02 --> 00:11:05
like to think of it more as application

00:11:04 --> 00:11:07
operations

00:11:04 --> 00:11:08
you know it's or just operations you

00:11:06 --> 00:11:11
know it's

00:11:07 --> 00:11:12
evolution of IT operations has just

00:11:10 --> 00:11:15
focused more on modern distributed

00:11:11 --> 00:11:16
applications and focusing your toolset

00:11:14 --> 00:11:18
in your process on a different set of

00:11:15 --> 00:11:21
challenges for maybe what you did before

00:11:17 --> 00:11:24
and that that's it's there still there's

00:11:20 --> 00:11:26
a significant amount of work involved in

00:11:23 --> 00:11:28
building the process and the processes

00:11:25 --> 00:11:31
and the tooling to make a cloud

00:11:27 --> 00:11:32
infrastructure usable and and highly

00:11:30 --> 00:11:35
effective for an end-user development

00:11:31 --> 00:11:36
organization and that that's you know

00:11:34 --> 00:11:38
hat we think of as the modern role of

00:11:35 --> 00:11:40
operations application operations DevOps

00:11:37 --> 00:11:42
whatever you want to call it cool well

00:11:39 --> 00:11:44
thanks everybody this was just a quick

00:11:41 --> 00:11:46
chance to see some excellent work and

00:11:43 --> 00:11:47
really think a little bit about DevOps

00:11:45 --> 00:11:49
in the modern world

00:11:46 --> 00:11:51
thank you very much guys thank you thank

00:11:48 --> 00:11:51
you

<!-- YOUTUBE_TRANSCRIPT_END -->
