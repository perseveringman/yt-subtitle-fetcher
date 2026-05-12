---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "0mNihNCHeHs"
title: "We Need Better Interfaces for Programming the Internet of Things"
video_url: "https://www.youtube.com/watch?v=0mNihNCHeHs"
thumbnail_url: "https://i.ytimg.com/vi/0mNihNCHeHs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=0mNihNCHeHs"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-15T18:28:33.000Z"
upload_date: "2017-07-15"
duration_seconds: 191
duration_human: "3:11"
view_count: 216
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:29:48.336Z"
---

# We Need Better Interfaces for Programming the Internet of Things

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=0mNihNCHeHs
- video_id: 0mNihNCHeHs
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-15T18:28:33.000Z
- upload_date: 2017-07-15
- duration: 3:11
- view_count: 216
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: #internet of things, #programming languages, #programming, #interfaces, #system architecture, #Moore's Law, #Dennard scaling, #FPGA, #processors
- categories: Science & Technology

## Description

Hardware’s in a really disruptive period right now, as we: (1) get more — but not faster — transistors (it’s the ‘end’ of Dennard scaling); and (2) move computing into sensors and other small devices in the Internet of Things. It’s all leading to specialization in hardware, from FPGAs to specialized processors and combinations.

So what does this mean for software? Well, we’ll need better system design and programming abstractions. But we’ll also need to embrace making these interfaces much more programmable — and by more people, with a programming model where you don’t have to be a PhD in computer science to use it.

Kathyrn McKinley is a principal researcher at Microsoft (and University of Texas at Austin professor) who focuses on programming language implementation; future architectures; and compilers that are a better match to current and future technology limits and constraints. This video was recorded as part of the a16z Academic Roundtable 2014.

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
I'm Katherine McKinley I'm a principal

00:00:02 --> 00:00:09
researcher at Microsoft in Redmond my

00:00:06 --> 00:00:11
research area is programming language

00:00:08 --> 00:00:14
implementation I tried to say make

00:00:10 --> 00:00:16
software better faster more fish

00:00:13 --> 00:00:20
energy-efficient higher performance and

00:00:15 --> 00:00:23
correct hardware is in a very disruptive

00:00:19 --> 00:00:26
period the end of Dennard scaling which

00:00:22 --> 00:00:29
means that hardware is you know here

00:00:25 --> 00:00:31
hardware is getting faster instead we

00:00:28 --> 00:00:34
get more transistors but what do they do

00:00:30 --> 00:00:37
so now what we're seeing is

00:00:33 --> 00:00:40
pecialization in hardware which is

00:00:36 --> 00:00:42
FPGAs or specialized processors or

00:00:39 --> 00:00:45
combining big and little processors

00:00:41 --> 00:00:48
together a big powerful fast processor

00:00:44 --> 00:00:52
with a very energy-efficient processor

00:00:47 --> 00:00:55
so software has had an abstraction that

00:00:51 --> 00:00:59
all hardware's about the same and one

00:00:54 --> 00:01:01
thread of execution so in order to make

00:00:58 --> 00:01:04
software port to different versions of

00:01:00 --> 00:01:06
crazy hardware or different generations

00:01:03 --> 00:01:10
of hardware as we go through this

00:01:05 --> 00:01:12
disrupted period the software systems

00:01:09 --> 00:01:15
are not prepared for this and so my

00:01:11 --> 00:01:17
research is targeting both how you do

00:01:14 --> 00:01:20
that as a software system but also

00:01:16 --> 00:01:22
programming abstractions that like to

00:01:19 --> 00:01:26
trade-off quality for energy efficiency

00:01:21 --> 00:01:29
let you reason about the fact that

00:01:25 --> 00:01:32
sensor data is not correct and how do

00:01:28 --> 00:01:34
you deal with these inaccuracies in a

00:01:31 --> 00:01:37
programming model that you don't need a

00:01:33 --> 00:01:42
PhD in statistics or computer science in

00:01:36 --> 00:01:46
order to use so we have some very

00:01:41 --> 00:01:49
interesting insights about what kind of

00:01:45 --> 00:01:53
hardware is best for interactive

00:01:48 --> 00:01:56
applications so where the industry has

00:01:52 --> 00:01:58
been very driven by the capabilities of

00:01:55 --> 00:02:01
hardware in the past and we thought that

00:01:57 --> 00:02:04
his hardware disruption was only going

00:02:00 --> 00:02:07
to bring us pain if you're optimizing

00:02:03 --> 00:02:10
for both average and tail latency which

00:02:06 --> 00:02:13
means that what you perceive as a user

00:02:09 --> 00:02:14
is a consistent licensee and no no long

00:02:12 --> 00:02:16
ones

00:02:13 --> 00:02:19
and you actually want heterogeneous

00:02:15 --> 00:02:21
hardware because you want to take the

00:02:18 --> 00:02:23
things that don't run or don't need very

00:02:20 --> 00:02:26
much power performance you want to put

00:02:22 --> 00:02:28
hem on a little-bitty processor and and

00:02:25 --> 00:02:30
the work that's very hard to do by your

00:02:27 --> 00:02:33
deadline you want to put that on a

00:02:29 --> 00:02:36
high-power process and you get a whole

00:02:32 --> 00:02:39
better system if you can organize all of

00:02:35 --> 00:02:42
that one of the things that so important

00:02:38 --> 00:02:45
is is program ability how you get

00:02:41 --> 00:02:49
computers to do useful stuff and that in

00:02:44 --> 00:02:51
terms of innovation it's often the

00:02:48 --> 00:02:55
applications that have driven both

00:02:50 --> 00:02:58
programming language hardware and and

00:02:54 --> 00:03:01
other kinds of innovations and that it

00:02:57 --> 00:03:04
we would embrace making things more

00:03:00 --> 00:03:07
programmable instead of our focusing on

00:03:03 --> 00:03:10
ourselves we're focusing on people who

00:03:06 --> 00:03:13
have problems that we could get further

00:03:09 --> 00:03:13
faster

<!-- YOUTUBE_TRANSCRIPT_END -->
