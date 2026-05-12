---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "LRYkH-fAVGE"
title: "Jitendra Malik: Computer Vision | Lex Fridman Podcast #110"
video_url: "https://www.youtube.com/watch?v=LRYkH-fAVGE"
thumbnail_url: "https://i.ytimg.com/vi/LRYkH-fAVGE/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=LRYkH-fAVGE"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-07-21T23:16:50.000Z"
upload_date: "2020-07-21"
duration_seconds: 6096
duration_human: "1:41:36"
view_count: 73088
like_count: 1925
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:24:47.225Z"
---

# Jitendra Malik: Computer Vision | Lex Fridman Podcast #110

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=LRYkH-fAVGE
- video_id: LRYkH-fAVGE
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-07-21T23:16:50.000Z
- upload_date: 2020-07-21
- duration: 1:41:36
- view_count: 73088
- like_count: 1925
- has_subtitle: true
- language: en
- availability: public
- tags: jitendra malik, deep learning, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

Jitendra Malik is a professor at Berkeley and one of the seminal figures in the field of computer vision, the kind before the deep learning revolution, and the kind after. He has been cited over 180,000 times and has mentored many world-class researchers in computer science.

Support this podcast by supporting our sponsors:
- BetterHelp: http://betterhelp.com/lex
- ExpressVPN at https://www.expressvpn.com/lexpod

EPISODE LINKS:
Jitendra's website: https://people.eecs.berkeley.edu/~malik/
Jitendra's wiki: https://en.wikipedia.org/wiki/Jitendra_Malik

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
3:17 - Computer vision is hard
10:05 - Tesla Autopilot
21:20 - Human brain vs computers
23:14 - The general problem of computer vision
29:09 - Images vs video in computer vision
37:47 - Benchmarks in computer vision
40:06 - Active learning
45:34 - From pixels to semantics
52:47 - Semantic segmentation
57:05 - The three R's of computer vision
1:02:52 - End-to-end learning in computer vision
1:04:24 - 6 lessons we can learn from children
1:08:36 - Vision and language
1:12:30 - Turing test
1:16:17 - Open problems in computer vision
1:24:49 - AGI
1:35:47 - Pick the right problem

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

00:00:00 --> 00:00:04
the following is a conversation with

00:00:01 --> 00:00:06
jitendra malik

00:00:03 --> 00:00:08
a professor at berkeley and one of the

00:00:05 --> 00:00:09
seminal figures in the field of computer

00:00:07 --> 00:00:11
vision

00:00:08 --> 00:00:12
the kind before the deep learning

00:00:10 --> 00:00:15
revolution and

00:00:11 --> 00:00:19
the kind after he has been cited

00:00:14 --> 00:00:22
over 180 thousand times and has mentored

00:00:18 --> 00:00:23
many world-class researchers in computer

00:00:21 --> 00:00:26
science

00:00:22 --> 00:00:27
quick summary of the ads two sponsors

00:00:25 --> 00:00:30
one new one

00:00:26 --> 00:00:33
which is better help and an old goody

00:00:29 --> 00:00:36
expressvpn please consider supporting

00:00:32 --> 00:00:40
this podcast by going to betterhelp.com

00:00:35 --> 00:00:43
lex and signing up at expressvpn.com

00:00:39 --> 00:00:45
lexpod click the links buy the stuff

00:00:42 --> 00:00:48
it really is the best way to support

00:00:44 --> 00:00:50
his podcast and the journey i'm on

00:00:47 --> 00:00:52
if you enjoy this thing subscribe on

00:00:49 --> 00:00:52
youtube review it with 5 stars on apple

00:00:51 --> 00:00:55
podcast

00:00:52 --> 00:00:56
support it on patreon or connect with me

00:00:54 --> 00:00:58
on twitter

00:00:55 --> 00:00:59
at lex friedman however the heck you

00:00:57 --> 00:01:01
spell that

00:00:58 --> 00:01:03
as usual i'll do a few minutes of ads

00:01:00 --> 00:01:05
now and never neons in the middle that

00:01:02 --> 00:01:08
can break the flow of the conversation

00:01:04 --> 00:01:12
this show is sponsored by better help

00:01:08 --> 00:01:15
spelled h-e-l-p help

00:01:11 --> 00:01:17
check it out at betterhelp.com lex

00:01:14 --> 00:01:19
they figure out what you need and match

00:01:16 --> 00:01:20
you with a licensed professional

00:01:18 --> 00:01:23
therapist

00:01:19 --> 00:01:26
in under 48 hours it's not a crisis line

00:01:22 --> 00:01:27
it's not self-help it's professional

00:01:25 --> 00:01:30
counseling done securely

00:01:26 --> 00:01:31
online i'm a bit from the david goggins

00:01:29 --> 00:01:34
line of creatures

00:01:30 --> 00:01:36
as you may know and so have some demons

00:01:33 --> 00:01:38
to contend with

00:01:35 --> 00:01:39
usually on long runs or all nights

00:01:37 --> 00:01:42
working

00:01:38 --> 00:01:44
forever and possibly full of self-doubt

00:01:41 --> 00:01:46
it may be because i'm russian

00:01:43 --> 00:01:47
but i think suffering is essential for

00:01:45 --> 00:01:49
creation

00:01:46 --> 00:01:51
but i also think you can suffer

00:01:48 --> 00:01:52
beautifully in a way that doesn't

00:01:50 --> 00:01:54
destroy you

00:01:51 --> 00:01:55
for most people i think a good therapist

00:01:53 --> 00:01:58
can help in this

00:01:54 --> 00:01:59
o it's at least worth a try check out

00:01:57 --> 00:02:01
heir reviews

00:01:58 --> 00:02:02
they're good it's easy private

00:02:00 --> 00:02:04
affordable

00:02:01 --> 00:02:06
available worldwide you can communicate

00:02:04 --> 00:02:08
by text anytime

00:02:05 --> 00:02:10
and schedule weekly audio and video

00:02:07 --> 00:02:12
sessions

00:02:09 --> 00:02:15
i highly recommend that you check them

00:02:11 --> 00:02:18
out at betterhelp.com

00:02:14 --> 00:02:23
lex this show is also sponsored by

00:02:17 --> 00:02:26
expressvpn get it at expressvpn.com

00:02:22 --> 00:02:27
to support this podcast and to get an

00:02:25 --> 00:02:29
extra three months

00:02:26 --> 00:02:32
free on a one-year package i've been

00:02:28 --> 00:02:35
using expressvpn for many years

00:02:31 --> 00:02:38
i love it i think expressvpn is the best

00:02:34 --> 00:02:40
vpn out there they told me to say it

00:02:37 --> 00:02:41
but it happens to be true it doesn't log

00:02:39 --> 00:02:44
your data

00:02:40 --> 00:02:45
it's crazy fast and it's easy to use

00:02:43 --> 00:02:48
literally just

00:02:44 --> 00:02:50
one big sexy power on button

00:02:47 --> 00:02:52
again for obvious reasons it's really

00:02:49 --> 00:02:54
important that they don't log your data

00:02:51 --> 00:02:56
it works on linux and everywhere else

00:02:53 --> 00:02:58
too but really

00:02:55 --> 00:03:01
why use anything else shout out to my

00:02:57 --> 00:03:05
favorite flavor of linux ubuntu mate

00:03:00 --> 00:03:06
2004 once again get it at

00:03:04 --> 00:03:10
expressvpn.comlexpod

00:03:06 --> 00:03:12
to support this podcast and to get an

00:03:09 --> 00:03:13
extra three months free and a one year

00:03:11 --> 00:03:16
package

00:03:12 --> 00:03:18
and now here's my conversation with

00:03:15 --> 00:03:21
jitendra

00:03:17 --> 00:03:25
in 1966 seymour papper

00:03:20 --> 00:03:28
at mit wrote up a proposal called the

00:03:24 --> 00:03:30
summer vision project to be given

00:03:27 --> 00:03:32
as far as we know to 10 students to work

00:03:29 --> 00:03:34
on and solve that summer

00:03:31 --> 00:03:36
so that proposal outlined many of the

00:03:33 --> 00:03:37
computer vision tasks we still work on

00:03:35 --> 00:03:39
today

00:03:36 --> 00:03:42
why do you think we underestimate and

00:03:38 --> 00:03:44
perhaps we did underestimate and perhaps

00:03:41 --> 00:03:47
till underestimate

00:03:43 --> 00:03:49
how hard computer vision is because

00:03:46 --> 00:03:51
most of what we do in vision we do

00:03:48 --> 00:03:54
unconsciously or subconsciously

00:03:50 --> 00:03:55
in human vision in human vision so that

00:03:53 --> 00:03:57
gives us

00:03:54 --> 00:03:58
this that effortlessness gives us the

00:03:56 --> 00:04:01
sense that oh

00:03:57 --> 00:04:02
this must be very easy to implement on a

00:04:00 --> 00:04:05
computer

00:04:01 --> 00:04:09
now this is why

00:04:04 --> 00:04:10
the early researchers in ai got it so

00:04:08 --> 00:04:14
wrong

00:04:09 --> 00:04:15
however if you go into neuroscience or

00:04:13 --> 00:04:18
psychology

00:04:14 --> 00:04:19
of human vision then the complexity

00:04:17 --> 00:04:22
becomes very clear

00:04:18 --> 00:04:23
the fact is that a very large part of

00:04:21 --> 00:04:25
the

00:04:22 --> 00:04:26
cerebral cortex is devoted to visual

00:04:24 --> 00:04:28
processing

00:04:25 --> 00:04:30
i mean and this is true in other

00:04:28 --> 00:04:33
primates as well

00:04:29 --> 00:04:35
so once we looked at it from a

00:04:32 --> 00:04:37
neuroscience or psychology perspective

00:04:34 --> 00:04:39
it it becomes quite clear that the

00:04:36 --> 00:04:40
problem is very challenging and it will

00:04:38 --> 00:04:43
take some time

00:04:39 --> 00:04:44
you said the higher level parts are the

00:04:42 --> 00:04:48
harder parts

00:04:43 --> 00:04:49
i think vision appears to to be easy

00:04:47 --> 00:04:52
because

00:04:48 --> 00:04:56
uh most of what visual processing

00:04:51 --> 00:04:59
is subconscious or unconscious right

00:04:55 --> 00:04:59
so we underestimate the difficulty

00:04:58 --> 00:05:02
whereas

00:04:58 --> 00:05:02
uh when you are

00:05:02 --> 00:05:06
like proving a mathematical theorem or

00:05:04 --> 00:05:09
playing chess

00:05:05 --> 00:05:11
the difficulty is much more evident so

00:05:08 --> 00:05:13
because it is your conscious brain which

00:05:10 --> 00:05:15
is processing

00:05:12 --> 00:05:16
uh various aspects of the

00:05:14 --> 00:05:20
problem-solving

00:05:15 --> 00:05:22
behavior whereas in vision all this is

00:05:19 --> 00:05:25
happening but it's not in your

00:05:21 --> 00:05:26
awareness it's in your it's operating

00:05:24 --> 00:05:29
below that

00:05:25 --> 00:05:31
but it's it still seems strange yes

00:05:28 --> 00:05:34
that's true but it seems strange that

00:05:30 --> 00:05:36
as computer vision researchers for

00:05:33 --> 00:05:38
example

00:05:35 --> 00:05:41
the community broadly is time and time

00:05:37 --> 00:05:42
again makes the mistake of um

00:05:40 --> 00:05:44
thinking the problem is easier than it

00:05:41 --> 00:05:46
is or maybe it's not a mistake

00:05:43 --> 00:05:48
we'll talk a little bit about autonomous

00:05:45 --> 00:05:50
driving for example how hard of a vision

00:05:47 --> 00:05:54
task that is

00:05:49 --> 00:05:56
it do do you think i mean what

00:05:53 --> 00:05:58
is it just human nature or is there

00:05:55 --> 00:06:01
something fundamental to the vision

00:05:57 --> 00:06:04
problem that we we underestimate

00:06:00 --> 00:06:06
we're still not able to be cognizant of

00:06:03 --> 00:06:09
how hard the problem is

00:06:05 --> 00:06:11
yeah i think in the early days it could

00:06:08 --> 00:06:13
have been excused because

00:06:10 --> 00:06:16
in the early days all aspects of ai were

00:06:12 --> 00:06:18
garded as too easy

00:06:15 --> 00:06:20
but i think today it is much less

00:06:18 --> 00:06:23
excusable

00:06:19 --> 00:06:26
and i think why people

00:06:22 --> 00:06:29
fall for this is because of what i call

00:06:25 --> 00:06:32
the fallacy of the successful first

00:06:28 --> 00:06:36
ep there are many problems in

00:06:32 --> 00:06:37
vision where getting 50

00:06:35 --> 00:06:40
of the solution you can get in one

00:06:36 --> 00:06:43
minute getting to 90 percent

00:06:39 --> 00:06:47
can take you a day getting to 99 percent

00:06:42 --> 00:06:50
may take you five years and

00:06:46 --> 00:06:52
99.99 may be not in your lifetime

00:06:49 --> 00:06:55
i wonder if that's a unique division

00:06:51 --> 00:06:56
that it seems that language people are

00:06:54 --> 00:06:58
not so

00:06:55 --> 00:06:59
confident about so natural language

00:06:57 --> 00:07:01
processing people are a little bit more

00:06:58 --> 00:07:05
cautious about our ability

00:07:00 --> 00:07:07
to to solve that problem

00:07:04 --> 00:07:08
i think for language people intuit that

00:07:06 --> 00:07:11
we have to be able to do

00:07:07 --> 00:07:14
natural language understanding for

00:07:10 --> 00:07:14
vision

00:07:13 --> 00:07:18
it seems that we're not cognizant or we

00:07:16 --> 00:07:20
don't think about how much

00:07:17 --> 00:07:22
understanding is required it's probably

00:07:19 --> 00:07:25
still an open problem

00:07:21 --> 00:07:28
but in your sense how much understanding

00:07:24 --> 00:07:31
is required to solve vision like

00:07:27 --> 00:07:34
this put another way how much

00:07:30 --> 00:07:35
something called common sense reasoning

00:07:33 --> 00:07:38
is

00:07:34 --> 00:07:41
required to really be able to interpret

00:07:37 --> 00:07:42
even static scenes yeah so vision

00:07:40 --> 00:07:45
operates at

00:07:41 --> 00:07:46
uh at all levels and there are parts

00:07:44 --> 00:07:49
which are

00:07:45 --> 00:07:51
which can be solved with what we could

00:07:48 --> 00:07:54
call maybe peripheral processing

00:07:50 --> 00:07:56
so in the in the human vision literature

00:07:53 --> 00:07:59
there used to be these terms

00:07:55 --> 00:08:02
ensation perception and cognition

00:07:58 --> 00:08:04
which roughly speaking referred to like

00:08:01 --> 00:08:07
the front end of processing

00:08:04 --> 00:08:08
middle stages of processing and higher

00:08:06 --> 00:08:11
level of processing

00:08:07 --> 00:08:13
and i think they made a big deal out of

00:08:10 --> 00:08:15
this and they wanted to just

00:08:12 --> 00:08:18
udy only perception and then

00:08:14 --> 00:08:20
dismiss certain certain problems as

00:08:17 --> 00:08:22
being quote cognitive

00:08:19 --> 00:08:24
but really i think these are artificial

00:08:21 --> 00:08:27
divides

00:08:23 --> 00:08:29
the problem is continuous at all level

00:08:26 --> 00:08:31
and there are challenges at all levels

00:08:28 --> 00:08:34
the techniques that we have today

00:08:30 --> 00:08:35
they work better at the lower and mid

00:08:33 --> 00:08:37
levels of the problem

00:08:34 --> 00:08:39
i think the higher levels of the problem

00:08:36 --> 00:08:40
quote the cognitive levels of the

00:08:38 --> 00:08:44
problem

00:08:40 --> 00:08:46
are there and we

00:08:43 --> 00:08:47
in many real applications we have to

00:08:45 --> 00:08:50
confront them

00:08:46 --> 00:08:52
now how much that is necessary will

00:08:49 --> 00:08:54
depend on the application

00:08:51 --> 00:08:56
for some problems it doesn't matter for

00:08:53 --> 00:08:59
some problems it matters a lot

00:08:55 --> 00:09:03
so i am for example

00:08:58 --> 00:09:05
a pessimist on fully autonomous driving

00:09:02 --> 00:09:07
in the near future

00:09:04 --> 00:09:08
and the reason is because i think there

00:09:06 --> 00:09:12
will be

00:09:07 --> 00:09:15
that 0.01 percent of the cases

00:09:11 --> 00:09:17
where quite sophisticated cognitive

00:09:14 --> 00:09:21
reasoning is called for

00:09:16 --> 00:09:24
however there are tasks where you can

00:09:20 --> 00:09:25
first of all they are much more they are

00:09:23 --> 00:09:28
robust so in the sense that

00:09:24 --> 00:09:29
error rates error is not so much of a

00:09:27 --> 00:09:32
problem

00:09:28 --> 00:09:33
for example uh uh let's say we are

00:09:31 --> 00:09:35
you're doing uh

00:09:32 --> 00:09:37
image search you're trying to get images

00:09:34 --> 00:09:40
based on some

00:09:36 --> 00:09:42
some description some visual

00:09:39 --> 00:09:44
description

00:09:41 --> 00:09:46
we are very tolerant of errors there

00:09:43 --> 00:09:48
right i mean when google image search

00:09:45 --> 00:09:49
gives you some images back and a few of

00:09:47 --> 00:09:52
them are

00:09:48 --> 00:09:53
wrong it's okay it doesn't hurt anybody

00:09:51 --> 00:09:55
there's no

00:09:52 --> 00:09:56
t a matter of life and death

00:09:54 --> 00:09:59
but

00:09:55 --> 00:10:02
making mistakes when you're

00:09:58 --> 00:10:04
driving at 60 miles per hour and you

00:10:01 --> 00:10:08
could potentially kill somebody

00:10:04 --> 00:10:10
is much more important so just for the

00:10:07 --> 00:10:11
fun of it since you mentioned

00:10:09 --> 00:10:14
let's go there briefly

00:10:10 --> 00:10:16
about autonomous vehicles so one of the

00:10:13 --> 00:10:19
companies in the space tesla

00:10:15 --> 00:10:20
is work with andre karpathy and elon

00:10:18 --> 00:10:23
musk are working on

00:10:19 --> 00:10:24
a system called autopilot which is

00:10:22 --> 00:10:26
primarily a vision-based system with

00:10:24 --> 00:10:28
eight cameras

00:10:25 --> 00:10:30
and uh basically a single neural network

00:10:27 --> 00:10:33
a multi-task neural network

00:10:30 --> 00:10:34
they they call it hydro net multiple

00:10:32 --> 00:10:36
heads

00:10:33 --> 00:10:37
o it does multiple tasks but is forming

00:10:35 --> 00:10:41
the same representation

00:10:36 --> 00:10:42
at the core do you think driving can be

00:10:40 --> 00:10:45
converted

00:10:41 --> 00:10:45
in this way to uh purely a vision

00:10:44 --> 00:10:50
problem

00:10:44 --> 00:10:52
and then solved within you with learning

00:10:49 --> 00:10:53
or even more specifically in the current

00:10:51 --> 00:10:55
approach

00:10:52 --> 00:10:57
what do you think about what tesla

00:10:54 --> 00:11:00
utopilot team is doing

00:10:56 --> 00:11:01
so the way i think about it is that

00:10:59 --> 00:11:03
here are certainly

00:11:00 --> 00:11:06
subset subsets of the visual based

00:11:02 --> 00:11:08
riving problem which are quite solvable

00:11:05 --> 00:11:10
so for example driving in freeway

00:11:07 --> 00:11:14
conditions

00:11:09 --> 00:11:15
is quite a solvable problem i think

00:11:13 --> 00:11:18
there were demonstrations of that going

00:11:14 --> 00:11:22
back to the 1980s by

00:11:18 --> 00:11:25
someone called ernst stickmans in munich

00:11:21 --> 00:11:27
in the 90s there were approaches from

00:11:24 --> 00:11:27
carnegie mellon there were approaches

00:11:26 --> 00:11:30
from

00:11:26 --> 00:11:32
our team at berkeley in the 2000s there

00:11:29 --> 00:11:36
were approaches from stanford

00:11:31 --> 00:11:39
and so on so autonomous driving in

00:11:36 --> 00:11:42
certain settings is very doable

00:11:38 --> 00:11:42
the challenge is to have an autopilot

00:11:41 --> 00:11:46
work

00:11:42 --> 00:11:47
under all kinds of driving conditions

00:11:45 --> 00:11:49
at that point it's not just a question

00:11:46 --> 00:11:52
of vision

00:11:48 --> 00:11:54
or perception but really also of control

00:11:51 --> 00:11:56
and dealing with all the edge cases

00:11:54 --> 00:11:58
o where do you think most of the

00:11:55 --> 00:12:00
difficult cases

00:11:57 --> 00:12:01
to me even the highway driving is an

00:11:59 --> 00:12:07
open problem because

00:12:00 --> 00:12:09
uh it applies the same 50 90 95 99 rule

00:12:06 --> 00:12:10
or the first step the fallacy of the

00:12:08 --> 00:12:13
first step i forget how you put

00:12:10 --> 00:12:15
it we fall victim to i think even

00:12:12 --> 00:12:18
highway driving has a lot of elements

00:12:14 --> 00:12:20
because to solve autonomous driving you

00:12:17 --> 00:12:23
have to completely relinquish

00:12:19 --> 00:12:25
the the fat help of a human being

00:12:22 --> 00:12:27
you're always in control so that you're

00:12:24 --> 00:12:29
ally going to feel the edge cases

00:12:26 --> 00:12:30
o i i think even highway driving is

00:12:28 --> 00:12:33
really difficult but

00:12:29 --> 00:12:33
in terms of the general driving task do

00:12:32 --> 00:12:36
you think

00:12:32 --> 00:12:38
vision is the fundamental problem or is

00:12:35 --> 00:12:41
it

00:12:37 --> 00:12:43
also your action the the interaction

00:12:40 --> 00:12:46
with the environment

00:12:42 --> 00:12:47
he ability to uh and then like the

00:12:45 --> 00:12:49
middle ground i don't know if you put

00:12:46 --> 00:12:52
hat under vision which is

00:12:48 --> 00:12:53
trying to predict the behavior of others

00:12:51 --> 00:12:56
which is a little bit

00:12:52 --> 00:12:59
in the world of understanding the scene

00:12:55 --> 00:13:00
but it's also trying to form a model of

00:12:58 --> 00:13:03
the actors in the scene

00:12:59 --> 00:13:05
and predict their behavior yeah i

00:13:02 --> 00:13:08
nclude that in vision because

00:13:04 --> 00:13:10
to me perception blends into cognition

00:13:07 --> 00:13:12
and building predictive models of other

00:13:09 --> 00:13:13
agents in the world

00:13:11 --> 00:13:16
which could be other agents could be

00:13:12 --> 00:13:19
people other agents could be other cars

00:13:15 --> 00:13:19
that is part of the task of perception

00:13:18 --> 00:13:23
because

00:13:18 --> 00:13:25
perception always has to uh not tell us

00:13:22 --> 00:13:27
what is now but what will happen

00:13:24 --> 00:13:29
because what's now is boring it's done

00:13:26 --> 00:13:32
it's over with

00:13:28 --> 00:13:32
okay yeah we care about the future

00:13:31 --> 00:13:35
because we

00:13:31 --> 00:13:35
act in the future and we care about the

00:13:34 --> 00:13:37
past

00:13:34 --> 00:13:39
and as much as it informs what's going

00:13:36 --> 00:13:41
to happen in the future

00:13:38 --> 00:13:43
so i think we have to build predictive

00:13:40 --> 00:13:46
models of of

00:13:42 --> 00:13:47
behaviors of people and and those can

00:13:45 --> 00:13:50
get quite

00:13:46 --> 00:13:54
complicated so uh uh

00:13:49 --> 00:13:54
i mean uh i i've seen examples of this

00:13:53 --> 00:13:58
in

00:13:53 --> 00:14:01
uh actually i mean i own a tesla

00:13:57 --> 00:14:02
nd it has various safety features built

00:14:00 --> 00:14:05
in

00:14:01 --> 00:14:06
and uh what i see are these examples

00:14:04 --> 00:14:09
where

00:14:05 --> 00:14:10
let's say there is some uh skateboarder

00:14:08 --> 00:14:12
i mean

00:14:09 --> 00:14:13
this i and i i don't want to be too

00:14:11 --> 00:14:15
critical because

00:14:12 --> 00:14:17
obviously this is these are the systems

00:14:14 --> 00:14:20
are always being improved

00:14:16 --> 00:14:22
and any specific criticism i have

00:14:19 --> 00:14:23
maybe the system six months from now

00:14:21 --> 00:14:26
ill not have that

00:14:22 --> 00:14:29
that particular failure mode

00:14:25 --> 00:14:32
so uh it

00:14:28 --> 00:14:34
had it it had the wrong response and

00:14:32 --> 00:14:38
it's because it couldn't predict

00:14:33 --> 00:14:39
what what this skateboarder was going to

00:14:37 --> 00:14:42
do

00:14:38 --> 00:14:44
kay and because it really required that

00:14:41 --> 00:14:47
higher level cognitive understanding

00:14:44 --> 00:14:49
of what skateboarders typically do as

00:14:46 --> 00:14:50
opposed to a normal pedestrian

00:14:48 --> 00:14:52
so what might have been the correct

00:14:49 --> 00:14:54
behavior for a pedestrian

00:14:51 --> 00:14:57
a typical behavior for pedestrian was

00:14:53 --> 00:15:00
not the typical behavior for a

00:14:56 --> 00:15:04
skateboarder right yeah

00:14:59 --> 00:15:05
and uh so so therefore

00:15:03 --> 00:15:07
to do a good job there you need to have

00:15:04 --> 00:15:09
nough data where

00:15:06 --> 00:15:10
you have pedestrians you also have

00:15:08 --> 00:15:12
skateboarders

00:15:09 --> 00:15:13
you've seen enough skateboarders to see

00:15:11 --> 00:15:16
what

00:15:12 --> 00:15:17
uh what kinds of patterns or behavior

00:15:15 --> 00:15:20
they have

00:15:16 --> 00:15:22
so it is it is in principle with enough

00:15:19 --> 00:15:26
data that problem could be solved

00:15:21 --> 00:15:28
but uh i think our current

00:15:25 --> 00:15:29
systems computer vision systems they

00:15:27 --> 00:15:32
need far

00:15:28 --> 00:15:33
more data than humans do for

00:15:31 --> 00:15:35
learning those

00:15:32 --> 00:15:37
same capabilities so say that there is

00:15:34 --> 00:15:38
going to be a system that solves

00:15:36 --> 00:15:40
autonomous driving

00:15:37 --> 00:15:42
do you think it will look similar to

00:15:39 --> 00:15:44
what we have today

00:15:41 --> 00:15:46
but have a lot more data perhaps more

00:15:43 --> 00:15:48
compute but the fundamental

00:15:45 --> 00:15:50
architectures involved

00:15:47 --> 00:15:51
like neuro well in the case of tesla

00:15:49 --> 00:15:54
utopilot is

00:15:50 --> 00:15:55
neural networks do you think it will

00:15:53 --> 00:15:56
ook similar

00:15:54 --> 00:15:58
in that regard and we'll just have more

00:15:56 --> 00:16:01
data that's a

00:15:57 --> 00:16:02
scientific hypothesis as which way is it

00:16:00 --> 00:16:05
going to go

00:16:01 --> 00:16:06
uh i will tell you what i would bet on

00:16:04 --> 00:16:09
uh

00:16:05 --> 00:16:11
so and this is at my general

00:16:08 --> 00:16:14
philosophical position on how these

00:16:10 --> 00:16:17
uh learning systems have been

00:16:13 --> 00:16:18
uh what we have found currently very

00:16:16 --> 00:16:20
effective in

00:16:17 --> 00:16:22
computer vision uh with in in the deep

00:16:20 --> 00:16:25
learning paradigm is

00:16:21 --> 00:16:26
ort of tabula rasa learning and tabular

00:16:24 --> 00:16:29
us are learning

00:16:25 --> 00:16:31
in a supervised way with lots and lots

00:16:28 --> 00:16:33
of what's going on

00:16:30 --> 00:16:35
in the sense that blank slate we just

00:16:32 --> 00:16:38
have the system which is

00:16:34 --> 00:16:40
given a series of experiences in this

00:16:37 --> 00:16:43
etting and then it learns there

00:16:39 --> 00:16:45
now if let's think about human driving

00:16:42 --> 00:16:49
it is not tabular assad learning

00:16:44 --> 00:16:53
so at the age of 16 in high school

00:16:48 --> 00:16:56
uh a teenager goes into uh

00:16:52 --> 00:16:59
goes into driver ed class right and now

00:16:55 --> 00:17:03
at that point they learn but at the age

00:16:58 --> 00:17:06
of 16 they are already visual geniuses

00:17:02 --> 00:17:08
because from 0 to 16 they have built a

00:17:05 --> 00:17:10
certain repertoire of vision

00:17:07 --> 00:17:11
in fact most of it has probably been

00:17:09 --> 00:17:15
achieved by

00:17:10 --> 00:17:18
age 2 right in in this period of age

00:17:14 --> 00:17:19
up to age 2 they know that the world is

00:17:17 --> 00:17:22
three-dimensional they know how

00:17:18 --> 00:17:23
objects look like from different

00:17:21 --> 00:17:26
perspectives

00:17:22 --> 00:17:29
they know about occlusion they

00:17:25 --> 00:17:30
know about common dynamics of humans and

00:17:28 --> 00:17:32
other bodies

00:17:29 --> 00:17:33
they have some notion of intuitive

00:17:31 --> 00:17:35
physics so they

00:17:32 --> 00:17:38
built that up from their

00:17:34 --> 00:17:40
observations and interactions

00:17:37 --> 00:17:42
in early childhood and of course

00:17:39 --> 00:17:45
reinforced through

00:17:41 --> 00:17:45
their their growing up to age 16. so

00:17:44 --> 00:17:48
then

00:17:44 --> 00:17:50
at age 16 when they go into driver ed

00:17:47 --> 00:17:53
what are they learning they're not

00:17:49 --> 00:17:55
learning afresh the visual world

00:17:52 --> 00:17:56
they have a mastery of the visual world

00:17:54 --> 00:18:00
what they are learning

00:17:55 --> 00:18:01
is control okay they are learning how to

00:17:59 --> 00:18:03
be smooth

00:18:00 --> 00:18:04
about control about steering and brakes

00:18:02 --> 00:18:06
and so forth

00:18:03 --> 00:18:08
ey're learning a sense of typical

00:18:06 --> 00:18:12
traffic situations

00:18:07 --> 00:18:15
now the the that education process

00:18:11 --> 00:18:18
can be quite short because they are

00:18:14 --> 00:18:21
coming in as visual geniuses

00:18:17 --> 00:18:23
and of course in their future they're

00:18:20 --> 00:18:24
going to encounter situations which are

00:18:22 --> 00:18:28
very novel

00:18:23 --> 00:18:29
right so during my driver ed class

00:18:27 --> 00:18:31
that i may not have had to deal with a

00:18:28 --> 00:18:33
skateboarder i may not have had to deal

00:18:30 --> 00:18:36
with a truck

00:18:32 --> 00:18:38
driving in front of me who's from

00:18:35 --> 00:18:40
who's where the back opens up and some

00:18:37 --> 00:18:43
junk gets dropped from the truck

00:18:39 --> 00:18:44
and i have to deal with it right but i

00:18:42 --> 00:18:47
can deal with this

00:18:43 --> 00:18:48
as a driver even though i did not

00:18:46 --> 00:18:50
encounter this in my driver at

00:18:47 --> 00:18:52
class and the reason i can deal with it

00:18:50 --> 00:18:55
is because i have all this

00:18:51 --> 00:18:58
general visual knowledge and expertise

00:18:54 --> 00:19:00
and uh do you think the learning

00:18:57 --> 00:19:02
mechanisms we have today

00:18:59 --> 00:19:04
can do that kind of long-term

00:19:01 --> 00:19:08
accumulation of knowledge

00:19:03 --> 00:19:10
or do we have to uh do some kind of

00:19:07 --> 00:19:12
you know in the the the work that led up

00:19:09 --> 00:19:13
to expert systems with knowledge

00:19:11 --> 00:19:15
representation

00:19:12 --> 00:19:17
you know the broader field of what of

00:19:14 --> 00:19:19
artificial intelligence

00:19:16 --> 00:19:20
uh worked on this kind of accumulation

00:19:18 --> 00:19:22
of knowledge

00:19:20 --> 00:19:25
do you think neural networks can do the

00:19:21 --> 00:19:28
same i think uh

00:19:24 --> 00:19:30
i don't see any in principle problem

00:19:27 --> 00:19:31
with neural networks doing it

00:19:29 --> 00:19:34
but i think the learning techniques

00:19:30 --> 00:19:38
would need to evolve significantly

00:19:33 --> 00:19:41
so the current uh the current

00:19:37 --> 00:19:42
learning techniques that we have yeah is

00:19:40 --> 00:19:44
our supervised learning you're given

00:19:41 --> 00:19:47
lots of examples

00:19:43 --> 00:19:49
xiy pairs and you you learn the

00:19:46 --> 00:19:51
functional mapping between them

00:19:48 --> 00:19:53
i think that human learning is far

00:19:50 --> 00:19:55
icher than that

00:19:52 --> 00:19:56
it includes many different components

00:19:54 --> 00:20:00
there are

00:19:55 --> 00:20:04
there is a a child explores the world

00:19:59 --> 00:20:07
and sees as for example a child

00:20:03 --> 00:20:10
takes an object and manipulates it

00:20:06 --> 00:20:12
in his or her hand and therefore gets to

00:20:10 --> 00:20:13
see the object from different points of

00:20:11 --> 00:20:15
view

00:20:12 --> 00:20:17
and the child has commanded the movement

00:20:14 --> 00:20:19
so that's a kind of learning data but

00:20:16 --> 00:20:22
he learning data has been

00:20:18 --> 00:20:23
arranged by the child and this is a very

00:20:21 --> 00:20:26
rich

00:20:22 --> 00:20:31
kind of data the child can do various

00:20:25 --> 00:20:31
experiments with the world so

00:20:30 --> 00:20:35
there are many aspects of sort of

00:20:32 --> 00:20:37
human learning and these have been

00:20:34 --> 00:20:40
studied in

00:20:36 --> 00:20:43
child development by psychologists

00:20:39 --> 00:20:45
and they what they tell us is that

00:20:42 --> 00:20:46
supervised learning is a very small part

00:20:44 --> 00:20:48
of it

00:20:45 --> 00:20:49
here are many different aspects of

00:20:47 --> 00:20:52
learning

00:20:48 --> 00:20:54
and what we would need to do is to

00:20:51 --> 00:20:57
develop models of

00:20:53 --> 00:21:00
all of these and then

00:20:56 --> 00:21:02
train our systems in that with that kind

00:20:59 --> 00:21:04
of

00:21:01 --> 00:21:05
uh protocol so new new methods of

00:21:03 --> 00:21:07
learning

00:21:04 --> 00:21:10
yes some of which might imitate the

00:21:06 --> 00:21:11
human brain but you also

00:21:09 --> 00:21:13
in your talks have mentioned some of the

00:21:10 --> 00:21:14
compute side of things

00:21:12 --> 00:21:17
the in terms of the difference in the

00:21:13 --> 00:21:21
human brain or referencing marvik

00:21:16 --> 00:21:23
hans marvel the so

00:21:20 --> 00:21:25
do you do you think there's something

00:21:22 --> 00:21:26
interesting valuable to consider about

00:21:24 --> 00:21:29
he difference

00:21:25 --> 00:21:30
in the computational power of the human

00:21:28 --> 00:21:32
brain versus

00:21:29 --> 00:21:34
the computers of today in terms of

00:21:32 --> 00:21:37
instructions

00:21:33 --> 00:21:40
per second yes so if we go back

00:21:36 --> 00:21:42
uh so so this is a point i've been

00:21:39 --> 00:21:45
making for 20 years now

00:21:41 --> 00:21:45
and i think once upon a time the way i

00:21:44 --> 00:21:48
used to

00:21:44 --> 00:21:49
argue this was that we just didn't have

00:21:47 --> 00:21:53
the computing power of the human brain

00:21:48 --> 00:21:57
our computers were uh were not

00:21:52 --> 00:22:00
quite there and i mean there is a

00:21:56 --> 00:22:00
well well-known trade-off which we know

00:21:59 --> 00:22:04
that

00:21:59 --> 00:22:08
he that neurons are slow compared to

00:22:03 --> 00:22:09
transistors but uh but we have a lot of

00:22:07 --> 00:22:10
them and they have a very high

00:22:08 --> 00:22:14
connectivity

00:22:09 --> 00:22:16
whereas in silicon you have much faster

00:22:13 --> 00:22:19
devices transistors switch at

00:22:15 --> 00:22:21
on the order of nanoseconds but the

00:22:18 --> 00:22:24
connectivity is usually smaller

00:22:20 --> 00:22:25
ight at this point in time i mean we

00:22:23 --> 00:22:28
are now talking about

00:22:24 --> 00:22:30
2020 we do have if you consider the

00:22:27 --> 00:22:33
latest gpus and so on

00:22:29 --> 00:22:36
amazing computing power and if we look

00:22:32 --> 00:22:39
back at enhanced modex type of

00:22:36 --> 00:22:42
calculations which he did in the 1990s

00:22:38 --> 00:22:44
we may be there today in terms of

00:22:41 --> 00:22:47
computing power comparable to the brain

00:22:43 --> 00:22:50
but it's not in the of the same style

00:22:46 --> 00:22:50
it's of a very different style

00:22:49 --> 00:22:55
so i mean for example the the style of

00:22:52 --> 00:22:58
computing that we have in our gpus

00:22:54 --> 00:23:01
is far far more power hungry than

00:22:57 --> 00:23:03
the style of computing that is there in

00:23:00 --> 00:23:06
the human brain or other

00:23:02 --> 00:23:09
biological uh entities

00:23:05 --> 00:23:11
yeah and that the efficiency part is uh

00:23:08 --> 00:23:13
we're gonna have to solve that in order

00:23:10 --> 00:23:16
to build actual real world systems

00:23:12 --> 00:23:19
of large scale let me ask sort of

00:23:16 --> 00:23:20
the high level question step taking a

00:23:18 --> 00:23:22
step back

00:23:19 --> 00:23:25
how would you articulate the general

00:23:22 --> 00:23:27
problem of computer vision

00:23:24 --> 00:23:28
does such a thing exist so if you look

00:23:26 --> 00:23:30
at the computer vision conferences and

00:23:27 --> 00:23:32
the work that's been going on

00:23:29 --> 00:23:35
it's often separated into different

00:23:31 --> 00:23:36
little segments

00:23:34 --> 00:23:39
breaking the problem of vision apart

00:23:36 --> 00:23:43
into whether segmentation

00:23:38 --> 00:23:46
3d reconstruction object detection

00:23:42 --> 00:23:47
i don't know image capturing whatever uh

00:23:45 --> 00:23:49
there's benchmarks for each

00:23:46 --> 00:23:50
but if you were to sort of

00:23:48 --> 00:23:53
philosophically say what is

00:23:50 --> 00:23:55
the big problem of computer vision does

00:23:52 --> 00:23:58
uch a thing exist

00:23:54 --> 00:24:01
yes but it's not in isolation so

00:23:57 --> 00:24:04
if we have to so for all

00:24:00 --> 00:24:09
intelligence tasks i

00:24:04 --> 00:24:12
always go back to sort of biology or

00:24:08 --> 00:24:15
humans and if we think about

00:24:11 --> 00:24:16
vision or perception in that setting we

00:24:14 --> 00:24:18
realize that

00:24:15 --> 00:24:19
perception is always to guide action

00:24:17 --> 00:24:22
perception

00:24:18 --> 00:24:23
in a for a biological system does not

00:24:21 --> 00:24:26
give any benefits

00:24:22 --> 00:24:27
unless it is coupled with action so we

00:24:25 --> 00:24:29
can go back

00:24:26 --> 00:24:31
and think about the first multicellular

00:24:28 --> 00:24:33
animals

00:24:30 --> 00:24:35
which arose in the cambrian era you know

00:24:32 --> 00:24:38
500 million years ago

00:24:34 --> 00:24:41
and uh these animals could move

00:24:37 --> 00:24:42
and they could see in some ways and

00:24:40 --> 00:24:45
their two

00:24:41 --> 00:24:48
activities helped each other because uh

00:24:44 --> 00:24:51
how does movement help movement

00:24:47 --> 00:24:52
helps that because you can get food in

00:24:50 --> 00:24:55
different places

00:24:52 --> 00:24:57
but you need to know where to go and

00:24:54 --> 00:24:59
that's really about

00:24:56 --> 00:25:00
perception or seeing i mean i mean

00:24:58 --> 00:25:03
vision is

00:24:59 --> 00:25:03
perhaps the single most perception sense

00:25:02 --> 00:25:05
but

00:25:02 --> 00:25:07
all the others are equally are also

00:25:04 --> 00:25:09
important so

00:25:06 --> 00:25:10
uh so perception and action kind of grow

00:25:08 --> 00:25:13
go together

00:25:09 --> 00:25:14
so earlier it was in these very simple

00:25:12 --> 00:25:18
feedback loops

00:25:13 --> 00:25:20
which were about uh finding food

00:25:17 --> 00:25:21
or avoiding becoming food if there's a

00:25:19 --> 00:25:24
predator running uh

00:25:20 --> 00:25:27
trying to you know eat you up

00:25:23 --> 00:25:28
and and so forth so so we must at the

00:25:26 --> 00:25:32
fundamental level connect

00:25:28 --> 00:25:35
perception to action then

00:25:31 --> 00:25:37
as we evolved uh perception became more

00:25:34 --> 00:25:40
and more sophisticated

00:25:36 --> 00:25:44
because it served many more purposes and

00:25:39 --> 00:25:46
uh so today we have what seems like a

00:25:43 --> 00:25:49
fairly general purpose capability

00:25:45 --> 00:25:50
which can look at the external world and

00:25:48 --> 00:25:52
build and

00:25:49 --> 00:25:54
a model of the external world inside the

00:25:51 --> 00:25:56
ad

00:25:53 --> 00:25:57
we do have that capability that model is

00:25:55 --> 00:25:59
not perfect

00:25:56 --> 00:26:01
and psychologists have great fun in

00:25:58 --> 00:26:04
pointing out the ways in which

00:26:00 --> 00:26:05
the model in your head is not a perfect

00:26:03 --> 00:26:08
model of the external world

00:26:04 --> 00:26:09
and they have create various illusions

00:26:08 --> 00:26:12
to

00:26:08 --> 00:26:13
show the ways in which it is imperfect

00:26:11 --> 00:26:16
but

00:26:12 --> 00:26:17
it's amazing how far it has come from a

00:26:15 --> 00:26:19
very simple

00:26:16 --> 00:26:22
perception action loop that you exists

00:26:18 --> 00:26:25
in you know

00:26:21 --> 00:26:26
an animal 500 million years ago once we

00:26:24 --> 00:26:28
have this

00:26:25 --> 00:26:29
these very sophisticated visual systems

00:26:28 --> 00:26:32
we can then

00:26:28 --> 00:26:34
impose a structure on them it's we as

00:26:31 --> 00:26:35
cientists who are imposing that

00:26:33 --> 00:26:37
structure

00:26:34 --> 00:26:40
where we have chosen to characterize

00:26:36 --> 00:26:43
this part of the system as this

00:26:39 --> 00:26:45
code module of object detection or quote

00:26:42 --> 00:26:48
this module of 3d reconstruction

00:26:44 --> 00:26:50
what's going on is really all of these

00:26:47 --> 00:26:54
processes are running

00:26:49 --> 00:26:54
simultaneously and uh

00:26:53 --> 00:26:59
and and they are running simultaneously

00:26:56 --> 00:27:02
because originally their purpose was

00:26:58 --> 00:27:04
in fact to help guide action so

00:27:01 --> 00:27:06
as a guiding general statement of a

00:27:03 --> 00:27:09
problem do you think

00:27:05 --> 00:27:11
we can say that the the general problem

00:27:08 --> 00:27:15
of computer vision

00:27:10 --> 00:27:17
you said in humans it was tied to action

00:27:14 --> 00:27:19
do you think we should also say that

00:27:16 --> 00:27:22
ultimately the the goal

00:27:18 --> 00:27:23
the problem of computer vision is to

00:27:21 --> 00:27:27
sense the world

00:27:22 --> 00:27:28
in the way that helps you act in the

00:27:26 --> 00:27:30
world

00:27:27 --> 00:27:31
yes i think that's the most fundamental

00:27:29 --> 00:27:34
uh

00:27:30 --> 00:27:38
that's the most fundamental purpose

00:27:33 --> 00:27:40
we have by now hyper evolved

00:27:37 --> 00:27:42
so we have this visual system which can

00:27:39 --> 00:27:45
be used for other things

00:27:41 --> 00:27:47
for example judging the aesthetic value

00:27:44 --> 00:27:50
of a painting

00:27:46 --> 00:27:52
and this is not guiding action maybe

00:27:49 --> 00:27:54
it's guiding action in terms of how much

00:27:51 --> 00:27:56
money you will put in your auction bid

00:27:54 --> 00:27:59
but that's a bit stretched

00:27:55 --> 00:28:00
but the basics are in fact in terms of

00:27:58 --> 00:28:04
action

00:27:59 --> 00:28:07
but we have we've evolved

00:28:03 --> 00:28:08
really this hyper uh we have hyper

00:28:06 --> 00:28:11
evolved our visual system

00:28:07 --> 00:28:12
actually just too uh sorry to interrupt

00:28:10 --> 00:28:14
but perhaps it is

00:28:11 --> 00:28:16
fundamentally about action you kind of

00:28:13 --> 00:28:20
jokingly said about spending

00:28:15 --> 00:28:22
but perhaps the capitalistic

00:28:19 --> 00:28:24
uh drive that drives a lot of the

00:28:21 --> 00:28:25
development in this world

00:28:23 --> 00:28:27
is is about to exchange your money and

00:28:24 --> 00:28:27
the fundamental action is money if you

00:28:26 --> 00:28:30
watch

00:28:26 --> 00:28:31
netflix if you enjoy watching movies

00:28:29 --> 00:28:33
you're using your perception system to

00:28:30 --> 00:28:35
interpret the movie

00:28:32 --> 00:28:37
ultimately your enjoyment of that movie

00:28:34 --> 00:28:41
means you'll subscribe to netflix

00:28:36 --> 00:28:42
so the action is this uh

00:28:40 --> 00:28:44
this extra layer that we've developed in

00:28:42 --> 00:28:46
modern society perhaps this is

00:28:44 --> 00:28:48
fundamentally tied to the action of

00:28:45 --> 00:28:52
spending money

00:28:47 --> 00:28:55
well certainly with respect to uh

00:28:51 --> 00:28:57
you know interactions with firms so so

00:28:54 --> 00:29:00
in this homo economics role

00:28:56 --> 00:29:00
when you're interacting with firms it

00:28:59 --> 00:29:03
does become

00:28:59 --> 00:29:05
uh it does become that that's what else

00:29:02 --> 00:29:05
is there

00:29:05 --> 00:29:10
uh that was a rhetorical question okay

00:29:07 --> 00:29:13
so

00:29:09 --> 00:29:15
to to linger on the division between the

00:29:12 --> 00:29:17
static and the dynamic

00:29:14 --> 00:29:19
so much of the work in computer vision

00:29:16 --> 00:29:20
so many of the breakthroughs that you've

00:29:18 --> 00:29:23
been a part of

00:29:19 --> 00:29:25
have been in the static world in

00:29:22 --> 00:29:26
looking at static images and then you've

00:29:24 --> 00:29:28
also

00:29:25 --> 00:29:30
worked on starting but it's a much

00:29:27 --> 00:29:32
smaller degree the community is looking

00:29:29 --> 00:29:34
at dynamic and video

00:29:31 --> 00:29:36
at dynamic scenes and then there is

00:29:33 --> 00:29:39
robotic vision

00:29:35 --> 00:29:40
which is dynamic but also where you

00:29:38 --> 00:29:41
actually have a robot in the physical

00:29:39 --> 00:29:44
world

00:29:40 --> 00:29:48
interacting based on that vision

00:29:43 --> 00:29:50
which problem is harder

00:29:47 --> 00:29:52
the the the intuit sort of the the

00:29:49 --> 00:29:55
trivial first answers

00:29:51 --> 00:29:58
well of course one image is harder but

00:29:54 --> 00:29:59
so if you look at a deeper question

00:29:57 --> 00:30:02
there

00:29:58 --> 00:30:03
are we um what's the term cutting

00:30:01 --> 00:30:05
ourselves

00:30:02 --> 00:30:07
cutting ourselves at the knees or like

00:30:04 --> 00:30:10
making the problem harder by focusing on

00:30:06 --> 00:30:12
the images that's a fair question i

00:30:09 --> 00:30:15
think

00:30:11 --> 00:30:18
sometimes we we can simplify our problem

00:30:14 --> 00:30:21
so much

00:30:17 --> 00:30:23
that we essentially lose

00:30:20 --> 00:30:25
part of the juice that could enable us

00:30:22 --> 00:30:28
to solve the problem

00:30:24 --> 00:30:30
and one could reasonably argue that to

00:30:27 --> 00:30:32
some extent this happens when we go from

00:30:29 --> 00:30:35
video to single images

00:30:31 --> 00:30:37
now historically uh you have to consider

00:30:34 --> 00:30:40
the limits of

00:30:36 --> 00:30:41
imposed by the competition capabilities

00:30:39 --> 00:30:44
we had

00:30:40 --> 00:30:47
so if we many of the choices made in the

00:30:43 --> 00:30:51
computer vision community

00:30:46 --> 00:30:54
uh through the 70s 80s 90s

00:30:50 --> 00:30:57
can be understood as

00:30:53 --> 00:31:01
choices which were forced upon us by

00:30:56 --> 00:31:01
the fact that we just didn't have access

00:31:00 --> 00:31:04
to compute

00:31:00 --> 00:31:05
nough compute not enough memory none of

00:31:03 --> 00:31:07
hard drives not

00:31:04 --> 00:31:08
exactly not enough not enough compute

00:31:06 --> 00:31:10
not enough storage

00:31:07 --> 00:31:12
so so think of these choices so one of

00:31:09 --> 00:31:14
the choices is

00:31:11 --> 00:31:16
focusing on single images rather than

00:31:13 --> 00:31:20
video okay

00:31:15 --> 00:31:23
clear questions storage and compute

00:31:19 --> 00:31:25
we had to focus on we did we

00:31:22 --> 00:31:27
used to detect edges and throw away the

00:31:24 --> 00:31:30
image right so you have an image

00:31:26 --> 00:31:33
which i say 256 by 256 pixels and

00:31:29 --> 00:31:36
instead of keeping around the grayscale

00:31:32 --> 00:31:38
value what we did was we detected edges

00:31:35 --> 00:31:39
find the places where the brightness

00:31:37 --> 00:31:42
changes a lot

00:31:38 --> 00:31:42
so now that and now and then throw away

00:31:41 --> 00:31:45
the rest

00:31:41 --> 00:31:48
so this was a major compression device

00:31:44 --> 00:31:49
and the hope was that this makes it

00:31:47 --> 00:31:52
hat you can still work with it and the

00:31:48 --> 00:31:53
logic was humans can interpret a line

00:31:51 --> 00:31:58
drawing

00:31:52 --> 00:32:00
and uh and yes and this will save us a

00:31:57 --> 00:32:01
competition so many of the choices were

00:31:59 --> 00:32:04
dictated by that

00:32:00 --> 00:32:08
i think uh today

00:32:04 --> 00:32:08
we are no longer detecting edges right

00:32:07 --> 00:32:11
we

00:32:07 --> 00:32:12
process images with convnets because we

00:32:10 --> 00:32:15
don't need to we don't have that

00:32:11 --> 00:32:16
hose compute restrictions anymore now

00:32:14 --> 00:32:18
video is still

00:32:15 --> 00:32:20
under studied because video compute is

00:32:17 --> 00:32:23
till quite challenging

00:32:19 --> 00:32:23
if you are a university researcher i

00:32:22 --> 00:32:26
think

00:32:22 --> 00:32:26
video computing is not so challenging if

00:32:25 --> 00:32:30
you are at

00:32:25 --> 00:32:31
google or facebook or amazon still super

00:32:29 --> 00:32:33
challenging i've

00:32:30 --> 00:32:34
just spoke with the vp of engineering

00:32:32 --> 00:32:36
oogle head of

00:32:34 --> 00:32:38
the youtube search and discovery and

00:32:35 --> 00:32:41
they still struggle doing stuff on

00:32:37 --> 00:32:43
video it's very difficult except doing

00:32:40 --> 00:32:45
except using techniques that are

00:32:42 --> 00:32:48
ssentially the techniques you used in

00:32:44 --> 00:32:49
the 90s some very basic computer

00:32:47 --> 00:32:51
vision techniques

00:32:48 --> 00:32:53
no that's when you want to do things at

00:32:50 --> 00:32:55
scale so if

00:32:52 --> 00:32:57
you want to operate at the scale of all

00:32:54 --> 00:32:59
the content of youtube it's very

00:32:56 --> 00:32:59
challenging and there's similar issues

00:32:58 --> 00:33:02
in

00:32:58 --> 00:33:05
facebook but as a researcher you

00:33:01 --> 00:33:06
have you have more uh you know

00:33:04 --> 00:33:08
opportunities

00:33:05 --> 00:33:09
you can train large you know that works

00:33:07 --> 00:33:12
with relatively large

00:33:08 --> 00:33:13
uh video data sets yeah yes so i think

00:33:11 --> 00:33:15
that

00:33:12 --> 00:33:18
his is part of the reason why we have

00:33:14 --> 00:33:20
so emphasized static images

00:33:17 --> 00:33:21
i think that this is changing and over

00:33:19 --> 00:33:25
the next few years

00:33:20 --> 00:33:28
i see a lot more progress happening in

00:33:24 --> 00:33:30
video so i have this generic

00:33:27 --> 00:33:32
statement that

00:33:29 --> 00:33:33
o me video recognition feels like 10

00:33:31 --> 00:33:36
years behind

00:33:32 --> 00:33:37
object recognition and you can quantify

00:33:35 --> 00:33:38
that because

00:33:36 --> 00:33:40
you can take some of the challenging

00:33:37 --> 00:33:42
video data sets and

00:33:39 --> 00:33:45
their performance on action

00:33:41 --> 00:33:48
classification is like say 30

00:33:44 --> 00:33:50
which is kind of what we used to have

00:33:47 --> 00:33:53
around

00:33:49 --> 00:33:55
2009 in object detection you know so

00:33:52 --> 00:33:58
it's like about 10 years behind

00:33:54 --> 00:33:59
and uh whether it'll take 10 years to

00:33:57 --> 00:34:03
catch up is a different question

00:33:58 --> 00:34:04
hopefully it will take less than that

00:34:02 --> 00:34:06
let me ask a similar question i've

00:34:03 --> 00:34:09
already asked but once again so for

00:34:06 --> 00:34:12
dynamic scenes

00:34:08 --> 00:34:12
do you think do you think some kind of

00:34:11 --> 00:34:15
injection

00:34:11 --> 00:34:16
of knowledge basis and reasoning is

00:34:14 --> 00:34:20
required

00:34:15 --> 00:34:25
to help improve like action recognition

00:34:20 --> 00:34:26
like if if if um

00:34:24 --> 00:34:28
if we solve the general action

00:34:25 --> 00:34:29
recognition problem

00:34:27 --> 00:34:31
what do you think the solution would

00:34:28 --> 00:34:35
look like it's another way yeah

00:34:30 --> 00:34:38
so i i completely

00:34:34 --> 00:34:39
agree that knowledge is called for and

00:34:37 --> 00:34:41
that knowledge can be

00:34:38 --> 00:34:42
quite sophisticated so the way i would

00:34:40 --> 00:34:44
say it is that

00:34:41 --> 00:34:46
perception blends into cognition and

00:34:44 --> 00:34:50
cognition brings in

00:34:45 --> 00:34:52
issues of memory and

00:34:49 --> 00:34:54
this notion of a schema from psychology

00:34:52 --> 00:34:56
which is

00:34:53 --> 00:34:57
uh let me use the classic example which

00:34:55 --> 00:35:00
is

00:34:56 --> 00:35:00
you go to a restaurant right now the

00:34:59 --> 00:35:03
things that

00:34:59 --> 00:35:05
happen in a certain order you walk in

00:35:02 --> 00:35:09
somebody takes you to a table

00:35:04 --> 00:35:12
a waiter comes gives you a menu

00:35:08 --> 00:35:13
takes the order food arrives eventually

00:35:11 --> 00:35:16
a

00:35:12 --> 00:35:20
bill arrives etc etc this is a classic

00:35:15 --> 00:35:22
example of ai from the 1970s

00:35:19 --> 00:35:24
uh it was called there was the term

00:35:22 --> 00:35:26
frames and

00:35:23 --> 00:35:27
scripts and schemas these are all quite

00:35:25 --> 00:35:31
similar ideas

00:35:26 --> 00:35:33
okay in the 70s the way

00:35:30 --> 00:35:35
the ai of the time dealt with it was by

00:35:32 --> 00:35:37
build hand coding this

00:35:34 --> 00:35:39
o they hand coded in this notion of a

00:35:36 --> 00:35:41
script and the various

00:35:38 --> 00:35:42
tages and the actors and so on and so

00:35:40 --> 00:35:45
forth

00:35:41 --> 00:35:46
and use that to interpret for example

00:35:44 --> 00:35:49
language

00:35:45 --> 00:35:51
i mean if there's a description of a of

00:35:48 --> 00:35:53
a story involving

00:35:50 --> 00:35:55
some people eating at a restaurant there

00:35:52 --> 00:35:58
are way all these

00:35:54 --> 00:36:01
inferences you can make because you know

00:35:57 --> 00:36:04
hat happens typically at a restaurant

00:36:00 --> 00:36:05
so i think this kind of uh

00:36:03 --> 00:36:07
this kind of knowledge is absolutely

00:36:04 --> 00:36:10
essential so i think

00:36:06 --> 00:36:12
that when we are going to do long-form

00:36:09 --> 00:36:14
video understanding

00:36:11 --> 00:36:16
we are going to need to do this i think

00:36:13 --> 00:36:17
the kinds of technology that we have

00:36:15 --> 00:36:20
right now with

00:36:16 --> 00:36:22
3d convolutions over a couple of seconds

00:36:19 --> 00:36:24
of clip or video

00:36:21 --> 00:36:26
it's very much tailored towards

00:36:23 --> 00:36:29
hort-term video understanding

00:36:25 --> 00:36:30
not that long-term understanding

00:36:29 --> 00:36:35
requires a notion of

00:36:33 --> 00:36:37
this notion of schemas that i talked

00:36:34 --> 00:36:41
about perhaps some notions of

00:36:36 --> 00:36:44
goals intentionality functionality

00:36:40 --> 00:36:47
and so on and so forth now

00:36:43 --> 00:36:49
how will we bring that in so we could

00:36:46 --> 00:36:52
either revert back to the 70s and say

00:36:48 --> 00:36:55
okay i'm going to hand code in

00:36:51 --> 00:36:59
a script or we might

00:36:54 --> 00:37:01
ry to learn it so i

00:36:58 --> 00:37:03
tend to believe that we have to find

00:37:00 --> 00:37:05
learning ways of doing this

00:37:02 --> 00:37:07
because i think learning ways to land up

00:37:04 --> 00:37:09
being more robust

00:37:06 --> 00:37:11
and there must be a learning version of

00:37:08 --> 00:37:13
the story because

00:37:10 --> 00:37:14
uh children acquire a lot of this

00:37:12 --> 00:37:18
knowledge

00:37:13 --> 00:37:22
by uh sort of just observation so

00:37:17 --> 00:37:24
at no moment in a child's life there's a

00:37:21 --> 00:37:25
it's possible but i think it's not so

00:37:23 --> 00:37:28
typical that

00:37:24 --> 00:37:30
somebody that a mother coaches a child

00:37:27 --> 00:37:31
through all the stages of what happens

00:37:29 --> 00:37:34
in a restaurant

00:37:30 --> 00:37:36
hey just go as a family they they

00:37:33 --> 00:37:38
go to the restaurant they eat come

00:37:35 --> 00:37:38
back and the child goes through 10 such

00:37:37 --> 00:37:41
experiences

00:37:37 --> 00:37:43
and the child has has got a schema of

00:37:40 --> 00:37:46
what happens when you go to a restaurant

00:37:42 --> 00:37:48
so we somehow need to we need to provide

00:37:45 --> 00:37:51
that capability to our systems

00:37:47 --> 00:37:53
you mentioned the following line from

00:37:50 --> 00:37:55
the end of the alan turing paper

00:37:52 --> 00:37:57
uh computing machinery and intelligence

00:37:54 --> 00:38:00
that many people

00:37:56 --> 00:38:02
like you said many people know and very

00:37:59 --> 00:38:04
few have read

00:38:01 --> 00:38:05
where he proposes the turing test this

00:38:03 --> 00:38:07
this is how you know because it's

00:38:04 --> 00:38:09
towards the end of the paper

00:38:06 --> 00:38:10
instead of trying to produce a program

00:38:08 --> 00:38:12
to simulate the adult mind

00:38:09 --> 00:38:15
why not rather try to produce one which

00:38:11 --> 00:38:18
simulates the child's

00:38:14 --> 00:38:20
o that's a really interesting point if

00:38:17 --> 00:38:23
i think about the benchmarks we have

00:38:19 --> 00:38:25
before us the the tests

00:38:22 --> 00:38:27
of our computer vision systems they're

00:38:24 --> 00:38:30
often kind of trying to

00:38:26 --> 00:38:31
get to the adult so what kind of

00:38:29 --> 00:38:33
benchmarks should we have

00:38:30 --> 00:38:35
what kind of tests for computer vision

00:38:32 --> 00:38:38
do you think we should have

00:38:34 --> 00:38:39
that mimic the child's in computer

00:38:37 --> 00:38:41
vision yeah

00:38:38 --> 00:38:43
i think we should have those and we

00:38:40 --> 00:38:47
don't have those today

00:38:42 --> 00:38:49
and i think uh the part of that

00:38:46 --> 00:38:50
he challenge is that we should really

00:38:48 --> 00:38:53
be collecting data

00:38:49 --> 00:38:55
of the type that a child uh that the

00:38:52 --> 00:38:57
child experiences

00:38:54 --> 00:39:00
right so that gets into issues of you

00:38:56 --> 00:39:02
know privacy and so on and so forth

00:38:59 --> 00:39:03
but there are attempts in this direction

00:39:01 --> 00:39:05
to

00:39:02 --> 00:39:06
sort of try to collect the kind of data

00:39:04 --> 00:39:10
that a child

00:39:06 --> 00:39:11
encounters growing up so what's the

00:39:09 --> 00:39:13
child's linguistic

00:39:10 --> 00:39:14
environment what's the child's visual

00:39:12 --> 00:39:18
environment

00:39:13 --> 00:39:21
so if we could collect that kind of data

00:39:17 --> 00:39:22
nd then develop learning schemes based

00:39:20 --> 00:39:26
on that data

00:39:21 --> 00:39:28
that would be one way to do it i

00:39:25 --> 00:39:30
think that's a very promising

00:39:27 --> 00:39:32
direction myself there might be people

00:39:29 --> 00:39:33
who would argue

00:39:31 --> 00:39:35
that we could just short circuit this in

00:39:32 --> 00:39:38
some way and

00:39:34 --> 00:39:42
uh sometimes we have

00:39:37 --> 00:39:44
imitated uh we have not

00:39:41 --> 00:39:45
we have had success by not imitating

00:39:43 --> 00:39:48
nature in detail so

00:39:44 --> 00:39:50
the usual example is airplanes right we

00:39:47 --> 00:39:54
don't build flapping winds

00:39:49 --> 00:39:56
flapping wings so uh

00:39:53 --> 00:39:57
yes that's uh that's one of the points

00:39:55 --> 00:40:02
of debate

00:39:56 --> 00:40:05
uh in my mind i i i would i would bet on

00:40:01 --> 00:40:09
this this learning like a child approach

00:40:04 --> 00:40:10
so one of the fundamental aspects of

00:40:08 --> 00:40:12
learning like a child is the

00:40:09 --> 00:40:14
interactivity

00:40:11 --> 00:40:15
so the child gets to play with the data

00:40:13 --> 00:40:17
set it's learning from

00:40:14 --> 00:40:19
yes it's against the select i mean you

00:40:16 --> 00:40:21
can call that active learning you can

00:40:18 --> 00:40:24
you know in the machine learning world

00:40:20 --> 00:40:26
you can call it a lot of terms

00:40:23 --> 00:40:27
what are your thoughts about this whole

00:40:25 --> 00:40:30
space of being able to play with the

00:40:26 --> 00:40:33
data set or select what you're learning

00:40:29 --> 00:40:36
yeah so i think that uh i

00:40:32 --> 00:40:39
believe in that and i think that we

00:40:35 --> 00:40:41
could achieve it in in two ways and i

00:40:38 --> 00:40:44
think we should use both

00:40:40 --> 00:40:48
so one is uh actually

00:40:44 --> 00:40:51
real robotics right so real uh

00:40:47 --> 00:40:53
you know physical embodiments of agents

00:40:50 --> 00:40:55
who are interacting with the world and

00:40:52 --> 00:40:58
they have a physical body with

00:40:54 --> 00:41:01
dynamics and mass and moment of inertia

00:40:57 --> 00:41:03
nd friction and all the rest and you

00:41:00 --> 00:41:04
learn your body the robot learns its

00:41:02 --> 00:41:07
body by

00:41:03 --> 00:41:11
doing a series of

00:41:06 --> 00:41:12
actions the second is that simulation

00:41:10 --> 00:41:15
environments

00:41:11 --> 00:41:17
o i think simulation environments are

00:41:14 --> 00:41:21
getting much much better

00:41:16 --> 00:41:23
in my in my life in

00:41:20 --> 00:41:25
facebook ai research our group has

00:41:22 --> 00:41:29
worked on something called habitat

00:41:24 --> 00:41:31
which is a simulation environment

00:41:28 --> 00:41:34
which is a visually photorealistic

00:41:30 --> 00:41:37
environment of

00:41:33 --> 00:41:37
you know places like houses or interiors

00:41:36 --> 00:41:40
of

00:41:36 --> 00:41:41
various urban spaces and so forth and as

00:41:39 --> 00:41:43
you move

00:41:40 --> 00:41:45
you get a picture which is a pretty

00:41:42 --> 00:41:49
accurate picture

00:41:44 --> 00:41:50
so uh i i can now uh you can imagine

00:41:48 --> 00:41:52
that

00:41:49 --> 00:41:55
subsequent generations of these

00:41:51 --> 00:41:57
simulators will be accurate not just

00:41:54 --> 00:42:00
visually but with respect to

00:41:56 --> 00:42:04
you know forces and masses and

00:41:59 --> 00:42:07
haptic interactions and so on

00:42:03 --> 00:42:08
and uh then then we have that

00:42:06 --> 00:42:12
environment to play with

00:42:07 --> 00:42:13
i think that let me state one reason why

00:42:11 --> 00:42:16
i think

00:42:12 --> 00:42:16
this active being able to act in the

00:42:15 --> 00:42:18
world is

00:42:15 --> 00:42:19
important i think that this is one way

00:42:17 --> 00:42:23
to break

00:42:18 --> 00:42:26
the correlation versus causation barrier

00:42:22 --> 00:42:28
so this is something which is of a great

00:42:25 --> 00:42:30
deal of interest these days i mean

00:42:27 --> 00:42:33
people like judea pearl have

00:42:29 --> 00:42:36
talked a lot about uh why

00:42:32 --> 00:42:39
that we are neglecting causality and he

00:42:35 --> 00:42:41
describes the entire set of successes of

00:42:38 --> 00:42:45
deep learning as just curve fitting

00:42:40 --> 00:42:45
right because it's uh but i i don't

00:42:44 --> 00:42:48
quite agree

00:42:44 --> 00:42:49
about as a troublemaker he is but uh

00:42:47 --> 00:42:52
causality

00:42:48 --> 00:42:55
is important but causality is not

00:42:51 --> 00:42:57
like a single silver bullet it's

00:42:54 --> 00:42:59
not like one single principle there are

00:42:56 --> 00:43:02
many different aspects here

00:42:58 --> 00:43:04
and one of the ways in which uh

00:43:01 --> 00:43:06
one of our most reliable ways of

00:43:03 --> 00:43:07
establishing causal links and this is

00:43:05 --> 00:43:10
the way

00:43:06 --> 00:43:11
for example the the medical community

00:43:09 --> 00:43:14
does this is

00:43:10 --> 00:43:14
randomized control trials so you have

00:43:13 --> 00:43:17
you

00:43:13 --> 00:43:19
pick some situation and now in some

00:43:16 --> 00:43:22
situation you perform an action and

00:43:18 --> 00:43:24
for certain others you don't

00:43:21 --> 00:43:26
right so so you have a control

00:43:23 --> 00:43:28
experiment well the child is in fact

00:43:25 --> 00:43:29
performing controlled experiments all

00:43:27 --> 00:43:32
the time

00:43:28 --> 00:43:33
right right right okay small scale and

00:43:31 --> 00:43:37
in a small scale and

00:43:32 --> 00:43:38
but but that is a way that the child

00:43:36 --> 00:43:40
gets to

00:43:37 --> 00:43:41
build and refine its causal models of

00:43:39 --> 00:43:45
the world

00:43:40 --> 00:43:47
and my colleague alison gopnik has

00:43:44 --> 00:43:48
together with a couple of authors

00:43:46 --> 00:43:50
co-authors has this book called the

00:43:47 --> 00:43:53
scientist in the crib

00:43:49 --> 00:43:55
referring to children so i like the part

00:43:52 --> 00:43:58
hat i like about that is

00:43:54 --> 00:43:59
the scientist wants to do wants to build

00:43:57 --> 00:44:01
causal models

00:43:58 --> 00:44:03
and the scientist does control

00:44:00 --> 00:44:04
experiments and i think the child is

00:44:02 --> 00:44:07
doing that

00:44:03 --> 00:44:10
so to enable that we will need to

00:44:06 --> 00:44:13
have these these active experiments

00:44:09 --> 00:44:15
and i think this could be done some in

00:44:12 --> 00:44:17
the real world and some in simulation so

00:44:14 --> 00:44:19
you have hope for simulation

00:44:16 --> 00:44:21
i have a hopeless solution that's an

00:44:18 --> 00:44:23
exciting possibility if we can get to

00:44:20 --> 00:44:24
not just photo realistic but what's that

00:44:22 --> 00:44:28
called

00:44:23 --> 00:44:31
life realistic yeah uh simulation

00:44:27 --> 00:44:34
so you don't see any fundamental

00:44:30 --> 00:44:35
blocks to why we can't eventually

00:44:33 --> 00:44:37
simulate

00:44:34 --> 00:44:39
the the principles of what it means to

00:44:36 --> 00:44:40
exist in the world

00:44:38 --> 00:44:42
as a physical i i don't see any

00:44:40 --> 00:44:44
fundamental problems there i mean

00:44:41 --> 00:44:45
d look the computer graphics community

00:44:44 --> 00:44:47
has come a long way

00:44:44 --> 00:44:50
right so the in the early days back

00:44:46 --> 00:44:53
going back to the 80s and 90s they were

00:44:49 --> 00:44:55
focusing on visual realism

00:44:52 --> 00:44:56
right and then they could do the easy

00:44:54 --> 00:44:59
stuff but they couldn't do stuff like

00:44:55 --> 00:45:02
hair or fur and so on

00:44:58 --> 00:45:04
okay well they managed to do that then

00:45:01 --> 00:45:06
they couldn't do physical

00:45:03 --> 00:45:09
actions right like there's a bowl of

00:45:05 --> 00:45:10
glass and it falls down and it shatters

00:45:08 --> 00:45:13
but then they could start to do pretty

00:45:10 --> 00:45:15
realistic models of that

00:45:12 --> 00:45:17
and so on and so forth so the graphics

00:45:14 --> 00:45:20
people have shown that they can do

00:45:16 --> 00:45:22
this forward direction not just for

00:45:19 --> 00:45:24
optical interactions but also for

00:45:21 --> 00:45:27
physical interactions

00:45:23 --> 00:45:29
o i think uh of course some of that is

00:45:26 --> 00:45:33
very computer intensive but

00:45:28 --> 00:45:36
i think by and by we will find ways of

00:45:32 --> 00:45:39
making our models ever more realistic

00:45:35 --> 00:45:40
you break vision apart into in one of

00:45:38 --> 00:45:42
your presentations

00:45:39 --> 00:45:43
early vision static scene understanding

00:45:41 --> 00:45:45
dynamics and understanding

00:45:42 --> 00:45:47
and raise a few interesting questions i

00:45:44 --> 00:45:49
thought i could just throw some

00:45:46 --> 00:45:51
at you just to see if you want to

00:45:48 --> 00:45:54
talk about them

00:45:50 --> 00:45:57
so early vision so it's what is it

00:45:53 --> 00:45:59
you said um sensation

00:45:56 --> 00:46:02
perception and cognition so is this a

00:45:58 --> 00:46:04
sensation yes

00:46:01 --> 00:46:06
what can we learn from image statistics

00:46:03 --> 00:46:11
that we don't already know

00:46:05 --> 00:46:13
so at the lowest level what um

00:46:10 --> 00:46:15
what can we make from just this the the

00:46:12 --> 00:46:17
statistic the basics so there were the

00:46:14 --> 00:46:19
variations in the rock pixels the

00:46:16 --> 00:46:22
textures and so on

00:46:18 --> 00:46:23
yeah so what we seem to have learned is

00:46:21 --> 00:46:26
uh

00:46:22 --> 00:46:29
uh is that there's a lot of

00:46:25 --> 00:46:31
redundancy in these images and

00:46:28 --> 00:46:33
as a result we are able to do a lot of

00:46:30 --> 00:46:34
compression

00:46:32 --> 00:46:37
and and this compression is very

00:46:34 --> 00:46:39
important in biological settings right

00:46:36 --> 00:46:42
so you might have ten to the eight

00:46:38 --> 00:46:43
photoreceptors and only ten to the six

00:46:41 --> 00:46:45
fibers in the optic nerve so you have to

00:46:42 --> 00:46:48
do this compression by

00:46:44 --> 00:46:51
a factor of hundreds to one and

00:46:47 --> 00:46:53
uh and uh so there are analogs of that

00:46:50 --> 00:46:55
which are happening in

00:46:52 --> 00:46:57
our neural net artificial neural

00:46:54 --> 00:46:58
network that's the early layer so you

00:46:56 --> 00:47:00
think

00:46:57 --> 00:47:01
there's a lot of compression that can be

00:46:59 --> 00:47:04
done in the beginning

00:47:00 --> 00:47:07
yeah just just the statistics yeah

00:47:03 --> 00:47:10
um how much

00:47:06 --> 00:47:11
well so i mean the the way to

00:47:10 --> 00:47:15
think about it is

00:47:10 --> 00:47:18
just how successful is image compression

00:47:14 --> 00:47:19
right and we we and there are and that's

00:47:17 --> 00:47:21
been done with

00:47:18 --> 00:47:23
older technologies but it can be done

00:47:20 --> 00:47:26
with there are

00:47:22 --> 00:47:27
several companies which are trying to

00:47:25 --> 00:47:29
use

00:47:26 --> 00:47:31
sort of these more advanced neural

00:47:28 --> 00:47:34
network type techniques for compression

00:47:30 --> 00:47:35
both for static images as well as for

00:47:33 --> 00:47:38
video

00:47:34 --> 00:47:40
ne of my former students has a company

00:47:37 --> 00:47:43
which is trying to do

00:47:39 --> 00:47:45
stuff like this and

00:47:42 --> 00:47:46
i think i think that they are showing

00:47:44 --> 00:47:48
quite

00:47:45 --> 00:47:49
interesting results and i think that

00:47:47 --> 00:47:52
's all

00:47:48 --> 00:47:54
the success of that's really about image

00:47:51 --> 00:47:56
statistics and video statistics but

00:47:53 --> 00:47:58
hat's still not doing

00:47:55 --> 00:47:59
compression of the kind when i see a

00:47:57 --> 00:48:01
picture of a cat

00:47:58 --> 00:48:03
all i have to say is it's a cat that's

00:48:00 --> 00:48:05
another semantic kind of complication

00:48:02 --> 00:48:07
yeah so this is this is at the lower

00:48:04 --> 00:48:08
level right so we are we are we as i

00:48:06 --> 00:48:11
said yeah

00:48:07 --> 00:48:13
that's focusing on low level statistics

00:48:10 --> 00:48:17
o to linger on that for a little bit

00:48:12 --> 00:48:19
uh you mentioned how far can bottom-up

00:48:16 --> 00:48:22
image segmentation go

00:48:18 --> 00:48:24
and in general what you mentioned

00:48:21 --> 00:48:25
that the central question for scene

00:48:23 --> 00:48:27
understanding is the interplay of

00:48:24 --> 00:48:29
bottom-up and top-down information maybe

00:48:26 --> 00:48:31
this is a good time

00:48:28 --> 00:48:32
to elaborate on that maybe define what

00:48:30 --> 00:48:36
is

00:48:32 --> 00:48:37
what is up what is top down

00:48:35 --> 00:48:40
in the comments yes the computer vision

00:48:36 --> 00:48:43
uh right that's uh

00:48:39 --> 00:48:45
so today what we have are a are very

00:48:42 --> 00:48:46
interesting systems because they work

00:48:44 --> 00:48:48
completely bottom up

00:48:45 --> 00:48:50
how are they what does bottom bottom-up

00:48:47 --> 00:48:51
mean sorry so bottom-up means in this

00:48:49 --> 00:48:52
case means a feed-forward net neural

00:48:50 --> 00:48:54
network

00:48:51 --> 00:48:57
so starting from the raw pixels yeah

00:48:53 --> 00:48:59
they start from the raw pixels and they

00:48:56 --> 00:49:00
end up with some something like cat

00:48:58 --> 00:49:03
or not a cat

00:48:59 --> 00:49:05
right so our our systems are running

00:49:02 --> 00:49:08
totally feed forward

00:49:04 --> 00:49:10
they're trained in a very top-down way

00:49:07 --> 00:49:12
so they're trained by saying okay this

00:49:09 --> 00:49:15
a cat there's a cat there's a dog

00:49:11 --> 00:49:18
there's a zebra etc

00:49:14 --> 00:49:19
and i'm not happy with either of these

00:49:17 --> 00:49:22
choices fully

00:49:18 --> 00:49:25
we have gone into uh because we have

00:49:21 --> 00:49:29
completely separated these processes

00:49:24 --> 00:49:32
right so there is a so i would like the

00:49:28 --> 00:49:34
uh the process uh

00:49:31 --> 00:49:37
so what do we know compared to biology

00:49:33 --> 00:49:38
so in biology what we know is that the

00:49:36 --> 00:49:42
processes

00:49:37 --> 00:49:44
in at test time at run time

00:49:41 --> 00:49:47
those processes are not purely feed

00:49:43 --> 00:49:49
forward but they involve feedback

00:49:46 --> 00:49:50
so and they involve much shallower

00:49:48 --> 00:49:52
neural networks

00:49:49 --> 00:49:55
o the kinds of neural networks we are

00:49:51 --> 00:49:57
using in computer vision say a resnet 50

00:49:54 --> 00:49:59
has 50 layers

00:49:56 --> 00:50:00
well in in the brain in the visual

00:49:58 --> 00:50:03
cortex

00:49:59 --> 00:50:04
going from the retina to it maybe we

00:50:02 --> 00:50:07
have like seven

00:50:03 --> 00:50:09
right so they're far shallower but we

00:50:06 --> 00:50:11
have the possibility of feedback so

00:50:08 --> 00:50:14
there are backward connections

00:50:10 --> 00:50:17
and this might enable us to uh

00:50:14 --> 00:50:19
to deal with the more ambiguous stimuli

00:50:16 --> 00:50:22
for example

00:50:18 --> 00:50:24
so the the biological solution seems to

00:50:21 --> 00:50:27
involve feedback

00:50:23 --> 00:50:29
the solution in in artificial

00:50:26 --> 00:50:31
vision seems to be just feed forward but

00:50:28 --> 00:50:34
with a much deeper network

00:50:30 --> 00:50:35
and the two are functionally equivalent

00:50:33 --> 00:50:37
because if you have a feedback network

00:50:34 --> 00:50:38
which just has like three rounds of

00:50:36 --> 00:50:41
eedback

00:50:37 --> 00:50:41
you can just unroll it and make it three

00:50:40 --> 00:50:44
times the depth

00:50:40 --> 00:50:45
and create it in a totally feed forward

00:50:43 --> 00:50:47
way

00:50:44 --> 00:50:49
so this is something which i mean we

00:50:46 --> 00:50:52
have written some papers on this

00:50:48 --> 00:50:56
theme but i really feel that this should

00:50:51 --> 00:50:58
this theme should be pursued further

00:50:55 --> 00:50:59
have some kind of recurrence mechanism

00:50:57 --> 00:51:02
yeah

00:50:58 --> 00:51:02
okay the other uh so that so that's uh

00:51:01 --> 00:51:04
so i

00:51:01 --> 00:51:06
want to have a little bit more top

00:51:04 --> 00:51:11
down in the

00:51:05 --> 00:51:12
at test time okay then at training time

00:51:10 --> 00:51:14
we make use of a lot of top-down

00:51:12 --> 00:51:16
knowledge right now

00:51:13 --> 00:51:18
so basically to learn to segment an

00:51:15 --> 00:51:21
object we have to have all these

00:51:17 --> 00:51:22
xamples of this is the boundary of a

00:51:20 --> 00:51:24
cat and this is the boundary of a chair

00:51:22 --> 00:51:26
and this is the boundary of a horse and

00:51:23 --> 00:51:30
so on and this is

00:51:25 --> 00:51:33
too much top-down knowledge how do

00:51:29 --> 00:51:35
humans do this we manage to we manage

00:51:32 --> 00:51:37
with far less supervision

00:51:34 --> 00:51:38
and we do it in a sort of bottom-up way

00:51:36 --> 00:51:41
because for example

00:51:38 --> 00:51:43
we're looking at a video stream and the

00:51:40 --> 00:51:46
horse moves

00:51:42 --> 00:51:47
and that enables me to say that all

00:51:45 --> 00:51:50
these pixels are together

00:51:46 --> 00:51:51
yeah so the gestural psychologists used

00:51:49 --> 00:51:54
to call this

00:51:50 --> 00:51:55
the principle of common fate so there

00:51:53 --> 00:51:57
was a bottom-up

00:51:54 --> 00:51:59
rocess by which we were able to segment

00:51:56 --> 00:52:02
out these objects

00:51:58 --> 00:52:05
and we have totally focused on this

00:52:01 --> 00:52:08
top-down training signal

00:52:04 --> 00:52:08
so in my view we have currently solved

00:52:07 --> 00:52:10
it

00:52:07 --> 00:52:13
in machine vision this top-down

00:52:09 --> 00:52:15
bottom-up interaction

00:52:12 --> 00:52:16
but i don't find the solution fully

00:52:14 --> 00:52:19
satisfactory

00:52:16 --> 00:52:20
and i would rather have a bit of both in

00:52:18 --> 00:52:23
at both stages

00:52:20 --> 00:52:24
for all computer vision problems which

00:52:22 --> 00:52:27
is not just segmentation

00:52:24 --> 00:52:28
and and and and the question that you

00:52:26 --> 00:52:30
can ask is

00:52:27 --> 00:52:32
o for me i'm inspired a lot by human

00:52:29 --> 00:52:34
vision and i care about that

00:52:31 --> 00:52:36
you could be a just a hard-boiled

00:52:33 --> 00:52:39
engineer not give a damn

00:52:35 --> 00:52:41
so to you i would then argue that uh you

00:52:38 --> 00:52:46
would need far less training data

00:52:40 --> 00:52:49
if you could make my uh research agenda

00:52:45 --> 00:52:52
you know fruitful okay so

00:52:48 --> 00:52:54
maybe taking a step into uh segmentation

00:52:51 --> 00:52:56
static scene understanding

00:52:53 --> 00:52:58
what is the interaction between

00:52:55 --> 00:53:01
segmentation and recognition

00:52:57 --> 00:53:03
you mentioned the movement of objects

00:53:00 --> 00:53:04
o for people who don't know computer

00:53:02 --> 00:53:07
vision

00:53:03 --> 00:53:08
segmentation is this weird activity that

00:53:06 --> 00:53:09
we

00:53:07 --> 00:53:11
that computer vision folks have all

00:53:08 --> 00:53:15
agreed is very important

00:53:10 --> 00:53:18
uh of drawing outlines around objects

00:53:14 --> 00:53:22
versus a bounding box or

00:53:17 --> 00:53:24
and then classifying that object

00:53:21 --> 00:53:25
what's what's the value of segmentation

00:53:23 --> 00:53:28
what is it

00:53:24 --> 00:53:30
as a problem in computer vision how is

00:53:27 --> 00:53:32
it fundamentally different from

00:53:29 --> 00:53:33
detection recognition any other problems

00:53:31 --> 00:53:37
yeah so i think

00:53:32 --> 00:53:40
uh so so segmentation

00:53:36 --> 00:53:43
enables us to say that

00:53:39 --> 00:53:46
some set of pixels are an object without

00:53:42 --> 00:53:48
necessarily even being able to name that

00:53:45 --> 00:53:48
object or knowing properties of that

00:53:47 --> 00:53:52
object

00:53:47 --> 00:53:55
oh so you mean segmentation purely as

00:53:51 --> 00:53:59
as the act of separating an object

00:53:54 --> 00:54:01
from its background a blob of uh

00:53:58 --> 00:54:03
of that's united in some way from his

00:54:00 --> 00:54:04
background yeah so identification if you

00:54:02 --> 00:54:05
were

00:54:03 --> 00:54:08
making an entity out of it and

00:54:04 --> 00:54:11
justification yeah beautifully

00:54:07 --> 00:54:12
so so i think that we have that

00:54:10 --> 00:54:15
capability

00:54:11 --> 00:54:19
and that is that enables us

00:54:14 --> 00:54:22
to uh as we are growing up to

00:54:18 --> 00:54:25
acquire uh names of objects

00:54:21 --> 00:54:25
with very little supervision so suppose

00:54:24 --> 00:54:27
the child

00:54:24 --> 00:54:29
lets posit that the child has this

00:54:26 --> 00:54:32
ability to separate out

00:54:28 --> 00:54:32
objects in the world then when the

00:54:31 --> 00:54:37
re's a

00:54:31 --> 00:54:39
the mother says pick up your bottle or

00:54:36 --> 00:54:42
the cat's behaving funny today

00:54:38 --> 00:54:45
[Laughter]

00:54:41 --> 00:54:47
the word cat suggests some object and

00:54:44 --> 00:54:49
then the child sort of does the mapping

00:54:46 --> 00:54:51
right right the mother doesn't have to

00:54:48 --> 00:54:53
teach

00:54:50 --> 00:54:55
a specific object labels by pointing to

00:54:52 --> 00:54:58
them

00:54:54 --> 00:54:59
weak supervision works in the context

00:54:57 --> 00:55:02
hat you have

00:54:58 --> 00:55:06
the ability to create objects so

00:55:02 --> 00:55:08
i think that uh so to me that's that's a

00:55:05 --> 00:55:10
very fundamental capability

00:55:07 --> 00:55:11
uh there are applications where this is

00:55:09 --> 00:55:14
very important uh

00:55:10 --> 00:55:15
for example medical diagnosis so in

00:55:13 --> 00:55:18
medical diagnosis

00:55:14 --> 00:55:19
uh you have some uh brain scan i mean

00:55:18 --> 00:55:21
some

00:55:18 --> 00:55:24
this is some work that we did in my

00:55:20 --> 00:55:24
group where you have ct scans of people

00:55:23 --> 00:55:27
who have

00:55:23 --> 00:55:29
had traumatic brain injury and what uh

00:55:26 --> 00:55:32
what the radiologist needs to do is to

00:55:28 --> 00:55:35
precisely delineate various

00:55:31 --> 00:55:37
places where there might be bleeds for

00:55:34 --> 00:55:39
example

00:55:36 --> 00:55:40
and there's there are clear needs like

00:55:38 --> 00:55:43
that

00:55:39 --> 00:55:45
so they're certainly very practical

00:55:42 --> 00:55:47
applications of computer vision where

00:55:44 --> 00:55:50
segmentation is necessary

00:55:46 --> 00:55:53
but philosophically segmentation

00:55:49 --> 00:55:56
enables the task of recognition

00:55:52 --> 00:55:58
to proceed with much weaker supervision

00:55:56 --> 00:56:00
than we require today

00:55:57 --> 00:56:02
and you think of segmentation as this

00:55:59 --> 00:56:06
kind of task that takes on

00:56:02 --> 00:56:09
a visual scene and breaks it apart

00:56:05 --> 00:56:11
into into interesting entities yeah

00:56:08 --> 00:56:13
that might be useful for whatever the

00:56:10 --> 00:56:15
task is yeah

00:56:12 --> 00:56:16
and and it is not semantics free so i

00:56:14 --> 00:56:20
think i

00:56:16 --> 00:56:24
mean it it blends into it involves

00:56:20 --> 00:56:24
perception and cognition it is not it is

00:56:23 --> 00:56:27
not

00:56:23 --> 00:56:28
i i think the mistake that we used to

00:56:26 --> 00:56:29
make in the early days of computer

00:56:27 --> 00:56:32
vision

00:56:28 --> 00:56:35
was to treat it as a purely bottom-up

00:56:31 --> 00:56:39
erceptual task it is not just that

00:56:34 --> 00:56:42
because we do revise our notion of

00:56:38 --> 00:56:43
segmentation with more experience right

00:56:41 --> 00:56:44
because

00:56:42 --> 00:56:46
for example there are objects which are

00:56:43 --> 00:56:50
non-rigid like animals

00:56:45 --> 00:56:52
or humans and uh i think

00:56:49 --> 00:56:54
understanding that all the pixels of a

00:56:51 --> 00:56:55
human are one entity is actually quite a

00:56:53 --> 00:56:58
challenge

00:56:54 --> 00:56:59
because the parts of the human they can

00:56:57 --> 00:57:01
move independently

00:56:58 --> 00:57:03
and the human wears clothes so they

00:57:00 --> 00:57:06
might be differently colored

00:57:02 --> 00:57:08
so it's all sort of a challenge you

00:57:05 --> 00:57:08
mentioned the three hours of computer

00:57:07 --> 00:57:11
vision

00:57:07 --> 00:57:12
are recognition reconstruction

00:57:10 --> 00:57:15
reorganization

00:57:12 --> 00:57:16
can you describe these three r's sure

00:57:14 --> 00:57:20
how they interact

00:57:15 --> 00:57:20
yeah so uh so recognition is the easiest

00:57:19 --> 00:57:23
one

00:57:19 --> 00:57:26
because that's uh what i think

00:57:22 --> 00:57:27
people generally think of as computer

00:57:25 --> 00:57:31
vision

00:57:26 --> 00:57:35
achieving these days which is uh labels

00:57:30 --> 00:57:37
o is this a cat is this a dog is this a

00:57:34 --> 00:57:39
chihuahua i mean you know it could be

00:57:36 --> 00:57:42
very fine grain like

00:57:38 --> 00:57:44
you know specific breed of a dog or a

00:57:41 --> 00:57:47
specific species or bird

00:57:43 --> 00:57:50
or it could be very abstract like animal

00:57:46 --> 00:57:51
but given a part of an image or a whole

00:57:49 --> 00:57:54
image say

00:57:50 --> 00:57:55
put a label on that yeah so that's

00:57:53 --> 00:57:59
recognition

00:57:54 --> 00:58:02
reconstruction is uh

00:57:58 --> 00:58:03
essentially it you can think of it as

00:58:01 --> 00:58:06
inverse

00:58:02 --> 00:58:09
graphics i mean that's one way

00:58:05 --> 00:58:11
to think about it so graphics is your

00:58:08 --> 00:58:12
you have some internal computer

00:58:10 --> 00:58:14
epresentation

00:58:12 --> 00:58:17
and uh you have a computer

00:58:14 --> 00:58:18
epresentation of some objects arranged

00:58:16 --> 00:58:20
in a scene

00:58:17 --> 00:58:23
and what you do is you produce a picture

00:58:19 --> 00:58:25
you produce the pixels corresponding to

00:58:22 --> 00:58:28
a rendering of that scene

00:58:24 --> 00:58:30
so uh so let's

00:58:27 --> 00:58:32
do the inverse of this we are given an

00:58:29 --> 00:58:36
image and we try to

00:58:31 --> 00:58:40
we we we say oh this image

00:58:35 --> 00:58:42
arises from some objects in a scene

00:58:39 --> 00:58:43
looked at with a camera from this

00:58:41 --> 00:58:46
viewpoint and we might have more

00:58:42 --> 00:58:49
information about the objects like their

00:58:45 --> 00:58:52
shape maybe their textures maybe

00:58:48 --> 00:58:54
you know color et cetera et cetera so

00:58:51 --> 00:58:55
that's the reconstruction problem in a

00:58:53 --> 00:58:58
way

00:58:54 --> 00:59:02
that you are in your head creating a

00:58:57 --> 00:59:05
model of the external world

00:59:01 --> 00:59:09
okay reorganization is to do with

00:59:04 --> 00:59:13
essentially finding these entities so

00:59:08 --> 00:59:16
uh so it's uh organization or

00:59:12 --> 00:59:19
the word organization implies structure

00:59:15 --> 00:59:22
so uh that in in uh perception

00:59:18 --> 00:59:23
in psychology we use the term perceptual

00:59:21 --> 00:59:27
organization

00:59:22 --> 00:59:30
that uh the the world is not just

00:59:26 --> 00:59:32
an image is not just seen as is not

00:59:29 --> 00:59:34
internally represented as just a

00:59:31 --> 00:59:36
collection of pixels but we

00:59:33 --> 00:59:37
make these entities we create these

00:59:36 --> 00:59:39
ntities

00:59:36 --> 00:59:40
objects whatever you want to call in the

00:59:38 --> 00:59:43
relationship between the entities as

00:59:39 --> 00:59:45
well or is it purely about the entities

00:59:42 --> 00:59:47
it could be about the relationships but

00:59:44 --> 00:59:48
mainly we focus on the fact that there

00:59:46 --> 00:59:51
are entities

00:59:47 --> 00:59:53
ometimes i'm trying to pinpoint what

00:59:50 --> 00:59:55
he organization means

00:59:52 --> 00:59:56
o organization is that instead of like

00:59:54 --> 01:00:00
a

00:59:55 --> 01:00:02
uniform grid we have the structure of

00:59:59 --> 01:00:06
objects

01:00:01 --> 01:00:08
o segmentation is a small part of that

01:00:05 --> 01:00:09
so segmentation gets us going towards

01:00:07 --> 01:00:12
that

01:00:08 --> 01:00:14
yeah and you kind of have this triangle

01:00:11 --> 01:00:18
where they all interact together

01:00:13 --> 01:00:21
yes so how do you see that interaction

01:00:17 --> 01:00:24
in uh sort of uh

01:00:20 --> 01:00:26
reorganization is yes defining the

01:00:23 --> 01:00:29
ntities in the world

01:00:25 --> 01:00:30
the recognition is labeling those

01:00:28 --> 01:00:33
ntities

01:00:29 --> 01:00:34
and then reconstruction is what filling

01:00:32 --> 01:00:38
in the gaps

01:00:33 --> 01:00:41
well to for example see

01:00:37 --> 01:00:42
impute some 3d objects corresponding to

01:00:40 --> 01:00:45
each of these

01:00:41 --> 01:00:47
ntities that would be part of adding

01:00:44 --> 01:00:50
more information that's not

01:00:46 --> 01:00:54
here in the raw data correct

01:00:49 --> 01:00:57
i mean i started pushing this kind of a

01:00:53 --> 01:00:58
view in the around 2010 or something

01:00:56 --> 01:01:01
like that

01:00:57 --> 01:01:03
because at that time in computer vision

01:01:00 --> 01:01:06
the distinction that

01:01:02 --> 01:01:09
people were were just

01:01:05 --> 01:01:11
working on many different problems but

01:01:08 --> 01:01:14
hey treated each of them as a separate

01:01:10 --> 01:01:16
isolated problem with each with its own

01:01:13 --> 01:01:17
data set and then you try to solve that

01:01:15 --> 01:01:20
and get good numbers on it

01:01:16 --> 01:01:22
so i wasn't i didn't like that approach

01:01:19 --> 01:01:25
because i wanted to see

01:01:21 --> 01:01:29
the connection between these and

01:01:24 --> 01:01:31
if people divided up vision into

01:01:28 --> 01:01:33
various modules the way they would

01:01:30 --> 01:01:35
o it is as low level mid-level and

01:01:32 --> 01:01:36
high-level vision

01:01:34 --> 01:01:38
corresponding roughly to the

01:01:35 --> 01:01:40
psychologist's notion of sensation

01:01:37 --> 01:01:44
perception and cognition

01:01:39 --> 01:01:46
and i didn't that didn't map to tasks

01:01:43 --> 01:01:49
that people cared about

01:01:45 --> 01:01:51
okay so therefore i tried to promote

01:01:48 --> 01:01:53
this particular framework

01:01:50 --> 01:01:54
as a way of considering the problems

01:01:52 --> 01:01:56
that people in computer vision were

01:01:53 --> 01:01:59
actually working on

01:01:55 --> 01:02:00
and trying to be more explicit about the

01:01:58 --> 01:02:04
fact that they actually

01:01:59 --> 01:02:05
are connected to each other and i was at

01:02:03 --> 01:02:07
hat time

01:02:04 --> 01:02:08
just doing this on the basis of

01:02:06 --> 01:02:12
information flow

01:02:07 --> 01:02:14
now it turns out in the last five years

01:02:11 --> 01:02:18
or so

01:02:13 --> 01:02:21
in the post the deep learning revolution

01:02:17 --> 01:02:22
that this this architecture has turned

01:02:20 --> 01:02:25
out to be

01:02:21 --> 01:02:28
very conducive to that

01:02:24 --> 01:02:29
because basically in these neural

01:02:27 --> 01:02:33
networks we are trying to

01:02:28 --> 01:02:33
build multiple representations

01:02:32 --> 01:02:38
there can be multiple output heads

01:02:35 --> 01:02:41
haring common representations

01:02:37 --> 01:02:43
o in a certain sense today given the

01:02:40 --> 01:02:45
reality of what solutions people have to

01:02:42 --> 01:02:48
these

01:02:44 --> 01:02:49
i i i i do not need to preach this

01:02:47 --> 01:02:52
anymore

01:02:48 --> 01:02:53
it is it is just there it's part of the

01:02:51 --> 01:02:56
solution space

01:02:52 --> 01:02:57
so speaking of neural networks how much

01:02:55 --> 01:03:01
of

01:02:56 --> 01:03:04
this uh problem of computer vision

01:03:00 --> 01:03:10
of the organization recognition

01:03:03 --> 01:03:12
can be um reconstruction

01:03:09 --> 01:03:13
how much of it can be learned end to end

01:03:11 --> 01:03:18
o you think

01:03:12 --> 01:03:19
instead of uh set it and forget it just

01:03:17 --> 01:03:21
plug and play

01:03:18 --> 01:03:23
have a giant data set multiple perhaps

01:03:20 --> 01:03:26
multi-modal

01:03:22 --> 01:03:29
and then just learn the entirety of it

01:03:25 --> 01:03:32
well so i i think that currently what

01:03:28 --> 01:03:34
hat end-to-end learning means nowadays

01:03:31 --> 01:03:37
is end-to-end supervised learning

01:03:33 --> 01:03:39
and and that i would argue is too narrow

01:03:36 --> 01:03:42
a view of the problem

01:03:38 --> 01:03:43
i would i like this child development

01:03:41 --> 01:03:46
view

01:03:42 --> 01:03:48
this lifelong learning view one where

01:03:45 --> 01:03:50
there are certain capabilities that are

01:03:47 --> 01:03:52
built up and then there are certain

01:03:49 --> 01:03:55
capabilities which are built up

01:03:51 --> 01:03:59
on top of that so uh

01:03:54 --> 01:04:03
that's that's what i i believe in

01:03:58 --> 01:04:06
so i think uh

01:04:02 --> 01:04:07
end-to-end learning in the supervised

01:04:05 --> 01:04:11
setting

01:04:06 --> 01:04:14
for a very precise task to me is

01:04:10 --> 01:04:17
a kind of is uh

01:04:13 --> 01:04:19
it's sort of a limited view of the of

01:04:16 --> 01:04:22
the learning process

01:04:18 --> 01:04:24
got it so if we think about beyond

01:04:21 --> 01:04:27
purely supervised look at back to

01:04:23 --> 01:04:30
children you mentioned six lessons

01:04:26 --> 01:04:34
that we can learn from children uh of

01:04:29 --> 01:04:37
be multimodal be incremental be physical

01:04:33 --> 01:04:40
explore be social use language can you

01:04:36 --> 01:04:42
speak to these perhaps picking one

01:04:39 --> 01:04:43
that you find most fundamental toward

01:04:41 --> 01:04:46
yeah time today

01:04:42 --> 01:04:49
eah so i mean i should say to give due

01:04:45 --> 01:04:53
credit this is from a paper by

01:04:48 --> 01:04:56
smith and gasser and it reflects

01:04:52 --> 01:04:58
essentially i would say common wisdom

01:04:55 --> 01:05:02
among

01:04:57 --> 01:05:05
child development people it's just that

01:05:01 --> 01:05:05
hese are this is not common wisdom

01:05:04 --> 01:05:08
among people

01:05:04 --> 01:05:09
in computer vision and ai and machine

01:05:07 --> 01:05:13
learning so

01:05:08 --> 01:05:16
i view my role as uh trying to

01:05:12 --> 01:05:19
bridge the worlds bridge the two worlds

01:05:15 --> 01:05:20
o uh so let's take an example of a

01:05:18 --> 01:05:25
multi-modal i like that

01:05:20 --> 01:05:28
so multi-modal canonical example is uh

01:05:24 --> 01:05:29
a child interacting with uh with an

01:05:27 --> 01:05:31
object

01:05:28 --> 01:05:33
so then the child so the child holds a

01:05:30 --> 01:05:35
ball and plays with it

01:05:32 --> 01:05:36
so at that point it's getting a touch

01:05:34 --> 01:05:39
signal

01:05:35 --> 01:05:42
so the touch signal is

01:05:38 --> 01:05:44
getting as the notion of 3d shape but

01:05:41 --> 01:05:46
it is sparse

01:05:43 --> 01:05:48
and then the child is also seeing a

01:05:45 --> 01:05:51
visual signal right

01:05:47 --> 01:05:53
and and these two so imagine these are

01:05:50 --> 01:05:56
two in totally different spaces

01:05:52 --> 01:05:57
right so one is the space of receptors

01:05:55 --> 01:05:58
on the skin

01:05:56 --> 01:06:00
of the fingers and the thumb and the

01:05:57 --> 01:06:02
palm

01:05:59 --> 01:06:04
right and then these map on to these

01:06:01 --> 01:06:07
neuronal fibers are

01:06:03 --> 01:06:10
getting activated somewhere right these

01:06:06 --> 01:06:11
lead to some activation in somatosensory

01:06:09 --> 01:06:13
cortex

01:06:10 --> 01:06:15
i mean a similar thing will happen if we

01:06:12 --> 01:06:17
have a robot

01:06:14 --> 01:06:19
hand okay and then we have the pixels

01:06:16 --> 01:06:21
corresponding to the

01:06:18 --> 01:06:22
visual view but we know that they

01:06:20 --> 01:06:25
correspond to the same

01:06:21 --> 01:06:28
object right so that's

01:06:24 --> 01:06:29
a very very strong cross calibration

01:06:27 --> 01:06:31
signal

01:06:28 --> 01:06:33
and it is self-supervisory which is

01:06:30 --> 01:06:35
beautiful right

01:06:32 --> 01:06:36
here's nobody assigning a label the

01:06:34 --> 01:06:39
mother doesn't have to

01:06:35 --> 01:06:40
come and assign a label the child

01:06:38 --> 01:06:43
oesn't even have to

01:06:39 --> 01:06:45
know that this object is called a ball

01:06:42 --> 01:06:46
okay but the obj the child is learning

01:06:44 --> 01:06:47
something about the three-dimensional

01:06:45 --> 01:06:50
world

01:06:46 --> 01:06:53
from this signal uh

01:06:49 --> 01:06:54
i think tactile and visual there is some

01:06:52 --> 01:06:56
work on

01:06:53 --> 01:06:58
there is a lot of work currently on

01:06:55 --> 01:07:00
audio and visual

01:06:57 --> 01:07:02
okay an audio visual so there is some

01:06:59 --> 01:07:05
vent that happens in the world

01:07:01 --> 01:07:06
and that event has a visual signature

01:07:04 --> 01:07:08
and it has a

01:07:05 --> 01:07:10
uditory signature so there is this

01:07:07 --> 01:07:12
glass bowl on the table and it falls and

01:07:09 --> 01:07:14
breaks and i hear the

01:07:11 --> 01:07:16
smashing sound and i see the pieces of

01:07:13 --> 01:07:18
glass

01:07:15 --> 01:07:19
okay i've built that connection between

01:07:17 --> 01:07:22
the two

01:07:18 --> 01:07:24
right we have people uh i mean this has

01:07:21 --> 01:07:26
become a hot topic in computer vision in

01:07:23 --> 01:07:29
the last couple of years

01:07:25 --> 01:07:33
there is there are problems like uh

01:07:28 --> 01:07:35
separating out multiple speakers right

01:07:32 --> 01:07:37
which was a classic problem in in

01:07:34 --> 01:07:39
audition they call this the problem of

01:07:36 --> 01:07:42
source separation or the

01:07:38 --> 01:07:44
cocktail party effect and so on but just

01:07:41 --> 01:07:47
ry to do it visually

01:07:43 --> 01:07:51
when you also have it becomes so much

01:07:46 --> 01:07:54
easier and so much more useful

01:07:50 --> 01:07:55
so the the multimodal i mean there's so

01:07:53 --> 01:07:57
much more

01:07:54 --> 01:07:58
signal with multimodal and you can use

01:07:56 --> 01:08:00
that

01:07:57 --> 01:08:01
for some kind of weak supervision as

01:07:59 --> 01:08:02
well yes

01:08:00 --> 01:08:05
because they are occurring at the same

01:08:02 --> 01:08:07
time in time yeah so you have time

01:08:04 --> 01:08:09
which links the two right so at a

01:08:06 --> 01:08:10
certain moment t1

01:08:08 --> 01:08:12
you've got a certain signal in the

01:08:09 --> 01:08:13
auditory domain and a certain signal in

01:08:11 --> 01:08:16
the visual domain

01:08:12 --> 01:08:18
but they must be causally related yeah

01:08:15 --> 01:08:18
it's an exciting area not well studied

01:08:17 --> 01:08:20
yet

01:08:17 --> 01:08:23
not yeah i mean we have a little bit of

01:08:19 --> 01:08:25
work at this but uh but

01:08:22 --> 01:08:26
so much more needs to be done yeah

01:08:24 --> 01:08:29
so so so

01:08:25 --> 01:08:30
this this is this is a good example

01:08:28 --> 01:08:32
be physical

01:08:29 --> 01:08:33
that's to do with uh like the one thing

01:08:31 --> 01:08:35
we talked about

01:08:32 --> 01:08:37
earlier that that there's a embodied

01:08:34 --> 01:08:40
world

01:08:36 --> 01:08:43
to mention language use language so

01:08:39 --> 01:08:45
no chomsky believes that language may be

01:08:42 --> 01:08:47
at the core of cognition at the core of

01:08:44 --> 01:08:49
everything in the human mind

01:08:46 --> 01:08:50
what is the connection between language

01:08:48 --> 01:08:53
and vision to you

01:08:50 --> 01:08:54
like what's more fundamental are they

01:08:52 --> 01:08:57
neighbors

01:08:53 --> 01:08:58
is one the parent and the child the

01:08:56 --> 01:09:00
chicken and the egg

01:08:57 --> 01:09:02
oh it's very clear it is vision which is

01:09:00 --> 01:09:03
the appearance the fundament the

01:09:01 --> 01:09:07
permission is the fundamental

01:09:02 --> 01:09:10
ability okay well so

01:09:06 --> 01:09:11
uh it comes before you think vision is

01:09:09 --> 01:09:15
more fundamental than language

01:09:10 --> 01:09:17
correct and and and it and yeah

01:09:14 --> 01:09:18
you can think of it either in phylogeny

01:09:16 --> 01:09:20
or in ontogeny

01:09:18 --> 01:09:22
so phylogeny means if you look at

01:09:19 --> 01:09:24
evolutionary time

01:09:21 --> 01:09:27
right so you we have vision that

01:09:24 --> 01:09:30
developed 500 million years ago

01:09:26 --> 01:09:31
kay then something like when we get to

01:09:29 --> 01:09:33
maybe like

01:09:30 --> 01:09:36
five million years ago you have the

01:09:32 --> 01:09:37
first bipedal primate so when we started

01:09:35 --> 01:09:40
to

01:09:36 --> 01:09:40
walk then the hands became free and so

01:09:39 --> 01:09:42
then

01:09:39 --> 01:09:45
manipulation the ability to manipulate

01:09:42 --> 01:09:47
objects and build tools and

01:09:44 --> 01:09:48
so on and so forth so you said 500 000

01:09:46 --> 01:09:52
years ago no no sorry

01:09:48 --> 01:09:53
the the first multicellular animals

01:09:51 --> 01:09:57
which you can say

01:09:52 --> 01:09:59
had some intelligence arose 500 million

01:09:56 --> 01:10:02
years ago

01:09:58 --> 01:10:02
kay and now let's fast forward to say

01:10:01 --> 01:10:06
the last

01:10:02 --> 01:10:07
seven million years which is the

01:10:05 --> 01:10:10
development of the hominid line right

01:10:06 --> 01:10:12
where from the other primates we have

01:10:09 --> 01:10:13
the branch which leads on to modern

01:10:11 --> 01:10:17
humans

01:10:12 --> 01:10:21
now there are many of these hominids

01:10:16 --> 01:10:21
but the the ones which

01:10:20 --> 01:10:24
you know people talk about lucy because

01:10:22 --> 01:10:27
that's like a skeleton from three

01:10:23 --> 01:10:31
million years ago and we know that lucy

01:10:26 --> 01:10:33
walked okay so at this stage you have

01:10:30 --> 01:10:34
that the hand is free for manipulating

01:10:32 --> 01:10:36
objects

01:10:33 --> 01:10:37
and then the ability to manipulate

01:10:35 --> 01:10:42
objects build

01:10:36 --> 01:10:45
tools and the brain size

01:10:41 --> 01:10:46
grew in this era so okay so now you have

01:10:44 --> 01:10:49
manipulation

01:10:46 --> 01:10:50
ow we don't know exactly when language

01:10:48 --> 01:10:53
arrows

01:10:49 --> 01:10:57
but after that but after that because no

01:10:52 --> 01:10:58
apes have i mean so i mean chomsky is

01:10:56 --> 01:11:00
correct in that that it is a uniquely

01:10:57 --> 01:11:03
human capability

01:10:59 --> 01:11:05
and we primates

01:11:02 --> 01:11:07
other primaries don't have that but so

01:11:04 --> 01:11:11
it developed somewhere in this era

01:11:06 --> 01:11:13
but it developed i would

01:11:10 --> 01:11:16
i mean uh argue that it probably

01:11:12 --> 01:11:19
developed after we had this stage of

01:11:15 --> 01:11:22
uh uh humans or i mean the

01:11:18 --> 01:11:26
human species already able to manipulate

01:11:21 --> 01:11:29
and a hands-free much bigger brain size

01:11:25 --> 01:11:32
and for that there's a lot of vision

01:11:28 --> 01:11:33
has already had had to have developed

01:11:31 --> 01:11:35
yeah so

01:11:32 --> 01:11:36
the sensation and the perception may be

01:11:34 --> 01:11:40
some of the cognition

01:11:36 --> 01:11:44
yeah so we we so those

01:11:39 --> 01:11:47
so so that so the world so there

01:11:43 --> 01:11:49
so so these ancestors of us

01:11:46 --> 01:11:51
you know three four million years ago

01:11:48 --> 01:11:54
they had

01:11:50 --> 01:11:56
uh they had spatial intelligence so they

01:11:53 --> 01:11:58
knew that the world consists of objects

01:11:56 --> 01:12:00
they knew that the objects were in

01:11:57 --> 01:12:04
certain relationships to each other

01:11:59 --> 01:12:06
they had observed causal

01:12:03 --> 01:12:08
interactions among objects they could

01:12:05 --> 01:12:08
move in space so they had space and time

01:12:07 --> 01:12:12
and all

01:12:08 --> 01:12:15
of that so language

01:12:11 --> 01:12:16
builds on that substrate so language has

01:12:14 --> 01:12:19
a lot of

01:12:15 --> 01:12:21
i mean i mean the all human languages

01:12:18 --> 01:12:24
have constructs which depend on

01:12:20 --> 01:12:27
a notion of space and time where did

01:12:23 --> 01:12:30
that notion of space and time come from

01:12:26 --> 01:12:31
it had to come from perception and

01:12:29 --> 01:12:33
action in the world we live in

01:12:30 --> 01:12:36
yeah what you refer to as the spatial

01:12:32 --> 01:12:39
intelligence yeah yeah

01:12:35 --> 01:12:42
to linger a little bit we mentioned

01:12:38 --> 01:12:45
touring and his uh mention of

01:12:41 --> 01:12:46
we should learn from children

01:12:44 --> 01:12:48
evertheless language is

01:12:46 --> 01:12:51
the fundamental piece of the test of

01:12:47 --> 01:12:53
intelligence that touring proposed

01:12:50 --> 01:12:55
what do you think is a good test of

01:12:52 --> 01:12:57
intelligence are you

01:12:54 --> 01:12:59
what would impress the heck out of you

01:12:56 --> 01:13:01
is it fundamentally

01:12:58 --> 01:13:03
natural language or is there something

01:13:00 --> 01:13:06
in vision

01:13:02 --> 01:13:08
i i think uh i i wouldn't i

01:13:05 --> 01:13:10
don't think we should have created a

01:13:07 --> 01:13:13
single test of intelligence

01:13:09 --> 01:13:14
so just like i don't believe in iq as a

01:13:12 --> 01:13:18
single number

01:13:13 --> 01:13:18
i think generally there can be many

01:13:17 --> 01:13:22
capabilities

01:13:18 --> 01:13:22
which are correlated perhaps

01:13:21 --> 01:13:27
o i think that there will be

01:13:24 --> 01:13:29
uh there will be accomplishments which

01:13:26 --> 01:13:30
are visual accomplishments

01:13:28 --> 01:13:34
which are

01:13:30 --> 01:13:37
uh accomplishments in manipulation or

01:13:33 --> 01:13:37
obotics and then accomplishments in

01:13:36 --> 01:13:39
language

01:13:36 --> 01:13:41
i do believe that language will be the

01:13:38 --> 01:13:43
hardest not to crack

01:13:40 --> 01:13:44
really yeah so what's what's harder to

01:13:42 --> 01:13:46
pass

01:13:43 --> 01:13:48
the spirit of the touring test or like

01:13:45 --> 01:13:51
whatever formulation will make it

01:13:47 --> 01:13:51
natural language convincingly in natural

01:13:50 --> 01:13:53
anguage

01:13:50 --> 01:13:55
like somebody you would want to have a

01:13:52 --> 01:13:58
beer with hang out and have a chat with

01:13:54 --> 01:14:00
or the general natural scene

01:13:57 --> 01:14:03
understanding

01:13:59 --> 01:14:06
you think language is the type i think

01:14:02 --> 01:14:09
i'm not a fan of the

01:14:05 --> 01:14:12
i think i think turing test that turing

01:14:08 --> 01:14:14
as he proposed the test in 1950

01:14:11 --> 01:14:15
was trying to solve a certain problem

01:14:13 --> 01:14:18
yeah imitation

01:14:14 --> 01:14:19
yeah and and i think it made a lot of

01:14:17 --> 01:14:22
sense then

01:14:18 --> 01:14:25
where we are today 70 years later

01:14:21 --> 01:14:27
i think i think we

01:14:24 --> 01:14:28
should not worry about that i mean i

01:14:26 --> 01:14:32
think the turing test is no

01:14:28 --> 01:14:35
longer the right way to uh to

01:14:31 --> 01:14:37
channel research in in ai because

01:14:34 --> 01:14:39
that it takes us down this path of this

01:14:36 --> 01:14:40
chat bot which can fool us for five

01:14:38 --> 01:14:43
minutes or whatever

01:14:39 --> 01:14:46
okay i think i would rather have a list

01:14:42 --> 01:14:50
of 10 different tasks i mean i think

01:14:45 --> 01:14:52
their tasks which their tasks in the

01:14:49 --> 01:14:54
manipulation domain tasks and navigation

01:14:51 --> 01:14:58
tasks and visual scene understanding

01:14:53 --> 01:15:00
tasks in under reading a story and

01:14:57 --> 01:15:01
answering questions based on that i mean

01:14:59 --> 01:15:05
so my favorite

01:15:00 --> 01:15:06
language understanding task would be

01:15:04 --> 01:15:09
you know reading a novel and being able

01:15:05 --> 01:15:13
to answer arbitrary questions from it

01:15:08 --> 01:15:15
okay right i i think that to me

01:15:12 --> 01:15:16
uh and this is not an exhausted list by

01:15:14 --> 01:15:19
any means

01:15:15 --> 01:15:19
o i would uh i think that that's what

01:15:18 --> 01:15:22
we

01:15:18 --> 01:15:23
where we need to be going to and each of

01:15:21 --> 01:15:25
these

01:15:22 --> 01:15:26
on each of these axes there's a fair

01:15:24 --> 01:15:29
amount of work to be done

01:15:25 --> 01:15:31
so on the visual understanding side in

01:15:28 --> 01:15:32
this intelligence olympics that we've

01:15:30 --> 01:15:36
set up yeah what's a good

01:15:32 --> 01:15:40
test for one of many

01:15:35 --> 01:15:42
of visual scene understanding

01:15:39 --> 01:15:43
uh do you think such benchmarks exist

01:15:41 --> 01:15:45
sorry to interrupt no there

01:15:42 --> 01:15:46
aren't any i i think i think

01:15:44 --> 01:15:49
essentially

01:15:45 --> 01:15:52
to me a really uh good

01:15:48 --> 01:15:54
aid to the blind so suppose there was a

01:15:51 --> 01:15:57
blind person

01:15:53 --> 01:16:00
and i needed to assist the blind person

01:15:56 --> 01:16:02
so ultimately like we said vision that

01:15:59 --> 01:16:06
aids in the action

01:16:01 --> 01:16:09
in the survival in this world yeah

01:16:05 --> 01:16:12
maybe in a simulated world

01:16:08 --> 01:16:14
maybe easier to to measure performance

01:16:11 --> 01:16:15
in a simulated world

01:16:13 --> 01:16:18
what we are ultimately after is

01:16:14 --> 01:16:22
performance in the real world

01:16:17 --> 01:16:24
so david hilbert in 1900 proposed 23

01:16:21 --> 01:16:25
open problems in mathematics some of

01:16:23 --> 01:16:27
which are still unsolved

01:16:24 --> 01:16:30
most important famous of which is

01:16:26 --> 01:16:31
probably the riemann hypothesis

01:16:29 --> 01:16:34
you've thought about and presented about

01:16:30 --> 01:16:37
he hilbert problems of computer vision

01:16:33 --> 01:16:38
so let me ask what to you today

01:16:36 --> 01:16:41
i don't know when the last year you

01:16:37 --> 01:16:43
presented that 2015 but versions of it

01:16:40 --> 01:16:46
yeah you're kind of the the face and the

01:16:42 --> 01:16:49
spokesperson for computer vision

01:16:45 --> 01:16:50
yeah it's your job to just to state what

01:16:48 --> 01:16:52
he problem

01:16:49 --> 01:16:53
the open problems are for the field so

01:16:51 --> 01:16:55
what today

01:16:52 --> 01:16:57
are the hilbert problems of computer

01:16:54 --> 01:17:00
vision do you think

01:16:56 --> 01:17:01
let me pick pick one to which i regard

01:16:59 --> 01:17:05
as

01:17:00 --> 01:17:07
uh clearly clearly unsolved

01:17:04 --> 01:17:09
which is what i would call long-form

01:17:06 --> 01:17:12
video understanding

01:17:08 --> 01:17:13
so so we have a video clip and we want

01:17:11 --> 01:17:16
o

01:17:12 --> 01:17:19
understand the behavior

01:17:15 --> 01:17:22
in there in terms of

01:17:18 --> 01:17:26
agents their goals

01:17:21 --> 01:17:30
intentionality and uh

01:17:25 --> 01:17:33
make predictions about what might happen

01:17:29 --> 01:17:36
you know so so that that kind of

01:17:32 --> 01:17:37
understanding which goes away from

01:17:35 --> 01:17:40
atomic visual action so

01:17:36 --> 01:17:42
in the short range the question is

01:17:39 --> 01:17:44
are you sitting are you standing are you

01:17:41 --> 01:17:47
catching a ball

01:17:43 --> 01:17:49
right that we can do now or we even if

01:17:46 --> 01:17:51
we can't do it fully accurately

01:17:48 --> 01:17:54
if we can do it at 50 percent maybe next

01:17:50 --> 01:17:57
year we'll do it at 65 and so forth

01:17:53 --> 01:17:58
but i think the long range video

01:17:56 --> 01:18:01
understanding

01:17:57 --> 01:18:04
i don't think we we we can do today well

01:18:00 --> 01:18:06
today and that means so long and it

01:18:03 --> 01:18:07
blends into cognition that's the reason

01:18:05 --> 01:18:09
why it's challenging

01:18:06 --> 01:18:11
and so you have to track you have to

01:18:08 --> 01:18:12
understand the entities

01:18:10 --> 01:18:14
you have to understand the sds you have

01:18:11 --> 01:18:16
to track them

01:18:13 --> 01:18:17
and you have to have some kind of model

01:18:15 --> 01:18:20
of their behavior

01:18:16 --> 01:18:21
correct and their and if their behavior

01:18:19 --> 01:18:22
might be

01:18:20 --> 01:18:24
these are these are agents so they are

01:18:21 --> 01:18:27
not just like passive

01:18:23 --> 01:18:29
objects but the agent so therefore we

01:18:26 --> 01:18:31
they might they would exhibit gold

01:18:28 --> 01:18:34
irected behavior

01:18:30 --> 01:18:34
okay so this is this is one area then i

01:18:33 --> 01:18:37
will talk about

01:18:33 --> 01:18:39
say understanding the world in 3d now

01:18:36 --> 01:18:42
this may seem

01:18:38 --> 01:18:44
paradoxical because in a way we have

01:18:41 --> 01:18:44
been able to do 3d understanding even

01:18:43 --> 01:18:47
like

01:18:43 --> 01:18:50
30 years ago right but i don't think we

01:18:46 --> 01:18:52
currently have the richness of

01:18:49 --> 01:18:54
3d understanding in our computer vision

01:18:51 --> 01:18:57
system that we would like

01:18:53 --> 01:18:58
because ah so let me elaborate on that a

01:18:56 --> 01:19:01
bit

01:18:57 --> 01:19:02
so currently we have two kinds of

01:19:00 --> 01:19:04
techniques which are

01:19:02 --> 01:19:06
not fully unified so there are the kinds

01:19:03 --> 01:19:08
of techniques from

01:19:05 --> 01:19:10
ulti-view geometry that you have

01:19:07 --> 01:19:10
multiple pictures of a scene and you do

01:19:09 --> 01:19:13
a

01:19:09 --> 01:19:15
reconstruction using stereoscopic vision

01:19:12 --> 01:19:19
or structure from motion

01:19:14 --> 01:19:20
but these techniques do not

01:19:18 --> 01:19:22
hey totally fail if you just have a

01:19:19 --> 01:19:27
single view because they are relying

01:19:22 --> 01:19:29
on this this multiple geometry

01:19:26 --> 01:19:30
okay then we have some techniques that

01:19:28 --> 01:19:32
we have developed in the computer vision

01:19:29 --> 01:19:35
community which try to

01:19:31 --> 01:19:36
guess 3d from single views and these

01:19:34 --> 01:19:40
techniques are based

01:19:36 --> 01:19:42
on on supervised learning

01:19:39 --> 01:19:43
and they are based on having a training

01:19:41 --> 01:19:46
time

01:19:42 --> 01:19:48
3d models of objects available

01:19:45 --> 01:19:50
and this is completely unnatural

01:19:47 --> 01:19:53
supervision

01:19:49 --> 01:19:55
right that's not cad models are not

01:19:52 --> 01:19:57
injected into your brain

01:19:54 --> 01:19:59
okay so what would i like what i would

01:19:56 --> 01:20:02
like would be a kind of

01:19:58 --> 01:20:07
uh learning as you

01:20:02 --> 01:20:11
move around the world uh notion of 3d

01:20:06 --> 01:20:14
so so we we have our

01:20:10 --> 01:20:18
succession of visual experiences

01:20:13 --> 01:20:20
and from those we

01:20:17 --> 01:20:22
so in as part of that i might see a

01:20:19 --> 01:20:24
chair from different viewpoints

01:20:21 --> 01:20:25
or a table from viewpoint different

01:20:23 --> 01:20:29
viewpoints and so on

01:20:24 --> 01:20:32
ow as part that enables me to build

01:20:28 --> 01:20:34
some internal representation and then

01:20:31 --> 01:20:37
ext time i just see

01:20:33 --> 01:20:38
a single photograph and it may not even

01:20:36 --> 01:20:39
be of that chair it's of some other

01:20:37 --> 01:20:42
chair

01:20:38 --> 01:20:42
and i have a guess of what its 3d shape

01:20:41 --> 01:20:45
is like

01:20:42 --> 01:20:46
so you're almost learning the cad model

01:20:44 --> 01:20:48
kind of

01:20:45 --> 01:20:50
yeah implicitly i mean implicitly i mean

01:20:47 --> 01:20:51
the cad model need not be in the same

01:20:49 --> 01:20:53
form as

01:20:50 --> 01:20:54
used by computer graphics hidden in the

01:20:52 --> 01:20:56
representation

01:20:53 --> 01:20:58
it's hidden in the representation the

01:20:55 --> 01:21:02
ability to predict new views

01:20:58 --> 01:21:05
and what i would see if i

01:21:01 --> 01:21:05
went to such and such position by the

01:21:04 --> 01:21:08
way and

01:21:04 --> 01:21:10
on a small tangent on that are you

01:21:07 --> 01:21:14
ncomforta are you

01:21:09 --> 01:21:16
okay or comfortable with

01:21:13 --> 01:21:18
neural networks that do achieve visual

01:21:15 --> 01:21:20
understanding that do for example

01:21:17 --> 01:21:22
achieve this kind of 3d understanding

01:21:19 --> 01:21:23
and you don't know how they you don't

01:21:21 --> 01:21:26
know

01:21:22 --> 01:21:27
the rep you're not able to interest but

01:21:25 --> 01:21:30
you're not able to

01:21:26 --> 01:21:31
visualize or understand or interact with

01:21:29 --> 01:21:34
e representation

01:21:30 --> 01:21:36
so the fact that they're not or may not

01:21:33 --> 01:21:40
be explainable

01:21:35 --> 01:21:40
yeah i think that's fine i to me that is

01:21:39 --> 01:21:45
uh

01:21:39 --> 01:21:47
so so let me put some caveats on that

01:21:44 --> 01:21:49
so it depends on the setting so first of

01:21:46 --> 01:21:52
all i think

01:21:48 --> 01:21:56
uh uh the

01:21:52 --> 01:21:57
uh humans are not explainable

01:21:55 --> 01:22:00
so yeah that's a really good point yeah

01:21:56 --> 01:22:01
so we we

01:21:59 --> 01:22:03
one human to another human is not fully

01:22:00 --> 01:22:05
explainable

01:22:02 --> 01:22:07
i think there are settings where

01:22:04 --> 01:22:10
xplainability matters

01:22:06 --> 01:22:12
and these might these are these might be

01:22:09 --> 01:22:14
for example questions on medical

01:22:11 --> 01:22:17
diagnosis

01:22:13 --> 01:22:19
o i'm in a setting where

01:22:16 --> 01:22:22
maybe the doctor maybe a computer

01:22:18 --> 01:22:24
program has made a certain diagnosis

01:22:21 --> 01:22:26
and then depending on the diagnosis

01:22:23 --> 01:22:28
perhaps i should have treatment day or

01:22:25 --> 01:22:32
treatment b

01:22:27 --> 01:22:36
right so now is the computer programs

01:22:31 --> 01:22:39
diagnosis based on data

01:22:35 --> 01:22:41
which was data collected of

01:22:38 --> 01:22:43
or american males who are in their 30s

01:22:40 --> 01:22:46
and 40s

01:22:42 --> 01:22:48
and maybe not so relevant to me

01:22:45 --> 01:22:50
maybe it is relevant you know et cetera

01:22:47 --> 01:22:52
and we i mean in

01:22:49 --> 01:22:54
medical diagnosis we have major issues

01:22:51 --> 01:22:56
to do with the reference class

01:22:53 --> 01:22:59
o we may have acquired statistics from

01:22:55 --> 01:23:01
one group of people and applying it to

01:22:58 --> 01:23:03
a different group of people who may not

01:23:00 --> 01:23:06
share all the same characteristics

01:23:02 --> 01:23:08
the data might have there might be error

01:23:05 --> 01:23:10
bars in the prediction

01:23:07 --> 01:23:11
so that prediction should really be

01:23:09 --> 01:23:15
taken with

01:23:10 --> 01:23:18
a huge grain of salt and but this has an

01:23:14 --> 01:23:21
impact on what treatments

01:23:17 --> 01:23:23
hould be picked right so

01:23:20 --> 01:23:25
there are settings where i want to

01:23:22 --> 01:23:28
know more than just

01:23:24 --> 01:23:30
his is the answer but what i

01:23:28 --> 01:23:32
acknowledge is that

01:23:29 --> 01:23:35
so so so so i in that sense

01:23:32 --> 01:23:35
xplainability and interpretability may

01:23:34 --> 01:23:38
matter

01:23:34 --> 01:23:40
it's about giving error bounds and a

01:23:37 --> 01:23:42
better sense of the quality of the

01:23:39 --> 01:23:45
decision

01:23:41 --> 01:23:48
where what i where i'm willing to

01:23:44 --> 01:23:50
sacrifice interpretability is that

01:23:47 --> 01:23:53
i believe that there can be systems

01:23:49 --> 01:23:54
which can be highly performant but which

01:23:52 --> 01:23:57
are internally

01:23:53 --> 01:23:59
black boxes and and that seems to be

01:23:56 --> 01:24:02
words headed some of the best performing

01:23:58 --> 01:24:02
systems are essentially black boxes yeah

01:24:01 --> 01:24:05
uh

01:24:02 --> 01:24:06
fundamentally by their construction you

01:24:04 --> 01:24:08
and i are

01:24:05 --> 01:24:11
black boxes to each other yeah so the

01:24:07 --> 01:24:14
nice thing about the black boxes we are

01:24:10 --> 01:24:17
is so we ourselves are black boxes

01:24:13 --> 01:24:18
but we're also those of us who are

01:24:16 --> 01:24:21
charming

01:24:17 --> 01:24:22
are able to convince others like explain

01:24:20 --> 01:24:24
the black

01:24:21 --> 01:24:26
what's going on inside the black box

01:24:23 --> 01:24:28
with narratives with stories

01:24:25 --> 01:24:29
o in some sense uh neural networks

01:24:27 --> 01:24:32
don't have to actually

01:24:28 --> 01:24:34
explain what's going on inside they just

01:24:31 --> 01:24:35
have to come up with stories real or

01:24:33 --> 01:24:38
fake

01:24:34 --> 01:24:39
that convince you that they know what's

01:24:37 --> 01:24:41
going on

01:24:38 --> 01:24:42
and i'm sure we can do that we can

01:24:40 --> 01:24:44
create those nearer

01:24:41 --> 01:24:47
those stories neural networks can create

01:24:43 --> 01:24:47
those stories yeah

01:24:47 --> 01:24:53
and the transformer will be involved do

01:24:50 --> 01:24:55
you think we will ever

01:24:52 --> 01:24:57
build a system of human level or

01:24:54 --> 01:24:59
superhuman level intelligence

01:24:56 --> 01:25:01
we've kind of defined what it takes to

01:24:58 --> 01:25:02
try to approach that but do you think

01:25:00 --> 01:25:03
we'll

01:25:01 --> 01:25:05
do you think that's within our reach the

01:25:02 --> 01:25:07
thing that we thought we could do

01:25:04 --> 01:25:09
what touring thought actually we could

01:25:06 --> 01:25:11
o by a year 2000

01:25:08 --> 01:25:12
right what do you think we'll ever be

01:25:10 --> 01:25:13
able to do so

01:25:11 --> 01:25:15
i think there are two answers here one

01:25:12 --> 01:25:18
question one answer is

01:25:14 --> 01:25:22
in principle can we do this at some time

01:25:17 --> 01:25:24
and my answer is yes the second

01:25:21 --> 01:25:26
answer is a pragmatic one do you think

01:25:23 --> 01:25:27
we will be able to do it in the next 20

01:25:25 --> 01:25:31
years

01:25:26 --> 01:25:34
or whatever and to that man says no

01:25:30 --> 01:25:38
so and of course that's a wild guess i i

01:25:33 --> 01:25:39
think that

01:25:37 --> 01:25:41
you know donald trump's felt is not a

01:25:38 --> 01:25:43
favorite person of mine but

01:25:40 --> 01:25:44
one of his lines is very good which is

01:25:42 --> 01:25:47
about

01:25:43 --> 01:25:49
known knowns known unknowns and unknown

01:25:46 --> 01:25:52
s

01:25:48 --> 01:25:54
o in the business we are in

01:25:51 --> 01:25:55
there are known unknowns and we have

01:25:53 --> 01:25:58
unknown unknowns

01:25:54 --> 01:26:02
o i think with respect to

01:25:58 --> 01:26:05
a lot of what the case in

01:26:01 --> 01:26:08
vision and robotics i feel like

01:26:04 --> 01:26:10
we have known unknowns so i have a sense

01:26:07 --> 01:26:12
of where we need to go

01:26:09 --> 01:26:14
and what the problems that need to be

01:26:11 --> 01:26:18
solved are

01:26:13 --> 01:26:21
i feel with respect to natural language

01:26:17 --> 01:26:23
understanding and high level cognition

01:26:20 --> 01:26:24
it's not just known unknowns but also

01:26:22 --> 01:26:27
unknown unknowns

01:26:24 --> 01:26:28
o it is very difficult to put any kind

01:26:26 --> 01:26:32
of uh

01:26:27 --> 01:26:32
time frame to that uh do you think some

01:26:31 --> 01:26:36
of the

01:26:31 --> 01:26:38
unknown unknowns might be positive in

01:26:35 --> 01:26:39
that they'll surprise us and make the

01:26:37 --> 01:26:41
job much easier

01:26:38 --> 01:26:43
so fundamental breakthroughs i think

01:26:40 --> 01:26:43
that is possible because certainly i

01:26:42 --> 01:26:46
have

01:26:42 --> 01:26:50
been very positively surprised by how

01:26:45 --> 01:26:51
effective these deep learning systems

01:26:49 --> 01:26:55
have been because

01:26:50 --> 01:26:55
i certainly would not have believed that

01:26:54 --> 01:27:00
in

01:26:54 --> 01:27:00
2010 i think

01:27:00 --> 01:27:04
what we knew from the mathematical

01:27:02 --> 01:27:07
theory

01:27:03 --> 01:27:09
was that convex optimization works when

01:27:06 --> 01:27:11
there's a single global optima then

01:27:08 --> 01:27:13
these gradient descent techniques would

01:27:10 --> 01:27:16
work now these are

01:27:12 --> 01:27:16
non-linear systems with non-convex

01:27:15 --> 01:27:18
systems

01:27:15 --> 01:27:20
huge number of variables so

01:27:17 --> 01:27:24
ver-parametrized over-parameterized

01:27:19 --> 01:27:25
and the people who used to play with

01:27:23 --> 01:27:27
em a lot

01:27:24 --> 01:27:28
he ones who are totally immersed in the

01:27:26 --> 01:27:32
lore and the

01:27:27 --> 01:27:35
black magic they knew that they worked

01:27:31 --> 01:27:38
uh well even though they were really

01:27:34 --> 01:27:38
i thought like everybody no the claim

01:27:37 --> 01:27:41
that

01:27:37 --> 01:27:42
i hear from my friends like yan lacoon

01:27:40 --> 01:27:45
and so forth

01:27:41 --> 01:27:46
now yeah that they feel that they were

01:27:44 --> 01:27:48
comfortable with them

01:27:45 --> 01:27:49
well he says but the community as a

01:27:47 --> 01:27:53
whole

01:27:48 --> 01:27:56
was certainly not and i think uh

01:27:52 --> 01:27:59
we were to me that was the surprise that

01:27:55 --> 01:28:02
hey actually worked robustly

01:27:58 --> 01:28:05
for a wide range of problems from a wide

01:28:01 --> 01:28:08
range of initializations and so on

01:28:04 --> 01:28:10
and uh so that was that that was

01:28:07 --> 01:28:14
certainly

01:28:09 --> 01:28:16
more rapid progress than uh we expected

01:28:13 --> 01:28:17
but then there are certainly lots of

01:28:15 --> 01:28:20
times in fact

01:28:16 --> 01:28:21
most of the history and fear is when we

01:28:19 --> 01:28:23
have made less pro

01:28:20 --> 01:28:24
gress at a slower rate than we

01:28:22 --> 01:28:28
xpected

01:28:23 --> 01:28:32
so uh we just keep going

01:28:27 --> 01:28:36
i think uh what i regard as

01:28:31 --> 01:28:39
uh really unwarranted are these

01:28:35 --> 01:28:41
fears of uh you know agi in 10

01:28:38 --> 01:28:43
years and 20 years and

01:28:40 --> 01:28:46
that kind of stuff because that's based

01:28:42 --> 01:28:48
on completely unrealistic models of how

01:28:45 --> 01:28:52
rapidly we will make progress in this

01:28:47 --> 01:28:54
field so i agree with you but i've also

01:28:51 --> 01:28:56
gotten a chance to interact with very

01:28:54 --> 01:28:58
smart people who really worry about the

01:28:55 --> 01:29:00
xistential threats of ai

01:28:57 --> 01:29:02
and i as an open-minded person and sort

01:29:00 --> 01:29:07
of taking

01:29:01 --> 01:29:11
and taking it in do you think

01:29:06 --> 01:29:12
if ai systems in some way the unknown

01:29:10 --> 01:29:14
s

01:29:11 --> 01:29:15
not super intelligent ai but in ways we

01:29:13 --> 01:29:18
don't quite understand

01:29:14 --> 01:29:21
uh the nature of superintelligence will

01:29:17 --> 01:29:22
have a detrimental effect on society

01:29:20 --> 01:29:24
do you think this is something we should

01:29:21 --> 01:29:27
be worried about

01:29:24 --> 01:29:28
or we need to first allow the unknown

01:29:26 --> 01:29:31
our nose to become

01:29:27 --> 01:29:33
known unknowns i think we need to be

01:29:30 --> 01:29:36
worried about ai today

01:29:32 --> 01:29:38
i think that it is not just a worry we

01:29:35 --> 01:29:41
need to have when we get that

01:29:37 --> 01:29:43
agi i think that ai is being used in

01:29:40 --> 01:29:46
many systems today

01:29:42 --> 01:29:47
and there might be settings for example

01:29:45 --> 01:29:50
when it causes

01:29:46 --> 01:29:53
biases or decisions which could

01:29:49 --> 01:29:54
be harmful i mean decisions which could

01:29:52 --> 01:29:56
be unfair to some people

01:29:53 --> 01:29:58
or it could be a self-driving cars which

01:29:55 --> 01:30:02
kills a pedestrian

01:29:57 --> 01:30:04
so ai systems are being deployed today

01:30:01 --> 01:30:05
right and they're being deployed in many

01:30:03 --> 01:30:07
different settings maybe in medical

01:30:04 --> 01:30:08
diagnosis maybe in a self-driving car

01:30:06 --> 01:30:10
maybe

01:30:07 --> 01:30:11
in selecting applicants for an interview

01:30:09 --> 01:30:15
so

01:30:10 --> 01:30:18
i would argue that when these systems

01:30:14 --> 01:30:20
make mistakes there are consequences

01:30:17 --> 01:30:23
and we are in a certain sense

01:30:19 --> 01:30:25
responsible for those consequences

01:30:22 --> 01:30:27
o i would argue that this is a

01:30:24 --> 01:30:31
continuous effort

01:30:26 --> 01:30:33
it is we and and this is something that

01:30:30 --> 01:30:34
in a way is not so surprising it's about

01:30:32 --> 01:30:36
all

01:30:33 --> 01:30:38
engineering and scientific progress

01:30:35 --> 01:30:40
which uh

01:30:37 --> 01:30:42
great power comes great responsibility

01:30:39 --> 01:30:44
so as these systems are deployed we have

01:30:42 --> 01:30:46
to worry about them and

01:30:43 --> 01:30:47
it's a continuous problem i don't think

01:30:45 --> 01:30:50
of it as something

01:30:46 --> 01:30:52
which will suddenly happen on some day

01:30:49 --> 01:30:54
in 2079

01:30:51 --> 01:30:55
for which i need to design some clever

01:30:53 --> 01:30:57
trick

01:30:54 --> 01:30:59
i'm saying that these problems exist

01:30:56 --> 01:31:01
oday yeah

01:30:58 --> 01:31:03
and we need to be continuously on the

01:31:00 --> 01:31:07
lookout for

01:31:02 --> 01:31:09
worrying about safety biases risks

01:31:06 --> 01:31:10
right i mean the self-driving car kills

01:31:08 --> 01:31:14
are pedestrian

01:31:09 --> 01:31:17
d they have right i mean the this uber

01:31:13 --> 01:31:18
incident in arizona yeah right it has

01:31:16 --> 01:31:21
happened

01:31:17 --> 01:31:23
right this is not about agi it in fact

01:31:20 --> 01:31:25
it's about a very dumb intelligence

01:31:22 --> 01:31:26
which is also killing people the worry

01:31:24 --> 01:31:29
people have with agi

01:31:25 --> 01:31:30
s the scale and i but i think you're

01:31:28 --> 01:31:33
100

01:31:29 --> 01:31:34
right is like the thing that worries me

01:31:32 --> 01:31:36
about ai

01:31:33 --> 01:31:37
today and it's happening in a huge

01:31:35 --> 01:31:39
skills recommend

01:31:36 --> 01:31:41
er systems recommendation

01:31:38 --> 01:31:44
systems so if you look at

01:31:40 --> 01:31:48
witter or facebook or youtube their

01:31:43 --> 01:31:49
controlling the ideas that we have

01:31:47 --> 01:31:51
access to

01:31:48 --> 01:31:53
the news and so on and that's a

01:31:50 --> 01:31:56
fundamentally machine learning algorithm

01:31:52 --> 01:31:58
behind each of these recommendations

01:31:55 --> 01:32:00
and they i mean my life would not be the

01:31:58 --> 01:32:02
same without

01:31:59 --> 01:32:03
hese sources of information i'm a

01:32:01 --> 01:32:06
totally new human being and

01:32:02 --> 01:32:07
the ideas that i know are very much

01:32:05 --> 01:32:08
because of the internet

01:32:06 --> 01:32:11
because of the algorithm that i

01:32:08 --> 01:32:13
recommend those ideas and so

01:32:10 --> 01:32:15
as they get smarter and smarter i mean

01:32:12 --> 01:32:18
that is the agi

01:32:14 --> 01:32:18
yeah is that's the the algorithm that's

01:32:17 --> 01:32:22
recommending

01:32:18 --> 01:32:25
the next youtube video you should watch

01:32:21 --> 01:32:26
as control of millions of billions of

01:32:24 --> 01:32:29
people

01:32:25 --> 01:32:30
that that algorithm is already super

01:32:28 --> 01:32:33
intelligent and

01:32:29 --> 01:32:34
has complete control of the population

01:32:32 --> 01:32:36
ot a complete but

01:32:33 --> 01:32:38
very strong control for now we can turn

01:32:36 --> 01:32:40
off youtube we can just

01:32:37 --> 01:32:42
go have a normal life outside of that

01:32:39 --> 01:32:46
but the more and more that

01:32:41 --> 01:32:47
gets into our life it's that algorithm

01:32:45 --> 01:32:48
we start

01:32:46 --> 01:32:49
depending on it in the different

01:32:47 --> 01:32:50
companies that are working on the

01:32:48 --> 01:32:53
algorithm so i think it's

01:32:49 --> 01:32:53
you're right it's already it's already

01:32:52 --> 01:32:56
there

01:32:52 --> 01:32:57
and youtube in particular is using

01:32:55 --> 01:33:00
computer vision

01:32:56 --> 01:33:03
doing their hardest to try to understand

01:32:59 --> 01:33:05
the content of videos so they could

01:33:02 --> 01:33:07
be able to connect videos with the

01:33:04 --> 01:33:10
people who would benefit from those

01:33:06 --> 01:33:12
videos the most and so that development

01:33:09 --> 01:33:14
could go in a bunch of different

01:33:11 --> 01:33:15
directions some of which might be

01:33:13 --> 01:33:18
harmful

01:33:14 --> 01:33:20
so yeah you're right the the the threats

01:33:17 --> 01:33:21
of ai are here already we should be

01:33:19 --> 01:33:25
thinking about them

01:33:20 --> 01:33:28
on a philosophical notion

01:33:24 --> 01:33:30
if you could personal perhaps

01:33:27 --> 01:33:32
if you could relive a moment in your

01:33:29 --> 01:33:35
life outside of family

01:33:31 --> 01:33:38
because it made you truly happy or was a

01:33:34 --> 01:33:39
profound moment that impacted the

01:33:37 --> 01:33:42
direction of your life

01:33:38 --> 01:33:42
what would you go to

01:33:43 --> 01:33:50
i don't think of single moments but i

01:33:46 --> 01:33:53
look over the long haul

01:33:49 --> 01:33:57
i feel that i've been very lucky because

01:33:52 --> 01:34:01
i feel that i think that in

01:33:56 --> 01:34:03
scientific research a lot of it is about

01:34:00 --> 01:34:04
being at the right place at the right

01:34:02 --> 01:34:07
ime

01:34:03 --> 01:34:09
and you can you can work on problems at

01:34:06 --> 01:34:12
a time when

01:34:08 --> 01:34:12
they're just too premature you know you

01:34:11 --> 01:34:15
butt your head

01:34:11 --> 01:34:17
against them and and nothing happens

01:34:14 --> 01:34:19
because it's

01:34:16 --> 01:34:21
the prerequisites for success are not

01:34:18 --> 01:34:23
here and then there are times when you

01:34:20 --> 01:34:27
are in a field which is all

01:34:22 --> 01:34:31
pretty mature and you can only

01:34:26 --> 01:34:33
solve curricules upon colloquius i've

01:34:30 --> 01:34:34
been lucky to have been in this field

01:34:32 --> 01:34:37
which

01:34:33 --> 01:34:39
for 34 years 35 well actually 34 years

01:34:36 --> 01:34:42
as a professor at berkeley so

01:34:38 --> 01:34:45
longer than that uh which

01:34:41 --> 01:34:49
when i started in it was just

01:34:44 --> 01:34:52
like some little crazy absolutely

01:34:48 --> 01:34:54
useless field which couldn't really do

01:34:52 --> 01:34:57
anything

01:34:53 --> 01:35:00
to a time when it's really really

01:34:56 --> 01:35:01
solving a lot of practical problems has

01:34:59 --> 01:35:02
a lot

01:35:00 --> 01:35:05
has offered a lot of tools for

01:35:01 --> 01:35:06
scientific research

01:35:04 --> 01:35:08
right because computer vision is

01:35:05 --> 01:35:11
impactful for

01:35:07 --> 01:35:12
images in biology or astronomy and and

01:35:10 --> 01:35:15
so on and so forth

01:35:11 --> 01:35:17
and we have so we have made great

01:35:14 --> 01:35:20
scientific progress which has had

01:35:16 --> 01:35:22
real practical impact in the world and i

01:35:19 --> 01:35:27
feel lucky that

01:35:21 --> 01:35:30
i i got in at a time when the field was

01:35:26 --> 01:35:34
very young and at a time when it is

01:35:29 --> 01:35:36
it's now mature but not fully mature

01:35:33 --> 01:35:38
it's mature but not

01:35:35 --> 01:35:41
done i mean it's really in still in a in

01:35:38 --> 01:35:42
a productive phase yes

01:35:40 --> 01:35:44
yeah yeah i think people 500 years from

01:35:41 --> 01:35:45
now would laugh are you calling this

01:35:43 --> 01:35:48
field mature

01:35:44 --> 01:35:49
yeah that is very possible yeah so but

01:35:47 --> 01:35:52
you're also

01:35:48 --> 01:35:52
lest i forget to mention you've also

01:35:51 --> 01:35:55
mentored

01:35:51 --> 01:35:57
some of the biggest names of computer

01:35:54 --> 01:36:00
vision computer science and ai

01:35:56 --> 01:36:02
today uh there's so many questions i

01:36:00 --> 01:36:05
could ask but really is

01:36:01 --> 01:36:06
what what is it how did you do it what

01:36:04 --> 01:36:08
does it take to be

01:36:05 --> 01:36:11
a good mentor what does it take to be a

01:36:07 --> 01:36:13
good guide

01:36:10 --> 01:36:15
yeah i i think what i feel i've been

01:36:12 --> 01:36:18
lucky to have

01:36:14 --> 01:36:20
had very very smart and hardworking and

01:36:17 --> 01:36:24
creative students i think

01:36:19 --> 01:36:26
some part of the credit just belongs to

01:36:23 --> 01:36:28
being at berkeley

01:36:25 --> 01:36:29
i think those of us who are at top

01:36:27 --> 01:36:32
universities

01:36:28 --> 01:36:34
are blessed because we have

01:36:31 --> 01:36:35
ry very smart and capable students

01:36:33 --> 01:36:38
coming on

01:36:34 --> 01:36:41
knocking on our door so so i have to be

01:36:37 --> 01:36:43
humble enough to acknowledge that

01:36:40 --> 01:36:44
but what have i added i think i have

01:36:42 --> 01:36:48
added something

01:36:43 --> 01:36:51
what i have added is uh i think

01:36:47 --> 01:36:55
what i've always tried to teach them is

01:36:50 --> 01:37:00
a sense of picking the right problems

01:36:54 --> 01:37:00
o i think that in science in the short

01:36:59 --> 01:37:04
run

01:37:00 --> 01:37:05
success is always based on technical

01:37:03 --> 01:37:08
competence

01:37:04 --> 01:37:09
your you know you're quick with math or

01:37:07 --> 01:37:11
you are

01:37:08 --> 01:37:13
whatever i mean there's certain

01:37:10 --> 01:37:14
technical capabilities which make for

01:37:12 --> 01:37:17
short-range

01:37:14 --> 01:37:19
progress long-range progress is really

01:37:16 --> 01:37:21
determined

01:37:18 --> 01:37:23
by asking the right questions and

01:37:20 --> 01:37:26
focusing on the right problems

01:37:22 --> 01:37:29
and i feel that

01:37:26 --> 01:37:30
what i've been able to bring to the

01:37:28 --> 01:37:33
table in terms of

01:37:29 --> 01:37:36
advising these students is

01:37:32 --> 01:37:37
ome sense of taste of what are good

01:37:35 --> 01:37:39
problems

01:37:36 --> 01:37:41
what are problems that are worth

01:37:38 --> 01:37:43
attacking now as opposed to waiting

01:37:40 --> 01:37:45
10 years what's a good problem if you

01:37:42 --> 01:37:46
could summarize

01:37:44 --> 01:37:48
if is that possible to even summarize

01:37:45 --> 01:37:49
like what what's your sense of a good

01:37:47 --> 01:37:52
problem

01:37:48 --> 01:37:54
i i think uh i think uh i have a sense

01:37:51 --> 01:37:57
of what is a good problem which is

01:37:53 --> 01:37:59
uh there is a british scientist uh

01:37:56 --> 01:38:01
in fact he won a nobel prize peter

01:37:58 --> 01:38:05
medover who has a

01:38:00 --> 01:38:06
book on on this and uh basically he

01:38:04 --> 01:38:07
calls

01:38:05 --> 01:38:09
it the research is the art of the

01:38:06 --> 01:38:12
soluble

01:38:08 --> 01:38:14
so we need to sort of find problems

01:38:11 --> 01:38:17
which are

01:38:13 --> 01:38:19
not yet solved but which are

01:38:16 --> 01:38:22
approachable

01:38:18 --> 01:38:24
and he sort of refers to this

01:38:21 --> 01:38:26
ense that there is this problem which

01:38:23 --> 01:38:28
isn't quite solved yet but it has a soft

01:38:25 --> 01:38:30
underbelly

01:38:27 --> 01:38:31
there is some place where you can you

01:38:30 --> 01:38:35
know

01:38:30 --> 01:38:38
spear the beast yes and having that

01:38:34 --> 01:38:40
intuition that this problem is ripe is

01:38:37 --> 01:38:41
a good thing because otherwise you

01:38:39 --> 01:38:43
can just beat your head and not make

01:38:40 --> 01:38:46
progress

01:38:42 --> 01:38:47
o i think that is that is important so

01:38:45 --> 01:38:49
if

01:38:46 --> 01:38:50
i have that and if i can convey that

01:38:48 --> 01:38:53
o students

01:38:49 --> 01:38:54
it's not just that they do great

01:38:52 --> 01:38:56
research while they're working with me

01:38:54 --> 01:38:58
but that they continue to do great

01:38:55 --> 01:39:00
research so in a sense i'm proud of my

01:38:57 --> 01:39:01
students

01:38:59 --> 01:39:03
and their achievements and their great

01:39:00 --> 01:39:05
research even

01:39:02 --> 01:39:06
20 years after they've seized being my

01:39:04 --> 01:39:08
student

01:39:05 --> 01:39:10
so it's in part developing helping them

01:39:07 --> 01:39:13
develop that sense that a problem

01:39:09 --> 01:39:14
is not yet solved but it's solvable

01:39:12 --> 01:39:17
correct

01:39:13 --> 01:39:18
he other thing which i have which i i

01:39:16 --> 01:39:21
think i bring to the table

01:39:17 --> 01:39:25
uh is i is a certain

01:39:20 --> 01:39:27
tellectual breadth i i've

01:39:24 --> 01:39:28
spent a fair amount of time studying

01:39:26 --> 01:39:30
psychology

01:39:27 --> 01:39:32
neuroscience relevant areas of applied

01:39:29 --> 01:39:35
math and so forth

01:39:31 --> 01:39:36
so i can probably help them see some

01:39:34 --> 01:39:40
connections

01:39:35 --> 01:39:40
to disparate things which

01:39:39 --> 01:39:45
they might not have otherwise so

01:39:42 --> 01:39:47
the smart students coming into

01:39:44 --> 01:39:50
berkeley can be

01:39:46 --> 01:39:52
very uh deep in the sense they can think

01:39:49 --> 01:39:56
very deeply meaning very

01:39:51 --> 01:39:59
hard down one particular path but

01:39:55 --> 01:40:00
where i could help them is the the

01:39:58 --> 01:40:04
shallow breadth

01:39:59 --> 01:40:07
but uh whereas they would have the

01:40:03 --> 01:40:10
narrow depth and uh but

01:40:06 --> 01:40:13
hat's that's of some value well it was

01:40:09 --> 01:40:15
beautifully refreshing just to hear you

01:40:12 --> 01:40:17
naturally jump to psychology back to

01:40:14 --> 01:40:18
computer science and this conversation

01:40:16 --> 01:40:20
back and forth

01:40:17 --> 01:40:22
i mean that that's uh that's actually a

01:40:19 --> 01:40:24
rare quality and i think it's

01:40:21 --> 01:40:26
certainly for students empowering to

01:40:23 --> 01:40:28
think about problems in a new way

01:40:25 --> 01:40:30
so for that and for many other reasons i

01:40:27 --> 01:40:31
really enjoyed this conversation thank

01:40:29 --> 01:40:32
you so much it was a huge honor thanks

01:40:30 --> 01:40:35
for talking today

01:40:31 --> 01:40:37
it's been my pleasure thanks for

01:40:34 --> 01:40:39
listening to this conversation

01:40:36 --> 01:40:40
with jitendra malik and thank you to our

01:40:38 --> 01:40:43
sponsors

01:40:39 --> 01:40:46
betterhelp and expressvpn

01:40:42 --> 01:40:48
please consider supporting this podcast

01:40:45 --> 01:40:52
by going to betterhelp.com

01:40:47 --> 01:40:56
lex and signing up at expressvpn.com

01:40:51 --> 01:40:58
lexpod click the links buy the stuff

01:40:55 --> 01:41:00
it's how they know i sent you and it

01:40:57 --> 01:41:01
really is the best way to support this

01:40:59 --> 01:41:03
podcast

01:41:00 --> 01:41:04
and the journey i'm on if you enjoy this

01:41:02 --> 01:41:06
thing

01:41:03 --> 01:41:08
subscribe on youtube review 5 stars on

01:41:05 --> 01:41:10
apple podcast

01:41:07 --> 01:41:11
support it on patreon or connect with me

01:41:09 --> 01:41:13
on twitter

01:41:10 --> 01:41:15
at lex friedman don't ask me how to

01:41:12 --> 01:41:17
spell that i don't remember

01:41:14 --> 01:41:19
myself and now let me leave you with

01:41:16 --> 01:41:23
some words from prince mishkin

01:41:18 --> 01:41:25
and the idiot by dostoyevsky beauty

01:41:22 --> 01:41:26
will save the world thank you for

01:41:24 --> 01:41:34
listening

01:41:25 --> 01:41:34
and hope to see you next time

01:41:36 --> 01:41:39
you

<!-- YOUTUBE_TRANSCRIPT_END -->
