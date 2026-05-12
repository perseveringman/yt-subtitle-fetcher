---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "TZm2bow1ytI"
title: "The Secret to Building AI-Powered Tools"
video_url: "https://www.youtube.com/watch?v=TZm2bow1ytI"
thumbnail_url: "https://i.ytimg.com/vi/TZm2bow1ytI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=TZm2bow1ytI"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2023-05-18T15:57:37.000Z"
upload_date: "2023-05-18"
duration_seconds: 526
duration_human: "8:46"
view_count: 2459
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:05:39.874Z"
---

# The Secret to Building AI-Powered Tools

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=TZm2bow1ytI
- video_id: TZm2bow1ytI
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2023-05-18T15:57:37.000Z
- upload_date: 2023-05-18
- duration: 8:46
- view_count: 2459
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Beyang Liu, Co-founder and CTO at Sourcegraph, explains the challenges of large language models and delves into the realm of code-building tools for the evolving landscape of AI integration.

Topics Covered:
00:00 - Introduction
00:43 - Large language models and hallucinations
01:43 - Providing context to models
03:26 - Models, security, and privacy
05:22 - Cost of models and pricing schemes 
06:27 - The Bing price update

Resources:
* Find Beyang Liu on Twitter: https://twitter.com/beyang
* Learn more about Sourcegraph: https://sourcegraph.com/

Stay Updated: 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://twitter.com/stephsmithio 

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
2022 was a breakout year for AI

00:00:04 --> 00:00:10
in fact many have even claimed that

00:00:06 --> 00:00:13
Chachi BT is the fastest growing app of

00:00:09 --> 00:00:15
all time so with so much opportunity on

00:00:12 --> 00:00:17
the table AI is the topic of

00:00:14 --> 00:00:19
conversation in every boardroom as CEOs

00:00:16 --> 00:00:21
figure out how to best integrate this

00:00:18 --> 00:00:23
new superpower but they're also asking

00:00:20 --> 00:00:26
really important questions around data

00:00:22 --> 00:00:28
privacy competition cost accuracy and

00:00:25 --> 00:00:31
also doing this all really quickly

00:00:27 --> 00:00:32
because just like your customers really

00:00:30 --> 00:00:35
don't care if your product is built with

00:00:31 --> 00:00:37
angular or react or runs on AWS or

00:00:34 --> 00:00:39
Heroku there will be a whole host of

00:00:36 --> 00:00:42
ways that companies differentiate as

00:00:38 --> 00:00:44
they look to cleverly embed Ai and here

00:00:41 --> 00:00:46
is how sourcegraph is thinking about

00:00:43 --> 00:00:48
hat sourcecraft today it's this kind of

00:00:45 --> 00:00:50
like general purpose source code

00:00:47 --> 00:00:51
understanding engine as a reminder the

00:00:49 --> 00:00:53
content here is for informational

00:00:50 --> 00:00:56
purposes only should not be taken as

00:00:52 --> 00:00:58
legal business tax or investment advice

00:00:55 --> 00:01:00
or be used to evaluate any investment or

00:00:57 --> 00:01:02
security and is not directed at any

00:00:59 --> 00:01:05
investors or potential investors in any

00:01:01 --> 00:01:08
accz fund for more details please see AC

00:01:04 --> 00:01:11
16z.com disclosures so our first kind of

00:01:07 --> 00:01:13
major push I would say is this editor

00:01:10 --> 00:01:15
extension called Kodi and essentially

00:01:12 --> 00:01:18
what it does is

00:01:14 --> 00:01:19
um it's a it's a chat based interface

00:01:17 --> 00:01:21
um but also allows you to like search

00:01:18 --> 00:01:23
for stuff and context in the code and

00:01:20 --> 00:01:25
the idea is that like we wanted

00:01:22 --> 00:01:27
something in our editors uh that took

00:01:24 --> 00:01:29
full advantage of the power of language

00:01:26 --> 00:01:31
models but also

00:01:28 --> 00:01:33
um kind of addressed a lot of the

00:01:30 --> 00:01:35
challenge that people have encountered

00:01:32 --> 00:01:37
with uh large language models you know

00:01:34 --> 00:01:38
namely the tendency to hallucinate uh

00:01:36 --> 00:01:40
facts when they don't really know the

00:01:37 --> 00:01:41
answer

00:01:39 --> 00:01:43
um and so that's a place where we

00:01:40 --> 00:01:44
thought we could be uniquely positioned

00:01:42 --> 00:01:46
to help because

00:01:43 --> 00:01:47
um Source graph you know with all the

00:01:45 --> 00:01:50
pieces of context that we have around

00:01:46 --> 00:01:53
searching for code and you know Finding

00:01:49 --> 00:01:55
references and verifying things actually

00:01:52 --> 00:01:57
exist we are kind of like the perfect

00:01:54 --> 00:02:00
fact Checker if you will for the

00:01:56 --> 00:02:01
language model and perfect like relevant

00:01:59 --> 00:02:03
context provider to the language model

00:02:00 --> 00:02:04
but

00:02:02 --> 00:02:06
is there

00:02:03 --> 00:02:09
are tools that help you to build code

00:02:05 --> 00:02:10
using these language models we'll just

00:02:08 --> 00:02:12
hrow out a couple like a lot of people

00:02:09 --> 00:02:14
are familiar with GitHub copilot a lot

00:02:11 --> 00:02:17
of people are familiar with what replit

00:02:13 --> 00:02:19
is doing with Ghostwriter but maybe you

00:02:16 --> 00:02:21
could actually speak to this idea of

00:02:18 --> 00:02:23
etching the right information like how

00:02:20 --> 00:02:25
ould something like a co-pilot do that

00:02:22 --> 00:02:27
currently they don't do q and AIDS it's

00:02:24 --> 00:02:29
purely kind of like autocomplete driven

00:02:26 --> 00:02:31
and the context that they fetch to do

00:02:28 --> 00:02:33
that auto completion is kind of like

00:02:30 --> 00:02:35
recent files that you've opened in your

00:02:32 --> 00:02:37
editor so it's kind of like this very

00:02:34 --> 00:02:38
local context which works amazingly well

00:02:36 --> 00:02:40
I mean like huge credit of that team

00:02:37 --> 00:02:42
they've built an awesome user experience

00:02:39 --> 00:02:45
we think that the next evolution of that

00:02:41 --> 00:02:47
is is is providing more relevant context

00:02:44 --> 00:02:49
and essentially emulating like what a

00:02:46 --> 00:02:50
human kind of does yeah uh when you're

00:02:48 --> 00:02:52
trying to write code right like you as a

00:02:49 --> 00:02:54
human

00:02:51 --> 00:02:56
um you might like go back through some

00:02:53 --> 00:02:57
recent history in your Editor to see

00:02:55 --> 00:02:58
like okay how does that code work how

00:02:56 --> 00:03:00
did that code work and use that as like

00:02:57 --> 00:03:01
a pattern matching reference point for

00:02:59 --> 00:03:03
the thing that you're currently writing

00:03:00 --> 00:03:04
but more often than not I think you're

00:03:02 --> 00:03:06
doing stuff like you know go to

00:03:03 --> 00:03:08
definition find references you know let

00:03:05 --> 00:03:10
me see a couple of examples of how to

00:03:07 --> 00:03:13
use this particular API that just I just

00:03:09 --> 00:03:15
imported right and I think that that's

00:03:12 --> 00:03:17
going to lead to much better results I

00:03:14 --> 00:03:19
think it's also going to lead to much

00:03:16 --> 00:03:21
more kind of introspectable results so

00:03:18 --> 00:03:23
getting Beyond this like oh elements are

00:03:20 --> 00:03:24
magic how do they work is it AGI you

00:03:22 --> 00:03:26
know what not it's like Cody will

00:03:23 --> 00:03:27
actually tell you like hey I read these

00:03:25 --> 00:03:30
files and these are the files I'm using

00:03:26 --> 00:03:32
to generate an answer and if it

00:03:29 --> 00:03:34
completely uh you know returns a lie or

00:03:31 --> 00:03:37
is wrong you can usually tell by looking

00:03:33 --> 00:03:38
at the context uh that it read like oh

00:03:36 --> 00:03:39
like that why are you reading that five

00:03:37 --> 00:03:42
code Cody that's dumb and you can like

00:03:38 --> 00:03:44
thumbs down that and and we'll take that

00:03:41 --> 00:03:46
as as like a reference point to to

00:03:43 --> 00:03:48
improve the product later a lot of these

00:03:45 --> 00:03:50
companies that are integrating AI are

00:03:48 --> 00:03:52
building off of just a few models right

00:03:49 --> 00:03:55
A lot of people are familiar with open

00:03:51 --> 00:03:56
ai's API that came out recently

00:03:54 --> 00:03:59
um but there's also that very

00:03:55 --> 00:04:01
interesting Dynamic that a lot of the

00:03:58 --> 00:04:03
same companies that may even consider

00:04:00 --> 00:04:06
themselves competitors are using similar

00:04:02 --> 00:04:07
models and so how do do you think about

00:04:05 --> 00:04:09
hat and also there's this kind of

00:04:06 --> 00:04:11
layered question as it relates to

00:04:08 --> 00:04:14
security and privacy because depending

00:04:10 --> 00:04:16
on the company that you are your code is

00:04:13 --> 00:04:19
actually potentially somewhat all the

00:04:15 --> 00:04:20
way to extremely proprietary right if

00:04:18 --> 00:04:22
you're talking about like a self-driving

00:04:19 --> 00:04:24
car company it's especially pertinent to

00:04:21 --> 00:04:26
us because we have a lot of uh you know

00:04:23 --> 00:04:30
Enterprise customers that are very

00:04:25 --> 00:04:31
Security in privacy uh sensitive to the

00:04:29 --> 00:04:34
point where you know one of the reasons

00:04:30 --> 00:04:37
we made it self-hostable is because we

00:04:33 --> 00:04:38
wanted to enable companies that uh

00:04:36 --> 00:04:40
didn't want to put their code bases in

00:04:37 --> 00:04:44
the cloud to still have like awesome

00:04:39 --> 00:04:46
code understanding and so the the spaces

00:04:43 --> 00:04:49
is kind of like Fast evolving and our

00:04:45 --> 00:04:50
mentality is like look we have a wide

00:04:48 --> 00:04:53
range of customers from like very

00:04:49 --> 00:04:54
conservative large Enterprises to like

00:04:52 --> 00:04:57
fast-moving startups that have different

00:04:53 --> 00:04:59
risk and security profiles the language

00:04:56 --> 00:05:02
model in in our like overall

00:04:58 --> 00:05:03
architecture is just one component and

00:05:01 --> 00:05:05
so we want to make it possible to kind

00:05:02 --> 00:05:07
of like bring your own language model uh

00:05:04 --> 00:05:09
to the table so you're basically saying

00:05:06 --> 00:05:11
that you give them the selection or the

00:05:08 --> 00:05:13
option am I understanding that correctly

00:05:10 --> 00:05:16
or uh we'll give you the option so right

00:05:12 --> 00:05:18
now yeah you can use uh Claude which is

00:05:15 --> 00:05:21
anthropics uh kind of Flagship model you

00:05:17 --> 00:05:23
can use Chachi BT which is kind of the

00:05:20 --> 00:05:25
open AI model and we're looking to

00:05:22 --> 00:05:26
integrate additional models too and

00:05:24 --> 00:05:28
there's also kind of like different

00:05:25 --> 00:05:30
models that we plug in in different

00:05:27 --> 00:05:31
pieces of code right so there's kind of

00:05:29 --> 00:05:33
like the chat based models which are

00:05:30 --> 00:05:35
often like the largest ones but there's

00:05:33 --> 00:05:37
also things like the embeddings model

00:05:34 --> 00:05:39
but I think our our mentality is just

00:05:36 --> 00:05:40
like the language model aspect of this

00:05:38 --> 00:05:42
we want to make as kind of like

00:05:39 --> 00:05:44
pluggable as possible that's amazing

00:05:41 --> 00:05:46
because something that that also relates

00:05:43 --> 00:05:48
to is cost right like each of these

00:05:45 --> 00:05:51
different models has a different cost I

00:05:47 --> 00:05:54
think a couple weeks ago being like 5x

00:05:50 --> 00:05:56
their pricing overnight right like you

00:05:53 --> 00:05:58
have a dependency as well both Source

00:05:55 --> 00:05:59
graph but also like that ends up

00:05:57 --> 00:06:02
filtering down to your your customers

00:05:58 --> 00:06:03
and so every one of these models I mean

00:06:01 --> 00:06:04
I think we're still in the early Innings

00:06:02 --> 00:06:06
and there's going to be so many more

00:06:03 --> 00:06:07
developed and each one will to your

00:06:05 --> 00:06:09
point I'll have a different security

00:06:06 --> 00:06:11
posture it'll have different pricing

00:06:08 --> 00:06:13
scheme it'll probably you know there

00:06:10 --> 00:06:16
will be a range in terms of its efficacy

00:06:12 --> 00:06:18
or specialty yeah you know it never

00:06:15 --> 00:06:19
dawned on me that actually you know you

00:06:17 --> 00:06:22
could offer

00:06:18 --> 00:06:24
the access across across the board to

00:06:21 --> 00:06:27
all these models but also kind of relay

00:06:23 --> 00:06:29
the transparent pros and cons to the

00:06:26 --> 00:06:31
customer base that's exactly how we're

00:06:28 --> 00:06:32
thinking about it for us it's kind of

00:06:30 --> 00:06:34
like there's so much Innovation

00:06:31 --> 00:06:37
happening in that space we don't want to

00:06:33 --> 00:06:39
be kind of tied to any one provider and

00:06:36 --> 00:06:41
so I think a lot of the value that we

00:06:38 --> 00:06:43
can provide is really about combining

00:06:40 --> 00:06:44
the language model with the pieces of

00:06:42 --> 00:06:47
context and the structured understanding

00:06:43 --> 00:06:49
of code that we have and it's funny that

00:06:46 --> 00:06:51
you mentioned the kind of Bing price

00:06:48 --> 00:06:53
hike I thought that was like a big proof

00:06:50 --> 00:06:55
point and people notice when chat GPT

00:06:52 --> 00:06:57
first came out

00:06:54 --> 00:06:59
um I think a lot of people said like hey

00:06:56 --> 00:07:00
ou know this kind of replaces search

00:06:58 --> 00:07:02
engines right like I could just chat

00:06:59 --> 00:07:03
with this thing and it would tell me the

00:07:01 --> 00:07:05
answer instead of me having to go and

00:07:02 --> 00:07:07
like click through a bunch of different

00:07:04 --> 00:07:09
results uh and figure out the answer

00:07:06 --> 00:07:11
myself but then as people started to use

00:07:09 --> 00:07:14
language models a bit more they started

00:07:10 --> 00:07:16
to run into more hallucinations and I

00:07:13 --> 00:07:18
think it was like the release of being

00:07:15 --> 00:07:21
where people finally realized like like

00:07:17 --> 00:07:24
being released the integrated Chachi BT

00:07:20 --> 00:07:26
or gpd4 you know one of those like

00:07:23 --> 00:07:28
awesome like open AI models in but they

00:07:25 --> 00:07:30
didn't just like ship a white label

00:07:27 --> 00:07:32
Chachi BT they combined that with Bing

00:07:29 --> 00:07:35
search on the back end and I think

00:07:31 --> 00:07:37
combining kind of the language model as

00:07:34 --> 00:07:38
ort of like the the reasoning engine

00:07:36 --> 00:07:40
but you still need kind of like an

00:07:37 --> 00:07:42
informational retrieval engine to make

00:07:39 --> 00:07:45
that truly powerful and the Unison that

00:07:41 --> 00:07:47
really is valuable and that's maybe

00:07:44 --> 00:07:49
I'm speculating here but like that maybe

00:07:46 --> 00:07:52
had something to do with the being price

00:07:48 --> 00:07:54
hike like it it is not true that

00:07:51 --> 00:07:56
language models make search engines

00:07:53 --> 00:07:57
unnecessary if anything they make the

00:07:55 --> 00:07:59
search engines more valuable because now

00:07:56 --> 00:08:01
all that data that you can search

00:07:58 --> 00:08:04
becomes like 10x more powerful because

00:08:00 --> 00:08:05
you can use that to you know get to get

00:08:03 --> 00:08:07
o your answer with like you know

00:08:04 --> 00:08:08
one-tenth the effort or in one tenth of

00:08:06 --> 00:08:09
time

00:08:07 --> 00:08:12
if you like this segment you're gonna

00:08:08 --> 00:08:14
love our next video with

00:08:11 --> 00:08:16
critically about UI

00:08:13 --> 00:08:17
how to personalize their new AI

00:08:15 --> 00:08:20
features you're not going to want to

00:08:16 --> 00:08:22
miss this and if you like this topic we

00:08:19 --> 00:08:25
go a lot deeper on the a16z podcast

00:08:21 --> 00:08:28
which you can find on Apple Spotify or

00:08:24 --> 00:08:28
wherever you get your podcasts

00:08:32 --> 00:08:44
[Music]

00:08:44 --> 00:08:48
foreign

<!-- YOUTUBE_TRANSCRIPT_END -->
