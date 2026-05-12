---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "xd5EoVc3I_Y"
title: "The World Through an API"
video_url: "https://www.youtube.com/watch?v=xd5EoVc3I_Y"
thumbnail_url: "https://i.ytimg.com/vi/xd5EoVc3I_Y/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=xd5EoVc3I_Y"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2018-03-10T02:07:17.000Z"
upload_date: "2018-03-10"
duration_seconds: 1075
duration_human: "17:55"
view_count: 36476
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:13:45.146Z"
---

# The World Through an API

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=xd5EoVc3I_Y
- video_id: xd5EoVc3I_Y
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2018-03-10T02:07:17.000Z
- upload_date: 2018-03-10
- duration: 17:55
- view_count: 36476
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: API economy, software development, developers, APIs, application programming interface, combinatorial innovation, cloud computing, software as a service
- categories: Science & Technology

## Description

As the API or "application programming interface" becomes the primary interface for business (in much the same way physical storefronts gave way to applications and websites), we're seeing a new chapter in the story of software emerge. While it's playing out against the backdrop of other trends (microservices, software-defined networking, developers as buyers, and connectivity as a utility), the big idea here is that traditional, large programs are being broken down into and being offered as -- or with data exposed to -- services. But more importantly, these pieces and services are being recombined by other companies to create something new... it’s combinatorial innovation in action.

In this talk (originally delivered at our most recent annual a16z Summit in November 2017), general partner Martin Casado describes the evolution of "the API economy" in the context of the history of computing; shares examples of companies whose entire business is based on or around APIs; considers implications for future infrastructure, IT business leaders, and others; and shares how APIs are already fueling the expansion of software eating the world.

image credits: Library of Congress via Wikipedia; Pixabay (Creative Commons 1.0); purchased/licensed stock (iStock, Shutterstock, and Unsplash); and own screenshots/ photos

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:05
okay so I'm Martin cassado and general

00:00:02 --> 00:00:08
partner at andreon horz and I'm going to

00:00:04 --> 00:00:09
be talking about apis to set things up

00:00:07 --> 00:00:11
like listen I've been in the Bay Area

00:00:08 --> 00:00:13
for almost 20 years now and during that

00:00:10 --> 00:00:14
ime I've gone back between San

00:00:12 --> 00:00:16
Francisco and Silicon Valley more times

00:00:13 --> 00:00:18
than I can count and I I've always found

00:00:15 --> 00:00:19
that you know what's on the Billboards

00:00:17 --> 00:00:21
is kind of indicative of what's on

00:00:18 --> 00:00:23
people's mind especially in technology

00:00:20 --> 00:00:25
right I remember the late 90s you had

00:00:22 --> 00:00:27
kind a lot of the dotom companies like

00:00:24 --> 00:00:29
Yahoo early 2000s you know more kind of

00:00:26 --> 00:00:31
online marketplaces like ebays and then

00:00:28 --> 00:00:34
you had you know social networking and

00:00:30 --> 00:00:35
mobile you know now if you go up and you

00:00:33 --> 00:00:38
look at the Billboards about half the

00:00:34 --> 00:00:40
time you'll see that there are companies

00:00:37 --> 00:00:43
uh whose primary interfaces in API so

00:00:40 --> 00:00:44
for example you have twio you have

00:00:42 --> 00:00:47
stripe you have brain Tre you have

00:00:43 --> 00:00:49
pubnub like all of these are Billboards

00:00:46 --> 00:00:51
whose company's primary interface is an

00:00:48 --> 00:00:53
API and um we think that this is no

00:00:50 --> 00:00:55
mistake we actually think that apis are

00:00:52 --> 00:00:57
the next big expans in Computing so the

00:00:54 --> 00:00:59
point of this talk is to explain what

00:00:56 --> 00:01:02
apis are and why we're so excited about

00:00:58 --> 00:01:04
hem okay so I'm going to start with a

00:01:01 --> 00:01:07
bit of a history lesson so uh this

00:01:03 --> 00:01:09
picture is of the Ford Rouge River

00:01:06 --> 00:01:12
complex and this is I believe around the

00:01:08 --> 00:01:16
1913 or so so in the early days uh a

00:01:11 --> 00:01:19
Ford factory would take in basically

00:01:15 --> 00:01:22
water coal and rubber and iron ore and

00:01:18 --> 00:01:23
it would pop out cars and so you know in

00:01:21 --> 00:01:26
early markets if you're going to be

00:01:22 --> 00:01:28
building your manufacturing something

00:01:25 --> 00:01:28
you want to have all aspects of supply

00:01:27 --> 00:01:31
chain because there's no Market out

00:01:27 --> 00:01:33
here there's no ecosystem and that was

00:01:30 --> 00:01:36
the case and if you compare that to car

00:01:32 --> 00:01:37
manufacturing today you've got a

00:01:35 --> 00:01:40
tremendous amount of companies that feed

00:01:36 --> 00:01:41
into the supply chain an ecosystem so

00:01:39 --> 00:01:42
much so that you have independent

00:01:40 --> 00:01:44
companies that will provide something as

00:01:41 --> 00:01:46
mall as like say a spring or a seat

00:01:43 --> 00:01:48
cover or an aftermarket camera something

00:01:45 --> 00:01:50
like mobile ey you know so the

00:01:47 --> 00:01:51
conclusion this is of course not just

00:01:49 --> 00:01:55
unique to Automotive but the conclusion

00:01:50 --> 00:01:57
is is that you know as markets grow the

00:01:54 --> 00:01:58
unit for which you can create a viable

00:01:56 --> 00:02:01
company shrinks right in the beginning

00:01:58 --> 00:02:03
you had to build an entire car later on

00:02:00 --> 00:02:05
you could build a single

00:02:02 --> 00:02:07
component you know as we all know

00:02:04 --> 00:02:09
Computing has gone through a number of

00:02:06 --> 00:02:10
these epochs as well right and so the

00:02:08 --> 00:02:12
history of computing is kind of

00:02:09 --> 00:02:14
punctuated with these what we would call

00:02:11 --> 00:02:16
expansions in the 60s and 70s you had a

00:02:13 --> 00:02:18
Mainframe and if a company like IBM

00:02:15 --> 00:02:20
created a main frame they'd create every

00:02:17 --> 00:02:22
aspect of it right you'd get the chips

00:02:19 --> 00:02:24
you'd get the board you'd get the sheet

00:02:21 --> 00:02:25
metal around it you'd get all of the

00:02:23 --> 00:02:27
software and all of the applications and

00:02:24 --> 00:02:30
then around the 70s and the 80s you saw

00:02:27 --> 00:02:32
a disaggregation where one company would

00:02:29 --> 00:02:34
build PCS and another company would

00:02:31 --> 00:02:36
Supply the software right and so the

00:02:33 --> 00:02:38
classic example of that is you would

00:02:35 --> 00:02:41
have someone like Dell and Intel on the

00:02:37 --> 00:02:42
hardware side and then you would have

00:02:40 --> 00:02:44
you know the software being provided by

00:02:41 --> 00:02:45
Microsoft and then in the 80s and 90s of

00:02:43 --> 00:02:47
course you got further disaggregation

00:02:45 --> 00:02:50
you'd have some company that just

00:02:46 --> 00:02:51
focused on Silicon just focused on you

00:02:49 --> 00:02:52
know packaging the computer just focused

00:02:50 --> 00:02:54
on the operating system and then

00:02:52 --> 00:02:57
independent applications would become

00:02:53 --> 00:03:00
companies right so for example Erp it

00:02:56 --> 00:03:01
used to be something that one company

00:02:59 --> 00:03:03
would provide everything to and then

00:03:00 --> 00:03:05
database became its own kind of Market

00:03:02 --> 00:03:07
segment productivity became its own

00:03:04 --> 00:03:08
Market segment you know networking

00:03:06 --> 00:03:09
became its own Market segment so like

00:03:07 --> 00:03:11
independent applications and

00:03:08 --> 00:03:13
independent functions become market

00:03:10 --> 00:03:15
segments and so what we're seeing is

00:03:12 --> 00:03:17
we're seeing a next level of expansion

00:03:14 --> 00:03:20
where the app itself is being

00:03:16 --> 00:03:21
disaggregated into a set of apis and so

00:03:19 --> 00:03:23
we believe that this is the next level

00:03:20 --> 00:03:26
of disaggregation and we think there's a

00:03:22 --> 00:03:28
lot of opportunity as a result so just

00:03:25 --> 00:03:30
like bundle software gave away to

00:03:27 --> 00:03:31
Independent applications being viable

00:03:29 --> 00:03:33
companies now we're seeing the

00:03:30 --> 00:03:35
application being disaggregated and

00:03:32 --> 00:03:38
independent components of it are giving

00:03:34 --> 00:03:40
way to Independent companies so for

00:03:37 --> 00:03:42
example if you look at a classic online

00:03:39 --> 00:03:44
app or mobile app there's a lot of

00:03:41 --> 00:03:45
common functions whether it's user

00:03:43 --> 00:03:47
management or data warehousing or

00:03:44 --> 00:03:49
notifications right and what we're

00:03:46 --> 00:03:53
seeing is these independent functions

00:03:48 --> 00:03:56
within an app are now being provided by

00:03:52 --> 00:03:58
apis or independent companies twio for

00:03:55 --> 00:04:00
example provides SMS messaging over an

00:03:57 --> 00:04:02
API and so many applications use twio or

00:03:59 --> 00:04:05
send grid will provide email delivery or

00:04:01 --> 00:04:08
stripe provides online processing you

00:04:04 --> 00:04:10
know this trend is so proliferate that

00:04:07 --> 00:04:13
we find on average a mobile app if you

00:04:09 --> 00:04:14
download it will use something like 17

00:04:12 --> 00:04:17
thirdparty

00:04:14 --> 00:04:19
apis so let me get a little bit more

00:04:16 --> 00:04:21
specific on what exactly an API is so

00:04:18 --> 00:04:25
API stands for an application program

00:04:20 --> 00:04:26
interface and what that is is it's the

00:04:24 --> 00:04:30
interface from which you can call a

00:04:25 --> 00:04:32
specific function within a program so

00:04:29 --> 00:04:34
for example if you write a program and

00:04:31 --> 00:04:37
you want to do an SMS message for

00:04:34 --> 00:04:39
example to tell you that your pizza's

00:04:36 --> 00:04:40
here or that your driver has arrived you

00:04:38 --> 00:04:41
would make an API call in order to do

00:04:39 --> 00:04:44
that the application would make an API

00:04:40 --> 00:04:46
call so there's a few significant things

00:04:43 --> 00:04:48
to point out the first one is apis are

00:04:45 --> 00:04:50
not meant to be consumed by human beings

00:04:47 --> 00:04:53
but by computer programs in the past if

00:04:49 --> 00:04:56
you think about an application or a

00:04:52 --> 00:04:59
software uh package or even a computer

00:04:55 --> 00:05:01
the actual consumer was a user and apis

00:04:58 --> 00:05:02
are not that so there's no real design

00:05:00 --> 00:05:04
element from a user perspective so

00:05:01 --> 00:05:06
therefore I mean you can kind of look at

00:05:03 --> 00:05:09
any program and if there's enough common

00:05:05 --> 00:05:10
functionality that's used by it in other

00:05:08 --> 00:05:12
programs you can pull that out and

00:05:09 --> 00:05:13
effectively start a company and we

00:05:11 --> 00:05:14
believe this is the next level of

00:05:12 --> 00:05:16
disaggregation and we think they going

00:05:13 --> 00:05:18
to be independent companies and there

00:05:15 --> 00:05:20
are independent companies that provide

00:05:17 --> 00:05:21
just apis that are quite useful and to

00:05:19 --> 00:05:23
put this in a little bit of context

00:05:20 --> 00:05:25
based on on my own background so um I

00:05:22 --> 00:05:27
paid for a lot of my underground writing

00:05:24 --> 00:05:29
video games and at the time listen I was

00:05:26 --> 00:05:31
a computer science student and at

00:05:29 --> 00:05:34
he time I could write video games

00:05:30 --> 00:05:35
because I understood every aspect about

00:05:33 --> 00:05:37
a computer architecture we'd have to

00:05:34 --> 00:05:38
rewrite for example the keyboard

00:05:36 --> 00:05:40
handlers we'd have to rewrite how you

00:05:37 --> 00:05:41
talk to the screen and so the only

00:05:39 --> 00:05:43
people that could write video games are

00:05:40 --> 00:05:45
those of us that really understood

00:05:42 --> 00:05:46
computers but if you step back and you

00:05:44 --> 00:05:48
think about it like who do you really

00:05:45 --> 00:05:51
want to write video games is it someone

00:05:47 --> 00:05:52
that knows intimately computers probably

00:05:50 --> 00:05:53
not do you actually want someone that's

00:05:51 --> 00:05:55
probably good at storytelling good at

00:05:52 --> 00:05:56
Art maybe good at music right I mean

00:05:54 --> 00:06:00
these are the aspects that people look

00:05:55 --> 00:06:01
for in a game not the fact that you know

00:05:59 --> 00:06:03
they interact act very well with

00:06:00 --> 00:06:06
Hardware but this is kind of what we

00:06:03 --> 00:06:07
re stuck with because it was so

00:06:05 --> 00:06:09
difficult to write programs for

00:06:06 --> 00:06:13
different aspects so if you compare that

00:06:08 --> 00:06:15
with today today there's an API for

00:06:12 --> 00:06:17
everything I mean here's an example of a

00:06:14 --> 00:06:19
few thousand apis everywhere from

00:06:16 --> 00:06:24
getting a random quote from Chuck Norris

00:06:18 --> 00:06:27
to identifying images uh in a picture to

00:06:23 --> 00:06:30
searching your email inbox right and so

00:06:26 --> 00:06:32
what that means is if you are a domain

00:06:29 --> 00:06:33
expert not necessarily A low-level

00:06:31 --> 00:06:35
computer expert you can still write

00:06:32 --> 00:06:38
applications because you don't have to

00:06:34 --> 00:06:40
learn all of these various areas listen

00:06:37 --> 00:06:42
some of these are clearly just for fun

00:06:39 --> 00:06:44
right I mean you know Place kitten will

00:06:41 --> 00:06:45
create a random kitten image of a random

00:06:43 --> 00:06:47
size if you need that for creating a

00:06:44 --> 00:06:50
website or whatever but like this are

00:06:46 --> 00:06:52
very serious companies now you know you

00:06:49 --> 00:06:53
have crime mapping which will actually

00:06:51 --> 00:06:55
tell you if there's crime local to your

00:06:52 --> 00:06:56
area there's lob which will do physical

00:06:54 --> 00:06:58
shipping and there shipo which is also

00:06:56 --> 00:06:59
kind of a shipping management one so

00:06:57 --> 00:07:01
this isn't just about you know cat

00:06:58 --> 00:07:04
pictures of course this is actually real

00:07:00 --> 00:07:07
business and indeed we've seen the rise

00:07:03 --> 00:07:08
of really significant companies uh twio

00:07:06 --> 00:07:10
for example is a large public company s

00:07:07 --> 00:07:11
grid is doing very well stripe these are

00:07:09 --> 00:07:13
very well-known companies they're

00:07:10 --> 00:07:15
driving a lot of businesses and their

00:07:12 --> 00:07:17
primary interface is an API so we feel

00:07:14 --> 00:07:20
ike we're in the early stages but like

00:07:16 --> 00:07:21
still well into the the this kind of ABI

00:07:19 --> 00:07:24
desegregation so this is a number from

00:07:20 --> 00:07:27
ovam I never know you know how accurate

00:07:23 --> 00:07:29
these numbers are but the agreement is

00:07:26 --> 00:07:30
there's a massive economy that's

00:07:28 --> 00:07:32
going to be moved to these uh and it

00:07:29 --> 00:07:33
stands the reason right every time you

00:07:31 --> 00:07:36
have a disaggregation the market tends

00:07:32 --> 00:07:38
to grow by say for factor of 10 all

00:07:35 --> 00:07:40
right so that's a lot of details on what

00:07:37 --> 00:07:43
an API is and companies behind apis

00:07:39 --> 00:07:46
let's kind of bring things up a level

00:07:42 --> 00:07:47
and discuss what this means broadly into

00:07:45 --> 00:07:49
the industry so I think it means two

00:07:46 --> 00:07:51
things I think the first one and I

00:07:48 --> 00:07:52
alluded to this a little bit previously

00:07:50 --> 00:07:55
but it means that software is easier to

00:07:51 --> 00:07:58
write than ever and per the discussion

00:07:54 --> 00:08:00
around me writing a video game it allows

00:07:57 --> 00:08:02
those that are not computer experts to

00:07:59 --> 00:08:03
write it so we I you know we think that

00:08:01 --> 00:08:04
his is an acceleration of software

00:08:02 --> 00:08:06
ading the world we think we're going

00:08:03 --> 00:08:07
to see more and more Innovation because

00:08:05 --> 00:08:09
more and more people can participate and

00:08:06 --> 00:08:11
more and more of kind of the difficult

00:08:08 --> 00:08:13
stuff that's not necessary to get the

00:08:10 --> 00:08:15
job done of the application is being

00:08:12 --> 00:08:18
automated away so we believe apis are

00:08:14 --> 00:08:21
going to be the new way of consuming

00:08:17 --> 00:08:24
computer science right it used to be an

00:08:20 --> 00:08:26
application on say your desktop and then

00:08:23 --> 00:08:27
perhaps it was a web page or a mobile

00:08:25 --> 00:08:30
app next we think it's going to be an

00:08:26 --> 00:08:33
API and the second one and this one is

00:08:29 --> 00:08:35
probably more directly relevant to my

00:08:32 --> 00:08:39
day-to-day job is it makes it much

00:08:34 --> 00:08:40
easier to build a startup both of you're

00:08:38 --> 00:08:41
building an application because so much

00:08:39 --> 00:08:44
of the programming is being done by

00:08:40 --> 00:08:46
somebody else but also if you are an

00:08:43 --> 00:08:48
expert in for example computer systems

00:08:46 --> 00:08:51
you no longer have to build a full

00:08:47 --> 00:08:53
application that is consumable by a

00:08:50 --> 00:08:54
human being to appeal to right I mean it

00:08:52 --> 00:08:56
used to be in the case like if you're

00:08:53 --> 00:08:58
building uh even a database or

00:08:55 --> 00:08:59
networking you know You' build goys

00:08:57 --> 00:09:00
you'd build interfaces that are used by

00:08:58 --> 00:09:01
human beings You' have have to

00:08:59 --> 00:09:03
understand the human to do it and You'

00:09:00 --> 00:09:05
hire designers I mean I had to do this

00:09:02 --> 00:09:07
in my company but if your primary

00:09:04 --> 00:09:10
interface is an API it's being consumed

00:09:06 --> 00:09:11
by a program right and so that's a whole

00:09:09 --> 00:09:13
aspect of that that you don't have to

00:09:10 --> 00:09:15
invest in in order to get it adopted and

00:09:12 --> 00:09:16
so for me as an infrastructure investor

00:09:14 --> 00:09:18
this means you're going to have more

00:09:15 --> 00:09:19
infrastructure companies that can get

00:09:17 --> 00:09:21
off the ground quicker because they

00:09:18 --> 00:09:23
don't have to appeal directly to a to a

00:09:20 --> 00:09:24
human user consumer okay I'm going to

00:09:22 --> 00:09:27
switch gears a little bit and talk about

00:09:23 --> 00:09:29
how we uh as investors view this

00:09:26 --> 00:09:31
opportunity I mean this is a you know

00:09:28 --> 00:09:33
one of the big disag ation there's a lot

00:09:30 --> 00:09:35
of new companies being created so how

00:09:32 --> 00:09:37
can do we view this as guidance on how

00:09:34 --> 00:09:39
we can invest that I'm going to go

00:09:36 --> 00:09:41
through um you know three companies from

00:09:38 --> 00:09:42
the portfolio's examples that highlight

00:09:40 --> 00:09:43
hree different areas and just very

00:09:41 --> 00:09:45
quickly on them the first one is you're

00:09:42 --> 00:09:47
clearly going to have a new type of

00:09:44 --> 00:09:49
company whose primary interfaces an API

00:09:46 --> 00:09:50
where in the past you know you may have

00:09:48 --> 00:09:53
to build a standalone application that

00:09:49 --> 00:09:56
human is using this time you could just

00:09:52 --> 00:09:58
provide an API every time you have these

00:09:55 --> 00:09:59
disaggregations you have to retool

00:09:57 --> 00:10:01
the infrastructure because the

00:09:58 --> 00:10:03
abstractions change the final one is

00:10:00 --> 00:10:05
whenever you have new disaggregations

00:10:03 --> 00:10:07
you have on top of them the emergence of

00:10:04 --> 00:10:09
new aggregation layers like marketplaces

00:10:06 --> 00:10:12
that help you kind of sift through the

00:10:08 --> 00:10:13
chaos so you know what API can become a

00:10:11 --> 00:10:16
company right we're seeing this

00:10:12 --> 00:10:18
proliferation of companies as primary

00:10:15 --> 00:10:19
interface of an API if you look at a

00:10:17 --> 00:10:21
program how can you determine that an

00:10:18 --> 00:10:22
API can be a company I mean for us you

00:10:20 --> 00:10:24
know the ra the logic is pretty

00:10:21 --> 00:10:27
straightforward right if there's a

00:10:23 --> 00:10:29
function that's sufficiently complex um

00:10:26 --> 00:10:31
that's being used by a large enough

00:10:28 --> 00:10:33
number of applications it's a good

00:10:30 --> 00:10:35
candidate to become an API company we

00:10:32 --> 00:10:36
think a great example of this is sigopt

00:10:34 --> 00:10:38
um so what sigopt does and this is going

00:10:35 --> 00:10:39
to be a mouthful but I'll explain what

00:10:37 --> 00:10:41
it is they do hyperparameter tuning

00:10:38 --> 00:10:42
particularly focus on deep neural

00:10:40 --> 00:10:45
networks all right so what does that

00:10:41 --> 00:10:47
mean most complex systems have some sort

00:10:44 --> 00:10:49
of tunable parameters you know I used to

00:10:46 --> 00:10:50
do physics simulation when I worked at

00:10:48 --> 00:10:52
Lawrence leore National Laboratory and

00:10:49 --> 00:10:54
we'd simulate these large natural

00:10:51 --> 00:10:56
phenomenon and then we look at the

00:10:53 --> 00:10:58
answer and if the answer was incorrect

00:10:55 --> 00:11:00
we'd tweak a bunch of knobs and we'd run

00:10:57 --> 00:11:01
it again and every time we ran it it

00:10:59 --> 00:11:04
ake two weeks because you very large

00:11:00 --> 00:11:05
simulations right and so if we would

00:11:03 --> 00:11:07
have known how to tweak the knobs

00:11:04 --> 00:11:08
correctly to get to the answer faster we

00:11:06 --> 00:11:11
could have saved you know hundreds of

00:11:07 --> 00:11:13
hours of compute time so so large

00:11:10 --> 00:11:16
compute systems whether it's AI

00:11:12 --> 00:11:18
simulations neural networks have these

00:11:15 --> 00:11:22
knobs that you tweak in order to get to

00:11:17 --> 00:11:25
Solutions so what Sig up does is it

00:11:21 --> 00:11:27
allows you to tweak those more quickly

00:11:24 --> 00:11:30
in order to get to the solution okay let

00:11:26 --> 00:11:33
me use a specific example of of AI so if

00:11:29 --> 00:11:36
you're doing MLA modeling there's all of

00:11:32 --> 00:11:37
these parameters that you have to choose

00:11:35 --> 00:11:40
like the link weights the number of

00:11:36 --> 00:11:43
notes you have window sizes Etc right

00:11:39 --> 00:11:46
and so uh in order to know what to do

00:11:42 --> 00:11:47
normally companies will hire teams of

00:11:45 --> 00:11:49
phds that have been working with the

00:11:46 --> 00:11:51
system for a long time that have the

00:11:48 --> 00:11:54
intuition to understand how you tweak

00:11:50 --> 00:11:55
these things mathematically it's very

00:11:53 --> 00:11:57
difficult problem to solve because you

00:11:54 --> 00:11:59
have like these end dimensional spaces

00:11:56 --> 00:12:01
o what Sig op says is saying listen

00:11:58 --> 00:12:03
many many companies is using ML and aai

00:12:00 --> 00:12:07
t's certainly like uh a very powerful

00:12:03 --> 00:12:08
wave within the industry and as a result

00:12:06 --> 00:12:10
you've got many teams of phds trying to

00:12:07 --> 00:12:12
tweak these or nothing at all and you

00:12:09 --> 00:12:14
have suboptimal results so why don't we

00:12:11 --> 00:12:16
take the world's expert who's the

00:12:13 --> 00:12:18
founder of uh Sig op named Scott Clark

00:12:15 --> 00:12:21
who's who's actually a world expert in

00:12:17 --> 00:12:23
basian optimization he can codify his

00:12:20 --> 00:12:25
knowledge and his team's knowledge

00:12:22 --> 00:12:27
behind an API and then any team that's

00:12:24 --> 00:12:30
doing MLA modeling what they can do is

00:12:26 --> 00:12:33
they can query via an API his system it

00:12:29 --> 00:12:35
will tell the company how to tweak the

00:12:32 --> 00:12:37
knobs and'll get better results and by

00:12:34 --> 00:12:40
better results we mean often a factor of

00:12:36 --> 00:12:42
10 faster to get to the solution so in

00:12:39 --> 00:12:44
the case of me doing my simulation at

00:12:41 --> 00:12:45
Livermore instead of taking six months

00:12:43 --> 00:12:49
to do a simulation getting the right

00:12:44 --> 00:12:51
result it may take six weeks as just an

00:12:48 --> 00:12:54
example right all right so I'm going to

00:12:50 --> 00:12:58
move on to um how the move to

00:12:53 --> 00:13:00
apis change the type of infrastructure

00:12:57 --> 00:13:02
we build and and I want to kind of work

00:12:59 --> 00:13:04
my way up there because it may not be so

00:13:01 --> 00:13:07
bvious but every time we have a new

00:13:03 --> 00:13:09
abstraction we have to build particular

00:13:06 --> 00:13:13
infrastructure components to support it

00:13:08 --> 00:13:16
so for example you know in the 70s and

00:13:12 --> 00:13:17
in the 80s and and in the 90s we largely

00:13:15 --> 00:13:19
had physical servers that's what we

00:13:16 --> 00:13:21
would connect together and if you have

00:13:18 --> 00:13:23
physical computers you would have things

00:13:20 --> 00:13:24
like firewalls and routers to connect

00:13:22 --> 00:13:26
hose things like that's the level that

00:13:23 --> 00:13:28
hey operated then of course you saw the

00:13:25 --> 00:13:30
mergence of the web in the mid to late

00:13:27 --> 00:13:31
'90s and then you needed a whole new set

00:13:29 --> 00:13:34
of components that would add things like

00:13:30 --> 00:13:35
security and performance operations on

00:13:33 --> 00:13:38
top of that so you saw the emergence of

00:13:34 --> 00:13:41
things like waffs um proxies and CDN and

00:13:37 --> 00:13:43
these are all entire Industries now you

00:13:40 --> 00:13:44
have another endpoint which is an API

00:13:42 --> 00:13:45
which has a different set of

00:13:43 --> 00:13:46
requirements than both the web and both

00:13:44 --> 00:13:49
physical machines and so we're going to

00:13:45 --> 00:13:51
have to again retool the infrastructure

00:13:49 --> 00:13:53
in order to provide security and get

00:13:50 --> 00:13:54
performance optimization and visibility

00:13:52 --> 00:13:56
debugging and everything else like that

00:13:53 --> 00:13:58
and so we spent a lot of time thinking

00:13:55 --> 00:13:59
and looking at how the infrastructure

00:13:57 --> 00:14:01
will evolve and what new companies will

00:13:58 --> 00:14:03
arise in order to support this new

00:14:00 --> 00:14:07
abstraction so one example of this is an

00:14:02 --> 00:14:10
API Gateway so just like in the late 90s

00:14:06 --> 00:14:11
you'd have a a client that would go to a

00:14:09 --> 00:14:13
web page today you have a client that

00:14:10 --> 00:14:15
goes to an API and there's a lot of

00:14:12 --> 00:14:17
things that you may need to do to

00:14:14 --> 00:14:19
mediate that conversation and that's

00:14:16 --> 00:14:21
what an API Gateway does So Kong for

00:14:18 --> 00:14:23
example is the number one open source

00:14:20 --> 00:14:25
project uh in API gateways and it

00:14:22 --> 00:14:26
provides a lot of functionalities to

00:14:24 --> 00:14:28
help manage the connections between

00:14:25 --> 00:14:30
clients and apis things like it'll do

00:14:27 --> 00:14:31
logging it'll do rate limiting it do

00:14:29 --> 00:14:33
security it'll do authentication it'll

00:14:30 --> 00:14:35
do Key Management it'll do Canary

00:14:32 --> 00:14:36
deployments so again we're seeing like

00:14:34 --> 00:14:39
this evolution of the infrastructure to

00:14:35 --> 00:14:40
support this new sets of abstractions I

00:14:38 --> 00:14:42
think Kong is one of the great

00:14:39 --> 00:14:44
indications that apis are such a big

00:14:41 --> 00:14:46
thing I mean this is the fastest growing

00:14:43 --> 00:14:49
uh open source project we have ever seen

00:14:45 --> 00:14:51
there's millions of downloads uh it's

00:14:48 --> 00:14:53
already a global phenomenon and that is

00:14:50 --> 00:14:55
because you know a it is a very

00:14:52 --> 00:14:57
interesting project and a very well done

00:14:54 --> 00:14:58
project very valuable project but also

00:14:56 --> 00:15:02
because there's so much interest in in

00:14:57 --> 00:15:03
apis now so the final area that I want

00:15:01 --> 00:15:05
o talk to is the emergence of new

00:15:02 --> 00:15:08
aggregation layers so every time that

00:15:04 --> 00:15:11
we've seen a disaggregation or a new

00:15:08 --> 00:15:14
layer emerge a company would come and

00:15:10 --> 00:15:16
overlay a system on top of it and an

00:15:13 --> 00:15:17
aggregation layer in order to make sense

00:15:15 --> 00:15:19
of it you know classic examples like

00:15:16 --> 00:15:21
this are you know you had the web but

00:15:18 --> 00:15:23
hen people need to know how to find web

00:15:20 --> 00:15:24
pages so you'd have Google you had

00:15:22 --> 00:15:26
e-commerce right so people are selling

00:15:23 --> 00:15:28
things on top and you have aggregations

00:15:25 --> 00:15:29
layers like eBay or Amazon so you could

00:15:27 --> 00:15:32
find out what you're doing you would

00:15:28 --> 00:15:34
have where there's this proliferation of

00:15:31 --> 00:15:36
applications so now you need app stores

00:15:33 --> 00:15:37
in order to find which mobile apps to

00:15:35 --> 00:15:39
get access to right I mean this is a

00:15:36 --> 00:15:43
classic way to reign in the complexity

00:15:38 --> 00:15:45
of a new kind of um disaggregation so

00:15:42 --> 00:15:48
ne example of this is rapid API it's

00:15:44 --> 00:15:50
undoubtedly the number one uh API

00:15:47 --> 00:15:52
Marketplace in the world and what it

00:15:49 --> 00:15:54
does I mean it has nearly 10,000 apis on

00:15:51 --> 00:15:57
it and it's got hundreds of thousands of

00:15:53 --> 00:15:58
developers that use it and the way it

00:15:56 --> 00:16:00
works is if you're a developer and you

00:15:57 --> 00:16:02
want to find an API

00:15:59 --> 00:16:04
to use in say your mobile app you go to

00:16:01 --> 00:16:06
Rapid API and it'll give you access to

00:16:03 --> 00:16:09
it and it'll also help you use it so

00:16:05 --> 00:16:11
it'll actually acts as an intermediary

00:16:08 --> 00:16:12
so that you talk to Rapid API and it

00:16:10 --> 00:16:13
handles things like security like

00:16:11 --> 00:16:15
visibility like performance like load

00:16:12 --> 00:16:18
balancing and then it'll connect you on

00:16:14 --> 00:16:19
to the actual API that's being used and

00:16:17 --> 00:16:21
again this is like one of the more

00:16:18 --> 00:16:24
quickly growing communities that we've

00:16:21 --> 00:16:25
seen and we believe this is you know

00:16:23 --> 00:16:27
because it's a useful service but again

00:16:24 --> 00:16:30
it's because we are seeing such a growth

00:16:26 --> 00:16:30
and proliferation of apis all right so

00:16:29 --> 00:16:33
with that I'm going to wrap it up a

00:16:29 --> 00:16:35
little bit I just want to summarize very

00:16:32 --> 00:16:39
quickly so at the highest level you know

00:16:34 --> 00:16:41
e believe just like mainframes gave way

00:16:38 --> 00:16:42
to decoupling of software and Hardware

00:16:40 --> 00:16:44
gave way to disaggregating of the app

00:16:41 --> 00:16:46
and apps for Standalone companies we

00:16:43 --> 00:16:48
think parts of apps or apis are now

00:16:45 --> 00:16:50
Standalone companies we think that's the

00:16:47 --> 00:16:51
next wave of disaggregation uh the

00:16:49 --> 00:16:53
implications of that we think are very

00:16:50 --> 00:16:54
broad I mean from an industry standpoint

00:16:52 --> 00:16:55
you're going to see more Innovation than

00:16:53 --> 00:16:57
you've ever seen before because it's

00:16:54 --> 00:16:58
easier and easier to write apps and it's

00:16:56 --> 00:17:00
easier and easier to write

00:16:57 --> 00:17:01
infrastructure components for us you

00:16:59 --> 00:17:03
know this is really exciting because

00:17:00 --> 00:17:04
there's a whole new classes of startups

00:17:02 --> 00:17:06
there's new types of infrastructure and

00:17:03 --> 00:17:08
new aggregation layers to invest in and

00:17:05 --> 00:17:10
I do want to make one point for those of

00:17:07 --> 00:17:12
you that are listening when it comes to

00:17:09 --> 00:17:13
it is like listen if you're an operator

00:17:11 --> 00:17:16
and you're working with it this move to

00:17:12 --> 00:17:17
apis actually changes things right it's

00:17:15 --> 00:17:21
no longer about downloading installing

00:17:16 --> 00:17:22
applications one program that one

00:17:20 --> 00:17:24
application that's running on a mobile

00:17:21 --> 00:17:26
computer for example may be using you

00:17:23 --> 00:17:28
know 17 remote apis in fact that's the

00:17:25 --> 00:17:30
average that it's using and so apis more

00:17:27 --> 00:17:32
and more are becoming the of operations

00:17:29 --> 00:17:33
you know I lived through the days of

00:17:31 --> 00:17:35
like the transformation of operations

00:17:32 --> 00:17:37
going from physical servers to VMS to

00:17:35 --> 00:17:39
Containers now we start to have to think

00:17:36 --> 00:17:43
about it as an API so I think this is a

00:17:38 --> 00:17:46
good Koda which is apis impact a broad

00:17:42 --> 00:17:48
swath of things from the tech ecosystem

00:17:45 --> 00:17:50
to investors to operations and I think

00:17:47 --> 00:17:51
it's something that anybody that's in

00:17:49 --> 00:17:55
the industry should understand the

00:17:50 --> 00:17:55
implications of thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
