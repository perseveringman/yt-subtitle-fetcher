---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "dWSbItd0HEA"
title: "Emilio Frazzoli, CTO, nuTonomy - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=dWSbItd0HEA"
thumbnail_url: "https://i.ytimg.com/vi/dWSbItd0HEA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=dWSbItd0HEA"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-03-09T16:54:56.000Z"
upload_date: "2018-03-09"
duration_seconds: 4042
duration_human: "1:07:22"
view_count: 32283
like_count: 468
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:18:58.015Z"
---

# Emilio Frazzoli, CTO, nuTonomy - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=dWSbItd0HEA
- video_id: dWSbItd0HEA
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-03-09T16:54:56.000Z
- upload_date: 2018-03-09
- duration: 1:07:22
- view_count: 32283
- like_count: 468
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018, computer vision, industry, nutonomy, delphi, boston, Karl Iagnemma
- categories: Science & Technology

## Description

This is a talk by Emilio Frazzoli for course 6.S094: Deep Learning for Self-Driving Cars (2018 version). Emilio is the Co-Founder and CTO at nuTonomy. This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

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

00:00:00 --> 00:00:06
today we have ameliafe Rizzoli he's the

00:00:02 --> 00:00:08
CTO of new Tata me one of the most

00:00:05 --> 00:00:10
successful autonomous vehicle companies

00:00:07 --> 00:00:12
in the world he's the inventor of the RR

00:00:09 --> 00:00:16
T star algorithm

00:00:11 --> 00:00:18
formerly a professor at MIT directing

00:00:15 --> 00:00:21
research group that put the first

00:00:17 --> 00:00:24
autonomous vehicles on road in Singapore

00:00:20 --> 00:00:27
and now he returns to MIT to talk with

00:00:24 --> 00:00:36
us give him a warm welcome

00:00:26 --> 00:00:37
oh thank you Lex

00:00:35 --> 00:00:41
it's a great opportunity is a great

00:00:37 --> 00:00:43
pleasure to be back here I spent 15

00:00:40 --> 00:00:46
years of my life here at MIT first as a

00:00:42 --> 00:00:49
graduate student and then as a faculty

00:00:45 --> 00:00:52
member and this is where

00:00:48 --> 00:00:54
autonomy the company essentially was

00:00:51 --> 00:00:57
born and we did a lot of the research

00:00:53 --> 00:00:59
that led us to you know to start this

00:00:56 --> 00:01:01
company and eventually you know develop

00:00:58 --> 00:01:03
all this technology what I will talk

00:01:00 --> 00:01:06
about today is a little bit about you

00:01:02 --> 00:01:08
know our vision on autonomous vehicles

00:01:05 --> 00:01:11
why we want to have autonomous vehicles

00:01:07 --> 00:01:12
you know some of the guidelines you know

00:01:10 --> 00:01:15
on the technology development why we are

00:01:11 --> 00:01:17
doing things in a certain way let's get

00:01:14 --> 00:01:18
started but and you know I really would

00:01:16 --> 00:01:23
like to tell you you know a number of

00:01:17 --> 00:01:25
stories about why I started doing this

00:01:22 --> 00:01:27
and why I think this is an important

00:01:24 --> 00:01:30
echnology why we ended up starting this

00:01:26 --> 00:01:32
company so you know I've been a faculty

00:01:29 --> 00:01:35
member here for 10 years I mean I was

00:01:31 --> 00:01:40
happily working with my UAVs and I was

00:01:34 --> 00:01:42
in Aero Astra at some point around 2005

00:01:39 --> 00:01:44
mm yeah something you know there was

00:01:41 --> 00:01:46
these DARPA Grand Challenges that

00:01:43 --> 00:01:51
sounded cool right so I started working

00:01:45 --> 00:01:54
on on cars as well but they are that

00:01:50 --> 00:01:57
were that I was doing was mostly you

00:01:53 --> 00:02:00
know I was working on airplanes and cars

00:01:56 --> 00:02:01
to make them fly and drive by themselves

00:01:59 --> 00:02:03
because it was cool you know just look

00:02:00 --> 00:02:05
you know no hands you know it drives and

00:02:02 --> 00:02:06
as it controls guys roboticist that's

00:02:04 --> 00:02:11
all I needed

00:02:05 --> 00:02:13
right but then in 2009 there was this

00:02:10 --> 00:02:16
new project that was starting in the

00:02:13 --> 00:02:18
team that was you know getting together

00:02:15 --> 00:02:22
to write a proposal for a project on

00:02:17 --> 00:02:24
future urban mobility in Singapore okay

00:02:21 --> 00:02:26
now telling you the whole story but

00:02:23 --> 00:02:28
essentially you know I got interested in

00:02:25 --> 00:02:32
that project just because I wanted to go

00:02:27 --> 00:02:34
to Singapore okay and then I you know

00:02:31 --> 00:02:37
then I called the person who was putting

00:02:33 --> 00:02:39
together the team and okay yeah thank

00:02:36 --> 00:02:40
you for your interest but you know what

00:02:38 --> 00:02:43
do you think that you bring to the table

00:02:39 --> 00:02:44
and you know we had just done the dark

00:02:42 --> 00:02:46
urban child and so well you know I know

00:02:43 --> 00:02:49
how to make autonomous cars

00:02:45 --> 00:02:52
o what this is a project on future

00:02:48 --> 00:02:55
urban mobility so what do cars have to

00:02:51 --> 00:02:56
do with with urban mobility autonomous

00:02:54 --> 00:02:59
cars you know what would they had to do

00:02:55 --> 00:03:00
with mobility and you know there was the

00:02:58 --> 00:03:03
phone call the five minute phone call

00:02:59 --> 00:03:05
that changed my life okay because she

00:03:02 --> 00:03:07
asked me this question that actually was

00:03:04 --> 00:03:11
Cindy Bernard who is now a chancellor

00:03:06 --> 00:03:16
ight and then I had to come up with an

00:03:10 --> 00:03:18
excuse right so why well imagine they

00:03:15 --> 00:03:20
have a smart phone and then a smart

00:03:17 --> 00:03:22
phone app and then you use this app to

00:03:19 --> 00:03:24
call a car the car comes to you you get

00:03:21 --> 00:03:26
on the car drive wherever you go want to

00:03:23 --> 00:03:28
go step off the car and the car you know

00:03:25 --> 00:03:30
goes to pick up somebody else it goes to

00:03:27 --> 00:03:32
park or something right so this was two

00:03:29 --> 00:03:34
thousand in nine uber twas Travis

00:03:31 --> 00:03:37
kalanick and a couple of guys and black

00:03:33 --> 00:03:39
cars in San Francisco right so and

00:03:36 --> 00:03:43
essentially she bought it so I joined

00:03:38 --> 00:03:45
the team and and we started this

00:03:42 --> 00:03:47
activity but you know the important

00:03:44 --> 00:03:50
hing is that I started thinking about

00:03:46 --> 00:03:51
you know there was something an excuse

00:03:49 --> 00:03:52
that they made up in those five minutes

00:03:50 --> 00:03:56
okay

00:03:51 --> 00:03:59
but you know what kind of sounds like a

00:03:55 --> 00:04:00
good idea and I started thinking more

00:03:58 --> 00:04:03
about this and I started thinking more

00:03:59 --> 00:04:06
about why do we want to have

00:04:02 --> 00:04:09
self-driving vehicles okay so the number

00:04:05 --> 00:04:11
one reason that you typically hear is we

00:04:08 --> 00:04:13
want to have self-driving vehicles so

00:04:10 --> 00:04:17
that we make roads safer

00:04:12 --> 00:04:21
okay a very large number of people die

00:04:16 --> 00:04:24
on on the road road accidents every year

00:04:20 --> 00:04:27
what these people do not realize is that

00:04:23 --> 00:04:30
most of those people are actually you

00:04:26 --> 00:04:34
know fairly young like in their 20s and

00:04:29 --> 00:04:36
30s okay ompletely they you know what

00:04:33 --> 00:04:37
people usually say is that you know

00:04:35 --> 00:04:40
Sebastian Thrun and you know back in the

00:04:36 --> 00:04:42
day he gave all these TED talks up

00:04:39 --> 00:04:44
talking about his best friend from where

00:04:41 --> 00:04:47
he was young who died in a road accident

00:04:43 --> 00:04:51
right and then he made a mission for his

00:04:46 --> 00:04:54
life to reduce the road accidents right

00:04:50 --> 00:04:56
but and I mean so any idea is that you

00:04:53 --> 00:04:58
most of the road accidents are due to

00:04:55 --> 00:04:59
human errors you remove the human you

00:04:57 --> 00:05:01
remove the error

00:04:58 --> 00:05:03
ight and then you save lives okay so

00:05:00 --> 00:05:05
this is this is typically the number one

00:05:02 --> 00:05:07
reason that people mention when they

00:05:04 --> 00:05:09
talk about why you want to have some

00:05:06 --> 00:05:11
tiny vehicles second reason is

00:05:08 --> 00:05:13
convenience

00:05:10 --> 00:05:16
ssentially if the car is driving by

00:05:12 --> 00:05:20
itself you can do other things you can

00:05:15 --> 00:05:22
sleep you can read you you can text

00:05:19 --> 00:05:24
legally to your heart's content you can

00:05:21 --> 00:05:27
check your emails or so and so forth

00:05:23 --> 00:05:31
right this is also great third thing is

00:05:26 --> 00:05:33
you know improved access to mobility you

00:05:30 --> 00:05:35
know people who cannot drive me because

00:05:32 --> 00:05:37
and I have some physical you know

00:05:34 --> 00:05:39
impairment or maybe they are too young

00:05:36 --> 00:05:41
they're too old already too intoxicated

00:05:38 --> 00:05:44
to drive right so then you know if

00:05:40 --> 00:05:47
computer can take them home

00:05:43 --> 00:05:50
another thing is increase efficiency

00:05:46 --> 00:05:53
throughput in in a city as cars can

00:05:49 --> 00:05:55
communicate beyond you know visual range

00:05:52 --> 00:05:58
for example another one is reduce

00:05:54 --> 00:06:01
nvironmental impact okay now these are

00:05:57 --> 00:06:04
all fantastic reasons you know why we

00:06:00 --> 00:06:07
may want to have some driving vehicles

00:06:03 --> 00:06:10
the problem with me is that if you think

00:06:06 --> 00:06:12
about this these are all you know good

00:06:09 --> 00:06:13
reasons but these are all ways that you

00:06:11 --> 00:06:15
take the status quo

00:06:12 --> 00:06:18
you know how cars are used today and you

00:06:14 --> 00:06:19
make it a little bit better maybe a lot

00:06:17 --> 00:06:23
better but you do not make it different

00:06:18 --> 00:06:25
okay and really that is what I am mostly

00:06:22 --> 00:06:27
what I was mostly interested in can we

00:06:24 --> 00:06:29
you know use this technology leverage

00:06:26 --> 00:06:34
this technology to change the way that

00:06:28 --> 00:06:36
we think of mobility okay so how do you

00:06:33 --> 00:06:38
compare all these different things okay

00:06:35 --> 00:06:40
so this is you know quick back of the

00:06:37 --> 00:06:44
nvelope kind of calculation that you

00:06:39 --> 00:06:47
can do in on your own you can question

00:06:43 --> 00:06:52
the numbers but I think that the orders

00:06:46 --> 00:06:54
of magnitude are right okay so you know

00:06:51 --> 00:06:56
the first thing is okay so fine we heard

00:06:53 --> 00:06:59
that a big reason for self-driving cars

00:06:56 --> 00:07:03
is to increase safety you know save

00:06:58 --> 00:07:07
lives great now how much is your life

00:07:02 --> 00:07:09
worth well to yourself to your loved

00:07:06 --> 00:07:11
ones your friends your family is

00:07:08 --> 00:07:13
probably you know priceless

00:07:10 --> 00:07:16
- the government is what about nine

00:07:12 --> 00:07:19
million dollars okay so this is what is

00:07:15 --> 00:07:22
called the this is what is called the

00:07:18 --> 00:07:24
cost of a statistical life there was a

00:07:21 --> 00:07:26
report that was released a few years ago

00:07:23 --> 00:07:28
probably you know there is an update now

00:07:25 --> 00:07:31
but I haven't seen it

00:07:27 --> 00:07:33
he economic cost in road accidents the

00:07:30 --> 00:07:36
United States is evaluated to be about

00:07:32 --> 00:07:40
you know 300 billion dollars a year the

00:07:35 --> 00:07:42
societal harm you know of road accidents

00:07:39 --> 00:07:45
is another you know all the pain and

00:07:41 --> 00:07:47
suffering is evaluated to be another six

00:07:44 --> 00:07:49
hundred billion dollars a year so what

00:07:46 --> 00:07:52
we are getting to is about almost 1

00:07:48 --> 00:07:56
trillion dollars okay it's a big number

00:07:51 --> 00:08:00
okay but let's look at where the other

00:07:55 --> 00:08:02
effects are okay what is the cost of

00:07:59 --> 00:08:04
congestion is an estimate hundred

00:08:01 --> 00:08:07
billion dollars a year the health cost

00:08:03 --> 00:08:08
of congestion of the extra pollution so

00:08:06 --> 00:08:10
another fifty billion dollars a year so

00:08:07 --> 00:08:15
you see that these are a little it just

00:08:09 --> 00:08:18
a small change right the next effect is

00:08:14 --> 00:08:21
actually important right so what is the

00:08:17 --> 00:08:25
value of the time that we as everybody

00:08:20 --> 00:08:28
in society will get back from not having

00:08:24 --> 00:08:31
to drive okay simple calculation what I

00:08:27 --> 00:08:34
did is I multiplied one half the median

00:08:30 --> 00:08:37
wage of workers in the United States

00:08:33 --> 00:08:40
which is an embarrassingly low number

00:08:36 --> 00:08:43
multiplied by the number of hours that

00:08:39 --> 00:08:46
Americans spend behind the wheel okay

00:08:42 --> 00:08:48
and what you get is about you know what

00:08:45 --> 00:08:52
was it about 1.2 trillion dollars a year

00:08:47 --> 00:08:56
so something that you may notice is that

00:08:51 --> 00:08:59
he value to society of getting the time

00:08:55 --> 00:09:02
back from having to drive is actually

00:08:58 --> 00:09:05
more than the value to society or

00:09:01 --> 00:09:07
increased safety okay of course it's a

00:09:04 --> 00:09:09
little bit cynical okay so take it with

00:09:06 --> 00:09:11
a grain of salt and a grain of salt but

00:09:08 --> 00:09:14
you start seeing you know how these

00:09:10 --> 00:09:16
things compare and what you may notice

00:09:13 --> 00:09:18
from this pie chart is that you know

00:09:15 --> 00:09:20
there is still half of that is missing

00:09:17 --> 00:09:23
what is the other half

00:09:19 --> 00:09:25
is actually the value

00:09:22 --> 00:09:29
that you provide to society to you know

00:09:24 --> 00:09:33
all individuals okay by essentially

00:09:29 --> 00:09:35
making car sharing finally something

00:09:32 --> 00:09:39
that is convenient to use affordable

00:09:34 --> 00:09:41
reliable okay so for me car sharing or

00:09:38 --> 00:09:43
you know vehicle share in general is a

00:09:40 --> 00:09:46
concept that everybody loves but nobody

00:09:42 --> 00:09:48
uses okay or not as many people as we

00:09:45 --> 00:09:51
would like to you know use this kind of

00:09:47 --> 00:09:54
services examples when I was you know

00:09:50 --> 00:09:58
here at MIT I really like using hub way

00:09:53 --> 00:10:01
ou know the bicycle you know sharing

00:09:57 --> 00:10:02
but you have to be very careful you know

00:10:00 --> 00:10:04
if you wait too long in the afternoon

00:10:01 --> 00:10:07
sorry there are no more bikes on campus

00:10:03 --> 00:10:10
right or maybe very often you cannot

00:10:06 --> 00:10:13
find a bike or maybe you cannot find a

00:10:09 --> 00:10:15
parking spot for your bike so then you

00:10:12 --> 00:10:17
had to buy somewhere else and then work

00:10:14 --> 00:10:20
so that defeats the purpose of of using

00:10:16 --> 00:10:22
that bike same thing with with cars

00:10:19 --> 00:10:25
right so typically with you know car

00:10:21 --> 00:10:26
sharing systems what you have is either

00:10:24 --> 00:10:29
you have a like a two-way which is

00:10:25 --> 00:10:31
essentially hourly rental right or you

00:10:28 --> 00:10:32
have a one-way but in one way system

00:10:30 --> 00:10:35
then the distribution of cars tend to

00:10:31 --> 00:10:38
get skewed right and unless the company

00:10:34 --> 00:10:41
ou know rip repositions cars in some

00:10:37 --> 00:10:43
you know clever way then the year you're

00:10:40 --> 00:10:45
not guaranteed that you will get a car

00:10:42 --> 00:10:47
where you need it and you're not

00:10:44 --> 00:10:49
guaranteed that you will get a spot a

00:10:46 --> 00:10:51
parking spot when you don't need the car

00:10:48 --> 00:10:54
anymore okay if you think of that these

00:10:50 --> 00:10:56
are both like a friction points you know

00:10:53 --> 00:10:57
for using vehicle sharing and these are

00:10:55 --> 00:11:00
both pre friction points that are

00:10:56 --> 00:11:05
actually addressed by if the car can

00:10:59 --> 00:11:10
drive itself okay so if you bring in all

00:11:04 --> 00:11:12
the economic you know benefits of a a

00:11:09 --> 00:11:14
car sharing system that actually works

00:11:11 --> 00:11:17
that's something that we estimate it to

00:11:13 --> 00:11:19
be you know it's about two thousand

00:11:16 --> 00:11:21
ollars a year so you see that this

00:11:18 --> 00:11:23
actually it has a like a big chunk in

00:11:20 --> 00:11:26
this in this pie chart okay and that is

00:11:22 --> 00:11:28
using an estimate of what we call the

00:11:25 --> 00:11:29
sheriff factor of four meaning that one

00:11:27 --> 00:11:32
of the shared vehicles can essentially

00:11:28 --> 00:11:33
substitute for for in privately owned

00:11:31 --> 00:11:36
vehicles okay

00:11:32 --> 00:11:40
there are some studies that you know get

00:11:35 --> 00:11:42
o this sharing factor up to ten and of

00:11:39 --> 00:11:44
course the benefits are even more now

00:11:41 --> 00:11:47
every time I see inter write a round

00:11:43 --> 00:11:49
number like that I get suspicious right

00:11:46 --> 00:11:53
you know ten is a little bit too

00:11:48 --> 00:11:54
convenient to be true right but any so

00:11:52 --> 00:12:01
that's something that you can find in

00:11:53 --> 00:12:04
the literature so so this is really

00:12:00 --> 00:12:08
where I think that the major impact of

00:12:03 --> 00:12:11
autonomous driving or certain cars

00:12:07 --> 00:12:12
will come from now if you I think also

00:12:10 --> 00:12:14
there is a lot of confusion in the

00:12:11 --> 00:12:18
community in the world about what a

00:12:13 --> 00:12:20
self-driving car means now what I'm

00:12:17 --> 00:12:23
doing here I just listed this you know

00:12:19 --> 00:12:25
five levels socially six levels of

00:12:22 --> 00:12:28
automation you know these are the

00:12:24 --> 00:12:31
Society of Automotive Engineers levels

00:12:27 --> 00:12:33
okay so level zero is not a mission

00:12:30 --> 00:12:37
that's your you know great-grandfather's

00:12:32 --> 00:12:39
car right driver assistance level one

00:12:36 --> 00:12:43
there is for example cruise control or

00:12:38 --> 00:12:47
you know some simple single channel

00:12:42 --> 00:12:48
automation partial automation you have

00:12:46 --> 00:12:53
you know something like for example

00:12:47 --> 00:12:56
lane-keeping and cruise control but you

00:12:52 --> 00:12:58
still require the driver to pay

00:12:55 --> 00:12:59
attention and intervene conditioner

00:12:57 --> 00:13:02
automation level three

00:12:58 --> 00:13:04
a driver is a necessity it's not

00:13:01 --> 00:13:07
required to pay attention all the time

00:13:03 --> 00:13:11
but needs to be able to intervene given

00:13:06 --> 00:13:15
some notice okay and you know that some

00:13:10 --> 00:13:17
losses I think is like ill-defined

00:13:14 --> 00:13:19
concept and then you have level four

00:13:16 --> 00:13:22
level five that are like a higher

00:13:18 --> 00:13:25
donation essentially no driver needed in

00:13:21 --> 00:13:29
some condition that is level four and in

00:13:24 --> 00:13:32
all conditions that level five okay now

00:13:28 --> 00:13:34
my first reaction when I started seeing

00:13:31 --> 00:13:37
these levels and you know there is also

00:13:33 --> 00:13:39
similar version by Nitza

00:13:36 --> 00:13:42
is that listening to me you know a

00:13:38 --> 00:13:46
horrible idea and the horrible idea

00:13:41 --> 00:13:49
in the sense in because they are given

00:13:45 --> 00:13:52
umeric levels so you have level zero

00:13:48 --> 00:13:54
ne two three five whenever you have a

00:13:51 --> 00:13:56
sequence of numbers you are led to

00:13:53 --> 00:13:59
believe that these are actually

00:13:55 --> 00:14:01
sequential right that you do level zero

00:13:58 --> 00:14:05
then you do level one thing you do level

00:14:00 --> 00:14:08
two three four five I think this isn't

00:14:04 --> 00:14:10
like an enormously bad idea because I

00:14:07 --> 00:14:13
think that level 2 and level 3 that is

00:14:09 --> 00:14:15
anything where you require the human to

00:14:12 --> 00:14:16
pay attention and supervise the

00:14:14 --> 00:14:21
automation and be ready to intervene

00:14:15 --> 00:14:23
with no notice or with some ambiguously

00:14:20 --> 00:14:28
defined you know like a sufficiently

00:14:22 --> 00:14:32
notice they just go behind you know go

00:14:27 --> 00:14:34
against human nature and you know this

00:14:31 --> 00:14:37
especially painful for me as a former

00:14:34 --> 00:14:39
aeronautics and astronautics professor

00:14:36 --> 00:14:42
where we saw in the airline industry

00:14:38 --> 00:14:45
that as soon as Auto Palace were being

00:14:41 --> 00:14:46
introduced and everybody thought that

00:14:44 --> 00:14:47
accidents would go down

00:14:45 --> 00:14:49
actually there were more accidents

00:14:46 --> 00:14:52
because now you have new failure modes

00:14:48 --> 00:14:55
induced by auto pilots okay you have

00:14:51 --> 00:14:57
multiple fusion Pylos flu situation

00:14:54 --> 00:15:00
awareness pylos lose the ability to

00:14:56 --> 00:15:03
react in case of an emergency okay so

00:14:59 --> 00:15:05
the idler and Industry had to

00:15:02 --> 00:15:08
essentially educate itself on how to

00:15:04 --> 00:15:11
deal with automation in a good way and

00:15:07 --> 00:15:14
think of pile you know pilots are highly

00:15:10 --> 00:15:16
trained professionals which is not the

00:15:13 --> 00:15:19
same that you can say about your

00:15:15 --> 00:15:22
everyday driver right so how do you

00:15:18 --> 00:15:24
train people who probably you know you

00:15:21 --> 00:15:27
know the last time they said with a with

00:15:23 --> 00:15:30
an instructor in a car was you know when

00:15:26 --> 00:15:33
they were 16 right how do you train

00:15:29 --> 00:15:35
people to use the automation technology

00:15:32 --> 00:15:36
in and do it safely right so I think

00:15:34 --> 00:15:39
that you know distantly that front very

00:15:35 --> 00:15:41
scary on the other hand I think that you

00:15:38 --> 00:15:44
know the full automation when the car is

00:15:40 --> 00:15:46
essentially able to drive itself does

00:15:43 --> 00:15:48
not rely on a human to take over isn't

00:15:45 --> 00:15:51
it that in a sense is easier

00:15:47 --> 00:15:52
and you know this is what we are doing

00:15:50 --> 00:15:54
and but you know the point is that not

00:15:51 --> 00:15:57
all it is easier but I think that is

00:15:53 --> 00:16:00
essential to capture the value of the

00:15:56 --> 00:16:02
technology now if you think of it so how

00:15:59 --> 00:16:04
do you realize the value of these

00:16:01 --> 00:16:08
lf-driving vehicles okay so the first

00:16:03 --> 00:16:10
hing that people say is safety I think

00:16:07 --> 00:16:13
it is true that eventually

00:16:09 --> 00:16:15
asymptotically self-driving cars will be

00:16:12 --> 00:16:20
safer than their human driven

00:16:14 --> 00:16:23
counterparts however at what point can

00:16:19 --> 00:16:27
we be confident that that is the case

00:16:22 --> 00:16:33
are we there yet not sure okay

00:16:26 --> 00:16:36
so so how do you demonstrate the

00:16:32 --> 00:16:40
reliability of these self-driving cars

00:16:35 --> 00:16:43
o we know you know they've driven that

00:16:39 --> 00:16:47
cars for three million miles right so

00:16:42 --> 00:16:50
with a readily small number of accidents

00:16:46 --> 00:16:58
if I remember correctly only one was

00:16:49 --> 00:17:01
their fault right but um actually humans

00:16:57 --> 00:17:04
drive for many you know many times that

00:17:00 --> 00:17:06
without accidents or so how do you

00:17:03 --> 00:17:10
really make sure that even though the

00:17:05 --> 00:17:13
number sounds impressive it really

00:17:09 --> 00:17:15
doesn't have that much of a statistical

00:17:12 --> 00:17:17
significance right and then every time

00:17:14 --> 00:17:19
you make an update to a change to your

00:17:16 --> 00:17:21
system to your software you really have

00:17:18 --> 00:17:24
to validate again right so I think that

00:17:20 --> 00:17:28
making the case for safety is actually

00:17:23 --> 00:17:30
is a very challenging issue and we may

00:17:27 --> 00:17:32
not be positive that these self-driving

00:17:29 --> 00:17:35
cars are actually safer than the human

00:17:31 --> 00:17:36
counterparts you know until you know a

00:17:34 --> 00:17:39
really long time from now

00:17:35 --> 00:17:44
okay so safety for me remains kind of an

00:17:38 --> 00:17:46
questioned open question at this point

00:17:43 --> 00:17:50
how do you get back the time value of

00:17:45 --> 00:17:53
driving if you had you know at least I'm

00:17:49 --> 00:17:55
speaking for myself if I have to

00:17:52 --> 00:17:58
constantly pay attention to what the car

00:17:54 --> 00:17:59
is doing excuse me but I rather drive

00:17:57 --> 00:18:03
myself

00:17:58 --> 00:18:04
okay because you know if the car is

00:18:02 --> 00:18:07
driving and you know this is the paradox

00:18:03 --> 00:18:09
right so the better the car drives the

00:18:06 --> 00:18:12
harder it is for me to keep paying

00:18:08 --> 00:18:14
attention right and this is where the

00:18:11 --> 00:18:16
whole problem is right so there would be

00:18:13 --> 00:18:19
very hard for me not to fall asleep or

00:18:15 --> 00:18:20
you know not to get distracted so if I

00:18:18 --> 00:18:22
want to get that time back

00:18:19 --> 00:18:24
really you know the car must be able to

00:18:21 --> 00:18:28
drive itself without requiring me to pay

00:18:23 --> 00:18:32
attention captioning again you know is a

00:18:27 --> 00:18:34
you know in order to make car sharing

00:18:31 --> 00:18:37
really convenient and reliable and

00:18:33 --> 00:18:40
sounds fourth you need the car to come

00:18:36 --> 00:18:43
to you with nobody inside and Ford it

00:18:40 --> 00:18:46
for that you need level four or level

00:18:42 --> 00:18:47
five okay anything else just doesn't cut

00:18:45 --> 00:18:51
it you know everything else for me is

00:18:46 --> 00:18:53
just a nice gadget that you have on your

00:18:50 --> 00:18:55
car that you show off to your friends or

00:18:52 --> 00:18:56
to your girlfriend okay so that's about

00:18:54 --> 00:19:01
it

00:18:55 --> 00:19:03
right is it's not that useful so my

00:19:00 --> 00:19:05
point is that level four or five

00:19:02 --> 00:19:09
automation is really essential to

00:19:04 --> 00:19:12
capture the value of this technology and

00:19:08 --> 00:19:15
in fact the one game-changing feature of

00:19:11 --> 00:19:17
these cars is the fact that these cars

00:19:14 --> 00:19:19
now can move around with nobody inside

00:19:16 --> 00:19:23
that's really the game-changing feature

00:19:18 --> 00:19:25
okay good and you know this is you know

00:19:22 --> 00:19:28
really what we like to do now there are

00:19:24 --> 00:19:31
many paths that you can go after this

00:19:27 --> 00:19:34
target okay I usually show this this

00:19:30 --> 00:19:37
fear okay so on this figure what I show

00:19:33 --> 00:19:39
on the horizontal axis is the scale or

00:19:36 --> 00:19:42
the scope of the kind of driving that

00:19:38 --> 00:19:45
you can do okay so on the left is like a

00:19:41 --> 00:19:47
small you know pilot maybe a closed

00:19:44 --> 00:19:51
course on the right is driving

00:19:46 --> 00:19:56
everywhere okay on the you know like

00:19:50 --> 00:19:58
complex environments right mass

00:19:55 --> 00:20:00
deployment and so forth on the left

00:19:57 --> 00:20:05
here is on the vertical axis is the

00:19:59 --> 00:20:07
level of automation okay now really what

00:20:04 --> 00:20:09
we would like to do is get to the top

00:20:06 --> 00:20:12
right corner right so we have millions

00:20:08 --> 00:20:14
of cars driving all over the world

00:20:11 --> 00:20:19
are completely you know completely out

00:20:13 --> 00:20:19
in a completely automated way okay

00:20:19 --> 00:20:24
what I see is there are two different

00:20:21 --> 00:20:27
paths that the industry is taking okay

00:20:23 --> 00:20:29
what I show here is what I call this is

00:20:26 --> 00:20:33
the OEM path okay

00:20:28 --> 00:20:36
so this is the the automaker's right so

00:20:32 --> 00:20:39
they're used to thinking of production

00:20:35 --> 00:20:41
of cars in the orders of many

00:20:38 --> 00:20:43
millions okay

00:20:40 --> 00:20:45
and essentially what they do is they

00:20:42 --> 00:20:48
make a lot of cars and they are adding

00:20:44 --> 00:20:50
features to discuss you know advanced

00:20:47 --> 00:20:52
river assistance systems and so on so

00:20:49 --> 00:20:56
forth right and essentially they're

00:20:51 --> 00:20:59
following these levels 0 1 2 3 4 5 ok

00:20:55 --> 00:21:03
and you know today you can buy cars

00:20:58 --> 00:21:06
which even though they claim fully

00:21:02 --> 00:21:10
autonomous you know package for $5,000

00:21:05 --> 00:21:12
plus another $40,000 or something in the

00:21:09 --> 00:21:15
fine print this is level 2 rights or

00:21:11 --> 00:21:18
level 2 or level 3 so you know Tesla

00:21:14 --> 00:21:21
said is I think the bau-t who the new

00:21:17 --> 00:21:23
Audi a8 is a 8 they're coming out with

00:21:20 --> 00:21:26
is we just kind of feature Cadillac I

00:21:22 --> 00:21:28
think as a similar thing okay

00:21:25 --> 00:21:31
the problem with that I seen that you

00:21:27 --> 00:21:32
know you had to cross this this red band

00:21:30 --> 00:21:34
okay

00:21:31 --> 00:21:37
this red band where you're actually

00:21:33 --> 00:21:41
requiring human supervision you know of

00:21:36 --> 00:21:43
your automation system another path

00:21:40 --> 00:21:46
where people are following is this other

00:21:42 --> 00:21:50
okay so this is what we are doing what

00:21:45 --> 00:21:52
way more you know where these are where

00:21:49 --> 00:21:55
all the indications or that Weimer is

00:21:51 --> 00:21:57
doing of course they're not telling me

00:21:54 --> 00:21:59
xactly what they do similar thing for

00:21:56 --> 00:22:02
uber right so essentially what they're

00:21:58 --> 00:22:04
doing is they're working on cars would

00:22:01 --> 00:22:07
be fully automated from the beginning

00:22:03 --> 00:22:09
and they start with a small you know

00:22:06 --> 00:22:11
maybe geofence application and then

00:22:08 --> 00:22:15
scale that update operations outright

00:22:10 --> 00:22:19
but always remaining at the full you

00:22:14 --> 00:22:21
know High full automation level okay

00:22:18 --> 00:22:23
another thing that is important that you

00:22:20 --> 00:22:25
know people make a lot of confusion and

00:22:22 --> 00:22:31
on't seem to realize the big difference

00:22:24 --> 00:22:33
is the following when people ask me when

00:22:30 --> 00:22:35
do you think that we will see autonomous

00:22:32 --> 00:22:37
vehicles everywhere on the city aware

00:22:34 --> 00:22:41
you know autonomous vehicle would be and

00:22:36 --> 00:22:43
would be common I guess I'm okay but you

00:22:40 --> 00:22:45
know what do you mean exactly by that

00:22:42 --> 00:22:47
right because if you ask me when you see

00:22:44 --> 00:22:49
that you will be able to walk into a car

00:22:46 --> 00:22:51
dealership and get out with the keys to

00:22:48 --> 00:22:53
a car that you know you just push a

00:22:50 --> 00:22:55
button it takes you home that's not

00:22:52 --> 00:22:58
happening for another 20 years or at

00:22:54 --> 00:23:00
least okay on the other hand if you ask

00:22:57 --> 00:23:02
me when you will be able to go to some

00:22:59 --> 00:23:04
new city and some on one of these

00:23:01 --> 00:23:06
vehicles that piece you up and takes you

00:23:03 --> 00:23:09
to your destination the other thing is

00:23:05 --> 00:23:12
happening within a couple of years okay

00:23:08 --> 00:23:15
what is the difference there is a big

00:23:11 --> 00:23:17
difference between autonomous vehicles

00:23:14 --> 00:23:21
elf-driving cars is a consumer product

00:23:16 --> 00:23:24
versus a service that you provide you

00:23:20 --> 00:23:27
know to two passengers okay so for

00:23:23 --> 00:23:29
example what is the scope you know where

00:23:26 --> 00:23:34
do these cars need to be able to drive

00:23:28 --> 00:23:37
okay if it's a product and I pay you

00:23:33 --> 00:23:39
know ten thousand dollars for it then I

00:23:36 --> 00:23:41
want this thing to work everywhere right

00:23:38 --> 00:23:43
so take me home you know pick two to be

00:23:40 --> 00:23:46
into this little alley you know drive me

00:23:42 --> 00:23:48
through the countryside on the other

00:23:45 --> 00:23:50
hand if I'm a service provider and I'm

00:23:47 --> 00:23:51
offering the service I can decide you

00:23:49 --> 00:23:54
know I'm offering this service in this

00:23:50 --> 00:23:55
particular location and by the way I'm

00:23:53 --> 00:23:57
offering this service under these

00:23:54 --> 00:24:00
weather conditions and maybe under these

00:23:56 --> 00:24:05
traffic conditions okay so just the

00:23:59 --> 00:24:08
problem becomes much more much easier

00:24:04 --> 00:24:11
what are the financials right so if I

00:24:07 --> 00:24:14
have to sell you in autonomy a car with

00:24:10 --> 00:24:17
an autonomy package how much can i cost

00:24:13 --> 00:24:18
you know what would what are my

00:24:16 --> 00:24:22
cross-country constraints on that

00:24:17 --> 00:24:23
autonomy package if I sell it to you you

00:24:21 --> 00:24:25
know first of all the cost of the

00:24:22 --> 00:24:28
autonomy package must be comparable to

00:24:24 --> 00:24:31
the cost of the vehicle okay

00:24:27 --> 00:24:34
ou know you will not buy a $20,000 car

00:24:30 --> 00:24:40
with a half a million dollar autonomy

00:24:33 --> 00:24:42
package right also you can do so another

00:24:39 --> 00:24:45
back-of-the-envelope calculation that it

00:24:41 --> 00:24:47
is okay so let's say that what is the

00:24:44 --> 00:24:49
value to you as the buyer of this

00:24:46 --> 00:24:50
autonomy package let's say that the

00:24:48 --> 00:24:52
value to you is the fact that now

00:24:49 --> 00:24:54
instead of dragging you know for the

00:24:51 --> 00:24:56
rest of you know for the next 10 years

00:24:53 --> 00:24:59
you can have the computer grinding for

00:24:55 --> 00:25:02
you what is the value of your time as

00:24:58 --> 00:25:04
you are not driving right so do a quick

00:25:01 --> 00:25:06
calculations again you know total number

00:25:03 --> 00:25:10
of hours that Americans spend behind the

00:25:05 --> 00:25:14
wheel median wage or in a value of time

00:25:09 --> 00:25:15
what you get is you know what I get is

00:25:13 --> 00:25:18
that you know the net present value of

00:25:14 --> 00:25:21
the drivers time over the next 10 years

00:25:17 --> 00:25:24
is about twenty to twenty thousand

00:25:20 --> 00:25:28
ollars okay so then you know a rational

00:25:23 --> 00:25:30
buyer will not pay more than that you

00:25:27 --> 00:25:32
know to buy this autonomy package right

00:25:29 --> 00:25:33
so now you're constrained by twenty

00:25:31 --> 00:25:35
thousand dollars okay

00:25:32 --> 00:25:37
or actually if you want to make a profit

00:25:34 --> 00:25:39
out of it you know your constraint your

00:25:36 --> 00:25:42
autonomy package cannot cost more than a

00:25:38 --> 00:25:44
few thousand dollars okay on the other

00:25:41 --> 00:25:46
hand if you're thinking of this as a

00:25:43 --> 00:25:49
service then what you are comparing to

00:25:45 --> 00:25:53
is the cost of providing the same

00:25:48 --> 00:25:55
service using a carbon-based life form

00:25:52 --> 00:25:58
like a human behind the wheel okay so

00:25:54 --> 00:26:00
now you want to provide 24/7 service you

00:25:57 --> 00:26:03
need to hire at least say three drivers

00:25:59 --> 00:26:06
per car okay then the cost is comparable

00:26:02 --> 00:26:08
of the order of hundred K a year okay so

00:26:05 --> 00:26:11
now I'm comparing the cost of my

00:26:07 --> 00:26:14
automation package to something that is

00:26:10 --> 00:26:18
going to cost me $100,000 a year over

00:26:13 --> 00:26:21
the life of the car okay so now the cost

00:26:17 --> 00:26:23
of the Atlanta computer or that fancy

00:26:20 --> 00:26:26
radar or something doesn't matter that

00:26:22 --> 00:26:29
much okay so I have much more freedom in

00:26:25 --> 00:26:32
buying the sensor that I need

00:26:28 --> 00:26:36
infrastructure for example people talk

00:26:31 --> 00:26:39
about maps HD maps right now again if I

00:26:35 --> 00:26:41
want to sell it as a product I need to

00:26:38 --> 00:26:42
enter have to sell it I want to sell it

00:26:40 --> 00:26:44
on a globe

00:26:41 --> 00:26:46
scale well global could mean older the

00:26:43 --> 00:26:49
United States for example or all of

00:26:45 --> 00:26:52
Europe then I need to have maps HD maps

00:26:48 --> 00:26:54
of the whole of Europe or the continent

00:26:51 --> 00:26:57
or any other stays or whatever I want to

00:26:53 --> 00:26:59
sell the you know the cars if I'm

00:26:56 --> 00:27:02
providing a service then I only need to

00:26:58 --> 00:27:05
map the area where I want to provide the

00:27:01 --> 00:27:07
service and by the way how do how does

00:27:04 --> 00:27:12
the complexity of the maps scale with

00:27:06 --> 00:27:15
e customer base that you're serving if

00:27:11 --> 00:27:18
you think of a uniform people density

00:27:14 --> 00:27:20
okay so then actually they land you

00:27:17 --> 00:27:22
think that the complexity and the cost

00:27:19 --> 00:27:26
of generating Maps scales with the

00:27:21 --> 00:27:28
length of the road network then the cost

00:27:25 --> 00:27:31
of the maps scales with the square root

00:27:27 --> 00:27:34
of my customer base meaning that will

00:27:30 --> 00:27:37
become negligible as I serve more people

00:27:33 --> 00:27:39
okay so HD maps yes it's a pain in the

00:27:36 --> 00:27:41
neck to collect them and to maintain

00:27:38 --> 00:27:43
them but it's much less of a pain in the

00:27:40 --> 00:27:46
neck that actually open it in the

00:27:42 --> 00:27:51
logistics of a fleet serving the

00:27:45 --> 00:27:54
population of a city okay and servicing

00:27:50 --> 00:27:56
and maintenance you know how would you

00:27:53 --> 00:27:58
calibrate your cameras and your sensors

00:27:55 --> 00:28:01
you know that's not something that you

00:27:57 --> 00:28:03
would do as a normal consumer right oh

00:28:00 --> 00:28:06
we are not used to that when I was

00:28:02 --> 00:28:07
little I was used to my father you know

00:28:05 --> 00:28:09
he was tinkering with the car all the

00:28:06 --> 00:28:12
time you know checking the you know the

00:28:08 --> 00:28:15
timing belt or changing the oil or you

00:28:11 --> 00:28:17
don't do any of that nowadays right so

00:28:14 --> 00:28:19
you just sit in the car switch it on if

00:28:16 --> 00:28:21
the yellow light you know Check Engine

00:28:18 --> 00:28:24
comes up into the dealership right

00:28:20 --> 00:28:26
hat's all you do now imagine that you

00:28:23 --> 00:28:27
know now you have if you want to use

00:28:25 --> 00:28:29
your autonomy package you had to

00:28:26 --> 00:28:31
calibrate the sensors every every time

00:28:28 --> 00:28:33
you go out or you know you have to

00:28:30 --> 00:28:34
upload you know like a new version of

00:28:32 --> 00:28:36
the drivers and these are that so you

00:28:33 --> 00:28:38
don't want to do that on the other hand

00:28:35 --> 00:28:40
in the service model I had the

00:28:37 --> 00:28:42
maintenance crew that can take care of

00:28:39 --> 00:28:43
it in a professional way okay

00:28:41 --> 00:28:46
so big difference between the two models

00:28:42 --> 00:28:49
o there are a couple of important

00:28:45 --> 00:28:52
akeaways right so one thing is that the

00:28:48 --> 00:28:53
cost of the autonomy package is not

00:28:51 --> 00:28:56
really an issue

00:28:52 --> 00:28:58
really the cheaper I can make it the

00:28:55 --> 00:29:01
better it is right but that is not

00:28:57 --> 00:29:04
really the main driver in particular if

00:29:00 --> 00:29:06
you need a lighter sensor for example to

00:29:03 --> 00:29:10
detect a big truck that is crossing your

00:29:05 --> 00:29:11
path by the ladder sensor okay so that

00:29:09 --> 00:29:14
is not making the difference and maybe

00:29:11 --> 00:29:19
you can save some lives okay any

00:29:13 --> 00:29:19
reference to other things is intentional

00:29:19 --> 00:29:26
the other thing is HD Maps the people

00:29:23 --> 00:29:30
worry about you know 12 you know very

00:29:25 --> 00:29:32
much today from my point of view HD Maps

00:29:29 --> 00:29:34
my expectation is that HD maps within a

00:29:31 --> 00:29:37
few years will be a dime a dozen

00:29:33 --> 00:29:39
okay what is complicated what is

00:29:36 --> 00:29:42
expensive now in generating all these HD

00:29:38 --> 00:29:45
maps the mapping companies need to put

00:29:41 --> 00:29:47
hese sensors on a car on you know and

00:29:44 --> 00:29:50
send these cars around now imagine that

00:29:46 --> 00:29:53
I have a fleet of 1,000 cars with these

00:29:49 --> 00:29:55
nsors on board and these cars are just

00:29:52 --> 00:29:58
driving around the city all the time the

00:29:54 --> 00:30:00
generating gigantic amount of data that

00:29:57 --> 00:30:03
I can just use to make and maintain my

00:29:59 --> 00:30:05
HD maps so I think that you know

00:30:02 --> 00:30:07
especially from the point of view of the

00:30:04 --> 00:30:10
operators the providers of these

00:30:06 --> 00:30:15
mobility services very easy to collect

00:30:10 --> 00:30:19
data to essentially make you know make

00:30:14 --> 00:30:21
and maintain their own Maps okay so if

00:30:18 --> 00:30:23
you need HD maps that's fine because as

00:30:20 --> 00:30:25
oon as you start offering this service

00:30:22 --> 00:30:27
you will be able to collect all the data

00:30:24 --> 00:30:30
you need to generate this a generate and

00:30:26 --> 00:30:32
maintain these maps oh by the way this

00:30:29 --> 00:30:36
showing an animation showing you know

00:30:31 --> 00:30:39
like a simulation of a fleet of I think

00:30:35 --> 00:30:41
it's a couple of hundred vehicles in

00:30:38 --> 00:30:44
Zurich in Switzerland right so that's

00:30:40 --> 00:30:47
where I was based until a few days ago

00:30:43 --> 00:30:48
and as you see in essentially you have

00:30:46 --> 00:30:50
hicles that going through

00:30:47 --> 00:30:54
go through most of the city you know

00:30:49 --> 00:30:57
every few hours okay I think that for

00:30:53 --> 00:30:59
example the uber fleet goes through 95

00:30:56 --> 00:31:01
percent of Manhattan every two hours or

00:30:58 --> 00:31:01
so

00:31:01 --> 00:31:09
cos advantages you know of course you

00:31:05 --> 00:31:14
know the you know most of the cost of

00:31:08 --> 00:31:16
you know taxi services nowadays is is

00:31:13 --> 00:31:18
the driver you know it's about half of

00:31:15 --> 00:31:19
course you remove the driver from the

00:31:17 --> 00:31:21
picture you don't have to pay them of

00:31:18 --> 00:31:23
course the automation costs you a little

00:31:20 --> 00:31:25
bit more servicing cost you a little bit

00:31:22 --> 00:31:27
more but you see that you know you still

00:31:24 --> 00:31:31
have you know you you know you can get

00:31:26 --> 00:31:33
like a really significant increase in

00:31:30 --> 00:31:36
the margin right meaning that you can

00:31:32 --> 00:31:38
pass some of those you know savings to

00:31:35 --> 00:31:42
customers right but also you can make a

00:31:37 --> 00:31:45
very strong business case however this

00:31:41 --> 00:31:50
also misleading now if you think of

00:31:44 --> 00:31:52
it okay so typically what the reaction

00:31:49 --> 00:31:55
that you get is the following

00:31:51 --> 00:31:58
oh my goodness now you make this thing

00:31:54 --> 00:32:02
and then all taxi drivers all truck

00:31:57 --> 00:32:06
drivers would be out of a job okay

00:32:01 --> 00:32:09
and in fact one day I was summoned by

00:32:05 --> 00:32:10
the Singapore Ministry of Manpower okay

00:32:08 --> 00:32:12
and I was terrified

00:32:09 --> 00:32:13
oh my goodness they're gonna shut me

00:32:11 --> 00:32:15
down because they're afraid that that

00:32:12 --> 00:32:18
will put all of their taxi drivers on a

00:32:14 --> 00:32:24
State on a street in the sense of being

00:32:17 --> 00:32:24
unemployed turns out it was the opposite

00:32:24 --> 00:32:30
what most people do not realize is that

00:32:27 --> 00:32:35
actually mobility services worldwide are

00:32:29 --> 00:32:37
actually meant power-limited okay in

00:32:34 --> 00:32:40
Singapore they would like to buy more

00:32:36 --> 00:32:42
buses but they don't have enough people

00:32:39 --> 00:32:47
who are able and willing to ride the

00:32:41 --> 00:32:50
buses okay this is true pretty much the

00:32:46 --> 00:32:51
same to for tracking same for Tarsus now

00:32:49 --> 00:32:53
this is another back-of-the-envelope

00:32:50 --> 00:32:58
calculation that you can do on your own

00:32:52 --> 00:33:00
ow imagine so as we know you know Ebers

00:32:57 --> 00:33:03
be widely successful you know very high

00:32:59 --> 00:33:05
valuation a lot of this valuation is

00:33:02 --> 00:33:07
predicated on the fact that everybody in

00:33:04 --> 00:33:10
the world will eventually use uber right

00:33:06 --> 00:33:12
or something similar now something that

00:33:09 --> 00:33:15
people don't think about is the

00:33:11 --> 00:33:15
following now if everybody in the world

00:33:14 --> 00:33:19
you

00:33:14 --> 00:33:21
ber for their mobility means how many

00:33:18 --> 00:33:24
people in the world need to be drivers

00:33:20 --> 00:33:26
for uber do the calculation what you see

00:33:23 --> 00:33:29
is that one person out of seven must

00:33:25 --> 00:33:32
drive for uber if uber is surveying the

00:33:28 --> 00:33:36
whole world do you see that happening no

00:33:31 --> 00:33:41
way right so people still need to be you

00:33:35 --> 00:33:43
know teachers doctors you know policemen

00:33:40 --> 00:33:45
firemen you know or you know some people

00:33:42 --> 00:33:49
need to be kids you know so that is

00:33:44 --> 00:33:51
omething this cannot happen how are we

00:33:48 --> 00:33:54
facing these paradox in a sense right so

00:33:50 --> 00:33:56
you know today what you have is people

00:33:53 --> 00:33:59
who drive around but what is happening

00:33:55 --> 00:34:03
today is that we are all doubling up as

00:33:58 --> 00:34:06
drivers for ourselves and in fact we do

00:34:02 --> 00:34:08
spend about one-seventh one-eighth of

00:34:05 --> 00:34:13
our productive day behind the wheel

00:34:07 --> 00:34:15
very often ok so you know for me you

00:34:12 --> 00:34:17
know did the big the big change is will

00:34:14 --> 00:34:21
be more on the supply of mobility rather

00:34:16 --> 00:34:23
than on job loss I mean of course if you

00:34:20 --> 00:34:25
increase supply of mobility you know the

00:34:22 --> 00:34:27
cost of mobility will have to you

00:34:24 --> 00:34:29
know we will you know probably go down

00:34:26 --> 00:34:33
wages for drivers will go down right so

00:34:28 --> 00:34:35
that is that is a that is a that is an

00:34:32 --> 00:34:38
issue but you know maybe other you know

00:34:34 --> 00:34:39
baby balance by like a added value and

00:34:37 --> 00:34:43
service or other things that you can

00:34:38 --> 00:34:44
imagine another thing about truck

00:34:42 --> 00:34:52
drivers you know something that they

00:34:43 --> 00:34:54
recently learned 25 percent of all job

00:34:51 --> 00:34:58
related deaths in the u.s. are actually

00:34:53 --> 00:35:00
by trucks drivers ok is the most the

00:34:57 --> 00:35:05
single most dangerous industry that you

00:34:59 --> 00:35:07
can be in so maybe if you can take some

00:35:04 --> 00:35:10
of those people out of those trucks and

00:35:06 --> 00:35:12
maybe supervise remotely control a truck

00:35:09 --> 00:35:13
sitting in their office instead of

00:35:11 --> 00:35:16
sitting in the truck you know that that

00:35:12 --> 00:35:19
may be actually benefit to them back to

00:35:15 --> 00:35:20
the question of when we lot on most

00:35:18 --> 00:35:22
vehicles arrive and you know in a sense

00:35:19 --> 00:35:25
this is what you know what our

00:35:21 --> 00:35:27
prediction our vision is right so what

00:35:24 --> 00:35:27
we will see is that what we think is

00:35:26 --> 00:35:31
that

00:35:26 --> 00:35:34
you have a fairly rapid adoption of

00:35:30 --> 00:35:37
self-driving vehicles in these mobility

00:35:33 --> 00:35:40
as a service model okay as a fleet of

00:35:36 --> 00:35:42
shared autonomous vehicles that people

00:35:39 --> 00:35:45
can use you know to go from point to

00:35:41 --> 00:35:48
point right rather than all of course

00:35:44 --> 00:35:50
ventually you know people will be able

00:35:47 --> 00:35:52
to buy these cars and maybe own them if

00:35:49 --> 00:35:55
they really want but you know that is

00:35:51 --> 00:35:57
omething that is much later in time for

00:35:54 --> 00:36:00
a number of reasons some which I

00:35:56 --> 00:36:02
discussed okay so this is you know what

00:35:59 --> 00:36:09
we expect in terms of the timeline for

00:36:01 --> 00:36:13
this now what is the state of the art

00:36:08 --> 00:36:17
for autonomous technology today you do

00:36:12 --> 00:36:18
see a lot of demos for from a number of

00:36:16 --> 00:36:23
companies you know doing a number of

00:36:17 --> 00:36:25
things right but but a lot of the things

00:36:22 --> 00:36:28
that you see are not too much different

00:36:24 --> 00:36:30
from this video I don't know if any of

00:36:27 --> 00:36:34
you recognizes this video but you know

00:36:29 --> 00:36:38
look at the cars this was actually done

00:36:33 --> 00:36:45
by LSD commands in the late 90s in

00:36:37 --> 00:36:49
Germany okay no fancy GPUs no it was

00:36:44 --> 00:36:50
just a cameras and some you know basic

00:36:48 --> 00:36:52
omputer vision algorithms but

00:36:49 --> 00:36:55
essentially he was able to drive for

00:36:51 --> 00:37:00
hundreds of miles on the German highways

00:36:54 --> 00:37:02
okay if you're not showing

00:36:59 --> 00:37:04
something that goes beyond that you have

00:37:01 --> 00:37:08
not made any progress you know over then

00:37:03 --> 00:37:11
over the past 20 years okay yeah you're

00:37:07 --> 00:37:12
using fancy deep learning and GPUs and

00:37:10 --> 00:37:14
things nowadays but you're doing what

00:37:11 --> 00:37:19
people were doing 20 years ago you know

00:37:14 --> 00:37:21
okay so you see arena clearly there's a

00:37:18 --> 00:37:24
lot of hype in these things but you know

00:37:20 --> 00:37:25
if you see something like that I don't

00:37:23 --> 00:37:27
hink it's very impressive

00:37:24 --> 00:37:29
okay people people you know knew how to

00:37:26 --> 00:37:32
do that for for a very long time

00:37:28 --> 00:37:34
something that I find a little bit I may

00:37:31 --> 00:37:36
be biased clearly right but this is

00:37:33 --> 00:37:37
omething that I find a little bit more

00:37:35 --> 00:37:40
xciting this is actually footage from

00:37:36 --> 00:37:43
you know our daily drives in Singapore

00:37:39 --> 00:37:44
okay this is four times in real time we

00:37:42 --> 00:37:49
don't drive that fast

00:37:43 --> 00:37:51
okay but essentially what we're doing in

00:37:48 --> 00:37:53
Singapore we are driving you know in you

00:37:50 --> 00:37:58
know public roads

00:37:52 --> 00:38:00
normal traffic what you will see is not

00:37:57 --> 00:38:02
so but you know do we have you know

00:37:59 --> 00:38:06
construction zones intersections traffic

00:38:01 --> 00:38:10
you know you know of both sides we will

00:38:05 --> 00:38:15
get to a pretty interesting intersection

00:38:09 --> 00:38:20
has a red light will turn to green in a

00:38:14 --> 00:38:21
second human mind in Singapore they

00:38:19 --> 00:38:23
drive on the left right so making the

00:38:20 --> 00:38:26
right turn is what is hard because you

00:38:22 --> 00:38:28
had to cross traffic right and here you

00:38:25 --> 00:38:30
have in a lot of traffic and you know

00:38:27 --> 00:38:32
the car is making the right decision in

00:38:29 --> 00:38:35
all of these without any human

00:38:31 --> 00:38:37
intervention right so I think that in

00:38:34 --> 00:38:40
this day and age if you're not showing

00:38:36 --> 00:38:43
the capability of driving in traffic in

00:38:39 --> 00:38:45
an urban situation like that you're not

00:38:42 --> 00:38:49
really showing any advance over what

00:38:44 --> 00:38:52
people were able to do 20 years ago okay

00:38:48 --> 00:38:54
and you know I mean as you can see if I

00:38:51 --> 00:38:57
saw the intercessions other cars

00:38:53 --> 00:38:59
pedestrians you know all kind of like a

00:38:56 --> 00:39:01
crazy interactions you know you know the

00:38:58 --> 00:39:03
cars park in the middle of the street

00:39:00 --> 00:39:04
hat you had to avoid go to the other

00:39:02 --> 00:39:06
lane you know things like that okay so

00:39:03 --> 00:39:08
this this is what you had to do every

00:39:05 --> 00:39:11
day and you know this is what we are

00:39:07 --> 00:39:13
doing every day in Singapore we are

00:39:10 --> 00:39:16
doing every day here in the c4

00:39:12 --> 00:39:18
if you're aware of botany we are driving

00:39:15 --> 00:39:20
you know cars we are allowed by the city

00:39:17 --> 00:39:27
of Boston to drive our cars autonomously

00:39:19 --> 00:39:28
in the Seaport area so what are the

00:39:26 --> 00:39:34
technical challenges okay so actually

00:39:27 --> 00:39:37
this is a slide that I did I'm fairly

00:39:33 --> 00:39:41
reusing from a talk that I'm not chakra

00:39:36 --> 00:39:43
the founder and CEO of mobile I gave

00:39:40 --> 00:39:46
here at MIT a few months ago okay so

00:39:42 --> 00:39:49
this is what he said okay so it's not

00:39:45 --> 00:39:51
what I say what he says is that the big

00:39:48 --> 00:39:55
challenges are sensing you know

00:39:50 --> 00:39:57
perception it's mapping and then is what

00:39:54 --> 00:39:59
he called driving policy right that I

00:39:56 --> 00:40:04
will call more like a decision-making

00:39:58 --> 00:40:07
okay now what he said is that sensing

00:40:03 --> 00:40:09
perception is a challenge but is a

00:40:06 --> 00:40:11
challenge we are aware of and then we

00:40:08 --> 00:40:13
are making rapid progress on getting

00:40:10 --> 00:40:18
better and better sensing perception

00:40:12 --> 00:40:20
algorithms okay second it's HD maps what

00:40:17 --> 00:40:22
he said is that it was a huge logistical

00:40:19 --> 00:40:24
nightmare so he didn't want to deal with

00:40:21 --> 00:40:27
at you know like mobile I tries to

00:40:23 --> 00:40:29
avoid that from my point of view as I

00:40:26 --> 00:40:32
said you know for me it's the maps it is

00:40:28 --> 00:40:35
a replay in the neck to get those maps

00:40:31 --> 00:40:37
but in a few years

00:40:34 --> 00:40:38
maps will be a dime a dozen okay so

00:40:36 --> 00:40:41
we'll get all the mapping data that we

00:40:37 --> 00:40:42
want and we need so the big problem is

00:40:40 --> 00:40:45
during policy

00:40:41 --> 00:40:47
okay the remaining problem is drawn in

00:40:44 --> 00:40:49
policies so how do you do it not and you

00:40:46 --> 00:40:51
know this is a typical example of things

00:40:48 --> 00:40:53
that we encounter in you know in any

00:40:50 --> 00:40:56
color urban driving situation so you

00:40:52 --> 00:40:59
will see a video so this is a case where

00:40:55 --> 00:41:01
we are at the traffic light we are

00:40:58 --> 00:41:03
stopping the traffic you know the light

00:41:00 --> 00:41:06
urns green we are making the turn this

00:41:02 --> 00:41:08
a pedestrian crossing the street wait

00:41:05 --> 00:41:10
for the press tree and go through it and

00:41:07 --> 00:41:12
then we see that there is a truck that

00:41:09 --> 00:41:14
is part in the middle of our lane so we

00:41:11 --> 00:41:16
need to go to the other lane which is in

00:41:13 --> 00:41:19
the opposite direction there is a model

00:41:15 --> 00:41:21
excuse me a motorcycle coming so we had

00:41:18 --> 00:41:24
to handle all that kind of situation

00:41:20 --> 00:41:26
right so how do you write your software

00:41:23 --> 00:41:28
in such a way that your car

00:41:25 --> 00:41:35
is able to deal with this kind of

00:41:27 --> 00:41:38
complicated situation by itself okay and

00:41:34 --> 00:41:41
my point is that you know this is not

00:41:37 --> 00:41:44
really about negotiation is not about

00:41:40 --> 00:41:47
policy why do you have rules of the road

00:41:43 --> 00:41:49
my claim I have not proved it

00:41:46 --> 00:41:50
mathematically yet but my claim is the

00:41:48 --> 00:41:52
following

00:41:49 --> 00:41:54
the touching the rules of the road were

00:41:51 --> 00:41:56
introduced exactly to avoid the need for

00:41:53 --> 00:41:59
negotiation

00:41:55 --> 00:42:01
when you drive okay when you're walking

00:41:58 --> 00:42:03
as a person you just walking down the

00:42:00 --> 00:42:04
hallway you know walking down the

00:42:02 --> 00:42:05
infinite corridor and there is a person

00:42:03 --> 00:42:07
come in the other direction

00:42:04 --> 00:42:09
there's always that awkward moment right

00:42:06 --> 00:42:09
away you're trying to linger I go left

00:42:08 --> 00:42:12
I'll go right

00:42:08 --> 00:42:14
with cause you you don't do that

00:42:11 --> 00:42:17
right so in cars the side everybody go

00:42:13 --> 00:42:19
right or in other places everybody go

00:42:16 --> 00:42:23
left period and you don't negotiate that

00:42:18 --> 00:42:25
okay you get to an intersection the the

00:42:22 --> 00:42:27
light is red you stop you know

00:42:24 --> 00:42:29
saying I'm putting I'm really in a rush

00:42:26 --> 00:42:31
you know do you mind if I go no you

00:42:28 --> 00:42:34
don't do that right so it's red and you

00:42:30 --> 00:42:35
stop okay so the rules of the road have

00:42:33 --> 00:42:40
been invented by humans in order to

00:42:34 --> 00:42:41
minimize the amount of negotiation and

00:42:39 --> 00:42:43
you know and you know in particular okay

00:42:40 --> 00:42:45
so this is a slightly I mean this is

00:42:42 --> 00:42:48
actually very old video but I kind of

00:42:44 --> 00:42:50
like it so now our car is a little bit

00:42:47 --> 00:42:52
more aggressive but you know what you

00:42:49 --> 00:42:54
see here is this case you know this is

00:42:51 --> 00:42:56
how the car behaved in that particular

00:42:53 --> 00:42:59
situation so you see it's raining red

00:42:55 --> 00:43:01
light turns green there's a pedestrian

00:42:58 --> 00:43:03
crossing our path

00:43:00 --> 00:43:05
so we heel to the pedestrian you see

00:43:02 --> 00:43:07
that there is a you will see that there

00:43:04 --> 00:43:09
is a truck that is parked on the on the

00:43:06 --> 00:43:10
left lane in the middle of the lane so

00:43:08 --> 00:43:14
we had to go around it but this is a

00:43:09 --> 00:43:16
motorcycle that is approaching so we had

00:43:13 --> 00:43:19
to be careful in going to the other lane

00:43:15 --> 00:43:21
okay so we squeezed through the through

00:43:18 --> 00:43:22
the motorcycle you know we try to go

00:43:20 --> 00:43:27
very slowly next to squishy targets

00:43:21 --> 00:43:29
right but then as soon as we pass the

00:43:26 --> 00:43:30
truck the truck driver decides to get

00:43:28 --> 00:43:33
moving okay

00:43:29 --> 00:43:35
so then what we do is we wait for the

00:43:32 --> 00:43:38
truck to get you know to get going and

00:43:34 --> 00:43:40
then go back to our lane now imagine

00:43:37 --> 00:43:42
writing a script you know

00:43:39 --> 00:43:44
or you know if then else if there is a

00:43:41 --> 00:43:46
track but the truck is moving and then

00:43:43 --> 00:43:48
do this and this the network so you know

00:43:45 --> 00:43:51
hat to do that right so how do you

00:43:47 --> 00:43:52
handle this kind of situations okay so

00:43:50 --> 00:43:55
the industry standard

00:43:51 --> 00:43:58
you know this approach to this was - and

00:43:54 --> 00:44:00
by the way this is what we did at the

00:43:57 --> 00:44:03
time of the dark urban challenge okay so

00:43:59 --> 00:44:05
we had a lot of if-then-else statements

00:44:02 --> 00:44:08
or you know finesse test machines or

00:44:04 --> 00:44:10
some logic that was encoded by you know

00:44:07 --> 00:44:15
some furnaces machine kind of kind of

00:44:09 --> 00:44:18
things the problem with that is it's

00:44:14 --> 00:44:20
very hard to come up with this logic and

00:44:17 --> 00:44:24
is essentially impossible to debug it

00:44:19 --> 00:44:28
and verify it right so I spent many

00:44:23 --> 00:44:31
miserable months sitting in the naval

00:44:27 --> 00:44:34
airbase in Weymouth right so here in a

00:44:30 --> 00:44:36
rental car just plain interference with

00:44:33 --> 00:44:39
our autonomous car trying to adjust all

00:44:35 --> 00:44:41
these logic and parameters and things so

00:44:38 --> 00:44:44
I vowed that I would never do it again

00:44:40 --> 00:44:46
I was just miserable experience I'm

00:44:43 --> 00:44:48
happy to say that actually we did come

00:44:45 --> 00:44:50
up with a much better way of doing it

00:44:47 --> 00:44:52
and you know by the way this is a video

00:44:49 --> 00:44:55
from the Caltech team at the dark urban

00:44:51 --> 00:44:57
challenge as you can see they're trying

00:44:54 --> 00:44:59
to go to an intersection they decide to

00:44:56 --> 00:45:03
go then for some reason they decide not

00:44:58 --> 00:45:05
o back up out of the intersection so

00:45:02 --> 00:45:08
the director of DARPA you know Tony

00:45:04 --> 00:45:10
Taylor at the time he was there he went

00:45:07 --> 00:45:13
like that so they were out of the race

00:45:09 --> 00:45:15
okay so as soon as CCO saw that what

00:45:12 --> 00:45:18
happened here there was essentially a

00:45:14 --> 00:45:21
bug in the logic Caltech you know very a

00:45:18 --> 00:45:22
team of very smart people very capable

00:45:20 --> 00:45:24
dedicated people work on these for

00:45:21 --> 00:45:26
months they didn't catch this Bank this

00:45:23 --> 00:45:29
Bank they were out of the race right so

00:45:25 --> 00:45:32
it's very easy to make mistakes and it's

00:45:28 --> 00:45:33
very hard to find those bugs okay so as

00:45:31 --> 00:45:36
a reaction to that you know there is

00:45:32 --> 00:45:36
this new

00:45:36 --> 00:45:45
is it possible to cut the sound thank

00:45:42 --> 00:45:48
you

00:45:44 --> 00:45:52
so now what people what you hear people

00:45:47 --> 00:45:55
saying is well there are too many rules

00:45:51 --> 00:46:00
of the road it's impossible to code all

00:45:54 --> 00:46:03
of them correctly so let's not do that

00:45:59 --> 00:46:05
just feed the data you know feed the car

00:46:02 --> 00:46:10
a lot of data and let the car learn by

00:46:04 --> 00:46:12
itself how to behave okay

00:46:09 --> 00:46:14
and this is what you see you know

00:46:11 --> 00:46:16
there are a number of circuits

00:46:13 --> 00:46:18
and other efforts that are trying to use

00:46:15 --> 00:46:21
all these you know deep learning or

00:46:17 --> 00:46:25
learning approaches to to get to the

00:46:20 --> 00:46:31
fore end to end driving of of cars okay

00:46:24 --> 00:46:33
so you see a video from Nvidia okay

00:46:30 --> 00:46:36
understand this is a course on deep

00:46:32 --> 00:46:38
learning for cars right but so so I

00:46:35 --> 00:46:41
don't want to sound too negative on the

00:46:37 --> 00:46:44
other hand I will try to be honest in

00:46:40 --> 00:46:48
what I think ok so you know there are a

00:46:43 --> 00:46:50
number of problems right so that's what

00:46:47 --> 00:46:52
is happened to us right so one of our

00:46:49 --> 00:46:54
developers you know you know super

00:46:51 --> 00:46:58
bright lady from you know you know

00:46:53 --> 00:47:01
Caltech and you know the first version

00:46:57 --> 00:47:04
of the code for dealing with traffic

00:47:00 --> 00:47:06
lights essentially the reaction that you

00:47:03 --> 00:47:08
know that that they had for for the

00:47:05 --> 00:47:12
yellow light was if you see a yellow

00:47:07 --> 00:47:16
light speed up what the heck oh this is

00:47:11 --> 00:47:19
what my brother does okay so there is

00:47:15 --> 00:47:21
always the danger that you learn the

00:47:18 --> 00:47:23
wrong thing okay did the wrong behavior

00:47:20 --> 00:47:27
in a sense of course there are some

00:47:22 --> 00:47:29
situations in which accelerating when

00:47:26 --> 00:47:31
you see a yellow light is actually the

00:47:28 --> 00:47:33
right response but it is not always the

00:47:30 --> 00:47:35
case right so there are some other

00:47:32 --> 00:47:38
features of the situation that you need

00:47:34 --> 00:47:42
to examine right also the other thing is

00:47:37 --> 00:47:45
as a cartoon right so you know you want

00:47:41 --> 00:47:47
o be able to explain why the car did

00:47:44 --> 00:47:49
something and I would say that more than

00:47:46 --> 00:47:51
explaining because now you also see

00:47:48 --> 00:47:54
articles in which people say Oh

00:47:50 --> 00:47:56
a fun way of explaining why they do not

00:47:53 --> 00:47:58
for him to carve decided to do

00:47:55 --> 00:47:59
something right I want to show you is

00:47:57 --> 00:48:03
ome okay so these are the noodles that

00:47:58 --> 00:48:06
were activated just saying that you know

00:48:02 --> 00:48:09
hat if I do an F in a fast MRI of the

00:48:05 --> 00:48:11
brain and they see what neurons what

00:48:08 --> 00:48:13
areas of the brain are activated when I

00:48:10 --> 00:48:17
watch a movie then I know how the brain

00:48:12 --> 00:48:20
works no I have no idea okay the point

00:48:16 --> 00:48:22
is that yes you want to trace the reason

00:48:19 --> 00:48:24
the cause for why they can't behave in a

00:48:21 --> 00:48:27
certain way but you also want to be able

00:48:23 --> 00:48:29
to revert the cost right so you want

00:48:26 --> 00:48:31
hat information would be actionable in

00:48:28 --> 00:48:34
some sense right so you want you want to

00:48:30 --> 00:48:35
know that okay this happened because of

00:48:33 --> 00:48:37
this reason and this is how I fix it

00:48:34 --> 00:48:40
okay and the other thing that you know

00:48:36 --> 00:48:43
society that is hard to do with purely

00:48:39 --> 00:48:46
based learning algorithms on the other

00:48:42 --> 00:48:53
hand you can let me actually skip that

00:48:45 --> 00:48:59
in the interest of time okay the reality

00:48:52 --> 00:49:02
is the following that it is simply not

00:48:58 --> 00:49:05
rue that there are too many rules of

00:49:01 --> 00:49:08
the road in fact any 16 year old in the

00:49:04 --> 00:49:12
states can go to the DMV get the booklet

00:49:07 --> 00:49:15
study the booklet do a written test and

00:49:11 --> 00:49:17
be given a learner's permit okay and

00:49:14 --> 00:49:20
actually this is what we require of

00:49:16 --> 00:49:24
every single licensed driver in the

00:49:19 --> 00:49:26
United States okay we don't say just

00:49:23 --> 00:49:28
drive with your dad or mom for a few

00:49:25 --> 00:49:30
thousand miles and that will give you

00:49:27 --> 00:49:33
the license no we ask them you know show

00:49:29 --> 00:49:38
me that you study the rules and you

00:49:32 --> 00:49:41
nderstand the rules okay so how many

00:49:37 --> 00:49:44
are the rules of the road actually went

00:49:40 --> 00:49:46
o an exercise of counting okay and what

00:49:43 --> 00:49:49
hey did I can do like a cluster them so

00:49:45 --> 00:49:53
essentially you have rules on who can

00:49:48 --> 00:49:58
drive when and where what can be driven

00:49:52 --> 00:49:59
whenever you know at what speed in what

00:49:57 --> 00:50:03
direction

00:49:58 --> 00:50:05
who yields to whom right how you use

00:50:02 --> 00:50:08
your signals active signalling how do

00:50:04 --> 00:50:10
you interpret the signals that you see

00:50:07 --> 00:50:13
on the road right and where you can park

00:50:09 --> 00:50:15
away you can stop that's essentially it

00:50:12 --> 00:50:17
you know this is this these are all the

00:50:14 --> 00:50:21
roads okay so not that many it's

00:50:16 --> 00:50:25
collected twelve categories what is true

00:50:20 --> 00:50:29
is that the number of possible

00:50:24 --> 00:50:31
combinations of rules and the instance

00:50:28 --> 00:50:34
instantiation of the rules given the

00:50:30 --> 00:50:37
context of you know the scenario where

00:50:33 --> 00:50:39
other actors are pedestrians are and

00:50:36 --> 00:50:42
where other cars are that is a humongous

00:50:38 --> 00:50:45
number okay

00:50:41 --> 00:50:48
so you don't want to code you don't want

00:50:44 --> 00:50:51
o be to essentially any generative

00:50:47 --> 00:50:54
model that gives you what is the right

00:50:50 --> 00:50:57
response to all possible combinations of

00:50:53 --> 00:50:59
rules and instantiations of actors that

00:50:56 --> 00:51:01
is something that is just coming up

00:50:58 --> 00:51:04
totally you know intractable you just

00:51:00 --> 00:51:07
cannot do that but the point is that not

00:51:03 --> 00:51:09
only it is hard to code the good

00:51:06 --> 00:51:12
behavior what to do in every one of

00:51:08 --> 00:51:15
these situations I claim that is also

00:51:11 --> 00:51:17
hard to learn the good behavior because

00:51:14 --> 00:51:19
now you have you need to have enough

00:51:16 --> 00:51:23
training data for every possible

00:51:18 --> 00:51:26
combination of rules and instantiations

00:51:22 --> 00:51:32
good luck with that

00:51:25 --> 00:51:35
okay on the other hand it is very easy

00:51:31 --> 00:51:37
to assess what is a good behavior and

00:51:34 --> 00:51:40
that's why I was showing this slice on

00:51:36 --> 00:51:44
p-hardness right so what is the problem

00:51:39 --> 00:51:48
that is np-hard the problem is np-hard

00:51:43 --> 00:51:52
where if you have a non deterministic

00:51:47 --> 00:51:56
system that is generating a a candidate

00:51:51 --> 00:51:58
solution then it is very easy to check

00:51:55 --> 00:52:00
whether or not that candidate is

00:51:57 --> 00:52:00
actually a solution of your problem and

00:51:59 --> 00:52:05
that's something that you do in

00:51:59 --> 00:52:07
polynomial time okay so in a sense what

00:52:04 --> 00:52:07
I claim is that if you have an

00:52:06 --> 00:52:10
engine

00:52:06 --> 00:52:15
that is able to generate a very large

00:52:09 --> 00:52:17
number of candidates and all you do is

00:52:14 --> 00:52:20
checking and then you know what you do

00:52:16 --> 00:52:22
is checking whether or not each one of

00:52:19 --> 00:52:26
those candidates is good with respect to

00:52:21 --> 00:52:28
the rules then that's all you need and

00:52:25 --> 00:52:30
turns out that you know the algorithms

00:52:27 --> 00:52:31
that I worked on during my you know

00:52:29 --> 00:52:33
academic career

00:52:30 --> 00:52:36
where exactly generating that very large

00:52:32 --> 00:52:39
number in our TRC star these are

00:52:35 --> 00:52:41
algorithms that work by generating a

00:52:38 --> 00:52:43
very large graph exploring all potential

00:52:40 --> 00:52:45
trajectories reasonable trajectories

00:52:42 --> 00:52:49
that a robot a system that can take and

00:52:44 --> 00:52:52
then what you do is you check them for

00:52:48 --> 00:52:55
you know whether they satisfy the rules

00:52:51 --> 00:52:58
or not you see that is very different

00:52:54 --> 00:53:00
from giving the rules generates

00:52:57 --> 00:53:05
omething that satisfies everything

00:52:59 --> 00:53:07
rather than given a candidate check

00:53:04 --> 00:53:10
whether or not this candidate satisfies

00:53:06 --> 00:53:13
the rules the generating the rules the

00:53:09 --> 00:53:14
generating candidates given all the all

00:53:12 --> 00:53:18
the constraints is a combinatorial

00:53:13 --> 00:53:21
problem checking a single candidate for

00:53:17 --> 00:53:23
compliance with a number of rules is a

00:53:20 --> 00:53:25
linear operation in the number of rules

00:53:22 --> 00:53:27
o that's something that you can do very

00:53:24 --> 00:53:30
easily okay and then essentially what we

00:53:26 --> 00:53:32
have in our cars today we are using

00:53:29 --> 00:53:35
these formal methods okay so essentially

00:53:31 --> 00:53:37
we write down all the rules in a in a

00:53:34 --> 00:53:39
formal language you know so you know

00:53:36 --> 00:53:42
very precise you know like your syntax

00:53:38 --> 00:53:45
and then what you can do is you can

00:53:41 --> 00:53:47
verify whether your trajectories satisfy

00:53:44 --> 00:53:49
all these rules written in this language

00:53:46 --> 00:53:51
that is automatically that can be

00:53:48 --> 00:53:53
automatically translated into something

00:53:50 --> 00:53:55
look like a finite state machine by

00:53:52 --> 00:53:56
computer okay but there's not something

00:53:54 --> 00:53:59
that you do by hand it's something that

00:53:55 --> 00:54:01
is done automatically and then what

00:53:58 --> 00:54:03
happens is that what we have is we

00:54:00 --> 00:54:06
generate trajectories these trajectories

00:54:02 --> 00:54:08
are you know you can think of these as

00:54:05 --> 00:54:10
trajectories that now are not all the

00:54:07 --> 00:54:13
trajectories in the physical space and

00:54:09 --> 00:54:15
time but are also trajectories evolving

00:54:12 --> 00:54:17
in this logical space telling me whether

00:54:14 --> 00:54:20
or not and to what extent I am

00:54:16 --> 00:54:21
satisfying the rules okay and that's all

00:54:19 --> 00:54:25
there is

00:54:20 --> 00:54:28
okay so this is um you know for example

00:54:24 --> 00:54:30
regular little example so you know

00:54:27 --> 00:54:33
initially what we are doing is work so

00:54:29 --> 00:54:35
this was very early days on Deuteronomy

00:54:32 --> 00:54:38
where we're still working on a research

00:54:34 --> 00:54:40
project with industry with customers so

00:54:37 --> 00:54:43
ur customer in this case wanted us to

00:54:39 --> 00:54:45
do an automated parking application and

00:54:42 --> 00:54:48
then what you see on the left is our

00:54:44 --> 00:54:50
planner eager planet that is just trying

00:54:47 --> 00:54:52
to to park the car right avoiding

00:54:49 --> 00:54:54
hitting other cars but you see is kind

00:54:51 --> 00:54:57
of ignoring the fact that you have lanes

00:54:53 --> 00:54:58
and direction of travels right so you're

00:54:56 --> 00:55:01
putting the rules and what you see is

00:54:57 --> 00:55:02
what is on the on the right where now

00:55:00 --> 00:55:05
hat the car is doing is not only

00:55:01 --> 00:55:08
finding the trajectory to go park but it

00:55:04 --> 00:55:10
does so obeying all the rules that are

00:55:07 --> 00:55:14
imposed on that particular parking

00:55:09 --> 00:55:15
structure okay something that is very

00:55:13 --> 00:55:18
important and you know this is something

00:55:14 --> 00:55:22
that we as humans do every day is to

00:55:17 --> 00:55:26
deal with infeasibility okay so very

00:55:21 --> 00:55:27
often you're doing your planning you're

00:55:25 --> 00:55:30
trying to plan your trajectory you have

00:55:26 --> 00:55:31
a number of constraints and well sorry

00:55:29 --> 00:55:34
but turns out that there is no

00:55:30 --> 00:55:36
trajectory there's no possible behavior

00:55:33 --> 00:55:39
that you can do that will satisfy all

00:55:35 --> 00:55:43
the rules so what do you do the computer

00:55:38 --> 00:55:46
time sorry does not compute unfeasible

00:55:42 --> 00:55:48
still driving this car I need to do

00:55:45 --> 00:55:50
something right so you do need a way of

00:55:47 --> 00:55:54
dealing with infeasibility

00:55:49 --> 00:55:58
the way that we approach this problem is

00:55:53 --> 00:56:02
being having this idea of hierarchy of

00:55:57 --> 00:56:05
rules okay and my claim is that all

00:56:01 --> 00:56:06
bodies of rules generated by humans are

00:56:04 --> 00:56:08
actually organized hierarchically

00:56:05 --> 00:56:10
typical example is the Three Laws of

00:56:07 --> 00:56:13
Robotics by asana right so the first law

00:56:09 --> 00:56:17
of robotics is a robot will not harm a

00:56:12 --> 00:56:20
human right or cause a human to come to

00:56:16 --> 00:56:24
ur second law is a robot will obey a

00:56:19 --> 00:56:26
human orders by a human a human unless

00:56:23 --> 00:56:28
they violate the first law and the third

00:56:25 --> 00:56:32
law is a robot will try to preserve its

00:56:27 --> 00:56:33
own life or preserve itself unless it

00:56:31 --> 00:56:38
violates the first two laws right

00:56:32 --> 00:56:39
same thing in in when you drive right so

00:56:37 --> 00:56:40
there are some rules that are more

00:56:38 --> 00:56:42
important than others right so for

00:56:39 --> 00:56:46
example do not hit people do not hit

00:56:41 --> 00:56:49
other cars and then lower priority level

00:56:45 --> 00:56:50
is to be driving your lane the lower

00:56:48 --> 00:56:52
priority level is maybe maintaining the

00:56:49 --> 00:56:56
speeding or something like that okay and

00:56:51 --> 00:56:58
then what we do is come up with now we

00:56:55 --> 00:57:01
have this product graph of trajectories

00:56:57 --> 00:57:03
in the physical and logical space on top

00:57:00 --> 00:57:06
of that we can give them a cost right

00:57:02 --> 00:57:08
what we need is a essentially a total

00:57:05 --> 00:57:11
order what we use a lesser graphic or

00:57:07 --> 00:57:13
drink okay when we have violating an

00:57:10 --> 00:57:15
important rule even by a tiny amount is

00:57:12 --> 00:57:18
much worse than violating a less

00:57:14 --> 00:57:19
important rule by a large amount okay so

00:57:17 --> 00:57:21
that gives a total order structure for

00:57:18 --> 00:57:23
the cars and then essentially what we do

00:57:20 --> 00:57:26
is we solve a shortest path problem on

00:57:22 --> 00:57:29
this graph okay which is exactly what

00:57:25 --> 00:57:31
you do the robot is one on one when you

00:57:28 --> 00:57:35
try to do you know do any kind of motion

00:57:30 --> 00:57:37
planning okay and well you know this is

00:57:34 --> 00:57:39
in a collection of a few interesting

00:57:36 --> 00:57:41
things so here we need to go to the

00:57:38 --> 00:57:43
other Lane but you see that there is the

00:57:40 --> 00:57:45
other vehicle coming so technically we

00:57:42 --> 00:57:47
could not go to the other Lane but you

00:57:44 --> 00:57:49
see that you know as long as it is safe

00:57:46 --> 00:57:54
to do so the car will go into the other

00:57:48 --> 00:57:55
Lane okay you know and again you have

00:57:53 --> 00:57:57
like a lot of you know like a difficult

00:57:54 --> 00:57:59
situations that the car was able to

00:57:56 --> 00:58:01
handle by itself without any scripting

00:57:58 --> 00:58:03
or without any like a special

00:58:00 --> 00:58:10
instruction for that particular case

00:58:02 --> 00:58:15
okay so what is

00:58:09 --> 00:58:16
here the problem here is that okay so

00:58:14 --> 00:58:19
you can do all of this right and but

00:58:15 --> 00:58:21
hen you know assuming that everybody is

00:58:18 --> 00:58:23
running this minimum violation planning

00:58:20 --> 00:58:25
you know everything will be okay the

00:58:22 --> 00:58:29
problem is that humans introduce a lot

00:58:24 --> 00:58:32
of uncertainty in the whole thing okay

00:58:28 --> 00:58:34
now you can think of disease asking the

00:58:31 --> 00:58:36
question so when I was young in a if

00:58:33 --> 00:58:39
that is two years ago I thought that I

00:58:35 --> 00:58:41
take all the rules of the road and you

00:58:38 --> 00:58:42
convert them to this formal language you

00:58:40 --> 00:58:45
put them in your software and you're

00:58:41 --> 00:58:47
done and then and then you go and look

00:58:44 --> 00:58:47
at these rules of the road and then you

00:58:46 --> 00:58:50
see that they are a mess

00:58:47 --> 00:58:52
okay these rules are just not the sound

00:58:49 --> 00:58:54
theory in the sense that not complete do

00:58:51 --> 00:58:55
not cover every possible case and are

00:58:53 --> 00:58:57
not consistent you know they're kind of

00:58:54 --> 00:59:00
like tell you to do different things in

00:58:56 --> 00:59:01
different cases my my prefer my favorite

00:58:59 --> 00:59:04
rule is this one is actually called the

00:59:00 --> 00:59:07
fundamental norm in these with roots of

00:59:03 --> 00:59:09
the road look at that all road users

00:59:06 --> 00:59:11
must behave in such a way not to post an

00:59:08 --> 00:59:17
obstacle of danger to other road users

00:59:10 --> 00:59:20
that behave according to the rules do

00:59:16 --> 00:59:22
you see a problem there okay that

00:59:19 --> 00:59:23
doesn't mean that if I see somebody who

00:59:21 --> 00:59:25
is violating the rule I can just hit

00:59:22 --> 00:59:27
hem right so you can imagine that you

00:59:24 --> 00:59:30
have a fleet of vigilantes you know

00:59:26 --> 00:59:32
autonomous cars that just go around and

00:59:29 --> 00:59:36
if you run the red light I'm gonna kill

00:59:31 --> 00:59:38
you right I mean technically they you

00:59:35 --> 00:59:39
know the autonomous cars will be you

00:59:37 --> 00:59:42
know will be right right so the other

00:59:38 --> 00:59:44
guy would be you know they

00:59:41 --> 00:59:47
want to blame right well you know do we

00:59:43 --> 00:59:49
really want that probably not right in

00:59:46 --> 00:59:52
the fence of the Swiss they actually

00:59:48 --> 00:59:54
have you know that rule continuous a

00:59:51 --> 00:59:56
special care must be exerted in case do

00:59:53 --> 00:59:57
you have evidence that other people are

00:59:55 --> 00:59:59
not following the rules but still

00:59:56 --> 01:00:01
doesn't tell you what you're supposed to

00:59:58 --> 01:00:05
do when somebody else is violating the

01:00:00 --> 01:00:07
rule okay and you have totally problems

01:00:04 --> 01:00:08
right so probably you have heard you

01:00:06 --> 01:00:10
know you hear about all these trolley

01:00:07 --> 01:00:11
problems to no end right and most of

01:00:09 --> 01:00:13
these are fine

01:00:10 --> 01:00:15
you know I mean truly stupid you know in

01:00:12 --> 01:00:19
the sense is like a big waste of time in

01:00:14 --> 01:00:21
the sense that yeah sorry I think it's

01:00:18 --> 01:00:23
extremely unlikely that you will be

01:00:20 --> 01:00:24
given the choice of killing either

01:00:22 --> 01:00:27
Mother Teresa

01:00:23 --> 01:00:28
Hitler right so I mean for sure that

01:00:26 --> 01:00:30
will never happen right but you know

01:00:27 --> 01:00:35
anything remotely similar will never

01:00:29 --> 01:00:37
happen to you on the other hand there

01:00:34 --> 01:00:38
are versions of the trolley problem

01:00:36 --> 01:00:40
which are actually meaningful okay so

01:00:37 --> 01:00:41
this is one that you know my

01:00:39 --> 01:00:44
collaborator and their agency came up

01:00:40 --> 01:00:46
with okay look at this case so you're

01:00:43 --> 01:00:48
driving down the road and you see a

01:00:45 --> 01:00:53
pedestrian that is jaywalking in front

01:00:47 --> 01:00:57
of you okay if we stay the our current

01:00:52 --> 01:01:00
course we will kill the pedestrian

01:00:56 --> 01:01:02
before reading one okay but it's not our

01:00:59 --> 01:01:04
fault okay it's his fault panting Oh her

01:01:01 --> 01:01:07
his or her fault that they stepped in

01:01:03 --> 01:01:10
the road when they shouldn't have on the

01:01:06 --> 01:01:11
other hand what we could do is we can

01:01:09 --> 01:01:14
try to swerve right but then with some

01:01:10 --> 01:01:16
probability P we may kill another person

01:01:13 --> 01:01:18
who had nothing to do with this thing

01:01:15 --> 01:01:21
you know they were just walking around

01:01:17 --> 01:01:24
you know peacefully right so the reason

01:01:20 --> 01:01:27
why I like this is because this problem

01:01:23 --> 01:01:31
actually has clear solutions in there to

01:01:26 --> 01:01:33
extreme cases right so if P is one okay

01:01:30 --> 01:01:36
in the sense that if this word will kill

01:01:32 --> 01:01:39
somebody else then we clearly kill the

01:01:35 --> 01:01:41
guy who was jaywalking right if P is

01:01:38 --> 01:01:43
zero that is I'm sure that I'm not

01:01:40 --> 01:01:47
killing anybody if I swerve then clearly

01:01:42 --> 01:01:49
I will is worth what is the boundary so

01:01:46 --> 01:01:51
I know that the solution exists for P is

01:01:48 --> 01:01:53
equal zero and all the solution exists

01:01:50 --> 01:01:56
with P equal one by some continuity

01:01:52 --> 01:02:00
argument if you know I must have some

01:01:55 --> 01:02:05
value of P at which the solution changes

01:01:59 --> 01:02:09
what is that value nobody knows how do

01:02:04 --> 01:02:11
you evaluate that P nobody knows but you

01:02:08 --> 01:02:13
know these are the kind of question that

01:02:10 --> 01:02:16
we actually need to answer somehow so

01:02:12 --> 01:02:19
it's a more you know a little bit more

01:02:15 --> 01:02:21
sophisticated case now what we and you

01:02:19 --> 01:02:24
know this is what happens every day in

01:02:20 --> 01:02:26
our cars right so when the our computer

01:02:23 --> 01:02:28
vision system is telling me that there

01:02:25 --> 01:02:29
is a pedestrian in front of us it's not

01:02:27 --> 01:02:31
elling me that there is a pedestrian

01:02:28 --> 01:02:33
for sure right so it's telling me that I

01:02:30 --> 01:02:35
think that there is a pedestrian in

01:02:32 --> 01:02:37
front of us and you know I'm you know

01:02:34 --> 01:02:42
eighty percent confident

01:02:36 --> 01:02:45
you know some probability Q okay now a

01:02:41 --> 01:02:47
wall combination of probability on the

01:02:44 --> 01:02:49
pedestrian actually been there and my

01:02:46 --> 01:02:51
probability of killing somebody else

01:02:48 --> 01:02:53
would as well right so because if I is

01:02:50 --> 01:02:56
worth and killed somebody

01:02:52 --> 01:02:58
because just a ghost you know like a

01:02:55 --> 01:03:00
false positive he'll be in serious

01:02:57 --> 01:03:01
trouble right so how do we explain that

01:02:59 --> 01:03:02
well I thought there was someone in

01:03:00 --> 01:03:06
front of me was nobody there

01:03:01 --> 01:03:09
right so again you know you do have

01:03:05 --> 01:03:10
solutions for some extreme cases but

01:03:08 --> 01:03:13
hen you have this whole two-dimensional

01:03:09 --> 01:03:14
domain now which you had to you know

01:03:12 --> 01:03:17
there would be a boundary where do you

01:03:13 --> 01:03:19
put the boundary okay and this is some

01:03:16 --> 01:03:21
thing that somebody will need to

01:03:18 --> 01:03:23
answer okay

01:03:20 --> 01:03:25
I I don't think it should be me you know

01:03:22 --> 01:03:28
of course I can't come up with an answer

01:03:24 --> 01:03:29
when I write my code but I actually

01:03:27 --> 01:03:31
think it should be you right in the

01:03:28 --> 01:03:33
sense this should be the a community

01:03:30 --> 01:03:36
effort in which the community agrees on

01:03:32 --> 01:03:38
how the car should behave or you know in

01:03:35 --> 01:03:40
these kind of situations so let me

01:03:37 --> 01:03:42
conclude by saying you know when people

01:03:39 --> 01:03:43
ask me what do you think is the biggest

01:03:41 --> 01:03:46
challenge in autonomous vehicles and

01:03:42 --> 01:03:47
something that I've come to realize only

01:03:45 --> 01:03:49
recently is that I think that the

01:03:46 --> 01:03:52
biggest challenge in the development of

01:03:48 --> 01:03:55
autonomous vehicle technology is that we

01:03:51 --> 01:03:58
do not understand in a very precise way

01:03:54 --> 01:04:01
rigorous way how we want vehicles in

01:03:57 --> 01:04:04
general including human driven vehicles

01:04:00 --> 01:04:07
to behave okay a lot of these rules of

01:04:03 --> 01:04:10
the road are just like a giant pile of I

01:04:06 --> 01:04:12
wouldn't say garbage but almost you know

01:04:09 --> 01:04:16
it's a it's very uncertain language very

01:04:11 --> 01:04:18
ou know no rigorous laws rather rules

01:04:15 --> 01:04:22
for example a lot of the rules are

01:04:17 --> 01:04:26
predicated on a concept of right away

01:04:21 --> 01:04:28
ou know I looked everywhere there is

01:04:25 --> 01:04:31
not a single definition of what right

01:04:27 --> 01:04:33
away means in mathematical terms I know

01:04:30 --> 01:04:35
that he has something to do with

01:04:32 --> 01:04:39
distance as something to do the relative

01:04:34 --> 01:04:41
speed maybe with absolute speed but

01:04:38 --> 01:04:42
know what are the values I don't know

01:04:40 --> 01:04:45
hat are the numbers if I had to write a

01:04:41 --> 01:04:47
function so if you see this car

01:04:44 --> 01:04:48
approaching and this car is farther away

01:04:46 --> 01:04:51
than this distance and the relative

01:04:47 --> 01:04:53
speed is more than this then stop

01:04:50 --> 01:04:55
otherwise go there's nobody who is

01:04:52 --> 01:04:59
telling me what that relationship should

01:04:54 --> 01:05:01
be anything again what we need is we

01:04:58 --> 01:05:03
need to develop a sound theory for these

01:05:00 --> 01:05:06
rules of the road ok that cover

01:05:02 --> 01:05:08
precisely any kind of situation and

01:05:05 --> 01:05:10
tells me you know any kind situation

01:05:07 --> 01:05:13
what is the right behavior what is the

01:05:09 --> 01:05:17
wrong behavior or little bit more maybe

01:05:12 --> 01:05:19
what is if behavior hey if you have two

01:05:16 --> 01:05:21
behaviors which one is better okay I

01:05:18 --> 01:05:25
need to be able to better do the

01:05:20 --> 01:05:27
comparison now we can use formal methods

01:05:24 --> 01:05:29
at window there is a lot of room here

01:05:26 --> 01:05:31
for statistical or learning based

01:05:28 --> 01:05:33
methods you know like look at look at

01:05:30 --> 01:05:35
what people actually do when what you

01:05:32 --> 01:05:37
know at what point will people

01:05:34 --> 01:05:39
funkateers right rather than in the

01:05:36 --> 01:05:42
field at your cutting them off versus

01:05:38 --> 01:05:46
you know they feel that they a little

01:05:41 --> 01:05:48
done okay so we need to develop this

01:05:45 --> 01:05:51
ound theory we need to be assessed the

01:05:47 --> 01:05:54
behaviors on realized space and time

01:05:50 --> 01:05:58
trajectories what you thought that you

01:05:53 --> 01:06:01
had seen that doesn't matter okay oh you

01:05:57 --> 01:06:03
know because if you say well if I if I

01:06:00 --> 01:06:04
didn't see the pedestrian that is not my

01:06:02 --> 01:06:07
fault that I hidden well then people

01:06:03 --> 01:06:09
will start removing sensors right so if

01:06:06 --> 01:06:11
you don't see anything you can it hit

01:06:08 --> 01:06:16
anything you want you're not to blame

01:06:10 --> 01:06:18
right but I really think that you know

01:06:15 --> 01:06:20
the compliance of the rules once we have

01:06:17 --> 01:06:22
this precise rigorous rules will

01:06:19 --> 01:06:24
actually derive a lot of requirements

01:06:21 --> 01:06:27
for the sensing perception system for

01:06:23 --> 01:06:30
the planning control system okay so from

01:06:26 --> 01:06:33
y point of view the main message today

01:06:29 --> 01:06:35
is what I think is the biggest challenge

01:06:32 --> 01:06:38
is that we don't know how precisely how

01:06:34 --> 01:06:42
e want human driven vehicles to to

01:06:37 --> 01:06:45
behave okay once we answer that question

01:06:41 --> 01:06:48
I think that also designing automated

01:06:44 --> 01:06:51
vehicles will be much much easier okay

01:06:47 --> 01:06:53
so let me stop here okay so I'm just

01:06:50 --> 01:06:55
giving you know a few references so some

01:06:52 --> 01:06:58
of our you know published work you know

01:06:54 --> 01:07:01
on these topics and you know let me just

01:06:57 --> 01:07:02
conclude you know okay so this is you

01:07:00 --> 01:07:06
know the company what we are trying to

01:07:01 --> 01:07:09
do allow me you know you're also hiding

01:07:05 --> 01:07:11
so anybody's interested you know feel

01:07:08 --> 01:07:13
free to you know send me an email you

01:07:10 --> 01:07:15
know contact us we want to double our

01:07:12 --> 01:07:17
size in the next couple of years so

01:07:14 --> 01:07:22
we're hanging having a couple of hundred

01:07:16 --> 01:07:22
people okay thank you for your thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
