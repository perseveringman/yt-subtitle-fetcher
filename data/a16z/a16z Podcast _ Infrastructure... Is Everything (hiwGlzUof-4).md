---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "hiwGlzUof-4"
title: "a16z Podcast | Infrastructure... Is Everything"
video_url: "https://www.youtube.com/watch?v=hiwGlzUof-4"
thumbnail_url: "https://i.ytimg.com/vi/hiwGlzUof-4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=hiwGlzUof-4"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:33:39.000Z"
upload_date: "2019-01-02"
duration_seconds: 2226
duration_human: "37:06"
view_count: 126
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:24:38.099Z"
---

# a16z Podcast | Infrastructure... Is Everything

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=hiwGlzUof-4
- video_id: hiwGlzUof-4
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:33:39.000Z
- upload_date: 2019-01-02
- duration: 37:06
- view_count: 126
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Infrastructure. It powers everything from cities to computing, yet is sometimes considered "boring" because it is so invisible to so many of us. But as software continues to eat the world, infrastructure has come to the forefront. And some of the most exciting technology innovations are now happening at the infrastructure level: It's changing everything, observes a16z's newest general partner Martin Casado -- from how new tech is created to how new tech is sold.

Casado -- one of the pioneers of "software-defined networking" -- joins this episode of the a16z Podcast to share his journey from Lawrence Livermore National Laboratory to Stanford to Nicira Networks to VMware to a16z. He also discusses the tradeoffs in theoretical v. applied computer "science", including lessons learned as a PhD and technologist who then had to run a startup through hard times.

Finally, Casado shares what he thinks are the key vectors and trends in networking, what's coming next, how the "as-a-service"(ification) of infrastructure is creating entirely new patterns of buying tech, and how selling to developers is so different (hint: open source is a lot more important than you might think!).

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
hi everyone welcome to the a6 & Z

00:00:02 --> 00:00:06
podcast I'm sono

00:00:03 --> 00:00:08
and today Michael and I are sitting down

00:00:05 --> 00:00:10
with our newest general partner Martine

00:00:07 --> 00:00:12
casado who is going to be covering all

00:00:09 --> 00:00:13
things infrastructure which sounds like

00:00:11 --> 00:00:14
a be really boring topic but it's

00:00:12 --> 00:00:16
actually a very interesting topic

00:00:13 --> 00:00:18
especially given his background which

00:00:15 --> 00:00:19
started off at Lawrence Livermore

00:00:17 --> 00:00:22
laboratories and then went into

00:00:18 --> 00:00:23
infrastructure after 9/11 after we

00:00:21 --> 00:00:26
briefly covered his background we talked

00:00:22 --> 00:00:28
about other interesting themes like the

00:00:25 --> 00:00:30
as a service if ocation of everything

00:00:27 --> 00:00:32
how open-source is actually more

00:00:29 --> 00:00:34
important for reasons that we don't

00:00:31 --> 00:00:36
quite realize and why selling to

00:00:33 --> 00:00:37
developers is so different so at that

00:00:35 --> 00:00:46
let's just get started

00:00:36 --> 00:00:48
Martine welcome happy to be here he is

00:00:45 --> 00:00:50
happy and he's gonna get happier I can

00:00:47 --> 00:00:52
tell you as this interview goes on or

00:00:49 --> 00:00:54
maybe the opposite as we start asking

00:00:51 --> 00:00:56
lots of questions my team you're on you

00:00:53 --> 00:00:58
eternal partner and you are gonna be

00:00:55 --> 00:01:01
covering everything infrastructure yeah

00:00:57 --> 00:01:03
also interested in so focused on to

00:01:00 --> 00:01:05
begin with infrastructure and in general

00:01:02 --> 00:01:06
Enterprise it's funny because we were

00:01:04 --> 00:01:08
just joking about this because

00:01:05 --> 00:01:10
infrastructure I think is the sexiest

00:01:07 --> 00:01:11
opic on the planet but I think the

00:01:09 --> 00:01:16
majority of the world and I'm rolling my

00:01:10 --> 00:01:18
eyes yeah it's boring being and yet it

00:01:15 --> 00:01:20
is really interesting has something

00:01:17 --> 00:01:22
changed in the evolution of computing

00:01:19 --> 00:01:24
that infrastructure is suddenly sexy

00:01:21 --> 00:01:25
even outside of just this room I mean or

00:01:23 --> 00:01:28
have you been hanging around with Peter

00:01:24 --> 00:01:31
Levine too much I actually think that

00:01:27 --> 00:01:32
he reason that infrastructure does get

00:01:30 --> 00:01:34
a lot of billing is because we don't see

00:01:31 --> 00:01:35
a lot of it right I mean like we focus

00:01:33 --> 00:01:37
on consumer as we focus on what we buy

00:01:34 --> 00:01:39
and what we can use day-to-day but

00:01:36 --> 00:01:41
anytime you shine a light on general

00:01:38 --> 00:01:42
infrastructure whether it's IT or not

00:01:40 --> 00:01:44
people find it super fascinating so this

00:01:41 --> 00:01:45
gonna sound really silly but I'm

00:01:43 --> 00:01:46
gonna give you two reasons have you ever

00:01:44 --> 00:01:49
seen that TV show really big machines

00:01:45 --> 00:01:51
yeah

00:01:48 --> 00:01:54
TV shows like these a really big machine

00:01:50 --> 00:01:57
mining equipment from you know South

00:01:53 --> 00:01:59
Africa it's like it's like like boy you

00:01:56 --> 00:02:01
put my daughter there and she thinks the

00:01:58 --> 00:02:03
most amazing thing ever because and this

00:02:00 --> 00:02:05
just big piece of infrastructure and

00:02:02 --> 00:02:08
the reality is the most amazing

00:02:04 --> 00:02:10
engineering and technical marvels go

00:02:07 --> 00:02:12
into infrastructure we just don't see it

00:02:09 --> 00:02:13
I mean another example is I got a book

00:02:11 --> 00:02:14
on how to build a modern city it's

00:02:12 --> 00:02:16
unbelievable

00:02:13 --> 00:02:18
infrastructure and if you look at kind

00:02:15 --> 00:02:21
of this shift that's happening in IT in

00:02:17 --> 00:02:22
Silicon Valley of course in the popular

00:02:20 --> 00:02:23
press you see it from kind of the

00:02:21 --> 00:02:25
consumer viewpoint cuz that's what we

00:02:22 --> 00:02:27
think day-to-day but if you want to see

00:02:24 --> 00:02:29
where the really magic happens and a lot

00:02:26 --> 00:02:30
of the the big technical innovations

00:02:28 --> 00:02:32
happen to get the infrastructure level

00:02:29 --> 00:02:33
so I do think it's very sexy natively

00:02:31 --> 00:02:35
did you did you always have a love

00:02:32 --> 00:02:36
affair with an infrastructure I mean

00:02:34 --> 00:02:39
let's talk a little bit about your

00:02:35 --> 00:02:41
background or did you did you arrive at

00:02:38 --> 00:02:42
it later yeah exactly I mean I doubt you

00:02:40 --> 00:02:48
woke up when you were like 6 years old

00:02:41 --> 00:02:51
and said I want to do infrastructure I

00:02:47 --> 00:02:53
mean sort of X I took a very crooked

00:02:50 --> 00:02:56
path in general to computer science and

00:02:52 --> 00:02:58
into infrastructure actually yeah I'm

00:02:55 --> 00:02:59
kind of a failed microbiologist and then

00:02:57 --> 00:03:01
a failed physicists well I heard that

00:02:58 --> 00:03:03
you dabbled in microbio physics

00:03:00 --> 00:03:05
astronomy I was thinking who dabbles in

00:03:02 --> 00:03:06
those things is that so funny yes

00:03:04 --> 00:03:08
actually I did um actually I started

00:03:05 --> 00:03:10
strongly I was at the local university

00:03:07 --> 00:03:11
Northern Arizona University I was taking

00:03:09 --> 00:03:13
classes and I was doing research there

00:03:10 --> 00:03:15
the interesting thing is I'd spend tons

00:03:12 --> 00:03:16
of time in this lab like you know and

00:03:14 --> 00:03:18
like basically we have to like check how

00:03:15 --> 00:03:20
bacteria were growing every two hours

00:03:17 --> 00:03:23
not spent all this time in the lab and

00:03:19 --> 00:03:25
in the corner was this computer and I

00:03:22 --> 00:03:26
actually didn't have a big background in

00:03:24 --> 00:03:28
computer I was more of a math guy and I

00:03:25 --> 00:03:30
just spent all of this time on the con

00:03:27 --> 00:03:31
the computer and so from then I said

00:03:29 --> 00:03:33
okay I was probably 20 at the time I

00:03:30 --> 00:03:34
decided to take computer science courses

00:03:32 --> 00:03:36
and because I had a physics background

00:03:34 --> 00:03:39
in mostly physics so I did two kind of

00:03:35 --> 00:03:40
physics computations so my first job out

00:03:38 --> 00:03:42
of undergraduate was at Lawrence

00:03:39 --> 00:03:44
Livermore we're toasting like massive

00:03:41 --> 00:03:47
physics simulations so at the time I was

00:03:43 --> 00:03:49
in Applied Computer Science in physics

00:03:46 --> 00:03:50
and not an infrastructure but I was

00:03:48 --> 00:03:52
there actually in the nuclear weapons

00:03:49 --> 00:03:54
program I was gonna say can you tell us

00:03:51 --> 00:03:55
what you were modeling or what what what

00:03:53 --> 00:03:56
physics you were going after so I was in

00:03:54 --> 00:03:58
the weapons program so it's

00:03:55 --> 00:04:01
doing like like like large simulations

00:03:57 --> 00:04:03
of all sorts of things that relates to

00:04:00 --> 00:04:07
the weapons program right at the time

00:04:02 --> 00:04:09
and I was doing that through 2001 when

00:04:06 --> 00:04:11
9/11 happened I was actually at

00:04:08 --> 00:04:15
Livermore when 9/11 happened and there

00:04:10 --> 00:04:18
like that moment the entire temperament

00:04:14 --> 00:04:19
of the the country change which is if

00:04:17 --> 00:04:21
you think about the weapons program its

00:04:18 --> 00:04:23
kind of an anachronism it's kind of like

00:04:20 --> 00:04:25
this holdover from like the Cold War

00:04:22 --> 00:04:28
that's exactly right I mean like listen

00:04:24 --> 00:04:30
that's a very different type of threat

00:04:27 --> 00:04:32
and what was now perceived as the modern

00:04:29 --> 00:04:33
threat and so the whole posture of the

00:04:31 --> 00:04:37
nation moved away from this kind of

00:04:32 --> 00:04:38
anachronism to the intelligence and so I

00:04:36 --> 00:04:40
was in this position where I had my

00:04:37 --> 00:04:41
clearances and I worked in a computation

00:04:39 --> 00:04:43
and environment and by the way the

00:04:40 --> 00:04:44
reason I ended up going to Stanford is

00:04:42 --> 00:04:45
I'm like listen I'm going into

00:04:43 --> 00:04:46
intelligence I don't understand

00:04:44 --> 00:04:49
everything so I started taking

00:04:45 --> 00:04:52
networking courses at Stanford no sense

00:04:48 --> 00:04:56
to me be you know modeling or simulating

00:04:51 --> 00:04:59
nuclear weapons programs to intelligence

00:04:55 --> 00:05:00
how does one lead to the next aside from

00:04:58 --> 00:05:02
your clearance here's my favorite thing

00:04:59 --> 00:05:03
about computer science and well always

00:05:01 --> 00:05:05
love computer science and this is gonna

00:05:02 --> 00:05:06
sound like an aside but I'll bring it

00:05:04 --> 00:05:09
back to what you said so here's what it

00:05:05 --> 00:05:12
is let's say that I write a program and

00:05:08 --> 00:05:13
it solves grand unified field theory and

00:05:11 --> 00:05:14
I've solved everything there's this all

00:05:12 --> 00:05:16
about physics physics would disappear as

00:05:13 --> 00:05:16
a discipline I would have solved it you

00:05:15 --> 00:05:18
know what I would say

00:05:16 --> 00:05:20
I'd say that's one more application out

00:05:17 --> 00:05:22
of go after biology and so in many ways

00:05:19 --> 00:05:24
I think that's so powerful that what

00:05:21 --> 00:05:25
computer science is so powerful at

00:05:23 --> 00:05:26
software's you can apply to so many

00:05:24 --> 00:05:28
different things and I've always been a

00:05:25 --> 00:05:29
guy about fundamentals I was really

00:05:27 --> 00:05:31
interested in the fundamentals about you

00:05:28 --> 00:05:33
of computer science there's two mindsets

00:05:30 --> 00:05:35
of how people approach this whole topic

00:05:32 --> 00:05:38
of computer science as Alan illiteracy

00:05:34 --> 00:05:39
one is that it's a language and you have

00:05:37 --> 00:05:41
to learn it just like English and and

00:05:38 --> 00:05:42
mathematics and anything else

00:05:40 --> 00:05:44
and another is that it is a tool for

00:05:41 --> 00:05:47
solving problems that can be applied in

00:05:43 --> 00:05:48
any particular way and I think that's

00:05:46 --> 00:05:50
interesting because that leads to people

00:05:47 --> 00:05:53
thinking about it more as a means to an

00:05:49 --> 00:05:54
end versus the end in and of itself it

00:05:52 --> 00:05:55
means like you can apply that mindset to

00:05:53 --> 00:05:57
anything in life yeah so I've always

00:05:54 --> 00:05:59
been exceptionally comply applied when

00:05:56 --> 00:06:00
it comes to computer science like I've

00:05:58 --> 00:06:02
never thought of it as actual science I

00:05:59 --> 00:06:03
mean we say computer science of us out

00:06:01 --> 00:06:05
of it's an engineering discipline and

00:06:02 --> 00:06:07
the goal has always been to solve a

00:06:04 --> 00:06:09
real-world problem so let's back up you

00:06:06 --> 00:06:12
sure you were working on intelligence

00:06:08 --> 00:06:14
you realize that wait I don't understand

00:06:11 --> 00:06:15
the fundamentals of networks and and or

00:06:13 --> 00:06:17
maybe there's a better way to do this

00:06:14 --> 00:06:18
the intelligence community's a lot about

00:06:16 --> 00:06:22
how people communicate what they're

00:06:17 --> 00:06:25
communicating the data understanding how

00:06:21 --> 00:06:26
our network infrastructures are how do

00:06:24 --> 00:06:28
you break into systems how to see use

00:06:25 --> 00:06:30
cure systems and so much of that is

00:06:27 --> 00:06:31
the network right systems are connected

00:06:29 --> 00:06:32
to the network and if you're going to

00:06:30 --> 00:06:34
break into something remotely you have

00:06:31 --> 00:06:35
to understand the network what was it

00:06:33 --> 00:06:37
and what made you realize that you you

00:06:34 --> 00:06:39
could head in a different direction yes

00:06:36 --> 00:06:41
o um I think the work in the last ten

00:06:38 --> 00:06:42
years like as I'm giving this podcast in

00:06:40 --> 00:06:46
the last 10 years of

00:06:41 --> 00:06:49
and trying to reimagine the the network

00:06:45 --> 00:06:50
with software and and all of that was

00:06:48 --> 00:06:52
rooted in this experience in the

00:06:49 --> 00:06:54
intelligence community yeah tell us more

00:06:51 --> 00:06:56
about that because I think it's actually

00:06:53 --> 00:06:57
hard to even go back to that yeah and

00:06:55 --> 00:06:58
you're right people take a lot of stuff

00:06:56 --> 00:07:00
or granted because it's different now

00:06:57 --> 00:07:04
and by the way most people don't even

00:06:59 --> 00:07:06
see it probably the first big AHA was

00:07:03 --> 00:07:09
the following which is if you're the

00:07:05 --> 00:07:12
government you have deep pockets and and

00:07:08 --> 00:07:14
you're going against some pretty

00:07:11 --> 00:07:15
intimidating adversaries nation-state so

00:07:13 --> 00:07:18
who've also have deep pockets

00:07:14 --> 00:07:19
normally market forces doesn't create

00:07:17 --> 00:07:20
things that you can use so let's say I

00:07:18 --> 00:07:22
want to build a real secure

00:07:19 --> 00:07:24
infrastructure well on the compute side

00:07:21 --> 00:07:26
you could buy computers and then you

00:07:23 --> 00:07:29
could program them for what you needed

00:07:25 --> 00:07:30
to for this very different environment

00:07:28 --> 00:07:32
his very different threat environment

00:07:29 --> 00:07:33
and there's there's there's ways to do

00:07:31 --> 00:07:34
that and so the intelligence community

00:07:32 --> 00:07:36
would do this they have modified

00:07:33 --> 00:07:39
operating systems for example SC Linux

00:07:35 --> 00:07:40
came out of this time but no it came to

00:07:38 --> 00:07:44
networking it was very different

00:07:39 --> 00:07:46
so in networking basically whatever you

00:07:43 --> 00:07:48
bought that's what you got and my bot

00:07:45 --> 00:07:51
you mean with computers you buy hardware

00:07:47 --> 00:07:52
but then there's a programming model so

00:07:50 --> 00:07:54
that you can write software on top of

00:07:51 --> 00:07:56
that so so you could for example buy a

00:07:53 --> 00:07:57
server get Linux and program Linux but

00:07:55 --> 00:07:59
when it came to networking you basically

00:07:56 --> 00:08:01
ou'd buy the hardware it would come

00:07:58 --> 00:08:03
with software that was already written

00:08:00 --> 00:08:05
by the vendor and there was no model at

00:08:02 --> 00:08:07
all for you to evolve it you know one of

00:08:04 --> 00:08:09
my Jobs was to look you know to look

00:08:06 --> 00:08:11
around and and to determine whether

00:08:08 --> 00:08:13
different networks and environments were

00:08:10 --> 00:08:16
secure and how could you make them more

00:08:12 --> 00:08:18
secure many of the problems came down to

00:08:15 --> 00:08:19
the networking piece and to answer the

00:08:17 --> 00:08:21
question how do you make it more secure

00:08:18 --> 00:08:23
the answer is like well with the current

00:08:20 --> 00:08:25
echnology to kind of can't

00:08:22 --> 00:08:27
so you started this this very simple

00:08:24 --> 00:08:29
thought in my head it's like you know on

00:08:26 --> 00:08:32
the on the compute side I can take it I

00:08:28 --> 00:08:34
can program it to do whatever I want but

00:08:31 --> 00:08:35
when it comes to networking I can't and

00:08:33 --> 00:08:36
this was the seed of what you know

00:08:34 --> 00:08:38
became Sdn and all the work that we did

00:08:35 --> 00:08:39
so Bastian you mean software-defined

00:08:37 --> 00:08:41
network sorry it's software to find

00:08:38 --> 00:08:43
everything and define that well at this

00:08:40 --> 00:08:45
point I think the terms become so

00:08:42 --> 00:08:46
diluted as to be meaningless so if you

00:08:44 --> 00:08:49
hear the term Sofra Defined Networking

00:08:45 --> 00:08:50
now it's now the the byproduct of a

00:08:48 --> 00:08:52
bunch of marketing departments that will

00:08:49 --> 00:08:54
apply it to everything right and so even

00:08:51 --> 00:08:55
I don't know what it means anymore but

00:08:53 --> 00:08:58
at the time it meant something very

00:08:54 --> 00:09:01
simple simple so when you know I did

00:08:57 --> 00:09:03
this work at Stanford for my PhD we just

00:09:00 --> 00:09:04
set the following a there's no

00:09:02 --> 00:09:06
programming model for networking it just

00:09:03 --> 00:09:08
doesn't exist and so there's kind of two

00:09:05 --> 00:09:10
things that you want to do to to get one

00:09:07 --> 00:09:11
of them is you want to make the

00:09:09 --> 00:09:13
networking hardware sufficiently general

00:09:10 --> 00:09:15
purpose so that you have like an

00:09:12 --> 00:09:17
instruction set you have like the x86

00:09:14 --> 00:09:19
for networking so that you can program a

00:09:16 --> 00:09:21
single switch the second thing is

00:09:18 --> 00:09:22
because most networking problems don't

00:09:20 --> 00:09:23
deal with just one switch they deals

00:09:21 --> 00:09:27
with networks of switches they deal with

00:09:22 --> 00:09:30
networks of things is you want to have a

00:09:26 --> 00:09:31
discipline or a way of programming a

00:09:29 --> 00:09:33
collection of these things that you can

00:09:30 --> 00:09:35
show some stronger properties than you

00:09:32 --> 00:09:37
could before so we kind of said two

00:09:34 --> 00:09:39
things said one make an individual

00:09:36 --> 00:09:41
switch more general and programmable and

00:09:38 --> 00:09:43
two let's focus on a programming model

00:09:40 --> 00:09:44
that would go across them so you can do

00:09:42 --> 00:09:45
things like security things like

00:09:43 --> 00:09:47
mobility things like operational

00:09:44 --> 00:09:50
simplicity it reminds me of what

00:09:46 --> 00:09:52
happened earlier a couple a generation

00:09:49 --> 00:09:55
ago in the field of robotics where

00:09:51 --> 00:09:57
people used to hard-code everything into

00:09:54 --> 00:10:00
the actual robot and then they have this

00:09:56 --> 00:10:02
realization where you can actually make

00:09:59 --> 00:10:04
the hardware itself more generic to your

00:10:01 --> 00:10:06
point sort of using just as an analogy

00:10:03 --> 00:10:08
and then use a software to manipulate

00:10:05 --> 00:10:09
verything together I think there's a

00:10:07 --> 00:10:12
bunch of analogies that's a great one so

00:10:08 --> 00:10:13
I think the classic analogy is back

00:10:11 --> 00:10:15
in the 70s you bought a mainframe the

00:10:12 --> 00:10:18
mainframe had everything in it you know

00:10:14 --> 00:10:20
and that's what you got and then the PC

00:10:17 --> 00:10:21
revolution came or you decoupled the

00:10:19 --> 00:10:23
operating system you could write your

00:10:20 --> 00:10:24
own operating some like Linna stood the

00:10:22 --> 00:10:27
robotics one is fantastic

00:10:23 --> 00:10:29
if you go 20 years ago if you wanted to

00:10:26 --> 00:10:31
make a robot like you have that I have a

00:10:28 --> 00:10:33
machine shop and today you can get a 3d

00:10:30 --> 00:10:34
printer and to get the components way

00:10:32 --> 00:10:36
back way and like to get a sensor would

00:10:33 --> 00:10:38
cost tons of money and today because of

00:10:35 --> 00:10:40
the advent of the iPhone you know I mean

00:10:37 --> 00:10:43
these things are pennies on the dollar

00:10:39 --> 00:10:45
so it's it's the ability to make your

00:10:42 --> 00:10:46
own components and then the components

00:10:44 --> 00:10:48
become very cost effective the exact

00:10:45 --> 00:10:50
same thing is happening in networking so

00:10:47 --> 00:10:52
before to get a router you know you pony

00:10:49 --> 00:10:54
up a hundred thousand bucks and like

00:10:51 --> 00:10:57
basically you couldn't modify it today I

00:10:53 --> 00:10:59
mean you can get 48 ports of 10-gig x'

00:10:56 --> 00:11:01
for $2000 and you can run your own

00:10:58 --> 00:11:02
software on its we're seeing the exact

00:11:00 --> 00:11:03
same type of renaissance happening

00:11:01 --> 00:11:06
enerations of companies that were

00:11:02 --> 00:11:08
hugely valuable Cisco being the most

00:11:05 --> 00:11:09
obvious but you know companies that made

00:11:07 --> 00:11:11
switches that were you know

00:11:08 --> 00:11:13
just billions upon billions of dollars

00:11:10 --> 00:11:14
in sales yeah and that all went away I

00:11:12 --> 00:11:16
don't know if it's thanks to you but

00:11:13 --> 00:11:18
because the the switch became generic

00:11:15 --> 00:11:20
and that whole layer of gear became

00:11:17 --> 00:11:22
generic well I think we're seeing this

00:11:19 --> 00:11:24
playing out in real time I mean you know

00:11:21 --> 00:11:26
there's been some very active

00:11:23 --> 00:11:28
competition you know at the hardware

00:11:25 --> 00:11:31
level right now but we've seen like a

00:11:27 --> 00:11:32
big change in in you know the value of

00:11:30 --> 00:11:35
these physical switch vendors we'll talk

00:11:31 --> 00:11:38
about providing the way that they market

00:11:34 --> 00:11:39
and even the way that they sell because

00:11:37 --> 00:11:41
of this effort and so I don't think

00:11:38 --> 00:11:43
we've seen the end and I don't think we

00:11:40 --> 00:11:44
really understand the broad impact but I

00:11:42 --> 00:11:45
do think that we understand that it's

00:11:43 --> 00:11:47
massive it's changing the conversation

00:11:44 --> 00:11:49
with customers is changing buying

00:11:46 --> 00:11:50
patterns changing how we think of the

00:11:48 --> 00:11:52
technology and indeed it's changing how

00:11:49 --> 00:11:54
e create the technology and if you went

00:11:51 --> 00:11:55
back 10 years when this all started

00:11:53 --> 00:11:57
it's a different planet so where's the

00:11:54 --> 00:12:00
significance of the company that you

00:11:56 --> 00:12:03
co-founded with Nick McCune and Scot

00:11:59 --> 00:12:05
Schenker was a three and it was nice era

00:12:02 --> 00:12:07
nd it was acquired by VMware which is

00:12:04 --> 00:12:09
where you just came from that's right

00:12:06 --> 00:12:11
what was the significance of this era

00:12:08 --> 00:12:13
so Sdn you can think of as a high-level

00:12:10 --> 00:12:14
architecture it's not a product it's not

00:12:12 --> 00:12:15
something that you create and give to

00:12:13 --> 00:12:17
somebody it's an architecture and in

00:12:14 --> 00:12:19
many ways it's a way to think about

00:12:16 --> 00:12:23
hings right like like networking

00:12:18 --> 00:12:23
scientists by the way really love

00:12:26 --> 00:12:35
architecture I've defined a networking

00:12:31 --> 00:12:38
it's so obsessed about the ways of

00:12:34 --> 00:12:40
thinking of things right but you're

00:12:37 --> 00:12:42
saying is just an architecture why it's

00:12:39 --> 00:12:44
just like your programming isn't a thing

00:12:41 --> 00:12:46
you know programming is a way to think

00:12:43 --> 00:12:47
about creating things so Sdn is is is is

00:12:45 --> 00:12:49
yeah it's an architecture that it's a

00:12:46 --> 00:12:51
high-level thing so there was there was

00:12:48 --> 00:12:53
two kind of a hoss that we went through

00:12:50 --> 00:12:54
with nasarah so we knew that Sdn

00:12:52 --> 00:12:56
provided a nice way to think about

00:12:53 --> 00:12:57
hings but we wanted to apply it to

00:12:55 --> 00:12:58
solve a real problem so people could

00:12:56 --> 00:13:00
actually do something with it that's

00:12:57 --> 00:13:01
right that's right to actually create a

00:12:59 --> 00:13:02
product have some real impact and look

00:13:00 --> 00:13:03
back and say you know the world is

00:13:01 --> 00:13:06
different because of this specific thing

00:13:02 --> 00:13:08
that we did and so so there were two

00:13:05 --> 00:13:10
trends that we took advantage of and

00:13:07 --> 00:13:12
they kind of just helped describe what

00:13:09 --> 00:13:14
we did so the first one is if you looked

00:13:11 --> 00:13:15
at mega datacenters the Google's the

00:13:13 --> 00:13:18
Amazons the Facebook's they were

00:13:14 --> 00:13:20
building networks very different than

00:13:17 --> 00:13:21
ybody else and so if you looked at

00:13:19 --> 00:13:23
what they did there they're building

00:13:20 --> 00:13:25
very very simple physical

00:13:22 --> 00:13:26
works and they're moving things that we

00:13:24 --> 00:13:30
typically put networks like like

00:13:25 --> 00:13:33
security and load balancing and a lot of

00:13:29 --> 00:13:34
the operations and management fault

00:13:32 --> 00:13:36
isolation instead of having that in the

00:13:33 --> 00:13:38
hardware they were moving it to the edge

00:13:35 --> 00:13:39
and doing it in software this is a

00:13:37 --> 00:13:41
massively big difference so now they can

00:13:38 --> 00:13:42
just by any simple switch that they want

00:13:40 --> 00:13:44
configure it very very simply and

00:13:41 --> 00:13:46
they've and then of the application they

00:13:43 --> 00:13:48
were evolving it to have all this

00:13:45 --> 00:13:50
functionality so that's to be an Sdn

00:13:47 --> 00:13:51
level shift so that was the first thing

00:13:49 --> 00:13:55
we noticed and these were by far by far

00:13:50 --> 00:13:57
the most efficient data centers on the

00:13:54 --> 00:13:58
planet run by you know I would consider

00:13:56 --> 00:14:00
some of the most technically savvy

00:13:57 --> 00:14:01
people and nobody sold them that

00:13:59 --> 00:14:02
architecture like they I mean they

00:14:00 --> 00:14:04
basically looked at the problem and said

00:14:01 --> 00:14:06
this is the best way to solve it and at

00:14:03 --> 00:14:08
he time and still to this day it was

00:14:05 --> 00:14:09
like their their secret like that's what

00:14:07 --> 00:14:12
differentiated them from everyone

00:14:08 --> 00:14:15
xactly yeah so I mean I considered

00:14:11 --> 00:14:16
Google and then and Amazon to be pretty

00:14:14 --> 00:14:17
much the leaders and you know this is

00:14:15 --> 00:14:20
ten years ago that they were doing this

00:14:16 --> 00:14:21
tuff and and and they'd really realized

00:14:19 --> 00:14:22
that you could just build very simple

00:14:20 --> 00:14:25
physical networks and put everything in

00:14:21 --> 00:14:28
software at the edge so that was the

00:14:24 --> 00:14:29
first big vector that we're looking I'm

00:14:27 --> 00:14:31
like wow you know the world's gonna

00:14:28 --> 00:14:33
change once this gets out everywhere the

00:14:30 --> 00:14:35
second one was compute virtualization so

00:14:32 --> 00:14:38
at the time computer virtualization was

00:14:34 --> 00:14:39
really I mean it it was somewhat mature

00:14:37 --> 00:14:41
but it was still in this hyper growth

00:14:38 --> 00:14:43
phase I mean like you know VMware went

00:14:40 --> 00:14:45
public around this time and the

00:14:42 --> 00:14:46
interesting thing about compute

00:14:44 --> 00:14:49
virtualization is for every virtual

00:14:45 --> 00:14:51
machine there's a virtual port which is

00:14:48 --> 00:14:53
a network port and these are running on

00:14:50 --> 00:14:54
servers at the edge and I remember once

00:14:52 --> 00:14:56
looking and I'm like you know what

00:14:53 --> 00:14:58
within a couple of years VMware is gonna

00:14:55 --> 00:15:02
have more virtual ports than cisco has

00:14:57 --> 00:15:03
physical ports that's right because

00:15:01 --> 00:15:07
you're like listen these things are on

00:15:02 --> 00:15:09
the server in software the most rad

00:15:06 --> 00:15:11
atacenters on the planet have taken the

00:15:08 --> 00:15:13
application in software and change them

00:15:10 --> 00:15:14
to consume these things and the majority

00:15:12 --> 00:15:15
of workloads are gonna be on

00:15:13 --> 00:15:18
virtualization and they're gonna have

00:15:14 --> 00:15:21
software ports so what we thought to do

00:15:17 --> 00:15:23
at nasira's to take virtualization build

00:15:20 --> 00:15:26
out networking functionality in software

00:15:22 --> 00:15:28
so that any enterprise not just the

00:15:26 --> 00:15:30
googles and Amazons could take advantage

00:15:27 --> 00:15:32
of this architecture right the only

00:15:29 --> 00:15:33
reason that google's and Amazon's can do

00:15:31 --> 00:15:34
what they did is cuz they own the

00:15:32 --> 00:15:36
application they could rewrite the

00:15:33 --> 00:15:38
application but for City Bay

00:15:35 --> 00:15:40
or JPMorgan Chase it has tens of

00:15:37 --> 00:15:41
thousands of applications written by

00:15:39 --> 00:15:45
third parties written by Microsoft

00:15:41 --> 00:15:48
written by whoever we could provide that

00:15:44 --> 00:15:49
software layer that allows them to run

00:15:47 --> 00:15:50
very simple physical switches and move

00:15:48 --> 00:15:52
verything in software so it was a

00:15:49 --> 00:15:55
really alignment of two massive massive

00:15:51 --> 00:15:58
ctors we took about amazing shift and

00:15:54 --> 00:16:00
then you were acquired by VMware when we

00:15:57 --> 00:16:01
launched the company actually

00:15:59 --> 00:16:04
went public with the company not like

00:16:00 --> 00:16:08
públicas as in the stock market but we

00:16:03 --> 00:16:10
actually came out of stealth we had 18 T

00:16:07 --> 00:16:12
NT T eBay Rackspace and Fidelity's like

00:16:09 --> 00:16:14
five of the largest companies and it was

00:16:11 --> 00:16:16
your thesis true I mean did they get

00:16:13 --> 00:16:17
hat immediately that hey the world's

00:16:15 --> 00:16:19
headed this way and we'll actually pay

00:16:16 --> 00:16:26
ou to help us get there you know I I am

00:16:18 --> 00:16:27
still to this day so surprised by not

00:16:25 --> 00:16:29
only how quickly they got it but how

00:16:26 --> 00:16:31
fundamentally they understood it some of

00:16:28 --> 00:16:37
the people that I was working with then

00:16:30 --> 00:16:39
Toby Ford JC Martin Eric Karlin I think

00:16:36 --> 00:16:41
now looking in retrospect were such

00:16:38 --> 00:16:44
visionaries in understanding this change

00:16:40 --> 00:16:46
this huge risk oh yeah in some ways

00:16:43 --> 00:16:48
arguably even more so because it's a lot

00:16:45 --> 00:16:49
ougher for someone inside a captive

00:16:47 --> 00:16:51
system who already has a point of view

00:16:48 --> 00:16:53
and how to do things to embrace

00:16:50 --> 00:16:56
something new and different than for

00:16:52 --> 00:16:58
someone who's grading something they

00:16:55 --> 00:17:00
didn't build and when the rest of the

00:16:57 --> 00:17:02
world didn't get it because again this

00:16:59 --> 00:17:04
a time nobody said Sdn right from a

00:17:01 --> 00:17:06
vendor no one had heard of I mean it

00:17:03 --> 00:17:10
didn't rhyme with IBM or or anything

00:17:05 --> 00:17:12
right yeah no right like the term Sdn

00:17:09 --> 00:17:13
like either hadn't been coined or like

00:17:11 --> 00:17:15
you know wasn't around very long and I

00:17:12 --> 00:17:17
mean these people really did see it

00:17:14 --> 00:17:19
understand that consume it and many of

00:17:16 --> 00:17:22
them I think most of them or all of them

00:17:18 --> 00:17:23
are still large customers and so we did

00:17:21 --> 00:17:25
that we started getting very good

00:17:22 --> 00:17:27
traction and then in 2012 we got

00:17:24 --> 00:17:30
acquired by an interesting little

00:17:26 --> 00:17:33
anecdote is that during because of that

00:17:29 --> 00:17:36
VMware was actually in Gartner's quad

00:17:32 --> 00:17:39
famous quadrant noted as a visionary in

00:17:35 --> 00:17:41
etworking well so I mean there's many

00:17:38 --> 00:17:43
remarkable things about that number one

00:17:40 --> 00:17:45
this is a hardware quadrant it's the

00:17:42 --> 00:17:47
only pure-play software company ever

00:17:44 --> 00:17:49
how does some security play into all of

00:17:46 --> 00:17:50
this I mean I know we hear about

00:17:48 --> 00:17:51
security in a

00:17:49 --> 00:17:55
very different way now than we ever did

00:17:50 --> 00:17:56
even two years ago yeah but networking

00:17:54 --> 00:17:57
at the security level are they the exact

00:17:55 --> 00:17:59
same thing I mean I almost feels that

00:17:56 --> 00:18:00
can you even separate those two topics

00:17:58 --> 00:18:03
anymore that's an exceptional

00:17:59 --> 00:18:07
question so so the simple

00:18:02 --> 00:18:08
one of the simple answers is is networks

00:18:06 --> 00:18:09
have to touch everything and security

00:18:07 --> 00:18:12
has to touch everything right and so

00:18:08 --> 00:18:14
just as you could put networking in the

00:18:11 --> 00:18:16
hypervisor to touch every single

00:18:13 --> 00:18:18
workload you could put security there

00:18:15 --> 00:18:19
and have security services and many

00:18:17 --> 00:18:21
security services operate at the network

00:18:18 --> 00:18:25
level which is basically who can or

00:18:20 --> 00:18:27
cannot talk to who traditionally

00:18:24 --> 00:18:30
security has been done on the perimeter

00:18:26 --> 00:18:32
of data centers right so the 80% of the

00:18:29 --> 00:18:34
security spent is at the perimeter of a

00:18:31 --> 00:18:36
data center even though a minority the

00:18:33 --> 00:18:37
traffic actually ever leaves the data

00:18:35 --> 00:18:39
center which means if you get beyond

00:18:36 --> 00:18:41
that like when I worked you know in the

00:18:38 --> 00:18:42
intelligence agencies if you get beyond

00:18:40 --> 00:18:45
the perimeter you have unfettered access

00:18:41 --> 00:18:47
to all the data and all the computes so

00:18:44 --> 00:18:49
I'm gonna tell one quick anecdote so so

00:18:46 --> 00:18:52
kay as the time of this recording I'm

00:18:48 --> 00:18:55
39 years old when I got turned 37 on my

00:18:51 --> 00:18:56
birthday my sister sent me an email and

00:18:54 --> 00:18:58
it was a it was a great email is like

00:18:55 --> 00:18:59
you know happy birthday brother I'm so

00:18:57 --> 00:19:06
happy you're my brother there's pictures

00:18:58 --> 00:19:09
of us when we're kids pictures of us and

00:19:05 --> 00:19:11
she said you know I'm very happy to have

00:19:08 --> 00:19:12
hung out with you last week we did hang

00:19:10 --> 00:19:14
out last week and you know you click on

00:19:11 --> 00:19:16
this link for my birthday it was awesome

00:19:13 --> 00:19:17
and like my first thought was it was not

00:19:15 --> 00:19:19
your thought my first thought was like

00:19:17 --> 00:19:22
that's so sweet

00:19:18 --> 00:19:22
my sister's never remembered my

00:19:32 --> 00:19:42
seriously like I've been waiting for

00:19:34 --> 00:19:43
this moment all my life yeah no but for

00:19:41 --> 00:19:46
the reason you know but then I'm like

00:19:42 --> 00:19:47
okay this is this a little this is a

00:19:45 --> 00:19:49
little strange even though there is

00:19:46 --> 00:19:51
pictures of us when we're kids or so far

00:19:48 --> 00:19:52
I mean like and so I looked through the

00:19:50 --> 00:19:55
Bale headers and of course it come from

00:19:51 --> 00:20:01
Russia but listen if my sister was not

00:19:54 --> 00:20:02
forgetful and I wasn't like a semi

00:20:00 --> 00:20:04
technical dude right like him either of

00:20:01 --> 00:20:05
those two things weren't we're

00:20:03 --> 00:20:15
true like I was wondering what your

00:20:04 --> 00:20:17
sister was doing in Russia the reason I

00:20:14 --> 00:20:19
say this is at the time that that email

00:20:16 --> 00:20:20
came in and I was reading it I was

00:20:18 --> 00:20:22
actually logged in behind the firewall

00:20:19 --> 00:20:25
in the data center I was like at work

00:20:21 --> 00:20:26
and so if I would have been infected

00:20:24 --> 00:20:29
that would have been infected behind the

00:20:25 --> 00:20:30
data center and like so many of the

00:20:28 --> 00:20:31
attacks that happened recently that

00:20:29 --> 00:20:32
would have been game over pretty much

00:20:30 --> 00:20:34
whoever would have gotten in would have

00:20:31 --> 00:20:36
gotten behind the data center so you

00:20:33 --> 00:20:40
know I just testified in front of

00:20:35 --> 00:20:42
Congress two weeks ago on exactly this

00:20:39 --> 00:20:43
problem which is you need to push

00:20:41 --> 00:20:45
security all the way into the data

00:20:42 --> 00:20:47
center they're no longer just securing

00:20:44 --> 00:20:48
the premium not just the perimeter and

00:20:46 --> 00:20:50
you need to do in the way that's that's

00:20:47 --> 00:20:53
you know reasonably secure from the

00:20:49 --> 00:20:55
computer science standpoint and you know

00:20:52 --> 00:20:57
this Sdn type approach I believe

00:20:54 --> 00:21:01
provides viable underpinnings for doing

00:20:56 --> 00:21:03
that isn't going deeper into the data

00:21:00 --> 00:21:06
center for security actually inviting

00:21:02 --> 00:21:07
more vulnerabilities it depends on how

00:21:05 --> 00:21:08
you do things so the first one is I

00:21:06 --> 00:21:09
wouldn't ever get rid of the perimeter

00:21:07 --> 00:21:12
is great so the job of the

00:21:08 --> 00:21:13
perimeter is to keep every sociopath

00:21:11 --> 00:21:14
from the planet outside of your data

00:21:12 --> 00:21:16
center yeah but it may or may not be

00:21:13 --> 00:21:18
ffective so you still want to keep the

00:21:15 --> 00:21:20
perimeter there right it's like um

00:21:17 --> 00:21:23
either/or that's exactly so so you want

00:21:19 --> 00:21:24
o add things to the data center also so

00:21:22 --> 00:21:27
it's purely additive in that sense

00:21:23 --> 00:21:28
but you don't want to add it at like an

00:21:26 --> 00:21:30
application level you don't want to like

00:21:27 --> 00:21:32
change the app and you do want to have

00:21:29 --> 00:21:33
application security but that isn't

00:21:31 --> 00:21:34
sufficient because once an application

00:21:32 --> 00:21:36
is attacked then that's like putting

00:21:33 --> 00:21:38
like an on/off switch on the outside of

00:21:35 --> 00:21:39
a house or something right that for an

00:21:37 --> 00:21:41
alarm system so once the application is

00:21:38 --> 00:21:42
attacked you could just turn that off so

00:21:40 --> 00:21:44
you want to have an infrastructure level

00:21:41 --> 00:21:46
that is outside of the hands of the

00:21:43 --> 00:21:48
attacker that's a different attack

00:21:45 --> 00:21:50
surface that provides ubiquitous

00:21:47 --> 00:21:52
ecurity within the data center I mean

00:21:49 --> 00:21:55
that's the idea in some sort of medieval

00:21:51 --> 00:21:59
castle model you know there's cool walls

00:21:54 --> 00:22:01
but you just keep building walls or I

00:21:58 --> 00:22:02
love this now how did we like build

00:22:00 --> 00:22:04
cities in the 1300s when we built these

00:22:01 --> 00:22:05
really big walls and these moats and

00:22:03 --> 00:22:07
then basically hoped that nobody came

00:22:04 --> 00:22:09
over them right but then like you know

00:22:06 --> 00:22:10
in the modern day of like airplanes and

00:22:08 --> 00:22:12
you know whatever like those turned into

00:22:09 --> 00:22:13
imaginal lines if you know like you know

00:22:11 --> 00:22:15
World War 2 right you know you just kind

00:22:12 --> 00:22:16
of fly over them you parachute down so

00:22:14 --> 00:22:18
you basically need to put a sentry at

00:22:15 --> 00:22:19
every house right

00:22:17 --> 00:22:21
by the way this is not this is not any

00:22:18 --> 00:22:23
company or product specific thing this

00:22:20 --> 00:22:26
a general attitude a mindset right

00:22:22 --> 00:22:28
and a mindset yeah about security that's

00:22:25 --> 00:22:30
being adopted kind of kind of broadly

00:22:27 --> 00:22:31
right now and you see many many

00:22:29 --> 00:22:34
companies going down this approach but

00:22:30 --> 00:22:37
we do have to change security and to me

00:22:33 --> 00:22:38
the best way to articulate the objective

00:22:36 --> 00:22:40
is the following I believe the best

00:22:37 --> 00:22:42
security follow something called the

00:22:39 --> 00:22:46
principle of least privilege what is the

00:22:41 --> 00:22:48
principle the principle of least

00:22:45 --> 00:22:51
privilege is the following you can get

00:22:47 --> 00:22:53
exact access to exactly what you need to

00:22:50 --> 00:22:56
get the job done and nothing more so

00:22:52 --> 00:22:57
normally so let's take the day so you're

00:22:55 --> 00:23:00
talking about permissioning kinda like

00:22:56 --> 00:23:01
almost like permission levels I'm just

00:22:59 --> 00:23:02
saying that I will only give you access

00:23:00 --> 00:23:03
to exactly what you need to get the job

00:23:01 --> 00:23:05
done and nothing more so in the case of

00:23:02 --> 00:23:07
the data center if I'm a server

00:23:04 --> 00:23:10
I should really only have to talk to

00:23:06 --> 00:23:12
ther servers that I need to talk to

00:23:09 --> 00:23:14
nothing else but the reality is is you

00:23:11 --> 00:23:16
know if I'm able to compromise a server

00:23:13 --> 00:23:19
I can talk to anything that I want and

00:23:15 --> 00:23:22
so we need to move infrastructure to

00:23:18 --> 00:23:24
this principle of least privilege so

00:23:21 --> 00:23:25
that for example if I do compromise the

00:23:23 --> 00:23:27
server I'm limited to only the things

00:23:24 --> 00:23:29
that that server can talk and so that's

00:23:26 --> 00:23:31
the for me the right mental mind frame

00:23:28 --> 00:23:32
from an infrastructure perspective to to

00:23:30 --> 00:23:35
build more secure systems but the

00:23:31 --> 00:23:36
reality is that because of things like

00:23:34 --> 00:23:39
virtualization and everything else

00:23:35 --> 00:23:41
applications are not neatly contained in

00:23:38 --> 00:23:43
like this linear way like what a single

00:23:40 --> 00:23:45
server set up for a single application

00:23:42 --> 00:23:46
that model has gone away so how do you

00:23:44 --> 00:23:48
then get from the principle of least

00:23:45 --> 00:23:50
privilege to match the reality of how

00:23:47 --> 00:23:53
applications are built this is a

00:23:49 --> 00:23:55
brilliant question like the way that I

00:23:52 --> 00:23:56
think it no seriously so the way that I

00:23:54 --> 00:23:58
think of it is the following which is

00:23:55 --> 00:24:00
the application has evolved into a

00:23:57 --> 00:24:01
network I really believe that so an

00:23:59 --> 00:24:03
application you'd be like I'm running

00:24:00 --> 00:24:05
pac-man but that's no longer the case

00:24:02 --> 00:24:08
now like think about like think about

00:24:04 --> 00:24:10
like one query to Google man like you're

00:24:07 --> 00:24:11
literally touching hundreds of compute

00:24:09 --> 00:24:13
nodes

00:24:10 --> 00:24:15
you know databases balancers fire all

00:24:12 --> 00:24:19
these things are touched in order to get

00:24:14 --> 00:24:21
hat one request done and as a result

00:24:18 --> 00:24:23
you need to evolve infrastructure from a

00:24:20 --> 00:24:24
point solution like a firewall to

00:24:22 --> 00:24:27
something that underlies every one of

00:24:23 --> 00:24:29
those components so have that have the

00:24:26 --> 00:24:31
security and infrastructure model adapt

00:24:28 --> 00:24:32
away to where how applications are

00:24:30 --> 00:24:33
actually built today

00:24:31 --> 00:24:35
trying to take on this thing that would

00:24:32 --> 00:24:37
be impossible to change which is not a

00:24:34 --> 00:24:38
design how applications are built yeah

00:24:36 --> 00:24:40
that's right so I think so the

00:24:37 --> 00:24:43
application has moved from a single

00:24:39 --> 00:24:44
instance to a network of things this

00:24:42 --> 00:24:45
kind of tightly coupled network of

00:24:43 --> 00:24:47
things we're even loosely coupled

00:24:45 --> 00:24:48
networks of things you want the

00:24:46 --> 00:24:51
infrastructure to have enforcement

00:24:47 --> 00:24:52
points that can wrap around all of those

00:24:50 --> 00:24:54
so you can treat the entire thing as a

00:24:51 --> 00:24:55
whole and secure the entire thing as a

00:24:53 --> 00:24:58
whole no matter how distribute it is

00:24:54 --> 00:25:00
I mean infrastructure is a service

00:24:57 --> 00:25:03
discipline right like we build sidewalks

00:24:59 --> 00:25:05
and and and buildings and cities yeah I

00:25:02 --> 00:25:06
mean that's that's what we do so so but

00:25:04 --> 00:25:08
we wanted to adapt to the populace of

00:25:05 --> 00:25:10
the populace adapts if I'm not

00:25:07 --> 00:25:13
stretching the analogy too much our

00:25:09 --> 00:25:14
populace is the application so the

00:25:12 --> 00:25:16
application has moved to this

00:25:13 --> 00:25:17
distributive thing and data centers now

00:25:15 --> 00:25:18
e need to evolve the infrastructure to

00:25:16 --> 00:25:20
have the same type of kind of

00:25:17 --> 00:25:22
lexibility and so forth to be able to

00:25:19 --> 00:25:24
map to that and though that is why

00:25:21 --> 00:25:25
ou're seeing this massive renaissance I

00:25:23 --> 00:25:27
believe in infrastructures because we're

00:25:24 --> 00:25:28
where we add a dead run to keep pace

00:25:26 --> 00:25:29
with the application guys the whole I

00:25:27 --> 00:25:30
mean I think it is important to take a

00:25:28 --> 00:25:32
step back and I should talk about how

00:25:30 --> 00:25:33
computing has changed so much things

00:25:31 --> 00:25:35
that we take for granted I mean we have

00:25:32 --> 00:25:38
way more data than ever before it's

00:25:34 --> 00:25:40
real-time and faster than ever before um

00:25:37 --> 00:25:42
talk about what's coming next

00:25:39 --> 00:25:43
like what do you think is how things are

00:25:41 --> 00:25:46
changing like one thing that fascinates

00:25:42 --> 00:25:48
me is micro-services architecture that

00:25:45 --> 00:25:51
is of course the question and I actually

00:25:47 --> 00:25:53
think the major vectors aren't

00:25:50 --> 00:25:54
necessarily technical in the way we like

00:25:52 --> 00:25:56
to think so I think I think it's cool

00:25:53 --> 00:25:58
and listening I mean like you know like

00:25:55 --> 00:26:01
being a CTO for a long time and and and

00:25:57 --> 00:26:02
having an I love to think about like all

00:26:00 --> 00:26:04
the cool new stuff that's happening but

00:26:01 --> 00:26:06
if I look at what are the major shifts

00:26:03 --> 00:26:08
in the industry it's not super technical

00:26:05 --> 00:26:09
in as much as the following we're seeing

00:26:07 --> 00:26:11
this massive shift and then I asked

00:26:08 --> 00:26:13
myself what is this shift well it seems

00:26:10 --> 00:26:17
to me that we're seeing a couple of

00:26:12 --> 00:26:19
trends number one app developers are

00:26:16 --> 00:26:21
starting to consume infrastructure as

00:26:18 --> 00:26:24
pieces of software that's not really a

00:26:20 --> 00:26:26
technical thing as much as as a shift in

00:26:23 --> 00:26:29
responsibility away from something that

00:26:25 --> 00:26:31
used to be operated by one guy to

00:26:28 --> 00:26:33
becoming basically an object in a

00:26:30 --> 00:26:35
program created by another guy like

00:26:32 --> 00:26:36
Amazon for example or Google whomever

00:26:34 --> 00:26:38
yeah exactly so yeah so these guys are

00:26:35 --> 00:26:40
actually so the developers are starting

00:26:37 --> 00:26:42
to become those that like create

00:26:39 --> 00:26:44
infrastructure and they're becoming part

00:26:41 --> 00:26:45
of programs that's a massive shift to

00:26:43 --> 00:26:47
the industry

00:26:44 --> 00:26:49
for example vendors write adventures are

00:26:46 --> 00:26:51
used to selling to IT people and now

00:26:48 --> 00:26:52
they sell to everyone now they have to

00:26:50 --> 00:26:55
sell everyone and now the buyer is is is

00:26:51 --> 00:26:57
different and and developers are very

00:26:54 --> 00:26:59
different than IT folks right developers

00:26:56 --> 00:27:01
love open-source they love as a service

00:26:58 --> 00:27:02
they've got a different aesthetic they

00:27:00 --> 00:27:04
got a different way of thinking about

00:27:01 --> 00:27:06
he world and so if you're used to like

00:27:03 --> 00:27:09
I mean the traditional IT sales model is

00:27:05 --> 00:27:11
like sales guy huge expense account

00:27:08 --> 00:27:13
briefcase and so we're seeing this

00:27:10 --> 00:27:15
massive shift you know towards the

00:27:12 --> 00:27:17
developer we're seeing and as part of

00:27:14 --> 00:27:18
that you know open source becomes very

00:27:16 --> 00:27:20
important

00:27:17 --> 00:27:21
why does a source become so important

00:27:19 --> 00:27:23
because as part of their aesthetic right

00:27:20 --> 00:27:24
hey like to maintain things I'd like to

00:27:22 --> 00:27:26
understand what they're developing so I

00:27:23 --> 00:27:28
think that's one of the big they get a

00:27:25 --> 00:27:31
huge shift another huge shift is very

00:27:27 --> 00:27:35
similar as a service shipping software's

00:27:30 --> 00:27:37
o hard because you you you give this

00:27:34 --> 00:27:38
offer to them and then you can all these

00:27:36 --> 00:27:40
versions out there and then you have to

00:27:37 --> 00:27:41
maintain then you have to update that

00:27:39 --> 00:27:43
and if there's a problem you have to go

00:27:40 --> 00:27:44
n site to find that doing it as a

00:27:42 --> 00:27:46
service it's so much easier because it's

00:27:43 --> 00:27:48
localized right which is if I like

00:27:45 --> 00:27:51
infrastructure services taking off so

00:27:47 --> 00:27:54
much so I mean like these different ways

00:27:50 --> 00:27:55
of delivering software these different

00:27:53 --> 00:27:56
ways you know the different buying

00:27:54 --> 00:28:00
centers I think this is kind of where a

00:27:55 --> 00:28:02
lot of this change is happening and so

00:27:59 --> 00:28:04
like I'm really you know like you know

00:28:01 --> 00:28:07
having been at VMware for for almost

00:28:03 --> 00:28:09
four years and being across thousands of

00:28:06 --> 00:28:11
customers I mean it's just so apparent

00:28:08 --> 00:28:13
hat this shift is happening yeah I

00:28:10 --> 00:28:14
think actually I'm really glad you

00:28:12 --> 00:28:15
pointed that out because we have a

00:28:13 --> 00:28:18
tendency to get so caught up in the

00:28:14 --> 00:28:19
technological aspects of things that we

00:28:17 --> 00:28:21
forget the business model and

00:28:18 --> 00:28:24
organizational structural implications

00:28:20 --> 00:28:25
of things like software as a service how

00:28:23 --> 00:28:28
it reshapes companies buying processes

00:28:24 --> 00:28:29
ales everything around it and I also

00:28:27 --> 00:28:30
think it's really interesting you

00:28:28 --> 00:28:32
focused on something we're really

00:28:29 --> 00:28:34
interested in which is talking about

00:28:31 --> 00:28:37
selling to developers as a new class of

00:28:33 --> 00:28:38
sales what are some of the other things

00:28:36 --> 00:28:40
about selling to developers you've

00:28:37 --> 00:28:42
noticed well I mean it's just a it just

00:28:39 --> 00:28:44
everything about it is different like

00:28:41 --> 00:28:49
marketing is different right it's no

00:28:43 --> 00:28:51
longer about you know like a you know a

00:28:48 --> 00:28:53
marketing campaign where you go out

00:28:50 --> 00:28:54
here and you bring a bunch of customers

00:28:52 --> 00:28:56
in and you give them a class or so forth

00:28:53 --> 00:28:57
ings like actually having open source

00:28:55 --> 00:28:58
out there that developers are going to

00:28:56 --> 00:29:01
use on their own whether

00:28:57 --> 00:29:04
home demo and test and buy as per the

00:29:00 --> 00:29:06
buying process yeah absolutely so so so

00:29:03 --> 00:29:07
pen source becomes very viable

00:29:05 --> 00:29:09
marketing still like open source is

00:29:06 --> 00:29:11
marketing never nobody thought of it no

00:29:08 --> 00:29:13
but it totally is right I mean it's it's

00:29:10 --> 00:29:15
mean think about how many companies have

00:29:12 --> 00:29:16
been created out of successful open

00:29:14 --> 00:29:21
source product right yeah it's a trap

00:29:15 --> 00:29:23
before you buy it yeah yeah yeah I mean

00:29:20 --> 00:29:25
it basically creates your early customer

00:29:22 --> 00:29:26
base here or you know it does all of

00:29:24 --> 00:29:29
this sourcing for you but also gives you

00:29:25 --> 00:29:32
the credibility like a traditional IT

00:29:28 --> 00:29:35
sale briefcase walk-in talk to the IT

00:29:31 --> 00:29:37
buyer do some ROI calculations have a

00:29:34 --> 00:29:38
nice dinner a great bottle of wine you

00:29:36 --> 00:29:41
know you try and figure it out you get a

00:29:37 --> 00:29:42
deal done talking to the developer I

00:29:40 --> 00:29:43
mean they have to understand the

00:29:41 --> 00:29:45
technology right this is their

00:29:42 --> 00:29:46
livelihood to like integrate these in

00:29:44 --> 00:29:49
their things they have to maintain it

00:29:45 --> 00:29:50
all the time so generally if they don't

00:29:48 --> 00:29:52
know what you're selling a developer

00:29:49 --> 00:29:53
they haven't used it before they don't

00:29:51 --> 00:29:55
understand the implications just hard

00:29:52 --> 00:29:57
but if you wrap it around an existing

00:29:54 --> 00:29:59
open source project they'll have seen it

00:29:56 --> 00:30:01
already comfortable so fascinating

00:29:58 --> 00:30:02
because what you said about how many

00:30:00 --> 00:30:03
company what you guys are saying about

00:30:01 --> 00:30:05
how many companies have been built on

00:30:02 --> 00:30:06
open source what you're saying is

00:30:04 --> 00:30:08
actually more precise because most

00:30:05 --> 00:30:10
people have a tendency to conflate an

00:30:07 --> 00:30:11
open source project with oh it didn't

00:30:09 --> 00:30:13
lead to this company but what you're

00:30:10 --> 00:30:15
ally saying is something very nuanced

00:30:12 --> 00:30:18
and different about open source as a

00:30:14 --> 00:30:21
vector to to the buying process it's so

00:30:17 --> 00:30:22
just such a difference and what's

00:30:20 --> 00:30:24
interesting about this is there's

00:30:21 --> 00:30:26
implications as to what type of company

00:30:23 --> 00:30:28
ou build as a result I still believe

00:30:25 --> 00:30:29
the entire industry is trying to

00:30:27 --> 00:30:31
understand what it means from a business

00:30:28 --> 00:30:33
model perspective so you kind of solve

00:30:30 --> 00:30:36
your sourcing problem with open source

00:30:32 --> 00:30:37
you know you can you can source and be

00:30:35 --> 00:30:38
formal marketing something you can

00:30:36 --> 00:30:40
source and get early customers you get

00:30:37 --> 00:30:42
raction it solves the insertion problem

00:30:39 --> 00:30:44
well the typical insertion problem is

00:30:41 --> 00:30:45
very hard to get inserted like if they

00:30:43 --> 00:30:47
don't if you don't have an existing

00:30:44 --> 00:30:48
relationship if you're not IBM and you

00:30:46 --> 00:30:50
don't have IBM account control you're

00:30:47 --> 00:30:52
not Sisk you don't have cisco control

00:30:49 --> 00:30:54
actually getting inserted it's very very

00:30:51 --> 00:30:55
hard open source often solves the

00:30:53 --> 00:30:57
insertion problem they're already

00:30:54 --> 00:30:59
dealing with you know like the developer

00:30:56 --> 00:31:00
is already using it at home and using it

00:30:58 --> 00:31:02
in Amazon and using it anywhere else so

00:30:59 --> 00:31:04
you're already there used it at their

00:31:01 --> 00:31:05
last job or whatever that's right

00:31:03 --> 00:31:08
you're already inserted you're already

00:31:04 --> 00:31:10
there it's a massive marketing thing but

00:31:07 --> 00:31:11
here's implications on the back end

00:31:09 --> 00:31:12
which is a how do you build a viable

00:31:10 --> 00:31:15
business around that

00:31:11 --> 00:31:16
Silicon Valley loves software companies

00:31:14 --> 00:31:18
because you get a reputable product to

00:31:15 --> 00:31:20
market with a really high margin and

00:31:17 --> 00:31:22
high multiples but if you start looking

00:31:19 --> 00:31:24
around a lot of the open source business

00:31:21 --> 00:31:26
balls it looks a little bit like a PSO

00:31:23 --> 00:31:26
company which is lower margins and

00:31:25 --> 00:31:29
harder

00:31:25 --> 00:31:32
sorry professional sales or professional

00:31:28 --> 00:31:34
services company it looks more like you

00:31:31 --> 00:31:34
know here's the software is for free but

00:31:33 --> 00:31:36
we're gonna give you professional

00:31:33 --> 00:31:38
services as part of that engagement

00:31:35 --> 00:31:40
hat's a much more expensive thing to do

00:31:37 --> 00:31:43
right it's it's harder to scale from a

00:31:39 --> 00:31:44
company standpoint and so I believe the

00:31:42 --> 00:31:47
ntire industry is going through this

00:31:43 --> 00:31:49
kind of this this this period of inquiry

00:31:46 --> 00:31:52
where we all realize that open-source is

00:31:48 --> 00:31:53
part of the buying process if you want

00:31:51 --> 00:31:55
o ship software what does that mean to

00:31:52 --> 00:31:57
the business model standpoint which i

00:31:54 --> 00:31:59
think is a fascinating question now as a

00:31:56 --> 00:32:01
service is really nice because you get

00:31:59 --> 00:32:03
like you look like a software company

00:32:00 --> 00:32:04
and you don't have to do a PSO model so

00:32:02 --> 00:32:06
maybe the answer is that most things

00:32:03 --> 00:32:07
will become as a service over time tell

00:32:05 --> 00:32:10
us a little bit about your

00:32:06 --> 00:32:11
transformation from PhD to CTO a lot of

00:32:09 --> 00:32:13
our founders go through that very

00:32:10 --> 00:32:14
process where they've been doing

00:32:12 --> 00:32:16
something they're really passionate

00:32:13 --> 00:32:18
about it whether it's through school or

00:32:15 --> 00:32:20
they just immerse themselves in it by

00:32:17 --> 00:32:23
just learning by doing and then to

00:32:19 --> 00:32:24
actually become the leader I think a

00:32:22 --> 00:32:26
major leader at the company like was

00:32:23 --> 00:32:29
that a big shift for you so you see the

00:32:25 --> 00:32:31
CTO it was straightforward it's becoming

00:32:28 --> 00:32:33
a business leader I'm a GM now right I'm

00:32:30 --> 00:32:35
really I'm a business manager for you

00:32:32 --> 00:32:36
know nearly a thousand people six

00:32:34 --> 00:32:37
hundred million dollar run right

00:32:35 --> 00:32:38
business and that's the transformation

00:32:36 --> 00:32:43
that's been more different

00:32:38 --> 00:32:45
and so I mean I think here I think I was

00:32:42 --> 00:32:56
actually basically forged in a volcano

00:32:44 --> 00:32:58
which is it sounds like the ring so in

00:32:55 --> 00:33:00
PhD which is just I mean it's just

00:32:57 --> 00:33:01
school right and you're just spending a

00:32:59 --> 00:33:03
tremendous amount of time thinking about

00:33:00 --> 00:33:04
one thing the problem is while you're

00:33:02 --> 00:33:06
doing that you get very refined in what

00:33:03 --> 00:33:07
you think about right you know and so

00:33:05 --> 00:33:09
you go to do a startup company and again

00:33:06 --> 00:33:11
this is the heady days of 2007 raising

00:33:08 --> 00:33:12
money was so easy we didn't really know

00:33:10 --> 00:33:14
like we had this idea but we didn't

00:33:11 --> 00:33:17
really know exactly what that looks like

00:33:13 --> 00:33:20
and then I just got you know hit in the

00:33:16 --> 00:33:22
face by a chainsaw when the market

00:33:19 --> 00:33:24
imploded so here I had 12 people I'd

00:33:21 --> 00:33:25
convinced him to join they had families

00:33:23 --> 00:33:28
they were having kids

00:33:24 --> 00:33:30
and it was my responsibility it was a

00:33:27 --> 00:33:32
really hard time I mean Sequoyah have

00:33:29 --> 00:33:35
released their rest in peace good times

00:33:31 --> 00:33:37
lide deck so many companies were going

00:33:34 --> 00:33:38
out of business like every week another

00:33:36 --> 00:33:40
one was going out of business

00:33:37 --> 00:33:41
unemployment shot up it was the worst

00:33:39 --> 00:33:44
housing market since the Great

00:33:40 --> 00:33:47
Depression and at that point in time I

00:33:43 --> 00:33:48
basically had a real basically hit with

00:33:46 --> 00:33:50
e realization that everything I

00:33:47 --> 00:33:52
learned the PhD was a distraction and I

00:33:49 --> 00:33:55
really mean that as a distraction which

00:33:51 --> 00:33:58
is pretty much every motion every motion

00:33:54 --> 00:34:00
of mine needed to be doing something

00:33:57 --> 00:34:03
incremental and doing something concrete

00:33:59 --> 00:34:05
to keep people fed which is exactly the

00:34:02 --> 00:34:09
opposite P so P PhD is about I'm gonna

00:34:04 --> 00:34:11
do a Hail Mary and honestly maybe you

00:34:08 --> 00:34:13
know three generations ahead of somebody

00:34:10 --> 00:34:15
who will care but like if someone cares

00:34:12 --> 00:34:16
now it's it's not novel enough and then

00:34:14 --> 00:34:18
I was stuck in a situation where I felt

00:34:15 --> 00:34:21
so deeply responsible for a set of

00:34:17 --> 00:34:23
people and I knew that every motion had

00:34:20 --> 00:34:28
to be something that was obvious low

00:34:22 --> 00:34:31
risk and was incremental and get his

00:34:27 --> 00:34:33
customers get us funding you know I mean

00:34:30 --> 00:34:35
it was just it's just such a different

00:34:32 --> 00:34:37
shift between let's do something just so

00:34:34 --> 00:34:39
abstract that you know finding people

00:34:36 --> 00:34:42
that care is hard to here's how we're

00:34:38 --> 00:34:44
gonna stay stay viable and so we spent

00:34:41 --> 00:34:45
wo years at about 12 people if we

00:34:43 --> 00:34:47
didn't grow at all we stayed very

00:34:44 --> 00:34:49
focused and I mean so many times I was

00:34:46 --> 00:34:51
in the dáil the tailspin so many times

00:34:48 --> 00:34:55
in the void not knowing how we're gonna

00:34:50 --> 00:34:59
pull it out but through that experience

00:34:54 --> 00:35:00
I became exceptionally practical about

00:34:58 --> 00:35:03
it and then I think having the

00:34:59 --> 00:35:05
xperience of the PhD and on the

00:35:02 --> 00:35:07
technical side just became something

00:35:04 --> 00:35:08
that I can use when I need to but I

00:35:06 --> 00:35:10
certainly don't use it away to guide my

00:35:07 --> 00:35:12
thinking especially not with with with

00:35:09 --> 00:35:14
building companies and so now I

00:35:11 --> 00:35:17
find that a much much more practical

00:35:13 --> 00:35:21
much more focused on the business side

00:35:16 --> 00:35:23
just because of that this is a little

00:35:20 --> 00:35:26
bit like a homecoming and Ben and Mark

00:35:22 --> 00:35:28
invested in nice Sarah before and recent

00:35:25 --> 00:35:31
horse was even formed I guess and yeah

00:35:27 --> 00:35:35
and so what's it like coming home and

00:35:30 --> 00:35:36
why like you moved out like why how

00:35:34 --> 00:35:38
did they make the decision to invest in

00:35:35 --> 00:35:39
you I mean you were a student weren't

00:35:37 --> 00:35:41
you at

00:35:38 --> 00:35:42
no no we did we just spun out we were

00:35:40 --> 00:35:43
still a research group you know what's

00:35:41 --> 00:35:44
interesting is the time that they

00:35:42 --> 00:35:47
invested in us was during the nuclear

00:35:43 --> 00:35:49
winter of 2008 if you guys remember and

00:35:46 --> 00:35:52
so like you know I kind of popped out of

00:35:48 --> 00:35:53
school in the heady days of 2007 the

00:35:51 --> 00:35:55
implosion happened in the end of that

00:35:52 --> 00:35:57
year and then I met mark and Ben after

00:35:54 --> 00:36:00
then in fact in fact I met mark for the

00:35:56 --> 00:36:01
first time in in NIEM I sat down with

00:35:59 --> 00:36:04
im and you know he had that little

00:36:00 --> 00:36:04
notepad that he still carries around

00:36:05 --> 00:36:12
like a new PhD kinda naive guy and I sat

00:36:08 --> 00:36:14
down and I basically said listen like um

00:36:11 --> 00:36:16
networking is gonna change I think I can

00:36:13 --> 00:36:17
show you all of these things if you if

00:36:15 --> 00:36:19
you live you know if you look behind the

00:36:16 --> 00:36:20
curtain at Google or if you look at

00:36:18 --> 00:36:22
what's happening with virtualization

00:36:19 --> 00:36:25
it's gonna happen for sure and he

00:36:21 --> 00:36:26
listened very very well it took very

00:36:24 --> 00:36:27
good notes but then he said listen you

00:36:25 --> 00:36:29
know we think that you know this is

00:36:26 --> 00:36:31
interesting so they invested this before

00:36:28 --> 00:36:33
the fund even existed honestly the the

00:36:30 --> 00:36:35
reason to come back to answer your

00:36:32 --> 00:36:38
question is is my excitement and the

00:36:34 --> 00:36:40
reason I'm going into VC is because you

00:36:37 --> 00:36:41
know in a transformation this size comes

00:36:39 --> 00:36:43
you can decide to participate along once

00:36:40 --> 00:36:44
a particular vector or across it and

00:36:42 --> 00:36:46
I've decided I want to have a broad

00:36:43 --> 00:36:48
participation I want to help I want to

00:36:45 --> 00:36:49
help fund the next transformation that's

00:36:47 --> 00:36:51
gonna happen and be deeply involved in

00:36:48 --> 00:36:53
that and then the way that I want to do

00:36:50 --> 00:36:54
this is the model that andreessen

00:36:52 --> 00:36:56
horowitz did just because I believe so

00:36:53 --> 00:36:58
fundamentally in the model having been a

00:36:55 --> 00:36:58
product of it margin we look we look

00:36:57 --> 00:37:01
forward to work with you more and

00:36:57 --> 00:37:04
talking more and thanks for joining the

00:37:00 --> 00:37:06
a 16z podcast for the first end of many

00:37:03 --> 00:37:09
times yes thank you welcome you guys

00:37:05 --> 00:37:09
this is great

<!-- YOUTUBE_TRANSCRIPT_END -->
