---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "jZfRBt9rysY"
title: "a16z Podcast | All About Microservices"
video_url: "https://www.youtube.com/watch?v=jZfRBt9rysY"
thumbnail_url: "https://i.ytimg.com/vi/jZfRBt9rysY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=jZfRBt9rysY"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:35:52.000Z"
upload_date: "2019-01-02"
duration_seconds: 1607
duration_human: "26:47"
view_count: 553
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:16:05.115Z"
---

# a16z Podcast | All About Microservices

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=jZfRBt9rysY
- video_id: jZfRBt9rysY
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:35:52.000Z
- upload_date: 2019-01-02
- duration: 26:47
- view_count: 553
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

"Incremental change may be good theory, but in practice you have to have a big enough stick to hit everybody with to make everything move at once". So shares Adrian Cockcroft, who helped lead Netflix's migration from datacenter to the cloud -- and from monolithic to microservices architecture -- when their streaming business (the "stick"!) was exploding.

So how did they -- and how can other companies -- make such big, bet-the-company kind of moves, without getting mired in fanatical internal debates? Does organizational structure need to change, especially if moving from a more product-, than project-based, approach? What happens to security? And finally, what happens to the role of CIOs; what can/should they do?

Most interestingly: How will the entire industry be affected as companies not only adopt, but essentially offer, microservices or narrow cloud APIs? How do the trends of microservices, containers, devops, cloud, as-a-service/ on-demand, serverless -- all moves towards more and more ephemerality -- change the future of computing and even work? Cockcroft (who is now a technology fellow at Battery Ventures) joins this episode of the a16z Podcast, in conversation with Frank Chen and Martin Casado (and Sonal Chokshi) to discuss these shifts and more.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi everyone welcome to the a 6nz podcast

00:00:03 --> 00:00:08
I am sonal today's podcast episode is

00:00:05 --> 00:00:10
all about micro services and I've been

00:00:07 --> 00:00:12
super eager to focus only on this topic

00:00:09 --> 00:00:13
on the podcast since we mentioned it a

00:00:11 --> 00:00:15
lot in passing and I'm really excited

00:00:12 --> 00:00:17
because we finally get to do that our

00:00:14 --> 00:00:19
special guest for this topic is Adrian

00:00:16 --> 00:00:21
Cockcroft who helped lead Netflix's

00:00:18 --> 00:00:23
migration to a large scale highly

00:00:20 --> 00:00:25
available public cloud architecture a

00:00:22 --> 00:00:28
few years ago making Netflix one of the

00:00:24 --> 00:00:30
originators and early adopters of micro

00:00:27 --> 00:00:32
services and Adrian is widely credited

00:00:29 --> 00:00:35
for helping pioneer micro services at

00:00:31 --> 00:00:37
web-scale also joining the conversation

00:00:34 --> 00:00:38
or a 16z partners Martine casado and

00:00:36 --> 00:00:40
Frank Chen who will be moderating the

00:00:37 --> 00:00:43
discussion and in this episode we cover

00:00:39 --> 00:00:45
everything from what is micro services

00:00:42 --> 00:00:46
to the evolution of the architecture to

00:00:44 --> 00:00:49
how it changes the shape of

00:00:45 --> 00:00:51
organizations to operations to changing

00:00:48 --> 00:00:52
the role of CIOs and finally and this is

00:00:50 --> 00:00:54
actually what really excites me the most

00:00:51 --> 00:00:55
about this topic is what new

00:00:53 --> 00:00:57
opportunities come up when you have

00:00:54 --> 00:00:59
these extremely ephemeral systems that

00:00:56 --> 00:01:00
are you know just like like ghosts in

00:00:58 --> 00:01:02
the machine from containers to servers

00:00:59 --> 00:01:04
on demand to serverless and what's

00:01:01 --> 00:01:05
happening there and some really

00:01:03 --> 00:01:07
interesting trends on that edge the

00:01:04 --> 00:01:09
conversation begins however with the

00:01:06 --> 00:01:11
story of how Netflix got into micro

00:01:08 --> 00:01:13
services take us back to the days when

00:01:10 --> 00:01:16
Netflix had decided they were gonna move

00:01:12 --> 00:01:19
to Amazon and commit to a micro services

00:01:15 --> 00:01:20
architecture let's pick up the story

00:01:18 --> 00:01:23
there so what's it like inside

00:01:19 --> 00:01:26
we started off basically running away

00:01:22 --> 00:01:28
from a monolith we had over a hundred

00:01:25 --> 00:01:29
people every two weeks trying to get all

00:01:27 --> 00:01:32
the code they'd written in the last two

00:01:28 --> 00:01:34
weeks jammed into one codebase get it

00:01:31 --> 00:01:36
hrough QA and get that out into

00:01:33 --> 00:01:39
production and that was just getting

00:01:35 --> 00:01:40
more and more painful and we basically

00:01:38 --> 00:01:43
decided we had to break it into pieces

00:01:39 --> 00:01:45
he wanted it to be the work of one

00:01:42 --> 00:01:48
developer basically controlling what

00:01:44 --> 00:01:50
hey had deployed independently of

00:01:47 --> 00:01:52
everybody else and at the same time we

00:01:49 --> 00:01:54
re looking at moving to cloud did you

00:01:51 --> 00:01:56
make both big moves at once in other

00:01:53 --> 00:01:58
words monolith the micro services and

00:01:55 --> 00:02:01
then private data center to Amazon

00:01:57 --> 00:02:03
everything together and sometimes you

00:02:00 --> 00:02:05
find incremental change a good theory

00:02:02 --> 00:02:07
but in practice you have to have a big

00:02:04 --> 00:02:10
enough stick to hit everybody with to

00:02:06 --> 00:02:11
make everything move at once and the big

00:02:09 --> 00:02:13
stick was we didn't have enough

00:02:10 --> 00:02:13
datacenter capacity to support streaming

00:02:12 --> 00:02:17
we were

00:02:12 --> 00:02:19
the DVD business in in the data center

00:02:16 --> 00:02:21
on a system that was growing at a

00:02:18 --> 00:02:23
respectable rate but the streaming

00:02:20 --> 00:02:27
business was exploding at a much much

00:02:22 --> 00:02:28
igher rate and because of that we knew

00:02:26 --> 00:02:31
e would have to either build lots of

00:02:27 --> 00:02:33
big data centers or get on to something

00:02:30 --> 00:02:34
else so the bet was okay we need to go

00:02:32 --> 00:02:36
n cloud then what's the right

00:02:33 --> 00:02:38
architecture for doing that what's the

00:02:35 --> 00:02:40
right organization for doing that the

00:02:37 --> 00:02:42
developer group is getting bigger and

00:02:39 --> 00:02:44
getting less productive and we wanted to

00:02:41 --> 00:02:46
unlock the innovation so we were

00:02:43 --> 00:02:49
simultaneously trying to get better

00:02:45 --> 00:02:50
developer productivity better time to

00:02:48 --> 00:02:52
value of just one of the key things

00:02:49 --> 00:02:54
we're trying to optimize for generally

00:02:51 --> 00:02:56
and then there was a whole bunch of

00:02:53 --> 00:02:58
other cloud transitions bundled in as

00:02:55 --> 00:02:59
you went from the monolithic application

00:02:57 --> 00:03:00
to microservices what did that entail

00:02:58 --> 00:03:02
what's that mean what is a

00:02:59 --> 00:03:05
micro-services architecture well

00:03:01 --> 00:03:07
originally I called it fine-grained SOA

00:03:04 --> 00:03:08
service-oriented architecture and

00:03:06 --> 00:03:11
there's a lot some people get negative

00:03:07 --> 00:03:13
reactions to SOA because they were out

00:03:10 --> 00:03:15
here trying to do it 10 15 years ago

00:03:12 --> 00:03:16
that's right so with all the same ideas

00:03:14 --> 00:03:18
over and over again with new dressing

00:03:15 --> 00:03:20
yeah there's a question like why now and

00:03:17 --> 00:03:22
why didn't it work then and if you look

00:03:19 --> 00:03:25
at it what we were doing was on

00:03:21 --> 00:03:27
relatively slow CPUs compared to what we

00:03:24 --> 00:03:29
have today on relatively slow networks

00:03:26 --> 00:03:32
we were processing big fat lumps of XML

00:03:28 --> 00:03:34
and passing it around and we were really

00:03:31 --> 00:03:37
only able to break the application into

00:03:33 --> 00:03:39
a few large chunks because the overhead

00:03:36 --> 00:03:42
of all of the message parsing was too

00:03:38 --> 00:03:44
high if you come to today the you know

00:03:41 --> 00:03:46
you can break it into you know maybe

00:03:43 --> 00:03:48
100th of a size and 100 times as many

00:03:45 --> 00:03:50
chunks because the overhead of the

00:03:47 --> 00:03:52
communication is now very low we've got

00:03:49 --> 00:03:54
binary protocols we're not trying to

00:03:51 --> 00:03:57
sort of make everything conform to the

00:03:53 --> 00:03:58
big soap XML messaging schemes so it

00:03:56 --> 00:04:01
became possible to build a fine-grain

00:03:57 --> 00:04:03
SOA architecture and that ended up being

00:04:00 --> 00:04:04
called micro services but I think Fred

00:04:02 --> 00:04:07
George was the first to use the word but

00:04:03 --> 00:04:08
hat got written up by Martin Fowler and

00:04:06 --> 00:04:11
then everyone said ok and we'll go with

00:04:07 --> 00:04:14
at yeah so Big Bang moves this was a

00:04:10 --> 00:04:14
bet the company set of Technology

00:04:13 --> 00:04:16
decisions

00:04:13 --> 00:04:18
looking back at it what are some of the

00:04:15 --> 00:04:21
lessons learned I think one of the ways

00:04:17 --> 00:04:24
to approach this is to basically create

00:04:20 --> 00:04:26
kind of a pathfinder or a pioneer team

00:04:23 --> 00:04:27
there was a lot of controversy in sites

00:04:25 --> 00:04:28
of Africa

00:04:26 --> 00:04:30
nd he thought this was stupid yeah a

00:04:27 --> 00:04:32
few of us thought we could make it work

00:04:29 --> 00:04:33
and other people a bit more gung-ho so

00:04:31 --> 00:04:36
we got the people that thought they

00:04:32 --> 00:04:38
could make it work into a room and had a

00:04:35 --> 00:04:40
one-day project where we all built a

00:04:37 --> 00:04:42
thing in the cloud to see if it would

00:04:39 --> 00:04:44
work based built out of the kind of

00:04:41 --> 00:04:47
technologies we'd need to use to build

00:04:43 --> 00:04:48
this that team then sort of knocked down

00:04:46 --> 00:04:50
a bunch of the strawman arguments that

00:04:47 --> 00:04:52
everyone else was holding up against us

00:04:49 --> 00:04:54
a lot of the time it is just straw man

00:04:51 --> 00:04:56
argument but you have to actually go and

00:04:53 --> 00:04:57
build something to actually feel that

00:04:55 --> 00:04:59
find out what are the real arguments and

00:04:56 --> 00:05:00
then you discover things you didn't even

00:04:58 --> 00:05:02
know which are hard you know you run

00:04:59 --> 00:05:04
into the real blockers as opposed to the

00:05:01 --> 00:05:06
imaginary ones so I think the trick is

00:05:03 --> 00:05:10
to get a small team go very deep

00:05:05 --> 00:05:12
discover what you can and run a whole

00:05:09 --> 00:05:13
bunch of these little projects where

00:05:11 --> 00:05:15
you're trying to learn as much as

00:05:12 --> 00:05:18
possible with the smallest possible

00:05:14 --> 00:05:21
input you had this cultural aha which is

00:05:17 --> 00:05:22
let's get the people who are gun ho

00:05:20 --> 00:05:24
about this and let's let them go deep

00:05:21 --> 00:05:26
knock down the strong man arguments sort

00:05:23 --> 00:05:28
of zoom up to the 30,000 foot view and

00:05:25 --> 00:05:30
sort of describe the organization at

00:05:27 --> 00:05:32
Netflix sort of before and after what it

00:05:29 --> 00:05:33
looked like before and after from a

00:05:31 --> 00:05:35
skill set point of view from an

00:05:32 --> 00:05:37
organizational design point of view this

00:05:34 --> 00:05:38
actually one of the big things that

00:05:36 --> 00:05:41
makes a difference some organizations

00:05:37 --> 00:05:43
are set up already to do micro service

00:05:40 --> 00:05:46
based architectures and others have to

00:05:42 --> 00:05:48
go through a reorg right Netflix it ever

00:05:45 --> 00:05:50
emerged naturally out of the way we were

00:05:47 --> 00:05:51
structured at the time we were already

00:05:49 --> 00:05:54
structured as small cells that owned

00:05:50 --> 00:05:56
things a lot of responsibilities each

00:05:53 --> 00:05:58
team had a very clear idea of what it

00:05:55 --> 00:06:01
was building and how it related to other

00:05:57 --> 00:06:03
teams but it was assembled as a monolith

00:06:00 --> 00:06:05
at the end of the day so breaking it

00:06:02 --> 00:06:07
apart was a fairly natural thing for us

00:06:04 --> 00:06:09
to do what you see with traditional

00:06:06 --> 00:06:11
enterprise siloed organisations as

00:06:08 --> 00:06:13
they're actually having to do a real gun

00:06:10 --> 00:06:15
setup teams that own that are

00:06:12 --> 00:06:17
sponsible for services and that's it's

00:06:14 --> 00:06:19
omewhat unnatural for the way they're

00:06:16 --> 00:06:21
currently set up but I'm seeing an

00:06:18 --> 00:06:23
increasing number of people go through

00:06:20 --> 00:06:27
that transition and sometimes you can

00:06:22 --> 00:06:29
see it as a replacing project-based work

00:06:26 --> 00:06:31
with product based work so every team

00:06:28 --> 00:06:32
becomes basically a product team for

00:06:30 --> 00:06:34
their micro service and you have the

00:06:31 --> 00:06:37
product management aspects and the

00:06:33 --> 00:06:39
operational aspects within that team and

00:06:36 --> 00:06:40
id you find that the people who were

00:06:38 --> 00:06:42
used to working on the monolith could

00:06:39 --> 00:06:44
retrained or did you have to have a new

00:06:41 --> 00:06:46
crew come in in the culture and

00:06:43 --> 00:06:48
Netflix's is interesting most of us had

00:06:45 --> 00:06:50
been around before a lot of us had

00:06:47 --> 00:06:51
worked on SOA we you know the

00:06:49 --> 00:06:53
gray-haired people that have been

00:06:50 --> 00:06:54
there's a few people that work at Xerox

00:06:52 --> 00:06:56
PARC in the 1980s and you could go and

00:06:54 --> 00:06:58
have arguments with them about

00:06:55 --> 00:06:59
object-oriented programming we had some

00:06:57 --> 00:07:01
young younger people but there was a lot

00:06:58 --> 00:07:02
of very experienced people taking all

00:07:00 --> 00:07:04
the stuff they'd learned and

00:07:01 --> 00:07:06
synthesizing it together it's very

00:07:03 --> 00:07:09
collaborative experience and we came up

00:07:06 --> 00:07:11
with things that made sense based on

00:07:08 --> 00:07:13
this this series of transitions we were

00:07:10 --> 00:07:15
going through the other transition was

00:07:12 --> 00:07:17
from a single centralized database we

00:07:14 --> 00:07:19
had this enormous Oracle machine with a

00:07:16 --> 00:07:23
really complicated schema to a

00:07:18 --> 00:07:24
distributed no sequel database of in the

00:07:22 --> 00:07:27
nd based on lots of different Cassandra

00:07:24 --> 00:07:28
clusters and that that was the third

00:07:26 --> 00:07:30
transition and that was probably the

00:07:27 --> 00:07:32
hardest transition was getting all of

00:07:29 --> 00:07:33
the sequel code and transactional stuff

00:07:31 --> 00:07:36
out of the system it's actually breaking

00:07:32 --> 00:07:38
apart the databases probably the hardest

00:07:35 --> 00:07:40
hing to do and then splitting chunks of

00:07:37 --> 00:07:42
code offers is also difficult if you're

00:07:39 --> 00:07:44
trying to pick apart our monolith and it

00:07:42 --> 00:07:45
urns out if you don't break apart your

00:07:43 --> 00:07:47
database back-end

00:07:44 --> 00:07:49
and you just creates or services to talk

00:07:46 --> 00:07:51
to it you've actually created what's

00:07:48 --> 00:07:53
called a distributed monolith which has

00:07:50 --> 00:07:54
all the same fragility of the monolith

00:07:52 --> 00:07:55
and you can't update things

00:07:53 --> 00:07:58
independently because you're tied by the

00:07:54 --> 00:08:00
database you can't just take the Oracle

00:07:57 --> 00:08:02
database and break it up into little

00:07:59 --> 00:08:03
pieces you have to think about it

00:08:01 --> 00:08:05
differently now the same thing is true

00:08:02 --> 00:08:08
for the rest of the architecture as you

00:08:04 --> 00:08:10
migrate to microservices yeah so I think

00:08:07 --> 00:08:14
what excites me about micros services in

00:08:09 --> 00:08:17
general it moves all of infrastructure

00:08:13 --> 00:08:19
up to an application layer so if you

00:08:16 --> 00:08:20
think about what you normally do an

00:08:18 --> 00:08:22
infrastructure you've got these basic

00:08:19 --> 00:08:24
abstractions I compute and network and

00:08:21 --> 00:08:26
storage which are pretty low level and

00:08:23 --> 00:08:28
there's semantic free right you don't

00:08:25 --> 00:08:30
have structured data one of the the huge

00:08:27 --> 00:08:31
advantages is going up to a micro

00:08:29 --> 00:08:33
service architectures you can do

00:08:30 --> 00:08:35
infrastructure insertion things like for

00:08:32 --> 00:08:38
example security things for like you

00:08:34 --> 00:08:39
know even debugging basic operations and

00:08:37 --> 00:08:42
management and you can do it in a way

00:08:38 --> 00:08:45
that has the deep context and semantics

00:08:41 --> 00:08:47
of the application the point here is

00:08:44 --> 00:08:48
that not not only are you going away

00:08:46 --> 00:08:50
from the monolith which is really

00:08:47 --> 00:08:52
important and I think it's great but

00:08:49 --> 00:08:53
also like you've got more semantics than

00:08:51 --> 00:08:54
you've ever had

00:08:52 --> 00:08:55
before I mean this is actually

00:08:53 --> 00:08:57
meaningful stuff when you're dealing

00:08:54 --> 00:09:00
with not IP headers for example not

00:08:56 --> 00:09:01
blocks but actual like structured data

00:08:59 --> 00:09:03
nd I think that we can actually

00:09:00 --> 00:09:04
reimagine a lot of these tools in ways

00:09:02 --> 00:09:05
that we've never thought of them before

00:09:03 --> 00:09:07
because we've never had the ability to

00:09:04 --> 00:09:08
have this type of semantics in this in

00:09:06 --> 00:09:10
these tool chains we're seeing this

00:09:07 --> 00:09:12
burgeoning area of micro services where

00:09:09 --> 00:09:13
you almost have like a function per

00:09:11 --> 00:09:15
company coming up and now I believe that

00:09:12 --> 00:09:16
all of the old stuff that we had in the

00:09:14 --> 00:09:19
internet whether it's naming your

00:09:15 --> 00:09:20
service discovery or routing or whatever

00:09:18 --> 00:09:22
we've got an opportunity to bring this

00:09:19 --> 00:09:24
up in kind of a much deeper richer

00:09:21 --> 00:09:26
level which is which is really

00:09:23 --> 00:09:28
cool right so we were going to the

00:09:25 --> 00:09:30
market place where the bazaar away from

00:09:27 --> 00:09:32
the Cathedral which is any any

00:09:29 --> 00:09:34
individual function can be provided by

00:09:31 --> 00:09:37
either an internal or external provider

00:09:33 --> 00:09:38
it could be a cloud service but then the

00:09:36 --> 00:09:41
challenge is now it's up to every

00:09:37 --> 00:09:43
organization to coordinate right and so

00:09:40 --> 00:09:44
what are some lessons that you guys have

00:09:42 --> 00:09:46
learned along the way of picking

00:09:43 --> 00:09:48
best-of-breed and then making sure they

00:09:45 --> 00:09:49
work with each other getting the version

00:09:47 --> 00:09:51
control to work when you've got a

00:09:48 --> 00:09:54
monolithic app everything is in there if

00:09:50 --> 00:09:56
it gets broken into you have all access

00:09:53 --> 00:09:58
its connection to the database lets it

00:09:55 --> 00:10:00
basically say anything to the database

00:09:57 --> 00:10:02
when you break things into micro

00:09:59 --> 00:10:04
services you've got the ability to have

00:10:01 --> 00:10:06
some parts of your system be low low

00:10:03 --> 00:10:09
security risk and other parts be high

00:10:05 --> 00:10:11
security of risk you can innovate really

00:10:08 --> 00:10:13
quickly in areas of sort of

00:10:10 --> 00:10:15
personalization and user experience and

00:10:12 --> 00:10:18
then you have maybe have a much more

00:10:14 --> 00:10:20
tightly controlled thing for say the

00:10:17 --> 00:10:21
signup flow and that way you're storing

00:10:19 --> 00:10:24
personal information so the great news

00:10:20 --> 00:10:26
is you have a lot more agility the price

00:10:23 --> 00:10:29
that you pay is you're doing a lot more

00:10:25 --> 00:10:31
coordination with the monolith it's easy

00:10:28 --> 00:10:33
ou put all your eggs in one basket and

00:10:30 --> 00:10:34
then from a security point of view for

00:10:32 --> 00:10:36
instance you basically just pile a bunch

00:10:33 --> 00:10:38
of appliances in front of it easy right

00:10:35 --> 00:10:40
because it was a monolith he knew

00:10:37 --> 00:10:42
exactly where it was now that the

00:10:39 --> 00:10:43
perimeter is distributed across many

00:10:41 --> 00:10:46
machines you have to be a lot more

00:10:42 --> 00:10:48
mindful of where the attack surface has

00:10:45 --> 00:10:50
gone and which security service you need

00:10:47 --> 00:10:53
to put in front of that part of the

00:10:49 --> 00:10:55
micro-services architecture so that you

00:10:52 --> 00:10:57
can not have the privilege escalation of

00:10:54 --> 00:11:00
because there is a little bit of PCI

00:10:56 --> 00:11:02
compliance needed in one tiny corner of

00:10:59 --> 00:11:04
this monolith the entire monolith is now

00:11:01 --> 00:11:06
subject to PCI compliance and Sox

00:11:03 --> 00:11:07
compliance and all these things and by

00:11:05 --> 00:11:09
splitting it up

00:11:06 --> 00:11:11
two pieces you can have most of your app

00:11:08 --> 00:11:14
be extremely agile and very innovative

00:11:11 --> 00:11:16
and then have the bits that need to be

00:11:13 --> 00:11:18
safe be extremely safe and then if you

00:11:15 --> 00:11:20
look at the attack surface you're

00:11:17 --> 00:11:23
basically keeping a very tight control

00:11:19 --> 00:11:24
over what can do what and if you connect

00:11:22 --> 00:11:26
into the databases you've got very

00:11:23 --> 00:11:28
single purpose connections into the

00:11:25 --> 00:11:30
database that are doing one thing you

00:11:27 --> 00:11:33
can start to control at the access level

00:11:29 --> 00:11:35
there as well what used to be policy

00:11:32 --> 00:11:37
controlled by the operations people what

00:11:34 --> 00:11:39
hey felt was a safe sandbox for the

00:11:36 --> 00:11:41
developers is now really being driven

00:11:38 --> 00:11:42
from the other end down so this idea of

00:11:40 --> 00:11:44
developer driven infrastructure is

00:11:41 --> 00:11:46
omething that is turning things around

00:11:43 --> 00:11:48
and a lot of what I'm seeing is a big

00:11:45 --> 00:11:50
banks and people like that they have

00:11:47 --> 00:11:52
their existing policy frameworks and

00:11:49 --> 00:11:54
rules and they're trying to apply it in

00:11:51 --> 00:11:55
the new world and it looks the same so

00:11:53 --> 00:11:57
they're happy because they're compliant

00:11:54 --> 00:11:59
but they don't actually have the real

00:11:56 --> 00:12:01
policy separation that they used that

00:11:58 --> 00:12:03
hey think they have because it's all

00:12:00 --> 00:12:05
totally reprogrammable and it's like you

00:12:02 --> 00:12:07
have the illusion that you're still

00:12:04 --> 00:12:09
conforming to the to the policy a lot of

00:12:06 --> 00:12:11
these things were ops controlled so the

00:12:08 --> 00:12:13
ops would control the data center and

00:12:10 --> 00:12:17
then the network's in the data center

00:12:12 --> 00:12:19
and now it's all developer defined and

00:12:16 --> 00:12:21
software constructs which are controlled

00:12:18 --> 00:12:23
by your cloud API s but if you're

00:12:20 --> 00:12:25
updating it ten times a day there isn't

00:12:22 --> 00:12:27
ime to have ten meetings a day with

00:12:24 --> 00:12:29
operations to do the handoff so what

00:12:26 --> 00:12:31
we've been seeing is that people just

00:12:28 --> 00:12:33
running it themselves the only person

00:12:30 --> 00:12:34
that knows it's the exact state of the

00:12:32 --> 00:12:36
system is the developer that just

00:12:33 --> 00:12:38
updated it that sounds scary until you

00:12:35 --> 00:12:40
realize that each of them is controlling

00:12:37 --> 00:12:41
a very small piece of the system and the

00:12:39 --> 00:12:43
aggregate behavior of the system turns

00:12:40 --> 00:12:46
out to be really robust and reliable

00:12:42 --> 00:12:47
partly because if you put a developer on

00:12:45 --> 00:12:49
call they write really reliable code and

00:12:46 --> 00:12:51
they don't release code on Friday

00:12:48 --> 00:12:52
afternoons and because they want to

00:12:50 --> 00:12:55
quite weekend and you know they learn a

00:12:51 --> 00:12:56
bunch of practices about having a what

00:12:54 --> 00:12:58
it's like to be on call and help not to

00:12:55 --> 00:13:00
break things so we went from an

00:12:57 --> 00:13:02
in-person Change review board

00:12:59 --> 00:13:05
infrequently right into the vet the

00:13:01 --> 00:13:08
changes to continuous change and Pig

00:13:04 --> 00:13:09
let's coordinate over slack pretty much

00:13:07 --> 00:13:11
yeah you have to tell people what you're

00:13:08 --> 00:13:13
doing but you don't have to typically

00:13:10 --> 00:13:15
ask for permission and go and have

00:13:12 --> 00:13:17
meetings and things like that

00:13:14 --> 00:13:18
his is part of unlocking the innovation

00:13:16 --> 00:13:20
and people are most interested in this

00:13:17 --> 00:13:22
are large teams of people

00:13:19 --> 00:13:25
trying to build complex products

00:13:21 --> 00:13:28
typically enterprises and they are

00:13:24 --> 00:13:30
worried about getting disrupted by the

00:13:27 --> 00:13:32
latest Bay Area startup or whatever

00:13:29 --> 00:13:34
there's an existential threat here that

00:13:31 --> 00:13:36
if you're doing quarterly releases and

00:13:33 --> 00:13:37
your competitors doing daily releases

00:13:35 --> 00:13:39
and continuous delivery you're gonna

00:13:36 --> 00:13:41
fall so far behind in the user

00:13:38 --> 00:13:44
experience that you're just gonna suffer

00:13:40 --> 00:13:46
ight so that's the big driver that is

00:13:43 --> 00:13:47
making people say well how do you get

00:13:45 --> 00:13:49
here there's a whole bunch of things

00:13:47 --> 00:13:53
tied together you're bringing in cloud

00:13:48 --> 00:13:55
DevOps is a whole other area and micro

00:13:52 --> 00:13:57
services as an architecture all these

00:13:54 --> 00:13:59
things tie together and some cultural

00:13:56 --> 00:14:00
change as well in the organization of

00:13:58 --> 00:14:02
the company the companies that are doing

00:13:59 --> 00:14:03
well at that are really starting to

00:14:01 --> 00:14:06
accelerate off into the distance

00:14:02 --> 00:14:08
it's also worth teasing apart to trends

00:14:05 --> 00:14:10
and and and one of these trends is you

00:14:08 --> 00:14:12
know a single company instead of

00:14:09 --> 00:14:13
building a monolithic product wants to

00:14:11 --> 00:14:14
build a micro services product and

00:14:12 --> 00:14:16
they've gates all the efficiencies of

00:14:14 --> 00:14:17
doing that as far as the development

00:14:15 --> 00:14:19
process and the OEM process and

00:14:16 --> 00:14:22
everything else but there's kind of a

00:14:18 --> 00:14:24
broader industry trend where companies

00:14:21 --> 00:14:26
products are basically micro services

00:14:23 --> 00:14:27
right there's companies out there that

00:14:25 --> 00:14:29
like basically the only way to access

00:14:26 --> 00:14:31
the product is through a fairly narrow

00:14:28 --> 00:14:33
API I mean you know there's so many of

00:14:30 --> 00:14:35
these now that there are other startups

00:14:32 --> 00:14:36
that will just basically stitch them

00:14:34 --> 00:14:38
together and you could build full

00:14:35 --> 00:14:40
applications without writing much code

00:14:37 --> 00:14:42
so I think that in addition to a single

00:14:39 --> 00:14:43
company getting a lot of advantages I

00:14:41 --> 00:14:45
think the entire industry is gonna get a

00:14:42 --> 00:14:47
lot of advantages and see a lot of

00:14:44 --> 00:14:49
innovation as a result yeah if you had

00:14:46 --> 00:14:51
said five years ago that there would be

00:14:48 --> 00:14:54
multiple independent public companies

00:14:50 --> 00:14:55
that all they do was offer an API you

00:14:53 --> 00:14:57
would have been left out of the room

00:14:54 --> 00:14:59
right right and now look at us Twilio

00:14:56 --> 00:15:01
and stripe and on and on I like to do

00:14:58 --> 00:15:03
the mental exercise of kind of where

00:15:00 --> 00:15:05
this is all going and I I still loved

00:15:02 --> 00:15:07
Chris Dickson's quote of you know every

00:15:04 --> 00:15:08
UNIX command becomes a company as I crab

00:15:06 --> 00:15:10
ecomes Google or whatever like I think

00:15:07 --> 00:15:11
you know we may be having an analog here

00:15:09 --> 00:15:14
which is every function becomes a

00:15:10 --> 00:15:16
company right more more granular than a

00:15:13 --> 00:15:18
command-line tool every single function

00:15:15 --> 00:15:20
or logical function becomes an

00:15:17 --> 00:15:21
independent company and I do think there

00:15:19 --> 00:15:24
are implications on things like

00:15:20 --> 00:15:25
ownership and dependability and and

00:15:23 --> 00:15:26
stuff like that that we haven't grappled

00:15:24 --> 00:15:28
yet as an industry but it's a very

00:15:25 --> 00:15:31
exciting direction yeah you're able to

00:15:27 --> 00:15:35
build something now that pulls in things

00:15:30 --> 00:15:37
from api's and pulls in some

00:15:34 --> 00:15:38
containers and you just have your little

00:15:36 --> 00:15:39
piece of code in the middle that

00:15:37 --> 00:15:41
stitches it together and build a

00:15:38 --> 00:15:43
completely new service from that so it's

00:15:40 --> 00:15:44
just much easier to get things built

00:15:42 --> 00:15:46
it's more efficient for the big

00:15:43 --> 00:15:49
companies but that's it has democratized

00:15:45 --> 00:15:51
all the way down to pretty much anybody

00:15:48 --> 00:15:53
with a laptop can Co build build

00:15:50 --> 00:15:54
something interesting and if you go back

00:15:52 --> 00:15:55
five or ten years that you're doing

00:15:53 --> 00:15:57
things that would be just totally

00:15:54 --> 00:15:59
impossible to try and get together at

00:15:56 --> 00:16:01
hat point there's much more room for

00:15:58 --> 00:16:03
innovation it also makes it harder to

00:16:00 --> 00:16:05
compete in some ways because now it's

00:16:02 --> 00:16:07
hard to build you know a billion-dollar

00:16:04 --> 00:16:09
software company on top of these things

00:16:06 --> 00:16:12
because they keep changing underneath

00:16:08 --> 00:16:14
you and they're cheap to build so you've

00:16:11 --> 00:16:17
got lots of disruption coming and it's

00:16:13 --> 00:16:19
actually you know github an open source

00:16:16 --> 00:16:22
is another big player in here that's

00:16:18 --> 00:16:24
just bringing making it much lower cost

00:16:21 --> 00:16:26
o get things done so what you're seeing

00:16:23 --> 00:16:29
now is Twitter and Facebook and Netflix

00:16:25 --> 00:16:30
and Google and LinkedIn producing the

00:16:28 --> 00:16:32
stuff you actually want to use which has

00:16:29 --> 00:16:34
already been tested at volume and then

00:16:31 --> 00:16:36
it's actually much harder to build a

00:16:33 --> 00:16:38
proprietary software company because

00:16:35 --> 00:16:39
you're competing with these big

00:16:37 --> 00:16:41
end-users and you've got this thing

00:16:38 --> 00:16:42
you've just built and it's flaky and

00:16:40 --> 00:16:44
oesn't quite work right we've talked

00:16:41 --> 00:16:46
about this it seems like closed-source

00:16:43 --> 00:16:48
shippable software is is on its way out

00:16:45 --> 00:16:49
or dead and there's a number of reasons

00:16:47 --> 00:16:50
for this one of them is just the

00:16:48 --> 00:16:52
nterprise buyer likes open source

00:16:49 --> 00:16:54
software but another one is it's a real

00:16:51 --> 00:16:57
burden on the company to ship software

00:16:53 --> 00:16:58
right I mean especially if that software

00:16:56 --> 00:17:00
is a distributed system right I mean

00:16:57 --> 00:17:02
like you don't have skilled operators

00:16:59 --> 00:17:03
often every environment is different

00:17:01 --> 00:17:04
right so you've got these heterogeneous

00:17:02 --> 00:17:06
deployment environments you end up with

00:17:03 --> 00:17:07
is thing like the mother of all cache

00:17:05 --> 00:17:09
consistency problems we've got a bunch

00:17:06 --> 00:17:11
of versions out there the product we've

00:17:08 --> 00:17:13
got to maintain bunch of versions it's a

00:17:10 --> 00:17:15
human matrix from hell right now the

00:17:12 --> 00:17:18
cubicles of version x the flavors of

00:17:14 --> 00:17:21
unix x whatever Windows versions you're

00:17:17 --> 00:17:22
supporting right or QA manager yeah

00:17:20 --> 00:17:23
that's right and then distributed

00:17:21 --> 00:17:25
systems generally like I mean like a

00:17:22 --> 00:17:27
real trick if you're running your own

00:17:24 --> 00:17:28
operation is you have skilled

00:17:26 --> 00:17:30
administrators that know how to manage a

00:17:27 --> 00:17:32
cluster and then like there are very

00:17:29 --> 00:17:34
few companies and I think maybe one

00:17:31 --> 00:17:36
that's actually managed to ship a

00:17:33 --> 00:17:37
distributed system that was manageable

00:17:35 --> 00:17:40
with a non skilled operator it's a very

00:17:36 --> 00:17:43
difficult problem and so a great

00:17:39 --> 00:17:45
hing about if you offer something as

00:17:42 --> 00:17:47
ervice is like okay you don't have any

00:17:44 --> 00:17:48
of these problems and so like basically

00:17:46 --> 00:17:51
ou're your post

00:17:47 --> 00:17:53
operation budget is way lower it's much

00:17:50 --> 00:17:54
easier to start a company now but at the

00:17:52 --> 00:17:56
same time there are questions about like

00:17:53 --> 00:17:58
okay so like what are the size of these

00:17:55 --> 00:18:00
companies are gonna end up being like I

00:17:57 --> 00:18:01
mean like how big is the market for a

00:17:59 --> 00:18:03
single function I think it's still to be

00:18:00 --> 00:18:05
seen like how big these companies are

00:18:02 --> 00:18:06
gonna are gonna become yeah big

00:18:04 --> 00:18:07
challenge from an investor's point of

00:18:05 --> 00:18:10
view which is if the essential argument

00:18:06 --> 00:18:12
is there will be no more cathedrals it's

00:18:09 --> 00:18:15
all bazaars from here on out it's a

00:18:11 --> 00:18:17
little harder to make money truck and

00:18:14 --> 00:18:19
that's because it's gonna get yeah yeah

00:18:16 --> 00:18:21
so put yourself in the shoes of the

00:18:18 --> 00:18:24
nterprise CIO the pace of change is

00:18:20 --> 00:18:26
accelerating right the ink just dried on

00:18:23 --> 00:18:28
her team getting VMware certified and

00:18:25 --> 00:18:29
now we're on to containers and then

00:18:27 --> 00:18:31
people are talking about server lists

00:18:28 --> 00:18:33
and functions at us as a service with

00:18:30 --> 00:18:35
sort of lambda architecture so talk a

00:18:32 --> 00:18:38
little bit about what's coming and then

00:18:34 --> 00:18:39
the ability of an average organization

00:18:37 --> 00:18:41
to sort of absorb these changes

00:18:38 --> 00:18:43
containers came along really over the

00:18:40 --> 00:18:45
last two years and one of the fastest

00:18:42 --> 00:18:47
akeovers of enterprise computing we've

00:18:44 --> 00:18:49
ver seen it's quite quite remarkable

00:18:46 --> 00:18:51
how quickly they were able to colonize

00:18:48 --> 00:18:53
the enterprise space it solve the real

00:18:50 --> 00:18:55
problem what role did containers play in

00:18:52 --> 00:18:57
moving away from the monoliths to the

00:18:54 --> 00:18:58
micro services architecture what happens

00:18:56 --> 00:19:00
with the containers all that stuff is

00:18:57 --> 00:19:02
packaged into a bundle which has all the

00:18:59 --> 00:19:04
right versions of everything inside it

00:19:01 --> 00:19:06
and you can download it and run it

00:19:03 --> 00:19:08
also abstracts you away from the

00:19:05 --> 00:19:09
particular version of what you're

00:19:07 --> 00:19:11
running on and there's now containers

00:19:08 --> 00:19:13
for Windows as well but originally this

00:19:10 --> 00:19:15
was a Linux based concept you have the

00:19:12 --> 00:19:18
same container format if you want to run

00:19:14 --> 00:19:20
in house or on a public cloud it doesn't

00:19:17 --> 00:19:24
really matter that container can run on

00:19:19 --> 00:19:27
VMware or KVM on OpenStack or on Amazon

00:19:23 --> 00:19:28
or Google or Azure or wherever right

00:19:26 --> 00:19:30
you've just abstract youjizz up up one

00:19:27 --> 00:19:30
level it gives you that kind of

00:19:29 --> 00:19:33
portability

00:19:29 --> 00:19:35
if you think about machines used to sit

00:19:32 --> 00:19:36
at the same IP address for years people

00:19:34 --> 00:19:38
would know a machine they would actually

00:19:35 --> 00:19:41
know the IP address off by heart if they

00:19:37 --> 00:19:44
wanted to do something to it and then

00:19:40 --> 00:19:45
you had VMs came along and other VMs are

00:19:43 --> 00:19:47
more transient and they know this thing

00:19:44 --> 00:19:49
would come and go maybe in new order of

00:19:46 --> 00:19:52
weeks or something but by weekly update

00:19:48 --> 00:19:54
of your VM and then with containers it's

00:19:51 --> 00:19:55
perfectly reasonable half container that

00:19:53 --> 00:19:57
runs for less than a minute you can

00:19:54 --> 00:20:00
create an entire test environment it set

00:19:56 --> 00:20:01
it up run it run your tests you know

00:19:59 --> 00:20:02
automatically test it strip the thing

00:20:00 --> 00:20:05
down

00:20:01 --> 00:20:06
and the the size of the things have got

00:20:04 --> 00:20:09
much smaller if you just take it to its

00:20:05 --> 00:20:11
logical conclusion we basically fire up

00:20:08 --> 00:20:13
effectively a container to run a single

00:20:10 --> 00:20:15
request and have a chicken kicks her out

00:20:12 --> 00:20:17
sit around for about half a second and

00:20:14 --> 00:20:19
then have it go away again and that's

00:20:16 --> 00:20:21
really what the underlying technology

00:20:18 --> 00:20:23
behind AWS lamdaur it's a server

00:20:20 --> 00:20:25
on-demand that just isn't there most of

00:20:22 --> 00:20:27
the time and this is the bleeding edge

00:20:24 --> 00:20:30
right now we have to figure out how to

00:20:26 --> 00:20:32
extract these sort of ghostly flickering

00:20:29 --> 00:20:34
images that are sort of coming into

00:20:31 --> 00:20:36
existence for short periods of time how

00:20:33 --> 00:20:37
do you track what's going on you end up

00:20:35 --> 00:20:39
doing figuring out how to do end-to-end

00:20:36 --> 00:20:41
tracing as the only way you can monitor

00:20:38 --> 00:20:43
things rather than being a special case

00:20:40 --> 00:20:45
like it is now so there's a bunch of

00:20:42 --> 00:20:47
interesting problems here but what's

00:20:44 --> 00:20:50
really been happening is just this trend

00:20:46 --> 00:20:52
to more and more ephemerality and these

00:20:49 --> 00:20:54
xtremely ephemeral systems and then the

00:20:51 --> 00:20:56
charging used to charge by three years

00:20:53 --> 00:20:58
worth of machine and then it became

00:20:55 --> 00:21:00
while you can rent a VM by the hour and

00:20:57 --> 00:21:02
then containers you know that's light

00:20:59 --> 00:21:04
weight lighter weight and now you're

00:21:01 --> 00:21:05
paying by the hundred milliseconds right

00:21:03 --> 00:21:06
it's perfectly reasonable around for

00:21:04 --> 00:21:10
half a second which means that the

00:21:05 --> 00:21:12
set-up time to create that half second

00:21:09 --> 00:21:14
worth of machine needs to be radically

00:21:11 --> 00:21:16
less than half a second and the time

00:21:13 --> 00:21:18
taken to Bill it bill for it needs to be

00:21:15 --> 00:21:21
less than half a second if you remember

00:21:17 --> 00:21:23
the story of SMS the SMS record for is

00:21:20 --> 00:21:25
140 characters the billing record is

00:21:22 --> 00:21:28
much bigger than that it's like a

00:21:24 --> 00:21:30
kilobyte so if you actually take the

00:21:27 --> 00:21:33
telco and rip out all of the billing

00:21:29 --> 00:21:35
stuff for their SMS things you know it's

00:21:32 --> 00:21:36
10th you know it's it would cost a tenth

00:21:34 --> 00:21:38
of the amount to run if they didn't

00:21:35 --> 00:21:40
billed for it right so you get this

00:21:37 --> 00:21:42
effect that the overhead of doing the

00:21:39 --> 00:21:43
thing is actually vastly more than the

00:21:41 --> 00:21:44
thing you're trying to do so that so

00:21:42 --> 00:21:46
there's actually it's a really

00:21:43 --> 00:21:49
interesting challenge is how to create

00:21:45 --> 00:21:52
monitoring and billing and scheduling

00:21:48 --> 00:21:53
systems that work so quickly that you

00:21:51 --> 00:21:56
can afford to build things in tiny

00:21:52 --> 00:21:57
increments our portfolio company 21 is

00:21:55 --> 00:21:59
ort of right in the thick of this right

00:21:56 --> 00:22:01
which is how do you stand up and ad-hoc

00:21:58 --> 00:22:03
agreement between an API and an API and

00:22:00 --> 00:22:05
like have the billing all work and you

00:22:02 --> 00:22:07
know Bitcoin might play a part in that

00:22:04 --> 00:22:09
so also to your question going back to

00:22:06 --> 00:22:11
the CIO I mean it seems to me in general

00:22:08 --> 00:22:12
with disruptive technologies is like the

00:22:10 --> 00:22:14
disruption happens first and then all

00:22:11 --> 00:22:15
the day to ops happens second I mean

00:22:13 --> 00:22:17
what

00:22:14 --> 00:22:19
hat is and I think in this case name of

00:22:16 --> 00:22:21
the disruption is around delaminating

00:22:18 --> 00:22:23
the app and breaking it apart I do think

00:22:20 --> 00:22:25
that CIO should not despair enough steam

00:22:22 --> 00:22:27
should not despair because what happens

00:22:24 --> 00:22:29
very quickly in the vacuum being left

00:22:26 --> 00:22:31
from kind of the you know this this

00:22:28 --> 00:22:34
print on these new technologies is

00:22:30 --> 00:22:35
whole you know ecosystems and whole

00:22:33 --> 00:22:37
industries arise around them to provide

00:22:34 --> 00:22:38
visibility to provide security to

00:22:36 --> 00:22:41
provide ops and we're seeing that now

00:22:37 --> 00:22:43
and so I mean I think that it's quite

00:22:40 --> 00:22:45
possible to decouple the disruption

00:22:42 --> 00:22:47
which is this velocity around

00:22:44 --> 00:22:49
evelopment and then you know the basic

00:22:46 --> 00:22:50
operations and that tooling was

00:22:48 --> 00:22:52
definitely going to happen as well and

00:22:49 --> 00:22:53
understanding that ecosystem an

00:22:51 --> 00:22:54
understanding the players I was very

00:22:52 --> 00:22:57
important if you want to stay on top of

00:22:53 --> 00:22:58
this kind of big change leaning forward

00:22:56 --> 00:23:00
into the change assuming the tooling

00:22:57 --> 00:23:02
will meet you halfway exactly and then

00:22:59 --> 00:23:04
you get the benefit the big benefit from

00:23:01 --> 00:23:06
the CIOs point of view in my opinion is

00:23:03 --> 00:23:08
that you don't have this loop where the

00:23:05 --> 00:23:11
business user asked for something it

00:23:07 --> 00:23:12
ook you 15 months to build it only to

00:23:10 --> 00:23:13
discover that's not what the business

00:23:11 --> 00:23:15
user really wanted because the

00:23:12 --> 00:23:17
requirements are poorly specified in

00:23:14 --> 00:23:19
these days right no problem I've got a

00:23:16 --> 00:23:21
change for you we'll put it live this

00:23:18 --> 00:23:23
afternoon right so the rapid

00:23:20 --> 00:23:25
experimentation that happens in start-up

00:23:22 --> 00:23:27
land can now migrate into the big

00:23:24 --> 00:23:29
organizations and you don't have to get

00:23:26 --> 00:23:30
your requirements perfectly specified at

00:23:28 --> 00:23:32
he beginning of a waterfall process

00:23:29 --> 00:23:34
anymore let's run the experiments it's

00:23:31 --> 00:23:36
actually even better than that what the

00:23:33 --> 00:23:38
CIOs are providing now is a set of API

00:23:35 --> 00:23:40
is for the built for the development

00:23:37 --> 00:23:42
eam that is part of the business to

00:23:39 --> 00:23:44
automatically provision whatever they

00:23:41 --> 00:23:46
want with certain policy constraints

00:23:43 --> 00:23:48
around it for what they can and can't do

00:23:45 --> 00:23:50
but fundamentally you're providing api's

00:23:47 --> 00:23:53
operations has moved from being a ticket

00:23:49 --> 00:23:56
driven organization to be an API they

00:23:52 --> 00:23:58
are now no longer a call center that is

00:23:55 --> 00:24:01
a very profound move and I'm seeing a

00:23:57 --> 00:24:03
lot of these CIOs buying into that they

00:24:00 --> 00:24:04
want to be part of the product they want

00:24:02 --> 00:24:07
o be how do you support the business

00:24:03 --> 00:24:09
and you provide API so that they can

00:24:06 --> 00:24:10
just get business done at a rate that

00:24:08 --> 00:24:12
you're not slowing them down we're

00:24:09 --> 00:24:14
actually seeing the creation of a new

00:24:11 --> 00:24:16
buying center in the industry I've her

00:24:13 --> 00:24:17
to call platform engineering I've heard

00:24:15 --> 00:24:18
it called the DevOps you know whatever

00:24:16 --> 00:24:20
this is like budget allocated it's

00:24:17 --> 00:24:21
actually viewed as a profit Center is

00:24:19 --> 00:24:23
product aligned but its court

00:24:20 --> 00:24:24
infrastructure and operations and these

00:24:22 --> 00:24:27
are very technical buyers so it's not

00:24:23 --> 00:24:29
he traditional enterprise go to market

00:24:26 --> 00:24:31
his is also moving across into

00:24:28 --> 00:24:33
trees we've seen of sea media and

00:24:30 --> 00:24:35
entertainment and to some extent retail

00:24:32 --> 00:24:37
were early movers mostly because of the

00:24:34 --> 00:24:40
threat of Amazon themselves crossing

00:24:36 --> 00:24:42
retailers to step up to reengineering

00:24:39 --> 00:24:44
we're now seeing FinTech fighting their

00:24:41 --> 00:24:46
Wall Street is really paying attention

00:24:43 --> 00:24:47
to some people are way down the road

00:24:45 --> 00:24:49
some people are just starting

00:24:46 --> 00:24:51
manufacturing that whole industry is

00:24:48 --> 00:24:53
just starting to think about this

00:24:50 --> 00:24:55
there's definitely a sort of industry by

00:24:52 --> 00:24:57
industry sort of domino effect as people

00:24:54 --> 00:24:59
are figuring this out so we're a decade

00:24:56 --> 00:25:02
on or so into this revolution right many

00:24:58 --> 00:25:04
strands what excites you now for me

00:25:01 --> 00:25:06
what's really exciting about this I've

00:25:03 --> 00:25:07
said this before is if we just have the

00:25:05 --> 00:25:10
ability to reimagine all of

00:25:06 --> 00:25:12
infrastructure you can now reimagine

00:25:09 --> 00:25:14
tooling and reimagine security and

00:25:11 --> 00:25:17
reimagine operations and management we

00:25:13 --> 00:25:19
get to reimagine it with more semantics

00:25:16 --> 00:25:20
and context than we've ever had you know

00:25:18 --> 00:25:22
so what does it mean to have a firewall

00:25:19 --> 00:25:23
in a world for everything as micro

00:25:21 --> 00:25:25
services what does it mean to have

00:25:22 --> 00:25:27
operation management and debugging

00:25:24 --> 00:25:30
things that were traditional boxes that

00:25:26 --> 00:25:31
were stuck on perimeters now also become

00:25:29 --> 00:25:34
functions and actually managing your

00:25:30 --> 00:25:36
infrastructure is almost like looking at

00:25:33 --> 00:25:38
a debugger a context debugger it's like

00:25:35 --> 00:25:39
you have a symbol table with you it's

00:25:37 --> 00:25:41
like this whole thing is in the one

00:25:38 --> 00:25:43
large IDE and you can do that for your

00:25:40 --> 00:25:45
operations I think it's gonna push the

00:25:42 --> 00:25:47
state-of-the-art on how we even think

00:25:44 --> 00:25:49
about offs in an entirely new areas I'm

00:25:46 --> 00:25:51
really excited about that change I think

00:25:48 --> 00:25:53
that the whole serverless area is the

00:25:50 --> 00:25:55
bleeding edge right now the monitoring

00:25:52 --> 00:25:56
tools industry is right now being

00:25:54 --> 00:25:58
disrupted pretty heavily by serverless

00:25:55 --> 00:26:00
there's only one or two tools that have

00:25:57 --> 00:26:02
really come into existence in the last

00:25:59 --> 00:26:04
year or two that have a effectively a

00:26:01 --> 00:26:06
way of processing stuff that this is

00:26:03 --> 00:26:09
this ephemeral and dynamic so some

00:26:05 --> 00:26:10
interesting products coming out it's

00:26:08 --> 00:26:12
just a better way of living if you're a

00:26:09 --> 00:26:15
developer and you're working in the

00:26:11 --> 00:26:16
waterfall siloed organization it's kind

00:26:14 --> 00:26:18
of soul-destroying

00:26:15 --> 00:26:20
for a lot of people indeed and and when

00:26:17 --> 00:26:22
you get ownership of a product on

00:26:19 --> 00:26:24
distributed teams you get each

00:26:21 --> 00:26:26
distributed team their own product

00:26:23 --> 00:26:29
ownership and they get to define the

00:26:25 --> 00:26:30
interface and manage it and run it yeah

00:26:28 --> 00:26:32
you might be on call but you're a much

00:26:29 --> 00:26:33
more control of your destiny and it's

00:26:31 --> 00:26:35
much more rewarding and it's more

00:26:32 --> 00:26:37
productive and the ability to get more

00:26:34 --> 00:26:39
stuff done as a developer is just

00:26:36 --> 00:26:41
rewarding anyway right it's a better

00:26:38 --> 00:26:42
way of working for people

00:26:40 --> 00:26:44
well that's great well thank you

00:26:41 --> 00:26:48
dream Thank You Martine we'll see a lot

00:26:43 --> 00:26:48
more unfold as the architecture shifts

<!-- YOUTUBE_TRANSCRIPT_END -->
