---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "kl2Flp4oK-g"
title: "Inside the Apple Factory: Software Design in the Age of Steve Jobs"
video_url: "https://www.youtube.com/watch?v=kl2Flp4oK-g"
thumbnail_url: "https://i.ytimg.com/vi/kl2Flp4oK-g/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=kl2Flp4oK-g"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-02-24T17:13:11.000Z"
upload_date: "2019-02-24"
duration_seconds: 5785
duration_human: "1:36:25"
view_count: 43117
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:38:01.965Z"
---

# Inside the Apple Factory: Software Design in the Age of Steve Jobs

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=kl2Flp4oK-g
- video_id: kl2Flp4oK-g
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-02-24T17:13:11.000Z
- upload_date: 2019-02-24
- duration: 1:36:25
- view_count: 43117
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: Apple, Steve Jobs, design, software, engineering, HCI, UI, UX, iOS, MacOS, iPhone, iPad, Safari, browser, keyboard, open source, user interface, human interface, a16z, Andreessen Horowitz, best practices, Scott Forstall, Auto-Correct, Mozilla, Netscape, Konquerer, Linux, inside the apple factory, ken kocienda, steve jobs
- categories: Science & Technology

## Description

Even though hundreds of millions of people use Apple products every single day, very few people have been able to reveal the secrets and the stories behind designing them. But software engineer Ken Kocienda, who worked there in the final years of the Steve Jobs era -- "the Golden Age of Apple" -- offers an inside look at Apple's creative process in his widely acclaimed book, Creative Selection. He's the "Directly Responsible Individual" (more on that title within!) for designing iPhone multi-touch and much more under the watchful eye of Steve Jobs... who, by the way, would have been 64 years old today.

This is an insider’s account of creativity — with lessons for software design and product management for anyone — because it delves into experiments around designing novel user interfaces, as well as the deep questions many companies face around organizing creativity and the creative decision-making process. Especially given a strong leader (and product visionary like Steve Jobs). a16z Deal and Research operating partner Frank Chen — formerly VP of Products and UI Design at HP Software as well as VP of Product Development at a consumer-facing startup before that, and Director of Product Management at Netscape and product manager at Oracle too — interviews Kocienda in this in-depth video interview all about product design.

This conversation is the golden ticket into the Golden Age of design, with lessons for any software developer, product manager, organizational leader, or maker. Enter this video… and feel free to explore the different topics labeled throughout:

-- How Apple thought about open source in 2001
-- The role of demos in Apple’s software development process
-- Career management fork in the road: ship teams or ship products?
-- The Apple notion of a “Directly Responsible Individual”
-- Apple’s extreme secrecy: feature or bug?
-- How the team decided to ship iPhone OS without copy and paste
-- The scariest room in SIlicon Valley: demo’ing to Steve Jobs
-- Was there too much hero worship at Apple?
-- The role of whimsy and playfulness in designing software
-- Did waiting for Steve to make decisions slow decision-making?

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
well welcome to the a 16z YouTube

00:00:02 --> 00:00:09
channel I'm Frank Chen and today I am so

00:00:05 --> 00:00:11
excited I feel like I have won the

00:00:08 --> 00:00:13
golden ticket to Willy Wonka's factory

00:00:10 --> 00:00:16
Chocolate Factory because look if you're

00:00:12 --> 00:00:18
in Silicon Valley the one Chocolate

00:00:15 --> 00:00:21
Factory you want you're desperate to go

00:00:17 --> 00:00:24
visit is Apple and the reason for that

00:00:20 --> 00:00:25
is Apple has consistently over its

00:00:23 --> 00:00:28
history turned out some of the most

00:00:24 --> 00:00:32
intuitive and delightful and just plain

00:00:27 --> 00:00:35
awesome products that people use and

00:00:31 --> 00:00:37
people are dying to find out how is it

00:00:34 --> 00:00:41
hen Apple makes such delightful

00:00:36 --> 00:00:44
products and so today I'm here with Ken

00:00:40 --> 00:00:47
da and I'm so excited for him to tell

00:00:43 --> 00:00:49
us all about the creative process that

00:00:46 --> 00:00:51
he used and his team used to create

00:00:48 --> 00:00:52
these products so Ken thank you so much

00:00:50 --> 00:00:54
for coming well thank you so much it's

00:00:51 --> 00:00:56
great to be here with you yeah well

00:00:53 --> 00:00:59
et's get right into it so maybe talk a

00:00:55 --> 00:01:02
little bit about how you ended up at

00:00:58 --> 00:01:03
Apple because like on paper you don't

00:01:01 --> 00:01:06
look like the typical software engineer

00:01:02 --> 00:01:09
so go back and do the long route like

00:01:05 --> 00:01:12
where were you born and oh well I was I

00:01:08 --> 00:01:14
was born in New York stayed there are on

00:01:11 --> 00:01:16
Long Island and outstate grew up close

00:01:13 --> 00:01:20
to beaches lived there until I went away

00:01:15 --> 00:01:23
to college I went to Yale and got a

00:01:19 --> 00:01:25
degree in history and then after I

00:01:22 --> 00:01:26
graduated from Yale I I didn't do the

00:01:24 --> 00:01:28
typical thing I went to motorcycle

00:01:25 --> 00:01:31
mechanic school really mm-hmm

00:01:27 --> 00:01:33
Ivy League to me and what motivated that

00:01:30 --> 00:01:37
like you to learn how to fix motorcycles

00:01:32 --> 00:01:38
well I when I when I graduated from from

00:01:36 --> 00:01:41
college I wanted to do something that

00:01:37 --> 00:01:44
was as different from Ivy League yeah

00:01:40 --> 00:01:49
College as possible yeah I think that

00:01:43 --> 00:01:51
qualifies right to my to my to my

00:01:48 --> 00:01:53
parents my father in particular I can

00:01:50 --> 00:02:01
tell you I'm sure but yeah so I least

00:01:52 --> 00:02:05
you didn't have an Asian parent was

00:02:00 --> 00:02:08
pretty pretty pretty confused yeah about

00:02:04 --> 00:02:09
he choice anyway so but but eventually

00:02:07 --> 00:02:12
ou know they got behind it and

00:02:08 --> 00:02:14
supported that and so I fixed

00:02:11 --> 00:02:16
motorcycles and then

00:02:13 --> 00:02:17
I I wasn't really quite sure what I

00:02:15 --> 00:02:23
wanted to do I had this degree in

00:02:16 --> 00:02:25
history but I wanted to you know kind of

00:02:22 --> 00:02:27
keep following my nose so you find new

00:02:24 --> 00:02:30
and interesting things to do I also did

00:02:26 --> 00:02:32
a lot of work in photography when I was

00:02:29 --> 00:02:33
at you know I spent a lot of time and

00:02:31 --> 00:02:35
the art and architecture library on the

00:02:33 --> 00:02:37
Yale campus just found me doing reading

00:02:34 --> 00:02:40
books learning about art yeah beautiful

00:02:36 --> 00:02:42
buildings yeah for sure yeah very very

00:02:39 --> 00:02:45
interesting architecture did the art and

00:02:41 --> 00:02:47
architecture building in particular well

00:02:44 --> 00:02:49
anyway so I became more interested in

00:02:46 --> 00:02:50
photography I want I went up getting a

00:02:48 --> 00:02:52
job at a newspaper in the New York area

00:02:49 --> 00:02:54
Newsday

00:02:51 --> 00:02:56
did two years there working in their

00:02:53 --> 00:03:01
editorial library in the folk in there

00:02:55 --> 00:03:02
with their photo archive but then I kind

00:03:00 --> 00:03:04
of decided that wasn't really going

00:03:01 --> 00:03:05
anywhere fast enough so I moved to Japan

00:03:03 --> 00:03:07
Wow

00:03:04 --> 00:03:09
and I had a three-part plan for going to

00:03:06 --> 00:03:14
Japan I was gonna photograph myself make

00:03:08 --> 00:03:15
a portfolio of my own work and I I

00:03:13 --> 00:03:17
thought that it might be interesting to

00:03:14 --> 00:03:26
get some teaching experience if I taught

00:03:16 --> 00:03:29
English and I was chasing a girl right

00:03:25 --> 00:03:31
photograph teach chase a girl right I

00:03:28 --> 00:03:33
wound up catching the girl and so we've

00:03:30 --> 00:03:36
been married for it could be 25 years

00:03:32 --> 00:03:42
they congratulate a couple a couple

00:03:35 --> 00:03:44
awesome and so after that I took that of

00:03:41 --> 00:03:46
the portfolio of work that I put

00:03:43 --> 00:03:48
ogether two years in Japan and apply to

00:03:45 --> 00:03:51
a fine arts program at the Rochester

00:03:47 --> 00:03:55
Institute of Technology for a Master of

00:03:50 --> 00:03:57
Fine Arts and a degree program but it

00:03:54 --> 00:04:00
was there that I discovered the

00:03:56 --> 00:04:03
worldwide web yeah and so I put my plans

00:03:59 --> 00:04:06
to be a fine art photographer or maybe a

00:04:02 --> 00:04:07
professor of photography or you know

00:04:05 --> 00:04:09
putting together the teaching experience

00:04:06 --> 00:04:12
with photography I just set that aside

00:04:08 --> 00:04:15
yeah and because I saw the web for the

00:04:11 --> 00:04:17
first time this probably 1994 and I

00:04:14 --> 00:04:22
thought was the most amazing thing so

00:04:16 --> 00:04:24
mosaic when and and that the professor

00:04:21 --> 00:04:26
oddly enough loaded up you know one of

00:04:23 --> 00:04:26
the few websites comparatively that was

00:04:25 --> 00:04:29
avail

00:04:25 --> 00:04:32
yeah Yahoo when it was text oh right

00:04:28 --> 00:04:34
and so to me that the the interest

00:04:31 --> 00:04:36
was I'm gonna make photos show up on

00:04:33 --> 00:04:40
this thing I'm taking my experience my

00:04:35 --> 00:04:42
love of fine art and and and liberal

00:04:39 --> 00:04:44
arts and figure out how to make that

00:04:41 --> 00:04:46
come alive on the web and I just wound

00:04:43 --> 00:04:49
up getting more and more into

00:04:45 --> 00:04:52
programming I I graduated or I left RIT

00:04:48 --> 00:04:54
without graduating with any degree but I

00:04:51 --> 00:04:56
that time I learned enough to go get a

00:04:53 --> 00:04:59
job and what development company and

00:04:55 --> 00:05:01
wound up making websites and and this

00:04:58 --> 00:05:03
tartup that startup the next startup

00:05:00 --> 00:05:08
yeah I landed up I had a company called

00:05:02 --> 00:05:12
easel erected Linux software development

00:05:07 --> 00:05:17
making Desktop Linux right every year is

00:05:11 --> 00:05:18
the year of we thought there 99 or 2000

00:05:16 --> 00:05:21
was going to be the year of Desktop

00:05:17 --> 00:05:24
Linux it turned out not to be but um be

00:05:20 --> 00:05:25
but you worked on the Natas

00:05:23 --> 00:05:27
Nautilus file but I worked I actually

00:05:24 --> 00:05:29
worked on the portion of Nautilus that

00:05:26 --> 00:05:33
connected to these sort of proto cloud

00:05:28 --> 00:05:36
services right and it was a time

00:05:32 --> 00:05:37
interestingly for for where I am here in

00:05:35 --> 00:05:39
recent heart which we host our cloud

00:05:37 --> 00:05:46
services at lab class Wow

00:05:38 --> 00:05:48
thank you very much yes yes and so we we

00:05:45 --> 00:05:50
nt ahead with that project but of

00:05:47 --> 00:05:51
course that company didn't succeed

00:05:49 --> 00:05:53
yeah but of course ezal had this

00:05:50 --> 00:05:56
long-standing connection through some of

00:05:52 --> 00:05:57
its principles Andy Hertzfeld my voyage

00:05:55 --> 00:06:00
but triple yeah

00:05:56 --> 00:06:03
the legends right and the media that got

00:05:59 --> 00:06:06
me an introduction to Apple yeah story

00:06:02 --> 00:06:08
started Apple at 2001 and start getting

00:06:05 --> 00:06:10
into making the web browser for Apple

00:06:07 --> 00:06:13
was my first first project that's

00:06:09 --> 00:06:15
fantastic and why don't we get into that

00:06:12 --> 00:06:18
story because as you tell in the book he

00:06:14 --> 00:06:20
sort of started experimenting with the

00:06:17 --> 00:06:21
old netscape codebase right right but

00:06:19 --> 00:06:24
he

00:06:20 --> 00:06:26
called Mozilla I guess yeah by then but

00:06:23 --> 00:06:28
you ultimately didn't go that way right

00:06:25 --> 00:06:29
well you see it you know it's it's sort

00:06:27 --> 00:06:32
of interesting and maybe we'll get into

00:06:28 --> 00:06:35
this more than as we as we talk the way

00:06:31 --> 00:06:37
that Apple worked in this period during

00:06:34 --> 00:06:40
the Steve Jobs era is that he would set

00:06:36 --> 00:06:43
his vision and so his vision was we a

00:06:39 --> 00:06:48
poll needs its own web browser so at the

00:06:42 --> 00:06:50
time when I joined in 2001 Mac os10 did

00:06:47 --> 00:06:52
you know the new version of the desktop

00:06:49 --> 00:06:56
erating system replacing the old

00:06:51 --> 00:06:59
classic version of Mac OS that had been

00:06:55 --> 00:07:00
tripping on the computer since the 80s

00:06:58 --> 00:07:05
right right so came along with this UNIX

00:06:59 --> 00:07:07
based replacement but that system didn't

00:07:04 --> 00:07:09
have its own one web browser it was

00:07:06 --> 00:07:10
till part of the agreement that had

00:07:08 --> 00:07:13
been made a couple of years earlier with

00:07:09 --> 00:07:16
Microsoft to provide Apple with it with

00:07:12 --> 00:07:18
one browser so Lord right when Bill

00:07:15 --> 00:07:20
invested that's right he brought her

00:07:17 --> 00:07:21
office to the Mac and then ie became the

00:07:19 --> 00:07:23
default browser correct people don't

00:07:20 --> 00:07:26
remember this anything correct but that

00:07:22 --> 00:07:28
was that was the that was the situation

00:07:25 --> 00:07:31
that Apple was in is that this this

00:07:27 --> 00:07:33
exciting new technology the web was

00:07:30 --> 00:07:35
omething that wasn't under its own

00:07:32 --> 00:07:38
control and so that the you know the

00:07:34 --> 00:07:40
vision for Apple back then and and even

00:07:37 --> 00:07:42
still today is that Apple wants to be in

00:07:39 --> 00:07:46
control of what it considers to be

00:07:41 --> 00:07:48
critical technology that gets critical

00:07:45 --> 00:07:50
to its future critical to its user

00:07:47 --> 00:07:52
experience yeah and as all the operating

00:07:49 --> 00:07:54
system companies decided right the bread

00:07:51 --> 00:07:56
browser was critical it wasn't an

00:07:53 --> 00:07:58
optional add-on component and Netscape

00:07:55 --> 00:08:01
and Microsoft famously got into a legal

00:07:57 --> 00:08:03
battle sure over this so Apple arrived

00:08:00 --> 00:08:05
at the same insight yeah and then

00:08:02 --> 00:08:07
interestingly the two code bases that

00:08:04 --> 00:08:10
you consider to get Safari off the

00:08:06 --> 00:08:12
ground were Mozilla right the far

00:08:09 --> 00:08:15
netscape code base and then conquer

00:08:11 --> 00:08:18
which was a linux web browser and they

00:08:14 --> 00:08:19
were both open source and so talk to me

00:08:17 --> 00:08:21
about what it felt like at the time to

00:08:18 --> 00:08:23
be looking at open source inside apple

00:08:20 --> 00:08:25
which is a famous sort of like will

00:08:22 --> 00:08:29
build all ours and it was interesting

00:08:24 --> 00:08:31
that that the executives people like

00:08:28 --> 00:08:35
vita manian who was

00:08:30 --> 00:08:37
the chief software VP at that time and

00:08:34 --> 00:08:40
Steve we're we're willing to consider

00:08:36 --> 00:08:43
open source but just to give it you know

00:08:39 --> 00:08:46
a brief summary of our full

00:08:42 --> 00:08:49
investigation we we've we considered

00:08:45 --> 00:08:51
writing a fresh we also considered going

00:08:48 --> 00:08:53
out and licensing from a company like

00:08:50 --> 00:08:55
opera that was the clear of many

00:08:52 --> 00:08:59
licensee browsers but right right and so

00:08:54 --> 00:09:01
but we we Don Melton and I which was the

00:08:58 --> 00:09:05
two people we we joined on the same day

00:09:00 --> 00:09:07
in 2001 and to begin this this browser

00:09:04 --> 00:09:10
investigation and we looked at open

00:09:06 --> 00:09:11
source because it was we were a team of

00:09:09 --> 00:09:13
two people and web browsers pretty

00:09:10 --> 00:09:15
complicated thing if you right it's

00:09:12 --> 00:09:18
harder than it looks it's harder than it

00:09:14 --> 00:09:21
looks so we thought that if we could

00:09:17 --> 00:09:24
make a compelling case to use open

00:09:20 --> 00:09:26
source as a way to jump ahead in the

00:09:23 --> 00:09:30
ffort you know stand on the shoulders

00:09:25 --> 00:09:32
of giants right you know it would get us

00:09:29 --> 00:09:34
to a point where we would have something

00:09:31 --> 00:09:38
sooner and and that was really the goal

00:09:33 --> 00:09:41
and it being open source if we took the

00:09:37 --> 00:09:44
software from say another platform that

00:09:40 --> 00:09:46
neither Mozilla nor Conqueror worked on

00:09:43 --> 00:09:47
the Mac so we were gonna have this

00:09:45 --> 00:09:51
opportunity to bring this code from

00:09:46 --> 00:09:54
elsewhere and make it Apple's own and

00:09:50 --> 00:09:56
really make it look and feel like it

00:09:53 --> 00:09:58
was a native program to the Mac so that

00:09:55 --> 00:10:00
was that was and and and looking at that

00:09:57 --> 00:10:02
it really just came down to conquer was

00:09:59 --> 00:10:04
one tenth of the size of Mozilla and so

00:10:01 --> 00:10:07
as a two-person team that soon

00:10:03 --> 00:10:10
thereafter a three-person team this just

00:10:06 --> 00:10:12
was the the easiest way to get from

00:10:09 --> 00:10:14
where we were to where we wanted to be

00:10:11 --> 00:10:15
yeah it makes sense I mean people don't

00:10:13 --> 00:10:18
remember this about the early days of

00:10:14 --> 00:10:20
the browser but when we ship Netscape we

00:10:17 --> 00:10:22
had to do it on 20 platforms so every

00:10:19 --> 00:10:24
build was a all right here's the one for

00:10:21 --> 00:10:25
Erick's here's the one for digital unix

00:10:23 --> 00:10:27
here's the one for AIX here's the one

00:10:24 --> 00:10:31
for hp-ux and here's by the way is

00:10:26 --> 00:10:36
Windows 95 windows 98 windows NT like it

00:10:30 --> 00:10:37
was a cross-platform exercise right you

00:10:35 --> 00:10:39
know the code based sort of grew and

00:10:36 --> 00:10:42
grew sure and so we only had to do that

00:10:38 --> 00:10:44
once and that we took this Linux write

00:10:41 --> 00:10:46
code and brought it over to the Mac

00:10:43 --> 00:10:47
yeah and and of course it was a

00:10:45 --> 00:10:49
challenge for us so I can only imagine

00:10:46 --> 00:10:51
what it would be to kind of keep all of

00:10:48 --> 00:10:52
these platforms going concurrently as

00:10:50 --> 00:10:54
you're you're trying to make

00:10:51 --> 00:10:55
improvements and head features and make

00:10:53 --> 00:10:59
things better yeah

00:10:54 --> 00:11:00
and so you ultimately decided on the

00:10:58 --> 00:11:02
conquer codebase is sort of your

00:10:59 --> 00:11:04
starting point and then pretty early in

00:11:01 --> 00:11:06
the development process you ended up

00:11:03 --> 00:11:09
building a stopwatch the the PLT right

00:11:05 --> 00:11:11
and so maybe talk a little bit about

00:11:08 --> 00:11:13
hat why did you decide to do that and

00:11:10 --> 00:11:16
then ultimately flash-forward like when

00:11:12 --> 00:11:18
Steve announced the browser he would say

00:11:15 --> 00:11:20
this is the fastest like it was one of

00:11:17 --> 00:11:22
the key features right and did you know

00:11:19 --> 00:11:24
at the time that you built the stopwatch

00:11:21 --> 00:11:26
that he was gonna do that or yeah like

00:11:23 --> 00:11:29
what did you get lucky so no no we

00:11:25 --> 00:11:33
didn't it was not luck at all Steve was

00:11:28 --> 00:11:36
very very clear to us and from at a very

00:11:32 --> 00:11:40
early stage in our browser development

00:11:35 --> 00:11:41
process was that well of course he

00:11:39 --> 00:11:43
wanted to deliver the best experience

00:11:40 --> 00:11:46
out to customers that's that that was it

00:11:42 --> 00:11:48
he wanted to you put a smile on the

00:11:45 --> 00:11:51
users face right and so if you think

00:11:47 --> 00:11:53
about the challenge that we had there

00:11:50 --> 00:11:56
was this existing browser on the

00:11:52 --> 00:11:58
platform right Microsoft that people

00:11:55 --> 00:12:00
were familiar with right and so now

00:11:57 --> 00:12:02
e're gonna come along and we say well

00:11:59 --> 00:12:06
no oh you you had that other thing here

00:12:01 --> 00:12:08
is this new browser that we want you to

00:12:05 --> 00:12:12
use it's Apple's own browser and well

00:12:07 --> 00:12:14
what is going to convince people to make

00:12:11 --> 00:12:15
the change yeah and so Steve thought

00:12:13 --> 00:12:17
well we're gonna need a compelling

00:12:14 --> 00:12:20
argument it's it and and to be

00:12:16 --> 00:12:25
compelling it needs to be simple and so

00:12:19 --> 00:12:27
his idea his vision was look we we need

00:12:24 --> 00:12:29
to make this thing perform fast again

00:12:26 --> 00:12:31
thinking back to the time that the

00:12:28 --> 00:12:33
network wasn't so fast I mean some

00:12:30 --> 00:12:36
people were getting you know maybe

00:12:32 --> 00:12:36
broadband at the office but certainly at

00:12:35 --> 00:12:39
home

00:12:35 --> 00:12:42
there's the denial I love right and and

00:12:38 --> 00:12:47
so anything we could do to sir speed up

00:12:41 --> 00:12:49
the the browsing experience was was

00:12:46 --> 00:12:51
omething that would would be attractive

00:12:48 --> 00:12:55
to people people would notice and so he

00:12:50 --> 00:12:57
said browser team you need to figure out

00:12:54 --> 00:13:03
how to make this browser fast you told

00:12:56 --> 00:13:05
us this year plus ahead of time so this

00:13:02 --> 00:13:07
PLT the page load test is a PL T

00:13:04 --> 00:13:10
stands for was this performance tool

00:13:06 --> 00:13:12
that we used during our daily

00:13:09 --> 00:13:16
development so that every code check-in

00:13:11 --> 00:13:18
that we had we would run our our page

00:13:15 --> 00:13:21
load test to see that there were no

00:13:17 --> 00:13:23
speed regressions we we had this this

00:13:20 --> 00:13:26
idea that was really dawn Melton's idea

00:13:22 --> 00:13:28
was the manager of the team he had this

00:13:25 --> 00:13:33
little bit of sneaky logic where he

00:13:27 --> 00:13:38
said okay team if we check in code and

00:13:32 --> 00:13:41
it doesn't make any speed regression

00:13:37 --> 00:13:44
ly two things can happen either the

00:13:40 --> 00:13:47
code will remain the same speed or it'll

00:13:43 --> 00:13:49
get faster right and and again it's just

00:13:46 --> 00:13:51
is one of these simple things that just

00:13:48 --> 00:13:54
urns out to be this profound truth

00:13:50 --> 00:13:58
because as we would go over them you

00:13:53 --> 00:14:00
know the weeks the months hundreds and

00:13:57 --> 00:14:03
hundreds of check-ins

00:13:59 --> 00:14:04
that's what happened either the the the

00:14:02 --> 00:14:07
code either stayed the same or it got

00:14:03 --> 00:14:08
faster and overtime because there was

00:14:06 --> 00:14:10
this speed priority Cumbre straight from

00:14:07 --> 00:14:13
Steve we would look for ways to make it

00:14:09 --> 00:14:16
faster yeah and and eventually the

00:14:12 --> 00:14:19
Safari as when it was released it was

00:14:15 --> 00:14:22
three times faster then msie at at

00:14:18 --> 00:14:23
loading web pages yeah so they wait and

00:14:21 --> 00:14:26
then the point is again you know this

00:14:22 --> 00:14:29
you know Steve Jobs going out on

00:14:25 --> 00:14:31
stage you know he has this reputation of

00:14:28 --> 00:14:33
being this great marketer you know the

00:14:30 --> 00:14:36
reality distortion field anything that

00:14:32 --> 00:14:38
Steve says you'll believe just because

00:14:35 --> 00:14:40
he has this dude through the sheer force

00:14:37 --> 00:14:44
of his personality but this was more of

00:14:39 --> 00:14:46
a matter of just of him just saying well

00:14:43 --> 00:14:48
we executed on this plan we got a great

00:14:45 --> 00:14:50
result and here it is so I love this

00:14:47 --> 00:14:52
idea that sort of Steve set this goal

00:14:49 --> 00:14:53
early on ship the fastest router that

00:14:51 --> 00:14:55
you can ship because when I launched it

00:14:52 --> 00:14:58
like that's what I'm gonna talk about

00:14:54 --> 00:14:59
right and as I was thinking about sort

00:14:57 --> 00:15:04
of basically the software development

00:14:58 --> 00:15:05
process you know it's rare for a CEO of

00:15:03 --> 00:15:07
a big company and Apple was a big

00:15:04 --> 00:15:08
company back then Jerry so intimately

00:15:06 --> 00:15:10
involved in the planning

00:15:07 --> 00:15:12
process and sort of how important do you

00:15:09 --> 00:15:17
think that was to sort of your age of

00:15:11 --> 00:15:21
design yeah I I think the way that Steve

00:15:16 --> 00:15:26
organized the company and and built the

00:15:20 --> 00:15:28
team's built the culture was an

00:15:25 --> 00:15:30
essential part of how we did our work

00:15:27 --> 00:15:33
and and the way I like to describe it is

00:15:29 --> 00:15:37
that Apple was this wonderful

00:15:32 --> 00:15:41
combination of top-down leadership and

00:15:36 --> 00:15:45
bottom-up contributions so it's Steve

00:15:40 --> 00:15:47
the top-down part I think is almost well

00:15:44 --> 00:15:49
known Steve was was very very clear he

00:15:46 --> 00:15:53
could be I was you know domineering yeah

00:15:48 --> 00:15:56
right in in in in pushing his vision

00:15:52 --> 00:15:59
forward right so when you worked at

00:15:55 --> 00:16:03
Apple yeah in software development you

00:15:58 --> 00:16:04
knew what the vision was that was

00:16:02 --> 00:16:06
always very very clearly communicated

00:16:03 --> 00:16:08
but it still was just a vision now

00:16:05 --> 00:16:11
sometimes he would get specific but most

00:16:07 --> 00:16:12
of the time he just would tell us I want

00:16:10 --> 00:16:17
a great browser and it's got to be fast

00:16:11 --> 00:16:22
and so with that as a brief handed over

00:16:16 --> 00:16:25
to the the engineering team it was our

00:16:21 --> 00:16:26
job to figure out how to do it and and

00:16:24 --> 00:16:28
so then that's where the bottom-up

00:16:25 --> 00:16:30
contribution comes from he didn't say I

00:16:27 --> 00:16:32
want you to make a performance test and

00:16:29 --> 00:16:34
I want you to Institute this policy

00:16:31 --> 00:16:37
where every check-in doesn't allow any

00:16:33 --> 00:16:40
speed regressions no no we came up with

00:16:36 --> 00:16:43
at providing that bottom-up

00:16:39 --> 00:16:45
contribution that that helped to realize

00:16:42 --> 00:16:47
the vision and then one of these other

00:16:44 --> 00:16:49
things and perhaps we'll get into it a

00:16:46 --> 00:16:51
little more as we go because it is such

00:16:48 --> 00:16:55
an important part of Apple's culture is

00:16:50 --> 00:16:58
that there would be demos so we would

00:16:54 --> 00:17:01
periodically I remember quite clearly

00:16:57 --> 00:17:06
there was a 0.1 there was a 0.2 demo

00:17:00 --> 00:17:09
where we needed to demonstrate the the

00:17:05 --> 00:17:11
strengths and the potential of this open

00:17:08 --> 00:17:13
source idea of the sort of the conquer

00:17:10 --> 00:17:17
source code that we had chosen and of

00:17:12 --> 00:17:20
our porting plan and efforts before they

00:17:16 --> 00:17:23
would commit to going through to the

00:17:19 --> 00:17:28
project to go from 0.221 that oh

00:17:22 --> 00:17:30
yeah so it was Steve at the demo he

00:17:27 --> 00:17:32
would see would see the the code yeah

00:17:29 --> 00:17:34
they're very very often yes sir that's a

00:17:31 --> 00:17:36
little unusual I compare that to sort of

00:17:33 --> 00:17:38
a typical Silicon Valley company where

00:17:35 --> 00:17:41
like you're doing these demos frequently

00:17:37 --> 00:17:43
right and so in general you sort of

00:17:40 --> 00:17:45
think of the CEO of a company this size

00:17:42 --> 00:17:47
not being involved in every single

00:17:44 --> 00:17:49
milestone right because you're Safari on

00:17:46 --> 00:17:51
Mac OS mac OS is one of the many

00:17:48 --> 00:17:53
products that Mac or that Apple was

00:17:50 --> 00:17:56
hipping at the time and so liked it so

00:17:52 --> 00:17:57
it was it seems unusual that the CEO

00:17:55 --> 00:17:58
would be involved in this many demo

00:17:56 --> 00:18:00
points and how important do you think

00:17:57 --> 00:18:01
that is to sort of see and I'm actually

00:17:59 --> 00:18:04
gonna dispute one of the things that

00:18:00 --> 00:18:07
hey said if I may is that certainly

00:18:03 --> 00:18:10
during the Steve Jobs era and and I

00:18:06 --> 00:18:12
still think to to today here in 2019

00:18:09 --> 00:18:16
Apple didn't ship a whole lot of

00:18:11 --> 00:18:19
products back then Steve quite famously

00:18:15 --> 00:18:22
when he reestablished control over the

00:18:18 --> 00:18:25
company he came up with that that that

00:18:21 --> 00:18:27
product matrix right where

00:18:24 --> 00:18:29
we're gonna have you know consumer

00:18:26 --> 00:18:31
product the pro product a desktop

00:18:28 --> 00:18:33
roduct and a portable product right and

00:18:30 --> 00:18:35
so we've got four products and it's the

00:18:32 --> 00:18:38
same operating system and right Mac OS

00:18:34 --> 00:18:40
and so is actually very very few

00:18:37 --> 00:18:45
products now interestingly when I when I

00:18:39 --> 00:18:47
joined Apple in in June of 2001 Mac os10

00:18:44 --> 00:18:48
had come out and so he had that two-part

00:18:46 --> 00:18:50
product matrix that we were still

00:18:47 --> 00:18:52
working in and that was so four months

00:18:49 --> 00:18:55
before the announcement of the iPod

00:18:51 --> 00:18:58
which was just that that beginning of

00:18:54 --> 00:19:01
Apple expanding out from being well

00:18:57 --> 00:19:04
Apple Computer to being Apple Inc right

00:19:00 --> 00:19:06
more consumer focused products that that

00:19:03 --> 00:19:09
weren't really thought of as being

00:19:05 --> 00:19:11
computers but because that I mean the

00:19:08 --> 00:19:13
point of going through all that is is

00:19:10 --> 00:19:18
that since there were so few products

00:19:12 --> 00:19:22
Steve could keep tabs on what the

00:19:17 --> 00:19:25
software teams were doing that there was

00:19:21 --> 00:19:31
this big initiative to make a web

00:19:24 --> 00:19:33
rowser so he could keep his his he can

00:19:30 --> 00:19:35
keep tabs on it yeah

00:19:32 --> 00:19:36
the time on his schedule to get updates

00:19:34 --> 00:19:38
on how the software was doing and he did

00:19:35 --> 00:19:40
yeah so it was sort of a focused thing

00:19:37 --> 00:19:41
right but but Steve saying look we're

00:19:39 --> 00:19:43
not gonna have that many SKUs we're not

00:19:40 --> 00:19:45
gonna have that many products like then

00:19:42 --> 00:19:47
I can put all my eggs in one basket

00:19:44 --> 00:19:49
didn't watch that basket very good say

00:19:46 --> 00:19:52
ou say the word and it is one of the

00:19:48 --> 00:19:54
best words perhaps the best word to

00:19:51 --> 00:19:58
describe Steve's approach which is focus

00:19:53 --> 00:20:00
on what great product I mean

00:19:57 --> 00:20:03
they're in those three words focus great

00:19:59 --> 00:20:06
products you you you get you you can

00:20:02 --> 00:20:11
distill down Steve's approach is formula

00:20:05 --> 00:20:14
to just a couple concepts yeah so you

00:20:10 --> 00:20:16
ship Safari it's awesome browser fast

00:20:13 --> 00:20:19
native you get a lot of people to switch

00:20:15 --> 00:20:21
over and then at that point in your

00:20:18 --> 00:20:23
career after having been this individual

00:20:20 --> 00:20:24
contributor that like ship this awesome

00:20:22 --> 00:20:25
product

00:20:23 --> 00:20:27
you thought like many people in your

00:20:24 --> 00:20:29
shoes time to be an engineering manager

00:20:26 --> 00:20:32
so maybe talk a little bit about that

00:20:28 --> 00:20:34
story of sort of you know how you

00:20:31 --> 00:20:35
thought about it and then how you got

00:20:33 --> 00:20:37
he job and then what the job was like

00:20:34 --> 00:20:42
when you got it has your first minute

00:20:36 --> 00:20:45
right well it you know I I I always try

00:20:41 --> 00:20:50
to think about well what's next and and

00:20:44 --> 00:20:53
I I don't really have a big career

00:20:49 --> 00:20:57
vision it's because especially the tech

00:20:52 --> 00:20:58
world it changes so fast right and so it

00:20:56 --> 00:21:00
always seems like you come to the end of

00:20:57 --> 00:21:01
one thing and then you it that's the

00:20:59 --> 00:21:03
moment to really decide what the next

00:21:00 --> 00:21:06
hing should be and as you say I mean

00:21:02 --> 00:21:08
engineering management seemed to be like

00:21:05 --> 00:21:12
this this this new domain that I thought

00:21:07 --> 00:21:13
I didn't have a lot of experience in so

00:21:11 --> 00:21:16
I I thought that this would be an

00:21:12 --> 00:21:18
interesting opportunity and so I pushed

00:21:15 --> 00:21:21
for it I asked for it and it was

00:21:17 --> 00:21:25
actually Scott Forstall the the software

00:21:20 --> 00:21:28
xecutive really instrumental in in

00:21:24 --> 00:21:29
coming up with a lot of the you know

00:21:27 --> 00:21:32
interesting user interface work in the

00:21:28 --> 00:21:34
iPhone software project later which I'm

00:21:31 --> 00:21:36
sure we'll get to but he was the one who

00:21:33 --> 00:21:39
was in my management chain who gave me

00:21:35 --> 00:21:41
this opportunity and so I started

00:21:38 --> 00:21:43
working on the sync services software

00:21:40 --> 00:21:46
for the Mac which

00:21:42 --> 00:21:50
that time was really still the software

00:21:45 --> 00:21:54
that would be up in the cloud and and

00:21:49 --> 00:21:57
would help to max the sink was niche

00:21:53 --> 00:22:00
other I mean we didn't really have the

00:21:56 --> 00:22:02
phones right right right okay so it's

00:21:59 --> 00:22:03
like you have a computer desktop

00:22:01 --> 00:22:05
computer in the office you have a

00:22:02 --> 00:22:07
desktop computer at home or maybe you

00:22:04 --> 00:22:09
have a portable and a desktop and it was

00:22:06 --> 00:22:12
that used to get those those systems

00:22:08 --> 00:22:15
exchanging some data your contact your

00:22:11 --> 00:22:17
address book things like that and and so

00:22:14 --> 00:22:19
I thought this was in a you know an

00:22:16 --> 00:22:20
interesting challenge and you know

00:22:18 --> 00:22:22
people were going to be getting more

00:22:19 --> 00:22:24
devices and things like that but I found

00:22:21 --> 00:22:28
that very soon after I got into the job

00:22:23 --> 00:22:30
that I was miserable that I I hadn't

00:22:27 --> 00:22:35
really reckoned at that point in my

00:22:29 --> 00:22:40
career with what management really is

00:22:34 --> 00:22:42
it's about people yeah I I was still and

00:22:39 --> 00:22:45
certainly at that point in my my career

00:22:41 --> 00:22:47
still fascinated by the software itself

00:22:44 --> 00:22:49
that's what was attracted to me about

00:22:46 --> 00:22:51
sync it seemed like this this this

00:22:48 --> 00:22:54
distributed computing problem and I was

00:22:50 --> 00:22:56
enamored of the technology and yet

00:22:53 --> 00:22:59
client-server and you know and all of

00:22:55 --> 00:23:03
this and and not really again thinking

00:22:58 --> 00:23:05
about how the right focus was to build a

00:23:02 --> 00:23:07
team build a team culture support the

00:23:04 --> 00:23:11
people so that they could do the

00:23:06 --> 00:23:12
technology and again at that point in my

00:23:10 --> 00:23:14
career I wasn't really ready for that

00:23:11 --> 00:23:16
and and I found myself within just a

00:23:13 --> 00:23:19
couple of months of its miserable mm-hmm

00:23:15 --> 00:23:21
yeah it's a it's the lament of a lot of

00:23:18 --> 00:23:23
sort of first-time managers which is you

00:23:20 --> 00:23:24
think on the other side of the force I

00:23:22 --> 00:23:26
want to manage their job it's the way up

00:23:23 --> 00:23:28
it's not natural hierarchy and then you

00:23:25 --> 00:23:31
get there and your your job is about

00:23:27 --> 00:23:33
shipping a team and not a product and a

00:23:30 --> 00:23:34
lot of people go through that I don't

00:23:32 --> 00:23:36
want to ship a team I want to ship a

00:23:33 --> 00:23:37
product right all right so it sounds

00:23:35 --> 00:23:42
like that's what you did you sort of

00:23:36 --> 00:23:43
went back to being yeah well III had a I

00:23:41 --> 00:23:45
almost shaped to say you know it's like

00:23:42 --> 00:23:47
a mini mini meltdown I went to Scott

00:23:44 --> 00:23:50
Forstall and I say hey look Scott I I

00:23:46 --> 00:23:52
don't want to do this I I I led you

00:23:49 --> 00:23:54
astray led myself astray I quit I offer

00:23:51 --> 00:23:55
to resign because I know because and in

00:23:53 --> 00:23:56
a part of

00:23:54 --> 00:23:59
thing was it was a feeling of

00:23:55 --> 00:24:01
responsibility that I had taken on a

00:23:58 --> 00:24:04
responsibility that now I did not want

00:24:00 --> 00:24:06
o fulfill and I felt like well the only

00:24:03 --> 00:24:07
thing for me there's really just two

00:24:05 --> 00:24:09
choices I could continue on being

00:24:06 --> 00:24:13
miserable about it or I could just go

00:24:08 --> 00:24:15
and say look I'm done with this I you

00:24:12 --> 00:24:18
know I submit my resignation and Scott

00:24:14 --> 00:24:20
was like whoa whoa whoa just a second

00:24:17 --> 00:24:22
what operate there there I want to

00:24:19 --> 00:24:24
understand what's going on there so I

00:24:21 --> 00:24:26
explained to him what I just explained

00:24:23 --> 00:24:28
to you about really wanting to still be

00:24:25 --> 00:24:30
in closer touch with the technology and

00:24:27 --> 00:24:34
so he said oh okay well just go away he

00:24:29 --> 00:24:36
was not pleased with me yeah yeah but we

00:24:33 --> 00:24:38
got to the management job you asked you

00:24:35 --> 00:24:39
said that you wanted right and now

00:24:37 --> 00:24:40
you're coming back and now a couple

00:24:38 --> 00:24:43
months later saying saying that you want

00:24:39 --> 00:24:46
something else what's going on so yeah

00:24:42 --> 00:24:48
e wasn't that happy but I he had and at

00:24:45 --> 00:24:51
hat time you had sort of started taking

00:24:47 --> 00:24:52
calls from Google recruiters right uh

00:24:50 --> 00:24:54
yeah I mean because I thought that I was

00:24:51 --> 00:24:57
resigning so I just need to go get

00:24:53 --> 00:25:00
another job so so I actually did and

00:24:56 --> 00:25:02
went to 20 cycle right I went and did

00:24:59 --> 00:25:03
the the interview process at Google and

00:25:01 --> 00:25:06
they offered me a job

00:25:02 --> 00:25:09
yeah so you were serious you were ready

00:25:05 --> 00:25:12
I was serious yeah I was serious but I

00:25:08 --> 00:25:15
turn it down turn down to you know that

00:25:11 --> 00:25:18
job because Scott continued to engage

00:25:14 --> 00:25:20
with me and and and he said you know

00:25:17 --> 00:25:22
just you know kind of you know sit tight

00:25:19 --> 00:25:24
you know maybe you know we've got

00:25:21 --> 00:25:29
something for you and a couple days

00:25:23 --> 00:25:31
later it was actually my direct manager

00:25:28 --> 00:25:35
at the time said you know come here and

00:25:30 --> 00:25:39
he took me into this into his office and

00:25:34 --> 00:25:43
he said we want you to work on this new

00:25:38 --> 00:25:46
project sign this paper and I kind of

00:25:42 --> 00:25:49
thought there was just the barest little

00:25:45 --> 00:25:51
hint on the grapevine so I just like

00:25:48 --> 00:25:53
reached out I signed the paper and he

00:25:50 --> 00:25:55
said yeah we're making a cell phone yeah

00:25:52 --> 00:25:57
and you're now on the team so that's

00:25:54 --> 00:25:59
fascinating right so this is a great

00:25:56 --> 00:26:00
part of Apple that's sort of very

00:25:58 --> 00:26:01
different than most Silicon Valley

00:25:59 --> 00:26:03
companies which is in most Silicon

00:26:00 --> 00:26:05
Valley companies if you get assigned to

00:26:02 --> 00:26:07
another project there's not this level

00:26:04 --> 00:26:09
of secrecy you're not signing papers

00:26:06 --> 00:26:10
aying so tell me

00:26:08 --> 00:26:13
about that like what what did they read

00:26:09 --> 00:26:14
you into at the time was purple at the

00:26:12 --> 00:26:18
time right what's the code name the

00:26:13 --> 00:26:20
funny thing is that at an apple I was

00:26:17 --> 00:26:23
already under this blanket

00:26:19 --> 00:26:25
non-disclosure in because they mean for

00:26:22 --> 00:26:27
the whole time that I worked there I was

00:26:24 --> 00:26:29
on you need these document retention

00:26:26 --> 00:26:31
orders I would get these periodic emails

00:26:28 --> 00:26:35
from the lawyer saying do not destroy

00:26:30 --> 00:26:38
anything because of the work that I had

00:26:34 --> 00:26:39
one was then submitted and in patents

00:26:37 --> 00:26:42
and you know perhaps there's gonna be

00:26:38 --> 00:26:45
patent litigation my god so this is just

00:26:41 --> 00:26:47
he the the whole mindset the whole

00:26:44 --> 00:26:49
culture of what Apple is it there was

00:26:46 --> 00:26:52
ecret and we're doing patentable where

00:26:48 --> 00:26:54
we were we're trying to innovate and we

00:26:51 --> 00:26:57
re you know interested in in in

00:26:53 --> 00:26:59
treating that work as the only trade

00:26:56 --> 00:27:01
secrets something that was valuable to

00:26:58 --> 00:27:03
the to the company and so they're

00:27:00 --> 00:27:05
already super-secret culture already and

00:27:02 --> 00:27:06
then you have to sign something which is

00:27:04 --> 00:27:08
I'm gonna introduce you to an even more

00:27:05 --> 00:27:10
secret culture even more inside Apple

00:27:07 --> 00:27:12
it's not I like the you know when you do

00:27:09 --> 00:27:13
the logic classes like infinite sets can

00:27:11 --> 00:27:15
be larger than other infinite sets

00:27:12 --> 00:27:17
that's right now you're into that's

00:27:14 --> 00:27:20
right now you're in early Liger bigger

00:27:16 --> 00:27:21
deeper darker worse infinity that's

00:27:19 --> 00:27:25
right

00:27:20 --> 00:27:27
it is a bottomless well truly and and so

00:27:24 --> 00:27:31
yeah so I had to sign this additional

00:27:26 --> 00:27:32
NDA and yeah I got to introduce this

00:27:30 --> 00:27:35
project was called purple purple the the

00:27:31 --> 00:27:38
code name for iPhone and it was in

00:27:34 --> 00:27:41
development and and my job was to join

00:27:37 --> 00:27:45
the software effort which at that point

00:27:40 --> 00:27:47
was maybe six or eight people do it's

00:27:44 --> 00:27:51
tiny little team to do what I like to

00:27:46 --> 00:27:54
term the high-level software the plan

00:27:50 --> 00:27:57
was that we were going to take as much

00:27:53 --> 00:28:00
of the Mac as possible you know and

00:27:56 --> 00:28:01
bring it over and squeeze it into one of

00:27:59 --> 00:28:05
these you know a tiny little you know

00:28:00 --> 00:28:07
smartphone form factor and so we're

00:28:04 --> 00:28:08
going to take the operating system

00:28:06 --> 00:28:11
kernel and some of the low-level

00:28:07 --> 00:28:13
ibraries you know the the networking

00:28:10 --> 00:28:16
stack things like this the graphic stack

00:28:12 --> 00:28:18
but above the level of core graphics

00:28:15 --> 00:28:22
which was the you know the low-level

00:28:17 --> 00:28:24
graphics library above that

00:28:21 --> 00:28:26
it was then I was invited onto the team

00:28:23 --> 00:28:28
that was gonna invent the touchscreen OS

00:28:25 --> 00:28:30
so we weren't gonna take any of the

00:28:27 --> 00:28:33
naturally the mouse tracking or handling

00:28:29 --> 00:28:35
or anything of app kit which was the you

00:28:32 --> 00:28:36
know the the user interface level

00:28:34 --> 00:28:39
software for the Mac we were going to

00:28:35 --> 00:28:41
make that from scratch for the phone so

00:28:38 --> 00:28:44
what became UI kit for people who know

00:28:40 --> 00:28:45
about the the you know the technology

00:28:43 --> 00:28:49
for what became you know iPhone software

00:28:44 --> 00:28:50
I oh s that was our job and so I we

00:28:48 --> 00:28:54
started with it with a clean slate and

00:28:49 --> 00:28:56
that slate was pretty well clean when I

00:28:53 --> 00:28:58
joined again just about six or eight

00:28:55 --> 00:29:00
people on that effort at the time yes so

00:28:57 --> 00:29:02
they tap you on the shoulder you're on

00:28:59 --> 00:29:03
the purple team it's like six to eight

00:29:01 --> 00:29:04
people so tell me about the people on

00:29:02 --> 00:29:06
the team like what are the rules are

00:29:03 --> 00:29:09
there product managers are there UX

00:29:05 --> 00:29:10
designers right right so when I say six

00:29:08 --> 00:29:13
or eight people that was software

00:29:09 --> 00:29:15
ngineers yeah there was also this other

00:29:12 --> 00:29:17
team of designers which in Apple we

00:29:14 --> 00:29:19
called the human interface team the h-i

00:29:16 --> 00:29:23
team a human interface and though that

00:29:18 --> 00:29:26
was the team of designers they would do

00:29:22 --> 00:29:28
graphic design animation design but they

00:29:25 --> 00:29:31
would also do concepts they would

00:29:27 --> 00:29:33
provide the thinking behind what is that

00:29:30 --> 00:29:36
going to be the experience of the person

00:29:32 --> 00:29:39
that is going to be using this this

00:29:35 --> 00:29:41
product that we make and so there was

00:29:38 --> 00:29:44
the small team half-dozen

00:29:40 --> 00:29:48
software engineers and and H I design

00:29:44 --> 00:29:50
errs and then executives managers so

00:29:47 --> 00:29:52
there was a fellow named Omri who was

00:29:49 --> 00:29:53
leading the the software engineering

00:29:51 --> 00:29:55
team there was a fellow named Greg

00:29:52 --> 00:29:58
Christie who was the day-to-day manager

00:29:54 --> 00:29:59
thi team they both reported to Scott

00:29:57 --> 00:30:01
Forstall

00:29:58 --> 00:30:04
who was the executive who reported to

00:30:00 --> 00:30:08
Steve and Bacchus it that was the team

00:30:03 --> 00:30:11
now eventually we wound up adding over

00:30:07 --> 00:30:13
time more people we probably never had

00:30:10 --> 00:30:19
more than 20 software engineers and

00:30:12 --> 00:30:20
maybe ten designers those two managers

00:30:18 --> 00:30:24
and the executive and Steve and that was

00:30:19 --> 00:30:26
it so yeah and there are no product

00:30:23 --> 00:30:28
manual product managers no QA engineers

00:30:25 --> 00:30:31
no like until later until later yeah

00:30:27 --> 00:30:33
so the core that sort of got the

00:30:30 --> 00:30:35
whole product going is software

00:30:32 --> 00:30:38
ngineers human interface designer

00:30:34 --> 00:30:41
executive yeah we started then we added

00:30:37 --> 00:30:43
then a program manager right so there

00:30:40 --> 00:30:47
were maybe like two people in just

00:30:42 --> 00:30:49
managing the schedule tracking risk

00:30:46 --> 00:30:53
looking at the bugs a couple of QA

00:30:48 --> 00:30:54
people joined but you know an apple you

00:30:52 --> 00:30:56
know certainly from my staple I can you

00:30:53 --> 00:30:58
know consider them engineers yeah

00:30:55 --> 00:31:01
they're the QA engineers yeah

00:30:57 --> 00:31:03
and so but still that that that still is

00:31:00 --> 00:31:06
all encompassed in in the numbers that I

00:31:02 --> 00:31:08
gave you and there you know and

00:31:05 --> 00:31:11
in a way I say there were no product

00:31:07 --> 00:31:14
managers but if I you know I would say

00:31:10 --> 00:31:16
that we had one product manager there's

00:31:13 --> 00:31:18
two ways that I could say we either had

00:31:15 --> 00:31:21
one product manager Steve right yes the

00:31:17 --> 00:31:24
ultimate decider right or that we all

00:31:20 --> 00:31:28
were we all were it was all our

00:31:23 --> 00:31:30
esponsibility to to make sure that the

00:31:27 --> 00:31:33
product was going to be great for people

00:31:29 --> 00:31:35
we all shared commonly in that

00:31:32 --> 00:31:36
responsibility so that's really

00:31:34 --> 00:31:38
interesting because you sort of

00:31:35 --> 00:31:40
distribute the responsibility now it's

00:31:37 --> 00:31:42
everybody's responsibility but you know

00:31:39 --> 00:31:43
a lot of companies would think oh I've

00:31:41 --> 00:31:46
got to have a throat to choke I've got

00:31:42 --> 00:31:48
o have like the one person but of

00:31:45 --> 00:31:50
course at Apple we did right one person

00:31:47 --> 00:31:52
was Steve okay what's up right now but

00:31:49 --> 00:31:54
and then another Wade when you get down

00:31:51 --> 00:31:57
to the level of features we had this

00:31:53 --> 00:32:00
notion at Apple of directly responsible

00:31:56 --> 00:32:06
individual yeah right so we has dris

00:31:59 --> 00:32:08
right and so when I started working when

00:32:05 --> 00:32:11
I was invited to join the purple effort

00:32:07 --> 00:32:13
because of my experience on the web

00:32:10 --> 00:32:16
rowser I started working on making

00:32:12 --> 00:32:18
crunching down Safari optimizing Safari

00:32:15 --> 00:32:22
so that it could fit on a smartphone

00:32:17 --> 00:32:26
operating system and form factor and but

00:32:21 --> 00:32:29
hen after a couple of months we had a

00:32:25 --> 00:32:33
bit of an impasse with the software

00:32:28 --> 00:32:33
keyboard and we we had what was really

00:32:32 --> 00:32:36
quite unusual

00:32:32 --> 00:32:40
really unique in my experience at Apple

00:32:35 --> 00:32:41
is that this was judged to be that the

00:32:39 --> 00:32:44
development of the software keyboard was

00:32:40 --> 00:32:48
judged to be as a sufficiently high risk

00:32:43 --> 00:32:49
and that the risk was not being matched

00:32:47 --> 00:32:51
by

00:32:48 --> 00:32:53
a commensurate progress right I mean the

00:32:50 --> 00:32:55
whole thing was high-risk right right

00:32:52 --> 00:32:57
we're gonna make a whole new touchscreen

00:32:54 --> 00:33:00
operating system right the whole thing's

00:32:56 --> 00:33:02
high risk but the thing is is that we

00:32:59 --> 00:33:04
re we were making good incremental

00:33:01 --> 00:33:07
progress on most of those areas

00:33:03 --> 00:33:10
touchscreen and the UI kid and Safari

00:33:06 --> 00:33:13
and messages and calendar and you know

00:33:09 --> 00:33:15
all of these you know the phone app but

00:33:12 --> 00:33:18
he touchscreen keyboard was lagging

00:33:14 --> 00:33:21
behind all of these other projects and

00:33:17 --> 00:33:23
so one day it really really again a

00:33:20 --> 00:33:25
unique in my experience

00:33:22 --> 00:33:27
Honore who was the the software

00:33:24 --> 00:33:30
ngineering manager called all of the

00:33:26 --> 00:33:31
ngineers out in out of our offices into

00:33:29 --> 00:33:33
the hallway and we had a group meeting

00:33:30 --> 00:33:35
again about two dozen people there

00:33:32 --> 00:33:37
probably even less than that and said

00:33:34 --> 00:33:40
okay you all stop stop what you're doing

00:33:36 --> 00:33:43
stop working on a calendar it's phone

00:33:39 --> 00:33:45
app you know the user interface level

00:33:42 --> 00:33:48
software everything stop starting from

00:33:44 --> 00:33:49
now you're all keyboard engineers Wow

00:33:47 --> 00:33:51
that is crazy

00:33:48 --> 00:33:53
eah like the entire team entire team

00:33:50 --> 00:33:56
every boss a keyboard in because because

00:33:52 --> 00:33:57
the idea was that if we don't crack this

00:33:55 --> 00:34:00
problem

00:33:56 --> 00:34:02
we might not have a product yeah so I

00:33:59 --> 00:34:04
think we need to take people back to

00:34:01 --> 00:34:06
that era right because this seems super

00:34:03 --> 00:34:08
counterintuitive that you'd put all

00:34:05 --> 00:34:11
twenty people yeah on one project and so

00:34:07 --> 00:34:13
the take us back in time so the most

00:34:10 --> 00:34:16
popular phone at the time was the the

00:34:12 --> 00:34:17
CrackBerry yeah rim blackberry yeah you

00:34:15 --> 00:34:23
guys go keyboard has a physical keyboard

00:34:16 --> 00:34:25
and so this was in the fall of 2005 and

00:34:22 --> 00:34:27
again to just give the time perspective

00:34:24 --> 00:34:31
Steve stood up on stage and announced

00:34:26 --> 00:34:33
the iPhone in January of 2007 so again

00:34:30 --> 00:34:36
this is this a really really compressed

00:34:32 --> 00:34:38
time scale so we're we're you know just

00:34:35 --> 00:34:40
a little bit more than yeah you know

00:34:37 --> 00:34:43
it's less than a year and a half out

00:34:39 --> 00:34:45
from from the day where we're we were

00:34:42 --> 00:34:47
trying to hit you know that target yeah

00:34:44 --> 00:34:51
89 it's not a lot of we still we still

00:34:46 --> 00:34:55
had really nothing to show for this

00:34:50 --> 00:34:57
effort to give a solution for our phone

00:34:54 --> 00:34:58
which would compete with the blackberry

00:34:56 --> 00:35:01
right of course the BlackBerry had this

00:34:57 --> 00:35:03
wonderful keyboard that the hardware

00:35:00 --> 00:35:04
keyboard the little plastic key

00:35:02 --> 00:35:06
click click click click the little trick

00:35:03 --> 00:35:09
lit keys and again you made you said the

00:35:05 --> 00:35:12
word CrackBerry people love things love

00:35:08 --> 00:35:14
the products a great product right but

00:35:11 --> 00:35:16
we were gonna provide this this

00:35:13 --> 00:35:18
different vision for what a smartphone

00:35:15 --> 00:35:21
would be is that it was going to be this

00:35:17 --> 00:35:25
that there wasn't going to be enough

00:35:20 --> 00:35:29
room for a plastic keyboard with the the

00:35:24 --> 00:35:31
keys fixed we were gonna give more of

00:35:28 --> 00:35:35
the front of the display over to a

00:35:30 --> 00:35:37
screen to software and so that would

00:35:34 --> 00:35:39
have had to be in software and the idea

00:35:36 --> 00:35:41
of an all the sort of software based

00:35:38 --> 00:35:43
keyboard was one of the design things

00:35:40 --> 00:35:44
that came from Steve early like it was

00:35:42 --> 00:35:46
just like look this is not negotiable

00:35:43 --> 00:35:48
I'm not shipping a physical keyboard

00:35:45 --> 00:35:53
that's right no I did say his idea was

00:35:47 --> 00:35:55
that we we want we need a keyboard some

00:35:52 --> 00:35:58
of the time but we certainly don't eat

00:35:54 --> 00:36:00
it all of the time and so the idea of

00:35:57 --> 00:36:02
the keyboard being in software is that

00:35:59 --> 00:36:05
it could get out of the way it could go

00:36:01 --> 00:36:07
ff the screen and which would then turn

00:36:04 --> 00:36:09
make the rest of that screen real-estate

00:36:06 --> 00:36:11
available for a customized user

00:36:08 --> 00:36:14
interface that was great that was

00:36:10 --> 00:36:17
optimized for either the phone app or if

00:36:13 --> 00:36:20
it's the calendar you can see more of

00:36:16 --> 00:36:22
your appointments or see more of a month

00:36:19 --> 00:36:23
view for the calendar so it was it

00:36:21 --> 00:36:24
absolutely essential that the keyboard

00:36:22 --> 00:36:26
could get out of the way when you

00:36:23 --> 00:36:28
weren't using it so that the device

00:36:25 --> 00:36:31
could be opened up for these other

00:36:27 --> 00:36:33
better richer experiences in in the apps

00:36:30 --> 00:36:35
that we were going to be shipping and

00:36:32 --> 00:36:37
what problems were you running into at

00:36:34 --> 00:36:39
he time like we're people missing keys

00:36:36 --> 00:36:41
or the keys not big enough like what

00:36:38 --> 00:36:43
caused this yeah ok you know again I

00:36:40 --> 00:36:47
mean it's in some ways it's hard to

00:36:42 --> 00:36:50
think back given how history has played

00:36:46 --> 00:36:53
out right right that we have our phones

00:36:49 --> 00:36:55
now and you know maybe you've got you

00:36:52 --> 00:36:56
know I've got my phone here today and

00:36:54 --> 00:36:59
I'm you know two thumb typing and I'm

00:36:55 --> 00:37:01
hardly even looking at whatever back

00:36:58 --> 00:37:05
when we were working at this early stage

00:37:00 --> 00:37:08
and and we were all new to interacting

00:37:04 --> 00:37:11
with touchscreens we found that we had

00:37:07 --> 00:37:13
this real sense of apprehension

00:37:10 --> 00:37:15
whenever we were going to

00:37:12 --> 00:37:16
uch a target on the screen that was

00:37:14 --> 00:37:19
mall

00:37:15 --> 00:37:22
than our fingertip right that was

00:37:18 --> 00:37:25
actually a really interesting threshold

00:37:21 --> 00:37:26
that a constraint that we were dealing

00:37:24 --> 00:37:28
with when we were

00:37:25 --> 00:37:30
designing the user interface is that if

00:37:27 --> 00:37:33
the target that you were going for was

00:37:29 --> 00:37:35
larger than your finger you could target

00:37:32 --> 00:37:37
because you could maybe move your head a

00:37:34 --> 00:37:39
little bit out of the way and you could

00:37:36 --> 00:37:41
see what you were going for yeah if the

00:37:38 --> 00:37:44
target was smaller than your fingertip

00:37:40 --> 00:37:45
like did I get it I don't know right

00:37:43 --> 00:37:47
right

00:37:44 --> 00:37:49
and so we we started feedback we didn't

00:37:47 --> 00:37:51
have the tactile feedback of that

00:37:48 --> 00:37:53
blackberry right you could feel the

00:37:50 --> 00:37:55
dges of the keys with your fingers and

00:37:52 --> 00:37:57
of course with the touchscreen it was

00:37:54 --> 00:37:59
just this this this sheet of glass and

00:37:56 --> 00:38:01
so that's the challenge with the

00:37:58 --> 00:38:05
keyboard is that you needed enough keys

00:38:00 --> 00:38:07
to have a typing experience right but in

00:38:04 --> 00:38:09
order to give the number of keys

00:38:06 --> 00:38:11
necessary the keys needed to be smaller

00:38:08 --> 00:38:15
than your fingertips so what do you do

00:38:10 --> 00:38:16
and so it turns out that you know

00:38:14 --> 00:38:19
through investigation and a lots of

00:38:15 --> 00:38:22
demos and and lots of sleepless nights

00:38:18 --> 00:38:24
right that the the the the way to close

00:38:21 --> 00:38:29
that gap was to give software assistance

00:38:23 --> 00:38:30
yeah and so unreal a vlog one everybody

00:38:28 --> 00:38:32
now is a keyboard engineer everybody

00:38:29 --> 00:38:33
needs to figure out how we're going to

00:38:31 --> 00:38:36
make a reliable keyboard that's

00:38:32 --> 00:38:39
delightful and so what happened from

00:38:35 --> 00:38:42
that point was it like a series of demos

00:38:38 --> 00:38:44
where people yeah you know yeah what we

00:38:41 --> 00:38:47
did this series of demos we see again

00:38:43 --> 00:38:50
going back to wave the way that it was

00:38:46 --> 00:38:52
on that hallway and it was just one

00:38:49 --> 00:38:55
hallway since it was so few people these

00:38:51 --> 00:38:57
are 20-ish people and and we all had our

00:38:54 --> 00:39:00
individual offices at the time this was

00:38:56 --> 00:39:02
not open plan office right everybody had

00:38:59 --> 00:39:04
their office mine when I was working and

00:39:01 --> 00:39:07
thinking I had my door closed right but

00:39:03 --> 00:39:08
hen okay so I would be in my office

00:39:06 --> 00:39:11
with my door closed and I would come up

00:39:07 --> 00:39:13
with a demo an idea right that could be

00:39:10 --> 00:39:15
represented in a demo then I opened the

00:39:12 --> 00:39:18
door and I go to see who else's door is

00:39:14 --> 00:39:20
open and say here try this right and so

00:39:17 --> 00:39:23
we would have this this culture we were

00:39:19 --> 00:39:24
all demoing to ourselves all the time

00:39:22 --> 00:39:26
and when we were set off on this thing

00:39:23 --> 00:39:28
irl keyboard engineers now well we

00:39:25 --> 00:39:31
just winter our own directions some of

00:39:27 --> 00:39:34
us you know had already well-established

00:39:30 --> 00:39:36
you know collegial relationships where I

00:39:33 --> 00:39:37
would collaborate a lot with you and

00:39:35 --> 00:39:39
some other people you know they had

00:39:36 --> 00:39:41
maybe they worked by themselves some

00:39:38 --> 00:39:42
people had a good relationship with one

00:39:40 --> 00:39:44
of the h i-- designers or whatever

00:39:41 --> 00:39:46
something we just cobbled together our

00:39:43 --> 00:39:50
own little teams our own little efforts

00:39:45 --> 00:39:52
and and and started making demos and and

00:39:49 --> 00:39:54
again trying to combat this problem of

00:39:51 --> 00:39:56
the keys being too small so one idea

00:39:53 --> 00:39:58
that we experimented with was making

00:39:55 --> 00:40:02
larger keys with multiple letters on the

00:39:57 --> 00:40:04
keys I started experimenting with

00:40:01 --> 00:40:07
software assistants maybe there could be

00:40:03 --> 00:40:11
a dictionary on the phone that the

00:40:06 --> 00:40:14
software could consult to provide

00:40:10 --> 00:40:16
suggestions that maybe you know much

00:40:13 --> 00:40:19
like we have today that there's this bar

00:40:15 --> 00:40:21
on top of the keyboard that is updating

00:40:18 --> 00:40:23
as you're typing keys giving you some

00:40:20 --> 00:40:24
notion of what the software thinks

00:40:22 --> 00:40:27
you're trying to do autocorrect the

00:40:23 --> 00:40:29
author of autocorrect which is now not

00:40:26 --> 00:40:32
only super useful on the phone but

00:40:28 --> 00:40:35
probably my favorite comedy genre the

00:40:31 --> 00:40:37
you know can watch the Facebook videos

00:40:34 --> 00:40:39
comedies they're fantastic

00:40:36 --> 00:40:44
yeah well sorry about that so eventually

00:40:38 --> 00:40:47
ou know the the the the breakthrough if

00:40:43 --> 00:40:51
you will that made it made it possible

00:40:46 --> 00:40:52
for software keyboards to really work in

00:40:50 --> 00:40:56
the primary you know in a shippable

00:40:51 --> 00:41:00
product was a software assistance to the

00:40:55 --> 00:41:03
xtent that the software may change the

00:40:59 --> 00:41:05
letters that you type right right that

00:41:02 --> 00:41:07
it'll change it to what it thinks rather

00:41:04 --> 00:41:09
than what you did and it's actually this

00:41:06 --> 00:41:11
phrase is really really important I

00:41:08 --> 00:41:14
think really really one of the important

00:41:10 --> 00:41:16
organizing concepts for so much that we

00:41:13 --> 00:41:19
did to make the touchscreen opera's

00:41:15 --> 00:41:21
operating system work is because you

00:41:18 --> 00:41:23
didn't get this tactile feedback because

00:41:20 --> 00:41:26
you couldn't feel the edges of either

00:41:22 --> 00:41:28
keyboard keys or any any button or

00:41:25 --> 00:41:30
anything in the user interface is that

00:41:27 --> 00:41:32
he software had to be there working

00:41:29 --> 00:41:35
behind the scenes to give you what you

00:41:31 --> 00:41:38
meant maybe differently than what you

00:41:34 --> 00:41:39
did yeah and how did you come up with

00:41:37 --> 00:41:40
is idea because this is a classic

00:41:38 --> 00:41:41
thinking outs

00:41:39 --> 00:41:43
the box idea all right like if you were

00:41:40 --> 00:41:45
going to try to solve this problem I bet

00:41:42 --> 00:41:47
you saw a lot of variations of kids sort

00:41:44 --> 00:41:49
of key sizes and you know that type of

00:41:46 --> 00:41:51
thing but like this whole thing in the

00:41:48 --> 00:41:53
dictionary putting up suggested words

00:41:50 --> 00:41:55
like where did the idea come from it's

00:41:52 --> 00:41:58
just this iterative process it just

00:41:54 --> 00:42:00
akes a long long time you you you start

00:41:57 --> 00:42:03
with ideas maybe somebody else see it

00:41:59 --> 00:42:05
does a demo that does an idea and and

00:42:02 --> 00:42:08
you had your idea and you think maybe if

00:42:04 --> 00:42:10
I can combine those two ideas and make a

00:42:07 --> 00:42:15
demo that that does the best of

00:42:09 --> 00:42:19
everything that I see and it was just

00:42:14 --> 00:42:20
his collaborative soup of ideas all

00:42:18 --> 00:42:24
swirling around and you just take the

00:42:19 --> 00:42:27
you know all of us were there was a

00:42:23 --> 00:42:29
sense of friendly competition and it's

00:42:26 --> 00:42:31
it was both of those yeah we we all

00:42:28 --> 00:42:33
wanted to do the best we all wanted to

00:42:30 --> 00:42:38
be the one I mean I think we all had a

00:42:32 --> 00:42:40
sense of maybe a sense of ego that we

00:42:37 --> 00:42:43
wanted to be the one to crack this hard

00:42:39 --> 00:42:46
problem that we were given but it's all

00:42:42 --> 00:42:51
very friendly yeah in in in in the end

00:42:45 --> 00:42:53
that if if your idea wound up winning

00:42:50 --> 00:42:57
approving useful yeah you got a little

00:42:52 --> 00:43:00
bit of geek you know cred for that on

00:42:56 --> 00:43:03
the hallway yeah everybody knew who it

00:42:59 --> 00:43:04
was that that came up with the idea I

00:43:02 --> 00:43:06
want to talk to you a little bit about

00:43:03 --> 00:43:08
his sort of secrecy right you got read

00:43:05 --> 00:43:11
into the Holy of Holies its secret more

00:43:07 --> 00:43:13
secret than sort of other parts of Apple

00:43:10 --> 00:43:16
and at one point you decided as you were

00:43:12 --> 00:43:18
fining the autocorrect algorithm that

00:43:15 --> 00:43:20
here were actually experts outside of

00:43:17 --> 00:43:21
the purple team that might be able to

00:43:19 --> 00:43:24
help but of course they hadn't been

00:43:20 --> 00:43:26
disclosed and sorry like what was that

00:43:23 --> 00:43:29
like to try to go get their help and it

00:43:25 --> 00:43:31
was it was it was tough and required

00:43:28 --> 00:43:35
getting approval it's like well I'm

00:43:30 --> 00:43:37
gonna go and talk to these people but

00:43:34 --> 00:43:40
here was no process really at that

00:43:37 --> 00:43:42
point to get them disclosed I mean it

00:43:39 --> 00:43:45
really it's a really a you know a

00:43:41 --> 00:43:48
certain point Steve was still personally

00:43:44 --> 00:43:50
approving every person that was

00:43:47 --> 00:43:52
ubmitted to get disclosed on the

00:43:49 --> 00:43:54
project but I did get permission to talk

00:43:51 --> 00:43:56
to them so as long as I

00:43:53 --> 00:44:01
told them I can't tell you why I want to

00:43:55 --> 00:44:03
know how say the the Japanese input

00:44:00 --> 00:44:05
method works let's say you know the way

00:44:02 --> 00:44:08
the Japanese works is that there there

00:44:04 --> 00:44:11
is this input method that there is a

00:44:07 --> 00:44:14
sophisticated way to take the keys that

00:44:10 --> 00:44:18
a user types and turn it into the

00:44:13 --> 00:44:21
Japanese language a text that that

00:44:17 --> 00:44:23
actually reads as Japanese and so that

00:44:20 --> 00:44:25
you know just won't get into the details

00:44:22 --> 00:44:27
of that but it seemed like it was

00:44:24 --> 00:44:29
imilar in a way I mean at least in the

00:44:26 --> 00:44:33
thought process says is that we have

00:44:28 --> 00:44:35
this this this real software whirring

00:44:32 --> 00:44:37
away in the background other than you

00:44:34 --> 00:44:39
know different than say just like a

00:44:36 --> 00:44:42
desktop keyboard where if you type the a

00:44:38 --> 00:44:45
you get an a right and so so I went and

00:44:41 --> 00:44:50
talked to them but you know in the end

00:44:44 --> 00:44:53
it was m'as just more of conceptual help

00:44:49 --> 00:44:56
then then really you know anything

00:44:53 --> 00:44:58
concrete that I could put into the into

00:44:55 --> 00:45:00
the software it just turns out really

00:44:57 --> 00:45:02
that that the problem that I was trying

00:44:59 --> 00:45:04
to solve which is really input

00:45:01 --> 00:45:08
correction that you weren't sure what

00:45:03 --> 00:45:10
key you had was a class of problem that

00:45:07 --> 00:45:12
was different enough that it really

00:45:09 --> 00:45:14
required different solutions yeah

00:45:11 --> 00:45:15
looking back at that now which is sort

00:45:13 --> 00:45:17
of the extreme secrecy you couldn't

00:45:14 --> 00:45:19
really describe the problem right and so

00:45:17 --> 00:45:21
as a result you got some conceptual help

00:45:18 --> 00:45:23
but not sort of concrete design help

00:45:20 --> 00:45:25
would you think of this as sort of tears

00:45:22 --> 00:45:30
of secrecy inside Apple is a feature or

00:45:24 --> 00:45:33
a bug or somewhere in between yes yes

00:45:29 --> 00:45:38
you know the the thing is I I think

00:45:32 --> 00:45:41
there is a really underestimated power

00:45:37 --> 00:45:45
in keeping your team small mm-hmm

00:45:40 --> 00:45:51
the the the cohesion the small unit

00:45:44 --> 00:45:53
cohesion that you have where your simple

00:45:50 --> 00:45:56
things like Ettore we're gonna have a

00:45:52 --> 00:45:58
meeting who do we invite well everybody

00:45:55 --> 00:46:00
right we're gonna have a team meeting

00:45:57 --> 00:46:02
yeah right where we're gonna talk about

00:45:59 --> 00:46:04
important milestones we're gonna call

00:46:01 --> 00:46:06
everybody out of their office on where

00:46:03 --> 00:46:08
you could say hey everybody come out of

00:46:05 --> 00:46:11
your offices please

00:46:07 --> 00:46:15
and every within 30 seconds everybody

00:46:10 --> 00:46:16
was standing there yeah right so you you

00:46:14 --> 00:46:18
know you get these these there are

00:46:15 --> 00:46:22
advantages to keeping things really

00:46:17 --> 00:46:26
small and of course then there is

00:46:21 --> 00:46:29
the disadvantage of that when you are

00:46:25 --> 00:46:32
trying to tackle difficult problems you

00:46:28 --> 00:46:36
may not have all of the talent that you

00:46:31 --> 00:46:39
need and you may not have a sufficient

00:46:35 --> 00:46:41
amount of diversity right right right

00:46:38 --> 00:46:43
hat if that all the you know especially

00:46:40 --> 00:46:45
ou know a company like Apple is trying

00:46:42 --> 00:46:49
to make products for everybody well how

00:46:44 --> 00:46:52
do you design for everybody right if the

00:46:48 --> 00:46:56
design team isn't it was in a microcosm

00:46:51 --> 00:46:59
of everybody and so there are these

00:46:55 --> 00:47:01
really profound challenges right you

00:46:58 --> 00:47:05
know back in these times we did the best

00:47:00 --> 00:47:06
hat we could within the constraints and

00:47:04 --> 00:47:09
you know and and we tried to then really

00:47:05 --> 00:47:11
tap into the benefits that that the

00:47:08 --> 00:47:14
smallness and the secrecy gave us as

00:47:10 --> 00:47:15
well yeah another funny thing that I

00:47:13 --> 00:47:17
learned reading in her book is the the

00:47:14 --> 00:47:18
secrecy was so extreme that like you

00:47:16 --> 00:47:20
didn't even know what the product was

00:47:17 --> 00:47:21
gonna be named and so like the word

00:47:19 --> 00:47:24
iPhone wasn't even in the dictionary

00:47:20 --> 00:47:27
that's right after Steve launched that's

00:47:23 --> 00:47:29
absolutely true so so there was we were

00:47:26 --> 00:47:33
all heading toward this this

00:47:28 --> 00:47:39
announcement for the iPhone in January

00:47:32 --> 00:47:45
of 2007 and so if you remember how Steve

00:47:38 --> 00:47:46
introduced the product he he said you

00:47:44 --> 00:47:49
know it give his been a very dramatic

00:47:45 --> 00:47:52
introduction you know he's who said that

00:47:48 --> 00:47:53
something to the effect of well we've

00:47:51 --> 00:47:55
got you know a groundbreaking product

00:47:52 --> 00:47:58
and you know and you you privileged to

00:47:54 --> 00:48:00
be involved and you know a product like

00:47:57 --> 00:48:02
this maybe once in your career but Steve

00:47:59 --> 00:48:05
he had been involved with the you know

00:48:01 --> 00:48:08
the Mac and then the iPod and he said

00:48:04 --> 00:48:10
we're gonna have three new products of

00:48:07 --> 00:48:12
this class today and I'm saying like

00:48:09 --> 00:48:14
wait there were two other secret

00:48:11 --> 00:48:18
projects that I didn't know about I mean

00:48:13 --> 00:48:20
truly for a moment yeah I I didn't get

00:48:17 --> 00:48:21
and I was like oh no no no it's just how

00:48:19 --> 00:48:23
he's gonna tell this

00:48:20 --> 00:48:25
parodic these dog that's right about you

00:48:22 --> 00:48:26
so it's gonna you know the phone and

00:48:24 --> 00:48:28
it's it's you know gonna be the you know

00:48:25 --> 00:48:29
the touchscreen music player and then

00:48:27 --> 00:48:31
the you know the internet communicator

00:48:28 --> 00:48:33
yeah I know this is actually all just

00:48:30 --> 00:48:37
one product and we call it iPhone and

00:48:32 --> 00:48:39
when he said that that's when I knew

00:48:36 --> 00:48:41
that I was gonna have to go back the

00:48:38 --> 00:48:43
next day and add iPhone to the

00:48:40 --> 00:48:45
autocorrection dictionary that's awesome

00:48:42 --> 00:48:47
that he fooled you too cuz he fooled me

00:48:44 --> 00:48:48
like a blind eye guy and like you were

00:48:46 --> 00:48:53
working on it so I don't feel quite as

00:48:47 --> 00:48:54
bad what you you know I I have to admit

00:48:52 --> 00:48:56
hat it was just a moment or it's just

00:48:53 --> 00:48:58
like wait wait a second is there

00:48:55 --> 00:49:04
something that I don't know no I can't

00:48:57 --> 00:49:06
be but but yeah it was that was just the

00:49:03 --> 00:49:08
culture and the times and and the way

00:49:05 --> 00:49:10
Steve like to run things yeah now a

00:49:07 --> 00:49:13
feature we all take for granted now

00:49:09 --> 00:49:15
actually didn't appear in iOS and until

00:49:12 --> 00:49:17
summer releases later and that's copy

00:49:14 --> 00:49:18
and paste so I wonder at the time did

00:49:16 --> 00:49:20
you guys talking about that and they do

00:49:17 --> 00:49:21
make an explicit decision to sort of

00:49:19 --> 00:49:23
like yep let's ship without copy and

00:49:20 --> 00:49:26
paste and was that contentious because I

00:49:22 --> 00:49:29
seem like that's contentious yes yes it

00:49:25 --> 00:49:33
was but one of the other things that we

00:49:28 --> 00:49:35
re really expert at to bring back the

00:49:32 --> 00:49:41
word that we talked about earlier was

00:49:34 --> 00:49:45
focus in that we were very very good

00:49:40 --> 00:49:47
really very very early in the

00:49:44 --> 00:49:50
development process to say what was it

00:49:46 --> 00:49:52
in what was out physical keyboard out it

00:49:49 --> 00:49:57
was super early that's right very very

00:49:51 --> 00:50:01
early and that it was clear that this

00:49:56 --> 00:50:04
was that getting the text entry system

00:50:00 --> 00:50:07
working at all was going to be one of

00:50:03 --> 00:50:10
the real challenges I mean I got used to

00:50:06 --> 00:50:13
being in the team meetings where inari

00:50:09 --> 00:50:14
when team engineering meetings again

00:50:12 --> 00:50:16
everybody's in the room so you know we

00:50:13 --> 00:50:18
got 20 people in the room and Omri is up

00:50:15 --> 00:50:19
at the pool you know up at the front of

00:50:17 --> 00:50:24
the room and he's got a you know a

00:50:18 --> 00:50:26
keynote a slide deck and he's saying

00:50:23 --> 00:50:29
okay big challenges well keyboard of

00:50:25 --> 00:50:30
course you know and then whatever other

00:50:28 --> 00:50:32
challenge there may have been those

00:50:29 --> 00:50:34
challenges came and went but seaboard

00:50:31 --> 00:50:36
was just a constant throughout the whole

00:50:33 --> 00:50:40
you know 18-month development cycle and

00:50:35 --> 00:50:42
so we knew that we wanted cut copy paste

00:50:39 --> 00:50:44
but we knew that there was simply not

00:50:41 --> 00:50:47
going to be time for so we didn't spend

00:50:43 --> 00:50:51
any real development effort on it the

00:50:46 --> 00:50:55
one thing that I did implement for the

00:50:50 --> 00:50:56
first iPhone was the loop so you press

00:50:54 --> 00:50:59
and hold and it would give that little

00:50:55 --> 00:51:02
magnifying glass above your finger that

00:50:58 --> 00:51:04
would show and the whole idea of that is

00:51:01 --> 00:51:07
that we wanted your finger to be right

00:51:03 --> 00:51:09
where the insertion point you know the

00:51:06 --> 00:51:11
little cursor would would would move and

00:51:08 --> 00:51:13
so then we needed to show you now what

00:51:10 --> 00:51:16
and so this was an idea that I came up

00:51:12 --> 00:51:19
with but then there was no time to

00:51:15 --> 00:51:22
capitalize I then expand on that to do

00:51:18 --> 00:51:27
cut copy paste and it even got delayed

00:51:21 --> 00:51:28
an extra here because in the second year

00:51:26 --> 00:51:30
after we did the initial release of the

00:51:27 --> 00:51:32
iPhone and then we had that six month

00:51:29 --> 00:51:36
delay before we did the first couple of

00:51:31 --> 00:51:39
customer shipments and then then that

00:51:35 --> 00:51:42
whole next year was taken up by making a

00:51:38 --> 00:51:44
third party API mm-hm yep

00:51:41 --> 00:51:47
so two releases before that copy and

00:51:43 --> 00:51:48
paste right yeah and so I want to get

00:51:46 --> 00:51:50
right into this because sort of look

00:51:47 --> 00:51:53
Apple was famous for having X quit

00:51:49 --> 00:51:56
exquisite taste around the design

00:51:52 --> 00:51:57
trade-offs and a feature like copy and

00:51:55 --> 00:51:59
phase kind of feels like wait you're

00:51:56 --> 00:52:01
arguing against a copy and paste like

00:51:58 --> 00:52:05
that's not a great user experience and

00:52:00 --> 00:52:07
so like how did the the argument evolve

00:52:04 --> 00:52:10
and sort of the the big set up is look

00:52:06 --> 00:52:11
there's taste taste making making hard

00:52:09 --> 00:52:12
ecisions like this and then there's

00:52:10 --> 00:52:14
ort of another style of decision making

00:52:11 --> 00:52:16
which sort of Google made super popular

00:52:13 --> 00:52:19
which is just relentlessly a/b testing

00:52:15 --> 00:52:21
everything right right and so like maybe

00:52:18 --> 00:52:22
the way Google would have come at this

00:52:20 --> 00:52:25
challenge is all right let's give people

00:52:21 --> 00:52:26
tasks this one's house copy and paste

00:52:24 --> 00:52:28
this one doesn't have copy and paste

00:52:25 --> 00:52:30
let's say be tested but Apple made sort

00:52:27 --> 00:52:33
of like what I would argue is a pretty

00:52:29 --> 00:52:36
courageous call right that seems to fly

00:52:32 --> 00:52:39
against the user intuition yeah to

00:52:35 --> 00:52:42
exclude it and yeah well it was simply a

00:52:38 --> 00:52:43
matter of setting the constraints and

00:52:41 --> 00:52:46
keeping them

00:52:42 --> 00:52:47
you know maybe if we had doubled the

00:52:45 --> 00:52:49
size of the team we could have gotten

00:52:46 --> 00:52:51
some other things done but maybe not to

00:52:48 --> 00:52:53
the same level of quality and again once

00:52:50 --> 00:52:55
you start adding people other things

00:52:52 --> 00:52:57
begin to break down right you can't

00:52:54 --> 00:52:58
invite everybody to the team meetings

00:52:56 --> 00:53:01
you can't find a conference room big

00:52:57 --> 00:53:02
enough right right and now there's 40

00:53:00 --> 00:53:04
people who can break the build that's

00:53:01 --> 00:53:07
right how you start to have problems

00:53:03 --> 00:53:11
like this and so we just decided that

00:53:06 --> 00:53:13
well you know it's like a Steve way of

00:53:10 --> 00:53:16
maybe communicating this was look this

00:53:12 --> 00:53:19
the greatest product ever right it's

00:53:15 --> 00:53:20
a touchscreen iPod it's it's the

00:53:18 --> 00:53:22
greatest iPod that we've ever shipped

00:53:19 --> 00:53:25
Ritsuko it's got all these great feeds

00:53:21 --> 00:53:26
it's a phone you got web browsing that

00:53:24 --> 00:53:28
you can take anywhere with you now and

00:53:25 --> 00:53:31
there's no copy-paste well who cares

00:53:27 --> 00:53:32
well we'll get to it right I mean in the

00:53:30 --> 00:53:34
meantime you've got this you know most

00:53:31 --> 00:53:38
of the most amazing product that we've

00:53:33 --> 00:53:43
ver made and so that was and and Steve

00:53:37 --> 00:53:46
just was you know in his mind was was he

00:53:42 --> 00:53:48
believed that the things that we did do

00:53:45 --> 00:53:49
were good enough to counter

00:53:47 --> 00:53:52
balance for the things that weak

00:53:48 --> 00:53:54
we couldn't do yeah so that's great

00:53:51 --> 00:53:56
segue to sort of the next segment

00:53:53 --> 00:53:58
I'd love to sort of take us into what it

00:53:55 --> 00:54:01
was like to demo for Steve like what was

00:53:57 --> 00:54:04
the room like who's in there like what's

00:54:00 --> 00:54:07
the emotion of it everybody wants to

00:54:03 --> 00:54:08
know this right it's probably the

00:54:06 --> 00:54:11
scariest room in Silicon Valley it was

00:54:07 --> 00:54:13
it was pretty it was pretty scary

00:54:10 --> 00:54:15
Steve could be could be intimidating

00:54:12 --> 00:54:19
there is there is absolutely no doubt

00:54:14 --> 00:54:21
about it but the you know to get back to

00:54:18 --> 00:54:23
this this point I mentioned before of

00:54:20 --> 00:54:25
the top down in the bottom up as I

00:54:22 --> 00:54:27
mentioned I except for this very brief

00:54:24 --> 00:54:30
interlude where I was a manager

00:54:26 --> 00:54:32
throughout my whole Apple career over 15

00:54:29 --> 00:54:34
years almost 16 years I was an

00:54:31 --> 00:54:39
individual contributor and yet I got the

00:54:34 --> 00:54:41
opportunity to demo to Steve some of the

00:54:38 --> 00:54:44
latest work that I did at various points

00:54:40 --> 00:54:48
in my career because he wanted to see

00:54:43 --> 00:54:52
from the person who did the work and

00:54:47 --> 00:54:55
because when he would ask questions well

00:54:51 --> 00:54:57
go and ask the ask expert right ago as a

00:54:54 --> 00:54:59
person who

00:54:56 --> 00:55:01
the DRI yeah right the directly

00:54:58 --> 00:55:04
responsible individual the person who is

00:55:00 --> 00:55:06
at least according to plan the person

00:55:03 --> 00:55:08
who when they lose sleep they are losing

00:55:05 --> 00:55:10
sleep over that thing that they're gonna

00:55:07 --> 00:55:12
be demoing to me so that's that's what

00:55:09 --> 00:55:16
he wanted to do and these demos were

00:55:11 --> 00:55:19
very very small affairs now yeah you

00:55:15 --> 00:55:21
know interestingly the demo room for

00:55:18 --> 00:55:25
Steve the software demo room was this

00:55:20 --> 00:55:28
really shabby little room that's not

00:55:24 --> 00:55:33
what you would expect first performance

00:55:27 --> 00:55:36
pristine rooms I'd like an air you know

00:55:32 --> 00:55:38
air filters the air is clean or you know

00:55:35 --> 00:55:40
or do you know like the the scent of

00:55:37 --> 00:55:42
redwoods or something like that typed in

00:55:39 --> 00:55:45
it no no it was this shabby little room

00:55:41 --> 00:55:48
with this mangy old couch and just

00:55:44 --> 00:55:51
andard-issue office furniture and

00:55:47 --> 00:55:56
that's that's what there was I don't

00:55:50 --> 00:55:58
know why he didn't want better but I the

00:55:55 --> 00:56:00
only reason that I can say is that again

00:55:57 --> 00:56:01
it was a matter of focus he was focused

00:55:59 --> 00:56:04
on looking at the software and not

00:56:00 --> 00:56:05
worried about the decor yeah all right

00:56:03 --> 00:56:08
so take us in the room it's a mangy

00:56:04 --> 00:56:10
couch who's in the room let's do the the

00:56:07 --> 00:56:11
version where you're trading off sort of

00:56:09 --> 00:56:14
the keyboard with the big keys of the

00:56:10 --> 00:56:17
key Bob okay so so now so skipping ahead

00:56:13 --> 00:56:20
a couple of years after the the original

00:56:16 --> 00:56:24
iPhone when we were then doing the

00:56:19 --> 00:56:28
original iPad so this is now 2009 as I

00:56:23 --> 00:56:33
recall so a couple years later and so

00:56:27 --> 00:56:34
this is actually an original iPad it's a

00:56:32 --> 00:56:37
very good one which is actually

00:56:33 --> 00:56:40
autographed by Steve Jobs so this was

00:56:36 --> 00:56:44
the iPad that I got at the end of the

00:56:39 --> 00:56:46
iPad development process but back at the

00:56:43 --> 00:56:47
beginning of the iPad process you know I

00:56:45 --> 00:56:50
would have a prototype that looked

00:56:46 --> 00:56:53
pretty much like this and so we were

00:56:49 --> 00:56:54
thinking of well what what's the typing

00:56:52 --> 00:56:57
experience going to be like and so

00:56:53 --> 00:56:58
here's an original iPhone or iPad well

00:56:56 --> 00:57:01
we've obviously got a lot of pixels now

00:56:57 --> 00:57:03
right so now what are we going to do to

00:57:00 --> 00:57:04
make great use of these additional

00:57:02 --> 00:57:07
pixels that we have and

00:57:03 --> 00:57:10
one thing that I also noticed was if you

00:57:06 --> 00:57:13
turn the iPad to landscape that screen

00:57:09 --> 00:57:16
distance is actually just about the same

00:57:12 --> 00:57:19
as the distance between the Q key and

00:57:15 --> 00:57:22
the P key on a laptop keyboard yeah so I

00:57:18 --> 00:57:25
was thinking hey like wait a minute we

00:57:21 --> 00:57:28
could maybe fit of full-size something

00:57:24 --> 00:57:32
that is a full-size keyboard on a

00:57:27 --> 00:57:35
landscape iPad now it turns out that

00:57:31 --> 00:57:38
right around at the same time one of the

00:57:34 --> 00:57:39
H eye designers from one of the my

00:57:37 --> 00:57:41
favorite H eye designers that I really

00:57:38 --> 00:57:43
loved working with in a wide also

00:57:40 --> 00:57:45
collaborated with on the on the iPhone

00:57:42 --> 00:57:48
keyboard boss ording he was starting to

00:57:44 --> 00:57:51
think about iPad keyboards as well and

00:57:47 --> 00:57:54
so he had come up with this demo where

00:57:50 --> 00:57:56
he had all of these variations all of

00:57:53 --> 00:57:58
these ideas and and and so he he gave me

00:57:55 --> 00:58:01
a demo where he he went through he

00:57:57 --> 00:58:04
showed me you know 10 20 different ideas

00:58:00 --> 00:58:07
but one of them really made really

00:58:03 --> 00:58:09
struck me which was he had a design that

00:58:06 --> 00:58:12
showed pretty much just a shrunk down

00:58:08 --> 00:58:14
laptop keyboard to fit in this space and

00:58:11 --> 00:58:17
so what what what that meant is that I

00:58:13 --> 00:58:20
had two ideas is that maybe I could use

00:58:16 --> 00:58:23
this larger screen real estate to make a

00:58:19 --> 00:58:26
version of of the keyboard that had thin

00:58:22 --> 00:58:28
keys that was almost the same size as as

00:58:25 --> 00:58:31
a laptop keyboard but then one that also

00:58:27 --> 00:58:32
gave you like the number row and all of

00:58:30 --> 00:58:35
the punctuation keys exactly where you

00:58:31 --> 00:58:37
would expect to find them on on a laptop

00:58:34 --> 00:58:39
keyboard and so I figured well you know

00:58:36 --> 00:58:42
a nice you know started talking with

00:58:38 --> 00:58:48
boss and and and we came up with this

00:58:41 --> 00:58:51
demo where we would have a special key

00:58:47 --> 00:58:53
we called the zoom key that would that

00:58:50 --> 00:58:55
would take you from this this keyboard

00:58:52 --> 00:58:57
that had the small keys that would zoom

00:58:54 --> 00:59:00
up to the larger keys and then back down

00:58:56 --> 00:59:03
to the smaller keys as as a kind of a

00:58:59 --> 00:59:05
compliment to the gloomed key that

00:59:02 --> 00:59:08
changes the keyboard language so we

00:59:04 --> 00:59:10
would have this other key this kind of

00:59:07 --> 00:59:12
complementary key that would change the

00:59:09 --> 00:59:15
keyboard layout we thought this was a

00:59:11 --> 00:59:18
great idea too you know and again the

00:59:14 --> 00:59:20
idea of what are we gonna do

00:59:17 --> 00:59:23
with this larger screen real estate for

00:59:19 --> 00:59:26
the iPad right software you was give the

00:59:22 --> 00:59:28
user choice your choice give the user

00:59:25 --> 00:59:30
boy use these new pixels that are

00:59:27 --> 00:59:35
available on this new platform this new

00:59:29 --> 00:59:37
form factor and and have that be the

00:59:34 --> 00:59:38
pitch that we make to people and and so

00:59:36 --> 00:59:40
before of course you can make the pitch

00:59:37 --> 00:59:42
to people you need to make the pitch to

00:59:39 --> 00:59:46
ste to the man that's right yeah and so

00:59:41 --> 00:59:49
I got to demo this for Steve hmm and so

00:59:45 --> 00:59:53
the way that this worked is that there

00:59:48 --> 00:59:58
was a very small team that was like the

00:59:52 --> 01:00:00
the the chief demo review team the

00:59:57 --> 01:00:02
small group of people that Steve wanted

00:59:59 --> 01:00:05
around him as he was reviewing demos and

01:00:01 --> 01:00:07
this was Scott Forstall yep Greg

01:00:04 --> 01:00:09
Christian re people that I'd mentioned

01:00:06 --> 01:00:11
so that you know the chief managers for

01:00:08 --> 01:00:13
iOS and then a couple of H hi designers

01:00:10 --> 01:00:16
it's like baaah sorting the fellow that

01:00:12 --> 01:00:18
I collaborated with on this keyboard was

01:00:15 --> 01:00:20
you know almost always in this

01:00:17 --> 01:00:22
meeting another fellow Steve LeMay was

01:00:19 --> 01:00:24
another h-hi designer was often in the

01:00:21 --> 01:00:26
meetings but as I recall he wasn't in

01:00:23 --> 01:00:29
this particular one where I was demoing

01:00:25 --> 01:00:32
the keyboard so half a dozen people if

01:00:28 --> 01:00:33
half a dozen people in the room yeah and

01:00:31 --> 01:00:36
so then what would happen is that the

01:00:32 --> 01:00:38
people like me who had individual demos

01:00:35 --> 01:00:40
and it's so it's like there were circles

01:00:37 --> 01:00:42
inside of circles so I was in the circle

01:00:39 --> 01:00:44
of people who could demo - Steve but

01:00:41 --> 01:00:46
hen there was this it's a circle inside

01:00:43 --> 01:00:50
of that who would stay for all the demos

01:00:45 --> 01:00:51
and so my role would be that you're my

01:00:49 --> 01:00:54
ou know how I would figure is that I

01:00:50 --> 01:00:57
would go in give my demo and then leave

01:00:53 --> 01:00:58
and so you know think of that beforehand

01:00:56 --> 01:01:00
is that you know I'm sitting there with

01:00:57 --> 01:01:02
my iPhone you know out you know down the

01:00:59 --> 01:01:04
hallway waiting for you and read a text

01:01:01 --> 01:01:06
meeting for my turns that's right say

01:01:03 --> 01:01:09
ou know and and so he sends me a text

01:01:05 --> 01:01:10
go stand outside the door yeah and then

01:01:08 --> 01:01:13
you know and then the door is gonna open

01:01:09 --> 01:01:15
I'm gonna get invited in so I get to

01:01:12 --> 01:01:17
text I go stand outside the door and

01:01:14 --> 01:01:18
I'm waiting and I'm waiting and I'm

01:01:16 --> 01:01:21
waiting and it just seemed like well he

01:01:17 --> 01:01:23
just texted me why did he text me and so

01:01:20 --> 01:01:26
then the door opens I get invited to I

01:01:22 --> 01:01:28
figure I'm on yeah gonna go to this iPad

01:01:25 --> 01:01:30
keyboard demo and I come around the

01:01:27 --> 01:01:33
corner and and turn into the room and

01:01:29 --> 01:01:37
Steve is over there and he's like this

01:01:32 --> 01:01:38
he's like he's on the phone he's staring

01:01:36 --> 01:01:42
at the ceiling like you know going back

01:01:37 --> 01:01:44
and forth in his office chair and and

01:01:41 --> 01:01:47
I'm like cold I was like what do I do

01:01:43 --> 01:01:49
like even though now I'm eavesdropping

01:01:46 --> 01:01:51
on Steve on his phone call yeah right

01:01:48 --> 01:01:54
and so you know it's pretty

01:01:50 --> 01:01:56
uncomfortable yeah and I think I I

01:01:53 --> 01:02:00
actually do I actually do think that he

01:01:55 --> 01:02:02
was talking to Bob Iger hmm isn't he

01:01:59 --> 01:02:03
right and so he's like yeah Bob yeah

01:02:01 --> 01:02:05
that sounds great

01:02:02 --> 01:02:07
yeah yeah I'll call you next week yeah

01:02:04 --> 01:02:09
great talking to you right so then he

01:02:06 --> 01:02:11
you know he hangs up yeah and and so

01:02:08 --> 01:02:13
then he does this thing he takes his

01:02:10 --> 01:02:17
iphone he puts his you know its phone

01:02:12 --> 01:02:17
back to his pocket and then he does this

01:02:17 --> 01:02:23
you know like the Eye of Sauron right

01:02:20 --> 01:02:26
he Lord of the Rings right you know

01:02:22 --> 01:02:29
zhilie the great eye yearns to focus on

01:02:25 --> 01:02:32
you and that's what it feels like and so

01:02:28 --> 01:02:36
it's very very interesting then how the

01:02:31 --> 01:02:38
demos go from that point in that he

01:02:35 --> 01:02:42
didn't want a lot of words he didn't

01:02:37 --> 01:02:45
want a lot of you know used car salesman

01:02:41 --> 01:02:48
pitches right all he really wanted to

01:02:44 --> 01:02:50
know was what was next and so what

01:02:47 --> 01:02:52
happened is he hung up the phone he

01:02:49 --> 01:02:54
turns towards me and then Scott Forstall

01:02:51 --> 01:02:57
was the one who then stepped up he goes

01:02:53 --> 01:02:59
and he I there the iPad was already in

01:02:56 --> 01:03:02
the room and so he goes and wakes it up

01:02:58 --> 01:03:04
and and brings my demo up and says Steve

01:03:01 --> 01:03:06
we're gonna be looking at I pad keyboard

01:03:03 --> 01:03:08
options now can he did work on the

01:03:05 --> 01:03:11
iPhone keyboard and now he's got ideas

01:03:07 --> 01:03:13
for the iPad keyboard so Ken and so I

01:03:10 --> 01:03:16
said yes Steve go and look at the demo

01:03:12 --> 01:03:20
it's on the screen now try the zoom

01:03:15 --> 01:03:24
button and that's it that's it that was

01:03:19 --> 01:03:26
the intro and so then Steve goes he you

01:03:23 --> 01:03:29
know slides his office chair over yeah

01:03:25 --> 01:03:33
and he starts like looking

01:03:28 --> 01:03:36
at the iPad screen and what was up was

01:03:32 --> 01:03:37
one of the two keyboards let's say was

01:03:35 --> 01:03:40
the big key keyboard the one that was

01:03:36 --> 01:03:42
more like suitable for touch typing and

01:03:39 --> 01:03:45
he's looking at it he's teh took a long

01:03:41 --> 01:03:48
time to look at it it's like he even did

01:03:44 --> 01:03:50
this little thing where he was like like

01:03:47 --> 01:03:53
turning his head to see what it looked

01:03:49 --> 01:03:55
like like in his peripheral vision it's

01:03:52 --> 01:03:56
like he's just it's just incredible to

01:03:54 --> 01:03:59
see what

01:03:55 --> 01:04:00
does Steve do when he evaluates a

01:03:58 --> 01:04:03
product okay so this is what Dan that's

01:03:59 --> 01:04:05
what he did say hey I've even touched it

01:04:02 --> 01:04:07
yet he's just looking at it yeah and

01:04:04 --> 01:04:09
this is going on for a long time it's

01:04:06 --> 01:04:11
you know it seems it's like one of those

01:04:08 --> 01:04:13
things where it was probably maybe

01:04:10 --> 01:04:15
twenty or thirty seconds that's felt

01:04:12 --> 01:04:17
like like 20 minutes right but but he

01:04:14 --> 01:04:19
took a long time to study and then

01:04:16 --> 01:04:22
eventually he goes out and touches the

01:04:18 --> 01:04:23
zoom button and this zoom button to

01:04:21 --> 01:04:26
change between the two keyboards in this

01:04:23 --> 01:04:30
case shrinking the keys down to be the

01:04:25 --> 01:04:32
more a laptop like keyboard layout the

01:04:29 --> 01:04:33
animation that boss Orting had

01:04:31 --> 01:04:35
esigned was one of the most beautiful

01:04:32 --> 01:04:37
things I'd ever seen I mean it really

01:04:34 --> 01:04:40
looked like they were like the keys were

01:04:36 --> 01:04:43
just like morphing it was absolutely

01:04:39 --> 01:04:46
beautiful but Steve just was like no

01:04:42 --> 01:04:48
reaction he does the zoom and then he

01:04:45 --> 01:04:50
does this study again he's like looking

01:04:47 --> 01:04:52
all day looking at all the keys looking

01:04:49 --> 01:04:54
at how the screen changed then he does

01:04:51 --> 01:04:57
the zoom again and it goes back to the

01:04:53 --> 01:04:59
state that it was in the beginning and

01:04:56 --> 01:05:02
then he studied a little bit more and

01:04:58 --> 01:05:04
and tapped the zoom button again to

01:05:01 --> 01:05:06
see that it's like okay there are just

01:05:03 --> 01:05:10
wo states that were going here between

01:05:05 --> 01:05:12
right we've got two keyboards I see the

01:05:09 --> 01:05:15
animation go between one than the other

01:05:11 --> 01:05:18
back to the first one he satisfies

01:05:14 --> 01:05:20
himself that he's seen what there is to

01:05:17 --> 01:05:23
see hmm and so then he turns to me and

01:05:20 --> 01:05:30
he says we only need one of these things

01:05:22 --> 01:05:33
right you're like oh Hut see I I guess

01:05:29 --> 01:05:35
o and then he says I mean this is this

01:05:32 --> 01:05:37
the kidney interesting part he asks

01:05:34 --> 01:05:41
me which one do you think we should use

01:05:36 --> 01:05:43
mmm he asked me yeah doesn't ask you

01:05:40 --> 01:05:44
know it's got force to always you know

01:05:42 --> 01:05:46
s much better he doesn't ask you

01:05:43 --> 01:05:49
know any of the other people in there he

01:05:45 --> 01:05:51
asks me the individual contributor here

01:05:48 --> 01:05:53
there's the arming in I'm but I'm the

01:05:50 --> 01:05:56
DRI you see that's the thing he wanted

01:05:52 --> 01:05:59
the answer from me now the thing was I

01:05:55 --> 01:06:01
had to give an answer yeah you know if I

01:05:58 --> 01:06:03
didn't give a good answer maybe I would

01:06:00 --> 01:06:07
never be invited back not the DRI

01:06:02 --> 01:06:09
anymore but you know and I had no idea

01:06:06 --> 01:06:11
that this is what he was going to ask in

01:06:08 --> 01:06:13
but in that moment I came up with an

01:06:10 --> 01:06:15
swer because I thought about my

01:06:12 --> 01:06:16
experience with these two keywords and I

01:06:14 --> 01:06:18
thought that you know the one with the

01:06:15 --> 01:06:21
bigger key is I found more comfortable I

01:06:17 --> 01:06:23
was getting to be you know that maybe

01:06:20 --> 01:06:24
with you know like four or five fingers

01:06:22 --> 01:06:26
that I could touch tight and

01:06:23 --> 01:06:28
autocorrection was helping that's why I

01:06:25 --> 01:06:29
said to Steve I said well I like the

01:06:27 --> 01:06:31
bigger one you know the autocorrection

01:06:28 --> 01:06:35
is kind of helping and I'm starting to

01:06:30 --> 01:06:40
get a feel for touch typing and he says

01:06:34 --> 01:06:41
okay we'll go with that one mmm Wow demo

01:06:39 --> 01:06:43
ver yeah

01:06:40 --> 01:06:45
and and you know the interesting thing

01:06:42 --> 01:06:47
is that then that's the keyboard that

01:06:44 --> 01:06:49
shipped on the product wit with the

01:06:46 --> 01:06:51
dislike modification of taking away the

01:06:48 --> 01:06:54
zoom button which was now no longer

01:06:50 --> 01:06:58
needed right and so Steve had this

01:06:53 --> 01:07:03
amazing ability to simplify and and to

01:06:57 --> 01:07:06
rely on his people to have a good

01:07:03 --> 01:07:09
enough idea about what they were doing

01:07:05 --> 01:07:12
and and and to to to be you know

01:07:08 --> 01:07:14
involved enough in the work that even

01:07:11 --> 01:07:16
when you get asked difficult questions

01:07:13 --> 01:07:19
you know about it that you've been

01:07:15 --> 01:07:22
thinking about it you you have this this

01:07:18 --> 01:07:24
background of of just context of

01:07:21 --> 01:07:27
having been thinking about the problem

01:07:23 --> 01:07:29
for for weeks and weeks that that that

01:07:26 --> 01:07:31
experience was then something he

01:07:28 --> 01:07:33
was interested in tapping into to

01:07:30 --> 01:07:35
provide a way forward for the product

01:07:32 --> 01:07:36
what was going through your head when

01:07:34 --> 01:07:38
you were just watching him sort of head

01:07:36 --> 01:07:40
tilt in silence

01:07:37 --> 01:07:42
were you like tempted to like explain

01:07:39 --> 01:07:44
things were you yeah well you just know

01:07:41 --> 01:07:45
that you you that's not you're not

01:07:43 --> 01:07:48
supposed to you're not supposed to do

01:07:44 --> 01:07:50
that yeah yeah I mean I I would imagine

01:07:47 --> 01:07:52
that if he had done so he would have

01:07:49 --> 01:07:55
been in no uncertain terms he said let

01:07:51 --> 01:07:56
me look at the thing yeah because now he

01:07:54 --> 01:08:00
said you

01:07:55 --> 01:08:02
what was he doing he was in my V in my

01:07:59 --> 01:08:05
view I don't know what's going on inside

01:08:01 --> 01:08:07
his head but just having seen him do

01:08:04 --> 01:08:10
that having at least you know enough

01:08:06 --> 01:08:12
experience with him and his approach to

01:08:09 --> 01:08:15
evaluating work is that he was

01:08:11 --> 01:08:19
putting himself in the position of a

01:08:14 --> 01:08:22
customer he he was envisioning himself

01:08:18 --> 01:08:24
that being in an Apple store as a

01:08:21 --> 01:08:26
customer walking up to a table seeing

01:08:23 --> 01:08:28
this new iPad thing for the first time

01:08:25 --> 01:08:31
what's gonna be my impression of it so

01:08:27 --> 01:08:35
he he pictured himself as customer

01:08:30 --> 01:08:37
number one and so he you know I don't

01:08:34 --> 01:08:38
want anybody I don't want the engineer

01:08:36 --> 01:08:40
s aren't going to be there

01:08:37 --> 01:08:42
to be whispering in the year of the

01:08:39 --> 01:08:44
person in the Apple Store sure they can

01:08:41 --> 01:08:47
maybe get the help of you know one of

01:08:43 --> 01:08:49
the nice people you know working in the

01:08:46 --> 01:08:51
Apple Store but gosh wouldn't it be

01:08:48 --> 01:08:55
tter if I can figure this thing out

01:08:51 --> 01:08:58
for myself and decide for myself that

01:08:54 --> 01:09:01
and see the evidence of the care that

01:08:57 --> 01:09:03
he engineers and designers had put into

01:09:00 --> 01:09:04
the work I can decide for myself yeah

01:09:02 --> 01:09:07
this is the thing I want to take home

01:09:03 --> 01:09:10
with me yeah right yeah so obviously if

01:09:06 --> 01:09:13
you have a leader like Steve that's that

01:09:09 --> 01:09:16
into being able to emulate the user who

01:09:12 --> 01:09:17
has great taste like you want to make

01:09:15 --> 01:09:21
this person benevolent design dictator

01:09:16 --> 01:09:22
for life right now the downside of that

01:09:20 --> 01:09:24
you know Silicon Valley's getting a lot

01:09:21 --> 01:09:26
of criticism for these sort of super

01:09:23 --> 01:09:30
charismatic reality distortion field

01:09:25 --> 01:09:31
generating CEOs where like you might not

01:09:29 --> 01:09:34
agree with them right and you know in

01:09:30 --> 01:09:35
the sort of ultimate downside case their

01:09:33 --> 01:09:37
sword is just too much warship hero

01:09:34 --> 01:09:40
worship of CEOs like do you think that

01:09:36 --> 01:09:43
ever became part of the Apple culture

01:09:39 --> 01:09:46
right sort of the blind obedience to the

01:09:42 --> 01:09:50
fearless leader yeah I think I I

01:09:45 --> 01:09:53
think the Steve's reputation and his

01:09:49 --> 01:09:57
uccess causes people to draw the wrong

01:09:52 --> 01:10:01
conclusion to take away the wrong

01:09:56 --> 01:10:05
lessons i I think that if you go back

01:10:00 --> 01:10:07
and look on YouTube of old videos with

01:10:04 --> 01:10:09
Steve maybe you know on stage with Walt

01:10:06 --> 01:10:12
Mossberg and Kara Swisher at there

01:10:08 --> 01:10:17
in All Things D conference or

01:10:11 --> 01:10:20
during I just had the a reason to go

01:10:16 --> 01:10:23
back and look at the antenna gate no

01:10:19 --> 01:10:24
right I forgot about that because I and

01:10:22 --> 01:10:26
the reason that I did this is because

01:10:23 --> 01:10:30
this you know it's it's current now that

01:10:25 --> 01:10:32
here was a bug in group FaceTime and

01:10:29 --> 01:10:34
Apple issued an apology say we're sorry

01:10:31 --> 01:10:36
that we had this problem and we're gonna

01:10:33 --> 01:10:38
be fixing it whatever and so I wanted to

01:10:35 --> 01:10:40
go back and see well why what did Steve

01:10:37 --> 01:10:43
say about antenna gate you know which

01:10:39 --> 01:10:45
was the issue with the iPhone 4 where

01:10:42 --> 01:10:47
you're holding it wrong and the signal

01:10:44 --> 01:10:49
strength would go down and I wanted to

01:10:46 --> 01:10:50
see what he said and it was it's really

01:10:48 --> 01:10:52
interesting this is on youtube you can

01:10:49 --> 01:10:56
go and look at it and Steve held a

01:10:51 --> 01:10:59
little press event and you know he was

01:10:55 --> 01:11:01
just very very clear very very upfront

01:10:58 --> 01:11:02
saying our goal is to make our customers

01:11:00 --> 01:11:06
happy hmm

01:11:01 --> 01:11:08
and and and so that's the kind of lesson

01:11:05 --> 01:11:11
that people should be taking away is not

01:11:07 --> 01:11:15
hat he was domineering not that he was

01:11:10 --> 01:11:17
this you know absolute monarchy first

01:11:14 --> 01:11:21
century absolute monarch now and a

01:11:16 --> 01:11:22
company rather than a government you

01:11:20 --> 01:11:24
know all that you know that he had this

01:11:21 --> 01:11:27
yeah reality distortion field

01:11:23 --> 01:11:29
personality it's that he had this focus

01:11:26 --> 01:11:31
on doing great work and and and and

01:11:28 --> 01:11:33
making customers happy that's really

01:11:30 --> 01:11:36
what he cared about yeah and then sort

01:11:32 --> 01:11:38
of how did the organization morph itself

01:11:35 --> 01:11:40
to sort of reflect that you had this you

01:11:37 --> 01:11:41
know great tastemaker who wanted to make

01:11:39 --> 01:11:44
these decisions at a sort of very

01:11:40 --> 01:11:46
granular level in the design so there

01:11:43 --> 01:11:48
was an example where you were designing

01:11:45 --> 01:11:51
an animation I think is sort of the

01:11:47 --> 01:11:52
scrunch zooming demo and you got to the

01:11:50 --> 01:11:55
point where like Steve and Scott

01:11:52 --> 01:11:57
Forstall actually disagreed right so

01:11:54 --> 01:11:59
maybe tell us a little bit about that

01:11:56 --> 01:12:03
and yeah and so this was this was for

01:11:58 --> 01:12:04
iOS 5 so this was you know maybe the

01:12:02 --> 01:12:06
second version a second or third version

01:12:03 --> 01:12:09
of iPad software and we wanted to come

01:12:05 --> 01:12:11
up with multitasking gestures is what we

01:12:08 --> 01:12:13
called them so that you would have some

01:12:10 --> 01:12:15
way of interacting with your whole hand

01:12:12 --> 01:12:18
on the screen well obviously from the

01:12:14 --> 01:12:19
beginning even though multi-touch was

01:12:17 --> 01:12:21
omething that shipped even in the first

01:12:18 --> 01:12:23
Apple product there was no way that you

01:12:20 --> 01:12:25
could have sophisticated yes

01:12:22 --> 01:12:27
multi-finger gestures on a screen not

01:12:24 --> 01:12:31
size but the iPad we thought that you

01:12:26 --> 01:12:33
could and so you have this idea of well

01:12:30 --> 01:12:34
what if you've got the home button that

01:12:32 --> 01:12:36
way you still maybe want some gestures

01:12:33 --> 01:12:39
to interact with the device to control

01:12:35 --> 01:12:41
going between app to app so I came up

01:12:38 --> 01:12:44
with this idea of using this five finger

01:12:40 --> 01:12:47
gesture like you take a sheet of paper

01:12:43 --> 01:12:49
and crumple it up and throw it away to

01:12:46 --> 01:12:53
go from an app back to the home screen

01:12:48 --> 01:12:55
there was then this other interaction

01:12:52 --> 01:12:58
where you would swipe side to side to

01:12:54 --> 01:13:00
just go between one app directly to some

01:12:57 --> 01:13:03
other app right so you're you know you

01:12:59 --> 01:13:05
launch mail and then you launch Safari

01:13:02 --> 01:13:07
well then I can just swipe to go from

01:13:04 --> 01:13:10
Safari back to mail right so that the

01:13:06 --> 01:13:12
system would keep track of the history

01:13:09 --> 01:13:15
of apps that you launched so now here's

01:13:11 --> 01:13:18
the part that that Scott didn't like so

01:13:14 --> 01:13:20
let's say you start up your iPad from

01:13:17 --> 01:13:22
nothing right yeah you know it's

01:13:19 --> 01:13:24
you take it out of the box and you bring

01:13:21 --> 01:13:26
it home and yeah you launch man when you

01:13:23 --> 01:13:29
launch Safari you only ever launch two

01:13:25 --> 01:13:31
apps so you swipe to go from Safari back

01:13:28 --> 01:13:33
to mail well what happens if you

01:13:30 --> 01:13:35
continue swiping in that direction all

01:13:32 --> 01:13:37
right there's no other ass end of list

01:13:34 --> 01:13:41
and so what I came up with

01:13:36 --> 01:13:45
was this sort of morphing stretching

01:13:40 --> 01:13:47
rubbery distortion of the app to show

01:13:44 --> 01:13:48
you that you were at the end of the list

01:13:46 --> 01:13:51
and it would kind of do this bloop bloop

01:13:47 --> 01:13:53
sort of animation when you let

01:13:50 --> 01:13:58
your fingers up off the screen yeah and

01:13:52 --> 01:14:01
Scott Forstall hated it and his argument

01:13:57 --> 01:14:03
what went like this he said you know

01:14:00 --> 01:14:07
that's not fair to the designers of the

01:14:02 --> 01:14:10
apps because they really didn't design

01:14:06 --> 01:14:12
for what their apps would look like when

01:14:09 --> 01:14:13
you stretched them that's super

01:14:11 --> 01:14:15
interesting okay they didn't have a say

01:14:12 --> 01:14:16
in what its gonna look like that's right

01:14:14 --> 01:14:19
you've taken away that taste and it's an

01:14:16 --> 01:14:22
interesting aspect to what happens as

01:14:18 --> 01:14:24
you evolve a product they would then for

01:14:21 --> 01:14:26
the subsequent version but we would be

01:14:23 --> 01:14:28
shipping a version that added a new

01:14:25 --> 01:14:29
feature multitasking gestures and it

01:14:27 --> 01:14:31
would have to work with all the apps

01:14:28 --> 01:14:33
that were already in the world of course

01:14:30 --> 01:14:35
there was a huge ecosystem by that point

01:14:32 --> 01:14:36
so this was Scott's argument is that

01:14:34 --> 01:14:39
designers you you've done something to

01:14:35 --> 01:14:41
the designers that they couldn't really

01:14:38 --> 01:14:43
have accounted for yeah in the design of

01:14:40 --> 01:14:45
their abs okay so I got the chance to

01:14:42 --> 01:14:47
demo this to Steve too and I remembered

01:14:44 --> 01:14:50
that Steve what he did was he had the

01:14:46 --> 01:14:54
iPad in his lap so he was sitting like

01:14:49 --> 01:14:56
this and and doing the the gestures

01:14:53 --> 01:14:59
trying them side to side and whatever

01:14:55 --> 01:15:04
and when he just discovered by himself

01:14:58 --> 01:15:07
this rubbery and the animation end of

01:15:03 --> 01:15:12
list animation he did it he did it again

01:15:06 --> 01:15:16
and he didn't look up he said this is

01:15:11 --> 01:15:18
Apple no awesome yeah so it's pretty

01:15:15 --> 01:15:22
good moment I mean top yourself victory

01:15:17 --> 01:15:25
laughs he thought he thought that it was

01:15:21 --> 01:15:28
you know in the you know you know

01:15:24 --> 01:15:31
tapping into the excuse me the little

01:15:27 --> 01:15:32
sort of whimsical and whimsical aspect

01:15:30 --> 01:15:34
hat went all the way back to sort of

01:15:31 --> 01:15:36
like the happy Mac on the original

01:15:33 --> 01:15:38
Macintosh right that it was this

01:15:35 --> 01:15:41
whimsical little animation that showed

01:15:37 --> 01:15:43
that the system has this playful

01:15:40 --> 01:15:47
character to it and that was an aspect

01:15:42 --> 01:15:49
hat he really loved and so and it also

01:15:46 --> 01:15:52
just goes to show that there could be

01:15:48 --> 01:15:54
disputes even up at the highest level

01:15:51 --> 01:15:56
Scott knew that I was very excited about

01:15:53 --> 01:15:59
his feature and wanted to show Steve so

01:15:55 --> 01:16:02
he he let me yeah and Steve was the one

01:15:58 --> 01:16:05
who had the final vote and he sided with

01:16:01 --> 01:16:06
me and then that that instance hmm and

01:16:04 --> 01:16:08
o you feel like that slowed

01:16:05 --> 01:16:10
ecision-making down at all in the org

01:16:07 --> 01:16:12
where basically we're just gonna wait

01:16:09 --> 01:16:14
for Steve to decide so like why bother

01:16:11 --> 01:16:18
making a decision see it's he bidding it

01:16:13 --> 01:16:21
again the gr eyes were responsible mmm

01:16:17 --> 01:16:25
you you need it you needed to bring him

01:16:20 --> 01:16:27
proposals yeah right the you know you

01:16:24 --> 01:16:30
might think of that that I that keyboard

01:16:26 --> 01:16:32
emo example was well we were bringing

01:16:29 --> 01:16:35
him to keyboards and we wanted him to

01:16:31 --> 01:16:39
pick which one no that wasn't it we were

01:16:34 --> 01:16:42
presenting him with a design we

01:16:38 --> 01:16:45
wanted to ship in the product the design

01:16:41 --> 01:16:48
was going to have these two keyboards he

01:16:44 --> 01:16:48
was the one who unpacked it and to say

01:16:47 --> 01:16:51
we

01:16:47 --> 01:16:53
one of these so no and and and the point

01:16:50 --> 01:16:56
is is that if you brought him shoddy

01:16:52 --> 01:16:59
work that was like you know the

01:16:55 --> 01:17:00
quivalent of a shoulder shrug yeah

01:16:58 --> 01:17:03
Steve we've got five things we don't

01:16:59 --> 01:17:07
really know which one we think we like

01:17:02 --> 01:17:08
that was a way to to to never get

01:17:06 --> 01:17:10
invited back to a demo all right it's a

01:17:07 --> 01:17:11
way to get invited not invited back to

01:17:09 --> 01:17:13
the demo and that was the way that Scott

01:17:10 --> 01:17:17
Forstall then would have gotten blowback

01:17:12 --> 01:17:20
from Steve offline yeah to say Scott why

01:17:16 --> 01:17:22
are you presenting me with solid designs

01:17:19 --> 01:17:26
I'm not here wasting my time

01:17:21 --> 01:17:29
I want to see the that the the the the

01:17:25 --> 01:17:31
full result of that bottom-up process so

01:17:28 --> 01:17:34
that he could then give his top-down

01:17:30 --> 01:17:36
approval disapproval no send this back

01:17:33 --> 01:17:39
for more work with specific feedback on

01:17:35 --> 01:17:42
what to change that was the outcome of

01:17:38 --> 01:17:44
every demo with Steve approved not

01:17:41 --> 01:17:48
approved did bring me something

01:17:43 --> 01:17:50
different next time or not approved

01:17:47 --> 01:17:53
give me these specific changes it was

01:17:49 --> 01:17:55
one of those three things so Steve

01:17:52 --> 01:17:57
himself is sort of legendary for sort of

01:17:54 --> 01:17:58
using liberal arts and engineering

01:17:56 --> 01:18:01
thinking right and if you think about

01:17:57 --> 01:18:03
he classic Silicon Valley stereotype

01:18:00 --> 01:18:05
companies are a lot more about like the

01:18:02 --> 01:18:07
pedigreed computer science engineer

01:18:04 --> 01:18:09
ight like that's the stereotype of like

01:18:06 --> 01:18:11
that's what we're looking for now but

01:18:08 --> 01:18:13
your own background and other people at

01:18:10 --> 01:18:16
Apple who have sort of had the valued

01:18:12 --> 01:18:18
liberal arts and engineering degree talk

01:18:15 --> 01:18:20
about like what are the advantages of

01:18:17 --> 01:18:22
sort of melding the traditions what's an

01:18:19 --> 01:18:24
example of a decision that got made that

01:18:21 --> 01:18:30
was a better decision because well i

01:18:23 --> 01:18:33
mean it's it's all the the process of

01:18:29 --> 01:18:36
designing experiences for people that

01:18:32 --> 01:18:38
are useful and meaningful right and i

01:18:35 --> 01:18:41
think that how do we define what's

01:18:37 --> 01:18:44
useful and meaningful well we look to

01:18:40 --> 01:18:48
literature right we look to philosophy

01:18:43 --> 01:18:51
right we look to art we look to the

01:18:47 --> 01:18:53
creative media right to decide what's

01:18:50 --> 01:18:54
useful and meaningful and so you know I

01:18:52 --> 01:18:56
think

01:18:53 --> 01:18:58
and and you know I don't know I didn't

01:18:55 --> 01:19:02
know Steve well enough to know what he

01:18:57 --> 01:19:04
thought but the the culture

01:19:01 --> 01:19:08
that he hoped to create and and that I

01:19:03 --> 01:19:10
found my my place in that culture was

01:19:07 --> 01:19:13
the part of the approach was that that

01:19:09 --> 01:19:14
hese devices are a part of people's

01:19:12 --> 01:19:17
lives right

01:19:13 --> 01:19:19
more and more now to the extent that now

01:19:16 --> 01:19:21
I write we we we think that there's a

01:19:18 --> 01:19:22
problem with the number amount of time

01:19:20 --> 01:19:25
that we're spending looking at these

01:19:21 --> 01:19:27
screens right that we need now apps and

01:19:24 --> 01:19:30
and features on the phone to help us

01:19:26 --> 01:19:33
track rise too much screen time right

01:19:29 --> 01:19:35
and so if we're going to have this this

01:19:32 --> 01:19:37
object this device these

01:19:34 --> 01:19:40
xperiences that are that are so

01:19:36 --> 01:19:44
important to us so deeply ingrained well

01:19:39 --> 01:19:46
then they it requires I think the the

01:19:43 --> 01:19:48
care and attention and and the thought

01:19:45 --> 01:19:51
about it's not just a technology

01:19:47 --> 01:19:54
artifact it's it's a social artifact

01:19:50 --> 01:19:57
right it's it's it's it's it's a human

01:19:53 --> 01:20:00
artifact right and so that's where

01:19:56 --> 01:20:02
liberal arts comes in yes you do need to

01:19:59 --> 01:20:05
have the technological background to

01:20:01 --> 01:20:07
come up with the hardware and the

01:20:04 --> 01:20:09
software and and the networking and the

01:20:06 --> 01:20:11
services to get everything packed

01:20:08 --> 01:20:13
together so that's a product like this

01:20:10 --> 01:20:15
possible but if you you know you're

01:20:12 --> 01:20:17
gonna ask well well what is it good for

01:20:14 --> 01:20:19
you know why do we do this feature

01:20:16 --> 01:20:21
rather than that feature I think that

01:20:18 --> 01:20:24
yeah that that that's that's a liberal

01:20:20 --> 01:20:27
arts process tell the story if you would

01:20:23 --> 01:20:31
of how you guys arrived at the the home

01:20:26 --> 01:20:33
screen app icon sighs I think the fun

01:20:30 --> 01:20:37
liberal arts twist to this yeah so okay

01:20:32 --> 01:20:39
so so now you know going back to a phone

01:20:36 --> 01:20:42
that looks more like this is there my

01:20:38 --> 01:20:44
original iPhone that I still have so you

01:20:41 --> 01:20:46
know this is the screen size that we

01:20:43 --> 01:20:49
re that we were dealing with now one

01:20:45 --> 01:20:53
of the you know again now jumping back

01:20:48 --> 01:20:56
all the way to 2005 18 months out from

01:20:52 --> 01:20:58
the you know the product announcement we

01:20:55 --> 01:21:01
re still in the early stages of trying

01:20:57 --> 01:21:04
to figure out well what is the home

01:21:00 --> 01:21:05
screen of apps gonna look like and how

01:21:03 --> 01:21:07
is it going to work and one of the

01:21:04 --> 01:21:10
fundamental questions that we had was

01:21:06 --> 01:21:11
well how big should the icons be and

01:21:09 --> 01:21:13
again I I mentioned before this

01:21:10 --> 01:21:15
apprehension of touching targets that

01:21:12 --> 01:21:15
were smaller than your finger and and we

01:21:14 --> 01:21:18
re

01:21:14 --> 01:21:22
the phase where we didn't know how big

01:21:17 --> 01:21:24
on-screen objects should be and ants we

01:21:21 --> 01:21:26
had some experiments but this was still

01:21:23 --> 01:21:28
we didn't have a good handle on it and

01:21:25 --> 01:21:32
so one of the engineers on the hallway

01:21:27 --> 01:21:34
had an idea and his name was Scott Herz

01:21:31 --> 01:21:37
he was doing work on springboard the

01:21:33 --> 01:21:40
icon launching program himself and so he

01:21:36 --> 01:21:45
had this ideas I'm gonna make a game

01:21:39 --> 01:21:46
it's the first ever iPhone game truly

01:21:44 --> 01:21:49
because this is just as a point we

01:21:45 --> 01:21:51
didn't even have all of our units still

01:21:48 --> 01:21:55
needed to be tethered to a Mac we didn't

01:21:50 --> 01:21:57
have standalone enclosures yet so we

01:21:54 --> 01:21:59
re still at this phase where we had

01:21:56 --> 01:22:02
touch screens that still needed to have

01:21:58 --> 01:22:03
a wire tether to it but so we were

01:22:01 --> 01:22:06
trying to figure out well what the ideal

01:22:02 --> 01:22:08
size is and and the game was the

01:22:05 --> 01:22:11
solution and the game went like this you

01:22:07 --> 01:22:13
would launch the game and there was a

01:22:10 --> 01:22:15
minimal user interface all it was was a

01:22:12 --> 01:22:18
rectangle on the screen that was a

01:22:14 --> 01:22:21
random size and a random position and

01:22:17 --> 01:22:23
the game was tap the rectangle and as

01:22:20 --> 01:22:24
oon as you did it didn't tell you if

01:22:22 --> 01:22:27
you did if you if you succeeded or

01:22:23 --> 01:22:29
failed because the idea was just go tap

01:22:26 --> 01:22:31
the rectangle as quickly as possible you

01:22:28 --> 01:22:33
tap the rectangle the next one would

01:22:30 --> 01:22:35
show up at some other random size and

01:22:32 --> 01:22:36
some other random position on the screen

01:22:34 --> 01:22:39
and the idea was to just go as quickly

01:22:35 --> 01:22:41
as possible without again being sort of

01:22:38 --> 01:22:43
weighed down by the feedback of whether

01:22:40 --> 01:22:45
you were succeeding or failing and you

01:22:42 --> 01:22:47
would get then 20 of them and then it

01:22:44 --> 01:22:50
would give you your score hmm right and

01:22:46 --> 01:22:57
so it was fun Yeah right before Angry

01:22:49 --> 01:22:59
Birds before Angry Birds we had now

01:22:56 --> 01:23:00
naturally what he was doing he also

01:22:58 --> 01:23:06
wrote the software so that he was

01:22:59 --> 01:23:08
tracking rectangle by rectangle whether

01:23:05 --> 01:23:11
people were succeeding or failing and

01:23:07 --> 01:23:13
also based on where the rectangle showed

01:23:10 --> 01:23:15
up on the screen and within a couple of

01:23:13 --> 01:23:18
course the game was actually fun yeah

01:23:14 --> 01:23:23
right I I got I finally got 20 out of 20

01:23:17 --> 01:23:27
right the we we determined that if you

01:23:22 --> 01:23:29
made a rectangle that was 57 pixels

01:23:26 --> 01:23:32
quare

01:23:28 --> 01:23:34
that pretty much everybody could tap it

01:23:31 --> 01:23:36
a hundred percent of the time no matter

01:23:33 --> 01:23:38
where it was again since you were going

01:23:35 --> 01:23:42
quickly you could tap it comfortably and

01:23:37 --> 01:23:44
that number he just then since he was

01:23:41 --> 01:23:47
working on springboard and it was his

01:23:43 --> 01:23:49
game it was his app he put that number

01:23:46 --> 01:23:52
into the app he made the pixel 57 pixels

01:23:48 --> 01:23:53
quare and since that was a good number

01:23:51 --> 01:23:57
we never changed it and so that's what

01:23:52 --> 01:23:59
land up shipping on the yeah I love that

01:23:56 --> 01:24:01
story that it was sort of a game that

01:23:58 --> 01:24:04
led to it as opposed to all right we're

01:24:00 --> 01:24:05
gonna do every possible pixel variation

01:24:03 --> 01:24:07
we're gonna bring people in to test it

01:24:04 --> 01:24:10
and we'll see what works yeah no it was

01:24:06 --> 01:24:12
again he was the GRI for springboard it

01:24:09 --> 01:24:14
was his job to figure out how big the

01:24:11 --> 01:24:15
pixels should be and he came up with a

01:24:13 --> 01:24:20
good solution so we didn't change it

01:24:14 --> 01:24:22
yeah so let's quit switch gears a little

01:24:19 --> 01:24:23
bit and talk about sort of your advice

01:24:21 --> 01:24:27
for young people who are thinking about

01:24:22 --> 01:24:29
getting into the computer industry sort

01:24:26 --> 01:24:30
of you know liberal arts degree computer

01:24:28 --> 01:24:32
science degree what set of life

01:24:29 --> 01:24:34
xperiences like what's your general

01:24:31 --> 01:24:37
advice for people who want to join a

01:24:33 --> 01:24:40
tech company yeah I I I think it needs

01:24:36 --> 01:24:44
to be a mix III think if you're going to

01:24:39 --> 01:24:45
be a programmer ya go write programs I

01:24:43 --> 01:24:48
mean the only way to get better at

01:24:44 --> 01:24:49
hings is to do them you know and one of

01:24:47 --> 01:24:53
the wonderful things we mentioned an

01:24:48 --> 01:24:56
open source you know a bit earlier there

01:24:52 --> 01:25:00
the barriers now have never been lower

01:24:55 --> 01:25:02
to get involved I knew that when I was

01:24:59 --> 01:25:05
you know a young person in college I

01:25:01 --> 01:25:08
actually started in college in 1984 I

01:25:04 --> 01:25:10
couldn't afford a Mac right right I

01:25:07 --> 01:25:13
wanted one yeah there were thousands of

01:25:09 --> 01:25:15
dollars thousands of dollars it was 1984

01:25:12 --> 01:25:19
dollars no way that I could afford

01:25:14 --> 01:25:20
one and so now the the barrier to

01:25:18 --> 01:25:25
entry is much lower so if you're

01:25:19 --> 01:25:28
interested in making projects well just

01:25:24 --> 01:25:29
go out and join a community and start

01:25:27 --> 01:25:31
making them or maybe you don't even you

01:25:28 --> 01:25:33
can even lurk in the community you

01:25:30 --> 01:25:36
can download the software and try to

01:25:32 --> 01:25:40
make something over to yourself so I

01:25:35 --> 01:25:42
think that the you know I again if you

01:25:39 --> 01:25:44
want to do something just start doing it

01:25:41 --> 01:25:46
hat's one piece of advice and then the

01:25:43 --> 01:25:51
other piece of advice is yeah you do

01:25:45 --> 01:25:53
need to look at more than technology

01:25:50 --> 01:25:55
again for the reason that I said a few

01:25:52 --> 01:25:57
minutes ago which is these these

01:25:54 --> 01:26:00
technological artifacts that we're

01:25:56 --> 01:26:01
making now have become so important to

01:25:59 --> 01:26:04
people that if you don't know anything

01:26:00 --> 01:26:07
about people right III don't think that

01:26:03 --> 01:26:10
it it's you you're going to be

01:26:06 --> 01:26:11
successful in the long term and so ya

01:26:09 --> 01:26:19
read books

01:26:10 --> 01:26:23
mm-hmm read books study philosophy go to

01:26:18 --> 01:26:28
art museums learn about what's beautiful

01:26:22 --> 01:26:30
and meaningful to you answer those

01:26:27 --> 01:26:32
questions for yourself I don't think it

01:26:29 --> 01:26:33
you know if you can't answer those

01:26:31 --> 01:26:35
questions for yourself I thought it

01:26:32 --> 01:26:37
would be then hard as say a product

01:26:34 --> 01:26:39
designer to then take on the

01:26:36 --> 01:26:40
responsibility of answering those

01:26:38 --> 01:26:42
questions for other people because

01:26:39 --> 01:26:44
that's what you do when you're when

01:26:41 --> 01:26:47
you're a technologist and say a product

01:26:43 --> 01:26:50
company like Apple you're gonna be

01:26:46 --> 01:26:51
making decisions on products and then

01:26:49 --> 01:26:53
going to go out in the world and be

01:26:50 --> 01:26:54
affecting other people other people are

01:26:52 --> 01:26:56
going to be putting those things and

01:26:53 --> 01:27:00
bringing them into their lives and so

01:26:55 --> 01:27:02
how do you know what's good and so

01:26:59 --> 01:27:03
that's a question that you should be

01:27:01 --> 01:27:07
prepared to answer for yourself what do

01:27:02 --> 01:27:09
you like and why what are your goals why

01:27:06 --> 01:27:10
do you make a choice to make the product

01:27:08 --> 01:27:14
ournament like this rather than that

01:27:09 --> 01:27:15
and so it's this combination of learning

01:27:13 --> 01:27:19
about the technology so that you can

01:27:14 --> 01:27:21
actually implement your ideas but then

01:27:18 --> 01:27:23
you've got to actually have good ideas

01:27:20 --> 01:27:25
and again it's the liberal arts that

01:27:22 --> 01:27:27
provides the grounding for that huh

01:27:24 --> 01:27:29
super and that's counterintuitive in

01:27:26 --> 01:27:30
Silicon Valley right the suite of

01:27:28 --> 01:27:31
interview questions you typically

01:27:29 --> 01:27:34
encounter when you're interviewing for

01:27:30 --> 01:27:36
jobs or about linked lists and do you

01:27:33 --> 01:27:38
know tensorflow and can your program in

01:27:35 --> 01:27:40
Python or whatever as opposed to what's

01:27:37 --> 01:27:42
good okay you know and and really you

01:27:39 --> 01:27:44
know it's unfortunate that there are so

01:27:41 --> 01:27:46
many questions like that well obviously

01:27:43 --> 01:27:48
linked lists we're still going to have

01:27:45 --> 01:27:53
need for those as we go into the future

01:27:47 --> 01:27:54
but you know the work that I much of the

01:27:52 --> 01:27:56
work that I did in my life

01:27:53 --> 01:27:59
there was no way that

01:27:55 --> 01:28:01
I could have predicted right when when

01:27:58 --> 01:28:02
we won I was handed you know a piece of

01:28:00 --> 01:28:04
hardware like this inside making out a

01:28:01 --> 01:28:08
touchscreen operating system for a

01:28:03 --> 01:28:10
smartphone well there were precious few

01:28:07 --> 01:28:12
examples that we could we could have

01:28:09 --> 01:28:14
looked at and so how do you have

01:28:11 --> 01:28:17
xperience in that thing so again I

01:28:13 --> 01:28:18
think getting a flexibility and being

01:28:16 --> 01:28:20
able to answer the sort of more general

01:28:17 --> 01:28:23
questions about what you like and what's

01:28:19 --> 01:28:25
good and and and and and what your

01:28:22 --> 01:28:29
higher-level goals are because the

01:28:24 --> 01:28:32
technology is gonna change yeah and then

01:28:28 --> 01:28:34
sort of thinking about a company like

01:28:31 --> 01:28:36
how important do you think it is if

01:28:33 --> 01:28:38
you're thinking about joining a company

01:28:35 --> 01:28:40
that there be a figure like a Steve Jobs

01:28:37 --> 01:28:43
who has a trusted lieutenant like uh

01:28:39 --> 01:28:45
Scott Forstall like is the absence of

01:28:42 --> 01:28:48
those ingredients like uh like I'm not

01:28:44 --> 01:28:50
gonna join that company or write how

01:28:47 --> 01:28:52
Universal is the Apple experience is

01:28:49 --> 01:28:55
another way of asking this question how

01:28:51 --> 01:28:58
sort of specific to a set of characters

01:28:54 --> 01:29:00
and a time in history yeah I I it's a

01:28:57 --> 01:29:03
hard it's a hard question I mean as

01:28:59 --> 01:29:04
Steve was unique yeah right and and

01:29:02 --> 01:29:11
unfortunately he's not around anymore

01:29:03 --> 01:29:14
and so III think it's a kind of a fool's

01:29:10 --> 01:29:16
errand to go out and find who is the

01:29:13 --> 01:29:17
direct successor to Steve Jobs it's just

01:29:15 --> 01:29:21
you know it's just like the questions

01:29:16 --> 01:29:24
are always changing and so I think it's

01:29:20 --> 01:29:27
a matter of finding a place where

01:29:23 --> 01:29:30
you feel comfortable will you where you

01:29:26 --> 01:29:32
feel some sort of connection to what the

01:29:29 --> 01:29:35
organization is trying to accomplish and

01:29:31 --> 01:29:38
that you like the people and that you

01:29:34 --> 01:29:39
feel that you're bringing something you

01:29:37 --> 01:29:41
know it's it's it's again that these

01:29:38 --> 01:29:44
kind of this interesting contrast of

01:29:40 --> 01:29:46
both fitting in but then also I think

01:29:43 --> 01:29:48
providing more diversity yeah that's it

01:29:45 --> 01:29:51
hat's that's an ongoing challenge for

01:29:47 --> 01:29:52
high-tech companies is that again as

01:29:50 --> 01:29:55
the products become more and more

01:29:51 --> 01:29:57
important for our culture I think the

01:29:54 --> 01:29:59
people who are making the products

01:29:56 --> 01:30:04
need to be a better reflection of the

01:29:58 --> 01:30:07
world as as it is right that it's not

01:30:03 --> 01:30:09
just a bunch of computer geeks who went

01:30:06 --> 01:30:12
o maybe just a few high

01:30:08 --> 01:30:15
powered schools that have good computer

01:30:11 --> 01:30:17
science departments right in your book

01:30:14 --> 01:30:19
there's sort of a couple key ingredients

01:30:16 --> 01:30:21
that you would sort of distilled the

01:30:18 --> 01:30:24
Apple experience down to like this is

01:30:20 --> 01:30:27
basically in in reflection this is what

01:30:23 --> 01:30:28
made the iPhone team so productive and

01:30:26 --> 01:30:32
you talk about things like collaboration

01:30:27 --> 01:30:35
and taste and decisiveness so we'll pick

01:30:31 --> 01:30:37
up sort of a few of these things on as

01:30:34 --> 01:30:40
we sort of finish up this segment so

01:30:36 --> 01:30:42
collaboration right every company says

01:30:39 --> 01:30:44
we have a collaborative culture what do

01:30:41 --> 01:30:48
you think made apples unique yeah well

01:30:43 --> 01:30:50
it's it's interesting is that we were

01:30:47 --> 01:30:54
very very good at combining

01:30:49 --> 01:30:56
complementary strengths right so we had

01:30:53 --> 01:30:59
this this human interface design team

01:30:55 --> 01:31:03
and I worked very very closely overtime

01:30:58 --> 01:31:04
with a couple of the folks in there of

01:31:02 --> 01:31:08
course there were only a few folks in

01:31:03 --> 01:31:11
there in total and what we would do is

01:31:07 --> 01:31:14
let's say the example of me working with

01:31:10 --> 01:31:17
BA sorting on the iPhone keyboard and so

01:31:13 --> 01:31:19
I was coming from the project primarily

01:31:16 --> 01:31:21
from an engineering direction he was

01:31:18 --> 01:31:23
coming from the project primarily from a

01:31:20 --> 01:31:25
design direction but boss was pretty

01:31:22 --> 01:31:28
good at writing code and I would fire up

01:31:24 --> 01:31:30
Photoshop and illustrator and so we

01:31:27 --> 01:31:33
would come up with these ideas and we

01:31:29 --> 01:31:34
would complement each other and and to

01:31:32 --> 01:31:36
the you know to the extent and again you

01:31:33 --> 01:31:38
know whatever you think of software

01:31:35 --> 01:31:40
patents we got them for the work that we

01:31:37 --> 01:31:42
did an apple and one of the constraints

01:31:39 --> 01:31:43
that you have when you apply for patents

01:31:41 --> 01:31:45
is that you need to list the inventors

01:31:42 --> 01:31:47
you actually need to be honest about who

01:31:44 --> 01:31:49
could contribute it to the specific

01:31:46 --> 01:31:51
invention and so they would ask us well

01:31:48 --> 01:31:53
which one of you two came up with this

01:31:50 --> 01:31:56
pecific idea so that we can write it

01:31:52 --> 01:31:57
into the the claim language and maybe if

01:31:55 --> 01:31:59
we're gonna take that claim and move it

01:31:56 --> 01:32:01
o a separate patent we know we have to

01:31:58 --> 01:32:02
know who to put as the inventor and we

01:32:00 --> 01:32:04
would boss and I would look at each

01:32:01 --> 01:32:07
other when we go I don't know we both

01:32:03 --> 01:32:09
came up with it and so that's the sign

01:32:06 --> 01:32:11
of collaboration is that where the

01:32:08 --> 01:32:13
collaboration is so good that you don't

01:32:10 --> 01:32:15
know where it begins and where it ends

01:32:12 --> 01:32:19
all right you're complementing each

01:32:14 --> 01:32:22
other so well that it we did it and

01:32:18 --> 01:32:26
there is no other way to describe it

01:32:21 --> 01:32:30
and and and part of you know as a sort

01:32:25 --> 01:32:34
of it's a concrete piece of advice or or

01:32:29 --> 01:32:36
maybe a way of describing that more at

01:32:33 --> 01:32:40
Apple is that we didn't have a lot of

01:32:35 --> 01:32:41
politics you know when boss came up with

01:32:39 --> 01:32:44
e idea I came with an idea I just

01:32:40 --> 01:32:47
didn't didn't matter I wasn't a strong

01:32:43 --> 01:32:49
attribution culture oh that's his idea

01:32:46 --> 01:32:51
nd like how dare you know I can't work

01:32:48 --> 01:32:54
on that and now my managers gonna get

01:32:50 --> 01:32:56
involved because now I'm not gonna get

01:32:53 --> 01:32:59
he credit for it and whatever it just

01:32:56 --> 01:33:01
wasn't like that yeah but you still had

01:32:58 --> 01:33:04
to have strong dris right like yeah

01:33:00 --> 01:33:08
right but then but that is also one of

01:33:03 --> 01:33:11
the ways that just made it clear about

01:33:07 --> 01:33:13
you know if I was collaborating with

01:33:10 --> 01:33:16
someone like like boss or just some

01:33:12 --> 01:33:19
other engineer on the on the you know on

01:33:15 --> 01:33:21
the iOS engineering the hallway if I was

01:33:18 --> 01:33:23
the DRI for the keyboard well I was the

01:33:20 --> 01:33:27
one making the calls you know and as

01:33:22 --> 01:33:29
long as I kept making good calls right I

01:33:26 --> 01:33:30
mean if somebody else had an idea that

01:33:28 --> 01:33:32
hey really really thought they were

01:33:29 --> 01:33:34
gonna go to the mat and you're gonna say

01:33:31 --> 01:33:37
no I think ken made of the you know the

01:33:33 --> 01:33:40
wrong call on this yeah they could buck

01:33:36 --> 01:33:42
that up the management hierarchy but

01:33:39 --> 01:33:45
hat was relatively unusual because

01:33:41 --> 01:33:47
again I mean part of being a DRI is

01:33:44 --> 01:33:49
recognizing strong ideas that are coming

01:33:46 --> 01:33:51
for other people and including them in

01:33:48 --> 01:33:53
the work and so that was that helps to

01:33:50 --> 01:33:56
describe some of the character of the

01:33:52 --> 01:33:58
collaboration that we had well Ken it's

01:33:55 --> 01:33:59
been a fascinating conversation thanks

01:33:57 --> 01:34:02
o much for taking us inside the

01:33:58 --> 01:34:03
Chocolate Factory look the the Chocolate

01:34:01 --> 01:34:06
Factory to not have very many people so

01:34:02 --> 01:34:07
I feel really blessed that you know one

01:34:05 --> 01:34:10
of those people made it out and is

01:34:06 --> 01:34:12
willing to lead the tour and talk to us

01:34:09 --> 01:34:13
and maybe that'll be the last question I

01:34:11 --> 01:34:16
asked you which is you know famously

01:34:12 --> 01:34:18
secretive Apple Corporation all right

01:34:15 --> 01:34:19
did you have to get their approval to

01:34:17 --> 01:34:24
actually write the book and tell the

01:34:18 --> 01:34:27
stories uh well no I didn't I don't know

01:34:23 --> 01:34:30
if I was supposed to but I did and and I

01:34:26 --> 01:34:34
took a certain approach to it which is

01:34:29 --> 01:34:37
that I think it's a positive take on

01:34:33 --> 01:34:39
Apple I love my career in app

01:34:36 --> 01:34:41
so I didn't throw anybody under the bus

01:34:38 --> 01:34:43
because I died there was there was

01:34:40 --> 01:34:44
nobody that I thought that I thought

01:34:42 --> 01:34:49
deserved it

01:34:43 --> 01:34:52
and I limited myself to the Steve Jobs

01:34:48 --> 01:34:54
era which is now you know sadly or for

01:34:51 --> 01:34:55
good or for bad passing into history

01:34:53 --> 01:34:59
eah again I was one of the few people

01:34:54 --> 01:35:02
who had this this this perspective this

01:34:58 --> 01:35:04
this opportunity to be there during

01:35:01 --> 01:35:08
the time that some of these these

01:35:03 --> 01:35:09
products were getting made and so you

01:35:07 --> 01:35:11
know again with my background being in

01:35:08 --> 01:35:13
history and being in the liberal arts I

01:35:10 --> 01:35:16
I thought that it would be good if I

01:35:12 --> 01:35:19
collected these these recollections

01:35:15 --> 01:35:24
while I still do remember them well and

01:35:18 --> 01:35:27
tell the story and I so I thought

01:35:23 --> 01:35:31
hat it was really more of a personal a

01:35:26 --> 01:35:35
personal story and and so I so no I

01:35:30 --> 01:35:37
didn't I was I was imagining that maybe

01:35:34 --> 01:35:39
I would ask forgiveness if somehow they

01:35:36 --> 01:35:41
didn't didn't really approve but I I

01:35:38 --> 01:35:43
thought that I I wouldn't really run

01:35:40 --> 01:35:45
into trouble yeah well that's great

01:35:42 --> 01:35:47
hank you for taking the time here and

01:35:44 --> 01:35:49
for putting the stories down so they

01:35:46 --> 01:35:51
don't fade into the mists of history

01:35:48 --> 01:35:53
it's been great having you well okay

01:35:50 --> 01:35:56
I've had a great time thank you

01:35:52 --> 01:35:58
great so for those in the YouTube

01:35:55 --> 01:36:00
audience if you liked what you saw go

01:35:57 --> 01:36:02
ahead and subscribe and then in the

01:35:59 --> 01:36:05
comments thread on this video let's talk

01:36:01 --> 01:36:07
about things that you might want to try

01:36:04 --> 01:36:09
in your own culture now having listened

01:36:06 --> 01:36:12
sort of can describe what it was Apple

01:36:08 --> 01:36:13
what Apple did sort of what what would

01:36:11 --> 01:36:15
work in your environment and what

01:36:12 --> 01:36:17
wouldn't work in your environment would

01:36:14 --> 01:36:18
love to have a conversation about how

01:36:16 --> 01:36:20
ould you implement some of the ideas

01:36:17 --> 01:36:22
that we talked about in your own

01:36:19 --> 01:36:25
software development lifecycle so see

01:36:21 --> 01:36:25
you next episode

<!-- YOUTUBE_TRANSCRIPT_END -->
