---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "kzFwwIDWU38"
title: "AI is Revolutionizing Web Security - Bots, Agents, & Real-Time Defense"
video_url: "https://www.youtube.com/watch?v=kzFwwIDWU38"
thumbnail_url: "https://i.ytimg.com/vi/kzFwwIDWU38/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=kzFwwIDWU38"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-06-16T17:37:38.000Z"
upload_date: "2025-06-16"
duration_seconds: 1458
duration_human: "24:18"
view_count: 2504
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:46:23.755Z"
---

# AI is Revolutionizing Web Security - Bots, Agents, & Real-Time Defense

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=kzFwwIDWU38
- video_id: kzFwwIDWU38
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-06-16T17:37:38.000Z
- upload_date: 2025-06-16
- duration: 24:18
- view_count: 2504
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Arcjet CEO David Mytton sits down with a16z partner Joel de la Garza to discuss the increasing complexity of managing who can access websites, and other web apps, and what they can do there. A primary challenge is determining whether automated traffic is coming from bad actors and troublesome bots, or perhaps AI agents trying to buy a product on behalf of a real customer.

Joel and David dive into the challenge of analyzing every request without adding latency, and how faster inference at the edge opens up new possibilities for fraud prevention, content filtering, and even ad tech.
Topics include:

- Why traditional threat analysis won’t work for the AI-powered web
- The need for full-context security checks
- How to perform sub-second, cost-effective inference
- The wide range of potential actors and actions behind any given visit

As David puts it, lower inference costs are key to letting apps act on the full context window — everything you know about the user, the session, and your application.

Follow everyone on social media:

David Mytton: https://x.com/davidmytton
Joel de la Garza: https://www.linkedin.com/in/3448827723723234/

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts here: https://a16z.com/ai/

Timestamps:
00:00 Introduction
00:34 The Emergence of AI Bots and Good that Can Come From Them
02:43 Good Traffic vs Bad Traffic | Challenges for Developers and Security Teams
03:23 Solutions In The Space
04:37 The Role Of Robots.Txt
06:42 Understanding AI Agents, and How They Operate
10:55 Controlling Traffic Flow At Internet Scale
12:51 Building Up Fingerprints
18:45 Bot Behavior and What The New Generation Of AI Allows 
22:39 The Future Of LLM’s Running Locally

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
50% of traffic is already bots. It's

00:00:03 --> 00:00:08
already automated and agents are only

00:00:06 --> 00:00:11
really just getting going. Most people

00:00:08 --> 00:00:12
are not using these computer use agents

00:00:10 --> 00:00:14
because they're too slow right now.

00:00:12 --> 00:00:16
They're still at previews, but it's

00:00:13 --> 00:00:19
clear that's where everything is going.

00:00:15 --> 00:00:21
Then we're going to see an explosion in

00:00:18 --> 00:00:23
the traffic coming from these tools. And

00:00:20 --> 00:00:25
just blocking them just because they're

00:00:22 --> 00:00:27
AI is the wrong answer. You've really

00:00:24 --> 00:00:29
got to understand why you want them,

00:00:26 --> 00:00:30
what they're doing, who they're coming

00:00:28 --> 00:00:33
from, and then you can create these

00:00:29 --> 00:00:33
granular rules.

00:00:35 --> 00:00:40
It seems like what once was old is new

00:00:37 --> 00:00:41
again. And would love to would love to

00:00:39 --> 00:00:44
get your thoughts on this this new

00:00:40 --> 00:00:46
emergence of of bots and how while we

00:00:44 --> 00:00:48
know all the bad things that happen with

00:00:45 --> 00:00:49
em, there's actually a lot of good and

00:00:47 --> 00:00:50
really cool stuff that's happening and

00:00:48 --> 00:00:53
how we can maybe work towards enabling

00:00:50 --> 00:00:56
that. Right. Well, things have changed,

00:00:52 --> 00:00:58
right? the DOS problem is still there,

00:00:55 --> 00:00:59
but it's just almost handled as a

00:00:57 --> 00:01:02
commodity these days. The network

00:00:58 --> 00:01:04
provider, your cloud provider, they'll

00:01:01 --> 00:01:05
just deal with it. And so when you're

00:01:03 --> 00:01:06
deploying an application, most of the

00:01:04 --> 00:01:09
time you just don't have to think about

00:01:05 --> 00:01:12
it. The challenge comes when you've got

00:01:08 --> 00:01:14
raffic that just doesn't fit those

00:01:11 --> 00:01:17
filters. It looks like it could be

00:01:13 --> 00:01:18
legitimate or maybe it is legitimate and

00:01:16 --> 00:01:19
you just have a different view about

00:01:17 --> 00:01:22
what kind of traffic you want to see.

00:01:18 --> 00:01:23
And so the challenge is really about how

00:01:21 --> 00:01:25
do you distinguish between the good bots

00:01:22 --> 00:01:28
and the bad bots? And then with AI

00:01:24 --> 00:01:30
changing things, it's bots that might

00:01:27 --> 00:01:33
even be acting on behalf of humans,

00:01:30 --> 00:01:36
right? It's no longer a binary decision.

00:01:32 --> 00:01:37
And as the amount of traffic from bots

00:01:35 --> 00:01:39
increases, like in some cases, it's the

00:01:36 --> 00:01:42
majority of traffic that sites are

00:01:38 --> 00:01:44
ceiving is from an automated source.

00:01:41 --> 00:01:46
And so the question for site owners is,

00:01:43 --> 00:01:49
well, what kind of traffic do you want

00:01:45 --> 00:01:51
o allow? And when it's automated, what

00:01:48 --> 00:01:52
kind of automated traffic should come to

00:01:50 --> 00:01:55
your site and what are you getting in

00:01:51 --> 00:01:56
return for that? And in the old days, I

00:01:54 --> 00:01:58
mean, I guess the old the old providers,

00:01:56 --> 00:02:00
we'll say the legacy providers in this

00:01:57 --> 00:02:03
pace, like it was very much using a

00:02:00 --> 00:02:05
hammer, right? So they would say, hey,

00:02:02 --> 00:02:07
if if this IP address is coming in, it's

00:02:04 --> 00:02:09
probably a bot. Or they would say, if

00:02:06 --> 00:02:11
this user agent is coming in, it's

00:02:08 --> 00:02:13
probably a bot. Very imprecise. And I

00:02:10 --> 00:02:14
think the downside of that is that you

00:02:12 --> 00:02:17
probably blocked a lot of legitimate

00:02:14 --> 00:02:19
traffic along with illegitimate traffic.

00:02:16 --> 00:02:21
And now there's very real consequences

00:02:18 --> 00:02:23
because some of these AI bots could be

00:02:20 --> 00:02:25
actual users. They're acting on behalf

00:02:22 --> 00:02:27
of who are looking to purchase your

00:02:24 --> 00:02:29
products. This is the challenge. So a a

00:02:26 --> 00:02:31
volutric DOS attack, you just want to

00:02:28 --> 00:02:32
block that at the network. You never

00:02:30 --> 00:02:35
want to see that traffic. But everything

00:02:31 --> 00:02:36
else needs the context of the

00:02:34 --> 00:02:38
application. You need to know where in

00:02:35 --> 00:02:40
the application the traffic is coming

00:02:37 --> 00:02:42
to. You need to know who the user is,

00:02:39 --> 00:02:44
the session and to understand in which

00:02:41 --> 00:02:46
case you want to allow or deny that. And

00:02:43 --> 00:02:48
so this is this is the real issue for

00:02:45 --> 00:02:51
developers, for site owners, for

00:02:47 --> 00:02:54
security teams is to make those really

00:02:50 --> 00:02:55
nuanced decisions to understand whether

00:02:53 --> 00:02:57
the traffic should be allowed or not.

00:02:54 --> 00:02:59
And the context of the application

00:02:56 --> 00:03:00
itself is so important because it

00:02:58 --> 00:03:02
depends on the site. Like if you're

00:02:59 --> 00:03:04
running an e-commerce operation, an

00:03:01 --> 00:03:06
online store, the worst thing you can do

00:03:03 --> 00:03:08
is block a transaction because then

00:03:05 --> 00:03:10
you've lost the revenue. Usually you

00:03:07 --> 00:03:12
want to then flag that order for review.

00:03:09 --> 00:03:14
A human customer support person is going

00:03:11 --> 00:03:16
to come in and and determine based on

00:03:13 --> 00:03:18
various signals about whether to allow

00:03:15 --> 00:03:20
it. And if you just block that at the

00:03:17 --> 00:03:22
network, then your application will

00:03:19 --> 00:03:24
never see it. You never even know that

00:03:21 --> 00:03:27
order was failed in some way.

00:03:23 --> 00:03:28
There's been a lot of media uh releases

00:03:26 --> 00:03:31
about companies that have released

00:03:27 --> 00:03:33
solutions in this space, but largely

00:03:30 --> 00:03:34
they were based on sort of those old

00:03:32 --> 00:03:38
kind of approaches using network

00:03:33 --> 00:03:40
telemetry. Is that generally how they're

00:03:37 --> 00:03:42
working now or is there is there some

00:03:39 --> 00:03:43
other capabilities that they've released

00:03:41 --> 00:03:45
because they they give them AI names and

00:03:42 --> 00:03:46
you just immediately assume that they're

00:03:44 --> 00:03:48
doing something fancy. That's right.

00:03:45 --> 00:03:50
Yeah. So blocking on the network is

00:03:47 --> 00:03:53
basically how the majority of these old

00:03:49 --> 00:03:54
school products work. They do analysis

00:03:52 --> 00:03:56
before the traffic reaches your

00:03:53 --> 00:03:58
application and then you never know what

00:03:55 --> 00:04:00
he result of that was. And that just

00:03:57 --> 00:04:02
doesn't fly anymore. It's it's

00:03:59 --> 00:04:04
insufficient for being able to build

00:04:01 --> 00:04:06
modern applications. particularly with

00:04:03 --> 00:04:09
AI coming in where something like Open

00:04:05 --> 00:04:11
AI has four or five different types of

00:04:08 --> 00:04:13
bots and some of them you might want to

00:04:10 --> 00:04:15
make a a more restrictive decision over

00:04:12 --> 00:04:17
but then others are going to be taking

00:04:14 --> 00:04:20
actions on behalf of a user search and

00:04:16 --> 00:04:21
we're seeing lots of different

00:04:19 --> 00:04:23
applications getting more signups

00:04:20 --> 00:04:25
businesses actually getting higher

00:04:22 --> 00:04:27
conversions as a result of this AI

00:04:24 --> 00:04:30
traffic and so just blocking anything

00:04:26 --> 00:04:33
that is called AI is too blunt of an

00:04:29 --> 00:04:35
instrument you need much more nuance And

00:04:32 --> 00:04:36
the only way you can do that is with the

00:04:34 --> 00:04:38
application context, understanding

00:04:35 --> 00:04:40
what's going on inside your code. I

00:04:37 --> 00:04:42
mean, I'd say we're seeing across the

00:04:39 --> 00:04:44
industry that AI is driving incredible

00:04:41 --> 00:04:45
amounts of new revenue to companies. And

00:04:43 --> 00:04:47
if you use an old world tool to just

00:04:44 --> 00:04:48
block any of that traffic, you're

00:04:46 --> 00:04:50
probably duping your business. That's

00:04:47 --> 00:04:52
right. Or you're you're like putting it

00:04:49 --> 00:04:54
into some kind of maze where it's seeing

00:04:51 --> 00:04:56
irrelevant content. And then by doing

00:04:53 --> 00:04:58
that, you are kind of downranking your

00:04:56 --> 00:05:00
site because the AI crawler is never

00:04:58 --> 00:05:02
going to come back. It's it's kind of

00:04:59 --> 00:05:04
like blocking Google from from visiting

00:05:01 --> 00:05:06
your site. It's like yeah, Google

00:05:03 --> 00:05:07
doesn't get you in you no longer in

00:05:05 --> 00:05:09
Google's index, but then you're no

00:05:06 --> 00:05:11
longer in Google's index and so anyone

00:05:08 --> 00:05:13
searching is not going to find you as a

00:05:10 --> 00:05:15
result. Well, and and I believe we had

00:05:12 --> 00:05:16
sort of standards in the old days that

00:05:14 --> 00:05:19
developed or quasi standards like

00:05:15 --> 00:05:20
robots.ext, right, which would tell you

00:05:18 --> 00:05:22
like it and tell the crawlers, hey,

00:05:19 --> 00:05:24
don't crawl these directories. Are we

00:05:21 --> 00:05:26
doing something similar for this new age

00:05:23 --> 00:05:29
ntic world? So robots.ext text is

00:05:26 --> 00:05:32
till the starting place and it's kind

00:05:28 --> 00:05:34
of a voluntary standard. It's it it

00:05:31 --> 00:05:36
evolved over over several decades ago

00:05:33 --> 00:05:38
now. It's been around a long time. Bots

00:05:35 --> 00:05:40
have been a problem for a long time. And

00:05:37 --> 00:05:43
the idea is you describe the areas of

00:05:39 --> 00:05:45
your application and tell any robot

00:05:42 --> 00:05:47
hat's coming to your site whether you

00:05:44 --> 00:05:49
want to allow that robot to access that

00:05:46 --> 00:05:52
area of the site or not. And you could

00:05:48 --> 00:05:54
use that to control the roll out of new

00:05:51 --> 00:05:55
content. You could protect certain pages

00:05:53 --> 00:05:57
of your site that you just don't want to

00:05:54 --> 00:05:59
be indexed for whatever reason. And you

00:05:56 --> 00:06:01
can also point the crawler to where you

00:05:58 --> 00:06:03
do want it to go. You can use the site

00:06:00 --> 00:06:06
map for that as well. But the robots

00:06:02 --> 00:06:08
text file format has has evolved over

00:06:05 --> 00:06:11
time to provide these signals to the

00:06:07 --> 00:06:13
likes to to crawlers like search engines

00:06:10 --> 00:06:15
from Google and so on. The challenge

00:06:12 --> 00:06:18
with that is it's voluntary and there's

00:06:14 --> 00:06:20
no enforcement of it. And so you've got

00:06:17 --> 00:06:22
good bots like Google bot that will

00:06:19 --> 00:06:24
follow the standard and you'll be able

00:06:21 --> 00:06:26
to have full control over what it does

00:06:23 --> 00:06:28
and but there are newer bots that are

00:06:25 --> 00:06:30
ignoring it or even sometimes using it

00:06:27 --> 00:06:32
as a way to find the parts of your site

00:06:29 --> 00:06:34
that you don't want it to access and

00:06:31 --> 00:06:36
they will just do that anyway. And so

00:06:33 --> 00:06:38
this becomes a control problem for the

00:06:35 --> 00:06:40
site owner and you really want to be

00:06:37 --> 00:06:42
able to understand not just what the

00:06:40 --> 00:06:44
list of rules are but how they are

00:06:41 --> 00:06:48
nforced. Totally. Maybe it'd be great

00:06:44 --> 00:06:50
o walk through what these agents are.

00:06:47 --> 00:06:52
Maybe maybe get some more understanding

00:06:49 --> 00:06:54
of sort of how they operate, what people

00:06:51 --> 00:06:57
are using them for. Perhaps go through a

00:06:54 --> 00:06:58
couple of the use cases and then it'd be

00:06:56 --> 00:07:00
great to understand sort of like how you

00:06:57 --> 00:07:02
do control it because it seems like a

00:06:59 --> 00:07:05
far more complicated problem than just

00:07:01 --> 00:07:07
bad IP addresses, right? So if we think

00:07:04 --> 00:07:09
about OpenAI as an example because they

00:07:06 --> 00:07:11
have four or five different crawlers um

00:07:08 --> 00:07:13
there's one and they all have different

00:07:10 --> 00:07:15
names and they all identify themselves

00:07:12 --> 00:07:17
in different different ways. So one

00:07:14 --> 00:07:19
actually is crawling to train the open

00:07:16 --> 00:07:21
AI models on your site and that's the

00:07:18 --> 00:07:22
one that probably everyone is thinking

00:07:20 --> 00:07:25
about when they're thinking about I want

00:07:22 --> 00:07:27
o block AI the training and you have

00:07:24 --> 00:07:28
different philosophical approaches to

00:07:26 --> 00:07:30
how you want to be included in in the

00:07:27 --> 00:07:33
training data. The others are more

00:07:29 --> 00:07:35
nuanced and more require more thought.

00:07:32 --> 00:07:38
Um, so there's one that will go out when

00:07:34 --> 00:07:41
a user um is typing something into the

00:07:37 --> 00:07:43
chat and has asked a question and open

00:07:40 --> 00:07:45
will go out and search. Um, it's built

00:07:42 --> 00:07:47
up its own search index. And so that's

00:07:44 --> 00:07:50
equivalent of Googlebot. You probably

00:07:46 --> 00:07:52
want to be in that index because as we

00:07:49 --> 00:07:53
're seeing sites are getting more

00:07:51 --> 00:07:55
signups, they're getting more traffic.

00:07:52 --> 00:07:57
The discovery process is being part of

00:07:54 --> 00:07:59
just another search index is super

00:07:56 --> 00:08:01
important. Gotcha. So like when I ask

00:07:58 --> 00:08:02
OpenAI, what when is John F. Kennedy's

00:08:00 --> 00:08:04
birthday? If it doesn't know the answer,

00:08:01 --> 00:08:05
it goes out and and searches the web.

00:08:03 --> 00:08:07
Yeah, that's right. Or if it's trying to

00:08:04 --> 00:08:09
get open hours for something, it might

00:08:06 --> 00:08:11
go to a website for a cafe or whatever

00:08:08 --> 00:08:13
and and pass it and then return the

00:08:10 --> 00:08:14
results. So that's really just like a

00:08:12 --> 00:08:16
classic search engine crawler, except

00:08:14 --> 00:08:18
it's kind of happening behind the

00:08:15 --> 00:08:20
scenes. Um, the other one is something

00:08:17 --> 00:08:23
that's happening in real time. So you

00:08:19 --> 00:08:25
might give the agent a specific URL and

00:08:22 --> 00:08:28
go and ask it to summarize it or to look

00:08:24 --> 00:08:29
up a particular question in the docs um

00:08:27 --> 00:08:31
for a developer tool or something like

00:08:28 --> 00:08:32
that. And then that's a separate agent

00:08:30 --> 00:08:34
hat will go out. It will read the

00:08:31 --> 00:08:36
website and then it will return and

00:08:33 --> 00:08:39
answer the the query. For both of these

00:08:35 --> 00:08:42
two examples, OpenAI and others will are

00:08:38 --> 00:08:43
now starting to site those sources. And

00:08:41 --> 00:08:45
you'll regularly see and this is kind of

00:08:42 --> 00:08:48
the recommendation is you get the result

00:08:44 --> 00:08:50
from from the AI tool, but you shouldn't

00:08:47 --> 00:08:52
rust it 100%. you go and then verify

00:08:49 --> 00:08:53
and you look at the docs and maybe it's

00:08:51 --> 00:08:55
like when you used to go to Wikipedia

00:08:52 --> 00:08:56
nd you'd read the summary and then you

00:08:54 --> 00:08:58
look at the references and you'd go to

00:08:55 --> 00:09:00
all the references and check to make

00:08:57 --> 00:09:01
sure what had been summarized is

00:08:59 --> 00:09:03
actually correct. But all three of those

00:09:00 --> 00:09:05
xamples, you clearly could see why you

00:09:02 --> 00:09:07
would want them accessing your site by

00:09:04 --> 00:09:09
like blocking all of OpenAI's crawlers

00:09:06 --> 00:09:10
is probably a very bad idea. Yeah, it's

00:09:08 --> 00:09:12
too blunt. It's too blunt an instrument.

00:09:09 --> 00:09:14
You need to be able to distinguish each

00:09:11 --> 00:09:15
one of these and determine which parts

00:09:13 --> 00:09:18
of your site you want them to to get

00:09:14 --> 00:09:21
into. And this then comes to the fourth

00:09:17 --> 00:09:23
one which is the actual agent. Um this

00:09:20 --> 00:09:25
the agent the computer operator type

00:09:22 --> 00:09:27
feature that is headless web browsers

00:09:24 --> 00:09:28
. Yeah. Or even a

00:09:26 --> 00:09:32
web browser a full web browser operating

00:09:27 --> 00:09:34
inside a VM. And those are the ones that

00:09:31 --> 00:09:37
require more nuance because maybe you're

00:09:33 --> 00:09:38
booking a ticket or doing some research

00:09:36 --> 00:09:40
and you do want the agent to take

00:09:38 --> 00:09:42
actions on your behalf. Maybe it's going

00:09:39 --> 00:09:45
through your email inbox and triaging

00:09:41 --> 00:09:47
things. From the application builder's

00:09:44 --> 00:09:49
perspective, that's probably a good

00:09:46 --> 00:09:51
thing. Um, you want more transactions.

00:09:48 --> 00:09:53
You want more usage of your application,

00:09:50 --> 00:09:56
but there are examples where it might be

00:09:52 --> 00:09:57
a bad a bad action. So, for example, if

00:09:55 --> 00:10:00
you're building a tool that is going to

00:09:56 --> 00:10:02
try and buy all of the concert tickets

00:09:59 --> 00:10:04
and then sell them on later, that

00:10:01 --> 00:10:05
becomes a problem for the concert seller

00:10:03 --> 00:10:07
because they don't want to do that. They

00:10:04 --> 00:10:09
want the true fans to be able to get

00:10:06 --> 00:10:11
access to those. And again, you need the

00:10:08 --> 00:10:13
nuance. Maybe you allow the bot to go to

00:10:10 --> 00:10:14
the homepage and sit in a queue, but

00:10:12 --> 00:10:15
hen when you get to the front of the

00:10:13 --> 00:10:17
queue, you want the human to actually

00:10:14 --> 00:10:18
make the purchase. And you want to rate

00:10:16 --> 00:10:21
limit that so that maybe the human can

00:10:18 --> 00:10:22
only purchase, let's say, five tickets.

00:10:20 --> 00:10:24
You don't want them to purchase 500

00:10:21 --> 00:10:26
tickets. And so this gets into the real

00:10:24 --> 00:10:28
details of the context of each one about

00:10:25 --> 00:10:29
what you might want to allow and what

00:10:27 --> 00:10:31
you might want to restrict. That's

00:10:28 --> 00:10:33
incredibly complicated. I mean, if I

00:10:30 --> 00:10:36
remember back why we made a lot of the

00:10:32 --> 00:10:38
decisions we made in blocking bots was

00:10:35 --> 00:10:40
trictly because of scale. So, you know,

00:10:37 --> 00:10:43
you've got 450,000 IP addresses sending

00:10:40 --> 00:10:45
you terabytes of traffic through a link

00:10:42 --> 00:10:46
that only can do gigabit and you've got

00:10:44 --> 00:10:48
o just start dropping stuff, right? And

00:10:45 --> 00:10:50
you take you you know, it's it's the

00:10:47 --> 00:10:52
battlefield triage of the wounded,

00:10:49 --> 00:10:54
right? It's like some of some of you

00:10:51 --> 00:10:55
aren't going to make it and it becomes a

00:10:53 --> 00:10:58
little brutal. That sounds incredibly

00:10:54 --> 00:11:02
sophisticated. How do you do that sort

00:10:57 --> 00:11:03
of fine grain control of traffic flow at

00:11:01 --> 00:11:05
internet scale? So, this is about

00:11:02 --> 00:11:07
building up layers of protections. So,

00:11:04 --> 00:11:09
you start with the robots.ext text just

00:11:06 --> 00:11:11
managing the good bots. Then you look at

00:11:08 --> 00:11:13
IPs and start understanding where's the

00:11:10 --> 00:11:15
traffic coming from. In an ideal

00:11:12 --> 00:11:16
scenario, you have one user per IP

00:11:14 --> 00:11:18
address, but we all know that that

00:11:15 --> 00:11:20
doesn't happen. That never happens. And

00:11:17 --> 00:11:22
so you can start to build up databases

00:11:19 --> 00:11:25
of reputation around the IP address and

00:11:21 --> 00:11:27
you can access the underlying metadata

00:11:24 --> 00:11:28
bout that address knowing which country

00:11:26 --> 00:11:30
it's coming from or which network it

00:11:27 --> 00:11:32
belongs to. And then you can start

00:11:29 --> 00:11:34
building up these decisions thinking

00:11:31 --> 00:11:37
well we shouldn't really be getting

00:11:33 --> 00:11:38
traffic from a data center for our

00:11:36 --> 00:11:41
signup page and so we could block that

00:11:38 --> 00:11:42
network. Um but it becomes more

00:11:40 --> 00:11:45
challenging if we have that agent

00:11:42 --> 00:11:47
example the agent with a with a web

00:11:44 --> 00:11:48
rowser or headless browser is going to

00:11:46 --> 00:11:50
be running on a server somewhere. It's

00:11:47 --> 00:11:52
probably in a data center and then you

00:11:49 --> 00:11:55
have the compounding factor of that

00:11:51 --> 00:11:57
abusers will purchase access to proxies

00:11:54 --> 00:11:59
which run on residential IP addresses.

00:11:56 --> 00:12:02
So you can't easily rely on the fact

00:11:58 --> 00:12:04
hat it's part of a a home ISP block

00:12:01 --> 00:12:05
anymore. And so you have to build up

00:12:03 --> 00:12:07
these patterns understanding the

00:12:04 --> 00:12:10
reputation of the IP address. Then you

00:12:06 --> 00:12:12
have the user agent string that is a

00:12:09 --> 00:12:14
basically a free text field that you can

00:12:11 --> 00:12:15
fill in with whatever you like. There is

00:12:13 --> 00:12:17
kind of a standard there, but the good

00:12:14 --> 00:12:19
bots will tell you who they are. It's

00:12:16 --> 00:12:20
been surprising and getting into the

00:12:18 --> 00:12:22
details of this how many bots actually

00:12:20 --> 00:12:23
tell you who they are. And so you can

00:12:21 --> 00:12:26
block a lot of them just on that

00:12:22 --> 00:12:28
heristic combined with the IP address or

00:12:25 --> 00:12:30
allow them or allow them. Yeah, I'm the

00:12:27 --> 00:12:31
shopping bot from OpenAI. Yeah, come on

00:12:29 --> 00:12:33
in, buy some stuff. Exactly. And Google

00:12:30 --> 00:12:35
bot, OpenAI, they tell you who they are

00:12:32 --> 00:12:37
and then you can verify that by doing a

00:12:34 --> 00:12:39
reverse DNS lookup on the IP address. So

00:12:36 --> 00:12:40
even though you might be able to pretend

00:12:38 --> 00:12:42
to be Google bot, you can check to make

00:12:40 --> 00:12:44
sure that that's the case or not with

00:12:41 --> 00:12:46
very low latency lookups. So we can

00:12:43 --> 00:12:48
verify that yes, this is Google, I want

00:12:45 --> 00:12:50
o allow them. Yes, this is the open AI

00:12:48 --> 00:12:53
bot that is doing the search indexing. I

00:12:49 --> 00:12:55
want to allow that. The next level from

00:12:52 --> 00:12:57
that is building up fingerprints and

00:12:54 --> 00:13:00
fingerprinting the characteristics of

00:12:56 --> 00:13:02
the request and this started with the J3

00:12:59 --> 00:13:04
hash which was invented at Salesforce

00:13:01 --> 00:13:06
and has now been developed into a J4.

00:13:03 --> 00:13:07
Some of them are open source these these

00:13:05 --> 00:13:09
algorithms, some of them are are not. So

00:13:06 --> 00:13:10
essentially you take all of the metrics

00:13:08 --> 00:13:12
around a session and you create a hash

00:13:10 --> 00:13:13
of it and then you stick it in a

00:13:11 --> 00:13:14
database. Exactly. And you look for

00:13:12 --> 00:13:16
matches to that hash. You look for

00:13:13 --> 00:13:18
matches and then the idea is that the

00:13:15 --> 00:13:21
hash will change based on the client. So

00:13:18 --> 00:13:22
you can allow or deny certain clients,

00:13:20 --> 00:13:25
but if you have a huge number of those

00:13:22 --> 00:13:26
clients all spamming you, then they all

00:13:24 --> 00:13:28
ook the same, they all have the same

00:13:25 --> 00:13:29
fingerprint and you can just block that

00:13:27 --> 00:13:31
fingerprint. So So this is almost like

00:13:28 --> 00:13:33
if you think of, you know, you I always

00:13:30 --> 00:13:34
think of things in terms of the classic

00:13:32 --> 00:13:37
sort of network stack like you know

00:13:34 --> 00:13:40
layer zero up to layer 7 like this is

00:13:36 --> 00:13:42
almost like layer 2 level identity for

00:13:39 --> 00:13:44
devices. Right. Right. It's looking at

00:13:41 --> 00:13:47
he TLS handshake on the network level

00:13:43 --> 00:13:49
and then you can go up up the layers. Um

00:13:46 --> 00:13:52
there's one called J4H which looks at

00:13:48 --> 00:13:55
he HTTP headers. Um and the earlier

00:13:51 --> 00:13:57
versions of this would be working on the

00:13:54 --> 00:13:59
ordering of the headers for instance. So

00:13:56 --> 00:14:01
an easy way to work around it is just to

00:13:58 --> 00:14:03
shift the headers. The hashing is has

00:14:00 --> 00:14:05
improved over time so that even changing

00:14:02 --> 00:14:07
the ordering of that of the headers

00:14:04 --> 00:14:09
doesn't change the hash. And the idea is

00:14:06 --> 00:14:11
that you can then combine all of these

00:14:08 --> 00:14:13
different signals to try and come to a

00:14:10 --> 00:14:15
decision about whether you think this is

00:14:12 --> 00:14:17
um or who who it is basically making the

00:14:14 --> 00:14:18
request. And if it's malicious, you can

00:14:16 --> 00:14:20
block it based on that. And if it's

00:14:17 --> 00:14:21
omeone that you want to allow, then you

00:14:19 --> 00:14:23
can do so. And this is before you even

00:14:20 --> 00:14:24
get into kind of the the the user level,

00:14:22 --> 00:14:26
what's actually happening in the

00:14:24 --> 00:14:28
application, right? That's right. Yeah.

00:14:25 --> 00:14:30
So this is the logic on top of that

00:14:27 --> 00:14:31
because you have to identify who it is

00:14:29 --> 00:14:33
first before you apply the rules about

00:14:30 --> 00:14:34
what you want them to do. Gotcha. So

00:14:32 --> 00:14:36
it's almost like you're adding an

00:14:33 --> 00:14:38
authentication layer or an identity

00:14:35 --> 00:14:40
layer to sort of the transport side.

00:14:37 --> 00:14:41
That's right. Yeah. And the the

00:14:39 --> 00:14:43
application side, I guess I should say.

00:14:40 --> 00:14:44
Yeah. The application. Yeah. But it's

00:14:42 --> 00:14:47
throughout the whole whole stack, the

00:14:43 --> 00:14:49
whole OSI model. And the idea is you

00:14:46 --> 00:14:52
have this consistent fingerprint that

00:14:48 --> 00:14:54
you can then apply these rules to and

00:14:51 --> 00:14:55
identity kind of layers on top of that.

00:14:53 --> 00:14:58
And we've seen some interesting

00:14:54 --> 00:15:01
developments in um fingerprinting and

00:14:57 --> 00:15:02
providing signatures based on um who the

00:15:00 --> 00:15:05
request is coming from. So, a couple of

00:15:01 --> 00:15:08
years ago, Apple announced Privacy Pass,

00:15:04 --> 00:15:10
um, which is a a hash that is attached

00:15:07 --> 00:15:12
to every request you make. If you're in

00:15:09 --> 00:15:15
the Apple ecosystem using Safari on on

00:15:11 --> 00:15:17
iPhone or on Mac, then there is a way to

00:15:14 --> 00:15:19
authenticate that the request is coming

00:15:16 --> 00:15:22
from an individual who has a

00:15:18 --> 00:15:23
subscription to iCloud and Apple has

00:15:21 --> 00:15:25
their own fraud analysis to allow you to

00:15:22 --> 00:15:27
subscribe to iCloud. So it's a very it's

00:15:24 --> 00:15:29
an easy assumption to make that if you

00:15:26 --> 00:15:32
have a subscription and this signature

00:15:28 --> 00:15:34
is verified then you are a real person.

00:15:31 --> 00:15:36
There's a new one that Cloudflare

00:15:33 --> 00:15:38
cently published around doing the same

00:15:35 --> 00:15:40
thing for automated requests and having

00:15:37 --> 00:15:42
a fingerprint that's attached to

00:15:39 --> 00:15:44
signature inside every single request

00:15:41 --> 00:15:46
which you can then use public key

00:15:43 --> 00:15:49
cryptography to verify. These are all

00:15:45 --> 00:15:52
emerging as the problem of being able to

00:15:48 --> 00:15:54
identify automated clients increases

00:15:51 --> 00:15:56
because you want to be able to know who

00:15:53 --> 00:15:58
the good ones are to allow them through

00:15:55 --> 00:15:59
whilst blocking all the attackers. Yeah.

00:15:57 --> 00:16:00
And it's just like the old days with

00:15:58 --> 00:16:02
Kerros, right? Every vend every large

00:15:59 --> 00:16:04
vendor is going to have their flavor,

00:16:01 --> 00:16:05
right? And if you're a shop and you're

00:16:03 --> 00:16:06
trying to sell to everybody, you've got

00:16:04 --> 00:16:08
o kind of work with all of them. That's

00:16:05 --> 00:16:10
right. And you just need to be able to

00:16:07 --> 00:16:12
understand is this a human and is our

00:16:09 --> 00:16:14
application built for humans and then

00:16:11 --> 00:16:16
you allow them or is it that we're

00:16:13 --> 00:16:17
building an API or do we want to be

00:16:15 --> 00:16:20
indexed and we want to allow this

00:16:16 --> 00:16:22
traffic. It's just giving the site owner

00:16:19 --> 00:16:23
the control. Yeah. I mean I think it's

00:16:21 --> 00:16:27
what's what's really interesting to me

00:16:22 --> 00:16:29
is that in my own use and in my own life

00:16:26 --> 00:16:32
like I interact with the internet less

00:16:28 --> 00:16:34
and less directly like almost every day

00:16:31 --> 00:16:36
and I'm going through some sort of AI

00:16:33 --> 00:16:37
type thing. It could be an agent. It

00:16:35 --> 00:16:39
could be an large language model. It

00:16:36 --> 00:16:41
could be any number of things. But I

00:16:38 --> 00:16:43
generally don't query stuff directly as

00:16:40 --> 00:16:46
much as I used to. And it seems like

00:16:42 --> 00:16:48
we're moving to a world where almost the

00:16:45 --> 00:16:50
layer you describe, the agent type

00:16:47 --> 00:16:51
activity you describe will become the

00:16:49 --> 00:16:54
primary consumer of everything on the

00:16:50 --> 00:16:57
internet. Well, if 50% of traffic is

00:16:53 --> 00:16:59
already bots, it's already automated and

00:16:56 --> 00:17:01
agents are only really just getting

00:16:58 --> 00:17:03
oing. Most people are not using these

00:17:00 --> 00:17:05
computer use agents because they're too

00:17:02 --> 00:17:07
slow right now. they're not there's

00:17:04 --> 00:17:09
till like previews but it's clear

00:17:06 --> 00:17:12
that's where everything is going then

00:17:08 --> 00:17:13
we're going to see an explosion in the

00:17:11 --> 00:17:15
traffic that's coming from these tools

00:17:12 --> 00:17:17
and just blocking them just because

00:17:14 --> 00:17:20
they're AI is the wrong answer. You've

00:17:16 --> 00:17:21
really got to understand why you want

00:17:19 --> 00:17:22
hem, what they're doing, who they're

00:17:20 --> 00:17:24
coming from and then you can create

00:17:21 --> 00:17:25
these granular rules. I mean, I hate to

00:17:23 --> 00:17:27
use the analogy, but these things are

00:17:24 --> 00:17:29
almost like avatars, right? They're

00:17:26 --> 00:17:30
running around on someone's behalf and

00:17:28 --> 00:17:33
you need to figure out who that someone

00:17:29 --> 00:17:34
is and what the what the objectives are,

00:17:32 --> 00:17:37
right? and control them very granularly.

00:17:33 --> 00:17:40
And the old school methods of doing that

00:17:36 --> 00:17:42
assume malicious intent, which isn't

00:17:39 --> 00:17:44
always the case and know increasingly is

00:17:41 --> 00:17:46
going to be not the case because you

00:17:43 --> 00:17:48
want the agents to be doing things and

00:17:45 --> 00:17:49
the signals just no longer work when

00:17:47 --> 00:17:51
you're expecting traffic to come from a

00:17:48 --> 00:17:54
data center or you're expecting it to

00:17:50 --> 00:17:56
come from an automated Chrome instance.

00:17:53 --> 00:17:58
Um, and being able to have the

00:17:55 --> 00:18:00
understanding of your application to dig

00:17:57 --> 00:18:01
into the the characteristics of the

00:17:59 --> 00:18:02
request is going to be increasingly

00:18:00 --> 00:18:06
important in the future of

00:18:01 --> 00:18:08
distinguishing how criminals are using

00:18:05 --> 00:18:10
AI. What we've seen so far is either

00:18:07 --> 00:18:12
training and people have that opinion of

00:18:09 --> 00:18:14
whether they want to train or not or

00:18:11 --> 00:18:16
it's bots that maybe have got something

00:18:13 --> 00:18:17
wrong. They're accessing the site too

00:18:15 --> 00:18:19
much because they haven't thought about

00:18:16 --> 00:18:21
hrottling or they're ignoring

00:18:18 --> 00:18:23
robots.ext rather than looking at

00:18:20 --> 00:18:25
agents.ext text, which is distinguishing

00:18:22 --> 00:18:28
between an agent you want to access your

00:18:24 --> 00:18:30
site and a and some kind of crawler. And

00:18:27 --> 00:18:31
the examples that we've seen are just

00:18:29 --> 00:18:33
bots coming to websites and just

00:18:30 --> 00:18:35
downloading the content continuously.

00:18:32 --> 00:18:38
There's no world where that should be

00:18:34 --> 00:18:40
happening. And this is where the cost is

00:18:37 --> 00:18:42
being put on the site owner because they

00:18:39 --> 00:18:45
currently have no easy way to manage the

00:18:41 --> 00:18:46
control uh control the um the traffic

00:18:44 --> 00:18:49
that's coming to their site.

00:18:46 --> 00:18:51
Directionally things are improving

00:18:48 --> 00:18:53
because you might have looked back 18

00:18:50 --> 00:18:55
months and the bots are have no rate

00:18:52 --> 00:18:57
limiting. They're just downloading

00:18:54 --> 00:18:59
content all the time. Today we know that

00:18:56 --> 00:19:01
hese bots can be verified. They are

00:18:58 --> 00:19:04
identifying themselves. They are much

00:19:00 --> 00:19:05
better citizens of the internet. They

00:19:03 --> 00:19:08
are following starting to follow the

00:19:04 --> 00:19:10
rules. And so over the next 18 months I

00:19:07 --> 00:19:12
think we'll see more of that more of the

00:19:09 --> 00:19:14
AI crawlers that we want following the

00:19:11 --> 00:19:16
rules doing things in the right way. and

00:19:13 --> 00:19:18
it will start to split into making a lot

00:19:15 --> 00:19:19
easier to detect the the bots with

00:19:17 --> 00:19:21
criminal intent and those are the ones

00:19:18 --> 00:19:25
that we want to be blocking. So with the

00:19:20 --> 00:19:27
transition of bots from being these

00:19:24 --> 00:19:29
ntities on the internet that represent

00:19:26 --> 00:19:31
hird parties and organizations to this

00:19:28 --> 00:19:33
new world where these AI agents could be

00:19:30 --> 00:19:34
representing organizations. They could

00:19:32 --> 00:19:36
be representing customers. They could be

00:19:33 --> 00:19:38
representing any number of people and

00:19:35 --> 00:19:41
this is probably the wave of the future.

00:19:37 --> 00:19:43
It seems to me like detecting that it's

00:19:40 --> 00:19:44
AI or a person is going to be an

00:19:42 --> 00:19:48
incredibly difficult challenge. And I'm

00:19:43 --> 00:19:50
curious like how are you thinking about

00:19:47 --> 00:19:52
proving humanness on the internet?

00:19:49 --> 00:19:54
Right. Well, proofing proofing is a is a

00:19:51 --> 00:19:56
tale as old as time. There's a NIST

00:19:53 --> 00:19:58
working group on proofing identity

00:19:55 --> 00:20:00
that's been running I think for 35 years

00:19:57 --> 00:20:01
and like still hasn't really gotten to

00:19:59 --> 00:20:03
something that's implementable. There's

00:20:00 --> 00:20:06
15 companies out there, right? the first

00:20:02 --> 00:20:08
wave of of ride share services and gig

00:20:05 --> 00:20:09
economy type companies needed to have

00:20:07 --> 00:20:11
proofing, right? Because you're hiring

00:20:08 --> 00:20:12
these people in remote places where you

00:20:10 --> 00:20:14
don't have an office and it's still not

00:20:11 --> 00:20:17
a solved problem. I'm curious like it

00:20:14 --> 00:20:18
feels like maybe AI can help get us

00:20:16 --> 00:20:20
there or maybe there's something that's

00:20:18 --> 00:20:22
happening in that space, right? Well,

00:20:19 --> 00:20:24
the the pure solution is digital

00:20:21 --> 00:20:27
signature, right? But we've been talking

00:20:23 --> 00:20:29
about that for so long and the the UX

00:20:26 --> 00:20:32
around it is basically impossible for

00:20:28 --> 00:20:34
normal people to to figure out. And it's

00:20:31 --> 00:20:36
why something like email encryption, no

00:20:33 --> 00:20:37
ne encrypts their email. You have

00:20:35 --> 00:20:39
ncrypted chat because it's built into

00:20:36 --> 00:20:42
the app and it can do all the difficult

00:20:38 --> 00:20:44
hings like the key exchange behind the

00:20:41 --> 00:20:47
scenes. So that solution isn't really

00:20:43 --> 00:20:49
going to work. But AI has been used in

00:20:46 --> 00:20:50
analyzing traffic for at least over a

00:20:48 --> 00:20:52
decade. It's just it was called machine

00:20:49 --> 00:20:54
learning. And so you start with machine

00:20:51 --> 00:20:57
learning and the question is well what

00:20:53 --> 00:21:00
does the the new generation of AI allow

00:20:56 --> 00:21:02
us to do. The challenge with the LLM

00:20:59 --> 00:21:04
type models is just the speed at which

00:21:01 --> 00:21:07
they are doing analysis because you

00:21:03 --> 00:21:09
often want to take a decision on the

00:21:06 --> 00:21:10
network or in the application within a

00:21:08 --> 00:21:12
couple of milliseconds otherwise you're

00:21:09 --> 00:21:14
going to be blocking the traffic and the

00:21:11 --> 00:21:15
user is going to become annoyed. And so

00:21:13 --> 00:21:16
you can do that with kind of classic

00:21:14 --> 00:21:18
machine learning models and do the

00:21:15 --> 00:21:20
inference really quickly. And where I

00:21:17 --> 00:21:22
think the interesting thing in the next

00:21:19 --> 00:21:25
few years is going to be is how we take

00:21:21 --> 00:21:28
the this new generation of generative AI

00:21:24 --> 00:21:31
using LLMs or other types of LLM like

00:21:27 --> 00:21:33
technology to do analysis on huge

00:21:30 --> 00:21:35
traffic patterns. I think that can be

00:21:32 --> 00:21:37
done in the background initially, but

00:21:34 --> 00:21:39
we're already seeing new edge models

00:21:36 --> 00:21:42
that are designed to be deployed to

00:21:38 --> 00:21:44
mobile devices and IoT that use very low

00:21:41 --> 00:21:47
amounts of system memory and can provide

00:21:43 --> 00:21:48
inference responses within milliseconds.

00:21:46 --> 00:21:52
I think those are going to start to be

00:21:48 --> 00:21:53
deployed to applications um over the

00:21:51 --> 00:21:55
next few years. Well, I think you're

00:21:52 --> 00:21:57
xactly right. Like I think so much of

00:21:54 --> 00:21:59
what we're seeing now is just being

00:21:56 --> 00:22:01
restricted by the cost of inference and

00:21:58 --> 00:22:03
that cost is dropping incredibly fast,

00:22:00 --> 00:22:05
right? It's we saw this with cloud where

00:22:02 --> 00:22:06
like S3 went to being the most expensive

00:22:04 --> 00:22:08
storage you could buy to being free,

00:22:05 --> 00:22:09
essentially free. Glacier is essentially

00:22:07 --> 00:22:11
free, right? Free is beer, right?

00:22:08 --> 00:22:14
Whatever. Um and so like we're seeing

00:22:10 --> 00:22:15
that even at a more accelerated rate for

00:22:13 --> 00:22:17
inference, like the cost is just falling

00:22:14 --> 00:22:20
incredibly. And then when you look at

00:22:16 --> 00:22:22
he capabilities of these new

00:22:19 --> 00:22:24
technologies to drop a suspicious email

00:22:22 --> 00:22:26
into a into chat GPT and ask if it's

00:22:23 --> 00:22:28
uspicious and it's like 100% accurate,

00:22:26 --> 00:22:31
right? Like if you want to like find

00:22:27 --> 00:22:32
sensitive information, you ask the LLM,

00:22:30 --> 00:22:35
is it sensitive information? And it's

00:22:31 --> 00:22:37
like 100% accurate. Like it's amazing.

00:22:34 --> 00:22:39
Like as you squint and look at the

00:22:36 --> 00:22:41
future, you can start to see these

00:22:38 --> 00:22:43
really incredible use cases, right? Like

00:22:40 --> 00:22:45
to your point of inference on the edge,

00:22:42 --> 00:22:47
like do you think we all end up

00:22:44 --> 00:22:49
eventually with like an an LLM running

00:22:46 --> 00:22:51
locally that's basically going to be

00:22:48 --> 00:22:52
clippy but for CISOs? Like it pops up

00:22:50 --> 00:22:54
and says, "Hey, it looks like you're

00:22:51 --> 00:22:55
doing something stupid." Like is that is

00:22:53 --> 00:22:57
that kind of where you think we land?

00:22:54 --> 00:22:59
That's what we're working on is getting

00:22:56 --> 00:23:00
this analysis into the process so that

00:22:58 --> 00:23:02
for every single request that comes

00:22:59 --> 00:23:04
through, you can have a sandbox that

00:23:01 --> 00:23:06
will analyze the full request and give

00:23:03 --> 00:23:08
you a response. Whereas now you can wait

00:23:05 --> 00:23:10
maybe two to five seconds to delay an

00:23:07 --> 00:23:12
email and do the analysis and decide

00:23:09 --> 00:23:15
whether to flag it for review or send it

00:23:11 --> 00:23:17
o someone's inbox. Delaying an HTTP

00:23:14 --> 00:23:19
request for 5 seconds, that's not going

00:23:16 --> 00:23:21
to work. And so I think the the trend

00:23:18 --> 00:23:24
that we're seeing with the improvement

00:23:20 --> 00:23:26
cost, the inference cost, but also the

00:23:23 --> 00:23:28
latency and getting the inference

00:23:25 --> 00:23:30
decision, that's going to be the key. So

00:23:27 --> 00:23:32
we can embed this into the application.

00:23:29 --> 00:23:33
You've got the full context window. So

00:23:31 --> 00:23:35
you can add everything you know about

00:23:32 --> 00:23:36
he user, everything about the session,

00:23:34 --> 00:23:38
everything about your application

00:23:35 --> 00:23:40
alongside the request and then come to

00:23:37 --> 00:23:42
decision entirely locally on your web

00:23:39 --> 00:23:44
server, on the edge, wherever it happens

00:23:41 --> 00:23:45
to be running. As I listen to you say

00:23:43 --> 00:23:47
that and describe this process, all I

00:23:44 --> 00:23:49
can think is that advertisers are going

00:23:46 --> 00:23:51
to love this. It just seems like the

00:23:48 --> 00:23:53
kind of technology built for sort of

00:23:50 --> 00:23:54
like, hey, he's looking at this product,

00:23:52 --> 00:23:56
show him this one. Right. Yeah. Super

00:23:53 --> 00:23:59
fast inference on the edge coming to a

00:23:55 --> 00:24:01
decision. And for advertisers, stopping

00:23:58 --> 00:24:03
click spam, that's that's a huge

00:24:00 --> 00:24:04
problem. And being able to come to that

00:24:02 --> 00:24:06
decision before it even goes through

00:24:03 --> 00:24:08
your your ad model and the the auction

00:24:05 --> 00:24:10
system. Who would have ever thought that

00:24:07 --> 00:24:12
non-deterministic, incredibly cheap

00:24:09 --> 00:24:14
compute would uh would solve these use

00:24:11 --> 00:24:17
cases, right? Right. Yeah. We're in a

00:24:13 --> 00:24:17
weird world.

<!-- YOUTUBE_TRANSCRIPT_END -->
