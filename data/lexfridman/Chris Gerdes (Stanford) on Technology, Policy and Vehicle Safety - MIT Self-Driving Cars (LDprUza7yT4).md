---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "LDprUza7yT4"
title: "Chris Gerdes (Stanford) on Technology, Policy and Vehicle Safety - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=LDprUza7yT4"
thumbnail_url: "https://i.ytimg.com/vi/LDprUza7yT4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=LDprUza7yT4"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-12-06T01:37:58.000Z"
upload_date: "2017-12-06"
duration_seconds: 3638
duration_human: "1:00:38"
view_count: 13931
like_count: 227
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:22:07.709Z"
---

# Chris Gerdes (Stanford) on Technology, Policy and Vehicle Safety - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=LDprUza7yT4
- video_id: LDprUza7yT4
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-12-06T01:37:58.000Z
- upload_date: 2017-12-06
- duration: 1:00:38
- view_count: 13931
- like_count: 227
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, self-driving cars, chris gerdes, stanford, nhtsa, driving, racing
- categories: Science & Technology

## Description

This is a guest talk for course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017.

Course website: https://selfdrivingcars.mit.edu
Contact: deepcars@mit.edu

Playlist: https://goo.gl/SLCb1y

Links to individual lecture videos for the course:

Lecture 1: Introduction to Deep Learning and Self-Driving Cars
https://youtu.be/1L0TKZQcUtA

Lecture 2: Deep Reinforcement Learning for Motion Planning
https://youtu.be/QDzM8r3WgBw

Lecture 3: Convolutional Neural Networks for End-to-End Learning of the Driving Task 
https://youtu.be/U1toUkZw6VI

Lecture 4: Recurrent Neural Networks for Steering through Time 
https://youtu.be/nFTQ7kHQWtc

Lecture 5: Deep Learning for Human-Centered Semi-Autonomous Vehicles 
https://youtu.be/ByZF8_-OJNI

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:08
so today we have Chris Gertie's with us

00:00:04 --> 00:00:10
he's a professor at Stanford University

00:00:07 --> 00:00:13
where he studies how to build autonomous

00:00:09 --> 00:00:15
cars that perform at or beyond human

00:00:12 --> 00:00:18
levels both on the racetrack and on

00:00:15 --> 00:00:21
public roads so that includes a race car

00:00:17 --> 00:00:24
that goes 120 miles an hour autonomously

00:00:20 --> 00:00:27
on the racetrack this is awesome he

00:00:24 --> 00:00:30
spent most of 2016 as the chief

00:00:26 --> 00:00:33
innovation officer at the United States

00:00:29 --> 00:00:34
Department of Transportation and was

00:00:32 --> 00:00:38
part of the team that developed a

00:00:33 --> 00:00:40
federal automated vehicle policy so he

00:00:37 --> 00:00:43
deeply cares about the role that

00:00:39 --> 00:00:45
artificial intelligence plays in our

00:00:42 --> 00:00:49
society both from the technology side

00:00:44 --> 00:00:52
and the policy perspective so he is now

00:00:48 --> 00:00:56
I guess you could say a policy wonk

00:00:51 --> 00:00:58
world renowned engineer and I think Oh

00:00:55 --> 00:01:01
was a car guy yes

00:00:57 --> 00:01:02
o he told me that he did a Q&A session

00:01:00 --> 00:01:06
with a group of three graders through

00:01:01 --> 00:01:07
great third graders last week and he

00:01:05 --> 00:01:09
answered all of their heart hitting

00:01:06 --> 00:01:12
questions so I encourage you guys to

00:01:08 --> 00:01:14
continue on that thread and ask Chris

00:01:11 --> 00:01:17
questions after his talk so please give

00:01:13 --> 00:01:17
a warm welcome to Chris

00:01:19 --> 00:01:23
great Lex thanks for that great

00:01:20 --> 00:01:26
introduction and thanks for having me

00:01:22 --> 00:01:29
here to talk to everybody today so this

00:01:25 --> 00:01:32
this is sort of my first week back in

00:01:28 --> 00:01:35
a civilian role I wrapped up at USDOT

00:01:31 --> 00:01:37
last week so I'm gonna no longer

00:01:34 --> 00:01:38
speaking and officially representing the

00:01:36 --> 00:01:41
department although some of the slides

00:01:38 --> 00:01:43
are very similar to things that I used

00:01:40 --> 00:01:45
to speak and represent the department so

00:01:42 --> 00:01:47
I think as of Friday this was still

00:01:44 --> 00:01:50
fairly current but I am sort of talking

00:01:46 --> 00:01:53
in my own capacity here so I wanted to

00:01:49 --> 00:01:55
talk about both the technology side and

00:01:52 --> 00:01:56
the policy side of automated vehicles

00:01:54 --> 00:01:57
and in particular how some of the

00:01:55 --> 00:01:59
techniques that you're learning in this

00:01:56 --> 00:02:02
class around deep learning and neural

00:01:58 --> 00:02:06
networks really place some challenges on

00:02:01 --> 00:02:09
regulators and policymakers attempting

00:02:05 --> 00:02:11
to ensure vehicle safety so just a bit

00:02:08 --> 00:02:12
about some of the the cars in my

00:02:10 --> 00:02:14
background I am a car guy and I've

00:02:11 --> 00:02:16
gotten a chance to work on a lot of cool

00:02:13 --> 00:02:19
ones I actually have been working in

00:02:15 --> 00:02:21
automated vehicles since 1992 in the

00:02:18 --> 00:02:24
Lincoln Town Cars in the upper corner

00:02:20 --> 00:02:26
are part of an automated highway project

00:02:23 --> 00:02:27
I worked on as a PhD student at Berkeley

00:02:25 --> 00:02:29
I then went to freight lidar heavy

00:02:26 --> 00:02:32
trucks in daimler-benz and worked with

00:02:28 --> 00:02:34
suspensions on heavy trucks before

00:02:31 --> 00:02:37
coming to Stanford and doing things like

00:02:33 --> 00:02:39
building p1 in the upper right corner

00:02:36 --> 00:02:41
there that's an entirely student built

00:02:38 --> 00:02:42
electric steer by wire drive by wire

00:02:40 --> 00:02:45
vehicle

00:02:41 --> 00:02:47
we've also instrumented vintage racecars

00:02:44 --> 00:02:50
electrified a DeLorean which I'll show a

00:02:46 --> 00:02:52
little bit later and worked as Lex

00:02:49 --> 00:02:54
mentioned with Shelley which is our

00:02:51 --> 00:02:57
self-driving Audi TT which is an

00:02:53 --> 00:02:59
automated race car in addition to the

00:02:56 --> 00:03:01
Stanford work I was a co-founder of

00:02:58 --> 00:03:03
peloton technology which is a truck

00:03:00 --> 00:03:06
platooning firm looking at bringing

00:03:02 --> 00:03:07
platooning technology so vehicle to

00:03:05 --> 00:03:10
vehicle communication which allows for

00:03:06 --> 00:03:12
shorter following distance out on the

00:03:09 --> 00:03:14
highway so these are some of the things

00:03:11 --> 00:03:15
i've had a chance to work with to give

00:03:13 --> 00:03:17
you a little bit of a sense this is

00:03:14 --> 00:03:20
helley going around the racetrack at

00:03:16 --> 00:03:22
Thunderhill she can actually go up to

00:03:19 --> 00:03:23
about 120 miles an hour or so on that

00:03:21 --> 00:03:25
rack it's really just limited by the

00:03:22 --> 00:03:27
length of the straight it's kind of fun

00:03:24 --> 00:03:29
to watch from the outside a little

00:03:26 --> 00:03:32
disconcerting occasionally as you see

00:03:28 --> 00:03:33
there's nobody in the car although from

00:03:31 --> 00:03:37
inside it actually looks all

00:03:32 --> 00:03:39
pretty chill so Shelly we've been

00:03:36 --> 00:03:39
working with her for a while out on the

00:03:38 --> 00:03:42
track

00:03:38 --> 00:03:45
she's able to get performance now which

00:03:41 --> 00:03:46
exceeds the capability of anybody on the

00:03:44 --> 00:03:48
development team

00:03:45 --> 00:03:51
I'll even many of us are amateur racers

00:03:47 --> 00:03:54
in fact actually most of my PhD students

00:03:50 --> 00:03:55
have their novice racing license we make

00:03:53 --> 00:03:58
sure that they get that license before

00:03:54 --> 00:03:59
going out on the track and testing so

00:03:57 --> 00:04:00
Shelly could be in anybody in the

00:03:58 --> 00:04:03
research group she actually can beat the

00:03:59 --> 00:04:06
president of the track david Vaadin now

00:04:02 --> 00:04:08
and we've had the opportunity to work

00:04:05 --> 00:04:10
recently with Junior Hildebrandt the

00:04:07 --> 00:04:13
IndyCar driver who finished six this

00:04:09 --> 00:04:15
last year in the Indy 500 he's faster

00:04:12 --> 00:04:18
but but he's actually only about a

00:04:14 --> 00:04:21
second or so faster on a minute and 25

00:04:17 --> 00:04:23
second lap so we're approaching his

00:04:20 --> 00:04:25
performance and he's actually helping us

00:04:22 --> 00:04:27
get there now the interesting thing

00:04:24 --> 00:04:30
about this is that we've approached this

00:04:26 --> 00:04:32
problem really from one of physics force

00:04:29 --> 00:04:35
quals mass times acceleration so the

00:04:31 --> 00:04:36
car is really out there calculating what

00:04:34 --> 00:04:37
it needs to do to break down into the

00:04:36 --> 00:04:40
next corner

00:04:36 --> 00:04:42
how much grip that it thinks it has and

00:04:39 --> 00:04:45
so forth as it's going around the track

00:04:41 --> 00:04:47
it's not actually a learning approach at

00:04:44 --> 00:04:49
its core although we've added on top a

00:04:46 --> 00:04:50
number of algorithms for learning

00:04:48 --> 00:04:52
because it turns out that the difference

00:04:49 --> 00:04:54
between the cars performance and the

00:04:51 --> 00:04:57
human performance really getting that

00:04:53 --> 00:04:57
last little bit of capability out of the

00:04:56 --> 00:05:00
tires

00:04:56 --> 00:05:02
humans drive instinctively in a way the

00:04:59 --> 00:05:03
best of humans at any rate drive

00:05:01 --> 00:05:05
instinctively in a way which is

00:05:02 --> 00:05:07
constantly pushing to the limits of the

00:05:04 --> 00:05:09
cars capability and so if you sort of

00:05:06 --> 00:05:11
prejudge what those limits are you're

00:05:08 --> 00:05:12
not going to be quite as fast and so

00:05:10 --> 00:05:14
that's one of the things we've actually

00:05:11 --> 00:05:15
been working with learning algorithms on

00:05:13 --> 00:05:18
is to try to figure out well how much

00:05:14 --> 00:05:20
friction do I have in this particular

00:05:17 --> 00:05:23
corner and how is that changing as the

00:05:19 --> 00:05:25
tires warm up and as a track warms up

00:05:22 --> 00:05:26
from the course of the morning till the

00:05:24 --> 00:05:29
afternoon these are the things that we

00:05:25 --> 00:05:30
need to be fast on the racetrack but

00:05:28 --> 00:05:32
hey're also the things that you need to

00:05:29 --> 00:05:34
take into account to be safe in the real

00:05:31 --> 00:05:36
world because what we're trying to do

00:05:33 --> 00:05:38
with this project is understand how the

00:05:35 --> 00:05:40
car can drive at the maximum capability

00:05:37 --> 00:05:42
of the limits of the friction between

00:05:39 --> 00:05:44
the tire and the road now racecar

00:05:41 --> 00:05:47
drivers do that to be fast as they say

00:05:43 --> 00:05:49
in racing if you want to finish first

00:05:46 --> 00:05:51
you have to finish so it's important

00:05:48 --> 00:05:53
hat they actually be fast but also

00:05:50 --> 00:05:55
accident free so we're trying to learn

00:05:52 --> 00:05:57
the same things so that on the road when

00:05:54 --> 00:05:59
you may have unknown conditions ahead of

00:05:56 --> 00:06:01
you the car can make the safest maneuver

00:05:58 --> 00:06:04
that's using all the friction in between

00:06:00 --> 00:06:06
the tire in the road to avoid ultimately

00:06:03 --> 00:06:08
any accident that the car would be

00:06:05 --> 00:06:10
physically capable of avoiding that's

00:06:07 --> 00:06:12
our goal with that so we've had a lot of

00:06:09 --> 00:06:14
un with Shelley we've gotten to drive

00:06:11 --> 00:06:16
the car up Pikes Peak in the Bonneville

00:06:13 --> 00:06:19
Salt Flats actually Shelley appeared in

00:06:15 --> 00:06:21
an Audi commercial with Zach Quinto and

00:06:18 --> 00:06:23
Leonard Nimoy and so at the end of the

00:06:20 --> 00:06:26
commercial they both look at each other

00:06:22 --> 00:06:28
and declare it fascinating so if you're

00:06:25 --> 00:06:29
as big of a science fiction fan as I am

00:06:27 --> 00:06:31
you realize that once your work has been

00:06:28 --> 00:06:35
declared fascinating by two Spock's

00:06:30 --> 00:06:37
there's nowhere to go so I had to take a

00:06:34 --> 00:06:39
stint and try something different in

00:06:36 --> 00:06:42
government and so I spent the last year

00:06:38 --> 00:06:44
as the first chief innovation officer at

00:06:41 --> 00:06:46
he US Department of Transportation

00:06:43 --> 00:06:48
which I think honestly was the coolest

00:06:45 --> 00:06:49
gig in the federal government because I

00:06:47 --> 00:06:51
really didn't have any assigned

00:06:48 --> 00:06:53
ay-to-day responsibilities but I got to

00:06:50 --> 00:06:56
kind of dive in and help with all manner

00:06:52 --> 00:06:58
of really cool projects including the

00:06:55 --> 00:07:00
development of the first federal

00:06:57 --> 00:07:02
automated vehicle policy so it's a

00:06:59 --> 00:07:04
really great opportunity to sort of see

00:07:01 --> 00:07:06
things from a different perspective and

00:07:03 --> 00:07:07
so what I wanted to do was you know kind

00:07:05 --> 00:07:09
of coming into this from an engineer

00:07:06 --> 00:07:11
give you a perspective of what is it

00:07:08 --> 00:07:13
like from somebody looking at the

00:07:10 --> 00:07:14
regulatory side on vehicle safety and

00:07:12 --> 00:07:16
how are they thinking about the

00:07:13 --> 00:07:17
technologies you're developing and where

00:07:15 --> 00:07:19
does that actually leave some

00:07:16 --> 00:07:22
opportunities for engineers to make some

00:07:18 --> 00:07:25
big contributions to society so let's

00:07:21 --> 00:07:28
tart with with what vehicle safety is

00:07:24 --> 00:07:30
like today so today we have a system of

00:07:27 --> 00:07:33
ederal motor vehicle safety standards

00:07:29 --> 00:07:35
o these are rules they're minimum

00:07:32 --> 00:07:37
performance requirements and each of

00:07:34 --> 00:07:40
them must have associated with it an

00:07:36 --> 00:07:41
objective test so you can tell does the

00:07:39 --> 00:07:43
vehicle meet this requirement or does it

00:07:40 --> 00:07:46
not meet this requirement now

00:07:42 --> 00:07:48
interestingly there is no federal agency

00:07:45 --> 00:07:48
that is testing vehicles before they are

00:07:47 --> 00:07:51
sold

00:07:47 --> 00:07:54
we rely in this country on a system of

00:07:50 --> 00:07:55
manufacturers self certification so the

00:07:53 --> 00:07:58
government puts these rules out there

00:07:54 --> 00:08:00
and manufacturers go we got this we can

00:07:57 --> 00:08:02
meet this and then they sell

00:07:59 --> 00:08:04
certify and put the vehicles out on the

00:08:01 --> 00:08:05
market the National Highway Traffic

00:08:03 --> 00:08:07
Safety Administration can then purchase

00:08:04 --> 00:08:09
vehicles and test them and make sure

00:08:06 --> 00:08:12
that they comply but we rely on

00:08:08 --> 00:08:13
manufacturers self-certification this is

00:08:11 --> 00:08:15
a different system than in most of the

00:08:12 --> 00:08:17
rest of the world which actually has pre

00:08:14 --> 00:08:19
market certification where before you

00:08:16 --> 00:08:22
can sell it the government agency has to

00:08:18 --> 00:08:24
say yes we've checked it and it meets

00:08:21 --> 00:08:26
all the requirements Aviation in this

00:08:23 --> 00:08:29
country for instance has that aircraft

00:08:25 --> 00:08:31
require certification before they can be

00:08:28 --> 00:08:33
sold cars do not now where did that

00:08:30 --> 00:08:36
system come from so a little quick

00:08:32 --> 00:08:39
history lesson in 1965 Ralph Nader

00:08:35 --> 00:08:42
eleased a book entitled unsafe at any

00:08:38 --> 00:08:44
speed and this is often thought of as a

00:08:41 --> 00:08:46
book about the Corvair it's it's not the

00:08:43 --> 00:08:49
Corvair featured prominently in there as

00:08:45 --> 00:08:52
an example of a design that Nader

00:08:48 --> 00:08:54
considered to be unsafe what was very

00:08:51 --> 00:08:56
interesting about this this book was

00:08:53 --> 00:08:58
that he was actually advocating for

00:08:55 --> 00:09:02
things like airbags and anti-lock brakes

00:08:57 --> 00:09:05
back in 1965 these technologies didn't

00:09:01 --> 00:09:08
come along until much later his argument

00:09:04 --> 00:09:10
was that the auto industry had failed it

00:09:07 --> 00:09:12
wasn't a failure of engineering but it

00:09:09 --> 00:09:13
was a failure of imagination and if

00:09:11 --> 00:09:15
you're interested in vehicle safety I

00:09:12 --> 00:09:17
would really recommend you read this

00:09:14 --> 00:09:19
book because it's fascinating they have

00:09:16 --> 00:09:21
quotes from people in the 1960s

00:09:18 --> 00:09:24
basically saying that we believe that

00:09:20 --> 00:09:26
any collision more than about forty or

00:09:23 --> 00:09:28
forty-five miles an hour is not

00:09:25 --> 00:09:30
survivable therefore there's no reason

00:09:27 --> 00:09:32
for seatbelts there's no reason for

00:09:29 --> 00:09:33
collapsible steering wheels in fact

00:09:31 --> 00:09:35
here's a quote from somebody who made

00:09:32 --> 00:09:38
great advances in Road Safety saying I

00:09:34 --> 00:09:40
can't conceive of what help a seatbelt

00:09:37 --> 00:09:43
would give you beyond like firmly

00:09:39 --> 00:09:45
bracing yourself with your hands those

00:09:42 --> 00:09:47
of you who have studied physics know

00:09:44 --> 00:09:49
that's kind of patently ridiculous but

00:09:46 --> 00:09:50
here was a common feeling that there

00:09:48 --> 00:09:52
was no sense of doing anything about

00:09:49 --> 00:09:54
vehicle crash worthiness because once

00:09:51 --> 00:09:56
you got above a certain speed it was

00:09:53 --> 00:09:58
inherently unsurvivable and I think it's

00:09:55 --> 00:10:00
interesting to look at that today

00:09:57 --> 00:10:01
because if we were to be in a collision

00:09:59 --> 00:10:03
I think if any of us were to be in a

00:10:00 --> 00:10:06
collision in around about 40 miles an

00:10:02 --> 00:10:08
hour in a in a modern automobile we'd

00:10:05 --> 00:10:09
probably expect to walk away you know we

00:10:07 --> 00:10:13
wouldn't really be thinking about our

00:10:08 --> 00:10:14
survival and so what this did is it led

00:10:12 --> 00:10:16
to

00:10:13 --> 00:10:17
a lot of public outcry and ultimately

00:10:15 --> 00:10:20
the National traffic and Motor Vehicle

00:10:16 --> 00:10:23
Safety Act in 1966 which established

00:10:19 --> 00:10:24
nitzan established this set of federal

00:10:22 --> 00:10:27
motor vehicle safety standards

00:10:23 --> 00:10:29
now the process to get a new standard

00:10:26 --> 00:10:30
made which is a rulemaking process in

00:10:28 --> 00:10:33
government is very time-consuming

00:10:29 --> 00:10:36
optimistically about the minimum time it

00:10:32 --> 00:10:40
can possibly take is two years

00:10:35 --> 00:10:42
realistically it's more like seven and

00:10:39 --> 00:10:45
so if you think about going through this

00:10:41 --> 00:10:47
process that's really problematic I mean

00:10:44 --> 00:10:49
think about what we were talking about

00:10:46 --> 00:10:52
with automated vehicles two years ago or

00:10:48 --> 00:10:54
seven years ago I think about trying to

00:10:51 --> 00:10:56
start seven years ago and make laws

00:10:53 --> 00:10:58
they're gonna determine how those

00:10:55 --> 00:11:01
vehicles operate on the road today it's

00:10:57 --> 00:11:03
crazy right there's really no way to do

00:11:00 --> 00:11:05
that and the other thing is is that if

00:11:02 --> 00:11:06
you think about it our system evolved

00:11:04 --> 00:11:09
from really this sense of failure of

00:11:05 --> 00:11:12
imagination that the government needs to

00:11:08 --> 00:11:13
say hey industry do this stop slacking

00:11:11 --> 00:11:15
off

00:11:12 --> 00:11:17
these are the requirements get there but

00:11:14 --> 00:11:18
I think it's hard to argue today with

00:11:16 --> 00:11:20
all the advances in automation that

00:11:17 --> 00:11:22
here is any failure of imagination on

00:11:19 --> 00:11:25
the part of industry people are coming

00:11:21 --> 00:11:27
up with all sorts of ideas and concepts

00:11:24 --> 00:11:30
for new transportation and automation

00:11:26 --> 00:11:32
tech companies startup companies large

00:11:29 --> 00:11:35
OEMs there's all sorts of concepts being

00:11:31 --> 00:11:37
tested out on the road it's hard to

00:11:34 --> 00:11:39
argue that there's still any lack of

00:11:36 --> 00:11:42
imagination now the question is are

00:11:38 --> 00:11:43
things like this legal it's an

00:11:41 --> 00:11:45
interesting question right can I

00:11:42 --> 00:11:48
actually legally do this well from the

00:11:45 --> 00:11:49
federal level there's an interesting

00:11:47 --> 00:11:51
report that came out about ten months

00:11:48 --> 00:11:54
ago from the folks across the street at

00:11:50 --> 00:11:55
Volpe who did scan and said well what

00:11:53 --> 00:11:57
are the things that might prevent you

00:11:54 --> 00:11:59
based on the current federal motor

00:11:56 --> 00:12:01
vehicle safety standards from putting an

00:11:58 --> 00:12:05
automated vehicle out on the road and

00:12:00 --> 00:12:07
the answer was honestly not much if you

00:12:04 --> 00:12:08
have a vehicle if you start and you

00:12:06 --> 00:12:11
automate a vehicle that is currently

00:12:07 --> 00:12:12
meeting all the standards because there

00:12:10 --> 00:12:14
are no standards that relate

00:12:11 --> 00:12:16
specifically to automation you can

00:12:13 --> 00:12:18
certify your vehicle as meeting the

00:12:15 --> 00:12:20
federal motor vehicle safety standards

00:12:17 --> 00:12:22
therefore there's nothing at the federal

00:12:19 --> 00:12:24
evel that prevents in general an

00:12:21 --> 00:12:26
automated vehicle from being put on the

00:12:23 --> 00:12:28
road so it makes sense so if there isn't

00:12:25 --> 00:12:30
a safety standard

00:12:27 --> 00:12:32
that you have to meet then you can put a

00:12:29 --> 00:12:34
vehicle out on the road that meets all

00:12:31 --> 00:12:36
the existing ones and does something new

00:12:33 --> 00:12:39
and there's no federal barrier to that

00:12:35 --> 00:12:41
now there are a couple of exceptions

00:12:38 --> 00:12:44
there were a few points in there that

00:12:40 --> 00:12:47
referenced a driver and in fact Nitsa

00:12:43 --> 00:12:48
gave a an interpretation of the rule

00:12:46 --> 00:12:50
which is one of the things that they can

00:12:47 --> 00:12:52
do is to say well we're going to give an

00:12:49 --> 00:12:54
interpretation it's not making a new

00:12:51 --> 00:12:56
rule but basically interpreting the ones

00:12:53 --> 00:12:58
that we have and they said that actually

00:12:55 --> 00:13:02
these references to the driver could in

00:12:57 --> 00:13:05
fact refer to the AI system and so that

00:13:01 --> 00:13:07
actually is now a policy statement from

00:13:04 --> 00:13:09
the department that many of the

00:13:06 --> 00:13:10
references to driver in the federal

00:13:08 --> 00:13:13
motor vehicle safety standards can be

00:13:09 --> 00:13:15
replaced with your self-driving aai

00:13:12 --> 00:13:18
system and the rules applied accordingly

00:13:14 --> 00:13:20
so in fact there's very little that

00:13:17 --> 00:13:21
prevents you from putting a vehicle out

00:13:19 --> 00:13:23
on the road if it meets the current

00:13:20 --> 00:13:26
standards so if it's a modern production

00:13:22 --> 00:13:28
car automated federal motor vehicle

00:13:25 --> 00:13:30
safety standards don't stop that now a

00:13:27 --> 00:13:31
lot of the designs that I showed though

00:13:29 --> 00:13:34
things that wouldn't have a steering

00:13:30 --> 00:13:37
wheel or other things are actually not

00:13:33 --> 00:13:38
compliant because there are requirements

00:13:36 --> 00:13:41
that you have a steering wheel that you

00:13:37 --> 00:13:43
have pedals again these are best

00:13:40 --> 00:13:45
practices that evolved in the days of

00:13:42 --> 00:13:49
course when people were not thinking of

00:13:44 --> 00:13:51
cars that could drive themselves and so

00:13:48 --> 00:13:55
these things would require an exemption

00:13:50 --> 00:13:57
by Nitsa a process of saying that okay

00:13:54 --> 00:13:58
this vehicle is allowed on the road even

00:13:56 --> 00:13:59
though it doesn't meet the current

00:13:57 --> 00:14:01
standards because it meets some

00:13:58 --> 00:14:04
quivalent and studying that equivalent

00:14:00 --> 00:14:05
can be a bit of a challenge okay so the

00:14:03 --> 00:14:07
question then is well alright if the

00:14:04 --> 00:14:09
federal government is responsible and

00:14:06 --> 00:14:12
that's by the traffic safety act is

00:14:08 --> 00:14:13
responsible for safety on the roads but

00:14:11 --> 00:14:17
it can't prevent people from putting

00:14:12 --> 00:14:18
anything out what do you do right one

00:14:16 --> 00:14:19
approach is to say well let's get some

00:14:17 --> 00:14:21
federal motor vehicle safety standards

00:14:18 --> 00:14:23
out there but as we already said that's

00:14:20 --> 00:14:25
probably about a seven year process and

00:14:22 --> 00:14:27
if you were to start setting in best

00:14:24 --> 00:14:29
practices now what would that look like

00:14:26 --> 00:14:31
so we've got this challenge we want to

00:14:28 --> 00:14:34
encourage this technology to come out

00:14:30 --> 00:14:36
onto the roads and be tested because

00:14:33 --> 00:14:37
that's the way you're gonna learn to get

00:14:35 --> 00:14:39
he real-world data to get the

00:14:36 --> 00:14:41
real-world experience at the same time

00:14:38 --> 00:14:41
the federal government is responsible

00:14:40 --> 00:14:43
for

00:14:40 --> 00:14:46
safety on the nation's roads it can

00:14:42 --> 00:14:48
recall things that don't work so if you

00:14:45 --> 00:14:51
do put your automated system out on the

00:14:47 --> 00:14:53
highway and it's deemed to present an

00:14:50 --> 00:14:54
unreasonable risk to safety

00:14:52 --> 00:14:56
even if you're an aftermarket

00:14:53 --> 00:14:57
manufacturer the government can tell you

00:14:55 --> 00:14:59
to take that off the road but the

00:14:56 --> 00:15:02
question is how can you do better how

00:14:58 --> 00:15:05
can you be proactive to try to have a

00:15:01 --> 00:15:06
discussion here so we know standards are

00:15:04 --> 00:15:08
maybe not the best way of doing that

00:15:05 --> 00:15:10
because they're too slow we'd like to

00:15:07 --> 00:15:12
make sure the public is protected but

00:15:09 --> 00:15:15
his technology gets tested and so the

00:15:11 --> 00:15:17
approach taken to sort of provide some

00:15:14 --> 00:15:19
ncouragement for this innovation while

00:15:16 --> 00:15:21
at the same time looking at safety was

00:15:18 --> 00:15:25
the federal automated vehicle policy

00:15:20 --> 00:15:27
which rolled out in September so this

00:15:24 --> 00:15:30
was an attempt to really say okay let's

00:15:26 --> 00:15:31
put out a different framework from the

00:15:29 --> 00:15:34
federal motor vehicle safety standards

00:15:30 --> 00:15:36
let's actually put out a system of

00:15:33 --> 00:15:39
voluntary guidance so what Anisa is

00:15:35 --> 00:15:43
doing is to ask manufacturers to

00:15:38 --> 00:15:45
voluntarily follow certain guidance and

00:15:42 --> 00:15:47
submit to the agency a letter that they

00:15:44 --> 00:15:49
have followed a certain safety

00:15:46 --> 00:15:50
assessment now the interesting thing is

00:15:48 --> 00:15:52
that the way that this is set up is

00:15:49 --> 00:15:55
not to tell manufacturers how to do

00:15:51 --> 00:15:56
something but really to say these are

00:15:54 --> 00:16:00
the things that we want you to address

00:15:55 --> 00:16:02
and we want you to come to us to explain

00:15:59 --> 00:16:04
how you've addressed them with the idea

00:16:01 --> 00:16:06
that from this best practices will

00:16:03 --> 00:16:08
emerge we'll be able to figure out in

00:16:05 --> 00:16:11
the future what really is the best way

00:16:07 --> 00:16:15
of ensuring some of these safety items

00:16:10 --> 00:16:18
o this rolled out in September we've

00:16:14 --> 00:16:21
got the BMI t car here on the side so

00:16:17 --> 00:16:23
you see you've got the Massachusetts

00:16:20 --> 00:16:24
license plate so thanks to Brian for for

00:16:22 --> 00:16:26
bringing that if you do put gaudy

00:16:23 --> 00:16:27
stickers on your card then you get

00:16:25 --> 00:16:30
closer to the center so that's something

00:16:26 --> 00:16:32
to consider for for for future future

00:16:29 --> 00:16:36
ference but this was was rolled out in

00:16:31 --> 00:16:39
Washington Washington DC by the

00:16:35 --> 00:16:41
secretary and consists largely of of

00:16:38 --> 00:16:43
multiple parts but I think the most

00:16:40 --> 00:16:45
relevant to vehicle design is this 15

00:16:42 --> 00:16:48
point safety assessment so these are the

00:16:44 --> 00:16:50
15 points that that are assessed and I'd

00:16:47 --> 00:16:53
like to kind of talk about a few of

00:16:49 --> 00:16:55
these in some more detail and it starts

00:16:52 --> 00:16:58
with this concept of an

00:16:54 --> 00:17:01
operational design domain and minimal

00:16:57 --> 00:17:03
risk or fallback conditions and what

00:17:00 --> 00:17:06
hat means is instead of trying to put a

00:17:02 --> 00:17:09
taxonomy on here and say well your

00:17:05 --> 00:17:11
automation system could be an adaptive

00:17:08 --> 00:17:13
cruise control that works on the highway

00:17:10 --> 00:17:14
or it could be fully self-driving or it

00:17:12 --> 00:17:17
might be something that operates a

00:17:13 --> 00:17:19
low-speed shuttle the guidance asked the

00:17:16 --> 00:17:21
manufacturers to define this and the

00:17:18 --> 00:17:23
definition is known as operational

00:17:20 --> 00:17:26
design domain so in other words you tell

00:17:23 --> 00:17:28
us where your system is supposed to work

00:17:25 --> 00:17:31
is it supposed to work on the highway is

00:17:27 --> 00:17:35
it supposed to work in restricted areas

00:17:30 --> 00:17:37
can it work in all-weather or is this

00:17:34 --> 00:17:39
ort of something that operates only in

00:17:36 --> 00:17:41
daylight hours in the sunshine in this

00:17:38 --> 00:17:45
area of South Florida all of those are

00:17:40 --> 00:17:47
fine but the it's incumbent upon the

00:17:44 --> 00:17:49
manufacturer developer to define the

00:17:46 --> 00:17:51
operational design domain and then once

00:17:48 --> 00:17:53
you've defined where the system operates

00:17:50 --> 00:17:55
you need to define how you make sure

00:17:52 --> 00:17:57
that it is only operating in those

00:17:54 --> 00:17:59
conditions how do you make sure the

00:17:56 --> 00:18:01
system stays there and what's your

00:17:58 --> 00:18:02
fallback in case it doesn't

00:18:00 --> 00:18:04
and that fallback can be different

00:18:01 --> 00:18:06
obviously if this is a car which is

00:18:03 --> 00:18:09
normally human driven as you see here

00:18:05 --> 00:18:12
from the volvo drive me experiment it

00:18:08 --> 00:18:14
might be reasonable to say we're gonna

00:18:11 --> 00:18:16
sk the human driver to retake control

00:18:13 --> 00:18:20
whereas clearly if you're going to

00:18:15 --> 00:18:23
enable blind passengers or you are going

00:18:19 --> 00:18:25
to have a vehicle that has no steering

00:18:22 --> 00:18:28
wheel you need a different fallback

00:18:24 --> 00:18:30
system and so within the the guidance it

00:18:27 --> 00:18:32
really allows manufacturers to have a

00:18:29 --> 00:18:34
lot of different concepts of what they

00:18:31 --> 00:18:37
want their automation to be so long as

00:18:33 --> 00:18:39
they can define where it works what the

00:18:36 --> 00:18:41
fallback is in the event that it doesn't

00:18:38 --> 00:18:44
work and how you have educated the

00:18:40 --> 00:18:47
consumer about what your technology does

00:18:43 --> 00:18:49
and what it doesn't do so that people

00:18:46 --> 00:18:52
have a good understanding of the system

00:18:48 --> 00:18:54
performance a few things if we go down

00:18:51 --> 00:18:57
you see also validation methods and

00:18:53 --> 00:18:59
ethical considerations are our aspects

00:18:56 --> 00:19:00
that are brought up here as well and so

00:18:58 --> 00:19:04
validation methods are really

00:18:59 --> 00:19:06
interesting as it applies to AI so

00:19:03 --> 00:19:08
really the idea is that there's lots of

00:19:05 --> 00:19:11
different ways that you might tell

00:19:07 --> 00:19:12
an automated vehicle you might go out on

00:19:10 --> 00:19:15
the test track and run it through a

00:19:11 --> 00:19:17
series of standard maneuvers you may

00:19:14 --> 00:19:19
develop a certain number of miles of

00:19:16 --> 00:19:21
experience driving in real-world traffic

00:19:18 --> 00:19:24
and figure out how does the vehicle

00:19:20 --> 00:19:26
behave in a limited environment there's

00:19:23 --> 00:19:28
questions about a test track obviously

00:19:25 --> 00:19:29
because you don't have the sort of

00:19:27 --> 00:19:31
unknowns that can happen in the

00:19:28 --> 00:19:33
real-world environment but if you test

00:19:30 --> 00:19:35
in one real-world environment you also

00:19:32 --> 00:19:38
have a question of is this transferable

00:19:34 --> 00:19:39
information so if I've driven a certain

00:19:37 --> 00:19:41
umber of miles in Mountain View

00:19:38 --> 00:19:43
California does that tell me anything

00:19:40 --> 00:19:46
about how the vehicle is likely to

00:19:42 --> 00:19:47
behave in Cambridge Massachusetts maybe

00:19:45 --> 00:19:49
not

00:19:46 --> 00:19:51
it's a little bit hard to extrapolate

00:19:48 --> 00:19:53
sometimes and then finally there's also

00:19:50 --> 00:19:56
the idea of simulation and analysis so

00:19:52 --> 00:19:57
if I can record these situations if I

00:19:55 --> 00:19:59
can actually create a virtual

00:19:56 --> 00:20:01
environment of the sorts of things that

00:19:58 --> 00:20:03
I see on the road maybe I can actually

00:20:00 --> 00:20:05
run the vehicle through many many of

00:20:02 --> 00:20:07
these scenarios perturbed in some way

00:20:04 --> 00:20:09
and actually test the system much more

00:20:06 --> 00:20:12
robustly in simulation than I can ever

00:20:08 --> 00:20:14
actually do out on the road so the

00:20:11 --> 00:20:16
guidance is actually neutral on which of

00:20:13 --> 00:20:19
these techniques manufacturers take and

00:20:15 --> 00:20:21
allow manufacturers to approach it in

00:20:18 --> 00:20:23
different ways and I think you know

00:20:20 --> 00:20:25
based upon conversations when you think

00:20:22 --> 00:20:27
about the way customers are companies

00:20:24 --> 00:20:29
develop this they do take all these

00:20:26 --> 00:20:30
different approaches a company like

00:20:28 --> 00:20:32
Tesla for instance which is recording

00:20:29 --> 00:20:36
all the data streams from all their

00:20:32 --> 00:20:39
vehicles basically is able to run ideas

00:20:35 --> 00:20:41
or technologies silently in their

00:20:38 --> 00:20:43
vehicle they can actually test systems

00:20:40 --> 00:20:44
out get real-world data and then decide

00:20:42 --> 00:20:46
whether or not to make that system

00:20:43 --> 00:20:49
active companies that don't have that

00:20:45 --> 00:20:52
access to data really can't use that

00:20:48 --> 00:20:54
sort of development method and may rely

00:20:51 --> 00:20:57
much more heavily on simulation or test

00:20:53 --> 00:20:59
rack experience so the guidance really

00:20:56 --> 00:21:02
doesn't have this particular blend of

00:20:58 --> 00:21:03
this and in fact it does envision that

00:21:01 --> 00:21:07
you might have over-the-air software

00:21:02 --> 00:21:08
updates in the in the future so it is

00:21:06 --> 00:21:11
interesting though to think about

00:21:07 --> 00:21:13
whether you have data driven approaches

00:21:10 --> 00:21:14
things like artificial neural networks

00:21:12 --> 00:21:18
or whether you actually start to program

00:21:13 --> 00:21:20
in hard and fast rules because as you

00:21:17 --> 00:21:22
start to think about requirements on a

00:21:19 --> 00:21:24
system how do you actually set require

00:21:21 --> 00:21:26
on a system which has learned its

00:21:23 --> 00:21:29
behavior and you don't necessarily know

00:21:25 --> 00:21:31
hat the internal workings or our

00:21:28 --> 00:21:33
algorithms look like there's another one

00:21:30 --> 00:21:35
that that comes up which is the ethical

00:21:32 --> 00:21:37
consideration so I'm gonna pick on MIT

00:21:34 --> 00:21:38
for a moment here so this is an area

00:21:36 --> 00:21:42
that I actually did a lot of work on

00:21:38 --> 00:21:45
with Stanford together with with some

00:21:41 --> 00:21:47
philosophers who join joined our group

00:21:44 --> 00:21:49
and so when people hear ethical

00:21:46 --> 00:21:51
considerations in automated vehicles it

00:21:48 --> 00:21:54
often conjures up the trolley car

00:21:50 --> 00:21:57
problem and and so this sort of classic

00:21:53 --> 00:21:59
formulation here about the fact that you

00:21:56 --> 00:22:02
have a self-driving car which is heading

00:21:58 --> 00:22:04
towards a group of 10 people and it can

00:22:01 --> 00:22:06
either plow in and kill those 10 people

00:22:03 --> 00:22:09
or it can divert and kill the driver

00:22:05 --> 00:22:12
what do you do and these are classic

00:22:08 --> 00:22:15
questions in philosophy you actually

00:22:11 --> 00:22:16
look in fact at at the trolley car

00:22:14 --> 00:22:19
problem which is I have a runaway

00:22:15 --> 00:22:21
trolley car and I need to either divert

00:22:18 --> 00:22:22
it to another track where it will kill

00:22:20 --> 00:22:24
somebody who's wandering across that

00:22:21 --> 00:22:28
rack or the five people on the trolley

00:22:23 --> 00:22:29
car are killed what do I do well in fact

00:22:27 --> 00:22:31
it's this article points out it's like

00:22:28 --> 00:22:33
you know before they the automated

00:22:30 --> 00:22:35
vehicles can become widespread car

00:22:32 --> 00:22:38
makers must solve an impossible ethical

00:22:34 --> 00:22:39
dilemma of algorithmic morality so if

00:22:37 --> 00:22:41
all this wasn't hard enough I mean your

00:22:38 --> 00:22:43
understanding how tough the technology

00:22:40 --> 00:22:45
is to actually program this stuff and

00:22:42 --> 00:22:47
then you have to get the regulations

00:22:44 --> 00:22:50
right and now we actually have to solve

00:22:46 --> 00:22:52
impossible philosophical questions well

00:22:49 --> 00:22:55
I don't think that's actually true and I

00:22:51 --> 00:22:57
think you know it's good for engineers

00:22:54 --> 00:23:01
to work with philosophers but not to be

00:22:56 --> 00:23:03
so literal about this this is a question

00:23:00 --> 00:23:04
that philosophers can ask but engineers

00:23:02 --> 00:23:07
might ask a number of different

00:23:03 --> 00:23:09
questions like who's responsible for the

00:23:06 --> 00:23:11
brakes on this trolley why wasn't there

00:23:08 --> 00:23:14
a backup system I mean why am I headed

00:23:10 --> 00:23:18
into a group of 10 people without any

00:23:13 --> 00:23:20
capability to stop so an engineer would

00:23:17 --> 00:23:22
in fact have to answer this question but

00:23:19 --> 00:23:23
might approach it much differently so if

00:23:21 --> 00:23:26
I look at the trolley car problem I

00:23:22 --> 00:23:28
might say ok let's see my options are

00:23:25 --> 00:23:30
I've got a trolley car which is out of

00:23:27 --> 00:23:32
control first of all I'd like to have an

00:23:29 --> 00:23:34
emergency braking system let's make sure

00:23:31 --> 00:23:36
that I have that well there's a chance

00:23:33 --> 00:23:39
that that could break as well so

00:23:35 --> 00:23:41
my emergency if my base breaking system

00:23:38 --> 00:23:44
goes and my emergency braking system

00:23:40 --> 00:23:46
goes my next option would be to divert

00:23:43 --> 00:23:47
it to this sidetrack well knowing that

00:23:45 --> 00:23:49
's my option I should probably put

00:23:46 --> 00:23:53
up a fence with a warning sign that says

00:23:48 --> 00:23:55
do not cross runaway trolley track okay

00:23:52 --> 00:23:59
now let's say that I've done all of that

00:23:54 --> 00:24:01
he brakes fail the big emergency brakes

00:23:58 --> 00:24:03
fail I have to divert the trolley and

00:24:00 --> 00:24:06
somebody has ignored my sign and crossed

00:24:02 --> 00:24:08
over the fence and now he's hit by the

00:24:05 --> 00:24:10
trolley do I feel a little differently

00:24:07 --> 00:24:12
about this whole scenario and then I did

00:24:09 --> 00:24:14
at the beginning of just trying to

00:24:11 --> 00:24:16
decide who lived and who died the

00:24:13 --> 00:24:18
solution was made but by thinking of it

00:24:15 --> 00:24:20
as an engineer trying to reduce risk and

00:24:17 --> 00:24:24
not by thinking of levels of morality

00:24:19 --> 00:24:26
and who deserves to live or die and so I

00:24:23 --> 00:24:27
think this is a very important issue and

00:24:25 --> 00:24:29
the reason it's in the guidance is not

00:24:26 --> 00:24:31
o get basically have everybody solve

00:24:28 --> 00:24:35
trolley car problems but to try to think

00:24:30 --> 00:24:37
about these larger issues and so I think

00:24:34 --> 00:24:39
ethics is is not just about these sorts

00:24:36 --> 00:24:42
of situations which actually will be in

00:24:38 --> 00:24:43
automated vehicles I think addressed

00:24:41 --> 00:24:45
much more by engineering principles than

00:24:42 --> 00:24:47
by trying to figure out from

00:24:44 --> 00:24:50
philosophical merits who deserves to

00:24:46 --> 00:24:52
live and die but there's broader issues

00:24:49 --> 00:24:55
here just any time that you have concern

00:24:51 --> 00:24:57
for human safety how close do I get to

00:24:54 --> 00:25:01
pedestrians how close do I get to

00:24:56 --> 00:25:04
bicycles how much care should I put in

00:25:00 --> 00:25:07
to other people in the environment

00:25:03 --> 00:25:08
hat's very much an ethical question and

00:25:06 --> 00:25:10
it's an ethical question that

00:25:07 --> 00:25:13
manufacturers are actually already

00:25:09 --> 00:25:15
addressing today if you look at the

00:25:12 --> 00:25:17
automatic emergency braking systems that

00:25:14 --> 00:25:19
most manufacturers are putting on their

00:25:16 --> 00:25:21
vehicles they will actually use a

00:25:18 --> 00:25:22
different algorithm depending upon

00:25:20 --> 00:25:25
whether that obstacle in front of it is

00:25:21 --> 00:25:28
a vehicle or a human so they're already

00:25:24 --> 00:25:29
detecting and making a decision that the

00:25:27 --> 00:25:31
impact of this vehicle with the human

00:25:28 --> 00:25:33
could be far worse than the impact in

00:25:30 --> 00:25:35
this vehicle with a vehicle and so

00:25:32 --> 00:25:37
they're choosing to brake a little bit

00:25:34 --> 00:25:38
more heavily in that case that's

00:25:36 --> 00:25:40
actually where these ethical

00:25:37 --> 00:25:42
considerations come in and the idea of

00:25:39 --> 00:25:43
the guidance is to begin to share and

00:25:41 --> 00:25:45
have a discussion openly about how

00:25:42 --> 00:25:47
manufacturers are approaching this with

00:25:44 --> 00:25:49
e idea of getting to a best practice

00:25:46 --> 00:25:51
where not only the people in

00:25:48 --> 00:25:53
automated vehicles but other road users

00:25:50 --> 00:25:55
feel that there's an appropriate level

00:25:52 --> 00:25:57
of care taken for their well-being

00:25:54 --> 00:25:59
that's one of the areas where ethics is

00:25:56 --> 00:26:01
important the other area where ethics is

00:25:58 --> 00:26:03
important is that we have different

00:26:00 --> 00:26:05
objectives as we drive down the road we

00:26:02 --> 00:26:07
have objectives for safety we'd like to

00:26:04 --> 00:26:08
get there we have objectives for

00:26:06 --> 00:26:11
mobility we'd like you to get there

00:26:07 --> 00:26:14
probably pretty quickly and we also have

00:26:10 --> 00:26:16
the idea of legality we'd like to follow

00:26:13 --> 00:26:18
the rules but sometimes these things

00:26:15 --> 00:26:19
come into conflict with each other

00:26:17 --> 00:26:21
so let's say you're driving down the

00:26:18 --> 00:26:23
road and there's a van that's parked

00:26:20 --> 00:26:25
where it has absolutely no business

00:26:22 --> 00:26:29
parking you've got a double yellow line

00:26:24 --> 00:26:32
is it okay to cross well at least in

00:26:28 --> 00:26:34
California there's no exception to the

00:26:31 --> 00:26:36
double yellow line representing the lane

00:26:33 --> 00:26:39
boundary for a vehicle that's parked

00:26:35 --> 00:26:42
where it has no business being parked so

00:26:38 --> 00:26:44
according to the vehicle code you're

00:26:41 --> 00:26:47
supposed to kind of come to a stop here

00:26:43 --> 00:26:49
I don't think any of us would right in

00:26:46 --> 00:26:51
fact actually when you're in California

00:26:48 --> 00:26:54
nd you're riding through the hills and

00:26:50 --> 00:26:57
you come upon a cyclist virtually every

00:26:53 --> 00:26:58
vehicle on the road is deviating across

00:26:56 --> 00:27:00
the double yellow line to give extra

00:26:57 --> 00:27:01
room to the cyclists that's also not

00:26:59 --> 00:27:03
what you're supposed to do by the

00:27:00 --> 00:27:05
vehicle code you're supposed to stay on

00:27:02 --> 00:27:08
your side of the double yellow line but

00:27:04 --> 00:27:11
slow to an appropriate speed to pass

00:27:07 --> 00:27:14
right so there's behaviors where our

00:27:10 --> 00:27:16
desire for mobility or our desire for

00:27:13 --> 00:27:18
safety are outweighing our desire for

00:27:15 --> 00:27:20
legality this becomes a challenge if you

00:27:17 --> 00:27:22
think about how do I program the

00:27:19 --> 00:27:24
self-driving car should it be based on

00:27:21 --> 00:27:26
the way that humans drive or should it

00:27:23 --> 00:27:28
be based on the way that the legal code

00:27:25 --> 00:27:31
tells me to drive of course the legal

00:27:27 --> 00:27:34
code was never actually anticipating a

00:27:30 --> 00:27:35
self-driving car from a human standpoint

00:27:33 --> 00:27:37
hat double yellow line is a great

00:27:34 --> 00:27:38
shorthand that says maybe there's

00:27:36 --> 00:27:41
omething coming up here where you don't

00:27:37 --> 00:27:42
want to be in this other Lane but if I

00:27:40 --> 00:27:44
actually have a car with the sensing

00:27:42 --> 00:27:46
capability to make that determination

00:27:43 --> 00:27:48
itself this is a double yellow line

00:27:45 --> 00:27:50
actually all that meaningful anymore

00:27:47 --> 00:27:53
these are things that have to be sorted

00:27:49 --> 00:27:54
out speed limits being another one you

00:27:52 --> 00:27:57
know if we're out on the highway it's

00:27:53 --> 00:28:00
usually a little bit flexible do we give

00:27:56 --> 00:28:01
that same flexibility to the automated

00:27:59 --> 00:28:03
vehicle or do we create this wonderful

00:28:00 --> 00:28:05
automated vehicle

00:28:02 --> 00:28:07
roadblocks of vehicles going to the

00:28:04 --> 00:28:10
speed limit when nobody else around them

00:28:06 --> 00:28:12
is do we allow them to accelerate a

00:28:09 --> 00:28:14
little bit to merge into the flow of

00:28:11 --> 00:28:17
traffic do we allow vehicles to speed if

00:28:13 --> 00:28:18
they could avoid an accident is our

00:28:16 --> 00:28:20
desire for safety greater than our

00:28:17 --> 00:28:22
desire for legality these are the sort

00:28:19 --> 00:28:24
of ethical questions then I think are

00:28:21 --> 00:28:26
ally important these are things that

00:28:23 --> 00:28:27
need to be talked through because I

00:28:25 --> 00:28:30
believe if we actually have vehicles

00:28:26 --> 00:28:32
that follow the law nobody will want to

00:28:29 --> 00:28:34
drive with them and so we need to think

00:28:31 --> 00:28:36
about either ways of giving flexibility

00:28:33 --> 00:28:38
to the vehicles or to the law in the

00:28:35 --> 00:28:41
sense that vehicles can drive like

00:28:37 --> 00:28:43
humans do so this brings up some really

00:28:40 --> 00:28:46
interesting areas I think with respect

00:28:42 --> 00:28:47
o learning and programming and so the

00:28:45 --> 00:28:49
question is you know should our

00:28:46 --> 00:28:51
automated vehicles drive like humans and

00:28:48 --> 00:28:54
exhibit the same behavior that humans do

00:28:50 --> 00:28:57
r should they drive like robots and

00:28:53 --> 00:28:59
actually execute the way that the law

00:28:56 --> 00:29:02
tells them that they should drive

00:28:58 --> 00:29:04
obviously fixed rules can be one

00:29:01 --> 00:29:06
solution to this behavior learned from

00:29:03 --> 00:29:08
human drivers could be another solution

00:29:05 --> 00:29:12
to this we might have some sort of

00:29:07 --> 00:29:14
balance of different objectives that we

00:29:11 --> 00:29:16
do more analytically in terms of how

00:29:13 --> 00:29:17
much we want to obey the double yellow

00:29:15 --> 00:29:20
line when there are other things

00:29:16 --> 00:29:21
influencing it in the environment now

00:29:19 --> 00:29:22
hat's interesting is that is you start

00:29:20 --> 00:29:25
o think about this there's limits to

00:29:21 --> 00:29:26
any of these approaches in the extreme

00:29:24 --> 00:29:27
you know as we found with our

00:29:25 --> 00:29:29
self-driving racecar if you're not

00:29:26 --> 00:29:31
learning from experience

00:29:28 --> 00:29:34
you're not making use of all the data

00:29:30 --> 00:29:36
you're not gonna do as well and there's

00:29:33 --> 00:29:38
no way that you can possibly pre program

00:29:35 --> 00:29:42
an automated vehicle for every scenario

00:29:37 --> 00:29:44
it's going to encounter somehow you have

00:29:41 --> 00:29:46
to think about interpolating somehow you

00:29:43 --> 00:29:47
have to think about learning at the same

00:29:45 --> 00:29:51
time you can say well why don't we just

00:29:46 --> 00:29:54
measure humans well human error is

00:29:50 --> 00:29:56
actually the the cause or a factor the

00:29:53 --> 00:29:58
primary factor in 94 percent of

00:29:55 --> 00:30:02
accidents it's either a lack of judgment

00:29:57 --> 00:30:03
or lack of perception on the part of the

00:30:01 --> 00:30:07
human so if we're simply following

00:30:02 --> 00:30:09
humans we're actually only learning how

00:30:06 --> 00:30:11
ell humans can do things and we're

00:30:08 --> 00:30:13
leaving a lot on the table in terms of

00:30:10 --> 00:30:15
the potential of the car and so this is

00:30:12 --> 00:30:17
a really interesting discussion that I

00:30:14 --> 00:30:19
think will continue to be

00:30:16 --> 00:30:21
both in the development side of these

00:30:18 --> 00:30:23
vehicles in the policy side what is the

00:30:20 --> 00:30:25
right balance what do I want to learn

00:30:22 --> 00:30:29
versus what do I want a program how do I

00:30:24 --> 00:30:32
avoid leaving anything on the table here

00:30:28 --> 00:30:33
so because it's the point where you know

00:30:31 --> 00:30:35
I've had a bunch of slides with words

00:30:32 --> 00:30:37
here I want to give people a little bit

00:30:34 --> 00:30:43
of a sense for what you could be leaving

00:30:36 --> 00:30:45
on the table if in fact you don't adapt

00:30:42 --> 00:30:47
his is Marty

00:30:44 --> 00:30:50
marty is a DeLorean that we've been

00:30:46 --> 00:30:53
working with in my lab now DeLoreans are

00:30:49 --> 00:30:57
ally fantastic cars unless you want to

00:30:52 --> 00:30:59
accelerate brake or turn it really

00:30:56 --> 00:31:02
didn't do any of those things terribly

00:30:58 --> 00:31:05
well there's no power steering there's

00:31:01 --> 00:31:07
an underpowered engine and and very

00:31:04 --> 00:31:09
small brakes all of these things are

00:31:06 --> 00:31:11
fixable in fact what's nice about the

00:31:08 --> 00:31:14
DeLorean is it separates quite nicely

00:31:11 --> 00:31:17
the whole fiberglass tub comes up you

00:31:13 --> 00:31:19
can take out the engine you can take out

00:31:16 --> 00:31:22
he brakes you can make some

00:31:18 --> 00:31:24
modifications to the frame stiffen the

00:31:21 --> 00:31:27
suspension work with renova motors start

00:31:23 --> 00:31:32
up in Silicon Valley to put in a new

00:31:26 --> 00:31:35
electric drivetrain and put it all back

00:31:31 --> 00:31:36
together and when you do you come up

00:31:34 --> 00:31:39
with a car that's actually pretty darn

00:31:35 --> 00:31:40
fun and when we've programmed to drive

00:31:38 --> 00:31:44
itself this is Adam Savage from

00:31:39 --> 00:31:44
Mythbusters going along for a drive

00:31:44 --> 00:31:52
[Music]

00:31:50 --> 00:31:55
what do you see is Marnie doing

00:31:51 --> 00:31:57
something at a level of precision that

00:31:54 --> 00:31:58
we're pretty sure no human driver can

00:31:56 --> 00:31:59
meet Junior said there's no way he can

00:31:57 --> 00:32:04
do this you see it's going into a

00:31:58 --> 00:32:06
perfect drift doing a perfect doughnut

00:32:03 --> 00:32:13
around this cone and then it launches

00:32:05 --> 00:32:16
itself through the next gate sideways

00:32:12 --> 00:32:18
into the next cone now it's doing this

00:32:15 --> 00:32:19
you see it shoots through the gate

00:32:17 --> 00:32:21
missing those cones and then launches

00:32:18 --> 00:32:23
into a tight circle around the next cone

00:32:20 --> 00:32:25
it's actually doing this as sort of an

00:32:22 --> 00:32:27
algorithm similar to orbital mechanics

00:32:24 --> 00:32:29
if you think about how it's how it's

00:32:26 --> 00:32:33
actually orbiting these different points

00:32:28 --> 00:32:35
as it sets the trajectory now the limit

00:32:32 --> 00:32:37
on this as tires as you can see as it

00:32:34 --> 00:32:40
comes around here the tires disintegrate

00:32:36 --> 00:32:43
into many chunks flying at the camera as

00:32:39 --> 00:32:46
we do this but the the ability of the

00:32:42 --> 00:32:48
car to really continue even as the tires

00:32:45 --> 00:32:50
heat up to execute this pretty pretty

00:32:47 --> 00:32:52
nice trajectory here you see it going

00:32:49 --> 00:32:55
through the gates again and launching

00:32:51 --> 00:32:57
into a stable equilibrium putting pretty

00:32:54 --> 00:33:00
much the tire tracks right over where

00:32:56 --> 00:33:03
they were in the previous run and then

00:32:59 --> 00:33:06
finally ending so this is a sort of

00:33:02 --> 00:33:08
thing that I think is possible as you

00:33:05 --> 00:33:10
look at these vehicles there's a huge

00:33:07 --> 00:33:12
potential out there for these things to

00:33:09 --> 00:33:15
not drive about as well as an average

00:33:11 --> 00:33:18
human but to far exceed human

00:33:14 --> 00:33:21
performance in their abilities to use

00:33:17 --> 00:33:22
all the capabilities of the tires to do

00:33:20 --> 00:33:24
some amazing things so maybe that's not

00:33:21 --> 00:33:26
he way that you want your your daily

00:33:23 --> 00:33:28
drive to go although when we first

00:33:25 --> 00:33:30
posted some of this some of this video

00:33:27 --> 00:33:32
ne of the commenters was like I want

00:33:29 --> 00:33:35
his car that way I can like go into the

00:33:31 --> 00:33:37
store to buy donuts while it sits in the

00:33:34 --> 00:33:40
parking lot doing donuts wasn't a use

00:33:36 --> 00:33:42
case that I had thought of but that's

00:33:39 --> 00:33:45
one of one of the things that we thought

00:33:41 --> 00:33:47
of this really how if you limit yourself

00:33:44 --> 00:33:50
to only thinking about what the tires

00:33:46 --> 00:33:51
can do before they get to the saturation

00:33:49 --> 00:33:53
of the friction in the road you're only

00:33:50 --> 00:33:55
taking to account one class of

00:33:52 --> 00:33:58
trajectories there's a lot more beyond

00:33:54 --> 00:34:00
that that could be very advantageous in

00:33:57 --> 00:34:03
some emergency situations would it be

00:33:59 --> 00:34:04
great if the car had access to that now

00:34:02 --> 00:34:06
that's not a way that we're going to get

00:34:03 --> 00:34:08
if we only sort of monitor day to day

00:34:05 --> 00:34:11
driving we're not going to get that

00:34:07 --> 00:34:14
capability in our cars so one other

00:34:10 --> 00:34:16
aspect that came through in the in the

00:34:13 --> 00:34:18
policy which I think is extremely

00:34:15 --> 00:34:20
important as we think about neural

00:34:17 --> 00:34:22
networks and learning is this idea of

00:34:19 --> 00:34:24
data sharing and there's a huge

00:34:21 --> 00:34:26
potential to accelerate the development

00:34:23 --> 00:34:29
of automated vehicles if we can share

00:34:25 --> 00:34:31
some information about edge case

00:34:28 --> 00:34:33
scenarios in particular so if you think

00:34:30 --> 00:34:36
about trying to train a neural network

00:34:32 --> 00:34:38
to handle some extreme situations that's

00:34:35 --> 00:34:40
really much easier if your set of

00:34:37 --> 00:34:42
training data contains those extreme

00:34:39 --> 00:34:44
situations right so if you think about

00:34:41 --> 00:34:46
he weird things that can happen out on

00:34:43 --> 00:34:48
the road if you had a database of those

00:34:45 --> 00:34:50
and those comprised your training set

00:34:47 --> 00:34:51
you'd have a head start in terms of

00:34:49 --> 00:34:53
being able to get a neural net where I

00:34:50 --> 00:34:56
can begin to validate that it would work

00:34:52 --> 00:34:57
in these situations so the question is

00:34:55 --> 00:34:59
you know is there a way for the

00:34:56 --> 00:35:00
cosystem around self-driving cars to

00:34:58 --> 00:35:04
actually share some of this information

00:34:59 --> 00:35:07
so that different players can actually

00:35:03 --> 00:35:09
share some information about the

00:35:06 --> 00:35:11
critical situations and be able to make

00:35:08 --> 00:35:13
sure that if you learn something that

00:35:10 --> 00:35:15
yes you can make your cars safer but

00:35:12 --> 00:35:17
actually all the cars out on the road

00:35:14 --> 00:35:18
gets safer now clearly you need to

00:35:16 --> 00:35:20
balance this with some other

00:35:17 --> 00:35:21
considerations there's there's the

00:35:19 --> 00:35:24
intellectual property concerns of the

00:35:20 --> 00:35:27
company there's privacy concerns of any

00:35:23 --> 00:35:28
individuals who might be involved but it

00:35:26 --> 00:35:30
does seem to me that there's a big

00:35:27 --> 00:35:33
potential here to think about ways of

00:35:30 --> 00:35:36
sharing certain data that can contribute

00:35:32 --> 00:35:38
to safety and this is a discussion

00:35:35 --> 00:35:39
that's going to be ongoing and I think

00:35:37 --> 00:35:42
academia can do a lot to sort of help

00:35:38 --> 00:35:44
broker this discussion because you know

00:35:41 --> 00:35:45
the first level people say you know data

00:35:43 --> 00:35:46
sharing

00:35:44 --> 00:35:48
I don't know companies aren't going to

00:35:45 --> 00:35:50
share we're not going to get the

00:35:47 --> 00:35:52
information we need but most of the time

00:35:49 --> 00:35:53
people stay in the abstract as opposed

00:35:51 --> 00:35:56
to saying well what information would be

00:35:52 --> 00:35:57
most helpful what information it's

00:35:55 --> 00:35:59
really going to give people confidence

00:35:56 --> 00:36:02
in the safety of these cars it's gonna

00:35:58 --> 00:36:04
let regulators understand how they

00:36:01 --> 00:36:06
operate and at the same time is going to

00:36:03 --> 00:36:09
protect the amount of development effort

00:36:05 --> 00:36:10
hat companies put in there I think

00:36:08 --> 00:36:12
there is a solution here and in fact if

00:36:09 --> 00:36:14
you look at aviation there's a really

00:36:11 --> 00:36:16
good example that already exists it's

00:36:13 --> 00:36:17
known as the Esaias system it's started

00:36:15 --> 00:36:19
with only four Airlines

00:36:16 --> 00:36:22
that decided to share safety information

00:36:18 --> 00:36:24
with each other and this goes through

00:36:21 --> 00:36:26
mitre which is a federally funded R&D

00:36:23 --> 00:36:29
center and it's actually now up to 40

00:36:25 --> 00:36:31
Airlines and if companies get kicked out

00:36:28 --> 00:36:33
of the mitre a project they really try

00:36:30 --> 00:36:36
very hard to get back in now this is

00:36:32 --> 00:36:38
anonymized data its anonymized data so

00:36:35 --> 00:36:41
that you know companies actually get a

00:36:37 --> 00:36:43
ssessment of what their safety record

00:36:40 --> 00:36:45
is like and they can compare it to other

00:36:42 --> 00:36:47
airlines in the abstract but they can't

00:36:44 --> 00:36:49
compare it to any identifiable airline

00:36:46 --> 00:36:53
so there's no ranking of this it's not

00:36:48 --> 00:36:54
used for any enforcement techniques and

00:36:52 --> 00:36:57
it took people a long time to kind of

00:36:53 --> 00:36:59
build up and begin to share that but now

00:36:56 --> 00:37:00
there's a huge amount of trust and

00:36:58 --> 00:37:03
they're sharing more and more data and

00:36:59 --> 00:37:06
looking at ways that they can perhaps

00:37:02 --> 00:37:08
actually start to code in things like

00:37:05 --> 00:37:10
weather and time of day which had been

00:37:07 --> 00:37:12
removed for anonymization purposes and

00:37:09 --> 00:37:14
the original version of the system so I

00:37:11 --> 00:37:16
think there's some good examples out

00:37:13 --> 00:37:17
here and this is something that's very

00:37:15 --> 00:37:19
important to think about for automated

00:37:16 --> 00:37:21
vehicles and I think as this discussion

00:37:18 --> 00:37:23
goes forward those of you who are

00:37:20 --> 00:37:26
interested in developing these vehicles

00:37:22 --> 00:37:28
using techniques that rely on data are

00:37:25 --> 00:37:31
going to be an important voice for the

00:37:27 --> 00:37:33
importance of data sharing I think

00:37:30 --> 00:37:34
there's a there's a large role here to

00:37:32 --> 00:37:38
kind of make people aware that this

00:37:33 --> 00:37:41
actually does have value in the larger

00:37:37 --> 00:37:43
ecosystem so this is something that I

00:37:40 --> 00:37:46
was able to work on more broadly as well

00:37:42 --> 00:37:48
so I was part now is the d-o-t

00:37:45 --> 00:37:51
representative on the National Science

00:37:47 --> 00:37:53
and Technology Committee's Subcommittee

00:37:50 --> 00:37:55
on machine learning and artificial

00:37:52 --> 00:37:56
intelligence and this was one of the

00:37:54 --> 00:37:59
recommendations that was really pushed

00:37:55 --> 00:38:02
forward as well because AI has tended to

00:37:58 --> 00:38:04
really make great advances with the

00:38:01 --> 00:38:05
availability of good datasets and in

00:38:03 --> 00:38:08
order to make those sort of good

00:38:04 --> 00:38:10
advances in transportation this group is

00:38:07 --> 00:38:15
also advocating that those datasets need

00:38:09 --> 00:38:17
to be made broadly available so this is

00:38:14 --> 00:38:20
a little bit about the vision behind the

00:38:16 --> 00:38:23
automated vehicle policy what the

00:38:19 --> 00:38:25
goal was to really achieve here the idea

00:38:22 --> 00:38:27
of trying to move towards a proactive

00:38:24 --> 00:38:30
safety culture not to necessarily put in

00:38:26 --> 00:38:31
regulations prematurely and try to set

00:38:29 --> 00:38:33
standards

00:38:30 --> 00:38:35
honestly we don't know the best way to

00:38:32 --> 00:38:36
develop automated vehicles but to allow

00:38:34 --> 00:38:39
the government to kind of get involved

00:38:35 --> 00:38:41
in discussions with manufacturers early

00:38:38 --> 00:38:45
and be comfortable with what's going out

00:38:40 --> 00:38:47
on the roadway and actually to kind of

00:38:44 --> 00:38:48
help the u.s. to continue to play a

00:38:46 --> 00:38:50
leading role in this obviously if

00:38:47 --> 00:38:53
vehicles are going to be banned from the

00:38:49 --> 00:38:55
roads it would be very difficult for the

00:38:52 --> 00:38:57
country to continue to be a place where

00:38:54 --> 00:39:00
people could could test and develop this

00:38:56 --> 00:39:02
technology and then the belief really

00:38:59 --> 00:39:04
that there can be an acceleration of the

00:39:01 --> 00:39:06
safety benefits of this through data

00:39:03 --> 00:39:08
sharing so each car doesn't have to

00:39:05 --> 00:39:12
encounter all the weird situations

00:39:07 --> 00:39:15
itself but in fact can learn from what

00:39:11 --> 00:39:17
other vehicles experience and the idea

00:39:14 --> 00:39:19
is that really this is meant to be an

00:39:16 --> 00:39:21
evolving framework so it comes out as

00:39:18 --> 00:39:23
guidance it really generates

00:39:20 --> 00:39:25
conversations it generates best

00:39:22 --> 00:39:28
practices which can eventually evolved

00:39:24 --> 00:39:30
into standards and law and there's a

00:39:27 --> 00:39:32
huge opportunity here because the belief

00:39:29 --> 00:39:35
isn't that the National Highway Traffic

00:39:31 --> 00:39:36
Safety Administration will be doing all

00:39:34 --> 00:39:38
of the development of these best

00:39:35 --> 00:39:41
practices but that that'll really evolve

00:39:37 --> 00:39:43
from what companies do and what all of

00:39:40 --> 00:39:45
us at universities are able to do to

00:39:42 --> 00:39:48
sort of generate ways to solve these

00:39:44 --> 00:39:51
problems in creative manners ways to

00:39:47 --> 00:39:54
actually keep the innovation going but

00:39:50 --> 00:39:55
ensure that we have safety so as you

00:39:53 --> 00:39:57
start to think about all of the AI

00:39:54 --> 00:39:58
systems that you're developing and you

00:39:56 --> 00:40:00
start to flip around a little bit and

00:39:57 --> 00:40:02
think about how does a regulator gonna

00:39:59 --> 00:40:04
get comfortable that it's not going to

00:40:01 --> 00:40:06
do something weird these are great

00:40:03 --> 00:40:08
research questions I think these are

00:40:05 --> 00:40:09
great practical questions and these are

00:40:07 --> 00:40:12
things that will need to be worked out

00:40:08 --> 00:40:15
going forward so I you with that as a

00:40:12 --> 00:40:17
challenge to think about to think as you

00:40:14 --> 00:40:19
take this course not only about the

00:40:16 --> 00:40:21
technology that you're learning but how

00:40:18 --> 00:40:24
do you communicate that to other people

00:40:20 --> 00:40:25
and where are the gaps that need to be

00:40:23 --> 00:40:27
filled because I think you'll find some

00:40:24 --> 00:40:30
great opportunities for for research

00:40:26 --> 00:40:32
startup companies and ultimately work

00:40:29 --> 00:40:33
with policy and government there so

00:40:31 --> 00:40:35
thanks for the opportunity to talk to

00:40:32 --> 00:40:36
all of you and I want to stop there

00:40:34 --> 00:40:37
because probably the things that you

00:40:35 --> 00:40:39
want to talk about are more interesting

00:40:36 --> 00:40:40
than the things that I wanted to talk

00:40:38 --> 00:40:43
about so I'm happy to take questions

00:40:39 --> 00:40:43
along there

00:40:46 --> 00:40:51
good we had a quick hand here yeah

00:40:52 --> 00:41:00
accidents were part of our economies the

00:40:57 --> 00:41:02
xcess rates are extremely low do you

00:40:59 --> 00:41:12
think some of these safety requirements

00:41:01 --> 00:41:14
may roll back like I do I think that's a

00:41:11 --> 00:41:16
great question and okay so the question

00:41:13 --> 00:41:18
thanks for reminding me so the question

00:41:15 --> 00:41:21
was whether in the future when you have

00:41:17 --> 00:41:23
all vehicles automated would we be able

00:41:20 --> 00:41:25
to actually roll back things like

00:41:22 --> 00:41:26
airbags and seatbelts and other things

00:41:24 --> 00:41:30
that we have on there what we might know

00:41:25 --> 00:41:32
is as passive safety devices in vehicles

00:41:29 --> 00:41:34
I believe that we will in fact actually

00:41:31 --> 00:41:36
one of the things that I think is most

00:41:33 --> 00:41:38
extraordinary if you think about this

00:41:35 --> 00:41:41
from a sustainability standpoint when

00:41:37 --> 00:41:43
you look at the average sort of mass of

00:41:40 --> 00:41:45
vehicles and average occupancy of

00:41:42 --> 00:41:47
vehicles in the u.s. you know with

00:41:44 --> 00:41:49
single with passenger cars we're using

00:41:46 --> 00:41:51
maybe about ninety percent of the energy

00:41:48 --> 00:41:53
to move the vehicle as opposed to moving

00:41:50 --> 00:41:55
the people inside and one of the reasons

00:41:52 --> 00:41:56
for that is crashworthiness standards

00:41:54 --> 00:41:59
which are great because that's what's

00:41:55 --> 00:42:01
enabled us to be surviving these crashes

00:41:58 --> 00:42:02
at 40 miles an hour but if we do have

00:42:00 --> 00:42:05
hicles that are not going to crash or

00:42:01 --> 00:42:08
if they are going to have certain modes

00:42:04 --> 00:42:12
which might be designed with very

00:42:07 --> 00:42:14
carefully design you know crush areas or

00:42:11 --> 00:42:16
things like this we could potentially

00:42:13 --> 00:42:18
take a lot of that mass out particularly

00:42:15 --> 00:42:19
if these are low-speed vehicles which

00:42:17 --> 00:42:21
are designed only for the urban

00:42:18 --> 00:42:23
environment and they're not going to to

00:42:20 --> 00:42:25
crash because they're going to drive you

00:42:22 --> 00:42:27
know somewhat conservatively or in some

00:42:24 --> 00:42:29
ways separated from pedestrians then I

00:42:26 --> 00:42:32
think you can get a lot of the mass out

00:42:28 --> 00:42:34
and then you start to actually have

00:42:31 --> 00:42:36
transportation options which you know

00:42:33 --> 00:42:39
from an environmental standpoint are

00:42:35 --> 00:42:41
comparable to cycling so so I think I

00:42:38 --> 00:42:43
think that's actually a really really

00:42:40 --> 00:42:45
good goal to strive for although we

00:42:42 --> 00:42:47
ither have to kind of limit the

00:42:44 --> 00:42:50
nvironment or think in the far future

00:42:46 --> 00:42:50
with some of those techniques

00:42:55 --> 00:43:02
to apply it which you guys learn

00:43:03 --> 00:43:08
good yeah that's a great question so

00:43:06 --> 00:43:09
what are we what are we doing with

00:43:07 --> 00:43:12
Shelly is our mission really just to

00:43:08 --> 00:43:14
drive as fast as possible and faster

00:43:11 --> 00:43:15
than a human or are we trying to learn

00:43:13 --> 00:43:19
from this something that we can apply to

00:43:15 --> 00:43:22
ther automated vehicles it really is a

00:43:18 --> 00:43:23
desire to learn from other automated you

00:43:21 --> 00:43:25
know for the development of other

00:43:22 --> 00:43:27
automated vehicles and we've often said

00:43:24 --> 00:43:30
that at the point where you know the

00:43:26 --> 00:43:32
difference between Shelly's performance

00:43:29 --> 00:43:34
in the human driver you know starts to

00:43:31 --> 00:43:36
be really mundane things like you know

00:43:33 --> 00:43:38
our shift pattern or something which

00:43:35 --> 00:43:40
isn't applicable we kind of lose

00:43:37 --> 00:43:43
interest at that however you know up to

00:43:39 --> 00:43:45
this point every insight that we've

00:43:42 --> 00:43:48
gotten from Shelly has been directly

00:43:44 --> 00:43:51
transferable and we've programmed the

00:43:47 --> 00:43:52
car to do some emergency lane changes in

00:43:50 --> 00:43:54
situations where you don't have enough

00:43:51 --> 00:43:57
room to brake and we've actually been

00:43:54 --> 00:44:00
demonstrating in some cases that the car

00:43:56 --> 00:44:03
can can do this much faster than a human

00:43:59 --> 00:44:04
even an expert humans response can be so

00:44:02 --> 00:44:06
there's certain scenarios that we've

00:44:03 --> 00:44:08
done like that and I would say from the

00:44:05 --> 00:44:11
bigger picture what's really fascinating

00:44:07 --> 00:44:13
is that we originally started out with

00:44:10 --> 00:44:15
is idea of let's find the best path

00:44:12 --> 00:44:18
around the track and track it as close

00:44:14 --> 00:44:19
as we can but in fact when you look at

00:44:17 --> 00:44:21
human race car drivers what they're

00:44:18 --> 00:44:24
doing is actually very different they're

00:44:20 --> 00:44:26
pushing the car to the limits and then

00:44:23 --> 00:44:28
sort of seeing what paths that opens up

00:44:25 --> 00:44:30
to them and it flips the problem a bit

00:44:27 --> 00:44:33
on its head in a way that I think is

00:44:29 --> 00:44:35
actually very applicable for developing

00:44:32 --> 00:44:37
safety systems out on the road but it's

00:44:34 --> 00:44:39
not a way that people have looked at it

00:44:36 --> 00:44:41
o the best of my knowledge up to this

00:44:38 --> 00:44:43
point and so you know that's really what

00:44:40 --> 00:44:45
we're hoping is that the inspiration in

00:44:42 --> 00:44:47
trying to reproduce human performance

00:44:44 --> 00:44:49
there leads us to better safety

00:44:46 --> 00:44:51
algorithms so long you know so far

00:44:48 --> 00:44:52
that's been the case and when that

00:44:50 --> 00:44:56
ceases to be the case I think we are

00:44:51 --> 00:44:56
definitely much less interested

00:44:59 --> 00:45:07
yeah so so liability is a good question

00:45:03 --> 00:45:09
so what what who is liable if I can can

00:45:06 --> 00:45:12
sort of rephrase you know for an

00:45:08 --> 00:45:13
accident in an automated vehicle on the

00:45:11 --> 00:45:16
one hand that's kind of an open question

00:45:12 --> 00:45:19
the other hand we do have a court

00:45:15 --> 00:45:21
system and so whenever there are new

00:45:18 --> 00:45:23
technologies these things are actually

00:45:20 --> 00:45:24
generally figured out in the courts and

00:45:22 --> 00:45:28
it can be different from state to state

00:45:23 --> 00:45:29
so this is one aspect where you know

00:45:27 --> 00:45:31
potentially some discussions so that

00:45:28 --> 00:45:32
manufacturers aren't subject to

00:45:30 --> 00:45:35
different conditions in different states

00:45:31 --> 00:45:37
would be helpful but the way that it

00:45:34 --> 00:45:40
works now is that it's it's usually not

00:45:36 --> 00:45:43
binary we have in the US a sense of

00:45:39 --> 00:45:45
joint and several liability and so you

00:45:42 --> 00:45:48
can actually assign different portions

00:45:44 --> 00:45:50
of responsibility to different players

00:45:47 --> 00:45:53
in the game you have had companies like

00:45:49 --> 00:45:55
Volvo and in fact Google make statements

00:45:52 --> 00:45:56
that if there are vehicles are involved

00:45:54 --> 00:45:59
in accidents then they would expect to

00:45:55 --> 00:46:01
be liable for it so people have often

00:45:58 --> 00:46:05
talked about needing something really

00:46:00 --> 00:46:06
new for liability but I'm not sure

00:46:04 --> 00:46:08
that's the case we do have a court

00:46:05 --> 00:46:11
system that can ultimately figure out

00:46:07 --> 00:46:12
who is liable with new technologies and

00:46:10 --> 00:46:14
we have some manufacturers that are

00:46:11 --> 00:46:17
starting to make some statements about

00:46:13 --> 00:46:19
assuming product liability for that the

00:46:16 --> 00:46:20
one thing that really could be helpful

00:46:18 --> 00:46:21
as I mentioned is perhaps some

00:46:19 --> 00:46:23
harmonization because right now

00:46:20 --> 00:46:26
insurance is something that is set

00:46:22 --> 00:46:28
state-by-state and so the rules in one

00:46:25 --> 00:46:31
state as to who's at fault for an

00:46:27 --> 00:46:33
accident may be very different in

00:46:30 --> 00:46:33
another state

00:46:56 --> 00:47:02
okay so what what if companies you know

00:46:59 --> 00:47:05
as they send in the safety letters are

00:47:01 --> 00:47:07
using criteria to set safety that

00:47:04 --> 00:47:08
may not be broadly acceptable to

00:47:06 --> 00:47:11
the to the public whether the public

00:47:07 --> 00:47:13
would like these vehicles to have

00:47:10 --> 00:47:15
greater safety I think you know the the

00:47:12 --> 00:47:17
nice thing about this process is first

00:47:14 --> 00:47:20
of all we would know that right so we

00:47:16 --> 00:47:23
would have a sense that companies are

00:47:19 --> 00:47:25
developing with certain measures of

00:47:22 --> 00:47:28
safety in mind and there could actually

00:47:24 --> 00:47:32
be a discussion as to you know whether

00:47:27 --> 00:47:33
that is setting an acceptable level it's

00:47:31 --> 00:47:35
a difficult question because it's

00:47:32 --> 00:47:37
not clear that people really know

00:47:34 --> 00:47:40
hat an acceptable level is is it does

00:47:36 --> 00:47:42
it have to be safer than then humans

00:47:39 --> 00:47:45
drive now you know my personal feeling I

00:47:41 --> 00:47:50
would say yes and does it have to be

00:47:44 --> 00:47:52
much much safer well that that's hard to

00:47:49 --> 00:47:54
say you know you start to then get into

00:47:51 --> 00:47:56
the situation of we're comfortable to a

00:47:53 --> 00:47:58
certain extent with our existing legal

00:47:55 --> 00:48:00
system and with the fact that humans

00:47:57 --> 00:48:02
could cause errors that have fatal

00:47:59 --> 00:48:04
consequences do we feel the same way

00:48:01 --> 00:48:05
about machines right you know we tend to

00:48:03 --> 00:48:07
think the machines really should to have

00:48:04 --> 00:48:10
a higher level of perfection so we may

00:48:06 --> 00:48:11
as a society be less tolerant people

00:48:09 --> 00:48:14
will often say well so long as the

00:48:10 --> 00:48:16
overall national figures go down that

00:48:13 --> 00:48:18
would be good but that's really not

00:48:15 --> 00:48:21
going to matter much to the families who

00:48:17 --> 00:48:23
are impacted by an automated vehicle

00:48:20 --> 00:48:26
particularly if it's a if it's a

00:48:22 --> 00:48:28
scenario with very very bad optics and

00:48:25 --> 00:48:31
what do I mean by that it's if you think

00:48:27 --> 00:48:33
about the failures of mechanical systems

00:48:30 --> 00:48:35
because they're different than the

00:48:32 --> 00:48:38
failures of human beings they can often

00:48:34 --> 00:48:40
like look really bad right if you sort

00:48:37 --> 00:48:41
of think about a vehicle that doesn't

00:48:39 --> 00:48:44
detect something and then just continues

00:48:40 --> 00:48:47
to plow ahead you know visually that's

00:48:43 --> 00:48:48
really striking and that's the

00:48:46 --> 00:48:49
sort of thing that you know we'd get

00:48:47 --> 00:48:52
replayed and be in people's

00:48:48 --> 00:48:53
consciousness and raise some fears and

00:48:51 --> 00:48:55
so you

00:48:52 --> 00:48:57
I think that's that's an issue that's

00:48:54 --> 00:49:17
going to have to be have to be sorted

00:48:56 --> 00:49:20
out these are average being different

00:49:16 --> 00:49:27
you know between research in other parts

00:49:19 --> 00:49:30
of the world to exchange technologies

00:49:26 --> 00:49:32
yes so that's that's a good question

00:49:29 --> 00:49:34
what's being done really from a global

00:49:31 --> 00:49:36
standpoint to sort of share ideas to

00:49:33 --> 00:49:36
share research and to kind of work

00:49:35 --> 00:49:39
through some of these things

00:49:35 --> 00:49:41
particularly on the policy side so most

00:49:38 --> 00:49:43
of the auto manufacturers are global

00:49:40 --> 00:49:45
corporations and so a lot of the

00:49:42 --> 00:49:47
research in this is done in very

00:49:44 --> 00:49:49
different parts of the world so

00:49:46 --> 00:49:52
renault-nissan for instance is doing a

00:49:48 --> 00:49:54
lot in Silicon Valley in Europe and and

00:49:51 --> 00:49:56
in Japan and I think you see a lot of

00:49:53 --> 00:49:58
that with the different manufacturers

00:49:55 --> 00:50:00
one of the cool things that I got to do

00:49:57 --> 00:50:02
as part of my role was to go with the

00:49:59 --> 00:50:04
Secretary of Transportation to the g7

00:50:01 --> 00:50:07
transportation ministers meeting in

00:50:03 --> 00:50:10
Japan and address the ministers about

00:50:06 --> 00:50:12
sort of the the u.s. policy on on

00:50:09 --> 00:50:14
automated vehicles and one of the parts

00:50:11 --> 00:50:18
of that discussion was well the US has a

00:50:13 --> 00:50:21
very different set of rules so we have

00:50:17 --> 00:50:23
this manufacturer self certification as

00:50:20 --> 00:50:25
opposed to pre market certification but

00:50:22 --> 00:50:28
esting for instance is something that

00:50:24 --> 00:50:30
has to be done regardless so either it's

00:50:27 --> 00:50:33
testing that's done by a manufacturer or

00:50:29 --> 00:50:36
it's testing that's done by for instance

00:50:32 --> 00:50:38
in you know in Germany the the the tooth

00:50:35 --> 00:50:42
and other agencies that are responsible

00:50:37 --> 00:50:44
for for road safety and so the idea is

00:50:41 --> 00:50:46
maybe we should be sharing best

00:50:43 --> 00:50:48
practices on testing so we have a set of

00:50:45 --> 00:50:51
standard tests and then manufacturers

00:50:47 --> 00:50:52
across the globe could test to a certain

00:50:50 --> 00:50:54
set of standards that might be

00:50:51 --> 00:50:56
translated differently according to the

00:50:53 --> 00:50:58
policies and regulate or e environments

00:50:55 --> 00:51:01
in different countries so that was that

00:50:57 --> 00:51:03
was part of the idea that we advanced at

00:51:00 --> 00:51:10
he g7 and it seemed to kick off really

00:51:02 --> 00:51:12
well I never had a conscious decision on

00:51:09 --> 00:51:14
this I actually got a call from the

00:51:11 --> 00:51:16
White House one day you know and and you

00:51:13 --> 00:51:18
know I got this message just or this

00:51:15 --> 00:51:20
email you know I'm reaching out for the

00:51:17 --> 00:51:21
White House when you give my call you

00:51:19 --> 00:51:23
know give me a call back so of course I

00:51:20 --> 00:51:24
called back immediately and Pam Coleman

00:51:22 --> 00:51:26
on the other end of the line it's like I

00:51:23 --> 00:51:26
love doing that she's like you know when

00:51:25 --> 00:51:29
you're calling for the White House

00:51:25 --> 00:51:32
verybody returns your call and and so

00:51:28 --> 00:51:34
honestly you know the she said here's

00:51:31 --> 00:51:36
the situation we're looking at a lot of

00:51:33 --> 00:51:38
these areas in the Department of

00:51:35 --> 00:51:39
Transportation that seem to hit upon

00:51:37 --> 00:51:40
your areas of expertise we want to talk

00:51:38 --> 00:51:42
about where

00:51:39 --> 00:51:44
with you in some way the holy grail

00:51:41 --> 00:51:46
would be for you to come out and work in

00:51:43 --> 00:51:47
DC for a while and then I got a call

00:51:45 --> 00:51:49
from the Department of Transportation

00:51:46 --> 00:51:50
and they're like well we know you

00:51:48 --> 00:51:51
wouldn't want to come out to DC for a

00:51:49 --> 00:51:53
while oh my god

00:51:50 --> 00:51:55
try me could I do you no could I do cool

00:51:52 --> 00:51:57
stuff and could I make an impact and

00:51:54 --> 00:51:58
then you know I met with the Secretary

00:51:56 --> 00:52:00
of Transportation out in San Francisco

00:51:57 --> 00:52:02
and you know he assured me he's like you

00:51:59 --> 00:52:05
would be surprised you would be very

00:52:01 --> 00:52:07
surprised at how much of an impact you

00:52:04 --> 00:52:10
could have and this ended up being

00:52:06 --> 00:52:12
really true a lot of times this stuff

00:52:09 --> 00:52:13
moves quickly and people who are

00:52:11 --> 00:52:15
involved in policymaking may or may not

00:52:12 --> 00:52:17
have a technical background in this they

00:52:14 --> 00:52:20
may have come through the campaign for

00:52:16 --> 00:52:21
instance and then ended up in political

00:52:19 --> 00:52:23
roles yet the folks that I worked with

00:52:20 --> 00:52:24
we're really trying to get good

00:52:22 --> 00:52:26
information and make good decisions and

00:52:23 --> 00:52:28
so I just kept getting called in for

00:52:25 --> 00:52:30
advice on all sorts of things and I

00:52:27 --> 00:52:31
found that people actually really wanted

00:52:29 --> 00:52:35
to have that technical information and

00:52:30 --> 00:52:37
then used it so so that that's the way

00:52:34 --> 00:52:38
it happened it seemed like it was an

00:52:36 --> 00:52:39
opportunity to take things that I've

00:52:37 --> 00:52:42
worked on as I mentioned you know

00:52:38 --> 00:52:44
automated vehicles since 1992 and then

00:52:41 --> 00:52:45
to be part of this policy development

00:52:43 --> 00:52:47
which went really quickly it was a

00:52:44 --> 00:52:50
one-page outline when I arrived in

00:52:46 --> 00:52:52
February and then in September it rolled

00:52:49 --> 00:52:54
out and along the way it was all sorts

00:52:51 --> 00:52:57
of editing and negotiations the White

00:52:53 --> 00:53:01
House and other agencies fascinating

00:52:56 --> 00:53:03
process so so I kind of fell

00:53:00 --> 00:53:05
into this but you know as Lex mentioned

00:53:02 --> 00:53:08
I think I'm emerging as a policy wonk

00:53:04 --> 00:53:14
here because it was a it was a very fun

00:53:07 --> 00:53:17
experience you have a lot of companies

00:53:13 --> 00:53:18
that have somewhat of a monopoly on a

00:53:16 --> 00:53:21
lot of data especially like Google has

00:53:17 --> 00:53:22
o much more data available yeah a lot

00:53:20 --> 00:53:23
of the smaller startups

00:53:21 --> 00:53:27
how do you incentivize

00:53:22 --> 00:53:29
companies actually share their data good

00:53:26 --> 00:53:32
companies to share their data when they

00:53:28 --> 00:53:34
have an awful lot in invested in them in

00:53:31 --> 00:53:36
that in the gathering of that data and

00:53:33 --> 00:53:38
being able to process that data and I

00:53:35 --> 00:53:39
think the answer is to start small and

00:53:37 --> 00:53:41
to try to say are there certain high

00:53:38 --> 00:53:43
value things they could again make the

00:53:40 --> 00:53:45
public comfortable make policymakers

00:53:42 --> 00:53:48
comfortable that really aren't going to

00:53:44 --> 00:53:50
be a burden on the company you know so

00:53:47 --> 00:53:53
one of the you know one of the things

00:53:49 --> 00:53:55
that from the peloton standpoint that

00:53:52 --> 00:53:57
was bounced around at one points are our

00:53:54 --> 00:54:00
trucks actually use vehicle-to-vehicle

00:53:56 --> 00:54:02
communications as part of their link

00:53:59 --> 00:54:05
well when you do that you discover that

00:54:01 --> 00:54:07
here's actually an awful lot of places

00:54:04 --> 00:54:09
where that drops out because cell phone

00:54:06 --> 00:54:12
towers which are not supposed to be

00:54:08 --> 00:54:13
broadcasting on that frequency seem to

00:54:11 --> 00:54:15
create an awful lot of interference

00:54:12 --> 00:54:17
there well that can be very interesting

00:54:14 --> 00:54:19
from a public policy perspective to know

00:54:16 --> 00:54:22
you know where are you know we were sort

00:54:18 --> 00:54:23
of monitoring for incursions in that in

00:54:21 --> 00:54:25
that frequency range everywhere we go

00:54:22 --> 00:54:27
that for instance might be very useful

00:54:24 --> 00:54:30
piece of information to share with

00:54:26 --> 00:54:33
policymakers that wouldn't be any real

00:54:29 --> 00:54:35
proprietary issue to share from the

00:54:32 --> 00:54:36
company's perspective and so I think

00:54:34 --> 00:54:38
that the trick is to start small and

00:54:35 --> 00:54:41
find what are the high-value data where

00:54:37 --> 00:54:42
there isn't a big issue of sharing I

00:54:40 --> 00:54:44
mean if you go to Google and say all

00:54:41 --> 00:54:46
right Google what will it take for you

00:54:43 --> 00:54:48
to share all of the data you're

00:54:45 --> 00:54:51
acquiring from your entire self-driving

00:54:47 --> 00:54:54
car program I guess way mo now I think

00:54:50 --> 00:54:55
that would be a very big number and so I

00:54:53 --> 00:54:56
don't think that's the starting point I

00:54:54 --> 00:54:58
think you start with you know what is

00:54:55 --> 00:55:00
the high value data data that's of high

00:54:57 --> 00:55:03
value for the public policy sense and

00:54:59 --> 00:55:06
really minimal hassle to the to the

00:55:02 --> 00:55:09
companies I don't know how much longer

00:55:05 --> 00:55:11
I'm happy to stay in and and answer it

00:55:08 --> 00:55:16
answer as many questions but I know you

00:55:10 --> 00:55:18
have a class to run how are we okay good

00:55:15 --> 00:55:19
yes

00:55:17 --> 00:55:23
[Music]

00:55:18 --> 00:55:28
no standards for sharing that data

00:55:22 --> 00:55:31
ccident data simulations good is there

00:55:27 --> 00:55:34
any effort underway for for sharing map

00:55:30 --> 00:55:36
data some of the edge case accident data

00:55:33 --> 00:55:39
simulation capabilities and things like

00:55:35 --> 00:55:41
that this is one of the next steps that

00:55:38 --> 00:55:43
MIT se outlined in the policy and so

00:55:40 --> 00:55:45
there are people at admits actually

00:55:42 --> 00:55:46
working on taking some of these next

00:55:44 --> 00:55:50
steps again is sort of a pilot or

00:55:45 --> 00:55:51
prototype mode so so that's something

00:55:49 --> 00:55:53
that's that's currently being worked on

00:55:50 --> 00:55:55
in the in the department you could

00:55:52 --> 00:55:59
probably expect to hear more from in the

00:55:54 --> 00:55:59
not so distant future

00:56:10 --> 00:56:17
but executing our production our to be

00:56:14 --> 00:56:20
happy

00:56:16 --> 00:56:22
okay so the question is testing in urban

00:56:19 --> 00:56:24
d rural environments or even driving

00:56:21 --> 00:56:26
in urban and rural environments are very

00:56:23 --> 00:56:27
different in should that the government

00:56:25 --> 00:56:31
actually come up with a standard set of

00:56:26 --> 00:56:34
data that all companies have to attest

00:56:30 --> 00:56:36
o I think one of the reasons that the

00:56:33 --> 00:56:39
policy was designed the way it was was

00:56:35 --> 00:56:41
to make sure we have this concept of

00:56:38 --> 00:56:44
operational design domain so in fact if

00:56:40 --> 00:56:48
the only area that I've mapped and the

00:56:43 --> 00:56:51
only area that I want to drive is say in

00:56:47 --> 00:56:54
a campus environment or in one quarter

00:56:50 --> 00:56:56
square mile then then the idea is that

00:56:53 --> 00:56:58
we would like the companies to explain

00:56:55 --> 00:57:00
how they handle the eventualities in

00:56:57 --> 00:57:03
that one quarter square mile but they

00:56:59 --> 00:57:05
should really have no reason to handle

00:57:02 --> 00:57:07
other situations right because their

00:57:04 --> 00:57:09
vehicle won't encounter that so long as

00:57:06 --> 00:57:11
it's been designed to stay within its

00:57:08 --> 00:57:13
operational design domain so I think in

00:57:10 --> 00:57:16
the short term you know what you see is

00:57:12 --> 00:57:18
people often looking at hyperlocal

00:57:15 --> 00:57:20
solutions or kind of the low-hanging

00:57:17 --> 00:57:22
fruit for for a lot of automation and

00:57:19 --> 00:57:25
even if you think about offering

00:57:21 --> 00:57:28
mobility as a service if I'm gonna offer

00:57:24 --> 00:57:29
a sort of a an automated taxi I'm

00:57:27 --> 00:57:32
probably going to do that in a limited

00:57:28 --> 00:57:34
environment to start with and so if I'm

00:57:31 --> 00:57:36
only doing this in Cambridge does it

00:57:33 --> 00:57:38
really matter if I can drive in Mountain

00:57:35 --> 00:57:41
View or not and so you know I think the

00:57:37 --> 00:57:43
idea is to start with the definition of

00:57:40 --> 00:57:45
the operational design domain with a

00:57:42 --> 00:57:47
data set that is appropriate for that

00:57:44 --> 00:57:49
operational design domain and then as

00:57:46 --> 00:57:52
people's design domains start to expand

00:57:48 --> 00:57:54
nationwide then I think you know the

00:57:51 --> 00:57:56
idea of common data sets starts to be

00:57:53 --> 00:57:58
interesting although you

00:57:55 --> 00:57:59
know there is a sense that no finite

00:57:57 --> 00:58:01
data set is really going to capture

00:57:58 --> 00:58:04
very eventualities

00:58:00 --> 00:58:06
and so you know people will be able to

00:58:03 --> 00:58:08
develop or sort of you know design to

00:58:05 --> 00:58:10
the test in some ways is that sufficient

00:58:07 --> 00:58:13
I think it'll make people feel better

00:58:09 --> 00:58:15
but I I personally wonder how much value

00:58:12 --> 00:58:16
there is you know it seemed it with test

00:58:14 --> 00:58:18
rack testing I could think of 20

00:58:15 --> 00:58:20
different tests that automated vehicles

00:58:17 --> 00:58:22
will have to pass and people will design

00:58:19 --> 00:58:24
ways to pass all 20 of those tests it

00:58:21 --> 00:58:25
may make some people more comfortable

00:58:23 --> 00:58:27
but it doesn't make me all that much

00:58:24 --> 00:58:29
more comfortable that they'd be able to

00:58:26 --> 00:58:51
handle a real-world situation

00:58:28 --> 00:58:54
all right let's see could you could you

00:58:50 --> 00:58:55
make an open-source car under okay so

00:58:53 --> 00:58:57
the question is could you make an

00:58:54 --> 00:59:03
open-source car under the the guidance

00:58:56 --> 00:59:06
provided by us do t the question would

00:59:02 --> 00:59:08
be you know this from from a practical

00:59:05 --> 00:59:09
question you're supposed to submit a

00:59:07 --> 00:59:11
safety assessment letter which is

00:59:08 --> 00:59:15
upposed to be signed by somebody

00:59:10 --> 00:59:17
responsible for that and so an issue if

00:59:14 --> 00:59:19
you were to open source would be you

00:59:16 --> 00:59:22
know do I use this module and who is

00:59:18 --> 00:59:23
actually signing signing off on out what

00:59:21 --> 00:59:25
I feel comfortable signing off on

00:59:22 --> 00:59:29
something which I then allowed to be

00:59:24 --> 00:59:31
open source I you know not a lawyer but

00:59:28 --> 00:59:32
I would think that you know I don't

00:59:30 --> 00:59:34
hink there would be anything that would

00:59:31 --> 00:59:36
prevent that if you had a development

00:59:33 --> 00:59:38
eam that was doing that and people who

00:59:35 --> 00:59:41
are willing to sign off on whatever

00:59:37 --> 00:59:44
sion of the software was actually

00:59:40 --> 00:59:46
used in an open source car you know I

00:59:43 --> 00:59:50
will say that the the guidance does

00:59:45 --> 00:59:52
apply to universities or to or to other

00:59:49 --> 00:59:53
groups that would be putting a car out

00:59:51 --> 00:59:56
on the road and I think if you look

00:59:52 --> 01:00:00
through the 15 points they're not really

00:59:55 --> 01:00:01
meant to be overly restrictive in fact I

00:59:59 --> 01:00:03
would argue that pretty much any group

01:00:00 --> 01:00:07
that is going to sort of put real people

01:00:02 --> 01:00:09
at risk by by putting an automated

01:00:06 --> 01:00:10
vehicle out on the road should really

01:00:08 --> 01:00:11
have thought through these things so I

01:00:09 --> 01:00:15
don't think it's a I don't think it's a

01:00:10 --> 01:00:17
terribly high high burden to to meet I

01:00:14 --> 01:00:18
think it would be you know it would be

01:00:16 --> 01:00:20
me double by a group it's just a

01:00:17 --> 01:00:22
question would be you know from the open

01:00:19 --> 01:00:24
source sense how do you sort of trace

01:00:21 --> 01:00:28
who's responsible and who's signing off

01:00:23 --> 01:00:30
on that alright I think we gave those

01:00:27 --> 01:00:33
third graders or run for their money

01:00:29 --> 01:00:35
eah absolutely thank you so much let's

01:00:32 --> 01:00:37
give Chris a big hand

01:00:34 --> 01:00:40
great thanks a lot

01:00:36 --> 01:00:40
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
