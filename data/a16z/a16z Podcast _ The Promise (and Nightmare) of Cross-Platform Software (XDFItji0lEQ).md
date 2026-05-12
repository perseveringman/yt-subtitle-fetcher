---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "XDFItji0lEQ"
title: "a16z Podcast | The Promise (and Nightmare) of Cross-Platform Software"
video_url: "https://www.youtube.com/watch?v=XDFItji0lEQ"
thumbnail_url: "https://i.ytimg.com/vi/XDFItji0lEQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=XDFItji0lEQ"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:23:10.000Z"
upload_date: "2019-01-02"
duration_seconds: 991
duration_human: "16:31"
view_count: 50
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:59:17.540Z"
---

# a16z Podcast | The Promise (and Nightmare) of Cross-Platform Software

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=XDFItji0lEQ
- video_id: XDFItji0lEQ
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:23:10.000Z
- upload_date: 2019-01-02
- duration: 16:31
- view_count: 50
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

The announcement by Apple of its new programming language Swift is prompting developers to consider yet again how to tailor their efforts in the battle between iOS and Android. Benedict Evans and Steven Sinofsky discuss the questionable history of cross-platform software, and strategies for startups building apps today. How developers can build great apps on both of the largest mobile platforms. This platform question is one Sinofsky has been grappling with for a very long time, and which he also details in this post: blog.learningbyshipping.com/2013/07/08/…road-ahead/

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
hello and welcome to the a 16z podcast

00:00:04 --> 00:00:09
his is Benedict Evans I'm here today

00:00:06 --> 00:00:11
with Steve Sandusky we're going to spend

00:00:08 --> 00:00:14
a little bit more time thinking about

00:00:10 --> 00:00:16
what Apple announced yesterday at WWDC

00:00:13 --> 00:00:18
in the context of some of the challenges

00:00:15 --> 00:00:19
that our portfolio companies face around

00:00:17 --> 00:00:22
evelopment and particularly

00:00:18 --> 00:00:25
cross-platform development so Steve I

00:00:21 --> 00:00:26
was at WWDC yesterday I kind of

00:00:24 --> 00:00:27
experienced a moment where I four

00:00:25 --> 00:00:28
started talking about a new programming

00:00:26 --> 00:00:30
language and half of them went

00:00:27 --> 00:00:32
completely quiet and the other half went

00:00:29 --> 00:00:33
wow that's really cool and I was in the

00:00:31 --> 00:00:34
house it was going completely quiet

00:00:32 --> 00:00:38
having no idea what these people are

00:00:33 --> 00:00:39
talking about and but coming away from

00:00:37 --> 00:00:41
it

00:00:38 --> 00:00:43
one of the things that you and I were

00:00:40 --> 00:00:45
talking about is that Apple is doing

00:00:42 --> 00:00:47
quite a lot of stuff in one way and

00:00:44 --> 00:00:48
Google is doing quite a lot of stuff in

00:00:46 --> 00:00:50
another that doesn't really have an

00:00:47 --> 00:00:52
alogue on the other platform so if you

00:00:49 --> 00:00:54
were to look at you know Windows and Mac

00:00:51 --> 00:00:57
you have a file picker you have Windows

00:00:53 --> 00:00:59
you have scroll you have you have a

00:00:56 --> 00:01:00
bunch of tools that basically have

00:00:58 --> 00:01:03
direct analogs on the other platform

00:00:59 --> 00:01:04
where it says Apple does more on the one

00:01:02 --> 00:01:06
hand more and more stuff it's about the

00:01:03 --> 00:01:08
hardware and Google does more and more

00:01:05 --> 00:01:10
stuff that's about the cloud and Apple

00:01:07 --> 00:01:12
starts doing its own SDKs that address

00:01:09 --> 00:01:15
the harder in particular ways and does

00:01:11 --> 00:01:17
ibeacon and so on it feels like you

00:01:14 --> 00:01:19
might be building an app that takes

00:01:16 --> 00:01:21
advantage of stuff that does that Apple

00:01:18 --> 00:01:22
gives you that actually does exist on

00:01:20 --> 00:01:23
Android or vice versa so you can't

00:01:21 --> 00:01:25
really do an app that does the same

00:01:22 --> 00:01:28
thing on those what do you think about

00:01:24 --> 00:01:30
hat well I mean I think that first good

00:01:27 --> 00:01:32
morning everybody but I think that

00:01:29 --> 00:01:34
's that's actually sort of this core

00:01:31 --> 00:01:36
challenge you know at the

00:01:33 --> 00:01:39
art the goal of developing a platform

00:01:35 --> 00:01:41
you know has the side effect whether you

00:01:38 --> 00:01:43
think it's intended or otherwise of

00:01:40 --> 00:01:45
making cross-platform development harder

00:01:42 --> 00:01:47
I mean the developers don't come into

00:01:44 --> 00:01:49
work every day thinking how can we

00:01:46 --> 00:01:51
advantage our platform or not they

00:01:48 --> 00:01:54
actually come to work to develop new

00:01:50 --> 00:01:56
scenarios new capabilities and what's

00:01:53 --> 00:01:57
fascinating if you just look at the iOS

00:01:55 --> 00:01:59
and Android with you you know which is

00:01:56 --> 00:02:02
only two of the many platforms including

00:01:58 --> 00:02:04
web or Windows Phone or Chrome that that

00:02:01 --> 00:02:06
people are targeting you know they just

00:02:03 --> 00:02:08
have very different perspectives on on

00:02:05 --> 00:02:10
the architecture or on where to solve

00:02:07 --> 00:02:11
things you have Google very very focused

00:02:09 --> 00:02:13
on cloud services and

00:02:10 --> 00:02:15
because of the nature of hardware you

00:02:12 --> 00:02:18
know they focus on that seam between

00:02:14 --> 00:02:20
hardware and software and so that's just

00:02:17 --> 00:02:22
gonna lead to a whole bunch of different

00:02:19 --> 00:02:24
features and so then you sit down to

00:02:21 --> 00:02:26
write an app and and you're you're sort

00:02:23 --> 00:02:29
of like right away asking yourself these

00:02:25 --> 00:02:31
questions about what to use where now

00:02:28 --> 00:02:32
historically it's really super

00:02:30 --> 00:02:35
interesting because cross-platform sort

00:02:31 --> 00:02:37
of follows a very tried-and-true well

00:02:34 --> 00:02:39
understood pattern which is early in the

00:02:36 --> 00:02:42
volution of sort of what I would call

00:02:38 --> 00:02:44
ike a meta platform like the new thing

00:02:41 --> 00:02:47
whether it's the mainframe

00:02:43 --> 00:02:49
or the wearable or the mobile phone or

00:02:46 --> 00:02:53
the PC they're they're all the platforms

00:02:48 --> 00:02:56
that are competing to win tend to look

00:02:52 --> 00:02:58
ind of the same so early in the PC era

00:02:55 --> 00:03:00
most of the PC ish platforms this is

00:02:57 --> 00:03:02
does I don't mean PC like Doss I mean PC

00:02:59 --> 00:03:03
like thing with a microprocessor yeah

00:03:01 --> 00:03:06
they all had a box in the keyboard and a

00:03:02 --> 00:03:09
command line and a command line and the

00:03:05 --> 00:03:11
api's were about drawing on a screen

00:03:08 --> 00:03:14
and black and ye and reading writing

00:03:10 --> 00:03:16
into a disk and so they all have those

00:03:13 --> 00:03:18
and all the vendors are trying to make

00:03:15 --> 00:03:20
those things and then one day they all

00:03:17 --> 00:03:22
sort of make them and then they start

00:03:19 --> 00:03:23
going well we have to do stuff that we

00:03:21 --> 00:03:25
want to do and then they look to

00:03:22 --> 00:03:27
differentiate their products and then

00:03:24 --> 00:03:29
they look to you know what's their view

00:03:26 --> 00:03:32
of the future and then pretty quickly

00:03:28 --> 00:03:33
they all just start diverging and and so

00:03:31 --> 00:03:35
then everybody was really comfortable

00:03:32 --> 00:03:36
like if you wanted to write a thing that

00:03:34 --> 00:03:38
worked across all the early pcs

00:03:35 --> 00:03:40
abstracting out like basic graphics

00:03:37 --> 00:03:42
they're only like eight api's to begin

00:03:39 --> 00:03:43
with and then file systems there were

00:03:41 --> 00:03:45
another eight and so it was pretty easy

00:03:42 --> 00:03:47
to come up with your own sort of

00:03:44 --> 00:03:50
abstraction and then all of a sudden

00:03:46 --> 00:03:52
like the graphic system turns into like

00:03:49 --> 00:03:54
a bitmap raster graphic system and then

00:03:51 --> 00:03:55
this whole platform thing starts all

00:03:53 --> 00:03:57
over again every basic okay if we just

00:03:54 --> 00:04:00
use set pixel then we can be

00:03:56 --> 00:04:02
cross-platform across all the the raster

00:03:59 --> 00:04:03
systems and then all of a sudden

00:04:01 --> 00:04:06
everybody starts doing their own visuals

00:04:02 --> 00:04:08
their own controls their own metaphors

00:04:05 --> 00:04:11
for for windowing and then that kind of

00:04:07 --> 00:04:13
breaks down and and then like really big

00:04:10 --> 00:04:16
abstract concepts happen like networking

00:04:12 --> 00:04:17
or cross application sharing and and you

00:04:15 --> 00:04:19
know that that all of a sudden it breaks

00:04:16 --> 00:04:22
down and we saw the same thing with the

00:04:18 --> 00:04:23
web you know like the web had hopes of

00:04:21 --> 00:04:24
being cross-platform for

00:04:22 --> 00:04:26
everybody and you looked at HTML and you

00:04:24 --> 00:04:29
said oh cool I have to just write a

00:04:25 --> 00:04:31
rendering engine for these 40 HTML tags

00:04:28 --> 00:04:33
and that worked and then all of a sudden

00:04:30 --> 00:04:34
people started adding other tags I got

00:04:32 --> 00:04:35
harder and harder and harder and then

00:04:33 --> 00:04:36
there were compatibility tests and then

00:04:34 --> 00:04:39
the committee got together and said

00:04:35 --> 00:04:41
we're gonna do html5 but then right when

00:04:38 --> 00:04:43
that happened the vendors started sort

00:04:40 --> 00:04:45
of saying yeah we have other ideas like

00:04:42 --> 00:04:46
Google had a very different idea because

00:04:44 --> 00:04:48
they were trying to build your entire

00:04:45 --> 00:04:51
computing experience into the browser

00:04:47 --> 00:04:54
not just the browser part of it and and

00:04:50 --> 00:04:55
so this pattern just keeps happening I

00:04:53 --> 00:04:57
mean I think you can see that that

00:04:54 --> 00:04:59
inflection point very clearly now with

00:04:56 --> 00:05:01
with smartphones because it feels

00:04:58 --> 00:05:03
like what happened is the original

00:05:00 --> 00:05:04
vision of 7 years ago has got built out

00:05:02 --> 00:05:05
and all the stuff that kind of should

00:05:03 --> 00:05:07
have been in that vision like you know

00:05:04 --> 00:05:09
notifications and multitasking and so on

00:05:06 --> 00:05:11
has got done and it's all there and it's

00:05:08 --> 00:05:13
all been kind of iterated through three

00:05:10 --> 00:05:15
or four versions and now you're kind of

00:05:12 --> 00:05:16
getting to the point we think yes okay

00:05:14 --> 00:05:18
so we've got that platform and we've

00:05:15 --> 00:05:20
done like the stuff that should have

00:05:17 --> 00:05:21
been there but what do we actually think

00:05:19 --> 00:05:24
about what this should look like in it

00:05:21 --> 00:05:26
in another five years time I think the

00:05:23 --> 00:05:28
thing that was very striking about WWDC

00:05:25 --> 00:05:30
is this his whole mean that Apple

00:05:27 --> 00:05:31
doesn't get the cloud and all the stuff

00:05:29 --> 00:05:33
that they were doing was about the cloud

00:05:30 --> 00:05:34
you know all the new features were about

00:05:32 --> 00:05:37
he cloud but it was the cloud as a sort

00:05:33 --> 00:05:39
of invisible bit of plumbing that drives

00:05:36 --> 00:05:41
a rich native app where it's of course

00:05:38 --> 00:05:42
for Google it's exactly the other way

00:05:40 --> 00:05:45
around and say that the thing I said on

00:05:41 --> 00:05:47
Twitter was it for Google all hardware

00:05:44 --> 00:05:48
is just kind of dumb glass that links

00:05:46 --> 00:05:50
back to their cloud whereas for Apple

00:05:47 --> 00:05:52
the cloud is kind of dumb storage that

00:05:49 --> 00:05:53
supports their platform but the

00:05:51 --> 00:05:54
consequence of that if you are very very

00:05:52 --> 00:05:56
different philosophies about what it is

00:05:53 --> 00:05:57
that they're not supposed to be doing or

00:05:55 --> 00:05:59
how it's supposed to go about connecting

00:05:56 --> 00:06:00
to things or using resources right

00:05:58 --> 00:06:02
absolutely and then of course people

00:05:59 --> 00:06:04
come along and they they think like you

00:06:01 --> 00:06:05
know we talked to a portfolio companies

00:06:03 --> 00:06:07
they think about where they are today

00:06:04 --> 00:06:08
and then they look at all the work

00:06:06 --> 00:06:11
that's being done across the to and they

00:06:07 --> 00:06:14
go ok well we can find the 90% that is

00:06:10 --> 00:06:16
ok but it's actually the last 10% that

00:06:13 --> 00:06:18
makes the difference in a quality app

00:06:15 --> 00:06:20
experience on those platforms or a

00:06:17 --> 00:06:22
quality you know back-end and cloud

00:06:19 --> 00:06:24
experience and so it's it's actually not

00:06:21 --> 00:06:26
so straightforward to even carve out

00:06:23 --> 00:06:28
like what's common anymore because

00:06:25 --> 00:06:29
what's common is essentially what the

00:06:27 --> 00:06:31
market is already defined as

00:06:28 --> 00:06:33
commoditized you know like your basics

00:06:30 --> 00:06:34
of making calls and sending messages or

00:06:32 --> 00:06:36
even the basic

00:06:33 --> 00:06:39
of an app or all sort of commoditized

00:06:35 --> 00:06:40
and so as a as a start-up or as a new

00:06:38 --> 00:06:42
app what you have to do is you have to

00:06:39 --> 00:06:44
really really focus on what your

00:06:41 --> 00:06:46
differentiation is gonna be I mean like

00:06:43 --> 00:06:49
I take something like really as as it

00:06:45 --> 00:06:50
could be either as thin or less relevant

00:06:48 --> 00:06:52
as you want it to be or it could be a

00:06:49 --> 00:06:54
huge thing like homekit so it you know

00:06:51 --> 00:06:56
first there's nothing like it on the

00:06:53 --> 00:06:58
Android platform so right away if you

00:06:55 --> 00:06:59
make a device like light switches or

00:06:57 --> 00:07:01
whatever and you're looking you know you

00:06:58 --> 00:07:02
probably already think I'm gonna build

00:07:00 --> 00:07:04
an app and it's gonna have a big you

00:07:01 --> 00:07:06
know on/off toggle and I'm gonna have

00:07:03 --> 00:07:08
rooms and a layout of my house and all

00:07:05 --> 00:07:09
this other stuff and then you know that

00:07:07 --> 00:07:12
looks great on Android and it looks

00:07:08 --> 00:07:14
great on iOS right this minute but then

00:07:11 --> 00:07:14
on iOS you can say to Siri hey I'm going

00:07:13 --> 00:07:18
to bed

00:07:13 --> 00:07:20
right or you just there's a whole app

00:07:17 --> 00:07:22
infrastructure for doing that which then

00:07:19 --> 00:07:24
takes over some of your UI so if you're

00:07:21 --> 00:07:25
an established player you're just gonna

00:07:23 --> 00:07:28
stiff-arm that whole thing and hope it

00:07:24 --> 00:07:30
goes away but while you're doing that

00:07:27 --> 00:07:32
all of these new players are thinking

00:07:29 --> 00:07:33
whoo this is such a relief because now

00:07:31 --> 00:07:35
e don't have to hire a whole software

00:07:32 --> 00:07:37
team we could go and make Apple

00:07:34 --> 00:07:39
certified devices we can build on the

00:07:36 --> 00:07:41
retail presence that Apple has to drive

00:07:38 --> 00:07:43
the devices will be in their stores will

00:07:40 --> 00:07:46
be online will be in their commercials

00:07:42 --> 00:07:48
like there are actual tangible benefits

00:07:45 --> 00:07:51
to building on the platform like to you

00:07:47 --> 00:07:53
as a company and so you're sort of

00:07:50 --> 00:07:54
squeezed if you think you're just going

00:07:52 --> 00:07:56
to ignore it especially if Apple goes

00:07:53 --> 00:07:58
and continues to double down and does

00:07:55 --> 00:07:59
more work and makes the experience

00:07:57 --> 00:08:01
better integrates it with Siri

00:07:58 --> 00:08:03
ntegrates it at the Mac and does like a

00:08:00 --> 00:08:06
bigger cooler dashboard who knows what

00:08:02 --> 00:08:07
hey're gonna do yeah but but and that's

00:08:05 --> 00:08:09
just one of the things I mean you

00:08:06 --> 00:08:11
mentioned photos so now there's a way to

00:08:08 --> 00:08:14
integrate with photos in an even deeper

00:08:10 --> 00:08:15
way so you know normal developers go oh

00:08:13 --> 00:08:17
no big deal I'm just gonna build my own

00:08:14 --> 00:08:18
photo picker I'll ask for permissions to

00:08:16 --> 00:08:20
the library and I'll do my own

00:08:17 --> 00:08:23
thumbnails and enumerate the photos

00:08:19 --> 00:08:25
well except now your app doesn't look

00:08:22 --> 00:08:28
like Android or iOS and you could maybe

00:08:24 --> 00:08:30
try to copy them a little but they're

00:08:27 --> 00:08:33
moving targets so I remember using Lotus

00:08:29 --> 00:08:38
Notes in a miserable period of my life

00:08:32 --> 00:08:39
and the I mean this was a period when it

00:08:37 --> 00:08:41
was kind of a poster boy for kind of

00:08:38 --> 00:08:43
questionable you are choices and one of

00:08:40 --> 00:08:46
the big drivers was you had the same

00:08:42 --> 00:08:48
Lotus Notes UI on every device you might

00:08:45 --> 00:08:49
own yeah and the result was

00:08:47 --> 00:08:53
didn't look like that they didn't look

00:08:48 --> 00:08:55
Viton anything but be just because the

00:08:52 --> 00:08:56
developer knows that it looks the same

00:08:54 --> 00:08:58
on every device the users don't know it

00:08:55 --> 00:08:59
looks the same on every device yeah well

00:08:57 --> 00:09:01
that's the whole thing I mean

00:08:58 --> 00:09:03
cross-platform has always been this like

00:09:00 --> 00:09:05
dream of programmers an empty promise

00:09:02 --> 00:09:07
from our industry you know in a

00:09:04 --> 00:09:09
nightmare for customers because even

00:09:06 --> 00:09:11
today like little things that you

00:09:08 --> 00:09:14
noticed like you know the fact that the

00:09:10 --> 00:09:16
on iOS the the really marquee social

00:09:13 --> 00:09:18
apps are all just better than they are

00:09:15 --> 00:09:20
on Android things like copy paste of

00:09:17 --> 00:09:22
images and sharing and integration with

00:09:19 --> 00:09:25
contacts all are much smoother and more

00:09:21 --> 00:09:28
seamless even though Android is more

00:09:24 --> 00:09:29
xtensible and open by some accounts and

00:09:27 --> 00:09:32
it's because that's where the focus has

00:09:28 --> 00:09:33
been on building a really great job and

00:09:31 --> 00:09:36
you know if you look back historically

00:09:32 --> 00:09:37
like Lotus Notes was just one example I

00:09:35 --> 00:09:39
actually my own first

00:09:36 --> 00:09:42
my very first coding work at Microsoft

00:09:38 --> 00:09:45
back in the 80s basically was building

00:09:41 --> 00:09:46
cross-platform and and you know people

00:09:44 --> 00:09:49
have actually recently told me that some

00:09:45 --> 00:09:52
of that code still lives in the iPad OS

00:09:48 --> 00:09:54
iOS apps for from Microsoft because it's

00:09:51 --> 00:09:56
this Mac and why did we do that library

00:09:53 --> 00:09:59
well because at the time going back to

00:09:55 --> 00:10:01
your original thesis you know what what

00:09:58 --> 00:10:03
differentiated Windows from the Mac was

00:10:00 --> 00:10:05
kind of not very much like Windows were

00:10:02 --> 00:10:08
the sort of the same and and what was

00:10:04 --> 00:10:11
weird is the feedback from Mac customers

00:10:07 --> 00:10:13
back during like that that sort of mid

00:10:10 --> 00:10:15
90s era was that the the Microsoft Mac

00:10:12 --> 00:10:18
apps were starting to diverge too much

00:10:14 --> 00:10:20
from the the Mac platform in fact even

00:10:17 --> 00:10:23
very very early on the Microsoft Mac

00:10:19 --> 00:10:25
programs all had keyboard shortcuts back

00:10:22 --> 00:10:27
when Mac software was not supposed to

00:10:24 --> 00:10:29
have keyboard shortcuts that was a very

00:10:26 --> 00:10:32
big you know quasi-religious debate

00:10:28 --> 00:10:34
about about right-click and keyboard

00:10:31 --> 00:10:36
shortcuts but Microsoft not only thought

00:10:33 --> 00:10:37
hey were just a better idea we we

00:10:35 --> 00:10:39
wanted to have them across all of the

00:10:36 --> 00:10:41
platforms consistently because that was

00:10:38 --> 00:10:42
the value proposition do it much like

00:10:40 --> 00:10:45
your Lotus Notes one but then one day

00:10:42 --> 00:10:47
ou realize that cross-platform is a

00:10:44 --> 00:10:49
developer thing because no one person is

00:10:46 --> 00:10:50
cross-platform

00:10:48 --> 00:10:52
yeah I mean it's a little bit different

00:10:49 --> 00:10:54
with the mobile devices because you are

00:10:51 --> 00:10:56
much more likely to go from an Android

00:10:53 --> 00:10:59
to an iPhone to an Android but only

00:10:55 --> 00:11:01
every two years well not every not every

00:10:58 --> 00:11:03
day yeah

00:11:00 --> 00:11:04
and that still is likely to be an edge

00:11:02 --> 00:11:06
case although actually Apple was talking

00:11:03 --> 00:11:08
yesterday about all the people moving

00:11:05 --> 00:11:10
which which really gets to the heart and

00:11:07 --> 00:11:13
soul of your decision framework from a

00:11:09 --> 00:11:14
business perspective as a as a as a

00:11:12 --> 00:11:17
start-up or building a new app you know

00:11:13 --> 00:11:19
cuz up until like just the past six

00:11:16 --> 00:11:20
months or so I think a lot of and you

00:11:18 --> 00:11:22
know your expert on this but I think a

00:11:19 --> 00:11:23
lot of developers had a tendency to be

00:11:21 --> 00:11:26
developers and look at these sort of

00:11:22 --> 00:11:29
broad aggregate numbers and have big

00:11:25 --> 00:11:31
debates over aggregate share or run Rea

00:11:28 --> 00:11:33
or or even fragmentation when in fact

00:11:30 --> 00:11:35
you have to sort of drill down when

00:11:32 --> 00:11:39
you're making a business choice yeah so

00:11:34 --> 00:11:40
I mean Apple guilty of this is anyone

00:11:38 --> 00:11:42
lse I mean they put up a chart

00:11:39 --> 00:11:45
yesterday where they said well eighty

00:11:41 --> 00:11:47
percent of forty fifty percent of max of

00:11:44 --> 00:11:49
running um the latest version of Mac OS

00:11:46 --> 00:11:51
and a much smaller proportion of them

00:11:48 --> 00:11:53
PCs are running Windows 8 we think you

00:11:50 --> 00:11:55
okay what's the absolute number of PCs

00:11:52 --> 00:11:56
that are running yeah Windows 8 is I bet

00:11:54 --> 00:11:58
it's a lot a lot more than the 80

00:11:55 --> 00:12:00
million Mac's that are out there um so

00:11:57 --> 00:12:01
you have to kind of sit and think about

00:11:59 --> 00:12:02
your target market I've been this you

00:12:00 --> 00:12:04
know there's one can have a whole other

00:12:01 --> 00:12:06
conversation about this but it's one

00:12:03 --> 00:12:09
thing to say that there are you know as

00:12:05 --> 00:12:11
it might be a billion Androids Google

00:12:09 --> 00:12:13
Android's as opposed to Chinese androids

00:12:10 --> 00:12:14
there's as it might be a billion

00:12:12 --> 00:12:16
androids in use at the moment and

00:12:13 --> 00:12:18
there's maybe 400 million iPhones 500

00:12:15 --> 00:12:20
million iPhones something like that but

00:12:17 --> 00:12:24
hen San Francisco is 60% iPhone in the

00:12:19 --> 00:12:26
USA is 50/50 iPhone out Japan is over

00:12:23 --> 00:12:28
50% iPhone now and the rate of that

00:12:25 --> 00:12:30
change and that's swimming Apple is

00:12:27 --> 00:12:32
gaining sharing this yes and then when

00:12:29 --> 00:12:35
you think okay Apple of only selling

00:12:31 --> 00:12:38
$600 devices and Android is selling at a

00:12:34 --> 00:12:40
range of prices so what is the

00:12:37 --> 00:12:42
distribution within those smartphone

00:12:39 --> 00:12:42
owners of people who really really care

00:12:41 --> 00:12:44
about apps

00:12:41 --> 00:12:46
you know the people you bought galaxy s4

00:12:43 --> 00:12:48
care about out but most of the androids

00:12:45 --> 00:12:49
being right not those devices they're

00:12:47 --> 00:12:51
the devices you get when you go into the

00:12:48 --> 00:12:53
store and don't care so you know if you

00:12:50 --> 00:12:56
go to an if you go to India or Indonesia

00:12:52 --> 00:12:57
or Vietnam or China you will get a load

00:12:55 --> 00:12:59
of really aggressive highly engaged

00:12:56 --> 00:13:01
users on Android you go to San Francisco

00:12:58 --> 00:13:02
you won't you go to the USA you're

00:13:00 --> 00:13:05
probably going to find that two-thirds

00:13:01 --> 00:13:07
of the aggressive engaged users or I

00:13:04 --> 00:13:09
think so those aggregate market share

00:13:06 --> 00:13:11
numbers tell you they tell you

00:13:08 --> 00:13:12
relatively little because what they're

00:13:10 --> 00:13:13
ally just telling you is look

00:13:11 --> 00:13:16
everybody on earth is going to have

00:13:12 --> 00:13:18
smartphone and some of these people are

00:13:15 --> 00:13:18
going to be more worth more than others

00:13:17 --> 00:13:20
and some of them going to be in

00:13:18 --> 00:13:24
different places so when you make those

00:13:19 --> 00:13:27
platform decisions yes there is that API

00:13:23 --> 00:13:29
but it's how does that API relate to the

00:13:26 --> 00:13:30
customers that you want to use yeah

00:13:28 --> 00:13:32
ow do those development choices relate

00:13:29 --> 00:13:34
to the addressable market I mean like

00:13:31 --> 00:13:36
ven if you're doing you know something

00:13:33 --> 00:13:37
you know high-end retail

00:13:35 --> 00:13:41
oriented you know if you're doing an app

00:13:36 --> 00:13:42
for a high-end retail brand it's sort of

00:13:40 --> 00:13:44
intimate in the US market it's sort of a

00:13:41 --> 00:13:46
crazy idea I think you need the Android

00:13:43 --> 00:13:48
one first or best when you you know you

00:13:45 --> 00:13:50
already know the demographics of the iOS

00:13:47 --> 00:13:52
customer but conversely you're doing a

00:13:49 --> 00:13:55
communication app that you're likely to

00:13:51 --> 00:13:57
release in in Western Europe or China

00:13:54 --> 00:13:59
first you sort of be crazy to do it on

00:13:56 --> 00:14:01
an iOS first yeah so I have I have a

00:13:58 --> 00:14:03
slide with a kind of a pyramid and an

00:14:00 --> 00:14:05
inverted pyramid and the pyramid is you

00:14:02 --> 00:14:07
know you've got a small portion of the

00:14:04 --> 00:14:09
population that thinks wow I can't wait

00:14:06 --> 00:14:11
o see what new your iPod Beacon apps

00:14:08 --> 00:14:13
are coming out you know not wait to see

00:14:10 --> 00:14:15
what new intense and what cool new stuff

00:14:12 --> 00:14:17
is going to be done on Android you've

00:14:14 --> 00:14:18
got a big chunk of people in the middle

00:14:16 --> 00:14:19
who don't really care and then you've

00:14:17 --> 00:14:22
got another big chunk of people at the

00:14:18 --> 00:14:25
bottom and then when you look at the the

00:14:21 --> 00:14:27
new technologies the really new

00:14:24 --> 00:14:30
cutting-edge stuff applies to a

00:14:26 --> 00:14:31
relatively small portion of the base so

00:14:29 --> 00:14:34
you've got to kind of make that decision

00:14:30 --> 00:14:35
well you know if you are Tiffani's an

00:14:33 --> 00:14:39
ibeacon is really exciting if you're

00:14:34 --> 00:14:41
McDonald's maybe not and that applies to

00:14:38 --> 00:14:43
cross all of this stuff so you know the

00:14:40 --> 00:14:44
cutting edge you know sense if you're

00:14:42 --> 00:14:47
going for the lowest common denominator

00:14:43 --> 00:14:49
of customers the lowest common

00:14:46 --> 00:14:50
denominator of development tools and of

00:14:48 --> 00:14:52
api's and of technologies is probably

00:14:49 --> 00:14:54
going to be the best as well if you're

00:14:51 --> 00:14:55
going for those specific segments then

00:14:53 --> 00:14:57
focusing in on one platform or one

00:14:54 --> 00:14:59
platforms tool is gonna work better

00:14:56 --> 00:15:01
yeah I definitely think that you know

00:14:58 --> 00:15:02
just sort of to wrap up that like you

00:15:00 --> 00:15:04
know certainly if I were thinking about

00:15:01 --> 00:15:06
his now I'd be very focused on figuring

00:15:03 --> 00:15:08
out who our customers are as the driver

00:15:05 --> 00:15:11
for this as opposed to sort of aggregate

00:15:07 --> 00:15:13
market data or geographic data that

00:15:10 --> 00:15:15
could really confuse you into things but

00:15:12 --> 00:15:16
I would also say like we're only at the

00:15:14 --> 00:15:18
very beginning this this really is

00:15:15 --> 00:15:20
almost at a tipping point of these

00:15:17 --> 00:15:22
platforms and so it's very likely that

00:15:19 --> 00:15:23
hings are gonna get more difficult and

00:15:21 --> 00:15:26
iverge even more

00:15:22 --> 00:15:28
probably even more quickly like we don't

00:15:25 --> 00:15:30
even know you know androids up next yeah

00:15:27 --> 00:15:31
we have no we have no idea what I know

00:15:29 --> 00:15:33
it's gonna be in five years time and

00:15:30 --> 00:15:35
yeah you know am I feeling yesterday was

00:15:32 --> 00:15:36
this is almost like iOS too

00:15:34 --> 00:15:38
you know there's just a such a big

00:15:35 --> 00:15:40
change yeah lots of it and you know and

00:15:37 --> 00:15:41
this is one where I kind of want to just

00:15:39 --> 00:15:43
you know this is not a new pattern

00:15:40 --> 00:15:45
you know developers love patterns and

00:15:42 --> 00:15:46
this is not a new pattern we have seen

00:15:44 --> 00:15:49
this movie before so just encourage

00:15:45 --> 00:15:51
verybody to really think hard about you

00:15:48 --> 00:15:53
know this least common denominator or

00:15:50 --> 00:15:53
trying to thread the needle because

00:15:52 --> 00:15:56
historically

00:15:52 --> 00:15:58
it's put you at a disadvantage over time

00:15:55 --> 00:16:00
to your domain-specific competitors and

00:15:57 --> 00:16:03
so if you've got the opportunity to

00:15:59 --> 00:16:04
either focus on one platform or treat it

00:16:02 --> 00:16:06
almost like you're building two products

00:16:03 --> 00:16:09
and really really focus your energy on

00:16:05 --> 00:16:10
being great on both and I think that's

00:16:08 --> 00:16:11
just going to be the sustainable

00:16:09 --> 00:16:16
competitive advantage for any company

00:16:10 --> 00:16:17
building mobile apps right now yep so

00:16:15 --> 00:16:19
Steve thank you very much that was

00:16:16 --> 00:16:20
really interesting and we're gonna carry

00:16:18 --> 00:16:22
on trying to work out what we think

00:16:19 --> 00:16:23
about this sure so and also follow this

00:16:21 --> 00:16:25
one on Twitter because I bet there are

00:16:22 --> 00:16:27
some strong opinions and we'll also post

00:16:24 --> 00:16:29
a link to a pretty long blog post I had

00:16:26 --> 00:16:32
a while back on cross-platform

00:16:28 --> 00:16:32
development yeah thanks a lot great

<!-- YOUTUBE_TRANSCRIPT_END -->
