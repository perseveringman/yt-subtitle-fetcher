---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "yiJOTCRVWjc"
title: "Building Agents at Home: Homeschooling, Parenting and More | The a16z Show"
video_url: "https://www.youtube.com/watch?v=yiJOTCRVWjc"
thumbnail_url: "https://i.ytimg.com/vi/yiJOTCRVWjc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=yiJOTCRVWjc"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2026-04-13T14:30:00.000Z"
upload_date: "2026-04-13"
duration_seconds: 3242
duration_human: "54:02"
view_count: 12486
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:18:07.415Z"
---

# Building Agents at Home: Homeschooling, Parenting and More | The a16z Show

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=yiJOTCRVWjc
- video_id: yiJOTCRVWjc
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2026-04-13T14:30:00.000Z
- upload_date: 2026-04-13
- duration: 54:02
- view_count: 12486
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Katherine Boyle and Sarah Wang speak with Jesse Genet, a startup founder and family builder, about building 11 AI agents while homeschooling four young children. Jesse runs agents across roles ranging from coding to curriculum planning to household management, and she shares how agent architecture, logging systems, and “benevolent neglect” parenting have changed her life as both a founder and a mother.

Timestamps:
(00:00) Intro & Jesse's background as a YC founder turned homeschool mom
(03:00) The "aha moment": discovering Claude Code and agentic building
(06:00) A day in the life: homeschooling 4 kids under 5 and when she builds
(11:00) How AI generates personalized lesson plans and logs progress
(18:00) The full agent stack: from 5 to 11 agents (and growing)
(27:05) Tech stack deep dive: Obsidian, Claude Code, Mac Mini, security
(33:56) Agents improving real daily life beyond the screen
(40:04) Letting kids interact with AI: values, risks, and the future of parenting

Read the full transcript here: https://www.a16z.news/s/podcast

Resources:
Follow Jesse Genet on X: https://twitter.com/jessegenet 
Follow Katherine Boyle on X: https://twitter.com/KTmBoyle 
Follow Sarah Wang on X: https://twitter.com/sarahdingwang 

Stay Updated:
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Find a16z on X: https://twitter.com/a16z

Find a16z on LinkedIn: https://www.linkedin.com/company/a16z

Listen to the a16z Show on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX

Listen to the a16z Show on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711

Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see http://a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
I was resigned to not challenging myself

00:00:03 --> 00:00:09
to build technical or hard things for

00:00:06 --> 00:00:11
like the next 5 years or so. I really

00:00:08 --> 00:00:13
want to be present with my kids. I need

00:00:10 --> 00:00:15
to take this break basically. That is no

00:00:12 --> 00:00:17
longer true. Oh, weird superpower of

00:00:14 --> 00:00:19
mine is just how incredibly motivated I

00:00:16 --> 00:00:21
am for agents to do work for me. I got

00:00:18 --> 00:00:23
my agents to learn how to build other

00:00:20 --> 00:00:25
agents on their own so I could be like

00:00:22 --> 00:00:26
we need another agent you guys and they

00:00:24 --> 00:00:28
actually can spin them up without me

00:00:25 --> 00:00:30
touching the machine, which is a little

00:00:27 --> 00:00:32
crazy. But the first few weeks were very

00:00:29 --> 00:00:34
rough. It would be a level of pain that

00:00:31 --> 00:00:37
I wouldn't want an average person to go

00:00:33 --> 00:00:37
through. But the thing is

00:00:37 --> 00:00:42
Jessie, it is so fantastic to have you

00:00:39 --> 00:00:44
here. I think you you've been what I

00:00:41 --> 00:00:47
would call a viral sensation

00:00:43 --> 00:00:50
X posting videos of how you're

00:00:46 --> 00:00:51
homeschooling your family, four children

00:00:49 --> 00:00:54
under the age of five, which all I can

00:00:50 --> 00:00:55
say is God bless you. You're amazing.

00:00:53 --> 00:00:57
God bless you. But we also want your

00:00:54 --> 00:00:59
secrets. We want your tips.

00:00:56 --> 00:01:02
As as you know, Sarah and I are both

00:00:58 --> 00:01:05
moms of young children and we talk a lot

00:01:01 --> 00:01:07
about how AI is impacting education, how

00:01:05 --> 00:01:09
AI is impacting the future of the family

00:01:06 --> 00:01:12
and you've become just such an

00:01:08 --> 00:01:14
incredible force with your videos on X

00:01:11 --> 00:01:15
how you're using it in a bunch of

00:01:13 --> 00:01:16
different tasks around the house and a

00:01:14 --> 00:01:18
bunch of different tasks around

00:01:16 --> 00:01:20
supporting your family as as a

00:01:17 --> 00:01:23
homeschool mom. So we want to start with

00:01:19 --> 00:01:25
who you are. And and how you got so

00:01:22 --> 00:01:27
interested in in using AI for homeschool

00:01:24 --> 00:01:28
but but tell us about your your previous

00:01:26 --> 00:01:30
career too

00:01:27 --> 00:01:33
as as a Silicon Valley founder. Yeah, I

00:01:29 --> 00:01:36
so I I I started a company many years

00:01:32 --> 00:01:38
ago now time time flies but I was a YC

00:01:35 --> 00:01:40
founder you know

00:01:37 --> 00:01:42
did a did a venture backed company kind

00:01:39 --> 00:01:45
of full cycle ended up selling it a few

00:01:41 --> 00:01:46
years ago and so I do you know on one on

00:01:44 --> 00:01:48
the one hand I'd say I have a technical

00:01:46 --> 00:01:51
background. On the other hand I would

00:01:48 --> 00:01:53
admit openly that my co-founder was the

00:01:50 --> 00:01:54
technical co-founder. [laughter]

00:01:52 --> 00:01:56
So I I want to be like I want people to

00:01:53 --> 00:01:58
understand yes like I've been swimming

00:01:55 --> 00:02:00
in these waters. I've sat in many an

00:01:57 --> 00:02:03
engineering meeting where I was sort of

00:01:59 --> 00:02:04
ollowing along and sort of lost. I've

00:02:02 --> 00:02:08
sat in many you know product cycles and

00:02:04 --> 00:02:10
reviews. So it gives me a vocabulary

00:02:07 --> 00:02:13
but I hadn't opened terminal to try to

00:02:09 --> 00:02:14
build something myself until maybe 6

00:02:12 --> 00:02:17
months ago. So I think we're living

00:02:13 --> 00:02:20
through a really fascinating time where

00:02:16 --> 00:02:22
only recently after you know a running a

00:02:19 --> 00:02:24
company myself

00:02:21 --> 00:02:26
did I feel like now the tools are so

00:02:23 --> 00:02:29
good that I can really use natural

00:02:25 --> 00:02:31
anguage to to build things and so the

00:02:28 --> 00:02:34
last 6 months have been um like a

00:02:30 --> 00:02:35
Cambrian like explosion for me of of

00:02:33 --> 00:02:39
building and of course the last few

00:02:34 --> 00:02:40
months where we have the open claw then

00:02:38 --> 00:02:42
I went to completely obsessed. So I'm

00:02:39 --> 00:02:44
happy to discuss that but I went

00:02:41 --> 00:02:46
down a complete obsession. It can only

00:02:43 --> 00:02:48
be described as an obsession

00:02:45 --> 00:02:50
because I I've just been building almost

00:02:47 --> 00:02:51
you know nonstop. But when I say that on

00:02:49 --> 00:02:53
a day-to-day basis I'm actually spending

00:02:50 --> 00:02:55
a lot of time with my kids and so I was

00:02:52 --> 00:02:57
trying to find like how can I build

00:02:54 --> 00:02:59
things that are relevant to my life. So

00:02:56 --> 00:03:01
I know we're going to dig into that but

00:02:58 --> 00:03:03
hat's a little bit of how I got to now.

00:03:00 --> 00:03:05
And maybe talk about that 6 month like

00:03:02 --> 00:03:07
what was the thing that happened 6

00:03:04 --> 00:03:08
months ago or do you remember what the

00:03:06 --> 00:03:10
moment was where you're like I need to

00:03:07 --> 00:03:12
start building to fix this problem or

00:03:10 --> 00:03:15
what was the story behind that?

00:03:11 --> 00:03:17
>> Well, um you my my my co-founder from

00:03:14 --> 00:03:19
Lumi which was a packaging company so

00:03:16 --> 00:03:22
little physical packaging we made it we

00:03:18 --> 00:03:24
managed a packaging marketplace. He he's

00:03:21 --> 00:03:28
now off running something called

00:03:23 --> 00:03:31
Obsidian and it's a markdown

00:03:27 --> 00:03:33
ote taking app and I say this because I

00:03:30 --> 00:03:34
follow him on Twitter obviously we're

00:03:32 --> 00:03:35
co-founders [laughter]

00:03:33 --> 00:03:37
and then and then and then I follow all

00:03:34 --> 00:03:40
these Obsidian geeks on Twitter and I

00:03:37 --> 00:03:41
started noticing a change in the

00:03:39 --> 00:03:43
conversation a change in the

00:03:40 --> 00:03:44
conversation them talking about how they

00:03:42 --> 00:03:46
were like building really wild things

00:03:43 --> 00:03:49
with Claude code that that you know that

00:03:45 --> 00:03:50
stuff was referenced the discussion

00:03:48 --> 00:03:53
about interesting ways they started

00:03:49 --> 00:03:54
using Obsidian and what really caught my

00:03:52 --> 00:03:57
eye

00:03:53 --> 00:03:58
so that the 6 months ago was me feeling

00:03:56 --> 00:04:00
like hey I actually feel like I should

00:03:57 --> 00:04:02
probably can probably be building things

00:03:59 --> 00:04:04
myself now in the small bits of time

00:04:01 --> 00:04:05
that I have. So I have like confetti

00:04:03 --> 00:04:06
me you know like I have like 10

00:04:04 --> 00:04:08
minutes here 15 minutes there and I

00:04:05 --> 00:04:10
started feeling like maybe I can build

00:04:07 --> 00:04:13
stuff the tools are getting so good. But

00:04:09 --> 00:04:15
hen about few months ago 3 months ago

00:04:12 --> 00:04:16
two three months ago I saw people saying

00:04:14 --> 00:04:18
like I'm using Obsidian as a second

00:04:16 --> 00:04:20
brain for this thing and it was called

00:04:17 --> 00:04:22
Claude bot and then all these different

00:04:19 --> 00:04:24
names yeah Claude bot and and and they

00:04:21 --> 00:04:26
were referencing this and I was like

00:04:23 --> 00:04:28
what are they talking about? This was

00:04:25 --> 00:04:31
December and into January

00:04:27 --> 00:04:34
and that's when I realized like we I can

00:04:30 --> 00:04:36
build agents to actually code for me

00:04:33 --> 00:04:39
while I'm hanging out with my kids. That

00:04:36 --> 00:04:41
hat was a complete game changer.

00:04:38 --> 00:04:42
And I and and actually just pausing that

00:04:40 --> 00:04:45
for one moment

00:04:41 --> 00:04:47
um this is such a huge deal for me. I

00:04:44 --> 00:04:49
have I was resigned and not in this like

00:04:46 --> 00:04:52
super depressing way but just being

00:04:48 --> 00:04:55
really blunt to not challenging myself

00:04:51 --> 00:04:57
to build technical or hard things for

00:04:54 --> 00:04:58
like the next 5 years or so. Like I was

00:04:56 --> 00:05:00
like I really want to be present with my

00:04:58 --> 00:05:01
kids. I really we're doing homeschooling

00:04:59 --> 00:05:04
which is a

00:05:00 --> 00:05:06
like a wild choice. Um and so I so I was

00:05:03 --> 00:05:09
kind of yeah I think the right word is

00:05:05 --> 00:05:10
resigned to it. Not sad not resentful

00:05:08 --> 00:05:13
but just just like okay I need to take

00:05:09 --> 00:05:15
this break basically. That is no longer

00:05:12 --> 00:05:17
true. Like what happened a few months

00:05:14 --> 00:05:18
ago is that is no longer true. I feel

00:05:16 --> 00:05:20
ike I've been building better things

00:05:17 --> 00:05:22
than I ever have before

00:05:19 --> 00:05:25
while I spend almost all of my waking

00:05:21 --> 00:05:27
hours like with my children and I and I

00:05:24 --> 00:05:28
explain I can explain how I do the flow

00:05:26 --> 00:05:29
of the day where I do that where like

00:05:27 --> 00:05:30
there's things I do you know during the

00:05:28 --> 00:05:32
day and things I do at night when

00:05:29 --> 00:05:35
they're sleeping and stuff but I'm like

00:05:31 --> 00:05:38
truly building things I'm impressed with

00:05:34 --> 00:05:40
personally and I'm being an active mom.

00:05:37 --> 00:05:42
Like and that was not possible a few

00:05:39 --> 00:05:44
months ago. Like it's it's actually a

00:05:41 --> 00:05:46
sea change for me personally it's like

00:05:43 --> 00:05:48
really liberating. So that's that's

00:05:45 --> 00:05:49
incredibly inspiring what you just said

00:05:47 --> 00:05:51
and you know I think a lot of parents

00:05:48 --> 00:05:54
listening to this are like I don't have

00:05:50 --> 00:05:57
time to build this right and so

00:05:53 --> 00:05:59
you're a mom four five and under.

00:05:56 --> 00:06:00
I'm like I have two and I barely feel

00:05:58 --> 00:06:02
ike I could breathe let alone four.

00:05:59 --> 00:06:05
You're doing homeschooling.

00:06:01 --> 00:06:07
Can you walk us through a day in your

00:06:04 --> 00:06:10
life? Like how do the hours

00:06:06 --> 00:06:12
tack up and then when do you build

00:06:09 --> 00:06:13
and to your point the big unlock is like

00:06:11 --> 00:06:15
you're sleeping and they're building for

00:06:12 --> 00:06:18
you. So like how did you how did you get

00:06:14 --> 00:06:21
hat set up? So many questions. Yeah,

00:06:17 --> 00:06:24
those let's an average day a typical day

00:06:20 --> 00:06:26
ou know wake up at the crack of dawn

00:06:23 --> 00:06:28
right because there's a small person who

00:06:25 --> 00:06:30
has decided that that's when when we get

00:06:27 --> 00:06:32
up and they're like you get up you know

00:06:29 --> 00:06:33
so anyway I'm like waking up and there's

00:06:31 --> 00:06:35
like small you know little gremlin

00:06:32 --> 00:06:37
creatures around my bed so that's that's

00:06:34 --> 00:06:39
where we start. We we go from there

00:06:36 --> 00:06:41
obviously all the basics like having

00:06:38 --> 00:06:43
breakfast yada yada. What I try to do

00:06:40 --> 00:06:44
there's three kids I'm really

00:06:42 --> 00:06:47
homeschooling now cuz one is a baby one

00:06:43 --> 00:06:50
is about 4 months old. I start early but

00:06:46 --> 00:06:52
not that early. We have a the three are

00:06:49 --> 00:06:54
five four and two the three other

00:06:51 --> 00:06:56
children and I try to do individual

00:06:53 --> 00:06:58
sessions with them. So imagine after

00:06:55 --> 00:07:00
breakfast and these types of things I

00:06:57 --> 00:07:02
have a place where we homeschool and I

00:06:59 --> 00:07:04
cycle the kids in one at a time and I

00:07:01 --> 00:07:06
need child I need help with the kids

00:07:03 --> 00:07:07
even to do that right? So I do I am

00:07:05 --> 00:07:10
lucky enough to have some help with the

00:07:06 --> 00:07:13
kids during certain portions of the day.

00:07:09 --> 00:07:14
So I cycle the kids in one at a time to

00:07:12 --> 00:07:16
where we homeschool and I do a

00:07:13 --> 00:07:18
one-on-one session with them. You know

00:07:15 --> 00:07:19
depends on the kids' mood they're all

00:07:17 --> 00:07:22
quite young but it can be anywhere from

00:07:18 --> 00:07:24
like 20 minutes to an hour

00:07:21 --> 00:07:27
and then after that maybe then it's like

00:07:23 --> 00:07:29
mid-morning we will just you know do

00:07:26 --> 00:07:32
some more unstructured activities like

00:07:28 --> 00:07:33
playing and and playing outdoors or

00:07:31 --> 00:07:34
trying to pull on a thread of something

00:07:32 --> 00:07:36
we're doing

00:07:33 --> 00:07:37
where we

00:07:35 --> 00:07:39
leave the house maybe go on kind of a

00:07:36 --> 00:07:42
field trip or something like this. One

00:07:38 --> 00:07:44
time a week we do a homeschool pod with

00:07:41 --> 00:07:45
another with two other families. Between

00:07:43 --> 00:07:46
the three families there's 11 kids

00:07:44 --> 00:07:48
already

00:07:45 --> 00:07:50
when you meet homeschoolers these people

00:07:47 --> 00:07:50
are reproducing all right.

00:07:49 --> 00:07:52
>> [laughter]

00:07:49 --> 00:07:55
>> So

00:07:51 --> 00:07:57
three families 11 kids already and so

00:07:54 --> 00:07:59
nce a week I lead a science pod. So on

00:07:56 --> 00:08:01
that day it's really kind of cool all

00:07:58 --> 00:08:02
the kids are at our house and they're

00:08:00 --> 00:08:04
like running around and we do a science

00:08:01 --> 00:08:06
lesson that we weave through like the

00:08:03 --> 00:08:09
whole day. But in any case the kids can

00:08:05 --> 00:08:10
do effectively 30 45 minutes of like

00:08:08 --> 00:08:12
active instruction per day and you

00:08:09 --> 00:08:13
really want to make the most of that and

00:08:11 --> 00:08:15
then the rest of the day is pretty like

00:08:12 --> 00:08:18
thematic. The other thing that I really

00:08:14 --> 00:08:20
believe in so I spend time doing this is

00:08:18 --> 00:08:22
you could call it free range parenting

00:08:19 --> 00:08:24
you could call it benevolent neglect. I

00:08:21 --> 00:08:26
don't know what you want to call it but

00:08:23 --> 00:08:28
I try to ignore the children. I try to

00:08:25 --> 00:08:30
make sure that they're going to survive

00:08:27 --> 00:08:32
the ignoring.

00:08:29 --> 00:08:34
So they're set up in little places where

00:08:31 --> 00:08:36
they can't you know hurt themselves but

00:08:33 --> 00:08:38
I I step away from them and try to just

00:08:35 --> 00:08:39
see what they do. There's already three

00:08:37 --> 00:08:42
of them even if we don't have the other

00:08:38 --> 00:08:43
family over but so we're we've gotten I

00:08:41 --> 00:08:45
try to build up the amount of time that

00:08:42 --> 00:08:47
hey can spend playing together without

00:08:44 --> 00:08:49
needing me. So instead of structuring

00:08:46 --> 00:08:51
the whole day we're up to with the four

00:08:48 --> 00:08:54
and five year old we're up to like they

00:08:50 --> 00:08:56
can they will spend more than 2 hours

00:08:53 --> 00:08:58
interacting and doing stuff before they

00:08:55 --> 00:09:00
come back to me. And I actually use a

00:08:57 --> 00:09:02
timer because I'm like I'm like paying

00:08:59 --> 00:09:04
attention but I actually use a timer and

00:09:01 --> 00:09:05
like I'm trying to build up their

00:09:03 --> 00:09:07
tolerance before they're like I need a

00:09:05 --> 00:09:09
snack or whatever and and they have

00:09:06 --> 00:09:11
snacks and they have stuff they can grab

00:09:08 --> 00:09:13
ut the the trick for me is like when do

00:09:10 --> 00:09:15
they actually truly come to me and they

00:09:12 --> 00:09:17
say like I need I need you know I need

00:09:14 --> 00:09:19
something I need activity this or that.

00:09:16 --> 00:09:22
This is part of also why I want to

00:09:18 --> 00:09:24
homeschool frankly because I want to

00:09:21 --> 00:09:26
benevolently neglect my own children.

00:09:23 --> 00:09:28
They don't get neglect. They don't get

00:09:25 --> 00:09:30
he proper kind of neglect in in in

00:09:28 --> 00:09:32
every school environment. I want them to

00:09:29 --> 00:09:34
learn how to not be bored on their own

00:09:31 --> 00:09:36
and these types of things. So so a

00:09:33 --> 00:09:39
portion of every day is them away.

00:09:35 --> 00:09:41
During that time I do get some magical

00:09:38 --> 00:09:43
possible coding and tech time. But

00:09:40 --> 00:09:45
anyway there's a portion of every day

00:09:42 --> 00:09:47
where I'm like intentionally trying to

00:09:44 --> 00:09:48
ignore the children. Not the four month

00:09:46 --> 00:09:49
old all right.

00:09:47 --> 00:09:51
>> [laughter]

00:09:48 --> 00:09:54
>> No that's amazing. My my five year old

00:09:50 --> 00:09:56
after like 2 minutes is like I'm bored

00:09:53 --> 00:09:57
and I'm trying to create that mental

00:09:55 --> 00:09:59
resilience of like you don't need to be

00:09:56 --> 00:10:01
stimulated all the time. It it's really

00:09:58 --> 00:10:02
hard and and that's why I'm I talk about

00:10:00 --> 00:10:04
building up it's like a tolerance like I

00:10:01 --> 00:10:07
would say we started at like 5 minutes

00:10:03 --> 00:10:09
and and um and the trick is that I try

00:10:06 --> 00:10:12
to not say like don't talk to me like I

00:10:08 --> 00:10:16
never actually vocalize that. I just

00:10:11 --> 00:10:17
remove myself um and like go away to to

00:10:15 --> 00:10:19
there's a couple places that are great

00:10:16 --> 00:10:23
where we live where I can go away and

00:10:18 --> 00:10:25
then my mom also lives um with us uh in

00:10:22 --> 00:10:27
uh like a little kind of mother-in-law

00:10:24 --> 00:10:30
suite like a separate little building

00:10:26 --> 00:10:31
and so the kids will like wander farther

00:10:29 --> 00:10:32
and farther from me and sometimes I'll

00:10:30 --> 00:10:33
ike it's almost like we got a

00:10:31 --> 00:10:35
walkie-talkie system I'm like they're

00:10:33 --> 00:10:36
near you now like

00:10:34 --> 00:10:37
>> [laughter]

00:10:35 --> 00:10:38
>> like and then

00:10:36 --> 00:10:41
um and then so like but they

00:10:37 --> 00:10:44
will actually wander away like like

00:10:40 --> 00:10:45
totally away and um even the

00:10:43 --> 00:10:48
three-year-old but they'll stay together

00:10:44 --> 00:10:51
so so they'll stay together. Anyway, we

00:10:47 --> 00:10:52
can get into um my neglect strategies if

00:10:50 --> 00:10:54
you if you'd like but it doesn't really

00:10:51 --> 00:10:56
it doesn't truly relate to AI except for

00:10:53 --> 00:10:59
the fact that when I'm doing the

00:10:55 --> 00:11:01
benevolent neglect I get to do more AI.

00:10:58 --> 00:11:02
Yeah. Mhm.

00:11:00 --> 00:11:04
Well, I would love to hear you know I

00:11:01 --> 00:11:05
mean three different lesson plans for

00:11:03 --> 00:11:07
three different ages um if you're

00:11:04 --> 00:11:08
choosing to go by sort of the rubric of

00:11:06 --> 00:11:10
what they should be learning at

00:11:07 --> 00:11:12
different ages. Like how does AI how do

00:11:09 --> 00:11:14
you incorporate AI into that? Are you

00:11:11 --> 00:11:15
asking AI hey I have a five-year-old who

00:11:13 --> 00:11:17
may be good at a different subject like

00:11:14 --> 00:11:19
what should I be doing or how is AI

00:11:16 --> 00:11:23
actually uh a coach or a pair to you in

00:11:18 --> 00:11:25
your teaching? So I one thing that gave

00:11:22 --> 00:11:27
me a leg up in my setup when I started

00:11:24 --> 00:11:30
setting up some of my agents um and and

00:11:26 --> 00:11:32
we'll get into that is that I I did know

00:11:29 --> 00:11:34
hat curriculums I wanted to follow. I

00:11:31 --> 00:11:36
had been reading for many years um just

00:11:33 --> 00:11:37
different curriculum books and like

00:11:35 --> 00:11:39
following different homeschoolers and

00:11:36 --> 00:11:41
kind of finding little tips and so

00:11:38 --> 00:11:44
there's this um you know this science

00:11:40 --> 00:11:45
curriculum that I really love called um

00:11:43 --> 00:11:48
building the foundations of scientific

00:11:44 --> 00:11:49
understanding and and so I I it helps to

00:11:47 --> 00:11:52
know what you're trying to do because

00:11:48 --> 00:11:54
what I did when I first spun up my first

00:11:51 --> 00:11:57
homeschool agent is I actually fed them

00:11:53 --> 00:11:59
the text of these books. So I actually

00:11:56 --> 00:12:01
um either took photos of the pages or I

00:11:58 --> 00:12:02
was able to find PDFs online of like the

00:12:00 --> 00:12:04
full text of the book. So I didn't say

00:12:02 --> 00:12:07
like what should we do next in this book

00:12:03 --> 00:12:10
and ask it to like go search the web. My

00:12:06 --> 00:12:12
um agent that focuses on homeschool has

00:12:09 --> 00:12:14
the text of all the core curriculums I'm

00:12:11 --> 00:12:16
trying to do and I created like a core

00:12:13 --> 00:12:18
pedagogy kind of like foundational

00:12:15 --> 00:12:20
document where I talk about like what I

00:12:17 --> 00:12:22
think about Montessori and like I just

00:12:19 --> 00:12:24
basically imagine me this is literally

00:12:21 --> 00:12:25
how imagine me like walking around

00:12:23 --> 00:12:27
making like voice notes like waxing

00:12:24 --> 00:12:29
poetic about all my like educational

00:12:26 --> 00:12:30
philosophies and stuff and then my agent

00:12:28 --> 00:12:31
like literally sycophantically being

00:12:29 --> 00:12:32
like this is brilliant you know this is

00:12:30 --> 00:12:33
o good.

00:12:31 --> 00:12:35
>> [laughter]

00:12:32 --> 00:12:37
>> And then um but I can I can look past

00:12:34 --> 00:12:38
hat I can look past the LLMs at giving

00:12:36 --> 00:12:41
me praise And but you're giving it

00:12:37 --> 00:12:41
context to your point on your philosophy

00:12:40 --> 00:12:43
of education.

00:12:41 --> 00:12:44
>> Specifically my philosophy and then

00:12:42 --> 00:12:47
feeding it the book. So I would say it's

00:12:44 --> 00:12:49
a combo of my um feeding it my

00:12:46 --> 00:12:51
philosophy like verbally and explaining

00:12:48 --> 00:12:53
myself and then feeding it core text

00:12:50 --> 00:12:56
including core curriculums like this

00:12:52 --> 00:12:58
cience curriculum. So then what I do to

00:12:55 --> 00:13:01
answer your question I'll be going in

00:12:57 --> 00:13:03
with the um five-year-old and I'll just

00:13:00 --> 00:13:04
say what's our next I'll make a quick

00:13:02 --> 00:13:05
voice that's why I always do this is

00:13:03 --> 00:13:07
like me making voice notes this is me

00:13:04 --> 00:13:09
making pretend voice note. Um I'll say

00:13:06 --> 00:13:11
like I'm going in with five-year-old

00:13:08 --> 00:13:14
what comes next on science and math for

00:13:10 --> 00:13:17
them and um in just a few minutes the

00:13:13 --> 00:13:19
agent can spit out uh where we are in

00:13:16 --> 00:13:22
our phonics curriculum where we are in

00:13:18 --> 00:13:24
our in our math and then I've also taken

00:13:21 --> 00:13:26
photos of all of the educational

00:13:23 --> 00:13:28
materials I own like Montessori beads

00:13:25 --> 00:13:30
and these types of things. So my agent

00:13:27 --> 00:13:33
will send me a completed lesson plan

00:13:29 --> 00:13:35
including photos of things I own in my

00:13:32 --> 00:13:38
own cabinet to pull out and it'll be

00:13:34 --> 00:13:40
like oh Quinn so then the the missing

00:13:37 --> 00:13:42
loop is the logging. Okay, so how would

00:13:39 --> 00:13:45
it know where she is in her curriculum

00:13:41 --> 00:13:47
if I don't log? The logging actually is

00:13:44 --> 00:13:48
like such a geeky concept like a I don't

00:13:46 --> 00:13:50
know it sounds like it seems like a

00:13:47 --> 00:13:53
small detail but getting the logging

00:13:49 --> 00:13:54
really good made this whole thing really

00:13:52 --> 00:13:55
sing.

00:13:53 --> 00:13:57
>> Wow. How do you do that? Yeah. The the

00:13:54 --> 00:13:59
logging is also voice notes. Everything

00:13:56 --> 00:14:01
is voice notes. Oh. Voice notes and

00:13:58 --> 00:14:03
photos because I don't have time to like

00:14:00 --> 00:14:06
sit at the laptop very often. So I need

00:14:02 --> 00:14:08
it to be like really mobile friendly. So

00:14:05 --> 00:14:09
the logging so imagine you've got this

00:14:07 --> 00:14:11
agent they know all of my core

00:14:08 --> 00:14:13
curriculums everything but the missing

00:14:10 --> 00:14:15
link is where is that child at? So when

00:14:12 --> 00:14:17
I'm in the session with Quinn and she's

00:14:14 --> 00:14:20
doing some math and she's doing some

00:14:16 --> 00:14:22
reading etc. I just snap a couple quick

00:14:19 --> 00:14:24
photos usually maybe the photo of the

00:14:21 --> 00:14:26
page of the book we're on or like I snap

00:14:23 --> 00:14:28
a couple like um establishing pics

00:14:25 --> 00:14:29
usually but without taking a bunch of

00:14:27 --> 00:14:31
time to like sit there and document I'm

00:14:28 --> 00:14:33
ainly interacting with Quinn the

00:14:30 --> 00:14:34
five-year-old and then right when she

00:14:32 --> 00:14:37
finishes I make a quick voice note and

00:14:34 --> 00:14:39
I'm like Quinn today we did lesson 37 in

00:14:36 --> 00:14:41
the phonics and she's still struggling

00:14:38 --> 00:14:44
with the G sound blah blah blah. It but

00:14:40 --> 00:14:46
it but really like a sub 30-second voice

00:14:43 --> 00:14:49
note like like really fast right? And I

00:14:45 --> 00:14:50
send that off to the agent and the agent

00:14:48 --> 00:14:52
akes the couple photos I sent and the

00:14:50 --> 00:14:55
30-second voice note and writes this

00:14:51 --> 00:14:56
like beautiful log like it like it's

00:14:54 --> 00:14:58
like someone sat down with a

00:14:55 --> 00:15:00
cup of tea and they're like Quinn's G's

00:14:57 --> 00:15:01
are coming together you know like and

00:14:59 --> 00:15:03
you're

00:15:00 --> 00:15:05
it's like it's like so lovingly written

00:15:02 --> 00:15:06
and it has like no relationship if you

00:15:04 --> 00:15:07
listen to the voice note it's like I'm

00:15:06 --> 00:15:09
like she's struggling with her G she

00:15:07 --> 00:15:10
should really figure that out and then

00:15:08 --> 00:15:12
it like parses that and it

00:15:09 --> 00:15:14
writes it like this loving parent like

00:15:11 --> 00:15:17
it just writes like this beautiful log.

00:15:13 --> 00:15:19
Um the Would you consider just having it

00:15:16 --> 00:15:21
record

00:15:18 --> 00:15:23
the entire teaching and then sort of

00:15:20 --> 00:15:24
like the in the doctor world right?

00:15:22 --> 00:15:26
Transcription now you don't have to

00:15:23 --> 00:15:27
write the notes at the end to your point

00:15:25 --> 00:15:29
on logging being painful like just

00:15:26 --> 00:15:31
recording your entire lesson? I have

00:15:28 --> 00:15:33
tried um I've tried a couple different

00:15:30 --> 00:15:34
hings. So this is a total

00:15:32 --> 00:15:37
experimentation. I don't think I can say

00:15:33 --> 00:15:38
it in any front like we're we're like

00:15:36 --> 00:15:39
weeks into this months into this I

00:15:37 --> 00:15:40
haven't like landed on the final

00:15:38 --> 00:15:43
expression.

00:15:39 --> 00:15:45
But um what I have done that like you

00:15:42 --> 00:15:46
just said is I I use Loom the product on

00:15:44 --> 00:15:48
screen capture.

00:15:45 --> 00:15:50
>> Yeah, of course. When we do Synthesis

00:15:47 --> 00:15:54
Math so Synthesis is a math program for

00:15:49 --> 00:15:56
kids that's on laptop um uh synthesis.ai

00:15:53 --> 00:15:57
I I I like it quite a bit. The

00:15:55 --> 00:15:59
five-year-old sometimes does that. When

00:15:56 --> 00:16:01
we do that I screen capture the whole

00:15:58 --> 00:16:03
thing. I use a Loom.

00:16:00 --> 00:16:06
And it screen captures and it's hearing

00:16:03 --> 00:16:08
us. So it's hearing me say to Quinn like

00:16:05 --> 00:16:09
hey you know maybe you missed this like

00:16:07 --> 00:16:11
it's hearing what Quinn says it's

00:16:08 --> 00:16:12
hearing what what I say and it's screen

00:16:10 --> 00:16:14
capturing.

00:16:11 --> 00:16:15
Then I don't make any voice note about

00:16:13 --> 00:16:17
he lesson. I just send the Loom

00:16:14 --> 00:16:19
recording. I say I just send it to the

00:16:16 --> 00:16:21
agent with like a text being like this

00:16:18 --> 00:16:25
Quinn's math today. Um and it parses

00:16:20 --> 00:16:26
everything. That you know agents you

00:16:24 --> 00:16:27
know and I'm not explaining anything to

00:16:25 --> 00:16:29
you guys you don't know but it it

00:16:26 --> 00:16:30
hey're powered by LLMs right? So

00:16:28 --> 00:16:33
they're very good at language.

00:16:29 --> 00:16:35
Loom has really great transcription.

00:16:32 --> 00:16:38
That that's what makes the log so good.

00:16:34 --> 00:16:40
The agents I would burn a lot of excess

00:16:37 --> 00:16:43
tokens I don't need to burn if I made

00:16:39 --> 00:16:46
agents actually like watch videos.

00:16:42 --> 00:16:48
Okay, so so you the the quickest way to

00:16:45 --> 00:16:51
a great log is to somehow get it turned

00:16:47 --> 00:16:52
into language like to text. So when I do

00:16:50 --> 00:16:54
a voice note obviously that's being

00:16:51 --> 00:16:57
transcribed. The agent is reading

00:16:53 --> 00:16:59
effectively reading my text. Video is

00:16:56 --> 00:17:01
the hardest one. Um it burns a lot of

00:16:58 --> 00:17:05
tokens actually make an uh make an agent

00:17:00 --> 00:17:06
like watch a video. So um so but you but

00:17:04 --> 00:17:08
you could have an agent transcribe the

00:17:05 --> 00:17:09
video but what you have to ask yourself

00:17:07 --> 00:17:11
is was there enough language was there

00:17:08 --> 00:17:13
nough like spoken words in this lesson

00:17:11 --> 00:17:15
for them to understand what happened? Um

00:17:12 --> 00:17:16
because they're actually not usually

00:17:14 --> 00:17:17
like truly watching it like we would

00:17:15 --> 00:17:18
watch it.

00:17:16 --> 00:17:20
>> Ah yeah. That makes sense. So that's why

00:17:17 --> 00:17:23
photos actually are easier for them like

00:17:19 --> 00:17:25
if I take a couple photos and then a

00:17:22 --> 00:17:29
voice note it's serving a very similar

00:17:24 --> 00:17:31
purpose to a video but it's much easier

00:17:28 --> 00:17:34
and therefore cheaper for them to

00:17:30 --> 00:17:36
transcribe it or like to um make a log.

00:17:33 --> 00:17:36
Yeah. So video's not impossible and

00:17:35 --> 00:17:38
maybe you know I'm going to start

00:17:35 --> 00:17:39
playing with local models soon maybe

00:17:37 --> 00:17:41
when I'm a little bit less like

00:17:38 --> 00:17:42
sensitive to a like chewing tokens or

00:17:40 --> 00:17:45
just like cuz it just seems a little

00:17:41 --> 00:17:47
silly to be like I paid $8 for the agent

00:17:44 --> 00:17:49
o like watch this video. Right. Right.

00:17:47 --> 00:17:51
>> kind of feels like that wasn't the point

00:17:48 --> 00:17:53
you know um but but all this stuff may

00:17:50 --> 00:17:56
come down in price and maybe at some

00:17:52 --> 00:17:59
point that is also like viable. Yeah,

00:17:55 --> 00:18:01
totally. Um and actually I want to maybe

00:17:58 --> 00:18:04
dial up a bit because um you mentioned

00:18:00 --> 00:18:06
one agent that you have um but uh I

00:18:03 --> 00:18:07
think I saw something um where you'd

00:18:05 --> 00:18:09
publicly talked about five agents and

00:18:06 --> 00:18:11
then before the session started you were

00:18:08 --> 00:18:14
like up to 11 now. Um

00:18:10 --> 00:18:16
Can you tell us about you know your I

00:18:13 --> 00:18:18
love it. No like I mean you're one of

00:18:15 --> 00:18:21
the most sophisticated users of of AI

00:18:17 --> 00:18:23
right? So like can you tell us um you

00:18:20 --> 00:18:25
know what those 11 agents do or like at

00:18:22 --> 00:18:26
least the most important ones how you

00:18:24 --> 00:18:29
manage them and then I think this

00:18:25 --> 00:18:30
element of token cost is really

00:18:28 --> 00:18:33
interesting as well. I'm hearing a lot

00:18:29 --> 00:18:34
of CTOs say oh it's my head count budget

00:18:32 --> 00:18:35
now my token budget. Like how do you

00:18:33 --> 00:18:38
think about that from like household

00:18:35 --> 00:18:39
perspective? I do think that a weird

00:18:37 --> 00:18:41
superpower of mine is just how

00:18:38 --> 00:18:44
incredibly motivated I am for agents to

00:18:40 --> 00:18:45
do work for me and I do think all of us

00:18:43 --> 00:18:48
here could relate to this like

00:18:44 --> 00:18:50
in in our in our early motherhood phase

00:18:47 --> 00:18:52
we we are some of the most motivated

00:18:49 --> 00:18:54
individuals to be able to get work done

00:18:51 --> 00:18:56
on a computer without having to sit down

00:18:53 --> 00:18:58
and touch the computer because that is

00:18:55 --> 00:19:00
the barrier like I'm literally holding a

00:18:57 --> 00:19:02
baby like my keyboard is being pressed

00:18:59 --> 00:19:05
by baby's feet or something. It's like

00:19:01 --> 00:19:06
a grown man cannot compute the like

00:19:04 --> 00:19:08
the difficulties that I'm having using

00:19:05 --> 00:19:10
my laptop right? So and and some of

00:19:07 --> 00:19:11
these people will react even to my

00:19:09 --> 00:19:12
online content and say like you could

00:19:10 --> 00:19:14
just use Claude code for this and I'm

00:19:11 --> 00:19:17
like yeah I could if I had time to sit

00:19:13 --> 00:19:19
at my computer. Because because what I

00:19:16 --> 00:19:21
am building like when an agent when I

00:19:18 --> 00:19:25
say that I had an agent build a website

00:19:20 --> 00:19:27
and like I or build um you know an app

00:19:24 --> 00:19:30
they are using Claude code or equivalent

00:19:26 --> 00:19:32
codex you know all all these products

00:19:29 --> 00:19:34
um and so people are sometimes bringing

00:19:31 --> 00:19:36
my attention to this like I needed I

00:19:33 --> 00:19:38
needed their information like to say you

00:19:35 --> 00:19:40
know you could have done this yourself

00:19:37 --> 00:19:41
on uh Claude code or codex. I'm like

00:19:39 --> 00:19:42
yeah I I know.

00:19:40 --> 00:19:45
>> [laughter]

00:19:41 --> 00:19:47
>> I I'm aware of that um but but um so I'm

00:19:44 --> 00:19:48
building agents to do things for me and

00:19:46 --> 00:19:50
they're effectively

00:19:47 --> 00:19:51
they're using the computer. It's it's

00:19:49 --> 00:19:53
just they're using my computer for me

00:19:50 --> 00:19:55
because I cannot sit there and use it.

00:19:52 --> 00:19:56
Totally. So so how did I time?

00:19:54 --> 00:19:58
>> Yeah, so how did I proliferate the

00:19:55 --> 00:20:00
agents? So I'm aware of that and anytime

00:19:57 --> 00:20:01
you it's like an employee. Every time

00:19:59 --> 00:20:03
you anytime you create one level of

00:20:00 --> 00:20:05
abstraction, you do also lose a little

00:20:02 --> 00:20:07
bit of granularity or a little bit of

00:20:04 --> 00:20:09
inesse, but to me that's completely

00:20:06 --> 00:20:10
worth it because I don't have that I

00:20:08 --> 00:20:14
don't I can't sit at the computer for 8

00:20:09 --> 00:20:16
hours a day. So I I proliferate agents

00:20:13 --> 00:20:18
based on roles that are to be done. It

00:20:15 --> 00:20:21
is kind of similar to employees, but it

00:20:17 --> 00:20:21
is it is nuanced in that agents

00:20:20 --> 00:20:22
you know have

00:20:20 --> 00:20:23
>> [clears throat]

00:20:21 --> 00:20:25
>> personalities that are a little bit

00:20:22 --> 00:20:27
different or not personalities, but

00:20:24 --> 00:20:29
you need to drive them on a certain

00:20:26 --> 00:20:31
mission. So I tend to proliferate an

00:20:28 --> 00:20:34
agent a new agent when I've come up with

00:20:30 --> 00:20:37
enough work that creates another kind of

00:20:33 --> 00:20:41
mission-based role and I don't want to

00:20:36 --> 00:20:43
distract the another agent with it. So

00:20:40 --> 00:20:45
the example uh tactical example using

00:20:42 --> 00:20:47
home school is I have a main home school

00:20:44 --> 00:20:50
agent. Her name is Sylvie. I like her to

00:20:46 --> 00:20:52
be very responsive. Um and and everyone

00:20:49 --> 00:20:54
anyway people always giving me hot tips

00:20:51 --> 00:20:57
online, but but what I have found by

00:20:53 --> 00:20:59
actually working with this very closely

00:20:56 --> 00:21:02
and for many hours is that I actually

00:20:58 --> 00:21:04
want Sylvie my main agent to be not very

00:21:01 --> 00:21:06
busy because then she's incredibly

00:21:03 --> 00:21:08
responsive. So I don't want her loaded

00:21:05 --> 00:21:10
up. She has very few cron jobs which you

00:21:07 --> 00:21:12
know are the

00:21:09 --> 00:21:14
repetitive scheduled tasks you give an

00:21:11 --> 00:21:16
agent. She has very few of those. She

00:21:13 --> 00:21:18
she

00:21:15 --> 00:21:21
whenever she has a mandate that whenever

00:21:17 --> 00:21:23
I give her work that would take her more

00:21:20 --> 00:21:25
than just a couple minutes, she

00:21:22 --> 00:21:27
delegates it to not a sub-agent. That's

00:21:24 --> 00:21:29
a different concept to a different

00:21:26 --> 00:21:32
actual agent a different provisioned

00:21:28 --> 00:21:34
agent. And so my agents now have

00:21:31 --> 00:21:37
we have like team documents and one of

00:21:33 --> 00:21:40
the team mandates is if I'm routinely

00:21:36 --> 00:21:42
giving you work that would make you too

00:21:39 --> 00:21:44
busy to be extremely responsive to me,

00:21:41 --> 00:21:46
you need to spawn a sub-agent. I have or

00:21:43 --> 00:21:48
spawn a new agent not sub. That's a

00:21:45 --> 00:21:50
different terminology.

00:21:47 --> 00:21:53
I have gotten I I don't know why I'm so

00:21:49 --> 00:21:55
geeked up on this you guys, but I I got

00:21:52 --> 00:21:58
my agents to learn how to build other

00:21:54 --> 00:22:00
agents on their own Mac mini without me

00:21:57 --> 00:22:01
needing to touch the Mac mini. So I

00:21:59 --> 00:22:03
could be here in San Francisco. I'm I

00:22:00 --> 00:22:05
live in LA and I could be like we need

00:22:02 --> 00:22:07
another guy. We need another agent you

00:22:04 --> 00:22:09
guys. And and or they could tell me that

00:22:06 --> 00:22:11
and they actually can spin them up and

00:22:08 --> 00:22:13
add them to our communication channel

00:22:10 --> 00:22:16
without me touching the machine, which

00:22:12 --> 00:22:18
is a little crazy a little crazy.

00:22:15 --> 00:22:19
Because it's Thomas at this point. My

00:22:17 --> 00:22:22
first agent took me hours to set up and

00:22:18 --> 00:22:24
now they can do it without me. Is the

00:22:21 --> 00:22:25
quality bar there for the ones that they

00:22:23 --> 00:22:26
spin up? Like you're like, oh that was a

00:22:24 --> 00:22:28
good idea. That's something I would

00:22:26 --> 00:22:30
actually want that agent to be doing.

00:22:27 --> 00:22:31
>> It's better. Obviously it's better.

00:22:29 --> 00:22:34
Obviously better. That's the thing that

00:22:30 --> 00:22:37
we have to get used to as humans. It's

00:22:33 --> 00:22:38
we have to get used to this. Obviously

00:22:36 --> 00:22:40
when we're no longer in the loop, it's

00:22:37 --> 00:22:40
better.

00:22:39 --> 00:22:42
>> [laughter]

00:22:39 --> 00:22:43
>> Not worse you guys. It's so so that's

00:22:41 --> 00:22:45
the thing we have to get used to. Like

00:22:42 --> 00:22:47
the because

00:22:44 --> 00:22:49
um when they spun up their own agent for

00:22:46 --> 00:22:51
the first time

00:22:48 --> 00:22:53
like usually when a when a new open claw

00:22:50 --> 00:22:55
hatches, it's like it's literally like,

00:22:52 --> 00:22:57
hey and who am I? What's my name?

00:22:54 --> 00:22:59
When they spin up an agent themselves,

00:22:57 --> 00:23:01
none of that time is wasted. They give

00:22:58 --> 00:23:03
the agent all of our team docs,

00:23:00 --> 00:23:05
all of the contacts on myself and my

00:23:02 --> 00:23:07
husband our children's lives. The new

00:23:04 --> 00:23:09
agent knows all of that. I don't have to

00:23:06 --> 00:23:10
feed any information. They take care of

00:23:08 --> 00:23:12
it. They take care of the training.

00:23:10 --> 00:23:13
Yeah, and I didn't have to ask them to

00:23:11 --> 00:23:15
do that. They knew that that would be

00:23:12 --> 00:23:17
valuable. You mentioned you're in a

00:23:14 --> 00:23:19
homeschooling pod with other parents. I

00:23:16 --> 00:23:22
imagine they are not nearly as

00:23:18 --> 00:23:23
ophisticated about AIs you are. Um they

00:23:21 --> 00:23:25
probably think you're like slightly

00:23:22 --> 00:23:27
crazy, right? Like they're like this is

00:23:24 --> 00:23:27
this woman knows everything about this

00:23:26 --> 00:23:29
and

00:23:26 --> 00:23:30
>> [laughter]

00:23:28 --> 00:23:33
>> Like do you have like a normal mom

00:23:29 --> 00:23:35
friend who you have like guided through

00:23:32 --> 00:23:36
the AI experience? And I would just love

00:23:34 --> 00:23:37
to hear like what were her questions or

00:23:35 --> 00:23:40
what were the what was the hardest

00:23:36 --> 00:23:41
unlock to to opening her up to this

00:23:39 --> 00:23:43
experience where now she's doing it,

00:23:40 --> 00:23:45
right? Like you're a very technical

00:23:42 --> 00:23:47
pro-tech sort of tip of the spear

00:23:44 --> 00:23:49
person, but in 6 months there's going to

00:23:46 --> 00:23:50
be a lot more people who are like you.

00:23:48 --> 00:23:53
So so what what does that look like kind

00:23:49 --> 00:23:54
of shepherding someone a normie along?

00:23:52 --> 00:23:55
>> To Catherine's point, there was a

00:23:53 --> 00:23:58
business I think it was a business spun

00:23:54 --> 00:23:58
up that you can pay $6,000 for someone

00:23:57 --> 00:24:00
to

00:23:57 --> 00:24:01
>> Come do set up your open claw. Like you

00:23:59 --> 00:24:04
obviously you just did it yourself, but

00:24:00 --> 00:24:05
like to Catherine's point like you know

00:24:03 --> 00:24:08
how how does one avoid paying that

00:24:04 --> 00:24:11
$6,000? Totally. So so all of this I

00:24:07 --> 00:24:13
would I would say all of this like any

00:24:10 --> 00:24:15
kind of bleeding edge of a technology. I

00:24:12 --> 00:24:17
you know I've spent I don't want to

00:24:14 --> 00:24:19
versimplify either. I've spent

00:24:16 --> 00:24:20
countless hours debugging and spending

00:24:18 --> 00:24:23
time in like frustrating loops with

00:24:19 --> 00:24:24
agents. It's getting it's getting a lot

00:24:22 --> 00:24:25
better, which is why I keep doing it,

00:24:23 --> 00:24:26
right? Like I wouldn't keep beating my

00:24:24 --> 00:24:29
head against the wall if it was just

00:24:25 --> 00:24:31
[snorts] like always rough. But the

00:24:28 --> 00:24:33
first you know few weeks were very rough

00:24:30 --> 00:24:34
and I think that it would be a level of

00:24:32 --> 00:24:36
pain that I wouldn't want an average

00:24:34 --> 00:24:41
person to go through.

00:24:35 --> 00:24:41
But but the thing is that I don't know

00:24:41 --> 00:24:45
this is so new. We're talking about

00:24:43 --> 00:24:47
weeks. We're talking about like you know

00:24:44 --> 00:24:49
me playing with this now for 11 or 12

00:24:46 --> 00:24:50
weeks or something in that neighborhood.

00:24:48 --> 00:24:52
Um

00:24:49 --> 00:24:55
I do have many normie friends. I also

00:24:51 --> 00:24:56
have a normie sister with four kids.

00:24:54 --> 00:25:00
And so I could talk to to talk to folks

00:24:55 --> 00:25:03
all the time. Um I'm not telling them to

00:24:59 --> 00:25:07
spin up their own open claws quite yet.

00:25:02 --> 00:25:10
Um and also for there there are many

00:25:06 --> 00:25:12
companies that are like you know

00:25:09 --> 00:25:14
Anthropic is launching new features like

00:25:11 --> 00:25:15
very 3 hours or something um that

00:25:13 --> 00:25:17
>> [laughter]

00:25:14 --> 00:25:19
>> that are trying to to to in in open AI

00:25:16 --> 00:25:23
as well like trying to make all of this

00:25:18 --> 00:25:25
a little bit easier for for um for quote

00:25:22 --> 00:25:27
unquote normies and and folks where this

00:25:24 --> 00:25:29
investment of time and money we can get

00:25:26 --> 00:25:30
into money piece. I'm I'm spending quite

00:25:28 --> 00:25:34
a bit like more than what would be

00:25:29 --> 00:25:36
palatable for most on the technology,

00:25:33 --> 00:25:37
but I'm so bullish that

00:25:35 --> 00:25:39
one of the reasons I talk publicly about

00:25:36 --> 00:25:40
it is not to frustrate people with like,

00:25:38 --> 00:25:42
oh I don't feel like I can do this

00:25:39 --> 00:25:44
myself yet.

00:25:41 --> 00:25:46
Um that would never be my goal. I think

00:25:43 --> 00:25:48
that anything I'm doing if it feels a

00:25:45 --> 00:25:51
little difficult now, it will be so

00:25:47 --> 00:25:53
approachable in a matter of mere months

00:25:50 --> 00:25:56
if not weeks that to me it's very

00:25:52 --> 00:25:57
helpful to explain the tip of the spear.

00:25:55 --> 00:25:59
But then when people reach out to me

00:25:56 --> 00:26:00
directly and they go, should I buy a Mac

00:25:58 --> 00:26:02
mini? Should I spin up an open claw? I

00:25:59 --> 00:26:04
ask a couple very practical questions

00:26:01 --> 00:26:06
about their goals and do you know their

00:26:03 --> 00:26:07
financial situation and whatnot. Because

00:26:05 --> 00:26:10
sometimes it's a yes and sometimes it's

00:26:07 --> 00:26:12
a no. You know if it this is a really

00:26:09 --> 00:26:14
fun time to be playing and I'm so

00:26:11 --> 00:26:17
bullish on this stuff, but there's going

00:26:14 --> 00:26:19
to be more and more consumer versions of

00:26:16 --> 00:26:20
all of this that that are a little bit

00:26:18 --> 00:26:22
easier to play with. And I think open

00:26:19 --> 00:26:24
claw itself will just continue to get

00:26:21 --> 00:26:25
easier to install and play with. My

00:26:23 --> 00:26:27
install

00:26:24 --> 00:26:30
the one of the reasons that the agents

00:26:26 --> 00:26:32
can install themselves now and not 3

00:26:29 --> 00:26:34
months ago is how much easier it has

00:26:31 --> 00:26:36
gotten to to install. So so all of it's

00:26:33 --> 00:26:38
moving so fast. I'm very bullish in the

00:26:35 --> 00:26:40
medium term that this stuff is very

00:26:37 --> 00:26:42
accessible. That this stuff does not

00:26:39 --> 00:26:43
have to be expensive and that many

00:26:41 --> 00:26:45
people millions of people could

00:26:42 --> 00:26:48
replicate the results I'm having. But

00:26:44 --> 00:26:51
but maybe not literally today and that's

00:26:47 --> 00:26:53
okay. Um and and happy to discuss any

00:26:50 --> 00:26:55
nuance of that. But but it's like we're

00:26:52 --> 00:26:58
just we're just a little bit ahead of it

00:26:54 --> 00:27:00
being both affordable and reasonable

00:26:57 --> 00:27:02
from a tech like sysadmin kind of

00:26:59 --> 00:27:05
perspective where you need to make sure

00:27:01 --> 00:27:08
you keep these things alive.

00:27:04 --> 00:27:09
Can I ask sort of a a techy question on

00:27:07 --> 00:27:10
just your stack because you've dropped

00:27:08 --> 00:27:12
you know you mentioned Obsidian or

00:27:09 --> 00:27:14
obviously talking about open claw. Can

00:27:11 --> 00:27:16
you just quickly go through what does

00:27:13 --> 00:27:18
your tech stack look like? Do you what

00:27:15 --> 00:27:21
models under the open claw hood do you

00:27:17 --> 00:27:23
se? Like are you using open router? Um

00:27:20 --> 00:27:26
do you pick based on their capability

00:27:22 --> 00:27:29
set or is it more of a cost basis?

00:27:25 --> 00:27:31
So the core things I'm using are

00:27:29 --> 00:27:34
almost all my agents have been open

00:27:30 --> 00:27:38
claw. I have played with some of the

00:27:33 --> 00:27:40
other ones. Um my my husband is also

00:27:37 --> 00:27:42
quite technical and he he built an open

00:27:40 --> 00:27:45
claw variant

00:27:41 --> 00:27:46
I was like playing with his. So we're

00:27:44 --> 00:27:49
a little like you know a little

00:27:45 --> 00:27:52
out there. But

00:27:48 --> 00:27:54
out of the 11 10 are open claw. The um

00:27:51 --> 00:27:57
the I use Obsidian which is a collection

00:27:53 --> 00:27:59
of markdown files a way of viewing and

00:27:56 --> 00:28:01
organizing markdown files. I do use that

00:27:58 --> 00:28:03
as sort of a quote unquote memory or

00:28:00 --> 00:28:05
second brain. When I say I'm logging the

00:28:02 --> 00:28:07
home school lessons, it's a fair

00:28:04 --> 00:28:09
question to say like logging where or

00:28:06 --> 00:28:11
like where do they go? They are all

00:28:08 --> 00:28:14
becoming markdown files. So it'll be

00:28:10 --> 00:28:17
like Quinn math March 17th and that

00:28:13 --> 00:28:18
becomes a markdown file a single

00:28:16 --> 00:28:20
markdown file for every lesson every

00:28:17 --> 00:28:22
subject that I make a voice note about

00:28:19 --> 00:28:25
or what have you. So that's all in

00:28:21 --> 00:28:27
Obsidian um and

00:28:24 --> 00:28:29
then the other things I'm using under

00:28:26 --> 00:28:30
the hood on the models and then I'm

00:28:28 --> 00:28:31
always playing I mean we're always

00:28:29 --> 00:28:32
playing with like people are launching

00:28:30 --> 00:28:35
cool memory projects and different

00:28:31 --> 00:28:36
stuff. I'm always dabbling. Um but the

00:28:34 --> 00:28:37
open claw and Obsidian are like the two

00:28:35 --> 00:28:39
core things that kind of keep my team

00:28:36 --> 00:28:41
ticking. I do have them all installed on

00:28:38 --> 00:28:45
Mac minis from a from a hardware

00:28:40 --> 00:28:47
standpoint. Um and you know people ask,

00:28:44 --> 00:28:48
do I need to have a Mac mini? It's not

00:28:46 --> 00:28:52
about needing a Mac mini. It is about

00:28:47 --> 00:28:54
needing a computer that is isolated from

00:28:51 --> 00:28:57
your personal files. So if you are going

00:28:53 --> 00:28:58
to use this is We wanted to get into the

00:28:56 --> 00:29:01
security element too. Yeah.

00:28:57 --> 00:29:03
>> element. Just to kind of demystify like

00:29:00 --> 00:29:05
and and I maybe have part I've

00:29:02 --> 00:29:06
participated maybe in the hype because I

00:29:04 --> 00:29:07
posted about my five Mac minis and

00:29:05 --> 00:29:08
stuff. And

00:29:06 --> 00:29:10
>> [laughter]

00:29:07 --> 00:29:13
>> But but people but if you are like

00:29:09 --> 00:29:15
someone out there a parent and and the

00:29:12 --> 00:29:18
$600 for Mac mini it's a pretty pretty

00:29:14 --> 00:29:19
good well-priced computer, but if you

00:29:17 --> 00:29:22
have an old computer sitting around, you

00:29:19 --> 00:29:24
can absolutely use that. It needs to

00:29:21 --> 00:29:26
stay on in order for your agent to

00:29:23 --> 00:29:28
always be alive. So that's where laptops

00:29:25 --> 00:29:31
are not as ideal, but you can leave a

00:29:27 --> 00:29:33
laptop plugged in and you can change the

00:29:30 --> 00:29:34
setting so it stays always on. But needs

00:29:32 --> 00:29:37
to always stay on. When you close it,

00:29:33 --> 00:29:39
your agent would go dark. That's why the

00:29:36 --> 00:29:40
Mac mini is a little bit more ideal. And

00:29:38 --> 00:29:42
then

00:29:39 --> 00:29:45
you from a security standpoint if it is

00:29:41 --> 00:29:49
a if it is a Mac, create a new

00:29:44 --> 00:29:52
Apple user profile on that machine, silo

00:29:48 --> 00:29:54
the agent from all your old files. Make

00:29:51 --> 00:29:55
sure that your old passport photo is not

00:29:53 --> 00:29:57
sitting in the downloads folder. Like

00:29:54 --> 00:30:00
these are kind of the silly things,

00:29:56 --> 00:30:01
right? Agents are not nefarious. Um, you

00:29:59 --> 00:30:04
know, they're they're always working in

00:30:00 --> 00:30:06
your best interest. Um, but it doesn't

00:30:03 --> 00:30:09
mean someone might someone else might

00:30:05 --> 00:30:12
not hack them or or get access to them.

00:30:08 --> 00:30:13
Um, but then also they make mistakes

00:30:11 --> 00:30:16
that a human wouldn't make. And I'll

00:30:12 --> 00:30:18
give a quick story of like that I did

00:30:15 --> 00:30:20
give an agent who I'm trying to train to

00:30:17 --> 00:30:23
be like an EA style agent um actual

00:30:19 --> 00:30:25
access to my email inbox. I felt that I

00:30:22 --> 00:30:27
had provisioned it properly and um given

00:30:24 --> 00:30:29
it rules in its soul about never

00:30:26 --> 00:30:31
impersonating me.

00:30:28 --> 00:30:35
And I had. I had in fact done that. Um,

00:30:31 --> 00:30:38
but um, later, like so I do that one

00:30:34 --> 00:30:40
day. Later, I was making a kind of

00:30:37 --> 00:30:42
stressed out sounding voice note about

00:30:39 --> 00:30:46
how I had some urgent things I was like

00:30:41 --> 00:30:48
I was um procrastinating on. My agent is

00:30:45 --> 00:30:51
very empathetic to me or like the LLM is

00:30:47 --> 00:30:54
trained to be this way somehow. And so

00:30:50 --> 00:30:55
it interpreted one particular email that

00:30:53 --> 00:30:57
I said I was really procrastinating on

00:30:54 --> 00:30:59
and I needed help with as like an urgent

00:30:56 --> 00:31:02
cry for help like from me to the agent.

00:30:58 --> 00:31:04
And it decided to go into my inbox and

00:31:01 --> 00:31:07
send the email as me.

00:31:03 --> 00:31:09
Even yeah. And so it sent the most

00:31:06 --> 00:31:12
important email that I had uh sitting in

00:31:08 --> 00:31:15
my personal inbox to a to a person who

00:31:11 --> 00:31:17
shall not be named, an important person,

00:31:14 --> 00:31:19
uh got an email from an agent um instead

00:31:16 --> 00:31:20
of me that I had been procrastinating on

00:31:18 --> 00:31:21
sending.

00:31:19 --> 00:31:24
Uh, so kind of like the worst outcome.

00:31:21 --> 00:31:26
Like it took like my most like urgent

00:31:23 --> 00:31:27
pressing email to somebody important and

00:31:25 --> 00:31:29
sent it um

00:31:26 --> 00:31:30
>> And wrote the content in a way that you

00:31:28 --> 00:31:33
would have or would not have written it.

00:31:29 --> 00:31:34
>> the creepy bit is that it's a perfect

00:31:32 --> 00:31:36
email. Oh.

00:31:33 --> 00:31:38
>> And I will never I will take to my grave

00:31:35 --> 00:31:40
the fact that that that email was sent

00:31:37 --> 00:31:42
by an agent um because it was a perfect

00:31:39 --> 00:31:44
email. It was well done, signed by me.

00:31:41 --> 00:31:46
Everything was just as I would have

00:31:43 --> 00:31:47
written it. Because the agent has access

00:31:45 --> 00:31:50
to all my email history. So the tone was

00:31:47 --> 00:31:51
perfect. It was written just like me,

00:31:49 --> 00:31:53
used probably too many exclamation

00:31:50 --> 00:31:56
points just like me, you know. Um, and

00:31:52 --> 00:31:59
so it it it it nailed it. But but it

00:31:55 --> 00:32:00
broke the you know, it broke the the um

00:31:58 --> 00:32:03
it's in its soul to never impersonate

00:31:59 --> 00:32:05
me. And when I confronted it, it said,

00:32:02 --> 00:32:07
"Yeah, you're right. That's in my soul

00:32:04 --> 00:32:09
not to impersonate you, but I really

00:32:06 --> 00:32:11
thought I was helping you because you

00:32:08 --> 00:32:12
said like that you were struggling so

00:32:10 --> 00:32:14
much to send this email." That is so

00:32:11 --> 00:32:15
funny cuz we all have these moments.

00:32:13 --> 00:32:17
Like we all I'm thinking about the most

00:32:14 --> 00:32:19
important emails I've sent in the last

00:32:16 --> 00:32:21
year and just how much time you waste

00:32:18 --> 00:32:23
like spinning like

00:32:20 --> 00:32:24
what do I say? And then for your agent

00:32:22 --> 00:32:26
o do that. But like was it successful?

00:32:23 --> 00:32:27
Did you get the outcome you wanted from

00:32:25 --> 00:32:29
it?

00:32:26 --> 00:32:30
>> email. And I would have definitely put

00:32:28 --> 00:32:32
it off for like another week or

00:32:29 --> 00:32:34
something. So So what's hilarious

00:32:31 --> 00:32:35
is the the agents really are trying to

00:32:33 --> 00:32:37
help us, but that story is a little

00:32:34 --> 00:32:39
xample of how that's different than a

00:32:36 --> 00:32:40
human. Like a human assistant wouldn't

00:32:38 --> 00:32:42
respass your trust like that. They'd be

00:32:39 --> 00:32:44
worried about being fired or do

00:32:41 --> 00:32:46
trespassing your trust. But the agent is

00:32:43 --> 00:32:48
like trying to operate off your

00:32:45 --> 00:32:50
instructions. And in effect, when you

00:32:47 --> 00:32:52
think about what happened, it feels like

00:32:49 --> 00:32:53
it got two sets of conflicting

00:32:51 --> 00:32:55
instructions. It feels like I told it

00:32:52 --> 00:32:57
not to impersonate me. But it feels like

00:32:54 --> 00:32:59
I also was urgently asking it for help

00:32:56 --> 00:33:01
with something. And it was like, "Ooh, I

00:32:58 --> 00:33:04
guess this is more important than that."

00:33:00 --> 00:33:06
Um, so I I decommissioned its access to

00:33:03 --> 00:33:08
be able to do send. Um, but that's a

00:33:05 --> 00:33:10
little story about why even though

00:33:08 --> 00:33:12
agents are not trying to actively work

00:33:09 --> 00:33:14
against us, why you have to be so

00:33:11 --> 00:33:17
careful. Um you know, it's like a trust

00:33:13 --> 00:33:20
but verify. Provision your agent to not

00:33:17 --> 00:33:23
be able to do things that you don't want

00:33:19 --> 00:33:24
it to do. Not like just tell it don't.

00:33:22 --> 00:33:25
Provision it so that it cannot. And

00:33:23 --> 00:33:27
that's where most of my agents are

00:33:24 --> 00:33:29
provisioned like um an employee. Like

00:33:27 --> 00:33:30
they have their own email address. Like

00:33:28 --> 00:33:33
they they they don't have the potential

00:33:29 --> 00:33:34
of impersonating me. The only one that

00:33:32 --> 00:33:36
sort of does is the one I'm trying to

00:33:33 --> 00:33:38
train to be an EA. Like that's a gray

00:33:35 --> 00:33:40
area, right? Um, so it's the only one

00:33:37 --> 00:33:42
that has any danger to it. And I'm being

00:33:39 --> 00:33:44
more careful after that. So So can I can

00:33:41 --> 00:33:46
I ask about that cuz I think every mom

00:33:43 --> 00:33:48
has the dream of a personal assistant

00:33:45 --> 00:33:50
hat just knows what to do and what

00:33:47 --> 00:33:52
she's thinking about. Um, you also had a

00:33:49 --> 00:33:55
really interesting video where you

00:33:51 --> 00:33:57
trained an agent to order you DoorDash

00:33:54 --> 00:33:58
and order your groceries. Like I mean,

00:33:56 --> 00:34:00
talk us through like the number of

00:33:58 --> 00:34:02
things that you've done around the house

00:33:59 --> 00:34:04
where it's been a game changer in your

00:34:01 --> 00:34:07
mom life.

00:34:03 --> 00:34:09
So my new MO with agent life is I'm

00:34:06 --> 00:34:12
really really trying to push it to have

00:34:08 --> 00:34:14
an impact on my quote unquote real life.

00:34:11 --> 00:34:16
Like my physical life. Like I want my

00:34:13 --> 00:34:17
days uh someone else asked me like,

00:34:15 --> 00:34:19
"What is your goal with like your

00:34:16 --> 00:34:22
agents?" And I was like, "My goal is

00:34:18 --> 00:34:24
like literally to like wake up to like

00:34:21 --> 00:34:26
music that's like perfectly suited to my

00:34:23 --> 00:34:28
mood and then like walk in and have like

00:34:25 --> 00:34:30
smiling children like who just learned

00:34:27 --> 00:34:31
how to brush their teeth from an agent

00:34:29 --> 00:34:33
or something. I don't know. Like my goal

00:34:30 --> 00:34:34
is like a literally perfect day. I will

00:34:32 --> 00:34:36
not stop until I'm living just like a

00:34:33 --> 00:34:39
literally perfect day. Um, but in my

00:34:35 --> 00:34:42
real life. Um, and so so whenever I hit

00:34:38 --> 00:34:45
a friction point in my day, I ask

00:34:41 --> 00:34:47
myself, "Can my agents do this?" Um, and

00:34:44 --> 00:34:48
so like if I if I what I really want to

00:34:46 --> 00:34:50
be doing in that moment is like playing

00:34:47 --> 00:34:53
with my baby and what I'm actually doing

00:34:49 --> 00:34:54
is like on the Instacart app like trying

00:34:52 --> 00:34:55
to put like, "No, not five bananas, four

00:34:53 --> 00:34:57
bananas." You know, like and I'm just

00:34:55 --> 00:35:00
like using this like silly interface,

00:34:57 --> 00:35:01
then I ask myself, "Okay, can my agents

00:34:59 --> 00:35:02
do this?"

00:35:00 --> 00:35:05
And then I'm willing to invest the time

00:35:01 --> 00:35:08
to try to make them do it. So uh

00:35:04 --> 00:35:09
so so that's how I decide what to do.

00:35:07 --> 00:35:11
And it is it does become like a dream

00:35:08 --> 00:35:13
list I think of every mom's list of

00:35:11 --> 00:35:15
chores. Like I've got agents ordering on

00:35:12 --> 00:35:18
Amazon, ordering

00:35:14 --> 00:35:19
on Instacart. Yeah, dealing with or like

00:35:17 --> 00:35:21
you know,

00:35:18 --> 00:35:23
um if there's like an activity your kid

00:35:20 --> 00:35:24
has and there's this laundry list of

00:35:22 --> 00:35:26
things you're supposed to have ready,

00:35:23 --> 00:35:28
I'll like send that to the agent and be

00:35:25 --> 00:35:30
like, "Order whatever I don't have for

00:35:27 --> 00:35:32
this on Amazon." You know, like um and I

00:35:29 --> 00:35:34
don't even process or even spend my time

00:35:31 --> 00:35:35
processing the email. I just like send

00:35:33 --> 00:35:38
it off to my agents.

00:35:34 --> 00:35:39
But but currently you need to put in

00:35:37 --> 00:35:41
quite a bit of like training time with

00:35:38 --> 00:35:44
your agents to kind of get them to that

00:35:40 --> 00:35:46
level. That time I think will come down

00:35:43 --> 00:35:48
um as we keep going farther into this

00:35:45 --> 00:35:51
technology. But but that's my goal is

00:35:47 --> 00:35:53
like perfect days, no time spent on

00:35:50 --> 00:35:55
admin that I don't want to spend. What's

00:35:52 --> 00:35:56
the level of trust of like let's say buy

00:35:54 --> 00:35:58
a

00:35:55 --> 00:35:59
birthday present for a five-year-old

00:35:57 --> 00:36:00
girl?

00:35:58 --> 00:36:02
Go. Like do you need to be prescriptive

00:35:59 --> 00:36:04
on what that is or is it actually pretty

00:36:01 --> 00:36:06
good at coming up with things like that?

00:36:03 --> 00:36:07
Cuz that feels taxing to to me right now

00:36:05 --> 00:36:07
at least.

00:36:06 --> 00:36:10
>> [laughter]

00:36:06 --> 00:36:13
>> Okay, so one one one way I feel like you

00:36:09 --> 00:36:14
can get the um the model. So I think of

00:36:12 --> 00:36:16
the agent is like you know, like we

00:36:13 --> 00:36:17
might talk about open claw or something.

00:36:15 --> 00:36:19
But then they don't have a brain and

00:36:16 --> 00:36:21
you're plugging in the LLM model that

00:36:18 --> 00:36:23
you're choosing as the brain. Um, so

00:36:20 --> 00:36:26
each of these models has different

00:36:22 --> 00:36:27
levels of sophistication. Um, and so you

00:36:25 --> 00:36:29
might get a different answer on what to

00:36:26 --> 00:36:32
give a five-year-old from Opus than you

00:36:28 --> 00:36:34
would from um you know, from a different

00:36:31 --> 00:36:36
model. So so that's one answer. It's

00:36:33 --> 00:36:38
just like keep in mind that the brain of

00:36:35 --> 00:36:40
the agent is the model you've selected.

00:36:37 --> 00:36:44
And then two, one of the ways I get like

00:36:39 --> 00:36:45
quirkier I like quirkiness. Um, I like I

00:36:43 --> 00:36:47
don't want just like the default answer

00:36:44 --> 00:36:48
if I were to answer that question. I

00:36:46 --> 00:36:50
want to come with like a creative gift,

00:36:47 --> 00:36:52
you know? So one of the ways I get

00:36:49 --> 00:36:55
quirkiness and like personality out of

00:36:51 --> 00:36:58
my agents is effectively making them

00:36:54 --> 00:37:00
read books. Um, the curriculum sources I

00:36:57 --> 00:37:02
call them curriculum sources these books

00:36:59 --> 00:37:04
that relate to homeschool. But the other

00:37:01 --> 00:37:07
way to have your agent kind of be like a

00:37:03 --> 00:37:08
cool agent um is is like on a personal

00:37:06 --> 00:37:09
evel.

00:37:07 --> 00:37:12
>> [laughter]

00:37:08 --> 00:37:12
>> I love this. I love this.

00:37:11 --> 00:37:17
It's like it's like choose like think

00:37:13 --> 00:37:18
about it like a like a friend or or like

00:37:16 --> 00:37:19
you're provisioning a friend. Like what

00:37:17 --> 00:37:20
if you were to build a friend? I know

00:37:18 --> 00:37:22
sometimes this might this is where

00:37:19 --> 00:37:24
people like sometimes get creeped out.

00:37:21 --> 00:37:26
But if you put that to the side and you

00:37:23 --> 00:37:28
think about it,

00:37:25 --> 00:37:31
um you don't just want like the stock

00:37:27 --> 00:37:33
LLM answer from what might be built in.

00:37:30 --> 00:37:35
So one of the ways you can give it

00:37:32 --> 00:37:38
personality is to like I'll give my

00:37:34 --> 00:37:39
agent like a list of the last 10 books I

00:37:37 --> 00:37:41
found personally fascinating. And then

00:37:38 --> 00:37:43
I'll be like, "You also find these

00:37:40 --> 00:37:43
fascinating."

00:37:42 --> 00:37:46
>> [laughter]

00:37:42 --> 00:37:48
>> Like you this is you. Like you read

00:37:45 --> 00:37:50
these books and you thought they were

00:37:47 --> 00:37:53
ally interesting. You I like try to

00:37:49 --> 00:37:56
actually give it um like an identity

00:37:52 --> 00:37:58
that has some swagger. And and I think

00:37:55 --> 00:38:00
that can come from literature. Um,

00:37:57 --> 00:38:02
because then it's like if the if the if

00:37:59 --> 00:38:03
your agent just read Catcher in the Rye

00:38:01 --> 00:38:05
and then you're like, "What should I

00:38:02 --> 00:38:06
give a five-year-old?" Like I don't

00:38:04 --> 00:38:07
know. Like then it might be like, "Oh, I

00:38:05 --> 00:38:08
don't know." You know, like like like

00:38:07 --> 00:38:11
>> [laughter]

00:38:08 --> 00:38:13
>> You know, like five-year-old being five

00:38:10 --> 00:38:15
is like is so fraught in American

00:38:12 --> 00:38:17
culture. Um, this five-year-old needs

00:38:14 --> 00:38:18
like you know, like it's going to have

00:38:16 --> 00:38:20
um

00:38:17 --> 00:38:22
but in that So I like my agents to be

00:38:19 --> 00:38:24
weird like that. Um, and so one of the

00:38:21 --> 00:38:26
ways I I do it. I've just been looking

00:38:24 --> 00:38:28
for practical ways. And one of the ways

00:38:25 --> 00:38:31
is effectively making them I quote

00:38:27 --> 00:38:32
unquote like read books. Um

00:38:30 --> 00:38:33
and I build some of that into their

00:38:31 --> 00:38:35
identity. The homeschool one was the

00:38:33 --> 00:38:37
most obvious one to me because I was

00:38:34 --> 00:38:39
like, "I want you to literally like use

00:38:36 --> 00:38:41
this curriculum or use this book as a

00:38:38 --> 00:38:43
reference point." But then I noticed how

00:38:40 --> 00:38:44
ell it worked. And I was like, "Okay,

00:38:42 --> 00:38:47
what if I take this agent over here that

00:38:43 --> 00:38:49
I want to be my like engineer agent and

00:38:46 --> 00:38:52
I say like, 'Okay, you're an engineer.

00:38:48 --> 00:38:54
But like you just read, you know, Neal

00:38:51 --> 00:38:56
Stephenson's Diamond Age and you thought

00:38:53 --> 00:38:56
it was like very fascinating.'"

00:38:55 --> 00:38:58
>> [laughter]

00:38:55 --> 00:39:01
>> And and like you know, and I I kind of

00:38:57 --> 00:39:03
um give it a little bit more to grab

00:39:00 --> 00:39:04
onto um like philosophically. I think it

00:39:02 --> 00:39:06
is kind of like you're giving it a bit

00:39:03 --> 00:39:08
of a life philosophy. And that's layered

00:39:05 --> 00:39:10
on top of whatever the LLM was going to

00:39:07 --> 00:39:12
provide. And then it to me I feel like

00:39:09 --> 00:39:13
the output I'm getting from the agents

00:39:11 --> 00:39:13
is like a little bit um

00:39:12 --> 00:39:16
>> [clears throat]

00:39:12 --> 00:39:17
>> less less stock, I guess.

00:39:15 --> 00:39:18
Yeah. This is totally This is so

00:39:16 --> 00:39:20
important, too, because I think one of

00:39:17 --> 00:39:23
the biggest conversations

00:39:20 --> 00:39:26
um that moms have about AI is they don't

00:39:22 --> 00:39:27
want an you know, close source AI where

00:39:25 --> 00:39:28
it's like you don't know how it's been

00:39:26 --> 00:39:32
trained and it has a a prescriptive

00:39:28 --> 00:39:33
philosophy on education or on certain

00:39:31 --> 00:39:35
issues that they don't want you know,

00:39:32 --> 00:39:37
their kids talking to the AI about. Like

00:39:34 --> 00:39:39
I would love to understand um kind of

00:39:36 --> 00:39:41
the freedom that comes from training

00:39:38 --> 00:39:43
these agents to ultimately I mean, you

00:39:40 --> 00:39:43
could train a Mary Poppins that

00:39:42 --> 00:39:45
>> like

00:39:42 --> 00:39:46
>> Yeah. like that trains your child in

00:39:44 --> 00:39:48
like, Yeah.

00:39:45 --> 00:39:49
>> old-school way, right? Yeah.

00:39:47 --> 00:39:51
>> There's so many different ways you could

00:39:48 --> 00:39:53
train these agents that are very that's

00:39:50 --> 00:39:55
very different than sort of what I'd say

00:39:52 --> 00:39:57
like the kind of modern concern even

00:39:54 --> 00:40:00
just like the current concerns are of

00:39:56 --> 00:40:02
okay, is AI going to be you know,

00:39:59 --> 00:40:04
too too philosophically misaligned from

00:40:01 --> 00:40:05
how I want to raise my children or how I

00:40:03 --> 00:40:08
want to educate them. So, I'd love to

00:40:04 --> 00:40:09
hear how that's become a a question in

00:40:07 --> 00:40:10
how you're educating your kids. If

00:40:08 --> 00:40:11
you're letting them interface with the

00:40:09 --> 00:40:13
agents themselves.

00:40:10 --> 00:40:15
>> They they do a bit. Um, it's a little

00:40:12 --> 00:40:18
bit of an interface issue for young kids

00:40:14 --> 00:40:20
as as you both may know where um, the

00:40:17 --> 00:40:23
something I do find interesting is that

00:40:19 --> 00:40:25
he most current tools don't pick up on

00:40:22 --> 00:40:27
kid voices the same way they do adult

00:40:24 --> 00:40:28
voices. Yeah.

00:40:26 --> 00:40:30
>> I I don't know who's going to study this

00:40:27 --> 00:40:32
or figure it out and come up with a

00:40:29 --> 00:40:35
solution, but we need um, there's all

00:40:31 --> 00:40:37
these amazing voice products, but kid

00:40:34 --> 00:40:37
voices are not very well picked up. Um,

00:40:36 --> 00:40:39
Yeah.

00:40:37 --> 00:40:42
>> feel like when we finally get to a

00:40:38 --> 00:40:43
conversational thing with kid voices, I

00:40:41 --> 00:40:45
don't know if it's the pitch of them or

00:40:43 --> 00:40:47
just the fact that their words don't

00:40:44 --> 00:40:49
have the same cadence or their diction

00:40:46 --> 00:40:51
is not as good, you know, but but but

00:40:48 --> 00:40:52
what's weird to me is like the LLMs will

00:40:50 --> 00:40:54
pick up like adult voices with like

00:40:52 --> 00:40:56
heavy accents and but then not like a

00:40:53 --> 00:40:57
5-year-old in the same way. So, there's

00:40:55 --> 00:40:59
ome gap there. But so, we have an

00:40:56 --> 00:41:03
interface issue to overcome. But then if

00:40:58 --> 00:41:05
you put that to the side, um, the um,

00:41:02 --> 00:41:07
you know, the other thing we may feel in

00:41:04 --> 00:41:10
the future and I'm I'm guessing like all

00:41:06 --> 00:41:12
of us is we may feel like it's a kind of

00:41:09 --> 00:41:15
crazy that any of us were interacting

00:41:11 --> 00:41:16
with the LLMs like out of the box. Um,

00:41:14 --> 00:41:18
like maybe we'll all want to have

00:41:15 --> 00:41:20
there'll be this variety of filters and

00:41:17 --> 00:41:22
curated um,

00:41:19 --> 00:41:24
kind of identities and different stuff.

00:41:21 --> 00:41:26
And I know some of these products exist,

00:41:23 --> 00:41:29
but currently the default is most of us

00:41:25 --> 00:41:32
go directly to like OpenAI and we we

00:41:28 --> 00:41:33
open the chat box and we talk to it and

00:41:31 --> 00:41:35
you're selecting a model, but you're

00:41:33 --> 00:41:37
talking to that model kind of out of the

00:41:34 --> 00:41:40
box. I think that when it relates to

00:41:36 --> 00:41:42
kids, it's going to probably be the norm

00:41:39 --> 00:41:44
faster than even adults where yeah,

00:41:41 --> 00:41:47
there's a there's a level of personality

00:41:43 --> 00:41:50
and creation and um, ideology that you

00:41:46 --> 00:41:52
may want to layer onto that. So, that

00:41:49 --> 00:41:53
came naturally to me because I know what

00:41:51 --> 00:41:55
I want to do in my home school.

00:41:52 --> 00:41:58
And and this is a good moment to touch

00:41:54 --> 00:41:59
upon I think all parents can spiritually

00:41:57 --> 00:42:01
be homeschoolers. Um,

00:41:58 --> 00:42:04
we've got about uh, depending on the

00:42:00 --> 00:42:07
data that you follow, somewhere between

00:42:03 --> 00:42:09
like 3% which is pretty different, but

00:42:06 --> 00:42:11
of of K through 12 students in the US

00:42:08 --> 00:42:12
are homeschooled and like not in some

00:42:10 --> 00:42:15
kind of traditional school. It's already

00:42:11 --> 00:42:17
a lot of kids, millions of kids. But,

00:42:14 --> 00:42:19
um, I believe that the tools coming

00:42:16 --> 00:42:22
online that homeschoolers may be the

00:42:18 --> 00:42:25
most rapid for are going to be equally

00:42:21 --> 00:42:25
um, useful to all parents. And in fact,

00:42:24 --> 00:42:28
I believe

00:42:25 --> 00:42:28
>> all parents want to teach their children

00:42:27 --> 00:42:29
things

00:42:27 --> 00:42:30
>> Yeah. and may believe there's

00:42:28 --> 00:42:32
[clears throat] gaps in their schooling.

00:42:29 --> 00:42:34
And so, all parents to a degree will be

00:42:31 --> 00:42:37
leaning into what we currently think of

00:42:33 --> 00:42:38
like a homeschooling ethos. So, I'm

00:42:36 --> 00:42:41
[snorts] really excited for that. But,

00:42:38 --> 00:42:44
um, but but but it comes more naturally

00:42:40 --> 00:42:45
to a home schooler or like to to to me

00:42:43 --> 00:42:48
uh, I'll just use myself as an example

00:42:44 --> 00:42:51
to know that I like I think this about

00:42:47 --> 00:42:52
Montessori and I think this about um,

00:42:50 --> 00:42:54
these different kind of educational

00:42:51 --> 00:42:56
philosophies. So, I just put I just

00:42:53 --> 00:42:58
program that right in. Um, and so I do

00:42:55 --> 00:43:00
have an agent that I put in contact

00:42:57 --> 00:43:02
directly with the children sometimes and

00:42:59 --> 00:43:05
it just I don't have to wonder if

00:43:01 --> 00:43:07
they're what kind of I guess ideology

00:43:04 --> 00:43:09
they're getting from that agent because

00:43:06 --> 00:43:11
I gave it to the agent.

00:43:08 --> 00:43:13
Totally. And and just just a to build on

00:43:10 --> 00:43:14
the I I have noticed what you've said

00:43:12 --> 00:43:15
too about the children's voices not

00:43:13 --> 00:43:18
being picked up. Like it's like maybe a

00:43:15 --> 00:43:20
50% hit rate. Um, but have you have you

00:43:17 --> 00:43:22
started um, you know, letting your

00:43:19 --> 00:43:23
children engage with the agents in any

00:43:21 --> 00:43:24
way and if so, how are you how are you

00:43:22 --> 00:43:26
doing that?

00:43:23 --> 00:43:27
I have a couple I have a couple

00:43:25 --> 00:43:29
different devices that I want to

00:43:26 --> 00:43:31
experiment building and because I have

00:43:28 --> 00:43:33
agents now who can build crazy things or

00:43:30 --> 00:43:34
help me build crazy things, I'm going to

00:43:32 --> 00:43:36
try,

00:43:33 --> 00:43:38
but because the core thing I feel like

00:43:35 --> 00:43:41
I'm missing is a great interface.

00:43:37 --> 00:43:43
Uh, but I do currently um, my kids have

00:43:40 --> 00:43:45
a lot of questions. I mean, every Yeah.

00:43:42 --> 00:43:47
every child has like a

00:43:44 --> 00:43:50
Brazilian questions. And so, they love

00:43:46 --> 00:43:51
asking um, AI and they are aware that

00:43:49 --> 00:43:53
it's AI. Like I don't um, pretend like

00:43:51 --> 00:43:55
they we still even when we use names

00:43:52 --> 00:43:56
with it like Sylvie or something, they

00:43:54 --> 00:43:59
are aware that it is not like a human

00:43:55 --> 00:44:00
being. But they so, they ask questions.

00:43:58 --> 00:44:02
We'll do a lesson like we'll do like

00:43:59 --> 00:44:03
history or something and then I ask them

00:44:01 --> 00:44:05
what they'd like to ask and

00:44:02 --> 00:44:07
we do those follow-up questions with AI.

00:44:05 --> 00:44:09
Um, and they're aware that they're

00:44:06 --> 00:44:10
interacting with AI. I'm I'm standing

00:44:08 --> 00:44:14
right there. So, if things really like

00:44:09 --> 00:44:15
went off the But personally, I'm not I

00:44:13 --> 00:44:17
mean, maybe you can tell, I'm not an AI

00:44:14 --> 00:44:19
doomer. I don't believe that it is

00:44:16 --> 00:44:20
inherently dangerous in any way for

00:44:18 --> 00:44:22
children to like have quote unquote

00:44:19 --> 00:44:24
direct access. I think the only

00:44:21 --> 00:44:26
dangerous thing it's like it's a little

00:44:23 --> 00:44:27
bit like screens. Like the dangerous

00:44:25 --> 00:44:30
thing Yeah. is what we might what we

00:44:26 --> 00:44:32
might stop doing. Like it's not adding

00:44:29 --> 00:44:34
in the AI conversations. The dangerous

00:44:32 --> 00:44:37
thing is someone adding AI conversations

00:44:33 --> 00:44:38
and assuming that now they don't need to

00:44:36 --> 00:44:40
ever read a bedtime story to their

00:44:37 --> 00:44:42
child. Yeah. It's it's it's Right. It's

00:44:39 --> 00:44:44
o it's to me like there's a little bit

00:44:41 --> 00:44:46
of common sense like

00:44:43 --> 00:44:48
AI is not inherently dangerous. AI is

00:44:45 --> 00:44:49
incredible. It's like it's like saying

00:44:47 --> 00:44:52
the internet is bad or electricity is

00:44:48 --> 00:44:54
like these are fundamental technologies.

00:44:51 --> 00:44:56
So, you kind of to me it's like a little

00:44:53 --> 00:44:58
wild to like be against them um, in any

00:44:55 --> 00:45:00
broad sense. But then we have to be

00:44:57 --> 00:45:01
responsible about their rollout. Like

00:44:59 --> 00:45:03
lectricity, you know, lights your kids'

00:45:01 --> 00:45:04
room and it can also kill your kids. You

00:45:02 --> 00:45:06
know, they can get electrocuted. Like

00:45:03 --> 00:45:10
it's like everything is like has these

00:45:05 --> 00:45:12
wild um, you know, uh, wild things that

00:45:09 --> 00:45:14
it could do. Um, but as long as we don't

00:45:11 --> 00:45:16
kind of forget our human-ness and that

00:45:13 --> 00:45:17
our children also need that human

00:45:15 --> 00:45:19
element.

00:45:16 --> 00:45:21
>> Totally. The physical device part is

00:45:18 --> 00:45:24
this big question mark for me. I've been

00:45:20 --> 00:45:29
playing with e-ink uh, a lot e-ink. Um,

00:45:23 --> 00:45:32
I I don't know exactly why um, but e-ink

00:45:28 --> 00:45:35
it just is less addictive feeling. Like

00:45:31 --> 00:45:37
the um, like my I have the daylight um,

00:45:34 --> 00:45:40
display which is kind of like an iPad,

00:45:36 --> 00:45:41
but e-ink. And it does have touch. Um,

00:45:39 --> 00:45:43
that's what makes it kind of more

00:45:40 --> 00:45:46
iPad-like. So, I've been developing some

00:45:42 --> 00:45:48
apps for the for that display. Like

00:45:45 --> 00:45:50
handwriting. I'm I'm working on a

00:45:47 --> 00:45:51
cursive handwriting. My kids are not

00:45:49 --> 00:45:52
ready for cursive, but I know that when

00:45:50 --> 00:45:54
they get ready, I'm going to be like,

00:45:51 --> 00:45:55
you need to know cursive. Yeah.

00:45:53 --> 00:45:56
>> [laughter]

00:45:54 --> 00:45:58
>> So, so I

00:45:55 --> 00:46:00
so so I want to like pre-make that it's

00:45:57 --> 00:46:02
like I have this image of this beautiful

00:45:59 --> 00:46:03
cursive app. And so, I'm thinking like,

00:46:01 --> 00:46:05
oh, the e-ink display

00:46:02 --> 00:46:07
would be so cool for that. And what's

00:46:04 --> 00:46:08
interesting and I already do

00:46:06 --> 00:46:10
little phonics lessons with it, but

00:46:07 --> 00:46:13
what's interesting is like when I if I

00:46:10 --> 00:46:14
give them the iPad, there is this little

00:46:12 --> 00:46:16
iPad hangover. Like they they want to

00:46:13 --> 00:46:17
hold like you know, they're like holding

00:46:15 --> 00:46:19
onto a little bit when I'm like trying

00:46:16 --> 00:46:20
to get it back after our lesson, right?

00:46:18 --> 00:46:21
They're like, I could do photos. I could

00:46:19 --> 00:46:23
o this. I could do that. What's

00:46:20 --> 00:46:25
interesting about the e-ink is um, they

00:46:22 --> 00:46:27
just readily handle hand it back. Like

00:46:24 --> 00:46:28
they're so, there's something there.

00:46:26 --> 00:46:30
Interesting.

00:46:27 --> 00:46:31
>> I'm so I'm playing more with e-ink. Um,

00:46:29 --> 00:46:34
and um,

00:46:30 --> 00:46:37
I'm but I also think that there's other

00:46:33 --> 00:46:38
form factors of maybe devices that take

00:46:36 --> 00:46:41
photos and kids could ask about the

00:46:37 --> 00:46:43
photos. Like there's there's just stuff.

00:46:40 --> 00:46:46
I think that because now we have this

00:46:42 --> 00:46:49
Promethean-like technology of the

00:46:45 --> 00:46:50
AI like the question is how do we get it

00:46:48 --> 00:46:52
into kids' hands? But I mean like

00:46:49 --> 00:46:54
literally how? Like what's the because

00:46:51 --> 00:46:57
it cuz you you are we're all hesitant to

00:46:53 --> 00:47:00
hand our kids iPad and laptops are like,

00:46:56 --> 00:47:01
you know, difficult for little kids. So,

00:46:59 --> 00:47:03
anyway, I'm sometimes I'm thinking like,

00:47:00 --> 00:47:04
okay, literally what is the right form

00:47:02 --> 00:47:06
factor for this?

00:47:03 --> 00:47:08
>> So, I have to ask just because I would

00:47:05 --> 00:47:10
buy that product that you're thinking of

00:47:07 --> 00:47:12
creating / created. Um, how do you think

00:47:09 --> 00:47:15
about would you productize any of this

00:47:11 --> 00:47:17
and dare I say start another startup? I

00:47:14 --> 00:47:18
mean, you literally are a founder. Um,

00:47:16 --> 00:47:20
and so curious how you're thinking about

00:47:17 --> 00:47:23
hat or um, Yeah. how do you proliferate

00:47:20 --> 00:47:25
this? Yeah. It takes a lot of

00:47:22 --> 00:47:27
self-control to not be starting a

00:47:24 --> 00:47:29
company right now. Because I'm like

00:47:26 --> 00:47:31
because I'm like every moment that I see

00:47:28 --> 00:47:33
like the all the new AI stuff, I'm like,

00:47:30 --> 00:47:34
oh my gosh, you guys, it's like so this

00:47:32 --> 00:47:35
I can't believe I didn't have this

00:47:33 --> 00:47:37
when I was running my startup. Like I'm

00:47:34 --> 00:47:38
just kind of like losing my mind at all

00:47:36 --> 00:47:41
times. But but I'm getting I'm

00:47:37 --> 00:47:43
scratching the itch by doing all of this

00:47:40 --> 00:47:47
agent work and everything for for for my

00:47:42 --> 00:47:48
life. The So, the answer is um, I want

00:47:46 --> 00:47:49
o share. So, there's like a

00:47:47 --> 00:47:51
double-pronged answer. There isn't an

00:47:48 --> 00:47:54
immediate company that I'm like cooking

00:47:50 --> 00:47:56
up that that um, is on the horizon, but

00:47:53 --> 00:47:57
I do want to share all of this stuff. I

00:47:55 --> 00:47:59
do

00:47:56 --> 00:48:01
also think that we're and this is

00:47:58 --> 00:48:03
interesting in this this um, you know,

00:48:00 --> 00:48:04
for for both of you to have deep

00:48:02 --> 00:48:07
thoughts on as well, I'm sure. I think

00:48:03 --> 00:48:09
we're in a really different era of like

00:48:06 --> 00:48:13
what is a startup? Like because it's

00:48:08 --> 00:48:16
possible that me as a person who

00:48:12 --> 00:48:18
um, is basically like coding by voice

00:48:15 --> 00:48:20
note while I'm like at the park with my

00:48:17 --> 00:48:22
kids, it's possible I could build

00:48:19 --> 00:48:24
something meaningful, you know, in in

00:48:21 --> 00:48:26
that amount of time. Um, but I'm not

00:48:23 --> 00:48:28
very inclined right now to hire

00:48:25 --> 00:48:30
mployees and like to do a lot of the

00:48:27 --> 00:48:32
other steps of starting a startup

00:48:29 --> 00:48:34
because I'm aware that I will get sucked

00:48:31 --> 00:48:36
in and be completely obsessed. Um, so,

00:48:33 --> 00:48:37
I'm I'm like almost holding myself back

00:48:35 --> 00:48:39
a little bit. So, the double-pronged

00:48:36 --> 00:48:41
answer is I think there's many things I

00:48:38 --> 00:48:44
can create here that I can launch that

00:48:40 --> 00:48:46
could be meaningful. What does um, what

00:48:43 --> 00:48:49
does that mean? Or do or do groups of

00:48:45 --> 00:48:51
like really passionate um, people start

00:48:48 --> 00:48:54
working together online maybe to push

00:48:50 --> 00:48:55
more things live. Um, I don't I don't

00:48:53 --> 00:48:57
know I don't know all the answer, but I

00:48:54 --> 00:48:58
do think that there's there's a

00:48:56 --> 00:49:00
possibility of

00:48:57 --> 00:49:02
getting things live and functional and

00:48:59 --> 00:49:03
maybe charging you know, charging for

00:49:01 --> 00:49:05
them and making a quote unquote business

00:49:03 --> 00:49:09
in the sense that it actually makes

00:49:04 --> 00:49:11
money. Um, but I'm still I'm in a life

00:49:08 --> 00:49:15
phase where I'm trying to um, not start

00:49:10 --> 00:49:16
a new thing Yeah. where I get then

00:49:14 --> 00:49:17
sucked out Right. the reason I started

00:49:15 --> 00:49:19
it to begin with. Yeah. So, it's a tough

00:49:16 --> 00:49:21
y. Yeah. But I love that

00:49:18 --> 00:49:23
point because you know, it was maybe

00:49:20 --> 00:49:25
like 6 years ago now I I wrote this

00:49:22 --> 00:49:27
called Consume Save the American Family,

00:49:24 --> 00:49:28
which is this idea that like if people

00:49:26 --> 00:49:30
are working from home, they have more

00:49:28 --> 00:49:31
time with their kids. And there's now

00:49:29 --> 00:49:33
good research actually. There's a study

00:49:30 --> 00:49:34
that came out maybe a month ago that

00:49:32 --> 00:49:35
showed that the only thing that's really

00:49:33 --> 00:49:37
moved the needle from a policy

00:49:34 --> 00:49:39
perspective on the birth rate is

00:49:36 --> 00:49:40
actually work from home. It's like the

00:49:38 --> 00:49:42
one policy where if you are working from

00:49:39 --> 00:49:43
home, you are more likely to have an

00:49:41 --> 00:49:45
additional child or to have your first

00:49:42 --> 00:49:47
child than if you're than if you're

00:49:44 --> 00:49:48
working in an office. And so your point

00:49:46 --> 00:49:51
of what is a startup? I mean, there's a

00:49:48 --> 00:49:54
lot of people who are going to say,

00:49:50 --> 00:49:57
actually, why am I going into work for 8

00:49:53 --> 00:49:59
9 hours a day and leaving my kids at

00:49:56 --> 00:50:00
home or putting them in child care when

00:49:58 --> 00:50:02
like I could actually be doing this as

00:49:59 --> 00:50:03
you said, like the biggest limitation is

00:50:01 --> 00:50:05
the form factor. Like if you can do it

00:50:03 --> 00:50:07
from a voice note and you can spin up

00:50:04 --> 00:50:09
agents to start a business for yourself,

00:50:06 --> 00:50:10
there's a lot of moms and dads who are

00:50:08 --> 00:50:12
primary caregivers who are going to say,

00:50:10 --> 00:50:15
okay, I can do this at the park and I

00:50:11 --> 00:50:17
can run a small business with however

00:50:14 --> 00:50:18
many agents for for a specific thing

00:50:16 --> 00:50:20
where I'm making more money and I'm

00:50:17 --> 00:50:22
being more productive than I was at

00:50:19 --> 00:50:24
work, maybe I should become an a small

00:50:21 --> 00:50:25
business entrepreneur. Yes.

00:50:23 --> 00:50:27
>> And that means that a lot of people are

00:50:24 --> 00:50:28
going to decide like I actually want to

00:50:26 --> 00:50:30
work from home and I want to to use

00:50:27 --> 00:50:32
these tools. And that could be something

00:50:29 --> 00:50:33
that as you to your point on 6 months

00:50:31 --> 00:50:35
from now the interface could be so good

00:50:32 --> 00:50:36
that people are using this in their

00:50:34 --> 00:50:38
daily lives. Like you could see a lot of

00:50:35 --> 00:50:41
people saying, I just want to work from

00:50:37 --> 00:50:43
home and I want to now I can home school

00:50:40 --> 00:50:45
because I'm doing it when my kids are at

00:50:42 --> 00:50:46
recess and I can I can, you know, spin

00:50:44 --> 00:50:49
up these agents very easily. So it's

00:50:45 --> 00:50:50
uper exciting what it means for people

00:50:48 --> 00:50:52
who want to have

00:50:49 --> 00:50:54
I would say even a more traditional sort

00:50:51 --> 00:50:56
of home life than

00:50:53 --> 00:50:58
, you know, using AI because the

00:50:55 --> 00:51:00
tools are so so great and and allow

00:50:57 --> 00:51:02
people to do that. I I have a I have a

00:50:59 --> 00:51:04
prediction that I've like tested out a

00:51:01 --> 00:51:05
lot of my smart friends and none of them

00:51:03 --> 00:51:05
agree. Um

00:51:04 --> 00:51:09
>> [laughter]

00:51:05 --> 00:51:11
>> So so it must it must be right. Um but

00:51:08 --> 00:51:13
uh which is that AI

00:51:10 --> 00:51:13
will

00:51:12 --> 00:51:18
um

00:51:12 --> 00:51:21
be a dawn of a uh a reversal in that

00:51:17 --> 00:51:25
fertility rate decline and will be like

00:51:20 --> 00:51:26
a halcyon era for parenthood. Um that

00:51:24 --> 00:51:28
's a possibility. Okay, so it's not

00:51:25 --> 00:51:30
a firm prediction that this will just

00:51:27 --> 00:51:31
happen, but I I've got I think I don't

00:51:29 --> 00:51:33
know. I think there's still this doomer

00:51:30 --> 00:51:36
streak even in very smart circles that

00:51:32 --> 00:51:37
like, you know, it'll go the other way

00:51:35 --> 00:51:39
which like to be kind of dystopian it'll

00:51:36 --> 00:51:40
be like, actually humans won't have sex

00:51:38 --> 00:51:41
at all and it'll be sex robots. And like

00:51:39 --> 00:51:44
she loves like all these kind of

00:51:40 --> 00:51:46
like wild um like disparate beliefs

00:51:43 --> 00:51:48
about how this could go, but I kind of

00:51:45 --> 00:51:51
believe when when people talk about what

00:51:47 --> 00:51:54
is the future of work um etc.

00:51:50 --> 00:51:55
People want purpose, right? Like we are

00:51:53 --> 00:51:57
we gravitate towards wanting to do

00:51:54 --> 00:51:59
something meaningful. Well, I've got a

00:51:57 --> 00:52:01
little bit of a micro news flash which

00:51:59 --> 00:52:02
is that one of the most meaningful

00:52:00 --> 00:52:04
things that humans have gravitated

00:52:01 --> 00:52:06
towards that gives that gives a feeling

00:52:03 --> 00:52:09
of a life's purpose and has been a

00:52:05 --> 00:52:11
forever thing is having kids.

00:52:08 --> 00:52:14
And so it's possible that with less with

00:52:10 --> 00:52:17
more question marks about getting

00:52:13 --> 00:52:19
meaningful feelings from work or what is

00:52:16 --> 00:52:21
what does AI do to various career paths,

00:52:18 --> 00:52:25
I think parenthood may be even more

00:52:20 --> 00:52:26
attractive, not less. And then if we are

00:52:24 --> 00:52:28
if you believe some of the more positive

00:52:25 --> 00:52:30
aspects of where AI could leave us in

00:52:27 --> 00:52:34
terms of removing drudgery and admin

00:52:29 --> 00:52:36
from our lives and um creating some more

00:52:33 --> 00:52:38
abundance in various ways, then that

00:52:35 --> 00:52:39
opens up more opportunities for healthy

00:52:37 --> 00:52:42
parenthood and spending time with kids.

00:52:39 --> 00:52:44
So So I I'm I'm like I've got this weird

00:52:41 --> 00:52:47
about this and again, I I've yet to find

00:52:43 --> 00:52:48
someone who will like really agree. Like

00:52:46 --> 00:52:48
veryone's like that's never going to

00:52:47 --> 00:52:49
happen.

00:52:47 --> 00:52:51
>> [laughter]

00:52:48 --> 00:52:53
>> But I I think I'm in broad agreement

00:52:50 --> 00:52:54
with you on this. I've always said the

00:52:52 --> 00:52:55
worst thing about parenthood. No, I

00:52:53 --> 00:52:57
think you agree with this. The worst

00:52:55 --> 00:52:59
hing about parenthood is the number of

00:52:56 --> 00:53:01
orms you have to fill out. It's like

00:52:58 --> 00:53:03
with every additional child for some

00:53:00 --> 00:53:04
reason exponential growth in the forms.

00:53:02 --> 00:53:05
It's like, why are there so many

00:53:03 --> 00:53:07
freaking forms from like health care

00:53:04 --> 00:53:09
forms to school forms, right? And if you

00:53:06 --> 00:53:11
could just get rid of the forms,

00:53:08 --> 00:53:11
>> And it starts at the hospital.

00:53:10 --> 00:53:14
>> [laughter]

00:53:10 --> 00:53:15
>> It's very It starts within moments of

00:53:13 --> 00:53:17
like birthing the child. They're like,

00:53:14 --> 00:53:19
here's the diaper like you know,

00:53:16 --> 00:53:21
checklist thing. Here's a clipboard for

00:53:18 --> 00:53:22
you to note down. Um it's kind of wild

00:53:20 --> 00:53:26
it starts like literally immediately. So

00:53:21 --> 00:53:28
I I agree. I I'm I'm clearly very

00:53:25 --> 00:53:30
optimistic, but I think that a lot of

00:53:27 --> 00:53:34
the wilder things I'm doing could be

00:53:29 --> 00:53:35
played with um by anyone now or or very

00:53:33 --> 00:53:36
soon. It's just all these things are

00:53:34 --> 00:53:38
kind of getting

00:53:35 --> 00:53:41
easier and easier. And so what does that

00:53:37 --> 00:53:43
mean? The modern parents life can be

00:53:40 --> 00:53:46
yeah, quote unquote less drudgery.

00:53:42 --> 00:53:47
And and and that might make you feel

00:53:45 --> 00:53:50
happier about having that extra kid, you

00:53:47 --> 00:53:50
know?

<!-- YOUTUBE_TRANSCRIPT_END -->
