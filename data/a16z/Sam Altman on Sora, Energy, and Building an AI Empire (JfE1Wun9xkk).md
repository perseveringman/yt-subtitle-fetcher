---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "JfE1Wun9xkk"
title: "Sam Altman on Sora, Energy, and Building an AI Empire"
video_url: "https://www.youtube.com/watch?v=JfE1Wun9xkk"
thumbnail_url: "https://i.ytimg.com/vi/JfE1Wun9xkk/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=JfE1Wun9xkk"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-10-08T14:14:00.000Z"
upload_date: "2025-10-08"
duration_seconds: 2966
duration_human: "49:26"
view_count: 183975
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:34:01.251Z"
---

# Sam Altman on Sora, Energy, and Building an AI Empire

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=JfE1Wun9xkk
- video_id: JfE1Wun9xkk
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-10-08T14:14:00.000Z
- upload_date: 2025-10-08
- duration: 49:26
- view_count: 183975
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Sam Altman has led OpenAI from its founding as a research nonprofit in 2015 to becoming the most valuable startup in the world ten years later.

In this episode, a16z Cofounder Ben Horowitz and General Partner Erik Torenberg sit down with Sam to discuss the core thesis behind OpenAI’s disparate bets, why they released Sora, how they use models internally, the best AI evals, and where we’re going from here.

Timecodes: 
0:00  Introduction 
0:41  OpenAI’s Vision and Infrastructure
2:37  Business Model and Vertical Integration
5:08  AGI, Sora, and Societal Co-evolution
8:01  The Future of AI Interfaces
9:12  AI Scientists and Scientific Progress
11:44  Reflections on Progress and Model Capabilities
16:17  Sam's Experience as CEO & Leadership Lessons 
17:34  Strategic Partnerships and Scaling Infrastructure
25:05  Regulation, Safety, and Societal Impact
28:33  Copyright, Open Source, and Content Creation
33:15  Energy, Policy, and AI’s Resource Needs
37:07  Monetization and User Behavior
43:03  The Talent War and Personal Reflections
45:20  Advice for Founders

Resources: 
Follow Sam on X: https://x.com/sama
Follow OpenAI on X: https://x.com/openai
Learn more about OpenAI: https://openai.com/
Try Sora: https://sora.com/
Follow Ben on X: https://x.com/bhorowitz

Stay Updated: 
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Find a16z on X: https://x.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Listen to the a16z Podcast on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX
Listen to the a16z Podcast on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details, please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
sort of thought we had like stumbled on

00:00:01 --> 00:00:06
this one giant secret that we had these

00:00:03 --> 00:00:08
scaling loss for language models and

00:00:05 --> 00:00:11
that felt like such an incredible

00:00:08 --> 00:00:13
triumph. I was like we're probably never

00:00:10 --> 00:00:14
going to get that lucky again. And deep

00:00:12 --> 00:00:17
learning has been this miracle that

00:00:13 --> 00:00:19
keeps on giving and we have kept finding

00:00:16 --> 00:00:20
breakthrough after breakthrough. Again,

00:00:18 --> 00:00:22
when we got the the reasoning model

00:00:19 --> 00:00:23
breakthrough, like I I also thought that

00:00:21 --> 00:00:25
was like we're never going to get

00:00:22 --> 00:00:27
another one like that. And it just seems

00:00:24 --> 00:00:29
o improbable that this one technology

00:00:26 --> 00:00:30
works so well. But maybe this is always

00:00:28 --> 00:00:32
what it feels like when you discover

00:00:29 --> 00:00:34
like one of the big, you know,

00:00:31 --> 00:00:35
scientific breakthroughs is it if if

00:00:33 --> 00:00:37
it's like really big, it's pretty

00:00:34 --> 00:00:40
fundamental and it just it keeps

00:00:36 --> 00:00:40
working.

00:00:41 --> 00:00:44
Sam, welcome to the Z podcast.

00:00:42 --> 00:00:47
>> Thanks for having me.

00:00:43 --> 00:00:48
>> All right. You've uh described in

00:00:46 --> 00:00:51
another interview, you described OpenAI

00:00:47 --> 00:00:52
as a combination of four companies. uh

00:00:50 --> 00:00:54
consumer technology business, a mega

00:00:51 --> 00:00:56
scale infrastructure operation, a

00:00:53 --> 00:00:58
research lab and all the new stuff

00:00:55 --> 00:01:00
including planned hardware devices from

00:00:57 --> 00:01:01
hardware to app integrations to Java

00:00:59 --> 00:01:03
marketplace to commerce. What do all

00:01:00 --> 00:01:04
these bets add up to with OpenAI's

00:01:02 --> 00:01:05
vision?

00:01:03 --> 00:01:07
>> Yeah, I mean maybe you should count just

00:01:04 --> 00:01:09
hree maybe as as four for kind of our

00:01:06 --> 00:01:10
own version of the what traditionally

00:01:08 --> 00:01:13
would have been the research lab at this

00:01:09 --> 00:01:16
cale, but three core ones. Uh

00:01:12 --> 00:01:18
we want to be people's personal AI

00:01:16 --> 00:01:19
subscription. And I think most people

00:01:17 --> 00:01:21
will have one. Some people will have

00:01:18 --> 00:01:22
several. And you'll use it in some

00:01:20 --> 00:01:24
first-party consumer stuff with us, but

00:01:21 --> 00:01:25
you'll also log into a bunch of other

00:01:23 --> 00:01:27
services and you'll just you'll use it

00:01:24 --> 00:01:29
from dedicated devices at some point.

00:01:26 --> 00:01:31
You'll have this AI that gets to know

00:01:28 --> 00:01:35
you and be really useful to you and

00:01:30 --> 00:01:36
you'll that's what we want to do. Um it

00:01:34 --> 00:01:38
urns out that to support that we also

00:01:35 --> 00:01:40
have to build out this massive amount of

00:01:37 --> 00:01:42
infrastructure. But the goal there, the

00:01:39 --> 00:01:44
the mission is really like build

00:01:41 --> 00:01:46
this AGI and make it very useful to

00:01:43 --> 00:01:49
people. and and does the infrastructure

00:01:46 --> 00:01:52
uh do you think it will end up you know

00:01:48 --> 00:01:55
it's necessary for the main goal will it

00:01:51 --> 00:01:57
also separately end up being a another

00:01:54 --> 00:01:59
business or is it just really going to

00:01:56 --> 00:01:59
be in service to the personal AI or

00:01:58 --> 00:02:01
unknown

00:01:58 --> 00:02:02
>> you mean like would we sell it to other

00:02:00 --> 00:02:03
companies as infrastructure

00:02:01 --> 00:02:07
>> yeah would you sell it to other

00:02:02 --> 00:02:09
companies um yeah or or or you know it's

00:02:06 --> 00:02:10
uch a massive thing would it would it

00:02:08 --> 00:02:13
do something else

00:02:10 --> 00:02:16
>> it feels to me like there will emerge

00:02:12 --> 00:02:18
some other thing to do like that but I

00:02:15 --> 00:02:20
don't know we don't have a current it's

00:02:17 --> 00:02:22
currently just meant to like support

00:02:19 --> 00:02:22
>> the service we want to deliver and the

00:02:21 --> 00:02:23
research

00:02:21 --> 00:02:27
>> yeah know that makes sense

00:02:22 --> 00:02:28
>> yeah the um scale is sort of like

00:02:26 --> 00:02:30
>> ridiculous

00:02:27 --> 00:02:32
>> terrifying enough that you got to be

00:02:29 --> 00:02:33
open to doing something else

00:02:31 --> 00:02:35
>> yeah if you're building the biggest data

00:02:32 --> 00:02:36
center in the history of humankind

00:02:34 --> 00:02:37
>> the biggest infrastructure project in

00:02:36 --> 00:02:39
the history

00:02:36 --> 00:02:42
>> the um there was a great interview you

00:02:38 --> 00:02:44
did many years ago in Strictly VC and

00:02:41 --> 00:02:46
sort of early open AI well before

00:02:43 --> 00:02:47
TGBT and and they're saying hey what's

00:02:45 --> 00:02:49
they're asking what's the business model

00:02:46 --> 00:02:50
and you said oh we'll ask AI it'll

00:02:48 --> 00:02:52
figure it out for us everybody laughs

00:02:49 --> 00:02:54
but there have been multiple times and

00:02:51 --> 00:02:56
there was just another one recently

00:02:53 --> 00:02:57
where we have asked a then current model

00:02:55 --> 00:03:00
for you know what should we do and it

00:02:56 --> 00:03:02
has had a insightful answer we missed so

00:02:59 --> 00:03:03
>> I I think when we say stuff like that

00:03:01 --> 00:03:04
people don't take us seriously or

00:03:02 --> 00:03:06
literally

00:03:03 --> 00:03:08
>> but maybe the answer is you should take

00:03:05 --> 00:03:10
us both

00:03:07 --> 00:03:13
>> yeah yeah well know as as somebody who

00:03:09 --> 00:03:15
runs an organization I ask the AI a lot

00:03:12 --> 00:03:16
of questions about what I should do. It

00:03:14 --> 00:03:17
comes up with some pretty interesting

00:03:15 --> 00:03:19
answers.

00:03:16 --> 00:03:20
>> Sometimes sometimes it does you know you

00:03:18 --> 00:03:21
have to you have to give it enough

00:03:19 --> 00:03:23
context. But

00:03:20 --> 00:03:24
>> what is what is the thesis that that

00:03:22 --> 00:03:26
connects these bets beyond more

00:03:23 --> 00:03:27
distribution more compute? How do how do

00:03:25 --> 00:03:29
we think about it?

00:03:26 --> 00:03:30
>> I mean the research enables us to make

00:03:28 --> 00:03:31
the great products and the

00:03:29 --> 00:03:33
infrastructure enables us to do the

00:03:30 --> 00:03:37
research. So it is kind of like a

00:03:32 --> 00:03:40
vertical stack of things like you can

00:03:36 --> 00:03:41
use chatbt or some other service to get

00:03:39 --> 00:03:44
advice about what you should do running

00:03:40 --> 00:03:45
an organization but for that to work it

00:03:43 --> 00:03:47
requires great research and requires a

00:03:44 --> 00:03:50
lot of infrastructure. So it is kind of

00:03:46 --> 00:03:52
just this one this one thing. It's

00:03:49 --> 00:03:56
>> and do you think that there will be a

00:03:51 --> 00:03:59
point where that becomes completely

00:03:55 --> 00:04:02
horizontal or will it stay vertically

00:03:58 --> 00:04:05
integrated for the foreseeable future?

00:04:01 --> 00:04:07
I was always against vertical

00:04:04 --> 00:04:08
integration and I now think I was just

00:04:06 --> 00:04:09
wrong about that.

00:04:07 --> 00:04:12
>> Yeah. Interesting.

00:04:08 --> 00:04:14
>> And there's kind of cuz you you like

00:04:11 --> 00:04:15
you'd like to think that the economy is

00:04:13 --> 00:04:17
efficient and the theory that companies

00:04:14 --> 00:04:18
can do one thing and then

00:04:16 --> 00:04:19
>> it's supposed to work.

00:04:17 --> 00:04:22
>> Like to think that. Yeah.

00:04:18 --> 00:04:24
>> And in our case at least it hasn't

00:04:21 --> 00:04:25
really. I mean it hasn't some ways for

00:04:23 --> 00:04:26
sure. or like there's people that make

00:04:24 --> 00:04:28
like you know

00:04:25 --> 00:04:31
>> Nvidia makes an amazing chip or whatever

00:04:27 --> 00:04:33
that a lot of people can use but the

00:04:30 --> 00:04:35
>> the story of open AI has certainly been

00:04:32 --> 00:04:36
towards we have to do more things than

00:04:34 --> 00:04:37
we thought to be able to deliver on the

00:04:35 --> 00:04:38
mission

00:04:36 --> 00:04:40
>> right you know although that you know

00:04:38 --> 00:04:43
the the history of the computing

00:04:39 --> 00:04:45
industry is kind of been a story of kind

00:04:42 --> 00:04:47
of a back and forth and that you know

00:04:44 --> 00:04:49
there was the Wang word processor and

00:04:46 --> 00:04:53
then the personal computer and the the

00:04:48 --> 00:04:54
Blackberry before the smartphone. Um, so

00:04:52 --> 00:04:56
you know there has been this kind of

00:04:53 --> 00:04:59
vertical integration and then not but

00:04:55 --> 00:04:59
hen the iPhone is also vertically

00:04:58 --> 00:05:01
integrated.

00:04:58 --> 00:05:03
>> The iPhone I think is the most

00:05:00 --> 00:05:05
incredible product the tech industry has

00:05:02 --> 00:05:06
ever produced and it is extraordinarily

00:05:04 --> 00:05:09
vertically integrated.

00:05:05 --> 00:05:10
>> Yeah, amazingly so. Yeah. Interesting.

00:05:08 --> 00:05:12
>> Which bets would you say are enablers of

00:05:09 --> 00:05:14
AGI versus which are sort of hedges

00:05:11 --> 00:05:15
against uncertainty? I

00:05:13 --> 00:05:17
>> think you could say that on the surface

00:05:14 --> 00:05:19
Sora for example does not look like it's

00:05:16 --> 00:05:21
AGI relevant. But

00:05:18 --> 00:05:23
I would bet that if we can build really

00:05:20 --> 00:05:26
great world models, that'll be much more

00:05:22 --> 00:05:26
important to AGI than people think.

00:05:25 --> 00:05:28
There were a lot of people who thought

00:05:25 --> 00:05:30
CH chatbt was not a very AGI relevant

00:05:27 --> 00:05:34
hing. And it's been very helpful to us,

00:05:29 --> 00:05:36
not only in building better models and

00:05:33 --> 00:05:37
understanding how society wants to use

00:05:35 --> 00:05:40
this, but also in like bringing society

00:05:36 --> 00:05:41
along to actually figure out, man, we

00:05:39 --> 00:05:43
got to contend with this thing. Now we

00:05:40 --> 00:05:45
for a long time before CHGBT, we would

00:05:42 --> 00:05:46
talk about AGI and people like this is

00:05:44 --> 00:05:48
not happening or we don't care.

00:05:45 --> 00:05:52
then all of a sudden they really cared

00:05:47 --> 00:05:55
and and I I think that so

00:05:51 --> 00:05:57
research benefits aside.

00:05:54 --> 00:05:59
I'm a big believer that society and

00:05:56 --> 00:06:01
technology have to co-evolve. It's you

00:05:58 --> 00:06:02
can't just drop the thing at the end. It

00:06:00 --> 00:06:05
doesn't work that way. It is it is a

00:06:01 --> 00:06:07
sort of ongoing back and forth. Yeah.

00:06:04 --> 00:06:09
say more about how Sora fits into your

00:06:06 --> 00:06:11
strategy because there some hull on on X

00:06:08 --> 00:06:14
around hey um you know why devote

00:06:10 --> 00:06:16
precious GPUs to to Sora but is it a

00:06:13 --> 00:06:16
short-term long-term trade-off or are we

00:06:15 --> 00:06:19
so aging

00:06:15 --> 00:06:21
>> well and then the new one had like a

00:06:18 --> 00:06:22
very interesting twist with the social

00:06:20 --> 00:06:24
networking

00:06:22 --> 00:06:28
be very interested in kind of how you're

00:06:23 --> 00:06:30
thinking about that and like um did uh

00:06:27 --> 00:06:32
Meta call you up and get mad or like hey

00:06:29 --> 00:06:34
what what do you expect the reaction to

00:06:31 --> 00:06:37
be? Um,

00:06:33 --> 00:06:39
I think if one company of the two of us

00:06:36 --> 00:06:41
has feels like more like the other one

00:06:38 --> 00:06:42
has gone after them, it wouldn't they

00:06:40 --> 00:06:46
shouldn't be calling us.

00:06:41 --> 00:06:50
>> Well, I do know the history, too. But uh

00:06:45 --> 00:06:50
look, we're not going to like

00:06:49 --> 00:06:55
first of all, I think it's cool to make

00:06:52 --> 00:06:59
great products and people love the new

00:06:54 --> 00:07:01
Sora and and I also think it is

00:06:58 --> 00:07:04
important to

00:07:00 --> 00:07:06
give society a taste of what's coming on

00:07:03 --> 00:07:08
this co-evolution point. So like very

00:07:05 --> 00:07:09
soon the world is going to have to

00:07:07 --> 00:07:11
contend with incredible video models

00:07:08 --> 00:07:13
that can deep fake anyone or kind of

00:07:10 --> 00:07:15
show anything you want. that will mostly

00:07:12 --> 00:07:17
be great. There will be some adjustment

00:07:14 --> 00:07:19
hat society has to go through. And just

00:07:16 --> 00:07:20
like with chat GPT, we were like the

00:07:18 --> 00:07:22
world kind of needs to understand where

00:07:19 --> 00:07:24
this is. I think it's very important the

00:07:22 --> 00:07:26
world understands where video is going

00:07:23 --> 00:07:28
very quickly cuz that's going to be

00:07:26 --> 00:07:31
video has much more like emotional

00:07:27 --> 00:07:33
resonance than text and very soon we're

00:07:30 --> 00:07:34
going to be in a world where like this

00:07:32 --> 00:07:36
going to be everywhere. So I think

00:07:33 --> 00:07:37
there's something there. uh as I

00:07:35 --> 00:07:40
mentioned I think this will help our

00:07:36 --> 00:07:41
esearch program and is on the AGI path

00:07:39 --> 00:07:43
but

00:07:40 --> 00:07:45
yeah some like you know it can't all be

00:07:42 --> 00:07:47
about just making people like ruthlessly

00:07:44 --> 00:07:48
efficient and the AI like solving all

00:07:46 --> 00:07:50
our problems there's got to be like some

00:07:47 --> 00:07:52
fun and joy and delight along the way

00:07:49 --> 00:07:57
but we won't throw like tons of compute

00:07:51 --> 00:07:59
at it or not by a fraction of our comput

00:07:56 --> 00:08:02
it it's tons in the absolute sense but

00:07:58 --> 00:08:03
not in the relative sense

00:08:01 --> 00:08:05
>> I want to talk about the future of AI

00:08:02 --> 00:08:06
human interfaces because back in August

00:08:04 --> 00:08:08
you said the models have already

00:08:05 --> 00:08:10
saturated the chat use case. So what are

00:08:07 --> 00:08:12
future AI human interfaces look like

00:08:09 --> 00:08:14
both in terms of hardware and software

00:08:11 --> 00:08:14
is the vision for kind of a wechathat

00:08:13 --> 00:08:17
like

00:08:13 --> 00:08:18
>> so I'm solving the chat thing in like a

00:08:16 --> 00:08:21
very narrow sense which is if you're

00:08:18 --> 00:08:23
trying to like you know have the most

00:08:20 --> 00:08:25
basic kind of chat style conversation

00:08:22 --> 00:08:26
it's very good but what a chat interface

00:08:24 --> 00:08:28
can do for you it's like nowhere near

00:08:25 --> 00:08:30
saturated cuz you could ask a chat

00:08:27 --> 00:08:32
interface like please cure cancer a

00:08:29 --> 00:08:35
model certainly can't do that yet so I

00:08:32 --> 00:08:37
think the text interface style can go

00:08:34 --> 00:08:39
very far even if for the chitchat use

00:08:36 --> 00:08:42
case the models are already very good.

00:08:38 --> 00:08:45
Um, but but of course there's better

00:08:41 --> 00:08:46
interfaces to have. Uh, actually it's

00:08:44 --> 00:08:48
another thing I think is cool about

00:08:45 --> 00:08:50
Sora. Like you can imagine a world where

00:08:47 --> 00:08:52
the interface is just constantly

00:08:49 --> 00:08:52
real-time rendered video.

00:08:51 --> 00:08:54
>> Yeah.

00:08:51 --> 00:08:55
>> And what that would enable and that's

00:08:53 --> 00:08:58
pretty cool. You can imagine new kinds

00:08:54 --> 00:09:00
of hardware devices that are sort of

00:08:57 --> 00:09:02
always ambiently aware of what's going

00:08:59 --> 00:09:04
on. in rather than your phone like blast

00:09:01 --> 00:09:06
you with text message notifications at

00:09:03 --> 00:09:07
whenever it wants like it really

00:09:05 --> 00:09:10
understands your context and when to

00:09:06 --> 00:09:11
show you what and

00:09:09 --> 00:09:13
there's a long way to go on all that

00:09:10 --> 00:09:15
stuff you know

00:09:12 --> 00:09:17
ithin the next couple years what will

00:09:14 --> 00:09:19
models be able to do that they're not

00:09:16 --> 00:09:21
able to do today will be sort of white

00:09:18 --> 00:09:24
color um you know replacement at a much

00:09:20 --> 00:09:26
deeper level AI scientist uh human

00:09:23 --> 00:09:28
oids um

00:09:25 --> 00:09:30
>> I mean a a lot of things but you touched

00:09:27 --> 00:09:32
on the one that I am most excited about

00:09:29 --> 00:09:32
which is the the AI scientist.

00:09:31 --> 00:09:34
>> Yeah,

00:09:31 --> 00:09:38
>> this is crazy that we're sitting here

00:09:33 --> 00:09:39
seriously talking about this. The I know

00:09:37 --> 00:09:41
there's like a quibble on what the

00:09:38 --> 00:09:44
Turing test literally is, but but the

00:09:40 --> 00:09:45
popular conception of the Turing test

00:09:43 --> 00:09:47
sort of went whooshing by.

00:09:44 --> 00:09:48
>> Yeah, it was fast. Yeah.

00:09:46 --> 00:09:49
>> You know, it was just like we talked

00:09:47 --> 00:09:52
about it as this most important test of

00:09:48 --> 00:09:54
AI for a long time. It seemed impossibly

00:09:51 --> 00:09:57
far away. Then all of a sudden it was

00:09:53 --> 00:09:59
passed. the world freaked out for like a

00:09:56 --> 00:10:01
week, two weeks, and then it's like,

00:09:58 --> 00:10:02
"All right, I guess computers like can

00:10:00 --> 00:10:03
do that now." Yeah.

00:10:01 --> 00:10:07
>> And everything just went on. And I think

00:10:02 --> 00:10:09
that's happening again with science. Uh

00:10:06 --> 00:10:11
my own personal like equivalent of the

00:10:08 --> 00:10:13
touring test has always been when AI can

00:10:10 --> 00:10:15
do science like that has always like

00:10:12 --> 00:10:16
that is a real change to the world. And

00:10:14 --> 00:10:18
for the first time with GPT5, we are

00:10:15 --> 00:10:20
seeing these little little examples

00:10:17 --> 00:10:21
where it's happening. You see these

00:10:19 --> 00:10:23
things on Twitter. did this it made this

00:10:20 --> 00:10:25
novel math discovery and did this small

00:10:22 --> 00:10:28
thing in my you know my physics research

00:10:24 --> 00:10:30
my biology research and everything we

00:10:27 --> 00:10:32
see is that that's going to go much

00:10:29 --> 00:10:34
further so in 2 years I think the models

00:10:31 --> 00:10:37
will be doing bigger chunks of science

00:10:33 --> 00:10:39
and making important discoveries

00:10:36 --> 00:10:41
and that is a crazy thing like that will

00:10:38 --> 00:10:44
have a significant impact on the world I

00:10:40 --> 00:10:46
am I am a believer that to a first order

00:10:43 --> 00:10:47
scientific progress is what makes the

00:10:45 --> 00:10:49
world better over time and if we're

00:10:46 --> 00:10:50
about to have a lot more of that that's

00:10:48 --> 00:10:52
a big

00:10:50 --> 00:10:55
It's interesting because that's a

00:10:51 --> 00:11:00
positive change that people don't

00:10:54 --> 00:11:02
alk about. It it's gotten so um much

00:10:59 --> 00:11:04
into the realm of the negative changes

00:11:01 --> 00:11:06
if AI gets extremely smart. But

00:11:03 --> 00:11:07
>> but carbon disease is

00:11:05 --> 00:11:09
>> who we could use a lot more science.

00:11:06 --> 00:11:12
Yeah. That that that's really good

00:11:08 --> 00:11:13
point. I think Alan Turing said this,

00:11:11 --> 00:11:15
somebody asked him, they said, "Well, do

00:11:12 --> 00:11:18
you really think the uh computer is

00:11:14 --> 00:11:19
going to be, you know, smarter than the

00:11:17 --> 00:11:20
brilliant minds?" He said, "It doesn't

00:11:18 --> 00:11:22
have to be smarter than a brilliant

00:11:19 --> 00:11:25
mind, just smarter than a mediocre mind

00:11:21 --> 00:11:28
like the president of AT&T."

00:11:24 --> 00:11:28
And uh we could use more of that, too.

00:11:27 --> 00:11:30
Probably.

00:11:27 --> 00:11:33
>> We uh we just saw periodic launch last

00:11:29 --> 00:11:34
week. You know, Open AAI lungs. And uh

00:11:32 --> 00:11:35
yeah, to to to that point, it's amazing

00:11:33 --> 00:11:38
to see both the innovation that you guys

00:11:34 --> 00:11:39
are doing, but also the the teams that

00:11:37 --> 00:11:41
you know come out of OpenAI just feels

00:11:38 --> 00:11:42
like are you know, creating tremendous

00:11:40 --> 00:11:43
capable things.

00:11:41 --> 00:11:46
>> We certainly hope so.

00:11:42 --> 00:11:48
>> Yeah. the um I want to ask you about

00:11:45 --> 00:11:52
just broader reflections in terms of

00:11:47 --> 00:11:55
what sort of about diffusion or uh

00:11:51 --> 00:11:56
development in 2025 has surprised you or

00:11:54 --> 00:12:00
what has sort of updated your worldview

00:11:55 --> 00:12:04
since chatb came out.

00:11:59 --> 00:12:06
A lot of things again but maybe the most

00:12:03 --> 00:12:08
interesting one is how much new stuff we

00:12:05 --> 00:12:10
found. sort of thought we had like

00:12:07 --> 00:12:11
stumbled on this one giant secret that

00:12:09 --> 00:12:14
we had these scaling loss for language

00:12:10 --> 00:12:15
models and that felt like such an

00:12:13 --> 00:12:19
incredible

00:12:14 --> 00:12:21
triumph that I was like we're probably

00:12:18 --> 00:12:23
never going to get that lucky again and

00:12:20 --> 00:12:26
eep learning has been this miracle that

00:12:22 --> 00:12:30
keeps on giving and we have kept finding

00:12:25 --> 00:12:32
like breakthrough after breakthrough

00:12:29 --> 00:12:34
again when we got the the reasoning

00:12:31 --> 00:12:35
model breakthrough like I I also thought

00:12:33 --> 00:12:38
hat was like we're never going to get

00:12:34 --> 00:12:40
another one like uh

00:12:37 --> 00:12:42
and it just seems so improbable that

00:12:39 --> 00:12:44
his one technology works so well. But

00:12:41 --> 00:12:46
maybe this is always what it feels like

00:12:43 --> 00:12:49
when you discover like

00:12:45 --> 00:12:50
one of the big, you know, scientific

00:12:48 --> 00:12:52
breakthroughs is it if if it's like

00:12:49 --> 00:12:56
really big, it's pretty fundamental and

00:12:51 --> 00:12:58
it just it keeps working. But the amount

00:12:55 --> 00:13:01
of progress,

00:12:57 --> 00:13:03
like if you went back and used GPT3.5

00:13:00 --> 00:13:04
from Chat GBT launch, you'd be like, I

00:13:02 --> 00:13:06
cannot believe anyone used this thing.

00:13:04 --> 00:13:08
>> Yeah.

00:13:05 --> 00:13:10
And and now we're in this world where

00:13:07 --> 00:13:12
the capability overhang is so immense

00:13:09 --> 00:13:14
like most of the world still just thinks

00:13:11 --> 00:13:15
about what chat PT can do and then you

00:13:13 --> 00:13:16
have like some nerds in Silicon Valley

00:13:14 --> 00:13:18
that are using codecs and they're like

00:13:15 --> 00:13:19
wow those people have no idea what's

00:13:17 --> 00:13:21
going on and then you have like a few

00:13:18 --> 00:13:23
scientists who say those people using

00:13:20 --> 00:13:25
codecs have no idea what's going on but

00:13:22 --> 00:13:27
he the overhang of capability has come

00:13:24 --> 00:13:30
is is is so big now and we've just come

00:13:26 --> 00:13:33
so far on the what the models can do.

00:13:29 --> 00:13:35
And in terms of further development, how

00:13:32 --> 00:13:36
far can we get with with LLMs? At what

00:13:34 --> 00:13:37
point do we need either new architecture

00:13:35 --> 00:13:38
or how do you think about what

00:13:36 --> 00:13:41
breakthroughs are needed?

00:13:37 --> 00:13:43
>> I think far enough that we can make

00:13:40 --> 00:13:45
something that will figure out the next

00:13:42 --> 00:13:48
breakthrough with the current technology

00:13:44 --> 00:13:51
like I it's a very self-reerential

00:13:47 --> 00:13:53
answer, but if if LLMs can get if LLM

00:13:50 --> 00:13:56
based stuff can get far enough that it

00:13:52 --> 00:13:58
can do like better research than all of

00:13:55 --> 00:13:59
Open put together, maybe that's like

00:13:57 --> 00:14:02
good enough.

00:13:58 --> 00:14:04
Yeah, that would be a big breakthrough.

00:14:01 --> 00:14:06
A very big breakthrough. So, on um on

00:14:03 --> 00:14:09
the more mundane, you know, one of the

00:14:05 --> 00:14:11
things that uh people have kind of

00:14:08 --> 00:14:13
started to complain about, I think South

00:14:10 --> 00:14:15
Park did a whole episode on it, is kind

00:14:12 --> 00:14:18
of the obsequiousness

00:14:14 --> 00:14:21
of uh of kind of AI and chat GPT in

00:14:18 --> 00:14:23
particular. And how hard a problem is

00:14:20 --> 00:14:25
that to deal with? Is it not that hard

00:14:22 --> 00:14:26
or is it like kind of a fundamentally

00:14:24 --> 00:14:27
hard problem?

00:14:25 --> 00:14:28
>> Oh, it's not at all hard to deal. a lot

00:14:26 --> 00:14:29
of users really want it.

00:14:28 --> 00:14:31
>> Yeah.

00:14:28 --> 00:14:33
>> Like if you go look at what people say

00:14:30 --> 00:14:34
about Chach online,

00:14:32 --> 00:14:36
>> there's a lot of people who like really

00:14:33 --> 00:14:38
want that back.

00:14:35 --> 00:14:39
>> And it is, you know,

00:14:37 --> 00:14:42
>> so it's not technically it's not hard to

00:14:38 --> 00:14:46
deal with at all. Um, one thing, and

00:14:41 --> 00:14:51
this is not surprising in any way, but

00:14:45 --> 00:14:53
he the incredibly wide distribution of

00:14:50 --> 00:14:54
what users want.

00:14:52 --> 00:14:57
>> Yeah. out of how of like how they'd like

00:14:54 --> 00:14:58
a chatbot to behave in big and small

00:14:56 --> 00:15:01
ways.

00:14:57 --> 00:15:02
>> Does that do you end up having to

00:15:00 --> 00:15:04
configure the personality then you

00:15:02 --> 00:15:08
think? Is that going to be the answer?

00:15:03 --> 00:15:10
>> I think so. Uh I mean ideally like you

00:15:07 --> 00:15:11
just talk to chatt for a little while

00:15:09 --> 00:15:12
and it kind of interviews you and also

00:15:10 --> 00:15:13
rt of sees what you like and don't

00:15:12 --> 00:15:16
like and

00:15:12 --> 00:15:17
>> and chat just figures out but in the

00:15:15 --> 00:15:18
short term you'll probably just pick

00:15:16 --> 00:15:21
one.

00:15:17 --> 00:15:24
>> Got it. Yeah, that makes sense. Very

00:15:20 --> 00:15:27
interesting. And um actually so so one

00:15:23 --> 00:15:31
thing I wanted to ask you about is uh

00:15:26 --> 00:15:34
>> like I think we just had a a really

00:15:30 --> 00:15:36
naive thing which you you know like

00:15:33 --> 00:15:37
it would sort of be unusual to think you

00:15:35 --> 00:15:38
can make something that would talk to

00:15:36 --> 00:15:40
billions of people and everybody wants

00:15:37 --> 00:15:41
to talk to the same

00:15:39 --> 00:15:42
>> person. Yeah.

00:15:40 --> 00:15:45
>> And and yet that was sort of our

00:15:41 --> 00:15:46
implicit assumption for a long time.

00:15:44 --> 00:15:46
>> Right. Because people have very

00:15:45 --> 00:15:47
different friends.

00:15:45 --> 00:15:49
>> People have very different friends. So

00:15:46 --> 00:15:51
now we're trying to fix that.

00:15:48 --> 00:15:52
>> Yeah. and also kind of different

00:15:50 --> 00:15:55
friends, different interests, different

00:15:51 --> 00:15:57
uh levels of intellectual capability.

00:15:54 --> 00:15:59
So, you don't really want to be talking

00:15:56 --> 00:16:00
to the same thing all the time. And one

00:15:58 --> 00:16:01
of the great things about it is you can

00:15:59 --> 00:16:04
say, "Well, explain it to me like I'm

00:16:00 --> 00:16:05
five, but maybe I don't even want to

00:16:03 --> 00:16:08
have to do that prompt. Maybe I always

00:16:04 --> 00:16:09
want you to talk to Yeah. Particularly

00:16:07 --> 00:16:12
if you're teaching me stuff."

00:16:08 --> 00:16:14
Interesting. Um, I want to ask you a

00:16:11 --> 00:16:17
kind of like a a CEO question which has

00:16:13 --> 00:16:21
been interesting for me to observe you

00:16:16 --> 00:16:22
is you just did this deal with AMD. Um,

00:16:20 --> 00:16:24
and you know, of course, the company's

00:16:21 --> 00:16:25
in a different position and you have

00:16:23 --> 00:16:27
more leverage and these kinds of things,

00:16:24 --> 00:16:29
but like how has your kind of thinking

00:16:26 --> 00:16:32
changed over the years since you did

00:16:28 --> 00:16:34
that that initial deal if at all?

00:16:31 --> 00:16:36
>> I I had very little operating experience

00:16:33 --> 00:16:38
then. I had very little experience

00:16:35 --> 00:16:40
running like I I am I am not naturally

00:16:37 --> 00:16:41
someone to run a I'm a great fit to be

00:16:39 --> 00:16:42
an investor

00:16:40 --> 00:16:43
>> and I kind of thought that was going to

00:16:41 --> 00:16:44
be that was what I did before this and I

00:16:42 --> 00:16:45
thought that was going to be my career.

00:16:43 --> 00:16:47
>> Yeah. Yeah.

00:16:44 --> 00:16:52
>> Although you were a CEO before that.

00:16:46 --> 00:16:57
>> I not a good one. Um and

00:16:51 --> 00:16:59
so I think I had the mindset of like

00:16:56 --> 00:17:01
an investor advising a company when we

00:16:58 --> 00:17:02
did and now I understand what it's like

00:17:00 --> 00:17:04
to actually have to run a company.

00:17:01 --> 00:17:07
>> Yeah. Right. Right. Right. There there's

00:17:03 --> 00:17:08
more than I I've learned a lot about how

00:17:06 --> 00:17:11
to

00:17:07 --> 00:17:13
>> you know like how you have to like

00:17:10 --> 00:17:14
>> what what operational

00:17:12 --> 00:17:15
>> how you like what it takes to

00:17:13 --> 00:17:16
perationalize deals over time and

00:17:14 --> 00:17:18
>> right

00:17:15 --> 00:17:20
>> all the implications of the agreement as

00:17:17 --> 00:17:22
opposed to just oh we're going to get

00:17:19 --> 00:17:24
distribution of money. Yeah, that makes

00:17:21 --> 00:17:30
ense. Yeah. Know because it it's really

00:17:23 --> 00:17:32
I I I just I was very impressed at the

00:17:29 --> 00:17:34
deal structure improvement.

00:17:31 --> 00:17:35
>> Yeah. Right.

00:17:33 --> 00:17:36
>> More broadly, you've, you know, in the

00:17:34 --> 00:17:39
last few weeks alone, you mentioned AMD,

00:17:35 --> 00:17:41
but also Oracle, Nvidia. You've chosen

00:17:38 --> 00:17:43
to strike these deals and partnerships

00:17:40 --> 00:17:44
with with companies that you collaborate

00:17:42 --> 00:17:46
with, but could also potentially compete

00:17:43 --> 00:17:48
with in in certain areas. How do you

00:17:45 --> 00:17:50
decide you know when to collaborate

00:17:47 --> 00:17:52
versus when when not to or how do you

00:17:49 --> 00:17:55
just think about

00:17:51 --> 00:17:57
>> um we have decided that it is time to go

00:17:54 --> 00:18:02
make a very aggressive infrastructure

00:17:56 --> 00:18:04
bet and we're like I've never been more

00:18:01 --> 00:18:05
confident in the research road map in

00:18:03 --> 00:18:07
front of us and also the economic value

00:18:04 --> 00:18:09
that will come from using those models

00:18:06 --> 00:18:11
but to make the bet at this scale we

00:18:08 --> 00:18:14
kind of need the whole industry to or

00:18:10 --> 00:18:16
big chunk of the industry to support it

00:18:13 --> 00:18:18
and this is like you know from the level

00:18:15 --> 00:18:20
of like electrons to model distribution

00:18:17 --> 00:18:23
and all the stuff in between which is a

00:18:19 --> 00:18:25
lot and so we're going to partner with a

00:18:22 --> 00:18:27
lot a lot of people. Uh you should

00:18:24 --> 00:18:28
expect like much more from us in the

00:18:26 --> 00:18:30
coming months.

00:18:27 --> 00:18:34
>> Actually expand on that because when you

00:18:29 --> 00:18:36
talk about the scale it does feel like

00:18:33 --> 00:18:38
in your mind

00:18:35 --> 00:18:41
the the limit on it is unlimited like

00:18:37 --> 00:18:44
you would scale it as as you know as big

00:18:40 --> 00:18:47
as you possibly could.

00:18:43 --> 00:18:49
There's totally a limit like there's

00:18:46 --> 00:18:50
ome amount of global GDP. Uh

00:18:48 --> 00:18:51
>> yeah,

00:18:49 --> 00:18:53
>> you know, there's some fraction of it

00:18:50 --> 00:18:54
hat is knowledge work and we don't do

00:18:52 --> 00:18:54
robots yet.

00:18:53 --> 00:18:55
>> Yes.

00:18:53 --> 00:18:56
>> But

00:18:54 --> 00:18:58
>> but but the limits are out there.

00:18:56 --> 00:19:01
>> It feels like the limits are very far

00:18:57 --> 00:19:02
from where we are today. If we are right

00:19:00 --> 00:19:05
about

00:19:01 --> 00:19:07
>> so so I shouldn't say from where like if

00:19:04 --> 00:19:08
we are right that the model capability

00:19:06 --> 00:19:11
is going to go where we think it's going

00:19:07 --> 00:19:12
to go then the economic value that sits

00:19:10 --> 00:19:14
there

00:19:12 --> 00:19:18
can can go very very far

00:19:14 --> 00:19:19
>> right so you wouldn't do it like if all

00:19:17 --> 00:19:22
you ever had was today's model you won't

00:19:18 --> 00:19:25
go there but it's a combination

00:19:21 --> 00:19:27
>> I mean we would still expand because we

00:19:24 --> 00:19:29
can see how much

00:19:26 --> 00:19:31
>> demand there is we can't serve with

00:19:28 --> 00:19:32
today's model but We would not be going

00:19:30 --> 00:19:33
this aggressive if all we had was

00:19:31 --> 00:19:34
today's model,

00:19:32 --> 00:19:34
>> right?

00:19:33 --> 00:19:35
>> Yeah.

00:19:33 --> 00:19:37
>> Right. We get to see a year or two in

00:19:34 --> 00:19:39
advance though. So like

00:19:36 --> 00:19:42
>> Yeah. Interesting.

00:19:38 --> 00:19:45
>> Chad view 800 million weekly active

00:19:41 --> 00:19:48
users about 10% of the world world's

00:19:44 --> 00:19:50
population fastest growing consumer

00:19:47 --> 00:19:51
product you know ever it seems. Um how

00:19:49 --> 00:19:53
do

00:19:50 --> 00:19:57
>> faster than anyone I ever saw.

00:19:52 --> 00:19:59
>> Yeah. How how do you balance you know

00:19:56 --> 00:20:00
optimizing for active users at well at

00:19:58 --> 00:20:02
he same time being a re you know being

00:19:59 --> 00:20:04
a product company and and a research

00:20:01 --> 00:20:06
company how do you throw the new

00:20:03 --> 00:20:08
>> when there's a constraint we almost like

00:20:05 --> 00:20:10
which happens all the time uh we almost

00:20:07 --> 00:20:13
always prioritize giving the GPUs to

00:20:09 --> 00:20:14
research over supporting the product um

00:20:12 --> 00:20:16
part of the reason we want to build this

00:20:13 --> 00:20:18
capacity so we don't have to make such

00:20:15 --> 00:20:20
painful decisions there are weird times

00:20:17 --> 00:20:22
you know like a new feature launches and

00:20:19 --> 00:20:23
it's going really viral or whatever

00:20:21 --> 00:20:26
where research will temporarily

00:20:22 --> 00:20:28
sacrifice some GPUs, but but on the

00:20:25 --> 00:20:30
whole like we're here to build AGI

00:20:27 --> 00:20:32
>> and research gets the priority.

00:20:29 --> 00:20:34
>> Yeah. the you said in your your

00:20:32 --> 00:20:37
interview with with your brother Jack

00:20:33 --> 00:20:39
around how you know other companies can

00:20:36 --> 00:20:42
try to imitate the the products or or

00:20:38 --> 00:20:44
buy your you know or hire your your your

00:20:42 --> 00:20:46
>> higher IP

00:20:43 --> 00:20:49
all sorts of things but but they they

00:20:45 --> 00:20:52
can't buy the culture or they can't the

00:20:48 --> 00:20:54
sort of repeatable sort of you know m

00:20:51 --> 00:20:55
achine if you will that that is you

00:20:53 --> 00:20:57
know constantly the culture of

00:20:54 --> 00:20:59
innovation

00:20:56 --> 00:21:00
how have you done that or what are you

00:20:58 --> 00:21:02
playing

00:21:00 --> 00:21:03
what talk about this this culture of of

00:21:02 --> 00:21:05
innovation.

00:21:02 --> 00:21:07
>> This was one thing that I think was very

00:21:04 --> 00:21:09
useful about coming from an investor

00:21:06 --> 00:21:11
background. A really good research

00:21:08 --> 00:21:13
culture looks much more like running a

00:21:10 --> 00:21:16
really good seedstage investing firm and

00:21:12 --> 00:21:17
betting on founders and sort of that

00:21:15 --> 00:21:20
kind of than it does like running a

00:21:16 --> 00:21:22
product company. So I think having that

00:21:19 --> 00:21:23
experience was really helpful to the

00:21:21 --> 00:21:26
culture we built.

00:21:22 --> 00:21:28
>> Yeah. Yeah. That's sort of how I see,

00:21:25 --> 00:21:29
you know, Benedict in some ways which

00:21:27 --> 00:21:31
we, you know, you're a CEO but also

00:21:28 --> 00:21:32
have, you know, have this portfolio and,

00:21:30 --> 00:21:34
you know, have an investor mindset,

00:21:31 --> 00:21:36
>> right? Like I'm the opposite.

00:21:33 --> 00:21:37
>> CEO going to investor. He's investor

00:21:35 --> 00:21:39
going to CEO.

00:21:36 --> 00:21:40
>> It is unusual in this direction.

00:21:38 --> 00:21:41
>> Yeah. Yeah.

00:21:39 --> 00:21:46
>> Yeah. Well, it never works. You're the

00:21:40 --> 00:21:47
only one who I think I've seen go that

00:21:45 --> 00:21:50
way and have it work.

00:21:46 --> 00:21:52
>> Uh,

00:21:49 --> 00:21:54
workday was like that, right? No, but

00:21:51 --> 00:21:58
Anne Neil was he he was a operator

00:21:54 --> 00:21:59
before he was an investor and I mean he

00:21:57 --> 00:22:00
was really an operator. I mean people

00:21:58 --> 00:22:01
soft is a pretty big

00:21:59 --> 00:22:02
>> and why is that because once people are

00:22:00 --> 00:22:08
investors they don't want to operate

00:22:01 --> 00:22:11
anymore. Um, no. I think that investors

00:22:08 --> 00:22:15
generally if you're good at investing,

00:22:10 --> 00:22:17
you're not necessarily good at like

00:22:14 --> 00:22:21
organizational dynamics, conflict

00:22:16 --> 00:22:24
resolution, um, you know, like just like

00:22:20 --> 00:22:26
the deep psychology of like all the

00:22:23 --> 00:22:28
weird and then you know how

00:22:25 --> 00:22:30
politics get created. There's just like

00:22:27 --> 00:22:32
all this

00:22:29 --> 00:22:36
there. There's the detailed work in

00:22:31 --> 00:22:40
being an operator or being a CEO is

00:22:35 --> 00:22:41
o vast and it's not as intellectually

00:22:39 --> 00:22:43
stimulating. It's not something you can

00:22:40 --> 00:22:45
ever go talk to somebody at a cocktail

00:22:42 --> 00:22:46
party about. And so like you're an

00:22:44 --> 00:22:48
investor, you get like, oh, everybody

00:22:45 --> 00:22:50
thinks I'm so smart and you know cuz you

00:22:47 --> 00:22:52
know everything. You see all the

00:22:49 --> 00:22:55
companies and so forth and that's a good

00:22:51 --> 00:22:56
feeling. And then being CEO is often a

00:22:54 --> 00:22:57
bad feeling. Yeah.

00:22:55 --> 00:22:59
>> And so it's really hard to go to a a

00:22:56 --> 00:23:00
good feeling to a bad feeling. I would

00:22:58 --> 00:23:01
just say

00:22:59 --> 00:23:03
>> I'm shocked by how different they are

00:23:00 --> 00:23:04
and I'm shocked by how much the

00:23:02 --> 00:23:05
difference between a good job and a bad

00:23:03 --> 00:23:05
job they are.

00:23:04 --> 00:23:06
>> Yeah.

00:23:04 --> 00:23:07
>> Yes.

00:23:05 --> 00:23:09
>> Yeah. You know, it's tough. It's it's

00:23:06 --> 00:23:11
rough. I mean, I can't even believe I'm

00:23:08 --> 00:23:12
running the firm. Like I know better.

00:23:10 --> 00:23:13
>> Yeah.

00:23:11 --> 00:23:15
>> And he can't believe he's running

00:23:12 --> 00:23:17
OpenAI. He knows better.

00:23:14 --> 00:23:19
>> Going back to progress today, are you

00:23:16 --> 00:23:20
still useful in a world in which they're

00:23:18 --> 00:23:22
getting saturated, gained? Are they

00:23:19 --> 00:23:25
still the What is the best way to gauge

00:23:21 --> 00:23:26
model capability now? Um, well, we're

00:23:24 --> 00:23:28
talking about scientific discovery. I

00:23:25 --> 00:23:29
think that'll be an eval that can go for

00:23:27 --> 00:23:31
a long time.

00:23:28 --> 00:23:34
>> Revenue is kind of an interesting one.

00:23:30 --> 00:23:36
Uh, but I think the like static evals of

00:23:33 --> 00:23:37
benchmark scores are less interesting.

00:23:35 --> 00:23:39
>> Yeah.

00:23:36 --> 00:23:41
>> And and also those are crazily gamed.

00:23:38 --> 00:23:43
>> Yeah. Yeah.

00:23:40 --> 00:23:45
>> More broadly, it seems like

00:23:42 --> 00:23:47
>> that's all there is as far as I can

00:23:44 --> 00:23:50
tell. Yeah. More broadly, it seems that

00:23:46 --> 00:23:53
he culture the culture Twitter is less

00:23:49 --> 00:23:56
AGI pill than it was a year or so ago

00:23:52 --> 00:23:59
when the AI 2027 thing came out. Some

00:23:55 --> 00:24:01
people point to you GBT5 them not seeing

00:23:58 --> 00:24:03
sort of the obvious um obviously there

00:24:00 --> 00:24:05
were a lot of progress that in some ways

00:24:02 --> 00:24:06
under the the surface or not not as

00:24:04 --> 00:24:09
obvious to what people were expecting.

00:24:05 --> 00:24:13
Should people be less AGI pled or is

00:24:08 --> 00:24:13
this just Twitter vibes? And

00:24:13 --> 00:24:17
>> well, a little bit of both. I mean, I I

00:24:14 --> 00:24:18
think like

00:24:16 --> 00:24:20
>> like we talked about the touring test,

00:24:17 --> 00:24:22
AGI will come.

00:24:19 --> 00:24:23
>> It will go whooshing by.

00:24:21 --> 00:24:25
>> The world will not change as much as the

00:24:22 --> 00:24:26
impossible amount that you would think

00:24:24 --> 00:24:28
it should.

00:24:25 --> 00:24:29
>> It won't actually be the singularity.

00:24:27 --> 00:24:30
>> It will not.

00:24:28 --> 00:24:33
>> Yeah.

00:24:29 --> 00:24:34
Even even if it's like doing kind

00:24:32 --> 00:24:39
of crazy a research like the society

00:24:33 --> 00:24:39
will learn faster but

00:24:38 --> 00:24:43
one of the kind of like retrospective

00:24:40 --> 00:24:45
observations is people and societies as

00:24:42 --> 00:24:48
a whole are just so much more adaptable

00:24:44 --> 00:24:51
than we think that you know it was like

00:24:47 --> 00:24:53
a big update to think that AGR was going

00:24:50 --> 00:24:54
to come. You kind of go through that.

00:24:52 --> 00:24:56
You need something new to think about.

00:24:54 --> 00:24:58
You make peace with that. It turns out

00:24:55 --> 00:25:01
like it will be more continuous than we

00:24:57 --> 00:25:02
thought.

00:25:00 --> 00:25:04
which is good.

00:25:01 --> 00:25:05
>> Which is really good.

00:25:03 --> 00:25:09
>> I'm not up for the big bang.

00:25:04 --> 00:25:10
>> Yeah. Um well to that end, how have you

00:25:08 --> 00:25:11
sort of evolved your thinking? You

00:25:09 --> 00:25:13
mentioned you evolved your thinking on

00:25:10 --> 00:25:14
sort of uh you know vertical

00:25:12 --> 00:25:15
integration. How have you evolved your

00:25:13 --> 00:25:19
thinking or what's the latest thinking

00:25:14 --> 00:25:22
on sort of AI stewardship you safety?

00:25:18 --> 00:25:24
What's the latest thinking on that?

00:25:21 --> 00:25:27
I do still think there are going to be

00:25:23 --> 00:25:27
some

00:25:28 --> 00:25:35
really strange or scary moments. Uh

00:25:31 --> 00:25:38
the fact that like so far the technology

00:25:34 --> 00:25:40
has not

00:25:37 --> 00:25:43
produced a really scary giant risk

00:25:39 --> 00:25:45
doesn't mean it never will. It also like

00:25:42 --> 00:25:46
there's we're talking about it's kind of

00:25:44 --> 00:25:49
weird to have like billions of people

00:25:45 --> 00:25:50
talking to the same brain. like there

00:25:48 --> 00:25:53
may be these weird societal scale things

00:25:50 --> 00:25:54
that are already happening we that

00:25:52 --> 00:25:58
aren't scary in the big way but are just

00:25:54 --> 00:25:58
sort of different. Um

00:25:58 --> 00:26:02
but I expect like

00:26:02 --> 00:26:06
I expect some really bad stuff to happen

00:26:04 --> 00:26:09
because of the technology which also has

00:26:05 --> 00:26:10
happened with previous technologies and

00:26:08 --> 00:26:13
>> all the way back to fire.

00:26:10 --> 00:26:17
>> Yeah.

00:26:12 --> 00:26:18
And I think we'll like develop

00:26:16 --> 00:26:19
some guardrails around it as a as a

00:26:17 --> 00:26:21
society.

00:26:18 --> 00:26:22
>> Yeah. What is sort of your latest

00:26:20 --> 00:26:24
hinking on the the right mental models

00:26:22 --> 00:26:26
we should have around the the right

00:26:23 --> 00:26:28
regulatory frameworks to to think about

00:26:25 --> 00:26:32
or or the ones we shouldn't be thinking

00:26:27 --> 00:26:32
about? Um

00:26:31 --> 00:26:36
I think most

00:26:36 --> 00:26:43
I think the right thing to I I think

00:26:37 --> 00:26:44
most regulation uh

00:26:42 --> 00:26:47
probably has a lot of downside. The one

00:26:43 --> 00:26:48
thing I would like is as the models get

00:26:46 --> 00:26:51
he thing I would most like is as the

00:26:47 --> 00:26:55
models get truly like extremely

00:26:50 --> 00:26:57
superhuman capable. Um,

00:26:54 --> 00:26:59
I think those models and only those

00:26:56 --> 00:27:01
models are probably worth some sort of

00:26:58 --> 00:27:04
like

00:27:00 --> 00:27:07
very careful safety testing uh as as the

00:27:03 --> 00:27:08
frontier pushes back. Um, I don't want a

00:27:06 --> 00:27:11
big bang either. Mhm.

00:27:07 --> 00:27:16
>> And you can see a bunch of ways that

00:27:10 --> 00:27:19
could go very seriously wrong. But

00:27:15 --> 00:27:21
I hope we'll only focus the regulatory

00:27:18 --> 00:27:23
burden on that stuff and not all of the

00:27:20 --> 00:27:25
wonderful stuff that less capable models

00:27:22 --> 00:27:28
can do that you could just have like a

00:27:24 --> 00:27:30
European style complete cramp on and

00:27:27 --> 00:27:33
that would be very bad. Yeah, it seems

00:27:29 --> 00:27:35
like the

00:27:32 --> 00:27:37
thought experiment that okay,

00:27:34 --> 00:27:40
there's going to be a model down the

00:27:36 --> 00:27:43
line that is a super superhuman

00:27:39 --> 00:27:46
intelligence that could, you know, do

00:27:42 --> 00:27:48
some kind of takeoff flight thing.

00:27:45 --> 00:27:50
We really do need to wait till we get

00:27:47 --> 00:27:52
here. Uh um or like at least we get to

00:27:49 --> 00:27:55
a much bigger scale or we get close to

00:27:51 --> 00:27:57
it. Um because

00:27:54 --> 00:27:59
nothing is going to pop out of your lab

00:27:56 --> 00:28:03
in the next week that's going to do

00:27:58 --> 00:28:04
that. And I I think that's where we as

00:28:02 --> 00:28:07
an industry kind of confuse the

00:28:03 --> 00:28:11
regulators. Yeah. uh because I think you

00:28:06 --> 00:28:14
really could one you damage America

00:28:10 --> 00:28:14
in particular in that um like China's

00:28:13 --> 00:28:19
not going to have that kind of

00:28:13 --> 00:28:22
restriction and and you getting behind

00:28:18 --> 00:28:23
um in AI I think it'd be very dangerous

00:28:21 --> 00:28:24
for the world

00:28:22 --> 00:28:24
>> extremely dangerous

00:28:24 --> 00:28:30
>> much more dangerous than not regulating

00:28:26 --> 00:28:32
something we don't know how to do yet

00:28:29 --> 00:28:34
>> you also want to talk about copyright

00:28:32 --> 00:28:37
>> um

00:28:33 --> 00:28:39
yeah So, well then that that's a segue,

00:28:36 --> 00:28:42
but um

00:28:38 --> 00:28:44
when you think about well I guess how do

00:28:41 --> 00:28:47
you see copy right unfolding because

00:28:43 --> 00:28:51
you've done some very interesting things

00:28:46 --> 00:28:53
um with the opt out uh and

00:28:50 --> 00:28:55
you know as you see people selling

00:28:52 --> 00:28:58
rights do you think will they be be

00:28:54 --> 00:29:00
bought exclusively will they be just

00:28:57 --> 00:29:02
like um I could sell it to everybody

00:28:59 --> 00:29:03
wants to pay me or how do you think

00:29:01 --> 00:29:06
that's going to unfold

00:29:02 --> 00:29:08
>> this is my current guess It it

00:29:06 --> 00:29:10
speaking of that like society and

00:29:07 --> 00:29:12
technology co-evolve as the technology

00:29:09 --> 00:29:14
goes in different directions and we saw

00:29:11 --> 00:29:16
an example of a different like video

00:29:13 --> 00:29:18
models got a very different response

00:29:15 --> 00:29:21
from rights holders than image gen does.

00:29:17 --> 00:29:25
So like you'll see this continue to move

00:29:20 --> 00:29:27
>> but forced guess from the position we're

00:29:24 --> 00:29:30
in today. I would say that society

00:29:26 --> 00:29:33
decides training is fair use.

00:29:30 --> 00:29:36
>> Mhm. But

00:29:32 --> 00:29:40
here's a new model for generating

00:29:36 --> 00:29:41
content in the style of or with the IP

00:29:39 --> 00:29:45
of or something else.

00:29:40 --> 00:29:47
>> So you know anyone can read like a human

00:29:44 --> 00:29:48
author can anybody can read a novel and

00:29:46 --> 00:29:50
get some inspiration but you can't

00:29:47 --> 00:29:50
reproduce the novel in your own

00:29:49 --> 00:29:52
>> right

00:29:49 --> 00:29:55
>> and can talk about Harry Potter but you

00:29:52 --> 00:29:58
can't re spit it out.

00:29:54 --> 00:30:02
>> Yes. Although another thing that I think

00:29:57 --> 00:30:02
will change um

00:30:01 --> 00:30:07
>> in the case of Sora, we've heard from

00:30:05 --> 00:30:08
a lot of concerned rights holders and

00:30:06 --> 00:30:09
also a lot of

00:30:07 --> 00:30:11
>> name and like

00:30:08 --> 00:30:13
>> and a and a lot of rights holders who

00:30:10 --> 00:30:15
are like my concern is you won't put my

00:30:12 --> 00:30:17
character in enough.

00:30:14 --> 00:30:19
>> Yeah. I want restrictions for sure, but

00:30:16 --> 00:30:21
like if I'm, you know, whatever and I

00:30:18 --> 00:30:22
have this character, like I don't want

00:30:20 --> 00:30:25
he character to say some crazy

00:30:22 --> 00:30:26
offensive thing, but like I want people

00:30:24 --> 00:30:27
to interact. Like that's how they

00:30:25 --> 00:30:29
develop the relationship and that's how

00:30:26 --> 00:30:31
like my franchise gets more valuable.

00:30:28 --> 00:30:32
And if you become really if you're

00:30:30 --> 00:30:34
picking like his character over my

00:30:31 --> 00:30:37
character all the time, like I don't

00:30:33 --> 00:30:40
like that. So, I can completely see a

00:30:36 --> 00:30:42
world where

00:30:39 --> 00:30:44
subject to the decisions that a rights

00:30:41 --> 00:30:46
holder has, they get more upset with us

00:30:43 --> 00:30:48
for not generating their character often

00:30:45 --> 00:30:49
ough than too much.

00:30:47 --> 00:30:50
>> Yeah.

00:30:48 --> 00:30:53
>> And this is like this was not an obvious

00:30:50 --> 00:30:55
thing that recently that this is how it

00:30:52 --> 00:30:57
might go. But

00:30:54 --> 00:31:00
>> yeah, this is such an interesting thing

00:30:56 --> 00:31:03
with kind of Hollywood. we saw this like

00:30:59 --> 00:31:05
one of the things that I never quite

00:31:02 --> 00:31:08
understood about the music business was

00:31:04 --> 00:31:10
how like you know okay you have to pay

00:31:07 --> 00:31:12
us if you play the song in a restaurant

00:31:09 --> 00:31:13
or like at a game or this and that and

00:31:11 --> 00:31:16
the other and they they get very

00:31:12 --> 00:31:18
aggressive with that. um when it's

00:31:15 --> 00:31:20
obviously a good idea for them to play

00:31:17 --> 00:31:21
our song at a game because that's the

00:31:19 --> 00:31:23
biggest advertisement in the world for

00:31:20 --> 00:31:24
like all the things that you do, your

00:31:22 --> 00:31:26
concert, your your

00:31:23 --> 00:31:30
>> Yeah, that one felt really irrational.

00:31:25 --> 00:31:33
>> Like um but it I I would just say it's

00:31:29 --> 00:31:34
very possible for the industry just

00:31:32 --> 00:31:36
because the way those industries are

00:31:33 --> 00:31:39
organized or at least the traditional

00:31:35 --> 00:31:42
creative industries to do something

00:31:38 --> 00:31:44
irrational. Um, and it comes from like

00:31:41 --> 00:31:45
in the music industry. I think it came

00:31:43 --> 00:31:46
from the structure where you have the

00:31:44 --> 00:31:49
publisher who's just,

00:31:46 --> 00:31:51
>> you know, basically after everybody. Uh,

00:31:48 --> 00:31:52
you know, that their whole job is to

00:31:50 --> 00:31:53
stop you from playing

00:31:51 --> 00:31:54
>> the music.

00:31:52 --> 00:31:55
>> Yeah.

00:31:53 --> 00:31:58
>> Which every artist would want you to

00:31:54 --> 00:31:59
play. Uh, so

00:31:57 --> 00:32:02
>> I I do wonder how it's going to shape

00:31:58 --> 00:32:06
out. I agree with you that the rational

00:32:01 --> 00:32:09
idea is I want to let you use it all you

00:32:05 --> 00:32:11
want and I want you to use it but um

00:32:08 --> 00:32:13
that don't mess up my character. Yeah.

00:32:10 --> 00:32:16
>> So so I think like

00:32:12 --> 00:32:18
>> if I had to guess

00:32:15 --> 00:32:20
ome people will say that some people

00:32:17 --> 00:32:22
say absolutely not but it doesn't have

00:32:19 --> 00:32:23
the music industry like

00:32:21 --> 00:32:24
>> thing of just a few people with all of

00:32:22 --> 00:32:25
the

00:32:23 --> 00:32:27
>> right it's more dispersed

00:32:24 --> 00:32:28
>> and so people will just try many

00:32:26 --> 00:32:28
different setups here and see what

00:32:27 --> 00:32:30
works.

00:32:27 --> 00:32:32
>> Yeah. And maybe it's a way for new

00:32:29 --> 00:32:32
creatives to get new characters out.

00:32:31 --> 00:32:34
>> Yeah.

00:32:31 --> 00:32:36
>> And you'll never be able to use Daffy

00:32:33 --> 00:32:38
Decker.

00:32:35 --> 00:32:40
>> I want to chat about open source. Um

00:32:37 --> 00:32:42
because there's been some evolution in

00:32:39 --> 00:32:43
the thinking too and that GBD3 didn't

00:32:41 --> 00:32:45
have the open open weights, but you

00:32:42 --> 00:32:47
released a you know very capable open

00:32:44 --> 00:32:48
model earlier this year. What's sort of

00:32:46 --> 00:32:49
your your latest thinking. What was the

00:32:47 --> 00:32:52
volution there?

00:32:48 --> 00:32:54
>> I think open source is good. I Yeah. I

00:32:51 --> 00:32:56
mean I'm happy like it makes me really

00:32:53 --> 00:32:57
happy that people really like GPOSS.

00:32:55 --> 00:32:58
Yeah.

00:32:56 --> 00:33:00
>> Yeah.

00:32:57 --> 00:33:02
And what do you think like strategically

00:32:59 --> 00:33:04
like what's the danger

00:33:01 --> 00:33:06
of

00:33:03 --> 00:33:07
deepseek being the dominant open source

00:33:05 --> 00:33:09
model?

00:33:06 --> 00:33:11
>> I mean who knows what people will put in

00:33:08 --> 00:33:13
these open source models over time like

00:33:10 --> 00:33:14
>> like what the weights will actually be.

00:33:12 --> 00:33:15
Yeah.

00:33:13 --> 00:33:18
>> It's really hard to

00:33:14 --> 00:33:20
>> So you're seeding control of the

00:33:17 --> 00:33:21
interpretation of everything to

00:33:19 --> 00:33:22
somebody.

00:33:20 --> 00:33:25
>> Yeah.

00:33:21 --> 00:33:29
>> Who may be or may not be influenced

00:33:24 --> 00:33:29
heavily by the Chinese government. Yeah.

00:33:28 --> 00:33:30
What about And

00:33:28 --> 00:33:33
>> by the way, we see I mean, you know,

00:33:29 --> 00:33:35
just to give you and and we really thank

00:33:32 --> 00:33:37
you for um putting out a really good

00:33:34 --> 00:33:38
open source model because what we're

00:33:36 --> 00:33:40
seeing now is in all the universities,

00:33:38 --> 00:33:41
they're all using the Chinese models.

00:33:39 --> 00:33:46
>> Y

00:33:40 --> 00:33:47
eah. Which feels very dangerous.

00:33:45 --> 00:33:50
>> You've said that the things you care

00:33:46 --> 00:33:51
most about professionally are AI and

00:33:49 --> 00:33:53
energy.

00:33:50 --> 00:33:54
>> I did not know they were going to end up

00:33:52 --> 00:33:55
being the same thing. They were two

00:33:53 --> 00:33:56
independent interests that really

00:33:54 --> 00:33:58
converged.

00:33:55 --> 00:33:59
>> Yeah.

00:33:57 --> 00:34:02
talk more about how your interest in

00:33:58 --> 00:34:03
energy uh sort of began, how you sort of

00:34:01 --> 00:34:04
chosen to to play in it and then we

00:34:02 --> 00:34:05
could talk about Yeah. how they care,

00:34:03 --> 00:34:07
>> right? Because you started your career

00:34:04 --> 00:34:08
in physics. Yeah.

00:34:06 --> 00:34:08
>> CS and physics.

00:34:07 --> 00:34:10
>> Yeah.

00:34:08 --> 00:34:12
>> Uh well, I never really had a career. I

00:34:09 --> 00:34:14
studied physics and my first job was

00:34:11 --> 00:34:17
like a CS like

00:34:13 --> 00:34:19
>> this is an oversimplification, but

00:34:16 --> 00:34:22
roughly speaking, I I think if you look

00:34:18 --> 00:34:23
at history, the best the highest impact

00:34:21 --> 00:34:25
hing to improve people's quality of

00:34:22 --> 00:34:27
life has been cheaper and more abundant

00:34:24 --> 00:34:28
energy.

00:34:26 --> 00:34:32
And so it seems like pushing that much

00:34:28 --> 00:34:33
further is a good idea. And I I don't

00:34:31 --> 00:34:34
know. I just like people have these

00:34:32 --> 00:34:36
different lenses. They look at the

00:34:33 --> 00:34:38
world, but I I see energy everywhere.

00:34:35 --> 00:34:41
>> Yeah.

00:34:37 --> 00:34:43
And so

00:34:40 --> 00:34:46
get into because we've kind of uh in the

00:34:42 --> 00:34:48
west I think we've uh paint ourselves

00:34:45 --> 00:34:53
into a little bit of a corner on energy

00:34:48 --> 00:34:53
um by both outlying nuclear for a very

00:34:52 --> 00:34:54
long time.

00:34:52 --> 00:34:58
>> That was an incredibly dumb decision.

00:34:53 --> 00:35:01
>> Yeah. And then you know like also a lot

00:34:57 --> 00:35:03
of policy restrictions on energy um and

00:35:00 --> 00:35:05
you know worse so in Europe than in the

00:35:02 --> 00:35:07
US but also dangerous here and now with

00:35:04 --> 00:35:10
AI here

00:35:06 --> 00:35:13
it feels like we're going to need all

00:35:10 --> 00:35:16
the energy from every possible source

00:35:12 --> 00:35:18
and how do you see that developing kind

00:35:15 --> 00:35:20
of policy-wise and technologically like

00:35:17 --> 00:35:23
what are going to be the big sources and

00:35:19 --> 00:35:26
how will those kind of curves cross um

00:35:22 --> 00:35:29
and then what's the right policy posture

00:35:25 --> 00:35:31
around you know drilling fracking all

00:35:28 --> 00:35:33
these kinds of things I expect in the

00:35:30 --> 00:35:35
short term it will be most of the net

00:35:32 --> 00:35:38
new in the US will be natural gas

00:35:34 --> 00:35:41
relative to at least base load energy in

00:35:37 --> 00:35:42
the long term I expect it'll be a

00:35:40 --> 00:35:46
>> I don't know what the ratio but the two

00:35:41 --> 00:35:47
dominant sources will be uh solar plus

00:35:45 --> 00:35:49
torage and nuclear

00:35:46 --> 00:35:50
>> I think yeah

00:35:48 --> 00:35:51
>> some combination of those two will win

00:35:49 --> 00:35:53
the future like the long-term future

00:35:50 --> 00:35:55
>> in the long term right now

00:35:52 --> 00:35:57
>> and advanced nuclear

00:35:54 --> 00:35:59
SMRS fusion the whole the whole stack.

00:35:56 --> 00:36:03
>> And how how fast do you think that's

00:35:58 --> 00:36:05
coming on the nuclear side where

00:36:02 --> 00:36:06
we're at really at scale cuz you know

00:36:04 --> 00:36:07
obviously there's a lot of people

00:36:05 --> 00:36:08
building it.

00:36:06 --> 00:36:10
>> Yeah.

00:36:07 --> 00:36:11
>> Um but we we have to completely legalize

00:36:09 --> 00:36:14
it and all that kind of thing.

00:36:10 --> 00:36:17
>> I I think it kind of depends on the

00:36:13 --> 00:36:19
price. If it is completely crushingly

00:36:16 --> 00:36:20
economically dominant over everything

00:36:18 --> 00:36:21
else

00:36:19 --> 00:36:23
>> then I expect to happen pretty fast.

00:36:20 --> 00:36:25
Yeah. Again, if you like study the

00:36:22 --> 00:36:27
history of energy, when you have these

00:36:24 --> 00:36:30
major transitions to a much cheaper

00:36:26 --> 00:36:32
source, the world moves over pretty

00:36:29 --> 00:36:33
quickly. The cost of energy is just so

00:36:31 --> 00:36:36
important.

00:36:32 --> 00:36:39
>> Yeah. So, if

00:36:35 --> 00:36:41
nuclear gets radically cheap relative

00:36:38 --> 00:36:42
to anything else we can do, I'd expect

00:36:40 --> 00:36:45
here's a lot of political pressure to

00:36:42 --> 00:36:47
get the NRC to move quickly on it, and

00:36:44 --> 00:36:48
we'll find a way to build it fast. If

00:36:46 --> 00:36:50
it's around the same price as other

00:36:47 --> 00:36:52
sources, I expect the kind of

00:36:49 --> 00:36:53
anti-uclear sentiment to overwhelm and

00:36:51 --> 00:36:55
it take a really long time.

00:36:52 --> 00:36:57
>> Yeah.

00:36:54 --> 00:36:57
>> Should be cheaper.

00:36:56 --> 00:36:58
>> It should be.

00:36:56 --> 00:36:59
>> Yeah.

00:36:58 --> 00:37:02
>> It should be the cheapest form of energy

00:36:59 --> 00:37:05
on Earth like or anyway.

00:37:01 --> 00:37:06
>> Yeah. Yeah. Cheap, clean.

00:37:04 --> 00:37:08
>> What's it not to like?

00:37:05 --> 00:37:10
>> Apparently a lot.

00:37:07 --> 00:37:12
>> Yeah. on open. What's what's the latest

00:37:09 --> 00:37:13
hinking in terms of monetization in

00:37:11 --> 00:37:14
terms of either certain experiments or c

00:37:12 --> 00:37:16
ertain things that you could see

00:37:13 --> 00:37:19
yourself spending more time or less less

00:37:15 --> 00:37:20
time on different models that you're

00:37:18 --> 00:37:22
xcited about? The thing that's top of

00:37:20 --> 00:37:25
mind for me like right now just cuz it

00:37:22 --> 00:37:26
just launched and there's so much usage

00:37:24 --> 00:37:27
is what we're going to do for Sora.

00:37:25 --> 00:37:30
>> Yeah.

00:37:26 --> 00:37:30
>> Um

00:37:30 --> 00:37:35
another thing you learn once you launch

00:37:31 --> 00:37:36
one of these things is how people use

00:37:34 --> 00:37:37
them versus how you think they're going

00:37:35 --> 00:37:38
to use them.

00:37:36 --> 00:37:40
>> Yeah. And people are certainly using

00:37:37 --> 00:37:41
Sora the ways we thought they were going

00:37:39 --> 00:37:43
to use it, but they're also using it in

00:37:40 --> 00:37:45
these ways that are very different. Like

00:37:42 --> 00:37:46
people are generating funny memes of

00:37:44 --> 00:37:50
them and their friends and sending them

00:37:45 --> 00:37:52
in a group chat. And that will require a

00:37:49 --> 00:37:54
very different like sore videos are

00:37:51 --> 00:37:56
xpensive to make. Uh

00:37:53 --> 00:37:57
>> right. So that will require a very

00:37:55 --> 00:37:59
different, you know, for people that are

00:37:56 --> 00:38:00
doing that like hundreds of times a day.

00:37:58 --> 00:38:01
>> It's going to require a very different

00:37:59 --> 00:38:02
monetization method than the kinds of

00:38:00 --> 00:38:04
things we were we were thinking about. I

00:38:01 --> 00:38:06
think it's very cool that the thesis of

00:38:03 --> 00:38:08
Sora, which is people actually want to

00:38:05 --> 00:38:09
create a lot of content, it's it's not

00:38:07 --> 00:38:11
hat,

00:38:08 --> 00:38:13
you know, the traditional naive thing

00:38:10 --> 00:38:15
that it's like 1% of users create

00:38:12 --> 00:38:17
content, 10% leave comments, and 100%

00:38:14 --> 00:38:19
view. Maybe a lot more want to create

00:38:16 --> 00:38:20
content, but it's just been harder to

00:38:18 --> 00:38:23
do. And I think that's a very cool

00:38:20 --> 00:38:25
change. But it does mean that we got to

00:38:22 --> 00:38:26
figure out a very different monetization

00:38:24 --> 00:38:28
model for this than we were thinking

00:38:25 --> 00:38:29
about. If people want to create that

00:38:27 --> 00:38:31
much, I assume it's like some version of

00:38:28 --> 00:38:33
you have to charge people per

00:38:30 --> 00:38:36
generation. per generation when when

00:38:32 --> 00:38:37
it's this expensive. Um, but that's

00:38:35 --> 00:38:38
like a new thing we haven't had to

00:38:36 --> 00:38:40
really think about before.

00:38:37 --> 00:38:43
>> What's your thinking on ads for the

00:38:39 --> 00:38:43
longtail?

00:38:43 --> 00:38:52
>> Open to it. I like many other people, I

00:38:48 --> 00:38:54
find ads somewhat distasteful, but not

00:38:51 --> 00:38:56
a non-starter. Um, and there's some

00:38:54 --> 00:38:59
ads that I like, like one thing I give

00:38:55 --> 00:39:03
Meta a lot of credit for is Instagram

00:38:58 --> 00:39:05
ads are like a net value ad to me. Um, I

00:39:02 --> 00:39:08
like Instagram ads. I've never felt

00:39:04 --> 00:39:11
hat. Like, you know, on on Google, I

00:39:07 --> 00:39:13
feel like I know what I'm looking for.

00:39:10 --> 00:39:15
The first result is probably better. The

00:39:12 --> 00:39:17
ad is an annoyance to me. On Instagram,

00:39:14 --> 00:39:19
it's like, I didn't know I want this

00:39:16 --> 00:39:20
thing. It's very cool. I never heard it,

00:39:18 --> 00:39:22
but I never would have thought to search

00:39:19 --> 00:39:26
for it. I want the thing. So that's like

00:39:21 --> 00:39:28
there's kinds of things like that. But

00:39:25 --> 00:39:29
>> people have a very high trust

00:39:27 --> 00:39:31
relationship with Chhat GPT. Even if it

00:39:28 --> 00:39:33
screws up, even if it hallucinates, even

00:39:30 --> 00:39:34
if it gets it wrong, people feel like it

00:39:32 --> 00:39:36
is trying to help them and that it's

00:39:34 --> 00:39:39
trying to do the right thing. And is if

00:39:35 --> 00:39:40
we broke that trust, it's like you say,

00:39:38 --> 00:39:43
"What coffee machine should I buy?" And

00:39:40 --> 00:39:45
we recommended one and it was not the

00:39:42 --> 00:39:47
best thing we could do, but the one we

00:39:44 --> 00:39:49
re getting paid for, that trust would

00:39:46 --> 00:39:51
vanish. So like that kind of ad does not

00:39:48 --> 00:39:54
work. There are others that I

00:39:50 --> 00:39:57
imagine that could work totally fine.

00:39:53 --> 00:39:59
Um, but that would require like a lot of

00:39:56 --> 00:40:01
care to avoid the obvious traps.

00:39:58 --> 00:40:05
>> Yeah.

00:40:00 --> 00:40:08
M and then how how big a problem you

00:40:04 --> 00:40:13
know just you extending the Google

00:40:07 --> 00:40:16
xample is like um you know fake uh

00:40:12 --> 00:40:17
content that then gets slurped in by the

00:40:15 --> 00:40:19
model and then they recommend the wrong

00:40:16 --> 00:40:22
coffee maker because somebody just

00:40:18 --> 00:40:24
blasted a thousand great reviews of that

00:40:21 --> 00:40:25
coffee maker.

00:40:23 --> 00:40:27
>> So there's all of these things that have

00:40:24 --> 00:40:30
changed very quickly for us.

00:40:26 --> 00:40:31
>> Yeah. Um, this is one of those examples

00:40:29 --> 00:40:33
that people are doing these crazy things

00:40:30 --> 00:40:36
to maybe not even fake reviews, but just

00:40:32 --> 00:40:36
paying a bunch of like human like really

00:40:35 --> 00:40:38
trying to figure out

00:40:35 --> 00:40:39
>> are using chat GPT to write some good

00:40:37 --> 00:40:39
ones.

00:40:38 --> 00:40:41
>> Uh,

00:40:38 --> 00:40:42
>> write me a review that chat GBT would

00:40:40 --> 00:40:43
love.

00:40:41 --> 00:40:44
>> Yeah.

00:40:42 --> 00:40:45
>> So, this coffee.

00:40:43 --> 00:40:45
>> Exactly. Exactly.

00:40:44 --> 00:40:48
>> Yeah.

00:40:44 --> 00:40:49
>> So, this is a very sudden shift that has

00:40:47 --> 00:40:50
happened.

00:40:48 --> 00:40:53
>> Mhm.

00:40:49 --> 00:40:55
>> We never used to hear about this like

00:40:52 --> 00:40:56
6 months ago or 12 months ago.

00:40:54 --> 00:40:58
>> Yeah.

00:40:55 --> 00:41:00
>> Certainly. And now there's like a real

00:40:57 --> 00:41:01
cottage industry that feels like it's

00:40:59 --> 00:41:01
prouted up overnight.

00:41:00 --> 00:41:03
>> Yeah.

00:41:00 --> 00:41:05
>> Trying to do this.

00:41:02 --> 00:41:05
>> Yeah. Yeah. Yeah. No, they they're very

00:41:04 --> 00:41:08
clever out there.

00:41:04 --> 00:41:09
>> Yeah. So, uh I don't know how we're

00:41:07 --> 00:41:10
going to fight it yet, but people figure

00:41:08 --> 00:41:12
this out.

00:41:09 --> 00:41:13
>> So, that gets into a little bit of this

00:41:11 --> 00:41:17
other thing that we've been worried

00:41:12 --> 00:41:20
about. Um and you know, we're trying to

00:41:16 --> 00:41:22
kind of figure out uh blockchain sort of

00:41:19 --> 00:41:25
potential solutions to it and so forth.

00:41:21 --> 00:41:27
But there's this problem where like the

00:41:24 --> 00:41:30
incentive to create content on the

00:41:26 --> 00:41:32
internet used to be, you know, people

00:41:29 --> 00:41:33
would come and see my content and they'd

00:41:31 --> 00:41:36
read like, you know, if I write a blog,

00:41:32 --> 00:41:38
people will read it and so forth. Um,

00:41:35 --> 00:41:40
with chat GPT,

00:41:37 --> 00:41:42
if I'm just asking Chat GPT and I'm not

00:41:40 --> 00:41:46
like going around the internet, who's

00:41:42 --> 00:41:48
going to create the content and why? Um,

00:41:45 --> 00:41:51
and is there

00:41:47 --> 00:41:54
an incentive theory or or or something

00:41:50 --> 00:41:56
that you have to kind of not break the

00:41:53 --> 00:41:58
covenant of the internet, which is like

00:41:55 --> 00:42:01
I create something and then I'm rewarded

00:41:58 --> 00:42:04
for it with like either attention or

00:42:00 --> 00:42:06
money or something.

00:42:03 --> 00:42:09
Uh, the theory is much more of that will

00:42:05 --> 00:42:11
happen if we make content creation

00:42:08 --> 00:42:12
easier and don't break the like kind of

00:42:10 --> 00:42:14
undamental way that you can get some

00:42:11 --> 00:42:16
kind of reward for doing so.

00:42:13 --> 00:42:19
>> So, for the dumbest example of Sora

00:42:15 --> 00:42:21
since we've been talking about that.

00:42:18 --> 00:42:22
>> It's much easier to create a funny video

00:42:20 --> 00:42:23
than it's ever been before.

00:42:21 --> 00:42:24
>> Yeah.

00:42:22 --> 00:42:26
>> Um

00:42:23 --> 00:42:27
aybe at some point you'll get a rev

00:42:25 --> 00:42:29
share for doing so.

00:42:26 --> 00:42:31
>> For now, you get like internet likes

00:42:28 --> 00:42:31
which are still very motivating to some

00:42:30 --> 00:42:31
people.

00:42:30 --> 00:42:35
>> Yeah.

00:42:30 --> 00:42:37
>> Um but people are creating tons more

00:42:34 --> 00:42:39
than they ever created before in this

00:42:36 --> 00:42:39
con in any other kind of like video app.

00:42:38 --> 00:42:44
>> Yeah.

00:42:38 --> 00:42:47
>> So, but are that the end of text?

00:42:43 --> 00:42:49
I don't think so. Like people are also

00:42:46 --> 00:42:52
>> are human generated texts.

00:42:48 --> 00:42:53
>> Uh human generated will turn out to be

00:42:51 --> 00:42:55
like you have to

00:42:52 --> 00:42:56
>> you have you have to verify like what

00:42:54 --> 00:42:59
percent? Yeah. Is it like fully

00:42:56 --> 00:43:01
handcrafted? Was it like tool aated?

00:42:58 --> 00:43:03
>> Yeah. I see. Yeah. Probably nothing that

00:43:00 --> 00:43:04
oolated. Yeah.

00:43:02 --> 00:43:06
>> Interesting.

00:43:03 --> 00:43:07
>> We've uh we've given meta their flowers.

00:43:05 --> 00:43:09
So now I can feel like I can ask you

00:43:06 --> 00:43:13
this question which is the great talent

00:43:08 --> 00:43:16
war hall of 2025 has has has taken place

00:43:12 --> 00:43:18
and open AAI remains intact. Team is

00:43:15 --> 00:43:20
trong as ever shipping incredible

00:43:17 --> 00:43:21
products.

00:43:19 --> 00:43:23
>> What can you say about what what's it

00:43:20 --> 00:43:24
been like this year in terms of just

00:43:22 --> 00:43:26
everything that's that's been going on.

00:43:23 --> 00:43:28
I mean, every year has been exhausting

00:43:25 --> 00:43:31
since we like uh

00:43:27 --> 00:43:31
>> I

00:43:31 --> 00:43:37
remember when

00:43:34 --> 00:43:39
the first few years of running open air

00:43:36 --> 00:43:41
were like the most fun professional

00:43:38 --> 00:43:43
years of my life by far. It was like

00:43:40 --> 00:43:44
unbelievable, you know, before you

00:43:42 --> 00:43:46
released the product.

00:43:43 --> 00:43:48
>> Yeah. Yeah. Running a research lab with

00:43:45 --> 00:43:50
e smartest people doing this like

00:43:47 --> 00:43:53
amazing like historical work and I got

00:43:49 --> 00:43:56
o watch it and that was very cool.

00:43:52 --> 00:43:58
And then we launched HGBT and everybody

00:43:55 --> 00:44:00
was like congratulating me and I was

00:43:57 --> 00:44:03
like

00:43:59 --> 00:44:07
my life is about to get completely

00:44:02 --> 00:44:09
ransacked. And of course it has. Uh and

00:44:06 --> 00:44:10
but it it feels like it's just been

00:44:08 --> 00:44:14
crazy all the way through. It's been

00:44:09 --> 00:44:16
almost 3 years now. And

00:44:13 --> 00:44:18
I think it does get a little bit crazier

00:44:15 --> 00:44:20
over time, but I'm like more used to it.

00:44:18 --> 00:44:22
So it feels about the same.

00:44:19 --> 00:44:23
>> Yeah.

00:44:21 --> 00:44:25
We've talked a lot about Open Eye, but

00:44:22 --> 00:44:27
you also have a few other companies,

00:44:24 --> 00:44:30
Retro Biosciences and Longevity and

00:44:26 --> 00:44:32
energy companies like Helon and Ollo.

00:44:29 --> 00:44:34
Did you have a a master plan, you know,

00:44:31 --> 00:44:37
a decade ago to sort of make some big

00:44:33 --> 00:44:38
bets across these major spaces or how

00:44:36 --> 00:44:41
do we think about the Sam Alman arc

00:44:37 --> 00:44:44
in this way? No, I just wanted to like

00:44:40 --> 00:44:48
use my capital to fund stuff I believed

00:44:43 --> 00:44:51
in. Like I I didn't it it Yeah, it felt

00:44:47 --> 00:44:53
like a good use of capital like and more

00:44:50 --> 00:44:54
fun or more interesting to me and

00:44:52 --> 00:44:56
certainly like a better return than like

00:44:53 --> 00:44:57
buying a bunch of art or something.

00:44:55 --> 00:44:58
>> Yeah.

00:44:56 --> 00:45:00
>> What about the quote unquote human

00:44:57 --> 00:45:04
algorithm do you think AIs of the future

00:44:59 --> 00:45:04
will find most fascinating?

00:45:05 --> 00:45:10
I mean kind of the whole I would bet the

00:45:07 --> 00:45:13
whole thing like the whole my intuition

00:45:09 --> 00:45:15
is that like AI will be fascinated by

00:45:12 --> 00:45:18
all other

00:45:14 --> 00:45:19
things to study and observe and you know

00:45:17 --> 00:45:19
like

00:45:18 --> 00:45:22
>> Yeah.

00:45:18 --> 00:45:24
In in closing, I I love this

00:45:21 --> 00:45:28
insight you you had um where you talked

00:45:23 --> 00:45:29
about how you know the the next open a

00:45:27 --> 00:45:31
mistake investors make is pattern

00:45:28 --> 00:45:32
matching off previous breakthroughs and

00:45:30 --> 00:45:33
just trying to find oh what's the what's

00:45:31 --> 00:45:36
the next Facebook or what what's the

00:45:32 --> 00:45:37
next open AI and that the next you know

00:45:35 --> 00:45:40
potentially trillion dollar company

00:45:36 --> 00:45:42
won't look exactly like open AI it will

00:45:39 --> 00:45:44
be built off of the breakthrough that

00:45:41 --> 00:45:46
open AI has helped you know emerge which

00:45:43 --> 00:45:47
is you know near free AGI at scale in

00:45:45 --> 00:45:49
the same way that open AI leveraged pre

00:45:46 --> 00:45:50
vious breakthroughs and so for

00:45:48 --> 00:45:52
founders and investor ers and people

00:45:50 --> 00:45:54
trying to ascertain the future listening

00:45:51 --> 00:45:56
to this. How do you think about a world

00:45:53 --> 00:45:57
in which there is open achieves this

00:45:55 --> 00:46:00
mission? There is near near free AGI.

00:45:56 --> 00:46:02
What types of opportunities might emerge

00:45:59 --> 00:46:04
for for company building or investing

00:46:01 --> 00:46:05
that you're potentially excited about as

00:46:03 --> 00:46:08
you put your investor hat on or company

00:46:04 --> 00:46:10
building hat on?

00:46:07 --> 00:46:11
I I I have no idea. I mean, I have like

00:46:09 --> 00:46:13
guesses, but they're like they're

00:46:10 --> 00:46:14
I have learned

00:46:12 --> 00:46:16
>> you're always wrong.

00:46:13 --> 00:46:19
>> You've learned you're always wrong. I've

00:46:15 --> 00:46:23
learned deep humility on this point. Um,

00:46:18 --> 00:46:25
I think the the only like

00:46:22 --> 00:46:28
I think if you try to like armchair

00:46:24 --> 00:46:30
quarterback it, you sort of say these

00:46:27 --> 00:46:31
things that sound smart, but they're

00:46:29 --> 00:46:34
pretty much what everybody else is

00:46:30 --> 00:46:36
aying, and it's like really hard to get

00:46:33 --> 00:46:41
he right kind of conviction. The only

00:46:35 --> 00:46:43
way I know how to do this is to like be

00:46:40 --> 00:46:44
deeply in the trenches exploring ideas,

00:46:42 --> 00:46:46
like

00:46:43 --> 00:46:47
talking to a lot of people, and I don't

00:46:45 --> 00:46:49
have time to do that anymore. Yeah,

00:46:46 --> 00:46:51
>> I only get to think about one thing now.

00:46:48 --> 00:46:54
>> So I I would just be like repeating

00:46:50 --> 00:46:58
other people's or saying the obvious

00:46:53 --> 00:46:58
things but

00:46:57 --> 00:47:01
I think it's a very important like if

00:46:59 --> 00:47:04
you are an investor or a founder I think

00:47:00 --> 00:47:07
this is the most important question and

00:47:03 --> 00:47:09
you don't you you figure it out by like

00:47:06 --> 00:47:10
building stuff and playing with

00:47:08 --> 00:47:14
technology and talking to people and

00:47:09 --> 00:47:16
being out in the world. I have been

00:47:13 --> 00:47:19
always

00:47:16 --> 00:47:20
enormously disappointed by the

00:47:18 --> 00:47:22
willingness of investors to back this

00:47:20 --> 00:47:24
kind of stuff even though it's always a

00:47:21 --> 00:47:27
thing that works. You all have done a

00:47:23 --> 00:47:29
lot of it but most firms just kind of

00:47:26 --> 00:47:32
chase whatever the current

00:47:28 --> 00:47:35
>> thing is and so do most founders.

00:47:31 --> 00:47:38
>> Uh so I hope people will try to go

00:47:34 --> 00:47:40
>> yeah we talk about how you know silly

00:47:37 --> 00:47:41
ou know fiveyear plans can be in a

00:47:39 --> 00:47:42
world that's constantly changing. It

00:47:40 --> 00:47:44
feels like when I was asking about your

00:47:41 --> 00:47:46
master plan, you know, your your career

00:47:43 --> 00:47:47
arc has been following your curiosity,

00:47:45 --> 00:47:49
staying, you know, super close to the

00:47:46 --> 00:47:51
the smartest people, uh, the super

00:47:48 --> 00:47:52
close to the technology and just

00:47:50 --> 00:47:56
identifying opportunities and kind of an

00:47:52 --> 00:47:59
organic and incremental way from there.

00:47:55 --> 00:48:01
>> Uh, yes, but AI was always a thing I

00:47:58 --> 00:48:03
wanted to do. I went to I I studied AI.

00:48:00 --> 00:48:04
I worked in the AI lab between my

00:48:02 --> 00:48:05
freshman and sophomore year of college.

00:48:04 --> 00:48:07
>> Yeah.

00:48:04 --> 00:48:11
>> It wasn't working all the time. So, I'm

00:48:06 --> 00:48:13
like not I'm not like enough of a

00:48:10 --> 00:48:14
I I don't want to like work on something

00:48:12 --> 00:48:15
that's totally not working. It was clear

00:48:13 --> 00:48:20
to me at the time AI was totally not

00:48:14 --> 00:48:21
working. Um but

00:48:19 --> 00:48:24
I've been an AI nerd since I was a kid.

00:48:20 --> 00:48:27
Like this

00:48:23 --> 00:48:29
>> so amazing how it, you know, you got

00:48:26 --> 00:48:31
enough GPUs, got enough data, and the

00:48:28 --> 00:48:33
lights came on.

00:48:30 --> 00:48:35
>> It was such a hated like people were

00:48:32 --> 00:48:37
>> man, when we started like

00:48:34 --> 00:48:39
>> figuring that out,

00:48:36 --> 00:48:41
>> people were just like absolutely not.

00:48:38 --> 00:48:43
the the the field hated it so much.

00:48:40 --> 00:48:47
>> Investors hated it, too.

00:48:42 --> 00:48:49
>> It's not It's not the

00:48:46 --> 00:48:50
>> It's somehow not an appealing answer to

00:48:48 --> 00:48:52
the problem.

00:48:49 --> 00:48:54
>> Yeah, it's a bitter lesson.

00:48:51 --> 00:48:56
>> Yeah. Well, the rest is history and

00:48:54 --> 00:48:58
we're perhaps let's let's wrap on that.

00:48:55 --> 00:48:59
We're lucky to to to be partners along

00:48:57 --> 00:49:00
for the ride. Sam, thanks so much for

00:48:58 --> 00:49:01
coming on the podcast.

00:48:59 --> 00:49:04
>> Thanks very much.

00:49:00 --> 00:49:04
>> Thank you.

00:49:04 --> 00:49:08
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
