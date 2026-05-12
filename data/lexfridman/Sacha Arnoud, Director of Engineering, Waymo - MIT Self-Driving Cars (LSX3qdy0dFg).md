---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "LSX3qdy0dFg"
title: "Sacha Arnoud, Director of Engineering, Waymo - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=LSX3qdy0dFg"
thumbnail_url: "https://i.ytimg.com/vi/LSX3qdy0dFg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=LSX3qdy0dFg"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-02-16T15:29:31.000Z"
upload_date: "2018-02-16"
duration_seconds: 4402
duration_human: "1:13:22"
view_count: 108642
like_count: 1427
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:19:31.921Z"
---

# Sacha Arnoud, Director of Engineering, Waymo - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=LSX3qdy0dFg
- video_id: LSX3qdy0dFg
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-02-16T15:29:31.000Z
- upload_date: 2018-02-16
- duration: 1:13:22
- view_count: 108642
- like_count: 1427
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018, computer vision, waymo, industry, google
- categories: Science & Technology

## Description

This is a talk by Sacha Arnoud for course 6.S094: Deep Learning for Self-Driving Cars (2018 version). Sacha is the Director of Engineering at Waymo and his talk is titled "The rise of machine learning in self-driving cars." This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

INFO:
Course website: https://selfdrivingcars.mit.edu
Contact: deepcars@mit.edu

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

LINKS:
Playlist: https://goo.gl/SLCb1y
Lecture 1: Deep Learning - https://youtu.be/-6INDaLcuJY
Lecture 2: Self-Driving Cars - https://youtu.be/_OCjqIgxwHw
Lecture 3: Deep Reinforcement Learning - https://youtu.be/MQ6pP65o7OM
Lecture 4: Computer Vision - https://youtu.be/CLOAswsxudo
Lecture 5: Deep Learning for Human Sensing - https://youtu.be/Z2GfE8pLyxc

Guest talk: Sacha Arnoud, Waymo - https://youtu.be/LSX3qdy0dFg
Guest talk: Emilio Frazolli, nuTonomy - https://youtu.be/dWSbItd0HEA
Guest talk: Sterling Anderson, Aurora - https://youtu.be/HKBhP9JISF0

2017:
Guest talk: Sertac Karaman, MIT - https://youtu.be/0fLSf3NO0-s
Guest talk: Chris Gerdes, Stanford - https://youtu.be/LDprUza7yT4

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
today we have the director of

00:00:01 --> 00:00:09
engineering head of perception at way mo

00:00:04 --> 00:00:12
a company that's recently driven over

00:00:08 --> 00:00:16
four million miles autonomously and in

00:00:11 --> 00:00:18
so doing inspired the world in what

00:00:15 --> 00:00:21
artificial intelligence and good

00:00:17 --> 00:00:25
engineering can do so please give a warm

00:00:20 --> 00:00:28
welcome to Sasha our new

00:00:24 --> 00:00:32
[Applause]

00:00:27 --> 00:00:34
thanks a lot Lex for the introduction

00:00:31 --> 00:00:37
well it's it's a pretty packed house

00:00:33 --> 00:00:40
thanks a lot I'm really excited thanks a

00:00:36 --> 00:00:43
lot for giving me the opportunity to to

00:00:39 --> 00:00:45
be able to come and share my passion

00:00:42 --> 00:00:47
with the Seb driving cars and be able to

00:00:44 --> 00:00:50
share with you all the great work we've

00:00:46 --> 00:00:53
been doing at Weimer over the last 10

00:00:49 --> 00:00:56
years and give you more details on the

00:00:52 --> 00:00:59
recent milestones we've reached

00:00:55 --> 00:01:02
so as you see we'll cover a lot of

00:00:58 --> 00:01:08
different topics some more technical

00:01:01 --> 00:01:11
some more about context but when either

00:01:07 --> 00:01:14
the content I have three main objectives

00:01:10 --> 00:01:16
that that I'd like to convey today so

00:01:13 --> 00:01:18
keep that in mind as we go through the

00:01:15 --> 00:01:24
presentation my first one is

00:01:17 --> 00:01:27
to give you some background around

00:01:23 --> 00:01:28
the self-driving space and what's

00:01:26 --> 00:01:31
happening there and what it takes to

00:01:27 --> 00:01:34
build self-driving cars but also give

00:01:30 --> 00:01:38
you some some behind the scene views and

00:01:33 --> 00:01:40
tidbits on on the history of machine

00:01:37 --> 00:01:42
learning deep learning and how it how it

00:01:39 --> 00:01:45
all came together within the big

00:01:41 --> 00:01:48
alphabet family from Google to way moe

00:01:44 --> 00:01:51
another piece obviously another

00:01:47 --> 00:01:54
objective I have is to give you some

00:01:50 --> 00:01:55
technical meat around the techniques

00:01:53 --> 00:01:57
that are working today on our

00:01:54 --> 00:02:00
self-driving cars so I think during the

00:01:56 --> 00:02:03
class you hear a lot you've heard a

00:01:59 --> 00:02:05
lot about different different deep

00:02:02 --> 00:02:08
learning techniques models architectures

00:02:04 --> 00:02:11
algorithms and I try to put that in a

00:02:07 --> 00:02:12
current hole so that you can you can see

00:02:10 --> 00:02:15
how those pieces fit together to build a

00:02:11 --> 00:02:18
system we have today and has been at

00:02:14 --> 00:02:21
least I think as Lex mentioned

00:02:17 --> 00:02:24
it takes a lot more actually than

00:02:20 --> 00:02:26
algorithms to build a sophisticated

00:02:23 --> 00:02:30
system such as our self-driving cars and

00:02:26 --> 00:02:32
fundamentally it takes a a food

00:02:29 --> 00:02:34
industrial project to make that happen

00:02:31 --> 00:02:36
and I'll try to give you some color with

00:02:33 --> 00:02:37
which hopefully is it are different from

00:02:35 --> 00:02:41
what you've heard during the week

00:02:36 --> 00:02:44
I'll try to give you some color on what

00:02:40 --> 00:02:46
it takes to actually pan out such an

00:02:43 --> 00:02:48
industrial project in real life and make

00:02:45 --> 00:02:54
an essentially productionize machine

00:02:47 --> 00:02:56
learning so we hear a lot of talk we

00:02:53 --> 00:02:59
hear a lot about self-driving cars it's

00:02:55 --> 00:03:02
a very hot topic and for very good

00:02:58 --> 00:03:05
reasons I can tell you for sure that

00:03:01 --> 00:03:08
2017 has been a great year for whammo

00:03:04 --> 00:03:13
actually only a year ago in January 2017

00:03:08 --> 00:03:14
when Moe became its own company so that

00:03:12 --> 00:03:17
was a major milestone and a testimony to

00:03:13 --> 00:03:19
the to the robustness of distribution so

00:03:16 --> 00:03:21
that we could move to a product product

00:03:18 --> 00:03:26
is Asian phase so what you see on the

00:03:20 --> 00:03:30
picture here is our latest generation

00:03:25 --> 00:03:33
self-driving vehicle so it is based on

00:03:29 --> 00:03:35
the chrysler pacifica you can already

00:03:32 --> 00:03:37
see a bunch of sensors I'll come back to

00:03:34 --> 00:03:40
that and give you more more insights on

00:03:36 --> 00:03:41
what they do and how they operate but

00:03:39 --> 00:03:46
hat's that that's the latest and

00:03:40 --> 00:03:48
greatest so self-driving indeed is draws

00:03:45 --> 00:03:51
a lot of attention and for very good

00:03:47 --> 00:03:55
reason I personally believe and I think

00:03:50 --> 00:03:57
you will agree with me that self-driving

00:03:54 --> 00:04:00
really has as the potential to deeply

00:03:56 --> 00:04:03
change the way we look about mobility

00:03:59 --> 00:04:06
and the way we move people and things

00:04:02 --> 00:04:09
around so only to cover a few aspects

00:04:05 --> 00:04:13
here obviously that and I want to go

00:04:08 --> 00:04:15
into too many details but safety is one

00:04:12 --> 00:04:19
of is one of the the main motivations

00:04:14 --> 00:04:21
94% of us crashes today involve human

00:04:18 --> 00:04:23
errors a lot of those errors are around

00:04:20 --> 00:04:28
istraction and things that could be

00:04:22 --> 00:04:31
avoided so safety is a big piece of it

00:04:27 --> 00:04:35
disability and access to mobility is

00:04:30 --> 00:04:38
also a big motivation of ours

00:04:34 --> 00:04:40
o obviously the the self-driving

00:04:37 --> 00:04:42
technology has the potential to make it

00:04:39 --> 00:04:44
very available and cheaper for more

00:04:41 --> 00:04:48
people to to be able to move around and

00:04:43 --> 00:04:51
last but not least is efficiency a

00:04:47 --> 00:04:54
collective efficiency so not only we

00:04:50 --> 00:04:58
spend a lot of time in our cars in in

00:04:53 --> 00:05:01
long commute hours I personally spend a

00:04:57 --> 00:05:03
lot of time in on commit hours and that

00:05:00 --> 00:05:04
ime we spend in traffic probably could

00:05:02 --> 00:05:06
be better spent doing something else

00:05:03 --> 00:05:09
than having to drive to grab the coin in

00:05:05 --> 00:05:13
complicated situations beyond beyond

00:05:08 --> 00:05:16
traffic obviously the self-driving

00:05:12 --> 00:05:18
technology has the potential to deeply

00:05:15 --> 00:05:21
change the way we think about traffic

00:05:17 --> 00:05:25
parking spots urban environments city

00:05:20 --> 00:05:29
design so that that's why it's a very

00:05:24 --> 00:05:31
exciting topic so that's why we made it

00:05:28 --> 00:05:34
our our mission at Waco is fundamentally

00:05:30 --> 00:05:39
to to make it safe and easy to move

00:05:33 --> 00:05:42
people and things around so that's a

00:05:38 --> 00:05:46
nice mission and we've been on it for a

00:05:41 --> 00:05:48
very long time so actually the whole

00:05:45 --> 00:05:53
adventure started close to 10 years ago

00:05:47 --> 00:05:55
in 2009 and at the time that was that

00:05:52 --> 00:05:57
starting under the umbrella of a Google

00:05:54 --> 00:06:02
project that you may have heard of

00:05:56 --> 00:06:04
called chauffeur and back back back in

00:06:01 --> 00:06:05
those days so remember we were before

00:06:03 --> 00:06:08
the deep learning days at least in the

00:06:04 --> 00:06:10
industry and so really back in those

00:06:07 --> 00:06:13
days the the first the first objective

00:06:09 --> 00:06:15
of the project was to try and assemble

00:06:12 --> 00:06:18
first product a vehicle take

00:06:14 --> 00:06:21
off-the-shelf sensors assemble them

00:06:17 --> 00:06:24
together and try to go and decide if

00:06:20 --> 00:06:25
self-driving is even a possibility it is

00:06:23 --> 00:06:27
like it's one thing to to have some

00:06:24 --> 00:06:29
prototype somewhere but is that even a

00:06:26 --> 00:06:31
thing that that that is worth pursuing

00:06:28 --> 00:06:36
which is a very common way for Google to

00:06:30 --> 00:06:39
tackle problems so the genesis for

00:06:35 --> 00:06:41
that work was to come up with a pretty

00:06:38 --> 00:06:44
aggressive objective

00:06:40 --> 00:06:47
so the team the first milestone for the

00:06:43 --> 00:06:50
team was to essentially assembled 10100

00:06:46 --> 00:06:53
my loops in Northern California around

00:06:49 --> 00:06:55
Mountain View and try and figure

00:06:52 --> 00:06:59
out so for a total of 1,000 miles and

00:06:54 --> 00:07:02
try and and see if they could build

00:06:58 --> 00:07:06
first system that that would be able to

00:07:01 --> 00:07:08
go and drive those loops autonomously so

00:07:05 --> 00:07:11
they were not afraid so the team was not

00:07:07 --> 00:07:15
afraid so those loops went through some

00:07:10 --> 00:07:18
very aggressive patterns so you see that

00:07:14 --> 00:07:20
some of those loops go through the Santa

00:07:17 --> 00:07:22
Cruz Mountains which is an area in

00:07:19 --> 00:07:24
California that as you'll see I'll show

00:07:21 --> 00:07:28
you a video that has very small roads

00:07:23 --> 00:07:30
and two-way traffic and cliffs with

00:07:27 --> 00:07:32
negative obstacles and complicated

00:07:29 --> 00:07:35
patterns like that some of those some of

00:07:31 --> 00:07:39
those paths were going on highways so

00:07:34 --> 00:07:42
that and one of the the busiest highways

00:07:38 --> 00:07:45
ome of those routes were going around

00:07:41 --> 00:07:47
Lake Tahoe which is which is in the

00:07:44 --> 00:07:49
Sierras in California where you can

00:07:46 --> 00:07:51
encounter different kinds of weather and

00:07:48 --> 00:07:53
again different kinds of roads

00:07:50 --> 00:07:56
conditions those routes were going

00:07:52 --> 00:08:00
around bridges and the Bay Area has

00:07:55 --> 00:08:02
quite a few bridges to go through though

00:07:59 --> 00:08:05
some of them were even going through a

00:08:01 --> 00:08:07
dense urban area so you can see San

00:08:04 --> 00:08:10
Francisco being driven you can see

00:08:06 --> 00:08:12
Monterey some of the Monterey centers

00:08:09 --> 00:08:15
being driven and as you see on the video

00:08:11 --> 00:08:19
those bring those truly bring dense

00:08:14 --> 00:08:19
urban area challenges

00:08:19 --> 00:08:25
o since I promised it so here you're

00:08:21 --> 00:08:27
gonna see some pictures of the driving

00:08:24 --> 00:08:30
and it's kind of working

00:08:26 --> 00:08:33
so here with better quality so here you

00:08:29 --> 00:08:34
see the the roads I was talking about on

00:08:32 --> 00:08:38
the mountain on the Santa Cruz Mountains

00:08:33 --> 00:08:40
driving in the night animals crossing

00:08:37 --> 00:08:43
the street freeway driving going through

00:08:39 --> 00:08:46
patos just another area that is Charlie

00:08:42 --> 00:08:48
dance there's a aquarium there pretty

00:08:45 --> 00:08:50
popular one that's the famous lombard

00:08:47 --> 00:08:54
street in san francisco that you may

00:08:49 --> 00:08:55
have heard of which in San Francisco

00:08:53 --> 00:08:58
always brings unique set of challenges

00:08:54 --> 00:09:02
between fog and slopes and in that case

00:08:57 --> 00:09:07
ven shop turns so that was all the way

00:09:01 --> 00:09:10
back in 2010 so those ten loops were

00:09:06 --> 00:09:15
successfully completed 100% autonomously

00:09:09 --> 00:09:19
back in 2010 so that's more than eight

00:09:14 --> 00:09:22
years ago so on that on the heels

00:09:18 --> 00:09:24
of that success the team decided and

00:09:21 --> 00:09:28
Google decided that self-driving was

00:09:23 --> 00:09:30
worth worth pursuing and moved and moved

00:09:27 --> 00:09:34
forward with the development of the

00:09:29 --> 00:09:36
technology and and testing so we've been

00:09:33 --> 00:09:40
at it for all those years and have been

00:09:35 --> 00:09:43
working very hard on it historically

00:09:39 --> 00:09:44
way more and and and I think what the

00:09:42 --> 00:09:46
other companies out there have been

00:09:43 --> 00:09:49
relying on what we call safety drivers

00:09:45 --> 00:09:51
to still sit behind the wheels even if

00:09:48 --> 00:09:53
the car is is driving autonomously you

00:09:50 --> 00:09:55
still have a safety driver was able to

00:09:52 --> 00:10:00
take over at any time and make sure that

00:09:54 --> 00:10:01
we have very separations and and we've

00:09:59 --> 00:10:02
been a committed my eyes and knowledge

00:10:00 --> 00:10:04
and developing the system many

00:10:01 --> 00:10:08
iterations of the system across all

00:10:03 --> 00:10:11
those enoguh lose years we reached a

00:10:07 --> 00:10:14
major milestone as Lex mentioned back in

00:10:10 --> 00:10:17
November where for the first

00:10:13 --> 00:10:20
ime we reached a level of confidence

00:10:16 --> 00:10:22
and maturity in a system that we felt

00:10:19 --> 00:10:25
confident and proved to ourselves that

00:10:21 --> 00:10:28
it was safe to remove the safety driver

00:10:24 --> 00:10:31
as you can imagine that's that's a major

00:10:27 --> 00:10:33
milestone because it takes a very high

00:10:30 --> 00:10:35
level of confidence to not have that

00:10:32 --> 00:10:39
backup solution of a safety driver to

00:10:34 --> 00:10:41
take over or something to arise so here

00:10:38 --> 00:10:45
I'm gonna show you a small video a quick

00:10:40 --> 00:10:47
capture of that event so that the

00:10:44 --> 00:10:48
video is from one of the first times we

00:10:46 --> 00:10:53
did that since then we've been

00:10:47 --> 00:10:56
continuously operating drug arrest cars

00:10:52 --> 00:11:01
elf-driving cars in the Phoenix area in

00:10:55 --> 00:11:05
Arizona to expand our testing so here

00:11:00 --> 00:11:08
you can see the video swing so you can

00:11:04 --> 00:11:10
see our chrysler pacifica so here we

00:11:07 --> 00:11:12
have members of the team who are acting

00:11:09 --> 00:11:14
as the passengers getting on a backseat

00:11:11 --> 00:11:18
here is you can notice that there is no

00:11:13 --> 00:11:21
driver on the driver's seat so here we

00:11:17 --> 00:11:23
are running car having kind of service

00:11:20 --> 00:11:25
so the passenger simply press the button

00:11:22 --> 00:11:29
the application knows where they want to

00:11:24 --> 00:11:34
go and the car goes nope no one on the

00:11:28 --> 00:11:36
driver seat so we started with a fairly

00:11:33 --> 00:11:41
constrained geographical area in

00:11:35 --> 00:11:44
Chandler close to Phoenix Arizona and we

00:11:40 --> 00:11:46
are hard working to expand testing

00:11:43 --> 00:11:54
and the scope of our operating area

00:11:45 --> 00:11:57
since then so that goes well beyond a

00:11:53 --> 00:11:59
single car a single day not only we do

00:11:56 --> 00:12:01
that continuously but we also have a

00:11:58 --> 00:12:04
growing fleet of self-driving cars that

00:12:00 --> 00:12:05
we are deploying there all the way and

00:12:03 --> 00:12:16
looking for a product launch pretty

00:12:04 --> 00:12:18
quickly so I've talked about 2010 and we

00:12:15 --> 00:12:20
are in 2018 and were getting there but

00:12:17 --> 00:12:23
what it took it took quite a bit of time

00:12:19 --> 00:12:26
so I think one of the one of the key

00:12:22 --> 00:12:29
ideas that I'd like to convey here today

00:12:25 --> 00:12:33
and that I will I will go back to during

00:12:28 --> 00:12:35
representation is how much work and how

00:12:32 --> 00:12:37
much work it takes to really take a demo

00:12:34 --> 00:12:39
r something that's working in a lab

00:12:36 --> 00:12:41
into something that you feel safe

00:12:38 --> 00:12:44
to put on the roads and get all the way

00:12:40 --> 00:12:46
to that to that depth of understanding

00:12:43 --> 00:12:49
that depth of perfection in your

00:12:45 --> 00:12:51
technology that that you operate safely

00:12:48 --> 00:12:53
so one way to say that is that when you

00:12:50 --> 00:12:56
are 90% done you still have 90 percent

00:12:52 --> 00:12:59
o go right so 90% of the technology

00:12:55 --> 00:13:02
takes only 10% of the time right in

00:12:58 --> 00:13:06
other words you need to 10x right you

00:13:01 --> 00:13:08
need to 10x the the capabilities of your

00:13:05 --> 00:13:10
technology you need to 10x your team

00:13:07 --> 00:13:11
size and find ways for more engineers

00:13:09 --> 00:13:14
and more researchers to collaborate

00:13:10 --> 00:13:16
together you need to 10x the

00:13:13 --> 00:13:19
capabilities of your sensors you need to

00:13:15 --> 00:13:20
10x fundamentally the overall quality of

00:13:18 --> 00:13:22
the system right and your testing

00:13:19 --> 00:13:25
practices as we'll see and a lot of the

00:13:21 --> 00:13:26
aspects of the program and that's what

00:13:24 --> 00:13:32
we've been that's what we've been

00:13:25 --> 00:13:34
working on so beyond the context of

00:13:31 --> 00:13:37
self-driving cars I want to spend a

00:13:33 --> 00:13:40
little bit of time to give you kind of a

00:13:36 --> 00:13:43
n inside of view of the rise of

00:13:39 --> 00:13:46
deep learning Sumer I mentioned that

00:13:42 --> 00:13:49
back in 2009 2010 deep learning was not

00:13:45 --> 00:13:51
ready available yet in full capacity in

00:13:48 --> 00:13:54
the industry and so over those years

00:13:50 --> 00:13:59
actually it took a lot of breakthroughs

00:13:53 --> 00:14:00
to to be able to reach that stage and

00:13:58 --> 00:14:02
one of them was the Agora algorithm

00:13:59 --> 00:14:04
breakthrough that deep learning gave us

00:14:01 --> 00:14:06
and I'll give you a little bit of of

00:14:03 --> 00:14:11
backstage view on what happened at

00:14:05 --> 00:14:14
Google during those years so as you know

00:14:10 --> 00:14:16
Google has been as committed itself to

00:14:13 --> 00:14:19
machine learning and deep learning very

00:14:15 --> 00:14:20
early on you may have heard of the

00:14:18 --> 00:14:22
Google brain what we call internally the

00:14:19 --> 00:14:25
Google brain team which is which is a

00:14:21 --> 00:14:29
team fundamentally hard at work to lead

00:14:24 --> 00:14:34
the bleeding edge of research which is

00:14:28 --> 00:14:36
known but also leading the development

00:14:33 --> 00:14:38
of the tools an infrastructure of the

00:14:35 --> 00:14:42
whole machine learning ecosystem at at

00:14:37 --> 00:14:44
Google and level to essentially low many

00:14:41 --> 00:14:47
teams to develop machine learning at

00:14:43 --> 00:14:50
scale all the way to successful products

00:14:46 --> 00:14:51
o they've been working and pushing

00:14:49 --> 00:14:53
that the deep learning technology has

00:14:50 --> 00:14:57
been pushing the field in many in many

00:14:52 --> 00:15:01
directions from computer vision to

00:14:56 --> 00:15:02
speech understanding to NLP and all

00:15:00 --> 00:15:05
those directions are things that you can

00:15:01 --> 00:15:07
see in Google products today so whether

00:15:04 --> 00:15:10
you're talking real assistant or Google

00:15:06 --> 00:15:13
photos speech recognition or even Google

00:15:09 --> 00:15:16
Maps you can see the impact of deep

00:15:12 --> 00:15:20
learning in all those areas and actually

00:15:15 --> 00:15:23
many years ago I was part of I myself

00:15:19 --> 00:15:26
was part of the street view team and I

00:15:22 --> 00:15:28
was leading the what an internal program

00:15:25 --> 00:15:32
an internal project that we call the

00:15:27 --> 00:15:36
street smart and the good we had at

00:15:31 --> 00:15:39
sweet smart was to use deep learning and

00:15:35 --> 00:15:41
machine learning techniques to go and

00:15:38 --> 00:15:43
analyze Street imagery and as you know

00:15:40 --> 00:15:46
that that's a very big and varied corpus

00:15:42 --> 00:15:48
o that we could extract elements that

00:15:45 --> 00:15:50
are core to our mapping strategy and

00:15:47 --> 00:15:53
build and that way build a better Google

00:15:49 --> 00:15:56
Maps so for instance in that picture so

00:15:52 --> 00:15:59
that's that's a panorama or piece of a

00:15:55 --> 00:16:00
panorama from Street View imagery and

00:15:58 --> 00:16:03
you can see that there are a lot of

00:15:59 --> 00:16:06
pieces in there that if you could find

00:16:02 --> 00:16:08
and and properly localized would

00:16:05 --> 00:16:11
rastically help you build better maps

00:16:07 --> 00:16:13
o street numbers obviously that are

00:16:10 --> 00:16:16
ally useful to map addresses street

00:16:12 --> 00:16:19
names that when combined event on

00:16:15 --> 00:16:21
similar techniques from our views will

00:16:18 --> 00:16:23
help you properly draw all the routes

00:16:20 --> 00:16:27
and give a name to them and those two

00:16:22 --> 00:16:29
combines actually allow you to do very

00:16:26 --> 00:16:32
high quality address book apps which is

00:16:28 --> 00:16:33
a common query on Google Maps general

00:16:31 --> 00:16:35
text

00:16:32 --> 00:16:38
and more specifically text on business

00:16:34 --> 00:16:40
facades that allow you to not only may

00:16:37 --> 00:16:42
be localized business listings that you

00:16:39 --> 00:16:44
may have gotten by other means to actual

00:16:41 --> 00:16:46
physical locations weather so build some

00:16:43 --> 00:16:50
of those local listings directly from

00:16:45 --> 00:16:52
scratch and and more traffic oriented

00:16:49 --> 00:16:54
patterns traffic whether it's traffic

00:16:51 --> 00:16:57
lights traffic signs that can be used

00:16:53 --> 00:17:00
then for for ETA navigation ETA

00:16:56 --> 00:17:04
predictions and stuff like that so that

00:16:59 --> 00:17:06
was our mission one of the as I

00:17:03 --> 00:17:11
mentioned one of the hot piece is to do

00:17:05 --> 00:17:14
is to map addresses at Cal and so you

00:17:10 --> 00:17:18
can imagine that we had a breakthrough

00:17:13 --> 00:17:20
when we first were able to properly find

00:17:17 --> 00:17:22
those street numbers out of the Street

00:17:19 --> 00:17:25
View imagery and out of the facade

00:17:21 --> 00:17:27
solving that problem actually requires a

00:17:24 --> 00:17:30
lot of pcs not only you need to find

00:17:26 --> 00:17:33
what where the the street number is on

00:17:29 --> 00:17:36
the facade which is if you think about

00:17:32 --> 00:17:37
it a fairly hard semantic problem right

00:17:35 --> 00:17:38
what what's the difference between a

00:17:36 --> 00:17:42
street number versus another kind of

00:17:37 --> 00:17:44
number versus other auto text but then

00:17:41 --> 00:17:46
obviously read it because there's no

00:17:43 --> 00:17:48
point having pixels if you cannot

00:17:45 --> 00:17:50
understand the number that that's on on

00:17:47 --> 00:17:53
the facade all the way to properly draw

00:17:49 --> 00:17:57
geo localizing it so that you can put it

00:17:52 --> 00:17:59
on on Google Maps and so the first

00:17:56 --> 00:18:01
deepening application that that

00:17:58 --> 00:18:04
succeeded in production and that's all

00:18:00 --> 00:18:07
the way back to 2012 that we had the

00:18:03 --> 00:18:09
first system in production was really

00:18:06 --> 00:18:13
the first breakthrough that we had

00:18:08 --> 00:18:16
across across alphabet on our ability to

00:18:12 --> 00:18:20
properly understand real scene

00:18:15 --> 00:18:23
situations so here I'm gonna show you a

00:18:19 --> 00:18:26
video that kind of sums it up so look

00:18:22 --> 00:18:29
every one of those segments is actually

00:18:25 --> 00:18:32
a view from starting from the car going

00:18:28 --> 00:18:34
to the physical number of all those

00:18:31 --> 00:18:36
house numbers that we've been able to

00:18:33 --> 00:18:39
detect and transcribe so here that's in

00:18:35 --> 00:18:41
Sao Paulo and well you can see that when

00:18:38 --> 00:18:44
all that data is put together gives you

00:18:40 --> 00:18:48
a very consistent

00:18:43 --> 00:18:50
view of the addressing scheme so in in

00:18:47 --> 00:18:52
so that's another example say similar

00:18:49 --> 00:18:54
things obviously we have more that in

00:18:51 --> 00:18:57
Paris where we are doing more imagery so

00:18:53 --> 00:18:59
more views of those of those physical

00:18:56 --> 00:19:01
numbers that when you if you are going

00:18:58 --> 00:19:03
to triangulate you're able to do

00:19:00 --> 00:19:06
localize them very accurately and have

00:19:02 --> 00:19:09
ry accurate maps so the last example

00:19:05 --> 00:19:13
I'm going to show is in Cape Town in

00:19:08 --> 00:19:15
South Africa where again the impact of

00:19:12 --> 00:19:20
that deep learning work has been huge in

00:19:14 --> 00:19:23
terms of quality so many countries today

00:19:19 --> 00:19:27
actually have up tuned more than 95% of

00:19:22 --> 00:19:29
addresses maps map to that way so doing

00:19:26 --> 00:19:31
similar things service you can see a lot

00:19:28 --> 00:19:35
of parallelism between that work on 3d

00:19:31 --> 00:19:38
imagery and doing doing the same on the

00:19:34 --> 00:19:41
real scene on the car but obviously

00:19:37 --> 00:19:43
doing that on the car is even harder is

00:19:40 --> 00:19:47
even harder because you need to do that

00:19:42 --> 00:19:50
rigor time and and very quickly with low

00:19:46 --> 00:19:53
latency and you also need to do that in

00:19:49 --> 00:19:58
an embedded system right so the cars

00:19:52 --> 00:20:00
have to be entirely autonomous you

00:19:57 --> 00:20:02
cannot rely on a connection to a Google

00:19:59 --> 00:20:04
Data Centers and first you don't have

00:20:01 --> 00:20:07
the time in terms of latency to bring

00:20:03 --> 00:20:09
data back and forth but also you cannot

00:20:06 --> 00:20:10
rely on a connection to for the safe

00:20:08 --> 00:20:13
operation of your system right so you

00:20:09 --> 00:20:17
need to do the processing within the car

00:20:12 --> 00:20:20
but very so that's a that's a paper that

00:20:16 --> 00:20:23
you can read that dates all the way back

00:20:19 --> 00:20:26
to 2014 where for the first time by

00:20:22 --> 00:20:28
using slightly different techniques we

00:20:25 --> 00:20:30
re able to put deep learning at work

00:20:27 --> 00:20:32
inside inside that that constrained

00:20:29 --> 00:20:34
real-time environment and start to have

00:20:31 --> 00:20:40
impact and in that case around a

00:20:33 --> 00:20:43
pedestrian detection so as I said there

00:20:39 --> 00:20:46
are a lot of analogies you can see that

00:20:42 --> 00:20:48
o properly drive that scene like Street

00:20:45 --> 00:20:50
View you need to find you need to see

00:20:47 --> 00:20:52
the traffic light you need to understand

00:20:49 --> 00:20:54
if the light is red or green and that's

00:20:51 --> 00:20:55
what that's what essentially will allow

00:20:53 --> 00:20:57
you to

00:20:54 --> 00:20:58
be at processing obviously driving is

00:20:56 --> 00:21:00
even more challenging beyond the

00:20:57 --> 00:21:02
real-time and if you saw the cyclist

00:20:59 --> 00:21:04
going through so you have air stuff

00:21:01 --> 00:21:05
happening on the scene that you need to

00:21:03 --> 00:21:08
detect and properly understand interpret

00:21:04 --> 00:21:11
and predict and at the same time he

00:21:08 --> 00:21:16
xpressed explicitly took a night

00:21:10 --> 00:21:17
driving example to show you that while

00:21:15 --> 00:21:20
you can choose when you take pictures of

00:21:16 --> 00:21:23
street view and do it in in data I mean

00:21:19 --> 00:21:25
perfect conditions driving requires you

00:21:22 --> 00:21:29
to take the conditions that they are and

00:21:24 --> 00:21:31
you have to deal with it so there has

00:21:28 --> 00:21:34
been for from the very early beginning

00:21:30 --> 00:21:34
there's been a lot of cross

00:21:33 --> 00:21:37
pollenization

00:21:33 --> 00:21:40
between the real scene work so here I

00:21:36 --> 00:21:42
took a few papers that we did in Street

00:21:39 --> 00:21:44
View that obviously if you read them you

00:21:41 --> 00:21:46
see directly apply to some of the stuff

00:21:43 --> 00:21:49
we do on the cars well obviously that

00:21:45 --> 00:21:53
collaboration between Google research

00:21:48 --> 00:21:55
and wham-o historically went well beyond

00:21:52 --> 00:21:57
studio only and across all the resort

00:21:54 --> 00:21:59
groups and that still is a very strong

00:21:56 --> 00:22:01
collaboration going on that enables us

00:21:58 --> 00:22:06
to be to stay on the bleeding edge right

00:22:00 --> 00:22:08
off of what we can do so now that we we

00:22:05 --> 00:22:10
looked a little bit at how things

00:22:07 --> 00:22:12
happened I want to spend more time and

00:22:09 --> 00:22:14
go into more of the details of

00:22:11 --> 00:22:17
what's going on in the cars today and

00:22:14 --> 00:22:22
how deep learning is actually impacting

00:22:17 --> 00:22:25
our current system so I think during the

00:22:21 --> 00:22:27
if I looked at the cursors properly I

00:22:24 --> 00:22:29
think during the week you went through

00:22:26 --> 00:22:32
the major pieces that that you need to

00:22:28 --> 00:22:34
master to make a self-driving car so I'm

00:22:31 --> 00:22:37
sure you heard about mapping

00:22:33 --> 00:22:38
localization so putting the car within

00:22:36 --> 00:22:40
those maps and understanding where you

00:22:37 --> 00:22:43
are with it's pretty good accuracy

00:22:39 --> 00:22:45
perception scene understanding which is

00:22:42 --> 00:22:48
a higher-level semantic understanding of

00:22:44 --> 00:22:50
what's going on in the scene starting to

00:22:47 --> 00:22:52
predict what the agents are going to do

00:22:49 --> 00:22:55
around you so that you can do better

00:22:51 --> 00:22:57
motion planning obviously it is a whole

00:22:54 --> 00:23:00
robotics aspect at the end of the day

00:22:56 --> 00:23:03
the car in many ways acts like a robot

00:22:59 --> 00:23:06
whether it's around the sensor data or

00:23:02 --> 00:23:08
even the control interfaces to the car

00:23:05 --> 00:23:11
and for every one was was dead with

00:23:07 --> 00:23:14
Holloway on robotics you will agree with

00:23:10 --> 00:23:16
me that that it's not a perfect world

00:23:13 --> 00:23:19
and you need to deal with with with

00:23:15 --> 00:23:22
ose errors other pieces that we may

00:23:18 --> 00:23:25
have talked about is around simulation

00:23:21 --> 00:23:28
and essentially validation of whatever

00:23:24 --> 00:23:30
system you put together so obviously

00:23:27 --> 00:23:33
machine learning and the planning have

00:23:29 --> 00:23:36
been having a deep impact in a in a

00:23:32 --> 00:23:38
growing set of those areas but for the

00:23:35 --> 00:23:40
next for the next minutes here I'm going

00:23:38 --> 00:23:42
to focus more on the on the perception

00:23:39 --> 00:23:44
piece which is which is a core element

00:23:41 --> 00:23:49
of what the self-driving car needs to do

00:23:43 --> 00:23:51
so what is what is perception so

00:23:48 --> 00:23:53
fundamentally set perception is assist

00:23:50 --> 00:23:55
in a system in the car that needs to

00:23:52 --> 00:23:59
build an understanding of the world

00:23:54 --> 00:24:01
around around it and it does that using

00:23:58 --> 00:24:05
two major inputs

00:24:00 --> 00:24:08
the first one is prior on the scene so

00:24:04 --> 00:24:10
for instance to give you an example it

00:24:07 --> 00:24:12
would be a little silly to to have to

00:24:09 --> 00:24:15
recompute the actual location of the

00:24:11 --> 00:24:17
road the actual interconnectivity of the

00:24:14 --> 00:24:19
intersections of every intersection when

00:24:16 --> 00:24:22
once you get on the scene because those

00:24:18 --> 00:24:25
things you can pre-compute you can

00:24:21 --> 00:24:27
pre-compute in advance and save your

00:24:24 --> 00:24:30
onboard computing for all the tasks that

00:24:26 --> 00:24:32
are more critical so really so that's

00:24:29 --> 00:24:35
often referred to as the mapping

00:24:31 --> 00:24:36
exercise but really it's about reducing

00:24:34 --> 00:24:40
the computation you're going to have to

00:24:35 --> 00:24:44
do on on the car watch once it drives

00:24:39 --> 00:24:46
the other big input obviously is what

00:24:43 --> 00:24:49
sensors are going to give you once you

00:24:45 --> 00:24:52
get on the spot so since your data is

00:24:48 --> 00:24:54
the is the the signal that's going to

00:24:51 --> 00:24:56
tell you what is not like what you

00:24:53 --> 00:24:59
mapped and the things is the traffic

00:24:55 --> 00:25:00
light right or green where where are the

00:24:58 --> 00:25:02
pedestrians where are the cars what are

00:24:59 --> 00:25:02
you doing

00:25:01 --> 00:25:09
so as we saw on the initial picture we

00:25:05 --> 00:25:13
have quite a set of sensors on our

00:25:08 --> 00:25:17
self-driving cars so they go from vision

00:25:12 --> 00:25:20
systems radar and later how the other

00:25:16 --> 00:25:25
three big families of sensors we have

00:25:19 --> 00:25:27
one point to note here is is that they

00:25:24 --> 00:25:28
are designed to be complimentary right

00:25:26 --> 00:25:30
so they are designed to be complimentary

00:25:27 --> 00:25:32
first in there in the localization on

00:25:29 --> 00:25:36
the car so we don't put them in the same

00:25:31 --> 00:25:38
spot because obviously blind spots is is

00:25:35 --> 00:25:42
a major issues and and and you want to

00:25:37 --> 00:25:44
have good coverage of the field of view

00:25:41 --> 00:25:46
the other piece is that there are

00:25:43 --> 00:25:48
complementary India capabilities it's so

00:25:45 --> 00:25:51
for instance to give you an example

00:25:47 --> 00:25:53
cameras are going to be very good to

00:25:50 --> 00:25:57
give you a dance representation it's

00:25:52 --> 00:25:59
like it is very dense set of information

00:25:56 --> 00:26:01
it contains a lot of semantic

00:25:58 --> 00:26:04
information right you can you can see

00:26:00 --> 00:26:07
you can really see

00:26:03 --> 00:26:09
a big number of a large number of

00:26:06 --> 00:26:11
details but Francis they are not really

00:26:08 --> 00:26:13
good to give you depth or it's much

00:26:10 --> 00:26:16
arder computer and computer

00:26:12 --> 00:26:18
additionally expensive to get depth

00:26:15 --> 00:26:21
information out of camera systems so

00:26:18 --> 00:26:22
systems like a lidar for instance will

00:26:20 --> 00:26:24
give you very good very good

00:26:21 --> 00:26:26
when you hit when you hit objects will

00:26:23 --> 00:26:27
give you a very good depth estimation

00:26:25 --> 00:26:29
but obviously they're going to lack a

00:26:26 --> 00:26:31
lot of the cementing information that

00:26:28 --> 00:26:33
you will find on camera systems

00:26:30 --> 00:26:35
o all those sensors are designed to be

00:26:32 --> 00:26:40
complimentary in terms of their

00:26:34 --> 00:26:43
capabilities it goes without saying that

00:26:39 --> 00:26:45
he better your sensors are the better

00:26:42 --> 00:26:48
your perception system is gonna be right

00:26:44 --> 00:26:51
so that's why at way more we we took the

00:26:47 --> 00:26:55
path of designing our own sensors

00:26:50 --> 00:26:58
in-house and and and and enhancing

00:26:54 --> 00:27:03
what's available of the shell today

00:26:57 --> 00:27:04
because it's important for us to go all

00:27:02 --> 00:27:05
the way to be able to build a

00:27:03 --> 00:27:12
self-driving system that we could

00:27:04 --> 00:27:16
believe in and so that's what perception

00:27:11 --> 00:27:18
does take those two inputs and build a

00:27:15 --> 00:27:20
representation of the scene right so at

00:27:17 --> 00:27:24
he end of the day you have to realize

00:27:19 --> 00:27:27
that that in nature that work of

00:27:24 --> 00:27:30
perception is really what differentiates

00:27:26 --> 00:27:31
deeply differentiates what you need to

00:27:29 --> 00:27:35
do in a safe driving system as opposed

00:27:30 --> 00:27:39
to a lower lower level driving

00:27:34 --> 00:27:41
assistance system in many cases France

00:27:38 --> 00:27:45
we do speed control speed cruise or if

00:27:40 --> 00:27:47
you do a lot of lower lower level drug

00:27:44 --> 00:27:51
resistance a lot of the strategies can

00:27:46 --> 00:27:53
be around not bumping into things if you

00:27:50 --> 00:27:55
see things moving around you you group

00:27:52 --> 00:27:57
them you segment them appropriately in

00:27:54 --> 00:27:59
blocks of moving things and you don't

00:27:56 --> 00:28:00
hit them you're good enough in most

00:27:58 --> 00:28:01
cases

00:27:59 --> 00:28:03
when you don't have a driver on the

00:28:00 --> 00:28:06
dragon seat obviously the challenge

00:28:02 --> 00:28:08
totally changes scale so to give you an

00:28:05 --> 00:28:11
example for instance if you're if you're

00:28:07 --> 00:28:13
on the lane and and you see a bicyclist

00:28:10 --> 00:28:15
going small slowly on the right on the

00:28:12 --> 00:28:17
under on the lane right of you and

00:28:14 --> 00:28:19
there's a car and next to you you need

00:28:16 --> 00:28:22
to understand that there's a chance that

00:28:18 --> 00:28:24
car is going to want to avoid that

00:28:21 --> 00:28:26
bicyclist is going to swerve and you

00:28:23 --> 00:28:29
need to anticipate that behavior so that

00:28:25 --> 00:28:30
you can you can properly decide whether

00:28:28 --> 00:28:32
you want to slow down give space for the

00:28:29 --> 00:28:34
car or speed up and have the car go

00:28:31 --> 00:28:36
behind you those are the kinds of

00:28:33 --> 00:28:40
behaviors that go well beyond not

00:28:35 --> 00:28:43
bumping into things and that require

00:28:39 --> 00:28:46
much deeper understanding of the world

00:28:42 --> 00:28:48
are going that's going on around you so

00:28:45 --> 00:28:50
let me put it in picture and and we come

00:28:47 --> 00:28:53
back to that example in a court case so

00:28:49 --> 00:28:57
here is a typical scene that we

00:28:52 --> 00:28:59
ncountered at least so so he obviously

00:28:56 --> 00:29:02
ou have a police car pulled over

00:28:58 --> 00:29:05
probably pulled over someone there you

00:29:01 --> 00:29:07
have a cyclist on the road moving

00:29:04 --> 00:29:12
forward and we need to drive through

00:29:06 --> 00:29:14
that situation so the first thing you

00:29:11 --> 00:29:17
can do you have to do obviously is the

00:29:13 --> 00:29:19
basics right so out of your sensor data

00:29:16 --> 00:29:23
understand that a set of point clouds

00:29:18 --> 00:29:25
and pixels belong to the cyclist find

00:29:22 --> 00:29:27
that you have two cars on the scene the

00:29:24 --> 00:29:30
police car and the car park in front of

00:29:26 --> 00:29:33
it understand the policeman as a

00:29:29 --> 00:29:35
pedestrian so basic level of

00:29:32 --> 00:29:37
understanding obviously you need a

00:29:34 --> 00:29:41
little more than that you need to go

00:29:36 --> 00:29:44
deeper in your semantics obviously you

00:29:40 --> 00:29:46
need if you understand that the the

00:29:43 --> 00:29:48
flashing lights are on you understand

00:29:45 --> 00:29:52
that the police car is becoming an Eevee

00:29:47 --> 00:29:55
and and it's performing something on the

00:29:51 --> 00:29:56
scene if you understand that this car is

00:29:54 --> 00:29:58
parked and we see this a variable piece

00:29:55 --> 00:30:01
of information that's going to tell you

00:29:57 --> 00:30:03
whether you can pass it or not something

00:30:00 --> 00:30:05
you may have not noticed is that there

00:30:02 --> 00:30:07
are so cones so there are cones here on

00:30:04 --> 00:30:10
the scene that would prevent you for

00:30:06 --> 00:30:14
instance to go and drag that pathway if

00:30:09 --> 00:30:16
you wanted to next level of

00:30:13 --> 00:30:18
getting closer to behavior prediction

00:30:15 --> 00:30:21
obviously if you if you also understand

00:30:17 --> 00:30:23
that actually the police car has an open

00:30:20 --> 00:30:25
door then all of a sudden you can start

00:30:22 --> 00:30:27
o expect it behavior where someone is

00:30:24 --> 00:30:28
gonna get over that car right and and

00:30:26 --> 00:30:31
the way you swerve even if you were to

00:30:27 --> 00:30:33
decide to swerve or the way someone

00:30:30 --> 00:30:35
getting up out of that car would impact

00:30:32 --> 00:30:36
he trajectory of the cyclist is

00:30:34 --> 00:30:41
omething you need to understand in

00:30:35 --> 00:30:43
order to properly and safely Drive and

00:30:40 --> 00:30:45
only then only when you have that that

00:30:42 --> 00:30:48
depth of understanding you can start to

00:30:44 --> 00:30:50
come up with realistic behavior

00:30:47 --> 00:30:52
predictions and trajectory predictions

00:30:49 --> 00:30:54
for all those agents in the in on the

00:30:51 --> 00:30:56
scene so that you can come up with a

00:30:53 --> 00:31:00
proper strategy for your planning

00:30:55 --> 00:31:03
control so how is a deep learning

00:30:59 --> 00:31:06
playing into that whole space and how he

00:31:02 --> 00:31:09
is a deep learning impacting used to

00:31:05 --> 00:31:09
solve many of those problems

00:31:08 --> 00:31:18
o remember when I said when you're 90%

00:31:12 --> 00:31:21
down you still have 90% to go so I think

00:31:17 --> 00:31:24
that's not that starts to beat us I also

00:31:20 --> 00:31:25
talked about how robotics and having

00:31:23 --> 00:31:29
sensors in real life

00:31:24 --> 00:31:32
is not a perfect world so actually it is

00:31:28 --> 00:31:34
a big piece of the puzzle so I wish

00:31:31 --> 00:31:37
sensors would give us perfect data all

00:31:33 --> 00:31:39
the time and we would give us a perfect

00:31:36 --> 00:31:41
picture that we can do reality use to do

00:31:38 --> 00:31:44
a deep learning but unfortunately that's

00:31:40 --> 00:31:48
not how it works so here for instance

00:31:43 --> 00:31:49
you see an example where you have a

00:31:47 --> 00:31:51
pickup truck

00:31:48 --> 00:31:54
so the imagery doesn't show it but you

00:31:50 --> 00:31:57
have a smoke coming off the out of the

00:31:53 --> 00:32:00
xhaust and you have exhaust that's

00:31:56 --> 00:32:03
triggering a light our laser points

00:31:59 --> 00:32:05
right not very relevant for your for any

00:32:02 --> 00:32:08
behavior prediction or for your driving

00:32:04 --> 00:32:10
behavior so those points obviously and

00:32:07 --> 00:32:12
it's safe to go and drive through them

00:32:09 --> 00:32:15
all right so those are very safe to

00:32:11 --> 00:32:20
ignore in terms of sin understanding

00:32:14 --> 00:32:24
right so filtering the whole whole bunch

00:32:19 --> 00:32:25
of data coming off your sensors is is a

00:32:23 --> 00:32:27
very important task because that reduces

00:32:24 --> 00:32:30
the computation you're gonna have to do

00:32:26 --> 00:32:34
whether Sookie to do to operator safely

00:32:29 --> 00:32:38
a most more subtle one but important one

00:32:33 --> 00:32:41
are around reflections so we are driving

00:32:37 --> 00:32:43
a scene there's a there's a car here on

00:32:40 --> 00:32:46
the camera picture the car is reflected

00:32:42 --> 00:32:48
in a bus and if you just do naive

00:32:45 --> 00:32:51
detection especially that if the bus

00:32:47 --> 00:32:53
goes moves along with you and everything

00:32:50 --> 00:32:54
move which is very typical and

00:32:52 --> 00:32:55
everything moves then you can have all

00:32:53 --> 00:32:58
of a sudden thing and have two cars on

00:32:54 --> 00:33:01
the scene and and if you take that car

00:32:57 --> 00:33:02
too seriously all the way to impacting

00:33:00 --> 00:33:05
your behavior obviously you're gonna

00:33:01 --> 00:33:09
make mistakes right so here I showed you

00:33:04 --> 00:33:12
an example of reflections on the on the

00:33:08 --> 00:33:13
visual range but obviously that affects

00:33:11 --> 00:33:15
all sensors in slightly different

00:33:12 --> 00:33:17
matters but you could have the same

00:33:14 --> 00:33:19
ffect for instance with a light our

00:33:16 --> 00:33:21
data where for instance when you drive

00:33:18 --> 00:33:23
a freeway and you have a road

00:33:20 --> 00:33:26
sign on top of the freeway that will

00:33:22 --> 00:33:28
reflect in the back window of the car in

00:33:25 --> 00:33:31
front of you right and then showing a

00:33:27 --> 00:33:33
reflected sign on the road you better

00:33:30 --> 00:33:36
understand that the thing you see on the

00:33:32 --> 00:33:39
road is actually a reflection and not

00:33:35 --> 00:33:41
ry to swerve around and trying to avoid

00:33:38 --> 00:33:41
that thing on the only sixty five miles

00:33:40 --> 00:33:44
per hour

00:33:40 --> 00:33:44
trajectory

00:33:44 --> 00:33:50
so that's a big that's a big complicated

00:33:47 --> 00:33:55
challenge but assume we are able to get

00:33:49 --> 00:33:57
o a proper sensor data that we can

00:33:54 --> 00:34:01
start the process with our machine

00:33:56 --> 00:34:03
running so by the way a lot of the a lot

00:34:00 --> 00:34:05
of the the signal processing PC is

00:34:02 --> 00:34:07
actually already used machine learning

00:34:04 --> 00:34:09
and deep learning too because as you can

00:34:06 --> 00:34:11
see Francis in the reflection space you

00:34:08 --> 00:34:13
need to at the end of the day you can do

00:34:10 --> 00:34:14
some tricks to understand the difference

00:34:12 --> 00:34:16
in the signal but at the end of the day

00:34:13 --> 00:34:17
at some point for some of them you're

00:34:15 --> 00:34:18
gonna have to understand to have a

00:34:16 --> 00:34:21
higher level of understanding of the

00:34:17 --> 00:34:22
scene and realize it's not possible that

00:34:20 --> 00:34:25
he car is hiding behind the bus and

00:34:21 --> 00:34:27
given my field of view for instance but

00:34:24 --> 00:34:29
assuming you have do the sensor data

00:34:26 --> 00:34:35
filter I would sensor data the very next

00:34:28 --> 00:34:40
hing I want to do is typically is apply

00:34:34 --> 00:34:44
some kind of convolution layers on top

00:34:39 --> 00:34:45
of that of that imagery so follow if

00:34:43 --> 00:34:49
you're not familiar with convolution

00:34:44 --> 00:34:52
layers so that's that's a very popular

00:34:48 --> 00:34:56
way to do computer vision because it

00:34:51 --> 00:34:58
relies on on connecting neurons with

00:34:55 --> 00:35:02
kernels that are gonna run that are

00:34:57 --> 00:35:03
gonna learn layer after layer features

00:35:01 --> 00:35:05
of the imagery right so those kernels

00:35:02 --> 00:35:08
typically work locally on this on this

00:35:04 --> 00:35:11
on region of the image and they can

00:35:07 --> 00:35:14
understand how they can understand lines

00:35:10 --> 00:35:15
they can understand contours and as you

00:35:13 --> 00:35:18
build up layers are going to understand

00:35:14 --> 00:35:20
higher and higher levels of future

00:35:17 --> 00:35:21
presentations that ultimately will

00:35:19 --> 00:35:24
tell you what's happening on the on the

00:35:20 --> 00:35:26
image that's a very common technique and

00:35:23 --> 00:35:27
much more efficient we slid and fully

00:35:25 --> 00:35:31
connected layers for instance that

00:35:26 --> 00:35:33
wouldn't work but unfortunately a lot of

00:35:30 --> 00:35:35
the state of the art is

00:35:32 --> 00:35:37
actually in 2d convolutions right so

00:35:34 --> 00:35:41
again they've been developed on on

00:35:36 --> 00:35:44
imagery and typically they require a

00:35:40 --> 00:35:46
fairly dense input rights so for an

00:35:43 --> 00:35:47
imagery a crate is great because pixels

00:35:45 --> 00:35:49
are very dense you always have a pixel

00:35:46 --> 00:35:52
next to the next one there is not a lot

00:35:48 --> 00:35:54
of void if you were for instance to

00:35:51 --> 00:35:56
think if you were to to

00:35:53 --> 00:35:59
plain convolutions on on a very sparse

00:35:55 --> 00:36:00
laser point Swensen then you would have

00:35:58 --> 00:36:03
a lot of holes and those don't work

00:35:59 --> 00:36:07
nearly as well so typically what we do

00:36:02 --> 00:36:10
is to first project sensor data into 2d

00:36:06 --> 00:36:12
planes and do processing on those so two

00:36:09 --> 00:36:16
very typical views that we use the first

00:36:11 --> 00:36:18
one is a top-down so broad view is going

00:36:15 --> 00:36:20
to give you a Google Maps kind of view

00:36:17 --> 00:36:24
of the scene so it's great for instance

00:36:19 --> 00:36:26
to to map up to map cars and objects

00:36:23 --> 00:36:30
moving along along the scene but they

00:36:25 --> 00:36:32
don't it's harder to put imagery pixels

00:36:29 --> 00:36:35
imagery you saw from the car into those

00:36:31 --> 00:36:38
top-down views so there's another famous

00:36:34 --> 00:36:40
one common one that that is the driver

00:36:37 --> 00:36:44
view it's a projection onto the the

00:36:39 --> 00:36:47
plane from the driver's perspective that

00:36:43 --> 00:36:49
are much better at utilizing imagery

00:36:46 --> 00:36:50
because this essentially that's how

00:36:48 --> 00:36:52
imagery imagery got captured my name

00:36:49 --> 00:36:53
dia news drone

00:36:51 --> 00:36:56
so here for instance you're gonna see

00:36:52 --> 00:36:59
how you can if if your sensors are

00:36:55 --> 00:37:03
properly registered you can use both

00:36:58 --> 00:37:07
lidar and imagery signals together to

00:37:02 --> 00:37:09
better understand the scene so the first

00:37:06 --> 00:37:13
kind of processing you can do

00:37:08 --> 00:37:17
is is is what is called their

00:37:13 --> 00:37:19
segmentation so once you have pixels or

00:37:16 --> 00:37:23
laser points you need to group them

00:37:18 --> 00:37:25
together into together into objects that

00:37:22 --> 00:37:28
you can that you can then use for better

00:37:24 --> 00:37:30
understanding and processing so

00:37:27 --> 00:37:32
unfortunately a lot of the objects you

00:37:29 --> 00:37:35
encounter while driving don't have a

00:37:31 --> 00:37:36
predefined shape so here are two example

00:37:34 --> 00:37:38
of snow but if you think about

00:37:35 --> 00:37:41
vegetation or if you think about trash

00:37:37 --> 00:37:44
bags for instance you can't you can't

00:37:40 --> 00:37:44
come up with

00:37:43 --> 00:37:49
prior understanding on how they're gonna

00:37:45 --> 00:37:53
look like and so you have to be ready to

00:37:48 --> 00:37:55
have any shape of those objects so the

00:37:52 --> 00:37:58
one of the techniques that works pretty

00:37:54 --> 00:38:00
well is to to build a smaller

00:37:57 --> 00:38:03
convolution network that you're gonna

00:37:59 --> 00:38:06
slide across across Europe the

00:38:02 --> 00:38:08
protection of your sensor data so that's

00:38:05 --> 00:38:11
the sliding window approach so here for

00:38:07 --> 00:38:13
instance if you have if you have a pixel

00:38:10 --> 00:38:16
accurate snow detector that you slide

00:38:12 --> 00:38:18
across the image then you'll be able to

00:38:15 --> 00:38:21
build a representation of those patches

00:38:17 --> 00:38:24
of snow and drag appropriately around

00:38:20 --> 00:38:26
them so that works pretty well but as

00:38:23 --> 00:38:28
you can imagine is a little expensive

00:38:25 --> 00:38:31
computation computation because it's

00:38:27 --> 00:38:33
like the if follow if you remember I

00:38:30 --> 00:38:35
know if you if you've seen them actually

00:38:32 --> 00:38:36
it's like the old the whole the matrix

00:38:34 --> 00:38:39
printing it's like you had a printer and

00:38:35 --> 00:38:41
it had to go and print the page

00:38:38 --> 00:38:43
point-by-point all right so it was

00:38:40 --> 00:38:46
pretty well but it's pretty slow

00:38:42 --> 00:38:49
obviously but it's very analogous to

00:38:45 --> 00:38:51
that but it works pretty good so so that

00:38:48 --> 00:38:53
was pretty well but you need obviously

00:38:50 --> 00:38:56
ou need to be very conscious on which

00:38:52 --> 00:39:00
area of the of the of the scene you want

00:38:55 --> 00:39:03
o apply it to to to stay efficient

00:38:59 --> 00:39:05
fortunately many of the objects you you

00:39:02 --> 00:39:07
need to care about have predefined

00:39:04 --> 00:39:10
priors so Francis if you take a car from

00:39:06 --> 00:39:13
the bird from the top down view from the

00:39:09 --> 00:39:15
birds view it's gonna be a rectangle you

00:39:12 --> 00:39:18
can you can take that that shape prior

00:39:14 --> 00:39:20
into consideration in most cases even on

00:39:17 --> 00:39:22
the on the lanes on the driving lanes

00:39:19 --> 00:39:23
they're gonna go in in similar

00:39:21 --> 00:39:25
directions whether whether they go

00:39:22 --> 00:39:28
forward or they come the other way

00:39:24 --> 00:39:31
they're gonna go in the direction of the

00:39:27 --> 00:39:33
lanes same for address and streets so

00:39:30 --> 00:39:38
you can use those priors to actually do

00:39:32 --> 00:39:41
some more efficient deep learning that

00:39:37 --> 00:39:44
in the literature is its convener the

00:39:40 --> 00:39:46
ideas of single-shot multi box constants

00:39:43 --> 00:39:48
o so here again you would start with

00:39:45 --> 00:39:50
e convolution towers but what you do

00:39:47 --> 00:39:51
nly one pass of convolution it's like

00:39:49 --> 00:39:55
it's the same difference between a dot

00:39:50 --> 00:39:57
matrix printer and and press right that

00:39:54 --> 00:40:00
would print a page at once

00:39:56 --> 00:40:02
it's not an allergy but I think that

00:39:59 --> 00:40:05
conveys the idea pretty well so here you

00:40:01 --> 00:40:07
would train a deep deep net that would

00:40:04 --> 00:40:10
irectly take the whole projection of

00:40:06 --> 00:40:14
just sensor data and output boxes that

00:40:09 --> 00:40:16
encode the pores you have so here

00:40:13 --> 00:40:18
for instance I can show you how such a

00:40:15 --> 00:40:20
thing would work for cone detection so

00:40:17 --> 00:40:23
you can see that we don't have all the

00:40:19 --> 00:40:25
fidelity of the per pixel cone detection

00:40:22 --> 00:40:26
but we not really care about that we

00:40:24 --> 00:40:29
just need to know there is a cone

00:40:25 --> 00:40:31
somewhere and we take a box prior and

00:40:28 --> 00:40:35
obviously what what that image is also

00:40:30 --> 00:40:37
meant to show is that since it's a it's

00:40:34 --> 00:40:39
a lot cheaper computed computationally

00:40:36 --> 00:40:42
ou can obviously run that on a pretty

00:40:38 --> 00:40:44
wide range of space and and even if you

00:40:41 --> 00:40:46
have a lot of them that's still easy the

00:40:43 --> 00:40:51
city is going to be a very efficient

00:40:45 --> 00:40:54
way to get to get that data so

00:40:50 --> 00:40:57
we talked about the member the flashing

00:40:53 --> 00:41:02
lights on top of the police car so even

00:40:56 --> 00:41:04
if you if you properly detect and

00:41:01 --> 00:41:07
segment cars let's say on the road many

00:41:03 --> 00:41:08
cars are very special semantics so here

00:41:06 --> 00:41:11
in that on that slide I'm showing you

00:41:07 --> 00:41:14
many examples of evie emergency vehicles

00:41:10 --> 00:41:15
that you need to visually to understand

00:41:13 --> 00:41:17
you need to understand first that it is

00:41:14 --> 00:41:19
an Eevee and to whether the Eevee is

00:41:16 --> 00:41:21
active or not so school births are not

00:41:18 --> 00:41:22
actually emergency vehicles but

00:41:20 --> 00:41:25
obviously whether the bus has lights on

00:41:21 --> 00:41:28
or the bus has a stop sign open on the

00:41:24 --> 00:41:30
side carry heavy semantics that you need

00:41:27 --> 00:41:32
to understand so how do you deal with

00:41:29 --> 00:41:35
at back to the deep learning

00:41:31 --> 00:41:40
techniques one thing you could do is is

00:41:34 --> 00:41:42
take that patch build a new convolution

00:41:39 --> 00:41:45
tower and be the classifier on top of

00:41:41 --> 00:41:47
that and essentially build a school bus

00:41:44 --> 00:41:49
classifier a school bus with light sound

00:41:46 --> 00:41:52
classifier a school bus with stop sign

00:41:48 --> 00:41:53
open classifier I'm pretty sure that

00:41:51 --> 00:41:55
would work pretty well but obviously it

00:41:52 --> 00:41:57
would be a lot of work and and pretty

00:41:54 --> 00:41:59
expensive to run on the car

00:41:56 --> 00:42:00
because we need to and convolution

00:41:58 --> 00:42:05
layers typically are the

00:41:59 --> 00:42:08
most expensive pieces of a neural net so

00:42:04 --> 00:42:10
ne better thing to do is to use to use

00:42:07 --> 00:42:11
mbeddings so

00:42:09 --> 00:42:12
if you're not familiar with it

00:42:10 --> 00:42:16
embeddings essentially are vector

00:42:11 --> 00:42:18
epresentations of objects that you can

00:42:15 --> 00:42:20
learn with deep nets that will that

00:42:17 --> 00:42:22
really carry some semantic meaning of

00:42:19 --> 00:42:26
those objects so for instance you've

00:42:21 --> 00:42:29
given given a vehicle you can build a

00:42:25 --> 00:42:31
vector that's gonna carry the

00:42:28 --> 00:42:33
information that that vehicle is a

00:42:30 --> 00:42:36
school bus whether the lights are on

00:42:32 --> 00:42:37
whether the stop sign is open and then

00:42:35 --> 00:42:39
you you're back into a vector space

00:42:36 --> 00:42:42
which is much smaller much more

00:42:38 --> 00:42:44
fficient that you can operate in to do

00:42:41 --> 00:42:46
further further processing

00:42:43 --> 00:42:48
so those embeddings have been actually

00:42:45 --> 00:42:51
historically they've been more closely

00:42:47 --> 00:42:54
associated with word embeddings so in a

00:42:50 --> 00:42:56
typical text if you were able to build

00:42:53 --> 00:42:58
those vectors with word alt of words

00:42:55 --> 00:42:59
right so out of every word in a piece of

00:42:57 --> 00:43:00
text you'll be the vector that

00:42:58 --> 00:43:02
represents the meaning of that world and

00:42:59 --> 00:43:04
then if you look at the sequence of

00:43:01 --> 00:43:07
those words and operate in the vector

00:43:03 --> 00:43:09
space you start to understand the

00:43:06 --> 00:43:11
semantics of those sentences right so

00:43:08 --> 00:43:14
ne of the early projects that you can

00:43:10 --> 00:43:17
look at is called work to Veck which was

00:43:13 --> 00:43:19
done in a DNP group at Google

00:43:16 --> 00:43:21
where they were able to beat such things

00:43:18 --> 00:43:24
and and and they discovered that that

00:43:20 --> 00:43:26
embedding space actually carried some

00:43:23 --> 00:43:29
interesting vector space properties such

00:43:25 --> 00:43:31
as if you took the vector for king- the

00:43:28 --> 00:43:33
vector for man plus the vector for women

00:43:30 --> 00:43:35
actually you ended up with a vector

00:43:32 --> 00:43:37
whether the closest word to that vector

00:43:34 --> 00:43:40
would be Queen essentially right so so

00:43:36 --> 00:43:41
that's to show you how those those

00:43:39 --> 00:43:43
vector representations can be very

00:43:40 --> 00:43:50
powerful in the amount of information

00:43:42 --> 00:43:53
you can they can contain let's talk

00:43:49 --> 00:43:56
about pedestrians so we talked about

00:43:52 --> 00:44:00
semantics image segmentation remember so

00:43:55 --> 00:44:01
the ability to go pixel by pixel for for

00:43:59 --> 00:44:04
things that that don't really have a

00:44:00 --> 00:44:08
shape we talked about using shape priors

00:44:03 --> 00:44:10
but pedestrians actually combine the

00:44:07 --> 00:44:12
complexity of those of those two

00:44:09 --> 00:44:15
approaches

00:44:11 --> 00:44:18
for many reasons one is that they

00:44:14 --> 00:44:21
obviously they are deformable and

00:44:17 --> 00:44:24
pedestrians come with many shapes and

00:44:20 --> 00:44:27
poses as you can see here I think here

00:44:23 --> 00:44:31
you have a guy on someone on the on the

00:44:26 --> 00:44:34
skateboard crouching more more unusual

00:44:30 --> 00:44:35
poses that you need to understand and

00:44:33 --> 00:44:38
the recall you need to have on

00:44:34 --> 00:44:40
pedestrian is very high and pedestrians

00:44:37 --> 00:44:42
how up in many different situations so

00:44:39 --> 00:44:43
for instance here you know clearly

00:44:41 --> 00:44:45
pedestrians that you need to see because

00:44:42 --> 00:44:47
that's a good chance when you when you

00:44:44 --> 00:44:49
do your behavior prediction that that

00:44:46 --> 00:44:54
person here is gonna jump out of a car I

00:44:48 --> 00:44:57
need to be ready for that so last but

00:44:53 --> 00:44:59
not least predicting the behavior of

00:44:56 --> 00:45:01
pedestrian is really hard because they

00:44:58 --> 00:45:03
move in any direction that car moving

00:45:00 --> 00:45:04
that direction you can safely bet

00:45:02 --> 00:45:07
connect it's gonna it's not a drastic

00:45:03 --> 00:45:09
keychain angle in in a moment's notice

00:45:06 --> 00:45:10
right but if you take children for

00:45:08 --> 00:45:13
instance it's a little more complicated

00:45:09 --> 00:45:15
right so they may not pay attention they

00:45:12 --> 00:45:18
may jump in any direction and you need

00:45:14 --> 00:45:20
to be ready for that so it's harder in

00:45:17 --> 00:45:22
terms of shape prior it's harder in

00:45:19 --> 00:45:24
terms of recall and it's also harder in

00:45:21 --> 00:45:25
terms of prediction right then you need

00:45:23 --> 00:45:27
to have a fine understanding of the

00:45:24 --> 00:45:30
semantics to understand that another

00:45:26 --> 00:45:33
example here is that we encountered is

00:45:29 --> 00:45:35
you get to an intersection and you have

00:45:32 --> 00:45:39
a visually impaired person that's

00:45:34 --> 00:45:41
jaywalking on the intersection and you

00:45:38 --> 00:45:42
obviously need to understand all of that

00:45:40 --> 00:45:47
o know that you need to yield to that

00:45:42 --> 00:45:50
person pretty clearly so person on the

00:45:46 --> 00:45:54
road maybe you should yield to it to him

00:45:49 --> 00:45:56
not easy so for instance here so there

00:45:53 --> 00:45:59
is actually I don't I don't know if it's

00:45:55 --> 00:46:01
a real person or a mannequin or

00:45:58 --> 00:46:03
something right so but here we go

00:46:00 --> 00:46:04
something that frankly really looks like

00:46:02 --> 00:46:07
a pedestrian that you should probably

00:46:03 --> 00:46:11
classify the pedestrian but lying on the

00:46:06 --> 00:46:13
bed of a pickup truck so and

00:46:10 --> 00:46:15
obviously you shouldn't yield to that

00:46:12 --> 00:46:17
person right because if you if you were

00:46:14 --> 00:46:19
to and yielding to a pedestrian at 35

00:46:16 --> 00:46:21
miles per hour for instance ease is

00:46:18 --> 00:46:23
hitting the brakes pretty hard right and

00:46:20 --> 00:46:25
with with the risk of where we are we

00:46:22 --> 00:46:29
New York Region so obviously you need to

00:46:24 --> 00:46:31
understand that that that person is

00:46:28 --> 00:46:34
travelling with a truck and he's not

00:46:30 --> 00:46:38
actually on the road and it's okay to

00:46:33 --> 00:46:40
not hear - to him so those are examples

00:46:37 --> 00:46:42
of the rich region of the semantics you

00:46:39 --> 00:46:45
need to understand obviously one way to

00:46:41 --> 00:46:48
do that is to start and understand the

00:46:44 --> 00:46:50
behavior of things over time everything

00:46:47 --> 00:46:52
we talked about up until now in the how

00:46:49 --> 00:46:54
e use deep learning to solve some of

00:46:51 --> 00:46:56
these problems was on a pure friend

00:46:53 --> 00:46:57
basis but understanding that that person

00:46:55 --> 00:46:59
is moving with the truck versus the

00:46:56 --> 00:47:01
jaywalker in the middle of the

00:46:58 --> 00:47:03
intersection viously do that kind of

00:47:00 --> 00:47:08
information you can get to if you

00:47:02 --> 00:47:10
observe the behavior of a time back to

00:47:07 --> 00:47:11
the embeddings so if you had vector if

00:47:09 --> 00:47:13
you have vector representations of those

00:47:10 --> 00:47:15
objects you can start and track them

00:47:13 --> 00:47:16
over time

00:47:14 --> 00:47:19
so a common technique that you can use

00:47:15 --> 00:47:21
to get there is to use a recurrent

00:47:18 --> 00:47:24
neural networks that essentially are

00:47:20 --> 00:47:26
networks that will build a state that

00:47:23 --> 00:47:27
gets better and better as it gets more

00:47:25 --> 00:47:30
observation sequential observations of

00:47:26 --> 00:47:31
or your pattern right so for instance

00:47:29 --> 00:47:34
coming back to the to the world's

00:47:30 --> 00:47:36
example I gave her earlier you can you

00:47:33 --> 00:47:38
see you have one word you see its vector

00:47:35 --> 00:47:40
epresentation another one the sentence

00:47:37 --> 00:47:42
saying you understand more but what did

00:47:39 --> 00:47:45
some what the author is trying to say

00:47:41 --> 00:47:46
third word fourth word at the end of the

00:47:44 --> 00:47:47
sentence you had a good understanding

00:47:45 --> 00:47:51
and you can start to translate Winston's

00:47:46 --> 00:47:53
right so he has a similar idea if you if

00:47:50 --> 00:47:54
you understand if you have a semantic

00:47:52 --> 00:47:57
representation and coding in an

00:47:53 --> 00:48:00
embedding for the pedestrian and the car

00:47:56 --> 00:48:02
under it and track that over time and

00:47:59 --> 00:48:05
build a state you that that gets more

00:48:01 --> 00:48:07
and more meaning as time goes by you're

00:48:04 --> 00:48:08
going to get closer and closer to the to

00:48:06 --> 00:48:11
a good understanding of what's going on

00:48:07 --> 00:48:14
in the scene right so my my point here

00:48:10 --> 00:48:17
is those vector representation combined

00:48:13 --> 00:48:20
with recurrent neural networks is a

00:48:16 --> 00:48:22
common technique that that can help you

00:48:19 --> 00:48:22
figure that out

00:48:23 --> 00:48:33
back to the point when you're 90% done

00:48:27 --> 00:48:35
you still have 90% to go and so to get

00:48:32 --> 00:48:40
o the last leg of my talk here today I

00:48:34 --> 00:48:43
want to give you some appreciation for

00:48:39 --> 00:48:45
what it takes to truly build a machine

00:48:42 --> 00:48:48
learning system at scale and in

00:48:44 --> 00:48:50
sterilize it so up till now we talked a

00:48:47 --> 00:48:52
lot about algorithms as I said earlier

00:48:49 --> 00:48:53
algorithms have been a breakthrough and

00:48:51 --> 00:48:55
the efficiency of those algorithms

00:48:52 --> 00:48:58
has been a breakthrough for us to

00:48:54 --> 00:49:01
succeed the self-driving task but it

00:48:57 --> 00:49:07
akes a lot more than algorithms to

00:49:00 --> 00:49:11
actually get there the first piece that

00:49:06 --> 00:49:14
you need to 10x is ease around labeling

00:49:10 --> 00:49:17
efforts so a lot of the algorithms we

00:49:13 --> 00:49:20
talked about are supervised meaning that

00:49:16 --> 00:49:22
even if you have a strong Network attack

00:49:19 --> 00:49:23
sure and you come up with the right one

00:49:21 --> 00:49:26
there are supervised in the sense that

00:49:22 --> 00:49:27
you need you need to give in order to to

00:49:25 --> 00:49:29
train that network you need to come up

00:49:26 --> 00:49:32
with a representative set high-quality

00:49:28 --> 00:49:35
set of label data that's gonna map some

00:49:31 --> 00:49:37
input to predict the output you want it

00:49:34 --> 00:49:38
o predict right so that's a pedestrian

00:49:36 --> 00:49:41
that's a car that's a pedestrian that's

00:49:37 --> 00:49:44
a car and and the network will learn in

00:49:40 --> 00:49:47
a supervised way how to build the right

00:49:43 --> 00:49:49
representations so there's a lot

00:49:46 --> 00:49:53
obviously the unsupervised space is a

00:49:48 --> 00:49:56
very active domain of research our own

00:49:52 --> 00:49:57
team of research at wham-o and

00:49:55 --> 00:50:00
collaboration with Google is around

00:49:56 --> 00:50:02
either on that domain but today a lot of

00:49:59 --> 00:50:05
it still is revised so to give you

00:50:01 --> 00:50:07
orders of magnitude so here represented

00:50:04 --> 00:50:10
in a logarithmic scale

00:50:06 --> 00:50:12
the size of a couple data sets so you

00:50:09 --> 00:50:15
may be familiar with image net which i

00:50:11 --> 00:50:20
think is the 15 million of such labels

00:50:14 --> 00:50:22
range that guy jumping represents number

00:50:19 --> 00:50:27
of seconds from birth to collect

00:50:21 --> 00:50:28
correlation pre-cutting suing and so

00:50:26 --> 00:50:31
that's that's kind of that's more of an

00:50:27 --> 00:50:34
historical tidbit but the first member

00:50:30 --> 00:50:35
the find I

00:50:33 --> 00:50:39
the hustle the street number on the

00:50:34 --> 00:50:42
facade problem so in the back in those

00:50:38 --> 00:50:44
days it took us a multi billion label

00:50:41 --> 00:50:45
data set to actually teach the network

00:50:43 --> 00:50:47
right so those were very early days

00:50:44 --> 00:50:49
today we do a lot more a lot better

00:50:46 --> 00:50:53
obviously but that's to give you an idea

00:50:48 --> 00:50:55
of scale so being able to put to have

00:50:52 --> 00:50:58
labeling operations that produce large

00:50:54 --> 00:50:59
and high quality label data sets is key

00:50:57 --> 00:51:03
for your success and that's a big piece

00:50:58 --> 00:51:04
of the puzzle you need to solve

00:51:02 --> 00:51:08
so obviously today we do a lot more

00:51:03 --> 00:51:12
better not only we require less data but

00:51:07 --> 00:51:14
we also can generate those data set much

00:51:11 --> 00:51:15
more efficiently you can use

00:51:13 --> 00:51:18
machine running itself to come up with

00:51:14 --> 00:51:20
labels and use operators and more

00:51:17 --> 00:51:23
importantly use ibrain models where you

00:51:19 --> 00:51:25
se labels to to more and more fix the

00:51:22 --> 00:51:26
discrepancies or the mistakes and I'll

00:51:24 --> 00:51:28
have to label the whole thing from

00:51:25 --> 00:51:30
scratch so combining so that's a whole

00:51:27 --> 00:51:30
space of active learning and stuff like

00:51:29 --> 00:51:32
that

00:51:29 --> 00:51:34
combining those those techniques

00:51:31 --> 00:51:36
together obviously you can get you can

00:51:33 --> 00:51:39
get to completion faster it's very

00:51:35 --> 00:51:41
common to still need so that in the

00:51:38 --> 00:51:45
minions minions range kind of same pose

00:51:40 --> 00:51:48
to train a robust solution another piece

00:51:44 --> 00:51:51
is around computation compute computing

00:51:47 --> 00:51:55
power so again that's that's that's kind

00:51:50 --> 00:51:57
of a historical tidbit around the street

00:51:54 --> 00:51:59
number models so here it's a detection

00:51:56 --> 00:52:04
model and here is the transcriber model

00:51:58 --> 00:52:06
so obviously comparison is not is only

00:52:03 --> 00:52:08
worth what it's worth here but if you

00:52:05 --> 00:52:10
look at number of neurons or number of

00:52:07 --> 00:52:13
connections per neuron which are two

00:52:09 --> 00:52:16
important parameters of a Fenny neural

00:52:12 --> 00:52:18
net that gives you an idea of scale it's

00:52:15 --> 00:52:20
obviously it's many orders of magnitude

00:52:17 --> 00:52:23
away from what the human brain can do

00:52:19 --> 00:52:25
but you start to be competitive in

00:52:22 --> 00:52:26
vent in some cases in the in the Mon

00:52:24 --> 00:52:29
space right

00:52:25 --> 00:52:31
so again historical historical data but

00:52:28 --> 00:52:33
he main point here is that you need a

00:52:30 --> 00:52:34
lot of computation and you need a you

00:52:32 --> 00:52:39
need to have access to a lot of

00:52:33 --> 00:52:42
computing to either train or an infer

00:52:38 --> 00:52:46
those train models on real time on the

00:52:41 --> 00:52:48
sea and that requires a lot of

00:52:45 --> 00:52:50
very robust engineering an

00:52:47 --> 00:52:54
infrastructure development to get to

00:52:49 --> 00:52:57
those to those scales but Google is

00:52:53 --> 00:52:59
pretty good at that and and obviously we

00:52:56 --> 00:53:01
at Wayne who have access to the Google

00:52:58 --> 00:53:02
infrastructure and tools to essentially

00:53:00 --> 00:53:05
get there

00:53:01 --> 00:53:07
so I know if you heard so the way the

00:53:04 --> 00:53:10
way it's happening at Google is around a

00:53:06 --> 00:53:12
tensorflow so maybe you've heard about

00:53:09 --> 00:53:18
it as a moral programming language

00:53:11 --> 00:53:21
to program machine learning and and

00:53:17 --> 00:53:24
encode network architectures but

00:53:20 --> 00:53:27
actually tensorflow is also becoming or

00:53:23 --> 00:53:30
is actually the whole ecosystem that can

00:53:26 --> 00:53:32
combine combine all those pcs together

00:53:29 --> 00:53:35
and do machine learning at scale at

00:53:31 --> 00:53:37
Google my mo so it's as I said it's a

00:53:34 --> 00:53:40
language that allow teams that allows

00:53:36 --> 00:53:43
teams to collaborate and work together

00:53:39 --> 00:53:45
that's a data representation in which

00:53:42 --> 00:53:47
you can represent your your label data

00:53:44 --> 00:53:48
sets for instance or your training

00:53:46 --> 00:53:52
batches

00:53:47 --> 00:53:54
that's a runtime that that that you can

00:53:51 --> 00:53:56
deploy on to Google Data Centers and you

00:53:53 --> 00:53:59
need you need it's good that we have

00:53:55 --> 00:54:02
access to that computing power another

00:53:58 --> 00:54:05
piece is his accelerators so back in the

00:54:01 --> 00:54:07
arly days when we had CPUs to 1d

00:54:04 --> 00:54:10
planning models at scale which is less

00:54:06 --> 00:54:14
efficient and over time GPUs came into

00:54:09 --> 00:54:17
the mix and and and Google is proactive

00:54:13 --> 00:54:19
into developing very advanced set of

00:54:16 --> 00:54:22
hardware accelerators so you have heard

00:54:18 --> 00:54:26
about GPUs tensorflow processing units

00:54:21 --> 00:54:27
which has which are proprietary chipsets

00:54:25 --> 00:54:30
that rule deploys in its data centers

00:54:26 --> 00:54:32
that are you to train and infer more

00:54:29 --> 00:54:35
fficiently this deep learning models

00:54:31 --> 00:54:37
and tensorflow is the glue that allows

00:54:34 --> 00:54:40
you to deploy at scale across those

00:54:36 --> 00:54:46
pcs very important piece to get

00:54:39 --> 00:54:49
here so it's nice you're smart you

00:54:45 --> 00:54:52
build we build a smart algorithm we were

00:54:48 --> 00:54:56
able to collect enough data to to train

00:54:51 --> 00:54:58
it great ship it well

00:54:55 --> 00:54:59
self-driving system is pretty

00:54:57 --> 00:55:01
sophisticated

00:54:58 --> 00:55:03
and that's a complex system to

00:55:00 --> 00:55:07
understand and that's a complex system

00:55:02 --> 00:55:09
that that requires extensive testing and

00:55:06 --> 00:55:11
I think the last leg that you need to

00:55:08 --> 00:55:16
cover to do machine learning at scale

00:55:10 --> 00:55:19
and and with a high safety bar is around

00:55:15 --> 00:55:23
your testing program so we have three

00:55:18 --> 00:55:25
legs that that we that we use to make

00:55:22 --> 00:55:27
sure that we our machine running is

00:55:24 --> 00:55:29
ready for production one is around we

00:55:26 --> 00:55:31
are what driving another one is around

00:55:28 --> 00:55:33
simulation and the last one is around a

00:55:30 --> 00:55:35
structured testing so I'll come back to

00:55:32 --> 00:55:38
that in terms of we are about driving

00:55:34 --> 00:55:41
obviously there is no way around it if

00:55:37 --> 00:55:43
you want to encounter situations and

00:55:40 --> 00:55:47
see and understand how you behave you

00:55:42 --> 00:55:48
need to drive so as you can see the

00:55:46 --> 00:55:50
driving at way mo has been accelerating

00:55:47 --> 00:55:54
over time still accelerating so we

00:55:49 --> 00:55:57
crossed three million minds driven back

00:55:53 --> 00:56:00
in May 2017 and only six months later

00:55:56 --> 00:56:04
back in November we reached four million

00:55:59 --> 00:56:06
so that's an accelerating pace obviously

00:56:03 --> 00:56:08
not every mind is equal and what you

00:56:05 --> 00:56:11
care about are the mice that carry new

00:56:07 --> 00:56:13
situations and important situations so

00:56:10 --> 00:56:14
what we do obviously is driving in many

00:56:12 --> 00:56:17
different situations

00:56:13 --> 00:56:23
o those mice got acquired across 20

00:56:16 --> 00:56:26
cities many weather conditions and many

00:56:22 --> 00:56:28
environments it's forming a lot so to

00:56:25 --> 00:56:29
give you another of magnitude so that's

00:56:27 --> 00:56:34
when about 60 times around the globe

00:56:28 --> 00:56:35
okay even more importantly it's not to

00:56:33 --> 00:56:39
point it's hard to estimate that's

00:56:34 --> 00:56:42
probably around 300 years of human

00:56:38 --> 00:56:44
driving equivalent all right so so in

00:56:41 --> 00:56:46
that data set potentially you have 300

00:56:43 --> 00:56:49
years of experience that your machine

00:56:45 --> 00:56:55
learning can tap into to learn to learn

00:56:48 --> 00:57:00
what to do even more importantly is your

00:56:54 --> 00:57:02
ability to simulate obviously the

00:56:59 --> 00:57:04
software changes regularly so if for

00:57:01 --> 00:57:07
each new revision of the software you

00:57:03 --> 00:57:08
need to go and we drive four million

00:57:06 --> 00:57:10
miles it's not very practical it's going

00:57:07 --> 00:57:12
to take a lot of time so the ability to

00:57:11 --> 00:57:15
good enough simulation that you can

00:57:13 --> 00:57:17
replay all those miles that you've

00:57:14 --> 00:57:19
driven in any new iteration of the

00:57:16 --> 00:57:21
software is key for you to decide if the

00:57:18 --> 00:57:26
new version is ready or not even more

00:57:20 --> 00:57:28
important is your ability to to make

00:57:25 --> 00:57:31
those mozzie more even more efficient

00:57:27 --> 00:57:34
and tweak them so here is a screenshot

00:57:30 --> 00:57:37
of an internal tool that we call a car

00:57:33 --> 00:57:40
craft that essentially gives us the

00:57:36 --> 00:57:42
ability to fast or change the parameters

00:57:39 --> 00:57:44
of the actual scene we've driven so what

00:57:41 --> 00:57:45
if the cars were doing in a slightly

00:57:43 --> 00:57:48
different speed

00:57:44 --> 00:57:50
what if there was an extra car that that

00:57:47 --> 00:57:52
was on the scene what if a pedestrian

00:57:49 --> 00:57:53
crossed in front of the car so so you

00:57:51 --> 00:57:57
can use the actual live on Mars as a

00:57:52 --> 00:57:59
base and then augment them into new

00:57:56 --> 00:58:03
situations that you can test your drive

00:57:58 --> 00:58:05
again your sub running system against so

00:58:02 --> 00:58:07
that's a very powerful way to actually

00:58:04 --> 00:58:10
drastically multiply the impact of any

00:58:06 --> 00:58:13
animal you drive and simulation is

00:58:09 --> 00:58:17
another of those massive scales project

00:58:12 --> 00:58:19
hat you need to cover so a couple

00:58:16 --> 00:58:21
orders of magnitude here so using

00:58:18 --> 00:58:25
Google's infrastructure we have the

00:58:20 --> 00:58:28
ability to run a vehicle fleet of 25,000

00:58:24 --> 00:58:30
cars 24/7 in data centers so those those

00:58:27 --> 00:58:33
are those are software stacks that

00:58:29 --> 00:58:35
immolate the driving across either roll

00:58:32 --> 00:58:37
miles that we've driven or modified

00:58:34 --> 00:58:39
miles that help us understand the

00:58:36 --> 00:58:41
behavior of a software

00:58:38 --> 00:58:46
so do you another of magnitude last year

00:58:40 --> 00:58:48
alone we drove 2.5 billion of those

00:58:45 --> 00:58:50
miles in in data centers right so

00:58:47 --> 00:58:52
remember four million driven miles total

00:58:49 --> 00:58:56
l the way to 2.5 so that's three

00:58:51 --> 00:58:58
orders of magnitude of expansion in your

00:58:55 --> 00:59:02
ability to truly understand how

00:58:57 --> 00:59:05
the system behaves but there's still a

00:59:01 --> 00:59:08
long tail there's a whole tail or a long

00:59:04 --> 00:59:11
tail of situations that will happen very

00:59:07 --> 00:59:15
rarely so the way we decided to tackle

00:59:10 --> 00:59:18
those is to set up our own testing

00:59:14 --> 00:59:20
facility that is a mark of of a city and

00:59:17 --> 00:59:24
riving situation so we do that in a in

00:59:19 --> 00:59:25
a 90 acre testing facility on former Air

00:59:23 --> 00:59:28
Force Base in

00:59:24 --> 00:59:32
to California that we set up with

00:59:27 --> 00:59:34
traffic lights railroad crossings I mean

00:59:31 --> 00:59:37
truly trying to reproduce a real-life

00:59:33 --> 00:59:39
situation and where we set up very

00:59:36 --> 00:59:41
specific scenarios that we haven't

00:59:38 --> 00:59:42
necessarily encountered during our

00:59:40 --> 00:59:44
guitar driving that but that we want to

00:59:41 --> 00:59:47
test and again feedback into the

00:59:43 --> 00:59:49
simulation we augment using the same

00:59:46 --> 00:59:52
illumination strategies and an inject

00:59:48 --> 00:59:53
into our 2.5 billion miles driven so

00:59:51 --> 00:59:58
here I'm gonna show you two quick

00:59:52 --> 00:59:59
examples of such tests so here just just

00:59:57 --> 01:00:02
have a cab back up as the self-driving

00:59:58 --> 01:00:05
car get gets close and see what happens

01:00:01 --> 01:00:07
and use all those sensor data to and we

01:00:04 --> 01:00:10
inject them into simulation another

01:00:06 --> 01:00:15
example is going to be around people

01:00:09 --> 01:00:17
dropping boxes so remember try to

01:00:14 --> 01:00:19
imagine the kind of understanding

01:00:16 --> 01:00:21
segmentation you need to do to

01:00:18 --> 01:00:22
understand to understand what's

01:00:20 --> 01:00:23
happening there and cementing

01:00:21 --> 01:00:26
understanding you have and to make it

01:00:22 --> 01:00:28
even more interesting note that the car

01:00:25 --> 01:00:30
that has been put on the other side so

01:00:27 --> 01:00:33
that swerving is not an option right

01:00:29 --> 01:00:35
without hitting the car alright so

01:00:32 --> 01:00:36
driving complex situations that go from

01:00:34 --> 01:00:39
perception to motion planning the whole

01:00:35 --> 01:00:42
stack and make sure that we are really

01:00:38 --> 01:00:47
ball even in those long time ignore that

01:00:41 --> 01:00:51
examples and we're done it looks like a

01:00:46 --> 01:00:53
lot of work I wish but no actually we

01:00:50 --> 01:00:55
still have we still have a lot of very

01:00:52 --> 01:00:56
interesting work coming someone have

01:00:54 --> 01:00:58
much time to go into too many of those

01:00:55 --> 01:01:01
details but I'm just gonna give you two

01:00:57 --> 01:01:04
the directions the first one is around

01:01:00 --> 01:01:08
growing our what we call OD d so

01:01:03 --> 01:01:12
perating operating the main operating

01:01:07 --> 01:01:14
design domain so extending extending our

01:01:11 --> 01:01:17
fleet of the driving cars not only

01:01:13 --> 01:01:20
geographically so draw graphically

01:01:16 --> 01:01:23
meaning going into deploying into urban

01:01:19 --> 01:01:27
cores deploying into different weather

01:01:22 --> 01:01:29
conditions so just as of this morning on

01:01:26 --> 01:01:32
yesterday we announced

01:01:28 --> 01:01:34
that we we're gonna grow testing in San

01:01:31 --> 01:01:36
Francisco for instance with way more

01:01:33 --> 01:01:39
cars that bring urban environments

01:01:35 --> 01:01:43
lopes fog as I said and so that's

01:01:38 --> 01:01:44
obviously a very very important

01:01:42 --> 01:01:46
direction that we need to go into and

01:01:43 --> 01:01:48
where machine learning is going to keep

01:01:45 --> 01:01:50
laying a very important role another

01:01:47 --> 01:01:54
area is around the cementing

01:01:49 --> 01:01:56
understanding so in case you have an

01:01:53 --> 01:01:59
obvious haven't noticed yet I'm from

01:01:55 --> 01:02:04
France that's a that's a famous

01:01:58 --> 01:02:07
roundabout in Paris + delete well which

01:02:03 --> 01:02:09
seems pretty chaotic but I've driven it

01:02:06 --> 01:02:13
many times without any issues touching

01:02:08 --> 01:02:16
wood but I know that it took a lot of

01:02:12 --> 01:02:19
semantics and an understanding for me to

01:02:15 --> 01:02:21
do it safely I have a lot I had a lot of

01:02:18 --> 01:02:25
expectations and what people do had a

01:02:20 --> 01:02:28
lot of communication visual gestures to

01:02:24 --> 01:02:31
essentially get it get through that that

01:02:27 --> 01:02:33
hing safely right so and those require

01:02:30 --> 01:02:36
a lot of a lot of a lot deeper semantic

01:02:32 --> 01:02:38
understanding of the scene around - for

01:02:35 --> 01:02:42
self-driving costume to get through so

01:02:37 --> 01:02:46
that's an example of a direction so back

01:02:41 --> 01:02:47
to my objectives I hope I covered many

01:02:45 --> 01:02:49
of those at least you have you have

01:02:46 --> 01:02:53
directions to for further reading and

01:02:48 --> 01:02:55
investigations on those those three

01:02:52 --> 01:02:58
objectives I had I had today first one

01:02:54 --> 01:03:00
was around context context of the space

01:02:57 --> 01:03:04
context of the history at Google in way

01:02:59 --> 01:03:08
mo and and how and how deep the roots

01:03:03 --> 01:03:10
are of the way back in time my

01:03:07 --> 01:03:13
second objective was to give you to tie

01:03:09 --> 01:03:14
in some of the technical algorithmic

01:03:12 --> 01:03:17
solutions that you may have talked about

01:03:13 --> 01:03:19
during that class into the practical

01:03:16 --> 01:03:22
cases we need to solve in the production

01:03:18 --> 01:03:26
system and that's been at least really

01:03:21 --> 01:03:28
emphasize the scale and the engineering

01:03:25 --> 01:03:32
infrastructure work that needs to happen

01:03:27 --> 01:03:36
to really take such a project into into

01:03:31 --> 01:03:37
attrition in a production system last

01:03:35 --> 01:03:41
weet

01:03:36 --> 01:03:42
hat's a scene with a kids on jumping on

01:03:40 --> 01:03:45
bags and as Frogger

01:03:41 --> 01:03:48
of course the scene and I think we have

01:03:44 --> 01:03:57
time for a few questions

01:03:47 --> 01:03:57
[Applause]

01:03:58 --> 01:04:04
since tend to fail at this intersection

01:04:01 --> 01:04:05
between perception and planning so your

01:04:03 --> 01:04:07
planner might assume something about a

01:04:04 --> 01:04:07
perfect world that perception cannot

01:04:06 --> 01:04:09
deliver

01:04:06 --> 01:04:11
so what's wondering if you use the

01:04:08 --> 01:04:13
simulation environment also to induce

01:04:10 --> 01:04:15
these perception failures or whether

01:04:12 --> 01:04:17
that's really specific for scenario

01:04:14 --> 01:04:18
you're testing and whether you have

01:04:16 --> 01:04:22
other validation arguments for the

01:04:17 --> 01:04:25
perception side very good question so

01:04:21 --> 01:04:27
ne thing I didn't mention is that the

01:04:24 --> 01:04:29
simulator obviously enables you to

01:04:26 --> 01:04:31
simulate many different layers in a

01:04:28 --> 01:04:33
stack and one of the one of the hardcore

01:04:30 --> 01:04:35
ngineering problems is to actually

01:04:32 --> 01:04:37
properly design your stack so that you

01:04:34 --> 01:04:38
can isolate and test independently like

01:04:36 --> 01:04:40
any dear August piece of software

01:04:37 --> 01:04:43
you need to have to have good aps and

01:04:39 --> 01:04:46
layers so we have we have such a layer

01:04:42 --> 01:04:49
in in our system between perception and

01:04:45 --> 01:04:51
planning and the way you write the way

01:04:48 --> 01:04:52
we test perception is more by measuring

01:04:50 --> 01:04:54
the performance of your part of your

01:04:51 --> 01:05:00
perception system across more of the

01:04:53 --> 01:05:02
real miles and and use and tweak the the

01:04:59 --> 01:05:03
output of the perception system with its

01:05:01 --> 01:05:04
mistakes so having having good

01:05:02 --> 01:05:06
understanding of the mistakes it make

01:05:03 --> 01:05:08
and reproduce those mistakes

01:05:05 --> 01:05:09
realistically in the new scenarios you

01:05:07 --> 01:05:12
would come up with a part of your

01:05:08 --> 01:05:13
simulator to realistically test your

01:05:11 --> 01:05:25
planning side of the planning side of

01:05:12 --> 01:05:27
the house conceived at scale and product

01:05:24 --> 01:05:30
produced at scale do you have a

01:05:26 --> 01:05:32
systematic way of creating the

01:05:29 --> 01:05:34
architectures of the embedded system you

01:05:31 --> 01:05:37
have so many choices for sensors

01:05:33 --> 01:05:39
algorithms each problem you showed has

01:05:36 --> 01:05:41
many different solutions that's gonna

01:05:38 --> 01:05:44
create different interfaces between each

01:05:40 --> 01:05:46
elements so how do you choose which

01:05:43 --> 01:05:49
architecture you put in a car that's

01:05:45 --> 01:05:50
true for any complex software

01:05:48 --> 01:05:52
stack

01:05:49 --> 01:05:54
so there's a combination of different

01:05:51 --> 01:05:56
hings so the first thing obviously that

01:05:53 --> 01:06:00
I didn't talk too much here but it's

01:05:55 --> 01:06:02
around the vast amount of research that

01:05:59 --> 01:06:05
we do that way mo but also we do in

01:06:01 --> 01:06:08
collaboration with Google teams to

01:06:04 --> 01:06:10
actually understand even what building

01:06:07 --> 01:06:13
blocks we have at we are at our

01:06:09 --> 01:06:15
disposals to to even play with right and

01:06:12 --> 01:06:18
come up with those production systems

01:06:14 --> 01:06:21
the other piece is obviously the one you

01:06:17 --> 01:06:25
decide to take all the way to production

01:06:20 --> 01:06:26
so you're right so the the two big

01:06:24 --> 01:06:29
elements here I would say the first one

01:06:25 --> 01:06:32
and the main element Frank frankly is is

01:06:28 --> 01:06:37
in your ability to so that that's that

01:06:31 --> 01:06:41
search actually will takes a lot of

01:06:36 --> 01:06:44
people to get to right so something I

01:06:40 --> 01:06:47
try to say is that to really part of the

01:06:43 --> 01:06:50
second 90% is your ability to grow

01:06:46 --> 01:06:52
your team and essentially grow the

01:06:49 --> 01:06:54
number of people will be able to

01:06:51 --> 01:06:56
productively participate in your

01:06:53 --> 01:06:59
engineering project and and that's where

01:06:55 --> 01:07:02
the the robustness we need to bring into

01:06:58 --> 01:07:06
ur development environment our testing

01:07:01 --> 01:07:08
is really key to be able to grow that

01:07:05 --> 01:07:11
team has that the biggest scale and

01:07:07 --> 01:07:12
essentially explore all those paths and

01:07:10 --> 01:07:15
come up with the best one right and at

01:07:11 --> 01:07:17
he end of the day the the robustness of

01:07:14 --> 01:07:20
testing is the judge that's what tells

01:07:17 --> 01:07:23
you whether an approach works not it's

01:07:19 --> 01:07:26
not a philosophical philosophical debate

01:07:22 --> 01:07:28
thank you for your talk so the car is

01:07:25 --> 01:07:31
making a decision at every single stop

01:07:27 --> 01:07:33
time you know on direction and speed and

01:07:30 --> 01:07:35
part of the reason why you have the

01:07:32 --> 01:07:37
simulation is so that you can test that

01:07:34 --> 01:07:38
hose decisions in every every like

01:07:36 --> 01:07:42
possible scenario

01:07:37 --> 01:07:43
so once self-driving cars become you

01:07:41 --> 01:07:47
know production ready and out on the

01:07:42 --> 01:07:48
streets do you expect that the decision

01:07:46 --> 01:07:50
will be made based on prior

01:07:47 --> 01:07:53
understanding of every single situation

01:07:49 --> 01:07:56
with which is possible or can the car

01:07:52 --> 01:07:58
make a new decision in real time based

01:07:55 --> 01:07:59
on its scene understanding and

01:07:57 --> 01:08:04
everything around it

01:07:58 --> 01:08:07
so I at the end of the day it's the goal

01:08:03 --> 01:08:11
of the system is not to to build a

01:08:06 --> 01:08:13
library that a library of events that

01:08:10 --> 01:08:16
you can reproduce by one by one and make

01:08:12 --> 01:08:17
sure that you encode if the analogy

01:08:15 --> 01:08:19
machine learning would be overfitting

01:08:16 --> 01:08:22
it's like if you if you if you

01:08:18 --> 01:08:24
encountered five situations I'm pretty

01:08:21 --> 01:08:25
sure you can hard code the perfect thing

01:08:23 --> 01:08:27
you need to do in those five situations

01:08:24 --> 01:08:29
but the sixth one happened if you don't

01:08:26 --> 01:08:33
generalize actually is gonna fall

01:08:28 --> 01:08:37
through so the really the complexity of

01:08:32 --> 01:08:39
what you need to do is extract the core

01:08:36 --> 01:08:43
principles that make that make you

01:08:38 --> 01:08:45
safely drive and and have the algorithms

01:08:42 --> 01:08:48
learn those principles rather than the

01:08:44 --> 01:08:51
specifics of any situation because as

01:08:47 --> 01:08:55
you said the parameter space of a real

01:08:50 --> 01:08:57
scene is infinite okay so we try to

01:08:54 --> 01:08:59
first that a little bit with with the

01:08:56 --> 01:09:02
simulator what if the cars went little

01:08:58 --> 01:09:04
faster or slower but the goal is not to

01:09:01 --> 01:09:06
enumerate all possibilities and make

01:09:03 --> 01:09:08
sure we dwell on those but the goal is

01:09:05 --> 01:09:11
to bring more diversity to the learning

01:09:07 --> 01:09:13
of those general principles that will be

01:09:10 --> 01:09:15
run by the system or will be coded in a

01:09:12 --> 01:09:17
system for for the car to behave

01:09:14 --> 01:09:24
properly and generalized when a new

01:09:16 --> 01:09:27
system new situation occurs okay okay

01:09:23 --> 01:09:30
fantastic talk one of the questions I

01:09:26 --> 01:09:32
had was you mentioned the difficulty of

01:09:29 --> 01:09:34
identifying snow because they could come

01:09:31 --> 01:09:37
in many different shapes one things that

01:09:33 --> 01:09:39
I immediately thought of was I know was

01:09:36 --> 01:09:41
just an urban legend but it was that

01:09:38 --> 01:09:43
urban legend about the Inuit having like

01:09:40 --> 01:09:47
150 different words for snow and you

01:09:42 --> 01:09:50
mentioned embeddings of objects do you

01:09:46 --> 01:09:54
think one possible approach might be to

01:09:49 --> 01:09:56
create a much wider array of object

01:09:53 --> 01:09:59
embeddings for things like snow I mean

01:09:55 --> 01:10:01
if you're many different types of snow

01:09:58 --> 01:10:04
could actually have pretty different

01:10:00 --> 01:10:07
impacts on driving whether it be just

01:10:03 --> 01:10:08
like a flurry or if it were be Thea kind

01:10:06 --> 01:10:12
of like a really heavy blizzard like we

01:10:07 --> 01:10:14
just had yeah I think from

01:10:11 --> 01:10:19
if you look at it from from an

01:10:13 --> 01:10:23
algorithmic point of view that that may

01:10:18 --> 01:10:25
make sense but maybe something I'd like

01:10:22 --> 01:10:28
to emphasize a little more is the the

01:10:24 --> 01:10:30
very hard line to walk is to walk the

01:10:27 --> 01:10:35
line of what's a greatly possible

01:10:29 --> 01:10:39
weather so what computationally feasible

01:10:34 --> 01:10:42
in the car right I think so too

01:10:38 --> 01:10:46
to two points on on your on your remark

01:10:41 --> 01:10:49
so if you had the processing power to

01:10:45 --> 01:10:50
process every point or every every to

01:10:48 --> 01:10:52
that to a load level of understanding

01:10:49 --> 01:10:54
and had the computing power to do that

01:10:51 --> 01:10:56
maybe that would be an approach but

01:10:53 --> 01:10:58
hat's that would be very expensive and

01:10:55 --> 01:11:02
that's a hard thing to do even more

01:10:57 --> 01:11:03
importantly having fine sense it

01:11:01 --> 01:11:06
wouldn't make sense to have a behavior

01:11:02 --> 01:11:07
prediction of every snowflake of the

01:11:05 --> 01:11:10
things you see on the side of the road

01:11:06 --> 01:11:11
right then and you need to group that's

01:11:09 --> 01:11:14
the whole point of segmentation you need

01:11:10 --> 01:11:17
to group what you see into semantic

01:11:13 --> 01:11:20
objects that are likely to exhibit

01:11:16 --> 01:11:22
behavior as a whole and reason

01:11:19 --> 01:11:23
at that level of abstraction to have a

01:11:21 --> 01:11:26
meaningful semantic understanding that

01:11:22 --> 01:11:31
you need to drive essentially right so

01:11:25 --> 01:11:34
yeah it's an in-between last question

01:11:30 --> 01:11:37
make it a good one thanks for the talk

01:11:33 --> 01:11:38
so if you're using perception for your

01:11:36 --> 01:11:40
scene understanding are you worried

01:11:37 --> 01:11:43
about like adversarial examples or

01:11:39 --> 01:11:44
things that have been demonstrated or do

01:11:42 --> 01:11:46
you can't believe that this like a

01:11:43 --> 01:11:49
real-world attack that could be used for

01:11:45 --> 01:11:52
perception based systems so generally

01:11:48 --> 01:11:56
speaking yeah I think I think even

01:11:51 --> 01:11:56
beyond even before your saw your attacks

01:11:55 --> 01:12:02
errors I mean errors can happen right

01:11:58 --> 01:12:04
here and Harris happen in every mode so

01:12:01 --> 01:12:06
I think a prime example of that which is

01:12:03 --> 01:12:08
not adversarial is the reflection case

01:12:05 --> 01:12:10
it's like you could as well have put a

01:12:07 --> 01:12:11
sticker on the car on the bus and say

01:12:09 --> 01:12:14
ou're confused do you think it's a car

01:12:11 --> 01:12:16
it's not the car but you don't need to

01:12:13 --> 01:12:17
put a sticker on the bus it's like the

01:12:15 --> 01:12:20
real life already brings a lot of those

01:12:16 --> 01:12:24
xamples right so it's really the way

01:12:19 --> 01:12:27
out is to way the first one is to to

01:12:23 --> 01:12:30
have sensors that complement each other

01:12:26 --> 01:12:33
all right so I try to emphasize that but

01:12:29 --> 01:12:35
really different sensors or different

01:12:32 --> 01:12:37
systems are not going to make the same

01:12:34 --> 01:12:38
mistakes and so they're gonna complement

01:12:36 --> 01:12:40
each other and that's a very important

01:12:37 --> 01:12:43
piece of redundancy that will be built

01:12:39 --> 01:12:48
into the system the other one is is also

01:12:42 --> 01:12:51
even in a refraction case is is isn't

01:12:47 --> 01:12:53
he understanding so so the way you as a

01:12:50 --> 01:12:56
human wouldn't be fooled is because you

01:12:52 --> 01:12:58
nderstand and you know it's not it's

01:12:55 --> 01:12:59
not a thing as that can happen the same

01:12:57 --> 01:13:03
way you know that Cal reflecting in the

01:12:58 --> 01:13:05
bus there's no way you can see through

01:13:02 --> 01:13:07
the bus and of a real car behind it so

01:13:04 --> 01:13:08
that level of an of semantic

01:13:06 --> 01:13:11
understanding is what is what he's gonna

01:13:07 --> 01:13:13
tell you what what what is true and what

01:13:10 --> 01:13:15
is not or what is a mistake an error in

01:13:12 --> 01:13:18
your stack right and so similar patterns

01:13:14 --> 01:13:20
apply we'd like to thank you very much

01:13:17 --> 01:13:24
Sasha Anu for coming to MIT

01:13:19 --> 01:13:24
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
