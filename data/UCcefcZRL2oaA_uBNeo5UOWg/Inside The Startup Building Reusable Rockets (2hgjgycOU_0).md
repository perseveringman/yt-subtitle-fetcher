---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "2hgjgycOU_0"
title: "Inside The Startup Building Reusable Rockets"
video_url: "https://www.youtube.com/watch?v=2hgjgycOU_0"
thumbnail_url: "https://i.ytimg.com/vi/2hgjgycOU_0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=2hgjgycOU_0"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-01-08T15:00:11.000Z"
upload_date: "2026-01-08"
duration_seconds: 944
duration_human: "15:44"
view_count: 37479
like_count: 1300
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:26:13.683Z"
---

# Inside The Startup Building Reusable Rockets

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=2hgjgycOU_0
- video_id: 2hgjgycOU_0
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-01-08T15:00:11.000Z
- upload_date: 2026-01-08
- duration: 15:44
- view_count: 37479
- like_count: 1300
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

Stoke Space is racing to build the world's first fully reusable rockets that can launch, survive reentry, and fly again and again. In this episode of Hard Tech, YC’s Aaron Epstein sits down with Stoke Space co-founders Andy Lapsa and Tom Feldman to find out why they chose to take on one of the hardest problems in rocket science, how an obsession with efficiency gives them an edge, and what full reusability could unlock for the future of spaceflight.

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

Chapters: 
00:00 — Intro
01:16 — Stoke Space’s mission: Rapid reusability
02:18 — Why Second Stage capsules fail reentry
03:34 — Stoke Space’s stage 2 solution
05:30 — Reusability-First Design Philosophy
07:25 — Early Engine Development & Test Strategy
10:48 — Vertical Integration & Manufacturing
11:21 — Iteration Speed as a Competitive Advantage
12:29 — Software as Core Infrastructure
14:00 — Path to Orbit & Launch Operations
15:04 — How This Could Change The World

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:07
The team at Stokepace is going after the

00:00:03 --> 00:00:09
holy grail of rocket science. Stoke is

00:00:06 --> 00:00:12
building fully and rapidly reusable

00:00:08 --> 00:00:14
rockets with aircraftlike reusability.

00:00:11 --> 00:00:17
Today, only this section of rockets can

00:00:14 --> 00:00:20
be reused. But Stoke Space is focused on

00:00:16 --> 00:00:21
the entire rocket, including a stage 2

00:00:19 --> 00:00:24
capsule that will finally be able to

00:00:20 --> 00:00:26
survive the brutal re-entry to Earth.

00:00:23 --> 00:00:28
This could open the door to all kinds of

00:00:25 --> 00:00:30
new opportunities in space. I think if

00:00:27 --> 00:00:32
you have something that can go up and

00:00:29 --> 00:00:35
come back to the place where you want it

00:00:31 --> 00:00:39
o go when you want it to go, I think it

00:00:34 --> 00:00:41
is like the iPhone app store moment.

00:00:38 --> 00:00:44
People are going to come up with like

00:00:40 --> 00:00:45
absolutely crazy ideas for how to take

00:00:43 --> 00:00:47
advantage of that.

00:00:44 --> 00:00:49
>> So, how did two founders go from testing

00:00:46 --> 00:00:51
rocket engines in their backyard to

00:00:48 --> 00:00:53
solving for one of the hardest problems

00:00:50 --> 00:00:57
in space travel? This is the origin

00:00:52 --> 00:00:57
story of Stoke Space.

00:01:04 --> 00:01:09
Andy and Tom invited me to check out

00:01:06 --> 00:01:12
heir headquarters in Kent, Washington,

00:01:08 --> 00:01:13
just outside of Seattle. It's an area

00:01:11 --> 00:01:16
that's quickly becoming known as a hub

00:01:12 --> 00:01:18
for space tech startups.

00:01:15 --> 00:01:20
What are you building at Stoke Space?

00:01:17 --> 00:01:22
>> Building fully rapidly reusable rockets

00:01:19 --> 00:01:25
designed to go to space, through space,

00:01:21 --> 00:01:27
and back from space. uh really to lower

00:01:24 --> 00:01:30
cost, improve availability, and uh

00:01:26 --> 00:01:33
improve reliability of access to space.

00:01:29 --> 00:01:35
>> Today, there are only around 150

00:01:32 --> 00:01:37
commercial space launches every year.

00:01:34 --> 00:01:39
While that's a record for the industry,

00:01:36 --> 00:01:41
it's a drop in the bucket compared to

00:01:38 --> 00:01:44
where things could go if rockets become

00:01:40 --> 00:01:46
fully reusable. With only 150 potential

00:01:43 --> 00:01:48
transactions and most of them getting

00:01:45 --> 00:01:50
taken up by Starlink, there's just not

00:01:47 --> 00:01:51
hat much availability. And so there are

00:01:49 --> 00:01:54
customers who are willing to pay quite a

00:01:50 --> 00:01:56
bit more to get the availability. But to

00:01:53 --> 00:01:58
make the space economy more ubiquitous,

00:01:55 --> 00:02:01
more diverse and to enable some of these

00:01:57 --> 00:02:03
new verticals and and applications yet

00:02:00 --> 00:02:05
cost is a huge barrier.

00:02:02 --> 00:02:07
>> Describe the hardware architecture

00:02:04 --> 00:02:10
itself. Can you walk us through the

00:02:06 --> 00:02:12
designs of the Nova and the Andromeda?

00:02:09 --> 00:02:15
>> Nova is a two-stage to orbit rocket.

00:02:11 --> 00:02:16
First stage functions similarly to other

00:02:14 --> 00:02:19
ockets. It punches you out of the

00:02:15 --> 00:02:21
atmosphere and comes and and restarts

00:02:18 --> 00:02:23
the engines to land either downrange or

00:02:20 --> 00:02:25
back at the launch site. It has one of

00:02:22 --> 00:02:27
the highest performing rocket engines in

00:02:24 --> 00:02:30
terms of fuel efficiency that's ever

00:02:26 --> 00:02:32
been produced. That was a big technical

00:02:29 --> 00:02:34
bite for us to bite off as a small

00:02:31 --> 00:02:35
company, but I think it's one that is

00:02:33 --> 00:02:37
paying off and it's a very important

00:02:34 --> 00:02:40
component to long life and rapid

00:02:36 --> 00:02:42
reusability. The second stage goes the

00:02:39 --> 00:02:44
rest of the way to orbit. Typically,

00:02:41 --> 00:02:45
rockets are thrown away completely. In

00:02:43 --> 00:02:47
the last few years, the industry has

00:02:44 --> 00:02:49
hown the ability to reuse the first

00:02:46 --> 00:02:52
age, which has been transformative. It

00:02:48 --> 00:02:55
allowed companies to scale from maybe a

00:02:51 --> 00:02:57
dozen or so, 10 to 20 launches per year

00:02:54 --> 00:02:59
now to that 150 number. But the second

00:02:56 --> 00:03:01
stage is still thrown away on every

00:02:58 --> 00:03:03
single mission. That's in large part

00:03:00 --> 00:03:07
because the stage 2 capsule is traveling

00:03:02 --> 00:03:09
at 17,000 mph as it drops out of orbit.

00:03:06 --> 00:03:11
Because of that high speed, it

00:03:08 --> 00:03:14
eventually breaks down as it heats up to

00:03:10 --> 00:03:16
more than 2700° F during its descent.

00:03:14 --> 00:03:18
>> So, these are multi-million dollar

00:03:15 --> 00:03:20
machines that not only have to get

00:03:17 --> 00:03:22
built, but they have to get tested and

00:03:19 --> 00:03:24
acceptance tested to prove

00:03:21 --> 00:03:25
flightworthiness, and then they go to

00:03:23 --> 00:03:28
space and they get thrown away. Here's

00:03:24 --> 00:03:30
how their stage 2 or upper stage

00:03:27 --> 00:03:33
Andromeda capsule is able to survive

00:03:29 --> 00:03:35
re-entry. After releasing its payload,

00:03:32 --> 00:03:37
it'll close up and re-enter Earth's

00:03:34 --> 00:03:40
atmosphere. At that point, the custom

00:03:36 --> 00:03:42
heat shield takes effect. It uses cold

00:03:39 --> 00:03:45
liquid hydrogen flowing through a heat

00:03:41 --> 00:03:48
exchanger to absorb the extreme heat of

00:03:44 --> 00:03:51
re-entry. Then 24 small thrusters kick

00:03:47 --> 00:03:53
in to help it slow down and land at the

00:03:50 --> 00:03:55
right angle. What rapid reusability

00:03:52 --> 00:03:57
allows you to do is to scale the flight

00:03:54 --> 00:03:59
frequency without having to scale your

00:03:56 --> 00:04:00
factories and your test facilities and

00:03:58 --> 00:04:01
all the infrastructure that comes with

00:03:59 --> 00:04:02
it.

00:04:00 --> 00:04:04
>> It seemed like that was the thing that

00:04:02 --> 00:04:06
you thought needed to exist in the

00:04:03 --> 00:04:07
world. And if somebody else wasn't going

00:04:05 --> 00:04:08
to do it, you needed to do it.

00:04:06 --> 00:04:10
>> Yeah, that's right.

00:04:07 --> 00:04:11
>> How did you get interested in building

00:04:09 --> 00:04:12
rockets? Was this something you were

00:04:10 --> 00:04:13
always interested in as a kid growing

00:04:11 --> 00:04:16
up?

00:04:12 --> 00:04:17
>> From as far back as I can remember, you

00:04:15 --> 00:04:20
know, doing Estus rockets in the

00:04:16 --> 00:04:23
backyard with my cousins and it really

00:04:19 --> 00:04:26
just kind of took off from there. Pun um

00:04:22 --> 00:04:28
not intended. From pretty early on in

00:04:25 --> 00:04:30
high school, it was pretty clear that I

00:04:27 --> 00:04:31
wanted to do propulsion. It was like,

00:04:29 --> 00:04:32
let's do engineering. What's the most

00:04:30 --> 00:04:34
badass thing you can do with

00:04:32 --> 00:04:35
engineering? Well, it's probably like

00:04:33 --> 00:04:37
rocket propulsion.

00:04:34 --> 00:04:39
>> Tom and Andy met while working as jet

00:04:36 --> 00:04:43
propulsion engineers at Blue Origin.

00:04:38 --> 00:04:46
They left to start Stoke Space in 2019.

00:04:42 --> 00:04:48
>> How did you guys uh ultimately decide to

00:04:45 --> 00:04:48
leave and and start your own company

00:04:47 --> 00:04:50
together?

00:04:47 --> 00:04:51
>> Pretty quickly, it became like, "All

00:04:49 --> 00:04:53
right, Andy and I are going to go start

00:04:50 --> 00:04:56
a company." And at the time, we had no

00:04:52 --> 00:04:57
idea what we were going to do. We were

00:04:55 --> 00:04:59
like, "All right, let's start a company.

00:04:56 --> 00:05:00
let's brainstorm some things that sort

00:04:58 --> 00:05:03
of like meet in the middle of our ven

00:04:59 --> 00:05:04
diagram of like desires and skills and

00:05:02 --> 00:05:06
problems that need to be solved. And

00:05:03 --> 00:05:08
then it it was like it kind of clicked

00:05:05 --> 00:05:10
one day that like there is this problem

00:05:08 --> 00:05:11
you know people are still throwing away

00:05:09 --> 00:05:14
rockets and like we really didn't see

00:05:10 --> 00:05:16
anybody actively working super hard to

00:05:13 --> 00:05:18
like you know attack that problem with

00:05:15 --> 00:05:19
rigger combined with the fact that we

00:05:17 --> 00:05:20
thought we had a pretty good idea on how

00:05:18 --> 00:05:23
to solve it and it was like all right

00:05:19 --> 00:05:25
hat's a thing. There were more than 150

00:05:22 --> 00:05:26
rocket companies at the time that were

00:05:24 --> 00:05:28
around and I assume you looked at all of

00:05:26 --> 00:05:30
them. What was the thing that convinced

00:05:27 --> 00:05:32
you that you should start your own and

00:05:29 --> 00:05:34
that it would actually be better and out

00:05:31 --> 00:05:36
compete what they all were doing?

00:05:33 --> 00:05:37
>> It was not intuitive to start a company.

00:05:35 --> 00:05:39
It wasn't the first inclination. We

00:05:36 --> 00:05:41
looked at a lot of those and a lot of it

00:05:38 --> 00:05:43
was, you know, a bunch of PowerPoint

00:05:40 --> 00:05:46
stuff that would that didn't seem like

00:05:42 --> 00:05:48
it had a very bright future and we were

00:05:45 --> 00:05:50
certainly both hardware people and so we

00:05:48 --> 00:05:52
kind of understood what it would take to

00:05:49 --> 00:05:55
take some of those PowerPoint ideas into

00:05:51 --> 00:05:58
reality. Their key insight was that if

00:05:54 --> 00:06:00
you focused on reusability from day one,

00:05:57 --> 00:06:02
you could decrease cost and increase

00:05:59 --> 00:06:04
availability and reliability. But even

00:06:01 --> 00:06:07
though they believed in the idea, it was

00:06:03 --> 00:06:08
till a massive risk. At the time when

00:06:06 --> 00:06:10
you were starting this company, you you

00:06:07 --> 00:06:13
both obviously had very comfortable

00:06:09 --> 00:06:15
jobs. You had small children. It seems

00:06:12 --> 00:06:16
like it's a huge decision to go and

00:06:14 --> 00:06:18
actually decide to make the leap and

00:06:15 --> 00:06:20
start a company and start from zero and

00:06:17 --> 00:06:24
nobody else in the trenches except for

00:06:19 --> 00:06:26
you two. It felt wildly irresponsible to

00:06:23 --> 00:06:28
be honest. Easily the hardest decision

00:06:25 --> 00:06:31
that I've ever made personally. I had a

00:06:27 --> 00:06:33
3-month-old at home and I had a really

00:06:30 --> 00:06:36
good paying job that I was quitting.

00:06:32 --> 00:06:38
Let's give ourselves a timebounded, you

00:06:35 --> 00:06:40
know, scenario where like in 6 months if

00:06:37 --> 00:06:41
we don't have any kind of legitimate

00:06:39 --> 00:06:43
traction, that's going to be the sort of

00:06:40 --> 00:06:45
cue to re-evaluate. And cuz we really

00:06:42 --> 00:06:46
didn't know anything about what we were

00:06:44 --> 00:06:48
doing when it came to starting a

00:06:45 --> 00:06:50
company. And so, you know, a lot of the

00:06:47 --> 00:06:52
first few months was just like a was

00:06:49 --> 00:06:54
heads down engineering and b it was like

00:06:51 --> 00:06:56
what does it even mean to start a

00:06:53 --> 00:06:59
company? We started in in September

00:06:55 --> 00:07:00
2019. So, it wasn't long before like the

00:06:58 --> 00:07:03
pandemic was a real thing and then we

00:06:59 --> 00:07:05
re like really like, "Oh like

00:07:02 --> 00:07:06
was this the right move?" It was like

00:07:04 --> 00:07:10
right up against the clock on the

00:07:05 --> 00:07:11
six-month uh thing that we finally, you

00:07:09 --> 00:07:13
know, were able to get some traction. I

00:07:10 --> 00:07:15
think we got our first check sometime

00:07:12 --> 00:07:16
around that time frame and then we were

00:07:14 --> 00:07:18
off to the races.

00:07:15 --> 00:07:20
>> With that first check, they started

00:07:17 --> 00:07:22
building a prototype engine and testing

00:07:19 --> 00:07:25
it in a shipping container in Tom's

00:07:21 --> 00:07:27
backyard. So, at that time, Andy's in

00:07:24 --> 00:07:30
the basement powerpointing like crazy to

00:07:26 --> 00:07:32
try to like hone the story and I was

00:07:29 --> 00:07:34
like welding this steel structure in the

00:07:31 --> 00:07:36
garage and then taking it out to the

00:07:33 --> 00:07:37
shipping container and bolting it in.

00:07:35 --> 00:07:39
And that was kind of like how we spent

00:07:36 --> 00:07:41
our days for the better part of like 2

00:07:38 --> 00:07:43
months. We knew we wanted to demonstrate

00:07:40 --> 00:07:44
some hardware. We knew that with a

00:07:42 --> 00:07:47
reasonably small amount of money, we

00:07:43 --> 00:07:50
could develop a pressure-fed gaseous

00:07:46 --> 00:07:53
hydrogen liquid oxygen thruster and be

00:07:49 --> 00:07:55
able to show fire coming out the end and

00:07:52 --> 00:07:56
say, you know, hey, early investors, we

00:07:54 --> 00:07:59
want to do this thing. Here's a teeny

00:07:55 --> 00:08:00
tiny little piece that we already did.

00:07:58 --> 00:08:02
>> All right. So, these are the shipping

00:07:59 --> 00:08:03
containers where it all started.

00:08:01 --> 00:08:06
>> This is where it started. So, this one

00:08:02 --> 00:08:07
was primarily for storage. This one

00:08:05 --> 00:08:08
>> was where the actual test cell was.

00:08:06 --> 00:08:10
>> Yeah. Walk me through this one.

00:08:08 --> 00:08:13
>> The test stand. You can still kind of

00:08:09 --> 00:08:15
see like a imprint of it there. Oxidizer

00:08:12 --> 00:08:17
stuff on one side, fuel stuff on the

00:08:14 --> 00:08:19
other side. Actually, the original

00:08:16 --> 00:08:21
workbench that I built probably the

00:08:18 --> 00:08:23
very, very first thing I ever built for

00:08:20 --> 00:08:24
Stoke is still out there. I'm pretty

00:08:22 --> 00:08:26
sure

00:08:23 --> 00:08:27
>> we had our what we called our run tank

00:08:25 --> 00:08:29
was really a cylinder. Then we had

00:08:26 --> 00:08:31
storage outside of the wall.

00:08:28 --> 00:08:33
>> Bunch of valves along the wall. Bunch of

00:08:30 --> 00:08:35
valves sort of right at the test article

00:08:32 --> 00:08:38
there. Yeah, we probably built this

00:08:34 --> 00:08:41
entire facility in 2 months, maybe. I

00:08:38 --> 00:08:43
remember distinctly a day in January

00:08:40 --> 00:08:46
where I remember having a feeling like,

00:08:42 --> 00:08:46
okay, we're convinced now. What do we

00:08:45 --> 00:08:48
do?

00:08:45 --> 00:08:50
>> What led you to IC?

00:08:47 --> 00:08:52
>> We wildly underestimated the challenge

00:08:49 --> 00:08:55
in raising money. If there's one thing

00:08:51 --> 00:08:58
we totally missed on that was it. We had

00:08:54 --> 00:09:01
no rolodex. We had no, you know, rich

00:08:57 --> 00:09:04
uncles. We had to do it all organically.

00:09:00 --> 00:09:06
Right when we started to raise money, co

00:09:03 --> 00:09:08
hit. The market shut down. Nobody was

00:09:06 --> 00:09:10
entertaining anything except trying to

00:09:07 --> 00:09:12
keep their portfolios alive. So, it was

00:09:09 --> 00:09:15
a really tough environment. YC obviously

00:09:11 --> 00:09:18
has a network second to none. They can

00:09:14 --> 00:09:20
help us learn to, you know, speak the

00:09:17 --> 00:09:22
language and understand the fundraising

00:09:19 --> 00:09:24
process and the whole path and that's

00:09:21 --> 00:09:27
the reason to do it. YC was a big part

00:09:23 --> 00:09:29
of that early stage and I think YC also

00:09:26 --> 00:09:30
added some momentum to the round. Right.

00:09:28 --> 00:09:33
>> I'm curious, how did you get good at

00:09:29 --> 00:09:34
fundraising? A lot of the venture world,

00:09:32 --> 00:09:37
especially at the time, was geared

00:09:34 --> 00:09:39
towards SAS. We have a a very different

00:09:36 --> 00:09:42
story and a very different financial

00:09:38 --> 00:09:45
model than a SAS business. And so, at

00:09:41 --> 00:09:47
hat early phase, my goal was just, hey,

00:09:44 --> 00:09:49
get get introduced to a different angel

00:09:46 --> 00:09:51
who may be a little bit closer to

00:09:48 --> 00:09:53
investing in a hardware company. There

00:09:50 --> 00:09:57
was one piece of advice

00:09:52 --> 00:09:59
that was extremely important and I carry

00:09:56 --> 00:10:02
with me all the time and I will pass on

00:09:58 --> 00:10:04
and that is get get good at hearing no.

00:10:01 --> 00:10:07
It is tough to keep it going when all

00:10:03 --> 00:10:09
you hear is no after no after no to just

00:10:06 --> 00:10:10
keep the conviction and keep the fire

00:10:08 --> 00:10:12
alive to keep going.

00:10:09 --> 00:10:12
>> And how much have you raised so far to

00:10:11 --> 00:10:15
build all of this?

00:10:11 --> 00:10:17
>> We've raised about $990 million to date.

00:10:14 --> 00:10:20
We've certainly not spent close to all

00:10:16 --> 00:10:21
of it. I think we're operating very

00:10:19 --> 00:10:24
efficiently compared to some of the

00:10:20 --> 00:10:27
other groups in our industry, but it is

00:10:23 --> 00:10:30
a, you know, it's it's been a a journey

00:10:26 --> 00:10:32
to get to this point. Over the past few

00:10:29 --> 00:10:35
years, they've hit several major

00:10:31 --> 00:10:38
milestones. In 2022, they completed

00:10:34 --> 00:10:42
their first full engine test. In 2024,

00:10:37 --> 00:10:44
they moved into this 168,000 ft factory.

00:10:41 --> 00:10:46
Next up will be their first launch into

00:10:43 --> 00:10:47
rbit which is planned for later this

00:10:45 --> 00:10:50
year.

00:10:46 --> 00:10:52
>> We have engineering space uh here as

00:10:49 --> 00:10:54
well as manufacturing. We build

00:10:51 --> 00:10:56
everything from avionics and

00:10:53 --> 00:10:58
electronics. Every part of the rocket

00:10:55 --> 00:11:00
gets built in here. We have engine

00:10:57 --> 00:11:02
assembly over to our left. We have

00:10:59 --> 00:11:04
additive manufacturing to our right. We

00:11:01 --> 00:11:06
have structures behind us. This is where

00:11:03 --> 00:11:10
it all happens. Facility is designed to

00:11:05 --> 00:11:12
build about seven vehicles per year.

00:11:09 --> 00:11:13
How do you balance the speed of

00:11:11 --> 00:11:16
execution

00:11:12 --> 00:11:18
with the patience that's required for

00:11:15 --> 00:11:19
this deep technical work and and

00:11:17 --> 00:11:20
building something that has a long time

00:11:18 --> 00:11:22
horizon?

00:11:19 --> 00:11:25
>> This is very tricky. I think you have to

00:11:21 --> 00:11:27
know that this is hard. You can't

00:11:24 --> 00:11:30
analyze everything to perfection and at

00:11:26 --> 00:11:33
he end of the day rubber meets road and

00:11:29 --> 00:11:36
you have to test and so the speed at

00:11:32 --> 00:11:38
which you can iterate becomes

00:11:35 --> 00:11:40
fundamentally important to your ability

00:11:37 --> 00:11:42
to do the hard thing as quick as

00:11:39 --> 00:11:45
possible. You do have to plan for

00:11:41 --> 00:11:47
failure. So when for example if you're

00:11:44 --> 00:11:49
developing a rocket engine and the

00:11:46 --> 00:11:50
ngine fails, how soon can you learn the

00:11:48 --> 00:11:52
lesson from that one? Make any change

00:11:49 --> 00:11:53
that you need to change and get the next

00:11:51 --> 00:11:55
one out there? There better be one on

00:11:52 --> 00:11:57
the factory floor basically ready to go

00:11:54 --> 00:11:59
if it's going to be fast, right? We want

00:11:56 --> 00:12:01
he ability to make every part on the

00:11:58 --> 00:12:03
rocket ourselves. As you learn more,

00:12:00 --> 00:12:06
your overall development timeline and

00:12:02 --> 00:12:08
therefore your overall development cost

00:12:05 --> 00:12:10
is tied to how quickly you can iterate.

00:12:07 --> 00:12:12
And if you can't make parts yourself,

00:12:09 --> 00:12:14
then your iteration cycle is dependent

00:12:11 --> 00:12:16
on a out of house supplier. We'll go

00:12:13 --> 00:12:19
learn something on a test stand, tear it

00:12:15 --> 00:12:22
down, drive it back here, pull it apart,

00:12:18 --> 00:12:24
run a change in the machine shop, drive

00:12:21 --> 00:12:26
it back out there, integrate on the test

00:12:23 --> 00:12:28
and, and we're off and going. So, a 1

00:12:25 --> 00:12:30
month cycle is down to a day or two.

00:12:27 --> 00:12:31
>> Talk about the importance of software in

00:12:29 --> 00:12:33
building this company. This was

00:12:30 --> 00:12:35
omething that was surprising to me is

00:12:32 --> 00:12:36
how key it is, not just to the actual

00:12:34 --> 00:12:38
product that you're building, but to how

00:12:36 --> 00:12:40
you run your company. This company has

00:12:37 --> 00:12:44
to scale from building things in a

00:12:39 --> 00:12:48
literal garage to flying government

00:12:43 --> 00:12:50
payloads or even humans on a vehicle

00:12:47 --> 00:12:53
that is overseen by the FAA. And somehow

00:12:49 --> 00:12:55
you have to bridge from garage to that.

00:12:52 --> 00:12:57
And that bridge is often very very

00:12:54 --> 00:13:00
painful for a lot of companies. In our

00:12:56 --> 00:13:02
industry, we build a rocket and ship it

00:12:59 --> 00:13:03
and then that's it, right? It launches

00:13:01 --> 00:13:05
and it lands in the ocean and you never

00:13:02 --> 00:13:07
see it again. But what we want to build

00:13:04 --> 00:13:09
is a vehicle that's going to go to

00:13:06 --> 00:13:10
rbit, fly around, and come back again.

00:13:08 --> 00:13:12
And and we want to turn that thing

00:13:09 --> 00:13:14
around as fast as possible and go again

00:13:11 --> 00:13:16
and again and again. So, did it work

00:13:13 --> 00:13:17
well? How long have the parts been in

00:13:15 --> 00:13:19
service? When do I need to go and do

00:13:16 --> 00:13:20
preventative maintenance? When do I have

00:13:18 --> 00:13:22
to go do unscheduled maintenance on

00:13:19 --> 00:13:25
things? All of these questions are kind

00:13:21 --> 00:13:28
of staring us in the face. We're in a

00:13:24 --> 00:13:30
moment in time where software can

00:13:27 --> 00:13:31
automate a lot of that. I'm really

00:13:29 --> 00:13:34
excited about, you know, new

00:13:30 --> 00:13:37
developments in AI and other things to

00:13:33 --> 00:13:40
make it even more seamless for a factory

00:13:36 --> 00:13:41
worker to do their job and also log

00:13:39 --> 00:13:44
answers to those questions. And then you

00:13:40 --> 00:13:46
se software to abstract the

00:13:43 --> 00:13:47
information, slice it and dice it and

00:13:45 --> 00:13:49
send it to the different functions that

00:13:46 --> 00:13:50
need it. So, we made the decision very

00:13:48 --> 00:13:52
early on, we're going to build our own

00:13:49 --> 00:13:54
tool to to do all this. We're going to

00:13:51 --> 00:13:56
base our operations around it. We call

00:13:53 --> 00:13:59
it Bolt Line. That's been a big part of

00:13:55 --> 00:14:01
our success.

00:13:58 --> 00:14:02
In addition to their manufacturing and

00:14:00 --> 00:14:05
testing facilities, they're building a

00:14:02 --> 00:14:08
launch site at historic complex 14 in

00:14:04 --> 00:14:10
Cape Canaveral, Florida. The same place

00:14:07 --> 00:14:12
where John Glenn launched to become the

00:14:09 --> 00:14:14
first American to orbit Earth back in

00:14:11 --> 00:14:16
1962.

00:14:13 --> 00:14:18
We're working on putting all the pieces

00:14:15 --> 00:14:20
together to get to orbit. We have a

00:14:17 --> 00:14:22
massive construction project happening

00:14:19 --> 00:14:24
in Cape Canaveral and that is going

00:14:21 --> 00:14:26
fantastically well. We have our first

00:14:23 --> 00:14:27
and second stage engines which are

00:14:25 --> 00:14:30
completing their development and

00:14:26 --> 00:14:31
qualification. We have the structures

00:14:29 --> 00:14:33
builds that are happening right now.

00:14:30 --> 00:14:35
We've built multiple structural

00:14:32 --> 00:14:37
qualification articles. We have a

00:14:34 --> 00:14:39
facility in Moses Lake where we go and

00:14:36 --> 00:14:42
test those from a structural perspective

00:14:38 --> 00:14:44
and also at cryogenic conditions.

00:14:41 --> 00:14:46
Software and avionics is another big

00:14:43 --> 00:14:48
area where you know we have hardware in

00:14:45 --> 00:14:50
the loop testing where we have all the

00:14:47 --> 00:14:52
avionics for the vehicle turned on

00:14:49 --> 00:14:54
integrated together with the flight

00:14:51 --> 00:14:56
computer and with the GNC software and

00:14:53 --> 00:14:58
so we're flying simulated missions all

00:14:55 --> 00:15:00
the time proving that the avionics and

00:14:57 --> 00:15:03
the software stack are robust and ready

00:14:59 --> 00:15:05
to fly.

00:15:02 --> 00:15:06
>> What does the world look like if you're

00:15:04 --> 00:15:08
successful?

00:15:05 --> 00:15:11
>> If we are successful we are flying this

00:15:07 --> 00:15:13
thing every day. What was the moment

00:15:10 --> 00:15:15
hat you guys actually started to

00:15:12 --> 00:15:16
believe that you could pull this off and

00:15:14 --> 00:15:18
that your crazy plan would work?

00:15:15 --> 00:15:21
>> The very beginning was convincing

00:15:17 --> 00:15:22
ourselves that this was an idea worth

00:15:20 --> 00:15:25
pursuing. I got to the level of

00:15:21 --> 00:15:27
conviction in the idea that I said we

00:15:24 --> 00:15:29
owe it to the world to try this idea.

00:15:26 --> 00:15:33
Whether or not it succeeds, this idea is

00:15:28 --> 00:15:33
good enough. It has to be tried.

<!-- YOUTUBE_TRANSCRIPT_END -->
