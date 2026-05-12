---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "iwcYp-XT7UI"
title: "George Hotz: Comma.ai, OpenPilot, and Autonomous Vehicles | Lex Fridman Podcast #31"
video_url: "https://www.youtube.com/watch?v=iwcYp-XT7UI"
thumbnail_url: "https://i.ytimg.com/vi/iwcYp-XT7UI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=iwcYp-XT7UI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-08-05T14:21:05.000Z"
upload_date: "2019-08-05"
duration_seconds: 7176
duration_human: "1:59:36"
view_count: 870307
like_count: 20645
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:09:12.327Z"
---

# George Hotz: Comma.ai, OpenPilot, and Autonomous Vehicles | Lex Fridman Podcast #31

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=iwcYp-XT7UI
- video_id: iwcYp-XT7UI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-08-05T14:21:05.000Z
- upload_date: 2019-08-05
- duration: 1:59:36
- view_count: 870307
- like_count: 20645
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:06
George Hotz he's the founder of comma AI

00:00:04 --> 00:00:09
a machine learning based vehicle

00:00:05 --> 00:00:11
automation company he is most certainly

00:00:08 --> 00:00:14
an outspoken personality in the field of

00:00:10 --> 00:00:16
AI and technology in general he first

00:00:13 --> 00:00:19
gained recognition for being the first

00:00:15 --> 00:00:21
person to carry or unlock an iPhone and

00:00:18 --> 00:00:23
since then he's done quite a few

00:00:20 --> 00:00:26
interesting things at the intersection

00:00:22 --> 00:00:28
of hardware and software this is the

00:00:25 --> 00:00:30
artificial intelligence podcast if you

00:00:27 --> 00:00:32
enjoy it subscribe on YouTube give it

00:00:29 --> 00:00:34
five stars on iTunes supported on

00:00:31 --> 00:00:38
patreon or simply connect with me on

00:00:33 --> 00:00:41
Twitter at lex friedman spelled fri d-m

00:00:37 --> 00:00:44
a.m. and i'd like to give a special

00:00:40 --> 00:00:46
thank you to Jennifer from Canada for

00:00:43 --> 00:00:49
her support of the podcast on patreon

00:00:45 --> 00:00:51
merci beaucoup Jennifer she's been a

00:00:48 --> 00:00:53
friend and an engineering colleague for

00:00:50 --> 00:00:56
many years since I was in grad school

00:00:52 --> 00:00:59
your support means a lot and inspires me

00:00:55 --> 00:01:03
to keep this series going and now here's

00:00:58 --> 00:01:07
my conversation with George Hotz do you

00:01:02 --> 00:01:07
think we're living in a simulation

00:01:06 --> 00:01:13
yes but it may be unfalsifiable what do

00:01:10 --> 00:01:17
you mean by unfalsifiable so if the

00:01:12 --> 00:01:20
simulation is designed in such a way

00:01:16 --> 00:01:22
that they did like a formal proof to

00:01:19 --> 00:01:24
show that no information can get in and

00:01:21 --> 00:01:27
out and if their hardware is designed to

00:01:23 --> 00:01:29
for the anything in the simulation to

00:01:26 --> 00:01:30
always keep the hardware in spec it may

00:01:28 --> 00:01:32
be impossible to prove whether we're in

00:01:29 --> 00:01:35
a simulation or not

00:01:31 --> 00:01:37
so they've designed it such there's the

00:01:34 --> 00:01:38
closed system you can't get outside of

00:01:36 --> 00:01:39
the system

00:01:37 --> 00:01:41
well maybe it's one of three worlds

00:01:38 --> 00:01:43
we're either in a simulation which can

00:01:40 --> 00:01:45
be exploited we're in a simulation which

00:01:42 --> 00:01:48
not only can't be exploited but like the

00:01:44 --> 00:01:50
same things too about VMs I'm a really

00:01:47 --> 00:01:52
well-designed VM you can't even detect

00:01:49 --> 00:01:53
if you're in a VM or not that's

00:01:51 --> 00:01:55
brilliant

00:01:52 --> 00:01:58
so where it's yeah so the simulation is

00:01:54 --> 00:01:59
running in a virtual machine but now in

00:01:57 --> 00:02:02
reality all VMs have wasted the fact

00:01:58 --> 00:02:04
hat's the point I mean is it

00:02:01 --> 00:02:06
yeah you've done quite a bit of hacking

00:02:03 --> 00:02:09
yourself and so you should know that

00:02:06 --> 00:02:13
really any complicated system will have

00:02:08 --> 00:02:16
ways in and out so this isn't

00:02:12 --> 00:02:20
necessarily true going forward I spent

00:02:15 --> 00:02:23
my time away from comma I learned

00:02:19 --> 00:02:25
and said dependently typed like it's a

00:02:22 --> 00:02:27
language for writing math proofs and if

00:02:24 --> 00:02:28
you write code that compiles in a

00:02:26 --> 00:02:32
language like that

00:02:27 --> 00:02:35
it is correct by definition the types

00:02:31 --> 00:02:36
check it's correct and so it's possible

00:02:34 --> 00:02:40
that the simulation is written in a

00:02:35 --> 00:02:43
language like this in which case yeah

00:02:39 --> 00:02:44
but that can't be sufficiently

00:02:42 --> 00:02:49
expressive a language like that all

00:02:43 --> 00:02:50
weekend it can be yeah okay well so all

00:02:48 --> 00:02:52
right so the simulation doesn't have to

00:02:49 --> 00:02:54
be tiring complete if it has a scheduled

00:02:51 --> 00:02:56
end date looks like it does actually

00:02:53 --> 00:03:00
with entropy and you know I don't think

00:02:55 --> 00:03:04
that a simulation that results in

00:02:59 --> 00:03:07
something as complicated in universe

00:03:03 --> 00:03:11
would have a formal proof of correctness

00:03:06 --> 00:03:14
right as as possible of course we have

00:03:10 --> 00:03:15
no idea how good their tooling is and we

00:03:13 --> 00:03:17
have no idea how complicated the

00:03:14 --> 00:03:20
universe computer really is it may be

00:03:16 --> 00:03:23
quite simple it's just very large right

00:03:19 --> 00:03:25
it's very it's definitely very large but

00:03:22 --> 00:03:26
he fundamental rules might be super

00:03:24 --> 00:03:31
simple yeah Conway's gonna live kind of

00:03:25 --> 00:03:33
stuff right so if you could hack it so

00:03:30 --> 00:03:37
imagine the simulation that is hackable

00:03:32 --> 00:03:39
if you could hack it what would you

00:03:36 --> 00:03:42
change about the you know like how would

00:03:38 --> 00:03:46
you approach hacking a simulation the

00:03:41 --> 00:03:47
reason I gave that talk I by the way I'm

00:03:45 --> 00:03:50
not familiar with the talk he gave I

00:03:46 --> 00:03:52
just read that you talked about escaping

00:03:49 --> 00:03:54
the simulation yeah like that so maybe

00:03:51 --> 00:03:56
you can tell me a little bit about the

00:03:53 --> 00:03:59
me and the message there - it wasn't

00:03:55 --> 00:04:02
a very practical talk about how to

00:03:58 --> 00:04:04
actually escape a simulation it was more

00:04:01 --> 00:04:10
about a way of restructuring an

00:04:03 --> 00:04:12
us-versus-them narrative if we continue

00:04:09 --> 00:04:14
on the path we're going with technology

00:04:11 --> 00:04:17
I think we're in big trouble

00:04:13 --> 00:04:18
like as a species and not just as a

00:04:16 --> 00:04:21
species but even as me as an individual

00:04:17 --> 00:04:25
member of the species so if we could

00:04:20 --> 00:04:29
change rhetoric to be more like to think

00:04:24 --> 00:04:30
upwards like to think about that we're

00:04:28 --> 00:04:33
in a simulation and how we could get out

00:04:29 --> 00:04:35
already we'd be on the right path what

00:04:32 --> 00:04:37
you actually do once you do that while I

00:04:34 --> 00:04:39
assume I would have acquired way more

00:04:36 --> 00:04:41
intelligence in the process of doing

00:04:38 --> 00:04:44
that so I'll just ask that so the the

00:04:40 --> 00:04:46
thinking upwards what kind of ideas what

00:04:43 --> 00:04:48
kind of breakthrough ideas do you think

00:04:45 --> 00:04:51
ing in that way could inspire and

00:04:47 --> 00:04:53
what did you say upwards upwards into

00:04:50 --> 00:04:56
space are you thinking sort of

00:04:52 --> 00:04:59
exploration in all forms the space

00:04:55 --> 00:05:02
narrative that held for the modernist

00:04:58 --> 00:05:04
generation doesn't hold as well for the

00:05:01 --> 00:05:06
postmodern generation

00:05:03 --> 00:05:08
what's the space narrator we're talking

00:05:05 --> 00:05:09
about the same space the dimensional

00:05:07 --> 00:05:11
space like going a little ace is like

00:05:08 --> 00:05:12
building like yuan mosque like we're

00:05:10 --> 00:05:13
gonna build rockets we're gonna go to

00:05:11 --> 00:05:16
Mars we're gonna colonize the universe

00:05:12 --> 00:05:17
and the narrative your friend was born

00:05:15 --> 00:05:19
in the Soviet Union you're referring to

00:05:16 --> 00:05:22
the race to space the race to space

00:05:18 --> 00:05:24
xplore okay that was a great modernist

00:05:21 --> 00:05:26
narrative

00:05:23 --> 00:05:30
it doesn't seem to hold the same weight

00:05:25 --> 00:05:33
in today's culture I'm hoping for good

00:05:29 --> 00:05:35
postmodern narratives that replace it so

00:05:32 --> 00:05:38
think let's think so you work a lot with

00:05:34 --> 00:05:41
AI so the eyes one formulation of that

00:05:37 --> 00:05:42
narrative there could be also I don't

00:05:40 --> 00:05:45
know how much you do in VR and they are

00:05:41 --> 00:05:47
yeah that's another eye I know less

00:05:44 --> 00:05:49
about it but every time I play with it

00:05:46 --> 00:05:51
and our research is fascinating that

00:05:48 --> 00:05:53
virtual world are you are you interested

00:05:50 --> 00:05:56
in the virtual world I would like to

00:05:52 --> 00:05:57
move to a virtual reality in terms of

00:05:55 --> 00:05:58
your work

00:05:56 --> 00:06:01
no I would like to physically move there

00:05:57 --> 00:06:02
the apartment I can rent in the cloud is

00:06:00 --> 00:06:05
way better in the apartment I can rent

00:06:01 --> 00:06:07
in the real world well it's all relative

00:06:04 --> 00:06:08
isn't it because others will have very

00:06:06 --> 00:06:10
nice departments too so you'll be

00:06:07 --> 00:06:12
inferior in the virtual world that's not

00:06:09 --> 00:06:14
how I view the world right I don't view

00:06:11 --> 00:06:17
the world I mean it's very like like

00:06:13 --> 00:06:19
almost zero-sum issue a to view the

00:06:16 --> 00:06:21
world say like my great apartment isn't

00:06:18 --> 00:06:22
great because my neighbor has one - no

00:06:20 --> 00:06:25
my great apartment is great because like

00:06:21 --> 00:06:26
look at this dishwasher man yeah you

00:06:24 --> 00:06:29
just touch the dish and it's washed

00:06:25 --> 00:06:31
right and that is great in and of itself

00:06:28 --> 00:06:32
if I have the only apartment or if

00:06:30 --> 00:06:35
everybody had the apartment I don't care

00:06:31 --> 00:06:39
so you have fundamental gratitude the

00:06:34 --> 00:06:43
world first learned of Geo ha George

00:06:38 --> 00:06:45
Hotz in August 2007 maybe before then

00:06:42 --> 00:06:48
but certainly in August 2007 when you

00:06:44 --> 00:06:50
were the first person to unlock carry

00:06:47 --> 00:06:53
unlock an iPhone how did you get into

00:06:49 --> 00:06:55
hacking what was the first system you

00:06:52 --> 00:07:01
discovered vulnerabilities for and broke

00:06:54 --> 00:07:04
into so that was really kind of the

00:07:00 --> 00:07:09
first thing I had I had a book in in

00:07:03 --> 00:07:13
2006 called grey hat hacking and I guess

00:07:08 --> 00:07:15
I realized that if you acquired these

00:07:12 --> 00:07:19
sort of powers you could control the

00:07:14 --> 00:07:22
world but I didn't really know that much

00:07:18 --> 00:07:24
about computers back then I started with

00:07:21 --> 00:07:26
electronics the first iPhone hack was

00:07:23 --> 00:07:29
physical card work um you had to open it

00:07:25 --> 00:07:31
up and pull an address line high and it

00:07:28 --> 00:07:32
was because I didn't really know about

00:07:30 --> 00:07:34
software exploitation I learned that all

00:07:31 --> 00:07:37
in the next few years and I got very

00:07:33 --> 00:07:38
good at it but back then I knew about

00:07:36 --> 00:07:40
like how men

00:07:37 --> 00:07:41
chips are connected to processors and he

00:07:39 --> 00:07:44
knew about software and programming

00:07:40 --> 00:07:47
he didn't didn't know I'll really see

00:07:43 --> 00:07:49
you the view of the world and computers

00:07:46 --> 00:07:52
was physical was the most hard work

00:07:48 --> 00:07:53
actually if you read the code that I

00:07:51 --> 00:07:56
released with that

00:07:52 --> 00:07:59
in August 2007 it's atrocious

00:07:55 --> 00:08:02
the language was it a C say yes and in a

00:07:58 --> 00:08:05
broken sort of state machine SC I didn't

00:08:01 --> 00:08:07
know how to program man so how did you

00:08:04 --> 00:08:10
learn to program

00:08:06 --> 00:08:12
what was your journey cuz I mean we'll

00:08:09 --> 00:08:14
talk about it you've live streams from

00:08:11 --> 00:08:16
your programming man this is a chaotic

00:08:13 --> 00:08:19
beautiful mess how did you arrive at

00:08:15 --> 00:08:23
hat years and years of practice I

00:08:18 --> 00:08:26
interned at Google after the summer

00:08:22 --> 00:08:28
after the iPhone unlock and I did a

00:08:25 --> 00:08:30
contract for them where I built hardware

00:08:27 --> 00:08:33
for for Street View and I wrote a

00:08:29 --> 00:08:36
software library to interact with it and

00:08:32 --> 00:08:38
it was terrible code and for the first

00:08:35 --> 00:08:40
ime I got feedback from people who I

00:08:37 --> 00:08:44
respected saying you know like don't

00:08:39 --> 00:08:46
write code like this now of course just

00:08:43 --> 00:08:52
getting that feedback is not enough the

00:08:45 --> 00:08:53
way that I really got good was I wanted

00:08:51 --> 00:08:58
to write this thing like that could

00:08:52 --> 00:09:00
emulate and then visualize like armed

00:08:57 --> 00:09:01
binaries because I wanted to hack the

00:08:59 --> 00:09:03
iPhone better and I didn't like that I

00:09:00 --> 00:09:04
couldn't like see what that I couldn't

00:09:02 --> 00:09:05
single step through the processor

00:09:03 --> 00:09:07
because I had no debugger on there

00:09:04 --> 00:09:08
specially for the low level things like

00:09:06 --> 00:09:11
the boot ROM in the bootloader so I

00:09:07 --> 00:09:14
tried to build this tool to do it

00:09:10 --> 00:09:15
and I built the tool once and it was

00:09:13 --> 00:09:16
terrible I built the tool second times

00:09:14 --> 00:09:17
it was terrible

00:09:15 --> 00:09:18
I built the tool third time this by the

00:09:16 --> 00:09:19
time I was at Facebook it was kind of

00:09:17 --> 00:09:21
okay

00:09:18 --> 00:09:23
and then I built the tool fourth time

00:09:20 --> 00:09:24
when I was a Google intern again in 2014

00:09:22 --> 00:09:27
and that was the first time I was like

00:09:23 --> 00:09:28
this is finally usable how do you

00:09:26 --> 00:09:32
pronounce this kira-kira yeah

00:09:27 --> 00:09:35
so it's essentially the most efficient

00:09:31 --> 00:09:37
way to visualize the change of state of

00:09:34 --> 00:09:40
the computer as the program is running

00:09:36 --> 00:09:43
that's what I mean by debugger yeah it's

00:09:39 --> 00:09:46
a timeless debugger so you can rewind

00:09:42 --> 00:09:47
just as easily as going forward think

00:09:45 --> 00:09:49
about if you're using gdb you have to

00:09:46 --> 00:09:51
put a watch on a variable if you want to

00:09:48 --> 00:09:52
see if that variable changes and Kure

00:09:50 --> 00:09:54
you can just click on that variable and

00:09:51 --> 00:09:56
then it shows every single time when

00:09:53 --> 00:09:58
that variable was changed or accessed

00:09:55 --> 00:10:01
think about it like get for your

00:09:57 --> 00:10:06
computers uh the run lock so there's

00:10:00 --> 00:10:07
like a deep log of of the state of the

00:10:05 --> 00:10:11
computer as the program runs and you can

00:10:06 --> 00:10:13
rewind why isn't that maybe it is maybe

00:10:10 --> 00:10:15
you can educate me what isn't that kind

00:10:12 --> 00:10:16
of debugging used more often ah because

00:10:14 --> 00:10:19
the tooling is bad

00:10:15 --> 00:10:22
well two things one if you're trying to

00:10:18 --> 00:10:26
debug chrome chrome is a 200 megabyte

00:10:21 --> 00:10:27
binary that runs slowly on desktops so

00:10:25 --> 00:10:29
that's going to be really hard to use

00:10:26 --> 00:10:32
for that but it's really good to use for

00:10:28 --> 00:10:35
like CTFs and for boot roms and for

00:10:31 --> 00:10:36
small parts of code so it's it's hard if

00:10:34 --> 00:10:38
you're trying to debug like massive

00:10:35 --> 00:10:40
systems what's the CTF and what's the

00:10:37 --> 00:10:42
boot ROM the boot ROM is the first code

00:10:39 --> 00:10:45
that executes it's the minute you give

00:10:41 --> 00:10:47
power to your iPhone okay and CTF were

00:10:44 --> 00:10:48
these competitions that I played capture

00:10:46 --> 00:10:50
the flag to capture the flag I was going

00:10:47 --> 00:10:51
to ask you about that what are those

00:10:49 --> 00:10:54
LaVette I watched a couple videos on

00:10:50 --> 00:10:56
YouTube those look fascinating what have

00:10:53 --> 00:10:57
you learned about maybe at the high

00:10:55 --> 00:11:02
level of vulnerability of systems from

00:10:56 --> 00:11:05
these competitions the like I feel like

00:11:01 --> 00:11:08
in the heyday of CTFs you had all

00:11:04 --> 00:11:11
of the best security people in the world

00:11:07 --> 00:11:14
challenging each other and coming up

00:11:10 --> 00:11:15
with new toy exploitable things over

00:11:13 --> 00:11:17
here and then everybody okay who can

00:11:14 --> 00:11:18
break it and when you break it you get

00:11:16 --> 00:11:21
like there's like a file on the server

00:11:17 --> 00:11:22
called flag and then there's a program

00:11:20 --> 00:11:25
running listening on a socket that's

00:11:21 --> 00:11:27
vulnerable so you write an exploit you

00:11:24 --> 00:11:28
she'll and then you cat flag and then

00:11:26 --> 00:11:30
you type the flag into like a web-based

00:11:27 --> 00:11:33
scoreboard and you get points so the

00:11:29 --> 00:11:34
goal is essentially to find an exploit

00:11:32 --> 00:11:38
in the system that allows you to run

00:11:33 --> 00:11:40
shell to run arbitrary code on that

00:11:37 --> 00:11:43
system that's one of the categories

00:11:39 --> 00:11:45
that's like the PO noble category

00:11:42 --> 00:11:46
vulnerable

00:11:44 --> 00:11:48
yeah horrible it's like you know you

00:11:45 --> 00:11:53
pwned the program you are it's a program

00:11:47 --> 00:11:56
yeah yeah you know for personally I

00:11:52 --> 00:11:58
apologize I'm gonna I'm gonna say it's

00:11:55 --> 00:12:02
because I'm Russian but maybe you can

00:11:57 --> 00:12:04
help educate me some video game like

00:12:01 --> 00:12:06
misspell to own way back in the Mia and

00:12:03 --> 00:12:07
there's just I wonder if there's a

00:12:05 --> 00:12:11
definition I'll have to go to urban

00:12:06 --> 00:12:14
dictionary for it okay so what was the

00:12:10 --> 00:12:16
yday seat yeah by the way but was it

00:12:13 --> 00:12:19
what decade are we talking about I think

00:12:15 --> 00:12:22
like I mean maybe I'm biased because

00:12:18 --> 00:12:30
it's the era that that that I played but

00:12:21 --> 00:12:32
like 2011 to 2015 because the modern CTF

00:12:29 --> 00:12:33
scene is similar to the modern

00:12:31 --> 00:12:35
competitive programming scene you have

00:12:32 --> 00:12:37
people who like do drills you have

00:12:34 --> 00:12:39
people who practice and then once you've

00:12:36 --> 00:12:41
done that you've turned it lesson to a

00:12:38 --> 00:12:43
game of generic computer skill and more

00:12:40 --> 00:12:47
into a game of okay you memorize you you

00:12:42 --> 00:12:50
drill on these five categories and then

00:12:46 --> 00:12:53
before that it wasn't it didn't have

00:12:49 --> 00:12:55
like as much attention as it had I don't

00:12:52 --> 00:12:56
know they were like I won $30,000 ones

00:12:54 --> 00:12:59
in Korea for one of these competitions

00:12:55 --> 00:13:01
oh crap they were they were that so that

00:12:58 --> 00:13:03
means I mean money's money but that

00:13:00 --> 00:13:06
means there was probably good people

00:13:02 --> 00:13:09
there exactly yeah are the challenges

00:13:05 --> 00:13:11
human constructive or are they grounded

00:13:08 --> 00:13:14
in some real flaws and real systems

00:13:10 --> 00:13:15
usually they're human constructed but

00:13:13 --> 00:13:18
hey're usually inspired by real flaws

00:13:14 --> 00:13:20
what kind of systems are imagined is

00:13:17 --> 00:13:22
really focused on mobile like what has

00:13:19 --> 00:13:25
vulnerabilities these days is it does

00:13:21 --> 00:13:29
primarily mobile systems like Android

00:13:24 --> 00:13:31
everything does No yeah of course the

00:13:28 --> 00:13:32
price has kind of gone up because less

00:13:30 --> 00:13:34
and less people can find them and what's

00:13:31 --> 00:13:35
happened in security is now if you want

00:13:33 --> 00:13:38
o like jailbreak an iPhone you don't

00:13:34 --> 00:13:40
need one exploit anymore you need nine

00:13:37 --> 00:13:44
chained together what women yeah

00:13:39 --> 00:13:46
Wow okay so it's really so what's the

00:13:43 --> 00:13:48
but what's the benefit speaking higher

00:13:45 --> 00:13:50
level philosophically about hacking I

00:13:47 --> 00:13:52
mean it sounds from everything I've seen

00:13:49 --> 00:13:56
about you you just love the challenge

00:13:51 --> 00:13:58
and you don't want to do anything you

00:13:55 --> 00:14:01
don't want to bring that exploit out

00:13:57 --> 00:14:03
into the world and doing the actual let

00:14:00 --> 00:14:05
it run wild you just want to solve it

00:14:02 --> 00:14:08
and then you go on to the next thing oh

00:14:04 --> 00:14:10
yeah I mean doing criminal stuffs not

00:14:07 --> 00:14:12
really worth it and I'll actually use

00:14:09 --> 00:14:15
the same argument for why I don't do

00:14:11 --> 00:14:18
defense for why I don't do crime

00:14:14 --> 00:14:20
if you want to defend a system say the

00:14:17 --> 00:14:22
system has ten holes right if you find

00:14:19 --> 00:14:25
nine of those holes as a defender you

00:14:21 --> 00:14:26
still lose because the attacker gets in

00:14:24 --> 00:14:28
through the last one if you're an

00:14:25 --> 00:14:31
attacker you only have to find one out

00:14:27 --> 00:14:35
of the ten but if you're a criminal if

00:14:30 --> 00:14:37
you log on with a VPN nine out of the

00:14:34 --> 00:14:40
ten times but one time you forget you're

00:14:36 --> 00:14:42
done because you're caught okay because

00:14:39 --> 00:14:44
you only have to mess up once to be

00:14:41 --> 00:14:46
caught as a criminal yeah that's why I'm

00:14:43 --> 00:14:49
not a criminal

00:14:45 --> 00:14:51
but okay let me uh that's having a

00:14:48 --> 00:14:53
discussion with somebody just at a high

00:14:50 --> 00:14:56
level about nuclear weapons actually why

00:14:52 --> 00:14:59
we're having blowing ourselves up yet

00:14:55 --> 00:15:03
and my feeling is all the smart people

00:14:58 --> 00:15:06
in the world look at the distribution of

00:15:02 --> 00:15:08
smart people smart people are generally

00:15:05 --> 00:15:10
good and then this other person I was

00:15:07 --> 00:15:12
talking to Sean Carroll the physicist

00:15:09 --> 00:15:13
and you were saying no good and bad

00:15:11 --> 00:15:17
people are evenly distributed amongst

00:15:12 --> 00:15:19
everybody my sense was good hackers are

00:15:16 --> 00:15:21
in general good people and they don't

00:15:18 --> 00:15:27
want to mess with the world what's your

00:15:20 --> 00:15:32
sense I'm not even sure about that like

00:15:26 --> 00:15:34
I have a nice life crime wouldn't get me

00:15:31 --> 00:15:36
anything

00:15:33 --> 00:15:38
but if you're good and you have these

00:15:35 --> 00:15:40
skills you probably have a nice life too

00:15:37 --> 00:15:43
right like you can use the father things

00:15:39 --> 00:15:44
but is there an ethical is there some is

00:15:42 --> 00:15:48
there a little voice in your head that

00:15:43 --> 00:15:52
says well yeah if you could hack

00:15:47 --> 00:15:55
something to where you could hurt people

00:15:51 --> 00:15:57
and you could earn a lot of money doing

00:15:54 --> 00:15:59
it though not hurt physically perhaps

00:15:56 --> 00:16:03
but disrupt her life in some kind of way

00:15:58 --> 00:16:06
it is there a little voice that says um

00:16:02 --> 00:16:07
what two things one I don't really care

00:16:05 --> 00:16:08
about money

00:16:06 --> 00:16:10
so like the money wouldn't be an

00:16:07 --> 00:16:13
incentive the thrill might be an

00:16:09 --> 00:16:15
incentive but when I was 19 I read crime

00:16:12 --> 00:16:17
and punishment right that was another

00:16:14 --> 00:16:20
great one that talked

00:16:16 --> 00:16:22
me out of ever really doing crime Oh cuz

00:16:19 --> 00:16:24
it's like that's gonna be me I'd get

00:16:22 --> 00:16:27
away with it whatever just went in my

00:16:23 --> 00:16:28
head even if I got away with it you know

00:16:26 --> 00:16:30
and then you do crime for long enough

00:16:27 --> 00:16:32
you'll never get away with it that's

00:16:29 --> 00:16:34
right in the end that's a good reason to

00:16:31 --> 00:16:37
be good I wouldn't say good I just say

00:16:33 --> 00:16:40
I'm not bad you're a talented programmer

00:16:36 --> 00:16:42
and a hacker in a good positive sense of

00:16:39 --> 00:16:45
the word award you've played around

00:16:41 --> 00:16:48
found vulnerabilities in various systems

00:16:44 --> 00:16:50
what have you learned broadly about the

00:16:47 --> 00:16:58
design of systems and so on from that

00:16:49 --> 00:17:02
whole process you learn to not

00:16:57 --> 00:17:04
ake things for what people say they are

00:17:01 --> 00:17:07
but you look at things for what they

00:17:03 --> 00:17:10
actually are

00:17:06 --> 00:17:14
yeah I understand that's what you tell

00:17:09 --> 00:17:15
me it is but what does it do man and you

00:17:13 --> 00:17:18
have nice visualization tools to really

00:17:14 --> 00:17:19
know what it's really doing oh I wish

00:17:17 --> 00:17:22
I'm a better programmer now than I was

00:17:19 --> 00:17:24
in 2014 I said Kira that was the first

00:17:21 --> 00:17:26
ool that I wrote that was usable I

00:17:23 --> 00:17:30
wouldn't say the code was great I still

00:17:25 --> 00:17:31
wouldn't say my code is great so how was

00:17:29 --> 00:17:34
your evolution as a programmer except

00:17:31 --> 00:17:36
practice he went he started with C at

00:17:33 --> 00:17:37
which point did you pick up Python

00:17:35 --> 00:17:41
because you're pretty big and Python

00:17:36 --> 00:17:43
though now yeah in uh in college I went

00:17:40 --> 00:17:45
o Carnegie Mellon when I was 22 um I

00:17:42 --> 00:17:47
went back I'm like I'm gonna take all

00:17:44 --> 00:17:49
your hardest CS courses we'll see how I

00:17:46 --> 00:17:51
do right like did I miss anything by not

00:17:48 --> 00:17:55
having a real undergraduate education

00:17:50 --> 00:17:57
took operating systems compilers AI and

00:17:54 --> 00:18:02
they're like a freshman reader math

00:17:56 --> 00:18:04
course and operating says some of these

00:18:01 --> 00:18:07
some of those classes you mentioned

00:18:03 --> 00:18:10
actually they're great at least one the

00:18:06 --> 00:18:13
2012 circuit 2012 operating systems and

00:18:09 --> 00:18:15
compilers we're two of the best classes

00:18:12 --> 00:18:16
I've ever taken my life because you

00:18:14 --> 00:18:19
write an operating system and you write

00:18:15 --> 00:18:22
a compiler I wrote my operating system

00:18:18 --> 00:18:25
in C and I wrote my compiler in Haskell

00:18:21 --> 00:18:27
but classical well somehow I picked up

00:18:24 --> 00:18:29
Python that semester as well I started

00:18:26 --> 00:18:30
using it for the CTS actually that's

00:18:28 --> 00:18:33
when I really started to get into CTF

00:18:29 --> 00:18:35
and CTF you're all to race against the

00:18:32 --> 00:18:37
clock so I can't write things and say oh

00:18:34 --> 00:18:38
there's a clock component so you really

00:18:36 --> 00:18:41
want to use the programming language you

00:18:37 --> 00:18:42
can be fastest than 48 hours pone as

00:18:40 --> 00:18:44
many of these challenges you can pone

00:18:41 --> 00:18:46
yeah you got like a hundred points a

00:18:43 --> 00:18:49
challenge whatever team gets the most

00:18:45 --> 00:18:52
you were both the Facebook and Google

00:18:48 --> 00:18:55
for a brief stint yeah well the project

00:18:51 --> 00:18:58
zero actually at Google for five months

00:18:54 --> 00:19:01
where you develop kara what was project

00:18:57 --> 00:19:04
zero about in general speak what what

00:19:00 --> 00:19:05
just curious about the security efforts

00:19:03 --> 00:19:08
in these companies

00:19:04 --> 00:19:11
well product zero started the same time

00:19:07 --> 00:19:14
I I went there what what years are there

00:19:10 --> 00:19:17
2015 2015 so that was right at the

00:19:13 --> 00:19:23
beginning of project it's small it's

00:19:16 --> 00:19:24
Google's offensive security team I'll

00:19:22 --> 00:19:28
try to give I'll try to give the best

00:19:23 --> 00:19:32
public facing explanation that I can so

00:19:27 --> 00:19:33
the idea is basically these

00:19:31 --> 00:19:36
vulnerabilities exist in the world

00:19:32 --> 00:19:40
nation states have them some high

00:19:35 --> 00:19:40
powered bad actors have them

00:19:39 --> 00:19:45
sometime people will find these

00:19:43 --> 00:19:49
vulnerabilities and submit them in bug

00:19:44 --> 00:19:50
bounties to the companies but a lot of

00:19:48 --> 00:19:53
the companies don't really care it only

00:19:49 --> 00:19:54
fix the bug there's no it doesn't hurt

00:19:52 --> 00:19:56
for there to be a vulnerability so

00:19:53 --> 00:19:57
project zero is like we're gonna do it

00:19:55 --> 00:19:59
different we're going to announce a

00:19:56 --> 00:20:01
vulnerability and we're going to give

00:19:58 --> 00:20:02
them 90 days to fix it and then whether

00:20:00 --> 00:20:05
they fix it or not we're gonna drop the

00:20:01 --> 00:20:07
zero day oh wow we're gonna

00:20:04 --> 00:20:10
drop the weapon that's so cool that is

00:20:06 --> 00:20:11
o cool I love that deadlines though

00:20:09 --> 00:20:14
that's so cool give him real deadlines

00:20:10 --> 00:20:17
yeah and I think it's done a lot for

00:20:13 --> 00:20:19
moving the industry forward I watched

00:20:16 --> 00:20:23
your coding sessions on the stream

00:20:18 --> 00:20:26
downline you code things up basic

00:20:22 --> 00:20:29
projects usually from scratch I would

00:20:25 --> 00:20:30
say sort of as a programmer myself just

00:20:28 --> 00:20:33
watching you that you type really fast

00:20:29 --> 00:20:36
and your brain works in both brilliant

00:20:32 --> 00:20:37
and chaotic ways I don't know if that's

00:20:35 --> 00:20:40
always true but certainly for the live

00:20:36 --> 00:20:42
streams so it's it's interesting to me

00:20:39 --> 00:20:45
because I'm more I'm much slower and

00:20:41 --> 00:20:46
systematic and careful and you just move

00:20:44 --> 00:20:50
I mean probably an order of magnitude

00:20:45 --> 00:20:51
faster some curious is there a method to

00:20:49 --> 00:20:54
your madness

00:20:50 --> 00:20:57
is this just who you are there's pros

00:20:53 --> 00:21:00
and cons there's pros and cons to my

00:20:56 --> 00:21:03
programming style and I'm aware of them

00:20:59 --> 00:21:05
like if you ask me to like like get

00:21:02 --> 00:21:07
something up and working quickly with

00:21:04 --> 00:21:09
like an API that's kind of undocumented

00:21:06 --> 00:21:11
I will do this super fast because I will

00:21:08 --> 00:21:15
throw things at it until it works if you

00:21:10 --> 00:21:17
ask me to take a vector and rotate it 90

00:21:14 --> 00:21:21
degrees and then flip it over the XY

00:21:16 --> 00:21:23
plane I'll spam program for two hours

00:21:20 --> 00:21:25
and won't get it all because it's

00:21:22 --> 00:21:27
omething that you could do with a sheet

00:21:24 --> 00:21:30
of paper think through design and then

00:21:26 --> 00:21:34
just you really just throw stuff at the

00:21:29 --> 00:21:36
wall and you get so good at it that it

00:21:33 --> 00:21:38
usually works I should become better at

00:21:35 --> 00:21:41
he other kind as well sometimes I'll do

00:21:37 --> 00:21:42
things pathetically it's nowhere near as

00:21:40 --> 00:21:44
entertaining on the twitch streams I do

00:21:41 --> 00:21:45
exaggerate it a bit on the edge games as

00:21:43 --> 00:21:46
well the twitch streams I mean what do

00:21:44 --> 00:21:48
you want to see a game or you want to

00:21:45 --> 00:21:50
see actions permit me right I'll show

00:21:47 --> 00:21:52
you a PM for programming yes I recommend

00:21:49 --> 00:21:54
people go to I think I watched

00:21:51 --> 00:21:56
I was probably several hours you put

00:21:53 --> 00:21:59
like I've actually left you programming

00:21:55 --> 00:22:01
in the background while I was

00:21:58 --> 00:22:03
programming because you made me you it

00:22:00 --> 00:22:04
was it was like watching a really good

00:22:02 --> 00:22:06
gamer

00:22:03 --> 00:22:08
it's like energizes you because you're

00:22:05 --> 00:22:10
like moving so fast it so it's it's

00:22:07 --> 00:22:14
awesome it's inspiring and so it made me

00:22:09 --> 00:22:16
jealous that like because my own program

00:22:13 --> 00:22:20
is inadequate in terms of speed Oh as I

00:22:15 --> 00:22:22
was like so I'm twice as frantic on the

00:22:19 --> 00:22:25
live streams as I am when I code without

00:22:21 --> 00:22:27
oh it's super entertaining so I I wasn't

00:22:24 --> 00:22:29
even paying attention to where you were

00:22:26 --> 00:22:32
coding which is great it's just watching

00:22:28 --> 00:22:34
you switch windows and VAM I guess is

00:22:31 --> 00:22:37
driven screen I've developed a workflow

00:22:33 --> 00:22:38
Facebook and talk about how do you learn

00:22:36 --> 00:22:41
ew programming tools ideas techniques

00:22:37 --> 00:22:45
these days what's your like methodology

00:22:40 --> 00:22:49
for learning new things so I wrote for

00:22:45 --> 00:22:51
comma the distributed file systems out

00:22:48 --> 00:22:54
in the world are extremely complex like

00:22:50 --> 00:22:57
if you want to install something like

00:22:53 --> 00:23:00
like Saif Saif is I think the like

00:22:56 --> 00:23:04
open infrastructure to should be a file

00:22:59 --> 00:23:06
system or there's like newer ones like

00:23:03 --> 00:23:08
seaweed FS but these are all like 10,000

00:23:05 --> 00:23:10
plus line projects I think some of them

00:23:07 --> 00:23:12
are even 100,000 line and just

00:23:09 --> 00:23:15
configuring them as a nightmare so I

00:23:11 --> 00:23:18
wrote I wrote one um

00:23:14 --> 00:23:20
it's 200 lines and it's it uses like

00:23:17 --> 00:23:22
nginx to the live servers and has low

00:23:19 --> 00:23:25
master server that I wrote and go and

00:23:21 --> 00:23:28
the way I go this if I would say that

00:23:24 --> 00:23:29
I'm proud per line of any code I wrote

00:23:27 --> 00:23:31
maybe there's some exploits that I think

00:23:28 --> 00:23:34
are beautiful and then this this is 200

00:23:30 --> 00:23:35
lines and just the way that I thought

00:23:33 --> 00:23:36
about it I think was very good and the

00:23:34 --> 00:23:38
reason it's very good is because that

00:23:35 --> 00:23:39
was the fourth version of it that I

00:23:37 --> 00:23:41
wrote and I had three versions that I

00:23:38 --> 00:23:44
threw away you mentioned you see go I

00:23:40 --> 00:23:45
ready go yeah and go so is that a

00:23:43 --> 00:23:49
functional language I forget what goes

00:23:44 --> 00:23:54
they go is Google's language right I'm a

00:23:48 --> 00:23:58
functional it's some it's like in a way

00:23:53 --> 00:24:00
it's C++ but easier it's it's strongly

00:23:57 --> 00:24:02
typed it has a nice ecosystem erotic

00:23:59 --> 00:24:04
when I first looked at it I was like

00:24:01 --> 00:24:06
this is like Python but it takes twice

00:24:03 --> 00:24:10
as long to do anything yeah

00:24:05 --> 00:24:11
now that I've open pilot is migrating to

00:24:09 --> 00:24:13
sea but it still has large Python

00:24:10 --> 00:24:14
components I now understand why Python

00:24:12 --> 00:24:16
doesn't work for large code bases and

00:24:13 --> 00:24:18
why you want something like Oh

00:24:15 --> 00:24:21
interesting so why why doesn't Python

00:24:17 --> 00:24:23
work for so even most speaking for

00:24:21 --> 00:24:26
myself at least like we do a lot of

00:24:22 --> 00:24:28
stuff basically demo level work with

00:24:25 --> 00:24:31
autonomous vehicles and most of the work

00:24:27 --> 00:24:36
is Python yeah why doesn't Python work

00:24:30 --> 00:24:39
for large code bases because well lack

00:24:35 --> 00:24:42
of type checking is a big errors

00:24:38 --> 00:24:45
creeping yeah and like you don't know

00:24:41 --> 00:24:48
the compiler can tell you like nothing

00:24:44 --> 00:24:51
right so everything is either you know

00:24:47 --> 00:24:52
like like syntax errors fine but if you

00:24:50 --> 00:24:54
misspell a variable and Python the

00:24:51 --> 00:24:55
compiler won't catch that there's like

00:24:53 --> 00:24:56
linters that can catch it some other

00:24:54 --> 00:24:59
time

00:24:55 --> 00:25:02
there's no types this is really the

00:24:58 --> 00:25:03
biggest downside and then will Python

00:25:01 --> 00:25:04
slow but that's not related to it well

00:25:02 --> 00:25:07
maybe the kind of related to its that's

00:25:03 --> 00:25:09
lacking so what's what's in your toolbox

00:25:06 --> 00:25:11
these days is a Python what else go I

00:25:08 --> 00:25:12
need to move on something else but my

00:25:10 --> 00:25:15
adventure interdependently type

00:25:11 --> 00:25:19
languages I love these languages they

00:25:14 --> 00:25:21
just have like syntax from the 80s what

00:25:18 --> 00:25:24
do you think about JavaScript

00:25:20 --> 00:25:28
yes thanks Nick tomorrow typescript

00:25:23 --> 00:25:29
javascript is the whole ecosystem is

00:25:27 --> 00:25:32
unbelievably confusing

00:25:28 --> 00:25:34
NPM updates a package from zero to two

00:25:31 --> 00:25:36
to zero to five and that breaks your

00:25:33 --> 00:25:41
babble linter which translates your es5

00:25:35 --> 00:25:42
into es6 which doesn't run on so why do

00:25:40 --> 00:25:45
I have to compile my JavaScript again

00:25:41 --> 00:25:47
huh it may be the future though if you

00:25:44 --> 00:25:50
think about I mean I've embraced

00:25:46 --> 00:25:53
JavaScript recently because just like

00:25:49 --> 00:25:56
I've continually embraced PHP it seems

00:25:52 --> 00:25:57
that these worst possible languages live

00:25:55 --> 00:26:00
on for long is that cockroaches never

00:25:56 --> 00:26:03
die yeah well it's in the browser and

00:25:59 --> 00:26:06
it's fast it's fast yeah it's in the

00:26:02 --> 00:26:08
browser and compute mites they become

00:26:05 --> 00:26:10
you know the browser it's unclear what

00:26:07 --> 00:26:14
he role the browser's in terms of

00:26:09 --> 00:26:16
distributed computation in the future so

00:26:13 --> 00:26:18
javascript is definitely here to stay

00:26:15 --> 00:26:20
eah interesting if

00:26:17 --> 00:26:21
Tom's vehicles will run on JavaScript

00:26:19 --> 00:26:23
one day I mean you have to consider

00:26:20 --> 00:26:24
these possibilities well all our debug

00:26:22 --> 00:26:27
tools are JavaScript

00:26:23 --> 00:26:28
we actually just open-source them we

00:26:26 --> 00:26:30
have a tool Explorer which you can

00:26:27 --> 00:26:31
notate your dis engagements and we

00:26:29 --> 00:26:33
have tool cabana which lets you analyze

00:26:30 --> 00:26:35
the canned traffic from the car so

00:26:32 --> 00:26:37
basically any time you're visualizing

00:26:34 --> 00:26:39
something about the log you using

00:26:36 --> 00:26:42
javascript yeah well the web is the best

00:26:38 --> 00:26:43
UI toolkit by far yeah um so and then

00:26:41 --> 00:26:44
you know what you're voting in

00:26:42 --> 00:26:48
JavaScript we have a react guy he's good

00:26:43 --> 00:26:50
he acts nice let's get into it so let's

00:26:47 --> 00:26:56
talk to Thomas vehicles you found it

00:26:49 --> 00:26:58
comma a let's at a high level how did

00:26:55 --> 00:27:00
you get into the world the vehicle

00:26:57 --> 00:27:01
automation can you also just for people

00:26:59 --> 00:27:06
who don't know tell the story of comma

00:27:00 --> 00:27:09
yeah sure so I was working at this AI

00:27:05 --> 00:27:12
startup and a friend approached me and

00:27:08 --> 00:27:15
he's like dude I don't know where this

00:27:11 --> 00:27:17
going but the coolest applied AI

00:27:14 --> 00:27:20
problem today is self-driving cars I'm

00:27:16 --> 00:27:23
like well absolutely do you want to meet

00:27:19 --> 00:27:26
with UI mosque and he's looking for

00:27:22 --> 00:27:29
somebody to build a vision system for

00:27:25 --> 00:27:31
auto pilot this is when they were still

00:27:28 --> 00:27:33
on ap one they were still using mobile I

00:27:30 --> 00:27:37
kneel on back then was looking for a

00:27:32 --> 00:27:39
replacement and he brought me in and we

00:27:36 --> 00:27:40
talked about a contract where I would

00:27:38 --> 00:27:43
eliver something that meets mobile eye

00:27:39 --> 00:27:44
level performance I would get paid

00:27:42 --> 00:27:45
twelve million dollars if I could

00:27:43 --> 00:27:47
eliver it tomorrow and I would lose 1

00:27:44 --> 00:27:49
million dollars for every month I didn't

00:27:46 --> 00:27:51
deliver yeah so I was like ok this is a

00:27:48 --> 00:27:54
great deal this is a super exciting

00:27:50 --> 00:27:56
challenge you know what even if it takes

00:27:53 --> 00:27:57
me 10 months I get two million dollars

00:27:55 --> 00:27:59
it's good maybe I can finish up in five

00:27:57 --> 00:28:00
maybe I don't finish it at all and I get

00:27:58 --> 00:28:02
paid nothing and I'll work for twelve

00:27:59 --> 00:28:04
months for free so maybe I just take a

00:28:01 --> 00:28:06
pause on that I'm also curious about

00:28:03 --> 00:28:07
his because I've been working on

00:28:05 --> 00:28:09
robotics for a long time and I'm curious

00:28:06 --> 00:28:12
to see a person like you just step in

00:28:08 --> 00:28:14
and sort of somewhat naive but brilliant

00:28:11 --> 00:28:15
right so that's though that's the best

00:28:13 --> 00:28:18
place to be because you basically

00:28:14 --> 00:28:20
full-steam take on a problem how

00:28:17 --> 00:28:23
confident how from that time because you

00:28:19 --> 00:28:25
know a lot more now at that time how

00:28:22 --> 00:28:28
hard do you think it is to solve all of

00:28:24 --> 00:28:30
autonomous driving I remember I

00:28:27 --> 00:28:32
suggested to Elon in the meeting I'm

00:28:29 --> 00:28:34
putting

00:28:31 --> 00:28:37
GPU behind each camera to keep the

00:28:33 --> 00:28:39
compute local this is an incredibly

00:28:36 --> 00:28:41
stupid idea I leave the meeting 10

00:28:38 --> 00:28:42
minutes later and I'm like I could have

00:28:40 --> 00:28:45
spent a little bit of time thinking

00:28:41 --> 00:28:47
about this problem was I would just send

00:28:44 --> 00:28:49
all your cameras to one big GPU you're

00:28:46 --> 00:28:51
much better off doing that oh sorry you

00:28:48 --> 00:28:53
said behind every camera you have a

00:28:50 --> 00:28:54
small GPU I was like oh I'll put the

00:28:52 --> 00:28:57
first few layers of my comm there Oh

00:28:53 --> 00:29:00
like why did I say that that's possible

00:28:56 --> 00:29:01
it's possible but it's a bad idea it's

00:28:59 --> 00:29:03
not obviously a bad idea pretty obvious

00:29:00 --> 00:29:05
but whether it's actually a bad idea or

00:29:02 --> 00:29:07
not I left that meeting with Elon like

00:29:04 --> 00:29:09
beating myself up I'm like why did I say

00:29:06 --> 00:29:12
something stupid yeah you haven't given

00:29:08 --> 00:29:14
I'm at least like thought through every

00:29:11 --> 00:29:16
aspect yes he's very sharp too like

00:29:13 --> 00:29:17
usually in life I get away with saying

00:29:15 --> 00:29:19
stupid things and then kind of course

00:29:16 --> 00:29:20
alright right away he called me out

00:29:18 --> 00:29:22
about it and like usually in life I get

00:29:19 --> 00:29:25
away with saying stupid things and then

00:29:21 --> 00:29:26
like people will you know people a lot

00:29:24 --> 00:29:28
of times people don't even notice and

00:29:26 --> 00:29:29
I'll like correct it and bring the

00:29:27 --> 00:29:33
conversation back but with Elon it was

00:29:28 --> 00:29:34
like nope like okay well that's not at

00:29:32 --> 00:29:36
all why the contract fell through I was

00:29:33 --> 00:29:38
much more prepared the second time I met

00:29:35 --> 00:29:42
him yeah but in general huh how hard did

00:29:37 --> 00:29:45
you think it is like 12 months is uh-oh

00:29:41 --> 00:29:46
is it tough timeline oh I just thought

00:29:44 --> 00:29:48
I'd clone mob like you three I didn't

00:29:45 --> 00:29:50
hink I'd solve level five self-driving

00:29:47 --> 00:29:53
or anything so the goal there was to do

00:29:49 --> 00:29:55
lane-keeping good good link keeping I

00:29:52 --> 00:29:57
saw my friend showed me the outputs from

00:29:54 --> 00:29:58
a mobile I in the office from a mobile I

00:29:56 --> 00:30:00
was just basically two lanes at a

00:29:57 --> 00:30:02
position of a lead car mm-hm

00:29:59 --> 00:30:04
like I can I can gather a dataset and

00:30:01 --> 00:30:07
train this net in in weeks and I did

00:30:04 --> 00:30:08
well first time I tried the

00:30:06 --> 00:30:11
implementation of mobile I and the test

00:30:07 --> 00:30:13
I was really surprised how good it is

00:30:10 --> 00:30:15
it's quite incredibly good because I

00:30:12 --> 00:30:16
thought it's just because I've done a

00:30:14 --> 00:30:19
lot of computation I thought it'd be a

00:30:15 --> 00:30:23
lot harder to create a system that

00:30:18 --> 00:30:25
's stable so I was personally

00:30:22 --> 00:30:27
surprised you know have to admit it

00:30:24 --> 00:30:30
because I was kind of skeptical before

00:30:26 --> 00:30:32
trying it because I thought it would go

00:30:29 --> 00:30:35
in and out a lot more it would get

00:30:31 --> 00:30:40
disengaged a lot more and it's pretty

00:30:34 --> 00:30:42
robust so what how how hard is the

00:30:39 --> 00:30:46
problem we need to when you tackled it

00:30:42 --> 00:30:49
I think a p1 was great like Elon talked

00:30:45 --> 00:30:51
about dis engagements on the 405 down in

00:30:48 --> 00:30:53
LA we'd like the lane marks were kind of

00:30:50 --> 00:30:57
aded and the mobile eye system would

00:30:52 --> 00:30:59
rop out uh like I had something up and

00:30:56 --> 00:31:03
working that I would say was like the

00:30:58 --> 00:31:06
same quality in three months same

00:31:02 --> 00:31:08
quality but how do you know you you say

00:31:05 --> 00:31:10
stuff like that yeah confidently but you

00:31:07 --> 00:31:13
can't and I love it but well the

00:31:09 --> 00:31:15
question is you can't you're kind of

00:31:12 --> 00:31:17
going by feel because he not solely

00:31:14 --> 00:31:19
absolutely like like I would take I

00:31:16 --> 00:31:21
hadn't I borrowed my friends Tesla yeah

00:31:18 --> 00:31:22
I would take ap one out for a drive yeah

00:31:20 --> 00:31:26
and then I would take my system out for

00:31:21 --> 00:31:30
a dry and seems reasonably like the same

00:31:25 --> 00:31:32
so the four or five how hard is it to

00:31:29 --> 00:31:36
create something that could actually be

00:31:31 --> 00:31:39
a product that's deployed I mean I've

00:31:35 --> 00:31:41
read an article or you on this

00:31:38 --> 00:31:47
respondent said something by you saying

00:31:40 --> 00:31:51
that to build autopilot is is more

00:31:46 --> 00:31:55
complicated than a single George Hotz a

00:31:50 --> 00:31:57
level job how hard is that job to create

00:31:54 --> 00:32:01
something that would work across the

00:31:56 --> 00:32:02
globe Lee what are the global ease the

00:32:00 --> 00:32:04
challenge but Elon followed that up by

00:32:01 --> 00:32:06
saying it's gonna take two years in a

00:32:03 --> 00:32:07
company of ten people yeah and Here I am

00:32:05 --> 00:32:09
four years later with a company of

00:32:06 --> 00:32:12
twelve people and I think we still have

00:32:08 --> 00:32:14
another two to go two years so yeah so

00:32:11 --> 00:32:17
what do you think what do you think

00:32:13 --> 00:32:19
about the hottest is progressing with

00:32:16 --> 00:32:23
autopilot v2 v3

00:32:18 --> 00:32:24
I think we've kept pace with them pretty

00:32:22 --> 00:32:27
well

00:32:23 --> 00:32:30
I think navigator autopilot is terrible

00:32:26 --> 00:32:33
we had some demo features internally of

00:32:29 --> 00:32:34
the same stuff and we would test it and

00:32:32 --> 00:32:36
I'm like I'm not shipping this even as

00:32:33 --> 00:32:37
like open-source software to people what

00:32:35 --> 00:32:39
do you think is do

00:32:36 --> 00:32:41
Consumer Reports does a great job of

00:32:38 --> 00:32:44
describing it like when it makes a lane

00:32:40 --> 00:32:47
change it does it worse than a human

00:32:43 --> 00:32:49
you shouldn't ship things like autopilot

00:32:46 --> 00:32:53
open pilot they Lane keep better than a

00:32:48 --> 00:32:55
human if you turn it on for a stretch of

00:32:52 --> 00:32:58
highway like an hour long it's never

00:32:54 --> 00:33:00
gonna touch a lane line human will touch

00:32:57 --> 00:33:01
probably a lane line twice you just

00:32:59 --> 00:33:03
inspired me I don't know if you're

00:33:00 --> 00:33:07
grounded and data on that I read labor

00:33:02 --> 00:33:09
okay but no but that's interesting uh I

00:33:06 --> 00:33:13
wonder actually how often we touch Lane

00:33:09 --> 00:33:15
lines in general like a little bit cuz

00:33:12 --> 00:33:16
it is okay I could answer that question

00:33:14 --> 00:33:18
pretty easily with the common data side

00:33:15 --> 00:33:20
yeah I'm curious I've never answered it

00:33:17 --> 00:33:23
I don't know yeah I just - is like my

00:33:19 --> 00:33:24
person it feels right that's interesting

00:33:22 --> 00:33:26
because every time you touch the lane

00:33:23 --> 00:33:28
that's the source of a little bit of

00:33:25 --> 00:33:30
stress and kind of lane-keeping is

00:33:27 --> 00:33:33
removing that stress that's all to me

00:33:29 --> 00:33:35
the big the biggest value-add honestly

00:33:32 --> 00:33:37
is just removing the stress of having to

00:33:34 --> 00:33:40
stay in lane and I think honestly I

00:33:36 --> 00:33:43
don't think people fully realize first

00:33:39 --> 00:33:45
of all that that's a big value add but

00:33:42 --> 00:33:49
also that that's all it is

00:33:44 --> 00:33:51
and that not only I find it a huge value

00:33:48 --> 00:33:52
add I drove down when we moved to San

00:33:50 --> 00:33:54
Diego I drove down our Enterprise

00:33:51 --> 00:33:57
rent-a-car and I missed it so I missed

00:33:53 --> 00:34:01
having the system so much it's so much

00:33:56 --> 00:34:04
more tiring to drive without it it's it

00:34:00 --> 00:34:07
is that Lane centering that's the key

00:34:03 --> 00:34:10
feature yeah

00:34:06 --> 00:34:11
and in a way it's the only feature that

00:34:09 --> 00:34:13
actually adds value to people's lives

00:34:10 --> 00:34:14
and autonomous vehicles today way mode

00:34:12 --> 00:34:16
does not add value to people's lives

00:34:13 --> 00:34:18
it's a more expensive lower slower uber

00:34:15 --> 00:34:20
maybe someday it'll be this big cliff

00:34:17 --> 00:34:22
where it adds value but I don't usually

00:34:19 --> 00:34:25
do this vessei I haven't talked to is

00:34:21 --> 00:34:27
that this is good because I haven't I

00:34:24 --> 00:34:30
have intuitively but I think we're

00:34:26 --> 00:34:35
making it explicit now I I actually

00:34:29 --> 00:34:38
believe that really good lane-keeping is

00:34:34 --> 00:34:40
a reason to buy a car will be a reason

00:34:37 --> 00:34:42
to buy a car is a huge value add I've

00:34:39 --> 00:34:43
never until we just started talking

00:34:41 --> 00:34:48
about it haven't really quite realized

00:34:42 --> 00:34:53
that that I've felt with elan chase of

00:34:47 --> 00:34:56
level four is not the correct chase it

00:34:52 --> 00:34:58
was on because you should just say Tesla

00:34:55 --> 00:35:00
has the best as if from a testing

00:34:57 --> 00:35:03
perspective say Tesla has the best

00:34:59 --> 00:35:05
lane-keeping coming I should say coming

00:35:02 --> 00:35:09
I is the best link keeping and that is

00:35:04 --> 00:35:10
it yeah yeah does do you think well you

00:35:08 --> 00:35:12
have to do the longitudinal as well

00:35:09 --> 00:35:15
you can't just Lane keep you have to do

00:35:11 --> 00:35:17
a cc but a cc is much more forgiving

00:35:14 --> 00:35:20
than lanky especially on the highway oh

00:35:16 --> 00:35:23
by the way are you uh calming eyes

00:35:19 --> 00:35:25
camera only correct oh no we use the

00:35:22 --> 00:35:28
radar we from the car you were able to

00:35:24 --> 00:35:30
get to open it um we can't do a camera

00:35:27 --> 00:35:32
only now it's gotten to the point but we

00:35:29 --> 00:35:36
leave the radar there is like a it's

00:35:31 --> 00:35:37
fusion now okay so let's maybe talk

00:35:35 --> 00:35:40
through some of the system specs on the

00:35:36 --> 00:35:43
hardware or what it what's what's the

00:35:39 --> 00:35:45
hardware side of what you're providing

00:35:42 --> 00:35:48
what's the capabilities in the software

00:35:44 --> 00:35:52
side would open pilot and so on so open

00:35:47 --> 00:35:54
pilot as the the box that we sell that

00:35:51 --> 00:35:56
it runs on it's a phone in a plastic

00:35:53 --> 00:35:58
ase it's nothing special we sell it

00:35:55 --> 00:35:59
without the software so you're like you

00:35:57 --> 00:36:02
know you buy the phone it's just easy

00:35:58 --> 00:36:04
it'll be easy setup but it's sold with

00:36:01 --> 00:36:07
no software

00:36:03 --> 00:36:09
open pilot right now is about to be 0.6

00:36:06 --> 00:36:11
when it gets to 1.0 I think we'll be

00:36:08 --> 00:36:12
ready for a consumer product we're not

00:36:10 --> 00:36:14
gonna add any new features we're just

00:36:11 --> 00:36:15
gonna make the lane-keeping really

00:36:13 --> 00:36:17
good

00:36:14 --> 00:36:20
so what do we have right now it's a

00:36:16 --> 00:36:24
snapdragon 820

00:36:19 --> 00:36:27
say so many IMX 298 forward-facing

00:36:23 --> 00:36:30
camera driver monitoring camera and

00:36:26 --> 00:36:33
she's a selfie cam on the phone and a

00:36:29 --> 00:36:36
can transceiver biffle's little thing

00:36:32 --> 00:36:38
calls pandas and they talk over USB to

00:36:35 --> 00:36:41
the phone and then they have three

00:36:37 --> 00:36:42
canvases that they talk to the car one

00:36:40 --> 00:36:45
of those campuses is the radar CANbus

00:36:41 --> 00:36:46
one of them is the main car CANbus and

00:36:44 --> 00:36:49
the other one is the proxy camera CANbus

00:36:45 --> 00:36:52
we leave the existing camera in place so

00:36:48 --> 00:36:53
we don't turn a DB off right now we

00:36:51 --> 00:36:55
still turn a TV off if you're using our

00:36:52 --> 00:36:58
longitudinal but we're gonna fix that

00:36:54 --> 00:37:01
before 1.0 you got it wow that's cool so

00:36:57 --> 00:37:06
in its can both way so how are you able

00:37:00 --> 00:37:08
to control vehicles so we proxy the

00:37:05 --> 00:37:11
vehicles that we work with already have

00:37:07 --> 00:37:13
Lane Keeping Assist system so Lane

00:37:10 --> 00:37:16
Keeping Assist can mean a huge variety

00:37:12 --> 00:37:19
of things it can mean it will apply a

00:37:15 --> 00:37:21
small torque to the wheel after you've

00:37:18 --> 00:37:24
already crossed a lane line by a foot

00:37:20 --> 00:37:27
which is the system in the older Toyotas

00:37:23 --> 00:37:29
versus like I think Tesla still calls it

00:37:26 --> 00:37:31
Lane Keeping Assist where it'll keep you

00:37:28 --> 00:37:34
perfectly in the center of the lane on

00:37:30 --> 00:37:36
the highway you can control like you

00:37:33 --> 00:37:37
would in joystick the cars these so

00:37:35 --> 00:37:42
these cars already have the capability

00:37:36 --> 00:37:44
of drive-by-wire so is it is it trivial

00:37:41 --> 00:37:47
to convert a car that it operates with

00:37:43 --> 00:37:50
it open pile is able to control the

00:37:46 --> 00:37:52
steering Oh a new car or a car that we

00:37:49 --> 00:37:54
so we have support now for 45 different

00:37:51 --> 00:37:57
makes of cars what are one of the cars

00:37:53 --> 00:37:59
general mostly Hondas and Toyotas we

00:37:56 --> 00:38:04
support almost every Honda and Toyota

00:37:58 --> 00:38:06
made this year and then a bunch of GM's

00:38:03 --> 00:38:07
bunch of Subarus which it doesn't have

00:38:05 --> 00:38:10
to be like a Prius it could be Coral as

00:38:06 --> 00:38:12
well okay the 2020 Corolla is the best

00:38:09 --> 00:38:14
car with open pilot it just came out

00:38:11 --> 00:38:15
here the actuator has less lag than the

00:38:13 --> 00:38:18
older Corolla

00:38:15 --> 00:38:21
I think I started watching video with

00:38:17 --> 00:38:24
your eye the way you make videos is

00:38:20 --> 00:38:28
awesome literally the dealerships

00:38:23 --> 00:38:31
treaming stream for an hour

00:38:27 --> 00:38:33
yeah and basically like if stuff goes a

00:38:30 --> 00:38:35
little wrong you're just like you just

00:38:32 --> 00:38:37
go with it yeah I love it what's real

00:38:34 --> 00:38:40
yeah that's real that's that's it's

00:38:36 --> 00:38:43
that's so beautiful and it's so in

00:38:39 --> 00:38:45
contrast to the way other companies

00:38:42 --> 00:38:48
would put together a video like that how

00:38:44 --> 00:38:50
do I like to do it like good I mean if

00:38:47 --> 00:38:51
you become super rich one day is

00:38:49 --> 00:38:53
uccessful I hope you keep it that way

00:38:50 --> 00:38:55
because I think that's actually what

00:38:52 --> 00:38:57
people love that kind of genuine oh it's

00:38:54 --> 00:39:00
all that has value to me yeah my money

00:38:56 --> 00:39:02
has no if I sell out to like make money

00:38:59 --> 00:39:05
and I sold out it doesn't matter what do

00:39:01 --> 00:39:10
I get yacht I don't I got and I think

00:39:04 --> 00:39:12
Tesla's actually has a small inkling of

00:39:09 --> 00:39:14
that as well with autonomy day they did

00:39:11 --> 00:39:16
reveal more than I mean of course

00:39:13 --> 00:39:18
there's marketing communications you can

00:39:15 --> 00:39:21
tell but it's more than most companies

00:39:17 --> 00:39:23
will reveal which is I hope they go

00:39:20 --> 00:39:26
towards a direction more other companies

00:39:22 --> 00:39:28
GM Ford oh Jessa Tesla's gonna win level

00:39:25 --> 00:39:32
5 they really are so let's talk about it

00:39:27 --> 00:39:35
you think you're focused on level 2

00:39:31 --> 00:39:37
currently currently we're gonna be one

00:39:34 --> 00:39:40
to two years behind Tesla getting to

00:39:36 --> 00:39:42
level five okay we're interested right

00:39:39 --> 00:39:43
we're into it you're in I'm just saying

00:39:41 --> 00:39:44
once Tesla gets it we're one to two

00:39:42 --> 00:39:46
years behind

00:39:43 --> 00:39:47
I'm not making any timeline on when

00:39:45 --> 00:39:47
Tesla's that's right you did that's

00:39:46 --> 00:39:49
brilliant

00:39:46 --> 00:39:51
I'm sorry Tesla investors if you think

00:39:48 --> 00:39:53
you're gonna have an autonomous robot

00:39:50 --> 00:39:56
axi fleet by the end of the year yes

00:39:52 --> 00:39:59
that's all bet against that so that what

00:39:55 --> 00:40:04
do you think about this the most level

00:39:58 --> 00:40:08
four companies are kind of just doing

00:40:03 --> 00:40:10
their usual safety driver during full

00:40:07 --> 00:40:13
autonomy kind of testing and then Tesla

00:40:09 --> 00:40:16
does basically trying to go from

00:40:12 --> 00:40:17
lane-keeping to full autonomy what do

00:40:15 --> 00:40:20
you think about that approach how

00:40:16 --> 00:40:23
successful would it be a ton better

00:40:19 --> 00:40:26
approach because Tesla is gathering data

00:40:22 --> 00:40:28
on a scale that none of them are they're

00:40:25 --> 00:40:29
putting real users behind the behind the

00:40:27 --> 00:40:32
wheel of the car

00:40:28 --> 00:40:36
it's I think the only strategy that

00:40:31 --> 00:40:38
works the incremental well so there's a

00:40:35 --> 00:40:40
few components to test approach that's

00:40:37 --> 00:40:42
more than just incrementally you

00:40:39 --> 00:40:45
spoke with is the one is the software so

00:40:41 --> 00:40:47
ver-the-air software updates necessity

00:40:44 --> 00:40:49
I mean way more ease have those - those

00:40:46 --> 00:40:51
aren't but there was differentiating

00:40:48 --> 00:40:53
from the automaker's right no link

00:40:50 --> 00:40:55
eeping assist systems have no cars with

00:40:52 --> 00:40:58
lane keeping system have that except

00:40:54 --> 00:41:01
Tesla yeah and the other one is the data

00:40:57 --> 00:41:03
the other direction which is the ability

00:41:00 --> 00:41:05
to query the data I don't think they're

00:41:02 --> 00:41:07
actually collecting as much days people

00:41:04 --> 00:41:12
think but the ability to turn on

00:41:06 --> 00:41:13
collection and turn it off so I'm both

00:41:11 --> 00:41:16
in the robotics world in the the

00:41:12 --> 00:41:18
psychology human factors world many

00:41:15 --> 00:41:20
people believe that level to autonomy is

00:41:17 --> 00:41:24
problematic because of the human factor

00:41:19 --> 00:41:27
like the more the task is automated the

00:41:23 --> 00:41:28
more there's a vigilance decrement you

00:41:26 --> 00:41:30
start to fall asleep you start to become

00:41:27 --> 00:41:33
complacent start texting more and so on

00:41:29 --> 00:41:34
do you worry about that

00:41:32 --> 00:41:36
because if we're talking about

00:41:33 --> 00:41:38
ransition from lane-keeping to full

00:41:35 --> 00:41:43
autonomy if you're spending eighty

00:41:37 --> 00:41:44
percent of the time not supervising

00:41:42 --> 00:41:48
machine do you worry about what that

00:41:43 --> 00:41:50
means to the safety of the drivers one

00:41:47 --> 00:41:53
we don't consider open pilot to be 1.0

00:41:49 --> 00:41:55
until we have 100% driver monitoring you

00:41:52 --> 00:41:56
can cheat right now our driver

00:41:54 --> 00:41:59
monitoring system there's a few ways to

00:41:55 --> 00:42:01
cheat it there pretty obvious we're

00:41:58 --> 00:42:02
working on making that better before we

00:42:00 --> 00:42:04
ship a consumer product that can drive

00:42:01 --> 00:42:05
cars I want to make sure that I have

00:42:03 --> 00:42:07
driver monitoring that you can't cheat

00:42:04 --> 00:42:09
what's like a successful driver

00:42:06 --> 00:42:11
monitoring system look like it's keep

00:42:08 --> 00:42:14
its is it all buzz just keeping your

00:42:10 --> 00:42:16
eyes on the road um well a few things so

00:42:13 --> 00:42:18
that's what we went with it first for

00:42:15 --> 00:42:19
driver monitoring I'm checking I'm

00:42:17 --> 00:42:20
actually looking at where your head is

00:42:18 --> 00:42:22
looking but cameras know about my

00:42:19 --> 00:42:24
resolution eyes are a little bit hard to

00:42:21 --> 00:42:28
get well head is this big I mean that is

00:42:23 --> 00:42:30
good and actually a lot of it just as

00:42:27 --> 00:42:32
psychology wise to have that monitor

00:42:29 --> 00:42:35
constantly there it reminds you that you

00:42:31 --> 00:42:36
have to be paying attention but we want

00:42:34 --> 00:42:38
o go further we just hired someone

00:42:35 --> 00:42:40
full-time to come onto the driver

00:42:37 --> 00:42:42
monitoring I want to detect phone in

00:42:39 --> 00:42:43
frame and I want to make sure you're not

00:42:41 --> 00:42:45
sleeping

00:42:42 --> 00:42:49
how much does the camera see of the body

00:42:44 --> 00:42:51
this one not enough not enough the next

00:42:48 --> 00:42:53
one everything

00:42:50 --> 00:42:55
what's interesting fish Atkins we have

00:42:52 --> 00:42:57
we're doing just data collection that

00:42:54 --> 00:43:00
real-time but fish eye is a beautiful

00:42:56 --> 00:43:03
mouth being able to capture the body and

00:42:59 --> 00:43:05
the smartphone is really like the

00:43:02 --> 00:43:06
biggest problem I'll show you I can show

00:43:04 --> 00:43:08
you one of the pictures from from our

00:43:05 --> 00:43:10
finder system

00:43:07 --> 00:43:13
awesome so you're basically saying the

00:43:09 --> 00:43:15
driver monitoring will be the answer to

00:43:12 --> 00:43:18
that um I think the other point that the

00:43:14 --> 00:43:20
original paper is is good as well you're

00:43:17 --> 00:43:22
not asking a human to supervise a

00:43:19 --> 00:43:25
machine without giving them meat they

00:43:21 --> 00:43:27
can take over at a time right our safety

00:43:24 --> 00:43:29
model you can take over we disengage on

00:43:26 --> 00:43:30
both the gas or the brake we don't

00:43:28 --> 00:43:32
disengage on steering I don't feel you

00:43:29 --> 00:43:34
have to but we disengage on gas or brake

00:43:31 --> 00:43:36
so it's very easy for you to take over

00:43:33 --> 00:43:39
and it's very easy for you to re-engage

00:43:35 --> 00:43:41
that switching should be super cheap

00:43:38 --> 00:43:43
yeah the cars that require even

00:43:40 --> 00:43:45
autopilot requires a double press that's

00:43:42 --> 00:43:48
almost I said I like that yeah and then

00:43:44 --> 00:43:49
the cancel um to cancel in

00:43:47 --> 00:43:50
autopilot you either have to press

00:43:48 --> 00:43:52
cancel which no one knows where that is

00:43:49 --> 00:43:53
o they press the brake but a lot of

00:43:51 --> 00:43:55
things you don't you want to press the

00:43:52 --> 00:43:57
brake you want present ass

00:43:54 --> 00:43:58
o you should cancel on gas or wiggle

00:43:56 --> 00:44:00
the steering wheel which is bad as well

00:43:57 --> 00:44:02
wow that's brilliant I haven't heard

00:43:59 --> 00:44:03
anyone articulate at that point I like

00:44:01 --> 00:44:08
what this is all I think about

00:44:02 --> 00:44:11
it's because I think I think actually

00:44:07 --> 00:44:13
Tesla has done a better job than most

00:44:10 --> 00:44:15
automakers at making that frictionless

00:44:12 --> 00:44:19
but you just described that it could be

00:44:14 --> 00:44:22
ven better I love super cruise as an

00:44:18 --> 00:44:23
experience once it's engaged yeah I

00:44:21 --> 00:44:26
don't know if you've used it but getting

00:44:22 --> 00:44:28
the thing to try to engage him yeah I've

00:44:25 --> 00:44:29
used this of Germany's super cruise a

00:44:27 --> 00:44:31
lot so what's their thoughts on the

00:44:28 --> 00:44:33
super Cruiser system in June disengage

00:44:30 --> 00:44:35
super cruise and it falls back to ACC so

00:44:32 --> 00:44:38
my car's like still accelerating it

00:44:34 --> 00:44:40
feels weird otherwise when you actually

00:44:37 --> 00:44:43
have super cruise engaged on the highway

00:44:39 --> 00:44:45
it is phenomenal we bought that Cadillac

00:44:42 --> 00:44:46
we just sold it but we bought it just to

00:44:44 --> 00:44:48
like experience this and I wanted

00:44:45 --> 00:44:50
everyone in the office to be like this

00:44:47 --> 00:44:52
what we're striving to build GM

00:44:49 --> 00:44:54
pioneering with the driver monitoring

00:44:51 --> 00:44:57
you know you like their driver

00:44:53 --> 00:45:00
monitoring system it has some bugs

00:44:56 --> 00:45:04
if there's a sun shining back year it'll

00:44:59 --> 00:45:05
be blind to you by overall mostly yeah

00:45:03 --> 00:45:09
that's so cool you know the stuff that's

00:45:04 --> 00:45:10
uh I don't often talk to people that

00:45:08 --> 00:45:12
because it's such a rare car

00:45:09 --> 00:45:15
unfortunately they bought one yes

00:45:11 --> 00:45:16
possibly for us we lost like by 25k the

00:45:14 --> 00:45:20
deprecation but a Philips worth it

00:45:15 --> 00:45:25
I was very pleasantly surprised that GM

00:45:19 --> 00:45:27
system was so innovative and really that

00:45:24 --> 00:45:30
wasn't advertised much wasn't talked

00:45:26 --> 00:45:32
about much yeah and I was nervous that

00:45:29 --> 00:45:34
it would die that they would disappear

00:45:31 --> 00:45:35
my eyes did they put it on the wrong car

00:45:33 --> 00:45:37
they should've put it on the bolt and

00:45:34 --> 00:45:39
not some weird Cadillac that nobody

00:45:36 --> 00:45:40
bought I think that's gonna be into

00:45:38 --> 00:45:43
they're saying at least is going to be

00:45:39 --> 00:45:45
into their entire fleet so what do you

00:45:42 --> 00:45:47
think about it if as long as we're on

00:45:44 --> 00:45:51
the driver monitoring what do you think

00:45:46 --> 00:45:53
about you know I must claim that driver

00:45:50 --> 00:45:55
monitoring is not needed normally I love

00:45:52 --> 00:45:59
his claims that one is stupid

00:45:54 --> 00:46:01
and you know he's not

00:45:58 --> 00:46:04
gonna have his level five fleet by the

00:46:00 --> 00:46:06
nd of the year hopefully he's like okay

00:46:03 --> 00:46:08
I was wrong I'm gonna add driver

00:46:05 --> 00:46:09
monitoring because when these systems

00:46:07 --> 00:46:11
get to the point that they're only

00:46:08 --> 00:46:15
messing up once every thousand miles

00:46:10 --> 00:46:16
you absolutely need driver monitor so

00:46:14 --> 00:46:18
let me play Delta because I agree with

00:46:15 --> 00:46:22
you but let me play devil's advocate so

00:46:17 --> 00:46:25
ne possibility is that without driver

00:46:21 --> 00:46:29
monitoring people are able to monitor

00:46:24 --> 00:46:32
the self-regulate monitor themselves you

00:46:28 --> 00:46:36
know that so your idea is seeing all the

00:46:31 --> 00:46:38
people sleeping in decimals uh yeah well

00:46:35 --> 00:46:43
I'm a little skeptical of all the people

00:46:37 --> 00:46:45
sleeping in Tesla's because I have I've

00:46:42 --> 00:46:46
stopped paying attention to that kind of

00:46:44 --> 00:46:48
stuff because I want to see real data

00:46:45 --> 00:46:50
there's too much glorified it doesn't

00:46:47 --> 00:46:52
feel scientific to me so I want to know

00:46:49 --> 00:46:56
you know what how many people are really

00:46:51 --> 00:46:59
sleeping in Tesla's vs. sleeping I've I

00:46:55 --> 00:47:01
was driving here sleep-deprived in a car

00:46:58 --> 00:47:03
with no automation I was falling asleep

00:47:00 --> 00:47:06
I agree that it's high P it's just like

00:47:02 --> 00:47:08
you know what if you under I've am

00:47:05 --> 00:47:10
wondering I think I rented a my last

00:47:07 --> 00:47:10
autopilot experience was I rented a

00:47:09 --> 00:47:13
model

00:47:09 --> 00:47:15
three in march and drove it around the

00:47:12 --> 00:47:16
wheel thing is annoying and the reason

00:47:14 --> 00:47:18
the wheel thing is annoying we use the

00:47:15 --> 00:47:20
wheel thing as well but we don't

00:47:17 --> 00:47:22
disengage on wheel for Tesla you have to

00:47:19 --> 00:47:25
uch the wheel just enough you should

00:47:21 --> 00:47:27
trigger the torque sensor to tell it

00:47:24 --> 00:47:30
hat you're there but not enough as to

00:47:26 --> 00:47:31
disengage it which don't use it for two

00:47:29 --> 00:47:32
things

00:47:30 --> 00:47:34
you disengage one wheel you don't have

00:47:31 --> 00:47:37
to that whole experience Wow beautiful

00:47:33 --> 00:47:39
put that all those elements even if you

00:47:36 --> 00:47:42
don't have driver monitoring that whole

00:47:38 --> 00:47:45
xperience needs to be better driver

00:47:41 --> 00:47:46
monitoring I think would make I mean I

00:47:44 --> 00:47:48
think super cruise is a better

00:47:45 --> 00:47:49
experience once it's engaged over

00:47:47 --> 00:47:51
autopilot

00:47:48 --> 00:47:53
I think super cruise is our transition

00:47:50 --> 00:47:56
to engagement and disengagement are

00:47:52 --> 00:47:58
significantly worse yeah so there's a

00:47:55 --> 00:48:00
tricky thing because if I were to

00:47:57 --> 00:48:02
criticize super cruise is uh it's a

00:47:59 --> 00:48:04
little too crude and uh I think it's

00:48:01 --> 00:48:06
like six seconds or something if you

00:48:03 --> 00:48:08
look off-road you'll start warning you

00:48:05 --> 00:48:14
it's some ridiculously long period of

00:48:07 --> 00:48:18
time and just the way it I think it's

00:48:13 --> 00:48:20
basically it's a binary chili adapter it

00:48:17 --> 00:48:22
yeah it's it just needs to learn more

00:48:19 --> 00:48:25
about you and used to communicate what

00:48:21 --> 00:48:27
it sees about you more like I'm not you

00:48:24 --> 00:48:28
know Tesla shows what it sees about the

00:48:26 --> 00:48:30
xternal world it would be nice the

00:48:27 --> 00:48:32
supercruise would tell us what it sees

00:48:29 --> 00:48:34
about the internal world it's even worse

00:48:31 --> 00:48:35
than that you press the button to engage

00:48:33 --> 00:48:39
and it just says super cruise

00:48:34 --> 00:48:43
unavailable yeah why why yeah that

00:48:38 --> 00:48:45
ransparency is good we've renamed the

00:48:42 --> 00:48:48
driver monitoring packet to driver state

00:48:44 --> 00:48:49
service state we have car state packet

00:48:47 --> 00:48:52
which has the state of the car driver

00:48:48 --> 00:48:54
state packet which I stay the driver so

00:48:51 --> 00:48:59
what does itah make their BAC

00:48:53 --> 00:49:04
must be do you think that's possible

00:48:58 --> 00:49:06
with computer vision absolutely so to me

00:49:03 --> 00:49:08
it's an open question I don't haven't

00:49:05 --> 00:49:09
looked into too much they actually had

00:49:07 --> 00:49:11
quite seriously looked at the literature

00:49:08 --> 00:49:12
it's not obvious to me that from the

00:49:10 --> 00:49:14
yes and so on you can tell you might

00:49:11 --> 00:49:15
need to stuff from the car as well yeah

00:49:13 --> 00:49:17
you might need how they're controlling

00:49:14 --> 00:49:18
the car right and that's fundamentally

00:49:16 --> 00:49:22
at the end of the day what you care

00:49:17 --> 00:49:22
about you but I think especially when

00:49:21 --> 00:49:23
people are really drunk they're not

00:49:21 --> 00:49:25
controlling the car nearly

00:49:22 --> 00:49:27
smoothly as they would look at them

00:49:24 --> 00:49:28
walking right there the car is like an

00:49:26 --> 00:49:30
extension of the body so I think you

00:49:27 --> 00:49:32
could totally detect and if you could

00:49:30 --> 00:49:34
fix people who drunk distracted asleep

00:49:31 --> 00:49:37
if you fix those three yeah this is

00:49:33 --> 00:49:39
that's huge so what are the current

00:49:36 --> 00:49:40
limitations of open pilot what are the

00:49:38 --> 00:49:45
main problems that still need to be

00:49:39 --> 00:49:47
solved um we're hopefully fixing a few

00:49:44 --> 00:49:51
of them in 0-6 we're not as good as auto

00:49:46 --> 00:49:56
pilot at stop cars so if you're coming

00:49:50 --> 00:49:58
up to a red light at like 55 so it's the

00:49:55 --> 00:50:00
radar stopped car problem which is

00:49:57 --> 00:50:02
responsible to auto pilot accidents it's

00:49:59 --> 00:50:06
hard to differentiate a stopped car from

00:50:01 --> 00:50:07
a like signpost yes that ecology um so

00:50:05 --> 00:50:09
you have to fuse you have to do this

00:50:06 --> 00:50:10
visually there's no way from the radar

00:50:08 --> 00:50:12
data to tell the difference maybe you

00:50:09 --> 00:50:15
could make a map but I really believe in

00:50:11 --> 00:50:18
mapping at all anymore um really what

00:50:14 --> 00:50:21
you don't believe in mapping no so you

00:50:17 --> 00:50:23
basically the open pilot solution is

00:50:20 --> 00:50:25
aying react to the environment is just

00:50:22 --> 00:50:27
like human doing beings and then

00:50:24 --> 00:50:30
eventually when you want to do navigate

00:50:26 --> 00:50:32
on open pilot I'll train the net to look

00:50:29 --> 00:50:35
at ways all runways in the background

00:50:31 --> 00:50:37
I'll train a car using GPS at all we use

00:50:34 --> 00:50:39
it to crown trees we use it to very

00:50:36 --> 00:50:41
carefully ground treat the paths we have

00:50:38 --> 00:50:44
a stack which can recover a relative to

00:50:40 --> 00:50:45
10 centimeters over one minute and then

00:50:43 --> 00:50:47
we use that to ground truth exactly

00:50:44 --> 00:50:49
where the car went in that local part of

00:50:46 --> 00:50:51
the environment but it's all local how

00:50:48 --> 00:50:53
are you testing in general just for

00:50:50 --> 00:50:56
yourself like experiments stuff all

00:50:52 --> 00:50:59
right were you were you located San

00:50:55 --> 00:51:01
Diego San Diego yeah okay Oh what you

00:50:58 --> 00:51:03
basically drive around there then

00:51:00 --> 00:51:05
collect some data and watch on Florence

00:51:02 --> 00:51:08
we have a simulator now and we have our

00:51:04 --> 00:51:09
simulators really cool our simulator is

00:51:07 --> 00:51:12
not it's not like a unity based

00:51:09 --> 00:51:15
simulator our simulator lets us load in

00:51:11 --> 00:51:19
real estate what I mean we can load in a

00:51:14 --> 00:51:21
drive and simulate what the system would

00:51:18 --> 00:51:25
have done on the historical data ooh

00:51:20 --> 00:51:27
nice interesting so what yeah right now

00:51:24 --> 00:51:30
e're only using it for testing but as

00:51:26 --> 00:51:33
oon as we start using it for training

00:51:29 --> 00:51:34
what's your feeling about the real world

00:51:32 --> 00:51:36
versus simulation do you like simulation

00:51:33 --> 00:51:37
for training if this moves to training

00:51:35 --> 00:51:39
Chuck

00:51:36 --> 00:51:41
we have to distinguish two types of

00:51:38 --> 00:51:45
simulators right there's a simulator

00:51:40 --> 00:51:48
that light is completely fake I could

00:51:45 --> 00:51:51
get my car to drive around in GTA mm-hmm

00:51:47 --> 00:51:55
um I feel that this kind of simulator is

00:51:50 --> 00:51:58
useless you're never there's so many my

00:51:54 --> 00:52:00
analogy here is like okay fine you're

00:51:57 --> 00:52:02
not solving the computer vision problem

00:51:59 --> 00:52:04
but you're solving the computer graphics

00:52:01 --> 00:52:06
problem right and you don't think you

00:52:03 --> 00:52:10
can get very far about creating ultra

00:52:05 --> 00:52:11
realistic graphics no because you can

00:52:09 --> 00:52:13
create ultra realistic graphics of the

00:52:10 --> 00:52:15
road now create alter a realistic

00:52:12 --> 00:52:18
behavioral models of the other cars oh

00:52:14 --> 00:52:21
well I'll just use my self-driving no

00:52:17 --> 00:52:23
you won't you need real you need actual

00:52:20 --> 00:52:25
human behavior because that's what

00:52:22 --> 00:52:27
you're trying to learn the dead driving

00:52:24 --> 00:52:29
does not have a spec the definition of

00:52:26 --> 00:52:32
driving is what humans do when they

00:52:28 --> 00:52:35
drive whatever way mode does I don't

00:52:31 --> 00:52:37
hink it's driving right well I think if

00:52:34 --> 00:52:39
you win more than others its if there's

00:52:36 --> 00:52:41
any useful reinforcement learning I've

00:52:39 --> 00:52:43
seen it used quite well I study

00:52:40 --> 00:52:46
pedestrians a lot too is try to train

00:52:42 --> 00:52:47
models from real data of how pedestrians

00:52:45 --> 00:52:49
move and try to use reinforcement

00:52:46 --> 00:52:52
learning models to make pedestrians move

00:52:48 --> 00:52:55
in human-like ways by that point you've

00:52:51 --> 00:52:58
already gone so many layers you detected

00:52:54 --> 00:53:01
a pedestrian did you did you hand code

00:52:57 --> 00:53:03
the feature vector of their state did

00:53:00 --> 00:53:06
you guys learn anything from computer

00:53:02 --> 00:53:08
vision before deep learning well okay

00:53:05 --> 00:53:11
ou know I feel like this is a

00:53:07 --> 00:53:13
perception to you is the sticking point

00:53:10 --> 00:53:15
does that mean what what's what's the

00:53:12 --> 00:53:20
hardest part of the stack here there is

00:53:14 --> 00:53:23
no human understandable feature vector

00:53:19 --> 00:53:25
separating perception and planning

00:53:22 --> 00:53:27
that's the best way I can I can put that

00:53:24 --> 00:53:30
here is no so it's all together and

00:53:26 --> 00:53:33
it's it's a that's a joint problem so

00:53:29 --> 00:53:34
you can take localization localization

00:53:32 --> 00:53:35
and planning there is a human

00:53:33 --> 00:53:37
understandable feature vector between

00:53:34 --> 00:53:39
these two things I mean okay so I have

00:53:36 --> 00:53:40
like three degrees position three

00:53:38 --> 00:53:42
degrees orientation and those

00:53:39 --> 00:53:43
derivatives maybe those second

00:53:41 --> 00:53:45
erivatives right that's human

00:53:42 --> 00:53:49
understandable that's physical the

00:53:44 --> 00:53:52
between perception and planning

00:53:48 --> 00:53:55
um so like way Moe has a perception

00:53:51 --> 00:53:57
stack and then a planner um and one of

00:53:54 --> 00:54:00
the things way matters right is they

00:53:56 --> 00:54:03
have a simulator that can separate those

00:53:59 --> 00:54:04
two they can like replay their

00:54:02 --> 00:54:06
perception data and test their system

00:54:03 --> 00:54:06
which is what I'm talking about about

00:54:05 --> 00:54:08
like the two different kinds of

00:54:05 --> 00:54:09
simulators there's the kind that can

00:54:07 --> 00:54:13
work on real data and is the kind of

00:54:08 --> 00:54:15
can't work on real data now the problem

00:54:12 --> 00:54:17
is that I don't think you can hand code

00:54:14 --> 00:54:18
a feature vector right like like you

00:54:16 --> 00:54:20
have some lists of like well here's my

00:54:17 --> 00:54:22
list of cars on the scenes here's my

00:54:19 --> 00:54:24
list of pedestrians in the scene this

00:54:21 --> 00:54:28
n't what humans are doing what are

00:54:23 --> 00:54:30
humans doing global some something

00:54:27 --> 00:54:34
you're saying that's too difficult to

00:54:29 --> 00:54:36
handle I'm saying that there is no state

00:54:33 --> 00:54:38
vector given a perfect I could give you

00:54:35 --> 00:54:39
the best team of engineers in the world

00:54:37 --> 00:54:42
to build a perception system and the

00:54:38 --> 00:54:43
best team to build a planner all you

00:54:41 --> 00:54:46
have to do is define the state vector

00:54:42 --> 00:54:49
that separates those two I'm missing the

00:54:45 --> 00:54:51
state vector that separates those two

00:54:48 --> 00:54:54
what do you mean so what is the output

00:54:50 --> 00:54:59
of your perception system

00:54:53 --> 00:55:02
I'll put it the perception system it's

00:54:58 --> 00:55:04
theirs okay well there's several ways to

00:55:01 --> 00:55:06
do it one is this lamp components

00:55:03 --> 00:55:07
localization the other is drivable area

00:55:05 --> 00:55:09
drivable space drivable space and then

00:55:06 --> 00:55:15
there's the different objects in the

00:55:08 --> 00:55:18
scene and different objects in the scene

00:55:14 --> 00:55:20
over time maybe to give you input to

00:55:17 --> 00:55:22
then try to start modeling the

00:55:19 --> 00:55:24
trajectories of those objects sure

00:55:21 --> 00:55:26
that's it I can give you a concrete

00:55:23 --> 00:55:26
xample of something you missed what's

00:55:25 --> 00:55:29
that

00:55:25 --> 00:55:31
so say there's a bush in the scene

00:55:28 --> 00:55:33
humans understand that when they see

00:55:30 --> 00:55:36
this bush that there may or may not be a

00:55:32 --> 00:55:37
car behind that bush drivable area and a

00:55:35 --> 00:55:40
list of objects does not include that

00:55:36 --> 00:55:42
humans are doing this constantly at the

00:55:39 --> 00:55:45
simplest intersections so now you have

00:55:41 --> 00:55:47
to talk about occluded area right right

00:55:44 --> 00:55:50
but even that what do you mean by

00:55:46 --> 00:55:52
occluded okay so I can't see it well if

00:55:49 --> 00:55:54
it's the other side of a house I don't

00:55:51 --> 00:55:56
care what's the likelihood that there's

00:55:53 --> 00:55:59
a car in that occluded area right and if

00:55:55 --> 00:56:00
you say okay we'll add that I can come

00:55:58 --> 00:56:02
up with 10 more examples that you can't

00:55:59 --> 00:56:04
add

00:56:01 --> 00:56:06
certainly occluded area would be

00:56:03 --> 00:56:08
something that simulator would have

00:56:05 --> 00:56:12
because it's simulating the entire you

00:56:07 --> 00:56:14
know occlusion is part of it a part of a

00:56:11 --> 00:56:16
vision stack pleasures that what I'm

00:56:13 --> 00:56:20
saying is if you have a hand engineered

00:56:15 --> 00:56:22
if your perception system output can be

00:56:19 --> 00:56:25
written in a spec document it is

00:56:21 --> 00:56:28
incomplete yeah idem you know certainly

00:56:24 --> 00:56:30
it's it's hard to argue with that

00:56:27 --> 00:56:32
because in the end that's going to be

00:56:29 --> 00:56:34
true yes I'll tell you what the output

00:56:31 --> 00:56:36
of our perception system is was that

00:56:33 --> 00:56:38
it's a thousand it's a thousand twenty

00:56:35 --> 00:56:38
four dimensional vector training

00:56:37 --> 00:56:41
underling

00:56:37 --> 00:56:44
oh no not it's a thousand twenty four

00:56:40 --> 00:56:47
dimensions of who knows what because its

00:56:43 --> 00:56:49
operating on real data yeah yeah

00:56:46 --> 00:56:51
and that's the perception that's the

00:56:48 --> 00:56:53
perception stake right think about a

00:56:50 --> 00:56:55
n autoencoder four phases

00:56:52 --> 00:57:00
alright if you have an autoencoder four

00:56:54 --> 00:57:01
phases and you say it has 256 dimensions

00:56:59 --> 00:57:02
in middle and I'm taking a face over

00:57:00 --> 00:57:05
here and projecting it to a face over

00:57:01 --> 00:57:06
here yeah can you hand label all 256 of

00:57:04 --> 00:57:08
those dimensions

00:57:05 --> 00:57:11
well no but those are generated

00:57:07 --> 00:57:13
automatically but they but even if you

00:57:10 --> 00:57:16
tried to do it by hand could you come up

00:57:12 --> 00:57:17
with a spec for your and between your

00:57:15 --> 00:57:20
encoder and your decoder

00:57:16 --> 00:57:22
no no because that's not it is it wasn't

00:57:19 --> 00:57:25
designed but there no no but if you

00:57:21 --> 00:57:28
could design it if you could design a

00:57:24 --> 00:57:31
face Reconstructor system could you come

00:57:27 --> 00:57:33
up with a spec no but I think we're

00:57:30 --> 00:57:36
missing here a little bit I think the

00:57:32 --> 00:57:38
you're just being very poetic about

00:57:35 --> 00:57:40
expressing a fundamental problem of

00:57:37 --> 00:57:45
simulators that they're going to be

00:57:39 --> 00:57:47
missing so much that the feature vector

00:57:44 --> 00:57:50
would just look fundamentally different

00:57:46 --> 00:57:53
from in the simulated world in the real

00:57:49 --> 00:57:56
world I'm not making a claim about

00:57:52 --> 00:57:59
simulators I'm making a claim about the

00:57:55 --> 00:58:00
spec division between perception and

00:57:58 --> 00:58:03
planning and planning even in your

00:57:59 --> 00:58:05
system just in general right just in

00:58:02 --> 00:58:07
general if you're trying to build a car

00:58:04 --> 00:58:09
that drives if you're trying to hand

00:58:06 --> 00:58:11
code the output of your perception

00:58:08 --> 00:58:12
system like saying like here's a list of

00:58:10 --> 00:58:13
all the cars in the scene here's a list

00:58:11 --> 00:58:15
of all the people here's a list of the

00:58:12 --> 00:58:16
included areas here's a vector of

00:58:14 --> 00:58:18
drivable areas

00:58:15 --> 00:58:20
insufficient and if you start to believe

00:58:17 --> 00:58:22
that you realize that what Wayman crews

00:58:19 --> 00:58:24
are doing is impossible currently what

00:58:21 --> 00:58:27
we're doing is the perception problem

00:58:23 --> 00:58:31
it's converting the scene into a

00:58:26 --> 00:58:33
chessboard you yeah and then you reason

00:58:30 --> 00:58:35
some basic reasoning around that

00:58:32 --> 00:58:39
chessboard yeah and you're saying that

00:58:34 --> 00:58:41
really there's a lot missing there first

00:58:38 --> 00:58:44
of all why are we talking about this cuz

00:58:40 --> 00:58:46
isn't this a full autonomy is this

00:58:43 --> 00:58:49
omething you think about oh I want to

00:58:45 --> 00:58:53
win self-driving cars so you're really

00:58:48 --> 00:58:55
our definition of win includes level of

00:58:52 --> 00:58:57
ool five level five I don't think level

00:58:54 --> 00:59:02
four is a real thing I want to build I

00:58:56 --> 00:59:07
want to build the alphago of driving so

00:59:01 --> 00:59:11
alphago is really end to end yeah is

00:59:06 --> 00:59:14
uh yeah it's end to end and do you think

00:59:10 --> 00:59:15
this whole problem is those that also

00:59:13 --> 00:59:18
kind of what you're getting at with the

00:59:14 --> 00:59:20
perception and the planning is that this

00:59:17 --> 00:59:22
whole problem the right way to do it is

00:59:19 --> 00:59:24
really to learn the entire thing I'll

00:59:21 --> 00:59:26
argue that not only is it the right way

00:59:23 --> 00:59:30
it's the only way that's going to exceed

00:59:25 --> 00:59:31
human performance well certainly true

00:59:29 --> 00:59:34
for go everyone who tried to hand code

00:59:30 --> 00:59:35
go things built human inferior things

00:59:33 --> 00:59:37
and then someone came along and wrote

00:59:34 --> 00:59:39
some 10,000 line thing that doesn't know

00:59:36 --> 00:59:44
anything about go that beat everybody

00:59:38 --> 00:59:48
it's 10,000 lines true in that sense the

00:59:43 --> 00:59:53
open question then that maybe I can

00:59:47 --> 00:59:55
ask you is uh driving is much harder

00:59:52 --> 00:59:59
than go the open question is how much

00:59:54 --> 01:00:01
arder so how because I think the AH

00:59:58 --> 01:00:02
mosque approach here with planning and

01:00:00 --> 01:00:06
perception it's similar to what you're

01:00:01 --> 01:00:09
describing which is really turning into

01:00:05 --> 01:00:11
not some kind of modular thing but

01:00:08 --> 01:00:13
really do formulate is a learning

01:00:10 --> 01:00:17
problem and it solves a learning problem

01:00:12 --> 01:00:19
of scale so how many years put one is

01:00:16 --> 01:00:21
how many years would it take to solve

01:00:18 --> 01:00:26
this problem or just how hard is this

01:00:20 --> 01:00:29
freaking problem well the cool thing is

01:00:25 --> 01:00:32
I think there's a lot of value that we

01:00:28 --> 01:00:37
can deliver along the way I think that

01:00:31 --> 01:00:40
you can build lane-keeping assist

01:00:36 --> 01:00:44
actually plus adaptive cruise control

01:00:39 --> 01:00:47
plus okay looking at ways extends to

01:00:43 --> 01:00:48
like all of driving yeah most of driving

01:00:46 --> 01:00:50
varies

01:00:47 --> 01:00:51
oh your adaptive cruise control treats

01:00:49 --> 01:00:54
red lights like cars okay

01:00:50 --> 01:00:55
so let's jump around with you you

01:00:53 --> 01:00:56
mentioned that you didn't like navigate

01:00:54 --> 01:00:58
an autopilot yeah

01:00:55 --> 01:01:00
what advice how would you make it better

01:00:57 --> 01:01:02
do you think as a feature that if it's

01:00:59 --> 01:01:07
done really well it's a good feature I

01:01:01 --> 01:01:09
think that it's too reliant on like hand

01:01:06 --> 01:01:11
coded hacks for like how does navigate

01:01:08 --> 01:01:13
an autopilot do a lane change it

01:01:10 --> 01:01:15
actually does the same lane change every

01:01:12 --> 01:01:17
time and it feels mechanical humans do

01:01:14 --> 01:01:19
different lane changes human sometime

01:01:16 --> 01:01:21
will do a slow one sometimes do a fast

01:01:18 --> 01:01:22
one navigate an autopilot at least every

01:01:20 --> 01:01:25
time I used it it did the identical

01:01:21 --> 01:01:27
anguage how do you learn I mean this is

01:01:24 --> 01:01:30
a fundamental thing actually yeah is uh

01:01:26 --> 01:01:34
the braking and an accelerating

01:01:29 --> 01:01:35
something that's still test the probably

01:01:33 --> 01:01:38
does it better than most cars but it

01:01:34 --> 01:01:40
still doesn't do a great job of creating

01:01:37 --> 01:01:43
a comfortable natural experience and

01:01:39 --> 01:01:46
navigate on autopilot just lane changes

01:01:42 --> 01:01:52
an extension of that so how do you learn

01:01:45 --> 01:01:54
to do natural lane change so we have it

01:01:51 --> 01:01:58
and I can talk about how it works so I

01:01:53 --> 01:02:00
feel that we have the solution for

01:01:57 --> 01:02:02
lateral but we don't yet have the

01:01:59 --> 01:02:03
solution for longitudinal there's a few

01:02:01 --> 01:02:06
reasons longitudinal is harder than

01:02:02 --> 01:02:08
lateral the lane change component the

01:02:05 --> 01:02:12
way that we train on it very simply is

01:02:07 --> 01:02:15
like our model has an input for whether

01:02:11 --> 01:02:17
it's doing a lane change or not and then

01:02:14 --> 01:02:19
when we train the end-to-end model we

01:02:16 --> 01:02:22
hand label all the lane changes because

01:02:18 --> 01:02:23
you have to I struggled a long time

01:02:21 --> 01:02:25
about not wanting to do that but I think

01:02:22 --> 01:02:27
you have to because you order the

01:02:24 --> 01:02:28
training data for the train data right

01:02:26 --> 01:02:30
well we actually we have an automatic

01:02:27 --> 01:02:31
ground truth or which automatically

01:02:29 --> 01:02:33
labels all the lane changes was that

01:02:30 --> 01:02:35
possible to automatically label interest

01:02:32 --> 01:02:36
yeah and detect the lane I see when it

01:02:34 --> 01:02:37
crosses it right I don't have to get

01:02:35 --> 01:02:39
hat that high percent accuracy but it's

01:02:36 --> 01:02:43
like 95 good enough

01:02:38 --> 01:02:45
now I set the bit when it's doing the

01:02:42 --> 01:02:48
lane change in the end-to-end learning

01:02:44 --> 01:02:49
and then I set it to zero when it's not

01:02:47 --> 01:02:50
doing a lane change so now if I wanted

01:02:48 --> 01:02:52
to do a lane change a test time I just

01:02:49 --> 01:02:55
put the bit to a 1 and I'll do later

01:02:51 --> 01:02:57
yeah but so if you look at the space of

01:02:54 --> 01:02:59
lane change you know some percentage not

01:02:56 --> 01:03:02
a hundred percent that we make as humans

01:02:58 --> 01:03:04
is not a pleasant experience because we

01:03:01 --> 01:03:06
messed some part of it up yeah it's

01:03:03 --> 01:03:08
nerve-racking to change even look at the

01:03:05 --> 01:03:10
seizure des accelerate how do we label

01:03:07 --> 01:03:13
the ones that are natural and feel good

01:03:09 --> 01:03:15
you know that's the because that's your

01:03:12 --> 01:03:17
ultimate criticism the current Oh

01:03:14 --> 01:03:19
navigate not apologies doesn't feel good

01:03:16 --> 01:03:21
well the current navigator on autopilot

01:03:18 --> 01:03:23
is a hand coded policy written by an

01:03:20 --> 01:03:25
engineer in a room who probably went out

01:03:22 --> 01:03:29
and tested it a few times on the 280

01:03:24 --> 01:03:31
probably a more a better version of that

01:03:28 --> 01:03:34
but yes that's how we would have written

01:03:30 --> 01:03:35
it a comment yeah Tesla they tested it

01:03:33 --> 01:03:40
and it might have been two engineers

01:03:34 --> 01:03:42
yeah no but so if you learn the lane

01:03:39 --> 01:03:44
change if you learn how to do a lane

01:03:41 --> 01:03:45
change from data just like just like you

01:03:43 --> 01:03:47
have a label that says lane change and

01:03:44 --> 01:03:49
then you put it in when you want to do

01:03:46 --> 01:03:51
the lane change it'll automatically do

01:03:48 --> 01:03:54
the lane change that's appropriate for

01:03:50 --> 01:03:58
the situation now to get it the problem

01:03:53 --> 01:04:00
of some humans do bad lane changes we

01:03:57 --> 01:04:02
haven't worked too much on this problem

01:03:59 --> 01:04:05
yet it's not that much of a problem in

01:04:01 --> 01:04:07
practice my theory is that all good

01:04:04 --> 01:04:09
rivers are good in the same way and all

01:04:06 --> 01:04:11
bad drivers are bad in different ways

01:04:08 --> 01:04:13
and we've we've seen some data to back

01:04:10 --> 01:04:17
this up well beautifully put so you just

01:04:12 --> 01:04:19
basically if that's true yeah hypothesis

01:04:16 --> 01:04:22
then you know task is to discover the

01:04:18 --> 01:04:24
good drivers um the good drivers stand

01:04:21 --> 01:04:25
out because they're in one cluster and

01:04:23 --> 01:04:26
the bad drivers are scattered all over

01:04:24 --> 01:04:29
the place and your net learns the

01:04:25 --> 01:04:30
cluster yeah that's uh

01:04:28 --> 01:04:34
so you just learned from the good

01:04:29 --> 01:04:35
rivers and they're easy to cluster we

01:04:33 --> 01:04:36
learned from all of them and that

01:04:34 --> 01:04:38
automatically learns the policy that's

01:04:35 --> 01:04:40
like the majority but we'll eventually

01:04:37 --> 01:04:43
probably afterthought so if that theory

01:04:39 --> 01:04:48
is true I hope it's true because the the

01:04:42 --> 01:04:48
counter theory is there is many clusters

01:04:48 --> 01:04:53
maybe

01:04:50 --> 01:04:56
but rarely many clusters of good drivers

01:04:52 --> 01:04:58
because if there's one cluster of good

01:04:55 --> 01:04:59
rivers you can at least discover a set

01:04:57 --> 01:05:01
of policies you can learn a set of

01:04:58 --> 01:05:04
policies which would be good universally

01:05:00 --> 01:05:06
eah that would be a nice that would be

01:05:03 --> 01:05:08
nice if it's true and you're saying that

01:05:05 --> 01:05:10
here are some evidence that let's say

01:05:07 --> 01:05:12
lane changes can be clustered into four

01:05:09 --> 01:05:14
clusters right right there's this finite

01:05:11 --> 01:05:16
level of I would argue that all four of

01:05:13 --> 01:05:18
those are good clusters all the things

01:05:15 --> 01:05:21
that are random are noise and probably

01:05:17 --> 01:05:22
bad and which one of the four you pick

01:05:20 --> 01:05:24
or maybe it's Tanner maybe it's twenty

01:05:21 --> 01:05:27
ou can learn them it's context

01:05:23 --> 01:05:30
dependent it depends on the scene and

01:05:26 --> 01:05:31
the hope is it's not too dependent on

01:05:29 --> 01:05:34
the driver

01:05:30 --> 01:05:36
yeah the hope is that it all washes out

01:05:33 --> 01:05:38
he hope is that there's that the

01:05:35 --> 01:05:40
distribution is not bimodal the hope is

01:05:37 --> 01:05:43
that it's a nice gas man so what advice

01:05:39 --> 01:05:46
would you give to Tessa how to fix how

01:05:42 --> 01:05:48
to improve navigate an autopilot the

01:05:45 --> 01:05:50
lessons you've learned from Kamiya

01:05:47 --> 01:05:53
the only real advice I would give to

01:05:49 --> 01:05:56
Tesla is please put driver monitoring in

01:05:52 --> 01:05:57
your cars with respect to improvement

01:05:55 --> 01:05:59
you can't do that anymore I said to

01:05:56 --> 01:06:02
interrupt but you know there's a

01:05:58 --> 01:06:03
practical nature of many of hundreds of

01:06:01 --> 01:06:06
thousands of cars being produced that

01:06:02 --> 01:06:08
don't have a good driver facing camera

01:06:05 --> 01:06:10
the model 3 has a selfie cam is it not

01:06:07 --> 01:06:12
good enough did they not have put IR

01:06:09 --> 01:06:14
LEDs for night that's a good question

01:06:11 --> 01:06:17
but I do know that the is fisheye in its

01:06:13 --> 01:06:18
relatively low resolution so it's really

01:06:16 --> 01:06:20
not this I he wasn't

01:06:17 --> 01:06:22
it wasn't designed for Arman you can

01:06:19 --> 01:06:26
hope that you can kind of scrape up and

01:06:21 --> 01:06:29
and have something from it yeah but

01:06:25 --> 01:06:31
put it in today put it in today today

01:06:28 --> 01:06:33
every time I've heard Carpathia talk

01:06:30 --> 01:06:34
about the problem and talking about life

01:06:32 --> 01:06:36
software 2.0 and how the machine

01:06:33 --> 01:06:37
learning is gobbling up everything I

01:06:35 --> 01:06:39
think this is absolutely the right

01:06:36 --> 01:06:41
strategy I think that he didn't write

01:06:38 --> 01:06:43
navigate on autopilot I think somebody

01:06:40 --> 01:06:45
else did and kind of hacked it on top of

01:06:42 --> 01:06:47
that stuff I think what Carpathia says

01:06:44 --> 01:06:49
wait a second why did we hand code this

01:06:46 --> 01:06:50
lane change policy with all these magic

01:06:48 --> 01:06:51
numbers we're gonna learn it from data

01:06:49 --> 01:06:53
they'll fix it they already know what to

01:06:50 --> 01:06:55
do there well that that's that's Andres

01:06:52 --> 01:06:57
job is to turn everything into a

01:06:54 --> 01:07:00
learning problem and collect a huge

01:06:56 --> 01:07:02
amount of data the the reality is though

01:06:59 --> 01:07:04
not every problem could be turned into a

01:07:01 --> 01:07:06
learning problem in the short term in

01:07:03 --> 01:07:07
the end

01:07:05 --> 01:07:11
everything would be a learning problem

01:07:06 --> 01:07:14
the reality is like if you want to build

01:07:10 --> 01:07:17
alpha vehicles today it will likely

01:07:13 --> 01:07:19
involve no learning and that's that's

01:07:16 --> 01:07:22
the the reality is so at which point

01:07:18 --> 01:07:24
does learning start it's the crutch

01:07:21 --> 01:07:26
statement that lidar is a crutch

01:07:23 --> 01:07:29
on which point will learning get up to

01:07:25 --> 01:07:31
part of human performance it's all over

01:07:28 --> 01:07:33
human performance and imagenet

01:07:30 --> 01:07:37
classification under ivan is the

01:07:32 --> 01:07:39
question still it is a question I'll say

01:07:36 --> 01:07:41
this I'm I'm here to play for 10 years

01:07:38 --> 01:07:43
I'm not here to try to I'm here to play

01:07:40 --> 01:07:45
for 10 years and make money along the

01:07:42 --> 01:07:47
way I'm not here to try to promise

01:07:44 --> 01:07:49
people that I'm gonna have my l5 taxi

01:07:46 --> 01:07:51
Network up and working in two years do

01:07:48 --> 01:07:53
you think those mistake yes what do you

01:07:50 --> 01:07:55
think there was the motivation behind

01:07:52 --> 01:07:58
saying that other companies are also

01:07:54 --> 01:08:02
promising alpha vehicles with their

01:07:57 --> 01:08:04
different approaches in 2020 2021 2022

01:08:01 --> 01:08:07
if anybody would like to bet me that

01:08:03 --> 01:08:09
hose things do not pan out I will I

01:08:06 --> 01:08:12
will bet you even money even money I'll

01:08:08 --> 01:08:14
bet you as much as you want so are you

01:08:11 --> 01:08:16
worried about what's going to happen

01:08:13 --> 01:08:19
because you're not in full agreement on

01:08:15 --> 01:08:22
that I was going to happen when 2022 21

01:08:18 --> 01:08:24
come around and nobody has fleets of

01:08:21 --> 01:08:27
autonomous vehicles no you can look at

01:08:23 --> 01:08:29
he history if you go back five years

01:08:26 --> 01:08:32
ago they were all promised by 2018 and

01:08:28 --> 01:08:35
2017 but they weren't that strong of

01:08:31 --> 01:08:38
promises I mean Ford really declared

01:08:34 --> 01:08:41
pretty that I think not many have

01:08:37 --> 01:08:44
declared as as like definitively as they

01:08:40 --> 01:08:46
have now these dates well okay so let's

01:08:43 --> 01:08:50
eparate l4 and l5 do I think that it's

01:08:45 --> 01:08:52
possible for way mo to continue to kind

01:08:49 --> 01:08:54
of like like hack on their system until

01:08:51 --> 01:08:58
it gets to level 4 in Chandler Arizona

01:08:53 --> 01:09:02
yes knows no safety driver Chandler

01:08:57 --> 01:09:02
Arizona yeah but by OSI which year are

01:09:01 --> 01:09:05
we talking about

01:09:01 --> 01:09:08
oh I even think that's possible by like

01:09:04 --> 01:09:13
2020 2021 but level 4 Chandler Arizona

01:09:07 --> 01:09:17
not level 5 New York City level 4

01:09:12 --> 01:09:19
meaning some very defined streets it

01:09:16 --> 01:09:20
works out really well very defined

01:09:18 --> 01:09:22
streets and then

01:09:19 --> 01:09:25
these streets are pretty empty if most

01:09:21 --> 01:09:27
of the streets are covered in way MOS we

01:09:24 --> 01:09:30
mo can kind of change the definition of

01:09:26 --> 01:09:32
what driving is hmm right if your

01:09:29 --> 01:09:35
self-driving network is the majority of

01:09:31 --> 01:09:36
cars in an area they only need to be

01:09:34 --> 01:09:38
safe with respect to each other and all

01:09:35 --> 01:09:41
the humans will need to learn to adapt

01:09:37 --> 01:09:41
o them now go drive in downtown New

01:09:40 --> 01:09:45
York

01:09:40 --> 01:09:47
oh yeah that's already you can talk

01:09:44 --> 01:09:48
about autonomy in like like fun farms it

01:09:46 --> 01:09:52
already works great because you can

01:09:48 --> 01:09:57
really just follow the GPS line so what

01:09:51 --> 01:09:59
does success look like for comm AI what

01:09:56 --> 01:10:01
are the milestones like where you

01:09:58 --> 01:10:04
can sit back with some champagne and say

01:10:00 --> 01:10:08
we did it boys and girls

01:10:03 --> 01:10:10
well it's never over yeah but don't be

01:10:07 --> 01:10:13
let's drink champagne everything

01:10:09 --> 01:10:15
straight so what is a good what are some

01:10:12 --> 01:10:20
wins um a big milestone that we're

01:10:14 --> 01:10:26
hoping for by mid next year is

01:10:19 --> 01:10:28
profitability of the company and we're

01:10:25 --> 01:10:31
gonna have to revisit the idea of

01:10:27 --> 01:10:34
selling a consumer product but it's not

01:10:30 --> 01:10:36
gonna be like the comma one when we do

01:10:33 --> 01:10:39
it it's gonna be perfect

01:10:35 --> 01:10:41
open pilot has gotten so much better in

01:10:38 --> 01:10:42
the last two years we're gonna have a

01:10:40 --> 01:10:44
few a few features we're gonna have a

01:10:42 --> 01:10:46
hundred percent driver monitoring we're

01:10:43 --> 01:10:48
gonna disable no safety features in the

01:10:45 --> 01:10:50
car um actually I think it'd be really

01:10:47 --> 01:10:52
cool we're doing right now our project

01:10:49 --> 01:10:54
his week is we're analyzing the data

01:10:51 --> 01:10:56
set and looking for all the AEP triggers

01:10:53 --> 01:10:58
from the manufacturer systems we have a

01:10:55 --> 01:11:01
better data set on that than the

01:10:57 --> 01:11:03
manufacturers how much does how many

01:11:00 --> 01:11:04
does Toyota have ten million miles of

01:11:02 --> 01:11:06
real-world driving to know how many

01:11:03 --> 01:11:08
times they're AUB triggered so let me

01:11:05 --> 01:11:12
give you cuz yes right

01:11:07 --> 01:11:14
financial advice yeah cuz I work with a

01:11:11 --> 01:11:17
lot of automakers and one possible

01:11:13 --> 01:11:21
source of money for you which I'll be

01:11:16 --> 01:11:27
xcited to see you take on is basically

01:11:20 --> 01:11:31
selling the data so which is something

01:11:26 --> 01:11:33
that most people are not selling in a

01:11:30 --> 01:11:35
way we're here here at automaker but

01:11:32 --> 01:11:37
creating we've done this actually at MIT

01:11:34 --> 01:11:38
not for money purposes but you could do

01:11:36 --> 01:11:40
it for significant money purposes and

01:11:37 --> 01:11:43
make the world a better place by

01:11:39 --> 01:11:46
creating a consortium where automakers

01:11:42 --> 01:11:48
would pay in and then they get to have

01:11:45 --> 01:11:52
free access to the data and I I think a

01:11:47 --> 01:11:54
lot of people are really hungry for that

01:11:51 --> 01:11:55
and would pay significant amount of

01:11:53 --> 01:11:57
money for it here's the problem with

01:11:54 --> 01:11:59
at I like this idea all in theory he'd

01:11:56 --> 01:12:01
be very easy for me to give them access

01:11:58 --> 01:12:03
to my servers and we already have all

01:12:00 --> 01:12:04
open source tools to access this data

01:12:02 --> 01:12:07
it's in a great format we have a great

01:12:03 --> 01:12:09
pipeline but they're gonna put me in the

01:12:06 --> 01:12:12
room with some business development guy

01:12:08 --> 01:12:14
mm-hmm and I'm gonna have to talk to

01:12:11 --> 01:12:16
this guy and he's not gonna know most of

01:12:13 --> 01:12:21
the words I'm saying I'm not willing to

01:12:15 --> 01:12:23
lerate that okay but I think I agree

01:12:20 --> 01:12:24
with you I'm the same way but you just

01:12:22 --> 01:12:27
ell them the terms and there's no

01:12:23 --> 01:12:29
discussion needed if if I could just

01:12:26 --> 01:12:32
ell them the terms yeah and then like

01:12:28 --> 01:12:37
all right who wants access to my data I

01:12:31 --> 01:12:38
will sell it to you for let's say you

01:12:36 --> 01:12:43
want to go on a subscription I'll sell

01:12:37 --> 01:12:45
you 400 a month any 100k mo 100k month

01:12:42 --> 01:12:47
I'll give you access to the data

01:12:44 --> 01:12:48
subscription yeah yeah I think that's

01:12:46 --> 01:12:49
kind of fair came up with that number

01:12:47 --> 01:12:51
off the top of my head if somebody sends

01:12:48 --> 01:12:53
me like a three line email where it's

01:12:50 --> 01:12:55
like we would like to pay a hundred K

01:12:52 --> 01:12:56
month to get access to your data we

01:12:54 --> 01:12:58
would agree to like reasonable privacy

01:12:55 --> 01:13:00
terms of the people who are in the data

01:12:57 --> 01:13:02
set I would be happy to do it but that's

01:12:59 --> 01:13:04
not gonna be the email the email is

01:13:01 --> 01:13:06
gonna be hey do you have some time in

01:13:03 --> 01:13:07
the next month where we can sit down and

01:13:05 --> 01:13:09
we can I don't have time for that we're

01:13:06 --> 01:13:11
moving too fast yeah you could politely

01:13:09 --> 01:13:13
respond to that email but not saying I

01:13:10 --> 01:13:15
don't have any time for your

01:13:12 --> 01:13:18
yeah you say oh well unfortunately these

01:13:14 --> 01:13:20
are the terms and so this is we try to

01:13:17 --> 01:13:22
we brought the cost down for you in

01:13:19 --> 01:13:25
order to minimize the friction of

01:13:21 --> 01:13:27
education after here's the whatever it

01:13:24 --> 01:13:31
is 1 2 million years dollars a year and

01:13:26 --> 01:13:33
you have access and it's not like I get

01:13:30 --> 01:13:34
hat email from like but okay am I gonna

01:13:32 --> 01:13:35
reach out am I gonna hire a business

01:13:33 --> 01:13:38
development person who's gonna reach out

01:13:34 --> 01:13:40
o the automaker's no way yeah okay

01:13:37 --> 01:13:42
if they reached into me I'm not gonna

01:13:39 --> 01:13:43
ignore the email I'll come back with

01:13:41 --> 01:13:45
something straight yeah if you're

01:13:42 --> 01:13:46
willing just pay honeycomb all the facts

01:13:44 --> 01:13:47
they don't man I'm happy to to set that

01:13:45 --> 01:13:49
up that's what

01:13:46 --> 01:13:51
my engineering time but actually quite

01:13:48 --> 01:13:53
insightful view you're right yeah

01:13:50 --> 01:13:55
probably because many of the automakers

01:13:52 --> 01:13:58
are quite a bit of old-school yeah there

01:13:54 --> 01:14:00
will be need to reach out and they want

01:13:57 --> 01:14:01
it but they they'll need to be some some

01:13:59 --> 01:14:05
communication you right mobile eye

01:14:00 --> 01:14:10
circuit 2015 had the lowest R&D spend of

01:14:04 --> 01:14:11
any chip maker like purpur and you look

01:14:09 --> 01:14:12
at all the people who work for them and

01:14:10 --> 01:14:14
it's all business development people

01:14:12 --> 01:14:17
because the car companies are impossible

01:14:13 --> 01:14:19
to work with yeah so you're you have no

01:14:16 --> 01:14:21
patience for that and you're you're

01:14:18 --> 01:14:23
legit Android huh I have something to do

01:14:20 --> 01:14:24
right like like it's not like it's not

01:14:22 --> 01:14:25
like I don't like I don't mean to like

01:14:23 --> 01:14:27
be a dick and say like I don't have

01:14:24 --> 01:14:29
patience for that but it's like that

01:14:26 --> 01:14:31
stuff doesn't help us with our goal of

01:14:28 --> 01:14:35
winning self-driving cars if I want

01:14:30 --> 01:14:38
money in the short term if I showed off

01:14:34 --> 01:14:40
like the actual like the learning tech

01:14:37 --> 01:14:42
that we have it's it's somewhat sad like

01:14:39 --> 01:14:44
it's years and years ahead of everybody

01:14:41 --> 01:14:46
else's not so maybe not Tesla's I think

01:14:43 --> 01:14:47
Tesla has similar stuff to us actually

01:14:45 --> 01:14:49
eah I think Tesla's similar stuff but

01:14:46 --> 01:14:52
when you compare it to like what the

01:14:48 --> 01:14:54
Toyota Research Institute has you're not

01:14:51 --> 01:14:57
even close to what we have no comment

01:14:53 --> 01:15:02
but I also can't I have to take your

01:14:56 --> 01:15:03
comments I ain't into ative Lee believe

01:15:01 --> 01:15:06
you but I have to take it with a grain

01:15:02 --> 01:15:08
of salt because I mean you you are an

01:15:05 --> 01:15:10
inspiration because you basically don't

01:15:07 --> 01:15:14
care about a lot of things that other

01:15:09 --> 01:15:17
companies care about you don't try to

01:15:13 --> 01:15:20
in a sense like make up stuff

01:15:16 --> 01:15:21
so to drive a valuation you're really

01:15:19 --> 01:15:23
very real and you're trying to solve the

01:15:20 --> 01:15:26
problem and admire that a lot what I

01:15:22 --> 01:15:28
don't necessarily fully can't trust you

01:15:25 --> 01:15:29
on I do respect it's like how good it is

01:15:27 --> 01:15:32
right

01:15:28 --> 01:15:35
I can only but I also know how bad

01:15:31 --> 01:15:36
others are and so I'll say I'll say two

01:15:34 --> 01:15:39
things about don't trust but verify

01:15:35 --> 01:15:42
right I'll say two things about that one

01:15:38 --> 01:15:45
is try get in a twenty twenty Corolla

01:15:41 --> 01:15:49
nd try open pal 0.6 when it comes out

01:15:44 --> 01:15:51
next month I think already you'll look

01:15:48 --> 01:15:53
at this and you'll be like them this is

01:15:50 --> 01:15:55
already really good and then I could be

01:15:52 --> 01:15:56
doing that all with hand labelers and

01:15:54 --> 01:15:59
all with with like like the same

01:15:55 --> 01:16:00
approach that like Mobileye uses when we

01:15:58 --> 01:16:03
release a model that no law

01:15:59 --> 01:16:05
has the lanes in it that only outputs a

01:16:02 --> 01:16:08
path mm-hmm

01:16:04 --> 01:16:10
then think about how we did that machine

01:16:07 --> 01:16:12
learning and then right away when you

01:16:09 --> 01:16:13
see and that's gonna be an open pilot

01:16:11 --> 01:16:15
before 1.0

01:16:12 --> 01:16:16
when you see that model you'll know that

01:16:14 --> 01:16:18
everything I'm saying is true because

01:16:15 --> 01:16:20
how else did I get that model good one

01:16:17 --> 01:16:21
of the things too about the simulator oh

01:16:19 --> 01:16:24
yeah yeah this is super exciting that's

01:16:20 --> 01:16:26
uper exciting and uh but like you know

01:16:23 --> 01:16:29
I listened to your talk with Kyle and

01:16:25 --> 01:16:33
Kyle was originally building the the

01:16:28 --> 01:16:35
after market system and he gave up on it

01:16:32 --> 01:16:38
because of technical challenges yeah

01:16:34 --> 01:16:40
because of the fact that he's gonna have

01:16:37 --> 01:16:42
to support twenty to fifty cars we

01:16:39 --> 01:16:43
support forty five because what is he

01:16:41 --> 01:16:45
gonna do when the manufacturer ABS

01:16:42 --> 01:16:46
system triggers we have alerts and

01:16:44 --> 01:16:48
warnings to deal with all of that in all

01:16:45 --> 01:16:50
the cars and how is he going to formally

01:16:47 --> 01:16:51
verify it well I got ten million miles

01:16:49 --> 01:16:53
of data it's probably better it's

01:16:50 --> 01:16:57
probably better verified than the spec

01:16:52 --> 01:17:01
yeah I'm glad you're here talking to me

01:16:56 --> 01:17:03
this is I'll remember this day is this

01:17:00 --> 01:17:05
interesting if you look at Kyle's from

01:17:02 --> 01:17:08
Cruz I'm sure they have a large

01:17:04 --> 01:17:11
number of business development folks and

01:17:07 --> 01:17:13
you work with he's working with GM you

01:17:10 --> 01:17:16
could work with agro a I working with

01:17:12 --> 01:17:19
Ford it's interesting because chances

01:17:15 --> 01:17:22
that you fail business-wise like

01:17:18 --> 01:17:25
bankrupt are pretty high yeah and and

01:17:21 --> 01:17:27
yet it's the Android model is you're

01:17:24 --> 01:17:30
actually taking on the problem so that's

01:17:26 --> 01:17:31
really inspiring I mean well I have a

01:17:29 --> 01:17:33
long-term way for kamma to make money

01:17:30 --> 01:17:35
too and one of the nice things when you

01:17:32 --> 01:17:39
really take on the problem which is my

01:17:34 --> 01:17:41
hope for autopilot for example is things

01:17:38 --> 01:17:43
you don't expect ways to make money or

01:17:40 --> 01:17:46
create value that you don't expect will

01:17:42 --> 01:17:48
pop up oh I've known how to do it

01:17:45 --> 01:17:50
since kind of 2017 is the first time I

01:17:47 --> 01:17:51
said it well which part to know it to

01:17:49 --> 01:17:53
know how to do which part our long-term

01:17:50 --> 01:17:55
plan is to be a car insurance company

01:17:52 --> 01:17:57
insurance yeah I love it yeah yeah what

01:17:54 --> 01:17:58
I make driving twice is safe not only

01:17:56 --> 01:18:00
that I have the best date is that you

01:17:57 --> 01:18:03
know who statistically is the safest

01:17:59 --> 01:18:05
drivers and oh oh we see you we see you

01:18:02 --> 01:18:08
driving unsafely we're not going to

01:18:04 --> 01:18:10
insure you and that that causes a like

01:18:07 --> 01:18:11
bifurcation in the market because the

01:18:09 --> 01:18:13
only people who can't get common

01:18:10 --> 01:18:14
insurance or the bad drivers Geico can

01:18:12 --> 01:18:15
insure them their premiums

01:18:13 --> 01:18:17
crazy higher premiums are crazy low

01:18:14 --> 01:18:22
ould win contracts take over that whole

01:18:16 --> 01:18:23
market okay so if we win if we went but

01:18:21 --> 01:18:25
hat's I'm saying like how do you turn

01:18:22 --> 01:18:26
comma into a ten billion dollar company

01:18:24 --> 01:18:31
is that that's right

01:18:25 --> 01:18:33
so you you know a musk who else who else

01:18:30 --> 01:18:34
is thinking like this and working like

01:18:32 --> 01:18:37
this in your view who are the

01:18:33 --> 01:18:39
competitors are there people seriously I

01:18:36 --> 01:18:43
don't think anyone that I'm aware of as

01:18:38 --> 01:18:46
eriously taking on lane-keeping you

01:18:42 --> 01:18:47
know like to worse a huge business that

01:18:45 --> 01:18:52
urns eventually into full autonomy that

01:18:46 --> 01:18:54
hen creates yeah like that creates

01:18:51 --> 01:18:56
other businesses on top of it and so on

01:18:53 --> 01:18:58
thinks insurance thinks all kinds of

01:18:55 --> 01:19:02
ideas like that do you know who anyone

01:18:57 --> 01:19:05
lse thinking like this not really

01:19:01 --> 01:19:07
that's interesting I mean it my sense is

01:19:04 --> 01:19:10
everybody turns to that in like four or

01:19:06 --> 01:19:12
five years like Ford once the autonomy

01:19:09 --> 01:19:16
doesn't feel fall through but at this

01:19:11 --> 01:19:18
time Elon to the iOS by the way he paved

01:19:15 --> 01:19:22
the way for all I was not i OS true I

01:19:18 --> 01:19:23
would not be doing comma AI today if it

01:19:21 --> 01:19:26
was not for those conversations with

01:19:22 --> 01:19:28
Elon and if it were not for him saying

01:19:25 --> 01:19:30
like yeah I think he said like well

01:19:27 --> 01:19:32
obviously we're not gonna use Leiter we

01:19:29 --> 01:19:34
use cameras humans use cameras so what

01:19:31 --> 01:19:36
do you think about that how important is

01:19:33 --> 01:19:38
lidar everybody else is on l5 is using

01:19:35 --> 01:19:40
lidar what are your thoughts on his

01:19:37 --> 01:19:43
provocative statement that lidar is a

01:19:39 --> 01:19:45
crutch see sometimes we'll say dumb

01:19:42 --> 01:19:46
things like the driver monitoring thing

01:19:44 --> 01:19:48
but sometimes we'll say absolutely

01:19:45 --> 01:19:51
completely 100% obviously true things

01:19:47 --> 01:19:54
yeah of course lidar is a crutch it's

01:19:50 --> 01:19:55
not even a good crutch you're not even

01:19:53 --> 01:19:58
using it they're using it for

01:19:54 --> 01:20:00
localization yeah which isn't good in

01:19:57 --> 01:20:01
the first place if you have to localize

01:19:59 --> 01:20:05
your car to centimetres in order to

01:20:00 --> 01:20:06
drive like yeah they're not drive it

01:20:04 --> 01:20:08
currently not doing much machine

01:20:05 --> 01:20:11
learning I thought polite our data

01:20:07 --> 01:20:14
meaning like to help you in the tasks of

01:20:10 --> 01:20:16
general tasks of perception the main

01:20:13 --> 01:20:18
goal of those light hours on those cars

01:20:15 --> 01:20:20
I think is actually localization more

01:20:17 --> 01:20:21
than perception or at least that's what

01:20:19 --> 01:20:23
hey use them for yeah that's true if

01:20:20 --> 01:20:25
you want to localize two centimeters you

01:20:22 --> 01:20:26
can't use GPS the fanciest GPS in the

01:20:24 --> 01:20:27
world can't do it especially if you're

01:20:25 --> 01:20:29
under tree cover and stuff

01:20:26 --> 01:20:31
latter I can do it pretty easily see

01:20:28 --> 01:20:33
really they're not taking on I mean in

01:20:30 --> 01:20:35
some research they're doing they're

01:20:32 --> 01:20:37
using it for perception but and they're

01:20:34 --> 01:20:40
certainly not which sad they're not

01:20:36 --> 01:20:42
fusing it well lay vision they do use it

01:20:39 --> 01:20:44
for perception I'm not saying they don't

01:20:41 --> 01:20:46
use it for perception but the thing that

01:20:43 --> 01:20:48
hey have vision based and radar based

01:20:45 --> 01:20:51
perception systems as well you could

01:20:47 --> 01:20:54
remove the lidar and and and keep around

01:20:50 --> 01:20:56
a lot of the dynamic object perception

01:20:53 --> 01:20:58
you want to get centimeter accurate

01:20:55 --> 01:21:02
localization good luck doing that with

01:20:57 --> 01:21:05
anything else so what should Cruz lame-o

01:21:01 --> 01:21:10
do like what would you be your advice to

01:21:04 --> 01:21:12
them now anyway Mo's actually there's I

01:21:09 --> 01:21:16
mean they're doing they're serious way

01:21:11 --> 01:21:18
mo out of all of them equate so serious

01:21:15 --> 01:21:21
about the long game if everybody fell

01:21:17 --> 01:21:23
five is a lot is requires fifty years I

01:21:20 --> 01:21:26
think when will be the only one left

01:21:22 --> 01:21:27
standing at the end with the forgiving

01:21:25 --> 01:21:30
the financial backing if they have

01:21:26 --> 01:21:34
Google box um I'll say nice things about

01:21:29 --> 01:21:38
both lame-o and Cruz let's do it nice is

01:21:33 --> 01:21:41
good way mo is by far the furthest along

01:21:37 --> 01:21:44
with technology way mo has a three to

01:21:40 --> 01:21:48
five year lead on all the competitors um

01:21:43 --> 01:21:50
if that if the way mo looking stack

01:21:47 --> 01:21:52
works mm-hmm maybe three year lead if

01:21:49 --> 01:21:55
the way mo looking stack works they have

01:21:51 --> 01:21:56
a three year lead now I argue that way

01:21:54 --> 01:21:59
mo has spent too much money

01:21:55 --> 01:22:01
to recapitalize to gain back their

01:21:58 --> 01:22:03
losses in those three years also

01:22:00 --> 01:22:05
self-driving cars have no network effect

01:22:02 --> 01:22:06
like that yeah goober has a network

01:22:04 --> 01:22:08
effect you have a market you have

01:22:05 --> 01:22:10
drivers and you have riders self-driving

01:22:07 --> 01:22:12
cars you have capital and you have

01:22:09 --> 01:22:14
riders there's no network effect if I

01:22:11 --> 01:22:15
want to blanket a new city in

01:22:13 --> 01:22:16
self-driving cars i buy the

01:22:14 --> 01:22:17
off-the-shelf Chinese knockoff

01:22:15 --> 01:22:18
self-driving cars and I buy enough up

01:22:16 --> 01:22:21
from the city I can't do that with

01:22:17 --> 01:22:22
drivers and that's why Ober has a first

01:22:20 --> 01:22:26
mover advantage that no self-driving car

01:22:21 --> 01:22:28
company will can you uh disentangle that

01:22:25 --> 01:22:30
a little bit uber you're not talking

01:22:27 --> 01:22:32
about uber the autonomous vehicle number

01:22:29 --> 01:22:35
you talked about the uber cars okay yeah

01:22:31 --> 01:22:38
I'm over I open for business in Austin

01:22:34 --> 01:22:40
Texas listen I need to attract both

01:22:37 --> 01:22:41
sides of the market I need to both get

01:22:39 --> 01:22:43
drivers

01:22:40 --> 01:22:44
my platform and riders on my platinum

01:22:42 --> 01:22:46
and I need to keep them both

01:22:43 --> 01:22:48
sufficiently happy right riders aren't

01:22:45 --> 01:22:49
going to use it if it takes more than

01:22:47 --> 01:22:51
five minutes for an uber to show up

01:22:48 --> 01:22:52
drivers aren't gonna use it if they have

01:22:50 --> 01:22:54
to sit around all day and there's no

01:22:51 --> 01:22:56
riders so you have to carefully balance

01:22:53 --> 01:22:57
a market and whenever you have to

01:22:55 --> 01:22:59
carefully balance a market there's a

01:22:56 --> 01:23:00
great first mover advantage because

01:22:58 --> 01:23:03
there's a switching cost for everybody

01:22:59 --> 01:23:05
right the drivers and the riders would

01:23:02 --> 01:23:08
have to switch at the same time let's

01:23:04 --> 01:23:11
even say that you know um let's say

01:23:07 --> 01:23:14
Luber shows up in Luber somehow you know

01:23:10 --> 01:23:17
agrees to do things that add a bigger

01:23:13 --> 01:23:19
you know you know we're just gonna we've

01:23:16 --> 01:23:21
done it more efficiently right Luber is

01:23:18 --> 01:23:22
only takes five percent of a cot instead

01:23:20 --> 01:23:24
of the ten percent that Hooper takes no

01:23:21 --> 01:23:25
ne is gonna switch because the

01:23:23 --> 01:23:27
switching cost is higher than that five

01:23:24 --> 01:23:29
percent so you actually can in markets

01:23:26 --> 01:23:32
like that you have a first mover

01:23:28 --> 01:23:34
advantage yeah autonomous vehicles of

01:23:31 --> 01:23:36
the level five variety have no first

01:23:33 --> 01:23:38
mover advantage if the technology

01:23:35 --> 01:23:40
becomes commoditized say I want to go to

01:23:37 --> 01:23:41
a new city look at the scooters it's

01:23:39 --> 01:23:45
gonna look a lot more like scooters

01:23:40 --> 01:23:47
every person with a checkbook can

01:23:44 --> 01:23:48
blanket a city in scooters and that's

01:23:46 --> 01:23:49
why you have 10 different scooter

01:23:47 --> 01:23:51
companies yeah which one's gonna win

01:23:48 --> 01:23:52
it's a race to the bottom it's terrible

01:23:50 --> 01:23:57
market to begin because there's no

01:23:51 --> 01:23:58
market for scooters and scooters don't

01:23:56 --> 01:23:59
get a say and whether they want to be

01:23:57 --> 01:24:01
bought and deployed to a city or not

01:23:58 --> 01:24:05
right so the yeah we're gonna entice the

01:24:00 --> 01:24:06
scooters with subsidies and deals so

01:24:04 --> 01:24:08
whenever you have to invest that capital

01:24:05 --> 01:24:10
that's it doesn't it doesn't come back

01:24:07 --> 01:24:12
yeah that they can't be your main

01:24:09 --> 01:24:14
criticism over the way mo approach oh

01:24:11 --> 01:24:17
I'm saying even if it does technically

01:24:13 --> 01:24:20
work even if it does technically work

01:24:16 --> 01:24:23
that's a problem yeah I don't know I if

01:24:19 --> 01:24:24
I were to say I I would I would say

01:24:22 --> 01:24:26
ou're already there I haven't even

01:24:23 --> 01:24:28
thought about that but I would say the

01:24:25 --> 01:24:33
bigger challenge is the technical

01:24:27 --> 01:24:34
approach so way most cruises and not

01:24:32 --> 01:24:37
just the technical approach but of

01:24:33 --> 01:24:43
creating value I still don't understand

01:24:36 --> 01:24:46
how you beat uber the the human driven

01:24:42 --> 01:24:49
cars in terms of financially it doesn't

01:24:45 --> 01:24:50
make sense to me that people

01:24:48 --> 01:24:52
want to want to get an autonomous

01:24:49 --> 01:24:55
vehicle I don't understand how you make

01:24:51 --> 01:24:58
money in the long term

01:24:54 --> 01:25:00
like real long-term but it just feels

01:24:57 --> 01:25:01
like there's too much capital investment

01:24:59 --> 01:25:02
needed oh and they're gonna be worse

01:25:00 --> 01:25:04
than ubers because they're gonna they're

01:25:01 --> 01:25:07
gonna stop for every little you know

01:25:03 --> 01:25:08
thing everywhere um actually a nice

01:25:06 --> 01:25:10
thing about Cruz that was my nice thing

01:25:07 --> 01:25:11
about wait another three years that it

01:25:09 --> 01:25:13
wasn't nice oh that's three years

01:25:10 --> 01:25:16
technically ahead of everybody their

01:25:12 --> 01:25:19
tech stack is is great my nice thing

01:25:15 --> 01:25:23
about Cruz is GM buying them was a great

01:25:18 --> 01:25:26
move for GM for 1 billion dollars GM

01:25:22 --> 01:25:30
bought an insurance policy against way

01:25:25 --> 01:25:33
mo they put Cruz is three years behind

01:25:29 --> 01:25:34
way mo hmm that means Google will get a

01:25:32 --> 01:25:39
monopoly on the technology for at most

01:25:33 --> 01:25:41
hree years and technology works

01:25:38 --> 01:25:43
you might not even be right about the

01:25:40 --> 01:25:44
three years it might be less might be

01:25:42 --> 01:25:46
less crews actually might not be that

01:25:43 --> 01:25:48
far behind I don't know how much way mo

01:25:45 --> 01:25:50
has waffled around or how much of it

01:25:47 --> 01:25:52
actually is just that long tail yeah

01:25:49 --> 01:25:54
okay if that's the best you could say

01:25:51 --> 01:25:56
there's some nice things it that's more

01:25:54 --> 01:25:59
of a nice thing for GM that that's a

01:25:55 --> 01:26:01
smart insurance policy it's just more

01:25:58 --> 01:26:05
insurance policy I mean I think that's

01:26:00 --> 01:26:07
how I I can't see crews working out any

01:26:04 --> 01:26:12
other for crews to leapfrog way mo would

01:26:06 --> 01:26:14
really surprise me yeah so let's talk

01:26:11 --> 01:26:15
about like the underlying assumptions of

01:26:13 --> 01:26:19
everything is we're not going to

01:26:14 --> 01:26:21
leapfrog Tesla Tesla would have to

01:26:18 --> 01:26:24
seriously mess up for us because you're

01:26:20 --> 01:26:27
okay so the way you leapfrog right is

01:26:23 --> 01:26:30
you come up with an idea or you take a

01:26:26 --> 01:26:34
direction perhaps secretly that the

01:26:29 --> 01:26:39
other people aren't taking and so cruise

01:26:33 --> 01:26:41
way mo even Aurora no Aurora tzuke's is

01:26:38 --> 01:26:43
the same stack as well they're all the

01:26:40 --> 01:26:46
same codebase even and they're all the

01:26:42 --> 01:26:48
same DARPA urban challenge codebase

01:26:45 --> 01:26:49
so the question is do you think there's

01:26:47 --> 01:26:52
a room for brilliance and innovation

01:26:48 --> 01:26:56
there that will change everything like

01:26:51 --> 01:26:59
say okay so I'll give you examples it

01:26:55 --> 01:27:04
could be if revolution and mapping for

01:26:58 --> 01:27:07
example that allow you to map things do

01:27:03 --> 01:27:08
HD maps of the whole world all weather

01:27:06 --> 01:27:15
conditions

01:27:07 --> 01:27:18
really well or revolutionist simulation

01:27:14 --> 01:27:22
to where the the what you said before

01:27:17 --> 01:27:25
becomes incorrect that kind of thing I

01:27:21 --> 01:27:27
knew room for breakthrough innovation um

01:27:24 --> 01:27:29
what I said before about oh they

01:27:26 --> 01:27:32
actually get the whole thing well I'll

01:27:28 --> 01:27:34
say this about we divide driving into

01:27:31 --> 01:27:35
three problems and I actually haven't

01:27:33 --> 01:27:36
solved the third yet but I have an idea

01:27:34 --> 01:27:39
how to do it so there's the static the

01:27:35 --> 01:27:41
static driving problem is assuming you

01:27:38 --> 01:27:43
are the only car on the road right right

01:27:40 --> 01:27:45
and this problem can be solved 100% with

01:27:42 --> 01:27:47
mapping and localization this is why

01:27:44 --> 01:27:49
farms work the way they do if all you

01:27:46 --> 01:27:50
have to deal with is the static problem

01:27:48 --> 01:27:51
and you can statically schedule your

01:27:49 --> 01:27:53
machines right it's the same as like

01:27:50 --> 01:27:55
statically scheduling processes you can

01:27:52 --> 01:27:56
statically schedule your tractors to

01:27:54 --> 01:27:57
never hit each other on their paths all

01:27:56 --> 01:28:00
right because then you know the speed

01:27:56 --> 01:28:02
they go at so so that's the static

01:27:59 --> 01:28:05
driving problem Maps only helps you with

01:28:02 --> 01:28:08
e static driving problem yeah the

01:28:04 --> 01:28:09
question about static driving yeah you

01:28:07 --> 01:28:14
just made it sound like it's really easy

01:28:08 --> 01:28:17
that was really easy how easy how well

01:28:13 --> 01:28:19
because the whole drifting out of lane

01:28:16 --> 01:28:21
when when Tesla drifts out of lane is

01:28:18 --> 01:28:24
failing on the fundamental static

01:28:20 --> 01:28:27
driving problem Tesla is drifting out of

01:28:23 --> 01:28:29
lane the static driving problem is not

01:28:26 --> 01:28:33
easy for the world the static driving

01:28:28 --> 01:28:36
problem is easy for one route and one

01:28:32 --> 01:28:39
route in one weather condition with one

01:28:35 --> 01:28:42
state of lane markings and like no

01:28:38 --> 01:28:43
deterioration no cracks in the road I'm

01:28:41 --> 01:28:45
assuming you have a perfect localizer so

01:28:42 --> 01:28:46
that's all for the weather condition and

01:28:44 --> 01:28:48
me the lane marking condition that's the

01:28:45 --> 01:28:49
problem is how could you how do you have

01:28:47 --> 01:28:50
a perfect you can build perfect

01:28:48 --> 01:28:53
localizers are not that hard to build

01:28:49 --> 01:28:56
okay come on now with with wood lighter

01:28:53 --> 01:28:57
why don't ya wood lighter okay yeah but

01:28:55 --> 01:28:59
you use lighter right like use lidar

01:28:56 --> 01:29:04
build a perfect localizer building a

01:28:58 --> 01:29:05
perfect localizer without lidar it's

01:29:03 --> 01:29:06
gonna be it's gonna be hard you can get

01:29:04 --> 01:29:08
en centimeters without liner you can

01:29:05 --> 01:29:10
get one centimeter with lidar maybe

01:29:07 --> 01:29:12
concern about the one or ten centimeter

01:29:09 --> 01:29:15
I'm concerned if every once in a while

01:29:11 --> 01:29:19
you're just way off yeah so this is why

01:29:14 --> 01:29:21
ou have to carefully make sure you're

01:29:18 --> 01:29:22
always tracking your position you want

01:29:20 --> 01:29:23
o use light

01:29:21 --> 01:29:27
camera fusion but you can get the

01:29:22 --> 01:29:29
reliability of that system up to a

01:29:26 --> 01:29:31
hundred thousand miles and then you

01:29:28 --> 01:29:32
write some fallback condition where it's

01:29:30 --> 01:29:34
not that bad if you're way off right I

01:29:31 --> 01:29:36
think that you can get it to the point

01:29:33 --> 01:29:38
it's like özil D that you're you're

01:29:35 --> 01:29:40
never in a case where you're way off and

01:29:37 --> 01:29:43
you don't know it yeah okay so this is

01:29:39 --> 01:29:46
brilliant so that's the static static we

01:29:42 --> 01:29:48
can especially with lidar and good HD

01:29:45 --> 01:29:53
maps you can solve that problem easy

01:29:47 --> 01:29:54
no you just the static static very

01:29:52 --> 01:29:57
typical for you to say something's easy

01:29:53 --> 01:29:58
I got it it's not as challenging as the

01:29:56 --> 01:29:59
other ones okay well it's okay maybe

01:29:57 --> 01:30:01
it's obvious how to solve it the third

01:29:58 --> 01:30:02
one's the hardest well where do we get

01:30:00 --> 01:30:03
and a lot of people don't even think

01:30:01 --> 01:30:04
about the third one and even I see it as

01:30:02 --> 01:30:07
different from the second one so the

01:30:03 --> 01:30:09
second one is dynamic the second one is

01:30:06 --> 01:30:11
like say there's an obvious examples

01:30:08 --> 01:30:12
like a car stopped at a red light

01:30:10 --> 01:30:14
right you can't have that car in your

01:30:11 --> 01:30:16
map yeah because you don't know whether

01:30:13 --> 01:30:18
that car is gonna be there or not so you

01:30:15 --> 01:30:20
have to detect that car in real time and

01:30:17 --> 01:30:23
then you have to you know do the

01:30:19 --> 01:30:26
appropriate action right also that car

01:30:22 --> 01:30:28
is not a fixed object that car may move

01:30:25 --> 01:30:30
and you have to predict with that car

01:30:27 --> 01:30:32
will dim alright so this is the dynamic

01:30:29 --> 01:30:36
problem yeah do you have to deal with

01:30:31 --> 01:30:38
is um this involves again like you're

01:30:35 --> 01:30:40
gonna need models of other people's

01:30:37 --> 01:30:42
behavior do you are you including in

01:30:39 --> 01:30:45
that and I don't want to step on on the

01:30:41 --> 01:30:48
third one oh but if I are you including

01:30:44 --> 01:30:50
in that you're influenced and people I

01:30:47 --> 01:30:53
guess the third okay that's the moon we

01:30:49 --> 01:30:54
call it the counterfactual yeah I

01:30:52 --> 01:30:55
believe that I just talked to Judea

01:30:53 --> 01:31:00
pearl who's obsessed with

01:30:54 --> 01:31:02
counterfactuals oh yeah yeah so the

01:30:59 --> 01:31:05
static and the dynamic yeah

01:31:01 --> 01:31:07
our approach right now for lateral will

01:31:04 --> 01:31:10
scale completely to the static a dynamic

01:31:06 --> 01:31:12
the counterfactual the only way I have

01:31:09 --> 01:31:14
to do it yet they don't give you thing

01:31:11 --> 01:31:15
that I want to do once we have all these

01:31:13 --> 01:31:18
cars is I want to do reinforcement

01:31:14 --> 01:31:20
learning on the world I'm always gonna

01:31:17 --> 01:31:21
turn the exploiter up to max I'm not

01:31:19 --> 01:31:23
gonna have them explore but the only

01:31:20 --> 01:31:25
real way to get at the counterfactual is

01:31:22 --> 01:31:29
to do reinforcement learning because the

01:31:24 --> 01:31:30
other agents are humans so that's

01:31:28 --> 01:31:33
fascinating that you break you down like

01:31:29 --> 01:31:35
that I agree completely I've set my life

01:31:32 --> 01:31:38
thinking about this beautiful

01:31:34 --> 01:31:42
they're so and part of it because you're

01:31:37 --> 01:31:45
slightly insane because not my life just

01:31:41 --> 01:31:49
he last four years no no you have like

01:31:44 --> 01:31:52
some some nonzero percent of your brain

01:31:48 --> 01:31:55
has a madman in it which that's a really

01:31:51 --> 01:31:57
good feature but there's a safety

01:31:54 --> 01:32:00
component to it that I think when this

01:31:56 --> 01:32:01
ort of counterfactuals and so on that

01:31:59 --> 01:32:03
would just freak people out how do you

01:32:00 --> 01:32:05
even start to think about just in

01:32:02 --> 01:32:09
general I mean you've you've had some

01:32:04 --> 01:32:14
friction with Nitza and so on I am

01:32:08 --> 01:32:21
frankly exhausted by safety engineers

01:32:13 --> 01:32:23
the the prioritization on safety over

01:32:20 --> 01:32:27
innovation to a degree where it kills in

01:32:22 --> 01:32:30
my view kills safety in the long term so

01:32:26 --> 01:32:32
the counterfactual thing they just just

01:32:29 --> 01:32:34
actually exploring this world of how do

01:32:31 --> 01:32:35
you interact with dynamic objects and so

01:32:33 --> 01:32:37
n how do you how do you think about

01:32:34 --> 01:32:39
safety you can do reinforcement learning

01:32:36 --> 01:32:41
without ever exploring and I said that

01:32:38 --> 01:32:42
like so you can think about you're in

01:32:40 --> 01:32:43
like a reinforcement learning it's

01:32:41 --> 01:32:46
usually called like a temperature

01:32:42 --> 01:32:48
parameter and your temperature parameter

01:32:45 --> 01:32:50
is how often you deviate from the Arg

01:32:47 --> 01:32:52
max I could always set that to zero and

01:32:49 --> 01:32:54
still learn and I feel that you'd always

01:32:51 --> 01:32:57
want that set to zero on your actual

01:32:53 --> 01:32:59
system got you but the problem is you

01:32:56 --> 01:33:01
first don't know very much and so you're

01:32:58 --> 01:33:03
going to make mistakes so the learning

01:33:00 --> 01:33:06
the exploration happens to ready yeah

01:33:02 --> 01:33:08
but okay so the consequences of a

01:33:05 --> 01:33:10
mistake yeah open pilot and autopilot

01:33:07 --> 01:33:13
are making mistakes left and right yeah

01:33:09 --> 01:33:14
we have we have we have 700 daily active

01:33:12 --> 01:33:18
users a thousand weekly active users

01:33:13 --> 01:33:20
open pilot makes tens of thousands of

01:33:17 --> 01:33:24
mistakes a week these mistakes have zero

01:33:19 --> 01:33:27
consequences these mistakes are oh it I

01:33:23 --> 01:33:28
wanted to take this exit and it went

01:33:26 --> 01:33:31
straight so I'm just gonna carefully

01:33:27 --> 01:33:31
touch the wheel humans the humans catch

01:33:30 --> 01:33:34
them

01:33:30 --> 01:33:35
and the human disengagement is labeling

01:33:33 --> 01:33:38
that reinforcement learning in a

01:33:34 --> 01:33:40
completely consequence-free way so

01:33:37 --> 01:33:42
driver monitoring is the way you ensure

01:33:39 --> 01:33:45
they keep yes they keep paying attention

01:33:41 --> 01:33:47
how is your messaging say I gave you a

01:33:44 --> 01:33:48
billion dollars you would be scaling and

01:33:46 --> 01:33:50
now

01:33:47 --> 01:33:51
oh my fact it's guy couldn't scale with

01:33:49 --> 01:33:52
any amount of money I'd raise money if I

01:33:50 --> 01:33:54
could if I had way to scale yeah you're

01:33:51 --> 01:33:56
not focusing I don't know I don't know

01:33:53 --> 01:33:57
how to do Oh like I guess I could sell

01:33:55 --> 01:33:59
it to more people but I want to make the

01:33:56 --> 01:34:02
system better better I don't know I mean

01:33:58 --> 01:34:06
but what's the messaging here I got a

01:34:01 --> 01:34:07
chance to talk to you on and and he he

01:34:05 --> 01:34:10
basically said that the human factor

01:34:06 --> 01:34:12
doesn't matter you know the human

01:34:09 --> 01:34:15
doesn't matter because the system will

01:34:11 --> 01:34:16
perform there would be sort of a sorry

01:34:14 --> 01:34:18
to use the term but like a singular like

01:34:15 --> 01:34:20
a point where it gets just much better

01:34:17 --> 01:34:23
and so the human it won't won't really

01:34:19 --> 01:34:27
matter but it seems like that human

01:34:22 --> 01:34:30
caching the system when it gets into

01:34:26 --> 01:34:32
trouble is like the thing which will

01:34:29 --> 01:34:35
make something like reinforcement

01:34:31 --> 01:34:37
learning work so how do you how do you

01:34:34 --> 01:34:39
think messaging for Tesla for you should

01:34:36 --> 01:34:41
chant for the industry in general should

01:34:38 --> 01:34:43
change I think my messaging is pretty

01:34:40 --> 01:34:44
clear at least like our messaging wasn't

01:34:42 --> 01:34:46
hat clear in the beginning and I do

01:34:43 --> 01:34:48
kind of fault myself for that we are

01:34:45 --> 01:34:51
proud right now to be a level 2 system

01:34:47 --> 01:34:53
we are proud to be level 2 if we talk

01:34:50 --> 01:34:55
about level 4 it's not what the current

01:34:52 --> 01:34:57
hardware it's not gonna be just a

01:34:54 --> 01:35:00
magical OTA upgrade it's gonna be new

01:34:56 --> 01:35:01
hardware it's gonna be very carefully

01:34:59 --> 01:35:03
thought-out right now we are proud to be

01:35:00 --> 01:35:06
level 2 and we have a rigorous safety

01:35:02 --> 01:35:08
model I mean not like like okay rigorous

01:35:05 --> 01:35:10
who knows what that means but we at

01:35:07 --> 01:35:12
least have a safety model and we make it

01:35:09 --> 01:35:16
explicit is in safety MD and open pilot

01:35:11 --> 01:35:22
and it says seriously though safety dot

01:35:15 --> 01:35:23
MD Android so well this is this is the

01:35:21 --> 01:35:26
safety model and I like to have

01:35:22 --> 01:35:27
conversations like if like you know

01:35:25 --> 01:35:30
sometimes people will come to you and

01:35:26 --> 01:35:32
they're like your systems not safe okay

01:35:29 --> 01:35:33
have you read my safety Doc's would you

01:35:31 --> 01:35:35
like to have an intelligent conversation

01:35:32 --> 01:35:36
about this and the answer is always no

01:35:34 --> 01:35:40
they just like scream about it runs

01:35:35 --> 01:35:42
Python okay what so you're saying that

01:35:39 --> 01:35:44
because pythons not real-time

01:35:41 --> 01:35:46
Python not being real-time never causes

01:35:43 --> 01:35:49
disengagement disengagement SAR caused

01:35:45 --> 01:35:51
by you know the model is QM but safety

01:35:48 --> 01:35:52
dad MD says the following first and

01:35:50 --> 01:35:53
foremost the driver must be paying

01:35:51 --> 01:35:57
attention at all times

01:35:52 --> 01:35:59
I don't can I do I still consider the

01:35:56 --> 01:36:01
software to be alpha software until we

01:35:58 --> 01:36:02
can actually enforce that statement but

01:36:00 --> 01:36:04
I feel it's very well

01:36:01 --> 01:36:08
communicated to our users two more

01:36:03 --> 01:36:10
things one is the user must be able to

01:36:07 --> 01:36:11
easily take control of the vehicle at

01:36:09 --> 01:36:13
all times

01:36:10 --> 01:36:15
mm-hmm so if you step on the gas or

01:36:12 --> 01:36:16
brake with open pilot

01:36:14 --> 01:36:20
it gives full manual control back to the

01:36:15 --> 01:36:24
user or press the cancel button step 2

01:36:19 --> 01:36:26
the car will never react so quickly we

01:36:23 --> 01:36:29
define so quickly to be about one second

01:36:25 --> 01:36:30
that you can't react in time and we do

01:36:28 --> 01:36:32
this by enforcing torque limits braking

01:36:29 --> 01:36:36
limits and acceleration limits so we

01:36:31 --> 01:36:39
have um like our torque limits way lower

01:36:35 --> 01:36:41
than Tesla's this is another potential

01:36:38 --> 01:36:42
if I could tweak autopilot

01:36:40 --> 01:36:44
I would lower their torque limit or

01:36:41 --> 01:36:47
would a driver monitoring um because

01:36:43 --> 01:36:50
autopilot can jerk the wheel hard yeah

01:36:46 --> 01:36:52
open pilot can it's we we limit um and

01:36:49 --> 01:36:54
all this code is open source readable

01:36:51 --> 01:36:59
and I believe now it's all misery C

01:36:53 --> 01:37:02
compliant misra is like the automotive

01:36:58 --> 01:37:04
coding standard um at first I you know

01:37:01 --> 01:37:06
I've come to respect I've been reading

01:37:03 --> 01:37:07
like the standards lately and I've come

01:37:05 --> 01:37:09
to respect them they're actually written

01:37:06 --> 01:37:11
by very smart people yeah they're

01:37:08 --> 01:37:12
brilliant people actually they have a

01:37:10 --> 01:37:16
lot of experience there's sometimes a

01:37:11 --> 01:37:18
little too cautious but in this case it

01:37:15 --> 01:37:20
pays off miss was written by like

01:37:17 --> 01:37:21
computer scientists and you tell them as

01:37:19 --> 01:37:22
a language they use you can tell by the

01:37:20 --> 01:37:25
language they use they talk about like

01:37:21 --> 01:37:28
whether certain conditions in misra are

01:37:24 --> 01:37:30
decidable or undecidable you mean like

01:37:27 --> 01:37:32
the halting problem and yes well all

01:37:29 --> 01:37:34
right you've earned my respect I will

01:37:31 --> 01:37:35
tell you carefully what you have to say

01:37:33 --> 01:37:37
and we want to make our code compliant

01:37:34 --> 01:37:39
with that all right so you're proud

01:37:36 --> 01:37:43
level two and reform so you were the

01:37:38 --> 01:37:45
founder and I think CEO of comm AI then

01:37:42 --> 01:37:47
you were the head of research what the

01:37:44 --> 01:37:50
ck are you know what's your connection

01:37:46 --> 01:37:52
to come AI the president but I'm one of

01:37:49 --> 01:37:54
those like unelect unelected presidents

01:37:51 --> 01:37:55
of like like a small dictatorship

01:37:53 --> 01:37:57
country not one of those like elected

01:37:54 --> 01:38:01
presidents oh so you're like Putin when

01:37:56 --> 01:38:02
he was like yeah I got sure so there's

01:38:00 --> 01:38:05
uh what's the governance structure

01:38:01 --> 01:38:09
what's the what's the future of commie I

01:38:04 --> 01:38:11
finance I mean as a business do you want

01:38:08 --> 01:38:14
you just focused on getting things right

01:38:10 --> 01:38:15
now making some small amount of money

01:38:14 --> 01:38:17
and mean to

01:38:14 --> 01:38:21
and then one that works it works in each

01:38:16 --> 01:38:22
scale our burn rate is about 200k a

01:38:20 --> 01:38:26
month and our revenue is about 100k a

01:38:21 --> 01:38:28
month so we need to 4x our revenue but

01:38:25 --> 01:38:29
uh we haven't like tried very hard at

01:38:27 --> 01:38:30
hat yet

01:38:28 --> 01:38:32
and the revenue is basically selling

01:38:29 --> 01:38:34
stuff online yeah we sell stuff shopped

01:38:31 --> 01:38:36
a comment at AI is there other well okay

01:38:33 --> 01:38:38
so you you'll have to figure out that's

01:38:35 --> 01:38:41
our that's our only see but to me that's

01:38:38 --> 01:38:43
like respectable revenues yeah we make

01:38:40 --> 01:38:45
it by selling products to consumers

01:38:42 --> 01:38:48
we're honest and transparent about what

01:38:44 --> 01:38:52
hey are most actually level for

01:38:47 --> 01:38:56
companies right because you could easily

01:38:51 --> 01:38:57
start blowing up like smoke like over

01:38:55 --> 01:39:00
selling the hype and feeding into

01:38:56 --> 01:39:02
getting some fundraisers oh you're the

01:38:59 --> 01:39:04
guy you're genius because you hacked the

01:39:01 --> 01:39:06
iPhone oh I hate that I hate that yeah I

01:39:03 --> 01:39:06
can trade my social capital for more

01:39:05 --> 01:39:09
money

01:39:05 --> 01:39:12
eah I did it once I almost regret it

01:39:08 --> 01:39:16
doing the first of it well on a small

01:39:11 --> 01:39:19
tangent what's your you seem to not like

01:39:15 --> 01:39:22
Fame and yet you're also drawn to fame

01:39:18 --> 01:39:26
what were you on we're on you where are

01:39:21 --> 01:39:27
you on that currently have you had some

01:39:25 --> 01:39:30
introspection some soul-searching

01:39:26 --> 01:39:34
yeah I actually I've come to a pretty

01:39:29 --> 01:39:35
stable position on that like after the

01:39:33 --> 01:39:37
first time I realized that I don't want

01:39:35 --> 01:39:39
attention from the masses

01:39:36 --> 01:39:43
I want attention from people who I

01:39:38 --> 01:39:46
respect who you respect I can give a

01:39:42 --> 01:39:48
list of people so are these like Elon

01:39:45 --> 01:39:51
must have characters yeah

01:39:47 --> 01:39:52
well actually you know what I'll make it

01:39:50 --> 01:39:55
more broad than that I won't make it

01:39:51 --> 01:39:58
about a person I respect skill I respect

01:39:54 --> 01:40:02
people who have skills right and I would

01:39:57 --> 01:40:04
like to like be I'm not gonna say famous

01:40:01 --> 01:40:12
but be like known among more people who

01:40:03 --> 01:40:13
have like real skills who in cars doers

01:40:11 --> 01:40:19
do you think have skill not do you

01:40:12 --> 01:40:21
respect Oh Kyle vote has skill a lot of

01:40:18 --> 01:40:24
people away mo have skill and I respect

01:40:20 --> 01:40:26
hem I I respect them as engineers like

01:40:23 --> 01:40:27
I can think I mean I think about all the

01:40:25 --> 01:40:29
times in my life where I've been like

01:40:26 --> 01:40:30
dead set on approaches and they turn out

01:40:28 --> 01:40:32
o be wrong

01:40:29 --> 01:40:34
so I mean this might I might be wrong I

01:40:31 --> 01:40:37
accept that I accept that there's a

01:40:33 --> 01:40:38
decent chance that I'm I'm wrong and

01:40:36 --> 01:40:40
actually I mean having talked to Chris

01:40:37 --> 01:40:43
Urmson sterling anderson i those those

01:40:40 --> 01:40:48
guys I mean I deeply respect Chris I

01:40:42 --> 01:40:50
just admire the guy he's legit can you

01:40:47 --> 01:40:51
drive a car through the desert when

01:40:49 --> 01:40:54
everybody thinks it's impossible that is

01:40:50 --> 01:40:55
that's legit and then I also really

01:40:53 --> 01:40:56
respect the people who are like writing

01:40:54 --> 01:40:58
the infrastructure of the world like the

01:40:55 --> 01:41:00
linus torvalds and the chris lab they're

01:40:57 --> 01:41:04
doing the real work I know they're doing

01:40:59 --> 01:41:05
the real work this every dog that Chris

01:41:03 --> 01:41:07
Ladin you realize especially when

01:41:04 --> 01:41:10
they're humble it's like you realize oh

01:41:06 --> 01:41:13
you guys were just using your oh yeah

01:41:09 --> 01:41:17
all the hard work they did him that's

01:41:12 --> 01:41:19
incredible what do you think mr. Anthony

01:41:16 --> 01:41:21
lowendahl ski

01:41:18 --> 01:41:25
what do you he's a he's another mad

01:41:20 --> 01:41:27
genius sharp guy oh yeah what do you

01:41:24 --> 01:41:29
think he might long-term become a

01:41:26 --> 01:41:32
competitor Oh

01:41:28 --> 01:41:34
tu cama well so I think that he has the

01:41:31 --> 01:41:36
other right approach I think that right

01:41:33 --> 01:41:38
now there's two right approaches one is

01:41:35 --> 01:41:39
what we're doing and one is what he's

01:41:37 --> 01:41:42
doing can you describe I think it's

01:41:38 --> 01:41:43
called pronto a certain you thing did do

01:41:41 --> 01:41:45
you know what what the approaches

01:41:42 --> 01:41:46
actually don't know embark is also doing

01:41:44 --> 01:41:50
the same sort of thing the idea is

01:41:45 --> 01:41:52
almost that you want to so if you're I

01:41:49 --> 01:41:56
can't partner with Honda and Toyota

01:41:51 --> 01:41:58
are uh like four

01:41:55 --> 01:42:00
hundred thousand person companies it's

01:41:57 --> 01:42:02
not even a company at that point like I

01:41:59 --> 01:42:04
don't think of it like I don't personify

01:42:01 --> 01:42:05
it I think of it like an object but a

01:42:03 --> 01:42:09
trucker

01:42:04 --> 01:42:11
drives for a fleet maybe that has like

01:42:08 --> 01:42:12
some truckers are independent some

01:42:10 --> 01:42:14
truckers Drive for fleets with a hundred

01:42:11 --> 01:42:16
trucks there are tons of independent

01:42:13 --> 01:42:18
rucking companies out there start a

01:42:15 --> 01:42:22
trucking company and drive your costs

01:42:17 --> 01:42:25
down or figure out how to drive down the

01:42:22 --> 01:42:27
cost of trucking another company that I

01:42:24 --> 01:42:29
really respect is uh not oh I should I

01:42:26 --> 01:42:31
respect their business model no auto

01:42:28 --> 01:42:35
sells a driver monitoring camera and

01:42:30 --> 01:42:37
they sell it to fleet owners if I that's

01:42:34 --> 01:42:40
right if I owned a fleet of cars and I

01:42:36 --> 01:42:43
could pay you know 40 bucks a month to

01:42:39 --> 01:42:46
monitor my employees

01:42:42 --> 01:42:49
this is gonna like reduces accidents 18%

01:42:45 --> 01:42:51
yeah it's it's so like that in the space

01:42:48 --> 01:42:55
that is like the business model that I

01:42:50 --> 01:42:58
like most respect is there creating

01:42:54 --> 01:42:59
value today yeah which is uh that's a

01:42:57 --> 01:43:01
huge one is how do we create value today

01:42:58 --> 01:43:04
with some of this then the link keeping

01:43:01 --> 01:43:06
things huge and it sounds like you're

01:43:03 --> 01:43:08
creeping in or full steam ahead on the

01:43:05 --> 01:43:10
driver monitoring - yeah which I think

01:43:07 --> 01:43:13
actually were the short-term value if

01:43:09 --> 01:43:14
you can get right I still I'm not a huge

01:43:12 --> 01:43:16
fan of the statement that everything is

01:43:13 --> 01:43:18
to have driver monitoring but will I

01:43:15 --> 01:43:19
agree with that completely but I'm that

01:43:17 --> 01:43:22
statement usually misses the point that

01:43:18 --> 01:43:24
o get the experience of it right is not

01:43:21 --> 01:43:28
rivial oh no not at all in fact like so

01:43:23 --> 01:43:31
right now we have I think the time out

01:43:27 --> 01:43:33
depends on speed of the car but we want

01:43:30 --> 01:43:36
o depend on like the scenes day if

01:43:32 --> 01:43:38
you're on like an empty Highway it's

01:43:35 --> 01:43:39
very different if you don't pay

01:43:37 --> 01:43:42
attention then if light you're like

01:43:38 --> 01:43:45
coming up to a traffic light and

01:43:41 --> 01:43:47
long-term it should probably learn from

01:43:44 --> 01:43:49
the driver because that's to do I

01:43:46 --> 01:43:51
watched a lot of video we've built a

01:43:48 --> 01:43:53
smartphone detector just to analyze how

01:43:50 --> 01:43:54
people are using smartphones and people

01:43:52 --> 01:43:59
are using it very differently and

01:43:53 --> 01:44:02
there's a it's a texting styles there's

01:43:58 --> 01:44:04
videos yeah like I got billions of miles

01:44:01 --> 01:44:07
of people driving cars in this moment I

01:44:03 --> 01:44:09
spent a large fraction of my time just

01:44:06 --> 01:44:12
watching videos because it's never fails

01:44:08 --> 01:44:14
to to learn like it never I've never

01:44:11 --> 01:44:15
failed from a video watching session to

01:44:13 --> 01:44:19
learn something I didn't know before

01:44:14 --> 01:44:21
fact I usually like when I eat lunch

01:44:18 --> 01:44:24
I'll sit especially when the weather is

01:44:20 --> 01:44:26
good and just watch pedestrians with an

01:44:23 --> 01:44:29
eye to understand like from a computer

01:44:25 --> 01:44:31
vision I just to see can this model can

01:44:28 --> 01:44:32
you predict what are the decisions made

01:44:30 --> 01:44:34
and there's so many things that we don't

01:44:31 --> 01:44:35
understand this is what I mean about the

01:44:33 --> 01:44:38
state vector

01:44:34 --> 01:44:40
yeah it's I'm trying to always think

01:44:37 --> 01:44:44
like Gamma understanding in my human

01:44:39 --> 01:44:45
brain how do we convert that into how

01:44:43 --> 01:44:48
hard is the learning problem here I

01:44:44 --> 01:44:51
guess is the fundamental question so

01:44:47 --> 01:44:54
mething that from a hacking

01:44:50 --> 01:44:55
perspective this is always comes up

01:44:53 --> 01:44:57
especially with folks well first the

01:44:54 --> 01:45:00
most popular question is

01:44:56 --> 01:45:03
the trolley problem right so that's not

01:44:59 --> 01:45:04
a sort of a serious problem there are

01:45:02 --> 01:45:08
some ethical questions I think that

01:45:03 --> 01:45:11
arise maybe will you want to met you or

01:45:07 --> 01:45:12
do you think there's any ethical serious

01:45:10 --> 01:45:14
ethical questions that we have a

01:45:11 --> 01:45:16
solution to the trolley problem Akane

01:45:13 --> 01:45:18
aye well so there is actually an alert

01:45:15 --> 01:45:20
in our code ethical dilemma detected

01:45:17 --> 01:45:21
it's not triggered yeah we don't we

01:45:19 --> 01:45:23
don't how you have to detect the ethical

01:45:20 --> 01:45:24
dilemmas but we're a level two system so

01:45:22 --> 01:45:26
we're going to disengage and leave that

01:45:23 --> 01:45:28
decision to the human you're such a

01:45:25 --> 01:45:31
troll hey no but the trolley problem

01:45:27 --> 01:45:33
deserves to be trolled yeah that's a

01:45:30 --> 01:45:35
beautiful answer actually I know I gave

01:45:32 --> 01:45:37
it to someone who was like sometimes

01:45:34 --> 01:45:38
people ask like you asked about the

01:45:36 --> 01:45:39
trolley problems like you can have a

01:45:37 --> 01:45:40
kind of discussion about it like boo you

01:45:38 --> 01:45:42
get someone who's like really like

01:45:39 --> 01:45:45
arnest about it because it's the kind

01:45:41 --> 01:45:47
of thing where if you ask a bunch of

01:45:44 --> 01:45:49
people in an office whether we should

01:45:46 --> 01:45:50
use a sequal stack or no sequel stack if

01:45:48 --> 01:45:52
they're not that technical they have no

01:45:49 --> 01:45:53
pinion but if you ask them what color

01:45:51 --> 01:45:55
they want to paint the office everyone

01:45:52 --> 01:45:57
has an opinion on that and that's why

01:45:54 --> 01:45:58
the trolley problem is that's it I mean

01:45:56 --> 01:46:00
it's a beautiful answer

01:45:57 --> 01:46:02
yeah we're able to detect the problem

01:45:59 --> 01:46:04
and were able to pass it on to the human

01:46:01 --> 01:46:08
yeah I've never never heard anyone say

01:46:03 --> 01:46:11
it nice escape route okay but proud

01:46:07 --> 01:46:13
level - I'm proud level - I love it so

01:46:10 --> 01:46:15
the other thing that people cope you

01:46:12 --> 01:46:20
know have some concern about with AI in

01:46:14 --> 01:46:22
general is hacking so how hard is it do

01:46:19 --> 01:46:24
you think to hack a nataas vehicle

01:46:21 --> 01:46:26
ither through physical access or

01:46:23 --> 01:46:28
through the more sort of popular now

01:46:25 --> 01:46:31
these adversarial examples on the

01:46:27 --> 01:46:33
sensors be adversarial examples one you

01:46:30 --> 01:46:36
want to see some adversarial examples

01:46:32 --> 01:46:39
that affect humans hmm right oh well

01:46:35 --> 01:46:41
there used to be a stop sign here but I

01:46:38 --> 01:46:43
put a black bag over the stop sign and

01:46:40 --> 01:46:45
then people ran it all right adversarial

01:46:42 --> 01:46:49
yeah right like like like there's tons

01:46:44 --> 01:46:52
of human adversarial examples - um the

01:46:48 --> 01:46:53
question in general about like security

01:46:51 --> 01:46:55
if you saw something something just came

01:46:52 --> 01:46:57
out today I'm like there are always such

01:46:54 --> 01:47:00
igh P headlines about like how navigate

01:46:56 --> 01:47:02
on autopilot was fooled by a GPS spoof

01:46:59 --> 01:47:04
to take an exit right at least that's

01:47:01 --> 01:47:07
all they could do was take an exit if

01:47:03 --> 01:47:10
your car is relying on GPS in order to

01:47:06 --> 01:47:10
have a safe driving policy they're doing

01:47:09 --> 01:47:13
something

01:47:09 --> 01:47:15
if you're relying and this is why v2v is

01:47:12 --> 01:47:19
uch a terrible idea

01:47:14 --> 01:47:22
v2v now relies on both parties getting

01:47:18 --> 01:47:27
communication right this is not even so

01:47:21 --> 01:47:30
I think of safety security is like a

01:47:26 --> 01:47:33
special case of safety right safety is

01:47:29 --> 01:47:34
like we put a little you know piece of

01:47:32 --> 01:47:36
caution tape around the hole so that

01:47:33 --> 01:47:38
people won't walk into it by accident

01:47:35 --> 01:47:40
security is I put a 10 foot fence around

01:47:37 --> 01:47:41
the hole so you actually physically

01:47:39 --> 01:47:44
cannot climb into it with barbed wire on

01:47:40 --> 01:47:45
the top and stuff right so like if

01:47:43 --> 01:47:48
you're designing systems that are like

01:47:44 --> 01:47:51
unreliable they're definitely not secure

01:47:47 --> 01:47:54
your car should always do something safe

01:47:50 --> 01:47:56
using its local sensors and then the

01:47:53 --> 01:47:58
local sensor should be hardwired and

01:47:55 --> 01:47:59
then could somebody hack into your can

01:47:57 --> 01:47:59
boss and turn your steering wheel on

01:47:58 --> 01:48:01
your brakes

01:47:58 --> 01:48:05
yes but they could do it before common

01:48:00 --> 01:48:07
AI too so let's think out of the box and

01:48:04 --> 01:48:10
some things so do you think

01:48:06 --> 01:48:13
teleoperation has a role in any of this

01:48:09 --> 01:48:19
o remotely stepping in and controlling

01:48:12 --> 01:48:23
the cars no I think that if safety if

01:48:18 --> 01:48:27
the safety operation by design requires

01:48:22 --> 01:48:29
a constant link to the cars I think it

01:48:26 --> 01:48:33
doesn't work so that's the same argument

01:48:28 --> 01:48:35
using for v2i VTV well there's a lot of

01:48:32 --> 01:48:37
non safety critical stuff you can do

01:48:34 --> 01:48:39
with v2 I like v2 I liked v2 I weigh

01:48:36 --> 01:48:40
more than V B because Vita I is is

01:48:38 --> 01:48:42
already like I already have internet in

01:48:39 --> 01:48:45
the car right there's a lot of great

01:48:41 --> 01:48:47
stuff you can do with v2 I um like for

01:48:44 --> 01:48:50
example you can well where I already

01:48:46 --> 01:48:51
have v2 Waze is V die right ways can

01:48:49 --> 01:48:53
route me around traffic jams that's a

01:48:50 --> 01:48:55
great example of v2 I mm-hmm and then

01:48:53 --> 01:48:57
okay the car automatically talks to that

01:48:54 --> 01:48:58
same service like improving the

01:48:56 --> 01:49:01
xperience but it's not a fundamental

01:48:57 --> 01:49:04
fallback for safety know if any of your

01:49:00 --> 01:49:06
if any of your things

01:49:03 --> 01:49:09
that require wireless communication are

01:49:05 --> 01:49:14
more than qm like have a nozzle rating

01:49:08 --> 01:49:17
you should you previously said that life

01:49:13 --> 01:49:21
is work and then you don't do anything

01:49:16 --> 01:49:23
to relax so how do you think about hard

01:49:20 --> 01:49:24
work well what is it what do you think

01:49:22 --> 01:49:26
it takes to

01:49:23 --> 01:49:27
as great things you know there's a lot

01:49:25 --> 01:49:30
of people saying that there needs to be

01:49:26 --> 01:49:32
some balance you know you need to in

01:49:29 --> 01:49:33
order to accomplish great things you

01:49:31 --> 01:49:36
need to take some time off each of

01:49:32 --> 01:49:39
reflects and so on now and then some

01:49:35 --> 01:49:41
people are just insanely working burning

01:49:38 --> 01:49:43
the candle at both ends how do you think

01:49:40 --> 01:49:45
about that I think I was trolling in the

01:49:42 --> 01:49:47
Siraj interview when I said that

01:49:44 --> 01:49:50
off camera right before I spoke a little

01:49:46 --> 01:49:51
bit we'd like get out spot this is a

01:49:49 --> 01:49:53
joke right like I do nothing it relaxed

01:49:50 --> 01:49:54
look where I am I'm at a party right

01:49:52 --> 01:49:58
yeah

01:49:53 --> 01:50:00
that's true so no of course I I don't um

01:49:57 --> 01:50:03
what I say that life is work though I

01:49:59 --> 01:50:05
mean that like I think that what gives

01:50:02 --> 01:50:06
my life meaning is work I don't mean

01:50:04 --> 01:50:08
that every minute of the day you should

01:50:05 --> 01:50:10
be working I actually think this is not

01:50:07 --> 01:50:12
he best way to maximize results I think

01:50:09 --> 01:50:14
that if you're working 12 hours a day

01:50:11 --> 01:50:15
ou should be working smarter and not

01:50:13 --> 01:50:18
harder

01:50:14 --> 01:50:21
well so it gives work gives you meaning

01:50:17 --> 01:50:24
for some people other source of meaning

01:50:20 --> 01:50:24
is personal relationships yeah like

01:50:23 --> 01:50:28
family and so on

01:50:23 --> 01:50:31
you've also in that interview of Sirach

01:50:27 --> 01:50:32
or does the the trolling mentioned that

01:50:30 --> 01:50:37
one of the things you look forward to in

01:50:31 --> 01:50:38
the future is AI girlfriends yes so at

01:50:36 --> 01:50:40
he topic that I'm all very much

01:50:38 --> 01:50:41
fascinated by not necessarily

01:50:39 --> 01:50:44
girlfriends but just forming a deep

01:50:40 --> 01:50:46
connection with AI what kind of system

01:50:43 --> 01:50:48
do you imagine when you say AI

01:50:45 --> 01:50:50
girlfriend whether you were trolling or

01:50:47 --> 01:50:52
not know that one I'm very serious about

01:50:49 --> 01:50:54
and I'm serious about that on both a

01:50:51 --> 01:50:56
shallow level and a deep level I think

01:50:53 --> 01:50:59
that VR brothels are coming soon and are

01:50:55 --> 01:51:03
gonna be really cool it's not cheating

01:50:58 --> 01:51:06
if it's a robot I see the slogan already

01:51:02 --> 01:51:08
but there's I don't know if you've

01:51:05 --> 01:51:11
watched it just watched the black mirror

01:51:07 --> 01:51:16
episode i watch the one year yeah yeah

01:51:10 --> 01:51:20
oh the the Ashley - one way da no where

01:51:15 --> 01:51:22
there's two friends were having sex with

01:51:19 --> 01:51:25
each other and mo in the VR game your

01:51:21 --> 01:51:28
game it's just two guys but yeah one of

01:51:24 --> 01:51:31
them was was a female and yeah there's

01:51:27 --> 01:51:34
another mind-blowing concept that in VR

01:51:30 --> 01:51:37
you don't have to be the form you can be

01:51:33 --> 01:51:39
to animals having sex

01:51:36 --> 01:51:40
weird I mean I'll see you I said the

01:51:38 --> 01:51:44
software Maps the nerve endings right

01:51:39 --> 01:51:46
yeah yeah they they sweep a lot of the

01:51:43 --> 01:51:48
fascinating really difficult technical

01:51:45 --> 01:51:50
challenges under the rock like assuming

01:51:47 --> 01:51:52
it's possible to do the mapping of the

01:51:49 --> 01:51:53
nerve endings then I wish yeah I saw

01:51:51 --> 01:51:55
that the way they did it with a little

01:51:52 --> 01:51:59
like stim unit on the head that'd be

01:51:54 --> 01:52:01
amazing so wanna know on a shallow level

01:51:58 --> 01:52:04
ike you could set up like almost a

01:52:00 --> 01:52:07
brothel with like real dolls and oculus

01:52:03 --> 01:52:10
quests right some good software I think

01:52:06 --> 01:52:14
it vehicle novelty experience you know

01:52:09 --> 01:52:17
on a deeper like emotional level I mean

01:52:13 --> 01:52:19
yeah I would really like to fall in love

01:52:16 --> 01:52:25
with with with the machine do you see

01:52:18 --> 01:52:27
yourself having a long-term relationship

01:52:24 --> 01:52:31
of the kind monogamous relationship that

01:52:26 --> 01:52:34
we have now with a robot with a a AI

01:52:30 --> 01:52:39
system even not even just the robot so I

01:52:33 --> 01:52:42
think about maybe my ideal future when I

01:52:38 --> 01:52:44
was fifteen I read eliezer yudkowsky

01:52:41 --> 01:52:50
early writings mmm-hmm

01:52:43 --> 01:52:51
on the singularity and like that AI is

01:52:49 --> 01:52:55
going to surpass human intelligence

01:52:50 --> 01:52:58
massively he made some Moore's law based

01:52:54 --> 01:53:00
predictions that I mostly agree with and

01:52:57 --> 01:53:03
then I really struggled for the next

01:52:59 --> 01:53:04
couple years of my life like why should

01:53:02 --> 01:53:05
I even bother to learn anything it's all

01:53:03 --> 01:53:10
gonna be meaningless when the machines

01:53:04 --> 01:53:12
how up right maybe maybe when I was

01:53:09 --> 01:53:14
that young I was still a little bit more

01:53:11 --> 01:53:15
pure and really like clung to that and

01:53:13 --> 01:53:16
I'm like wow the machines ain't here yet

01:53:14 --> 01:53:17
you know and I seem to be pretty good at

01:53:15 --> 01:53:19
his stuff

01:53:16 --> 01:53:23
let's uh let's try my best you know like

01:53:18 --> 01:53:25
what's the worst that happens but the

01:53:22 --> 01:53:28
best possible future I see is me sort of

01:53:24 --> 01:53:30
merging with the Machine and the way

01:53:27 --> 01:53:32
that I personify this is in a long-term

01:53:29 --> 01:53:34
onogamous relationship with a machine

01:53:31 --> 01:53:37
oh you don't think there's room for

01:53:33 --> 01:53:40
another human in your life if you really

01:53:36 --> 01:53:43
truly merge with another machine I mean

01:53:39 --> 01:53:48
I see merging I see like the best

01:53:42 --> 01:53:50
interface to my brain is like the same

01:53:47 --> 01:53:51
relationship and to merge with an AI

01:53:49 --> 01:53:54
right

01:53:50 --> 01:53:55
does that merging feel like I see yeah

01:53:53 --> 01:53:58
I've seen couples who've been together

01:53:54 --> 01:54:00
for a long time and like I almost think

01:53:57 --> 01:54:02
of them as one person like couples who

01:53:59 --> 01:54:05
spend all their time together and that's

01:54:01 --> 01:54:06
how you're actually putting what

01:54:04 --> 01:54:09
does that merging actually looks like

01:54:05 --> 01:54:11
it's not just a nice channel like a lot

01:54:08 --> 01:54:14
of people imagine it's just an efficient

01:54:10 --> 01:54:16
link search link to Wikipedia or

01:54:13 --> 01:54:17
something I don't believe in that but

01:54:15 --> 01:54:19
it's more you're saying that there's the

01:54:16 --> 01:54:20
same kind of the same kind of

01:54:18 --> 01:54:21
relationship you have one other human

01:54:19 --> 01:54:24
that's a deep relationship is that's

01:54:20 --> 01:54:26
what merging looks like that's that's

01:54:23 --> 01:54:28
pretty uh I don't believe that link is

01:54:25 --> 01:54:30
possible um I think that that link so

01:54:27 --> 01:54:32
you're like oh me to download Wikipedia

01:54:29 --> 01:54:34
right to my brain yeah my reading speed

01:54:31 --> 01:54:36
is not limited by my eyes my reading

01:54:33 --> 01:54:39
speed is limited by my inner processing

01:54:35 --> 01:54:42
locally and to like bootstrap that

01:54:38 --> 01:54:45
sounds kind of unclear how to do it and

01:54:41 --> 01:54:49
horrify but if I am with somebody and

01:54:44 --> 01:54:52
I'll use a somebody who is making a

01:54:48 --> 01:54:54
super sophisticated model of me and then

01:54:51 --> 01:54:55
running simulations on that model I'm

01:54:53 --> 01:54:56
not gonna get into the question whether

01:54:54 --> 01:54:57
the simulations are conscious or not I

01:54:55 --> 01:54:58
don't really want to know what it's

01:54:56 --> 01:55:01
doing

01:54:57 --> 01:55:03
um but using those simulations to play

01:55:00 --> 01:55:06
out hypothetical futures for me deciding

01:55:02 --> 01:55:09
what things to say to me to guide me

01:55:05 --> 01:55:09
along a path and that's how I envision

01:55:08 --> 01:55:13
it

01:55:08 --> 01:55:16
so on that path to AI of superhuman

01:55:12 --> 01:55:17
level intelligence you've mentioned that

01:55:15 --> 01:55:20
you believe in the singularity that

01:55:16 --> 01:55:21
singularity is coming yeah again could

01:55:19 --> 01:55:24
be trolling could be not could be part

01:55:20 --> 01:55:25
I'm all trolling his truth in it I don't

01:55:23 --> 01:55:27
know what that means anymore what is the

01:55:24 --> 01:55:30
singularity yeah so that's that's really

01:55:26 --> 01:55:32
the question how many years do you think

01:55:29 --> 01:55:33
before the singularity what form do you

01:55:31 --> 01:55:36
think it will take does that mean

01:55:32 --> 01:55:38
fundamental shifts and capabilities of

01:55:35 --> 01:55:42
AI does it mean some other kind of ideas

01:55:37 --> 01:55:44
um maybe this is just my roots but so I

01:55:41 --> 01:55:47
can buy a human beings worth of compute

01:55:43 --> 01:55:49
for like a million bucks that I it's

01:55:46 --> 01:55:51
about one TPU pod v3 I want like I think

01:55:48 --> 01:55:52
they claim a hundred peda flops that's

01:55:50 --> 01:55:53
being generous I think humans are

01:55:51 --> 01:55:54
actually more like twenty so that's like

01:55:52 --> 01:55:56
five humans that's pretty good

01:55:53 --> 01:55:58
Google needs to sell their teepees um

01:55:55 --> 01:56:01
but I could buy I could buy I could buy

01:55:57 --> 01:56:05
GPUs I could buy a stack of like by 1080

01:56:00 --> 01:56:07
tea eyes build data center full of them

01:56:04 --> 01:56:10
four million box I can get a human worth

01:56:06 --> 01:56:13
of compute but when you look at the

01:56:09 --> 01:56:15
total number of flops in the world when

01:56:12 --> 01:56:17
you look at human flops which goes up

01:56:14 --> 01:56:19
very very slowly with the population and

01:56:16 --> 01:56:22
machine flops which goes up

01:56:18 --> 01:56:25
exponentially but it's still nowhere

01:56:21 --> 01:56:26
near I think that's the key thing to

01:56:24 --> 01:56:29
talk about when the singularity happened

01:56:25 --> 01:56:32
when most flops in the world are silicon

01:56:28 --> 01:56:33
and not biological that's kind of the

01:56:31 --> 01:56:37
crossing point like they are now the

01:56:32 --> 01:56:39
dominant species on the planet and just

01:56:36 --> 01:56:40
looking at how technology is progressing

01:56:38 --> 01:56:41
when do you think that could possibly

01:56:39 --> 01:56:42
happen

01:56:40 --> 01:56:44
you think go to happen in your lifetime

01:56:41 --> 01:56:47
oh yeah definitely my lifetime I've done

01:56:43 --> 01:56:52
the math I like 2038 because it's the

01:56:46 --> 01:56:53
UNIX timestamp rollover yeah beautifully

01:56:51 --> 01:56:57
put

01:56:52 --> 01:56:59
so you've you said that the meaning of

01:56:56 --> 01:57:01
life has to win if you look five years

01:56:58 --> 01:57:04
into the future what does winning look

01:57:00 --> 01:57:07
like so

01:57:03 --> 01:57:07
[Music]

01:57:07 --> 01:57:14
hi there's a lot of I can go into like

01:57:11 --> 01:57:18
technical depth to what I mean by that

01:57:13 --> 01:57:19
o win um it may not mean I was

01:57:17 --> 01:57:20
criticized for that in the comments like

01:57:18 --> 01:57:24
doesn't this guy want to like save the

01:57:19 --> 01:57:26
penguins in Antarctica or like you know

01:57:23 --> 01:57:27
listen to what I'm saying I'm not

01:57:25 --> 01:57:32
alking about like I have a yacht or

01:57:26 --> 01:57:36
something I am an agent I am put into

01:57:31 --> 01:57:39
this world and I don't really know what

01:57:35 --> 01:57:40
my purpose is but if you're a

01:57:38 --> 01:57:42
reinforcement if you're if you're an

01:57:39 --> 01:57:44
intelligent agent and you're put into a

01:57:41 --> 01:57:45
world what is the ideal thing to do well

01:57:43 --> 01:57:47
the ideal thing mathematically you go

01:57:44 --> 01:57:50
back to like Schmitt Hoover theories

01:57:46 --> 01:57:52
about this is to build a compressive

01:57:49 --> 01:57:54
model of the world to build a maximally

01:57:51 --> 01:57:57
compressive to explore the world such

01:57:53 --> 01:57:59
that your exploration function maximizes

01:57:56 --> 01:58:01
the derivative of compression of the

01:57:58 --> 01:58:03
past mid Hoover has a paper about this

01:58:00 --> 01:58:06
and like I took that kind of as like a

01:58:02 --> 01:58:09
personal goal function so what I mean to

01:58:05 --> 01:58:11
win I mean like maybe maybe this is

01:58:08 --> 01:58:13
religious but like I think that in the

01:58:10 --> 01:58:15
future I might be given a real purpose

01:58:12 --> 01:58:17
or I may decide this purpose myself and

01:58:14 --> 01:58:19
then at that point now I know what the

01:58:16 --> 01:58:20
game is and I know how to win I think

01:58:18 --> 01:58:22
right now I'm still just trying to

01:58:19 --> 01:58:26
figure out what the game is but once I

01:58:21 --> 01:58:27
know so you have you have imperfect

01:58:25 --> 01:58:29
information you have a lot of

01:58:26 --> 01:58:31
uncertainty about the reward function

01:58:28 --> 01:58:32
and you're discovering it exactly the

01:58:30 --> 01:58:35
purpose is that's that's the better way

01:58:31 --> 01:58:38
to put it the purpose is to maximize it

01:58:34 --> 01:58:39
while you have it a lot of uncertainty

01:58:37 --> 01:58:41
around it and you're both reducing the

01:58:38 --> 01:58:44
uncertainty and maximizing at the same

01:58:40 --> 01:58:46
time yeah and so that's at the technical

01:58:43 --> 01:58:48
evel what is the if you believe in the

01:58:45 --> 01:58:49
universal prior yeah

01:58:47 --> 01:58:52
what is the universal reward function

01:58:48 --> 01:58:55
that's the better way to put it so that

01:58:51 --> 01:58:58
when it's interesting I think I speak

01:58:54 --> 01:59:02
for everyone in saying that I wonder

01:58:57 --> 01:59:06
what that reward function is for you and

01:59:01 --> 01:59:08
I look forward to seeing that in five

01:59:05 --> 01:59:10
years in ten years I think a lot of

01:59:07 --> 01:59:12
people who do myself right and cheering

01:59:09 --> 01:59:15
you on man so I'm I'm a happy you exist

01:59:11 --> 01:59:16
and I wish you the best of luck thanks

01:59:14 --> 01:59:19
for talking today man

01:59:15 --> 01:59:19
thank you this is a lot of fun

01:59:23 --> 01:59:26
you

<!-- YOUTUBE_TRANSCRIPT_END -->
