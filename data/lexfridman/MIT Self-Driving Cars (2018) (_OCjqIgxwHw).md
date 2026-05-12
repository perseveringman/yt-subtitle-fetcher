---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "_OCjqIgxwHw"
title: "MIT Self-Driving Cars (2018)"
video_url: "https://www.youtube.com/watch?v=_OCjqIgxwHw"
thumbnail_url: "https://i.ytimg.com/vi/_OCjqIgxwHw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=_OCjqIgxwHw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-01-20T21:04:04.000Z"
upload_date: "2018-01-20"
duration_seconds: 4398
duration_human: "1:13:18"
view_count: 74143
like_count: 892
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:21:23.155Z"
---

# MIT Self-Driving Cars (2018)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=_OCjqIgxwHw
- video_id: _OCjqIgxwHw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-01-20T21:04:04.000Z
- upload_date: 2018-01-20
- duration: 1:13:18
- view_count: 74143
- like_count: 892
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018
- categories: Science & Technology

## Description

This is lecture 2 of course 6.S094: Deep Learning for Self-Driving Cars (2018 version). This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

OUTLINE:
0:00 - Intro
9:59 - Different approaches to autonomy
38:36 - Sensors
49:51 - Companies in the self-driving car space
58:18 - Opportunities for deep learning

INFO:
Slides: http://bit.ly/2HeCLkF
Website: https://selfdrivingcars.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning

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

00:00:00 --> 00:00:07
welcome back to six at zero night for

00:00:02 --> 00:00:07
deep learning for self-driving cars

00:00:08 --> 00:00:18
today we will talk about autonomous

00:00:12 --> 00:00:24
vehicles also referred to as driverless

00:00:17 --> 00:00:31
cars autonomous cars Robo cars first the

00:00:23 --> 00:00:32
utopian view where for many autonomous

00:00:30 --> 00:00:35
vehicles have the opportunity to

00:00:31 --> 00:00:39
transform our society into a positive

00:00:34 --> 00:00:43
direction 1.3 million people die every

00:00:38 --> 00:00:46
ear in the automobile crashes globally

00:00:42 --> 00:00:49
thirty five thirty eight forty thousand

00:00:45 --> 00:00:51
ied every year in the United States so

00:00:48 --> 00:00:54
the one opportunity that's huge that's

00:00:50 --> 00:00:58
one of the biggest focus for us here and

00:00:53 --> 00:01:01
MIT for people who truly care about this

00:00:57 --> 00:01:02
it's to design autonomous systems our

00:01:00 --> 00:01:03
artificial intelligence system that

00:01:01 --> 00:01:09
saves lies

00:01:02 --> 00:01:13
and those systems help work with deal

00:01:08 --> 00:01:18
with or take away what nitsa calls the

00:01:12 --> 00:01:22
four DS of human folly drunk drugged

00:01:17 --> 00:01:24
istracted and drowsy driving autonomous

00:01:21 --> 00:01:29
vehicles have the ability to take away

00:01:23 --> 00:01:33
drunk driving distracted drowsy and

00:01:28 --> 00:01:35
rugged eliminate car ownership

00:01:32 --> 00:01:38
so taking shared mobility to another

00:01:34 --> 00:01:38
level

00:01:38 --> 00:01:45
iminating car ownership from the

00:01:40 --> 00:01:50
business side is the opportunity to save

00:01:44 --> 00:01:54
people money and increase mobility and

00:01:49 --> 00:01:58
access making vehicles removing

00:01:53 --> 00:02:00
ownership makes vehicles more accessible

00:01:57 --> 00:02:06
because the cost of getting from point A

00:01:59 --> 00:02:06
to point B drops an order to magnitude

00:02:06 --> 00:02:13
and the insertion of software and

00:02:09 --> 00:02:16
intelligence into vehicles makes those

00:02:12 --> 00:02:17
vehicles makes the idea of

00:02:15 --> 00:02:20
Transportation makes the way we see

00:02:16 --> 00:02:23
moving from A to point B a totally

00:02:19 --> 00:02:25
different experience much like with our

00:02:22 --> 00:02:30
smart phone it makes it a personalized

00:02:24 --> 00:02:33
efficient and reliable experience now

00:02:29 --> 00:02:39
for the negative view for the dystopian

00:02:32 --> 00:02:41
view eliminate jobs any technology

00:02:38 --> 00:02:44
throughout its history throughout our

00:02:40 --> 00:02:47
history of human civilization has always

00:02:43 --> 00:02:51
created fear that jobs that rely on the

00:02:46 --> 00:02:56
prior technology will be lost this is a

00:02:50 --> 00:02:59
huge fear especially in trucking because

00:02:55 --> 00:03:02
so many people in the United States and

00:02:58 --> 00:03:04
across the world rely work in the

00:03:01 --> 00:03:08
transportation industry transportation

00:03:03 --> 00:03:10
sector and the possibility that AI will

00:03:07 --> 00:03:20
remove those jobs has potential

00:03:09 --> 00:03:21
catastrophic consequences the idea one

00:03:19 --> 00:03:25
that we have to struggle with in the

00:03:20 --> 00:03:28
21st century of the role of intelligence

00:03:24 --> 00:03:30
systems that aren't human beings being

00:03:27 --> 00:03:33
further and further integrated into our

00:03:29 --> 00:03:36
lives is the idea that a failure of an

00:03:32 --> 00:03:38
autonomous vehicle even if they're much

00:03:35 --> 00:03:40
rare if they're even if they're much

00:03:37 --> 00:03:44
safer that there is a possibility for an

00:03:39 --> 00:03:46
AI algorithm designed by probably one of

00:03:43 --> 00:03:50
the engineers in this room will kill a

00:03:45 --> 00:03:53
person where that person would not have

00:03:49 --> 00:03:53
died if they were in control of the

00:03:52 --> 00:03:56
vehicle

00:03:52 --> 00:03:58
the idea of an intelligent system one

00:03:55 --> 00:04:01
indirect interaction with a human being

00:03:57 --> 00:04:03
killing that human being is one that we

00:04:00 --> 00:04:07
have to struggle with in a philosophical

00:04:02 --> 00:04:07
ethical and technological level

00:04:07 --> 00:04:15
artificial

00:04:08 --> 00:04:19
systems in popular culture lesson

00:04:14 --> 00:04:23
engineering concerns may not be grounded

00:04:18 --> 00:04:25
ethically grounded at this time much of

00:04:22 --> 00:04:26
the focus of building these systems as

00:04:24 --> 00:04:29
we'll talk about today and throughout

00:04:25 --> 00:04:30
his course that focuses on the

00:04:28 --> 00:04:31
technology how do we make these things

00:04:29 --> 00:04:35
work

00:04:30 --> 00:04:37
but of course decades out years or

00:04:34 --> 00:04:44
decades out the ethical concerns starts

00:04:36 --> 00:04:46
arising for Rodney Brooks one of the

00:04:43 --> 00:04:49
seminal people from MIT those ethical

00:04:45 --> 00:04:51
concerns will not be an issue for

00:04:48 --> 00:04:54
another several decades at least five

00:04:50 --> 00:04:57
decades but they're still important it

00:04:53 --> 00:05:00
continues the thought the idea of what

00:04:56 --> 00:05:02
is the role of AI in our society when

00:04:59 --> 00:05:03
that car gets to make a decision about

00:05:01 --> 00:05:06
human life

00:05:02 --> 00:05:08
what is it making that decision based on

00:05:05 --> 00:05:10
especially when it's a black box

00:05:07 --> 00:05:13
what is the ethical grounding of that

00:05:09 --> 00:05:16
system does it conform with our social

00:05:12 --> 00:05:20
norms does a goal go against them and

00:05:15 --> 00:05:25
there's many other concerns security is

00:05:19 --> 00:05:27
definitely a big one a car that's not

00:05:24 --> 00:05:29
even artificial intelligence based a car

00:05:26 --> 00:05:32
that's software basis they're becoming

00:05:28 --> 00:05:34
more and more millions most of the cars

00:05:31 --> 00:05:38
on road today are run by millions of

00:05:33 --> 00:05:42
lines of source code the idea that those

00:05:37 --> 00:05:45
lines of source code written again by

00:05:41 --> 00:05:47
some of the engineers in this room get

00:05:44 --> 00:05:50
o decide the life of a human being

00:05:46 --> 00:05:55
means then a hacker from outside of the

00:05:49 --> 00:05:57
car can manipulate that code to also

00:05:54 --> 00:06:03
decide the fate of that human being

00:05:56 --> 00:06:06
that's a huge concern for us from the

00:06:02 --> 00:06:08
ngineering perspective the truth is

00:06:05 --> 00:06:11
omewhere in the middle we want to find

00:06:07 --> 00:06:13
what is the best positive way we can

00:06:10 --> 00:06:15
build these systems to transform our

00:06:12 --> 00:06:20
society to improve the quality of life

00:06:14 --> 00:06:20
of everyone amongst us

00:06:20 --> 00:06:27
but there's a grain of salt to the hype

00:06:23 --> 00:06:29
of autonomous vehicles we have to

00:06:26 --> 00:06:30
remember as we discussed in the previous

00:06:28 --> 00:06:33
lecture and it will come up again and

00:06:29 --> 00:06:36
again our intuition about what is

00:06:32 --> 00:06:40
difficult and what is easy for deep

00:06:35 --> 00:06:45
learning for autonomous systems is

00:06:39 --> 00:06:48
flawed if we use our if use ourselves in

00:06:44 --> 00:06:51
this example human beings are extremely

00:06:47 --> 00:06:54
good at driving this will come up again

00:06:50 --> 00:06:57
and again our intuition has to be

00:06:53 --> 00:06:58
grounded in the understanding of what is

00:06:56 --> 00:07:01
the source of data what is the

00:06:57 --> 00:07:03
annotation and what is the approach what

00:07:00 --> 00:07:05
is the algorithm so you have to be

00:07:02 --> 00:07:07
careful while using our intuition

00:07:04 --> 00:07:08
extending it decades out and making

00:07:06 --> 00:07:10
predictions

00:07:07 --> 00:07:14
whether it's towards the utopian or

00:07:09 --> 00:07:16
dystopian view and as we'll talk about

00:07:13 --> 00:07:20
some of the advancements of companies

00:07:15 --> 00:07:23
working in the space today you have to

00:07:19 --> 00:07:25
take what people say in the media what

00:07:22 --> 00:07:27
he companies say some of the speakers

00:07:24 --> 00:07:30
that will be speaking at this class say

00:07:26 --> 00:07:33
about their plans for the future and

00:07:29 --> 00:07:37
their current capabilities I think us a

00:07:32 --> 00:07:41
guy that can provide is when there's a

00:07:36 --> 00:07:44
promise of a future technology future

00:07:40 --> 00:07:48
vehicles there are two years out or more

00:07:43 --> 00:07:52
that has to be that's a very doubtful

00:07:47 --> 00:07:55
prediction one that is within a year as

00:07:51 --> 00:08:02
we'll give a few examples today is

00:07:54 --> 00:08:06
keptical the real proof comes in actual

00:08:01 --> 00:08:10
testing of public roads or in the most

00:08:05 --> 00:08:13
impressive the most amazing the reality

00:08:09 --> 00:08:17
of it is when it's available to consumer

00:08:12 --> 00:08:21
purchase I would like to use Rodney

00:08:16 --> 00:08:26
Brooks as a so it doesn't come from my

00:08:20 --> 00:08:29
mouth but I happened to agree his

00:08:25 --> 00:08:32
prediction is no earlier than 2032 a

00:08:28 --> 00:08:34
driverless taxi service in a major US

00:08:31 --> 00:08:36
city will provide arbitrary

00:08:33 --> 00:08:42
pick up and drop off locations fully

00:08:35 --> 00:08:42
autonomously that's 14 years away and

00:08:42 --> 00:08:47
bite one

00:08:44 --> 00:08:50
45 it will do so in multiple cities

00:08:46 --> 00:08:53
across the United States so think about

00:08:49 --> 00:08:54
hat that a lot of the engineers working

00:08:52 --> 00:08:56
in the space a lot of folks are actually

00:08:53 --> 00:09:01
building these systems agree with this

00:08:55 --> 00:09:06
idea and that is the earliest I believe

00:09:00 --> 00:09:11
this will happen and Rodney believes but

00:09:05 --> 00:09:15
as all technophobes have been wrong who

00:09:10 --> 00:09:18
could be wrong this is a map on the

00:09:14 --> 00:09:21
x-axis a plot on the x axis of time

00:09:17 --> 00:09:23
throughout the 20th century and the

00:09:20 --> 00:09:26
adoption rate and the y axis from zero

00:09:22 --> 00:09:28
to 100% of the various technologies from

00:09:25 --> 00:09:31
electricity to cars to radio the

00:09:27 --> 00:09:33
telephone and so on and as we get closer

00:09:30 --> 00:09:35
to today the technology adoption rate

00:09:32 --> 00:09:39
when it goes from zero to a hundred

00:09:34 --> 00:09:41
percent the number of years it takes to

00:09:38 --> 00:09:44
adopt that technology is getting shorter

00:09:40 --> 00:09:46
and shorter and shorter as a society

00:09:43 --> 00:09:48
we're better at throwing away the

00:09:45 --> 00:09:52
technology of old and accepting the

00:09:47 --> 00:09:54
technology of new so if a brilliant idea

00:09:51 --> 00:09:56
to solve some of the problems were

00:09:53 --> 00:10:02
discussing comes along it could change

00:09:55 --> 00:10:06
verything overnight so let's talk about

00:10:01 --> 00:10:09
different approaches to autonomy we'll

00:10:05 --> 00:10:11
talk about sensors afterwards we'll talk

00:10:08 --> 00:10:17
about companies players in this space

00:10:10 --> 00:10:20
and then we'll talk about AI and the

00:10:16 --> 00:10:22
actual algorithms and how they can help

00:10:19 --> 00:10:27
solve some of the problems of autonomous

00:10:21 --> 00:10:35
vehicles levels of autonomy here's a

00:10:26 --> 00:10:38
useful tech solemnization of levels of

00:10:34 --> 00:10:41
autonomy useful for initial discussion

00:10:37 --> 00:10:44
for legal discussion and for policy

00:10:40 --> 00:10:48
making and for blog posts and media

00:10:43 --> 00:10:50
reports but it's not useful I would

00:10:47 --> 00:10:53
argue for design and engineering of the

00:10:49 --> 00:10:56
underlying intelligence and the system

00:10:52 --> 00:10:58
viewed from a holistic perspective the

00:10:55 --> 00:11:00
ntire thing creating an experience that

00:10:57 --> 00:11:05
safe and enjoyable so let's go over

00:10:59 --> 00:11:08
those levels the five the six levels

00:11:04 --> 00:11:11
this is presented by SAE report J three

00:11:07 --> 00:11:14
zero one six the most widely accepted

00:11:10 --> 00:11:17
taxonomies ation of autonomy no

00:11:13 --> 00:11:19
automation at level zero level 1 and

00:11:16 --> 00:11:23
level 2 is increasing levels automation

00:11:18 --> 00:11:25
level one is cruise control level two is

00:11:22 --> 00:11:28
adaptive cruise control lane keeping

00:11:24 --> 00:11:30
level three I don't know what level

00:11:27 --> 00:11:32
three is there's a lot of people that

00:11:29 --> 00:11:34
will explain that level three is

00:11:31 --> 00:11:36
conditional automation meaning it's

00:11:33 --> 00:11:38
constrained to certain geographical

00:11:35 --> 00:11:41
ocation I will explain that from an

00:11:37 --> 00:11:45
engineering perspective I'm personally a

00:11:40 --> 00:11:48
little bit confused of where that stands

00:11:44 --> 00:11:51
I'll try to redefine how we should view

00:11:47 --> 00:11:55
automation level four and level five is

00:11:50 --> 00:11:58
high full level automation level four is

00:11:54 --> 00:12:01
when the vehicle can drive itself fully

00:11:57 --> 00:12:03
for part of the time there's certain

00:12:00 --> 00:12:05
areas in which it can take care of

00:12:02 --> 00:12:09
everything no matter what no human

00:12:04 --> 00:12:12
interaction input safekeeping is

00:12:08 --> 00:12:19
required level five automation is the

00:12:11 --> 00:12:22
car does everything everything I would

00:12:18 --> 00:12:25
argue that those levels aren't useful

00:12:21 --> 00:12:27
for designing systems that actually work

00:12:24 --> 00:12:30
in the real world I would argue that

00:12:26 --> 00:12:33
here's two systems but first a starting

00:12:29 --> 00:12:35
point that every system to some degree

00:12:32 --> 00:12:38
involves a human

00:12:34 --> 00:12:42
it starts with manual control from a

00:12:37 --> 00:12:45
human human getting in the car and a

00:12:41 --> 00:12:48
human electing to do something so that's

00:12:44 --> 00:12:50
the manual control what we're talking

00:12:47 --> 00:12:53
about when the human engages the system

00:12:49 --> 00:12:57
when the system is first available and

00:12:52 --> 00:13:01
the human chooses to turn it on that's

00:12:56 --> 00:13:03
when we have to AI systems human

00:13:00 --> 00:13:07
centered autonomy when the human is

00:13:02 --> 00:13:10
needed is involved and full autonomy

00:13:06 --> 00:13:11
when AI is fully responsible for

00:13:09 --> 00:13:12
everything from the legal perspective

00:13:10 --> 00:13:16
that

00:13:11 --> 00:13:20
means a to full autonomy means the car

00:13:15 --> 00:13:23
they designer the I system is liable is

00:13:19 --> 00:13:28
responsible and for the human-centered

00:13:22 --> 00:13:31
autonomy the human is responsible what

00:13:27 --> 00:13:34
does this practically mean for human

00:13:30 --> 00:13:37
center autonomy and we'll discuss

00:13:33 --> 00:13:41
examples of all of these when a human

00:13:36 --> 00:13:46
interaction is necessary the question

00:13:40 --> 00:13:50
then becomes is how often is the system

00:13:45 --> 00:13:52
available is it available on in traffic

00:13:49 --> 00:13:53
onditions so for traffic

00:13:51 --> 00:13:56
bumper-to-bumper is available on the

00:13:53 --> 00:13:58
highway is it sensor based like in the

00:13:55 --> 00:14:00
tesla vehicle meaning based on the

00:13:57 --> 00:14:02
visual characteristics to the scene the

00:13:59 --> 00:14:05
vehicle is confident enough to be able

00:14:01 --> 00:14:08
to control to make control decisions

00:14:04 --> 00:14:13
perception control decisions the other

00:14:07 --> 00:14:17
factor poor not discussed enough and I

00:14:12 --> 00:14:21
think poorly imprecisely discussed when

00:14:16 --> 00:14:25
it is is the number of seconds given to

00:14:20 --> 00:14:27
the driver not guaranteed but provided

00:14:24 --> 00:14:30
as a sort of feature to the driver to

00:14:26 --> 00:14:33
take over in the tesla vehicle in all

00:14:29 --> 00:14:35
vehicles on the road today that time is

00:14:32 --> 00:14:37
zero zero seconds are guaranteed zero

00:14:34 --> 00:14:40
seconds are provided there is some

00:14:36 --> 00:14:42
there's some room sometimes it's

00:14:39 --> 00:14:44
hundreds of milliseconds sometimes it's

00:14:41 --> 00:14:47
multiple seconds but really there's no

00:14:43 --> 00:14:54
standard of how many seconds you get to

00:14:46 --> 00:14:56
say wake up take control then tally up

00:14:53 --> 00:14:59
operation something that some of the

00:14:56 --> 00:15:01
companies will mention are playing with

00:14:58 --> 00:15:02
is when a human being is involved

00:15:00 --> 00:15:04
remotely controlling the vehicle

00:15:01 --> 00:15:09
remotely so being able to take over

00:15:03 --> 00:15:11
control the vehicle when you're when

00:15:08 --> 00:15:13
you're not able to control it so support

00:15:10 --> 00:15:15
by a human that's not inside the car

00:15:12 --> 00:15:19
that's a very interesting idea to

00:15:14 --> 00:15:22
explore but for the human centered

00:15:18 --> 00:15:24
autonomy side all of those features are

00:15:21 --> 00:15:26
not required they're not guaranteed the

00:15:23 --> 00:15:29
human driver the

00:15:25 --> 00:15:31
inside the car is always responsible at

00:15:28 --> 00:15:33
he end of the day they must pay

00:15:30 --> 00:15:36
attention to a degree that's required to

00:15:32 --> 00:15:38
take over when the system fails and no

00:15:35 --> 00:15:42
matter under this consideration under

00:15:37 --> 00:15:45
this level of autonomy the system will

00:15:41 --> 00:15:47
fail at some point that is the that is

00:15:44 --> 00:15:49
the point this is a collaboration

00:15:46 --> 00:15:52
between human and robot as the system

00:15:48 --> 00:15:56
will fail and the human has to catch it

00:15:51 --> 00:16:00
when it does and then full autonomy is

00:15:55 --> 00:16:03
AI is fully responsible now

00:15:59 --> 00:16:05
that doesn't again as will present some

00:16:02 --> 00:16:08
companies in the marketing material and

00:16:04 --> 00:16:09
the PR side of things they might present

00:16:07 --> 00:16:11
hat there is significant degrees of

00:16:08 --> 00:16:16
autonomy if you're talking about l3 or

00:16:10 --> 00:16:20
l4 or l5 you have to read between the

00:16:15 --> 00:16:24
lines you're not allowed to have

00:16:19 --> 00:16:27
teleoperation if a human is remotely

00:16:23 --> 00:16:30
operating the vehicle a human is still

00:16:26 --> 00:16:32
in the loop a human is still evolved

00:16:29 --> 00:16:36
it's still a human senator autonomy

00:16:31 --> 00:16:41
system you don't get the ten second rule

00:16:35 --> 00:16:44
which is just because you give the

00:16:40 --> 00:16:46
driver ten seconds to take control that

00:16:43 --> 00:16:50
somehow removes liability for you if you

00:16:45 --> 00:16:54
say that that's it as an AI system I

00:16:49 --> 00:16:55
can't take can't resolve can't deal

00:16:53 --> 00:16:57
can't control the vehicle in this

00:16:54 --> 00:16:59
ituation and you have ten seconds to

00:16:56 --> 00:17:01
take over that's not good enough the

00:16:58 --> 00:17:03
driver might be sleeping that driver may

00:17:00 --> 00:17:06
have had a heart attack they're not able

00:17:02 --> 00:17:09
to control the vehicle full autonomous

00:17:05 --> 00:17:13
ystems might must find safe harbor they

00:17:08 --> 00:17:15
must get you full stop from point A to

00:17:12 --> 00:17:18
point B that point B might be your

00:17:14 --> 00:17:21
desired destination or might be a safe

00:17:17 --> 00:17:24
parking lot but it has to bring you to a

00:17:20 --> 00:17:26
safe location this is a clear definition

00:17:23 --> 00:17:30
of the two systems in the human of

00:17:25 --> 00:17:32
course as far as our certain current

00:17:29 --> 00:17:35
conception of artificial intelligence in

00:17:31 --> 00:17:39
cars today is a human always overrides

00:17:34 --> 00:17:39
the AI system so we should for them for

00:17:38 --> 00:17:45
the

00:17:38 --> 00:17:48
in the general case the human gets to

00:17:44 --> 00:17:50
choose to take control they I can't take

00:17:47 --> 00:17:51
control the human except when danger is

00:17:49 --> 00:17:54
imminent

00:17:50 --> 00:17:56
meaning sudden crashes like in a bee

00:17:53 --> 00:18:00
vents we're not yet ready for the I

00:17:55 --> 00:18:08
systems to say as a society to say no no

00:17:59 --> 00:18:10
you're drunk you can't drive so beyond

00:18:07 --> 00:18:13
the traditional levels from level zero

00:18:09 --> 00:18:15
to level five the starting point is

00:18:12 --> 00:18:18
level zero no automation all cars start

00:18:14 --> 00:18:21
here level one level two and level three

00:18:17 --> 00:18:26
I would argue fall into human senator

00:18:20 --> 00:18:30
autonomy systems a1 because they did

00:18:25 --> 00:18:33
involve some degree of a human then l4

00:18:29 --> 00:18:37
l5 to some degree there's some crossover

00:18:32 --> 00:18:40
fall into full autonomy even though with

00:18:36 --> 00:18:45
l4 with way mo as you can ask on Friday

00:18:39 --> 00:18:48
and anyone Cruz uber playing in the

00:18:44 --> 00:18:52
space there's very often a human driver

00:18:47 --> 00:18:56
involved one of the huge accomplishments

00:18:51 --> 00:18:57
of way mo over the past month incredible

00:18:55 --> 00:19:01
accomplishment where in Phoenix Arizona

00:18:56 --> 00:19:05
they drove without the car drove without

00:19:00 --> 00:19:07
a driver the meaning there was no safety

00:19:04 --> 00:19:11
driver to catch there was no engineer

00:19:06 --> 00:19:14
staff member there to catch the car a

00:19:10 --> 00:19:17
human being that doesn't work for Google

00:19:13 --> 00:19:19
or way mo got into that car and got from

00:19:16 --> 00:19:21
A to point B without a safety driver

00:19:18 --> 00:19:25
that's an incredible accomplishment and

00:19:20 --> 00:19:28
that particular trip was a fully

00:19:24 --> 00:19:33
autonomous trip that is full autonomy

00:19:27 --> 00:19:33
well there's no human to catch the car

00:19:33 --> 00:19:41
no way I press

00:19:36 --> 00:19:46
tation is good without cats it's a full

00:19:40 --> 00:19:49
autonomy a to system its when you do

00:19:45 --> 00:19:53
nothing but right along human Senate

00:19:48 --> 00:19:59
autonomy system is when you have some

00:19:52 --> 00:20:01
control I'm sorry I had to so the two

00:19:58 --> 00:20:05
paths for autonomous systems they want

00:20:00 --> 00:20:07
o need to in blue on the left is a one

00:20:04 --> 00:20:12
human centered on the right is a two

00:20:06 --> 00:20:17
full autonomy and then blue is from the

00:20:11 --> 00:20:22
artificial intelligent perspective is

00:20:16 --> 00:20:26
easy easier and then red is harder

00:20:21 --> 00:20:30
easier meaning we do not have to achieve

00:20:25 --> 00:20:32
a hundred percent accuracy harder means

00:20:29 --> 00:20:36
everything that's off of a hundred

00:20:31 --> 00:20:41
percent accuracy no matter how small has

00:20:35 --> 00:20:47
a potential of costing human lives and

00:20:40 --> 00:20:52
huge amounts of money for companies so

00:20:46 --> 00:20:54
let's discuss we'll discuss later in the

00:20:51 --> 00:20:56
lecture about the algorithms behind each

00:20:53 --> 00:20:59
of these methods and the left on the

00:20:55 --> 00:21:02
right but this summarizes the two

00:20:58 --> 00:21:04
approaches the localization mapping for

00:21:01 --> 00:21:07
the car to determine where it's located

00:21:03 --> 00:21:10
for the human centered autonomy it's

00:21:06 --> 00:21:12
easy it still has to do the perception

00:21:09 --> 00:21:15
it has to localize itself within the

00:21:11 --> 00:21:17
lane it has to find all the neighboring

00:21:14 --> 00:21:19
pedestrians and the vehicles in order to

00:21:16 --> 00:21:22
be able to control the vehicle to some

00:21:18 --> 00:21:24
degree but because the human is there it

00:21:21 --> 00:21:27
doesn't have to do so perfectly when it

00:21:23 --> 00:21:29
fails a human is there to catch it scene

00:21:26 --> 00:21:31
understanding perceiving everything in

00:21:28 --> 00:21:34
the environment from the camera from

00:21:30 --> 00:21:36
whether its lidar radar ultrasonic the

00:21:33 --> 00:21:39
planning of the vehicle whether it's

00:21:35 --> 00:21:41
just staying within lane or for adaptive

00:21:38 --> 00:21:43
cruise control controlling the

00:21:40 --> 00:21:44
longitudinal movement of the vehicle or

00:21:42 --> 00:21:46
its changing lanes is the Tesla

00:21:44 --> 00:21:49
utopilot or higher degrees of

00:21:45 --> 00:21:50
automation all of those movement

00:21:48 --> 00:21:51
planning decisions can be

00:21:49 --> 00:21:54
autonomous Lee when the human is there

00:21:51 --> 00:21:58
to catch it's easier because you're

00:21:53 --> 00:22:01
allowed to be wrong rarely but wrong the

00:21:57 --> 00:22:02
hard part is getting the human robot

00:22:00 --> 00:22:09
interaction piece right

00:22:01 --> 00:22:11
hat's next Wednesday lecture as we'll

00:22:08 --> 00:22:13
discuss about how deep learning can be

00:22:10 --> 00:22:15
used to interact first perceive

00:22:12 --> 00:22:18
verything about the driver and second

00:22:14 --> 00:22:21
to interact with the driver that part is

00:22:17 --> 00:22:23
hard because you can't screw up on that

00:22:20 --> 00:22:26
part you have to make sure you help the

00:22:22 --> 00:22:28
driver know where your flaws are so they

00:22:25 --> 00:22:29
can take over if the driver is not

00:22:27 --> 00:22:31
paying attention you have to bring their

00:22:28 --> 00:22:33
attention back to the road back to the

00:22:30 --> 00:22:37
interaction you have to get that piece

00:22:32 --> 00:22:39
right because for a flawed system one

00:22:36 --> 00:22:42
that's rarely flawed the rarity is the

00:22:38 --> 00:22:45
challenge in fact has to get the

00:22:41 --> 00:22:48
interaction right and then the final

00:22:44 --> 00:22:50
piece communication the autonomous

00:22:47 --> 00:22:54
vehicle fully autonomous vehicle must

00:22:49 --> 00:22:56
communicate extremely well with the

00:22:53 --> 00:22:59
xternal world with the pedestrians that

00:22:55 --> 00:23:03
jaywalkers the humans in this world the

00:22:58 --> 00:23:04
cyclists that communication piece one at

00:23:02 --> 00:23:07
least that is part of a safe and

00:23:03 --> 00:23:10
enjoyable driving experience is

00:23:06 --> 00:23:12
extremely difficult on the taught a way

00:23:09 --> 00:23:15
Moe vehicle I wish them luck if they

00:23:11 --> 00:23:18
come to Boston from getting from point A

00:23:14 --> 00:23:21
to point B because pedestrians will take

00:23:17 --> 00:23:24
advantage a vehicle must assert itself

00:23:20 --> 00:23:28
in order to be able to navigate Boston

00:23:23 --> 00:23:31
streets and that assertion is

00:23:27 --> 00:23:36
communication that piece is extremely

00:23:30 --> 00:23:41
difficult for Tesla vehicle for for a

00:23:35 --> 00:23:44
human centered autonomy vehicle l2 l3

00:23:40 --> 00:23:46
the way you deal with Boston pedestrians

00:23:43 --> 00:23:48
is you take over

00:23:45 --> 00:23:51
oll down the window yell something and

00:23:47 --> 00:23:51
then speed up

00:23:50 --> 00:23:55
getting the piece for an artificial

00:23:53 --> 00:23:57
intelligence system to actually be able

00:23:54 --> 00:24:00
to accomplish something like that as

00:23:56 --> 00:24:03
we'll discuss on the ethics side and the

00:23:59 --> 00:24:06
ngineering side is extremely difficult

00:24:02 --> 00:24:08
hat said most of the literature and the

00:24:05 --> 00:24:11
human factors field in the autonomous

00:24:07 --> 00:24:15
vehicle field anyone that studied

00:24:10 --> 00:24:17
autonomy in aviation and in vehicles is

00:24:14 --> 00:24:19
extremely skeptical about the human

00:24:16 --> 00:24:22
centered approach they think it's deeply

00:24:18 --> 00:24:28
responsible it's deeply responsible

00:24:21 --> 00:24:33
because as argued because human beings

00:24:27 --> 00:24:35
when you give them a technology which

00:24:32 --> 00:24:36
will take control part of the time they

00:24:34 --> 00:24:38
will get lazy they would take advantage

00:24:35 --> 00:24:40
of that technology they will over trust

00:24:37 --> 00:24:45
hat technology they'll assume will work

00:24:39 --> 00:24:50
perfectly always this is the idea that

00:24:44 --> 00:24:53
his this idea extended beyond further

00:24:49 --> 00:24:55
and further means that the better the

00:24:52 --> 00:24:58
system gets the better the car gets it

00:24:54 --> 00:25:00
driving itself the more the humans will

00:24:57 --> 00:25:02
sit back and be completely distracted it

00:24:59 --> 00:25:04
will not be able to re-engage themselves

00:25:01 --> 00:25:08
in order to safely catch when the system

00:25:03 --> 00:25:09
fails this is Chris Urmson the founder

00:25:07 --> 00:25:15
of the Google self-driving cars program

00:25:08 --> 00:25:17
and now the co-founder of one at the

00:25:14 --> 00:25:19
other co-founders a speaker this class

00:25:16 --> 00:25:23
on next Friday sterling Anderson of a

00:25:18 --> 00:25:29
company called Aurora a start-up he was

00:25:22 --> 00:25:34
one of the big proponents or the I

00:25:28 --> 00:25:36
should say opponents the idea that human

00:25:33 --> 00:25:40
senator autonomy could work they tried

00:25:35 --> 00:25:42
it publicly is spoken about the fact

00:25:39 --> 00:25:45
hat at Google as in the early

00:25:41 --> 00:25:48
self-driving car program they've tried

00:25:44 --> 00:25:50
shared autonomy they've tried l2 and it

00:25:47 --> 00:25:52
failed because they're engineers that

00:25:49 --> 00:25:52
people driving their vehicles fell

00:25:51 --> 00:25:56
asleep

00:25:51 --> 00:26:00
and that's the belief that people have

00:25:55 --> 00:26:02
and we'll talk about why that may not be

00:25:59 --> 00:26:03
true there's a fascinating truth in the

00:26:01 --> 00:26:05
way

00:26:02 --> 00:26:08
human beings can interact with

00:26:04 --> 00:26:11
artificial intelligence systems that may

00:26:07 --> 00:26:13
work in this case as I mentioned it's

00:26:10 --> 00:26:15
the human robot interaction building

00:26:12 --> 00:26:18
that deep connection between human and

00:26:14 --> 00:26:22
machine of understanding of

00:26:17 --> 00:26:25
communication this is what we believe

00:26:21 --> 00:26:27
happens so there's a lot of videos like

00:26:24 --> 00:26:31
this as it's it's fun but it's also

00:26:26 --> 00:26:34
representative of what what society

00:26:31 --> 00:26:38
believes happens when automation is

00:26:33 --> 00:26:43
allowed to enter the human experience

00:26:37 --> 00:26:44
and driving or the human life is a stake

00:26:42 --> 00:26:56
that you can become completely

00:26:43 --> 00:26:59
disengaged it's kind of it's kind of a

00:26:55 --> 00:27:03
natural thing to think but the question

00:26:58 --> 00:27:06
is does this actually happen what

00:27:02 --> 00:27:09
actually happens on public roads

00:27:05 --> 00:27:15
the amazing thing that people don't

00:27:08 --> 00:27:18
often talk about is that there is

00:27:14 --> 00:27:20
hundreds of thousands of vehicles on the

00:27:17 --> 00:27:24
road today

00:27:19 --> 00:27:27
equipped with autopilot Tesla autopilot

00:27:23 --> 00:27:31
hat have a significant degree of

00:27:26 --> 00:27:33
autonomy that's data that's information

00:27:30 --> 00:27:36
so we can answer the question what

00:27:32 --> 00:27:40
actually happens so many of the people

00:27:35 --> 00:27:43
behind this team have instrumented 25

00:27:39 --> 00:27:46
vehicles 21 of which are Tesla autopilot

00:27:42 --> 00:27:48
vehicles now with over collected

00:27:45 --> 00:27:52
recording everything about the driver 2

00:27:47 --> 00:27:54
cameras 2 HD cameras on the driver 2

00:27:51 --> 00:27:55
cameras on the external camera on the

00:27:53 --> 00:27:58
xternal roadway and collecting

00:27:54 --> 00:28:00
everything about the car including audio

00:27:57 --> 00:28:02
the state that pulling everything from

00:27:59 --> 00:28:06
the cam bus the kinematics of the

00:28:01 --> 00:28:09
vehicle I am you GPS all of that

00:28:05 --> 00:28:14
information over now over 300,000 miles

00:28:08 --> 00:28:16
over 5 billion video frames all as we'll

00:28:13 --> 00:28:17
talk about analyze the computer vision

00:28:15 --> 00:28:19
you

00:28:16 --> 00:28:23
extract from that video of the driver of

00:28:18 --> 00:28:25
everything they're doing that level

00:28:22 --> 00:28:29
distraction the allocation of attention

00:28:24 --> 00:28:33
the drowsiness emotional states the

00:28:28 --> 00:28:36
hands on wheel hands off wheel body pose

00:28:32 --> 00:28:38
activity smartphone usage all these

00:28:35 --> 00:28:40
factors all of these things that you

00:28:37 --> 00:28:43
would think would fall apart when you

00:28:39 --> 00:28:46
start letting autonomy into your life

00:28:42 --> 00:28:49
we'll talk about what the initial

00:28:45 --> 00:28:53
reality is that should be inspiring and

00:28:48 --> 00:28:56
thought-provoking as I said three

00:28:52 --> 00:29:00
cameras single board computer recording

00:28:55 --> 00:29:03
all the data over a thousand machines in

00:28:59 --> 00:29:06
Holyoke and distributed computation

00:29:02 --> 00:29:08
running the deep learning algorithms

00:29:05 --> 00:29:11
I've I've mentioned on these five plus

00:29:07 --> 00:29:14
billion video frames going from the raw

00:29:10 --> 00:29:17
data to the actionable useful

00:29:13 --> 00:29:20
information the slides are up online if

00:29:16 --> 00:29:22
you'd like to look through them oh fly

00:29:19 --> 00:29:26
through some of them and this is the

00:29:21 --> 00:29:29
video of one of thousands of trips we

00:29:25 --> 00:29:33
have in autopilot in our data a car

00:29:28 --> 00:29:35
driving autonomously a large fraction of

00:29:32 --> 00:29:38
the time on highways from here to

00:29:34 --> 00:29:43
California from here to Chicago to

00:29:37 --> 00:29:43
Florida and all across the United States

00:29:42 --> 00:29:50
we take that data and using the

00:29:48 --> 00:29:54
supervised learning algorithms

00:29:49 --> 00:29:56
emi-supervised the number of frames

00:29:53 --> 00:29:59
here is huge for those that work in

00:29:55 --> 00:30:02
computer vision five billion frames is

00:29:58 --> 00:30:04
everal orders of magnitude larger than

00:30:01 --> 00:30:09
y data set that people are working

00:30:03 --> 00:30:15
with in computer vision actively

00:30:08 --> 00:30:18
annotated so we want to use that data

00:30:14 --> 00:30:21
for understanding the behavior of what

00:30:17 --> 00:30:23
people actually doing in the cars and we

00:30:20 --> 00:30:26
want to train the algorithms that do

00:30:22 --> 00:30:29
perception and control a quick summary

00:30:25 --> 00:30:30
over three hundred thousand miles twenty

00:30:28 --> 00:30:32
five vehicles

00:30:29 --> 00:30:37
the colors are true to the actual colors

00:30:31 --> 00:30:42
of the vehicles little fun facts Tesla

00:30:36 --> 00:30:45
Model X Model S and now model three five

00:30:41 --> 00:30:49
hundred thousand five hundred plus sorry

00:30:44 --> 00:30:54
miles a day and growing now most days in

00:30:48 --> 00:30:58
2018 are over a thousand miles a day

00:30:53 --> 00:31:00
this is a quick GPS map in red is manual

00:30:57 --> 00:31:03
driving across the Boston area in blue

00:30:59 --> 00:31:05
cyan is autonomous driving this is

00:31:02 --> 00:31:08
giving you the sense of just the scope

00:31:04 --> 00:31:12
of this data this is a huge number of

00:31:07 --> 00:31:15
miles with automated driving several

00:31:11 --> 00:31:18
orders of magnitude larger than what Wei

00:31:14 --> 00:31:27
Mo's doing that what Cruise is doing and

00:31:17 --> 00:31:33
what Ober is doing the miles driven in

00:31:26 --> 00:31:38
this data with autopilot confirming what

00:31:32 --> 00:31:40
y'all muska stated it's 33% of miles of

00:31:37 --> 00:31:43
driven autonomously this is a remarkable

00:31:39 --> 00:31:45
number for those of you who drive and

00:31:42 --> 00:31:48
for those of you who are familiar with

00:31:44 --> 00:31:50
ese technologies that is remarkable

00:31:47 --> 00:31:53
adoption rate that 33 percent of the

00:31:49 --> 00:31:56
miles are driven in autopilot that means

00:31:52 --> 00:31:59
these drivers are getting use out of the

00:31:55 --> 00:32:04
system it's working for them that's an

00:31:58 --> 00:32:07
incredible number it's also incredible

00:32:03 --> 00:32:10
because under the the decades of

00:32:06 --> 00:32:13
literature from aviation to automation

00:32:09 --> 00:32:17
and vehicles to to Chris Urmson and way

00:32:12 --> 00:32:21
mo the belief is such high numbers are

00:32:16 --> 00:32:24
likely to lead to crashes to fatalities

00:32:20 --> 00:32:27
to at the very least highly responsible

00:32:23 --> 00:32:29
behavior drivers

00:32:26 --> 00:32:32
over trusting the systems and getting in

00:32:28 --> 00:32:35
trouble we can run the glance

00:32:31 --> 00:32:37
classification algorithms again this is

00:32:34 --> 00:32:39
for next Wednesday discussion to the

00:32:36 --> 00:32:41
actual algorithm it's the algorithm that

00:32:38 --> 00:32:43
ells you the region that the driver is

00:32:40 --> 00:32:46
looking at and it's comparing road

00:32:42 --> 00:32:48
instrument cluster left rearview center

00:32:45 --> 00:32:52
stack and right does the allocation of

00:32:47 --> 00:32:56
glance change with autopilot or with

00:32:51 --> 00:32:59
manual driving it does not appear to in

00:32:55 --> 00:33:01
any significant noticeable way meaning

00:32:58 --> 00:33:03
you don't start playing chess you don't

00:33:00 --> 00:33:07
start you don't get in the backseat to

00:33:02 --> 00:33:10
sleep you don't start texting in your

00:33:06 --> 00:33:13
smartphone watching a movie at least in

00:33:09 --> 00:33:17
this data set there's promise here for

00:33:12 --> 00:33:20
the human centered approach the

00:33:16 --> 00:33:22
observation to summarize this particular

00:33:19 --> 00:33:24
data is that people are using it a lot

00:33:21 --> 00:33:27
he percentage of miles the percentage

00:33:23 --> 00:33:30
of hours is incredibly high at least

00:33:26 --> 00:33:32
relative to what was will be expected

00:33:29 --> 00:33:35
from these systems and given that

00:33:31 --> 00:33:40
here's no crashes there's no near

00:33:34 --> 00:33:43
crashes in autopilot the row type is

00:33:39 --> 00:33:49
mostly highway traveling at high speeds

00:33:42 --> 00:33:51
the mental engagement looked at 8,000

00:33:48 --> 00:33:53
transyl of control from machine to human

00:33:50 --> 00:33:56
so human beings taking control of the

00:33:52 --> 00:33:58
vehicle saying you know what I'm going

00:33:55 --> 00:33:59
to take control now I'm not comfortable

00:33:57 --> 00:34:02
with the situation for whatever reason

00:33:58 --> 00:34:04
either not comfortable or electing to do

00:34:01 --> 00:34:06
something that the vehicle is not able

00:34:03 --> 00:34:09
to like turn off the highway make a

00:34:05 --> 00:34:12
right or left turn stop for a stop sign

00:34:08 --> 00:34:14
these kinds of things physical

00:34:11 --> 00:34:18
engagement as I said glance remains the

00:34:13 --> 00:34:20
same and what do we take from this it

00:34:17 --> 00:34:22
says something that I'd like to really

00:34:19 --> 00:34:23
emphasize this we talked to was we

00:34:21 --> 00:34:26
talked about autonomous vehicles in this

00:34:22 --> 00:34:29
class and the guest speakers who are all

00:34:25 --> 00:34:32
on the other side so I'm representing

00:34:28 --> 00:34:34
the human center side all our speakers

00:34:31 --> 00:34:37
are focused on the full autonomy side

00:34:33 --> 00:34:39
because that's the side roboticists know

00:34:36 --> 00:34:41
how to solve that's the fascinating

00:34:38 --> 00:34:44
algorithm

00:34:40 --> 00:34:47
nerd side and that's the side I love as

00:34:43 --> 00:34:49
well just my belief stands that the

00:34:46 --> 00:34:51
solving the perception control problem

00:34:48 --> 00:34:54
is extremely difficult and to three

00:34:50 --> 00:34:56
decades away so in the meantime we have

00:34:53 --> 00:34:59
to utilize the human robot interaction

00:34:55 --> 00:35:01
to actually bring these AI systems onto

00:34:58 --> 00:35:06
the road to successfully operate and the

00:35:00 --> 00:35:10
way we do that counter-intuitively is we

00:35:05 --> 00:35:13
have to have we have to let the

00:35:09 --> 00:35:16
artificial intelligence systems reveal

00:35:12 --> 00:35:19
their flaws one of the most endearing

00:35:15 --> 00:35:23
things to human beings can do to each

00:35:18 --> 00:35:26
other friends is reveal their flaws to

00:35:22 --> 00:35:28
each other now from an automotive

00:35:25 --> 00:35:33
perspective from a company perspective

00:35:27 --> 00:35:35
it's perhaps not appealing for an AI

00:35:32 --> 00:35:38
system to reveal what it sees about the

00:35:34 --> 00:35:40
world and what it doesn't see about the

00:35:37 --> 00:35:45
world where it succeeds and where it

00:35:39 --> 00:35:47
fails but that is perhaps exactly what

00:35:44 --> 00:35:51
it needs to do in the case of autopilot

00:35:46 --> 00:35:53
he way the very limited but I believe

00:35:50 --> 00:35:55
successful way is currently doing that

00:35:52 --> 00:35:57
is allowing you to use autopilot

00:35:54 --> 00:36:00
basically anywhere so what people are

00:35:56 --> 00:36:02
doing is they're trying to engage their

00:35:59 --> 00:36:07
turn on autopilot in places where they

00:36:01 --> 00:36:12
really shouldn't rural rural roads curvy

00:36:06 --> 00:36:15
with terrible road markings with in in

00:36:11 --> 00:36:18
heavy rain conditions with snow with

00:36:14 --> 00:36:20
lots of cars driving at high speeds all

00:36:17 --> 00:36:23
around they turn autopilot on to

00:36:19 --> 00:36:25
understand to experience the limitations

00:36:22 --> 00:36:30
of the system to interact that

00:36:24 --> 00:36:33
human-robot interaction is through its

00:36:29 --> 00:36:34
tactile by turning it on and seeing is

00:36:32 --> 00:36:36
it going to work here how's it gonna

00:36:33 --> 00:36:39
fail and the human is always there to

00:36:35 --> 00:36:41
catch it that interaction that's

00:36:38 --> 00:36:43
communication that intimate

00:36:40 --> 00:36:46
understanding is what creates successful

00:36:42 --> 00:36:47
integration of AI in the car before

00:36:45 --> 00:36:50
we're able to solve the full autonomy

00:36:46 --> 00:36:54
puzzle learn the limitations by

00:36:49 --> 00:36:57
exploring it starts with this guy

00:36:53 --> 00:37:00
and hundreds of others if you search on

00:36:56 --> 00:37:04
YouTube first time with autopilot the

00:36:59 --> 00:37:06
amazing experience of direct transfer of

00:37:03 --> 00:37:09
control of your life to an artificial

00:37:05 --> 00:37:12
intelligence system in this case giving

00:37:08 --> 00:37:14
control to Tesla autopilot system this

00:37:11 --> 00:37:15
why in the human centered camp of

00:37:13 --> 00:37:19
autonomy

00:37:14 --> 00:37:22
I believe that autonomous vehicles can

00:37:18 --> 00:37:25
be viewed as personal robots with which

00:37:21 --> 00:37:26
you build build a relationship or the

00:37:24 --> 00:37:36
human robot interaction is the key

00:37:25 --> 00:37:40
problem not the perception control and

00:37:35 --> 00:37:42
they're the flaws of both humans and

00:37:39 --> 00:37:46
machines must be clearly communicated

00:37:41 --> 00:37:48
and perceived perceived because we use

00:37:45 --> 00:37:49
the computer vision algorithms to detect

00:37:47 --> 00:37:52
everything about the human it

00:37:48 --> 00:37:55
communicated because on the displays of

00:37:51 --> 00:37:58
the car or even through voice it has to

00:37:54 --> 00:38:04
be able to reveal when it doesn't see

00:37:57 --> 00:38:08
different aspects of the scene from the

00:38:03 --> 00:38:10
human centered approach then we can

00:38:07 --> 00:38:12
focus on the left the perception and

00:38:09 --> 00:38:14
control side perceiving everything about

00:38:11 --> 00:38:16
he external environment and controlling

00:38:13 --> 00:38:20
the vehicle without having to worry

00:38:15 --> 00:38:23
about being 99.99999% correct

00:38:19 --> 00:38:25
approaching a hundred percent correct

00:38:22 --> 00:38:27
because in the cases where it's

00:38:24 --> 00:38:32
extremely difficult we can let the human

00:38:26 --> 00:38:35
catch the system we can reveal the flaws

00:38:31 --> 00:38:41
and let the human take over when the

00:38:34 --> 00:38:41
system can't so let's get to the sensors

00:38:40 --> 00:38:50
the sources of raw data that we'll get

00:38:43 --> 00:38:54
o work with there

00:38:49 --> 00:39:02
three there's cameras so image sensors

00:38:53 --> 00:39:08
RGB infrared visual data does radar and

00:39:01 --> 00:39:11
ultrasonic and there's lidar let's

00:39:07 --> 00:39:13
discuss the strengths first to discuss

00:39:10 --> 00:39:15
really what these sensors are the

00:39:12 --> 00:39:18
strengths the weaknesses and how they

00:39:14 --> 00:39:22
can be integrated together through

00:39:17 --> 00:39:25
sensor fusion so radar is the trust of

00:39:21 --> 00:39:28
the old trusted friend the sensor that's

00:39:24 --> 00:39:31
commonly available in most vehicles that

00:39:27 --> 00:39:33
have any degree of autonomy on the left

00:39:30 --> 00:39:36
is a visualization of the kind of data

00:39:32 --> 00:39:41
on high-resolution radar that's able to

00:39:35 --> 00:39:44
be extracted it's cheap

00:39:40 --> 00:39:48
both radar which works with

00:39:43 --> 00:39:51
electromagnetic waves and ultrasonic

00:39:47 --> 00:39:53
which works with sound waves sending a

00:39:50 --> 00:39:56
wave letting it bounce off the obstacles

00:39:52 --> 00:39:58
knowing the speed of that wave being

00:39:55 --> 00:40:03
able to calculate the distance to the

00:39:57 --> 00:40:09
obstacle based on that it does extremely

00:40:02 --> 00:40:09
well in challenging weather rain snow

00:40:10 --> 00:40:17
the downside is low resolution compared

00:40:14 --> 00:40:19
to the other sensors we'll discuss but

00:40:16 --> 00:40:21
it is the one that's most reliable and

00:40:18 --> 00:40:23
used in automotive industry today and

00:40:20 --> 00:40:28
it's the one that's in sense of fusion

00:40:22 --> 00:40:34
is always there lidar visualized on the

00:40:27 --> 00:40:36
right the down size it's expensive but

00:40:33 --> 00:40:39
it produces an extremely accurate depth

00:40:35 --> 00:40:43
information and a high resolution map of

00:40:38 --> 00:40:50
the environment that has 360 degrees of

00:40:42 --> 00:40:52
visibility it has some of the big

00:40:49 --> 00:40:54
strengths of radar in terms of

00:40:51 --> 00:40:58
reliability but with much higher

00:40:53 --> 00:41:01
esolution and accuracy the downside is

00:40:57 --> 00:41:03
cost here is the

00:41:00 --> 00:41:06
visualization comparing the two of the

00:41:02 --> 00:41:10
kind of information get to work with the

00:41:05 --> 00:41:12
the density and the quality of

00:41:09 --> 00:41:16
information with lidar is much higher

00:41:11 --> 00:41:19
and lighter has been the successful

00:41:15 --> 00:41:22
source of ground truth the reliable

00:41:18 --> 00:41:28
sensor relied upon on vehicles that

00:41:21 --> 00:41:30
don't care about cost and camera the

00:41:27 --> 00:41:32
thing that most people here should be

00:41:29 --> 00:41:35
passionate about because machine

00:41:31 --> 00:41:37
learning deep learning has the most

00:41:34 --> 00:41:38
ability to have a significant impact

00:41:36 --> 00:41:40
here why

00:41:37 --> 00:41:43
first it's cheap so it's everywhere

00:41:39 --> 00:41:45
second it's the highest resolution so

00:41:42 --> 00:41:49
there's the most the most highly dense

00:41:44 --> 00:41:52
amount of information which means

00:41:48 --> 00:41:55
information is something that could be

00:41:51 --> 00:41:58
learned and inferred to interpret the

00:41:55 --> 00:42:01
xternal scene so that's why it's the

00:41:57 --> 00:42:04
best source of data for understanding

00:42:00 --> 00:42:06
the scene and the other reason it's

00:42:03 --> 00:42:11
awesome for deep learning is because of

00:42:05 --> 00:42:14
the huge eNOS of data involved the its

00:42:10 --> 00:42:17
many orders of magnitude more data

00:42:13 --> 00:42:21
vailable for driving in camera visible

00:42:16 --> 00:42:21
light or infrared than it is in lidar

00:42:21 --> 00:42:31
the and our world is designed for

00:42:27 --> 00:42:35
visible light our eyes work in similar

00:42:30 --> 00:42:38
ways the cameras at least crudely so the

00:42:34 --> 00:42:41
source data is similar the lane markings

00:42:37 --> 00:42:44
the traffic signs of traffic lights the

00:42:40 --> 00:42:47
other vehicles the other pedestrians all

00:42:43 --> 00:42:50
operate with each other in this RGB

00:42:46 --> 00:42:54
space in terms of visual characteristics

00:42:49 --> 00:42:58
the downside is cameras are bad at depth

00:42:53 --> 00:42:59
estimation it's noisy and difficult even

00:42:57 --> 00:43:03
with stereo vision cameras to estimate

00:42:58 --> 00:43:05
depth relative to lidar and they're not

00:43:02 --> 00:43:07
good in extreme weather and they're not

00:43:04 --> 00:43:10
good at least visible light cameras at

00:43:06 --> 00:43:10
night

00:43:10 --> 00:43:19
compare the ranges here's a plot and

00:43:13 --> 00:43:19
meters on the x-axis of the range and

00:43:19 --> 00:43:31
acuity and the y-axis with ultrasonic

00:43:25 --> 00:43:36
lidar radar and camera passive visual

00:43:30 --> 00:43:40
sensor plotted the range of cameras is

00:43:35 --> 00:43:41
the greatest this is looking at we're

00:43:39 --> 00:43:44
going to look at several different

00:43:40 --> 00:43:49
conditions this is for clear well-lit

00:43:43 --> 00:43:52
conditions so during the day no rain no

00:43:48 --> 00:43:55
fog lighter and radar have a smaller

00:43:51 --> 00:43:58
ange under 200 meters and ultrasonic

00:43:54 --> 00:44:00
sensors used mostly for Park assistance

00:43:57 --> 00:44:03
and these kinds of things and blind spot

00:43:59 --> 00:44:06
warning has terrible range is designed

00:44:02 --> 00:44:08
for extremely close as high resolution

00:44:05 --> 00:44:13
distance estimation for extremely close

00:44:07 --> 00:44:16
distances here a little bit small but

00:44:12 --> 00:44:17
looking at up top is clear well-lit

00:44:15 --> 00:44:20
conditions the plot we just looked at

00:44:16 --> 00:44:24
and on bottom is clear dark conditions

00:44:19 --> 00:44:27
o just a clear night day no rain but

00:44:23 --> 00:44:31
it's night and on the bottom right is

00:44:26 --> 00:44:35
heavy rain snow or fog vision falls

00:44:30 --> 00:44:39
apart in terms of range and accuracy

00:44:34 --> 00:44:43
under dark conditions and in rain snow

00:44:38 --> 00:44:47
or fog radar our old trusted friend

00:44:42 --> 00:44:49
stay strong the same range just under

00:44:46 --> 00:44:55
two hundred meters and at the same

00:44:48 --> 00:44:58
acuity same with sonar lighter doesn't

00:44:54 --> 00:45:03
works well at night but it does not do

00:44:57 --> 00:45:06
well with rain or fog or snow one of the

00:45:02 --> 00:45:08
biggest downsides of lidar other than

00:45:05 --> 00:45:10
cost so here's another interesting way

00:45:07 --> 00:45:12
to visualize this that I think is

00:45:09 --> 00:45:16
productive for our discussion of which

00:45:11 --> 00:45:19
sensor will win out is it the Elon Musk

00:45:15 --> 00:45:24
prediction of camera or is that the way

00:45:18 --> 00:45:26
more prediction of lidar for

00:45:23 --> 00:45:31
I'd are in this kind of plot that will

00:45:25 --> 00:45:34
ook for every single sensor the greater

00:45:30 --> 00:45:36
the radius of the blue the more

00:45:33 --> 00:45:37
successful that sensor is at

00:45:35 --> 00:45:41
accomplishing that feature with a bunch

00:45:36 --> 00:45:44
of features lined up around the circle

00:45:40 --> 00:45:47
so range for lidar is pretty good not

00:45:43 --> 00:45:50
great but pretty good resolution is also

00:45:46 --> 00:45:55
pretty good it works in the dark it

00:45:49 --> 00:45:59
works in bright light but it falls apart

00:45:54 --> 00:46:01
in the snow it does not provide color

00:45:58 --> 00:46:05
information texture information contrast

00:46:00 --> 00:46:08
it's able to detect speed but the sensor

00:46:04 --> 00:46:11
size at least to date is huge the sensor

00:46:07 --> 00:46:14
cost at least to date is extremely

00:46:10 --> 00:46:19
expensive and it doesn't do well in

00:46:13 --> 00:46:22
proximity where ultrasonic shines

00:46:18 --> 00:46:24
peaking of which ultrasonic same kind

00:46:21 --> 00:46:26
of plot does well in proximity detection

00:46:23 --> 00:46:29
it's cheap the cheapest sensor of the

00:46:25 --> 00:46:33
four and sensor size you can get it to

00:46:28 --> 00:46:37
be tiny it works and snow and fog and

00:46:32 --> 00:46:40
rain but its resolution is terrible

00:46:36 --> 00:46:42
its range is non-existent and it's not

00:46:39 --> 00:46:45
able to detect speed

00:46:41 --> 00:46:49
that's where radar steps up it's able to

00:46:44 --> 00:46:55
detect speed it's also cheap it's also

00:46:48 --> 00:46:57
small but the resolution is very low and

00:46:54 --> 00:46:59
it's just like lidar is not able to

00:46:56 --> 00:47:05
provide texture information color

00:46:58 --> 00:47:05
information camera the sensor cost is

00:47:04 --> 00:47:09
cheap

00:47:04 --> 00:47:12
the sensor size is small not good up

00:47:08 --> 00:47:15
close proximity the range is the longest

00:47:11 --> 00:47:15
of all of them resolution is the best of

00:47:14 --> 00:47:19
all of them

00:47:14 --> 00:47:22
it doesn't work in the dark it works in

00:47:18 --> 00:47:24
bright light but not always one of the

00:47:21 --> 00:47:25
biggest downfalls of camera senses is

00:47:23 --> 00:47:29
the sensitivity to the lighting

00:47:24 --> 00:47:32
variation it works it doesn't work in

00:47:28 --> 00:47:34
the snow fog rain so suffers much like

00:47:31 --> 00:47:37
lidar from that

00:47:33 --> 00:47:40
but it provides rich interesting

00:47:36 --> 00:47:42
sectional information the very kind that

00:47:39 --> 00:47:47
deep learning needs to make sense of

00:47:41 --> 00:47:53
this world so let's look at the cheap

00:47:46 --> 00:47:56
sensors ultrasonic radar and cameras

00:47:52 --> 00:47:59
which is one approach putting a bunch of

00:47:55 --> 00:48:04
those in a car and fusing them together

00:47:58 --> 00:48:06
the cost there is low one of the nice

00:48:03 --> 00:48:08
ways to visualize using this

00:48:05 --> 00:48:11
visualization technique when they're

00:48:07 --> 00:48:15
fused together on the bottom it gives

00:48:10 --> 00:48:20
you a sense of them working together to

00:48:14 --> 00:48:23
complement each other as strengths and

00:48:19 --> 00:48:27
the question is whether the camera or

00:48:22 --> 00:48:30
lidar will win out for partial autonomy

00:48:26 --> 00:48:34
or full autonomy on the bottom showing

00:48:29 --> 00:48:36
this kind of visualization for a lidar

00:48:33 --> 00:48:40
sensor and on top showing this kind of

00:48:35 --> 00:48:45
visualization for fused radar ultrasonic

00:48:39 --> 00:48:48
and camera at least under these

00:48:44 --> 00:48:52
considerations the fusion of the cheap

00:48:47 --> 00:48:54
sensors can do as well as lidar now the

00:48:51 --> 00:48:57
open question is whether lidar in the

00:48:53 --> 00:48:59
future of this technology can become

00:48:56 --> 00:49:01
cheap and its range can increase because

00:48:58 --> 00:49:03
then lidar can win out

00:49:00 --> 00:49:06
solid-state light our and a lot of

00:49:02 --> 00:49:08
developments with a lot of startup

00:49:05 --> 00:49:10
ladder companies are promising to

00:49:07 --> 00:49:14
decrease the cost and increase the range

00:49:09 --> 00:49:18
of these sensors but for now we plow

00:49:13 --> 00:49:22
along with dedication on the camera

00:49:17 --> 00:49:26
front the annotated driving data grows

00:49:21 --> 00:49:30
exponentially more and more people are

00:49:25 --> 00:49:33
beginning to annotate and study the

00:49:29 --> 00:49:37
particular driving perception and

00:49:32 --> 00:49:40
control problems and the very algorithms

00:49:36 --> 00:49:43
for the supervised and semi-supervised

00:49:39 --> 00:49:45
and generative networks that we use to

00:49:42 --> 00:49:47
work with this data are improving so

00:49:44 --> 00:49:50
it's a race

00:49:46 --> 00:49:54
and of course radar and ultrasonic I was

00:49:49 --> 00:49:58
there to help so companies that are

00:49:53 --> 00:50:07
playing in the space some of them are

00:49:57 --> 00:50:10
speaking here lame-o in April 2017 they

00:50:06 --> 00:50:15
exited their testing their extensive

00:50:09 --> 00:50:18
impressive testing process and allow the

00:50:14 --> 00:50:21
first rider in Phoenix Public rider in

00:50:17 --> 00:50:24
November 2017

00:50:20 --> 00:50:26
it's an incredible accomplishment for a

00:50:23 --> 00:50:29
company and for an artificial

00:50:25 --> 00:50:33
intelligence system in November 2017 no

00:50:28 --> 00:50:36
safety driver so the car truly achieved

00:50:32 --> 00:50:40
full autonomy under a lot of constraints

00:50:35 --> 00:50:43
but it's full autonomy it's a step it's

00:50:39 --> 00:50:45
an amazing step in the direction towards

00:50:42 --> 00:50:48
full autonomy much sooner than people

00:50:44 --> 00:50:51
would otherwise predict and the miles

00:50:47 --> 00:50:54
four million miles driven autonomously

00:50:50 --> 00:50:56
by November 2017 and growing quickly

00:50:53 --> 00:51:00
growing in terms of full autonomous

00:50:55 --> 00:51:03
driving if I can say so cautiously

00:50:59 --> 00:51:05
because most of those miles have a

00:51:02 --> 00:51:07
safety driver so I would argue it's not

00:51:04 --> 00:51:10
full autonomy but however they define

00:51:06 --> 00:51:16
full autonomy it's four million miles

00:51:09 --> 00:51:19
driven incredible uber in terms of miles

00:51:15 --> 00:51:22
econd on that list they have driven two

00:51:18 --> 00:51:28
million miles autonomously by December

00:51:21 --> 00:51:33
of this of last year 2017 the quiet

00:51:27 --> 00:51:35
player here in terms of not making any

00:51:32 --> 00:51:38
declarations of being fully autonomous

00:51:34 --> 00:51:44
just quietly driving in a human censored

00:51:37 --> 00:51:46
way l2 over 1 billion miles in autopilot

00:51:43 --> 00:51:50
over three hundred thousand vehicles

00:51:45 --> 00:51:52
today are equipped with autopilot

00:51:49 --> 00:51:55
echnology with the ability to drive

00:51:51 --> 00:52:00
control the car laterally and

00:51:54 --> 00:52:05
longitudinally and if anyone believes

00:51:59 --> 00:52:10
the CEO of Tesla there'll be over 1

00:52:04 --> 00:52:10
million such vehicles by the end of 2018

00:52:10 --> 00:52:17
but no matter what the 300,000 is an

00:52:14 --> 00:52:22
incredible number and the 1 billion

00:52:16 --> 00:52:25
miles is an incredible number autopilot

00:52:21 --> 00:52:27
was first released in September 2014 one

00:52:24 --> 00:52:32
of the first systems on the road to do

00:52:26 --> 00:52:37
so autopilot and I call myself as one of

00:52:31 --> 00:52:42
the skeptics in October 2016 autopilot

00:52:36 --> 00:52:47
decided to let go of an incredible work

00:52:41 --> 00:52:49
done by Mobil I now Intel we're

00:52:46 --> 00:52:51
designing their perception control

00:52:48 --> 00:52:53
system they decided to let go of it

00:52:50 --> 00:52:56
completely and start from scratch using

00:52:52 --> 00:53:01
mostly deep learning methods the DRI px

00:52:55 --> 00:53:04
2 system from Nvidia and 8 cameras they

00:53:00 --> 00:53:08
decided to start from scratch that's the

00:53:04 --> 00:53:12
kind of boldness the kind of risk-taking

00:53:07 --> 00:53:14
that can come with naivety but in this

00:53:11 --> 00:53:19
case it worked

00:53:13 --> 00:53:22
incredible audio 8 system is going to be

00:53:18 --> 00:53:24
released at the end of 2018 and it's

00:53:21 --> 00:53:26
promising one of the first vehicles

00:53:23 --> 00:53:33
that's promising what they're calling l3

00:53:25 --> 00:53:36
and the definition of l3 according to

00:53:32 --> 00:53:39
Thorsten Lionheart the head of the

00:53:35 --> 00:53:42
automated driving and Oddie in a naughty

00:53:38 --> 00:53:45
is when the function is operate as

00:53:41 --> 00:53:49
intended if the customer turns the

00:53:44 --> 00:53:51
traffic jam pilot on now this l3 system

00:53:48 --> 00:53:56
is designed only for traffic jazz

00:53:50 --> 00:53:59
bumper-to-bumper traffic under 60

00:53:55 --> 00:54:01
kilometers an hour if the customer

00:53:58 --> 00:54:04
eturns a traffic jam pilot on and uses

00:54:00 --> 00:54:06
it as intended and the car was in

00:54:03 --> 00:54:08
control at the time of the accident the

00:54:05 --> 00:54:10
driver goes to the insurance company and

00:54:07 --> 00:54:12
the insurance company will compensate

00:54:09 --> 00:54:14
the victims of the accident and

00:54:11 --> 00:54:18
aftermath they come to us

00:54:13 --> 00:54:24
we will pay them so that means the cars

00:54:17 --> 00:54:26
liable the problem is under the

00:54:23 --> 00:54:29
definition of l2 l3 perhaps there is

00:54:25 --> 00:54:32
ome truth to this being an l3 system

00:54:28 --> 00:54:34
the important thing here is it's

00:54:31 --> 00:54:36
nevertheless deeply and fundamentally

00:54:33 --> 00:54:39
human centered because even as you see

00:54:35 --> 00:54:43
here in this demonstration video with a

00:54:38 --> 00:54:45
reporter the car for a poorly understood

00:54:42 --> 00:54:48
reason transfer control to the driver

00:54:44 --> 00:54:52
says that's it I can't I can't take care

00:54:47 --> 00:54:56
of the situation you take control how

00:54:51 --> 00:54:58
much time do you have in terms of

00:54:55 --> 00:55:00
seconds before you really need to know

00:54:57 --> 00:55:04
to take over well this is the new thing

00:54:59 --> 00:55:07
about level 3 with level 3 the system

00:55:03 --> 00:55:10
allows the driver to give the prompt to

00:55:07 --> 00:55:14
take over vehicle control again ahead of

00:55:09 --> 00:55:17
time which is in this case up to 10

00:55:13 --> 00:55:21
seconds ok so if the traffic jam

00:55:16 --> 00:55:23
situation clears up or any failure in

00:55:20 --> 00:55:25
the system occurs everything you might

00:55:22 --> 00:55:28
hink of the system still needs to be

00:55:24 --> 00:55:32
able to drive automatically because the

00:55:27 --> 00:55:35
driver has this time to take over

00:55:31 --> 00:55:37
you might ask what its new about this so

00:55:34 --> 00:55:41
why is Howdy saying this is the first

00:55:36 --> 00:55:44
level 3 system worldwide on the market

00:55:40 --> 00:55:45
when talking about these levels of

00:55:43 --> 00:55:48
automation there's a classification

00:55:44 --> 00:55:50
which starts at lower zero which is

00:55:47 --> 00:55:53
basically the drivers doing everything

00:55:49 --> 00:55:57
there's no assistance nothing and then

00:55:52 --> 00:55:59
it gradually becomes into partly

00:55:56 --> 00:56:01
automation and when we're talking about

00:55:58 --> 00:56:03
hese assistance functions like

00:56:00 --> 00:56:05
lane-keeping and distance keeping we're

00:56:02 --> 00:56:10
talking about level 2 assistance

00:56:04 --> 00:56:14
function ok which is meaning that the

00:56:09 --> 00:56:17
driver is obliged to permanently monitor

00:56:13 --> 00:56:18
the traffic situation to keep the hands

00:56:16 --> 00:56:21
on the wheel even though there's a

00:56:17 --> 00:56:24
support and an assistance and to

00:56:20 --> 00:56:26
intervene immediately if anything is not

00:56:23 --> 00:56:29
quite right so you know that from laying

00:56:25 --> 00:56:32
assistance systems when the steering is

00:56:28 --> 00:56:34
not perfectly in the right lane we have

00:56:31 --> 00:56:37
to intervene and correct immediately and

00:56:33 --> 00:56:40
that is the main difference now we got a

00:56:36 --> 00:56:45
takeover request so what so let's let's

00:56:39 --> 00:56:48
talk about what that means this is still

00:56:44 --> 00:56:50
a human Center system it still struggles

00:56:47 --> 00:56:54
that still must solve the human robot

00:56:49 --> 00:56:55
interaction problem and there's many

00:56:53 --> 00:56:59
others playing in the space I'm the on

00:56:54 --> 00:57:03
the full autonomy side way mo uber GM

00:56:58 --> 00:57:07
crews new tana me the CTO of which he'll

00:57:02 --> 00:57:12
speak here on Tuesday optimist ride its

00:57:06 --> 00:57:17
annuity voyage the CEO of which will

00:57:11 --> 00:57:20
speak here next Thursday and Aurora not

00:57:16 --> 00:57:23
listed this the founder of which will

00:57:19 --> 00:57:26
speak here next Friday and the human

00:57:22 --> 00:57:29
centered autonomy side the reason I am

00:57:25 --> 00:57:31
speaking about us so much today is we

00:57:28 --> 00:57:35
don't have any speakers I'm the speaker

00:57:30 --> 00:57:37
the Tesla autopilot is for several years

00:57:34 --> 00:57:40
now doing incredible work on that side

00:57:36 --> 00:57:43
we are also working with Volvo pilot

00:57:39 --> 00:57:44
assist as a lot of different approaches

00:57:42 --> 00:57:48
they're more concerned

00:57:43 --> 00:57:50
of interesting the audio traffic jam

00:57:47 --> 00:57:53
assist as I mentioned the a8 being

00:57:49 --> 00:57:55
released at the end of this year the

00:57:52 --> 00:57:58
Mercedes drive pollicis in the e-class

00:57:54 --> 00:58:00
an interesting vehicle that I got to

00:57:57 --> 00:58:04
drive quite a bit as the Cadillac

00:57:59 --> 00:58:06
supercruise the ct-6 which is very much

00:58:03 --> 00:58:11
constrained geographically to highway

00:58:05 --> 00:58:13
driving and the loudest proudest of them

00:58:10 --> 00:58:16
all george hotz

00:58:12 --> 00:58:25
of the comma a open pilot let's just

00:58:15 --> 00:58:25
leave that there so where can a I help

00:58:25 --> 00:58:30
we'll get into the details of the coming

00:58:28 --> 00:58:35
lectures on each individual component

00:58:29 --> 00:58:39
I'd like to give some examples the key

00:58:34 --> 00:58:42
areas problem spaces that we can use

00:58:38 --> 00:58:44
machine learning to solve from data his

00:58:41 --> 00:58:47
localization and mapping so being able

00:58:43 --> 00:58:48
to localize yourself in the space the

00:58:46 --> 00:58:53
very first question that a robot needs

00:58:47 --> 00:58:55
to answer where am I seen understanding

00:58:52 --> 00:58:57
taking the scene in and interpreting

00:58:54 --> 00:59:01
that scene detecting all the entities in

00:58:56 --> 00:59:04
the scene detecting the class of those

00:59:00 --> 00:59:06
ntities in order to then do movement

00:59:03 --> 00:59:09
planning to move around those entities

00:59:05 --> 00:59:10
and finally driver state essential

00:59:08 --> 00:59:13
element for the human robot interaction

00:59:09 --> 00:59:14
perceive everything about the driver

00:59:12 --> 00:59:17
everything about the pedestrian and the

00:59:13 --> 00:59:21
cyclists and the cars outside the human

00:59:16 --> 00:59:25
element of those the human perception

00:59:20 --> 00:59:29
side so first the where am I visual

00:59:24 --> 00:59:32
odometry using camera sensors which is

00:59:28 --> 00:59:35
really where once again deep learning is

00:59:31 --> 00:59:37
most that a vision sensor is the most

00:59:34 --> 00:59:41
amenable to learning based approaches

00:59:36 --> 00:59:42
and visual odometry is using camera to

00:59:40 --> 00:59:47
localize yourself to answer the where am

00:59:41 --> 00:59:52
I question the traditional approaches

00:59:46 --> 00:59:55
lam detect features in the scene and

00:59:51 --> 00:59:58
track them through time from frame to

00:59:54 --> 01:00:01
frame and from the movement

00:59:57 --> 01:00:04
hose features are able to estimate

01:00:00 --> 01:00:07
thousands of features tracking estimate

01:00:03 --> 01:00:13
the location the orientation of the

01:00:06 --> 01:00:16
vehicle or the camera those methods with

01:00:12 --> 01:00:18
stereo vision first requires taking two

01:00:15 --> 01:00:21
camera streams on distorting them

01:00:17 --> 01:00:22
competing disparity map from the

01:00:20 --> 01:00:25
different perspectives of the two camera

01:00:21 --> 01:00:29
computing the matching between the two

01:00:24 --> 01:00:32
the feature detection thus if too fast

01:00:28 --> 01:00:34
or any of the methods of extracting non

01:00:31 --> 01:00:37
deep learning methods of the extracting

01:00:33 --> 01:00:39
features strong detectable features that

01:00:36 --> 01:00:41
can be tracked through from frame to

01:00:38 --> 01:00:43
frame tracking those features and

01:00:40 --> 01:00:46
estimating the trajectory the

01:00:42 --> 01:00:48
orientation of the camera that's the

01:00:45 --> 01:00:52
traditional approach to visual odometry

01:00:47 --> 01:00:57
in the recent years since 2015 but most

01:00:51 --> 01:00:59
success in the last year has been the

01:00:56 --> 01:01:04
nd end deep learning approaches either

01:00:58 --> 01:01:07
stereo or monocular cameras deep vo is

01:01:03 --> 01:01:09
one of the most successful the antenna

01:01:06 --> 01:01:12
method has taken a sequence of images

01:01:08 --> 01:01:15
extracting with a CNN from each image

01:01:11 --> 01:01:18
the central features from each image and

01:01:14 --> 01:01:20
then using RNN recurrent neural network

01:01:17 --> 01:01:26
to track over time the trajectory the

01:01:19 --> 01:01:29
pose of the camera image to pose and to

01:01:25 --> 01:01:34
end here's the visualization on a kitty

01:01:28 --> 01:01:37
data set using deep vo again taking the

01:01:33 --> 01:01:40
video up on the top right as an input

01:01:36 --> 01:01:44
and estimating what's visualized is the

01:01:39 --> 01:01:47
position of the vehicle in red is the

01:01:43 --> 01:01:51
stimate based again and to end with a

01:01:46 --> 01:01:53
CNN and RNN the in red is the estimate

01:01:50 --> 01:01:58
in blue is the ground truth in the kitty

01:01:52 --> 01:02:01
dataset so this removes a lot of the

01:01:57 --> 01:02:05
modular parts a slam a visual odometry

01:02:00 --> 01:02:07
and allows it to be and to end which

01:02:04 --> 01:02:09
means it's learner bull which means it

01:02:06 --> 01:02:12
gets better with data

01:02:08 --> 01:02:12
that's huge

01:02:11 --> 01:02:19
vision alone this is one of the exciting

01:02:15 --> 01:02:23
opportunities for AI or people working

01:02:18 --> 01:02:25
in AI is the ability to use a single

01:02:22 --> 01:02:28
sensor and perhaps the most inspiring

01:02:24 --> 01:02:31
because that sensor is similar to our

01:02:27 --> 01:02:35
own the sensor that we ourselves use of

01:02:30 --> 01:02:37
our eyes to use that alone as the

01:02:34 --> 01:02:40
primary sensor to control a vehicle

01:02:36 --> 01:02:43
that's really exciting and the fact that

01:02:39 --> 01:02:44
deep learning that the vision visible

01:02:42 --> 01:02:46
light is the most amenable to deep

01:02:43 --> 01:02:48
learning approaches makes this

01:02:45 --> 01:02:51
particularly an exciting area for deep

01:02:47 --> 01:02:53
learning research scene understanding of

01:02:50 --> 01:02:55
course who can do a thousand slides on

01:02:52 --> 01:02:59
this traditionally object detection

01:02:54 --> 01:03:00
pedestrians vehicles there is a bunch of

01:02:58 --> 01:03:02
different types of classifiers of

01:02:59 --> 01:03:05
eature extractions harlech features and

01:03:01 --> 01:03:08
eep learning has basically taken over

01:03:04 --> 01:03:12
and dominated every aspect of scene

01:03:07 --> 01:03:14
interpretation perception understanding

01:03:11 --> 01:03:18
tracking recognition classification

01:03:13 --> 01:03:24
detection problems and audio can't

01:03:17 --> 01:03:26
forget audio that we can use audio as

01:03:23 --> 01:03:29
ource of information whether that's

01:03:25 --> 01:03:31
detecting honks or in this case using

01:03:28 --> 01:03:34
the audio of the tires microphones on

01:03:30 --> 01:03:38
the tires to determine visualize there's

01:03:33 --> 01:03:38
a spectrogram of the audio coming in

01:03:40 --> 01:03:46
for those of you who are particularly

01:03:42 --> 01:03:50
have a particularly tuned ear can listen

01:03:45 --> 01:03:54
to the different audio coming in here of

01:03:49 --> 01:03:56
wet road and dry road after the rain so

01:03:53 --> 01:03:58
there's no rain but the road is

01:03:55 --> 01:04:00
nevertheless wet and detecting that is

01:03:57 --> 01:04:02
extremely important for vehicles because

01:03:59 --> 01:04:05
they still don't have traction control

01:04:01 --> 01:04:08
estelle have poor control in road to

01:04:04 --> 01:04:10
road surface tired road surface

01:04:07 --> 01:04:12
connection and being able to detect that

01:04:09 --> 01:04:14
from just audio is a very interesting

01:04:11 --> 01:04:14
approach

01:04:14 --> 01:04:21
finally we're not finally next for the

01:04:18 --> 01:04:23
perception control side finally is the

01:04:20 --> 01:04:25
movement planning getting from A to

01:04:22 --> 01:04:28
point from point A to point B

01:04:24 --> 01:04:31
traditional approaches the optimization

01:04:27 --> 01:04:34
based approach determine the optimal

01:04:30 --> 01:04:36
control try to reduce the problem

01:04:33 --> 01:04:39
formalize the problem in a way that's

01:04:35 --> 01:04:43
amenable to optimization based

01:04:38 --> 01:04:45
approaches there's a lot of assumptions

01:04:42 --> 01:04:47
that need to be made but once those

01:04:44 --> 01:04:51
assumptions are made you're able to

01:04:46 --> 01:04:53
determine to generate thousands or

01:04:50 --> 01:04:55
millions of possible trajectories and

01:04:52 --> 01:04:57
have an objective function we determine

01:04:54 --> 01:05:00
which of the trajectories to take here's

01:04:56 --> 01:05:04
a race car optimizing how to take a turn

01:04:59 --> 01:05:08
at high speed with deep learning

01:05:03 --> 01:05:09
reinforcement learning

01:05:07 --> 01:05:12
the application mule networks

01:05:08 --> 01:05:15
reinforcement learning is particularly

01:05:11 --> 01:05:21
exciting for both the control and the

01:05:14 --> 01:05:22
planning side so that's where the two of

01:05:20 --> 01:05:25
the competitions we're doing in this

01:05:21 --> 01:05:27
class come into play the simplistic

01:05:24 --> 01:05:32
two-dimensional world of deep traffic

01:05:26 --> 01:05:39
and the high mood high speed moving

01:05:31 --> 01:05:43
high-risk world of deep crash will

01:05:38 --> 01:05:46
explore those tomorrow tomorrow's

01:05:42 --> 01:05:50
lectures on deeper enforcement learning

01:05:45 --> 01:05:52
and finally drivers state detecting

01:05:49 --> 01:05:54
everything about the driver and then

01:05:51 --> 01:05:56
interacting with them on the left and

01:05:53 --> 01:05:58
green are the easier problems on the

01:05:55 --> 01:06:01
right and red are the harder problems in

01:05:57 --> 01:06:02
terms of perception in terms of how

01:06:00 --> 01:06:06
amenable they are to deep learning

01:06:01 --> 01:06:10
methods body pose estimation is a very

01:06:05 --> 01:06:12
well studied problem we have extremely

01:06:09 --> 01:06:15
good detectors for estimating the pose

01:06:11 --> 01:06:18
the hands the elbows the shoulders every

01:06:14 --> 01:06:21
aspect visible aspect of the body head

01:06:17 --> 01:06:24
pose the orientation of the head or

01:06:20 --> 01:06:26
extremely good at that and as we get

01:06:23 --> 01:06:30
smaller and smaller in terms of size

01:06:25 --> 01:06:32
blink rate blink duration I pose and

01:06:29 --> 01:06:35
blink dynamics start getting more and

01:06:31 --> 01:06:37
more difficult all of these metrics all

01:06:34 --> 01:06:39
of these metrics extremely important for

01:06:36 --> 01:06:42
detecting things like drowsiness or as

01:06:38 --> 01:06:45
components of detecting emotion or word

01:06:41 --> 01:06:48
people are looking in driving where your

01:06:44 --> 01:06:52
head is turned is not necessarily where

01:06:47 --> 01:06:55
you're looking in regular life

01:06:51 --> 01:06:59
non-driving life when you look somewhere

01:06:54 --> 01:07:03
you usually turn your head to look with

01:06:58 --> 01:07:05
your eyes in driving your head often

01:07:02 --> 01:07:08
stay still or moves very subtly your

01:07:04 --> 01:07:10
eyes do a lot more moving it's the kind

01:07:07 --> 01:07:14
of effect that we described as the

01:07:09 --> 01:07:16
lizard owl effect some fraction of

01:07:13 --> 01:07:18
people a small fraction or owls meaning

01:07:15 --> 01:07:22
they move their head a lot

01:07:17 --> 01:07:25
and some people most people are lizards

01:07:21 --> 01:07:27
moving eyes to allocate their attention

01:07:24 --> 01:07:29
the problem with eyes is from the

01:07:26 --> 01:07:31
computer vision perspective they're much

01:07:28 --> 01:07:33
arder to detect in lighting variation

01:07:30 --> 01:07:34
than real-world conditions they get

01:07:32 --> 01:07:37
harder and we'll discuss how to deal

01:07:33 --> 01:07:39
with it of course that's where deep

01:07:36 --> 01:07:40
learning steps up and really helps with

01:07:38 --> 01:07:43
real-world data

01:07:39 --> 01:07:44
cognitive load we'll discuss as well

01:07:42 --> 01:07:49
estimating the cognitive load of the

01:07:43 --> 01:07:50
driver to give a quick clip is this as

01:07:48 --> 01:07:54
the driver glance we've seen before

01:07:49 --> 01:07:58
stimating the very most important

01:07:53 --> 01:08:00
problem on driver stateside is

01:07:57 --> 01:08:03
determining whether they're looking on

01:07:59 --> 01:08:06
road or off road it's the dumbest

01:08:02 --> 01:08:08
simplest but most important aspect are

01:08:05 --> 01:08:11
they looking are they in the seat and

01:08:07 --> 01:08:15
looking on the road or are they not

01:08:10 --> 01:08:17
hat's driver glance classification not

01:08:14 --> 01:08:19
estimating the X Y Z geometric

01:08:16 --> 01:08:22
orientation where they're looking but

01:08:18 --> 01:08:25
actually binary class classification on

01:08:21 --> 01:08:28
road or off road body pose estimation

01:08:25 --> 01:08:31
determining if the hands are on wheel or

01:08:27 --> 01:08:36
not determining if the body alignment is

01:08:30 --> 01:08:38
tandard is good for seatbelt for safety

01:08:35 --> 01:08:40
this is one of the important things for

01:08:37 --> 01:08:43
autonomous vehicles if there's an

01:08:39 --> 01:08:45
imminent danger to the driver the driver

01:08:42 --> 01:08:48
should be asked to return to a position

01:08:44 --> 01:08:55
that is safe for them in case of a crash

01:08:47 --> 01:08:58
driver in motion on the top is

01:08:54 --> 01:09:01
atisfied on the bottom as a frustrated

01:08:57 --> 01:09:03
river they self-reported satisfied this

01:09:00 --> 01:09:06
with a voice based navigation one of

01:09:02 --> 01:09:07
the biggest sources of frustrations for

01:09:05 --> 01:09:10
people in cars is voice based navigation

01:09:06 --> 01:09:11
trying to tell an artificial

01:09:09 --> 01:09:14
intelligence system using your voice

01:09:10 --> 01:09:17
alone where you would like to go huge

01:09:13 --> 01:09:19
source of frustration one of the

01:09:16 --> 01:09:21
interesting things in our large data set

01:09:18 --> 01:09:23
hat we have from the effective

01:09:20 --> 01:09:26
computing perspective is determining

01:09:22 --> 01:09:28
which of the features are most commonly

01:09:25 --> 01:09:30
associated with frustrated voice based

01:09:27 --> 01:09:33
interaction and that's a smile as shown

01:09:29 --> 01:09:36
there it's the counter intuitive notion

01:09:32 --> 01:09:38
that emotion in particularly emotion in

01:09:35 --> 01:09:40
the car is very context dependent that

01:09:37 --> 01:09:45
smiling is not necessarily a sign of

01:09:39 --> 01:09:49
happiness and the stoic board look of

01:09:44 --> 01:09:53
the driver up top is not necessarily a

01:09:48 --> 01:09:56
reflection of unhappiness he is indeed a

01:09:52 --> 01:10:00
10 out of 10 in terms of satisfaction

01:09:55 --> 01:10:03
with the experience if he has ever been

01:09:59 --> 01:10:05
satisfied with anything

01:10:02 --> 01:10:08
happens to be Dan Brown one of the

01:10:04 --> 01:10:11
amazing engineers in our team cognitive

01:10:07 --> 01:10:14
load estimating from the eye region and

01:10:10 --> 01:10:17
sequences of images 3d convolutional

01:10:13 --> 01:10:18
neural networks taking in a sequence of

01:10:16 --> 01:10:20
images from the eye looking at the blink

01:10:17 --> 01:10:23
dynamics and the eye position to

01:10:19 --> 01:10:27
determine the cognitive load from 0 to 2

01:10:22 --> 01:10:31
how deep in thought you are two paths to

01:10:26 --> 01:10:36
autonomous future again I would like to

01:10:30 --> 01:10:38
maybe for the last time but probably not

01:10:35 --> 01:10:41
argue for the one on the left because

01:10:37 --> 01:10:43
our brilliant much smarter than me guest

01:10:40 --> 01:10:47
speakers will argue for the one on the

01:10:42 --> 01:10:50
right the human centered approach allows

01:10:46 --> 01:10:52
us to solve the problems of 99% accuracy

01:10:49 --> 01:10:53
of localization scene understanding

01:10:51 --> 01:10:55
movement planning those are the problems

01:10:52 --> 01:10:57
were taking on in this class the scene

01:10:54 --> 01:11:00
segmentation that we'll talk about on

01:10:56 --> 01:11:02
Thursday the control they will talk

01:10:59 --> 01:11:03
about tomorrow and the driver state that

01:11:01 --> 01:11:06
we'll talk about next Wednesday these

01:11:02 --> 01:11:08
problems can be solved with deep

01:11:05 --> 01:11:11
learning today the problems on the right

01:11:07 --> 01:11:13
solving them to close to 100% accuracy

01:11:10 --> 01:11:17
are extremely difficult and may be

01:11:12 --> 01:11:20
decades away because for full autonomy

01:11:16 --> 01:11:22
to be here we have to solve this

01:11:19 --> 01:11:25
ituation I've shown this many times

01:11:21 --> 01:11:31
octave Triomphe we have to solve this

01:11:24 --> 01:11:31
ituation I give you just a few examples

01:11:32 --> 01:11:47
what do you do you have to solve this

01:11:36 --> 01:11:53
ituation a sort of subtler situation

01:11:46 --> 01:11:55
here is a it's a busy crosswalk where no

01:11:52 --> 01:11:57
autonomous vehicle will ever have a hope

01:11:54 --> 01:12:00
of getting through unless it asserts

01:11:56 --> 01:12:02
itself and that there's a couple of

01:11:59 --> 01:12:05
vehicles here that kind of nudge

01:12:01 --> 01:12:06
themselves through or at least when they

01:12:04 --> 01:12:08
have the right-of-way don't necessarily

01:12:05 --> 01:12:10
nudge but don't hesitate when a

01:12:07 --> 01:12:13
pedestrian is present an ambulance

01:12:09 --> 01:12:16
flying by even though if you use a

01:12:12 --> 01:12:18
trajectory so and pedestrian intent

01:12:15 --> 01:12:21
modeling algorithm to predict the

01:12:17 --> 01:12:24
momentum of the pedestrian to estimate

01:12:20 --> 01:12:26
where they can possibly go you would

01:12:23 --> 01:12:28
then autonomous vehicle will stop but

01:12:25 --> 01:12:34
hese vehicles don't stop they assert

01:12:27 --> 01:12:37
hemselves they move forward now for a

01:12:33 --> 01:12:41
full autonomy system this may not be the

01:12:36 --> 01:12:45
last time I show this video but because

01:12:40 --> 01:12:47
it's taking full control it's following

01:12:44 --> 01:12:50
a reward function an objective function

01:12:46 --> 01:12:55
and all of the problems the ethical and

01:12:49 --> 01:12:59
the AI problems that arise like this

01:12:54 --> 01:13:00
Coast Runner problem will arise so we

01:12:58 --> 01:13:04
have to solve those problems we have to

01:12:59 --> 01:13:09
design that objective function so with

01:13:03 --> 01:13:11
at I'd like to thank you and encourage

01:13:08 --> 01:13:13
you to come tomorrow because you get a

01:13:10 --> 01:13:15
chance to participate in deep traffic a

01:13:12 --> 01:13:16
deep reinforcement learning competition

01:13:14 --> 01:13:21
thank you very much

01:13:15 --> 01:13:21
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
