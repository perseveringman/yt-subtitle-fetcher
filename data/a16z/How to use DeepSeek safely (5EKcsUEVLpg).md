---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "5EKcsUEVLpg"
title: "How to use DeepSeek safely"
video_url: "https://www.youtube.com/watch?v=5EKcsUEVLpg"
thumbnail_url: "https://i.ytimg.com/vi/5EKcsUEVLpg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=5EKcsUEVLpg"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-02-28T15:00:08.000Z"
upload_date: "2025-02-28"
duration_seconds: 928
duration_human: "15:28"
view_count: 1866
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:58:11.393Z"
---

# How to use DeepSeek safely

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=5EKcsUEVLpg
- video_id: 5EKcsUEVLpg
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-02-28T15:00:08.000Z
- upload_date: 2025-02-28
- duration: 15:28
- view_count: 1866
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Ian Webster (Promptfoo) on DeepSeek’s Security Vulnerabilities

Ian Webster, founder of Promptfoo, joins a16z partner Joel de la Garza to break down the security risks embedded within DeepSeek’s reasoning model. As generative AI systems become more powerful, they also become more susceptible to attack. Ian explains how vulnerabilities like jailbreaks, backdoors, and model censorship can be exploited—and what developers and enterprises can do to defend against them. He also shares insights into how AI security testing is evolving, why transparency in model training matters, and what lessons companies can take from past security breaches to safeguard the next wave of AI applications.

Learn more: 

What Are the Security Risks of Deploying DeepSeek-R1?
- https://www.promptfoo.dev/blog/deepseek-redteam/

Follow everybody on social media:
Ian Webster - https://x.com/iwebst
Joel de la Garza - https://www.linkedin.com/in/3448827723723234/

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

01:11 - DeepSeek: The Golden Age of AI or an existential threat?
02:18 - Red team testing, prompt injections, jail brakes - adversarial techniques
02:48 - Speech limitations
04:14 - Maturity and complexity of DeepSeek vs. other models
05:36 - Anything you build on top of DeepSeek will be subject to its insecurities
06:12 - Hosted model from China vs. open source/running locally
07:46 - DeepSeek benchmark on politically sensitive topics
08:54 - Western censorship vs. DeepSeek censorship
12:38 - How can we use it safely? Protecting infrastructure
14:09 - Wait for a more trusted source to run locally?

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:04 --> 00:00:09
the excitement around it is well

00:00:06 --> 00:00:10
warranted but I think in an Enterprise

00:00:08 --> 00:00:13
or infrastructure context I would

00:00:09 --> 00:00:15
probably wait for something that is more

00:00:12 --> 00:00:17
stable and then doesn't have these

00:00:14 --> 00:00:19
questions hanging over it that's my take

00:00:16 --> 00:00:22
if I had to deploy deep seek I would

00:00:18 --> 00:00:25
probably focus on use cases that were

00:00:21 --> 00:00:28
not end user facing Because deep seek is

00:00:24 --> 00:00:30
like especially susceptible to basic

00:00:27 --> 00:00:31
jailbreaks and it would be a real pain

00:00:29 --> 00:00:34
to have to hard in that if you're

00:00:30 --> 00:00:35
putting this out to users or the public

00:00:33 --> 00:00:39
or that kind of

00:00:34 --> 00:00:39
[Music]

00:00:39 --> 00:00:45
thing well hey thanks thanks for joining

00:00:42 --> 00:00:47
us you know a lot of a lot of the news

00:00:44 --> 00:00:49
in the last two weeks has been deep seek

00:00:46 --> 00:00:51
and sort of these new reasoning models

00:00:48 --> 00:00:54
that have been open sourced coming from

00:00:50 --> 00:00:55
China obviously there's been the the

00:00:53 --> 00:00:56
bullish side of the case which has been

00:00:54 --> 00:00:58
that this is changing everything the

00:00:55 --> 00:01:00
conomics are different this is the

00:00:57 --> 00:01:02
Golden Age of apps the other side has

00:00:59 --> 00:01:03
been this is the beginning of the end

00:01:01 --> 00:01:06
China's ascendant they're taking all our

00:01:03 --> 00:01:08
data this is horrible you had a great

00:01:05 --> 00:01:09
blog post on this taking a look at Deep

00:01:07 --> 00:01:11
seek would love to maybe get your

00:01:08 --> 00:01:13
thoughts and talk a little bit about

00:01:10 --> 00:01:15
kind of how that's coming together so

00:01:12 --> 00:01:17
everyone's losing their mind about deep

00:01:14 --> 00:01:19
seek I noticed that too they're kind of

00:01:16 --> 00:01:21
three things that that are notable about

00:01:18 --> 00:01:23
it right it's it's open source it's

00:01:20 --> 00:01:25
reasoning and it's from China and I

00:01:23 --> 00:01:27
think the the fact that it's open source

00:01:24 --> 00:01:30
and the fact that they have found this

00:01:26 --> 00:01:33
new tech technique or you know kind of

00:01:29 --> 00:01:36
Pro proved it out is uh is is great it's

00:01:32 --> 00:01:38
a great story for everyone in in the

00:01:35 --> 00:01:40
world um in terms of what is possible

00:01:37 --> 00:01:43
with open source and what the future of

00:01:39 --> 00:01:45
these models could look like um the

00:01:42 --> 00:01:47
interesting part is that the origins of

00:01:44 --> 00:01:49
of the company and the fact that um

00:01:46 --> 00:01:51
the Chinese government has a ton of

00:01:48 --> 00:01:55
influence over the models that are

00:01:50 --> 00:01:57
developed in China so the the the post

00:01:54 --> 00:01:59
or the research that that we did was

00:01:56 --> 00:02:02
focused on um you know characterizing

00:01:59 --> 00:02:05
that influence seeing how deep it went

00:02:01 --> 00:02:08
and also kind of testing pushing the

00:02:04 --> 00:02:11
limits of the model in terms of uh just

00:02:07 --> 00:02:14
red teaming it and seeing what sorts of

00:02:10 --> 00:02:16
adversarial techniques it responds to or

00:02:13 --> 00:02:18
doesn't respond to and by adversarial

00:02:15 --> 00:02:21
techniques what do you what do you mean

00:02:17 --> 00:02:25
exactly we're really focused on things

00:02:20 --> 00:02:28
like just your your run-of-the-mill um

00:02:24 --> 00:02:31
uh prompt injections jailbreaks that

00:02:27 --> 00:02:34
kind of thing um because those are often

00:02:30 --> 00:02:36
the the gateway to to messing around

00:02:33 --> 00:02:38
with other stuff right like once you

00:02:35 --> 00:02:40
punch a hole in the defenses with

00:02:37 --> 00:02:42
something like a jailbreak if it's part

00:02:39 --> 00:02:44
of a larger system or architecture like

00:02:41 --> 00:02:47
a rag or agent that would give an

00:02:43 --> 00:02:49
attacker a lot of room to to to Pivot

00:02:46 --> 00:02:50
around and and do other things within

00:02:48 --> 00:02:52
that system and they they build a lot of

00:02:49 --> 00:02:54
safety features into these things right

00:02:51 --> 00:02:56
I mean the people who build them right

00:02:53 --> 00:02:59
and it seemed like it had a very

00:02:55 --> 00:03:01
sophisticated layer of of of speech

00:02:58 --> 00:03:05
limitations yeah so there were there are

00:03:01 --> 00:03:07
two parts to it um for deep seek

00:03:04 --> 00:03:11
specifically there was the the part that

00:03:06 --> 00:03:13
limited speech about uh politically

00:03:10 --> 00:03:15
sensitive topics in China so this is

00:03:12 --> 00:03:18
tuff like you know Taiwan or tianan

00:03:14 --> 00:03:21
Square that kind of thing um and it's

00:03:17 --> 00:03:25
pretty clear that that was basically a

00:03:21 --> 00:03:27
separate system from the typical guard

00:03:24 --> 00:03:29
rails that you see on models like this

00:03:26 --> 00:03:32
o what what we did is we you know we

00:03:28 --> 00:03:35
tried to characterize of these on the

00:03:31 --> 00:03:37
political sensitivity side um and it

00:03:34 --> 00:03:39
doesn't take a like a researcher to

00:03:36 --> 00:03:41
figure this out if you ask it about tan

00:03:38 --> 00:03:43
square or whatever it will either give

00:03:40 --> 00:03:47
you a refusal or it will give you like

00:03:42 --> 00:03:49
this long di tribe of of um the the the

00:03:46 --> 00:03:52
CCP Party Line like you know nothing

00:03:48 --> 00:03:54
happened we believe in Harmony in China

00:03:51 --> 00:03:57
nd blah blah blah those very

00:03:53 --> 00:03:59
over-the-top responses I think uh got a

00:03:56 --> 00:04:01
lot of attention because it's just a

00:03:58 --> 00:04:03
very clear instance of

00:04:00 --> 00:04:05
a model being steered or aligned in a

00:04:02 --> 00:04:07
direction that you know is probably

00:04:04 --> 00:04:10
confusing or unfamiliar to to folks in

00:04:06 --> 00:04:11
the US and you know you you you know for

00:04:09 --> 00:04:13
your for your company and I guess

00:04:10 --> 00:04:14
probably as a side project as well you

00:04:12 --> 00:04:17
spent a lot of time breaking these

00:04:13 --> 00:04:19
things I'm curious your estimation of

00:04:16 --> 00:04:22
sort of the the the the maturity and

00:04:18 --> 00:04:24
complexity of the deep seek preventions

00:04:21 --> 00:04:26
versus like what you'd see in something

00:04:23 --> 00:04:29
like llama or some other model the short

00:04:25 --> 00:04:32
answer there is that deep seek has these

00:04:28 --> 00:04:34
very hard limits on things like

00:04:31 --> 00:04:39
politically sensitive speech its other

00:04:33 --> 00:04:42
protections are very weak MH so from a a

00:04:39 --> 00:04:44
jailbreaking perspective it performs a

00:04:41 --> 00:04:47
lot worse than than GPT on our

00:04:43 --> 00:04:49
benchmarks it performs about 20% worse

00:04:46 --> 00:04:52
but that that difference is likely

00:04:49 --> 00:04:55
understated because honestly we we threw

00:04:51 --> 00:04:57
out all the old jail breaks that that

00:04:54 --> 00:04:58
like don't really work well yeah like

00:04:56 --> 00:05:02
qualitatively what what we see is

00:04:57 --> 00:05:06
performance on par with GPT 3.5 which is

00:05:01 --> 00:05:09
to say you know in 2023 when open AI

00:05:05 --> 00:05:11
launched GPT there were uh there were a

00:05:08 --> 00:05:14
bunch of like zero day really simple

00:05:10 --> 00:05:17
jailbreaks and deep seek is essentially

00:05:13 --> 00:05:19
susceptible to all of those gotcha yeah

00:05:16 --> 00:05:20
so I guess the the open AI folks

00:05:18 --> 00:05:22
probably saw a lot of free training data

00:05:20 --> 00:05:24
from people trying to break it and then

00:05:21 --> 00:05:25
improved and so this is sort of the

00:05:23 --> 00:05:28
start of that process for the Deep seek

00:05:24 --> 00:05:31
folks it doesn't seem like deep seek put

00:05:27 --> 00:05:33
much effort into hardening deep seek

00:05:30 --> 00:05:34
yeah um as we saw from The Whiz post

00:05:32 --> 00:05:36
hat the actual infrastructure that the

00:05:33 --> 00:05:39
Deep seek Pro process was run on was

00:05:35 --> 00:05:40
very insecure right I I don't think any

00:05:38 --> 00:05:42
of this stuff was a was a priority

00:05:40 --> 00:05:44
for them so that means that anything

00:05:41 --> 00:05:47
that you build on top of deep seek is

00:05:43 --> 00:05:50
going to be pretty susceptible to to

00:05:46 --> 00:05:52
jailbreaks injections that kind of thing

00:05:49 --> 00:05:54
like going all the way back to just the

00:05:51 --> 00:05:56
textbook um you know copy paste

00:05:53 --> 00:05:59
injections that that we had two years

00:05:55 --> 00:06:03
ago there was lots of panic about the

00:05:59 --> 00:06:05
you know data going to China you can't

00:06:02 --> 00:06:07
rust these things don't touch them

00:06:04 --> 00:06:08
they're going to steal your car right

00:06:06 --> 00:06:10
all sorts of

00:06:07 --> 00:06:12
hyperventilation and maybe maybe it

00:06:09 --> 00:06:14
helps for folks to understand sort of

00:06:11 --> 00:06:16
like the the way most people were

00:06:13 --> 00:06:19
interacting with deep seek was through a

00:06:15 --> 00:06:21
hosted model that was in China but

00:06:18 --> 00:06:23
here's also the option to download and

00:06:21 --> 00:06:25
install this and run this locally in

00:06:22 --> 00:06:28
your own environment because it is open

00:06:24 --> 00:06:29
source MIT license like do you see

00:06:27 --> 00:06:31
profound differences between those two

00:06:28 --> 00:06:33
models did you test both of them out in

00:06:30 --> 00:06:34
the way that they were instantiated like

00:06:32 --> 00:06:38
how do you think about sort of that

00:06:33 --> 00:06:41
security stack yeah so it's it's weird I

00:06:37 --> 00:06:43
saw a lot of chatter online being like

00:06:40 --> 00:06:46
oh well you know the the China hosted

00:06:42 --> 00:06:48
model is is censored but the but the

00:06:45 --> 00:06:51
open source one isn't that was just not

00:06:47 --> 00:06:53
rue from from the tests that that I ran

00:06:50 --> 00:06:55
like if you if you run it locally or if

00:06:52 --> 00:06:57
you use any of these us providers which

00:06:54 --> 00:06:59
ave you know spun it up and and are

00:06:56 --> 00:07:02
serving it um you get you get the same

00:06:58 --> 00:07:03
level of sensor ship um the the only

00:07:01 --> 00:07:05
difference there is that the China

00:07:02 --> 00:07:08
hosted version has an additional guard

00:07:04 --> 00:07:10
rail that looks at output afterwards and

00:07:07 --> 00:07:13
clears it on the client side the bottom

00:07:09 --> 00:07:15
line is you're not even if you use even

00:07:12 --> 00:07:18
if you host your own deep seek or use a

00:07:14 --> 00:07:22
US deep seek um you're still going to

00:07:17 --> 00:07:25
hit uh those those hard guard rails yeah

00:07:21 --> 00:07:27
you know but at least it it means that

00:07:24 --> 00:07:30
you're you're not going to be used in in

00:07:26 --> 00:07:32
training data um for for like tsek

00:07:29 --> 00:07:34
version too or your sensitive data

00:07:31 --> 00:07:37
doesn't go to China yeah um which you

00:07:33 --> 00:07:39
know is a is a big plus for for most

00:07:36 --> 00:07:41
people yeah the interesting thing about

00:07:38 --> 00:07:43
it is like yeah this the sensor of

00:07:40 --> 00:07:44
course any model that comes out of China

00:07:42 --> 00:07:46
is not going to talk about tanaman

00:07:43 --> 00:07:49
square and that's just like the the way

00:07:45 --> 00:07:51
that the world is we did a benchmark on

00:07:48 --> 00:07:55
Chinese politically sensitive topics

00:07:50 --> 00:07:57
that that found that about 85% of those

00:07:54 --> 00:07:59
Topics in our test set were hard

00:07:56 --> 00:08:01
censored so you know that you get the

00:07:58 --> 00:08:04
response that just kind of reiterates

00:08:00 --> 00:08:08
the CCP party line that's going to be

00:08:03 --> 00:08:09
the case for for for for any um you know

00:08:07 --> 00:08:12
version of Deep seek that that you see

00:08:08 --> 00:08:13
out there I think the the part that's

00:08:11 --> 00:08:15
really interesting to me is not the

00:08:12 --> 00:08:18
obvious stuff that that we measured the

00:08:14 --> 00:08:21
interesting part is the is is like the

00:08:17 --> 00:08:23
additional unknowns right so this

00:08:20 --> 00:08:25
censorship was very heavy-handed but

00:08:22 --> 00:08:28
like we don't know what we don't know

00:08:24 --> 00:08:30
about what are the other topics or um

00:08:27 --> 00:08:31
you know are there other areas where

00:08:29 --> 00:08:34
Beijing is putting their thumb on

00:08:30 --> 00:08:37
the scale a little more delicately could

00:08:33 --> 00:08:39
they bake in a a back door like a string

00:08:36 --> 00:08:43
of text that just kind of drops all of

00:08:38 --> 00:08:45
the um prompt guard rails or everything

00:08:42 --> 00:08:47
around that and and gives them what they

00:08:44 --> 00:08:49
want or outputs the context and or so

00:08:46 --> 00:08:52
forth so it's the it's the unknowns that

00:08:48 --> 00:08:54
I think are more um probably more

00:08:51 --> 00:08:56
concerning to you know say Enterprises

00:08:53 --> 00:08:58
that want to bring this in house the

00:08:55 --> 00:09:00
last thing to touch on with this and I'm

00:08:57 --> 00:09:02
curious your take on this is that

00:08:59 --> 00:09:05
obviously L models trained in the west

00:09:01 --> 00:09:07
have their own form of of speech control

00:09:04 --> 00:09:09
right so we we filter out hate speech I

00:09:06 --> 00:09:12
guess the tenan square of America right

00:09:08 --> 00:09:14
as sort of the hate speech stuff um

00:09:11 --> 00:09:16
you've tested those controls on Western

00:09:13 --> 00:09:18
models how do they compare to the

00:09:15 --> 00:09:20
controls that you see on like deep sea

00:09:17 --> 00:09:23
like where's the where's the maturity

00:09:19 --> 00:09:25
level there so here's the crazy thing

00:09:22 --> 00:09:28
like after doing the the Deep seek post

00:09:24 --> 00:09:31
um a natural followup was let's do this

00:09:27 --> 00:09:32
on US models for sensitive us topics

00:09:30 --> 00:09:35
because there there are plenty of things

00:09:32 --> 00:09:38
that you can't or quote unquote cannot

00:09:34 --> 00:09:42
or like you know sensitive topics in the

00:09:37 --> 00:09:46
US um the main difference here is that

00:09:41 --> 00:09:49
uh it's it's less overt in the sense

00:09:45 --> 00:09:51
that you know it it won't like gbt won't

00:09:48 --> 00:09:53
give you a long lecture when when you

00:09:50 --> 00:09:55
ask about something that it doesn't

00:09:52 --> 00:09:58
hink you should it'll just say sorry I

00:09:54 --> 00:10:00
can't answer that um so that that is

00:09:57 --> 00:10:03
perceived differently by by most people

00:09:59 --> 00:10:07
than like you know actually espousing

00:10:03 --> 00:10:10
some some some like opinion or whatever

00:10:06 --> 00:10:11
um which is what deep seek does um so

00:10:09 --> 00:10:12
anyway we we were going to run it on we

00:10:10 --> 00:10:15
re going to run benchmarks on like

00:10:11 --> 00:10:17
sensitive us political topics but as a

00:10:14 --> 00:10:20
baseline I was like let me you know

00:10:16 --> 00:10:23
let's let's do this and just

00:10:19 --> 00:10:26
run the all the flagship US models on

00:10:22 --> 00:10:30
sensitive Chinese topics um and it

00:10:25 --> 00:10:33
urned out that uh a lot of US models

00:10:29 --> 00:10:35
are essentially um you know censored or

00:10:32 --> 00:10:39
at least buttoned down on those topics

00:10:34 --> 00:10:40
as well oh wow um and I know this this

00:10:38 --> 00:10:42
probably not

00:10:39 --> 00:10:46
he the point of this podcast or

00:10:41 --> 00:10:48
whatever but I I thought that that um I

00:10:45 --> 00:10:51
mean that that we we should be asking

00:10:47 --> 00:10:57
ourselves you know what sort of future

00:10:50 --> 00:11:00
do we want um for for Western models um

00:10:56 --> 00:11:03
so the the level of

00:11:00 --> 00:11:05
um I don't I'm not I'm not sure I would

00:11:02 --> 00:11:07
say censorship here because it's just

00:11:04 --> 00:11:08
like basic refusals maybe it is

00:11:06 --> 00:11:11
censorship maybe it isn't mean it is

00:11:07 --> 00:11:13
censorship um sure yeah so I mean the

00:11:10 --> 00:11:17
level of censorship here is like um

00:11:12 --> 00:11:19
anthropic CLA is actually on par with

00:11:16 --> 00:11:21
deep seek oh wow um in terms of the

00:11:18 --> 00:11:23
Chinese related controversial Chinese

00:11:20 --> 00:11:28
content yeah so that's incredible it

00:11:22 --> 00:11:30
scored the same there um uh GPT did a

00:11:27 --> 00:11:33
bit better

00:11:29 --> 00:11:34
quote unquote or you know it it sensors

00:11:32 --> 00:11:38
less a little bit Freer to speak its

00:11:33 --> 00:11:40
mind yeah but but still around 40% as

00:11:37 --> 00:11:45
opposed to 85% on this particular test

00:11:39 --> 00:11:48
set Gemini did which is Google's did um

00:11:44 --> 00:11:50
did better than that uh and

00:11:47 --> 00:11:52
then this this is probably not

00:11:49 --> 00:11:54
surprising but there's there's one large

00:11:51 --> 00:11:57
Foundation model that does especially

00:11:53 --> 00:12:01
well on the on the censorship Benchmark

00:11:56 --> 00:12:05
which is uh grock from from from from

00:12:00 --> 00:12:07
xai um is is like a relatively free

00:12:04 --> 00:12:10
model wow cool when it comes to the the

00:12:06 --> 00:12:11
sensitive Chinese political topics uhuh

00:12:09 --> 00:12:14
I mean that's that's to me is amazing

00:12:10 --> 00:12:16
that you know the a lot of American

00:12:13 --> 00:12:18
commentators were deriding the Chinese

00:12:15 --> 00:12:20
model for censoring things and CH

00:12:17 --> 00:12:22
sensitive Chinese topics and then kind

00:12:19 --> 00:12:25
of look in your own backyard right like

00:12:21 --> 00:12:27
the Western models are doing the same

00:12:24 --> 00:12:29
yeah that's that's that's a that's an

00:12:26 --> 00:12:30
interesting Insight yeah it's kind of

00:12:28 --> 00:12:32
the whole slippery slope thing right

00:12:29 --> 00:12:35
like once you start censoring one thing

00:12:31 --> 00:12:37
it's out of control yeah um yeah that's

00:12:34 --> 00:12:39
great I guess I guess the maybe maybe

00:12:36 --> 00:12:40
kind of transitioning here right because

00:12:38 --> 00:12:42
I think a lot of our a lot of folks are

00:12:39 --> 00:12:45
figuring out how can how can they use

00:12:41 --> 00:12:46
this stuff um interesting to hear that

00:12:44 --> 00:12:49
some of the risks are somewhat similar

00:12:45 --> 00:12:50
to other models um would love to maybe

00:12:48 --> 00:12:53
just double click on sort of like if

00:12:49 --> 00:12:55
you're an Enterprise if you're a tech

00:12:52 --> 00:12:57
person in a large company or a Silicon

00:12:54 --> 00:12:59
Valley tech company and you want to play

00:12:56 --> 00:13:00
with deep seek how should they think

00:12:58 --> 00:13:02
about kind of using the thing how do

00:12:59 --> 00:13:03
they protect themselves what kind of

00:13:01 --> 00:13:05
steps would you

00:13:02 --> 00:13:08
recommend yeah how do they protect their

00:13:04 --> 00:13:09
infrastructure in other words I think in

00:13:07 --> 00:13:13
terms of protecting

00:13:08 --> 00:13:14
infrastructure I would just say I mean

00:13:12 --> 00:13:16
first of all don't use the model that's

00:13:13 --> 00:13:20
hosted in China right do it yourself or

00:13:15 --> 00:13:21
use one of these us providers um yeah

00:13:19 --> 00:13:26
you know H happy that I can give you

00:13:20 --> 00:13:29
that that Insight honestly I I would say

00:13:25 --> 00:13:31
so I I just think it it it depends very

00:13:28 --> 00:13:34
heavily on how you want to use it like I

00:13:30 --> 00:13:36
said um I'm less worried about the overt

00:13:33 --> 00:13:37
censorship and and more just about you

00:13:35 --> 00:13:39
know what what are the other

00:13:36 --> 00:13:41
manipulations or or back doors that that

00:13:38 --> 00:13:44
could be in it

00:13:41 --> 00:13:46
um what I've been telling most people

00:13:43 --> 00:13:48
who ask is like let's just wait a few

00:13:45 --> 00:13:50
eeks and there will be an open source

00:13:47 --> 00:13:52
model that that implements this

00:13:49 --> 00:13:54
reinforcement learning technique and you

00:13:51 --> 00:13:56
'll you'll get great reasoning on par

00:13:53 --> 00:13:58
with with what we see from Deep seek

00:13:55 --> 00:14:01
yeah and I I kind of think that's the

00:13:57 --> 00:14:03
play for for um if you're a serious

00:14:00 --> 00:14:06
Enterprise that would be the the safest

00:14:02 --> 00:14:08
hing to do and I I don't like I I don't

00:14:05 --> 00:14:09
hink you will have to be that patient

00:14:07 --> 00:14:11
in order in order for an equivalent

00:14:09 --> 00:14:13
model to come out so you think there's

00:14:10 --> 00:14:15
enough uncertainty around the build and

00:14:12 --> 00:14:17
configuration of this thing that

00:14:14 --> 00:14:18
enterprises should wait for a more

00:14:16 --> 00:14:20
trusted source to produce one that they

00:14:17 --> 00:14:23
can run locally I think even if you

00:14:19 --> 00:14:26
start building on top of it you're G to

00:14:22 --> 00:14:28
swap it out pretty quickly because

00:14:25 --> 00:14:30
anecdotally and also from from our tests

00:14:27 --> 00:14:33
I mean deep deep seek isn't really a

00:14:29 --> 00:14:36
great daily driver it's it's very slow

00:14:32 --> 00:14:38
it's for Bose and you know it like

00:14:35 --> 00:14:40
throws random Chinese characters in in

00:14:37 --> 00:14:42
its answers and stuff stuff like that so

00:14:39 --> 00:14:44
it's just it's like not that great to

00:14:41 --> 00:14:46
build on top of the excitement around it

00:14:44 --> 00:14:48
is well warranted but I think in an

00:14:46 --> 00:14:50
Enterprise or infrastructure context I

00:14:47 --> 00:14:52
would probably wait for something that

00:14:49 --> 00:14:55
is more stable and then doesn't have

00:14:51 --> 00:14:57
these questions hanging over it that's

00:14:54 --> 00:15:00
my take if I had to deploy deep seek I

00:14:56 --> 00:15:03
would probably focus on use cases that

00:14:59 --> 00:15:04
we're not end user facing M because like

00:15:02 --> 00:15:07
again going back to what we were talking

00:15:03 --> 00:15:09
about earlier deep seek is like

00:15:06 --> 00:15:11
specially susceptible to basic

00:15:08 --> 00:15:13
jailbreaks and it would be a real pain

00:15:10 --> 00:15:15
to have to harden that if you're putting

00:15:12 --> 00:15:19
this out to users or the public or that

00:15:14 --> 00:15:19
kind of thing

00:15:18 --> 00:15:23
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
