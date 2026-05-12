---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "mpFp7AH6arE"
title: "a16z Podcast | Why the Datacenter Needs an Operating System"
video_url: "https://www.youtube.com/watch?v=mpFp7AH6arE"
thumbnail_url: "https://i.ytimg.com/vi/mpFp7AH6arE/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=mpFp7AH6arE"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:26:42.000Z"
upload_date: "2019-01-02"
duration_seconds: 1843
duration_human: "30:43"
view_count: 55
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:49:15.553Z"
---

# a16z Podcast | Why the Datacenter Needs an Operating System

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=mpFp7AH6arE
- video_id: mpFp7AH6arE
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:26:42.000Z
- upload_date: 2019-01-02
- duration: 30:43
- view_count: 55
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

What does an operating system for today's datacenter look like? Why do we even need one, and how does it function? Mesosphere's Benjamin Hindman, the co-creator of Apache Mesos, joins Steven Sinofsky for an all-OS discussion.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
good afternoon everybody this is Steven

00:00:02 --> 00:00:09
Sinofsky here with the a16 Z podcast

00:00:05 --> 00:00:11
very excited today to have Benjamin

00:00:08 --> 00:00:14
Hyneman of mrs. fear here today and

00:00:10 --> 00:00:15
we're gonna talk about a new concept

00:00:13 --> 00:00:17
hat the company's coming out with

00:00:14 --> 00:00:19
called the data center operating system

00:00:16 --> 00:00:21
or DCOs

00:00:18 --> 00:00:24
you know today you know you know apps

00:00:20 --> 00:00:27
they span servers there are things like

00:00:23 --> 00:00:30
Kafka and spark and MapReduce Cassandra

00:00:26 --> 00:00:32
that's super super complex to roll out

00:00:29 --> 00:00:34
hese these huge systems in fact the

00:00:31 --> 00:00:35
real challenge of just allocating

00:00:33 --> 00:00:38
resources and figuring things out

00:00:34 --> 00:00:41
reminds me personally of the very early

00:00:37 --> 00:00:43
days of computing when when programmers

00:00:40 --> 00:00:45
were responsible for allocating the

00:00:42 --> 00:00:47
resources of a machine you know if you

00:00:44 --> 00:00:49
wanted to file you sort of wrote your

00:00:46 --> 00:00:51
own file system if you wanted a process

00:00:48 --> 00:00:54
you had to figure out which part of the

00:00:50 --> 00:00:56
CPU to save and store and load and you

00:00:53 --> 00:00:57
know great programmers back in those

00:00:55 --> 00:01:00
days which really weren't as long ago as

00:00:56 --> 00:01:03
people seem to think knew how to squeeze

00:00:59 --> 00:01:05
the most out of a computer by being able

00:01:02 --> 00:01:08
to manually allocate resources you know

00:01:04 --> 00:01:09
my old boss Bill Gates was famous for

00:01:07 --> 00:01:12
how many things he could squeeze into an

00:01:08 --> 00:01:15
8-bit byte of basic you know over the

00:01:11 --> 00:01:17
weekend and it's very very important

00:01:14 --> 00:01:19
back then to do that and it the problem

00:01:16 --> 00:01:21
was if you were really good at it your

00:01:18 --> 00:01:24
code became completely unmanageable and

00:01:20 --> 00:01:26
hard to deal with and that turns out to

00:01:23 --> 00:01:28
be a little bit of what's going on today

00:01:25 --> 00:01:31
and in the data center except I think

00:01:27 --> 00:01:33
it's a little bit of the opposite today

00:01:30 --> 00:01:34
ou know an enterprise of the big data

00:01:32 --> 00:01:36
center is taking the opposite approach

00:01:33 --> 00:01:39
which is let's just keep buying more and

00:01:35 --> 00:01:40
more resources and use them for special

00:01:38 --> 00:01:43
purposes so I don't have to think hard

00:01:39 --> 00:01:45
about packing more bits into a byte so

00:01:42 --> 00:01:47
to speak and so there's more servers and

00:01:44 --> 00:01:48
more complexity and more VMs you know

00:01:46 --> 00:01:51
you're in this world of like it's

00:01:47 --> 00:01:53
basically one app per server one app per

00:01:50 --> 00:01:55
VM and you know what the problem is

00:01:52 --> 00:01:58
that's simpler but not simple to manage

00:01:54 --> 00:02:01
but it leads to this unbelievable waste

00:01:57 --> 00:02:03
and waste in a data center is is a big

00:02:00 --> 00:02:06
mess eighty-five percent of the

00:02:02 --> 00:02:08
resources go unused and and I think to

00:02:05 --> 00:02:11
me that's where where the data center

00:02:07 --> 00:02:13
operating system really comes in and so

00:02:10 --> 00:02:16
I think that

00:02:12 --> 00:02:18
do is just sort of talk about this well

00:02:15 --> 00:02:20
we call it the D cos which is weird cuz

00:02:17 --> 00:02:22
data center is is one word so it really

00:02:19 --> 00:02:24
should be dass but that would take this

00:02:21 --> 00:02:27
podcast a whole different level and I

00:02:23 --> 00:02:28
don't think you know if we think about

00:02:26 --> 00:02:31
raditional operating system as

00:02:27 --> 00:02:33
allocating the CPU and the memory and

00:02:30 --> 00:02:37
the disk in the network all for a single

00:02:32 --> 00:02:39
computer what what is the been what's

00:02:36 --> 00:02:42
the D cos yeah yeah great

00:02:38 --> 00:02:45
so so the data center operating system

00:02:41 --> 00:02:46
consists of a bunch of components and

00:02:44 --> 00:02:48
when you really think about an operating

00:02:45 --> 00:02:50
system it itself consists of a bunch of

00:02:47 --> 00:02:52
components in fact operating systems

00:02:49 --> 00:02:54
have evolved over the years we've had

00:02:51 --> 00:02:57
you know monolithic operating system

00:02:53 --> 00:03:01
Microsoft service based based based

00:02:56 --> 00:03:04
operating systems and what we've really

00:03:00 --> 00:03:05
done with with Mesa spheres data center

00:03:03 --> 00:03:08
operating system is we've created

00:03:04 --> 00:03:11
something that's more like a microkernel

00:03:07 --> 00:03:12
ike operating system where at the core

00:03:10 --> 00:03:15
of it is this open source project that

00:03:11 --> 00:03:16
we have called Apache mesos and it's

00:03:14 --> 00:03:18
what's being used at a bunch of

00:03:15 --> 00:03:20
companies like Twitter and and Airbnb

00:03:17 --> 00:03:22
and other companies to actually run run

00:03:19 --> 00:03:23
their infrastructure and then a lot

00:03:21 --> 00:03:25
of the other what we're calling data

00:03:22 --> 00:03:27
center services which are these these

00:03:24 --> 00:03:29
software frameworks which run on

00:03:26 --> 00:03:30
top of miso scanned and can take

00:03:28 --> 00:03:32
advantage of may suppose to actually

00:03:29 --> 00:03:35
execute the computations that you want

00:03:31 --> 00:03:39
o do things like Kafka and HDFS and

00:03:34 --> 00:03:41
Hadoop and Cassandra and those

00:03:38 --> 00:03:44
components really make up the core parts

00:03:40 --> 00:03:45
of what makes data center operating

00:03:43 --> 00:03:47
system so you can really think about the

00:03:44 --> 00:03:49
base level is the kernel which is which

00:03:46 --> 00:03:51
is may so it's just like a kernel in an

00:03:48 --> 00:03:54
operating system and then things like

00:03:50 --> 00:03:56
storage something like HDFS which

00:03:53 --> 00:03:59
leverages the kernel meso stew actually

00:03:55 --> 00:04:01
provide its storage and then

00:03:58 --> 00:04:04
these these data center services that I

00:04:00 --> 00:04:06
mentioned and and then a really really

00:04:03 --> 00:04:10
key one for us is what we call our

00:04:05 --> 00:04:17
distributed in it D and that's that's a

00:04:09 --> 00:04:21
Linux and not Windows that's true yeah

00:04:16 --> 00:04:22
and are distributed in it D is

00:04:20 --> 00:04:25
what we ship is something called

00:04:21 --> 00:04:26
marathon but there's alternatives to

00:04:24 --> 00:04:28
that just like in fact in the Linux

00:04:25 --> 00:04:30
world today there's alternatives to n8du

00:04:27 --> 00:04:32
a system D you've got a bunch of

00:04:29 --> 00:04:35
different and it D alternatives kind of

00:04:31 --> 00:04:37
like on the on your operating system

00:04:34 --> 00:04:42
today you have many alternative browsers

00:04:36 --> 00:04:46
Internet Explorer Chrome Firefox but we

00:04:41 --> 00:04:47
we use marathon and and that's kind

00:04:45 --> 00:04:48
of that's that that's the core of how

00:04:46 --> 00:04:49
you end up running a lot of your tasks

00:04:47 --> 00:04:51
because that's that's your your init

00:04:48 --> 00:04:55
system where you describe all your tasks

00:04:50 --> 00:04:56
and then of course to interact with your

00:04:54 --> 00:04:58
operating system you need some kind of

00:04:55 --> 00:04:59
interface what about going back just

00:04:57 --> 00:05:01
before we jump into the interface tell

00:04:58 --> 00:05:03
me like you know when I think about what

00:05:00 --> 00:05:04
an operating system needs to do one of

00:05:02 --> 00:05:06
the things that needs to do is it needs

00:05:03 --> 00:05:11
to like schedule things so they schedule

00:05:05 --> 00:05:12
or yeah yeah so the kernel may so the

00:05:10 --> 00:05:15
core primitives that it really provides

00:05:11 --> 00:05:17
is task management a process management

00:05:14 --> 00:05:19
but task management resource allocation

00:05:16 --> 00:05:22
resource isolation the things the things

00:05:18 --> 00:05:24
you'd expect to get from something that

00:05:21 --> 00:05:25
needs to run multi-tenant lots of

00:05:23 --> 00:05:27
applications at the same time

00:05:24 --> 00:05:28
what's your between a task then in a

00:05:26 --> 00:05:31
process great yeah

00:05:27 --> 00:05:35
so we chose tasks because we didn't want

00:05:30 --> 00:05:37
o overload the the process nomenclature

00:05:34 --> 00:05:39
and a task is just it's the entity that

00:05:36 --> 00:05:42
we use to describe something that we

00:05:38 --> 00:05:44
have launched on some host in the data

00:05:41 --> 00:05:46
center and so it could be a process it

00:05:43 --> 00:05:48
could be a collection of processes but

00:05:45 --> 00:05:49
it's the thing it's the unit that we use

00:05:47 --> 00:05:51
to actually schedule it's the thing that

00:05:48 --> 00:05:54
consumes resources really at the end of

00:05:50 --> 00:05:56
the day so so I have a conceptual

00:05:53 --> 00:05:58
understanding of like a level of

00:05:55 --> 00:06:00
services but how does it actually work

00:05:57 --> 00:06:02
like how do i how do I get all of this

00:05:59 --> 00:06:04
onto a machine on to a data center

00:06:01 --> 00:06:06
what's the what's the mechanism that

00:06:03 --> 00:06:10
everybody's connected up yeah yeah so

00:06:05 --> 00:06:12
it's the bus yeah yeah yeah so so the

00:06:09 --> 00:06:13
way it works is that using one of these

00:06:11 --> 00:06:15
data center services we talked about

00:06:12 --> 00:06:17
hat consists of the entire operating

00:06:14 --> 00:06:20
system something like marathon prefer

00:06:16 --> 00:06:21
for running your tasks you would

00:06:19 --> 00:06:22
interface through a marathon you would

00:06:20 --> 00:06:24
ask marathon you'd say hey marathon

00:06:21 --> 00:06:26
launched this task just like you would

00:06:23 --> 00:06:29
tell in addy on Linux hey run this task

00:06:25 --> 00:06:32
when when when you boot up and then what

00:06:28 --> 00:06:34
it does is it uses what we really think

00:06:31 --> 00:06:36
of as kind of a system call interface

00:06:33 --> 00:06:39
Maye sews to get resources allocated to

00:06:35 --> 00:06:41
it and then launch a task so so it says

00:06:38 --> 00:06:42
to me says hey I'd like to run this I'd

00:06:40 --> 00:06:44
like to run a task I need these

00:06:41 --> 00:06:46
resources to get the resources allocated

00:06:43 --> 00:06:47
to it and then it launches the task and

00:06:45 --> 00:06:49
then meso said that that period takes it

00:06:46 --> 00:06:51
akes care of making sure that it gets

00:06:48 --> 00:06:54
the tasks to the right machine the right

00:06:50 --> 00:06:56
host launches the task monitors it

00:06:53 --> 00:06:57
isolates it when it fails it tells the

00:06:55 --> 00:06:59
system that it's failed so it can either

00:06:56 --> 00:07:01
be relaunched whatever it needs to

00:06:58 --> 00:07:03
happen and so that the communication

00:07:00 --> 00:07:05
really is between one of these data

00:07:02 --> 00:07:07
center services like marathon that's

00:07:04 --> 00:07:08
running on top of may sauce and may

00:07:06 --> 00:07:11
sauce which is really providing kind of

00:07:07 --> 00:07:14
this system call the system call API and

00:07:10 --> 00:07:15
when you think about it this is one of

00:07:13 --> 00:07:18
the interesting things about Mei sauce

00:07:14 --> 00:07:20
itself it really is much more like a

00:07:17 --> 00:07:23
kernel anyway you know if you download

00:07:19 --> 00:07:24
meso by itself today it's not really

00:07:22 --> 00:07:25
much you can do with it just like if

00:07:23 --> 00:07:27
you're telling like the Linux kernel I

00:07:24 --> 00:07:28
sell today right great now I got the

00:07:26 --> 00:07:30
kernel what I do I'm not gonna program

00:07:27 --> 00:07:33
code which is gonna do interrupt a tea

00:07:29 --> 00:07:34
so you know do a system call you're

00:07:32 --> 00:07:36
going to use something at a higher level

00:07:33 --> 00:07:39
you're gonna say say bash at a higher

00:07:35 --> 00:07:40
level to launch tasks we're gonna use

00:07:38 --> 00:07:42
some kind of window manager at a higher

00:07:39 --> 00:07:44
level and that's exactly what something

00:07:41 --> 00:07:47
like marathon is provided on top of my

00:07:43 --> 00:07:49
sauce today so so first how do all of

00:07:46 --> 00:07:51
the you know I think of datacenter I

00:07:48 --> 00:07:55
think a rack and I think of all these

00:07:50 --> 00:07:57
boxes how does how does Mises know that

00:07:54 --> 00:07:59
he boxes are part of its resource pool

00:07:56 --> 00:08:02
yeah what's connects them all yeah so on

00:07:59 --> 00:08:05
each individual machine we run an agent

00:08:01 --> 00:08:07
process and and so that process could

00:08:04 --> 00:08:08
be launched either via a system

00:08:06 --> 00:08:11
image that you would use one of our

00:08:07 --> 00:08:12
system images or if you are using some

00:08:10 --> 00:08:14
more traditional configuration

00:08:11 --> 00:08:16
management software you could use that

00:08:13 --> 00:08:18
o set up here to set up all your

00:08:15 --> 00:08:21
individual machines physical or virtual

00:08:17 --> 00:08:23
and then they all communicate back

00:08:20 --> 00:08:27
through the the mesas master as we call

00:08:22 --> 00:08:29
it the sort of the brain of Mesa which

00:08:26 --> 00:08:30
is responsible for managing all these

00:08:28 --> 00:08:33
machines that have connected through

00:08:29 --> 00:08:35
their agents and then the bus is

00:08:32 --> 00:08:38
basically between those machines and the

00:08:34 --> 00:08:42
Masters themselves cool so then so now

00:08:37 --> 00:08:44
I'm sitting in front of the machine yeah

00:08:41 --> 00:08:47
or of the the cluster or whatever and

00:08:44 --> 00:08:49
how do I know I'm running it like

00:08:46 --> 00:08:51
there you mentioned command line so like

00:08:48 --> 00:08:53
that I'm sort of in my head I have this

00:08:50 --> 00:08:55
now the data center is now like one one

00:08:52 --> 00:08:58
big computer yep and so well I want to

00:08:54 --> 00:09:00
tell it to do something yep what do I do

00:08:57 --> 00:09:02
yeah so so the interface really the

00:09:00 --> 00:09:05
first interface that we've provided is a

00:09:01 --> 00:09:06
command-line interface and so we did

00:09:04 --> 00:09:11
this for a bunch of reasons

00:09:05 --> 00:09:14
o not a card reader okay oh yeah we

00:09:10 --> 00:09:16
made it pluggable we can make that

00:09:13 --> 00:09:17
interface as well but not that it made a

00:09:15 --> 00:09:19
lot of sense for us to actually make

00:09:16 --> 00:09:22
this be really the first interface - or

00:09:18 --> 00:09:24
- to the to the to the DCOs

00:09:21 --> 00:09:26
and and so what you can do is is you can

00:09:23 --> 00:09:29
actually type from from from a terminal

00:09:25 --> 00:09:30
you can type DCOs space and then one of

00:09:28 --> 00:09:31
these data center services that I was I

00:09:29 --> 00:09:32
was mentioning something like marathon

00:09:30 --> 00:09:34
you can say marathon and then you can

00:09:31 --> 00:09:37
give it some information to run a task

00:09:33 --> 00:09:38
you can say like DCOs marathon run and

00:09:36 --> 00:09:40
then the command you want to run and

00:09:37 --> 00:09:41
maybe some extra flag information to

00:09:39 --> 00:09:43
describe how it gets its its artifacts

00:09:40 --> 00:09:45
its you know it's its resources to run

00:09:42 --> 00:09:47
and then you do that and it starts

00:09:44 --> 00:09:49
running and so of course what does that

00:09:46 --> 00:09:50
mean it starts running well it could

00:09:48 --> 00:09:51
mean that you could go to some web

00:09:49 --> 00:09:55
rowser if the task that you launched

00:09:50 --> 00:09:56
happen to be a web server but of course

00:09:54 --> 00:09:57
you can also do something with a CLI

00:09:55 --> 00:09:59
which is DCOs

00:09:56 --> 00:10:01
PS so you can actually see all the

00:09:58 --> 00:10:03
processes that are running all the tasks

00:10:00 --> 00:10:04
you have running so all the processes

00:10:02 --> 00:10:06
were all the tasks all the tasks yes

00:10:03 --> 00:10:08
right tasks you've immediately like I'm

00:10:05 --> 00:10:11
kind of done with processes yeah so now

00:10:07 --> 00:10:14
I'm looking at a task might be spanning

00:10:10 --> 00:10:16
resource yes yeah so in the the the CLI

00:10:13 --> 00:10:19
today what we have is just just all the

00:10:15 --> 00:10:21
tasks but as we evolved the CLI we'll be

00:10:18 --> 00:10:23
able to drill down so you can see for

00:10:20 --> 00:10:25
this tasks what processes represent

00:10:22 --> 00:10:28
hose tasks for those processes what

00:10:24 --> 00:10:29
hreads and those processes so you'll go

00:10:27 --> 00:10:31
to see all the resources are actually

00:10:28 --> 00:10:34
being consumed to define because of all

00:10:30 --> 00:10:36
even even in the best cases of single

00:10:33 --> 00:10:38
machine computing at some point for

00:10:35 --> 00:10:41
diagnostics or performance or something

00:10:37 --> 00:10:42
you're gonna actually have to know how

00:10:40 --> 00:10:44
things are done my staff so the fact

00:10:41 --> 00:10:47
hat you're using these abstractions

00:10:43 --> 00:10:49
doesn't prohibit a DevOps person from

00:10:46 --> 00:10:49
really knowing what's going on that's

00:10:48 --> 00:10:51
exactly right

00:10:48 --> 00:10:53
yep and that's that's just the same

00:10:50 --> 00:10:55
today where you know if you just type PS

00:10:52 --> 00:10:56
on say Linux box you just do just see

00:10:54 --> 00:10:58
the processes but if you want you can

00:10:55 --> 00:10:59
really dive in and you can say show me

00:10:57 --> 00:11:03
all the threads for those

00:10:58 --> 00:11:06
so okay so so you sort of describe how I

00:11:02 --> 00:11:09
get a something going like is that do I

00:11:05 --> 00:11:10
install software on it what what do I

00:11:08 --> 00:11:13
think of is like where does where does

00:11:09 --> 00:11:16
the tasks come from yeah yeah so once

00:11:12 --> 00:11:17
once the Mesa sphere DCOs

00:11:15 --> 00:11:21
oftware's really installed everywhere

00:11:16 --> 00:11:24
and you want to run other tasks we have

00:11:20 --> 00:11:27
built a repository a registry like

00:11:23 --> 00:11:29
system that allows you to to describe a

00:11:26 --> 00:11:32
task and just kind of like homebrew or

00:11:28 --> 00:11:34
like the the package managers out there

00:11:31 --> 00:11:35
you can say hey I want to install one of

00:11:33 --> 00:11:37
these one of these frameworks one of

00:11:34 --> 00:11:39
these services you can do that it'll

00:11:36 --> 00:11:41
pull down from a repository the

00:11:38 --> 00:11:42
necessary bits of information you can

00:11:40 --> 00:11:44
have it either get installed on the

00:11:41 --> 00:11:46
distributed file system you might have

00:11:43 --> 00:11:48
running something like HDFS or Ceph

00:11:45 --> 00:11:53
which again is is something that's

00:11:47 --> 00:11:54
running on top of the the DC OS and so

00:11:52 --> 00:11:56
you know you can point to where it is

00:11:53 --> 00:11:58
and then you can say hey my init.d you

00:11:55 --> 00:11:59
know my service scheduler go ahead and

00:11:57 --> 00:12:01
now run this service pull it from this

00:11:58 --> 00:12:02
location so you have the bits and go

00:12:00 --> 00:12:04
from there just so folks can have a

00:12:01 --> 00:12:06
clearer view like give me what are some

00:12:03 --> 00:12:08
specific examples of services that

00:12:05 --> 00:12:09
you're that come to mind or tasks that

00:12:07 --> 00:12:12
you would yeah I would really think yeah

00:12:08 --> 00:12:15
so making it really concrete yeah yeah

00:12:11 --> 00:12:18
so at a company like Twitter which

00:12:14 --> 00:12:20
is a big user of of may sews the they've

00:12:17 --> 00:12:22
basically decomposed their architecture

00:12:19 --> 00:12:24
from this monolithic architecture and a

00:12:21 --> 00:12:25
bunch of small services and each of

00:12:23 --> 00:12:28
those individual apps each of those

00:12:24 --> 00:12:31
individual services which is say when a

00:12:27 --> 00:12:36
tweet comes in it's sending out a you

00:12:30 --> 00:12:36
know post to an SMS or it's us you know

00:12:36 --> 00:12:40
hydrating the tweet for other people's

00:12:38 --> 00:12:41
timelines so they so that other people

00:12:39 --> 00:12:43
can see that this tweet has come din

00:12:40 --> 00:12:45
because it should show up each of these

00:12:42 --> 00:12:46
individual services would be the kind of

00:12:44 --> 00:12:48
task and app that you might want to run

00:12:45 --> 00:12:50
and so you could just say to the DCOs

00:12:47 --> 00:12:52
hey I want to run this this this

00:12:49 --> 00:12:53
application I don't care you know where

00:12:51 --> 00:12:54
I want to run it just here's the

00:12:52 --> 00:12:57
information here's the binary needs to

00:12:53 --> 00:13:00
run go your big computer run this some

00:12:56 --> 00:13:02
really big computer so so one of the

00:12:59 --> 00:13:04
things that jumps to mind is is that you

00:13:01 --> 00:13:06
know when I think of an OS I think not

00:13:03 --> 00:13:07
just of like the resource management but

00:13:05 --> 00:13:09
it also provides

00:13:06 --> 00:13:10
conceptual models for really important

00:13:08 --> 00:13:12
hings like one that jumps to mind is

00:13:09 --> 00:13:14
ecurity and

00:13:11 --> 00:13:16
any time you start telling me like hell

00:13:13 --> 00:13:18
by the way codes running anywhere I

00:13:15 --> 00:13:20
start to worry like well if code is

00:13:17 --> 00:13:21
anywhere and I don't know where it is

00:13:19 --> 00:13:23
doesn't that make me vulnerable in

00:13:20 --> 00:13:25
places that I'm not predicting great so

00:13:22 --> 00:13:26
tell me a little bit about how like

00:13:24 --> 00:13:29
something like like isolation or I think

00:13:25 --> 00:13:31
of security and a DCOs model yeah so you

00:13:28 --> 00:13:33
know I think this is a really

00:13:30 --> 00:13:34
interesting topic because what tends to

00:13:32 --> 00:13:36
happen a lot of these organizations when

00:13:33 --> 00:13:37
there isn't some centralized way and

00:13:35 --> 00:13:39
people are thinking about how they want

00:13:36 --> 00:13:43
o do resource management and run their

00:13:38 --> 00:13:45
applications is you get a bunch of

00:13:42 --> 00:13:47
disaggregated you know everyone's doing

00:13:44 --> 00:13:49
it slightly differently yeah so often

00:13:46 --> 00:13:50
times you have worse security because

00:13:48 --> 00:13:52
you know rather than a security team

00:13:49 --> 00:13:53
being able to audit just the one way in

00:13:51 --> 00:13:55
which everything gets to run they have

00:13:52 --> 00:13:56
to audit a whole bunch of different

00:13:54 --> 00:13:58
processes and some people get a little

00:13:55 --> 00:14:00
bit differently and then the worst part

00:13:57 --> 00:14:02
about that is they can't compose right

00:13:59 --> 00:14:04
and this to me is is one of the the

00:14:01 --> 00:14:07
fundamental issues I have with a lot of

00:14:03 --> 00:14:08
distributed systems is because people

00:14:06 --> 00:14:11
are building distribute systems in such

00:14:07 --> 00:14:12
a in such a personalized way and are

00:14:10 --> 00:14:14
personalized for their organization or

00:14:11 --> 00:14:15
their company you can't you can't easily

00:14:13 --> 00:14:17
build a distributed system in one

00:14:14 --> 00:14:19
organization and move it to another

00:14:16 --> 00:14:20
organization and right and security is a

00:14:18 --> 00:14:22
perfect example that you know one

00:14:19 --> 00:14:24
organization uses LDAP so the first way

00:14:21 --> 00:14:25
that they build it in is it hooks into

00:14:23 --> 00:14:27
LDAP and it's so ingrained that they're

00:14:24 --> 00:14:29
gonna do LDAP and another organization

00:14:26 --> 00:14:33
doesn't use LDAP they use some other

00:14:28 --> 00:14:35
mechanisms of authentication or identity

00:14:32 --> 00:14:37
earlier yes like I you always see this

00:14:34 --> 00:14:39
like with like come with when you have a

00:14:36 --> 00:14:40
big giant web presence you have the

00:14:38 --> 00:14:42
company that operates the web server

00:14:39 --> 00:14:44
part yeah and then they went and did

00:14:41 --> 00:14:46
analytics and a completely different

00:14:43 --> 00:14:48
sort of stack yeah and they're figuring

00:14:45 --> 00:14:49
out how to get the access to the logs to

00:14:47 --> 00:14:51
do the analysis yeah

00:14:48 --> 00:14:54
and then no one can either do both do

00:14:50 --> 00:14:56
audit both exactly exactly so I mean

00:14:53 --> 00:14:58
this is one of the biggest drivers of

00:14:55 --> 00:15:00
why we are we're trying to build why

00:14:57 --> 00:15:01
we're building a data center operating

00:14:59 --> 00:15:02
system is because I think in the day

00:15:00 --> 00:15:04
somebody should be able to build an

00:15:01 --> 00:15:06
application against the primitives like

00:15:03 --> 00:15:07
security primitives that could be

00:15:05 --> 00:15:09
provided by it by a data center

00:15:06 --> 00:15:12
operating system and go and run it in

00:15:08 --> 00:15:14
another organization because it's just

00:15:11 --> 00:15:15
an app that you built and you know it

00:15:13 --> 00:15:16
was very interesting at the beginning of

00:15:14 --> 00:15:18
the podcast when you were talking about

00:15:15 --> 00:15:21
he people that wrote the you know the

00:15:17 --> 00:15:22
hardcore applications that that's the

00:15:20 --> 00:15:24
case with distribute systems today so

00:15:21 --> 00:15:26
you know we choake have to have a PhD to

00:15:23 --> 00:15:28
write a distributed system

00:15:25 --> 00:15:30
any PhDs came about showing you how to

00:15:27 --> 00:15:32
write disputes and they went and built

00:15:29 --> 00:15:34
hem yeah that's right and and and but

00:15:31 --> 00:15:36
we're at the point now where everyone is

00:15:33 --> 00:15:38
basically building a distributed system

00:15:35 --> 00:15:39
they don't all have PhDs and we want to

00:15:37 --> 00:15:41
be able to build those distribute

00:15:38 --> 00:15:43
systems in one organization run them in

00:15:40 --> 00:15:45
another organization I'm going to do

00:15:42 --> 00:15:46
that in a really really efficient manner

00:15:44 --> 00:15:48
and and and and that like security is a

00:15:45 --> 00:15:51
perfect example of something that if we

00:15:47 --> 00:15:53
can provide the interfaces for doing

00:15:50 --> 00:15:54
security and our distributed systems and

00:15:52 --> 00:15:56
people can build against those

00:15:53 --> 00:15:59
interfaces then we can easily move our

00:15:55 --> 00:16:01
applications across across organizations

00:15:58 --> 00:16:03
o so speed building on the applications

00:16:00 --> 00:16:05
part like one of the the things that

00:16:02 --> 00:16:07
obviously has a huge amount of attention

00:16:04 --> 00:16:09
and excitement right now whether it's

00:16:06 --> 00:16:10
from docker or Core OS is just the

00:16:08 --> 00:16:12
notion of containers yeah so in

00:16:09 --> 00:16:15
listening to you I'm sort of trying to

00:16:11 --> 00:16:18
parse in my head like do i no longer

00:16:14 --> 00:16:20
need containers are you gonna provide a

00:16:17 --> 00:16:21
container that i have to use am i gonna

00:16:19 --> 00:16:22
be able to use containers that i've

00:16:20 --> 00:16:24
already created

00:16:21 --> 00:16:28
where did containers fit in on your

00:16:23 --> 00:16:31
stack yeah that's a great question so um

00:16:27 --> 00:16:33
so meso says use containerization

00:16:30 --> 00:16:35
technologies what we've used to underpin

00:16:32 --> 00:16:37
the mesosphere DCOs

00:16:34 --> 00:16:40
has used containerization technologies

00:16:36 --> 00:16:42
for a long time since 2009 in fact in

00:16:39 --> 00:16:44
2009 we even had Solaris zones support

00:16:41 --> 00:16:46
so we had containerization technologies

00:16:43 --> 00:16:48
o from from from from even even outside

00:16:45 --> 00:16:50
of linux and we've provided that

00:16:47 --> 00:16:51
containerization technology and will

00:16:49 --> 00:16:54
continue to do so so with when people

00:16:51 --> 00:16:56
have created have have used the existing

00:16:53 --> 00:16:58
containers containerization technology

00:16:55 --> 00:16:59
to build new things like docker on top

00:16:57 --> 00:17:01
that's been something that we've been

00:16:58 --> 00:17:03
able to integrate with very very easily

00:17:00 --> 00:17:05
so if you're creating docker images this

00:17:02 --> 00:17:07
a fantastic thing you can give us you

00:17:04 --> 00:17:08
can give it directly to us we can launch

00:17:06 --> 00:17:09
those those those docker

00:17:07 --> 00:17:11
images directly using our

00:17:08 --> 00:17:13
containerization technology and as this

00:17:10 --> 00:17:16
tuff evolves as other companies

00:17:12 --> 00:17:19
introduce new image like formats to

00:17:15 --> 00:17:20
describe the bits you need to run your

00:17:18 --> 00:17:24
containers again this is just going to

00:17:19 --> 00:17:25
be something that we can plug in to our

00:17:23 --> 00:17:27
data center operating system you just

00:17:24 --> 00:17:29
give us bits and we'll run those bits

00:17:26 --> 00:17:34
and if those bits happen to be a docker

00:17:28 --> 00:17:36
cat a docker image or a rocket

00:17:33 --> 00:17:37
app container specification we'll take

00:17:35 --> 00:17:39
those things and we can actually run

00:17:36 --> 00:17:40
them and so but the benefit is of course

00:17:38 --> 00:17:42
so first you can go create your

00:17:39 --> 00:17:44
container however you want to go create

00:17:41 --> 00:17:46
it and then the neat thing is you were

00:17:43 --> 00:17:47
able to deploy it in in a in a

00:17:45 --> 00:17:49
distributed way like where you don't

00:17:46 --> 00:17:50
where you're scaling in a highly

00:17:48 --> 00:17:52
efficient way without really realizing

00:17:49 --> 00:17:54
it yeah and when there are failures they

00:17:51 --> 00:17:56
get rescheduled when and when when when

00:17:53 --> 00:17:58
we want to do even smarter things like

00:17:55 --> 00:18:00
oversubscription because we want to we

00:17:57 --> 00:18:04
want to move that 85 percent unused

00:17:59 --> 00:18:06
resources to say 10% unused resources we

00:18:03 --> 00:18:07
can start to do all that just like an

00:18:05 --> 00:18:10
operating system does for you under the

00:18:06 --> 00:18:11
covers today on set your laptop and you

00:18:09 --> 00:18:13
just gave us you know the binary that we

00:18:10 --> 00:18:15
need to run whether it's a container

00:18:12 --> 00:18:17
image or whether it's or whether it's a

00:18:14 --> 00:18:20
you know some some real binary well so

00:18:16 --> 00:18:22
if I want to take a step back because to

00:18:19 --> 00:18:23
me this is what's so fascinating is that

00:18:21 --> 00:18:25
what you're really doing is just

00:18:22 --> 00:18:27
changing what I view is the abstractions

00:18:24 --> 00:18:29
of an operating system and you're you're

00:18:26 --> 00:18:31
basically directly or by

00:18:28 --> 00:18:33
implication saying wow you know the

00:18:30 --> 00:18:34
abstractions that people deal with like

00:18:32 --> 00:18:36
the notion of having a virtual machine

00:18:33 --> 00:18:39
is just completely wrong and that we

00:18:35 --> 00:18:41
really need a new set of abstractions

00:18:38 --> 00:18:43
and to me what this feels like is is

00:18:40 --> 00:18:45
when virtual memory came out the

00:18:42 --> 00:18:47
abstraction just you blew your mind

00:18:44 --> 00:18:49
because you went from like I literally

00:18:46 --> 00:18:52
personally went from like figuring out

00:18:48 --> 00:18:54
where to put stuff in 640 K of memory to

00:18:51 --> 00:18:56
having having two gigabytes of memory

00:18:53 --> 00:18:57
eah and and not only that but the

00:18:55 --> 00:18:59
address space was linear so I actually

00:18:56 --> 00:19:01
got to just you know just not worry

00:18:58 --> 00:19:03
about where it went whereas I I spent

00:19:00 --> 00:19:05
he first two years of my career like

00:19:02 --> 00:19:07
swap tuning code so I knew exactly where

00:19:04 --> 00:19:11
in memory it was gonna be and so it

00:19:06 --> 00:19:12
seems crazy to think like that like cuz

00:19:10 --> 00:19:14
aren't a bunch of hardcore people just

00:19:11 --> 00:19:16
gonna say no the problem is if I have a

00:19:13 --> 00:19:18
whole datacenter I'm gonna be better at

00:19:15 --> 00:19:19
organizing what goes where then some

00:19:17 --> 00:19:22
piece of software that doesn't know the

00:19:18 --> 00:19:25
loads the resource needs and why would

00:19:21 --> 00:19:30
the DC OS know better than me

00:19:24 --> 00:19:32
I'm a smart PhD yeah no no I I think I

00:19:29 --> 00:19:35
think that's exactly right I think that

00:19:31 --> 00:19:37
what we're doing is is we're doing

00:19:34 --> 00:19:39
exactly what virtual memory did for for

00:19:37 --> 00:19:42
existing operating systems which is

00:19:38 --> 00:19:43
providing the abstractions so that we

00:19:41 --> 00:19:45
can really really effectively do the

00:19:42 --> 00:19:48
resource management the scheduling

00:19:44 --> 00:19:49
with the failures and I think just like

00:19:47 --> 00:19:51
what you saw in virtual memory there

00:19:48 --> 00:19:52
will probably be a lot of people who

00:19:50 --> 00:19:54
believe that they can do it better but

00:19:51 --> 00:19:55
imes going to show that actually we can

00:19:53 --> 00:19:58
start to do far more sophisticated

00:19:54 --> 00:20:00
things and we will be able to do far

00:19:57 --> 00:20:04
better scheduling for utilization for

00:19:59 --> 00:20:07
meeting SLA s4 for serving the customers

00:20:03 --> 00:20:08
yeah and I think to me that that's just

00:20:06 --> 00:20:10
a super important point for folks to

00:20:07 --> 00:20:11
understand because in these kind of

00:20:09 --> 00:20:13
transitions when you're changing

00:20:10 --> 00:20:15
abstraction layers like you tend to

00:20:12 --> 00:20:17
there's this sort of management

00:20:14 --> 00:20:19
retrenching of like wow security is

00:20:16 --> 00:20:21
really important we know how to secure

00:20:18 --> 00:20:23
this so we're gonna stick with it even

00:20:20 --> 00:20:24
though you know and a few percentage of

00:20:22 --> 00:20:27
utilization won't change it even though

00:20:23 --> 00:20:29
the system isn't secure it's just

00:20:26 --> 00:20:32
comfortably insecure that's right yeah

00:20:28 --> 00:20:34
and and like it was great to be

00:20:31 --> 00:20:36
comfortable even though you were failing

00:20:33 --> 00:20:38
and so I I think that like for me that's

00:20:35 --> 00:20:39
the big transition that people gonna

00:20:37 --> 00:20:42
have to just sort of get over their own

00:20:38 --> 00:20:43
perceived expertise yeah and let

00:20:41 --> 00:20:45
computers do stuff that they're good at

00:20:42 --> 00:20:47
hat's right yeah and then that's why I

00:20:44 --> 00:20:50
think bring pulling in analogies of the

00:20:46 --> 00:20:51
past is so valuable yes it helps to

00:20:49 --> 00:20:55
people start to realize you know what

00:20:50 --> 00:20:59
maybe yeah this is a good idea so so

00:20:54 --> 00:21:01
who's using it today yeah so the

00:20:58 --> 00:21:03
open-source components that make up a

00:21:00 --> 00:21:05
large part of the DC OS are used by a

00:21:02 --> 00:21:06
large number of companies today some of

00:21:04 --> 00:21:10
the biggest users out there are

00:21:05 --> 00:21:12
companies like Twitter Airbnb HubSpot -

00:21:09 --> 00:21:14
eBay and and paypal are using it for

00:21:11 --> 00:21:16
unning things Netflix is using it for

00:21:13 --> 00:21:17
unning things some of the smaller

00:21:15 --> 00:21:20
companies without a lot of machines

00:21:16 --> 00:21:21
that's right ya know I mean one of the

00:21:19 --> 00:21:24
great things about the way that that the

00:21:20 --> 00:21:25
software has evolved over the years is

00:21:23 --> 00:21:29
we've we've made it so that it works

00:21:24 --> 00:21:30
well at small scale but it also scales

00:21:28 --> 00:21:33
and it works very very well for for the

00:21:29 --> 00:21:34
large scale skies and as Hardware itself

00:21:32 --> 00:21:36
is starting to evolve in our data

00:21:33 --> 00:21:38
centers and maybe the rack is gonna

00:21:35 --> 00:21:39
start looking less like the rack or a

00:21:37 --> 00:21:41
machine is gonna start looking less like

00:21:38 --> 00:21:43
a machine you really need these levels

00:21:40 --> 00:21:45
of abstraction for both the small guys

00:21:42 --> 00:21:47
and for the big guys yeah it certainly

00:21:44 --> 00:21:48
seems to me that that one of the things

00:21:46 --> 00:21:50
that our operating system brings is it

00:21:47 --> 00:21:53
allows hardware to proceed at a

00:21:49 --> 00:21:56
different pace of innovation and so I

00:21:52 --> 00:21:58
when I look at DCOs I think wow this is

00:21:55 --> 00:22:00
really gonna free a set of people to go

00:21:57 --> 00:22:02
well let's just go replace our servers

00:21:59 --> 00:22:03
with arm servers let's go replace our

00:22:01 --> 00:22:06
networking infrastructure in a certain

00:22:02 --> 00:22:08
way because they'll be able to map those

00:22:05 --> 00:22:10
abstractions up yeah rather than today I

00:22:07 --> 00:22:12
mean you can't once you say it's a VM

00:22:09 --> 00:22:14
running this instruction set that

00:22:11 --> 00:22:16
assumes this level of you're stuck

00:22:13 --> 00:22:19
that's right yeah so a lot of people are

00:22:15 --> 00:22:20
looking at the stack of cloud today you

00:22:18 --> 00:22:21
know or we haven't even used a lot here

00:22:19 --> 00:22:23
because we're really focused on

00:22:20 --> 00:22:25
distributed operating system but you

00:22:22 --> 00:22:27
know and they think of platform as a

00:22:24 --> 00:22:29
service or infrastructure as a service

00:22:26 --> 00:22:32
and so to me like let's assume that this

00:22:28 --> 00:22:35
n't platform as a service let's take

00:22:31 --> 00:22:37
that let's assume what we understand

00:22:34 --> 00:22:40
pasta V but but isn't you know is is

00:22:36 --> 00:22:43
definitely at this VM server level so

00:22:39 --> 00:22:45
why is this not an is yeah I think yeah

00:22:42 --> 00:22:47
yeah so one of the biggest

00:22:44 --> 00:22:49
differentiators between what we've done

00:22:46 --> 00:22:50
versus what they've done with the

00:22:48 --> 00:22:54
infrastructures infrastructure as a

00:22:49 --> 00:22:56
service space is really try to provide

00:22:53 --> 00:22:59
these abstractions and these primitives

00:22:55 --> 00:23:00
that enable you building new distributed

00:22:58 --> 00:23:01
systems on top and again that's really

00:22:59 --> 00:23:03
what an operating system should be

00:23:00 --> 00:23:05
providing what infrastructure as a

00:23:02 --> 00:23:08
service provides to you is another

00:23:04 --> 00:23:10
machine you know it turns a physical

00:23:07 --> 00:23:11
machine into a virtual machine or maybe

00:23:09 --> 00:23:13
a virtual machine it's first show a

00:23:10 --> 00:23:16
machine when you're running say

00:23:12 --> 00:23:19
OpenStack on ec2 and that does not help

00:23:15 --> 00:23:20
the developer build another system it's

00:23:18 --> 00:23:23
the same primitive it's just kind of

00:23:19 --> 00:23:24
wrapped up and so really what you get

00:23:22 --> 00:23:26
from from something like data center

00:23:23 --> 00:23:27
operating system are the abstractions

00:23:25 --> 00:23:29
and primitives that make it easier to

00:23:26 --> 00:23:31
build new distribute systems and that's

00:23:28 --> 00:23:33
what makes it easier to then move those

00:23:30 --> 00:23:34
distribute systems from one organization

00:23:32 --> 00:23:36
to another organization because that's

00:23:33 --> 00:23:38
the abstraction that everybody has and

00:23:35 --> 00:23:39
they can use those yeah you know I think

00:23:37 --> 00:23:41
that this is super interesting because I

00:23:38 --> 00:23:43
think from a IT leadership and the

00:23:40 --> 00:23:45
nterprise perspective you know right

00:23:42 --> 00:23:46
now we're on the verge where everybody

00:23:44 --> 00:23:47
wants to move to cloud they don't know

00:23:45 --> 00:23:51
hat that means and so they're very

00:23:46 --> 00:23:52
quickly virtualizing that servers that

00:23:50 --> 00:23:54
hey have laying around and I'm a big

00:23:51 --> 00:23:56
believer that that's just not a useful a

00:23:53 --> 00:23:57
good use of time yeah I think it might

00:23:55 --> 00:23:59
be cost effective in some marginal way

00:23:56 --> 00:24:01
but a cost of moving and the bugs you

00:23:58 --> 00:24:03
introduced and stuff and so I think what

00:24:00 --> 00:24:05
would you say to sort of your typical

00:24:02 --> 00:24:06
enterprise CIO there's not really a

00:24:04 --> 00:24:10
typical but an enterprise CIO is

00:24:05 --> 00:24:11
overseeing a move like like what what is

00:24:09 --> 00:24:14
it that they'll that

00:24:10 --> 00:24:16
should understand about moving to a

00:24:13 --> 00:24:18
missus kind of environment rather than

00:24:15 --> 00:24:20
take this intermediate step of doing a

00:24:17 --> 00:24:21
bunch more VM stuff or better managing

00:24:19 --> 00:24:23
review right right right

00:24:20 --> 00:24:25
yeah I mean I think one thing that's

00:24:22 --> 00:24:26
really really clear is that one of the

00:24:24 --> 00:24:28
nice things about a data center

00:24:25 --> 00:24:30
operating system is that it doesn't

00:24:27 --> 00:24:31
really compete with an infrastructure

00:24:29 --> 00:24:33
service at the end of the day because

00:24:30 --> 00:24:35
it's still about just taking all your

00:24:32 --> 00:24:36
esources whether those resources come

00:24:34 --> 00:24:39
from virtual or physical machines and

00:24:35 --> 00:24:40
using those resources effectively so for

00:24:38 --> 00:24:41
folks that do already have

00:24:39 --> 00:24:43
infrastructure as a service like

00:24:40 --> 00:24:46
deployments there's still a ton of value

00:24:42 --> 00:24:47
in using may sauce in the data center

00:24:45 --> 00:24:49
operating system because you still want

00:24:46 --> 00:24:50
o best take advantage of the resources

00:24:48 --> 00:24:52
that you already have again if you're

00:24:49 --> 00:24:54
just bunch of virtual machines and the

00:24:51 --> 00:24:56
same thing applies why something like

00:24:53 --> 00:24:58
Mesa sauce in the DC OS is still so

00:24:55 --> 00:25:00
valuable in ec2 like environments on AWS

00:24:57 --> 00:25:02
is because again still you want to best

00:24:59 --> 00:25:03
ake advantage of all the resources that

00:25:01 --> 00:25:05
you have but for people that are

00:25:02 --> 00:25:07
starting from scratch I think you can

00:25:04 --> 00:25:09
really now start to take a very close

00:25:06 --> 00:25:10
look on whether or not you need to go

00:25:08 --> 00:25:13
through that first level of

00:25:09 --> 00:25:15
virtualization or not and we've had a

00:25:12 --> 00:25:17
lot of reports of people that can go

00:25:14 --> 00:25:19
directly to using something like Mesa

00:25:16 --> 00:25:21
nd the data center operating system and

00:25:18 --> 00:25:23
then you don't have to start paying that

00:25:20 --> 00:25:25
30% virtualization overhead for running

00:25:22 --> 00:25:27
your applications which can start to

00:25:24 --> 00:25:30
save a lot of money well because that's

00:25:26 --> 00:25:32
how I sort of think of it as as you know

00:25:29 --> 00:25:34
both our cost savings and then like if

00:25:31 --> 00:25:35
you're gonna go a Greenfield in like if

00:25:33 --> 00:25:37
you're gonna build a new expense app

00:25:34 --> 00:25:39
rather than just virtualize the old

00:25:36 --> 00:25:40
expense app you probably want to build

00:25:38 --> 00:25:43
it because you know it's never gonna use

00:25:39 --> 00:25:44
a whole rack yeah like so why would but

00:25:42 --> 00:25:45
you're gonna probably if you were to go

00:25:43 --> 00:25:47
build it you would dedicate the rack

00:25:44 --> 00:25:50
yeah and then you get all the overhead

00:25:46 --> 00:25:52
of a bunch of VMs and so it seems like

00:25:49 --> 00:25:54
you should just go straight to building

00:25:51 --> 00:25:55
it as a distributed ab and then you'll

00:25:53 --> 00:25:57
have your thousand apps over the next

00:25:54 --> 00:25:58
en years that get rewritten or all just

00:25:56 --> 00:26:00
gonna squeeze in and use the right

00:25:57 --> 00:26:02
amount of resource yes that's exactly

00:25:59 --> 00:26:03
right so but don't I want to go back one

00:26:01 --> 00:26:06
quick SEC to the platform as-a-service

00:26:02 --> 00:26:07
because to me they're like platform as a

00:26:05 --> 00:26:10
service infrastructure or a service or

00:26:06 --> 00:26:12
sort of almost inherently connected in

00:26:09 --> 00:26:14
an inefficient way yeah like so what

00:26:11 --> 00:26:16
would you say that well oh no we're okay

00:26:13 --> 00:26:18
because we're just going to use you know

00:26:15 --> 00:26:20
a cloud vendors platform right but that

00:26:17 --> 00:26:21
doesn't solve the distributed yeah

00:26:19 --> 00:26:24
no I mean I mean what ends up happening

00:26:21 --> 00:26:26
at the end of the day with platformers

00:26:23 --> 00:26:28
is services again it's so it's that's a

00:26:25 --> 00:26:29
high level attraction on top of em

00:26:27 --> 00:26:30
structure of service what platform as a

00:26:28 --> 00:26:32
service really solves is the fact that

00:26:29 --> 00:26:33
oh great from infrastructure service I

00:26:31 --> 00:26:35
got a bunch of machines now what do I do

00:26:32 --> 00:26:37
it's a platform reserved said okay well

00:26:34 --> 00:26:39
we'll abstract away the machines and

00:26:36 --> 00:26:41
we'll let you just run your tasks your

00:26:38 --> 00:26:43
processes your apps whatever it is

00:26:40 --> 00:26:44
but but then you just run the processes

00:26:42 --> 00:26:46
and what you really want is you want to

00:26:43 --> 00:26:47
be able to launch those processes those

00:26:45 --> 00:26:50
applications and then you want those

00:26:46 --> 00:26:52
applications to be able to continue to

00:26:49 --> 00:26:54
execute by using the underlying

00:26:51 --> 00:26:56
infrastructure by calling back into

00:26:53 --> 00:26:57
something like the data center operating

00:26:55 --> 00:26:59
system and say hey now I need more

00:26:56 --> 00:27:01
sources or for us to be able to call

00:26:58 --> 00:27:02
into the apps the data center operating

00:27:00 --> 00:27:04
system people call in the absence a hey

00:27:01 --> 00:27:06
this machine is going down for reboot

00:27:03 --> 00:27:07
because it's doing maintenance you

00:27:05 --> 00:27:08
should know about this just like in a

00:27:06 --> 00:27:11
normal operating system we actually did

00:27:07 --> 00:27:13
we actually you know you you do memory

00:27:10 --> 00:27:14
paging and that's the big distinguisher

00:27:12 --> 00:27:15
again between something like

00:27:13 --> 00:27:16
platform-as-a-service

00:27:14 --> 00:27:18
and the data center operating system is

00:27:15 --> 00:27:20
platform-as-a-service about okay here's

00:27:17 --> 00:27:22
an app I run it I go and the data center

00:27:19 --> 00:27:24
operating systems but okay here's an app

00:27:21 --> 00:27:25
I run it and then while that app is

00:27:23 --> 00:27:27
running it uses the data center

00:27:24 --> 00:27:29
operating system to continue to run it

00:27:26 --> 00:27:32
calls back in it uses the system call

00:27:28 --> 00:27:34
API and as that IP I gets bigger and

00:27:31 --> 00:27:35
bigger it makes a really

00:27:33 --> 00:27:36
rich environment for programmers

00:27:34 --> 00:27:38
to be able to build really sophisticated

00:27:35 --> 00:27:40
istributed applications one last

00:27:37 --> 00:27:43
question is I mean you just read a lot

00:27:39 --> 00:27:45
of stuff so I'll make it two parts a

00:27:42 --> 00:27:47
where can I get the stuff today yep and

00:27:44 --> 00:27:49
what can I do with it and then be like

00:27:46 --> 00:27:53
what comes next

00:27:48 --> 00:27:55
yeah and go to Mesa Apache org and and

00:27:52 --> 00:27:57
that's where you can where you can learn

00:27:54 --> 00:28:03
a lot about the kernel itself the mesas

00:27:56 --> 00:28:05
kernel and the new stuff that was a

00:28:02 --> 00:28:06
second yeah yeah this effort was like

00:28:04 --> 00:28:07
well tell everybody now that they've

00:28:05 --> 00:28:11
absorbed all this what's coming next

00:28:06 --> 00:28:14
yeah yeah so the new stuffs the most fun

00:28:10 --> 00:28:16
stuff to me it's really where we start

00:28:13 --> 00:28:18
o take the beginning steps of what it

00:28:15 --> 00:28:19
means to be you know a data center

00:28:17 --> 00:28:21
operating system and take it to the next

00:28:18 --> 00:28:23
level and it means we start to take the

00:28:20 --> 00:28:26
things that historically have been

00:28:22 --> 00:28:27
really really tough to run regardless of

00:28:25 --> 00:28:29
whether or not you've used higher levels

00:28:26 --> 00:28:31
of abstraction like things like passes

00:28:28 --> 00:28:33
or infrastructure as a service like

00:28:30 --> 00:28:34
stateful services

00:28:32 --> 00:28:36
and we get to start running those things

00:28:33 --> 00:28:39
in a really really really effective way

00:28:35 --> 00:28:41
in the data center that historically

00:28:38 --> 00:28:42
have required a lot of humans to

00:28:40 --> 00:28:44
actually deal with that kind of stuff so

00:28:41 --> 00:28:45
there are two examples I want to give

00:28:43 --> 00:28:48
here two primitives that are being built

00:28:44 --> 00:28:49
hat I think are really really cool one

00:28:47 --> 00:28:52
primitive we're building and is this

00:28:48 --> 00:28:54
notion of maintenance so because we have

00:28:51 --> 00:28:56
this this software let layer the kernel

00:28:53 --> 00:28:57
actually running in our data center

00:28:55 --> 00:29:00
operating system when the applications

00:28:56 --> 00:29:04
are running on top we can have it start

00:28:59 --> 00:29:06
o actually deal with maintenance of

00:29:03 --> 00:29:07
things that are happening in your data

00:29:05 --> 00:29:10
center so for example when a machine or

00:29:06 --> 00:29:12
Iraq needs to go offline we can have the

00:29:09 --> 00:29:13
software talk to the other software and

00:29:11 --> 00:29:16
say hey you know what this machine is

00:29:12 --> 00:29:17
going down for repair you should you

00:29:15 --> 00:29:19
know we need to reschedule you or you

00:29:16 --> 00:29:20
should get reschedule you need to move

00:29:18 --> 00:29:21
data let's treat it like it was a

00:29:19 --> 00:29:22
failure but a planned failure that's

00:29:20 --> 00:29:24
right that's right it's a failure but a

00:29:21 --> 00:29:26
plan for that's exactly right and that

00:29:23 --> 00:29:27
his is this is huge because usually the

00:29:25 --> 00:29:29
way this works in most most

00:29:26 --> 00:29:30
organizations is a human walks up to

00:29:28 --> 00:29:32
another human and says hey I'm going to

00:29:29 --> 00:29:33
be taking this rack down what can we

00:29:31 --> 00:29:36
actually do about this we can turn this

00:29:32 --> 00:29:38
into software right and the analogy that

00:29:35 --> 00:29:41
I'd like to give from just try to

00:29:37 --> 00:29:42
traditional operating systems is the

00:29:40 --> 00:29:45
operating systems today would do things

00:29:41 --> 00:29:46
like page out memory but what they do is

00:29:44 --> 00:29:48
they just they just say hey you know

00:29:45 --> 00:29:50
e're gonna use the LRU algorithm we're

00:29:47 --> 00:29:51
gonna page out the least recently used

00:29:49 --> 00:29:53
and that doesn't always work great and

00:29:50 --> 00:29:55
it wouldn't it be better if actually the

00:29:52 --> 00:29:56
operating system could work with the

00:29:54 --> 00:29:59
applications right on top to do smarter

00:29:55 --> 00:30:00
things when it comes to failures or

00:29:58 --> 00:30:02
needing more resources whatever it is

00:29:59 --> 00:30:04
and that I think is like that realm of

00:30:01 --> 00:30:05
things is is to me one of the most

00:30:03 --> 00:30:07
exciting things that were going to be

00:30:04 --> 00:30:09
working on because we get to reimagine a

00:30:06 --> 00:30:12
lot of the basic primitives that existed

00:30:08 --> 00:30:13
for single machines and rebuild them in

00:30:11 --> 00:30:16
a way that makes sense in a distributed

00:30:12 --> 00:30:18
environment and make sense for people

00:30:15 --> 00:30:20
that want to do things in a smarter way

00:30:17 --> 00:30:22
sort of what we've been working with for

00:30:19 --> 00:30:24
a lot a scale that people can only

00:30:21 --> 00:30:26
imagine yeah at a scale that it's it's

00:30:23 --> 00:30:29
already hard enough to do it manually

00:30:25 --> 00:30:30
and so we have to do it in software

00:30:28 --> 00:30:33
based ways and so so we can do that

00:30:29 --> 00:30:35
awesome well thanks so much this has

00:30:32 --> 00:30:37
been a Benjamin Hyneman

00:30:34 --> 00:30:39
from useless fear and I'm Steven

00:30:36 --> 00:30:42
Sinofsky signing off this episode of the

00:30:38 --> 00:30:44
a16 z podcast thanks everybody great

00:30:41 --> 00:30:44
hank you

<!-- YOUTUBE_TRANSCRIPT_END -->
