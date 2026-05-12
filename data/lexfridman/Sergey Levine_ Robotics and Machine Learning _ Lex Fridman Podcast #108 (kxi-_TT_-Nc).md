---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "kxi-_TT_-Nc"
title: "Sergey Levine: Robotics and Machine Learning | Lex Fridman Podcast #108"
video_url: "https://www.youtube.com/watch?v=kxi-_TT_-Nc"
thumbnail_url: "https://i.ytimg.com/vi/kxi-_TT_-Nc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=kxi-_TT_-Nc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-07-14T16:00:40.000Z"
upload_date: "2020-07-14"
duration_seconds: 5850
duration_human: "1:37:30"
view_count: 169306
like_count: 2818
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:27:37.533Z"
---

# Sergey Levine: Robotics and Machine Learning | Lex Fridman Podcast #108

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=kxi-_TT_-Nc
- video_id: kxi-_TT_-Nc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-07-14T16:00:40.000Z
- upload_date: 2020-07-14
- duration: 1:37:30
- view_count: 169306
- like_count: 2818
- has_subtitle: true
- language: en
- availability: public
- tags: sergey levine, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

Sergey Levine is a professor at Berkeley and a world-class researcher in deep learning, reinforcement learning, robotics, and computer vision, including the development of algorithms for end-to-end training of neural network policies that combine perception and control, scalable algorithms for inverse reinforcement learning, and deep RL algorithms.

Support this podcast by signing up with these sponsors:
- ExpressVPN at https://www.expressvpn.com/lexpod
- Cash App - use code "LexPodcast" and download:
- Cash App (App Store): https://apple.co/2sPrUHe
- Cash App (Google Play): https://bit.ly/2MlvP5w

EPISODE LINKS:
Sergey's Twitter: https://twitter.com/svlevine
Sergey's Website: http://rail.eecs.berkeley.edu/
Sergey's Papers: https://scholar.google.com/citations?user=8R35rCwAAAAJ

PODCAST INFO:
Podcast website:
https://lexfridman.com/podcast
Apple Podcasts:
https://apple.co/2lwqZIr
Spotify:
https://spoti.fi/2nEwCF8
RSS:
https://lexfridman.com/feed/podcast/
Full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
3:05 - State-of-the-art robots vs humans
16:13 - Robotics may help us understand intelligence
22:49 - End-to-end learning in robotics
27:01 - Canonical problem in robotics
31:44 - Commonsense reasoning in robotics
34:41 - Can we solve robotics through learning?
44:55 - What is reinforcement learning?
1:06:36 - Tesla Autopilot
1:08:15 - Simulation in reinforcement learning
1:13:46 - Can we learn gravity from data?
1:16:03 - Self-play
1:17:39 - Reward functions
1:27:01 - Bitter lesson by Rich Sutton
1:32:13 - Advice for students interesting in AI
1:33:55 - Meaning of life

CONNECT:
- Subscribe to this YouTube channel
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/LexFridmanPage
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:07
Sergey Levine a professor at Berkeley

00:00:04 --> 00:00:09
and a world-class researcher in deep

00:00:06 --> 00:00:12
learning reinforcement learning robotics

00:00:08 --> 00:00:13
and computer vision including the

00:00:11 --> 00:00:16
development of algorithms for end-to-end

00:00:12 --> 00:00:19
training of neural network policies that

00:00:15 --> 00:00:20
combine perception and control scalable

00:00:18 --> 00:00:23
algorithms for inverse reinforcement

00:00:19 --> 00:00:26
learning and in general deep r.l

00:00:22 --> 00:00:29
algorithms quick summary of the ads to

00:00:25 --> 00:00:31
sponsors cash app and expressvpn please

00:00:28 --> 00:00:33
consider supporting the podcast by

00:00:30 --> 00:00:36
downloading cash app and using collects

00:00:32 --> 00:00:41
pot cast and signing up at expressvpn

00:00:35 --> 00:00:43
comm / flex pod click the links buy the

00:00:40 --> 00:00:45
stuff it's the best way to support this

00:00:42 --> 00:00:49
podcast and in general the journey I'm

00:00:44 --> 00:00:50
on if you enjoy this thing subscribe on

00:00:48 --> 00:00:52
YouTube review it with five stars an

00:00:49 --> 00:00:55
apple podcast follow on Spotify

00:00:51 --> 00:00:56
supported on patreon or connect with me

00:00:54 --> 00:00:59
on Twitter at lex

00:00:55 --> 00:01:01
friedman as usual i'll do a few minutes

00:00:58 --> 00:01:03
of as now and never any ads in the

00:01:00 --> 00:01:06
middle that can break the flow of the

00:01:02 --> 00:01:08
conversation this show is presented by

00:01:05 --> 00:01:11
cash app the number one finance app in

00:01:07 --> 00:01:13
the App Store when you get it used colex

00:01:10 --> 00:01:16
podcast cash app lets you send money to

00:01:12 --> 00:01:18
friends buy bitcoin and invest in the

00:01:15 --> 00:01:20
stock market with as little as one

00:01:17 --> 00:01:22
dollar since cash app does fractional

00:01:19 --> 00:01:24
share trading let me mention that the

00:01:21 --> 00:01:26
order execution algorithm that works

00:01:23 --> 00:01:29
behind the scenes to create the

00:01:25 --> 00:01:31
abstraction of the fractional orders is

00:01:28 --> 00:01:34
an algorithmic marvel so big props the

00:01:30 --> 00:01:35
cash app engineers are taking a step up

00:01:33 --> 00:01:37
to the next layer of abstraction over

00:01:34 --> 00:01:39
the stock market making trading more

00:01:36 --> 00:01:43
accessible for new investors and

00:01:38 --> 00:01:44
iversification much easier so again if

00:01:42 --> 00:01:48
you get cash out from the App Store

00:01:43 --> 00:01:51
Google Play and use the code lex podcast

00:01:47 --> 00:01:54
you get $10 and cash up will also donate

00:01:50 --> 00:01:56
$10 the first an organization that is

00:01:53 --> 00:01:59
helping to advanced robotics and stem

00:01:55 --> 00:02:01
education for young people around the

00:01:58 --> 00:02:05
world this show

00:02:00 --> 00:02:09
is also sponsored by expressvpn get it

00:02:04 --> 00:02:12
at expressvpn comm / Lex pod to support

00:02:08 --> 00:02:15
his podcast and to get an extra three

00:02:11 --> 00:02:17
months free on a one-year package I've

00:02:14 --> 00:02:19
been using expressvpn for many years I

00:02:16 --> 00:02:21
love it

00:02:18 --> 00:02:24
I think expressvpn is the best VPN out

00:02:20 --> 00:02:27
here they told me to say it but it

00:02:23 --> 00:02:29
happens to be true my humble opinion it

00:02:26 --> 00:02:31
doesn't lock your data it's crazy fast

00:02:28 --> 00:02:34
and as easy to use literally just one

00:02:30 --> 00:02:36
big power on button again it's probably

00:02:33 --> 00:02:39
obvious to you but I should say it again

00:02:35 --> 00:02:40
it's really important that they don't

00:02:38 --> 00:02:42
log your data

00:02:39 --> 00:02:45
it works on Linux and every other

00:02:41 --> 00:02:47
operating system but Linux of course is

00:02:44 --> 00:02:49
the best operating system shout out to

00:02:47 --> 00:02:52
my favorite flavor

00:02:48 --> 00:02:56
Ubuntu mottai 2004 once again get it at

00:02:51 --> 00:02:58
expressvpn calm / relax pod to support

00:02:55 --> 00:03:01
his podcast and to get an extra three

00:02:57 --> 00:03:04
months free on a one-year package and

00:03:00 --> 00:03:07
now here's my conversation sergey

00:03:03 --> 00:03:10
Lavigne what's the difference between a

00:03:06 --> 00:03:12
state-of-the-art human such as you and I

00:03:09 --> 00:03:14
well I don't know if we qualify Stata

00:03:11 --> 00:03:17
they're humans but a state-of-the-art

00:03:13 --> 00:03:19
human and a state-of-the-art robot it's

00:03:16 --> 00:03:22
a very interesting question

00:03:18 --> 00:03:25
robot capability is it's kind of a I

00:03:21 --> 00:03:28
think it's a very tricky thing to to

00:03:24 --> 00:03:29
understand because there are some things

00:03:27 --> 00:03:30
that are difficult that we wouldn't

00:03:28 --> 00:03:32
hink are difficult and some things that

00:03:29 --> 00:03:35
are easy that we wouldn't think ever you

00:03:31 --> 00:03:37
see and there's also a really big gap

00:03:34 --> 00:03:39
between capabilities of robots in terms

00:03:36 --> 00:03:41
of hardware and their physical

00:03:38 --> 00:03:43
capability and capabilities of robots in

00:03:40 --> 00:03:46
terms of what they can do autonomously

00:03:42 --> 00:03:48
there is a little video that I think

00:03:45 --> 00:03:49
robotics researchers really like to show

00:03:47 --> 00:03:52
a special Robotics learning researchers

00:03:48 --> 00:03:55
like myself from 2004 from Stanford

00:03:51 --> 00:03:57
which demonstrates a prototype robot

00:03:54 --> 00:03:59
called the PR one and the PR one was a

00:03:56 --> 00:04:00
robot that was designed as a home

00:03:58 --> 00:04:03
assistance robot and there's this

00:03:59 --> 00:04:05
beautiful video showing the pr1 tidying

00:04:02 --> 00:04:09
up a living room putting away toys and

00:04:04 --> 00:04:11
at the end bringing a beer to the person

00:04:08 --> 00:04:14
sitting on the couch which looks really

00:04:10 --> 00:04:14
amazing and then the punch line is that

00:04:13 --> 00:04:17
his

00:04:13 --> 00:04:19
entirely controlled by person yes so

00:04:16 --> 00:04:20
you can so that in some ways the gap

00:04:18 --> 00:04:22
between a state-of-the-art human

00:04:19 --> 00:04:24
state-of-the-art robot if the robot has

00:04:21 --> 00:04:26
a human brain is actually not that large

00:04:23 --> 00:04:27
now obviously like human bodies are

00:04:25 --> 00:04:29
sophisticated and very robust and

00:04:26 --> 00:04:32
resilient in many ways but on the whole

00:04:28 --> 00:04:33
if we're willing to like spend a bit of

00:04:31 --> 00:04:35
money and do a bit of engineering we can

00:04:32 --> 00:04:39
kind of close the hardware gap almost

00:04:34 --> 00:04:42
but the intelligence gap that one is

00:04:38 --> 00:04:43
very wide and when you say hardware you

00:04:41 --> 00:04:45
're referring to the physical sort of

00:04:42 --> 00:04:48
the actuators the actual body the robot

00:04:44 --> 00:04:50
is opposed to the hardware on which the

00:04:47 --> 00:04:51
cognition the nervous the hardware of

00:04:49 --> 00:04:53
the nervous system yes exactly I'm

00:04:50 --> 00:04:56
referring to the body rather than the

00:04:52 --> 00:04:58
mind so what so that means that the kind

00:04:55 --> 00:05:00
of the work is cut out for us like while

00:04:57 --> 00:05:01
we can still make the body better we

00:04:59 --> 00:05:04
kind of know that the big bottleneck

00:05:00 --> 00:05:07
right now is really the mind and how big

00:05:03 --> 00:05:09
is that gap how big is the how big is

00:05:06 --> 00:05:11
the difference in your in your sense of

00:05:08 --> 00:05:13
ability to learn a bit ability to reason

00:05:10 --> 00:05:18
ability to perceive the world between

00:05:12 --> 00:05:21
humans and our best robots the gap is

00:05:17 --> 00:05:24
very large and the gap becomes larger

00:05:20 --> 00:05:27
the more unexpected events can happen in

00:05:23 --> 00:05:30
the world so essentially the spectrum

00:05:26 --> 00:05:32
along which you can measure the the size

00:05:29 --> 00:05:33
of that gap is the spectrum of how open

00:05:31 --> 00:05:35
the world is if you control everything

00:05:32 --> 00:05:37
in the world very tightly if you put the

00:05:34 --> 00:05:39
robot in like a factory and you tell it

00:05:36 --> 00:05:42
where everything is and you rigidly

00:05:38 --> 00:05:43
program its motion then it can do things

00:05:41 --> 00:05:45
you know one might even say in a

00:05:42 --> 00:05:47
superhuman way it can move faster it's

00:05:44 --> 00:05:49
tronger it can lift up a car and things

00:05:46 --> 00:05:51
like that but as soon as anything starts

00:05:48 --> 00:05:53
to vary in the environment now it'll

00:05:50 --> 00:05:54
trip up and if many many things vary

00:05:52 --> 00:05:58
like they would like in your kitchen for

00:05:53 --> 00:06:01
example then things are pretty much like

00:05:57 --> 00:06:03
wide open now again we're gonna stick a

00:06:00 --> 00:06:07
bit on the philosophical questions but

00:06:02 --> 00:06:09
how much on the human side of the

00:06:06 --> 00:06:12
cognitive abilities in your sense is

00:06:08 --> 00:06:18
nature versus nurture so so how much of

00:06:11 --> 00:06:19
it is product of evolution and how much

00:06:17 --> 00:06:21
of it something we'll learn from sort of

00:06:18 --> 00:06:24
scratch yeah well from the day were born

00:06:20 --> 00:06:26
I'm going to read into your question as

00:06:23 --> 00:06:28
king about the implications of this

00:06:25 --> 00:06:30
for AI really

00:06:27 --> 00:06:33
by biologists I can't really like speak

00:06:29 --> 00:06:36
authoritative also until in garnet if if

00:06:32 --> 00:06:40
it's so if it's all about learning then

00:06:35 --> 00:06:43
there's more hope for am so the way that

00:06:39 --> 00:06:45
I look at this is that you know well

00:06:42 --> 00:06:48
first of course biology is very messy

00:06:44 --> 00:06:50
and it's if you ask the question how

00:06:47 --> 00:06:52
does a person do something or has a

00:06:49 --> 00:06:54
person's mind do something you come up

00:06:51 --> 00:06:55
with a bunch of hypotheses and

00:06:53 --> 00:06:58
oftentimes you can find support for many

00:06:54 --> 00:07:00
different often conflicting hypotheses

00:06:57 --> 00:07:03
one way that we can approach the

00:06:59 --> 00:07:05
question of what the implication of this

00:07:02 --> 00:07:08
for AI R is we can think about what's

00:07:04 --> 00:07:11
ufficient so you know maybe a person is

00:07:07 --> 00:07:12
from birth very very good at some things

00:07:10 --> 00:07:13
like for example recognizing faces

00:07:11 --> 00:07:15
there's a very strong evolutionary

00:07:12 --> 00:07:18
pressure to do that if you can recognize

00:07:14 --> 00:07:20
your mother's face then you're more

00:07:17 --> 00:07:22
likely to survive and therefore people

00:07:19 --> 00:07:23
are good at this but we can also ask

00:07:21 --> 00:07:25
like what's what's the minimum

00:07:22 --> 00:07:26
sufficient thing right and one of the

00:07:24 --> 00:07:28
ways that we can study the minimal

00:07:25 --> 00:07:30
sufficient thing is we could for example

00:07:27 --> 00:07:31
see what people do in unusual situations

00:07:29 --> 00:07:33
if you present them of things that

00:07:30 --> 00:07:35
evolution couldn't have prepared them

00:07:32 --> 00:07:37
for you know our daily lives actually do

00:07:34 --> 00:07:40
this to us all the time we we didn't

00:07:36 --> 00:07:42
evolve to deal with you know automobiles

00:07:39 --> 00:07:43
and spaceflight and whatever so they're

00:07:41 --> 00:07:46
all these situations that we can find

00:07:43 --> 00:07:48
ourselves in and we do very well they're

00:07:45 --> 00:07:50
like I can give you a joystick to

00:07:47 --> 00:07:52
control a robotic arm which you've never

00:07:49 --> 00:07:54
used before and you might be pretty bad

00:07:51 --> 00:07:55
for the first couple of seconds but if I

00:07:53 --> 00:07:58
tell you like your life depends on using

00:07:54 --> 00:08:00
this robotic arm to like open this door

00:07:57 --> 00:08:02
you'll probably manage it even though

00:07:59 --> 00:08:04
you've never seen this device before you

00:08:01 --> 00:08:05
even even ever used the joys to control

00:08:03 --> 00:08:09
us and you'll kind of muddle through it

00:08:04 --> 00:08:11
and that's not your evolved natural

00:08:08 --> 00:08:12
ability that's your fear flexibility

00:08:10 --> 00:08:14
our your adaptability and that's

00:08:11 --> 00:08:16
exactly why our current robotic systems

00:08:13 --> 00:08:20
really kind of fall flat but I wonder

00:08:15 --> 00:08:21
how much general almost what we think of

00:08:19 --> 00:08:24
as common sense

00:08:21 --> 00:08:27
pre-trained models underneath all that

00:08:23 --> 00:08:32
so that ability to adapt to a joystick

00:08:26 --> 00:08:34
is requires you to have a kind of you

00:08:31 --> 00:08:36
know I'm human so it's hard for me to

00:08:33 --> 00:08:38
introspect all the knowledge I have

00:08:35 --> 00:08:41
about the world but it seems like there

00:08:37 --> 00:08:42
might be an iceberg underneath of the

00:08:40 --> 00:08:44
amount of knowledge

00:08:41 --> 00:08:46
you actually bring to the table now

00:08:43 --> 00:08:48
that's kind of the open question there's

00:08:45 --> 00:08:49
absolutely an iceberg of knowledge that

00:08:47 --> 00:08:52
we bring to the table but I think it's

00:08:48 --> 00:08:53
very likely that iceberg of knowledge is

00:08:51 --> 00:08:57
actually built up over our lifetimes

00:08:52 --> 00:09:00
because we have you know we have a lot

00:08:56 --> 00:09:02
of prior experience to draw on and it

00:08:59 --> 00:09:05
kind of makes sense that the right way

00:09:01 --> 00:09:07
for us to you know to optimize our

00:09:04 --> 00:09:11
efficiency our evolutionary fitness and

00:09:06 --> 00:09:13
so on is to utilize all that experience

00:09:10 --> 00:09:15
to build up the best iceberg we can get

00:09:12 --> 00:09:17
and that's actually one you know well

00:09:14 --> 00:09:19
that sounds an awful lot like what

00:09:16 --> 00:09:20
machine learning actually does I think

00:09:18 --> 00:09:22
that for modern machine learning it's

00:09:19 --> 00:09:24
actually a really big challenge to take

00:09:21 --> 00:09:27
this unstructured massive experience and

00:09:23 --> 00:09:28
istill out something that looks like a

00:09:26 --> 00:09:30
common sense understanding of the world

00:09:27 --> 00:09:32
and perhaps part of that isn't it's not

00:09:29 --> 00:09:35
because something about machine learning

00:09:31 --> 00:09:37
itself is is broken or hard but because

00:09:34 --> 00:09:40
we've been a little too rigid in

00:09:36 --> 00:09:42
subscribing to a very supervised very

00:09:39 --> 00:09:43
rigid notion of learning you know kind

00:09:41 --> 00:09:45
of the input-output excess goes go to

00:09:42 --> 00:09:48
why sort of model and maybe what we

00:09:44 --> 00:09:51
really need to to do is to view the

00:09:47 --> 00:09:54
world more as like a massive experience

00:09:50 --> 00:09:55
that is not necessarily providing any

00:09:53 --> 00:09:57
rigid supervision but sort of providing

00:09:54 --> 00:09:58
many many instances of things that could

00:09:56 --> 00:10:00
be and then you take that and you

00:09:57 --> 00:10:04
distill it into some sort of common

00:09:59 --> 00:10:05
sense understanding I see what you're

00:10:03 --> 00:10:07
painting an optimistic beautiful

00:10:04 --> 00:10:09
picture especially from the robotics

00:10:06 --> 00:10:11
perspective because that means we just

00:10:08 --> 00:10:15
need to invest in both better learning

00:10:10 --> 00:10:17
algorithms figure out how we can get

00:10:14 --> 00:10:19
access to more and more data for those

00:10:16 --> 00:10:22
learning L goes to extract signal from

00:10:18 --> 00:10:25
and then accumulate that iceberg of

00:10:21 --> 00:10:27
knowledge it's a beautiful picture it's

00:10:24 --> 00:10:30
a hopeful one I think it's potentially a

00:10:26 --> 00:10:32
little bit more than just that and this

00:10:29 --> 00:10:33
this is where we perhaps reach the

00:10:31 --> 00:10:36
limits of our current understanding but

00:10:32 --> 00:10:38
one thing that I think that the research

00:10:35 --> 00:10:41
community hasn't really resolved in a

00:10:37 --> 00:10:42
satisfactory way is how much it matters

00:10:40 --> 00:10:44
where that experience comes from like

00:10:41 --> 00:10:46
you know do just like download

00:10:43 --> 00:10:49
everything on the intranet and cram it

00:10:45 --> 00:10:52
into essentially the 21st century analog

00:10:48 --> 00:10:55
of the giant language model and then see

00:10:51 --> 00:10:56
what happens or does it actually matter

00:10:54 --> 00:10:59
whether your machine

00:10:55 --> 00:11:01
xperiences the world or in a sense that

00:10:58 --> 00:11:03
actually attempts things observes the

00:11:00 --> 00:11:05
outcome of its actions and kind of

00:11:02 --> 00:11:07
augments the experience that way that it

00:11:04 --> 00:11:10
chooses which parts of the world it gets

00:11:06 --> 00:11:12
to interact with and observe and learn

00:11:09 --> 00:11:16
from right it may be that the world is

00:11:11 --> 00:11:19
o complex that simply obtaining a large

00:11:15 --> 00:11:23
mass of sort of iid samples of the world

00:11:18 --> 00:11:24
is is a very difficult way to go but if

00:11:22 --> 00:11:25
you are actually interacting with the

00:11:23 --> 00:11:28
world and essentially performing this

00:11:24 --> 00:11:30
ort of hard- mining by attempting what

00:11:27 --> 00:11:32
you think might work observing the

00:11:29 --> 00:11:34
sometimes happy and sometimes sad

00:11:31 --> 00:11:36
outcomes of that and augmenting your

00:11:33 --> 00:11:38
understanding using that experience and

00:11:35 --> 00:11:41
you're just doing this continually for

00:11:37 --> 00:11:42
many years maybe that sort of data in

00:11:40 --> 00:11:44
some sense is actually much more

00:11:41 --> 00:11:46
favourable to obtaining a common sense

00:11:43 --> 00:11:48
understanding well one reason we might

00:11:45 --> 00:11:51
hink that this is true is that you know

00:11:47 --> 00:11:53
the what we associate with common sense

00:11:50 --> 00:11:55
or lack of common sense is often

00:11:52 --> 00:11:57
characterized by the ability to reason

00:11:54 --> 00:12:00
about kind of counterfactual questions

00:11:56 --> 00:12:02
like you know I if I were to you know

00:11:59 --> 00:12:03
here I'm this bottle of water sitting on

00:12:01 --> 00:12:06
the table everything is fine far knock

00:12:02 --> 00:12:08
it over which I'm not going to do but if

00:12:05 --> 00:12:10
I were to do that what would happen and

00:12:07 --> 00:12:12
I know that nothing good would happen

00:12:09 --> 00:12:14
from that but if I have a bad

00:12:11 --> 00:12:15
understanding of the world I might think

00:12:13 --> 00:12:18
that that's a good way for me to like

00:12:14 --> 00:12:21
you know gain more utility if I actually

00:12:17 --> 00:12:23
go about the daily life doing the things

00:12:20 --> 00:12:24
that my current understanding of the

00:12:22 --> 00:12:27
world suggests will give me high utility

00:12:23 --> 00:12:31
in some ways I'll get exactly the the

00:12:26 --> 00:12:32
right supervision to tell me not to do

00:12:30 --> 00:12:34
those those bad things and to keep doing

00:12:31 --> 00:12:38
the good things so there's a spectrum

00:12:33 --> 00:12:40
between iid random walk through the

00:12:37 --> 00:12:43
space of data and then there's and what

00:12:39 --> 00:12:45
we humans do or I don't even know if we

00:12:42 --> 00:12:48
do it through optimal but there might be

00:12:44 --> 00:12:52
yond what so this open question that

00:12:47 --> 00:12:54
you raised where do you think systems

00:12:51 --> 00:12:57
intelligent systems that would be able

00:12:53 --> 00:12:59
to deal with this world fall can we do

00:12:56 --> 00:13:02
pretty well by reading all of Wikipedia

00:12:58 --> 00:13:05
sort of randomly sampling it like

00:13:01 --> 00:13:08
language models do or do we have to be

00:13:04 --> 00:13:11
xceptionally selective and intelligent

00:13:07 --> 00:13:14
about which aspects of the wall we eat

00:13:10 --> 00:13:15
chocolate so I think this is first an

00:13:13 --> 00:13:17
open scientific problem and I don't have

00:13:14 --> 00:13:20
like a clear answer but I can speculate

00:13:16 --> 00:13:23
a little bit and what I would speculate

00:13:19 --> 00:13:25
is that you don't need to be super super

00:13:22 --> 00:13:28
careful I think it's less about like

00:13:24 --> 00:13:30
being careful to avoid the useless stuff

00:13:27 --> 00:13:32
and more about making sure that you hit

00:13:29 --> 00:13:35
on the really important stuff so perhaps

00:13:31 --> 00:13:37
it's okay if you spend part of your day

00:13:34 --> 00:13:39
just you know guided by your curiosity

00:13:36 --> 00:13:42
visiting interesting regions of the of

00:13:38 --> 00:13:43
your state space but it's important for

00:13:41 --> 00:13:46
you to you know every once in a while

00:13:42 --> 00:13:49
make sure that you really try out the

00:13:45 --> 00:13:50
solutions that your current model of the

00:13:48 --> 00:13:52
world suggests might be effective and

00:13:49 --> 00:13:54
observe whether those solutions are

00:13:51 --> 00:13:57
working as you expect or not and perhaps

00:13:53 --> 00:13:59
ome of that is really essential to have

00:13:56 --> 00:14:01
kind of a perpetual improvement loop

00:13:58 --> 00:14:03
like this perpetual improvement loop is

00:14:00 --> 00:14:05
really like but that's really the key

00:14:02 --> 00:14:07
that's going to potentially

00:14:04 --> 00:14:09
distinguish the best current methods

00:14:06 --> 00:14:10
from the best methods of tomorrow in a

00:14:08 --> 00:14:14
sense how important do you think is

00:14:09 --> 00:14:17
exploration or total out-of-the-box

00:14:13 --> 00:14:20
thinking exploration in this space is

00:14:16 --> 00:14:21
you jump to totally different domain so

00:14:19 --> 00:14:22
you kind of mentioned there's an

00:14:20 --> 00:14:26
optimization problem you kind of kind of

00:14:21 --> 00:14:27
explore the specifics of a particular

00:14:25 --> 00:14:29
strategy whatever the thing you're

00:14:26 --> 00:14:32
trying to solve how important is it to

00:14:28 --> 00:14:34
explore totally outside of the

00:14:31 --> 00:14:36
strategies they've been working for you

00:14:33 --> 00:14:38
so far what's your intuition there yeah

00:14:35 --> 00:14:40
I think it's a very problem dependent

00:14:37 --> 00:14:42
kind of question and I think that that's

00:14:39 --> 00:14:46
actually you know in some ways that

00:14:41 --> 00:14:50
question gets at one of the big

00:14:45 --> 00:14:51
differences between sort of the classic

00:14:49 --> 00:14:55
formulation of a reinforcement learning

00:14:50 --> 00:14:57
problem and some of the sort of more

00:14:54 --> 00:14:58
open-ended reformulations of that

00:14:56 --> 00:15:00
problem that have been explored in

00:14:57 --> 00:15:01
recent years so classically

00:14:59 --> 00:15:03
reinforcement learning is framed as a

00:15:00 --> 00:15:06
problem of maximizing utility like any

00:15:02 --> 00:15:07
kind of rational AI agent and then

00:15:05 --> 00:15:10
anything you do is in service to

00:15:06 --> 00:15:14
maximizing that utility but a very

00:15:09 --> 00:15:16
interesting kind of way to look at

00:15:13 --> 00:15:17
I'm not necessary saying that's the best

00:15:15 --> 00:15:18
way to look at it but an interesting

00:15:16 --> 00:15:21
alternative way to look at these

00:15:17 --> 00:15:22
problems as as something where you first

00:15:20 --> 00:15:25
get to explore the world

00:15:21 --> 00:15:26
however you please and then afterwards

00:15:24 --> 00:15:29
you will be tasked with doing something

00:15:25 --> 00:15:30
and that might suggest to somewhat

00:15:28 --> 00:15:31
different solutions so if you don't know

00:15:29 --> 00:15:33
hat you're going to be tasked with

00:15:30 --> 00:15:34
doing and you just want to prepare

00:15:32 --> 00:15:36
yourself optimally for whatever you're

00:15:33 --> 00:15:38
uncertain future holds maybe then you

00:15:35 --> 00:15:41
will choose to attain some sort of

00:15:37 --> 00:15:44
coverage build up sort of an arsenal of

00:15:40 --> 00:15:45
cognitive tools if you will such that

00:15:43 --> 00:15:48
later on when someone tells you now your

00:15:44 --> 00:15:49
job is to fetch the coffee for me you'll

00:15:47 --> 00:15:51
be well prepared to undertake that task

00:15:48 --> 00:15:54
and that you see that as the modern

00:15:50 --> 00:15:56
formulation of the reinforcement

00:15:53 --> 00:15:59
learning problem as the kind of the more

00:15:55 --> 00:16:02
multi task the general intelligence kind

00:15:58 --> 00:16:04
of formulation I think that's one

00:16:01 --> 00:16:06
possible vision of where things might be

00:16:03 --> 00:16:08
headed I don't think that's by any means

00:16:05 --> 00:16:10
the mainstream or standard way of doing

00:16:07 --> 00:16:12
things and it's not like if I had to but

00:16:09 --> 00:16:15
I like it it's a beautiful vision so

00:16:11 --> 00:16:17
maybe you actually take a step back what

00:16:14 --> 00:16:19
is the goal of robotics what's the

00:16:16 --> 00:16:20
general problem of robotics of trying to

00:16:18 --> 00:16:23
solve you actually kind of painted two

00:16:19 --> 00:16:25
pictures here one of the narrow one is

00:16:22 --> 00:16:28
the general what in your view is the big

00:16:24 --> 00:16:33
problem of robotics again ridiculously

00:16:27 --> 00:16:34
philosophical questions I think that you

00:16:32 --> 00:16:36
know maybe there are two ways I can

00:16:33 --> 00:16:38
swer this question one is there's a

00:16:35 --> 00:16:42
very pragmatic problem which was like

00:16:37 --> 00:16:44
what would make robots what would sort

00:16:41 --> 00:16:46
of maximize the usefulness of robots and

00:16:43 --> 00:16:53
there the answer might be something like

00:16:45 --> 00:16:57
a system where a system that can perform

00:16:52 --> 00:16:59
whatever task a human user sets for it

00:16:56 --> 00:17:01
you know within the physical constraints

00:16:58 --> 00:17:03
of course if you tell it to teleport to

00:17:00 --> 00:17:04
another planet but probably can't do

00:17:02 --> 00:17:05
that but if you if you ask it to do

00:17:03 --> 00:17:07
something that's within its physical

00:17:04 --> 00:17:09
capability then potentially with a

00:17:06 --> 00:17:11
little bit of additional training or a

00:17:08 --> 00:17:12
little bit of additional trial and error

00:17:10 --> 00:17:14
it ought to be able to figure it out in

00:17:11 --> 00:17:16
much the same way as like a human tele

00:17:13 --> 00:17:17
operator ought to figure out how to

00:17:15 --> 00:17:21
drive the robot to do that that's kind

00:17:17 --> 00:17:23
of a very pragmatic view of what it

00:17:20 --> 00:17:26
would take to kind of solve the the

00:17:22 --> 00:17:28
robotics problem if you will but I think

00:17:25 --> 00:17:29
that there is a second answer and that

00:17:27 --> 00:17:31
answer that the answer is a lot closer

00:17:28 --> 00:17:33
to why I want to work on on robotics

00:17:30 --> 00:17:35
which is that I think it's it's less

00:17:32 --> 00:17:36
about what it would take to do a really

00:17:34 --> 00:17:38
good job

00:17:35 --> 00:17:40
in the world of robotics but more the

00:17:37 --> 00:17:41
other way around what robotics can bring

00:17:39 --> 00:17:43
to the table

00:17:40 --> 00:17:47
to help us understand artificial

00:17:42 --> 00:17:50
intelligence so your dream fundamentally

00:17:46 --> 00:17:51
is to understand intelligence yes I

00:17:49 --> 00:17:54
think that's the dream for many people

00:17:50 --> 00:17:56
who actually work in this space I think

00:17:53 --> 00:17:59
that there is there's something very

00:17:55 --> 00:18:00
pragmatic and very useful about studying

00:17:58 --> 00:18:02
robotics but I do think that a lot of

00:17:59 --> 00:18:04
people that go into this field actually

00:18:01 --> 00:18:07
ou know the things that they draw

00:18:03 --> 00:18:09
inspiration from are the potential for

00:18:06 --> 00:18:12
obots to like help us learn about

00:18:08 --> 00:18:14
intelligence and about ourselves that's

00:18:11 --> 00:18:18
fascinating that robotics is

00:18:13 --> 00:18:20
basically the space by which you can get

00:18:17 --> 00:18:22
closer to understanding the fundamentals

00:18:19 --> 00:18:24
of artificial intelligence so what is it

00:18:21 --> 00:18:26
about robotics that's different from

00:18:23 --> 00:18:28
some of the other approaches so if we

00:18:25 --> 00:18:30
look at some of the early breakthroughs

00:18:27 --> 00:18:32
in deep learning or in the computer

00:18:29 --> 00:18:34
vision space and the natural language

00:18:31 --> 00:18:37
processing there was really nice clean

00:18:33 --> 00:18:38
benchmarks that a lot of people competed

00:18:36 --> 00:18:39
on and thereby came out with a lot of

00:18:37 --> 00:18:42
building ideas what's the fundamental

00:18:38 --> 00:18:44
difference to you between computer

00:18:41 --> 00:18:47
vision purely define an image net and

00:18:43 --> 00:18:49
kind of the bigger robotics problem so

00:18:46 --> 00:18:54
there are a couple of things one is that

00:18:48 --> 00:18:56
with robotics you kind of have you kinda

00:18:53 --> 00:18:59
have to take away many of the crutches

00:18:55 --> 00:19:01
o you have to deal with with both the

00:18:58 --> 00:19:02
the particular problems of

00:19:00 --> 00:19:03
perception control and so on but you

00:19:01 --> 00:19:06
also have to deal with the integration

00:19:02 --> 00:19:08
of those things and you know classically

00:19:05 --> 00:19:10
we've always thought of the integration

00:19:07 --> 00:19:12
as kind of a separate problem so a class

00:19:09 --> 00:19:13
a kind of modular engineering approaches

00:19:11 --> 00:19:15
that we solve individual subproblems

00:19:12 --> 00:19:17
then wire them together and then the

00:19:14 --> 00:19:18
whole thing works and one of the things

00:19:16 --> 00:19:20
that we've been seeing over the last

00:19:17 --> 00:19:23
couple of decades is that well maybe

00:19:19 --> 00:19:25
studying the thing as a whole might lead

00:19:22 --> 00:19:26
to just like very different solutions

00:19:24 --> 00:19:28
now if we were to study the parts and

00:19:25 --> 00:19:31
wire them together so the integrative

00:19:27 --> 00:19:33
nature of robotics research helps us see

00:19:30 --> 00:19:35
you know the different perspectives on

00:19:32 --> 00:19:39
the problem another part of the answer

00:19:34 --> 00:19:42
is that with robotics it it casts a

00:19:38 --> 00:19:44
certain paradox into very clever relief

00:19:41 --> 00:19:47
so this is sometimes referred to as more

00:19:43 --> 00:19:50
of expert on the idea that in artificial

00:19:46 --> 00:19:52
intelligence things that are very

00:19:49 --> 00:19:54
hard for people can be very easy for

00:19:51 --> 00:19:55
machines and vice versa things that are

00:19:53 --> 00:19:59
very easy for people can be very hard

00:19:54 --> 00:20:01
for machines so you know integral and

00:19:58 --> 00:20:03
ifferential calculus is pretty

00:20:00 --> 00:20:05
difficult to learn for people but if you

00:20:02 --> 00:20:07
program a computer do it it can derive

00:20:04 --> 00:20:08
derivatives and integrals for you all

00:20:06 --> 00:20:11
day long without any trouble

00:20:07 --> 00:20:13
whereas some things like you know

00:20:10 --> 00:20:16
drinking from a cup of water very easy

00:20:12 --> 00:20:18
for a person to do very hard for a robot

00:20:15 --> 00:20:21
o deal with and sometimes when we see

00:20:17 --> 00:20:22
such blatant discrepancies that give us

00:20:20 --> 00:20:24
a really strong hint that we're missing

00:20:21 --> 00:20:26
something important so if we really try

00:20:23 --> 00:20:28
to zero in on those discrepancies we

00:20:25 --> 00:20:29
might find that little bit that we're

00:20:27 --> 00:20:32
missing and it's not that we need to

00:20:28 --> 00:20:34
make machines better or worse at math

00:20:31 --> 00:20:35
and better at drinking water but just

00:20:33 --> 00:20:39
hat by studying those discrepancies you

00:20:34 --> 00:20:41
might find some new insight so that that

00:20:38 --> 00:20:43
could be that could be in any space it

00:20:40 --> 00:20:46
doesn't have to be robotics but you're

00:20:42 --> 00:20:48
saying yeah I get it's kind of

00:20:45 --> 00:20:51
interesting that robotics seems to have

00:20:47 --> 00:20:54
a lot of those discrepancies so the the

00:20:50 --> 00:20:56
Hans more of a paradox is probably

00:20:53 --> 00:20:57
referring to the space of the the

00:20:55 --> 00:21:00
physical interaction I think you said

00:20:56 --> 00:21:03
object manipulation walking all the kind

00:20:59 --> 00:21:07
of stuff we do in the physical world

00:21:02 --> 00:21:11
that well how do you make sense if you

00:21:06 --> 00:21:14
were to try to disentangle the the

00:21:10 --> 00:21:19
Marwick paradox like why is there such a

00:21:13 --> 00:21:21
gap in our intuition about it why do you

00:21:18 --> 00:21:23
think manipulating objects is so hard

00:21:20 --> 00:21:25
from everything you've learned from

00:21:22 --> 00:21:30
applying reinforcement learning in this

00:21:24 --> 00:21:33
pace yeah I think that one reason is

00:21:29 --> 00:21:34
maybe that for many of the problems for

00:21:32 --> 00:21:37
many of the other problems that we've

00:21:33 --> 00:21:41
studied in AI and computer science and

00:21:36 --> 00:21:43
so on the notion of input/output and

00:21:40 --> 00:21:45
supervision is much much cleaner so

00:21:42 --> 00:21:47
computer vision for example deals with

00:21:44 --> 00:21:50
very complex inputs but it's

00:21:46 --> 00:21:53
comparatively a bit easier at least up

00:21:49 --> 00:21:54
to some level of abstraction to cast it

00:21:52 --> 00:21:57
as a very tightly supervised problem

00:21:53 --> 00:21:59
it's comparatively much much harder to

00:21:56 --> 00:22:02
cast robotic manipulation as a very

00:21:58 --> 00:22:03
tightly supervised problem you can do it

00:22:01 --> 00:22:04
just doesn't

00:22:02 --> 00:22:07
work all that well so you could say that

00:22:03 --> 00:22:08
well maybe we get a label data set where

00:22:06 --> 00:22:11
we know exactly which motor commands to

00:22:07 --> 00:22:13
send and then we train on that but for

00:22:10 --> 00:22:15
various reasons that's not actually like

00:22:12 --> 00:22:17
such a great solution and it also

00:22:14 --> 00:22:18
doesn't seem to be even remotely similar

00:22:16 --> 00:22:20
to how people and animals learn to do

00:22:17 --> 00:22:23
things because we're not told by like

00:22:19 --> 00:22:26
our parents here is how you fire your

00:22:22 --> 00:22:28
muscles in order to walk we you know we

00:22:25 --> 00:22:29
do get some guidance but the really

00:22:27 --> 00:22:31
low-level detailed stuff we figure out

00:22:28 --> 00:22:32
most of them our own and that's what you

00:22:30 --> 00:22:35
mean by tightly coupled that every

00:22:31 --> 00:22:37
single little sub action gets a

00:22:34 --> 00:22:39
supervised signal of whether it's a good

00:22:36 --> 00:22:41
one or not right so so while in computer

00:22:38 --> 00:22:42
vision you could sort of imagine up to a

00:22:40 --> 00:22:44
level of abstraction that maybe you know

00:22:41 --> 00:22:46
somebody told you this is a car and this

00:22:43 --> 00:22:48
a cat and this is a dog in motor

00:22:45 --> 00:22:51
control it's very clear that that was

00:22:47 --> 00:22:56
not the case if we look I said of the

00:22:50 --> 00:22:58
sub spaces of Robotics that again as you

00:22:55 --> 00:23:00
said robotics integrates all of them

00:22:57 --> 00:23:02
together and we'll get to see how this

00:22:59 --> 00:23:05
beautiful mess into place but so there's

00:23:01 --> 00:23:06
nevertheless still perception so it's

00:23:04 --> 00:23:09
the the computer vision problem

00:23:05 --> 00:23:12
broadly speaking understanding the

00:23:08 --> 00:23:13
nvironment then there's also maybe you

00:23:11 --> 00:23:15
can correct me on this kind of

00:23:12 --> 00:23:19
categorization of the space then there's

00:23:14 --> 00:23:21
prediction in trying to anticipate what

00:23:18 --> 00:23:24
hings are going to do into the future

00:23:20 --> 00:23:26
in order for you to be able to act in

00:23:23 --> 00:23:30
that world and then there's also this

00:23:25 --> 00:23:33
game theoretic aspect of how your

00:23:29 --> 00:23:37
actions will change the behavior of

00:23:32 --> 00:23:38
others in this kind of space what and

00:23:36 --> 00:23:40
this is bigger than reinforcement

00:23:37 --> 00:23:42
learning this is just broadly looking at

00:23:39 --> 00:23:45
he problem of Robotics what's the

00:23:41 --> 00:23:50
hardest problem here or is there or is

00:23:44 --> 00:23:52
what you said true that when you start

00:23:49 --> 00:23:55
o look at all of them together that's

00:23:51 --> 00:23:57
an int that's a whole nother thing like

00:23:54 --> 00:23:59
you can't even say which one

00:23:56 --> 00:24:00
individually is harder because all of

00:23:58 --> 00:24:02
them together you should only be looking

00:23:59 --> 00:24:04
at them all together I think when you

00:24:01 --> 00:24:06
look at them all together some things

00:24:03 --> 00:24:08
actually become easier and I think

00:24:05 --> 00:24:13
that's actually pretty important so we

00:24:07 --> 00:24:15
had you know back in 2014 we had some

00:24:12 --> 00:24:16
work basically our first work on end to

00:24:14 --> 00:24:17
end

00:24:15 --> 00:24:19
enforced learning for robotic

00:24:16 --> 00:24:21
manipulation skills from vision which

00:24:18 --> 00:24:24
you know at the time was something that

00:24:20 --> 00:24:26
seemed a little inflammatory and

00:24:23 --> 00:24:29
controversial in the robotics world but

00:24:25 --> 00:24:30
other than the the inflammatory and

00:24:28 --> 00:24:31
controversial part of it

00:24:29 --> 00:24:34
he point that we were actually trying

00:24:30 --> 00:24:36
to make in that work is that for the

00:24:33 --> 00:24:37
particular case of combining perception

00:24:35 --> 00:24:39
and control you could actually do better

00:24:36 --> 00:24:41
if you treat them together then if you

00:24:38 --> 00:24:43
try to separate them and the way that we

00:24:40 --> 00:24:44
try to demonstrate this as we picked a

00:24:42 --> 00:24:47
fairly simple motor control task where a

00:24:43 --> 00:24:50
robot had to insert a little red

00:24:46 --> 00:24:53
trapezoid into a trapezoidal hole and we

00:24:49 --> 00:24:55
had our separated solution which

00:24:52 --> 00:24:57
involved first detecting the hole using

00:24:54 --> 00:24:59
a pose detector and then actuated arm to

00:24:56 --> 00:25:01
put it in and then our intent solution

00:24:58 --> 00:25:04
which just mapped pixels to the torques

00:25:00 --> 00:25:06
and one of the things we observed is

00:25:03 --> 00:25:07
that if you use the intense solution

00:25:05 --> 00:25:08
essentially the pressure on the

00:25:06 --> 00:25:10
perception part of the model is actually

00:25:07 --> 00:25:11
lower like it doesn't have to figure out

00:25:09 --> 00:25:14
exactly where the thing is in 3d space

00:25:10 --> 00:25:16
it just needs to figure out where it is

00:25:14 --> 00:25:18
you know distributing the errors in such

00:25:15 --> 00:25:19
a way that the horizontal difference

00:25:17 --> 00:25:20
matters more than the vertical

00:25:18 --> 00:25:21
difference because vertically just

00:25:19 --> 00:25:23
pushes it down all the way until it

00:25:20 --> 00:25:25
can't go any further and their

00:25:22 --> 00:25:27
perceptual errors are a lot less harmful

00:25:24 --> 00:25:28
whereas a perpendicular to the direction

00:25:26 --> 00:25:31
of motion perceptual errors are much

00:25:27 --> 00:25:33
more harmful so the point is that if you

00:25:30 --> 00:25:35
combine these two things you can trade

00:25:32 --> 00:25:38
off errors between the components

00:25:34 --> 00:25:40
optimally to best accomplish the task

00:25:37 --> 00:25:41
and the components can should be weaker

00:25:39 --> 00:25:45
while still leading to better overall

00:25:40 --> 00:25:47
performance as a profound idea I mean in

00:25:44 --> 00:25:50
the space of pegs and things like

00:25:46 --> 00:25:54
that is quite simple it almost is

00:25:49 --> 00:25:56
tempting to overlook but that's seems to

00:25:53 --> 00:25:58
be at least intuitively an idea that

00:25:55 --> 00:26:01
should generalize to basically all

00:25:57 --> 00:26:03
aspects of perception control of course

00:26:00 --> 00:26:05
when one strengthens the other yeah and

00:26:02 --> 00:26:08
we you know people who have studied

00:26:04 --> 00:26:09
sort of perceptual heuristics in humans

00:26:07 --> 00:26:11
and animals find things like that all

00:26:08 --> 00:26:12
the time so one one very well-known

00:26:10 --> 00:26:15
example this is something called the

00:26:11 --> 00:26:17
gaze heuristic which is a little trick

00:26:14 --> 00:26:19
that you can use to intercept a flying

00:26:16 --> 00:26:21
object so if you want to catch a ball

00:26:18 --> 00:26:23
for instance you could try to localize

00:26:20 --> 00:26:24
it in 3d space estimate its velocity

00:26:22 --> 00:26:26
estimate the effect of wind resistance

00:26:23 --> 00:26:30
solve a complex system of differential

00:26:25 --> 00:26:32
equations in your head or you can

00:26:29 --> 00:26:34
maintain a running speed so the object

00:26:31 --> 00:26:35
stays in the same position as in your

00:26:33 --> 00:26:37
field of view so if it dips a little bit

00:26:34 --> 00:26:39
you speed up if it rises a little bit

00:26:36 --> 00:26:40
you slow down and if you follow the

00:26:38 --> 00:26:42
simple rule you'll actually arrive at

00:26:39 --> 00:26:44
exactly the place where the object lands

00:26:41 --> 00:26:46
and you'll catch it and humans use it

00:26:43 --> 00:26:48
when they play baseball human pilots use

00:26:45 --> 00:26:49
it when they fly airplanes to figure out

00:26:47 --> 00:26:51
if they're about to collide with

00:26:48 --> 00:26:53
somebody frogs use this to catch insects

00:26:50 --> 00:26:54
and so on and so on so this is something

00:26:52 --> 00:26:56
that actually happens in nature and I'm

00:26:53 --> 00:26:57
sure this is just one instance of it

00:26:55 --> 00:26:59
hat we were able to identify just

00:26:56 --> 00:27:00
because it's you know that scientists

00:26:58 --> 00:27:02
are able to identify that goes so

00:26:59 --> 00:27:05
prevalent with our probably many others

00:27:01 --> 00:27:06
do you ever just who can zoom in as we

00:27:04 --> 00:27:10
talk about robotics they have a

00:27:05 --> 00:27:12
canonical problem sort of a simple clean

00:27:09 --> 00:27:15
beautiful representative problem in

00:27:11 --> 00:27:16
robotics they you think about when

00:27:14 --> 00:27:18
you're thinking about some of these

00:27:15 --> 00:27:20
problems we talked about robotic

00:27:17 --> 00:27:24
manipulation to me that seems

00:27:19 --> 00:27:26
intuitively at least the robotics

00:27:23 --> 00:27:29
community is converging towards that as

00:27:25 --> 00:27:32
a space that's the canonical problem if

00:27:28 --> 00:27:34
you agree that maybe you zoom in in some

00:27:31 --> 00:27:36
particular aspect of that problem that

00:27:33 --> 00:27:39
you just like like if we solve that

00:27:35 --> 00:27:43
problem perfectly it'll unlock a major

00:27:38 --> 00:27:46
step in towards human level intelligence

00:27:42 --> 00:27:48
I don't think I have like a really great

00:27:45 --> 00:27:50
answer to that and I think partly the

00:27:47 --> 00:27:54
reason I don't have a great answer kind

00:27:49 --> 00:27:56
of has to do with the it has to do with

00:27:53 --> 00:27:57
e fact that the difficulty is really

00:27:55 --> 00:28:00
in the flexibility and adaptability

00:27:56 --> 00:28:04
rather than in doing a particular thing

00:27:59 --> 00:28:06
really really well so it's hard to just

00:28:03 --> 00:28:09
say like oh if you can I don't know like

00:28:05 --> 00:28:11
shuffle a deck of cards as fast as like

00:28:08 --> 00:28:13
a Vegas right a casino dealer then

00:28:10 --> 00:28:16
you'll you'll be very proficient it's

00:28:12 --> 00:28:22
really the ability to quickly figure out

00:28:15 --> 00:28:25
how to do some arbitrary new thing well

00:28:21 --> 00:28:27
enough so like you know to move on to

00:28:24 --> 00:28:30
the next arbitrary thing but the the

00:28:26 --> 00:28:35
source of newness and uncertainty have

00:28:30 --> 00:28:39
you found problems in which it's easy to

00:28:34 --> 00:28:42
generate new noonah sness messes yeah

00:28:38 --> 00:28:44
new types of newness yeah so

00:28:41 --> 00:28:47
a few years ago is so if you'd asked me

00:28:43 --> 00:28:49
this question around like 2016 maybe I

00:28:46 --> 00:28:51
would have probably said that robotic

00:28:48 --> 00:28:53
grasping is a really great example of

00:28:50 --> 00:28:56
that because it's a task with great

00:28:52 --> 00:28:58
real-world utility like you will get a

00:28:55 --> 00:29:00
lot of money if you can do it well when

00:28:57 --> 00:29:03
is the robotic grasping picking up any

00:28:59 --> 00:29:05
object with a robotic hand exactly so

00:29:03 --> 00:29:07
you'll get a lot of money if you do it

00:29:04 --> 00:29:09
well because lots of people want to run

00:29:06 --> 00:29:11
warehouses with robots and it's highly

00:29:08 --> 00:29:14
non-trivial because very different

00:29:10 --> 00:29:16
objects will require very different

00:29:13 --> 00:29:19
grasping strategies but actually since

00:29:15 --> 00:29:21
then people have gotten really good at

00:29:18 --> 00:29:23
building systems to solve this problem

00:29:20 --> 00:29:25
as to the point where I'm not actually

00:29:22 --> 00:29:29
sure how much more progress we can make

00:29:24 --> 00:29:32
with that as like the main guiding thing

00:29:28 --> 00:29:33
but it's kind of interesting to see the

00:29:31 --> 00:29:35
kind of methods that have what actually

00:29:32 --> 00:29:38
worked well in that space because a

00:29:34 --> 00:29:40
robotic grasping classically used to be

00:29:37 --> 00:29:43
regarded very much as kind of an almost

00:29:39 --> 00:29:45
like a geometry problem so you people

00:29:42 --> 00:29:47
who have studied the history of computer

00:29:44 --> 00:29:49
vision will find this very familiar that

00:29:46 --> 00:29:50
it's kind of in the same way that in the

00:29:48 --> 00:29:51
arly days of computer vision people

00:29:49 --> 00:29:54
thought of it very much it's like an

00:29:50 --> 00:29:55
inverse graphics thing in robotic

00:29:53 --> 00:29:57
grasping people thought of it as an

00:29:54 --> 00:29:59
inverse physics problem essentially you

00:29:56 --> 00:30:01
look at what's in front of you figure

00:29:58 --> 00:30:03
out the shapes then use your best

00:30:00 --> 00:30:04
imate of the laws of physics to

00:30:02 --> 00:30:07
figure out where to put your fingers on

00:30:03 --> 00:30:08
you pick up the thing and it turns out

00:30:06 --> 00:30:11
hat what works really well for robotic

00:30:07 --> 00:30:13
grasping instantiated in many different

00:30:10 --> 00:30:16
recent works including our own but also

00:30:12 --> 00:30:18
nes from many other labs is to use

00:30:15 --> 00:30:21
learning methods with some combination

00:30:17 --> 00:30:22
of either exhaustive simulation or like

00:30:20 --> 00:30:24
actual real-world trial-and-error and

00:30:21 --> 00:30:25
turns out that those things actually

00:30:23 --> 00:30:27
work really well and then you don't have

00:30:24 --> 00:30:32
to worry about solving geometry problems

00:30:26 --> 00:30:33
or physics problems so what are just by

00:30:31 --> 00:30:36
the way and the grasping what are the

00:30:32 --> 00:30:38
difficulties that have been worked on so

00:30:35 --> 00:30:41
ne is like the materials of things

00:30:37 --> 00:30:43
maybe occlusions and the perception side

00:30:40 --> 00:30:45
why is it such a difficult why is

00:30:42 --> 00:30:48
picking stuff up such a difficult

00:30:44 --> 00:30:51
problem yeah it's a difficult problem

00:30:47 --> 00:30:53
because the number of things that you

00:30:50 --> 00:30:54
might have to deal with or the variety

00:30:52 --> 00:30:55
of things that you have to deal with is

00:30:53 --> 00:30:58
extremely large

00:30:54 --> 00:31:00
and oftentimes things that work for one

00:30:57 --> 00:31:03
class of objects won't work for other

00:30:59 --> 00:31:05
class of objects so if you if you get

00:31:02 --> 00:31:07
really good at picking up boxes and now

00:31:04 --> 00:31:09
you have to pick up plastic bags you

00:31:06 --> 00:31:12
know you just need to employ a very

00:31:08 --> 00:31:15
different strategy and there are many

00:31:11 --> 00:31:16
properties of objects that are more than

00:31:14 --> 00:31:19
just their geometry it has to do with

00:31:15 --> 00:31:20
you know the bits that that are easier

00:31:18 --> 00:31:21
to pick up the bits that are hard to

00:31:19 --> 00:31:23
pick up the bits that are more flexible

00:31:20 --> 00:31:25
the bits that will cause the thing to

00:31:22 --> 00:31:27
pivot and Bend and drop out of your hand

00:31:24 --> 00:31:29
versus the bits that resulted in I

00:31:26 --> 00:31:31
secure grasp things that are flexible

00:31:28 --> 00:31:32
things that if you pick them up the

00:31:30 --> 00:31:35
wrong way they'll fall upside down and

00:31:31 --> 00:31:36
the contents will spill out so there's

00:31:34 --> 00:31:39
all these little details that come up

00:31:35 --> 00:31:40
but the task is still kind of can be

00:31:38 --> 00:31:42
characterized as one task like there's a

00:31:39 --> 00:31:46
very clear notion of you did it or you

00:31:41 --> 00:31:49
didn't do it so in terms of spilling

00:31:45 --> 00:31:52
things there creeps in this notion that

00:31:48 --> 00:31:57
starts the sound and feel like common

00:31:51 --> 00:32:00
sense reasoning do you think solving the

00:31:56 --> 00:32:04
general problem of Robotics requires

00:31:59 --> 00:32:06
common sense reasoning requires general

00:32:03 --> 00:32:11
intelligence this kind of human level

00:32:05 --> 00:32:12
capability of you know like you said be

00:32:10 --> 00:32:14
robust and deal with uncertainty but

00:32:11 --> 00:32:16
also be able to sort of reason and

00:32:13 --> 00:32:21
assimilate different pieces of knowledge

00:32:15 --> 00:32:25
that you have yeah what do you what are

00:32:20 --> 00:32:27
your thoughts on the needs of common

00:32:24 --> 00:32:29
sense reasoning in the space of the

00:32:26 --> 00:32:31
general robotics problem so I'm gonna

00:32:28 --> 00:32:33
slightly dodge that question and say

00:32:30 --> 00:32:35
that I think I think maybe actually it's

00:32:32 --> 00:32:38
the other way around is that studying

00:32:34 --> 00:32:41
robotics can help us understand how to

00:32:37 --> 00:32:43
put common sense into our AI systems one

00:32:40 --> 00:32:45
way to think about common sense is that

00:32:42 --> 00:32:46
and and why our current systems might

00:32:44 --> 00:32:50
lack common sense is that common sense

00:32:45 --> 00:32:52
is a property is an emergent property of

00:32:49 --> 00:32:54
actually having to interact with a

00:32:51 --> 00:32:57
particular world a particular universe

00:32:53 --> 00:32:59
and get things done in that universe so

00:32:56 --> 00:33:02
you might think that for instance like a

00:32:58 --> 00:33:05
n image captioning system maybe it

00:33:01 --> 00:33:07
looks at pictures of the world and it

00:33:04 --> 00:33:09
ypes out English sentences so it kind

00:33:06 --> 00:33:11
of it kind of deals with our world

00:33:08 --> 00:33:12
and then you can easily construct

00:33:10 --> 00:33:14
situations where image captioning

00:33:11 --> 00:33:16
systems do things that defy common sense

00:33:13 --> 00:33:17
like give it a picture of a person

00:33:15 --> 00:33:20
wearing fur coat and we'll say it's a

00:33:16 --> 00:33:22
teddy bear but I think what's really

00:33:19 --> 00:33:24
happening in those settings is that the

00:33:21 --> 00:33:26
system doesn't actually live in our

00:33:23 --> 00:33:27
world it lives in its own world that

00:33:25 --> 00:33:30
consists of pixels and English sentences

00:33:26 --> 00:33:32
and doesn't actually consist of like you

00:33:29 --> 00:33:34
know having to put on a fur coat in the

00:33:31 --> 00:33:36
winter so you don't get cold so perhaps

00:33:33 --> 00:33:40
the the reason for the disconnect is

00:33:35 --> 00:33:41
that the systems that we have now is

00:33:39 --> 00:33:43
imply inhabit a different universe and

00:33:40 --> 00:33:45
if we build AI systems that are forced

00:33:42 --> 00:33:47
to deal with all of the messiness and

00:33:44 --> 00:33:50
complexity of our universe maybe they

00:33:46 --> 00:33:51
will have to acquire our common sense to

00:33:49 --> 00:33:53
essentially maximize their utility

00:33:50 --> 00:33:55
whereas the systems we're building now

00:33:52 --> 00:33:58
don't have to do that they can take some

00:33:54 --> 00:34:00
shortcut that's fascinating

00:33:57 --> 00:34:02
you've a couple of times already sort of

00:33:59 --> 00:34:05
reframed the role of robotics and this

00:34:01 --> 00:34:07
whole thing and for some reason I don't

00:34:04 --> 00:34:10
know if my way of thinking is common but

00:34:06 --> 00:34:12
I thought like we need to understand and

00:34:09 --> 00:34:15
solve intelligence in order to solve

00:34:11 --> 00:34:17
robotics and you're kind of framing it

00:34:14 --> 00:34:19
as no robotics is one of the best ways

00:34:16 --> 00:34:22
to just study artificial intelligence

00:34:18 --> 00:34:25
and build sort of like robotics is like

00:34:21 --> 00:34:28
the right space in which you get to

00:34:24 --> 00:34:30
explore some of the fundamental learning

00:34:27 --> 00:34:35
mechanisms fundamental sort of

00:34:29 --> 00:34:36
multimodal multitask aggregation of

00:34:34 --> 00:34:38
knowledge mechanisms that are required

00:34:35 --> 00:34:40
for general intelligence this really

00:34:37 --> 00:34:42
interesting way to think about it but

00:34:39 --> 00:34:45
let me ask about learning can the

00:34:41 --> 00:34:47
general sort of robotics the epitome of

00:34:44 --> 00:34:50
the robotics problem be solved purely

00:34:46 --> 00:34:54
through learning perhaps and to end

00:34:49 --> 00:34:57
learning sort of learning from scratch

00:34:53 --> 00:35:00
as opposed to injecting human expertise

00:34:56 --> 00:35:02
and rules and heuristics and so on I

00:34:59 --> 00:35:06
think that in terms of the spirit of the

00:35:01 --> 00:35:08
question I I would say yes I mean I

00:35:05 --> 00:35:12
think that in though in some ways it may

00:35:07 --> 00:35:14
be like an overly sharp dichotomy like

00:35:11 --> 00:35:17
you know I think that in some ways when

00:35:13 --> 00:35:19
we build algorithms we you know at some

00:35:16 --> 00:35:21
point a person does something like yeah

00:35:18 --> 00:35:23
there's always a person turned on the

00:35:20 --> 00:35:27
computer first

00:35:22 --> 00:35:29
you know implemented tensorflow but yeah

00:35:26 --> 00:35:30
I think that in terms of the in terms of

00:35:28 --> 00:35:32
the point that you're getting and I do

00:35:29 --> 00:35:34
think the answer is yes I think that I

00:35:31 --> 00:35:37
think that we can solve many problems

00:35:33 --> 00:35:39
that have previously required meticulous

00:35:36 --> 00:35:41
manual engineering through automated

00:35:38 --> 00:35:42
optimization techniques and actually one

00:35:40 --> 00:35:44
thing I will say on this topic is I

00:35:41 --> 00:35:46
don't think this is actually a very

00:35:43 --> 00:35:49
radical or very new idea I think people

00:35:45 --> 00:35:51
have have been thinking about automated

00:35:48 --> 00:35:56
optimization techniques as a way to do

00:35:50 --> 00:35:57
control for a very very long time and in

00:35:55 --> 00:36:00
some ways what's changed is really more

00:35:56 --> 00:36:03
than aim so you know today we would say

00:35:59 --> 00:36:04
that oh my robot does machine learning

00:36:02 --> 00:36:07
it does reinforcement learning maybe in

00:36:03 --> 00:36:10
the 1960s you'd say oh my robot is doing

00:36:06 --> 00:36:11
optimal control and maybe the difference

00:36:09 --> 00:36:13
between typing out a system of

00:36:10 --> 00:36:15
differential equations and doing

00:36:12 --> 00:36:17
feedback linearization versus training

00:36:15 --> 00:36:19
and neural net it's not such a large

00:36:16 --> 00:36:22
difference it's just you know pushing

00:36:18 --> 00:36:25
the optimization deeper and deeper into

00:36:21 --> 00:36:27
the thing well you think that were but

00:36:24 --> 00:36:31
with the especially deep learning that

00:36:26 --> 00:36:36
he accumulation of experiences in data

00:36:30 --> 00:36:38
form to form deep representations starts

00:36:35 --> 00:36:40
to feel like knowledge is supposed to

00:36:37 --> 00:36:42
ptimal control so this feels like

00:36:39 --> 00:36:45
there's an accumulation of knowledge to

00:36:41 --> 00:36:47
the learning process yes yeah so I think

00:36:44 --> 00:36:48
that is a good point that one big

00:36:46 --> 00:36:50
difference between learning based

00:36:47 --> 00:36:52
systems and classic optimal control

00:36:49 --> 00:36:53
systems is that learning based systems

00:36:51 --> 00:36:54
and principle should get better and

00:36:52 --> 00:36:56
better

00:36:53 --> 00:36:57
the more they do something right and I

00:36:55 --> 00:37:00
do think that that's actually a very

00:36:56 --> 00:37:02
powerful difference so if you look

00:36:59 --> 00:37:06
back at the world of expert systems is

00:37:01 --> 00:37:09
ymbolic AI and so on of using logic to

00:37:05 --> 00:37:12
accumulate expertise human expertise

00:37:08 --> 00:37:14
human encoded expertise but do you think

00:37:11 --> 00:37:16
that will have a role the some points

00:37:13 --> 00:37:18
that the you know deep learning machine

00:37:15 --> 00:37:22
learning reinforcement learning has been

00:37:17 --> 00:37:25
in incredible results and breaks there

00:37:21 --> 00:37:28
wasn't just inspired thousands maybe

00:37:24 --> 00:37:31
millions of researchers but you know

00:37:27 --> 00:37:33
there's this less popular now but it

00:37:30 --> 00:37:35
used to be part of the idea of symbolic

00:37:32 --> 00:37:40
AI do you think that will have a role

00:37:34 --> 00:37:44
I think in some ways the kind of the the

00:37:39 --> 00:37:47
descendants of symbolic I actually

00:37:43 --> 00:37:49
already have a role so you know this is

00:37:46 --> 00:37:51
the the highly biased history from my

00:37:48 --> 00:37:53
perspective you say that well initially

00:37:50 --> 00:37:55
we thought that rational decision-making

00:37:52 --> 00:37:58
involves logical manipulation so you

00:37:54 --> 00:38:01
have some model the world expressed in

00:37:57 --> 00:38:03
term in terms of logic you have some

00:38:00 --> 00:38:05
query like what action do I take in

00:38:02 --> 00:38:07
order to for X to be true and then you

00:38:04 --> 00:38:09
manipulate your logical symbolic

00:38:06 --> 00:38:11
representation to get an answer what

00:38:08 --> 00:38:14
hat turned into somewhere in the 1990s

00:38:10 --> 00:38:16
is well instead of building kind of

00:38:13 --> 00:38:19
predicates and statements that have true

00:38:15 --> 00:38:22
or false values will build probablistic

00:38:18 --> 00:38:23
systems where things have probabilities

00:38:21 --> 00:38:24
associated and probabilities of being

00:38:22 --> 00:38:27
true and false not turning the Bayes

00:38:23 --> 00:38:30
nets and that provided sort of a boost

00:38:26 --> 00:38:31
o what we're really you know still

00:38:29 --> 00:38:32
essentially logical inference systems

00:38:30 --> 00:38:35
just probabilistic logical inference

00:38:31 --> 00:38:38
systems and then people said well let's

00:38:34 --> 00:38:39
actually learn the individual

00:38:37 --> 00:38:42
probabilities inside these models and

00:38:38 --> 00:38:43
then people said well let's not even

00:38:41 --> 00:38:46
specify the nodes and the models let's

00:38:42 --> 00:38:48
just put a big neural net in there but

00:38:45 --> 00:38:49
in many ways I see these as actually can

00:38:47 --> 00:38:51
descendants from the same idea it's

00:38:48 --> 00:38:53
essentially instantiating rational

00:38:50 --> 00:38:56
decision-making by means of some

00:38:52 --> 00:38:59
inference process and learning by means

00:38:55 --> 00:39:00
of an optimization process so so in a

00:38:58 --> 00:39:02
sense I would say yes that it has a

00:38:59 --> 00:39:05
place and in many ways that place is or

00:39:01 --> 00:39:07
you know it already holds that place

00:39:04 --> 00:39:08
it's already in there yeah it's just by

00:39:06 --> 00:39:10
different it looks slightly different

00:39:07 --> 00:39:12
han there was before yeah but but at

00:39:09 --> 00:39:13
some there are some things that that we

00:39:11 --> 00:39:15
can think about that make this a little

00:39:12 --> 00:39:17
bit more obvious like if I train a big

00:39:14 --> 00:39:19
neural net model to predict what will

00:39:16 --> 00:39:22
happen in response to my robots actions

00:39:18 --> 00:39:24
and then I run probablistic inference

00:39:21 --> 00:39:25
meaning I invert that model to figure

00:39:23 --> 00:39:26
out the actions that lead to some

00:39:24 --> 00:39:29
plausible outcome like to me that seems

00:39:25 --> 00:39:30
like a kind of logic you have a model of

00:39:28 --> 00:39:33
the world it just happens to be

00:39:29 --> 00:39:34
xpressed by a neural net and you are

00:39:32 --> 00:39:37
doing some inference procedure some sort

00:39:33 --> 00:39:39
of manipulation on that model to figure

00:39:36 --> 00:39:42
out you know the answer to a query that

00:39:38 --> 00:39:44
you have it's the interpretability it's

00:39:41 --> 00:39:46
the explained ability though that seems

00:39:43 --> 00:39:48
to be lacking more so because the nice

00:39:45 --> 00:39:50
thing about sort of experts

00:39:47 --> 00:39:53
ystems is you can follow the reasoning

00:39:49 --> 00:39:57
of the system that to us mere humans is

00:39:52 --> 00:40:01
omehow compelling it it would it's just

00:39:56 --> 00:40:04
I don't know what to make of this fact

00:40:00 --> 00:40:06
hat there's a human desire for

00:40:03 --> 00:40:11
intelligence systems to be able to

00:40:05 --> 00:40:14
convey in a poetic way to us why made

00:40:10 --> 00:40:18
the decisions it did like tell a

00:40:13 --> 00:40:22
convincing story and perhaps that's like

00:40:17 --> 00:40:24
a silly human thing like we shouldn't

00:40:21 --> 00:40:26
expect that of intelligent systems like

00:40:23 --> 00:40:30
we should be super happy that there is

00:40:25 --> 00:40:32
intelligent systems out there but if I

00:40:29 --> 00:40:33
were to sort of psychoanalyze the

00:40:31 --> 00:40:36
researchers at the time I would say

00:40:32 --> 00:40:38
expert systems connected to that part

00:40:35 --> 00:40:40
hat desire for AI researchers for

00:40:38 --> 00:40:43
systems to be explainable

00:40:39 --> 00:40:46
I mean maybe on that topic do you have a

00:40:42 --> 00:40:50
hope that sort of inferences source of

00:40:45 --> 00:40:53
learning based systems will be as

00:40:49 --> 00:40:56
explainable as the dream was with expert

00:40:52 --> 00:40:58
systems for example I think it's a very

00:40:55 --> 00:41:00
complicated question because I think

00:40:57 --> 00:41:03
that in some ways the question of

00:40:59 --> 00:41:06
explain ability is kind of very closely

00:41:02 --> 00:41:09
tied to the question of of like

00:41:05 --> 00:41:10
performance like you know why do you

00:41:08 --> 00:41:11
want your system to explain itself well

00:41:09 --> 00:41:13
so that it's so that when it screws up

00:41:10 --> 00:41:16
you can kind of figure out why it did it

00:41:13 --> 00:41:18
right but it's nice but in some ways

00:41:15 --> 00:41:20
that that's a much bigger problem extra

00:41:17 --> 00:41:22
like your system might screw up and then

00:41:19 --> 00:41:25
it might screw up at how it explains

00:41:21 --> 00:41:26
itself or you might have some bugs

00:41:24 --> 00:41:28
omewhere so that it's not actually

00:41:25 --> 00:41:31
doing what was supposed to do so you

00:41:27 --> 00:41:33
know maybe a good way to view that

00:41:30 --> 00:41:34
problem is really as a problem as a

00:41:32 --> 00:41:38
bigger problem of verification and

00:41:33 --> 00:41:41
validation of which explained abilities

00:41:37 --> 00:41:43
ort of what one component I see I just

00:41:40 --> 00:41:45
see differently I see explained ability

00:41:42 --> 00:41:46
ou you put it beautifully I think you

00:41:44 --> 00:41:49
actually summarized the field of

00:41:45 --> 00:41:50
explained ability but to me there's

00:41:48 --> 00:41:53
another aspect of explained ability

00:41:49 --> 00:41:56
which is like storytelling that has

00:41:52 --> 00:42:00
nothing to do with errors or with

00:41:55 --> 00:42:04
like the the survey it doesn't it uses

00:41:59 --> 00:42:06
errors as as elements of its story as

00:42:03 --> 00:42:09
opposed to a fundamental need to be

00:42:06 --> 00:42:11
xplainable when errors occur it's just

00:42:08 --> 00:42:13
hat for other intelligence systems to

00:42:10 --> 00:42:17
be in our world we seem to want to tell

00:42:12 --> 00:42:19
each other stories and that that's true

00:42:16 --> 00:42:22
in the political world is true in the

00:42:18 --> 00:42:24
academic world and that I you know

00:42:21 --> 00:42:25
neural networks are less capable of

00:42:23 --> 00:42:27
doing that or perhaps they're equally

00:42:24 --> 00:42:29
capable a storytelling storytelling may

00:42:26 --> 00:42:31
be it doesn't matter what the

00:42:28 --> 00:42:34
fundamentals of the system are you just

00:42:30 --> 00:42:36
need to be a good storyteller maybe one

00:42:33 --> 00:42:38
specific story I can tell you about in

00:42:35 --> 00:42:40
that space is actually about some work

00:42:37 --> 00:42:42
that was done by by my former

00:42:39 --> 00:42:45
collaborator who's now a professor at

00:42:41 --> 00:42:46
MIT named Jacob Andreas Jacob actually

00:42:44 --> 00:42:48
works on natural language processing but

00:42:45 --> 00:42:50
he had this idea to do a little bit of

00:42:47 --> 00:42:52
work in reinforcement learning and how

00:42:49 --> 00:42:55
on how natural language can basically

00:42:51 --> 00:42:58
structure the internals of policies

00:42:54 --> 00:43:01
trained with RL and one of the things he

00:42:57 --> 00:43:03
did is he set up a model that attempts

00:43:00 --> 00:43:05
to perform some tasks that's defined by

00:43:02 --> 00:43:07
a reward function but the model reads in

00:43:04 --> 00:43:08
a natural language instruction so this

00:43:06 --> 00:43:10
a pretty common thing to do in

00:43:07 --> 00:43:12
struction following so you tell it

00:43:09 --> 00:43:14
like you know go to the Red House and

00:43:11 --> 00:43:16
then supposed to go to the Red House but

00:43:13 --> 00:43:18
hen one of the things that Jacob did is

00:43:15 --> 00:43:20
he treated that sentence not as a

00:43:17 --> 00:43:23
command from a person but as a

00:43:19 --> 00:43:26
representation of the internal kind of

00:43:22 --> 00:43:28
state of the of the of the mind of this

00:43:25 --> 00:43:30
policy essentially so that when it was

00:43:27 --> 00:43:32
faced with a new task what it would do

00:43:29 --> 00:43:34
is it would basically try to think of

00:43:31 --> 00:43:35
possible language descriptions attempt

00:43:33 --> 00:43:37
o do them and see if they led to the

00:43:34 --> 00:43:39
right outcome so it would kind of think

00:43:36 --> 00:43:40
out loud like you know I'm faced with

00:43:38 --> 00:43:42
is new task what am I gonna do let me

00:43:39 --> 00:43:44
go to the red house now that didn't work

00:43:41 --> 00:43:46
let me go to the Blue Room or something

00:43:43 --> 00:43:48
let me go to the green plant and once it

00:43:45 --> 00:43:49
got some reward it would say oh go to

00:43:47 --> 00:43:50
the green plant that's what's working

00:43:48 --> 00:43:51
I'm gonna go to the green plant and then

00:43:49 --> 00:43:52
you could look at the string that it

00:43:50 --> 00:43:54
came up with and that was a description

00:43:51 --> 00:43:56
of how it thought it should solve the

00:43:53 --> 00:43:58
problem so you could do you could

00:43:55 --> 00:44:00
basically incorporate language as

00:43:57 --> 00:44:01
internal state and you can start getting

00:43:59 --> 00:44:04
some handle on these kinds of things and

00:44:00 --> 00:44:06
then what I was kind of trying to get to

00:44:03 --> 00:44:07
is that also if you add to the reward

00:44:05 --> 00:44:11
function

00:44:06 --> 00:44:14
the convincing nough story hmm so I have

00:44:10 --> 00:44:16
another reward signal of like people who

00:44:13 --> 00:44:20
review that story how much they like it

00:44:15 --> 00:44:22
I says that you you know and initially

00:44:19 --> 00:44:24
that could be a hyper parameter or sort

00:44:21 --> 00:44:28
of hard-coded heuristic type of thing

00:44:23 --> 00:44:31
but it's an interesting notion of the

00:44:27 --> 00:44:33
convincing 'no story becoming part of

00:44:30 --> 00:44:35
the reward function the objective

00:44:32 --> 00:44:38
function of the explained ability it's

00:44:34 --> 00:44:40
in the world of sort of twitter and fake

00:44:37 --> 00:44:43
news that might be a scary notion that

00:44:39 --> 00:44:45
he the nature of truth may not be as

00:44:42 --> 00:44:47
important as the convincing 'no some the

00:44:44 --> 00:44:53
how convinced you are in telling the

00:44:46 --> 00:44:56
story around the facts well let me ask

00:44:52 --> 00:44:58
the the basic question you're one of the

00:44:55 --> 00:45:00
world-class researchers in reinforcement

00:44:57 --> 00:45:02
learning deeper and forceful learning

00:44:59 --> 00:45:05
certainly in the robotic space

00:45:01 --> 00:45:07
what is reinforcement learning i think

00:45:04 --> 00:45:10
that reinforcement learning refers to

00:45:06 --> 00:45:12
day is really just the kind of the

00:45:09 --> 00:45:15
modern incarnation of learning based

00:45:11 --> 00:45:16
control so classically reinforcement

00:45:14 --> 00:45:18
learning has a much more narrow

00:45:15 --> 00:45:19
definition which is that it's you know

00:45:17 --> 00:45:21
literally learning from reinforcement

00:45:18 --> 00:45:23
like the thing does something and then

00:45:20 --> 00:45:25
it gets a reward or punishment but

00:45:22 --> 00:45:27
really i think the way the term is used

00:45:24 --> 00:45:29
today is it's used for for more broadly

00:45:26 --> 00:45:30
to learning based control so some kind

00:45:28 --> 00:45:34
of system that's supposed to be

00:45:29 --> 00:45:36
controlling something and it uses data

00:45:33 --> 00:45:38
to get better and what is control means

00:45:35 --> 00:45:40
is action is the fundamental element

00:45:37 --> 00:45:43
yeah it means making rational decisions

00:45:39 --> 00:45:45
now and rational decisions are decisions

00:45:42 --> 00:45:48
that maximize a measure of utility and

00:45:44 --> 00:45:51
sequentially see many decisions time and

00:45:47 --> 00:45:53
time again now like so it's

00:45:50 --> 00:45:56
easier to see that kind of idea in the

00:45:52 --> 00:45:56
space of maybe games in the space of

00:45:55 --> 00:46:00
robotics

00:45:55 --> 00:46:02
do you see is bigger than that is it

00:45:59 --> 00:46:04
applicable like word were the limits of

00:46:01 --> 00:46:06
the applicability of reinforcement

00:46:03 --> 00:46:09
learning yeah so rational

00:46:05 --> 00:46:12
decision-making is essentially the the

00:46:08 --> 00:46:14
ncapsulation of the AI problems you

00:46:11 --> 00:46:16
didn't through a particular lens so any

00:46:13 --> 00:46:19
problem that we would want a machine to

00:46:15 --> 00:46:21
do intelligent machine can likely be

00:46:18 --> 00:46:22
represented as a decision-making problem

00:46:20 --> 00:46:24
you're classifying images is a

00:46:21 --> 00:46:27
decision-making problem although not a

00:46:23 --> 00:46:29
sequential one typically you know

00:46:26 --> 00:46:31
controlling a chemical plant as a

00:46:28 --> 00:46:33
decision-making problem deciding what

00:46:31 --> 00:46:36
videos to recommend on YouTube is a

00:46:32 --> 00:46:37
decision-making problem and one of the

00:46:35 --> 00:46:39
really appealing things about

00:46:36 --> 00:46:41
reinforcement learning is if it does

00:46:38 --> 00:46:43
encapsulate the range of all these

00:46:40 --> 00:46:45
decision-making problems perhaps working

00:46:42 --> 00:46:47
on reinforcement learning is you know

00:46:44 --> 00:46:52
one of the ways to reach a very broad

00:46:46 --> 00:46:53
swath of AI problems but what what do

00:46:51 --> 00:46:55
you use the fundament the difference

00:46:52 --> 00:46:59
between reinforcement learning and maybe

00:46:54 --> 00:47:01
supervised machine learning so the

00:46:58 --> 00:47:02
reinforcement learning can be viewed as

00:47:00 --> 00:47:04
a generalization of supervised machine

00:47:01 --> 00:47:06
learning you can certainly cast

00:47:03 --> 00:47:07
supervised learning as a reinforcement

00:47:05 --> 00:47:08
learning problem you can just say your

00:47:06 --> 00:47:11
loss function is the negative of your

00:47:07 --> 00:47:12
eward but you have stronger assumptions

00:47:10 --> 00:47:13
you have the assumption that someone

00:47:11 --> 00:47:16
actually told you what the correct

00:47:12 --> 00:47:19
answer was that your data was iid and so

00:47:15 --> 00:47:20
n so you could view reinforcement

00:47:18 --> 00:47:21
learning is essentially relaxing some of

00:47:19 --> 00:47:23
those assumptions now that's not always

00:47:20 --> 00:47:23
a very productive way to look at it

00:47:22 --> 00:47:25
because if you actually have a

00:47:22 --> 00:47:26
supervised learning problem you'll

00:47:24 --> 00:47:28
probably solve it much more effectively

00:47:25 --> 00:47:31
by using supervised learning methods

00:47:27 --> 00:47:33
because it's easier but you can view

00:47:30 --> 00:47:36
reinforcement as a journalist a tional

00:47:32 --> 00:47:38
know for sure but they're fundamentally

00:47:35 --> 00:47:41
that's a mathematical statement that's

00:47:37 --> 00:47:43
absolutely correct but it seems that

00:47:40 --> 00:47:45
reinforcement learning the kind of tools

00:47:42 --> 00:47:48
we'll bring to the table today of today

00:47:44 --> 00:47:50
so maybe down the line everything will

00:47:47 --> 00:47:50
be a reinforcement learning problem just

00:47:49 --> 00:47:53
like you said

00:47:49 --> 00:47:54
image classification should be mapped to

00:47:52 --> 00:47:57
a reinforcement learning problem but

00:47:53 --> 00:48:00
oday the tools and ideas the way we

00:47:56 --> 00:48:02
think about them are different sort of

00:47:59 --> 00:48:06
supervised learning has been used very

00:48:01 --> 00:48:08
effectively to solve basic narrow AI

00:48:05 --> 00:48:13
problems the reinforcement learning kind

00:48:07 --> 00:48:16
of represents the dream of AI it's very

00:48:12 --> 00:48:18
much so in the research space now in two

00:48:15 --> 00:48:20
captivating the imagination of people

00:48:17 --> 00:48:24
what we can do with intelligent systems

00:48:19 --> 00:48:25
but it hasn't yet had as wide of an

00:48:23 --> 00:48:27
impact as the supervised learning

00:48:24 --> 00:48:30
approaches so that so that I my question

00:48:26 --> 00:48:33
comes from more practical sense like

00:48:29 --> 00:48:35
what do you see is the gap between the

00:48:32 --> 00:48:38
more general reinforcement learning

00:48:34 --> 00:48:40
and the very specific yes it's a

00:48:37 --> 00:48:42
question decision-making with one

00:48:39 --> 00:48:45
sequence one step in the sequence of the

00:48:41 --> 00:48:47
supervised learning so for a practical

00:48:44 --> 00:48:49
standpoint I think that one one thing

00:48:46 --> 00:48:51
that is you know potentially a little

00:48:48 --> 00:48:53
tough now and this is I think something

00:48:50 --> 00:48:54
that we'll see this is a gap that we

00:48:52 --> 00:48:57
might see closing over the next couple

00:48:53 --> 00:48:58
of years is the ability of reinforcement

00:48:56 --> 00:49:01
learning algorithms to effectively

00:48:57 --> 00:49:03
utilize large amounts of prior data so

00:49:00 --> 00:49:05
ne of the reasons why it's a bit

00:49:02 --> 00:49:06
difficult today to use reinforcement

00:49:04 --> 00:49:09
learning for all the things that we

00:49:05 --> 00:49:11
might want to use it for is that in most

00:49:08 --> 00:49:13
of the settings where we want to do

00:49:10 --> 00:49:15
rational decision-making it's a little

00:49:12 --> 00:49:18
bit tough to just deploy some policy

00:49:14 --> 00:49:20
that does crazy stuff and learns purely

00:49:17 --> 00:49:22
through trial and error it's much easier

00:49:19 --> 00:49:24
to collect a lot of data a lot of logs

00:49:21 --> 00:49:27
of some other policy that you've got and

00:49:23 --> 00:49:29
then maybe you you know if you can get a

00:49:26 --> 00:49:30
good policy out of that then you deploy

00:49:28 --> 00:49:33
it and let it kind of fine-tune a little

00:49:29 --> 00:49:34
bit but algorithmically it's quite

00:49:32 --> 00:49:37
difficult to do that so I think that

00:49:33 --> 00:49:38
once we figure out how to get

00:49:36 --> 00:49:40
reinforcement learning to bootstrap

00:49:37 --> 00:49:44
effectively from large data sets then

00:49:39 --> 00:49:45
we'll see very very rapid growth and

00:49:43 --> 00:49:47
applications of these technologies so

00:49:44 --> 00:49:49
this is what's referred to as off policy

00:49:46 --> 00:49:52
reinforcement learning or offline RL or

00:49:48 --> 00:49:53
batch RL and I think we're seeing a lot

00:49:51 --> 00:49:54
of research right now that that's

00:49:52 --> 00:49:57
bringing us closer and closer to that

00:49:53 --> 00:49:58
can you maybe paint a picture of the

00:49:56 --> 00:50:01
different methods she said

00:49:57 --> 00:50:03
off policy what's value-based

00:50:00 --> 00:50:04
reinforcement learning what's policy

00:50:02 --> 00:50:06
based was modelled based with soft

00:50:04 --> 00:50:09
policy on policy what are the different

00:50:05 --> 00:50:11
categories of reinforcement yeah so one

00:50:08 --> 00:50:14
way we can think about reinforcement

00:50:10 --> 00:50:18
learning is that it's um it's in some

00:50:13 --> 00:50:20
very fundamental way it's about learning

00:50:17 --> 00:50:22
models that can answer kind of what-if

00:50:19 --> 00:50:24
questions so what would happen if I take

00:50:21 --> 00:50:26
this action that I haven't taken before

00:50:23 --> 00:50:28
and you do that of course from

00:50:25 --> 00:50:30
experience from data and oftentimes you

00:50:27 --> 00:50:33
do it in a loop so you build a model

00:50:29 --> 00:50:34
that answers these what-if questions use

00:50:32 --> 00:50:36
it to figure out the best action you can

00:50:33 --> 00:50:37
take and then go and try taking that and

00:50:35 --> 00:50:38
see if the outcome agrees with what you

00:50:36 --> 00:50:42
predicted

00:50:37 --> 00:50:44
so the different kinds of techniques are

00:50:41 --> 00:50:46
basically refer different ways of doing

00:50:43 --> 00:50:47
it so model based methods answer a

00:50:45 --> 00:50:49
question of

00:50:46 --> 00:50:51
what state you would get basically what

00:50:48 --> 00:50:52
would happen to the world if you were to

00:50:50 --> 00:50:54
take a certain action value based

00:50:51 --> 00:50:56
methods they answer the question of what

00:50:53 --> 00:50:58
value you would get meaning what utility

00:50:55 --> 00:51:00
ou would get but in a sense they're not

00:50:58 --> 00:51:02
really all that different because

00:50:59 --> 00:51:05
they're both really just answering these

00:51:01 --> 00:51:07
what-if questions now unfortunately for

00:51:04 --> 00:51:08
us with current machine learning methods

00:51:06 --> 00:51:10
answering what-if questions can be

00:51:07 --> 00:51:12
really hard because they are really

00:51:09 --> 00:51:14
questions about things that didn't

00:51:11 --> 00:51:15
happen if you want to answer what-if

00:51:13 --> 00:51:16
questions about things that did happen

00:51:14 --> 00:51:17
you wouldn't need to learn model you

00:51:15 --> 00:51:21
would just like repeat the thing that

00:51:16 --> 00:51:24
worked before and that's really a big

00:51:20 --> 00:51:27
part of why RL is a little bit tough so

00:51:23 --> 00:51:29
if you have a purely on policy kind of

00:51:26 --> 00:51:31
online process then you ask these

00:51:28 --> 00:51:33
what-if questions you make some mistakes

00:51:30 --> 00:51:34
then you're going to try doing those

00:51:32 --> 00:51:36
mistake in things and then you observe

00:51:33 --> 00:51:37
kind of the counter examples that'll

00:51:35 --> 00:51:40
teach you not to do those things again

00:51:36 --> 00:51:42
if you have a bunch of off policy data

00:51:39 --> 00:51:45
nd you just want to synthesize the best

00:51:41 --> 00:51:46
pulse you can out of that data then you

00:51:44 --> 00:51:48
really have to deal with the the

00:51:45 --> 00:51:51
challenges of making these these

00:51:47 --> 00:51:55
counterfactual what's the policy yeah a

00:51:50 --> 00:51:58
policy is a model or some kind of

00:51:54 --> 00:52:02
unction that maps from observations of

00:51:57 --> 00:52:05
the world to actions so in reinforcement

00:52:01 --> 00:52:06
learning we often refer to the the

00:52:04 --> 00:52:08
current configuration of the world as

00:52:05 --> 00:52:09
the state so we say the state kind of

00:52:07 --> 00:52:11
encompasses everything you need to fully

00:52:08 --> 00:52:14
define where the world is at at the

00:52:10 --> 00:52:15
moment and depending on how we formulate

00:52:13 --> 00:52:16
the problem we might say you either get

00:52:14 --> 00:52:19
o see the state or you get to see an

00:52:15 --> 00:52:22
observation which is some snapshot some

00:52:18 --> 00:52:25
piece of the state so policy is just

00:52:22 --> 00:52:27
includes everything in it in order to be

00:52:24 --> 00:52:31
able to act in this world yes and so

00:52:26 --> 00:52:32
what is off policy mean if yeah so the

00:52:30 --> 00:52:35
terms on policy and off policy refer to

00:52:31 --> 00:52:37
how you get your data so if you get your

00:52:34 --> 00:52:38
data from somebody else who was doing

00:52:36 --> 00:52:42
some other stuff maybe you get your data

00:52:37 --> 00:52:44
from some manually programmed a system

00:52:41 --> 00:52:46
that was you know just running in the

00:52:43 --> 00:52:48
world before that's referred to as off

00:52:45 --> 00:52:50
policy data but if you got the data by

00:52:47 --> 00:52:51
actually acting in the world based on

00:52:49 --> 00:52:53
what your current policy thinks is good

00:52:50 --> 00:52:56
we call that on policy data and

00:52:52 --> 00:52:58
obviously on policy data is more useful

00:52:55 --> 00:53:00
to you because if your current policy

00:52:57 --> 00:53:02
makes some bad decisions you will I

00:52:59 --> 00:53:04
you see that those decisions are bad off

00:53:01 --> 00:53:06
policy data however might be much easier

00:53:03 --> 00:53:09
to obtain because maybe that's all the

00:53:05 --> 00:53:12
log data that you have from before so we

00:53:08 --> 00:53:15
talked about new offline talked about

00:53:11 --> 00:53:16
autonomous vehicles so you can envision

00:53:14 --> 00:53:19
off policy kind of approaches in

00:53:16 --> 00:53:21
robotics phases where there's really ton

00:53:18 --> 00:53:23
of robots out there but they don't get

00:53:20 --> 00:53:25
he luxury of being able to explore

00:53:22 --> 00:53:29
based on reinforcement learning

00:53:24 --> 00:53:31
framework so how do we make again open

00:53:28 --> 00:53:35
question but how do we make our policy

00:53:30 --> 00:53:37
methods work yeah so this is something

00:53:34 --> 00:53:39
that has been kind of a big open problem

00:53:36 --> 00:53:41
for a while and in the last few years

00:53:38 --> 00:53:43
people have made a little bit of

00:53:40 --> 00:53:45
progress on that you know I can tell you

00:53:42 --> 00:53:46
about and it's not by any means solved

00:53:44 --> 00:53:47
yet but I can tell you some of the

00:53:45 --> 00:53:50
things that for example we've done to

00:53:46 --> 00:53:52
try to address some of the challenges it

00:53:49 --> 00:53:54
urns out that one really big challenge

00:53:51 --> 00:53:56
with off policy reinforcement learning

00:53:53 --> 00:53:59
is that you can't really trust your

00:53:55 --> 00:54:02
models to give accurate predictions for

00:53:58 --> 00:54:04
any possible action so if I've never

00:54:01 --> 00:54:07
tried to if in my data said I never saw

00:54:03 --> 00:54:10
somebody steering the car off the road

00:54:06 --> 00:54:11
onto the sidewalk my value function or

00:54:09 --> 00:54:13
my model is probably not going to

00:54:10 --> 00:54:14
predict the right thing if I ask what

00:54:12 --> 00:54:17
would happen if I were to steer the car

00:54:13 --> 00:54:19
off the road onto the sidewalk so one of

00:54:16 --> 00:54:21
the important things you have to do to

00:54:18 --> 00:54:23
get off Paul crl to work is you have to

00:54:20 --> 00:54:24
be able to figure out whether a given

00:54:22 --> 00:54:27
action will result in a trustworthy

00:54:23 --> 00:54:30
prediction or not and you can use kind

00:54:26 --> 00:54:32
of distribution estimation methods kind

00:54:29 --> 00:54:33
of density estimation methods to try to

00:54:31 --> 00:54:35
figure that out so you could figure out

00:54:32 --> 00:54:37
hat well this action my model is

00:54:34 --> 00:54:38
telling me that it's great but it looks

00:54:36 --> 00:54:39
totally different from any action I've

00:54:37 --> 00:54:41
taken before so I'm all it's probably

00:54:38 --> 00:54:44
not correct and you can incorporate

00:54:40 --> 00:54:46
regularization terms into your learning

00:54:43 --> 00:54:49
objective that will essentially tell you

00:54:45 --> 00:54:52
not to ask those questions that your

00:54:48 --> 00:54:54
model is unable to answer what would

00:54:51 --> 00:54:56
lead to breakthroughs in this space do

00:54:53 --> 00:54:59
you think like well what's needed is

00:54:55 --> 00:55:02
this a data set question do we need to

00:54:58 --> 00:55:05
collect big benchmark data sets that

00:55:01 --> 00:55:10
allow us to explore the space is it a

00:55:04 --> 00:55:12
new kinds of methodologies like what's

00:55:09 --> 00:55:14
your sense or maybe coming together in a

00:55:11 --> 00:55:16
space of robotics and defining the

00:55:13 --> 00:55:17
problem to do working on him I think

00:55:15 --> 00:55:19
four off policy reinforced mooring in

00:55:16 --> 00:55:21
particular it's very much an algorithms

00:55:18 --> 00:55:23
question right now and you know this is

00:55:20 --> 00:55:25
omething that I think it's great

00:55:22 --> 00:55:27
because now arounds question is you know

00:55:24 --> 00:55:28
that that just takes some very smart

00:55:26 --> 00:55:31
people to get together and think about

00:55:27 --> 00:55:33
it really hard whereas if it was like a

00:55:30 --> 00:55:35
data problem or hardware problem that

00:55:32 --> 00:55:37
would take some serious engineering so

00:55:34 --> 00:55:38
that's why I'm pretty excited about that

00:55:36 --> 00:55:40
problem because I think that we're in a

00:55:38 --> 00:55:41
position where we can make some real

00:55:39 --> 00:55:43
progress on it just by coming up with

00:55:40 --> 00:55:45
e right algorithms in terms of which

00:55:42 --> 00:55:48
algorithms they could be you know that

00:55:44 --> 00:55:50
he problems that their core are very

00:55:47 --> 00:55:52
related to problems in you know things

00:55:49 --> 00:55:54
like like causal inference right because

00:55:51 --> 00:55:56
well you're really dealing with the

00:55:53 --> 00:55:57
situations where you have a model a

00:55:55 --> 00:55:59
statistical model that's trying to make

00:55:56 --> 00:56:00
predictions about things that I hadn't

00:55:58 --> 00:56:03
seen before

00:55:59 --> 00:56:04
and if it's a if it's a model it's

00:56:02 --> 00:56:06
generalizing properly that'll make good

00:56:03 --> 00:56:08
predictions if it's a model that picks

00:56:05 --> 00:56:10
up on spurious correlations that will

00:56:07 --> 00:56:11
not generalize properly and then you can

00:56:09 --> 00:56:13
you have an arsenal of tools you can use

00:56:10 --> 00:56:14
you could for example figure out what

00:56:12 --> 00:56:16
are the regions where it's trustworthy

00:56:13 --> 00:56:18
or on the other hand you could try to

00:56:15 --> 00:56:22
make it generalize better somehow or

00:56:17 --> 00:56:26
some combination of the two is there

00:56:21 --> 00:56:30
room for mixing sort of or most of it

00:56:25 --> 00:56:32
like 90 95 percent is off policy you

00:56:29 --> 00:56:35
already have the data set and then you

00:56:31 --> 00:56:37
get to send the robot out to do a little

00:56:34 --> 00:56:40
xploration like what what's that role

00:56:36 --> 00:56:41
of mixing them together yeah absolutely

00:56:39 --> 00:56:45
I think that this is something that you

00:56:41 --> 00:56:46
actually might describe very well at the

00:56:44 --> 00:56:48
beginning of the of our discussion when

00:56:45 --> 00:56:50
you talk about the iceberg like this is

00:56:47 --> 00:56:52
the iceberg that the 99% of your prior

00:56:49 --> 00:56:54
experience that's your iceberg you'd use

00:56:51 --> 00:56:56
that for all policy reinforcement

00:56:53 --> 00:56:59
learning and then of course if you've

00:56:55 --> 00:57:00
never you know opened that particular

00:56:58 --> 00:57:02
kind of door with that particular lock

00:56:59 --> 00:57:03
before then you have to go out and

00:57:01 --> 00:57:05
fiddle with it a little bit and that's

00:57:02 --> 00:57:06
that additional 1% to help you figure

00:57:04 --> 00:57:08
out a new task and I think that's

00:57:05 --> 00:57:11
actually like a pretty good recipe going

00:57:07 --> 00:57:13
forward is this to you the most exciting

00:57:10 --> 00:57:16
space of reinforcement learning now or

00:57:12 --> 00:57:19
is there what's uh and maybe taking a

00:57:15 --> 00:57:21
step back not just now but what's to use

00:57:18 --> 00:57:23
the most beautiful idea apologize for

00:57:20 --> 00:57:25
the romanticized question but the

00:57:22 --> 00:57:27
beautiful idea or a concept in

00:57:24 --> 00:57:31
reinforcement learning

00:57:26 --> 00:57:33
in general I actually think that one of

00:57:30 --> 00:57:34
the things that is a very beautiful idea

00:57:32 --> 00:57:40
in reinforcement learning is just the

00:57:33 --> 00:57:42
idea that you can obtain a near optimal

00:57:39 --> 00:57:45
controller in your optimal policy

00:57:41 --> 00:57:49
without actually having a complete model

00:57:44 --> 00:57:51
of the world this is you know it's

00:57:48 --> 00:57:54
omething that feels perhaps kind of

00:57:50 --> 00:57:55
obvious if you if you just hear the term

00:57:53 --> 00:57:57
reinforcement learning or you think

00:57:54 --> 00:57:58
about trial and error learning but from

00:57:56 --> 00:58:02
a controls perspective it's a very weird

00:57:57 --> 00:58:05
thing because classically you know we we

00:58:01 --> 00:58:07
think about engineered systems and

00:58:04 --> 00:58:09
controlling engineered systems as as the

00:58:06 --> 00:58:10
problem of writing down some equations

00:58:08 --> 00:58:12
and then figuring out given these

00:58:09 --> 00:58:14
quations you know basically I solve for

00:58:11 --> 00:58:18
X figure out the the thing that

00:58:13 --> 00:58:19
maximizes its performance and the the

00:58:17 --> 00:58:21
ory of reinforcement learning

00:58:18 --> 00:58:23
actually gives us a mathematically

00:58:20 --> 00:58:25
principled framework just think to

00:58:22 --> 00:58:27
reason about you know optimizing some

00:58:24 --> 00:58:29
quantity when you don't actually know

00:58:26 --> 00:58:31
the equations that govern that system

00:58:28 --> 00:58:34
and that I don't to me that actually

00:58:30 --> 00:58:37
seems kind of kind of you know very

00:58:33 --> 00:58:40
elegant not something that sort of

00:58:36 --> 00:58:41
becomes immediately obvious at least in

00:58:39 --> 00:58:44
the mathematical sense does it make

00:58:40 --> 00:58:47
sense to you that it works at all well I

00:58:43 --> 00:58:48
think it makes sense when you take some

00:58:46 --> 00:58:51
time to think about it but it is a

00:58:47 --> 00:58:54
little surprising well then then taking

00:58:50 --> 00:58:56
a step into the more deeper

00:58:53 --> 00:59:01
epresentations which is also very

00:58:55 --> 00:59:03
surprising of sort of the richness of

00:59:00 --> 00:59:06
the state space the space of

00:59:02 --> 00:59:08
environments that this kind of approach

00:59:05 --> 00:59:12
can operate in can you maybe say what is

00:59:07 --> 00:59:14
deep reinforcement learning well deep

00:59:11 --> 00:59:17
reinforcement learning simply refers to

00:59:13 --> 00:59:18
taking reinforcement learning algorithms

00:59:16 --> 00:59:22
and combining them with high capacity

00:59:17 --> 00:59:24
neural net representations which is you

00:59:21 --> 00:59:25
know kind of it might at first seem like

00:59:23 --> 00:59:26
a pretty arbitrary thing just take these

00:59:24 --> 00:59:30
two components and stick them together

00:59:25 --> 00:59:31
but the reason that it's it's something

00:59:29 --> 00:59:36
that has become so important in recent

00:59:30 --> 00:59:38
years is that reinforcement learning it

00:59:35 --> 00:59:39
kind of faces an exacerbated version of

00:59:37 --> 00:59:40
a problem that has faced many other

00:59:38 --> 00:59:43
machine learning too

00:59:39 --> 00:59:46
so if you if we go back to like you know

00:59:42 --> 00:59:48
the early 2000s or the late 90s we'll

00:59:45 --> 00:59:50
see a lot of research on machine

00:59:47 --> 00:59:52
learning methods that have some very

00:59:49 --> 00:59:53
appealing mathematical properties like

00:59:51 --> 00:59:56
they reduced a convex optimization

00:59:52 --> 00:59:59
problems for instance but they require

00:59:56 --> 01:00:00
very special inputs they require a

00:59:58 --> 01:00:03
representation of the input that is

00:59:59 --> 01:00:06
clean in some way like for example clean

01:00:02 --> 01:00:07
in the sense that the classes in your

01:00:05 --> 01:00:09
multi-class classification problems

01:00:06 --> 01:00:10
eparate linearly so they they have some

01:00:08 --> 01:00:11
cases it's some kind of good

01:00:09 --> 01:00:14
representation we call this a feature

01:00:10 --> 01:00:15
presentation and for a long time

01:00:13 --> 01:00:16
people were very worried about features

01:00:14 --> 01:00:18
in the world of supervised learning

01:00:15 --> 01:00:19
because somebody had to actually build

01:00:17 --> 01:00:21
those features so you couldn't just take

01:00:18 --> 01:00:23
an image and plug it into your logistic

01:00:20 --> 01:00:24
regression or your SVM or something

01:00:22 --> 01:00:26
someone had to take that image and

01:00:23 --> 01:00:29
process it using some handwritten code

01:00:25 --> 01:00:30
and then neural nets came along and they

01:00:28 --> 01:00:32
could actually learn the features and

01:00:29 --> 01:00:34
suddenly we could apply learning

01:00:31 --> 01:00:36
directly to the raw inputs which was

01:00:33 --> 01:00:38
great for images but it was even more

01:00:35 --> 01:00:39
great for all the other fields where

01:00:37 --> 01:00:41
people hadn't come up with good features

01:00:38 --> 01:00:43
yet and one of those fields actually

01:00:40 --> 01:00:44
reinforced my learning because in

01:00:42 --> 01:00:46
reinforcement learning the notion of

01:00:43 --> 01:00:47
eatures if you don't use neural nets

01:00:45 --> 01:00:51
and you have to design your own features

01:00:46 --> 01:00:52
it's very very opaque like it's very

01:00:50 --> 01:00:55
hard to imagine like let's say I'm

01:00:51 --> 01:00:57
playing chess or go what is a feature

01:00:54 --> 01:00:59
with which I can represent the value

01:00:56 --> 01:01:02
function for go or even though the

01:00:58 --> 01:01:03
optimal policy forego linearly I I don't

01:01:01 --> 01:01:05
even know how to start thinking about it

01:01:02 --> 01:01:06
and and people tried all sorts of things

01:01:04 --> 01:01:08
that would write down you know an expert

01:01:05 --> 01:01:09
chess player looks for whether the the

01:01:07 --> 01:01:11
knight is in the middle of the board or

01:01:08 --> 01:01:13
not so that's a feature is night in

01:01:10 --> 01:01:14
middle of board and they would write

01:01:12 --> 01:01:17
these like long lists of kind of

01:01:13 --> 01:01:18
arbitrary made-up stuff and that was

01:01:16 --> 01:01:20
really kind of getting us no way and

01:01:17 --> 01:01:22
that's a little chess is a little more

01:01:19 --> 01:01:24
accessible than the robotics problem

01:01:21 --> 01:01:27
absolutely all right that's there's at

01:01:23 --> 01:01:30
least experts in the different features

01:01:26 --> 01:01:34
for chess but still like the neural

01:01:29 --> 01:01:36
network there I did to me that's I mean

01:01:33 --> 01:01:38
you put it eloquently and almost made it

01:01:35 --> 01:01:41
seem like a natural step to add neural

01:01:37 --> 01:01:43
networks but the fact that neural

01:01:40 --> 01:01:45
networks are able to discover features

01:01:42 --> 01:01:48
in the control problem it's very

01:01:44 --> 01:01:49
interesting it's hopeful I'm not sure

01:01:47 --> 01:01:52
what to think about it but it feels

01:01:48 --> 01:01:54
hopeful that the control problem has

01:01:51 --> 01:01:58
features to be learned

01:01:53 --> 01:02:02
like I guess my question is is it

01:01:57 --> 01:02:04
surprising to you how far the deep side

01:02:01 --> 01:02:05
of deep reinforcement learning is able

01:02:03 --> 01:02:08
to like what the space of problems has

01:02:04 --> 01:02:14
been able to tackle from especially in

01:02:07 --> 01:02:16
games with the Alpha star and and alpha

01:02:13 --> 01:02:19
zero and just the the representation of

01:02:15 --> 01:02:23
power there and in the robotic space and

01:02:18 --> 01:02:25
what is your sense of the limits of this

01:02:22 --> 01:02:28
representation power and the control

01:02:24 --> 01:02:33
context I think that in regard to the

01:02:27 --> 01:02:34
limits that here I think that one thing

01:02:32 --> 01:02:39
that makes it a little hard to fully

01:02:33 --> 01:02:41
answer this question is because in

01:02:38 --> 01:02:43
settings where we would like to put push

01:02:40 --> 01:02:46
these things to the limit we encounter

01:02:42 --> 01:02:50
other bottlenecks so like the reason

01:02:45 --> 01:02:53
that I can't get my robot to learn how

01:02:49 --> 01:02:55
to like I don't know do the dishes in

01:02:52 --> 01:02:58
the kitchen it's not because it's neural

01:02:54 --> 01:03:00
net is not big enough it's because when

01:02:57 --> 01:03:03
you try to actually do trial and error

01:03:00 --> 01:03:05
learning you reinforce them a loner

01:03:02 --> 01:03:07
directly in the real world where you

01:03:04 --> 01:03:09
have the potential to gather these large

01:03:06 --> 01:03:11
they're you know highly varied and

01:03:08 --> 01:03:13
complex datasets you start running into

01:03:10 --> 01:03:16
ther problems like one problem you run

01:03:12 --> 01:03:18
into very quickly it'll first sound like

01:03:15 --> 01:03:19
a very pragmatic problem that actually

01:03:17 --> 01:03:21
turns out to be a pretty deep scientific

01:03:18 --> 01:03:22
problem take the robot put in your

01:03:20 --> 01:03:24
kitchen have it try to learn to do the

01:03:21 --> 01:03:26
dishes with trial and error it'll break

01:03:23 --> 01:03:28
all your dishes and then we'll have no

01:03:25 --> 01:03:30
more dishes to clean now you might think

01:03:27 --> 01:03:31
this is a very practical issue but

01:03:29 --> 01:03:32
here's something to this which is that

01:03:30 --> 01:03:34
if you have a person trying to do this

01:03:31 --> 01:03:36
you know a person will have some degree

01:03:33 --> 01:03:37
of common sense they'll break one dish

01:03:35 --> 01:03:39
it'll be a little more careful with the

01:03:36 --> 01:03:40
next one and if they break all of them

01:03:38 --> 01:03:42
they're gonna go and get more or

01:03:39 --> 01:03:45
something like that so there's all sorts

01:03:41 --> 01:03:47
of scaffolding that that comes very

01:03:44 --> 01:03:49
naturally to us for our learning process

01:03:46 --> 01:03:51
like you know if I have to learn

01:03:48 --> 01:03:52
something through trial and error I have

01:03:50 --> 01:03:54
a common sense to know that I have to

01:03:51 --> 01:03:56
you know try multiple times if I screw

01:03:53 --> 01:03:58
something up I ask for help or I recept

01:03:55 --> 01:04:00
hings or something like that and all

01:03:57 --> 01:04:03
that it's kind of outside of the classic

01:03:59 --> 01:04:05
reinforcement problem formulation there

01:04:02 --> 01:04:06
are the things that are that can also be

01:04:04 --> 01:04:08
categorizes

01:04:05 --> 01:04:09
caffolding but are very important like

01:04:07 --> 01:04:11
for example where you get your award

01:04:08 --> 01:04:15
function if I want to learn how to pour

01:04:10 --> 01:04:16
a cup of water well how do I know if

01:04:14 --> 01:04:18
I've done it correctly now that probably

01:04:15 --> 01:04:19
requires an entire computer vision

01:04:17 --> 01:04:21
system to be built just to determine

01:04:18 --> 01:04:22
that and that seems a little bit

01:04:20 --> 01:04:24
inelegant so there are all sorts of

01:04:21 --> 01:04:26
things like this that start to come up

01:04:23 --> 01:04:27
when we think through what we really

01:04:25 --> 01:04:29
need to get reinforcement learning to

01:04:26 --> 01:04:30
happen at scale in the real world and

01:04:28 --> 01:04:33
any that many of these things actually

01:04:29 --> 01:04:35
suggest a little bit of a shortcoming in

01:04:32 --> 01:04:37
the problem formulation and a few deeper

01:04:34 --> 01:04:39
questions that we have to resolve that's

01:04:36 --> 01:04:42
really interesting I thought to like

01:04:38 --> 01:04:46
David silver bought alpha zero and it

01:04:41 --> 01:04:49
seems like there's no again the the we

01:04:45 --> 01:04:50
haven't hit the limit at all in the

01:04:48 --> 01:04:53
context when there is no broken dishes

01:04:49 --> 01:04:55
o in the game in the case of go you can

01:04:52 --> 01:04:59
it's really about just scaling compute

01:04:54 --> 01:05:00
so again like the bottleneck is the

01:04:58 --> 01:05:03
amount of money you're willing to invest

01:05:00 --> 01:05:06
in compute and then maybe the different

01:05:02 --> 01:05:08
he scaffolding around how difficult it

01:05:05 --> 01:05:10
is to scale compute maybe but there

01:05:07 --> 01:05:12
's no limit and it's interesting

01:05:09 --> 01:05:14
now we move to the real world and

01:05:11 --> 01:05:15
there's the broken dishes they solved it

01:05:13 --> 01:05:19
and the reward function like you

01:05:14 --> 01:05:21
mentioned that's really nice of what how

01:05:18 --> 01:05:23
do we push forward there do you think

01:05:20 --> 01:05:26
there's there's this kind of sample

01:05:22 --> 01:05:29
fficiency question that people bring up

01:05:25 --> 01:05:32
or you know not having to break a

01:05:28 --> 01:05:35
hundred thousand dishes is this an

01:05:31 --> 01:05:38
algorithm question is this data

01:05:34 --> 01:05:40
selection like question or what do you

01:05:37 --> 01:05:44
think how do we how do we not break them

01:05:39 --> 01:05:49
too many dishes yeah well one way we can

01:05:43 --> 01:05:52
think about that is that maybe we need

01:05:48 --> 01:05:55
to be better at reusing our data

01:05:51 --> 01:05:59
building that that iceberg so perhaps

01:05:54 --> 01:06:03
it's too much to hope that you

01:05:58 --> 01:06:05
can have a machine that in isolation in

01:06:02 --> 01:06:07
the vacuum without anything else can

01:06:04 --> 01:06:09
just master complex tasks in like in

01:06:06 --> 01:06:10
minutes the way that people do but

01:06:08 --> 01:06:12
perhaps it also doesn't have to perhaps

01:06:09 --> 01:06:15
what it really needs to do is have an

01:06:11 --> 01:06:17
existence a lifetime where it does many

01:06:14 --> 01:06:19
things and the previous things that it

01:06:16 --> 01:06:20
has done prepare it to do new things

01:06:18 --> 01:06:23
more

01:06:19 --> 01:06:24
and you know the study of these kinds of

01:06:22 --> 01:06:26
questions typically falls under

01:06:23 --> 01:06:29
categories like multitask learning or

01:06:25 --> 01:06:31
meta learning but they all fundamentally

01:06:28 --> 01:06:34
deal with the same general theme which

01:06:30 --> 01:06:37
is use experience for doing other things

01:06:33 --> 01:06:39
to learn to do new things efficiently

01:06:36 --> 01:06:41
and quickly so what do you think about

01:06:38 --> 01:06:44
if you just look at one particular case

01:06:40 --> 01:06:46
study of Tesla autopilot that has

01:06:43 --> 01:06:49
quickly approaching towards a million

01:06:45 --> 01:06:51
vehicles on the road where some

01:06:48 --> 01:06:53
percentage of the time thirty forty

01:06:50 --> 01:06:57
percent of the time is driven using the

01:06:52 --> 01:07:00
computer vision multitask Hydra net

01:06:56 --> 01:07:03
right and then the other percent that's

01:06:59 --> 01:07:07
what they call it Hydra net the the

01:07:02 --> 01:07:10
other percent is human controlled from

01:07:06 --> 01:07:14
the human side how can we use that data

01:07:09 --> 01:07:16
what's your sense like what's the signal

01:07:13 --> 01:07:17
do you have ideas in this autonomous

01:07:15 --> 01:07:20
vehicle space when people can lose their

01:07:16 --> 01:07:23
lives you know it's a it's a safety

01:07:19 --> 01:07:28
critical environment so how do we use

01:07:22 --> 01:07:30
that data so I think that actually the

01:07:27 --> 01:07:34
kind of problems that come up when we

01:07:29 --> 01:07:36
want systems that are reliable and that

01:07:33 --> 01:07:38
can kind of understand the limits of

01:07:35 --> 01:07:39
their capabilities they're actually very

01:07:37 --> 01:07:40
similar to the kind of problems that

01:07:38 --> 01:07:42
come up when we have we're doing off

01:07:39 --> 01:07:43
policy reinforcement learning so as I

01:07:41 --> 01:07:45
mentioned before and off policy

01:07:42 --> 01:07:47
reinforcement learning the big problem

01:07:44 --> 01:07:49
is you need to know when you can trust

01:07:46 --> 01:07:52
he predictions of your model because if

01:07:48 --> 01:07:53
you if you're trying to evaluate some

01:07:51 --> 01:07:54
pattern of behavior for which your model

01:07:52 --> 01:07:57
doesn't give you an accurate prediction

01:07:53 --> 01:07:58
then you shouldn't use that to to modify

01:07:56 --> 01:07:59
our policy and it's actually very

01:07:57 --> 01:08:01
similar to the problem that we're faced

01:07:58 --> 01:08:03
when we actually then deploy that thing

01:08:00 --> 01:08:06
and we want to decide whether we trust

01:08:02 --> 01:08:08
it in the moment or not so perhaps we

01:08:05 --> 01:08:09
just need to do a better job of figuring

01:08:07 --> 01:08:11
out that part and that's a very deep

01:08:08 --> 01:08:12
research question of course it's also a

01:08:10 --> 01:08:13
question that a lot of people are

01:08:11 --> 01:08:14
working on so I'm pretty optimistic that

01:08:12 --> 01:08:17
we can make some progress on that over

01:08:14 --> 01:08:19
the next few years what's the role of

01:08:16 --> 01:08:20
simulation in reinforcement learning the

01:08:18 --> 01:08:22
nd deeper enforcement learning

01:08:19 --> 01:08:25
reinforcement learning like how

01:08:21 --> 01:08:27
essential is it it's been essential for

01:08:24 --> 01:08:29
the breakthroughs so far for some

01:08:26 --> 01:08:33
interesting breakthroughs do you think

01:08:28 --> 01:08:34
it's a crutch that we rely on I mean

01:08:32 --> 01:08:37
again it's can

01:08:33 --> 01:08:39
throw off policy discussion but do you

01:08:36 --> 01:08:40
think we can ever get rid of simulation

01:08:38 --> 01:08:41
or do you think simulation will actually

01:08:39 --> 01:08:43
take over will create more and more

01:08:40 --> 01:08:47
alistic simulations that will allow us

01:08:42 --> 01:08:48
to to solve actual real-world problems

01:08:46 --> 01:08:50
like transfer the models will learn in

01:08:47 --> 01:08:52
simulation from the walk-around yes I

01:08:49 --> 01:08:54
think that simulation is a very

01:08:51 --> 01:08:56
pragmatic tool that we can use to get a

01:08:53 --> 01:08:58
lot of useful stuff to work right now

01:08:55 --> 01:09:01
but I think that in the long run we will

01:08:57 --> 01:09:03
need to build machines that can learn

01:09:00 --> 01:09:04
from real data because that's the only

01:09:02 --> 01:09:07
way that will get them to improve

01:09:03 --> 01:09:09
perpetually because if we can't have our

01:09:06 --> 01:09:10
machines learn from real data if they

01:09:08 --> 01:09:12
have to rely on simulated data

01:09:09 --> 01:09:14
eventually the simulator becomes the

01:09:11 --> 01:09:16
bottleneck in fact this is a general

01:09:13 --> 01:09:19
thing if your machine has any bottleneck

01:09:15 --> 01:09:21
that is built by humans and that doesn't

01:09:18 --> 01:09:24
improve from data it will eventually be

01:09:20 --> 01:09:25
the thing that holds it back and if

01:09:23 --> 01:09:26
you're entirely relying on your

01:09:24 --> 01:09:28
simulator that'll be the bottleneck if

01:09:25 --> 01:09:29
you're entirely really reliant on a

01:09:27 --> 01:09:32
manually designed controller that's

01:09:28 --> 01:09:34
going to be the bottleneck so simulation

01:09:31 --> 01:09:37
is very useful it's very pragmatic but

01:09:33 --> 01:09:41
it's not a substitute for being able to

01:09:36 --> 01:09:42
utilize real experience and this is by

01:09:40 --> 01:09:45
the way this is something that I think

01:09:41 --> 01:09:46
is quite relevant now especially in the

01:09:44 --> 01:09:48
context of some of the things we've

01:09:45 --> 01:09:50
discussed because some of these kind of

01:09:47 --> 01:09:51
scaffolding issues that I mentioned

01:09:49 --> 01:09:53
things like the broken dishes and the

01:09:50 --> 01:09:55
unknown reward function like these are

01:09:52 --> 01:09:58
not problems that you would ever stumble

01:09:54 --> 01:10:00
on when working in a purely simulated

01:09:57 --> 01:10:01
kind of environment but they become very

01:09:59 --> 01:10:04
apparent when we try to actually run

01:10:00 --> 01:10:06
these things in the real world do you

01:10:03 --> 01:10:07
throw a brief wrench into our discussion

01:10:05 --> 01:10:11
let me ask do you think we're living in

01:10:06 --> 01:10:12
a simulation oh I have no idea do you

01:10:10 --> 01:10:15
think that's a useful thing to even

01:10:11 --> 01:10:19
think about about the there the the

01:10:14 --> 01:10:21
fundamental physics nature of reality or

01:10:18 --> 01:10:23
another perspective the reason I think

01:10:20 --> 01:10:28
the simulation hypothesis is interesting

01:10:22 --> 01:10:31
is it's to think about how difficult is

01:10:27 --> 01:10:34
it to create sort of a virtual reality

01:10:30 --> 01:10:37
game type situation that will be

01:10:33 --> 01:10:39
sufficiently convincing to us humans or

01:10:36 --> 01:10:41
sufficiently enjoyable that would we

01:10:38 --> 01:10:43
wouldn't want to leave that's actually a

01:10:40 --> 01:10:46
practical engineering

01:10:42 --> 01:10:48
and I I personally really enjoy virtual

01:10:45 --> 01:10:50
reality but it's quite far away but I

01:10:47 --> 01:10:52
kind of think about what would it take

01:10:49 --> 01:10:54
for me to want to spend more time in

01:10:51 --> 01:10:58
virtual reality versus the real world

01:10:53 --> 01:11:01
and that's a that's a sort of a nice

01:10:57 --> 01:11:05
clean question because at that point

01:11:00 --> 01:11:06
we've reached if I want to live in a

01:11:04 --> 01:11:08
virtual reality that means we're just a

01:11:05 --> 01:11:10
few years away where majority of the

01:11:07 --> 01:11:11
population lives in a virtual reality

01:11:09 --> 01:11:13
and that's how we create the simulation

01:11:10 --> 01:11:16
right you don't need to actually

01:11:12 --> 01:11:19
simulate the you know the quantum

01:11:15 --> 01:11:21
gravity and just every aspect of the of

01:11:18 --> 01:11:23
the universe and that's a read that the

01:11:20 --> 01:11:25
interesting question for reinforcement

01:11:22 --> 01:11:26
learning too is if you want to make

01:11:24 --> 01:11:30
sufficiently realistic simulations that

01:11:25 --> 01:11:31
make it blend the difference between

01:11:29 --> 01:11:35
sort of the real world and the

01:11:30 --> 01:11:37
simulation there by just are the some of

01:11:34 --> 01:11:39
the things we've been talking about kind

01:11:36 --> 01:11:40
of the problems go away if we can create

01:11:38 --> 01:11:42
actually interesting rich simulations

01:11:39 --> 01:11:44
it's an interesting question and it

01:11:41 --> 01:11:46
actually I think your question

01:11:43 --> 01:11:48
casts your previous questions in a very

01:11:45 --> 01:11:52
interesting light because in some ways

01:11:47 --> 01:11:54
asking whether we can well the more

01:11:51 --> 01:11:56
practical more kind of practical version

01:11:53 --> 01:11:57
is like you know can we build simulators

01:11:55 --> 01:12:00
that are good enough to train

01:11:56 --> 01:12:04
essentially AI systems that will work in

01:11:59 --> 01:12:05
the world and it's kind of interesting

01:12:03 --> 01:12:07
to think about this about what this

01:12:04 --> 01:12:09
implies if true it kind of implies that

01:12:06 --> 01:12:12
it's easier to create the universe than

01:12:08 --> 01:12:14
it is to create a brain and then it

01:12:11 --> 01:12:17
seems like put this way it seems kind of

01:12:13 --> 01:12:19
weird the aspect of the simulation most

01:12:16 --> 01:12:24
interesting to me is the simulation of

01:12:18 --> 01:12:27
other humans that seems to be a

01:12:23 --> 01:12:29
complexity that makes the robotics

01:12:26 --> 01:12:32
problem harder now I don't know if every

01:12:28 --> 01:12:35
robotics person agrees with that notion

01:12:31 --> 01:12:38
just as a quick aside what are your

01:12:34 --> 01:12:41
thoughts about when the human enters the

01:12:37 --> 01:12:42
picture of the robotics problem how does

01:12:40 --> 01:12:44
that change the reinforcement learning

01:12:41 --> 01:12:48
problem the the learning problem in

01:12:43 --> 01:12:52
general yeah I think that's a it's a

01:12:47 --> 01:12:54
kind of a complex question and I guess

01:12:51 --> 01:12:56
my hope for a while had been that if we

01:12:53 --> 01:12:58
build these

01:12:55 --> 01:13:01
robotic learning systems that that are

01:12:57 --> 01:13:02
multitask that utilize lots of prior

01:13:00 --> 01:13:05
data and that learn from their own

01:13:01 --> 01:13:07
experience the bit where they have to

01:13:04 --> 01:13:08
interact with people will be perhaps

01:13:06 --> 01:13:10
handled in much the same way as all the

01:13:07 --> 01:13:12
other bits so if they have prior

01:13:09 --> 01:13:14
experience in attracting with people and

01:13:11 --> 01:13:15
they can learn from their own experience

01:13:13 --> 01:13:18
of interacting with people for this new

01:13:14 --> 01:13:20
task maybe that'll be enough now of

01:13:17 --> 01:13:21
course there if it's not enough there

01:13:19 --> 01:13:22
are many other things we can do and

01:13:20 --> 01:13:24
there's quite a bit of research on that

01:13:21 --> 01:13:28
in that area but I think it's worth a

01:13:23 --> 01:13:30
shot to see whether the the the multi

01:13:27 --> 01:13:33
agent interaction the the ability to

01:13:29 --> 01:13:35
understand that other beings in the

01:13:32 --> 01:13:37
world have their own goals and tensions

01:13:34 --> 01:13:39
and thoughts and so on whether that kind

01:13:36 --> 01:13:42
of understanding can emerge

01:13:38 --> 01:13:45
automatically from simply learning to do

01:13:41 --> 01:13:47
things with and maximize utility that

01:13:44 --> 01:13:51
information arises from the data you've

01:13:46 --> 01:13:53
said something about gravity sort of

01:13:50 --> 01:13:55
that you don't need to explicitly inject

01:13:53 --> 01:13:57
anything into the system they can be

01:13:54 --> 01:13:58
learned from the data and gravity is an

01:13:56 --> 01:14:00
example of something that could be

01:13:57 --> 01:14:06
learned from data sort of like the

01:13:59 --> 01:14:07
physics of the world like what what are

01:14:05 --> 01:14:10
the limits of what we can learn from

01:14:06 --> 01:14:14
data do you really do you think we can

01:14:09 --> 01:14:15
so a very simple clean way to ask that

01:14:13 --> 01:14:19
is do you really think we can learn

01:14:14 --> 01:14:22
gravity from just data the idea the the

01:14:18 --> 01:14:24
laws of gravity so it says something

01:14:21 --> 01:14:26
that I think is a common kind of pitfall

01:14:23 --> 01:14:31
when thinking about prior knowledge and

01:14:25 --> 01:14:34
learning is to assume that just because

01:14:30 --> 01:14:35
we know something then that it's better

01:14:33 --> 01:14:37
to tell the Machine about that rather

01:14:34 --> 01:14:42
than have it I regret out on its own in

01:14:36 --> 01:14:44
many cases things that are important

01:14:41 --> 01:14:46
hat affect many of the events that the

01:14:43 --> 01:14:48
Machine will experience are actually

01:14:45 --> 01:14:50
pretty easy to learn like you know if

01:14:47 --> 01:14:52
things if every time you drop something

01:14:49 --> 01:14:54
it falls down like yeah you might not

01:14:51 --> 01:14:55
get the you know you might get kind of

01:14:53 --> 01:14:57
an in the Newton's version not Einsteins

01:14:54 --> 01:14:59
version but it'll be pretty good and it

01:14:56 --> 01:15:02
will probably be sufficient for you to

01:14:58 --> 01:15:04
act rationally in the world because you

01:15:01 --> 01:15:06
see the phenomena all the time so things

01:15:03 --> 01:15:08
that are readily apparent from the data

01:15:05 --> 01:15:09
we might not need to specify those by

01:15:07 --> 01:15:10
hand it might actually be easier to let

01:15:08 --> 01:15:12
he Machine figure

01:15:09 --> 01:15:17
it just feels like that there might be a

01:15:11 --> 01:15:19
space of many local local minima in

01:15:16 --> 01:15:22
terms of theories of this world that we

01:15:18 --> 01:15:22
would discover and get stuck on yeah of

01:15:21 --> 01:15:25
course

01:15:21 --> 01:15:28
Newtonian mechanics is not necessarily

01:15:24 --> 01:15:31
easy to come by

01:15:27 --> 01:15:32
eah and well in fact in in some fields

01:15:30 --> 01:15:34
of science for example human

01:15:31 --> 01:15:36
civilizations itself full of these local

01:15:33 --> 01:15:40
optima so for example if you think about

01:15:35 --> 01:15:42
how people try to figure out biology and

01:15:39 --> 01:15:44
medicine you know for the longest time

01:15:41 --> 01:15:46
the kind of rules like the kind of

01:15:43 --> 01:15:48
principles that serve us very well in

01:15:45 --> 01:15:50
our day to day lives actually serve us

01:15:47 --> 01:15:52
very poorly in understanding medicine

01:15:49 --> 01:15:55
and biology we had kind of very

01:15:51 --> 01:15:56
superstitious and weird ideas about how

01:15:54 --> 01:15:59
the body worked until the advent of the

01:15:55 --> 01:16:01
modern scientific method so that does

01:15:58 --> 01:16:02
eem to be you know a failing of this

01:16:00 --> 01:16:05
approach but it's also a failing of

01:16:01 --> 01:16:08
human intelligence arguably maybe a

01:16:04 --> 01:16:10
small aside but some you know the idea

01:16:07 --> 01:16:11
of self play is fascinating

01:16:09 --> 01:16:13
reinforcement learning sort of these

01:16:10 --> 01:16:16
competitive and creating a competitive

01:16:12 --> 01:16:19
context in which agents can play against

01:16:15 --> 01:16:21
each other in a sort of at the same

01:16:18 --> 01:16:23
skill level and thereby increasing each

01:16:20 --> 01:16:25
other school it seems to be this kind of

01:16:22 --> 01:16:27
self improving mechanism is

01:16:24 --> 01:16:30
exceptionally powerful in the context

01:16:26 --> 01:16:33
where it could be applied first of all

01:16:29 --> 01:16:35
is that beautiful to you that this

01:16:32 --> 01:16:39
mechanism work as well as it does and

01:16:34 --> 01:16:42
also can be generalized to other context

01:16:38 --> 01:16:44
like in the robotic space or anything

01:16:41 --> 01:16:48
that's applicable to the real world I

01:16:43 --> 01:16:51
think that it's a very interesting idea

01:16:47 --> 01:16:54
nd I suspect that the bottleneck to

01:16:50 --> 01:16:55
actually generalizing it to the robotic

01:16:53 --> 01:16:57
setting is actually gonna be the same as

01:16:54 --> 01:17:00
the bottleneck for everything else

01:16:56 --> 01:17:02
that we need to be able to build

01:16:59 --> 01:17:04
machines that can get better and better

01:17:01 --> 01:17:07
through natural interaction with the

01:17:03 --> 01:17:09
world and once we can do that then they

01:17:06 --> 01:17:10
can go out and play with they can play

01:17:08 --> 01:17:12
with each other they can play with

01:17:09 --> 01:17:15
people they can play with the natural

01:17:11 --> 01:17:16
environment but before we get there

01:17:14 --> 01:17:17
we've got all these other problems we've

01:17:15 --> 01:17:19
got we have to get out of the way

01:17:16 --> 01:17:20
there's no shortcut around that you have

01:17:18 --> 01:17:21
to interact with the national

01:17:19 --> 01:17:23
environment

01:17:20 --> 01:17:25
well because in in a self play setting

01:17:22 --> 01:17:28
you still need a mediating mechanisms so

01:17:24 --> 01:17:30
the the reason that you know self play

01:17:27 --> 01:17:32
works for a board game is because the

01:17:29 --> 01:17:35
rules of that board game mediate the

01:17:31 --> 01:17:36
interaction between the agents so the

01:17:34 --> 01:17:38
kind of intelligent behavior that will

01:17:35 --> 01:17:41
emerge depends very heavily on the

01:17:37 --> 01:17:43
nature of that mediating mechanism so on

01:17:40 --> 01:17:45
the side of reward functions that's

01:17:42 --> 01:17:46
coming up with good reward function

01:17:44 --> 01:17:51
seems to be the thing that we associate

01:17:45 --> 01:17:53
with general Intel like human beings

01:17:50 --> 01:17:56
eem to value the idea of developing our

01:17:52 --> 01:17:59
own reward functions of you know

01:17:55 --> 01:18:01
arriving in meaning and so on and yet

01:17:58 --> 01:18:04
for reinforcement learning we often kind

01:18:00 --> 01:18:07
of specify that's the given what's your

01:18:03 --> 01:18:10
sense of how we develop a reward for

01:18:06 --> 01:18:12
good you know good reward functions yeah

01:18:09 --> 01:18:13
I think that's a very complicated and

01:18:11 --> 01:18:15
very deep question and you're completely

01:18:12 --> 01:18:19
right that classically in reinforcement

01:18:14 --> 01:18:20
learning this question has kind of been

01:18:18 --> 01:18:23
treated as a non-issue that you sort of

01:18:19 --> 01:18:26
treat the reward as this external thing

01:18:22 --> 01:18:28
that comes from some other bit of your

01:18:25 --> 01:18:31
biology and you can don't worry about it

01:18:27 --> 01:18:33
and I do think that that's actually you

01:18:30 --> 01:18:34
know a little bit of a mistake that we

01:18:32 --> 01:18:35
shouldn't worry about it and we can

01:18:33 --> 01:18:38
approach you in a few different ways we

01:18:34 --> 01:18:40
can approach it for instance by thinking

01:18:37 --> 01:18:41
of rewards as a communication medium we

01:18:39 --> 01:18:43
can say well how does a person

01:18:40 --> 01:18:45
communicate to a robot what its

01:18:42 --> 01:18:48
objective is you can approach it also as

01:18:44 --> 01:18:50
ort of more of an intrinsic motivation

01:18:47 --> 01:18:53
medium you could say can we write down

01:18:49 --> 01:18:56
kind of a general objective that leads

01:18:52 --> 01:18:58
to good capability like for example can

01:18:55 --> 01:18:59
you write down some objective such that

01:18:57 --> 01:19:01
even in the absence of any other task if

01:18:58 --> 01:19:03
you maximize that objective you'll sort

01:19:00 --> 01:19:06
of learn useful things this is a

01:19:02 --> 01:19:07
something that has sometimes been called

01:19:05 --> 01:19:09
unsupervised reinforcement learning

01:19:06 --> 01:19:12
which i think is a really fascinating

01:19:08 --> 01:19:14
area of research especially today we've

01:19:11 --> 01:19:15
done a bit of work on that recently one

01:19:13 --> 01:19:19
of the things we've studied is whether

01:19:14 --> 01:19:21
we can have some notion of of

01:19:18 --> 01:19:23
unsupervised reinforcement learning by

01:19:20 --> 01:19:26
means of you know information theoretic

01:19:22 --> 01:19:27
quantities like for instance minimizing

01:19:25 --> 01:19:29
a Bayesian measure of surprise this is

01:19:26 --> 01:19:30
an idea that was you know pioneered

01:19:28 --> 01:19:32
actually in the computational

01:19:29 --> 01:19:33
neuroscience community by folks like

01:19:31 --> 01:19:35
Carl Fritton

01:19:32 --> 01:19:36
we've done some work recently that shows

01:19:34 --> 01:19:38
that you can actually learn pretty

01:19:35 --> 01:19:41
interesting skills by essentially

01:19:37 --> 01:19:42
behaving in a way that allows you to

01:19:40 --> 01:19:44
make accurate predictions about the

01:19:42 --> 01:19:46
world it seems a little circular do the

01:19:43 --> 01:19:50
things that will lead to you getting the

01:19:45 --> 01:19:52
right answer for prediction but you can

01:19:49 --> 01:19:54
you know by doing this you can sort of

01:19:51 --> 01:19:55
discover stable niches in the world you

01:19:53 --> 01:19:58
can discover that if you're playing

01:19:54 --> 01:20:00
Tetris then correctly you know clearing

01:19:57 --> 01:20:01
the rows will let you play Tetris for

01:19:59 --> 01:20:03
longer and keep the board nice and clean

01:20:00 --> 01:20:05
which sort of satisfies some desire for

01:20:02 --> 01:20:07
der in the world and as a result to

01:20:04 --> 01:20:09
get some degree of leverage over your

01:20:06 --> 01:20:12
domain so we're exploring that pretty

01:20:08 --> 01:20:15
actively is there a role for a human

01:20:11 --> 01:20:17
otion of curiosity in itself being the

01:20:14 --> 01:20:21
reward sort of discovering new things

01:20:16 --> 01:20:22
about the war the world so one of the

01:20:20 --> 01:20:26
things that I'm pretty interested in is

01:20:21 --> 01:20:28
actually whether discovering new things

01:20:25 --> 01:20:30
can actually be an emergent property of

01:20:27 --> 01:20:33
some other objective that quantifies

01:20:29 --> 01:20:36
capability so new things for the sake of

01:20:32 --> 01:20:38
new things maybe it's not maybe might

01:20:35 --> 01:20:40
not by itself be the right answer but

01:20:37 --> 01:20:42
perhaps we can figure out an objective

01:20:39 --> 01:20:45
for which discovering new things is

01:20:42 --> 01:20:46
actually the natural consequence that's

01:20:44 --> 01:20:48
omething we're working on right now but

01:20:45 --> 01:20:49
I don't have a clear answer for you

01:20:47 --> 01:20:52
there yet that's still work-in-progress

01:20:48 --> 01:20:57
you mean just as a security observation

01:20:51 --> 01:21:00
to see sort of creative the patterns of

01:20:56 --> 01:21:02
curiosity on the way to optimize for a

01:20:59 --> 01:21:03
particular protector on the way to

01:21:01 --> 01:21:07
ptimize for a particular measure of

01:21:03 --> 01:21:12
capability is is there ways to

01:21:06 --> 01:21:15
understand or anticipate unexpected

01:21:11 --> 01:21:17
unintended consequences of particular

01:21:14 --> 01:21:20
eward functions

01:21:16 --> 01:21:22
ort of anticipate the kind of

01:21:19 --> 01:21:26
strategies that might be developed and

01:21:21 --> 01:21:29
try to avoid highly detrimental strategy

01:21:25 --> 01:21:30
eah so classically this is something

01:21:28 --> 01:21:32
that has been pretty hard in

01:21:29 --> 01:21:34
reinforcement learning because it's

01:21:31 --> 01:21:36
difficult for a designer to have good

01:21:33 --> 01:21:37
intuition about you know what a learning

01:21:35 --> 01:21:40
outcome will come up with when they give

01:21:36 --> 01:21:42
it some objective there are ways to

01:21:39 --> 01:21:44
mitigate that one way to mitigate it is

01:21:41 --> 01:21:46
to actually define an objective that

01:21:43 --> 01:21:48
says like don't do weird stuff

01:21:45 --> 01:21:50
you can actually quantify you can say

01:21:47 --> 01:21:52
just like don't enter situations that

01:21:49 --> 01:21:54
have low probability under the

01:21:51 --> 01:21:56
distribution of states you've seen

01:21:53 --> 01:21:58
before it turns out that that's actually

01:21:55 --> 01:22:01
one very good way to do off policy

01:21:57 --> 01:22:03
reinforcement learning actually so we

01:22:00 --> 01:22:07
can do some things like that if we

01:22:02 --> 01:22:08
slowly venture in speaking about reward

01:22:06 --> 01:22:11
functions into greater and greater

01:22:07 --> 01:22:14
levels of intelligence there's a mr.

01:22:10 --> 01:22:19
Russell thinks about this the alignment

01:22:13 --> 01:22:23
of AI systems with us humans so how do

01:22:18 --> 01:22:26
we ensure that AG AI systems align with

01:22:22 --> 01:22:31
us humans it's a it's kind of a reward

01:22:25 --> 01:22:34
function question of specifying the

01:22:30 --> 01:22:37
behavior of AI systems such that their

01:22:33 --> 01:22:40
success aligns with us with the broader

01:22:36 --> 01:22:42
intended success interest of human

01:22:39 --> 01:22:44
beings do you have thoughts on this they

01:22:41 --> 01:22:46
have kind of concerns of where

01:22:43 --> 01:22:48
inforcement learning fits into this or

01:22:45 --> 01:22:50
are you really focused on the current

01:22:47 --> 01:22:52
moment of us being quite far away and

01:22:49 --> 01:22:54
trying to solve the robotics problem I

01:22:51 --> 01:22:57
don't have a great answer to this but

01:22:53 --> 01:22:59
you know and I do think that this is a

01:22:56 --> 01:23:01
problem that's that's important to

01:22:58 --> 01:23:04
figure out for my part I'm actually a

01:23:01 --> 01:23:06
bit more concerned about the other side

01:23:03 --> 01:23:09
of the of this equation that you know

01:23:05 --> 01:23:12
maybe rather than unintended

01:23:08 --> 01:23:14
consequences for objectives that are

01:23:11 --> 01:23:15
specified too well I'm actually more

01:23:13 --> 01:23:17
worried right now about unintended

01:23:14 --> 01:23:20
consequences for objectives that are not

01:23:16 --> 01:23:23
optimized well enough which might become

01:23:19 --> 01:23:25
a very pressing problem when we for

01:23:22 --> 01:23:27
instance try to use these techniques for

01:23:24 --> 01:23:30
safety critical systems like cars and

01:23:26 --> 01:23:32
aircraft and so on I think at some point

01:23:29 --> 01:23:34
we'll face the issue of objectives being

01:23:31 --> 01:23:36
optimized too well but right now I think

01:23:33 --> 01:23:38
we're more likely to face the issue of

01:23:35 --> 01:23:39
them not being optimized well enough but

01:23:37 --> 01:23:41
you don't think on intended consequence

01:23:38 --> 01:23:43
can arise even when you're far from

01:23:40 --> 01:23:45
optimality sort of like on the path to

01:23:42 --> 01:23:47
it oh no I think I unattended

01:23:44 --> 01:23:49
consequence can absolutely arise it's

01:23:46 --> 01:23:52
just I think right now the bottleneck

01:23:49 --> 01:23:55
for improving reliability safety and

01:23:51 --> 01:23:57
things like that is more with systems

01:23:54 --> 01:23:59
that like need to work better that the

01:23:56 --> 01:24:01
optimize their objective better

01:23:58 --> 01:24:04
you have thoughts concerns about

01:24:00 --> 01:24:07
existential threats of human level

01:24:03 --> 01:24:09
intelligence sort of if we put on our

01:24:06 --> 01:24:12
hat of looking in ten twenty a hundred

01:24:08 --> 01:24:15
five hundred years from now give

01:24:11 --> 01:24:17
concerns about existential threats of AI

01:24:14 --> 01:24:19
systems I think there are absolutely

01:24:16 --> 01:24:20
existential threats for AI systems just

01:24:18 --> 01:24:25
like there are for any powerful

01:24:19 --> 01:24:26
technology but I think that the these

01:24:24 --> 01:24:30
kinds of problems can take many forms

01:24:25 --> 01:24:33
and and some of those forms will come

01:24:29 --> 01:24:37
down to you know people with nefarious

01:24:32 --> 01:24:39
intent some of them will come down to AI

01:24:36 --> 01:24:41
systems that have some fatal flaws and

01:24:38 --> 01:24:43
some of them will will of course come

01:24:40 --> 01:24:47
down to AI systems that are too capable

01:24:42 --> 01:24:50
in some way but among this set of

01:24:46 --> 01:24:51
potential concerns I would actually be

01:24:49 --> 01:24:53
much more concerned about the first two

01:24:50 --> 01:24:55
right now and principally the one with

01:24:52 --> 01:24:57
nefarious humans because you know just

01:24:54 --> 01:24:58
hrough all of human history actress

01:24:56 --> 01:25:01
that I Ferris humans that have been the

01:24:57 --> 01:25:03
problem not the nefarious machines then

01:25:00 --> 01:25:06
I am about the others and I think that

01:25:02 --> 01:25:08
right now the best that I can do to make

01:25:05 --> 01:25:10
sure things go well is to you know build

01:25:07 --> 01:25:11
the best technology I can and also

01:25:09 --> 01:25:16
hopefully promote responsible use of

01:25:10 --> 01:25:19
that technology do you think RL systems

01:25:15 --> 01:25:21
has something to teach us humans

01:25:18 --> 01:25:23
you said nefarious humans getting us in

01:25:20 --> 01:25:25
trouble I mean machine learning system

01:25:22 --> 01:25:29
self in some ways have revealed to us

01:25:24 --> 01:25:30
the ethical flaws in our data in that

01:25:28 --> 01:25:33
same kind of wake and reinforce some

01:25:29 --> 01:25:36
learning teach us about ourselves has it

01:25:32 --> 01:25:38
aught something what have you learned

01:25:35 --> 01:25:41
about yourself from trying to build

01:25:37 --> 01:25:44
robots and reinforce the learning

01:25:40 --> 01:25:48
systems I'm not sure what I've learned

01:25:43 --> 01:25:51
about myself but maybe part of the

01:25:47 --> 01:25:54
answer to your question might become a

01:25:50 --> 01:25:55
little bit more apparent once we see

01:25:53 --> 01:25:57
more widespread deployment of

01:25:54 --> 01:26:00
reinforcement learning for decision

01:25:56 --> 01:26:02
making support in you know in domains

01:25:59 --> 01:26:05
like you know healthcare education

01:26:01 --> 01:26:07
social media etc and I think we will see

01:26:04 --> 01:26:09
some interesting stuff emerge there we

01:26:06 --> 01:26:12
will see for instance what kind of

01:26:08 --> 01:26:14
behaviors these systems come up with

01:26:11 --> 01:26:16
in situations the where there is

01:26:13 --> 01:26:17
interaction with humans and and where

01:26:15 --> 01:26:20
they have you know possibility of

01:26:16 --> 01:26:22
influencing human behavior I think we're

01:26:19 --> 01:26:23
not quite there yet but maybe in the

01:26:21 --> 01:26:24
next two years we'll see some

01:26:22 --> 01:26:24
interesting stuff coming out in that

01:26:23 --> 01:26:26
area

01:26:23 --> 01:26:29
I hope outside the research because the

01:26:25 --> 01:26:31
exciting space where this could be

01:26:28 --> 01:26:33
observed is sort of large companies that

01:26:30 --> 01:26:36
deal with large data and I hope there's

01:26:32 --> 01:26:38
ome transparency and one of the things

01:26:35 --> 01:26:41
it's unclear when I look at social

01:26:37 --> 01:26:43
networks and just online is why an

01:26:40 --> 01:26:45
algorithm did something or whether you

01:26:42 --> 01:26:48
know even an algorithm was involved and

01:26:44 --> 01:26:51
that'd be interesting as a formal

01:26:47 --> 01:26:55
research perspective just to to observe

01:26:50 --> 01:26:58
the results of algorithms to open up

01:26:54 --> 01:27:00
that data or did these be sufficiently

01:26:57 --> 01:27:03
transparent about the behavior of these

01:26:59 --> 01:27:04
-a systems in the real world what's

01:27:02 --> 01:27:07
your sense I don't know if you looked at

01:27:03 --> 01:27:11
he blog post bitter lesson by Irish

01:27:06 --> 01:27:14
Sutton where it looks at serve the big

01:27:10 --> 01:27:17
lesson of research in AI in

01:27:13 --> 01:27:19
reinforcement learning is that simple

01:27:16 --> 01:27:22
methods general methods that leverage

01:27:18 --> 01:27:24
computation seem to work well so

01:27:21 --> 01:27:26
basically don't try to do any kind of

01:27:23 --> 01:27:29
ancy algorithms just wait for

01:27:25 --> 01:27:32
computation and get fast do you share

01:27:28 --> 01:27:35
this kind of intuition I think the high

01:27:31 --> 01:27:37
level idea makes a lot of sense I'm not

01:27:34 --> 01:27:38
sure that my takeaway would be that we

01:27:36 --> 01:27:41
don't need to work on algorithms I think

01:27:37 --> 01:27:45
that my takeaway would be that we should

01:27:40 --> 01:27:49
work on general algorithms and actually

01:27:44 --> 01:27:52
I think that this idea of needing to

01:27:48 --> 01:27:55
better automate the acquisition of

01:27:51 --> 01:27:58
experience in the real world actually

01:27:54 --> 01:28:01
follows pretty naturally from Rich

01:27:57 --> 01:28:05
Sutton's conclusion so if the claim is

01:28:00 --> 01:28:07
that automated general methods plus data

01:28:04 --> 01:28:08
leads to good results then it makes

01:28:06 --> 01:28:10
ense that we should build general

01:28:07 --> 01:28:11
methods and we should build the kind of

01:28:09 --> 01:28:13
methods that we can deploy and get them

01:28:10 --> 01:28:16
to go out there and like collect their

01:28:12 --> 01:28:18
experience autonomously I think that you

01:28:15 --> 01:28:20
know one place where I think that the

01:28:17 --> 01:28:21
current state of things Falls a little

01:28:19 --> 01:28:23
bit short of that is actually that the

01:28:20 --> 01:28:24
going out there collecting the data

01:28:22 --> 01:28:26
utonomously

01:28:23 --> 01:28:27
which is easy to do in a simulator board

01:28:25 --> 01:28:29
game but very hard to do in the real

01:28:26 --> 01:28:33
world yeah it keeps coming back to this

01:28:28 --> 01:28:36
one problem right it's uh so your mind

01:28:32 --> 01:28:40
is focused there now in this real world

01:28:35 --> 01:28:44
it just seems scary the step of

01:28:39 --> 01:28:46
collecting the data and it seems unclear

01:28:43 --> 01:28:48
to me how we can do it effectively well

01:28:45 --> 01:28:50
you know it's seven billion people in

01:28:47 --> 01:28:51
the world each of them had to do that at

01:28:49 --> 01:28:53
some point in their lives

01:28:50 --> 01:28:56
and we should leverage that experience

01:28:52 --> 01:28:58
that they've all done the we should be

01:28:55 --> 01:29:04
able to try to collect that kind of data

01:28:57 --> 01:29:07
okay big questions maybe stepping back

01:29:03 --> 01:29:10
through your life would book or books

01:29:06 --> 01:29:14
technical or fiction or philosophical

01:29:09 --> 01:29:16
had a big impact onion on the way you

01:29:13 --> 01:29:19
saw the world I know he thought about in

01:29:15 --> 01:29:23
the world your life in general hmm and

01:29:18 --> 01:29:25
maybe what books if is different would

01:29:22 --> 01:29:27
you recommend people consider reading on

01:29:24 --> 01:29:29
their own intellectual journey it could

01:29:26 --> 01:29:33
be within reinforcement learning but

01:29:28 --> 01:29:37
could be very much bigger I don't know

01:29:32 --> 01:29:41
if this is like a scientifically like

01:29:36 --> 01:29:43
particularly meaningful answer but like

01:29:40 --> 01:29:46
the honest answers that I I actually

01:29:42 --> 01:29:48
found a lot of the work by Isaac Asimov

01:29:45 --> 01:29:49
to be very inspiring when I was younger

01:29:47 --> 01:29:52
I don't know if that has anything to do

01:29:48 --> 01:29:53
with with AI necessarily you don't think

01:29:51 --> 01:29:58
it had a ripple effect in your life

01:29:52 --> 01:30:04
maybe it did but yeah I like I think

01:29:57 --> 01:30:08
that a vision of a future where well

01:30:03 --> 01:30:09
first of all artificial mice artificial

01:30:07 --> 01:30:11
intelligence system artificial robotic

01:30:08 --> 01:30:16
systems have you know kind of a big

01:30:10 --> 01:30:19
place a big role in society and where we

01:30:15 --> 01:30:20
try to imagine the sort of the the

01:30:18 --> 01:30:22
limiting case of technological and

01:30:19 --> 01:30:27
advancement and how that might play out

01:30:21 --> 01:30:30
in in our future history but yeah I

01:30:26 --> 01:30:33
think that the that was in some way

01:30:29 --> 01:30:35
influential I don't really know how but

01:30:32 --> 01:30:38
and I would recommend it I mean if

01:30:34 --> 01:30:40
nothing else you'd be well entertained

01:30:37 --> 01:30:41
id you first yourself like fall in love

01:30:39 --> 01:30:46
with the idea of artificial intelligence

01:30:40 --> 01:30:49
get captivated by this field so my

01:30:45 --> 01:30:52
honest answer here is actually that I

01:30:48 --> 01:30:53
only really started to think think about

01:30:51 --> 01:30:55
it as a that's something that I might

01:30:52 --> 01:30:58
want to do actually in graduate school

01:30:54 --> 01:31:00
pretty light and a big part of that was

01:30:57 --> 01:31:04
that until you know somewhere around

01:30:59 --> 01:31:06
2009 2010 it just wasn't really high on

01:31:03 --> 01:31:08
my priority list because I I didn't

01:31:05 --> 01:31:09
hink that it was something where we're

01:31:07 --> 01:31:15
going to see very substantial advances

01:31:08 --> 01:31:17
in my lifetime and you know maybe in

01:31:14 --> 01:31:19
terms of my career the time when I

01:31:16 --> 01:31:22
really decided I wanted to work on this

01:31:18 --> 01:31:24
was when I actually took a seminar

01:31:21 --> 01:31:27
course that was taught by Professor and

01:31:23 --> 01:31:29
ring and you know at that point I of

01:31:26 --> 01:31:30
course had some had like a decent

01:31:28 --> 01:31:31
understanding of the technical things

01:31:29 --> 01:31:33
involved but one of the things that

01:31:30 --> 01:31:35
really resonated with me was when he

01:31:32 --> 01:31:37
said in the opening lecture something to

01:31:34 --> 01:31:38
the effect of like well he used to have

01:31:36 --> 01:31:40
graduate students come to him and talk

01:31:37 --> 01:31:42
about how they want to work on AI and he

01:31:39 --> 01:31:43
would kind of chuckle and give them some

01:31:41 --> 01:31:45
math problem to deal with but now he's

01:31:43 --> 01:31:46
actually thinking that this is an area

01:31:44 --> 01:31:49
where we might see like substantial

01:31:45 --> 01:31:51
advances in our lifetime and that kind

01:31:48 --> 01:31:53
of got me thinking because you know it's

01:31:50 --> 01:31:55
an abstract sense yeah like you can kind

01:31:52 --> 01:31:58
of imagine not but in a very real sense

01:31:54 --> 01:31:59
when someone who had been working on

01:31:57 --> 01:32:02
that kind of stuff their whole career

01:31:58 --> 01:32:05
suddenly says that yeah like that had

01:32:01 --> 01:32:06
some effect on me yeah this

01:32:04 --> 01:32:11
might be a special moment in the history

01:32:05 --> 01:32:14
of the field that this is where we might

01:32:10 --> 01:32:17
see some some interesting breakthroughs

01:32:13 --> 01:32:19
o in the space of advice somebody who's

01:32:16 --> 01:32:21
interested in getting started and

01:32:18 --> 01:32:23
machine learning or reinforcement

01:32:20 --> 01:32:24
learning what advice would you give to

01:32:22 --> 01:32:27
maybe an undergraduate student or maybe

01:32:23 --> 01:32:30
ven younger how what are the first

01:32:26 --> 01:32:32
eps to take and further on what are

01:32:29 --> 01:32:37
the stapes steps to take on that journey

01:32:31 --> 01:32:43
so something that I think is important

01:32:36 --> 01:32:45
o do is to is to not be afraid to like

01:32:42 --> 01:32:47
spend time imagining the kind of outcome

01:32:44 --> 01:32:50
that you might like to see so you know

01:32:46 --> 01:32:52
one outcome might be a successful career

01:32:49 --> 01:32:53
large paycheck or something or

01:32:51 --> 01:32:55
state-of-the-art results in some

01:32:52 --> 01:32:56
benchmark but hopefully that's not the

01:32:54 --> 01:33:01
thing that's like the main driving force

01:32:55 --> 01:33:03
for somebody but I I think that if

01:33:00 --> 01:33:05
someone who's a student considering a

01:33:02 --> 01:33:07
career in AI like takes a little while

01:33:04 --> 01:33:08
sits down and thinks like what do I

01:33:06 --> 01:33:10
really want to see what I want to see a

01:33:07 --> 01:33:11
machine do what I want what do I want to

01:33:09 --> 01:33:13
see a robot do what I want to do and

01:33:10 --> 01:33:15
what I want to see a natural language

01:33:12 --> 01:33:17
system just like imagine you know

01:33:14 --> 01:33:19
imagine it almost like a commercial for

01:33:16 --> 01:33:21
a future product or something or like

01:33:18 --> 01:33:23
something that you'd like to see in

01:33:20 --> 01:33:24
the world and then actually sit down and

01:33:22 --> 01:33:27
think about the steps that are necessary

01:33:23 --> 01:33:29
to get there and hopefully that thing is

01:33:26 --> 01:33:30
not a better number on imagenet

01:33:28 --> 01:33:32
classification it's like it's probably

01:33:29 --> 01:33:33
like an actual thing that we can't do

01:33:31 --> 01:33:36
today that would be really awesome

01:33:32 --> 01:33:38
whether it's a robot Butler or a you

01:33:35 --> 01:33:40
know a really awesome healthcare

01:33:37 --> 01:33:42
decision making support system whatever

01:33:39 --> 01:33:44
it is that you find inspiring and I

01:33:41 --> 01:33:46
think that thinking about that and then

01:33:43 --> 01:33:47
backtracking from there and imagining

01:33:45 --> 01:33:49
the steps needed to get there will

01:33:46 --> 01:33:51
actually do much better research it'll

01:33:48 --> 01:33:54
ead to rethinking the assumptions it'll

01:33:50 --> 01:33:57
ead to working on the bottlenecks other

01:33:53 --> 01:33:59
people aren't working on and then

01:33:56 --> 01:34:02
aturally to turn to you we've talked

01:33:58 --> 01:34:04
about reward functions and you just give

01:34:01 --> 01:34:06
an advice and looking forward I would

01:34:03 --> 01:34:08
like to see what kind of change you

01:34:05 --> 01:34:10
would like to make in the world what do

01:34:07 --> 01:34:12
you think ridiculous big question what

01:34:09 --> 01:34:14
do you think is the meaning of life what

01:34:11 --> 01:34:18
is the meaning of your life what gives

01:34:13 --> 01:34:24
you fulfillment purpose happiness and

01:34:17 --> 01:34:27
meaning that's a very big question um

01:34:23 --> 01:34:29
what's the reward function under which

01:34:26 --> 01:34:31
you are operating yeah I think one thing

01:34:28 --> 01:34:35
that does give you know if not meaning

01:34:30 --> 01:34:37
at least satisfaction is some degree of

01:34:34 --> 01:34:38
confidence that I'm working on a problem

01:34:36 --> 01:34:41
that really matters I feel like it's

01:34:37 --> 01:34:43
less important to me to like actually

01:34:40 --> 01:34:48
solve a problem but it's it's quite nice

01:34:42 --> 01:34:51
to take things to spend my time on that

01:34:47 --> 01:34:54
I believe really matter and I I try

01:34:50 --> 01:34:56
pretty hard to to look for that I don't

01:34:53 --> 01:34:59
know if it's easy to answer this but if

01:34:55 --> 01:35:01
you're successful what does that look

01:34:58 --> 01:35:05
like what's the

01:35:00 --> 01:35:07
y dream enough of course success is

01:35:04 --> 01:35:11
built on top of success and you keep

01:35:06 --> 01:35:14
going forever but what is the dream yeah

01:35:10 --> 01:35:15
so one very concrete thing or maybe as

01:35:13 --> 01:35:19
concrete as it's gonna get

01:35:14 --> 01:35:22
here is is to see machines that actually

01:35:18 --> 01:35:24
get better and better the you know the

01:35:21 --> 01:35:26
longer they exists in the world and that

01:35:23 --> 01:35:27
kind of seems like on the surface one

01:35:25 --> 01:35:29
might even think that that's something

01:35:26 --> 01:35:34
that we have today but I think we really

01:35:28 --> 01:35:38
don't I think that there is unending

01:35:33 --> 01:35:40
complexity in the universe and to date

01:35:37 --> 01:35:43
all the machines that we've been able to

01:35:39 --> 01:35:45
build don't sort of improve up to the

01:35:42 --> 01:35:47
limit of that complexity they they hit a

01:35:44 --> 01:35:49
wall somewhere maybe they hit a wall

01:35:46 --> 01:35:52
because they're in a simulator that has

01:35:48 --> 01:35:53
that is only a very limited very pale

01:35:51 --> 01:35:55
imitation of the real world or they hit

01:35:52 --> 01:35:57
a wall because they rely on a label

01:35:54 --> 01:36:00
dataset but they never hit the wall of

01:35:56 --> 01:36:03
like running out of stuff to see like

01:35:59 --> 01:36:04
the did so you know I I'd like to build

01:36:02 --> 01:36:06
a machine that that can go as far as

01:36:04 --> 01:36:08
possible and that runs up against the

01:36:05 --> 01:36:11
ceiling of the complexity of the

01:36:07 --> 01:36:13
universe yes well I don't think there's

01:36:10 --> 01:36:15
a better way to end it Sergey thank you

01:36:12 --> 01:36:18
so much is a huge honor I can't wait to

01:36:14 --> 01:36:21
see the amazing work they have to

01:36:17 --> 01:36:23
publish and in education space in terms

01:36:20 --> 01:36:24
of reinforcement learning thank you for

01:36:22 --> 01:36:26
inspiring the world thank you for the

01:36:23 --> 01:36:28
great research you do thank you thanks

01:36:25 --> 01:36:30
for listening to this conversation with

01:36:27 --> 01:36:34
Sergey levine and thank you to our

01:36:29 --> 01:36:36
sponsors cash app and expressvpn please

01:36:33 --> 01:36:39
consider supporting this podcast by

01:36:35 --> 01:36:42
downloading cash app and using code lex

01:36:38 --> 01:36:47
podcast and signing up at expressvpn

01:36:41 --> 01:36:49
comm / lex pod click all the links buy

01:36:46 --> 01:36:52
all the stuff it's the best way to

01:36:48 --> 01:36:54
support this podcast and the journey I'm

01:36:51 --> 01:36:57
on if you enjoy this thing subscribe on

01:36:53 --> 01:36:59
YouTube review it five stars in a

01:36:56 --> 01:37:01
podcast supported on patreon or connect

01:36:58 --> 01:37:04
with me on Twitter at lex friedman

01:37:00 --> 01:37:07
spelled somehow if you can figure out

01:37:03 --> 01:37:11
how without using the letter e just FR

01:37:06 --> 01:37:14
ID ma m and now let me leave you with

01:37:10 --> 01:37:17
some words from Salvador Dali

01:37:13 --> 01:37:20
ntelligence without ambition is a bird

01:37:16 --> 01:37:24
without wings thank you for listening

01:37:19 --> 01:37:24
and hope to see you next time

01:37:28 --> 01:37:31
you

<!-- YOUTUBE_TRANSCRIPT_END -->
