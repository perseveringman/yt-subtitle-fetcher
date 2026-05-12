---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ulPKaIfG77o"
title: "Software Secures the World"
video_url: "https://www.youtube.com/watch?v=ulPKaIfG77o"
thumbnail_url: "https://i.ytimg.com/vi/ulPKaIfG77o/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ulPKaIfG77o"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-16T02:26:00.000Z"
upload_date: "2017-07-16"
duration_seconds: 1210
duration_human: "20:10"
view_count: 654
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:25:35.255Z"
---

# Software Secures the World

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ulPKaIfG77o
- video_id: ulPKaIfG77o
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-16T02:26:00.000Z
- upload_date: 2017-07-16
- duration: 20:10
- view_count: 654
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: #software, #security, #cloud, #big data
- categories: Science & Technology

## Description

Once upon a time, we thought of security measures as being built like a wall around a medieval city. Then, as threats grew in complexity, we began to think of it more like securing a city or nation-state. Finally, security grew alike to aerial warfare — mobile, quick, wide-ranging. Each of these new modes for thinking about security represented a major misalignment between the security threats that had evolved and our strategies/tactics for dealing with them.
Now we are once again at another such major misalignment — thanks largely to the cloud and new complexity — requiring both a shift in how we think about and respond to threats. But we also have security “overload” given the vast size of our systems and scale of notifications.
How do security threats develop? How should CEOs and CSOs think of planning for them? What role will AI and automation play? a16z general partner Martin Casado covers all this and more, from the perspective of someone who has experienced first-hand not just witnessed these shifts.

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
I'm going to start by introducing myself

00:00:02 --> 00:00:07
I've been security for about 17 years

00:00:05 --> 00:00:09
I kind of went full force when I joined

00:00:06 --> 00:00:10
the intelligence community so I worked

00:00:08 --> 00:00:12
you know with the diligence Committee on

00:00:09 --> 00:00:14
cybersecurity from Afghanistan through

00:00:11 --> 00:00:16
Iraq deep in operations worked in a

00:00:13 --> 00:00:18
Faraday cage the whole thing then I

00:00:15 --> 00:00:20
transitioned from that to doing my PhD

00:00:17 --> 00:00:22
at Stanford where I worked somewhat with

00:00:19 --> 00:00:23
Dan Binet who's in the back a lot of my

00:00:21 --> 00:00:25
thesis was in the security space and

00:00:22 --> 00:00:27
then from there I went to start a

00:00:24 --> 00:00:29
company called nasira

00:00:26 --> 00:00:32
which that was kind of a nine-year Ark

00:00:28 --> 00:00:34
end up getting acquired by VMware and by

00:00:31 --> 00:00:36
the time I left the product was at about

00:00:33 --> 00:00:38
a six hundred million dollar run right

00:00:35 --> 00:00:39
about 50% of that was security so I've

00:00:37 --> 00:00:42
kind of had this kind of circuitous path

00:00:38 --> 00:00:43
in and out of security I've given a lot

00:00:41 --> 00:00:45
of talks I've heard a lot of talks on

00:00:42 --> 00:00:47
security and it feels like so many of

00:00:44 --> 00:00:50
them start kind of like this and they

00:00:46 --> 00:00:52
follow like this template which is the

00:00:49 --> 00:00:54
attackers are getting worse our defenses

00:00:51 --> 00:00:56
aren't keeping up you know we're losing

00:00:53 --> 00:00:59
the arms race let me show you a bunch of

00:00:56 --> 00:01:00
anecdotes etc and that's kind of the way

00:00:58 --> 00:01:02
that we like to scare people in the

00:00:59 --> 00:01:04
security and I really don't want this to

00:01:01 --> 00:01:05
be one of those talks I actually think

00:01:03 --> 00:01:06
that there's a much more constructive

00:01:04 --> 00:01:08
way to break down the industry and to

00:01:05 --> 00:01:09
think about it and so the goal of this

00:01:07 --> 00:01:12
talk is to provide a high-level

00:01:08 --> 00:01:15
framework of how we in the firm view

00:01:11 --> 00:01:17
security how we view trends that affect

00:01:14 --> 00:01:18
security the creativity the cycle and

00:01:16 --> 00:01:19
where we are right now

00:01:17 --> 00:01:21
and how we can use that to kind of

00:01:18 --> 00:01:23
predict where Security's going but I

00:01:20 --> 00:01:25
will start with a trope because security

00:01:22 --> 00:01:27
talks about tropes and the trope is

00:01:24 --> 00:01:30
comparing digital security to physical

00:01:26 --> 00:01:32
security so physical security we like to

00:01:29 --> 00:01:33
talk about patterns right especially

00:01:31 --> 00:01:35
when we're talking about cyber security

00:01:32 --> 00:01:37
so a very popular pattern we talk about

00:01:34 --> 00:01:38
is the arms race right so what's an arms

00:01:36 --> 00:01:41
race or arms race is you've got two

00:01:37 --> 00:01:43
sides and they kind of incrementally get

00:01:40 --> 00:01:45
better weapons so you're in constant

00:01:42 --> 00:01:48
conflict of you know increasing

00:01:44 --> 00:01:49
magnitude another thing that we like to

00:01:47 --> 00:01:51
talk about is this point of diminishing

00:01:48 --> 00:01:53
returns again another trope that we like

00:01:50 --> 00:01:55
in security talks which says if I add

00:01:52 --> 00:01:57
incremental more dollars I'm going to

00:01:54 --> 00:01:59
kind of asymptotic aliy approach some

00:01:56 --> 00:02:00
norm that doesn't help me so I'm not

00:01:58 --> 00:02:02
going to get material games after a

00:01:59 --> 00:02:03
period of time and I think these are

00:02:01 --> 00:02:06
very useful concepts when talking about

00:02:02 --> 00:02:08
security sure but I think when it take

00:02:05 --> 00:02:11
the lens like a broad lens strategically

00:02:07 --> 00:02:13
in cyber security and physical security

00:02:10 --> 00:02:14
they're not all that accurate

00:02:12 --> 00:02:15
so there's another concept in physical

00:02:13 --> 00:02:17
security we talk

00:02:14 --> 00:02:18
which is misalignment whenever you have

00:02:16 --> 00:02:20
a misalignment something in the

00:02:17 --> 00:02:23
battlefield changes and it requires you

00:02:19 --> 00:02:25
to entirely change tactics and entirely

00:02:22 --> 00:02:27
change strategies and if I think we take

00:02:24 --> 00:02:29
a long view of cybersecurity we've seen

00:02:26 --> 00:02:30
some massive misalignments that have

00:02:28 --> 00:02:32
created enormous growth in the industry

00:02:29 --> 00:02:34
I think we're just coming out of one

00:02:31 --> 00:02:35
right now and entering another one so I

00:02:33 --> 00:02:36
want to talk a little bit about what the

00:02:34 --> 00:02:37
assignment has meant in the physical

00:02:35 --> 00:02:40
world and then I'm going to talk about

00:02:36 --> 00:02:42
what it means in the cyber world ok

00:02:39 --> 00:02:44
let's talk about misalignment another

00:02:41 --> 00:02:45
tropen security the walled city of

00:02:43 --> 00:02:46
course the way in the medieval time that

00:02:44 --> 00:02:49
we used to protect people is we have

00:02:45 --> 00:02:51
cities with large walls we put everybody

00:02:48 --> 00:02:53
behind those walls under times of duress

00:02:50 --> 00:02:55
and then to attack you would break wall

00:02:52 --> 00:02:57
to defend you'd pour oil over walls or

00:02:54 --> 00:02:59
you would defend walls and that

00:02:56 --> 00:03:01
basically dictated weapons defensive

00:02:58 --> 00:03:03
strategies everything and that lasted

00:03:00 --> 00:03:05
for quite a while but then the

00:03:02 --> 00:03:07
battlefield changed or the world changed

00:03:04 --> 00:03:09
and that populations grew much faster

00:03:06 --> 00:03:11
than our ability to build castles with

00:03:08 --> 00:03:14
big walls and this gave rise to mobile

00:03:10 --> 00:03:15
infantry so now you had an entirely new

00:03:13 --> 00:03:18
set of tactics and strategies around

00:03:14 --> 00:03:20
supply chains around mobility we had the

00:03:17 --> 00:03:23
cavalry come up and that dictated like

00:03:19 --> 00:03:26
the books on military strategy for quite

00:03:22 --> 00:03:28
some time until the world changed again

00:03:25 --> 00:03:30
and now you've got airplanes right so

00:03:27 --> 00:03:33
you unlock the Z dimension the third

00:03:29 --> 00:03:34
imension and this entirely changed

00:03:32 --> 00:03:37
efense center we have the Maginot Line

00:03:33 --> 00:03:39
in World War two it entirely changed

00:03:36 --> 00:03:41
offense so anytime you have a

00:03:38 --> 00:03:42
misalignment it's not like an arms race

00:03:40 --> 00:03:45
which I think it's a bad analogy the

00:03:41 --> 00:03:47
arms race says I have one new weapon and

00:03:44 --> 00:03:49
that will change from a symmetric to an

00:03:46 --> 00:03:51
asymmetric battlefield and this is you

00:03:48 --> 00:03:53
have these massive changes in the

00:03:50 --> 00:03:56
battlefield and that requires both sides

00:03:52 --> 00:03:59
to entirely retool so I want to take a

00:03:55 --> 00:04:02
look at cyber security and this one's so

00:03:58 --> 00:04:05
idly we're just coming out of maybe 10

00:04:01 --> 00:04:07
to 15 year long misalignment and that

00:04:04 --> 00:04:10
was when we went from client-server to

00:04:06 --> 00:04:11
cloud and mobile private server came out

00:04:09 --> 00:04:13
of course the days of the internet where

00:04:10 --> 00:04:14
you had clients who had servers they

00:04:12 --> 00:04:15
connected to each other the majority of

00:04:13 --> 00:04:18
the connectivity happened over the

00:04:14 --> 00:04:19
internet and the way that we prevented

00:04:17 --> 00:04:21
against these things we'll use exact

00:04:18 --> 00:04:23
firewalls and IDS's and so there wasn't

00:04:20 --> 00:04:25
a large aggregation of information in

00:04:22 --> 00:04:27
one place there wasn't a lot on the

00:04:24 --> 00:04:28
Internet connectivity was fairly well

00:04:26 --> 00:04:30
understood and then

00:04:27 --> 00:04:33
didn't isms work for kind of what we

00:04:29 --> 00:04:35
wanted and then came the time of cloud

00:04:32 --> 00:04:37
so let's say in the early 2000s we

00:04:34 --> 00:04:38
started building bigger and bigger data

00:04:36 --> 00:04:41
centers we were aggregating a ton of

00:04:37 --> 00:04:42
information in one place and think that

00:04:40 --> 00:04:44
were built in two types of client

00:04:41 --> 00:04:45
service really couldn't be pushed into

00:04:43 --> 00:04:46
service in these new mechanisms so they

00:04:44 --> 00:04:48
for example couldn't handle the

00:04:45 --> 00:04:49
bandwidth or they couldn't handle the

00:04:47 --> 00:04:53
sophistication of the attack that

00:04:48 --> 00:04:55
happened so when I was a PhD in 2003 to

00:04:52 --> 00:04:56
2007 this was like the topic of

00:04:54 --> 00:04:58
conversation but the entire thesis was

00:04:55 --> 00:05:00
we have these networks these security

00:04:57 --> 00:05:02
devices that have evolved out of the

00:04:59 --> 00:05:03
internet era where oh by the way

00:05:01 --> 00:05:04
everybody's supposed to talk to

00:05:02 --> 00:05:07
everybody and now we're in a different

00:05:03 --> 00:05:08
area where everybody's afraid of like

00:05:06 --> 00:05:10
the Internet where every cycle passes

00:05:07 --> 00:05:11
your next-door neighbor and we didn't

00:05:09 --> 00:05:13
have the technology to put into play

00:05:10 --> 00:05:15
because we had this massive aggregation

00:05:12 --> 00:05:16
in one place we had many different ways

00:05:14 --> 00:05:18
of connecting things like mobile and

00:05:15 --> 00:05:20
this requires the entire security

00:05:17 --> 00:05:22
industry to retool and we've seen this

00:05:19 --> 00:05:24
happen over the last decade so I'd say

00:05:21 --> 00:05:26
that the misalignment in this period was

00:05:23 --> 00:05:28
much higher concentration of compute and

00:05:25 --> 00:05:30
ata in one place many more methods of

00:05:27 --> 00:05:31
access of course much more valuable

00:05:29 --> 00:05:33
information was there which was burned

00:05:30 --> 00:05:35
on the attackers become ever more

00:05:32 --> 00:05:37
sophisticated so what I would like to do

00:05:34 --> 00:05:38
is I'll actually type to this misaligned

00:05:36 --> 00:05:40
a little more depth because I think it

00:05:37 --> 00:05:41
actually talks about how the security

00:05:39 --> 00:05:44
industry has evolved over the last

00:05:40 --> 00:05:45
decade or so and I think the best way to

00:05:43 --> 00:05:48
talk about this is to actually walk

00:05:44 --> 00:05:50
through a canonicalized kill chain like

00:05:47 --> 00:05:53
how a sophisticated attacker will break

00:05:49 --> 00:05:55
in find data and steal that data so this

00:05:52 --> 00:05:57
kill chain was put together by myself

00:05:54 --> 00:05:59
and a guy named Tom Korn he used to be

00:05:56 --> 00:06:01
the CSO for RSA it worked for me then at

00:05:58 --> 00:06:03
he m1 for a while we looked through a

00:06:00 --> 00:06:05
number of attacks and this also includes

00:06:02 --> 00:06:06
a text that we know about from the

00:06:04 --> 00:06:07
intelligence community it's fully

00:06:05 --> 00:06:10
canonicalized but this is based on real

00:06:06 --> 00:06:12
data so let's assume that someone is

00:06:09 --> 00:06:14
trying to break it into acne corporation

00:06:11 --> 00:06:16
this is like a like a fairly traditional

00:06:13 --> 00:06:19
model of how this would happen today so

00:06:15 --> 00:06:20
the first thing is the attacker will do

00:06:18 --> 00:06:22
is human recon I mean there's more

00:06:19 --> 00:06:23
information online than ever before

00:06:21 --> 00:06:24
whether it's your LinkedIn or through

00:06:22 --> 00:06:26
Facebook you can reconstruct

00:06:23 --> 00:06:28
organizational charts you know about

00:06:25 --> 00:06:30
people's professional affiliations and

00:06:27 --> 00:06:33
personal affiliations what they're

00:06:29 --> 00:06:34
interested in and who they know often

00:06:32 --> 00:06:37
the way that you break into an

00:06:33 --> 00:06:38
organization is used at human once

00:06:36 --> 00:06:40
you've identified a target or an entrant

00:06:37 --> 00:06:41
han you do your attack vector Rd which

00:06:39 --> 00:06:42
is you're going to try and build

00:06:40 --> 00:06:44
something special purses to

00:06:41 --> 00:06:46
making in there are tools that are

00:06:43 --> 00:06:48
available that actually offer like 365

00:06:45 --> 00:06:50
days by 24-hour support to allow you to

00:06:47 --> 00:06:52
do this things like Zeus so you do your

00:06:49 --> 00:06:54
Rd and then you determine the delivery

00:06:51 --> 00:06:56
mechanism such email so let me give you

00:06:53 --> 00:06:58
an example of how this has affected me

00:06:55 --> 00:07:00
so diversity I'm 40 years old and the

00:06:57 --> 00:07:03
day that I turned 37 years old I got an

00:06:59 --> 00:07:04
email and an email came to my sister and

00:07:02 --> 00:07:06
it was a very sweet email there's a

00:07:03 --> 00:07:07
picture of us when we were kids I said

00:07:05 --> 00:07:09
happy birthday brother

00:07:06 --> 00:07:10
I'm so happy ur my brother it's really

00:07:08 --> 00:07:12
nice to see you last week there's a

00:07:09 --> 00:07:13
picture of us I'd see no last week and I

00:07:11 --> 00:07:15
just wanted to wish you a happy birthday

00:07:12 --> 00:07:17
please click on this link and my first

00:07:14 --> 00:07:18
hought was like this is so sweet

00:07:16 --> 00:07:23
like my sister's never remembered my

00:07:17 --> 00:07:25
birthday before ever so I look at the

00:07:22 --> 00:07:26
male headers and of course this has been

00:07:24 --> 00:07:28
sent to rush I just did basic

00:07:25 --> 00:07:30
geolocation on the IP address and it's

00:07:27 --> 00:07:32
at the Russia now listen I just sold a

00:07:29 --> 00:07:33
company I'm generally paranoid by Nature

00:07:31 --> 00:07:35
cuz I work for the intelligence

00:07:32 --> 00:07:37
community I'm somewhat of a technical

00:07:34 --> 00:07:39
dude and and most importantly I'm kind

00:07:36 --> 00:07:41
of very forgetful sister and any of

00:07:38 --> 00:07:42
these were not true I would have

00:07:40 --> 00:07:44
absolutely clicked on that link for sure

00:07:41 --> 00:07:46
so let's assume I did let's assume I

00:07:43 --> 00:07:49
clicked on that link well at the time I

00:07:45 --> 00:07:50
was actually logged into the servers at

00:07:48 --> 00:07:52
work so if I would have clicked on that

00:07:49 --> 00:07:54
link quite likely the payload would have

00:07:51 --> 00:07:56
come down infected my laptop and it

00:07:53 --> 00:07:59
would have had access to my work

00:07:55 --> 00:08:00
environment generally these days when

00:07:58 --> 00:08:02
malware does infect a computer it

00:07:59 --> 00:08:03
establishes command and control

00:08:01 --> 00:08:06
this is incredibly sophisticated because

00:08:02 --> 00:08:07
we often think of attacks as

00:08:05 --> 00:08:09
fire-and-forget like someone sends the

00:08:06 --> 00:08:11
malicious payload and they walk away the

00:08:08 --> 00:08:12
reality is almost all attacks have a

00:08:10 --> 00:08:15
human-in-the-loop an attack of the loop

00:08:11 --> 00:08:17
was intelligent it's dedicated and is

00:08:14 --> 00:08:19
patient so now you've got something

00:08:16 --> 00:08:22
established on the laptop normally two

00:08:18 --> 00:08:24
strains of the malware are downloaded

00:08:21 --> 00:08:25
one that's asleep one that's awake and

00:08:23 --> 00:08:27
that one that awake will start to kind

00:08:24 --> 00:08:30
of walk around the organization and try

00:08:26 --> 00:08:32
and find what's of use it's not to move

00:08:29 --> 00:08:34
around so the scan machine entire time

00:08:31 --> 00:08:36
is communicating back with the attacker

00:08:33 --> 00:08:38
and so forth if you're lucky at some

00:08:35 --> 00:08:39
point while this piece of malware is

00:08:37 --> 00:08:41
walking around scanning things you may

00:08:38 --> 00:08:44
identify it so it may identify it for

00:08:40 --> 00:08:46
you that gets cleaned up at which case

00:08:43 --> 00:08:48
strain B wakes up context the attacker

00:08:45 --> 00:08:50
strain C comes down goes to sleep train

00:08:47 --> 00:08:51
B now knows what tripped it off and

00:08:49 --> 00:08:53
it'll start continuing the attack I

00:08:50 --> 00:08:54
think we talked looked at about 10

00:08:52 --> 00:08:56
different attacks and eight of them

00:08:53 --> 00:08:58
there are multiple strains of attack

00:08:55 --> 00:09:00
were used at some point and this is

00:08:57 --> 00:09:01
after a long period of time whatever it

00:08:59 --> 00:09:03
was looking for is identified let's say

00:09:00 --> 00:09:05
it's some personal information or credit

00:09:02 --> 00:09:07
card information or whatever it is it'll

00:09:04 --> 00:09:09
take that information parcel it up often

00:09:06 --> 00:09:12
ops use get it and then slowly leak it

00:09:08 --> 00:09:13
out okay we want some client server to

00:09:11 --> 00:09:16
cloud and because cloud we have this

00:09:12 --> 00:09:19
massive amount of aggregation of data

00:09:15 --> 00:09:21
the attack evolved as a result of that I

00:09:18 --> 00:09:23
mean this didn't have fall for no reason

00:09:20 --> 00:09:25
it as a result of that and now you've

00:09:22 --> 00:09:27
got a modern kill chain and if you look

00:09:24 --> 00:09:29
at the traditional this is a very

00:09:26 --> 00:09:31
traditional way of doing security 80% of

00:09:28 --> 00:09:32
it was basically keeping the bad guys

00:09:30 --> 00:09:35
out and just ignored the rest of the

00:09:31 --> 00:09:40
skill chain now this is a retrospective

00:09:34 --> 00:09:41
this is say security circa 2007 so it's

00:09:39 --> 00:09:44
happened after the last eight years as

00:09:40 --> 00:09:47
the entire industry has responded to

00:09:43 --> 00:09:50
deal with this so every point in this

00:09:46 --> 00:09:54
kill chain has at least one not company

00:09:49 --> 00:09:56
but sector or vertical and and many of

00:09:53 --> 00:09:58
these will have 20 30 companies that are

00:09:55 --> 00:10:00
behind them so we've have seen an

00:09:57 --> 00:10:02
absolute explosion in security

00:09:59 --> 00:10:04
techniques and security methodologies

00:10:01 --> 00:10:07
and security companies as a result of

00:10:03 --> 00:10:08
this in order to respond and it's not

00:10:06 --> 00:10:11
stopping right if you actually look at a

00:10:07 --> 00:10:13
most broad view while IT seems to be

00:10:10 --> 00:10:15
flattening out security spend is

00:10:12 --> 00:10:16
increasing and the only team that seems

00:10:14 --> 00:10:19
to be outpacing that is the amount that

00:10:15 --> 00:10:20
we lose on security breaches right so

00:10:18 --> 00:10:22
you kind of take the slider bar and you

00:10:19 --> 00:10:23
go out to the futures like all of our

00:10:21 --> 00:10:25
time and money is going to be spent

00:10:22 --> 00:10:27
dealing with security losses so we've

00:10:24 --> 00:10:28
got this ever-increasing trend that's

00:10:26 --> 00:10:32
going and this ever-increasing kind of

00:10:27 --> 00:10:33
responses and so we theorize and it's

00:10:31 --> 00:10:36
probably a little too early to call this

00:10:32 --> 00:10:37
a misalignment but if I look at the

00:10:35 --> 00:10:38
companies that walk in the door and I

00:10:36 --> 00:10:40
look at the response to the security

00:10:37 --> 00:10:43
industry I think there's been enough

00:10:39 --> 00:10:45
technology that's been actually adopted

00:10:42 --> 00:10:46
or a lot of it to deal with most of the

00:10:44 --> 00:10:47
attacks in place and there's a lot of

00:10:45 --> 00:10:49
great technology that's been involved

00:10:46 --> 00:10:51
it's being used but actually almost to

00:10:48 --> 00:10:53
the point of security overload and

00:10:50 --> 00:10:54
saturation so I want to talk a little

00:10:52 --> 00:10:55
bit about that because it's really

00:10:53 --> 00:10:57
dictating what types of companies are

00:10:54 --> 00:11:00
being created today and how people are

00:10:56 --> 00:11:02
adopting them so in practice security is

00:10:59 --> 00:11:03
dealt with at companies in the socket

00:11:01 --> 00:11:05
Security Operations Center this is

00:11:02 --> 00:11:07
people with screens looking at alerts I

00:11:04 --> 00:11:09
mean that's what it is and unfortunately

00:11:06 --> 00:11:11
the amount of alerts is going up a since

00:11:08 --> 00:11:14
article II the amount of potential

00:11:10 --> 00:11:15
technologies you can put them is going

00:11:13 --> 00:11:17
up asymptotically as you see because

00:11:14 --> 00:11:19
we're responding to very legitimate

00:11:16 --> 00:11:21
threats and breaches yet we have

00:11:18 --> 00:11:23
something like a negative 1 million

00:11:20 --> 00:11:25
person unemployment rate in the Security

00:11:22 --> 00:11:27
Operations Center and so if I think if

00:11:24 --> 00:11:29
you stand back and you take a high level

00:11:26 --> 00:11:31
heat map of the security industry I

00:11:28 --> 00:11:32
don't think it's like building another

00:11:30 --> 00:11:34
mechanism or another point product

00:11:31 --> 00:11:35
hat's the problem that we've actually

00:11:33 --> 00:11:37
got to a point that we can't really

00:11:34 --> 00:11:40
consume the technologies that are being

00:11:36 --> 00:11:41
created just because the sheer amount of

00:11:39 --> 00:11:43
data that they're creating and the lack

00:11:40 --> 00:11:45
of people that can consume it so you

00:11:42 --> 00:11:47
start hearing words like buyers fatigue

00:11:44 --> 00:11:49
you start hearing words like alert

00:11:46 --> 00:11:51
fatigue where there's just so much new

00:11:48 --> 00:11:53
to consume I mean maybe the CSOs that

00:11:50 --> 00:11:55
I've become personal friends with over

00:11:52 --> 00:11:56
the last decade by selling them to me

00:11:54 --> 00:11:59
basically say listen I don't have time

00:11:55 --> 00:12:00
on my day to answer the emails of the

00:11:58 --> 00:12:03
new products that are coming online

00:11:59 --> 00:12:04
right there's just so much out there to

00:12:02 --> 00:12:06
do it it's very difficult to keep up and

00:12:03 --> 00:12:07
so what we're seeing is we're seeing

00:12:05 --> 00:12:10
this massive movement of the entire

00:12:06 --> 00:12:12
industry to go to what I like to think

00:12:09 --> 00:12:14
is kind of the self-driving socks I mean

00:12:11 --> 00:12:16
if I gave you one broad arc that's

00:12:13 --> 00:12:17
defining security technologies like how

00:12:15 --> 00:12:20
do you automate this process of people

00:12:16 --> 00:12:21
there as far as dealing with the massive

00:12:19 --> 00:12:24
amounts of data automating human

00:12:20 --> 00:12:26
processes codifying domain expertise and

00:12:23 --> 00:12:28
responding to them and the good news is

00:12:25 --> 00:12:31
this aligns with the broader trends of

00:12:27 --> 00:12:32
the industry anyways if you look at like

00:12:30 --> 00:12:34
what come out of the consumer companies

00:12:31 --> 00:12:36
if you look it's kind of what's de novo

00:12:33 --> 00:12:39
across the board in core computer

00:12:35 --> 00:12:41
science independent of security there

00:12:38 --> 00:12:43
are technologies a lot of them with

00:12:40 --> 00:12:45
massive innovations in the last decade

00:12:42 --> 00:12:46
that were built to deal with these types

00:12:44 --> 00:12:48
of things things like big data

00:12:45 --> 00:12:50
processing a lot of data AI automation

00:12:47 --> 00:12:52
distributed systems and I know listen

00:12:49 --> 00:12:53
for you know these are kind of overall

00:12:51 --> 00:12:55
catch phrases but I do believe that

00:12:52 --> 00:12:58
here's core technical innovations

00:12:54 --> 00:13:00
underlying them that help so if I was

00:12:57 --> 00:13:02
upposed to stand back and say okay you

00:12:59 --> 00:13:03
know what like more specifically are we

00:13:01 --> 00:13:05
seeing we're seeing things like for

00:13:02 --> 00:13:09
example there are companies that will

00:13:04 --> 00:13:11
allow you to query in real time your

00:13:08 --> 00:13:13
entire IT infrastructure for security

00:13:10 --> 00:13:15
threats say for example those of yours

00:13:12 --> 00:13:18
are familiar with taenia right we're

00:13:14 --> 00:13:19
seeing very sophisticated use of ml and

00:13:17 --> 00:13:21
AI to determine all anomalies and

00:13:18 --> 00:13:23
etection and to do some things like

00:13:20 --> 00:13:25
real-time processing of voices from

00:13:22 --> 00:13:28
he's like kyndra right this we like to

00:13:24 --> 00:13:31
do real-time analysis a voice for fraud

00:13:27 --> 00:13:33
etection and oh by the way voice is an

00:13:30 --> 00:13:35
enormously important way of not only

00:13:32 --> 00:13:37
accessing say your bank account or your

00:13:34 --> 00:13:39
telephone account but now anything

00:13:36 --> 00:13:41
is like a Lexus of things catch on

00:13:38 --> 00:13:43
there's an entire sector created on

00:13:40 --> 00:13:45
security automation which is automating

00:13:42 --> 00:13:47
the stock there's probably 40 companies

00:13:44 --> 00:13:48
in this space and we're also seeing

00:13:46 --> 00:13:50
because there's so many endpoints

00:13:47 --> 00:13:52
proliferating we're using modern

00:13:49 --> 00:13:55
distributed systems to create single

00:13:51 --> 00:13:56
abstractions to manage all of it so just

00:13:54 --> 00:13:58
o catch up so we've seen this massive

00:13:55 --> 00:13:59
xplosion in sophistication of attackers

00:13:57 --> 00:14:02
we've seen a commensurate explosion in

00:13:58 --> 00:14:03
technology and and fantastic technology

00:14:01 --> 00:14:05
and now I think we're seeing this age of

00:14:02 --> 00:14:06
kind of automation and simplification

00:14:04 --> 00:14:08
there's dozens of companies are very

00:14:05 --> 00:14:09
interesting I suggest you look at them

00:14:07 --> 00:14:11
but I actually want to turn the little

00:14:08 --> 00:14:12
page because without doing this talk I

00:14:10 --> 00:14:14
actually think that the biggest

00:14:11 --> 00:14:15
misalignment is not going to be

00:14:13 --> 00:14:17
happening in the cyber world I actually

00:14:14 --> 00:14:18
think the cyber world is kind of on its

00:14:16 --> 00:14:19
pace we're going to see a lot of great

00:14:17 --> 00:14:22
innovations but what's been really

00:14:18 --> 00:14:24
surprising is how much physical security

00:14:21 --> 00:14:26
is starting to be affected by advances

00:14:23 --> 00:14:27
in cyber security and I don't think it's

00:14:25 --> 00:14:28
an off talked about things so I just

00:14:26 --> 00:14:30
want to spend a little bit of time on

00:14:27 --> 00:14:32
that I'll just give you this as an

00:14:29 --> 00:14:34
example physical security business been

00:14:31 --> 00:14:36
around for a long time probably the

00:14:33 --> 00:14:37
oldest access control mechanism in the

00:14:35 --> 00:14:39
history of mankind is the law the law

00:14:36 --> 00:14:41
hasn't changed fundamentally in a really

00:14:38 --> 00:14:43
long time a lock is something you have a

00:14:40 --> 00:14:44
key the key should be hard to forge and

00:14:42 --> 00:14:46
give somebody the key they get access to

00:14:43 --> 00:14:48
the lock somebody that doesn't have the

00:14:45 --> 00:14:49
key doesn't have the access sounds great

00:14:47 --> 00:14:51
we've been using it for a long time if

00:14:48 --> 00:14:54
you compare it to computer versions of

00:14:50 --> 00:14:56
access control it's like Neanderthal it

00:14:53 --> 00:14:57
's a whole backwards right like if you

00:14:55 --> 00:14:59
think about computer versions of access

00:14:56 --> 00:15:02
control I can tell you exactly to access

00:14:58 --> 00:15:03
things when they access it I will log

00:15:01 --> 00:15:05
every access that they have I can revoke

00:15:02 --> 00:15:07
access without for example taking away

00:15:04 --> 00:15:10
keys and changing locks I mean computers

00:15:06 --> 00:15:12
and fiber views of security are much

00:15:09 --> 00:15:13
more sophisticated by the physical

00:15:11 --> 00:15:15
world because we're not constrained by

00:15:12 --> 00:15:18
atoms right we could do things like

00:15:14 --> 00:15:19
allow people digital access and revoking

00:15:17 --> 00:15:22
acts as a more sophisticated things and

00:15:18 --> 00:15:24
as we get better at building say

00:15:21 --> 00:15:26
consumer applications of everybody gets

00:15:23 --> 00:15:27
an iPhone we now have this connection to

00:15:25 --> 00:15:29
the physical world that allows us to

00:15:26 --> 00:15:31
take these incredibly powerful cyber

00:15:28 --> 00:15:33
concepts and apply them to physical

00:15:30 --> 00:15:36
security I mean today there's probably

00:15:32 --> 00:15:37
20 companies that are using smart locks

00:15:35 --> 00:15:38
to change

00:15:36 --> 00:15:40
galactus whether that's from a

00:15:37 --> 00:15:43
smartphone or something else and it's

00:15:39 --> 00:15:44
not just for like you know how you

00:15:42 --> 00:15:45
gettin out of your house I mean they

00:15:43 --> 00:15:47
have it for people with dementia so for

00:15:44 --> 00:15:49
example you can only open your medicine

00:15:46 --> 00:15:51
cabinet door one today for example and

00:15:48 --> 00:15:53
so I do think that these constants that

00:15:50 --> 00:15:55
are very powerful that we've evolved are

00:15:52 --> 00:15:56
moving there and this is by way of an

00:15:54 --> 00:15:57
example I want to give you another

00:15:55 --> 00:15:59
example that's a little closer to home

00:15:56 --> 00:16:02
so as we all know there's been a lot of

00:15:58 --> 00:16:03
advancements in vision and AI is used

00:16:01 --> 00:16:06
for things like lawful intercept and

00:16:02 --> 00:16:07
security cameras and I have a personal

00:16:05 --> 00:16:10
experience with this when we were doing

00:16:06 --> 00:16:12
this cierra I think this is in 2011 we

00:16:09 --> 00:16:14
had a server that went missing now the

00:16:11 --> 00:16:17
server happened to be the server of our

00:16:13 --> 00:16:19
most famous developer and he could

00:16:16 --> 00:16:20
remember it like some two weeks before

00:16:18 --> 00:16:22
and then it was just gone

00:16:19 --> 00:16:23
so I still remember getting the email D

00:16:21 --> 00:16:26
and I was like who took my server

00:16:22 --> 00:16:28
basically and nobody knew and so like we

00:16:25 --> 00:16:29
re just like okay maybe misplace it

00:16:27 --> 00:16:31
but like who like like how does it like

00:16:28 --> 00:16:32
a big bug physical tower server get in

00:16:30 --> 00:16:33
this place so what we did is like well

00:16:31 --> 00:16:35
why don't we just start going through

00:16:32 --> 00:16:36
like the security feed because it never

00:16:34 --> 00:16:38
did turn up so we actually got the

00:16:35 --> 00:16:41
security camera feed that was on the

00:16:37 --> 00:16:43
back door and this was over this is 24

00:16:40 --> 00:16:45
hours of security feed over a two-week

00:16:42 --> 00:16:46
period so I remember we go for lunch and

00:16:44 --> 00:16:48
me and like the actual like like

00:16:45 --> 00:16:49
security guard used to be a special

00:16:47 --> 00:16:50
force like I would sit there we'd eat

00:16:48 --> 00:16:52
lunch and we look at this video camera

00:16:49 --> 00:16:54
nd then finally okay this is ridiculous

00:16:51 --> 00:16:55
because you know we're watching it every

00:16:53 --> 00:16:57
day you know people coming going like

00:16:54 --> 00:16:58
why don't we just end up watching it

00:16:56 --> 00:16:59
just at night we ended up just watching

00:16:57 --> 00:17:01
it at night and then he actually has

00:16:58 --> 00:17:02
kind of a smart ideas like actually we

00:17:00 --> 00:17:04
have motion sensors on the security

00:17:01 --> 00:17:06
cameras so why don't we do it anytime

00:17:03 --> 00:17:09
there's a motion sensor and we finally

00:17:05 --> 00:17:11
after about four days of hours of you

00:17:08 --> 00:17:13
know eating Chinese takeout and looking

00:17:10 --> 00:17:15
at these things we actually saw someone

00:17:12 --> 00:17:17
take the server and I actually have the

00:17:14 --> 00:17:19
video here that I want you to see so

00:17:16 --> 00:17:22
this is the back door 5 a.m. it's the

00:17:18 --> 00:17:24
first night in four days that somebody

00:17:21 --> 00:17:27
hadn't been there all night long he uses

00:17:23 --> 00:17:29
he's got a black mask on he uses

00:17:26 --> 00:17:30
basically a lockpick set that will go in

00:17:28 --> 00:17:32
and press the door from the inside that

00:17:29 --> 00:17:34
doesn't set up the security alarm watch

00:17:31 --> 00:17:35
when he breaks in he doesn't look around

00:17:33 --> 00:17:37
he goes in exactly direction of where

00:17:34 --> 00:17:40
the server is we speed it up there in

00:17:36 --> 00:17:41
less than two minutes if you look close

00:17:39 --> 00:17:44
he's got an entire server and his arm

00:17:40 --> 00:17:47
this is the time nobody was there in two

00:17:43 --> 00:17:49
minutes he was in and out he went

00:17:46 --> 00:17:50
exactly to like one person's desk he

00:17:48 --> 00:17:51
ntered the door that was closest to

00:17:49 --> 00:17:53
that

00:17:50 --> 00:17:56
desk he passed a whole bunch of laptops

00:17:52 --> 00:17:59
on the way right and he got out now we

00:17:55 --> 00:18:01
re very lucky for a number of things a

00:17:58 --> 00:18:03
you know this was a big server he was a

00:18:00 --> 00:18:05
famous developer B we actually took the

00:18:02 --> 00:18:06
time to look to the security feed I'm

00:18:04 --> 00:18:07
not sure how many people would do that

00:18:05 --> 00:18:09
but we're very lucky to have actually

00:18:06 --> 00:18:10
seen this unfortunately

00:18:08 --> 00:18:12
the FBI got involved and they said

00:18:09 --> 00:18:13
actually this happens quite commonly in

00:18:11 --> 00:18:14
Silicon Valley but there's a lot of

00:18:12 --> 00:18:15
these types of the taxes that are

00:18:13 --> 00:18:17
happening but they're very very

00:18:14 --> 00:18:20
difficult to trace and in fact the guy I

00:18:16 --> 00:18:22
think he he drove a silver Honda Civic

00:18:19 --> 00:18:24
and he's included the license plate and

00:18:21 --> 00:18:26
he'd taken back roads so he had security

00:18:23 --> 00:18:28
cameras up and down the street we can

00:18:25 --> 00:18:30
catch any of this right what's very

00:18:27 --> 00:18:32
interesting is if you look at a lot of

00:18:29 --> 00:18:34
the modern technologies that are being

00:18:31 --> 00:18:36
used for AI and surveillance cameras it

00:18:33 --> 00:18:39
allows you to do things like full-on

00:18:35 --> 00:18:41
search for content within these things

00:18:38 --> 00:18:43
o for example even like on the consumer

00:18:40 --> 00:18:45
side like nest so both the companies

00:18:42 --> 00:18:46
that come in they'll say listen you can

00:18:44 --> 00:18:48
actually do a Google search on a video

00:18:45 --> 00:18:49
feed so if you feed something like this

00:18:47 --> 00:18:51
into it you could actually ask the

00:18:48 --> 00:18:54
question show me and everybody that

00:18:50 --> 00:18:56
enters from the back from the periods of

00:18:53 --> 00:18:57
like 3 a.m. to 4 a.m. and it'll

00:18:55 --> 00:18:58
basically show you every one of those

00:18:56 --> 00:19:00
and it's gotten so sophisticated that

00:18:57 --> 00:19:02
you can actually unique identification

00:18:59 --> 00:19:03
basically lawful intercept it's not like

00:19:01 --> 00:19:05
based on facial features but like how

00:19:02 --> 00:19:06
you walk in how you move so in theory

00:19:04 --> 00:19:08
ou could say show me anybody that

00:19:05 --> 00:19:10
enters an exit isn't one of our

00:19:07 --> 00:19:12
employees or is wearing a black mask or

00:19:09 --> 00:19:13
something like this and so I do think

00:19:12 --> 00:19:15
that we're actually starting to see

00:19:12 --> 00:19:18
these very very powerful features that

00:19:15 --> 00:19:19
we're applying outside of the security

00:19:17 --> 00:19:21
domain being applied now and we're

00:19:18 --> 00:19:23
starting to see it I've probably seen 10

00:19:20 --> 00:19:24
companies in the space recently I'm not

00:19:22 --> 00:19:26
going to spend a lot of time on this as

00:19:23 --> 00:19:28
well but of course in drones in robotics

00:19:25 --> 00:19:30
we're seeing a lot of evolvement - we've

00:19:27 --> 00:19:31
got now security guards that are almost

00:19:29 --> 00:19:33
fully autonomous so there is like a

00:19:30 --> 00:19:34
security operation center on the

00:19:32 --> 00:19:36
backside but they do have motion sensors

00:19:33 --> 00:19:37
they do have vision detection they will

00:19:35 --> 00:19:39
claim to detect whether someone's

00:19:36 --> 00:19:41
breaking into something or not just by

00:19:38 --> 00:19:43
using vision of course we use drones now

00:19:40 --> 00:19:46
for a lot of the prisons and a lot of

00:19:42 --> 00:19:49
evolution and so if I step back I do

00:19:45 --> 00:19:52
think that it's very important or a nice

00:19:48 --> 00:19:53
rubric to view security in the rubric of

00:19:51 --> 00:19:57
misalignment I do think we're seeing a

00:19:52 --> 00:19:58
misalignment in the cyber side and I

00:19:56 --> 00:20:00
actually really believe it's

00:19:57 --> 00:20:01
commensurate with like the creation of

00:19:59 --> 00:20:03
airplanes or flight is going to happen

00:20:00 --> 00:20:04
on the physical security side thanks

00:20:02 --> 00:20:05
very much

00:20:03 --> 00:20:11
you

00:20:04 --> 00:20:11
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
