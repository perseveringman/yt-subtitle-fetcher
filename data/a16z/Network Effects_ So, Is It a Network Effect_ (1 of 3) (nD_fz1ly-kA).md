---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "nD_fz1ly-kA"
title: "Network Effects: So, Is It a Network Effect? (1 of 3)"
video_url: "https://www.youtube.com/watch?v=nD_fz1ly-kA"
thumbnail_url: "https://i.ytimg.com/vi/nD_fz1ly-kA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=nD_fz1ly-kA"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-03-30T05:04:14.000Z"
upload_date: "2019-03-30"
duration_seconds: 428
duration_human: "7:08"
view_count: 18778
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:34:49.310Z"
---

# Network Effects: So, Is It a Network Effect? (1 of 3)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=nD_fz1ly-kA
- video_id: nD_fz1ly-kA
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-03-30T05:04:14.000Z
- upload_date: 2019-03-30
- duration: 7:08
- view_count: 18778
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: Andreessen Horowitz, a16z, networks, network effects, brands, scale effects, startups, entrepreneurship
- categories: Science & Technology

## Description

Some of the most successful companies and products -- from the phone era to the internet era -- have all been predicated on the concept of network effects, where the network becomes more valuable to users as more people use it.

But how do you tell network effects apart from scale effects, brand preference, or increasing returns (an idea popularized by W. Brian Arthur) -- or other phenomena that are not actually network effects? What about "data network effects", which startups powered by machine learning like to highlight? And are network effects really durable competitive moats?

Consumer deal & investing team partners D'Arcy Coolican and Li Jin -- who recently co-wrote a pair of posts on the dynamics and metrics of network effects -- share their insights with a16z operating partner Frank Chen in this three-part video miniseries... We're all about network effects, after all: https://a16z.com/tag/all-about-network-effects/

Here are a few related blogs posts and presentations we've published:
https://a16z.com/2016/03/07/all-about-network-effects/
https://a16z.com/2018/12/13/network-effects-dynamics-in-practice/
https://a16z.com/2018/12/13/16-metrics-network-effects/

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:09 --> 00:00:15
why don't we start with what is a

00:00:12 --> 00:00:17
network effect and I think if most silic

00:00:14 --> 00:00:19
Valley people think about it they'll

00:00:16 --> 00:00:22
think about Bob metf the inventor of

00:00:18 --> 00:00:24
ethernet who proposed that the value of

00:00:21 --> 00:00:26
communications Network he was thinking

00:00:23 --> 00:00:29
about phones and fax machines and of

00:00:25 --> 00:00:32
course ethernet is sort of the value of

00:00:28 --> 00:00:34
that network is the square of the number

00:00:31 --> 00:00:36
of people on that Network right so the

00:00:33 --> 00:00:38
intuition is look the the first two

00:00:35 --> 00:00:42
phones not that useful if everybody has

00:00:37 --> 00:00:44
a phone or a fax machine that is expon

00:00:41 --> 00:00:47
ential value so is that the right

00:00:43 --> 00:00:50
definition for a network effect yeah I

00:00:46 --> 00:00:53
think at a high level the um the

00:00:49 --> 00:00:56
underlying idea behind meta's law is

00:00:52 --> 00:00:58
right in terms of the classical

00:00:55 --> 00:01:01
definition of network effect would be

00:00:57 --> 00:01:04
that as um a product or a service

00:01:00 --> 00:01:07
has more users it becomes more valuable

00:01:03 --> 00:01:09
to all of the existing users so meta's

00:01:06 --> 00:01:12
law basically states that the value of a

00:01:08 --> 00:01:14
network is proportional to the square of

00:01:11 --> 00:01:17
the number of users who are in that

00:01:13 --> 00:01:21
Network and we think that that

00:01:16 --> 00:01:23
definition is um oversimplified and

00:01:20 --> 00:01:25
actually just objectively incorrect if

00:01:22 --> 00:01:27
you look at a lot of just like public

00:01:24 --> 00:01:30
ompany valuations especially as their

00:01:26 --> 00:01:32
networks have grown um and so today

00:01:29 --> 00:01:34
we'll talk talk through a lot of the

00:01:31 --> 00:01:38
underlying subtleties and dynamics of

00:01:33 --> 00:01:41
network effects um in addition to just

00:01:37 --> 00:01:44
hat are additional factors to consider

00:01:40 --> 00:01:46
Beyond just the number of users H that's

00:01:43 --> 00:01:48
juicy so why don't we start unpacking it

00:01:45 --> 00:01:50
like what's wrong with meta's law and

00:01:47 --> 00:01:52
understanding the power of network

00:01:49 --> 00:01:54
effect so I I think there's one one

00:01:51 --> 00:01:57
additional subtlety here which is like

00:01:53 --> 00:01:59
me's law the the definition of network

00:01:56 --> 00:02:01
effect is that it's a network and I

00:01:58 --> 00:02:03
think that can sometimes be slightly

00:02:00 --> 00:02:05
confusing for people so I think you know

00:02:02 --> 00:02:07
hen Mecha law came around the canonical

00:02:04 --> 00:02:09
example was the telephone Network which

00:02:06 --> 00:02:10
is very simple because it's like a

00:02:08 --> 00:02:12
physical Network that you can actually

00:02:09 --> 00:02:14
relate to and as the concept of network

00:02:11 --> 00:02:15
effects has evolved into like more and

00:02:13 --> 00:02:17
more iterations and more and more

00:02:14 --> 00:02:20
subtlety around different types of

00:02:16 --> 00:02:23
network effect this concept of a network

00:02:19 --> 00:02:24
can sometimes get you know can get lost

00:02:22 --> 00:02:26
in the metaphor um so if you look at

00:02:23 --> 00:02:29
Data Network effects where you know the

00:02:25 --> 00:02:31
value is actually that like data acrs to

00:02:28 --> 00:02:33
a particular place or to a particular

00:02:30 --> 00:02:34
company and then that can make the the

00:02:32 --> 00:02:37
product more valuable it actually

00:02:33 --> 00:02:39
doesn't necessarily feel like a network

00:02:36 --> 00:02:41
it doesn't like if you visualize it and

00:02:38 --> 00:02:44
maybe doesn't look like a network um but

00:02:40 --> 00:02:45
it still exhibits those kind of network

00:02:43 --> 00:02:47
effects and so I think the other

00:02:44 --> 00:02:48
definition which I think I personally

00:02:46 --> 00:02:50
find a little more compelling is um

00:02:48 --> 00:02:52
Brian Arthur from the Santa Fe Institute

00:02:49 --> 00:02:55
talks about it as I think he calls it

00:02:51 --> 00:02:56
like increasing Advantage right or like

00:02:54 --> 00:02:58
I I tend to think of it as like

00:02:55 --> 00:03:00
accumulating Advantage right and it's

00:02:57 --> 00:03:02
like is what you're building is the

00:02:59 --> 00:03:05
product need less and less work to be

00:03:01 --> 00:03:07
more and more valuable as you go along

00:03:04 --> 00:03:09
and you know attaching that product or

00:03:06 --> 00:03:11
service to a network with more nodes

00:03:08 --> 00:03:14
coming into the network is like one

00:03:10 --> 00:03:15
iteration of that but as you think about

00:03:13 --> 00:03:17
different versions of network effects

00:03:14 --> 00:03:19
the kind of the metaphor of a network

00:03:16 --> 00:03:21
can sometimes feel a little bit strained

00:03:18 --> 00:03:22
MH so on the one hand you have things

00:03:20 --> 00:03:24
that are sort of clearly networks

00:03:21 --> 00:03:26
they're sort of nodes attached to each

00:03:23 --> 00:03:29
other and you can draw the computer

00:03:25 --> 00:03:33
sciencey graph right phones fax machines

00:03:28 --> 00:03:35
a lift driver Airbnb hosts and guests

00:03:32 --> 00:03:37
right and you're saying no there's like

00:03:34 --> 00:03:38
more subtlety so a Data Network effect

00:03:36 --> 00:03:40
is something we hear from machine

00:03:37 --> 00:03:42
learning startups all the time which is

00:03:39 --> 00:03:44
if I have a 100 customers and I can

00:03:41 --> 00:03:46
listen to all their customer support

00:03:43 --> 00:03:48
calls then my modelss will be better

00:03:45 --> 00:03:49
ight and make better predictions and

00:03:47 --> 00:03:51
therefore I have a Data Network effect

00:03:48 --> 00:03:54
and so that's a little harder to

00:03:50 --> 00:03:56
visualize right but but both are kind of

00:03:53 --> 00:03:57
accumulating advantages business both

00:03:55 --> 00:04:00
businesses will get better and

00:03:56 --> 00:04:03
better as the business grows yeah I sort

00:03:59 --> 00:04:06
of push back against that definition of

00:04:02 --> 00:04:07
accumulating Advantage as being the sign

00:04:05 --> 00:04:10
of a company having network effects

00:04:06 --> 00:04:13
because I think accumulating Advantage

00:04:09 --> 00:04:15
is a little too broad and encompasses

00:04:12 --> 00:04:18
many more effects Beyond just the

00:04:14 --> 00:04:20
network effect so scale effect companies

00:04:17 --> 00:04:23
that have economies of scale are also

00:04:19 --> 00:04:25
examples of accumulating Advantage where

00:04:22 --> 00:04:28
for instance like Amazon because of that

00:04:24 --> 00:04:31
huge upfront fixed cost investment they

00:04:27 --> 00:04:33
also accumulate an advantage as they get

00:04:30 --> 00:04:37
larger and can amortise that cost over

00:04:32 --> 00:04:39
many more customers um so I think it's

00:04:36 --> 00:04:41
definitely true that Network effects are

00:04:38 --> 00:04:44
powerful and important because there's

00:04:40 --> 00:04:46
that core flywheel and it sort of

00:04:43 --> 00:04:49
implies that the big get bigger um but I

00:04:45 --> 00:04:51
think accumulating Advantage it's

00:04:48 --> 00:04:53
definitely present in a network effects

00:04:50 --> 00:04:55
company but it's not sufficient to say

00:04:52 --> 00:04:56
that something has Network effect in

00:04:54 --> 00:04:58
other words not all cumulative

00:04:55 --> 00:05:01
advantages are actually Network effects

00:04:57 --> 00:05:03
right so scale brand

00:05:00 --> 00:05:04
longevity right all of these things

00:05:02 --> 00:05:05
which oh I've heard of this company

00:05:03 --> 00:05:07
therefore I'm inclined to buy their

00:05:04 --> 00:05:08
product that's not a network effect is

00:05:06 --> 00:05:10
what you're saying exactly well I think

00:05:07 --> 00:05:11
there's an interesting debate

00:05:09 --> 00:05:13
about whether a brand do a network

00:05:10 --> 00:05:16
effect oh let's have that debate love it

00:05:12 --> 00:05:18
yeah I mean there's a there's a I think

00:05:15 --> 00:05:20
there's I'm of two minds of this and I

00:05:17 --> 00:05:21
think there's kind of very very

00:05:19 --> 00:05:24
interesting Arguments for and against

00:05:20 --> 00:05:27
brand as a network effect um you know

00:05:23 --> 00:05:28
the idea of if you know I think Hines

00:05:26 --> 00:05:31
ketchup is like an example right if I'm

00:05:28 --> 00:05:32
a restaurant do I buy Hind ketchup

00:05:30 --> 00:05:34
because everybody knows hin katchup and

00:05:31 --> 00:05:36
I know that if I put Hines ketchup on my

00:05:33 --> 00:05:37
table then everybody you know it's going

00:05:35 --> 00:05:39
to be the one it's going to be like the

00:05:36 --> 00:05:41
focal point that everybody agrees on and

00:05:38 --> 00:05:42
so therefore like people buy Hines

00:05:40 --> 00:05:44
ketchup more people taste Hines ketchup

00:05:41 --> 00:05:46
more people know that Hines ketchup is

00:05:43 --> 00:05:48
kind of like this Mass Market brand so

00:05:45 --> 00:05:50
there there's like you know but I think

00:05:47 --> 00:05:51
Brands can mean different things Brands

00:05:49 --> 00:05:53
can have different value so I think

00:05:50 --> 00:05:55
there is a kind of open debate around

00:05:52 --> 00:05:58
whether brand is a network effect or not

00:05:54 --> 00:05:59
yeah I will grant that brands have

00:05:57 --> 00:06:01
Network effects through the mechanism

00:05:59 --> 00:06:03
that you're talking about about like I

00:06:00 --> 00:06:05
think as a product becomes more

00:06:02 --> 00:06:07
ubiquitous as a brand becomes more

00:06:04 --> 00:06:09
wellknown the effect is that more people

00:06:06 --> 00:06:12
hear about it their beliefs about it

00:06:08 --> 00:06:14
sort of solidify um people actually

00:06:11 --> 00:06:17
develop a taste for Hines ketchup and

00:06:13 --> 00:06:19
actually grow to prefer it but when you

00:06:16 --> 00:06:21
stretch the definition of network

00:06:18 --> 00:06:24
effects to Encompass things like hindes

00:06:20 --> 00:06:26
and Brands I wonder like at what point

00:06:23 --> 00:06:28
does the concept of a network effect

00:06:25 --> 00:06:30
even become useful because you could say

00:06:27 --> 00:06:32
that about not just Hines ketchup but

00:06:29 --> 00:06:34
like you could say that about any brand

00:06:31 --> 00:06:36
that you encounter when walking down the

00:06:33 --> 00:06:39
street and so how useful is that concept

00:06:35 --> 00:06:41
even when you I mean everything can have

00:06:38 --> 00:06:44
Network effects if you yeah if you

00:06:40 --> 00:06:47
stretch it that far I think a lot of the

00:06:43 --> 00:06:49
confusion um and I guess me

00:06:46 --> 00:06:51
like disagreement around Network effects

00:06:48 --> 00:06:53
comes down to this like foundational

00:06:50 --> 00:06:55
definition right of like what you know

00:06:52 --> 00:06:57
is a Branded Network effect you know if

00:06:54 --> 00:07:00
we stretch the analogy that far does it

00:06:56 --> 00:07:01
lose its value you know but if we

00:06:59 --> 00:07:03
xclude things like brands from the

00:07:01 --> 00:07:06
definition of network effect then are we

00:07:02 --> 00:07:08
kind of narrowly defining it into like a

00:07:05 --> 00:07:10
box that maybe it actually encompasses

00:07:07 --> 00:07:10
more than

<!-- YOUTUBE_TRANSCRIPT_END -->
