---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Hhjb3GyfQkY"
title: "a16z Podcast | It's Complicated"
video_url: "https://www.youtube.com/watch?v=Hhjb3GyfQkY"
thumbnail_url: "https://i.ytimg.com/vi/Hhjb3GyfQkY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Hhjb3GyfQkY"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:35:49.000Z"
upload_date: "2019-01-02"
duration_seconds: 1124
duration_human: "18:44"
view_count: 54
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:16:15.836Z"
---

# a16z Podcast | It's Complicated

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Hhjb3GyfQkY
- video_id: Hhjb3GyfQkY
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:35:49.000Z
- upload_date: 2019-01-02
- duration: 18:44
- view_count: 54
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

For better or worse, most of the computing systems that run much of our lives (whether invisibly or visibly) have become increasingly complex -- they're not fully engineered; they're almost grown. And with that we enter a brave new world of "biological" (as opposed to a more "physics") mindset applied to computing. It's more like evolution, horns and all.

This isn't just abstract or backend-only stuff. Complex system design affects everything from datacenters and SaaS to word processors and cars, touching human lives in very tangible ways. So how do you solve problems in such systems? How do you even begin to understand "the system" in the first place? And is there anything out there yet that lets us test and verify the output of these systems? (Inquiring minds want to know!)

All this and more in this episode of the a16z Podcast, a riff on the theme of "complicated" with complexity scientist Samuel Arbesman and author of the new book Overcomplicated. Also joining the conversation (with Sonal Chokshi) are a16z board partner Steven Sinofsky and research and deal team head Frank Chen.

image: brewbooks / Flickr

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hi everyone welcome to the a6 & Z

00:00:02 --> 00:00:07
podcast I am sonal today's episode is

00:00:04 --> 00:00:08
one of our hallway conversations where

00:00:06 --> 00:00:11
we just riff on a topic for a bit and

00:00:07 --> 00:00:13
the topic we're talking about today is

00:00:10 --> 00:00:15
the theme of complicated and to give you

00:00:12 --> 00:00:18
more context for this we have a 6nc

00:00:14 --> 00:00:19
board partner Steven Sinofsky who has

00:00:17 --> 00:00:21
written in the past about systems where

00:00:18 --> 00:00:23
the backend is really complicated on the

00:00:20 --> 00:00:25
front end it's deceptively simple and

00:00:22 --> 00:00:27
this tension is also a common theme in

00:00:24 --> 00:00:30
design we have a 16-0 search and deal

00:00:26 --> 00:00:31
team head frank chen who has talked a

00:00:29 --> 00:00:33
lot about AI and deep learning and

00:00:30 --> 00:00:37
that's relevant here because those are

00:00:32 --> 00:00:38
complex systems that learn and finally

00:00:36 --> 00:00:40
we have Sam our bisman who is a

00:00:37 --> 00:00:43
complexity scientist and who also got

00:00:39 --> 00:00:44
his PhD in computational biology and he

00:00:42 --> 00:00:46
has a new book out called

00:00:43 --> 00:00:48
overcomplicated so it all fits together

00:00:45 --> 00:00:50
alright guys let's just get started

00:00:47 --> 00:00:52
I'm excited to talk about this topic so

00:00:49 --> 00:00:53
Sam I was reading the book and one of

00:00:51 --> 00:00:55
the first things that occurred to me is

00:00:52 --> 00:00:57
I wanted to ask you my favorite product

00:00:54 --> 00:01:00
manager interview question of all time

00:00:56 --> 00:01:03
my question is so how two phones work

00:00:59 --> 00:01:05
how do phones work like an iPhone

00:01:02 --> 00:01:07
smartphone any phone you pick any phone

00:01:04 --> 00:01:11
ven the simplest landline and tell me

00:01:06 --> 00:01:12
how it works oh boy I am gonna show my

00:01:10 --> 00:01:16
ignorance probably really really quickly

00:01:11 --> 00:01:19
and yeah you know I know you dial and

00:01:15 --> 00:01:20
then actually I'm well I was gonna say

00:01:18 --> 00:01:21
there's some sort of packet switching

00:01:19 --> 00:01:23
thing I guess it really depends if

00:01:20 --> 00:01:24
you're using kind of an IP Phone or not

00:01:22 --> 00:01:29
yeah

00:01:23 --> 00:01:30
I'm frankly I don't know well frankly I

00:01:28 --> 00:01:32
think most people do not know I'm we've

00:01:29 --> 00:01:34
been shielded from that complexity the

00:01:31 --> 00:01:35
reason I ask is because that's what

00:01:33 --> 00:01:38
really jumped out at me when I was

00:01:34 --> 00:01:42
reading the book which is like we create

00:01:37 --> 00:01:43
systems that nobody understands and so

00:01:41 --> 00:01:45
exact turns out like you can ask a

00:01:42 --> 00:01:46
million product managers how to a phone

00:01:44 --> 00:01:48
works um actually do exactly what you

00:01:45 --> 00:01:49
did well you dial it and then the next

00:01:47 --> 00:01:52
question is well tell me about the

00:01:48 --> 00:01:54
lectromagnetic stuff behind dialing and

00:01:51 --> 00:01:56
what is that or touch tones how do you

00:01:53 --> 00:01:58
generate those frequencies and then you

00:01:55 --> 00:02:00
let you leaped immediately to packet

00:01:57 --> 00:02:01
switching which of course skip the whole

00:01:59 --> 00:02:03
Oh totally yeah

00:02:00 --> 00:02:04
no I it's like yeah I was jumping to a

00:02:02 --> 00:02:06
couple things that I was vaguely

00:02:03 --> 00:02:08
familiar with now right and then like

00:02:05 --> 00:02:11
how does your voice turn into one of

00:02:07 --> 00:02:13
those things to begin with yeah my

00:02:10 --> 00:02:13
question to product managers was okay

00:02:12 --> 00:02:15
when you go

00:02:12 --> 00:02:18
home after this interview you're gonna

00:02:14 --> 00:02:19
send me a nice email to thank me how

00:02:17 --> 00:02:22
does that email get to me right and the

00:02:18 --> 00:02:24
same exact thing right this cascade of

00:02:21 --> 00:02:26
technology that's layer and layer and so

00:02:23 --> 00:02:28
what you're looking for if you're trying

00:02:25 --> 00:02:30
to find a technical one is how deep down

00:02:27 --> 00:02:32
the stack and you go and answering that

00:02:29 --> 00:02:33
question oh my god that's so funny you

00:02:31 --> 00:02:34
guys literally just that's the exact

00:02:32 --> 00:02:36
same question but in different forms

00:02:33 --> 00:02:38
Stephen and I are actually you know

00:02:35 --> 00:02:40
twins thing did we share a mother but

00:02:37 --> 00:02:42
you know he's the Jewish version I'm the

00:02:39 --> 00:02:43
Asian why does it even matter to know

00:02:41 --> 00:02:45
these things I mean okay beyond being a

00:02:42 --> 00:02:47
product manager that you're interviewing

00:02:44 --> 00:02:49
you know you're trying to find out their

00:02:46 --> 00:02:52
skills in the enterprise does it really

00:02:48 --> 00:02:55
matter for us as users as consumers to

00:02:51 --> 00:02:57
really know how our systems work I only

00:02:54 --> 00:03:00
care that things are working so I think

00:02:56 --> 00:03:01
for the most part a user they can they

00:02:59 --> 00:03:02
can just use things and often be

00:03:00 --> 00:03:05
blissfully unaware and it seems like

00:03:01 --> 00:03:06
it's fine I think the the major problem

00:03:04 --> 00:03:09
though is that it's one thing to say

00:03:05 --> 00:03:10
that oh there's some experts somewhere

00:03:08 --> 00:03:11
who can understand the system its

00:03:09 --> 00:03:13
entirety and really knows what's going

00:03:11 --> 00:03:15
on we can kind of outsource our

00:03:12 --> 00:03:17
understanding to them but more and more

00:03:14 --> 00:03:18
there's really no one who can understand

00:03:16 --> 00:03:20
is exactly the point that's being made

00:03:17 --> 00:03:22
here and so really when no one fully

00:03:19 --> 00:03:24
understands it it's incumbent upon each

00:03:21 --> 00:03:25
of us to at least have some way of

00:03:23 --> 00:03:27
thinking about these systems at least

00:03:24 --> 00:03:29
some sort of like glimpse into what's

00:03:26 --> 00:03:31
happening um sometimes underneath the

00:03:28 --> 00:03:32
kind of fairly simple interfaces to into

00:03:30 --> 00:03:34
the underlying complexity because

00:03:31 --> 00:03:36
oftentimes we think we understand the

00:03:33 --> 00:03:37
system and then were confronted with a

00:03:35 --> 00:03:38
bug or some other kind of unexpected

00:03:36 --> 00:03:40
behavior and then we realized there's a

00:03:37 --> 00:03:42
gap between how we thought it would work

00:03:39 --> 00:03:44
and how it actually does work one of the

00:03:41 --> 00:03:45
things that I think is so interesting is

00:03:43 --> 00:03:47
not being able to understand it has

00:03:44 --> 00:03:50
become like almost a cool thing like the

00:03:47 --> 00:03:52
one person who understands this one part

00:03:49 --> 00:03:55
of the system you know and even the

00:03:51 --> 00:03:57
words that we use like hack and Cluj and

00:03:54 --> 00:03:59
stuff they're there now like cool like

00:03:56 --> 00:04:02
hack hack is gone from like a problem to

00:03:58 --> 00:04:05
like we now celebrate it with hackathons

00:04:01 --> 00:04:07
and and so I'm trying to understand or

00:04:04 --> 00:04:09
think about you know why is it good to

00:04:06 --> 00:04:11
embrace the complicated nature of things

00:04:08 --> 00:04:14
or the complex nature of things and when

00:04:10 --> 00:04:16
is it detrimental to society to do that

00:04:13 --> 00:04:19
like when is a hack like wow that's not

00:04:15 --> 00:04:21
like I don't want my cat scan machine to

00:04:18 --> 00:04:22
be hacked but I'm okay if like a word

00:04:20 --> 00:04:25
processor is hacked

00:04:21 --> 00:04:27
yeah I think it's more about recognizing

00:04:24 --> 00:04:29
that too often this is just

00:04:26 --> 00:04:31
he way of the world that they're just

00:04:28 --> 00:04:32
all around us certainly the way when you

00:04:30 --> 00:04:34
have when you're confronted with a large

00:04:31 --> 00:04:35
system some large technological system

00:04:33 --> 00:04:38
like piece of software or whatever

00:04:34 --> 00:04:41
oftentimes the only way to change it is

00:04:37 --> 00:04:43
through those kind of Kluge's or hacks

00:04:40 --> 00:04:44
because it's kind of iterative tinkering

00:04:42 --> 00:04:46
at the edges of approach which ends up

00:04:43 --> 00:04:47
meaning that you you add something to it

00:04:45 --> 00:04:49
's not pretty

00:04:46 --> 00:04:50
it gets the job done the downside of

00:04:48 --> 00:04:52
that of course is you don't fully

00:04:49 --> 00:04:54
understand what's going on and as more

00:04:51 --> 00:04:55
and more of these accrete than someone

00:04:53 --> 00:04:58
you're left with this like impenetrable

00:04:54 --> 00:05:01
mess I do think though I ideally we

00:04:57 --> 00:05:03
should be deliberate in how we grow

00:05:00 --> 00:05:04
these systems and change them over time

00:05:02 --> 00:05:06
certainly if we're building something

00:05:03 --> 00:05:09
from scratch we should try to be as

00:05:05 --> 00:05:11
logical and drift away from the Cluj and

00:05:08 --> 00:05:13
kind of the kludgy approach at the same

00:05:10 --> 00:05:15
time though these systems they're not

00:05:12 --> 00:05:17
always fully engineered they're almost

00:05:14 --> 00:05:18
grown and when they're revolt and then

00:05:16 --> 00:05:21
like then you often get the kind of all

00:05:17 --> 00:05:23
the terminology from evolution of kind

00:05:20 --> 00:05:25
of like evolved feature or repurposing

00:05:22 --> 00:05:26
some other kind of you know typical

00:05:24 --> 00:05:29
there's like a whole bunch of like

00:05:25 --> 00:05:30
obsolete code in there and and I think

00:05:28 --> 00:05:31
then you kind of realize oh actually

00:05:29 --> 00:05:33
these systems when they get big enough

00:05:30 --> 00:05:36
they end up looking almost biological

00:05:32 --> 00:05:38
well thinking about websites or mobile

00:05:35 --> 00:05:41
apps getting very very big they are

00:05:37 --> 00:05:43
almost all biological now because it's

00:05:40 --> 00:05:44
impossible for any single person to

00:05:42 --> 00:05:46
understand I mean you have a CTO and you

00:05:43 --> 00:05:48
have an architect but if you look at

00:05:45 --> 00:05:50
what happens inside companies as these

00:05:47 --> 00:05:52
complicated sites are actually being

00:05:49 --> 00:05:54
built what happens when you have a very

00:05:51 --> 00:05:55
complicated change is you have this

00:05:53 --> 00:05:59
entity called the Change review board

00:05:54 --> 00:06:00
convene and it's 12 people in a room one

00:05:58 --> 00:06:02
representing the network one

00:05:59 --> 00:06:03
representing storage one representing

00:06:01 --> 00:06:05
servers one representing application

00:06:02 --> 00:06:07
development and you have to sort of

00:06:04 --> 00:06:09
review every change and basically say it

00:06:06 --> 00:06:11
out loud and say oh have I not thought

00:06:08 --> 00:06:13
hrough what this change is gonna mean

00:06:10 --> 00:06:16
in your world and so you have all of

00:06:12 --> 00:06:18
these people who need to convene to that

00:06:15 --> 00:06:20
changes before they actually get pushed

00:06:17 --> 00:06:23
into production and then the reverse

00:06:19 --> 00:06:25
happens when problems occur so when you

00:06:22 --> 00:06:26
have an outage right and I can tell you

00:06:24 --> 00:06:28
this is probably having an inside

00:06:25 --> 00:06:31
Niantic on a daily basis right now as

00:06:27 --> 00:06:33
Boogie explodes in popularity you

00:06:30 --> 00:06:34
have those exact same people convened to

00:06:32 --> 00:06:37
try to figure out what what is causing

00:06:33 --> 00:06:38
it right when people can't log in what's

00:06:36 --> 00:06:39
causing that and is it a network

00:06:37 --> 00:06:40
problems that storage problems a

00:06:38 --> 00:06:42
database problem

00:06:39 --> 00:06:44
no single person can understand it and

00:06:41 --> 00:06:46
so you need to have groups of people to

00:06:43 --> 00:06:47
try to figure things out and it's not

00:06:45 --> 00:06:49
just back-end things I mean I'm thinking

00:06:46 --> 00:06:52
of examples where can touch our lives

00:06:48 --> 00:06:53
and very personal concrete ways and the

00:06:51 --> 00:06:55
classic example that comes to mind for

00:06:52 --> 00:06:58
me whenever we talk about this topic is

00:06:54 --> 00:06:59
elf-driving cars and the decisions the

00:06:57 --> 00:07:01
algorithm makes I mean that's a case

00:06:58 --> 00:07:02
where you can certainly code Intuit

00:07:00 --> 00:07:04
certain principles like it should behave

00:07:01 --> 00:07:06
in this way under certain conditions but

00:07:03 --> 00:07:07
as it learns as a system learns and

00:07:05 --> 00:07:09
we're not aware of exactly what it's

00:07:06 --> 00:07:11
learning and how its learning and it

00:07:08 --> 00:07:13
gets increasingly more complicated

00:07:10 --> 00:07:15
that's something that can affect us in

00:07:12 --> 00:07:17
very tangible ways yeah I think this is

00:07:14 --> 00:07:19
one of the fascinating changes to the

00:07:16 --> 00:07:22
way computers are being programmed

00:07:18 --> 00:07:24
increasingly right so for basically up

00:07:21 --> 00:07:26
until this point in time programming has

00:07:23 --> 00:07:28
been functional and procedural which is

00:07:25 --> 00:07:30
I have if loops and else loops and I

00:07:27 --> 00:07:32
tell it and what I'm trying to do is

00:07:29 --> 00:07:34
predict enough state so that the

00:07:31 --> 00:07:37
computer can make the right decision if

00:07:33 --> 00:07:39
this do that else do this right with the

00:07:36 --> 00:07:41
introduction of deep learning what you

00:07:38 --> 00:07:43
have baked into these computer systems

00:07:40 --> 00:07:46
is a probabilistic reasoning system

00:07:42 --> 00:07:48
which is if I see this input I think I

00:07:45 --> 00:07:51
should do X and how are we gonna marry

00:07:47 --> 00:07:53
these two worlds of procedural computer

00:07:50 --> 00:07:55
programmer tells you explicitly what to

00:07:52 --> 00:07:57
do in every case and this probabilistic

00:07:54 --> 00:07:59
reasoning which is well I've seen this

00:07:56 --> 00:08:01
road before and I think the right thing

00:07:58 --> 00:08:04
to do is turn right so pick you up on

00:08:00 --> 00:08:06
that I'm curious how in a sociological

00:08:03 --> 00:08:09
sense like because they've been like say

00:08:05 --> 00:08:12
75 years of computers being these exact

00:08:08 --> 00:08:14
precise things and you know and your use

00:08:11 --> 00:08:16
the analogy of physics and biology in

00:08:13 --> 00:08:19
the book and like how is it what what

00:08:15 --> 00:08:22
needs to happen for when for people to

00:08:18 --> 00:08:25
think that computers are biological that

00:08:21 --> 00:08:26
like hey it's okay if it has this goofy

00:08:24 --> 00:08:28
horn growing out the side of it

00:08:25 --> 00:08:30
evolution will eventually get rid of it

00:08:27 --> 00:08:34
cuz my experience has been that people

00:08:29 --> 00:08:35
have like a pretty low tolerance for

00:08:33 --> 00:08:38
error with anything that comes out of a

00:08:34 --> 00:08:39
computer like you used an example in the

00:08:37 --> 00:08:41
book that hit really home to me when

00:08:38 --> 00:08:44
you're working with an advanced piece of

00:08:40 --> 00:08:46
software such as are gargantuan which

00:08:43 --> 00:08:48
I'll assume you meant as a positive a

00:08:45 --> 00:08:51
gargantuan word processing tool

00:08:47 --> 00:08:54
and the end notes and the end notes in

00:08:50 --> 00:08:56
your document go and I'll quote haywire

00:08:53 --> 00:08:59
don't panic instead look at what went

00:08:55 --> 00:09:01
wrong and I have to tell you I've been

00:08:58 --> 00:09:03
on a lot of support calls with people

00:09:00 --> 00:09:07
with problems with word and trying to

00:09:02 --> 00:09:07
say don't panic hasn't really worked for

00:09:07 --> 00:09:14
your writer I'm guessing like when and

00:09:11 --> 00:09:20
actually I've been on calls with super

00:09:13 --> 00:09:25
famous writers and don't panic just it's

00:09:19 --> 00:09:27
biological the next evolution you know

00:09:24 --> 00:09:29
Darwin will take care of it perhaps that

00:09:26 --> 00:09:31
advice is a little bit more theoretical

00:09:28 --> 00:09:33
than been practical at this point one

00:09:30 --> 00:09:35
thing is that even when we're in the

00:09:32 --> 00:09:37
realm of like more traditional iterative

00:09:34 --> 00:09:39
like pretend procedural kind even

00:09:36 --> 00:09:40
functional programming I mean once you

00:09:38 --> 00:09:42
deal with like huge numbers of edge

00:09:39 --> 00:09:43
cases you can actually still quite

00:09:41 --> 00:09:44
asily build systems you don't really

00:09:42 --> 00:09:47
understand but especially as we move

00:09:43 --> 00:09:48
more into this world of like new types

00:09:46 --> 00:09:50
of machine learning and deep learning I

00:09:47 --> 00:09:52
think we need to kind of think more

00:09:49 --> 00:09:54
consciously about approaching them

00:09:51 --> 00:09:55
biologically and I think we can see some

00:09:53 --> 00:09:57
of these kinds of hints happening it's

00:09:54 --> 00:10:00
like for example Netflix they have this

00:09:56 --> 00:10:02
cast monkey a suite of tools where the

00:09:59 --> 00:10:04
tool will periodically take subsystems

00:10:01 --> 00:10:06
out of commission and see how the

00:10:03 --> 00:10:09
overall system responds live it'll just

00:10:05 --> 00:10:11
knock out portions of Netflix and see

00:10:08 --> 00:10:13
how it responds the idea is to lower the

00:10:10 --> 00:10:15
gap between how they assume the system

00:10:12 --> 00:10:16
works and how it actually does work and

00:10:14 --> 00:10:18
in order to make it as robust as

00:10:15 --> 00:10:19
possible and it turns out in biology

00:10:17 --> 00:10:22
this is actually one of the ways you

00:10:18 --> 00:10:23
learn about a living thing so for

00:10:21 --> 00:10:25
example let's say you have some you have

00:10:22 --> 00:10:28
one type of bacteria and you want to

00:10:24 --> 00:10:29
really understand how the genes interact

00:10:27 --> 00:10:30
what genes are important for which

00:10:28 --> 00:10:32
different kinds of things you can

00:10:29 --> 00:10:35
actively try to mutate it irradiated or

00:10:31 --> 00:10:37
subjected to some sort of chemical and

00:10:34 --> 00:10:39
thereby seeing how as you knock out

00:10:36 --> 00:10:41
certain parts of the genome it actually

00:10:38 --> 00:10:43
affects it and I think people are

00:10:40 --> 00:10:44
beginning to use these more biological

00:10:42 --> 00:10:46
techniques to really understand their

00:10:43 --> 00:10:48
systems now of course it's one thing to

00:10:45 --> 00:10:49
do that when you're building the system

00:10:47 --> 00:10:51
it's another thing to say don't panic

00:10:48 --> 00:10:53
just start tinkering with your with your

00:10:50 --> 00:10:54
word processor and you'll be fine when

00:10:52 --> 00:10:56
you've lost all your own notes it's a

00:10:53 --> 00:10:57
lot easier to just freak out and kind of

00:10:55 --> 00:10:59
go crazy it'll take some time we'll get

00:10:56 --> 00:11:02
here slowly but surely hopefully yeah

00:10:58 --> 00:11:02
chaos monkey is a great example of this

00:11:01 --> 00:11:04
big

00:11:01 --> 00:11:06
that's happened inside data centers

00:11:03 --> 00:11:07
precisely because we had to introduce

00:11:05 --> 00:11:09
biological thinking rather than physics

00:11:07 --> 00:11:11
thinking into even designing and

00:11:08 --> 00:11:12
troubleshooting these systems the way

00:11:10 --> 00:11:14
I'm using the terms physics and

00:11:11 --> 00:11:15
biological thinking kind of has two

00:11:13 --> 00:11:17
different modes and of course it's an

00:11:14 --> 00:11:19
oversimplification is the physics

00:11:16 --> 00:11:22
mindset might be to write a single

00:11:18 --> 00:11:23
quation that explains a good a good

00:11:21 --> 00:11:25
fraction of what's going on so it might

00:11:22 --> 00:11:26
maybe explain like sixty percent of

00:11:24 --> 00:11:29
what's happening within a system the

00:11:25 --> 00:11:30
biological thinking approach says well

00:11:28 --> 00:11:32
these things are they're very they're

00:11:29 --> 00:11:33
very complex they've evolved over time

00:11:31 --> 00:11:36
there's sort of this organic messiness

00:11:32 --> 00:11:37
we actually need to focus much more on

00:11:35 --> 00:11:39
the details the system may be

00:11:36 --> 00:11:41
understanding subsystems or kind of

00:11:38 --> 00:11:43
different components of what of what's

00:11:40 --> 00:11:44
happening within a living organism in

00:11:42 --> 00:11:46
the hopes that eventually you create

00:11:43 --> 00:11:47
this broader picture because in this

00:11:45 --> 00:11:49
biological mindset is the idea that that

00:11:46 --> 00:11:50
he details really matter it's

00:11:48 --> 00:11:52
wonderfully if you if you can write an

00:11:49 --> 00:11:53
equation that explains 60% of what's

00:11:51 --> 00:11:56
going on but it turns out the remaining

00:11:52 --> 00:11:57
40% is really really important when

00:11:55 --> 00:11:59
you're trying to make sure something

00:11:56 --> 00:12:01
works something really works properly

00:11:58 --> 00:12:03
especially when it comes to technology

00:12:00 --> 00:12:04
now of course there are many physicists

00:12:02 --> 00:12:06
who dwell in details in our many

00:12:03 --> 00:12:08
biologists who have grand theories and

00:12:05 --> 00:12:10
computational models so it's not a

00:12:07 --> 00:12:11
perfect way of describing the two

00:12:09 --> 00:12:12
different groups of scientists but

00:12:10 --> 00:12:14
hey're kind of two different mindsets

00:12:11 --> 00:12:16
and how we approach the natural world

00:12:13 --> 00:12:18
but increasingly it's also a really good

00:12:16 --> 00:12:20
framework for thinking about how we

00:12:17 --> 00:12:21
approach the build world and I think we

00:12:19 --> 00:12:23
need to kind of import some of that

00:12:20 --> 00:12:24
biological thinking that recognizes the

00:12:22 --> 00:12:26
details and kind of this iterative

00:12:23 --> 00:12:28
tinkering approach to understanding a

00:12:25 --> 00:12:30
technology to actually understand it

00:12:27 --> 00:12:32
fully or at least part way as we

00:12:29 --> 00:12:34
continue to build on bigger and bigger

00:12:31 --> 00:12:37
so when I read that analogy the what

00:12:33 --> 00:12:39
lept to mind for me is in the data

00:12:36 --> 00:12:42
center over the last 20 years we've been

00:12:38 --> 00:12:43
we've done a big transition from whose

00:12:41 --> 00:12:45
data center do you want to look like and

00:12:42 --> 00:12:51
that transition went from a Wall Street

00:12:44 --> 00:12:52
bank to Facebook or Netflix and I would

00:12:50 --> 00:12:55
argue that the Wall Street banks build

00:12:52 --> 00:12:57
physics thinking into their data centers

00:12:54 --> 00:13:00
which is you had these massive Sun

00:12:56 --> 00:13:02
servers and EMC arrays and Oracle

00:12:59 --> 00:13:04
databases and you paid attention to

00:13:01 --> 00:13:07
every single one of them because if one

00:13:03 --> 00:13:10
of them went down you were screwed but

00:13:06 --> 00:13:11
he benefit of knowing one of these

00:13:09 --> 00:13:13
things going down is you knew where to

00:13:10 --> 00:13:15
look right and then if you look at the

00:13:12 --> 00:13:16
Netflix or Facebook data center they

00:13:14 --> 00:13:18
sort of took the exact

00:13:15 --> 00:13:20
opposite view which is any server any

00:13:17 --> 00:13:23
disk drive any process that could die at

00:13:19 --> 00:13:25
any single time but we still want the

00:13:22 --> 00:13:27
Netflix feed to work and we want the

00:13:24 --> 00:13:29
news feed to work and the system needs

00:13:26 --> 00:13:31
to survive any given failure and that

00:13:28 --> 00:13:34
sort of the big change and so I would

00:13:30 --> 00:13:35
argue that most modern data centers

00:13:33 --> 00:13:37
which are built on micro services

00:13:34 --> 00:13:39
architecture scale out architectures are

00:13:36 --> 00:13:40
designed with sort of this biological

00:13:38 --> 00:13:43
thinking in mind which is any single

00:13:39 --> 00:13:46
instance or disk drive or server can

00:13:42 --> 00:13:47
vanish but we need to make sure that the

00:13:45 --> 00:13:49
ntire service doesn't grind to a halt

00:13:46 --> 00:13:51
when you look at like the types of terms

00:13:48 --> 00:13:54
used to describe those types of data

00:13:50 --> 00:13:55
centers like resilient or robustness

00:13:53 --> 00:13:57
like these are the types of terms that

00:13:54 --> 00:13:59
are often used when thinking about an

00:13:56 --> 00:14:01
ecosystem or living organism and I think

00:13:58 --> 00:14:03
that is very symptomatic of the idea the

00:14:00 --> 00:14:04
acid that they they have much more in

00:14:02 --> 00:14:06
line with kind of biological modes of

00:14:03 --> 00:14:08
thought that physics modes Dada in

00:14:05 --> 00:14:10
itself was like a major evolutionary

00:14:07 --> 00:14:12
point in the delivery of computing to

00:14:09 --> 00:14:14
people I mean I remember we a mile job

00:14:11 --> 00:14:15
we were working on like a Netflix

00:14:13 --> 00:14:18
basically it was the way to distribute

00:14:14 --> 00:14:20
video and we talked about like having

00:14:17 --> 00:14:22
data center employees like literally on

00:14:19 --> 00:14:25
rollerskates who are gonna run around

00:14:21 --> 00:14:27
swapping out disk drives and the whole

00:14:24 --> 00:14:29
system actually couldn't work because

00:14:26 --> 00:14:32
they they started doing the math on how

00:14:28 --> 00:14:34
quickly they would need to replace disk

00:14:31 --> 00:14:36
drives and then along comes Google and

00:14:33 --> 00:14:38
they basically pioneered this whole

00:14:35 --> 00:14:40
notion that like all the disk drives

00:14:37 --> 00:14:42
it's not like they're likely to fail

00:14:39 --> 00:14:45
it's that they will fail and so it was

00:14:41 --> 00:14:48
designing a whole system on the on the

00:14:44 --> 00:14:50
presumption of continuous failure which

00:14:47 --> 00:14:52
was like a complete inversion from all

00:14:49 --> 00:14:54
the other systems that had been designed

00:14:51 --> 00:14:56
in a sense I think that the whole

00:14:53 --> 00:14:59
software of a service notion has made

00:14:55 --> 00:15:01
the backend of the services sort of

00:14:58 --> 00:15:02
designed in a biological way but I'm

00:15:00 --> 00:15:04
still fascinated by the fact that the

00:15:01 --> 00:15:07
people at the end of the services still

00:15:04 --> 00:15:08
think of them as physics yeah I don't I

00:15:06 --> 00:15:10
just don't see a tolerance for failure

00:15:07 --> 00:15:11
because what happens is immediately

00:15:09 --> 00:15:13
people start thinking well fine it's

00:15:10 --> 00:15:16
cool if it's Gmail and is down for 18

00:15:12 --> 00:15:18
minutes I guess I could survive but like

00:15:15 --> 00:15:20
that same thought in an airplane kind of

00:15:17 --> 00:15:22
reaks me out you know one of the big

00:15:19 --> 00:15:24
innovations that I'm looking for as we

00:15:21 --> 00:15:27
switch from this deterministic to more

00:15:23 --> 00:15:30
probabilistic population based is the

00:15:26 --> 00:15:33
way that we design test

00:15:29 --> 00:15:35
verify monitor and recover from failures

00:15:32 --> 00:15:37
has got to change and we're in the midst

00:15:34 --> 00:15:39
of that transition right now which is if

00:15:36 --> 00:15:41
you look at monitoring tools they're

00:15:38 --> 00:15:44
going from you know sort of HP openview

00:15:40 --> 00:15:46
to things like signal FX which is you're

00:15:43 --> 00:15:49
looking at populations of servers rather

00:15:45 --> 00:15:50
than individual servers so one of the

00:15:48 --> 00:15:53
things I've been wondering is what's the

00:15:49 --> 00:15:55
big breakthrough that we need to verify

00:15:52 --> 00:15:57
the output of deep learning systems

00:15:54 --> 00:15:59
right which is if these things are

00:15:56 --> 00:16:01
inherently probabilistic how do we test

00:15:58 --> 00:16:02
hem how do we give people the assurance

00:16:00 --> 00:16:05
that it feels like physics at the end

00:16:01 --> 00:16:07
right but inside it's biology and

00:16:04 --> 00:16:10
frankly when it comes to biology we as

00:16:06 --> 00:16:11
humans are actually conditioned to

00:16:09 --> 00:16:13
accept this inherent complexity I mean

00:16:10 --> 00:16:14
you go to the doctor they can't figure

00:16:12 --> 00:16:15
out what's wrong with you you got

00:16:13 --> 00:16:17
another doctor and you keep doing that

00:16:14 --> 00:16:19
and you hear this narrative you know and

00:16:16 --> 00:16:21
even though it's very frustrating it's

00:16:18 --> 00:16:22
almost accepted and I wonder if we'd

00:16:20 --> 00:16:24
ever get to the same point with our

00:16:21 --> 00:16:25
computing systems in terms of

00:16:23 --> 00:16:27
expectations I mean it'll definitely

00:16:24 --> 00:16:28
take a new mindset the perspective I

00:16:26 --> 00:16:31
think people are going to need to

00:16:27 --> 00:16:33
eventually embrace to a certain degree I

00:16:30 --> 00:16:35
would say almost like a humility in the

00:16:32 --> 00:16:37
face of technology and I think I like

00:16:34 --> 00:16:39
often times we kind of tend towards two

00:16:36 --> 00:16:40
extremes of either like when we don't

00:16:38 --> 00:16:41
fully understand a system when we maybe

00:16:39 --> 00:16:43
are confronted with kind of the

00:16:40 --> 00:16:46
biological messiness we either freak out

00:16:42 --> 00:16:47
or we say this is like so incredibly

00:16:45 --> 00:16:50
complicated that there's like this like

00:16:46 --> 00:16:51
reverential awe almost religious sense

00:16:49 --> 00:16:52
of the system like it's so beautiful so

00:16:50 --> 00:16:54
wonderful we're never gonna fully

00:16:51 --> 00:16:56
understand it and I think both extremes

00:16:53 --> 00:16:58
they they end up cutting off questioning

00:16:55 --> 00:16:59
and I can trying to actually understand

00:16:57 --> 00:17:01
this isn't even if we can never fully

00:16:58 --> 00:17:02
understand whether or not you're the

00:17:00 --> 00:17:03
designer or even just the user I think

00:17:01 --> 00:17:05
we need to kind of recognize that

00:17:02 --> 00:17:06
here's going to be this almost like

00:17:04 --> 00:17:09
humble approach to our technological

00:17:05 --> 00:17:10
systems where it's gonna be okay if we

00:17:08 --> 00:17:12
don't fully understand these things and

00:17:09 --> 00:17:14
if they do occasionally fail because

00:17:11 --> 00:17:15
ultimately those failures lead us

00:17:13 --> 00:17:18
towards better understanding so that's a

00:17:14 --> 00:17:19
good thing but there's just going to be

00:17:17 --> 00:17:21
this constant iterative process of

00:17:18 --> 00:17:23
trying to understand these systems we

00:17:20 --> 00:17:25
might never get there but there's

00:17:22 --> 00:17:26
omething exciting about actually trying

00:17:24 --> 00:17:28
to trying to fully understand and

00:17:26 --> 00:17:31
recognizing that these things are messy

00:17:27 --> 00:17:32
and and complex and and so and but still

00:17:30 --> 00:17:33
also something that we actually created

00:17:31 --> 00:17:35
well also when it comes to something we

00:17:32 --> 00:17:37
created we also have to think about the

00:17:34 --> 00:17:39
very combinatorial nature of that

00:17:36 --> 00:17:41
creation and one of my favorite books

00:17:38 --> 00:17:42
here is the nature of technology and how

00:17:40 --> 00:17:44
it evolves by Brian R

00:17:41 --> 00:17:45
what struck me most I mean there's a lot

00:17:43 --> 00:17:46
of things I love about that book but

00:17:44 --> 00:17:49
what struck me most when I was reading

00:17:46 --> 00:17:51
it and and it even applies to how you

00:17:48 --> 00:17:53
guys open this conversation with your

00:17:50 --> 00:17:55
question it is a narrative around

00:17:52 --> 00:17:56
creation and who invented what and we

00:17:54 --> 00:17:58
tend to talk about it

00:17:55 --> 00:18:01
in a very linear way but it's a very

00:17:57 --> 00:18:03
non-linear iterative thing where people

00:18:00 --> 00:18:05
build on each other's ideas and and it's

00:18:02 --> 00:18:07
very messy and complex and I've always

00:18:04 --> 00:18:08
thought that when we tell these stories

00:18:06 --> 00:18:10
we need to do a better job of

00:18:07 --> 00:18:12
acknowledging all of that complexity and

00:18:09 --> 00:18:15
messiness and oh me now the systems are

00:18:11 --> 00:18:18
ven more complex we now build systems

00:18:14 --> 00:18:19
that no one understands and that classic

00:18:17 --> 00:18:22
if I could get a time machine and go

00:18:18 --> 00:18:23
back to like 1952 I'd invent whatever

00:18:21 --> 00:18:24
your favorite product is now and then

00:18:22 --> 00:18:26
you realize you couldn't come up with an

00:18:23 --> 00:18:27
iPhone in 1950 oh yeah it's totally

00:18:25 --> 00:18:29
impossible to do that yeah you just

00:18:26 --> 00:18:30
don't have the knowledge that yeah you

00:18:28 --> 00:18:32
don't have the expertise of other people

00:18:29 --> 00:18:34
to build upon it's simply impossible

00:18:31 --> 00:18:36
there's all these things interacting and

00:18:33 --> 00:18:37
you have to be mindful of every single

00:18:35 --> 00:18:39
one and no one can actually be mindful

00:18:36 --> 00:18:40
of every single one okay well thank you

00:18:38 --> 00:18:42
guys that's all we have time for

00:18:39 --> 00:18:46
and that's another episode of the asics

00:18:41 --> 00:18:46
& z podcast thank you thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
